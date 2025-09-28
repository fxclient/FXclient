var l, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, at, au, av, aw, ax, h, ay, az, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, bA, bB,
	bC, bD, bE, bF, bG, bH, bI, bJ, bK, bL, bM, bN, bO, bP, bQ, bR, bS, bT, t, bU, bV, bW, bX, bY, bZ, ba, bb, bc, bd, be, bf, bg, bh, a0, bi, bj, bk, o, bl, bm, bn, bo, bp, bq, br, bs, ff, fg, fh, fi, fj, fk, fl, fm, fn, fo, fp, fq, fr, i0, iQ, iR,
	a7z, ln, jx, a1d, um, yI, aC2, a4o, a4p, S = ["div", "100%", "⬅️ ", "absolute", "canvas", "none", "inherit", "rgb(", "0.75em", "<br>", "rgba(", "auto", "0.8em", "center", "   ", "span", "hidden", "flex", "1em", "Data", "0.5em", " / ",
		"territorial.io", "input", "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==", "click", "' target='_blank'>",
		"undefined", "pre", "</a>", "underline", "scroll", "pointer", "password", "middle", "function", "break-word", "bold", "Value", "Escape", "Enter", "1.5em", "0.6em", "0.4em", "text", "string", "rgba(0,0,0,0.8)", "number", "nowrap",
		"mouseleave", "inline-block", "focus", "blur", "Space", "Redacted ", "Player ", "NoStack", "<a href='", "50%", "1.2em", "1.0em", "0px", "0.3em", "0.0em 0.9em", " voted with ", "  • ", "   Gold: ", "🔄 Reload", "wheel", "top", "tls7",
		"Trebuchet MS", "rgba(140,10,10,0.75)", "rgba(100,0,0,0.8)", "rgba(10,140,10,0.75)", "rgba(0,100,0,0.8)", "rgba(0,", "rgb(10,220,10)", "pre-wrap", "placeholder", "mouseover", "mouseout", "long", "logo", "loading", "keydown", "italic ",
		"file", "error", "en-US", "dotted", "data:image/png;base64,", "break-all", "blur(4px)", "arena", "account", "accept", "_blank", "[Redacted Message]", "Seed", "Reload", "Patreon", "Interest", "False Reporter", "Cheater", "Bot ",
		"Battle Royale", "Back", "Audit Log", "Arial Black, Trebuchet MS", "@room", "<a href='https://territorial.io/wiki/transactions' target='_blank'>territorial.io/wiki/transactions</a>", "1v1", "1 Minute", "1 Hour", "1 Day", "000", "0.4em 0em",
		"0.2em", ". Duration: x", ",0,0.85)", " solid white;}", " Rank: ", " / 160", " -> "
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
		.df(), (bX = new dg).dd(), bA.dd(), bV.dd(), b0.dd(), bF.dd(), bG.dd(), bS.dd(), t.dd(), bY = new dh, h.dd(), a0.a1.di(), bf.dd(), bc.dd(), bW.dd(), bZ = new dj, ay.dd(), ae.dk(), bU.dd(), ap.dd(), aa.dd(), aT.dd(), ai.dd(), bJ.dd(), ab
		.dd(), bf.dl = !0, setTimeout(function() {
			bS.a7(2, 14071)
		}, 0), t.u(5, 5), bI.dm() || a0.a1.dn(), h.dp(), l.m = 1)
}

function dG() {
	this.dq = 1113, this.n = 2130, this.rVersion = 15, this.dr = 0, this.dd = function() {
		this.ds = 2;
		var dt = bL.du(this.n, 10) % 100;
		this.dw = "26 Sep 2025 [" + bL.du(this.n, 1e3) + "." + (dt < 10 ? "0" : "") + dt + "." + this.n % 10 + "]", this.a9 = true, this.aA = function() {
			try {
				return window.self !== window.top
			} catch (e) {
				return !0
			}
		}(), this.dy = (new Date).getTime() % 1048576
	}, this.m = 0
}

function dz() {
	var e0 = [L(0), L(1), L(2), L(3), L(4), L(5), L(6)],
		e1 = [100, 60, 30, 15, 6, 1],
		e2 = [
			[0, 0, 0, 0, 0],
			[0, 1, 1, 1, 1],
			[1, 2, 1, 1, 1],
			[1, 3, 2, 1, 2],
			[1, 4, 2, 2, 3],
			[1, 4, 3, 3, 4],
			[1, 5, 3, 3, 5]
		],
		e3 = [" 👢 kicked ", " 🔇 muted ", " ✂️ redacted the username of ", " deducted x from ", " seized x from ", " 🚩 reported "],
		e5 = [".", ". Duration: x", ". Duration: x", ".", ".", ". Reason: x"];
	this.e6 = [
		["", "", ""],
		["20 Seconds", "1 Minute", "5 Minutes", "1 Hour", "1 Day"],
		["1 Minute", "1 Hour", "1 Day"],
		["0.1 Elo Points", "0.2 Elo Points", "0.3 Elo Points"],
		["0.5 Gold", "1 Gold", "2 Gold", "5 Gold", "10 Gold"],
		["Offensive Name", "Hate Speech", "Cheater", "False Reporter"]
	], this.e7 = function(id, e8, e9) {
		e8 = this.eA(e8);
		return +(e2[e8][id] > e9)
	}, this.eA = function(e8) {
		for (var aB = 0; aB < e1.length; aB++)
			if (e1[aB] <= e8) return aB;
		return e1.length
	}, this.eB = function(e8) {
		return e0[this.eA(e8)]
	}, this.eC = function(id, eD) {
		return e3[id].replace(new RegExp("x", "g"), eD)
	}, this.eE = function(id, eD) {
		return e5[id].replace(new RegExp("x", "g"), eD)
	}, this.eF = function(id, eG) {
		return this.e6[5][id]
	}
}

function dE() {
	this.eH = new eI, this.dd = function() {
		a0.a1.eJ()
	}, this.eK = function() {
		return bj.eL.data[160].value
	}
}

function eI() {
	var eM = 12e3;
	this.show = function(eN) {
		return !eN && !(bU.eK() || 2 !== a0.id || bf.eO < eM || (eM = bf.eO + 3e5, 2 !== l.ds)) && a0.a1.eP(Math.floor(3e5))
	}
}

function cX() {
	this.eQ = new eR
}

function eR() {
	this.eS = function(eT) {
		var eW;
		return bS.eU(bS.eV) && aD.data.passableMountains && (eW = ac.eX(eT), this.eY(aD.eZ, eW) || this.ea(aD.eZ, eW)) && 0 !== (eW = function(ev) {
			for (var ew = bM.ex(ev), ey = bM.ez(ev), max = Math.max(bS.f0, bS.f1) - 2, f2 = max * max, f3 = !1, f4 = 0, f5 = 0; f5 < max; f5++) {
				var f6, eb = function(ew, ey, f5) {
					for (var aB = 0; aB <= f5; aB++)
						for (var f8 = -1; f8 < 2; f8 += 2)
							for (var f9 = -1; f9 < 2; f9 += 2)
								for (var fA = 0; fA < 2; fA++) {
									var eT = function(ew, ey) {
										if (bM.fC(ew, ey)) {
											ew = bM.fD(ew, ey), ey = bM.ef(ew);
											if (ac.ek(ey) && ac.fE(ey)) return ew
										}
										return 0
									}(ew + fA * f8 * aB + (1 - fA) * f9 * f5, ey + fA * f9 * f5 + (1 - fA) * f8 * aB);
									if (eT) return eT
								}
					return 0
				}(ew, ey, f5);
				eb && (f6 = bM.f7(ew, ey, eb)) < f2 && (f4 = eb, f2 = f6, f3 || (f3 = !0, max = Math.floor(Math.sqrt(f6)) + 1))
			}
			return f4
		}(bM.ed(eT))) && (eT = bM.ef(eW), ac.eg(eT) || (eT = ac.eh(eT)) !== aD.eZ && bs.ei(eT, aD.eZ)) ? eW : 0
	}, this.ej = function(player, eb) {
		eb = bM.ef(eb);
		if (ac.ek(eb)) {
			if (ac.eg(eb)) bO.el[0] = aD.em;
			else if (ac.eh(eb) !== bO.el[0]) return !1;
			for (var en = function(eT) {
					var er = ac.er,
						en = [];
					loop: for (var es = 3; 0 <= es; es--) {
						var et = eT + er[es];
						if (ac.eu(et)) {
							for (var id = ac.eX(et), aB = 0; aB < en.length; aB++)
								if (id === en[aB]) continue loop;
							bO.eq[en.length] = et, en.push(id)
						}
					}
					return en
				}(eb), ep = en.length, aB = 0; aB < ep; aB++)
				if (this.eY(player, en[aB]) || this.ea(player, en[aB])) return bO.eq[0] = bO.eq[aB], !0
		}
		return !1
	}, this.eY = function(player, eW) {
		for (var fF = ag.fF[player], ep = fF.length, fG = Math.max(bL.du(ep, 12), 1), er = ac.er, aB = 0; aB < ep; aB += fG)
			for (var ee = fF[aB], es = 3; 0 <= es; es--) {
				var et = ee + er[es];
				if (ac.eu(et) && eW === ac.eX(et)) return !0
			}
		return !1
	}, this.ea = function(player, eW) {
		for (var fF = ag.fF[player], ep = fF.length, er = ac.er, aB = 0; aB < ep; aB++)
			for (var ee = fF[aB], es = 3; 0 <= es; es--) {
				var et = ee + er[es];
				if (ac.eu(et) && eW === ac.eX(et)) return !0
			}
		return !1
	}
}

function d7() {
	this.g = new Array(4), this.fJ = new Uint16Array(2), this.fK = new Uint16Array(2), this.fL = new Int32Array(2), this.fM = new Uint32Array(2), this.fN = new Uint32Array(2), this.fO = new Uint8Array(4), this.fP = new Uint8Array(4), this.eq =
		new Uint32Array(4), this.fQ = new Uint32Array(5), this.el = new Uint32Array(8), this.fR = new Uint32Array(8), this.fS = new Uint16Array(16), this.fT = new Uint16Array(512), this.fU = new Uint16Array(512), this.fV = new Uint16Array(512), this
		.fW = new Uint16Array(0), this.dd = function() {
			var ep = bS.f0 * bS.f1;
			this.fW.length !== ep && (this.fW = new Uint16Array(ep))
		}, this.fX = function(g, fY) {
			return g[0] = fY, g
		}, this.fZ = function(g, fY, fa) {
			return g[0] = fY, g[1] = fa, g
		}, this.fb = function(g, fY, fa, fc) {
			return g[0] = fY, g[1] = fa, g[2] = fc, g
		}, this.fd = function(g, fY, fa, fc, fe) {
			return g[0] = fY, g[1] = fa, g[2] = fc, g[3] = fe, g
		}
}

function fs() {
	fl = 0, fm = 2048, fn = new Uint32Array(4 * fm), fo = 0, fp = new Uint32Array(fm), fq = new Uint8Array(bS.f0 * bS.f1)
}

function ft(player) {
	fg = player, fr = !1, fu(), fv();
	for (var aB = ad.fw(fg) - 1; 0 <= aB; aB--) ff = aB, fx();
	fr && fy()
}

function fy() {
	bs.fz(), bs.g0()
}

function fx() {
	fk = ad.g1(fg, ff), fh = ad.g2(fg, ff), fi = ad.g3(fg, ff), g4(), (0 !== fl && (g6(), g7()) ? g8 : g5)()
}

function g7() {
	if (!((fj = bL.du(fh, fl)) > aD.g9)) {
		if (!fi) return !1;
		var gA = fl * (1 + aD.g9);
		fh += bA.gB.gC(fg, gA - fh), fj = bL.du(fh, fl)
	}
	return !0
}

function g6() {
	for (var aB = fl - 1; 0 <= aB; aB--) fq[bL.du(fn[aB], 4)] = 0
}

function g5() {
	1 === ad.fw(fg) && aF.gD(fg);
	var dt = bA.gB.gE(fg, fh);
	bd.gF(fg, fh - dt, 12), ad.gG(fg, ff)
}

function fu() {
	for (var player = fg, gH = ag.gH, ep = Math.min(gH[player].length, fm), gI = 0, gJ = fp, aB = ep - 1; 0 <= aB; aB--) gJ[gI++] = gH[player][aB];
	fo = gI
}

function fv() {
	for (var aB = ag.gH[fg].length - 1; 0 <= aB; aB--) ac.ek(ag.gH[fg][aB]) && ac.gK(ag.gH[fg][aB], fg);
	ag.gH[fg] = []
}

function g4() {
	fl = 0, (fk === aD.em ? gL : gM)()
}

function gM() {
	for (var gN, gO, aB, er = ac.er, es = 3; 0 <= es; es--)
		for (aB = fo - 1; 0 <= aB; aB--) gN = fp[aB] + er[es], gO = bL.du(gN, 4), 0 === fq[gO] && ac.gP(gN) && ac.eh(gN) === fk && (fq[gO] = 1, fn[fl++] = gN)
}

function gL() {
	for (var gN, gO, aB, er = ac.er, es = 3; 0 <= es; es--)
		for (aB = fo - 1; 0 <= aB; aB--) gN = fp[aB] + er[es], gO = bL.du(gN, 4), 0 === fq[gO] && ac.eg(gN) && (fq[gO] = 1, fn[fl++] = gN)
}

function g8() {
	gQ() ? (gR(), fk !== aD.em && gS()) : g5()
}

function gS() {
	bs.gT(), bs.gU(ag.gV[fk]), bs.gU(ag.gW[fk]), bS.eU(bS.eV) && bs.gU(ag.fF[fk]), bs.gX(ag.gH[fk]), bs.gY(ag.gW[fk]), bs.gY(ag.fF[fk]), bs.gZ(), bs.ga()
}

function gR() {
	fr = !0, ad.gb(fg, ff, fh), ad.gc(fg, ff), ag.gd[fg] += fl, bs.ge(), gf()
}

function gQ() {
	return (fk === aD.em ? gg : gh)()
}

function gh() {
	var gi = fl * aD.g9,
		gj = gk(),
		gl = gm(),
		gj = gi + 2 * gj + gl,
		go = fj * fl;
	return gj < go ? (fh -= gj, bd.gF(fg, gj, 13), gp(gj - gi, gl), !0) : fi && 0 === gl ? (fh -= go, go += bA.gB.gC(fg, gj - go + 1), bd.gF(fg, go, 13), gp(go - gi, 0), !0) : (fh -= go, bd.gF(fg, go, 13), gp(go - gi, gl), !1)
}

function gp(go, gl) {
	if (0 < gl) {
		if (go <= gl) return bd.gF(fk, go, 13), void ad.gq(fk, fg, gl - go);
		ad.gq(fk, fg, 0), go -= gl
	}
	go = bL.du(go, 2), go = Math.min(ag.gr[fk], go), bd.gF(fk, go, 13), ag.gr[fk] -= go
}

function gm() {
	return ad.gs(fk, fg)
}

function gk() {
	return bL.du(fl * ag.gr[fk], 1 + bL.du(10 * ag.gd[fk], 16))
}

function gg() {
	var gt = fl * aD.g9;
	return fh -= gt, bd.gF(fg, gt, 13), !0
}

function gf() {
	for (var aB = fl - 1; 0 <= aB; aB--) ag.gH[fg].push(fn[aB]), ag.gV[fg].push(fn[aB]), ac.gK(fn[aB], fg)
}

function dC() {
	var gu = 0,
		gv = 0;
	this.gw = function(ew, ey) {
		gu = ew, gv = ey
	}, this.gx = function(code) {
		var h4, h6, eb;
		aD.gy || aM.gz || (bA.gB.h0(0) || bA.gB.h0(1)) && bA.gB.h1(aD.eZ) && (aR.h2(gu, gv) ? aR.h3 = !1 : aP.h2(gu, gv) || (h4 = bM.h5(gu), h6 = bM.h7(gv), eb = bM.fD(h4, h6), bM.h8(h4, h6) && (0 === code ? function(eb) {
			var hC, eT, ee;
			aD.hD ? -1 !== (hC = br.hE(eb)) && b8.hF.hG(eb) : (eT = bM.ef(eb), ac.eu(eT) ? (hC = am.eQ.eS(eT)) && (ee = bM.ef(hC), ee = ac.eg(ee) ? aD.em : ac.eh(ee), b8.hF.hI(aR.hJ(), hC, ee)) : (hC = br.hK(eb)) < 0 || (eT = bM
				.ef(hC), ac.eg(eT) ? bs.hL(aD.eZ) ? b8.hF.hM(aR.hJ(), aD.em) : ad.fw(aD.eZ) && b1.hN(aD.em, aR.hJ()) : (ee = ac.eh(eT), bs.ei(ee, aD.eZ) && (bs.hO(aD.eZ, ee) ? b8.hF.hM(aR.hJ(), ee) : ad.fw(aD.eZ) && b1.hN(
					ee, aR.hJ())))))
		}(eb) : 1 === code ? function(eb) {
			bN.hP.hQ(aD.eZ, eb) && b8.hF.hR(aR.hJ(), bO.fR[7])
		}(eb) : 2 === code && function(eb) {
			bN.hS.hT(aD.eZ, eb) && b8.hF.hU(aR.hJ())
		}(eb))))
	}, this.hV = function() {
		if (!aD.gy && !aM.gz && bA.gB.h0(1)) {
			var gN = aD.eZ;
			if (bA.gB.h1(gN)) {
				var ep = ad.fw(gN);
				if (ep < 1) ! function() {
					var gN = aD.eZ;
					if (bs.hL(gN)) b8.hF.hM(aR.hJ(), aD.em);
					else
						for (var er = ac.er, gV = ag.gV, ep = gV[gN].length, hf = Math.floor(Math.random() * ep), aB = 0; aB < ep; aB++)
							for (var hg = 3; 0 <= hg; hg--) {
								var hh = gV[gN][(aB + hf) % ep] + er[hg];
								if (ac.gP(hh)) {
									hh = ac.eh(hh);
									if (hh !== gN && (!aD.hj || bs.ei(gN, hh))) return b8.hF.hM(aR.hJ(), hh)
								}
							}
				}();
				else {
					for (var hX = 0, hY = ad.g2(gN, 0), aB = 1; aB < ep; aB++) {
						var hZ = ad.g2(gN, aB);
						hZ < hY && (hY = hZ, hX = aB)
					}
					b8.hF.hM(aR.hJ(), ad.g1(gN, hX))
				}
			}
		}
	}, this.ha = function() {
		if (!aD.gy && !aM.gz && bA.gB.h1(aD.eZ) && bA.gB.h0(1)) return aw.hb ? aw.hc(aD.eZ) ? void b8.hF.hd(1) : void 0 : void(aw.he(aD.eZ) && b8.hF.ha())
	}
}

function hk(hl, size, hm, hn, font) {
	var aB, hq = .2,
		canvas = document.createElement("canvas"),
		hr = canvas.getContext("2d", {
			alpha: !1
		});
	for (canvas.width = hl, canvas.height = hl, hr.font = size + font, hr.textAlign = "center", hr.textBaseline = "middle", hr.fillStyle = "red", aB = 0; aB < hm.length; aB++) hr.fillText(hm[aB], .5 * hl, .5 * hl);
	return -1 < (canvas = function(ho) {
		var aB, e8, es = ho.data;
		for (aB = es.length - 4; 0 <= aB; aB -= 4)
			if (e8 = es[aB], hn <= e8) return Math.floor(aB / (4 * hl));
		return -1
	}(hr.getImageData(0, 0, hl, hl))) && (hq = (canvas - .5 * hl + .1 * size) / size), Math.max(hq, 0)
}

function d5() {
	this.ht = new Int16Array(4), this.hu = new Int16Array(4), this.hv = null, this.dd = function() {
		var aB;
		for (this.ht[0] = -bS.f0, this.ht[1] = 1, this.ht[2] = bS.f0, this.ht[3] = -1, this.hv = new Int16Array([-bS.f0, 1 - bS.f0, 1, bS.f0 + 1, bS.f0, bS.f0 - 1, -1, -bS.f0 - 1]), aB = 0; aB < 4; aB++) this.hu[aB] = 4 * this.ht[aB]
	}, this.hw = function() {
		return bL.hx(Math.floor(.15 * (1 + .25 * a0.a1.hy()) * h.hz / i0), 4, 128)
	}, this.i1 = function(eT, id) {
		for (var i2 = this.hu, aB = 0; aB < 4; aB++) {
			var ee = eT + i2[aB];
			if (ac.i3(ee) && ac.eX(ee) === id) return !0
		}
		return !1
	}, this.i4 = function(player, eT) {
		return !ac.eg(eT) && player === ac.eh(eT)
	}, this.f7 = function(h4, h6, eb) {
		return (h4 -= this.ex(eb)) * h4 + (h6 -= this.ez(eb)) * h6
	}, this.i5 = function(i6, i7, i8) {
		i6 = this.iA(i6) - this.iB(i8), i7 = this.iD(i7) - this.iE(i8);
		return Math.sqrt(i6 * i6 + i7 * i7)
	}, this.iF = function(iG, iH) {
		var i9 = this.ex(iG) - this.ex(iH),
			iG = this.ez(iG) - this.ez(iH);
		return ~~Math.sqrt(i9 * i9 + iG * iG + .5)
	}, this.iI = function(iG, iH) {
		var i9 = this.ex(iG) - this.ex(iH),
			iG = this.ez(iG) - this.ez(iH);
		return i9 * i9 + iG * iG
	}, this.iJ = function(iK, iL, iM, iN) {
		return (iK -= iM) * iK + (iL -= iN) * iL
	}, this.iO = function(gN, iP) {
		return bL.du(iP * ag.gr[gN], 1e3)
	}, this.iA = function(i6) {
		return 16 * (i6 + iQ) / i0
	}, this.iD = function(i7) {
		return 16 * (i7 + iR) / i0
	}, this.iS = function(es) {
		return 16 * es / i0
	}, this.h5 = function(i6) {
		return Math.floor((i6 + iQ) / i0)
	}, this.h7 = function(i7) {
		return Math.floor((i7 + iR) / i0)
	}, this.h8 = function(h4, h6) {
		return 1 <= h4 && 1 <= h6 && h4 < bS.f0 - 1 && h6 < bS.f1 - 1
	}, this.ex = function(eb) {
		return eb % bS.f0
	}, this.ez = function(eb) {
		return bL.du(eb, bS.f0)
	}, this.fD = function(h4, h6) {
		return h6 * bS.f0 + h4
	}, this.iT = function(h4, h6) {
		return 4 * this.fD(h4, h6)
	}, this.iU = function(eb) {
		return this.fC(this.ex(eb), this.ez(eb))
	}, this.fC = function(h4, h6) {
		return 0 < h4 && h4 < bS.f0 - 1 && 0 < h6 && h6 < bS.f1 - 1
	}, this.ef = function(eb) {
		return eb << 2
	}, this.ed = function(eT) {
		return eT >> 2
	}, this.iV = function(eb) {
		return bS.f0 * this.ez(eb) * 256 + (this.ex(eb) << 4)
	}, this.iW = function(eb) {
		return this.iV(eb) + 8 + (bS.f0 << 7)
	}, this.iX = function(i8) {
		return bS.f0 * (this.iE(i8) >> 4) + (this.iB(i8) >> 4)
	}, this.iY = function(i8) {
		i8 = this.iX(i8);
		return (this.ex(i8) >> 5) + bN.iZ.ia * (this.ez(i8) >> 5)
	}, this.iB = function(i8) {
		return i8 % (bS.f0 << 4)
	}, this.iE = function(i8) {
		return bL.du(i8, bS.f0 << 4)
	}, this.ib = function(eb, hg) {
		return eb + this.ht[hg]
	}, this.ic = function(eT, hg) {
		return eT + this.hu[hg]
	}, this.ie = function(iG, iH) {
		var i9 = this.ex(iH) - this.ex(iG),
			iH = this.ez(iH) - this.ez(iG);
		return Math.abs(i9) >= Math.abs(iH) ? 1 + 2 * (i9 < 0) : 2 * (0 < iH)
	}, this.ig = function(player) {
		return this.fD(ag.ih[player] + ag.ii[player] >> 1, ag.ij[player] + ag.ik[player] >> 1)
	}, this.il = function(player) {
		return this.fD(ay.im(ag.ih[player], ag.ii[player]), ay.im(ag.ij[player], ag.ik[player]))
	}
}

function cl() {
	this.io = new ip, this.iq = new ir, this.is = new it, this.performance = new iu, this.iv = new iw, this.ix = new iy, this.iz = new j0, this.j1 = new j2, this.j3 = new j4, this.dd = function() {
		this.io.dd(), this.is.dd(), this.performance.dd(), this.iv.dd(), this.ix.dd()
	}, this.j5 = function() {
		this.performance.j5(), this.io.j5(), this.is.j6()
	}
}

function iw() {
	var j7, j9 = new Uint16Array(8);

	function jH(size, player) {
		for (var aB = ag.gH[player].length - 1; size <= aB; aB--) ac.jO(ag.gH[player][aB], player)
	}
	this.dd = function() {
		j7 = 0
	}, this.jA = function(player, jB) {
		return bO.el[1] = ag.gH[player].length, bO.el[0] === aD.em ? ao.iv.jC(player) : this.jD(player, bO.el[0]), (0 !== bO.el[1] || 0 !== ag.gH[player].length) && !(!jB && bO.el[1] === ag.gH[player].length || (bO.el[0] === aD.em ? ag.jE[
			player]++ : ag.jF[player]++, 0))
	}, this.jG = function(player) {
		jH(bO.el[1], player), ad.jI(player, bO.fM[0], bO.el[0]), aF.jJ(player, !1)
	}, this.jK = function(player, jL, ep, hY) {
		var jM = bL.du(12 * ag.gr[player], 1024);
		hY -= hY >= bL.du(ag.gr[player], 2) ? jM : 0, jH(ep, player), ad.jI(player, hY, jL), ag.gr[player] -= hY + jM, aF.jJ(player, !1)
	}, this.jD = function(player, jL) {
		for (var hg, er = ac.er, aB = ag.gV[player].length - 1; 0 <= aB; aB--)
			if (ac.jN(ag.gV[player][aB]))
				for (hg = 3; 0 <= hg; hg--)
					if (ac.gP(ag.gV[player][aB] + er[hg]) && ac.eh(ag.gV[player][aB] + er[hg]) === jL) {
						ag.gH[player].push(ag.gV[player][aB]);
						break
					}
	}, this.jC = function(player) {
		for (var er = ac.er, aB = ag.gV[player].length - 1; 0 <= aB; aB--)
			if (ac.jN(ag.gV[player][aB]))
				for (var hg = 3; 0 <= hg; hg--)
					if (ac.eg(ag.gV[player][aB] + er[hg])) {
						ag.gH[player].push(ag.gV[player][aB]);
						break
					}
	}, this.jP = function(player, jQ) {
		var aB, f8, hg, hi, ep = ag.gV[player].length,
			jR = 256 <= ep ? 12 : 32 <= ep ? 6 : 1,
			jS = ep - 1 - ay.jT(jR),
			er = ac.er;
		j7 = 0;
		loop: for (aB = jS; 0 <= aB; aB -= jR)
			for (hg = 3; 0 <= hg; hg--)
				if ((hi = ac.eg(ag.gV[player][aB] + er[hg]) ? aD.em : ac.eh(ag.gV[player][aB] + er[hg])) === aD.em || ac.gP(ag.gV[player][aB] + er[hg]) && hi !== player && (jQ || bs.ei(player, hi))) {
					for (f8 = j7 - 1; 0 <= f8; f8--)
						if (j9[f8] === hi) continue loop;
					if (j9[j7] = hi, 8 <= ++j7) return !0
				}
		return 0 < j7
	}, this.jU = function(player, jQ) {
		var aB, hg, hi, er = ac.er;
		for (j7 = 0, aB = ag.gV[player].length - 1; 0 <= aB; aB--)
			for (hg = 3; 0 <= hg; hg--)
				if ((hi = ac.eg(ag.gV[player][aB] + er[hg]) ? aD.em : ac.eh(ag.gV[player][aB] + er[hg])) === aD.em || ac.gP(ag.gV[player][aB] + er[hg]) && hi !== player && (jQ || bs.ei(player, hi))) return j9[j7++] = hi, !0;
		return !1
	}, this.jV = function() {
		for (var f9, aB = j7 - 1; 0 <= aB; aB--)
			if (j9[aB] === aD.em) {
				for (j7--, f9 = aB; f9 < j7; f9++) j9[f9] = j9[f9 + 1];
				return !0
			} return !1
	}, this.jW = function(player) {
		for (var f9, aB = j7 - 1; 0 <= aB; aB--)
			if (ad.jX(player, j9[aB]))
				for (j7--, f9 = aB; f9 < j7; f9++) j9[f9] = j9[f9 + 1];
		return 0 === j7
	}, this.jY = function() {
		for (var aB = j7 - 1; 0 <= aB; aB--)
			if (bA.gB.jZ(j9[aB])) return !0;
		return !1
	}, this.ja = function() {
		for (var aB = j7 - 1; 0 <= aB; aB--) bA.gB.jZ(j9[aB]) || (j9[aB] = j9[--j7]);
		return 0 < j7
	}, this.jb = function(player) {
		for (var f9, jc = j9[0], jd = ag.gr[jc] + ad.gs(jc, player), aB = j7 - 1; 1 <= aB; aB--)(f9 = ag.gr[j9[aB]] + ad.gs(j9[aB], player)) < jd && (jc = j9[aB], jd = f9);
		return jc
	}, this.je = function(player) {
		var j, jf = j9[0];
		if (1 !== j7)
			for (var jg = bL.du(ag.ii[player] + ag.ih[player], 2), jh = bL.du(ag.ik[player] + ag.ij[player], 2), f5 = ji(jg - bL.du(ag.ii[jf] + ag.ih[jf], 2)) + ji(jh - bL.du(ag.ik[jf] + ag.ij[jf], 2)), aB = j7 - 1; 1 <= aB; aB--)(j = ji(jg - bL
				.du(ag.ii[j9[aB]] + ag.ih[j9[aB]], 2)) + ji(jh - bL.du(ag.ik[j9[aB]] + ag.ij[j9[aB]], 2))) < f5 && (f5 = j, jf = j9[aB]);
		return jf
	}, this.jj = function() {
		for (var jk = j9, jl = jk[0], gr = ag.gr, jm = gr[jl], aB = j7 - 1; 1 <= aB; aB--) {
			var gN = jk[aB],
				f9 = gr[gN];
			jm < f9 && (jl = gN, jm = f9)
		}
		return jl
	}, this.jn = function() {
		return j9[ay.jT(j7)]
	}
}

function iy() {
	function k3(player, jL, jt) {
		3 <= jt && 2142 < bf.k9() && (jL === aD.em || ag.gr[jL] < bL.du(ag.gr[player], 20)) && aE.jy(player, 20)
	}

	function k6(player, hY, jL, jt) {
		3 <= jt && jt < 6 && bL.du(ag.gr[player], 8) > ag.gr[jL] && (hY = Math.max(bL.du(11 * ag.gr[jL], 5), bL.du(ag.gr[player], 10)));
		jt = ag.gH[player].length;
		ao.iv.jD(player, jL), ao.iv.jK(player, jL, jt, hY)
	}

	function k2(player, hY) {
		var jL = aD.em,
			ep = ag.gH[player].length;
		ao.iv.jC(player), ag.gH[player].length !== ep && ao.iv.jK(player, jL, ep, hY)
	}
	this.jo = new Uint8Array(aD.em), this.dd = function() {
		this.jo.fill(0)
	}, this.jp = function(player, hY) {
		var jr, jt, ju, jv;
		ad.jq(player) && (jr = ae.js(player), 3 <= (jt = aE.hY[player]) && jt < 6 && (hY = Math.max(ag.gr[player] - jr, hY)), ju = ag.gW[player].length, jv = ag.gV[player].length, 30 * ag.gd[player] > aD.jw && jx[player] < 10 && 100 * jv <= ju &&
			aE.jy(player, 10), aD.hj ? function(player, hY, jt, jr) {
				var jL;
				if (ao.iv.jP(player, !1) || ao.iv.jU(player, !1)) {
					if (!ao.iv.jW(player))
						if (ao.iv.jV()) k2(player, hY), k3(player, aD.em, jt);
						else {
							if (ay.k4(aE.k5[jt])) jL = ao.iv.jb(player);
							else {
								if (ao.iv.jY() && ay.k4(aE.k7[jt]) && ao.iv.ja(), 6 === jt) return k6(player, hY, ao.iv.jn(), jt);
								jL = ao.iv.je(player)
							}
							k6(player, hY, jL, jt), k3(player, jL, jt)
						}
				} else bN.k0.j5(player) || ao.iz.j5(player) || ! function(player, hY, jt, jr) {
					var jo = ao.ix.jo;
					jo[player] = 0;
					var kA = bg.en[player];
					if (0 !== kA) {
						var kB = ag.gr[player],
							gd = ag.gd;
						if (player < aD.kC && (hY = kB), !(kB < gd[player] || 5 === jt && kB < jr || 4 === jt && kB < bL.du(jr, 2))) {
							bh.kD(kA);
							for (var ep = bO.fK[0], fT = bO.fT, aB = ay.jT(ep), f9 = 0; f9 < ep; f9++) {
								var fA = fT[(f9 + aB) % ep];
								if (jo[fA]) return b8.kE.kF(player, fA, hY)
							}
							var kG = bN.y.kG;
							for (f9 = 0; f9 < ep; f9++)
								if (fA = fT[(f9 + aB) % ep], kG[fA] && fA !== player) return b8.kE.kF(player, fA, hY)
						}
					}
				}(player, hY, jt, jr)
			}(player, hY, jt, jr) : (!jv || ju && (ju < jv && !ay.jT(10) || 100 * jv <= ju && ay.jT(3) || !ay.jT(8))) && bN.k0.j5(player) || function(player, hY, jt) {
				ao.iv.jP(player, !0) || ao.iv.jU(player, !0) ? ao.iv.jW(player) || (ao.iv.jV() ? k2(player, hY) : ay.k4(aE.k5[jt]) ? k6(player, hY, ao.iv.jb(player), jt) : 5 === jt ? k6(player, hY, ao.iv.jj(), jt) : (ao.iv.jY() && ay.k4(aE
					.k7[jt]) && ao.iv.ja(), k6(player, hY, 6 === jt ? ao.iv.jn() : ao.iv.je(player), jt))) : ao.iz.j5(player)
			}(player, hY, jt))
	}
}

function c5() {
	var kH = new Uint8Array(aD.em),
		kI = new Uint16Array(aD.em),
		kJ = new Uint16Array(aD.em),
		kK = new Uint8Array(aD.em),
		kL = (this.hY = new Uint8Array(aD.em), new Uint16Array(aD.em)),
		kM = new Uint16Array(aD.em);

	function kb(aB) {
		kH[aB] = 1 + bL.du(kL[aB] * ay.random(), 10 * ay.value(100))
	}
	this.kN = null, this.k7 = [97, 94, 70, 40, 20, 0, 100], this.kO = [500, 450, 400, 300, 80, 50, 100], this.k5 = [0, 0, 5, 25, 50, 100, 0], this.kP = [60, 74, 112, 200, 256, 512, 512], this.kQ = [1, 2, 3, 4, 6, 8, 1], this.kR = [500, 450, 400, 300,
		80, 50, 100
	], this.kS = [100, 150, 250, 400, 600, 1e3, 100], this.de = function() {
		this.kN = [L(7), L(8), L(9), L(10), L(11), L(12), "H Bot"]
	}, this.dd = function() {
		kH.fill(0), kI.fill(0), kJ.fill(0), kK.fill(0), this.hY.fill(0), kL.fill(0), kM.fill(0);
		var kT = aD.kC;
		if (9 === aD.kU) this.kV();
		else if (aD.kW)
			if (3 === aD.data.botDifficultyType)
				for (aB = aD.kY - 1; 0 <= aB; aB--) {
					var hh = aB + kT;
					this.hY[hh] = aD.data.botDifficultyData[hh]
				} else if (2 === aD.data.botDifficultyType)
					for (aB = aD.kY - 1; 0 <= aB; aB--) this.hY[hh = aB + kT] = aD.data.botDifficultyTeam[bg.kZ[bg.en[hh]]];
				else if (1 === aD.data.botDifficultyType) {
			var ka = this.kN.length;
			for (aB = aD.kY - 1; 0 <= aB; aB--) this.hY[aB + kT] = aB % ka
		} else
			for (ka = aD.data.botDifficultyValue, aB = aD.kY - 1; 0 <= aB; aB--) this.hY[aB + kT] = ka;
		else
			for (var kX = 8 === aD.kU ? 1 : 0, aB = aD.kY - 1; 0 <= aB; aB--) this.hY[aB + kT] = kX;
		for (aB = 0; aB < kT; aB++) this.hY[aB] = 6;
		var ep = aD.em;
		for (aB = 0; aB < ep; aB++) this.hY[aB] <= 2 ? (kK[aB] = 5, kL[aB] = kM[aB] = 1040, 0 === this.hY[aB] ? (kI[aB] = 980, kJ[aB] = 980) : 1 === this.hY[aB] ? (kI[aB] = 980, kJ[aB] = 920, kL[aB] = kM[aB] = 1100) : (kI[aB] = 825, kJ[aB] =
			750)) : this.hY[aB] <= 4 ? (kK[aB] = 1 + ay.jT(20), 3 === this.hY[aB] ? (kI[aB] = kJ[aB] = 500, kL[aB] = kM[aB] = 1e3) : (kM[aB] = 250 + ay.jT(1501), kL[aB] = 500 + ay.jT(501), kI[aB] = 300 + ay.jT(201), kJ[aB] = 100 + ay.jT(
			201))) : this.hY[aB] <= 5 ? (kL[aB] = 1e3, kM[aB] = 1e3, kK[aB] = 35 + ay.jT(16), kI[aB] = 300 + ay.jT(201), kJ[aB] = 50 + ay.jT(101)) : (kL[aB] = kM[aB] = 800, kK[aB] = 5, kI[aB] = 10, kJ[aB] = 250), kb(aB)
	}, this.kV = function() {
		for (var eT = az.kc, kT = aD.kC, aB = eT - 1; 0 <= aB; aB--) this.hY[aB + kT] = 0;
		for (var f9 = 0; f9 < 6; f9++) {
			for (aB = eT + az.kd[f9] - 1; eT <= aB; aB--) this.hY[aB + kT] = f9;
			eT += az.kd[f9]
		}
	}, this.jy = function(gN, value) {
		kH[gN] = Math.min(value, kH[gN])
	}, this.j5 = function(gN) {
		0 == --kH[gN] && ! function(gN) {
			(function(gN) {
				kL[gN] !== kM[gN] && (kL[gN] += kL[gN] < kM[gN] ? 3 : -3);
				kI[gN] !== kJ[gN] && (kI[gN] += kI[gN] < kJ[gN] ? kK[gN] : -kK[gN], kI[gN] = (Math.abs(kI[gN] - kJ[gN]) <= kK[gN] ? kJ : kI)[gN]);
				kH[gN] = bL.du(kL[gN], 10)
			})(gN), ao.ix.jp(gN, bL.du(kI[gN] * ag.gr[gN], 1e3))
		}(gN)
	}, this.kg = function(gN, gI) {
		kL[gN] = kM[gN] = gI
	}
}

function it() {
	var kh = new Uint16Array(aD.em);

	function kw(player, ku) {
		for (var ep = bO.fK[0], fS = bO.fS, l8 = -1, l9 = aD.em, aB = 0; aB < ep; aB++) {
			var f5, gN = fS[aB];
			bs.ei(player, gN) && (f5 = bM.iI(ku, bM.ig(gN)), -1 === l8 || f5 < l8) && (l8 = f5, l9 = gN)
		}
		return l9
	}

	function ky(kv, ku) {
		if (kv === aD.em) return 0;
		var gW = ag.gW[kv],
			l7 = gW.length;
		if (0 === l7) return 0;
		for (var ep = Math.min(l7, 10), l9 = 0, l8 = bM.iI(gW[l9] >> 2, ku), aB = 0; aB < ep; aB++) {
			var hh = ay.jT(l7),
				f5 = bM.iI(gW[hh] >> 2, ku);
			f5 < l8 && (l8 = f5, l9 = hh)
		}
		return gW[l9] >> 2
	}

	function l3(player, ku, jL, lB) {
		var lC;
		(lB === aD.em || (lC = bM.ig(jL), lB = bM.ig(lB), bM.iI(ku, lC) < bM.iI(ku, lB))) && (kh[player] = jL)
	}
	this.dd = function() {
		kh.fill(aD.em)
	}, this.j6 = function() {
		if (bf.k9() % 109 == 9 && !(al.ki < 20) && aD.hj && !(bh.kj() < bL.du(8 * aD.jw, 10))) {
			var kk = bh.kl();
			if (bg.kZ[kk]) {
				bh.km(kk);
				var ep = bO.fK[0];
				if (0 !== ep)
					for (var g = bO.fT, kn = al.kn, ki = al.ki, ko = kh, hh = ay.jT(ep), aB = 0; aB < ki; aB++) {
						var hH = kn[aB],
							kp = g[hh];
						bA.gB.kq(hH, kp) && 512 === ko[hH] && (ko[hH] = kp, hh = (hh + 1) % ep)
					}
			}
		}
	}, this.j5 = function(player) {
		var ku, kx, kv, kr = function(player) {
			var jL = kh[player];
			if (jL !== aD.em) {
				if (bA.gB.lA(jL) && ag.gW[jL]) return jL;
				kh[player] = aD.em
			}
			return aD.em
		}(player);
		return function(player) {
			for (var l6 = al.kn, l7 = al.ki, ep = Math.min(l7, l7 < 17 && 5 === ay.jT(20) ? 1 : 16), gO = ay.jT(l7), fS = bO.fS, gW = ag.gW, gI = 0, aB = 0; aB < ep; aB++) {
				var gN = l6[(aB + gO) % l7];
				gN !== player && gW[gN].length && (fS[gI++] = gN)
			}
			bO.fK[0] = gI
		}(player), 0 !== bO.fK[0] && (0 < (kx = ky(kv = kw(player, ku = bM.il(player)), ku)) && bN.kz.l0(player, bN.l1.l2(kx, ku)) ? (l3(player, ku, kv, kr), !0) : 0 < (kv = function(player, ku) {
			for (var ep = bO.fK[0], fS = bO.fS, ko = kh, gO = 0, aB = 0; aB < ep; aB++) {
				var gN = fS[aB],
					gN = ko[gN];
				gN !== aD.em && bA.gB.lA(gN) && player !== gN && bs.ei(player, gN) && (fS[gO++] = gN)
			}
			return 0 !== (bO.fK[0] = gO) ? ky(kw(player, ku), ku) : 0
		}(player, ku)) && bN.kz.l0(player, bN.l1.l2(kv, ku)) ? (l3(player, ku, ac.eh(kv << 2), kr), !0) : !!(0 < (kx = ky(kr, ku)) && bN.kz.l0(player, bN.l1.l2(kx, ku))))
	}
}

function j0() {
	function lG(player) {
		for (var fF = ag.fF[player], ep = fF.length, fG = Math.max(bL.du(ep, 12), 1), er = ac.er, e8 = ay.jT(ep), aB = 0; aB < ep; aB += fG)
			for (var ee = fF[(aB + e8) % ep], es = 3; 0 <= es; es--) {
				var et = ee + er[es];
				if (ac.eu(et)) return {
					eT: et,
					id: ac.eX(et),
					gN: player
				}
			}
		return null
	}

	function lL(player, lN) {
		var hY = bA.gB.lO(player, aE.kR[aE.hY[player]]);
		ag.gH[player].push(lN.eT), ad.jI(player, hY, lN.gN), aF.jJ(player, !0)
	}
	this.j5 = function(player) {
		return !!bS.eU(bS.eV) && !!aD.data.passableMountains && 0 !== ag.fF[player].length && function(player) {
			var lF = lG(player);
			if (null === lF) return !1;
			! function(player) {
				for (var kn = al.kn, ki = al.ki, ep = Math.min(ki, 12), gO = ay.jT(ki), fS = bO.fS, fF = ag.fF, gI = 0, aB = 0; aB < ep; aB++) {
					var gN = kn[(aB + gO) % ki];
					gN !== player && fF[gN].length && bs.ei(player, gN) && (fS[gI++] = gN)
				}
				bO.fK[0] = gI
			}(player);
			var lI = function(eW) {
				for (var ep = bO.fK[0], fS = bO.fS, aB = 0; aB < ep; aB++) {
					var lN = lG(fS[aB]);
					if (null !== lN && lN.id === eW) return lN
				}
				return null
			}(lF.id);
			return null !== lI ? (lL(player, lI), !0) : function(player, eW) {
				var ep = ao.io.lM;
				if (0 !== ep)
					for (var eT = ao.io.eL[ay.jT(ep)] << 2, er = ac.er, es = ay.jT(4);;) {
						if (eT += er[es], ac.eu(eT)) {
							if (ac.eX(eT) === eW) return lL(player, {
								eT: eT,
								gN: aD.em
							}), !0;
							break
						}
						if (!ac.eg(eT)) break
					}
				return !1
			}(player, lF.id)
		}(player)
	}
}

function ir() {
	this.j5 = function(player) {
		return bN.kz.l0(player, function(player) {
			var ep = ao.io.lM;
			if (0 === ep) return -1;
			for (var l7 = Math.min(ep, ao.performance.lQ ? ep : 10), eL = ao.io.eL, jS = bL.du(ay.random() * ep, ay.value(100)), e = jS + l7, lR = ay.im(ag.ih[player], ag.ii[player]), lS = ay.im(ag.ij[player], ag.ik[player]), l9 = -1,
					f5 = bM.iJ(0, 0, bS.f0, bS.f1), aB = jS; aB < e; aB++) {
				var gO = aB % ep,
					lT = bM.f7(lR, lS, eL[gO]);
				lT < f5 && (f5 = lT, l9 = gO)
			}
			return -1 !== l9 ? function(eb, lR, lS) {
				var h4 = bM.ex(eb),
					h6 = bM.ez(eb),
					i9 = lR - h4,
					iC = lS - h6;
				Math.abs(i9) >= Math.abs(iC) ? (iC = 0, i9 = Math.sign(i9)) : (i9 = 0, iC = Math.sign(iC));
				i9 === iC && (i9 = 1);
				for (;;) {
					if (h4 += i9, h6 += iC, !bM.fC(h4, h6)) break;
					if (eb = bM.fD(h4, h6), ac.i3(bM.ef(eb))) return eb
				}
				return -1
			}(eL[l9], lR, lS) : -1
		}(player))
	}
}

function j2() {
	this.j5 = function(player) {
		var lV = function(player) {
			for (var lY = bN.lY.la(), ep = lY.length, l7 = Math.min(ep, 32), hh = ay.jT(ep), aB = 0; aB < l7; aB++) {
				var lV = (aB + hh) % ep,
					lX = lY[lV],
					iG = lX[0],
					iH = lX[lX.length - 1];
				if (bN.l1.lb(player, iG) && bN.l1.lc(player, iH)) return lV;
				if (bN.l1.lb(player, iH) && bN.l1.lc(player, iG)) return 0 <= (lV = bN.lY.ld(iH, iG)) ? lV : bN.lY.le() ? -1 : bN.lY.lf(bN.lY.lg(lX))
			}
			return -1
		}(player);
		return -1 !== lV && (lV = bN.lY.get(lV), !bN.l1.lZ(player, lV)) && (bO.g[0] = lV, !0)
	}
}

function iu() {
	this.lQ = 0, this.dd = function() {
		this.lQ = 0
	}, this.j5 = function() {
		if (!this.lQ && bf.k9() % 30 == 7 && bA.gB.lj(80) && (ao.performance.lQ = 1)) {
			if (aD.hj) {
				var kk = bh.kl();
				if (bg.kZ[kk]) {
					bh.kD(kk);
					var g = bO.fT,
						ep = bO.fK[0];
					if (0 !== ep)
						for (var lm = Math.min(100 + 10 * (ep - 1), 400), aB = 0; aB < ep; aB++) aE.kg(g[aB], lm)
				}
			}
			aE.kg(ln[0], 100)
		}
	}
}

function ip() {
	var lo = 0,
		lp = 0,
		lq = 300,
		lr = 300,
		ls = 0;
	this.lM = 0, this.eL = new Uint32Array(512), this.dd = function() {
		lp = lo = 0, this.lM = 0, ls = 0
	}, this.j5 = function() {
		if (function() {
				var ep = ao.io.lM;
				if (0 === ep) return 1;
				var eL = ao.io.eL;
				if (bf.k9() % 35 == 6) {
					for (var aB = ep - 1; 0 <= aB; aB--) ac.eg(eL[aB] << 2) || (ep--, eL[aB] = eL[ep]);
					ao.io.lM = ep
				}
				return ep < eL.length
			}())
			if (lq <= lo) {
				var lw = ao.io.lM;
				if (lw) {
					if (bf.k9() % 350 != 1) return;
					if (ls !== lw) return void(ls = lw);
					if (!bA.gB.jZ(ln[0])) return
				} else if (bf.k9() % 12 != 8) return;
				bA.gB.lx() || ao.io.dd()
			} else {
				var aB, i = bS.f0,
					ly = i - 2,
					lw = ly * (bS.f1 - 2),
					lz = lq,
					eL = ao.io.eL,
					l7 = ao.io.lM,
					m0 = eL.length,
					gO = Math.min(lp + lz * ((1 + 19 * ao.performance.lQ) * lr), lw);
				for (aB = lp; aB < gO; aB += lz) {
					var eT = 4 * (aB % ly + (bL.du(aB, ly) + 1) * i + 1);
					if (ac.eg(eT) && (eL[l7] = eT >> 2, ++l7 === m0)) {
						aB += lz;
						break
					}
				}(lp = aB) >= lw && (lp = ++lo), ao.io.lM = l7
			}
	}
}

function j4() {
	this.j5 = function() {
		if (bf.k9() % 51 == 45)
			for (var ep = bN.y.m2, m3 = bN.y.m3, m4 = bN.y.m4, m5 = bN.y.m5, m6 = bN.y.m6, kS = aE.kS, hY = aE.hY, aB = 0; aB < ep; aB++) {
				var lX, player, mA, m7 = m3[aB];
				m7 % 64 == 6 || (lX = m4[aB], (player = bN.l1.m8(lX[lX.length - 1])) < 0) || !bA.gB.kq(player, m6[aB] >> 3) || ay.jT(1e3) >= kS[hY[player]] || ! function(mE, lX) {
					for (var ep = lX.length - 1, mF = bN.y.mG[mE], f5 = 0, aB = mF + 1; aB < ep; aB++) f5 += bM.iF(lX[aB], lX[aB + 1]);
					return (f5 += bM.iF(bM.iX(bN.y.mH[mE]), lX[mF + 1])) <= 60
				}(aB, lX) || (mA = m5[aB], 64 <= m7 && bN.mB.mC(player, mA)) || function(player, lX, mA, mE, m7) {
					bN.mI.mJ(player) && bA.gB.mK(player, aE.kO[aE.hY[player]], 32, 0) && (bN.y.m3[mE] = 64 + m7 % 64, bN.mB.jI(mA, bN.y.mL), bO.g[0] = bN.lY.lg(lX), bO.fR[1] = 6, bA.gB.mM(player), bN.y.mN(player))
				}(player, lX, mA, aB, m7)
			}
	}
}

function mO() {
	aN.j5(), af.j5(), aW.mP(), b0.y.j5()
}

function mQ() {
	b1.j5(), aG.j5(), an.j5(), ae.j5(), b4.j5(), aF.j5(), ao.j5(), bN.y.j5(), al.mR(), aV.j5(), az.j5(), bV.j5(), af.j5(), af.mS(), aW.j5(), bP.j5(), aU.j5(), aP.j5(), aN.j5(), b5.j5(), aR.j5(), aw.j5(), bd.j5(), bh.j5(), b0.y.j5(), b0.mT.j5(), t
	.j5(), b9.j5(), bf.j5()
}

function mU() {
	aH.j5(), aX.j5(), aQ.j5(), av.j5(), bC.j5(), ax.mV()
}

function mW() {
	aV.mX(!1), aP.mX(), aW.mX(!1), aU.mX(), aR.mX(), aw.mX(), af.mX(!1), bh.mY()
}

function mZ() {
	af.mX(!1) && (bf.dl = !0), b0.y.j5()
}

function c6() {
	var ma, mb, mc;

	function me(mg) {
		for (var aB = ma - 1; 0 <= aB; aB--) 0 === mc[mb[aB]] && ag.gd[mb[aB]] >= mg && ft(mb[aB])
	}

	function md(player) {
		var dt;
		64 === mc[player] ? mc[player] = 6 : (dt = ag.gd[player], mc[player] = dt < 1e3 ? 3 : dt < 1e4 ? 2 : dt < 6e4 ? 1 : 0)
	}
	this.dd = function() {
		ma = 0, mb = new Uint16Array(aD.em), mc = new Uint8Array(aD.em)
	}, this.j5 = function() {
		for (var aB = ma - 1; 0 <= aB; aB--) 64 === mc[mb[aB]] ? md(mb[aB]) : 0 == mc[mb[aB]]-- && (md(mb[aB]), ft(mb[aB]));
		16e4 <= ag.gd[ln[0]] && (me(16e4), 3e5 <= ag.gd[ln[0]]) && me(3e5), bA.gB.lA(aD.eZ) && (bd.mh[7] = Math.max(ag.gd[aD.eZ], bd.mh[7]))
	}, this.gD = function(player) {
		for (var f8, aB = ma - 1; 0 <= aB; aB--)
			if (player === mb[aB]) {
				for (ma--, f8 = aB; f8 < ma; f8++) mb[f8] = mb[f8 + 1];
				return
			}
	}, this.jJ = function(player, mi) {
		for (var aB = ma - 1; 0 <= aB; aB--)
			if (player === mb[aB]) return;
		mb[ma++] = player, mc[player] = mi ? 2 : 64
	}
}

function c7() {
	var size, k0;
	this.dd = function() {
		size = aD.kY, k0 = new Uint16Array(aD.em);
		for (var kC = aD.kC, aB = aD.kY - 1; 0 <= aB; aB--) k0[aB] = kC + aB
	}, this.j5 = function() {
		ao.j3.j5();
		for (var aB = size - 1; 0 <= aB; aB--)
			if (0 === ag.ml[k0[aB]]) {
				f8 = void 0;
				var f8 = aB;
				size--, k0[f8] = k0[size]
			} else aE.j5(k0[aB])
	}, this.mk = function(gN) {
		k0[size++] = gN
	}
}

function c8() {
	var mn, mo, mp, mq, mr, ms, mt, mu, mv, mw, mx, my, mz, n0 = !1,
		n1 = !1;

	function n2(eG) {
		my = bf.eO, mp = mq = mo = 0, mr = (mz = 33) / eG, mn = 1 / (eG / mz / 4), ms = (h.i / 2 + iQ) / i0, mt = (h.j / 2 + iR) / i0, mu = i0
	}

	function n9(aB) {
		var nB; - 1 !== aB && (aB = bM.iX(bN.y.mH[aB]), nB = bM.ex(aB) - 15, aB = bM.ez(aB) - 15, aH.n5(nB, aB, 29 + nB, 29 + aB))
	}

	function nM(eD) {
		Math.abs(Math.log(mx / mu)) < .125 && (mx = eD * mu)
	}

	function nL(nB, nC, nO, nP) {
		mv = (nB + nO + 1) / 2, mw = (nC + nP + 1) / 2;
		nO = h.i / (nO - nB + 1), nB = h.j / (nP - nC + 1);
		mx = .9 * (nO < nB ? nO : nB)
	}
	this.n3 = function() {
		return n0
	}, this.n4 = function() {
		n2(1), this.n5(0, 0, bS.f0 - 1, bS.f1 - 1), aD.hD || aD.gy || this.n6(aD.eZ, 3e3, !0, .3)
	}, this.n7 = function(player, n8) {
		n9(bN.l1.nA(player, n8))
	}, this.n6 = function(player, eG, nD, zoom) {
		aD.nE || n0 && !nD && n1 || (0 === ag.gd[player] ? n9(bN.l1.nF(player)) : (aS.nG = !1, n1 = nD, n2(eG), function(player) {
			mv = (ag.ih[player] + ag.ii[player] + 1) / 2, mw = (ag.ij[player] + ag.ik[player] + 1) / 2
		}(player), function(zoom, player) {
			var i9 = ag.ii[player] - ag.ih[player] + 1,
				player = ag.ik[player] - ag.ij[player] + 1,
				f8 = h.i / i9,
				f9 = h.j / player,
				f8 = (mx = f8 < f9 ? f8 : f9, 0 !== zoom ? zoom : i9 < 20 && player < 20 ? .5 : .9);
			mx *= f8, nM(7 / 8)
		}(zoom, player), n0 = !0, ar.nJ()))
	}, this.nK = function(eG) {
		aD.gy || aD.nE || (aS.nG = !1, n1 = !1, n2(eG), nL(0, 0, bS.f0 - 1, bS.f1 - 1), nM(7 / 8), n0 = !0, ar.nJ())
	}, this.n5 = function(nB, nC, nO, nP) {
		n0 = !1, nL(nB, nC, nO, nP), i0 = mx, aS.nQ(mv, h.i / 2), aS.nR(mw, h.j / 2), ba.nS(), bf.dl = !0
	}, this.nT = function() {
		return !(n0 && n1 || (n0 = !1))
	}, this.j5 = function() {
		var nW, nX, es, na;
		n0 && (mo < .5 ? mq < mr && (mq += mr * mn, mp = mo) : 1 - mp < mo && (mq = (mq -= mr * mn) < mr * mn ? mr * mn : mq), my = my >= bf.eO ? bf.eO - 1 : my, es = bf.eO - my, mo = 1e3 < es || 1 < (mo += mq * es / mz) ? 1 : mo, my = bf.eO,
			es = i0, nW = iQ, nX = iR, es = (i0 = mu * Math.pow(mx / mu, mo)) / es, na = 1 - (mu * Math.pow(mx / mu, 1 - mo) - mu) / (mx - mu), aS.nQ(ms + na * (mv - ms), h.i / 2), aS.nR(mt + na * (mw - mt), h.j / 2), af.zoom(es, (nW * es -
				iQ) / (1 - es), (nX * es - iR) / (1 - es)), ba.nS(), 1 <= mo && (n0 = !1, bb.nb = !0), bf.dl = !0)
	}
}

function c0() {
	var fA = bA.color;
	this.nc = fA.nd(0, 0, 0), this.ne = fA.nf(0, 0, 0, .7), this.ng = fA.nf(0, 0, 0, .5), this.nh = fA.nf(0, 0, 0, .85), this.ni = fA.nf(0, 0, 0, .75), this.nj = fA.nf(0, 0, 0, .6), this.nk = fA.nf(0, 0, 0, .35), this.nl = fA.nd(255, 255, 255), this
		.nm = fA.nf(255, 255, 255, .3), this.nn = fA.nf(255, 255, 255, .6), this.no = fA.nf(255, 255, 255, .4), this.np = fA.nf(255, 255, 255, .25), this.nq = fA.nf(255, 255, 255, .85), this.nr = fA.nf(255, 255, 255, .75), this.ns = fA.nf(255, 255,
			255, .15), this.nt = fA.nf(255, 255, 255, .11), this.nu = fA.nd(128, 128, 128), this.nv = fA.nf(64, 64, 64, .75), this.nw = fA.nf(88, 88, 88, .83), this.nx = fA.nf(60, 60, 60, .85), this.ny = fA.nf(80, 60, 60, .85), this.nz = fA.nd(170,
			170, 170), this.o0 = fA.nd(200, 235, 245), this.o1 = fA.nd(30, 255, 30), this.o2 = fA.nd(0, 200, 0), this.o3 = fA.nd(128, 255, 128), this.o4 = fA.nf(10, 65, 10, .75), this.o5 = fA.nf(0, 255, 0, .6), this.o6 = fA.nf(0, 255, 0, .5), this
		.o7 = fA.nf(0, 200, 0, .5), this.o8 = fA.nf(0, 100, 0, .75), this.o9 = fA.nf(0, 60, 0, .8), this.oA = fA.nf(0, 255, 0, .3), this.oB = fA.nf(0, 180, 0, .6), this.oC = fA.nf(0, 120, 0, .85), this.oD = fA.nd(0, 120, 0), this.oE = fA.nf(0, 70, 0,
			.85), this.oF = fA.nd(190, 230, 190), this.oG = fA.nd(0, 255, 0), this.oH = fA.nd(255, 120, 120), this.oI = fA.nd(255, 160, 160), this.oJ = fA.nd(255, 70, 70), this.oK = fA.nd(230, 0, 0), this.oL = fA.nf(220, 0, 0, .6), this.oM = fA.nf(
			255, 100, 100, .8), this.oN = fA.nf(100, 0, 0, .85), this.oO = fA.nf(60, 0, 0, .85), this.oP = fA.nf(200, 0, 0, .6), this.oQ = fA.nf(120, 0, 0, .85), this.oR = fA.nd(255, 70, 10), this.oS = fA.nd(230, 190, 190), this.oT = fA.nd(255, 0,
		0), this.oU = fA.nd(255, 0, 255), this.oV = fA.nf(60, 0, 60, .85), this.oW = fA.nf(0, 60, 60, .85), this.oX = fA.nf(10, 60, 60, .9), this.oY = fA.nf(0, 96, 96, .75), this.oZ = fA.nd(0, 255, 255), this.oa = fA.nd(160, 160, 255), this.ob = fA
		.nf(0, 40, 90, .75), this.oc = fA.nf(0, 0, 255, .6), this.od = fA.nd(200, 200, 255), this.oe = fA.nf(50, 50, 255, .83), this.og = fA.nd(255, 120, 100), this.oh = fA.nf(255, 255, 0, .5), this.oi = fA.nf(255, 255, 150, .2), this.oj = fA.nd(255,
			255, 0), this.ok = fA.nd(255, 255, 200), this.ol = fA.nf(200, 200, 0, .6), this.om = fA.nf(140, 120, 0, .75), this.on = fA.nf(180, 160, 40, .75), this.oo = fA.nf(70, 50, 20, .85), this.op = fA.nf(30, 30, 0, .85), this.oq = fA.nf(60, 60,
			0, .85), this.or = fA.nd(255, 255, 100), this.os = fA.nd(255, 255, 140), this.ot = fA.nf(255, 140, 0, .75), this.ou = fA.nf(70, 40, 0, .85), this.ov = fA.nd(255, 150, 0), this.ow = fA.nf(255, 200, 80, .85), this.ox = fA.nf(0, 0, 0, 0),
		this.oy = fA.nf(255, 255, 255, 0), this.oz = fA.nf(254, 254, 254, 0)
}

function cy() {
	this.hF = new p0, this.gB = new p1, this.p2 = new p3, this.p4 = new p5, this.kE = new p6
}

function p0() {
	this.hG = function(eb) {
		aD.kW ? b8.p2.hG(aD.eZ, eb) : b0.p7.p8(eb)
	}, this.hM = function(iP, jL) {
		aD.kW ? b8.p2.hM(aD.eZ, iP, jL) : b0.p7.p9(iP, jL)
	}, this.pA = function(iP, pB) {
		aD.kW ? b8.p2.pC(aD.eZ, iP, pB) : b0.p7.pD(iP, pB)
	}, this.hR = function(iP, eb) {
		eb = (eb << 3) + bO.fR[6];
		aD.kW ? b8.p2.hR(aD.eZ, iP, eb) : bN.mI.mJ(aD.eZ) && b0.p7.pF(iP, eb)
	}, this.hU = function(iP) {
		849 === iP && (iP = 850);
		var n8 = bO.fR[3];
		aD.kW ? b8.p2.hU(aD.eZ, iP, n8) : bN.hS.pG(aD.eZ, n8) && b0.p7.pH(iP, n8)
	}, this.pI = function(n8) {
		aD.kW ? b8.p2.pI(aD.eZ, n8) : b0.p7.pH(849, n8)
	}, this.pJ = function(jL) {
		aD.kW ? b8.p2.pJ(aD.eZ, jL) : b0.p7.pK(jL)
	}, this.pL = function(pM) {
		aD.kW ? b8.p2.pN(aD.eZ, pM) : b0.p7.pO(pM)
	}, this.hd = function(pP) {
		aD.kW ? b8.p2.hd(aD.eZ, pP) : b0.p7.pQ(pP)
	}, this.pR = function() {
		aD.kW ? b8.p2.pR(aD.eZ) : b0.p7.pS()
	}, this.ha = function() {
		aD.kW ? b8.p2.ha(aD.eZ) : b0.p7.pK(513)
	}, this.hI = function(iP, eb, jL) {
		aD.kW ? b8.p2.hI(aD.eZ, iP, eb, jL) : b0.p7.pT(iP, eb, jL)
	}
}

function p6() {
	this.kF = function(player, pB, hY) {
		bA.gB.pU(player, hY, pB) && (ae.pA(player, pB), !bA.gB.jZ(pB)) && ao.ix.jo[pB] && ao.ix.jo[pB]--
	}, this.pV = function(player, pB, hY) {
		bA.gB.pW(hY, pB) ? an.jI(pB, bO.fM[0]) && (bq.pX(player, pB, bO.fM[0], 1), bA.gB.gE(pB, bO.fM[0]), bd.pY(player, pB), af.pZ(pB, bO.fM[0])) : bd.gF(player, hY, 12)
	}
}

function p1() {
	this.pa = function(pM, player) {
		aN.pL(aD.eZ, player, pM), b0.p7.pb(pM, player)
	}, this.pc = function(player) {
		aN.pd(player, 0), b0.p7.pe(player)
	}, this.pf = function(pg, player) {
		aN.ph(pg, player), b0.p7.pi(pg, player)
	}, this.pj = function() {
		aD.kW || aD.gy || b0.pk.pj()
	}
}

function p5() {
	this.j5 = function(aC) {
		var id, fY, nT;
		for (bH.dd(aC), bH.e9 += 2, nT = 8 * bH.size; bH.e9 + 8 <= nT;) id = bH.pl(4), fY = bH.pl(9), 0 === id ? this.pm(id, fY, bH.pl(22)) : 1 === id ? this.pm(id, fY, bH.pl(10), bH.pl(10)) : 2 === id ? this.pm(id, fY, bH.pl(10), bH.pl(9)) :
			3 === id ? this.pm(id, fY, bH.pl(10), bH.pl(27)) : 4 === id ? this.pm(id, fY, bH.pl(10), bH.pl(16)) : 5 === id || 6 === id ? this.pm(id, fY, bH.pl(10)) : 7 === id ? this.pm(id, fY, bH.pl(1)) : 10 === id ? this.pm(id, fY, bH.pl(20), bH
				.pl(22)) : this.pm(id, fY)
	}, this.pn = [], this.po = function() {
		for (var pq = 0, pr = 0, ps = 0, pt = 0, pu = 0, pv = 0, aB = 0; aB < 512; aB++) pq += ag.ml[aB], pr += ag.gd[aB], ps += ag.gr[aB], pt += bN.y.kG[aB];
		pu += bN.y.m2, pv += al.ki, this.pn.push(ps % 1073741824 * 4 + (pq + pr + pt + pu + pv) % 4)
	}, this.pm = function(id, fY, fa, fc) {
		0 === id ? b8.p2.hG(fY, fa) : 1 === id ? b8.p2.hM(fY, fa, fc) : 2 === id ? b8.p2.pC(fY, fa, fc) : 3 === id ? b8.p2.hR(fY, fa, fc) : 4 === id ? b8.p2.hU(fY, fa, fc) : 5 === id ? b8.p2.pJ(fY, fa) : 6 === id ? b8.p2.pN(fY, fa) : 7 === id ?
			b8.p2.hd(fY, fa) : 8 === id ? b8.p2.pR(fY) : 9 === id ? b8.p2.pw(fY) : 10 === id && b8.p2.hI(fY, fa >> 10, fc, fa % 1024)
	}
}

function p3() {
	this.hG = function(player, eb) {
		bA.gB.h0(0) && bA.gB.h1(player) && bM.iU(eb) && (b9.px.py(0, player, eb), aD.pz.jI(player, eb))
	}, this.hM = function(player, iP, jL) {
		bA.gB.h0(1) && bA.gB.h1(player) && bA.gB.q0(player, jL) && bA.gB.mK(player, iP, 12, 0) && bA.gB.q1(player, jL) && ((jL = ad.jX(player, bO.el[0])) || ad.jq(player)) && (ag.q2[player]++, b9.px.py(1, player, iP, bO.el[0]), ao.iv.jA(player,
			jL)) && (bA.gB.mM(player), bd.q3(player, iP), ao.iv.jG(player))
	}, this.pC = function(player, iP, pB) {
		bA.gB.h0(1) && bA.gB.h1(player) && aD.hj && bA.gB.q0(player, pB) && bA.gB.q4(player, pB) && bA.gB.pU(player, bA.gB.iO(player, iP), pB) && an.jI(pB, bO.fM[0]) && (b9.px.py(2, player, iP, pB), ae.pA(player, pB))
	}, this.hR = function(player, iP, pE) {
		bO.fR[1] = 7 & pE;
		var eb = pE >> 3;
		bA.gB.h0(1) && bA.gB.h1(player) && bM.iU(eb) && bN.mI.mJ(player) && bN.mI.q5(eb) && bA.gB.mK(player, iP, 32, 0) && bN.kz.q6(player, eb, 1) && (bd.q7(player), b9.px.py(3, player, iP, pE), bA.gB.mM(player), bl.q8.hR(player), bN.y.mN(
			player))
	}, this.hU = function(player, iP, n8) {
		849 === iP ? this.pI(player, n8) : bA.gB.h0(1) && bA.gB.h1(player) && bA.gB.mK(player, iP, 32, 0) && bN.hS.q9(player, n8) && (bd.q7(player), b9.px.py(4, player, iP, n8), bA.gB.mM(player), bl.q8.hU(player), bN.y.mN(player))
	}, this.pI = function(player, n8) {
		bA.gB.h0(1) && bA.gB.h1(player) && bN.qA.j5(player, n8) && b9.px.py(4, player, 849, n8)
	}, this.pJ = function(player, jL) {
		513 === jL ? this.ha(player) : bA.gB.h0(1) && bA.gB.h1(player) && (jL = Math.min(jL, aD.em), ad.jX(player, jL)) && (b9.px.py(5, player, jL), ad.qB(player, jL))
	}, this.pN = function(player, pM) {
		(bA.gB.h0(1) || bA.gB.h0(2)) && bA.gB.h1(player) && (pM = bL.hx(pM, 0, 1023), b9.px.py(6, player, pM), af.qC(player, 0, pM))
	}, this.hd = function(player, pP) {
		aw.hc(player) && (b9.px.py(7, player, pP), aw.qD(player, pP))
	}, this.pR = function(player) {
		(bA.gB.h0(0) || bA.gB.h0(1)) && bA.gB.h1(player) && aM.qE(player) && (b9.px.py(8, player), bQ.pR(player))
	}, this.pw = function(player) {
		b9.px.py(9, player), bQ.pw(player)
	}, this.ha = function(player) {
		aw.he(player) && (b9.px.py(5, player, 513), aw.ha(player))
	}, this.hI = function(player, iP, eb, jL) {
		bA.gB.h0(1) && bA.gB.h1(player) && bA.gB.q0(player, jL) && bA.gB.q1(player, jL) && bM.iU(eb) && am.eQ.ej(player, eb) && (ad.jX(player, bO.el[0]) || ad.jq(player)) && (b9.px.py(10, player, (iP << 10) + bO.el[0], eb), jL = bA.gB.lO(player,
			iP), ag.gH[player].push(bO.eq[0]), ad.jI(player, jL, bO.el[0]), aF.jJ(player, !0), bd.qF(player))
	}
}

function qG() {
	var qI;
	this.qH = [], this.qI = document.createElement("div"), this.qJ = function(qK, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = qK, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.3em", title.style.overflowWrap = "break-word", this.qI.appendChild(
			title), title
	}, this.qL = function(qK, marginBottom) {
		var qM = document.createElement("p");
		return qM.textContent = qK, qM.style.fontSize = "0.75em", qM.style.lineHeight = "1.2em", qM.style.marginBottom = marginBottom || "0", this.qI.appendChild(qM), qM
	}, this.qN = function(qK) {
		var qO = document.createElement("p");
		return qO.textContent = qK, qO.style.fontSize = "1em", qO.style.marginBottom = "0", qO.style.whiteSpace = "pre-wrap", qO.style.overflowWrap = "break-word", this.qI.appendChild(qO), qO
	}, this.qP = function(qQ, fontSize) {
		var qI = document.createElement("div");
		return qI.innerHTML = qQ, qI.style.fontSize = fontSize || "1em", qI.style.lineHeight = "1.2em", this.qI.appendChild(qI), qI
	}, this.qR = function(qS) {
		for (var qT = qS.qT, ep = qT.length, aB = 0; aB < ep; aB++) this.qI.appendChild(qT[aB])
	}, this.qU = function(qV) {
		return this.qH.push(qV), this.qI.appendChild(qV.e), qV
	}, this.resize = function() {
		for (var ep = this.qH.length, aB = 0; aB < ep; aB++) this.qH[aB].resize && this.qH[aB].resize()
	}, (qI = this.qI).style.position = "absolute", qI.style.height = "auto", qI.style.padding = "0.5em"
}

function qW(qX, qY) {
	var qI = document.createElement("div");

	function qg() {
		var aB, qh, j, gO, es, qc = h.k * qI.offsetWidth,
			qi = new Float64Array(function(qc) {
				var i = .25 * bA.qd.qe(.6) * h.hz;
				return Math.max(Math.floor(qc / i), 1)
			}(qc)),
			qj = bc.qj,
			qk = (qc - (qi.length + 1) * bc.gap) / (qi.length * h.k);
		for (qi.fill(qj), aB = 0; aB < qY.length; aB++) qh = (es = qY[aB].qI).style, j = bA.ql.min(qi), gO = qi.indexOf(j), qh.top = bA.qd.qm(j), qh.left = bA.qd.qm(qj + gO * (qk + qj)), qh.width = bA.qd.qm(qk), bA.qd.qn(es, 5), qi[gO] += es
			.offsetHeight + 3 * qj;
		qI.style.height = bA.qd.qm(bA.ql.max(qi) - 2 * qj)
	}
	this.qZ = qI, this.qa = qY, this.resize = function() {
		var aB;
		for (aB = 0; aB < qY.length; aB++) qY[aB].resize();
		qg(), qg()
	}, qI.style.width = "100%", qI.style.maxWidth = "100%", qX.style.lineHeight = "1.5em", qX.style.overflowX = "hidden", qX.style.overflowY = "auto";
	for (var aB = 0; aB < qY.length; aB++) qI.appendChild(qY[aB].qI);
	qX.appendChild(qI)
}

function w(qo, qp, qq, qr, qs) {
	var self, qt = document.createElement("button");

	function r0() {
		var r6;
		bJ.r5() || (r6 = bA.color.r7(qq), !1 !== qr && 0 < r6[0] && r6[0] < 255 && r6[0] === r6[1] && r6[0] === r6[2]) || (qt.style.backgroundColor = bA.color.r8(qq, r6[3] && r6[3] < 120 ? 150 : 50))
	}

	function qz() {
		if (qr) {
			var r6 = bA.color.r7(qq);
			if (r6[0] === r6[1] && r6[0] === r6[2]) return
		}
		qp && ((r6 = qp(this)) ? 2 === r6 && r0() : rA(this))
	}

	function r2() {
		this.style.backgroundColor = qq
	}

	function r1() {
		rA(this)
	}

	function rA(es) {
		es.style.backgroundColor = qq, es.blur()
	}
	this.button = qt, this.qu = qp, this.qv = qq, this.qy = function(r3) {
		r3 = 1.1 - Math.min(.01 * qo.length, .6) + .2 * r3;
		qt.style.fontSize = r3.toFixed(1) + "em"
	}, this.qx = function(fA) {
		fA ? 1 === fA ? fA = bB.nx : 2 === fA && (qr = 1, fA = bB.nx) : (qr = 0, fA = bB.nh), this.qv = qq = fA, qt.style.backgroundColor = fA
	}, self = this, qt.innerHTML = qo, qt.style.color = qs ? bB.oj : bB.nl, qt.style.userSelect = "none", qt.style.outline = "none", qt.style.overflowWrap = "break-word", self.qx(qq), qt.style.border = "none", qt.style.font = "inherit", self.qy(
		0), qt.style.padding = "0em 0.3em", qt.onclick = qz, qt.addEventListener("mouseover", r0), qt.addEventListener("mouseout", r1), qt.addEventListener("focus", r0), qt.addEventListener("blur", r2)
}

function rB(rC, qX) {
	var qI;
	this.resize = function() {
		for (var aB = 0; aB < rC.length; aB++) bA.qd.qn(rC[aB].button);
		qI.style.gap = qI.style.padding = bA.qd.qm(bc.qj)
	}, (qI = document.createElement("div")).style.display = "grid", qI.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", qI.style.overflowY = "auto", qI.style.gridAutoRows = "5.3em", qI.style.maxHeight = "100%";
	for (var aB = 0; aB < rC.length; aB++) rC[aB].qy(1), qI.appendChild(rC[aB].button);
	qX.appendChild(qI)
}

function rE(rF, rG, rH) {
	this.ew = 0, this.ey = 0, this.i = 0, this.j = 0, this.resize = function() {
		this.j = Math.min(bA.qd.qe(rH || .5) * rF[1] * h.hz, h.j - 2 * bc.gap), this.i = Math.min(this.j * (rF[0] / rF[1]), h.i - 2 * bc.gap), this.j = rF[1] * this.i / rF[0], this.ew = bc.gap + rG[0] * (h.i - this.i - 2 * bc.gap), this.ey = bc
			.gap + rG[1] * (h.j - this.j - 2 * bc.gap)
	}, this.rI = function() {
		return this.ew + .5 * this.i
	}
}

function rJ(rK, rL) {
	var rU, self, rM = document.createElement("div"),
		rN = document.createElement("div"),
		rO = document.createElement("div"),
		rP = null,
		rV = (this.rQ = new rR({
			value: "",
			e9: -1
		}, 0, rS, function(e) {
			e.target.value = bA.rc.rd(e.target.value), rP.rb.textContent = 127 - e.target.value.length
		}), 0),
		rW = 1,
		rX = 0,
		rY = 1048575;

	function rS() {
		rK(), rP.rb.textContent = 127
	}

	function rn(rm, qV) {
		qV && (qV.rs = 1, rm.appendChild(bn.rt.transform(qV)))
	}

	function rq(bu) {
		rW ? rM.scrollTop = rM.scrollHeight : bu && (rM.scrollTop = rX)
	}
	this.re = function(rf) {
			rY = 1048575, rN.textContent = "", rf || this.mY()
		}, this.mY = function() {
			var rg = bn.y.rh[0],
				rg = bn.y.rj[rg],
				rk = rg.rk,
				ep = rk.length,
				jS = 1048575 === rY ? 0 : ep - (rg.rl - rY + 1048575) % 1048575;
			if (rY = rg.rl, !(ep <= (jS = Math.max(jS, 0)))) {
				for (var rm = document.createDocumentFragment(), aB = jS; aB < ep; aB++) rn(rm, bn.l1.ro(rk[aB], bn.l1.rp(rk[aB])));
				rN.appendChild(rm), rq()
			}
		}, this.rr = function(r) {
			var rm = document.createDocumentFragment();
			rn(rm, r), rN.appendChild(rm), rq()
		}, this.show = function(qX) {
			qX.appendChild(rM), qX.appendChild(rO), this.resize(qX)
		}, this.ru = function(qX) {
			t.removeChild(qX, rM), t.removeChild(qX, rO)
		}, this.resize = function(qX) {
			rV = qX ? qX.offsetHeight : rV;
			var qX = bA.qd.rw(.04, .75),
				rx = Math.max(qX, rV - qX),
				ry = h.i / h.k,
				rz = .7 * ry,
				s0 = bA.qd.qm(rV - qX - rx),
				rx = (rO.style.height = bA.qd.qm(qX), rM.style.height = bA.qd.qm(rx), h.j > h.i || a0.a1.hy() ? (rO.style.top = s0, rM.style.top = bA.qd.qm(rV - rx), bA.qd.qn(rM, 8)) : (rM.style.top = s0, rO.style.top = bA.qd.qm(rV - qX), bA.qd.qn(
						rM, 2)), this.rQ.e.style.width = bA.qd.qm(rz), this.rQ.e.style.fontSize = rU.button.style.fontSize = bA.qd.qm(.5 * qX), bA.qd.qn(this.rQ.e, 6), rU.button.style.left = bA.qd.qm(rz), rU.button.style.width = bA.qd.qm(ry - rz),
					.385 * qX);
			a0.a1.hy() && (rx *= .8 - .12 * (h.i > h.j)), rN.style.marginLeft = rN.style.marginRight = bA.qd.qm(.5 * rx), rN.style.fontSize = bA.qd.qm(rx), rq(1)
		}, (self = this).rQ.e.rZ = 127, rM.style.position = "absolute", rM.style.left = "0", rM.style.width = "100%", rM.style.overflowX = "hidden", rM.style.overflowY = "auto", rM.style.font = "inherit", rM.style.backgroundColor = bB.nj, rM
		.addEventListener("scroll", function() {
			rX = rM.scrollTop, rW = rX < rM.scrollHeight - rM.clientHeight - 2 ? 0 : 1
		}), rN.style.font = "inherit", rO.style.position = "absolute", rO.style.left = "0", rO.style.width = "100%", self.rQ.e.setAttribute("placeholder", L(13)), self.rQ.e.style.position = "absolute", self.rQ.e.style.top = "0", self.rQ.e.style
		.left = "0", self.rQ.e.style.height = "100%", self.rQ.e.style.backgroundColor = bB.ng, self.rQ.e.style.textAlign = "center", (rU = new w(L(14), rS)).button.top = "0", rU.button.style.position = "absolute", rU.button.style.height = "100%", rU
		.qx(bB.oy), rP = new ra("127", rU.button, 1, 1), rM.appendChild(rN), rO.appendChild(self.rQ.e), rO.appendChild(rU.button)
}

function s2(s3, qo, s4) {
	function click() {
		var value = 1 - s3.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + qo, void 0 !== s3.e9 ? bj.s5.s6(s3.e9, value) : s3.value = value, s4 && s4(value)
	}
	var e;
	qo = qo || L(15), this.e = document.createElement("p"), (e = this.e).textContent = (s3.value ? "🟩 " : "⬜ ") + qo, e.style.margin = "0", e.style.marginBottom = "0.5em", e.style.cursor = "pointer", e.addEventListener("click", click)
}

function s7(qX, qQ) {
	var qI = document.createElement("div");
	this.qZ = qI, this.resize = function() {
		qI.style.padding = bA.qd.qm(bc.qj), qI.style.lineHeight = bA.qd.qm(bA.qd.rw(.035))
	}, qX.style.overflowX = "hidden", qX.style.overflowY = "auto", qI.innerHTML = qQ, qX.appendChild(qI)
}

function s8(s9) {
	var qI = document.createElement("div");
	this.e = qI, this.sA = s9, this.resize = function() {
		for (var ep = s9.length, aB = 1; aB < ep; aB++) bA.qd.qn(s9[aB], 4)
	};
	var aB, ep = s9.length;
	for (qI.style.width = "100%", qI.style.height = "2.7em", qI.style.marginTop = "0.6em", qI.style.border = "inherit", aB = 0; aB < ep; aB++) s9[aB].style.verticalAlign = "top", s9[aB].style.width = (100 / ep).toFixed(2) + "%", s9[aB].style.height =
		"100%", s9[aB].style.fontSize = "0.75em", qI.appendChild(s9[aB])
}

function sB(sC, qq, sD) {
	this.qI = document.createElement("div"), this.rC = sC;
	var sE = 0;
	this.resize = function(qX, sG) {
		var ep = sC.length;
		if (!sD)
			for (var aB = 1; aB < ep; aB++) bA.qd.qn(sC[aB].button, 4);
		for (var sH = 0, aB = 0; aB < ep; aB++) sH += sC[aB].button.offsetWidth;
		if (qX && (sE = qX.offsetWidth), sG && sH < sE)
			for (aB = 0; aB < ep; aB++) sC[aB].button.style.width = (100 * sC[aB].button.offsetWidth / sH).toFixed(2) + "%";
		else
			for (aB = 0; aB < ep; aB++) sC[aB].button.style.width = "auto";
		sG || this.resize(qX, 1)
	};
	var sF = this;
	sF.qI.style.height = sF.qI.style.maxHeight = "100%";
	for (var aB = 0; aB < sC.length; aB++) sC[aB].qx(qq), sC[aB].button.style.height = "100%", sC[aB].button.style.padding = "0.0em 0.9em", sF.qI.appendChild(sC[aB].button)
}

function sI() {
	var e;
	this.e = document.createElement("hr"), this.resize = function() {
		bA.qd.qn(this.e, 8, bB.nu)
	}, (e = this.e).style.marginBottom = e.style.marginTop = "0.65em", e.style.marginLeft = e.style.marginRight = "-4%", e.style.border = "none"
}

function sJ() {
	var sN, sO, sK = document.createElement("div"),
		sL = 0,
		sM = 0;
	this.show = function(ew, ey, qK, sP, sQ) {
		if (sL) {
			if (!sP) return;
			this.ru()
		}
		ew === ey && -1 === ew ? (ew = sN, ey = sO) : (sN = ew, sO = ey), sQ || (sM = sP), sL = 1;
		sQ = h.i / h.k, sK.style.whiteSpace = "pre", sK.textContent = qK, bA.qd.qn(sK, 5), sK.style.font = bA.qd.sS(0, bA.qd.rw(.015)), sK.style.padding = "0.3em 0.6em", sK.style.left = ew + "px", sK.style.top = "0px", document.body.appendChild(
			sK), sP = ew + sK.offsetWidth - sQ;
		0 < sP && (sK.style.left = (qK = ew - sP) + "px", qK < 5) && (sK.style.whiteSpace = "pre-wrap"), sK.style.top = ey - sK.offsetHeight + sM * bc.sU + "px"
	}, this.ru = function(sV) {
		if (sL) {
			if (sV && sM) return 0;
			sL = 0, t.removeChild(document.body, sK)
		}
		return 1
	}, sK.style.position = "absolute", sK.style.backgroundColor = bB.nh, sK.style.color = bB.nl, sK.style.pointerEvents = "none", sK.style.zIndex = "5", sK.style.maxWidth = "100%"
}

function rR(sW, type, sX, sY) {
	var e;
	this.e = document.createElement("input"), (e = this.e).type = type ? "number" : "text", e.id = "input" + t.y.sZ++, e.value = sW.value, e.style.width = "100%", e.style.userSelect = "none", e.style.outline = "none", e.style.resize = "none", e.style
		.border = "inherit", e.style.font = "inherit", e.style.color = bB.nl, e.style.backgroundColor = bB.ne, e.style.fontSize = "1em", e.style.padding = "0.1em 0.2em", e.addEventListener("focus", function() {
			h.sa++
		}), e.addEventListener("blur", function() {
			h.sa--, -1 !== sW.e9 && bj.s5.s6(sW.e9, e.value)
		}), e.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== sW.e9 && bj.s5.s6(sW.e9, e.value), sX ? sX() : e.blur())
		}), sY && e.addEventListener("input", function(qV) {
			sY(qV)
		})
}

function sb(qX, data) {
	var ep = data.sc.length,
		sd = document.createElement("div"),
		se = document.createElement("div"),
		sf = document.createElement("div"),
		sg = new Array(ep),
		qY = new Array(ep),
		sh = new Array(data.si.length),
		sj = bA.color.nf(70, 70, 0, .35);

	function r8() {
		this.style.backgroundColor = bA.color.r8(sj, 160)
	}

	function so() {
		this.style.backgroundColor = sj
	}

	function qg() {
		var f8;
		for (qX.style.font = bA.qd.sS(0, bA.qd.sy(.026, .5, .03)), aB = 1; aB < sh.length; aB++) bA.qd.qn(sh[aB], 4);
		if (bA.qd.qn(sd, 2), ep) {
			for (var hH, sz = sd.offsetWidth, t0 = sf.offsetWidth, aB = 0; aB < sh.length; aB++) hH = .01 * data.sn[aB] * t0, sh[aB].style.width = (100 * hH / sz).toFixed(2) + "%";
			var l7 = data.sc[0].length;
			for (aB = 0; aB < ep; aB++)
				for (bA.qd.qn(sg[aB], 2), f8 = 1; f8 < l7; f8++) bA.qd.qn(qY[aB][f8], 4);
			se.sk && (se.scrollTop = se.sk)
		}
	}
	this.resize = function() {
			qg(), qg()
		}, qX.style.display = "flex", qX.style.flexDirection = "column", se.style.overflowX = "hidden", se.style.overflowY = "auto", se.addEventListener("scroll", function() {
			this.sk = this.scrollTop
		}),
		function() {
			var es, aB, sc = data.sc,
				l7 = ep ? sc[0].length : 0;
			for (aB = 0; aB < ep; aB++) {
				sg[aB] = document.createElement("div"), sg[aB].style.backgroundColor = function(aB) {
					return aB % 2 == 1 ? bA.color.nf(130, 130, 130, .35) : bB.nk
				}(aB), sg[aB].style.width = "100%", sg[aB].style.display = "flex", qY[aB] = new Array(l7);
				for (var f8 = 0; f8 < l7; f8++) qY[aB][f8] = es = document.createElement("div"), es.style.display = "flex", es.style.justifyContent = "center", es.style.wordBreak = "break-all", es.style.padding = "0.4em 0em", es.style.width = data
					.sn[f8] + "%", es.innerHTML = sc[aB][f8].fH, 1 === sc[aB][f8].dt && (es.name = "" + aB, es.style.color = bB.oj, es.style.backgroundColor = sj, es.addEventListener("mouseover", r8), es.addEventListener("mouseout", so), function(es,
						sq, sr) {
						2147483647 !== sr && es.addEventListener("click", function() {
							bD.a7(30), bD.a8(30, sq), bH.dd(bD.aC), this.style.backgroundColor = sj, t.u(8, t.ss, new st(25, {
								su: 0,
								sq: bF.sv.sw(bF.sv.sx(5)),
								sr: sr
							}))
						})
					}(es, sc[aB][f8].sq, sc[aB][f8].sr)), sg[aB].appendChild(es)
			}
			for (sd.style.display = "flex", sd.style.backgroundColor = bA.color.nf(0, 120, 0, .35), aB = 0; aB < sh.length; aB++) sh[aB] = es = document.createElement("div"), es.style.display = "flex", es.style.justifyContent = "center", es.style
				.wordBreak = "break-all", es.style.padding = "0.4em 0em", es.style.width = data.sn[aB] + "%", es.innerHTML = data.si[aB], sd.appendChild(es)
		}();
	for (var aB = 0; aB < ep; aB++) sf.appendChild(sg[aB]);
	se.appendChild(sf), qX.appendChild(sd), qX.appendChild(se)
}

function t1() {
	var t5, t6, t2 = document.createElement("div"),
		t3 = document.createElement("div"),
		t4 = document.createElement("div"),
		sf = document.createElement("div"),
		rC = [],
		e4 = [L(16), L(17), L(18), L(19), L(20), L(21), L(22)],
		t7 = [1, 2, 3, 0, 9, 10, 11];

	function t9(aB) {
		t.u(8, 0, new st(21, {
			tB: t7[aB],
			tC: 0,
			tD: 10
		}))
	}
	this.show = function() {
			this.s6(t.y.tE), document.body.appendChild(t2)
		}, this.ru = function() {
			t.removeChild(document.body, t2)
		}, this.s6 = function(tE) {
			for (var tF = [3, 0, 1, 2, 4, 5, 6], aB = 0; aB < rC.length; aB++) {
				var i = tE[aB];
				t5[tF[aB]][1].rb.textContent = i || ""
			}
		}, this.resize = function() {
			var aB, tG = bc.gap,
				j = bA.qd.tH(.085),
				i = Math.min(4 * j, h.i - 2 * tG),
				ep = rC.length;
			for (bA.qd.tI(t2, tG, h.j - tG - j, i, j), bA.qd.qn(t2), bA.qd.qn(t3, 6), aB = 0; aB < ep - 1; aB++) bA.qd.qn(rC[aB].button, 6);
			for (aB = 0; aB < ep; aB++) t5[aB][0].resize(), t5[aB][1].resize();
			for (rC[0].ew = 0, rC[0].button.style.left = bA.qd.qm(rC[0].ew), rC[0].button.style.width = bA.qd.tJ(1.7 * j), aB = 1; aB < ep; aB++) rC[aB].ew = rC[aB - 1].ew + rC[aB - 1].button.offsetWidth, rC[aB].button.style.left = bA.qd.qm(rC[aB]
				.ew);
			if (!t6) {
				if (!ab.tK()) return;
				(t6 = ab.get(14)).style.width = "24%", t6.style.position = "absolute", t3.appendChild(t6)
			}
			t6.style.left = bA.qd.qm(0), t6.style.top = "7%", t4.tL && (t4.scrollLeft = t4.tL)
		}, t2.style.position = "absolute", t3.style.width = "25%", t3.style.height = "100%", t3.style.backgroundColor = bB.nh, t4.style.position = "absolute", t4.style.width = "75%", t4.style.height = "100%", t4.style.backgroundColor = bB.nh, t4
		.style.top = t4.style.right = bA.qd.qm(0), bA.qd.t8(t4), sf.style.height = sf.style.maxHeight = "100%", rC.push(new w("", function() {
			t9(0)
		}, bB.oV)), rC.push(new w("", function() {
			t9(1)
		}, bB.oW)), rC.push(new w("", function() {
			t9(2)
		}, bB.oO)), rC.push(new w("", function() {
			t9(3)
		}, bB.o9)), rC.push(new w("", function() {
			t9(4)
		}, bB.ou)), rC.push(new w("", function() {
			t9(5)
		}, bB.oq)), rC.push(new w("", function() {
			t9(6)
		}, bB.ou)), t5 = new Array(rC.length);
	for (var aB = 0; aB < rC.length; aB++) rC[aB].button.style.position = "absolute", t5[aB] = [new tA(e4[aB], rC[aB].button, .25, .45), new tA("", rC[aB].button, .53, .84, 1)], rC[aB].button.style.height = rC[aB].button.style.maxHeight = "100%", rC[
		aB].button.top = bA.qd.qm(0), sf.appendChild(rC[aB].button);
	t4.appendChild(sf), t2.appendChild(t3), t2.appendChild(t4)
}

function tM(tN, tO, tP, tQ, rK, rL) {
	var tR = document.createElement("div"),
		tS = document.createElement("div"),
		tT = document.createElement("div"),
		tU = document.createElement("div"),
		tV = document.createElement("div"),
		tW = document.createElement("div"),
		tX = document.createElement("div"),
		tY = document.createElement("div"),
		tZ = document.createElement("span"),
		ta = document.createElement("div");
	this.tb = new rJ(rK, rL), this.tc = new td(rL), this.te = [tN, tO, tP, tQ], this.ti = function(tj) {
		tj = (tj / 10).toFixed(1) + "%";
		tY.style.width = tj, tZ.innerHTML = tj
	}, this.tk = function() {
		this.tc.ru(tW), this.tb.show(tW)
	}, this.tl = function() {
		this.tb.ru(tW), this.tc.show(tW)
	}, this.tm = function() {
		return tS
	}, this.show = function() {
		document.body.appendChild(tR)
	}, this.ru = function() {
		t.removeChild(document.body, tR)
	}, this.resize = function(tn) {
		var to = 1 - .4 * a0.a1.hy() * (h.i > 1.6 * h.j),
			tp = bA.qd.rw(.05 * to),
			tq = h.j > h.i,
			tr = bA.qd.rw(.07 * to + .03 * tq),
			ts = bA.qd.rw(.04 + .02 * tq),
			tq = bA.qd.rw(.02 * to + .01 * tq),
			tu = bA.qd.rw(.025);
		tR.style.font = bA.qd.sS(0, tu), to < 1 && (tu = bA.qd.sS(0, to * tu), tT.style.font = tu, tV.style.font = tu, ta.style.font = tu, tX.style.font = tu, tU.style.font = tu), tS.style.height = bA.qd.qm(tp), tS.style.font = bA.qd.sS(0, .72 *
				tp), bA.qd.qn(tS, 2), tT.style.top = bA.qd.qm(tp), tT.style.height = bA.qd.qm(tr), bA.qd.qn(tT, 2), tU.style.font = bA.qd.sS(0, to * bA.qd.rw(.02)), tU.style.top = bA.qd.qm(tp + tr), tU.style.height = bA.qd.qm(ts), bA.qd.qn(tU,
			2), tV.style.top = bA.qd.qm(tp + tr + ts), tV.style.height = bA.qd.qm(tr), bA.qd.qn(tV, 2), tW.style.top = bA.qd.qm(tp + tr + ts + tr), tW.style.height = bA.qd.qm(h.j / h.k - tp - 3 * tr - ts - tq), tX.style.top = bA.qd.qm(h.j / h.k -
				tr - tq), tX.style.height = bA.qd.qm(tq), bA.qd.qn(tX, 8), tZ.style.font = bA.qd.sS(0, .8 * tq), ta.style.top = bA.qd.qm(h.j / h.k - tr), ta.style.height = bA.qd.qm(tr), bA.qd.qn(ta, 8), tN.resize(tT), tO.resize(tT), tP.resize(
			tT), tQ.resize(tT), tn ? this.tb.resize(tW) : this.tc.resize()
	};
	rK = this;
	tR.style.position = "absolute", tR.style.top = "0", tR.style.left = "0", tR.style.width = "100%", tR.style.height = "100%", tR.style.backgroundColor = bB.nk, bJ.r5() || (tR.style.backdropFilter = "blur(4px)", tR.style.webkitBackdropFilter =
		"blur(4px)"), tS.style.position = "absolute", tS.style.top = "0", tS.style.left = "0", tS.style.width = "100%", tS.style.display = "flex", tS.style.alignItems = "center";
	for (var g = [tT, tU, tV, ta], aB = 0; aB < g.length; aB++) g[aB].style.position = "absolute", g[aB].style.left = "0", g[aB].style.width = "100%", bA.qd.t8(g[aB]);
	tW.style.position = "absolute", tW.style.left = "0", tW.style.width = "100%", tW.style.font = "inherit", tX.style.position = "absolute", tX.style.left = "0", tX.style.width = "100%", tY.style.position = "absolute", tY.style.top = "0", tY.style
		.left = "0", tY.style.height = "100%", tY.style.width = "50%", tY.style.backgroundColor = bB.o7, tZ.innerHTML = "", tZ.style.position = "absolute", tZ.style.top = "50%", tZ.style.left = "50%", tZ.style.transform = "translate(-50%, -50%)", tS
		.appendChild(function() {
			var th = document.createElement("h1");
			return th.textContent = L(23), th.style.margin = "0 auto 0.15em auto", th.style.fontFamily = "Arial Black, Trebuchet MS", th.style.fontSize = "inherit", th.style.fontWeight = "inherit", th
		}()), tT.appendChild(tN.qI), tU.appendChild(tO.qI), tV.appendChild(tP.qI), tX.appendChild(tY), tX.appendChild(tZ), ta.appendChild(tQ.qI), tR.appendChild(tS), tR.appendChild(tT), tR.appendChild(tU), tR.appendChild(tV), tR.appendChild(tW), tR
		.appendChild(tX), tR.appendChild(ta), rK.tc.show(tW)
}

function td(rL) {
	var tR = document.createElement("div"),
		tW = document.createElement("div");
	this.mY = function() {
			tW.textContent = "", bn.tw.ru(1);
			for (var rm = document.createDocumentFragment(), tx = bn.y.rh[0], ty = bn.ty.tz[tx], u0 = bn.ty.u0[tx], aB = 0; aB < ty.length; aB++) ! function(rm, qV, u2, tx) {
				var rb = document.createElement("span");
				rb.textContent = (u2 ? "🟢 " : "⚪ ") + bn.l1.u3(qV, tx), rb.style.color = bn.l1.u4(qV.u5), rb.style.cursor = "pointer", rb.style.margin = "0.2em 0.2em 0.2em 0.2em", rb.style.width = rb.style.maxWidth = 2 === tx ? "10em" : "9em",
					rb.style.height = rb.style.maxHeight = "1.4em", rb.style.whiteSpace = "nowrap", rb.style.overflow = "hidden", rb.style.textOverflow = "ellipsis", rb.style.font = "inherit", rb.style.display = "inline-block", bn.l1.u6(qV) && (
						rb.style.textDecoration = "underline"), qV.u7 && (rb.style.textDecorationLine = "underline", rb.style.textDecorationStyle = "dotted");
				rb.onclick = function(e) {
					rL(e, qV)
				}, bJ.r5() || (rb.onmouseover = function(e) {
					bn.tw.u8(e, qV, 1)
				}), rm.appendChild(rb)
			}(rm, ty[aB], aB < u0, tx);
			tW.appendChild(rm)
		}, this.show = function(qX) {
			qX.appendChild(tR)
		}, this.ru = function(qX) {
			t.removeChild(qX, tR)
		}, this.resize = function() {
			tW.style.fontSize = bA.qd.qm(bA.qd.rw(.02, .3))
		}, tR.style.top = "0", tR.style.left = "0", tR.style.width = tR.style.height = "100%", tR.style.overflowX = "hidden", tR.style.overflowY = "auto", tR.style.font = "inherit", tW.style.font = "inherit", tW.style.margin = "0.4em", tR
		.appendChild(tW)
}

function u9(uA) {
	var tR = document.createElement("div"),
		rO = document.createElement("div"),
		uB = [];

	function r0() {
		bJ.r5() || (this.style.backgroundColor = bA.color.r8(bB.nh, 50))
	}

	function r1() {
		this.style.backgroundColor = bB.nh
	}
	this.s6 = function(uD, uE) {
			uB[2].textContent = uD + 1 + " / " + uE
		}, this.show = function(qV) {
			rO.appendChild(bn.rt.transform(bn.l1.ro(qV, bn.l1.rp(qV)))), document.body.appendChild(tR)
		}, this.resize = function() {
			var j = bA.qd.rw(.03, .5);
			tR.style.width = 10 * j + "px", tR.style.font = bA.qd.sS(1, .75 * j), bA.qd.qn(tR, 4), rO.style.top = j + "px", rO.style.font = bA.qd.sS(0, .55 * j), bA.qd.qn(rO, 2), tR.style.height = j + rO.offsetHeight + "px";
			for (var aB = 0; aB < 3; aB++) bA.qd.qn(uB[aB], 6), uB[[0, 1, 3][aB]].style.width = 2 * j + "px";
			for (aB = 0; aB < 4; aB++) uB[aB].style.height = j + "px", bA.qd.qn(uB[aB], 2);
			uB[2].style.width = 4 * j + "px", uB[1].style.left = 2 * j + "px", uB[2].style.left = 4 * j + "px", uB[3].style.left = 8 * j + "px"
		}, this.uF = function() {
			for (var aB = 0; aB < 4; aB++) uB[aB].onclick = null, uB[aB].onmouseover = null, uB[aB].onmouseout = null;
			t.removeChild(document.body, tR), tR = rO = uB = null
		}, tR.style.position = "absolute", tR.style.color = bB.nl, tR.style.zIndex = "3", tR.style.right = "0", tR.style.top = "0", rO.style.position = "absolute", rO.style.height = "auto", rO.style.color = bB.nl, rO.style.backgroundColor = bB.nh, rO
		.style.left = "0", rO.style.width = "100%", rO.style.overflowWrap = "break-word", tR.appendChild(rO);
	for (var aB = 0; aB < 4; aB++) uB[aB] = document.createElement("div"), uB[aB].style.position = "absolute", uB[aB].style.backgroundColor = bB.nh, uB[aB].style.color = bB.nl, uB[aB].style.top = "0", uB[aB].style.display = "flex", uB[aB].style
		.justifyContent = "center", uB[aB].style.alignItems = "center", uB[aB].style.userSelect = "none", uB[aB].style.outline = "none", uB[aB].style.font = "inherit", 2 !== (uB[aB].uC = aB) && (uB[aB].onclick = uA, uB[aB].onmouseover = r0, uB[aB]
			.onmouseout = r1), tR.appendChild(uB[aB]);
	uB[0].textContent = "◀", uB[1].textContent = "▶", uB[3].textContent = "✖"
}

function uG(uA) {
	var sK = document.createElement("div");

	function r0() {
		bJ.r5() || (sK.style.backgroundColor = bA.color.r8(bB.nh, 50))
	}

	function r1() {
		sK.style.backgroundColor = bB.nh
	}
	this.s6 = function(uE) {
			sK.textContent = uE
		}, this.show = function() {
			document.body.appendChild(sK)
		}, this.resize = function() {
			var j = bA.qd.rw(.03, .5);
			sK.style.width = 2 * j + "px", sK.style.height = j + "px", sK.style.font = bA.qd.sS(1, .75 * j), bA.qd.qn(sK, 4), bA.qd.qn(sK, 2)
		}, this.uF = function() {
			sK.onclick = null, sK.onmouseover = null, sK.onmouseout = null, t.removeChild(document.body, sK), sK = null
		}, sK.style.position = "absolute", r1(), sK.style.color = bB.nl, sK.style.zIndex = "3", sK.style.right = "0", sK.style.top = "0", sK.style.display = "flex", sK.style.justifyContent = "center", sK.style.alignItems = "center", sK.style
		.userSelect = "none", sK.style.outline = "none", sK.onclick = uA, sK.onmouseover = r0, sK.onmouseout = r1
}

function uH(sC) {
	var tR = document.createElement("div"),
		uI = document.createElement("div"),
		sL = (this.ew = 0, this.ey = 0);

	function uK() {
		bn.uL.ru()
	}
	this.rC = sC, this.show = function(ew, ey, uN) {
		if (sL) return [0, 0];
		sL = 1, this.ew = ew, this.ey = ey,
			function(self, uN) {
				var i = bA.qd.rw(.16, .7),
					j = sC.length * i / 3,
					uP = h.i / h.k,
					uQ = h.j / h.k,
					nN = Math.min(1, Math.min(uP / i, uQ / j));
				i *= nN, j *= nN, uN && (self.ew += bA.qd.rw(.03, .5)), self.ew = bL.hx(self.ew, 0, uP - i), self.ey = bL.hx(self.ey, 0, uQ - j), uI.style.left = self.ew + "px", uI.style.top = self.ey + "px", uI.style.width = i + "px", uI.style
					.height = j + "px", uI.style.font = bA.qd.sS(0, .3 * j / sC.length), bA.qd.qn(uI, 5);
				for (var aB = 1; aB < sC.length; aB++) bA.qd.qn(sC[aB].button, 8)
			}(this, uN), document.body.appendChild(tR)
	}, this.ru = function() {
		sL && (sL = 0, tR.removeEventListener("click", uK), t.removeChild(document.body, tR))
	};
	for (var aB = 0; aB < sC.length; aB++) new ra("" + (1 + aB), sC[aB].button, 0, 1);
	tR.style.position = "fixed", tR.style.top = "0", tR.style.left = "0", tR.style.width = "100%", tR.style.height = "100%", tR.style.zIndex = "5", uI.style.position = "absolute",
		function() {
			for (var uM = (100 / sC.length).toFixed(2) + "%", aB = 0; aB < sC.length; aB++) sC[aB].button.style.width = "100%", sC[aB].button.style.height = sC[aB].button.style.maxHeight = uM, sC[aB].button.style.padding = "0.0em 0.9em", uI
				.appendChild(sC[aB].button)
		}(), tR.appendChild(uI), tR.addEventListener("click", uK)
}

function uR(sW, uS) {
	this.qT = [];
	var uT = this.qT;

	function click() {
		for (var aB = 0; aB < uT.length; aB++) uT[aB].textContent = uT[aB].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var e9 = parseInt(this.name);
		void 0 !== sW.e9 && bj.s5.s6(sW.e9, e9), uS && uS(e9)
	}
	for (var uU, ep = sW.uV.length, aB = 0; aB < ep; aB++)(uU = document.createElement("p")).textContent = "⚪ " + sW.uV[aB], uU.style.margin = "0", uU.name = "" + aB, uU.style.cursor = "pointer", uU.style.fontSize = "1em", uU.addEventListener(
		"click", click), uT.push(uU);
	uT[sW.value].textContent = uT[sW.value].textContent.replace("⚪", "🟢")
}

function uW(title, uX, uY) {
	var t2 = document.createElement("div"),
		uZ = document.createElement("div"),
		sf = document.createElement("div"),
		ua = document.createElement("div"),
		ub = document.createElement("div");
	this.uc = sf, this.ud = uX, this.show = function() {
			!1 !== uY ? document.body.appendChild(t2) : (document.body.appendChild(uZ), document.body.appendChild(ua))
		}, this.ru = function() {
			!1 !== uY ? t.removeChild(document.body, t2) : (t.removeChild(document.body, uZ), t.removeChild(document.body, ua))
		}, this.uh = function() {
			var rx = bA.qd.rw(.1),
				rv = bA.qd.rw(.08 + .04 * (h.ui < 1), .3);
			return {
				rx: rx,
				rv: rv,
				uj: h.j / h.k - rx - rv
			}
		}, this.resize = function(sG) {
			var ep = uX.length,
				uk = this.uh(),
				rx = uk.rx,
				rv = uk.rv;
			for (uZ.style.height = bA.qd.qm(rx), bA.qd.qn(uZ, 2), ua.style.top = bA.qd.qm(h.j / h.k - rv), ua.style.height = bA.qd.qm(rv), bA.qd.qn(ua, 8), sf.style.top = bA.qd.qm(rx), sf.style.height = sf.style.maxHeight = bA.qd.qm(uk.uj), uZ.style
				.font = bA.qd.sS(0, bA.qd.rw(.02, .15)), ua.style.font = bA.qd.sS(0, bA.qd.rw(.02, .7)), sf.style.font = bA.qd.sS(0, bA.qd.rw(.02, .35)), aB = 1; aB < ep; aB++) bA.qd.qn(uX[aB].button, 4);
			for (var sH = 0, aB = 0; aB < ep; aB++) sH += uX[aB].button.offsetWidth;
			if (sG && sH < ua.offsetWidth)
				for (aB = 0; aB < ep; aB++) uX[aB].button.style.width = (100 * uX[aB].button.offsetWidth / sH).toFixed(2) + "%";
			else
				for (aB = 0; aB < ep; aB++) uX[aB].button.style.width = "auto";
			ua.tL && (ua.scrollLeft = ua.tL), sG || this.resize(!0)
		}, this.ul = function() {
			var uk = this.uh(),
				fA = h.k;
			um.fillStyle = bB.nh, um.fillRect(0, fA * uk.rx, h.i, fA * uk.uj)
		}, t2.style.position = "absolute", t2.style.top = "0", t2.style.left = "0", t2.style.width = "100%", t2.style.height = "100%", uZ.style.position = "absolute", uZ.style.top = "0", uZ.style.left = "0", uZ.style.width = "100%", uZ.style
		.display = "flex", uZ.style.backgroundColor = bB.nh, ua.style.position = "absolute", ua.style.left = "0", ua.style.width = "100%", bA.qd.t8(ua), ub.style.height = ub.style.maxHeight = "100%", sf.style.position = "absolute", sf.style.width =
		"100%", sf.style.backgroundColor = bB.nh,
		function() {
			for (var aB = 0; aB < uX.length; aB++) uX[aB].button.style.height = "100%", uX[aB].button.style.padding = "0.0em 0.9em"
		}();
	for (var aB = 0; aB < uX.length; aB++) ub.appendChild(uX[aB].button);
	uZ.appendChild(function() {
		var ug = document.createElement("h1");
		return ug.textContent = title, ug.style.margin = "auto", ug.style.fontSize = 18 <= title.length && h.j > h.i ? "1.8em" : "2.3em", ug.style.fontFamily = "Arial Black, Trebuchet MS", ug
	}()), ua.appendChild(ub), !1 !== uY && (t2.appendChild(sf), t2.appendChild(uZ), t2.appendChild(ua))
}

function ra(un, uo, up, uq) {
	var self;
	this.rb = document.createElement("span"), (self = this).rb.textContent = un, self.rb.style.color = bB.nl, self.rb.style.position = "absolute", self.rb.style.font = "inherit", uq ? self.rb.style.bottom = "0.06em" : self.rb.style.top = "0.12em",
		up ? self.rb.style.left = "0.2em" : self.rb.style.right = "0.2em", self.rb.style.fontSize = "0.6em", self.rb.style.pointerEvents = "none", self.rb.style.whiteSpace = "pre", uo.style.position = "relative", uo.style.overflow = "hidden", uo
		.appendChild(self.rb)
}

function tA(un, uo, ur, us, ut) {
	var self;
	this.rb = document.createElement("span"), this.resize = function() {
			this.rb.style.fontSize = ((us - ur) * uo.offsetHeight).toFixed(1) + "px"
		}, (self = this).rb.textContent = un, self.rb.style.color = bB.nl, self.rb.style.font = "inherit", self.rb.style.margin = "0.1em 0.6em", self.rb.style.pointerEvents = "none", ut && (self.rb.style.fontWeight = "bold"), self.rb.style
		.whiteSpace = "nowrap", self.rb.style.display = "block", uo.appendChild(self.rb)
}

function uu(uv, uw, ux, uy) {
	var uz = document.createElement("textarea"),
		v0 = (this.e = uz, !0);

	function v6() {
		uz.select(), document.execCommand("copy")
	}
	this.resize = function() {
			uw && bA.qd.qn(uz, 5)
		}, this.v1 = function(v2) {
			uz.value = v2
		}, this.v3 = function() {
			return uz.value
		}, this.v4 = function() {
			uz.select()
		}, this.clear = function() {
			uz.value = ""
		}, this.v5 = function() {
			v0 && navigator.clipboard ? (uz.select(), navigator.clipboard.writeText(uz.value).catch(function() {
				v0 = !1, v6()
			})) : v6()
		}, uz.setAttribute("id", "textArea" + t.y.sZ++), uz.setAttribute("autocomplete", "off"), uv && uz.setAttribute("placeholder", uv), uz.style.top = "0", uz.style.left = "0", uz.style.width = "100%", uz.style.height = "100%", uz.style
		.userSelect = "none", uz.style.outline = "none", uz.style.resize = "none", uz.style.border = "none", uz.style.color = bB.nl, uz.style.backgroundColor = bB.ne, uy ? (uz.style.fontSize = "1em", uz.rows = 6, uz.style.padding = "0.25em") : (uz
			.style.padding = "0.45em", uz.style.fontSize = "1.2em"), ux && uz.addEventListener("input", function(e) {
			ux(e)
		}), uz.addEventListener("focus", function() {
			h.sa++
		}), uz.addEventListener("blur", function() {
			h.sa--
		})
}

function dI() {
	this.qu = new v7, this.eL = new v8, this.s5 = new v9, this.y = new vA, this.vB = new vC, this.dd = function() {
		this.eL.dd(), (new vD).dd(), this.vB.dd()
	}
}

function v8() {
	function vE(aB, type, vK, dw) {
		bj.eL.data.push({
			e9: aB,
			type: type || 0,
			value: vK || 0,
			vK: vK || 0,
			dw: dw || 0
		})
	}

	function vF(aB, type, vK, dw) {
		bj.eL.data.push({
			e9: aB,
			type: type,
			value: vK || "",
			vK: vK || "",
			dw: dw || 0
		})
	}

	function vG(nT) {
		for (var aB = bj.eL.data.length; aB < nT; aB++) bj.eL.data.push(null)
	}
	this.data = [], this.dd = function() {
		vE(0, 1, 0, 5), vE(1, 1, 1), vE(2, 0), vF(3, 2), vE(4, 1), vF(5, 2, "Trebuchet MS", 1), vE(6, 0), vE(7, 0, 0), vE(8, 0), vE(9, 1, 1), vE(10, 1), vE(11, 1, 1), vF(12, 2, navigator.language), vE(13), vE(14), vG(100), vF(100, 2), vF(101, 2),
			vF(102, 2), vF(103, 2), vF(104, 2), vF(105, 2), vF(106, 2), vE(107), vE(108), vE(109), vF(110, 2), vE(111), vE(112), vE(113), vF(114, 2), vE(115), vF(116, 2), vE(117, 1), vF(118, 2, "", 2), vE(119, 1, 0, 1), vF(120, 2), vE(121, 1, ~~(
				262144 * Math.random())), vF(122, 2, "Player " + Math.floor(1e3 * Math.random())), vE(123), vF(124), vE(125, 1), vF(126, 2), vE(127, 0, 1), vE(128), vE(129), vE(130), vE(131), vE(132), vF(133, 2), vE(134, 0, 5), vF(135, 2), vF(
				136, 2), vE(137), vE(138), vE(139), vE(140), vE(141), vE(142), vE(143), vE(144), vF(145, 2), vE(146), vE(147), vF(148, 2), vE(149), vE(150, 0, 1), vF(151, 2), vE(152, 0, 5), vE(153, 1), vE(154, 1), vF(155, 2), vF(156, 2), vE(157),
			vE(158), vE(159), vE(160), vF(161, 2), vE(162, 0, 1024), vG(180), vE(180, 0), vE(181, 0)
	}, this.s6 = function(e9, value) {
		this.data[e9].value = value
	}, this.vH = function(e9, value) {
		this.s6(e9, value);
		var value = String(value),
			ep = value.length;
		5e4 < ep ? console.log("storage value too large: index " + e9 + " size " + ep) : (bj.qu.save(e9, value), bj.qu.save(e9, String(this.data[e9].dw), !0))
	}, this.vI = function(e9) {
		return Number(this.data[e9].value)
	}, this.vJ = function(e9) {
		return String(this.data[e9].value)
	}
}

function vC() {
	var vL = [];

	function vP(sq) {
		vL.unshift(sq), bj.s5.s6(161, vL.join(";"))
	}

	function vO(sq) {
		for (var vR = vL, ep = vR.length, aB = 0; aB < ep; aB++)
			if (vR[aB] === sq) return vR.splice(aB, 1), bj.s5.s6(161, vR.join(";")), 1
	}
	this.dd = function() {
		var qK = bj.eL.data[161].value;
		qK.length && (vL = qK.split(";"))
	}, this.get = function() {
		return vL
	}, this.vM = function() {
		return {
			uV: vL,
			value: 0
		}
	}, this.u7 = function(sq) {
		return bA.ql.has(vL, sq)
	}, this.vN = function(sq) {
		return vO(sq) ? 0 : (vP(sq), 1)
	}, this.mY = function(sq) {
		vO(sq) && vP(sq)
	}, this.vQ = function(e9) {
		e9 < vL.length && (vL.splice(e9, 1), bj.s5.s6(161, vL.join(";")))
	}
}

function v7() {
	this.vS = function(e9, dw) {
		return Number(this.vT(e9, dw))
	}, this.vT = function(e9, dw) {
		var fH = null;
		return 0 === a0.id ? a0.vU && (fH = a0.vU.getItem((dw ? "v" : "d") + e9)) : 1 === a0.id ? fH = a0.vV.loadString((dw ? 1e3 : 2e3) + e9) : 2 === a0.id && (fH = a0.vW[(dw ? "v" : "d") + e9]), fH && 0 !== fH.length ? fH : null
	}, this.vX = function(ep, vY) {
		var g = [],
			vZ = vY ? "e" : "l";
		if (0 === a0.id) {
			if (a0.vU)
				for (aB = 0; aB < ep; aB++) g.push(a0.vU.getItem(vZ + aB))
		} else if (1 === a0.id)
			for (var va = vY ? 5e3 : 3e3, aB = 0; aB < ep; aB++) g.push(a0.vV.loadString(va + aB));
		else if (2 === a0.id)
			for (aB = 0; aB < ep; aB++) g.push(a0.vW[vZ + aB]);
		return g
	}, this.save = function(e9, value, dw) {
		var vb = (dw ? "v" : "d") + e9;
		if (0 === a0.id) {
			if (a0.vU && bj.eL.data[140].value) try {
				a0.vU.setItem(vb, value)
			} catch (e) {
				console.log(e)
			}
		} else 1 === a0.id ? a0.vV.saveString((dw ? 1e3 : 2e3) + e9, value) : 2 === a0.id && (a0.vW[vb] = value, a0.vc.postMessage(vb + " " + value))
	}, this.vd = function(g, vY) {
		var ep = g.length,
			vZ = vY ? "e" : "l";
		if (0 === a0.id) {
			if (a0.vU && bj.eL.data[140].value) try {
				for (aB = 0; aB < ep; aB++) a0.vU.setItem(vZ + aB, g[aB])
			} catch (e) {
				console.log(e)
			}
		} else if (1 === a0.id)
			for (var va = vY ? 5e3 : 3e3, aB = 0; aB < ep; aB++) a0.vV.saveString(va + aB, g[aB]);
		else if (2 === a0.id)
			for (aB = 0; aB < ep; aB++) a0.vW[vZ + aB] = g[aB], a0.vc.postMessage(vZ + aB + " " + g[aB])
	}
}

function vD() {
	this.dd = function() {
		! function() {
			var data = bj.eL.data;
			0 === data[2].dw && (h.j > h.i || 0 !== a0.id) && (data[2].value = data[2].vK = 1);
			0 === data[100].dw && (data[100].value = data[100].vK = (0 === a0.id ? "Player " : 1 === a0.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var aB, fH, data = bj.eL.data,
			ep = data.length;
		for (aB = 0; aB < ep; aB++) data[aB] && data[aB].dw === bj.qu.vS(aB, !0) && (fH = bj.qu.vT(aB), data[aB].value = null === fH ? data[aB].vK : 2 === data[aB].type ? fH : Number(fH))
	}
}

function vA() {
	function vj(g) {
		if (0 === g.length) bj.s5.s6(116, "");
		else {
			for (var vm = g[0], aB = 1; aB < g.length; aB++) vm += ";" + g[aB];
			bj.s5.s6(116, vm)
		}
	}
	this.vg = function() {
		bj.eL.data[110].value.length && (bj.eL.data[106].value = bj.eL.data[110], bj.s5.s6(110, ""), this.vh())
	}, this.vh = function() {
		var g = bj.eL.data[116].value.split(";");
		for (g.length % 2 == 1 && g.pop(), g.unshift(bj.eL.data[106].value), g.unshift(bj.eL.data[105].value), aB = 2; aB < g.length; aB += 2)
			if (g[aB] === g[0]) {
				g.splice(aB, 2);
				break
			} for (var vi = [], aB = 0; aB < g.length; aB += 2) vi.push(g[aB]);
		vj(g), bj.eL.data[117].value = 0, bj.eL.data[117].uV = vi
	}, this.vk = function(e9) {
		bj.eL.data[117].uV.splice(e9, 1), bj.eL.data[117].value = Math.min(e9, bj.eL.data[117].uV.length - 1);
		var g = bj.eL.data[116].value.split(";");
		g.splice(2 * e9, 2), vj(g)
	}, this.vl = function(e9) {
		var g = bj.eL.data[116].value.split(";");
		return {
			sq: g[2 * e9],
			password: g[2 * e9 + 1]
		}
	}, this.vn = function() {
		var fH = bL.hx(bj.eL.data[121].value, -1, 262143);
		return fH = -1 === fH ? ~~(262144 * Math.random()) : fH
	}
}

function v9() {
	this.s6 = function(e9, value) {
		2 !== bj.eL.data[e9].type && (value = Math.floor(value)), bj.eL.data[e9].value !== value && (bj.eL.vH(e9, value), 0 === e9 ? (t.x(), b7.dd(), t.u(2)) : 1 === e9 ? h.dp(1) : 2 === e9 ? h.dp(0) : 5 === e9 && (bA.qd.vo(), h.dp(0)))
	}, this.vp = function() {
		for (var data = bj.eL.data, aB = 0; aB < 100; aB++) data[aB] && bj.eL.vH(aB, data[aB].vK);
		bA.qd.vo(), h.dp(1)
	}, this.vq = function() {
		for (var data = bj.eL.data, aB = 0; aB < data.length; aB++) data[aB] && bj.eL.s6(aB, data[aB].vK)
	}, this.vr = function() {
		for (var f9 = bj.eL, aB = 128; aB < 135; aB++) f9.vH(aB, f9.data[aB].vK)
	}, this.vs = function(data) {
		bj.s5.s6(109, data.sr), bj.s5.s6(107, data.vt), bj.s5.s6(108, data.vu), bj.s5.s6(112, data.vv), bj.s5.s6(111, data.vw), bj.s5.s6(113, data.vx), bj.s5.s6(135, data.vy), bj.s5.s6(136, data.vz), bj.s5.s6(137, data.w0), bj.s5.s6(138, data
			.w1), bj.s5.s6(139, data.w2), bj.s5.s6(141, data.w3), bj.s5.s6(142, data.w4), bj.s5.s6(143, data.w5), bj.s5.s6(144, data.w6)
	}
}

function c4() {
	this.sv = new w7, this.w8 = new w9, this.wA = new wB, this.dd = function() {
		this.sv.dd()
	}
}

function w9() {
	this.wC = function(size) {
		for (var wD = bH, g = [], aB = 0; aB < size; aB++) g.push(String.fromCharCode(wD.pl(16)));
		return g.join("")
	}, this.wE = function(qK) {
		return 20 < (qK = qK.trim()).length ? qK.substring(0, 20) : qK
	}
}

function w7() {
	var wF = new Uint8Array(78);
	this.dd = function() {
		var aB;
		for (wF[50] = 37, aB = 0; aB < 10; aB++) wF[aB + 3] = aB + 1;
		for (aB = 0; aB < 26; aB++) wF[aB + 20] = aB + 11, wF[aB + 52] = aB + 38
	}, this.wG = function(qK) {
		return qK.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.wH = function(qK, size) {
		if ((qK = this.wG(qK)).length > size) return qK.substring(0, size);
		for (; qK.length < size;) qK = "-" + qK;
		return qK
	}, this.wI = function(qK) {
		for (var wJ = wF, ep = qK.length, g = new Uint8Array(ep), aB = 0; aB < ep; aB++) g[aB] = wJ[qK.charCodeAt(aB) - 45];
		return g
	}, this.wK = function(wL) {
		bD.a7(6 * wL.length), this.wM(wL), bH.dd(bD.aC)
	}, this.wM = function(wL) {
		for (var ep = wL.length, i = bD, aB = 0; aB < ep; aB++) i.a8(6, wL[aB])
	}, this.wN = function(qK) {
		this.wM(this.wI(qK))
	}, this.wO = function(qK, size) {
		this.wM(this.wI(this.wH(qK, size)))
	}, this.wP = function(qK, size) {
		for (var g = this.wI(this.wH(qK, size)), fH = 0, nN = 1, aB = g.length - 1; 0 <= aB; aB--) fH += nN * g[aB], nN *= 64;
		return fH
	}
}

function wQ() {
	var i, j, wR;

	function wr(hH, es, wp, wW, wk) {
		es = wq(hH, es + 1 + 2 * wW & 3);
		! function(hH, kp) {
			return 1 < Math.abs(hH % i - kp % i) || 1 < Math.abs(wu(hH) - wu(kp))
		}(hH, es) && 0 === wk[es << 2] && (wk[es << 2] = wp)
	}

	function wu(gN) {
		return Math.floor((gN + .5) / i) % j
	}

	function wq(gN, es) {
		return gN + wR[es]
	}
	this.wS = function(qK) {
		var aB, wT, ep, wU, wD = bH;
		for (bG.sv.wK(bG.sv.wI(qK)), bS.wX.wY[bS.eV].i = bS.f0 = i = wD.pl(12), bS.wX.wY[bS.eV].j = bS.f1 = j = wD.pl(12), wR = [-i, -1, i, 1], bS.wh = document.createElement("canvas"), bS.wh.width = bS.f0, bS.wh.height = bS.f1, bS.wd = bS.wh
			.getContext("2d", {
				alpha: !1
			}), bS.we = bS.wi = null, bS.we = bS.wd.getImageData(0, 0, bS.f0, bS.f1), bS.wi = bS.we.data, bA.ql.wj(bS.wi), ep = wD.pl(12), wT = wD.pl(5), wU = wa(i * j - 1), aB = 0; aB < ep; aB++) ! function(l7, gN, wV, wW) {
			var aB, es, wD = bH,
				wk = bS.wi,
				wl = gN,
				wm = gN,
				wn = 0,
				wo = 1 + wV,
				wp = 2 - wV;
			for (wk[gN << 2] = wo, aB = 0; aB < l7; aB++) es = wD.pl(2), gN = wq(gN, es), wk[gN << 2] === wo ? wn % 2 == 1 && wr(wm, wn + 2 * wW + 3, wp, wW, wk) : wk[gN << 2] = wo, wr(gN, es, wp, wW, wk), wr(wm, es, wp, wW, wk), wm = gN,
				wn = es;
			wq(gN, 0) === wl ? (wr(gN, 0, wp, wW, wk), wr(wl, 0, wp, wW, wk)) : wq(gN, 1) === wl && (wr(gN, 0, wp, wW, wk), wr(wl, 2, wp, wW, wk));
			0 === l7 && (wr(wl, 0, wp, wW, wk), wr(wl, 2, wp, wW, wk))
		}(wD.pl(wT), wD.pl(wU), 1 === wD.pl(1), 1 === wD.pl(1));
		var ew, ey, hh, wv, ww, wx, wk = bS.wi,
			wy = !0,
			wz = bS.wX.wY[bS.eV].wz,
			x0 = bS.wX.wY[bS.eV].x0;
		for (ey = 0; ey < j; ey++)
			for (wv = !0, ww = wy, ew = wx = 0; ew < i; ew++) hh = 4 * ey * i + 4 * ew, wx <= ew && 0 < wk[hh] && (ww = 2 === wk[hh], wv) && (wv = !1, ww !== wy) ? (wy = ww, wx = ew + 1, ew = -1) : (ww ? (wk[hh] = x0[0], wk[1 + hh] = x0[1], wk[
				2 + hh] = x0[2]) : (wk[hh] = wz[0], wk[1 + hh] = wz[1], wk[2 + hh] = wz[2]), wk[3 + hh] = 255);
		bS.wd.putImageData(bS.we, 0, 0), bS.wf = !0, bS.wg.dd(), bf.dl = !0
	}
}

function wB() {
	this.wS = function(x1) {
		for (var wD = bH, size = wD.pl(x1), x2 = 7 + 9 * wD.pl(1), g = [], aB = 0; aB < size; aB++) g.push(String.fromCharCode(wD.pl(x2)));
		return g.join("")
	}
}

function c9() {
	var sN, sO, x3, x4, x5, x6, x7, x8, x9, xA;

	function xC() {
		var xF = aD.xF;
		for (x9 = xF; x9 < aD.em; x9++) xB();
		for (x9 = aD.hD ? aD.kC : 0; x9 < xF; x9++) {
			if (!xG()) {
				for (var f9 = aD.xK = x9; f9 < xF; f9++) x9 = f9, xB();
				return
			}
			xJ(x6 + sN * x5 + bL.du(x5, 2), x7 + sO * x5 + bL.du(x5, 2))
		}
	}

	function xm(player) {
		for (var ih = ag.ih, ij = ag.ij, ii = ag.ii, ik = ag.ik, ey = ij[player]; ey <= ik[player]; ey++)
			for (var ew = ih[player]; ew <= ii[player]; ew++) {
				var eT = ac.xn(ew, ey);
				ac.gP(eT) && (ac.jN(eT) ? ac.gK(eT, player) : ac.xo(eT, player))
			}
	}

	function xl(g, tC, tD) {
		var dt = g[tC];
		g[tC] = g[tD], g[tD] = dt
	}

	function xG() {
		return function() {
			var aB;
			for (aB = 0; aB < 8; aB++)
				if (sN = bL.du(x3 * ay.random(), ay.value(100)), sO = bL.du(x4 * ay.random(), ay.value(100)), xt()) return 1;
			return
		}() || function() {
			var i9, iC, f8, xI, f9, xH;
			for (i9 = bL.du(x3 * ay.random(), ay.value(100)), iC = bL.du(x4 * ay.random(), ay.value(100)), f8 = 40; 1 <= f8; f8--)
				for (xI = x4 - f8; 0 <= xI; xI -= 40)
					for (sO = (xI + iC) % x4, f9 = 40; 1 <= f9; f9--)
						for (xH = x3 - f9; 0 <= xH; xH -= 40)
							if (sN = (xH + i9) % x3, xt()) return 1;
			return
		}()
	}

	function xt() {
		for (var gN, xv, gap = bL.du(x5 - x8, 2), xw = x7 + sO * x5 + gap, xx = x6 + sN * x5 + gap, xu = xw + x8 - 1; xw <= xu; xu--)
			for (xv = xx + x8 - 1; xx <= xv; xv--)
				if (gN = ac.xn(xv, xu), !ac.ek(gN) || ac.jN(gN)) return;
		return 1
	}

	function xJ(xH, xI) {
		xB(), xy(xH - 2, xI - 2)
	}

	function xB() {
		ag.ml[x9] = 0, ag.gd[x9] = ag.xj[x9] = 0, ag.gH[x9] = [], ag.gV[x9] = [], ag.gW[x9] = [], ag.fF[x9] = [], ag.ih[x9] = ag.ij[x9] = ag.ii[x9] = ag.ik[x9] = 0
	}

	function xy(xH, xI) {
		var gN, aB, xz, y0;
		for (ag.ml[x9] = 1, ag.ih[x9] = xH + 10, ag.ij[x9] = xI + 10, ag.ik[x9] = ag.ii[x9] = 0, xz = xH; xz < xH + 4; xz++)
			for (y0 = xI; y0 < xI + 4; y0++)(xH < xz && xz < xH + 3 || xI < y0 && y0 < xI + 3) && (gN = ac.xn(xz, y0), ac.ek(gN)) && (ag.ih[x9] = Math.min(xz, ag.ih[x9]), ag.ii[x9] = Math.max(xz, ag.ii[x9]), ag.ij[x9] = Math.min(y0, ag.ij[x9]), ag
				.ik[x9] = Math.max(y0, ag.ik[x9]), xA[ag.gd[x9]] = gN, ag.gd[x9]++, ac.xo(gN, x9));
		for (ag.xj[x9] = ag.gd[x9], aB = ag.gd[x9] - 1; 0 <= aB; aB--) ac.y1(xA[aB], x9) ? (ac.gK(xA[aB], x9), ag.gV[x9].push(xA[aB])) : ac.y2(xA[aB]) ? (ac.gK(xA[aB], x9), ag.gW[x9].push(xA[aB])) : ac.y3(xA[aB]) && (ac.gK(xA[aB], x9), ag.fF[x9]
			.push(xA[aB]))
	}
	this.dd = function() {
		if (xA = new Array(12), x8 = 6, x5 = 10, x3 = bL.du(bS.f0, x5), x4 = bL.du(bS.f1, x5), x6 = bL.du(bS.f0 - x5 * x3, 2), x7 = bL.du(bS.f1 - x5 * x4, 2), aD.hD)
			for (var aB = 0; aB < aD.kC; aB++) x9 = aB, xB(), ag.ml[x9] = 1;
		(0 === aD.data.spawningType ? xC : 1 === aD.data.spawningType ? (xC(), function() {
			var xL = aD.xM;
			aD.xN || xL++;
			if (!(xL < 3)) {
				for (var data = aD.data, jS = (aD.hD ? aD.kC : 0) + data.teamPlayerCount[0], nT = aD.xK, xO = new Uint32Array(xL), xP = new Uint32Array(xL), xQ = new Uint16Array(xL), xR = new Uint16Array(xL), en = bg.en, ih = ag.ih, ij =
						ag.ij, ii = ag.ii, ik = ag.ik, fU = bO.fU, fV = bO.fV, aB = jS; aB < nT; aB++) fU[aB] = ih[aB] + ii[aB] >> 1, fV[aB] = ij[aB] + ik[aB] >> 1;
				for (aB = jS; aB < nT; aB++) {
					var id = en[aB];
					xO[id] += fU[aB], xP[id] += fV[aB]
				}
				var kZ = bg.kZ;
				for (aB = 1; aB < xL; aB++) {
					var gI = Math.max(data.teamPlayerCount[kZ[aB]], 1);
					xQ[aB] = bL.du(xO[aB], gI), xR[aB] = bL.du(xP[aB], gI)
				}
				var xS = bg.xS,
					xT = bg.xT,
					xU = bg.xU,
					fT = bO.fT;
				for (aB = 0; aB < 512; aB++) fT[aB] = aB;
				for (var e8 = 0; e8 < 2 + (4 <= xL); e8++)
					for (aB = jS; aB < nT; aB++) {
						for (var hH = aB, xV = fT[hH], xW = 1, f5 = bL.xX(fU[xV] - xQ[1], fV[xV] - xR[1]), f8 = 2; f8 < xL; f8++) {
							var xY = bL.xX(fU[xV] - xQ[f8], fV[xV] - xR[f8]);
							xY < f5 && (f5 = xY, xW = f8)
						}
						var xZ = en[hH];
						if (xW !== xZ) {
							if (2 === e8 && 4 <= xL) {
								var xa = Math.max((xW + 1) % xL, 1),
									xb = bL.xX(fU[xV] - xQ[xa], fV[xV] - xR[xa]);
								for (f8 = 1; f8 < xL; f8++) xY = bL.xX(fU[xV] - xQ[f8], fV[xV] - xR[f8]), f5 < xY && xY < xb && (xb = xY, xa = f8);
								xa !== xZ && bL.xX(xQ[xZ] - xQ[xa], xR[xZ] - xR[xa]) < bL.xX(xQ[xZ] - xQ[xW], xR[xZ] - xR[xW]) && (xW = xa)
							}
							var xc = kZ[xW],
								xd = xT[xc] + (aD.hD ? 0 : xU[xc]),
								kp = xS[xd],
								xe = fT[kp],
								xf = xT[xc + 1];
							f5 = bL.xX(fU[xe] - xQ[xZ], fV[xe] - xR[xZ]);
							for (var fA = xd + 1; fA < xf; fA++) {
								var xg = xS[fA],
									xh = fT[xg];
								(xY = bL.xX(fU[xh] - xQ[xZ], fV[xh] - xR[xZ])) < f5 && (f5 = xY, kp = xg)
							}
							kp < jS || nT <= kp || (xe = fT[kp], xO[xZ] += fU[xe] - fU[xV], xP[xZ] += fV[xe] - fV[xV], xO[xW] += fU[xV] - fU[xe], xP[xW] += fV[xV] - fV[xe], gI = data.teamPlayerCount[kZ[xZ]], xQ[xZ] = bL.du(xO[xZ], gI),
								xR[xZ] = bL.du(xP[xZ], gI), gI = data.teamPlayerCount[xc], xQ[xW] = bL.du(xO[xW], gI), xR[xW] = bL.du(xP[xW], gI), fT[hH] = xe, fT[kp] = xV)
						}
					}! function() {
						for (var fT = bO.fT, ih = ag.ih, ij = ag.ij, ii = ag.ii, ik = ag.ik, gd = ag.gd, xj = ag.xj, gV = ag.gV, gW = ag.gW, fF = ag.fF, aB = 0; aB < 512; aB++) {
							var xk = fT[aB];
							if (xk !== aB) {
								xl(ih, aB, xk), xl(ij, aB, xk), xl(ii, aB, xk), xl(ik, aB, xk), xl(gd, aB, xk), xl(xj, aB, xk), xl(gV, aB, xk), xl(gW, aB, xk), xl(fF, aB, xk), xm(aB), xm(xk), fT[aB] = aB;
								for (var j = xk, gO = fT[j]; gO !== aB;) gO = fT[j = gO];
								fT[j] = xk
							}
						}
					}()
			}
		}) : function() {
			var xF = aD.xF;
			for (x9 = xF; x9 < aD.em; x9++) xB();
			for (x9 = aD.hD ? aD.kC : 0; x9 < xF; x9++)
				if (! function() {
						var spawningData = aD.data.spawningData,
							xH = spawningData[2 * x9] + 1,
							spawningData = spawningData[2 * x9 + 1] + 1;
						if (3 < xH && xH < bS.f0 - 5 && 3 < spawningData && spawningData < bS.f1 - 5 && ac.ek(ac.xn(xH, spawningData)) && function(xH, xI) {
								var gN, xv, xu;
								for (xu = xI; xI - 6 < xu; xu--)
									for (xv = xH; xH - 6 < xv; xv--)
										if (gN = ac.xn(xv, xu), ac.jN(gN)) return;
								return 1
							}(xH + 3, spawningData + 3)) return xJ(xH + 1, spawningData + 1), 1;
						return
					}()) {
					if (!xG()) {
						for (var f9 = aD.xK = x9; f9 < xF; f9++) x9 = f9, xB();
						return
					}
					var xH = x6 + sN * x5 + bL.du(x5, 2),
						xI = x7 + sO * x5 + bL.du(x5, 2);
					xJ(xH, xI)
				}
		})(), bd.mh[7] = ag.gd[aD.eZ]
	}, this.y4 = function(jL, y5, y6) {
		var aB, xH, xI, gN, sN, sO;
		for (x9 = jL, aB = 0; aB < 20; aB++)
			for (xH = y5 + aB; y5 - aB <= xH; xH--)
				for (xI = y6 + aB; y6 - aB <= xI; xI--)
					if ((xH === y5 + aB || xH === y5 - aB || xI === y6 + aB || xI === y6 - aB) && 3 < xH && xH < bS.f0 - 5 && 3 < xI && xI < bS.f1 - 5 && ac.ek(ac.xn(xH, xI)) && function(xH, xI) {
							var gN, xv, xu;
							for (xu = xI; xI - 6 < xu; xu--)
								for (xv = xH; xH - 6 < xv; xv--)
									if (gN = ac.xn(xv, xu), ac.jN(gN) && !ac.yC(x9, gN)) return;
							return 1
						}(xH + 3, xI + 3)) {
						if (0 < ag.gd[x9]) {
							for (sO = sN = gN = void 0, sN = ag.ii[x9]; sN >= ag.ih[x9]; sN--)
								for (sO = ag.ik[x9]; sO >= ag.ij[x9]; sO--) gN = 4 * (sO * bS.f0 + sN), ac.y9(x9, gN) && (ac.yA(gN), ag.gd[x9]--);
							xB()
						}
						return xy(xH - 1, xI - 1), !0
					} return !1
	}, this.yB = function(jL) {
		x9 = jL, xG() ? xJ(x6 + sN * x5 + bL.du(x5, 2), x7 + sO * x5 + bL.du(x5, 2)) : xB()
	}
}

function yD() {
	at.yE(), um.setTransform(i0, 0, 0, i0, 0, 0), um.imageSmoothingEnabled = i0 < 3, um.drawImage(bS.wh, aS.yF(), aS.yG()), bP.yH.ul(), um.drawImage(yI, aS.yF(), aS.yG()), at.ul(), bN.ul(), af.ul(), (aD.nE ? (bh.ul(), bC) : (aN.ul(), aV.ul(), aR
	.ul(), bC.ul(), aw.ul(), aW.ul(), aS.ul(), aQ.ul(), bh.ul(), aU.ul(), aP.ul(), aM.ul(), aL.ul(), aX.ul(), be.ul(), av)).ul(), t.ul()
}

function yJ(yK, i, j) {
	yK.clearRect(0, 0, i, j), yK.fillStyle = bB.ni, yK.fillRect(0, 0, i, j)
}

function yL(yK, i, j, yM) {
	yK.fillStyle = bB.nl, yK.fillRect(0, 0, i, yM), yK.fillRect(0, 0, yM, j), yK.fillRect(i - yM, 0, yM, j), yK.fillRect(0, j - yM, i, yM)
}

function yN(yK, ew, ey, hl, yM, gN, yO) {
	yK.fillStyle = bB.nl;
	var gN = Math.floor(hl * gN),
		t0 = (gN += (gN - yM) % 2, Math.floor((gN - yM) / 2)),
		hl = Math.floor((hl - gN) / 2);
	yK.fillRect(ew + hl, ey + hl + t0, gN, yM), yO && yK.fillRect(ew + hl + t0, ey + hl, yM, gN)
}

function yQ() {
	this.dd = function() {
		8 === aD.kU && aN.yR()
	}, this.yS = function(yT) {
		var elo = aD.data.elo,
			jR = (elo[yT] - elo[1 - yT]) / 10,
			jR = 8 / (1 + Math.pow(2, jR / 32)),
			jR = Math.floor(10 * jR + .5),
			yV = elo[yT] + jR,
			yW = this.yX(yV),
			elo = this.yX(elo[1 - yT] - jR),
			jR = (0 === yT ? aN.yZ(yW, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : aN.yZ(elo, yW, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"]), ((1 + aD.yb) * yV / 500).toFixed(2));
		yT === aD.eZ ? aN.yc(640, L(24, [jR]), 40, 0, bB.nl, bB.ni, -1, !1) : aN.yc(640, L(25, [ag.yd[yT], jR]), 40, 0, bB.nl, bB.ni, -1, !1)
	}, this.yX = function(elo) {
		return 16e3 === (elo = bL.hx(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function cf() {
	this.rt = new ye, this.wk = new yf
}

function yf() {
	this.hb = !1;
	this.yj = [], this.yk = 100;
	var nB, nC, gap, hl, yg, yi, yl = 0,
		ym = new Array(9),
		yn = [],
		yo = [],
		yp = 0,
		yq = 0,
		yr = 0,
		ys = 0;

	function z4() {
		ym.sort(function(f8, f9) {
			return f9.kH - f8.kH
		});
		for (var qK = "" + ym[0].pM, aB = 1; aB < 9; aB++) qK += "," + ym[aB].pM;
		for (aB = 0; aB < 9; aB++) qK += "," + ym[aB].kH;
		bj.eL.vH(120, qK)
	}
	this.dd = function() {
		for (var yt = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], aB = 0; aB < yt.length; aB++) {
			var color = 6 === yt[aB] ? bB.oB : bB.nj;
			this.yj.push(bA.canvas.yu(ab.get(3), yt[aB], color))
		}
		for (aB = 0; aB < aj.rt.yv; aB++) yo.push(aj.rt.yw - aj.rt.yv + aB);
		for (aB = 0; aB < aj.rt.yx; aB++) yo.push(aj.rt.yy + aB);
		var yz = aj.rt.z0(bK.yz);
		for (aB = 0; aB < yz.length; aB++) yo.push(yz[aB]);
		! function() {
			var aB, g = bj.eL.data[120].value.split(",");
			if (18 !== g.length)
				for (aB = 0; aB < 9; aB++) ym[aB] = {
					pM: 1015 + aB,
					kH: 0
				};
			else
				for (aB = 0; aB < 9; aB++) {
					var fH = parseInt(g[aB]),
						fA = (fH = 0 <= fH && fH < aj.rt.yw ? fH : 0, parseInt(g[aB + 9]));
					fA = 0 <= fA && fA < 1e3 ? fA : 0, ym[aB] = {
						pM: fH,
						kH: fA
					}
				}
		}()
	}, this.show = function(lR, lS, z5) {
		var aB;
		if (yp = lR, yq = lS, yl = z5 || 0, this.hb = !0, yn = [], 0 === yl)
			for (aB = 0; aB < 9; aB++) yn.push(ym[aB].pM);
		else {
			var f9 = 49 * yl,
				z5 = f9 - 49;
			for (z5 >= yo.length && (yl = 1, z5 = 0, f9 = 49), aB = z5 = (f9 = Math.min(f9, yo.length)) - 49; aB < f9; aB++) yn.push(yo[aB])
		}
		yn.push(1024);
		z5 = yn.length, hl = Math.floor((a0.a1.hy() ? .075 : .0468) * h.hz), gap = Math.floor(hl / 3), (yr = 10 * (yg = hl + gap)) > h.i && (yr = h.i, gap = (yg = yr / 10) - (hl = 3 * yg / 4)), yi = bL.du(z5, 10) + !!(z5 % 10), (ys = yi * yg) > h
			.j && (ys = h.j, gap = (yg = ys / yi) - (hl = 3 * yg / 4)), z5 = .5 * gap;
		nB = Math.min(Math.max(lR - .5 * yr + z5, z5), h.i - yr + z5), nC = Math.min(Math.max(lS - .5 * ys + z5, z5), h.j - ys + z5)
	}, this.h2 = function(lR, lS, player) {
		if (!this.hb) return !1;
		if (this.z7(lR, lS)) {
			lR = bL.hx(bL.du(lR - nB + .5 * gap, yg), 0, 9);
			if ((lR += 10 * bL.hx(bL.du(lS - nC + .5 * gap, yg), 0, 9)) >= yn.length) return aL.ru(), !0;
			lS = yn[lR];
			if (1024 === lS) return this.show(yp, yq, yl + 1), !0;
			! function(pM) {
				for (var aB = 0; aB < 9; aB++) ym[aB].kH = Math.floor(.99 * ym[aB].kH);
				for (aB = 0; aB < 9; aB++)
					if (pM === ym[aB].pM) return ym[aB].kH = Math.min(ym[aB].kH + 30, 999), z4();
				ym.splice(5, 0, {
					pM: pM,
					kH: Math.max(ym[4].kH, 30)
				}), ym.pop(), z4()
			}(lS), player === aD.eZ ? b8.hF.pL(lS) : b8.gB.pa(lS, player)
		}
		return aL.ru(), !0
	}, this.z7 = function(lR, lS) {
		return !(lR < nB - .5 * gap || lS < nC - .5 * gap || nB + yr - .5 * gap <= lR || nC + ys - .5 * gap <= lS)
	}, this.ul = function() {
		um.fillStyle = bB.ni, um.fillRect(nB - .5 * gap, nC - .5 * gap, yr, ys);
		for (var hh = .5 * bc.z8, ep = (um.lineWidth = bc.z8, um.strokeStyle = um.fillStyle = bB.nl, um.strokeRect(nB - .5 * gap + hh, nC - .5 * gap + hh, yr - 2 * hh, ys - 2 * hh), um.imageSmoothingEnabled = !0, yn.length), aB = 0; aB <
			ep; aB++) this.z9(yn[aB], um, nB + aB % 10 * yg, nC + bL.du(aB, 10) * yg, hl);
		um.imageSmoothingEnabled = !1
	}, this.z9 = function(pM, hr, ew, ey, hl) {
		var eT;
		pM >= 1024 - aj.rt.yv ? (eT = hl / this.yk, hr.setTransform(eT, 0, 0, eT, ew, ey), hr.drawImage(this.yj[pM - 1024 + aj.rt.yv], 0, 0), hr.setTransform(1, 0, 0, 1, 0, 0)) : (bA.qd.textAlign(hr, 1), bA.qd.textBaseline(hr, 1), hr.font = bA.qd
			.sS(0, .89 * hl), hr.fillText(aj.rt.zA(pM), ew + .5 * hl, ey + (.35 - bA.qd.zB + .56) * hl))
	}
}

function ye() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.yv = 13, this.yx = this.emojis.length, this.yy = 676, this.yw = 1024, this.zC = this.emojis.indexOf("💀"), this.zD = this.zC + 1, this.zE = this.emojis.indexOf("🥇"), this.zF = this.emojis.indexOf("😊"), this.zA = function(fH) {
		return fH < this.yy ? String.fromCharCode(55356, 56806 + bL.du(fH, 26), 55356, 56806 + fH % 26) : this.emojis[Math.min(fH - this.yy, this.yx - 1)]
	}, this.z0 = function(qK) {
		for (var ep = qK.length - 2, g = [], aB = 0; aB < ep; aB++) {
			var zG = qK.charCodeAt(aB) - 56806,
				zH = qK.charCodeAt(aB + 2) - 56806;
			0 <= zG && zG < 26 && 0 <= zH && zH < 26 && (g.push(26 * zG + zH), aB += 3)
		}
		return g
	}, this.zI = function(fH) {
		return fH < this.yy
	}, this.zJ = function(fH) {
		return fH >= 1024 - this.yv
	}, this.zK = function(fH) {
		return fH >= this.yy && fH < this.yy + this.zD
	}
}

function c3() {
	this.sv = new zL, this.w8 = new zM, this.wA = new zN, this.dd = function() {
		this.sv.dd()
	}
}

function zM() {
	this.wN = function(qK) {
		for (var ep = qK.length, i = bD, aB = 0; aB < ep; aB++) i.a8(16, qK.charCodeAt(aB))
	}
}

function zL() {
	var zO = new Uint8Array(64);
	this.dd = function() {
		var aB;
		for (zO[0] = 45, zO[37] = 95, aB = 0; aB < 10; aB++) zO[aB + 1] = 48 + aB;
		for (aB = 0; aB < 26; aB++) zO[aB + 11] = 65 + aB, zO[aB + 38] = 97 + aB
	}, this.sx = function(zP) {
		for (var wD = bH, wL = new Uint8Array(zP), aB = 0; aB < zP; aB++) wL[aB] = wD.pl(6);
		return wL
	}, this.sw = function(wL) {
		for (var ep = wL.length, zQ = zO, g = [], aB = 0; aB < ep; aB++) g.push(String.fromCharCode(zQ[wL[aB]]));
		return g.join("")
	}, this.zR = function(value, zS) {
		for (var zQ = zO, g = [], aB = 0; aB < zS; aB++) g.push(String.fromCharCode(zQ[value >> 6 * (zS - 1 - aB) & 63]));
		return g.join("")
	}
}

function cB() {
	var zT, zU, zV;
	zT = [32, 65, 191, 913, 931], zU = [64, 127, 688, 930, 1155], zV = new Array(zT.length + 1);
	for (var aB = 0; aB < zV.length; aB++) {
		zV[aB] = 0;
		for (var f8 = aB - 1; 0 <= f8; f8--) zV[aB] += zU[f8] - zT[f8]
	}

	function zb(fA) {
		for (var aB = zT.length - 1; 0 <= aB; aB--)
			if (fA >= zT[aB] && fA < zU[aB]) return aB;
		return -1
	}
	this.wE = function(qK) {
		return 0 !== (qK = qK.trim()).indexOf("Bot ") && 0 !== qK.indexOf("[Bot] ") && function(qK, zY, zZ) {
			var ep = (qK = qK.trim()).length;
			if (ep < zY || zZ < ep) return !1;
			for (var fA, za = 0, aB = 0; aB < ep; aB++)
				if (fA = qK.charCodeAt(aB), za += 65 <= fA && fA <= 90 || 1040 <= fA && fA <= 1071 ? 1 : 0, -1 === zb(fA)) return !1;
			if (3 < za && za > Math.floor(ep / 2)) return !1;
			return !0
		}(qK, 3, 20)
	}, this.zc = function(qK) {
		for (var ep = (qK = qK.trim()).length, g = [], aB = 0; aB < ep; aB++) {
			var fA, gN = zb(fA = qK.charCodeAt(aB));
			g.push(zV[gN] + fA - zT[gN])
		}
		return g
	}, this.wS = function(g) {
		for (var fA, f9, qK = "", ep = g.length, aB = 0; aB < ep; aB++)
			for (f9 = 1; f9 < zV.length; f9++)
				if (g[aB] < zV[f9]) {
					fA = zT[f9 - 1] + g[aB] - zV[f9 - 1], qK += String.fromCharCode(fA);
					break
				} return qK
	}, this.zd = function(qK) {
		for (var g = this.zc(qK), result = "", aB = 0; aB < g.length; aB++) result = (result += g[aB] < 10 ? "00" : g[aB] < 100 ? "0" : "") + g[aB].toString(10);
		return result
	}, this.ze = function(qK) {
		for (var g = new Array(Math.floor(qK.length / 3)), aB = 0; aB < qK.length; aB += 3) g[Math.floor(aB / 3)] = parseInt(qK.substring(aB, aB + 3));
		return this.wS(g)
	}, this.zf = function(qK) {
		for (var fH, g = [qK.length], aB = 0; aB < qK.length; aB++) g[aB] = qK.charCodeAt(aB) - 48;
		var result = "";
		for (aB = 0; aB < qK.length; aB++) aB === qK.length - 1 || 51 < 10 * g[aB] + g[aB + 1] ? result += g[aB].toString() : (fH = 10 * g[aB] + g[aB + 1], result += String.fromCharCode(fH + (fH < 26 ? 65 : 71)), aB++);
		return result
	}, this.zg = function(qK) {
		for (var fA, result = "", aB = 0; aB < qK.length; aB++) 48 <= (fA = qK.charCodeAt(aB)) && fA < 58 ? result += String.fromCharCode(fA) : 65 <= fA && fA < 75 ? result += "0" + (fA - 65).toString() : 75 <= fA && fA < 91 ? result += (fA - 65)
			.toString() : 97 <= fA && fA < 123 && (result += (fA - 71).toString());
		return result
	}, this.zh = function(qK) {
		for (var ep = qK.length, g = [], aB = 0; aB < ep; aB++)(fA = qK.charCodeAt(aB)) < 58 ? g.push(qK[aB]) : (fA -= fA < 91 ? 65 : 71, g.push(String(bL.du(fA, 10))), g.push(String(fA - 10 * bL.du(fA, 10))));
		var ep = g.length - 2,
			fA = 0,
			wL = [];
		for (aB = 0; aB < ep; aB += 3) wL[fA++] = parseInt(g[aB] + g[aB + 1] + g[aB + 2]);
		return wL
	}, this.zi = function() {
		for (var e8, zj = "", aB = 0; aB < 6; aB++) e8 = 48 + ay.random() % 36, e8 += 58 <= e8 ? 39 : 0, zj += String.fromCharCode(e8);
		return zj
	}
}

function zN() {
	this.zc = function(qK, x1, zk) {
		for (var zl = [], ep = qK.length, max = 0, aB = 0; aB < ep; aB++) {
			var fH = qK.charCodeAt(aB);
			zl.push(fH), max = Math.max(max, fH)
		}
		var x2 = max < 128 ? 7 : 16;
		for (zk.a8(x1, ep), zk.a8(1, +(16 == x2)), aB = 0; aB < ep; aB++) zk.a8(x2, zl[aB])
	}
}

function dA() {
	this.zm = new zn, this.result = new zo, this.zp = new zq, this.zr = new zs, this.zt = new zu, this.zv = new zw, this.dd = function() {
		this.result.dd()
	}
}

function zq() {
	this.zx = function() {
		for (var ep = al.ki, zy = al.kn, zz = [], aB = 0; aB < ep; aB++) {
			var gN = zy[aB];
			bA.gB.a00(gN) && zz.push(gN)
		}
		return zz
	}, this.a01 = function() {
		if (0 === bg.kZ[aD.a02]) return this.a03();
		bh.kD(aD.a02);
		for (var zz = [], ep = bO.fK[0], fT = bO.fT, aB = 0; aB < ep; aB++) {
			var gN = fT[aB];
			bA.gB.a00(gN) && zz.push(gN)
		}
		return zz
	}, this.a03 = function() {
		var gN = ln[0];
		return bA.gB.a00(gN) ? [gN] : []
	}, this.a04 = function(zz) {
		for (var ep = zz.length, dt = 0, gd = ag.gd, aB = 0; aB < ep; aB++) dt += gd[zz[aB]];
		return dt
	}
}

function zn() {
	function a06() {
		if (2 === aD.a0A) return 1;
		aw.a0B(), aD.a0A = 2, aD.a0C = aD.a0D
	}

	function a08() {
		bR.zt.a0E(), aX.show(1 === aD.a0F, !1, 2 === aD.a0F), bR.result.a0E(), bR.zv.j5(), bR.zr.j5(), aN.a0G(!0), aN.a0H(247), aN.a0H(956), aN.a0H(957), aV.mX(!0), aW.mX(!0), aw.mX(), bC.a0I(), aD.gy && bf.a0J.a0K(), bf.dl = !0, bb.a0L(), a0.a1
			.setState(0)
	}
	this.a05 = function() {
		a06() || (aD.a07 = 2, a08())
	}, this.a09 = function() {
		a06() || (aD.a07 = 1, a08())
	}
}

function zs() {
	this.j5 = function() {
		var a0T;
		2 === aD.a07 ? (aN.a0M(0, 59), aH.nK(2700)) : aD.kU < 7 ? (a0T = bg.kZ[aD.a02], a0T = bg.a0V[a0T], aQ.a0W(L(26, [a0T]), 2, 1, 12), aN.yc(0, L(27, [a0T]), 40, 0, bB.nl, bB.ni, -1, !1), aH.nK(2700)) : 8 === aD.kU ? (aD.a0F ? aN.a0M(aD.a0R,
			2) : aN.a0M(1 - aD.eZ, 3), aD.a0S.yS(aD.a0R), aH.n6(aD.a0R, 2700, !1, 0)) : 9 === aD.kU ? (aN.a0X(), aH.nK(2700)) : (aN.a0Y(aD.a0R), aH.n6(aD.a0R, 2700, !1, 0))
	}
}

function zw() {
	function a0i() {
		var tG;
		return 8 === aD.kU ? 0 : (tG = Math.floor(ag.a0j[aD.eZ] / 50), (tG = Math.min(tG, 400)) / 100)
	}

	function a0a() {
		var tG = a0i();
		0 !== tG && aN.yc(440, L(28, [tG.toFixed(2)]), 40, 0, bB.o3, bB.ni, -1, !1)
	}
	this.j5 = function() {
		var a0b;
		0 === bR.result.a0Z || 0 === bR.result.zz.length || 8 === aD.kU ? bA.gB.h1(aD.eZ) && a0a() : (function(a0b) {
			7 !== aD.kU && 10 !== aD.kU || 0 !== aD.a0F && a0b && aN.yc(600, L(32, [a0b.toFixed(2)]), 40, 0, bB.nl, bB.ni, -1, !1)
		}(a0b = function() {
			aN.yc(520, L(29), 40, 0, bB.nl, bB.ni, -1, !1);
			for (var zz = bR.result.zz, ep = zz.length, gd = ag.gd, g = [], aB = 0; aB < ep; aB++) {
				var gN = zz[aB];
				g.push({
					gN: gN,
					dt: gd[gN]
				})
			}
			g.sort((f8, f9) => f9.dt - f8.dt);
			var a0V = ag.yd,
				dt = bR.result.a0k,
				tG = bR.result.a0Z,
				qK = "",
				a0b = 0;
			for (aB = 0; aB < ep; aB++) {
				var hZ = g[aB].dt * tG / (100 * dt),
					a0m = a0V[g[aB].gN] + ": " + hZ.toFixed(2) + "   ";
				g[aB].gN === aD.eZ && (a0b = hZ), 2 < aB && 4 !== ep ? 3 === aB && (qK += "(" + L(30, [ep - 3]) + ")") : qK += a0m
			}
			aN.yc(560, bA.rc.a0n(qK), 40, 0, bB.o3, bB.ni, -1, !1), a0b ? aN.yc(580, L(31, [a0b.toFixed(2) + " + " + a0i().toFixed(2)]), 40, 0, bB.o3, bB.ni, -1, !1) : bA.gB.h1(aD.eZ) && a0a();
			return a0b
		}()), 2 === aD.a07 || 7 <= aD.kU || function(a0b) {
			var zz = bR.result.zz,
				ep = zz.length,
				a0o = ag.a0o,
				gd = ag.gd,
				a0p = [];
			loop: for (var aB = 0; aB < ep; aB++) {
				var gN = zz[aB],
					a0q = bA.rc.a0r(a0o[gN]);
				if (null !== a0q) {
					for (var a0s = gd[gN], f9 = a0p.length - 1; 0 <= f9; f9--)
						if (a0q === a0p[f9].name) {
							a0p[f9].dt += a0s, a0p[f9].g.push({
								gN: gN,
								dt: a0s
							});
							continue loop
						} a0p.push({
						name: a0q,
						dt: a0s,
						g: [{
							gN: gN,
							dt: a0s
						}]
					})
				}
			}
			if (0 !== a0p.length) {
				a0p.sort((f8, f9) => f9.dt - f8.dt);
				var g = a0p[0].g,
					a0t = (g.sort((f8, f9) => f9.dt - f8.dt), "[" + a0p[0].name + "]"),
					a0u = 512 * bR.result.a0Z / 26214400,
					l7 = (aN.yc(0, L(33, [a0t, a0u.toFixed(4)]), 40, 0, bB.nl, bB.ni, -1, !1), g.length),
					wJ = a0p[0].dt,
					a0v = 1e4 * a0u;
				for (aB = 0; aB < l7; aB++)
					if (g[aB].gN === aD.eZ) {
						aN.yc(600, L(34, [(a0v * g[aB].dt / (10 * wJ)).toFixed(2)]), 40, 0, bB.nl, bB.ni, -1, !1), aN.yc(640, L(35, [(.2 * a0b).toFixed(2), a0t]), 40, 0, bB.nl, bB.ni, -1, !1);
						break
					} aD.gy || aN.yc(720, L(36) + bK.a0w, 736, 0, bB.nl, bB.o9, -1, !1)
			}
		}(a0b))
	}, this.a0f = function() {
		var a0g, wl;
		aD.kW || (a0g = ag, wl = aD.eZ, 0 === a0g.a0h[wl]) || a0g.jF[wl] < 1 || 2 * a0g.q2[wl] > 3 * (a0g.jE[wl] + a0g.jF[wl]) || a0a()
	}
}

function zo() {
	this.dd = function() {
		this.a0x = 0, this.zz = [], this.a0k = 0, this.a0Z = 0
	}, this.a0E = function() {
		var sF;
		aD.kW || (sF = this, 2 === aD.a07 ? sF.zz = bR.zp.zx() : aD.hj ? sF.zz = bR.zp.a01() : sF.zz = bR.zp.a03(), sF.a0x = bi.a0z.a10(), sF.a0k = Math.max(1, bR.zp.a04(sF.zz)), b8.gB.pj(), 8 === aD.kU ? bR.result.a0Z = 0 : sF.a0Z = 100 * bR
			.result.a0x * (1 + aD.yb))
	}
}

function zu() {
	this.a0E = function() {
		if (2 === aD.a07) aD.a0F = 2;
		else {
			if (8 === aD.kU) bA.gB.jZ(0) || 0 === ag.ml[0] ? aD.a0R = 1 : bA.gB.jZ(1) || 0 === ag.ml[1] ? aD.a0R = 0 : aD.a0R = +(ag.gd[1] > ag.gd[0]);
			else {
				if (aD.hj) {
					var kk = bh.a13();
					if (aD.a02 = kk, bg.kZ[kk]) return void(aD.a0F = +(bg.en[aD.eZ] === kk))
				}
				aD.a0R = ln[0]
			}
			aD.a0F = +(aD.a0R === aD.eZ)
		}
	}
}

function dF() {
	this.id = 0, this.dw = 0, this.vU = null, this.vV = null, this.vW = null, this.vc = null, this.a1 = new a14, this.dd = function() {
		var self, dw;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (dw = Android.getVersion()) < 12 || (self.dw = dw, self.id = 1, self.vV = Android),
			function(self) {
				var dw;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.vW = mwIOSdataX, self.vc = window.webkit.messageHandlers.iosCommandA, dw = self
					.vW.version, self.dw = dw ? Number(dw) : 0)
			}(this),
			function(self) {
				var vU;
				try {
					if (!(vU = window.localStorage)) return;
					vU.setItem("tls7", "1"), vU.removeItem("tls7")
				} catch (error) {
					return
				}
				self.vU = vU
			}(this)
	}
}

function a14() {
	this.a18 = function() {
		bj.s5.vp(), bj.s5.vq(), b0.y.close(0, 3255), 0 === a0.id ? a0.vU && a0.vU.clear() : 1 === a0.id ? a0.vV.saveString(199, "") : 2 === a0.id && a0.vc.postMessage("clear")
	}, this.a19 = function() {
		2 === a0.id ? a0.vc.postMessage("showConsentForm") : 1 === a0.id && a0.vV.setState(7)
	}, this.a1A = function() {
		this.setState(14)
	}, this.hy = function() {
		return 1 === bj.eL.vI(2)
	}, this.a1B = function() {
		bj.eL.vH(102, "")
	}, this.setState = function(a1C) {
		1 === a0.id && 5 <= a0.dw && a0.vV.setState(a1C)
	}, this.a2 = function() {
		var a1D;
		1 === a0.id && 7 <= a0.dw ? a0.vV.setState(5) : ((a1D = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = a1D.toString())
	}, this.di = function() {
		1 !== a0.id || a0.dw < 17 || a0.vV.saveString(23, document.documentElement.outerHTML)
	}, this.eJ = function() {
		0 !== a0.id && (1 === a0.id ? a0.vV.prepareAd("1688441405") : 2 === a0.id && (0 === a0.dw ? a0.vc.postMessage("prepare ad 2904813909") : a0.vc.postMessage("loadAds 2904813909")))
	}, this.eP = function(dt) {
		return 0 !== a0.id && 1 !== a0.id && 2 === a0.id && 0 !== a0.dw && (a0.vc.postMessage("showAd"), !0)
	}, this.dn = function() {
		2 === a0.id && a0.dw < 23 && t.u(4, 1, new v("App Update Required", "A new iOS app version with bug fixes was published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + bK.a1E + "' target='_blank'>" + bK
			.a1E + "</a>", !0, [new w("⬅️ " + L(37), function() {
				t.u(0)
			}, bB.oQ)]))
	}
}

function dU() {
	function a1H(e) {
		lW(e), t.u(4, 5, new v("🚀 New Game Update", "The game was updated! Please reload the game." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new w("⬅️ " + L(37), function() {
				t.a1K()
			}), new w("🔄 Reload", function() {
				a0.a1.a2()
			}, bB.o8)]))
	}

	function a1S(e) {
		lW(e), t.u(4, 5, new v(L(38), a1O(e), !0))
	}

	function a1O(e) {
		var qK = " [" + e + "]";
		return 3249 === e || 1006 === e ? "No Internet / No Server Response" + qK : 4527 === e ? "Player already in lobby" + qK : 4530 === e ? "Lobby Timeout" + qK : 4528 === e ? "Lobby Kick: Another login detected." + qK : 4540 === e ?
			"You have been kicked." + qK : 4495 === e ? "Account doesn't exist." : 4229 === e ? "Bad Internet / Unresponsive Client" + qK : 4555 === e ? "Invalid Account Error. Please Try Again." + qK : 4557 <= e && e <= 4560 ?
			"Please try again later!" + qK : "Unknown error" + qK
	}

	function lW(e) {
		a1M(e), t.y.z()
	}

	function a1M(e) {
		var a1C = aa.a1L();
		6 === a1C ? b0.y.a1U(e) : bn.a1I ? (t.x(), bn.uF(), b0.y.close(b0.y.a1J, 3256)) : 8 === a1C && aD.a1V(!0)
	}
	this.p = [], this.a1F = function(a1G, e) {
		if (this.p.push(e), 8 === t.ss && 0 === a1G)
			if (4211 === e) a1H(e);
			else {
				if (bn.a1I && (4495 === e || 4480 === e) && b0.y.a1J !== a1G) return void t.a1K();
				if (8 !== aa.a1L() && a1M(), 4480 === e) return bj.s5.vr(), void t.u(4, 0, new v(L(40), L(41), !0));
				t.u(4, 0, new v(L(38), a1O(e), !0))
			}
		else {
			var a1C = aa.a1L();
			if (6 === a1C) {
				if (4211 === e) return void a1H(e);
				if (4215 !== e && 4516 !== e && 4527 !== e && 4533 !== e && 4528 !== e && !(4557 <= e && e <= 4560)) return void aZ.a1P(a1G)
			} else {
				if (!bn.a1I) return 8 === a1C ? void(a1G !== b0.y.a1Q || aD.kW || 1 !== aD.a0A || aD.gy || aN.a1R(L(39, [e]))) : void 0;
				if (a1G !== b0.y.a1J) return
			}
			a1S(e)
		}
	}, this.a1T = function(e) {
		this.p.push(e), 8 === aa.a1L() ? aD.kW || 1 !== aD.a0A || aN.a1R(L(39, [e])) : a1S(e)
	}, this.s = function() {
		this.p.push(3268), lW(3268)
	}
}

function d4() {
	var a1W, a1X, a1Y = -15e3,
		a1Z = !1;

	function h2(e) {
		a1t() || (a1Z = !0, a1u(e, 1), b0.y.a1v(b0.y.a1Q), a1w(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY)))
	}

	function a1i(e) {
		a1Y = bf.eO, a1u(e, 1), b0.y.a1v(b0.y.a1Q), 0 < e.touches.length && (a1W = Math.floor(h.k * e.touches[0].clientX), a1X = Math.floor(h.k * e.touches[0].clientY), au.a1i(e) || a1w(a1W, a1X))
	}

	function a1w(ew, ey) {
		t.h2(ew, ey), 0 === aD.a0A ? aa.h2(ew, ey) : bC.a1x(ew, ey) || be.h2(ew, ey) || aX.h2(ew, ey) || aL.a1y(ew, ey) || aP.h2(ew, ey) || 0 <= aM.h2(ew, ey) || aw.h2(ew, ey) || bJ.a1z(ew, ey) || aL.a20(ew, ey)
	}

	function a1e(e) {
		a1t() || (a1Z = !0, a1u(e, 1), a21(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY)))
	}

	function a1j(e) {
		a1Y = bf.eO, a1u(e, 1), 0 < e.touches.length && (a1W = Math.floor(h.k * e.touches[0].clientX), a1X = Math.floor(h.k * e.touches[0].clientY), au.a1j(e) || a21(a1W, a1X))
	}

	function a21(ew, ey) {
		t.a1e(ew, ey), 0 === aD.a0A ? aa.a1e(ew, ey) : (bT.gw(ew, ey), be.a1e(ew, ey) || (aM.a1e(ew, ey), aL.hb() ? aL.a1e(ew, ey) : aR.h3 ? aR.a1e(ew) && (bf.dl = !0) : (aV.a1e(ew, ey), aS.nG && aS.a1e(ew, ey) && (bf.dl = !0))))
	}

	function a1g(e) {
		a1t() || (a1u(e, 1), a22(), 0 === aD.a0A ? (aa.click(-1024, -1024), aT.re()) : (aV.a23(-1024, -1024), aM.a1e(-1024, -1024), aR.a24(), aS.nG = !1))
	}

	function a1f(e) {
		a1t() || (a1u(e, 1), a25(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY), 2 === e.button), bJ.a1c && (bJ.a1c = !1, e.preventDefault()))
	}

	function click(e) {
		a1t() || a1u(e, 1)
	}

	function a1k(e) {
		a1Y = bf.eO, a1u(e, 1), e && e.touches && 0 < e.touches.length && 0 !== aD.a0A ? aS.nG = !1 : au.a26() || (a25(a1W, a1X, !1), bJ.a1c && (bJ.a1c = !1, e.preventDefault()))
	}

	function a1l(e) {
		a1Y = bf.eO, a1u(e, 1), a25(a1W, a1X, !1), bJ.a1c && (bJ.a1c = !1, e.preventDefault())
	}

	function a1m(e) {}

	function a1n(e) {}

	function a1o(e) {
		a1t() || a1u(e, 0)
	}

	function a25(ew, ey, a27) {
		a22(), 0 === aD.a0A ? aa.click(ew, ey) : (aV.a23(ew, ey), be.a23(), aR.a24(), aS.nG = !1, aL.click(ew, ey, a27) ? bf.dl = !0 : aM.a1f(ew, ey))
	}

	function a22() {
		t.a22()
	}

	function a1h(e) {
		var ew, ey, deltaY;
		a1t() || (a1u(e, 1), b0.y.a1v(b0.y.a1Q), ew = Math.floor(h.k * e.clientX), ey = Math.floor(h.k * e.clientY), deltaY = e.deltaY, 1 === e.deltaMode && (deltaY *= 16), t.a1h(ew, ey, deltaY), 0 === aD.a0A ? aa.a1h(ew, ey, deltaY) : aV.a1h(ew, ey,
			deltaY) || (aR.a28(ew, ey) ? aR.a1h(deltaY) && (bf.dl = !0) : aS.a1h(ew, ey, deltaY)))
	}

	function a1p(e) {
		a1u(e, 0)
	}

	function a1u(e, id) {
		0 === id && t.hb() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== aa.a1L() && e.preventDefault()
	}

	function a1q(e) {
		if (__fx.keybindHandler(e.key)) return;
		a1t() || 0 < h.sa || (e = e.code) && e.length && (bX.fA(e, 18) ? ar.a2A(3) : bX.fA(e, 22) ? ar.a2A(0) : bX.fA(e, 20) ? ar.a2A(1) : bX.fA(e, 24) ? ar.a2A(2) : bX.fA(e, 10) ? aR.a2B(31 / 32) : bX.fA(e, 8) ? aR.a2B(32 / 31) : bX.fA(e, 6) ? aR
			.a2B(7 / 8) : bX.fA(e, 4) ? aR.a2B(8 / 7) : bX.fA(e, 14) ? 0 !== aD.a0A && aS.a1h(Math.floor(h.i / 2), Math.floor(h.j / 2), -200) : bX.fA(e, 16) ? 0 !== aD.a0A && aS.a1h(Math.floor(h.i / 2), Math.floor(h.j / 2), 200) : bX.fA(e, 0) ?
			aD.a0A && bT.gx(0) : bX.fA(e, 2) ? aD.a0A && bT.gx(1) : bX.fA(e, 30) ? aD.a0A && bT.gx(2) : bX.fA(e, 26) ? aD.a0A && bT.hV() : bX.fA(e, 28) && aD.a0A && bT.ha())
	}

	function a1r(e) {
		if (!a1t() && !(0 < h.sa || bf.eO < 400)) {
			var code = e.code;
			if (code && code.length && !("Enter" === code && t.a2C(1) || "Space" === code && t.a2C(0))) return bn.a1I ? bn.uL.a2C(code) ? void 0 : void("Escape" === code && bJ.fI()) : void(8 !== aa.a1L() && aa.a2C(e) ? bf.dl = !0 : "Escape" ===
				code ? bJ.fI() : bX.fA(code, 18) ? ar.a2D(3) : bX.fA(code, 22) ? ar.a2D(0) : bX.fA(code, 20) ? ar.a2D(1) : bX.fA(code, 24) ? ar.a2D(2) : bX.fA(code, 12) ? bC.a2E(!aD.nE) : "Space" === code && aD.a0A && (aM.gz && aM.a2F(), aD
					.gy) && bC.a2G(!1))
		}
	}

	function a1s() {
		"hidden" !== document.visibilityState && (bf.dl = !0)
	}

	function a1t() {
		return a1Y + 15e3 > bf.eO
	}

	function resize() {
		h.a2I()
	}
	this.a1a = 0, this.a1b = "", this.a1c = !1, this.dd = function() {
		a1d.addEventListener("mousedown", h2, {
			passive: !1
		}), a1d.addEventListener("mousemove", a1e, {
			passive: !1
		}), a1d.addEventListener("mouseup", a1f, {
			passive: !1
		}), a1d.addEventListener("click", click, {
			passive: !1
		}), a1d.addEventListener("mouseleave", a1g, {
			passive: !1
		}), a1d.addEventListener("wheel", a1h, {
			passive: !1
		}), a1d.addEventListener("touchstart", a1i, {
			passive: !1
		}), a1d.addEventListener("touchmove", a1j, {
			passive: !1
		}), a1d.addEventListener("touchend", a1k, {
			passive: !1
		}), a1d.addEventListener("touchcancel", a1l, {
			passive: !1
		}), a1d.addEventListener("dragover", a1m), a1d.addEventListener("drop", a1n), a1d.addEventListener("dblclick", a1o), document.addEventListener("contextmenu", a1p), document.addEventListener("keydown", a1q), document.addEventListener(
			"keyup", a1r), document.addEventListener("visibilitychange", a1s), window.addEventListener("resize", resize)
	}, this.a1z = function(ew, ey) {
		return !!bC.h2(ew, ey) || !!(aV.h2(ew, ey) || aS.h2(ew, ey) || aR.h2(ew, ey) || aN.h2(ew, ey))
	}, this.a2H = a1t, this.r5 = function() {
		return !a1Z || 0 < a1Y
	}, this.fI = function() {
		if (!t.hb()) return 8 === aa.a1L() ? aD.nE ? void bC.a2E(!1) : be.hb ? void be.a2F() : void aM.a2F() : void(7 !== aa.a1L() && 6 === aa.a1L() && aZ.a2J());
		t.a2C(2)
	}
}

function bz() {
	this.qd = new a2K, this.ql = new a2L, this.gB = new a2M, this.rc = new a2N, this.yK = new a2O, this.a2P = new a2Q, this.canvas = new a2R, this.color = new a2S, this.a2T = new a2U, this.dd = function() {
		this.qd.vo()
	}
}

function a2L() {
	this.wj = function(g) {
		g.fill(0)
	}, this.a2V = function(g) {
		for (var ep = g.length, aB = 0; aB < ep; aB++) g[aB] = []
	}, this.a2W = function(zG, a2X) {
		for (var zH = bO.fP, aB = 0; aB < 3; aB++) zH[aB] = a2X * zG[aB];
		return zH
	}, this.a2Y = function(zG, zH, a2Z) {
		for (var jR = 0, aB = 0; aB < 3; aB++) jR += Math.abs(zG[aB] - zH[aB]);
		return a2Z <= jR
	}, this.a2a = function(zG, a2b) {
		for (var aB = 0; aB < 3; aB++) zG[aB] = bL.hx(zG[aB] + a2b, 0, 255);
		return zG
	}, this.a2c = function(g, tC, tD) {
		tD = tD || g.length - 1;
		for (var a2d = 0, aB = tC = tC || 0; aB <= tD; aB++) a2d += g[aB];
		return a2d
	}, this.a2e = function(g, a2f) {
		for (var aB, a2g, ep = g.length, a2h = [], f8 = ep - 1; 0 <= f8; f8--) {
			for (aB = a2g = 0; aB < ep; aB++) a2f(g[aB]) < a2f(g[a2g]) && (a2g = aB);
			ep--, a2h.push(g[a2g]), g[a2g] = g[ep], g.pop()
		}
		return a2h
	}, this.min = function(g) {
		var aB, fH, ep = g.length;
		if (0 === ep) return 0;
		for (fH = g[0], aB = 1; aB < ep; aB++) fH = Math.min(fH, g[aB]);
		return fH
	}, this.max = function(g) {
		var ep = g.length;
		if (0 === ep) return 0;
		for (var fH = g[0], aB = 1; aB < ep; aB++) fH = Math.max(fH, g[aB]);
		return fH
	}, this.a2i = function(g, fH) {
		for (var ep = g.length, gI = 0, aB = 0; aB < ep; aB++) gI += g[aB] > fH;
		return gI
	}, this.a2j = function(a2k, a2l, min) {
		for (var ep = a2l[0], aB = ep - 1; 0 <= aB; aB--) a2k[aB] < min && (a2k[aB] = a2k[--ep]);
		a2l[0] = ep
	}, this.a2m = function(g, ep, value) {
		for (var aB = 0; aB < ep; aB++) g[aB] -= value
	}, this.a2n = function(g) {
		for (var ep = g.length, aB = 0; aB < ep; aB++)
			if ("string" != typeof g[aB]) return !1;
		return !0
	}, this.a2o = function(qK, g, a2p) {
		g.fill(0);
		for (var tG = qK.split(","), ep = Math.min(tG.length, g.length), aB = 0; aB < ep; aB++) g[aB] = Math.min(parseInt(tG[aB]), a2p)
	}, this.a2q = function(qK, g, rZ) {
		g.fill("");
		for (var tG = qK.split('"'), ep = Math.min(tG.length, 2 * g.length), hh = 0, aB = 1; aB < ep; aB += 2) g[hh++] = tG[aB].slice(0, rZ)
	}, this.a2r = function(g, gI) {
		if (0 === gI) g.fill(0);
		else {
			var a2d = this.a2c(g),
				ep = g.length;
			if (0 === a2d) g.fill(bL.du(gI, ep));
			else
				for (var aB = 0; aB < ep; aB++) g[aB] = bL.du(gI * g[aB], a2d);
			if (0 === (a2d = this.a2c(g))) g[1] = gI;
			else
				for (var hh = 0; a2d++ < gI;) g[hh = (hh + 1) % ep] && g[hh]++
		}
	}, this.a2s = function(g) {
		if (!g) return 0;
		var ep = g.length;
		if (0 === ep) return 0;
		for (var fH = g[ep - 1], aB = ep - 2; 0 <= aB; aB--)
			if (g[aB] !== fH) return aB + 2;
		return 1
	}, this.a2t = function(g) {
		for (var a2d = 0, aB = 0; aB < g.length; aB++) a2d += g[aB].length;
		return a2d
	}, this.a2u = function(a2v) {
		for (var g = [], aB = 0; aB < a2v.length; aB++) g = g.concat(a2v[aB]);
		return g
	}, this.has = function(g, fH) {
		for (var ep = g.length, aB = 0; aB < ep; aB++)
			if (g[aB] === fH) return !0;
		return !1
	}
}

function a2R() {
	this.yu = function(a2w, e9, a2x) {
		var hl = a2w.height,
			a2y = bA.qd.wZ(hl, hl),
			hr = bA.qd.getContext(a2y);
		return function(i, hr, a2x) {
			hr.fillStyle = a2x, hr.beginPath(), hr.arc(i / 2, i / 2, .47 * i, 0, 2 * Math.PI), hr.fill()
		}(hl, hr, a2x), hr.drawImage(a2w, -e9 * hl, 0), a2y
	}, this.a30 = function(a31) {
		var hr, ho, hl = a31.height;
		return a31.width === hl && (ho = (hr = bA.qd.getContext(a31, !0)).getImageData(0, 0, hl, hl), bA.a2P.a32(ho.data, hl, hl, .9), hr.putImageData(ho, 0, 0)), a31
	}
}

function a2S() {
	this.a33 = function(fH) {
		return [fH >> 12 & 63, fH >> 6 & 63, 63 & fH]
	}, this.a34 = function(fH) {
		for (var g = this.a33(fH), aB = 0; aB < 3; aB++) g[aB] = ~~(4.05 * g[aB]);
		return g
	}, this.a35 = function(fH) {
		fH = this.a34(fH);
		return bA.color.nd(fH[0], fH[1], fH[2])
	}, this.a36 = function(g) {
		for (var aB = 0; aB < 3; aB++) g[aB] = ~~(g[aB] / 4.04);
		return (g[0] << 12) + (g[1] << 6) + g[2]
	}, this.nd = function(e8, tG, f9) {
		return "rgb(" + e8 + "," + tG + "," + f9 + ")"
	}, this.nf = function(e8, tG, f9, f8) {
		return "rgba(" + e8 + "," + tG + "," + f9 + "," + f8.toFixed(3) + ")"
	}, this.r7 = function(fA) {
		for (var g = fA.split("(")[1].split(","), fO = bO.fO, aB = 0; aB < 3; aB++) fO[aB] = parseInt(g[aB]);
		return 4 === g.length ? fO[3] = 255 * parseFloat(g[3].slice(0, -1)) : fO[3] = 255, fO
	}, this.r8 = function(a37, es) {
		for (var g = a37.slice(a37.indexOf("(") + 1, a37.indexOf(")")).split(","), fO = bO.fO, aB = 0; aB < 3; aB++) fO[aB] = bL.hx(parseInt(g[aB].trim(), 10) + es, 0, 255);
		return 3 === g.length ? this.nd(fO[0], fO[1], fO[2]) : (a37 = parseFloat(g[3].trim()), this.nf(fO[0], fO[1], fO[2], a37 = 0 === a37 ? .3 : a37))
	}, this.a38 = function(g) {
		for (var qK = "#", aB = 0; aB < 3; aB++) {
			var e8 = g[aB].toString(16);
			qK += 1 === e8.length ? "0" + e8 : e8
		}
		return qK
	}, this.a39 = function(qK) {
		var e8, tG;
		return qK.length < 7 ? bB.nc : (e8 = parseInt(qK.slice(1, 3), 16), tG = parseInt(qK.slice(3, 5), 16), qK = parseInt(qK.slice(5, 7), 16), this.nd(e8, tG, qK))
	}
}

function a2O() {
	this.a3A = function(qK, font, maxWidth) {
		if (font && (um.font = font), um.measureText(qK).width <= maxWidth) return qK;
		for (var aB = qK.length - 1; 1 <= aB; aB--)
			if (qK = qK.substring(0, aB), um.measureText(qK + "...").width <= maxWidth) return qK + "...";
		return "..."
	}
}

function a2U() {
	var a3C = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.a3D = function(eO) {
		var a3F, qK = new Date(eO.getTime() - 6e4 * eO.getTimezoneOffset()).toUTCString();
		return qK.length < 12 || (qK = qK.substring(5, qK.length), 0 === (eO = eO.getTimezoneOffset())) ? qK : (a3F = (eO < 0 ? "+" : "-") + bL.du(Math.abs(eO), 60), 0 == (eO = Math.abs(eO) % 60) ? qK + a3F : qK + a3F + ":" + (eO < 10 ? "0" :
			"") + eO)
	}, this.a3G = function(eO) {
		var qK = eO.toUTCString();
		return qK.length < 12 ? qK : function(eO) {
			return a3C[eO.getUTCDay()]
		}(eO) + ", " + qK.substring(5, qK.length - 4)
	}
}

function a2K() {
	var a3I = null;
	this.zB = 0, this.vo = function() {
		var fH = bj.eL.data[5].value;
		a3I = "px " + fH, "Trebuchet MS" !== fH && (a3I += ", Trebuchet MS"), this.zB = hk(32, 32, ["a", "b", "m"], 200, a3I)
	}, this.wZ = function(i, j) {
		var fA = document.createElement("canvas");
		return fA.width = i, fA.height = j, fA
	}, this.getContext = function(canvas, alpha) {
		return canvas.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(yK, i, j) {
		return yK.getImageData(0, 0, i, j)
	}, this.sS = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + a3I : 1 === type ? "bold " + size + a3I : 2 === type ? "lighter " + size + a3I : 3 === type ? "italic " + size + a3I : 4 === type ? "oblique " + size + a3I : 5 === type ? "small-caps " +
			size + a3I : "small-caps bold " + size + a3I
	}, this.textAlign = function(hr, id) {
		hr.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(hr, id) {
		hr.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.qn = function(e, code, color) {
		color = this.qm(bc.sU) + " solid " + (color || bB.nl);
		5 === (code = code || 5) ? e.style.border = color : 4 === code ? e.style.borderLeft = color : 2 === code ? e.style.borderBottom = color : 6 === code ? e.style.borderRight = color : e.style.borderTop = color
	}, this.tI = function(e, ew, ey, i, j) {
		e = e.style;
		e.left = this.tJ(ew), e.top = this.tJ(ey), e.width = this.tJ(i), e.height = this.tJ(j)
	}, this.qe = function(fH) {
		return 1 + fH * a0.a1.hy()
	}, this.rw = function(nN, gO) {
		return nN * this.qe(void 0 === gO ? .5 : gO) * h.hz / h.k
	}, this.tH = function(nN, gO) {
		return nN * this.qe(void 0 === gO ? .5 : gO) * h.hz
	}, this.sy = function(nN, gO, a3J) {
		return this.qe(gO) * Math.min(nN * h.hz, a3J * h.i) / h.k
	}, this.qm = function(fH) {
		return fH.toFixed(1) + "px"
	}, this.tJ = function(fH) {
		return this.a3L(fH).toFixed(1) + "px"
	}, this.a3L = function(fH) {
		return fH / h.k
	}, this.a3M = function(si, a3N) {
		for (var qK = "<ul>", ep = si.length, aB = 0; aB < ep; aB++) qK += "<li>" + si[aB] + ": <a href='" + a3N[aB] + "' target='_blank'>" + a3N[aB] + "</a></li>";
		return qK += "</ul>"
	}, this.a3O = function(a3P) {
		return "<a href='" + a3P + "' target='_blank'>" + a3P + "</a>"
	}, this.a3Q = function(e) {
		navigator.clipboard && navigator.clipboard.writeText(e.value)
	}, this.a3R = function(e) {
		var dt = e.textContent;
		bA.rc.a3S(dt, "✔") || (1 === dt.length ? e.textContent = "✔" : e.textContent = dt + " ✔", setTimeout(function() {
			e.textContent = dt
		}, 500))
	}, this.measureText = function(qK) {
		return um.measureText(qK).width
	}, this.t8 = function(a3T) {
		a3T.style.overflowX = "auto", a3T.style.overflowY = "hidden", a3T.style.whiteSpace = "nowrap", a3T.addEventListener("wheel", function(e) {
			Math.abs(e.deltaY) < Math.abs(e.deltaX) || (this.scrollLeft += e.deltaY, this.tL = this.scrollLeft, e.preventDefault())
		}), a3T.addEventListener("scroll", function() {
			this.tL = this.scrollLeft
		})
	}
}

function a2M() {
	this.h0 = function(a1C) {
		return 0 === a1C ? 1 === aD.a0A && aD.hD : 1 === a1C ? 1 === aD.a0A && !aD.hD : 2 === aD.a0A
	}, this.h1 = function(player) {
		return 0 !== ag.ml[player] && 2 !== ag.a3U[player]
	}, this.a3V = function(player) {
		return player === aD.eZ && 2 !== ag.a3U[player]
	}, this.kq = function(player, jL) {
		return player !== jL && (0 === bg.en[player] || bg.en[player] !== bg.en[jL])
	}, this.lx = function() {
		return al.ki < 2 ? 0 : aD.hj ? 1 < bh.a3W() : ag.gd[ln[1]]
	}, this.a3X = function() {
		var ki = al.ki;
		if (0 !== ki) {
			if (!aD.hj) return !this.jZ(ln[0]);
			for (var en = bg.en, kk = bh.kl(), kn = al.kn, aB = ki - 1; 0 <= aB; aB--) {
				var gN = kn[aB];
				if (en[gN] === kk && !this.jZ(gN)) return 1
			}
		}
		return 0
	}, this.a3Y = function(player) {
		return player === aD.eZ
	}, this.a3Z = function(jL, nN) {
		return ag.gr[aD.eZ] < nN * ag.gr[jL]
	}, this.jZ = function(player) {
		return player >= aD.kC || 2 === ag.a3U[player]
	}, this.lA = function(player) {
		return 0 !== ag.ml[player]
	}, this.a00 = function(player) {
		return player < aD.kC
	}, this.q0 = function(a3a, a3b) {
		return a3a !== a3b
	}, this.gE = function(player, fH) {
		var min;
		return fH = this.a3c(player, fH), ag.gr[player] += fH, ag.a3d[player] && (min = Math.min(ag.a3d[player], ag.gr[player]), ag.a3d[player] -= min, ag.gr[player] -= min), fH
	}, this.a3c = function(player, fH) {
		var a3e = ag.gr[player];
		return fH = Math.min(fH, ag.gd[player] * aD.a3f - a3e), fH = Math.min(fH, aD.a3g - a3e), Math.max(fH, 0)
	}, this.mK = function(player, iP, a3h, a3i) {
		var a3e = ag.gr[player],
			iP = bL.du(a3e * (iP + 1), 1024),
			a3h = bL.du(a3h * a3e, 1024),
			iP = Math.min(iP, a3e - a3h);
		return 10 === aD.kU && (iP = b4.a3k(player, iP)), bO.fM[0] = iP, bO.fM[1] = a3h, a3i <= iP
	}, this.pU = function(player, pC, pB) {
		var player = ag.gr[player],
			a3j = bL.du(64 * player, 1024);
		return pC = Math.min(pC, player - a3j), pC = this.a3c(pB, pC), bO.fM[0] = pC, bO.fM[1] = a3j, 1 <= pC
	}, this.a3l = function(player, pC, pB) {
		var player = ag.gr[player],
			a3j = bL.du(64 * player, 1024);
		return pC = Math.min(pC, player - a3j), this.a3c(pB, pC)
	}, this.pW = function(pC, pB) {
		return pC = this.a3c(pB, pC), bO.fM[0] = pC, bO.fM[1] = 0, 1 <= pC
	}, this.iO = function(player, a3m) {
		return bL.du(ag.gr[player] * (a3m + 1), 1024)
	}, this.a3n = function(player, a3h) {
		a3h = bL.du(a3h * ag.gr[player], 1024);
		bO.fM[1] = a3h, ag.gr[player] -= a3h
	}, this.gC = function(player, a3o) {
		var fa, fc, f9 = ag.gr[player];
		return a3o <= f9 ? ag.gr[player] -= a3o : (ag.gr[player] = 0, fc = ag.a3d[player] + (fa = 5 * ((f9 = a3o - f9) >> 2)), bd.gF(player, fa - f9, 12), fc <= aD.a3p ? ag.a3d[player] = fc : (ag.a3d[player] = aD.a3p, bd.gF(player, fc - aD.a3p,
			18))), a3o
	}, this.lO = function(player, iP) {
		var gr = ag.gr,
			a3e = gr[player],
			iP = bL.du(a3e * (iP + 1), 1024),
			a3j = Math.max(bL.du(a3e, 10), 1e3);
		return (iP = Math.min(iP, a3e - a3j)) < 0 ? (gr[player] = 0, a3j = Math.min(1e3, a3e + aD.a3p - ag.a3d[player]), bO.fM[1] = a3j, ag.a3d[player] += a3j - a3e, 0) : (bO.fM[1] = a3j, 10 === aD.kU && (iP = b4.a3k(player, iP)), gr[player] -=
			a3j + iP, iP)
	}, this.mM = function(player) {
		ag.gr[player] -= bO.fM[0] + bO.fM[1]
	}, this.q1 = function(player, jL) {
		return (jL = Math.min(jL, aD.em)) < aD.em && 0 === ag.ml[jL] && (jL = aD.em), (bO.el[0] = jL) === aD.em || bs.ei(player, jL)
	}, this.q4 = function(player, pB) {
		return 0 !== ag.ml[pB] && !bs.ei(player, pB)
	}, this.a3q = function(player, a3r) {
		for (var gN, ep = al.ki, a3s = 0, a3t = ln, aB = 0; aB < ep; aB++)
			if (gN = a3t[aB], !this.jZ(gN)) {
				if (player === gN) return !0;
				if (++a3s > a3r) return !1
			} return !1
	}, this.lj = function(gN) {
		var a3u = aD.hj ? bh.kj() : ag.gd[ln[0]];
		return a3u >= bL.du(gN * aD.jw, 100)
	}, this.a3v = function(fH, min, max) {
		return Math.floor(bL.hx(isNaN(fH) ? 0 : Number(fH), min, max))
	}
}

function a2Q() {
	this.a3w = function(canvas, a3x, a3y) {
		var i = canvas.width,
			j = canvas.height,
			fA = bA.qd.wZ(i, j),
			hr = bA.qd.getContext(fA, !0),
			canvas = (hr.drawImage(canvas, 0, 0), hr.getImageData(0, 0, i, j));
		return a3x(canvas.data, i, j, a3y), hr.putImageData(canvas, 0, 0), fA
	}, this.a3z = function(wk, i, j) {
		for (var ew = i - 1; 0 <= ew; ew--)
			for (var ey = j - 1; 0 <= ey; ey--) {
				var aB = 4 * (ew + ey * i);
				wk[3 + aB] = wk[aB], wk[aB] = wk[1 + aB] = wk[2 + aB] = 255
			}
	}, this.a40 = function(wk, i, j) {
		for (var ew = i - 1; 0 <= ew; ew--)
			for (var ey = j - 1; 0 <= ey; ey--) {
				var aB = 4 * (ew + ey * i);
				wk[1 + aB] > wk[2 + aB] + 10 && (wk[3 + aB] = wk[aB], wk[1 + aB] = wk[2 + aB])
			}
	}, this.a41 = function(wk, i, j, a3y) {
		for (var gap = Math.floor(Math.min(i, j) * a3y), ew = 0; ew < i; ew++)
			for (var aB, ey = 0; ey < j; ey++)(ew < gap || ey < gap || i - gap <= ew || j - gap <= ey) && (wk[3 + (aB = 4 * (ew + ey * i))] = 255 - 255 * (wk[1 + aB] - wk[aB]) / (255 - wk[aB]))
	}, this.a42 = function(wk, i, j, a3y) {
		for (var ew = i - 1; 0 <= ew; ew--)
			for (var ey = j - 1; 0 <= ey; ey--) {
				var aB = 4 * (ew + ey * i);
				wk[aB] = a3y[0], wk[1 + aB] = a3y[1], wk[2 + aB] = a3y[2]
			}
	}, this.a43 = function(wk, i, j, a3y) {
		for (var gap = Math.floor(i * a3y), ew = 0; ew < i; ew++)
			for (var aB, ey = 0; ey < j; ey++)(ew < gap || ey < gap || i - gap <= ew || j - gap <= ey) && (wk[aB = 4 * (ew + ey * i)] = wk[1 + aB] = wk[2 + aB] = 0)
	}, this.a44 = function(wk, i, j) {
		for (var ey, aB, ew = i - 1; 0 <= ew; ew--)
			for (ey = j - 1; 0 <= ey; ey--) 200 < wk[1 + (aB = 4 * (ew + ey * i))] && wk[1 + aB] - 20 > wk[aB] && wk[1 + aB] - 20 > wk[2 + aB] ? wk[aB] + wk[2 + aB] < 40 ? wk[3 + aB] = 0 : (wk[3 + aB] = wk[aB], wk[aB] = 255, wk[1 + aB] = 255, wk[
				2 + aB] = 255) : wk[aB] < 50 && wk[1 + aB] < 50 && wk[2 + aB] < 50 && (wk[aB] + wk[1 + aB] + wk[2 + aB] < 50 ? wk[3 + aB] = 180 : wk[3 + aB] = 180 + Math.floor(75 * (wk[aB] + wk[1 + aB] + wk[2 + aB] - 50) / 100))
	}, this.a45 = function(wk, i, j) {
		for (var ey, aB, ew = i - 1; 0 <= ew; ew--)
			for (ey = j - 1; 0 <= ey; ey--) wk[1 + (aB = 4 * (ew + ey * i))] > wk[aB] + 20 && wk[1 + aB] > wk[2 + aB] + 20 && wk[aB] + wk[2] < 40 && (wk[3 + aB] = 255 - wk[1 + aB], wk[aB] = wk[1 + aB] = wk[2 + aB] = wk[aB])
	}, this.a32 = function(wk, i, j, a3y) {
		for (var e8 = i >> 1, ew = 0; ew < i; ew++)
			for (var ey = 0; ey < j; ey++) Math.sqrt((ew - e8) * (ew - e8) + (ey - e8) * (ey - e8)) > a3y * e8 && (wk[4 * (ew + ey * i) + 3] = 0)
	}
}

function a2N() {
	var a46 = {
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
		a47 = new RegExp(":[a-zA-Z0-9_]+:", "g");
	this.rd = function(v2) {
		return v2.replace(a47, function(match) {
			return a46[match] || match
		})
	}, this.zR = function(fH) {
		var aB, a48, a49, a4A, a4B;
		if (fH < 0) return "-" + this.zR(Math.abs(fH));
		if (fH < 1e3) return fH.toString();
		for (a48 = Math.floor(Math.log(fH + .5) / Math.log(10)) + 1, a49 = Math.floor((a48 - 1) / 3), a4B = (a4A = fH.toString()).substring(a48 - 3, a48), aB = 1; aB < a49; aB++) a4B = a4A.substring(a48 - 3 * (aB + 1), a48 - 3 * aB) + " " + a4B;
		return a4A.substring(0, a48 - 3 * a49) + " " + a4B
	}, this.a4C = function(gN, a48) {
		return gN.toFixed(a48) + "%"
	}, this.a4D = function(fH, a4E) {
		return fH.toFixed(bL.hx(Math.floor((void 0 === a4E ? 3 : a4E) - Math.log10(Math.max(fH, 1))), 0, 8))
	}, this.a4F = function(fH, nN, a48) {
		return (fH * nN).toFixed(a48)
	}, this.a0r = function(username) {
		var et, ee = username.indexOf("[");
		return !(ee < 0) && 1 < (et = username.indexOf("]")) - ee && et - ee <= 8 ? username.substring(ee + 1, et).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.a0r;
	this.a4G = function(qK) {
		for (var f8 = Math.floor(.5 * qK.length + .5), nT = Math.floor(.5 * (f8 - 1)), aB = 0; aB < nT; aB++)
			for (var f9 = -1; f9 < 2; f9 += 2) {
				var fA = f8 + f9 * aB;
				if (" " === qK[fA]) return [this.a0n(qK.substring(0, fA)), this.a4H(qK.substring(fA))]
			}
		return [qK.substring(0, f8), qK.substring(f8)]
	}, this.a4H = function(qK) {
		for (var ep = qK.length, aB = 0; aB < ep; aB++)
			if (" " !== qK[aB]) return qK.substring(aB);
		return qK
	}, this.a0n = function(qK) {
		for (var aB = qK.length - 1; 0 <= aB; aB--)
			if (" " !== qK[aB]) return qK.substring(0, aB + 1);
		return qK
	}, this.a4I = function(qK, a4J) {
		return qK.split("(")[0] + "(🧈 " + a4J.toFixed(2) + ")"
	}, this.startsWith = function(qK, a4K) {
		return qK.substring(0, a4K.length) === a4K
	}, this.a3S = function(qK, a4K) {
		var ep = qK.length;
		return qK.substring(ep - a4K.length, ep) === a4K
	}, this.a4L = function(g, a4M, a4N) {
		var qK = "",
			ep = g.length - 1;
		a4N = a4N || "";
		for (var aB = 0; aB < ep; aB++) qK += a4N + g[aB] + a4N + ",", (aB + 1) % a4M == 0 && (qK += "\n");
		return qK += a4N + g[ep] + a4N
	}, this.a4O = function(qK, zG, zH) {
		return qK.replace(new RegExp(zG, "g"), zH)
	}
}

function a4P() {
	this.jI = function(player, eb) {
		aI.y4(player, bM.ex(eb), bM.ez(eb)) && (bf.dl = !0), aD.kW && this.j5()
	}, this.j5 = function() {
		aD.hD = !1;
		for (var aB = 0; aB < aD.kC; aB++) 0 !== ag.ml[aB] && 0 === ag.gd[aB] && aI.yB(aB);
		0 !== ag.ml[aD.eZ] ? (bd.mh[7] = ag.gd[aD.eZ], bd.mh[8] = ag.gr[aD.eZ], aR.a4Q(), aW.a4R(), aD.gy || aH.n5(ag.ih[aD.eZ] - 5, ag.ij[aD.eZ] - 5, ag.ii[aD.eZ] + 5, ag.ik[aD.eZ] + 5), av.dd()) : aX.show(!1, !1, !1, !0), aN.a4S(18), af.a4T(),
			af.mX(!0), bP.y.a4U(), aL.ru(), aD.pz = null, bb.a4V = !0, bb.a4W(), aD.kW && a0.a1.setState(1)
	}
}

function c1() {
	this.em = 512, this.a3g = 15e8, this.a4X = 1e9, this.a3p = 5e4, this.a4Y = 512, this.g9 = 2, this.eZ = 0, this.kC = 0, this.a0D = 0, this.kY = 0, this.a0C = 0, this.xF = 512, this.xK = 512, this.a3f = 150, this.kW = !0, this.gy = 0, this.a0A = 0,
		this.jw = 0, this.nE = !1, this.hD = 0, this.a4Z = 0, this.hj = !1, this.xM = 0, this.xN = 0, this.kU = 0, this.yb = 0, this.pz = null, this.a0S = new yQ, this.a4a = 30, this.a07 = 0, this.a0F = 0, this.a0R = 0, this.a02 = 0, this.data =
		new a4b, this.a4c = new a4d, this.a4e = 0, this.a4f = "", this.a4g = function() {
			bO.dd(), bR.dd(), bq.clear(), this.a0D = this.kC = this.data.humanCount, this.kW = 1 === this.a0D, this.nE = !1, this.gy = this.data.isReplay, this.kU = 0 === this.data.gameMode ? [7, 10, 8][this.data.battleRoyaleMode] : this.data
				.isZombieMode ? 9 : this.data.numberTeams - 2, this.yb = this.data.isContest, this.hj = this.kU < 7 || 9 === this.kU, this.kU = 10 === this.kU && this.kW ? 7 : this.kU, this.kU = 8 === this.kU && 2 !== this.kC ? 7 : this.kU, az.dd(),
				this.xM = this.data.numberTeams, this.data.teamPlayerCount ? this.xN = +(0 < this.data.teamPlayerCount[0]) : (this.xN = 0, this.hj && this.kW && (this.data.teamPlayerCount = new Uint16Array(9), this.data.teamPlayerCount.fill(1, 1,
					this.xM + 1), aD.a4c.a4h())), this.a4a = this.kC <= 2 ? 30 : this.kC <= 50 ? 40 : 50, this.a4Z = this.hD = this.data.selectableSpawn, this.pz = this.hD ? new a4P : null, 1 === l.ds ? this.xF = this.kC : this.xF = this.data
				.playerCount, this.xK = this.xF, this.kY = this.xF - this.kC, this.a0C = 0, this.eZ = this.data.selectedPlayer, this.a07 = 0, this.a0F = 0, this.a0R = 0, this.a02 = 0, ay.a4i(this.data.spawningSeed), ae.dd(), ag.dd(), an.dd(), ai
				.a4j(), b8.p4.pn = [], bg.dd(), this.a0A = 1,
				__fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), bd.dd(), a4k(), ac.de(), ap.a4l(), bb.dd(), ac.dd(), at.dd(), bM.dd(), bN.dd(), ao.dd(), bV.a4m(), aE.dd(),
				ai.a7(), aI.dd(), aJ.dd(), al.a4n(), b9.dd(), bh.dd(), bP.dd(), be.dd(), a4o.putImageData(a4p, 0, 0), aV.dd(), aS.dd(), aR.dd(), bC.dd(), aw.dd(), aU.dd(), aW.dd(), aM.dd(), aQ.dd(), aN.dd(), aP.dd(), aL.dd(), aX.dd(), aF.dd(), aG
				.dd(), fs(), ad.dd(), af.dd(), b4.dd(), b5.dd(), b1.dd(), this.a0S.dd(), bf.a4m(), aH.n4(), 0 === ag.ml[aD.eZ] && aX.show(!1, !0), af.mX(!0), av.dd(), bf.dl = !0, this.gy || this.kW && this.hD || a0.a1.setState(1), this.a4e = 0
		}, this.a1V = function(eN) {
			b9.px.a4r.length ? this.a4f = b9.px.a4r : this.a4f = b9.a4s.zc(), b0.y.a4t(), bq.clear(), this.a0A = 0, bf.a4u(), a0.a1.setState(0), aa.setState(0), bU.eH.show(eN), 2 === this.a4e ? t.y.a4v() : 1 === this.a4e ? t.u(19) : t.u(5, 5)
		}, this.a4w = function() {
			return this.gy ? aM.gz || !bC.a4x : this.kW && (aM.gz || this.hD)
		}, this.a4y = function() {
			return 1 === this.a0A && !this.hD
		}
}

function a4b() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.elo = null, this.colorsType = 0, this.colorsPersonalized = 1,
		this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData = null, this.spawningType = 0,
		this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this.aIncomeData = null, this
		.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null
}

function a4d() {
	this.a4h = function() {
		var a4z = aD.data;
		bA.ql.a2r(a4z.teamPlayerCount, a4z.playerCount), a4z.numberTeams = bA.ql.a2i(a4z.teamPlayerCount, 0), a4z.teamPlayerCount[0] && a4z.teamPlayerCount[7] && (a4z.teamPlayerCount[7] = 0, this.a4h())
	}, this.a50 = function() {
		var a4z = aD.data;
		a4z.mapType < 2 ? bS.a7(bS.a51(a4z), a4z.mapSeed) : bS.a52(a4z.canvas)
	}, this.a53 = function() {
		var a4z = aD.data;
		a4z.colorsData || (a4z.colorsData = new Uint32Array(1)), a4z.selectableColor && (a4z.colorsData[0] = bj.y.vn()), a4z.selectableName && (a4z.playerNamesData || (a4z.playerNamesData = new Array(1)), a4z.playerNamesData[0] = bj.eL.data[122]
			.value)
	}, this.a54 = function() {
		aD.data = new a4b, aD.data.aIncomeType = 2, aD.data.aIncomeData = new Uint8Array(aD.em), aD.data.aIncomeData[0] = 64
	}
}

function dZ() {
	var a55 = [];
	this.pX = function(player, pB, a56, a57) {
		player === aD.eZ || pB === aD.eZ || !a57 && bA.gB.jZ(player) || bA.gB.jZ(pB) || this.yc(ag.yd[player] + " supported " + ag.yd[pB] + " with " + bA.rc.zR(a56) + " ressource" + (1 === a56 ? "." : "s."))
	}, this.yc = function(qK, pM) {
		qK = {
			eO: aW.a59(),
			qK: qK,
			pM: pM
		};
		a55.push(qK), 30 === t.ss && t.a5A().yc(qK)
	}, this.clear = function() {
		a55 = [];
		var tG = t.a5B(30);
		tG && tG.clear()
	}, this.a5C = function() {
		return a55
	}
}

function dT() {
	this.z8 = 0, this.gap = 0, this.sU = 0, this.qj = 0, this.dd = function() {
		this.resize()
	}, this.resize = function() {
		this.z8 = .0022 * bA.qd.qe(.5) * h.hz, this.sU = this.z8 / h.k, this.gap = Math.max(Math.floor((a0.a1.hy() ? .0114 : .01296) * h.hz), 2), this.qj = this.gap / h.k
	}
}

function dS() {
	this.a5D = function() {
		return a0.a1.hy() ? 2 : 1
	}
}

function cC() {
	var rC, ew, ey, a5E, a5F, a5G, eO, a5H, a5I, a5J, a5K, gap, zoom, pg, a5L;

	function a5Z(lR, lS, eT) {
		ac.ek(eT) || -1 === (lR = bN.l1.a5i(lR, lS)) ? aN.a5h(eT) : aN.a5j(lR)
	}

	function a5V(a5H) {
		for (var aB = pg.length - 1; 0 <= aB; aB--)
			if (pg[aB] === a5H) return 1
	}

	function a5T(a5Q) {
		var aB, ep;
		if (-1 !== a5Q)
			for (ep = rC.length, aB = 0; aB < ep; aB++)
				if (rC[aB].hb && rC[aB].ew + 1 === a5Q % 4 && rC[aB].ey + 1 === a5Q >> 2) return aB;
		return -1
	}

	function a5R(lR, lS) {
		var tG = gap / 2;
		return lR < ew - a5E - 3 * tG || ew + 3 * a5E + 5 * tG < lR || lS < ey - a5E - 3 * tG || ey + 2 * a5E + 3 * tG < lS ? -1 : 4 * (lS < ey - tG ? 0 : lS < ey + a5E + tG ? 1 : 2) + (lR < ew - tG ? 0 : lR < ew + a5E + tG ? 1 : lR < ew + 2 * a5E +
			3 * tG ? 2 : 3)
	}
	this.a5M = function() {
		var aB, f9, a5P = [bB.oB, bB.oP, bB.nj, bB.ol, bB.oc];
		for (rC = new Array(10), aB = 0; aB < 10; aB++) rC[aB] = {
			id: aB,
			hb: !1,
			l9: 0,
			canvas: [],
			ew: 0,
			ey: 0
		};
		for (rC[0].colors = [0, 1, 2, 3], rC[0].ew = 0, rC[0].ey = 0, rC[1].colors = [1, 4], rC[1].ew = 1, rC[1].ey = 0, rC[2].colors = [0, 1], rC[2].ew = -1, rC[2].ey = 0, rC[3].colors = [0], rC[3].ew = 0, rC[3].ey = 0, rC[4].colors = [0, 2],
			rC[4].ew = 1, rC[4].ey = 1, rC[5].colors = [3], rC[5].ew = 0, rC[5].ey = -1, rC[6].id = 20, rC[6].colors = [0], rC[6].ew = 1, rC[6].ey = -1, rC[7].id = 21, rC[7].colors = [0], rC[7].ew = 0, rC[7].ey = 1, rC[8].id = 16, rC[8]
			.colors = [0], rC[8].ew = 0, rC[8].ey = 0, rC[9].id = 10, rC[9].colors = [4], rC[9].ew = 2, rC[9].ey = 0, aB = 0; aB < 10; aB++)
			for (f9 = 0; f9 < rC[aB].colors.length; f9++) rC[aB].canvas.push(function(id, a2x) {
				if (id < 20) return bA.canvas.yu(ab.get(3), id, a2x);
				var a2x = ab.get(3).height,
					a2y = bA.qd.wZ(a2x, a2x),
					hr = bA.qd.getContext(a2y);
				20 === id ? hr.drawImage(ab.get(18), 0, 0) : 21 === id && aj.wk.z9(aj.rt.yy + aj.rt.zF, hr, 0, 0, a2x);
				return a2y
			}(rC[aB].id, a5P[rC[aB].colors[f9]]))
	}, this.a5O = function() {
		return rC
	}, this.dd = function() {
		pg = [], ew = ey = eO = 0, a5F = a5G = -1e3, this.resize()
	}, this.resize = function() {
		a5E = Math.floor((a0.a1.hy() ? .075 : .0468) * h.hz), zoom = a5E / ab.get(3).height, gap = Math.floor(a5E / 3)
	}, this.a1y = function(lR, lS) {
		return !!this.hb() && (bf.dl = !0, !!aj.wk.h2(lR, lS, a5I) || (lR = function(lR, lS) {
			a5G = a5F = -1e3;
			var a5S = a5T(a5R(lR, lS));
			if (-1 === a5S) return 0;
			if (1 !== rC[a5S].colors[rC[a5S].l9])
				if (5 === a5S) {
					if (! function() {
							var dt = performance.now();
							a5L + 4e3 < dt && (pg = []);
							a5L = dt
						}(), a5V(a5H)) return 1;
					pg.push(a5H), 16 < pg.length && pg.shift()
				} else if (6 === a5S) {
				for (var aB = pg.length - 1; 0 <= aB; aB--) 0 === ag.ml[pg[aB]] && pg.splice(aB, 1);
				0 < pg.length && (b5.a5W(1, pg, !0) && b8.gB.pf(pg, a5H), pg = [])
			} else if (2 === a5S) an.hT(a5H) && b8.hF.pA(aR.hJ(), a5H);
			else if (3 === a5S) aD.hD && b8.hF.hG(a5J);
			else if (0 === a5S)
				if (0 === rC[0].l9) {
					if (aD.a4Z && aW.a59() < 350) return 1;
					bV.a5X(4), b8.hF.hM(aR.hJ(), a5H)
				} else b1.hN(a5H, aR.hJ());
			else if (1 === a5S) b8.hF.hR(aR.hJ(), a5J);
			else if (9 === a5S) b8.hF.hU(aR.hJ());
			else {
				if (7 === a5S) return bV.a5X(0), aj.wk.show(lR, lS), 2;
				if (4 === a5S) b5.a5W(0, [a5H], !0) && b8.gB.pc(a5H);
				else {
					if (8 !== a5S) return 0;
					b8.hF.hI(aR.hJ(), a5K, a5H)
				}
			}
			return 1
		}(lR, lS), this.ru(), 2 === lR && (aj.wk.hb = !0), 0 < lR))
	}, this.a20 = function(lR, lS) {
		this.hb() || (a5F = lR, a5G = lS, eO = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = bM.h5(mouseX),
			coordY = bM.h7(mouseY),
			coord = bM.fD(coordX, coordY),
			coord = bM.ef(coord);
		bM.h8(coordX, coordY) && a5Z(mouseX, mouseY, coord)
	}, this.click = function(lR, lS, a27) {
		var h4 = bM.h5(lR),
			h6 = bM.h7(lS),
			eb = bM.fD(h4, h6),
			eT = bM.ef(eb);
		return !(!bM.h8(h4, h6) || (h4 = (a0.a1.hy() ? .025 : .0144) * h.hz, h6 = performance.now(), Math.abs(lR - a5F) > h4) || Math.abs(lS - a5G) > h4 || eO + 500 < h6) && (eO = h6, a27 ? (a5Z(lR, lS, eT), !1) : aM.gz || this.hb() || !bA.gB.h1(
			aD.eZ) || aD.gy ? (this.ru(), !1) : (aD.hD ? 0 <= (a5J = br.hE(eb)) && (rC[3].hb = !0) : 2 === aD.a0A ? ac.gP(eT) && (a5H = ac.eh(eT), bA.gB.jZ(a5H) || (rC[0].hb = !0, rC[0].l9 = 1, rC[7].hb = !0)) : (bN.hS.hT(aD.eZ, eb) && (
			rC[0].hb = !0, rC[0].l9 = 1, rC[1].hb = !0, rC[1].l9 = 0, rC[9].hb = !0, rC[9].l9 = 0), bN.hP.hQ(aD.eZ, eb) && (rC[0].hb = !0, rC[0].l9 = 1, rC[1].hb = !0, rC[1].l9 = 1, a5J = bO.fR[7]), ac.eu(eT) ? (a5K = am.eQ.eS(
			eT)) && (h4 = bM.ef(a5K), rC[8].hb = !0, a5H = ac.eg(h4) ? aD.em : ac.eh(h4)) : (ac.y9(aD.eZ, eT) && (a5I = aD.eZ, rC[0].hb = !0, rC[0].l9 = 1, rC[7].hb = !0), -1 !== (h6 = br.hK(eb)) && (ac.eg(h6 << 2) ? (a5H = aD.em,
			bs.hL(aD.eZ) ? (rC[0].hb = !0, rC[0].l9 = 0) : ad.fw(aD.eZ) && (rC[0].hb = !0, rC[0].l9 = 3)) : (a5H = ac.eh(h6 << 2), rC[0].l9 = 1, rC[5].hb = function(a5H) {
			return !bA.gB.jZ(a5H) && !a5V(a5H) && b5.a5W(1, [a5H], !1)
		}(a5H), rC[7].hb || bA.gB.jZ(a5H) || (a5I = a5H, rC[7].hb = !0), rC[4].hb = !bA.gB.jZ(a5H) && !af.a5d(a5H) && b5.a5W(0, [a5H], !1), rC[6].hb = function(a5H) {
			if (0 === pg.length) return !1;
			if (performance.now() > a5L + 4e3) return !(pg = []);
			return !a5V(a5H) && ! function(a5H) {
				var aB;
				if (aD.hj)
					for (aB = pg.length - 1; 0 <= aB; aB--)
						if (!bs.ei(a5H, pg[aB])) return 1;
				return
			}(a5H)
		}(a5H), bs.ei(a5H, aD.eZ) ? (bs.hO(aD.eZ, a5H) ? (rC[0].l9 = 0, rC[0].hb = !0) : ad.fw(aD.eZ) && (rC[0].l9 = 3, rC[0].hb = !0), rC[0].hb = this.a5f()) : (rC[2].hb = !0, an.hT(a5H) ? rC[2].l9 = 0 : rC[2].l9 = 1,
			rC[0].hb = !0))))), this.a5a(lR, lS)))
	}, this.a5a = function(lR, lS) {
		return ew = lR - Math.floor(a5E / 2), ey = lS - Math.floor(a5E / 2), !!this.hb()
	}, this.a1e = function(lR, lS) {
		return !!this.hb() && (aj.wk.hb ? !aj.wk.z7(lR, lS) && (aj.wk.hb = !1, bf.dl = !0) : function(sF, lR, lS) {
			lR = a5R(lR, lS);
			if (0 <= a5T(lR)) return !1;
			if ((1 === lR || 6 === lR) && 0 <= a5T(2)) return !1;
			if ((6 === lR || 9 === lR) && 0 <= a5T(10)) return !1;
			return sF.ru(), bf.dl = !0
		}(this, lR, lS))
	}, this.ru = function() {
		for (var aB = rC.length - 1; 0 <= aB; aB--) rC[aB].hb = !1, rC[aB].l9 = 0;
		aj.wk.hb = !1
	}, this.hb = function() {
		return this.a5f() || aj.wk.hb
	}, this.a5f = function() {
		for (var ep = rC.length, aB = 0; aB < ep; aB++)
			if (rC[aB].hb) return !0;
		return !1
	}, this.ul = function() {
		if (this.hb())
			if (aj.wk.hb) aj.wk.ul();
			else {
				var aB, hr = um,
					f9 = rC,
					ep = f9.length,
					a5n = (a5E + gap) / zoom;
				for (hr.imageSmoothingEnabled = !0, hr.setTransform(zoom, 0, 0, zoom, ew, ey), aB = 0; aB < ep; aB++) f9[aB].hb && um.drawImage(f9[aB].canvas[f9[aB].l9], f9[aB].ew * a5n, f9[aB].ey * a5n);
				hr.imageSmoothingEnabled = !1, hr.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function cD() {
	var j, canvas, a5o, a5p, a5q, a5r = -1;

	function a5s() {
		var a5t, yK = canvas.getContext("2d", {
			alpha: !0
		});
		yK.clearRect(0, 0, j, j), yK.fillStyle = bB.nh, yK.fillRect(0, 0, j, j), 0 === a5p && (yK.fillStyle = bB.nm, yK.fillRect(0, 0, j, j)), yK.fillStyle = bB.nl, yK.fillRect(0, 0, j, 1), yK.fillRect(0, 0, 1, j), yK.fillRect(0, j - 1, j, 1), yK
			.fillRect(j - 1, 0, 1, j), a5t = .9 * j / ab.get(0).width, yK.imageSmoothingEnabled = !0, yK.setTransform(a5t, 0, 0, a5t, Math.floor((j - a5t * ab.get(0).width) / 2), Math.floor((j - a5t * ab.get(0).height) / 2)), yK.drawImage(ab.get(0),
				0, 0), yK.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a5v(lR, lS) {
		if (!aM.gz) return lR <= j + bc.gap && lS >= aR.ey ? 9 : -1;
		if (lR <= 4 * j + bc.gap) {
			if (lS >= aR.ey) return 0;
			if (lS >= aR.ey - j - a5q * bc.gap) return 2
		} else if (lR <= 7 * j + bc.gap && lS >= aR.ey - j - a5q * bc.gap) return 1;
		return -1
	}
	this.gz = !1, this.dd = function() {
		a5p = -1, this.gz = !1, a5q = a0.a1.hy() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		j = aR.j, (canvas = document.createElement("canvas")).width = j, canvas.height = j, a5o = bA.qd.sS(1, (a0.a1.hy() ? .5 : .45) * j), a5s()
	}, this.a2F = function() {
		this.gz = !this.gz, this.gz ? (bC.a2E(!1), aD.gy && bC.a4x && bC.a2G(!0), this.a5u()) : (a5p = -1, a5s(), !aD.kW || 1 !== aD.a0A || aD.hD || aD.gy || a0.a1.setState(1)), bf.dl = !0
	}, this.a5u = function() {
		(aD.kW || aD.gy) && 1 === aD.a0A && (aV.mX(!0), aD.hD || setTimeout(function() {
			bb.a0L()
		}, 0), a0.a1.setState(0))
	}, this.h2 = function(lR, lS) {
		return 0 <= (a5r = a5v(lR, lS)) || !aM.gz || aD.kW || aD.gy || be.hb || aM.a2F(), a5r
	}, this.a1e = function(lR, lS) {
		lR = a5v(lR, lS);
		lR !== a5p && (a5p = lR, this.gz || a5s(), bf.dl = !0)
	}, this.a1f = function(lR, lS) {
		lR = a5v(lR, lS);
		return -1 !== lR && a5r === lR && (this.gz ? aD.nE ? (0 <= lR && bC.a2E(!1), !aD.gy) : (0 === lR ? aD.a1V() : 1 === lR ? this.a2F() : 2 === lR && t.u(1, 0), !0) : 9 === lR && (this.a2F(), !0))
	}, this.ul = function() {
		var i;
		this.gz ? (i = Math.floor(5.5 * j), um.setTransform(1, 0, 0, 1, bc.gap, aR.ey), um.fillStyle = bB.nh, um.fillRect(0, 0, i, j), 0 === a5p ? (um.fillStyle = bB.nm, um.fillRect(0, 0, 4 * j, j)) : 1 === a5p && (um.fillStyle = bB.nm, um
				.fillRect(4 * j, 0, Math.floor(1.5 * j), j)), um.fillStyle = bB.nl, um.fillRect(0, 0, i, 1), um.fillRect(0, 0, 1, j), um.fillRect(4 * j, 0, 1, j), um.fillRect(0, j - 1, i, 1), um.fillRect(i - 1, 0, 1, j), um.font = a5o, bA.qd
			.textBaseline(um, 1), bA.qd.textAlign(um, 1), um.fillText(L(42), 2 * j, .54 * j), i = .4 * j, aM.a5z(bc.gap + 4 * j + (1.5 * j - i) / 2, aR.ey + .3 * j, i), i = 1, um.setTransform(1, 0, 0, 1, bc.gap, aR.ey - i * a5q * bc.gap - i *
				j), um.fillStyle = bB.nh, um.fillRect(0, 0, 4 * j, j), a5p === i + 1 && (um.fillStyle = bB.nm, um.fillRect(0, 0, 4 * j, j)), um.fillStyle = bB.nl, um.fillRect(0, 0, 4 * j, 1), um.fillRect(0, 0, 1, j), um.fillRect(4 * j, 0, 1,
				j), um.fillRect(0, j - 1, 4 * j, 1), um.fillText(L(0 === i ? 42 : 43), 2 * j, .54 * j), um.setTransform(1, 0, 0, 1, 0, 0)) : um.drawImage(canvas, bc.gap, aR.ey)
	}, this.qE = function(player) {
		return 0 !== ag.ml[player] && 2 !== aD.a0A && !bA.gB.jZ(player)
	}, this.a5z = function(ew, ey, ep) {
		um.setTransform(1, 0, 0, 1, ew, ey), um.lineWidth = bc.z8, um.strokeStyle = bB.nl, um.beginPath(), um.moveTo(0, 0), um.lineTo(ep, ep), um.moveTo(0, ep), um.lineTo(ep, 0), um.stroke()
	}
}

function cE() {
	var a61, j, a62, a63, a64, a65, a66, a67, a68;

	function yG() {
		return aR.a6Q(aN.a6M()) ? aw.hb ? __fx.settings.keybindButtons ? aR.ey - 2 * aR.j - 3 * a62 : aR.ey - aR.j - 2 * a62 : __fx.settings.keybindButtons ? aR.ey - aR.j - 2 * a62 : aR.ey - a62 : bC.a6Q(aN.a6P()) ? aw.hb ? bC.yG() - aR.j - 2 * a62 :
			bC.yG() - a62 : aw.hb ? h.j - aR.j - (bk.a5D() + 1) * a62 : h.j - bk.a5D() * bc.gap
	}

	function a6D(dt, qK, id, gN, a6G, a6H, kp, a6I, a6J, a6K, a6V) {
		var aB, yK, a2y, qV, a6W = void 0 !== a6J,
			i = Math.floor(aQ.measureText(qK, aN.a5o) + 1.5 * a63 + (a6W ? j : 1.5 * a63));
		if (bf.dl = !0, a6V || bq.yc(qK, a6J), i + 2 * a62 + aR.j > h.i && !a6W && 50 !== id && 20 < qK.length) a6D(dt, (a6V = bA.rc.a4G(qK))[0], id, gN, a6G, a6H, kp, a6I, a6J, a6K, !0), a6D(dt, a6V[1], id, gN, a6G, a6H, kp, a6I, a6J, a6K, !0);
		else if (a6V = i + (50 === id ? a64 : 0), (a2y = document.createElement("canvas")).width = i, a2y.height = j, (yK = a2y.getContext("2d", {
				alpha: !0
			})).font = aN.a5o, bA.qd.textBaseline(yK, 1), bA.qd.textAlign(yK, 0), yK.clearRect(0, 0, i, j), yK.fillStyle = a6H, yK.fillRect(0, 0, i, j), yK.fillStyle = a6G, yK.fillText(qK, Math.floor(1.5 * a63), Math.floor(j / 2)), a6W && (yK
				.imageSmoothingEnabled = !0, aj.wk.z9(a6J, yK, i - j, 0, j)), 0 === (qV = {
				eO: dt,
				qK: qK,
				id: id,
				player: gN,
				canvas: a2y,
				a6G: a6G,
				a6H: a6H,
				i: i,
				a6N: a6V,
				kp: kp,
				a6I: a6I,
				a6J: a6J,
				a6K: a6K
			}).eO || 0 < a61.length && 0 < a61[0].eO) a61.unshift(qV);
		else {
			for (aB = 1; aB < a61.length; aB++)
				if (0 < a61[aB].eO) return void a61.splice(aB, 0, qV);
			a61.push(qV)
		}
	}

	function a6E(e8, tG, f9) {
		return "rgb(" + e8 + "," + tG + "," + f9 + ")"
	}

	function a6X(id, gI) {
		for (var ep = a61.length, aB = 0; aB < ep; aB++) a61[aB].id === id && gI-- <= 0 && (a61.splice(aB, 1), aB--, ep--)
	}

	function a6Y(id, player) {
		for (var f3 = !1, aB = a61.length - 1; 0 <= aB; aB--) a61[aB].id !== id || player !== aD.em && a61[aB].player !== player || (a61.splice(aB, 1), f3 = !0);
		return f3
	}

	function a6u(qK) {
		a6D(340, qK, 6, 0, a6E(215, 245, 255), bB.ni, -1, !1)
	}
	this.a69 = "", this.dd = function() {
		var self;
		a67 = 0, a66 = a0.a1.hy() ? 7 : 12, a65 = {
			zy: [0, 0, 0],
			a6A: [0, 0, 0],
			eG: [220, 180, 180],
			uk: [0, 0, 0],
			fA: [0, 0, 0]
		}, a61 = [], this.resize(), aD.hD && this.a0M(0, 18), bS.wX.wY[bS.eV].name.length && a6u(L(86, [bS.wX.wY[bS.eV].name])), a6u(L(87, [bS.f0 - 2 + "x" + (bS.f1 - 2)])), a6u(L(88, [bA.rc.zR(ap.a6v)])), ap.a6v !== ap.a6w && a6u(L(89, [bA
			.rc.zR(ap.a6w) + " (" + bA.rc.a4C(100 * ap.a6w / ap.a6v, 1) + ")"
		])), 0 < ap.a6x && a6u(L(66, [bA.rc.zR(ap.a6x) + " (" + bA.rc.a4C(100 * ap.a6x / ap.a6v, 1) + ")"])), 0 < ap.a6y && a6u(L(90, [bA.rc.zR(ap.a6y) + " (" + bA.rc.a4C(100 * ap.a6y / ap.a6v, 1) + ")"])), 10 === aD.kU && a6D(120, L(91), 6,
			0, a6E(235, 255, 120), bB.ni, -1, !1), 0 !== (self = this).a69.length && (a6D(200, self.a69, 0, 0, bB.nl, bB.ni, -1, !1), self.a69 = ""), aD.yb && a6D(340, L(44), 6, 0, a6E(255, 200, 0), bB.ni, -1, !1)
	}, this.resize = function() {
		var a6F, aB;
		if (j = (j = Math.floor((a0.a1.hy() ? .031 : .0249) * h.hz)) < 10 ? 10 : j, this.fontSize = Math.floor(2 * j / 3), this.a5o = bA.qd.sS(1, this.fontSize), a62 = bc.gap, a63 = Math.floor(j / 5), 0 < a61.length)
			for (a6F = a61, a61 = [], aB = a6F.length - 1; 0 <= aB; aB--) a6D(a6F[aB].eO, a6F[aB].qK, a6F[aB].id, a6F[aB].player, a6F[aB].a6G, a6F[aB].a6H, a6F[aB].kp, a6F[aB].a6I, a6F[aB].a6J, a6F[aB].a6K, !0);
		this.a6L()
	}, this.a6L = function() {
		a68 = document.createElement("canvas");
		var qK = L(45),
			yK = (a64 = aQ.measureText(qK, this.a5o) + 5 * a63, a68.height = j, a68.width = a64, a68.getContext("2d", {
				alpha: !0
			}));
		yK.font = this.a5o, bA.qd.textBaseline(yK, 1), bA.qd.textAlign(yK, 1), yK.clearRect(0, 0, a64, j), yK.fillStyle = bB.o8, yK.fillRect(0, 0, a64, j), yK.fillStyle = bB.nl, yK.fillText(qK, Math.floor(a64 / 2), Math.floor(j / 2))
	}, this.a6M = function() {
		var ep;
		return aw.hb ? aw.i : 0 === (ep = a61.length) ? 0 : 1 === ep ? a61[0].a6N : a6O(a61[0].a6N, a61[1].a6N)
	}, this.a6P = function() {
		var ep = a61.length;
		return aw.hb ? ep ? a6O(aw.i, a61[0].a6N) : aw.i : 0 === ep ? 0 : 1 === ep ? a61[0].a6N : 2 === ep ? a6O(a61[0].a6N, a61[1].a6N) : a6O(a6O(a61[0].a6N, a61[1].a6N), a61[2].a6N)
	}, this.h2 = function(ew, ey) {
		for (var nB, a6R, a6S = yG(), aB = a61.length - 1; 0 <= aB; aB--)
			if ((a6R = a6S - (aB + 1) * j) <= ey && ey < a6R + j) return 50 === a61[aB].id ? ew >= h.i - a64 - a62 - a61[aB].i && (ew >= h.i - a64 - a62 ? b8.gB.pc(a61[aB].player) : aH.n6(a61[aB].player, 800, !1, 0), !0) : ew >= h.i - a61[aB].i -
				a62 && (736 === a61[aB].id ? (a6R = a61[aB].qK.split(" "), window.open(a6R[a6R.length - 1], "_blank")) : a61[aB].a6I && (a61[aB].a6K && a61[aB].a6K.f8 ? (a6R = a61[aB].a6K.eb, nB = bM.ex(a6R) - 10, a6R = bM.ez(a6R) - 10, aH
					.n5(nB, a6R, 19 + nB, 19 + a6R)) : a61[aB].a6K && a61[aB].a6K.f9 ? aH.n7(a61[aB].player, a61[aB].a6K.n8) : (aH.n6(a61[aB].player, 800, !1, 0), 0 <= a61[aB].kp && (nB = a61[aB].kp, a61[aB].kp = a61[aB].player, a61[
					aB].player = nB))), !0);
		return !1
	}, this.yc = function(dt, qK, id, gN, a6G, a6H, kp, a6I, a6J, a6K) {
		a6D(dt, qK, id, gN, a6G, a6H, kp, a6I, a6J, a6K)
	}, this.a6U = function(r) {
		a6D(300, r, 252, 0, bB.nl, bB.ni, -1, !1)
	}, this.a4S = function(id) {
		for (var aB = a61.length - 1; 0 <= aB; aB--) a61[aB].id === id && (a61[aB].eO = 1)
	}, this.a0M = function(player, id) {
		0 === id ? (aQ.jI(player, 0), a6X(423, 2), a6D(160, L(46, [ag.yd[player]]), 423, player, "rgb(10,220,10)", bB.ni, -1, !1)) : 1 === id ? (a6Y(50, aD.em), aQ.jI(player, 1), a6D(360, L(47, [ag.yd[player]]), 0, player, bB.oR, bB.ni, -1, !0),
			aH.n6(player, 2700, !1, 0)) : 2 === id ? (aQ.jI(player, 2), a6D(0, L(48), 0, player, "rgb(10,255,255)", bB.ni, -1, !0), aH.n6(player, 2700, !1, 0)) : 3 === id ? (aQ.jI(player, 2), a6D(0, L(49, [ag.yd[player]]), 0, player, bB.nl,
			bB.ni, -1, !0), aH.n6(player, 2700, !1, 0)) : 4 === id ? this.a6Z(1, player, player) : 5 === id ? bA.gB.jZ(aD.eZ) || (function(id, mg) {
			var aB, a6j = 0,
				ep = a61.length;
			for (aB = 0; aB < ep; aB++)
				if (a61[aB].id === id && mg <= ++a6j) return a61.splice(aB, 1)
		}(1, 5), af.a6b(player) && a6D(180, L(50, [ag.yd[player]]), 1, player, a6E(255, 200, 180), bB.ni, -1, !0), bA.gB.a3Z(player, 10) && (a6X(573, 0), a6D(180, L(51, [ag.yd[player]]), 573, player, bB.oR, bB.ni, -1, !0))) : 18 === id ? a6D(
			255, L(52), 18, 0, bB.nl, bB.ni, -1, !1) : 21 === id ? a6D(220, L(53), id, 0, bB.nl, bB.ni, -1, !1) : 22 === id ? this.a6Z(2, player, player) : 59 === id && a6D(0, L(54), id, 0, bB.ok, bB.ni, 0, !1)
	}, this.a1R = function(r) {
		a6D(200, L(55, [r]), 94, 0, bB.nl, bB.oN, -1, !1)
	}, this.a0Y = function(a6c) {
		if (aD.eZ === a6c && !aD.kW && !aD.gy)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			a6D(0, "Your Win Count is now " + __fx.wins.count, 3, a6c, bB.nl, bB.ni, -1, !0);
		ag.gd[a6c] && (aQ.jI(a6c, 2), aD.kC < 100 ? a6D(0, L(49, [ag.yd[a6c]]), 3, a6c, bB.nl, bB.ni, -1, !0) : a6D(0, L(56, [ag.yd[a6c]]), 3, a6c, bB.nl, bB.ni, -1, !0))
	}, this.a5h = function(eT) {
		var qK, a6e, a6d = "(" + bM.ex(eT >> 2) + ", " + bM.ez(eT >> 2) + ")",
			a6I = !1,
			player = 0;
		ac.ek(eT) ? ac.eg(eT) ? a6d = L(57, [a6d]) : (player = ac.eh(eT), aD.gy && !1 === __fx.hoveringTooltip.active && (aD.eZ = player), qK = L(58, [bA.yK.a3A(ag.a0o[player], bA.qd.sS(0, 10), 150)]) + "   ", qK = (qK += L(59, [bA.rc.zR(ag.gr[
				player])]) + "   ") + L(60, [bA.rc.zR(ag.gd[player])]) + "   ", aD.hj && (a6e = bg.a0V[bg.kZ[bg.en[player]]], qK += L(61) + ": " + a6e + "   "), bA.gB.jZ(player) && (qK += L(62) + ": " + aE.kN[aE.hY[player]] + "   "), a6d =
			qK = (qK += L(63, [player]) + "   ") + L(64, [a6d]), a6I = !0) : a6d = ac.eu(eT) ? L(65, [a6d]) + "   #" + ac.eX(eT) : L(66, [a6d]), bf.dl = !0, a6X(55, 0), a6D(220, a6d, 55, player, bB.nl, bB.ni, -1, a6I, void 0, void 0, !0)
	}, this.a5j = function(a6f) {
		var l7 = bN.y,
			player = l7.m6[a6f] >> 3,
			qK = (bf.dl = !0, a6X(55, 0), L(67, [ag.yd[player]]) + "   ");
		a6D(220, qK += L(59, [bA.rc.zR(l7.a6g[a6f])]), 55, player, bB.nl, bB.ni, -1, !0)
	}, this.pL = function(p7, a6h, pM) {
		p7 === aD.eZ ? a6D(175, " " + L(68, [ag.yd[a6h]]) + ": ", 1001, a6h, a6E(200, 255, 210), bB.ni, -1, !0, pM) : this.a6i(p7, pM)
	}, this.a6i = function(p7, pM) {
		a6X(1e3, 0), a6D(175, ag.yd[p7] + ": ", 1e3, p7, bB.nl, "rgba(5,60,25,0.9)", -1, !0, pM)
	}, this.a0X = function() {
		var r;
		aD.a0F ? (r = L(69), aQ.a0W(L(70), 2, 1, 12), a6D(0, r, 40, 0, "rgb(10,220,10)", bB.ni, -1, !1)) : (r = L(71), aQ.a0W(L(72), 2, 0, 16), a6D(0, r, 41, 0, bB.nl, bB.ni, -1, !1))
	}, this.yR = function() {
		var gI = ag.yd,
			es = aD.data;
		a6D(300, gI[0] + " [" + aD.a0S.yX(es.elo[0]) + "] vs " + gI[1] + " [" + aD.a0S.yX(es.elo[1]) + "]", 65, 0, bB.nc, "rgba(100,255,255,0.75)", -1, !1)
	}, this.a6k = function(r) {
		a6D(350, r, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.a6l = function(a6m) {
		a6D(0, L(a6m ? 73 : 74), 247, 0, bB.oj, bB.ni, -1, !1)
	}, this.yZ = function(yW, yY, a6n) {
		var es = aD.data,
			gI = ag.yd;
		a6D(0, gI[0] + ": " + aD.a0S.yX(es.elo[0]) + " -> " + yW, 66, 0, bB.nl, a6n[0], -1, !1), a6D(0, gI[1] + ": " + aD.a0S.yX(es.elo[1]) + " -> " + yY, 66, 1, bB.nl, a6n[1], -1, !1)
	}, this.pd = function(player, id) {
		0 === id ? a6Y(50, player) ? (a6D(128, L(75, [ag.yd[player]]), 52, player, a6E(180, 255, 180), bB.ni, -1, !0), af.qC(player, 2, 255)) : a6D(384, L(76, [ag.yd[player]]), 51, player, a6E(210, 210, 255), bB.ni, -1, !0) : a6Y(51, player) ? (
			a6D(128, L(77, [ag.yd[player]]), 52, player, bB.nl, "rgba(60,120,10,0.9)", -1, !0), af.qC(player, 2, 255)) : (a6D(384, L(78, [ag.yd[player]]), 50, player, bB.nl, "rgba(90,90,90,0.9)", -1, !0), af.qC(player, 2, 96))
	}, this.ph = function(zy, target) {
		var color = a6E(210, 255, 210);
		1 < zy.length ? a6D(230, L(79, [zy.length, ag.yd[target]]), 66, target, color, bB.ni, -1, !0) : a6D(230, L(80, [ag.yd[zy[0]], ag.yd[target]]), 66, zy[0], color, bB.ni, target, !0)
	}, this.a6o = function(player, target) {
		a6D(230, L(81, [ag.yd[player], ag.yd[target]]), 66, player, bB.nl, "rgba(75,65,5,0.9)", target, !0)
	}, this.a6p = function(id, gI) {
		a6X(id, gI)
	}, this.a0H = function(id, player) {
		a6Y(id, void 0 === player ? aD.em : player)
	}, this.a6q = function(id) {
		for (var aB = a61.length - 1; 0 <= aB; aB--)
			if (a61[aB].id === id) return a61[aB];
		return null
	}, this.pY = function(a56, a6r, player) {
		2 !== ag.a3U[aD.eZ] && a6D(200, 1 === a56 ? L(82, [ag.yd[player]]) : L(83, [bA.rc.zR(a56), ag.yd[player]]), 30, player, "rgb(190,255,190)", bB.ni, -1, !0)
	}, this.a6t = function(a56, player) {
		2 !== ag.a3U[aD.eZ] && (a6X(31, 0), a56 = " (" + bA.rc.zR(a56) + ") 💸", a6D(150, a56 = bA.gB.jZ(player) ? L(84) + a56 : L(85, [ag.yd[player]]) + a56, 31, player, bB.nc, "rgba(205,205,205,0.9)", -1, !0))
	}, this.a0G = function(bu) {
		for (var fA = bf.k9(), aB = 2; 0 <= aB; aB--) 0 < a65.uk[aB] && (bu || a65.fA[aB] < fA - 220) && this.a6z(aB)
	}, this.a6z = function(id) {
		var qK, ep = a65.uk[id],
			player = a65.zy[id];
		a65.uk[id] = 0, 1 === ep ? (0 === id ? qK = L(92, [ag.yd[player], ag.yd[a65.a6A[0]]]) : 1 === id ? qK = L(93, [ag.yd[player]]) : 2 === id ? qK = L(94, [ag.yd[player]]) : 3 === id && (qK = L(95, [ag.yd[player]])), a6X(7, 0), a6D(a65.eG[
			id], qK, 7, a65.a6A[id], bB.nl, bB.ni, -1, !0)) : (qK = L(0 === id ? 96 : 1 === id ? 97 : 98, [ep]), a6X(7, 0), a6D(a65.eG[id], qK, 7, player, bB.nl, bB.ni, -1, !1))
	}, this.a6Z = function(id, hH, kp) {
		var fA = bf.k9(),
			ep = a65.uk[id] + 1;
		a65.uk[id]++, a65.zy[id] = hH, a65.a6A[id] = kp, 1 === ep && (a65.fA[id] = fA), (1 === ep && (aD.a0D < 32 || 2 === aD.a0A) || 1 < ep && (a65.fA[id] < fA - 140 || 2 === aD.a0A)) && this.a6z(id)
	}, this.j5 = function() {
		b2.j5();
		for (var jR = (jR = a61.length - a66) <= 1 ? 1 : jR * jR, aB = a61.length - 1; 0 <= aB; aB--) 0 < a61[aB].eO && (a61[aB].eO -= jR, a61[aB].eO <= 0) && (bf.dl = !0, a61.splice(aB, 1));
		! function() {
			var gI, aB;
			if (128 !== a67 && !(++a67 < 128))
				for (gI = 5, aB = al.ki - 1; 0 <= aB; aB--) 1 === ag.a3U[al.kn[aB]] && 0 < gI-- && a6D(240, L(95, [ag.yd[al.kn[aB]]]), 1, al.kn[aB], bB.nc, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.a0G(!1)
	}, this.ul = function() {
		for (var xI, ey = yG(), aB = a61.length - 1; 0 <= aB; aB--) xI = ey - (aB + 1) * j, 50 === a61[aB].id ? (um.drawImage(a61[aB].canvas, h.i - a61[aB].i - a64 - a62, xI), um.drawImage(a68, h.i - a64 - a62, xI)) : um.drawImage(a61[aB].canvas,
			h.i - a61[aB].i - a62, xI)
	}
}

function cF() {
	var a71, a72, a73, i, j, font, qK;

	function a78(a79) {
		return a79 < 10 ? "0" + a79 : String(a79)
	}
	this.dd = function() {
		qK = L(99)
	}, this.resize = function() {
		i = Math.floor((a0.a1.hy() ? .53 : .36) * h.hz), j = Math.floor(.065 * i), font = bA.qd.sS(1, Math.floor(.9 * j)), a73--, this.setTime()
	}, this.j5 = function() {
		this.setTime() && (bf.dl = !0)
	}, this.setTime = function() {
		for (var dt = new Date, a74 = dt.getUTCMinutes(), a75 = dt.getUTCSeconds(), a76 = [0, 10, 20, 25, 30, 35, 40, 45, 50], a77 = (a72 = 3600 - 60 * a74 - a75, a72 %= 300, 300), aB = 0; aB < a76.length; aB++)
			if ((60 * a74 + a75 + a72) % 3600 == 60 * a76[aB]) {
				a77 = 0;
				break
			} return a72 += a77, a71 = qK + a78(Math.floor(a72 / 60)) + ":" + a78(a72 % 60), a73 !== (a73 = 60 * a74 + a75) && (i = aQ.measureText(a71, font), i += Math.floor(.4 * j), !0)
	}, this.ul = function() {
		um.lineWidth = 1 + Math.floor(j / 15), um.translate(h.i - j, Math.floor(.5 * (h.j + i))), um.rotate(-Math.PI / 2), um.fillStyle = bB.nl, um.fillRect(0, 0, i, j), um.strokeStyle = bB.nc, um.strokeRect(0, 0, i, j + 10), um.fillStyle = bB
			.nc, um.font = font, bA.qd.textBaseline(um, 1), bA.qd.textAlign(um, 1), um.fillText(a71, Math.floor(i / 2), Math.floor(.59 * j)), um.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function cG() {
	var a55, a7A, a7B, x4, a7C, a7D = 0,
		a7E = 0;

	function a7G(aB) {
		var a7I = !0,
			zG = bB.nl,
			i = (1 === a55[aB].id ? a55[aB].yK.fillStyle = bB.oe : a55[aB].jL === aD.em ? a55[aB].yK.fillStyle = bB.nw : (ac.a7J(a55[aB].jL), a55[aB].yK.fillStyle = bA.color.nf(bO.fO[0], bO.fO[1], bO.fO[2], .87), 400 < bA.ql.a2c(bO.fO, 0, 2) && (
				a7I = !1, zG = bB.nc)), a55[aB].canvas.width),
			sz = (a55[aB].yK.clearRect(0, 0, i, x4), a55[aB].yK.fillRect(0, 0, i, x4), a55[aB].yK.fillStyle = zG, ! function(yK, i, x4) {
				yK.fillRect(0, 0, i, 1), yK.fillRect(0, x4 - 1, i, 1), yK.fillRect(0, 0, 1, x4), yK.fillRect(i - 1, 0, 1, x4)
			}(a55[aB].yK, i, x4), a7A + 2 * x4 < i && (a55[aB].yK.fillRect(i - a7A - x4, 0, 1, x4), a55[aB].yK.fillText(ag.yd[a55[aB].jL], Math.floor((i - a7A) / 2), Math.floor(.57 * x4))), 0 !== a55[aB].id ? 0 : x4);
		a55[aB].yK.fillText(bA.rc.zR(a55[aB].hY), Math.floor(i - a7A / 2 - sz), Math.floor(.57 * x4)),
			function(aB, i, sz, a7I) {
				a55[aB].yK.fillStyle = a7I ? bB.nn : bB.nj;
				a7I = Math.floor(a7A * a55[aB].hY / a55[aB].a7P);
				a55[aB].yK.fillRect(Math.floor(i - a7A - sz), x4 - a7C, a7I, a7C)
			}(aB, i, sz, a7I), 0 === a55[aB].id ? (a7M(aB, i, a7I, zG), function(aB, i, a7I) {
				a55[aB].yK.strokeStyle = a7I ? bB.o3 : bB.oD, a55[aB].yK.fillRect(x4, 0, 1, x4);
				a7I = i - x4;
				a55[aB].yK.beginPath(), a55[aB].yK.moveTo(Math.floor(.3 * x4 + a7I), Math.floor(x4 / 2)), a55[aB].yK.lineTo(Math.floor(x4 - .3 * x4 + 0 + a7I), Math.floor(x4 / 2)), a55[aB].yK.stroke(), a55[aB].yK.beginPath(), a55[aB].yK.moveTo(
					Math.floor(x4 / 2 + a7I), Math.floor(.3 * x4)), a55[aB].yK.lineTo(Math.floor(x4 / 2 + a7I), Math.floor(x4 - .3 * x4 + 0)), a55[aB].yK.stroke()
			}(aB, i, a7I)) : a7M(aB, 2 * x4, a7I, zG)
	}

	function a7M(aB, i, a7I, zG) {
		a55[aB].yK.strokeStyle = a55[aB].a7Q ? bB.nu : a7I ? bB.oJ : bB.oK, a55[aB].yK.fillStyle = zG, a55[aB].yK.fillRect(i - x4, 0, 1, x4), a55[aB].yK.lineWidth = Math.max(Math.floor(x4 / 12), 3), a55[aB].yK.lineCap = "round";
		a7I = .35;
		i = x4 + 1, a55[aB].yK.beginPath(), a55[aB].yK.moveTo(Math.floor(i - a7I * x4 + 0), Math.floor(a7I * x4)), a55[aB].yK.lineTo(Math.floor(i - x4 + a7I * x4), Math.floor(x4 - a7I * x4 + 0)), a55[aB].yK.stroke(), a55[aB].yK.beginPath(), a55[aB]
			.yK.moveTo(Math.floor(i - x4 + a7I * x4), Math.floor(a7I * x4)), a55[aB].yK.lineTo(Math.floor(i - a7I * x4 + 0), Math.floor(x4 - a7I * x4 + 0)), a55[aB].yK.stroke()
	}

	function a7c(g, a7a) {
		for (var hY, aB = a7a - 1; 0 <= aB; aB--) hY = ad.g2(aD.eZ, aB), g[aB].hY !== hY && (g[aB].hY = hY, g[aB].a7P = Math.max(hY, g[aB].a7P), g[aB].a7H = !0)
	}

	function a7g(g, a7e) {
		for (var tC = aD.eZ << 3, a6g = bN.y.a6g, m3 = bN.y.m3, a7i = bN.y.a7i, aB = a7e - 1; 0 <= aB; aB--) {
			var a7j = a7i[tC + aB],
				hY = a6g[a7j];
			g[aB].hY !== hY ? (g[aB].hY = hY, g[aB].a7P = Math.max(hY, g[aB].a7P), g[aB].a7H = !0) : g[aB].a7Q || m3[a7j] % 64 != 5 || (g[aB].a7Q = !0, g[aB].a7H = !0)
		}
	}

	function a7F(a58) {
		a58.canvas = document.createElement("canvas"), bS.wd.font = a7B;
		var i = a7A;
		a58.jL < aD.em && 0 === a58.id && (i += Math.floor(bS.wd.measureText(ag.yd[a58.jL] + "000").width)), i += x4, 0 === a58.id && (i += x4), a58.canvas.width = i, a58.canvas.height = x4, a58.yK = a58.canvas.getContext("2d", {
			alpha: !0
		}), a58.yK.font = a7B, bA.qd.textBaseline(a58.yK, 1), bA.qd.textAlign(a58.yK, 1)
	}

	function a7W(aB) {
		return aU.a7k() ? h.i - a55[aB].canvas.width - bc.gap : aU.ew
	}

	function a7X(aB) {
		return Math.floor(2 * bc.gap + (aU.a7k() ? aW.j + bc.gap : 0) + aU.j + aB * (1.3 * x4))
	}
	this.dd = function() {
		a7D = a7E = 0, a55 = [], this.resize()
	}, this.resize = function() {
		a7B = aN.a5o, x4 = aN.fontSize + 5, x4 = Math.floor(1.25 * x4), a0.a1.hy() && (x4 = Math.floor(1.25 * x4)), a7C = Math.floor(.15 * x4), bS.wd.font = a7B, a7A = Math.floor(bS.wd.measureText("02 000 000 0000").width);
		for (var aB = a55.length - 1; 0 <= aB; aB--) a7F(a55[aB]), a7G(aB)
	}, this.mX = function() {
		for (var aB = a55.length - 1; 0 <= aB; aB--) a55[aB].a7H && (a55[aB].a7H = !1, a7G(aB))
	}, this.h2 = function(lR, lS) {
		if (2 !== aD.a0A && 0 !== ag.ml[aD.eZ] && !aD.gy && !bA.gB.jZ(aD.eZ))
			for (var a7R, a7S, a7T, a7U = a0.a1.hy() ? x4 : 0, a7V = a0.a1.hy() ? Math.floor(.15 * x4) : 0, aB = a55.length - 1; 0 <= aB; aB--)
				if (a7R = a7W(aB), a7S = a7X(aB), a7T = a55[aB].canvas.width, a7S - a7V <= lS && lS <= a7S + x4 + a7V) {
					if (a7R - a7U <= lR && lR <= a7R + x4 + a7U) return a55[aB].a7Q || (a55[aB].a7H = !0, a55[aB].a7Q = !0, 0 === a55[aB].id ? b8.hF.pJ(a55[aB].jL) : b8.hF.pI(a55[aB].jL)), !0;
					if (0 === a55[aB].id && a7R + a7T - x4 - a7U <= lR && lR <= a7R + a7T + a7U) return bV.a5X(3), b8.hF.hM(aR.hJ(), a55[aB].jL), !0
				} return !1
	}, this.j5 = function() {
		var a2k, a2l, g, a7a;
		0 === ag.ml[aD.eZ] || bA.gB.jZ(aD.eZ) && !aD.gy || (a2k = a55.slice(0, a7D), a2l = a55.slice(a7D, a7D + a7E), g = a2k, a7a = ad.fw(aD.eZ), function(g, a7a) {
			if (a7D !== a7a) return 1;
			for (var aB = a7a - 1; 0 <= aB; aB--)
				if (g[aB].jL !== ad.g1(aD.eZ, aB)) return 1;
			return
		}(g, a7a) ? a7c(g = function(g, a7a) {
			var aB, jL, f9, hY, a6F = [];
			loop: for (aB = 0; aB < a7a; aB++) {
				for (jL = ad.g1(aD.eZ, aB), f9 = 0; f9 < g.length; f9++)
					if (g[f9].jL === jL) {
						a6F.push(g.splice(f9, 1)[0]);
						continue loop
					} hY = ad.g2(aD.eZ, aB), a7F(hY = {
					jL: jL,
					hY: hY,
					a7P: hY,
					id: 0,
					a7H: !0,
					a7Q: !1,
					canvas: null,
					yK: null
				}), a6F.push(hY)
			}
			return a6F
		}(g, a7a), a7a) : a7c(g, a7a), a2k = g, a2l = function(g) {
			var a7e = bN.y.kG[aD.eZ];
			return function(g, a7e) {
				if (a7E !== a7e) return 1;
				for (var tC = aD.eZ << 3, m5 = bN.y.m5, a7i = bN.y.a7i, aB = a7e - 1; 0 <= aB; aB--) {
					var a7j = a7i[tC + aB];
					if (g[aB].jL !== m5[a7j]) return 1
				}
				return
			}(g, a7e) ? a7g(g = function(g, a7e) {
				var aB, jL, f9, a6F = [],
					tC = aD.eZ << 3,
					m5 = bN.y.m5,
					a6g = bN.y.a6g,
					a7i = bN.y.a7i;
				loop: for (aB = 0; aB < a7e; aB++) {
					var a7j = a7i[tC + aB];
					for (jL = m5[a7j], f9 = 0; f9 < g.length; f9++)
						if (g[f9].jL === jL) {
							a6F.push(g.splice(f9, 1)[0]);
							continue loop
						} a7j = a6g[a7j], a7F(a7j = {
						jL: jL,
						hY: a7j,
						a7P: a7j,
						id: 1,
						a7H: !0,
						a7Q: !1,
						canvas: null,
						yK: null
					}), a6F.push(a7j)
				}
				return a6F
			}(g, a7e), a7e) : a7g(g, a7e), g
		}(a2l), a7D = a2k.length, a7E = a2l.length, a55 = a2k.concat(a2l))
	}, this.ul = function() {
		if (0 !== ag.ml[aD.eZ] && (!bA.gB.jZ(aD.eZ) || aD.gy))
			for (var aB = a55.length - 1; 0 <= aB; aB--) um.drawImage(a55[aB].canvas, a7W(aB), a7X(aB))
	}
}

function cH() {
	var a61, kH, a7l, a7m, j, a5o, fontSize, a7n, a7o, a7p, a7q, canvas, yK, my, a7r;

	function v3(aB) {
		return L(0 === aB ? 100 : 1 === aB ? 101 : 2 === aB ? 102 : 103)
	}

	function a7y() {
		aD.hj ? a7z + 4 * bc.gap + j + bh.a80() > aR.ey ? um.drawImage(canvas, 2 * bc.gap + bh.a80(), a7z + 2 * bc.gap) : um.drawImage(canvas, bc.gap, a7z + 3 * bc.gap + bh.a80()) : um.drawImage(canvas, bc.gap, a7z + 2 * bc.gap)
	}

	function a7s() {
		canvas.width = a61[0].width + a7p, canvas.height = j + a7p, (yK = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, a61[0].width + a7p, j + a7p), yK.translate(Math.floor(a7p / 2), Math.floor(a7p / 2)), yK.lineWidth = a7p, yK.fillStyle = 1 === a61[0].a7x ? bB.nq : bB.ni, a81(), yK.fill(), yK.strokeStyle = 1 === a61[0].a7x ? bB.nc :
			bB.nl, a81(), yK.stroke(), bA.qd.textAlign(yK, 1), bA.qd.textBaseline(yK, 1), yK.fillStyle = 1 === a61[0].a7x ? bB.nc : bB.nl, yK.font = a5o[0], yK.fillText(v3(a61[0].a7w), Math.floor(a61[0].width / 2), Math.floor(.72 * a7n[0] * j)), yK
			.font = a5o[1], yK.fillText(a61[0].qK, Math.floor(a61[0].width / 2), Math.floor((a7n[0] + .48 * a7n[1]) * j))
	}

	function a81() {
		yK.beginPath(), yK.moveTo(a7q, 0), yK.lineTo(a61[0].width - a7q, 0), yK.lineTo(a61[0].width, a7q), yK.lineTo(a61[0].width, j - a7q), yK.lineTo(a61[0].width - a7q, j), yK.lineTo(a7q, j), yK.lineTo(0, j - a7q), yK.lineTo(0, a7q), yK.closePath()
	}
	this.dd = function() {
		kH = 4, a7l = a7m = my = 0, a61 = [], a5o = new Array(2), fontSize = new Array(2), (a7n = new Array(2))[0] = .3, a7n[1] = .7, a7o = new Array(4), canvas = document.createElement("canvas"), a7r = bf.eO + 2e3, this.resize()
	}, this.resize = function() {
		var aB, i;
		for (j = Math.floor((a0.a1.hy() ? .062 : .047) * h.hz), fontSize[0] = Math.floor(.85 * a7n[0] * j), fontSize[1] = Math.floor(.85 * a7n[1] * j), a5o[0] = bA.qd.sS(1, fontSize[0]), a5o[1] = bA.qd.sS(1, fontSize[1]), aB = a7o.length -
			1; 0 <= aB; aB--) a7o[aB] = this.measureText(v3(aB) + "000", a5o[0]);
		if (a7p = Math.floor(1 + .05 * j), a7q = Math.floor(.2 * j), 0 < a61.length) {
			for (aB = a61.length - 1; 0 <= aB; aB--) i = this.measureText(a61[aB].qK + "00", a5o[1]), a61[aB].width = i < a7o[aB] ? a7o[aB] : i;
			a7s()
		}
	}, this.j5 = function() {
		0 !== kH && (4 === kH ? bf.eO > a7r && (kH = 0, 1 === aD.a0A) && aQ.a0W(bS.wX.wY[bS.eV].name, 3, 1, 9) : (1 === kH ? (0 === a7l && (a7s(), a7l = 1e-4), 1 <= (a7l += .002 * (bf.eO - my)) && (a7m = 0, kH = 2, a7l = 1), bf.dl = !0) : 2 ===
			kH ? ((a7m += (bf.eO - my) / 1e3) > a61[0].eG || 1 < a7m && 1 < a61.length) && (kH = 3) : 3 === kH && ((a7l -= .002 * (bf.eO - my)) <= 0 && (a7l = 0, a61.shift(), kH = 0 < a61.length ? 1 : 0), bf.dl = !0), my = bf.eO))
	}, this.measureText = function(qK, a5o) {
		return um.font = a5o, Math.floor(um.measureText(qK).width)
	}, this.jI = function(a7v, aB) {
		this.a0W(ag.yd[a7v], aB, 1, 0 === aB ? 3 : 7)
	}, this.a0W = function(qK, a7w, a7x, eG) {
		var i;
		qK.length && (i = (i = this.measureText(qK + "00", a5o[1])) < a7o[a7w] ? a7o[a7w] : i, a61.push({
			qK: qK,
			width: i,
			a7w: a7w,
			a7x: a7x,
			eG: eG
		}), 0 === kH) && (a7l = 0, kH = 1, my = bf.eO)
	}, this.ul = function() {
		0 !== kH && 0 !== a7l && (a7l < 1 ? (um.globalAlpha = a7l, a7y(), um.globalAlpha = 1) : a7y())
	}
}

function cq() {
	var j, canvas, yK, a82, a83, a84, a85, a7H, a86, a87, a88, a89, a6m = !1,
		a2y = (this.hb = !1, this.i = 0, new Array(2)),
		a8A = 0;

	function mY() {
		var i = aw.i,
			l7 = (a7H = !1, yJ(yK, i, j), Math.floor(i / 2));
		1 === a82 ? (yK.fillStyle = bB.o5, yK.fillRect(l7, 0, l7, j)) : -1 === a82 && (yK.fillStyle = bB.oL, yK.fillRect(0, 0, l7, j)), yL(yK, i, j, 2);
		var l7 = (l7 = Math.floor(.25 * j)) < 2 ? 2 : l7,
			a6v = (yK.fillStyle = bB.nr, Math.floor((j - 4) * a83[1] / a84[1]));
		0 < a6v && yK.fillRect(2, j - 2 - a6v, l7, a6v), 0 < (a6v = Math.floor((j - 4) * a83[0] / a84[0])) && yK.fillRect(i - 2 - l7, j - 2 - a6v, l7, a6v);
		l7 = (l7 = Math.floor(j / 8)) < 2 ? 2 : l7, yN(yK, Math.floor(.4 * j), 0, j, l7, .5, !1), yN(yK, Math.floor(i - 1.4 * j), 0, j, l7, .5, !0), a6v = 1.1 * j / a2y[0].width;
		yK.imageSmoothingEnabled = !0, yK.setTransform(a6v, 0, 0, a6v, (i - a6v * a2y[0].width) / 2, -.05 * j), yK.drawImage(a2y[+a6m], 0, 0), yK.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a8F() {
		a89 = -1, a6m = ah.a8G(), aN.a4S(257), aN.a6l(a6m), aw.hb = !0, a7H = !0, a86 = 360;
		for (var fH, dt = 0, aB = al.ki - 1; 0 <= aB; aB--) bA.gB.jZ(al.kn[aB]) || (dt += ag.gd[al.kn[aB]]);
		a6m ? a84[0] = Math.max(bL.du(3 * dt, 4), 1) : aD.hj ? 9 === aD.kU && 8 === bg.kZ[bh.kl()] ? a84[0] = Math.max(dt, 1) : (fH = bL.du(100 * bh.kj(), aD.jw), fH = bL.hx(200 - 2 * fH, 40, 100), fH = bL.du(fH * dt, 100), a84[0] = Math.max(fH,
			1)) : 8 === aD.kU ? a84[0] = Math.max(bL.du(3 * dt, 4), 1) : a84[0] = Math.max(bL.du(3 * dt, 5), 1), a84[1] = Math.max(dt - a84[0], 1)
	}

	function a8B() {
		a88 = bf.k9(), a7H = !0, a86 = a82 = 0, a85 = [], aw.hb = !1, aN.a0H(247), a83[0] = a83[1] = 0, aN.a4S(673)
	}

	function yG() {
		return aR.a6Q(aN.a6M()) ? __fx.settings.keybindButtons ? aR.ey - 2 * (j + bc.gap) : aR.ey - j - bc.gap : bC.a6Q(aN.a6P()) ? bC.yG() - j - bc.gap : h.j - j - bk.a5D() * bc.gap
	}
	this.de = function() {
		for (var aB = 0; aB < 2; aB++) a2y[aB] = bA.canvas.yu(ab.get(3), 8 - aB, bB.ox), a2y[aB] = bA.canvas.a30(a2y[aB])
	}, this.dd = function() {
		a88 = -1e4, a87 = a8A = 0, a89 = -1, this.hb = !1, a7H = a6m = !1, a83 = [a82 = a86 = 0, 0], a84 = [1, 1], a85 = [], this.resize()
	}, this.resize = function() {
		j = aR.j, this.i = 4 * j, (canvas = document.createElement("canvas")).width = this.i, canvas.height = j, yK = canvas.getContext("2d", {
			alpha: !0
		}), mY()
	}, this.mX = function() {
		a7H && mY()
	}, this.h2 = function(ew, ey) {
		return !!this.hb && !(ew < h.i - this.i - bc.gap || ey < yG() || (aD.gy || this.hc(aD.eZ) && (aM.gz && aM.a2F(), b8.hF.hd(ew > h.i - bc.gap - this.i / 2 ? 1 : 0)), 0))
	}, this.j5 = function() {
		0 < a87 ? 0 === --a87 && a8B() : this.hb ? 180 == --a86 && 3 * a83[0] < a84[0] ? a8B() : a83[0] >= a84[0] ? a6m ? bR.zm.a05() : bR.zm.a09() : a83[1] >= a84[1] ? a87 = 4 : a86 <= 0 && a8B() : ! function() {
			var a8I = bf.k9();
			if (a8I % 40 == 14) {
				if (a8A) return !(a8I < a8A) && !(a8I < a88 + 535) && (a8A = a8I + 1071, bA.gB.a3X()) ? (a8F(), 1) : 0;
				(1 === al.ki || (aD.hj ? bh.kj() : ag.gd[ln[0]]) >= bL.du(96 * aD.jw, 100)) && (a8A = a8I + 535)
			}
			return
		}() && 0 <= a89 && (aN.yc(250, L(104, [ag.yd[a89]]), 673, a89, bB.nl, bB.ni, -1, !0), a8F())
	}, this.a0B = function() {
		this.hb && a83[0] < a84[0] && a8B()
	}, this.qD = function(player, a8J) {
		var a8K = L(a8J ? 105 : 106, [ag.yd[player]]),
			a8K = (aN.yc(450, a8K, 257, player, a8J ? bB.o3 : bB.oI, bB.ni, -1, !0), a85.push(player), a7H = !0, aD.kW ? Math.max(a84[0], a84[1]) : ag.gd[player]),
			a8K = Math.max(a8K, 1);
		a8J ? a83[0] += a8K : a83[1] += a8K, player === aD.eZ && (a82 = a8J ? 1 : -1)
	}, this.ul = function() {
		var ey;
		this.hb && (ey = yG(), um.drawImage(canvas, h.i - this.i - bc.gap, ey))
	}, this.he = function(player) {
		return 0 === a86 && !!bA.gB.h0(1) && !!bA.gB.h1(player) && !(10 <= jx[player] && !bA.gB.a3q(player, 9) || !aD.kW && ((player = bf.k9()) < a88 + 100 || player < 1607 || 9 === aD.kU && !bh.a8M()))
	}, this.hc = function(gN) {
		if (!bA.gB.h0(1)) return !1;
		if (!bA.gB.h1(gN)) return !1;
		if (!this.hb) return !1;
		for (var aB = a85.length - 1; 0 <= aB; aB--)
			if (a85[aB] === gN) return !1;
		return !0
	}, this.ha = function(player) {
		a89 = player
	}
}

function cI() {
	var i, ew, a8N, canvas, yK, hb, iP, a4J, a5o, a7H, a8O = 11 / 12;

	function a8Q() {
		var a7O = Math.floor(iP * (i - 2 * a8N)),
			a8T = 1 + Math.floor(.0625 * aR.j),
			a8U = 1 + Math.floor(.3 * aR.j),
			a8V = Math.floor(.55 * aR.j);
		yK.clearRect(0, 0, i, aR.j), yK.fillStyle = bB.nh, yK.fillRect(0, 0, a8N, aR.j), yK.fillRect(a8N + a7O, 0, i - a8N - a7O, aR.j), yK.fillStyle = iP < 1 / 3 ? "rgba(" + Math.floor(3 * iP * 130) + ",130,0,0.85)" : iP < 2 / 3 ? "rgba(130," + (
				130 - Math.floor(3 * (iP - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (iP - 2 / 3) * 130) + ",0.85)", yK.fillRect(a8N, 0, a7O, aR.j), yK.fillStyle = bB.nl, yK.fillRect(0, 0, i, 1), yK.fillRect(0, aR.j - 1, i, 1), yK
			.fillRect(0, 0, 1, aR.j), yK.fillRect(a8N, 0, 1, aR.j), yK.fillRect(a8N + a7O, 0, 1, aR.j), yK.fillRect(i - a8N, 0, 1, aR.j), yK.fillRect(i - 1, 0, 1, aR.j), yK.fillRect(Math.floor(.25 * aR.j) + a8U, Math.floor((aR.j - a8T) / 2), aR.j -
				2 * a8U, a8T), yK.fillRect(Math.floor(i - 1.25 * aR.j) + a8U, Math.floor((aR.j - a8T) / 2), aR.j - 2 * a8U - a8U % 2, a8T), yK.fillRect(Math.floor(i - 1.25 * aR.j) + Math.floor((aR.j - a8T) / 2), a8U, a8T, aR.j - 2 * a8U - a8U % 2),
			a4J = bA.gB.iO(aD.eZ, aR.hJ()), yK.fillText(bA.rc.zR(a4J) + " (" + bA.rc.a4C(100 * iP, +(iP < .1)) + ")", Math.floor(.5 * i), a8V)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		iP = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => aR.a2B(arg1);

	function a8a(a2X) {
		return !(1 < a2X && 1 === iP || (1 < a2X && a2X * iP - iP < 1 / 1024 ? a2X = (iP + 1 / 1024) / iP : a2X < 1 && iP - a2X * iP < 1 / 1024 && (a2X = (iP - 1 / 1024) / iP), iP = bL.hx(iP * a2X, 1 / 1024, 1), a8Q(), 0))
	}

	function a8b(lR) {
		return iP !== (iP = bL.hx((lR - ew - a8N) / (i - 2 * a8N), 1 / 1024, 1)) && (a8Q(), !0)
	}
	__fx.keybindFunctions.repaintAttackPercentageBar = function() {
		a8Q(), bf.dl = !0
	}, this.ey = 0, this.h3 = !1, this.dd = function() {
		hb = !aD.hD && !aD.gy, a7H = !1, iP = .5, a4J = 0, this.h3 = !1, this.resize()
	}, this.resize = function() {
		a0.a1.hy() && h.i < .8 * h.j ? (this.j = Math.floor(.066 * h.hz), i = h.i - 4 * bc.gap - this.j) : (i = Math.floor((a0.a1.hy() ? .65 : .389) * h.hz), i += 12 - i % 12, this.j = Math.floor(i / 12)), a8N = Math.floor(3 * this.j / 2), a5o =
			bA.qd.sS(1, Math.floor(.5 * this.j)), (canvas = document.createElement("canvas")).width = i, __fx.mobileKeybinds.setSize(i, this.j, um), canvas.height = this.j, (yK = canvas.getContext("2d", {
				alpha: !0
			})).font = a5o, bA.qd.textBaseline(yK, 1), bA.qd.textAlign(yK, 1), this.a8P(), a8Q()
	}, this.a8P = function() {
		ew = a0.a1.hy() && h.i < .8 * h.j ? this.j + 3 * bc.gap : Math.floor((h.i - i) / 2), this.ey = h.j - this.j - bk.a5D() * bc.gap
	}, this.mX = function() {
		a7H && (a7H = !1, a8Q())
	}, this.hb = function() {
		return !(!hb || aM.gz && ew < Math.floor(bc.gap + 5.5 * this.j))
	}, this.a6Q = function(a8W) {
		return !!this.hb() && ew + i > h.i - a8W - bc.gap
	}, this.a4Q = function() {
		hb = !aD.gy
	}, this.a8B = function() {
		hb = !1
	}, this.hJ = function() {
		return bL.hx(Math.floor(1024 * iP + .5) - 1, 0, 1023)
	}, this.a28 = function(lR, lS) {
		return this.hb() && ew < lR && lR < ew + i && lS > this.ey
	}, this.h2 = function(lR, lS) {
		if (!this.hb()) return !1;
		if (!(__fx.settings.keybindButtons && lS > this.ey - Math.floor(bc.gap / 4) - this.j && lS < this.ey - Math.floor(bc.gap / 4) && __fx.mobileKeybinds.click(lR - ew))) {
			if (!aR.a28(lR, lS)) return !1;
			aS.nG = !1, ! function(sF, lR, lS) {
				if (function(lR, lS) {
						return ew < lR && lR < ew + a8N && lS > aR.ey
					}(lR, lS)) return a8a(a8O);
				if (function(lR, lS) {
						return ew + i - a8N < lR && lR < ew + i && lS > aR.ey
					}(lR, lS)) return a8a(1 / a8O);
				return sF.h3 = !0, a8b(lR)
			}(this, lR, lS) || (bf.dl = !0)
		}
		return !0
	}, this.a2B = function(nN) {
		0 !== aD.a0A && this.hb() && a8a(nN) && (bf.dl = !0)
	}, this.a1h = function(deltaY) {
		var nN;
		return !(0 === deltaY || !this.hb()) && a8a(nN = 0 < deltaY ? (nN = 400 / (400 + deltaY)) < a8O ? a8O : nN : 1 / a8O < (nN = (400 - deltaY) / 400) ? 1 / a8O : nN)
	}, this.a1e = function(lR) {
		return !!this.h3 && a8b(lR)
	}, this.a24 = function() {
		this.h3 = !1
	}, this.j5 = function() {
		this.hb() && a4J !== bA.gB.iO(aD.eZ, this.hJ()) && (a7H = !0)
	}, this.ul = function() {
		this.hb() && (um.drawImage(canvas, ew, this.ey), __fx.settings.keybindButtons) && __fx.mobileKeybinds.draw(um, ew, this.ey)
	}
}

function d0() {
	var canvas, yK, a8c, font, a8d = 0,
		a8e = !1,
		a8f = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		a8g = 5;

	function a8n() {
		if (a8e) {
			var aB, ep = a8f.length,
				a8V = Math.floor(.5 * a8c.j),
				j = ep * a8V,
				ew = Math.floor(Math.floor(a8c.ew) + .3 * a8c.i - .5),
				ey = Math.floor(Math.floor(a8c.ey) - j),
				i = Math.floor(.4 * a8c.i + 2.5);
			for (um.fillStyle = bB.nh, um.fillRect(ew, ey, i, j), um.fillStyle = bB.oA, um.fillRect(ew, ey + a8g * a8V, i, a8V), um.fillStyle = bB.nl, um.fillRect(ew, ey, 2, j), um.fillRect(ew, ey, i, 2), um.fillRect(ew + i - 2, ey, 2, j), aB =
				1; aB < ep; aB++) um.fillRect(ew, ey + aB * a8V, i, 2);
			for (um.fillStyle = bB.nl, bA.qd.textAlign(um, 1), bA.qd.textBaseline(um, 1), um.font = bA.qd.sS(0, .6 * a8V), ew += .5 * i, aB = 0; aB < ep; aB++) um.fillText(a8v(aB), ew, ey + (aB + .6) * a8V)
		}
		um.drawImage(canvas, Math.floor(a8c.ew), Math.floor(a8c.ey))
	}

	function mY(sF) {
		var ew, nB, nC, a8V;
		yK.clearRect(0, 0, Math.floor(a8c.i), Math.floor(a8c.j)), yK.fillStyle = bB.nh, yK.fillRect(0, 0, Math.floor(a8c.i), Math.floor(a8c.j)), aD.nE && (yK.fillStyle = bB.oA, yK.fillRect(0, 0, Math.floor(.3 * a8c.i), Math.floor(a8c.j))), yK
			.fillStyle = bB.nl, yK.fillText("Hide UI", .15 * a8c.i, .5 * a8c.j), yK.fillRect(Math.floor(.3 * a8c.i - .5), 0, 2, Math.floor(a8c.j)), ew = .5 * a8c.i, yK.fillText("Replay Speed", ew, .31 * a8c.j), yK.fillText(a8v(a8g), ew, .69 * a8c.j),
			yK.fillRect(Math.floor(.7 * a8c.i - .5), 0, 2, Math.floor(a8c.j)), sF.a4x ? (ew = Math.floor(.02 * a8c.i), sF = Math.floor(.025 * a8c.i), nB = Math.floor(.85 * a8c.i - ew - .5 * sF), nC = Math.floor(.25 * a8c.j), a8V = Math.floor(a8c.j) -
				2 * nC, yK.fillRect(nB, nC, ew, a8V), yK.fillRect(nB + ew + sF, nC, ew, a8V)) : function() {
				var i = Math.floor(.46 * a8c.j),
					j = Math.floor(.23 * a8c.j),
					ew = Math.floor(.85 * a8c.i - .5 * i + i / 12),
					ey = Math.floor(.5 * a8c.j - j);
				yK.beginPath(), yK.moveTo(ew, ey), yK.lineTo(ew + i, ey + j), yK.lineTo(ew, ey + (j << 1)), yK.fill()
			}(), yK.fillRect(0, 0, Math.floor(a8c.i), 2), yK.fillRect(0, 0, 2, Math.floor(a8c.j)), yK.fillRect(0, Math.floor(a8c.j) - 2, Math.floor(a8c.i), 2), yK.fillRect(Math.floor(a8c.i - 2), 0, 2, Math.floor(a8c.j))
	}

	function a8v(aB) {
		return 5 === aB ? "Normal" : "" + a8f[aB]
	}
	this.a4x = !1, this.dd = function() {
		aD.gy && (a8g = 5, this.a4x = !1, a8e = !1, a8c = new rE([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.a8h = function() {
		return a8f[a8g]
	}, this.yG = function() {
		return a8c.ey
	}, this.a6Q = function(a8W) {
		return !!aD.gy && a8c.ew + a8c.i > h.i - a8W - bc.gap
	}, this.resize = function() {
		aD.gy && (a8c.resize(), a8c.ey -= (bk.a5D() - 1) * bc.gap, font = bA.qd.sS(0, .3 * a8c.j), (canvas = document.createElement("canvas")).width = Math.floor(a8c.i), canvas.height = Math.floor(a8c.j), (yK = canvas.getContext("2d", {
			alpha: !0
		})).font = font, bA.qd.textAlign(yK, 1), bA.qd.textBaseline(yK, 1), mY(this))
	}, this.a2E = function(a8i) {
		0 === aD.a0A || t.hb() || a8i !== aD.nE && (aD.nE = a8i, bh.resize(), bf.dl = !0, aD.gy) && (a8d = bf.eO + 2e3, mY(this))
	}, this.h2 = function(ew, ey) {
		if (!aD.gy) return !1;
		if (ew < a8c.ew || ey < a8c.ey || ew > a8c.ew + a8c.i) return a8e && function(sF, ew, ey) {
			var ep = a8f.length,
				a8V = Math.floor(.5 * a8c.j),
				j = ep * a8V,
				nB = Math.floor(Math.floor(a8c.ew) + .3 * a8c.i - .5),
				j = Math.floor(Math.floor(a8c.ey) - j),
				i = Math.floor(.4 * a8c.i + 2.5);
			return a8e = !1, bf.dl = !0, ew < nB || nB + i < ew || ey < j || (a8g = a8m(0, Math.floor((ey - j) / a8V), ep - 1), mY(sF)), !0
		}(this, ew, ey);
		if ((ew -= a8c.ew) < .3 * a8c.i) a8e = !1, this.a2E(!aD.nE);
		else {
			if (ew < .7 * a8c.i) return a8e = !a8e, bf.dl = !0;
			this.a2G(!1)
		}
		return !0
	}, this.a2G = function(a8k) {
		2 === aD.a0A ? (this.a2E(!1), t.u(3)) : (a8e = !1, this.a4x = !this.a4x, this.a4x ? (aM.gz && aM.a2F(), a0.a1.setState(1)) : a8k || aM.a5u(), bf.dl = !0, mY(this))
	}, this.a8l = function() {
		this.a4x = !1, aM.a5u(), bf.dl = !0, mY(this)
	}, this.a1x = function(ew, ey) {
		return !!aD.nE && (0 <= aM.h2(ew, ey) || (aD.gy ? ((bf.eO > a8d || !this.h2(ew, ey)) && aS.h2(ew, ey), bf.dl = !0, a8d = bf.eO + 2e3) : aS.h2(ew, ey)), !0)
	}, this.j5 = function() {
		aD.gy && aD.nE && bf.eO > a8d - 1e3 && bf.eO < a8d && (bf.dl = !0)
	}, this.a0I = function() {
		aD.gy && (this.a4x = !1, bf.dl = !0, mY(this))
	}, this.ul = function() {
		if (aD.gy) {
			if (aD.nE) {
				if (bf.eO > a8d) return;
				if (bf.eO > a8d - 1e3) return um.globalAlpha = a8m(0, (1e3 - (bf.eO - (a8d - 1e3))) / 1e3, 1), a8n(), void(um.globalAlpha = 1)
			}
			a8n()
		}
	}
}

function cJ() {
	var a8w, a8x, i, ew, ey, a8y, a8z;
	this.dd = function() {
		a8w = new Array(2), a8x = new Array(2), this.nG = !1, a8z = a8y = iR = iQ = 0, i0 = 1, this.resize()
	}, this.resize = function() {
		i = (i = Math.floor((a0.a1.hy() ? .072 : .0502) * h.hz)) < 8 ? 8 : i;
		for (var aB = 1; 0 <= aB; aB--) a8w[aB] = document.createElement("canvas"), a8w[aB].width = i, a8w[aB].height = i, a8x[aB] = a8w[aB].getContext("2d", {
			alpha: !0
		});
		this.a8P(),
			function() {
				for (var a9G = Math.floor(1 + i / 20), aB = 1; 0 <= aB; aB--) a8x[aB].clearRect(0, 0, i, i), a8x[aB].fillStyle = bB.ne, a8x[aB].beginPath(), a8x[aB].arc(i / 2, i / 2, i / 2 - a9G, 0, 2 * Math.PI), a8x[aB].fill(), a8x[aB]
					.lineWidth = a9G, a8x[aB].fillStyle = bB.nl, a8x[aB].strokeStyle = bB.nl, a8x[aB].beginPath(), a8x[aB].arc(i / 2, i / 2, i / 2 - a9G, 0, 2 * Math.PI), a8x[aB].stroke(), yN(a8x[aB], 0, 0, i, a9G, .3, 0 === aB)
			}()
	}, this.yF = function() {
		return -iQ / i0
	}, this.yG = function() {
		return -iR / i0
	}, this.nQ = function(a93, i6) {
		iQ = i0 * a93 - i6
	}, this.nR = function(a94, i7) {
		iR = i0 * a94 - i7
	}, this.h2 = function(a92, a6R) {
		return aD.nE || ! function(a92, a6R) {
			return Math.pow(a92 - (ew + i / 2), 2) + Math.pow(a6R - (ey + i / 2), 2) < i * i / 4 || Math.pow(a92 - (ew + i / 2), 2) + Math.pow(a6R - (ey + 2 * i), 2) < i * i / 4
		}(a92, a6R) || bj.eL.data[8].value ? (aH.nT() && (this.nG = !0, a8y = a92, a8z = a6R), !1) : a6R < ey + 1.25 * i ? this.a1h(Math.floor(h.i / 2), Math.floor(h.j / 2), -200) : this.a1h(Math.floor(h.i / 2), Math.floor(h.j / 2), 200)
	}, this.a1e = function(a92, a6R) {
		var a95, a96, i9, iC;
		return !aH.nT() || (a95 = iQ, a96 = iR, iQ += i9 = a8y - a92, iR += iC = a8z - a6R, af.a1e(i9, iC), this.a97(), a8y = a92, a8z = a6R, a95 !== iQ) || a96 !== iR
	}, this.a1h = function(lR, lS, deltaY) {
		var nN;
		if (aH.nT()) {
			if (0 < deltaY) nN = (nN = 500 / (500 + deltaY)) < .5 ? .5 : nN;
			else {
				if (!(deltaY < 0)) return !1;
				nN = 2 < (nN = (500 - deltaY) / 500) ? 2 : nN
			}
			this.a98(lR, lS, nN), bf.dl = !0
		}
		return !0
	}, this.a98 = function(ew, ey, eT) {
		var a2X;
		eT = a2X = (a2X = 1024 < (a2X = eT) * i0 ? 1024 / i0 : a2X) * i0 < .125 ? .125 / i0 : a2X, af.zoom(eT, ew, ey),
			function(a2X, lR, lS) {
				i0 *= a2X, iQ = (iQ + lR) * a2X - lR, iR = (iR + lS) * a2X - lS, aS.a97()
			}(eT, ew, ey)
	}, this.a97 = function() {
		var a9B = h.i / 16,
			a9C = 0,
			a9D = h.j / 16,
			a9E = 0;
		iQ < -h.i + a9B && (a9C = -h.i + a9B - iQ), iQ > i0 * bS.f0 - a9B && (a9C = i0 * bS.f0 - a9B - iQ), iR < -h.j + a9D && (a9E = -h.j + a9D - iR), iR > i0 * bS.f1 - a9D && (a9E = i0 * bS.f1 - a9D - iR), iQ += a9C, iR += a9E, ba.nS(), af.a9F(
			a9C, a9E)
	}, this.a8P = function() {
		ew = h.i - i - bc.gap, ey = Math.floor(h.j / 2 - 1.25 * i)
	}, this.ul = function() {
		bj.eL.data[8].value || (um.drawImage(a8w[0], ew, ey), um.drawImage(a8w[1], ew, Math.floor(ey + 3 * i / 2)))
	}
}

function cK() {
	var g, a9H, a9I, a9J, gap, a9K, a9L, a9M, a9N, a9O, a5o, a9P, gu, a9Q, a7O, a9R, a9S;

	function a9W() {
		a9J = Math.floor(.2 * (a0.a1.hy() ? .07 : .035) * h.hz), a9J = a6O(a0.a1.hy() ? 3 : 1, a9J);
		var a9Z = h.i / (g.length + gap);
		a9J = a9J < a9Z ? a9Z : a9J, a7O = Math.floor((1 - gap) * a9J), a9H = 0, a9a()
	}

	function a9a() {
		a9H = (a9H = a9H < -20 ? -20 : a9H) > (g.length - 15) * a9J ? (g.length - 15) * a9J : a9H, a9L = Math.floor(a9H / a9J), a9M = (a9M = a9L + Math.floor(h.i / a9J)) > g.length - 1 ? g.length - 1 : a9M, a9L = (a9L = a9M < a9L ? a9M : a9L) < 0 ?
			0 : a9L;
		var l7 = a9M;
		a9K = a9I / g[l7];
		for (var aB = a9M - 1; a9L <= aB; aB--) g[aB] > g[l7] && (l7 = aB, a9K = a9I / Math.pow(g[aB], a9Q))
	}

	function a9d(ew) {
		ew = Math.floor((a9H + h.i - ew - gap * a9J) / a9J);
		return (ew = ew < -1 ? -1 : -1 === ew ? 0 : ew > g.length - 1 ? -1 : ew) !== a9N && (a9N = ew, -1 === a9R && 0 === a9N && aT.a9T && (a9R = setInterval(a9e, 100)), 1)
	}

	function a9f(aB) {
		var a9h = Math.floor(a9K * Math.pow(g[aB], a9Q));
		um.fillRect(a9H + h.i - (aB + 1) * a9J, h.j - a9h, a7O, a9h)
	}

	function a9e() {
		var gN;
		0 !== (a9N = 8 === aa.a1L() ? -1 : a9N) ? (a9S = (new Date).getTime(), clearInterval(a9R), a9R = -1) : (gN = g[1] / 864e3, -1 !== a9S && (gN += ((new Date).getTime() - a9S) * g[1] / 864e5, a9S = -1), 0 < gN && (g[0] += Math.floor(gN), bf
			.dl = !0))
	}
	this.a9T = !1, this.dd = function() {
		a9S = a9R = -1, a9N = -(a9Q = 1), this.a9U = !1, gu = 0, a9P = new Date, a9H = 0, gap = .3, g = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], this.resize()
	}, this.resize = function() {
		a9I = Math.floor(.15 * h.j), a9O = (a9O = Math.floor((a0.a1.hy() ? .018 : .0137) * h.hz)) < 2 ? 2 : a9O, a5o = bA.qd.sS(1, a9O), a9W()
	}, this.a9X = function(a9Y) {
		var aB;
		for (this.a9T = !0, aB = 0; aB < a9Y.length; aB++) g.unshift(a9Y[aB]);
		a9W(), bf.dl = !0
	}, this.a9b = function() {
		a9a()
	}, this.a1e = function(ew, ey) {
		ey > h.j - .6 * a9I ? this.a9U ? ew !== gu && (a9H += ew - gu, gu = ew, a9a(), a9d(ew), this.a9U = -1 !== a9N, bf.dl = !0) : a9d(ew) && (bf.dl = !0) : this.re()
	}, this.re = function() {
		-1 !== a9N && (this.a9U = !1, a9N = -1, bf.dl = !0)
	}, this.a1h = function(ew, deltaY) {
		-1 !== a9N && (a9H += Math.floor(deltaY), a9a(), a9d(ew), bf.dl = !0)
	}, this.h2 = function(ew, ey) {
		this.a1e(ew, ey), -1 !== a9N && (gu = ew, this.a9U = !0)
	}, this.a23 = function() {
		-1 !== a9N && (this.a9U = !1)
	}, this.ul = function() {
		um.fillStyle = bB.no;
		for (var a9i, month, dt, t0, a9l, a9m, nC, a9n, a9o, aB = a9M; a9L <= aB; aB--) a9f(aB);
		this.a9T && 0 === a9L && (um.fillStyle = bB.oL, a9f(0)), -1 !== a9N && (um.fillStyle = bB.nn, a9f(a9N)), -1 !== a9N && (um.font = a5o, bA.qd.textBaseline(um, 2), (dt = new Date).setTime(a9P.getTime() - 1e3 * a9N * 60 * 60 * 24), month =
			"month", a9i = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(dt), a9i = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(dt)), a9i = a9i + ", " + dt.getUTCDate() + " " + month + " " + dt.getFullYear(), month = 1 === g[a9N] ? L(107) : L(108), month = bA.rc.zR(g[a9N]) + " " + month, dt = Math.floor(um.measureText(a9i).width), t0 = Math
			.floor(um.measureText(month).width), a9l = Math.floor(.5 * (dt + a9O)), a9m = (a9m = a9H + h.i - (a9N + 1) * a9J) < a9l ? a9l : a9m > h.i - a9l ? h.i - a9l : a9m, nC = h.j - Math.floor(a9K * Math.pow(g[a9N], a9Q)), a9n = Math
			.floor(1.1 * a9O), a9o = nC > h.j - a9n ? h.j - a9n : nC, um.fillStyle = bB.ni, um.fillRect(h.i - t0 - a9O, a9o - a9n, t0 + a9O, a9n), um.fillRect(a9m - a9l, h.j - a9n, dt + a9O, a9n), um.fillStyle = bB.nl, bA.qd.textAlign(um, 2),
			um.fillText(month, Math.floor(h.i - .5 * a9O), a9o), bA.qd.textAlign(um, 1), um.fillText(a9i, a9m, h.j), um.strokeStyle = bB.np, um.lineWidth = 1, um.beginPath(), um.moveTo(0, nC), um.lineTo(h.i, nC), um.closePath(), um.stroke())
	}
}

function cL() {
	var a5o, i, ey, a9p, a9q, a9r, canvas, yK, a7H, a3e, a9s, a9t, a9u, a9v;
	this.ew = 0, this.j = 0, this.dd = function() {
		a9r = aD.a4Y, a9t = "rgba(0,100,0,0.8)", a9u = "rgba(150,0,0,0.8)", a7H = a9s = !0, a3e = ag.gr[aD.eZ], this.resize()
	}, this.resize = function() {
		i = Math.floor((a0.a1.hy() ? .305 : .24) * h.hz), this.j = Math.floor(.5 + .13 * i), i = Math.floor(6 * this.j), a5o = bA.qd.sS(1, Math.floor(.8 * this.j)), a9q = bA.qd.sS(1, Math.floor(.45 * this.j)), a9v = Math.floor(.5 * this.j), bS.wd
			.font = a5o, ey = bc.gap, a9p = Math.floor(1 + .13 * this.j), (canvas = document.createElement("canvas")).width = i, canvas.height = this.j, yK = canvas.getContext("2d", {
				alpha: !0
			}), bA.qd.textBaseline(yK, 1), bA.qd.textAlign(yK, 1), this.a9w()
	}, this.a7k = function() {
		return a0.a1.hy() && h.i < 1.2 * h.j
	}, this.a8P = function() {
		this.a7k() ? this.ew = h.i - i - bc.gap : this.ew = Math.floor(aV.a9x() + (h.i - aV.a9x() - aW.i - i) / 2 - .5 * bc.gap)
	}, this.mX = function() {
		a7H && (a7H = !1, this.a9w())
	}, this.a9w = function() {
		yK.font = a5o, yK.clearRect(0, 0, i, this.j), yK.fillStyle = a9s ? a9t : a9u, yK.fillRect(0, 0, i, this.j), yK.fillStyle = bB.nn;
		var fA = this.a9y(),
			aA0 = (this.a9z(), yK.fillStyle = ag.gr[aD.eZ] >= ae.js(aD.eZ) ? bB.oI : bB.nl, bA.rc.zR(a3e)),
			aA0 = (yK.fillText(aA0, Math.floor(i / 2), a9v), yK.measureText(aA0).width),
			fA = (yK.font = a9q, yK.fillStyle = 9 === fA ? bB.or : bB.nl, ae.aA2),
			aA3 = "+" + fA,
			t0 = yK.measureText(aA3).width,
			aA4 = Math.floor(this.j / 12),
			aA0 = .5 * (i + aA0) + aA4;
		(aA0 + t0 + a9p <= i || 1e3 <= fA && (aA3 = "+" + Math.floor(fA / 1e3) + "K", aA0 + (t0 = yK.measureText(aA3).width) + a9p <= i)) && yK.fillText(aA3, Math.floor(aA0 + .5 * t0), Math.floor(.3 * this.j)), yK.fillStyle = bB.nl, yK.fillRect(
			0, 0, i, 1), yK.fillRect(0, 0, 1, this.j), yK.fillRect(0, this.j - 1, i, 1), yK.fillRect(i - 1, 0, 1, this.j)
	}, this.a9y = function() {
		var fA = bf.k9() % 100,
			xI = (fA = 9 - bL.du(fA -= fA % 10, 10), Math.floor(fA * (this.j - a9p) / 9));
		return yK.fillRect(0, xI, a9p, this.j - xI), yK.fillRect(i - a9p, xI, a9p, this.j - xI), fA
	}, this.a9z = function() {
		yK.fillRect(a9p, this.j - a9p, Math.floor((i - 2 * a9p) * ag.gr[aD.eZ] / a9r), a9p)
	}, this.j5 = function() {
		var gN = aD.eZ;
		bA.gB.h1(gN) && (gN = ag.gr[gN] - ag.a3d[gN], a3e !== gN ? (a9r = a6O(gN, a9r), a9s = a3e < gN && 10 <= gN, a3e = gN, a7H = !0) : bf.k9() % 10 == 9 && (a7H = !0))
	}, this.ul = function() {
		0 === ag.ml[aD.eZ] || aD.hD || 2 === ag.a3U[aD.eZ] || um.drawImage(canvas, this.ew, ey)
	}
}

function cM() {
	var aA5, aA6, aA7, aA8, aA9, aAA, aAB, aAC, aAD, aAE, aAF, aAG, aAH, aAI, aAJ, aAK, aAL, aAM, aAN, aAO, aAP, aAQ, position, aAR, aAS, aAT, aAU, aAV = 1,
		aAW = 1,
		aAX = "";
	var leaderboardHasChanged = true;
	this.playerPos = aD.eZ;
	__fx.leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		__fx.leaderboardFilter.filteredLeaderboard = __fx.leaderboardFilter.playersToInclude
			.map(id => jx[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = __fx.leaderboardFilter.filteredLeaderboard.indexOf(jx[aD.eZ]);
	}

	function aAZ() {
		aAB.clearRect(0, 0, aA5, a7z),
			aAB.fillStyle = bB.ob,
			aAB.fillRect(0, 0, aA5, aAG),
			aAB.fillStyle = bB.nh,
			aAB.fillRect(0, aAG, aA5, a7z - aAG);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			jx[aD.eZ]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) aAQ = -1;
		if (__fx.leaderboardFilter.enabled && aAQ >= __fx.leaderboardFilter.filteredLeaderboard.length) aAQ = -1;
		playerPos >= position && aAb(playerPos - position, bB.oA),
			0 !== jx[aD.eZ] && 0 === position && aAb(0, bB.oi),
			-1 !== aAQ && aAb(aAQ, bB.nm),
			aAB.fillStyle = bB.nh,
			//console.log("drawing", aAQ),
			aAB.clearRect(0, a7z - __fx.leaderboardFilter.tabBarOffset, aA5, __fx.leaderboardFilter.tabBarOffset);
		aAB.fillRect(0, a7z - __fx.leaderboardFilter.tabBarOffset, aA5, __fx.leaderboardFilter.tabBarOffset);
		aAB.fillStyle = bB.nl,
			aAB.fillRect(0, aAG, aA5, 1),
			aAB.fillRect(0, a7z - __fx.leaderboardFilter.tabBarOffset, aA5, 1),
			__fx.leaderboardFilter.drawTabs(aAB, aA5, a7z - __fx.leaderboardFilter.tabBarOffset, bB.oA),
			aAB.fillRect(0, 0, aA5, bc.z8),
			aAB.fillRect(0, 0, bc.z8, a7z),
			aAB.fillRect(aA5 - bc.z8, 0, bc.z8, a7z),
			aAB.fillRect(0, a7z - bc.z8, aA5, bc.z8), aAB.font = aA6, bA.qd.textBaseline(aAB, 1), bA.qd.textAlign(aAB, 1), aAB.fillText(aAX, Math.floor((aA5 + aAG - 22) / 2), Math.floor(aAE + aA7 / 2));
		__fx.playerList.drawButton(aAB, 12, 12, aAG - 22);
		var f8, gO = playerPos < position + aA9 - 1 ? 1 : 2;

		if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - aA9)
				position = (result.length > aA9 ? result.length : aA9) - aA9;
			//if (position >= result.length) position = result.length - 1;
			for (aAB.font = aA8, bA.qd.textAlign(aAB, 0), f8 = aA9 - gO; 0 <= f8; f8--) {
				const pos = result[f8 + position];
				if (pos !== undefined)
					aAc(ln[pos]), aAd(f8, pos, ln[pos]);
			}
			for (bA.qd.textAlign(aAB, 2), f8 = aA9 - gO; 0 <= f8; f8--) {
				const pos = result[f8 + position];
				if (pos !== undefined)
					aAc(ln[pos]), aAe(f8, ln[pos]);
			}
		} else {
			for (aAB.font = aA8, bA.qd.textAlign(aAB, 0), f8 = aA9 - gO; 0 <= f8; f8--)
				aAc(ln[f8 + position]), aAd(f8, f8 + position, ln[f8 + position]);
			for (bA.qd.textAlign(aAB, 2), f8 = aA9 - gO; 0 <= f8; f8--)
				aAc(ln[f8 + position]), aAe(f8, ln[f8 + position]);
		}
		2 == gO && (aAc(aD.eZ), bA.qd.textAlign(aAB, 0), aAd(aA9 - 1, jx[aD.eZ], aD.eZ), bA.qd.textAlign(aAB, 2), aAe(aA9 - 1, aD.eZ)), 0 === position && (gO = .7 * aAH / ab.get(4).height, aAB.setTransform(gO, 0, 0, gO, Math.floor(aAI + .58 * aAH +
			.5 * gO * ab.get(4).width), Math.floor(aAE + aA7 + .4 * aAH)), aAB.imageSmoothingEnabled = !0, aAB.drawImage(ab.get(4), -Math.floor(ab.get(4).width / 2), -Math.floor(ab.get(4).height / 2)), aAB.setTransform(1, 0, 0, 1, 0, 0))
	}

	function aAc(player) {
		aD.hj && (aAB.fillStyle = bg.aAg[bg.aAh[player]])
	}

	function aAb(aB, aAi) {
		aAB.fillStyle = aAi, aB = aA9 - 1 < aB ? aA9 - 1 : aB;
		aAi = Math.floor((aB === aA9 - 1 ? 2 : 0 === aB ? 1.15 : 1) * aAH), aAi = aB === aA9 - 2 ? Math.floor(aAG + 9.15 * aAH) - Math.floor(aAG + 8.15 * aAH) : aAi;
		aAB.fillRect(0, Math.floor(aAG + (aB + (0 === aB ? 0 : .15)) * aAH), aA5, aAi)
	}

	function aAd(aAk, a3s, aB) {
		aAB.fillText(aAM[a3s], aAI, Math.floor(aAE + aA7 + (aAk + .5) * aAH)), 1 === ag.a3U[aB] && (aAB.font = "italic " + aA8);
		a3s = Math.floor(aAE + aA7 + (aAk + .5) * aAH);
		aAB.fillText(ag.yd[aB], aAJ, a3s), 0 !== ag.a3U[aB] && (aAB.font = aA8), aB < aD.kC && 2 !== ag.a3U[aB] || aAB.fillRect(aAJ, a3s + .35 * aAV, aAL[aB], Math.max(1, .1 * aAV))
	}

	function aAe(aAk, aB) {
		aAB.fillText(ag.gd[aB], aAK, Math.floor(aAE + aA7 + (aAk + .5) * aAH))
	}

	function aAt(ey) {
		return (ey -= bc.gap + aAG) < 0 ? Math.floor(ey / aAH) - 1 : ey < (aA9 - 1) * aAH ? Math.floor(ey / aAH) : ey < a7z - aAG ? aA9 - 1 : (ey -= a7z - aAG, aA9 + Math.floor(ey / aAH))
	}

	function z7(ew, ey) {
		return ew >= bc.gap && ew < bc.gap + aA5 && ey >= bc.gap && ey < bc.gap + a7z
	}
	this.dd = function() {
			var aB;
			for (aAS = !1, aAU = aAT = aAR = 0, aAQ = -1, aA9 = a0.a1.hy() ? 6 : 10, aAW = (position = 0) === (aAW = bj.eL.data[11].value) ? 10 : 1 === aAW ? 5 : 1, aAP = !1, aAN = new Uint16Array(aA9 + 1), aAO = new Uint32Array(aA9 + 1), aAD = aD
				.em, ln = new Uint16Array(aAD), jx = new Uint16Array(aAD), aB = aAD - 1; 0 <= aB; aB--) ln[aB] = aB, jx[aB] = aB;
			this.resize(!0), aAL = new Uint16Array(aD.em);
			var aAY = Math.floor(aA5 - aAJ - aAI - aAC);
			for (aAM = new Array(aD.em), aAB.font = aA8, aB = aD.em - 1; 0 <= aB; aB--) aAM[aB] = aB + 1 + ".", ag.yd[aB] = bA.yK.a3A(ag.a0o[aB], aA8, aAY), aAL[aB] = Math.floor(aAB.measureText(ag.yd[aB]).width);
			aAZ()
		}, this.resize = function(dd) {
			if (a7z = a0.a1.hy() ? (aA5 = Math.floor(.335 * h.hz), Math.floor(aA9 * aA5 / 8)) : (aA5 = Math.floor(.27 * h.hz), Math.floor(aA9 * aA5 / 10)), aA5 = Math.floor(.97 * aA5), (aAA = document.createElement("canvas")).width = aA5, aAA
				.height = a7z, aAB = aAA.getContext("2d", {
					alpha: !0
				}), aAE = .025 * aA5, aA7 = .16 * aA5, aAF = 0 * aA5, aAG = Math.floor(.45 * aAE + aA7), aAH = (a7z - aA7 - 2 * aAE - aAF) / aA9,
				aAA.height = a7z += aAH, __fx.leaderboardFilter.tabBarOffset = Math.floor(aAH * 1.3), __fx.leaderboardFilter.verticalClickThreshold = a7z - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = aA5,
				aA6 = bA.qd.sS(1, Math.floor(.55 * aA7)), aAV = Math.floor((a0.a1.hy() ? .67 : .72) * aAH), aA8 = bA.qd.sS(0, aAV), aAB.font = aA8, aAI = Math.floor(.04 * aA5), aAJ = Math.floor((a0.a1.hy() ? .195 : .18) * aA5), aAC = Math.floor(aAB
					.measureText("00920600").width), aAB.font = aA6, aAK = aA5 - aAI, !dd) {
				aAB.font = aA8;
				for (var aB = aD.em - 1; 0 <= aB; aB--) aAL[aB] = Math.floor(aAB.measureText(ag.yd[aB]).width);
				aAZ()
			}
			aAX = bA.yK.a3A(L(109), aA6, .96 * aA5)
		}, this.a9x = function() {
			return aA5
		}, this.mX = function(bu, aAa) {
			(aAa || aAP && (bu || bf.k9() % aAW == 0)) && (aAP = !1, aAZ())
		}, this.j5 = function() {
			! function() {
				for (var f8 = aAD - 1; 0 <= f8; f8--) 0 === ag.ml[ln[f8]] && ! function(f8) {
					var aAr = ln[f8];
					aAD--;
					for (var aB = f8; aB < aAD; aB++) ln[aB] = ln[aB + 1], jx[ln[aB]] = aB;
					ln[aAD] = aAr, jx[ln[aAD]] = aAD
				}(f8)
			}();
			for (var aAp, nT = aAD - 1, f8 = 0; f8 < nT; f8++) ag.gd[ln[f8]] < ag.gd[ln[f8 + 1]] && (aAp = ln[f8], ln[f8] = ln[f8 + 1], ln[f8 + 1] = aAp, jx[ln[f8]] = f8, jx[ln[f8 + 1]] = f8 + 1);
			! function() {
				for (var dt = aAP, gO = (aAP = !0, jx[aD.eZ] >= aA9 - 1 ? aA9 - 2 : aA9 - 1), aB = gO; 0 <= aB; aB--)
					if (aAN[aB] !== ln[aB] || aAO[aB] !== ag.gd[ln[aB]]) return;
				(gO != aA9 - 2 || aAN[aA9] === jx[aD.eZ] && aAO[aA9] === ag.gd[aD.eZ]) && (aAP = dt)
			}();
			for (var aB = aA9 - 1; 0 <= aB; aB--) aAN[aB] = ln[aB], aAO[aB] = ag.gd[ln[aB]];
			aAN[aA9] = jx[aD.eZ], aAO[aA9] = ag.gd[aD.eZ];
			leaderboardHasChanged = true;
		}, __fx.leaderboardFilter.scrollToTop = function() {
			position = 0;
		}, this.h2 = function(ew, ey) {
			return !!z7(ew, ey) && ((__fx.utils.isPointInRectangle(ew, ey, bc.gap + 12, bc.gap + 12, aAG - 22, aAG - 22) && __fx.playerList.display(ag.a0o), true) &&
				!(ey - bc.gap > __fx.leaderboardFilter.verticalClickThreshold && __fx.leaderboardFilter.handleMouseDown(ew - bc.gap)) && (aAR = bf.eO, aAS = !0, aAT = aAU = aAt(ey), bJ.a2H() && (ew = a8m(-1, aAU, aA9), aAQ !== (ew = ew === aA9 ?
					-1 : ew)) && (aAQ = ew, aAZ(), bf.dl = !0)), !0)
		}, __fx.leaderboardFilter.repaintLeaderboard = function() {
			aAZ(), bf.dl = !0;
		},
		this.a1e = function(ew, ey) {
			if (__fx.utils.isPointInRectangle(ew, ey, bc.gap + 12, bc.gap + 12, aAG - 22, aAG - 22)) {
				__fx.playerList.hoveringOverButton === false && (__fx.playerList.hoveringOverButton = true, aAZ(), bf.dl = !0);
			} else {
				__fx.playerList.hoveringOverButton === true && (__fx.playerList.hoveringOverButton = false, aAZ(), bf.dl = !0);
			}
			if (__fx.leaderboardFilter.setHovering(
					__fx.utils.isPointInRectangle(ew, ey, bc.gap, bc.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth, __fx.leaderboardFilter.tabBarOffset), ew - bc.gap
				)) return;
			var dt, aAs = aAt(ey);
			return aAS ? (dt = position, (position = a8m(0, position += aAT - aAs, aD.em - aA9)) !== dt && (aAs = (aAs = a8m(-1, aAT = aAs, aA9)) !== aA9 && z7(ew, ey) ? aAs : -1, aAQ = aAs, aAZ(), bf.dl = !0), !0) : (aAs = (aAs = a8m(-1, aAs,
				aA9)) === aA9 || !z7(ew, ey) || bJ.a2H() ? -1 : aAs, aAQ !== aAs && (aAQ = aAs, aAZ(), bf.dl = !0))
		}, this.a23 = function(ew, ey) {
			if (!aAS) return !1;
			aAS = !1;
			var aAs = aAt(ey);
			var isEmptySpace = false;
			return bJ.a2H() && -1 !== aAQ && (aAQ = -1, aAZ(), bf.dl = !0), bf.eO - aAR < 350 && aAU === aAs && -1 !== (aAs = (aAs = a8m(-1, aAs, aA9)) !== aA9 && z7(ew, ey) ? aAs : -1) && (ew = (__fx.leaderboardFilter.enabled ? (updateFilteredLb(),
					ln[__fx.leaderboardFilter.filteredLeaderboard[aAs + position] ?? (isEmptySpace = true, jx[aD.eZ])]) : ln[aAs + position]), aAs === aA9 - 1 && (__fx.leaderboardFilter.enabled ? this.playerPos : jx[aD.eZ]) >=
				position + aA9 - 1 && (ew = aD.eZ), !isEmptySpace && aD.hj && __fx.settings.openDonationHistoryFromLb && __fx.donationsTracker.displayHistory(ew, ag.a0o, aD.kW), 0 !== ag.ml[ew] && !isEmptySpace) && aH.n6(ew, 800, !1, 0), !0
		}, this.a1h = function(ew, ey, deltaY) {
			var aAu;
			return !(aAS || aD.nE || (aAu = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !z7(ew, ey)) || (ew = (ew = a8m(-1, aAt(ey), aA9)) === aA9 || bJ.a2H() ? -1 : ew, 0 < deltaY ? position < aD.em - aA9 && (position += Math.min(aD.em - aA9 -
				position, aAu), aAQ = ew, aAZ(), bf.dl = !0) : 0 < position && (position -= Math.min(position, aAu), aAQ = ew, aAZ(), bf.dl = !0), 0))
		}, this.ul = function() {
			um.drawImage(aAA, bc.gap, bc.gap)
		}
}

function cN() {
	var canvas, yK, ew, ey, a9h, aAv, gap, aAw, fontSize, aAx, aAy, aAz, aB0, aB1, aB2, aB3, aB4, aB5;

	function aB9() {
		yK.clearRect(0, 0, aW.i, aW.j), yK.fillStyle = bB.ni, yK.fillRect(0, 0, aW.i, aW.j), yK.fillStyle = bB.o5, eT = 0 < aB3 ? aB3 : Math.sqrt(aB0[4] / 1e4), yK.fillRect(0, aW.j - a9h - 1, Math.floor(eT * aW.i), a9h), yK.fillStyle = bB.nl, yK
			.fillRect(0, 0, aW.i, 1), yK.fillRect(0, 0, 1, aW.j), yK.fillRect(aW.i - 1, 0, 1, aW.j), yK.fillRect(0, aW.j - 1, aW.i, 1), yK.fillRect(0, aW.j - a9h - 1, aW.i, 1);
		for (var eT, aBB, dt = 0, aB = 0; aB < aAz.length; aB++) aB1[aB] ? (bA.qd.textAlign(yK, 0), aBB = Math.floor((aAv - a9h + 2 * aAw) * (aB - dt + 1) / (aAz.length + 1) - .7 * aAw), yK.fillText(aAz[aB], gap, aBB), bA.qd.textAlign(yK, 2), 5 ===
			aB && 0 !== ag.ml[aD.eZ] && ag.gr[aD.eZ] >= ae.js(aD.eZ) ? (yK.fillStyle = bB.og, yK.fillText(aB7(aB), aW.i - gap, aBB), yK.fillStyle = bB.nl) : yK.fillText(aB7(aB), aW.i - gap, aBB)) : dt++
	}

	function aB7(aB) {
		return aB < 3 ? aB0[aB].toString() : 3 === aB || 4 === aB || 5 === aB ? bA.rc.a4C(aB0[aB] / 100, 2) : aB < 7 ? bA.rc.zR(aB0[aB]) : aB === 7 ? aW.aBC(aB0[7]) : aB === 8 ? __fx.utils.getMaxTroops(ag.gd, aD.eZ) : __fx.utils.getDensity(aD.eZ)
	}

	function aB6() {
		ag.gd[aD.eZ] !== aB0[6] && (aB0[6] = ag.gd[aD.eZ], aAx++)
	}
	this.dd = function() {
		aB3 = aB4 = 0, (aAy = new Array(8))[0] = L(110), aAy[1] = aD.kW ? L(111) : L(112), aAy[2] = L(113), aAy[3] = L(114), aAy[4] = L(115), aAy[5] = L(116, 0, "Interest"), aAy[6] = L(117), aAy[7] = L(118),
			aAy.push("Max Troops", "Density"), // add aAy
			(aAz = new Array(aAy.length)).fill(""), (aB0 = new Array(aAy.length))[0] = aD.kW ? 0 : aD.kC, aB0[1] = aD.kW ? al.ki : aD.kY, aB0[2] = aD.a0C, aB0[3] = 0, aB0[4] = bL.du(1e4 * ag.gd[0], Math.max(aD.jw, 1)), aB0[5] = 0 === aD.data
			.iIncomeType ? 700 : 1 === aD.data.iIncomeType ? bL.du(700 * aD.data.iIncomeValue, 64) : bL.du(700 * aD.data.iIncomeData[aD.eZ], 64), aB0[6] = 0, aB6(), aB0[7] = 0, aB2 = aB7(6), (aB1 = new Array(aAy.length)).fill(!0), aB5 = 0, aB5 =
			aD.kW ? (aB1[0] = !1, aB1[2] = !1, aB1[3] = !1, 3) : (aB1[3] = !1, 1), aAx = 0, this.resize()
	}, this.resize = function() {
		this.i = Math.floor((a0.a1.hy() ? .1646 : .126) * 1.25 * h.hz), this.j = Math.floor(1.18 * this.i), a9h = Math.floor(.04 * this.i), gap = Math.floor(.035 * this.i), aAw = .04 * this.i, aAv = this.j, this.j -= Math.floor(aB5 * (this.j -
			2 * a9h) / aAy.length), fontSize = Math.floor(.7 * (aAv - a9h) / aAy.length);
		var a5o = bA.qd.sS(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.i, canvas.height = this.j,
			function(a5o, i) {
				for (var aB = 0; aB < aAz.length; aB++) aAz[aB] = bA.yK.a3A(aAy[aB], a5o, i)
			}((yK = canvas.getContext("2d", {
				alpha: !0
			})).font = a5o, .575 * this.i), bA.qd.textBaseline(yK, 1), yK.lineWidth = 1, this.a4R(), this.a8P(), aU.a8P(), aB9()
	}, this.a8P = function() {
		ew = h.i - this.i - bc.gap
	}, this.aBA = function() {
		ey = bc.gap
	}, this.a4R = function() {
		ey = bc.gap + (aU.a7k() && 0 !== ag.ml[aD.eZ] && !aD.hD ? aU.j + bc.gap : 0)
	}, this.mX = function(bu) {
		(bu || 100 <= aAx) && (aAx = 0, aB9())
	}, this.a59 = function() {
		return aB0[7]
	}, this.aBC = function(value) {
		var l7 = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * l7) / 1e3);
		return value < 10 ? l7 + ":0" + value : l7 + ":" + value
	}, this.j5 = function() {
		var aBN, per;
		aB1[0] && aD.a0D - aD.a0C !== aB0[0] && (aB0[0] = aD.a0D - aD.a0C, aAx++), al.ki - aB0[0] !== aB0[1] && (aB0[1] = al.ki - aB0[0], aAx++), this.mP(), (aBN = ae.aBO(aD.eZ)) !== aB0[5] && (aB0[5] = aBN, aAx++), aB6(), aB0[7] += bf.aBP, aBN =
			aB7(7), aB2 !== aBN && (aB2 = aBN, aAx += 100), aBN = aD.hj ? bh.kj() : ag.gd[ln[0]], per = bL.du(1e4 * aBN, Math.max(aD.jw, 1)), aB0[3] = aBN, aB0[4] !== per && (aAx++, aB0[4] = per), 8 === aD.kU && function() {
				for (var aB = 0; aB < 2; aB++)
					if (!bA.gB.h1(aB)) return bR.zm.a09(), 1;
				return
			}() || aB0[3] < aD.jw || ! function() {
				for (var aB = al.ki - 1; 0 <= aB; aB--)
					if (0 < ag.gH[al.kn[aB]].length) return;
				return 1
			}() || bN.l1.aBM().length || bR.zm.a09()
	}, this.mP = function() {
		aB1[2] && aD.a0C !== aB0[2] && (aB0[2] = aD.a0C, aAx += 2 === aD.a0A ? 100 : 1)
	}, this.aBJ = function() {
		return aB0[3] === aD.jw
	}, this.aBQ = function(aB) {
		var tG, aBR, dt;
		return 2 !== aD.a0A && (aB % 2 == 1 && (aV.mX(1, 1), bf.dl = !0), aB === aD.a4a ? (aB3 = 0, aB9(), !1) : (-1 !== aB || 0 !== aB4) && (aBR = aB3, aB3 = aD.gy ? aB / aD.a4a : (dt = performance.now(), 0 <= aB && (tG = dt - 392 * aB, aB4 =
			0 === aB || tG < aB4 ? tG : aB4), 1 < (aB3 = (dt - aB4) / (392 * aD.a4a)) ? 1 : aB3), aB9(), aB3 !== aBR))
	}, this.ul = function() {
		um.drawImage(canvas, ew, ey)
	}
}

function cO() {
	var hb, aBS, i, j, a8V, aBT, aBU, a7l, canvas, my, aBV;

	function yG() {
		return Math.floor((h.i - i) / 2) < aR.j + 2 * bc.gap ? h.j - j - 4 * bc.gap - aR.j : h.j - j - 2 * bc.gap
	}
	this.dd = function() {
		aBV = hb = !1, a8V = .61, aBT = .07, aBU = .09, my = a7l = j = 0
	}, this.resize = function() {
		var yK, nB, fA, aBa, aBb, a5t;
		hb && (i = aBW(i = a0.a1.hy() ? Math.floor(.69 * h.hz) : Math.floor(.5 * h.hz), a6O(h.i - 2 * bc.gap, 10)), i = aBW(i, Math.floor(3.57 * a6O(h.j - 2 * bc.gap, 3))), j = Math.floor(.28 * i), (canvas = document.createElement("canvas"))
			.width = i, canvas.height = j, yK = canvas.getContext("2d", {
				alpha: !0
			}), nB = Math.floor(1 + j / 40), yK.clearRect(0, 0, i, j), yK.fillStyle = bB.ni, yK.fillRect(nB, nB, i - 2 * nB, j - 2 * nB), yK.lineJoin = "bevel", yK.lineWidth = 2 * nB, yK.strokeStyle = bB.nl, yK.strokeRect(nB, nB, i - 2 * nB,
				j - 2 * nB), yK.imageSmoothingEnabled = !1, fA = ab.get(aBS), aBa = fA.width, a5t = (1 === aBS ? .85 : 21 === aBS ? .666 : .9) * a8V * j / (aBb = fA.height), yK.setTransform(a5t, 0, 0, a5t, Math.floor((i - a5t * aBa) / 2),
				Math.floor((j - a5t * aBb) / 2)), yK.drawImage(fA, 0, 0), yK.setTransform(1, 0, 0, 1, Math.floor(i - aBU * j - aBT * j - nB), Math.floor(nB + aBT * j)),
			function(yK, ep) {
				yK.lineWidth = Math.floor(1 + j / 80), yK.strokeStyle = bB.nl, yK.beginPath(), yK.moveTo(0, 0), yK.lineTo(ep, ep), yK.moveTo(0, ep), yK.lineTo(ep, 0), yK.stroke()
			}(yK, Math.floor(aBU * j)), yK.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(fH, aBY, a8G, aBZ) {
		hb || aBZ && aBV || (aBS = a8G ? 21 : fH ? 1 : 2, hb = aBV = !0, this.resize(), aL.ru(), aR.a8B(), my = bf.eO, a7l = aBY ? 1 : 0)
	}, this.j5 = function() {
		!hb || 1 <= a7l || (a7l = 1 < (a7l += 5e-4 * (bf.eO - my)) ? 1 : a7l, my = bf.eO, bf.dl = !0)
	}, this.h2 = function(ew, ey) {
		return !(!hb || a7l <= 0 || (ew -= Math.floor((h.i - i) / 2), ey -= yG(), ew < 0) || ey < 0 || i < ew || j < ey || (i - j / 3 < ew && ey < j / 3 && (hb = !1, bf.dl = !0), 0))
	}, this.ul = function() {
		!hb || a7l <= 0 || (um.globalAlpha = a7l, um.drawImage(canvas, Math.floor((h.i - i) / 2), yG()), um.globalAlpha = 1)
	}
}

function dN() {
	var aBd, aBe = new Uint8Array(5),
		aBf = new Uint8Array(5);
	this.aBg = new aBh, this.dd = function() {
		for (var fH = bj.eL.data[119].value, aB = 0; aB < aBe.length; aB++) aBe[aB] = (fH >> 2 * aB) % 4
	}, this.a4m = function() {
		aBd = [L(119), "", L(120, [bX.aBi[28]]), L(121, [bX.aBi[26]]), L(122, [bX.aBi[0]])], this.aBg.dd()
	}, this.j5 = function() {
		this.aBg.j5()
	}, this.a5X = function(id) {
		1 < id && bJ.r5() || ! function(e9) {
			if (3 === aBe[e9] || 1 === aBf[e9]) return;
			if (aBf[e9] = 1, !(Math.random() < .6)) {
				aBe[e9]++;
				for (var fH = 0, aB = 0; aB < aBe.length; aB++) fH += aBe[aB] << 2 * aB;
				bj.s5.s6(119, fH)
			}
			return 1
		}(id) || aN.a6U(aBd[id])
	}
}

function aBh() {
	var aBk;
	this.dd = function() {
		aBk = !1
	}, this.j5 = function() {
		var gN;
		if (function() {
				if (!aBk) {
					if (bf.k9() % 30 != 9) return;
					if (!bA.gB.lj(90)) return;
					aBk = !0
				}
				return 1
			}() && (! function() {
				var qV = aN.a6q(956);
				if (qV) {
					if (bA.gB.lA(qV.player)) return 1;
					aN.a6p(956, 0)
				}
				return
			}() && (-1 === (gN = (aD.hj ? function() {
				var id = bh.kl(),
					ep = al.ki;
				if (bg.kZ[id])
					for (var zy = al.kn, en = bg.en, aB = 0; aB < ep; aB++) {
						var gN = zy[aB];
						if (en[gN] !== id) return gN
					} else if (1 < ep) return ln[ep - 1];
				return -1
			} : function() {
				for (var aBs = al.ki, l6 = al.kn, aBt = jx, aB = 0; aB < aBs; aB++) {
					var gN = l6[aB];
					if (0 !== aBt[gN]) return gN
				}
				return -1
			})()) ? ! function() {
				var qV = aN.a6q(957);
				if (qV && qV.a6K) {
					if (ac.eg(qV.a6K.eb << 2)) return 1;
					aN.a6p(957, 0)
				}
				return
			}() : (aN.yc(0, L(123, [ag.yd[gN]]), 956, gN, bB.nl, bB.ni, -1, !0), 0)))) {
			var ep = ao.io.lM;
			if (0 !== ep)
				for (var eL = ao.io.eL, aB = 0; aB < ep; aB++) {
					var eb = eL[aB];
					if (ac.eg(eb << 2)) return void aN.yc(0, L(124, [bM.ex(eb), bM.ez(eb)]), 957, 0, bB.nl, bB.ni, -1, !0, void 0, {
						f8: 1,
						eb: eb
					})
				}
		}
	}
}

function dO() {
	this.aBu = new aBv, this.dd = function() {
		this.aBu.resize()
	}
}

function aBv() {
	this.resize = function() {
		var aB, aBw = document.head.querySelector("style#ss");
		if (aBw)
			for (aB = aBw.sheet.cssRules.length - 1; 0 <= aB; aB--) aBw.sheet.deleteRule(0);
		else(aBw = document.createElement("style")).id = "ss", document.head.appendChild(aBw);
		var a8d = "::-webkit-scrollbar",
			aBx = bA.qd.qm(bc.sU),
			hl = bA.qd.qm(Math.max(bA.qd.rw(.012), 8));
		try {
			aBw.sheet.insertRule(a8d + "{width:" + hl + ";height:" + hl + ";}", aBw.sheet.cssRules.length), aBw.sheet.insertRule(a8d + "-thumb{background-color:white;}", aBw.sheet.cssRules.length), aBw.sheet.insertRule(a8d +
				"-track{background:" + bB.nh + ";}", aBw.sheet.cssRules.length), aBw.sheet.insertRule(a8d + "-track:horizontal{border-top:" + aBx + " solid white;}", aBw.sheet.cssRules.length), aBw.sheet.insertRule(a8d +
				"-track:vertical{border-left:" + aBx + " solid white;}", aBw.sheet.cssRules.length), aBw.sheet.insertRule(a8d + "-button{display:none;}", aBw.sheet.cssRules.length)
		} catch (e) {
			for (console.log("error 3425: " + e), aB = aBw.sheet.cssRules.length - 1; 0 <= aB; aB--) aBw.sheet.deleteRule(0)
		}
	}
}

function dM() {
	this.aBy = !1, this.nb = !1, this.a4V = !1, this.aBz = [0, 0, 0, 0], this.aC0 = function() {
		var nB, nC, nO, nP;
		this.a4V = this.a4V || this.nb, (this.nb || this.aBy && this.a4V) && (nB = ba.aC1[0], nC = ba.aC1[1], nO = ba.aC1[2], nP = ba.aC1[3], nB = nB < this.aBz[0] ? this.aBz[0] : nB, nC = nC < this.aBz[1] ? this.aBz[1] : nC, nO = nO > this.aBz[
				2] ? this.aBz[2] : nO, nP = nP > this.aBz[3] ? this.aBz[3] : nP, this.nb = !1, this.aBy = !1, nB === this.aBz[0] && nC === this.aBz[1] && nO === this.aBz[2] && nP === this.aBz[3] ? this.a4W() : nB <= nO && nC <= nP && a4o
			.putImageData(a4p, 0, 0, nB, nC, nO - nB + 1, nP - nC + 1))
	}, this.a4W = function() {
		this.a4V && this.aBz[2] >= this.aBz[0] && this.aBz[3] >= this.aBz[1] && a4o.putImageData(a4p, 0, 0, this.aBz[0], this.aBz[1], this.aBz[2] - this.aBz[0] + 1, this.aBz[3] - this.aBz[1] + 1), this.a4V = !1
	}, this.a0L = function() {
		this.aBz[2] >= this.aBz[0] && this.aBz[3] >= this.aBz[1] && a4o.putImageData(a4p, 0, 0, this.aBz[0], this.aBz[1], this.aBz[2] - this.aBz[0] + 1, this.aBz[3] - this.aBz[1] + 1), this.a4V = !1
	}, this.dd = function() {
		var ew, ey;
		this.aBy = !1, this.nb = !1, this.a4V = !1, this.aBz[0] = bS.f0, this.aBz[1] = bS.f1, this.aBz[2] = this.aBz[3] = 0;
		loop: for (ew = 1; ew < bS.f0 - 1; ew++)
			for (ey = bS.f1 - 2; 1 < ey; ey--)
				if (1 === aC2[ac.xn(ew, ey) + 2]) {
					this.aBz[0] = ew;
					break loop
				} loop: for (ey = 1; ey < bS.f1 - 1; ey++)
			for (ew = bS.f0 - 2; 1 < ew; ew--)
				if (1 === aC2[ac.xn(ew, ey) + 2]) {
					this.aBz[1] = ey;
					break loop
				} loop: for (ew = bS.f0 - 2; 0 < ew; ew--)
			for (ey = bS.f1 - 2; 1 < ey; ey--)
				if (1 === aC2[ac.xn(ew, ey) + 2]) {
					this.aBz[2] = ew;
					break loop
				} loop: for (ey = bS.f1 - 2; 0 < ey; ey--)
			for (ew = bS.f0 - 2; 1 < ew; ew--)
				if (1 === aC2[ac.xn(ew, ey) + 2]) {
					this.aBz[3] = ey;
					break loop
				}
	}
}

function L(value, aC3, vK) {
	var qK = "number" == typeof value ? b7.aC4[value] : value;
	if (vK && b7.aC5() && (qK = vK), aC3)
		for (var ep = aC3.length, aB = 0; aB < ep; aB++)
			for (var f8 = 0; f8 < 3; f8++) qK = qK.replace("{" + (10 * f8 + aB) + "}", aC3[aB]);
	return qK
}

function c2() {
	this.data = new aC6;
	var aC7 = (new aC8).L84,
		aCA = (this.aC4 = aC7, !(this.aC9 = "en"));
	this.dd = function() {
		var qK, g;
		aCA = !1, ("en" === (qK = bj.eL.data[12].value).split("-")[0].toLowerCase() ? (b7.aC4 = aC7, b7.aC9 = qK, 1) : bj.eL.data[12].value === bj.eL.data[145].value && 0 < bj.eL.data[146].value && (qK = bj.eL.data[146].value, (g = bj.qu.vX(qK, !
			1)).length === qK) && !!bA.ql.a2n(g) && function(g) {
			for (var ep = g.length, j = 0; j < ep; j++) g[j] = g[j].replace("&#39;", "'");
			var aCG = bj.qu.vX(ep, !0);
			if (ep !== aCG.length) return !1;
			if (!bA.ql.a2n(aCG)) return !1;
			for (var l7 = aC7.length, a9Y = new Array(l7), aCH = l7 === ep, gI = Math.min(ep, l7), aB = 0; aB < l7; aB++)
				if (a9Y[aB] = aC7[aB], aB < ep && aCG[aB] === a9Y[aB]) a9Y[aB] = g[aB];
				else {
					aCH = !1;
					for (var f9 = 0; f9 < gI; f9++)
						if (aCG[f9] === a9Y[aB]) {
							a9Y[aB] = g[f9];
							break
						}
				} return b7.aC4 = a9Y, b7.aC9 = bj.eL.data[12].value, aCH
		}(g)) || (aCA = !0)
	}, this.df = function() {
		bg.de(), aE.de(), be.de(), bd.de(), aO.dd(), bo = new dz
	}, this.aC5 = function() {
		return this.aC4 === aC7 || !aC7.length
	}, this.aCI = function() {
		var aCJ;
		return !!aCA && (aCA = !1, 0 !== aC7.length) && (aCJ = bj.eL.data[12].value, b0.aCK.aCL(0, aCJ.slice(0, 20)), !0)
	}, this.aCM = function(g) {
		g.length !== aC7.length ? 8 === t.ss && t.a5A().aCN(30, 0, 1) : (this.aC4 = g, this.aC9 = bj.eL.data[12].value, bj.s5.s6(145, this.aC9), bj.s5.s6(146, g.length), bj.qu.vd(g, !1), bj.qu.vd(aC7, !0), 8 === t.ss ? t.a5A().aCN(30) : 0 === aa
			.a1L() && 5 === t.ss && t.y.aCO())
	}, this.aCP = function() {
		var aCQ, g = navigator.languages;
		return g && g.length ? (aCQ = Math.max(b7.data.aCR(g[0]), 0), 1 === g.length ? [aCQ, aCQ] : [aCQ, Math.max(b7.data.aCR(g[1]), 0)]) : [0, 0]
	}
}

function aC6() {
	this.g = ["en", "aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts",
		"btx", "bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fj", "fo",
		"fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac", "kek",
		"kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk", "ml",
		"mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu", "rn", "ro",
		"rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl", "tn", "to", "tpi",
		"tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu", "nb", "fil", "sh"
	], this.aCS = function() {
		for (var aCT = [], g = this.g, ep = g.length, aB = 0; aB < ep; aB++) aCT.push(g[aB]);
		var aCU = bj.eL.data[12].vK;
		for (aB = 0; aB < ep; aB++)
			if (aCT[aB] === aCU) {
				aCT.splice(aB, 1), ep--;
				break
			} aCT.sort(), ep++, aCT.unshift(aCU);
		try {
			if ("undefined" == typeof Intl) return aCT;
			for (aB = 0; aB < ep; aB++) {
				var qK = new Intl.DisplayNames([aCT[aB]], {
					type: "language"
				}).of(aCT[aB]);
				qK !== aCT[aB] && (aCT[aB] = aCT[aB] + ": " + qK)
			}
		} catch (e) {
			console.log("error 3646: " + e)
		}
		return aCT
	}, this.aCW = function(aCX) {
		for (var qK = bj.eL.data[12].value, ep = aCX.length, aB = 0; aB < ep; aB++)
			if (qK === aCX[aB].split(":")[0]) return aB;
		return 0
	}, this.aCR = function(aCY) {
		if (!aCY || aCY.length < 2) return 0;
		aCY = aCY.split("-")[0].toLowerCase();
		for (var g = this.g, ep = g.length, aB = 0; aB < ep; aB++)
			if (aCY === g[aB]) return aB;
		return -1
	}
}

function aC8() {
	this.L84 = ["No Admin", "Helper", "Junior Moderator", "Moderator", "Senior Moderator", "Lead Moderator", "Head Admin", "Very Easy", "Easy", "Normal", "Hard", "Very Hard", "Impossible", "Type your message here...", "Send", "Activated", "Top Clan",
		"Best Clan Member", "Top Admin", "Best 1v1 Player", "Best Battle Royale Player", "Richest Player", "Top Patreon", "Lobby", "You earned {10} gold!", "{0} earned {11} gold!", "Team {0}", "Team {0} won the game!",
		"You earned a participation reward of {10} gold.", "The prize money was distributed as follows:", "and {10} more", "You earned {10} gold.", "You earned {10} battle royale points!", "Clan {0} gained {11} points. ✨",
		"You earned {10} clan points!", "You earned an additional {10} gold because you played for {1}.", "Check clan results at this page: ", "Back", "Error", "Error {10}", "Not Enough Gold!", "You need more gold to perform this action.",
		"Quit Game", "More", "This is a contest!", "Accept", "You conquered {0}. 🔥", "You were conquered by {0}.", "Congratulations! You won the game.", "{0} won the game.", "{0} broke the non-aggression pact.", "{0} attacks you! ⚔️",
		"Choose your start position!", "You surrendered! 🏳️", "The game ended in a stalemate!", "Error: {10}", "{0} was immortalized!", "Neutral Land: {0}", "Player: {0}", "Strength: {10}", "Territory: {10}", "Team", "Bot Difficulty",
		"Index: {10}", "Coordinates: {10}", "Mountain: {10}", "Water: {10}", "Ship Owner: {0}", "Message to {0}", "Humanity triumphs! The undead were defeated.", "The Resistance",
		"Mankind's era ends, overrun by the relentless tide of the undead.", "The Virus", "If peace is agreed upon, the game ends in a stalemate.", "If peace is agreed upon, the largest territory holder wins the game.",
		"You signed a non-aggression pact with {0}.", "You asked {0} to sign a non-aggression pact.", "{0} accepted the non-aggression pact.", "{0} requests a non-aggression pact.", "You asked {10} players to attack {1}.",
		"You asked {0} to attack {1}.", "{0} suggests you attack {1}. 🎯", "You exported 1 resource to {0}.", "You exported {10} resources to {1}.", "Incoming Bot Support!", "{0} supported you!", "Map: {0}", "Dimension: {10}",
		"Overall Pixels: {10}", "Land: {10}", "Mountains: {10}", "Full sending is disabled.", "{0} was conquered by {1}.", "{0} left the game.", "{0} surrendered.", "{0} joined the game.", "{10} players were conquered.",
		"{10} players left the game.", "{10} players surrendered.", "Next Contest: ", "YOU CONQUERED", "YOU WERE CONQUERED BY", "THE GAME WAS WON BY", "MAP:", "{0} called the peace vote.", "{0} voted for peace.", "{0} rejected peace.",
		"second played", "seconds played", "LEADERBOARD", "Humans", "Players", "Bots", "Spectators", "Threshold", "Percentage", "Growth", "Income", "Time", "Hint: The top 9 emojis are ordered by usage.",
		"Hint: Call the peace vote by pressing {0}.", "Hint: Add troops to your weakest ongoing attack with {0}.", "Hint: Hover with the mouse over a player and press {0} to attack them.", "{0} still needs to be conquered!",
		"A neutral pixel at position ({10}, {11}) still needs to be conquered!", "You are leaving Territorial.io!", "You are leaving Territorial.io.", "🔑 Show Account", "🚩 Report Abuse", "💬 Mention", "Loading", "{0} defeated {1}!",
		"White Arena", "Black Arena", "Island", "Mountains", "Desert", "Swamp", "White Plains", "Cliffs", "Pond", "Halo", "Europe", "World 1", "Caucasia", "Africa", "Middle East", "Scandinavia", "North America", "South America", "Asia",
		"Australia", "Island Kingdom", "World 2", "British Isles", "Refresh", "Public Profile", "🧈 Gold", "Large Bank", "Medium Bank", "Small Bank", "Capitalist", "Rich Person", "Landowner", "Merchant", "Taxpayer", "Worker", "Peasant", "Serf",
		"Daylaborer", "Drifter", "Beggar", "Account Balance: ", "Rank: ", "Status: ", "Gold Transfer", "Confirm", "Cancel", "Account Name", "Copy", "Password", "Show", "Hide", "Request New Password", "Security Tip",
		"To safeguard your account, never disclose your password to anyone. We will never ask for your password, as we do not require it for any service.",
		"If you have accessed your account through unofficial webpages or apps, your security may be compromised. We recommend changing your password.",
		"If you lose your password or account name, you may lose access to your account. In such a case, we are unable to recover it. Please ensure that you store your account name and password in a safe place.", "Account Options",
		"Log in to a Different Account", "Create New Account", "Delete Account: ", "🗑️ Account Deletion", "Accounts without gold will be deleted automatically after 8 days. To initiate this process, deplete all your gold.", "Followed Accounts",
		"➡️ Show", "🗑️ Remove", "🚨 Remove All Below", "Saved Accounts", "Listed accounts may have been removed in the meantime due to insufficient funds.", "➡️ Login", "1v1 Rating", "Elo: ", "Played Games: ", "Battle Royale Rating",
		"Commander", "Strategist", "Soldier", "Recruit", "Rating: ", "Admin Statistics", "Votes: ", "You are about to purchase {10} votes for {11} Gold with your Account {2}.", "User", "🟢 Online", "Browsing the menus.", "Watching a replay.",
		"Playing a team game.", "Playing a battle royale game.", "Playing a 1v1 match.", "Fighting zombies.", "In the lobby.", "Playing in single player.", "🔴 Offline", "Last active some seconds ago.", "Last active 1 minute ago.",
		"Last active {10} minutes ago.", "Last active 1 hour ago.", "Last active {10} hours ago.", "Last active 1 day ago.", "Last active {10} days ago.", "Last active a long time ago.", "🚫 Unfollow", "📥 Follow",
		"You are following this user. ✅", "Please choose a respectful username.", "Offensive Name", "Hate Speech", "Bio", "Upload Bio", "The monthly fee is currently {10} gold.", "Enable Auto Renew", "Disable Auto Renew",
		"Auto Renew is off. The subscription will end in {10} day(s).", "Auto Renew is on. The subscription will renew in {10} day(s).", "Description", "Report Player", "Primary Clan Stats", "Clan: {0}", "Monthly Points: {0}", "Rank: {0}",
		"Total Points: {0}", "Won Games: {0}", "Avg. Points per Game: {0}", "Secondary Clan Stats",
		"Once the monthly points of the secondary clan surpass the monthly points of the primary clan, the secondary clan will become the new primary clan.", "In this scenario, your clan leader statistics will be reset.",
		"Clan Leader Statistics", "Clan Leader of {0}", "No Clan Leader", "Elect", "Every week, you can vote for one clan member to increase their clan leader points.",
		"You and this clan member must have the same primary clan, which can be checked in the Primary Clan Stats.", "A clan leader gains gold whenever a member earns gold in a game.", "Rating: {10}", "Rank: {10}", "Status: {10}", "Active",
		"Inactive", "Unlink Account", "Benefits:", "No Ads", "Separate Leaderboard", "Extra Gold Income", "Status: Not Linked", "Join Territorial.io on Patreon:", "Once you have joined, connect your account:",
		"If you hide Patreon, no one can share their membership with you.", "Additional Income", "Options", "Default", "Uniform", "Customized", "Mixed", "Team dependent", "Player Count", "Clan Chart", "🛠️ Options", "🛠️ Chart Options",
		"Search Terms", "Separate search terms with a comma.", "Load Data", "Start Index", "End Index", "Timeframe", "More Options", "Y-Axis Compression", "Choose Your Nation's Color!", "National Color", "Red: ", "Green: ", "Blue: ", "Adjust",
		"Colors", "Random", "Selectable Color", "⏳ Connecting...", "Find Server...", "New Connection...", "Reload Required", "A game reload is required to apply the new configuration.", "Custom Scenario", "⚔️ Play", "Map", "Settings",
		"Game Mode", "Clustered", "Player Names", "Kingdom Names", "Simple Names", "Territorial Income", "Interest Income", "Starting Resources", "More Settings", "Reset Scenario", "Open File...", "Save As File...", "📜 Game Log", "Multiplayer",
		"My Account", "Game Menu", "Your Kingdom's Name", "Clans", "Clan Members", "Admins", "1v1 Players", "Battle Royale", "Richest Players", "Patreon Members", "🏆 Leaderboards", "Previous 10", "Next 10", "1v1 Player Ranking", "Clan Ranking",
		"Clan Member Ranking", "Admin Ranking", "1v1 Reports", "Admin Election", "Blockchain", "Clan Leader Election", "Bio Reports", "Battle Royale Players", "Ranking", "Player", "Elo", "Clan", "Rating", "Leader", "Index", "Seconds Ago",
		"Accuser", "Accused", "Voter", "Target Account", "Votes", "Sender", "Receiver", "Amount", "Number", "Gold", "Type", "Elo Deducted", "Bio Removed", "🛠️ List Options", "Clan Name Search", "Username Search", "Quantity",
		"Account Name Search", "1v1", "Zombie", "Chat", "Close", "Ready", "Next Map", "Next Game Mode", "Next Contest", "Teams", "ON", "OFF", "Zombies", "Login", "The only official webpage is https://territorial.io",
		"If you log in on a different website, your account may be stolen!", "If you play with the Android or iOS App, you are fine.", "📜 Logs", "Source Account: {0}", "Target Account: {0}", "Gold to be Sent: {10}", "Gold to be Received: {10}",
		"Procedural Map", "Realistic Map", "Custom Map", "Passable Water", "Passable Mountains", "Maximum Dimension", "Map File", "Select File", "Map Name", "Preview", "Selectable Name", "📰 Propaganda", "Video URL", "Link URL", "Link Title",
		"▶️ Replay", "🔲 Select All", "📋 Copy", "🗑️ Clear", "▶️ Launch", "Insert the replay string here!", "⚙️ Settings", "🔄 Reset", "Information",
		"Increasing resolution, shrinking minimum font size, and speeding up text rendering can strain your system and hinder gameplay responsiveness.", "Resolution", "Low", "Medium", "High", "Very High", "Minimum Font Size", "Small",
		"Very Small", "Text Rendering Speed", "Slow", "Fast", "Large UI", "Place Balance Above", "Hide Zoom Buttons", "Font", "Message Box", "Keep Closed", "Is Muted", "Shortcut Keys", "Reset", "Language", "Spawning", "Selectable Spawn",
		"🔑 My Account", "📈 Clan Charts", "🧈 Gold Transfer", "🔗 Links", "ℹ️ Game Version", "🗑️ Delete Data", "Privacy Settings", "Force Restart Game", "☰ Game Menu", "📊 Game Statistics", "🏳️ Surrender", "🕊️ Call Peace Vote", "Android App",
		"iOS App", "Changelog", "Clan Results", "Tutorial", "Do you want to delete all locally stored data, like usernames, setting data and account data like passwords and account names?",
		"Please make sure to safely store passwords before performing this action.", "🗑️ Delete", "User Privacy", "Check out our Privacy Policy at:", "Source Account", "Send gold only to trusted accounts!", "Replay Error", "Warning",
		"Loading...", "Incoming Boat!", "Incoming Ship!", "Initiate Land Attack At Mouse Pointer", "Launch Ship Towards Mouse Pointer", "Increase Percentage Bar", "Decrease Percentage Bar", "Slightly Increase Percentage Bar",
		"Slightly Decrease Percentage Bar", "Switch UI Visibility", "Zoom In", "Zoom Out", "Camera Left", "Camera Right", "Camera Up", "Camera Down", "Add To Weakest Attack", "Call Peace Vote", "Intercept Ship At Mouse Pointer",
		"Avg. Attack Strength", "Land Attacks", "Ships launched", "Bots conquered", "Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Received Support", "Overall Income", "Additional Costs", "Land War Losses",
		"Naval Losses", "Transmitted Support", "Overall Expenses", "Mountain Attacks", "Ships landed", "Territory", "Numbers", "Statistics", "Neutral", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black", "Ship launched!",
		"Ship intercepted!", "Upcoming Alliance Contest!", "Upcoming Battle Royale Contest!", "Upcoming 1v1 Contest!", "Upcoming Zombie Contest!"
	]
}

function dj() {
	var ew, ey, j, tp, aCZ, aCa, aCb, aCc, aCd, i, a3P, aCe;
	this.hb = !1, this.dd = function(qK, aCf) {
		if (1 === a0.id && 13 <= a0.dw && a0.dw < 18) return aCf ? void(a3P = qK) : a3P !== qK ? void 0 : void a0.vV.saveString(200, qK);
		aCf && (a3P = qK, (aCe = document.createElement("a")).appendChild(document.createTextNode(a3P)), this.hb = !0, aCe.title = a3P, aCe.target = "_blank", aCe.href = a3P, aCe.style.textAlign = "center", aCe.style.color = bB.nl, aCe.style
			.position = "absolute", aCe.style.padding = "0px", aCe.style.margin = "0px", this.resize(), document.body.appendChild(aCe), bf.dl = !0)
	}, this.ru = function() {
		return !(!this.hb || (t.removeChild(document.body, aCe), this.hb = !1))
	}, this.h2 = function(i6, i7) {
		return !!this.hb && ((i6 < ew || i7 < ey || ew + i < i6 || ey + j < i7 || ew + i - tp < i6 && i7 < ey + tp) && (bf.dl = !0, this.hb = !1, t.removeChild(document.body, aCe)), !0)
	}, this.resize = function() {
		var a5o, aCg;
		this.hb && (aCc = Math.floor(.8 * (a0.a1.hy() ? h.i > h.j ? .6 : .55 : .4) * h.hz), tp = Math.floor(.15 * aCc), aCZ = Math.floor(.35 * tp), aCa = Math.floor(.5 * tp), aCb = Math.floor(2.5 * aCa), j = tp + aCZ + 3 * aCa, a5o = bA.qd.sS(1,
			aCZ / h.k), aCd = Math.floor(h.k * aQ.measureText(a3P, a5o)), aCg = i = (aCc < aCd ? aCd : aCc) + 2 * aCb, i = Math.min(i, h.i - 2 * (a0.a1.hy() ? 2 : 1) * bc.gap), a5o = bA.qd.sS(1, i / aCg * aCZ / h.k), aCd = Math.floor(h
			.k * aQ.measureText(a3P, a5o)), ew = Math.floor((h.i - i) / 2), ey = Math.floor((h.j - j) / 2), aCe.style.font = a5o, aCe.style.top = Math.floor((ey + 1.4 * aCa + tp) / h.k) + "px", aCe.style.left = Math.floor((ew + (i -
			aCd) / 2) / h.k) + "px")
	}, this.ul = function() {
		this.hb && (um.fillStyle = bB.ni, um.fillRect(ew, ey + tp, i, j - tp), um.fillStyle = bB.ot, um.fillRect(ew, ey, i, tp), um.fillStyle = bB.nl, um.lineWidth = bc.z8, um.strokeStyle = bB.nl, um.strokeRect(ew, ey, i, j), um.fillRect(ew, ey +
			tp, i, bc.z8), um.font = bA.qd.sS(1, .48 * tp), bA.qd.textAlign(um, 1), bA.qd.textBaseline(um, 1), um.fillText(L(125), Math.floor(ew + (i - .5 * tp) / 2), Math.floor(ey + .55 * tp)), aM.a5z(Math.floor(ew + i - .8 * tp), Math
			.floor(ey + .25 * tp), Math.floor(.5 * tp)), um.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function dh() {
	var gap, aAy, ew = [0, 0, 0, 0, 0],
		ey = [0, 0, 0, 0, 0],
		nN = [1, 1, 1, 1, 1],
		fH = [!0, !0, !0, !1, !1],
		fA = (this.fc = [!0, !0, !0, !1, !1], null);
	this.aCh = function(a2y, aCi) {
		fA = a2y, fH = aCi, aAy = [bK.aCj, bK.a1E, bK.aCk, bK.aCk, bK.aCl], this.dd()
	}, this.dd = function() {
		if (ab.tK()) {
			var aB, sz = Math.floor((a0.a1.hy() ? .261 : .195) * h.hz),
				t0 = Math.floor(.9 * sz),
				a8V = Math.floor(.17 * t0);
			if (gap = a0.a1.hy() ? 2 * bc.gap : bc.gap, nN[0] = sz / fA[0].width, nN[1] = t0 / fA[1].width, nN[2] = a8V / fA[2].height, nN[3] = a8V / fA[3].height, nN[4] = a8V / fA[4].height, nN[2] *= 1.7, nN[3] *= 1.07, ew[0] = gap, ew[1] = gap,
				ew[2] = gap, ew[3] = gap, ew[4] = Math.floor(2 * gap + nN[3] * fA[3].width), ey[0] = gap, ey[1] = ey[0] + gap + nN[0] * fA[0].height, ey[2] = ey[1] + gap + nN[1] * fA[1].height, ey[3] = ey[2] + gap + nN[2] * fA[2].height, ey[4] =
				ey[3], !fH[0])
				for (aB = 0; aB < 5; aB++) ey[aB] -= nN[0] * fA[0].height + gap;
			if (!fH[1])
				for (aB = 2; aB < 5; aB++) ey[aB] -= nN[1] * fA[1].height + gap
		}
	}, this.hb = function() {
		return !(7 === aa.a1L() && a0.a1.hy())
	}, this.h2 = function(i6, i7) {
		if (fA && this.hb())
			for (var aB = fH.length - 1; 0 <= aB; aB--)
				if (fH[aB] && this.fc[aB] && ew[aB] < i6 && ey[aB] < i7 && i6 < ew[aB] + nN[aB] * fA[aB].width && i7 < ey[aB] + nN[aB] * fA[aB].height) return t.u(9, t.ss, new aCm(L(126), bA.qd.a3O(aAy[aB]))), !0;
		return !1
	}, this.ul = function() {
		if (fA && this.hb()) {
			var aB;
			for (um.imageSmoothingEnabled = !0, aB = 0; aB < 5; aB++) fH[aB] && this.fc[aB] && (um.setTransform(nN[aB], 0, 0, nN[aB], ew[aB], ey[aB]), um.drawImage(fA[aB], 0, 0));
			um.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function dX() {
	this.aCn = 0, this.aCo = null, this.ty = null, this.l1 = null, this.y = null, this.uL = null, this.tw = null, this.message = null, this.aCp = null, this.rt = null, this.aCq = null, this.aCr = new aCs, this.a1I = 0, this.a9P = 0, this.dd =
		function() {
			this.a9P = bf.eO, this.aCn = bG.sv.wP(bj.eL.data[105].value), this.ty = new aCt, this.l1 = new aCu, this.y = new aCv, this.uL = new aCw, this.tw = new aCx, this.message = new aCy, this.aCp = new aCz, this.rt = new aD0, this.aCq = new aD1,
				this.y.dd(), bp.dd(), this.a1I = 1, a0.a1.setState(1), aa.setState(0)
		}, this.uF = function() {
			this.rt && this.rt.uF(), this.aCo = null, this.ty = null, this.l1 = null, this.y = null, this.uL = null, this.tw = null, this.message = null, this.aCp = null, this.rt = null, this.aCq = null, this.a1I = 0, bp.uF(), a0.a1.setState(0)
		}
}

function aCt() {
	function aDO(g, tC, tD) {
		var aDP = g[tC];
		g[tC] = g[tD], g[tD] = aDP
	}
	this.tz = [
		[],
		[],
		[],
		[]
	], this.u0 = [0, 0, 0, 0], this.aD2 = [], this.aD3 = function(aD4, sq, username, u5, a3s, aD5, elo, color, vx, aD6) {
		username = this.aD8(sq, username, u5, a3s, aD5, elo, color, vx, aD6);
		this.tz[aD4].push(username), bn.aCn === sq && (bn.aCo = username), bn.aCq.aD9(sq) && (username.u7 = 1), bn.y.aDA += 29 === t.ss && bn.y.rh[0] === aD4 && 1 === bn.y.rh[2]
	}, this.aD8 = function(sq, username, u5, a3s, aD5, elo, color, vx, aD6) {
		return {
			sq: sq,
			username: username,
			u5: u5,
			a3s: a3s,
			aD5: aD5,
			elo: elo,
			color: color,
			vx: vx,
			aD6: aD6
		}
	}, this.aDB = function(e9, aD4, u5, a3s, aD5, elo, vx) {
		e9 = this.tz[aD4][e9];
		e9.u5 = u5, e9.a3s = a3s, e9.aD5 = aD5, e9.elo = elo, e9.vx = vx, bn.y.aDA += 29 === t.ss && bn.y.rh[0] === aD4 && 1 === bn.y.rh[2]
	}, this.aDC = function(e9, aD4, aDD) {
		var e9 = this.tz[aD4][e9],
			aDE = e9.username,
			aDF = "Redacted " + bF.sv.zR(e9.sq, 2);
		e9.username = aDD ? "[" + bA.rc.a0r(aDE) + "] " + aDF : aDF, aDE.indexOf("Redacted") < 0 && (e9.aDG = aDE), bn.rt.aDH(e9.sq), bn.y.aDA += 29 === t.ss && bn.y.rh[0] === aD4 && 1 === bn.y.rh[2]
	}, this.aDI = function(e9, aDJ, aDK) {
		var player = this.tz[aDJ][e9];
		this.aDL(e9, aDJ), this.tz[aDK].push(player), bn.y.aDA += 29 === t.ss && bn.y.rh[0] === aDK && 1 === bn.y.rh[2]
	}, this.aDL = function(e9, aDJ) {
		var ty = this.tz[aDJ];
		this.aD2.push(ty[e9]), 1e3 < this.aD2.length && this.aD2.shift(), e9 >= this.u0[aDJ] ? ty[e9] = ty[ty.length - 1] : (this.u0[aDJ]--, 2 === aDJ ? (ty.splice(this.u0[aDJ] + 1, 0, ty[ty.length - 1]), ty.splice(e9, 1)) : (ty[e9] = ty[this.u0[
			aDJ]], ty[this.u0[aDJ]] = ty[ty.length - 1])), ty.pop(), bn.y.aDA += 29 === t.ss && bn.y.rh[0] === aDJ && 1 === bn.y.rh[2]
	}, this.aDM = function(e9, rg) {
		bn.y.aDA += 29 === t.ss && bn.y.rh[0] === rg && 1 === bn.y.rh[2];
		var ty = this.tz[rg],
			qV = ty[e9];
		if (2 === rg)
			if (e9 >= this.u0[rg]) {
				bn.aCq.join(qV);
				for (var aDN = this.u0[rg], elo = qV.elo; aDN && elo > ty[aDN - 1].elo;) aDN--;
				ty[e9] = ty[this.u0[rg]], ty.splice(this.u0[rg]++, 1), ty.splice(aDN, 0, qV)
			} else ty.splice(this.u0[rg]--, 0, qV), ty.splice(e9, 1);
		else e9 >= this.u0[rg] ? (bn.aCq.join(qV), aDO(ty, this.u0[rg]++, e9)) : aDO(ty, --this.u0[rg], e9)
	}, this.aDQ = function(sq) {
		for (var tz = this.tz, ep = tz.length, aB = 0; aB < ep; aB++)
			for (var ty = tz[aB], l7 = ty.length, f8 = 0; f8 < l7; f8++)
				if (sq === ty[f8].sq) return ty[f8];
		return null
	}
}

function aD1() {
	var aDR = [],
		aDS = [],
		aDT = 0;

	function aDU(g, a6s, aDY, aDZ) {
		var ep = g.length;
		if (0 === ep) return "";
		var qK = "@" + g[0];
		if (1 === ep) return qK + a6s + aDZ;
		for (var aB = 1; aB < ep - 1; aB++) qK += ", @" + g[aB];
		return qK + " and @" + g[ep - 1] + aDY + aDZ
	}
	this.dd = function() {
		var qK = aDU(aDS, " is", " are", " in the lobby!");
		qK.length && bn.message.aDV({
			id: 7,
			r: qK
		}), aDR = [], aDS = [], aDT = 0
	}, this.aD9 = function(aDW) {
		return bn.aCn !== aDW && (aDW = bF.sv.zR(aDW, 5), !!bj.vB.u7(aDW)) && (aDS.push(aDW), !0)
	}, this.join = function(player) {
		bn.aCn !== player.sq && (player = bF.sv.zR(player.sq, 5), bj.vB.u7(player)) && aDR.push(player)
	}, this.aDX = function() {
		var a6s, aDY;
		++aDT < 3 || (aDT = 0, a6s = aDU(aDS, "", "", " entered the lobby!"), (a6s = (aDY = aDU(aDR, "", "", " joined a game!")).length ? a6s.length ? a6s + " " + aDY : aDY : a6s).length && bn.message.aDV({
			id: 7,
			r: a6s
		}), aDR = [], aDS = [])
	}
}

function aCs() {
	this.dm = function(e9) {
		if ((u0 = bn.ty.u0[e9]) < 2) return !1;
		var ri = bn.y.rj[e9],
			aDa = 9 === ri.aDb ? 333 : 512,
			u0 = Math.min(u0, aDa);
		8 === ri.aDb && (u0 -= u0 % 2);
		aDa = bn.ty.tz[e9].splice(0, u0), bn.ty.u0[e9] -= u0, u0 = function(aDc) {
			if (bn.aCo)
				for (var ep = aDc.length, sq = bn.aCo.sq, aB = 0; aB < ep; aB++)
					if (aDc[aB].sq === sq) return aB;
			return -1
		}(aDa);
		return -1 === u0 ? (bn.ty.aD2 = bn.ty.aD2.concat(aDa), 1e3 < bn.ty.aD2.length && bn.ty.aD2.splice(0, bn.ty.aD2.length - 1e3), bn.y.aDA += 29 === t.ss && bn.y.rh[0] === e9 && 1 === bn.y.rh[2], !1) : (8 === ri.aDb && (ri.aDf = (ri.aDf + (
			u0 >> 1)) % 1024, e9 = u0 - u0 % 2, u0 %= 2, aDa = aDa.slice(e9, 2 + e9)), ax.dd(ri, aDa, u0), !0)
	}, this.aDg = function(ri, aDc, aDd) {
		var es = aD.data = new a4b,
			aDk = (es.spawningSeed = ri.spawningSeed, ri.aDb < 7 ? (es.gameMode = 1, es.numberTeams = ri.aDb + 2) : 9 === ri.aDb ? (es.gameMode = es.isZombieMode = 1, es.numberTeams = 2) : (es.gameMode = 0, es.battleRoyaleMode = 7 === ri.aDb ?
				0 : 10 === ri.aDb ? 1 : 2), es.selectedPlayer = aDd, es.isContest = ri.aDh, es.mapType = bS.aDi(ri.eV) ? 0 : 1, bS.aDj(es, ri.eV), es.mapSeed = ri.mapSeed, es.humanCount = aDc.length);
		es.selectableSpawn = 1 === es.gameMode || aDk < 100, es.colorsData = new Uint32Array(aDk), es.playerNamesData = new Array(aDk);
		for (var aB = 0; aB < aDk; aB++) es.colorsData[aB] = aDc[aB].color, es.playerNamesData[aB] = aDc[aB].username;
		if (2 === es.battleRoyaleMode)
			for (es.elo = new Uint16Array(aDk), aB = 0; aB < aDk; aB++) es.elo[aB] = aDc[aB].elo;
		aa.setState(8), bS.a7(ri.eV, es.mapSeed), aD.a4g(), aD.a4e = 2
	}
}

function aCu() {
	var e0 = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player", "Patreon Member"],
		aDl = [bB.nz, bB.nz, bB.o0, bB.oT, bB.oU, bB.oG, bB.oZ, bB.o0, bB.ov, bB.oj, bB.os],
		aDm = [
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
		aDn = ["Your account is too new!", "The server couldn't process your request.", "Spam detected!", "You are muted!", "Player couldn't be found.", "You don't have permission for this operation!", "Not enough gold!", "Action cancelled!",
			"User received this punishment already!", "Lobby restarts in 2 minutes!", "Lobby restarts in 10 seconds!"
		];

	function aE0(rk, sq, aE2) {
		for (var f9 = rk.length - 1; 0 <= f9; f9--) {
			var qV = rk[f9];
			0 === qV.id && qV.sq === sq && (qV.r = "[Redacted Message]", aE2) && (qV.aE3 = 1)
		}
	}
	this.rp = function(aDo) {
		var aDp, a0s;
		return aDo.id < 5 && (aDp = "@" + bF.sv.zR(aDo.sq, 5)), 0 === aDo.id ? aDp + ": " + aDo.r : 1 === aDo.id ? (a0s = "@" + bF.sv.zR(aDo.target, 5), 0 === aDo.aDq ? 32768 <= aDo.value ? aDp + " voted with " + (aDo.value - 32768 + 1) +
				" gold against " + a0s + " to weaken the latter's admin position. 📉" : aDp + " voted with " + (aDo.value + 1) + " gold for " + a0s + " to strengthen the latter's admin position. 💪" : 1 === aDo.aDq ? aDp + " sent " + Math.floor(
					aDo.value / 100) + " 🧈 gold to " + a0s + "." : aDp + " voted with " + (aDo.value / 10).toFixed(1) + " points for " + a0s + " to acknowledge the latter as clan leader. ✅") : 2 === aDo.id ? 0 === aDo.aDq ? aDp +
			" was 🔇 muted for 1 Hour." : 1 === aDo.aDq ? "The username of " + aDp + " was ✂️ redacted. Duration: 1 Day" : aDp + " 👢 was kicked." : 3 === aDo.id ? aDp + bo.eC(aDo.aDq, bo.e6[aDo.aDq][aDo.value]) + "@" + bF.sv.zR(aDo.target, 5) +
			bo.eE(aDo.aDq, bo.e6[aDo.aDq][aDo.value]) : 4 === aDo.id ? aDp + bo.eC(5, bo.e6[5][aDo.aDq]) + "@" + bF.sv.zR(aDo.target, 5) + bo.eE(5, bo.e6[5][aDo.aDq]) : 5 === aDo.id ? aDn[aDo.aDq] : 6 === aDo.id ? "You are about to mention " +
			aDo.value + " player" + (1 === aDo.value ? "" : "s") + ". This action will cost " + (Math.max(10 * aDo.value, 10) / 100).toFixed(2) + " Gold. Proceed? (yes / no)" : 7 === aDo.id ? aDo.r : void 0
	}, this.ro = function(aDo, a71) {
		return {
			aDo: aDo,
			r: a71,
			aDr: 0,
			fontSize: 1,
			rs: 0,
			aDs: aDo.id ? bB.oS : bB.nl
		}
	}, this.u3 = function(player, rg) {
		return (2 === rg ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username
	}, this.u4 = function(u5) {
		return aDl[u5]
	}, this.aDt = function(u5, a3s) {
		return u5 < 3 || 7 === u5 ? aDm[u5][0] : 4 === u5 ? aDm[u5][a3s < 1 ? 0 : a3s < 10 ? 1 : 2] : aDm[u5][a3s < 10 ? 0 : 1]
	}, this.aDu = function(a3s) {
		return 0 === a3s
	}, this.aDQ = function(rg, sq) {
		for (var tz = bn.ty.tz, ty = tz[rg], ep = ty.length, aB = 0; aB < ep; aB++)
			if (sq === ty[aB].sq) return ty[aB];
		for (var f9 = 0; f9 < tz.length; f9++)
			if (rg !== f9)
				for (ep = (ty = tz[f9]).length, aB = 0; aB < ep; aB++)
					if (sq === ty[aB].sq) return ty[aB];
		return null
	}, this.u6 = function(qV) {
		return !!bn.aCo && qV.sq === bn.aCo.sq
	}, this.aDv = function(ty, aDw, aDx) {
		var a0p = [];
		loop: for (var aB = aDw; aB < aDx; aB++) {
			var a0q = bA.rc.a0r(ty[aB].username);
			if (a0q) {
				for (var f9 = a0p.length - 1; 0 <= f9; f9--)
					if (a0q === a0p[f9].name) {
						a0p[f9].gI++;
						continue loop
					} a0p.push({
					name: a0q,
					gI: 1
				})
			}
		}
		if (a0p.sort(function(f8, f9) {
				return f9.gI - f8.gI
			}), 0 === a0p.length) return "";
		for (var qK = a0p[0].name + ": " + a0p[0].gI, aB = 1; aB < a0p.length; aB++) qK += "   " + a0p[aB].name + ": " + a0p[aB].gI;
		return qK
	}, this.aDy = function(u5, a3s, aD5) {
		return 0 === e0[u5].length ? "Rank: " + (a3s + 1) : e0[u5] + " Rank: " + (a3s + 1) + (3 !== u5 && aD5 < 100 ? "   " + e0[3] + " Rank: " + (aD5 + 1) : "")
	}, this.aDz = function(sq) {
		for (var rj = bn.y.rj, aB = 0; aB < rj.length; aB++) aE0(rj[aB].rk, sq);
		aE0(bn.message.aE1(), sq, 1), bn.rt.aDz(sq)
	}
}

function aCx() {
	var sL = 0,
		aE4 = 0,
		aE5 = 0,
		aE6 = null,
		aE7 = null;

	function aEA(qV, aEB, aEC) {
		var qK = qV.username;
		return (qK += "   " + bn.l1.aDy(qV.u5, qV.a3s, qV.aD5)) + function(qV) {
			qV = qV.vx;
			if (qV < 1e3) return "   Gold: " + qV;
			if ((qV %= 1024) < 1e3) return "   Gold: " + qV + "k";
			return "   Gold: " + (qV - 999) + "M"
		}(qV) + ("   IP: " + bF.sv.zR(qV.aD6, 2)) + ("   " + ["🟥 Offline", "🟩 Online"][aEC ? aE4 : aE9(qV, aEB)])
	}

	function aE9(qV, aEB) {
		return aE4 = aEB || bn.ty.aDQ(qV.sq) ? 1 : 0
	}
	this.aE8 = function() {
		!sL || aE4 === aE9(aE7) && aE5 === aE7.vx || (aE5 = aE7.vx, aE6.show(-1, -1, aEA(aE7, 0, 1), 1, 1))
	}, this.u8 = function(e, qV, aEB) {
		var a8c = e.target.getBoundingClientRect();
		this.show(a8c.left, a8c.top, qV, 0, aEB), e.target.addEventListener("mouseleave", function remove() {
			e.target.removeEventListener("mouseleave", remove), bn.tw && bn.tw.ru(1)
		})
	}, this.show = function(ew, ey, qV, sP, aEB) {
		aE6 = aE6 || new sJ, aE5 = (aE7 = qV).vx, aE6.show(ew, ey, aEA(qV, aEB), sP), sL = 1
	}, this.ru = function(sV) {
		aE6 && aE6.ru(sV) && (sL = 0, aE7 = null)
	}
}

function aCv() {
	function aEH(aEJ) {
		bn.y.aDA && 1 === bn.y.rh[2] && t.a5B(29).aEK(), bn.y.aDA = 0, t.a5B(29).aEL(), 0 !== bn.y.rj[bn.y.rh[0]].tj && !aEJ || t.a5B(29).aEM(), bn.tw.aE8()
	}
	this.rj = new Array(4), this.rh = [0, 0, 1, 0], this.aDA = 0, this.aEE = [0, 0], this.dd = function() {
		for (var aB = 0; aB < this.rj.length; aB++) this.rj[aB] = new aEF;
		this.rh[0] = bj.eL.data[158].value
	}, this.aEG = function() {
		aEH(!0), bn.aCq.dd()
	}, this.aDX = function() {
		bn.aCq.aDX();
		for (var aB = 0; aB < bn.y.rj.length; aB++) {
			var ri = bn.y.rj[aB];
			0 === ri.tj ? ri.aEN = 0 : (ri.aEO = Math.max(ri.aEO - ri.aEN % 2, 0), ri.aEN++)
		}
		aEH(!1)
	}, this.aEP = function(rg) {
		this.rh[0] !== rg || this.rh[2] || t.a5B(29).aEQ()
	}
}

function aCz() {
	var aER = 0,
		aES = "",
		aET = 0,
		aEU = 0,
		aEV = 0;

	function aEX(a71) {
		b0.aEi.aEj(3, a71)
	}

	function aEg(gI) {
		aER = 1, bn.message.aDV({
			id: 6,
			value: gI
		})
	}

	function aEa(r) {
		var aEm = new RegExp("\\B@[-\\w\\[\\]]+", "g");
		return r.match(aEm)
	}
	this.a0E = function(r) {
		var aEW, g, aEc;
		if (aER) return aER = 0, "yes" === (aEW = r.toLowerCase()) || "y" === aEW ? void aEX(aES) : void bn.message.aDV({
			id: 5,
			aDq: 7
		});
		!(r.indexOf("@") < 0) && (aEW = aEa(r)) ? (aES = r, g = function(aEZ) {
			for (var ep = aEZ.length, aEk = [0, 0, 0, 0], aB = 0; aB < ep; aB++)
				for (var i = aEZ[aB], f8 = 0; f8 < 4; f8++) i === "@room" + (f8 + 1) && (aEk[f8] = 1);
			if ((aEU = bA.ql.a2c(aEk)) % 4 == 0) return bA.ql.a2u(bn.ty.tz);
			for (f8 = 0; f8 < 4; f8++) aEk[f8] = aEk[f8] ? bn.ty.tz[f8] : [];
			return bA.ql.a2u(aEk)
		}(aEW), function(aEZ, aEc, r) {
			if (!aET) return;
			for (var ep = aEc.length, aB = 0; aB < ep; aB++) 2 === aEc[aB].id && (r = r.replace(aEZ[aEc[aB].e9], "@" + aEc[aB].fH));
			return aER = 1, aEX((aES = r).slice(0, 126) + "|"), 1
		}(aEW, aEc = function(aEZ) {
			for (var aEc = [], ep = (aEV = aET = 0, aEZ.length), aB = 0; aB < ep; aB++) {
				var i = aEZ[aB],
					l7 = i.length;
				bA.rc.startsWith(i, "@[") ? l7 <= 9 && bA.rc.a3S(i, "]") && aEc.push({
					id: 0,
					fH: i.substring(2, l7 - 1).toUpperCase()
				}) : 6 === l7 ? bA.rc.startsWith(i, "@room") || (aEV++, aEc.push({
					id: 1,
					fH: bG.sv.wP(i.substring(1))
				})) : 1 < l7 && l7 < 5 && 0 <= (l7 = b7.data.aCR(i.substring(1))) && (aEc.push({
					id: 2,
					fH: l7,
					e9: aB
				}), aET = 1)
			}
			return aEc
		}(aEW), r) || (0 === aEc.length ? aEU || function(aEZ) {
			for (var ep = aEZ.length, aB = 0; aB < ep; aB++) {
				var i = aEZ[aB];
				if ("@all" === i || "@everyone" === i) return 1
			}
			return
		}(aEW) ? aEg(g.length) : aEX(r) : aEW.length === aEV ? aEX(r) : (function(g, aEc) {
			var l7 = aEc.length;
			if (0 === l7) return;
			var ep = g.length;
			loop: for (var aB = ep - 1; 0 <= aB; aB--) {
				for (var f8 = 0; f8 < l7; f8++)
					if (0 === aEc[f8].id) {
						if (aEc[f8].fH === bA.rc.a0r(g[aB].username)) continue loop
					} else if (1 === aEc[f8].id && aEc[f8].fH === g[aB].sq) continue loop;
				g[aB] = g[--ep], g.pop()
			}
		}(g, aEc), aEg(g.length)))) : aEX(r)
	}, this.aEn = function(r) {
		var aEZ = aEa(r);
		if (aEZ)
			for (var a5 = new RegExp("^[0-9]+$"), ep = aEZ.length, aB = 0; aB < ep; aB++) {
				var i = aEZ[aB].substring(1),
					l7 = i.length;
				1 <= l7 && l7 <= 3 && a5.test(i) && (l7 = parseInt(i, 10), !isNaN(l7)) && 0 <= l7 && l7 < b7.data.g.length && (r = r.replace("@" + i, "@" + b7.data.g[l7]))
			}
		return r
	}
}

function aCy() {
	var aEo, aEp = [],
		aEq = -1,
		aEr = 0,
		aEs = 0;

	function aEx() {
		aEr = bf.eO, (3 === this.uC ? aEw : (aEq = (aEp.length + aEq + 2 * this.uC - 1) % aEp.length, aEv))()
	}

	function aEv() {
		0 !== aEp.length && (aEs = 0, aEo && aEo.uF(), (aEo = new u9(aEx)).s6(aEq, aEp.length), aEo.show(aEp[aEq]), bn.message.resize())
	}

	function aEw() {
		aEs = 1, aEo && aEo.uF(), (aEo = new uG(aEv)).s6(aEp.length), aEo.show(), bn.message.resize()
	}
	this.aDV = function(aDo) {
		var qV;
		2 === aDo.id && 3 === aDo.aDq ? bn.l1.aDz(aDo.sq) : (qV = bn.l1.ro(aDo, bn.l1.rp(aDo)), (5 !== aDo.id && 6 !== aDo.id || (t.a5B(29).aEt().rr(qV), 5 === aDo.id)) && (qV = bf.eO < aEr + 2e4, aEq !== aEp.length - 1 && qV || (aEq = aEp
			.length), aEp.push(aDo), bj.eL.data[14].value || 7 === aDo.id || bp.play(), aEo) && (aEs && (bj.eL.data[13].value || qV) ? aEo.s6(aEp.length) : aEv()))
	}, this.show = function() {
		aEw()
	}, this.ru = function() {
		aEq = aEp.length - 1, aEo && aEo.uF(), aEo = null
	}, this.resize = function() {
		aEo && aEo.resize()
	}, this.aE1 = function() {
		return aEp
	}
}

function aCw() {
	var aEy = null,
		aEz = null,
		aF0 = 0,
		aF1 = 0,
		aF2 = null;

	function aF4() {
		0 !== aEz.u5 && (bn.uL.ru(), t.u(8, 29, new st(25, {
			su: 0,
			sq: bF.sv.zR(aEz.sq, 5),
			sr: 0
		}, 29)))
	}

	function aF6() {
		return !bn.aCo || bn.l1.u6(aEz) ? 1 : 0
	}

	function aF5() {
		var ew = aEy.ew,
			ey = aEy.ey,
			aFF = (bn.uL.ru(), aF6());
		aEy = new uH([new w(bo.e6[5][0], function() {
			aF9(5, 0)
		}, aFF), new w(bo.e6[5][1], function() {
			aF9(5, 1)
		}, aFF), new w(bo.e6[5][2], function() {
			aF9(5, 2)
		}, aFF), new w(bo.e6[5][3], function() {
			aF9(5, 3)
		}, aFF)]), aF8(ew, ey), aF1 = aF0 = 2
	}

	function aF7() {
		29 === t.ss && t.a5A().aCp(bF.sv.zR(aEz.sq, 5))
	}

	function aF9(id, value) {
		5 === id && b0.aFG.aFH({
			su: 3,
			sq: bF.sv.zR(aEz.sq, 5),
			value: value
		})
	}

	function aF8(ew, ey, uN) {
		aEy.show(ew, ey, uN), bn.tw.show(aEy.ew, aEy.ey, aEz, 1)
	}
	this.aF3 = function(e, qV) {
		aF0 = 1, aEz = qV, aEy = new uH([new w(L(127), aF4, 0 === qV.u5 ? 1 : 0), new w(L(128), aF5, aF6()), new w(L(129), aF7, 0)]), aF8((aF2 = {
			clientX: e.clientX,
			clientY: e.clientY
		}).clientX, aF2.clientY, 1)
	}, this.a2C = function(code) {
		if (29 !== t.ss) return !1;
		if (!aEz) return !1;
		if (!(code.length < 1))
			if ("Escape" === code) this.ru();
			else if (bA.rc.startsWith(code, "Numpad") || bA.rc.startsWith(code, "Digit")) {
			code = parseInt(code[code.length - 1], 10);
			if (!isNaN(code))
				if (0 === aF0) this.aF3(aF2, aEz);
				else {
					if (!aEy) return !1;
					1 === aF0 ? code <= 1 ? aF4() : 2 === code ? aF5() : (aF7(), this.ru()) : (aF9(aF1, bL.hx(code - 1, 0, bo.e6[aF1].length - 1)), this.ru())
				}
		}
		return !0
	}, this.ru = function() {
		aF0 = 0, aEy && aEy.ru(), aEy = null, bn.tw.ru()
	}
}

function aEF() {
	this.tj = 0, this.eV = 0, this.mapSeed = 0, this.aDb = 0, this.aFK = 0, this.aFL = 0, this.aDh = 0, this.aEO = 0, this.spawningSeed = 0, this.a1Q = 0, this.aDf = 0, this.rk = [], this.rl = 1048575, this.aEN = 0, this.aFM = [{
		eV: 0,
		mapSeed: 0,
		aDb: 0,
		eO: 100,
		aDh: 0
	}, {
		eV: 1,
		mapSeed: 0,
		aDb: 1,
		eO: 200,
		aDh: 0
	}, {
		eV: 2,
		mapSeed: 0,
		aDb: 2,
		eO: 300,
		aDh: 0
	}, {
		eV: 3,
		mapSeed: 0,
		aDb: 3,
		eO: 400,
		aDh: 0
	}, {
		eV: 0,
		mapSeed: 0,
		aDb: 9,
		eO: 500,
		aDh: 0
	}, {
		eV: 1,
		mapSeed: 0,
		aDb: 10,
		eO: 600,
		aDh: 0
	}, {
		eV: 2,
		mapSeed: 0,
		aDb: 8,
		eO: 700,
		aDh: 0
	}, {
		eV: 3,
		mapSeed: 0,
		aDb: 3,
		eO: 800,
		aDh: 0
	}]
}

function aD0() {
	var aFN = [],
		t5 = [],
		aFO = [];

	function aFQ(qV) {
		for (var r = qV.r, aFP = [];;) {
			var fA = function aFS(r, position) {
				position = r.indexOf("@", position);
				if (position < 0) return -1;
				var qK = r.substring(position + 1, position + 6);
				if (5 !== qK.length) return aFS(r, position + 1);
				if (bA.rc.startsWith(qK, "room")) return aFS(r, position + 1);
				var aFZ = new RegExp("^[a-zA-Z0-9_-]+$");
				if (!aFZ.test(qK)) return aFS(r, position + 1);
				aFZ = r.substring(position + 6, position + 7);
				if (1 !== aFZ.length) return position;
				qK = new RegExp("^[ :!.]+$");
				if (!qK.test(aFZ)) return aFS(r, position + 1);
				return position
			}(r, 0);
			if (-1 === fA) {
				aFP.push(aFT(r, qV));
				break
			}
			0 === fA ? aFP.push(aFU(r.substring(1, 6), qV, fA)) : (aFP.push(aFT(r.substring(0, fA), qV)), aFP.push(aFU(r.substring(fA + 1, fA + 6), qV, fA))), r = r.substring(fA + 6)
		}
		return aFP
	}

	function aFU(qK, qV, fA) {
		var aD7 = function(qK) {
				var sq = bG.sv.wP(qK),
					aD7 = bn.ty.aDQ(sq);
				if (aD7) {
					for (aFN.push(aD7); 75 < aFN.length;) aFN.shift();
					return aD7
				}
				for (var aD2 = bn.ty.aD2, aB = aD2.length - 1; 0 <= aB; aB--)
					if (aD7 = aD2[aB], sq === aD7.sq) return aFN.push(aD7), aD7;
				for (aB = aFN.length - 1; 0 <= aB; aB--)
					if (aD7 = aFN[aB], sq === aD7.sq) return aFN.push(aD7), aD7;
				return bn.ty.aD8(sq, qK, 1, 999999, 999999, 0, 0, 0, 0)
			}(qK),
			qK = (0 === fA && 0 === qV.aDo.id && qV.rs && (qV.fontSize = bn.l1.aDt(aD7.u5, aD7.a3s), qV.aDr = bn.l1.aDu(aD7.a3s)), document.createElement("span"));
		return qK.textContent = function(aD7, qV, fA) {
			if (aD7.aFX) return aD7.aFX--, fA = 2 === qV.aDo.id || (3 === qV.aDo.id || 4 === qV.aDo.id) && 0 !== fA, aD7.username + (fA ? " (" + aD7.aDG + ")" : "");
			if (qV.aDo.aE3) return "Redacted " + bF.sv.zR(aD7.sq, 2);
			return aD7.username
		}(aD7, qV, fA), qK.style.display = "inline-block", qK.style.color = bn.l1.u4(aD7.u5), qK.style.cursor = "pointer", qK.style.margin = "0", qK.style.font = "inherit", qK.style.minWidth = qK.style.minHeight = "1em", bn.l1.u6(aD7) && (qK
			.style.textDecoration = "underline"), aD7.u7 && (qK.style.textDecorationLine = "underline", qK.style.textDecorationStyle = "dotted"), bn.l1.aDu(aD7.a3s) && (qK.style.fontWeight = "bold"), qK.onclick = function(e) {
			bn.uL.aF3(e, aD7)
		}, bJ.r5() || (qK.onmouseover = function(e) {
			bn.tw.u8(e, aD7)
		}), t5.push(qK), qK
	}

	function aFT(r, qV) {
		var rb = document.createElement("span");
		return rb.textContent = r, rb.style.color = qV.aDs, rb.style.margin = "0", rb.style.font = "inherit", rb
	}

	function aFe(aD7, aDF, sq) {
		sq !== aD7.sq || aD7.aDG || (aD7.aDG = aD7.username, aD7.username = aDF)
	}
	this.uF = function() {
		for (var aB = 0; aB < t5.length; aB++) t5[aB].onclick = t5[aB].onmouseover = null;
		aFO = t5 = null
	}, this.transform = function(qV) {
		for (var qI = document.createElement("div"), aFP = aFQ(qV), aB = 0; aB < aFP.length; aB++) qI.appendChild(aFP[aB]);
		0 === qV.aDo.id && (qI.vx143 = qV.aDo, aFO.push(qI)), qI.style.margin = "0.6em 0.6em", qV.rs && (qI.style.marginLeft = qI.style.marginRight = "inherit"), qI.style.font = "inherit";
		var aFR = 0 < qV.aDo.id;
		return qV.aDr && (qI.style.fontWeight = "bold"), aFR && (qI.style.paddingLeft = "0.7em"), aFR && (qI.style.fontStyle = "italic"), qI.style.fontSize = qV.fontSize.toFixed(2) + "em", qI
	}, this.aFc = function(aFd) {
		if (aFd && (2 === aFd.id && 1 === aFd.aDq || 3 === aFd.id && 2 === aFd.aDq)) {
			var sq = 3 === aFd.id ? aFd.target : aFd.sq;
			if (!bn.ty.aDQ(sq)) {
				for (var aDF = "Redacted " + bF.sv.zR(sq, 2), aD2 = bn.ty.aD2, aB = aD2.length - 1; 0 <= aB; aB--) aFe(aD2[aB], aDF, sq);
				for (aB = aFN.length - 1; 0 <= aB; aB--) aFe(aFN[aB], aDF, sq)
			}
		}
	}, this.aDH = function(sq) {
		for (var aFf = aFO, aB = aFf.length - 1; 0 <= aB; aB--) {
			var es = aFf[aB];
			if (es.vx143.sq === sq) {
				for (; es.firstChild;) t.removeChild(es, es.firstChild);
				for (var aFP = aFQ(bn.l1.ro(es.vx143, bn.l1.rp(es.vx143))), f8 = 0; f8 < aFP.length; f8++) es.appendChild(aFP[f8]);
				aFf.splice(aB, 1)
			}
		}
	}, this.aDz = function(sq) {
		for (var aFf = aFO, aB = aFf.length - 1; 0 <= aB; aB--) {
			var es = aFf[aB];
			if (es.vx143.sq === sq) {
				for (; es.firstChild;) t.removeChild(es, es.firstChild);
				es.vx143.r = "[Redacted Message]";
				for (var aFP = aFQ(bn.l1.ro(es.vx143, bn.l1.rp(es.vx143))), f8 = 0; f8 < aFP.length; f8++) es.appendChild(aFP[f8]);
				aFf.splice(aB, 1)
			}
		}
	}
}

function cP() {
	var aFg, aFh, aFi;

	function aFn(aB) {
		var button = aY.rC[aB],
			ew = button.ew,
			ey = button.ey,
			i = button.i,
			j = button.j;
		um.fillStyle = button.aFl, um.fillRect(ew, ey, i, j), aB === aFg && (um.fillStyle = aFi, um.fillRect(ew, ey, i, j)), um.lineWidth = bc.z8, um.strokeStyle = aFh, um.strokeRect(ew, ey, i, j),
			function(button) {
				var ew = button.ew,
					ey = button.ey,
					i = button.i,
					j = button.j;
				bA.qd.textAlign(um, 1), bA.qd.textBaseline(um, 1), um.font = button.font, um.fillStyle = aFh, um.fillText(button.a71, Math.floor(ew + i / 2), Math.floor(ey + j / 2 + .1 * button.fontSize))
			}(button)
	}
	this.i = 0, this.j = 0, this.ey = 0, this.gap = 0, this.dd = function() {
		aFg = -1, aFh = bB.nl, aFi = "rgba(255,255,255,0.16)", this.rC = new Array(7), this.j = Math.floor((a0.a1.hy() ? .123 : .093) * h.hz), this.i = Math.floor((a0.a1.hy() ? 3.96 : 4.2) * this.j), this.gap = Math.floor(.025 * this.i);
		var aFj = Math.floor(.26 * this.j),
			aFk = bA.qd.sS(1, aFj);
		this.rC[0] = {
			ew: 0,
			ey: 0,
			i: Math.floor(.6 * this.i - this.gap / 2),
			j: this.j,
			a71: "Multiplayer",
			font: aFk,
			aFl: "rgba(22,88,22,0.8)",
			fontSize: aFj
		}, aFj = Math.floor(.18 * this.j), aFk = bA.qd.sS(1, aFj), this.rC[1] = {
			ew: 0,
			ey: 0,
			i: this.i - this.rC[0].i - this.gap,
			j: this.j,
			a71: "Single Player",
			font: aFk,
			aFl: "rgba(22,88,88,0.8)",
			fontSize: aFj
		}, this.rC[2] = {
			ew: 0,
			ey: 0,
			i: this.i,
			j: Math.floor(.3 * this.j),
			a71: "",
			font: this.rC[1].font,
			aFl: "rgba(100,0,0,0.8)",
			fontSize: this.rC[1].fontSize
		}, this.rC[3] = {
			ew: 0,
			ey: 0,
			i: this.i,
			j: this.j,
			a71: "Back",
			font: this.rC[0].font,
			aFl: "rgba(0,0,0,0.8)",
			fontSize: this.rC[0].fontSize
		}, this.rC[4] = {
			ew: 0,
			ey: 0,
			i: this.i,
			j: Math.floor(.3 * this.j),
			a71: "The game was updated!",
			font: this.rC[1].font,
			aFl: "rgba(100,0,0,0.8)",
			fontSize: this.rC[1].fontSize
		}, this.rC[5] = {
			ew: 0,
			ey: 0,
			i: this.rC[0].i,
			j: Math.floor(.8 * this.j),
			a71: "Reload",
			font: this.rC[0].font,
			aFl: "rgba(0,100,0,0.8)",
			fontSize: this.rC[0].fontSize
		}, this.rC[6] = {
			ew: 0,
			ey: 0,
			i: this.rC[1].i,
			j: this.rC[5].j,
			a71: "Back",
			font: this.rC[0].font,
			aFl: "rgba(0,0,0,0.8)",
			fontSize: this.rC[0].fontSize
		}, this.a9b()
	}, this.a9b = function() {
		this.ey = Math.floor(.54 * h.j), this.rC[0].ew = Math.floor(.5 * h.i - .5 * this.i), this.rC[1].ew = this.rC[0].ew + this.rC[0].i + this.gap, this.rC[2].ew = this.rC[3].ew = this.rC[0].ew, this.rC[4].ew = this.rC[5].ew = this.rC[0].ew,
			this.rC[6].ew = this.rC[1].ew, this.rC[0].ey = Math.floor(.54 * h.j), this.rC[1].ey = this.rC[0].ey, this.rC[2].ey = Math.floor((h.j - this.rC[2].j - this.rC[3].j - this.gap) / 2), this.rC[3].ey = this.rC[2].ey + this.rC[2].j + this
			.gap, this.rC[4].ey = Math.floor((h.j - this.rC[4].j - this.rC[5].j - this.gap) / 2), this.rC[5].ey = this.rC[6].ey = this.rC[4].ey + this.rC[4].j + this.gap
	}, this.aFm = function() {
		aFn(0), aFn(1)
	}, this.aFo = function() {
		aFn(2), aFn(3)
	}, this.aFp = function() {
		aFn(4), aFn(5), aFn(6)
	}, this.a1e = function(ew, ey, mX) {
		var aB = -1;
		return 0 === aa.a1L() ? aB = this.a28(ew, ey, 0, 2) : 3 === aa.a1L() ? aB = this.a28(ew, ey, 3, 1) : 5 === aa.a1L() && (aB = this.a28(ew, ey, 5, 2)), aFg !== aB && (aFg = aB, mX) && (bf.dl = !0), -1 !== aB && (aT.re(), !0)
	}, this.a28 = function(ew, ey, aFq, size) {
		for (var aB = aFq; aB < aFq + size; aB++)
			if (ew >= this.rC[aB].ew && ey >= this.rC[aB].ey && ew <= this.rC[aB].ew + this.rC[aB].i && ey <= this.rC[aB].ey + this.rC[aB].j) return aB;
		return -1
	}
}

function cQ() {
	var aFs, aFt, a7C, aFu, aFv, aFw, aFx, aFy, aFz, a7B, aG0, aG1, aG2, aG3 = 1;

	function aG5(aG6) {
		!aG6 && 1 === aG2 && aG3 ? (aG3 = 0, b0.y.close(aG2, 3280)) : aG2 = (aG2 + 1) % b0.y.aG7, aG1 = bf.eO, b0.y.aG8(aG2, 4) && b0.aEi.aG9(aG2)
	}

	function aGA() {
		0 === aG2 ? o.a1T(3249) : aG5()
	}

	function aGF(ey, a9J, tj) {
		var nB = Math.floor((h.i - aFu) / 2) + aFx,
			nO = nB + Math.floor(tj * (aFu - 2 * aFx));
		um.lineWidth = a9J, um.beginPath(), um.moveTo(nB, ey), um.lineTo(nO, ey), um.lineTo(Math.floor(nB - aFx + tj * aFu), ey + a7C), um.lineTo(nB - aFx, ey + a7C), um.closePath()
	}
	this.aG4 = 1, this.dd = function() {
		aa.setState(6), aFs = 0, aFt = 1, aFy = "rgba(0,220,120,0.4)", aFz = "rgba(0,0,0,0.8)", this.resize(), bf.dl = !0, aG3 = 1, aG2 = this.aG4 - 1, aG5(1)
	}, this.resize = function() {
		aFu = Math.floor((a0.a1.hy() ? .5 : .25) * h.hz), aFv = aFu + 12, a7C = Math.floor(.125 * aFu), aFx = 3 * a7C, aFw = Math.floor(.225 * aFu), aG0 = Math.floor(.3 * a7C), a7B = bA.qd.sS(0, aG0)
	}, this.a1P = function(a1G) {
		a1G === aG2 && aGA()
	}, this.h2 = function(ew, ey) {
		var nB = Math.floor((h.i - aFv) / 2),
			nC = Math.floor(.5 * (h.j - bc.gap - a7C - aFw)) + a7C + bc.gap;
		return nB < ew && ew < nB + aFv && nC < ey && ey < nC + aFw && (this.a2J(), aY.a1e(ew, ey, !1), !0)
	}, this.a2J = function() {
		b0.y.a1U(3260), t.y.z()
	}, this.j5 = function() {
		6 === aa.a1L() && (bf.eO > aG1 + 12e3 && aGA(), 100 < (aFs += .07 * aFt * (aFs < 16 ? 5 + aFs : 84 < aFs ? 105 - aFs : 17)) ? (aFs = 100, aFt = -1) : aFs < 0 && (aFs = 0, aFt = 1), aFy = "rgba(0," + Math.floor(190 - 1.9 * aFs) + "," +
			Math.floor(120 - 1.2 * aFs) + "," + (.4 + .004 * aFs) + ")", aFz = "rgba(0," + Math.floor(1.9 * aFs) + "," + Math.floor(1.2 * aFs) + "," + (.8 - .004 * aFs) + ")", bf.dl = !0)
	}, this.ul = function() {
		var ew = Math.floor((h.i - aFv) / 2),
			ey = Math.floor(.5 * (h.j - bc.gap - a7C - aFw));
		! function(title, ey, a9J, tj) {
			um.fillStyle = aFz, aGF(ey, a9J, 1), um.fill(), um.fillStyle = aFy, aGF(ey, a9J, tj), um.fill(), um.strokeStyle = bB.nl, aGF(ey, a9J, 1), um.stroke(),
				function(aGH, ey) {
					bA.qd.textAlign(um, 1), bA.qd.textBaseline(um, 1), um.font = a7B, um.fillStyle = bB.nl, um.fillText(aGH, Math.floor(.5 * h.i), Math.floor(ey + .58 * a7C))
				}(title, ey)
		}(L(130), ey, 3, aFs / 100),
		function(ew, ey, i, j, a71) {
			um.fillStyle = bB.ng, um.fillRect(ew, ey, i, j), um.lineWidth = 3, um.strokeStyle = bB.nl, um.strokeRect(ew, ey, i, j);
			var ep = Math.floor(.3 * j);
			bA.qd.textAlign(um, 1), bA.qd.textBaseline(um, 1), um.font = bA.qd.sS(0, ep), um.fillStyle = bB.nl, um.fillText(a71, Math.floor(ew + i / 2), Math.floor(ey + j / 2 + .1 * ep))
		}(ew, ey + a7C + bc.gap, aFv, aFw, L(37))
	}
}

function cR() {
	var a1C = 0;
	this.dd = function() {
		aY.dd(), a1C = 0
	}, this.setState = function(aGI) {
		a1C = aGI
	}, this.a1L = function() {
		return a1C
	}, this.aGJ = function() {
		this.setState(8), t.x()
	}, this.a2C = function(e) {
		if (!bS.wf) return !1;
		if (!(bf.eO < 400)) {
			if ("Enter" === e.key || "Escape" === e.key) {
				if (this.aGK()) return !0;
				if ("Enter" === e.key) {
					if (0 === a1C) return !0;
					if (7 === a1C) return !0
				}
			}
			return !1
		}
	}, this.aGL = function() {
		bZ.resize()
	}, this.aGK = function() {
		return !!bZ.ru()
	}, this.h2 = function(ew, ey) {
		!bS.wf || bZ.h2(ew, ey) || 6 === a1C && aZ.h2(ew, ey) || bY.h2(ew, ey) || aT.h2(ew, ey)
	}, this.a1e = function(ew, ey) {
		!aT.a9U && aY.a1e(ew, ey, !0) || aT.a1e(ew, ey)
	}, this.click = function(ew, ey) {
		aT.a23()
	}, this.a1h = function(ew, ey, deltaY) {}, this.aGM = function() {
		aY.a9b(), bf.dl = !0
	}, this.ul = function() {
		8 !== a1C && 10 !== a1C && (um.imageSmoothingEnabled = !0, this.yE(), 0 !== a1C && (aT.ul(), aO.ul(), this.aGN(), bY.ul()), 0 !== a1C && 6 === a1C && aZ.ul(), bZ.ul(), t.ul())
	}, this.yE = function() {
		var aGP, aGO;
		if (__fx.makeMainMenuTransparent) um.clearRect(0, 0, h.i, h.j);
		else bS.wf ? (aGO = h.i / bS.f0, aGP = h.j / bS.f1, um.setTransform(aGO = aGP < aGO ? aGO : aGP, 0, 0, aGO, Math.floor((h.i - aGO * bS.f0) / 2), Math.floor((h.j - aGO * bS.f1) / 2)), um.drawImage(bS.wh, 0, 0), um.setTransform(1, 0, 0, 1,
			0, 0), um.fillStyle = bB.ng) : um.fillStyle = bB.nc, um.fillRect(0, 0, h.i, h.j)
	}, this.aGN = function() {
		var ey = Math.floor(.3 * h.j),
			canvas = ab.aGQ("territorial.io"),
			hq = (hq = 1.75 * h.j / canvas.width) * canvas.width < .98 * h.i ? .98 * h.i / canvas.width : hq,
			ew = (um.globalAlpha = .15, um.imageSmoothingEnabled = !1, Math.floor(.5 * (h.i - hq * canvas.width))),
			ew = Math.floor(ew / hq),
			ey = Math.floor(ey - .5 * canvas.height * hq),
			ey = Math.floor(ey / hq);
		um.setTransform(hq, 0, 0, hq, ew, ey), um.drawImage(canvas, ew, ey), um.setTransform(1, 0, 0, 1, 0, 0), um.globalAlpha = 1, um.imageSmoothingEnabled = !0
	}
}

function cr() {
	this.aDf = 0;
	var aGS, aGT, aGU, aGV, aGW, aGX = this.aGR = 0;

	function aGa() {
		aGV = aGW = null, aGX = 0
	}
	this.dd = function(ri, aDc, aDd) {
		t.x(), bn.uF(), aa.setState(10), aGV = ri, aGW = aDc, aGX = aDd, this.aDf = ri.aDf, this.aGR = aDd, aGS = 0, aGT = bf.eO + 4500, b0.y.a1Q = ri.a1Q, b0.y.a1J === ri.a1Q ? (console.log("direct pass"), aGU = 0) : (console.log(
			"delayed pass"), b0.y.close(b0.y.a1J, 3247), aGU = 2, b0.y.aG8(ri.a1Q, 5) && b0.p7.aGY()), um.imageSmoothingEnabled = !0, aa.yE();
		aDc = ab.aGQ("loading"), aDd = (a0.a1.hy() ? .396 : .25) * h.hz / aDc.width;
		um.setTransform(aDd, 0, 0, aDd, Math.floor((h.i - aDd * aDc.width) / 2), Math.floor((h.j - aDd * aDc.height) / 2)), um.imageSmoothingEnabled = !1, um.drawImage(aDc, 0, 0), um.setTransform(1, 0, 0, 1, 0, 0)
	}, this.mV = function() {
		0 < aGU && bf.eO > aGT && (aGU--, aGT += 4500, 0 === bf.aGb) && 0 === bf.k9() && b0.y.aG8(b0.y.a1Q, 5)
	}, this.aGc = function() {
		return 10 === aa.a1L() && (bn.aCr.aDg(aGV, aGW, aGX), aGa(), !0)
	}, this.aGd = function() {
		10 === aa.a1L() && 2 <= ++aGS && (bn.aCr.aDg(aGV, aGW, aGX), aGa())
	}
}

function cS() {
	var aGf, canvas, a0V, aGg;

	function aGm(e9, name, aGn, qK) {
		a0V[e9] = name, canvas[e9] = new Image, canvas[e9].onload = function() {
			! function(e9, aGn) {
				var a3x, a3y = null;
				7 === aGn ? a3x = bA.a2P.a40 : 8 === aGn ? (a3x = bA.a2P.a43, a3y = .1) : 3 === aGn ? (a3x = bA.a2P.a41, a3y = .06) : 5 === aGn ? a3x = bA.a2P.a44 : 6 === aGn ? a3x = bA.a2P.a3z : 4 === aGn && (a3x = bA.a2P.a45);
				canvas[e9] = bA.a2P.a3w(canvas[e9], a3x, a3y)
			}(e9, aGn), aGp()
		}, canvas[e9].onerror = function(e) {
			console.error("Error loading image at index", e9, "Error:", e), aGp()
		}, canvas[e9].src = "data:image/png;base64," + qK
	}

	function aGp() {
		aGf--, aGj()
	}

	function aGj() {
		0 === aGf && (aGf = -1, aGl(), bf.dl = !0, canvas[7] = aGg, canvas[8] = aGg, canvas[9] = aGg, canvas[10] = aGg, 5 === t.ss) && t.a5A().aGr.resize()
	}

	function aGl() {
		aL.a5M(), bY.aCh([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== a0.id, 1 !== a0.id, !0, !0, !0]), aj.wk = new yf, aj.wk.dd(), aw.de()
	}
	this.dd = function() {
		if (void 0 === canvas) {
			aGf = 23, canvas = new Array(aGf), a0V = new Array(aGf), (aGg = document.createElement("canvas")).width = 1;
			for (var aB = aGf - (aGg.height = 1); 0 <= aB; aB--) canvas[aB] = aGg;
			aGl(), aGm(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aGm(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aGm(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aGm(3, "orders", 6,
					"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"
					), aGm(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), aGm(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aGm(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), aGm(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aGm(8,
					"googleplay", 3,
					"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"
					), aGm(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aGm(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aGm(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aGm(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aGm(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aGm(14, "bestPlayer", 5,
					"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"
					), aGm(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aGm(16, "apple", 3,
					"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"
					), aGm(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aGm(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aGm(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aGm(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aGm(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aGm(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(e9) {
		return canvas[e9]
	}, this.aGQ = function(name) {
		for (var aB = a0V.length - 1; 0 <= aB; aB--)
			if (a0V[aB] === name) return canvas[aB];
		return aGg
	}, this.tK = function() {
		return aGf <= 0
	}, this.aGi = function() {
		aGf = 0, aGj()
	}
}

function cT() {
	var aGu, aGv, aGw, aGx, aGy, aGz, aH0, aH1, aH2, aH3, aGs = [
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
		aGt = [
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

	function aH9(jS, nT) {
		for (var aB = jS; aB < nT; aB++) aGu[aB] = 4 * bL.du(64 * ay.random(), ay.value(100)), aGv[aB] = 4 * bL.du(64 * ay.random(), ay.value(100)), aGw[aB] = 4 * bL.du(64 * ay.random(), ay.value(100))
	}

	function aH8(jS, nT) {
		for (var colorsData = aD.data.colorsData, aB = jS; aB < nT; aB++) {
			var fH = colorsData[aB];
			aGu[aB] = 4 * (fH >> 12), aGv[aB] = 4 * (fH >> 6 & 63), aGw[aB] = 4 * (63 & fH)
		}
	}

	function aHK(eT, aHM) {
		aC2[eT] = 0, aC2[eT + 1] = 0, aC2[eT + 2] = aHM, aC2[eT + 3] = 0, aHN(eT)
	}

	function aHN(eT) {
		var ew;
		bb.nb || (ew = ac.yF(eT), eT = ac.yG(eT), bb.nb = ew >= ba.aC1[0] && ew <= ba.aC1[2] && eT >= ba.aC1[1] && eT <= ba.aC1[3])
	}
	this.er = new Int32Array(4), this.de = function() {
		var er = this.er;
		er[0] = -4 * bS.f0, er[1] = 4, er[2] = -er[0], er[3] = -er[1]
	}, this.dd = function() {
		if (aGu = new Uint8Array(aD.em), aGv = new Uint8Array(aD.em), aGw = new Uint8Array(aD.em), aGx = new Uint8Array(aD.em), aGy = new Uint8Array(aD.em), aGz = new Uint8Array(aD.em), aH0 = new Uint8Array(aD.em), aH1 = new Uint8Array(aD.em),
			aH2 = new Uint8Array(aD.em), aH3 = new Uint8Array(aD.em), this.a8S = new Uint8Array(aD.em), aD.hj)
			for (var aAh = bg.aAh, aB = aD.em - 1; 0 <= aB; aB--) {
				var fA = aAh[aB],
					l7 = bL.du((aGt[fA][3] + 1) * ay.random(), ay.value(100));
				aGu[aB] = aGs[fA][0] + l7 * aGt[fA][0], aGv[aB] = aGs[fA][1] + l7 * aGt[fA][1], aGw[aB] = aGs[fA][2] + l7 * aGt[fA][2]
			} else 0 === aD.data.colorsType ? aD.data.selectableColor ? (aH8(0, aD.kC), aH9(aD.kC, aD.em)) : aH9(0, aD.em) : aH8(0, aD.em);
		! function() {
			var aB, es;
			for (aB = aD.em - 1; 0 <= aB; aB--) es = bL.du(aGu[aB] + aGv[aB] + aGw[aB], 3), aGu[aB] += aHF(es - aGu[aB], 2), aGv[aB] += aHF(es - aGv[aB], 2), aGw[aB] += aHF(es - aGw[aB], 2), aGu[aB] -= aGu[aB] % 4, aGv[aB] -= aGv[aB] % 4, aGw[
				aB] -= aGw[aB] % 4
		}(),
		function() {
			for (var aB = aD.em - 1; 0 <= aB; aB--) aGu[aB] += bL.du(aB, 128), aGv[aB] += bL.du(aB % 128, 32), aGw[aB] += bL.du(aB % 32, 8), aGx[aB] = aB % 8
		}(), this.aHC(),
			function() {
				for (var aB = aD.em - 1; 0 <= aB; aB--) aGy[aB] = aGu[aB] < 32 ? aGu[aB] + 32 : aGu[aB] - 32, aGz[aB] = aGv[aB] < 32 ? aGv[aB] + 32 : aGv[aB] - 32, aH0[aB] = aGw[aB] < 32 ? aGw[aB] + 32 : aGw[aB] - 32
			}(),
			function() {
				for (var aB = aD.em - 1; 0 <= aB; aB--) aH1[aB] = 235 < aGu[aB] ? aGu[aB] - 20 : aGu[aB] + 20, aH2[aB] = 235 < aGv[aB] ? aGv[aB] - 20 : aGv[aB] + 20, aH3[aB] = 235 < aGw[aB] ? aGw[aB] - 20 : aGw[aB] + 20
			}()
	}, this.a7J = function(player) {
		var g = bO.fO;
		return g[0] = aGu[player], g[1] = aGv[player], g[2] = aGw[player], g
	}, this.aHC = function() {
		for (var aB = aD.em - 1; 0 <= aB; aB--) this.a8S[aB] = aGu[aB] + aGv[aB] + aGw[aB] < 280 ? 0 : 1
	}, this.yF = function(eT) {
		return bL.du(eT, 4) % bS.f0
	}, this.yG = function(eT) {
		return bL.du(eT, 4 * bS.f0)
	}, this.xn = function(ew, ey) {
		return Math.floor(4 * (ey * bS.f0 + ew))
	}, this.y3 = function(eT) {
		var er = this.er;
		return this.aHG(eT + er[0]) || this.aHG(eT + er[1]) || this.aHG(eT + er[2]) || this.aHG(eT + er[3])
	}, this.fE = function(eT) {
		var er = this.er;
		return this.eu(eT + er[0]) || this.eu(eT + er[1]) || this.eu(eT + er[2]) || this.eu(eT + er[3])
	}, this.y1 = function(eT, player) {
		var er = this.er;
		return this.aHH(eT + er[0], player) || this.aHH(eT + er[1], player) || this.aHH(eT + er[2], player) || this.aHH(eT + er[3], player)
	}, this.gP = function(eT) {
		return 208 <= aC2[eT + 3]
	}, this.y9 = function(player, eT) {
		return this.gP(eT) && this.yC(player, eT)
	}, this.yC = function(player, eT) {
		return player === this.eh(eT)
	}, this.aHI = function(eT) {
		return 208 <= aC2[eT + 3] && aC2[eT + 3] < 224
	}, this.jN = function(eT) {
		return 224 <= aC2[eT + 3] && aC2[eT + 3] < 248
	}, this.y2 = function(eT) {
		for (var er = this.er, aB = 3; 0 <= aB; aB--)
			if (this.i3(eT + er[aB])) return !0;
		return !1
	}, this.ek = function(eT) {
		return this.gP(eT) || this.eg(eT)
	}, this.i3 = function(eT) {
		return 0 === aC2[eT + 3] && 2 === aC2[eT + 2]
	}, this.eg = function(eT) {
		return 0 === aC2[eT + 3] && 1 === aC2[eT + 2]
	}, this.ws = function(eT) {
		return 0 === aC2[eT + 3] && 3 === aC2[eT + 2]
	}, this.eu = function(eT) {
		return 0 === aC2[eT + 3] && 5 === aC2[eT + 2]
	}, this.aHG = function(eT) {
		return 0 === aC2[eT + 3] && 3 <= aC2[eT + 2]
	}, this.eX = function(eT) {
		return (aC2[eT] >> 1 << 8) + aC2[eT + 1]
	}, this.aHJ = function(eT) {
		return 1 & aC2[eT]
	}, this.aHH = function(eT, player) {
		return this.eg(eT) || this.gP(eT) && player !== this.eh(eT)
	}, this.eh = function(eT) {
		return aC2[eT] % 4 * 128 + aC2[eT + 1] % 4 * 32 + aC2[eT + 2] % 4 * 8 + aC2[eT + 3] % 8
	}, this.yA = function(eT) {
		aHK(eT, 1)
	}, this.aHL = function(eT) {
		aHK(eT, 2)
	}, this.xo = function(eT, player) {
		aC2[eT] = aGu[player], aC2[eT + 1] = aGv[player], aC2[eT + 2] = aGw[player], aC2[eT + 3] = 208 + aGx[player], aHN(eT)
	}, this.gK = function(eT, player) {
		aC2[eT] = aGy[player], aC2[eT + 1] = aGz[player], aC2[eT + 2] = aH0[player], aC2[eT + 3] = 224 + aGx[player], aHN(eT)
	}, this.jO = function(eT, player) {
		aC2[eT] = aH1[player], aC2[eT + 1] = aH2[player], aC2[eT + 2] = aH3[player], aC2[eT + 3] = 248 + aGx[player], aHN(eT)
	}
}

function cs() {
	var aHO = 0,
		aHQ = new Uint16Array(64);

	function vO(a5Q) {
		aHO -= 2;
		for (var aB = a5Q; aB < aHO; aB += 2) aHQ[aB] = aHQ[aB + 2], aHQ[aB + 1] = aHQ[aB + 3]
	}
	this.dd = function() {
		aHO = 0
	}, this.j5 = function() {
		var aB, jL, iP;
		if (0 !== aHO)
			if (0 === ag.ml[aD.eZ]) aHO = 0;
			else if (0 === ad.fw(aD.eZ)) aHO = 0;
		else
			for (aB = aHO - 2; 0 <= aB; aB -= 2)(jL = aHQ[aB]) < aD.em && 0 === ag.ml[jL] ? vO(aB) : (iP = aHQ[aB + 1], (jL >= aD.em && bs.aHS(aD.eZ) || jL < aD.em && bs.aHT(aD.eZ, jL)) && (b8.hF.hM(iP, jL), vO(aB)))
	}, this.hN = function(jL, iP) {
		! function(jL, iP) {
			for (var aB = 0; aB < aHO; aB += 2)
				if (aHQ[aB] === jL) return aHQ[aB + 1] = Math.min(aHQ[aB + 1] + iP, 1023), 1;
			return
		}(jL, iP) && 64 !== aHO && (aHQ[aHO] = jL, aHQ[aHO + 1] = iP, aHO += 2)
	}
}

function cU() {
	function aHa(player) {
		var dt;
		bA.gB.a3Y(player) && (dt = ag.gr[player] - ag.a3d[player] + ad.aHc(player), bd.gF(player, Math.abs(dt), dt < 0 ? 18 : 12)), ag.gr[player] = 0, ag.a3d[player] = 0
	}

	function aHj() {
		aX.show(!1, !1, !1, !0), aW.aBA(), bR.zv.a0f()
	}

	function aHX(player, aHi) {
		for (var aB = aHi.length - 1; 0 <= aB; aB--) ad.aHl(aHi[aB], player)
	}

	function aHZ(player) {
		var ih = ag.ih,
			ii = ag.ii,
			ij = ag.ij,
			ik = ag.ik,
			f0 = bS.f0;
		if (ag.gd[player]) {
			ag.gd[player] = 0;
			for (var nB = ih[player], nC = ij[player], ew = ii[player]; nB <= ew; ew--)
				for (var ey = ik[player]; nC <= ey; ey--) {
					var gN = 4 * (ey * f0 + ew);
					ac.y9(player, gN) && ac.yA(gN)
				}
		}
		ii[player] = ik[player] = 0, ih[player] = ij[player] = Math.max(f0, bS.f1)
	}
	this.dm = function(gN) {
		var player, dt = ag.gd[gN] + ag.xj[gN];
		bN.y.kG[gN] ? dt && (aHX(player = gN, ad.aHY(player)), aHZ(player), aF.gD(player), ad.clear(player), aHa(player), function(player) {
			ag.xj[player] = 0, ag.gH[player] = [], ag.gV[player] = [], ag.gW[player] = [], ag.fF[player] = []
		}(player)) : !dt && ag.gH[gN].length || this.aHW(gN)
	}, this.aHW = function(player) {
		! function(player) {
			bA.gB.jZ(player) || (ag.a0j[player] = bi.a0z.aHh(), aD.a0C++);
			var aHi = ad.aHY(player);
			0 === aHi.length ? bA.gB.a3V(player) && aHj() : (aHX(player, aHi), function(player, aHi) {
				var aHn = aHi[function(aHi) {
					var aB, e9 = 0;
					for (aB = aHi.length - 1; 1 <= aB; aB--) ag.gd[aHi[aB]] > ag.gd[aHi[e9]] && (e9 = aB);
					return e9
				}(aHi)];
				9 === aD.kU && (1 === bg.en[player] ? ay.k4(8) && az.aHo(aHn) : aE.hY[player] && (aN.a6p(765, 0), aN.yc(280, L(131, [ag.yd[aHn], ag.yd[player]]), 765, aHn, bB.nc, bB.ow, -1, !0)));
				if (bA.gB.a3V(player)) aHj(), aN.a0M(aHn, 1);
				else {
					for (var aB = aHi.length - 1; 0 <= aB; aB--)
						if (bA.gB.a3Y(aHi[aB]) && (bd.mh[4 - bA.gB.jZ(player)]++, bA.gB.a3V(aHi[aB]))) return aN.a0M(player, 0);
					bA.gB.jZ(player) || aN.a6Z(0, player, aHn)
				}
			}(player, aHi))
		}(player), aHZ(player), aHa(player),
			function(player) {
				ag.ml[player] = 0, ag.gH[player] = null, ag.gV[player] = null, ag.gW[player] = null, ag.fF[player] = null
			}(player), aF.gD(player), ad.clear(player), bN.aHf.aHg(player)
	}
}

function cx() {
	var input;

	function aHp(e) {
		(e = e.target.files) && 0 < e.length && b6.aHs(e[0])
	}

	function aHw(e) {
		var fA = new Image;
		fA.onload = aHx, fA.src = e.target.result
	}

	function aHx(e) {
		var e = e.target,
			i = e.width,
			j = e.height,
			aHz = bj.eL.data[162].value,
			max = Math.min(bS.aI0, aHz),
			aHz = (max = a0.id || bJ.r5() ? Math.min(1400, aHz) : max) / Math.max(i, j);
		if (aHz < 1 && (i = Math.floor(aHz * i + .125), j = Math.floor(aHz * j + .125)), max < i || max < j || i < 10 || j < 10) aHz = "Invalid Image Dimensions!", a0.vV ? a0.vV.showToast(aHz) : alert(aHz);
		else {
			for (var max = document.createElement("canvas"), aHz = (max.width = i, max.height = j, max.getContext("2d")), aI2 = document.createElement("canvas"), aI3 = (aI2.width = e.width, aI2.height = e.height, aI2.getContext("2d")), e = (aI3
					.drawImage(e, 0, 0), aI3.getImageData(0, 0, aI2.width, aI2.height)), aI3 = aHz.createImageData(i, j), src = e.data, aI6 = aI3.data, a93 = aI2.width / i, a94 = aI2.height / j, ey = 0; ey < j; ey++)
				for (var ew = 0; ew < i; ew++) {
					var aI7 = Math.floor(ew * a93),
						aI7 = 4 * (Math.floor(ey * a94) * aI2.width + aI7),
						aIA = 4 * (ey * i + ew);
					aI6[aIA] = src[aI7], aI6[1 + aIA] = src[1 + aI7], aI6[2 + aIA] = src[2 + aI7], aI6[3 + aIA] = 255
				}
			aHz.putImageData(aI3, 0, 0), 20 === t.ss && t.a5A().aHx(max)
		}
	}
	this.dd = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = aHp
	}, this.uF = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.aHq = function() {
		input.click()
	}, this.aHs = function(aHt) {
		var g = aHt.name.split("."),
			g = g[g.length - 1].toLowerCase();
		"gif" !== g && "jpg" !== g && "jpeg" !== g && "png" !== g || ((g = new FileReader).onload = aHw, g.readAsDataURL(aHt))
	}
}

function cv() {
	this.aIB = null, this.dd = function() {
		10 !== aD.kU ? this.aIB = null : this.aIB = new Uint32Array(aD.em)
	}, this.j5 = function() {
		10 === aD.kU && this.l1()
	}, this.l1 = function() {
		for (var gN, target, aBN, aIB = this.aIB, zy = al.kn, a3e = ag.gr, aB = al.ki - 1; 0 <= aB; aB--)(gN = zy[aB]) >= aD.kC || (target = Math.max(bL.du(a3e[gN], 4), 2048), aBN = Math.max(ae.aBO(gN), 100), aIB[gN] += bL.du(aBN * target, 1e4),
			aIB[gN] > target && (aIB[gN] = target))
	}, this.a3k = function(player, hY) {
		return hY > this.aIB[player] ? (hY = this.aIB[player], this.aIB[player] = 0) : this.aIB[player] -= hY, hY
	}
}

function dW() {
	function aID(e) {
		var g, e = e.target.files;
		e && 0 < e.length && (e = e[0], "json" === (g = e.name.split("."))[g.length - 1].toLowerCase()) && ((g = new FileReader).onload = aIL, g.readAsText(e))
	}

	function aIL(e) {
		var aIP;
		aD.a0A || (e = JSON.parse(e.target.result), aIP = aD.data = new a4b, aIQ(e, aIP, "mapType", 0, 2), aIQ(e, aIP, "mapProceduralIndex", 0, 255), aIQ(e, aIP, "mapRealisticIndex", 0, 255), aIQ(e, aIP, "mapSeed", 0, 16383), function(aIO, aIP, gO,
				max) {
				aIO = aIO[gO];
				aIP[gO] = aIW(aIO) ? aIO.slice(0, max) : aIP[gO]
			}(e, aIP, "mapName", 20), function(aIO, aIP, gO) {
				var aHy;
				2 === aIP.mapType && (!aIW(aIO = aIO[gO]) || aIO.length <= 20 ? aIP.mapType = 0 : ((aHy = new Image).onload = function() {
					b9.aIX.aIY(aHy, 1), aHy.onload = null, aHy = null
				}, aHy.src = aIO))
			}(e, aIP, "canvas"), aIQ(e, aIP, "passableWater", 0, 1), aIQ(e, aIP, "passableMountains", 0, 1), aIQ(e, aIP, "playerCount", 1, 512), aIQ(e, aIP, "humanCount", 1, 1), aIQ(e, aIP, "selectedPlayer", 0, 0), aIQ(e, aIP, "gameMode", 0, 1),
			aIQ(e, aIP, "playerMode", 0, 0), aIQ(e, aIP, "battleRoyaleMode", 0, 0), aIQ(e, aIP, "numberTeams", 0, 8), aIQ(e, aIP, "isZombieMode", 0, 0), aIQ(e, aIP, "isContest", 0, 0), aIQ(e, aIP, "isReplay", 0, 0), aIT(e, aIP, "elo", 16, 2,
				16383), aIQ(e, aIP, "colorsType", 0, 1), aIQ(e, aIP, "colorsPersonalized", 0, 1), aIT(e, aIP, "colorsData", 32, 512, 262143), aIQ(e, aIP, "selectableColor", 0, 1), aIT(e, aIP, "teamPlayerCount", 16, 9, 512), aIQ(e, aIP,
				"neutralBots", 0, 1), aIQ(e, aIP, "botDifficultyType", 0, 3), aIQ(e, aIP, "botDifficultyValue", 0, 15), aIT(e, aIP, "botDifficultyTeam", 8, 9, 15), aIT(e, aIP, "botDifficultyData", 8, 512, 15), aIQ(e, aIP, "spawningType", 0, 2),
			aIQ(e, aIP, "spawningSeed", 0, 16383), aIT(e, aIP, "spawningData", 16, 1024, 4095), aIQ(e, aIP, "selectableSpawn", 0, 1), aIQ(e, aIP, "playerNamesType", 0, 2),
			function(aIO, aIP, gO, size, max) {
				var a2k = aIO[gO];
				if (Array.isArray(a2k)) {
					for (var a2l = new Array(size), ep = Math.min(a2k.length, size), aB = 0; aB < ep; aB++) a2l[aB] = aIW(a2k[aB]) ? a2k[aB].slice(0, max) : "";
					a2l.fill("", ep), aIP[gO] = a2l
				}
			}(e, aIP, "playerNamesData", 512, 20), aIQ(e, aIP, "selectableName", 0, 1), aIQ(e, aIP, "aIncomeType", 0, 2), aIQ(e, aIP, "aIncomeValue", 0, 255), aIT(e, aIP, "aIncomeData", 8, 512, 255), aIQ(e, aIP, "tIncomeType", 0, 2), aIQ(e, aIP,
				"tIncomeValue", 0, 255), aIT(e, aIP, "tIncomeData", 8, 512, 255), aIQ(e, aIP, "iIncomeType", 0, 2), aIQ(e, aIP, "iIncomeValue", 0, 255), aIT(e, aIP, "iIncomeData", 8, 512, 255), aIQ(e, aIP, "sResourcesType", 0, 2), aIQ(e, aIP,
				"sResourcesValue", 0, 2047), aIT(e, aIP, "sResourcesData", 16, 512, 2047), t.x(), t.y.aIN[0] = 0, t.u(19))
	}

	function aIQ(aIO, aIP, gO, min, max) {
		aIO = aIO[gO];
		aIP[gO] = "number" == typeof aIO && min <= aIO && aIO <= max ? Math.floor(aIO) : aIP[gO]
	}

	function aIW(qK) {
		return "string" == typeof qK
	}

	function aIT(aIO, aIP, gO, aIZ, size, max) {
		var a2k = aIO[gO];
		if (Array.isArray(a2k)) {
			for (var a2l = new(8 === aIZ ? Uint8Array : 16 === aIZ ? Uint16Array : Uint32Array)(size), ep = Math.min(a2k.length, size), aB = 0; aB < ep; aB++) a2l[aB] = bL.hx(a2k[aB], 0, max);
			aIP[gO] = a2l
		}
	}
	this.aIC = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aID, input.click()
	}, this.aIE = function() {
		for (var aIH, aCe, a58 = aD.data, keys = Object.keys(a58), aIF = {}, aB = 0; aB < keys.length; aB++) {
			var key = keys[aB];
			a58[key] instanceof Uint8Array || a58[key] instanceof Uint16Array || a58[key] instanceof Uint32Array ? aIF[key] = Array.from(a58[key]) : aIF[key] = a58[key]
		}
		aIF.canvas = 2 === aIF.mapType && aIF.canvas ? aIF.canvas.toDataURL() : null, aIH = aIF, aIH = JSON.stringify(aIH, null, 2), aIH = new Blob([aIH], {
			type: "application/json"
		}), (aCe = document.createElement("a")).href = URL.createObjectURL(aIH), aCe.download = "tt_scenario.json", aCe.click()
	}
}

function cY() {
	var aIa, aIb, size, jL, hY, aIc;

	function aId(player) {
		return player < aD.kC ? aIa * player : aIa * aD.kC + aIb * (player - aD.kC)
	}
	this.dd = function() {
		aIa = aD.kC < 16 ? 12 : 8, aIb = 4;
		var ep = aId(aD.em);
		size = new Uint8Array(aD.em), jL = new Uint16Array(ep), hY = new Uint32Array(ep), aIc = new Uint8Array(ep)
	}, this.qB = function(a7v, aIe) {
		var aIf = this.gs(a7v, aIe),
			aIe = (this.gq(a7v, aIe, 0), bA.gB.gE(a7v, aIf));
		bd.gF(a7v, aIf - aIe, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.aHl = function(player, aIe) {
		var aIi, aIe = function(player, aIe) {
			var aB, l7 = aId(player);
			for (aB = size[player] - 1; 0 <= aB; aB--)
				if (jL[l7 + aB] === aIe) return aB;
			return size[player]
		}(player, aIe);
		aIe !== size[player] && (aIi = hY[aId(player) + aIe], this.gG(player, aIe), this.jI(player, aIi, aD.em))
	}, this.jX = function(player, aIe) {
		for (var l7 = aId(player), aB = size[player] - 1; 0 <= aB; aB--)
			if (jL[l7 + aB] === aIe) return !0;
		return !1
	}, this.jq = function(player) {
		return player < aD.kC ? size[player] < aIa : size[player] < aIb
	}, this.fw = function(player) {
		return size[player]
	}, this.g1 = function(player, aB) {
		return jL[aId(player) + aB]
	}, this.g2 = function(player, aB) {
		return hY[aId(player) + aB]
	}, this.gs = function(player, aIe) {
		for (var l7 = aId(player), aB = size[player] - 1; 0 <= aB; aB--)
			if (jL[l7 + aB] === aIe) return hY[l7 + aB];
		return 0
	}, this.aHc = function(player) {
		for (var l7 = aId(player), fH = 0, aB = size[player] - 1; 0 <= aB; aB--) fH += hY[l7 + aB];
		return fH
	}, this.gq = function(player, aIe, aIi) {
		for (var l7 = aId(player), aB = size[player] - 1; 0 <= aB; aB--) jL[l7 + aB] === aIe && (hY[l7 + aB] = aIi)
	}, this.gb = function(player, aB, aIi) {
		hY[aId(player) + aB] = Math.max(aIi, 0)
	}, this.gc = function(player, aB) {
		aIc[aId(player) + aB] = 0
	}, this.g3 = function(player, aB) {
		return aIc[aId(player) + aB]
	}, this.jI = function(player, aIi, aIe) {
		ao.ix.jo[player] = ao.ix.jo[aIe] = 8, bA.gB.a3Y(aIe) && bd.mh[6 - bA.gB.jZ(player)]++;
		for (var l7 = aId(player), aB = size[player] - 1; 0 <= aB; aB--)
			if (jL[l7 + aB] === aIe) return hY[l7 + aB] += aIi, void(hY[l7 + aB] = hY[l7 + aB] > aD.a3g ? aD.a3g : hY[l7 + aB]);
		jL[l7 + size[player]] = aIe, hY[l7 + size[player]] = aIi, aIc[l7 + size[player]] = 1, size[player]++, aIe === aD.eZ ? aN.a0M(player, 5) : player < aD.kC && player === aD.eZ && af.a6b(aIe)
	}, this.gG = function(player, e9) {
		var f8, l7;
		if (0 !== size[player])
			for (l7 = aId(player), size[player]--, f8 = e9; f8 < size[player]; f8++) jL[l7 + f8] = jL[l7 + f8 + 1], hY[l7 + f8] = hY[l7 + f8 + 1], aIc[l7 + f8] = aIc[l7 + f8 + 1]
	}, this.aHY = function(player) {
		for (var f8, l7, aHi = [], aB = al.ki - 1; 0 <= aB; aB--)
			for (l7 = aId(al.kn[aB]), f8 = size[al.kn[aB]] - 1; 0 <= f8; f8--)
				if (jL[l7 + f8] === player) {
					aHi.push(al.kn[aB]);
					break
				} return aHi
	}
}

function cZ() {
	var aIj;

	function aIl(player) {
		var e8, jr;
		return bA.gB.jZ(player) && player < aD.kC ? 0 : (e8 = aIj[bL.du((aD.em - 1) * ag.gd[player], aD.jw)], bf.k9() < 1920 && (e8 = Math.max(bL.du(100 * (13440 - 6 * bf.k9()), 1920), e8)), jr = ae.js(player), ag.gr[player] > jr && (e8 -= bL.du(2 *
			e8 * (ag.gr[player] - jr), jr)), Math.min(Math.max(e8, 0), 700))
	}

	function aIx(nN) {
		for (var gd = ag.gd, kn = al.kn, aB = al.ki - 1; 0 <= aB; aB--) {
			var gN = kn[aB];
			bA.gB.gE(gN, bL.du(nN * gd[gN], 32))
		}
	}

	function aIu() {
		var wl = aD.eZ;
		bO.fL[0] = ag.gr[wl] - ag.a3d[wl]
	}

	function aIw(e9) {
		var wl = aD.eZ,
			wl = ag.gr[wl] - ag.a3d[wl] - bO.fL[0];
		ae.aA2 += wl, bd.mh[e9] += wl
	}
	this.aA2 = 0, this.dk = function() {
		for (var ep = aD.em, aB = (aIj = new Uint16Array(ep), 0); aB < ep; aB++) aIj[aB] = 100 + aIk(bL.du(25600 * aB, ep - 4), 9)
	}, this.dd = function() {
		(this.aA2 = 0) === aD.data.iIncomeType ? this.aBO = aIl : 1 === aD.data.iIncomeType ? this.aBO = function(player) {
			return bL.du(aD.data.iIncomeValue * aIl(player), 64)
		} : this.aBO = function(player) {
			return bL.du(aD.data.iIncomeData[player] * aIl(player), 64)
		}
	}, this.j5 = function() {
		if (bf.k9() % 10 == 9 && (ae.aA2 = 0, function() {
				aIu();
				for (var kn = al.kn, gr = ag.gr, aB = al.ki - 1; 0 <= aB; aB--) {
					var gN = kn[aB],
						aIv = bL.du(ae.aBO(gN) * gr[gN], 1e4);
					bA.gB.gE(gN, Math.max(aIv, 1))
				}
				aIw(9)
			}(), function() {
				if (0 !== aD.data.aIncomeType) {
					if (aIu(), 1 === aD.data.aIncomeType)
						for (var gd = ag.gd, kn = al.kn, nN = aD.data.aIncomeValue, aB = al.ki - 1; 0 <= aB; aB--) {
							var gN = kn[aB];
							bA.gB.gE(gN, bL.du(nN * gd[gN], 128))
						} else 2 === aD.data.aIncomeType && function() {
							for (var gd = ag.gd, kn = al.kn, nN = aD.data.aIncomeData, aB = al.ki - 1; 0 <= aB; aB--) {
								var gN = kn[aB];
								bA.gB.gE(gN, bL.du(nN[gN] * gd[gN], 128))
							}
						}();
					aIw(18)
				}
			}(), bf.k9() % 100 == 99)) {
			if (aIu(), 0 === aD.data.tIncomeType) aIx(32);
			else if (1 === aD.data.tIncomeType) aIx(aD.data.tIncomeValue);
			else
				for (var gd = ag.gd, kn = al.kn, nN = aD.data.tIncomeData, aB = al.ki - 1; 0 <= aB; aB--) {
					var gN = kn[aB];
					bA.gB.gE(gN, bL.du(nN[gN] * gd[gN], 32))
				}
			aIw(8)
		}
	}, this.js = function(player) {
		return Math.min(100 * ag.gd[player], aD.a4X)
	}, this.pA = function(player, pB) {
		bq.pX(player, pB, bO.fM[0], 0), bA.gB.gE(pB, bO.fM[0]), bd.pY(player, pB), af.aIn(player, bO.fM[0] + bO.fM[1]), af.pZ(pB, bO.fM[0]), bA.gB.mM(player)
	}, this.aIo = function() {
		for (var ep = al.ki, zy = al.kn, l7 = 0, a3e = ag.gr, aB = 0; aB < ep; aB++) l7 += a3e[zy[aB]];
		return l7
	}, this.aIp = function(aIq) {
		for (var gN, ep = al.ki, zy = al.kn, l7 = 0, a3e = ag.gr, en = bg.en, aB = 0; aB < ep; aB++) en[gN = zy[aB]] === aIq && (l7 += a3e[gN]);
		return l7
	}
}

function cb() {
	var aJ1, aJ2, aJ3, aJ4, aJ5, aJ6, aJ7, aJ8, aJ9, aJA, aJB, aJC, aJD, aJE, aJF, aJG, aJH, aJI, aJK, aJL, aCX, aJM, aJN, aJU, aJV, aJJ = null,
		aJP = 0,
		aJQ = !1,
		aJR = new Float32Array(4),
		aJS = 0,
		aJT = !0,
		aAW = 400,
		aJW = 0;

	function qg() {
		aJ9 = Math.floor(+h.hz), aJA = Math.floor(.5 * aJ9)
	}

	function aJX() {
		var aB, aJc;
		for (um.font = bA.qd.sS(1, 100 * aJB), aJc = 80 / Math.floor(um.measureText(bA.rc.zR(aD.a3g)).width), um.font = bA.qd.sS(1, 100), aB = aD.em - 1; 0 <= aB; aB--) aJ8[aB] = 100 / Math.floor(um.measureText(ag.yd[aB]).width), aJ7[aB] = Math.min(
			aJc, aJ8[aB])
	}

	function aJd(aB) {
		return !aJW || (aB = ag.gr[aB]) < 1e6 ? 1 : aB < 1e7 ? aJR[0] : aJR[Math.min(Math.floor(Math.log10(aB)) - 6, 3)]
	}

	function aJb(hr) {
		aJI = !1, aJH = 1, aJF = aJG = 0, aJT && (bA.qd.textAlign(hr, 1), bA.qd.textBaseline(hr, 1));
		for (var aJj, aJk, aB, aJl, fontSize, aJm, nB = iQ / i0, nC = iR / i0, nO = (h.i + iQ) / i0, nP = (h.j + iR) / i0, aJn = 0 !== ag.ml[aD.eZ] && !bA.gB.jZ(aD.eZ), f8 = al.ki - 1; 0 <= f8; f8--) aB = al.kn[f8], (fontSize = Math.floor(aJE * i0 *
			aJd(aB) * aJ7[aB] * aJ5[aB])) < aJD || aJ9 <= fontSize || aJ3[aB] + aJ5[aB] > nB && aJ3[aB] < nO && aJ4[aB] + aJ6[aB] > nC && aJ4[aB] < nP && (aJj = Math.floor(h.i * (aJ3[aB] + aJ5[aB] / 2 - nB) / (nO - nB)), aJk = Math.floor(h.j * (
			aJ4[aB] + aJ6[aB] / 2 - nC) / (nP - nC) - .1 * fontSize), aJl = ac.a8S[aB], hr.font = bA.qd.sS(1 === ag.a3U[aB] ? 4 : 1, fontSize), hr.fillStyle = aJo(fontSize, aJl % 2), aJW ? aJp(hr, aB, fontSize, aJj, aJk, aJl) : aJq(aB,
			fontSize, aJj, aJk, hr), aJI = !0, 0 < aCX[aB] ? function(aJj, aJk, fontSize, aB, hr) {
			0 === jx[aB] ? aj.rt.zI(aJL[aB]) ? (function(aJj, aJk, fontSize, player, pM, hr) {
				for (var xI = aJk, hq = (hr.globalAlpha = aJy(fontSize), aJd(player) * (aJW ? aJS : aJ8[player])), xH = aJj - .5 * fontSize / hq - .9 * fontSize, f9 = 0; f9 < 2; f9++) hr.fillText(aj.rt.zA(pM), xH, xI), xH = aJj + .5 *
					fontSize / hq + .9 * fontSize;
				hr.globalAlpha = 1
			}(aJj, aJk, fontSize, aB, aJL[aB], hr), aJs(aJj, aJk, fontSize, 0, 0, hr)) : aj.rt.zK(aJL[aB]) ? (aK1(aJj, aJk, fontSize, aJL[aB], 0, hr), aJs(aJj, aJk, fontSize, 0, 1, hr)) : (aK1(aJj, aJk, fontSize, aJL[aB], 1, hr), aJs(aJj,
				aJk, fontSize, 1, 0, hr)) : aK1(aJj, aJk, fontSize, aJL[aB], 0, hr)
		}(aJj, aJk, fontSize, aB, hr) : 0 === jx[aB] && aJs(aJj, aJk, fontSize, 0, 0, hr), aJn && (0 < aCX[aB + aD.em] || 0 < aCX[aB + 2 * aD.em] || 0 < aCX[aB + 3 * aD.em] || 0 < aCX[aB + 4 * aD.em]) && function(aJj, aJk, fontSize, aB, hr) {
			var fA, gI = -1;
			for (fA = 4; 1 <= fA; fA--) 0 < aCX[aB + fA * aD.em] && gI++;
			for (fA = 1; fA < 5; fA++) 0 < aCX[aB + fA * aD.em] && (! function(aJj, aJk, fontSize, fA, aB, aJw, dt, hr) {
				var a2y;
				if (1 === fA) {
					aB = aJL[aB + aD.em];
					if (!aj.rt.zJ(aB)) return function(aJj, aJk, fontSize, pM, aJw, hr) {
						hr.globalAlpha = aJy(fontSize);
						aJj -= .534 * aJw * fontSize, aJw = aJk + 1.59 * fontSize;
						hr.font = bA.qd.sS(0, .785 * fontSize), hr.fillText(aj.rt.zA(pM), aJj, aJw), hr.globalAlpha = 1
					}(aJj, aJk, fontSize, aB, aJw, hr);
					a2y = aj.wk.yj[aB - 1024 + aj.rt.yv]
				} else a2y = 2 === fA ? aL.a5O()[4].canvas[+(dt < 255)] : (3 === fA ? aL.a5O()[5] : aL.a5O()[6]).canvas[0];
				aB = aj.wk.yk, dt = .8 * fontSize / aB, fA = aJj - .5 * dt * aB - .534 * aJw * fontSize, aJj = aJk + 1.4 * dt * aB;
				hr.setTransform(dt, 0, 0, dt, fA, aJj), hr.globalAlpha = aJy(fontSize), hr.drawImage(a2y, 0, 0), hr.globalAlpha = 1, hr.setTransform(1, 0, 0, 1, 0, 0)
			}(aJj, aJk, fontSize, fA, aB, gI, aCX[aB + fA * aD.em], hr), gI -= 2)
		}(aJj, aJk, fontSize, aB, hr), (aJm = aJB * fontSize) < aJD || (hr.font = bA.qd.sS(1, aJm), aJk += Math.floor(.78 * fontSize), aJW ? aJq(aB, aJm, aJj, aJk, hr) : aJp(hr, aB, aJm, aJj, aJk, aJl)))
	}

	function aJq(aB, fontSize, ew, ey, hr) {
		var ___id = aB;
		var showName = aB < aD.kC || !__fx.settings.hideBotNames;
		if (showName) hr.fillText(ag.yd[aB], ew, ey), aB < aD.kC && 2 !== ag.a3U[aB] || (aB = fontSize / aJ8[aB], hr.fillRect(ew - .5 * aB, ey + bA.qd.zB * fontSize, aB, Math.max(1, .1 * fontSize)));
		aJW && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (hr.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			hr.fillText(__fx.utils.getDensity(___id), ew, showName ? ey + fontSize : ey)
		);
	}

	function aJp(hr, aB, fontSize, aJj, aJk, aJl) {
		var ___id = aB;
		aB = bA.rc.zR(ag.gr[aB]);
		aJl >> 1 & 1 ? (hr.lineWidth = .05 * fontSize, hr.strokeStyle = aJo(fontSize, aJl % 2), hr.strokeText(aB, aJj, aJk)) : (1 < aJl && (hr.lineWidth = .12 * fontSize, hr.strokeStyle = aJo(fontSize, aJl), hr.strokeText(aB, aJj, aJk)), hr.fillText(
			aB, aJj, aJk));
		aJW || __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (hr.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)), hr.fillText(__fx.utils.getDensity(___id), aJj, aJk + fontSize))
	}

	function aJs(aJj, aJk, fontSize, aJw, aJx, hr) {
		var a5t = .95 * fontSize / aJN,
			aJj = aJj - .5 * a5t * aJM + .8 * aJw * fontSize,
			aJw = aJk - 1.76 * a5t * aJN - (.35 - bA.qd.zB + .7) * aJx * fontSize;
		hr.setTransform(a5t, 0, 0, a5t, aJj, aJw), hr.globalAlpha = aJy(fontSize), hr.drawImage(ab.get(4), 0, 0), hr.globalAlpha = 1, hr.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aK1(aJj, aJk, fontSize, pM, aJw, hr) {
		var hl, xH, a5t;
		hr.globalAlpha = aJy(fontSize), aj.rt.zJ(pM) ? (hl = aj.wk.yk, hr.setTransform(a5t = 1.1 * fontSize / hl, 0, 0, a5t, xH = aJj - .5 * a5t * hl - .8 * aJw * fontSize, a5t = aJk - 1.55 * a5t * hl), hr.drawImage(aj.wk.yj[pM - 1024 + aj.rt.yv], 0,
			0), hr.setTransform(1, 0, 0, 1, 0, 0)) : (xH = aJj - .8 * aJw * fontSize, a5t = aJk - (.35 - bA.qd.zB + 1) * fontSize, hr.fillText(aj.rt.zA(pM), xH, a5t)), hr.globalAlpha = 1
	}

	function aJo(fontSize, aJl) {
		return aJA <= fontSize && fontSize < aJ9 ? bg.aK3[aJl] + aJy(fontSize).toFixed(3) + ")" : bg.aK4[aJl]
	}

	function aJy(fontSize) {
		return aJA <= fontSize && fontSize < aJ9 ? 1 - (fontSize - aJA) / (aJ9 - aJA) : 1
	}

	function aKD(hq, i) {
		return 1 + Math.floor(aJC * hq * i)
	}

	function aKA(aB) {
		for (var left = aJ3[aB], f8 = aJ3[aB] - ag.ih[aB] - 1; 0 <= f8; f8--)
			if (!aKF(aB, --left, aJ4[aB], aJ6[aB])) {
				left++;
				break
			} var right = aJ3[aB];
		for (f8 = ag.ii[aB] - aJ3[aB] - aJ5[aB]; 0 <= f8; f8--)
			if (!aKF(aB, ++right + aJ5[aB] - 1, aJ4[aB], aJ6[aB])) {
				right--;
				break
			} var ew = Math.floor((left + right) / 2),
			top = aJ4[aB];
		for (f8 = aJ4[aB] - ag.ij[aB] - 1; 0 <= f8; f8--)
			if (!aKG(aB, ew, --top, aJ5[aB])) {
				top++;
				break
			} var bottom = aJ4[aB];
		for (f8 = ag.ik[aB] - aJ4[aB] - aJ6[aB]; 0 <= f8; f8--)
			if (!aKG(aB, ew, ++bottom + aJ6[aB] - 1, aJ5[aB])) {
				bottom--;
				break
			} var ey = Math.floor((top + bottom) / 2);
		aK7(aB, ew, ey, aJ5[aB], aJ6[aB]) && (aJ3[aB] = ew, aJ4[aB] = ey)
	}

	function aK7(player, ew, ey, i, j) {
		es = Math.floor(.2 * i);
		for (var es, fA = ew + i - 1; ew <= fA; fA--)
			if (!aKF(player, fA, ey, j)) return;
		for (fA = ey + j - 1 - (es = (es = Math.floor(.25 * j)) < 1 ? 1 : es); ey + es <= fA; fA--)
			if (!aKG(player, ew, fA, i)) return;
		return 1
	}

	function aKF(player, ew, ey, j) {
		return ac.y9(player, 4 * (ey * bS.f0 + ew)) && ac.y9(player, 4 * ((ey + j - 1) * bS.f0 + ew))
	}

	function aKG(player, ew, ey, i) {
		return ac.y9(player, 4 * (ey * bS.f0 + ew)) && ac.y9(player, 4 * (ey * bS.f0 + ew + i - 1))
	}
	this.dd = function() {
		if (aJW = bj.eL.data[7].value || 8 === aD.kU, aAW = 0 === (aAW = bj.eL.data[11].value) ? 280 : 1 === aAW ? 187 : 112, aJI = !1, aJE = .88, aJB = .5, aJC = 1.8, aJD = 12 - 3 * bj.eL.data[9].value, aJ2 = aJ1 = 0, aJ3 = new Uint16Array(aD
				.em), aJ4 = new Uint16Array(aD.em), aJ5 = new Uint16Array(aD.em), aJ6 = new Uint16Array(aD.em), aJ7 = new Float32Array(aD.em), aJ8 = new Float32Array(aD.em), aJL = new Uint16Array(2 * aD.em), aCX = new Uint8Array(5 * aD.em), aJU =
			new Uint8Array(aD.em), aJV = new Uint8Array(aD.em), aJT || (aJJ = aJJ || document.createElement("canvas")), qg(), aJG = aJF = 0, aJH = 1, aJW) {
			var aB, aJc;
			for (aJX(), um.font = bA.qd.sS(1, 100), aJc = 100 / Math.floor(um.measureText("900 000").width), aB = aD.em - 1; 0 <= aB; aB--) aJ7[aB] = Math.min(aJc, 2 * aJ8[aB]);
			aJS = aJc, aJR[0] = 100 / (aJc * Math.floor(um.measureText("5 000 000").width)), aJR[1] = 100 / (aJc * Math.floor(um.measureText("50 000 000").width)), aJR[2] = 100 / (aJc * Math.floor(um.measureText("500 000 000").width)), aJR[3] =
				100 / (aJc * Math.floor(um.measureText("1 000 000 000").width))
		} else aJX();
		! function() {
			var aB;
			for (aB = aD.em - 1; 0 <= aB; aB--) ag.gd[aB] < 12 ? (aJ3[aB] = ag.ih[aB] + 1, aJ4[aB] = ag.ij[aB] + 1, aJ5[aB] = 1, aJ6[aB] = 1) : (aJ3[aB] = ag.ih[aB], aJ4[aB] = ag.ij[aB] + 1, aJ5[aB] = 4, aJ6[aB] = 2);
			if (aD.hD)
				for (aB = 0; aB < aD.kC; aB++) aJ5[aB] = 0;
			aJM = ab.get(4).width, aJN = ab.get(4).height
		}()
	}, this.aIn = function(gN, a56) {
		a56 > 18 * ag.gd[gN] ? (aJV[gN] = 6, ac.a8S[gN] = 2 + ac.a8S[gN] % 2) : (aJU[gN] = 4, (ac.a8S[gN] < 2 || 3 < ac.a8S[gN]) && (ac.a8S[gN] = 6 + ac.a8S[gN] % 2))
	}, this.pZ = function(gN, a56) {
		a56 > 6 * ag.gd[gN] ? (aJV[gN] = 6, ac.a8S[gN] = 4 + ac.a8S[gN] % 2) : (aJU[gN] = 4, (ac.a8S[gN] < 4 || 5 < ac.a8S[gN]) && (ac.a8S[gN] = 8 + ac.a8S[gN] % 2))
	}, this.resize = function() {
		qg(), aJT || aJb(aJK)
	}, this.a4T = function() {
		for (var aB = 0; aB < aD.kC; aB++) ag.ii[aB] - ag.ih[aB] != 3 || ag.ik[aB] - ag.ij[aB] != 3 ? (aJ3[aB] = ag.ih[aB] + (ag.ii[aB] !== ag.ih[aB] ? 1 : 0), aJ4[aB] = ag.ij[aB], aJ5[aB] = 1, aJ6[aB] = 1) : (aJ3[aB] = ag.ih[aB], aJ4[aB] = ag
			.ij[aB] + 1, aJ5[aB] = 4, aJ6[aB] = 2)
	}, this.qC = function(player, e9, aJe) {
		! function(player, e9, aJe) {
			player += e9 * aD.em;
			0 === e9 ? aJL[player] === aJe && 0 < aCX[player] ? aCX[player] = 0 : (aJL[player] = aJe, aCX[player] = aj.rt.zI(aJe) ? 255 : 64) : 1 === e9 ? (aCX[player] = 64, aJL[player] = aJe) : aCX[player] = aJe
		}(player, e9, aJe), 2 === aD.a0A && this.mX(!0)
	}, this.ul = function() {
		aJT ? aJb(um) : aJI && (1 !== aJH ? (um.imageSmoothingEnabled = !0, um.setTransform(aJH, 0, 0, aJH, 0, 0), um.drawImage(aJJ, -aJF / aJH, -aJG / aJH), um.setTransform(1, 0, 0, 1, 0, 0), um.imageSmoothingEnabled = !1) : um.drawImage(aJJ, -
			aJF, -aJG))
	}, this.a9F = function(i9, iC) {
		aJF += i9, aJG += iC
	}, this.a1e = function(i9, iC) {
		af.a9F(i9, iC)
	}, this.zoom = function(a2X, lR, lS) {
		aJH *= a2X, aJF = (aJF + lR) * a2X - lR, aJG = (aJG + lS) * a2X - lS
	}, this.mX = function(bu) {
		return !aJT && !(!aJQ && !bu && bf.eO < aJP + (1 === aJH && 0 === aJF && 0 === aJG && (aD.a4w() || aD.hD || 2 === aD.a0A) ? 1e3 : aAW) || (aJQ = !1, aJP = bf.eO, aJb(aJK), 0))
	}, this.aJh = function(aB) {
		return aJd(aB) * aJ7[aB]
	}, this.aJi = function(player) {
		return aJ7[player]
	}, this.j5 = function() {
		bf.k9() % 10 == 9 && (aJQ = aD.a4y() && !aD.a4w()), !aD.a4w() && 4 <= ++aJ2 && function() {
			var aB, f8, f9;
			for (aJ2 = 0, f9 = 4; 1 <= f9; f9--)
				for (f8 = al.ki - 1; 0 <= f8; f8--) aB = al.kn[f8] + f9 * aD.em, 0 < aCX[aB] && aCX[aB] < 255 && aCX[aB]--;
			if (2 !== aD.a0A)
				for (f8 = al.ki - 1; 0 <= f8; f8--) aB = al.kn[f8], 0 < aCX[aB] && aCX[aB] < 255 && aCX[aB]--
		}();
		var aB, f8, ep = Math.floor(.1 * al.ki);
		for (ep = (ep = ep < 8 ? 8 : ep) > al.ki ? al.ki : ep, aB = aJ1 + ep - 1; aJ1 <= aB; aB--) f8 = aB % al.ki, ! function(aB) {
			var hq = aJd(aB) * aJ7[aB];
			0 < aJ5[aB] && aK7(aB, aJ3[aB], aJ4[aB], aJ5[aB], aJ6[aB]) ? ! function(aB) {
				for (var ew, ey, i, j, eT = !1, f9 = 0; f9 < 8; f9++) {
					if (i = aJ5[aB] + 2, j = aJ6[aB] + 2, i > ag.ii[aB] - ag.ih[aB] + 1 || j > ag.ik[aB] - ag.ij[aB] + 1) return eT;
					if (ew = aJ3[aB] - 1, ey = aJ4[aB] - 1, !aK7(aB, ew, ey, i, j)) return eT;
					aJ3[aB] = ew, aJ4[aB] = ey, aJ5[aB] = i, aJ6[aB] = j, eT = !0
				}
				return eT
			}(aB) && function(aB, hq) {
				for (var ew, ey, i, j, eT = !1, aCg = aJ5[aB], nN = 1 + Math.floor(.02 * aCg), f9 = 1; f9 < 5; f9++) {
					if ((i = aCg + f9 * nN) > ag.ii[aB] - ag.ih[aB] + 1) return eT;
					if ((j = aKD(hq, i)) > ag.ik[aB] - ag.ij[aB] + 1) return eT;
					ew = ag.ih[aB] + Math.floor(Math.random() * (ag.ii[aB] - ag.ih[aB] + 2 - i)), ey = ag.ij[aB] + Math.floor(Math.random() * (ag.ik[aB] - ag.ij[aB] + 2 - j)), aK7(aB, ew, ey, i, j) && (aJ3[aB] = ew, aJ4[aB] = ey, aJ5[
						aB] = i, aJ6[aB] = j, eT = !0)
				}
				return eT
			}(aB, hq) && aKA(aB) : ! function(aB, hq) {
				var j, ew = aJ3[aB] + 1,
					ey = aJ4[aB] + 1,
					i = aJ5[aB] - 2;
				for (;;) {
					if (i < 1) {
						aJ5[aB] = 0;
						break
					}
					if (j = aKD(hq, i), aK7(aB, ew, ey, i, j)) return aJ3[aB] = ew, aJ4[aB] = ey, aJ5[aB] = i, aJ6[aB] = j, 1;
					ew++, ey++, i -= 2
				}
				return
			}(aB, hq) ? function(aB, hq) {
				var ew, ey, i, j, f9, nT, jS = ag.ii[aB] - ag.ih[aB] + 1,
					aKE = Math.floor(.02 * jS);
				for (nT = -6 * (aKE = aKE < 1 ? 1 : aKE), f9 = jS; nT <= f9; f9 -= aKE)
					if (j = aKD(hq, i = 0 < f9 ? f9 : 1), ew = ag.ih[aB] + Math.floor(Math.random() * (ag.ii[aB] - ag.ih[aB] + 2 - i)), ey = ag.ij[aB] + Math.floor(Math.random() * (ag.ik[aB] - ag.ij[aB] + 2 - j)), aK7(aB, ew, ey, i, j))
						return aJ3[aB] = ew, aJ4[aB] = ey, aJ5[aB] = i, aJ6[aB] = j
			}(aB, hq) : aKA(aB)
		}(al.kn[f8]);
		aJ1 = (aJ1 += ep) % al.ki
	}, this.mS = function() {
		var aB, gN, zG, zH;
		if (bf.k9() % 4 == 1)
			for (aB = al.ki - 1; 0 <= aB; aB--) gN = al.kn[aB], ac.a8S[gN] < 2 || ((zG = Math.max(aJU[gN] - 1, 0)) === (zH = Math.max(aJV[gN] - 1, 0)) ? 0 === zG && (ac.a8S[gN] %= 2) : 0 === zH && ac.a8S[gN] < 6 && (ac.a8S[gN] += 4), aJU[gN] =
				zG, aJV[gN] = zH)
	}, this.a6b = function(player) {
		var aB = player + 2 * aD.em,
			dt = aCX[aB];
		return 0 < dt && (aN.a0H(50, player), aCX[aB] = 0, 255 === dt)
	}, this.a5d = function(player) {
		return 255 === aCX[player + 2 * aD.em]
	}
}

function cd() {
	var aKH, aKI, aKJ;
	this.dd = function() {
		aKH =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), aKI =
			"Corrupted Earth;Returning Nature;Abandoned Areas;Restricted Area;Contaminated Area;Burning Land;Barren Land;Ravenland;Deadland;Dangerous Area;Devastated Land;Swampland;Plundered Land;Overrun Area;Undead Masses;Roaming Horde;Lurking Horde;Fallen Territory;Ghostland;Doomstruck Land;Infected Enclave;Plagued Nation;Forbidden Zone;Toxic Ground;Scorched Earth;Ruined City;Cursed Land;Diseased Colony;Forsaken Fields;Necromancer"
			.split(";"), aKJ = "Protected Zone;Quarantine Zone;Last Bastion;Buffer Zone;Liberated Area;Resistance Zone;Rising Territory;Recovered Region;Rebel Sector;Emerging Lands;Safety Corridor;Isolation Area;Guarded Sector".split(";");
		for (var a6s = ["K ", " Y", "E ", " Z", " z", " s", "S "], aDY = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], aB = aKH.length - 1; 0 <= aB; aB--)
			for (var f8 = a6s.length - 1; 0 <= f8; f8--) aKH[aB] = aKH[aB].replace(a6s[f8], aDY[f8]);
		if (__fx.settings.realisticNames) aKH = realisticNames;
	}, this.a4j = function() {
		var ep = aD.kC,
			yd = ag.yd,
			a0o = ag.a0o,
			playerNamesData = aD.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < ep)
			for (var aB = 0; aB < ep; aB++) yd[aB] = a0o[aB] = "Player " + ay.jT(1e3);
		else
			for (aB = 0; aB < ep; aB++) yd[aB] = a0o[aB] = playerNamesData[aB]
	}, this.a7 = function() {
		if (9 === aD.kU) {
			for (var e8 = ay.random(), aKP = aKJ, aKQ = aKI, hY = aE.hY, ep = aKP.length, l7 = aD.data.teamPlayerCount[7], yd = ag.yd, a0o = ag.a0o, aB = l7 - 1; aB >= aD.kC; aB--) yd[aB] = a0o[aB] = aKP[(aB + e8) % ep];
			for (ep = aKQ.length - 1, aB = l7; aB < aD.em; aB++) yd[aB] = a0o[aB] = aKQ[hY[aB] ? ep : aB % ep]
		} else(2 === aD.data.playerNamesType ? function() {
			for (var ep = aD.em, yd = ag.yd, a0o = ag.a0o, playerNamesData = aD.data.playerNamesData, aB = aD.kC; aB < ep; aB++) yd[aB] = a0o[aB] = playerNamesData[aB]
		} : 1 === aD.data.playerNamesType ? function() {
			for (var yd = ag.yd, a0o = ag.a0o, aB = aD.kC; aB < aD.em; aB++) yd[aB] = a0o[aB] = "Bot " + ay.jT(1e3)
		} : function() {
			for (var aKR = aKH, ep = aKR.length, e8 = ay.random(), yd = ag.yd, a0o = ag.a0o, aB = aD.kC; aB < aD.em; aB++) yd[aB] = a0o[aB] = aKR[(aB + e8) % ep]
		})()
	}
}

function cw() {
	this.aKS = [], this.aKT = [], this.dd = function() {
		this.aKS = [], this.aKT = []
	}, this.j5 = function() {
		0 <= this.aKS.length && this.aKU(this.aKS), 0 <= this.aKT.length && this.aKU(this.aKT)
	}, this.aKU = function(g) {
		for (var f9 = -1, aB = g.length - 1; 0 <= aB; aB--)
			if (g[aB].eO--, g[aB].eO <= 0) {
				f9 = aB;
				break
			} for (aB = f9; 0 <= aB; aB--) g.shift()
	}, this.a5W = function(id, zy, aKV) {
		return this.fB(this.aKS, id, zy, aKV)
	}, this.aKW = function(id, zy, aKV) {
		return this.fB(this.aKT, id, zy, aKV)
	}, this.fB = function(g, id, zy, aKV) {
		return ! function(g, id, zy) {
			var aB, hh;
			for (aB = zy.length - 1; 0 <= aB; aB--)
				for (hh = g.length - 1; 0 <= hh; hh--)
					if (g[hh].player === zy[aB] && id === g[hh].id) return 1;
			return
		}(g, id, zy) && (aKV && function(g, id, zy) {
			var aB;
			for (aB = zy.length - 1; 0 <= aB; aB--) g.push({
				player: zy[aB],
				id: id,
				eO: 384
			})
		}(g, id, zy), !0)
	}
}

function cc() {
	this.a0o = new Array(aD.em), this.yd = new Array(aD.em), this.a3U = new Uint8Array(aD.em), this.ml = new Uint8Array(aD.em), this.ih = new Uint16Array(aD.em), this.ij = new Uint16Array(aD.em), this.ii = new Uint16Array(aD.em), this.ik =
		new Uint16Array(aD.em), this.gd = new Uint32Array(aD.em), this.xj = new Uint32Array(aD.em), this.gr = new Uint32Array(aD.em), this.gH = null, this.gV = null, this.gW = null, this.fF = null, this.q2 = new Uint16Array(aD.em), this.jE =
		new Uint16Array(aD.em), this.jF = new Uint16Array(aD.em), this.a0j = new Uint16Array(aD.em), this.a0h = new Uint8Array(aD.em), this.a3d = new Uint16Array(aD.em), this.dd = function() {
			this.a0o.fill(""), this.yd.fill(""), this.a3U.fill(0), this.ml.fill(0), this.ih.fill(0), this.ij.fill(0), this.ii.fill(0), this.ik.fill(0), this.gd.fill(0), this.xj.fill(0), this.gr.fill(0), this.gH = new Array(aD.em), this.gV =
				new Array(aD.em), this.gW = new Array(aD.em), this.fF = new Array(aD.em), this.q2.fill(0), this.jE.fill(0), this.jF.fill(0), this.a0j.fill(0), this.a0h.fill(0), this.a3d.fill(0)
		}
}

function cu() {
	this.aD3 = function(player) {
		aG.mk(player), aD.a0C++, ag.a3U[player] = 2, ag.a0j[player] = bi.a0z.aHh(), player === aD.eZ && (aX.show(!1, !1), aW.aBA(), bR.zv.a0f()), af.a6b(player)
	}
}

function cV() {
	this.kn = null, this.ki = 0, this.a4n = function() {
		for (this.ki = 0, aB = aD.em - 1; 0 <= aB; aB--) 0 !== ag.ml[aB] && this.ki++;
		this.kn = new Uint16Array(this.ki);
		for (var ep = 0, aB = 0; aB < aD.em; aB++) 0 !== ag.ml[aB] && (this.kn[ep++] = aB)
	}, this.mR = function() {
		for (var gd = ag.gd, xj = ag.xj, a0h = ag.a0h, kn = al.kn, aB = al.ki - 1; 0 <= aB; aB--) {
			var gN = kn[aB],
				dt = gd[gN],
				l7 = xj[gN];
			dt <= bL.du(l7, 4) ? ak.dm(gN) : l7 <= dt ? 250 <= (xj[gN] = dt) && (a0h[gN] = 1) : xj[gN] = l7 - Math.max(1, bL.du(l7 - dt, 1e3))
		}
		this.aKa()
	}, this.aKa = function() {
		for (var ml = ag.ml, l6 = this.kn, aBs = this.ki, aB = aBs - 1; 0 <= aB; aB--) 0 === ml[l6[aB]] && (l6[aB] = l6[--aBs]);
		this.ki = aBs
	}
}

function cW() {
	var aKb = new Uint16Array(aD.em),
		aKc = 0;

	function aKg(a6h, aKe) {
		var fA = bf.k9();
		return 3213 <= fA ? 4 + bL.du(100 * aKe, ae.js(a6h)) : (a6h = 1 + bL.du(aD.jw, 300), fA < 357 ? 2 + bL.du(100 * aKe, a6h) : fA < 714 ? 2 + bL.du(100 * aKe, 4 * a6h) : fA < 1071 ? 2 + bL.du(100 * aKe, 10 * a6h) : fA < 2142 ? 2 + bL.du(100 *
			aKe, 30 * a6h) : 2 + bL.du(100 * aKe, 100 * a6h))
	}

	function aKf(a6h) {
		return aD.kW || 7 <= aD.kU || 4284 <= bf.k9() || bA.gB.jZ(a6h)
	}
	this.dd = function() {
		aKb.fill(0), aKc = 15
	}, this.hT = function(pB) {
		var player = aD.eZ;
		return !!bA.gB.q4(player, pB) && !(!bA.gB.pU(player, bA.gB.iO(player, aR.hJ()), pB) || (player = pB, pB = bO.fM[0], !aKf(player) && aKb[player] + aKg(player, pB) > aKc))
	}, this.jI = function(a6h, aKe) {
		if (!aKf(a6h)) {
			aKe = aKg(a6h, aKe);
			if (aKb[a6h] + aKe > aKc) return !1;
			aKb[a6h] += aKe
		}
		return !0
	}, this.j5 = function() {
		bf.k9() % 100 == 99 && (bf.k9() < 1071 ? aKc += 4 : bf.k9() < 2142 ? aKc += 6 : bf.k9() < 3213 ? aKc += 8 : aKc += 10)
	}
}

function ce() {
	var aKh;
	this.kd = null, this.kc = 0, this.dd = function() {
		aKh = [], 9 === aD.kU && this.aKi()
	}, this.aKi = function() {
		this.kd = [0, 0, 0, 0, 0, 0];
		for (var aKj = [256, 227, 170, 148, 100, this.kc = 0, 0, 0], aKk = [0, 8, 24, 30, 46, 70, 256, 333], aKl = [0, 0, 3, 7, 14, 22, 256, 179], j = aD.kC, aB = 1; aB < aKj.length; aB++)
			if (j <= aKk[aB]) {
				this.kc = aKj[aB - 1] - bL.du((j - aKk[aB - 1]) * (aKj[aB - 1] - aKj[aB]), aKk[aB] - aKk[aB - 1]), this.kd[5] = aKl[aB - 1] - bL.du((j - aKk[aB - 1]) * (aKl[aB - 1] - aKl[aB]), aKk[aB] - aKk[aB - 1]), this.kd[0] = aD.em - j - this
					.kc - this.kd[5];
				break
			} aD.kY = aD.em - aD.kC, aD.data.numberTeams = (0 < aD.kC) + (0 < aD.kY), aD.data.playerCount = aD.xF = aD.kC + aD.kY, aD.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, aD.kC + this.kc, aD.kY - this.kc]), aD.a4c.a4h()
	}, this.aHo = function(player) {
		aKh.push({
			player: player,
			gI: 14 + ay.jT(20)
		})
	}, this.j5 = function() {
		if (9 === aD.kU)
			for (var aB = aKh.length - 1; 0 <= aB; aB--) --aKh[aB].gI <= 0 && (af.qC(aKh[aB].player, 0, aj.rt.yy + aj.rt.zC), aKh.splice(aB))
	}
}

function dB() {
	function aL1() {
		return {
			f0: bS.f0,
			f1: bS.f1,
			wh: bS.wh,
			wd: bS.wd,
			we: bS.we,
			wi: bS.wi,
			eV: bS.eV,
			mapSeed: bS.mapSeed,
			wf: bS.wf
		}
	}

	function aKt(aB) {
		return 1 !== aB && bS.aDi(aB) && aB !== bS.aL3()
	}
	this.aKn = 24, this.aKo = 12, this.aI0 = 4096, this.f0 = 0, this.f1 = 0, this.wh = null, this.wd = null, this.we = null, this.wi = null, this.eV = 0, this.mapSeed = 0, this.wf = !1, this.wg = new aKp, this.wX = new aKq, this.a6y = new aKr, this
		.dd = function() {
			this.wX.dd()
		}, this.a7 = function(map, aKs) {
			((map %= this.aKn) !== this.eV || aKt(this.eV) && aKs !== this.mapSeed) && (this.wf = !1, this.wg.aKu(), ay.a4i(map), this.eV = map, this.mapSeed = aKs, aKt(map) && (bS.wX.wY[map].aKv = aKs), this.aDi(this.eV) ? (map = bS.wX.wY[this.eV],
				this.f0 = map.i, this.f1 = map.j, ay.a4i(map.aKv), aq.a7([this.f0, this.f1, map.mq, map.mn]), aKx(), ap.aKy(), aq.aKz()) : aKw())
		}, this.aL0 = function(map, aKs) {
			var fY = aL1(),
				map = (this.a7(map, aKs), this.wg.aKu(), aL1());
			return aKs = fY, bS.f0 = aKs.f0, bS.f1 = aKs.f1, bS.wh = aKs.wh, bS.wd = aKs.wd, bS.we = aKs.we, bS.wi = aKs.wi, bS.eV = aKs.eV, bS.mapSeed = aKs.mapSeed, bS.wf = aKs.wf, map
		}, this.a52 = function(canvas) {
			canvas && this.wh !== canvas && (this.f0 = canvas.width, this.f1 = canvas.height, this.wh = canvas, this.wd = this.wh.getContext("2d", {
				alpha: !1
			}), this.ho = this.wd.getImageData(0, 0, this.f0, this.f1), this.wi = this.ho.data, this.eV = this.aL3(), this.mapSeed = 0, bS.wX.wY[this.eV].name = aD.data.mapName)
		}, this.eU = function(aB) {
			return 3 === aB || 7 === aB || 9 === aB || 21 === aB || aB === this.aL3()
		}, this.aL4 = function(aB) {
			return 2 === aB || 7 === aB || 9 === aB || 20 === aB
		}, this.aL5 = function(aB) {
			return 1 === aB
		}, this.aL3 = function() {
			return this.aKn
		}, this.aDi = function(aB) {
			return void 0 === this.wX.wY[aB].aL6
		}, this.a51 = function(qV) {
			return 0 === qV.mapType ? qV.mapProceduralIndex < 10 ? qV.mapProceduralIndex : 10 + qV.mapProceduralIndex : 1 === qV.mapType ? 10 <= qV.mapRealisticIndex ? 22 + qV.mapRealisticIndex - 10 : qV.mapRealisticIndex + 10 : void 0
		}, this.aDj = function(qV, aL7) {
			0 === qV.mapType ? qV.mapProceduralIndex = aL7 < 10 ? aL7 : aL7 - 10 : 1 === qV.mapType && (qV.mapRealisticIndex = aL7 - (22 <= aL7 ? 12 : 10))
		}
}

function aKp() {
	function aLG() {
		bS.wg.j5()
	}

	function aLM(gN, aLL) {
		0 < aLL && (bS.wi[gN] += aLL, bS.wi[gN + 1] += aLL, bS.wi[gN + 2] += aLL)
	}

	function i3(gN) {
		return bS.wi[gN + 2] > bS.wi[gN] && bS.wi[gN + 2] > bS.wi[gN + 1]
	}
	this.a9R = -1, this.a1C = 0, this.aL8 = 0, this.aL9 = 8, this.aLA = 32, this.aLB = 8, this.aLC = 32, this.aLD = [0, 0], this.a8S = [0, 0, 0, 0], this.iZ = null, this.aLE = !0, this.aLF = !1, this.aKu = function() {
		-1 !== this.a9R && clearTimeout(this.a9R), this.a9R = -1, this.iZ = null, aq.aKz()
	}, this.dd = function() {
		7 === aa.a1L() || this.aLF || (this.aLE = !0, this.a1C = 0, this.aL8 = 1, this.aLD = [bS.wX.wY[bS.eV].wz[0], bS.wX.wY[bS.eV].x0[0]], this.a8S = [bS.wX.wY[bS.eV].aL6[3], bS.wX.wY[bS.eV].aL6[4], bS.wX.wY[bS.eV].aL6[5], bS.wX.wY[bS.eV].aL6[
			6]], this.aL9 = bS.wX.wY[bS.eV].aL6[7], this.aLA = bS.wX.wY[bS.eV].aL6[8], this.aLB = bS.wX.wY[bS.eV].aL6[9], this.aLC = bS.wX.wY[bS.eV].aL6[10], this.aLE ? this.a9R = setTimeout(aLG, 16) : this.j5())
	}, this.j5 = function() {
		if (8 === aa.a1L() && aH.n3()) this.a9R = setTimeout(aLG, 16);
		else {
			if (0 === this.a1C) {
				var aKv = ay.aLH();
				if (ay.a4i(bS.wX.wY[bS.eV].aL6[2]), aq.a7([bS.f0, bS.f1, bS.wX.wY[bS.eV].aL6[0], bS.wX.wY[bS.eV].aL6[1]]), ay.a4i(aKv), this.iZ = aq.aLI(), this.a1C++, this.aLE) return void(this.a9R = setTimeout(aLG, 16))
			}
			for (var gN, eb, aKv = this.aLE ? 10 : 1e6, aKv = bS.f1 - this.aL8 - 1 < aKv ? bS.f1 - this.aL8 - 1 : aKv, xw = this.aL8 + aKv, ey = this.aL8; ey < xw; ey++)
				for (var ew = 1; ew < bS.f0 - 1; ew++) i3(gN = 4 * (eb = ew + ey * bS.f0)) ? this.aLJ(gN, eb, 1) : (this.aLJ(gN, eb, 0), function(ew, ey, gN) {
					return 1 < ew && i3(gN - 4) || ew < bS.f0 - 2 && i3(gN + 4) || 1 < ey && i3(gN - 4 * bS.f0) || ey < bS.f1 - 2 && i3(gN + 4 * bS.f0)
				}(ew, ey, gN) && this.aLK(ew, ey));
			this.aL8 = xw, this.aL8 >= bS.f1 - 1 ? (bS.wd.putImageData(bS.we, 0, 0, 1, 1, bS.f0 - 2, bS.f1 - 2), bf.dl = !0, this.aKu()) : this.aLE && (this.a9R = setTimeout(aLG, 16))
		}
	}, this.aLJ = function(gN, eb, e9) {
		aLM(gN, Math.floor(this.aLD[e9] + this.a8S[e9] * this.iZ[eb] / 1e4) - bS.wi[gN])
	}, this.aLN = function(gN, e8, aLO, e9, a8S) {
		aLM(gN, Math.floor(this.aLD[e9] + (1 - e8 / aLO) * a8S) - bS.wi[gN])
	}, this.aLK = function(lR, lS) {
		for (var gN, e8, aLO, a9H = lR - this.aLA, aLP = lS - this.aLA, xx = lR + this.aLA, xw = lS + this.aLA, a9H = a9H < 1 ? 1 : a9H, xx = xx > bS.f0 - 2 ? bS.f0 - 2 : xx, xw = xw > bS.f1 - 2 ? bS.f1 - 2 : xw, ey = aLP < 1 ? 1 : aLP; ey <=
			xw; ey++)
			for (var ew = a9H; ew <= xx; ew++) i3(gN = 4 * (ew + ey * bS.f0)) ? (aLO = this.aL9 + (this.aLA - this.aL9) * this.iZ[ew + bS.f0 * ey] / 1e4, Math.abs(lR - ew) > aLO || Math.abs(lS - ey) > aLO || aLO <= (e8 = Math.sqrt((lR - ew) * (
				lR - ew) + (lS - ey) * (lS - ey))) || this.aLN(gN, e8, aLO, 1, this.a8S[3])) : (aLO = this.aLB + (this.aLC - this.aLB) * this.iZ[ew + bS.f0 * ey] / 1e4, Math.abs(lR - ew) > aLO || Math.abs(lS - ey) > aLO || aLO <= (e8 = Math
				.sqrt((lR - ew) * (lR - ew) + (lS - ey) * (lS - ey))) || this.aLN(gN, e8, aLO, 0, this.a8S[2]))
	}
}

function aKx() {
	var uV = aLQ(bS.eV);
	uV && aLR(uV[0], uV[1], uV[2], uV[3], uV[4])
}

function aLQ(eV) {
	return 2 === eV ? [
		[256],
		[256],
		[0, 205, 256],
		[500, 500, 0],
		[0, 0, 0]
	] : 7 === eV ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : 8 === eV ? [
		[410],
		[410],
		[0, 120, 210],
		[0, 80, 640],
		[0, 0, 0]
	] : 9 === eV ? [
		[512],
		[512],
		[0, 70, 180, 200, 290, 420, 512],
		[500, 500, 0, 0, 500, 500, 0],
		[0, 0, 0, 0, 0, 0, 0]
	] : 20 === eV ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : null
}

function aLR(aLS, aLT, aLU, aLV, aLW) {
	for (var ew, ey, aLY, aLZ, a2X, aLb, i8 = aLS.length - 1, aLX = bS.f0 + bS.f1, ep = (aLX *= aLX, aLU.length), aLa = Array(ep), aB = ep - 1; 0 <= aB; aB--) aLa[aB] = aLU[aB] * aLU[aB];
	var aLc = new Array(ep),
		aCU = new Array(ep),
		aLd = new Array(ep),
		fH = aq.aLI();
	if (void 0 === aLW)
		for (aLW = new Array(ep), aB = ep - 1; 0 <= aB; aB--) aLW[aB] = 0;
	for (aB = 1; aB < ep; aB++) aLc[aB] = aLa[aB] - aLa[aB - 1], aCU[aB] = aLV[aB] - aLV[aB - 1], aLd[aB] = aLW[aB] - aLW[aB - 1];
	for (ew = bS.f0 - 1; 0 <= ew; ew--)
		for (ey = bS.f1 - 1; 0 <= ey; ey--) {
			for (aLY = aLX, aB = i8; 0 <= aB; aB--) aLY = (aLZ = (ew - aLS[aB]) * (ew - aLS[aB]) + (ey - aLT[aB]) * (ey - aLT[aB])) < aLY ? aLZ : aLY;
			for (a2X = aLV[ep - 1], aLb = aLW[ep - 1], aB = 1; aB < ep; aB++)
				if (aLY < aLa[aB]) {
					a2X = aLV[aB - 1] + aHF((aLY - aLa[aB - 1]) * aCU[aB], aLc[aB]), aLb = aLW[aB - 1] + aHF((aLY - aLa[aB - 1]) * aLd[aB], aLc[aB]);
					break
				} aLe(bS.f0 * ey + ew, a2X, aLb, fH)
		}
}

function aLe(e9, a2X, aLb, fH) {
	a2X < 500 ? fH[e9] = bL.du(fH[e9] * a2X * 2, 1e3) : 500 < a2X && (fH[e9] += bL.du(2 * (1e4 - fH[e9]) * (a2X - 500), 1e3)), fH[e9] += bL.du(aLb * (10 * a2X - fH[e9]), 1e3)
}

function cg() {
	var aLf;

	function aLp(a2y, hq, ew, ey, globalAlpha) {
		bS.wd.save(), bS.wd.globalAlpha = globalAlpha, bS.wd.imageSmoothingEnabled = !1, bS.wd.scale(hq, hq), bS.wd.drawImage(a2y, Math.floor(ew * (bS.f0 / hq - a2y.width)), Math.floor(ey * (bS.f1 / hq - a2y.height))), bS.wd.restore()
	}
	this.a6v = 0, this.a6w = 0, this.a6x = 0, this.a6y = 0, this.dd = function() {
		(aLf = new Array(bS.aKn))[0] = {
			i: [0, 5e3, 8e3, 1e4],
			e8: [220, 250, 255, 220],
			tG: [190, 220, 0, 0],
			f9: [170, 200, 0, 0]
		}, aLf[1] = {
			i: [0, 4e3, 5e3, 6e3, 1e4],
			e8: [25, 0, 100, 0, 25],
			tG: [25, 0, 0, 0, 25],
			f9: [25, 0, 0, 0, 25]
		}, aLf[2] = {
			i: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			e8: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			tG: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			f9: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aLf[3] = {
			i: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			e8: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			tG: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			f9: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, aLf[4] = {
			i: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			e8: [10, 10, 20, 10, 10, 170, 212],
			tG: [20, 20, 60, 100, 100, 110, 170],
			f9: [70, 70, 160, 30, 30, 60, 120]
		}, aLf[5] = {
			i: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			e8: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			tG: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			f9: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aLf[6] = {
			i: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			e8: [10, 10, 60, 255, 255, 200, 200],
			tG: [10, 10, 60, 255, 255, 200, 200],
			f9: [80, 80, 255, 255, 255, 200, 200]
		}, aLf[7] = {
			i: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			e8: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			tG: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			f9: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aLf[8] = {
			i: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			e8: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			tG: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			f9: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aLf[9] = {
			i: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			e8: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			tG: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			f9: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aLf[20] = {
			i: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			e8: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			tG: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			f9: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, aLf[21] = {
			i: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			e8: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			tG: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			f9: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.aKy = function() {
		var aLo, aB, f8, fY, ho = function() {
				var ho;
				return bS.wh = document.createElement("canvas"), bS.wh.width = bS.f0, bS.wh.height = bS.f1, bS.wd = bS.wh.getContext("2d", {
					alpha: !1
				}), ho = bS.wd.getImageData(0, 0, bS.f0, bS.f1), bS.wi = ho.data, ho
			}(),
			i = aLf[bS.eV].i,
			e8 = aLf[bS.eV].e8,
			tG = aLf[bS.eV].tG,
			f9 = aLf[bS.eV].f9,
			fH = aq.aLI(),
			ep = i.length - 2,
			aLj = new Array(1 + ep),
			aLk = new Array(1 + ep),
			aLl = new Array(1 + ep),
			aLm = new Array(1 + ep);
		for (f8 = ep; 0 <= f8; f8--) aLj[f8] = i[f8 + 1] - i[f8], aLk[f8] = e8[f8 + 1] - e8[f8], aLl[f8] = tG[f8 + 1] - tG[f8], aLm[f8] = f9[f8 + 1] - f9[f8];
		for (aB = bS.f0 * bS.f1 - 1; 0 <= aB; aB--)
			for (f8 = ep; 0 <= f8; f8--)
				if (fH[aB] >= i[f8]) {
					fY = fH[aB] - i[f8], bS.wi[4 * aB] = e8[f8] + aHF(aLk[f8] * fY, aLj[f8]), bS.wi[4 * aB + 1] = tG[f8] + aHF(aLl[f8] * fY, aLj[f8]), bS.wi[4 * aB + 2] = f9[f8] + aHF(aLm[f8] * fY, aLj[f8]), bS.wi[4 * aB + 3] = 255;
					break
				} bS.wd.putImageData(ho, 0, 0), bS.aL5(bS.eV) && ab.tK() && bS.aL5(bS.eV) && (ho = ab.aGQ("arena"), aLo = ab.aGQ("territorial.io"), aLp(ho, 5, .5, .5, .1), aLp(aLo, 2, .5, .45, .1)), bS.wf = !0, bf.dl = !0
	}, this.a4l = function() {
		for (var gN, ew, ey, aLq, hf, fa, a6w = 0, i = bS.f0, j = bS.f1, fY = i * j * 4, aLr = aC2, aLs = bS.wi, aB = i - 1; 0 <= aB; aB--) aLr[(gN = aB << 2) + 2] = aLr[fY - gN - 2] = 3;
		for (fY = 4 * i, aB = j - 1; 0 <= aB; aB--) aLr[(gN = aB * fY) + 2] = aLr[gN + fY - 2] = 3;
		for (aLq = i - 1, hf = j - 1, ey = 1; ey < hf; ey++)
			for (fY = ey * i, ew = 1; ew < aLq; ew++) fa = 1 - (aLs[(gN = fY + ew << 2) + 2] > aLs[gN + 1] && aLs[gN + 2] > aLs[gN]), aLr[gN + 2] = 6 - 5 * fa, a6w += fa;
		this.a6v = (i - 2) * (j - 2), this.a6y = 0, bS.eU(bS.eV) && (bS.a6y.aLt(), bS.a6y.aLu(4, 5)), this.a6w = aD.jw = a6w - this.a6y, this.a6x = this.a6v - this.a6w - this.a6y, this.a6x && (bS.a6y.aLu(6, 2), bS.a6y.aLv())
	}
}

function aKw() {
	var qK;
	10 === bS.eV ? qK =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === bS.eV ? qK =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === bS.eV ? qK =
		"JJAf25PfV-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeuaeaLLeifdueuaeOd_LJGKJJKLdJJPKG5KPPuedePLLddOaeOeOKOOKJOK__LK_OLLOO_K34K04-F-2BkG0021Pifiddaedd_GK8OJ3__K4--B09eduPKLKJJK43G--aieyizvePde_aPPOd_3G-3JF3HOfiviyifeOaOdaO_HOJHeKLvdO_3331PaeQidvzePeaeKHudePPedaKKKKLK__-zBl4-kx3OHOeudaLPiaOdcwEePLOd_daueePduPOePaeeduaOdaJJJOJ_POddOaddedeedeLK8dOdLKdjziuieffiuiveiedOieifeuviviyviyvviyvvvzyeLeOdaK_JKJGK443K4KOOaKG3K8KKdddaOaOOOOKOLK_OOaO_aLO_aa___J2Bkn--nnnnwzEnnnC4LK8JKKKJK30-o-oGKGK4GJJG3K4J0HK_aK_K3FG4KaOdOOLKJJGGOPffeeQijjzivfiiueK33F3K3G43_KeiivvuueddJFFFFFF3JJGGaQfeveyvuuK444JF-F2-FGG3J43F3-Ew05OOK_eePaaaeeiufieveefevifiuuiuuideK_--33GG5dKauviiue__LLKGJMjjjjizjuffjjvedvjvyiiuvuvvvvieOaeedueeeaK0FF3GF30G3-OK_KKOKG003Fwzvzgl3FJJGK3CG3C4aJ-FOdKGKJG3JKK_K4OG0G3OaJGF2-0F--K230_F-2nzzvfw-FKFJKP_F-G000-G430-BG--l3GG-o2-o30-433G33J333-2vcB--F322B2-B22-kBn-3-22z--z-2-03K403G0--333FG330434FFFG333FFxT-2bhSxwTUzUMpopJpKrUUUUUUSxxrrrrMra7N-0bzKCKrSISrSrSrUMUUrSrrrrUxUrbpEUMMSrSrSrrrUzxrq56xICMKpKKK9fSrH_MIKSKCxppSJnBeemmcX7XX9mfJeHgeXhKCCCBgpHmnCCKA9YA9eeemmf9mgfABgmfBce9ece99AApqUzUUSxBfA9jrxzUMxpUUUrtzyUrxaUzUxrrMtsOzKIpSxBoeI9fBgf9mmmggmnBmgfBnpUqTOzzUzJprSSxttbzxS9jSKpKpCHxIKBhCCrSzUMMzxyUbaOtbaNNObbbbtzzzrtWaOtbaNOttzUrSrRUzbzUtza-150bcUq-99e9efBn9cX2BnIBemf9cXX9X7X0sN7779V9eWaY90Be0Wy7n9VX7ZccXXXe7Y9776zzUpprV5-UMMML5USpJoxTNNN0txr0WaUzaOaNUpT-770V0zKKMMyTOaObtzbzzzttyUbzzSWaOaUbbbrROa5OaUzzzzyUS5OyUtxzztzaT0ztzxrzzzzzrzzzOaOaObaUbtyUbzzzbztzzbtyUbztyOWaOsN--UpKSr6btba--NV10yOy5-NVVUxbyOWWWbrbbzbzUUUUSrTTP-0WWWbV-5Oa5-5N--0WWVNNN5550X-50WVOa0txUF-t8y_LOaaPadeeePeaOaPdeaePePdydd_uO_dePOaPTdQjFnvdyvyznzzyywnynvvjjizjfjji2ueePfivyvivivviyviivivziiuiiyvivjizjeivziivfffivvyyzjivivivfiivivvvBBo-zivgC-BoFFFFnzuuzil43EyzzijBFF22---nsn-n2w22EW2EykE2ns2EnEwwzzEjYyveKTyvvisEzp4J2zvgzvvvskB200FzvvzEjEEzfivvfeiyiieiifekyeaTePfeee_Lvijiyyvjjvyw3JJFnzskEwB2wzyyvuyevyyuvvjyijjud_aPPOd__OKJGPOdOOOGLaPaaiePPPeaaPKauaeOaK43G0-E-nzgBB-B2-k-kB-kkEBnC304PK5LOOKaK4KKGJFOGKKOK44G_KK_aOOOOOaeTee_OdafzfiuuvfzzjjeKOK8GdaKJJG3GK_KLJKKaeTefjizzgyzzivfeiijuuavfivijjjiefeeeeYzwzEyeyvivffiEBwzyuyBnzzjizffeaPeeaePPaaeffiudedvvueuQvjivfffeuifix3F33300-BF-21O_32FFBBB222BknBnznnEzEnzjzveueTuviueuffuyyyyyzjvvivjiveQidaaa_iaOdKOLKK8__OaKKF3009d__KOaKKOG3-kF33deeaeuiadePeefffeevfvf3BznzEvwnEzEzjvyi_KGLLPaaveuuidJKaKOdeusn2zzjyyffEyefjzujyeauPaebdeuieieeiePeeieieuiiffeeevfeuuuifeeOOOKOKOKK3C_LLLLLLLLLLKOOLK_____aKPJPJKKKJK4JOK4_GKGJJJJK43K43JJJG00003KGKKKKKGK_4JJJKJG3FFFG-F--3-30---F--F-F02BB---BBaOG2EC2yiivnB--2zjFG40-2-Bn3-B3-Bl32-BnBwnnBnEvnnzzvs03G3JG3K8OLK8_1K3GFF-K3G433G330-33FFG340403G33J3JGG4G3F3G3033G4-GG033GG33-30443G0-232-00-2---B2-B2BE2GLiaOOaJJ3303G0-FOGJ303G3OG2n03-BzEg-Eis---2-kkkB2--22wk2-BzuivV3BK2Fnzeefcl0-nEeik-wzuvoFzgzvsx-2-0-zg3JJG3G033G3G3G44GGJJG3333G3JK3-G4JG3G3JG0-G04JG3G03GG4433G3JK03--C043JG44443JLLKJGGKOKKGJGKaLKK3G44448KOOOaOaOauPOdLeaaazeKauuuedJ08aLJ_8aPPK8_LLOJJLKK_OLK_KLKK_KKK_OLK_O_aOaObzzjzzzvzyzjvjjuyvvveeyyyiyvjjvzjzzzyuUizyyzueujjjvzyiivzjiyyyvfjjjiyvvjjizzze_JJKJGGG43JGGGG03JJJGGK3JFGK4GGFFGGKGOFFF0JKKKK44GG3JFJJJ-04JFJ4GGJGKGK4KKKGKK4GKKK4KKKKPieQdJOK_aOO_LKKOdfzii_OK4G0OO__KKG9uuifvvyyvivYEiuavviuOOJG3G5aada_0-paPPdePaLLLPePeaaLOJLKTd_J-C443JLPizyuLKKaKTivzzK-nzzvvudeEuMuiuiffivyzjBEviuviyuvivvzjyzjjivvfjvfjffvjfivfiviyfyuuvviiyvvvvvieiwzjvizjzzijviiiiyzvyviffebfeTveueieuiuueeadddaPLdaPO___aO_aOLKOLaOOOKKOaO__K3KKGGKK43G4OOKGOLKK_O__GO_OGKGKJKK4K330OaOGK3G4K4GJJ3C43JKGJaaO_K43FG400--03G4OOLKKK443JJG00FF-nCK3L____GKOKJKK4JK4KKKJKJKGKOOOOK_OKKLKdKOaOKaO__OLLLKOOaLLKaOddOOKOGKKGK3KJKG448PKKGKK4GJK4GJJKK8aPaaQiviviuvjjzzjuKKKKKOOGKOLK_TivzvudOKK44OJJKJKKGKK_4FBz3GKGPiuyaLJK4K4GG304KO_GG4KOaOOaLLaaLOaJaaauaeePLaayzzzwzzzzzyuPLOaOOaiiuveu_aijEjeOPPLKPaiuvevYvEeOGKKKJdJ3-k3303LaevfePOKHPjyiyiik2zEiuiijyvizviededaLK8TyvuedeinnyejvfuaPOOJJHLeQgzzvjzzvEzzvnyzy__d_KTddKGKGKOKLLMvzzj2EzzyEvuPPvYBBn-nyzzvvefvziknyyjfdbiuddfjfivjvizvyvvnnnznvnEzzjeBn-Fkn2-B--kknvzvzzjzjvvyvjiyvviyvjyyvjfiiviiiivijiyyvvyEEnzyEEyznzzyEEwwwEEvgnB2BwnBnwBwEBwnzEzyjjjjijvvh3FzivenEjvBnBoG2znwnnBnEiyuveePuOaaLLLOaOauuuuuueda_aQedaPPfiviieeeaPPeeeuueuV1sEsYnICCWaOX-A2Djiew0-1sTHxmoxqUs7X-E2rdDKTv2k-T7vOx9zbac-oJG2uvnFJ-H9UMRn5N-oKUiyjVoJ-HA2lxTNc3gMUxtOOOLKOOKK8KTjznnzznwnznBF1NuDlpS6w177-BUJYv--00C4V0m2fUiVF-03C1V1mBTb_UzF-9H1uSP-2mOCruPsBF-3_SbzUP7--A9Uw--OX9c-BobJvF-0eUxV-2LGE-2b7RzC0V0nZFnil--8odfk--uxRk-OuzUyV1Is4tdj--0bkCEF-6EeL6jG-5bpJQAEbaV2IxB8_QjV-0OzS4pMVX-6EwNrjG--c-bQ-9J2KYdeaeedzY3F2----5VPpx--_0YCvf3F-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--0e55nrM0X7-S27pux3-aWsZUMKlVX1--GLvZ--Y1Ac-K74MuB-3d06bzP9-CHYRaMekB-0dKyEP-8I9NDvoF-1aXND--Ihqo-5bYjjc-0EccF-1Vu9V7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL---5gz4-4hcoEEr-V0hnXluPePzB2-G-2vgnOppIBlzbV-X7-hrg5tinF-5kFunMrXX-6N7gW_aezjYB-G3-00N173L3LdOduivfdiiuvi04---32Bl4K-0wFQ-rMy1XV1sbFlfnCJ164IlRgxKzrzxxxzUyXXXXXXXXX7--Xt-w-r4m1wxxxzse9Xc0iBe2OKaQvnsw0-0wObdmxrN-V-ssA2x-NloQnIKUr6xR0WaNgmVccV7NuMUaivyzEl3K4K-8m2rMAMzq-XV2t7IEvinJJ--HLqL--Zk4Z-Q8XXwgttu0GZmlybvjfjfeffizwznk04GG34JJGG4F-09Gfs15JrEOddacysn-B0-0RdjOpSV9-0_IU5-2mqMIBtV-ORQlk0BiqgxTc--8TzC-AmzgMrUzuBeXV05NGjtMzsnK0on4Xn9nA9fET6rSzprSxpprMKrJxSrSxbr6zSKMSSKMrMS6rTN-999X7V-1-50Vc719e7XXX7cX79--V7Xc-aODYuu--8wnsHopI9YCCRP-UpKSErxru-719--P-5aOzGOO_KKaPivjsnBnye__biyvvywno-0-G00-KF0woW-ppL1-V2Om28efk3F0BwpPnRNWutw68_OadKK3LaPOaOKadyviefjiuvifeiedaOaPeiuiaejjuun-2-2zyyevffeueuTeaTun--nB2knyziievfeuyijVoFG--2B3-0-o-3F--F3--F-zuvjjjiudfgnnzyn3FF2POG3G-B-044-34GFF3G3G3K43JJJFFG3GJ0AGPRghSSSr5UX77X700dGV5KLveufdaPiyBnBl--kl3GF5SBr6mpUzrUMSxsXe77X7X-2uSYzezx3K-Bovu6Uxpz-XXe-1PW82bsl-4p3V2ALOc3acdcuudaLPPPffevvwz--33F-kF33-EKrYCq9-devwqeyuuvfC3B3GF0F0xNEYopzV7V1PkcrfwJ0SpZObBgefKpHmeY9egegghpJgnBqTUTUUxSaUxzKUUblVObsP197V50ba6yT5TUceXeVLunIfdi_3HPOQzvjBzgzyvYyv3FGKKK3OF2--hQSWr1--f_Xg-UMKDRgxlWV05jJ-tiix-G-6pwPQBoTNP-Cg4lTeEBG--L5bP-MgHJ6iiykoGGF-xXN4nq--Lll-OU-6qEHEBntbe-GgaXLadYBl-4SZqqmplzSrtyTHXXXXc2qmSotPQjfePOeygkBkFl3J223-EOffgpV-Ygv4LObgnvnBzK_KF-Cbaxk05oR6tyEjJJ-7qY_zAAEbbc-5ocqR-fPfaxCBxa0aV-1pO9k0CfPzzT9VfQPtE_Pzie_dPbyjfvjeeeeuieufviyBkBnByg-0333FFF_LK03-kF--Bo03_4J-2QQGB02hngiQfffeudeEYnyBl04-033GK-1qydETc0asUMtaOsnnECJ-bRXYBgpqUV1-UiGJaKaPfezB2---4rA7vMGX--1wG8F1xtkgolzOyHe9--jHPo-ITixgjbc-qxqDOLRzk-QTvNhITNX-0jWb6-2rnnYM1--Quvxk2hxXonKKpsOX915-6jgl5Mn05rrKrBxomfJeenIBn9V-OaT3nBc7KK9nprSzrrTX6tV0bttzVOV1-0jljM-Is4hYAA9nDUqTOztce-Ake5iQYBF-y5UNoT7-b2rnPNn--59HTV-BKqG-2siNISX--RTmWk3DEtjn9mnAACrzzzVIRaQd_OLOOdaauaefEBnBzw-nBBkk4J-6_RRwNIMAmVPdeOeuTyzyzvjvvyzjyzivjiziudiyzynyzzzzvzzvzynzvzjwn--laK3OK_KKF--C4KKK3GGJKJFGKGJK4_KKKGG-J3E45KK443O_G--yQ5WzNc1rCYKvyijzeUvBG4JG43F0TQYbxRNc-GnlXTijnKG--5V1qV-x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === bS.eV ? qK =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === bS.eV ? qK =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === bS.eV ? qK =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === bS.eV ? qK =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === bS.eV ? qK =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === bS.eV ? qK =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === bS.eV ? qK =
		"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV" :
		22 === bS.eV ? qK =
		"N4Fs5OR-kV95d_aOaaKYvyajjyyvzgzE3J2Bk034aK2GJF1R0LkBzzrrzTNX9emcc-m-iMauzjnCJKK-yk5xZpEUMKElbzzSSSSKCCCMUzUrrzzxbxlzy56pUSqOzNUsV-X9e7eeXAA9ABe1cX9XBeV6zyccc5XcemV5HcX9e-DVEO_bjeuQE300J-4-WhfT70908ULKKfjjzzBFxKJ---8YoVBs3ywOKQieK3G0avuP_LUzzeLujvykC22k--C32J0x-eifBcggf9mmn9erKtzNUpr56a0aUSCKABnsOs56y5P0cV1a0RALO_4_dffe_LaTiyjwzx-C-Bo3-2-kIo1sOhKCpSMUMrzKA9cccXIpJpMJmX7XAppICpJe7X-4HeeKrSSUrSUppUu-7VWzxSWbxqOWc70bxzrlaOtbze-OzzaX-1e75X7X97cXh9c29991EN59GPOa_J0K5KKOLiyuOa__K3K5JKJJaPuufjjjeKGGJGQfiuJMevyuzjuviifedeuaddePOaaOfeOdLbeddaOOi_PbeaQddeeeeviufiEEBnEwz2kEgyyyvzyEwwynvizjjvynvzo3G42EgBzeeisn-2F32-yuPuBl-FEuivyBG2vvy3B-zgBFx3--yjyvf2J32E3_FwnEBznn2C-nyEivv042Ejivwzzz-33G4OOG0FK_KK2nwwwn-K_KJK-zvBG3GGJK4J2Ejyzvjvjiyyzw33FFBoK3G3FyyyyoFG-G043GGGGGJau_KG23G-KG5uJFMivivivedG-FJG3TeeK--3HaieedK--30-3HPe_JG-k8uLOK2E22FKGJK9e_3B3J0A-pLYC9pJpCHxaOzzyUttc179XBmVP-_VQqOePKyfjyavzzB2BlGGH_FoeJG--2FEDXmfTTN-916ZaEFAg3MTBmprIES9eHcV7X9e3ch9rHjp9hzUzsUStzzJmXfAArz6yUbzbxtxyNNP1ge71-1-3VXzpaEV-rFIB3pKKp97--_He5PgopzKHfzMoxa0xzJhBfGzoodMSpo0V0a-N0aOxKIUKBUota7VBc5P7971V9-9-1Vd-Wgo-b0H129pBoxzSzs-719-2Ve_4bh---4_yc-91n-LUQEZ5L1ggfCISxC9eep9n9eHmcP6afBeeHeIUHgemmf9gggeeomeIIrSSHcemeeeepMJrUxxromee997cef9oedSxzSoeXeXV-57VrKHmhBgzUIrKCKEOzzxzrSS9cX7emhMJmpBgenJe9fBnA9emnBpKpKJpSprSprKKKKEMrUUzzrrSzUSxzzxxSpSKIBpKKKETUbzzzzzbzzzzrxrSrKJnBopSzrxzUUMSxzzUSrSzUSrSzbzyUtyUzzzUrrJe99eBeHggeef9gce7X9997X7e9eX7X7ceXXe91-NNOaNVXX9eHY9eegeeeemeeX-5-7-55OX-VXXeeX7ce7XXeee7XX1--N-777X7VV-0VV7-NOaOtzyTN76zTUzWba516eVcNVN0X3e716xV5OWceeeenEIBnJf9hJzxJnIzMSzpBe9cceXX9cceeXHcce7gxzSzMSIBecPBfA9eYAA9c-PnAA9mYAAA9gfKI9cgcXX5OzVX7eXejrKJmxzKIJe7e9mnAAESEJeeXmVeBfpzxHeHcXe79-Occcc6zrxzrtzrzzzbs6XX-cXVccY97X7cXX9eeX77f9eee5e96yOxtucXccI9V9IJoc-onCJe-NNHcZxJhCJcVXfrJfA9ecgmmmrzJoge5Q9X55ognCbrJxIJpIHnACKBhBpICCAIBfJmgp92AHfK9x9xKKrKMpBmrbxoh9KrUSSy6xaTT0Wby-UppKMUMKKrMSKJzKKtzV5OzxkTUV5171-NOWtbs5N51c71ce91eV-N6e5Ua6yUttbyT6aV0aTTTUzzzzxzSIA9nBgnAAABmXnAMSCpIMzzrzrzbztztztzzbzxzJhBn9ee1ecmh9mf9h9rSIBfUKWza-WaUSKUxKKKK9eX777f9opJpKKKMK9ompCBeeX17Y9h9nBemfJpHe9-1-XIHf9n979eVUs751mc0bbaX-X0a-OBgnA9gnUp9xKpKKpMSCrI9efBeHgmmnKAEzbzzUMMMKpxSpUxSKIKBoopIMzzzxpJmc-f9eXX--N55NN--e777X11-VXd9gemn9omfBon9mnBeh972CIp9eBmehBzSzrUrSoxSxrKKKKBnBeee1gme1h9e1eceeenBerSpSpHxpKKKKBpIKHprKUpKJhrUxrzzxMSUzaOy6zzzzyNTUta-0VOX7-VOa0WtbWaOtyOy5T---UtbxUzSrtaNUTObzUxrKMIMprKrprMUzSrMSrMKpBpEOtWa-P75UzKlwP9-X1eVV599e77WVVc17c--0bzxrKKxzrSrSrUSxpzrxrUrSrSMonKMSrSKrSSprSKKKStbrJURN7VOxlcV6zSKtzX7c-V7X7X7X-0z6xL5N6zzrSyTUa5Uta71V7X-0bWy--N5Oe99KMJomgeggmmceBeecc79cceeX7eccX---5V-1meXX7eXZgeece9cXAA9geVTUttbxxrxzUUbbzrxzSxztzSSIMKIKMMUxzSqUxrbrrMMTUzzUaOyUyN7-5OzUUUN55TOaUzUttta55Ua-X9XXccce97XXX1-V--517VX15---VN5USJppISJprMSrKBpMKMSxrSxzUrxxxxxppJomgnIHmnEzpACrzSpKUtaOyOztyP1eeece-5OyObzyUtbyUzIBnCSompHmoxrUzrUSrUrSrUUSrSKCKBgf9eef9XVeefBcV2A9V3eeeemmnABmge9BeegrzS9geA9gggfMUKKJmrUKrKUSKKyObxxrsOzyNTUrSrrtbrTNObzzzJpKpKJpCJpBnCKCKJcVmxKpSpMKSKSSzKrKRUzzrKpxSpSrKUMSKIMzUMSrSMSSKBrpMSMSpSSrSrSpMKrKrSUKSrKKKKKMKUKKMKrKztzaNOza5Oy5ObqNNOWbbtbbsTT-VNOaUbsUraNN0tzs0a5Oty-V-7OV5TOWa5OVV57VX997X1HegecXV91---nBnHfHefHcmeXWa-1ggmV-X119-c7V79V97cceXXX99e97X1--VX99X7X79eccX77VXXcee970X--5TTOa7cc0aX0bbttxaUzaObrJhBefHmXggjMIErSKCABghMKKzUxzrSrMMSzzrrMSUUxxpppKpprzUxxrUrzSxrrRT0zxUrKxUMpMUxpxxrUxby5UbzMKSpxzzSzzzUzzzzbzUzyUrKSxUMpa0a5-77-N5ObbtbWaN--0V-550WWWWWta0VNTUztzrrUSSpzrrSSrxxprzxxpoocV9XeX799XVVXe977X7XemdACIKBgnIIIJopIKKKGbtyTOtyOaOzzUsUyUtbzxzSzrJmcXX9XnA9fBgee7gnBmmgmmgggmgonBgfABpKSMJooorzJmrxUrUaUxpI9meXpSrSpUrUzzaUs0aOzKKKKKBpUKKKMSMpKMSKMKMSMSMSrKpKIrSrSpSpMSKKpKxUxUa0aN0a--VN550VVX---Otba55Oa-NTTNOWVTNOWa--OyUyUa6zq5TUrKrMSrxpSprUSxpSKKMzMa50a6zrSKpppSpSpKMSKKKKBxJnKKKKpKzxrMSrMMSSpSpKSpKMpxrKMSzrSxxzSxUSrSs-77XcV-X----7X77X7XcX-c97ec-7VX7V-ee-1---T-OVN-OVc-OzzxrSrzrMUzKKSrpxKpraUSxKSKzV-XX7X770tWa71-V1-X197VV7cXBn9cfBe70V-29ecX-0WV77X17-57XXX7V7-71-VV77VVX7X7X11-UprKrSrSrMSSSSMKppKpSSxzSpKIpprSSpIJoxqUbzpKKCOxyTWzxrUUMMKrrSSpSMKpSKIIBrMSxr-N5TT5UWa5-19-5-cV7X7X1XXXY9999VV79e7771-N6WWtVOtyObrMMqUaX0bsOaOWsOs5Urrpa-0a6bsV5UVOba56X5TTN-19-OtX-NNNN7-0WcXVV71-V7c7c191-XXXXX-V715OyOVNNUwNNVmXZmonBnJoonBnKCBemeefBoome7V--77--VV0V7-N7ef9ecgnCCSMKKKJogmnCrKIAAIA9efABrUrrzxrKBc79ecccX-5NTTUzyOaOu7-OaTOV-571--NOWbzzzzbzUUKKKMJpSSJppppKFOWtzyUzbVNOaNNNNOaOWaNVV-NNT5UV6bxxpaOzSrJohrT6brrMKIxpopSMU5UsN5NUX57V-997X109XX77-TNN0sP-P-N5-0zyT0V-70V-1-5-V7V1--5X117VX777P77X7XZfBn99BeVOaOa5OaN5NOaUbzw7WbrzKKtaUls19-N0s-N-Wbz0z6xKSClxrLP7NWu1-OzKUJxpCCpSSKKonIUKMSpxrSrUUSr-5X1-TX7-59V0X9V2Hc71710bc-UR--UzyX-5V0VP50aOtc1ZccY9-OV1-OxpSpqNTUxSpxzUGzaV6a91-Ulba-UyX9ee1XX89nHXCK97-V9989XVce7VeX9997ccXgmf9eXZefSHpzMSKBhBe7WW99V9ZoeHmmXBeYBghIpIC9X172971-OcX71XeYBgmf9nBefAICCKKJpKrUxzUSrSrKJoxKKpSMKCIIIMUztxzrMJTUUxrMKJrzJgeX755119n9e1-7egeccX-0WVN-V7--V-NP17XXXeXX11-5--0VNOX57cmVdHXVOyXX9cmnKIJn9VV0aOgeoge0aOz6uHXeef9megrxBpp9e9xp9ce7ceZmecX2BnIKBeeX7X-Wa15VX7eccgeVXeemnSxHf9eceee-Nf9ecmfAACHe0VWBeY9X6efBntzSHeedBh9Xe0bttaTTTVTUbsOta5N51VVXXXHf9eh9gee0aT9eegcWbWbY9ceVCcCaqOLK_veauOePUiyujEEsnF2n-nBwzBoJFJKKK3-80h0YMsX-1VrHCgo-20kufu--VtxWV-B6UlBN-52nkrV2Y0uFfIEHn9meBjH_9ZnIp9I9KKEIBgrSHnof6pI9pUrpEURU6q1X71-N0V0sN5556taOtWza6byOV57Zc-P2xzMis2K--FUuQs7X32vL_OOOaTdOvuzy_LPzEYzzzuT_K_GOLayvzyavYzwznznn2yayjzzC4GFzEnGG3GG-J23F-3GHeeeK32341d_JCGO_JB---11ea-oW1WhaavuuK45Jevfvvjiin2nEF23F_FBxFx4OK0-2FWPtxxuX7-13IEU-OFXU-mmnKorUMzWxbzlu9-6xKrbWXX9cXJcoe7c4IW4c4aLOLdaeQeTvuiiEjfzjvvzynziyC3EzjduzfidKzzuiyiveeLO__veKJ_KGGPLuzjEzzivfvjdiygzjjjvoGGFFnyviyvv-EG303JG-Fw2ziviffyBBznE3KJ4F1J43GJ3JFBzsG42z4K2C44JKG2EoGOGGFpFnK03KJPLK0JaJ2Fo2nvevzEjzh-C3K5K4GaJ03_O_5aLdaEuaJTvveOG343-B-kknlKK5CJ7sXgggrpC92ICEJppUURUrzomYEIE5UKAI9gpMon9-X-5mVccohzrJe9HeAA97cceece77Y9en9pttzUHfCMJnHX7OcX9VPmf9megeXeXWy0zTcVXXp9XX9X9ecVXeXfJmeVN0cnIBnxHcX7X7-c9ogmY9p9gmgnCBppS9c-1WsXoocXeccV9ecee9e7A9eccZemVeemXfBc7XWXegc-mXe7YHgmme1ZeBgoeXnBgfABgnA9mf9ecBhAErSprMUSMMKzrrSUrzzJee9cenxomeXccX0yNXgenJceXmgfESxESSzU6zOzUbzrJhKBecn9cxUSMzUUa-50Wta0aOzxxbaUzzztyNUbyUzrzxxrKxzUMSSrrKKMUzzrzUUSxrTObrJgmecX97ccee9ecX1-0e9777Xe7V7eceemfAHmeeef9n9e9BoonBnKCKBegccce777XmenIUUUUSHccxSCzztzKHxIzzMzSbzOzKABnBgmYA9me9mgjzzz6zztaUzttbtzyTNcOzOWzlbyUxzSK9c99gmrIEyUz6rqTVUqUpCSpEMUSKSSpMKCMWzJpxMKBn9YKxIArpHgwUSHenIK9KrISomXBeJrIKIpMK9VpKJxBnCCCCCBnABopIIIIpJnJpKMMSJpMMJxSIMSrprSrxKpEJxJporKSKKSJxrpprMKHmhSxxSrSprMJhISUSrSppCpSbba-VX971-V57-77-X11-VVV77VV0V0bxzMKSpMKKrKSKrMSrSSSppCpCrxppMSSxSSppSKKIKJpSpprUMMrSUzpprUpzpzSzMSSzzxUy50bzrSSKxrMprUMxrxSp5UMSzxpKppprKpKSKprKzrMKpzzzpppxrWc-6WsX1eeeWHcWa177VVX-7-0VOV-0V-0V11-9ecXen9eegmV-T----0V5T5N--N-NN0VNeeeeoefKCKKJnJpIHe-C9eoefHc77V777--9VV1-------0s--99XXXVV-77VV777VXggmeXX7X-1177X7VV710V5NN-NN55Oa--19e76zUxrSKIKIHnJonKJnKCKppprSSrMMIprUObbzzSprMSMKrMKKrUrUk-X7V0tbs556zzzyObWyOzzzzSr-OzSKrzycVVVX77X7X---0WaOtaOV50VNNTObttttbttWaOby1---77VNOX77NV77-55OyT-Ozxs-71-V-NN7111777X7-17VV-OaUzy17VcdBcWWzzSxrMSSIBmeepKrSMKSrMMSSpSMIIKKpSKpKBme9IKA9gpKSSKMSpIBrSMJpKppIBenBommn9mmmmgnIJopIIIBgnBpKKSrSSrSSSMrrUxa-7c91ec5UzxrzzzzzyOxpUzpzzaUzzpKMpzpKJnKKzxonKrUpSzxMzs5N---7XV1V-1V7XV-6V7V-5UVNOzaUy0taUsOaOzyV6taUX--NXX0a-5---UrKpKKVOWa-OaT6V-7-ObzbzpzaUxrzV-3ee7-0baOVTUWtaUzbzbtaTTOtxzxHgmgnBgnSpSrOaUbVOWbzyOsUztsTc17HgmeVh9X76zzsT-eee77AKKHe--175PeV0ztaT0a19ee9eemn9n9mgnBnBgogmfAAABnABgpAA9e9eenp9mf9emgf9Ze910bVV-c-6WVXXXhAJegonKSKJggecV-PV6V0sTeX6a6VUzTUxzzw17eBeeme7XX7Pmmf9eXe90tyTTUaTTUrbzUxzSSrxxKSxSRUzUrzrxxMSpI9ecX117X_rSrSJpJognHzaUzqUza-6zUzrtyOyOtbaOttttbWtaN6WtaObzy0s5Ua0bzzzrUzzpzzaUpzzaUpzWtbbV0sUzzzs6zy0c170aTVe7d90yeVVcX90sX5Vc5VVWBgn9mXc9e5TVTWY97X7X-eeXXXeAACpHgmhJnCIAHmgpopCJpCBnIBf9ecXxCICICBpI9mmmX7P97X15575Ne7e9e7X7X97XcXf9V1-V9cVNOWaN6Ws6aOxaOzUzcX0zrbbzrSbWbaUXVTUbtccWbtxzKSrxUScObyUbzy0scX-c7UxtVN99-P99ccXcxJponAJmgmp9ec7-TV7X1opBmX-X0adBeX5T0y1e7X-VX7-V-L3UrqfY0-138kAEKUrlzWe9e9V0m49k5LOdbfjEsnvnnE3GGHK3-A1cjM9nzV-54Q8qk-61u3fr1-3sMFpOyuaLEzzwGGK-F-oBM_CzOXe-6W_-Wdag2l-EFmZonCIBxzSrzObsP9Wy9cce--P5pFqbzC4--Fqeis-560MMV-62XLvSVV07RSpOvkF9RDJawmn9enA9gtzq5UxrJhKBohxWWWbzMIIBObaP7VUzrk-552IIHeXc-OaPV-sS_yOzF-E2lW2BrkOX--0tNK-1kxuPmj6a-6WyFxbvv0G--G-7Ws097TviUivzyj344_3G-2G2vonU55c-H7sL5vBJ-I3TOb9mzx6V-27YoxtvivgoFK3-O3chQBnrzbsXcV1s_iwtejsz3J3-UlBAVmpCJnpBgzUrzJzOsObbbrIMUxryP9V179797cXee577-m8hBTjjvwoKGJ-6GFdpoxrSbVNed9-EXXkY_OLTdzEFwnF0BJjqSCzRN7c-AXbLQavvyl3J3-K4GtYIEL5OZe-8Xfk2ayEsCJF63KT5RjMrSrrJdCSBfEMxbWWyTWV6xWV-ZogmmVecX7-37iKTtLNwyzzzJJKF0ZMYtCBjraUaee-BXzPI_LPQwwnkF2gN3fCKpMOWzrzMN519e-gmcX-0sk9BTyskKF-gNfCwnTNV1smThtaeOwwk0-blddLofEICtzpIBhzzSHmrzzMUlaTUbbWaUc571V7PeCAAHXAHWJgmV0e7-07p55tiBF03PYgwgntyNV0ssWhPvnF_F-ZRPRBjyV-yDODaLyzyEx4G8K-DGnFpnEHhMKSxMKT-77-V0WVV0sv3MOabz0--wSXFgrzse7-iDyADjevY00GF-JT8txaV-Nx6JQ-03URgzKMNV1-0czMkPTi-3-46wSQE--PFP-6iBxK--m3-Lw--01ZbF-ZWN8ESXV-1Fp9r01m7Q9nJfAJnJhICJpIBmerpBmhSMrNTOxrzpaUaUSMzJgrUtaOa0zxohKSr6zs-170a90a9e7T-99eXJe7X71ec0a0s-0eV-d3ruQC-5m9_npBhUzq-71VaO4NlPeLeadfidaUc2zieOdejegB2EebjyafdKOLOzed_azyveKaO_jnzYBzzgEzjwny2G3Bnx-3GJFFF-GF43-F43K222-nBpKK3FBnCKK3-E7l5YBp5OV--ZOW4V0ZYGOgnKKbtV-9-0ZQ08Y-0mFmanR-0qHSRLvyzivizzzwKJ-4KJGKKF-B_3TC--aHcDbeuEJ2G-uHMABnIMrSJnrKESprSUzSKrMSprKSxrMSCzSSsV5UzTX1A9HX77V-V0blzyX9VXc9X77XeVWX7X5ce9-VX-JZjCha_OfyaOjg2kB---28VXfD-4Zl_8eNko-68kVYU1-08DGkPP2-03bIVhxx0ce-CdE9eO_HLdbuO_5PeTeedQfvgnwnByw-B0-kn-3-JF-695wno5V-tGZSvg3-I9ETUKBxV0sV-OHgcv--BdN1CV-aJrDTeff3---QHauhnCHpCIABnBpABon9fAzqTUaOtaOtWa5NN-5N7-DK35qf0-EHckqpICHnErSzxUT-c-T7XVc--9KE4TgF-weZUCMta9c-XKiF5fdv-F--wfapxpKV1--qLkTLObeekk-nF-GAgqMEKL5-V-PMsgaOen--1HzhMmly--OVCzv-ABkKHggnUSSSKMIKBejSomopMzST0tXe-TTTTUqUrs7-NT6bbsNe7VZgefA9ce7cX--dVyCyl--n4ilq-4tYanu_aTvznvjwlKJFJ0--n9ESqVeOaBotKaOKaOaLKOeaOdbjveeeuvfvezeuvfvdaPeaLeaufyjzijjizzBzzz-4----G-kK3F-Ef2vjkw3G3F0Ka_-24G44F0-G4FwywFBEzzz4-n--GKKGF-Zo2YSBy--HP0pTUx3-2CBuzD1OayrO_OGeffedeueOTePL__FGdQuuaadaJKa__OaPPaOPTdaOOjnveeQcz2kBFBFJ-zjevBp-nnwnEznl-w2BnzB2EkknE0---32--k003JF0wshYhAASoxN-6s1-MbOFS_K_feaQiwyw--n3--4E6XAL--1TPHb-3InNcnKTOcX--bdaKk-BxkuhV-1TsTa-1nrxeoyOe-0bl6lg-5nstSrUMKy-77eV-OwglQ-2ByuwCCrUSTUMUa751ceecc-9UXcbxF-JzIigy--OzHkP--JzpRhse79-TEOKuOKOKJaKO_GKLKaOKKKOaOaKKdLOaOJK4KKOKG3G4dadedaPOaOOaOPaeaeePedeOeadaPOaOKO_KaeadaKdOePedPOaPOePePLadaPiufyvueeafufeeePeeeeeOd_feiuze_PeeiuuyjyuaPyjuefzuveezeeOeiuvEuzfiyuviivvfuuviyvfyjzwEkzwEknzvf2EzijuzyVz2wkz2zkz2Ezkz2zwnzizuzfevfifejkBBk2------3GGGGJG3F---3GG303G43G30-G43FFG033-FFG3FF3K4_OKOLOaO_OevedaPLLLLLO_aKOO__daaOaaPOaO__J2EnBkknBnBBBnEBzEEnBwwwwwnB00-BnEEBnBwzwzEzzjiuiiviuueuviiiviviuffiyyvfiiviuueeevvvyyviuwzzvvwzEBnEEBwkwwzzjjyzivie_G-GGKG4G_aLaLLLOaOLKKK44_aePeeeedddaaVz2wE2-nveeiivfueeefuaOeeeddeeKeeuviiviivfiufiffinwwnBnnnBnEBBBF-BBkknBnE2--n2BnnnzEnwzzzzjiyvzEwnBwzjyzvjywznveK_KKGJJKGLLaK_KKK3G4GKLK__LKOaOaeadaOaLPPOeeeaaOaLPO___d___LeiuiufeveeeeedaiuieveeeeeOdeOdL_eeeeddPvedaeeeeiviivejeiufufieveffuveeaPeeeeeviueefieeeffifievivvefieeiuyeviiueedMfeeeufzvejvijzkwkkEzcB-Bzzznzis-kzkknzikBEBkkkkkkknkn222222222B-B--BBz-BB0----0-2BF---knBkkzz-n222-K3Bk-B33-0J-0FBkkBknBB2J3G03GFFFG4443G3GK_KKKKLLPdaK_aOdaLKKJGGKGG3G3G0-33-2-k033--BnEuaOeuiueeaeifeiyvfjyzjjzwknBnnn22BwzzzEzzzzvivjjvisFF02-n-K-03--F-2---0-G-zyjefieeuadbieeijePeddeuuieevjffivgkn-kzwwknwBn2-n2w---3-------0-FFF3F3G0-----BG3J3-Bn-B-Bkn-kkBn2-n2BwknBwknBBn2Bwn-nBknB-nBB22Bk2B-BEk-k-B2BBn--BB----FPKdaLOKLOK_PK0OaaOK0G33G-22oFK30-G0KF-G0FK3K03K--3F--F3GJFGJG3-B---Bl--J3G3G34G-B3F-0-3G30000F03F-G3-3-3-F333-34K4HKTveuffiieaaaeePfivfivijzveeeveeeeeuePLKKOaePaOaOaieeQeieivjn2BBnE2BzyyieuiieePddaOOOePedeauiiuuieeeeadaOfePOaOOGKLaifeuiivfiiuveudePevieOaPizjieyviie-zyyujvd_QidaOajeL_HeOJ-JaOJ------E-Ek04G3-GK30-knB3FF-kB-FFG03FG00-F3--BEEzvwkn022Bn-----3FFFF--kB--knBzBk2-l-FF-GLaOOaaaOLJK33F3-3---322BnnB-B2EEzwk-F-k-33F-BKJG33G3FG3F-k-B22-033F-FG5KOaKdKG4JGKKGKKK3KJG-KK3J4G4KOaLdabeiaK8OeKG3G0JGJGKK4-G2G34FK0KGKJGJGG3G0-nz2wF0-F-n-8_JF-0F4BY--P0tSP--h0VngrNNV-131JF-C1OFgs-yWMryufyvwl3G3K-0JCKqr--QcWZtfifvzzjzEn4JKKJK3JF-S3GgCOX-3cY5hbu--BJGZkn9eegnMzStbs6tbXc-LXKO5dz0F-45ACB-0coCds-0oPt3r5V-PYdD5PvC0--JSsLs-1Z8kq-1JWy1plXV-9GBhR-6HHYfBOV-uIEYPn3--HWaX--8HId--oeiBlV-uKjHQgF-4HqwnBN-9_twqwF0xAqDhMSrU5P7X-e-IdWHnezeuQYn-F24OJ--okfDw-1eO79Ofu2z43FESCuGgmceeen9mgnI9xbtyOzzzrSTUzzpSzzzxpIMStaUxpI9pUtbxzzSyOzzq17ee7X9VecXec7XcXX9eX7X7e1-1djLCck-4IbhIT7-DbXXaf---oxnunV0PUH9Pjk4-1p-eZnSs1-4e0e0aTkk02J3sQCKKICEKSGxr5V1-NOV-N19V09ViePwlF-pFUggozs1-5e58teQE3F-0GUQ7-Hcpl5Qw3-2JPuvN-3eMuhfw4--KBcHk2HdfwLue_KGGQvyzfivkwzjvzvivkJ3FGGJFKJGG3-0K9aA-0PdgWPfkG-0pIONpN-0PeQwadK4ivizwzz3KJ3F-lKgCABxUUrxWbzle9ece9-09k9WOv2F-_O0RhEu-9TgqsLLOKJKKOuOeePMifveeOeaeueyBnEieeKaPdejnEyfjzvdaifY2yv2kn0-wzzpG3Fnzgzuezuviz03-GGJGK--HKG43GG4JK3J--knBo2B0FF-Bo--KP8gCN-79oXKPdOLLabezivvEEB-C-k-JK-1pfbTnSsV-0fVFlg-0Knt9oN--fko8V-CTqeCV-LjQxauBlIVxUDAgmonJeeeohBhKrKI97X75VfpxHogofCHX7X9ecfprUSKSpUMUKKAKxKJhrSonJn9nAAHpKBgnCHfIKJnKMpKrbzpAI9nBnBpKKrKJnxUxrxzSpJnrUrSpKrKxMSrKrKKUKUKUxrSrKBpxrSrSrKzzxUSrSrSzpzzSzSrSxrrMSKKSKKKSICCrKKSKKCCKKJpMKKBppAMMSJorKpKIpKCIIKIKI9fKEMSSpKMKCBpKSIpUOzxJrKKCCMMJonCrKKKHec10YJfCIKJhSkT0bzrUrKBpKKSpJmc92CxKKKKKzSrKpJpMxKBpKKKKzWsUzzxpIBmgrUMtbxKJ-0bzxonKzrSpUMUzzzrUrUaUbs9ce9997X770cVgcVUy1-c1-V-OtV6aOVWVNObts--1ecX7X7N5OWWyOy5--0aOu-UrTN19eX7170brMzUaUy--517V-UxzRUzttztzaN5T5-NNeX-0cceXcXXece7X11-WV50WVN--VV-OV750X--NN-55--551-77X7X1777--711-55517--VOWaV5UrKCBopKSrKICCKSSKSKSSpSrSrMMKKJpIKIJpJpCpKIKKIIppKKKIJoopKprSzxzUUTUSrUzbxqObbyT5-V0WWWV5-VNNOsNNN-NN0X55-5-5---P77----T55--NUaOzSwOa7V0a0bxza6ry56a6cV50a50yOX--6bX-5N--N51-OV-0baNOaN55OaUaP7ccccX77e99nBgmfA9mgnCBnCCKMKCKCJopCJnCABnCSSKJooprKIBop9X0WaN1-0WVN77755OtaOWV50WV5--70V0tWaOWtbtyTUtbaTUUxxxxSpxxxxr0WaN0VN--7-1-ceeXcX1Vce1Ve7XcXgmeBee72BcX7Zh9X-79c9e9eecYBee-Pc9ccXccIBogpBggfA9gggge999HnHmefBn9geXef9mmggcgeeXeXX97XXXeeghBgefBon9e1Xme97eehJonCCCBfCCKMMMSpKMKpMJe77-71-1177---NTTOWWaN50bbzzxrUzzrLN5TUzaOaTUzzxzpxrUSzUzzzbtyTUyUUzyOaOzztaOzzUUqOyUbtttWa5OaOaTX0y7Xc71V-c1c7c99cXc9eBeeXemeV7X9eX-79719Xf9e0VXcXc-5NeeenAJeeeeX7ee7fHe7-e1ceee7X7V-uypUPx3-6Mtb2ENV09zcUPj-F-pVBFgrLN1-2g66tikF-CVu8CV-9kVxas--4W7XD-3gCOhfw4--L8Nik-elDN5ivBkdJ3-8NhBfKs1-0gPHxg-0qF99nlc1mm0s5adaeOaaOdPPeb2kn2BwnBknBE2K30F1KZoDhMKJpMWVNP-7X-Kgf1KaPOaeLviyB--B--9Sa7_gnBppBfHgmceonCBfMKKT-ObtzzxIKKrUxrUs-VOz-OWy-V-91V57V97V-vBZGPg--6OeXYUXV0QCqDPvVF-6qTL3pHepzzaT1e--5nnAqk-4OwbATV-5nteLk-0P7sA--QGpKUF-_cujCJN715opaLTaaeievevjnBno-303FGG0-0LdEmrX-2hcRlzpF-ChnoCV-DrMzqf-0RLvrTonIKBnBorSI9onIICBorI9mfAICEJpK9e9conIISKpUMKxSUxSrrr5OxpST6xaOzbwNUzSUxs--55T7-c555T1-555TOtsXXX97117VNNOWcWbtWX29cceVV911V-QTUTQ-JSkGCCHprSSrMxSKSKxrMSrKMMSprSSpSSrJnSSrMSpKSSrKpxzxSprStbzs0a10s-N17Xcc-1-V-71775ecVV717X9cme7-9X-X7c7X-0ceXcXeXc7-PsDBqPfV--1M2GczyeV-fX4uQl-0M6BDrX-1iG4tzJ-4RoEIT725tjkLLaaieKKKP_zjuzzzu_QvBBn-F-Bx34_F--6Rw6vCs-1fbfrOvfiB34F-Ko7cCN-1vfosOdizv3FG-4MZRcpSKbVVX-YQoW9OddLKOK_K_4L_OaaLufeeOeuezuieeTvivs-3-B2yjjfiBkwpG43B4-3-nEEvkFlG9O_8_Oa_K3F022EnzjkwzyzBnkw2-F-ATmuACMV-0Lxs1aLjuivivBC3J-G4-1MkyLpy1V0AwF5TwpF-xylXBrzaXc-TzU45O_wwk4lUpQIAACUxxKzbzJmefSxKOaUprSzrzrpzMMKrSIrKUzUMSzSsUs-OzVUrSrxMMMrprSzxrxy7c7XX-c7V7e10aOXec1XX-7XX91e9ccXXXecX9ceoofBecV971-9cXe-ijumhzedaPdeOOPOKOjvznnkn-nB-kwl23KK-0ryhorsc-Dzu75f--SN-4rronMSKKKKSpSrSpKrKMyP71717-7X75-c---7-XV-w-WaOj3-0V8tI--R0bKUFCq-pABmpIBgrSrzrMzrxrMSUzaUxprMrzpyUrpbzzrpzL-57cX9e77X1X7eX1ggme9e90ccXX-7Xe9e-1w3gUOOTev2k0-0N9-5rX-0kKVCx-0NASVp--2kOvGanF-L3-KjuV-g86STl--7HQNV1B8CmPef-k3-0sI8aoy7-A1OR5Q--T49YCOc--kgKhk-D6-BCV-62a4qk-CWqkYAStc--gEBTQl-0NTP5xX-0kxzOg--NU81k162t_qKLfvzvzywnvzvC43GKJKJK-8sUQ_pSzKrzT-7X7XeV0wEs6O_jBwF-q7MWCIq51-3l32xjwK--NYW3s-63k-5k-4XS6fE-063vsqajviyE-oG4K-2a8rrgrKTUzrzrby1cemeX7ec2E477LPaK_aaOKKPaOavyBznwwnyBznnz0-2BGKJ-0NdJyoN-2lHeCek--D9ROhV-A4eNLwFJyBG2hBnKKBenEICKIBn9ofCA9fBnEICKMKKMSMpBpBooonJpKKSMzpKpKMSxzxqTOyTUsN--5OaNV0a1-0a0VOV0V--Wa0a5--1V7-6zR--7V-7VXc-7--gNtVPk--so2gw-1gQF5PyznlKGF-TCc8hT7-2ll8lbc0ZLDNKhJpJecXY9XgnJmhJnSSJe97gn9V-V77VfBmgofI9mnC9fBpBe--IICBppJmhBmnBeceeX99geecXmgmn9nA9mcBonKAKJonKSKIBedIKMSrUMSpJpKKxKKMMKKSMKKASKJeepJprzrMMUpzzUzWaUyOWzxlWzSbzpUrtWzta0aUzzaUtzzzUttbzbzUxUbzzSpSyUzMKxpKSxKSUprOaOzyNOzKJnBpBrsOaUxJnKEqT-OVOaUzOzzUzSprxrKrSrpptzzSzxrzzrSKJmc511ge97ecYA9cX17XX1-eXV19eBgeXIIIIJpKpSppCCCpxzSxrzrzxrrT5U0VUrKExSrMsOy-TObzzxz6aOV70a5NOa6zX--5Os70btbaNOWV5N5N75NOWV517--T-NX7-V7189Ve1X-V7X9e0X-NP1e71V9XX9-V0a7X--X-1---VX1geX1-OV7--V517epCBnISJgpIICKKpJnCBhCA9e9171Hec7XeX77X77eX156tyP-0xlaT570emXXBgf9cV77Xc-E7xKqsl-0t8v-pk--E8QS5z4-0OGoLpV-0mYdOc-0OM-9rc-5mlytazw4F-DLJ3CV-MAUnqfw0F-DNImhV-ACAhqg--LTbECsV3CFn8Oauedjl-FkBF-TfD9BrX-9q-PtjvjEG4K-iv0lVorSMMMMSSrKJpK9hMMxxpJmpSqTOV56VVObzs5N0aXZgmeX17KHcV-V-7V7Xc1c-vNnj5dKHfzvg-J--qnfrCKL---6qi1S_ejk0-1QS1Pojs-0CimSPQkF-is8ahSF--NSkIsOaiaOaaPO_OPaLKLOaPOOe_aPvEyuddwn2EjzY2BnB2-kBnBwyvBF2E-nEF2BJK3FF-ysNsCEKs172jRiqLePuuPuaiuiifiyvBB-EnnFB2n2-03LKHO_3JGG3F-yth7CMtucV-ESPhLMw-9vhdJpKHfSJ5NTOba9c7-rSzAadeUwEE4GJ-4j1Q2EV-nTXv6evjwpFKF-2QoSerOtec-QTvjqLnnp-0vrTHnT-0nUI7aKLiejfzkEyfnBKJG3F3-4jgt2T7-EUOnbzK5ugg3JUzba-9cXf9eedtrtyUUzbztzSzzzbbtUbzyUzbyUrzb_zzbzzaObzrzzzzxztztaUzaTOV-Xe79pMIJmgmmeeecXe7tbzzTUba--70zprSy5OtVN-XOta5UbbbaOxvI9moggnICSrzbbpSzpMxxKMSURgppBgeeeeegeenCCUzzzzbzzzzzzbrzpMUrzrbzttzbts9eeeebtyUzzzUbzbyUzbyUzxzzzzzzzzzzztVUxtaUxrStaObtwpMbzbzzxzzztztyOtbUxzbtzzzrrrzyTUzzzzzzzbzzrzUzUtzyUtyUbzbzrsN6txrrUzzSxza5ObbyUyUbzzySxztaUrs5OzztyUUxzqnMzrzzzzrzzySzrzzzzzqmmgpPpSzIKxzaTObaOzbzyTUbyTOyTUzb_zyUbzzyUyUzzyUrzzzzyUzzzzzzaOzzzUTUzxxxzrbbaTUtzUUrrxxzzzzzbtzzrzyTTSxxxzzaTUzyUxzzzxtzzxzzzzzxzQMzzTnKxyTTUzzSrzyO_SzzzUUzzzrSrSztbxzTUtzzzrxzzxzUbHmmeeenJmme9ggmnCKUxrzUSyecXf9geen--4zUTF-DzvjEc-6V4xro-0k4zvV0T0byObgk-Fw2QHohEUrSrMWuVOzzMX7-9eeec-AVbxbxF-U0MYhT1-1sBWGj3-8kUrYUae-2sF-daRk1z1YMBmeoegxrztbxrV9---D4KBR-0khenV1y7spOObjzBoG-1RHHipOX-0y8sYOeyB-F-M4VqC5--iD9xTo-1RSYPnqP-0DF1uOykF1U7BRgeerzzzzyPmccc-rZu65UyzznKKGJ" :
		23 === bS.eV && (qK =
			"FPKk37R-2VBxOek-5J0jaCHmenHgnrKSSyP0zSrKrX77Ve7VN6zp-N7-9N5ZUO_au__aOaPgBn2EjzkEE-laLKFnC-1FC8Fpq7-6c7bTOafiaOF09efjfj---BFBF-l0KHYCCSprUzzP--VHeX7V0cAg7PekBF3O0YbnBefSBpJxKCKKKKrq5OzSKSrUyOttzaOxKrKMtxrplX56bzs750AABp9c10ta2ABn9c0bX7Zp9cXgec5T0bs-97VX9X1ccc--2AWo-00boQV-cCjKOU-4kQUanKMttc79-4Vt14egl3-40uDAlc0H2oUa_aK4ddzzysB-B--J7Gixk-1cG_7t_Gifz--739S8gmefCISSrKrSSprSzOztVeomc0yUV6XCHX-P17e7c6s7-14fPa-JkiRsp9gzSHchpISpCSrOWc--5OXc0z-V--0VzW-3kl-TnASTOV7-95NULg---BrZc-D6ia5Qk9lkypinCSSzJeeeeeX9efAABnBmcgegeX9X7onBcdABfBme7mgnBmV5XX7X9XHdCKJmonIBeWWsNN7c9cA9797eXZe7ZpJopIHgnCKUSrJgnUJmYC9hMMSJrrSBjrICA97cAEI9e7VnCSrSpSpJnbzIKpII9Xe7XBpKMSzxrKBUSrzRUxpACHeee99BxxrxprMx9eX71cXnIIBe7X7-X9ICEKKzMSJnISHXV9-17-XemhIppMJpMSxzrKHcepBpKzSMSSSS9eX7XnKIJpKKSzSCKKSpyOaUaObxJhrzpHf9XgnBpJmmn9ggcVXge18Bc5NXe7-X--7cN5N-7V5P0c7Oc7V19c-9179hIIACKpMSJpMK98SC9XVX919V-X7ZpKSSxSHfIpppBe7177VBopJgpSzKpSrxrxr5--OzL6pKCBxa-UU5UMSHcdIAMKMSrSpSr6zK6zz6VUlzKKMWa55-USKUzzJggnBrIIICESrtbtV6cOaOaOcVOzaOaOV6xMJnICCrObrUrKrJe7VXmcfACIBnMxGbzrICrSHcX19XgnCKKBpEUHedCrqOzyUxBpoggegorKKBcX7_BeeeenAAIKpzTUzzUUzzlzzxBeeegnCKrUorSrUxlyUprMxbpc6btaN5N576zVUyN5OaOyOVT-OaOaN5TNN5ObaP50aOaNOsOts50s6V555T5OaOaOV6w0a6VOWaOa0aNOWaOaOV9emeX15OxxzzwN57OtaUa-6aOVOyVenA9eXBenAIBgohBcVOaOsOs0zq6zzaOVUyUSJnUaOa5NNOaOa55OVBnJgeX91IBgmeXXecVme7UtxrztbzVOc1X76xkOWaUyNOs50aUtta5TTOaOaObsNNNOtVOaUbbbyOWbaOaOV0a-N-3eX17NOs5557Os-99ge99eemeVV3YXL38eO_aOaKaOaO_aPOO_KOdOO__OeTedJG5uidQzdaKJFC3KJLPeKedaPPiivfuue_J43afjuEffivysnzvivfdKGLaeLOd_OJGevuivviuun-EBwnEEBnB33JB2EiyuyunGFl3FnEvnyw2ynn2BG32znw23--G1KFkn2vV--nskl3Fwo2w-nn-wB3Fkk2B0-0303F-oI13RnJNN--XSMAV-BJoVxc0HAo8aOaOOaPjwnBnB-F-3MlBT-5Y16Uebn3F--Nfac-LD6jqaMn-0oRMTxBrSEMNX----ct-xQl--0mV0V1cwJGOOdYzn3--RTQexq9--2oNx--lwHxo-0cy9QviwG3-06tO6-0O-7OQgxG-2H1sFmnUs7-aFnkLPanEkGWqH6dBmmfBepC9n9p9X1con9gggogmeee9mnxJfBonBnBfKBnBonIIJomopBhJhIBnICHnBnABmnICJonBpBgpCIBnBnIBnBnCIACIABpCBmpMprzbpBeee7omgnSBnCBfJnxrKSHX7ZpBqUxKtbpzxJcd9Heegnon9AAKzKIACBepppCCJrSF6X-0zzzHnpCBpCUpKKHmoonIJonIETUJpBpTOaOzJnBpCBpKSxKxpJonBnKKCIKICKKKKKoogonBppCMKUyUzzaTN5T-7V10V55-5N-0a----5-6VObtbs-7cWcX77V---VV--OxSraN-0zSKJnCKKKKMSKUzSlX7176bxCpprxopporUSrKlVVN-171171VT-USKKrra0Wc-T0X0s---6xKKSSUy7OzMrSMxxxxzHee9ecXccmghEJopKKKrKpKJgpMUMMMrUrUxprKKMSpJpKAA9ghCKJgnBppJnKKBgnJnBnKCCBpCISMMKSSSJmcc7V--7XnBnKKKpSSprSrSSUpKrSpKCpSzOV77-VV7-7WWaTTTUrrKzzSrSzSpSrSrSzrrTOVV0a1157XX--6zSUSxzWbpKMSrSzlV-6xpBpzxbaTTTUX7WtaUr6aUzzaOVV-0WxxrsUkUUqUzrUaUrUaUxKzHfBecX9YBgoxrome9ACIICCKpICCBnCCBnJpCKKKCBnSrSSSrSpSrMUSIpKKrKrSSURUlV56xKKIASJgpOxIGWzraOa0WWV6zSSSzWX5UzMMMMKIJmmnCISSpSJmeghJoc-ACKKKKKKpSrzzSBonBpBgoooopMSpKSpMSJmVNZgmgmnCMMSrKSSKHXX7X7XX19X7f9mmfC9ZggeeeeV9XcXAMSJggggggmf9eVOsOVNeggge59-X7X57X1ee9mgmehSpBpKKHX-XepSzrKTOxSSpMrpUrrqUzIK9WESKIICBn9nCBmn9mnAAJnBnICJrNUbza6xxpUy77VUa5OtbyTUzbxzyUrHmpppBnMSSrKrSonBoopCMSMMMKKpBpCKJoopCCBoognABgmfABnBmnHeeemgoenIBnACBeXon9c7eerJxI9gfBmgmnIMUaUrUzrIpSKBmchBmnzSSk6zxbzxUxS9cXYBezprKUUUza6bbzRNUxa-NVObttzUzzbyOxrUHnMSrzzbzSUpAA9cmmnMKpzSaUaUzzzV0aUr5U6xrSSSrKSpprzpzSpprzxxzzzyUtzyN-55ObaUaOzzztbtbtza0yNNT0aTTNObrIIBmnIIHnIBpIIII9enBnBoon9gpIIJoxKKKJmXA9BedA9mmeeeX7e7e7emmee7eeA9emeef9meegfCJnCrSKMxHenBonA9ec7e7fCKKCIIKSSKKCBmnCBnIBnBgpKBmegghKrHe-WBghCKKJnBmmnKIBnBonBgnBmfIBmcXXmmnAC9gnKpJpSrtbyOV0bbrxzxxzUUKKrIEUSlWaOzVOaV290Wa-OX0zKlz5-UtaTUUaNV0V5UbzM6wOzxtzyVUzzzzSzSsNc6xUxKUzrLUzrxzpKMrxtxxaUc5--Obtbta0VeX--UtVV-NNNOWbyTUtWaObzzzaOzqOztaUxxzxzSzSxxrUSrSrrR5N0bzrUzzUbzUSzxwTUsOX797X3e-Uxrzxbbbzzz-UzzrrqOaOttzbzV6VX7X76xrUSprxrSzSbzUa-0aUKKIra-UKSrrrSr5NOaUttzzbbzzzztbqUzzzzUUxxzrrxxxzxrtaOa55OyUzyOzyOzaTOaOttzrrzzsV-0WWaObaUzyOaUOttaOyOV--11-1-6yT0c97n9egmcXmgeeZfBmeee0yNP9VXe99gmhJc-NT19ccme9gepC9eecee99X99geHeeVgf9nBme7eIKKCBmXAHn9VXcVVcHc0cmVeXc0V29gefSJnBnBn99997XeX11--NNP9X9ec756V1717HdCpKHeen9efBeeemmgfBeeeeX9-76xrKzzzbyOyTUzztbzzbzs-0sUzxrMrKorMJfSzUzSrJopAMMUUSlxrRTOaN7V-Oxr6wOzzzUKKMwUzpMKzSSrFTOzz---OzOzrqOaOzzzrUyOzzzMrrUzrUza-ObzbxzWbzzzU5UaOaTTN---57-7mn9fBce0bzyTObyTT0xrKzyTTTTOWsNNeVN5Oceeeee6zaUSztzrOaOaOa55OaOza16a-0V0X--NNOa50WWV--5N-7V-----71-VX17X7c7X7X7X7X997Xcce9eece9XmeeX9me9eXf9eeefIIKBpBpIABgocXecX7X71Xccc5N5Oa0aOaObbaOaOV----71-V7717717-VX11X7ccX9777X9ccX7X7X7X-1eemefA9ecXXe0bxzSzbzbztbzzxSSrSrSrSzyOzzUrR-7V7X7V7X17X777X-X-X1-17-VV-0a56btyP7e99XcX7V-X9e-V1VV1-17X7X-77X7ceX7X97Xe99XXecce79eC9X0c115VX7X7VX--111-----X7X1-V-X7V-X10aN7X11-70V-X7776a---111--X7V9X9X13gcX-7X7X1Vc7-VVX1-1cX17cceece7e17cX9X9eV7X7eeefBnAJnCI9gggeecc97ef99e7ge9ee99Y9e7eX-6pzbzqUKzzrUz5TTObtzTUV-OaOtWWyT0bzzxSttyTTTObWaT197cX9ecX17NN-7cXegn9n9mmmmc-OaObzzyOzzbbzzU5VOtaTNT6baNOWaVV0bsN--5OaTOaOs56a50WV---OWa0aN5NNN0VX7NN-550VOV55TNTOWa0bVNNNP-1--VV-197VVVXecce9fBn9Xe9AAAA9eeee99ceeee9cefBmgmeeXce999X7ec6uGFSaLO_K6dGdd_3GKPaddHvyfgnzfydaugEvivvdJGKdLPiivvyyEdYzBF4K22no2zVkFn--n0JFBBzfBl4JJFoG--HA4ek-9GVnLnF-wZBKjKK----PHLZLQfV---1JIPV-098zk13_D7xLUxbbwPeXec-1HjA5--HLPFk-1Hqrb--1LtNV-8Awps--8WoH-XZlwS_feKaPeeefiikn-G---2BB---1S_XV-8EZes1G9-NnBpKKKKCJpEMKKMKMMMUtzqUX9-7-1-5NV5OaP7X-UXXX-e7e-0dFKoudwB3-29I4IN--_BZzV0RdZphCUUtX79V-OIPivF1BeLHRejzSztbugeVV-0JwhF--eUEs-5KIJUV-29dgMN-4_LtYfj43--9q-a-6__B_aTwn4--mpgBo--OQ5wv--whuwBpSa-V--LxUZ-2AXqAF-__nS_a_8d__LuadPawnzzk-z33G2nB-5mtkmnEtzryX9eV78S83Oa_PfjiiizgnBn03FwFJJK--1vpcV-tTeHObk--B6uH-Fa5-xe_LQivnn--G--22VwV-OXEjQ--JlVUCu--dZHwOx--I7aHk--O4RR-4BciQq7--OGkw--BelX-3aMK4iw4-0nDDcwTc-1Olsa--nDI6q--dcAAts-8IFn1nIIIIIGWWa0WV-9PYcDY--Zp6IRzNV0ePfb5OaOLOeOfvnkwEBBB-F-ZpMlSyPcBaQ-DaOaPOKKLfuaObvvzzivi_JKKPzvjzkzzBzEudOd_KLaP_aPinzwnwzeaKaOGKaK5aK03JOaeQfyvwnwwzvYEnywnEwnkEyeTzYBwnBnkBn3Bk0_F4JJFK43KdJK-F-GF-PJ-3K0-0INzon5-1aqF_y3-2CmUIu-2avHlaw--3rPOi-bayMKeOJLOK3aLOeuiusn-BwznFBzw3-1grniBnICAACUa5N6aOX--ayTnV-gs3CRpy-V1dl9Iua_aEBB---tags-5Rzdjo--Dg2i--bL1rV--v-cN--Skio-2DuPQ5-3bUBxvYG--Ikdgs--T86J-xEI86BmgmYJhSHoOa-ObbkTOsV-0usyF0JyT6gnKtta7c-9UUWinF--yzRN-5UUkDB-AEnv6HjtV-9Ug2TT-9BzUjggnBmmnBnBnIIBprK9gnBopKKKSrzUN--OVObs-OV-Oa550a5OaWa-1-KbwxWaOLOeOfiwn-2BB-0gzcFwoonCbWbV--1UwRy-2nza2xryccV-P-nOsk-C-X_xV-5VWMyV-2FNt6N-2cCLtiBF-p1RnSSR-X-GcJbbaeVydzjWG03-2lFnKnABgnJgn9-gmenIKJrKJhCCIKttsObWV5N6zzpBofJrUSSpIABpKUTOa5UztbtaOVVV--VX-X5V5171--V-P8jmsk-C4-PC--9XcWDQ--04u0N-TXxBqOiv----Gkve05csV4aLPKaPedfiuuuaaiyuiuvjzjEz2BG-BJ-k0JJBk-0033FGJ-4JRjgnJpSV5V-09ETJUi0F-C9OOj--1aDAEK2JolqnSSSHhI9emXjSICpIIrMSrMKCK9fMUohC9nBn9c0yOaN7c0aUVOX7X7VX-57V1BnBmdBegfKRTOxpBdCCBc-XBec5NcgpIHgfBomX7eempKIBpJmnJmc_SIKpCKzSpJggeYHXrrSxoefUUHeVeeenIACIBhMSrzSrrzqUyOxRUObrR56tzKIDTTTUprx9nBnIBpMx9fBfBemeAIpBmnAABn9fMSlsUxpESzSHeehrKrpA917V1XAA99_Bece77eeenCJoomf99-5V19VX9emeeXcmY9Y9ee99X9mmpxxp9fHee7VY9nICKopKGaOs6sUyUpA9frpIKUJmmjKMObsWbxpCBnSKxrKzK97ehK9V-X-OcXgeXggeXCBmrUzzOzxKMUSrSEUzyOyObxtzrzxK9frzHerxrOxomge73ogf9Xf9gmpKIKpMUJgmemcmpzpHce9YBggpzxSUJxrSBccfCKrOaUxpUzRUz16yOtxCogmfIKUSzSaUWWbbrUS9n9pKAHrzza-7c6xaUKJhM5N0zKSUzbbzzzzbrbqUzbbzzpCBfEzzxBxJe9en9jUHfBccXXYCCIIHnJonSBhEIBrTUbpKABgpKJnBpCJeegnJnIABnABgomnAByUrbzaN6bzzta76xKrxxrzaTUxBnrtaUzsObs5N5NN-OzSxKBrSyOzrUzzrUqObyOtWV5Oa0VX0a597cOtsTUUtVXV0yOV-NTUyNNNNTTOttsTNXX1X0s-OaTOa-71777-V5-X7X---OVTNN5OaNN5c-VcX955-Xmec-V5NN110V--110ba6WtbzbtzIABeHgnESMKCKIC9pSpIIKKDT6zSSKrrKKrKrJpBnBnCKBpKppSpltzxoonCCKIACxMKJoommnKCSrUSCIHmnAABgoopSBn9nKCCKKIKBmcgnJnJnKICBnKCBmemnHeX9XZmXXggen9p9X8JcgnAA9ggee7emggcme9XmnIIKJnABgmmgcegpzSzxKKKBhCtzUUomemmf999X7-2KBnBeX-7ABggggmfKKJe7YAMKJpraUWzUrtzzOz6tbztbzzaUzroofBcgpHnJfA9gf9gmmgmnAJnBgepUKITUxJpGaUa0bzrSJpEURUraUtaUaUzyNOzbbbzpHmcnIBfCJfBcfAACxJn9efExSC9efBjbrbzzOyOyUUztXcWzzaOzUzaOyObxzrJmcCK9fBn9ABfHnACBzbbbzaObxIBnBnA9gnABprbtWbaUxxtz5OyTUrIHjSzrtbzzOa6s6bbzttzSp0bq-56rzzUxk-5X7UzxqOzpSX-5OyObxWbzaN-55X-0zaN6zKIAACrUUqObztbu0aUtbzuXWaNOVUMxyT0ztby-0be97WbzOWtyObzzztzUzs6zrpztaOVVN0zMSpKLOaNNUqUzzzMUU6bzzzrqN0a-XcV7X71Vc5UKbxs0WWWWaN5Oa5OV11--0VN6a5---5OVOa55-OVOX91------77VNX7--57XXcV-OtaUrps7cVVV19Wby-OsV117X7X7X1------P9--NXXe91---5OaUxzSzzsP-XcX7X77c7USrzSxrSzKztaTOWbaN15NP7VOaNUyTUUzoN6rFNOaOaV6sN7UX--6Wc-c-V57VX1--VXeeeeenABmec0a0aOyOzbWWV--X1AIHc-1X-cV777cXV-0VceVV5-0a17c1X7XmmeeXX9A9ceghA9mgeggp9eeee7eIKIIJmppCA9ecceZoeWa-5T5NNUaUaOttzba199c99cXcc-V99eX9cV-ebIfrjzvV4KJ-AIfizEze7--bYTo-2J5JzF-7e4Cveve-33--JDSm-0e7F_s-0p5hSp5---dD4Z--JhAe--9NdC--pBL_q-1ebAlOejzkK3--KJUNww--1d3vF-CJs-Uc-5esiio--KWC9-1eph_ak--Kx9T--f0e2k4xNrdwgge7ggpSIAAMMKKzzrts17VNX5OaTN5--1oVgF-0PFWs-1hRm6-0pg5yny71uhi0yPdvjydTeiebebfziC3F2BB--003G43J1rMZKA9mmgnBpIBopCBhCBgnJpSIIICCMbWzpqTObbaOaT7TTUV-5TPWbV5X7V--5NX--frBUk-CUlBUc0ukKbDLOivvifyeizBG-033J34--L2d2s-HkjgTOYB-0NUZf-2f4OmOaeivnFFk3-0LAowpX-0gXRxx-1LKqcmcUV-AB3ZR-0Op3z-1fGBZOizwnJKF-4eWGi-0hJsrx-5qjBsnAtzrUXX9V0fNcdzzxKJ-2QIMIu--Cj7A--5tSdV-QUQbu--hk1IRnTNV5QVSGuuvevvzEzB4KKG443-1ho7gjxUrUrTPc59Y9ce-6iaDleQnBG-0rKfZrNV-Dxq_5jG--6sEpV0QwNEunnK--6wn1V-33G9k-129AN-60dGDo--Vsiq--FeTd--7RqOV-3GGnk-57tGy-2l7KYvp--yA0SRfByOs-04mn3-4XwGzTV-04yPo--Xz_P-1lVB2go-4YNGMAs-65rrUV--YVN9--Gl1M--Nueus-06i6B-0Yt5zV-RUu1Ok-DFK_hV-z7H0idKbjjgBkBK--O5rvs-E9EXLbV1Ov8biOzyOV-Vs1-9A7ghCJnIB70V--79AACCKpQ17N-VVVXeenCJogmVVXXf9fBgmgee9Xe1XcX-5550a0V55OaOyOzaTOttaUaTOtttzzzttyUbyTOzzyTUaTTOtaOaObaTOaOtWV-OaObUxtV917XX--NOs-X-0WV-------110a55--1-V0byOaOWtaUzbbbbbzzbtzaSzaUbyUV0goJQtMew-0par0fJmfAA9fBozUzSrxUSxrUztaOV5OtsP797ee7XXe-1nZgKso-0bEIj--RtwnOk-TSCdSJ---Im4G-3Ou09nKL55X--J9VI--9XscV0hMvWOiEC3IxgZclzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzVVVXcX---V71X55N---X7Xe-8bxrzSrxtxrxrxtzyTOaUt_xzzprSSIK9ghMSKrSMSrSSSKrUa6byUzrrUUrzUtxzTSzzzzzzUUUzzzzzzzztttaNOaOzttzzyUtbtbbzMSrryOaOV8aUxpSpCKrMraN--5SSIJnKpKU_y0y55-5UqppMK9fA1nF0YMdQ5OaLLOPQzzvgk-223-0v0HHnT-"
			), (new wQ).wS(qK)
}

function aKq() {
	this.wY = null, this.aLw = null, this.aLx = null, this.dd = function() {
		var aLy = [120, 105, 92],
			cos = [12, 12, 60],
			aLz = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aM0 = [140, 130, 120],
			aM1 = [12, 12, 76],
			aM2 = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aM3 = [130, 117, 106],
			aM4 = [12, 12, 68],
			aM5 = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.wY = new Array(bS.aKn + 1), this.wY[0] = {
			name: L(132),
			i: 230,
			j: 230,
			mq: 1e3,
			mn: 2e3,
			aKv: 173
		}, this.wY[1] = {
			name: L(133),
			i: 800,
			j: 800,
			mq: 100,
			mn: 50,
			aKv: 43
		}, this.wY[2] = {
			name: L(134),
			i: 512,
			j: 512,
			mq: 128,
			mn: 32,
			aKv: 0
		}, this.wY[3] = {
			name: L(135) + " 1",
			i: 960,
			j: 960,
			mq: 60,
			mn: 8,
			aKv: 0
		}, this.wY[4] = {
			name: L(136),
			i: 900,
			j: 900,
			mq: 100,
			mn: 5,
			aKv: 0
		}, this.wY[5] = {
			name: L(137),
			i: 1e3,
			j: 1e3,
			mq: 100,
			mn: 40,
			aKv: 0
		}, this.wY[6] = {
			name: L(138),
			i: 1e3,
			j: 1e3,
			mq: 100,
			mn: 20,
			aKv: 0
		}, this.wY[7] = {
			name: L(139),
			i: 1024,
			j: 1024,
			mq: 128,
			mn: 32,
			aKv: 0
		}, this.wY[8] = {
			name: L(140),
			i: 820,
			j: 820,
			mq: 200,
			mn: 100,
			aKv: 0
		}, this.wY[9] = {
			name: L(141),
			i: 1024,
			j: 1024,
			mq: 128,
			mn: 32,
			aKv: 0
		}, this.wY[10] = {
			name: L(142),
			wz: aM0,
			x0: aM1,
			aL6: aM2
		}, this.wY[11] = {
			name: L(143),
			wz: aM3,
			x0: aM4,
			aL6: aM5
		}, this.wY[12] = {
			name: L(144),
			wz: aM3,
			x0: aM4,
			aL6: aM5
		}, this.wY[13] = {
			name: L(145),
			wz: aLy,
			x0: cos,
			aL6: aLz
		}, this.wY[14] = {
			name: L(146),
			wz: aLy,
			x0: cos,
			aL6: aLz
		}, this.wY[15] = {
			name: L(147),
			wz: aM0,
			x0: aM1,
			aL6: aM2
		}, this.wY[16] = {
			name: L(148),
			wz: aM0,
			x0: aM1,
			aL6: aM2
		}, this.wY[17] = {
			name: L(149),
			wz: aLy,
			x0: cos,
			aL6: aLz
		}, this.wY[18] = {
			name: L(150),
			wz: aM3,
			x0: aM4,
			aL6: aM5
		}, this.wY[19] = {
			name: L(151),
			wz: aLy,
			x0: cos,
			aL6: aLz
		}, this.wY[20] = {
			name: L(152),
			i: 1024,
			j: 1024,
			mq: 128,
			mn: 32,
			aKv: 0
		}, this.wY[21] = {
			name: L(135) + " 2",
			i: 940,
			j: 940,
			mq: 80,
			mn: 8,
			aKv: 0
		}, this.wY[22] = {
			name: L(153),
			wz: aM3,
			x0: aM4,
			aL6: aM5
		}, this.wY[23] = {
			name: L(154),
			wz: aM0,
			x0: aM1,
			aL6: aM2
		}, this.wY[bS.aKn] = {
			name: ""
		}, this.aLw = new Uint8Array(12);
		for (var aB = 0; aB < 10; aB++) this.aLw[aB] = aB;
		for (this.aLw[10] = 20, this.aLw[11] = 21, this.aLx = new Uint8Array(bS.aKo), aB = 0; aB < 10; aB++) this.aLx[aB] = 10 + aB;
		this.aLx[10] = 22, this.aLx[11] = 23
	}
}

function aKr() {
	this.aLt = function() {
		for (var gN, ew, fY, aLr = aC2, aLs = bS.wi, i = bS.f0, aLq = i - 1, hf = bS.f1 - 1, gI = 0, ey = 1; ey < hf; ey++)
			for (fY = ey * i, ew = 1; ew < aLq; ew++) aLs[gN = fY + ew << 2] === aLs[1 + gN] && aLs[gN] === aLs[2 + gN] && (gI++, aLr[2 + gN] = 4);
		ap.a6y = gI
	}, this.aLu = function(aM6, aM7) {
		for (var aLr = aC2, i = bS.f0, aLq = i - 1, hf = bS.f1 - 1, id = 0, ey = 1; ey < hf; ey++)
			for (var fY = ey * i, ew = 1; ew < aLq; ew++) {
				var eT = 2 + (fY + ew << 2);
				aLr[eT] === aM6 && (! function(eT, id, aM6, aM7) {
					var ep = 1,
						aLr = aC2,
						er = ac.er,
						a2k = [eT],
						aM9 = id >> 8 << 1,
						aMA = 255 & id;
					aLr[eT - 2] = aM9, aLr[eT - 1] = aMA, aLr[eT] = 5;
					for (; ep;) {
						for (var a2l = [], aB = 0; aB < ep; aB++)
							for (var ee = a2k[aB], es = 3; 0 <= es; es--) {
								var et = ee + er[es];
								aLr[et] === aM6 && (aLr[et - 2] = aM9, aLr[et - 1] = aMA, aLr[et] = aM7, a2l.push(et))
							}
						ep = (a2k = a2l).length
					}
				}(eT, id, aM6, aM7), id = (id + 1) % 32768)
			}
	}, this.aLv = function() {
		for (var aLr = aC2, i = bS.f0, aLq = i - 3, hf = bS.f1 - 3, aMC = 12 * i, ey = 3; ey < hf; ey++)
			for (var fY = ey * i, ew = 3; ew < aLq; ew++) {
				var eT = 2 + (fY + ew << 2);
				2 !== aLr[eT] || 2 === aLr[eT - 12] && 2 === aLr[12 + eT] && 2 === aLr[eT - aMC] && 2 === aLr[eT + aMC] || (aLr[eT - 2] = 1 | aLr[eT - 2])
			}
	}
}

function a4k() {
	(yI = void 0 === yI ? document.createElement("canvas") : yI).width = bS.f0, yI.height = bS.f1, a4o = yI.getContext("2d", {
		alpha: !0
	}), a4p = aC2 = null, a4p = a4o.getImageData(0, 0, bS.f0, bS.f1), aC2 = a4p.data, bA.ql.wj(aC2)
}

function ch() {
	var fH, i, j, max, aMD, mn, aMF, aMG, aMH, aMI, aMJ, aMK, aML, aMM, aME = 1e4;

	function aMT(aMS, mq, ep) {
		var aB;
		for (aMF[0] = aMS, aB = 1; aB < ep; aB++) aMF[aB] = aMF[aB - 1] + mq, mq = aMF[aB] >= aME ? (aMF[aB] = aME - 1, -mq) : aMF[aB] < 0 ? (aMF[aB] = 0, -mq) : (mq += 16384 <= ay.random() ? mn : -mn) < -aMD ? -aMD : aMD < mq ? aMD : mq
	}

	function aMV(ew, ey, aMW, ep) {
		(aMW ? function(ew, ey, ep) {
			var aB;
			for (aB = 0; aB < ep; aB++) fH[ey * i + ew + aB] = aMF[aB]
		} : function(ew, ey, ep) {
			var aB;
			for (aB = 0; aB < ep; aB++) fH[ey * i + ew + aB * i] = aMF[aB]
		})(ew, ey, ep)
	}

	function aMZ(value, ep) {
		var aB, aKE, eT, jR = value - aMF[ep - 1];
		if (0 != jR) {
			for (aKE = 1 + bL.du(Math.abs(jR), ep - 1), aKE = jR < 0 ? -aKE : aKE, aMF[ep - 1] = value, eT = (eT = ep - 1 - bL.du(Math.abs(jR), Math.abs(aKE))) < 1 ? 1 : ep - 2 < eT ? ep - 2 : eT, aB = ep - 2; eT <= aB; aB--) aMF[aB] += jR - (ep -
				1 - aB) * aKE;
			(jR < 0 ? function(ep) {
				var aB;
				for (aB = ep - 2; 1 <= aB; aB--) aMF[aB] < 0 && (aMF[aB] = -aMF[aB] - 1)
			} : function(ep) {
				var aB;
				for (aB = ep - 2; 1 <= aB; aB--) aMF[aB] >= aME && (aMF[aB] = 2 * aME - aMF[aB] - 1)
			})(ep)
		}
	}

	function aMc(a2k, a2l, ep) {
		for (var aB = 0; aB < ep; aB++) a2k[aB] = a2l[aB]
	}

	function aMd(g) {
		for (var aB = 0; aB < g.length - 1; aB++) g[aB] = g[aB + 1] - g[aB];
		g[g.length - 1] = g[g.length - 3]
	}

	function aMe(a5Q, gap, hg) {
		aMG.push(a5Q), aMH.push(gap), aMI.push(hg)
	}
	this.a7 = function(a3y) {
		! function(a3y) {
			var aB;
			for (i = a3y[0], j = a3y[1], aMD = a3y[2], mn = a3y[3], fH = new Int16Array(i * j), max = j < i ? i : j, aMF = new Int16Array(max), aMG = [], aMH = [], aMI = [], aMJ = new Array(i), aMK = new Array(j), aB = i - 1; 0 <= aB; aB--) aMJ[
				aB] = !1;
			for (aB = j - 1; 0 <= aB; aB--) aMK[aB] = !1;
			aML = new Int16Array(i), aMM = new Int16Array(j)
		}(a3y),
		function(ep) {
			var aMS = ay.random() % aME,
				mq = ay.random() % (2 * aMD + 1) - aMD;
			aMT(aMS, mq, ep)
		}(max), aMc(aMM, aMF, j), aMV(0, 0, !0, i);
		var ew, ey, a3y = fH[0],
			ep = max,
			mq = ay.random() % (2 * aMD + 1) - aMD;
		for (aMT(a3y, mq, ep), aMc(aML, aMF, i), aMV(0, 0, !1, j), aMd(aML), aMd(aMM), aMT(fH[i - 1], aML[i - 1], j), aMV(i - 1, 0, !1, j), aMT(fH[i * (j - 1)], aMM[j - 1], i), aMZ(fH[i * j - 1], i), aMV(0, j - 1, !0, i), aMJ[i - 1] = aMJ[0] = !
			0, aMK[j - 1] = aMK[0] = !0, aMe(0, i, !0), aMe(0, j, !1), ! function() {
				var aMg, a5Q;
				for (;;) {
					if (aMg = function() {
							var aB, aMg = aMG.length - 1;
							for (aB = aMg - 1; 0 <= aB; aB--) aMH[aB] > aMH[aMg] && (aMg = aB);
							return aMg
						}(), aMH[aMg] < 5) return;
					a5Q = aMG[aMg] + bL.du(aMH[aMg], 2), (aMI[aMg] ? function(ew) {
						var ep, aMj, aB, aFq = 0,
							aMk = 0;
						for (; aMk < j - 1;) {
							for (aB = aFq + 1; aB < j; aB++)
								if (aMK[aB]) {
									aMk = aB;
									break
								} ep = aMk - aFq + 1, aMT(fH[ew + i * aFq], 0 === aFq ? aML[ew] : aMF[aMj - 1] - aMF[aMj - 2], ep), aMZ(fH[aMk * i + ew], ep), aMV(ew, aFq, !1, ep), aMj = ep, aFq = aMk
						}
						aMJ[ew] = !0
					} : function(ey) {
						var ep, aMj, aB, aFq = 0,
							aMk = 0;
						for (; aMk < i - 1;) {
							for (aB = aFq + 1; aB < i; aB++)
								if (aMJ[aB]) {
									aMk = aB;
									break
								} ep = aMk - aFq + 1, aMT(fH[ey * i + aFq], 0 === aFq ? aMM[ey] : aMF[aMj - 1] - aMF[aMj - 2], ep), aMZ(fH[ey * i + aMk], ep), aMV(aFq, ey, !0, ep), aMj = ep, aFq = aMk
						}
						aMK[ey] = !0
					})(a5Q), aMe(a5Q, aMG[aMg] + aMH[aMg] - a5Q, aMI[aMg]), aMH[aMg] = a5Q - aMG[aMg] + 1
				}
			}(), ew = 0; ew < i; ew++)
			if (!aMJ[ew])
				for (ey = 0; ey < j; ey++) aMK[ey] || ! function(ew, ey) {
					var value = fH[ey * i + ew - 1] + fH[(ey - 1) * i + ew],
						a79 = 2;
					aMJ[ew + 1] && (a79++, value += fH[ey * i + ew + 1]);
					aMK[ey + 1] && (a79++, value += fH[(ey + 1) * i + ew]);
					fH[ey * i + ew] = bL.du(value, a79)
				}(ew, ey)
	}, this.aLI = function() {
		return fH
	}, this.aKz = function() {
		fH = null
	}
}

function aHF(f8, f9) {
	return 0 <= f8 ? bL.du(f8, f9) : -bL.du(-f8, f9)
}

function ji(fH) {
	return fH * fH
}

function a6O(f8, f9) {
	return f9 < f8 ? f8 : f9
}

function aBW(f8, f9) {
	return f8 < f9 ? f8 : f9
}

function a8m(f8, fH, f9) {
	return fH < f8 ? f8 : f9 < fH ? f9 : fH
}

function aMm(fH, ep) {
	for (var fA = bL.du(fH + 1, 2), aB = 0; aB < ep; aB++) fA = bL.du(fA + bL.du(fH, fA), 2);
	return fA
}

function aIk(fH, ep) {
	return fH < 1 ? 0 : aMm(fH, ep)
}

function aMn(nB, nC, sz, a8V, nO, nP, t0, th) {
	return !(nB + sz <= nO || nC + a8V <= nP || nO + t0 <= nB || nP + th <= nC)
}

function aMo(nB, nC, sz, a8V, nO, nP, t0, th) {
	return nB <= nO && nC <= nP && nO + t0 <= nB + sz && nP + th <= nC + a8V
}

function wa(fH) {
	return Math.floor(!!fH * (1 + Math.log2(fH + .5)))
}

function bx() {
	this.du = function(f8, f9) {
		return Math.floor((f8 + .5) / f9)
	}, this.aMp = function(f8, f9) {
		return Math.floor(f8 * (f9 + .5))
	}, this.sqrt = function(fH) {
		return ~~Math.sqrt(fH + .5)
	}, this.pow = function(e) {
		return Math.floor(Math.pow(2, e) + .5)
	}, this.hx = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aMq = function(fY, fa, fc) {
		return Math.max(Math.min(fY, fa), fc)
	}, this.aMr = function(aMs, aMt, ew, ey) {
		ew -= aMs, aMs = ey - aMt, ey = 0;
		return 0 == ew ? ey = 0 <= aMs ? Math.PI : 0 : (ey = Math.atan(aMs / ew), ey += 0 < ew ? .5 * Math.PI : 1.5 * Math.PI), ey
	}, this.log2 = function(fH) {
		return Math.floor(!!fH * (1 + Math.log2(fH + .5)))
	}, this.log10 = function(fH) {
		return Math.floor(Math.log10(fH + .5))
	}, this.aMv = function(aMw, aMx, aMy, aMz, aN0) {
		return aMy - aN0 < aMw && aMw < aMy + aN0 && aMz - aN0 < aMx && aMx < aMz + aN0
	}, this.xX = function(a9C, a9E) {
		return a9C * a9C + a9E * a9E
	}
}

function dD() {
	this.y = new aN1, this.ss = 0;
	var aN2 = new Array(31);

	function aN6() {
		for (var ep = aN2.length, aB = 0; aB < ep; aB++) aN2[aB] = null
	}
	this.dd = function() {
		for (var aN3, aN4 = document.body.firstChild; aN4;) aN3 = aN4.nextSibling, !document.body.contains(aN4) || "DIV" !== aN4.tagName && "INPUT" !== aN4.tagName && "BUTTON" !== aN4.tagName || t.removeChild(document.body, aN4), aN4 = aN3
	}, this.u = function(e9, aN5, a3y) {
		void 0 === aN5 && (aN5 = this.ss), bf.dl = !0, 0 === e9 && (0 === aa.a1L() ? e9 = 5 : a0.a1.setState(13)), this.ru(), this.ss === e9 && (aN5 = aN2[e9].aN5, aN2[e9] = null), this.ss = e9;
		var l7 = aN2[e9];
		if (!l7 || 4 === e9 || 7 === e9 || 8 === e9 || 9 === e9 || 10 === e9 || 11 === e9 || 13 === e9 || 15 === e9 || 18 === e9 || 20 <= e9 && e9 <= 28 || 32 === e9 || 33 === e9) {
			if (0 === e9) return void aN6();
			1 === e9 ? l7 = new aN7 : 2 === e9 ? l7 = new aN8 : 3 === e9 ? l7 = new aN9 : 4 === e9 || 9 === e9 || 10 === e9 || 11 === e9 || 13 === e9 || 33 === e9 ? l7 = a3y : 5 === e9 ? l7 = new aNA : 6 === e9 ? l7 = new aNB : 7 === e9 ? l7 =
				new aNC(t.y.aND) : 8 === e9 ? l7 = a3y : 12 === e9 ? l7 = new aNE : 14 === e9 ? l7 = new aNF : 15 === e9 ? l7 = new aNC(t.y.aNG) : 16 === e9 ? l7 = new aNH : 17 === e9 ? l7 = new aNI : 18 === e9 ? l7 = new aNJ : 19 === e9 ? l7 =
				new aNK : 20 === e9 ? l7 = new aNL : 21 === e9 ? l7 = new aNM : 22 === e9 ? l7 = new aNN : 23 === e9 ? l7 = new aNO : 24 === e9 ? l7 = new aNP : 25 === e9 ? l7 = new aNQ : 26 === e9 ? l7 = new aNR : 27 === e9 ? l7 = new aNS :
				28 === e9 ? l7 = new aNT : 29 === e9 ? l7 = new aNU : 30 === e9 && (l7 = new aNV), l7.aN5 = aN5, aN2[e9] = l7
		}
		l7.show(a3y)
	}, this.a1K = function() {
		this.hb() && this.aNW(this.a5A().aN5)
	}, this.aNW = function(e9) {
		this.hb() && (aN2[e9] ? (this.ru(), bf.dl = !0, this.ss = e9, aN2[e9].show()) : this.u(e9))
	}, this.ru = function() {
		this.hb() && aN2[this.ss].ru()
	}, this.x = function() {
		this.hb() && (aN2[this.ss].ru(), aN6(), this.ss = 0, a0.a1.setState(13))
	}, this.ul = function() {
		var l7;
		this.hb() && (l7 = aN2[this.ss]).ul && l7.ul()
	}, this.resize = function() {
		if (!this.hb()) return !1;
		aN2[this.ss].resize()
	}, this.h2 = function(ew, ey) {
		var l7;
		this.hb() && (l7 = aN2[this.ss]).h2 && l7.h2(ew, ey)
	}, this.a1e = function(ew, ey) {
		var l7;
		this.hb() && (l7 = aN2[this.ss]).a1e && l7.a1e(ew, ey)
	}, this.a22 = function() {
		var l7;
		this.hb() && (l7 = aN2[this.ss]).a22 && l7.a22()
	}, this.a1h = function(lR, lS, deltaY) {
		var l7;
		this.hb() && (l7 = aN2[this.ss]).a1h && l7.a1h(lR, lS, deltaY)
	}, this.a2C = function(code) {
		var l7;
		return !!this.hb() && ((l7 = aN2[this.ss]).a2C && l7.a2C(code), !0)
	}, this.j5 = function() {
		var l7;
		this.hb() && (l7 = aN2[this.ss]) && l7.j5 && l7.j5()
	}, this.hb = function() {
		return 0 < this.ss
	}, this.a5A = function() {
		return aN2[this.ss]
	}, this.a5B = function(e9) {
		return aN2[e9]
	}, this.aNX = function() {
		return aN2
	}, this.removeChild = function(aNY, a3T) {
		try {
			aNY.removeChild(a3T)
		} catch (e) {
			console.log("removeChild error " + e)
		}
	}
}

function aNC(data) {
	var aNZ, aNa;
	this.show = function() {
		data.aNb && bI.aOU("account", data.sq), aNZ.show(), this.resize()
	}, this.ru = function() {
		aNZ.ru()
	}, this.resize = function() {
		aNZ.resize(), aNa.resize()
	}, this.a2C = function(fA) {
		2 === fA && aNZ.ud[0].qu()
	}, aNZ = new uW(data.username, [new w("⬅️ " + L(37), function() {
		bI.clear(), t.a1K()
	}), new w(data.aNb ? "🔄 " + L(155) : L(156), function() {
		t.u(8, data.aNb ? t.a5A().aN5 : void 0, new st(25, {
			su: 0,
			sq: data.sq,
			sr: data.sr
		}))
	}, 0, 0, 1)]), aNa = new qW(aNZ.uc, function() {
		var qY = [];
		qY.push(function() {
				var aNt = new qG,
					a0s = (aNt.qJ(L(213)), data.aOA);
				a0s < 1 ? (aNt.qP(L(214)), 0 === data.aOB ? aNt.qL(L(215)) : 1 === data.aOB ? aNt.qL(L(216)) : 2 === data.aOB ? aNt.qL(L(217)) : 3 === data.aOB ? aNt.qL(L(218)) : 4 === data.aOB ? aNt.qL(L(219)) : 5 === data.aOB ? aNt.qL(
					L(220)) : 6 === data.aOB ? aNt.qL(L(221)) : aNt.qL(L(222))) : (aNt.qP(L(223)), a0s = a0s < 2 ? L(224) : a0s < 61 ? 2 === a0s ? L(225) : L(226, [a0s - 1]) : a0s < 84 ? 61 === a0s ? L(227) : L(228, [a0s - 60]) :
					a0s < 255 ? 84 === a0s ? L(229) : L(230, [a0s - 83]) : L(231), aNt.qL(a0s));
				{
					var qM, aNx;
					aNt.qU(new sI), data.aNb && (qM = aNt.qL(), aNt.qU(new s8([new w(bj.vB.u7(data.sq) ? L(232) : L(233), function(e) {
						return bj.vB.vN(data.sq) ? (e.textContent = L(232), aNx(1)) : (e.textContent = L(233), aNx(0)), !0
					}).button])), aNx = function(fH) {
						qM.textContent = fH ? L(234) : ""
					}, bj.vB.u7(data.sq) && aNx(1), aNt.qU(new sI))
				}
				var rQ = new rR({
					value: data.username,
					e9: -1
				});
				rQ.e.readOnly = !0, aNt.qU(rQ), aNt.qU(new s8([new w(L(179), function(e) {
					return bA.qd.a3Q(rQ.e), bA.qd.a3R(e), !0
				}).button])), data.aNb ? (aNt.qU(new sI), aNt.qP("<a href='https://territorial.io/wiki/reports' target='_blank'>territorial.io/wiki/reports</a>", "0.75em").style.marginBottom = "0.8em", aNt.qU(new s8([new w(L(236),
					function(e) {
						return b0.aFG.aFH({
							su: 3,
							sq: data.sq,
							value: 0
						}), bA.qd.a3R(e), !0
					}, bB.oQ).button])), aNt.qU(new s8([new w(L(237), function(e) {
					return b0.aFG.aFH({
						su: 3,
						sq: data.sq,
						value: 1
					}), bA.qd.a3R(e), !0
				}, bB.oQ).button])), aNt.qU(new s8([new w("Cheater", function(e) {
					return b0.aFG.aFH({
						su: 3,
						sq: data.sq,
						value: 2
					}), bA.qd.a3R(e), !0
				}, bB.oQ).button])), aNt.qU(new s8([new w("False Reporter", function(e) {
					return b0.aFG.aFH({
						su: 3,
						sq: data.sq,
						value: 3
					}), bA.qd.a3R(e), !0
				}, bB.oQ).button]))) : aNt.qL(L(235));
				return aNt
			}()),
			function(qY) {
				var aNt, qM, aCH, aOD, aO1;
				data.aNb || ((aNt = new qG).qJ(L(238)), (qM = aNt.qL(data.aOC.length + " / 160")).style.textAlign = "center", aCH = !0, (aOD = new uu(0, 1, function(e) {
					e = e.target.value.length;
					qM.textContent = e + " / 160", 160 < e ? aCH && (aCH = !1, aO1.qx(1), aO1.button.style.color = bB.nl) : aCH || (aCH = !0, aO1.qx(0), aO1.button.style.color = bB.oj)
				})).e.rows = 6, aOD.e.style.fontSize = "1em", aOD.v1(data.aOC), aNt.qU(aOD), aO1 = new w(L(239), function() {
					if (!aCH) return !0;
					t.u(8, t.a5A().aN5, new st(29, {
						su: 1,
						qK: aOD.v3().substring(0, 160)
					}))
				}, 0, 0, 1), aNt.qU(new s8([aO1.button])), 0 !== data.aOE && (aNt.qU(new s8([new w(L(1 === data.aOE ? 241 : 242), function() {
					t.u(8, t.a5A().aN5, new st(29, {
						su: 0,
						qK: ""
					}))
				}, 0, 0, 1).button])), aNt.qL(1 === data.aOE ? L(243, [data.aOG - 1]) : L(244, [data.aOG - 1]))), aNt.qL(L(240, [data.aOF])), qY.push(aNt))
			}(qY),
			function(qY) {
				var aNt;
				data.aNb && 0 !== data.aOE && ((aNt = new qG).qJ(L(245)), aNt.qN(data.aOC), aNt.qU(new s8([new w(L(246, 0, "Report"), function(e) {
					return b0.y.aNz(0) && (bA.qd.a3R(e), b0.aFG.aOH({
						su: 5,
						sq: data.sq
					})), !0
				}, 0, 0, 1).button])), qY.push(aNt))
			}(qY), qY.push(function() {
				var aNt = new qG,
					aNu = (aNt.qJ(L(157)), aNt.qP("<a href='https://territorial.io/wiki/gold' target='_blank'>territorial.io/wiki/gold</a>", "0.75em").style.marginBottom = "0.8em", [L(158), L(159), L(160), L(161), L(162), L(163), L(164),
						L(165), L(166), L(167), L(168), L(169), L(170), L(171)
					]),
					e8 = data.aNv;
				return aNt.qP(L(172) + bA.rc.a4F(data.vx, .01, 2) + "<br>" + L(173) + (e8 + 1) + " / " + data.vw + "<br>" + L(174) + aNu[function(e8, vx) {
					if (e8 < 10) return 0;
					if (e8 < 30) return 1;
					if (e8 < 60) return 2;
					if (3e4 <= (vx = bL.du(vx, 100))) return 3;
					if (12e3 <= vx) return 4;
					if (7e3 <= vx) return 5;
					if (3e3 <= vx) return 6;
					if (1e3 <= vx) return 7;
					if (500 <= vx) return 8;
					if (200 <= vx) return 9;
					if (70 <= vx) return 10;
					if (20 <= vx) return 11;
					if (3 <= vx) return 12;
					return 13
				}(e8, data.vx)]), aNt
			}()), data.aNb && qY.push(function() {
				var aNt = new qG,
					rQ = (aNt.qJ(L(175)), aNt.qP("<a href='https://territorial.io/wiki/transactions' target='_blank'>territorial.io/wiki/transactions</a>", "0.75em").style.marginBottom = "0.8em", new rR({
						value: bj.eL.data[147].value,
						e9: -1
					}, 1, void 0, function(e) {
						bj.s5.s6(147, aNx(e.target.value))
					})),
					aNy = (aNt.qU(rQ), new w(L(14), function(e) {
						return rQ.e.readOnly && b0.y.aNz(0) && (bA.qd.a3R(e), aO0(), b0.aFG.aFH({
							su: 0,
							sq: data.sq,
							value: parseInt(bj.eL.data[147].value, 10)
						})), !0
					}, 1)),
					aO1 = new w(L(176), function(e) {
						return e.textContent === L(176) ? (e.textContent = L(177), rQ.e.readOnly = !0, aNy.qx(0), aNy.button.style.color = bB.oj, bj.s5.s6(147, rQ.e.value), aNx(bj.eL.data[147].value)) : aO0(), !0
					}),
					qM = (aNt.qU(new s8([aO1.button])), aNt.qL()),
					aNx = function(fH) {
						qM.innerHTML = t.y.aO2(fH, bj.eL.data[105].value, data.sq)
					},
					aO0 = function() {
						aO1.button.textContent = L(176), rQ.e.readOnly = !1, aNy.qx(1), aNy.button.style.color = bB.nl
					};
				return aNx(bj.eL.data[147].value), aNt.qU(new s8([aNy.button])), aNt
			}());
		qY.push(function() {
			var aNt = new qG,
				rQ = (aNt.qJ(L(178)), new rR({
					value: data.sq,
					e9: -1
				}));
			return rQ.e.readOnly = !0, aNt.qU(rQ), aNt.qU(new s8([new w(L(179), function(e) {
				return bA.qd.a3Q(rQ.e), bA.qd.a3R(e), !0
			}).button])), aNt
		}()), data.aNb || (qY.push(function() {
			var aNt = new qG,
				aO3 = (aNt.qJ(L(180)), new rR(bj.eL.data[106]));
			return aO3.e.readOnly = !0, aO3.e.type = "password", aNt.qU(aO3), aNt.qU(new s8([new w(L(181), function(e) {
				return e.textContent === L(181) ? (e.textContent = L(182), aO3.e.type = "text") : (e.textContent = L(181), aO3.e.type = "password"), !0
			}).button, new w(L(179), function(e) {
				return bA.qd.a3Q(aO3.e), bA.qd.a3R(e), !0
			}).button])), aNt.qU(new s8([new w(L(183), function() {
				t.u(8, t.a5A().aN5, new st(15))
			}).button])), aNt.qJ(L(184), "0.8em"), aNt.qL(L(185)), aNt.qL(L(186)), aNt.qL(L(187)), aNt
		}()), qY.push(function() {
			var aNt = new qG;
			return aNt.qJ(L(188)), aNt.qU(new s8([new w(L(189), function() {
				t.u(6, t.a5A().aN5)
			}).button])), aNt.qU(new s8([new w(L(190), function() {
				bj.s5.s6(105, ""), t.u(8, t.a5A().aN5, new st(18))
			}).button])), aNt.qU(new s8([new w(L(191) + bj.eL.data[105].value, function() {
				t.u(4, 0, new v(L(192), L(193), !0, [new w("⬅️ " + L(37), function() {
					t.u(7, t.a5B(7).aN5)
				})]))
			}, bB.oQ).button])), aNt
		}()), qY.push(function() {
			function aO5(e9) {
				aO4[0].qx(0 === e9 ? bB.nx : bB.o8), aO4[1].qx(0 === e9 ? bB.nx : bB.oQ), aO4[2].qx(e9 === qS.qT.length - 1 || e9 < 5 ? bB.nx : bB.oQ)
			}
			var qS, aO4, aNt = new qG;
			aNt.qJ(L(198)), aNt.qL(L(199)), bj.y.vh();
			return aO4 = [new w(L(200), function() {
				var e9 = Math.min(bj.eL.data[117].value, qS.qT.length - 1);
				e9 < 1 || (e9 = bj.y.vl(e9), bj.s5.s6(105, e9.sq), bj.s5.s6(106, e9.password), t.u(8, t.a5A().aN5, new st(18)))
			}, bB.nx, 1), new w(L(196), function() {
				var e9 = Math.min(bj.eL.data[117].value, qS.qT.length - 1);
				if (!(e9 < 1)) {
					qS.qT[e9].remove(), qS.qT.splice(e9, 1);
					for (var aB = e9; aB < qS.qT.length; aB++) qS.qT[aB].name = "" + aB;
					bj.y.vk(e9), e9 = bj.eL.data[117].value, qS.qT[e9].textContent = qS.qT[e9].textContent.replace("⚪", "🟢"), aO5(e9)
				}
			}, bB.nx, 1), new w(L(197), function() {
				var e9 = Math.min(bj.eL.data[117].value, qS.qT.length - 1);
				if (e9 !== qS.qT.length - 1) {
					for (var aB = qS.qT.length - 1; e9 < aB; aB--) qS.qT[aB].remove(), qS.qT.splice(aB, 1), bj.y.vk(aB);
					aO5(e9)
				}
			}, bB.nx, 1)], qS = new uR(bj.eL.data[117], aO5), aO5(0), qS.qT[0].style.marginTop = "0.5em", aNt.qR(qS), aNt.qU(new s8([aO4[0].button])), aNt.qU(new s8([aO4[1].button])), aNt.qU(new s8([aO4[2].button])), aNt
		}()));
		return qY.push(function() {
				var aNt = new qG,
					aNu = (aNt.qJ(L(204)), [L(205), L(206), L(207), L(208)]),
					e8 = data.aO6;
				return aNt.qP(L(209) + (data.a0b / 100).toFixed(2) + "<br>" + L(173) + (e8 + 1) + " / " + data.vw + "<br>" + L(174) + aNu[e8 < 10 ? 0 : e8 < 50 ? 1 : e8 < 200 ? 2 : 3]), aNt
			}()), qY.push(function() {
				var aNt = new qG;
				return aNt.qJ(L(201)), aNt.qP(L(202) + bA.rc.a4F(data.vt, .1, 1) + "<br>" + L(173) + (data.vu + 1) + " / " + data.vw + "<br>" + L(203) + data.vv), aNt
			}()),
			function(qY) {
				var aNt = new qG,
					aOI = data.w0,
					aOJ = (aNt.qJ(L(247)), aNt.qP(L(248, [data.vy.length ? "[" + data.vy + "]" : "-"])), aNt.qP(L(249, [bA.rc.a4F(aOI, .01, 2)])), aNt.qP(L(250, [data.w2 + 1 + " / " + data.vw])), data.w3),
					aOK = (aNt.qP(L(251, [bA.rc.a4F(aOJ, .1, 1)])), data.w5);
				aNt.qP(L(252, [aOK])), aNt.qP(L(253, [bA.rc.a4F(aOJ / Math.max(aOK, 1), .1, 2)])), aOI = data.w1, aNt.qJ(L(254), "0.8em"), aNt.qP(L(248, [data.vz.length ? "[" + data.vz + "]" : "-"])), aNt.qP(L(249, [bA.rc.a4F(aOI, .01, 2)])),
					aOJ = data.w4, aNt.qP(L(251, [bA.rc.a4F(aOJ, .1, 1)])), aOK = data.w6, aNt.qP(L(252, [aOK])), aNt.qP(L(253, [bA.rc.a4F(aOJ / Math.max(aOK, 1), .1, 2)])), data.aNb || (aNt.qL(L(255)), aNt.qL(L(256)));
				qY.push(aNt)
			}(qY),
			function(qY) {
				var aNt = new qG;
				aNt.qJ(L(257)), aNt.qP(L(209) + (data.aOL / 10).toFixed(1) + "<br>" + L(174) + (data.aOM.length ? L(258, [data.aOM]) : L(259))), data.aNb ? (aNt.qU(new s8([new w(L(260), function(e) {
					return b0.y.aNz(0) && (bA.qd.a3R(e), b0.aFG.aOH({
						su: 4,
						sq: data.sq
					})), !0
				}, 0, 0, 1).button])), aNt.qL(L(261)), aNt.qL(L(262))) : aNt.qL(L(263));
				qY.push(aNt)
			}(qY), qY.push(function() {
				var aNt = new qG;
				if (aNt.qJ(L(210)), aNt.qP(L(211) + data.aO7 + "<br>" + L(173) + (data.aO8 + 1) + " / " + data.vw + "<br>" + L(174) + bo.eB(data.aO8)), data.aNb) {
					var rQ = new rR({
							value: bj.eL.data[157].value,
							e9: -1
						}, 1, void 0, function(e) {
							bj.s5.s6(157, aNx(e.target.value))
						}),
						aO1 = (rQ.e.style.marginTop = "0.6em", aNt.qU(rQ), new w(L(176), function(e) {
							return e.textContent === L(176) ? (e.textContent = L(177), rQ.e.readOnly = !0, aO9[0].qx(0), aO9[1].qx(0), aO9[0].button.style.color = bB.oj, aO9[1].button.style.color = bB.oj, aNx(bj.eL.data[157]
								.value)) : aO0(), !0
						})),
						aO9 = (aNt.qU(new s8([aO1.button])), [new w("−", function(e) {
							return rQ.e.readOnly && b0.y.aNz(0) && (bA.qd.a3R(e), aO0(), b0.aFG.aFH({
								su: 2,
								sq: data.sq,
								value: bL.hx(parseInt(bj.eL.data[157].value, 10), 3, 32767)
							})), !0
						}, 1), new w("+", function(e) {
							return rQ.e.readOnly && b0.y.aNz(0) && (bA.qd.a3R(e), aO0(), b0.aFG.aFH({
								su: 1,
								sq: data.sq,
								value: bL.hx(parseInt(bj.eL.data[157].value, 10), 3, 32767)
							})), !0
						}, 1)]),
						qM = aNt.qL(),
						aNx = function(fH) {
							return fH = bA.gB.a3v(fH, 3, 32767), qM.textContent = L(212, [fH - 1, fH, bj.eL.data[105].value]), fH
						};
					aNt.qU(new s8([aO9[0].button, aO9[1].button]));
					for (var aB = 0; aB < 2; aB++) aO9[aB].button.style.fontSize = "1.6em";
					var aO0 = function() {
						aO1.button.textContent = L(176), rQ.e.readOnly = !1, aO9[0].qx(1), aO9[1].qx(1), aO9[0].button.style.color = bB.nl, aO9[1].button.style.color = bB.nl
					};
					aNx(bj.eL.data[157].value)
				}
				return aNt
			}()),
			function(qY) {
				var aNt, a3P;
				data.aNb && !data.aON || (0 === a0.id || data.aNb || data.aON) && ((aNt = new qG).qJ("Patreon"), !data.aNb && data.aOO ? aNt.qU(new s8([new w(L(181), function() {
					b0.aFG.aOH({
						su: 7,
						sq: data.sq
					}), data.aOO = 0, t.u(7)
				}).button])) : data.aON ? (aNt.qP(L(264, [(data.aOP / 100).toFixed(2)]) + "<br>" + L(265, [1 + data.aOQ + " / " + data.aOR]) + "<br>" + L(266, [data.aOS ? L(267) : L(268)])), data.aNb || aNt.qU(new s8([new w(L(269),
					function() {
						b0.aFG.aOH({
							su: 8,
							sq: data.sq
						}), data.aON = 0, bj.s5.s6(160, 0), t.u(7)
					}).button]))) : (aNt.qP(L(270), "0.75em").style.marginBottom = "0.3em", aNt.qP("  • " + L(271), "0.75em").style.whiteSpace = "pre", aNt.qP("  • " + L(272), "0.75em").style.whiteSpace = "pre", aNt.qP("  • " + L(
						273), "0.75em").style.whiteSpace = "pre", aNt.qP(L(274), "0.75em").style.marginTop = "1.0em", aNt.qP(L(275), "0.75em").style.marginTop = "1.0em", aNt.qP("<a href='" + bK.aOT +
						"' target='_blank'>patreon.com/c/territorial</a>", "0.75em").style.marginTop = "0.3em", a3P = "https://www.patreon.com/oauth2/authorize?state=" + data.sq +
					"&response_type=code&client_id=wWuOlDVZwn1sxSN9Wm4I9sJA3Ewfw7Zz4MjTMf9el2v3lviVkDwFtr92n7Tdlrhc&redirect_uri=https://territorial.io/", aNt.qP(L(276), "0.75em").style.marginTop = "1.0em", aNt.qP("<a href='" + a3P +
						"' target='_blank'>patreon.com/oauth2/...</a>", "0.75em").style.marginTop = "0.3em", data.aNb || (aNt.qU(new sI), aNt.qU(new s8([new w(L(182), function() {
						b0.aFG.aOH({
							su: 6,
							sq: data.sq
						}), data.aOO = 1, t.u(7)
					}).button])), aNt.qP(L(277), "0.75em").style.marginTop = "0.75em")), qY.push(aNt))
			}(qY),
			function(qY) {
				var aNt, qS, aO4, e9, aO5;
				data.aNb || bj.vB.get().length && ((aNt = new qG).qJ(L(194)), e9 = 0, aO5 = function() {
					var aBw = bj.vB.get().length;
					aO4[0].qx(e9 === aBw ? bB.nx : bB.o8), aO4[1].qx(e9 === aBw ? bB.nx : bB.oQ), aO4[2].qx(e9 === aBw || aBw - 1 <= e9 || e9 < 5 ? bB.nx : bB.oQ)
				}, aO4 = [new w(L(195), function() {
					t.u(8, void 0, new st(25, {
						su: 0,
						sq: bj.vB.get()[e9],
						sr: 0
					}))
				}, bB.nx, 1), new w(L(196), function() {
					bj.vB.vQ(e9), qS.qT[e9].remove(), qS.qT.splice(e9, 1);
					for (var aB = e9; aB < qS.qT.length; aB++) qS.qT[aB].name = "" + aB;
					bj.vB.get().length && (e9 = Math.max(e9 - 1, 0), qS.qT[e9].textContent = qS.qT[e9].textContent.replace("⚪", "🟢")), aO5()
				}, bB.nx, 1), new w(L(197), function() {
					for (var hh = qS.qT.length - 1; e9 < hh; hh--) bj.vB.vQ(hh), qS.qT[hh].remove(), qS.qT.splice(hh, 1);
					aO5()
				}, bB.nx, 1)], aO5(), (qS = new uR(bj.vB.vM(), function(aB) {
					e9 = aB, aO5()
				})).qT[0].style.marginTop = "0.5em", aNt.qR(qS), aNt.qU(new s8([aO4[0].button])), aNt.qU(new s8([aO4[1].button])), aNt.qU(new s8([aO4[2].button])), qY.push(aNt))
			}(qY), qY
	}())
}

function aNN() {
	var aOV, aOW, aOX, qY;

	function aOY() {
		aOa(), 2 !== aD.data.aIncomeType && (aD.data.aIncomeData = null), t.aNX()[19] = null, t.a1K()
	}

	function aOa() {
		2 === aD.data.aIncomeType ? (bA.ql.a2o(aOX.v3(), aD.data.aIncomeData, 255), bA.ql.max(aD.data.aIncomeData) || (aD.data.aIncomeType = 0)) : 1 !== aD.data.aIncomeType || aD.data.aIncomeValue || (aD.data.aIncomeType = 0)
	}
	this.show = function() {
		aOV.show(), this.resize()
	}, this.ru = function() {
		aOV.ru()
	}, this.resize = function() {
		aOV.resize(), aOW.resize()
	}, this.a2C = function(fA) {
		2 === fA && aOV.ud[0].qu()
	}, aOV = new uW(L(278), [new w("⬅️ " + L(37), aOY)]), aOW = new qW(aOV.uc, (function(qY) {
		var aNt = new qG;
		aNt.qJ(L(279)), aNt.qR(new uR({
			uV: [L(280), L(281), L(282)],
			value: aD.data.aIncomeType
		}, function(e9) {
			aOa(), 2 !== e9 || aD.data.aIncomeData || (aD.data.aIncomeData = new Uint8Array(aD.em)), aD.data.aIncomeType = e9, t.u(22)
		})), qY.push(aNt)
	}(qY = []), function(qY) {
		var aNt;
		1 === aD.data.aIncomeType && ((aNt = new qG).qJ("Value"), aNt.qU(new rR({
			e9: -1,
			value: aD.data.aIncomeValue
		}, 1, 0, function(e) {
			var value = bL.hx(Math.floor(e.target.value), 0, 255);
			e.target.value = aD.data.aIncomeValue = value
		})), qY.push(aNt))
	}(qY), function(qY) {
		var aNt;
		2 === aD.data.aIncomeType && ((aNt = new qG).qJ("Data"), (aOX = new uu(0, 1, 0, 1)).v1(bA.rc.a4L(aD.data.aIncomeData, 4)), aNt.qU(aOX), qY.push(aNt))
	}(qY), qY))
}

function aNQ() {
	var aOV, aOW, aOX;

	function aOY() {
		aOa(), 3 !== aD.data.botDifficultyType || bA.ql.a2c(aD.data.botDifficultyData) || (aD.data.botDifficultyType = 0), 3 !== aD.data.botDifficultyType && (aD.data.botDifficultyData = null), t.aNX()[19] = null, t.a1K()
	}

	function aOa() {
		3 === aD.data.botDifficultyType && bA.ql.a2o(aOX.v3(), aD.data.botDifficultyData, aE.kN.length - 1)
	}

	function aOf(qY, e9) {
		var aNt = new qG,
			value = (aNt.qJ(e9 < 0 ? L(62) : L(61) + " " + bg.a0V[e9 % 9]), 0 <= e9 && (aNt.qP(L(285) + ": " + aD.data.teamPlayerCount[e9]).style.marginBottom = "1em"), e9 < 0 ? aD.data.botDifficultyValue : aD.data.botDifficultyTeam[e9]);
		aNt.qR(new uR({
			uV: aE.kN,
			value: value
		}, function(hh) {
			e9 < 0 ? aD.data.botDifficultyValue = hh : aD.data.botDifficultyTeam[e9] = hh
		})), qY.push(aNt)
	}
	this.show = function() {
		aOV.show(), this.resize()
	}, this.ru = function() {
		aOV.ru()
	}, this.resize = function() {
		aOV.resize(), aOW.resize()
	}, this.a2C = function(fA) {
		2 === fA && aOV.ud[0].qu()
	}, aOV = new uW(L(62), [new w("⬅️ " + L(37), aOY)]), aOW = new qW(aOV.uc, function() {
		var qY = [];
		if (function(qY) {
				var aNt = new qG,
					uV = (aNt.qJ(L(279)), [L(281), L(283), L(284), L(282)]),
					value = aD.data.botDifficultyType;
				0 === aD.data.gameMode && (value = Math.min(value, 2), uV.splice(2, 1));
				aNt.qR(new uR({
					uV: uV,
					value: value
				}, function(e9) {
					aOa(), aD.data.botDifficultyType = e9, 0 === aD.data.gameMode && 2 === e9 && (aD.data.botDifficultyType = 3), 3 !== aD.data.botDifficultyType || aD.data.botDifficultyData || (aD.data.botDifficultyData =
						new Uint8Array(aD.em)), 2 !== aD.data.botDifficultyType || aD.data.botDifficultyTeam || (aD.data.botDifficultyTeam = new Uint8Array(9)), t.u(25)
				})), qY.push(aNt)
			}(qY), 0 === aD.data.botDifficultyType) aOf(qY, -1);
		else if (2 === aD.data.botDifficultyType)
			for (var aB = 0; aB < aD.data.teamPlayerCount.length; aB++) aD.data.teamPlayerCount[aB] && aOf(qY, aB);
		else 3 === aD.data.botDifficultyType && ! function(qY) {
			var aNt = new qG;
			aNt.qJ("Data"), (aOX = new uu(0, 1, 0, 1)).v1(bA.rc.a4L(aD.data.botDifficultyData, 8)), aNt.qU(aOX), qY.push(aNt)
		}(qY);
		return qY
	}())
}

function aOg(data) {
	var aNZ, aOh, aOi, aOj, aOk, aOl, aOm, colors, aOn, aOo, aOp = 0,
		aOq = 0,
		aOr = !1,
		aOs = !1,
		aOt = [1, 5, 60, 240, 1440, 10080, 43200];

	function aPN(lR, lS) {
		! function(lR, lS) {
			return aOh < lR && lR < aOh + aOj && aOi < lS && lS < aOi + aOk
		}(aOp = lR, aOq = lS) ? (aOr && (bf.dl = !0), aOr = !1) : (aOr = !0, bf.dl = !0)
	}
	this.show = function() {
		aOs = bj.eL.data[127].value, aNZ.show(), this.resize()
	}, this.ru = function() {
		aNZ.ru()
	}, this.resize = function() {
		aNZ.resize();
		var fA = h.k,
			uk = aNZ.uh(),
			aP2 = fA * uk.uj,
			fA = fA * uk.rx;
		aOl = bA.qd.tH(.06), aOm = bA.qd.tH(.04), aOh = bA.qd.tH(.06), aOi = fA + aOl, aOj = h.i - aOh - aOm, aOk = aP2 + fA - aOi - aOm
	}, this.ul = function() {
		aNZ.ul(),
			function() {
				var aB, aOz, gI, ew, f8, g = data.data,
					aP6 = 1,
					aP7 = .125,
					aP8 = aOs ? 65536 : 0;
				for (aB = 0; aB < g.length; aB++)
					for (aOz = g[aB].aOz, gI = aOz.length, aP6 = Math.max(gI, aP6), f8 = 0; f8 < gI; f8++) aP7 = Math.max(aOz[f8], aP7), aP8 = Math.min(aOz[f8], aP8);
				var nC = aOi + aOk,
					y6 = aOk / (aP7 - aP8),
					y5 = 1 / (aP6 - 1);
				for (um.lineWidth = bc.z8, aB = 0; aB < g.length; aB++) {
					for (aOz = g[aB].aOz, gI = aOz.length, ew = aOh, um.beginPath(), um.moveTo(ew + aOj, nC - y6 * (aOz[gI - 1] - aP8)), f8 = gI - 2; 0 <= f8; f8--) um.lineTo(ew + y5 * f8 * aOj, nC - y6 * (aOz[f8] - aP8));
					um.strokeStyle = colors[aB], um.stroke()
				}(function(aP8, aP7, nC, y6) {
					um.font = bA.qd.sS(0, .25 * aOh), bA.qd.textBaseline(um, 1), bA.qd.textAlign(um, 2), um.fillStyle = colors[0];
					for (var ew = .92 * aOh, aB = 0; aB < 3; aB++) {
						var fH = aP8 + aB * (aP7 - aP8) / 2;
						um.fillText((fH / 1e3).toFixed(3), ew, nC - y6 * (fH - aP8))
					}
				})(aP8, aP7, nC, y6),
				function(aP6) {
					var ey = aOi + aOk + .15 * aOm;
					um.font = bA.qd.sS(0, Math.min(.4 * aOm, .028 * h.i)), bA.qd.textBaseline(um, 0), bA.qd.textAlign(um, 2), um.fillStyle = colors[0], um.fillText(bA.a2T.a3G(aOn), aOh + aOj, ey), bA.qd.textAlign(um, 0), um.fillText(bA.a2T.a3G(
						new Date(aOo.getTime() - 6e4 * (aP6 - 1) * aOt[data.aOy])), aOh, ey)
				}(aP6),
				function(aP6, aP8, aP7) {
					if (aOr && !(aP6 < 2)) {
						for (var a8d, e9 = (aOp - aOh) / aOj * (aP6 - 1), aPB = Math.floor(e9), aPC = Math.floor(1 + e9), aPD = e9 - aPB, aPE = 1e5, aPF = -1, aPG = -1, aPH = aP7 - (aP7 - aP8) * (aOq - aOi) / aOk, g = data.data, aB = 0; aB < g
							.length; aB++) {
							var aCU, aOz = g[aB].aOz;
							aOz.length <= aPC || (aOz = aOz[aPB] + aPD * (aOz[aPC] - aOz[aPB]), (aCU = Math.abs(aPH - aOz)) < aPE && (aPE = aCU, aPF = aB, aPG = aOz))
						} - 1 !== aPF && (aP7 = aOi + aOk - (aPG - aP8) / (aP7 - aP8) * aOk, um.lineWidth = .5 * bc.z8, um.strokeStyle = colors[aPF], um.beginPath(), um.moveTo(aOh, aP7), um.lineTo(aOp, aP7), um.lineTo(aOp, aOi + aOk), um
						.stroke(), um.beginPath(), um.arc(aOp, aP7, .1 * aOh, 0, 2 * Math.PI), um.fillStyle = colors[aPF], um.fill(), aP8 = aOi + aOk + .15 * aOm, bA.qd.textAlign(um, 1), a8d = aP6 - 2 < e9 ? (a8d = aOo.getTime() - 6e4 * aOt[
								data.aOy], new Date(a8d + (e9 - (aP6 - 2)) * (aOn.getTime() - a8d))) : new Date(aOo.getTime() - 6e4 * (aP6 - e9 - 1) * aOt[data.aOy]), aP6 = bA.a2T.a3G(a8d), e9 = bA.qd.measureText(aP6), a8d = bL.hx(aOp, aOh +
								.5 * e9, aOh + aOj - .5 * e9), um.fillStyle = bA.color.nd(70, 50, 20), um.fillRect(a8d - .52 * e9, aOi + aOk, 1.04 * e9, .55 * aOm), um.fillStyle = colors[0], um.fillText(aP6, a8d, aP8), um.font = bA.qd.sS(0,
								.25 * aOh), bA.qd.textBaseline(um, 1), bA.qd.textAlign(um, 2), a8d = .92 * aOh, aP6 = (aPG / 1e3).toFixed(3), e9 = bA.qd.measureText(aP6), aP8 = a8d - 1.04 * e9, um.fillStyle = bA.color.nd(70, 50, 20), um
							.fillRect(aP8, aP7 - .1625 * aOh, aOh - aP8, .275 * aOh), um.fillStyle = colors[aPF], um.fillText(aP6, a8d, aP7))
					}
				}(aP6, aP8, aP7)
			}(), um.lineWidth = bc.z8, um.strokeStyle = bB.nl, um.beginPath(), um.moveTo(aOh, aOi), um.lineTo(aOh, aOi + aOk), um.lineTo(aOh + aOj, aOi + aOk), um.stroke();
		var aB, fontSize = .5 * aOl,
			g = (um.font = bA.qd.sS(0, fontSize), bA.qd.textBaseline(um, 1), bA.qd.textAlign(um, 0), data.data),
			ep = g.length,
			ey = aOi - .5 * aOl,
			qK = "";
		for (aB = 0; aB < ep; aB++) qK += g[aB].name + "  ";
		qK = qK.trim();
		var aPK = bA.qd.measureText(qK),
			ew = .5 * (h.i - aPK);
		for (aPK > h.i && (ew = 0, um.font = bA.qd.sS(0, h.i / aPK * fontSize)), aB = 0; aB < ep; aB++) um.fillStyle = colors[aB], um.fillText(g[aB].name, ew, ey), ew += bA.qd.measureText(g[aB].name + "  ")
	}, this.h2 = function(lR, lS) {
		aPN(lR, lS)
	}, this.a1e = function(lR, lS) {
		aPN(lR, lS)
	}, this.a2C = function(fA) {
		2 === fA && aNZ.ud[0].qu()
	};
	var aB, dt, a3E, hh, es = data.data,
		ep = es.length,
		max = 1;
	for (aB = 0; aB < ep; aB++) max = Math.max(max, es[aB].aOz.length);
	for (aB = 0; aB < ep; aB++)
		for (; es[aB].aOz.length < max;) es[aB].aOz.unshift(0);
	dt = new Date, a3E = 6e4 * dt.getTimezoneOffset(), hh = dt.getTime() - a3E, aOn = new Date(hh), 6 === data.aOy ? function(dt, a3E) {
		var aP1 = dt.getUTCFullYear(),
			dt = dt.getUTCMonth() + 1;
		aOo = dt < 12 ? new Date(Date.UTC(aP1, dt) - a3E) : new Date(Date.UTC(aP1 + 1, 0) - a3E)
	}(dt, a3E) : (a3E = 6e4 * aOt[data.aOy], aOo = data.aOy <= 4 ? new Date(hh + a3E - dt.getTime() % a3E) : new Date(hh + a3E - (dt.getTime() + 2592e5) % a3E)), hh = bA.color, colors = [bB.nl, hh.nd(255, 0, 0), hh.nd(0, 200, 0), hh.nd(80, 80,
		255), hh.nd(255, 255, 0), hh.nd(255, 0, 255), hh.nd(0, 255, 255), hh.nd(255, 140, 0), hh.nd(128, 128, 128), hh.nd(0, 255, 140)], aNZ = new uW(L(286) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.aOy] + ", " + bA.a2T.a3D(aOn), [
		new w("⬅️ " + L(37), function() {
			t.u(1)
		}), new w(L(287), function() {
			t.u(14)
		})
	], !1)
}

function aNF() {
	var aNZ, aNa, qY;
	this.show = function() {
		aNZ.show(), this.resize()
	}, this.ru = function() {
		aNZ.ru()
	}, this.resize = function() {
		aNZ.resize(), aNa.resize()
	}, this.a2C = function(fA) {
		2 === fA && aNZ.ud[0].qu()
	}, aNZ = new uW(L(288), [new w("⬅️ " + L(37), function() {
		t.aNW(13)
	})]), aNa = new qW(aNZ.uc, ((qY = []).push(function() {
		var aNt = new qG,
			aO1 = (aNt.qJ(L(289)), aNt.qL(L(290)), new w(L(291), function() {
				bj.s5.s6(130, 0), t.y.aPS()
			}, 0, 0, 1)),
			rQ = new rR(bj.eL.data[126], 0, function() {
				aO1.button.click()
			});
		return aNt.qU(rQ), rQ.e.placeholder = "a,b,c", rQ.e.style.marginTop = "0.5em", aNt.qU(new s8([aO1.button])), aNt
	}()), qY.push(function() {
		var aNt = new qG,
			aO1 = new w(L(291), function() {
				bj.s5.s6(130, 1), t.y.aPS()
			}, 0, 0, 1),
			aPT = new rR(bj.eL.data[129], 1, function() {
				aPT.e.focus()
			}),
			aPU = new rR(bj.eL.data[128], 1, function() {
				aO1.button.click()
			});
		return aNt.qJ(L(292)), aNt.qU(aPU), aPU.e.style.marginBottom = "0.5em", aNt.qJ(L(293)), aNt.qU(aPT), aNt.qU(new s8([aO1.button])), aNt
	}()), qY.push(function() {
		var aNt = new qG;
		return aNt.qJ(L(294)), bj.eL.data[125].uV = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], aNt.qR(new uR(bj.eL.data[125])), aNt
	}()), qY.push(function() {
		var aNt = new qG;
		return aNt.qJ(L(295)), aNt.qU(new s2(bj.eL.data[127], L(296))), aNt
	}()), qY))
}

function aNE() {
	var aNZ, aPV, aOj, aPW, aPX, aPY, colors = [0, 0, 0],
		aPZ = -1;

	function aPc(aB) {
		var aPd = aPV.ey + aB * (bc.gap + aPY);
		um.fillStyle = "rgb(" + (0 === aB ? 150 : 2 === aB ? 30 : 0) + "," + (1 === aB ? 130 : 2 === aB ? 30 : 0) + "," + (2 === aB ? 220 : 0) + ")", um.fillRect(aPW, aPd, colors[aB] * aPX, aPY), um.strokeStyle = bB.nl, um.strokeRect(aPW, aPd, aPX,
			aPY), um.fillStyle = bB.nl, um.font = bA.qd.sS(0, .32 * aPY), bA.qd.textBaseline(um, 1), bA.qd.textAlign(um, 0), um.fillText(L(0 === aB ? 299 : 1 === aB ? 300 : 301) + aPa(aB), aPW + bc.gap, aPd + .53 * aPY)
	}

	function aPa(aB, aPe) {
		return aPe = aPe || 256, bL.hx(Math.floor(aPe * colors[aB]), 0, aPe - 1)
	}

	function a28(lR, lS) {
		return !(lR < aPW || lS < aPV.ey || lR > aPV.ew + aPV.i || lS > aPV.ey + aPV.j)
	}
	this.show = function() {
		var fH = bj.eL.data[121].value;
		colors[0] = (fH >> 12) / 63, colors[1] = (fH >> 6 & 63) / 63, colors[2] = (63 & fH) / 63, aNZ.show(), this.resize()
	}, this.ru = function() {
		bj.s5.s6(121, (aPa(0, 64) << 12) + (aPa(1, 64) << 6) + aPa(2, 64)), aNZ.ru()
	}, this.resize = function() {
		aNZ.resize(), aPV.resize();
		var fA = h.k,
			uk = aNZ.uh(),
			aPb = (aPV.ey = Math.max(aPV.ey, fA * uk.rx + bc.gap), fA * uk.uj - 2 * bc.gap);
		aPV.j = Math.min(aPV.j, aPb), aPV.i = 2 * aPV.j, aPV.ey = fA * uk.rx + .5 * (fA * uk.uj - aPV.j), aPV.ew = .5 * (h.i - aPV.i), aOj = .25 * aPV.i, aPW = aPV.ew + aOj + bc.gap, aPX = aPV.i - aOj - bc.gap, aPY = (aPV.j - 2 * bc.gap) / 3
	}, this.ul = function() {
		var e8, tG, f9;
		aNZ.ul(), um.lineWidth = bc.z8, e8 = aPa(0), tG = aPa(1), f9 = aPa(2), um.fillStyle = "rgb(" + e8 + "," + tG + "," + f9 + ")", um.fillRect(aPV.ew, aPV.ey, aOj, aPV.j), um.strokeStyle = bB.nl, um.strokeRect(aPV.ew, aPV.ey, aOj, aPV.j), um
			.fillStyle = e8 + tG + f9 < 306 && tG < 150 ? bB.nl : bB.nc, bA.qd.textBaseline(um, 1), bA.qd.textAlign(um, 1), um.font = bA.qd.sS(0, .1 * aPV.j), um.rotate(-Math.PI / 2), um.fillText(L(298), -aPV.ey - .5 * aPV.j, aPV.ew + .5 * aOj),
			um.setTransform(1, 0, 0, 1, 0, 0), aPc(0), aPc(1), aPc(2)
	}, this.h2 = function(lR, lS) {
		a28(lR, lS) && (aPZ = bL.hx(Math.floor((lS - aPV.ey) / (aPY + .75 * bc.gap)), 0, 2), colors[aPZ] = bL.hx((lR - aPW) / aPX, 0, 1), bf.dl = !0)
	}, this.a1e = function(lR) {
		-1 !== aPZ && (colors[aPZ] = bL.hx((lR - aPW) / aPX, 0, 1), bf.dl = !0)
	}, this.a1h = function(lR, lS, deltaY) {
		a28(lR, lS) && (lR = bL.hx(Math.floor((lS - aPV.ey) / (aPY + .75 * bc.gap)), 0, 2), colors[lR] = bL.hx(colors[lR] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), bf.dl = !0)
	}, this.a22 = function() {
		0 <= aPZ && (aPZ = -1, bf.dl = !0)
	}, this.a2C = function(fA) {
		2 === fA && aNZ.ud[0].qu()
	}, aNZ = new uW(L(297), [new w("⬅️ " + L(37), function() {
		t.y.aCO()
	})], !1), aPV = new rE([.5, .25], [.5, .5], 1)
}

function aNM() {
	var aOV, aOW, aOX, rC;

	function aOY() {
		aOa(), 1 !== aD.data.colorsType && (aD.data.colorsData = null), t.aNX()[19] = null, t.a1K()
	}

	function aPf() {
		aOa(), t.u(21)
	}

	function aOa() {
		1 === aD.data.gameMode ? aD.a4c.a4h() : 0 === aD.data.gameMode && 1 === aD.data.colorsType && bA.ql.a2o(aOX.v3(), aD.data.colorsData, 262143)
	}
	this.show = function() {
		aOV.show(), this.resize()
	}, this.ru = function() {
		aOV.ru()
	}, this.resize = function() {
		aOV.resize(), aOW.resize()
	}, this.a2C = function(fA) {
		2 === fA && aOV.ud[0].qu()
	}, rC = [new w("⬅️ " + L(37), aOY)], 1 === aD.data.gameMode && rC.push(new w(L(302), aPf, 1, 1)), aOV = new uW(L(303), rC), aOW = new qW(aOV.uc, (function(qY) {
		var aNt = new qG;
		aNt.qJ(L(279)), 0 === aD.data.gameMode && (aNt.qR(new uR({
			uV: [L(304), L(282)],
			value: aD.data.colorsType
		}, function(e9) {
			aOa(), aD.data.colorsType = e9, 1 !== aD.data.colorsType || aD.data.colorsData && aD.data.colorsData.length === aD.em || (aD.data.colorsData = new Uint32Array(aD.em)), t.u(21)
		})), aNt.qU(new sI));
		aNt.qU(new s2({
			value: aD.data.selectableColor
		}, L(305), function(value) {
			aD.data.selectableColor = value
		})), qY.push(aNt)
	}(rC = []), 0 === aD.data.gameMode ? 1 === aD.data.colorsType && function(qY) {
		var aNt = new qG;
		aNt.qJ("Data"), (aOX = new uu(0, 1, 0, 1)).v1(bA.rc.a4L(aD.data.colorsData, 1)), aNt.qU(aOX), qY.push(aNt)
	}(rC) : (aD.a4c.a4h(), rC.push(function() {
		var aNt = new qG;
		aNt.qJ(L(285));
		for (var aB = 0; aB < bg.a0V.length; aB++) {
			var hh = (aB + 1) % bg.a0V.length,
				e = aNt.qP((0 == hh ? "" : "Team ") + bg.a0V[hh]);
			aB && (e.style.marginTop = "0.5em"), aNt.qU(new rR({
				e9: -1,
				value: aD.data.teamPlayerCount[hh]
			}, 1, 0, function(e) {
				aOV.ud[1].qx(0);
				var playerCount = bL.hx(Math.floor(e.target.value), 0, 512);
				e.target.value = playerCount, aD.data.teamPlayerCount[e.target.aPh] = playerCount
			})).e.aPh = hh
		}
		return aNt
	}())), rC))
}

function st(id, a3y, aPi) {
	var aNZ, aPj;

	function aPo() {
		aPj.qZ.innerHTML += "<br>" + L(308)
	}

	function aPz() {
		var f9 = 1;
		t.u(4, 1, new v(L(309), L(310), !1, [new w("🔄 Reload", function() {
			f9 && (setTimeout(function() {
				t.u(1)
			}, 5e3), a0.a1.a2()), f9 = 0
		}, bB.o8)]))
	}

	function aPn() {
		bD.a7(48), bD.a8(24, Math.floor(bL.pow(24) * Math.random())), bD.a8(24, Math.floor(bL.pow(24) * Math.random())), bH.dd(bD.aC), bj.s5.s6(110, bF.sv.sw(bF.sv.sx(8))), b0.aFG.aQ2()
	}
	this.aPk = !0, this.aPl = id, this.show = function() {
		aNZ.show(), this.resize(), 15 === id ? (b0.y.aPm(id) ? aPn : aPo)() : 16 === id ? b0.y.aPm(id) ? b0.aCK.aPp(2) : aPo() : 17 === id ? b0.y.aPm(id) ? b0.aCK.aPp(3) : aPo() : 18 === id ? (b0.y.close(0, 3253), b0.y.aG8(0, id), aPo()) : 21 ===
			id ? b0.y.aPm(id) ? b0.aPq.aPr(a3y.tB, a3y.tC, a3y.tD) : aPo() : 22 === id ? b0.y.aPm(id) ? b0.aPq.aPs(a3y.tB, a3y.aPt, a3y.aPu) : aPo() : 23 === id ? b0.y.aPm(id) ? b0.aPq.aPv(a3y.aOy, a3y.a0p) : aPo() : 24 === id ? b0.y.aPm(id) ? b0
			.aPq.aPw(a3y.aOy, a3y.tC, a3y.tD) : aPo() : 25 === id ? b0.y.aPm(id) ? b0.aFG.aOH(a3y) : aPo() : 28 === id ? b0.y.aPm(id) ? b0.aPq.aPx(a3y.tB, a3y.aPt, a3y.aPu) : aPo() : 29 === id ? b0.y.aPm(id) ? b0.aFG.aPy(a3y) : aPo() : 30 ===
			id && (b0.y.aPm(id) ? b7.aCI() || aPz() : aPo())
	}, this.aQ0 = function() {
		15 === id ? aPn() : 16 === id ? b0.aCK.aPp(2) : 17 === id ? b0.aCK.aPp(3) : 18 === id ? t.u(8, this.aN5, new st(16)) : 21 === id ? b0.aPq.aPr(a3y.tB, a3y.tC, a3y.tD) : 22 === id ? b0.aPq.aPs(a3y.tB, a3y.aPt, a3y.aPu) : 23 === id ? b0.aPq
			.aPv(a3y.aOy, a3y.a0p) : 24 === id ? b0.aPq.aPw(a3y.aOy, a3y.tC, a3y.tD) : 25 === id ? b0.aFG.aOH(a3y) : 28 === id ? b0.aPq.aPx(a3y.tB, a3y.aPt, a3y.aPu) : 29 === id ? b0.aFG.aPy(a3y) : 30 === id ? b7.aCI() || aPz() : 1e3 === id && (
				this.aPl = id = 25, b0.aFG.aOH(a3y))
	}, this.aCN = function(code, bu, data) {
		!bu && code !== id || (15 === code || 16 === code ? t.u(7, this.aN5) : 17 === code ? (b0.y.close(0, 3252), bj.y.vk(0), bj.eL.data[117].uV && 0 < bj.eL.data[117].uV.length ? (bu = bj.y.vl(0), bj.s5.s6(105, bu.sq), bj.s5.s6(106, bu
			.password), t.u(8, this.aN5, new st(16))) : (bj.s5.s6(105, ""), t.y.aCO())) : 21 === code ? t.u(10, this.aN5, new aQ1(data)) : 23 === code ? t.u(13, this.aN5, new aOg({
			data: data,
			aOy: a3y.aOy
		})) : 25 === code ? (t.y.aNG.sq = a3y.sq, bj.vB.mY(a3y.sq), t.u(15, this.aN5)) : 30 === code && (data ? t.u(1) : aPz()))
	}, this.ru = function() {
		aNZ.ru()
	}, this.resize = function() {
		aNZ.resize(), aPj.resize()
	}, this.a2C = function(fA) {
		2 === fA && aNZ.ud[0].qu()
	}, aNZ = new uW(L(306), [new w("⬅️ " + L(37), function() {
		aPi ? t.u(29) : t.y.aCO()
	})]), aPj = new s7(aNZ.uc, L(307))
}

function aNK() {
	var aOV, aOW, qY;

	function aQ5() {
		var gI;
		1 === aD.data.gameMode ? (aD.data.teamPlayerCount || (aD.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), aD.a4c.a4h()), gI = bA.ql.a2i(aD.data.teamPlayerCount, 0), aD.data.numberTeams = gI) : (2 === aD.data
			.botDifficultyType && (aD.data.botDifficultyType = 0), 1 === aD.data.spawningType && (aD.data.spawningType = 0))
	}

	function aOY() {
		1 !== aD.data.gameMode && (aD.data.teamPlayerCount = null), aQ7(), aD.data.canvas = null, t.u(5, 5)
	}

	function aQ7() {
		b9.px.dd(), bj.s5.s6(156, b9.a4s.zc())
	}

	function aQ3() {
		aD.data.isReplay = 0, aQ7(), aD.a4c.a53(), aa.aGJ(), aD.a4c.a50(), aD.data.canvas = 2 === aD.data.mapType ? bS.wh : null, aD.a4g(), aD.a4e = 1
	}

	function aQJ() {
		aQ5();
		for (var g = [aQA(), aQB(), aQC()], aB = 3; aB < 6; aB++) t.removeChild(aOW.qZ, aOW.qa[aB].qI), aOW.qa[aB] = g[aB - 3], aOW.qZ.appendChild(aOW.qa[aB].qI);
		aOW.resize()
	}

	function aQA() {
		var aQK, aNt = new qG;
		return aNt.qJ(L(303)), aQK = 0 === aD.data.gameMode ? [L(304), L(282)][aD.data.colorsType] : aD.data.numberTeams + " Team" + (1 === aD.data.numberTeams ? "" : "s"), aNt.qP(aQK), aNt.qU(new s8([new w(L(314), function() {
			t.u(21)
		}).button])), aNt
	}

	function aQB() {
		var aNt = new qG,
			g = (aNt.qJ(L(62)), [L(281) + ": " + aE.kN[aD.data.botDifficultyValue], L(283), L(284), L(282)]);
		return aNt.qP(g[aD.data.botDifficultyType]), aNt.qU(new s8([new w(L(314), function() {
			t.u(25)
		}).button])), aNt
	}

	function aQC() {
		var aNt = new qG,
			g = (aNt.qJ("Spawning"), [L(304), L(316), L(282)]);
		return aNt.qP(g[aD.data.spawningType]), aNt.qU(new s8([new w(L(314), function() {
			t.u(24)
		}).button])), aNt
	}
	this.show = function() {
		aOV.show(), this.resize(), aOV.uc.scrollTop = t.y.aIN[0]
	}, this.ru = function() {
		t.y.aIN[0] = aOV.uc.scrollTop, aOV.ru()
	}, this.resize = function() {
		aOV.resize(), aOW.resize()
	}, this.a2C = function(fA) {
		2 === fA && aOV.ud[0].qu()
	}, aOV = new uW("🔧 " + L(311), [new w("⬅️ " + L(37), aOY), new w(L(312), aQ3)]), aQ5(), aD.data.canvas || (2 === aD.data.mapType ? aD.data.canvas = bS.wh : 1 === aD.data.mapType ? aD.data.canvas = bS.aL0(bS.a51(aD.data), 0).wh : (aD.data
		.mapType = 0, aD.data.passableWater = aD.data.passableMountains = 1, aD.data.canvas = bS.aL0(bS.a51(aD.data), aD.data.mapSeed).wh)), aOW = new qW(aOV.uc, (function(qY) {
		var aNt = new qG,
			a2y = (aNt.qJ(L(313)), aD.data.canvas);
		a2y.style.width = "100%", aNt.qU({
			e: a2y
		}), aNt.qU(new s8([new w(L(314), function() {
			t.u(20)
		}).button])), qY.push(aNt)
	}(qY = []), function(qY) {
		var aNt = new qG;
		aNt.qJ(L(285)), aNt.qU(new rR({
			e9: -1,
			value: aD.data.playerCount
		}, 1, 0, function(e) {
			var playerCount = bL.hx(Math.floor(e.target.value), 1, 512);
			e.target.value = aD.data.playerCount = playerCount, 1 === aD.data.gameMode && (e = bA.ql.a2i(aD.data.teamPlayerCount, 0), aD.a4c.a4h(), bA.ql.a2i(aD.data.teamPlayerCount, 0) !== e) && aQJ()
		})), qY.push(aNt)
	}(qY), function(qY) {
		var aNt = new qG;
		aNt.qJ(L(315)), aNt.qR(new uR({
			uV: ["Battle Royale", "Teams"],
			value: aD.data.gameMode
		}, function(e9) {
			aD.data.gameMode !== e9 && (aD.data.gameMode = e9, aQJ())
		})), qY.push(aNt)
	}(qY), qY.push(aQA()), qY.push(aQB()), qY.push(aQC()), function(qY) {
		var aNt = new qG,
			g = (aNt.qJ(L(317)), [L(318), L(319), L(282)]);
		aNt.qP(g[aD.data.playerNamesType]), aNt.qU(new s8([new w(L(314), function() {
			t.u(23)
		}).button])), qY.push(aNt)
	}(qY), function(qY) {
		var aNt = new qG,
			g = (aNt.qJ(L(278)), [L(280), L(281) + ": " + aD.data.aIncomeValue, L(282)]);
		aNt.qP(g[aD.data.aIncomeType]), aNt.qU(new s8([new w(L(314), function() {
			t.u(22)
		}).button])), qY.push(aNt)
	}(qY), function(qY) {
		var aNt = new qG,
			g = (aNt.qJ(L(320)), [L(280), L(281) + ": " + aD.data.tIncomeValue, L(282)]);
		aNt.qP(g[aD.data.tIncomeType]), aNt.qU(new s8([new w(L(314), function() {
			t.u(26)
		}).button])), qY.push(aNt)
	}(qY), function(qY) {
		var aNt = new qG,
			g = (aNt.qJ(L(321)), [L(280), L(281) + ": " + aD.data.iIncomeValue, L(282)]);
		aNt.qP(g[aD.data.iIncomeType]), aNt.qU(new s8([new w(L(314), function() {
			t.u(27)
		}).button])), qY.push(aNt)
	}(qY), function(qY) {
		var aNt = new qG,
			g = (aNt.qJ(L(322)), [L(280), L(281) + ": " + aD.data.sResourcesValue, L(282)]);
		aNt.qP(g[aD.data.sResourcesType]), aNt.qU(new s8([new w(L(314), function() {
			t.u(28)
		}).button])), qY.push(aNt)
	}(qY), function(qY) {
		var aNt = new qG;
		aNt.qJ(L(323)), aNt.qU(new s8([new w(L(324), function() {
			t.x(), aD.a4c.a54(), t.y.aIN[0] = 0, t.u(19)
		}).button])), aNt.qU(new s8([new w(L(325), function() {
			bm.aIC()
		}).button])), aNt.qU(new s8([new w(L(326), function() {
			return bm.aIE(), !0
		}).button])), qY.push(aNt)
	}(qY), qY))
}

function aNV() {
	var aOV, rW = !0;

	function rn(rm, a58) {
		var qI = document.createElement("div"),
			aQM = document.createElement("span"),
			aQN = document.createElement("span");
		aQM.textContent = aW.aBC(a58.eO) + ":", aQM.style.color = bB.o0, aQM.style.paddingRight = "0.4em", aQM.style.display = "table-cell", aQM.style.width = "6ch", aQM.style.textAlign = "end", qI.appendChild(aQM), aQN.textContent = a58.qK, qI
			.appendChild(aQN), qI.style.display = "table", a58.pM && function(qI, pM) {
				{
					var aHy;
					pM >= 1024 - aj.rt.yv ? ((aHy = document.createElement("img")).src = aj.wk.yj[pM - 1024 + aj.rt.yv].toDataURL(), aHy.style.width = "1.5em", aHy.style.height = "1.5em", aHy.style.verticalAlign = "middle", qI.appendChild(aHy)) : ((
						aHy = document.createElement("span")).textContent = aj.rt.zA(pM), aHy.style.display = "inline-block", aHy.style.fontSize = "1.5em", aHy.style.lineHeight = "1em", aHy.style.verticalAlign = "middle", qI.appendChild(aHy))
				}
			}(qI, a58.pM), rm.appendChild(qI)
	}

	function rq() {
		rW && (aOV.uc.scrollTop = aOV.uc.scrollHeight)
	}
	this.clear = function() {
		aOV.uc.textContent = ""
	}, this.show = function() {
		this.clear();
		for (var a61 = bq.a5C(), ep = a61.length, rm = document.createDocumentFragment(), aB = 0; aB < ep; aB++) rn(rm, a61[aB]);
		aOV.uc.appendChild(rm), rq(), aOV.show(), this.resize(), rW = !0, rq()
	}, this.ru = function() {
		aOV.ru()
	}, this.resize = function() {
		aOV.resize(), aOV.uc.style.padding = "0.4em " + bA.qd.qm(bc.qj)
	}, this.a2C = function(fA) {
		2 === fA && aOV.ud[0].qu()
	}, this.yc = function(a58) {
		var rm = document.createDocumentFragment();
		rn(rm, a58), aOV.uc.appendChild(rm), rq()
	}, (aOV = new uW(L(327), [new w("⬅️ " + L(37), function() {
		t.aNW(1)
	})])).uc.style.overflowY = "auto", aOV.uc.addEventListener("scroll", function() {
		rW = aOV.uc.scrollTop >= aOV.uc.scrollHeight - aOV.uc.clientHeight - 2
	})
}

function aNS() {
	var aOV, aOW, aOX, qY;

	function aOY() {
		aOa(), 2 !== aD.data.iIncomeType && (aD.data.iIncomeData = null), t.aNX()[19] = null, t.a1K()
	}

	function aOa() {
		2 === aD.data.iIncomeType && bA.ql.a2o(aOX.v3(), aD.data.iIncomeData, 255)
	}
	this.show = function() {
		aOV.show(), this.resize()
	}, this.ru = function() {
		aOV.ru()
	}, this.resize = function() {
		aOV.resize(), aOW.resize()
	}, this.a2C = function(fA) {
		2 === fA && aOV.ud[0].qu()
	}, aOV = new uW(L(321), [new w("⬅️ " + L(37), aOY)]), aOW = new qW(aOV.uc, (function(qY) {
		var aNt = new qG;
		aNt.qJ(L(279)), aNt.qR(new uR({
			uV: [L(280), L(281), L(282)],
			value: aD.data.iIncomeType
		}, function(e9) {
			aOa(), 2 !== e9 || aD.data.iIncomeData || (aD.data.iIncomeData = new Uint8Array(aD.em), aD.data.iIncomeData.fill(32)), aD.data.iIncomeType = e9, t.u(27)
		})), qY.push(aNt)
	}(qY = []), function(qY) {
		var aNt;
		1 === aD.data.iIncomeType && ((aNt = new qG).qJ("Value"), aNt.qU(new rR({
			e9: -1,
			value: aD.data.iIncomeValue
		}, 1, 0, function(e) {
			var value = bL.hx(Math.floor(e.target.value), 0, 255);
			e.target.value = aD.data.iIncomeValue = value
		})), qY.push(aNt))
	}(qY), function(qY) {
		var aNt;
		2 === aD.data.iIncomeType && ((aNt = new qG).qJ("Data"), (aOX = new uu(0, 1, 0, 1)).v1(bA.rc.a4L(aD.data.iIncomeData, 4)), aNt.qU(aOX), qY.push(aNt))
	}(qY), qY))
}

function aNA() {
	var aQP, aQQ, aPV, rQ, aQR;
	this.aGr = new t1, aPV = new rE([.45, .27], [.5, .5], 2 / 3), aQQ = [new w("⚔️<br>" + L(328), function() {
			aQS(0)
		}, bB.oE), new w("🗡️<br>" + L(311), function() {
			aQS(1)
		}, bB.oW), new w("🔑<br>" + L(329), function() {
			aQS(2)
		}, bB.oo), new w("☰<br>" + L(330), function() {
			aQS(3)
		}, bB.ny), new w("", function() {
			t.u(12)
		}, bB.nh, !1),
		new w("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new w("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], rQ = new rR(bj.eL.data[122]);
	for (var aB = 0; aB < aQQ.length; aB++) aQQ[aB].button.style.position = "absolute";

	function aQS(e9) {
		a0.a1.setState(10), ab.tK() || ab.aGi(), 0 === e9 ? t.y.a4v() : 1 === e9 ? (b9.aIX.wS(bj.eL.data[156].value, 1) || aD.a4c.a54(), t.u(19)) : 2 === e9 ? 0 !== a0.id || bj.eL.data[140].value ? t.u(8, t.ss, new st(16)) : t.y.aQT(t.ss, 16) : 3 ===
			e9 && t.u(1)
	}
	rQ.e.style.position = "absolute", rQ.e.style.textAlign = "center", rQ.e.placeholder = L(331), this.show = function() {
		aa.setState(0), a0.a1.setState(12), this.aGr.show(), aQQ[4].qx(bA.color.a35(bj.eL.data[121].value)), this.resize(), document.body.appendChild(rQ.e);
		for (var aB = 0; aB < aQQ.length; aB++) document.body.appendChild(aQQ[aB].button);
		1 !== a0.id || a0.dw < 5 || (aQR && bf.eO > aQR + 144e5 ? a0.vV.setState(14) : aQR = bf.eO)
	}, this.ru = function() {
		this.aGr.ru(), t.removeChild(document.body, rQ.e);
		for (var aB = 0; aB < aQQ.length; aB++) t.removeChild(document.body, aQQ[aB].button)
	}, this.resize = function() {
		this.aGr.resize(), this.aGr.resize(), aPV.resize();
		var gap = .5 * bc.gap,
			tp = 10 / 99 * .84 * aPV.i,
			aQW = .16 * aPV.j,
			a9B = .19 * aPV.i,
			ew = aPV.ew + a9B,
			tp = aPV.ey + tp + 3 * gap,
			i = .5 * (aPV.i - gap) - a9B,
			a9B = aPV.i - 2 * a9B - aQW - gap,
			a9B = (bA.qd.tI(rQ.e, ew, tp, a9B, aQW), bA.qd.tI(aQQ[4].button, ew + a9B + gap, tp, aQW, aQW), .5 * (aPV.ey + aPV.j - (tp += aQW + gap) - gap));
		bA.qd.tI(aQQ[0].button, ew, tp, i, a9B), bA.qd.tI(aQQ[1].button, ew + i + gap, tp, i, a9B), bA.qd.tI(aQQ[2].button, ew, tp + a9B + gap, i, a9B), bA.qd.tI(aQQ[3].button, ew + i + gap, tp + a9B + gap, i, a9B);
		bA.qd.tI(aQQ[5].button, ew, tp + a9B * 2 + gap * 2, i * 2 + gap, a9B / 3);
		bA.qd.tI(aQQ[6].button, ew, tp + a9B * 2.33 + gap * 3, i * 2 + gap, a9B / 3);
		for (var aB = 0; aB < aQQ.length; aB++) aQQ[aB].button.style.font = bA.qd.sS(0, bA.qd.a3L(.065 * aPV.j)), bA.qd.qn(aQQ[aB].button, 5);
		rQ.e.style.font = bA.qd.sS(0, bA.qd.a3L(.08 * aPV.j)), bA.qd.qn(rQ.e, 5)
	}, this.ul = function() {
		if (aa.aGN(), aT.ul(), ep = Math.floor((a0.a1.hy() ? .018 : .0137) * h.hz), um.font = bA.qd.sS(0, Math.max(5, ep)), bA.qd.textBaseline(um, 0), bA.qd.textAlign(um, 2), um.fillStyle = bB.nl, um.fillText(l.dw, h.i, 0), text = "Win count: " +
			__fx.wins.count, textLength = um.measureText(text).width, ep = Math.max(5, ep), um.textAlign = "left", um.textBaseline = "middle", um.fillText(text, um.canvas.width - textLength - ep / 2, 2 * ep), aO.ul(), bY.ul(), ab.tK()) {
			um.imageSmoothingEnabled = !1;
			var text = ab.aGQ("territorial.io"),
				textLength = .84 * aPV.i / text.width;
			um.setTransform(textLength, 0, 0, textLength, aPV.ew + .08 * aPV.i, aPV.ey), aQP = aQP || bA.a2P.a3w(text, bA.a2P.a42, [0, 0, 0]);
			for (var ew = -1; ew <= 1; ew += 2)
				for (var ey = -1; ey <= 1; ey += 2) um.drawImage(aQP, ew, ey);
			um.drawImage(text, 0, 0), um.imageSmoothingEnabled = !0;
			var ep = ab.aGQ("logo"),
				aQZ = .6666 * textLength * text.height / ep.height,
				nO = .5 * h.i,
				nP = aPV.ey + .5 * textLength * text.height - .5 * aQZ * ep.height;
			um.setTransform(aQZ, 0, 0, aQZ, nO - .6 * textLength * text.width, nP), um.drawImage(ep, 0, 0), um.setTransform(aQZ, 0, 0, aQZ, nO + .6 * textLength * text.width - aQZ * ep.width, nP), um.drawImage(ep, 0, 0), um.setTransform(1, 0, 0,
				1, 0, 0), um.imageSmoothingEnabled = !0
		}
	}
}

function aNH() {
	var aNZ, aQa, aQb, uX;

	function aQc(aB) {
		t.u(8, t.ss, new st(21, {
			tB: aB,
			tC: 0,
			tD: 10
		}))
	}
	this.show = function() {
		aNZ.show(), this.resize()
	}, this.ru = function() {
		aNZ.ru()
	}, this.resize = function() {
		aNZ.resize(), aQa.resize()
	}, this.a2C = function(fA) {
		2 === fA && aNZ.ud[0].qu()
	}, aQb = [new w(L(332), function() {
		aQc(1)
	}, 0, 0, 1), new w(L(333), function() {
		aQc(2)
	}, 0, 0, 1), new w(L(334), function() {
		aQc(3)
	}, 0, 0, 1), new w(L(335), function() {
		aQc(0)
	}, 0, 0, 1), new w(L(336), function() {
		aQc(9)
	}, 0, 0, 1), new w(L(337), function() {
		aQc(10)
	}, 0, 0, 1), new w(L(338), function() {
		aQc(11)
	}, 0, 0, 1)], uX = [new w("⬅️ " + L(37), function() {
		t.a1K()
	})], aNZ = new uW(L(339), uX), aQa = new rB(aQb, aNZ.uc)
}

function aCm(title, qQ, aQd) {
	var aNZ, aPj;
	this.show = function() {
		aNZ.show(), this.resize()
	}, this.ru = function() {
		aNZ.ru()
	}, this.resize = function() {
		aNZ.resize(), aPj.resize()
	}, this.a2C = function(fA) {
		2 === fA && aNZ.ud[0].qu()
	}, aQd = aQd || [new w("⬅️ " + L(37), function() {
		t.a1K()
	}, bB.oQ)], aNZ = new uW(title, aQd), aPj = new s7(aNZ.uc, qQ), bA.qd.textAlign(aNZ.uc.style, 1)
}

function aQ1(data) {
	var aNZ, aQe, fA, si;

	function aQf(jR) {
		var ep = data.data.length;
		if (ep) {
			for (var tC, max = min = parseInt(data.data[0][0]), aB = 1; aB < ep; aB++) var aEl = parseInt(data.data[aB][0]),
				min = Math.min(aEl, min),
				max = Math.max(aEl, max);
			tC = jR < 0 ? min + jR : max + 1, t.u(8, t.a5A().aN5, new st(21, {
				tB: data.tB,
				tC: tC,
				tD: tC + Math.abs(jR)
			}))
		}
	}
	this.show = function() {
			aNZ.show(), this.resize()
		}, this.ru = function() {
			aNZ.ru()
		}, this.resize = function() {
			aNZ.resize(), aQe.resize()
		}, this.a2C = function(fA) {
			2 === fA && aNZ.ud[0].qu()
		}, fA = data.data.length ? 0 : 1, fA = [new w("⬅️ " + L(37), function() {
			t.a1K()
		}), new w(L(340), function() {
			aQf(-10)
		}, fA, 0, 1), new w(L(341), function() {
			aQf(10)
		}, fA, 0, 1), new w(L(287), function() {
			t.u(11, 10, new aQg({
				tB: data.tB
			}))
		})], si = [L(342), L(343), L(344), L(345), L(346), L(347), L(348), L(349), L(350), L(351), L(337), L(338), "Audit Log"], aNZ = new uW(si[data.tB], fA),
		function() {
			var aB, es = {
					sc: []
				},
				sc = es.sc,
				aQi = data.data,
				ep = aQi.length;
			ep && 0 === aQi[0][0] && 0 <= (e9 = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5, 6, -1][data.tB]) && (t.y.tE[e9] = aQi[0][1]);
			var nN = [.1, .001, .01, 1, 100, 1, 1, .1, 100, .01, .01, .01, 1][data.tB],
				a48 = [1, 3, 2, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0][data.tB],
				e9 = [
					[L(352), L(353) + " ↗", L(354)],
					[L(352), L(355), L(356), L(357) + " ↗"],
					[L(352), L(353) + " ↗", L(356)],
					[L(352), L(353) + " ↗", L(356)],
					[L(358), L(359), L(360) + " ↗", L(361) + " ↗", L(115)],
					[L(358), L(359), L(362) + " ↗", L(363) + " ↗", L(364)],
					[L(358), L(359), L(365) + " ↗", L(366) + " ↗", L(367)],
					[L(358), L(359), L(362) + " ↗", L(363) + " ↗", L(368)],
					[L(358), L(359), L(360) + " ↗", L(361) + " ↗", L(115)],
					[L(352), L(353) + " ↗", L(356)],
					[L(352), L(353) + " ↗", L(369)],
					[L(352), L(353) + " ↗", L(356)],
					[L(358), L(359), L(360) + " ↗", L(361) + " ↗", L(370)]
				];
			if (es.si = e9[data.tB], es.sn = [
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
				][data.tB], 0 === data.tB || 2 === data.tB || 3 === data.tB || 9 === data.tB || 10 === data.tB || 11 === data.tB)
				for (aB = 0; aB < ep; aB++) sc.push([{
					fH: aQi[aB][0] + 1 + ".",
					dt: 0
				}, {
					fH: aQi[aB][1],
					dt: 1,
					sq: aQi[aB][4],
					sr: aQi[aB][3]
				}, {
					fH: (nN * aQi[aB][2]).toFixed(a48),
					dt: 0
				}]);
			else if (12 === data.tB)
				for (aB = 0; aB < ep; aB++) {
					var aQl = aQi[aB][3];
					sc.push([{
						fH: "" + aQi[aB][0],
						dt: 0
					}, {
						fH: "" + aQi[aB][4],
						dt: 0
					}, {
						fH: aQi[aB][5],
						dt: 1,
						sq: aQi[aB][1],
						sr: 0
					}, {
						fH: aQi[aB][6],
						dt: 1,
						sq: aQi[aB][2],
						sr: 0
					}, {
						fH: bo.eF(aQl),
						dt: 0
					}])
				} else if (1 === data.tB)
					for (aB = 0; aB < ep; aB++) sc.push([{
						fH: aQi[aB][0] + 1 + ".",
						dt: 0
					}, {
						fH: aQi[aB][1],
						dt: 0
					}, {
						fH: (nN * aQi[aB][2]).toFixed(a48),
						dt: 0
					}, {
						fH: aQi[aB][3],
						dt: 1,
						sq: aQi[aB][5],
						sr: aQi[aB][4]
					}]);
				else if (4 === data.tB || 5 === data.tB || 6 === data.tB || 7 === data.tB || 8 === data.tB)
				for (aB = 0; aB < ep; aB++) {
					var aQm = aQi[aB][5];
					4 === data.tB || 8 === data.tB ? "100%" === (aQm = (aQm % 64 * 100 / (aQm >> 6)).toFixed(0) + "%") && (4 === data.tB ? aQm += " (" + L(371) + ")" : aQm += " (" + L(372) + ")") : 5 === data.tB ? 32768 <= aQm && (aQm = -(aQm -
						32768)) : aQm = (nN * aQm).toFixed(a48), sc.push([{
						fH: "" + aQi[aB][0],
						dt: 0
					}, {
						fH: "" + aQi[aB][6],
						dt: 0
					}, {
						fH: aQi[aB][7],
						dt: 1,
						sq: aQi[aB][1],
						sr: aQi[aB][2]
					}, {
						fH: aQi[aB][8],
						dt: 1,
						sq: aQi[aB][3],
						sr: aQi[aB][4]
					}, {
						fH: "" + aQm,
						dt: 0
					}])
				}
			aQe = new sb(aNZ.uc, es)
		}()
}

function aQg(a3y) {
	var aNZ, aNa, qY;
	this.show = function() {
		aNZ.show(), this.resize()
	}, this.ru = function() {
		aNZ.ru()
	}, this.resize = function() {
		aNZ.resize(), aNa.resize()
	}, this.a2C = function(fA) {
		2 === fA && aNZ.ud[0].qu()
	}, aNZ = new uW(L(373), [new w("⬅️ " + L(37), function() {
		t.aNW(10)
	})]), aNa = new qW(aNZ.uc, ((qY = []).push(function() {
		var aO1, aNt = new qG,
			aPT = new rR(bj.eL.data[132], 1, function() {
				aO1.button.click()
			}),
			aPU = new rR(bj.eL.data[131], 1, function() {
				aPT.e.focus()
			});
		aNt.qJ(L(292)), aNt.qU(aPU), aPU.e.style.marginBottom = "0.8em", aNt.qJ(L(293)), aNt.qU(aPT);
		return aO1 = new w(L(291), function() {
			tC = Math.floor(aPU.e.value), tD = Math.floor(aPT.e.value);
			var tD, tC = {
				a2g: Math.min(tC, tD),
				aMg: Math.max(tC, tD)
			};
			t.u(8, t.a5B(10).aN5, new st(21, {
				tB: a3y.tB,
				tC: tC.a2g,
				tD: tC.aMg
			}))
		}, 0, 0, 1), aNt.qU(new s8([aO1.button])), aNt
	}()), qY.push(function() {
		var aO1, aNt = new qG,
			aPT = new rR(bj.eL.data[134], 1, function() {
				aO1.button.click()
			}),
			aPU = new rR(bj.eL.data[133], 0, function() {
				aPT.e.focus()
			});
		return aNt.qJ(1 === a3y.tB ? L(374) : L(375)), aNt.qU(aPU), aPU.e.style.marginBottom = "0.8em", aNt.qJ(L(376)), aNt.qU(aPT), aO1 = new w(L(291), function() {
			var aPt = aPU.e.value.slice(0, 20),
				aPu = Math.abs(Math.floor(aPT.e.value));
			t.u(8, t.a5B(10).aN5, new st(22, {
				tB: a3y.tB,
				aPt: aPt,
				aPu: aPu
			}))
		}, 0, 0, 1), aNt.qU(new s8([aO1.button])), aNt
	}()), qY.push(function() {
		var aO1, aNt = new qG,
			aPT = new rR(bj.eL.data[152], 1, function() {
				aO1.button.click()
			}),
			aPU = new rR(bj.eL.data[151], 0, function() {
				aPT.e.focus()
			});
		return aNt.qJ(L(377)), aNt.qU(aPU), aPU.e.style.marginBottom = "0.8em", aNt.qJ(L(376)), aNt.qU(aPT), aO1 = new w(L(291), function() {
			var aPt = aPU.e.value.slice(0, 5),
				aPu = Math.abs(Math.floor(aPT.e.value));
			t.u(8, t.a5B(10).aN5, new st(28, {
				tB: a3y.tB,
				aPt: aPt,
				aPu: aPu
			}))
		}, 0, 0, 1), aNt.qU(new s8([aO1.button])), aNt
	}()), qY))
}

function aNU() {
	var aQq, tO, aQt, tN, tQ, aQr = [new Array(4), [], new Array(2), new Array(2)],
		aQs = new Array(4),
		aQu = new Array(2),
		aQv = [L(61), L(336), L(378), L(379)];

	function aEX() {
		var a71 = aQq.tb.rQ.e.value.trim().slice(0, 127);
		a71.length < 1 || (aQq.tb.rQ.e.value = "", bn.aCp.a0E(a71))
	}

	function aQy(aR0) {
		bn.y.rh[3] = 1 - bn.y.rh[3], aQz(3, 1, bn.y.rh[3]), aR0 && b0.aEi.aEj(4), bn.y.rh[3] && bj.s5.s6(158, bn.y.rh[0])
	}

	function aQw(f8, f9) {
		bn.y.rh[f8] !== f9 && (0 === f8 && bn.y.rh[3] && aQy(0), aQz(f8, bn.y.rh[f8], 0), aQz(f8, f9, 1), bn.y.rh[f8] = f9, 0 === f8 ? (b0.aEi.aEj(2, f9), bn.y.rh[2] ? (aQq.tc.mY(), aQq.tb.re(1)) : aQq.tb.re(0), t.a5A().aEM(), t.a5A().aEL()) : 2 ===
			f8 && (0 === f9 ? (b0.aEi.aEj(0), aQq.tb.mY(), aQq.tk()) : (b0.aEi.aEj(1), aQq.tc.mY(), aQq.tl())))
	}

	function aQz(f8, f9, color) {
		aQq.te[f8].rC[f9].qx(color ? bB.oA : bB.oy)
	}

	function aR3(aDb) {
		return aDb < 7 ? aDb + 2 + " " + L(386) : 7 === aDb || 10 === aDb ? L(336) + " (Full-Sending: " + L(7 === aDb ? 387 : 388) + ")" : 8 === aDb ? "1v1" : L(389)
	}

	function aR4(fH) {
		var a74 = bL.du(fH, 60),
			fH = fH % 60;
		return (a74 < 10 ? "0" : "") + a74 + ":" + (fH < 10 ? "0" : "") + fH
	}
	this.aEt = function() {
		return aQq.tb
	}, this.aCp = function(sq) {
		aQw(2, 0);
		var qK = aQq.tb.rQ.e.value,
			sq = "@" + sq + " ";
		qK.length && !bA.rc.a3S(qK, " ") && (sq = " " + sq), aQq.tb.rQ.e.value = qK += sq, aQq.tb.rQ.e.focus()
	}, this.aEK = function() {
		aQq.tc.mY()
	}, this.aEM = function() {
		var aR2 = bn.y.rh[0],
			aR2 = bn.y.rj[aR2];
		bS.a7(aR2.eV, aR2.mapSeed), tO.rC[0].button.textContent = L(313) + ": " + bS.wX.wY[aR2.eV].name, tO.rC[1].button.textContent = L(315, 0, "Mode") + ": " + aR3(aR2.aDb), tO.rC[2].button.textContent = L(383) + ": " + bS.wX.wY[aR2.aFK].name,
			tO.rC[3].button.textContent = L(384, 0, "Next Mode") + ": " + aR3(aR2.aFL), tO.rC[4].button.textContent = L(385) + ": " + aR4(aR2.aEO), tO.resize()
	}, this.aEL = function() {
		var aR2 = bn.y.rh[0],
			ri = bn.y.rj[aR2];
		aQq.ti(ri.tj);
		for (var aB = 0; aB < bn.ty.tz.length; aB++) aQr[0][aB].rb.textContent = "" + bn.ty.tz[aB].length;
		var ty = bn.ty.tz[aR2],
			aR5 = ty.length,
			aR6 = bn.ty.u0[aR2];
		aQr[2][1].rb.textContent = "" + aR5, aQr[3][1].rb.textContent = "" + aR6, tO.rC[4].button.textContent = L(385) + ": " + aR4(ri.aEO);
		for (aB = 0; aB < 4; aB++) {
			var aR7 = bn.y.rj[aB];
			aQs[aB] ? 0 === aR7.tj && (aQs[aB].rb.textContent = bS.wX.wY[aR7.eV].name) : aQs[aB] = new ra(bS.wX.wY[aR7.eV].name, tN.rC[aB].button, 1, 1), bA.rc.startsWith(aQv[aB], "🏆 ") ? aR7.aDh || (aQv[aB] = aQv[aB].substring(3), tN.rC[aB]
				.button.textContent = aQv[aB], tN.rC[aB].button.appendChild(aQr[0][aB].rb), tN.rC[aB].button.appendChild(aQs[aB].rb)) : aR7.aDh && (aQv[aB] = "🏆 " + aQv[aB], tN.rC[aB].button.textContent = aQv[aB], tN.rC[aB].button
				.appendChild(aQr[0][aB].rb), tN.rC[aB].button.appendChild(aQs[aB].rb))
		}
		var ri = "",
			aR9 = "";
		0 === aR2 && (ri = bn.l1.aDv(ty, 0, aR5), aR9 = bn.l1.aDv(ty, 0, aR6)), aQt[0].rb.textContent = ri, aQt[1].rb.textContent = aR9, aQu[1].rb.textContent = "MP: " + bn.y.aEE[0] + "   SP: " + bn.y.aEE[1] + "   Lobby: " + bA.ql.a2t(bn.ty.tz)
	}, this.aEQ = function() {
		aQq.tb.mY()
	}, this.show = function() {
		aQq.show(), this.resize(), bn.message.show()
	}, this.ru = function() {
		aQq.ru(), bn.uL.ru(), bn.tw.ru(), bn.message.ru()
	}, this.resize = function() {
		aQq.resize(1 - bn.y.rh[2]), bn.message.resize()
	}, this.a2C = function(fA) {
		2 === fA ? bn.y.rh[3] ? aQy(1) : aQq.te[3].rC[0].qu() : fA < 2 && aQy(1)
	}, tN = new sB([new w(aQv[0], function() {
		return aQw(0, 0), 2
	}), new w(aQv[1], function() {
		return aQw(0, 1), 2
	}), new w(aQv[2], function() {
		return aQw(0, 2), 2
	}), new w(aQv[3], function() {
		return aQw(0, 3), 2
	})], bB.oy), tO = new sB([new w("", 0, 2), new w("", 0, 2), new w("", 0, 2), new w("", 0, 2), new w("", 0, 2)], bB.oz, 1);
	var aQx = new sB([new w(L(380), function() {
		return aQw(2, 0), 2
	}), new w(L(111), function() {
		return aQw(2, 1), 2
	})], bB.oy);
	tQ = new sB([new w(L(381), function() {
		t.x(), bn.uF(), b0.y.a1U(3240), t.u(5, 5)
	}), new w(L(382), function() {
		return aQy(1), 2
	})], bB.oy), aQq = new tM(tN, tO, aQx, tQ, aEX, bn.uL.aF3);
	for (var aB = 0; aB < 4; aB++) aQr[0][aB] = new ra("0", tN.rC[aB].button);
	aQr[2][1] = new ra("0", aQx.rC[1].button), aQr[3][1] = new ra("0", tQ.rC[1].button), aQt = [new ra("", aQx.rC[1].button, 1, 1), new ra("", tQ.rC[1].button, 1, 1)], aQz(0, bn.y.rh[0], 1), aQz(2, bn.y.rh[2], 1), (aQu = [new ra(L(285), aQq.tm(), 1,
		0), new ra("", aQq.tm(), 1, 1)])[0].rb.style.fontSize = "0.4em", aQu[1].rb.style.fontSize = "0.4em"
}

function aNB() {
	var aNZ, aNa, qY;
	this.show = function() {
		aNZ.show(), this.resize()
	}, this.ru = function() {
		aNZ.ru()
	}, this.resize = function() {
		aNZ.resize(), aNa.resize()
	}, this.a2C = function(fA) {
		2 === fA && aNZ.ud[0].qu()
	}, aNZ = new uW(L(390), [new w("⬅️ " + L(37), function() {
		t.u(7, t.a5B(7).aN5)
	}), new w(L(200), function() {
		bj.s5.s6(105, bG.sv.wH(aNa.qa[0].qH[0].e.value, 5)), bj.s5.s6(106, bG.sv.wH(aNa.qa[1].qH[0].e.value, 8)), t.u(8, t.a5B(7).aN5, new st(18))
	})]), aNa = new qW(aNZ.uc, ((qY = []).push(function() {
		var aNt = new qG;
		return aNt.qJ(L(178)), aNt.qU(new rR({
			value: "",
			e9: -1
		})), aNt
	}()), qY.push(function() {
		var aNt = new qG,
			aO3 = (aNt.qJ(L(180)), new rR({
				value: "",
				e9: -1
			}));
		return aO3.e.type = "password", aNt.qU(aO3), aNt.qU(new s8([new w(L(181), function(e) {
			return e.textContent === L(181) ? (e.textContent = L(182), aO3.e.type = "text") : (e.textContent = L(181), aO3.e.type = "password"), !0
		}).button])), aNt
	}()), qY.push(function() {
		var aNt = new qG;
		return aNt.qJ(L(184)), aNt.qL(L(391)), aNt.qL(L(392)), aNt.qL(L(393)), aNt
	}()), qY))
}

function aNI() {
	var aNZ, aQa, aQb, uX;

	function aQc(aB) {
		t.u(8, t.ss, new st(21, {
			tB: aB,
			tC: 0,
			tD: 10
		}))
	}
	this.show = function() {
		aNZ.show(), this.resize()
	}, this.ru = function() {
		aNZ.ru()
	}, this.resize = function() {
		aNZ.resize(), aQa.resize()
	}, this.a2C = function(fA) {
		2 === fA && aNZ.ud[0].qu()
	}, aQb = [new w(L(347), function() {
		aQc(5)
	}, 0, 0, 1), new w(L(348), function() {
		aQc(6)
	}, 0, 0, 1), new w(L(349), function() {
		aQc(7)
	}, 0, 0, 1), new w("Audit Log", function() {
		aQc(12)
	}, 0, 0, 1)], uX = [new w("⬅️ " + L(37), function() {
		t.a1K()
	})], aNZ = new uW(L(394), uX), aQa = new rB(aQb, aNZ.uc)
}

function aN1() {
	this.eL = {}, this.tE = new Array(7), this.aNG = null, this.aND = null, this.sZ = 0, this.aIN = [0, 0], this.z = function() {
		t.u(5, 5)
	}, this.a4v = function() {
		t.x(), aZ.dd()
	}, this.aCO = function() {
		t.u(0 === aa.a1L() ? 5 : 0)
	}, this.aPS = function() {
		if (1 === bj.eL.data[130].value) t.u(8, t.a5A().aN5, new st(24, {
			aOy: bj.eL.data[125].value,
			tC: bj.eL.data[128].value,
			tD: bj.eL.data[129].value
		}));
		else {
			for (var g = (g = bj.eL.data[126].value.split(",")).slice(0, 10), aB = 0; aB < g.length; aB++) g[aB] = g[aB].trim().slice(0, 7).toUpperCase();
			1 === g.length && 0 === g[0].length && (g = []), t.u(8, t.a5A().aN5, new st(23, {
				aOy: bj.eL.data[125].value,
				a0p: g
			}))
		}
	}, this.aQT = function(aN5, target) {
		t.u(4, aN5, new v("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: <a href='" + bK.aRC +
			"' target='_blank'>" + bK.aRC + "</a>", !1, [new w("⬅️ " + L(37), function() {
				t.u(aN5)
			}), new w("✅ Accept", function() {
				bj.s5.s6(140, 1), 0 === target ? t.u(2, aN5) : t.u(8, aN5, new st(target))
			})]))
	}, this.aRD = function() {
		for (var aB = 0; aB < 7; aB++) this.tE[aB] = bG.w8.wC(bH.pl(5));
		this.tE[1] = "[" + this.tE[1] + "]", 5 === t.ss && (t.a5A().aGr.s6(this.tE), t.a5A().resize())
	}, this.aO2 = function(fH, p7, a6h) {
		fH = bA.gB.a3v(fH, 1, 1e6);
		var aRE = Math.max(1, 1 + Math.floor(.01 * (fH - 100))),
			p7 = L(395, [p7]);
		return (p7 += "<br>") + L(396, [a6h]) + "<br>" + L(397, [aRE < 20 ? fH + aRE + "–" + (fH + 20) : fH + aRE]) + "<br>" + L(398, [fH])
	}
}

function aNL() {
	var aOV, aOW, aRF, qY;

	function aOY() {
		b6.uF(), t.aNX()[19] = null, t.a1K()
	}

	function aRM() {
		aRP(), aRN()
	}

	function aRP() {
		aRF.qI.lastChild && t.removeChild(aRF.qI, aRF.qI.lastChild)
	}

	function aRN() {
		var aRQ = bS.a51(aD.data);
		aD.data.canvas = bS.aL0(aRQ, aD.data.mapSeed).wh, aRO()
	}

	function aRO() {
		var a2y = aD.data.canvas;
		a2y.style.width = "100%", aRF.qI.appendChild(a2y)
	}
	this.aHx = function(a2y) {
		aD.data.canvas && aRP(), aD.data.canvas = a2y, aRO()
	}, this.show = function() {
		aOV.show(), this.resize()
	}, this.ru = function() {
		aOV.ru()
	}, this.resize = function() {
		aOV.resize(), aOW.resize()
	}, this.a2C = function(fA) {
		2 === fA && aOV.ud[0].qu()
	}, aOV = new uW(L(313), [new w("⬅️ " + L(37), aOY)]), 2 === aD.data.mapType && b6.dd(), aOW = new qW(aOV.uc, (function(qY) {
		var aNt = new qG;
		aNt.qJ(L(279)), aNt.qR(new uR({
			uV: [L(399), L(400), L(401)],
			value: aD.data.mapType
		}, function(e9) {
			2 === (aD.data.mapType = e9) ? (b6.dd(), aD.data.canvas = null) : (aD.data.passableWater = aD.data.passableMountains = 1, b6.uF()), t.u(20)
		})), 2 <= aD.data.mapType && (aNt.qU(new sI), aNt.qU(new s2({
			value: aD.data.passableWater
		}, L(402), function(value) {
			aD.data.passableWater = value
		})), aNt.qU(new s2({
			value: aD.data.passableMountains
		}, L(403), function(value) {
			aD.data.passableMountains = value
		})));
		qY.push(aNt)
	}(qY = []), function(qY) {
		if (0 === aD.data.mapType) {
			for (var aNt = new qG, uV = (aNt.qJ(L(313)), []), aB = 0; aB < bS.wX.aLw.length; aB++) uV.push(bS.wX.wY[bS.wX.aLw[aB]].name);
			aNt.qR(new uR({
				uV: uV,
				value: aD.data.mapProceduralIndex
			}, function(e9) {
				aD.data.mapProceduralIndex = e9, aRM()
			})), qY.push(aNt)
		}
	}(qY), function(qY) {
		if (1 === aD.data.mapType) {
			for (var aNt = new qG, uV = (aNt.qJ(L(313)), []), aB = 0; aB < bS.wX.aLx.length; aB++) uV.push(bS.wX.wY[bS.wX.aLx[aB]].name);
			aNt.qR(new uR({
				uV: uV,
				value: aD.data.mapRealisticIndex
			}, function(e9) {
				aD.data.mapRealisticIndex = e9, aRM()
			})), qY.push(aNt)
		}
	}(qY), function(qY) {
		var aNt;
		2 === aD.data.mapType && ((aNt = new qG).qJ(L(404)), aNt.qU(new rR(bj.eL.data[162], 1)), aNt.qJ(L(405), "0.8em"), aNt.qU(new s8([new w(L(406), function() {
			return b6.aHq(), !0
		}).button])), qY.push(aNt))
	}(qY), function(qY) {
		var aNt, rQ;
		2 === aD.data.mapType && ((aNt = new qG).qJ(L(407)), rQ = new rR({
			e9: -1,
			value: aD.data.mapName
		}, 0, 0, function(e) {
			aD.data.mapName = e.target.value = e.target.value.slice(0, 20)
		}), aNt.qU(rQ), qY.push(aNt))
	}(qY), function(qY) {
		var aNt, rQ, aO1;
		0 === aD.data.mapType && ((aNt = new qG).qJ("Seed"), rQ = new rR({
			e9: -1,
			value: aD.data.mapSeed
		}, 1, 0, function(e) {
			e = Math.abs(Math.floor(e.target.value)) % 16384;
			aD.data.mapSeed !== e && (aD.data.mapSeed = e, aRM())
		}), aO1 = new w(L(304), function(e) {
			var aKv = Math.floor(16384 * Math.random());
			if (aD.data.mapSeed !== aKv) return rQ.e.value = aD.data.mapSeed = aKv, aRM(), !0
		}), aNt.qU(rQ), aNt.qU(new s8([aO1.button])), qY.push(aNt))
	}(qY), function(qY) {
		(aRF = new qG).qJ(L(408)), 2 !== aD.data.mapType ? aRN() : aD.data.canvas && aRO();
		qY.push(aRF)
	}(qY), qY))
}

function v(title, qQ, aRR, aQd) {
	var aNZ, aPj;
	this.show = function() {
		aNZ.show(), this.resize()
	}, this.ru = function() {
		aNZ.ru()
	}, this.resize = function() {
		aNZ.resize(), aPj.resize()
	}, this.a2C = function(fA) {
		2 === fA && aNZ.ud[0].qu()
	}, aQd = aQd || [new w("⬅️ " + L(37), function() {
		t.a1K()
	})], aNZ = new uW(title, aQd), aPj = new s7(aNZ.uc, qQ), aRR && bA.qd.textAlign(aNZ.uc.style, 1)
}

function aNO() {
	var aOV, aOW, aOX, qY;

	function aOY() {
		aOa(), 2 === aD.data.playerNamesType && 1 === bA.ql.a2c(aD.data.playerNamesData).length && (aD.data.playerNamesType = 0), 2 !== aD.data.playerNamesType && (aD.data.playerNamesData = null), t.aNX()[19] = null, t.a1K()
	}

	function aOa() {
		2 === aD.data.playerNamesType && bA.ql.a2q(aOX.v3(), aD.data.playerNamesData, 20)
	}
	this.show = function() {
		aOV.show(), this.resize()
	}, this.ru = function() {
		aOV.ru()
	}, this.resize = function() {
		aOV.resize(), aOW.resize()
	}, this.a2C = function(fA) {
		2 === fA && aOV.ud[0].qu()
	}, aOV = new uW(L(317), [new w("⬅️ " + L(37), aOY)]), aOW = new qW(aOV.uc, (function(qY) {
		var aNt = new qG;
		aNt.qJ(L(279)), aNt.qR(new uR({
			uV: [L(318), L(319), L(282)],
			value: aD.data.playerNamesType
		}, function(e9) {
			aOa(), aD.data.playerNamesType = e9, t.u(23)
		})), aNt.qU(new sI), aNt.qU(new s2({
			value: aD.data.selectableName
		}, L(409), function(value) {
			aD.data.selectableName = value
		})), qY.push(aNt)
	}(qY = []), function(qY) {
		var aNt;
		2 === aD.data.playerNamesType && ((aNt = new qG).qJ("Data"), aOX = new uu(0, 1, 0, 1), aD.data.playerNamesData && aD.data.playerNamesData.length === aD.em || (aD.data.playerNamesData = new Array(aD.em), aD.data.playerNamesData
			.fill("")), aOX.v1(bA.rc.a4L(aD.data.playerNamesData, 1, '"')), aNt.qU(aOX), qY.push(aNt))
	}(qY), qY))
}

function aRS() {
	var aOV, aOW, qY;
	this.show = function() {
		aOV.show(), this.resize()
	}, this.ru = function() {
		aOV.ru()
	}, this.resize = function() {
		aOV.resize(), aOW.resize()
	}, this.a2C = function(fA) {
		2 === fA && aOV.ud[0].qu()
	}, aOV = new uW(L(410), [new w("⬅️ " + L(37), function() {
		t.a1K()
	})]), aOW = new qW(aOV.uc, ((qY = []).push(function() {
		var aNt = new qG,
			aRU = (aNt.qJ(L(411)), new rR({
				value: bj.eL.data[162].value,
				e9: -1
			})),
			aRU = (aNt.qU(aRU), aNt.qJ(L(412), "0.8em"), new rR(bj.eL.data[163])),
			aRU = (aNt.qU(aRU), aNt.qJ(L(413), "0.8em"), new rR(bj.eL.data[164]));
		return aNt.qU(aRU), aNt
	}()), qY))
}

function aN9() {
	var aOV, uz;

	function aRX() {
		t.x();
		var qK = b9.aRb(uz.v3());
		(aD.a0A && 0 < qK.length && qK === b9.px.a4r || b9.aIX.wS(qK)) && b9.aRc()
	}
	this.show = function(aRY) {
		this.aRZ(aRY), aOV.show(), this.resize()
	}, this.aRZ = function(aRY) {
		0 === aD.a0A ? aRY ? uz.v1(aRY) : aD.a4f.length && uz.v1(aD.a4f) : (aD.gy || (b9.px.a4r = b9.a4s.zc()), uz.v1(b9.aRa(b9.px.a4r)))
	}, this.ru = function() {
		aOV.ru()
	}, this.resize = function() {
		aOV.resize(), uz.resize()
	}, this.a2C = function(fA) {
		2 === fA ? aOV.ud[0].qu() : aRX()
	}, aOV = new uW(L(414), [new w("⬅️ " + L(37), function() {
		t.aNW(1)
	}), new w(L(415), function() {
		uz.v4()
	}), new w(L(416), function() {
		uz.v5()
	}), new w(L(417), function() {
		uz.clear()
	}), new w(L(418), function() {
		aRX()
	})]), uz = new uu(L(419)), aOV.uc.appendChild(uz.e)
}

function aN8() {
	var aNZ, aNa, qY, aNt;

	function aRd() {
		b7.aC9 !== bj.eL.data[12].value ? (b7.dd(), t.u(8, 1, new st(30))) : t.u(1)
	}
	this.show = function() {
			aNZ.show(), this.resize()
		}, this.ru = function() {
			aNZ.ru()
		}, this.resize = function() {
			aNZ.resize(), aNa.resize()
		}, this.a2C = function(fA) {
			2 === fA && aNZ.ud[0].qu()
		}, aNZ = new uW(L(420), [new w("⬅️ " + L(37), aRd), new w(L(421), function() {
			t.x(), bj.s5.vp(), t.u(2)
		})]), qY = [], (aNt = new qG).qJ(L(422)), aNt.qL(L(423)), qY.push(aNt),
		function(qY) {
			var aNt = new qG,
				g = (aNt.qJ(L(444)), b7.data.aCS());
			aNt.qR(new uR({
				uV: g,
				value: b7.data.aCW(g)
			}, function(e9) {
				return bj.s5.s6(12, g[e9].split(":")[0]), !0
			})), qY.push(aNt)
		}(qY),
		function(qY) {
			var aNt = new qG,
				aRg = (aNt.qJ(L(442)), []);
			aNt.qU(new s8([new w(L(443), function(e) {
				bX.aRh();
				for (var aB = 0; aB < aRg.length; aB++) aRg[aB].e.value = bX.aBi[aB];
				return bA.qd.a3R(e), !0
			}).button]));
			for (var aB = 0; aB < bX.aRi.length; aB++) {
				aNt.qL(bX.aRi[aB]);
				for (var f8 = 0; f8 < 2; f8++) {
					var e9 = 2 * aB + f8,
						rQ = new rR({
							value: bX.aBi[e9],
							e9: -1
						});
					rQ.e.aRj = e9, aRg.push(rQ), rQ.e.addEventListener("keydown", function(e) {
						e.preventDefault();
						var code = e.code;
						e.target.value = code, bX.aRk(e.target.aRj, code)
					}), f8 && (rQ.e.style.marginLeft = "4%"), rQ.e.style.width = "48%", aNt.qU(rQ)
				}
			}
			qY.push(aNt)
		}(qY), (aNt = new qG).qJ(L(23)), aNt.qR(new uR({
			uV: ["1", "2"],
			value: aZ.aG4 - 1
		}, function(aB) {
			aZ.aG4 = aB + 1
		})), qY.push(aNt), (aNt = new qG).qJ(L(424)), bj.eL.data[1].uV = [L(425), L(426), L(427), L(428)], aNt.qR(new uR(bj.eL.data[1])), qY.push(aNt), (aNt = new qG).qJ(L(429)), bj.eL.data[9].uV = [L(426), L(430), L(431)], aNt.qR(new uR(bj.eL.data[
			9])), qY.push(aNt), (aNt = new qG).qJ(L(432)), bj.eL.data[11].uV = [L(433), L(9), L(434)], aNt.qR(new uR(bj.eL.data[11])), qY.push(aNt), (aNt = new qG).qJ(L(435)), aNt.qU(new s2(bj.eL.data[2])), qY.push(aNt), (aNt = new qG).qJ(L(436)),
		aNt.qU(new s2(bj.eL.data[7])), qY.push(aNt), (aNt = new qG).qJ(L(437)), aNt.qU(new s2(bj.eL.data[8])), qY.push(aNt), (aNt = new qG).qJ(L(438)), aNt.qU(new rR(bj.eL.data[5])), qY.push(aNt), (aNt = new qG).qJ(L(439)), aNt.qU(new s2(bj.eL.data[
			13], L(440))), aNt.qU(new s2(bj.eL.data[14], L(441))), qY.push(aNt), aNa = new qW(aNZ.uc, qY)
}

function aNP() {
	var aOV, aOW, aOX, qY;

	function aOY() {
		aOa(), 2 !== aD.data.spawningType || bA.ql.a2c(aD.data.spawningData) || (aD.data.spawningType = 0), 2 !== aD.data.spawningType && (aD.data.spawningData = null), t.aNX()[19] = null, t.a1K()
	}

	function aOa() {
		2 === aD.data.spawningType && bA.ql.a2o(aOX.v3(), aD.data.spawningData, bS.aI0 - 1)
	}
	this.show = function() {
		aOV.show(), this.resize()
	}, this.ru = function() {
		aOV.ru()
	}, this.resize = function() {
		aOV.resize(), aOW.resize()
	}, this.a2C = function(fA) {
		2 === fA && aOV.ud[0].qu()
	}, aOV = new uW(L(445), [new w("⬅️ " + L(37), aOY)]), aOW = new qW(aOV.uc, (function(qY) {
		var aNt = new qG,
			uV = (aNt.qJ(L(279)), [L(304), L(316), L(282)]),
			value = aD.data.spawningType;
		0 === aD.data.gameMode && (uV.splice(1, 1), 0 < value) && (value = 1);
		aNt.qR(new uR({
			uV: uV,
			value: value
		}, function(e9) {
			aOa(), aD.data.spawningType = e9, 0 === aD.data.gameMode && 1 === e9 && (aD.data.spawningType = 2), 2 !== aD.data.spawningType || aD.data.spawningData || (aD.data.spawningData = new Uint16Array(2 * aD.em)), t.u(24)
		})), aNt.qU(new sI), aNt.qU(new s2({
			value: aD.data.selectableSpawn
		}, L(446), function(value) {
			aD.data.selectableSpawn = value
		})), qY.push(aNt)
	}(qY = []), function(qY) {
		var aNt = new qG;
		aNt.qJ("Seed"), aNt.qU(new rR({
			e9: -1,
			value: aD.data.spawningSeed
		}, 1, 0, function(e) {
			var value = Math.abs(Math.floor(e.target.value)) % 16384;
			e.target.value = aD.data.spawningSeed = value
		})), qY.push(aNt)
	}(qY), function(qY) {
		var aNt;
		2 === aD.data.spawningType && ((aNt = new qG).qJ("Data"), (aOX = new uu(0, 1, 0, 1)).v1(bA.rc.a4L(aD.data.spawningData, 2)), aNt.qU(aOX), qY.push(aNt))
	}(qY), qY))
}

function aN7() {
	var aNZ, aQa, aQb, uX;

	function aRl(id) {
		0 !== a0.id || bj.eL.data[140].value ? 0 === id ? t.u(8, 1, new st(16)) : t.u(2) : t.y.aQT(t.ss, 0 === id ? 16 : 0)
	}
	this.show = function() {
		a0.a1.setState(12), aNZ.show(), this.resize(), this.j5()
	}, this.ru = function() {
		aNZ.ru()
	}, this.resize = function() {
		aNZ.resize(), aQa.resize()
	}, this.j5 = function() {
		8 === aa.a1L() && (2 <= bd.aRq ? aQb[2].qv === bB.nx && aQb[2].qx(0) : aQb[2].qv !== bB.nx && aQb[2].qx(bB.nx), !aD.gy && aM.qE(aD.eZ) ? aQb[1].qv === bB.nx && aQb[1].qx(0) : aQb[1].qv !== bB.nx && aQb[1].qx(bB.nx), !aD.gy && aw.he(aD
			.eZ) ? aQb[0].qv === bB.nx && aQb[0].qx(0) : aQb[0].qv !== bB.nx && aQb[0].qx(bB.nx))
	}, this.a2C = function(fA) {
		2 === fA && aNZ.ud[0].qu()
	}, aQb = [new w(L(447), function() {
		aRl(0)
	}), new w(L(339), function() {
		t.u(16)
	}), new w(L(394), function() {
		t.u(17)
	}), new w(L(448), function() {
		t.y.aPS()
	}, 0, 0, 1), new w(L(414), function() {
		t.u(3, 1)
	}), new w(L(449), function() {
		t.u(18)
	}), new w(L(420), function() {
		aRl(1)
	}), new w(L(450), function() {
		var si = ["Patreon", L(459), L(460), "YouTube Tutorial", "Discord", L(461), L(332), L(462), L(335), L(463), "Terms", "Privacy"],
			a3N = [bK.aOT, bK.aCj, bK.a1E, "https://www.youtube.com/watch?v=6QBmA9N1668", bK.aCk, bK.aRr, bK.aRs, bK.a0w, bK.aRt, bK.aRu, bK.aRv, bK.aRC];
		1 === a0.id ? (si.splice(2, 1), si.splice(0, 1), a3N.splice(2, 1), a3N.splice(0, 1)) : 2 === a0.id && (si.splice(1, 1), si.splice(0, 1), a3N.splice(1, 1), a3N.splice(0, 1)), t.u(4, 1, new v(L(450), bA.qd.a3M(si, a3N), !1, [new w(
			"⬅️ " + L(37),
			function() {
				t.u(1)
			})]))
	}), new w(L(451), function() {
		t.u(4, 1, new v(L(451), l.dw + "<br><a href='" + bK.aRr + "' target='_blank'>" + bK.aRr + "</a>" +
			"<br><br><b>" + "FX Client v" + __fx.version + "<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a>" +
			"<br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></b>", !0, [new w("⬅️ " + L(37), function() {
				t.u(1)
			})]))
	}), new w(L(452), function() {
		t.u(4, 1, new v(L(452), L(464) + "<br>" + L(465), !1, [new w("⬅️ " + L(37), function() {
			t.u(1)
		}), new w(L(466), function() {
			a0.a1.a18(), t.u(1)
		})]))
	}), new w(L(453), function() {
		a0.a1.a19(), t.u(4, 1, new v(L(467), L(468) + " <a href='" + bK.aRC + "' target='_blank'>" + bK.aRC + "</a>", !1, [new w("⬅️ " + L(37), function() {
			t.u(1)
		})]))
	})], uX = [new w("⬅️ " + L(37), function() {
		t.y.aCO()
	})], 8 === aa.a1L() && (aQb.unshift(new w(L(327), function() {
		t.u(30)
	})), aQb.unshift(new w(L(456), function() {
		2 <= bd.aRq && (t.x(), be.a2F(), bf.dl = !0)
	}, 0, 1)), aQb.unshift(new w(L(457), function() {
		!aD.gy && aM.qE(aD.eZ) && (b8.hF.pR(), t.x(), aM.gz) && aM.a2F()
	}, 0, 1)), aQb.unshift(new w(L(458), function() {
		!aD.gy && aw.he(aD.eZ) && (bV.a5X(2), b8.hF.ha(), t.x(), aM.gz) && aM.a2F()
	}, 0, 1))), 1 === a0.id && 5 <= a0.dw && aQb.push(new w(L(454), function() {
		a0.a1.a1A()
	})), aNZ = new uW(L(455), uX), aQa = new rB(aQb, aNZ.uc)
}

function aNT() {
	var aOV, aOW, aOX, qY;

	function aOY() {
		aOa(), 2 !== aD.data.sResourcesType && (aD.data.sResourcesData = null), t.aNX()[19] = null, t.a1K()
	}

	function aOa() {
		2 === aD.data.sResourcesType && bA.ql.a2o(aOX.v3(), aD.data.sResourcesData, 2047)
	}
	this.show = function() {
		aOV.show(), this.resize()
	}, this.ru = function() {
		aOV.ru()
	}, this.resize = function() {
		aOV.resize(), aOW.resize()
	}, this.a2C = function(fA) {
		2 === fA && aOV.ud[0].qu()
	}, aOV = new uW(L(322), [new w("⬅️ " + L(37), aOY)]), aOW = new qW(aOV.uc, (function(qY) {
		var aNt = new qG;
		aNt.qJ(L(279)), aNt.qR(new uR({
			uV: [L(280), L(281), L(282)],
			value: aD.data.sResourcesType
		}, function(e9) {
			aOa(), 2 !== e9 || aD.data.sResourcesData || (aD.data.sResourcesData = new Uint16Array(aD.em)), aD.data.sResourcesType = e9, t.u(28)
		})), qY.push(aNt)
	}(qY = []), function(qY) {
		var aNt;
		1 === aD.data.sResourcesType && ((aNt = new qG).qJ("Value"), aNt.qU(new rR({
			e9: -1,
			value: aD.data.sResourcesValue
		}, 1, 0, function(e) {
			var value = bL.hx(Math.floor(e.target.value), 0, 2047);
			e.target.value = aD.data.sResourcesValue = value
		})), qY.push(aNt))
	}(qY), function(qY) {
		var aNt;
		2 === aD.data.sResourcesType && ((aNt = new qG).qJ("Data"), (aOX = new uu(0, 1, 0, 1)).v1(bA.rc.a4L(aD.data.sResourcesData, 2)), aNt.qU(aOX), qY.push(aNt))
	}(qY), qY))
}

function aNR() {
	var aOV, aOW, aOX, qY;

	function aOY() {
		aOa(), 2 !== aD.data.tIncomeType && (aD.data.tIncomeData = null), t.aNX()[19] = null, t.a1K()
	}

	function aOa() {
		2 === aD.data.tIncomeType && bA.ql.a2o(aOX.v3(), aD.data.tIncomeData, 255)
	}
	this.show = function() {
		aOV.show(), this.resize()
	}, this.ru = function() {
		aOV.ru()
	}, this.resize = function() {
		aOV.resize(), aOW.resize()
	}, this.a2C = function(fA) {
		2 === fA && aOV.ud[0].qu()
	}, aOV = new uW(L(320), [new w("⬅️ " + L(37), aOY)]), aOW = new qW(aOV.uc, (function(qY) {
		var aNt = new qG;
		aNt.qJ(L(279)), aNt.qR(new uR({
			uV: [L(280), L(281), L(282)],
			value: aD.data.tIncomeType
		}, function(e9) {
			aOa(), 2 !== e9 || aD.data.tIncomeData || (aD.data.tIncomeData = new Uint8Array(aD.em), aD.data.tIncomeData.fill(32)), aD.data.tIncomeType = e9, t.u(26)
		})), qY.push(aNt)
	}(qY = []), function(qY) {
		var aNt;
		1 === aD.data.tIncomeType && ((aNt = new qG).qJ("Value"), aNt.qU(new rR({
			e9: -1,
			value: aD.data.tIncomeValue
		}, 1, 0, function(e) {
			var value = bL.hx(Math.floor(e.target.value), 0, 255);
			e.target.value = aD.data.tIncomeValue = value
		})), qY.push(aNt))
	}(qY), function(qY) {
		var aNt;
		2 === aD.data.tIncomeType && ((aNt = new qG).qJ("Data"), (aOX = new uu(0, 1, 0, 1)).v1(bA.rc.a4L(aD.data.tIncomeData, 4)), aNt.qU(aOX), qY.push(aNt))
	}(qY), qY))
}

function aNJ() {
	var aNZ, aNa, qY;
	this.show = function() {
		aNZ.show(), this.resize()
	}, this.ru = function() {
		aNZ.ru()
	}, this.resize = function() {
		aNZ.resize(), aNa.resize()
	}, this.a2C = function(fA) {
		2 === fA && aNZ.ud[0].qu()
	}, aNZ = new uW(L(449), [new w("⬅️ " + L(37), function() {
		t.a1K()
	})]), aNa = new qW(aNZ.uc, ((qY = []).push(function() {
		function aO0() {
			aS0.button.textContent = L(176), aRy.e.readOnly = !1, aRz.e.readOnly = !1, aNy.qx(1), aNy.button.style.color = bB.nl
		}
		var aNt = new qG,
			aRx = (aNt.qP("<a href='https://territorial.io/wiki/transactions' target='_blank'>territorial.io/wiki/transactions</a>", "0.75em").style.marginBottom = "0.8em", aNt.qJ(L(469)), new rR({
				value: bj.eL.data[105].value,
				e9: -1
			})),
			aRy = (aRx.e.readOnly = !0, aNt.qU(aRx), aNt.qJ(L(363), "0.8em"), new rR(bj.eL.data[148], 0, void 0, function(e) {
				aNx(bj.eL.data[149].value, e.target.value)
			})),
			aRz = (aNt.qU(aRy), aNt.qJ(L(367), "0.8em"), new rR(bj.eL.data[149], 1, void 0, function(e) {
				aNx(e.target.value, bj.eL.data[148].value)
			})),
			aS0 = (aNt.qU(aRz), new w(L(176), function(e) {
				return e.textContent === L(176) ? (e.textContent = L(177), aRy.e.readOnly = !0, aRz.e.readOnly = !0, aNy.qx(0), aNy.button.style.color = bB.oj, bj.s5.s6(149, aRz.e.value), aNx(bj.eL.data[149].value, bj.eL.data[
					148].value)) : aO0(), !0
			})),
			aNy = (aNt.qU(new s8([aS0.button])), new w(L(14), function(e) {
				return aRy.e.readOnly && b0.y.aNz(0) && (bA.qd.a3R(e), aO0(), b0.aFG.aFH({
					su: 0,
					sq: bj.eL.data[148].value,
					value: parseInt(bj.eL.data[149].value, 10)
				})), !0
			}, 1)),
			qM = aNt.qL(),
			aNx = (aNt.qL(L(470)).style.fontWeight = "bold", function(fH, qK) {
				qM.innerHTML = t.y.aO2(fH, bj.eL.data[105].value, qK)
			});
		return aNt.qU(new s8([aNy.button])), aNx(bj.eL.data[149].value, bj.eL.data[148].value), aNt
	}()), qY))
}

function bw() {
	"function" != typeof Math.log2 && (Math.log2 = function(ew) {
		return Math.log(ew) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(ew) {
		return Math.log(ew) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(ew) {
		return 0 < ew ? 1 : ew < 0 ? -1 : 0
	})
}

function ci() {
	var a9R, aS2, aS3, aS4, aS1 = !1;

	function aS5() {
		aS1 = !0, a9R = -1, aS2 = new Array(4);
		for (var aB = 3; 0 <= aB; aB--) aS2[aB] = !1;
		var xX = Math.floor(1 + .02 * h.min);
		aS3 = new Array(4), (aS4 = new Array(4))[1] = aS4[3] = aS3[0] = aS3[2] = 0, aS4[0] = aS3[3] = -xX, aS3[1] = aS4[2] = xX
	}

	function aS6() {
		if (-1 !== a9R)
			if (0 !== aD.a0A && aH.nT()) {
				for (var aS7 = !1, aB = 3; 0 <= aB; aB--) aS2[aB] && (aS7 = !0, iQ += aS3[aB], iR += aS4[aB], af.a1e(aS3[aB], aS4[aB]), aS.a97());
				aS7 ? bf.dl = !0 : ar.nJ()
			} else ar.nJ()
	}
	this.a2A = function(e9) {
		0 !== aD.a0A && aH.nT() && (aS1 || aS5(), aS2[e9] = !0, -1 === a9R) && (a9R = setInterval(aS6, 20), aS6())
	}, this.a2D = function(e9) {
		if (0 !== aD.a0A && (aS1 || aS5(), aS2[e9] = !1, -1 !== a9R)) {
			for (var aS7 = !1, aB = 3; 0 <= aB; aB--) aS7 = aS7 || aS2[aB];
			aS7 || this.nJ()
		}
	}, this.nJ = function() {
		if (aS1 && -1 !== a9R) {
			for (var aB = 3; 0 <= aB; aB--) aS2[aB] = !1;
			clearInterval(a9R), a9R = -1
		}
	}
}

function cj() {
	this.y = new aS8, this.mT = new aS9, this.p7 = new aSA, this.aEi = new aSB, this.aCK = new aSC, this.aFG = new aSD, this.pk = new aSE, this.aPq = new aSF, this.a6h = new aSG, this.aSH = new aSI, this.aSJ = new aSK, this.aSL = new aSM, this.aSN =
		new aSO, this.dd = function() {
			this.y.dd()
		}
}

function aS8() {
	var aSP, aSR;
	this.aG7 = 5, this.aSQ = null;

	function aSZ(aB) {
		return aSR[aB].aS1 && aSP[aB].aSZ()
	}

	function aSW(a1G) {
		aSR[a1G].eO = bf.eO, aSR[a1G].aST = !1
	}
	this.a1Q = 0, this.a1J = 0, this.dd = function() {
		this.aSQ = new Array(this.aG7);
		this.aSQ[0] = "territorial.io";
		var aKv = ay.aLH(0);
		ay.a4i(0);
		for (var aB = 1; aB < this.aG7; aB++) this.aSQ[aB] = aK.zi() + ".territorial.io";
		for (ay.a4i(aKv), aSP = new Array(this.aG7), aSR = new Array(this.aG7), aB = this.aG7 - 1; 0 <= aB; aB--) aSR[aB] = {
			aS1: !1,
			eO: 0,
			aST: !1
		};
		this.aG8(0, 0)
	}, this.aSU = function(aB) {
		return aSP[aB]
	}, this.j5 = function() {
		for (var aB = this.aG7 - 1; 0 <= aB; aB--) this.aNz(aB) && bf.eO > aSR[aB].eO + 15e3 && (b0.p7.aSV(aB, aSR[aB].aST), aSW(aB));
		!this.aNz(0) && bf.eO > aSR[0].eO + 8e3 && (aSR[0].eO = bf.eO, this.aG8(0, 0))
	}, this.aPm = function(id) {
		return this.aG8(0, id) && this.aSX(0)
	}, this.aG8 = function(a1G, aN5) {
		if (aSR[a1G].aS1) {
			if (aSP[a1G].aSZ()) return aSP[a1G].aSa(aN5), aSP[a1G].aNz();
			aSP[a1G].ru()
		}
		return this.aSY(a1G, aN5), !1
	}, this.aSY = function(a1G, aN5) {
		aSR[a1G].aS1 = !0, aSW(a1G), aSP[a1G] = new aSb, aSP[a1G].dd(a1G, aN5)
	}, this.aSa = function(a1G, aN5) {
		aSZ(a1G) && aSP[a1G].aSa(aN5)
	}, this.aSc = function(a1G, aN5) {
		b0.aCK.aSd(a1G)
	}, this.aSX = function(aB) {
		return this.aNz(aB) && aSP[aB].aSX()
	}, this.aSe = function(aB) {
		aSP[aB].aSe()
	}, this.aNz = function(aB) {
		return aSR[aB].aS1 && aSP[aB].aNz()
	}, this.send = function(a1G, aC) {
		0 !== a1G && aSW(a1G), aSP[a1G].send(aC)
	}, this.a1v = function(a1G) {
		8 === aa.a1L() && (aSR[a1G].aST = !0, b0.mT.aSf = !0)
	}, this.close = function(a1G, aSg) {
		aSZ(a1G) && aSP[a1G].close(aSg)
	}, this.aSh = function(a1G, aSg) {
		o.a1T(aSg), aSZ(a1G) && aSP[a1G].close(aSg)
	}, this.a1U = function(aSg) {
		for (var aB = this.aG7 - 1; 0 <= aB; aB--) this.close(aB, aSg)
	}, this.aSi = function(a1G, aSg) {
		for (var aB = this.aG7 - 1; 0 <= aB; aB--) aB !== a1G && this.close(aB, aSg)
	}, this.a4t = function() {
		this.close(this.a1Q, 3246)
	}, this.aSj = function(a1G, e) {
		aSP[a1G].ru(), o.a1F(a1G, e.code)
	}
}

function aS9() {
	this.aSf = !1, this.j5 = function() {
		bf.k9() % 250 != 249 || aD.gy || (b0.aCK.aSk(+(this.aSf && ag.ml[aD.eZ]), al.ki + bN.y.m2), this.aSf = !1)
	}
}

function aSG() {
	function aTC(aTD) {
		var es = aD.data,
			aTD = (es.selectedPlayer = bH.pl(aTD), es.spawningSeed = bH.pl(14), bH.pl(4)),
			aTD = (aTD < 7 ? (es.gameMode = 1, es.numberTeams = aTD + 2) : 9 === aTD ? (es.gameMode = es.isZombieMode = 1, es.numberTeams = 2) : (es.gameMode = 0, es.battleRoyaleMode = 7 === aTD ? 0 : 10 === aTD ? 1 : 2), es.isContest = bH.pl(1), bH
				.pl(6));
		return es.mapType = bS.aDi(aTD) ? 0 : 1, bS.aDj(es, aTD), es.mapSeed = bH.pl(14), aTD
	}
	this.aSm = function(a1G, aC) {
		bH.dd(aC), 0 === bH.size ? b0.y.aSh(a1G, 3205) : ((0 === bH.pl(1) ? function(a1G) {
			var aSq = bH.pl(6);
			0 === aSq ? function(a1G) {
					if (0 === a1G && 8 !== aa.a1L()) {
						t.y.aRD();
						for (var aT4 = bH.pl(12), aT5 = bH.pl(6), g = new Array(aT4), aB = 0; aB < aT4; aB++) g[aB] = bH.pl(aT5);
						aT.a9X(g)
					}
				}(a1G) : 2 === aSq ? b0.aSH.aSs(a1G) : 3 === aSq || 4 === aSq ? ax.dd() : 9 === aSq ? b0.aSJ.aSt(a1G) : 10 === aSq ? b0.aSL.aSu() : 11 === aSq ? b0.aSJ.aSv(a1G) : 12 === aSq ? b0.aSL.aSw() : 13 === aSq ? b0.aSN.aSx() :
				14 === aSq ? b0.aSN.aSy() : 15 === aSq ? b0.aSJ.aSz() : 16 === aSq ? b0.aSH.aT0(a1G) : 17 === aSq ? b0.aSH.aT1(a1G) : 19 === aSq ? b0.aSH.aT2(a1G) : 20 === aSq && b0.aSJ.aT3(a1G)
		} : function(a1G) {
			if (8 !== aa.a1L() && !ax.aGc()) return;
			if (a1G !== b0.y.a1Q) b0.y.aSh(a1G, 3244);
			else if (0 === bH.pl(1)) bf.a0J.aTE(bH.aC);
			else {
				var aB, a1G = bH.pl(2);
				if (0 === a1G) {
					var pM, p7 = bH.pl(9);
					0 !== ag.ml[p7] && 0 !== ag.ml[aD.eZ] && (pM = bH.pl(10), aN.pL(p7, aD.eZ, pM), af.qC(p7, 1, pM))
				} else if (1 === a1G) ! function() {
					var p7 = bH.pl(9);
					0 !== ag.ml[p7] && 0 !== ag.ml[aD.eZ] && b5.aKW(0, [p7], !0) && aN.pd(p7, 1)
				}();
				else if (2 === a1G) ! function() {
					var p7 = bH.pl(9),
						target = bH.pl(9);
					0 !== ag.ml[p7] && 0 !== ag.ml[target] && 0 !== ag.ml[aD.eZ] && b5.aKW(1, [p7], !0) && (af.qC(p7, 3, 96), af.qC(target, 4, 96), aN.a6o(p7, target))
				}();
				else if (l.a9 && !l.aA) {
					var ep = 540;
					for (bD.a7(17287), bD.a8(1, 0), bD.a8(6, 10), ep = Math.min(b8.p4.pn.length, 540), aB = 0; aB < ep; aB++) bD.aTK(32, b8.p4.pn[aB]);
					b0.y.send(b0.y.a1Q, bD.aC)
				}
			}
		})(a1G), bf.aSp())
	}, this.aT6 = function(aC) {
		if (bH.dd(aC), bH.e9 = 1, 3 === bH.pl(6)) {
			bH.e9 += 20;
			var es = aD.data = new a4b,
				aC = aTC(9),
				aDk = es.humanCount = bH.pl(9) + 1;
			es.selectableSpawn = 1 === es.gameMode || aDk < 100, es.colorsData = new Uint32Array(aDk), es.playerNamesData = new Array(aDk);
			for (var aB = 0; aB < aDk; aB++) bH.e9++, es.colorsData[aB] = bH.pl(18), es.playerNamesData[aB] = bG.w8.wC(bH.pl(5));
			aa.aGJ(), bS.a7(aC, es.mapSeed), aD.a4g()
		} else ! function() {
			bH.e9 += 20;
			var es = aD.data = new a4b,
				aTB = aTC(1);
			es.humanCount = 2;
			es.selectableSpawn = 1, es.elo = new Uint16Array(2), es.colorsData = new Uint32Array(2), es.playerNamesData = new Array(2);
			for (var aB = 0; aB < 2; aB++) bH.e9++, es.colorsData[aB] = bH.pl(18), es.elo[aB] = bH.pl(14), es.playerNamesData[aB] = bG.w8.wC(bH.pl(5));
			aa.aGJ(), bS.a7(aTB, es.mapSeed), aD.a4g()
		}()
	}, this.aT9 = function() {
		bH.e9 = 1;
		var aSq = bH.pl(6),
			aTA = bH.pl(10);
		return b0.y.a1J === aTA ? (b0.y.a1Q = aTA, !1) : (b0.y.close(b0.y.a1J, 3247), b0.y.a1Q = aTA, ax.aDf = bH.pl(10), ax.aGR = bH.pl(3 === aSq ? 9 : 1), b0.y.aG8(aTA, 5) && b0.p7.aGY(), !0)
	}
}

function aSM() {
	this.aSu = function() {
		bj.y.vg(), bj.s5.s6(105, bF.sv.sw(bF.sv.sx(5))), bj.s5.s6(106, bF.sv.sw(bF.sv.sx(8))), bj.s5.s6(109, bH.pl(30)), bj.s5.s6(108, bj.eL.data[109].value), bj.s5.s6(111, bj.eL.data[109].value + 1), bj.s5.s6(107, 0), bj.s5.s6(110, "")
	}, this.aSw = function() {
		var data;
		bH.size < bD.aTL(29) ? b0.y.aSh(0, 3254) : ((data = {
			sr: bH.pl(30),
			vt: bH.pl(16),
			vu: bH.pl(30),
			vv: bH.pl(30),
			vw: bH.pl(30),
			vx: bH.aTM(32),
			username: bG.wA.wS(5),
			vy: bG.wA.wS(3),
			vz: bG.wA.wS(3),
			w0: bH.aTM(32),
			w1: bH.aTM(32),
			w2: bH.pl(30),
			w3: bH.aTM(32),
			w4: bH.aTM(32),
			w5: bH.aTM(32),
			w6: bH.aTM(32),
			aO7: bH.aTM(32),
			aO8: bH.aTM(30),
			aOL: bH.aTM(32),
			aOM: bG.wA.wS(3),
			aOE: bH.aTM(2),
			aOF: bH.aTM(10),
			aOC: bG.wA.wS(8),
			aOG: bH.aTM(5),
			aNv: bH.pl(30),
			aO6: bH.pl(30),
			a0b: bH.aTM(32),
			aOB: bH.pl(3),
			aOA: bH.pl(8),
			aON: bH.pl(1),
			aOO: bH.pl(1)
		}).aON && (data.aOP = bH.aTM(32), data.aOQ = bH.pl(30), data.aOR = bH.pl(30), data.aOS = bH.pl(1)), 8 === t.ss && (25 === t.a5A().aPl ? (data.aNb = !0, t.y.aNG = data, t.a5A().aCN(25, !1)) : (data.aNb = !1, bj.s5.s6(160, +(data
			.aON && data.aOS)), data.sq = bj.eL.data[105].value, t.y.aND = data, bj.s5.vs(data), t.a5A().aCN(16, !0))))
	}
}

function aSO() {
	this.aSx = function() {
		var aB;
		if (bH.size < bD.aTL(23)) b0.y.aSh(0, 3259);
		else {
			var tB = bH.pl(6),
				ep = bH.pl(10),
				data = [];
			if (9 === tB || 10 === tB || 11 === tB) {
				for (aB = 0; aB < ep; aB++) data.push([bH.pl(30), bG.wA.wS(5), bH.aTM(32), 0, bH.pl(30)]);
				8 === t.ss && t.a5A().aCN(21, !0, {
					tB: tB,
					data: data
				})
			} else if (12 === tB) {
				for (aB = 0; aB < ep; aB++) data.push([bH.pl(20), bH.pl(30), bH.pl(30), bH.aTM(32), bH.pl(30), bG.wA.wS(5), bG.wA.wS(5)]);
				8 === t.ss && t.a5A().aCN(21, !0, {
					tB: tB,
					data: data
				})
			} else {
				var hm = bH.pl(16);
				if (bH.aTN(39 + 16 * hm + ep * (0 === tB ? 111 : 1 === tB ? 101 : 2 === tB || 3 === tB ? 127 : 212))) {
					if (0 === tB)
						for (aB = 0; aB < ep; aB++) data.push([bH.pl(30), bG.w8.wC(bH.pl(5)), bH.pl(16), bH.pl(30), bH.pl(30)]);
					else if (1 === tB)
						for (aB = 0; aB < ep; aB++) data.push([bH.pl(16), bG.w8.wC(bH.pl(3)), bH.pl(16), bG.w8.wC(bH.pl(5)), bH.pl(31), bH.pl(30)]);
					else if (2 === tB || 3 === tB)
						for (aB = 0; aB < ep; aB++) data.push([bH.pl(30), bG.w8.wC(bH.pl(5)), bH.aTM(32), bH.pl(30), bH.pl(30)]);
					else
						for (aB = 0; aB < ep; aB++) data.push([bH.pl(20), bH.pl(30), bH.pl(30), bH.pl(30), bH.pl(30), bH.aTM(32), bH.pl(30), bG.w8.wC(bH.pl(5)), bG.w8.wC(bH.pl(5))]);
					8 === t.ss && t.a5A().aCN(21, !0, {
						tB: tB,
						data: data
					})
				} else b0.y.aSh(0, 3260)
			}
		}
	}, this.aSy = function() {
		if (bH.size < bD.aTL(29)) b0.y.aSh(0, 3265);
		else {
			var aTO = bH.pl(4),
				aTP = bH.pl(7),
				aTQ = bH.pl(11);
			if (bH.aTN(29 + 16 * aTP + 16 * aTQ + 11 * aTO)) {
				for (var data = [], aB = 0; aB < aTO; aB++) {
					for (var a0q = bG.w8.wC(bH.pl(3)), aTR = bH.pl(8), aOz = [], f8 = 0; f8 < aTR; f8++) aOz.push(bH.pl(16));
					data.push({
						name: "[" + a0q + "]",
						aOz: aOz
					})
				}
				8 === t.ss && t.a5A().aCN(23, !0, data)
			} else b0.y.aSh(0, 3266)
		}
	}
}

function aSI() {
	function aTT() {
		var id = bH.pl(3);
		return 0 === id ? {
			id: id,
			sq: bH.pl(30),
			r: bn.aCp.aEn(bG.wA.wS(7))
		} : 1 === id ? {
			id: id,
			sq: bH.pl(30),
			aDq: bH.pl(3),
			value: bH.pl(30),
			target: bH.pl(30)
		} : 2 === id ? {
			id: id,
			sq: bH.pl(30),
			aDq: bH.pl(3)
		} : 3 === id ? {
			id: id,
			sq: bH.pl(30),
			aDq: bH.pl(3),
			value: bH.pl(4),
			target: bH.pl(30)
		} : 4 === id ? {
			id: id,
			sq: bH.pl(30),
			aDq: bH.pl(3),
			target: bH.pl(30)
		} : 5 === id ? {
			id: id,
			aDq: bH.pl(6)
		} : 6 === id ? {
			id: id,
			value: bH.pl(17)
		} : null
	}
	this.aSs = function(a1G) {
		if (a1G !== b0.y.a1J) b0.y.close(a1G, 3239);
		else if (6 !== aa.a1L()) b0.y.close(a1G, 3271);
		else {
			bn.dd();
			for (var aB = 0; aB < 4; aB++) {
				var ri = bn.y.rj[aB],
					playerCount = (ri.tj = bH.pl(10), ri.eV = bH.pl(6), ri.mapSeed = bH.pl(14), ri.aDb = bH.pl(4), ri.aFK = bH.pl(6), ri.aFL = bH.pl(4), ri.aDh = bH.pl(1), ri.aEO = bH.pl(12), ri.spawningSeed = bH.pl(14), bH.pl(16));
				bn.ty.u0[aB] = bH.pl(16);
				for (var f8 = 0; f8 < playerCount; f8++) bn.ty.aD3(aB, bH.pl(30), bG.wA.wS(5), bH.pl(4), bH.pl(30), bH.pl(7), bH.pl(16), bH.pl(18), bH.pl(11), bH.pl(12))
			}
			t.u(29), bn.y.aEG(!0)
		}
	}, this.aT0 = function(a1G) {
		if (a1G !== b0.y.a1J) b0.y.close(a1G, 3239);
		else if (bn.a1I) {
			bn.y.aEE[0] = bH.pl(20), bn.y.aEE[1] = bH.pl(20);
			for (var aTS = bH.pl(16), f8 = 0; f8 < aTS; f8++) {
				var id = bH.pl(3);
				0 === id ? bn.ty.aD3(bH.pl(2), bH.pl(30), bG.wA.wS(5), 0, 1234566, 127, 0, bH.pl(18), 0, bH.pl(12)) : 1 === id ? bn.ty.aDM(bH.pl(16), bH.pl(2)) : 2 === id ? bn.ty.aDI(bH.pl(16), bH.pl(2), bH.pl(2)) : 3 === id ? bn.ty.aDL(bH.pl(
					16), bH.pl(2)) : 4 === id ? bn.ty.aDB(bH.pl(16), bH.pl(2), bH.pl(4), bH.pl(30), bH.pl(7), bH.pl(16), bH.pl(11)) : 5 === id && bn.ty.aDC(bH.pl(16), bH.pl(2), bH.pl(1))
			}
			for (var aB = 0; aB < 4; aB++) {
				var ri = bn.y.rj[aB];
				if (ri.tj = bH.pl(10), 0 === ri.tj) {
					if (ri.a1Q = bH.pl(10), ri.aDf = bH.pl(10), bn.aCr.dm(aB)) return;
					ri.eV = bH.pl(6), ri.mapSeed = bH.pl(14), ri.aDb = bH.pl(4), ri.aFK = bH.pl(6), ri.aFL = bH.pl(4), ri.aDh = bH.pl(1), ri.aEO = bH.pl(12), ri.spawningSeed = bH.pl(14), ri.aFM.push(ri.aFM[0]), ri.aFM.shift()
				}
			}
			bn.y.aDX()
		} else b0.y.close(a1G, 3251)
	}, this.aT1 = function(a1G) {
		if (a1G !== b0.y.a1J) b0.y.close(a1G, 3272);
		else if (bn.a1I) {
			for (var rg = bH.pl(4), ri = bn.y.rj[rg], rk = ri.rk, uE = (ri.rl = bH.pl(20), bH.pl(6)), aB = 0; aB < uE; aB++) {
				var aFd = aTT();
				bn.rt.aFc(aFd), rk.push(aFd)
			}
			bn.y.aEP(rg)
		} else b0.y.close(a1G, 3273)
	}, this.aT2 = function(a1G) {
		a1G !== b0.y.a1J ? b0.y.close(a1G, 3276) : bn.a1I ? bn.message.aDV(aTT()) : b0.y.close(a1G, 3277)
	}
}

function aSK() {
	this.aT3 = function(a1G) {
		var es = bH.pl(5),
			es = bi.aTU.aTV(es, bH.pl(30), bH.pl(30), bH.pl(30));
		b0.aCK.aTW(a1G, es)
	}, this.aSt = function(a1G) {
		var aTG, r9, aTX;
		bH.aTN(165) ? (aTG = bH.pl(3), r9 = bi.aTU.j5(bH.pl(30), bH.pl(30)), aTX = bi.aTU.aTV(bH.pl(5), bH.pl(30), bH.pl(30), bH.pl(30)), b0.aCK.aTY(a1G, r9, aTX, aTG), 0 < aTG || (0 === a1G && 0 === bj.eL.data[105].value.length ? b0.aCK.aPp(0) :
			b0.aFG.aTZ(a1G), 4 === b0.y.aSU(a1G).aTa() ? 6 === aa.a1L() && b0.aEi.aG9(a1G) : 5 !== b0.y.aSU(a1G).aTa() || 8 !== aa.a1L() && 10 !== aa.a1L() || b0.p7.aGY())) : b0.y.aSh(a1G, 3269)
	}, this.aSv = function(a1G) {
		var id = bH.pl(6);
		1 === id ? (bj.s5.s6(160, bH.pl(30)), b0.y.aSe(a1G), aT.a9T || b0.aCK.aPp(1), b7.aCI(), 8 === t.ss && t.a5A().aQ0()) : 21 === id ? 8 === t.ss && t.a5A().aCN(17) : 22 === id && (bj.s5.s6(106, bj.eL.data[110].value), bj.s5.s6(110, ""),
			8 === t.ss) && t.a5A().aCN(15)
	}, this.aSz = function() {
		var ep = bH.pl(16),
			aTb = bH.pl(16);
		if (bH.aTN(55 + 10 * ep + 16 * aTb)) {
			for (var g = [], aB = 0; aB < ep; aB++) g.push(bG.w8.wC(bH.pl(10)));
			b7.aCM(g)
		} else b0.y.aSh(0, 3270)
	}
}

function aSA() {
	this.aSV = function(a1G, aST) {
		bD.a7(11), bD.a8(1, 0), bD.a8(6, 4), bD.a8(1, aST ? 1 : 0), bD.a8(3, 0 === aD.a0A ? bn.a1I ? 6 : 0 : aD.gy ? 1 : aD.kW ? 7 : aD.kU < 7 ? 2 : 8 === aD.kU ? 4 : 9 === aD.kU ? 5 : 3), b0.y.send(a1G, bD.aC)
	}, this.aGY = function() {
		bD.a7(58), bD.a8(1, 0), bD.a8(6, 5), bD.a8(8, b0.y.a1J), bD.a8(10, ax.aDf), bD.a8(9, ax.aGR), bD.a8(10, l.dy), bD.a8(14, l.dq), b0.y.send(b0.y.a1Q, bD.aC)
	}, this.p8 = function(eb) {
		bD.a7(27), bD.a8(1, 1), bD.a8(4, 0), bD.a8(22, eb), b0.y.send(b0.y.a1Q, bD.aC)
	}, this.p9 = function(iP, jL) {
		bD.a7(25), bD.a8(1, 1), bD.a8(4, 1), bD.a8(10, iP), bD.a8(10, jL), b0.y.send(b0.y.a1Q, bD.aC)
	}, this.pD = function(iP, pB) {
		bD.a7(24), bD.a8(1, 1), bD.a8(4, 2), bD.a8(10, iP), bD.a8(9, pB), b0.y.send(b0.y.a1Q, bD.aC)
	}, this.pF = function(iP, pE) {
		bD.a7(42), bD.a8(1, 1), bD.a8(4, 3), bD.a8(10, iP), bD.a8(27, pE), b0.y.send(b0.y.a1Q, bD.aC)
	}, this.pH = function(iP, n8) {
		bD.a7(31), bD.a8(1, 1), bD.a8(4, 4), bD.a8(10, iP), bD.a8(16, n8), b0.y.send(b0.y.a1Q, bD.aC)
	}, this.pK = function(jL) {
		bD.a7(15), bD.a8(1, 1), bD.a8(4, 5), bD.a8(10, jL), b0.y.send(b0.y.a1Q, bD.aC)
	}, this.pO = function(e9) {
		bD.a7(15), bD.a8(1, 1), bD.a8(4, 6), bD.a8(10, e9), b0.y.send(b0.y.a1Q, bD.aC)
	}, this.pQ = function(pP) {
		bD.a7(6), bD.a8(1, 1), bD.a8(4, 7), bD.a8(1, pP), b0.y.send(b0.y.a1Q, bD.aC)
	}, this.pS = function() {
		bD.a7(5), bD.a8(1, 1), bD.a8(4, 8), b0.y.send(b0.y.a1Q, bD.aC)
	}, this.pT = function(iP, eb, jL) {
		bD.a7(47), bD.a8(1, 1), bD.a8(4, 10), bD.a8(10, iP), bD.a8(10, jL), bD.a8(22, eb), b0.y.send(b0.y.a1Q, bD.aC)
	}, this.pb = function(aTc, aTd) {
		bD.a7(24), bD.a8(1, 1), bD.a8(4, 15), bD.a8(9, aTd), bD.a8(10, aTc), b0.y.send(b0.y.a1Q, bD.aC)
	}, this.pe = function(a6h) {
		bD.a7(14), bD.a8(1, 1), bD.a8(4, 14), bD.a8(9, a6h), b0.y.send(b0.y.a1Q, bD.aC)
	}, this.pi = function(aTe, target) {
		var aB, ep = aTe.length;
		for (bD.a7(14 + 9 * ep), bD.a8(1, 1), bD.a8(4, 13), bD.a8(9, target), aB = 0; aB < ep; aB++) bD.a8(9, aTe[aB]);
		b0.y.send(b0.y.a1Q, bD.aC)
	}
}

function aSD() {
	this.aTf = function() {
		bD.a7(39), bD.a8(1, 0), bD.a8(6, 16), b0.aCK.aTg(), b0.y.send(0, bD.aC)
	}, this.aTZ = function(a1G) {
		bD.a7(115), bD.a8(1, 0), bD.a8(6, 17), bG.sv.wO(bj.eL.data[105].value, 5), bG.sv.wO(bj.eL.data[106].value, 8), bD.a8(30, bj.eL.data[109].value), b0.y.send(a1G, bD.aC)
	}, this.aQ2 = function() {
		bD.a7(55), bD.a8(1, 0), bD.a8(6, 18), bG.sv.wN(bj.eL.data[110].value), b0.y.send(0, bD.aC)
	}, this.aPy = function(a3y) {
		var ep = a3y.qK.length;
		bD.a7(21 + 16 * ep), bD.a8(1, 0), bD.a8(6, 29), bD.a8(6, a3y.su), bD.a8(8, ep), bF.w8.wN(a3y.qK), b0.y.send(0, bD.aC)
	}, this.aOH = function(data) {
		bD.a7(43), bD.a8(1, 0), bD.a8(6, 25), bD.a8(6, data.su), bG.sv.wO(data.sq, 5), b0.y.send(0, bD.aC)
	}, this.aFH = function(data) {
		bD.a7(75), bD.a8(1, 0), bD.a8(6, 27), bD.a8(6, data.su), bG.sv.wO(data.sq, 5), bD.aTK(32, data.value), b0.y.send(0, bD.aC)
	}
}

function aSE() {
	this.pj = function() {
		for (var ep = aD.kC, zz = bR.result.zz, l7 = zz.length, a0j = (bD.a7(17 + 16 * ep + 33 * l7), bD.a8(1, 1), bD.a8(4, 12), bD.a8(10, l7), bD.a8(1, +(2 === aD.a07)), bD.a8(1, aD.a0R % 2), ag.a0j), aB = 0; aB < ep; aB++) bD.a8(16, a0j[aB]);
		for (var gd = ag.gd, aB = 0; aB < l7; aB++) {
			var gN = zz[aB];
			bD.a8(9, gN), bD.a8(24, gd[gN])
		}
		b0.y.send(b0.y.a1Q, bD.aC)
	}
}

function aSF() {
	this.aPr = function(tB, tC, tD) {
		bD.a7(75), bD.a8(1, 0), bD.a8(6, 21), bD.a8(6, tB), bD.a8(1, +(tC < 0)), bD.a8(1, +(tD < 0)), bD.a8(30, Math.abs(tC)), bD.a8(30, Math.abs(tD)), b0.y.send(0, bD.aC)
	}, this.aPs = function(tB, aPt, aPu) {
		bD.a7(18 + 16 * aPt.length + 30), bD.a8(1, 0), bD.a8(6, 22), bD.a8(6, tB), b0.aCK.aTi(aPt), bD.a8(30, aPu), b0.y.send(0, bD.aC)
	}, this.aPx = function(tB, aPt, aPu) {
		bD.a7(73), bD.a8(1, 0), bD.a8(6, 28), bD.a8(6, tB), bG.sv.wO(aPt, 5), bD.a8(30, aPu), b0.y.send(0, bD.aC)
	}, this.aPv = function(aOy, a0p) {
		for (var ep = a0p.length, hm = 0, aB = 0; aB < ep; aB++) hm += a0p[aB].length;
		for (bD.a7(21 + 3 * ep + 16 * hm), bD.a8(1, 0), bD.a8(6, 23), bD.a8(3, aOy), bD.a8(4, ep), bD.a8(7, hm), aB = 0; aB < ep; aB++) bD.a8(3, a0p[aB].length), bF.w8.wN(a0p[aB]);
		b0.y.send(0, bD.aC)
	}, this.aPw = function(aOy, tC, tD) {
		bD.a7(52), bD.a8(1, 0), bD.a8(6, 24), bD.a8(3, aOy), bD.a8(1, +(tC < 0)), bD.a8(1, +(tD < 0)), bD.a8(20, Math.abs(tC)), bD.a8(20, Math.abs(tD)), b0.y.send(0, bD.aC)
	}
}

function aSB() {
	this.aG9 = function(a1G) {
		var username = bj.eL.data[122].value.slice(0, 20),
			username = (bD.a7(24 + 16 * username.length + 18 + 18 + bi.aTj.pl()), bD.a8(1, 0), bD.a8(6, 1), bD.a8(10, l.dy), bD.a8(2, bj.eL.data[158].value), b0.aCK.aTi(username), bA.color.a33(bj.y.vn())),
			username = (bD.a8(6, username[0]), bD.a8(6, username[1]), bD.a8(6, username[2]), b7.aCP());
		bD.a8(9, username[0]), bD.a8(9, username[1]), bi.aTj.zc(), b0.y.a1J = a1G, b0.y.send(a1G, bD.aC)
	}, this.aEj = function(aTm, a3y) {
		bE.dd(), bE.a8(1, 0), bE.a8(6, 2), bE.a8(3, aTm), 2 === aTm ? bE.a8(2, a3y) : 3 === aTm ? bF.wA.zc(a3y, 7, bE) : 5 === aTm && (bE.a8(3, a3y.id), bE.a8(3, a3y.value), bE.a8(30, a3y.sq)), b0.y.send(b0.y.a1J, bE.aTn())
	}
}

function aSC() {
	this.aSd = function(a1G) {
		bD.a7(39), bD.a8(1, 0), bD.a8(6, 13), bD.a8(14, l.dq), bD.a8(4, a0.id), bD.a8(7, a0.dw), bD.a8(1, +l.a9), bD.a8(1, +l.aA), bD.a8(5, (new Date).getHours() % 24), b0.y.send(a1G, bD.aC)
	}, this.aTY = function(a1G, r9, aTX, aTG) {
		bD.a7(100), bD.a8(1, 0), bD.a8(6, 14), bD.a8(3, aTG), bD.a8(30, r9[0]), bD.a8(30, r9[1]), bD.a8(30, aTX), b0.y.send(a1G, bD.aC)
	}, this.aTW = function(a1G, r9) {
		bD.a7(37), bD.a8(1, 0), bD.a8(6, 30), bD.a8(30, r9), b0.y.send(a1G, bD.aC)
	}, this.aPp = function(id) {
		bD.a7(13), bD.a8(1, 0), bD.a8(6, 15), bD.a8(6, id), b0.y.send(0, bD.aC)
	}, this.aCL = function(id, qK) {
		var ep = Math.min(qK.length, 63);
		bD.a7(19 + 16 * ep), bD.a8(1, 0), bD.a8(6, 26), bD.a8(6, id), bD.a8(6, ep), bF.w8.wN(qK), b0.y.send(0, bD.aC)
	}, this.aTp = function(aTA, qV) {
		bD.a7(7 + 26 * qV.length), bD.a8(1, 0), bD.a8(6, 9);
		for (var aB = 0; aB < qV.length; aB++) bD.a8(16, qV[aB][0]), bD.a8(10, qV[aB][1]);
		b0.y.send(aTA, bD.aC)
	}, this.aSk = function(aTq, aTr) {
		bD.a7(20), bD.a8(1, 0), bD.a8(6, 19), bD.a8(1, aTq), bD.a8(12, aTr), b0.y.send(b0.y.a1Q, bD.aC)
	}, this.aTi = function(username) {
		bD.a8(5, username.length), bF.w8.wN(username)
	}
}

function aSb() {
	var a1G, aN5, aTs, aTt = ["wss://", "/s50/", "/s51/", "/s52/"],
		aTu = 0;

	function aSc() {
		b0.y.aSc(a1G, aN5)
	}

	function aTy(e) {
		b0.a6h.aSm(a1G, new Uint8Array(e.data))
	}

	function aTz() {}

	function aSj(e) {
		b0.y.aSj(a1G, e)
	}
	this.dd = function(e9, aTv) {
		a1G = e9, aN5 = aTv, e9 = l.dr ? "ws://localhost:" + (7130 + a1G) + "/" : aTt[0] + b0.y.aSQ[a1G] + aTt[1 + l.ds], (aTs = new WebSocket(e9)).binaryType = "arraybuffer", aTs.onopen = aSc, aTs.onmessage = aTy, aTs.onclose = aSj, aTs
			.onerror = aTz
	}, this.aTx = function() {
		return aTs.readyState === aTs.CONNECTING
	}, this.aNz = function() {
		return aTs.readyState === aTs.OPEN
	}, this.aSX = function() {
		return aTu
	}, this.aSe = function() {
		aTu = 1
	}, this.aSZ = function() {
		return this.aTx() || this.aNz()
	}, this.aSa = function(aTv) {
		aN5 = aTv
	}, this.aTa = function() {
		return aN5
	}, this.send = function(aC) {
		this.aNz() && aTs.send(aC)
	}, this.close = function(aSg) {
		this.aSZ() && (aTs.close(aSg), this.ru())
	}, this.ru = function() {
		aTs.onopen = null, aTs.onmessage = null, aTs.onclose = null, aTs.onerror = null
	}
}

function dK() {
	var gap, aU0 = !1,
		a72 = 0,
		i = 0,
		sz = 0,
		canvas = null,
		yK = null,
		a2d = null;

	function aU2() {
		for (var aU8, aU6 = 0, ep = 0, fA = Math.floor(i / 2), e8 = Math.floor(sz / 2), aU7 = 1.5 * Math.PI, aB = aD.xM; 0 <= aB; aB--) ep += a2d[aB], 0 === a2d[aB] && aU6++;
		if (aU0 = !1, yK.clearRect(0, 0, i, i), 0 < ep)
			if (aU6 === aD.xM) {
				for (aB = aD.xM; 0 <= aB; aB--)
					if (0 < a2d[aB]) {
						! function(aB, fA, e8) {
							yK.fillStyle = bg.aUF[bg.kZ[aB]], yK.beginPath(), yK.arc(fA, fA, e8, 0, 2 * Math.PI), yK.fill()
						}(aB, fA, e8);
						break
					}!
				function(fA) {
					var fontSize = fA / 3;
					yK.font = bA.qd.sS(1, fontSize), yK.fillStyle = bB.nl, yK.fillText("100%", fA, fA + .1 * fontSize)
				}(fA)
			} else {
				for (aB = 0; aB <= aD.xM; aB++) 0 < a2d[aB] && (! function(aB, fA, e8, aU7, aU8) {
					yK.fillStyle = bg.aUF[bg.kZ[aB]], yK.beginPath(), yK.arc(fA, fA, e8, aU7, aU8), yK.lineTo(fA, fA), yK.fill()
				}(aB, fA, e8, aU7, aU8 = aU7 + 2 * Math.PI * a2d[aB] / ep), function(fA, e8, aU7, aU8) {
					var fH = (aU8 - aU7) / (2 * Math.PI),
						fontSize = (__fx.settings.detailedTeamPercentage ? 0.75 : 1) * e8 * Math.min(fH, .37);
					fontSize < 8 || (aU7 = (aU7 + aU8) / 2, aU8 = (__fx.settings.detailedTeamPercentage ? (100 * fH).toFixed(2) : Math.floor(100 * fH + .5)) + "%", e8 *= .525 - Math.max(.6 * (fH - .7), 0), yK.font = bA.qd.sS(1, fontSize), yK
						.fillStyle = bB.nl, yK.fillText(aU8, fA + Math.cos(aU7) * e8, fA + Math.cos(aU7 + 1.5 * Math.PI) * e8))
				}(fA, e8, aU7, aU8), 0 !== aB && aUD(fA, e8, aU7), aU7 = aU8);
				aUD(fA, e8, 1.5 * Math.PI)
			}!
		function(fA, e8) {
			yK.beginPath(), yK.arc(fA, fA, e8, 0, 2 * Math.PI), yK.stroke()
		}(fA, e8)
	}

	function aUD(fA, e8, aUG) {
		yK.beginPath(), yK.moveTo(fA, fA), yK.lineTo(fA + Math.cos(aUG) * e8, fA + Math.cos(aUG + 1.5 * Math.PI) * e8), yK.stroke()
	}
	this.dd = function() {
		if (aD.hj) {
			a72 = 0, a2d = new Uint32Array(aD.xM + 1);
			for (var aB = aD.xM; 0 <= aB; aB--) a2d[aB] = 0;
			for (aB = al.ki - 1; 0 <= aB; aB--) a2d[bg.en[al.kn[aB]]] += 1;
			this.resize()
		} else a2d = yK = canvas = null
	}, this.a80 = function() {
		return i
	}, this.resize = function() {
		aD.hj && (i = Math.floor(.95 * (a0.a1.hy() && !aD.nE ? .18 * h.min : .13 * h.hz)), i = (i *= 1 + (.5 + .2 * a0.a1.hy()) * aD.nE) + i % 2, gap = Math.max(1, .015 * i), sz = Math.floor(i - .5 * gap), (canvas = canvas || document
			.createElement("canvas")).width = i, canvas.height = i, (yK = canvas.getContext("2d", {
			alpha: !0
		})).lineWidth = gap, yK.strokeStyle = bB.nl, bA.qd.textAlign(yK, 1), bA.qd.textBaseline(yK, 1), aU2())
	}, this.kj = function() {
		var dt, kk = this.kl();
		return bg.kZ[kk] || (kk = function() {
			for (var kk = -1, aB = aD.xM; 1 <= aB; aB--)(-1 === kk || a2d[aB] > a2d[kk]) && (kk = aB);
			return kk
		}(), dt = ag.gd[ln[0]], -1 !== kk && a2d[kk] > dt) ? a2d[kk] : dt
	}, this.a13 = function() {
		return a72 = 31, this.j5(), this.kl()
	}, this.kl = function() {
		for (var kk = 0, aB = aD.xM; 0 < aB; aB--) a2d[aB] > a2d[kk] && (kk = aB);
		return kk
	}, this.a8M = function() {
		return a2d[2] > 2 * a2d[1] || a2d[1] > 4 * a2d[2]
	}, this.kD = function(aU4) {
		for (var gI = 0, kn = al.kn, en = bg.en, ep = al.ki, fT = bO.fT, aB = 0; aB < ep; aB++) {
			var gN = kn[aB];
			en[gN] === aU4 && (fT[gI++] = gN)
		}
		bO.fK[0] = gI
	}, this.km = function(aU4) {
		for (var gI = 0, kn = al.kn, en = bg.en, ep = al.ki, fT = bO.fT, aB = 0; aB < ep; aB++) {
			var gN = kn[aB];
			en[gN] !== aU4 && (fT[gI++] = gN)
		}
		bO.fK[0] = gI
	}, this.a3W = function() {
		for (var gI = 0, aB = aD.xM; 0 <= aB; aB--) gI += 0 < a2d[aB];
		return gI
	}, this.j5 = function() {
		if (aD.hj && 32 <= ++a72) {
			a72 = 0;
			for (var aB = aD.xM; 0 <= aB; aB--) a2d[aB] = 0;
			for (aB = al.ki - 1; 0 <= aB; aB--) a2d[bg.en[al.kn[aB]]] += ag.gd[al.kn[aB]];
			aU0 = !0
		}
	}, this.mY = function() {
		aD.hj && aU0 && aU2()
	}, this.ul = function() {
		aD.hj && (aD.nE ? um.drawImage(canvas, bc.gap, bc.gap) : um.drawImage(canvas, bc.gap, a7z + 2 * bc.gap))
	}
}

function da() {
	function aUM(ew, ep, ey, zm, a9I, fG) {
		if (!(ey < 1 || a9I < ey))
			for (var aB = 0; aB <= ep; aB++) {
				var eT = bM.iT(ew, ey);
				if (zm(eT)) return eT >> 2;
				ew += fG
			}
		return -1
	}

	function aUQ(ey, ep, ew, zm, aUK, fG) {
		if (!(ew < 1 || aUK < ew)) {
			ep = Math.max(ep, 0);
			for (var aB = 0; aB <= ep; aB++) {
				var eT = bM.iT(ew, ey);
				if (zm(eT)) return eT >> 2;
				ey += fG
			}
		}
		return -1
	}

	function aUU(iG, iH, aUH) {
		return -1 !== iH && (-1 === iG || bM.iI(iH, aUH) < bM.iI(iG, aUH)) ? iH : iG
	}
	this.hE = function(aUH) {
		return this.a0E(aUH, function(eT) {
			return ac.ek(eT)
		})
	}, this.hK = function(aUH) {
		return this.a0E(aUH, function(eT) {
			return ac.aHH(eT, aD.eZ)
		})
	}, this.a0E = function(aUH, zm) {
		return function(aUH, aUI, zm) {
			for (var h4 = bM.ex(aUH), h6 = bM.ez(aUH), aUK = bS.f0 - 2, a9I = bS.f1 - 2, aUL = -1, es = 0; es < aUI; es++) {
				var a9H = Math.max(h4 - es, 1),
					aLP = Math.max(h6 - es, 1),
					xx = Math.min(h4 + es, aUK),
					xw = Math.min(h6 + es, a9I),
					iG = aUM(h4, xx - h4, h6 - es, zm, a9I, 1),
					iH = aUM(h4 - 1, h4 - a9H - 1, h6 - es, zm, a9I, -1),
					xx = aUM(h4, xx - h4, h6 + es, zm, a9I, 1),
					a9H = aUM(h4 - 1, h4 - a9H - 1, h6 + es, zm, a9I, -1),
					aUP = aUQ(h6, xw - h6 - 1, h4 - es, zm, aUK, 1),
					aUR = aUQ(h6 - 1, h6 - aLP - 2, h4 - es, zm, aUK, -1),
					xw = aUQ(h6, xw - h6 - 1, h4 + es, zm, aUK, 1),
					aLP = aUQ(h6 - 1, h6 - aLP - 2, h4 + es, zm, aUK, -1);
				if (aUL = aUU(aUL, iG, aUH), aUL = aUU(aUL, iH, aUH), aUL = aUU(aUL, xx, aUH), aUL = aUU(aUL, a9H, aUH), aUL = aUU(aUL, aUP, aUH), aUL = aUU(aUL, aUR, aUH), aUL = aUU(aUL, xw, aUH), 0 <= (aUL = aUU(aUL, aLP, aUH)) && es *
					es >= bM.iI(aUL, aUH)) return aUL
			}
			return -1
		}(aUH, bM.hw(), zm)
	}
}

function d3() {
	function aUW(key) {
		var aRY;
		return "undefined" == typeof URLSearchParams || (aRY = window.location.search, "string" != typeof(aRY = new URLSearchParams(aRY).get(key))) || aRY.length < 1 ? null : aRY
	}
	this.dm = function() {
		if (0 !== a0.id) return !1;
		if (! function() {
				var value = aUW("account");
				if (!value && !(value = aUW("a"))) return void bI.clear();
				return bI.clear(), t.u(8, t.ss, new st(1e3, {
					su: 0,
					sq: value,
					sr: 0
				})), 1
			}()) {
			var value = aUW("replay");
			if (!this.clear()) return !1;
			if (!value) return !1;
			t.u(3, 0, value)
		}
		return !0
	}, this.clear = function() {
		var a1D = new URL(window.location.href);
		a1D.search = "";
		try {
			return history.replaceState(null, "", a1D.toString()), !0
		} catch (e) {
			console.log("error 352: " + e)
		}
		return !1
	}, this.aOU = function(key, value) {
		if (0 === a0.id) try {
			var a1D = new URL(window.location.href),
				gN = a1D.searchParams;
			gN.set(key, value), a1D.search = gN.toString(), history.replaceState(null, "", a1D.toString())
		} catch (e) {
			console.log("error 358: " + e)
		}
	}
}

function ck() {
	var aUY, g;
	this.dd = function() {
		for (var aB = (g = new Uint16Array(101)).length - 1; 0 <= aB; aB--) g[aB] = bL.du(32768 * aB, 100);
		this.a4i(0)
	}, this.value = function(gN) {
		return g[gN]
	}, this.aLH = function() {
		return bL.du(aUY - 1, 2)
	}, this.a4i = function(aKv) {
		aUY = 2 * aKv % 32768 + 1
	}, this.random = function() {
		return aUY = 167 * aUY % 32768
	}, this.jT = function(mg) {
		return bL.du(mg * this.random(), 32768)
	}, this.k4 = function(gN) {
		return 0 !== gN && this.random() < this.value(gN)
	}, this.im = function(f8, f9) {
		return f8 + this.jT(f9 - f8)
	}
}

function cz() {
	this.px = new aUZ, this.a4s = new aUa, this.aIX = new aUb, this.dd = function() {
		aD.gy || this.px.dd()
	}, this.j5 = function() {
		aD.gy || (this.px.j5(), 3 !== t.ss) || bf.k9() % 15 != 5 && 2 !== aD.a0A || t.a5A().aRZ()
	}, this.aRc = function() {
		0 === aD.a0A && aa.aGJ(), aD.a4c.a50(), aD.data.canvas = null, b0.y.close(b0.y.a1Q, 3257), b0.y.a1Q = 0, aD.data.isReplay = 1, aD.a4g()
	}, this.aRb = function(qK) {
		var aB = qK.indexOf("=");
		return 0 <= aB ? qK.substring(aB + 1) : qK
	}, this.aRa = function(qK) {
		return "https://territorial.io/?replay=" + qK
	}
}

function aUZ() {
	this.aUd = null, this.aUe = null, this.aUf = null, this.aUg = null, this.aUh = null, this.aUi = null, this.a4r = "";
	var aUj = 0;
	this.dd = function() {
		this.aUd = [], this.aUe = [], this.aUf = [], this.aUg = [], this.aUh = [0], this.aUi = [0], aUj = 0, this.a4r = ""
	}, this.py = function(id, fY, fa, fc) {
		aD.gy || 2 === aD.a0A || (0 === this.aUh[aUj] && (this.aUi[aUj] ? (this.aUh.push(1), this.aUi.push(0), aUj++) : this.aUh[aUj] = 1), this.aUd.push(id), this.aUe.push(fY), this.aUf.push(void 0 === fa ? 0 : fa), this.aUg.push(void 0 === fc ?
			0 : fc), this.aUi[aUj]++)
	}, this.j5 = function() {
		0 === this.aUh[aUj] ? this.aUi[aUj]++ : (this.aUh.push(0), this.aUi.push(0), aUj++)
	}
}

function aUb() {
	var aUk = 0;

	function aUo(qK, id) {
		aUk || (id ? 1 === id ? aN.a69 = L(472) + ": " + qK : t.u(4, 3, new v(L(473), qK, 1)) : t.u(4, 3, new v("⚠️ " + L(471), qK, 1)))
	}
	this.wS = function(qK, aUl) {
		var i8, qV;
		return aUk = aUl, bG.sv.wK(bG.sv.wI(bG.sv.wG(qK))), aN.a69 = "", !! function() {
			if (bH.size < 10) aUo("File Too Small");
			else {
				var aUq = bH.pl(12),
					aTr = (aUq !== l.rVersion && aUo("Incompatible Version   Required: " + l.rVersion + ("   Found: " + aUq) + ("   Compatible at territorial.io/" + aUq), 1), bH.pl(12)),
					aUr = bH.pl(31);
				if (aUr !== bH.size) aUo("Size Error: " + aUr + " " + bH.size);
				else if (function(j, aUq) {
						for (var gN = bH.aC, ep = bH.size, aTr = aUq, aB = 3; aB < ep; aB++) aTr = aTr + gN[aB] & 4095;
						return aTr === j || (aUo("Hash Error: " + aTr + " " + j + " " + ep), !1)
					}(aTr, aUq)) return 1
			}
			return
		}() && (i8 = bH, (qV = aD.data = new a4b).mapType = i8.pl(2), qV.mapProceduralIndex = i8.pl(8), qV.mapRealisticIndex = i8.pl(8), qV.mapSeed = i8.pl(14), qV.mapName = i8.aUt(5), 2 === qV.mapType && i8.aUu(), qV.passableWater = i8.pl(
			1), qV.passableMountains = i8.pl(1), qV.playerCount = i8.pl(10), qV.humanCount = i8.pl(10), qV.selectedPlayer = i8.pl(9), qV.gameMode = i8.pl(1), qV.playerMode = i8.pl(2), qV.battleRoyaleMode = i8.pl(2), qV.numberTeams = i8.pl(4),
			qV.isZombieMode = i8.pl(1), qV.isContest = i8.pl(1), qV.isReplay = i8.pl(1), qV.elo = i8.aUv(2, 14, 2), qV.colorsType = i8.pl(1), qV.colorsPersonalized = i8.pl(1), qV.colorsData = i8.aUv(10, 18, 512), qV.selectableColor = i8.pl(
			1), qV.teamPlayerCount = i8.aUv(4, 10, 9), qV.neutralBots = i8.pl(1), qV.botDifficultyType = i8.pl(2), qV.botDifficultyValue = i8.pl(4), qV.botDifficultyTeam = i8.aUv(4, 4, 9), qV.botDifficultyData = i8.aUv(10, 4, 512), qV
			.spawningType = i8.pl(2), qV.spawningSeed = i8.pl(14), qV.spawningData = i8.aUv(11, 12, 1024), qV.selectableSpawn = i8.pl(1), qV.playerNamesType = i8.pl(2), qV.playerNamesData = i8.aUw(10, 5, 512), qV.selectableName = i8.pl(1), qV
			.aIncomeType = i8.pl(2), qV.aIncomeValue = i8.pl(8), qV.aIncomeData = i8.aUv(10, 8, 512), qV.tIncomeType = i8.pl(2), qV.tIncomeValue = i8.pl(8), qV.tIncomeData = i8.aUv(10, 8, 512), qV.iIncomeType = i8.pl(2), qV.iIncomeValue = i8
			.pl(8), qV.iIncomeData = i8.aUv(10, 8, 512), qV.sResourcesType = i8.pl(2), qV.sResourcesValue = i8.pl(11), qV.sResourcesData = i8.aUv(10, 11, 512), !! function() {
				var i8 = bH,
					wT = i8.pl(5),
					aUx = i8.pl(30),
					aUy = i8.pl(30);
				if (aUx + aUy > 8 * i8.size) return void aUo("Corrupted File");
				return function(ep) {
						var aV1 = new Uint8Array(ep),
							aV2 = new Uint16Array(ep),
							aV3 = new Uint32Array(ep),
							aV4 = new Uint32Array(ep);
						b9.px.aUd = aV1, b9.px.aUe = aV2, b9.px.aUf = aV3, b9.px.aUg = aV4;
						for (var aB = 0; aB < ep; aB++) {
							var id = bH.pl(4);
							aV1[aB] = id, aV2[aB] = bH.pl(9), 0 === id ? aV3[aB] = bH.pl(22) : 1 === id ? (aV3[aB] = bH.pl(10), aV4[aB] = bH.pl(10)) : 2 === id ? (aV3[aB] = bH.pl(10), aV4[aB] = bH.pl(9)) : 3 === id ? (aV3[aB] = bH.pl(10),
								aV4[aB] = bH.pl(27)) : 4 === id ? (aV3[aB] = bH.pl(10), aV4[aB] = bH.pl(16)) : 5 === id || 6 === id ? aV3[aB] = bH.pl(10) : 7 === id ? aV3[aB] = bH.pl(1) : 10 === id && (aV3[aB] = bH.pl(20), aV4[aB] = bH
								.pl(22))
						}
					}(aUx),
					function(ep, wT) {
						var aUh = new Uint8Array(ep),
							aUi = new Array(ep);
						aUi.fill(0), b9.px.aUh = aUh, b9.px.aUi = aUi;
						for (var aB = 0; aB < ep; aB++) aUh[aB] = bH.pl(1), aUi[aB] = bH.pl(wT)
					}(aUy, wT), 1
			}()) && (bH.e9 < 8 * bH.size - 13 || bH.e9 > 8 * bH.size ? (aUo("Out Of Bounds Error: " + bH.e9 + " " + 8 * bH.size), !1) : (b9.px.a4r = qK, 2 !== aD.data.mapType || (aUo("Load base64 image...", 2), aUl)))
	}, this.aIY = function(aHy, aUp) {
		var a2y = document.createElement("canvas"),
			hr = a2y.getContext("2d");
		if (a2y.width = aHy.width, a2y.height = aHy.height, hr.drawImage(aHy, 0, 0), aD.data.canvas = a2y, aUk || aUp) return aD.a0A ? void 0 : (aD.data.mapType = 2, t.x(), void t.u(19));
		b9.aRc()
	}
}

function aUa() {
	this.zc = function() {
		var wT = function() {
				for (var aUi = b9.px.aUi, ep = aUi.length, max = 0, aB = 0; aB < ep; aB++) max = Math.max(max, aUi[aB]);
				return wa(Math.max(max, 1))
			}(),
			i = (qV = aD.data, (i = bE).dd(), i.a8(12, l.rVersion), i.e9 += 43, i.a8(2, qV.mapType), i.a8(8, qV.mapProceduralIndex), i.a8(8, qV.mapRealisticIndex), i.a8(14, qV.mapSeed), i.aVB(qV.mapName, 5), 2 === qV.mapType && i.aVC(qV.canvas),
				i.a8(1, qV.passableWater), i.a8(1, qV.passableMountains), i.a8(10, qV.playerCount), i.a8(10, qV.humanCount), i.a8(9, qV.selectedPlayer), i.a8(1, qV.gameMode), i.a8(2, qV.playerMode), i.a8(2, qV.battleRoyaleMode), i.a8(4, qV
					.numberTeams), i.a8(1, qV.isZombieMode), i.a8(1, qV.isContest), i.a8(1, qV.isReplay), i.dk(qV.elo, 2, 14), i.a8(1, qV.colorsType), i.a8(1, qV.colorsPersonalized), i.dk(qV.colorsData, 10, 18), i.a8(1, qV.selectableColor), i.dk(
					qV.teamPlayerCount, 4, 10), i.a8(1, qV.neutralBots), i.a8(2, qV.botDifficultyType), i.a8(4, qV.botDifficultyValue), i.dk(qV.botDifficultyTeam, 4, 4), i.dk(qV.botDifficultyData, 10, 4), i.a8(2, qV.spawningType), i.a8(14, qV
					.spawningSeed), i.dk(qV.spawningData, 11, 12), i.a8(1, qV.selectableSpawn), i.a8(2, qV.playerNamesType), i.aVD(qV.playerNamesData, 10, 5), i.a8(1, qV.selectableName), i.a8(2, qV.aIncomeType), i.a8(8, qV.aIncomeValue), i.dk(qV
					.aIncomeData, 10, 8), i.a8(2, qV.tIncomeType), i.a8(8, qV.tIncomeValue), i.dk(qV.tIncomeData, 10, 8), i.a8(2, qV.iIncomeType), i.a8(8, qV.iIncomeValue), i.dk(qV.iIncomeData, 10, 8), i.a8(2, qV.sResourcesType), i.a8(11, qV
					.sResourcesValue), i.dk(qV.sResourcesData, 10, 11), ! function(wT) {
					var i = bE,
						aUd = b9.px.aUd,
						fY = b9.px.aUe,
						fa = b9.px.aUf,
						fc = b9.px.aUg,
						ep = aUd.length;
					i.a8(5, wT), i.a8(30, ep), i.a8(30, b9.px.aUi.length);
					for (var aB = 0; aB < ep; aB++) {
						var fA = aUd[aB];
						i.a8(4, fA), i.a8(9, fY[aB]), 0 === fA ? i.a8(22, fa[aB]) : 1 === fA ? (i.a8(10, fa[aB]), i.a8(10, fc[aB])) : 2 === fA ? (i.a8(10, fa[aB]), i.a8(9, fc[aB])) : 3 === fA ? (i.a8(10, fa[aB]), i.a8(27, fc[aB])) : 4 === fA ? (i
							.a8(10, fa[aB]), i.a8(16, fc[aB])) : 5 === fA || 6 === fA ? i.a8(10, fa[aB]) : 7 === fA ? i.a8(1, fa[aB]) : 10 === fA && (i.a8(20, fa[aB]), i.a8(22, fc[aB]))
					}
				}(wT), ! function(wT) {
					for (var i = bE, aUh = b9.px.aUh, aUi = b9.px.aUi, ep = aUh.length, aB = 0; aB < ep; aB++) i.a8(1, aUh[aB]), i.a8(wT, aUi[aB])
				}(wT), bE.e9),
			qV = bL.du(i - 1, 6) + 1,
			wT = (bD.aTL(6 * qV) !== bE.g.length && bE.g.push(0), ! function() {
				var i = bE;
				i.e9 = 24, i.a8(31, i.g.length), i.e9 = 12, i.a8(12, function() {
					for (var g = bE.g, ep = g.length, aTr = l.rVersion, aB = 3; aB < ep; aB++) aTr = aTr + g[aB] & 4095;
					return aTr
				}())
			}(), bH.dd(bE.g), bF.sv.sw(bF.sv.sx(qV)));
		return bH.uF(), bE.dd(), wT
	}
}

function cp() {
	var fA, bu = !1,
		aVF = !1,
		aVG = -1e4,
		aVH = -1,
		aVI = 0;

	function resize(aVM) {
		fA = 0, ab.tK() && (aVK(aVM) || bu) && (bu = !1, bc.resize(), bW.aBu.resize(), aY.dd(), bY.dd(), aZ.resize(), aT.resize(), aO.resize(), t.resize(), 1 <= aD.a0A ? (aV.resize(!1), aU.resize(), aW.resize(), aS.resize(), aR.resize(), aN.resize(),
			aM.resize(), bC.resize(), aw.resize(), aP.resize(), aQ.resize(), aL.resize(), be.resize(), af.resize(), aX.resize(), bh.resize(), aS.a97()) : (aa.aGL(), aa.aGM()), bf.dl = !0)
	}

	function aVJ(fH) {
		return fH && 128 < fH ? Math.floor(fH) : 128
	}

	function aVK(aVM) {
		var i, j, aVO, sz, a8V;
		if (!(0 < h.sa)) return sz = aVJ(document.documentElement.clientWidth), a8V = aVJ(window.visualViewport && 2 !== a0.id ? window.visualViewport.height : document.documentElement.clientHeight), i = sz, j = a8V, aVO = 0 !== a0.id || i < j ?
			700 : 1200, aVO = Math.min(aVO / ((i + j) / 2), 1), aVO = 0 === bj.eL.data[1].value ? 2 * aVO / 3 : Math.min(aVO + (bj.eL.data[1].value - 1) * (1 - aVO) / 2, 1), h.k = (window.devicePixelRatio || 1) * aVO, __fx.hoveringTooltip
			.canvasPixelScale = h.k, aVM && !aVF ? (aVF = !0, t.removeChild(document.body, a1d)) : aVF && (aVF = !1, document.body.appendChild(a1d)), i = Math.floor(.5 + sz * h.k), j = Math.floor(.5 + a8V * h.k), i !== h.i || j !== h.j ? (h.i =
				i, h.j = j, h.min = aBW(i, j), h.max = a6O(i, j), h.hz = bL.du(i + j, 2), h.ui = i / j, a1d.width = i, a1d.height = j, a1d.style.width = sz + "px", a1d.style.height = a8V + "px", aVH = bf.eO + 1e3, 1) : void 0
	}
	this.i = 0, this.j = 0, this.min = 0, this.max = 0, this.hz = 0, this.ui = 1, this.k = 1, this.sa = 0, this.de = function() {
		this.i = aVJ(document.documentElement.clientWidth) + 2, this.j = aVJ(document.documentElement.clientHeight) + 2
	}, this.dd = function() {
		fA = 1, a1d = document.getElementById("canvasA"), 2 === a0.id && (a1d.style.webkitUserSelect = "none"), (um = a1d.getContext("2d", {
			alpha: !!__fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aVK(0)
	}, this.j5 = function() {
		50 <= ++fA && resize(0), -1 === aVH || bf.eO < aVH || (aVH = -1, 2e3 * ++aVI >= bf.eO + 8e3 ? console.log("error 3748") : a0.a1.setState(15))
	}, this.dp = function(jR) {
		bu = !0, resize(jR)
	}, this.a2I = function() {
		aVG + 1e3 > bf.eO || (aVG = bf.eO, resize(0))
	}
}

function dH() {
	this.aTU = new aVQ, this.a0z = new aVR, this.aTj = new aVS
}

function aVS() {
	this.pl = function() {
		return 69
	}, this.zc = function() {
		var i = window.screen.width,
			j = window.screen.height;
		bD.a8(26, (i * j + j) % 67108864), bD.a8(22, 0), bD.a8(21, 0)
	}
}

function aVR() {
	this.a10 = function() {
		for (var gN, ep = al.ki, zy = al.kn, a0j = ag.a0j, a8I = this.aHh(), aB = 0; aB < ep; aB++) gN = zy[aB], bA.gB.jZ(gN) || (a0j[gN] = a8I);
		var q2 = ag.q2,
			jE = ag.jE,
			jF = ag.jF,
			a0h = ag.a0h,
			ep = aD.kC;
		for (aB = 0; aB < ep; aB++)(0 === a0h[aB] || jF[aB] < 1 || 2 * q2[aB] > 3 * (jE[aB] + jF[aB])) && (a0j[aB] = 0);
		var a0x = 0;
		for (aB = 0; aB < ep; aB++) a0x += 0 < a0j[aB];
		return a0x
	}, this.aHh = function() {
		return Math.min(65535, bf.k9())
	}
}

function aVQ() {
	function aVW(g, fH, hh) {
		for (var aB = 0; aB < 256; aB++) g[aB] = (g[aB] + (fH >> (aB + hh) % 30 & 1)) % 256
	}
	this.j5 = function(aVT, aVU) {
		var g = new Uint8Array(256);
		return function(g, aVT, aVU) {
				var aB, aVY = 3 + (4 + aVT) % 32768,
					aVZ = 12 + aVU % 32768,
					aVa = 17 + ((aVT & aVU) + (aVT | aVU) + aVT) % 32768;
				for (aB = 0; aB < 256; aB++) aVY = 1 + aVY * aVZ % aVa, g[aB] = aVY % 256
			}(g, aVT, aVU), aVW(g, aVT, 2), aVW(g, aVU, 7),
			function(g) {
				var aB, fH, e9 = 0;
				for (aB = 0; aB < 3e4; aB++) fH = g[e9], g[e9] = (fH + aB + g[(e9 + aB) % 256]) % 256, e9 = (fH + aB + e9 + (fH & e9)) % 256
			}(g),
			function(g) {
				var aB, a8V = 1,
					th = 1;
				for (aB = 0; aB < 256; aB += 2) a8V = (1 + a8V) * (g[aB] + 1) % 1073741824, th = (1 + th) * (g[aB + 1] + 1) % 1073741824;
				return [a8V, th]
			}(g)
	}, this.aTV = function(aVb, aVc, aVd, result) {
		for (var gI = 1 << aVb, aB = 0; aB < gI; aB++)
			if (this.aVe(aB, aVc, aVd) === result) return aB;
		return 0
	}, this.aVe = function(aVf, aVc, aVd) {
		for (var xV = aVc + aVf, xe = aVd + aVf, fH = xV + xe & 2147483647, f8 = 1; f8 <= 16; f8++) fH = (fH = (fH ^ fH >> f8) >>> 1 + (3 & xV)) * (7 + (1023 & (xV | xe))) & 1073741823, xe >>= 1 + (1 & (xV >>= 1 + (1 & (fH += 65535 & xe))));
		return fH &= 1073741823
	}
}

function cm() {
	var aVg, aVh, i3, aVi;
	this.dd = function() {
		var aB, ew, ey, aTk, aVj, i, j, yK, ho, wk, fH, gN, f5, f8, aVm;
		if (function() {
				if (i3 = !0, aVi = "rgb(" + bS.wi[0] + "," + bS.wi[1] + "," + bS.wi[2] + ")", bS.aL4(bS.eV)) return 1;
				return i3 = !1, 0
			}()) aVh = null;
		else {
			for (aVg = bL.du(96, 4), aVj = 1 === bS.eV ? (aTk = 0, 160) : (aTk = 128, 32), aVi = "rgb(" + aTk + "," + aTk + "," + aTk + ")", aVh = new Array(4), aB = 3; 0 <= aB; aB--) {
				if (aVh[aB] = document.createElement("canvas"), i = aB % 2 == 0 ? bS.f0 : aVg, j = aB % 2 == 0 ? aVg : bS.f1 + 2 * aVg, aVh[aB].width = i, aVh[aB].height = j, wk = (ho = (yK = aVh[aB].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, i, j)).data, aB % 2 == 0)
					for (ey = aVg - 1; 0 <= ey; ey--)
						for (fH = aVj + Math.floor((ey + 1) * (aTk - aVj) / (aVg + 1)), ew = i - 1; 0 <= ew; ew--) wk[gN = 4 * ((0 === aB ? aVg - ey - 1 : ey) * i + ew)] = fH, wk[gN + 1] = fH, wk[gN + 2] = fH, wk[gN + 3] = 255;
				else {
					for (ew = aVg - 1; 0 <= ew; ew--)
						for (fH = aVj + Math.floor((ew + 1) * (aTk - aVj) / (aVg + 1)), ey = j - 1 - aVg; aVg <= ey; ey--) wk[gN = 4 * (ey * i + (3 === aB ? aVg - ew - 1 : ew))] = fH, wk[gN + 1] = fH, wk[gN + 2] = fH, wk[gN + 3] = 255;
					for (f8 = 1; 0 <= f8; f8--)
						for (ew = aVg - 1; 0 <= ew; ew--)
							for (ey = aVg - 1; 0 <= ey; ey--) f5 = (Math.pow(ew * ew + ey * ey, .5) + 1) / (aVg + 1), fH = aVj + Math.floor((1 < f5 ? 1 : f5) * (aTk - aVj)), wk[gN = 4 * ((0 === f8 ? aVg - ey - 1 : ey + f8 * (j - aVg)) * i + (
								1 === aB ? ew : aVg - ew - 1))] = fH, wk[gN + 1] = fH, wk[gN + 2] = fH, wk[gN + 3] = 255
				}
				yK.putImageData(ho, 0, 0)
			}
			aVm = aVj, bS.wd.fillStyle = "rgb(" + aVm + "," + aVm + "," + aVm + ")", bS.wd.fillRect(0, 0, bS.f0, 1), bS.wd.fillRect(0, bS.f1 - 1, bS.f0, 1), bS.wd.fillRect(0, 0, 1, bS.f1), bS.wd.fillRect(bS.f0 - 1, 0, 1, bS.f1)
		}
	}, this.yE = function() {
		var f8 = i3 ? 0 : -aVg;
		aMo(f8, f8, bS.f0 - 2 * f8, bS.f1 - 2 * f8, ba.aVn, ba.aVo, ba.aVp, ba.aVq) || (um.fillStyle = aVi, um.fillRect(0, 0, h.i, h.j))
	}, this.ul = function() {
		i3 || (aMn(0, -aVg, bS.f0, aVg, ba.aVn, ba.aVo, ba.aVp, ba.aVq) && um.drawImage(aVh[0], ba.aVr, ba.aVs - aVg), aMn(bS.f0, -aVg, aVg, bS.f1 + 2 * aVg, ba.aVn, ba.aVo, ba.aVp, ba.aVq) && um.drawImage(aVh[1], ba.aVr + bS.f0, ba.aVs - aVg),
			aMn(0, bS.f1, bS.f0, aVg, ba.aVn, ba.aVo, ba.aVp, ba.aVq) && um.drawImage(aVh[2], ba.aVr, ba.aVs + bS.f1), aMn(-aVg, -aVg, aVg, bS.f1 + 2 * aVg, ba.aVn, ba.aVo, ba.aVp, ba.aVq) && um.drawImage(aVh[3], ba.aVr - aVg, ba.aVs - aVg))
	}
}

function d6() {
	this.aHf = new aVt, this.yH = new aVu, this.y = new aVv, this.iZ = new aVw, this.aVm = new aVx, this.m7 = new aVy, this.k0 = new aVz, this.kz = new aW0, this.aW1 = new aW2, this.aW3 = new aW4, this.mI = new aW5, this.hP = new aW6, this.lY =
		new aW7, this.l1 = new aW8, this.hS = new aW9, this.mB = new aWA, this.qA = new aWB, this.dd = function() {
			this.lY.dd(), this.yH.dd(), this.y.dd(), this.iZ.dd(), this.aVm.dd(), this.aW3.dd(), this.mB.dd()
		}, this.ul = function() {
			this.aW3.ul(), this.yH.ul()
		}
}

function aVz() {
	this.j5 = function(player) {
		return !!bN.mI.mJ(player) && !(bN.y.kG[player] >= Math.max(3 * ao.performance.lQ, aE.kQ[aE.hY[player]]) || !bA.gB.mK(player, aE.kO[aE.hY[player]], 32, 0)) && (aW.aBJ() ? function(player) {
			var aWE = bN.l1.aBM(),
				ep = aWE.length;
			if (0 === ep) return !1;
			aWE = aWE[ay.jT(ep)], ep = bN.y.m5[aWE];
			if (bN.mB.mC(player, ep)) return !1;
			return !! function(player, mE) {
				var mE = bM.iX(bN.y.mH[mE]),
					h4 = bM.ex(mE),
					mE = bM.ez(mE),
					nB = ag.ih[player],
					nC = ag.ij[player],
					nO = ag.ii[player],
					player = ag.ik[player],
					nO = Math.max(h4 - nO, nB - h4),
					nB = Math.max(mE - player, nC - mE);
				return nO < 100 && nB < 100
			}(player, aWE) && !!bN.hS.q9(player, ep, 1) && (bA.gB.mM(player), bN.y.mN(player), !0)
		}(player) : !!(ao.j1.j5(player) || ao.iq.j5(player) || ao.is.j5(player)) && (function(player) {
			bO.fR[1] = 4, bA.gB.mM(player), bN.y.mN(player)
		}(player), !0))
	}
}

function aWA() {
	var aWH = 0,
		aWI = null;
	this.dd = function() {
		null === aWI && (aWI = new Uint16Array(2 * bN.y.kQ)), aWH = 0
	}, this.jI = function(aWJ, mB) {
		var aWK = aWI;
		aWK[aWH++] = aWJ, aWK[aWH++] = mB
	}, this.mC = function(player, mA) {
		for (var aWK = aWI, ep = aWH, aB = 0; aB < ep; aB += 2)
			if (aWK[aB] === mA && bN.l1.aWL(aWK[aB + 1]) && player === bN.y.m6[bO.fR[2]] >> 3) return !0;
		return !1
	}, this.aWM = function(aWN) {
		var m7 = bN.y.m3[aWN];
		if (!(m7 < 64)) {
			for (var mA = bN.y.m5[aWN], aWK = aWI, ep = aWH, aB = ep - 2; 0 <= aB; aB -= 2)
				if (aWK[aB] === mA) {
					{
						aWS = void 0;
						var aWS = aWK[aB + 1];
						bN.l1.aWL(aWS) && bN.mB.aWa(bO.fR[2])
					}
					aWK[aB] = aWK[ep - 2], aWK[aB + 1] = aWK[ep - 1], ep -= 2
				} aWH = ep
		}
	}, this.aWP = function(aWQ, aWR) {
		for (var aWS = bN.y.m5[aWQ], mA = -1, aWK = aWI, ep = aWH, aB = 1; aB < ep; aB += 2)
			if (aWK[aB] === aWS) {
				mA = aWK[aB - 1];
				break
			} if (-1 === mA) return !1;
		if (!bN.l1.aWL(mA)) return !1;
		var aWN = bO.fR[2],
			lX = bN.y.m4[aWN];
		if (aWR === lX[lX.length - 1]) bN.y.m4[aWQ] = bN.lY.aWT(bN.y.m4[aWQ], bN.lY.lg(lX));
		else {
			var aWU = bN.l1.aWV(lX, aWR);
			if (-1 === aWU) return !1;
			var aWW = bN.y.mG[aWN];
			aWU === aWW ? (aWN = bM.iX(bN.y.mH[aWN]), bN.y.m4[aWQ] = bN.lY.aWY(bN.y.m4[aWQ], lX, aWU, aWR, bM.iF(lX[aWU], aWR) > bM.iF(lX[aWU], aWN))) : bN.y.m4[aWQ] = bN.lY.aWY(bN.y.m4[aWQ], lX, aWU, aWR, aWW < aWU)
		}
		return !0
	}, this.aWa = function(aWb) {
		var lX, l7 = bN.y,
			m7 = l7.m3[aWb];
		return m7 % 64 != 5 && (lX = l7.m4[aWb], l7.aWc[aWb] = 65535 - l7.aWc[aWb], l7.mG[aWb] = lX.length - l7.mG[aWb] - 2, l7.m4[aWb] = bN.lY.lg(lX), l7.m3[aWb] = m7 - m7 % 64 + 5, !0)
	}
}

function aW5() {
	this.mJ = function(player) {
		return !!aD.data.passableWater && bN.y.m2 !== bN.y.kQ && bN.y.kG[player] !== bN.y.aWd && 0 !== ag.gW[player].length
	}, this.q5 = function(aUH) {
		var m7 = bO.fR[1];
		return !(4 <= m7 || !bN.l1.aWe(bM.ef(aUH))) && ac.ek(bM.ef(bM.ib(aUH, m7)))
	}
}

function aVt() {
	this.aHg = function(player) {
		for (var a7i = bN.y.a7i, tC = player << 3, aB = tC + bN.y.kG[player] - 1; tC <= aB; aB--) this.aWf(a7i[aB])
	}, this.aWf = function(aWg) {
		var y = bN.y,
			aWh = y.m2 - 1,
			aWi = y.m6[aWg],
			aWj = y.aWk[aWg],
			aWl = y.mH[aWg];
		y.m2 = aWh, y.m6[aWg] = y.m6[aWh], y.mH[aWg] = y.mH[aWh], y.aWc[aWg] = y.aWc[aWh], y.a6g[aWg] = y.a6g[aWh], y.aWk[aWg] = y.aWk[aWh], y.m5[aWg] = y.m5[aWh], y.m3[aWg] = y.m3[aWh], y.aWm[aWg] = y.aWm[aWh], y.m4[aWg] = y.m4[aWh], y.mG[aWg] =
			y.mG[aWh], y.a7i[y.m6[aWg]] = aWg,
			function(aUG) {
				var player = aUG >> 3,
					y = bN.y,
					ep = y.kG[player] - 1,
					aWp = (player << 3) + ep;
				y.kG[player] = ep, aWp !== aUG && (y.a7i[aUG] = y.a7i[aWp], y.m6[y.a7i[aUG]] = aUG)
			}(aWi), bN.iZ.iZ[bM.iY(y.mH[aWg])][y.aWk[aWg]] = aWg, aWh = bM.iY(aWl), aWi = aWj, aWh = bN.iZ.iZ[aWh], y = aWh.pop(), aWi !== aWh.length && (aWh[aWi] = y, bN.y.aWk[y] = aWi)
	}
}

function aVu() {
	var aWr, aWs = 8,
		aWt = null;

	function aWy(wk, eb, e9) {
		eb *= 4;
		wk[eb] = 255, wk[1 + eb] = 255, wk[2 + eb] = e9, wk[3 + eb] = 255
	}

	function aX0(hr, aVi) {
		var ew, ey, i9, eb, aX2, aX3, hl = aWs,
			ho = bA.qd.getImageData(hr, hl, hl),
			wk = ho.data,
			l7 = (hl >> 1) - .5,
			aX5 = bA.ql.a2W(aVi, .5);
		for (bA.ql.a2Y(aVi, aX5, 300) || bA.ql.a2a(aVi, 100), ey = 0; ey < hl; ey++)
			for (ew = 0; ew < hl; ew++) aX3 = (hl - 1.5) * (hl - 1.5) / 4, wk[eb = 4 * (ey * hl + ew)] = (aX2 = (i9 = (i9 = ew - l7) * i9 + (i9 = ey - l7) * i9) <= (hl - 4.5) * (hl - 4.5) / 4 ? aX5 : aVi)[0], wk[1 + eb] = aX2[1], wk[2 + eb] = aX2[2],
				wk[3 + eb] = aX3 < i9 ? 0 : 255;
		hr.putImageData(ho, 0, 0)
	}
	this.dd = function() {
		var e9, hl, a2y, hr, ho, wk;
		(aWr = aWr || new Array(aD.em)).fill(null), e9 = 255, hl = aWs + 4, a2y = bA.qd.wZ(hl, hl), hr = bA.qd.getContext(a2y, !0), ho = bA.qd.getImageData(hr, hl, hl), aWy(wk = ho.data, hl + 1, e9), aWy(wk, hl + 2, e9), aWy(wk, 2 * hl + 1, e9),
			aWy(wk, 2 * hl - 3, e9), aWy(wk, 2 * hl - 2, e9), aWy(wk, 3 * hl - 2, e9), aWy(wk, hl * (hl - 3) + 1, e9), aWy(wk, hl * (hl - 2) + 1, e9), aWy(wk, hl * (hl - 2) + 2, e9), aWy(wk, hl * (hl - 2) - 2, e9), aWy(wk, hl * (hl - 1) - 3, e9),
			aWy(wk, hl * (hl - 1) - 2, e9), hr.putImageData(ho, 0, 0), aWt = a2y,
			function() {
				if (aD.hj)
					for (var a2y = new Array(bg.kZ.length), ep = aD.em, aWw = aWr, aAh = bg.aAh, aB = 0; aB < ep; aB++) {
						var a5Q = aAh[aB];
						a2y[a5Q] || (a2y[a5Q] = function(a5Q) {
							var a2y = bA.qd.wZ(aWs, aWs),
								hr = bA.qd.getContext(a2y, !0),
								g = bO.fO;
							return g.set(bg.aX1[a5Q]), aX0(hr, g), a2y
						}(a5Q)), aWw[aB] = a2y[a5Q]
					}
			}()
	}, this.ul = function() {
		var aB, player, aX6, aMw, hY, i8, aX8, aXA, aXB, mH = bN.y.mH,
			m6 = bN.y.m6,
			a6g = bN.y.a6g,
			aWm = bN.y.aWm,
			aXC = aWr,
			aXD = aD.eZ,
			ep = bN.y.m2,
			aXE = h.i,
			aXF = h.j,
			aXG = bS.f0 << 4,
			ee = i0,
			eT = ee / aWs,
			nB = iQ / ee,
			nC = iR / ee,
			i9 = (aXE + iQ) / ee - nB,
			iC = (aXF + iR) / ee - nC,
			hr = um;
		for (hr.imageSmoothingEnabled = ee < 9, bA.qd.textAlign(hr, 1), bA.qd.textBaseline(hr, 1), aB = 0; aB < ep; aB++) player = m6[aB] >> 3, hY = a6g[aB], aX6 = .9 + .1 * Math.log10(hY), aMw = (i8 = mH[aB]) % aXG / 16 - aX6, i8 = aXF * (Math
			.floor(i8 / aXG) / 16 - aX6 - nC) / iC, aX8 = -2 * (aXB = ee * aX6) * (1 + (aXA = +(player === aXD)) / 8), aXA = aXA * aXB / 4, (aXB = aXE * (aMw - nB) / i9) < aX8 || i8 < aX8 || aXE + aXA < aXB || aXF + aXA < i8 || (aMw = 2 *
			aX6 * eT, aX8 = aX6 * ee, null === (aXA = aXC[player]) && (aXC[player] = aXA = function(player) {
				var a2y = bA.qd.wZ(aWs, aWs);
				return aX0(bA.qd.getContext(a2y, !0), ac.a7J(player)), a2y
			}(player)), player === aXD && (hr.setTransform(aMw, 0, 0, aMw, aXB - 2 * aMw, i8 - 2 * aMw), hr.drawImage(aWt, 0, 0)), hr.setTransform(aMw, 0, 0, aMw, aXB, i8), hr.drawImage(aXA, 0, 0), (aX6 = Math.floor(function(hY) {
				if (hY < 1e3) return .42;
				if (hY < 1e4) return .34;
				if (hY < 1e6) return .26;
				if (hY < 1e8) return .19;
				return .15
			}(hY) * aX8)) < 6) || (hr.setTransform(1, 0, 0, 1, 0, 0), hr.fillStyle = aWm[aB] ? bB.oJ : bB.nl, hr.font = bA.qd.sS(1, aX6), hr.fillText(bA.rc.zR(hY), aXB + aX8, i8 + aX8 + .1 * aX6));
		hr.imageSmoothingEnabled = !1, hr.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aW4() {
	var aXJ;
	this.dd = function() {
		if (aD.hj) {
			var hf = 1 - aD.xN;
			aXJ = new Array(bg.kZ.length);
			for (var aB = aD.xM - 1; 0 <= aB; aB--) {
				var a5Q = bg.kZ[aB + hf];
				aXJ[a5Q] = bP.y.aXL(20, bg.aXM[a5Q])
			}
			9 === aD.kU && (aXJ[1] = bP.y.aXL(20, bg.aXM[1]))
		} else aXJ = [bP.y.aXL(20, bg.aXM[7])]
	}, this.ul = function() {
		var nV = i0;
		if (!(5 <= nV)) {
			var aXE = h.i,
				aXF = h.j,
				nB = iQ / nV,
				nC = iR / nV,
				nO = (aXE + iQ) / nV,
				nP = (aXF + iR) / nV,
				gO = -20 * nV,
				aXO = .5 * gO,
				aXG = bS.f0 << 4,
				ep = bN.y.m2,
				mH = bN.y.mH,
				m6 = bN.y.m6,
				aAh = bg.aAh,
				a2y = aXJ,
				hr = um;
			3 < nV && (hr.globalAlpha = .5 * (5 - nV));
			for (var aB = 0; aB < ep; aB++) {
				var i8 = mH[aB],
					ew = aXE * (i8 % aXG / 16 - nB) / (nO - nB) + aXO,
					i8 = aXF * (Math.floor(i8 / aXG) / 16 - nC) / (nP - nC) + aXO;
				aXE < ew || aXF < i8 || ew < gO || i8 < gO || (hr.setTransform(nV, 0, 0, nV, ew, i8), hr.drawImage(a2y[aAh[m6[aB] >> 3]], 0, 0))
			}
			hr.globalAlpha = 1, hr.setTransform(nV, 0, 0, nV, 0, 0)
		}
	}
}

function aW8() {
	this.aXR = function(player, id) {
		for (var aXS = ag.gW[player], ep = aXS.length, aB = 0; aB < ep; aB++)
			if (bM.i1(aXS[aB], id)) return !0;
		return !1
	}, this.aXT = function(player, eb) {
		for (var iH, aXU, eT, aXS = ag.gW[player], ep = aXS.length, i = bS.f0, aXW = bM.ex(eb), aXX = bM.ez(eb), ev = -1, min = bS.f0 * bS.f0 + bS.f1 * bS.f1, id = ac.eX(bM.ef(eb)), aB = 0; aB < ep; aB++)(aXU = (aXU = aXW - (iH = (eT = aXS[
			aB]) >> 2) % i) * aXU + (aXU = aXX - ~~((.5 + iH) / i)) * aXU) < min && bM.i1(eT, id) && (min = aXU, ev = iH);
		return ev
	}, this.l2 = function(iG, iH) {
		for (var id = ac.eX(bM.ef(iH)), i2 = bM.hu, eT = bM.ef(iG), aXY = -1, aB = 0; aB < 4; aB++) {
			var ee = eT + i2[aB];
			ac.i3(ee) && ac.eX(ee) === id && (-1 === aXY || bM.iI(bM.ed(ee), iH) < bM.iI(aXY, iH)) && (aXY = bM.ed(ee))
		}
		return aXY
	}, this.lb = function(player, eb) {
		for (var i2 = bM.hu, eT = bM.ef(eb), aB = 0; aB < 4; aB++) {
			var ee = eT + i2[aB];
			if (ac.gP(ee) && ac.yC(player, ee)) return !0
		}
		return !1
	}, this.lc = function(player, eb) {
		for (var i2 = bM.hu, eT = bM.ef(eb), aB = 0; aB < 4; aB++) {
			var ee = eT + i2[aB];
			if (ac.eg(ee)) return !0;
			if (ac.gP(ee)) {
				ee = ac.eh(ee);
				if (player !== ee && bs.ei(player, ee)) return !0
			}
		}
		return !1
	}, this.m8 = function(eb) {
		for (var i2 = bM.hu, eT = bM.ef(eb), aB = 0; aB < 4; aB++) {
			var ee = eT + i2[aB];
			if (ac.gP(ee)) {
				ee = ac.eh(ee);
				if (bA.gB.jZ(ee)) return ee
			}
		}
		return -1
	}, this.aWe = function(eT) {
		if (ac.i3(eT))
			for (var i2 = bM.hu, aB = 0; aB < 4; aB++)
				if (ac.ek(eT + i2[aB])) return !0;
		return !1
	}, this.nA = function(player, id) {
		for (var tC = player << 3, tD = tC + bN.y.kG[player], m5 = bN.y.m5, a7i = bN.y.a7i, aB = tC; aB < tD; aB++) {
			var a7j = a7i[aB];
			if (m5[a7j] === id) return a7j
		}
		return -1
	}, this.nF = function(player) {
		return 0 === bN.y.kG[player] ? -1 : bN.y.a7i[player << 3]
	}, this.a5i = function(lR, lS) {
		var ep = bN.y.m2;
		if (ep < 1) return -1;
		for (var mH = bN.y.mH, aXZ = 80, aPF = -1, aB = 0; aB < ep; aB++) {
			var f5 = bM.i5(lR, lS, mH[aB]);
			f5 < aXZ && (aXZ = f5, aPF = aB)
		}
		return function(aB, lR, lS) {
			if (aB < 0) return;
			var aXg = bN.y.mH[aB],
				aXh = bM.iB(aXg),
				aXg = bM.iE(aXg),
				aB = 20 * (.9 + .1 * Math.log10(bN.y.a6g[aB]));
			return aB = Math.max(aB, bM.iS(bA.qd.tH(.02, 1.7))), bL.aMv(bM.iA(lR), bM.iD(lS), aXh, aXg, aB)
		}(aPF, lR, lS) ? aPF : -1
	}, this.aWL = function(n8) {
		for (var ep = bN.y.m2, m5 = bN.y.m5, aB = 0; aB < ep; aB++)
			if (m5[aB] === n8) return bO.fR[2] = aB, !0;
		return !1
	}, this.aHc = function(player) {
		for (var tC = player << 3, tD = tC + bN.y.kG[player], a7i = bN.y.a7i, a6g = bN.y.a6g, hY = 0, aB = tC; aB < tD; aB++) hY += a6g[a7i[aB]];
		return hY
	}, this.aXb = function(player, aWb) {
		aWb = bN.y.m4[aWb];
		return this.lb(player, aWb[aWb.length - 1])
	}, this.aXc = function(iG, iH, f5, aXd) {
		var iK = bM.ex(iG),
			iG = bM.ez(iG),
			iM = bM.ex(iH),
			iH = bM.ez(iH),
			iM = (f5 = Math.max(f5, 1), iM - iK),
			iH = iH - iG,
			i9 = bL.du(Math.abs(iM) * aXd, f5),
			aXd = bL.du(Math.abs(iH) * aXd, f5);
		return bM.fD(iK + Math.sign(iM) * i9, iG + Math.sign(iH) * aXd)
	}, this.aWV = function(lX, eb) {
		for (var ep = lX.length - 1, ew = bM.ex(eb), ey = bM.ez(eb), aB = 0; aB < ep; aB++) {
			var iG = lX[aB],
				iH = lX[aB + 1],
				nB = bM.ex(iG),
				iG = bM.ez(iG),
				nO = bM.ex(iH),
				iH = bM.ez(iH);
			if (!(ew !== nB && ew !== nO && Math.sign(ew - nB) === Math.sign(ew - nO) || ey !== iG && ey !== iH && Math.sign(ey - iG) === Math.sign(ey - iH))) {
				if (nB === nO || iG === iH) return aB;
				if (Math.abs(ew - nB) === Math.abs(ey - iG) && Math.abs(ew - nO) === Math.abs(ey - iH)) return aB
			}
		}
		return -1
	}, this.aBM = function() {
		for (var aXj = ln[0], m6 = bN.y.m6, m2 = bN.y.m2, g = [], aB = 0; aB < m2; aB++) bA.gB.kq(aXj, m6[aB] >> 3) && g.push(aB);
		return g
	}, this.lZ = function(player, lX) {
		for (var tC = player << 3, tD = tC + bN.y.kG[player], a7i = bN.y.a7i, m4 = bN.y.m4, hH = lX[0], kp = lX[lX.length - 1], aB = tC; aB < tD; aB++) {
			var gN = m4[a7i[aB]];
			if (gN[0] === hH && gN[gN.length - 1] === kp) return !0
		}
		return !1
	}
}

function aW9() {
	function aXm(player, aWb) {
		aWb = bM.iX(bN.y.mH[aWb]), aWb = ac.eX(bM.ef(aWb));
		return !!bN.l1.aXR(player, aWb)
	}

	function aXk(player) {
		return bN.mI.mJ(player) && !bN.lY.le()
	}
	this.hT = function(player, eb) {
		return !!aXk(player) && -1 !== (eb = function(player, eb) {
			for (var ep = bN.y.m2, mH = bN.y.mH, m6 = bN.y.m6, aXZ = bM.hw(), aPF = -1, aB = 0; aB < ep; aB++) {
				var f5 = bM.iF(eb, bM.iX(mH[aB]));
				f5 < aXZ && bA.gB.kq(player, m6[aB] >> 3) && (aXZ = f5, aPF = aB)
			}
			return aPF
		}(player, eb)) && !!aXm(player, eb) && (bO.fR[3] = bN.y.m5[eb], !0)
	}, this.pG = function(player, n8) {
		return !!aXk(player) && !!bN.l1.aWL(n8) && !!aXm(player, bO.fR[2])
	}, this.q9 = function(player, n8, aXn) {
		return !! function(player, n8, aXn) {
			if (aXk(player) && bN.l1.aWL(n8)) {
				n8 = bO.fR[2];
				if (bA.gB.kq(player, bN.y.m6[n8] >> 3)) {
					if (function(player, aWb) {
							return bN.l1.aXb(player, aWb) && (bO.g[0] = bN.lY.lg(bN.y.m4[aWb]), bO.fR[1] = 6, !0)
						}(player, n8)) return 1;
					var aWG = bM.iX(bN.y.mH[n8]),
						aXr = bN.l1.aXT(player, aWG);
					if (-1 !== aXr) {
						aXr = bM.iF(aXr, aWG);
						if (!(aXn && 120 < aXr)) {
							aXn = function(aWb, aXs, aWG) {
								var lX = bN.y.m4[aWb],
									aWb = bN.y.mG[aWb],
									aXu = bM.iF(aWG, lX[aWb + 1]);
								if (aXs <= aXu) return bN.l1.aXc(aWG, lX[aWb + 1], aXu, aXs);
								for (var f5 = aXs - aXu, ep = lX.length - 1, aB = aWb + 1; aB < ep; aB++) {
									var aXv = bM.iF(lX[aB], lX[aB + 1]);
									if (f5 <= aXv) return bN.l1.aXc(lX[aB], lX[aB + 1], aXv, f5);
									f5 -= aXv
								}
								return lX[ep]
							}(n8, aXr, aWG);
							if (bN.kz.q6(player, aXn, 1)) return bO.fR[1] = 6, 1
						}
					}
				}
			}
			return
		}(player, n8, aXn) && (player = bO.fR[2], bN.y.m3[player] = 64 + bN.y.m3[player] % 64, bN.mB.jI(n8, bN.y.mL), !0)
	}
}

function aVy() {
	function aY0(player, hY, aXy, aWG) {
		var jL;
		if (ac.eg(aXy)) jL = aD.em;
		else {
			if ((jL = ac.eh(aXy)) === player) return void bd.gF(player, hY - bA.gB.gE(player, hY), 12);
			if (!bs.ei(player, jL)) return void b8.kE.pV(player, jL, hY)
		}
		ad.jX(player, jL) || ad.jq(player) ? (ag.gH[player].push(aWG << 2), ad.jI(player, hY, jL), aF.jJ(player, !0)) : bd.gF(player, hY, 12)
	}
	this.j5 = function() {
		for (var m3 = bN.y.m3, mH = bN.y.mH, aWc = bN.y.aWc, aB = bN.y.m2 - 1; 0 <= aB; aB--) 65535 === aWc[aB] && function(aB, aWG, hg) {
			if (6 === hg) {
				if (bN.mB.aWP(aB, aWG)) return bN.y.mG[aB]++, bN.y.aWc[aB] = 0, 0
			} else {
				var player = bN.y.m6[aB] >> 3,
					aB = bN.y.a6g[aB];
				bd.aXz(player), hg < 4 ? aY0(player, aB, aWG + bM.ht[hg] << 2, aWG) : 4 === hg ? function(player, hY, aWG) {
					var aB, et, i2 = bM.hu,
						ee = bM.ef(aWG);
					for (aB = 0; aB < 4; aB++)
						if (et = ee + i2[aB], ac.eg(et)) return aY0(player, hY, et, aWG);
					for (aB = 0; aB < 4; aB++)
						if (et = ee + i2[aB], ac.gP(et) && !ac.yC(player, et)) return aY0(player, hY, et, aWG);
					for (aB = 0; aB < 4; aB++)
						if (et = ee + i2[aB], ac.gP(et)) return aY0(player, hY, et, aWG)
				}(player, aB, aWG) : 5 === hg && function(player, hY, aWG) {
					var aB, et, i2 = bM.hu,
						ee = bM.ef(aWG);
					for (aB = 0; aB < 4; aB++)
						if (et = ee + i2[aB], ac.gP(et) && ac.yC(player, et)) return aY0(player, hY, et, aWG);
					for (aB = 0; aB < 4; aB++)
						if (et = ee + i2[aB], ac.gP(et)) return aY0(player, hY, et, aWG);
					for (aB = 0; aB < 4; aB++)
						if (et = ee + i2[aB], ac.eg(et)) return aY0(player, hY, et, aWG)
				}(player, aB, aWG)
			}
			return 1
		}(aB, bM.iX(mH[aB]), m3[aB] % 64) && (bN.mB.aWM(aB), bN.aHf.aWf(aB))
	}, this.aXx = function(player, eb, hg, n8, hY) {
		if (!(5 <= hg)) {
			var aXD = aD.eZ;
			if (bA.gB.h1(aXD) && bs.ei(player, aXD) && player !== aXD && 0 !== ag.gW[aXD].length && bA.gB.a3Z(player, 5)) {
				for (var aXy, f3 = !1, aB = 0; aB < 4; aB++)
					if (aXy = eb + bM.ht[aB] << 2, ac.ek(aXy) && !ac.eg(aXy) && ac.eh(aXy) === aXD) {
						f3 = !0;
						break
					} f3 && (aN.a6p(719, 0), hg = hY < 25e3 ? L(474) + " (" + bA.rc.zR(hY) + ") ⛵" : L(475) + " (" + bA.rc.zR(hY) + ") 🚢", aN.yc(180, hg, 719, player, bB.oI, bB.ni, -1, !0, void 0, {
					f9: 1,
					n8: n8
				}))
			}
		}
	}
}

function aVv() {
	this.kQ = 512, this.aWd = 8, this.m2 = 0, this.mL = 0, this.m6 = new Uint16Array(this.kQ), this.mH = new Uint32Array(this.kQ), this.aWc = new Uint16Array(this.kQ), this.a6g = new Uint32Array(this.kQ), this.aWk = new Uint16Array(this.kQ), this
		.m5 = new Uint16Array(this.kQ), this.m3 = new Uint8Array(this.kQ), this.aWm = new Uint8Array(this.kQ), this.m4 = new Array(this.kQ), this.mG = new Uint16Array(this.kQ), this.kG = new Uint8Array(aD.em), this.a7i = new Uint16Array(this.aWd * aD
			.em), this.dd = function() {
			this.m2 = 0, this.mL = 0, this.kG.fill(0), this.m4.fill(null)
		}, this.mN = function(player) {
			var hY = bO.fM[0],
				m7 = bO.fR[1],
				lX = bO.g[0],
				aY3 = this.mL,
				ep = this.m2,
				aY4 = bM.iW(lX[0]),
				aY5 = this.kG[player],
				aY6 = (player << 3) + aY5;
			this.m6[ep] = aY6, this.mH[ep] = aY4, this.aWc[ep] = 0, hY < 60 && (bA.gB.gC(player, 60 - hY), hY = 60), this.a6g[ep] = hY, this.aWk[ep] = bN.iZ.mN(ep, bM.iY(aY4)), this.m5[ep] = aY3, this.m3[ep] = m7, this.aWm[ep] = 0, this.m4[ep] = lX,
				this.mG[ep] = 0, this.mL = (aY3 + 1) % 65536, this.kG[player] = aY5 + 1, this.a7i[aY6] = ep, this.m2++, bN.m7.aXx(player, lX[lX.length - 1], m7, aY3, hY)
		}, this.j5 = function() {
			bN.m7.j5();
			for (var gN = aD.eZ, dt = bN.l1.aHc(gN), sF = (! function(sF) {
					for (var aYB, mH = sF.mH, a6g = sF.a6g, aWm = sF.aWm, aWc = sF.aWc, aWk = sF.aWk, m4 = sF.m4, mG = sF.mG, sF = sF.m2, aXG = bS.f0 << 4, aB = sF - 1; 0 <= aB; aB--) {
						var aYC = mH[aB],
							lX = m4[aB],
							aYD = mG[aB],
							aY4 = bM.iW(lX[aYD]),
							aYE = bM.iW(lX[aYD + 1]),
							aYF = aY4 % aXG,
							aY4 = ~~((aY4 + .5) / aXG),
							aYH = aYE % aXG,
							aYI = ~~((aYE + .5) / aXG),
							aYJ = aYH - aYF,
							aYK = aYI - aY4,
							es = Math.max(~~Math.sqrt(aYJ * aYJ + aYK * aYK + .5), 1),
							aYL = a6g[aB],
							aYL = (aYL = aWm[aB] ? 4e4 : 25e4 + Math.min(20 * aYL, 3e5) + Math.min(aYL >> 3, 5e4), aWc[aB] + Math.max(~~((aYL + .5) / es), 1));
						65535 <= aYL ? aYD + 2 < lX.length ? (mG[aB] = aYD + 1, mH[aB] = aYB = function(aB, aYM, aYF, aYG, aYD, es, lX, aXG) {
							aYM = Math.min(aYM - 65535, 65535);
							var lX = bM.iW(lX[aYD + 2]),
								aYD = lX % aXG - aYF,
								lX = ~~((lX + .5) / aXG) - aYG,
								aYP = Math.max(~~Math.sqrt(aYD * aYD + lX * lX + .5), 1);
							return aYM = Math.min(Math.floor((es * aYM + .5) / aYP), 65534), bN.y.aWc[aB] = aYM, aYF + bL.du(aYM * aYD, 65535) + aXG * (aYG + bL.du(aYM * lX, 65535))
						}(aB, aYL, aYH, aYI, aYD, es, lX, aXG)) : (mH[aB] = aYB = aYE, aWc[aB] = 65535) : (aWc[aB] = aYL, mH[aB] = aYB = aYF + bL.du(aYL * aYJ, 65535) + aXG * (aY4 + bL.du(aYL * aYK, 65535))), aWk[aB] = bN.iZ.aYO(aWk[aB],
							aYC, aYB)
					}
				}(this), ! function(sF) {
					if (bf.k9() % 2 == 1) {
						var aB, hh, l7, f9, fA, aYQ, z5, aYR, hH, nB, nC, aY4, aYS, a9C, aYU, kp, ep = sF.m2,
							mH = sF.mH,
							m6 = sF.m6,
							a6g = sF.a6g,
							aWm = sF.aWm,
							iZ = bN.iZ.iZ,
							aYW = iZ.length,
							aYX = bN.iZ.aYX,
							aXG = bS.f0 << 4,
							aYY = aD.hj,
							aU4 = bg.en,
							gO = (ep - 1) * (bL.du(bf.k9(), 2) % 2);
						for (aB = 0; aB < ep; aB++)
							for (hh = Math.abs(aB - gO), aY4 = mH[hh], l7 = bM.iY(aY4), hH = m6[hh] >> 3, nB = aY4 % aXG, nC = ~~((aY4 + .5) / aXG), aYU = a6g[hh], f9 = 0; f9 < 9; f9++)
								if (!((aYQ = l7 + aYX[f9]) < 0 || aYW <= aYQ))
									for (aYR = iZ[aYQ], z5 = aYR.length, fA = 0; fA < z5; fA++) aYS = aYR[fA], kp = m6[aYS] >> 3, hH == kp || aYY && aU4[hH] === aU4[kp] && aU4[hH] || (kp = mH[aYS], (a9C = nB - kp % aXG) * a9C + (a9C = nC - ~~
										((kp + .5) / aXG)) * a9C < 14400 && (kp = a6g[aYS], a9C = kp <= aYU ? Math.max(1, bL.du(kp + bL.du(aYU - kp, 10), 10)) : Math.max(1, bL.du(aYU, 10)), a6g[aYS] = Math.max(kp - a9C, 0), aWm[aYS] =
										4))
					}
				}(this), ! function(sF) {
					if (bf.k9() % 5 == 3)
						for (var a6g = sF.a6g, ep = sF.m2, aB = 0; aB < ep; aB++) {
							var hY = a6g[aB];
							a6g[aB] = Math.max(hY - Math.max(1, hY >> 7), 0)
						}
				}(this), this), a6g = sF.a6g, aWm = sF.aWm, aB = sF.m2 - 1; 0 <= aB; aB--) aWm[aB] = aWm[aB] >> 1, 0 === a6g[aB] && (bN.mB.aWM(aB), bN.aHf.aWf(aB));
			bd.gF(gN, dt - bN.l1.aHc(gN), 15)
		}
}

function aVw() {
	this.aYZ = 32, this.ew = 0, this.ey = 0, this.ia = 0, this.aYa = 0, this.aYb = 4, this.iZ = null, this.aYX = new Int16Array(9), this.dd = function() {
		this.ia = 1 + bL.du(bS.f0 - 1, this.aYZ), this.aYa = 1 + bL.du(bS.f1 - 1, this.aYZ), this.iZ = new Array(this.ia * this.aYa), bA.ql.a2V(this.iZ);
		var ew, ey, aYX = this.aYX,
			i = this.ia;
		for (ew = -1; ew <= 1; ew++)
			for (ey = -1; ey <= 1; ey++) aYX[3 * (1 + ey) + 1 + ew] = ey * i + ew
	}, this.mN = function(aYd, aB) {
		return this.iZ[aB].push(aYd), this.iZ[aB].length - 1
	}, this.aYO = function(aYe, aY4, aYE) {
		var aYf, aYg, aY4 = bM.iY(aY4),
			aYE = bM.iY(aYE);
		return aY4 === aYE ? aYe : (aYf = this.iZ[aY4].pop(), this.iZ[aY4].length === aYe ? this.mN(aYf, aYE) : (aYg = this.iZ[aY4][aYe], this.iZ[aY4][aYe] = aYf, bN.y.aWk[aYf] = aYe, this.mN(aYg, aYE)))
	}
}

function aW0() {
	this.l0 = function(player, aYh) {
		return -1 !== aYh && !!bN.l1.lc(player, aYh) && this.q6(player, aYh, 0)
	}, this.q6 = function(player, aYh, aYi) {
		player = function(player, aYh, aYi) {
			var aXr = bN.l1.aXT(player, aYh);
			if (-1 === aXr) return -1;
			aXr = bN.l1.l2(aXr, aYh);
			if (-1 === aXr) return -1;
			var lV = bN.lY.ld(aXr, aYh);
			if (0 <= lV) return lV;
			if (bN.lY.le()) return -1;
			if (0 <= (lV = bN.lY.ld(aYh, aXr))) return bN.lY.lf(bN.lY.lg(bN.lY.get(lV)));
			if (aXr === aYh) return bN.lY.lf(new Uint32Array([aXr, aYh]));
			if (0 <= (lV = bN.aW1.q6(aXr, aYh))) return lV;
			return aYi ? function(aYm, player) {
				var fW = bO.fW,
					eL = (fW.fill(0), [aYm]),
					hv = (fW[aYm] = 1, bM.hv),
					aYn = -1,
					ep = eL.length;
				for (; - 1 === aYn && ep;) {
					for (var g = [], aB = 0; aB < ep; aB++)
						for (var eb = eL[aB], a4J = fW[eb], es = 0; es < 8; es++) {
							var wJ, a0t, ev = eb + hv[es],
								eT = 4 * ev;
							ac.i3(eT) ? (wJ = fW[ev], a0t = a4J + 5 + ((1 & es) << 1), 0 === wJ ? (g.push(ev), fW[ev] = a0t) : fW[ev] = Math.min(a0t, wJ)) : -1 === aYn && es % 2 == 0 && ac.y9(player, eT) && (aYn = eb)
						}
					ep = (eL = g).length
				}
				return -1 !== aYn ? function(iG, aYp) {
					var hv = bM.hv,
						aYq = -1,
						hg = 0,
						mh = [];
					for (; aYp !== iG;)(hg = function(eb, hg) {
						var fW = bO.fW,
							hv = bM.hv,
							a4J = fW[eb];
						if (a4J - fW[eb + hv[hg]] != 5 + ((1 & hg) << 1))
							for (var f8 = 0; f8 < 8; f8++) {
								var es = f8 + hg + 6 & 7;
								if (a4J - fW[eb + hv[es]] == 5 + ((1 & es) << 1)) return es
							}
						return hg
					}(aYp, hg)) !== aYq && (mh.push(aYp), aYq = hg), aYp += hv[hg];
					mh.push(iG);
					var lV = bN.lY.ld(mh[0], iG);
					if (0 <= lV) return lV;
					return bN.lY.lf(new Uint32Array(mh))
				}(aYm, aYn) : -1
			}(aYh, player) : -1
		}(player, aYh, aYi);
		return -1 !== player && (bO.g[0] = bN.lY.get(player), !0)
	}
}

function aW2() {
	function aYs(h4, iL, iN) {
		for (var jS = Math.min(iL, iN), nT = Math.max(iL, iN), ey = jS + 1; ey < nT; ey++)
			if (!ac.i3(bM.iT(h4, ey))) return;
		return 1
	}

	function aYt(h6, iK, iM) {
		for (var jS = Math.min(iK, iM), nT = Math.max(iK, iM), ew = jS + 1; ew < nT; ew++)
			if (!ac.i3(bM.iT(ew, h6))) return;
		return 1
	}

	function aYu(iK, iL, iM, iN, aYk, aYh) {
		for (var ep = Math.min(Math.abs(iM - iK), Math.abs(iN - iL)), i9 = Math.sign(iM - iK), iC = Math.sign(iN - iL), aB = 0; aB < ep; aB++)
			if (!ac.i3(bM.iT(iK += i9, iL += iC))) return null;
		return iK === iM ? aYs(iK, iL, iN) ? new Uint32Array([aYk, bM.fD(iK, iL), aYh]) : null : aYt(iL, iK, iM) ? new Uint32Array([aYk, bM.fD(iK, iL), aYh]) : null
	}
	this.q6 = function(aYk, aYh) {
		aYk = function(aYk, aYh) {
			var iK = bM.ex(aYk),
				iL = bM.ez(aYk),
				iM = bM.ex(aYh),
				iN = bM.ez(aYh);
			if (iK === iM) {
				if (aYs(iK, iL, iN)) return new Uint32Array([aYk, aYh])
			} else {
				if (iL !== iN) return aYu(iK, iL, iM, iN, aYk, aYh) || aYu(iM, iN, iK, iL, aYk, aYh);
				if (aYt(iL, iK, iM)) return new Uint32Array([aYk, aYh])
			}
			return null
		}(aYk, aYh);
		return null === aYk ? -1 : bN.lY.lf(aYk)
	}
}

function aW7() {
	var aYv = [];
	this.dd = function() {
		aYv = []
	}, this.le = function() {
		return 65536 === aYv.length
	}, this.ld = function(aYk, aYh) {
		for (var lY = aYv, ep = lY.length, aB = 0; aB < ep; aB++) {
			var gN = lY[aB];
			if (gN[0] === aYk && gN[gN.length - 1] === aYh) return aB
		}
		return -1
	}, this.lg = function(lX) {
		var aYw = new Uint32Array(lX.length);
		return aYw.set(lX), aYw.reverse()
	}, this.aWT = function(hH, kp) {
		var gI = hH.length - 1,
			aYx = new Uint32Array(gI + kp.length);
		return aYx.set(hH, 0), aYx.set(kp, gI), aYx
	}, this.aWY = function(hH, kp, aAk, eb, aYy) {
		aYy && (aAk = (kp = this.lg(kp)).length - aAk - 2);
		aYy = kp.subarray(aAk + 1 + (eb === kp[aAk + 1])), eb = new Uint32Array(hH.length + aYy.length);
		return eb.set(hH, 0), eb.set(aYy, hH.length), eb
	}, this.lf = function(lX) {
		return aYv.push(lX), aYv.length - 1
	}, this.get = function(aB) {
		return aYv[aB]
	}, this.la = function() {
		return aYv
	}, this.aZ0 = function(aYk, aYh) {
		return null
	}
}

function aWB() {
	this.j5 = function(player, n8) {
		player = bN.l1.nA(player, n8);
		return !(player < 0 || !bN.mB.aWa(player) || (bN.mB.aWM(player), 0))
	}
}

function aVx() {
	var yk = 32,
		yj = new Array(2);

	function wZ(fA) {
		var ew, ey, eb, iC, i9, hl = yk,
			a2y = bA.qd.wZ(hl, hl),
			hr = bA.qd.getContext(a2y, !0),
			ho = bA.qd.getImageData(hr, hl, hl),
			wk = ho.data,
			l7 = (hl >> 1) - .5,
			l8 = Math.sqrt(l7 * l7);
		for (wk.fill(255), ey = 0; ey < hl; ey++)
			for (ew = 0; ew < hl; ew++) i9 = ew - l7, iC = ey - l7, eb = 4 * (ey * hl + ew), i9 = 714 * (l8 - Math.sqrt(i9 * i9 + iC * iC)) / l8, wk[2 + eb] = fA, wk[3 + eb] = 255 < i9 ? 0 : i9;
		return hr.putImageData(ho, 0, 0), a2y
	}
	this.aZ1 = -1, this.dd = function() {
		this.aZ1 = -1, yj[0] || (yj[0] = wZ(255), yj[1] = wZ(0))
	}, this.aZ2 = function(hr, eT, ew, ey, e8, aB) {
		bA.gB.h1(aD.eZ) && (hr.setTransform(eT *= 4 / 3 * .625, 0, 0, eT, ew - (e8 *= 4 / 3), ey - e8), hr.drawImage(yj[+(bN.y.m5[aB] === this.aZ1)], 0, 0))
	}
}

function aW6() {
	function aUM(ew, ep, ey, aZ3, a9I, fG, player) {
		if (!(ey < 1 || a9I < ey))
			for (var aB = 0; aB <= ep; aB++) {
				var eT = bM.iT(ew, ey);
				if (bN.l1.aWe(eT) && !bA.ql.has(aZ3, ac.eX(eT)) && ac.y1(eT, player)) return eT >> 2;
				ew += fG
			}
		return -1
	}

	function aUQ(ey, ep, ew, aZ3, aUK, fG, player) {
		if (!(ew < 1 || aUK < ew)) {
			ep = Math.max(ep, 0);
			for (var aB = 0; aB <= ep; aB++) {
				var eT = bM.iT(ew, ey);
				if (bN.l1.aWe(eT) && !bA.ql.has(aZ3, ac.eX(eT)) && ac.y1(eT, player)) return eT >> 2;
				ey += fG
			}
		}
		return -1
	}

	function aUU(iG, iH, aUH) {
		return -1 !== iH && (-1 === iG || bM.iI(iH, aUH) < bM.iI(iG, aUH)) ? iH : iG
	}
	this.hQ = function(player, aUH) {
		if (bN.mI.mJ(player))
			for (var aUI = bM.hw(), aZ3 = [];;) {
				var aYn = function(aUH, aUI, aZ3, player) {
					for (var h4 = bM.ex(aUH), h6 = bM.ez(aUH), aUK = bS.f0 - 2, a9I = bS.f1 - 2, aUL = -1, es = 0; es < aUI; es++) {
						var a9H = Math.max(h4 - es, 1),
							aLP = Math.max(h6 - es, 1),
							xx = Math.min(h4 + es, aUK),
							xw = Math.min(h6 + es, a9I),
							iG = aUM(h4, xx - h4, h6 - es, aZ3, a9I, 1, player),
							iH = aUM(h4 - 1, h4 - a9H - 1, h6 - es, aZ3, a9I, -1, player),
							xx = aUM(h4, xx - h4, h6 + es, aZ3, a9I, 1, player),
							a9H = aUM(h4 - 1, h4 - a9H - 1, h6 + es, aZ3, a9I, -1, player),
							aUP = aUQ(h6, xw - h6 - 1, h4 - es, aZ3, aUK, 1, player),
							aUR = aUQ(h6 - 1, h6 - aLP - 2, h4 - es, aZ3, aUK, -1, player),
							xw = aUQ(h6, xw - h6 - 1, h4 + es, aZ3, aUK, 1, player),
							aLP = aUQ(h6 - 1, h6 - aLP - 2, h4 + es, aZ3, aUK, -1, player);
						if (aUL = aUU(aUL, iG, aUH), aUL = aUU(aUL, iH, aUH), aUL = aUU(aUL, xx, aUH), aUL = aUU(aUL, a9H, aUH), aUL = aUU(aUL, aUP, aUH), aUL = aUU(aUL, aUR, aUH), aUL = aUU(aUL, xw, aUH), 0 <= (aUL = aUU(aUL, aLP, aUH)) &&
							es * es >= bM.iI(aUL, aUH)) return aUL
					}
					return -1
				}(aUH, aUI, aZ3, player);
				if (-1 === aYn) break;
				var id = ac.eX(bM.ef(aYn));
				if (bN.l1.aXR(player, id)) return !! function(player, aYn, aUH) {
					for (var hg = bM.ie(aYn, aUH), aB = 0; aB < 4; aB++) {
						var eb = bM.ib(aYn, hg);
						if (ac.aHH(bM.ef(eb), player)) return bO.fR[6] = hg, 1;
						hg = (hg + 1) % 4
					}
					return
				}(player, aYn, aUH) && (bO.fR[7] = aYn, !0);
				aZ3.push(id)
			}
		return !1
	}
}

function dg() {
	this.aRi = [L(476), L(477), L(478), L(479), L(480), L(481), L(482), L(483), L(484), L(485), L(486), L(487), L(488), L(489), L(490), L(491)];
	var aZ6 = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", "", "KeyI", ""];
	this.aBi = new Array(aZ6.length), this.dd = function() {
		var g = bj.eL.data[155].value.split(";"),
			l7 = g.length;
		if (function() {
				for (var ep = aZ6.length, aB = 0; aB < ep; aB++) bX.aBi[aB] = aZ6[aB]
			}(), !(l7 > aZ6.length))
			for (var aB = 0; aB < l7; aB++) g[aB].length && (this.aBi[aB] = g[aB])
	}, this.aRk = function(e9, code) {
		for (var aBi = this.aBi, aZ8 = aZ6, qK = (aBi[e9] = code, ""), ep = aBi.length, aZ9 = [], aB = 0; aB < ep; aB++) aZ9.push(aBi[aB] === aZ8[aB] ? "" : aBi[aB]);
		ep--;
		for (aB = 0; aB < ep; aB++) qK += aZ9[aB] + ";";
		bj.s5.s6(155, qK += aZ9[ep])
	}, this.aRh = function() {
		bj.s5.s6(155, ""), this.dd()
	}, this.fA = function(code, e9) {
		return code === this.aBi[e9] || code === this.aBi[e9 + 1]
	}
}

function dY() {
	var aZA = new Array(1),
		aZB = new Array(1),
		aZC = 20,
		eM = 0,
		aZD = !1;

	function aZF() {
		aZC++, bp.play()
	}
	this.dd = function() {
		if (!window.document.documentMode) {
			for (var aB = 0; 0 <= aB; aB--) ! function(aB, src) {
				aZB[aB] = 0, aZA[aB] = document.createElement("audio"), aZA[aB].src = src, aZA[aB].setAttribute("preload", "auto"), aZA[aB].setAttribute("controls", "none"), aZA[aB].style.display = "none", aZA[aB].onpause = function() {
					aZB[aB] = 1
				}, aZA[aB].oncanplaythrough = function() {
					aZB[aB] = 0 === aZB[aB] ? 1 : aZB[aB]
				}, document.body.appendChild(aZA[aB])
			}(aB,
				"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
				);
			aZD = !0
		}
	}, this.uF = function() {
		if (aZD) {
			aZD = !1;
			for (var aB = 0; 0 <= aB; aB--) aZA[aB].onpause = null, aZA[aB].oncanplaythrough = null, t.removeChild(document.body, aZA[aB]), aZA[aB] = null
		}
	}, this.play = function() {
		if (aZD) {
			var dt = performance.now();
			if (eM + 66 < dt)
				for (var aB = 0; 0 <= aB; aB--)
					if (1 === aZB[aB]) return eM = dt, aZB[aB] = 2, void aZA[aB].play();
			0 < aZC && (aZC--, setTimeout(aZF, 66))
		}
	}
}

function ca() {
	this.a8G = function() {
		var aZI;
		return !(al.ki < 3 || ag.gd[ln[0]] >= aD.jw >> 1) && (aD.hj ? 9 !== aD.kU && (aZI = ae.aIo(), !(2 * ae.aIp(bh.kl()) >= aZI)) : function() {
			if (8 === aD.kU) return !1;
			var aZI = ae.aIo();
			if (2 * ag.gr[ln[0]] >= aZI) return !1;
			return !0
		}())
	}
}

function cA() {
	this.dd = function() {
		if (0 === aD.data.sResourcesType) {
			for (var aY5 = aD.kC, gr = ag.gr, aB = 0; aB < aY5; aB++) gr[aB] = 512;
			var aY6 = aD.xF,
				kP = aE.kP,
				hY = aE.hY;
			for (aB = aY5; aB < aY6; aB++) gr[aB] = kP[hY[aB]]
		} else(1 === aD.data.sResourcesType ? function() {
			for (var ep = aD.xF, gr = ag.gr, sResourcesValue = aD.data.sResourcesValue, aB = 0; aB < ep; aB++) gr[aB] = sResourcesValue
		} : function() {
			for (var ep = aD.xF, gr = ag.gr, sResourcesData = aD.data.sResourcesData, aB = 0; aB < ep; aB++) gr[aB] = sResourcesData[aB]
		})();
		bd.mh[8] = ag.gr[aD.eZ]
	}
}

function dP() {
	var aHP = 501,
		aZO = (this.aZN = new Uint32Array(aHP), this.a3e = new Uint32Array(aHP), this.aBN = new Uint16Array(aHP), this.aRq = 0, 1),
		aZP = 0;

	function aZS(self) {
		self.max.fill(0)
	}

	function aZU(self, aB) {
		self.max[0] = Math.max(self.aZN[aB], self.max[0]), self.max[1] = Math.max(self.a3e[aB], self.max[1]), self.max[2] = Math.max(self.aBN[aB], self.max[2])
	}
	this.max = [0, 0, 0], this.aZQ = 0, this.mh = new Array(21), this.aZR = null, this.de = function() {
		this.aZR = [L(492), L(493), L(494), L(495), L(496), L(497), L(498), L(499), L(320), L(321), L(500), L(501), L(502), L(503), "", L(504), L(505), L(506), L(278), L(507), L(508)]
	}, this.dd = function() {
		this.aRq = 0, aZO = 1, this.aZQ = 0, aZP = 0, aZS(this), this.mh.fill(0)
	}, this.q3 = function(player, iP) {
		bA.gB.a3Y(player) && (this.mh[0] += iP + 1, this.mh[1]++, this.mh[12] += bO.fM[1])
	}, this.pY = function(player, pB) {
		__fx.donationsTracker.logDonation(player, pB, bO.fM[0]);
		player === aD.eZ && (aN.pY(bO.fM[0], bO.fM[1], pB), this.mh[12] += bO.fM[1], this.mh[16] += bO.fM[0]), pB === aD.eZ && (aN.a6t(bO.fM[0], player), this.mh[10] += bO.fM[0])
	}, this.q7 = function(player) {
		bA.gB.a3Y(player) && (this.mh[2]++, this.mh[12] += bO.fM[1])
	}, this.qF = function(player) {
		bA.gB.a3Y(player) && (this.mh[19]++, this.mh[12] += bO.fM[1])
	}, this.aXz = function(player) {
		bA.gB.a3Y(player) && this.mh[20]++
	}, this.gF = function(player, a4J, e9) {
		bA.gB.a3Y(player) && (this.mh[e9] += a4J)
	}, this.j5 = function() {
		var self;
		this.aZQ || 0 < aZP-- || ((self = this).aZN[self.aRq] = ag.gd[aD.eZ], self.a3e[self.aRq] = ag.gr[aD.eZ], self.aBN[self.aRq] = ae.aBO(aD.eZ), aZU(self, self.aRq), self.aRq++, self.aRq === aHP && function(self) {
			aZS(self), aZU(self, 0), self.aRq = 1 + bL.du(aHP, 2);
			for (var aB = 1; aB < self.aRq; aB++) self.aZN[aB] = self.aZN[2 * aB], self.a3e[aB] = self.a3e[2 * aB], self.aBN[aB] = self.aBN[2 * aB], aZU(self, aB);
			aZO *= 2
		}(self), aZP = aZO - 1, be.mY(), 0 === ag.ml[aD.eZ] && (self.aZQ = bf.k9()))
	}
}

function dQ() {
	this.i = 0, this.j = 0, this.sz = 0, this.t0 = 0, this.aZW = 0, this.aZX = 0, this.a8V = 0, this.th = 0;
	var aZZ = this.aZY = 0;
	this.aZa = 0, this.aZb = 0, this.aZc = 0, this.a7p = 0, this.e9 = 0, this.aAy = null, this.hb = !1, this.aZd = -1, this.aZe = !1, this.aZf = [0, 0], this.de = function() {
		this.aAy = [L(509), L(117, 0, "Balance"), L(116, 0, "Interest"), L(510)]
	}, this.dd = function() {
		this.hb = !1, this.aZd = -1, this.aZe = !1, this.resize()
	}, this.resize = function() {
		this.i = h.i < 1.369 * h.j ? h.i : 1.369 * h.j;
		var es = a0.a1.hy() && h.i < h.j ? 1 : a0.a1.hy() ? .8 : h.i < h.j ? .65 : .59;
		this.i = Math.floor(es * this.i), this.i -= a0.a1.hy() && h.i < h.j ? 2 * bc.gap + 2 : 0, this.j = Math.floor(this.i / 1.369), this.a7p = Math.floor(this.j / 150), this.a7p = Math.max(this.a7p, 1.5), this.sz = Math.floor(1 + .02 * this
			.i), this.t0 = Math.floor(1 + .04 * this.i), this.a8V = this.t0, aZZ = Math.floor(.75 * this.a8V), this.th = Math.floor(1 + .075 * this.i), this.aZa = Math.floor(1 + .1125 * this.i), this.aZb = Math.floor(this.i * (a0.a1.hy() ? .03 :
				.029)), this.aZb = Math.max(this.aZb, 4), this.aZc = Math.floor(.035 * this.i), this.aZc = Math.max(this.aZc, 4), this.aZY = this.j - 2 * this.a8V - this.th - this.aZa, this.hb && this.aZg()
	}, this.h2 = function(lR, lS) {
		var xI, xH;
		return !!this.hb && (xH = lR, xI = lS, lR -= bL.du(h.i - this.i, 2), lS -= bL.du(h.j - this.j, 2), lR < 0 || lS < 0 || lR >= this.i || lS >= this.j || lR >= this.i - this.aZa && lS < this.aZa ? -1 !== aM.h2(xH, xI) || bC.h2(xH, xI) ||
			this.ru() : lS < this.aZa || (lS < this.j - this.th ? (this.aZe = !0, this.aZd = (lR - 2 * this.sz - this.aZW) / this.aZX, 3 !== this.e9 && (bf.dl = !0)) : (xH = (xH = Math.floor(lR / (this.i / this.aAy.length))) < 0 ? 0 : xH >=
				this.aAy.length ? this.aAy.length - 1 : xH) !== this.e9 && (this.e9 = xH, this.aZg(), bf.dl = !0)), !0)
	}, this.a1e = function(lR, lS) {
		return this.aZf[0] = lR, this.aZf[1] = lS, !(!this.hb || !this.aZe || (lR -= bL.du(h.i - this.i, 2), lS = this.aZd, this.aZd = (lR - 2 * this.sz - this.aZW) / this.aZX, (0 <= this.aZd && this.aZd <= 1 || 0 <= lS && lS <= 1) && (bf.dl = !
			0), 0))
	}, this.a23 = function() {
		this.aZe && (this.aZe = !1)
	}, this.a2F = function() {
		this.hb ? this.ru() : this.show()
	}, this.show = function() {
		bd.aRq < 2 || (this.hb = !0, this.aZg())
	}, this.ru = function() {
		this.hb = !1, this.aZd = -1, bf.dl = !0
	}, this.aZg = function() {
		this.e9 < 2 ? this.aZW = aQ.measureText(bA.rc.zR(bd.max[this.e9]), bA.qd.sS(0, this.aZb)) : 2 === this.e9 && (this.aZW = aQ.measureText(bA.rc.a4C(6, 2), bA.qd.sS(0, this.aZb))), this.aZX = this.i - 2 * this.sz - this.aZW - this.t0
	}, this.mY = function() {
		this.hb && this.aZg()
	}, this.ul = function() {
		this.hb && this.a8n()
	}, this.a8n = function() {
		var ew = bL.du(h.i - this.i, 2),
			ey = bL.du(h.j - this.j, 2);
		um.setTransform(1, 0, 0, 1, ew, ey), um.fillStyle = bB.ni, um.fillRect(0, this.aZa, this.i, this.j - this.aZa), this.aZh(), this.aQY(), um.strokeRect(0, 0, this.i, this.j), bA.qd.textAlign(um, 2), um.font = bA.qd.sS(0, this.aZb), 0 ===
			this.e9 ? this.aZi(bd.aZN, ew, ey) : 1 === this.e9 ? this.aZi(bd.a3e, ew, ey) : 2 === this.e9 ? this.aZj(ew, ey) : 3 === this.e9 && (this.aZk(ew, ey), this.aZl(ew, ey)), aM.a5z(Math.floor(ew + this.i - .725 * this.aZa), Math.floor(
				ey + .275 * this.aZa), Math.floor(.45 * this.aZa)), um.setTransform(1, 0, 0, 1, 0, 0)
	}, this.aZh = function() {
		var aB, dt;
		for (um.lineWidth = this.a7p, bA.qd.textBaseline(um, 1), bA.qd.textAlign(um, 1), um.strokeStyle = bB.nl, um.font = bA.qd.sS(1, this.aZc), dt = this.i / this.aAy.length, um.fillStyle = bB.o7, um.fillRect(this.e9 * dt, this.j - this.th, dt,
				this.th), um.fillStyle = bB.nl, um.fillRect(0, this.j - this.th - .5 * this.a7p, this.i, this.a7p), aB = 1; aB <= 3; aB++) um.fillRect(aB * dt, this.j - this.th, this.a7p, this.th);
		for (aB = this.aAy.length - 1; 0 <= aB; aB--) um.fillText(bA.yK.a3A(this.aAy[aB], 0, .9 * dt), (aB + .5) * dt, this.j - .46 * this.th)
	}, this.aQY = function() {
		um.fillStyle = bB.oX, um.fillRect(0, 0, this.i, this.aZa), um.fillStyle = bB.nl, um.fillRect(0, this.aZa - .5 * this.a7p, this.i, this.a7p), um.font = bA.qd.sS(1, .39 * this.aZa), um.fillText(bA.yK.a3A(L(511), 0, .8 * this.i), Math.floor(
			this.i / 2), Math.floor(.55 * this.aZa))
	}, this.aZi = function(g, ew, ey) {
		var l7 = bd.max[this.e9],
			a2X = (um.setTransform(1, 0, 0, 1, ew + 2 * this.sz + this.aZW, ey + this.a8V + this.aZa), um.lineWidth = 2, this.aZY / Math.sqrt(l7));
		um.beginPath(), um.moveTo(this.aZX, this.aZY - a2X * Math.sqrt(g[bd.aRq - 1]));
		for (var aB = bd.aRq - 2; 0 <= aB; aB--) um.lineTo(aB * this.aZX / (bd.aRq - 1), this.aZY - a2X * Math.sqrt(g[aB]));
		um.stroke();
		ew = this.a5z(g, a2X, .5);
		ew < .95 && um.fillText(bA.rc.zR(l7), -this.sz, 0), .05 < Math.abs(ew - .5) && um.fillText(bA.rc.zR(Math.floor(l7 / 4)), -this.sz, Math.floor(this.aZY / 2)), .05 < ew && um.fillText("0", -this.sz, this.aZY)
	}, this.aZj = function(ew, ey) {
		um.setTransform(1, 0, 0, 1, ew + 2 * this.sz + this.aZW, ey + this.a8V + this.aZa), um.lineWidth = 2;
		var a2X = this.aZY / Math.max(bd.max[this.e9], 1);
		um.beginPath(), um.moveTo(this.aZX, this.aZY - a2X * bd.aBN[bd.aRq - 1]);
		for (var aB = bd.aRq - 2; 0 <= aB; aB--) um.lineTo(aB * this.aZX / (bd.aRq - 1), this.aZY - a2X * bd.aBN[aB]);
		um.stroke();
		ew = this.a5z(bd.aBN, a2X, 1), ey = bd.max[this.e9] / 100;
		ew < .95 && um.fillText(bA.rc.a4C(ey, 2), -this.sz, 0), .05 < Math.abs(ew - .5) && um.fillText(bA.rc.a4C(ey / 2, 2), -this.sz, Math.floor(this.aZY / 2)), .05 < ew && um.fillText(bA.rc.a4C(0, 2), -this.sz, this.aZY)
	}, this.aZk = function(ew, ey) {
		um.setTransform(1, 0, 0, 1, ew + .34 * this.i, ey + 2 * aZZ + this.aZa), bA.qd.textAlign(um, 2);
		for (var aAj = this.j - 4 * aZZ - this.th - this.aZa, g = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], aB = 9; 0 <= aB; aB--) um.fillText(bA.yK.a3A(bd.aZR[g[aB]], 0, .31 * this.i), 0, aB * aAj / 9);
		var fH = bd.mh;
		for (um.setTransform(1, 0, 0, 1, ew + .39 * this.i, ey + 2 * aZZ + this.aZa), bA.qd.textAlign(um, 0), um.fillText(bA.rc.a4C(100 * fH[0] / (1024 * Math.max(fH[1], 1)), 1), 0, 0), aB = 8; 1 <= aB; aB--) um.fillText(fH[g[aB]].toString(), 0,
			aB * aAj / 9);
		um.fillText(bA.rc.a4C(100 * (1 - ag.gd[aD.eZ] / fH[7]), 0), 0, aAj)
	}, this.aZl = function(ew, ey) {
		um.setTransform(1, 0, 0, 1, ew + .79 * this.i, ey + 2 * aZZ + this.aZa), bA.qd.textAlign(um, 2);
		var aB, aAj = this.j - 4 * aZZ - this.th - this.aZa;
		for (um.fillStyle = bB.o2, aB = 2; 0 <= aB; aB--) um.fillText(bA.yK.a3A(bd.aZR[aB + 8], 0, .31 * this.i), 0, aB * aAj / 9);
		um.fillText(bA.yK.a3A(bd.aZR[18], 0, .31 * this.i), 0, 3 * aAj / 9), um.fillStyle = bB.o1, um.fillText(bA.yK.a3A(bd.aZR[11], 0, .31 * this.i), 0, 4 * aAj / 9), um.fillStyle = bB.oK, um.fillText(bA.yK.a3A(bd.aZR[13], 0, .31 * this.i), 0,
				5 * aAj / 9), um.fillText(bA.yK.a3A(bd.aZR[15], 0, .31 * this.i), 0, 6 * aAj / 9), um.fillText(bA.yK.a3A(bd.aZR[16], 0, .31 * this.i), 0, 7 * aAj / 9), um.fillText(bA.yK.a3A(bd.aZR[12], 0, .31 * this.i), 0, 8 * aAj / 9), um
			.fillStyle = bB.oJ, um.fillText(bA.yK.a3A(bd.aZR[17], 0, .31 * this.i), 0, aAj), um.fillStyle = bB.o2;
		var fH = bd.mh,
			aEl = fH[8] + fH[9] + fH[10] + fH[18],
			aEl = bA.rc.zR(aEl),
			aPK = um.measureText(aEl).width,
			ew = (um.setTransform(1, 0, 0, 1, ew + .83 * this.i + aPK, ey + 2 * aZZ + this.aZa), um.fillText(bA.rc.zR(fH[8]), 0, 0), um.fillText(bA.rc.zR(fH[9]), 0, aAj / 9), um.fillText(bA.rc.zR(fH[10]), 0, 2 * aAj / 9), um.fillText(bA.rc.zR(fH[
				18]), 0, 3 * aAj / 9), um.fillStyle = bB.o1, um.fillText(aEl, 0, 4 * aAj / 9), um.fillStyle = bB.oK, um.fillText(bA.rc.zR(fH[13]), 0, 5 * aAj / 9), um.fillText(bA.rc.zR(fH[15]), 0, 6 * aAj / 9), um.fillText(bA.rc.zR(fH[16]),
				0, 7 * aAj / 9), um.fillText(bA.rc.zR(fH[12]), 0, 8 * aAj / 9), fH[12] + fH[13] + fH[15] + fH[16]);
		um.fillStyle = bB.oJ, um.fillText(bA.rc.zR(ew), 0, aAj), um.fillStyle = bB.nl
	}, this.a5z = function(g, a2X, a9Q) {
		var aB, e, fY;
		return this.aZd < 0 || 1 < this.aZd ? .25 : (aB = this.aZd * (bd.aRq - 1), fY = g[e = Math.floor(aB)], fY += (aB - e) * (g[e < bd.aRq - 1 ? e + 1 : e] - fY), um.strokeStyle = bB.no, .04 < this.aZd && this.aZn(0, this.aZY - a2X * Math.pow(
				fY, a9Q), aB * this.aZX / (bd.aRq - 1), this.aZY - a2X * Math.pow(fY, a9Q)), .04 < fY / bd.max[this.e9] && this.aZn(aB * this.aZX / (bd.aRq - 1), this.aZY, aB * this.aZX / (bd.aRq - 1), this.aZY - a2X * Math.pow(fY, a9Q)), um
			.fillStyle = bB.oM, um.beginPath(), um.arc(aB * this.aZX / (bd.aRq - 1), this.aZY - a2X * Math.pow(fY, a9Q), Math.max(2, .014 * this.j), 0, 2 * Math.PI), um.fill(), g = this.aZd * bf.aBP, g = 0 === ag.ml[aD.eZ] ? Math.floor(g * bd
				.aZQ) : Math.floor(g * bf.k9()), um.fillStyle = bB.nl, um.fillText(1 === a9Q ? bA.rc.a4C(fY / 100, 2) : bA.rc.zR(Math.floor(fY)), -this.sz, this.aZY - a2X * Math.pow(fY, a9Q)), bA.qd.textAlign(um, 1), um.fillText(aW.aBC(g),
				aB * this.aZX / (bd.aRq - 1), this.aZY + this.aZb - (a0.a1.hy() ? 2 : 0) - this.a7p), bA.qd.textAlign(um, 2), a2X * Math.pow(fY, a9Q) / this.aZY)
	}, this.aZn = function(nB, nC, nO, nP) {
		um.beginPath(), um.moveTo(nB, nC), um.lineTo(nO, nP), um.stroke()
	}
}

function by() {
	this.aZo = "https://", this.aZp = this.aZo + "territorial.io/", this.aRr = this.aZp + "changelog", this.aRv = this.aZp + "terms", this.aZq = this.aZp + "cookie_policy", this.aRC = this.aZp + "privacy", this.aRu = this.aZp + "tutorial", this.aRt =
		this.aZp + "players", this.aRs = this.aZp + "clans", this.a0w = this.aZp + "clan-results", this.aOT = "https://patreon.com/c/territorial", this.aCj = this.aZo + "play.google.com/store/apps/details?id=territorial.io", this.a1E = this.aZo +
		"apps.apple.com/app/id1581110913", this.aZr = this.aZo + "www.youtube.com/watch?v=toZTQ8aRdFc", this.aCk = this.aZo + "discord.gg/pthqvpTXmh", this.aCl = this.aZo + "www.instagram.com/davidtschacher/", this.yz =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function d8() {
	this.y = new aZs, this.yH = new aZt, this.dd = function() {
		this.y.dd()
	}, this.j5 = function() {
		0 !== this.y.a72 && this.y.a72--
	}
}

function aZt() {
	this.ul = function() {
		if (0 !== bP.y.a72 && (um.globalAlpha = Math.min(bP.y.a72 / 580, 1), um.drawImage(bP.y.aZw, 1 + aS.yF(), 1 + aS.yG()), um.globalAlpha = 1, aD.hD)) {
			for (var nB = iQ / i0, nC = iR / i0, nO = (h.i + iQ) / i0, nP = (h.j + iR) / i0, gO = bP.y.aZx * i0, aZy = bP.y.aZy, aB = aD.kC - 1; 0 <= aB; aB--) ! function(aB, gO, nB, nC, nO, nP, aZy) {
				var highlight;
				0 === ag.ml[aB] || 0 === ag.gd[aB] || ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aB]) && (gO *= 2), nO = h.i * ((ag.ih[aB] + ag.ii[aB] + 1) / 2 - nB) / (nO - nB) - .5 * gO, nB = h.j * ((ag.ij[
					aB] + ag.ik[aB] + 1) / 2 - nC) / (nP - nC) - .5 * gO, nO > h.i) || nB > h.j || nO < -gO || nB < -gO || (highlight ? um.setTransform(2 * i0, 0, 0, 2 * i0, nO, nB) : um.setTransform(i0, 0, 0, i0, nO, nB), um.drawImage(
					aZy[aD.hj ? bg.en[aB] : 1], 0, 0))
			}(aB, gO, nB, nC, nO, nP, aZy);
			um.setTransform(i0, 0, 0, i0, 0, 0)
		}
	}
}

function aZs() {
	this.aZx = 28, this.a72 = 0, this.aZw = null;
	var aa0 = this.aZy = null;

	function aa3(hl, aa4) {
		var ew, ey, eb, i9, a2y = bA.qd.wZ(hl, hl),
			hr = bA.qd.getContext(a2y, !0),
			ho = bA.qd.getImageData(hr, hl, hl),
			wk = ho.data,
			l7 = (hl >> 1) - .5,
			aa5 = .5 + l7;
		for (aa5 *= aa5, ey = 0; ey < hl; ey++)
			for (ew = 0; ew < hl; ew++) i9 = (i9 = ew - l7) * i9 + (i9 = ey - l7) * i9, wk[eb = 4 * (ey * hl + ew)] = aa4[0], wk[1 + eb] = aa4[1], wk[2 + eb] = aa4[2], wk[3 + eb] = (aa5 - i9) * aa4[3] / aa5;
		return hr.putImageData(ho, 0, 0), a2y
	}

	function aZ2(aB, hr, a2y, hl) {
		var highlight, ew, ey;
		0 !== ag.ml[aB] && 0 !== ag.gd[aB] && ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aB]) && (hl *= 2), ew = ag.ih[aB] + ag.ii[aB] + 1 - hl - 2 >> 1, ey = ag.ij[aB] + ag.ik[aB] + 1 - hl - 2 >> 1, highlight ? hr
			.drawImage(a2y[aD.hj ? 9 === aD.kU && 5 === aE.hY[aB] ? 3 : bg.en[aB] : aB < aD.kC ? 1 : 0], ew, ey, hl, hl) : hr.drawImage(a2y[aD.hj ? 9 === aD.kU && 5 === aE.hY[aB] ? 3 : bg.en[aB] : aB < aD.kC ? 1 : 0], ew, ey))
	}
	this.dd = function() {
		var sF;
		this.a72 = 700,
			function(sF) {
				var hl = sF.aZx;
				if (sF.aZy = [], aa0 = [], aD.hj) {
					for (var aB = 0; aB <= aD.xM; aB++) sF.aZy.push(aa3(hl, bg.aXM[bg.kZ[aB]])), aa0.push(aa3(hl >> 1, bg.aXM[bg.kZ[aB]]));
					9 === aD.kU && aa0.push(aa3(hl, bg.aXM[1]))
				} else sF.aZy.push(aa3(hl, bg.aXM[7])), sF.aZy.push(aa3(hl, bg.aXM[4])), aa0.push(aa3(hl >> 1, bg.aXM[7]))
			}(this),
			function(sF, aa6) {
				var aB, aZw = sF.aZw,
					hr = bA.qd.getContext(aZw, !0),
					ep = aD.em,
					hl = sF.aZx >> 1;
				hr.imageSmoothingEnabled = !1, hr.setTransform(1, 0, 0, 1, 0, 0), aa6 && hr.clearRect(0, 0, aZw.width, aZw.height);
				if (9 === aD.kU) {
					hl <<= 1;
					sF = az.kd[5];
					for (aB = ep - sF; aB < ep; aB++) aZ2(aB, hr, aa0, hl);
					ep -= sF, hl >>= 1
				}
				for (aB = aD.kC; aB < ep; aB++) aZ2(aB, hr, aa0, hl)
			}(this, null !== (sF = this).aZw && sF.aZw.width === bS.f0 - 2 && sF.aZw.height === bS.f1 - 2 || (sF.aZw = bA.qd.wZ(bS.f0 - 2, bS.f1 - 2), !1)), aD.hD || this.a4U()
	}, this.aXL = aa3, this.a4U = function() {
		for (var ep = aD.kC, hl = this.aZx, aZy = this.aZy, hr = bA.qd.getContext(this.aZw, !0), aB = 0; aB < ep; aB++) aZ2(aB, hr, aZy, hl)
	}
}

function d9() {
	function aa9() {
		8 === aD.kU && 1 === aD.a0A && bR.zm.a09()
	}

	function aa8(player) {
		aD.hD ? (ak.aHW(player), al.aKa(), aD.kW && aD.pz.j5()) : b3.aD3(player)
	}
	this.pR = function(player) {
		aN.a0M(player, player === aD.eZ ? 21 : 22), aa8(player), aa9()
	}, this.pw = function(player) {
		1 === aD.a0A && 0 !== ag.ml[player] && 2 !== ag.a3U[player] && aa8(player), aD.a0D--, aD.a0C--, aN.a0M(player, 4), bA.gB.h0(2) && aW.mX(!0), aa9()
	}
}

function dJ() {
	this.aUF = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.aAg = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", bB.nl, "rgb(170,170,170)"
	], this.aaA = [bB.nl, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", bB.nl, bB.nc], this.aaB = [bB.nc, bB.nl, bB.nl, bB.nl, bB.nc, bB.nc, bB.nc, bB.nc, bB.nl];
	var aKk = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"];
	this.aK3 = ["rgba(" + aKk[0] + ",", "rgba(" + aKk[1] + ",", "rgba(" + aKk[2] + ",", "rgba(" + aKk[3] + ",", "rgba(" + aKk[4] + ",", "rgba(" + aKk[5] + ",", "rgba(" + aKk[6] + ",", "rgba(" + aKk[7] + ",", "rgba(" + aKk[8] + ",", "rgba(" + aKk[9] +
			","
		], this.aK4 = ["rgb(" + aKk[0] + ")", "rgb(" + aKk[1] + ")", "rgb(" + aKk[2] + ")", "rgb(" + aKk[3] + ")", "rgb(" + aKk[4] + ")", "rgb(" + aKk[5] + ")", "rgb(" + aKk[6] + ")", "rgb(" + aKk[7] + ")", "rgb(" + aKk[8] + ")", "rgb(" + aKk[9] +
			")"
		], this.a0V = null, this.aXM = [
			[128, 128, 128, 180],
			[255, 0, 0, 180],
			[0, 255, 0, 180],
			[50, 50, 255, 180],
			[255, 255, 0, 180],
			[255, 0, 255, 180],
			[0, 255, 255, 180],
			[255, 255, 255, 180],
			[0, 0, 0, 180]
		], this.aX1 = [
			[128, 128, 128],
			[255, 0, 0],
			[0, 255, 0],
			[0, 0, 255],
			[255, 255, 0],
			[255, 0, 255],
			[0, 255, 255],
			[255, 255, 255],
			[0, 0, 0]
		], this.kZ = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.en = new Uint8Array(aD.em), this.aAh = new Uint8Array(aD.em), this.xS = new Uint16Array(aD.em), this.xT = new Uint16Array(this.kZ.length + 1), this.xU = new Uint16Array(this.kZ.length), this.de =
		function() {
			this.a0V = [L(512), L(513), L(514), L(515), L(516), L(517), L(518), L(519), L(520)]
		}, this.dd = function() {
			if (this.en.fill(0), this.aAh.fill(0), this.aaC(), aD.hj) {
				if (9 === aD.kU) {
					for (var en = bg.en, aB = aD.data.teamPlayerCount[7] - 1; 0 <= aB; aB--) en[aB] = 1;
					var ep = aD.em;
					for (aB = aD.data.teamPlayerCount[7]; aB < ep; aB++) en[aB] = 2;
					bg.kZ[1] = 7, bg.kZ[2] = 8
				} else aD.kW ? function() {
					var aX1 = bg.aX1,
						colorsData = aD.data.colorsData;
					if (!aD.data.selectableColor)
						for (var aB = aD.kC - 1; 0 <= aB; aB--) colorsData[aB] = ay.jT(262144);
					var aaN = 0,
						f5 = 768,
						aTk = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
						teamPlayerCount = aD.data.teamPlayerCount;
					for (aB = 0; aB < 9; aB++)
						if (teamPlayerCount[aB]) {
							for (var es = 0, f9 = 0; f9 < 3; f9++) es += Math.abs(aX1[aB][f9] - aTk[f9]);
							es < f5 && (aaN = aB, f5 = es)
						} var aaO = new Uint16Array(9);
					for (aB = 0; aB < 9; aB++) aaO[aB] = teamPlayerCount[aB];
					var kZ = bg.kZ,
						aaP = new Uint8Array(9),
						gI = (kZ[0] = 0, 1);
					for (aB = 1; aB < 9; aB++) aaO[aB] && (aaP[aB] = gI, kZ[gI++] = aB);
					var jS = aD.kC,
						en = bg.en;
					aaO[aaN] ? (aaO[aaN]--, en[0] = aaP[aaN]) : jS = 0;
					var fA = 0;
					for (aB = jS; aB < aD.xF; aB++) {
						var hh = kZ[fA];
						if (aaO[hh]) aaO[hh]--, en[aB] = aaP[hh];
						else if (aB--, 9 <= ++fA) return console.log("error 325")
					}
				}() : this.j5();
				! function() {
					for (var ep = aD.em, xS = bg.xS, xT = bg.xT, xU = bg.xU, en = bg.en, kZ = bg.kZ, xL = kZ.length, eL = new Array(xL), aB = 0; aB < xL; aB++) eL[aB] = [];
					for (aB = 0; aB < ep; aB++) eL[kZ[en[aB]]].push(aB);
					for (aB = 1; aB <= xL; aB++) xT[aB] = xT[aB - 1] + eL[aB - 1].length;
					for (aB = 0; aB < xL; aB++)
						for (var gI = eL[aB].length, l7 = xT[aB], hh = 0; hh < gI; hh++) xS[hh + l7] = eL[aB][hh];
					var kC = aD.kC;
					for (aB = 0; aB < xL; aB++)
						for (gI = eL[aB].length, l7 = xT[aB], hh = 0; hh < gI; hh++)
							if (xS[hh + l7] >= kC) {
								xU[aB] = hh;
								break
							}
				}(), ! function() {
					for (var ep = aD.em, en = bg.en, aAh = bg.aAh, kZ = bg.kZ, aB = 0; aB < ep; aB++) aAh[aB] = kZ[en[aB]];
					9 === aD.kU && aAh.fill(1, ep - az.kd[5])
				}()
			}
		}, this.aaC = function() {
			for (var aB = this.kZ.length - 1; 0 <= aB; aB--) this.kZ[aB] = aB
		}, this.j5 = function() {
			var zG = new Uint8Array(aD.kC),
				zH = new Uint8Array(aD.kC),
				aaH = new Uint16Array(8),
				aaI = new Uint16Array(this.kZ.length);
			this.aaJ(zG, zH, aaH, 1), this.aH7(aaH), this.aaK(aaI, zG, zH), this.aaL(zG, zH, aaI), this.aaM()
		}, this.aaJ = function(zG, zH, aaO, aaQ) {
			for (var f9, e, aaR, ep = this.kZ.length - aaQ, g = new Uint16Array(ep), aX1 = this.aX1, colorsData = aD.data.colorsData, aB = aD.kC - 1; 0 <= aB; aB--) {
				for (f9 = ep; aaQ <= f9; f9--) g[f9 - 1] = Math.abs(4 * (colorsData[aB] >> 12) - aX1[f9][0]) + Math.abs(4 * (colorsData[aB] >> 6 & 63) - aX1[f9][1]) + Math.abs(4 * (63 & colorsData[aB]) - aX1[f9][2]);
				for (aaR = 768, f9 = ep - 1; 0 <= f9; f9--) g[e = (f9 + aB) % ep] < aaR && (aaR = g[e], zG[aB] = e);
				for (aaO[zG[aB]] += 4, aaR = 768, f9 = ep - 1; 0 <= f9; f9--) g[e = (f9 + aB) % ep] < aaR && e !== zG[aB] && (aaR = g[e], zH[aB] = e);
				aaO[zH[aB]]++
			}
		}, this.aH7 = function(aaO) {
			for (var f9, l9, ep = this.kZ.length - 1, aB = ep; 0 <= aB; aB--) this.kZ[aB] = aB;
			for (aB = ep - 1; 0 <= aB; aB--) aaO[aB]++;
			for (aB = 1; aB <= ep; aB++) {
				for (l9 = 0, f9 = 1; f9 < ep; f9++) aaO[f9] > aaO[l9] && (l9 = f9);
				aaO[l9] = 0, this.kZ[aB] = l9 + 1
			}
		}, this.aaK = function(aaI, zG, zH) {
			var f9, a0q, fA, es, e, nN, tG, aaS = this.kZ.length - 1,
				r6 = new Uint16Array(aaS),
				aaT = [],
				aaU = 0,
				a0p = [],
				aaV = [];
			loop: for (var aB = 0; aB < aD.kC; aB++)
				if (null !== (a0q = bA.rc.a0r(ag.a0o[aB]))) {
					for (f9 = a0p.length - 1; 0 <= f9; f9--)
						if (a0q === a0p[f9]) {
							aaV[f9].push(aB), aaU = Math.max(aaU, aaV[f9].length);
							continue loop
						} a0p.push(a0q), aaT.push(!1), aaV.push([aB]), aaU = Math.max(aaU, 1)
				}
			for (; 2 < aD.xM && aaU > bL.du(aD.kC, aD.xM);) aD.xM--, aD.kU--;
			for (f9 = a0p.length - 1; 0 <= f9; f9--) {
				for (es = -1, fA = a0p.length - 1; 0 <= fA; fA--) !aaT[fA] && (-1 === es || aaV[fA].length > aaV[es].length) && (es = fA);
				for (fA = aaS - 1; 0 <= fA; fA--) r6[fA] = 1;
				for (fA = aaV[es].length - 1; 0 <= fA; fA--) r6[zG[aaV[es][fA]]] += 3, r6[zH[aaV[es][fA]]]++;
				for (aB = aaS - 1; 0 <= aB; aB--) {
					for (e = es % aaS, fA = aaS - 1; 0 <= fA; fA--) r6[fA] > r6[e] && (e = fA);
					for (nN = -1, fA = aD.xM; 0 < fA; fA--)
						if (this.kZ[fA] === e + 1) {
							nN = fA;
							break
						} if (r6[e] = 0, -1 !== nN) {
						for (tG = 0, fA = aD.xM; 0 < fA; fA--) aaI[nN] > aaI[fA] && tG++;
						if (tG !== aD.xM - 1) {
							for (fA = aaV[es].length - 1; 0 <= fA; fA--) aaI[nN]++, this.en[aaV[es][fA]] = nN;
							break
						}
					}
				}
				aaT[es] = !0
			}
		}, this.aaL = function(zG, zH, aaI) {
			for (var aB, i8, ep = this.kZ.length - 1, border = bL.du(aD.kC, aD.xM), aaW = (0 < aD.kC % aD.xM && border++, new Uint8Array(1 + ep)), f9 = ep; 1 <= f9; f9--) aaW[this.kZ[f9]] = f9;
			for (aB = 0; aB < aD.kC; aB++) i8 = aaW[zG[aB] + 1], 0 === this.en[aB] && i8 <= aD.xM && aaI[i8] < border && (aaI[i8]++, this.en[aB] = i8);
			for (aB = 0; aB < aD.kC; aB++) i8 = aaW[zH[aB] + 1], 0 === this.en[aB] && i8 <= aD.xM && aaI[i8] < border && (aaI[i8]++, this.en[aB] = i8);
			for (f9 = aD.xM; 1 <= f9; f9--)
				for (aB = aD.kC - 1; 0 <= aB && !(aaI[f9] >= border); aB--) 0 === this.en[aB] && (aaI[f9]++, this.en[aB] = f9)
		}, this.aaM = function() {
			for (var aB = aD.kC; aB < aD.em; aB++) this.en[aB] = 1 + aB % aD.xM
		}
}

function db() {
	this.ge = function() {
		for (var ew, ey, aB = fl - 1; 0 <= aB; aB--) ew = bL.du(fn[aB], 4) % bS.f0, ey = bL.du(fn[aB], 4 * bS.f0), ag.ih[fg] = Math.min(ew, ag.ih[fg]), ag.ij[fg] = Math.min(ey, ag.ij[fg]), ag.ii[fg] = Math.max(ew, ag.ii[fg]), ag.ik[fg] = Math
			.max(ey, ag.ik[fg])
	}, this.fz = function() {
		var es, gN, aB, ep = ag.gH[fg].length,
			er = ac.er;
		loop: for (aB = ep - 1; 0 <= aB; aB--) {
			for (es = 3; 0 <= es; es--)
				if (gN = ag.gH[fg][aB] + er[es], ac.eg(gN) || ac.gP(gN) && ac.eh(gN) !== fg) {
					ac.jO(ag.gH[fg][aB], fg);
					continue loop
				} ag.gH[fg][aB] = ag.gH[fg][ep - 1], ag.gH[fg].pop(), ep--
		}
	}, this.g0 = function() {
		var player = fg,
			gV = ag.gV,
			gW = ag.gW,
			fF = ag.fF,
			ep = gV[player].length,
			er = ac.er;
		loop: for (var aB = ep - 1; 0 <= aB; aB--) {
			for (var aaX = !1, aaY = !1, es = 3; 0 <= es; es--) {
				var gN = gV[player][aB] + er[es];
				if (ac.aHH(gN, player)) continue loop;
				aaX = aaX || ac.i3(gN), aaY = aaY || ac.aHG(gN)
			}
			aaX ? gW[player].push(gV[player][aB]) : aaY ? fF[player].push(gV[player][aB]) : ac.xo(gV[player][aB], player), gV[player][aB] = gV[player][ep - 1], gV[player].pop(), ep--
		}
	}, this.gT = function() {
		ag.gd[fk] -= fl
	}, this.gU = function(border) {
		for (var ep = border.length, aB = ep - 1; 0 <= aB; aB--) ac.y9(fk, border[aB]) || (border[aB] = border[ep - 1], border.pop(), ep--)
	}, this.gX = function(border) {
		for (var ep = border.length, aB = ep - 1; 0 <= aB; aB--) !ac.y9(fk, border[aB]) && ac.ek(border[aB]) && (border[aB] = border[ep - 1], border.pop(), ep--)
	}, this.gY = function(border) {
		for (var es, gN, ep = border.length, er = ac.er, aB = ep - 1; 0 <= aB; aB--)
			for (es = 3; 0 <= es; es--)
				if (gN = border[aB] + er[es], ac.aHH(gN, fk)) {
					ag.gV[fk].push(border[aB]), border[aB] = border[ep - 1], border.pop(), ep--;
					break
				}
	}, this.gZ = function() {
		for (var es, gN, er = ac.er, aB = fl - 1; 0 <= aB; aB--)
			for (es = 3; 0 <= es; es--) gN = fn[aB] + er[es], ac.yC(fk, gN) && ac.aHI(gN) && (ag.gV[fk].push(gN), ac.gK(gN, fk))
	}, this.ga = function() {
		var ew, ey;
		loop: for (; ag.ij[fk] < ag.ik[fk];) {
			for (ew = ag.ii[fk]; ew >= ag.ih[fk]; ew--)
				if (ac.y9(fk, 4 * (ag.ij[fk] * bS.f0 + ew))) break loop;
			ag.ij[fk]++
		}
		loop: for (; ag.ij[fk] < ag.ik[fk];) {
			for (ew = ag.ii[fk]; ew >= ag.ih[fk]; ew--)
				if (ac.y9(fk, 4 * (ag.ik[fk] * bS.f0 + ew))) break loop;
			ag.ik[fk]--
		}
		loop: for (; ag.ih[fk] < ag.ii[fk];) {
			for (ey = ag.ik[fk]; ey >= ag.ij[fk]; ey--)
				if (ac.y9(fk, 4 * (ey * bS.f0 + ag.ih[fk]))) break loop;
			ag.ih[fk]++
		}
		loop: for (; ag.ih[fk] < ag.ii[fk];) {
			for (ey = ag.ik[fk]; ey >= ag.ij[fk]; ey--)
				if (ac.y9(fk, 4 * (ey * bS.f0 + ag.ii[fk]))) break loop;
			ag.ii[fk]--
		}
	}, this.ei = function(player, jL) {
		return 0 === bg.en[player] || bg.en[player] !== bg.en[jL]
	}, this.hL = function(player) {
		for (var aB, gO, ep = ag.gV[player].length, er = ac.er, es = 3; 0 <= es; es--)
			for (gO = er[es], aB = 0; aB < ep; aB++)
				if (ac.eg(ag.gV[player][aB] + gO)) return !0;
		return !1
	}, this.aHS = function(player) {
		for (var aB, gO, ep = ag.gV[player].length, er = ac.er, es = 3; 0 <= es; es--)
			for (gO = er[es], aB = 0; aB < ep; aB++)
				if (ac.jN(ag.gV[player][aB]) && ac.eg(ag.gV[player][aB] + gO)) return !0;
		return !1
	}, this.hO = function(a3a, a3b) {
		for (var aB, dt, gO, gN, aY5 = ag.gV[a3a].length, aY6 = ag.gV[a3b].length, er = (aY6 < aY5 && (dt = a3a, a3a = a3b, a3b = dt, dt = aY5, aY5 = aY6, 0), ac.er), es = 3; 0 <= es; es--)
			for (gO = er[es], aB = 0; aB < aY5; aB++)
				if (gN = ag.gV[a3a][aB] + gO, ac.gP(gN) && ac.eh(gN) === a3b) return !0;
		return !1
	}, this.aHT = function(a3a, a3b) {
		for (var aB, gO, gN, aY5 = ag.gV[a3a].length, er = ac.er, es = 3; 0 <= es; es--)
			for (gO = er[es], aB = 0; aB < aY5; aB++)
				if (ac.jN(ag.gV[a3a][aB]) && (gN = ag.gV[a3a][aB] + gO, ac.gP(gN)) && ac.eh(gN) === a3b) return !0;
		return !1
	}
}

function dV() {
	this.q8 = new aaZ
}

function aaZ() {
	this.hR = function(player) {
		bA.gB.a3V(player) && aN.yc(80, L(521), 637, 0, bB.oa, bB.ni, -1, !1)
	}, this.hU = function(player) {
		bA.gB.a3V(player) && aN.yc(80, L(522), 637, 0, bB.oa, bB.ni, -1, !1)
	}
}

function aaa() {
	this.aab = 0, this.j5 = function() {
		aO.j5(), aZ.j5(), h.j5(), b0.y.j5(), ax.aGd(), bf.dl && (bf.dl = !1, aa.ul())
	}
}

function aac() {
	this.eO = bf.eO, this.e9 = 0, this.aab = 0, this.aGb = 0, this.aad = null, this.aae = 7, this.a73 = 0, this.dd = function() {
		this.aGb = 0, this.aad = [], this.e9 = 0, this.aab = 0
	}, this.aTE = function(aC) {
		if (aD.hD) this.aBQ(aC);
		else if (this.aad.push(aC), 2 === aD.a0A) {
			for (var aB = 0; aB < this.aad.length; aB++) b8.p4.j5(this.aad[aB]);
			this.aad = []
		}
	}, this.aBQ = function(aC) {
		2 !== aD.a0A && (b8.p4.j5(aC), b9.j5(), aW.aBQ(this.aGb), this.aGb === aD.a4a ? (aD.pz.j5(), this.aGb = 0, this.e9 = 0, this.aab = 0, this.eO = bf.eO) : (this.aGb++, af.a4T(), af.mX(!0), bb.aC0()))
	}, this.j5 = function() {
		h.j5(), aD.hD ? (bf.dl = aW.aBQ(-1) || bf.dl, mZ()) : (0 !== this.e9 || bf.eO >= this.eO && (this.eO += bf.aBP * Math.floor(1 + (bf.eO - this.eO) / bf.aBP), 2 === aD.a0A ? mO() : this.aaf(), this.e9++, 27 < bf.eO - this.a73)) && this
		.aag(), mU(), bf.dl && (bf.dl = !1, yD()), this.a73 = bf.eO
	}, this.aag = function() {
		bf.dl = !0, mW(), this.e9 = 0
	}, this.aaf = function() {
		var vb, aB;
		if (this.aab !== 7 * this.aGb) mQ(), bb.aC0();
		else {
			vb = !1;
			loop: for (; this.aah() && (vb = !0, mQ(), 2 !== aD.a0A) && 0 < this.aad.length;)
				for (aB = this.aae - 2; 0 <= aB; aB--)
					if (mQ(), 2 === aD.a0A) break loop;
			vb ? bb.aC0() : (mO(), bb.a4W())
		}
	}, this.aah = function() {
		return 0 < this.aad.length && (this.aGb++, b8.p4.j5(this.aad[0]), this.aad.shift(), !0)
	}
}

function aai() {
	var aaj, aak, aal, aGb, aam, e9 = 0,
		eO = bf.eO;

	function aap() {
		! function() {
			if (!aD.hD) return;
			if (aD.kW) return;
			if (2 !== aD.a0A)
				if (aam % 7 != 0) aam++;
				else if (aGb === aD.a4a) {
				if (!aas()) return;
				aW.aBQ(aGb), aD.pz.j5()
			} else {
				if (!aas()) return;
				aam++, aGb++, af.a4T(), af.mX(!0)
			}
			return 1
		}() && aas() && mQ()
	}

	function aaq() {
		e9 = 0, (aD.hD ? (bf.dl = aW.aBQ(aGb - (aam % 7 == 0 ? 0 : 1) + aam % 7 / 7) || bf.dl, mZ) : aM.gz || !bC.a4x ? mZ : (bf.dl = !0, mW))()
	}

	function aas() {
		var aB, ep, aat = b9.px.aUd,
			fY = b9.px.aUe,
			fa = b9.px.aUf,
			fc = b9.px.aUg,
			aau = b9.px.aUh,
			aav = b9.px.aUi;
		if (!(aaj >= aav.length)) {
			if (aav = aav[aaj], aau[aaj]) {
				for (ep = aak + aav, aB = aak; aB < ep; aB++) b8.p4.pm(aat[aB], fY[aB], fa[aB], fc[aB]);
				aak += aav, aaj++
			} else ++aal >= aav && (aaj++, aal = 0);
			return 1
		}
		aN.a1R("Replay file smaller than expected."), bC.a2G(!1), aD.a0A = 2
	}
	this.aab = 0, this.dd = function() {
		aam = aGb = aal = aak = aaj = 0
	}, this.j5 = function() {
		var aYW;
		h.j5(), bC.a8h() < 1.7 ? 0 === e9 ? bf.eO >= eO && (aYW = bf.aBP / bC.a8h(), eO += aYW * Math.floor(1 + (bf.eO - eO) / aYW), 2 === aD.a0A || aM.gz || !bC.a4x ? mO() : (aap(), bb.aC0()), e9++) : aaq() : function() {
			var aYW;
			if (bf.eO >= eO)
				if (2 === aD.a0A || aM.gz || !bC.a4x) mO(), eO = bf.eO;
				else {
					for (aYW = bf.aBP / bC.a8h(), 16 < (bf.eO - eO) / aYW && (eO = bf.eO - 16 * aYW); bf.eO >= eO && 2 !== aD.a0A;) eO += aYW, aap();
					bb.aC0()
				} aaq()
		}(), mU(), bf.dl && (bf.dl = !1, yD())
	}, this.a0K = function() {
		b9.px.aUi.length - aaj <= 2 || aN.a1R("Replay file larger than expected.")
	}
}

function aaw() {
	var e9 = 0,
		eO = bf.eO;
	this.aab = 0, this.j5 = function() {
		h.j5(), aD.hD ? mZ() : 0 === e9 ? bf.eO >= eO && (eO += bf.aBP * Math.floor(1 + (bf.eO - eO) / bf.aBP), 2 === aD.a0A || aM.gz ? mO() : (mQ(), bb.aC0()), e9++) : ((aM.gz ? mZ : (bf.dl = !0, mW))(), e9 = 0), mU(), bf.dl && (bf.dl = !1,
		yD())
	}
}

function dR() {
	this.a0J = null, this.dl = !1, this.eO = 0, this.aBP = 56;
	var aax = 0;

	function aay() {
		bf.eO = aax = performance.now(), bf.a0J.j5(), window.requestAnimationFrame(aay)
	}
	this.dd = function() {
		this.a4u(), window.requestAnimationFrame(aay), this.eO = performance.now()
	}, this.a4m = function() {
		aD.gy ? (this.a0J = new aai, this.a0J.dd()) : aD.kW ? this.a0J = new aaw : (this.a0J = new aac, this.a0J.dd())
	}, this.a4u = function() {
		this.a0J = new aaa, this.dl = !0
	}, this.j5 = function() {
		this.a0J.aab++
	}, this.k9 = function() {
		return this.a0J.aab
	}, this.aSp = function() {
		var dt = performance.now();
		dt < aax + 1e3 || (this.eO = dt, this.a0J.j5())
	}
}

function ct() {
	var aG1 = 0,
		aaz = !0;

	function ab0(id) {
		id = [L(523), L(524), L(525), L(526)][id];
		aN.a6k(id)
	}
	this.j5 = function() {
		var dt, a75;
		bf.eO < aG1 || (aG1 = bf.eO + 5e3, aD.gy) || aD.kW || bA.gB.h1(aD.eZ) || (dt = new Date, a75 = dt.getUTCSeconds(), aaz ? a75 < 50 && (aaz = !1) : a75 < 50 || (aaz = !0, (a75 = (dt.getUTCMinutes() + 1) % 60) % 5 == 0 && (0 == a75 || 20 ==
			a75 || 40 == a75 ? aD.kU < 7 && ab0(0) : 10 == a75 || 30 == a75 || 50 == a75 ? 7 !== aD.kU && 10 !== aD.kU || ab0(1) : 5 == a75 || 25 == a75 || 45 == a75 ? 8 === aD.kU && ab0(2) : 35 == a75 && 9 === aD.kU && ab0(3))))
	}
}

function cn() {
	var nB, nC, nO, nP, ab1 = 0,
		ab2 = 0;

	function ab4() {
		return Math.pow(Math.pow(nO - nB, 2) + Math.pow(nP - nC, 2), .5)
	}

	function ab3(e) {
		nB = h.k * e.touches[0].clientX, nC = h.k * e.touches[0].clientY, nO = h.k * e.touches[1].clientX, nP = h.k * e.touches[1].clientY
	}
	this.a1i = function(e) {
		return 1 < e.touches.length ? (ab2 = bf.eO, ab1 = 3, ab3(e), aL.ru(), !0) : (ab1 = 0, !1)
	}, this.a1j = function(e) {
		var aLY, i6, i7;
		return 0 !== aD.a0A && 1 < e.touches.length && (ab1 = Math.max(ab1 - 1, 0), aH.nT() && (aLY = ab4(), ab3(e), e = ab4(), i6 = Math.floor((nB + nO) / 2), i7 = Math.floor((nC + nP) / 2), aS.a98(i6, i7, Math.max(.125, e) / Math.max(.125,
			aLY)), bf.dl = !0), !0)
	}, this.a26 = function() {
		var ew, ey;
		return !!(ab1 && (ab1 = 0, bf.eO < ab2 + 500)) && (ew = (nB + nO) / 2, ey = (nC + nP) / 2, aL.a20(ew, ey), aL.click(ew, ey, !0) && (bf.dl = !0), !0)
	}
}

function d2() {
	this.size = 0, this.e9 = 0, this.aC = null, this.dd = function(aC) {
		this.e9 = 0, this.aC = aC, this.size = aC.length
	}, this.uF = function() {
		this.aC = null
	}, this.pl = function(size) {
		for (var fH = 0, aC = this.aC, nT = this.e9 + size - 1, aB = this.e9; aB <= nT; aB++) fH |= (aC[aB >> 3] >> 7 - (7 & aB) & 1) << nT - aB;
		return this.e9 += size, this.e9 > 8 * this.size && console.error("Unwrapper Overflow"), fH
	}, this.aTM = function(size) {
		var f9 = size >> 1;
		return (1 << f9) * this.pl(size - f9) + this.pl(f9)
	}, this.aTN = function(ab5) {
		return this.size === bD.aTL(ab5)
	}, this.aUv = function(x1, ab6, ab7) {
		var gI = this.pl(x1);
		if (!gI) return null;
		for (var x1 = Math.max(gI, ab7), g = new(ab6 <= 8 ? Uint8Array : ab6 <= 16 ? Uint16Array : Uint32Array)(x1), aB = 0; aB < gI; aB++) g[aB] = this.pl(ab6);
		ab7 = g[gI - 1];
		return ab7 && g.fill(ab7, gI), g
	}, this.aUw = function(x1, ab8, ab7) {
		var gI = this.pl(x1);
		if (!gI) return null;
		for (var x1 = Math.max(gI, ab7), g = new Array(x1), aB = 0; aB < gI; aB++) g[aB] = this.aUt(ab8);
		return g.fill(g[gI - 1], gI), g
	}, this.aUt = function(x1) {
		return bG.w8.wC(this.pl(x1))
	}, this.aUu = function() {
		var qK = bF.sv.sw(bF.sv.sx(this.pl(30))),
			qK = bA.rc.a4O(qK, "_", "/");
		qK = bA.rc.a4O(qK, "-", "+");
		for (var ab9 = "";
			(qK.length + ab9.length) % 4;) ab9 += "=";
		qK = "data:image/png;base64," + qK + ab9;
		var aHy = new Image;
		aHy.onload = function() {
			b9.aIX.aIY(aHy), aHy.onload = null, aHy = null
		}, aHy.src = qK
	}
}

function dL() {
	this.aVr = 0, this.aVs = 0, this.aVn = 0, this.aVo = 0, this.aVp = 0, this.aVq = 0, this.aC1 = [0, 0, 0, 0], this.nS = function() {
		this.aVr = aS.yF(), this.aVs = aS.yG(), this.aVn = -this.aVr, this.aVo = -this.aVs, this.aVp = h.i / i0, this.aVq = h.j / i0, this.aC1[0] = Math.floor(this.aVn), this.aC1[1] = Math.floor(this.aVo), this.aC1[2] = Math.floor(this.aC1[0] +
			this.aVp + 1), this.aC1[3] = Math.floor(this.aC1[1] + this.aVq + 1), bb.aBy = !0
	}
}

function co() {
	var a7l, my;
	this.dd = function() {
		a7l = 1, my = 0
	}, this.j5 = function() {
		0 < a7l && (my = 0 === my ? bf.eO + 16 : my, a7l = (a7l -= .001 * (bf.eO - my)) < 0 ? 0 : a7l, my = bf.eO, bf.dl = !0)
	}, this.ul = function() {
		0 < a7l && (um.fillStyle = "rgba(0,0,0," + a7l + ")", um.fillRect(0, 0, h.i, h.j))
	}
}

function a6() {
	this.size = 0, this.e9 = 0, this.aC = null, this.dd = function(aC) {
		this.e9 = 0, this.aC = aC, this.size = aC.length
	}, this.a7 = function(ab5) {
		return this.dd(new Uint8Array(this.aTL(ab5))), this.aC
	}, this.uF = function() {
		this.aC = null
	}, this.a8 = function(size, a79) {
		for (var aC = this.aC, nT = this.e9 + size - 1, aB = this.e9; aB <= nT; aB++) aC[aB >> 3] |= (a79 >> nT - aB & 1) << 7 - (7 & aB);
		this.e9 += size, this.e9 > 8 * this.size && console.error("Wrapper Overflow")
	}, this.aTK = function(size, a79) {
		var f9 = size >> 1,
			es = 1 << f9;
		this.a8(size - f9, bL.du(a79, es)), this.a8(f9, a79 % es)
	}, this.abC = function(size) {
		for (var aC = this.aC, nT = this.e9 + size, aB = this.e9; aB < nT; aB++) aC[aB >> 3] &= 255 ^ 128 >>> (7 & aB)
	}, this.aTL = function(ab5) {
		return ab5 + 7 >> 3
	}, this.abD = function(g, jS, nT, abE) {
		for (var aB = jS; aB < nT; aB++) this.a8(abE, g[aB])
	}
}

function d1() {
	this.dd = function() {
		this.g = [], this.e9 = 0
	}, this.aTn = function() {
		return new Uint8Array(this.g)
	}, this.a8 = function(abF, value) {
		for (var g = this.g, nT = this.e9 + abF - 1, abG = 1 + (nT >> 3); g.length < abG;) g.push(0);
		for (var aB = this.e9; aB <= nT; aB++) g[aB >> 3] |= (value >> nT - aB & 1) << 7 - (7 & aB);
		this.e9 += abF
	}, this.dk = function(g, x1, ab6) {
		var abH = bA.ql.a2s(g);
		this.a8(x1, abH);
		for (var aB = 0; aB < abH; aB++) this.a8(ab6, g[aB])
	}, this.aVD = function(g, x1, ab8) {
		var abH = bA.ql.a2s(g);
		this.a8(x1, abH);
		for (var aB = 0; aB < abH; aB++) this.aVB(g[aB], ab8)
	}, this.aVB = function(qK, x1) {
		var ep = qK.length;
		this.a8(x1, ep);
		for (var aB = 0; aB < ep; aB++) this.a8(16, qK.charCodeAt(aB))
	}, this.aVC = function(a2y) {
		var abI = (a2y = a2y.toDataURL()).split(",");
		if (abI.length < 2) console.log("error 266");
		else {
			a2y = bA.rc.a4O(a2y = abI[abI.length - 1], "/", "_"), a2y = bA.rc.a4O(a2y, "\\+", "-");
			var a2y = bA.rc.a4O(a2y, "=", ""),
				wL = bG.sv.wI(a2y),
				ep = wL.length;
			this.a8(30, ep);
			for (var aB = 0; aB < ep; aB++) this.a8(6, wL[aB])
		}
	}
}
a(), self.aiCommand746 = function(fH) {
	0 === fH ? bt() : 1 !== fH || !a0 || 1 !== a0.id || a0.dw < 14 || bJ.fI()
}, setTimeout(bt, 1e4), window.onload = function() {
	bt()
};