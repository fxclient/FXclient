var l, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, at, au, av, aw, h, ax, ay, az, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, bA, bB,
	bC, bD, bE, bF, bG, bH, bI, bJ, bK, bL, bM, bN, bO, bP, bQ, bR, bS, t, bT, bU, bV, bW, bX, bY, bZ, ba, bb, bc, bd, be, bf, bg, a0, bh, bi, bj, o, bk, bl, bm, bn, bo, bp, bq, fZ, fa, fb, fc, fd, fe, ff, fg, fh, fi, fj, fk, fl, hv, iL, iM, a7f, lg,
	js, a1I, uc, xy, aBX, a4T, a4U, S = ["div", "100%", "⬅️ ", "absolute", "canvas", "none", "inherit", "rgb(", "rgba(", "auto", "center", "<br>", "0.75em", "   ", "span", "hidden", "flex", "1em", "Data", "0.8em", " / ", "territorial.io", "input",
		"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==", "click", "0.5em", "' target='_blank'>", "undefined",
		"pre", "</a>", "scroll", "pointer", "password", "middle", "function", "break-word", "bold", "Value", "Escape", "Enter", "1.5em", "0.6em", "0.4em", "text", "string", "rgba(0,0,0,0.8)", "number", "nowrap", "mouseleave", "inline-block", "focus",
		"blur", "Space", "Redacted ", "Player ", "NoStack", "<a href='", "50%", "1.2em", "1.0em", "0px", "0.3em", "0.0em 0.9em", " voted with ", "  • ", "   Gold: ", "🚩 Report", "🔄 Reload", "wheel", "underline", "top", "tls7", "Trebuchet MS",
		"rgba(140,10,10,0.75)", "rgba(100,0,0,0.8)", "rgba(10,140,10,0.75)", "rgba(0,100,0,0.8)", "rgba(0,", "rgb(10,220,10)", "pre-wrap", "placeholder", "mouseover", "mouseout", "long", "logo", "loading", "keydown", "italic ", "file", "error",
		"en-US", "data:image/png;base64,", "break-all", "blur(4px)", "arena", "account", "accept", "_blank", "[Redacted Message]", "Seed", "Reload", "Patreon", "Interest", "Bot ", "Battle Royale", "Back", "Arial Black, Trebuchet MS", "@room", "1v1",
		"1.4em", "1 Minute", "1 Hour", "1 Day", "000", "0.4em 0em", "0.2em", "0.02em brown", ". Duration: x", ",0,0.85)", " solid white;}", " Rank: ", " / 160", " -> "
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

function br(bs) {
	l && !bs || (bu(), bK = new bv, bJ = new bw, b9 = new bx, bA = new by, aD = new bz, b6 = new c0, bE = new c1, bF = new c2, aE = new c3, aF = new c4, aG = new c5, aH = new c6, aI = new c7, aJ = new c8, aK = new c9, aL = new cA, aM = new cB, aN =
		new cC, aO = new cD, aP = new cE, aQ = new cF, aR = new cG, aS = new cH, aT = new cI, aU = new cJ, aV = new cK, aW = new cL, aX = new cM, aY = new cN, aZ = new cO, aa = new cP, ab = new cQ, ac = new cR, ak = new cS, al = new cT, am =
		new cU, ad = new cV, ae = new cW, ah = new cX, af = new cY, ag = new cZ, ai = new ca, ay = new cb, aj = new cc, ao = new cd, ap = new ce, aq = new cf, az = new cg, ax = new ch, an = new ci, ar = new cj, at = new ck, au = new cl, h =
		new cm, av = new cn, aw = new co, b0 = new cp, b1 = new cq, b2 = new cr, b3 = new cs, b4 = new ct, b5 = new cu, b7 = new cv, b8 = new cw, bB = new cx, bC = new a6, bD = new cy, bG = new cz, bH = new d0, bI = new d1, bL = new d2, bM =
		new d3, bN = new d4, bO = new d5, bP = new d6, bQ = new d7, bR = new d8, bS = new d9, t = new dA, bT = new dB, a0 = new dC, l = new dD, bh = new dE, bi = new dF, bf = new dG, bg = new dH, bZ = new dI, ba = new dJ, bU = new dK, bV =
		new dL, bc = new dM, bd = new dN, be = new dO, bj = new dP, bb = new dQ, o = new dR, bk = new dS, bl = new dT, bm = new dU, bo = new dV, bp = new dW, bq = new dX, l.dZ(), a0.dZ(), h.da(), bi.dZ(), b6.dZ(), b6.db(), (bW = new dc).dZ(), b9
		.dZ(), bU.dZ(), az.dZ(), bE.dZ(), bF.dZ(), bR.dZ(), t.dZ(), bX = new dd, h.dZ(), a0.a1.de(), be.dZ(), bb.dZ(), bV.dZ(), bY = new df, ax.dZ(), ae.dg(), bT.dZ(), ao.dZ(), aa.dZ(), aT.dZ(), ai.dZ(), bI.dZ(), ab.dZ(), be.dh = !0, setTimeout(
			function() {
				bR.a7(2, 14071)
			}, 0), t.u(5, 5), bH.di() || a0.a1.dj(), h.dk(), l.m = 1)
}

function dD() {
	this.dl = 1099, this.n = 2090, this.rVersion = 10, this.dm = 0, this.dZ = function() {
		this.dn = 2;
		var dp = bK.dq(this.n, 10) % 100;
		this.dr = "14 Jul 2025 [" + bK.dq(this.n, 1e3) + "." + (dp < 10 ? "0" : "") + dp + "." + this.n % 10 + "]", this.a9 = true, this.aA = function() {
			try {
				return window.self !== window.top
			} catch (e) {
				return !0
			}
		}(), this.dt = (new Date).getTime() % 1024
	}, this.m = 0
}

function du() {
	var dv = [L(0), L(1), L(2), L(3), L(4), L(5), L(6)],
		dw = [100, 60, 30, 15, 6, 1],
		dx = [
			[0, 0, 0, 0, 0],
			[0, 1, 1, 1, 1],
			[1, 2, 1, 1, 1],
			[1, 3, 2, 1, 2],
			[1, 4, 2, 2, 3],
			[1, 4, 3, 3, 4],
			[1, 5, 3, 3, 5]
		],
		dy = [" 👢 kicked ", " 🔇 muted ", " ✂️ redacted the username of ", " deducted x from ", " seized x from ", " 🚩 reported "],
		dz = ["👢", "🔇", "✂️", "Elo Deduction", "Gold Seizure", "🚩 Report"],
		e0 = [".", ". Duration: x", ". Duration: x", ".", ".", ". Reason: x"];
	this.e1 = [
		["", "", ""],
		["20 Seconds", "1 Minute", "5 Minutes", "1 Hour", "1 Day"],
		["1 Minute", "1 Hour", "1 Day"],
		["0.1 Elo Points", "0.2 Elo Points", "0.3 Elo Points"],
		["0.5 Gold", "1 Gold", "2 Gold", "5 Gold", "10 Gold"],
		["Bad Username", "Cheating or Exploiting", "Inappropriate Content", "Bullying or Harassment"]
	], this.e2 = function(id, e3, e4) {
		e3 = this.e5(e3);
		return +(dx[e3][id] > e4)
	}, this.e5 = function(e3) {
		for (var aB = 0; aB < dw.length; aB++)
			if (dw[aB] <= e3) return aB;
		return dw.length
	}, this.e6 = function(e3) {
		return dv[this.e5(e3)]
	}, this.e7 = function(id, e8) {
		return dy[id].replace(new RegExp("x", "g"), e8)
	}, this.e9 = function(id, e8) {
		return e0[id].replace(new RegExp("x", "g"), e8)
	}, this.eA = function(id, eB) {
		return dz[id] + (this.e1[id][eB].length ? " (" + this.e1[id][eB] + ")" : "")
	}
}

function dB() {
	this.eC = new eD, this.dZ = function() {
		a0.a1.eE()
	}, this.eF = function() {
		return bi.eG.data[160].value
	}
}

function eD() {
	var eH = 2e4;
	this.show = function() {
		if (be.eI < eH) return !1;
		eH = be.eI + 135e4, 2 === l.dn && a0.a1.eJ(Math.floor(135e4))
	}
}

function cU() {
	this.eK = new eL
}

function eL() {
	this.eM = function(eN) {
		var eQ;
		return bR.eO(bR.eP) && aD.data.passableMountains && (eQ = ac.eR(eN), this.eS(aD.eT, eQ) || this.eU(aD.eT, eQ)) && 0 !== (eQ = function(ep) {
			for (var eq = bL.er(ep), es = bL.et(ep), max = Math.max(bR.eu, bR.ev) - 2, ew = max * max, ex = !1, ey = 0, ez = 0; ez < max; ez++) {
				var f0, eV = function(eq, es, ez) {
					for (var aB = 0; aB <= ez; aB++)
						for (var f2 = -1; f2 < 2; f2 += 2)
							for (var f3 = -1; f3 < 2; f3 += 2)
								for (var f4 = 0; f4 < 2; f4++) {
									var eN = function(eq, es) {
										if (bL.f6(eq, es)) {
											eq = bL.f7(eq, es), es = bL.eZ(eq);
											if (ac.ee(es) && ac.f8(es)) return eq
										}
										return 0
									}(eq + f4 * f2 * aB + (1 - f4) * f3 * ez, es + f4 * f3 * ez + (1 - f4) * f2 * aB);
									if (eN) return eN
								}
					return 0
				}(eq, es, ez);
				eV && (f0 = bL.f1(eq, es, eV)) < ew && (ey = eV, ew = f0, ex || (ex = !0, max = Math.floor(Math.sqrt(f0)) + 1))
			}
			return ey
		}(bL.eX(eN))) && (eN = bL.eZ(eQ), ac.ea(eN) || (eN = ac.eb(eN)) !== aD.eT && ec(eN, aD.eT)) ? eQ : 0
	}, this.ed = function(player, eV) {
		eV = bL.eZ(eV);
		if (ac.ee(eV)) {
			if (ac.ea(eV)) bN.ef[0] = aD.eg;
			else if (ac.eb(eV) !== bN.ef[0]) return !1;
			for (var eh = function(eN) {
					var el = ac.el,
						eh = [];
					loop: for (var em = 3; 0 <= em; em--) {
						var en = eN + el[em];
						if (ac.eo(en)) {
							for (var id = ac.eR(en), aB = 0; aB < eh.length; aB++)
								if (id === eh[aB]) continue loop;
							bN.ek[eh.length] = en, eh.push(id)
						}
					}
					return eh
				}(eV), ej = eh.length, aB = 0; aB < ej; aB++)
				if (this.eS(player, eh[aB]) || this.eU(player, eh[aB])) return bN.ek[0] = bN.ek[aB], !0
		}
		return !1
	}, this.eS = function(player, eQ) {
		for (var f9 = ag.f9[player], ej = f9.length, fA = Math.max(bK.dq(ej, 12), 1), el = ac.el, aB = 0; aB < ej; aB += fA)
			for (var eY = f9[aB], em = 3; 0 <= em; em--) {
				var en = eY + el[em];
				if (ac.eo(en) && eQ === ac.eR(en)) return !0
			}
		return !1
	}, this.eU = function(player, eQ) {
		for (var f9 = ag.f9[player], ej = f9.length, el = ac.el, aB = 0; aB < ej; aB++)
			for (var eY = f9[aB], em = 3; 0 <= em; em--) {
				var en = eY + el[em];
				if (ac.eo(en) && eQ === ac.eR(en)) return !0
			}
		return !1
	}
}

function d4() {
	this.g = new Array(4), this.fD = new Uint16Array(2), this.fE = new Uint16Array(2), this.fF = new Int32Array(2), this.fG = new Uint32Array(2), this.fH = new Uint32Array(2), this.fI = new Uint8Array(4), this.fJ = new Uint8Array(4), this.ek =
		new Uint32Array(4), this.fK = new Uint32Array(5), this.ef = new Uint32Array(8), this.fL = new Uint32Array(8), this.fM = new Uint16Array(16), this.fN = new Uint16Array(512), this.fO = new Uint16Array(512), this.fP = new Uint16Array(512), this
		.fQ = new Uint16Array(0), this.dZ = function() {
			var ej = bR.eu * bR.ev;
			this.fQ.length !== ej && (this.fQ = new Uint16Array(ej))
		}, this.fR = function(g, fS) {
			return g[0] = fS, g
		}, this.fT = function(g, fS, fU) {
			return g[0] = fS, g[1] = fU, g
		}, this.fV = function(g, fS, fU, fW) {
			return g[0] = fS, g[1] = fU, g[2] = fW, g
		}, this.fX = function(g, fS, fU, fW, fY) {
			return g[0] = fS, g[1] = fU, g[2] = fW, g[3] = fY, g
		}
}

function fm() {
	ff = 0, fg = 2048, fh = new Uint32Array(4 * fg), fi = 0, fj = new Uint32Array(fg), fk = new Uint8Array(bR.eu * bR.ev)
}

function fn(player) {
	fa = player, fl = !1, fo(), fp();
	for (var aB = ad.fq(fa) - 1; 0 <= aB; aB--) fZ = aB, fr();
	fl && fs()
}

function fs() {
	ft(), fu()
}

function fr() {
	fe = ad.fv(fa, fZ), fb = ad.fw(fa, fZ), fc = ad.fx(fa, fZ), fy(), (0 !== ff && (g0(), g1()) ? g2 : fz)()
}

function g1() {
	if (!((fd = bK.dq(fb, ff)) > aD.g3)) {
		if (!fc) return !1;
		var g4 = ff * (1 + aD.g3);
		fb += b9.g5.g6(fa, g4 - fb), fd = bK.dq(fb, ff)
	}
	return !0
}

function g0() {
	for (var aB = ff - 1; 0 <= aB; aB--) fk[bK.dq(fh[aB], 4)] = 0
}

function fz() {
	1 === ad.fq(fa) && aF.g7(fa);
	var dp = b9.g5.g8(fa, fb);
	bc.g9(fa, fb - dp, 12), ad.gA(fa, fZ)
}

function fo() {
	for (var player = fa, gB = ag.gB, ej = Math.min(gB[player].length, fg), gC = 0, gD = fj, aB = ej - 1; 0 <= aB; aB--) gD[gC++] = gB[player][aB];
	fi = gC
}

function fp() {
	for (var aB = ag.gB[fa].length - 1; 0 <= aB; aB--) ac.ee(ag.gB[fa][aB]) && ac.gE(ag.gB[fa][aB], fa);
	ag.gB[fa] = []
}

function fy() {
	ff = 0, (fe === aD.eg ? gF : gG)()
}

function gG() {
	for (var gH, gI, aB, el = ac.el, em = 3; 0 <= em; em--)
		for (aB = fi - 1; 0 <= aB; aB--) gH = fj[aB] + el[em], gI = bK.dq(gH, 4), 0 === fk[gI] && ac.gJ(gH) && ac.eb(gH) === fe && (fk[gI] = 1, fh[ff++] = gH)
}

function gF() {
	for (var gH, gI, aB, el = ac.el, em = 3; 0 <= em; em--)
		for (aB = fi - 1; 0 <= aB; aB--) gH = fj[aB] + el[em], gI = bK.dq(gH, 4), 0 === fk[gI] && ac.ea(gH) && (fk[gI] = 1, fh[ff++] = gH)
}

function g2() {
	gK() ? (gL(), fe !== aD.eg && gM()) : fz()
}

function gM() {
	gN(), gO(ag.gP[fe]), gO(ag.gQ[fe]), bR.eO(bR.eP) && gO(ag.f9[fe]), gR(ag.gB[fe]), gS(ag.gQ[fe]), gS(ag.f9[fe]), gT(), gU()
}

function gL() {
	fl = !0, ad.gV(fa, fZ, fb), ad.gW(fa, fZ), ag.gX[fa] += ff, gY(), gZ()
}

function gK() {
	return (fe === aD.eg ? ga : gb)()
}

function gb() {
	var gc = ff * aD.g3,
		gd = ge(),
		gf = gg(),
		gd = gc + 2 * gd + gf,
		gi = fd * ff;
	return gd < gi ? (fb -= gd, bc.g9(fa, gd, 13), gj(gd - gc, gf), !0) : fc && 0 === gf ? (fb -= gi, gi += b9.g5.g6(fa, gd - gi + 1), bc.g9(fa, gi, 13), gj(gi - gc, 0), !0) : (fb -= gi, bc.g9(fa, gi, 13), gj(gi - gc, gf), !1)
}

function gj(gi, gf) {
	if (0 < gf) {
		if (gi <= gf) return bc.g9(fe, gi, 13), void ad.gk(fe, fa, gf - gi);
		ad.gk(fe, fa, 0), gi -= gf
	}
	gi = bK.dq(gi, 2), gi = Math.min(ag.gl[fe], gi), bc.g9(fe, gi, 13), ag.gl[fe] -= gi
}

function gg() {
	return ad.gm(fe, fa)
}

function ge() {
	return bK.dq(ff * ag.gl[fe], 1 + bK.dq(10 * ag.gX[fe], 16))
}

function ga() {
	var gn = ff * aD.g3;
	return fb -= gn, bc.g9(fa, gn, 13), !0
}

function gZ() {
	for (var aB = ff - 1; 0 <= aB; aB--) ag.gB[fa].push(fh[aB]), ag.gP[fa].push(fh[aB]), ac.gE(fh[aB], fa)
}

function d9() {
	var go = 0,
		gp = 0;
	this.gq = function(eq, es) {
		go = eq, gp = es
	}, this.gr = function(code) {
		var gy, h0, eV;
		aD.gs || aM.gt || (b9.g5.gu(0) || b9.g5.gu(1)) && b9.g5.gv(aD.eT) && (aR.gw(go, gp) ? aR.gx = !1 : aP.gw(go, gp) || (gy = bL.gz(go), h0 = bL.h1(gp), eV = bL.f7(gy, h0), bL.h2(gy, h0) && (0 === code ? function(eV) {
			var h6, eN, eY;
			aD.h7 ? -1 !== (h6 = bq.h8(eV)) && b7.h9.hA(eV) : (eN = bL.eZ(eV), ac.eo(eN) ? (h6 = am.eK.eM(eN)) && (eY = bL.eZ(h6), eY = ac.ea(eY) ? aD.eg : ac.eb(eY), b7.h9.hC(aR.hD(), h6, eY)) : (h6 = bq.hE(eV)) < 0 || (eN = bL
				.eZ(h6), ac.ea(eN) ? hF(aD.eT) ? b7.h9.hG(aR.hD(), aD.eg) : hH(aD.eT, aD.eg) && b0.hI(aD.eg, aR.hD()) : ec(eY = ac.eb(eN), aD.eT) && (hJ(aD.eT, eY) ? b7.h9.hG(aR.hD(), eY) : hH(aD.eT, eY) && b0.hI(eY, aR
					.hD()))))
		}(eV) : 1 === code ? function(eV) {
			bM.hK.hL(aD.eT, eV) && b7.h9.hM(aR.hD(), bN.fL[7])
		}(eV) : 2 === code && function(eV) {
			bM.hN.hO(aD.eT, eV) && b7.h9.hP(aR.hD())
		}(eV))))
	}, this.hQ = function() {
		if (!aD.gs && !aM.gt && b9.g5.gu(1)) {
			var gH = aD.eT;
			if (b9.g5.gv(gH)) {
				var ej = ad.fq(gH);
				if (ej < 1) ! function() {
					var gH = aD.eT;
					if (hF(gH)) b7.h9.hG(aR.hD(), aD.eg);
					else
						for (var el = ac.el, gP = ag.gP, ej = gP[gH].length, ha = Math.floor(Math.random() * ej), aB = 0; aB < ej; aB++)
							for (var hb = 3; 0 <= hb; hb--) {
								var hc = gP[gH][(aB + ha) % ej] + el[hb];
								if (ac.gJ(hc)) {
									hc = ac.eb(hc);
									if (hc !== gH && (!aD.he || ec(gH, hc))) return b7.h9.hG(aR.hD(), hc)
								}
							}
				}();
				else {
					for (var hS = 0, hT = ad.fw(gH, 0), aB = 1; aB < ej; aB++) {
						var hU = ad.fw(gH, aB);
						hU < hT && (hT = hU, hS = aB)
					}
					b7.h9.hG(aR.hD(), ad.fv(gH, hS))
				}
			}
		}
	}, this.hV = function() {
		if (!aD.gs && !aM.gt && b9.g5.gv(aD.eT) && b9.g5.gu(1)) return av.hW ? av.hX(aD.eT) ? void b7.h9.hY(1) : void 0 : void(av.hZ(aD.eT) && b7.h9.hV())
	}
}

function hf(hg, size, hh, hi, font) {
	var aB, hl = .2,
		canvas = document.createElement("canvas"),
		hm = canvas.getContext("2d", {
			alpha: !1
		});
	for (canvas.width = hg, canvas.height = hg, hm.font = size + font, hm.textAlign = "center", hm.textBaseline = "middle", hm.fillStyle = "red", aB = 0; aB < hh.length; aB++) hm.fillText(hh[aB], .5 * hg, .5 * hg);
	return -1 < (canvas = function(hj) {
		var aB, e3, em = hj.data;
		for (aB = em.length - 4; 0 <= aB; aB -= 4)
			if (e3 = em[aB], hi <= e3) return Math.floor(aB / (4 * hg));
		return -1
	}(hm.getImageData(0, 0, hg, hg))) && (hl = (canvas - .5 * hg + .1 * size) / size), Math.max(hl, 0)
}

function d2() {
	this.ho = new Int16Array(4), this.hp = new Int16Array(4), this.hq = null, this.dZ = function() {
		var aB;
		for (this.ho[0] = -bR.eu, this.ho[1] = 1, this.ho[2] = bR.eu, this.ho[3] = -1, this.hq = new Int16Array([-bR.eu, 1 - bR.eu, 1, bR.eu + 1, bR.eu, bR.eu - 1, -1, -bR.eu - 1]), aB = 0; aB < 4; aB++) this.hp[aB] = 4 * this.ho[aB]
	}, this.hr = function() {
		return bK.hs(Math.floor(.15 * (1 + .25 * a0.a1.ht()) * h.hu / hv), 4, 128)
	}, this.hw = function(eN, id) {
		for (var hx = this.hp, aB = 0; aB < 4; aB++) {
			var eY = eN + hx[aB];
			if (ac.hy(eY) && ac.eR(eY) === id) return !0
		}
		return !1
	}, this.hz = function(player, eN) {
		return !ac.ea(eN) && player === ac.eb(eN)
	}, this.f1 = function(gy, h0, eV) {
		return (gy -= this.er(eV)) * gy + (h0 -= this.et(eV)) * h0
	}, this.i0 = function(i1, i2, i3) {
		i1 = this.i5(i1) - this.i6(i3), i2 = this.i8(i2) - this.i9(i3);
		return Math.sqrt(i1 * i1 + i2 * i2)
	}, this.iA = function(iB, iC) {
		var i4 = this.er(iB) - this.er(iC),
			iB = this.et(iB) - this.et(iC);
		return ~~Math.sqrt(i4 * i4 + iB * iB + .5)
	}, this.iD = function(iB, iC) {
		var i4 = this.er(iB) - this.er(iC),
			iB = this.et(iB) - this.et(iC);
		return i4 * i4 + iB * iB
	}, this.iE = function(iF, iG, iH, iI) {
		return (iF -= iH) * iF + (iG -= iI) * iG
	}, this.iJ = function(gH, iK) {
		return bK.dq(iK * ag.gl[gH], 1e3)
	}, this.i5 = function(i1) {
		return 16 * (i1 + iL) / hv
	}, this.i8 = function(i2) {
		return 16 * (i2 + iM) / hv
	}, this.iN = function(em) {
		return 16 * em / hv
	}, this.gz = function(i1) {
		return Math.floor((i1 + iL) / hv)
	}, this.h1 = function(i2) {
		return Math.floor((i2 + iM) / hv)
	}, this.h2 = function(gy, h0) {
		return 1 <= gy && 1 <= h0 && gy < bR.eu - 1 && h0 < bR.ev - 1
	}, this.er = function(eV) {
		return eV % bR.eu
	}, this.et = function(eV) {
		return bK.dq(eV, bR.eu)
	}, this.f7 = function(gy, h0) {
		return h0 * bR.eu + gy
	}, this.iO = function(gy, h0) {
		return 4 * this.f7(gy, h0)
	}, this.iP = function(eV) {
		return this.f6(this.er(eV), this.et(eV))
	}, this.f6 = function(gy, h0) {
		return 0 < gy && gy < bR.eu - 1 && 0 < h0 && h0 < bR.ev - 1
	}, this.eZ = function(eV) {
		return eV << 2
	}, this.eX = function(eN) {
		return eN >> 2
	}, this.iQ = function(eV) {
		return bR.eu * this.et(eV) * 256 + (this.er(eV) << 4)
	}, this.iR = function(eV) {
		return this.iQ(eV) + 8 + (bR.eu << 7)
	}, this.iS = function(i3) {
		return bR.eu * (this.i9(i3) >> 4) + (this.i6(i3) >> 4)
	}, this.iT = function(i3) {
		i3 = this.iS(i3);
		return (this.er(i3) >> 5) + bM.iU.iV * (this.et(i3) >> 5)
	}, this.i6 = function(i3) {
		return i3 % (bR.eu << 4)
	}, this.i9 = function(i3) {
		return bK.dq(i3, bR.eu << 4)
	}, this.iW = function(eV, hb) {
		return eV + this.ho[hb]
	}, this.iX = function(eN, hb) {
		return eN + this.hp[hb]
	}, this.iY = function(iB, iC) {
		var i4 = this.er(iC) - this.er(iB),
			iC = this.et(iC) - this.et(iB);
		return Math.abs(i4) >= Math.abs(iC) ? 1 + 2 * (i4 < 0) : 2 * (0 < iC)
	}, this.iZ = function(player) {
		return this.f7(ag.ia[player] + ag.ib[player] >> 1, ag.ic[player] + ag.ie[player] >> 1)
	}, this.ig = function(player) {
		return this.f7(ax.ih(ag.ia[player], ag.ib[player]), ax.ih(ag.ic[player], ag.ie[player]))
	}
}

function ci() {
	this.ii = new ij, this.ik = new il, this.im = new io, this.performance = new ip, this.iq = new ir, this.is = new it, this.iu = new iv, this.iw = new ix, this.iy = new iz, this.dZ = function() {
		this.ii.dZ(), this.im.dZ(), this.performance.dZ(), this.iq.dZ(), this.is.dZ()
	}, this.j0 = function() {
		this.performance.j0(), this.ii.j0(), this.im.j1()
	}
}

function ir() {
	var j2, j4 = new Uint16Array(8);

	function jD(size, player) {
		for (var aB = ag.gB[player].length - 1; size <= aB; aB--) ac.jK(ag.gB[player][aB], player)
	}
	this.dZ = function() {
		j2 = 0
	}, this.j5 = function(player, j6) {
		return bN.ef[1] = ag.gB[player].length, bN.ef[0] === aD.eg ? an.iq.j7(player) : this.j8(player, bN.ef[0]), (0 !== bN.ef[1] || 0 !== ag.gB[player].length) && !(!j6 && bN.ef[1] === ag.gB[player].length || (bN.ef[0] === aD.eg ? ag.j9[
			player]++ : ag.jA[player]++, 0))
	}, this.jB = function(player) {
		aD.he && (an.is.jC[player] = 1), jD(bN.ef[1], player), ad.jE(player, bN.fG[0], bN.ef[0]), aF.jF(player, !1)
	}, this.jG = function(player, jH, ej, hT) {
		var jI = bK.dq(12 * ag.gl[player], 1024);
		hT -= hT >= bK.dq(ag.gl[player], 2) ? jI : 0, jD(ej, player), ad.jE(player, hT, jH), ag.gl[player] -= hT + jI, aF.jF(player, !1)
	}, this.j8 = function(player, jH) {
		for (var hb, el = ac.el, aB = ag.gP[player].length - 1; 0 <= aB; aB--)
			if (ac.jJ(ag.gP[player][aB]))
				for (hb = 3; 0 <= hb; hb--)
					if (ac.gJ(ag.gP[player][aB] + el[hb]) && ac.eb(ag.gP[player][aB] + el[hb]) === jH) {
						ag.gB[player].push(ag.gP[player][aB]);
						break
					}
	}, this.j7 = function(player) {
		for (var el = ac.el, aB = ag.gP[player].length - 1; 0 <= aB; aB--)
			if (ac.jJ(ag.gP[player][aB]))
				for (var hb = 3; 0 <= hb; hb--)
					if (ac.ea(ag.gP[player][aB] + el[hb])) {
						ag.gB[player].push(ag.gP[player][aB]);
						break
					}
	}, this.jL = function(player, jM) {
		var aB, f2, hb, hd, ej = ag.gP[player].length,
			jN = 256 <= ej ? 12 : 32 <= ej ? 6 : 1,
			jO = ej - 1 - ax.jP(jN),
			el = ac.el;
		j2 = 0;
		loop: for (aB = jO; 0 <= aB; aB -= jN)
			for (hb = 3; 0 <= hb; hb--)
				if ((hd = ac.ea(ag.gP[player][aB] + el[hb]) ? aD.eg : ac.eb(ag.gP[player][aB] + el[hb])) === aD.eg || ac.gJ(ag.gP[player][aB] + el[hb]) && hd !== player && (jM || ec(player, hd))) {
					for (f2 = j2 - 1; 0 <= f2; f2--)
						if (j4[f2] === hd) continue loop;
					if (j4[j2] = hd, 8 <= ++j2) return !0
				}
		return 0 < j2
	}, this.jQ = function(player, jM) {
		var aB, hb, hd, el = ac.el;
		for (j2 = 0, aB = ag.gP[player].length - 1; 0 <= aB; aB--)
			for (hb = 3; 0 <= hb; hb--)
				if ((hd = ac.ea(ag.gP[player][aB] + el[hb]) ? aD.eg : ac.eb(ag.gP[player][aB] + el[hb])) === aD.eg || ac.gJ(ag.gP[player][aB] + el[hb]) && hd !== player && (jM || ec(player, hd))) return j4[j2++] = hd, !0;
		return !1
	}, this.jR = function() {
		for (var f3, aB = j2 - 1; 0 <= aB; aB--)
			if (j4[aB] === aD.eg) {
				for (j2--, f3 = aB; f3 < j2; f3++) j4[f3] = j4[f3 + 1];
				return !0
			} return !1
	}, this.jS = function(player) {
		for (var f3, aB = j2 - 1; 0 <= aB; aB--)
			if (ad.jT(player, j4[aB]))
				for (j2--, f3 = aB; f3 < j2; f3++) j4[f3] = j4[f3 + 1];
		return 0 === j2
	}, this.jU = function() {
		for (var aB = j2 - 1; 0 <= aB; aB--)
			if (b9.g5.jV(j4[aB])) return !0;
		return !1
	}, this.jW = function() {
		for (var aB = j2 - 1; 0 <= aB; aB--) b9.g5.jV(j4[aB]) || (j4[aB] = j4[--j2]);
		return 0 < j2
	}, this.jX = function(player) {
		for (var f3, jY = j4[0], jZ = ag.gl[jY] + ad.gm(jY, player), aB = j2 - 1; 1 <= aB; aB--)(f3 = ag.gl[j4[aB]] + ad.gm(j4[aB], player)) < jZ && (jY = j4[aB], jZ = f3);
		return jY
	}, this.ja = function(player) {
		var j, jb = j4[0];
		if (1 !== j2)
			for (var jc = bK.dq(ag.ib[player] + ag.ia[player], 2), jd = bK.dq(ag.ie[player] + ag.ic[player], 2), ez = je(jc - bK.dq(ag.ib[jb] + ag.ia[jb], 2)) + je(jd - bK.dq(ag.ie[jb] + ag.ic[jb], 2)), aB = j2 - 1; 1 <= aB; aB--)(j = je(jc - bK
				.dq(ag.ib[j4[aB]] + ag.ia[j4[aB]], 2)) + je(jd - bK.dq(ag.ie[j4[aB]] + ag.ic[j4[aB]], 2))) < ez && (ez = j, jb = j4[aB]);
		return jb
	}, this.jf = function() {
		for (var jg = j4, jh = jg[0], gl = ag.gl, ji = gl[jh], aB = j2 - 1; 1 <= aB; aB--) {
			var gH = jg[aB],
				f3 = gl[gH];
			ji < f3 && (jh = gH, ji = f3)
		}
		return jh
	}, this.jj = function() {
		return j4[ax.jP(j2)]
	}
}

function it() {
	function jy(player, jH, jo) {
		3 <= jo && 2142 < be.k4() && (jH === aD.eg || ag.gl[jH] < bK.dq(ag.gl[player], 20)) && aE.jt(player, 20)
	}

	function k1(player, hT, jH, jo) {
		3 <= jo && jo < 6 && bK.dq(ag.gl[player], 8) > ag.gl[jH] && (hT = Math.max(bK.dq(11 * ag.gl[jH], 5), bK.dq(ag.gl[player], 10)));
		jo = ag.gB[player].length;
		an.iq.j8(player, jH), an.iq.jG(player, jH, jo, hT)
	}

	function jx(player, hT) {
		var jH = aD.eg,
			ej = ag.gB[player].length;
		an.iq.j7(player), ag.gB[player].length !== ej && an.iq.jG(player, jH, ej, hT)
	}
	this.jC = new Uint8Array(aD.eg), this.dZ = function() {
		this.jC.fill(0)
	}, this.jk = function(player, hT) {
		var jm, jo, jp, jq;
		ad.jl(player) && (jm = ae.jn(player), 3 <= (jo = aE.hT[player]) && jo < 6 && (hT = Math.max(ag.gl[player] - jm, hT)), jp = ag.gQ[player].length, jq = ag.gP[player].length, 30 * ag.gX[player] > aD.jr && js[player] < 10 && 100 * jq <= jp &&
			aE.jt(player, 10), aD.he ? function(player, hT, jo, jm) {
				var jH;
				if (an.is.jC[player] = 1, an.iq.jL(player, !1) || an.iq.jQ(player, !1)) {
					if (!an.iq.jS(player))
						if (an.iq.jR()) jx(player, hT), jy(player, aD.eg, jo);
						else {
							if (ax.jz(aE.k0[jo])) jH = an.iq.jX(player);
							else {
								if (an.iq.jU() && ax.jz(aE.k2[jo]) && an.iq.jW(), 6 === jo) return k1(player, hT, an.iq.jj(), jo);
								jH = an.iq.ja(player)
							}
							k1(player, hT, jH, jo), jy(player, jH, jo)
						}
				} else bM.jv.j0(player) || an.iu.j0(player) || (an.is.jC[player] = 0, function(player, hT, jo, jm) {
					var aB, f3, f4, eh = bf.eh,
						k5 = eh[player];
					if (0 !== k5) {
						var k6 = ag.gl[player],
							gX = ag.gX;
						if (player < aD.k7 && (hT = k6), !(k6 < gX[player] || 5 === jo && k6 < jm || 4 === jo && k6 < bK.dq(jm, 2))) {
							var ej = al.k8,
								k9 = al.k9,
								jC = (aB = ax.jP(ej), an.is.jC);
							for (f3 = 0; f3 < ej; f3++)
								if (f4 = k9[(f3 + aB) % ej], 1 === jC[f4] && eh[f4] === k5) return b7.kA.kB(player, f4, hT)
						}
					}
				}(player, hT, jo, jm))
			}(player, hT, jo, jm) : (!jq || jp && (jp < jq && !ax.jP(10) || 100 * jq <= jp && ax.jP(3) || !ax.jP(8))) && bM.jv.j0(player) || function(player, hT, jo) {
				an.iq.jL(player, !0) || an.iq.jQ(player, !0) ? an.iq.jS(player) || (an.iq.jR() ? jx(player, hT) : ax.jz(aE.k0[jo]) ? k1(player, hT, an.iq.jX(player), jo) : 5 === jo ? k1(player, hT, an.iq.jf(), jo) : (an.iq.jU() && ax.jz(aE
					.k2[jo]) && an.iq.jW(), k1(player, hT, 6 === jo ? an.iq.jj() : an.iq.ja(player), jo))) : an.iu.j0(player)
			}(player, hT, jo))
	}
}

function c3() {
	var kC = new Uint8Array(aD.eg),
		kD = new Uint16Array(aD.eg),
		kE = new Uint16Array(aD.eg),
		kF = new Uint8Array(aD.eg),
		kG = (this.hT = new Uint8Array(aD.eg), new Uint16Array(aD.eg)),
		kH = new Uint16Array(aD.eg);

	function kW(aB) {
		kC[aB] = 1 + bK.dq(kG[aB] * ax.random(), 10 * ax.value(100))
	}
	this.kI = null, this.k2 = [97, 94, 70, 40, 20, 0, 100], this.kJ = [500, 450, 400, 300, 80, 50, 100], this.k0 = [0, 0, 5, 25, 50, 100, 0], this.kK = [60, 74, 112, 200, 256, 512, 512], this.kL = [1, 2, 3, 4, 6, 8, 1], this.kM = [500, 450, 400, 300,
		80, 50, 100
	], this.kN = [100, 150, 250, 400, 600, 1e3, 100], this.da = function() {
		this.kI = [L(7), L(8), L(9), L(10), L(11), L(12), "H Bot"]
	}, this.dZ = function() {
		kC.fill(0), kD.fill(0), kE.fill(0), kF.fill(0), this.hT.fill(0), kG.fill(0), kH.fill(0);
		var kO = aD.k7;
		if (9 === aD.kP) this.kQ();
		else if (aD.kR)
			if (3 === aD.data.botDifficultyType)
				for (aB = aD.kT - 1; 0 <= aB; aB--) {
					var hc = aB + kO;
					this.hT[hc] = aD.data.botDifficultyData[hc]
				} else if (2 === aD.data.botDifficultyType)
					for (aB = aD.kT - 1; 0 <= aB; aB--) this.hT[hc = aB + kO] = aD.data.botDifficultyTeam[bf.kU[bf.eh[hc]]];
				else if (1 === aD.data.botDifficultyType) {
			var kV = this.kI.length;
			for (aB = aD.kT - 1; 0 <= aB; aB--) this.hT[aB + kO] = aB % kV
		} else
			for (kV = aD.data.botDifficultyValue, aB = aD.kT - 1; 0 <= aB; aB--) this.hT[aB + kO] = kV;
		else
			for (var kS = 8 === aD.kP ? 1 : 0, aB = aD.kT - 1; 0 <= aB; aB--) this.hT[aB + kO] = kS;
		for (aB = 0; aB < kO; aB++) this.hT[aB] = 6;
		var ej = aD.eg;
		for (aB = 0; aB < ej; aB++) this.hT[aB] <= 2 ? (kF[aB] = 5, kG[aB] = kH[aB] = 1040, 0 === this.hT[aB] ? (kD[aB] = 980, kE[aB] = 980) : 1 === this.hT[aB] ? (kD[aB] = 980, kE[aB] = 920, kG[aB] = kH[aB] = 1100) : (kD[aB] = 825, kE[aB] =
			750)) : this.hT[aB] <= 4 ? (kF[aB] = 1 + ax.jP(20), 3 === this.hT[aB] ? (kD[aB] = kE[aB] = 500, kG[aB] = kH[aB] = 1e3) : (kH[aB] = 250 + ax.jP(1501), kG[aB] = 500 + ax.jP(501), kD[aB] = 300 + ax.jP(201), kE[aB] = 100 + ax.jP(
			201))) : this.hT[aB] <= 5 ? (kG[aB] = 1e3, kH[aB] = 1e3, kF[aB] = 35 + ax.jP(16), kD[aB] = 300 + ax.jP(201), kE[aB] = 50 + ax.jP(101)) : (kG[aB] = kH[aB] = 800, kF[aB] = 5, kD[aB] = 10, kE[aB] = 250), kW(aB)
	}, this.kQ = function() {
		for (var eN = ay.kX, kO = aD.k7, aB = eN - 1; 0 <= aB; aB--) this.hT[aB + kO] = 0;
		for (var f3 = 0; f3 < 6; f3++) {
			for (aB = eN + ay.kY[f3] - 1; eN <= aB; aB--) this.hT[aB + kO] = f3;
			eN += ay.kY[f3]
		}
	}, this.jt = function(gH, value) {
		kC[gH] = Math.min(value, kC[gH])
	}, this.j0 = function(gH) {
		0 == --kC[gH] && ! function(gH) {
			(function(gH) {
				kG[gH] !== kH[gH] && (kG[gH] += kG[gH] < kH[gH] ? 3 : -3);
				kD[gH] !== kE[gH] && (kD[gH] += kD[gH] < kE[gH] ? kF[gH] : -kF[gH], kD[gH] = (Math.abs(kD[gH] - kE[gH]) <= kF[gH] ? kE : kD)[gH]);
				kC[gH] = bK.dq(kG[gH], 10)
			})(gH), an.is.jk(gH, bK.dq(kD[gH] * ag.gl[gH], 1e3))
		}(gH)
	}, this.kb = function(gH, gC) {
		kG[gH] = kH[gH] = gC
	}
}

function io() {
	var kc = new Uint16Array(aD.eg);

	function kp(player, kn) {
		for (var ej = bN.fE[0], fM = bN.fM, l1 = -1, l2 = aD.eg, aB = 0; aB < ej; aB++) {
			var ez, gH = fM[aB];
			ec(player, gH) && (ez = bL.iD(kn, bL.iZ(gH)), -1 === l1 || ez < l1) && (l1 = ez, l2 = gH)
		}
		return l2
	}

	function kr(ko, kn) {
		if (ko === aD.eg) return 0;
		var gQ = ag.gQ[ko],
			l0 = gQ.length;
		if (0 === l0) return 0;
		for (var ej = Math.min(l0, 10), l2 = 0, l1 = bL.iD(gQ[l2] >> 2, kn), aB = 0; aB < ej; aB++) {
			var hc = ax.jP(l0),
				ez = bL.iD(gQ[hc] >> 2, kn);
			ez < l1 && (l1 = ez, l2 = hc)
		}
		return gQ[l2] >> 2
	}

	function kw(player, kn, jH, l4) {
		var l5;
		(l4 === aD.eg || (l5 = bL.iZ(jH), l4 = bL.iZ(l4), bL.iD(kn, l5) < bL.iD(kn, l4))) && (kc[player] = jH)
	}
	this.dZ = function() {
		kc.fill(aD.eg)
	}, this.j1 = function() {
		if (be.k4() % 109 == 9 && !(al.k8 < 20) && aD.he && !(bg.kd() < bK.dq(8 * aD.jr, 10))) {
			var ke = bg.kf();
			if (bf.kU[ke]) {
				bg.kg(ke);
				var ej = bN.fE[0];
				if (0 !== ej)
					for (var g = bN.fN, k9 = al.k9, k8 = al.k8, kh = kc, hc = ax.jP(ej), aB = 0; aB < k8; aB++) {
						var hB = k9[aB],
							ki = g[hc];
						b9.g5.kj(hB, ki) && 512 === kh[hB] && (kh[hB] = ki, hc = (hc + 1) % ej)
					}
			}
		}
	}, this.j0 = function(player) {
		var kn, kq, ko, kk = function(player) {
			var jH = kc[player];
			if (jH !== aD.eg) {
				if (b9.g5.l3(jH) && ag.gQ[jH]) return jH;
				kc[player] = aD.eg
			}
			return aD.eg
		}(player);
		return function(player) {
			for (var kz = al.k9, l0 = al.k8, ej = Math.min(l0, l0 < 17 && 5 === ax.jP(20) ? 1 : 16), gI = ax.jP(l0), fM = bN.fM, gQ = ag.gQ, gC = 0, aB = 0; aB < ej; aB++) {
				var gH = kz[(aB + gI) % l0];
				gH !== player && gQ[gH].length && (fM[gC++] = gH)
			}
			bN.fE[0] = gC
		}(player), 0 !== bN.fE[0] && (0 < (kq = kr(ko = kp(player, kn = bL.ig(player)), kn)) && bM.ks.kt(player, bM.ku.kv(kq, kn)) ? (kw(player, kn, ko, kk), !0) : 0 < (ko = function(player, kn) {
			for (var ej = bN.fE[0], fM = bN.fM, kh = kc, gI = 0, aB = 0; aB < ej; aB++) {
				var gH = fM[aB],
					gH = kh[gH];
				gH !== aD.eg && b9.g5.l3(gH) && player !== gH && ec(player, gH) && (fM[gI++] = gH)
			}
			return 0 !== (bN.fE[0] = gI) ? kr(kp(player, kn), kn) : 0
		}(player, kn)) && bM.ks.kt(player, bM.ku.kv(ko, kn)) ? (kw(player, kn, ac.eb(ko << 2), kk), !0) : !!(0 < (kq = kr(kk, kn)) && bM.ks.kt(player, bM.ku.kv(kq, kn))))
	}
}

function iv() {
	function l9(player) {
		for (var f9 = ag.f9[player], ej = f9.length, fA = Math.max(bK.dq(ej, 12), 1), el = ac.el, e3 = ax.jP(ej), aB = 0; aB < ej; aB += fA)
			for (var eY = f9[(aB + e3) % ej], em = 3; 0 <= em; em--) {
				var en = eY + el[em];
				if (ac.eo(en)) return {
					eN: en,
					id: ac.eR(en),
					gH: player
				}
			}
		return null
	}

	function lE(player, lG) {
		var hT = b9.g5.lH(player, aE.kM[aE.hT[player]]);
		ag.gB[player].push(lG.eN), ad.jE(player, hT, lG.gH), aF.jF(player, !0)
	}
	this.j0 = function(player) {
		return !!bR.eO(bR.eP) && !!aD.data.passableMountains && 0 !== ag.f9[player].length && function(player) {
			var l8 = l9(player);
			if (null === l8) return !1;
			! function(player) {
				for (var k9 = al.k9, k8 = al.k8, ej = Math.min(k8, 12), gI = ax.jP(k8), fM = bN.fM, f9 = ag.f9, gC = 0, aB = 0; aB < ej; aB++) {
					var gH = k9[(aB + gI) % k8];
					gH !== player && f9[gH].length && ec(player, gH) && (fM[gC++] = gH)
				}
				bN.fE[0] = gC
			}(player);
			var lB = function(eQ) {
				for (var ej = bN.fE[0], fM = bN.fM, aB = 0; aB < ej; aB++) {
					var lG = l9(fM[aB]);
					if (null !== lG && lG.id === eQ) return lG
				}
				return null
			}(l8.id);
			return null !== lB ? (lE(player, lB), !0) : function(player, eQ) {
				var ej = an.ii.lF;
				if (0 !== ej)
					for (var eN = an.ii.eG[ax.jP(ej)] << 2, el = ac.el, em = ax.jP(4);;) {
						if (eN += el[em], ac.eo(eN)) {
							if (ac.eR(eN) === eQ) return lE(player, {
								eN: eN,
								gH: aD.eg
							}), !0;
							break
						}
						if (!ac.ea(eN)) break
					}
				return !1
			}(player, l8.id)
		}(player)
	}
}

function il() {
	this.j0 = function(player) {
		return bM.ks.kt(player, function(player) {
			var ej = an.ii.lF;
			if (0 === ej) return -1;
			for (var l0 = Math.min(ej, an.performance.lJ ? ej : 10), eG = an.ii.eG, jO = bK.dq(ax.random() * ej, ax.value(100)), e = jO + l0, lK = ax.ih(ag.ia[player], ag.ib[player]), lL = ax.ih(ag.ic[player], ag.ie[player]), l2 = -1,
					ez = bL.iE(0, 0, bR.eu, bR.ev), aB = jO; aB < e; aB++) {
				var gI = aB % ej,
					lM = bL.f1(lK, lL, eG[gI]);
				lM < ez && (ez = lM, l2 = gI)
			}
			return -1 !== l2 ? function(eV, lK, lL) {
				var gy = bL.er(eV),
					h0 = bL.et(eV),
					i4 = lK - gy,
					i7 = lL - h0;
				Math.abs(i4) >= Math.abs(i7) ? (i7 = 0, i4 = Math.sign(i4)) : (i4 = 0, i7 = Math.sign(i7));
				i4 === i7 && (i4 = 1);
				for (;;) {
					if (gy += i4, h0 += i7, !bL.f6(gy, h0)) break;
					if (eV = bL.f7(gy, h0), ac.hy(bL.eZ(eV))) return eV
				}
				return -1
			}(eG[l2], lK, lL) : -1
		}(player))
	}
}

function ix() {
	this.j0 = function(player) {
		player = function(player) {
			for (var lQ = bM.lQ.lR(), ej = lQ.length, l0 = Math.min(ej, 32), hc = ax.jP(ej), aB = 0; aB < l0; aB++) {
				var lO = (aB + hc) % ej,
					lS = lQ[lO],
					iB = lS[0],
					iC = lS[lS.length - 1];
				if (bM.ku.lT(player, iB) && bM.ku.lU(player, iC)) return lO;
				if (bM.ku.lT(player, iC) && bM.ku.lU(player, iB)) return 0 <= (lO = bM.lQ.lV(iC, iB)) ? lO : bM.lQ.lW() ? -1 : bM.lQ.lX(bM.lQ.lY(lS))
			}
			return -1
		}(player);
		return -1 !== player && (bN.g[0] = bM.lQ.get(player), !0)
	}
}

function ip() {
	this.lJ = 0, this.dZ = function() {
		this.lJ = 0
	}, this.j0 = function() {
		if (!this.lJ && be.k4() % 30 == 7 && b9.g5.lb(80) && (an.performance.lJ = 1)) {
			if (aD.he) {
				var ke = bg.kf();
				if (bf.kU[ke]) {
					bg.le(ke);
					var g = bN.fN,
						ej = bN.fE[0];
					if (0 !== ej)
						for (var lf = Math.min(100 + 10 * (ej - 1), 400), aB = 0; aB < ej; aB++) aE.kb(g[aB], lf)
				}
			}
			aE.kb(lg[0], 100)
		}
	}
}

function ij() {
	var lh = 0,
		li = 0,
		lj = 300,
		lk = 300,
		ll = 0;
	this.lF = 0, this.eG = new Uint32Array(512), this.dZ = function() {
		li = lh = 0, this.lF = 0, ll = 0
	}, this.j0 = function() {
		if (function() {
				var ej = an.ii.lF;
				if (0 === ej) return 1;
				var eG = an.ii.eG;
				if (be.k4() % 35 == 6) {
					for (var aB = ej - 1; 0 <= aB; aB--) ac.ea(eG[aB] << 2) || (ej--, eG[aB] = eG[ej]);
					an.ii.lF = ej
				}
				return ej < eG.length
			}())
			if (lj <= lh) {
				var lp = an.ii.lF;
				if (lp) {
					if (be.k4() % 350 != 1) return;
					if (ll !== lp) return void(ll = lp);
					if (!b9.g5.jV(lg[0])) return
				} else if (be.k4() % 12 != 8) return;
				b9.g5.lq() || an.ii.dZ()
			} else {
				var aB, i = bR.eu,
					lr = i - 2,
					lp = lr * (bR.ev - 2),
					ls = lj,
					eG = an.ii.eG,
					l0 = an.ii.lF,
					lt = eG.length,
					gI = Math.min(li + ls * ((1 + 19 * an.performance.lJ) * lk), lp);
				for (aB = li; aB < gI; aB += ls) {
					var eN = 4 * (aB % lr + (bK.dq(aB, lr) + 1) * i + 1);
					if (ac.ea(eN) && (eG[l0] = eN >> 2, ++l0 === lt)) {
						aB += ls;
						break
					}
				}(li = aB) >= lp && (li = ++lh), an.ii.lF = l0
			}
	}
}

function iz() {
	this.j0 = function() {
		if (be.k4() % 51 == 45)
			for (var ej = bM.y.lv, lw = bM.y.lw, lx = bM.y.lx, ly = bM.y.ly, lz = bM.y.lz, kN = aE.kN, hT = aE.hT, aB = 0; aB < ej; aB++) {
				var lS, player, m3, m0 = lw[aB];
				m0 % 64 == 6 || (lS = lx[aB], (player = bM.ku.m1(lS[lS.length - 1])) < 0) || !b9.g5.kj(player, lz[aB] >> 3) || ax.jP(1e3) >= kN[hT[player]] || ! function(m7, lS) {
					for (var ej = lS.length - 1, m8 = bM.y.m9[m7], ez = 0, aB = m8 + 1; aB < ej; aB++) ez += bL.iA(lS[aB], lS[aB + 1]);
					return (ez += bL.iA(bL.iS(bM.y.mA[m7]), lS[m8 + 1])) <= 60
				}(aB, lS) || (m3 = ly[aB], 64 <= m0 && bM.m4.m5(player, m3)) || function(player, lS, m3, m7, m0) {
					bM.mB.mC(player) && b9.g5.mD(player, aE.kJ[aE.hT[player]], 32, 0) && (bM.y.lw[m7] = 64 + m0 % 64, bM.m4.jE(m3, bM.y.mE), bN.g[0] = bM.lQ.lY(lS), bN.fL[1] = 6, b9.g5.mF(player), bM.y.mG(player))
				}(player, lS, m3, aB, m0)
			}
	}
}

function mH() {
	aN.j0(), af.j0(), aW.mI(), az.y.j0()
}

function mJ() {
	b0.j0(), aG.j0(), ae.j0(), b3.j0(), aF.j0(), an.j0(), bM.y.j0(), al.mK(), aV.j0(), ay.j0(), bU.j0(), af.j0(), af.mL(), aW.j0(), bO.j0(), aU.j0(), aP.j0(), aN.j0(), b4.j0(), aR.j0(), av.j0(), bc.j0(), bg.j0(), az.y.j0(), az.mM.j0(), t.j0(), b8
	.j0(), be.j0()
}

function mN() {
	aH.j0(), aX.j0(), aQ.j0(), au.j0(), bB.j0(), aw.mO()
}

function mP() {
	aV.mQ(!1), aP.mQ(), aW.mQ(!1), aU.mQ(), aR.mQ(), av.mQ(), af.mQ(!1), bg.mR()
}

function mS() {
	af.mQ(!1) && (be.dh = !0), az.y.j0()
}

function c4() {
	var mT, mU, mV;

	function mX(mZ) {
		for (var aB = mT - 1; 0 <= aB; aB--) 0 === mV[mU[aB]] && ag.gX[mU[aB]] >= mZ && fn(mU[aB])
	}

	function mW(player) {
		var dp;
		64 === mV[player] ? mV[player] = 6 : (dp = ag.gX[player], mV[player] = dp < 1e3 ? 3 : dp < 1e4 ? 2 : dp < 6e4 ? 1 : 0)
	}
	this.dZ = function() {
		mT = 0, mU = new Uint16Array(aD.eg), mV = new Uint8Array(aD.eg)
	}, this.j0 = function() {
		for (var aB = mT - 1; 0 <= aB; aB--) 64 === mV[mU[aB]] ? mW(mU[aB]) : 0 == mV[mU[aB]]-- && (mW(mU[aB]), fn(mU[aB]));
		16e4 <= ag.gX[lg[0]] && (mX(16e4), 3e5 <= ag.gX[lg[0]]) && mX(3e5), b9.g5.l3(aD.eT) && (bc.ma[7] = Math.max(ag.gX[aD.eT], bc.ma[7]))
	}, this.g7 = function(player) {
		for (var f2, aB = mT - 1; 0 <= aB; aB--)
			if (player === mU[aB]) {
				for (mT--, f2 = aB; f2 < mT; f2++) mU[f2] = mU[f2 + 1];
				return
			}
	}, this.jF = function(player, mb) {
		for (var aB = mT - 1; 0 <= aB; aB--)
			if (player === mU[aB]) return;
		mU[mT++] = player, mV[player] = mb ? 2 : 64
	}
}

function c5() {
	var size, jv;
	this.dZ = function() {
		size = aD.kT, jv = new Uint16Array(aD.eg);
		for (var k7 = aD.k7, aB = aD.kT - 1; 0 <= aB; aB--) jv[aB] = k7 + aB
	}, this.j0 = function() {
		an.iy.j0();
		for (var aB = size - 1; 0 <= aB; aB--)
			if (0 === ag.me[jv[aB]]) {
				f2 = void 0;
				var f2 = aB;
				size--, jv[f2] = jv[size]
			} else aE.j0(jv[aB])
	}, this.md = function(gH) {
		jv[size++] = gH
	}
}

function c6() {
	var mg, mh, mi, mj, mk, ml, mm, mn, mo, mp, mq, mr, ms, mt = !1,
		mu = !1;

	function mv(eB) {
		mr = be.eI, mi = mj = mh = 0, mk = (ms = 33) / eB, mg = 1 / (eB / ms / 4), ml = (h.i / 2 + iL) / hv, mm = (h.j / 2 + iM) / hv, mn = hv
	}

	function n2(aB) {
		var n4; - 1 !== aB && (aB = bL.iS(bM.y.mA[aB]), n4 = bL.er(aB) - 10, aB = bL.et(aB) - 10, aH.my(n4, aB, 19 + n4, 19 + aB))
	}

	function nF(e8) {
		Math.abs(Math.log(mq / mn)) < .125 && (mq = e8 * mn)
	}

	function nE(n4, n5, nH, nI) {
		mo = (n4 + nH + 1) / 2, mp = (n5 + nI + 1) / 2;
		nH = h.i / (nH - n4 + 1), n4 = h.j / (nI - n5 + 1);
		mq = .9 * (nH < n4 ? nH : n4)
	}
	this.mw = function() {
		return mt
	}, this.mx = function() {
		mv(1), this.my(0, 0, bR.eu - 1, bR.ev - 1), aD.h7 || aD.gs || this.mz(aD.eT, 3e3, !0, .3)
	}, this.n0 = function(player, n1) {
		n2(bM.ku.n3(player, n1))
	}, this.mz = function(player, eB, n6, zoom) {
		aD.n7 || mt && !n6 && mu || (0 === ag.gX[player] ? n2(bM.ku.n8(player)) : (aS.n9 = !1, mu = n6, mv(eB), function(player) {
			mo = (ag.ia[player] + ag.ib[player] + 1) / 2, mp = (ag.ic[player] + ag.ie[player] + 1) / 2
		}(player), function(zoom, player) {
			var i4 = ag.ib[player] - ag.ia[player] + 1,
				player = ag.ie[player] - ag.ic[player] + 1,
				f2 = h.i / i4,
				f3 = h.j / player,
				f2 = (mq = f2 < f3 ? f2 : f3, 0 !== zoom ? zoom : i4 < 20 && player < 20 ? .5 : .9);
			mq *= f2, nF(7 / 8)
		}(zoom, player), mt = !0, aq.nC()))
	}, this.nD = function(eB) {
		aD.gs || aD.n7 || (aS.n9 = !1, mu = !1, mv(eB), nE(0, 0, bR.eu - 1, bR.ev - 1), nF(7 / 8), mt = !0, aq.nC())
	}, this.my = function(n4, n5, nH, nI) {
		nE(n4, n5, nH, nI), hv = mq, aS.nJ(mo, h.i / 2), aS.nK(mp, h.j / 2), bZ.nL(), be.dh = !0
	}, this.nM = function() {
		return !(mt && mu || (mt = !1))
	}, this.j0 = function() {
		var nP, nQ, em, nT;
		mt && (mh < .5 ? mj < mk && (mj += mk * mg, mi = mh) : 1 - mi < mh && (mj = (mj -= mk * mg) < mk * mg ? mk * mg : mj), mr = mr >= be.eI ? be.eI - 1 : mr, em = be.eI - mr, mh = 1e3 < em || 1 < (mh += mj * em / ms) ? 1 : mh, mr = be.eI,
			em = hv, nP = iL, nQ = iM, em = (hv = mn * Math.pow(mq / mn, mh)) / em, nT = 1 - (mn * Math.pow(mq / mn, 1 - mh) - mn) / (mq - mn), aS.nJ(ml + nT * (mo - ml), h.i / 2), aS.nK(mm + nT * (mp - mm), h.j / 2), af.zoom(em, (nP * em -
				iL) / (1 - em), (nQ * em - iM) / (1 - em)), bZ.nL(), 1 <= mh && (mt = !1, ba.nU = !0), be.dh = !0)
	}
}

function by() {
	var f4 = b9.color;
	this.nV = f4.nW(0, 0, 0), this.nX = f4.nY(0, 0, 0, .7), this.nZ = f4.nY(0, 0, 0, .5), this.na = f4.nY(0, 0, 0, .85), this.nb = f4.nY(0, 0, 0, .75), this.nc = f4.nY(0, 0, 0, .6), this.nd = f4.nY(0, 0, 0, .35), this.ne = f4.nW(255, 255, 255), this
		.nf = f4.nY(255, 255, 255, .3), this.ng = f4.nY(255, 255, 255, .6), this.nh = f4.nY(255, 255, 255, .4), this.ni = f4.nY(255, 255, 255, .25), this.nj = f4.nY(255, 255, 255, .85), this.nk = f4.nY(255, 255, 255, .75), this.nl = f4.nY(255, 255,
			255, .15), this.nm = f4.nY(255, 255, 255, .11), this.nn = f4.nW(128, 128, 128), this.no = f4.nY(64, 64, 64, .75), this.np = f4.nY(88, 88, 88, .83), this.nq = f4.nY(60, 60, 60, .85), this.nr = f4.nY(80, 60, 60, .85), this.ns = f4.nW(170,
			170, 170), this.nt = f4.nW(200, 235, 245), this.nu = f4.nW(30, 255, 30), this.nv = f4.nW(0, 200, 0), this.nw = f4.nW(128, 255, 128), this.nx = f4.nY(10, 65, 10, .75), this.ny = f4.nY(0, 255, 0, .6), this.nz = f4.nY(0, 255, 0, .5), this
		.o0 = f4.nY(0, 200, 0, .5), this.o1 = f4.nY(0, 100, 0, .75), this.o2 = f4.nY(0, 60, 0, .8), this.o3 = f4.nY(0, 255, 0, .3), this.o4 = f4.nY(0, 180, 0, .6), this.o5 = f4.nY(0, 120, 0, .85), this.o6 = f4.nW(0, 120, 0), this.o7 = f4.nY(0, 70, 0,
			.85), this.o8 = f4.nW(190, 230, 190), this.o9 = f4.nW(0, 255, 0), this.oA = f4.nW(255, 120, 120), this.oB = f4.nW(255, 160, 160), this.oC = f4.nW(255, 70, 70), this.oD = f4.nW(230, 0, 0), this.oE = f4.nY(220, 0, 0, .6), this.oF = f4.nY(
			255, 100, 100, .8), this.oG = f4.nY(100, 0, 0, .85), this.oH = f4.nY(60, 0, 0, .85), this.oI = f4.nY(200, 0, 0, .6), this.oJ = f4.nY(120, 0, 0, .85), this.oK = f4.nW(255, 70, 10), this.oL = f4.nW(230, 190, 190), this.oM = f4.nW(255, 0,
		0), this.oN = f4.nW(255, 0, 255), this.oO = f4.nY(60, 0, 60, .85), this.oP = f4.nY(0, 60, 60, .85), this.oQ = f4.nY(10, 60, 60, .9), this.oR = f4.nY(0, 96, 96, .75), this.oS = f4.nW(0, 255, 255), this.oT = f4.nW(160, 160, 255), this.oU = f4
		.nY(0, 40, 90, .75), this.oV = f4.nY(0, 0, 255, .6), this.oW = f4.nW(200, 200, 255), this.oX = f4.nY(50, 50, 255, .83), this.oY = f4.nW(255, 120, 100), this.oZ = f4.nY(255, 255, 0, .5), this.oa = f4.nY(255, 255, 150, .2), this.ob = f4.nW(255,
			255, 0), this.oc = f4.nW(255, 255, 200), this.od = f4.nY(200, 200, 0, .6), this.oe = f4.nY(140, 120, 0, .75), this.og = f4.nY(180, 160, 40, .75), this.oh = f4.nY(70, 50, 20, .85), this.oi = f4.nY(30, 30, 0, .85), this.oj = f4.nY(60, 60,
			0, .85), this.ok = f4.nY(255, 140, 0, .75), this.ol = f4.nY(70, 40, 0, .85), this.om = f4.nW(220, 120, 0), this.on = f4.nY(255, 200, 80, .85), this.oo = f4.nW(255, 150, 120), this.op = f4.nY(0, 0, 0, 0), this.oq = f4.nY(255, 255, 255, 0),
		this.or = f4.nY(254, 254, 254, 0)
}

function cv() {
	this.h9 = new os, this.g5 = new ot, this.ou = new ov, this.ow = new ox, this.kA = new oy
}

function os() {
	this.hA = function(eV) {
		aD.kR ? b7.ou.hA(aD.eT, eV) : az.oz.p0(eV)
	}, this.hG = function(iK, jH) {
		aD.kR ? b7.ou.hG(aD.eT, iK, jH) : az.oz.p1(iK, jH)
	}, this.p2 = function(iK, p3) {
		aD.kR ? b7.ou.p4(aD.eT, iK, p3) : az.oz.p5(iK, p3)
	}, this.hM = function(iK, eV) {
		eV = (eV << 3) + bN.fL[6];
		aD.kR ? b7.ou.hM(aD.eT, iK, eV) : bM.mB.mC(aD.eT) && az.oz.p7(iK, eV)
	}, this.hP = function(iK) {
		849 === iK && (iK = 850);
		var n1 = bN.fL[3];
		aD.kR ? b7.ou.hP(aD.eT, iK, n1) : bM.hN.p8(aD.eT, n1) && az.oz.p9(iK, n1)
	}, this.pA = function(n1) {
		aD.kR ? b7.ou.pA(aD.eT, n1) : az.oz.p9(849, n1)
	}, this.pB = function(jH) {
		aD.kR ? b7.ou.pB(aD.eT, jH) : az.oz.pC(jH)
	}, this.pD = function(pE) {
		aD.kR ? b7.ou.pF(aD.eT, pE) : az.oz.pG(pE)
	}, this.hY = function(pH) {
		aD.kR ? b7.ou.hY(aD.eT, pH) : az.oz.pI(pH)
	}, this.pJ = function() {
		aD.kR ? b7.ou.pJ(aD.eT) : az.oz.pK()
	}, this.hV = function() {
		aD.kR ? b7.ou.hV(aD.eT) : az.oz.pC(513)
	}, this.hC = function(iK, eV, jH) {
		aD.kR ? b7.ou.hC(aD.eT, iK, eV, jH) : az.oz.pL(iK, eV, jH)
	}
}

function oy() {
	this.kB = function(player, p3, hT) {
		b9.g5.pM(player, hT, p3) && (ae.p2(player, p3), p3 < aD.k7) && ax.random() < ax.value(10) && (an.is.jC[p3] = 0)
	}, this.pN = function(player, p3, hT) {
		b9.g5.pO(hT, p3) ? (b9.g5.g8(p3, bN.fG[0]), bc.pP(player, p3), af.pQ(p3, bN.fG[0])) : bc.g9(player, hT, 12)
	}
}

function ot() {
	this.pR = function(pE, player) {
		aN.pD(aD.eT, player, pE), az.oz.pS(pE, player)
	}, this.pT = function(player) {
		aN.pU(player, 0), az.oz.pV(player)
	}, this.pW = function(pX, player) {
		aN.pY(pX, player), az.oz.pZ(pX, player)
	}, this.pa = function() {
		aD.kR || aD.gs || az.pb.pa()
	}
}

function ox() {
	this.j0 = function(aC) {
		var id, fS, nM;
		for (bG.dZ(aC), bG.e4 += 2, nM = 8 * bG.size; bG.e4 + 8 <= nM;) id = bG.pc(4), fS = bG.pc(9), 0 === id ? this.pd(id, fS, bG.pc(22)) : 1 === id ? this.pd(id, fS, bG.pc(10), bG.pc(10)) : 2 === id ? this.pd(id, fS, bG.pc(10), bG.pc(9)) :
			3 === id ? this.pd(id, fS, bG.pc(10), bG.pc(27)) : 4 === id ? this.pd(id, fS, bG.pc(10), bG.pc(16)) : 5 === id || 6 === id ? this.pd(id, fS, bG.pc(10)) : 7 === id ? this.pd(id, fS, bG.pc(1)) : 10 === id ? this.pd(id, fS, bG.pc(20), bG
				.pc(22)) : this.pd(id, fS)
	}, this.pe = [], this.pf = function() {
		for (var ph = 0, pi = 0, pj = 0, pk = 0, pl = 0, pm = 0, aB = 0; aB < 512; aB++) ph += ag.me[aB], pi += ag.gX[aB], pj += ag.gl[aB], pk += bM.y.pn[aB];
		pl += bM.y.lv, pm += al.k8, this.pe.push(pj % 1073741824 * 4 + (ph + pi + pk + pl + pm) % 4)
	}, this.pd = function(id, fS, fU, fW) {
		0 === id ? b7.ou.hA(fS, fU) : 1 === id ? b7.ou.hG(fS, fU, fW) : 2 === id ? b7.ou.p4(fS, fU, fW) : 3 === id ? b7.ou.hM(fS, fU, fW) : 4 === id ? b7.ou.hP(fS, fU, fW) : 5 === id ? b7.ou.pB(fS, fU) : 6 === id ? b7.ou.pF(fS, fU) : 7 === id ?
			b7.ou.hY(fS, fU) : 8 === id ? b7.ou.pJ(fS) : 9 === id ? b7.ou.po(fS) : 10 === id && b7.ou.hC(fS, fU >> 10, fW, fU % 1024)
	}
}

function ov() {
	this.hA = function(player, eV) {
		b9.g5.gu(0) && b9.g5.gv(player) && bL.iP(eV) && (b8.pp.pq(0, player, eV), aD.pr.jE(player, eV))
	}, this.hG = function(player, iK, jH) {
		b9.g5.gu(1) && b9.g5.gv(player) && b9.g5.ps(player, jH) && b9.g5.mD(player, iK, 12, 0) && b9.g5.pt(player, jH) && ((jH = ad.jT(player, bN.ef[0])) || ad.jl(player)) && (ag.pu[player]++, b8.pp.pq(1, player, iK, bN.ef[0]), an.iq.j5(player,
			jH)) && (b9.g5.mF(player), bc.pv(player, iK), an.iq.jB(player))
	}, this.p4 = function(player, iK, p3) {
		b9.g5.gu(1) && b9.g5.gv(player) && aD.he && b9.g5.ps(player, p3) && b9.g5.pw(player, p3) && b9.g5.pM(player, b9.g5.iJ(player, iK), p3) && (b8.pp.pq(2, player, iK, p3), ae.p2(player, p3))
	}, this.hM = function(player, iK, p6) {
		bN.fL[1] = 7 & p6;
		var eV = p6 >> 3;
		b9.g5.gu(1) && b9.g5.gv(player) && bL.iP(eV) && bM.mB.mC(player) && bM.mB.px(eV) && b9.g5.mD(player, iK, 32, 0) && bM.ks.py(player, eV, 1) && (bc.pz(player), b8.pp.pq(3, player, iK, p6), b9.g5.mF(player), bk.q0.hM(player), bM.y.mG(
			player))
	}, this.hP = function(player, iK, n1) {
		849 === iK ? this.pA(player, n1) : b9.g5.gu(1) && b9.g5.gv(player) && b9.g5.mD(player, iK, 32, 0) && bM.hN.q1(player, n1) && (bc.pz(player), b8.pp.pq(4, player, iK, n1), b9.g5.mF(player), bk.q0.hP(player), bM.y.mG(player))
	}, this.pA = function(player, n1) {
		b9.g5.gu(1) && b9.g5.gv(player) && bM.q2.j0(player, n1) && b8.pp.pq(4, player, 849, n1)
	}, this.pB = function(player, jH) {
		513 === jH ? this.hV(player) : b9.g5.gu(1) && b9.g5.gv(player) && (jH = Math.min(jH, aD.eg), ad.jT(player, jH)) && (b8.pp.pq(5, player, jH), ad.q3(player, jH))
	}, this.pF = function(player, pE) {
		(b9.g5.gu(1) || b9.g5.gu(2)) && b9.g5.gv(player) && (pE = bK.hs(pE, 0, 1023), b8.pp.pq(6, player, pE), af.q4(player, 0, pE))
	}, this.hY = function(player, pH) {
		av.hX(player) && (b8.pp.pq(7, player, pH), av.q5(player, pH))
	}, this.pJ = function(player) {
		(b9.g5.gu(0) || b9.g5.gu(1)) && b9.g5.gv(player) && aM.q6(player) && (b8.pp.pq(8, player), bP.pJ(player))
	}, this.po = function(player) {
		b8.pp.pq(9, player), bP.po(player)
	}, this.hV = function(player) {
		av.hZ(player) && (b8.pp.pq(5, player, 513), av.hV(player))
	}, this.hC = function(player, iK, eV, jH) {
		b9.g5.gu(1) && b9.g5.gv(player) && b9.g5.ps(player, jH) && b9.g5.pt(player, jH) && bL.iP(eV) && am.eK.ed(player, eV) && (ad.jT(player, bN.ef[0]) || ad.jl(player)) && (b8.pp.pq(10, player, (iK << 10) + bN.ef[0], eV), jH = b9.g5.lH(player,
			iK), ag.gB[player].push(bN.ek[0]), ad.jE(player, jH, bN.ef[0]), aF.jF(player, !0), bc.q7(player))
	}
}

function q8() {
	var qA;
	this.q9 = [], this.qA = document.createElement("div"), this.qB = function(qC, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = qC, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.4em", title.style.overflowWrap = "break-word", this.qA.appendChild(
			title), title
	}, this.qD = function(qC, marginBottom) {
		var qE = document.createElement("p");
		return qE.textContent = qC, qE.style.fontSize = "0.75em", qE.style.lineHeight = "1.2em", qE.style.marginBottom = marginBottom || "0", this.qA.appendChild(qE), qE
	}, this.qF = function(qC) {
		var qG = document.createElement("p");
		return qG.textContent = qC, qG.style.fontSize = "1em", qG.style.marginBottom = "0", qG.style.whiteSpace = "pre-wrap", qG.style.overflowWrap = "break-word", this.qA.appendChild(qG), qG
	}, this.qH = function(qI, fontSize) {
		var qA = document.createElement("div");
		return qA.innerHTML = qI, qA.style.fontSize = fontSize || "1em", qA.style.lineHeight = "1.2em", this.qA.appendChild(qA), qA
	}, this.qJ = function(qK) {
		for (var qL = qK.qL, ej = qL.length, aB = 0; aB < ej; aB++) this.qA.appendChild(qL[aB])
	}, this.qM = function(qN) {
		return this.q9.push(qN), this.qA.appendChild(qN.e), qN
	}, this.resize = function() {
		for (var ej = this.q9.length, aB = 0; aB < ej; aB++) this.q9[aB].resize && this.q9[aB].resize()
	}, (qA = this.qA).style.position = "absolute", qA.style.height = "auto", qA.style.padding = "0.5em"
}

function qO(qP, qQ) {
	var qA = document.createElement("div");

	function qY() {
		var aB, qZ, j, gI, em, qU = h.k * qA.offsetWidth,
			qa = new Float64Array(function(qU) {
				var i = .25 * b9.qV.qW(.6) * h.hu;
				return Math.max(Math.floor(qU / i), 1)
			}(qU)),
			qb = bb.qb,
			qc = (qU - (qa.length + 1) * bb.gap) / (qa.length * h.k);
		for (qa.fill(qb), aB = 0; aB < qQ.length; aB++) qZ = (em = qQ[aB].qA).style, j = b9.qd.min(qa), gI = qa.indexOf(j), qZ.top = b9.qV.qe(j), qZ.left = b9.qV.qe(qb + gI * (qc + qb)), qZ.width = b9.qV.qe(qc), b9.qV.qf(em, 5), qa[gI] += em
			.offsetHeight + 3 * qb;
		qA.style.height = b9.qV.qe(b9.qd.max(qa) - 2 * qb)
	}
	this.qR = qA, this.qS = qQ, this.resize = function() {
		var aB;
		for (aB = 0; aB < qQ.length; aB++) qQ[aB].resize();
		qY(), qY()
	}, qA.style.width = "100%", qA.style.maxWidth = "100%", qP.style.lineHeight = "1.5em", qP.style.overflowX = "hidden", qP.style.overflowY = "auto";
	for (var aB = 0; aB < qQ.length; aB++) qA.appendChild(qQ[aB].qA);
	qP.appendChild(qA)
}

function w(qg, qh, qi, qj, qk) {
	var self, ql = document.createElement("button");

	function qs() {
		var qy;
		bI.qx() || (qy = b9.color.qz(qi), !1 !== qj && 0 < qy[0] && qy[0] < 255 && qy[0] === qy[1] && qy[0] === qy[2]) || (ql.style.backgroundColor = b9.color.r0(qi, qy[3] && qy[3] < 120 ? 150 : 50))
	}

	function qr() {
		if (qj) {
			var qy = b9.color.qz(qi);
			if (qy[0] === qy[1] && qy[0] === qy[2]) return
		}
		qh && ((qy = qh(this)) ? 2 === qy && qs() : r2(this))
	}

	function qu() {
		this.style.backgroundColor = qi
	}

	function qt() {
		r2(this)
	}

	function r2(em) {
		em.style.backgroundColor = qi, em.blur()
	}
	this.button = ql, this.qm = qh, this.qn = qi, this.qq = function(qv) {
		qv = 1.1 - Math.min(.01 * qg.length, .6) + .2 * qv;
		ql.style.fontSize = qv.toFixed(1) + "em"
	}, this.qp = function(f4) {
		f4 ? 1 === f4 ? f4 = bA.nq : 2 === f4 && (qj = 1, f4 = bA.nq) : (qj = 0, f4 = bA.na), this.qn = qi = f4, ql.style.backgroundColor = f4
	}, self = this, ql.innerHTML = qg, ql.style.color = qk ? bA.ob : bA.ne, ql.style.userSelect = "none", ql.style.outline = "none", ql.style.overflowWrap = "break-word", self.qp(qi), ql.style.border = "none", ql.style.font = "inherit", self.qq(
		0), ql.style.padding = "0em 0.3em", ql.onclick = qr, ql.addEventListener("mouseover", qs), ql.addEventListener("mouseout", qt), ql.addEventListener("focus", qs), ql.addEventListener("blur", qu)
}

function r3(r4, qP) {
	var qA;
	this.resize = function() {
		for (var aB = 0; aB < r4.length; aB++) b9.qV.qf(r4[aB].button);
		qA.style.gap = qA.style.padding = b9.qV.qe(bb.qb)
	}, (qA = document.createElement("div")).style.display = "grid", qA.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", qA.style.overflowY = "auto", qA.style.gridAutoRows = "5.3em", qA.style.maxHeight = "100%";
	for (var aB = 0; aB < r4.length; aB++) r4[aB].qq(1), qA.appendChild(r4[aB].button);
	qP.appendChild(qA)
}

function r6(r7, r8, r9) {
	this.eq = 0, this.es = 0, this.i = 0, this.j = 0, this.resize = function() {
		this.j = Math.min(b9.qV.qW(r9 || .5) * r7[1] * h.hu, h.j - 2 * bb.gap), this.i = Math.min(this.j * (r7[0] / r7[1]), h.i - 2 * bb.gap), this.j = r7[1] * this.i / r7[0], this.eq = bb.gap + r8[0] * (h.i - this.i - 2 * bb.gap), this.es = bb
			.gap + r8[1] * (h.j - this.j - 2 * bb.gap)
	}, this.rA = function() {
		return this.eq + .5 * this.i
	}
}

function rB(rC, rD) {
	var rM, self, rE = document.createElement("div"),
		rF = document.createElement("div"),
		rG = document.createElement("div"),
		rH = null,
		rN = (this.rI = new rJ({
			value: "",
			e4: -1
		}, 0, rK, function(e) {
			e.target.value = b9.rU.rV(e.target.value), rH.rT.textContent = 127 - e.target.value.length
		}), 0),
		rO = 1,
		rP = 0,
		rQ = 1048575;

	function rK() {
		rC(), rH.rT.textContent = 127
	}

	function rf(re, qN) {
		qN && (qN.rk = 1, re.appendChild(bm.rl.transform(qN)))
	}

	function ri(bs) {
		rO ? rE.scrollTop = rE.scrollHeight : bs && (rE.scrollTop = rP)
	}
	this.rW = function(rX) {
			rQ = 1048575, rF.textContent = "", rX || this.mR()
		}, this.mR = function() {
			var rY = bm.y.rZ[0],
				rY = bm.y.rb[rY],
				rc = rY.rc,
				ej = rc.length,
				jO = 1048575 === rQ ? 0 : ej - (rY.rd - rQ + 1048575) % 1048575;
			if (rQ = rY.rd, !(ej <= (jO = Math.max(jO, 0)))) {
				for (var re = document.createDocumentFragment(), aB = jO; aB < ej; aB++) rf(re, bm.ku.rg(rc[aB], bm.ku.rh(rc[aB])));
				rF.appendChild(re), ri()
			}
		}, this.rj = function(r) {
			var re = document.createDocumentFragment();
			rf(re, r), rF.appendChild(re), ri()
		}, this.show = function(qP) {
			qP.appendChild(rE), qP.appendChild(rG), this.resize(qP)
		}, this.rm = function(qP) {
			qP.removeChild(rE), qP.removeChild(rG)
		}, this.resize = function(qP) {
			rN = qP ? qP.offsetHeight : rN;
			var qP = b9.qV.ro(.04, .75),
				rp = Math.max(qP, rN - qP),
				rq = h.i / h.k,
				rr = .7 * rq,
				rp = (rG.style.top = b9.qV.qe(rN - qP), rG.style.height = b9.qV.qe(qP), rE.style.top = b9.qV.qe(rN - qP - rp), rE.style.height = b9.qV.qe(rp), b9.qV.qf(rE, 2), this.rI.e.style.width = b9.qV.qe(rr), this.rI.e.style.fontSize = rM.button
					.style.fontSize = b9.qV.qe(.5 * qP), b9.qV.qf(this.rI.e, 6), rM.button.style.left = b9.qV.qe(rr), rM.button.style.width = b9.qV.qe(rq - rr), .385 * qP);
			a0.a1.ht() && (rp *= .8 - .12 * (h.i > h.j)), rF.style.marginLeft = rF.style.marginRight = b9.qV.qe(.5 * rp), rF.style.fontSize = b9.qV.qe(rp), ri(1)
		}, (self = this).rI.e.rR = 127, rE.style.position = "absolute", rE.style.top = "0", rE.style.left = "0", rE.style.width = "100%", rE.style.overflowX = "hidden", rE.style.overflowY = "auto", rE.style.font = "inherit", rE.style
		.backgroundColor = bA.nc, rE.addEventListener("scroll", function() {
			rP = rE.scrollTop, rO = rP < rE.scrollHeight - rE.clientHeight - 2 ? 0 : 1
		}), rF.style.font = "inherit", rG.style.position = "absolute", rG.style.left = "0", rG.style.width = "100%", self.rI.e.setAttribute("placeholder", L(13)), self.rI.e.style.position = "absolute", self.rI.e.style.top = "0", self.rI.e.style
		.left = "0", self.rI.e.style.height = "100%", self.rI.e.style.backgroundColor = bA.nZ, self.rI.e.style.textAlign = "center", (rM = new w(L(14), rK)).button.top = "0", rM.button.style.position = "absolute", rM.button.style.height = "100%", rM
		.qp(bA.oq), rH = new rS("127", rM.button, 1, 1), rE.appendChild(rF), rG.appendChild(self.rI.e), rG.appendChild(rM.button)
}

function rt(ru, qg, rv) {
	function click() {
		var value = 1 - ru.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + qg, void 0 !== ru.e4 ? bi.rw.rx(ru.e4, value) : ru.value = value, rv && rv(value)
	}
	var e;
	qg = qg || L(15), this.e = document.createElement("p"), (e = this.e).textContent = (ru.value ? "🟩 " : "⬜ ") + qg, e.style.margin = "0", e.style.marginBottom = "0.5em", e.style.cursor = "pointer", e.addEventListener("click", click)
}

function ry(qP, qI) {
	var qA = document.createElement("div");
	this.qR = qA, this.resize = function() {
		qA.style.padding = b9.qV.qe(bb.qb), qA.style.lineHeight = b9.qV.qe(b9.qV.ro(.035))
	}, qP.style.overflowX = "hidden", qP.style.overflowY = "auto", qA.innerHTML = qI, qP.appendChild(qA)
}

function rz(s0) {
	var qA = document.createElement("div");
	this.e = qA, this.s1 = s0, this.resize = function() {
		for (var ej = s0.length, aB = 1; aB < ej; aB++) b9.qV.qf(s0[aB], 4)
	};
	var aB, ej = s0.length;
	for (qA.style.width = "100%", qA.style.height = "2.7em", qA.style.marginTop = "0.6em", qA.style.border = "inherit", aB = 0; aB < ej; aB++) s0[aB].style.verticalAlign = "top", s0[aB].style.width = (100 / ej).toFixed(2) + "%", s0[aB].style.height =
		"100%", s0[aB].style.fontSize = "0.75em", qA.appendChild(s0[aB])
}

function s2(s3, qi, s4) {
	this.qA = document.createElement("div"), this.r4 = s3;
	var s5 = 0;
	this.resize = function(qP, s7) {
		var ej = s3.length;
		if (!s4)
			for (var aB = 1; aB < ej; aB++) b9.qV.qf(s3[aB].button, 4);
		for (var s8 = 0, aB = 0; aB < ej; aB++) s8 += s3[aB].button.offsetWidth;
		if (qP && (s5 = qP.offsetWidth), s7 && s8 < s5)
			for (aB = 0; aB < ej; aB++) s3[aB].button.style.width = (100 * s3[aB].button.offsetWidth / s8).toFixed(2) + "%";
		else
			for (aB = 0; aB < ej; aB++) s3[aB].button.style.width = "auto";
		s7 || this.resize(qP, 1)
	};
	var s6 = this;
	s6.qA.style.height = s6.qA.style.maxHeight = "100%";
	for (var aB = 0; aB < s3.length; aB++) s3[aB].qp(qi), s3[aB].button.style.height = "100%", s3[aB].button.style.padding = "0.0em 0.9em", s6.qA.appendChild(s3[aB].button)
}

function s9() {
	var e;
	this.e = document.createElement("hr"), this.resize = function() {
		b9.qV.qf(this.e, 8, bA.nn)
	}, (e = this.e).style.marginBottom = e.style.marginTop = "0.65em", e.style.marginLeft = e.style.marginRight = "-4%", e.style.border = "none"
}

function sA() {
	var sE, sF, sB = document.createElement("div"),
		sC = 0,
		sD = 0;
	this.show = function(eq, es, qC, sG, sH) {
		if (sC) {
			if (!sG) return;
			this.rm()
		}
		eq === es && -1 === eq ? (eq = sE, es = sF) : (sE = eq, sF = es), sH || (sD = sG), sC = 1;
		sH = h.i / h.k, sB.style.whiteSpace = "pre", sB.textContent = qC, b9.qV.qf(sB, 5), sB.style.font = b9.qV.sJ(0, b9.qV.ro(.015)), sB.style.padding = "0.3em 0.6em", sB.style.left = eq + "px", sB.style.top = "0px", document.body.appendChild(
			sB), sG = eq + sB.offsetWidth - sH;
		0 < sG && (sB.style.left = (qC = eq - sG) + "px", qC < 5) && (sB.style.whiteSpace = "pre-wrap"), sB.style.top = es - sB.offsetHeight + sD * bb.sL + "px"
	}, this.rm = function(sM) {
		if (sC) {
			if (sM && sD) return 0;
			sC = 0, document.body.removeChild(sB)
		}
		return 1
	}, sB.style.position = "absolute", sB.style.backgroundColor = bA.na, sB.style.color = bA.ne, sB.style.pointerEvents = "none", sB.style.zIndex = "5", sB.style.maxWidth = "100%"
}

function rJ(sN, type, sO, sP) {
	var e;
	this.e = document.createElement("input"), (e = this.e).type = type ? "number" : "text", e.id = "input" + t.y.sQ++, e.value = sN.value, e.style.width = "100%", e.style.userSelect = "none", e.style.outline = "none", e.style.resize = "none", e.style
		.border = "inherit", e.style.font = "inherit", e.style.color = bA.ne, e.style.backgroundColor = bA.nX, e.style.fontSize = "1em", e.style.padding = "0.1em 0.2em", e.addEventListener("focus", function() {
			h.sR++
		}), e.addEventListener("blur", function() {
			h.sR--, -1 !== sN.e4 && bi.rw.rx(sN.e4, e.value)
		}), e.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== sN.e4 && bi.rw.rx(sN.e4, e.value), sO ? sO() : e.blur())
		}), sP && e.addEventListener("input", function(qN) {
			sP(qN)
		})
}

function sS(qP, data) {
	var ej = data.sT.length,
		sU = document.createElement("div"),
		sV = document.createElement("div"),
		sW = document.createElement("div"),
		sX = new Array(ej),
		qQ = new Array(ej),
		sY = new Array(data.sZ.length),
		sa = b9.color.nY(70, 70, 0, .35);

	function r0() {
		this.style.backgroundColor = b9.color.r0(sa, 160)
	}

	function sf() {
		this.style.backgroundColor = sa
	}

	function qY() {
		var f2;
		for (qP.style.font = b9.qV.sJ(0, b9.qV.sp(.026, .5, .03)), aB = 1; aB < sY.length; aB++) b9.qV.qf(sY[aB], 4);
		if (b9.qV.qf(sU, 2), ej) {
			for (var hB, sq = sU.offsetWidth, sr = sW.offsetWidth, aB = 0; aB < sY.length; aB++) hB = .01 * data.se[aB] * sr, sY[aB].style.width = (100 * hB / sq).toFixed(2) + "%";
			var l0 = data.sT[0].length;
			for (aB = 0; aB < ej; aB++)
				for (b9.qV.qf(sX[aB], 2), f2 = 1; f2 < l0; f2++) b9.qV.qf(qQ[aB][f2], 4);
			sV.sb && (sV.scrollTop = sV.sb)
		}
	}
	this.resize = function() {
			qY(), qY()
		}, qP.style.display = "flex", qP.style.flexDirection = "column", sV.style.overflowX = "hidden", sV.style.overflowY = "auto", sV.addEventListener("scroll", function() {
			this.sb = this.scrollTop
		}),
		function() {
			var em, aB, sT = data.sT,
				l0 = ej ? sT[0].length : 0;
			for (aB = 0; aB < ej; aB++) {
				sX[aB] = document.createElement("div"), sX[aB].style.backgroundColor = function(aB) {
					return aB % 2 == 1 ? b9.color.nY(130, 130, 130, .35) : bA.nd
				}(aB), sX[aB].style.width = "100%", sX[aB].style.display = "flex", qQ[aB] = new Array(l0);
				for (var f2 = 0; f2 < l0; f2++) qQ[aB][f2] = em = document.createElement("div"), em.style.display = "flex", em.style.justifyContent = "center", em.style.wordBreak = "break-all", em.style.padding = "0.4em 0em", em.style.width = data
					.se[f2] + "%", em.innerHTML = sT[aB][f2].fB, 1 === sT[aB][f2].dp && (em.name = "" + aB, em.style.color = bA.ob, em.style.backgroundColor = sa, em.addEventListener("mouseover", r0), em.addEventListener("mouseout", sf), function(em,
						sh, si) {
						2147483647 !== si && em.addEventListener("click", function() {
							bC.a7(30), bC.a8(30, sh), bG.dZ(bC.aC), this.style.backgroundColor = sa, t.u(8, t.sj, new sk(25, {
								sl: 0,
								sh: bE.sm.sn(bE.sm.so(5)),
								si: si
							}))
						})
					}(em, sT[aB][f2].sh, sT[aB][f2].si)), sX[aB].appendChild(em)
			}
			for (sU.style.display = "flex", sU.style.backgroundColor = b9.color.nY(0, 120, 0, .35), aB = 0; aB < sY.length; aB++) sY[aB] = em = document.createElement("div"), em.style.display = "flex", em.style.justifyContent = "center", em.style
				.wordBreak = "break-all", em.style.padding = "0.4em 0em", em.style.width = data.se[aB] + "%", em.innerHTML = data.sZ[aB], sU.appendChild(em)
		}();
	for (var aB = 0; aB < ej; aB++) sW.appendChild(sX[aB]);
	sV.appendChild(sW), qP.appendChild(sU), qP.appendChild(sV)
}

function ss() {
	var sw, sx, st = document.createElement("div"),
		su = document.createElement("div"),
		sv = document.createElement("div"),
		sW = document.createElement("div"),
		r4 = [],
		dz = [L(16), L(17), L(18), L(19), L(20), L(21), L(22)],
		sy = [1, 2, 3, 0, 9, 10, 11];

	function t0(aB) {
		t.u(8, 0, new sk(21, {
			t2: sy[aB],
			t3: 0,
			t4: 10
		}))
	}
	this.show = function() {
			this.rx(t.y.t5), document.body.appendChild(st)
		}, this.rm = function() {
			document.body.removeChild(st)
		}, this.rx = function(t5) {
			for (var t6 = [3, 0, 1, 2, 4, 5, 6], aB = 0; aB < r4.length; aB++) {
				var i = t5[aB];
				sw[t6[aB]][1].rT.textContent = i || ""
			}
		}, this.resize = function() {
			var aB, t7 = bb.gap,
				j = b9.qV.t8(.085),
				i = Math.min(4 * j, h.i - 2 * t7),
				ej = r4.length;
			for (b9.qV.t9(st, t7, h.j - t7 - j, i, j), b9.qV.qf(st), b9.qV.qf(su, 6), aB = 0; aB < ej - 1; aB++) b9.qV.qf(r4[aB].button, 6);
			for (aB = 0; aB < ej; aB++) sw[aB][0].resize(), sw[aB][1].resize();
			for (r4[0].eq = 0, r4[0].button.style.left = b9.qV.qe(r4[0].eq), r4[0].button.style.width = b9.qV.tA(1.7 * j), aB = 1; aB < ej; aB++) r4[aB].eq = r4[aB - 1].eq + r4[aB - 1].button.offsetWidth, r4[aB].button.style.left = b9.qV.qe(r4[aB]
				.eq);
			if (!sx) {
				if (!ab.tB()) return;
				(sx = ab.get(14)).style.width = "24%", sx.style.position = "absolute", su.appendChild(sx)
			}
			sx.style.left = b9.qV.qe(0), sx.style.top = "7%", sv.tC && (sv.scrollLeft = sv.tC)
		}, st.style.position = "absolute", su.style.width = "25%", su.style.height = "100%", su.style.backgroundColor = bA.na, sv.style.position = "absolute", sv.style.width = "75%", sv.style.height = "100%", sv.style.backgroundColor = bA.na, sv
		.style.top = sv.style.right = b9.qV.qe(0), b9.qV.sz(sv), sW.style.height = sW.style.maxHeight = "100%", r4.push(new w("", function() {
			t0(0)
		}, bA.oO)), r4.push(new w("", function() {
			t0(1)
		}, bA.oP)), r4.push(new w("", function() {
			t0(2)
		}, bA.oH)), r4.push(new w("", function() {
			t0(3)
		}, bA.o2)), r4.push(new w("", function() {
			t0(4)
		}, bA.ol)), r4.push(new w("", function() {
			t0(5)
		}, bA.oj)), r4.push(new w("", function() {
			t0(6)
		}, bA.ol)), sw = new Array(r4.length);
	for (var aB = 0; aB < r4.length; aB++) r4[aB].button.style.position = "absolute", sw[aB] = [new t1(dz[aB], r4[aB].button, .25, .45), new t1("", r4[aB].button, .53, .84, 1)], r4[aB].button.style.height = r4[aB].button.style.maxHeight = "100%", r4[
		aB].button.top = b9.qV.qe(0), sW.appendChild(r4[aB].button);
	sv.appendChild(sW), st.appendChild(su), st.appendChild(sv)
}

function tD(tE, tF, tG, tH, rC, rD) {
	var tI = document.createElement("div"),
		tJ = document.createElement("div"),
		tK = document.createElement("div"),
		tL = document.createElement("div"),
		tM = document.createElement("div"),
		tN = document.createElement("div"),
		tO = document.createElement("div"),
		tP = document.createElement("div"),
		tQ = document.createElement("span"),
		tR = document.createElement("div");
	this.tS = new rB(rC, rD), this.tT = new tU(rD), this.tV = [tE, tF, tG, tH], this.tZ = function(ta) {
		ta = (ta / 10).toFixed(1) + "%";
		tP.style.width = ta, tQ.innerHTML = ta
	}, this.tb = function() {
		this.tT.rm(tN), this.tS.show(tN)
	}, this.tc = function() {
		this.tS.rm(tN), this.tT.show(tN)
	}, this.td = function() {
		return tJ
	}, this.show = function() {
		document.body.appendChild(tI)
	}, this.rm = function() {
		document.body.removeChild(tI)
	}, this.resize = function(te) {
		var tf = 1 - .4 * a0.a1.ht() * (h.i > 1.6 * h.j),
			tg = b9.qV.ro(.05 * tf),
			th = h.j > h.i,
			ti = b9.qV.ro(.07 * tf + .03 * th),
			tj = b9.qV.ro(.04 + .02 * th),
			th = b9.qV.ro(.02 * tf + .01 * th),
			tl = b9.qV.ro(.025);
		tI.style.font = b9.qV.sJ(0, tl), tf < 1 && (tl = b9.qV.sJ(0, tf * tl), tK.style.font = tl, tM.style.font = tl, tR.style.font = tl, tO.style.font = tl, tL.style.font = tl), tJ.style.height = b9.qV.qe(tg), tJ.style.font = b9.qV.sJ(0, .72 *
				tg), b9.qV.qf(tJ, 2), tK.style.top = b9.qV.qe(tg), tK.style.height = b9.qV.qe(ti), b9.qV.qf(tK, 2), tL.style.font = b9.qV.sJ(0, tf * b9.qV.ro(.02)), tL.style.top = b9.qV.qe(tg + ti), tL.style.height = b9.qV.qe(tj), b9.qV.qf(tL,
			2), tM.style.top = b9.qV.qe(tg + ti + tj), tM.style.height = b9.qV.qe(ti), b9.qV.qf(tM, 2), tN.style.top = b9.qV.qe(tg + ti + tj + ti), tN.style.height = b9.qV.qe(h.j / h.k - tg - 3 * ti - tj - th), tO.style.top = b9.qV.qe(h.j / h.k -
				ti - th), tO.style.height = b9.qV.qe(th), b9.qV.qf(tO, 8), tQ.style.font = b9.qV.sJ(0, .8 * th), tR.style.top = b9.qV.qe(h.j / h.k - ti), tR.style.height = b9.qV.qe(ti), b9.qV.qf(tR, 8), tE.resize(tK), tF.resize(tK), tG.resize(
			tK), tH.resize(tK), te ? this.tS.resize(tN) : this.tT.resize()
	};
	rC = this;
	tI.style.position = "absolute", tI.style.top = "0", tI.style.left = "0", tI.style.width = "100%", tI.style.height = "100%", tI.style.backgroundColor = bA.nd, bI.qx() || (tI.style.backdropFilter = "blur(4px)", tI.style.webkitBackdropFilter =
		"blur(4px)"), tJ.style.position = "absolute", tJ.style.top = "0", tJ.style.left = "0", tJ.style.width = "100%", tJ.style.display = "flex", tJ.style.alignItems = "center";
	for (var g = [tK, tL, tM, tR], aB = 0; aB < g.length; aB++) g[aB].style.position = "absolute", g[aB].style.left = "0", g[aB].style.width = "100%", b9.qV.sz(g[aB]);
	tN.style.position = "absolute", tN.style.left = "0", tN.style.width = "100%", tN.style.font = "inherit", tO.style.position = "absolute", tO.style.left = "0", tO.style.width = "100%", tP.style.position = "absolute", tP.style.top = "0", tP.style
		.left = "0", tP.style.height = "100%", tP.style.width = "50%", tP.style.backgroundColor = bA.o0, tQ.innerHTML = "", tQ.style.position = "absolute", tQ.style.top = "50%", tQ.style.left = "50%", tQ.style.transform = "translate(-50%, -50%)", tJ
		.appendChild(function() {
			var tY = document.createElement("h1");
			return tY.textContent = L(23), tY.style.margin = "0 auto 0.15em auto", tY.style.webkitTextStroke = "0.02em brown", tY.style.fontFamily = "Arial Black, Trebuchet MS", tY.style.fontSize = "inherit", tY.style.fontWeight = "inherit", tY
		}()), tK.appendChild(tE.qA), tL.appendChild(tF.qA), tM.appendChild(tG.qA), tO.appendChild(tP), tO.appendChild(tQ), tR.appendChild(tH.qA), tI.appendChild(tJ), tI.appendChild(tK), tI.appendChild(tL), tI.appendChild(tM), tI.appendChild(tN), tI
		.appendChild(tO), tI.appendChild(tR), rC.tT.show(tN)
}

function tU(rD) {
	var tI = document.createElement("div"),
		tN = document.createElement("div");
	this.mR = function() {
			tN.textContent = "", bm.tn.rm(1);
			for (var re = document.createDocumentFragment(), to = bm.y.rZ[0], tp = bm.tp.tq[to], tr = bm.tp.tr[to], aB = 0; aB < tp.length; aB++) ! function(re, qN, tt, to) {
				var rT = document.createElement("span");
				rT.textContent = (tt ? "🟢 " : "⚪ ") + bm.ku.tu(qN, to), rT.style.color = bm.ku.tv(qN.tw), rT.style.cursor = "pointer", rT.style.margin = "0.2em 0.2em 0.2em 0.2em", rT.style.width = rT.style.maxWidth = 2 === to ? "10em" : "9em",
					rT.style.height = rT.style.maxHeight = "1.4em", rT.style.whiteSpace = "nowrap", rT.style.overflow = "hidden", rT.style.textOverflow = "ellipsis", rT.style.font = "inherit", rT.style.display = "inline-block", bm.ku.tx(qN) && (
						rT.style.textDecoration = "underline"), rT.onclick = function(e) {
						rD(e, qN)
					}, bI.qx() || (rT.onmouseover = function(e) {
						bm.tn.ty(e, qN, 1)
					}), re.appendChild(rT)
			}(re, tp[aB], aB < tr, to);
			tN.appendChild(re)
		}, this.show = function(qP) {
			qP.appendChild(tI)
		}, this.rm = function(qP) {
			qP.removeChild(tI)
		}, this.resize = function() {
			tN.style.fontSize = b9.qV.qe(b9.qV.ro(.02, .3))
		}, tI.style.top = "0", tI.style.left = "0", tI.style.width = tI.style.height = "100%", tI.style.overflowX = "hidden", tI.style.overflowY = "auto", tI.style.font = "inherit", tN.style.font = "inherit", tN.style.margin = "0.4em", tI
		.appendChild(tN)
}

function tz(u0) {
	var tI = document.createElement("div"),
		rG = document.createElement("div"),
		u1 = [];

	function qs() {
		bI.qx() || (this.style.backgroundColor = b9.color.r0(bA.na, 50))
	}

	function qt() {
		this.style.backgroundColor = bA.na
	}
	this.rx = function(u3, u4) {
			u1[2].textContent = u3 + 1 + " / " + u4
		}, this.show = function(qN) {
			rG.appendChild(bm.rl.transform(bm.ku.rg(qN, bm.ku.rh(qN)))), document.body.appendChild(tI)
		}, this.resize = function() {
			var j = b9.qV.ro(.03, .5);
			tI.style.width = 10 * j + "px", tI.style.font = b9.qV.sJ(1, .75 * j), b9.qV.qf(tI, 4), rG.style.top = j + "px", rG.style.font = b9.qV.sJ(0, .55 * j), b9.qV.qf(rG, 2), tI.style.height = j + rG.offsetHeight + "px";
			for (var aB = 0; aB < 3; aB++) b9.qV.qf(u1[aB], 6), u1[[0, 1, 3][aB]].style.width = 2 * j + "px";
			for (aB = 0; aB < 4; aB++) u1[aB].style.height = j + "px", b9.qV.qf(u1[aB], 2);
			u1[2].style.width = 4 * j + "px", u1[1].style.left = 2 * j + "px", u1[2].style.left = 4 * j + "px", u1[3].style.left = 8 * j + "px"
		}, this.u5 = function() {
			for (var aB = 0; aB < 4; aB++) u1[aB].onclick = null, u1[aB].onmouseover = null, u1[aB].onmouseout = null;
			document.body.removeChild(tI), tI = rG = u1 = null
		}, tI.style.position = "absolute", tI.style.color = bA.ne, tI.style.zIndex = "3", tI.style.right = "0", tI.style.top = "0", rG.style.position = "absolute", rG.style.height = "auto", rG.style.color = bA.ne, rG.style.backgroundColor = bA.na, rG
		.style.left = "0", rG.style.width = "100%", rG.style.overflowWrap = "break-word", tI.appendChild(rG);
	for (var aB = 0; aB < 4; aB++) u1[aB] = document.createElement("div"), u1[aB].style.position = "absolute", u1[aB].style.backgroundColor = bA.na, u1[aB].style.color = bA.ne, u1[aB].style.top = "0", u1[aB].style.display = "flex", u1[aB].style
		.justifyContent = "center", u1[aB].style.alignItems = "center", u1[aB].style.userSelect = "none", u1[aB].style.outline = "none", u1[aB].style.font = "inherit", 2 !== (u1[aB].u2 = aB) && (u1[aB].onclick = u0, u1[aB].onmouseover = qs, u1[aB]
			.onmouseout = qt), tI.appendChild(u1[aB]);
	u1[0].textContent = "◀", u1[1].textContent = "▶", u1[3].textContent = "✖"
}

function u6(u0) {
	var sB = document.createElement("div");

	function qs() {
		bI.qx() || (sB.style.backgroundColor = b9.color.r0(bA.na, 50))
	}

	function qt() {
		sB.style.backgroundColor = bA.na
	}
	this.rx = function(u4) {
			sB.textContent = u4
		}, this.show = function() {
			document.body.appendChild(sB)
		}, this.resize = function() {
			var j = b9.qV.ro(.03, .5);
			sB.style.width = 2 * j + "px", sB.style.height = j + "px", sB.style.font = b9.qV.sJ(1, .75 * j), b9.qV.qf(sB, 4), b9.qV.qf(sB, 2)
		}, this.u5 = function() {
			sB.onclick = null, sB.onmouseover = null, sB.onmouseout = null, document.body.removeChild(sB), sB = null
		}, sB.style.position = "absolute", qt(), sB.style.color = bA.ne, sB.style.zIndex = "3", sB.style.right = "0", sB.style.top = "0", sB.style.display = "flex", sB.style.justifyContent = "center", sB.style.alignItems = "center", sB.style
		.userSelect = "none", sB.style.outline = "none", sB.onclick = u0, sB.onmouseover = qs, sB.onmouseout = qt
}

function u7(s3) {
	var tI = document.createElement("div"),
		u8 = document.createElement("div"),
		sC = (this.eq = 0, this.es = 0);

	function uA() {
		bm.uB.rm()
	}
	this.r4 = s3, this.show = function(eq, es, uD) {
		if (sC) return [0, 0];
		sC = 1, this.eq = eq, this.es = es,
			function(self, uD) {
				var i = b9.qV.ro(.16, .7),
					j = s3.length * i / 3,
					uF = h.i / h.k,
					uG = h.j / h.k,
					nG = Math.min(1, Math.min(uF / i, uG / j));
				i *= nG, j *= nG, uD && (self.eq += b9.qV.ro(.03, .5)), self.eq = bK.hs(self.eq, 0, uF - i), self.es = bK.hs(self.es, 0, uG - j), u8.style.left = self.eq + "px", u8.style.top = self.es + "px", u8.style.width = i + "px", u8.style
					.height = j + "px", u8.style.font = b9.qV.sJ(0, .34 * j / s3.length), b9.qV.qf(u8, 5);
				for (var aB = 1; aB < s3.length; aB++) b9.qV.qf(s3[aB].button, 8)
			}(this, uD), document.body.appendChild(tI)
	}, this.rm = function() {
		sC && (sC = 0, tI.removeEventListener("click", uA), document.body.removeChild(tI))
	};
	for (var aB = 0; aB < s3.length; aB++) new rS("" + (1 + aB), s3[aB].button, 0, 1);
	tI.style.position = "fixed", tI.style.top = "0", tI.style.left = "0", tI.style.width = "100%", tI.style.height = "100%", tI.style.zIndex = "5", u8.style.position = "absolute",
		function() {
			for (var uC = (100 / s3.length).toFixed(2) + "%", aB = 0; aB < s3.length; aB++) s3[aB].button.style.width = "100%", s3[aB].button.style.height = s3[aB].button.style.maxHeight = uC, s3[aB].button.style.padding = "0.0em 0.9em", u8
				.appendChild(s3[aB].button)
		}(), tI.appendChild(u8), tI.addEventListener("click", uA)
}

function uH(sN, uI) {
	this.qL = [];
	var uJ = this.qL;

	function click() {
		for (var aB = 0; aB < uJ.length; aB++) uJ[aB].textContent = uJ[aB].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var e4 = parseInt(this.name);
		void 0 !== sN.e4 && bi.rw.rx(sN.e4, e4), uI && uI(e4)
	}
	for (var uK, ej = sN.uL.length, aB = 0; aB < ej; aB++)(uK = document.createElement("p")).textContent = "⚪ " + sN.uL[aB], uK.style.margin = "0", uK.name = "" + aB, uK.style.cursor = "pointer", uK.style.fontSize = "1em", uK.addEventListener(
		"click", click), uJ.push(uK);
	uJ[sN.value].textContent = uJ[sN.value].textContent.replace("⚪", "🟢")
}

function uM(title, uN, uO) {
	var st = document.createElement("div"),
		uP = document.createElement("div"),
		sW = document.createElement("div"),
		uQ = document.createElement("div"),
		uR = document.createElement("div");
	this.uS = sW, this.uT = uN, this.show = function() {
			!1 !== uO ? document.body.appendChild(st) : (document.body.appendChild(uP), document.body.appendChild(uQ))
		}, this.rm = function() {
			!1 !== uO ? document.body.removeChild(st) : (document.body.removeChild(uP), document.body.removeChild(uQ))
		}, this.uX = function() {
			var rp = b9.qV.ro(.1),
				rn = b9.qV.ro(.08 + .04 * (h.uY < 1));
			return {
				rp: rp,
				rn: rn,
				uZ: h.j / h.k - rp - rn
			}
		}, this.resize = function(s7) {
			var ej = uN.length,
				ua = this.uX(),
				rp = ua.rp,
				rn = ua.rn;
			for (uP.style.height = b9.qV.qe(rp), b9.qV.qf(uP, 2), uQ.style.top = b9.qV.qe(h.j / h.k - rn), uQ.style.height = b9.qV.qe(rn), b9.qV.qf(uQ, 8), sW.style.top = b9.qV.qe(rp), sW.style.height = sW.style.maxHeight = b9.qV.qe(ua.uZ), uP.style
				.font = b9.qV.sJ(0, b9.qV.ro(.02, .3)), uQ.style.font = b9.qV.sJ(0, b9.qV.ro(.02, .7)), sW.style.font = b9.qV.sJ(0, b9.qV.ro(.02, .7)), aB = 1; aB < ej; aB++) b9.qV.qf(uN[aB].button, 4);
			for (var s8 = 0, aB = 0; aB < ej; aB++) s8 += uN[aB].button.offsetWidth;
			if (s7 && s8 < uQ.offsetWidth)
				for (aB = 0; aB < ej; aB++) uN[aB].button.style.width = (100 * uN[aB].button.offsetWidth / s8).toFixed(2) + "%";
			else
				for (aB = 0; aB < ej; aB++) uN[aB].button.style.width = "auto";
			uQ.tC && (uQ.scrollLeft = uQ.tC), s7 || this.resize(!0)
		}, this.ub = function() {
			var ua = this.uX(),
				f4 = h.k;
			uc.fillStyle = bA.na, uc.fillRect(0, f4 * ua.rp, h.i, f4 * ua.uZ)
		}, st.style.position = "absolute", st.style.top = "0", st.style.left = "0", st.style.width = "100%", st.style.height = "100%", uP.style.position = "absolute", uP.style.top = "0", uP.style.left = "0", uP.style.width = "100%", uP.style
		.display = "flex", uP.style.backgroundColor = bA.na, uQ.style.position = "absolute", uQ.style.left = "0", uQ.style.width = "100%", b9.qV.sz(uQ), uR.style.height = uR.style.maxHeight = "100%", sW.style.position = "absolute", sW.style.width =
		"100%", sW.style.backgroundColor = bA.na,
		function() {
			for (var aB = 0; aB < uN.length; aB++) uN[aB].button.style.height = "100%", uN[aB].button.style.padding = "0.0em 0.9em"
		}();
	for (var aB = 0; aB < uN.length; aB++) uR.appendChild(uN[aB].button);
	uP.appendChild(function() {
		var uW = document.createElement("h1");
		return uW.textContent = title, uW.style.margin = "auto", uW.style.fontSize = 20 < title.length && h.j > h.i ? "1.8em" : "2.3em", uW.style.webkitTextStroke = "0.02em brown", uW.style.fontFamily = "Arial Black, Trebuchet MS", uW
	}()), uQ.appendChild(uR), !1 !== uO && (st.appendChild(sW), st.appendChild(uP), st.appendChild(uQ))
}

function rS(ud, ue, uf, ug) {
	var self;
	this.rT = document.createElement("span"), (self = this).rT.textContent = ud, self.rT.style.color = bA.ne, self.rT.style.position = "absolute", self.rT.style.font = "inherit", ug ? self.rT.style.bottom = "0.06em" : self.rT.style.top = "0.12em",
		uf ? self.rT.style.left = "0.2em" : self.rT.style.right = "0.2em", self.rT.style.fontSize = "0.6em", self.rT.style.pointerEvents = "none", self.rT.style.whiteSpace = "pre", ue.style.position = "relative", ue.style.overflow = "hidden", ue
		.appendChild(self.rT)
}

function t1(ud, ue, uh, ui, uj) {
	var self;
	this.rT = document.createElement("span"), this.resize = function() {
			this.rT.style.fontSize = ((ui - uh) * ue.offsetHeight).toFixed(1) + "px"
		}, (self = this).rT.textContent = ud, self.rT.style.color = bA.ne, self.rT.style.font = "inherit", self.rT.style.margin = "0.1em 0.6em", self.rT.style.pointerEvents = "none", uj && (self.rT.style.fontWeight = "bold"), self.rT.style
		.whiteSpace = "nowrap", self.rT.style.display = "block", ue.appendChild(self.rT)
}

function uk(ul, um, un, uo) {
	var up = document.createElement("textarea"),
		uq = (this.e = up, !0);

	function uw() {
		up.select(), document.execCommand("copy")
	}
	this.resize = function() {
			um && b9.qV.qf(up, 5)
		}, this.ur = function(us) {
			up.value = us
		}, this.ut = function() {
			return up.value
		}, this.uu = function() {
			up.select()
		}, this.clear = function() {
			up.value = ""
		}, this.uv = function() {
			uq && navigator.clipboard ? (up.select(), navigator.clipboard.writeText(up.value).catch(function() {
				uq = !1, uw()
			})) : uw()
		}, up.setAttribute("id", "textArea" + t.y.sQ++), up.setAttribute("autocomplete", "off"), ul && up.setAttribute("placeholder", ul), up.style.top = "0", up.style.left = "0", up.style.width = "100%", up.style.height = "100%", up.style
		.userSelect = "none", up.style.outline = "none", up.style.resize = "none", up.style.border = "none", up.style.color = bA.ne, up.style.backgroundColor = bA.nX, uo ? (up.style.fontSize = "1em", up.rows = 6, up.style.padding = "0.25em") : (up
			.style.padding = "0.45em", up.style.fontSize = "1.2em"), un && up.addEventListener("input", function(e) {
			un(e)
		}), up.addEventListener("focus", function() {
			h.sR++
		}), up.addEventListener("blur", function() {
			h.sR--
		})
}

function dF() {
	this.qm = new ux, this.eG = new uy, this.rw = new uz, this.y = new v0, this.dZ = function() {
		this.eG.dZ(), (new v1).dZ()
	}
}

function uy() {
	function v2(aB, type, v9, dr) {
		bi.eG.data.push({
			e4: aB,
			type: type || 0,
			value: v9 || 0,
			v9: v9 || 0,
			dr: dr || 0
		})
	}

	function v3(aB, type, v9, dr) {
		bi.eG.data.push({
			e4: aB,
			type: type,
			value: v9 || "",
			v9: v9 || "",
			dr: dr || 0
		})
	}

	function v4(nM) {
		for (var aB = bi.eG.data.length; aB < nM; aB++) bi.eG.data.push(null)
	}
	this.data = [], this.dZ = function() {
		v2(0, 1, 0, 5), v2(1, 1, 1), v2(2, 0), v3(3, 2), v2(4, 1), v3(5, 2, "Trebuchet MS", 1), v2(6, 0), v2(7, 0, 0), v2(8, 0), v2(9, 1, 1), v2(10, 1), v2(11, 1, 1), v3(12, 2, navigator.language), v2(13), v2(14), v4(100), v3(100, 2), v3(101, 2),
			v3(102, 2), v3(103, 2), v3(104, 2), v3(105, 2), v3(106, 2), v2(107), v2(108), v2(109), v3(110, 2), v2(111), v2(112), v2(113), v3(114, 2), v2(115), v3(116, 2), v2(117, 1), v3(118, 2, "", 2), v2(119, 1, 0, 1), v3(120, 2), v2(121, 1, ~~(
				262144 * Math.random())), v3(122, 2, "Player " + Math.floor(1e3 * Math.random())), v2(123), v3(124), v2(125, 1), v3(126, 2), v2(127, 0, 1), v2(128), v2(129), v2(130), v2(131), v2(132), v3(133, 2), v2(134, 0, 5), v3(135, 2), v3(
				136, 2), v2(137), v2(138), v2(139), v2(140), v2(141), v2(142), v2(143), v2(144), v3(145, 2), v2(146), v2(147), v3(148, 2), v2(149), v2(150, 0, 1), v3(151, 2), v2(152, 0, 5), v2(153, 1), v2(154, 1), v3(155, 2), v3(156, 2), v2(157),
			v2(158), v2(159), v2(160), v4(180), v2(180, 0), v2(181, 0)
	}, this.rx = function(e4, value) {
		this.data[e4].value = value
	}, this.v5 = function(e4, value) {
		this.rx(e4, value), bi.qm.save(e4, String(value)), bi.qm.save(e4, String(this.data[e4].dr), !0)
	}, this.v6 = function() {
		for (var aB = 0; aB < this.data.length; aB++) this.data[aB] && (bi.qm.save(aB, String(this.data[aB].value)), bi.qm.save(aB, String(this.data[aB].dr), !0))
	}, this.v7 = function(e4) {
		return Number(this.data[e4].value)
	}, this.v8 = function(e4) {
		return String(this.data[e4].value)
	}
}

function ux() {
	this.vA = function(e4, dr) {
		return Number(this.vB(e4, dr))
	}, this.vB = function(e4, dr) {
		var fB = null;
		return 0 === a0.id ? a0.vC && (fB = a0.vC.getItem((dr ? "v" : "d") + e4)) : 1 === a0.id ? fB = a0.vD.loadString((dr ? 1e3 : 2e3) + e4) : 2 === a0.id && (fB = a0.vE[(dr ? "v" : "d") + e4]), fB && 0 !== fB.length ? fB : null
	}, this.vF = function(ej, vG) {
		var g = [],
			vH = vG ? "e" : "l";
		if (0 === a0.id) {
			if (a0.vC)
				for (aB = 0; aB < ej; aB++) g.push(a0.vC.getItem(vH + aB))
		} else if (1 === a0.id)
			for (var vI = vG ? 5e3 : 3e3, aB = 0; aB < ej; aB++) g.push(a0.vD.loadString(vI + aB));
		else if (2 === a0.id)
			for (aB = 0; aB < ej; aB++) g.push(a0.vE[vH + aB]);
		return g
	}, this.save = function(e4, value, dr) {
		var vJ = (dr ? "v" : "d") + e4;
		if (0 === a0.id) {
			if (a0.vC && bi.eG.data[140].value) try {
				a0.vC.setItem(vJ, value)
			} catch (e) {
				console.log(e)
			}
		} else 1 === a0.id ? a0.vD.saveString((dr ? 1e3 : 2e3) + e4, value) : 2 === a0.id && (a0.vE[vJ] = value, a0.vK.postMessage(vJ + " " + value))
	}, this.vL = function(g, vG) {
		var ej = g.length,
			vH = vG ? "e" : "l";
		if (0 === a0.id) {
			if (a0.vC && bi.eG.data[140].value) try {
				for (aB = 0; aB < ej; aB++) a0.vC.setItem(vH + aB, g[aB])
			} catch (e) {
				console.log(e)
			}
		} else if (1 === a0.id)
			for (var vI = vG ? 5e3 : 3e3, aB = 0; aB < ej; aB++) a0.vD.saveString(vI + aB, g[aB]);
		else if (2 === a0.id)
			for (aB = 0; aB < ej; aB++) a0.vE[vH + aB] = g[aB], a0.vK.postMessage(vH + aB + " " + g[aB])
	}
}

function v1() {
	this.dZ = function() {
		! function() {
			var data = bi.eG.data;
			0 === data[2].dr && (h.j > h.i || 0 !== a0.id) && (data[2].value = data[2].v9 = 1);
			0 === data[100].dr && (data[100].value = data[100].v9 = (0 === a0.id ? "Player " : 1 === a0.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var aB, fB, data = bi.eG.data,
			ej = data.length;
		for (aB = 0; aB < ej; aB++) data[aB] && data[aB].dr === bi.qm.vA(aB, !0) && (fB = bi.qm.vB(aB), data[aB].value = null === fB ? data[aB].v9 : 2 === data[aB].type ? fB : Number(fB))
	}
}

function v0() {
	function vR(g) {
		if (0 === g.length) bi.rw.rx(116, "");
		else {
			for (var vU = g[0], aB = 1; aB < g.length; aB++) vU += ";" + g[aB];
			bi.rw.rx(116, vU)
		}
	}
	this.vO = function() {
		bi.eG.data[110].value.length && (bi.eG.data[106].value = bi.eG.data[110], bi.rw.rx(110, ""), this.vP())
	}, this.vP = function() {
		var g = bi.eG.data[116].value.split(";");
		for (g.length % 2 == 1 && g.pop(), g.unshift(bi.eG.data[106].value), g.unshift(bi.eG.data[105].value), aB = 2; aB < g.length; aB += 2)
			if (g[aB] === g[0]) {
				g.splice(aB, 2);
				break
			} for (var vQ = [], aB = 0; aB < g.length; aB += 2) vQ.push(g[aB]);
		vR(g), bi.eG.data[117].value = 0, bi.eG.data[117].uL = vQ
	}, this.vS = function(e4) {
		bi.eG.data[117].uL.splice(e4, 1), bi.eG.data[117].value = Math.min(e4, bi.eG.data[117].uL.length - 1);
		var g = bi.eG.data[116].value.split(";");
		g.splice(2 * e4, 2), vR(g)
	}, this.vT = function(e4) {
		var g = bi.eG.data[116].value.split(";");
		return {
			sh: g[2 * e4],
			password: g[2 * e4 + 1]
		}
	}, this.vV = function() {
		var fB = bK.hs(bi.eG.data[121].value, -1, 262143);
		return fB = -1 === fB ? ~~(262144 * Math.random()) : fB
	}
}

function uz() {
	this.rx = function(e4, value) {
		bi.eG.data[e4].value !== value && (bi.eG.v5(e4, value), 0 === e4 ? (t.x(), b6.dZ(), t.u(2)) : 1 === e4 ? h.dk(1) : 2 === e4 ? h.dk(0) : 5 === e4 && (b9.qV.vW(), h.dk(0)))
	}, this.vX = function() {
		for (var data = bi.eG.data, aB = 0; aB < 100; aB++) data[aB] && bi.eG.v5(aB, data[aB].v9);
		b9.qV.vW(), h.dk(1), b6.dZ()
	}, this.vY = function() {
		for (var data = bi.eG.data, aB = 0; aB < data.length; aB++) data[aB] && bi.eG.rx(aB, data[aB].v9)
	}, this.vZ = function() {
		for (var f3 = bi.eG, aB = 128; aB < 135; aB++) f3.v5(aB, f3.data[aB].v9)
	}, this.va = function(data) {
		bi.rw.rx(109, data.si), bi.rw.rx(107, data.vb), bi.rw.rx(108, data.vc), bi.rw.rx(112, data.vd), bi.rw.rx(111, data.ve), bi.rw.rx(113, data.vf), bi.rw.rx(135, data.vg), bi.rw.rx(136, data.vh), bi.rw.rx(137, data.vi), bi.rw.rx(138, data
			.vj), bi.rw.rx(139, data.vk), bi.rw.rx(141, data.vl), bi.rw.rx(142, data.vm), bi.rw.rx(143, data.vn), bi.rw.rx(144, data.vo)
	}
}

function c2() {
	this.sm = new vp, this.vq = new vr, this.vs = new vt, this.dZ = function() {
		this.sm.dZ()
	}
}

function vr() {
	this.vu = function(size) {
		for (var vv = bG, g = [], aB = 0; aB < size; aB++) g.push(String.fromCharCode(vv.pc(16)));
		return g.join("")
	}, this.vw = function(qC) {
		return 20 < (qC = qC.trim()).length ? qC.substring(0, 20) : qC
	}
}

function vp() {
	var vx = new Uint8Array(78);
	this.dZ = function() {
		var aB;
		for (vx[50] = 37, aB = 0; aB < 10; aB++) vx[aB + 3] = aB + 1;
		for (aB = 0; aB < 26; aB++) vx[aB + 20] = aB + 11, vx[aB + 52] = aB + 38
	}, this.vy = function(qC) {
		return qC.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.vz = function(qC, size) {
		if ((qC = this.vy(qC)).length > size) return qC.substring(0, size);
		for (; qC.length < size;) qC = "-" + qC;
		return qC
	}, this.w0 = function(qC) {
		for (var w1 = vx, ej = qC.length, g = new Uint8Array(ej), aB = 0; aB < ej; aB++) g[aB] = w1[qC.charCodeAt(aB) - 45];
		return g
	}, this.w2 = function(w3) {
		bC.a7(6 * w3.length), this.w4(w3), bG.dZ(bC.aC)
	}, this.w4 = function(w3) {
		for (var ej = w3.length, i = bC, aB = 0; aB < ej; aB++) i.a8(6, w3[aB])
	}, this.w5 = function(qC) {
		this.w4(this.w0(qC))
	}, this.w6 = function(qC, size) {
		this.w4(this.w0(this.vz(qC, size)))
	}, this.w7 = function(qC, size) {
		for (var g = this.w0(this.vz(qC, size)), fB = 0, nG = 1, aB = g.length - 1; 0 <= aB; aB--) fB += nG * g[aB], nG *= 64;
		return fB
	}
}

function w8() {
	var i, j, w9;

	function wZ(hB, em, wX, wE, wS) {
		em = wY(hB, em + 1 + 2 * wE & 3);
		! function(hB, ki) {
			return 1 < Math.abs(hB % i - ki % i) || 1 < Math.abs(wc(hB) - wc(ki))
		}(hB, em) && 0 === wS[em << 2] && (wS[em << 2] = wX)
	}

	function wc(gH) {
		return Math.floor((gH + .5) / i) % j
	}

	function wY(gH, em) {
		return gH + w9[em]
	}
	this.wA = function(qC) {
		var aB, wB, ej, wC, vv = bG;
		for (bF.sm.w2(bF.sm.w0(qC)), bR.wF.wG[bR.eP].i = bR.eu = i = vv.pc(12), bR.wF.wG[bR.eP].j = bR.ev = j = vv.pc(12), w9 = [-i, -1, i, 1], bR.wP = document.createElement("canvas"), bR.wP.width = bR.eu, bR.wP.height = bR.ev, bR.wL = bR.wP
			.getContext("2d", {
				alpha: !1
			}), bR.wM = bR.wQ = null, bR.wM = bR.wL.getImageData(0, 0, bR.eu, bR.ev), bR.wQ = bR.wM.data, b9.qd.wR(bR.wQ), ej = vv.pc(12), wB = vv.pc(5), wC = wI(i * j - 1), aB = 0; aB < ej; aB++) ! function(l0, gH, wD, wE) {
			var aB, em, vv = bG,
				wS = bR.wQ,
				wT = gH,
				wU = gH,
				wV = 0,
				wW = 1 + wD,
				wX = 2 - wD;
			for (wS[gH << 2] = wW, aB = 0; aB < l0; aB++) em = vv.pc(2), gH = wY(gH, em), wS[gH << 2] === wW ? wV % 2 == 1 && wZ(wU, wV + 2 * wE + 3, wX, wE, wS) : wS[gH << 2] = wW, wZ(gH, em, wX, wE, wS), wZ(wU, em, wX, wE, wS), wU = gH,
				wV = em;
			wY(gH, 0) === wT ? (wZ(gH, 0, wX, wE, wS), wZ(wT, 0, wX, wE, wS)) : wY(gH, 1) === wT && (wZ(gH, 0, wX, wE, wS), wZ(wT, 2, wX, wE, wS));
			0 === l0 && (wZ(wT, 0, wX, wE, wS), wZ(wT, 2, wX, wE, wS))
		}(vv.pc(wB), vv.pc(wC), 1 === vv.pc(1), 1 === vv.pc(1));
		var eq, es, hc, wd, we, wf, wS = bR.wQ,
			wg = !0,
			wh = bR.wF.wG[bR.eP].wh,
			wi = bR.wF.wG[bR.eP].wi;
		for (es = 0; es < j; es++)
			for (wd = !0, we = wg, eq = wf = 0; eq < i; eq++) hc = 4 * es * i + 4 * eq, wf <= eq && 0 < wS[hc] && (we = 2 === wS[hc], wd) && (wd = !1, we !== wg) ? (wg = we, wf = eq + 1, eq = -1) : (we ? (wS[hc] = wi[0], wS[1 + hc] = wi[1], wS[
				2 + hc] = wi[2]) : (wS[hc] = wh[0], wS[1 + hc] = wh[1], wS[2 + hc] = wh[2]), wS[3 + hc] = 255);
		bR.wL.putImageData(bR.wM, 0, 0), bR.wN = !0, bR.wO.dZ(), be.dh = !0
	}
}

function vt() {
	this.wA = function(wj) {
		for (var vv = bG, size = vv.pc(wj), wk = 7 + 9 * vv.pc(1), g = [], aB = 0; aB < size; aB++) g.push(String.fromCharCode(vv.pc(wk)));
		return g.join("")
	}
}

function c7() {
	var sE, sF, wl, wm, wn, wo, wp, wq, wr, ws;

	function wu() {
		var wx = aD.wx;
		for (wr = wx; wr < aD.eg; wr++) wt();
		for (wr = aD.h7 ? aD.k7 : 0; wr < wx; wr++) {
			if (!wy()) {
				for (var f3 = aD.x2 = wr; f3 < wx; f3++) wr = f3, wt();
				return
			}
			x1(wo + sE * wn + bK.dq(wn, 2), wp + sF * wn + bK.dq(wn, 2))
		}
	}

	function xU(player) {
		for (var ia = ag.ia, ic = ag.ic, ib = ag.ib, ie = ag.ie, es = ic[player]; es <= ie[player]; es++)
			for (var eq = ia[player]; eq <= ib[player]; eq++) {
				var eN = ac.xV(eq, es);
				ac.gJ(eN) && (ac.jJ(eN) ? ac.gE(eN, player) : ac.xW(eN, player))
			}
	}

	function xT(g, t3, t4) {
		var dp = g[t3];
		g[t3] = g[t4], g[t4] = dp
	}

	function wy() {
		return function() {
			var aB;
			for (aB = 0; aB < 8; aB++)
				if (sE = bK.dq(wl * ax.random(), ax.value(100)), sF = bK.dq(wm * ax.random(), ax.value(100)), xb()) return 1;
			return
		}() || function() {
			var i4, i7, f2, x0, f3, wz;
			for (i4 = bK.dq(wl * ax.random(), ax.value(100)), i7 = bK.dq(wm * ax.random(), ax.value(100)), f2 = 40; 1 <= f2; f2--)
				for (x0 = wm - f2; 0 <= x0; x0 -= 40)
					for (sF = (x0 + i7) % wm, f3 = 40; 1 <= f3; f3--)
						for (wz = wl - f3; 0 <= wz; wz -= 40)
							if (sE = (wz + i4) % wl, xb()) return 1;
			return
		}()
	}

	function xb() {
		for (var gH, xd, gap = bK.dq(wn - wq, 2), xe = wp + sF * wn + gap, xf = wo + sE * wn + gap, xc = xe + wq - 1; xe <= xc; xc--)
			for (xd = xf + wq - 1; xf <= xd; xd--)
				if (gH = ac.xV(xd, xc), !ac.ee(gH) || ac.jJ(gH)) return;
		return 1
	}

	function x1(wz, x0) {
		wt(), xg(wz - 2, x0 - 2)
	}

	function wt() {
		ag.me[wr] = 0, ag.gX[wr] = ag.xR[wr] = 0, ag.gB[wr] = [], ag.gP[wr] = [], ag.gQ[wr] = [], ag.f9[wr] = [], ag.ia[wr] = ag.ic[wr] = ag.ib[wr] = ag.ie[wr] = 0
	}

	function xg(wz, x0) {
		var gH, aB, xh, xi;
		for (ag.me[wr] = 1, ag.ia[wr] = wz + 10, ag.ic[wr] = x0 + 10, ag.ie[wr] = ag.ib[wr] = 0, xh = wz; xh < wz + 4; xh++)
			for (xi = x0; xi < x0 + 4; xi++)(wz < xh && xh < wz + 3 || x0 < xi && xi < x0 + 3) && (gH = ac.xV(xh, xi), ac.ee(gH)) && (ag.ia[wr] = Math.min(xh, ag.ia[wr]), ag.ib[wr] = Math.max(xh, ag.ib[wr]), ag.ic[wr] = Math.min(xi, ag.ic[wr]), ag
				.ie[wr] = Math.max(xi, ag.ie[wr]), ws[ag.gX[wr]] = gH, ag.gX[wr]++, ac.xW(gH, wr));
		for (ag.xR[wr] = ag.gX[wr], aB = ag.gX[wr] - 1; 0 <= aB; aB--) ac.xj(ws[aB], wr) ? (ac.gE(ws[aB], wr), ag.gP[wr].push(ws[aB])) : ac.xk(ws[aB]) ? (ac.gE(ws[aB], wr), ag.gQ[wr].push(ws[aB])) : ac.xl(ws[aB]) && (ac.gE(ws[aB], wr), ag.f9[wr]
			.push(ws[aB]))
	}

	function xa(wz, x0) {
		for (var gH, xd, xc = x0; x0 - 6 < xc; xc--)
			for (xd = wz; wz - 6 < xd; xd--)
				if (gH = ac.xV(xd, xc), ac.jJ(gH)) return;
		return 1
	}
	this.dZ = function() {
		if (ws = new Array(12), wq = 6, wn = 10, wl = bK.dq(bR.eu, wn), wm = bK.dq(bR.ev, wn), wo = bK.dq(bR.eu - wn * wl, 2), wp = bK.dq(bR.ev - wn * wm, 2), aD.h7)
			for (var aB = 0; aB < aD.k7; aB++) wr = aB, wt(), ag.me[wr] = 1;
		(0 === aD.data.spawningType ? wu : 1 === aD.data.spawningType ? (wu(), function() {
			var x3 = aD.x4;
			aD.x5 || x3++;
			if (!(x3 < 3)) {
				for (var data = aD.data, jO = (aD.h7 ? aD.k7 : 0) + data.teamPlayerCount[0], nM = aD.x2, x6 = new Uint32Array(x3), x7 = new Uint32Array(x3), x8 = new Uint16Array(x3), x9 = new Uint16Array(x3), eh = bf.eh, ia = ag.ia, ic =
						ag.ic, ib = ag.ib, ie = ag.ie, fO = bN.fO, fP = bN.fP, aB = jO; aB < nM; aB++) fO[aB] = ia[aB] + ib[aB] >> 1, fP[aB] = ic[aB] + ie[aB] >> 1;
				for (aB = jO; aB < nM; aB++) {
					var id = eh[aB];
					x6[id] += fO[aB], x7[id] += fP[aB]
				}
				var kU = bf.kU;
				for (aB = 1; aB < x3; aB++) {
					var gC = Math.max(data.teamPlayerCount[kU[aB]], 1);
					x8[aB] = bK.dq(x6[aB], gC), x9[aB] = bK.dq(x7[aB], gC)
				}
				var xA = bf.xA,
					xB = bf.xB,
					xC = bf.xC,
					fN = bN.fN;
				for (aB = 0; aB < 512; aB++) fN[aB] = aB;
				for (var e3 = 0; e3 < 2 + (4 <= x3); e3++)
					for (aB = jO; aB < nM; aB++) {
						for (var hB = aB, xD = fN[hB], xE = 1, ez = bK.xF(fO[xD] - x8[1], fP[xD] - x9[1]), f2 = 2; f2 < x3; f2++) {
							var xG = bK.xF(fO[xD] - x8[f2], fP[xD] - x9[f2]);
							xG < ez && (ez = xG, xE = f2)
						}
						var xH = eh[hB];
						if (xE !== xH) {
							if (2 === e3 && 4 <= x3) {
								var xI = Math.max((xE + 1) % x3, 1),
									xJ = bK.xF(fO[xD] - x8[xI], fP[xD] - x9[xI]);
								for (f2 = 1; f2 < x3; f2++) xG = bK.xF(fO[xD] - x8[f2], fP[xD] - x9[f2]), ez < xG && xG < xJ && (xJ = xG, xI = f2);
								xI !== xH && bK.xF(x8[xH] - x8[xI], x9[xH] - x9[xI]) < bK.xF(x8[xH] - x8[xE], x9[xH] - x9[xE]) && (xE = xI)
							}
							var xK = kU[xE],
								xL = xB[xK] + (aD.h7 ? 0 : xC[xK]),
								ki = xA[xL],
								xM = fN[ki],
								xN = xB[xK + 1];
							ez = bK.xF(fO[xM] - x8[xH], fP[xM] - x9[xH]);
							for (var f4 = xL + 1; f4 < xN; f4++) {
								var xO = xA[f4],
									xP = fN[xO];
								(xG = bK.xF(fO[xP] - x8[xH], fP[xP] - x9[xH])) < ez && (ez = xG, ki = xO)
							}
							ki < jO || nM <= ki || (xM = fN[ki], x6[xH] += fO[xM] - fO[xD], x7[xH] += fP[xM] - fP[xD], x6[xE] += fO[xD] - fO[xM], x7[xE] += fP[xD] - fP[xM], gC = data.teamPlayerCount[kU[xH]], x8[xH] = bK.dq(x6[xH], gC),
								x9[xH] = bK.dq(x7[xH], gC), gC = data.teamPlayerCount[xK], x8[xE] = bK.dq(x6[xE], gC), x9[xE] = bK.dq(x7[xE], gC), fN[hB] = xM, fN[ki] = xD)
						}
					}! function() {
						for (var fN = bN.fN, ia = ag.ia, ic = ag.ic, ib = ag.ib, ie = ag.ie, gX = ag.gX, xR = ag.xR, gP = ag.gP, gQ = ag.gQ, f9 = ag.f9, aB = 0; aB < 512; aB++) {
							var xS = fN[aB];
							if (xS !== aB) {
								xT(ia, aB, xS), xT(ic, aB, xS), xT(ib, aB, xS), xT(ie, aB, xS), xT(gX, aB, xS), xT(xR, aB, xS), xT(gP, aB, xS), xT(gQ, aB, xS), xT(f9, aB, xS), xU(aB), xU(xS), fN[aB] = aB;
								for (var j = xS, gI = fN[j]; gI !== aB;) gI = fN[j = gI];
								fN[j] = xS
							}
						}
					}()
			}
		}) : function() {
			var wx = aD.wx;
			for (wr = wx; wr < aD.eg; wr++) wt();
			for (wr = aD.h7 ? aD.k7 : 0; wr < wx; wr++)
				if (! function() {
						var spawningData = aD.data.spawningData,
							wz = spawningData[2 * wr] + 1,
							spawningData = spawningData[2 * wr + 1] + 1;
						if (3 < wz && wz < bR.eu - 5 && 3 < spawningData && spawningData < bR.ev - 5 && ac.ee(ac.xV(wz, spawningData)) && xa(wz + 3, spawningData + 3)) return x1(wz + 1, spawningData + 1), 1;
						return
					}()) {
					if (!wy()) {
						for (var f3 = aD.x2 = wr; f3 < wx; f3++) wr = f3, wt();
						return
					}
					var wz = wo + sE * wn + bK.dq(wn, 2),
						x0 = wp + sF * wn + bK.dq(wn, 2);
					x1(wz, x0)
				}
		})(), bc.ma[7] = ag.gX[aD.eT]
	}, this.xm = function(jH, xn, xo) {
		var aB, wz, x0, gH, sE, sF;
		for (wr = jH, aB = 0; aB < 20; aB++)
			for (wz = xn + aB; xn - aB <= wz; wz--)
				for (x0 = xo + aB; xo - aB <= x0; x0--)
					if ((wz === xn + aB || wz === xn - aB || x0 === xo + aB || x0 === xo - aB) && 3 < wz && wz < bR.eu - 5 && 3 < x0 && x0 < bR.ev - 5 && ac.ee(ac.xV(wz, x0)) && xa(wz + 3, x0 + 3)) {
						if (0 < ag.gX[wr]) {
							for (sF = sE = gH = void 0, sE = ag.ib[wr]; sE >= ag.ia[wr]; sE--)
								for (sF = ag.ie[wr]; sF >= ag.ic[wr]; sF--) gH = 4 * (sF * bR.eu + sE), ac.xq(wr, gH) && (ac.xr(gH), ag.gX[wr]--);
							wt()
						}
						return xg(wz - 1, x0 - 1), !0
					} return !1
	}, this.xs = function(jH) {
		wr = jH, wy() ? x1(wo + sE * wn + bK.dq(wn, 2), wp + sF * wn + bK.dq(wn, 2)) : wt()
	}
}

function xt() {
	ar.xu(), uc.setTransform(hv, 0, 0, hv, 0, 0), uc.imageSmoothingEnabled = hv < 3, uc.drawImage(bR.wP, aS.xv(), aS.xw()), bO.xx.ub(), uc.drawImage(xy, aS.xv(), aS.xw()), ar.ub(), bM.ub(), af.ub(), (aD.n7 ? (bg.ub(), bB) : (aN.ub(), aV.ub(), aR
	.ub(), bB.ub(), av.ub(), aW.ub(), aS.ub(), aQ.ub(), bg.ub(), aU.ub(), aP.ub(), aM.ub(), aL.ub(), aX.ub(), bd.ub(), au)).ub(), t.ub()
}

function xz(y0, i, j) {
	y0.clearRect(0, 0, i, j), y0.fillStyle = bA.nb, y0.fillRect(0, 0, i, j)
}

function y1(y0, i, j, y2) {
	y0.fillStyle = bA.ne, y0.fillRect(0, 0, i, y2), y0.fillRect(0, 0, y2, j), y0.fillRect(i - y2, 0, y2, j), y0.fillRect(0, j - y2, i, y2)
}

function y3(y0, eq, es, hg, y2, gH, y4) {
	y0.fillStyle = bA.ne;
	var gH = Math.floor(hg * gH),
		sr = (gH += (gH - y2) % 2, Math.floor((gH - y2) / 2)),
		hg = Math.floor((hg - gH) / 2);
	y0.fillRect(eq + hg, es + hg + sr, gH, y2), y4 && y0.fillRect(eq + hg + sr, es + hg, y2, gH)
}

function y6() {
	this.dZ = function() {
		8 === aD.kP && aN.y7()
	}, this.y8 = function(y9) {
		var elo = aD.data.elo,
			jN = (elo[y9] - elo[1 - y9]) / 10,
			jN = 8 / (1 + Math.pow(2, jN / 32)),
			jN = Math.floor(10 * jN + .5),
			yB = elo[y9] + jN,
			yB = this.yD(yB),
			elo = this.yD(elo[1 - y9] - jN);
		0 === y9 ? aN.yF(yB, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : aN.yF(elo, yB, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"]), ag.yG[y9] < 100 || aN.yH(220, L(24), 40, 0, bA.ne, bA.nb, -1, !1)
	}, this.yD = function(elo) {
		return 16e3 === (elo = bK.hs(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function cc() {
	this.rl = new yI, this.wS = new yJ
}

function yJ() {
	this.hW = !1;
	this.yN = [], this.yO = 100;
	var n4, n5, gap, hg, yK, yM, yP = 0,
		yQ = new Array(9),
		yR = [],
		yS = [],
		yT = 0,
		yU = 0,
		yV = 0,
		yW = 0;

	function yi() {
		yQ.sort(function(f2, f3) {
			return f3.kC - f2.kC
		});
		for (var qC = "" + yQ[0].pE, aB = 1; aB < 9; aB++) qC += "," + yQ[aB].pE;
		for (aB = 0; aB < 9; aB++) qC += "," + yQ[aB].kC;
		bi.eG.v5(120, qC)
	}
	this.dZ = function() {
		for (var yX = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], aB = 0; aB < yX.length; aB++) {
			var color = 6 === yX[aB] ? bA.o4 : bA.nc;
			this.yN.push(b9.canvas.yY(ab.get(3), yX[aB], color))
		}
		for (aB = 0; aB < aj.rl.yZ; aB++) yS.push(aj.rl.ya - aj.rl.yZ + aB);
		for (aB = 0; aB < aj.rl.yb; aB++) yS.push(aj.rl.yc + aB);
		var yd = aj.rl.ye(bJ.yd);
		for (aB = 0; aB < yd.length; aB++) yS.push(yd[aB]);
		! function() {
			var aB, g = bi.eG.data[120].value.split(",");
			if (18 !== g.length)
				for (aB = 0; aB < 9; aB++) yQ[aB] = {
					pE: 1015 + aB,
					kC: 0
				};
			else
				for (aB = 0; aB < 9; aB++) {
					var fB = parseInt(g[aB]),
						f4 = (fB = 0 <= fB && fB < aj.rl.ya ? fB : 0, parseInt(g[aB + 9]));
					f4 = 0 <= f4 && f4 < 1e3 ? f4 : 0, yQ[aB] = {
						pE: fB,
						kC: f4
					}
				}
		}()
	}, this.show = function(lK, lL, yj) {
		var aB;
		if (yT = lK, yU = lL, yP = yj || 0, this.hW = !0, yR = [], 0 === yP)
			for (aB = 0; aB < 9; aB++) yR.push(yQ[aB].pE);
		else {
			var f3 = 49 * yP,
				yj = f3 - 49;
			for (yj >= yS.length && (yP = 1, yj = 0, f3 = 49), aB = yj = (f3 = Math.min(f3, yS.length)) - 49; aB < f3; aB++) yR.push(yS[aB])
		}
		yR.push(1024);
		yj = yR.length, hg = Math.floor((a0.a1.ht() ? .075 : .0468) * h.hu), gap = Math.floor(hg / 3), (yV = 10 * (yK = hg + gap)) > h.i && (yV = h.i, gap = (yK = yV / 10) - (hg = 3 * yK / 4)), yM = bK.dq(yj, 10) + !!(yj % 10), (yW = yM * yK) > h
			.j && (yW = h.j, gap = (yK = yW / yM) - (hg = 3 * yK / 4)), yj = .5 * gap;
		n4 = Math.min(Math.max(lK - .5 * yV + yj, yj), h.i - yV + yj), n5 = Math.min(Math.max(lL - .5 * yW + yj, yj), h.j - yW + yj)
	}, this.gw = function(lK, lL, player) {
		if (!this.hW) return !1;
		if (this.yl(lK, lL)) {
			lK = bK.hs(bK.dq(lK - n4 + .5 * gap, yK), 0, 9);
			if ((lK += 10 * bK.hs(bK.dq(lL - n5 + .5 * gap, yK), 0, 9)) >= yR.length) return aL.rm(), !0;
			lL = yR[lK];
			if (1024 === lL) return this.show(yT, yU, yP + 1), !0;
			! function(pE) {
				for (var aB = 0; aB < 9; aB++) yQ[aB].kC = Math.floor(.99 * yQ[aB].kC);
				for (aB = 0; aB < 9; aB++)
					if (pE === yQ[aB].pE) return yQ[aB].kC = Math.min(yQ[aB].kC + 30, 999), yi();
				yQ.splice(5, 0, {
					pE: pE,
					kC: Math.max(yQ[4].kC, 30)
				}), yQ.pop(), yi()
			}(lL), player === aD.eT ? b7.h9.pD(lL) : b7.g5.pR(lL, player)
		}
		return aL.rm(), !0
	}, this.yl = function(lK, lL) {
		return !(lK < n4 - .5 * gap || lL < n5 - .5 * gap || n4 + yV - .5 * gap <= lK || n5 + yW - .5 * gap <= lL)
	}, this.ub = function() {
		uc.fillStyle = bA.nb, uc.fillRect(n4 - .5 * gap, n5 - .5 * gap, yV, yW);
		for (var hc = .5 * bb.ym, ej = (uc.lineWidth = bb.ym, uc.strokeStyle = uc.fillStyle = bA.ne, uc.strokeRect(n4 - .5 * gap + hc, n5 - .5 * gap + hc, yV - 2 * hc, yW - 2 * hc), uc.imageSmoothingEnabled = !0, yR.length), aB = 0; aB <
			ej; aB++) this.yn(yR[aB], uc, n4 + aB % 10 * yK, n5 + bK.dq(aB, 10) * yK, hg);
		uc.imageSmoothingEnabled = !1
	}, this.yn = function(pE, hm, eq, es, hg) {
		var eN;
		pE >= 1024 - aj.rl.yZ ? (eN = hg / this.yO, hm.setTransform(eN, 0, 0, eN, eq, es), hm.drawImage(this.yN[pE - 1024 + aj.rl.yZ], 0, 0), hm.setTransform(1, 0, 0, 1, 0, 0)) : (b9.qV.textAlign(hm, 1), b9.qV.textBaseline(hm, 1), hm.font = b9.qV
			.sJ(0, .89 * hg), hm.fillText(aj.rl.yo(pE), eq + .5 * hg, es + (.35 - b9.qV.yp + .56) * hg))
	}
}

function yI() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.yZ = 13, this.yb = this.emojis.length, this.yc = 676, this.ya = 1024, this.yq = this.emojis.indexOf("💀"), this.yr = this.yq + 1, this.ys = this.emojis.indexOf("🥇"), this.yt = this.emojis.indexOf("😊"), this.yo = function(fB) {
		return fB < this.yc ? String.fromCharCode(55356, 56806 + bK.dq(fB, 26), 55356, 56806 + fB % 26) : this.emojis[Math.min(fB - this.yc, this.yb - 1)]
	}, this.ye = function(qC) {
		for (var ej = qC.length - 2, g = [], aB = 0; aB < ej; aB++) {
			var yu = qC.charCodeAt(aB) - 56806,
				yv = qC.charCodeAt(aB + 2) - 56806;
			0 <= yu && yu < 26 && 0 <= yv && yv < 26 && (g.push(26 * yu + yv), aB += 3)
		}
		return g
	}, this.yw = function(fB) {
		return fB < this.yc
	}, this.yx = function(fB) {
		return fB >= 1024 - this.yZ
	}, this.yy = function(fB) {
		return fB >= this.yc && fB < this.yc + this.yr
	}
}

function c1() {
	this.sm = new yz, this.vq = new z0, this.vs = new z1, this.dZ = function() {
		this.sm.dZ()
	}
}

function z0() {
	this.w5 = function(qC) {
		for (var ej = qC.length, i = bC, aB = 0; aB < ej; aB++) i.a8(16, qC.charCodeAt(aB))
	}
}

function yz() {
	var z2 = new Uint8Array(64);
	this.dZ = function() {
		var aB;
		for (z2[0] = 45, z2[37] = 95, aB = 0; aB < 10; aB++) z2[aB + 1] = 48 + aB;
		for (aB = 0; aB < 26; aB++) z2[aB + 11] = 65 + aB, z2[aB + 38] = 97 + aB
	}, this.so = function(z3) {
		for (var vv = bG, w3 = new Uint8Array(z3), aB = 0; aB < z3; aB++) w3[aB] = vv.pc(6);
		return w3
	}, this.sn = function(w3) {
		for (var ej = w3.length, z4 = z2, g = [], aB = 0; aB < ej; aB++) g.push(String.fromCharCode(z4[w3[aB]]));
		return g.join("")
	}, this.z5 = function(value, z6) {
		for (var z4 = z2, g = [], aB = 0; aB < z6; aB++) g.push(String.fromCharCode(z4[value >> 6 * (z6 - 1 - aB) & 63]));
		return g.join("")
	}
}

function c9() {
	var z7, z8, z9;
	z7 = [32, 65, 191, 913, 931], z8 = [64, 127, 688, 930, 1155], z9 = new Array(z7.length + 1);
	for (var aB = 0; aB < z9.length; aB++) {
		z9[aB] = 0;
		for (var f2 = aB - 1; 0 <= f2; f2--) z9[aB] += z8[f2] - z7[f2]
	}

	function zF(f4) {
		for (var aB = z7.length - 1; 0 <= aB; aB--)
			if (f4 >= z7[aB] && f4 < z8[aB]) return aB;
		return -1
	}
	this.vw = function(qC) {
		return 0 !== (qC = qC.trim()).indexOf("Bot ") && 0 !== qC.indexOf("[Bot] ") && function(qC, zC, zD) {
			var ej = (qC = qC.trim()).length;
			if (ej < zC || zD < ej) return !1;
			for (var f4, zE = 0, aB = 0; aB < ej; aB++)
				if (f4 = qC.charCodeAt(aB), zE += 65 <= f4 && f4 <= 90 || 1040 <= f4 && f4 <= 1071 ? 1 : 0, -1 === zF(f4)) return !1;
			if (3 < zE && zE > Math.floor(ej / 2)) return !1;
			return !0
		}(qC, 3, 20)
	}, this.zG = function(qC) {
		for (var ej = (qC = qC.trim()).length, g = [], aB = 0; aB < ej; aB++) {
			var f4, gH = zF(f4 = qC.charCodeAt(aB));
			g.push(z9[gH] + f4 - z7[gH])
		}
		return g
	}, this.wA = function(g) {
		for (var f4, f3, qC = "", ej = g.length, aB = 0; aB < ej; aB++)
			for (f3 = 1; f3 < z9.length; f3++)
				if (g[aB] < z9[f3]) {
					f4 = z7[f3 - 1] + g[aB] - z9[f3 - 1], qC += String.fromCharCode(f4);
					break
				} return qC
	}, this.zH = function(qC) {
		for (var g = this.zG(qC), result = "", aB = 0; aB < g.length; aB++) result = (result += g[aB] < 10 ? "00" : g[aB] < 100 ? "0" : "") + g[aB].toString(10);
		return result
	}, this.zI = function(qC) {
		for (var g = new Array(Math.floor(qC.length / 3)), aB = 0; aB < qC.length; aB += 3) g[Math.floor(aB / 3)] = parseInt(qC.substring(aB, aB + 3));
		return this.wA(g)
	}, this.zJ = function(qC) {
		for (var fB, g = [qC.length], aB = 0; aB < qC.length; aB++) g[aB] = qC.charCodeAt(aB) - 48;
		var result = "";
		for (aB = 0; aB < qC.length; aB++) aB === qC.length - 1 || 51 < 10 * g[aB] + g[aB + 1] ? result += g[aB].toString() : (fB = 10 * g[aB] + g[aB + 1], result += String.fromCharCode(fB + (fB < 26 ? 65 : 71)), aB++);
		return result
	}, this.zK = function(qC) {
		for (var f4, result = "", aB = 0; aB < qC.length; aB++) 48 <= (f4 = qC.charCodeAt(aB)) && f4 < 58 ? result += String.fromCharCode(f4) : 65 <= f4 && f4 < 75 ? result += "0" + (f4 - 65).toString() : 75 <= f4 && f4 < 91 ? result += (f4 - 65)
			.toString() : 97 <= f4 && f4 < 123 && (result += (f4 - 71).toString());
		return result
	}, this.zL = function(qC) {
		for (var ej = qC.length, g = [], aB = 0; aB < ej; aB++)(f4 = qC.charCodeAt(aB)) < 58 ? g.push(qC[aB]) : (f4 -= f4 < 91 ? 65 : 71, g.push(String(bK.dq(f4, 10))), g.push(String(f4 - 10 * bK.dq(f4, 10))));
		var ej = g.length - 2,
			f4 = 0,
			w3 = [];
		for (aB = 0; aB < ej; aB += 3) w3[f4++] = parseInt(g[aB] + g[aB + 1] + g[aB + 2]);
		return w3
	}, this.zM = function() {
		for (var e3, zN = "", aB = 0; aB < 6; aB++) e3 = 48 + ax.random() % 36, e3 += 58 <= e3 ? 39 : 0, zN += String.fromCharCode(e3);
		return zN
	}
}

function z1() {
	this.zG = function(qC, wj, zO) {
		for (var zP = [], ej = qC.length, max = 0, aB = 0; aB < ej; aB++) {
			var fB = qC.charCodeAt(aB);
			zP.push(fB), max = Math.max(max, fB)
		}
		var wk = max < 128 ? 7 : 16;
		for (zO.a8(wj, ej), zO.a8(1, +(16 == wk)), aB = 0; aB < ej; aB++) zO.a8(wk, zP[aB])
	}
}

function d7() {
	this.zQ = new zR, this.result = new zS, this.zT = new zU, this.zV = new zW, this.zX = new zY, this.zZ = new za, this.dZ = function() {
		this.result.dZ()
	}
}

function zU() {
	this.zb = function() {
		for (var ej = al.k8, zc = al.k9, zd = [], aB = 0; aB < ej; aB++) {
			var gH = zc[aB];
			b9.g5.ze(gH) && zd.push(gH)
		}
		return zd
	}, this.zf = function() {
		if (0 === bf.kU[aD.zg]) return this.zh();
		bg.le(aD.zg);
		for (var zd = [], ej = bN.fE[0], fN = bN.fN, aB = 0; aB < ej; aB++) {
			var gH = fN[aB];
			b9.g5.ze(gH) && zd.push(gH)
		}
		return zd
	}, this.zh = function() {
		var gH = lg[0];
		return b9.g5.ze(gH) ? [gH] : []
	}, this.zi = function(zd) {
		for (var ej = zd.length, dp = 0, gX = ag.gX, aB = 0; aB < ej; aB++) dp += gX[zd[aB]];
		return dp
	}
}

function zR() {
	function zk() {
		if (2 === aD.zo) return 1;
		av.zp(), aD.zo = 2, aD.zq = aD.zr
	}

	function zm() {
		bQ.zX.zs(), aX.show(1 === aD.zt, !1, 2 === aD.zt), bQ.result.zs(), bQ.zZ.j0(), bQ.zV.j0(), aN.zu(!0), aN.zv(247), aN.zv(956), aN.zv(957), aV.mQ(!0), aW.mQ(!0), av.mQ(), bB.zw(), aD.gs && be.zx.zy(), be.dh = !0, ba.zz(), a0.a1.setState(0)
	}
	this.zj = function() {
		zk() || (aD.zl = 2, zm())
	}, this.zn = function() {
		zk() || (aD.zl = 1, zm())
	}
}

function zW() {
	this.j0 = function() {
		var a07;
		2 === aD.zl ? (aN.a00(0, 59), aH.nD(2700)) : aD.kP < 7 ? (a07 = bf.kU[aD.zg], a07 = bf.a09[a07], aQ.a0A(L(25, [a07]), 2, 1, 12), aN.yH(0, L(26, [a07]), 40, 0, bA.ne, bA.nb, -1, !1), aH.nD(2700)) : 8 === aD.kP ? (aD.zt ? aN.a00(aD.a05,
			2) : aN.a00(1 - aD.eT, 3), aD.a06.y8(aD.a05), aH.mz(aD.a05, 2700, !1, 0)) : 9 === aD.kP ? (aN.a0B(), aH.nD(2700)) : (aN.a0C(aD.a05), aH.mz(aD.a05, 2700, !1, 0))
	}
}

function za() {
	function a0M() {
		var t7;
		return 8 === aD.kP ? 0 : (t7 = Math.floor(ag.yG[aD.eT] / 50), (t7 = Math.min(t7, 400)) / 100)
	}

	function a0E() {
		var t7 = a0M();
		0 !== t7 && aN.yH(440, L(27, [t7.toFixed(2)]), 40, 0, bA.nw, bA.nb, -1, !1)
	}
	this.j0 = function() {
		var a0F;
		0 === bQ.result.a0D || 0 === bQ.result.zd.length || 8 === aD.kP ? b9.g5.gv(aD.eT) && a0E() : (function(a0F) {
			7 !== aD.kP && 10 !== aD.kP || 0 !== aD.zt && aN.yH(600, L(31, [a0F.toFixed(2)]), 40, 0, bA.ne, bA.nb, -1, !1)
		}(a0F = function() {
			aN.yH(520, L(28), 40, 0, bA.ne, bA.nb, -1, !1);
			for (var zd = bQ.result.zd, ej = zd.length, gX = ag.gX, g = [], aB = 0; aB < ej; aB++) {
				var gH = zd[aB];
				g.push({
					gH: gH,
					dp: gX[gH]
				})
			}
			g.sort((f2, f3) => f3.dp - f2.dp);
			var a09 = ag.a0N,
				dp = bQ.result.a0O,
				t7 = bQ.result.a0D,
				qC = "",
				a0F = 0;
			for (aB = 0; aB < ej; aB++) {
				var hU = g[aB].dp * t7 / (100 * dp),
					a0Q = a09[g[aB].gH] + ": " + hU.toFixed(2) + "   ";
				g[aB].gH === aD.eT && (a0F = hU), 2 < aB && 4 !== ej ? 3 === aB && (qC += "(" + L(29, [ej - 3]) + ")") : qC += a0Q
			}
			aN.yH(560, b9.rU.a0R(qC), 40, 0, bA.nw, bA.nb, -1, !1), a0F ? aN.yH(580, L(30, [a0F.toFixed(2) + " + " + a0M().toFixed(2)]), 40, 0, bA.nw, bA.nb, -1, !1) : b9.g5.gv(aD.eT) && a0E();
			return a0F
		}()), 2 === aD.zl || 7 <= aD.kP || function(a0F) {
			var zd = bQ.result.zd,
				ej = zd.length,
				a0S = ag.a0S,
				gX = ag.gX,
				a0T = [];
			loop: for (var aB = 0; aB < ej; aB++) {
				var gH = zd[aB],
					a0U = b9.rU.a0V(a0S[gH]);
				if (null !== a0U) {
					for (var a0W = gX[gH], f3 = a0T.length - 1; 0 <= f3; f3--)
						if (a0U === a0T[f3].name) {
							a0T[f3].dp += a0W, a0T[f3].g.push({
								gH: gH,
								dp: a0W
							});
							continue loop
						} a0T.push({
						name: a0U,
						dp: a0W,
						g: [{
							gH: gH,
							dp: a0W
						}]
					})
				}
			}
			if (0 !== a0T.length) {
				a0T.sort((f2, f3) => f3.dp - f2.dp);
				var g = a0T[0].g,
					a0X = (g.sort((f2, f3) => f3.dp - f2.dp), "[" + a0T[0].name + "]"),
					a0Y = 512 * bQ.result.a0D / 26214400,
					l0 = (aN.yH(0, L(32, [a0X, a0Y.toFixed(4)]), 40, 0, bA.ne, bA.nb, -1, !1), g.length),
					w1 = a0T[0].dp,
					a0Z = 1e4 * a0Y;
				for (aB = 0; aB < l0; aB++)
					if (g[aB].gH === aD.eT) {
						aN.yH(600, L(33, [(a0Z * g[aB].dp / (10 * w1)).toFixed(2)]), 40, 0, bA.ne, bA.nb, -1, !1), aN.yH(640, L(34, [(.2 * a0F).toFixed(2), a0X]), 40, 0, bA.ne, bA.nb, -1, !1);
						break
					} aD.gs || aN.yH(720, L(35) + bJ.a0a, 736, 0, bA.ne, bA.o2, -1, !1)
			}
		}(a0F))
	}, this.a0J = function() {
		var a0K, wT;
		aD.kR || (a0K = ag, wT = aD.eT, 0 === a0K.a0L[wT]) || a0K.jA[wT] < 1 || 2 * a0K.pu[wT] > 3 * (a0K.j9[wT] + a0K.jA[wT]) || a0E()
	}
}

function zS() {
	this.dZ = function() {
		this.a0b = 0, this.zd = [], this.a0O = 0, this.a0D = 0
	}, this.zs = function() {
		var s6;
		aD.kR || (s6 = this, 2 === aD.zl ? s6.zd = bQ.zT.zb() : aD.he ? s6.zd = bQ.zT.zf() : s6.zd = bQ.zT.zh(), s6.a0b = bh.a0d.a0e(), s6.a0O = Math.max(1, bQ.zT.zi(s6.zd)), b7.g5.pa(), 8 === aD.kP ? bQ.result.a0D = 0 : s6.a0D = 100 * bQ.result
			.a0b * (1 + aD.a0g))
	}
}

function zY() {
	this.zs = function() {
		if (2 === aD.zl) aD.zt = 2;
		else {
			if (8 === aD.kP) b9.g5.jV(0) || 0 === ag.me[0] ? aD.a05 = 1 : b9.g5.jV(1) || 0 === ag.me[1] ? aD.a05 = 0 : aD.a05 = +(ag.gX[1] > ag.gX[0]);
			else {
				if (aD.he) {
					var ke = bg.a0i();
					if (aD.zg = ke, bf.kU[ke]) return void(aD.zt = +(bf.eh[aD.eT] === ke))
				}
				aD.a05 = lg[0]
			}
			aD.zt = +(aD.a05 === aD.eT)
		}
	}
}

function dC() {
	this.id = 0, this.dr = 0, this.vC = null, this.vD = null, this.vE = null, this.vK = null, this.a1 = new a0j, this.dZ = function() {
		var self, dr;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (dr = Android.getVersion()) < 12 || (self.dr = dr, self.id = 1, self.vD = Android),
			function(self) {
				var dr;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.vE = mwIOSdataX, self.vK = window.webkit.messageHandlers.iosCommandA, dr = self
					.vE.version, self.dr = dr ? Number(dr) : 0)
			}(this),
			function(self) {
				var vC;
				if (0 === self.id) {
					try {
						if (!(vC = window.localStorage)) return;
						vC.setItem("tls7", "1"), vC.removeItem("tls7")
					} catch (error) {
						return
					}
					self.vC = vC
				}
			}(this)
	}
}

function a0j() {
	this.a0n = function() {
		bi.rw.vX(), bi.rw.vY(), az.y.close(0, 3255), 0 === a0.id ? a0.vC && a0.vC.clear() : 1 === a0.id ? a0.vD.saveString(199, "") : 2 === a0.id && a0.vK.postMessage("clear")
	}, this.a0o = function() {
		2 === a0.id ? a0.vK.postMessage("showConsentForm") : 1 === a0.id && a0.vD.setState(7)
	}, this.a0p = function() {
		this.setState(14)
	}, this.ht = function() {
		return 1 === bi.eG.v7(2)
	}, this.a0q = function() {
		bi.eG.v5(102, "")
	}, this.setState = function(a0r) {
		1 === a0.id && 5 <= a0.dr && a0.vD.setState(a0r)
	}, this.a2 = function() {
		var a0s;
		1 === a0.id && 7 <= a0.dr ? a0.vD.setState(5) : ((a0s = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = a0s.toString())
	}, this.de = function() {
		1 !== a0.id || a0.dr < 17 || a0.vD.saveString(23, document.documentElement.outerHTML)
	}, this.eE = function() {
		0 !== a0.id && (1 === a0.id ? a0.vD.prepareAd("1688441405") : 2 === a0.id && (0 === a0.dr ? a0.vK.postMessage("prepare ad 1770251391") : a0.vK.postMessage("loadAds 1770251391")))
	}, this.eJ = function(dp) {
		return 0 !== a0.id && 1 !== a0.id && 2 === a0.id && (0 === a0.dr ? a0.vK.postMessage("show ad " + dp) : a0.vK.postMessage("showAd"), !0)
	}, this.dj = function() {
		2 === a0.id && a0.dr < 23 && t.u(4, 1, new v("App Update Required", "A new iOS app version with bug fixes has been published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + bJ.a0t + "' target='_blank'>" +
			bJ.a0t + "</a>", !0, [new w("⬅️ " + L(36), function() {
				t.u(0)
			}, bA.oJ)]))
	}
}

function dR() {
	function a0w(e) {
		lP(e), t.u(4, 5, new v("🚀 New Game Update", "The game has been updated! Please reload the game." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new w("⬅️ " + L(36), function() {
				t.a0z()
			}), new w("🔄 Reload", function() {
				a0.a1.a2()
			}, bA.o1)]))
	}

	function a17(e) {
		lP(e), t.u(4, 5, new v(L(37), a13(e), !0))
	}

	function a13(e) {
		var qC = " [" + e + "]";
		return 3249 === e || 1006 === e ? "No Internet / No Server Response" + qC : 4527 === e ? "Player already in lobby" + qC : 4530 === e ? "Lobby Timeout" + qC : 4528 === e ? "Lobby Kick: Another login detected." + qC : 4540 === e ?
			"You have been kicked." + qC : 4495 === e ? "Account doesn't exist." : 4229 === e ? "Bad Internet / Unresponsive Client" + qC : "Unknown error" + qC
	}

	function lP(e) {
		a11(e), t.y.z()
	}

	function a11(e) {
		var a0r = aa.a10();
		6 === a0r ? az.y.a19(e) : bm.a0x ? (t.x(), bm.u5(), az.y.close(az.y.a0y, 3256)) : 8 === a0r && aD.a1A(!0)
	}
	this.p = [], this.a0u = function(a0v, e) {
		if (this.p.push(e), 8 === t.sj && 0 === a0v)
			if (4211 === e) a0w(e);
			else {
				if (bm.a0x && (4495 === e || 4480 === e) && az.y.a0y !== a0v) return void t.a0z();
				if (8 !== aa.a10() && a11(), 4480 === e) return bi.rw.vZ(), void t.u(4, 0, new v(L(39), L(40), !0));
				t.u(4, 0, new v(L(37), a13(e), !0))
			}
		else {
			var a0r = aa.a10();
			if (6 === a0r) {
				if (4211 === e) return void a0w(e);
				if (4215 !== e && 4516 !== e && 4527 !== e && 4533 !== e && 4528 !== e) return void aZ.a14(a0v)
			} else {
				if (!bm.a0x) return 8 === a0r ? void(a0v !== az.y.a15 || aD.kR || 1 !== aD.zo || aD.gs || aN.a16(L(38, [e]))) : void 0;
				if (a0v !== az.y.a0y) return
			}
			a17(e)
		}
	}, this.a18 = function(e) {
		this.p.push(e), 8 === aa.a10() ? aD.kR || 1 !== aD.zo || aN.a16(L(38, [e])) : a17(e)
	}, this.s = function() {
		this.p.push(3268), lP(3268)
	}
}

function d1() {
	var a1B, a1C, a1D = -15e3,
		a1E = !1;

	function gw(e) {
		a1Y() || (a1E = !0, a1Z(e, 1), az.y.a1a(az.y.a15), a1b(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY)))
	}

	function a1N(e) {
		a1D = be.eI, a1Z(e, 1), az.y.a1a(az.y.a15), 0 < e.touches.length && (a1B = Math.floor(h.k * e.touches[0].clientX), a1C = Math.floor(h.k * e.touches[0].clientY), at.a1N(e) || a1b(a1B, a1C))
	}

	function a1b(eq, es) {
		t.gw(eq, es), 0 === aD.zo ? aa.gw(eq, es) : bB.a1c(eq, es) || bd.gw(eq, es) || aX.gw(eq, es) || aL.a1d(eq, es) || aP.gw(eq, es) || 0 <= aM.gw(eq, es) || av.gw(eq, es) || bI.a1e(eq, es) || aL.a1f(eq, es)
	}

	function a1J(e) {
		a1Y() || (a1E = !0, a1Z(e, 1), a1g(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY)))
	}

	function a1O(e) {
		a1D = be.eI, a1Z(e, 1), 0 < e.touches.length && (a1B = Math.floor(h.k * e.touches[0].clientX), a1C = Math.floor(h.k * e.touches[0].clientY), at.a1O(e) || a1g(a1B, a1C))
	}

	function a1g(eq, es) {
		t.a1J(eq, es), 0 === aD.zo ? aa.a1J(eq, es) : (bS.gq(eq, es), bd.a1J(eq, es) || (aM.a1J(eq, es), aL.hW() ? aL.a1J(eq, es) : aR.gx ? aR.a1J(eq) && (be.dh = !0) : (aV.a1J(eq, es), aS.n9 && aS.a1J(eq, es) && (be.dh = !0))))
	}

	function a1L(e) {
		a1Y() || (a1Z(e, 1), a1h(), 0 === aD.zo ? (aa.click(-1024, -1024), aT.rW()) : (aV.a1i(-1024, -1024), aM.a1J(-1024, -1024), aR.a1j(), aS.n9 = !1))
	}

	function a1K(e) {
		a1Y() || (a1Z(e, 1), a1k(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY), 2 === e.button), bI.a1H && (bI.a1H = !1, e.preventDefault()))
	}

	function click(e) {
		a1Y() || a1Z(e, 1)
	}

	function a1P(e) {
		a1D = be.eI, a1Z(e, 1), e && e.touches && 0 < e.touches.length && 0 !== aD.zo ? aS.n9 = !1 : at.a1l() || (a1k(a1B, a1C, !1), bI.a1H && (bI.a1H = !1, e.preventDefault()))
	}

	function a1Q(e) {
		a1D = be.eI, a1Z(e, 1), a1k(a1B, a1C, !1), bI.a1H && (bI.a1H = !1, e.preventDefault())
	}

	function a1R(e) {}

	function a1S(e) {}

	function a1T(e) {
		a1Y() || a1Z(e, 0)
	}

	function a1k(eq, es, a1m) {
		a1h(), 0 === aD.zo ? aa.click(eq, es) : (aV.a1i(eq, es), bd.a1i(), aR.a1j(), aS.n9 = !1, aL.click(eq, es, a1m) ? be.dh = !0 : aM.a1K(eq, es))
	}

	function a1h() {
		t.a1h()
	}

	function a1M(e) {
		var eq, es, deltaY;
		a1Y() || (a1Z(e, 1), az.y.a1a(az.y.a15), eq = Math.floor(h.k * e.clientX), es = Math.floor(h.k * e.clientY), deltaY = e.deltaY, 1 === e.deltaMode && (deltaY *= 16), t.a1M(eq, es, deltaY), 0 === aD.zo ? aa.a1M(eq, es, deltaY) : aV.a1M(eq, es,
			deltaY) || (aR.a1n(eq, es) ? aR.a1M(deltaY) && (be.dh = !0) : aS.a1M(eq, es, deltaY)))
	}

	function a1U(e) {
		a1Z(e, 0)
	}

	function a1Z(e, id) {
		0 === id && t.hW() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== aa.a10() && e.preventDefault()
	}

	function a1V(e) {
		if (__fx.keybindHandler(e.key)) return;
		a1Y() || 0 < h.sR || (e = e.code) && e.length && (bW.f4(e, 18) ? aq.a1p(3) : bW.f4(e, 22) ? aq.a1p(0) : bW.f4(e, 20) ? aq.a1p(1) : bW.f4(e, 24) ? aq.a1p(2) : bW.f4(e, 10) ? aR.a1q(31 / 32) : bW.f4(e, 8) ? aR.a1q(32 / 31) : bW.f4(e, 6) ? aR
			.a1q(7 / 8) : bW.f4(e, 4) ? aR.a1q(8 / 7) : bW.f4(e, 14) ? 0 !== aD.zo && aS.a1M(Math.floor(h.i / 2), Math.floor(h.j / 2), -200) : bW.f4(e, 16) ? 0 !== aD.zo && aS.a1M(Math.floor(h.i / 2), Math.floor(h.j / 2), 200) : bW.f4(e, 0) ? aD
			.zo && bS.gr(0) : bW.f4(e, 2) ? aD.zo && bS.gr(1) : bW.f4(e, 30) ? aD.zo && bS.gr(2) : bW.f4(e, 26) ? aD.zo && bS.hQ() : bW.f4(e, 28) && aD.zo && bS.hV())
	}

	function a1W(e) {
		if (!a1Y() && !(0 < h.sR || be.eI < 400)) {
			var code = e.code;
			if (code && code.length && !("Enter" === code && t.a1r(1) || "Space" === code && t.a1r(0))) return bm.a0x ? bm.uB.a1r(code) ? void 0 : void("Escape" === code && bI.fC()) : void(8 !== aa.a10() && aa.a1r(e) ? be.dh = !0 : "Escape" ===
				code ? bI.fC() : bW.f4(code, 18) ? aq.a1s(3) : bW.f4(code, 22) ? aq.a1s(0) : bW.f4(code, 20) ? aq.a1s(1) : bW.f4(code, 24) ? aq.a1s(2) : bW.f4(code, 12) ? bB.a1t(!aD.n7) : "Space" === code && aD.zo && (aM.gt && aM.a1u(), aD
					.gs) && bB.a1v(!1))
		}
	}

	function a1X() {
		"hidden" !== document.visibilityState && (be.dh = !0)
	}

	function a1Y() {
		return a1D + 15e3 > be.eI
	}

	function resize() {
		h.a1x()
	}
	this.a1F = 0, this.a1G = "", this.a1H = !1, this.dZ = function() {
		a1I.addEventListener("mousedown", gw, {
			passive: !1
		}), a1I.addEventListener("mousemove", a1J, {
			passive: !1
		}), a1I.addEventListener("mouseup", a1K, {
			passive: !1
		}), a1I.addEventListener("click", click, {
			passive: !1
		}), a1I.addEventListener("mouseleave", a1L, {
			passive: !1
		}), a1I.addEventListener("wheel", a1M, {
			passive: !1
		}), a1I.addEventListener("touchstart", a1N, {
			passive: !1
		}), a1I.addEventListener("touchmove", a1O, {
			passive: !1
		}), a1I.addEventListener("touchend", a1P, {
			passive: !1
		}), a1I.addEventListener("touchcancel", a1Q, {
			passive: !1
		}), a1I.addEventListener("dragover", a1R), a1I.addEventListener("drop", a1S), a1I.addEventListener("dblclick", a1T), document.addEventListener("contextmenu", a1U), document.addEventListener("keydown", a1V), document.addEventListener(
			"keyup", a1W), document.addEventListener("visibilitychange", a1X), window.addEventListener("resize", resize)
	}, this.a1e = function(eq, es) {
		return !!bB.gw(eq, es) || !!(aV.gw(eq, es) || aS.gw(eq, es) || aR.gw(eq, es) || aN.gw(eq, es))
	}, this.a1w = a1Y, this.qx = function() {
		return !a1E || 0 < a1D
	}, this.fC = function() {
		if (!t.hW()) return 8 === aa.a10() ? aD.n7 ? void bB.a1t(!1) : bd.hW ? void bd.a1u() : void aM.a1u() : void(7 !== aa.a10() && 6 === aa.a10() && aZ.a1y());
		t.a1r(2)
	}
}

function bx() {
	this.qV = new a1z, this.qd = new a20, this.g5 = new a21, this.rU = new a22, this.y0 = new a23, this.a24 = new a25, this.canvas = new a26, this.color = new a27, this.a28 = new a29, this.dZ = function() {
		this.qV.vW()
	}
}

function a20() {
	this.wR = function(g) {
		g.fill(0)
	}, this.a2A = function(g) {
		for (var ej = g.length, aB = 0; aB < ej; aB++) g[aB] = []
	}, this.a2B = function(yu, a2C) {
		for (var yv = bN.fJ, aB = 0; aB < 3; aB++) yv[aB] = a2C * yu[aB];
		return yv
	}, this.a2D = function(yu, yv, a2E) {
		for (var jN = 0, aB = 0; aB < 3; aB++) jN += Math.abs(yu[aB] - yv[aB]);
		return a2E <= jN
	}, this.a2F = function(yu, a2G) {
		for (var aB = 0; aB < 3; aB++) yu[aB] = bK.hs(yu[aB] + a2G, 0, 255);
		return yu
	}, this.a2H = function(g, t3, t4) {
		t4 = t4 || g.length - 1;
		for (var a2I = 0, aB = t3 = t3 || 0; aB <= t4; aB++) a2I += g[aB];
		return a2I
	}, this.a2J = function(g, a2K) {
		for (var aB, a2L, ej = g.length, a2M = [], f2 = ej - 1; 0 <= f2; f2--) {
			for (aB = a2L = 0; aB < ej; aB++) a2K(g[aB]) < a2K(g[a2L]) && (a2L = aB);
			ej--, a2M.push(g[a2L]), g[a2L] = g[ej], g.pop()
		}
		return a2M
	}, this.min = function(g) {
		var aB, fB, ej = g.length;
		if (0 === ej) return 0;
		for (fB = g[0], aB = 1; aB < ej; aB++) fB = Math.min(fB, g[aB]);
		return fB
	}, this.max = function(g) {
		var ej = g.length;
		if (0 === ej) return 0;
		for (var fB = g[0], aB = 1; aB < ej; aB++) fB = Math.max(fB, g[aB]);
		return fB
	}, this.a2N = function(g, fB) {
		for (var ej = g.length, gC = 0, aB = 0; aB < ej; aB++) gC += g[aB] > fB;
		return gC
	}, this.a2O = function(a2P, a2Q, min) {
		for (var ej = a2Q[0], aB = ej - 1; 0 <= aB; aB--) a2P[aB] < min && (a2P[aB] = a2P[--ej]);
		a2Q[0] = ej
	}, this.a2R = function(g, ej, value) {
		for (var aB = 0; aB < ej; aB++) g[aB] -= value
	}, this.a2S = function(g) {
		for (var ej = g.length, aB = 0; aB < ej; aB++)
			if ("string" != typeof g[aB]) return !1;
		return !0
	}, this.a2T = function(qC, g, a2U) {
		g.fill(0);
		for (var t7 = qC.split(","), ej = Math.min(t7.length, g.length), aB = 0; aB < ej; aB++) g[aB] = Math.min(parseInt(t7[aB]), a2U)
	}, this.a2V = function(qC, g, rR) {
		g.fill("");
		for (var t7 = qC.split('"'), ej = Math.min(t7.length, 2 * g.length), hc = 0, aB = 1; aB < ej; aB += 2) g[hc++] = t7[aB].slice(0, rR)
	}, this.a2W = function(g, gC) {
		if (0 === gC) g.fill(0);
		else {
			var a2I = this.a2H(g),
				ej = g.length;
			if (0 === a2I) g.fill(bK.dq(gC, ej));
			else
				for (var aB = 0; aB < ej; aB++) g[aB] = bK.dq(gC * g[aB], a2I);
			if (0 === (a2I = this.a2H(g))) g[1] = gC;
			else
				for (var hc = 0; a2I++ < gC;) g[hc = (hc + 1) % ej] && g[hc]++
		}
	}, this.a2X = function(g) {
		if (!g) return 0;
		var ej = g.length;
		if (0 === ej) return 0;
		for (var fB = g[ej - 1], aB = ej - 2; 0 <= aB; aB--)
			if (g[aB] !== fB) return aB + 2;
		return 1
	}, this.a2Y = function(g) {
		for (var a2I = 0, aB = 0; aB < g.length; aB++) a2I += g[aB].length;
		return a2I
	}, this.a2Z = function(a2a) {
		for (var g = [], aB = 0; aB < a2a.length; aB++) g = g.concat(a2a[aB]);
		return g
	}, this.has = function(g, fB) {
		for (var ej = g.length, aB = 0; aB < ej; aB++)
			if (g[aB] === fB) return !0;
		return !1
	}
}

function a26() {
	this.yY = function(a2b, e4, a2c) {
		var hg = a2b.height,
			a2d = b9.qV.wH(hg, hg),
			hm = b9.qV.getContext(a2d);
		return function(i, hm, a2c) {
			hm.fillStyle = a2c, hm.beginPath(), hm.arc(i / 2, i / 2, .47 * i, 0, 2 * Math.PI), hm.fill()
		}(hg, hm, a2c), hm.drawImage(a2b, -e4 * hg, 0), a2d
	}, this.a2f = function(a2g) {
		var hm, hj, hg = a2g.height;
		return a2g.width === hg && (hj = (hm = b9.qV.getContext(a2g, !0)).getImageData(0, 0, hg, hg), b9.a24.a2h(hj.data, hg, hg, .9), hm.putImageData(hj, 0, 0)), a2g
	}
}

function a27() {
	this.a2i = function(fB) {
		return [fB >> 12 & 63, fB >> 6 & 63, 63 & fB]
	}, this.a2j = function(fB) {
		for (var g = this.a2i(fB), aB = 0; aB < 3; aB++) g[aB] = ~~(4.05 * g[aB]);
		return g
	}, this.a2k = function(fB) {
		fB = this.a2j(fB);
		return b9.color.nW(fB[0], fB[1], fB[2])
	}, this.a2l = function(g) {
		for (var aB = 0; aB < 3; aB++) g[aB] = ~~(g[aB] / 4.04);
		return (g[0] << 12) + (g[1] << 6) + g[2]
	}, this.nW = function(e3, t7, f3) {
		return "rgb(" + e3 + "," + t7 + "," + f3 + ")"
	}, this.nY = function(e3, t7, f3, f2) {
		return "rgba(" + e3 + "," + t7 + "," + f3 + "," + f2.toFixed(3) + ")"
	}, this.qz = function(f4) {
		for (var g = f4.split("(")[1].split(","), fI = bN.fI, aB = 0; aB < 3; aB++) fI[aB] = parseInt(g[aB]);
		return 4 === g.length ? fI[3] = 255 * parseFloat(g[3].slice(0, -1)) : fI[3] = 255, fI
	}, this.r0 = function(a2m, em) {
		for (var g = a2m.slice(a2m.indexOf("(") + 1, a2m.indexOf(")")).split(","), fI = bN.fI, aB = 0; aB < 3; aB++) fI[aB] = bK.hs(parseInt(g[aB].trim(), 10) + em, 0, 255);
		return 3 === g.length ? this.nW(fI[0], fI[1], fI[2]) : (a2m = parseFloat(g[3].trim()), this.nY(fI[0], fI[1], fI[2], a2m = 0 === a2m ? .3 : a2m))
	}, this.a2n = function(g) {
		for (var qC = "#", aB = 0; aB < 3; aB++) {
			var e3 = g[aB].toString(16);
			qC += 1 === e3.length ? "0" + e3 : e3
		}
		return qC
	}, this.a2o = function(qC) {
		var e3, t7;
		return qC.length < 7 ? bA.nV : (e3 = parseInt(qC.slice(1, 3), 16), t7 = parseInt(qC.slice(3, 5), 16), qC = parseInt(qC.slice(5, 7), 16), this.nW(e3, t7, qC))
	}
}

function a23() {
	this.a2p = function(qC, font, maxWidth) {
		if (font && (uc.font = font), uc.measureText(qC).width <= maxWidth) return qC;
		for (var aB = qC.length - 1; 1 <= aB; aB--)
			if (qC = qC.substring(0, aB), uc.measureText(qC + "...").width <= maxWidth) return qC + "...";
		return "..."
	}
}

function a29() {
	var a2r = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.a2s = function(eI) {
		var a2u, qC = new Date(eI.getTime() - 6e4 * eI.getTimezoneOffset()).toUTCString();
		return qC.length < 12 || (qC = qC.substring(5, qC.length), 0 === (eI = eI.getTimezoneOffset())) ? qC : (a2u = (eI < 0 ? "+" : "-") + bK.dq(Math.abs(eI), 60), 0 == (eI = Math.abs(eI) % 60) ? qC + a2u : qC + a2u + ":" + (eI < 10 ? "0" :
			"") + eI)
	}, this.a2v = function(eI) {
		var qC = eI.toUTCString();
		return qC.length < 12 ? qC : function(eI) {
			return a2r[eI.getUTCDay()]
		}(eI) + ", " + qC.substring(5, qC.length - 4)
	}
}

function a1z() {
	var a2x = null;
	this.yp = 0, this.vW = function() {
		var fB = bi.eG.data[5].value;
		a2x = "px " + fB, "Trebuchet MS" !== fB && (a2x += ", Trebuchet MS"), this.yp = hf(32, 32, ["a", "b", "m"], 200, a2x)
	}, this.wH = function(i, j) {
		var f4 = document.createElement("canvas");
		return f4.width = i, f4.height = j, f4
	}, this.getContext = function(canvas, alpha) {
		return canvas.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(y0, i, j) {
		return y0.getImageData(0, 0, i, j)
	}, this.sJ = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + a2x : 1 === type ? "bold " + size + a2x : 2 === type ? "lighter " + size + a2x : 3 === type ? "italic " + size + a2x : 4 === type ? "oblique " + size + a2x : 5 === type ? "small-caps " +
			size + a2x : "small-caps bold " + size + a2x
	}, this.textAlign = function(hm, id) {
		hm.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(hm, id) {
		hm.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.qf = function(e, code, color) {
		color = this.qe(bb.sL) + " solid " + (color || bA.ne);
		5 === (code = code || 5) ? e.style.border = color : 4 === code ? e.style.borderLeft = color : 2 === code ? e.style.borderBottom = color : 6 === code ? e.style.borderRight = color : e.style.borderTop = color
	}, this.t9 = function(e, eq, es, i, j) {
		e = e.style;
		e.left = this.tA(eq), e.top = this.tA(es), e.width = this.tA(i), e.height = this.tA(j)
	}, this.qW = function(fB) {
		return 1 + fB * a0.a1.ht()
	}, this.ro = function(nG, gI) {
		return nG * this.qW(void 0 === gI ? .5 : gI) * h.hu / h.k
	}, this.t8 = function(nG, gI) {
		return nG * this.qW(void 0 === gI ? .5 : gI) * h.hu
	}, this.sp = function(nG, gI, a2y) {
		return this.qW(gI) * Math.min(nG * h.hu, a2y * h.i) / h.k
	}, this.qe = function(fB) {
		return fB.toFixed(1) + "px"
	}, this.tA = function(fB) {
		return this.a30(fB).toFixed(1) + "px"
	}, this.a30 = function(fB) {
		return fB / h.k
	}, this.a31 = function(sZ, a32) {
		for (var qC = "<ul>", ej = sZ.length, aB = 0; aB < ej; aB++) qC += "<li>" + sZ[aB] + ": <a href='" + a32[aB] + "' target='_blank'>" + a32[aB] + "</a></li>";
		return qC += "</ul>"
	}, this.a33 = function(a34) {
		return "<a href='" + a34 + "' target='_blank'>" + a34 + "</a>"
	}, this.a35 = function(e) {
		navigator.clipboard && navigator.clipboard.writeText(e.value)
	}, this.a36 = function(e) {
		var dp = e.textContent;
		b9.rU.a37(dp, "✔") || (1 === dp.length ? e.textContent = "✔" : e.textContent = dp + " ✔", setTimeout(function() {
			e.textContent = dp
		}, 500))
	}, this.measureText = function(qC) {
		return uc.measureText(qC).width
	}, this.sz = function(a38) {
		a38.style.overflowX = "auto", a38.style.overflowY = "hidden", a38.style.whiteSpace = "nowrap", a38.addEventListener("wheel", function(e) {
			Math.abs(e.deltaY) < Math.abs(e.deltaX) || (this.scrollLeft += e.deltaY, this.tC = this.scrollLeft, e.preventDefault())
		}), a38.addEventListener("scroll", function() {
			this.tC = this.scrollLeft
		})
	}
}

function a21() {
	this.gu = function(a0r) {
		return 0 === a0r ? 1 === aD.zo && aD.h7 : 1 === a0r ? 1 === aD.zo && !aD.h7 : 2 === aD.zo
	}, this.gv = function(player) {
		return 0 !== ag.me[player] && 2 !== ag.a39[player]
	}, this.a3A = function(player) {
		return player === aD.eT && 2 !== ag.a39[player]
	}, this.kj = function(player, jH) {
		return player !== jH && (0 === bf.eh[player] || bf.eh[player] !== bf.eh[jH])
	}, this.lq = function() {
		return al.k8 < 2 ? 0 : aD.he ? 1 < bg.a3B() : ag.gX[lg[1]]
	}, this.a3C = function() {
		var k8 = al.k8;
		if (0 !== k8) {
			if (!aD.he) return !this.jV(lg[0]);
			for (var eh = bf.eh, ke = bg.kf(), k9 = al.k9, aB = k8 - 1; 0 <= aB; aB--) {
				var gH = k9[aB];
				if (eh[gH] === ke && !this.jV(gH)) return 1
			}
		}
		return 0
	}, this.a3D = function(player) {
		return player === aD.eT
	}, this.jV = function(player) {
		return player >= aD.k7 || 2 === ag.a39[player]
	}, this.l3 = function(player) {
		return 0 !== ag.me[player]
	}, this.ze = function(player) {
		return player < aD.k7
	}, this.ps = function(a3E, a3F) {
		return a3E !== a3F
	}, this.g8 = function(player, fB) {
		var min;
		return fB = this.a3G(player, fB), ag.gl[player] += fB, ag.a3H[player] && (min = Math.min(ag.a3H[player], ag.gl[player]), ag.a3H[player] -= min, ag.gl[player] -= min), fB
	}, this.a3G = function(player, fB) {
		var a3I = ag.gl[player];
		return fB = Math.min(fB, ag.gX[player] * aD.a3J - a3I), fB = Math.min(fB, aD.a3K - a3I), Math.max(fB, 0)
	}, this.mD = function(player, iK, a3L, a3M) {
		var a3I = ag.gl[player],
			iK = bK.dq(a3I * (iK + 1), 1024),
			a3L = bK.dq(a3L * a3I, 1024),
			iK = Math.min(iK, a3I - a3L);
		return 10 === aD.kP && (iK = b3.a3O(player, iK)), bN.fG[0] = iK, bN.fG[1] = a3L, a3M <= iK
	}, this.pM = function(player, p4, p3) {
		var player = ag.gl[player],
			a3N = bK.dq(64 * player, 1024),
			player = (p4 = Math.min(p4, player - a3N), this.a3Q(p4));
		return a3N += player, p4 = this.a3G(p3, p4 -= player), bN.fG[0] = p4, bN.fG[1] = a3N, 1 <= p4
	}, this.pO = function(p4, p3) {
		var a3P = this.a3Q(p4);
		return p4 = this.a3G(p3, p4 -= a3P), bN.fG[0] = p4, bN.fG[1] = a3P, 1 <= p4
	}, this.iJ = function(player, a3R) {
		return bK.dq(ag.gl[player] * (a3R + 1), 1024)
	}, this.a3Q = function(a3S) {
		return bK.dq(Math.max(2142 - be.k4(), 0) * a3S, 2142)
	}, this.a3T = function(player, a3L) {
		a3L = bK.dq(a3L * ag.gl[player], 1024);
		bN.fG[1] = a3L, ag.gl[player] -= a3L
	}, this.g6 = function(player, a3U) {
		var fU, fW, f3 = ag.gl[player];
		return a3U <= f3 ? ag.gl[player] -= a3U : (ag.gl[player] = 0, fW = ag.a3H[player] + (fU = 5 * ((f3 = a3U - f3) >> 2)), bc.g9(player, fU - f3, 12), fW <= aD.a3V ? ag.a3H[player] = fW : (ag.a3H[player] = aD.a3V, bc.g9(player, fW - aD.a3V,
			18))), a3U
	}, this.lH = function(player, iK) {
		var gl = ag.gl,
			a3I = gl[player],
			iK = bK.dq(a3I * (iK + 1), 1024),
			a3N = Math.max(bK.dq(a3I, 10), 1e3);
		return (iK = Math.min(iK, a3I - a3N)) < 0 ? (gl[player] = 0, a3N = Math.min(1e3, a3I + aD.a3V - ag.a3H[player]), bN.fG[1] = a3N, ag.a3H[player] += a3N - a3I, 0) : (bN.fG[1] = a3N, 10 === aD.kP && (iK = b3.a3O(player, iK)), gl[player] -=
			a3N + iK, iK)
	}, this.mF = function(player) {
		ag.gl[player] -= bN.fG[0] + bN.fG[1]
	}, this.pt = function(player, jH) {
		return (jH = Math.min(jH, aD.eg)) < aD.eg && 0 === ag.me[jH] && (jH = aD.eg), (bN.ef[0] = jH) === aD.eg || ec(player, jH)
	}, this.pw = function(player, p3) {
		return 0 !== ag.me[p3] && !ec(player, p3)
	}, this.a3W = function(player, a3X) {
		for (var gH, ej = al.k8, a3Y = 0, a3Z = lg, aB = 0; aB < ej; aB++)
			if (gH = a3Z[aB], !this.jV(gH)) {
				if (player === gH) return !0;
				if (++a3Y > a3X) return !1
			} return !1
	}, this.lb = function(gH) {
		var a3a = aD.he ? bg.kd() : ag.gX[lg[0]];
		return a3a >= bK.dq(gH * aD.jr, 100)
	}, this.a3b = function(fB, min, max) {
		return Math.floor(bK.hs(isNaN(fB) ? 0 : Number(fB), min, max))
	}
}

function a25() {
	this.a3c = function(canvas, a3d, a3e) {
		var i = canvas.width,
			j = canvas.height,
			f4 = b9.qV.wH(i, j),
			hm = b9.qV.getContext(f4, !0),
			canvas = (hm.drawImage(canvas, 0, 0), hm.getImageData(0, 0, i, j));
		return a3d(canvas.data, i, j, a3e), hm.putImageData(canvas, 0, 0), f4
	}, this.a3f = function(wS, i, j) {
		for (var eq = i - 1; 0 <= eq; eq--)
			for (var es = j - 1; 0 <= es; es--) {
				var aB = 4 * (eq + es * i);
				wS[3 + aB] = wS[aB], wS[aB] = wS[1 + aB] = wS[2 + aB] = 255
			}
	}, this.a3g = function(wS, i, j) {
		for (var eq = i - 1; 0 <= eq; eq--)
			for (var es = j - 1; 0 <= es; es--) {
				var aB = 4 * (eq + es * i);
				wS[1 + aB] > wS[2 + aB] + 10 && (wS[3 + aB] = wS[aB], wS[1 + aB] = wS[2 + aB])
			}
	}, this.a3h = function(wS, i, j, a3e) {
		for (var gap = Math.floor(Math.min(i, j) * a3e), eq = 0; eq < i; eq++)
			for (var aB, es = 0; es < j; es++)(eq < gap || es < gap || i - gap <= eq || j - gap <= es) && (wS[3 + (aB = 4 * (eq + es * i))] = 255 - 255 * (wS[1 + aB] - wS[aB]) / (255 - wS[aB]))
	}, this.a3i = function(wS, i, j, a3e) {
		for (var eq = i - 1; 0 <= eq; eq--)
			for (var es = j - 1; 0 <= es; es--) {
				var aB = 4 * (eq + es * i);
				wS[aB] = a3e[0], wS[1 + aB] = a3e[1], wS[2 + aB] = a3e[2]
			}
	}, this.a3j = function(wS, i, j, a3e) {
		for (var gap = Math.floor(i * a3e), eq = 0; eq < i; eq++)
			for (var aB, es = 0; es < j; es++)(eq < gap || es < gap || i - gap <= eq || j - gap <= es) && (wS[aB = 4 * (eq + es * i)] = wS[1 + aB] = wS[2 + aB] = 0)
	}, this.a3k = function(wS, i, j) {
		for (var es, aB, eq = i - 1; 0 <= eq; eq--)
			for (es = j - 1; 0 <= es; es--) 200 < wS[1 + (aB = 4 * (eq + es * i))] && wS[1 + aB] - 20 > wS[aB] && wS[1 + aB] - 20 > wS[2 + aB] ? wS[aB] + wS[2 + aB] < 40 ? wS[3 + aB] = 0 : (wS[3 + aB] = wS[aB], wS[aB] = 255, wS[1 + aB] = 255, wS[
				2 + aB] = 255) : wS[aB] < 50 && wS[1 + aB] < 50 && wS[2 + aB] < 50 && (wS[aB] + wS[1 + aB] + wS[2 + aB] < 50 ? wS[3 + aB] = 180 : wS[3 + aB] = 180 + Math.floor(75 * (wS[aB] + wS[1 + aB] + wS[2 + aB] - 50) / 100))
	}, this.a3l = function(wS, i, j) {
		for (var es, aB, eq = i - 1; 0 <= eq; eq--)
			for (es = j - 1; 0 <= es; es--) wS[1 + (aB = 4 * (eq + es * i))] > wS[aB] + 20 && wS[1 + aB] > wS[2 + aB] + 20 && wS[aB] + wS[2] < 40 && (wS[3 + aB] = 255 - wS[1 + aB], wS[aB] = wS[1 + aB] = wS[2 + aB] = wS[aB])
	}, this.a2h = function(wS, i, j, a3e) {
		for (var e3 = i >> 1, eq = 0; eq < i; eq++)
			for (var es = 0; es < j; es++) Math.sqrt((eq - e3) * (eq - e3) + (es - e3) * (es - e3)) > a3e * e3 && (wS[4 * (eq + es * i) + 3] = 0)
	}
}

function a22() {
	var a3m = {
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
		a3n = new RegExp(":[a-zA-Z0-9_]+:", "g");
	this.rV = function(us) {
		return us.replace(a3n, function(match) {
			return a3m[match] || match
		})
	}, this.z5 = function(fB) {
		var aB, a3o, a3p, a3q, a3r;
		if (fB < 0) return "-" + this.z5(Math.abs(fB));
		if (fB < 1e3) return fB.toString();
		for (a3o = Math.floor(Math.log(fB + .5) / Math.log(10)) + 1, a3p = Math.floor((a3o - 1) / 3), a3r = (a3q = fB.toString()).substring(a3o - 3, a3o), aB = 1; aB < a3p; aB++) a3r = a3q.substring(a3o - 3 * (aB + 1), a3o - 3 * aB) + " " + a3r;
		return a3q.substring(0, a3o - 3 * a3p) + " " + a3r
	}, this.a3s = function(gH, a3o) {
		return gH.toFixed(a3o) + "%"
	}, this.a3t = function(fB, a3u) {
		return fB.toFixed(bK.hs(Math.floor((void 0 === a3u ? 3 : a3u) - Math.log10(Math.max(fB, 1))), 0, 8))
	}, this.a3v = function(fB, nG, a3o) {
		return (fB * nG).toFixed(a3o)
	}, this.a0V = function(username) {
		var en, eY = username.indexOf("[");
		return !(eY < 0) && 1 < (en = username.indexOf("]")) - eY && en - eY <= 8 ? username.substring(eY + 1, en).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.a0V;
	this.a3w = function(qC) {
		for (var f2 = Math.floor(.5 * qC.length + .5), nM = Math.floor(.5 * (f2 - 1)), aB = 0; aB < nM; aB++)
			for (var f3 = -1; f3 < 2; f3 += 2) {
				var f4 = f2 + f3 * aB;
				if (" " === qC[f4]) return [this.a0R(qC.substring(0, f4)), this.a3x(qC.substring(f4))]
			}
		return [qC.substring(0, f2), qC.substring(f2)]
	}, this.a3x = function(qC) {
		for (var ej = qC.length, aB = 0; aB < ej; aB++)
			if (" " !== qC[aB]) return qC.substring(aB);
		return qC
	}, this.a0R = function(qC) {
		for (var aB = qC.length - 1; 0 <= aB; aB--)
			if (" " !== qC[aB]) return qC.substring(0, aB + 1);
		return qC
	}, this.a3y = function(qC, a3z) {
		return qC.split("(")[0] + "(🧈 " + a3z.toFixed(2) + ")"
	}, this.startsWith = function(qC, a40) {
		return qC.substring(0, a40.length) === a40
	}, this.a37 = function(qC, a40) {
		var ej = qC.length;
		return qC.substring(ej - a40.length, ej) === a40
	}, this.a41 = function(g, a42, a43) {
		var qC = "",
			ej = g.length - 1;
		a43 = a43 || "";
		for (var aB = 0; aB < ej; aB++) qC += a43 + g[aB] + a43 + ",", (aB + 1) % a42 == 0 && (qC += "\n");
		return qC += a43 + g[ej] + a43
	}, this.a44 = function(qC, yu, yv) {
		return qC.replace(new RegExp(yu, "g"), yv)
	}
}

function a45() {
	this.jE = function(player, eV) {
		aI.xm(player, bL.er(eV), bL.et(eV)) && (be.dh = !0), aD.kR && this.j0()
	}, this.j0 = function() {
		aD.h7 = !1;
		for (var aB = 0; aB < aD.k7; aB++) 0 !== ag.me[aB] && 0 === ag.gX[aB] && aI.xs(aB);
		0 !== ag.me[aD.eT] ? (bc.ma[7] = ag.gX[aD.eT], bc.ma[8] = ag.gl[aD.eT], aR.a46(), aW.a47(), aD.gs || aH.my(ag.ia[aD.eT] - 5, ag.ic[aD.eT] - 5, ag.ib[aD.eT] + 5, ag.ie[aD.eT] + 5), au.dZ()) : aX.show(!1, !1, !1, !0), aN.a48(18), af.a49(),
			af.mQ(!0), bO.y.a4A(), aL.rm(), aD.pr = null, ba.a4B = !0, ba.a4C(), aD.kR && a0.a1.setState(1)
	}
}

function bz() {
	this.eg = 512, this.a3K = 15e8, this.a4D = 1e9, this.a3V = 5e4, this.a4E = 512, this.g3 = 2, this.eT = 0, this.k7 = 0, this.zr = 0, this.kT = 0, this.zq = 0, this.wx = 512, this.x2 = 512, this.a3J = 150, this.kR = !0, this.gs = 0, this.zo = 0,
		this.jr = 0, this.n7 = !1, this.h7 = 0, this.a4F = 0, this.he = !1, this.x4 = 0, this.x5 = 0, this.kP = 0, this.a0g = 0, this.pr = null, this.a06 = new y6, this.a4G = 30, this.zl = 0, this.zt = 0, this.a05 = 0, this.zg = 0, this.data =
		new a4H, this.a4I = new a4J, this.a4K = 0, this.a4L = function() {
			bN.dZ(), bQ.dZ(), this.zr = this.k7 = this.data.humanCount, this.kR = 1 === this.zr, this.n7 = !1, this.gs = this.data.isReplay, this.kP = 0 === this.data.gameMode ? [7, 10, 8][this.data.battleRoyaleMode] : this.data.isZombieMode ? 9 :
				this.data.numberTeams - 2, this.a0g = this.data.isContest, this.he = this.kP < 7 || 9 === this.kP, this.kP = 10 === this.kP && this.kR ? 7 : this.kP, this.kP = 8 === this.kP && 2 !== this.k7 ? 7 : this.kP, ay.dZ(), this.x4 = this.data
				.numberTeams, this.data.teamPlayerCount ? this.x5 = +(0 < this.data.teamPlayerCount[0]) : (this.x5 = 0, this.he && this.kR && (this.data.teamPlayerCount = new Uint16Array(9), this.data.teamPlayerCount.fill(1, 1, this.x4 + 1), aD.a4I
					.a4M())), this.a4G = this.k7 <= 2 ? 30 : this.k7 <= 50 ? 40 : 50, this.a4F = this.h7 = this.data.selectableSpawn, this.pr = this.h7 ? new a45 : null, 1 === l.dn ? this.wx = this.k7 : this.wx = this.data.playerCount, this.x2 = this
				.wx, this.kT = this.wx - this.k7, this.zq = 0, this.eT = this.data.selectedPlayer, this.zl = 0, this.zt = 0, this.a05 = 0, this.zg = 0, ax.a4N(this.data.spawningSeed), ae.dZ(), ag.dZ(), ai.a4O(), b7.ow.pe = [], bf.dZ(), this.zo = 1,
				__fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), bc.dZ(), a4P(), ac.da(), ao.a4Q(), ba.dZ(), ac.dZ(), ar.dZ(), bL.dZ(), bM.dZ(), an.dZ(), bU.a4R(), aE.dZ(),
				ai.a7(), aI.dZ(), aJ.dZ(), al.a4S(), b8.dZ(), bg.dZ(), bO.dZ(), bd.dZ(), a4T.putImageData(a4U, 0, 0), aV.dZ(), aS.dZ(), aR.dZ(), bB.dZ(), av.dZ(), aU.dZ(), aW.dZ(), aM.dZ(), aQ.dZ(), aN.dZ(), aP.dZ(), aL.dZ(), aX.dZ(), aF.dZ(), aG
				.dZ(), fm(), ad.dZ(), af.dZ(), b3.dZ(), b4.dZ(), b0.dZ(), this.a06.dZ(), be.a4R(), aH.mx(), 0 === ag.me[aD.eT] && aX.show(!1, !0), af.mQ(!0), au.dZ(), be.dh = !0, this.gs || this.kR && this.h7 || a0.a1.setState(1), this.a4K = 0
		}, this.a1A = function(a4W) {
			aD.gs || b8.pp.a4X.length || (b8.pp.a4X = b8.a4Y.zG()), az.y.a4Z(), bp.clear(), this.zo = 0, be.a4a(), a0.a1.setState(0), aa.setState(0), a4W || bT.eC.show(), 2 === this.a4K ? t.y.a4b() : 1 === this.a4K ? t.u(19) : t.u(5, 5)
		}, this.a4c = function() {
			return this.gs ? aM.gt || !bB.a4d : this.kR && (aM.gt || this.h7)
		}, this.a4e = function() {
			return 1 === this.zo && !this.h7
		}
}

function a4H() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.elo = null, this.colorsType = 0, this.colorsPersonalized = 1,
		this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData = null, this.spawningType = 0,
		this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this.aIncomeData = null, this
		.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null
}

function a4J() {
	this.a4M = function() {
		var a4f = aD.data;
		b9.qd.a2W(a4f.teamPlayerCount, a4f.playerCount), a4f.numberTeams = b9.qd.a2N(a4f.teamPlayerCount, 0), a4f.teamPlayerCount[0] && a4f.teamPlayerCount[7] && (a4f.teamPlayerCount[7] = 0, this.a4M())
	}, this.a4g = function() {
		var a4f = aD.data;
		a4f.mapType < 2 ? bR.a7(bR.a4h(a4f), a4f.mapSeed) : bR.a4i(a4f.canvas)
	}, this.a4j = function() {
		var a4f = aD.data;
		a4f.colorsData || (a4f.colorsData = new Uint32Array(1)), a4f.selectableColor && (a4f.colorsData[0] = bi.y.vV()), a4f.selectableName && (a4f.playerNamesData || (a4f.playerNamesData = new Array(1)), a4f.playerNamesData[0] = bi.eG.data[122]
			.value)
	}, this.a4k = function() {
		aD.data = new a4H, aD.data.aIncomeType = 2, aD.data.aIncomeData = new Uint8Array(aD.eg), aD.data.aIncomeData[0] = 64
	}
}

function dW() {
	var a4l = [];
	this.yH = function(qC, pE) {
		qC = {
			eI: aW.a4n(),
			qC: qC,
			pE: pE
		};
		a4l.push(qC), 30 === t.sj && t.a4o().yH(qC)
	}, this.clear = function() {
		a4l = [], t.a4p(30) && t.a4p(30).clear()
	}, this.a4q = function() {
		return a4l
	}
}

function dQ() {
	this.ym = 0, this.gap = 0, this.sL = 0, this.qb = 0, this.dZ = function() {
		this.resize()
	}, this.resize = function() {
		this.ym = .0022 * b9.qV.qW(.5) * h.hu, this.sL = this.ym / h.k, this.gap = Math.max(Math.floor((a0.a1.ht() ? .0114 : .01296) * h.hu), 2), this.qb = this.gap / h.k
	}
}

function dP() {
	this.a4r = function() {
		return a0.a1.ht() ? 2 : 1
	}
}

function cA() {
	var r4, eq, es, a4s, a4t, a4u, eI, a4v, a4w, a4x, a4y, gap, zoom, pX, a4z;

	function a5D(lK, lL, eN) {
		ac.ee(eN) || -1 === (lK = bM.ku.a5M(lK, lL)) ? aN.a5L(eN) : aN.a5N(lK)
	}

	function a59(a4v) {
		for (var aB = pX.length - 1; 0 <= aB; aB--)
			if (pX[aB] === a4v) return 1
	}

	function a57(a54) {
		var aB, ej;
		if (-1 !== a54)
			for (ej = r4.length, aB = 0; aB < ej; aB++)
				if (r4[aB].hW && r4[aB].eq + 1 === a54 % 4 && r4[aB].es + 1 === a54 >> 2) return aB;
		return -1
	}

	function a55(lK, lL) {
		var t7 = gap / 2;
		return lK < eq - a4s - 3 * t7 || eq + 3 * a4s + 5 * t7 < lK || lL < es - a4s - 3 * t7 || es + 2 * a4s + 3 * t7 < lL ? -1 : 4 * (lL < es - t7 ? 0 : lL < es + a4s + t7 ? 1 : 2) + (lK < eq - t7 ? 0 : lK < eq + a4s + t7 ? 1 : lK < eq + 2 * a4s +
			3 * t7 ? 2 : 3)
	}
	this.a50 = function() {
		var aB, f3, a53 = [bA.o4, bA.oI, bA.nc, bA.od, bA.oV];
		for (r4 = new Array(10), aB = 0; aB < 10; aB++) r4[aB] = {
			id: aB,
			hW: !1,
			l2: 0,
			canvas: [],
			eq: 0,
			es: 0
		};
		for (r4[0].colors = [0, 1, 2, 3], r4[0].eq = 0, r4[0].es = 0, r4[1].colors = [1, 4], r4[1].eq = 1, r4[1].es = 0, r4[2].colors = [0, 2], r4[2].eq = -1, r4[2].es = 0, r4[3].colors = [0], r4[3].eq = 0, r4[3].es = 0, r4[4].colors = [0, 2],
			r4[4].eq = 1, r4[4].es = 1, r4[5].colors = [3], r4[5].eq = 0, r4[5].es = -1, r4[6].id = 20, r4[6].colors = [0], r4[6].eq = 1, r4[6].es = -1, r4[7].id = 21, r4[7].colors = [0], r4[7].eq = 0, r4[7].es = 1, r4[8].id = 16, r4[8]
			.colors = [0], r4[8].eq = 0, r4[8].es = 0, r4[9].id = 10, r4[9].colors = [4], r4[9].eq = 2, r4[9].es = 0, aB = 0; aB < 10; aB++)
			for (f3 = 0; f3 < r4[aB].colors.length; f3++) r4[aB].canvas.push(function(id, a2c) {
				if (id < 20) return b9.canvas.yY(ab.get(3), id, a2c);
				var a2c = ab.get(3).height,
					a2d = b9.qV.wH(a2c, a2c),
					hm = b9.qV.getContext(a2d);
				20 === id ? hm.drawImage(ab.get(18), 0, 0) : 21 === id && aj.wS.yn(aj.rl.yc + aj.rl.yt, hm, 0, 0, a2c);
				return a2d
			}(r4[aB].id, a53[r4[aB].colors[f3]]))
	}, this.a52 = function() {
		return r4
	}, this.dZ = function() {
		pX = [], eq = es = eI = 0, a4t = a4u = -1e3, this.resize()
	}, this.resize = function() {
		a4s = Math.floor((a0.a1.ht() ? .075 : .0468) * h.hu), zoom = a4s / ab.get(3).height, gap = Math.floor(a4s / 3)
	}, this.a1d = function(lK, lL) {
		return !!this.hW() && (be.dh = !0, !!aj.wS.gw(lK, lL, a4w) || (lK = function(lK, lL) {
			a4u = a4t = -1e3;
			var a56 = a57(a55(lK, lL));
			if (-1 === a56) return 0;
			if (1 !== r4[a56].colors[r4[a56].l2])
				if (5 === a56) {
					if (! function() {
							var dp = performance.now();
							a4z + 4e3 < dp && (pX = []);
							a4z = dp
						}(), a59(a4v)) return 1;
					pX.push(a4v), 16 < pX.length && pX.shift()
				} else if (6 === a56) {
				for (var aB = pX.length - 1; 0 <= aB; aB--) 0 === ag.me[pX[aB]] && pX.splice(aB, 1);
				0 < pX.length && (b4.a5A(1, pX, !0) && b7.g5.pW(pX, a4v), pX = [])
			} else if (2 === a56) b7.h9.p2(aR.hD(), a4v);
			else if (3 === a56) aD.h7 && b7.h9.hA(a4x);
			else if (0 === a56)
				if (0 === r4[0].l2) {
					if (aD.a4F && aW.a4n() < 350) return 1;
					bU.a5B(4), b7.h9.hG(aR.hD(), a4v)
				} else b0.hI(a4v, aR.hD());
			else if (1 === a56) b7.h9.hM(aR.hD(), a4x);
			else if (9 === a56) b7.h9.hP(aR.hD());
			else {
				if (7 === a56) return bU.a5B(0), aj.wS.show(lK, lL), 2;
				if (4 === a56) b4.a5A(0, [a4v], !0) && b7.g5.pT(a4v);
				else {
					if (8 !== a56) return 0;
					b7.h9.hC(aR.hD(), a4y, a4v)
				}
			}
			return 1
		}(lK, lL), this.rm(), 2 === lK && (aj.wS.hW = !0), 0 < lK))
	}, this.a1f = function(lK, lL) {
		this.hW() || (a4t = lK, a4u = lL, eI = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = bL.gz(mouseX),
			coordY = bL.h1(mouseY),
			coord = bL.f7(coordX, coordY),
			coord = bL.eZ(coord);
		bL.h2(coordX, coordY) && a5D(mouseX, mouseY, coord)
	}, this.click = function(lK, lL, a1m) {
		var gy = bL.gz(lK),
			h0 = bL.h1(lL),
			eV = bL.f7(gy, h0),
			eN = bL.eZ(eV);
		return !(!bL.h2(gy, h0) || (gy = (a0.a1.ht() ? .025 : .0144) * h.hu, h0 = performance.now(), Math.abs(lK - a4t) > gy) || Math.abs(lL - a4u) > gy || eI + 500 < h0) && (eI = h0, a1m ? (a5D(lK, lL, eN), !1) : aM.gt || this.hW() || !b9.g5.gv(
			aD.eT) || aD.gs ? (this.rm(), !1) : (aD.h7 ? 0 <= (a4x = bq.h8(eV)) && (r4[3].hW = !0) : 2 === aD.zo ? ac.gJ(eN) && (a4v = ac.eb(eN), b9.g5.jV(a4v) || (r4[0].hW = !0, r4[0].l2 = 1, r4[7].hW = !0)) : (bM.hN.hO(aD.eT, eV) && (
			r4[0].hW = !0, r4[0].l2 = 1, r4[1].hW = !0, r4[1].l2 = 0, r4[9].hW = !0, r4[9].l2 = 0), bM.hK.hL(aD.eT, eV) && (r4[0].hW = !0, r4[0].l2 = 1, r4[1].hW = !0, r4[1].l2 = 1, a4x = bN.fL[7]), ac.eo(eN) ? (a4y = am.eK.eM(
			eN)) && (gy = bL.eZ(a4y), r4[8].hW = !0, a4v = ac.ea(gy) ? aD.eg : ac.eb(gy)) : (ac.xq(aD.eT, eN) && (a4w = aD.eT, r4[0].hW = !0, r4[0].l2 = 1, r4[7].hW = !0), -1 !== (h0 = bq.hE(eV)) && (ac.ea(h0 << 2) ? (a4v = aD.eg,
			hF(aD.eT) ? (r4[0].hW = !0, r4[0].l2 = 0) : hH(aD.eT, a4v) && (r4[0].hW = !0, r4[0].l2 = 3)) : (a4v = ac.eb(h0 << 2), r4[0].l2 = 1, r4[5].hW = function(a4v) {
			return !b9.g5.jV(a4v) && !a59(a4v) && b4.a5A(1, [a4v], !1)
		}(a4v), r4[7].hW || b9.g5.jV(a4v) || (a4w = a4v, r4[7].hW = !0), r4[4].hW = !b9.g5.jV(a4v) && !af.a5H(a4v) && b4.a5A(0, [a4v], !1), r4[6].hW = function(a4v) {
			if (0 === pX.length) return !1;
			if (performance.now() > a4z + 4e3) return !(pX = []);
			return !a59(a4v) && ! function(a4v) {
				var aB;
				if (aD.he)
					for (aB = pX.length - 1; 0 <= aB; aB--)
						if (!ec(a4v, pX[aB])) return 1;
				return
			}(a4v)
		}(a4v), ec(a4v, aD.eT) ? (hJ(aD.eT, a4v) ? (r4[0].l2 = 0, r4[0].hW = !0) : hH(aD.eT, a4v) && (r4[0].l2 = 3, r4[0].hW = !0), r4[0].hW = this.a5J()) : (r4[2].hW = !0, r4[0].hW = !0))))), this.a5E(lK, lL)))
	}, this.a5E = function(lK, lL) {
		return eq = lK - Math.floor(a4s / 2), es = lL - Math.floor(a4s / 2), !!this.hW()
	}, this.a1J = function(lK, lL) {
		return !!this.hW() && (aj.wS.hW ? !aj.wS.yl(lK, lL) && (aj.wS.hW = !1, be.dh = !0) : function(s6, lK, lL) {
			lK = a55(lK, lL);
			if (0 <= a57(lK)) return !1;
			if ((1 === lK || 6 === lK) && 0 <= a57(2)) return !1;
			if ((6 === lK || 9 === lK) && 0 <= a57(10)) return !1;
			return s6.rm(), be.dh = !0
		}(this, lK, lL))
	}, this.rm = function() {
		for (var aB = r4.length - 1; 0 <= aB; aB--) r4[aB].hW = !1, r4[aB].l2 = 0;
		aj.wS.hW = !1
	}, this.hW = function() {
		return this.a5J() || aj.wS.hW
	}, this.a5J = function() {
		for (var ej = r4.length, aB = 0; aB < ej; aB++)
			if (r4[aB].hW) return !0;
		return !1
	}, this.ub = function() {
		if (this.hW())
			if (aj.wS.hW) aj.wS.ub();
			else {
				var aB, hm = uc,
					f3 = r4,
					ej = f3.length,
					a5R = (a4s + gap) / zoom;
				for (hm.imageSmoothingEnabled = !0, hm.setTransform(zoom, 0, 0, zoom, eq, es), aB = 0; aB < ej; aB++) f3[aB].hW && uc.drawImage(f3[aB].canvas[f3[aB].l2], f3[aB].eq * a5R, f3[aB].es * a5R);
				hm.imageSmoothingEnabled = !1, hm.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function cB() {
	var j, canvas, a5S, a5T, a5U, a5V = -1;

	function a5W() {
		var a5X, y0 = canvas.getContext("2d", {
			alpha: !0
		});
		y0.clearRect(0, 0, j, j), y0.fillStyle = bA.na, y0.fillRect(0, 0, j, j), 0 === a5T && (y0.fillStyle = bA.nf, y0.fillRect(0, 0, j, j)), y0.fillStyle = bA.ne, y0.fillRect(0, 0, j, 1), y0.fillRect(0, 0, 1, j), y0.fillRect(0, j - 1, j, 1), y0
			.fillRect(j - 1, 0, 1, j), a5X = .9 * j / ab.get(0).width, y0.imageSmoothingEnabled = !0, y0.setTransform(a5X, 0, 0, a5X, Math.floor((j - a5X * ab.get(0).width) / 2), Math.floor((j - a5X * ab.get(0).height) / 2)), y0.drawImage(ab.get(0),
				0, 0), y0.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a5Z(lK, lL) {
		if (!aM.gt) return lK <= j + bb.gap && lL >= aR.es ? 9 : -1;
		if (lK <= 4 * j + bb.gap) {
			if (lL >= aR.es) return 0;
			if (lL >= aR.es - j - a5U * bb.gap) return 2
		} else if (lK <= 7 * j + bb.gap && lL >= aR.es - j - a5U * bb.gap) return 1;
		return -1
	}
	this.gt = !1, this.dZ = function() {
		a5T = -1, this.gt = !1, a5U = a0.a1.ht() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		j = aR.j, (canvas = document.createElement("canvas")).width = j, canvas.height = j, a5S = b9.qV.sJ(1, (a0.a1.ht() ? .5 : .45) * j), a5W()
	}, this.a1u = function() {
		this.gt = !this.gt, this.gt ? (bB.a1t(!1), aD.gs && bB.a4d && bB.a1v(!0), this.a5Y()) : (a5T = -1, a5W(), !aD.kR || 1 !== aD.zo || aD.h7 || aD.gs || a0.a1.setState(1)), be.dh = !0
	}, this.a5Y = function() {
		(aD.kR || aD.gs) && 1 === aD.zo && (aV.mQ(!0), aD.h7 || setTimeout(function() {
			ba.zz()
		}, 0), a0.a1.setState(0))
	}, this.gw = function(lK, lL) {
		return 0 <= (a5V = a5Z(lK, lL)) || !aM.gt || aD.kR || aD.gs || bd.hW || aM.a1u(), a5V
	}, this.a1J = function(lK, lL) {
		lK = a5Z(lK, lL);
		lK !== a5T && (a5T = lK, this.gt || a5W(), be.dh = !0)
	}, this.a1K = function(lK, lL) {
		lK = a5Z(lK, lL);
		return -1 !== lK && a5V === lK && (this.gt ? aD.n7 ? (0 <= lK && bB.a1t(!1), !aD.gs) : (0 === lK ? aD.a1A() : 1 === lK ? this.a1u() : 2 === lK && t.u(1, 0), !0) : 9 === lK && (this.a1u(), !0))
	}, this.ub = function() {
		var i;
		this.gt ? (i = Math.floor(5.5 * j), uc.setTransform(1, 0, 0, 1, bb.gap, aR.es), uc.fillStyle = bA.na, uc.fillRect(0, 0, i, j), 0 === a5T ? (uc.fillStyle = bA.nf, uc.fillRect(0, 0, 4 * j, j)) : 1 === a5T && (uc.fillStyle = bA.nf, uc
				.fillRect(4 * j, 0, Math.floor(1.5 * j), j)), uc.fillStyle = bA.ne, uc.fillRect(0, 0, i, 1), uc.fillRect(0, 0, 1, j), uc.fillRect(4 * j, 0, 1, j), uc.fillRect(0, j - 1, i, 1), uc.fillRect(i - 1, 0, 1, j), uc.font = a5S, b9.qV
			.textBaseline(uc, 1), b9.qV.textAlign(uc, 1), uc.fillText(L(41), 2 * j, .54 * j), i = .4 * j, aM.a5d(bb.gap + 4 * j + (1.5 * j - i) / 2, aR.es + .3 * j, i), i = 1, uc.setTransform(1, 0, 0, 1, bb.gap, aR.es - i * a5U * bb.gap - i *
				j), uc.fillStyle = bA.na, uc.fillRect(0, 0, 4 * j, j), a5T === i + 1 && (uc.fillStyle = bA.nf, uc.fillRect(0, 0, 4 * j, j)), uc.fillStyle = bA.ne, uc.fillRect(0, 0, 4 * j, 1), uc.fillRect(0, 0, 1, j), uc.fillRect(4 * j, 0, 1,
				j), uc.fillRect(0, j - 1, 4 * j, 1), uc.fillText(L(0 === i ? 41 : 42), 2 * j, .54 * j), uc.setTransform(1, 0, 0, 1, 0, 0)) : uc.drawImage(canvas, bb.gap, aR.es)
	}, this.q6 = function(player) {
		return 0 !== ag.me[player] && 2 !== aD.zo && !b9.g5.jV(player)
	}, this.a5d = function(eq, es, ej) {
		uc.setTransform(1, 0, 0, 1, eq, es), uc.lineWidth = bb.ym, uc.strokeStyle = bA.ne, uc.beginPath(), uc.moveTo(0, 0), uc.lineTo(ej, ej), uc.moveTo(0, ej), uc.lineTo(ej, 0), uc.stroke()
	}
}

function cC() {
	var a5f, j, a5g, a5h, a5i, a5j, a5k, a5l, a5m;

	function xw() {
		return aR.a64(aN.a60()) ? av.hW ? __fx.settings.keybindButtons ? aR.es - 2 * aR.j - 3 * a5g : aR.es - aR.j - 2 * a5g : __fx.settings.keybindButtons ? aR.es - aR.j - 2 * a5g : aR.es - a5g : bB.a64(aN.a63()) ? av.hW ? bB.xw() - aR.j - 2 * a5g :
			bB.xw() - a5g : av.hW ? h.j - aR.j - (bj.a4r() + 1) * a5g : h.j - bj.a4r() * bb.gap
	}

	function a5r(dp, qC, id, gH, a5u, a5v, ki, a5w, a5x, a5y, a69) {
		var aB, y0, a2d, qN, a6A = void 0 !== a5x,
			i = Math.floor(aQ.measureText(qC, aN.a5S) + 1.5 * a5h + (a6A ? j : 1.5 * a5h));
		if (be.dh = !0, a69 || bp.yH(qC, a5x), i + 2 * a5g + aR.j > h.i && !a6A && 50 !== id && 20 < qC.length) a5r(dp, (a69 = b9.rU.a3w(qC))[0], id, gH, a5u, a5v, ki, a5w, a5x, a5y, !0), a5r(dp, a69[1], id, gH, a5u, a5v, ki, a5w, a5x, a5y, !0);
		else if (a69 = i + (50 === id ? a5i : 0), (a2d = document.createElement("canvas")).width = i, a2d.height = j, (y0 = a2d.getContext("2d", {
				alpha: !0
			})).font = aN.a5S, b9.qV.textBaseline(y0, 1), b9.qV.textAlign(y0, 0), y0.clearRect(0, 0, i, j), y0.fillStyle = a5v, y0.fillRect(0, 0, i, j), y0.fillStyle = a5u, y0.fillText(qC, Math.floor(1.5 * a5h), Math.floor(j / 2)), a6A && (y0
				.imageSmoothingEnabled = !0, aj.wS.yn(a5x, y0, i - j, 0, j)), 0 === (qN = {
				eI: dp,
				qC: qC,
				id: id,
				player: gH,
				canvas: a2d,
				a5u: a5u,
				a5v: a5v,
				i: i,
				a61: a69,
				ki: ki,
				a5w: a5w,
				a5x: a5x,
				a5y: a5y
			}).eI || 0 < a5f.length && 0 < a5f[0].eI) a5f.unshift(qN);
		else {
			for (aB = 1; aB < a5f.length; aB++)
				if (0 < a5f[aB].eI) return void a5f.splice(aB, 0, qN);
			a5f.push(qN)
		}
	}

	function a5s(e3, t7, f3) {
		return "rgb(" + e3 + "," + t7 + "," + f3 + ")"
	}

	function a6B(id, gC) {
		for (var ej = a5f.length, aB = 0; aB < ej; aB++) a5f[aB].id === id && gC-- <= 0 && (a5f.splice(aB, 1), aB--, ej--)
	}

	function a6C(id, player) {
		for (var ex = !1, aB = a5f.length - 1; 0 <= aB; aB--) a5f[aB].id !== id || player !== aD.eg && a5f[aB].player !== player || (a5f.splice(aB, 1), ex = !0);
		return ex
	}

	function a6Z(qC) {
		a5r(340, qC, 6, 0, a5s(215, 245, 255), bA.nb, -1, !1)
	}
	this.a5n = "", this.dZ = function() {
		var self;
		a5l = 0, a5k = a0.a1.ht() ? 7 : 12, a5j = {
			zc: [0, 0, 0],
			a5o: [0, 0, 0],
			eB: [220, 180, 180],
			ua: [0, 0, 0],
			f4: [0, 0, 0]
		}, a5f = [], this.resize(), aD.h7 && this.a00(0, 18), bR.wF.wG[bR.eP].name.length && a6Z(L(89, [bR.wF.wG[bR.eP].name])), a6Z(L(90, [bR.eu - 2 + "x" + (bR.ev - 2)])), a6Z(L(91, [b9.rU.z5(ao.a6a)])), ao.a6a !== ao.a6b && a6Z(L(92, [b9
			.rU.z5(ao.a6b) + " (" + b9.rU.a3s(100 * ao.a6b / ao.a6a, 1) + ")"
		])), 0 < ao.a6c && a6Z(L(65, [b9.rU.z5(ao.a6c) + " (" + b9.rU.a3s(100 * ao.a6c / ao.a6a, 1) + ")"])), 0 < ao.a6d && a6Z(L(93, [b9.rU.z5(ao.a6d) + " (" + b9.rU.a3s(100 * ao.a6d / ao.a6a, 1) + ")"])), 10 === aD.kP && a5r(120, L(94), 6,
			0, a5s(235, 255, 120), bA.nb, -1, !1), 0 !== (self = this).a5n.length && (a5r(200, self.a5n, 0, 0, bA.ne, bA.nb, -1, !1), self.a5n = ""), aD.a0g && a5r(340, L(43), 6, 0, a5s(255, 200, 0), bA.nb, -1, !1)
	}, this.resize = function() {
		var a5t, aB;
		if (j = (j = Math.floor((a0.a1.ht() ? .031 : .0249) * h.hu)) < 10 ? 10 : j, this.fontSize = Math.floor(2 * j / 3), this.a5S = b9.qV.sJ(1, this.fontSize), a5g = bb.gap, a5h = Math.floor(j / 5), 0 < a5f.length)
			for (a5t = a5f, a5f = [], aB = a5t.length - 1; 0 <= aB; aB--) a5r(a5t[aB].eI, a5t[aB].qC, a5t[aB].id, a5t[aB].player, a5t[aB].a5u, a5t[aB].a5v, a5t[aB].ki, a5t[aB].a5w, a5t[aB].a5x, a5t[aB].a5y, !0);
		this.a5z()
	}, this.a5z = function() {
		a5m = document.createElement("canvas");
		var qC = L(44),
			y0 = (a5i = aQ.measureText(qC, this.a5S) + 5 * a5h, a5m.height = j, a5m.width = a5i, a5m.getContext("2d", {
				alpha: !0
			}));
		y0.font = this.a5S, b9.qV.textBaseline(y0, 1), b9.qV.textAlign(y0, 1), y0.clearRect(0, 0, a5i, j), y0.fillStyle = bA.o1, y0.fillRect(0, 0, a5i, j), y0.fillStyle = bA.ne, y0.fillText(qC, Math.floor(a5i / 2), Math.floor(j / 2))
	}, this.a60 = function() {
		var ej;
		return av.hW ? av.i : 0 === (ej = a5f.length) ? 0 : 1 === ej ? a5f[0].a61 : a62(a5f[0].a61, a5f[1].a61)
	}, this.a63 = function() {
		var ej = a5f.length;
		return av.hW ? ej ? a62(av.i, a5f[0].a61) : av.i : 0 === ej ? 0 : 1 === ej ? a5f[0].a61 : 2 === ej ? a62(a5f[0].a61, a5f[1].a61) : a62(a62(a5f[0].a61, a5f[1].a61), a5f[2].a61)
	}, this.gw = function(eq, es) {
		for (var n4, a65, a66 = xw(), aB = a5f.length - 1; 0 <= aB; aB--)
			if ((a65 = a66 - (aB + 1) * j) <= es && es < a65 + j) return 50 === a5f[aB].id ? eq >= h.i - a5i - a5g - a5f[aB].i && (eq >= h.i - a5i - a5g ? b7.g5.pT(a5f[aB].player) : aH.mz(a5f[aB].player, 800, !1, 0), !0) : eq >= h.i - a5f[aB].i -
				a5g && (736 === a5f[aB].id ? (a65 = a5f[aB].qC.split(" "), window.open(a65[a65.length - 1], "_blank")) : a5f[aB].a5w && (a5f[aB].a5y && a5f[aB].a5y.f2 ? (a65 = a5f[aB].a5y.eV, n4 = bL.er(a65) - 10, a65 = bL.et(a65) - 10, aH
					.my(n4, a65, 19 + n4, 19 + a65)) : a5f[aB].a5y && a5f[aB].a5y.f3 ? aH.n0(a5f[aB].player, a5f[aB].a5y.n1) : (aH.mz(a5f[aB].player, 800, !1, 0), 0 <= a5f[aB].ki && (n4 = a5f[aB].ki, a5f[aB].ki = a5f[aB].player, a5f[
					aB].player = n4))), !0);
		return !1
	}, this.yH = function(dp, qC, id, gH, a5u, a5v, ki, a5w, a5x, a5y) {
		a5r(dp, qC, id, gH, a5u, a5v, ki, a5w, a5x, a5y)
	}, this.a68 = function(r) {
		a5r(300, r, 252, 0, bA.ne, bA.nb, -1, !1)
	}, this.a48 = function(id) {
		for (var aB = a5f.length - 1; 0 <= aB; aB--) a5f[aB].id === id && (a5f[aB].eI = 1)
	}, this.a00 = function(player, id) {
		0 === id ? (aQ.jE(player, 0), a6B(423, 0), a5r(160, L(45, [ag.a0N[player]]), 423, player, "rgb(10,220,10)", bA.nb, -1, !1)) : 1 === id ? (a6C(50, aD.eg), aQ.jE(player, 1), a5r(360, L(46, [ag.a0N[player]]), 0, player, bA.oK, bA.nb, -1, !
			0), aH.mz(player, 2700, !1, 0)) : 2 === id ? (aQ.jE(player, 2), a5r(0, L(47), 0, player, "rgb(10,255,255)", bA.nb, -1, !0), aH.mz(player, 2700, !1, 0)) : 3 === id ? (aQ.jE(player, 2), a5r(0, L(48, [ag.a0N[player]]), 0, player, bA
			.ne, bA.nb, -1, !0), aH.mz(player, 2700, !1, 0)) : 4 === id ? this.a6D(1, player, player) : 5 === id ? 2 === ag.a39[player] || b9.g5.jV(aD.eT) || (function(id, mZ) {
			var aB, a6N = 0,
				ej = a5f.length;
			for (aB = 0; aB < ej; aB++)
				if (a5f[aB].id === id && mZ <= ++a6N) return a5f.splice(aB, 1)
		}(1, 5), af.a6F(player) ? a5r(180, L(49, [ag.a0N[player]]), 1, player, a5s(255, 200, 180), bA.nb, -1, !0) : (a6B(573, 0), a5r(180, L(50, [ag.a0N[player]]), 573, player, bA.oK, bA.nb, -1, !0))) : 18 === id ? a5r(255, L(51), 18, 0, bA
			.ne, bA.nb, -1, !1) : 21 === id ? a5r(220, L(52), id, 0, bA.ne, bA.nb, -1, !1) : 22 === id ? this.a6D(2, player, player) : 59 === id && a5r(0, L(53), id, 0, bA.oc, bA.nb, 0, !1)
	}, this.a16 = function(r) {
		a5r(200, L(54, [r]), 94, 0, bA.ne, bA.oG, -1, !1)
	}, this.a0C = function(a6G) {
		if (aD.eT === a6G && !aD.kR)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			a5r(0, "Your Win Count is now " + __fx.wins.count, 3, a6G, bA.ne, bA.nb, -1, !0);
		ag.gX[a6G] && (aQ.jE(a6G, 2), aD.k7 < 100 ? a5r(0, L(48, [ag.a0N[a6G]]), 3, a6G, bA.ne, bA.nb, -1, !0) : a5r(0, L(55, [ag.a0N[a6G]]), 3, a6G, bA.ne, bA.nb, -1, !0))
	}, this.a5L = function(eN) {
		var a6I, qC, a6H = "(" + bL.er(eN >> 2) + ", " + bL.et(eN >> 2) + ")",
			a5w = !1,
			player = 0;
		ac.ee(eN) ? ac.ea(eN) ? a6H = L(56, [a6H]) : (player = ac.eb(eN), qC = L(57, [b9.y0.a2p(ag.a0S[player], b9.qV.sJ(0, 10), 150)]) + "   ", qC = (qC += L(58, [b9.rU.z5(ag.gl[player])]) + "   ") + L(59, [b9.rU.z5(ag.gX[player])]) + "   ", aD
				.he && (a6I = bf.a09[bf.kU[bf.eh[player]]], qC += L(60) + ": " + a6I + "   "), b9.g5.jV(player) && (qC += L(61) + ": " + aE.kI[aE.hT[player]] + "   "), a6H = qC = (qC += L(62, [player]) + "   ") + L(63, [a6H]), a5w = !0) : a6H =
			ac.eo(eN) ? L(64, [a6H]) + "   #" + ac.eR(eN) : L(65, [a6H]), be.dh = !0, a6B(55, 0), a5r(220, a6H, 55, player, bA.ne, bA.nb, -1, a5w, void 0, void 0, !0)
	}, this.a5N = function(a6J) {
		var l0 = bM.y,
			player = l0.lz[a6J] >> 3,
			qC = (be.dh = !0, a6B(55, 0), L(66, [ag.a0N[player]]) + "   ");
		a5r(220, qC += L(58, [b9.rU.z5(l0.a6K[a6J])]), 55, player, bA.ne, bA.nb, -1, !0)
	}, this.pD = function(oz, a6L, pE) {
		oz === aD.eT ? a5r(175, " " + L(67, [ag.a0N[a6L]]) + ": ", 1001, a6L, a5s(200, 255, 210), bA.nb, -1, !0, pE) : this.a6M(oz, pE)
	}, this.a6M = function(oz, pE) {
		a6B(1e3, 0), a5r(175, ag.a0N[oz] + ": ", 1e3, oz, bA.ne, "rgba(5,60,25,0.9)", -1, !0, pE)
	}, this.a0B = function() {
		var r;
		aD.zt ? (r = L(68), aQ.a0A(L(69), 2, 1, 12), a5r(0, r, 40, 0, "rgb(10,220,10)", bA.nb, -1, !1)) : (r = L(70), aQ.a0A(L(71), 2, 0, 16), a5r(0, r, 41, 0, bA.ne, bA.nb, -1, !1))
	}, this.y7 = function() {
		var gC = ag.a0N,
			em = aD.data;
		a5r(300, gC[0] + " [" + aD.a06.yD(em.elo[0]) + "] vs " + gC[1] + " [" + aD.a06.yD(em.elo[1]) + "]", 65, 0, bA.nV, "rgba(100,255,255,0.75)", -1, !1)
	}, this.a6O = function(r) {
		a5r(350, r, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.a6P = function(a6Q) {
		a5r(0, L(a6Q ? 72 : 73), 247, 0, bA.ob, bA.nb, -1, !1)
	}, this.yF = function(yC, yE, a6R) {
		var em = aD.data,
			gC = ag.a0N;
		a5r(0, gC[0] + ": " + aD.a06.yD(em.elo[0]) + " -> " + yC, 66, 0, bA.ne, a6R[0], -1, !1), a5r(0, gC[1] + ": " + aD.a06.yD(em.elo[1]) + " -> " + yE, 66, 1, bA.ne, a6R[1], -1, !1)
	}, this.pU = function(player, id) {
		0 === id ? a6C(50, player) ? (a5r(128, L(74, [ag.a0N[player]]), 52, player, a5s(180, 255, 180), bA.nb, -1, !0), af.q4(player, 2, 255)) : a5r(384, L(75, [ag.a0N[player]]), 51, player, a5s(210, 210, 255), bA.nb, -1, !0) : a6C(51, player) ?
			(a5r(128, L(76, [ag.a0N[player]]), 52, player, bA.ne, "rgba(60,120,10,0.9)", -1, !0), af.q4(player, 2, 255)) : (a5r(384, L(77, [ag.a0N[player]]), 50, player, bA.ne, "rgba(90,90,90,0.9)", -1, !0), af.q4(player, 2, 96))
	}, this.pY = function(zc, target) {
		var color = a5s(210, 255, 210);
		1 < zc.length ? a5r(230, L(78, [zc.length, ag.a0N[target]]), 66, target, color, bA.nb, -1, !0) : a5r(230, L(79, [ag.a0N[zc[0]], ag.a0N[target]]), 66, zc[0], color, bA.nb, target, !0)
	}, this.a6S = function(player, target) {
		a5r(230, L(80, [ag.a0N[player], ag.a0N[target]]), 66, player, bA.ne, "rgba(75,65,5,0.9)", target, !0)
	}, this.a6T = function(id, gC) {
		a6B(id, gC)
	}, this.zv = function(id, player) {
		a6C(id, void 0 === player ? aD.eg : player)
	}, this.a6U = function(id) {
		for (var aB = a5f.length - 1; 0 <= aB; aB--)
			if (a5f[aB].id === id) return a5f[aB];
		return null
	}, this.pP = function(a6V, a6W, player) {
		2 !== ag.a39[aD.eT] && (a5r(200, a6V = 1 === a6V ? L(81, [ag.a0N[player]]) : L(82, [b9.rU.z5(a6V), ag.a0N[player]]), 30, player, "rgb(190,255,190)", bA.nb, -1, !0), a6W) && (a6V = 1 === a6W ? L(83) : L(84, [b9.rU.z5(a6W)]), bp.yH(a6V))
	}, this.a6Y = function(a6V, player) {
		2 !== ag.a39[aD.eT] && (a6B(31, 0), 2 === ag.a39[player] || player >= aD.k7 ? a5r(150, 1 === a6V ? L(85, [ag.a0N[player]]) : L(86, [ag.a0N[player], b9.rU.z5(a6V)]), 31, player, bA.nV, "rgba(205,205,205,0.9)", -1, !0) : a5r(150, 1 ===
			a6V ? L(87, [ag.a0N[player]]) : L(88, [ag.a0N[player], b9.rU.z5(a6V)]), 31, player, bA.nV, "rgba(205,255,205,0.9)", -1, !0))
	}, this.zu = function(bs) {
		for (var f4 = be.k4(), aB = 2; 0 <= aB; aB--) 0 < a5j.ua[aB] && (bs || a5j.f4[aB] < f4 - 220) && this.a6e(aB)
	}, this.a6e = function(id) {
		var qC, ej = a5j.ua[id],
			player = a5j.zc[id];
		a5j.ua[id] = 0, 1 === ej ? (0 === id ? qC = L(95, [ag.a0N[player], ag.a0N[a5j.a5o[0]]]) : 1 === id ? qC = L(96, [ag.a0N[player]]) : 2 === id ? qC = L(97, [ag.a0N[player]]) : 3 === id && (qC = L(98, [ag.a0N[player]])), a6B(7, 0), a5r(a5j
			.eB[id], qC, 7, a5j.a5o[id], bA.ne, bA.nb, -1, !0)) : (qC = L(0 === id ? 99 : 1 === id ? 100 : 101, [ej]), a6B(7, 0), a5r(a5j.eB[id], qC, 7, player, bA.ne, bA.nb, -1, !1))
	}, this.a6D = function(id, hB, ki) {
		var f4 = be.k4(),
			ej = a5j.ua[id] + 1;
		a5j.ua[id]++, a5j.zc[id] = hB, a5j.a5o[id] = ki, 1 === ej && (a5j.f4[id] = f4), (1 === ej && (aD.zr < 32 || 2 === aD.zo) || 1 < ej && (a5j.f4[id] < f4 - 140 || 2 === aD.zo)) && this.a6e(id)
	}, this.j0 = function() {
		b1.j0();
		for (var jN = (jN = a5f.length - a5k) <= 1 ? 1 : jN * jN, aB = a5f.length - 1; 0 <= aB; aB--) 0 < a5f[aB].eI && (a5f[aB].eI -= jN, a5f[aB].eI <= 0) && (be.dh = !0, a5f.splice(aB, 1));
		! function() {
			var gC, aB;
			if (128 !== a5l && !(++a5l < 128))
				for (gC = 5, aB = al.k8 - 1; 0 <= aB; aB--) 1 === ag.a39[al.k9[aB]] && 0 < gC-- && a5r(240, L(98, [ag.a0N[al.k9[aB]]]), 1, al.k9[aB], bA.nV, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.zu(!1)
	}, this.ub = function() {
		for (var x0, es = xw(), aB = a5f.length - 1; 0 <= aB; aB--) x0 = es - (aB + 1) * j, 50 === a5f[aB].id ? (uc.drawImage(a5f[aB].canvas, h.i - a5f[aB].i - a5i - a5g, x0), uc.drawImage(a5m, h.i - a5i - a5g, x0)) : uc.drawImage(a5f[aB].canvas,
			h.i - a5f[aB].i - a5g, x0)
	}
}

function cD() {
	var a6g, a6h, a6i, i, j, font, qC;

	function a6n(a6o) {
		return a6o < 10 ? "0" + a6o : String(a6o)
	}
	this.dZ = function() {
		qC = L(102)
	}, this.resize = function() {
		i = Math.floor((a0.a1.ht() ? .53 : .36) * h.hu), j = Math.floor(.065 * i), font = b9.qV.sJ(1, Math.floor(.9 * j)), a6i--, this.setTime()
	}, this.j0 = function() {
		this.setTime() && (be.dh = !0)
	}, this.setTime = function() {
		for (var dp = new Date, a6j = dp.getUTCMinutes(), a6k = dp.getUTCSeconds(), a6l = [0, 10, 20, 25, 30, 35, 40, 45, 50], a6m = (a6h = 3600 - 60 * a6j - a6k, a6h %= 300, 300), aB = 0; aB < a6l.length; aB++)
			if ((60 * a6j + a6k + a6h) % 3600 == 60 * a6l[aB]) {
				a6m = 0;
				break
			} return a6h += a6m, a6g = qC + a6n(Math.floor(a6h / 60)) + ":" + a6n(a6h % 60), a6i !== (a6i = 60 * a6j + a6k) && (i = aQ.measureText(a6g, font), i += Math.floor(.4 * j), !0)
	}, this.ub = function() {
		uc.lineWidth = 1 + Math.floor(j / 15), uc.translate(h.i - j, Math.floor(.5 * (h.j + i))), uc.rotate(-Math.PI / 2), uc.fillStyle = bA.ne, uc.fillRect(0, 0, i, j), uc.strokeStyle = bA.nV, uc.strokeRect(0, 0, i, j + 10), uc.fillStyle = bA
			.nV, uc.font = font, b9.qV.textBaseline(uc, 1), b9.qV.textAlign(uc, 1), uc.fillText(a6g, Math.floor(i / 2), Math.floor(.59 * j)), uc.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function cE() {
	var a4l, a6p, a6q, wm, a6r, a6s = 0,
		a6t = 0;

	function a6v(aB) {
		var a6x = !0,
			yu = bA.ne,
			i = (1 === a4l[aB].id ? a4l[aB].y0.fillStyle = bA.oX : a4l[aB].jH === aD.eg ? a4l[aB].y0.fillStyle = bA.np : (ac.a6y(a4l[aB].jH), a4l[aB].y0.fillStyle = b9.color.nY(bN.fI[0], bN.fI[1], bN.fI[2], .87), 400 < b9.qd.a2H(bN.fI, 0, 2) && (
				a6x = !1, yu = bA.nV)), a4l[aB].canvas.width),
			sq = (a4l[aB].y0.clearRect(0, 0, i, wm), a4l[aB].y0.fillRect(0, 0, i, wm), a4l[aB].y0.fillStyle = yu, ! function(y0, i, wm) {
				y0.fillRect(0, 0, i, 1), y0.fillRect(0, wm - 1, i, 1), y0.fillRect(0, 0, 1, wm), y0.fillRect(i - 1, 0, 1, wm)
			}(a4l[aB].y0, i, wm), a6p + 2 * wm < i && (a4l[aB].y0.fillRect(i - a6p - wm, 0, 1, wm), a4l[aB].y0.fillText(ag.a0N[a4l[aB].jH], Math.floor((i - a6p) / 2), Math.floor(.57 * wm))), 0 !== a4l[aB].id ? 0 : wm);
		a4l[aB].y0.fillText(b9.rU.z5(a4l[aB].hT), Math.floor(i - a6p / 2 - sq), Math.floor(.57 * wm)),
			function(aB, i, sq, a6x) {
				a4l[aB].y0.fillStyle = a6x ? bA.ng : bA.nc;
				a6x = Math.floor(a6p * a4l[aB].hT / a4l[aB].a74);
				a4l[aB].y0.fillRect(Math.floor(i - a6p - sq), wm - a6r, a6x, a6r)
			}(aB, i, sq, a6x), 0 === a4l[aB].id ? (a71(aB, i, a6x, yu), function(aB, i, a6x) {
				a4l[aB].y0.strokeStyle = a6x ? bA.nw : bA.o6, a4l[aB].y0.fillRect(wm, 0, 1, wm);
				a6x = i - wm;
				a4l[aB].y0.beginPath(), a4l[aB].y0.moveTo(Math.floor(.3 * wm + a6x), Math.floor(wm / 2)), a4l[aB].y0.lineTo(Math.floor(wm - .3 * wm + 0 + a6x), Math.floor(wm / 2)), a4l[aB].y0.stroke(), a4l[aB].y0.beginPath(), a4l[aB].y0.moveTo(
					Math.floor(wm / 2 + a6x), Math.floor(.3 * wm)), a4l[aB].y0.lineTo(Math.floor(wm / 2 + a6x), Math.floor(wm - .3 * wm + 0)), a4l[aB].y0.stroke()
			}(aB, i, a6x)) : a71(aB, 2 * wm, a6x, yu)
	}

	function a71(aB, i, a6x, yu) {
		a4l[aB].y0.strokeStyle = a4l[aB].a75 ? bA.nn : a6x ? bA.oC : bA.oD, a4l[aB].y0.fillStyle = yu, a4l[aB].y0.fillRect(i - wm, 0, 1, wm), a4l[aB].y0.lineWidth = Math.max(Math.floor(wm / 12), 3), a4l[aB].y0.lineCap = "round";
		a6x = .35;
		i = wm + 1, a4l[aB].y0.beginPath(), a4l[aB].y0.moveTo(Math.floor(i - a6x * wm + 0), Math.floor(a6x * wm)), a4l[aB].y0.lineTo(Math.floor(i - wm + a6x * wm), Math.floor(wm - a6x * wm + 0)), a4l[aB].y0.stroke(), a4l[aB].y0.beginPath(), a4l[aB]
			.y0.moveTo(Math.floor(i - wm + a6x * wm), Math.floor(a6x * wm)), a4l[aB].y0.lineTo(Math.floor(i - a6x * wm + 0), Math.floor(wm - a6x * wm + 0)), a4l[aB].y0.stroke()
	}

	function a7H(g, a7F) {
		for (var hT, aB = a7F - 1; 0 <= aB; aB--) hT = ad.fw(aD.eT, aB), g[aB].hT !== hT && (g[aB].hT = hT, g[aB].a74 = Math.max(hT, g[aB].a74), g[aB].a6w = !0)
	}

	function a7L(g, a7J) {
		for (var t3 = aD.eT << 3, a6K = bM.y.a6K, lw = bM.y.lw, a7N = bM.y.a7N, aB = a7J - 1; 0 <= aB; aB--) {
			var a7O = a7N[t3 + aB],
				hT = a6K[a7O];
			g[aB].hT !== hT ? (g[aB].hT = hT, g[aB].a74 = Math.max(hT, g[aB].a74), g[aB].a6w = !0) : g[aB].a75 || lw[a7O] % 64 != 5 || (g[aB].a75 = !0, g[aB].a6w = !0)
		}
	}

	function a6u(a4m) {
		a4m.canvas = document.createElement("canvas"), bR.wL.font = a6q;
		var i = a6p;
		a4m.jH < aD.eg && 0 === a4m.id && (i += Math.floor(bR.wL.measureText(ag.a0N[a4m.jH] + "000").width)), i += wm, 0 === a4m.id && (i += wm), a4m.canvas.width = i, a4m.canvas.height = wm, a4m.y0 = a4m.canvas.getContext("2d", {
			alpha: !0
		}), a4m.y0.font = a6q, b9.qV.textBaseline(a4m.y0, 1), b9.qV.textAlign(a4m.y0, 1)
	}

	function a7B(aB) {
		return aU.a7P() ? h.i - a4l[aB].canvas.width - bb.gap : aU.eq
	}

	function a7C(aB) {
		return Math.floor(2 * bb.gap + (aU.a7P() ? aW.j + bb.gap : 0) + aU.j + aB * (1.3 * wm))
	}
	this.dZ = function() {
		a6s = a6t = 0, a4l = [], this.resize()
	}, this.resize = function() {
		a6q = aN.a5S, wm = aN.fontSize + 5, wm = Math.floor(1.25 * wm), a0.a1.ht() && (wm = Math.floor(1.25 * wm)), a6r = Math.floor(.15 * wm), bR.wL.font = a6q, a6p = Math.floor(bR.wL.measureText("02 000 000 0000").width);
		for (var aB = a4l.length - 1; 0 <= aB; aB--) a6u(a4l[aB]), a6v(aB)
	}, this.mQ = function() {
		for (var aB = a4l.length - 1; 0 <= aB; aB--) a4l[aB].a6w && (a4l[aB].a6w = !1, a6v(aB))
	}, this.gw = function(lK, lL) {
		if (2 !== aD.zo && 0 !== ag.me[aD.eT] && !aD.gs && !b9.g5.jV(aD.eT))
			for (var a76, a77, a78, a79 = a0.a1.ht() ? wm : 0, a7A = a0.a1.ht() ? Math.floor(.15 * wm) : 0, aB = a4l.length - 1; 0 <= aB; aB--)
				if (a76 = a7B(aB), a77 = a7C(aB), a78 = a4l[aB].canvas.width, a77 - a7A <= lL && lL <= a77 + wm + a7A) {
					if (a76 - a79 <= lK && lK <= a76 + wm + a79) return a4l[aB].a75 || (a4l[aB].a6w = !0, a4l[aB].a75 = !0, 0 === a4l[aB].id ? b7.h9.pB(a4l[aB].jH) : b7.h9.pA(a4l[aB].jH)), !0;
					if (0 === a4l[aB].id && a76 + a78 - wm - a79 <= lK && lK <= a76 + a78 + a79) return bU.a5B(3), b7.h9.hG(aR.hD(), a4l[aB].jH), !0
				} return !1
	}, this.j0 = function() {
		var a2P, a2Q, g, a7F;
		0 === ag.me[aD.eT] || b9.g5.jV(aD.eT) && !aD.gs || (a2P = a4l.slice(0, a6s), a2Q = a4l.slice(a6s, a6s + a6t), g = a2P, a7F = ad.fq(aD.eT), function(g, a7F) {
			if (a6s !== a7F) return 1;
			for (var aB = a7F - 1; 0 <= aB; aB--)
				if (g[aB].jH !== ad.fv(aD.eT, aB)) return 1;
			return
		}(g, a7F) ? a7H(g = function(g, a7F) {
			var aB, jH, f3, hT, a5t = [];
			loop: for (aB = 0; aB < a7F; aB++) {
				for (jH = ad.fv(aD.eT, aB), f3 = 0; f3 < g.length; f3++)
					if (g[f3].jH === jH) {
						a5t.push(g.splice(f3, 1)[0]);
						continue loop
					} hT = ad.fw(aD.eT, aB), a6u(hT = {
					jH: jH,
					hT: hT,
					a74: hT,
					id: 0,
					a6w: !0,
					a75: !1,
					canvas: null,
					y0: null
				}), a5t.push(hT)
			}
			return a5t
		}(g, a7F), a7F) : a7H(g, a7F), a2P = g, a2Q = function(g) {
			var a7J = bM.y.pn[aD.eT];
			return function(g, a7J) {
				if (a6t !== a7J) return 1;
				for (var t3 = aD.eT << 3, ly = bM.y.ly, a7N = bM.y.a7N, aB = a7J - 1; 0 <= aB; aB--) {
					var a7O = a7N[t3 + aB];
					if (g[aB].jH !== ly[a7O]) return 1
				}
				return
			}(g, a7J) ? a7L(g = function(g, a7J) {
				var aB, jH, f3, a5t = [],
					t3 = aD.eT << 3,
					ly = bM.y.ly,
					a6K = bM.y.a6K,
					a7N = bM.y.a7N;
				loop: for (aB = 0; aB < a7J; aB++) {
					var a7O = a7N[t3 + aB];
					for (jH = ly[a7O], f3 = 0; f3 < g.length; f3++)
						if (g[f3].jH === jH) {
							a5t.push(g.splice(f3, 1)[0]);
							continue loop
						} a7O = a6K[a7O], a6u(a7O = {
						jH: jH,
						hT: a7O,
						a74: a7O,
						id: 1,
						a6w: !0,
						a75: !1,
						canvas: null,
						y0: null
					}), a5t.push(a7O)
				}
				return a5t
			}(g, a7J), a7J) : a7L(g, a7J), g
		}(a2Q), a6s = a2P.length, a6t = a2Q.length, a4l = a2P.concat(a2Q))
	}, this.ub = function() {
		if (0 !== ag.me[aD.eT] && (!b9.g5.jV(aD.eT) || aD.gs))
			for (var aB = a4l.length - 1; 0 <= aB; aB--) uc.drawImage(a4l[aB].canvas, a7B(aB), a7C(aB))
	}
}

function cF() {
	var a5f, kC, a7Q, a7R, j, a5S, fontSize, a7S, a7T, a7U, a7V, canvas, y0, mr, a7W;

	function ut(aB) {
		return L(0 === aB ? 103 : 1 === aB ? 104 : 2 === aB ? 105 : 106)
	}

	function a7d() {
		uc.drawImage(canvas, bb.gap + (aD.he ? bb.gap + bg.a7e() : 0), a7f + 2 * bb.gap)
	}

	function a7X() {
		canvas.width = a5f[0].width + a7U, canvas.height = j + a7U, (y0 = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, a5f[0].width + a7U, j + a7U), y0.translate(Math.floor(a7U / 2), Math.floor(a7U / 2)), y0.lineWidth = a7U, y0.fillStyle = 1 === a5f[0].a7c ? bA.nj : bA.nb, a7g(), y0.fill(), y0.strokeStyle = 1 === a5f[0].a7c ? bA.nV :
			bA.ne, a7g(), y0.stroke(), b9.qV.textAlign(y0, 1), b9.qV.textBaseline(y0, 1), y0.fillStyle = 1 === a5f[0].a7c ? bA.nV : bA.ne, y0.font = a5S[0], y0.fillText(ut(a5f[0].a7b), Math.floor(a5f[0].width / 2), Math.floor(.72 * a7S[0] * j)), y0
			.font = a5S[1], y0.fillText(a5f[0].qC, Math.floor(a5f[0].width / 2), Math.floor((a7S[0] + .48 * a7S[1]) * j))
	}

	function a7g() {
		y0.beginPath(), y0.moveTo(a7V, 0), y0.lineTo(a5f[0].width - a7V, 0), y0.lineTo(a5f[0].width, a7V), y0.lineTo(a5f[0].width, j - a7V), y0.lineTo(a5f[0].width - a7V, j), y0.lineTo(a7V, j), y0.lineTo(0, j - a7V), y0.lineTo(0, a7V), y0.closePath()
	}
	this.dZ = function() {
		kC = 4, a7Q = a7R = mr = 0, a5f = [], a5S = new Array(2), fontSize = new Array(2), (a7S = new Array(2))[0] = .3, a7S[1] = .7, a7T = new Array(4), canvas = document.createElement("canvas"), a7W = be.eI + 2e3, this.resize()
	}, this.resize = function() {
		var aB, i;
		for (j = Math.floor((a0.a1.ht() ? .0725 : .058) * h.hu), fontSize[0] = Math.floor(.85 * a7S[0] * j), fontSize[1] = Math.floor(.85 * a7S[1] * j), a5S[0] = b9.qV.sJ(1, fontSize[0]), a5S[1] = b9.qV.sJ(1, fontSize[1]), aB = a7T.length -
			1; 0 <= aB; aB--) a7T[aB] = this.measureText(ut(aB) + "000", a5S[0]);
		if (a7U = Math.floor(1 + .05 * j), a7V = Math.floor(.2 * j), 0 < a5f.length) {
			for (aB = a5f.length - 1; 0 <= aB; aB--) i = this.measureText(a5f[aB].qC + "00", a5S[1]), a5f[aB].width = i < a7T[aB] ? a7T[aB] : i;
			a7X()
		}
	}, this.j0 = function() {
		0 !== kC && (4 === kC ? be.eI > a7W && (kC = 0, 1 === aD.zo) && aQ.a0A(bR.wF.wG[bR.eP].name, 3, 1, 9) : (1 === kC ? (0 === a7Q && (a7X(), a7Q = 1e-4), 1 <= (a7Q += .002 * (be.eI - mr)) && (a7R = 0, kC = 2, a7Q = 1), be.dh = !0) : 2 ===
			kC ? ((a7R += (be.eI - mr) / 1e3) > a5f[0].eB || 1 < a7R && 1 < a5f.length) && (kC = 3) : 3 === kC && ((a7Q -= .002 * (be.eI - mr)) <= 0 && (a7Q = 0, a5f.shift(), kC = 0 < a5f.length ? 1 : 0), be.dh = !0), mr = be.eI))
	}, this.measureText = function(qC, a5S) {
		return uc.font = a5S, Math.floor(uc.measureText(qC).width)
	}, this.jE = function(a7a, aB) {
		this.a0A(ag.a0N[a7a], aB, 1, 0 === aB ? 3 : 7)
	}, this.a0A = function(qC, a7b, a7c, eB) {
		var i;
		qC.length && (i = (i = this.measureText(qC + "00", a5S[1])) < a7T[a7b] ? a7T[a7b] : i, a5f.push({
			qC: qC,
			width: i,
			a7b: a7b,
			a7c: a7c,
			eB: eB
		}), 0 === kC) && (a7Q = 0, kC = 1, mr = be.eI)
	}, this.ub = function() {
		0 !== kC && 0 !== a7Q && (a7Q < 1 ? (uc.globalAlpha = a7Q, a7d(), uc.globalAlpha = 1) : a7d())
	}
}

function cn() {
	var j, canvas, y0, a7h, a7i, a7j, a7k, a6w, a7l, a7m, a7n, a7o, a6Q = !1,
		a2d = (this.hW = !1, this.i = 0, new Array(2)),
		a7p = 0;

	function mR() {
		var i = av.i,
			l0 = (a6w = !1, xz(y0, i, j), Math.floor(i / 2));
		1 === a7h ? (y0.fillStyle = bA.ny, y0.fillRect(l0, 0, l0, j)) : -1 === a7h && (y0.fillStyle = bA.oE, y0.fillRect(0, 0, l0, j)), y1(y0, i, j, 2);
		var l0 = (l0 = Math.floor(.25 * j)) < 2 ? 2 : l0,
			a6a = (y0.fillStyle = bA.nk, Math.floor((j - 4) * a7i[1] / a7j[1]));
		0 < a6a && y0.fillRect(2, j - 2 - a6a, l0, a6a), 0 < (a6a = Math.floor((j - 4) * a7i[0] / a7j[0])) && y0.fillRect(i - 2 - l0, j - 2 - a6a, l0, a6a);
		l0 = (l0 = Math.floor(j / 8)) < 2 ? 2 : l0, y3(y0, Math.floor(.4 * j), 0, j, l0, .5, !1), y3(y0, Math.floor(i - 1.4 * j), 0, j, l0, .5, !0), a6a = 1.1 * j / a2d[0].width;
		y0.imageSmoothingEnabled = !0, y0.setTransform(a6a, 0, 0, a6a, (i - a6a * a2d[0].width) / 2, -.05 * j), y0.drawImage(a2d[+a6Q], 0, 0), y0.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a7u() {
		a7o = -1, a6Q = ah.a7v(), aN.a48(257), aN.a6P(a6Q), av.hW = !0, a6w = !0, a7l = 360;
		for (var fB, dp = 0, aB = al.k8 - 1; 0 <= aB; aB--) b9.g5.jV(al.k9[aB]) || (dp += ag.gX[al.k9[aB]]);
		a6Q ? a7j[0] = Math.max(bK.dq(3 * dp, 4), 1) : aD.he ? 9 === aD.kP && 8 === bf.kU[bg.kf()] ? a7j[0] = Math.max(dp, 1) : (fB = bK.dq(100 * bg.kd(), aD.jr), fB = bK.hs(200 - 2 * fB, 40, 100), fB = bK.dq(fB * dp, 100), a7j[0] = Math.max(fB,
			1)) : a7j[0] = Math.max(bK.dq(3 * dp, 5), 1), a7j[1] = Math.max(dp - a7j[0], 1)
	}

	function a7q() {
		a7n = be.k4(), a6w = !0, a7l = a7h = 0, a7k = [], av.hW = !1, aN.zv(247), a7i[0] = a7i[1] = 0, aN.a48(673)
	}

	function xw() {
		return aR.a64(aN.a60()) ? __fx.settings.keybindButtons ? aR.es - 2 * (j + bb.gap) : aR.es - j - bb.gap : bB.a64(aN.a63()) ? bB.xw() - j - bb.gap : h.j - j - bj.a4r() * bb.gap
	}
	this.da = function() {
		for (var aB = 0; aB < 2; aB++) a2d[aB] = b9.canvas.yY(ab.get(3), 8 - aB, bA.op), a2d[aB] = b9.canvas.a2f(a2d[aB])
	}, this.dZ = function() {
		a7n = -1e4, a7m = a7p = 0, a7o = -1, this.hW = !1, a6w = a6Q = !1, a7i = [a7h = a7l = 0, 0], a7j = [1, 1], a7k = [], this.resize()
	}, this.resize = function() {
		j = aR.j, this.i = 4 * j, (canvas = document.createElement("canvas")).width = this.i, canvas.height = j, y0 = canvas.getContext("2d", {
			alpha: !0
		}), mR()
	}, this.mQ = function() {
		a6w && mR()
	}, this.gw = function(eq, es) {
		return !!this.hW && !(eq < h.i - this.i - bb.gap || es < xw() || (aD.gs || this.hX(aD.eT) && (aM.gt && aM.a1u(), b7.h9.hY(eq > h.i - bb.gap - this.i / 2 ? 1 : 0)), 0))
	}, this.j0 = function() {
		0 < a7m ? 0 === --a7m && a7q() : this.hW ? 180 == --a7l && 3 * a7i[0] < a7j[0] ? a7q() : a7i[0] >= a7j[0] ? a6Q ? bQ.zQ.zj() : bQ.zQ.zn() : a7i[1] >= a7j[1] ? a7m = 4 : a7l <= 0 && a7q() : ! function() {
			var a7x = be.k4();
			if (a7x % 40 == 14) {
				if (a7p) return !(a7x < a7p) && !(a7x < a7n + 535) && (a7p = a7x + 1071, b9.g5.a3C()) ? (a7u(), 1) : 0;
				(1 === al.k8 || (aD.he ? bg.kd() : ag.gX[lg[0]]) >= bK.dq(96 * aD.jr, 100)) && (a7p = a7x + 535)
			}
			return
		}() && 0 <= a7o && (aN.yH(250, L(107, [ag.a0N[a7o]]), 673, a7o, bA.ne, bA.nb, -1, !0), a7u())
	}, this.zp = function() {
		this.hW && a7i[0] < a7j[0] && a7q()
	}, this.q5 = function(player, a7y) {
		var a7z = L(a7y ? 108 : 109, [ag.a0N[player]]),
			a7z = (aN.yH(450, a7z, 257, player, a7y ? bA.nw : bA.oB, bA.nb, -1, !0), a7k.push(player), a6w = !0, aD.kR ? Math.max(a7j[0], a7j[1]) : ag.gX[player]),
			a7z = Math.max(a7z, 1);
		a7y ? a7i[0] += a7z : a7i[1] += a7z, player === aD.eT && (a7h = a7y ? 1 : -1)
	}, this.ub = function() {
		var es;
		this.hW && (es = xw(), uc.drawImage(canvas, h.i - this.i - bb.gap, es))
	}, this.hZ = function(player) {
		return !(!aD.kR && be.k4() < a7n + 140 || 0 !== a7l || !b9.g5.gu(1) || !b9.g5.gv(player) || 10 <= js[player] && !b9.g5.a3W(player, 9))
	}, this.hX = function(gH) {
		if (!b9.g5.gu(1)) return !1;
		if (!b9.g5.gv(gH)) return !1;
		if (!this.hW) return !1;
		for (var aB = a7k.length - 1; 0 <= aB; aB--)
			if (a7k[aB] === gH) return !1;
		return !0
	}, this.hV = function(player) {
		a7o = player
	}
}

function cG() {
	var i, eq, a80, canvas, y0, hW, iK, a3z, a5S, a6w, a81 = 11 / 12;

	function a83() {
		var a73 = Math.floor(iK * (i - 2 * a80)),
			a86 = 1 + Math.floor(.0625 * aR.j),
			a87 = 1 + Math.floor(.3 * aR.j),
			a88 = Math.floor(.55 * aR.j);
		y0.clearRect(0, 0, i, aR.j), y0.fillStyle = bA.na, y0.fillRect(0, 0, a80, aR.j), y0.fillRect(a80 + a73, 0, i - a80 - a73, aR.j), y0.fillStyle = iK < 1 / 3 ? "rgba(" + Math.floor(3 * iK * 130) + ",130,0,0.85)" : iK < 2 / 3 ? "rgba(130," + (
				130 - Math.floor(3 * (iK - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (iK - 2 / 3) * 130) + ",0.85)", y0.fillRect(a80, 0, a73, aR.j), y0.fillStyle = bA.ne, y0.fillRect(0, 0, i, 1), y0.fillRect(0, aR.j - 1, i, 1), y0
			.fillRect(0, 0, 1, aR.j), y0.fillRect(a80, 0, 1, aR.j), y0.fillRect(a80 + a73, 0, 1, aR.j), y0.fillRect(i - a80, 0, 1, aR.j), y0.fillRect(i - 1, 0, 1, aR.j), y0.fillRect(Math.floor(.25 * aR.j) + a87, Math.floor((aR.j - a86) / 2), aR.j -
				2 * a87, a86), y0.fillRect(Math.floor(i - 1.25 * aR.j) + a87, Math.floor((aR.j - a86) / 2), aR.j - 2 * a87 - a87 % 2, a86), y0.fillRect(Math.floor(i - 1.25 * aR.j) + Math.floor((aR.j - a86) / 2), a87, a86, aR.j - 2 * a87 - a87 % 2),
			a3z = b9.g5.iJ(aD.eT, aR.hD()), y0.fillText(b9.rU.z5(a3z) + " (" + b9.rU.a3s(100 * iK, +(iK < .1)) + ")", Math.floor(.5 * i), a88)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		iK = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => aR.a1q(arg1);

	function a8D(a2C) {
		return !(1 < a2C && 1 === iK || (1 < a2C && a2C * iK - iK < 1 / 1024 ? a2C = (iK + 1 / 1024) / iK : a2C < 1 && iK - a2C * iK < 1 / 1024 && (a2C = (iK - 1 / 1024) / iK), iK = bK.hs(iK * a2C, 1 / 1024, 1), a83(), 0))
	}

	function a8E(lK) {
		return iK !== (iK = bK.hs((lK - eq - a80) / (i - 2 * a80), 1 / 1024, 1)) && (a83(), !0)
	}
	__fx.keybindFunctions.repaintAttackPercentageBar = function() {
		a83(), be.dh = !0
	}, this.es = 0, this.gx = !1, this.dZ = function() {
		hW = !aD.h7 && !aD.gs, a6w = !1, iK = .5, a3z = 0, this.gx = !1, this.resize()
	}, this.resize = function() {
		a0.a1.ht() && h.i < .8 * h.j ? (this.j = Math.floor(.066 * h.hu), i = h.i - 4 * bb.gap - this.j) : (i = Math.floor((a0.a1.ht() ? .65 : .389) * h.hu), i += 12 - i % 12, this.j = Math.floor(i / 12)), a80 = Math.floor(3 * this.j / 2), a5S =
			b9.qV.sJ(1, Math.floor(.5 * this.j)), (canvas = document.createElement("canvas")).width = i, __fx.mobileKeybinds.setSize(i, this.j, uc), canvas.height = this.j, (y0 = canvas.getContext("2d", {
				alpha: !0
			})).font = a5S, b9.qV.textBaseline(y0, 1), b9.qV.textAlign(y0, 1), this.a82(), a83()
	}, this.a82 = function() {
		eq = a0.a1.ht() && h.i < .8 * h.j ? this.j + 3 * bb.gap : Math.floor((h.i - i) / 2), this.es = h.j - this.j - bj.a4r() * bb.gap
	}, this.mQ = function() {
		a6w && (a6w = !1, a83())
	}, this.hW = function() {
		return !(!hW || aM.gt && eq < Math.floor(bb.gap + 5.5 * this.j))
	}, this.a64 = function(a89) {
		return !!this.hW() && eq + i > h.i - a89 - bb.gap
	}, this.a46 = function() {
		hW = !aD.gs
	}, this.a7q = function() {
		hW = !1
	}, this.hD = function() {
		return bK.hs(Math.floor(1024 * iK + .5) - 1, 0, 1023)
	}, this.a1n = function(lK, lL) {
		return this.hW() && eq < lK && lK < eq + i && lL > this.es
	}, this.gw = function(lK, lL) {
		if (!this.hW()) return !1;
		if (!(__fx.settings.keybindButtons && lL > this.es - Math.floor(bb.gap / 4) - this.j && lL < this.es - Math.floor(bb.gap / 4) && __fx.mobileKeybinds.click(lK - eq))) {
			if (!aR.a1n(lK, lL)) return !1;
			aS.n9 = !1, ! function(s6, lK, lL) {
				if (function(lK, lL) {
						return eq < lK && lK < eq + a80 && lL > aR.es
					}(lK, lL)) return a8D(a81);
				if (function(lK, lL) {
						return eq + i - a80 < lK && lK < eq + i && lL > aR.es
					}(lK, lL)) return a8D(1 / a81);
				return s6.gx = !0, a8E(lK)
			}(this, lK, lL) || (be.dh = !0)
		}
		return !0
	}, this.a1q = function(nG) {
		0 !== aD.zo && this.hW() && a8D(nG) && (be.dh = !0)
	}, this.a1M = function(deltaY) {
		var nG;
		return !(0 === deltaY || !this.hW()) && a8D(nG = 0 < deltaY ? (nG = 400 / (400 + deltaY)) < a81 ? a81 : nG : 1 / a81 < (nG = (400 - deltaY) / 400) ? 1 / a81 : nG)
	}, this.a1J = function(lK) {
		return !!this.gx && a8E(lK)
	}, this.a1j = function() {
		this.gx = !1
	}, this.j0 = function() {
		this.hW() && a3z !== b9.g5.iJ(aD.eT, this.hD()) && (a6w = !0)
	}, this.ub = function() {
		this.hW() && (uc.drawImage(canvas, eq, this.es), __fx.settings.keybindButtons) && __fx.mobileKeybinds.draw(uc, eq, this.es)
	}
}

function cx() {
	var canvas, y0, a8F, font, a8G = 0,
		a8H = !1,
		a8I = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		a8J = 5;

	function a8Q() {
		if (a8H) {
			var aB, ej = a8I.length,
				a88 = Math.floor(.5 * a8F.j),
				j = ej * a88,
				eq = Math.floor(Math.floor(a8F.eq) + .3 * a8F.i - .5),
				es = Math.floor(Math.floor(a8F.es) - j),
				i = Math.floor(.4 * a8F.i + 2.5);
			for (uc.fillStyle = bA.na, uc.fillRect(eq, es, i, j), uc.fillStyle = bA.o3, uc.fillRect(eq, es + a8J * a88, i, a88), uc.fillStyle = bA.ne, uc.fillRect(eq, es, 2, j), uc.fillRect(eq, es, i, 2), uc.fillRect(eq + i - 2, es, 2, j), aB =
				1; aB < ej; aB++) uc.fillRect(eq, es + aB * a88, i, 2);
			for (uc.fillStyle = bA.ne, b9.qV.textAlign(uc, 1), b9.qV.textBaseline(uc, 1), uc.font = b9.qV.sJ(0, .6 * a88), eq += .5 * i, aB = 0; aB < ej; aB++) uc.fillText(a8Y(aB), eq, es + (aB + .6) * a88)
		}
		uc.drawImage(canvas, Math.floor(a8F.eq), Math.floor(a8F.es))
	}

	function mR(s6) {
		var eq, n4, n5, a88;
		y0.clearRect(0, 0, Math.floor(a8F.i), Math.floor(a8F.j)), y0.fillStyle = bA.na, y0.fillRect(0, 0, Math.floor(a8F.i), Math.floor(a8F.j)), aD.n7 && (y0.fillStyle = bA.o3, y0.fillRect(0, 0, Math.floor(.3 * a8F.i), Math.floor(a8F.j))), y0
			.fillStyle = bA.ne, y0.fillText("Hide UI", .15 * a8F.i, .5 * a8F.j), y0.fillRect(Math.floor(.3 * a8F.i - .5), 0, 2, Math.floor(a8F.j)), eq = .5 * a8F.i, y0.fillText("Replay Speed", eq, .31 * a8F.j), y0.fillText(a8Y(a8J), eq, .69 * a8F.j),
			y0.fillRect(Math.floor(.7 * a8F.i - .5), 0, 2, Math.floor(a8F.j)), s6.a4d ? (eq = Math.floor(.02 * a8F.i), s6 = Math.floor(.025 * a8F.i), n4 = Math.floor(.85 * a8F.i - eq - .5 * s6), n5 = Math.floor(.25 * a8F.j), a88 = Math.floor(a8F.j) -
				2 * n5, y0.fillRect(n4, n5, eq, a88), y0.fillRect(n4 + eq + s6, n5, eq, a88)) : function() {
				var i = Math.floor(.46 * a8F.j),
					j = Math.floor(.23 * a8F.j),
					eq = Math.floor(.85 * a8F.i - .5 * i + i / 12),
					es = Math.floor(.5 * a8F.j - j);
				y0.beginPath(), y0.moveTo(eq, es), y0.lineTo(eq + i, es + j), y0.lineTo(eq, es + (j << 1)), y0.fill()
			}(), y0.fillRect(0, 0, Math.floor(a8F.i), 2), y0.fillRect(0, 0, 2, Math.floor(a8F.j)), y0.fillRect(0, Math.floor(a8F.j) - 2, Math.floor(a8F.i), 2), y0.fillRect(Math.floor(a8F.i - 2), 0, 2, Math.floor(a8F.j))
	}

	function a8Y(aB) {
		return 5 === aB ? "Normal" : "" + a8I[aB]
	}
	this.a4d = !1, this.dZ = function() {
		aD.gs && (a8J = 5, this.a4d = !1, a8H = !1, a8F = new r6([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.a8K = function() {
		return a8I[a8J]
	}, this.xw = function() {
		return a8F.es
	}, this.a64 = function(a89) {
		return !!aD.gs && a8F.eq + a8F.i > h.i - a89 - bb.gap
	}, this.resize = function() {
		aD.gs && (a8F.resize(), a8F.es -= (bj.a4r() - 1) * bb.gap, font = b9.qV.sJ(0, .3 * a8F.j), (canvas = document.createElement("canvas")).width = Math.floor(a8F.i), canvas.height = Math.floor(a8F.j), (y0 = canvas.getContext("2d", {
			alpha: !0
		})).font = font, b9.qV.textAlign(y0, 1), b9.qV.textBaseline(y0, 1), mR(this))
	}, this.a1t = function(a8L) {
		0 === aD.zo || t.hW() || a8L !== aD.n7 && (aD.n7 = a8L, bg.resize(), be.dh = !0, aD.gs) && (a8G = be.eI + 2e3, mR(this))
	}, this.gw = function(eq, es) {
		if (!aD.gs) return !1;
		if (eq < a8F.eq || es < a8F.es || eq > a8F.eq + a8F.i) return a8H && function(s6, eq, es) {
			var ej = a8I.length,
				a88 = Math.floor(.5 * a8F.j),
				j = ej * a88,
				n4 = Math.floor(Math.floor(a8F.eq) + .3 * a8F.i - .5),
				j = Math.floor(Math.floor(a8F.es) - j),
				i = Math.floor(.4 * a8F.i + 2.5);
			return a8H = !1, be.dh = !0, eq < n4 || n4 + i < eq || es < j || (a8J = a8P(0, Math.floor((es - j) / a88), ej - 1), mR(s6)), !0
		}(this, eq, es);
		if ((eq -= a8F.eq) < .3 * a8F.i) a8H = !1, this.a1t(!aD.n7);
		else {
			if (eq < .7 * a8F.i) return a8H = !a8H, be.dh = !0;
			this.a1v(!1)
		}
		return !0
	}, this.a1v = function(a8N) {
		2 === aD.zo ? (this.a1t(!1), t.u(3)) : (a8H = !1, this.a4d = !this.a4d, this.a4d ? (aM.gt && aM.a1u(), a0.a1.setState(1)) : a8N || aM.a5Y(), be.dh = !0, mR(this))
	}, this.a8O = function() {
		this.a4d = !1, aM.a5Y(), be.dh = !0, mR(this)
	}, this.a1c = function(eq, es) {
		return !!aD.n7 && (0 <= aM.gw(eq, es) || (aD.gs ? ((be.eI > a8G || !this.gw(eq, es)) && aS.gw(eq, es), be.dh = !0, a8G = be.eI + 2e3) : aS.gw(eq, es)), !0)
	}, this.j0 = function() {
		aD.gs && aD.n7 && be.eI > a8G - 1e3 && be.eI < a8G && (be.dh = !0)
	}, this.zw = function() {
		aD.gs && (this.a4d = !1, be.dh = !0, mR(this))
	}, this.ub = function() {
		if (aD.gs) {
			if (aD.n7) {
				if (be.eI > a8G) return;
				if (be.eI > a8G - 1e3) return uc.globalAlpha = a8P(0, (1e3 - (be.eI - (a8G - 1e3))) / 1e3, 1), a8Q(), void(uc.globalAlpha = 1)
			}
			a8Q()
		}
	}
}

function cH() {
	var a8Z, a8a, i, eq, es, a8b, a8c;
	this.dZ = function() {
		a8Z = new Array(2), a8a = new Array(2), this.n9 = !1, a8c = a8b = iM = iL = 0, hv = 1, this.resize()
	}, this.resize = function() {
		i = (i = Math.floor((a0.a1.ht() ? .072 : .0502) * h.hu)) < 8 ? 8 : i;
		for (var aB = 1; 0 <= aB; aB--) a8Z[aB] = document.createElement("canvas"), a8Z[aB].width = i, a8Z[aB].height = i, a8a[aB] = a8Z[aB].getContext("2d", {
			alpha: !0
		});
		this.a82(),
			function() {
				for (var a8t = Math.floor(1 + i / 20), aB = 1; 0 <= aB; aB--) a8a[aB].clearRect(0, 0, i, i), a8a[aB].fillStyle = bA.nX, a8a[aB].beginPath(), a8a[aB].arc(i / 2, i / 2, i / 2 - a8t, 0, 2 * Math.PI), a8a[aB].fill(), a8a[aB]
					.lineWidth = a8t, a8a[aB].fillStyle = bA.ne, a8a[aB].strokeStyle = bA.ne, a8a[aB].beginPath(), a8a[aB].arc(i / 2, i / 2, i / 2 - a8t, 0, 2 * Math.PI), a8a[aB].stroke(), y3(a8a[aB], 0, 0, i, a8t, .3, 0 === aB)
			}()
	}, this.xv = function() {
		return -iL / hv
	}, this.xw = function() {
		return -iM / hv
	}, this.nJ = function(a8g, i1) {
		iL = hv * a8g - i1
	}, this.nK = function(a8h, i2) {
		iM = hv * a8h - i2
	}, this.gw = function(a8f, a65) {
		return aD.n7 || ! function(a8f, a65) {
			return Math.pow(a8f - (eq + i / 2), 2) + Math.pow(a65 - (es + i / 2), 2) < i * i / 4 || Math.pow(a8f - (eq + i / 2), 2) + Math.pow(a65 - (es + 2 * i), 2) < i * i / 4
		}(a8f, a65) || bi.eG.data[8].value ? (aH.nM() && (this.n9 = !0, a8b = a8f, a8c = a65), !1) : a65 < es + 1.25 * i ? this.a1M(Math.floor(h.i / 2), Math.floor(h.j / 2), -200) : this.a1M(Math.floor(h.i / 2), Math.floor(h.j / 2), 200)
	}, this.a1J = function(a8f, a65) {
		var a8i, a8j, i4, i7;
		return !aH.nM() || (a8i = iL, a8j = iM, iL += i4 = a8b - a8f, iM += i7 = a8c - a65, af.a1J(i4, i7), this.a8k(), a8b = a8f, a8c = a65, a8i !== iL) || a8j !== iM
	}, this.a1M = function(lK, lL, deltaY) {
		var nG;
		if (aH.nM()) {
			if (0 < deltaY) nG = (nG = 500 / (500 + deltaY)) < .5 ? .5 : nG;
			else {
				if (!(deltaY < 0)) return !1;
				nG = 2 < (nG = (500 - deltaY) / 500) ? 2 : nG
			}
			this.a8l(lK, lL, nG), be.dh = !0
		}
		return !0
	}, this.a8l = function(eq, es, eN) {
		var a2C;
		eN = a2C = (a2C = 1024 < (a2C = eN) * hv ? 1024 / hv : a2C) * hv < .125 ? .125 / hv : a2C, af.zoom(eN, eq, es),
			function(a2C, lK, lL) {
				hv *= a2C, iL = (iL + lK) * a2C - lK, iM = (iM + lL) * a2C - lL, aS.a8k()
			}(eN, eq, es)
	}, this.a8k = function() {
		var a8o = h.i / 16,
			a8p = 0,
			a8q = h.j / 16,
			a8r = 0;
		iL < -h.i + a8o && (a8p = -h.i + a8o - iL), iL > hv * bR.eu - a8o && (a8p = hv * bR.eu - a8o - iL), iM < -h.j + a8q && (a8r = -h.j + a8q - iM), iM > hv * bR.ev - a8q && (a8r = hv * bR.ev - a8q - iM), iL += a8p, iM += a8r, bZ.nL(), af.a8s(
			a8p, a8r)
	}, this.a82 = function() {
		eq = h.i - i - bb.gap, es = Math.floor(h.j / 2 - 1.25 * i)
	}, this.ub = function() {
		bi.eG.data[8].value || (uc.drawImage(a8Z[0], eq, es), uc.drawImage(a8Z[1], eq, Math.floor(es + 3 * i / 2)))
	}
}

function cI() {
	var g, a8u, a8v, a8w, gap, a8x, a8y, a8z, a90, a91, a5S, a92, go, a93, a73, a94, a95;

	function a99() {
		a8w = Math.floor(.2 * (a0.a1.ht() ? .07 : .035) * h.hu), a8w = a62(a0.a1.ht() ? 3 : 1, a8w);
		var a9C = h.i / (g.length + gap);
		a8w = a8w < a9C ? a9C : a8w, a73 = Math.floor((1 - gap) * a8w), a8u = 0, a9D()
	}

	function a9D() {
		a8u = (a8u = a8u < -20 ? -20 : a8u) > (g.length - 15) * a8w ? (g.length - 15) * a8w : a8u, a8y = Math.floor(a8u / a8w), a8z = (a8z = a8y + Math.floor(h.i / a8w)) > g.length - 1 ? g.length - 1 : a8z, a8y = (a8y = a8z < a8y ? a8z : a8y) < 0 ?
			0 : a8y;
		var l0 = a8z;
		a8x = a8v / g[l0];
		for (var aB = a8z - 1; a8y <= aB; aB--) g[aB] > g[l0] && (l0 = aB, a8x = a8v / Math.pow(g[aB], a93))
	}

	function a9G(eq) {
		eq = Math.floor((a8u + h.i - eq - gap * a8w) / a8w);
		return (eq = eq < -1 ? -1 : -1 === eq ? 0 : eq > g.length - 1 ? -1 : eq) !== a90 && (a90 = eq, -1 === a94 && 0 === a90 && aT.a96 && (a94 = setInterval(a9H, 100)), 1)
	}

	function a9I(aB) {
		var a9K = Math.floor(a8x * Math.pow(g[aB], a93));
		uc.fillRect(a8u + h.i - (aB + 1) * a8w, h.j - a9K, a73, a9K)
	}

	function a9H() {
		var gH;
		0 !== (a90 = 8 === aa.a10() ? -1 : a90) ? (a95 = (new Date).getTime(), clearInterval(a94), a94 = -1) : (gH = g[1] / 864e3, -1 !== a95 && (gH += ((new Date).getTime() - a95) * g[1] / 864e5, a95 = -1), 0 < gH && (g[0] += Math.floor(gH), be
			.dh = !0))
	}
	this.a96 = !1, this.dZ = function() {
		a95 = a94 = -1, a90 = -(a93 = 1), this.a97 = !1, go = 0, a92 = new Date, a8u = 0, gap = .3, g = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], this.resize()
	}, this.resize = function() {
		a8v = Math.floor(.15 * h.j), a91 = (a91 = Math.floor((a0.a1.ht() ? .018 : .0137) * h.hu)) < 2 ? 2 : a91, a5S = b9.qV.sJ(1, a91), a99()
	}, this.a9A = function(a9B) {
		var aB;
		for (this.a96 = !0, aB = 0; aB < a9B.length; aB++) g.unshift(a9B[aB]);
		a99(), be.dh = !0
	}, this.a9E = function() {
		a9D()
	}, this.a1J = function(eq, es) {
		es > h.j - .6 * a8v ? this.a97 ? eq !== go && (a8u += eq - go, go = eq, a9D(), a9G(eq), this.a97 = -1 !== a90, be.dh = !0) : a9G(eq) && (be.dh = !0) : this.rW()
	}, this.rW = function() {
		-1 !== a90 && (this.a97 = !1, a90 = -1, be.dh = !0)
	}, this.a1M = function(eq, deltaY) {
		-1 !== a90 && (a8u += Math.floor(deltaY), a9D(), a9G(eq), be.dh = !0)
	}, this.gw = function(eq, es) {
		this.a1J(eq, es), -1 !== a90 && (go = eq, this.a97 = !0)
	}, this.a1i = function() {
		-1 !== a90 && (this.a97 = !1)
	}, this.ub = function() {
		uc.fillStyle = bA.nh;
		for (var a9L, month, dp, sr, a9O, a9P, n5, a9Q, a9R, aB = a8z; a8y <= aB; aB--) a9I(aB);
		this.a96 && 0 === a8y && (uc.fillStyle = bA.oE, a9I(0)), -1 !== a90 && (uc.fillStyle = bA.ng, a9I(a90)), -1 !== a90 && (uc.font = a5S, b9.qV.textBaseline(uc, 2), (dp = new Date).setTime(a92.getTime() - 1e3 * a90 * 60 * 60 * 24), month =
			"month", a9L = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(dp), a9L = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(dp)), a9L = a9L + ", " + dp.getUTCDate() + " " + month + " " + dp.getFullYear(), month = 1 === g[a90] ? L(110) : L(111), month = b9.rU.z5(g[a90]) + " " + month, dp = Math.floor(uc.measureText(a9L).width), sr = Math
			.floor(uc.measureText(month).width), a9O = Math.floor(.5 * (dp + a91)), a9P = (a9P = a8u + h.i - (a90 + 1) * a8w) < a9O ? a9O : a9P > h.i - a9O ? h.i - a9O : a9P, n5 = h.j - Math.floor(a8x * Math.pow(g[a90], a93)), a9Q = Math
			.floor(1.1 * a91), a9R = n5 > h.j - a9Q ? h.j - a9Q : n5, uc.fillStyle = bA.nb, uc.fillRect(h.i - sr - a91, a9R - a9Q, sr + a91, a9Q), uc.fillRect(a9P - a9O, h.j - a9Q, dp + a91, a9Q), uc.fillStyle = bA.ne, b9.qV.textAlign(uc, 2),
			uc.fillText(month, Math.floor(h.i - .5 * a91), a9R), b9.qV.textAlign(uc, 1), uc.fillText(a9L, a9P, h.j), uc.strokeStyle = bA.ni, uc.lineWidth = 1, uc.beginPath(), uc.moveTo(0, n5), uc.lineTo(h.i, n5), uc.closePath(), uc.stroke())
	}
}

function cJ() {
	var a5S, i, es, a9S, a9T, canvas, y0, a6w, a3I, a9U, a9V, a9W, a9X;
	this.eq = 0, this.j = 0, this.dZ = function() {
		a9T = aD.a4E, a9V = "rgba(0,100,0,0.8)", a9W = "rgba(150,0,0,0.8)", a6w = a9U = !0, a3I = ag.gl[aD.eT], this.resize()
	}, this.resize = function() {
		i = Math.floor((a0.a1.ht() ? .305 : .24) * h.hu), this.j = Math.floor(.5 + .13 * i), i = Math.floor(6 * this.j), a5S = b9.qV.sJ(1, Math.floor(.8 * this.j)), a9X = Math.floor(.5 * this.j), bR.wL.font = a5S, es = bb.gap, a9S = Math.floor(
			1 + .13 * this.j), (canvas = document.createElement("canvas")).width = i, canvas.height = this.j, (y0 = canvas.getContext("2d", {
			alpha: !0
		})).font = a5S, b9.qV.textBaseline(y0, 1), b9.qV.textAlign(y0, 1), this.a9Y()
	}, this.a7P = function() {
		return a0.a1.ht() && h.i < 1.2 * h.j
	}, this.a82 = function() {
		this.a7P() ? this.eq = h.i - i - bb.gap : this.eq = Math.floor(aV.a9Z() + (h.i - aV.a9Z() - aW.i - i) / 2 - .5 * bb.gap)
	}, this.mQ = function() {
		a6w && (a6w = !1, this.a9Y())
	}, this.a9Y = function() {
		y0.clearRect(0, 0, i, this.j), y0.fillStyle = a9U ? a9V : a9W, y0.fillRect(0, 0, i, this.j), y0.fillStyle = bA.ng, this.a9a(), this.a9b(), y0.fillStyle = ag.gl[aD.eT] >= ae.jn(aD.eT) ? bA.oB : bA.ne, y0.fillText(b9.rU.z5(a3I), Math.floor(
			i / 2), a9X), y0.fillStyle = bA.ne, y0.fillRect(0, 0, i, 1), y0.fillRect(0, 0, 1, this.j), y0.fillRect(0, this.j - 1, i, 1), y0.fillRect(i - 1, 0, 1, this.j)
	}, this.a9a = function() {
		var f4 = be.k4() % 100,
			f4 = (f4 = 9 - bK.dq(f4 -= f4 % 10, 10), Math.floor(f4 * (this.j - a9S) / 9));
		y0.fillRect(0, f4, a9S, this.j - f4), y0.fillRect(i - a9S, f4, a9S, this.j - f4)
	}, this.a9b = function() {
		y0.fillRect(a9S, this.j - a9S, Math.floor((i - 2 * a9S) * ag.gl[aD.eT] / a9T), a9S)
	}, this.j0 = function() {
		var gH = aD.eT;
		b9.g5.gv(gH) && (gH = ag.gl[gH] - ag.a3H[gH], a3I !== gH ? (a9T = a62(gH, a9T), a9U = a3I < gH && 10 <= gH, a3I = gH, a6w = !0) : be.k4() % 10 == 9 && (a6w = !0))
	}, this.ub = function() {
		0 === ag.me[aD.eT] || aD.h7 || 2 === ag.a39[aD.eT] || uc.drawImage(canvas, this.eq, es)
	}
}

function cK() {
	var a9c, a9d, a9e, a9f, a9g, a9h, a9i, a9j, a9k, a9l, a9m, a9n, a9o, a9p, a9q, a9r, a9s, a9t, a9u, a9v, a9w, a9x, position, a9y, a9z, aA0, aA1, aA2 = 1,
		aA3 = 1,
		aA4 = "";
	var leaderboardHasChanged = true;
	this.playerPos = aD.eT;
	__fx.leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		__fx.leaderboardFilter.filteredLeaderboard = __fx.leaderboardFilter.playersToInclude
			.map(id => js[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = __fx.leaderboardFilter.filteredLeaderboard.indexOf(js[aD.eT]);
	}

	function aA6() {
		a9i.clearRect(0, 0, a9c, a7f),
			a9i.fillStyle = bA.oU,
			a9i.fillRect(0, 0, a9c, a9n),
			a9i.fillStyle = bA.na,
			a9i.fillRect(0, a9n, a9c, a7f - a9n);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			js[aD.eT]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) a9x = -1;
		if (__fx.leaderboardFilter.enabled && a9x >= __fx.leaderboardFilter.filteredLeaderboard.length) a9x = -1;
		playerPos >= position && aA8(playerPos - position, bA.o3),
			0 !== js[aD.eT] && 0 === position && aA8(0, bA.oa),
			-1 !== a9x && aA8(a9x, bA.nf),
			a9i.fillStyle = bA.na,
			//console.log("drawing", a9x),
			a9i.clearRect(0, a7f - __fx.leaderboardFilter.tabBarOffset, a9c, __fx.leaderboardFilter.tabBarOffset);
		a9i.fillRect(0, a7f - __fx.leaderboardFilter.tabBarOffset, a9c, __fx.leaderboardFilter.tabBarOffset);
		a9i.fillStyle = bA.ne,
			a9i.fillRect(0, a9n, a9c, 1),
			a9i.fillRect(0, a7f - __fx.leaderboardFilter.tabBarOffset, a9c, 1),
			__fx.leaderboardFilter.drawTabs(a9i, a9c, a7f - __fx.leaderboardFilter.tabBarOffset, bA.o3),
			a9i.fillRect(0, 0, a9c, bb.ym),
			a9i.fillRect(0, 0, bb.ym, a7f),
			a9i.fillRect(a9c - bb.ym, 0, bb.ym, a7f),
			a9i.fillRect(0, a7f - bb.ym, a9c, bb.ym), a9i.font = a9d, b9.qV.textBaseline(a9i, 1), b9.qV.textAlign(a9i, 1), a9i.fillText(aA4, Math.floor((a9c + a9n - 22) / 2), Math.floor(a9l + a9e / 2));
		__fx.playerList.drawButton(a9i, 12, 12, a9n - 22);
		var f2, gI = playerPos < position + a9g - 1 ? 1 : 2;

		if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - a9g)
				position = (result.length > a9g ? result.length : a9g) - a9g;
			//if (position >= result.length) position = result.length - 1;
			for (a9i.font = a9f, b9.qV.textAlign(a9i, 0), f2 = a9g - gI; 0 <= f2; f2--) {
				const pos = result[f2 + position];
				if (pos !== undefined)
					aA9(lg[pos]), aAA(f2, pos, lg[pos]);
			}
			for (b9.qV.textAlign(a9i, 2), f2 = a9g - gI; 0 <= f2; f2--) {
				const pos = result[f2 + position];
				if (pos !== undefined)
					aA9(lg[pos]), aAB(f2, lg[pos]);
			}
		} else {
			for (a9i.font = a9f, b9.qV.textAlign(a9i, 0), f2 = a9g - gI; 0 <= f2; f2--)
				aA9(lg[f2 + position]), aAA(f2, f2 + position, lg[f2 + position]);
			for (b9.qV.textAlign(a9i, 2), f2 = a9g - gI; 0 <= f2; f2--)
				aA9(lg[f2 + position]), aAB(f2, lg[f2 + position]);
		}
		2 == gI && (aA9(aD.eT), b9.qV.textAlign(a9i, 0), aAA(a9g - 1, js[aD.eT], aD.eT), b9.qV.textAlign(a9i, 2), aAB(a9g - 1, aD.eT)), 0 === position && (gI = .7 * a9o / ab.get(4).height, a9i.setTransform(gI, 0, 0, gI, Math.floor(a9p + .58 * a9o +
			.5 * gI * ab.get(4).width), Math.floor(a9l + a9e + .4 * a9o)), a9i.imageSmoothingEnabled = !0, a9i.drawImage(ab.get(4), -Math.floor(ab.get(4).width / 2), -Math.floor(ab.get(4).height / 2)), a9i.setTransform(1, 0, 0, 1, 0, 0))
	}

	function aA9(player) {
		aD.he && (a9i.fillStyle = bf.aAD[bf.aAE[player]])
	}

	function aA8(aB, aAF) {
		a9i.fillStyle = aAF, aB = a9g - 1 < aB ? a9g - 1 : aB;
		aAF = Math.floor((aB === a9g - 1 ? 2 : 0 === aB ? 1.15 : 1) * a9o), aAF = aB === a9g - 2 ? Math.floor(a9n + 9.15 * a9o) - Math.floor(a9n + 8.15 * a9o) : aAF;
		a9i.fillRect(0, Math.floor(a9n + (aB + (0 === aB ? 0 : .15)) * a9o), a9c, aAF)
	}

	function aAA(aAH, a3Y, aB) {
		a9i.fillText(a9t[a3Y], a9p, Math.floor(a9l + a9e + (aAH + .5) * a9o)), 1 === ag.a39[aB] && (a9i.font = "italic " + a9f);
		a3Y = Math.floor(a9l + a9e + (aAH + .5) * a9o);
		a9i.fillText(ag.a0N[aB], a9q, a3Y), 0 !== ag.a39[aB] && (a9i.font = a9f), aB < aD.k7 && 2 !== ag.a39[aB] || a9i.fillRect(a9q, a3Y + .35 * aA2, a9s[aB], Math.max(1, .1 * aA2))
	}

	function aAB(aAH, aB) {
		a9i.fillText(ag.gX[aB], a9r, Math.floor(a9l + a9e + (aAH + .5) * a9o))
	}

	function aAQ(es) {
		return (es -= bb.gap + a9n) < 0 ? Math.floor(es / a9o) - 1 : es < (a9g - 1) * a9o ? Math.floor(es / a9o) : es < a7f - a9n ? a9g - 1 : (es -= a7f - a9n, a9g + Math.floor(es / a9o))
	}

	function yl(eq, es) {
		return eq >= bb.gap && eq < bb.gap + a9c && es >= bb.gap && es < bb.gap + a7f
	}
	this.dZ = function() {
			var aB;
			for (a9z = !1, aA1 = aA0 = a9y = 0, a9x = -1, a9g = a0.a1.ht() ? 6 : 10, aA3 = (position = 0) === (aA3 = bi.eG.data[11].value) ? 10 : 1 === aA3 ? 5 : 1, a9w = !1, a9u = new Uint16Array(a9g + 1), a9v = new Uint32Array(a9g + 1), a9k = aD
				.eg, lg = new Uint16Array(a9k), js = new Uint16Array(a9k), aB = a9k - 1; 0 <= aB; aB--) lg[aB] = aB, js[aB] = aB;
			this.resize(!0), a9s = new Uint16Array(aD.eg);
			var aA5 = Math.floor(a9c - a9q - a9p - a9j);
			for (a9t = new Array(aD.eg), a9i.font = a9f, aB = aD.eg - 1; 0 <= aB; aB--) a9t[aB] = aB + 1 + ".", ag.a0N[aB] = b9.y0.a2p(ag.a0S[aB], a9f, aA5), a9s[aB] = Math.floor(a9i.measureText(ag.a0N[aB]).width);
			aA6()
		}, this.resize = function(dZ) {
			if (a7f = a0.a1.ht() ? (a9c = Math.floor(.335 * h.hu), Math.floor(a9g * a9c / 8)) : (a9c = Math.floor(.27 * h.hu), Math.floor(a9g * a9c / 10)), a9c = Math.floor(.97 * a9c), (a9h = document.createElement("canvas")).width = a9c, a9h
				.height = a7f, a9i = a9h.getContext("2d", {
					alpha: !0
				}), a9l = .025 * a9c, a9e = .16 * a9c, a9m = 0 * a9c, a9n = Math.floor(.45 * a9l + a9e), a9o = (a7f - a9e - 2 * a9l - a9m) / a9g,
				a9h.height = a7f += a9o, __fx.leaderboardFilter.tabBarOffset = Math.floor(a9o * 1.3), __fx.leaderboardFilter.verticalClickThreshold = a7f - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = a9c,
				a9d = b9.qV.sJ(1, Math.floor(.55 * a9e)), aA2 = Math.floor((a0.a1.ht() ? .67 : .72) * a9o), a9f = b9.qV.sJ(0, aA2), a9i.font = a9f, a9p = Math.floor(.04 * a9c), a9q = Math.floor((a0.a1.ht() ? .195 : .18) * a9c), a9j = Math.floor(a9i
					.measureText("00920600").width), a9i.font = a9d, a9r = a9c - a9p, !dZ) {
				a9i.font = a9f;
				for (var aB = aD.eg - 1; 0 <= aB; aB--) a9s[aB] = Math.floor(a9i.measureText(ag.a0N[aB]).width);
				aA6()
			}
			aA4 = b9.y0.a2p(L(112), a9d, .96 * a9c)
		}, this.a9Z = function() {
			return a9c
		}, this.mQ = function(bs, aA7) {
			(aA7 || a9w && (bs || be.k4() % aA3 == 0)) && (a9w = !1, aA6())
		}, this.j0 = function() {
			! function() {
				for (var f2 = a9k - 1; 0 <= f2; f2--) 0 === ag.me[lg[f2]] && ! function(f2) {
					var aAO = lg[f2];
					a9k--;
					for (var aB = f2; aB < a9k; aB++) lg[aB] = lg[aB + 1], js[lg[aB]] = aB;
					lg[a9k] = aAO, js[lg[a9k]] = a9k
				}(f2)
			}();
			for (var aAM, nM = a9k - 1, f2 = 0; f2 < nM; f2++) ag.gX[lg[f2]] < ag.gX[lg[f2 + 1]] && (aAM = lg[f2], lg[f2] = lg[f2 + 1], lg[f2 + 1] = aAM, js[lg[f2]] = f2, js[lg[f2 + 1]] = f2 + 1);
			! function() {
				for (var dp = a9w, gI = (a9w = !0, js[aD.eT] >= a9g - 1 ? a9g - 2 : a9g - 1), aB = gI; 0 <= aB; aB--)
					if (a9u[aB] !== lg[aB] || a9v[aB] !== ag.gX[lg[aB]]) return;
				(gI != a9g - 2 || a9u[a9g] === js[aD.eT] && a9v[a9g] === ag.gX[aD.eT]) && (a9w = dp)
			}();
			for (var aB = a9g - 1; 0 <= aB; aB--) a9u[aB] = lg[aB], a9v[aB] = ag.gX[lg[aB]];
			a9u[a9g] = js[aD.eT], a9v[a9g] = ag.gX[aD.eT];
			leaderboardHasChanged = true;
		}, __fx.leaderboardFilter.scrollToTop = function() {
			position = 0;
		}, this.gw = function(eq, es) {
			return !!yl(eq, es) && ((__fx.utils.isPointInRectangle(eq, es, bb.gap + 12, bb.gap + 12, a9n - 22, a9n - 22) && __fx.playerList.display(ag.a0S), true) &&
				!(es - bb.gap > __fx.leaderboardFilter.verticalClickThreshold && __fx.leaderboardFilter.handleMouseDown(eq - bb.gap)) && (a9y = be.eI, a9z = !0, aA0 = aA1 = aAQ(es), bI.a1w() && (eq = a8P(-1, aA1, a9g), a9x !== (eq = eq === a9g ?
					-1 : eq)) && (a9x = eq, aA6(), be.dh = !0)), !0)
		}, __fx.leaderboardFilter.repaintLeaderboard = function() {
			aA6(), be.dh = !0;
		},
		this.a1J = function(eq, es) {
			if (__fx.utils.isPointInRectangle(eq, es, bb.gap + 12, bb.gap + 12, a9n - 22, a9n - 22)) {
				__fx.playerList.hoveringOverButton === false && (__fx.playerList.hoveringOverButton = true, aA6(), be.dh = !0);
			} else {
				__fx.playerList.hoveringOverButton === true && (__fx.playerList.hoveringOverButton = false, aA6(), be.dh = !0);
			}
			if (__fx.leaderboardFilter.setHovering(
					__fx.utils.isPointInRectangle(eq, es, bb.gap, bb.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth, __fx.leaderboardFilter.tabBarOffset), eq - bb.gap
				)) return;
			var dp, aAP = aAQ(es);
			return a9z ? (dp = position, (position = a8P(0, position += aA0 - aAP, aD.eg - a9g)) !== dp && (aAP = (aAP = a8P(-1, aA0 = aAP, a9g)) !== a9g && yl(eq, es) ? aAP : -1, a9x = aAP, aA6(), be.dh = !0), !0) : (aAP = (aAP = a8P(-1, aAP,
				a9g)) === a9g || !yl(eq, es) || bI.a1w() ? -1 : aAP, a9x !== aAP && (a9x = aAP, aA6(), be.dh = !0))
		}, this.a1i = function(eq, es) {
			if (!a9z) return !1;
			a9z = !1;
			var aAP = aAQ(es);
			var isEmptySpace = false;
			return bI.a1w() && -1 !== a9x && (a9x = -1, aA6(), be.dh = !0), be.eI - a9y < 350 && aA1 === aAP && -1 !== (aAP = (aAP = a8P(-1, aAP, a9g)) !== a9g && yl(eq, es) ? aAP : -1) && (eq = (__fx.leaderboardFilter.enabled ? (updateFilteredLb(),
					lg[__fx.leaderboardFilter.filteredLeaderboard[aAP + position] ?? (isEmptySpace = true, js[aD.eT])]) : lg[aAP + position]), aAP === a9g - 1 && (__fx.leaderboardFilter.enabled ? this.playerPos : js[aD.eT]) >=
				position + a9g - 1 && (eq = aD.eT), !isEmptySpace && aD.he && __fx.settings.openDonationHistoryFromLb && __fx.donationsTracker.displayHistory(eq, ag.a0S, aD.kR), 0 !== ag.me[eq] && !isEmptySpace) && aH.mz(eq, 800, !1, 0), !0
		}, this.a1M = function(eq, es, deltaY) {
			var aAR;
			return !(a9z || aD.n7 || (aAR = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !yl(eq, es)) || (eq = (eq = a8P(-1, aAQ(es), a9g)) === a9g || bI.a1w() ? -1 : eq, 0 < deltaY ? position < aD.eg - a9g && (position += Math.min(aD.eg - a9g -
				position, aAR), a9x = eq, aA6(), be.dh = !0) : 0 < position && (position -= Math.min(position, aAR), a9x = eq, aA6(), be.dh = !0), 0))
		}, this.ub = function() {
			uc.drawImage(a9h, bb.gap, bb.gap)
		}
}

function cL() {
	var canvas, y0, eq, es, a9K, aAS, gap, aAT, fontSize, aAU, aAV, aAW, aAX, aAY, aAZ, aAa, aAb, aAc;

	function aAg() {
		y0.clearRect(0, 0, aW.i, aW.j), y0.fillStyle = bA.nb, y0.fillRect(0, 0, aW.i, aW.j), y0.fillStyle = bA.ny, eN = 0 < aAa ? aAa : Math.sqrt(aAX[4] / 1e4), y0.fillRect(0, aW.j - a9K - 1, Math.floor(eN * aW.i), a9K), y0.fillStyle = bA.ne, y0
			.fillRect(0, 0, aW.i, 1), y0.fillRect(0, 0, 1, aW.j), y0.fillRect(aW.i - 1, 0, 1, aW.j), y0.fillRect(0, aW.j - 1, aW.i, 1), y0.fillRect(0, aW.j - a9K - 1, aW.i, 1);
		for (var eN, aAi, dp = 0, aB = 0; aB < aAW.length; aB++) aAY[aB] ? (b9.qV.textAlign(y0, 0), aAi = Math.floor((aAS - a9K + 2 * aAT) * (aB - dp + 1) / (aAW.length + 1) - .7 * aAT), y0.fillText(aAW[aB], gap, aAi), b9.qV.textAlign(y0, 2), 5 ===
			aB && 0 !== ag.me[aD.eT] && ag.gl[aD.eT] >= ae.jn(aD.eT) ? (y0.fillStyle = bA.oY, y0.fillText(aAe(aB), aW.i - gap, aAi), y0.fillStyle = bA.ne) : y0.fillText(aAe(aB), aW.i - gap, aAi)) : dp++
	}

	function aAe(aB) {
		return aB < 3 ? aAX[aB].toString() : 3 === aB || 4 === aB || 5 === aB ? b9.rU.a3s(aAX[aB] / 100, 2) : aB < 7 ? b9.rU.z5(aAX[aB]) : aB === 7 ? aW.aAj(aAX[7]) : aB === 8 ? __fx.utils.getMaxTroops(ag.gX, aD.eT) : __fx.utils.getDensity(aD.eT)
	}

	function aAd() {
		ag.gX[aD.eT] !== aAX[6] && (aAX[6] = ag.gX[aD.eT], aAU++)
	}
	this.dZ = function() {
		aAa = aAb = 0, (aAV = new Array(8))[0] = L(113), aAV[1] = aD.kR ? L(114) : L(115), aAV[2] = L(116), aAV[3] = L(117), aAV[4] = L(118), aAV[5] = L(119, 0, "Interest"), aAV[6] = L(120), aAV[7] = L(121),
			aAV.push("Max Troops", "Density"), // add aAV
			(aAW = new Array(aAV.length)).fill(""), (aAX = new Array(aAV.length))[0] = aD.kR ? 0 : aD.k7, aAX[1] = aD.kR ? al.k8 : aD.kT, aAX[2] = aD.zq, aAX[3] = 0, aAX[4] = bK.dq(1e4 * ag.gX[0], Math.max(aD.jr, 1)), aAX[5] = 0 === aD.data
			.iIncomeType ? 700 : 1 === aD.data.iIncomeType ? bK.dq(700 * aD.data.iIncomeValue, 64) : bK.dq(700 * aD.data.iIncomeData[aD.eT], 64), aAX[6] = 0, aAd(), aAX[7] = 0, aAZ = aAe(6), aAY = new Array(aAV.length);
		for (var aB = aAV.length - 1; 0 <= aB; aB--) aAY[aB] = !0;
		aAc = 0, aAc = aD.kR ? (aAY[0] = !1, aAY[2] = !1, aAY[3] = !1, 3) : (aAY[3] = !1, 1), aAU = 0, this.resize()
	}, this.resize = function() {
		this.i = Math.floor((a0.a1.ht() ? .1646 : .126) * 1.25 * h.hu), this.j = Math.floor(1.18 * this.i), a9K = Math.floor(.04 * this.i), gap = Math.floor(.035 * this.i), aAT = .04 * this.i, aAS = this.j, this.j -= Math.floor(aAc * (this.j -
			2 * a9K) / aAV.length), fontSize = Math.floor(.7 * (aAS - a9K) / aAV.length);
		var a5S = b9.qV.sJ(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.i, canvas.height = this.j,
			function(a5S, i) {
				for (var aB = 0; aB < aAW.length; aB++) aAW[aB] = b9.y0.a2p(aAV[aB], a5S, i)
			}((y0 = canvas.getContext("2d", {
				alpha: !0
			})).font = a5S, .575 * this.i), b9.qV.textBaseline(y0, 1), y0.lineWidth = 1, this.a47(), this.a82(), aU.a82(), aAg()
	}, this.a82 = function() {
		eq = h.i - this.i - bb.gap
	}, this.aAh = function() {
		es = bb.gap
	}, this.a47 = function() {
		es = bb.gap + (aU.a7P() && 0 !== ag.me[aD.eT] && !aD.h7 ? aU.j + bb.gap : 0)
	}, this.mQ = function(bs) {
		(bs || 100 <= aAU) && (aAU = 0, aAg())
	}, this.a4n = function() {
		return aAX[7]
	}, this.aAj = function(value) {
		var l0 = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * l0) / 1e3);
		return value < 10 ? l0 + ":0" + value : l0 + ":" + value
	}, this.j0 = function() {
		var aAs, per;
		aAY[0] && aD.zr - aD.zq !== aAX[0] && (aAX[0] = aD.zr - aD.zq, aAU++), al.k8 - aAX[0] !== aAX[1] && (aAX[1] = al.k8 - aAX[0], aAU++), this.mI(), (aAs = ae.aAt(aD.eT)) !== aAX[5] && (aAX[5] = aAs, aAU++), aAd(), aAX[7] += be.aAu, aAs =
			aAe(7), aAZ !== aAs && (aAZ = aAs, aAU += 100), aAs = aD.he ? bg.kd() : ag.gX[lg[0]], per = bK.dq(1e4 * aAs, Math.max(aD.jr, 1)), aAX[3] = aAs, aAX[4] !== per && (aAU++, aAX[4] = per), 8 === aD.kP && function() {
				for (var aB = 0; aB < 2; aB++)
					if (!b9.g5.gv(aB)) return bQ.zQ.zn(), 1;
				return
			}() || aAX[3] < aD.jr || ! function() {
				for (var aB = al.k8 - 1; 0 <= aB; aB--)
					if (0 < ag.gB[al.k9[aB]].length) return;
				return 1
			}() || bQ.zQ.zn()
	}, this.mI = function() {
		aAY[2] && aD.zq !== aAX[2] && (aAX[2] = aD.zq, aAU++)
	}, this.aAv = function(aB) {
		var t7, aAw, dp;
		return 2 !== aD.zo && (aB % 2 == 1 && (aV.mQ(1, 1), be.dh = !0), aB === aD.a4G ? (aAa = 0, aAg(), !1) : (-1 !== aB || 0 !== aAb) && (aAw = aAa, aAa = aD.gs ? aB / aD.a4G : (dp = performance.now(), 0 <= aB && (t7 = dp - 392 * aB, aAb =
			0 === aB || t7 < aAb ? t7 : aAb), 1 < (aAa = (dp - aAb) / (392 * aD.a4G)) ? 1 : aAa), aAg(), aAa !== aAw))
	}, this.ub = function() {
		uc.drawImage(canvas, eq, es)
	}
}

function cM() {
	var hW, aAx, i, j, a88, aAy, aAz, a7Q, canvas, mr, aB0;

	function xw() {
		return Math.floor((h.i - i) / 2) < aR.j + 2 * bb.gap ? h.j - j - 4 * bb.gap - aR.j : h.j - j - 2 * bb.gap
	}
	this.dZ = function() {
		aB0 = hW = !1, a88 = .61, aAy = .07, aAz = .09, mr = a7Q = j = 0
	}, this.resize = function() {
		var y0, n4, f4, aB5, aB6, a5X;
		hW && (i = aB1(i = a0.a1.ht() ? Math.floor(.69 * h.hu) : Math.floor(.5 * h.hu), a62(h.i - 2 * bb.gap, 10)), i = aB1(i, Math.floor(3.57 * a62(h.j - 2 * bb.gap, 3))), j = Math.floor(.28 * i), (canvas = document.createElement("canvas"))
			.width = i, canvas.height = j, y0 = canvas.getContext("2d", {
				alpha: !0
			}), n4 = Math.floor(1 + j / 40), y0.clearRect(0, 0, i, j), y0.fillStyle = bA.nb, y0.fillRect(n4, n4, i - 2 * n4, j - 2 * n4), y0.lineJoin = "bevel", y0.lineWidth = 2 * n4, y0.strokeStyle = bA.ne, y0.strokeRect(n4, n4, i - 2 * n4,
				j - 2 * n4), y0.imageSmoothingEnabled = !1, f4 = ab.get(aAx), aB5 = f4.width, a5X = (1 === aAx ? .85 : 21 === aAx ? .666 : .9) * a88 * j / (aB6 = f4.height), y0.setTransform(a5X, 0, 0, a5X, Math.floor((i - a5X * aB5) / 2),
				Math.floor((j - a5X * aB6) / 2)), y0.drawImage(f4, 0, 0), y0.setTransform(1, 0, 0, 1, Math.floor(i - aAz * j - aAy * j - n4), Math.floor(n4 + aAy * j)),
			function(y0, ej) {
				y0.lineWidth = Math.floor(1 + j / 80), y0.strokeStyle = bA.ne, y0.beginPath(), y0.moveTo(0, 0), y0.lineTo(ej, ej), y0.moveTo(0, ej), y0.lineTo(ej, 0), y0.stroke()
			}(y0, Math.floor(aAz * j)), y0.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(fB, aB3, a7v, aB4) {
		hW || aB4 && aB0 || (aAx = a7v ? 21 : fB ? 1 : 2, hW = aB0 = !0, this.resize(), aL.rm(), aR.a7q(), mr = be.eI, a7Q = aB3 ? 1 : 0)
	}, this.j0 = function() {
		!hW || 1 <= a7Q || (a7Q = 1 < (a7Q += 5e-4 * (be.eI - mr)) ? 1 : a7Q, mr = be.eI, be.dh = !0)
	}, this.gw = function(eq, es) {
		return !(!hW || a7Q <= 0 || (eq -= Math.floor((h.i - i) / 2), es -= xw(), eq < 0) || es < 0 || i < eq || j < es || (i - j / 3 < eq && es < j / 3 && (hW = !1, be.dh = !0), 0))
	}, this.ub = function() {
		!hW || a7Q <= 0 || (uc.globalAlpha = a7Q, uc.drawImage(canvas, Math.floor((h.i - i) / 2), xw()), uc.globalAlpha = 1)
	}
}

function dK() {
	var aB8, aB9 = new Uint8Array(5),
		aBA = new Uint8Array(5);
	this.aBB = new aBC, this.dZ = function() {
		for (var fB = bi.eG.data[119].value, aB = 0; aB < aB9.length; aB++) aB9[aB] = (fB >> 2 * aB) % 4
	}, this.a4R = function() {
		aB8 = [L(122), "", L(123, [bW.aBD[28]]), L(124, [bW.aBD[26]]), L(125, [bW.aBD[0]])], this.aBB.dZ()
	}, this.j0 = function() {
		this.aBB.j0()
	}, this.a5B = function(id) {
		1 < id && bI.qx() || ! function(e4) {
			if (3 === aB9[e4] || 1 === aBA[e4]) return;
			if (aBA[e4] = 1, !(Math.random() < .6)) {
				aB9[e4]++;
				for (var fB = 0, aB = 0; aB < aB9.length; aB++) fB += aB9[aB] << 2 * aB;
				bi.rw.rx(119, fB)
			}
			return 1
		}(id) || aN.a68(aB8[id])
	}
}

function aBC() {
	var aBF;
	this.dZ = function() {
		aBF = !1
	}, this.j0 = function() {
		var gH;
		if (function() {
				if (!aBF) {
					if (be.k4() % 30 != 9) return;
					if (!b9.g5.lb(90)) return;
					aBF = !0
				}
				return 1
			}() && (! function() {
				var qN = aN.a6U(956);
				if (qN) {
					if (b9.g5.l3(qN.player)) return 1;
					aN.a6T(956, 0)
				}
				return
			}() && (-1 === (gH = (aD.he ? function() {
				var id = bg.kf(),
					ej = al.k8;
				if (bf.kU[id])
					for (var zc = al.k9, eh = bf.eh, aB = 0; aB < ej; aB++) {
						var gH = zc[aB];
						if (eh[gH] !== id) return gH
					} else if (1 < ej) return lg[ej - 1];
				return -1
			} : function() {
				for (var aBN = al.k8, kz = al.k9, aBO = js, aB = 0; aB < aBN; aB++) {
					var gH = kz[aB];
					if (0 !== aBO[gH]) return gH
				}
				return -1
			})()) ? ! function() {
				var qN = aN.a6U(957);
				if (qN && qN.a5y) {
					if (ac.ea(qN.a5y.eV << 2)) return 1;
					aN.a6T(957, 0)
				}
				return
			}() : (aN.yH(0, L(126, [ag.a0N[gH]]), 956, gH, bA.ne, bA.nb, -1, !0), 0)))) {
			var ej = an.ii.lF;
			if (0 !== ej)
				for (var eG = an.ii.eG, aB = 0; aB < ej; aB++) {
					var eV = eG[aB];
					if (ac.ea(eV << 2)) return void aN.yH(0, L(127, [bL.er(eV), bL.et(eV)]), 957, 0, bA.ne, bA.nb, -1, !0, void 0, {
						f2: 1,
						eV: eV
					})
				}
		}
	}
}

function dL() {
	this.aBP = new aBQ, this.dZ = function() {
		this.aBP.resize()
	}
}

function aBQ() {
	this.resize = function() {
		var aB, aBR = document.head.querySelector("style#ss");
		if (aBR)
			for (aB = aBR.sheet.cssRules.length - 1; 0 <= aB; aB--) aBR.sheet.deleteRule(0);
		else(aBR = document.createElement("style")).id = "ss", document.head.appendChild(aBR);
		var a8G = "::-webkit-scrollbar",
			aBS = b9.qV.qe(bb.sL),
			hg = b9.qV.qe(Math.max(b9.qV.ro(.012), 8));
		try {
			aBR.sheet.insertRule(a8G + "{width:" + hg + ";height:" + hg + ";}", aBR.sheet.cssRules.length), aBR.sheet.insertRule(a8G + "-thumb{background-color:white;}", aBR.sheet.cssRules.length), aBR.sheet.insertRule(a8G +
				"-track{background:" + bA.na + ";}", aBR.sheet.cssRules.length), aBR.sheet.insertRule(a8G + "-track:horizontal{border-top:" + aBS + " solid white;}", aBR.sheet.cssRules.length), aBR.sheet.insertRule(a8G +
				"-track:vertical{border-left:" + aBS + " solid white;}", aBR.sheet.cssRules.length), aBR.sheet.insertRule(a8G + "-button{display:none;}", aBR.sheet.cssRules.length)
		} catch (e) {
			for (console.log("error 3425: " + e), aB = aBR.sheet.cssRules.length - 1; 0 <= aB; aB--) aBR.sheet.deleteRule(0)
		}
	}
}

function dJ() {
	this.aBT = !1, this.nU = !1, this.a4B = !1, this.aBU = [0, 0, 0, 0], this.aBV = function() {
		var n4, n5, nH, nI;
		this.a4B = this.a4B || this.nU, (this.nU || this.aBT && this.a4B) && (n4 = bZ.aBW[0], n5 = bZ.aBW[1], nH = bZ.aBW[2], nI = bZ.aBW[3], n4 = n4 < this.aBU[0] ? this.aBU[0] : n4, n5 = n5 < this.aBU[1] ? this.aBU[1] : n5, nH = nH > this.aBU[
				2] ? this.aBU[2] : nH, nI = nI > this.aBU[3] ? this.aBU[3] : nI, this.nU = !1, this.aBT = !1, n4 === this.aBU[0] && n5 === this.aBU[1] && nH === this.aBU[2] && nI === this.aBU[3] ? this.a4C() : n4 <= nH && n5 <= nI && a4T
			.putImageData(a4U, 0, 0, n4, n5, nH - n4 + 1, nI - n5 + 1))
	}, this.a4C = function() {
		this.a4B && this.aBU[2] >= this.aBU[0] && this.aBU[3] >= this.aBU[1] && a4T.putImageData(a4U, 0, 0, this.aBU[0], this.aBU[1], this.aBU[2] - this.aBU[0] + 1, this.aBU[3] - this.aBU[1] + 1), this.a4B = !1
	}, this.zz = function() {
		this.aBU[2] >= this.aBU[0] && this.aBU[3] >= this.aBU[1] && a4T.putImageData(a4U, 0, 0, this.aBU[0], this.aBU[1], this.aBU[2] - this.aBU[0] + 1, this.aBU[3] - this.aBU[1] + 1), this.a4B = !1
	}, this.dZ = function() {
		var eq, es;
		this.aBT = !1, this.nU = !1, this.a4B = !1, this.aBU[0] = bR.eu, this.aBU[1] = bR.ev, this.aBU[2] = this.aBU[3] = 0;
		loop: for (eq = 1; eq < bR.eu - 1; eq++)
			for (es = bR.ev - 2; 1 < es; es--)
				if (1 === aBX[ac.xV(eq, es) + 2]) {
					this.aBU[0] = eq;
					break loop
				} loop: for (es = 1; es < bR.ev - 1; es++)
			for (eq = bR.eu - 2; 1 < eq; eq--)
				if (1 === aBX[ac.xV(eq, es) + 2]) {
					this.aBU[1] = es;
					break loop
				} loop: for (eq = bR.eu - 2; 0 < eq; eq--)
			for (es = bR.ev - 2; 1 < es; es--)
				if (1 === aBX[ac.xV(eq, es) + 2]) {
					this.aBU[2] = eq;
					break loop
				} loop: for (es = bR.ev - 2; 0 < es; es--)
			for (eq = bR.eu - 2; 1 < eq; eq--)
				if (1 === aBX[ac.xV(eq, es) + 2]) {
					this.aBU[3] = es;
					break loop
				}
	}
}

function L(value, aBY, v9) {
	var qC = "number" == typeof value ? b6.aBZ[value] : value;
	if (v9 && b6.aBa() && (qC = v9), aBY)
		for (var ej = aBY.length, aB = 0; aB < ej; aB++)
			for (var f2 = 0; f2 < 3; f2++) qC = qC.replace("{" + (10 * f2 + aB) + "}", aBY[aB]);
	return qC
}

function c0() {
	this.data = new aBb;
	var aBc = (new aBd).L84,
		aBe = (this.aBZ = aBc, !1);
	this.dZ = function() {
		var ej, g;
		aBe = !1, "en" !== bi.eG.data[12].value.split("-")[0].toLowerCase() ? bi.eG.data[12].value === bi.eG.data[145].value && 0 < bi.eG.data[146].value && (ej = bi.eG.data[146].value, (g = bi.qm.vF(ej, !1)).length === ej) && !!b9.qd.a2S(g) &&
			function(g) {
				for (var ej = g.length, j = 0; j < ej; j++) g[j] = g[j].replace("&#39;", "'");
				var aBk = bi.qm.vF(ej, !0);
				if (ej !== aBk.length) return !1;
				if (!b9.qd.a2S(aBk)) return !1;
				for (var l0 = aBc.length, a9B = new Array(l0), aBl = l0 === ej, gC = Math.min(ej, l0), aB = 0; aB < l0; aB++)
					if (a9B[aB] = aBc[aB], aB < ej && aBk[aB] === a9B[aB]) a9B[aB] = g[aB];
					else {
						aBl = !1;
						for (var f3 = 0; f3 < gC; f3++)
							if (aBk[f3] === a9B[aB]) {
								a9B[aB] = g[f3];
								break
							}
					} return b6.aBZ = a9B, aBl
			}(g) || (aBe = !0) : b6.aBZ = aBc
	}, this.db = function() {
		bf.da(), aE.da(), bd.da(), bc.da(), aO.dZ(), bn = new du
	}, this.aBa = function() {
		return this.aBZ === aBc || !aBc.length
	}, this.aBm = function() {
		var aBn;
		aBe && (aBe = !1, 0 !== aBc.length) && (aBn = bi.eG.data[12].value, az.aBo.aBp(0, aBn.slice(0, 20)))
	}, this.aBq = function(g) {
		g.length === aBc.length && (this.aBZ = g, bi.rw.rx(145, bi.eG.data[12].value), bi.rw.rx(146, g.length), bi.qm.vL(g, !1), bi.qm.vL(aBc, !0), 0 === aa.a10()) && 5 === t.sj && t.y.aBr()
	}, this.aBs = function() {
		var aBt, g = navigator.languages;
		return g && g.length ? (aBt = Math.max(b6.data.aBu(g[0]), 0), 1 === g.length ? [aBt, aBt] : [aBt, Math.max(b6.data.aBu(g[1]), 0)]) : [0, 0]
	}
}

function aBb() {
	this.g = ["en", "aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts",
		"btx", "bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fj", "fo",
		"fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac", "kek",
		"kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk", "ml",
		"mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu", "rn", "ro",
		"rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl", "tn", "to", "tpi",
		"tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu", "nb", "fil", "sh"
	], this.aBv = function() {
		for (var aBw = [], g = this.g, ej = g.length, aB = 0; aB < ej; aB++) aBw.push(g[aB]);
		var aBx = bi.eG.data[12].v9;
		for (aB = 0; aB < ej; aB++)
			if (aBw[aB] === aBx) {
				aBw.splice(aB, 1), ej--;
				break
			} aBw.sort(), ej++, aBw.unshift(aBx);
		try {
			if ("undefined" == typeof Intl) return aBw;
			for (aB = 0; aB < ej; aB++) {
				var qC = new Intl.DisplayNames([aBw[aB]], {
					type: "language"
				}).of(aBw[aB]);
				qC !== aBw[aB] && (aBw[aB] = aBw[aB] + ": " + qC)
			}
		} catch (e) {
			console.log("error 3646: " + e)
		}
		return aBw
	}, this.aBz = function(aC0) {
		for (var qC = bi.eG.data[12].value, ej = aC0.length, aB = 0; aB < ej; aB++)
			if (qC === aC0[aB].split(":")[0]) return aB;
		return 0
	}, this.aBu = function(aC1) {
		if (!aC1 || aC1.length < 2) return 0;
		aC1 = aC1.split("-")[0].toLowerCase();
		for (var g = this.g, ej = g.length, aB = 0; aB < ej; aB++)
			if (aC1 === g[aB]) return aB;
		return -1
	}
}

function aBd() {
	this.L84 = ["No Admin", "Helper", "Junior Moderator", "Moderator", "Senior Moderator", "Lead Moderator", "Head Admin", "Very Easy", "Easy", "Normal", "Hard", "Very Hard", "Impossible", "Type your message here...", "Send", "Activated", "Top Clan",
		"Best Clan Member", "Top Admin", "Best 1v1 Player", "Best Battle Royale Player", "Richest Player", "Top Patreon", "Lobby", "Top 100 players receive a daily gold payout.", "Team {0}", "Team {0} has won the game!",
		"You have earned a participation reward of {10} gold.", "The prize money has been distributed as follows:", "and {10} more", "You have earned {10} gold.", "You have earned {10} battle royale points!", "Clan {0} has won {11} points.",
		"You have earned {10} clan points!", "You have earned an additional {10} gold because you played for {1}.", "Check clan results at this page: ", "Back", "Error", "Error {10}", "Not Enough Gold!",
		"You need more gold to perform this action.", "Quit Game", "More", "This is a contest!", "Accept", "You have conquered {0}.", "You have been conquered by {0}.", "Congratulations! You have won the game.", "{0} has won the game.",
		"{0} has broken the non-aggression pact.", "{0} is attacking you!", "Choose your start position!", "You have surrendered!", "The game has ended in a stalemate!", "Error: {10}", "{0} has been immortalized!", "Neutral Land: {0}",
		"Player: {0}", "Strength: {10}", "Territory: {10}", "Team", "Bot Difficulty", "Index: {10}", "Coordinates: {10}", "Mountain: {10}", "Water: {10}", "Ship Owner: {0}", "Message to {0}",
		"Humanity triumphs! The undead have been beaten back.", "The Resistance", "Mankind's era ends, overrun by the relentless tide of the undead.", "The Virus", "If peace is agreed upon, the game ends in a stalemate.",
		"If peace is agreed upon, the largest territory holder wins the game.", "You have signed a non-aggression pact with {0}.", "You have asked {0} to sign a non-aggression pact.", "{0} has accepted the non-aggression pact.",
		"{0} requests a non-aggression pact.", "You have asked {10} players to attack {1}.", "You have asked {0} to attack {1}.", "{0} suggests you attack {1}.", "You have exported 1 resource to {0}.", "You have exported {10} resources to {1}.",
		"A tax of 1 unit has been deducted.", "A tax of {10} units has been deducted.", "A bot ({0}) has supported you with 1 resource.", "A bot ({0}) has supported you with {11} resources.", "{0} has supported you with 1 resource.",
		"{0} has supported you with {11} resources.", "Map: {0}", "Dimension: {10}", "Overall Pixels: {10}", "Land: {10}", "Mountains: {10}", "Full sending is disabled.", "{0} has been conquered by {1}.", "{0} has left the game.",
		"{0} has surrendered.", "{0} has joined the game.", "{10} players have been conquered.", "{10} players have left the game.", "{10} players have surrendered.", "Next Contest: ", "YOU HAVE CONQUERED", "YOU HAVE BEEN CONQUERED BY",
		"THE GAME HAS BEEN WON BY", "MAP:", "{0} has called the peace vote.", "{0} has voted for peace.", "{0} has rejected peace.", "second played", "seconds played", "LEADERBOARD", "Humans", "Players", "Bots", "Spectators", "Threshold",
		"Percentage", "Growth", "Income", "Time", "Hint: The top 9 emojis are ordered by usage.", "Hint: Call the peace vote by pressing {0}.", "Hint: Add troops to your weakest ongoing attack with {0}.",
		"Hint: Hover with the mouse over a player and press {0} to attack them.", "{0} still needs to be conquered!", "A neutral pixel at position ({10}, {11}) still needs to be conquered!", "🔑 Show Account", "🚨 Moderation Actions",
		"🚩 Report User", "💬 Mention", "Loading", "{0} has defeated {1}!", "White Arena", "Black Arena", "Island", "Mountains", "Desert", "Swamp", "White Plains", "Cliffs", "Pond", "Halo", "Europe", "World", "Caucasia", "Africa", "Middle East",
		"Scandinavia", "North America", "South America", "Asia", "Australia", "Island Kingdom", "Refresh", "Public Profile", "🧈 Gold", "Monopolist", "Banker", "Miner", "Saver", "Starter", "Account Balance: ", "Rank: ", "Status: ",
		"Play multiplayer games to earn gold. Accounts without gold will be deleted! Each day, you will lose 0.50 gold or 0.01% of your balance, whichever amount is higher.",
		"Buttons with yellow font color use a small amount of gold, which is then redirected based on the specific action taken.", "Gold is the fuel that keeps your account running! Keep the balance up!", "Gold Transfer", "Confirm", "Cancel",
		"You are about to send {10} gold from the Source Account {1}. The transaction fee is {12} gold. The Target Account ({3}) will receive {14} gold.", "Account Name", "Copy", "Password", "Show", "Hide", "Request New Password", "Security Tip",
		"To safeguard your account, never disclose your password to anyone. We will never ask for your password, as we do not require it for any service.",
		"If you have accessed your account through unofficial webpages or apps, your security may be compromised. We recommend changing your password.",
		"If you lose your password or account name, you may lose access to your account. In such a case, we are unable to recover it. Please ensure that you store your account name and password in a safe place.", "Account Options",
		"Log in to a Different Account", "Create New Account", "Delete Account: ", "🗑️ Account Deletion", "Accounts without gold will be deleted automatically after 8 days. To initiate this process, deplete all your gold.", "Saved Accounts",
		"Listed accounts may have been removed in the meantime due to insufficient funds.", "🗑️ Remove From List", "➡️ Login", "1v1 Rating", "Elo: ", "Played Games: ", "Battle Royale Rating", "Commander", "Strategist", "Soldier", "Recruit",
		"Rating: ", "Admin Statistics", "Votes: ", "You are about to purchase {10} votes for {11} Gold with your Account {2}.", "Username", "Please choose a respectful username.", "Bio", "Upload Bio", "The monthly fee is currently {10} gold.",
		"Enable Auto Renew", "Disable Auto Renew", "Auto Renew is off. The subscription will end in {10} day(s).", "Auto Renew is on. The subscription will renew in {10} day(s).", "Description", "Report Player", "Primary Clan Stats", "Clan: {0}",
		"Monthly Points: {0}", "Rank: {0}", "Total Points: {0}", "Won Games: {0}", "Avg. Points per Game: {0}", "Secondary Clan Stats",
		"Once the monthly points of the secondary clan surpass the monthly points of the primary clan, the secondary clan will become the new primary clan.", "In this scenario, your clan leader statistics will be reset.",
		"Clan Leader Statistics", "Clan Leader of {0}", "No Clan Leader", "Elect", "Every week, you can vote for one clan member to increase their clan leader points.",
		"You and this clan member must have the same primary clan, which can be checked in the Primary Clan Stats.", "A clan leader gains gold whenever a member earns gold in a game.", "Rating: {10}", "Rank: {10}", "Status: {10}", "Active",
		"Inactive", "Unlink Account", "Benefits:", "No Ads", "Separate Leaderboard", "Extra Gold Income", "Status: Not Linked", "Join Territorial.io on Patreon:", "Once you have joined, connect your account:",
		"If you hide Patreon, no one can share their membership with you.", "Additional Income", "Options", "Default", "Uniform", "Customized", "Mixed", "Team dependent", "Player Count", "Clan Chart", "🛠️ Options", "🛠️ Chart Options",
		"Search Terms", "Separate search terms with a comma.", "Load Data", "Start Index", "End Index", "Timeframe", "More Options", "Y-Axis Compression", "Choose Your Nation's Color!", "National Color", "Red: ", "Green: ", "Blue: ", "Adjust",
		"Colors", "Random", "Selectable Color", "⏳ Connecting...", "Find Server...", "New Connection...", "Custom Scenario", "⚔️ Play", "Map", "Settings", "Game Mode", "Clustered", "Player Names", "Kingdom Names", "Simple Names",
		"Territorial Income", "Interest Income", "Starting Resources", "More Settings", "Reset Scenario", "Open File...", "Save As File...", "📜 Game Log", "Multiplayer", "My Account", "Game Menu", "Your Kingdom's Name", "Clans", "Clan Members",
		"Admins", "1v1 Players", "Battle Royale", "Richest Players", "Patreon Members", "🏆 Leaderboards", "Previous 10", "Next 10", "1v1 Player Ranking", "Clan Ranking", "Clan Member Ranking", "Admin Ranking", "1v1 Reports", "Admin Election",
		"Blockchain", "Clan Leader Election", "Bio Reports", "Battle Royale Players", "Audit Log", "Ranking", "Player", "Elo", "Clan", "Rating", "Leader", "Index", "Seconds Ago", "Accuser", "Accused", "Voter", "Target Account", "Votes", "Sender",
		"Receiver", "Amount", "Number", "Gold", "Admin", "Affected Account", "Type", "Elo Deducted", "Bio Removed", "🛠️ List Options", "Clan Name Search", "Username Search", "Quantity", "Account Name Search", "1v1", "Zombie", "Chat", "Close",
		"Ready", "Next Map", "Next Game Mode", "Next Contest", "Teams", "ON", "OFF", "Zombies", "Login", "📜 Logs", "Procedural Map", "Realistic Map", "Custom Map", "Passable Water", "Passable Mountains", "Select File", "Preview", "Map Name",
		"Selectable Name", "▶️ Replay", "🔲 Select All", "📋 Copy", "🗑️ Clear", "▶️ Launch", "Insert the replay string here!", "⚙️ Settings", "🔄 Reset", "Reload Required", "A game reload is required to apply the new configuration.",
		"Information", "Increasing resolution, shrinking minimum font size, and speeding up text rendering can strain your system and hinder gameplay responsiveness.", "Resolution", "Low", "Medium", "High", "Very High", "Minimum Font Size",
		"Small", "Very Small", "Text Rendering Speed", "Slow", "Fast", "Large UI", "Place Balance Above", "Hide Zoom Buttons", "Font", "Message Box", "Keep Closed", "Is Muted", "Shortcut Keys", "Reset", "Language", "Spawning", "Selectable Spawn",
		"🔑 My Account", "📈 Clan Charts", "🧈 Gold Transfer", "🔗 Links", "ℹ️ Game Version", "🗑️ Delete Data", "Privacy Settings", "Force Restart Game", "☰ Game Menu", "📊 Game Statistics", "🏳️ Surrender", "🕊️ Call Peace Vote", "Android App",
		"iOS App", "Changelog", "Clan Results", "Tutorial", "Do you want to delete all locally stored data, like usernames, setting data and account data like passwords and account names?",
		"Please make sure to safely store passwords before performing this action.", "🗑️ Delete", "User Privacy", "Check out our Privacy Policy at:", "Source Account", "Send gold only to trusted accounts!", "Replay Error", "Warning",
		"Loading...", "An enemy ship belonging to {0} is heading towards your shore.", "Initiate Land Attack At Mouse Pointer", "Launch Ship Towards Mouse Pointer", "Increase Percentage Bar", "Decrease Percentage Bar",
		"Slightly Increase Percentage Bar", "Slightly Decrease Percentage Bar", "Switch UI Visibility", "Zoom In", "Zoom Out", "Camera Left", "Camera Right", "Camera Up", "Camera Down", "Add To Weakest Attack", "Call Peace Vote",
		"Intercept Ship At Mouse Pointer", "Avg. Attack Strength", "Land Attacks", "Ships launched", "Bots conquered", "Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Received Support", "Overall Income",
		"Additional Costs", "Land War Losses", "Naval Losses", "Transmitted Support", "Overall Expenses", "Mountain Attacks", "Ships landed", "Territory", "Numbers", "Statistics", "Neutral", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan",
		"White", "Black", "Ship launched!", "Ship intercepted!", "Upcoming Alliance Contest!", "Upcoming Battle Royale Contest!", "Upcoming 1v1 Contest!", "Upcoming Zombie Contest!"
	]
}

function df() {
	var eq, es, j, tg, aC2, aC3, aC4, aC5, aC6, i, a34, aC7;
	this.hW = !1, this.dZ = function(qC, aC8) {
		if (1 === a0.id && 13 <= a0.dr && a0.dr < 18) return aC8 ? void(a34 = qC) : a34 !== qC ? void 0 : void a0.vD.saveString(200, qC);
		aC8 && (a34 = qC, (aC7 = document.createElement("a")).appendChild(document.createTextNode(a34)), this.hW = !0, aC7.title = a34, aC7.target = "_blank", aC7.href = a34, aC7.style.textAlign = "center", aC7.style.color = bA.ne, aC7.style
			.position = "absolute", aC7.style.padding = "0px", aC7.style.margin = "0px", this.resize(), document.body.appendChild(aC7), be.dh = !0)
	}, this.rm = function() {
		return !(!this.hW || (document.body.removeChild(aC7), this.hW = !1))
	}, this.gw = function(i1, i2) {
		return !!this.hW && ((i1 < eq || i2 < es || eq + i < i1 || es + j < i2 || eq + i - tg < i1 && i2 < es + tg) && (be.dh = !0, this.hW = !1, document.body.removeChild(aC7)), !0)
	}, this.resize = function() {
		var a5S, aC9;
		this.hW && (aC5 = Math.floor(.8 * (a0.a1.ht() ? h.i > h.j ? .6 : .55 : .4) * h.hu), tg = Math.floor(.15 * aC5), aC2 = Math.floor(.35 * tg), aC3 = Math.floor(.5 * tg), aC4 = Math.floor(2.5 * aC3), j = tg + aC2 + 3 * aC3, a5S = b9.qV.sJ(1,
			aC2 / h.k), aC6 = Math.floor(h.k * aQ.measureText(a34, a5S)), aC9 = i = (aC5 < aC6 ? aC6 : aC5) + 2 * aC4, i = Math.min(i, h.i - 2 * (a0.a1.ht() ? 2 : 1) * bb.gap), a5S = b9.qV.sJ(1, i / aC9 * aC2 / h.k), aC6 = Math.floor(h
			.k * aQ.measureText(a34, a5S)), eq = Math.floor((h.i - i) / 2), es = Math.floor((h.j - j) / 2), aC7.style.font = a5S, aC7.style.top = Math.floor((es + 1.4 * aC3 + tg) / h.k) + "px", aC7.style.left = Math.floor((eq + (i -
			aC6) / 2) / h.k) + "px")
	}, this.ub = function() {
		this.hW && (uc.fillStyle = bA.nb, uc.fillRect(eq, es + tg, i, j - tg), uc.fillStyle = bA.ok, uc.fillRect(eq, es, i, tg), uc.fillStyle = bA.ne, uc.lineWidth = bb.ym, uc.strokeStyle = bA.ne, uc.strokeRect(eq, es, i, j), uc.fillRect(eq, es +
			tg, i, bb.ym), uc.font = b9.qV.sJ(1, .48 * tg), b9.qV.textAlign(uc, 1), b9.qV.textBaseline(uc, 1), uc.fillText("You are leaving Territorial.io!", Math.floor(eq + (i - .5 * tg) / 2), Math.floor(es + .55 * tg)), aM.a5d(Math
			.floor(eq + i - .8 * tg), Math.floor(es + .25 * tg), Math.floor(.5 * tg)), uc.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function dd() {
	var gap, aAV, eq = [0, 0, 0, 0, 0],
		es = [0, 0, 0, 0, 0],
		nG = [1, 1, 1, 1, 1],
		fB = [!0, !0, !0, !1, !1],
		f4 = (this.fW = [!0, !0, !0, !1, !1], null);
	this.aCA = function(a2d, aCB) {
		f4 = a2d, fB = aCB, aAV = [bJ.aCC, bJ.a0t, bJ.aCD, bJ.aCD, bJ.aCE], this.dZ()
	}, this.dZ = function() {
		if (ab.tB()) {
			var aB, sq = Math.floor((a0.a1.ht() ? .261 : .195) * h.hu),
				sr = Math.floor(.9 * sq),
				a88 = Math.floor(.17 * sr);
			if (gap = a0.a1.ht() ? 2 * bb.gap : bb.gap, nG[0] = sq / f4[0].width, nG[1] = sr / f4[1].width, nG[2] = a88 / f4[2].height, nG[3] = a88 / f4[3].height, nG[4] = a88 / f4[4].height, nG[2] *= 1.7, nG[3] *= 1.07, eq[0] = gap, eq[1] = gap,
				eq[2] = gap, eq[3] = gap, eq[4] = Math.floor(2 * gap + nG[3] * f4[3].width), es[0] = gap, es[1] = es[0] + gap + nG[0] * f4[0].height, es[2] = es[1] + gap + nG[1] * f4[1].height, es[3] = es[2] + gap + nG[2] * f4[2].height, es[4] =
				es[3], !fB[0])
				for (aB = 0; aB < 5; aB++) es[aB] -= nG[0] * f4[0].height + gap;
			if (!fB[1])
				for (aB = 2; aB < 5; aB++) es[aB] -= nG[1] * f4[1].height + gap
		}
	}, this.hW = function() {
		return !(7 === aa.a10() && a0.a1.ht())
	}, this.gw = function(i1, i2) {
		if (f4 && this.hW())
			for (var aB = fB.length - 1; 0 <= aB; aB--)
				if (fB[aB] && this.fW[aB] && eq[aB] < i1 && es[aB] < i2 && i1 < eq[aB] + nG[aB] * f4[aB].width && i2 < es[aB] + nG[aB] * f4[aB].height) return t.u(9, t.sj, new aCF("You are leaving Territorial.io.", b9.qV.a33(aAV[aB]))), !0;
		return !1
	}, this.ub = function() {
		if (f4 && this.hW()) {
			var aB;
			for (uc.imageSmoothingEnabled = !0, aB = 0; aB < 5; aB++) fB[aB] && this.fW[aB] && (uc.setTransform(nG[aB], 0, 0, nG[aB], eq[aB], es[aB]), uc.drawImage(f4[aB], 0, 0));
			uc.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function dU() {
	this.aCG = 0, this.aCH = null, this.tp = null, this.ku = null, this.y = null, this.uB = null, this.tn = null, this.message = null, this.aCI = null, this.rl = null, this.aCJ = new aCK, this.a0x = 0, this.a92 = 0, this.dZ = function() {
		this.a92 = be.eI, this.aCG = bF.sm.w7(bi.eG.data[105].value), this.tp = new aCL, this.ku = new aCM, this.y = new aCN, this.uB = new aCO, this.tn = new aCP, this.message = new aCQ, this.aCI = new aCR, this.rl = new aCS, this.y.dZ(), bo
		.dZ(), this.a0x = 1, a0.a1.setState(1), aa.setState(0)
	}, this.u5 = function() {
		this.rl && this.rl.u5(), this.aCH = null, this.tp = null, this.ku = null, this.y = null, this.uB = null, this.tn = null, this.message = null, this.aCI = null, this.rl = null, this.a0x = 0, bo.u5(), a0.a1.setState(0)
	}
}

function aCL() {
	function aCn(g, t3, t4) {
		var aCo = g[t3];
		g[t3] = g[t4], g[t4] = aCo
	}
	this.tq = [
		[],
		[],
		[],
		[]
	], this.tr = [0, 0, 0, 0], this.aCT = [], this.aCU = function(aCV, sh, username, tw, a3Y, aCW, elo, color, vf, aCX) {
		this.tq[aCV].push(this.aCY(sh, username, tw, a3Y, aCW, elo, color, vf, aCX)), bm.aCG === sh && (bm.aCH = this.tq[aCV][this.tq[aCV].length - 1]), bm.y.aCZ += 29 === t.sj && bm.y.rZ[0] === aCV && 1 === bm.y.rZ[2]
	}, this.aCY = function(sh, username, tw, a3Y, aCW, elo, color, vf, aCX) {
		return {
			sh: sh,
			username: username,
			tw: tw,
			a3Y: a3Y,
			aCW: aCW,
			elo: elo,
			color: color,
			vf: vf,
			aCX: aCX
		}
	}, this.aCa = function(e4, aCV, tw, a3Y, aCW, elo, vf) {
		e4 = this.tq[aCV][e4];
		e4.tw = tw, e4.a3Y = a3Y, e4.aCW = aCW, e4.elo = elo, e4.vf = vf, bm.y.aCZ += 29 === t.sj && bm.y.rZ[0] === aCV && 1 === bm.y.rZ[2]
	}, this.aCb = function(e4, aCV, aCc) {
		var e4 = this.tq[aCV][e4],
			aCd = e4.username,
			aCe = "Redacted " + bE.sm.z5(e4.sh, 2);
		e4.username = aCc ? "[" + b9.rU.a0V(aCd) + "] " + aCe : aCe, aCd.indexOf("Redacted") < 0 && (e4.aCf = aCd, e4.aCg = 3), bm.y.aCZ += 29 === t.sj && bm.y.rZ[0] === aCV && 1 === bm.y.rZ[2]
	}, this.aCh = function(e4, aCi, aCj) {
		var player = this.tq[aCi][e4];
		this.aCk(e4, aCi), this.tq[aCj].push(player), bm.y.aCZ += 29 === t.sj && bm.y.rZ[0] === aCj && 1 === bm.y.rZ[2]
	}, this.aCk = function(e4, aCi) {
		var tp = this.tq[aCi];
		this.aCT.push(tp[e4]), 1e3 < this.aCT.length && this.aCT.shift(), e4 >= this.tr[aCi] ? tp[e4] = tp[tp.length - 1] : (this.tr[aCi]--, 2 === aCi ? (tp.splice(this.tr[aCi] + 1, 0, tp[tp.length - 1]), tp.splice(e4, 1)) : (tp[e4] = tp[this.tr[
			aCi]], tp[this.tr[aCi]] = tp[tp.length - 1])), tp.pop(), bm.y.aCZ += 29 === t.sj && bm.y.rZ[0] === aCi && 1 === bm.y.rZ[2]
	}, this.aCl = function(e4, rY) {
		bm.y.aCZ += 29 === t.sj && bm.y.rZ[0] === rY && 1 === bm.y.rZ[2];
		var tp = this.tq[rY],
			qN = tp[e4];
		if (2 === rY)
			if (e4 >= this.tr[rY]) {
				for (var aCm = this.tr[rY], elo = qN.elo; aCm && elo > tp[aCm - 1].elo;) aCm--;
				tp[e4] = tp[this.tr[rY]], tp.splice(this.tr[rY]++, 1), tp.splice(aCm, 0, qN)
			} else tp.splice(this.tr[rY]--, 0, qN), tp.splice(e4, 1);
		else e4 >= this.tr[rY] ? aCn(tp, this.tr[rY]++, e4) : aCn(tp, --this.tr[rY], e4)
	}, this.aCp = function(sh) {
		for (var tq = this.tq, ej = tq.length, aB = 0; aB < ej; aB++)
			for (var tp = tq[aB], l0 = tp.length, f2 = 0; f2 < l0; f2++)
				if (sh === tp[f2].sh) return tp[f2];
		return null
	}
}

function aCK() {
	this.di = function(e4) {
		if ((tr = bm.tp.tr[e4]) < 2) return !1;
		var ra = bm.y.rb[e4],
			aCq = 9 === ra.aCr ? 333 : 512,
			tr = Math.min(tr, aCq);
		8 === ra.aCr && (tr -= tr % 2);
		aCq = bm.tp.tq[e4].splice(0, tr), bm.tp.tr[e4] -= tr, tr = function(aCs) {
			if (bm.aCH) {
				if (__fx.customLobby.isActive()) return __fx.customLobby.getPlayerId();
				for (var ej = aCs.length, sh = bm.aCH.sh, aB = 0; aB < ej; aB++)
					if (aCs[aB].sh === sh) return aB
			}
			return -1
		}(aCq);
		return -1 === tr ? (bm.tp.aCT = bm.tp.aCT.concat(aCq), 1e3 < bm.tp.aCT.length && bm.tp.aCT.splice(0, bm.tp.aCT.length - 1e3), bm.y.aCZ += 29 === t.sj && bm.y.rZ[0] === e4 && 1 === bm.y.rZ[2], !1) : (8 === ra.aCr && (ra.aCv = (ra.aCv + (
			tr >> 1)) % 1024, e4 = tr - tr % 2, tr %= 2, aCq = aCq.slice(e4, 2 + e4)), aw.dZ(ra, aCq, tr), !0)
	}, this.aCw = function(ra, aCs, aCt) {
		var em = aD.data = new a4H,
			aD0 = (em.spawningSeed = ra.spawningSeed, ra.aCr < 7 ? (em.gameMode = 1, em.numberTeams = ra.aCr + 2) : 9 === ra.aCr ? (em.gameMode = em.isZombieMode = 1, em.numberTeams = 2) : (em.gameMode = 0, em.battleRoyaleMode = 7 === ra.aCr ?
				0 : 10 === ra.aCr ? 1 : 2), em.selectedPlayer = aCt, em.isContest = ra.aCx, em.mapType = bR.aCy(ra.eP) ? 0 : 1, bR.aCz(em, ra.eP), em.mapSeed = ra.mapSeed, em.humanCount = aCs.length);
		em.selectableSpawn = 1 === em.gameMode || aD0 < 100, em.colorsData = new Uint32Array(aD0), em.playerNamesData = new Array(aD0);
		for (var aB = 0; aB < aD0; aB++) em.colorsData[aB] = aCs[aB].color, em.playerNamesData[aB] = aCs[aB].username;
		if (2 === em.battleRoyaleMode)
			for (em.elo = new Uint16Array(aD0), aB = 0; aB < aD0; aB++) em.elo[aB] = aCs[aB].elo;
		aa.setState(8), bR.a7(ra.eP, em.mapSeed), aD.a4L(), aD.a4K = 2
	}
}

function aCM() {
	var dv = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player", "Patreon Member"],
		aD1 = [bA.ns, bA.ns, bA.nt, bA.oM, bA.oN, bA.o9, bA.oS, bA.nt, bA.om, bA.ob, bA.oo],
		aD2 = [
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
		aD3 = ["Your account is too new!", "The server couldn't process your request.", "Spam detected!", "You are muted!", "Player couldn't be found.", "You don't have permission for this operation!", "Not enough gold!", "Action cancelled!",
			"User received this punishment already!", "Lobby restarts in 2 minutes!", "Lobby restarts in 10 seconds!"
		];

	function aDG(rc, sh, aDI) {
		for (var f3 = rc.length - 1; 0 <= f3; f3--) {
			var qN = rc[f3];
			0 === qN.id && qN.sh === sh && (qN.r = "[Redacted Message]", aDI) && (qN.aDJ = 1)
		}
	}
	this.rh = function(aD4) {
		var aD5, a0W;
		return aD4.id < 5 && (aD5 = "@" + bE.sm.z5(aD4.sh, 5)), 0 === aD4.id ? aD5 + ": " + aD4.r : 1 === aD4.id ? (a0W = "@" + bE.sm.z5(aD4.target, 5), 0 === aD4.aD6 ? 32768 <= aD4.value ? aD5 + " voted with " + (aD4.value - 32768 + 1) +
				" gold against " + a0W + " to weaken the latter's admin position. 📉" : aD5 + " voted with " + (aD4.value + 1) + " gold for " + a0W + " to strengthen the latter's admin position. 💪" : 1 === aD4.aD6 ? aD5 + " sent " + Math.floor(
					aD4.value / 100) + " 🧈 gold to " + a0W + "." : aD5 + " voted with " + (aD4.value / 10).toFixed(1) + " points for " + a0W + " to acknowledge the latter as clan leader. ✅") : 2 === aD4.id ? 0 === aD4.aD6 ? aD5 +
			" was 🔇 muted for 1 Hour." : 1 === aD4.aD6 ? "The username of " + aD5 + " was ✂️ redacted. Duration: 1 Day" : aD5 + " 👢 was kicked." : 3 === aD4.id ? aD5 + bn.e7(aD4.aD6, bn.e1[aD4.aD6][aD4.value]) + "@" + bE.sm.z5(aD4.target, 5) +
			bn.e9(aD4.aD6, bn.e1[aD4.aD6][aD4.value]) : 4 === aD4.id ? aD5 + bn.e7(5, bn.e1[5][aD4.aD6]) + "@" + bE.sm.z5(aD4.target, 5) + bn.e9(5, bn.e1[5][aD4.aD6]) : 5 === aD4.id ? aD3[aD4.aD6] : 6 === aD4.id ? "You are about to mention " +
			aD4.value + " player" + (1 === aD4.value ? "" : "s") + ". This action will cost " + (Math.max(10 * aD4.value, 10) / 100).toFixed(2) + " Gold. Proceed? (yes / no)" : void 0
	}, this.rg = function(aD4, a6g) {
		return {
			aD4: aD4,
			r: a6g,
			aD7: 0,
			fontSize: 1,
			rk: 0,
			aD8: aD4.id ? bA.oL : bA.ne
		}
	}, this.tu = function(player, rY) {
		return (2 === rY ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username
	}, this.tv = function(tw) {
		return aD1[tw]
	}, this.aD9 = function(tw, a3Y) {
		return tw < 3 || 7 === tw ? aD2[tw][0] : 4 === tw ? aD2[tw][a3Y < 1 ? 0 : a3Y < 10 ? 1 : 2] : aD2[tw][a3Y < 10 ? 0 : 1]
	}, this.aDA = function(a3Y) {
		return 0 === a3Y
	}, this.aCp = function(rY, sh) {
		for (var tq = bm.tp.tq, tp = tq[rY], ej = tp.length, aB = 0; aB < ej; aB++)
			if (sh === tp[aB].sh) return tp[aB];
		for (var f3 = 0; f3 < tq.length; f3++)
			if (rY !== f3)
				for (ej = (tp = tq[f3]).length, aB = 0; aB < ej; aB++)
					if (sh === tp[aB].sh) return tp[aB];
		return null
	}, this.tx = function(qN) {
		return !!bm.aCH && qN.sh === bm.aCH.sh
	}, this.aDB = function(tp, aDC, aDD) {
		var a0T = [];
		loop: for (var aB = aDC; aB < aDD; aB++) {
			var a0U = b9.rU.a0V(tp[aB].username);
			if (a0U) {
				for (var f3 = a0T.length - 1; 0 <= f3; f3--)
					if (a0U === a0T[f3].name) {
						a0T[f3].gC++;
						continue loop
					} a0T.push({
					name: a0U,
					gC: 1
				})
			}
		}
		if (a0T.sort(function(f2, f3) {
				return f3.gC - f2.gC
			}), 0 === a0T.length) return "";
		for (var qC = a0T[0].name + ": " + a0T[0].gC, aB = 1; aB < a0T.length; aB++) qC += "   " + a0T[aB].name + ": " + a0T[aB].gC;
		return qC
	}, this.aDE = function(tw, a3Y, aCW) {
		return 0 === dv[tw].length ? "Rank: " + (a3Y + 1) : dv[tw] + " Rank: " + (a3Y + 1) + (3 !== tw && aCW < 100 ? "   " + dv[3] + " Rank: " + (aCW + 1) : "")
	}, this.aDF = function(sh) {
		for (var rb = bm.y.rb, aB = 0; aB < rb.length; aB++) aDG(rb[aB].rc, sh);
		aDG(bm.message.aDH(), sh, 1), bm.rl.aDF(sh)
	}
}

function aCP() {
	var sC = 0,
		aDK = 0,
		aDL = 0,
		aDM = null,
		aDN = null;

	function aDQ(qN, aDR, aDS) {
		var qC = qN.username;
		return (qC += "   " + bm.ku.aDE(qN.tw, qN.a3Y, qN.aCW)) + function(qN) {
			qN = qN.vf;
			if (qN < 1e3) return "   Gold: " + qN;
			if ((qN %= 1024) < 1e3) return "   Gold: " + qN + "k";
			return "   Gold: " + (qN - 999) + "M"
		}(qN) + ("   IP: " + bE.sm.z5(qN.aCX, 2)) + ("   " + ["🟥 Offline", "🟩 Online"][aDS ? aDK : aDP(qN, aDR)])
	}

	function aDP(qN, aDR) {
		return aDK = aDR || bm.tp.aCp(qN.sh) ? 1 : 0
	}
	this.aDO = function() {
		!sC || aDK === aDP(aDN) && aDL === aDN.vf || (aDL = aDN.vf, aDM.show(-1, -1, aDQ(aDN, 0, 1), 1, 1))
	}, this.ty = function(e, qN, aDR) {
		var a8F = e.target.getBoundingClientRect();
		this.show(a8F.left, a8F.top, qN, 0, aDR), e.target.addEventListener("mouseleave", function remove() {
			e.target.removeEventListener("mouseleave", remove), bm.tn && bm.tn.rm(1)
		})
	}, this.show = function(eq, es, qN, sG, aDR) {
		aDM = aDM || new sA, aDL = (aDN = qN).vf, aDM.show(eq, es, aDQ(qN, aDR), sG), sC = 1
	}, this.rm = function(sM) {
		aDM && aDM.rm(sM) && (sC = 0, aDN = null)
	}
}

function aCN() {
	function aDX(aDa) {
		bm.y.aCZ && 1 === bm.y.rZ[2] && t.a4p(29).aDb(), bm.y.aCZ = 0, t.a4p(29).aDc(), 0 !== bm.y.rb[bm.y.rZ[0]].ta && !aDa || t.a4p(29).aDd(), bm.tn.aDO()
	}
	this.rb = new Array(4), this.rZ = [0, 0, 1, 0], this.aCZ = 0, this.aDU = [0, 0], this.dZ = function() {
		for (var aB = 0; aB < this.rb.length; aB++) this.rb[aB] = new aDV;
		this.rZ[0] = bi.eG.data[158].value
	}, this.aDW = function() {
		aDX(!0)
	}, this.aDY = function() {
		for (var aB = 0; aB < bm.y.rb.length; aB++) {
			var ra = bm.y.rb[aB];
			0 === ra.ta ? ra.aDe = 0 : (ra.aDf = Math.max(ra.aDf - ra.aDe % 2, 0), ra.aDe++)
		}
		aDX(!1)
	}, this.aDg = function(rY) {
		this.rZ[0] !== rY || this.rZ[2] || t.a4p(29).aDh()
	}
}

function aCR() {
	var aDi = 0,
		aDj = "",
		aDk = 0,
		aDl = 0,
		aDm = 0;

	function aDo(a6g) {
		az.aDz.aE0(3, a6g)
	}

	function aDx(gC) {
		aDi = 1, bm.message.aE1({
			id: 6,
			value: gC
		})
	}

	function aDr(r) {
		var aE4 = new RegExp("\\B@[-\\w\\[\\]]+", "g");
		return r.match(aE4)
	}
	this.zs = function(r) {
		var aDn, g, aDt;
		if (aDi) return aDi = 0, "yes" === (aDn = r.toLowerCase()) || "y" === aDn ? void aDo(aDj) : void bm.message.aE1({
			id: 5,
			aD6: 7
		});
		!(r.indexOf("@") < 0) && (aDn = aDr(r)) ? (aDj = r, g = function(aDq) {
			for (var ej = aDq.length, aE2 = [0, 0, 0, 0], aB = 0; aB < ej; aB++)
				for (var i = aDq[aB], f2 = 0; f2 < 4; f2++) i === "@room" + (f2 + 1) && (aE2[f2] = 1);
			if ((aDl = b9.qd.a2H(aE2)) % 4 == 0) return b9.qd.a2Z(bm.tp.tq);
			for (f2 = 0; f2 < 4; f2++) aE2[f2] = aE2[f2] ? bm.tp.tq[f2] : [];
			return b9.qd.a2Z(aE2)
		}(aDn), function(aDq, aDt, r) {
			if (!aDk) return;
			for (var ej = aDt.length, aB = 0; aB < ej; aB++) 2 === aDt[aB].id && (r = r.replace(aDq[aDt[aB].e4], "@" + aDt[aB].fB));
			return aDi = 1, aDo((aDj = r).slice(0, 126) + "|"), 1
		}(aDn, aDt = function(aDq) {
			for (var aDt = [], ej = (aDm = aDk = 0, aDq.length), aB = 0; aB < ej; aB++) {
				var i = aDq[aB],
					l0 = i.length;
				b9.rU.startsWith(i, "@[") ? l0 <= 9 && b9.rU.a37(i, "]") && aDt.push({
					id: 0,
					fB: i.substring(2, l0 - 1).toUpperCase()
				}) : 6 === l0 ? b9.rU.startsWith(i, "@room") || (aDm++, aDt.push({
					id: 1,
					fB: bF.sm.w7(i.substring(1))
				})) : 1 < l0 && l0 < 5 && 0 <= (l0 = b6.data.aBu(i.substring(1))) && (aDt.push({
					id: 2,
					fB: l0,
					e4: aB
				}), aDk = 1)
			}
			return aDt
		}(aDn), r) || (0 === aDt.length ? aDl || function(aDq) {
			for (var ej = aDq.length, aB = 0; aB < ej; aB++) {
				var i = aDq[aB];
				if ("@all" === i || "@everyone" === i) return 1
			}
			return
		}(aDn) ? aDx(g.length) : aDo(r) : aDn.length === aDm ? aDo(r) : (function(g, aDt) {
			var l0 = aDt.length;
			if (0 === l0) return;
			var ej = g.length;
			loop: for (var aB = ej - 1; 0 <= aB; aB--) {
				for (var f2 = 0; f2 < l0; f2++)
					if (0 === aDt[f2].id) {
						if (aDt[f2].fB === b9.rU.a0V(g[aB].username)) continue loop
					} else if (1 === aDt[f2].id && aDt[f2].fB === g[aB].sh) continue loop;
				g[aB] = g[--ej], g.pop()
			}
		}(g, aDt), aDx(g.length)))) : aDo(r)
	}, this.aE5 = function(r) {
		var aDq = aDr(r);
		if (aDq)
			for (var a5 = new RegExp("^[0-9]+$"), ej = aDq.length, aB = 0; aB < ej; aB++) {
				var i = aDq[aB].substring(1),
					l0 = i.length;
				1 <= l0 && l0 <= 3 && a5.test(i) && (l0 = parseInt(i, 10), !isNaN(l0)) && 0 <= l0 && l0 < b6.data.g.length && (r = r.replace("@" + i, "@" + b6.data.g[l0]))
			}
		return r
	}
}

function aCQ() {
	var aE6, aE7 = [],
		aE8 = -1,
		aE9 = 0,
		aEA = 0;

	function aEE() {
		aE9 = be.eI, (3 === this.u2 ? (aEA = 1, aED) : (aE8 = (aE7.length + aE8 + 2 * this.u2 - 1) % aE7.length, aEC))()
	}

	function aEC() {
		0 !== aE7.length && (aEA = 0, aE6 && aE6.u5(), (aE6 = new tz(aEE)).rx(aE8, aE7.length), aE6.show(aE7[aE8]), bm.message.resize())
	}

	function aED() {
		aE6 && aE6.u5(), (aE6 = new u6(aEC)).rx(aE7.length), aE6.show(), bm.message.resize()
	}
	this.aE1 = function(aD4) {
		var qN;
		2 === aD4.id && 3 === aD4.aD6 ? bm.ku.aDF(aD4.sh) : (qN = bm.ku.rg(aD4, bm.ku.rh(aD4)), (5 !== aD4.id && 6 !== aD4.id || (t.a4p(29).aEB().rj(qN), 5 === aD4.id)) && (qN = be.eI < aE9 + 2e4, aE8 !== aE7.length - 1 && qN || (aE8 = aE7
			.length), aE7.push(aD4), bi.eG.data[14].value || bo.play(), aE6) && (bi.eG.data[13].value || aEA && qN ? aE6.rx(aE7.length) : aEC()))
	}, this.show = function() {
		aED()
	}, this.rm = function() {
		aE8 = aE7.length - 1, aE6 && aE6.u5(), aE6 = null
	}, this.resize = function() {
		aE6 && aE6.resize()
	}, this.aDH = function() {
		return aE7
	}
}

function aCO() {
	var aEF = null,
		aEG = null,
		aEH = 0,
		aEI = 0,
		aEJ = null;

	function aEL() {
		0 !== aEG.tw && (bm.uB.rm(), t.u(8, 29, new sk(25, {
			sl: 0,
			sh: bE.sm.z5(aEG.sh, 5),
			si: 0
		}, 29)))
	}

	function aEM() {
		var eq = aEF.eq,
			es = aEF.es;
		bm.uB.rm(), aEF = new u7([new w("Kick User", function() {
			aES(0, 0)
		}, aEV(0, 0)), new w("Block Chat", aET, aEV(1, 0)), new w("Censor Username", aEU, aEV(2, 0))]), aER(eq, es), aEH = 2, aEI = 1
	}

	function aEV(id, e4) {
		var e3, aCW;
		return !bm.aCH || bm.ku.tx(aEG) || (e3 = aEG.a3Y) <= (aCW = bm.aCH.aCW) || 1 - bn.e2(id, aCW, e4) ? 1 : 4 === aEG.tw ? 50 <= e3 ? +(e3 <= aCW) : 20 <= e3 ? +(e3 / 2 <= aCW) : +(e3 / 3 <= aCW) : 0
	}

	function aEP() {
		return !bm.aCH || bm.ku.tx(aEG) ? 1 : 0
	}

	function aEO() {
		var eq = aEF.eq,
			es = aEF.es,
			aEW = (bm.uB.rm(), aEP());
		aEF = new u7([new w(bn.e1[5][0], function() {
			aES(5, 0)
		}, aEW), new w(bn.e1[5][1], function() {
			aES(5, 1)
		}, aEW), new w(bn.e1[5][2], function() {
			aES(5, 2)
		}, aEW), new w(aEG.aCW < 100 ? "Stealth Report" : bn.e1[5][3], function() {
			aES(5, 3)
		}, aEW)]), aER(eq, es), aEI = aEH = 2
	}

	function aEQ() {
		29 === t.sj && t.a4o().aCI(bE.sm.z5(aEG.sh, 5))
	}

	function aES(id, value) {
		az.aDz.aE0(5, {
			id: id,
			value: value,
			sh: aEG.sh
		})
	}

	function aET() {
		var eq = aEF.eq,
			es = aEF.es;
		bm.uB.rm(), aEF = new u7([new w(bn.e1[1][0], function() {
			aES(1, 0)
		}, aEV(1, 0)), new w(bn.e1[1][1], function() {
			aES(1, 1)
		}, aEV(1, 1)), new w(bn.e1[1][2], function() {
			aES(1, 2)
		}, aEV(1, 2)), new w(bn.e1[1][3], function() {
			aES(1, 3)
		}, aEV(1, 3)), new w(bn.e1[1][4], function() {
			aES(1, 4)
		}, aEV(1, 4))]), aER(eq, es), aEH = 3, aEI = 1
	}

	function aEU() {
		var eq = aEF.eq,
			es = aEF.es;
		bm.uB.rm(), aEF = new u7([new w(bn.e1[2][0], function() {
			aES(2, 0)
		}, aEV(2, 0)), new w(bn.e1[2][1], function() {
			aES(2, 1)
		}, aEV(2, 1)), new w(bn.e1[2][2], function() {
			aES(2, 2)
		}, aEV(2, 2))]), aER(eq, es), aEH = 3, aEI = 2
	}

	function aER(eq, es, uD) {
		aEF.show(eq, es, uD), bm.tn.show(aEF.eq, aEF.es, aEG, 1)
	}
	this.aEK = function(e, qN) {
		aEH = 1, aEG = qN, aEF = new u7([new w(L(128), aEL, 0 === aEG.tw ? 1 : 0), new w(L(129), aEM, function() {
			if (!bm.aCH) return 1;
			if (bm.ku.tx(aEG)) return 1;
			if (100 <= bm.aCH.aCW) return 1;
			if (bm.aCH.aCW >= aEG.a3Y) return 1;
			return 0
		}()), new w(L(130, 0, "🚩 Report"), aEO, aEP()), new w(L(131), aEQ, 0)]), aER((aEJ = {
			clientX: e.clientX,
			clientY: e.clientY
		}).clientX, aEJ.clientY, 1)
	}, this.a1r = function(code) {
		if (29 !== t.sj) return !1;
		if (!aEG) return !1;
		if (!(code.length < 1))
			if ("Escape" === code) this.rm();
			else if (b9.rU.startsWith(code, "Numpad") || b9.rU.startsWith(code, "Digit")) {
			code = parseInt(code[code.length - 1], 10);
			if (!isNaN(code))
				if (0 === aEH) this.aEK(aEJ, aEG);
				else {
					if (!aEF) return !1;
					1 === aEH ? code <= 1 ? aEL() : 2 === code ? aEM() : 3 === code ? aEO() : (aEQ(), this.rm()) : 2 === aEH ? 1 === aEI ? code <= 1 ? (aES(0, 0), this.rm()) : (2 === code ? aET : aEU)() : (aES(5, bK.hs(code - 1, 0, 3)), this
					.rm()) : (aES(aEI, bK.hs(code - 1, 0, bn.e1[aEI].length - 1)), this.rm())
				}
		}
		return !0
	}, this.rm = function() {
		aEH = 0, aEF && aEF.rm(), aEF = null, bm.tn.rm()
	}
}

function aDV() {
	this.ta = 0, this.eP = 0, this.mapSeed = 0, this.aCr = 0, this.aEZ = 0, this.aEa = 0, this.aCx = 0, this.aDf = 0, this.spawningSeed = 0, this.a15 = 0, this.aCv = 0, this.rc = [], this.rd = 1048575, this.aDe = 0, this.aEb = [{
		eP: 0,
		mapSeed: 0,
		aCr: 0,
		eI: 100,
		aCx: 0
	}, {
		eP: 1,
		mapSeed: 0,
		aCr: 1,
		eI: 200,
		aCx: 0
	}, {
		eP: 2,
		mapSeed: 0,
		aCr: 2,
		eI: 300,
		aCx: 0
	}, {
		eP: 3,
		mapSeed: 0,
		aCr: 3,
		eI: 400,
		aCx: 0
	}, {
		eP: 0,
		mapSeed: 0,
		aCr: 9,
		eI: 500,
		aCx: 0
	}, {
		eP: 1,
		mapSeed: 0,
		aCr: 10,
		eI: 600,
		aCx: 0
	}, {
		eP: 2,
		mapSeed: 0,
		aCr: 8,
		eI: 700,
		aCx: 0
	}, {
		eP: 3,
		mapSeed: 0,
		aCr: 3,
		eI: 800,
		aCx: 0
	}]
}

function aCS() {
	var aEc = [],
		sw = [],
		aEd = [];

	function aEf(qN) {
		for (var r = qN.r, aEe = [];;) {
			var f4 = function aEh(r, position) {
				position = r.indexOf("@", position);
				if (position < 0) return -1;
				var qC = r.substring(position + 1, position + 6);
				if (5 !== qC.length) return aEh(r, position + 1);
				if (b9.rU.startsWith(qC, "room")) return aEh(r, position + 1);
				var aEo = new RegExp("^[a-zA-Z0-9_-]+$");
				if (!aEo.test(qC)) return aEh(r, position + 1);
				aEo = r.substring(position + 6, position + 7);
				if (1 !== aEo.length) return position;
				qC = new RegExp("^[ :!.]+$");
				if (!qC.test(aEo)) return aEh(r, position + 1);
				return position
			}(r, 0);
			if (-1 === f4) {
				aEe.push(aEi(r, qN));
				break
			}
			0 === f4 ? aEe.push(aEj(r.substring(1, 6), qN, f4)) : (aEe.push(aEi(r.substring(0, f4), qN)), aEe.push(aEj(r.substring(f4 + 1, f4 + 6), qN, f4))), r = r.substring(f4 + 6)
		}
		return aEe
	}

	function aEj(qC, qN, f4) {
		var aEk = function(qC) {
				var sh = bF.sm.w7(qC),
					aEk = bm.tp.aCp(sh);
				if (aEk) {
					for (aEc.push(aEk); 75 < aEc.length;) aEc.shift();
					return aEk
				}
				for (var aCT = bm.tp.aCT, aB = aCT.length - 1; 0 <= aB; aB--)
					if (aEk = aCT[aB], sh === aEk.sh) return aEc.push(aEk), aEk;
				for (aB = aEc.length - 1; 0 <= aB; aB--)
					if (aEk = aEc[aB], sh === aEk.sh) return aEc.push(aEk), aEk;
				return bm.tp.aCY(sh, qC, 1, 999999, 999999, 0, 0, 0, 0)
			}(qC),
			qC = (0 === f4 && 0 === qN.aD4.id && qN.rk && (qN.fontSize = bm.ku.aD9(aEk.tw, aEk.a3Y), qN.aD7 = bm.ku.aDA(aEk.a3Y)), document.createElement("span"));
		return qC.textContent = function(aEk, qN, f4) {
			if (aEk.aCg) return aEk.aCg--, f4 = 2 === qN.aD4.id || (3 === qN.aD4.id || 4 === qN.aD4.id) && 0 !== f4, aEk.username + (f4 ? " (" + aEk.aCf + ")" : "");
			if (qN.aD4.aDJ) return "Redacted " + bE.sm.z5(aEk.sh, 2);
			return aEk.username
		}(aEk, qN, f4), qC.style.display = "inline-block", qC.style.color = bm.ku.tv(aEk.tw), qC.style.cursor = "pointer", qC.style.margin = "0", qC.style.font = "inherit", qC.style.minWidth = qC.style.minHeight = "1em", bm.ku.tx(aEk) && (qC
			.style.textDecoration = "underline"), bm.ku.aDA(aEk.a3Y) && (qC.style.fontWeight = "bold"), qC.onclick = function(e) {
			bm.uB.aEK(e, aEk)
		}, bI.qx() || (qC.onmouseover = function(e) {
			bm.tn.ty(e, aEk)
		}), sw.push(qC), qC
	}

	function aEi(r, qN) {
		var rT = document.createElement("span");
		return rT.textContent = r, rT.style.color = qN.aD8, rT.style.margin = "0", rT.style.font = "inherit", rT
	}

	function aEt(aEk, aCe, sh) {
		sh !== aEk.sh || aEk.aCf || (aEk.aCf = aEk.username, aEk.aCg = 3, aEk.username = aCe)
	}
	this.u5 = function() {
		for (var aB = 0; aB < sw.length; aB++) sw[aB].onclick = sw[aB].onmouseover = null;
		aEd = sw = null
	}, this.transform = function(qN) {
		for (var qA = document.createElement("div"), aEe = aEf(qN), aB = 0; aB < aEe.length; aB++) qA.appendChild(aEe[aB]);
		0 === qN.aD4.id && (qA.vx143 = qN.aD4, aEd.push(qA)), qA.style.margin = "0.6em 0.6em", qN.rk && (qA.style.marginLeft = qA.style.marginRight = "inherit"), qA.style.font = "inherit";
		var aEg = 0 < qN.aD4.id;
		return qN.aD7 && (qA.style.fontWeight = "bold"), aEg && (qA.style.paddingLeft = "0.7em"), aEg && (qA.style.fontStyle = "italic"), qA.style.fontSize = qN.fontSize.toFixed(2) + "em", qA
	}, this.aEr = function(aEs) {
		if (aEs && (2 === aEs.id && 1 === aEs.aD6 || 3 === aEs.id && 2 === aEs.aD6)) {
			var sh = 3 === aEs.id ? aEs.target : aEs.sh;
			if (!bm.tp.aCp(sh)) {
				for (var aCe = "Redacted " + bE.sm.z5(sh, 2), aCT = bm.tp.aCT, aB = aCT.length - 1; 0 <= aB; aB--) aEt(aCT[aB], aCe, sh);
				for (aB = aEc.length - 1; 0 <= aB; aB--) aEt(aEc[aB], aCe, sh)
			}
		}
	}, this.aDF = function(sh) {
		for (var aEu = aEd, aB = aEu.length - 1; 0 <= aB; aB--) {
			var em = aEu[aB];
			if (em.vx143.sh === sh) {
				for (; em.firstChild;) em.removeChild(em.firstChild);
				em.vx143.r = "[Redacted Message]";
				for (var aEe = aEf(bm.ku.rg(em.vx143, bm.ku.rh(em.vx143))), f2 = 0; f2 < aEe.length; f2++) em.appendChild(aEe[f2]);
				aEu.splice(aB, 1)
			}
		}
	}
}

function cN() {
	var aEv, aEw, aEx;

	function aF2(aB) {
		var button = aY.r4[aB],
			eq = button.eq,
			es = button.es,
			i = button.i,
			j = button.j;
		uc.fillStyle = button.aF0, uc.fillRect(eq, es, i, j), aB === aEv && (uc.fillStyle = aEx, uc.fillRect(eq, es, i, j)), uc.lineWidth = bb.ym, uc.strokeStyle = aEw, uc.strokeRect(eq, es, i, j),
			function(button) {
				var eq = button.eq,
					es = button.es,
					i = button.i,
					j = button.j;
				b9.qV.textAlign(uc, 1), b9.qV.textBaseline(uc, 1), uc.font = button.font, uc.fillStyle = aEw, uc.fillText(button.a6g, Math.floor(eq + i / 2), Math.floor(es + j / 2 + .1 * button.fontSize))
			}(button)
	}
	this.i = 0, this.j = 0, this.es = 0, this.gap = 0, this.dZ = function() {
		aEv = -1, aEw = bA.ne, aEx = "rgba(255,255,255,0.16)", this.r4 = new Array(7), this.j = Math.floor((a0.a1.ht() ? .123 : .093) * h.hu), this.i = Math.floor((a0.a1.ht() ? 3.96 : 4.2) * this.j), this.gap = Math.floor(.025 * this.i);
		var aEy = Math.floor(.26 * this.j),
			aEz = b9.qV.sJ(1, aEy);
		this.r4[0] = {
			eq: 0,
			es: 0,
			i: Math.floor(.6 * this.i - this.gap / 2),
			j: this.j,
			a6g: "Multiplayer",
			font: aEz,
			aF0: "rgba(22,88,22,0.8)",
			fontSize: aEy
		}, aEy = Math.floor(.18 * this.j), aEz = b9.qV.sJ(1, aEy), this.r4[1] = {
			eq: 0,
			es: 0,
			i: this.i - this.r4[0].i - this.gap,
			j: this.j,
			a6g: "Single Player",
			font: aEz,
			aF0: "rgba(22,88,88,0.8)",
			fontSize: aEy
		}, this.r4[2] = {
			eq: 0,
			es: 0,
			i: this.i,
			j: Math.floor(.3 * this.j),
			a6g: "",
			font: this.r4[1].font,
			aF0: "rgba(100,0,0,0.8)",
			fontSize: this.r4[1].fontSize
		}, this.r4[3] = {
			eq: 0,
			es: 0,
			i: this.i,
			j: this.j,
			a6g: "Back",
			font: this.r4[0].font,
			aF0: "rgba(0,0,0,0.8)",
			fontSize: this.r4[0].fontSize
		}, this.r4[4] = {
			eq: 0,
			es: 0,
			i: this.i,
			j: Math.floor(.3 * this.j),
			a6g: "The game was updated!",
			font: this.r4[1].font,
			aF0: "rgba(100,0,0,0.8)",
			fontSize: this.r4[1].fontSize
		}, this.r4[5] = {
			eq: 0,
			es: 0,
			i: this.r4[0].i,
			j: Math.floor(.8 * this.j),
			a6g: "Reload",
			font: this.r4[0].font,
			aF0: "rgba(0,100,0,0.8)",
			fontSize: this.r4[0].fontSize
		}, this.r4[6] = {
			eq: 0,
			es: 0,
			i: this.r4[1].i,
			j: this.r4[5].j,
			a6g: "Back",
			font: this.r4[0].font,
			aF0: "rgba(0,0,0,0.8)",
			fontSize: this.r4[0].fontSize
		}, this.a9E()
	}, this.a9E = function() {
		this.es = Math.floor(.54 * h.j), this.r4[0].eq = Math.floor(.5 * h.i - .5 * this.i), this.r4[1].eq = this.r4[0].eq + this.r4[0].i + this.gap, this.r4[2].eq = this.r4[3].eq = this.r4[0].eq, this.r4[4].eq = this.r4[5].eq = this.r4[0].eq,
			this.r4[6].eq = this.r4[1].eq, this.r4[0].es = Math.floor(.54 * h.j), this.r4[1].es = this.r4[0].es, this.r4[2].es = Math.floor((h.j - this.r4[2].j - this.r4[3].j - this.gap) / 2), this.r4[3].es = this.r4[2].es + this.r4[2].j + this
			.gap, this.r4[4].es = Math.floor((h.j - this.r4[4].j - this.r4[5].j - this.gap) / 2), this.r4[5].es = this.r4[6].es = this.r4[4].es + this.r4[4].j + this.gap
	}, this.aF1 = function() {
		aF2(0), aF2(1)
	}, this.aF3 = function() {
		aF2(2), aF2(3)
	}, this.aF4 = function() {
		aF2(4), aF2(5), aF2(6)
	}, this.a1J = function(eq, es, mQ) {
		var aB = -1;
		return 0 === aa.a10() ? aB = this.a1n(eq, es, 0, 2) : 3 === aa.a10() ? aB = this.a1n(eq, es, 3, 1) : 5 === aa.a10() && (aB = this.a1n(eq, es, 5, 2)), aEv !== aB && (aEv = aB, mQ) && (be.dh = !0), -1 !== aB && (aT.rW(), !0)
	}, this.a1n = function(eq, es, aF5, size) {
		for (var aB = aF5; aB < aF5 + size; aB++)
			if (eq >= this.r4[aB].eq && es >= this.r4[aB].es && eq <= this.r4[aB].eq + this.r4[aB].i && es <= this.r4[aB].es + this.r4[aB].j) return aB;
		return -1
	}
}

function cO() {
	var aF7, aF8, a6r, aF9, aFA, aFB, aFC, aFD, aFE, a6q, aFF, aFG, aFH, aFI = 1;

	function aFK(aFL) {
		!aFL && 1 === aFH && aFI ? (aFI = 0, az.y.close(aFH, 3280)) : aFH = (aFH + 1) % az.y.aFM, aFG = be.eI, az.y.aFN(aFH, 4) && az.aDz.aFO(aFH)
	}

	function aFP() {
		if (0 !== aFH) return 1 === aFH && __fx.customLobby.isActive() ? (o.a18(3249), __fx.customLobby.setActive(!1)) : void aFK();
		o.a18(3249)
	}

	function aFU(es, a8w, ta) {
		var n4 = Math.floor((h.i - aF9) / 2) + aFC,
			nH = n4 + Math.floor(ta * (aF9 - 2 * aFC));
		uc.lineWidth = a8w, uc.beginPath(), uc.moveTo(n4, es), uc.lineTo(nH, es), uc.lineTo(Math.floor(n4 - aFC + ta * aF9), es + a6r), uc.lineTo(n4 - aFC, es + a6r), uc.closePath()
	}
	this.aFJ = 1, this.dZ = function() {
		aa.setState(6), aF7 = 0, aF8 = 1, aFD = "rgba(0,220,120,0.4)", aFE = "rgba(0,0,0,0.8)", this.resize(), be.dh = !0, aFI = 1, aFH = this.aFJ - 1, aFK(1)
	}, this.resize = function() {
		aF9 = Math.floor((a0.a1.ht() ? .5 : .25) * h.hu), aFA = aF9 + 12, a6r = Math.floor(.125 * aF9), aFC = 3 * a6r, aFB = Math.floor(.225 * aF9), aFF = Math.floor(.3 * a6r), a6q = b9.qV.sJ(0, aFF)
	}, this.a14 = function(a0v) {
		a0v === aFH && aFP()
	}, this.gw = function(eq, es) {
		var n4 = Math.floor((h.i - aFA) / 2),
			n5 = Math.floor(.5 * (h.j - bb.gap - a6r - aFB)) + a6r + bb.gap;
		return n4 < eq && eq < n4 + aFA && n5 < es && es < n5 + aFB && (this.a1y(), aY.a1J(eq, es, !1), !0)
	}, this.a1y = function() {
		az.y.a19(3260), __fx.customLobby.setActive(false), t.y.z()
	}, this.j0 = function() {
		6 === aa.a10() && (be.eI > aFG + 12e3 && aFP(), 100 < (aF7 += .07 * aF8 * (aF7 < 16 ? 5 + aF7 : 84 < aF7 ? 105 - aF7 : 17)) ? (aF7 = 100, aF8 = -1) : aF7 < 0 && (aF7 = 0, aF8 = 1), aFD = "rgba(0," + Math.floor(190 - 1.9 * aF7) + "," +
			Math.floor(120 - 1.2 * aF7) + "," + (.4 + .004 * aF7) + ")", aFE = "rgba(0," + Math.floor(1.9 * aF7) + "," + Math.floor(1.2 * aF7) + "," + (.8 - .004 * aF7) + ")", be.dh = !0)
	}, this.ub = function() {
		var eq = Math.floor((h.i - aFA) / 2),
			es = Math.floor(.5 * (h.j - bb.gap - a6r - aFB));
		! function(title, es, a8w, ta) {
			uc.fillStyle = aFE, aFU(es, a8w, 1), uc.fill(), uc.fillStyle = aFD, aFU(es, a8w, ta), uc.fill(), uc.strokeStyle = bA.ne, aFU(es, a8w, 1), uc.stroke(),
				function(aFW, es) {
					b9.qV.textAlign(uc, 1), b9.qV.textBaseline(uc, 1), uc.font = a6q, uc.fillStyle = bA.ne, uc.fillText(aFW, Math.floor(.5 * h.i), Math.floor(es + .58 * a6r))
				}(title, es)
		}(L(132), es, 3, aF7 / 100),
		function(eq, es, i, j, a6g) {
			uc.fillStyle = bA.nZ, uc.fillRect(eq, es, i, j), uc.lineWidth = 3, uc.strokeStyle = bA.ne, uc.strokeRect(eq, es, i, j);
			var ej = Math.floor(.3 * j);
			b9.qV.textAlign(uc, 1), b9.qV.textBaseline(uc, 1), uc.font = b9.qV.sJ(0, ej), uc.fillStyle = bA.ne, uc.fillText(a6g, Math.floor(eq + i / 2), Math.floor(es + j / 2 + .1 * ej))
		}(eq, es + a6r + bb.gap, aFA, aFB, L(36))
	}
}

function cP() {
	var a0r = 0;
	this.dZ = function() {
		aY.dZ(), a0r = 0
	}, this.setState = function(aFX) {
		a0r = aFX
	}, this.a10 = function() {
		return a0r
	}, this.aFY = function() {
		this.setState(8), t.x()
	}, this.a1r = function(e) {
		if (!bR.wN) return !1;
		if (!(be.eI < 400)) {
			if ("Enter" === e.key || "Escape" === e.key) {
				if (this.aFZ()) return !0;
				if ("Enter" === e.key) {
					if (0 === a0r) return !0;
					if (7 === a0r) return !0
				}
			}
			return !1
		}
	}, this.aFa = function() {
		bY.resize()
	}, this.aFZ = function() {
		return !!bY.rm()
	}, this.gw = function(eq, es) {
		!bR.wN || bY.gw(eq, es) || 6 === a0r && aZ.gw(eq, es) || bX.gw(eq, es) || aT.gw(eq, es)
	}, this.a1J = function(eq, es) {
		!aT.a97 && aY.a1J(eq, es, !0) || aT.a1J(eq, es)
	}, this.click = function(eq, es) {
		aT.a1i()
	}, this.a1M = function(eq, es, deltaY) {}, this.aFb = function() {
		aY.a9E(), be.dh = !0
	}, this.ub = function() {
		8 !== a0r && 10 !== a0r && (uc.imageSmoothingEnabled = !0, this.xu(), 0 !== a0r && (aT.ub(), aO.ub(), this.aFc(), bX.ub()), 0 !== a0r && 6 === a0r && aZ.ub(), bY.ub(), t.ub())
	}, this.xu = function() {
		var aFe, aFd;
		if (__fx.makeMainMenuTransparent) uc.clearRect(0, 0, h.i, h.j);
		else bR.wN ? (aFd = h.i / bR.eu, aFe = h.j / bR.ev, uc.setTransform(aFd = aFe < aFd ? aFd : aFe, 0, 0, aFd, Math.floor((h.i - aFd * bR.eu) / 2), Math.floor((h.j - aFd * bR.ev) / 2)), uc.drawImage(bR.wP, 0, 0), uc.setTransform(1, 0, 0, 1,
			0, 0), uc.fillStyle = bA.nZ) : uc.fillStyle = bA.nV, uc.fillRect(0, 0, h.i, h.j)
	}, this.aFc = function() {
		var es = Math.floor(.3 * h.j),
			canvas = ab.aFf("territorial.io"),
			hl = (hl = 1.75 * h.j / canvas.width) * canvas.width < .98 * h.i ? .98 * h.i / canvas.width : hl,
			eq = (uc.globalAlpha = .15, uc.imageSmoothingEnabled = !1, Math.floor(.5 * (h.i - hl * canvas.width))),
			eq = Math.floor(eq / hl),
			es = Math.floor(es - .5 * canvas.height * hl),
			es = Math.floor(es / hl);
		uc.setTransform(hl, 0, 0, hl, eq, es), uc.drawImage(canvas, eq, es), uc.setTransform(1, 0, 0, 1, 0, 0), uc.globalAlpha = 1, uc.imageSmoothingEnabled = !0
	}
}

function co() {
	this.aCv = 0;
	var aFh, aFi, aFj, aFk, aFl, aFm = this.aFg = 0;

	function aFp() {
		aFk = aFl = null, aFm = 0
	}
	this.dZ = function(ra, aCs, aCt) {
		t.x(), bm.u5(), aa.setState(10), aFk = ra, aFl = aCs, aFm = aCt, this.aCv = ra.aCv, this.aFg = aCt, aFh = 0, aFi = be.eI + 4500, az.y.a15 = ra.a15, az.y.a0y === ra.a15 ? (console.log("direct pass"), aFj = 0) : (console.log(
			"delayed pass"), az.y.close(az.y.a0y, 3247), aFj = 2, az.y.aFN(ra.a15, 5) && az.oz.aFn()), uc.imageSmoothingEnabled = !0, aa.xu();
		aCs = ab.aFf("loading"), aCt = (a0.a1.ht() ? .396 : .25) * h.hu / aCs.width;
		uc.setTransform(aCt, 0, 0, aCt, Math.floor((h.i - aCt * aCs.width) / 2), Math.floor((h.j - aCt * aCs.height) / 2)), uc.imageSmoothingEnabled = !1, uc.drawImage(aCs, 0, 0), uc.setTransform(1, 0, 0, 1, 0, 0)
	}, this.mO = function() {
		0 < aFj && be.eI > aFi && (aFj--, aFi += 4500, 0 === be.aFq) && 0 === be.k4() && az.y.aFN(az.y.a15, 5)
	}, this.aFr = function() {
		return 10 === aa.a10() && (bm.aCJ.aCw(aFk, aFl, aFm), aFp(), !0)
	}, this.aFs = function() {
		10 === aa.a10() && 2 <= ++aFh && (bm.aCJ.aCw(aFk, aFl, aFm), aFp())
	}
}

function cQ() {
	var aFu, canvas, a09, aFv;

	function aG1(e4, name, aG2, qC) {
		a09[e4] = name, canvas[e4] = new Image, canvas[e4].onload = function() {
			! function(e4, aG2) {
				var a3d, a3e = null;
				7 === aG2 ? a3d = b9.a24.a3g : 8 === aG2 ? (a3d = b9.a24.a3j, a3e = .1) : 3 === aG2 ? (a3d = b9.a24.a3h, a3e = .06) : 5 === aG2 ? a3d = b9.a24.a3k : 6 === aG2 ? a3d = b9.a24.a3f : 4 === aG2 && (a3d = b9.a24.a3l);
				canvas[e4] = b9.a24.a3c(canvas[e4], a3d, a3e)
			}(e4, aG2), aG4()
		}, canvas[e4].onerror = function(e) {
			console.error("Error loading image at index", e4, "Error:", e), aG4()
		}, canvas[e4].src = "data:image/png;base64," + qC
	}

	function aG4() {
		aFu--, aFy()
	}

	function aFy() {
		0 === aFu && (aFu = -1, aG0(), be.dh = !0, canvas[7] = aFv, canvas[8] = aFv, canvas[9] = aFv, canvas[10] = aFv, 5 === t.sj) && t.a4o().aG6.resize()
	}

	function aG0() {
		aL.a50(), bX.aCA([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== a0.id, 1 !== a0.id, !0, !0, !0]), aj.wS = new yJ, aj.wS.dZ(), av.da()
	}
	this.dZ = function() {
		if (void 0 === canvas) {
			aFu = 23, canvas = new Array(aFu), a09 = new Array(aFu), (aFv = document.createElement("canvas")).width = 1;
			for (var aB = aFu - (aFv.height = 1); 0 <= aB; aB--) canvas[aB] = aFv;
			aG0(), aG1(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aG1(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aG1(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aG1(3, "orders", 6,
					"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"
					), aG1(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3MC1hYTQzNmJhMTIyNWQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3NmYxZWQyOC05MTFlLWJiNDItYjZjOC05N2EyYmU1ZmEzNzkiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NmYxZWQyOC05MTFlLWJiNDItYjZjOC05N2EyYmU1ZmEzNzkiIHN0RXZ0OndoZW49IjIwMjItMTItMjNUMTQ6MDQ6NDcrMDM6MzAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NWZhZDQxNzQtNzljYi01MDQ4LWFiMjItODU4ZjBhMTg1M2UxIiBzdEV2dDp3aGVuPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+jNxzTQAAIABJREFUeF7snXecE0X4/5/ZknbJ3SXXC/2O3qWXoyO9VykCgkgHURRE6dKUjiKC0qX3Lr33zgHXe02vm0125/fH5nK5gALq78v39yPvV+CVnZmd5LKffWbmmWdmEWDw4eN/GMo7wYeP//v4ZOfjHeCTnY93gE92Pt4BPtn5eAf4ZOfjHeCTnY93gE92Pt4BPtn5eAf4ZOfjHeCTnY93gE92Pt4BPtn5eAf4ZOfjHeCTnY93gE92Pt4BPtn5eAf4ZOfjHeCTnY93gE92Pt4BPtn5eAf4ZOfjHeCTnY93gE92Pt4BPtn5eAf4ZOfjHeCTnY93gE92/5APR8Kf64D3/X7/COTbeucf0PhbqHYbNCwc/BMw6Z3r47X47ta3pu7PEPswoEuH0lcfFcQeyE/o413AxxuAfa+3e43pp8y5NWLjzLLZtz/Ztapxv3beBXyv17581u7taPcZzJ/zuS7/AQAAJpo2rpVXYMyd8fTy994lffwNPtm9BRItSOOBDmwKefcAAAMvC/lwQA/bmckJAA7v0j7+Gp/s3hR5DsT1gZVLP+I5pjgVEaSy/bZ10uoX1mW2LE728ff4ZPdGBKRBpQ6wecdgOvQjryyCFHHydnXG/ur/Kfd0kFemj1fjk90bUakD3Ly0Um8vy3NWgpKVzEQAePm8XotXHyctlkeflsz08Sp8sns9wU9h4sjqOqY04L/swNGyUl+O7/HlnO0+2b0JPtm9njrDofXGgYA57wwPEKJoiixXKghA453n4yV8sns9HAekKMA79SV4jId/1Go57PXO8PESPtm9BtoCNaspxfJY3mnyznsJjL1TfLwSn+xeg1QDcj8pwBsJCiHkneTjVfhk9xowgjfRksOWBwDYZ+7eDJ/sXoM5EtIyXzNKQAT9hubQh4BPdq8Bk5CXb7dq70r8KwK8wu4hgrKobwnvJWK6ZKaPV+OT3evRdQRku0cGN+RYvVcWQoRV+5C1ZAAAgdB3C3dCK68iPl6BT3avptIuIFmIHwIAkNseHj0zViVPy0MaYcx7FsMcyxifI0QBgERK2z2yavwGTz72BYG+Gp/sStBmLCjiiw+rbAJ9JTj7E/zy3ZX1y0pzTgtBSt25CJBV91DQHAAsWXUopzVuOxYCXgDHAQBU2AIAQFFwfAdYQ93n+fDJrgjCCX07E1/N+L5ixWruRJPJkJmRurLzfAbb7j5KjylzTFW2n8dJyGHLEd5JJeKEZE1ENjSp12TIT2MCApTuUa1OpzN1/VgShg8dLj7zPce3lgIAoNZG2Bj7ffkyFb0zikhMfjF7xjefDG1St0YZVfkh6sRfL569/2G3NqydFQpM/HrrwqXLIiNKEQRFkFKbIR4hCghSLC+PeQfmWQDYsvmnyd+dK1Hv+4rP2gEA+K+EMgfKe6d6ULFC5fYd437bfqn+D6+QplQqqlmrQaVK1S0Wxlx4lTEkkLRCCN825ZyhpKGqMv2crHb4iAlXO53bc9z79PcQn+ygW3foObwnSf3dT4EBT54y5/HD/nceJLUtK/LKTUrOnf7ddwZtrjH7CCKlJC0vcuMhgpbzTmv+s+UB0Z2xODQ3w+vU95S/+63fBxAP4eKgHr0HF3XFEO+0WgqvFk1NEIrwVoAIwLxOp1m/cXuXju3i2pbQToC/rP/IrTt/VSKEkMeAwxNSpDQXXON5+4bf17S6NT63gXeB9433XXaxe6FuvcaC5hCijLlnOFYHiHAX0GXsB8DK0r0AwGQyliqlYq3Z7lwAeJ6QVb6sFHmcwjAMy7p8KRjjgIBA4T1BiKOUuuBL4JPd+y67skeg12whFB0b885xDgMggiAIwMDxHEEQACQAaFO3B8eM5DnbrLnLOMM5glIIp0vF9KzFxz7qU8ddocGg9wwIQAgZDHqlMojnOQDQFiardgOMcOe/p7zvsnNDiUM4VgcADgdrNpsRQgghiqIVCgXP8wSlKEz8NTh2pEols7JSo8kqnGVhWIcT+nRrotYYAcDhcLwchIIQslotEokEADiOQwVe+e8jPtm5yI9fSomD9DotIgiSdM0tcJxTr9fxPK9UqkjaX5e2KzC6+5gvNq/78WMAIAg0Y962jm0qCJozm008X2IOww3L2kUiEUEUN8TvOe+77FCR2xIRIrudQa9SBkEQLMvSNA2A9NlHU1IZEe363TgORg5tazRaESI4jnObOoSQVxCUcEhRJI70TH5Ped9lp64BKckJlavWIyi502oREkmSsFjthWqTQi4JDfG3s06LxaxUqjDGmHcIE19uWNYJAFarRdAcRRE2xrlx24Wh/ZsG+MscjhKlZVIxM8wz4T3lfZfd/amwYeDyZSv/gKKQdAKhKTMP5o2BJ6MAAPq1hzLRQYP6NDWbjHKFPwD5ycjOdx4kAwDH8f4KCcOwAGC3MwRBEATx/aqDR34CUzdYB6c6NYNflw8uLDS6Py4xOSepqvvo/eV9lx1PQUG+PiX5hT8CjnMCQF6hwdoTnhQNNnefhvYNNSMHiyxWRmgoK1YIf/r8xisddNduJe44WnxY0BvmLj04ZlhrjLHQsbtyM1HTq7jAe8v7LjsAuPQbLJ08f95XHSiScnJOACBc41QXdzZDwpW8UpEqjuNIkrQZE0mSgJJNLUEQykDZketPPROfDYBWT6QAwPMcQRAkgW7cee5Z4L3FJzvQx8DNT9VWxiFXKHR6Hc9j1r9EAW1lWNz/yh+/fKTWmAIDlSXyipCI6Wlz9hw75Z0uoFIFA+CfN53ed9Y76/3EJzsAgKRuMLPjro2LR3Ocf0GhQfLS2oncObD7wK12rap7pfv5SYQ3O/Zd37PQe/126/HgFykiSVIiphetOvhc/FK97ys+2bk4eAKM9X/ZunZ4VLhS8at3bnIPOL0wqVvH4tkIAMgv0JctHSK8N1uZQH/QemYDODXw0fjGkRER3y7845lMc3pdyez3GJ/sikmfC8Mn/P7FuHa1q0cXLM26/WWJXIkYNDpTWGjxWCK3QB8e5mpzHz3V6l6KnCofodAb2S9mry5sA9e/8859n/HJrpjkjpDcEZ6f/bNhEpRNBi/Z5XYCnd4a5hGbXlhoKB0dJLynRYBLeprLnYACtaln0OHsiyXSfYBPdi+T0QYy2gBlA1k+WMMAACgbBD8GWQHcyk4hCFFOnlarM1NOG2tUSyW04BA2tYXwO4D44ugSXSzs+bO4Wh+e+ILaXwPioXd7kMlkAIAx5jgeEQgVLZjFGLtnvQCA5/k/9jOcdxioD2981u7vCH4MdUfCngs3DBo1AGDhHnVNtrrvVyFZ+IfJfuNeNMi9MaMo08er8Mnu71AlAEWCJWObttDglpdLfIBL6A+70jWFuYy86Hwff4FPdn9HQm+QGeCTiT+tX/aZd96rsLMOKgIeTPRO9+GFr2/3euIWg/SA6z3LuiLeXXEDBPAcYAxiMQAAQnDyuqukj78F/3/ymjJnyqxZs2w2W0pKyqJFi8YvG085Kc8CcpO80eVGU+dNlZvkL5/+V6/AROjaDfq1VZmS5rarD9a8Y9vn+mXe/CTt6tD0ax8fXlHGnHsc267eOth1dL+grm0h5CGQdu9K/uolN8knLJzwyq+k1CoXLFnw5MkTnU537dq1Lxd8KWWkL9fw/+jr/41GVmqTBmmCnLQzLyzPOw8AAKYsnrLsu2XC+4CAgOHDhz9+/Fg1VzV3zlwhceKkiVWqVBk0aJCovqjW7lpPnjxZNXcVI/Z4wsRLEE5o2wQqV42pHRfbooHq7u1rrB14HlO0H0GQDp5FCDieZ+0WNt9qMtu/Gt9REaBasOLk4wcJj3pA4ev8w9OmTytXptxnX39mMBhK/1Y6Ly/v16m/qoPUABCkCVp0YNHIL0cKJStUqNCP7ldqfakpfadw4d5TcAAQrA6WMBIAyIrO8s77X8pLSvxf9RqxeMSmTZsEPwXGeN++fZMmTfIqM3PmTHcBjLHValWr1dnZ2c+fP++zrQ9gmDp1qmcBtVp9//79y5cvk07y5U+M3Q/dmsMH5eDnpZ8mX+ybcnlI6pWhCef6fTk86NHlH3Tp+y5ubZRyeXDK5SEpl4ckXxx0aWcnTequptUg6Xyv7FujUi4PfX6qHbYdWLe4b/t6ELvfu37hNWHCBK+vdO/evXPnzpVNLwsYEhISPHMNBkN+fv7t27ePHDniVU/jm40XLVrkLrlt27aJEye+/HH/217/q61dgCFg1bhVfn5+wmFBQUGbNm2qVauWczpnT/s97mKlS5d2vwcAu90OAE6n02w2t9S33At7f/jhB88CAKBUKp1O56Rpk5b96LKRABBzGOqsBkSgrxesqV1JlPBgHyJCJBLZi/j7YRExF69ovv6uDCJo4BiF1Mk6CRHNWyzOnOSr9dt+xTkgW+2fcXFbu27DMQ5LvXuwfVNZr76Hdm5bfXThGfVguOcxzvho/UerVq0qPgbgeV74K1pvap3ePD22VaxnLkJICNerUqVK86vNLze9LKR3OdWle2b3kV+5jCIANGvWrF69eiHzQ76d+a078X8h/3tlF5kXufD0Qr+hLs0JOJ1OjPGnxKeibaLtg7cDwLDNw9q0aeNVxr2moUWLFjO+mQELPPMBAJRKZW5ubqVKlQJ1gUa5vvUkYC/D8lVL6+yrn/boN4AbaQkgVYTfvXG+XuspDTr0/fPk7v4D2tO0yM4yhuAl9vCqoaGhyclJSXmZdw2xXe25nbvWs2NllxE7bKbCm8enBQZFVKlR35y9t0vLsF4dxugcFW8tu3Tk0IHcjlDQWtkvzHP/HgAAgiAwxhzHdarW6crhK1wc515GBAAsy/I8jxDS6/UNDzZ0y24yNbnNyBJ/u0KhMBqN3bt3Z+ex876d55n1v4p3JrvPVnxW3lE+PDw8MzPTjMxHuxx9XOOxZ4Fea3sNnTfUM0UAYxwcHBxzNcZ9SNO0Wq1WqVQAoNVqBdug0+k8T3ELEWMMAAaDgabppk2bfrZ8VNqtFdVr1Jp6bk7uiz9SH94TNg4ryM0syM9t3WclRZO807p18+bRY8YRBLdgze3lPy4RqgoPjwgODilbOvLrJVtWzF7cvk2bVWvKlilbrvOwbZh3XDr4RbXajQiSYu1mOXrQo3uXXn0/Hj9mWLUXMaoRKpZlRSLXbIbJZAIAQVhVq1Y9deqUTqcTiURyudzhcJjNZvfXBijelTsqJ8rrfgMAjDFBEAzDNG3Q1CsLACYvmBwpioyMjMzJyclz5q34agVPvHqp2/9t3o3svpz25YIFC2iaBoCCggKJRNL0ctMh0UN0ymKtlA0sa7VahVkpAGAYRjAAwqIsZVG4JUJIWLIl6Ey4KizLOp1OABD+12q1AQEBAGA0GoXrx7IsAPA8T2HRhs1H7JbC3Oc7ABEkKdYU5mamJcbU7FGpYTOWtY0YOhAQqAugXbc+P6w8t3RxCctJkiTGeOxnIwhxVlSUbNa3kwgC/bx+t0gsjuu57Mbx2ZhnqtRsyPOcIfcC5h2rVq958NwKACaTyd/fXzBgwnc2Go1Q9P0RQg6Hw/POyc7OBiieiwMAZEdGo9HfvzgkVVjey3EcAAjLct1E5kYO/HGgu7NhNBqzsrLEM8V7h+9NjE30LPk/wzuQ3aiVo5YscRkMAJDJZHa7vVy5cquPrz4oObi3t+txIn5+fjabzWw20zTtdDqFzo1YLNbr9TRNlytXTii26eNNZWaXmTlz5qVLlzZt2qRQKPr16xca6goUOX36NKNiAMBgMAgpAECSpHCYmJjYo3FWQeJ2ACBISl2Yl5rwuPOwrWVqqoPKVTu4bcv2HUviP4Hng2HW5Or79z8YN/5ziirenVi4xiqVKi8vb8fuh5UqVrmecff5EPzRgr78fZj0+cTG7WfIAyIeXP7Jpk8sU6EqELQh+xSyUKy4IkLIU2c2m03Q3+PHj3FzHBgYqNfr/fz8Ll++bDKZDh8+HBcXFx4eHhMTc+yTY8KnR2dEO/wdhYWFgi0Xfh+WZe12u9eC3DKpZXYV7Gr4Q0N3ilwuDwkJ6d69e7PEZtMt0x/VfuRR/H+C/2nZlUkv01zV3DNF+N1DQ0Pr169/c81N6O1KT0lJUSgUJpOJ53nhd6Rp+vnz58I659u3b0M3V0lNsGbkyJHz58/fsmWLw+HYuXPngQMHJkyY4HQ691X7LYqtLhhIoTBN08+ePaMoCgBy8zQ1qmMAIAgiIf6hKqJWlxEzOIdRq1F361g9qBkcOQ4AEH0bqlapw9iteXl5brlD0R4Awve/didnzaIlXXu1SeoKSV1BqobAgavMJl2/gSNianQ3aFPP7fu6Wt1WoeHRH8Rahi86sGd7c8GYkSRptVpzcnIEW25j+A1DNjTb3LRly1abN29u0qRJ27Zte/XqxTDMli1bTp8+/WzFM+HTUyumisViYfzkJi8vT/itPK3dsN3DGn5VrDkBsViMMS5Tpky3nd3+/5ddveP1+g7v65lis9mEK2cymVq3bv30/NNzrc4BwPbJ26v9Ua1Lly5CsZycHJvNJjRqDofDEOqyXqM3jRvfbnyl8ZWEQ5IkO3XqVL169Rs3brx48WJ+zS4H9m1d83hthw4fugsImisoKGhU7raIIhLi76vzUnqOOWozF146d2DFjytubgatx1KbUj9Av22fzVlwpGe/8MLCQqFPxrIsQRAEQWRmZgoVshazSiwDsAKALRj2/Amnn23d23MrQsG//r6+5+i9BEmf2zOhYbMOqyerv/5mYZ+e7QCAIAiEkKA5u91+6cTiY/T4nzeMe/Z8yqKF893fwWKx9OzZs2HDhpqpmm0/bgMATajmxvkbderUAQChhrS0NPe2BMePH4cipYl5setdETqdTujhMAwTGOjaGeh/kv8rsuuzu0/FvIr+Nn+McR7k/TL5F0bicsyWSihF07Rerxc6W8IIAACysrKEAizt2h8zJzLnlv5WE20Ti8WCMeZ5Xrg2BEHsP3F49czVtBnKHyc+rTWmUiWX5oRchJBIJKpVq5Zax6xZOVKp8uvdocytp/E1alSnKEpoktLTs27dutW7fsq9Gy8adfxOHhCFnabPRo22kpoTN9yVAQAgDNIXoM3OiS0flpGRERwcLPQXBaOSk5MjaI7jMY/x198s3AKT3OcaqsDesxBzWD129NBvvp0fXapMq94rzu+dWKpc1bFdqL2XZXHNmwpfCWOs1Wrv3L62cN60oYOHtew0ctinJWZ2EUI0TTMM065Wu4zVp68PLwDkPHThQOnSpaxWG8/zHCdsFAQkSZ4/f/6Hr4p9Rs2bN9doNGKxWHBFCVbWaDQKyqtevXiBCO2gh24YGuWIktlkGGMNrVkzfs3fO9X/Gf+97L76+qtFixYJ700mk06na3a02dOnT2fPmg0At7rcysnJkclkWm3xwgOTySR4PUiSNMmLH+3106SfnH+I2tKtAgMkUVHRWq2W5/HG9cuiFQkzxlVFCAWW7lu3X/FWwwCg1+sxxiqVKicnp3aNmJG99rMOnnMYWlY4mpx6OylHgTF2cmTHugkG8kh47MpydUL85IqE5y++/XHiwdOeNbkofR4aNK6MEPqoR+z4mRuXLJrNsqxEImFZNjU1VZAgQmjc4Eo2xlm2bEylyfBiRYkakrpBUjfz9YWTqx6FVWt/btl7uZ9/5Pm9EztV0xHW5xeuKzGAUsHGVcup1bsVLZLt2Ll9zopbYZ5xzABCT4Mkyfr169/fMOwibjdj2iSCuLBh1XMjV7VP7+4REREEQTx4GH/FcO3XcasdouJnkF67dq1q1ap2u92zRc7OzhZumKdPn8KHAABSq/RG0o2aY2oKBcxms9PprL6z+lcdvsoPy3ef+J/wX8pO5BCNnTZ20XKX5gBAKpUCQGRkZNmyZWfDbADQlNLcv3+/aVPX8B5jrNPp9Ho9QRASieTevXsPuz50nx4UDycVK/QrV5ABjSSB9ds0KxOskm3+7XNtTr5gI7+Yf95ztAsAwuAjMzOTJMnw8PCE9Jwopc5SeBUIeYUIU4UIEwCwrD3+0f3OI7YRiFAGhXw5+ZOMzKSDf7HWsNosmLp5NgBcPLq2epT/0aPHSJI4ceIExpiiqPbt29eoUcNms+pStpQuPZ3n+drx8MK7DgCA1OmQOh1sdcecvX5Zk53Z8MNvLuz/nEBPOjVswTmdAGB3iOwF10haIQ9tShCg1+vdzZ/QD0EIcRxnsVjKlyudl6/98qu5ACCV+kn8YPfBp7v3HiUISpO87uEQS/RZSO1Y/NFWwoZK7smCEBI0R9O01epaFdzr0141t7k0BwAkSdrt9mrVqn287OMli4uHgP8J/6XsAMOYMWO80ux2e1hYmE6n+2bmNwvmL3hR8cWuU7tq1qxJUZTgEzGZTELrYDabzjc5LbISlXfwsX9AYQFQNIwaPdjRHYaMmwLGHL3BjjHocgsEzQkQBFFYWCiRSBBCVqtVaIiF/wHAmHMq0OkE5DrEGBsN2qRn97uO3GM15t29c3nFspUp4+CZ95PYXVA28JOI5HJ/O+vAvL1WmbRzCfGNGjfbsGEDAHAcd+HChRUrVsSUlkRyT+tSYpYxZGVB5A3IaeRdlcC5e1C3TPOxkz/+5JOPOwz+LeXJscf3jtdr3MpqEWw85hxGXfo+RFQlCEKj0UilUpZlBZ+I3W53dRI84oZsNovNBu2aRffrXAFj/sZNeXp6sjnftGXaIaUS0oYCAGxpvbblwxZRUVFSqZRhGADQaDQURfE8n5eXd632NaGqNWvWuCr1QCwWd+/eXfeb7tcRLy2n+xf8l7KbtWZW9GfRnilGo1G4RxFCbpu0Y8KOmotrtm3b1rMkwzDff9Xpp6VzzVc7NOgfx/dxGgzFj7zRZ2UhRFrUd3hO6Gcgp13Dc7bmdaIzMzNVKpXghyNJEiGUnJws6Pjp06dx5ewmKw0ACCG9Tv3s0Y0PWo5r02+EWE4P6DHy2Xj9i6vuD3kFDefDiJGf2WxWqTwkL/Oe3X9gv/6DY2MrCLkmk+mDDz7w9/c3m4zMs/3a/GfygKglP3477eS8v5IdANxPhxmPN+9pu3nX3n0R5RqXrtTm7vnlTkYdU7mmMCAgKFmo0smyLELIZrMJZ1kslsLCQgBQKBSJKbmOgrMWJyHyKw1Fj2dBRGsAqFylZuUqNQCgd58hfn5ymhapC/NTUxNXrB1ZqlK/UaNGCJ4jiqL8/f03bdp0ocuFa42vAUCFFxUUMa69IgUEK4gxVigUqgSVZ9a/57+UnYgU2Ww2m82mVCrtdrvwvWma1mq1NE17jphmTvx6/WW627GRZcqW5TjOxrBjB1fbtv03AABAWnUOBrBpHzjtakFnFEmYbehpup9KwUaoeH+Zk6apjHzbhZObsg2R48eOstvtCCGdTmc0GgXNSaXSC5fu1gmlAQDz/P07F2s2GdVxyCjMcynJCbO/6nPsvPdar5eJvks0Gt0CY/z8zjaRLNomb+HWnADHcZGRkXl5RIYtNv7mpkYdZjVu2tpv1mLqa9ZZwl9bgsIacPoWDBjem3gGew4crtHkUwB87dh3Eok0tkotnuf6xWVt/G3z8GFDAAAhlJGR4T73zNlLWLNr/PTEhd/2l0rVOhPJc47nWYrK2j0ERUlFLABGBA0Y46iOGDtpsX9sxaprVy4mScTYHxw8l0BRFALYa/v29lcOu7/LbPI8r9frAUCpVDIMIxhFKDKxsbEl5oj/Pf+l7FiOFfoQnu71nJwcYcSk17sSVc+g7hCoV7/C7LldbTar0F5gAIKUOpg8J6u3ae9D0RoZhEipiNtzJapOg659hjdhGGbfvn0PHj5+cX2Jwl+19udfr93NX/rDjwP69xP6y0L7K5FIfl6//eMPCwCAJKnbN051GradsWgokszKzVqwfMbRI0L1r8HO8ARBcBxnKEzJsn7Qu08zz1zPyd8H+c3bitYBQnqdZvSYIUnnNqZ08iz7Ck79DvIc6NCu29mrf1r0hubdl9w8NS854XHFKrUdDlYpLUhOTqZp2rNHIZVKGtakP+q8kCSp3t17RFdp26RFvw8//LBzs5CMjPSzZ892rHELCCyYQEP2cQDA2Okf3paWhvG8g6bwyH6VAAHGkDgj1q/dU5kMLv0EmipAUSKJRMIwjOe1AwCCICiKSkz8j2cy/kvZ3Ym44+fnJ8whCpAk6e6xmkXWSgdAMRWGDm834c4iXXqKkEWQYs5hdjD55vxLBCUDQG7N8TwOD0ZzNkW2ahXXrFlTocIOHTrUqFFjl1g+d0o9k9nauG4oSUk3bzvQtVOLkJAQAEhMTLx4+XqfOIPSz87amTtXT/Qac4ixaJRhEd9/N/PmjfOHL7m+3mtZteY3juMwxnlpl7TMKJVKZbfbxWIxePiKXe0g5ihaZLcZaJGsVJny1WbBa2UHAOZIMI+Flo3anTl/hGGYhh/OvHpkxvOn9ypWrd3hg5ztZ/bUrd82NCxCIpE4nc7EpNTLly7MndrMyWGOc87+YUdQRJ3KlSsDAMY4JCSkT58+q9eqJ3RLQwRtsbrMFUKUKf8C7zSL/StS4iBpYE3eaQJAc+bPCgqN2L97c8D0nefGmhlJMo4oHnMIJCUlURRlt9tTq6d6Zf1L/klQe7f13co/K2/zt6U1TjvVoXgEKHKIps6a+sUXX6jVagAQ2lYAwBhLJJIJg2qcv3NNk5lBkBQAIIImKKkh87jDni/MvmOMVYFygiTW/X6GIPDR04kIQbPuS2Z+PVG40gKFhYVCL2fh4tU/Tq9hKbwGiEAIWAeRkicHgIaV1HqLSCyW3L99OTC0Uq1mY+w249rV6y5eOHfxBrzVakK7+pTFYpLIVIc3DDD5D+vR/0uEkHvWBAAQQqmpqQCweev+7tX2ckRg/bbT/BT+4z4dvmFvdom6/pYPm0Cnjm0nTvlWW5jnFxC576cuDeO6IESqFPakHIXaKJaJnZVLGS0MxbFaWVB9v+AmuebSlT0clhqNBiGkVqsPHjpxYd9rT6guAAAgAElEQVRkhoWWzUrL/SRNGlSuWjFao3O7pRDvMEkCqvqFNsKcy58SGKj8fePPDzKrjvvsI+FeUqvVglccIbRr1y6vkayYFXf7qVtEagRJkk+aP/mz51uvB3472Q3ZNqROYZ0pU6YAAMMwiYmJew/snfvdXM8y02dM79u3r9tdjjHOzc099eelNQs66Vy+OsyYkllTkpPVC0+OE9EULaJWrz/+8Gm23Q7PloDdH7SVwSmF+/fv1q5Tt7h2gMLCQoIgUlNTzWZTaXIDKhqlesJj/sWTewpl2VrNx3FOxmoxjfpp+IlXDNT+jlq/wKXOBziOsxiy85KPPMyp07zdyKAg1zYAIEypJSQInojrF7b2bKZ7eO9+406zMMZbNv30+XfnX9t39KTjYHC+gJ27dyOCsFnUV4/NaRzX2eEoMfflRmdg63be6Zmi0WgAIC0tzWKxtIhrAQCh9wEB1J8ITgfUrRURWz6yc/s6ZktRhYiQ+FeSKWvxnA0ACIJ0OCyPUsOVKpX72gFAQkLC1JZTcyNy3SmjfhlVy1lr3LhxAOBwOLRa7YoVKxYtLPaavQlvIbvBWwYvabckIiJCONTr9RzHxcfHHz19dMm84ruB4Il5i+aVK1cuJiZGJBKdPHW6agVxi4bRHIcBEbzDaC64yjutgoniODzz+4MAViPLX9wOAGBxVe/Cxtg8pxetVqvNZuN5PiMjw8/PT2WZa7F59xM4p/PpwxtB4VVrNR/jdDA8zw0b1v/oRa9Sr6fTUNg2by8A6AsTSWeClGJ+2Fd5xteThIE5QRDJycmCMwwhBAU/qxTs/ZvnW/ZeDgDKiKig1MbaYmP0RkTegMGbKs3/frXZZOQ49sqh6WERZSJKlfV0uQnsulj662/muw8xxoL7PS0tjabpPXv2zJ9XnOuXB4Ch5XjgC6BMhGLE4Dahwf48jwHzGHOkKNA/sj1gHmM4cSE9PYetVKli6dKlxGLxqVOn9rTcc7v+bXdVJE/qLDqFwjXm5Xleq9Xm5OTsPLRz4bcL3cVey1vITq1Re97rBoPB6XQmJycHBgZ2ha4JFRM8ykLdZdD4TvSPK3+x2WwYAyJEDkuWWX0dAHge6w2W/EL9hq3nTVXgzE+e55UgWEvnBdj0er1CoUAIGQwGoX+dmZnJcZxUKg1l5gn+EQGMsbYw32x11mkxieedfoqAmV+NecwlnRSGyG+DRAc1G8LJP/fSYvmRjf0bt+yOMaYpfuPpyjzniIqKEvyOer2+atWqT+KTB8U9BEAZKc8/+HCegzEBho/69zl507va16J6Di2/gC0bjjgdDkokv3bsu8KcZ01b9/C0QABw6Ga5IcMmChOMGGMhmIWmaaHvf/zc4e++LNEEedFuHDSCqK4f1i9fJtRgtCKEeM6qLNMXIRIhhAClpiZMmzL99h7Qlxi4w5KlS778ssTeMGq1WvBazDw3c/fo3Z5Zf4O3qfgrehzqEdS9WHMAIPgwAcBkMvXY3cPd/AelQe1esP/wfq43b7VaSTpQm76Ld1oRIktHBx04/mDRigvEp3D7i9c8FaRHS1AFSpMWJwUHBwuBkAghjLEw/wgANE0zxuIWViyRPrp7XeIXXKv5WIw5iUzaskm76/9088wKJ2HK1CEA2G7Th0fHCPZGJuYKCvVrV7umO/V6vcPhUKvVN+8k8xgRCEeXi715Yl7dVpMBQc3aMSchqUSlb4C2Muw/CmS7riGhkfMWrKjX5gu/gMiD6zo3ad3bUfRkHwDQmbBwH7pTRCKR4GeRyWQWDRtXEx7vA91f+D3+XAt/QvaxVdnlV0H5MqHfftG3QI0NWccQIQ4s3Z3n7GXKxh45deLu3Rs/jpyz/3zxiYMHDy4+KPLLYowNBkNHccfd8F/LjjNyGo3Gbe3UarXQ9xQOhf4NAMTNhNj4wA33LmpSXxAECUAUPF9NigIRIpWBfk07rVA1gac3gPlb72OFw1BlCXw+/ZvmzVsvWndi/NiRgnOEIAi73Z6eni4469PTUipIXb0ngiTv37pEUZI6LSdj3qlWF3w6YsyTt+7pFhM4HwY8/dyQmXF21wj/wEgAENH8ot2V166e5VmMJEmSJEcO7xFivqUxiSmSZiwakVjO2s216jRAXNI/e3r2nj+h2racu3eu1q3bxGLIadVn9aWDXzdu2cnOuLzHYzomicVit3eNoqinT5/SNI0xvn792hej6wbPu9mkZsPUbZD3QXG1XtybCPcmQvljBbcGrf1kcP1GH1Qkwa5J+l0SUEUeFme1mipWrPrpmMl+nVdsPQYA0OBW/cAaxc5Xd2yfID5hevoNeVPZiSVihJAQCezprxKmoYRHmfduA/7+IRu27dOlJxIEYSm8xloySFEAz/Nhof59h/+UvAtu1vCs9dXEfg8LflhSqlR5nU4nF1mSk5NoWgQAdrvd6XQKEpfJZGvX7/1uKAAAQkTiswe0SNGs+yK7Vbdjx69HD526cxRMJWZM3oKgeIiKlnJGHee0E5Rf9bqN7YwtVytpGecdKY4x9vPzy83Nzc0OigwyY8wZddlimZK1m3v1GoTJHV7l35yng2FFk5VjJ3KtWnYAwLG1e9y4dLhKzQYSiRQAGCd5bNeuxo1ckyEmk0lwGgQGBt69H9+nfVNdTubF66ebNWhfqxWc+sWzYm9SOoMlHA5Ou/3kWeGY4XFA+bGWTG3y5qCYkcBqGjZqbjQZ7W1/uzQXWGTBGBcWForFYofDgYv2ATebze7ZyDfkTft2nY512tVil2cIA8Y4LS1NsHl7du9Jvbd807YDNpsVEGHTPmCMiYigCIK4fD1+95HbKcPh6cce1b2KqT9MDeFCJBKZyWxGmB09qJqIprRpO689i0otDO3cyRUwBwDnzl8indm9mmVzPAkY7t44pwqLqR03DjCs+3nZ0tHXX97h8K3o3hO6Ne/Rs/dgm0Xz8OLyyjXqA8Cfd5Vd+33tHlFBkclnGCYvL2/z1v3TB6YxDlKv03AoqEKN7gihgV/1PvlHcbX/gDJnofYC2L//jMGgF4kVJ7d9XLZCzaDQcIyxjaUuvGjSoH4td8Cz0+nMe/FbrQqMLLQVRfst2/CQpMQymdTpsFv9rQsGL+D9/27lBGKhazuoVinikyFtiCKzoizdC2OOpkUH9v2x49AfK9Y+Dw4OLj4FoaysLIfDQVHU2bNnp34+1Z3197yptTve+XhuYq7gj0UIaTQad6gcSZJZL7Zv33XUaDQQpMSquWM3pyKCEovoq7dfbI2/ffqCV2WvYNLsST/MdvWZtFptQUHB+j8OhCp0beqImlQpbFKlYN1uVxwej+GT9iliEefkCHVBTlrSozpxY4Mja/I8J/X3v5b5bzUHGExpMGLn17q8rEdXfilToSoASERceh4ZGBioVquVSiUAaDQakiQJgsjOzva81yUS6f0b+2s0GWkzqxVqBG94W/8F6W0gvQ30aNZ26x/7Wbup08c7jm8ehAGHhEVKRc6ONS7tPJWuM4sIBBiDSsH2izM7ncAWnvjxULnvv18gVKLVai0Wi3St9Hr160e6/uX8DBbB4Yug+yb3wbRtP84fIKIpgkC69L3Ksv0dDrZr9z6NmzbfvGPP55PHCbaGYZiMjAzB4CGEUmwp3jX+NW8qOwD4/fffBwwYwDAMxpiiKEFzBEGcOXtl6+aNOp2BICXq5M2CKy4wwG/YuHWalnB1o3c9LzNp7qQVs4uD1HieDwoK6tat6959hwP9MvQWEQCa0tMVzI0QWBgKY6AoOjXhbqu+ayhKxPMc67B3j/vwyhN3Nf+QwBQICVE6GCsAmA05UmlVALCzRKkwTlhvJsxdClJjWdarffEPVHEc6AuTRJIAiwVHX4SsFp75/4S7g+Deveu1azdgrNp6bb64fWaJ0+EIiywFAANbpMskTsHBYrVTAAAYbzhdqW/fopB/AISQTCbr3Lmz7LzsCPyl7AQuLwDEg7TtziWzB4lFIjvr0KfvlYe3JilZUFBog5p8VlamzebSgKA5kUh05MiRX798ixCVN21k3bQ93naIeojQf0xKKxjSLSo0SEpLAtQJvyJSAgChwYHdBq/O/fwvo4m8GLVk1PJxy91rsAGgsLCQJMnU1FSM8W+b9876OMPKlLg9EEGkJjwtzEtu238dIsjAQFXblq3v7/7Lgdtb0aUpbNi0XSQSA8C1o99Uq91QGMaGBTIT1pRds3yO0Wg8f/68EPpWs2ZNmUzmcDik+rVSsatPnZ+TmfTsaudhf2i1mkmLRh/b5Vn9P6djYxj4Ud9OXfoQBEnR0gv7JtVr0oaxueYeBTCG47ejB4+Y5hl4IXiSrVZrQUHBzp07f1jqvVj9lRAO6DgK2kZV6t6xAQDwnFWiqCgLqisRi9Zvux4YUonjeADgOG5d/XX3at/zPv9vebW1G/H7iPCkcJ7nEUL5sfm/DS92fJ3pdOZZTjzrMHWcoho5rHd4SCwAVif8ikgpABaLqBETf715xNvr+zeodFGemoOieHGMMULIPyCIQMXxFwJpifFadXabfj8hggwIVH3YtvXjbf+N5gDA4YSwsEidTiOSBlSu/oGgOQDI00na1XceOnQ4MzOjf//+crk8Ozv7+PHjNputXbt2oVKHk3f1h8rGVEl8eh0BKlW6LJdaXPO/5MR1kLTaU7N2/VKlyjkdtrJVO928dLhe07aejhWFzJGSSwrRtZ4ghITYsNjYWHmhyBzi6rH8DTwNxzaBtO2LAT2b2RiWIGWsNUuqrMnY0ZiPm/cbMPbFZC1TJyQzMp0jirdlGbp1aGR8JAC8rBxPXiG7ycsnzxo+S7hdTCZTfHx88IzgEx+deFz9sVAgOzKnVyv4dNqUatVqY0A23SNBcxqdae6Sg4nj30JzygRABGW1WlmWFZyfQgSE+2LHlI8o0MfLxMV/GElSWnVO826LCJJSBCo7tGl9dxtoK7vz/y1VqpTS6TQAgAARHg0oQtCiRv6Pex78sNTljkcIjRo1KiUlZdPW/VP7FseJsHYmLKoSLZHb7Uxcq8ZZm64/GebO/FccPAeO5tNmfje3UuVq0TFxL+7+8fDWpVr1mzkcrhB2BIAxYlnWZrMJv6cQmUEQRGFhIU3THMd1mOq3d8vrZSew9wxwrTY2qhczsFdTJ8frsw4py/S3WG2jRvZYv3Tl4UvFKxAAYM7cOWPHjg0eEgwAFovlyZMnMQtjvvn6G+x+jmUR3rLreLxj65jWbhONEIqOjh42ZBjajB4vcsmOtEOL1m1r1frA4XCw5jS7KRFjZLbYvl928Mjl4qrehMbDwNHcgRDiOM5zdYUQPwcAeQUGVXWWYYXLjylSdPvan826fU+L/DDG7Vu2efjHf6k5KNpCBQCeXN8QFirhi7ziBMI7L5SZN7d4bxH3iGrcZ0P8bXONRfMlHOeUyeX6wiSZIqxV6w93J153n/IvwQiOXgG63XdfTp1VuUqN5t2XXD40Lf7RndgqtTyLvfx7uj0sBEFEU+Gd++vevOk/chycQ5L4vWho/+Z2Fow5JwOiOjdtGpebk0a0PHTwgqvYgB0Dpk+fLnwKAFit1piYGIlE8uy3Z1s/2eoqVEQJ2bU833J28OwGDRq4U4T9EPR6ff/+/S9dunQ97joAdGmnGLRplMPhYM3pVt1DjsN7Dl29fT/1gIc7+01oNQ6OXXuy/fdDGelpwSGuFStuv4xw6LQmuSckTUZDauLTinX60CI/mUy2cvmy8/ddWf8hS5dtZFm7TBGW9OhgSKvitZXXnoeOGP21Z/slXN3Q0NC8vLxLj1V1Yo0Yu752udhqWYkXKtbtX7ZcTPgsgPHuk/4DDvwJKevnbBDNq1ChSrdPDx5e31OrDlMFhwOAyUZHh/J2hoGiHxBjnJWVJczr8Dx/617qz4uXbtyw9hic8Kzzb3BK4cheuPY08djAxH2bRlqsVk3K5uCYkb37DOnUqZe9w8cnTkKrS63m1Jvj1hwACL49nueHlRtm/8O+e2CJCYwSsmt4u2GDacWagyLXlEwmYxim+/Xu1+OuN1sAB8+c1uVmsZZMi/YuQmSp6OB7j99aczU2gew+pN/4qUtdzfqTEf16thaWk5AkKWhOaGf7tjDZHSQAECSZEP9A4R9Srnon7LStWb34VvxFrzr/Pd27gXOtAwAQIiiqONoKA7B2XqvVBAQUb/4gLJUV3p+5p2xURc843I0yzk27WbFu//DwqKKZhf+Sh5/Ct42/PXH5li47o+vIfcd+HwiAVMFhAPBJ+6R5i38cN2aUTCYTHLnuacyAgIAv+hdmPN00eGDvIx+fOLG5RJ1/j6YaPN8Oq9Ye/2RwG4KUWdQ3pYHVpTL54O4Db9//o/yx8hUXV/QszxRtHhIZGRl2MAwGemaWlJ2clRsMBqFPIIAQoihKGFrStAjxIN4PmoEZtERpKdyDSLEyUP7x2I373/TOKab0Fjh64lTqk+1qo1iKE0+edNStW8d9FQFALBav37jvq/6MgyMA4M7Vs4qA0LgeSxmrdvOmtTdvXNz3qvWFLg5Go7MRYKPgrASKgkaLISTQqRAA8Ori2AoBa9Gs3dObm0m6WGFSmkvMxP0jIkwmkxB/Iaw8QkV7r5BEie6LnWE4jkeIcHJccIgI4K/7UvdV6LeS8+1FvPz1PLl0ECZ/0mPhkvVWUz4tlmWkvogqVd5ms+jMos4N9VeuXqtcqaKnc8ff33/t+j1f9rGzDmlhxhnjHQh+BOrilWKvR10DnqXl+CukRpPNpn8i8a+ICLpzl767J/6hrBjpcDg8rZ37oy0WS9OmTTdZNpn8ijuCJWSHAfM8L4y33aSnpwtVIICxQ6PnH1gFSKRJ2YJIsVQqmvTNz7tOeRZ/IwZ8SC9ZMCgzfiuJgKKgS4MsgKzUjPs3ngeJxVK73VY+wtywovbzPiBoTq8tbNRxukweYmf0v/y8bP6ka5ZZHtUZaLgciibXAwAUNhkIGQAG7AQAiPIo5sl9AADUnAYA4IzA2bB2G/azBIUeE6wsSYlCI4on1xgHWb6UKCMjIygoyP37EASRnp4u2BIxzXvqDiGkCFABQiaj/qPBQ/fZf8NWCg1vBM/8ActBHIP8WwOSACKLvioC7ABWCx4OLdSAAgDgTNh0HDgj1NbjDbdA6VKwNQxWbcpJatPl2+lzmnX93mrKv/7nojoNWmPMlwu3lEenE1Ov3UpQymQyO8MEyJh2HxRM7I55HigSA0nt/n3EipXH9vTPT2vv/sDXs/8kOLutr1e2zOB+cYbsEwhRgaW6rf1+85rtOQghT+UghHJycnieF8yW2a845hy8ZGcmzBRFCSNtAafTKYySMMaFGsN3sxZizFs1VwEQQuiLWZu3ezy19w2pcBRmTO5YoCe3nQkLDwspKChoU0dfq4KlbJilXLjrsem4aBd+ABBLpKlJT8vWGol5npKKzp69ZnHHFD4NQCPqgZoGuhyKGAqYB8CAi1cmvwahJCEFVo8CB2BQUegYxlgsVT6/vS2mWol9Q7o3ypz7y/bv504T1nQhhBISEty+nh7NdEJnwA1CgHkOAMLDI5W16+pwXSSpCKFNi9Z6YQDeve4LAAOiQBwKrBp41rXCUrhzCCkK6ANAQEomNIzGlbJhxw1QOAAAI0iYALNmztq5Z59MEVa90QiT/r5c4Q+AMIaYKHNsdNHFxkCRvMEm+fFgSGiwHAB6NExcMrfXjU4/Z7YArrg38XoOHwauafr4UTK9wYqxw2EvlMlU1/9cap1WYq1qdna2ezlfWk6ax/UE8JLdkhlLAhcGjho1iqZph8MhOBiFnlZQUFCU332JtA6Pkd2YgkhRanq+xfwWQQduqi6Bnc2q1G/QePmP3QGAZdm7d+8u3n3y20EJZluxlRZAgB7fu0ZRIgBQlatWp2y1BHfLcywKTWmD/D+EoEAQKwEXO1neDuwERABgdw0IAcbYZDQqVcVL8w0Wum6s9ezZs5GRkYKFE4ISMMYSsbhUpMlqLyG78OjyPO8kCKpx287+4VK9ozkAvP5LioKBoMGWWbJvgAE4oCJR4EDISII6AQAETjoMAIk9IegJEATJcc6yVT7ct+7nuLY93IEq7tGYiOYPXvan/OuuXTUSABwOx5kzp5d+d6Pbh1H5h7MTSmxK83rOHYJDG282b1yNIAhzwbXA6C7fz/r06PGLnTrEEQRht9tZlnUbr/j4+NODvPtD3g6U6xWv175dW6lUEgTh7t0rFIqde44O6daZ4xyY5xApClIpZn6/xz14fnOir4BKFb3g++IYaJ1OV7169c8CAlb+sX9Sj3hzyWhhWiwxGrTlqrbjOO74jlXKfmANAbgdhAY2ASRCyr7AW0Gk9DAbb49d7Rr34eK7nuOcCv8Se9IgBO3q5P6w9/7woeVYllUEhBr1+QRBiEX098t3LRhRQnMEQfDua+50Al9iLuE18A6QRIHDAJzZu2OKnUhUFiQTsO02Ks/glNMAcONb+GXmj6M+nWzSZcoVSqNeK5aUcBdTJD58NaBT78/LlXN1IkmSrFq1+qTPQo+cUNVa92VC39fdDCWxBcPPmx50bPuB1cZi3gGIbNKu24aRy6pWLs0wjKAcoaRCobj99Pbjfi7Xmxtv2R3pfeSk4+T85fPr1q0bHh5OkuSxY0dzMx+f2791dL89gCh91n6EqMUr91+f8E92ZGmzslLvT5Z5psjlcoZh7HZ7716djl0vjKuhKxr7AwDcvXEWAVflg4F+/vJVS3+5sFeBYlshv9YQVAl4KxAkiEv9K80hwn1lq8tWVqpeEwB43snzWCz1QyX3cLA7iIk9kg+c2Kq1RWXdX1S+/tdWc17fFoXzh5cYMSCE9HotEp5f8c/AHFByoAOAY4AtAFTyMvFmJK4CktqoalXsl4b3nbn88PJoYirGWB4Q/ezxnboNW3hGI/95N7hLv6mloou7qgRBCNvoDh7QeTtmAM94edz19zy+DN3jNp7c9ZnOYDHlnQXccu3ST3re/arlw1a1atUqVaqUwWC4f/9+ujX9hzmvmIvzlh0AOGjH/LHzRYxoxE8jbje+fXfMvQaDjMtWf4EQYTe8QIhSBsofvcjz3GXjDQl6ApLAmu3atfZMtFgsJEn6+/vbbLYnmdHdGhcYLMVNrZ2xVf5goIO1Xjl/2RQUDu1qItUAQGLgrYB5oAL+leYAwJ7vtigqMqlx0/YAYChMFkn8AMBmswrxbW4whr5xuTfvXIw35hU8mf7N531sLy2yYVk7AMIYm/U5/qrS3tlvDuaAoEESBazG1c8rkWsHeRvEmaGl9cFPZ1ctnzdu4nSpIsSoTbMzNlpUbLkN9lBPzQEUTwKZTCZlgCziFuR673/3GmzBIOkOj56ml4oOdtjyAIC12/hvTy84f01sFw/6bdDuwbudlZ3C8w5e5hWyAwCT3ARyWPrdUgCQZ4P1BbTq1FuXm8MY4gHg0rUnd99uoZCL2J0QEFrT00sCRSNtk8nEcVyDD6rm6Z5JRa6fWCyRiUQSf2U0xvyy7xfc0M1DwTVdFwDzII0s7rz8MxAJmHPLDgOKjCoFAIxVR5KuTezEYonQ03BjNLMLV9765rPqW44+yc43qQJL7OHA87zVahVOUec8EmQnAiMGAsE/vUNEwcAWuga8nmAWCBEK+ixnHDwq/6efXFG7+djDz3qkJDypXKOeW1s2lrJYLJ4T3zqdzh0Q3qJF3J/L31p2AHB5HvzY5sTqxcMApATlxzst5SoEXbVqNGHmVdNK7EP/Mq+WnSe12sOVZ8906U9NeecwYJqm1uy5nPupd7E3ocYTkaUsR5Kk50gbY8wWbTVMUiKZ2BXGAwC5WamR5RoHhMQAzxvFFcGvMmAnYA4kUQDuJ839C+x53hcSAAB43un28ptMRp7nAwICBSUF+PslJGXt3DDo8rnra5eOJAC6DNyw+ee+MomEIAiGsTEM45apOvdx+epdAEBG5mKO/OeyAwwiIbiSAIcWOBuUaMExrxrz0Bq9dtX8YSMmRcbEFWY/8OwbYIzsdrs7Al4gOztbcLM5nRydDpV3wvMBnvmvh6fg8EVQdtsxa1r/whdrQitPXrTkF93gfnv+fP2f+XrZNWpc2pqXDIAdTAFBSvUGi7q7d5k3RCKT1KmQkZyc7LkCzeFwZGVlkSQpkUiOnjjY+jNWbxEBAEXTSc8fVf6gN+acJEldNc8GIAA7QfrvOnNuEOFp6gSKLHEJQRMEYTDoJRJpqeiwrgPXbFg5yG2wrTbm+K5P2vXeeHDbxzqdK+7VDUm41oLb+HAEb9dt/wt4oAOB8gN7iQ4fAj7PWXvv7t+GjZhUt8WEE1uGFOZnh4S5nJZi0uzVSSUIQtjMAGN87ty5oT3KLo9Pc+e+FQUMy2NM0oGMKVHiFyGRiMsftaW4tmD9S0rIbsDOAcJihZ0DXEt/xQaIjChrtzME5UeQUgKhJ88y7k/yPOlNkWhhypiOeoN25+5jE8cPFxKNRmNeXp7Qzlos5pa1LTqzGCEMAJzTSdOiSnX72sxqp9PB8EEEyQAd+t9oDgA4m5fmEODMjNTQ0AixVMlzJZx/BEEEyEW9hq6ZPKY5SUp4vnjCy2Jz7PltQG5urkxawv2FEAoIiRHeMzjwX5i6l0A0SEqDPdvz+xu5GkopAIDDbqFoqU5T4JZd3Qr5V65cbd68mXDI83x2dragQn9/f63BgYNRyBVXPW/L3SWgIuR6o8WmfUBLQpcs29B/4yC37Hrv742sSHCJuEUFbtnVfFiz867OU6dO9fPzS09Pj5waaY2xrhuzzmmEz79dosvNsmrvAwBNU5t33PDYJvUtqLYZnLU5iuTC5Onp6emCXwcVbdtLkuTW7YdmfJRvKYroNJuMVNFkC8Y8QQHQIf+Z5gCBa8+yYtRclUsXjn9Qr0lgSAWWcTmuBVSBfsMnbR87onnt6uUVkW31GYeEdJPJGBAQSFHU3B9Oz5zaXuFXvJIcY4gq30R4/9bBtK+HA1EosIwfML8AACAASURBVIXuY4SM2X7dAYDjWLFUyTLF27RViLSsO3qrbNkydrtdUJtgrSmKOnr0eIPQ3QoxVRQ59dYYysLPc04N7N3MadcAgFQiDbgKANDhRIf61+uPHj06JCQkMzNTJpOVmlZq6ZKlwlkUxVGfz/h88eLFUBQ7ExQUNGHCBIvFEjhDGf9wIbtZT1Byq+YeQckKNAa6jKvY2xJ+FqyVWADUqGLqzYu/5xoiW8Y1VKlUer0+/llCQV7a5N7pbs0BAEEQjFXLWDQAMOubsUAd+u80B4BZ4L2tXbxtZN2E1gBA0VKKIrWFuf6BQQAg95P0G/nH6b3j1Fojx7EASFgpByD4SnQqVdDWn0cNGfPr52PiwkJc3r6UFw+iq5ScAP9vQQSIw4CzgsMAiEDgVHOVKZp2OhwYc04PHfE8jO6UlpO6Zuf5kN492qlUKozx8ZMXnfb8fk3uJSdyDMt3bhlxFIp3nHhz7IGgN5oBgKBkCJFisdjOQIhacaLjCSjydZQrV06j0YwbN040U7Rg/gIAoGrdrdW5c2ePeiAwMFAkEuXn5w8ZPPiLcwstFjNBKYTujkQievMQTi9EHuajYUwqRaZcf6yx2+0isahShLlzDaMw/SqAEJGXnQYYC3enV5/pTUEkYAyuBhFBUU8L4BUtLAAAUey4wZgvzE33DwwS0eThUw8WzmxfoDEQCIlkpRCiwaPFRAgZDAaOkx8+vL99u14//dDT4eDEUhlJUsKPxtis/1HH7lWQMiAkwBYAoCx7e4VKosvPrdV87PXjcz1LYYBwpW3B8MSdl5ysnQGADjXVwJntTonDzgACwCDRAeN6xszb8eCxy+hyDoMdBQwa0qvM5zrYUlyAIAiMsb+/f5cuXdS/qH8Z/Qs14s6IuLFxxUUAtFqtSCQiSdJms9Vv9wUAWDS3CFpOIPhu4c5z3vMcb4rcjyRJiuNczhGF3K9d3Xy3V9NTcwCAEDIadMKcJklRtpIrBv4ORIJDD8CB01LCyyqJ8nB9kcC9FI1E0ED5M06KIAjGqqvWaHjq02NisXjzrgsyiaRM6TDOYQwoPxgBIgix1xyX8EeZLfZDR/d/Mqzv6kWDL58/LRFLSUqCee7k4d2pztkESvU85b8EESCJAocO/g9t3xkYVdG2fc2csi2bnpDQe28qCKiASLMgzU6TpgKKgCJWRH1UBBFFQZCmqIiigKKIdAQEBEVQegnpPbvZvufsOTPfj7PZbJYg+jzvd/GHzM7p19xzz92GycbqXjLZqCCIoqRp1TKPEJS7Tf06Fxp/UqiOSkaIyJhOBaFl4/gmPxadGRnp/i8gm2E2S8FgiGkBJsa1ad/NI9Zw8CiKYqhSZrO5o94xpSJFNMJQbTabsT9GeXm5IAiiKOq6LooiEewAiCE2CDHJIvDfagFRIITMeXtTTr7SsU29Z6YOUNUrbKEAgDqNugGwmC0V5f+AdkSAWg6mhMVYNOcIqWFu5VeEIXEGKZnC42IZRkPrLiNOHV79xVfbyipCL0wfqKvO9DZP6qobAGraHVEljF0FWxIbDBsy7L6lKzbe0C6dcY0zPT4+Ye3nG4CXYg65OhgCBaBmELHaniinAAScxyyxq8F1iPEQ6wEFRgOp2pcnBrIsigKdt2jzX2fLPl40wlHpM67yvxijflsEu9kSDIa8ZYcSGw412zLS0yy6Ht6tz+FwRBRKXdebNm06bsU4EQDn3OPxGHVGjHstKioKJ99bRBDKND8AxrjP9z9xzut2WGzhIDbG0LUB6Xxz7yef+3jU/bd0bt/0yndqtiYCACF6rKGjNgSNcUwAAqYwfwmNbwymA4Bc7dEHALWs5uk4zGHVIZcPEwSBMeZzFTZs1fe7fd8t+M84VdVSW07SVdff3ASllDEWdJ8fMeqR66/7sm+P+qlNhgGgVFDKHdSWF3vAVUEhp0DzgKvV7yNoaF0EIDDVfJZo/K3uK4qCJIpTZq3UNCx4b9kjEycBKCnIprSGN/m/Aav5NjlIVRgiqsYkISQvL8/4DydcNCrqR7vwBEEwaisRQnRdp1RWvZcN++S/ipC5Eh6XM0I7TVOHTZzR4ca+w+8f9+jDo1Z+duDVZ4c3aZTicoc35QFwJRGvilBV3gBnzFsA6DS+aZhztZykJnuiKuSd1x6c99ZjTz39Cuesw02PsOXfaxoDGAHhV+dcBIr7vK5d361LyomzjntvbA7g6JEDNDURV0zpfwfBaqwSopqiXohSDDEOgi32KQwYqnDNn8xmucLhfen1r0wWccE7y1LTM/74ZWvAD0GU/D7Pf6k318Qvv51v0SQ8UTRtYP9xX3afPtWnpZSWlpYqiiKK4qFDh5bOWiqelk4bEbNGRF4gEDBKhwKQZXnK6HYglOl+KsYBUGv4ga4Cj4QTiQBwyY7TiaRC5ulBdKoUSHZ0L8549773vPvC6LFPzX9v8ZKEhKTJj9732zHHorlD6mZUh/WGO8f8HQOmgIUAgAjMkw2AxjerVr/EuEjH2iGnR12BVlaUGOOQVamhuuY3ag9eE4wFfT7PwNsHX/pzkz2pASXs2w3rTqvjYvtdE+Z0KDEiOQICzQfNA7lOTWoCgKOsiKBGo9VimjxzJWN4aNToQXffr6qKyWz94cuPABBA1zTDSkUIrkjv+qfQTbicUxKhndls+uuPA4Q8zDk33mRpaamRwKYoSkAOKCZFXPnEyvK15U83eppSatRqFUWRc56env7h0mUzxrc3W8O+cF3/2/v6uBl5rRHieoFYiLVG/U0CYDd8tv4et7NuoxZaSAXAODyVZR27dQt43Za4eJfL+dbbH8XZE06fPD7uiVnrVo4Pj9trIlQBFuYHc10Alai9UTXnzHWuxdkaIND/ykvdv2/Hzbf0ZUwTBALAHBeOF/obqKoiihIhIhFMANLqddRCgUAwcDzLe1EbSUisjfBaEGCuV6U2RINUjRAaVhUs9cJDDgAgCpKu60ZMZSikv/fR9zt2VJ7O+9VZmAdAVZWk1LovTrhtyIh+P7+0s7wkP2IZPZ3lOv1m5DRVWNISVcm/mHquxk9RKG8PfBv5iysqa5X+V3Z2tiHeIiom53zjxo3z35oPw1y89d6tdB0doAy48cYbGWOyLB89evT8+fPz3pr31MXq0jG//n6+NiUVAEi7uwnthPReYG6AQHfH9gACRtXgmvNn3xEvLXhi2JOvLff7vVwPej3uho2azp791JARC3t1t9+XkWX0JfwqDGRB6CoIBaHMdRFUIlJctYpDxH/AuVh96ARe/OLzaQPuutfnciYnxgH8mtK2GhzG1ZmQBODJSaNPs5f/PecAAFwHaMztcc0HwRRVN5fDnwNTnYieEJ+a7iwpAkDABw77ePFHry76bJAz5zIAEEqpvPqdqfUaJapqSJZRWpxbdR4IlKDYSua3AYBvUwAdoMTWHTScWMPf/QlgGOriC3+PHFUbiKqqHa+/dfmPH3Wr171Hjx4+n48QYrfbDx8+PO+teUYnEYBiUjaO3bgRG7v+2rXrL13Xj1lfPr6WeJXDv52rhXZ76pAJHUjaFDAfmOcq7AAAQqkoSqUFOclpmahaDrrys+xxvl9+eLlJs4bGpCaaUm7oeuuOXZvi4+PvHDhgpulQjx6962RaUVLzdAZUB4gAEObNA5XANGJKDhNFjIdgje1/JWrMsABQyVpmqzeuXDLvoVGPVrp8APmbh4oBh8ZZCEBKajohxMcS8tSe+K9VdlM6NDf06lU8Ea08WMFCHiInEFMSgPD6nYiQUwCAUL/fP27MmNvv6HP02Hu6HnLlFThzN4IzgMQnJv555PeRj97ldns4B6WCQWuTRPf8UoQta4mUCHCkhK4cjSRlMsBxwEzabOOhXH5uM4SrjUYuCOJHLy39CMtTK1KH7Rx2vvX5U41OlY+uJlWUlQE42u3o0W6x2UpcV8zxrVR/wZUXIR3ugjSMpCSB+UDEqiiJ2rEj9PVTcc+4XQ7ZbLHHJ4U/JZEGDLrtm7XfySZT3XoZAPSQuzJvM8Adurp23Sd7f95318DBnTrVtnwjojHKueIAZ2A6jasf5pAUD/oPOAdcSSkK9VBwceqmZqPHPh4IagAU32VbWrcre0ZDEEQAVLBwzk0mc0gLzX39mR3atwiVQYgtDfGPwSHaQURo1bMHMaeAUB7ycNVF7U3Cz8s1KCWAfFfvHsMfuGfjd9+6y45XZH9j3DMhAogQnxC38M0VL7052ef1u1w1piNFZTIBle1VQWUagCsVR4CAK4i7lQDo3An+o/zSNVIGy1PKVzyxIrb1n0SgcK5TKR4oYKzGYo50uQOsFRGSwHWY0kGkGLERgxBPXLfl8l296xfmXGjVIZyNy3mIs9CEKaPffHnJ40+PNnICDBMGEUzuwh03tE34cMV7z82YXlNRBoAqMUB4yAeAmOzVboZ/yjlAKYG5bsydU1J4KW7i/HmvG+t7KlgFKVEPVVdsvRKCIDCmx6XdnJScMv+tpcuWv7N40UpmJoQIUEpgqhN7wD+HYEHIhaj1JjElgYCrXua6SBObR2xuDeSvn33+pUYp5aUX1xEqA5QzhVATZwqIdPL4GUEwuys9uQUFMavXgKIXoBOkqmxNQgECpQI8gFreOwAQcwdO40kzXJN5teLatIugQd3k3MKqUXIgDQ6FpNwEAHI6SNgRFAah0IM1nFGADquxpYzZYqNClZqpK1Syu1xuixlWmzU3J8eohGqxWC0WC2OMhyoldc+DD/X/4SuhhouJUCjloAIECVwHodXX/1ffuJYxDYCcVhd3OWaOT4mTJSGoMNWXI0jxV+kMAIYFikp2Yo27fBltb3pYSl1BXGHbFagUrfj/a8jJCFWdCgBA5GSueiHIzJVFTInElMS4van5SIeGzSrdGqEywEVTmmxtxKGDCKJ2Zs2KvVNmDDKZZfWK4mjbDxbI0Y9mKMdyIkgKQs5aPDoAQInciFu6kOaSkUwEIDwACAlFJR/WimvQLtrSPW5E331vrTL+T0Z3IOnPgPlhzoy1UhIBShG4DlMN9y2BmpMbtA+Q3N5QUU4WrXrOlCYjSs8unjrr0W3f7+7W83pjE0tFCfr9Prs9XhRFUY7v2SWh2Yb1WdpQVCtKHJQA4J4cgw3EWhfMCDAnfy93AY4aMyYz/mTcAhgG6gpK9p8Vbpp9X+dFy795dMwAZ+43ddrO1NXqsI5oGFZ4zjRKpaN7t77w0m0bVz29K7iM80rOUgEBAQ81m69xUwZUBwiFnFLD/0ZlcD3avghwItu56gEVechLzMlx9FKifqDS3RAAZ5oc10yQ4hgLAuBczc8vat8pNaNe+umz5w3ORWVSQ/WHtgeOUHq2usmA4fwgEkLOmlc3QImlCw+elKuyIiVrJjgS4hPWfLrm7+uhX4N2Lzw7ed6C5eb4Fn7HH0EFNmPILWtBMl+GIIPba3KOIFQOFkKMGk4EBIuIKf249NZPB964qXN6MOjVNVZUVJCWVkdTKlKajHDkfvPHbxfi4m0t2zUzoicEQfD7faIo2Ww2TedtQu8qQmYBC4cSQfOE5T8RAA2chTnH2bU4h+iQIQapv2mimRfaqUfnqFOvHhFoSV4eBQKcdOg0Yc2aZd9v+23w7V3LLyxPqD+ECrEWc8653R4PIL7uQJNJfuXlOVsO5vdsU//+emu4CXKctVmz1ieOHTMJAFDBmm9TvqekRhp2DcgpCDkRLAQYOIE5M9zTXA9qcY0ZRU7kQSeoCIB4Lw5q8NzSdx5zVnolSz1BNtZVYbhLf/902Xcvz5vqrKiMyJEEOwwVghCU6o0oPVNzKEZBsEC0IZBfG/M0kvSQ8OmxMff3Li6ttCS2BRgRqMtRu7czAtGeh9vHgxB4vLBZ4W6Gwy+AcXgbA4Ae3mrSDq4TQmw22VSmqfObo64YK+RgpMNECxICPQDNBcDQuvK1e4tznytpYK+TYmnTPGnZh2/PnrMAAAdPrD/kudfin3rso/lLupSVlladAZoWqqx0JiYmrVr8yCOPzcqT8inJZjwhnp3snfCi7q+ABACU4Ff2uo9lBoRmV3l5USACuM6QeF/cgDr1M954aylQvd9BBIIg/PbbYa+H/fzL2UfG9C8prXQX/pjYcHhMN0mSjW/pK9n91PQvKcX6lS9t/ukbSgUWdpNUg1I6940hl06e/xE/BhFrFQcAcEiJCBaBUBBAKQY1MbFxCv21b8IEj7dax/sTz+fbByBwGiw0MG32vFdGOSu9srUhleKjOUeouOajr6c/P9bldJ+/eCmSQtGuebzXH+IcP+7L26nsjvSvHZxBSoBWI7M/DGIauC6n4obqQhNHDu9PrQcAtiIIKlqtR6NtCAQBwGrByXE4MwKipwF2L0Kn0fj+iyeWfbK90uW7aQH9+WAeBRISUKJUcs4BRqjMGH9u2vA/52w9Ed8nco2aCM9WACDGI+QAq5rjBRsASgoPalOtZ1befoulTdOE3y9Uy1oimLwe/5hHbvpp854bureLtAMghDDGRFFw+pCYvKuSdX3A0tbpRtvmXd946yujT1lZycqPFm7f+ntJ+szzoXsp/n60cSY172ebOPPZ11q36RgJiomBruvXXdf1i6++uXfYvR+v3XFn/64AdeZsSGk6KrqbzWYzJtnLuWVef+iZZ59r1/46KphDwQpViZqUOY9Laqlr/meeff34iV/dr9+53XyU4oq0MwNSHAw/OAQrigexQa27dDRbuj//ykI96AcAzp9/dkrumbkb6baQ+2y8STHUKsGUzKuM5wa0kOFPZ5Vud4RzokgVVQeQkmgqKFH/l/QiznSfH6GQDkCQkwk0znlRN/TtAkLQukViUqJNbi9OHN0vNTm++7fvGjVeRQAVbXFkM26/c/FnH03RAoVEMI15QAaQlGjbsuNYty73PT1z1KRJt10+uT85Ma7VGdefSYOqfaARxDhzqAytagRwHYIFnAH0ovZIC+due5wu+MmxYxdZZNs4rpviGrTvJJ88cZHUDPwH4PG4CSFPTO4xZb1/FG376YbdlZUOAO6qrY5Nsunxqc9PeYLHx9vHDO++TjtFUUMHrwl2j9Rjziuv1G/Q4mqci8aufT8PvK13uzYNG9RNj3GcJyQkGouJQFB9672fxo0f2aJZg6xjH4gmO42K3jNQlrtbDVQ06jCuyw29tu6886GhXddrJylq0xcFO/SgBZ4xqWNUa+NFH2w2grGdJdV+i+dfnJuUWW/EkMFaskuWRHBwpsRwjlBTHL00acbDqqo6HNUvhACD+zT0B7XVm87vUlcR6Z9wrrZZRDBDTOvaLhOApvp37/z+nfkrundLeX3gwIa3pVFKAEiSpKpqSAsOH7Pq9/3h48L099bD8S2wa/0FyawpFUwLuPI3O52sR5eWWze2+OKbPf36fb5myThdZxUeMEGNfaWExior0c9Pxcgin8B9KPhmXtETSfHyrd1TUpq0dOZcNH6yJl/nyF5/55BbU9JSCvLzr3RR6zq70zq598AhBueuBCHE4/E+PGWasKLd5/7TlNTejfH0+s2atGhzfcBboxjl1eCsKOvZq/OcudvXfDiGc27sB2kgEkLx0psbx44fdfONLUqytsiWKkvEFZAtKQXnvhEla+OOjzZv17LbmelH1VdiO4XBu5rnt+p2x7SZzzvLq7WOaDiLCr7YuGn8iHsa1JU4QGPN45yrhUuXfj5i7H1Z2TkRUUcIcvKdCbKaX+xjHi2gt6ISif18MSACQs7YLHHBBCnRgqI7+9+QkZ745nu/Korz1Rf6t2vTMBhUZUkqKCrmnFe6XMlJttff2Z0ztvrQGlH+U0fXfeOtDzVNAzgVzJricBduByGyLKmqNnnmZ0vmjyp3uLu/9iK11jQHEAGB/Gr7AmegUpQzPgFCdZIBIA0l3cY/2BzAhbIGD497PNxMSLDybMh3oay0XJKFGIEXH5/w6+/nP1z+674/DjmLwlFlVwxBDkCS5PfeefXrY61OhiZf0QEA7CTv4meCUIs1pJazGUhq1KxP5+tat7K/MOOexMZjS88u2rfnxMC7b1OC4VnysRmfrVgy01l29h8VAyCEELFpx4cfGzn4y9CB2F8BgLCgc2q7qfMWfBj018jquBI2W9yPG97o1K4xleJla8NIO6GmyqK9b7/27fP/GZmTl1fdTsi7y36ePqbVknUXj+qvFQbaAgLkqw4VwPi+eTWWFIIZYhIHv0Get2dJg7FPLGvZPO3JR+4KBFVCiD8QyMsvMIhuMolr1h36dVDgr6i1bQ3+nrEWvjrnqZdefptzMF2hoi2p0b2chSrzvuOcv/fGgzNe+rx7lyad4/7zpz7rb4xYIEYuYAQxIynkktvkF1fWTbd+smbP+Eem60YQLOeW5E5+x9E1y394+qWHK2tu42ygXgNBj3wGQn2l+zUj9BIgVLJn9qVUDoXUB0dMOH98yp/8HUouRY6NoBd7SKQbatKa6CFf4cVvI+5OKkh1WwwHwmLAkX3x+y3fDR86RFFD3tJfog4EgLTU+LEPXV9Zfi6WcwRM5wAICQd2h9s55zzkq7x8c/87vthAqIVHLhQ+TCm1C4Wv/WfBNTkHQBAEsaYdzoAWLPj917MPjrkpryA/un3XvjOZ6fKZrEqbIOUrD1GcAFeMZVZ0txrQ/TU4x3WIiQADaB22fcRj6nPTBjWqn+IPKHn5BaqmEVTvB/bX6UKntwbnEEO7nR/h4vasyhlT5r39vlEtmnMdhCY2HEapyZHz1aI3RweC6sXTX52omEBMKWETBgAwEBHXVks544lA0qnQo5ZfZg++hTw7qdGCeW/MnvO61+sGwPWgvU6frt1P/bhpx4BBvb3e2JeeWa+hFgqBUMWT5Xf8Hj3fcaa68jYDoERPzuj7+HNvHHvzpTOhcdUHG91Am7fIiOIc8VVeLMvdQwUZAIdmaJZMV3JPfaprgczmg63xTZgeDGmhocPvePnNL956ZZKxFYIBUaQr1uzpf2tLo2C+AUppSVlFjJ7AGMtIT43My8XZuwb2Su+6bfbv/scBVFsGCOEQbpae5vzzcAs4oeaQPw8gnIfM8a30UA31IK+gvH2bajkHgBDxwqlf/QFvq/Y9LlysHnsbfvhdVdTuHdMOHC78KbghVdhVHmxLaTHUckhXyaQgApQKRJRaakHVYrmjtMRMgisXT3Z7Apeyc42adJEdfACoIW2denb/FYkQNWdrIHsA1nUsmV3uslnjDT+jAcaU5CYjKy6uMpsssj3V7nB4FQZTWph5nMOcgWABYucpAIBaDlsTxqRbTRPjg388NGYUJUKnznNFUdy3b3e7duYpj01YuGixEfgvWTJ79e2x5J3PPG4/Y5pQNWgMJCenaLpembsJQDTnopGVU8gurzGbpY7KrjM0lnYA0aryNggRsk4sFQQzFWS/P+D2+QkIIdAZS4yPi7NaIVpKs3cQKjVo8xCAUaMf3bVjh655oy/t8wXXbjh9W8/mkRYARSXlQpUnJgJKaXFpeZ20FIP0lNKS4nyNV3lsoyQlZ8n1UsNGAKYHHZfXiabqSdBXfpTp/tTmE5kWHpYOZ6xpg4UKV3+4b9VXs8pLwgUYGOOMaXFWU0r91Aofhg/vdl3urKCiAThxIudn7zPFuEraveaq5hzXUVXklIUSO9vW3tr3eofTm1tVHjkaWdllW3ed2b8nphm4knYA/Bl4eOCjq9Z8lJSYHD1emeZLbPyAK2/z268+kDNtwTbnO0QpqXZFcB1EqqVCDAAqQ3V0s7772ow7ew5c5ijIiUxGQ4c9IIjitm2b5s99/iljC1RCdV0dOKjn3u377xjaP1iz8i8BBeeMqbSm5y0auq4TQiRRUHSAsiiRHEZE0LnK/zLOE9I0f1CJTFWUUp8/6PL4MtJSAHCuhZRKSU7Qdb1vv75VRwMA59zrU+7sF45wNFpKy51Xcs4ApVRRVVmSAJSUVdisscZnAz3t027uNQQAFa2VeZuiOWeACtaKi6uTGz9ohNaxGqVEAc4DnuLe/RrmZueXVtX98PmVJauOvPXy7ZWucEhL+zb1jP8kJVqDW9/+FhMIaok8QhW5AcDSIDwXc6Wp+L49ObH/rZ38gWB0dLqBpETrT3vOXa2idS20A/DzcTzV+7G589/LjCqkCoCA2FJuLK84cn2zytxTn50J3k9CjmoXspwCPRAdLhEB08ROqb+17/CYszAvRgHSNe2ddz8pKsxb8dG7k6bM1HVdNKW3amfd8cP+P4+dbt66UbSDzuOpVN2nIpzLKyhkjGmaJgiUUKFZo4YcMIaKxxu8qU+TjfvrUlIcOTwGzoJDRJCclW7DKh4DURBKK5zpKUngvOjid6kN+ljjG40aM5m7tkWki8UsPz3n2y+XjyotcwMghJQ7Kq/GOQMutzcjLYVxfuVSPQKJ+Pr0u0tXK5053xAqESC/qIgxFgpplFJBEARK62VmOLLXpTSfACA+vkaQi+a/sPTdtVOfedjpcvl9flkWP1l3KBAMvf5C/wjnotGscdrzsxrISzp97d8V+5seqQeqw1K/inNaM6xvGlrxynOPuj3+S1nZ0VWLDcye+9OPsTpwNWqnHQi+3wNy2/Q1n2+KMbWb7I19Fb8++cidp2asOo+hjInQ3BCrDO6CBeBhi52cZuRvAugRN+c/byypPgtAqMQ0X8TOVLdeoz/+OLlg/pwXZ7+FjD7OnK8feHjQ6qU/tO3YMjrrLqiEtGAxAIHScxcvGYwkhDDGwbTT5y8kxleb/jnnUaKtujliGmVMFQSpVs4ZoISUOyptVovFbCrL3V2v5T1yXOqilT89dM8tRofi0sqMVOr3h9ez/2RPVca4KAp5hSXRw+lKEEI9xTsJlQAUlpQoStWcyxhjLATkFxbVq5vhrzgWZ+1mtZiqn5SIXq/bbKacMVUNEUJWfv6LxSSOGNkjEAhvi4qaZeYBuD3BgFOBidZU0Ak0Dzgg2iDGh7VPzqGW3Ri/Yvzj/d0eP2PsSs4lJ9r+dqPp+AAAIABJREFUWBjTVgNXoR3ABeTfC7PZ7K+5mGK6As78AbXnTS1CRyb95FkJPQApEZxxCByEivZwBgqhkNOhlHBCTMRji4uLFBaloq0iay0Bjyg0nGkfLnxs0tQPnnx87Nz5HxIiZjbIpJTXrZeRfTkn8oI8bj/X3IIgnLtw8crPJgqCx+uNSBEqUIP0MRCj1mSaVmNQWcwypcTvV2w2EwCvTwHg8fpsFjMDzTu7rmnnxyMlAQDIkli/bqLRDQjnxxuIs5n8AdVilgF4fdVloAgh5U6XcfOUEJEyUAl6MMbjqYd8xrJaFEWfz3/lwyqqCsDv/IM06pmUYKtiHVc85zeu+75F66aiKDocjqTEOFVVn5821Gq1cF5dYhTApcvZ0RK3522NNx9IpaTKRkgolDJwzs0NOVDt+FFLOE9KSItr06J+UAkFahaSAkAp2bLzz6L3Yppr4Kq0A/D7VNx7yx2frv0mpt2e0ddTsvfeu286cWIN94AAzOfJtP+VTM4ICHrRIEseCrWUAiAUpjo8QDPYycgGRQApPbdYlJOjOUGoWFlRtPL98dNe+DTObmcZvd1Fe+4b2be4qFSS5IgvweEoE0Xx/OkzV34GA5H3aI8z79ubBVrLjH/ubPW06/FVD6rSMteGH04gAFGApqHMj9kzexm2D39QMZtkQTB7yk863V5JEgBQSj5YscVsDo91SiljzBC9Vov86us77FboGnRg5MguddLsakg3joqIrvNZJce0lZBUyCJCDnAO3QeAEk137RclE4DikqvKxZzc/KZNGjtyvkxOtnOAcEYFq93GHOXBEeNucjgr01MT3lm6+6OFkx1O75XqV5uWLU6fC1f9BqCqeg1Rp7mYntTCvk3CTpm43bxxvnabxiiH3M3+9pJ3Hrt8uVgUhOKScHVrA5xzURQO/xYxrNaOv6MdgB8OYNO7nw0ZOiLaKSTICYKUoIdcc18dV/jMjERL4IFBbe/s36G0TAUoIYV10tbu+eXs+i93rPFepKQYlnohzZjyAMBfcVS8inGy3OGePXPo6Afv6tr9luED6mbWz3jzpbVPPjuU0PCDuVyMUso5J4S4vYEvvj560P8qSKiP7fWevVo3bZwWWb1fzikXTQL1XgZnkTRYAATsiGlVUmqas7xMNCXCH9a4kxOtDy4f5WDtQDk4IAB2/YNlvZ+eemtIYy6311YnVWfMUXh4/y8VrzwTLlFY4fTNnX2/zxcE4HC6CCH2OPOCJfvO60P+suwDp0ag1s6vvL1Dtz/7VB9VrRauoZC+86c/OQKAAK6FFRUpAcBO9Zt5797w4qzRkiRWOJySJImUzn9/b6H1oTK90/XywpCndOYTvRnn5RWOBmYpNdnOuWayt6Tq8ddnrx4/ZTjA9/5y4sixktWLJhWW1GIBBaCGQq2aN7uQddn4s33ruhm//1TKugDcDO+ojDsmTRzeuGF6pSsASLJckmD/bsTYJZ64Dv07uy9fThdF8cy5cBhVBKXlni+OHd9yILqtFlyDdgA+XvXd+KkvOAvyohupaNNDLlXVZDW3XftGXTo3LC0LB99yzotLK1s3z+javV3FgR4/KpuiDwRArr4INfDBW2OnvrBa4q0G396lV9+mZ/86f0OPzoQQs0nWGaggUEpNJmnt6oMblJOUZYGF1jp3erb0mzWzbjAYlotuT+Csdh8AEIpQJaTq8gjl2g33D7n+yw07S62p8ZrirHQD+OXIJZUn1NQFhT/FF77a9N7wu7tUtxESs2o0pmlKqapplJAtO/4q0rqe8E6kpmoR5WUt7FbUdLvg+21/5vP2qC3VgkIpctfIs3xv2d690ha/mkoR+t4/MEE6vWvf9L692tQUhHzfrt+ogJTUJErw9easr1dPKCiuUQs6BjpjsiypagjA+axSJ28JwEKct4UGvzHnUbc3UOkKzwaqqpVVuN9bMOqZOZ8//shkh8NbXu6IEcOE4Ktvj/94ldVrNK5Nu5wluPWG7nuPHoxyScFep3fF5U8lydy6ZerE0X1iNCQAhGDYoG7H/1wnlCUwuEOWBFmWI7pdBJUul8NpBLnAarVkpKdTSn0B5ZVZ9z/5/Jcj7rnlzqEDX5y29OY+3TVNS09LUEPhibms3OMhjSmphJQKpZAS1x/CzHnvvzPt0Z4AzCZp89YzPn9niBRgYAq4HgmBpsQrQF63dvmdgx7M/nOpITsDwZCb3RCz7M3Wh5aUvpmTV9GoQYo/qJhkCcDffEVJFC6cK/vF/SWl5VA8kNNAKMABTggUVYsIY0kUiks9u9U1tPbUbU5FyR5nCSohzrlZFn1iy6CaSGHYY30u1jivwAGgtKy8UYOwLCdE+vP4uRFjB6mqmpVdsn71eH9ANZSEsvIKt8djzLOCIDSoV+/K5TZjTGEtQLy38VuWvT/e4w1c+aCEkOQk2wfLfxzzQB+nqzJmMb5h8+/+DuCxJ64F16ZdXm/Qd/jrzz8zZeq0yGWY7ren3TT58Sc/fHuir2odFwNFCb3+0gg2s8NqxXlZH+5yOS0WGwjhVbY9fyDgcFaiSiELBIKXc3JVVW3dsoXZJM2bM/zukSu+XDHm9iGd1676+oGHh7VpWd/QxASBfvX1ke2uLdTCQQBTBpSSvOCwrvICADab/NbCneeVB7KDN4JdognNwXWo5eAa5DRQE8C/CvxBvrtxxKiJ5riGqaS4tMJpjzMlCIc9rHHV7QMAhbpJPRzc1H3aEz2j22sFAc5cLF7nPERpLgCAQy0FABaCOZNzmGTRCBCqkxb/7Ks//Eh/vQrnAPAfgtvHP971s48mpyQn/Xzo9F51dbUkVssp170+JklCRGOmgiUUKOlxS8eUtOQzF/KXf7J74eujCYEkiueqvBTGe2aMZefmNm3SOJoynPNDe3OoqXSgNGjOU8MU9aoh+G++NHLo6OWDbw8LiwjqpMWfbuTbOz+67aq4Nu0A5PTD4S8OPJ/wittdHaUj2xpIkhC9RrsS/oAqpac1Kpn3lzrtlwOL+vW/C1ERHAWFRTGaAQBZljUtJIpSRnpC186pVot8U+8bD+w5rqohURCMJyWEGBVaECwGESDGQbQZ23pxzt98Z+eF0F3nfd0AAioybw611WfcTokTIScEK0Q7IRXrvBfKb8rYfnj/8Z/nZ6SmpCfH0Z0KEGte5oSW2+9IT4FS24eo9rIyRgg5dPgMpdkxZwCVMvSvPIGwmExMsL7+3o6grTsNqIhaVDGeSEn166VQysz9pr205oXpwxrWTaHQdJgAgGtgIRC6M7DsRfNGvz+8kCREtpqcGfXqiqLw8dp9qxY95vL4NV2/cCnrypdMCLGYTEFFAWBUrkhMsOqJbTOVo4LiTE9LuHL6ikBR1AF9GjC9hqwxyeIb724/VF2u8xr4R7QDcGQ69u/b3vm68A7mAABOqHQl5wghhrk/pGkAnp7c3//iW59h0ndff9Kv/10ADFuUzlj067DHmSklHm+QMX45N791i+aKoi34z8jnX/vs6ceHJCSJilItGPx+BRwACU9hmgdcB1I4w9mLxcW861n37Yjk+3AOQrpa3j7qfY8KZ6H7wXVIiZRcPJ684o5ePZcvneioKPX4lKHihI+V2HApArVA63n81Lo2LWtYzgFwxhlDeFsjSgBU+qRYzgEAGpt+GDG0k6rqVqs8Z/5PQcvNu/0roi/EQYZZu34b2BkdEXQ4+L6VTHx1/ldvvXwPvjGEHYdaZlidTMRdc75n2Vl59RrU37rjt8yMOI8vCEIuX84WRJEQEh9nBoHPr0b4VFBcnJKUJAqCPxgUKM0vdP6qPNZZenfRG6MjfSRJAufGd4wgpOk3Xt8i2gENoKDIGQiqSrX+fA38U9qVdcSCyfO//Pq7KDtILQhpWmlZmc8fIEDjBg0kWUpJtis2MS241avJ8fGJbnelLa170H0+cgjn/PBvWUf/KOAh1G1g79erZVKi7cz5C21atsgvqNh30HH/0PKHHx0R4/Jz6XaQKHc4EerJ35js2LYv72jFUyA1xiLz5PjM6c2tC7OUOwACpkCtgKlOBWt9JG7VpCcnNG+R/uQjtzp1xNGTfl43+lgA+dqQ0vLlbVrGNIMDggBuxJiAnDlfpCE6visC3hQHM9N7CyJd+dmB49qHBY42VLgEOQVVBm0bKboyvpcSx+7AijrKyUenPyBKI0Iag+aNWDoBHDmW1bRRimHAE4XQ1m8PTp814pvNf7zznwc455ezcwyP9obv/yjIc4MjNdMycdQtPp8CgEXxxmyWPvn0UBlblqJNo0IvzrgoCHmFhW63h1BaPzPDav27BFDOsXbDiS27Y9v/Bv+UdgC2/IJ7xg/pLLV87oUrq2UAQElpmc/vB2BIu7zCQgAtmjb9aOEjYx6Z/H1gw33Dhw6/9667Bz/I9aAoWhhjlNI9B84vP/O6g7WBAF5Il6+r81BCyynjbr1wKctqsez+dvKoScvnzr5nz7a9D0+4L3ItDjGmVkxhqNt6x0bmuRzDOQAA6UDWtuzcYvnv9cu0DgAB1xAsAFCJxJ/IJlxO+fAl3t90aAAZuymwi4ABPDIDUuI6vC/77gHXGYHgEXDORYFELLCnzuZtL32FsTwARI4nslHGQbzeutInZfZ/7wkOamxoTIkDLFI+DAC93XKvRMEVBzF0BUEG4+AhipIySNvxDdM5hT+ac2DBkMbMZvOyj7ePH9n31IlzCcmm7rcv2fPtI16fcjHrsiyLu/adv3iuYJ1royFEWY7VsfCOp568TVG0upkZoVAov7DIYpY/XLbry8BxjvRxE/uD43JOrjGnGe6H4tIyi9mSmVGdIR+9HCGELF657/t9Nb7FNfEvaAdg+2oI3c/HJya7q+J7jWWg8X9/IDwPmkyiJAqG7b6wpDg5uXlIBwfZ7ltMPhublt60Vf0Urvsy6tQpLStT1JAZZZw1J+AEALtUHOzwwcrd0yf183r9bq9y14B2L7yxvoEZ9uSE5CRk55VxwEqd4GaQatH792WpfX4MHj4k98yra8p+oKaavOQMahnjbFtgIYOZCqUgMkABBt1nqG9EMnI3dQCEwDD8AtVRdGaTWO4I8qpVHFfdIJTISeDqb94nj9VmtY7ARvyzX531wfsL4ah6BD16yc8BQiM6AyFgjLMg0yubN0lLTEjQdd1kkn749uCb702v0/iw2xvMyc0HyPa957OyXOscB6lQxW9ub9EyUdMY5zwUCpnNZl1XP1y9/8vAn5R6O+GxRvXTjAUvIUSWBFkWPV6FEHi8noZSPWOiM8nSxu+PPDqmR/icwKXRf/fma8W/ox2AbQfwzaoVA26/B4CiBG02c8QjadwugKUfH/RWBl+cNcDjDTqdlZVuf4cOqT+dkAKwbmefJK0a+/6KZcXZ+xPi7QWFhaPv6375zRc2KjtI1bfZ45nTL/6pxSt2TRjV0+P13j2wy469pxo1Tdnx475BA5rn5pcScIkAXIrSyKsQFUBfDS5qDF26dwuZEk3smKo1IeIVswahAChUMKA6A4gY+lO5pf3RPy63b1MfACFhtRUApcS4miDQYBAas0VGAlcqeaCcWNMJD0BMAABevYljBJzL18e9nJkxPqa9FlARTGP+Emh+EAEyMtMSDJsI56xu/ThZwHUdm5tkWVXVhHjL5ayydWUHqZATOUGSeKpZ4wxdZzpjnHN/oHLRiv0lWmfKS+B3MKspNcV+8nSx8RHXrP+9stg9aVJPQ+pHnByCQM9edHt8CgBCyXtLf/5rf+QK/xT/mnZMxEfZ6+5JmOBxVS7+8HN38VaxpgUoKcFqQvCL0i+tix/s0qVJ+zZ1Q2qIEAoQQPBz+6qK77wT7vMH1M+WTWrfpvWJU2caN0u6p+D2Ta71xhkI2E73u3WlXx2L5z4xoUfrVk2XLhivhvSZk1cPHnsLISTebr1iJRMGoSZ+ReV/cNOAO28svJi19sul5X0f2u5dxFFOLHWMomD/BJWhZqqWk5RoY4yrIdSpm2IxiclJcYQgMd7KOF+99uczyn0gNUMBqMiDDgBcMSYHXlXpsRoZ8mWbcCoUCg0Zdn/2iok7S2fFdAiDoDqVocp7q4TURg3raTpb8cFnM56fNPXZtS9Mv/Ps+QuXcyv27jv7tWt9NOdksDtMjzVv0jMlJTnebp+7aLOrwrXB/SMhPsANKrbm36jqxKCi2Kzmxav2f5vzdlBLfsjzfmK8RRAEh7MyId4OICevVJKgacxskua+t+vUy5Er/Av8a9oBOPgcXps9/dnn5+q6tnzNjinjB0b/yhjjDKD+9QULVH1W5/YN3G5Pr+5t3//TqXIrAArtK8eWDPnA/eNebdY05cUZg9PTEhd/9FP0SQj0AvWWNNt9ASXb7fJKgmQym5JSsH/34cFDevEYR8G1QTRNJwRFObktWyZvP0YBzv0lXJCprd6VEuhKZKv9tv40dd2G4wCaNkLfu+aZzVi58bw9DhNnrANgs6Ik2BJ/O9EDxMimjkbPzC9GPng/IaRNqxac7Luyw9WQIBZLkpiYYDt8tPjm1uTCpYIz58sclZVmk7Rzz9ldgXej/R+M2/omjG7YNL1tm1aapr2z5IcLFc32ut6ntDiy9A4GoaohSunJs4UuJTUIPaI967qempxkyHhK6PUdUzjHwaOXzGZk1/j4/xT/9CGjoSTg1KmTZ8/+1aZNx/IKt9Vi8gcUVCk6Hp/i8QEAg3So8pGbT23v1yvlxi4t2Lu5MDcDFQFKibs4dEPvRGzJm5g/a15qAhjoTbY3D/pejHw5SoLHfRPWfn77jGl9kpISX3z989EP37ppw94PVuxdMn+kziDRkhAssSmxRjRHTSSYzk8YO0pRVYDMmf3SJ/eWevUUEAIWYu4sUJHICUSyAfQqvCG3sanvv/82oYixkUbjiSdmbS57K8RqXcxeBXq80+G+e9AdJSWlnHORxHpxrgIKsOvi1lJ6N+eMCuh1W/d3P/zh7oHNtFDwzUW7DmsL3HrD6u6cpWlbLShzueRHZ6zUuXzMO6GYjKdCrjGBRuBye9SQtmvvma0Fn0ComUlZNb/MfX/zhJHdrRZp9/7snw7V6PLP8d/QDsDO1eBjX/jy6215BTxYFU8hy7KiKIxFIoN4ke/GHbs/GnJH1/2HznA0Zf5iAOCMxtUzCz4QJAt//eDfBD9pZ/6iielXxu2UVGvflPjO0PHvLlk9/z8PnTjle/s/HTZ+vlfVmNksd+vWrOTga0GecDYwspI1IFXkI+ZkXjPPAIBI1Dh7nLc4V/U745Mb90l95/uSN8JvnFBwxhUnV5wAiBx/pdrH9LQKjuSUxIqK2jMgDTRoVAdlVyVlbeBUdEwcf1dpmUNTPUlJKcliKaJW0LVCpr4Wtn0laisO1ElPO3jknNWCxs0auTxHxo3o++rb62VziqOyLSUBACAC9KAYzLo+bX2A1111aqrKbOB0eP1pm5wPxJ4acHs8G384lhXoEeYcF43nSYiPD+dJUMJ0xNvNs9/adXJF9KH/Dn+//rsGhvTGtz+XNEmsc3DnhGBQpZSev3iJUnrg1wtL9w8vUVoAaGT7ddKt+xWFvrLj2ZoLT21G9wXlJf5PyzdTXr3hYg1QtOcbbkj9IqsQyUkYdGe/QEAb+dAwu90OguLiEkppYVHx3Dff3VD0HrEkEnMqWIh5qhUaAIBwT+a0RQtfKc75JTMzpaiorM119zw1adLn2fN8Udtl/y30m1M/U0uOe70QRKSlwOUJG6rtNpQ7QAiCAXS9Hl9cXgkam9ZQO5j5oXqThtx7V7tm1lBIIYSnNbjJ5XL3eVwrDdW9KvO01O2vb2vbui2l1CTLCQkJlNI9e/dlZWcfPnz0wCFP9444ERh2wj2YB8qjd3eJAhuS+ewjD9/36uqS3/1TqpsJbcE/3rU47olZX3xb8gGIDsK6Jn25cHqcz6d0aNvasA6u//bggD4tn355656/L+l5LfyX0s7Adz9j1sRu778/rqCwIiXZDsBmtQaCwVCItbTvMWgXJ5QDwok/c0CiVShyS9pKxsiQYf23LPrOQVoTUxIEU82kbok5g60afXHvQ6P73taTMeZ0VhJCAsGgEVpIKRUF4bfff5clgAhcqeSBUmJKqT4DALDW8dsmT3rYWXqqbmbarUM/37b+wfycP+8bOz537rPblfk6j4rLvQpkAnfO8aOHlsuyNe/cD9Nf/vK5SU18AZ1QrP4md9qk7p3a1mvSfuiw4WN61Zm/r2xSRFuqHURHsMWgJlMeGHnfTT1uKsjaU1xamZhgcZedada6Z/ekJzfnfwE5ZuREQHftPtDzpluclZWKqpaWlQFo06ZVmzatHrjvHrPZ9NO2naGvN1hYziHl4dqfS20QL4Wuv74TX7UTVATTAc5Dbh6osCU7l6z+7bBnMggDALVeS+mIqvayWi0G5xhjPx+8FB8vxTeLOem/xv9EOwCnTmePGH/9m3NmLZk/yusLJiYmBIqD9w6+4eTJH8Mdyief/Wu4zQzUtMIn0JyuXfsOv2/45+tnbMp9g4fyAQ7RVv2yNH9m3Ok5Lz2XlJRoFFKIGAgtFrMsm/7zxjx/IFCUV/x14epwOCeVY2bY9vE7Wpi2tm+/sChr954DRa1bYP4HWx4d07tpo3ZLVrwybeosr9x0T/FzoLVkGAAAl29Lf9uqXN60e0V5hbfw0kZBMg3tm1lSoRj3MmZo/aUfH3704e7W1LLPP1myfNUay/5l24pmgqixq1oDXOiXtry+9XTfO+/ufmPX/IvbMjLSZs7ZfHvfpgNulSsqnEPv7pmya9jHl1ZBiFUVAEAsLc29/MT0mampKTd1797rlh6arhvTn9fr9Xq9XW647o6B/e6+dyIwtlba9ar3QmJ6hiAImeIvrOheyBoIha6AisfKH2904UFPKNU4sFHCVkcQnCM9LTyS69VNGXX/jeu/PfLd3uhT/jf4X2m3dT/Um6YOv7P947M+njfnIbvNls9YhcPboKEd5RJICDRIKbYVPxpzoKaz/n37XPjrl05tU49WHM4PdAR4jdUAEYo8t77++php06es+ewLh6MyGOQWMwJBWK30+ScHDRnQvEHz2z5Z85k/NL6cX/9rxaMABzRABNGa2H5pY/ryP3OeyszoWXR595E/sjdtPfXy4ze4verCpdueny6rqrZi5dtqSD99av+mbzd4vX6Hp3pqEwmvm2Gd9uR0q22CxWz+67dNZpP82ddHKl3uvj3SNS3Uuk3HC+dPBRWMu6fez/uPX9e+YYlPuf/eux96QLZalAmPPW+zBEqd1SNNIDwjzaSq0quvvGCPs+Rn7S0vPJhf5Hlx7k+TRzbYc7jgvY+KnnlCuqlrwyGD3w8+OdWvaltLXlX1RICDaOCihfoH133Rq8V/+MYrhArZZ7ffP3JaZjp1uhkBTCZQSpd88M4DIx474p0RM8jD0BMy5dxXZs8LBHzU7wfsYFFlLqgrToaihzeBSJGzht3VhnMuSzKAOKu5z+D3+/TM/H5H9RH/Nf5X2nEBZxaiY2HDH3ecFASq6XqdtNTyCkfD+inica/GTSCKQFDs7QkxWoGjItUAOEtPvPziM0cGj8v31aYViRVHKu+dOXd/psn54QdzKwqPfr/99+Qk++nzBQs+3Pb6C8NEyTRh/NhJj4nz3l6UenKSxYpz/n6NyE5NR7Pm9aY+8ZLNIhXnHkiIj9u8/dSrT3ZxeRRKSXycuOLTnyeM7FmUvQ+ct2nV6brX5goCifaKEoKQBjXo0hRnQeFZs9k8ZdbGxvXFAbfU0XVus8Vxjri4BJ/Po+n8xo7JE2esf/XZ/tbKE4Kpoa4nLXn/P4RCqAqKBkAATYcSrCzJ3eWSrBaz6ctNv/72Z97Y4fUDQb3HdSk7D5YsWPLTtEf7513a/f6iecs+Wqb88jwlEKzWi77bmpIfZAv6Dbht0J13KEFfWeFRjzdos5L772j42eacN1+4N6lur4KC/GFjFxaE7nEoTWuqNGG0TVo385lJFaUXLNZUxgBe8+vTACBpegJoAOCN6b7rOw10VvoBWC2mj9f9PHNKj9XrDrFaNcZ/if9pSRHBzR2xfOGDp8/l3dCpqc/vLyktkyWh98vdOM0AOPQkCI4aGg+XJrad/sbr84uy96bW677vwMHNG7//svDdWlRpLf2+JhPbt2t81611QUzjpm1Zs+ROl8v/w/Y/Dx5xfLRgkCmufnxSc0rFtLTE9V9vys3Le/KJSZTA7dMrCn7z+0pTkuJGTln33os3VlSGRakaUncdyj9ywjt7Rq/2bRqUOzy6FqSCmJDSJnJZxrTKslOiZE5LTdh/6NIHqw6Pu7eOxSQyxpVg8PouPQIBPyHk3NmTRi5WmVPZc7iCEixbMMrhdAeDQbMlxWKvjirggLPkhCBaEuOtF7NLP/1qf1qydPN1qf5gmB+yTPf+WtatS+tePVo7HOV1m96ekpwgW8zLlq5yezxPTX9cVUP+AKso/t3nLkpNiX9kxpeTRjTw+fWcQt+gO24FeHrDXl98OHPmlm9gzbviTTLCzXdap3z17epzJ9ZLkm3hkr3b8ocWBTtEd2pj33HGfSdICLp9dIsnJo2/ORBQGzdqeCm7cPGKfYvfHn193McVNarA/Zf4v6Fd8ll0HAFJwqSxN9/QucXFS1kA3ll+8KeS6ZzGxgsBuDPjlamPDO7UoX3W2Z1mmdVtOjAlOWH0A49eYjdd9nVz+G8AiMV0sa1tv+TYuXXre4oCR9G+ByZufOe1noSAEMI5r5MWP3bqlv690x5+sCc4DwS8hAi2hEbeyixwmCxxkig888o39TItIwa1DQRDhJCU9Lo6Y2dO/0kIEQRSUh48drry/GXdLOP22xob92a1SP5ACIDPr+z4ueiuPgmpSaY4qxjxi7Ru06E6BY7SkuJCr9dt2PPibeKpS+7NOyslCYMHNNV0JgiUAJrOAJQ7PEeOVWSmo22LxBvaJVS6w+t6i9lsLJI4hyCQRWsK7rmr2ajC8XeUAAAgAElEQVR7exSXlHDO4xIaMRYKeIs4R0ZG+povj27Ycn5QH3uLxuHZkHOs31q4ZN5D5eUOc2Kn2XPmB0haRbDlkbLJRocb0z9obf01JCV8/vG7fxxem5Kc6qz0nM4mazae2lH4PGhtoaZ64luD53Tp3CgjPY1xunjFzpdfuGfExJX7jsV2/O/wf0M7ALc+hc/uHzdx+scj7umSniZLorhg2/59R27rW/dAZqLi9eCL/MVVWjYfUW/GwkULygqO7Nh7rGnD9MYNUwXRnF6/m65refmFxgfmHGmpyRaLxePM8nsKpr/0/cszb9V1Rgiat+594cxeQgilRNN0pyvw+frfZRPq1kngHITg4mVXUMGT4ztnJotef4gAnPOktIz0OvVKK1xrvtjmD6jg4X8AZJkCCIVYpUczLp2UIEoiVdVYDYkQIslX5IJwqGqN8AJBIKJASh1hdtqtgsUicA5d57oeLnhPCOEcLRon3tA20+Gq1Koiuzjj3oB27rL3zEV/q+aJxuZHLo+/rDzUrJGpa4dkSaA1Eg8Bk0w//y7/tl4t7ho4wJbUJD7OevrsucivddLTEhISXM6SiqLf9v+atfvA+dlP3dWp6/B+t084henlamOjW6u4gz3S17sDqNCa/lz45ltDn+3SuVGr5s3mzFu/eN74/vd88NsBKEZUzf+M/zPaARg/zLzgtYf7Df/o0yXDikrKP1ixP85qnffWS2azmVKSOSygMivAqZ70yZSv+ve7tST3wIQZ3ycnYuwDN3Ru30DTeWJaB0E0C6IZYEwPAbQ0b7/ZbNq6+2Tn9nV1nRMCzli76+4O+itzsw5GAoFUVXN7AgBUTf/muz8IgdlEQhpnOoIKQJCYaDHIRwgRRarrpFXLJrf27l0nPfVvHA//n6Co6p9//rVz917OwTnXGTckqc/vV4IQBMgSCAHnUENo2yKuYaYVgMUkSFJ1XRvOYLdZgmrICECXRPrFD/mvzrpbEMTE9A6UyoJoAgjnuqYFnMUnBMrMZnnG7K87t7WXOzFnzms7d27f/N2u9fkfGlr13bbpqz9fGAqFcvPyP1y6tFnj9Ju7Nd+668xjY/v/djzrHXr496nhS//v+F+XFNEorwgWFjvnPNNr5pxNjRsmr1m9KBhUjC/tcDo5twGE6nEPNRo7dOiS7DO77HZr57b/r73zjo+qShv/c85t0zIlbdJJAiShBUjoGKpiQ+yI2FDsrr2uu6trL6y9rbuurq4VVFRABUF6J4SEIpCQHpKZJDOZfus57x93MhkCImqyn/f3+b3fD38Md+7cOzn3mec85zlP4a+YM/SHTUfe+7T87pum8vxPLIMVRWEYjDFmWdbVEXz21W8LB5rGlwwABJqmKTSrsamZEPLmvzd6OqM9JVkGhg/L1nXA+XPOOvfsM3sJ0wnz9f/7AqdjNpumTS2bPm1Kr+MYYxyXi8UyzLoNm35cu7W6BRBAm8vtbo+qT6MRBmabRhQgjFBYUpIdAgAsvDjn4aeXzZ0zcmBeMD3VTilRFI1lGYSQu6Nr8Vfbm1vD18/NDoe1iv1HPa0VZ545a9uO8jz/2rrgOADKMcAyjKIoOdlZzz/7zNp1G9967xuEACh89MO28uWx79UH9KW2K/wIit+DadPKLp97sShJCKEEi+WpZ/9WWVVrTwCPnCq73XOvnHnmGVO6XDt4jv/s611zpqV7ukQAQAhqGrva2kMCx2zd4xb46B5garJle3lQU2He3NFGgwEACIVbbrxOfzzu9vaYM+8UwZjVo+oBgGhSJOTW2zXFIEQRw245crLmJ6eC0ZwimFJ6HwVgWINgTMFMz4KQaDI9hXCEeKzWBIEXWIPh7bfe1tMNNU37dMkOCjB6BNfpVXRxESUwm1FOmsloZEYV2QMhVR+tYFidM3tWV4DYU0eu37Dhw/dWmHjYHrpvhOVvJSWDJ4wfO3P6VK+3CwBSkpP++JfHd0Pjj+8c+w1+H30pdgsvsr72yvNdXT5KaXJy0quv/ePtf+38+IM7DxyoNxgAIZh76YUut7+9ebOmiqs37N20vfbW+cUMRhYzDwDfrq9DCEIReecePyUwaFDCrNNnKArMveQ8jFFHp+f4vPbjQQj3quGvyP6QL5rkixCSIh5ZjKUrY4bpFvD/FpTq9kPP32IwO1kumu/NMILFkRffzE5Te0c2nBCEUGpKEmaYJZ9/RQglRPvHO8sBgFKYUGoGgNNKkhWNSpKiaojn8dc/uJ579FKX252UNjo7d4jP5/9h9VoAsNtt23ZUbt5S+e4/njabTaIomc3mz7/86jXT6j1xe2m/k74Uuz/fNvjWm6/nOPb9Dz9Z8+Oue26ZNjg/JRhhk9PHAkDI3xQJtkoRL2aElT9W7d7b+Jdbx/9z8b6IrNU3hcUIFBXar5w/V5a10yaNAwBZkUOhn9k8AACAWE1qWewK+ur110STpR6pAtAF8cS7k/87oURToisdAISwwZQMgAAgwTGQ4/XVKyXHlsY+IQ67HQAIJTt3VXyzbEX5nhYEMCDHaDEQjJE/qAZCzBvPz21r8wpGBwWanD6GUuJxVRLFq1F0y31fFw9PfPXF5zs6O/fu239/6IOq63vf4jfTl2KXWgGlj4BrMux+CMYsgJF+Y0dnZOqkQZPGDQYKLItfe+cHQjR3u5aWZiybPHFK2WkUaFJiIqX02MwgpE+dlBJCVIRwl3uvpkkAiBAlViQqTiX0ASefrHUrMN4W1JfMMRCKfuefpU8NSX1SRoAxG91TZliDPWU4pQR3p/PFlwiKIfA8Bejs9LS5XG+9/R+jEbvcoSQHm5frPGdGMQDUN3esWFXp9ck2G7fqaSWQDdOuBs8Y2PFo70v9HvpS7OIZ/yzcwhQv+aoqGIKyyYM1ot171x8wZsRjCwQhxCDMUKJKES8gIKrsde/FDPs7RQpjHBMCopFeVYmC4YjP19t0Qyi++GnfQyntJXgWs1mP142BMTaZDN1n0V5Jgb+WqEYkWmJGKQCwrJHlLZSSXk0EAIBlWZ7nXnn1LUmWq/YeCYUgK5Pr8CqbPoVAdq9z+4a+FztjB0w5FyQJLrxgYpoz9eKLznO5OuI1AWYEhHAk1KopkiR2RgKtCGG9dPBvAGPEMAxQoBR8fj+hBAACgVAwHJ2gMULH5yefnF/UXKcKhV4OtpNDKY1573iOS0qM5p1aEywswwIAofT4Wq2nCCUaIYpgcJisWZRSiz2XaNLxGjHR4RCMhpdfecPlbt+8udbphM9X9zqlD+h7sZsxBd57+cnMzAxXTwkqxHAGoskBzxGEcMjXoGmSLny9PvuL6O4AAOjo8OjlECVJ8QcDCBAg4I4tdKxjEFi9LpgOpVD1U6vPdyLXfDeKqvUuy/pb4Tg2bmO2NxSgaFBKujOaiaMfEiVVOTYpX1U1XVPyPGdNiJbkSXLYWY4FAEXprb1OBVUJma3ZDGsEoLbkoQghvV9PDJ7nHXbbp4u/vGHu8rAz/p0+oC/FzuCFqWfDv/+1CAAHvXWy1EUpkSMeABTvLzgVdP8IobS1Ndo1W8/AjZ89MUYMxgDg6QpvK28A3cYBcLlD4QjoWoYC8BzMmJiR4jACACHg9mtDCtI7PYEOb3jUoASB75bU49USQieVmZMhqwSg+wvFgwAAVJUc7RRlDTtTHa1tng6vmG6P3mf1lsZ2jxLTaCYjpKaYcPf8bzLz0ycOopQCivZbAoh2S8MY6w4ma4LZak2gtCfX69RARJM4gw1jjlItOWM8pSolGkLoD3c+8MWa3mf/TvpS7Ma+ADMPps6/eLKmygjrqWK/TEyMNEIQQKfHE4lIsqoABQDEMFh/8rKiUQoIo58Ouw8dcQOAomiKQhkGEAKM8ekTc5LsRgAABGYjx3E9qlRVKSEkKIJI2LIJxVv228YXdfEcrFm/OyORpRQQBnuiU++JAAAIIULoui0H122pPV4aTwWHlZl7/hiTie9lz1E5AlT1BrVUZ0ZOTsbaPUkzRnWwWNtVXmkWEACwbI+JSQgNBGX9At6AuGpjA0KgakQjoChgs7L6Qu3M6YUsgxECnmeBUkKjRiHPc0DBZDI6HHb99wlwqgsbSjRAwHJm3uBobpMf2/3ehmd7n/N76Euxu+ES823Xzex99FgQQhhjWVYUVSEaaXW54/3yRgMHAI3NXRijtVtrvF6NUmBZyM0yswy+9KwCWSFmIxsW1UBITnIYAwGREN0NFr26NSlH11sMw6empTKM/gxpQ3Or1Sz8uG/ovKvuyMjIEEXxzTffuHLqgWUrt44dXRD/MBIshuvuXJyVYV306HntnUFBOMXA9ygIgSwrmqYZDdztf/zizhsn8jwbbyp2eAJDB+cs3110y20P2e12AHjooQfvu6x12fe7spI5AEAIhcPRGE+eM8RKSmKMdbNEtzwRAoyR0cAiBGFRXbbmiKSoza1hSQFNA4GHC88uUjWSYBEcNmNEjA6RrgLTnKkCzxsEnnYry5NgNPAPPLZ09WdaqKce/e/lBMbQb4ZhgP5MAXKOYyMRUZQkRVbcHR6WZXRpYxjGYuLdncFWV4Bl0LIf6iMinDbGxjA4O9U6Z3pKTrqVUgiGZTHsMxiYHVXuj5Y1zZjsNBr4j77Y/+ozZWkpmXlDTlcVCQAoUEXqLgqLGDlYE+vcsH3X/puvnrWmZnBGRgYAiKJ4xhmz6ur3mU3GWFY5ACCErrtj8c0LSocVZbvafTWu+h/K9xmDwMfNVyQaSnri0PWQGUqKsgY4cpKTk+64YfITf9v8yP2Teb7HuAyHFc7ozMkfF3vezz773LZlCw0GQ0+5oO6JQlZ6IgwopQhAlFVBoJUHfZt3+0ePSBN4dsmy5jcfG3FmWS5C2GzidEWyfG1tTa0LALbs9mIE583KpZSqKowZmUEIdbd3UEo1TSOEZmWmE0ISHXZK6Qm3EENh6fbry+qWr/tf6rebeTsMdln+dPecLn8EI+RubyeAOjo8CCPd2EcIWcw8Qmjl2mpJljmW04iWYEBJiaYEszBsUJKikmBI0lQFM0x6Vh7CxoxB0xDCCODZ558LBTsXzCszm4z6PEQo3V7e+Pf3d5VNTD5/1qDkjPHO9AJJ7IkVVaV2VYyahnsPHAkz4wcWzysqGqL/Nvbt27fki+UXjd1qNlv0iZxS+v7izXfccIbfH5FE6R/rV7766tjgz/QI5QC1gtIAMn+cLcEAjtjl6rt8U8dOJBq96f5lLz05U+zWN5qG26WS1LyzxowZo6qqyWSSJKl85T3u1kqnlVCqa7veEa8aoRxLfqr1vbPY+/Ado8omFMTq0SIE73+2Zd/B1msvzMMYmc0JvWZSnmOMBpZSuqm8lWdoi0cOhURVoxYzP3JoRrozQZJV/WqKotqtCZjBiQ67wPOaphFKOZZ5+KmlX6+Pv+TvpS+13ZrXgL0xeNtDny68fJSsqnoBHp7nEAKeY9dsrA5HlLrGkKLCzLKsc2aVMYgm2k3bK2ojoWBKAqhgNNksyelmkzkBAFRVYTi7IoUQQh9+/Nk50wflD5i0ecehZeL8dkOJBtwk8e/zS7OnTR5YXdv26KL1BfkHr7+iOCVrGi9EN5riOVLXtPCKwi93twweXEApra+vt9ls86a1HanuGlIQXRtazIbaOk/AHzGZTP9a+93Lr/fIHIFA4p/vg0BIOdIYWr4RgCpAk4FNB247hHoVxdCAcF1s/qsW+A8AhtsXjjra2pXoiH6rpqOu6VOCh4J8dXV1QUGBKIpWq9VhY9pbT7QEAUAIQhFp0+72g7XSmGLnj1/M9/vFir21P9pfwZSGVHS6788L5k2ub2p/9Pn1T91VcPw6QlY0WaWIN40ZmXPkaOCKGUUZTnNji3d3ZfW7n+xnGEhLYew209kzijiOCUUiANDlD1BKDQbBZOBfeGvzhiW9r/k76Uttp1O4BEreZc6YMthuM5RXNh91+VWVBEOq3crNnj6QwSjFYbSk5KzbXxiSzCGRnTGyJSfJs3PPwaGFORzLGY09nT0Yzo749PsfeiYrnb/w3NKjNeXv5e4cl5X7+T4RAFQQpoefm4Y/HpiXabMlBELifY8sT0tlb1k4c2DhdMywSqQtpu0am9sMAlvRMGTYmIusCRZKacWeqrOHrV75Y8Xo4oG6evh2daUsqRecW9rY2MT/s23U7jQEQCCS8uKjjMMK4QggBAzWFKn9jj9hEm2AwQE6XvJ09v/JNXVSWWqKdemKHYWDopaRxxssHJS9Zm/B9FnzVVVNSEj48suvr5pe9eOGinRHdE6IajuEQpEIg9HXa1oWzJvmTLWyLFNRWV2TcHmb8xqJTQMABPDkGXjpS+NLC5MsZuHJF74+d3p+eoqltwMIM5zR9lN1S9agOYebTX7RxOHgrec1LltZnp8mtHsjBgP7z8/2IQR2q6Ao9OLzhgEFnmP+9fGuFUv7LMwuRt+LnU7pK5D5NTx+73nLf6hcta7xmQcnhAIhYFiOQXtr/ZJ57u13PSIIgtvtdrlcn3yy+KoZB2RZ5TheFzuMkSSr1/7h47tvHlc0OCMYirxu+p5X6R8nown/DKcn9DxjCkgDfqr06qXMC0La8CSb8c331lUd8N576zigZPCgvASzWffButu9gVBoyODspVuyB2aIg9Na1m+uHF9aGNsM+OTLbbOmDU9OSlj65rJ7lpdEQKOgOd/6a2/fCqXhNduDX/Z4Ub2gNesFwo5l4/xDly+8VBTFm+795qUnTw9HoucEQ2JSYqLVnrdxv330oGCK2b1l597MRFa/D8uy/oD3qDv4+cr2IYMT584pSUm21h/eXy/lbR7yHa/SXlrx0TJ8zscRASILvOfOLE1v7/QvemPNuJHJ08ZlxypTIcy4utRLZpdubb26qGhIWloaANxxzxOPX1O7etNem4EApRQxX3x3kOOZe24++/G/rWjJDh6ZA3W/qdbEL9KXk2w85XdC5pdgtPDnnDHSbOIeeWnbH++YCkARy5QUO9dVp+orRIRQOBxOTnUKwhGte4zsNvO3P+z++IsdtywYPbwou7rOdVgazucSACD02KJ2AAgoC9Jm4abPmLvuaL52qr/itoXTHXbzG+9s+HFTw8Ir5eFFzoz0LEVRU5LtJpOwZkNFVsKhfeXNYl52vMwBQJu7CwB8Pp9FNmLdfwOM6/bHnZ+/BkfjMqwG5Qbveiw2dBTghKoOAMYtyaubUZ+e3nsFaDEbOjs9lXsPDx6Yu2N7g9NhzHSwlAKDsSiJnd72D79pzc5I+OD1+R5vOCJp6zdVbJxQK6iE192Bx3LL9ySsAOKMi5K2Dj+S6xxU8sZzl73z4foPvvrplvnFnq6I7j3geGHF9sSiMU4A6OzsTEpKOv/cifsbO3y+sMOWAoAsZoFj+dsXzghGxAvOGnHhrb+10sQp0F9iBwDz/KMqZlYFS4RZr40cmOfkOKx7OJuaXS1HXX6/X5IkhJDBYAgERI5BGqVUI3l5qbMueuGdly4fVugEQKv2oQ3FG21hElLgiBcKE8EbQFkpxvML4dwCAIDXl9WsqWyaP4IblIgh5Yabv2v6a+dfRowYesmckRfNLs7PTZl347v33za1cGC+rKoWs2nmlLEHDtc67AkWs4HjmHix0/fQKKUGQNsgPAqMGlCkIvcFd2jgYSCJG5AuNuxjIDk2bhigFVQXKCeUu0BiZFDqCULuOI5RNE0wcK2tzUVZZoyBAlBKW1yu+pbQ2m3+txZdLIqKLyDu3rXzwcYXLp+YO0bZBwDbW2iICIuuLBBY0Ai8sB0iMvhF0tBFnWZIMkUWMPWlh7+9lt57xcWTUpItDz/5dV2T74EbigHA3e45a1SEsGxDQ8OQIUPcbrcvIOckSvv0BgcIbn1g1UdvXVT5YgP63s9xHPRdmNPx9KPYXXLQskETUyvUo2u78kucf31+6c0LpmgaCYuRghyQZamrq6uzs9Plah2TX7urqiY/Jy3daR8x6YUVH8/zdoU4jv1+1epLnvRfosILW7WQRM7MRbUhfrb4+Yav3U/L8KRMAUCwGEwC+15r9KYqjZMkBJ98uQ0h0DRNJQQAjAZh+cpNE0qLxozI9YdCq9btHTe6pzZsutMGAElJSS3OcDEw2yE0AcwqUABgIBGAKg1HGUiE7lA5FtBhEINATihzAFA5u7XYaJQkKX6WlhXtUE3LaRNGZacnEEK27q4Xg16bCWGMKSGEgtkMZpMgigpQoJRJ5IMfbI1aqACgEjpkbQVQAASCQAvSEzKswnWmsDvMbD+sfvvY+QnGc3Z+/EZ5Vc2IIbn3/+GMNrfP13FUwGxOVoosti1ZvPziC2YdOnQoOyuzeu+3wye352QlAYDVajx7ZqZ7j9+wKmAmGEvaeW+kLrstTsf3Kf1l22UfMhwYWbJd8gBAVyrKfDrnH8vWXTV3AiEUY9zY1DFxfMlPTdaqWvv86fXle37Ky3HyPGsyGZd8vbOppf36q6aYjULV/trvtWsrDfOCOIWjIgA0+Gj73WzG1e/2vh+AShlM8d8nLBo6tBAhtO+n5q++233TNWUmo8mZmgIAgsDtqjg4fOjgBnXh2DGjA4HAd0tfnDKseXfV4cKBWQBwtNX778+2PnzXOS6Xu/adQ4Vb0ghQEnXRIRaQFbAG4AONAihA8M/MrToYUOXDrdMnT7EmGFeu3TM43wkAGCOM2LZI8d66xIcevAshePKZ1x689NCmLbsFFgEAxtjd4V6/syMYoffdehZCiGHZHRU1d9c8w56ozEDEL91/bsZry/fq/+WwOimp8uLc7QUDMwHhbbtqtuyovvGyEYS1YJb1eEMTxw7xBbkvt2TNm9rQ0NgSDAUsZoMgsIte2/DK0xdvn1GRrGAAEIHkZNiKW3Yec7O+o7+03TVPZAjdO/3JbrJvUdMNT03v8vl5niWEZGcl7tpdKUpyJg/bd/Gjhufrm9+Kos2/5LQj9a6X/76aUHXh/KkPpq/fe+B9vy/8hOMnCw0PsKHMV1VJ0YS43X0AUClzpnPLRfm7hxQWdnWFF725OjXZetdN0zIzcnTlhxDaUX5gZlnhn9/NeuWFMgAQRZEKRV3hrmBIZBlG1bT8vFRFJRih7OysnePKW71e5092DEAACFAVqBgXEnxymaMA2y6vOW/KbErJlyt2T5s8UO+oGRGVIUVFa1Y577pzodlsRgg98+Qf335xoUGFzESgFAghKUkpU8YhVSH3/XXZ84/MFngYNyr/GeVPd9a9aGP80bQzAABQFG3Nk6dPuvldR5LZr5hzzO5nSv8zfEguzxceOHz0o8+3lI3JvGFusUYIxgyl4LCbN23bH4pIGey2LdvZAdlJFrMBAFxuv0o0yagmUia2XvlZHd4X9JfYycaeJ6QCEsKQaDd9tnTLnLNHU0opBWeqjWEwpaAqpK6xjePY7IwU3cTJH5D67KPzfb7wB4vXO5PNI4cPGDu60LnZ9obxg73C+RkJ0oxZQz/48VBsN8SvmM/L2HDLhAa7LafV3fXSmxumTc44beKo3IEjxWCzfo5B4I/UNQ8uKL1x4TUA0VbHY8eO/eyz+jOGR01+UVQmlA5oaO7MynBcftHcT+Vvsn5KQoDkn/EYnxAWGAHYliG+tCFpqqpazMKSr6tLR2bq77Z3+JUaduL4YlVVFUXheR4Adh9JnTXUSGlPUKDFYIhg9fLZzpf//m12VuqCy8vKxuYtM11yU/UbYWIg3RWSU03Ce19v523Jw20H7i36WOGdKUkph2vdz762dXKp7Q9XjpZkTY+84ji2yx+WZQVj5EyxWROMsqyq3QuU2sb2Qbm2zoogq0YDofpnCuyhv8Tu+X/WP/NhNgWqd9vIaiKirOyu8i+Yb+70RF3wgWBkeGHWyl2JDFKSEq3VdbvsNktWhgEhJMuq0cjfeNXUnMGz1q7fcN2d719/1Zi3xy5uOvoPb+1WZcRTb2OnFJFBNT035smSPCYzK4Njk5566dthhenPP7UwK2eULIdVqT36bRDwgoEQcCRIayv3OlMdLMt2dnaaTCZRYbzegNXEiZEwpXRySdbL72wUBNPLT116zjnTmkY0hbTI/rZD+l9xKgx25rOSYUrZtPYOz4pVeyqqmt58epqnKwSAADM8hwlgVVWampqMRmMgEHA4HIGQihBC6BhHjZFnTULC7OkGA0+vvGXJ4ncuUwsnf1P4yapdbQ/UvwQAEFGWPyBs/uYPK2ajYcOKOr1j/v3pphRb09lT85+4qxghiNWVD0lUwdr000YuWcNoamRGKVO1v552R0cjgLUbG954bu53t+wt7L57NmPE0SzKfqG/bDsAIAlTvg+28d1bl/jZTL8tVF5ZN3VyIQDIsjo4P33lwfNvu/kqn8+nadozz7+28PTyo65I3oB0/SOUyEZHif5aUZR/vvuf7TsOjS9Jm3/xpHBE4nmWwVgjhOfY1/+1mlBYeMUkMaRSSqSITwx3IcToibQIEMOyERnSs/LqO/MHjrpS0zSj0fifj7+6bfbh9Zsr0uzH7K8aDexTb+22GOHRBy5ko8EEvwKTUXjxrZX7D3luvKzAZjXE71EjBCNLRn20OmXMpAsMBgOl9IOPlv/pioZNm3fYzD2xYUjf/dM0ChQARSS5pqFj7TbP+WcNnTi2QC+toqgaz3N2q+GJF1a62jsuOD07NdEoSurxm2MpmXnf7S6YPvOC4SOKLRYLADz858dGO5fpGycIocVf7brz7jMPXnjQ6iYAoAEtM6Vc8OrBVQtP1MO9L+hHsVtWOGpqo2mHGK2A6SrljQtN23bVnD1zuEZIS6unZPT44ae/AwC6M2Xrth1mZX3Vzs8uOHea/qgokU2JYzRNoUQDhFTRf6hqVW2jZ3NF62njCyaU5nMcs2xl5aYdtQsuG5doY9VI763MeBACV5c6amTR0q2FZrPV7ZFvPe/IjxsqMhJ7DwIFMApMu0f8+Juffn0oKlAKwwYljhmRZhBOMJkcaZXOP3v8zoMJNe4sSSFXTEfT5m4AAAkNSURBVKs+cLCOVb29fNK90DS13eNdsa51+mlDJ48vQAgIgRf//v3RVvHe60doqqgoFAAoJceLXdbA0d9XjTr7rLMSExNTU1MBoKGxbcW/Ths2JEdVNYQQg7nUAdb2yfv1RoIa0FlCpqlzfcT8C8Epv5kTjEtfsXNkYHZDIuo2FBSfNmHYgKde2nbpBQafP8JznCgDpZQQojvwjAbe4+ERRp6ONk97rNPhAYgbRYTQwBxbQa79kxUHyyuqEUKyQu+8eiSlonqyeGFgWcxglJPCVB8+ctkUTlE0k1HYvK0qN5UFAEnWZEUT5W7TBkBPtZg3Ozbt/DoogChpotTz2FgWcywWeGZkvnnDlsqcrIxBxS6Gwes37U+1cTzPUEpVjfbe1OqGYdi0lJTr56a89+Wh8sojAIgQcsOlxRFRIYSyrDEWWN1L5gCAYXCaMy0YDGZmZuphLzyPKQVASP9ns5rcO/3RTHeAVCwctof6T+agX8Xu8cVH7LPZ0u+wSigFcNaoCAHCQEKdJCypilo0QG1qrHckJoui2NbWtmTp2ldvr/vsqBAncwDQPeUAUAoCzxgEhlK4/tIR+jvtnnB1vTeWsoAA9lZ3HKyJhMMQnwFj4IHjQP8N5OUdyRuQJwgcxnxz1DOFAX5d/PPvg212ucOiIolibV3t0aMqxqBqICsQH81uEMBhh2EF9uy0nkyf0ydm5GfbjYZo1z+LiQOAYFj5OXkFAIElVQeaSkpG79u3b/jw4RzHLXrhtdEpnOzvAIBDdd7TJo+mWC/hCQRgqNl6/rMHj71GH9OPYgcAf/mo5uiAsvKA6/hUljQH+8lXO46KL5WOn1VUVFRdXX3jnMDSVbVpSQYA4FhsMnIAgBGqb/EdrPNiBAyD6pp8NY2iLEEgAABAAQQesjJh8sSxyUnRopMTkmHevOyS0SN/rlNWOBwJBk82Hf/XwBgnWCwGg3C8yCCAmtq6PXv2xufahSPh9xdvCARBj1dnGHA4ABBMGJloNLAAwHPMpNEZLItBD04OyQCwZuOuu+aoi96D6WVDt2/fvnX73jPH+KArmjNV3+I7rfv6IVDPS8h85IyW7xf0l1Wn09us6XMW/DHz2s/TSU2gZggz8+0Rc2/47I2/jvUFJAAIimTEsPy69lRFkRMsZndLOVXFLbsaOBa6AtLBI6JeRYnngOfhvruvjqU5ZWSkFxUWxL65qqmhUOgkvShPEYQwIIQQ/pkIzl8LoZSA7i7qo1HGGNvtttiyOiJGdpVXxFKMI2Hxzbc/D0WAUqAAKUkwdJANAGw2U+nowtEjCqpqKKVkcDbeu3+/AEH9KgdqOqdOKUUI2i6rSXSYnniocdmt/bU5EaPfxU6n9EV4fcBZXl/o359suee60a9/WMFgUFQiyTQj3TZwQLItMXf0qBKGwWazyWG3AwJFUU8Y7ArQM+3GoJTG595RSsL+ZjHcfmxyGiWaSqh6fCucKAgBIIQQnLK75KToAgfw82KHMKvXZYo/iBFrTS46NukJxYf+6xxvw/XCYDDo12052qqqxOEwr9+4oaqy0uMNd3rCdhtDCeU49rJzihyp2WYTf+tflq7b1usa/UW/i13p65D0AQBAcXG23w9vvf64x+PVtGgGHhw7fBj3BHMQTVVkf/SRUOJxVcZO6zvJ6AFjXc/1C7Sb3m/8DuJ/ZgZjksmWo79mGJ7l4wJdKZBjawtB3M+WYRiE0HOLXvL5A4kO+56qeosZ+jxP7Hj6Xeyml8CP25ZK7e2dnV6AnkwLzPD6YxZD7ZomAiCgxN95SOvOx0EI/9o0x15gjOOVBEIgibIoS8f3jtIICYXCQb0lfF9DKVjMJo5nTYaeCNYYvMAbDb0VXvzP8tdCqUa0nlmCYXlrUhEAIEBGSzrCGCCaqh07BwA4jpMkOTkp8Z333l+7bnN/S17/ip2lCbbVPpiYmMJwvH4jv+ew/lbY36wqIYBokYC4D50qGOP4xqaaRrq6fLGlC6U0FA7HeprrxzDD4H4uOvFrIYT0KjqBECQ67Me2FjcbDMcksMUStn8Vmirq0z0nWI2WdKCUNziMFielFBBoSgQAWJa98pp7a1+AmrLeH+9D+lHs+CBcs8By09WTGMwh/OvKQQDo+XkAAIqiujuiVd7DkYjWvZOI8Qksnv9P0DSiix1CYDIZ9XGgAFnp0fx9Qn71nE40Wa80ZUlIu+dP76/Y3PuEPqQfHShnXAtDCtNZ9mSt3/Q5Vx8hBNDR6RGlaIqeLCuxgYuJFwLEsr8gwQhBnPUShVJKCFC9U/JxeLrCra5ge0cw2N0bt29hMLbbjXarITXZkuQ4sVsHRTnmIKUnXjrEq3mpu+cbAByuqdNfsCwbOyczIx0AgNLYDU54zVgZGjHSdfHskSugx5juc/pR7LAbzr2lOJYY3DOolMqKAgCiJHd0egB6yibEj/oJHgIAAMQXNAEAopGwqChKzzzV0uY7Ut8ZCB4jQIQQQiA62ggiyUCOlV6EAGGAaBJZ39MsRaAdaJxrAgGwYeC7O/thrC9rev5kSiHDmTCk0GkUemxco4E1GrhjpIZCrGZK7PdJ9D8YAADq6hv1F7EhtdusFrMJEOK56JUp7dGOlFKH3WSrB1+ufqDv6Uex41hYs2F3SpJF79xwEnieNQgsQqjN7W9pDegjX7G/xePR9NdmE9Sd2322CJEUODgPyC9c9f9FqG57xeHr3qg7ASlVkHOs7Z/5FcgyIARUg/FjnRaTAAAYw6hhmbqm9wUkhMDb5fN2neCyuqGJEHy0dK8v2l6gX+hH2w4AZpfBgrnFCONoIZNujAaOZTHD4FXralgW2jtDtfUhhEAQQOCh8iYAAMJBzfnxH/o/fh0Fn0dfjHwb/AEABITA5HFpmkaAwtRJ+QhBICj3mnDbO0PffH9458vgGhN/uI/pX7EDgLMmwqC8xEtmF4mSunlHvT73HXX5giEAgMA0qDkvembrhJ5P/R/9QXq3N7jgczBvBU2DwfkJLIM1AmXjc60Jwq7K5vKqoxtfgY5jmvP0Pf0udowEM+4FQxUgBDwHDWfBoUsAAPy5vU78P/7bsBEwuQAAzrwBZAUIAYGDz/vZY6fzP2eprGibBueQAAAAAElFTkSuQmCC"
					), aG1(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aG1(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2jdGjR2dnAFBPLrjgghgzZkx2BtAIJk6cGMcdd1x2BgAADaCqqiqOPvromD9/fnYKFK0XXnghjjrqqOwMAICCMnz48Fi5cmV2BgAAAAAAAACkM9wDAAAAAAAAAECzMXDgwOwEarBw4cIYMmRIdgYbYOTIkTF37tzsDOrg6KOPjj322CM7A4B6Mnjw4Bg3blx2BtCAHn/88Tj00EOzMwAAaEBz586NPn36xIoVK7JToOgsWLAgfvzjH8eqVauyUwAACsrs2bPj3nvvzc4AAAAAAAAAgHSGewAAAAAAAAAAaBZOP/302G233bIzqMHvfvc7BxI2UdXV1XHttddmZ1AHrVq1ilGjRmVnAFCPfv3rX/v3GJqpKVOmxMEHHxzV1dXZKQAANLBHHnkkBgwYEFVVVdkpUDRWrlwZffr0iVdffTU7BQCgIA0cODDef//97AwAAAAAAAAASGW4BwAAAAAAAACAJq+0tDTOOOOM7Axq8O6770ZFRUV2Bhth7Nix8dprr2VnUAe9evWKnj17ZmcAUI9OO+20+N3vfpedAdSjKVOmxEEHHRRr1qzJTgEAoJFcf/31MXbs2OwMKApr166NX/3qVzFx4sTsFACAgrVgwYL4zW9+k50BAAAAAAAAAKkM9wAAAAAAAAAA0OQNHDgwOnXqlJ1BDa6++uqoqqrKzmAjXXXVVdkJ1EFZWVkMHTo0OwOAenbyyScb74FmwmgPAEDxGjx4cNx8883ZGdCsrVu3LoYNGxbjx4/PTgEAKHhjxoyJmTNnZmcAAAAAAAAAQBrDPQAAAAAAAAAANGllZWXRt2/f7AxqMHfu3Bg7dmx2BvXg8ssvj9mzZ2dnUAf77bdfHHvssdkZANSzk08+OW644YbsDGAjGO0BAODnP/95PPTQQ9kZ0GxdeumlMXr06OwMAIAmY+DAgfHJJ59kZwAAAAAAAABACsM9AAAAAAAAAAA0aSNHjowddtghO4MajBs3Lqqrq7MzqCfjxo3LTqCOzj333OwEABrAKaec4t9laKIeffRRoz0AAERExBFHHBFPP/10dgY0O9ddd12cffbZ2RkAAE3KpEmT4pprrsnOAAAAAAAAAIAUhnsAAAAAAAAAAGiyysvLo3fv3tkZ1GDOnDkOlG9mrr/++pg5c2Z2BnWw++67x4ABA7IzAGgAv/71r2Ps2LGxbt267BSglu655544+OCDjfYAABAREVVVVXHIIYfEc889l50Czcbvfve7OPXUU7MzAACapAEDBsTzzz+fnQEAAAAAAAAAjc5wDwAAAAAAAAAATdaIESOiffv22RnU4LLLLstOoAFceuml2QnUUf/+/aOsrCw7A4AGcO6558b5558fVVVV2SnAF/j9738fP/7xj6O6ujo7BQCAArJs2bL43ve+Fy+++GJ2CjR5t9xyS5x88snZGQAATVZ1dXWceuqpsXz58uwUAAAAAAAAAGhUhnsAAAAAAAAAAGiS2rVrFyeccEJ2BjWYOXNmXHfdddkZNIBbb701pk+fnp1BHey0005RWVmZnQFAA7ngggvi9NNPj1WrVmWnAOtRXV0dF154YfTp0yc7BQCAArV06VLjPbCRbrrppjjxxBOzMwAAmrxnn302hg8fnp0BAAAAAAAAAI3KcA8AAAAAAAAAAE3S6NGjo23bttkZ1ODiiy/OTqABXXzxxbFu3brsDOrglFNOiXbt2mVnANBArrnmmvj5z38eS5cuzU4BPuWTTz6Js846KwYNGpSdAgBAgVuwYIHxHthAN9xwQ5x00knZGQAAzcYll1wS//3f/52dAQAAAAAAAACNxnAPAAAAAAAAAABNTufOneOYY47JzqAG06dPj9tuuy07gwZ09913x9NPP52dQR1stdVWMXr06OwMABrQnXfeGYcddli8++672SlARHz44Ydx0kknxWWXXZadAgBAE/H/H+95/vnns1OgSVi3bl1cdNFFccopp2SnAAA0O8cff3w8++yz2RkAAAAAAAAA0CgM9wAAAAAAAAAA0OQMGzYs2rRpk53Beqxbty5GjRqVnUEjGDt2bFRXV2dnUAc//elPY9ddd83OAKABPfXUU3HAAQfE7Nmzs1OgqL3zzjvxwx/+MG6//fbsFAAAmpgFCxbEAQccEM8880x2ChS0Tz75JM4555w455xzslMAAJqlqqqqOPLII2Pu3LnZKQAAAAAAAADQ4Az3AAAAAAAAAADQpHTp0iWOPPLI7Axq8NRTT8Uf/vCH7AwawcMPPxyTJ0/OzqAOWrdubVgLoAi8/vrr0a1bt5g0aVJ2ChSlv/3tb9GjR4946qmnslMAAGiili1bFj169IjHHnssOwUK0vLly+PUU0+Niy++ODsFAKBZmzdvXhx99NHx/vvvZ6cAAAAAAAAAQIMy3AMAAAAAAAAAQJNSWVkZLVu2zM5gPaqrq6OysjI7g0Y0ZsyYqKqqys6gDg499NDo0aNHdgYADWzZsmXxve99L6655ppYt25ddg4Ujfvuuy+6desW77zzTnYKAABN3Jo1a6JXr15x5513ZqdAQXn//ffjmGOOiRtvvDE7BQCgKDz33HNx7LHHxgcffJCdAgAAAAAAAAANxnAPAAAAAAAAAABNRvfu3aNXr17ZGdRg0qRJMWnSpOwMGtHjjz8ejz32WHYGdbDJJpvE8OHDszMAaCT/9V//Fb/+9a9j5cqV2SnQrH3yyScxcuTIOPLII2PNmjXZOQAANBPV1dXxk5/8JH7zm98YZYWImDNnTnz/+9+PiRMnZqcAABSVSZMmRZ8+feKjjz7KTgEAAAAAAACABmG4BwAAAAAAAACAJmPw4MHRokWL7AzWY+3atVFZWZmdQYLKykqHkzcxPXr0iKOOOio7A4BGcvnll8cRRxwRf//737NToFlatGhR/OxnP4uhQ4dmpwAA0EydeeaZMWDAgFi1alV2CqR55JFH4t///d/j+eefz04BAChK999/f5x44onxwQcfZKcAAAAAAAAAQL0z3AMAAAAAAAAAQJPQs2fP6NmzZ3YGNfjjH/8YU6dOzc4gwbRp02LixInZGdRBSUlJDB48ODsDgEb02GOPxb777ht//vOfs1OgWXnuuefiO9/5Ttx9993ZKQAANHPjxo2LY489NhYtWpSdAo2qqqoqLr/88ujVq1csW7YsOwcAoKjdf//9ccwxx8R7772XnQIAAAAAAAAA9cpwDwAAAAAAAAAATUJFRUWUlrrdpRCtXr06RowYkZ1BohEjRsTq1auzM6iDPffcM/r27ZudAUAjmj9/fhxwwAFxxRVXRFVVVXYONGnV1dUxfvz4+Pd///d49dVXs3MAACgS999/fxxwwAHx4osvZqdAo/jwww+jb9++8atf/So7BQCA/zVp0qQ4+OCDY+7cudkpAAAAAAAAAFBvnGQCAAAAAAAAAEDBO+qoo2K//fbLzqAGDz74YMyYMSM7g0QzZsyIBx98MDuDOjrzzDOjrKwsOwOARta/f//42c9+FgsXLsxOgSbp/fffj1/84hfxi1/8Iqqrq7NzAAAoMrNnz47/9//+n5/H0uzNmjUrvvvd78Z1112XnQIAwGfMmDEjunfvHtOnT89OAQAAAAAAAIB6YbgHAAAAAAAAAICCN3DgwCgpKcnOYD1WrlwZ559/fnYGBWDo0KGxcuXK7AzqoGPHjjF06NDsDAAS3HHHHfHtb387/vznP2enQJMybdq06N69e/zud7/LTgEAoIitWrUqDj/88BgyZEisWrUqOwfqVXV1dfz+97+Prl27xvPPP5+dAwBADebPnx/77bdfTJgwITsFAAAAAAAAADaa4R4AAAAAAAAAAAraCSecEF27ds3OoAZ33313vP7669kZFIA5c+bEfffdl51BHf3yl7+M8vLy7AwAErzzzjtxwAEHxJgxYxz0DF9g9erVcfHFF0f37t3j1Vdfzc4BAICIiBg1alQcdthh8c4772SnQL1YvHhxnHLKKdGnT5+oqqrKzgEA4AtUVVXF8ccfH2eeeWYsW7YsOwcAAAAAAAAANpjhHgAAAAAAAAAACtrAgQOzE6jB8uXLY/DgwdkZFJAhQ4bE8uXLszOog3bt2sXYsWOzMwBIdP7558fBBx8cs2fPzk6BgjRnzpzo1auX700BAChIjz32WHzzm9+MBx98MDsFNsoTTzwR++67b/z+97/PTgEAoI5+85vfxAEHHBDPP/98dgoAAAAAAAAAbBDDPQAAAAAAAAAAFKzTTz89dtttt+wManDrrbfGvHnzsjMoIHPnzo0777wzO4M6Ou6446Jz587ZGQAkmjx5cnzjG9+Ia6+9NtauXZudAwVh7dq1cf3118cee+wRkydPzs4BAIAaLV26NA4//PAYMGBAfPjhh9k5UCcffPBBnHXWWdGzZ894/fXXs3MAANhAzz//fOyzzz5x9dVX+10TAAAAAAAAAE2O4R4AAAAAAAAAAApSaWlpnHHGGdkZ1OCDDz6IoUOHZmdQgAYPHhxLly7NzqAO2rRpE5WVldkZACSrqqqK0047LY444oh47bXXsnMg1Zw5c+Kwww6LX/7yl1FVVZWdAwAAtXLZZZfFfvvtF3/5y1+yU6BWnnjiifj2t78dl156aXYKAAD1oLq6Ovr16xe9evWKWbNmZecAAAAAAAAAQK0Z7gEAAAAAAAAAoCANHDgwOnXqlJ1BDW666aZYtGhRdgYFaMGCBXH77bdnZ1BHRxxxROy7777ZGQAUgIcffjh22223uPrqq2P16tXZOdCoVq1aFVdccUXsscceMXHixOwcAACos9mzZ8d+++0XFRUV8dFHH2XnwHq99957MWDAgOjZs2e8/vrr2TkAANSzxx9/PPbaa68YPnx4fPjhh9k5AAAAAAAAAPCFDPcAAAAAAAAAAFBwysrKom/fvtkZ1GDhwoUxbNiw7AwK2Pnnnx+LFy/OzqAOWrRoEcOHD8/OAKBAVFVVRb9+/eJ73/tezJw5MzsHGsUzzzwTPXv2jP79+0dVVVV2DgAAbJTKysrYb7/94sknn8xOgX9au3Zt3HbbbbH77rvHZZddlp0DAEADGz58eHzrW9+Ke+65J9asWZOdAwAAAAAAAAA1MtwDAAAAAAAAAEDBGTlyZOywww7ZGdTg97//fSxbtiw7gwK2dOnSuOWWW7IzqKMDDzwwDjvssOwMAArIU089FXvvvXdUVFTEkiVLsnOgQbz33ntx1llnxb777hvTpk3LzgEAgHrz4osvxoEHHhinn356LFiwIDuHIjdjxozo1atX/OxnP4vFixdn5wAA0EjefPPN+PGPfxw9evSIxx57LKqrq7OTAAAAAAAAAOD/MNwDAAAAAAAAAEBBKS8vj969e2dnUIN33303hgwZkp1BE3DeeefFwoULszOog5KSkhg8eHB2BgAFqLKyMvbcc8+46667oqqqKjsH6sWaNWtiwoQJsccee8Sll16anQMAAA3mqquuit122y1+//vfxyeffJKdQ5GZP39+DBo0KLp27RqPP/54dg4AAEmeeeaZ+P73vx+HHXZYTJkyxYAPAAAAAAAAAAXFcA8AAAAAAAAAAAVlxIgR0b59++wMavDb3/7WYe3UyqpVq+LGG2/MzqCOvvWtb8XJJ5+cnQFAAZo/f34cc8wx8cMf/jBmzJiRnQMbZerUqXHggQfG8ccfH4sWLcrOAQCABrd06dLo06dPfPe7342pU6dm51AEli5dGpdeeml07tw5LrzwwuwcAAAKxMMPPxz7779/fPe7342HHnrIuCgAAAAAAAAABcFwDwAAAAAAAAAABaNdu3ZxwgknZGdQg7lz58YFF1yQnUETMnjw4Hj33XezM6ijc845J0pL3V4IwPpNnDgxunbtGqeffnq888472TlQJ6+99lqcfPLJ0aNHD4eVAwBQlKZNmxY9evSIn/3sZzFnzpzsHJqhVatWxc033xxdunSJs846K1atWpWdBABAAZoyZUr88Ic/jK5du8ZNN90U77//fnYSAAAAAAAAAEXMM+sBAAAAAAAAACgYo0eP/v+1d7+xVdZ3H8e/lH/lXynyR0qIg9IBxREKI0NhcwQnGsxmdInzwRxOnTP4ZBuJ0WWOEBY3DIpmGhCcLhIwmVnGpixTt2kIgjABp4XBWkFrQRhtaWsLBfrnfnLH3N6Zu2X38Nf293o9O9dJzvXJyXlwnZyT6x3FxcWpZ/AxHnnkkejs7Ew9gx6ko6Mj1q9fn3oG52nSpEnxwx/+MPUMALq5xx57LCZNmhSrVq2KkydPpp4D/9KxY8fiRz/6UZSXl8eTTz6Zeg4AACS3adOmmDZtWtxzzz3x3nvvpZ5DL3DmzJl49tln4wtf+ELccsstcfTo0dSTAADoASorK+Pb3/52lJSUxNKlS+O1116Ljo6O1LMAAAAAAAAAyIxwDwAAAAAAAAAA3UJZWVncdNNNqWfwMQ4ePBiPPPJI6hn0QD/5yU/inXfeST2D87RkyZIYMmRI6hkAdHMdHR1x9913x9SpU2PdunXR0tKSehJ8RH19fTz88MNRWloa999/vxApAAD8Lw888ECUlpbG8uXL49ixY6nn0AOdOnUqNm7cGDNnzoxvfOMbUVlZmXoSAAA9UEdHR6xevTrmzp0bc+bMibVr10ZVVVXqWQAAAAAAAABkQrgHAAAAAAAAAIBuYfny5SIR3djq1atTT6CH6uzsjLVr16aewXkaO3Zs3H///alnANBDnDhxIu6888743Oc+Fxs3boxTp06lnkTmGhsbY82aNTF16tT4wQ9+EG1tbaknAQBAt9XR0RHLly+P0tLSWLFiRdTW1qaeRA/Q3NwcTz31VFRUVMTNN98cBw4cSD0JAIBeYs+ePbFkyZKYMmVKXHHFFbF+/fo4dOhQ6lkAAAAAAAAA9GLCPQAAAAAAAAAAJDd9+vS44YYbUs/gY/z1r3+NdevWpZ5BD/bAAw9EVVVV6hmcp8WLF8f48eNTzwCgB6mpqYmbb745KioqYsOGDdHS0pJ6EplpaGiINWvWxJQpU+Kuu+6K+vr61JMAAKDHaGtri2XLlsWECRPi3nvvjerq6tST6IZqampi5cqVMWnSpLjtttt8TgAAuKC2bdsW3/3ud6OsrCxmz54dK1eujB07dsSpU6dSTwMAAAAAAACgFxHuAQAAAAAAAAAguRUrVsTAgQNTz+BjrFq1KvUEeoFHH3009QTOU1FRUfzsZz9LPQOAHqi6ujoWL14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), aG1(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aG1(8,
					"googleplay", 3,
					"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"
					), aG1(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aG1(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aG1(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aG1(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aG1(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aG1(14, "bestPlayer", 5,
					"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"
					), aG1(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aG1(16, "apple", 3,
					"iVBORw0KGgoAAAANSUhEUgAAAPAAAABQBAMAAADVZ+VPAAAAMFBMVEUAAAAQEg8cHRsjJSIvMS48PjtNT0xlZ2SKjImmqaWKyoYF/hJw3XLLzsrf4t7///+u1pRGAAAHKUlEQVRo3tWazXPTRhTA145jyQd7HCgfOTSkHEq5QDqdoT2VtId+XMAz7QzDBZu2ZMghjdMZJnDI2Bn64RyInBYSO4H4nNJ/IKX/AO3FdFoSDqAYCoWDpWkB2zpIr293JVtyFBMnrTXVJPaTrNVv933tW0nkBt1+/r6D2w8MSfD/p6V8LtOxbSo//4sJXsqdi5KObb4TU/McvJyLkY5u3VMLDJxPkg5vQp6Cl+dIx7cLCwheSnYeLMwjOBftPNg3dYP86IGmUdfXyfKMF+DeBbKc9gIsLpCbSS/AwlVyM+EFOHiVLHkDnidLg16AA16BuxA8sOXW7zmbdn3mRvisPfDZtCOn5/NunlBwRqKoucWN1hZ4Aor2xgCgRbcAFh+3CQ6BE6yPX4DsFsAhrU1wARwc2jhVJcHFJzFxhUxkfXd8dybKaQo+qVwhZFhZwY9yhjFOKrNEWJ0u0+Ji0VgRtUvlBGu6CTBVbaIJHNZIylAfCRoplIK631DUKoIFVTGSQVWBZLdq6BTMdkTdgPu4o0KNig9p04ebAMcB9GYdirpPnexFIpGrouaHmV4dwRGtRyqhJaViSB+UKDjMjkDyVI1OBVpUhLFjmk9Nh/RNgFHTlfVgwSA+NSa/q2nhit+IBil4tEQiVZxe48VIhVqUEHYEG4Rqpo11bC7oPTuUTYBVgPQ6sIaXIHKykKmWI2s48G4KlookXPNdUqB4uMT9iB2xg+kftR30vxDsx+BZ5654NQYezZcK8aIDHDLyheI+E5xyBRv5vLPQcQUHQE+uA0vPBSPaBYN994qpQtoCx++TvkrkGeJQ42EKjj/AI83goBElb7xA1T044lyC7HzdEceZSxhf8pURnYQh3QeDFjisn5GLkdqrajFknCsw59LPFIp1sP4pAxP58mutnUtYVMpjWHFfA3iScITXY0JOAfyGcixsEAsckMGI4c9y0S+DRsH8iAkOQo2DPwd41AosyIgwZj+gX6DHbLk6109LQ7RTIEeEHPHlSFeOXEiQvflJrNxyB9MoDbGykR4R5ugfbsOzwTmCf/6pOwOtwAWwb392bFoMObhgJDoFlpxgSHcI7FfBG1U3aRqSnQJHnFytzWvtOv91dGvgUSe45DhRUbKtLzWBhtLTWwI7g8lZcohNHVm/GAJn7LcDlp1gRzCFAaot151m4z+wj/mZ7YH7m2qDljZHx1z9CDOeTvv4dFtgI+qsDVSjlescZv0SqZ62CwYHRzWklvkkxV1ARs/YNtjuJwJox1nFGxj6hOzJjDHptClxjRQ5P3tkBCpDdFn0fuZLeujI0MCeDH4fyHy1SXDaYcJKGJ4xobZXBeM7dqgXpW8dYP/+qGRGxAR+rbI8/I2K/jJi7m4inOwlfR+siVDjYDZ1xijYlPhQa/aEnzXD6xbdn0ZHZVUXzLiDm+aImsOE2S5W8oZABwNTxf26dIudcAhghTvFNKoBkw2OQmFVsgR4Un8KoKzaAsMBjjfNijYjy2hxmUY2ho0+thurDSad3iOb/aMjKvOUyZxLALhMDlJ74XDmTuxUcXevLf23ytXQqP27eNezDHyLfhpRLr1shR2zUzlpgcNsdBL6ukS7FjJ3i5uanYx0I2Fi46Owxs5JsAk0idIgrUjNUbCqCYykCY6zJUwfpjtGi7DdMPzlChaawA2ThOE5/agyG/PxZU1JtnK6cM10DAbmg6MDZYo6au5W3SuQpkKg4V5x2k6kHeE6o9cN8Z+lxmRyYJFN4gxcYNEoYufYCaNQvnv37r3GFVuXPk8bgWYoikLNaeJSNrAt7EZoENrAggWWmofiBB+CDSZGtV6TtAYjr7QBmPZcUR67g0VwT5rBRk6xq1ozrc0WID2mTZ5a4Kxd1anmGwpOsE919y1k0KcYEl7RxbnSrE402Jn74O8WzrVxQZ9yr336+HI5jMrl4RTg4YQa6TYLBpVHVQpDjoGPw4N6OGVpONFEL2QmNwCH3EsQejlTcXjGA542UPqVSaZx6dqoW2XTYsVKIAVsaOYdPUoXX6UNwD7ZNVebsdqFY0SccfFNmY/duPiWap6GheJsdNciLwT0d6KYE273DPOUmWUZ5zYR1Ialm1eLx9x8GlvFrA7QqYFPO5ZUrPslnTJqXG3WJKFZgY5GVHD2GNgIjLoCYzVzzXFHTbRuxUiwhkFEs7I+SCzJbD5dn8TRAZAVsuZBDhaY3/6+8cL8oFqmDjCslJO2CtPU+ttQQZyIPZ9kM7Mp8S7TtGVcMdMIskYQtdJIbR/i7mq0xR0BP//RZ6u4/PtfqQs0bQTGB3lJQLrHG7d+fWfzudNcfOlj2nr3ONvdsZ9fKnD+i+3cvQ3VfS7kqBT+89vG/3tw23fo/01wwgtwcL7Nxz8+y8Nt0hYf/3j2wMuzR3yePdT05jHu8HXvHlx796jes5cTPHsdw7sXUDx75ca7l4w8ea3qHxoI8b7ie6AsAAAAAElFTkSuQmCC"
					), aG1(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aG1(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aG1(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aG1(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aG1(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aG1(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(e4) {
		return canvas[e4]
	}, this.aFf = function(name) {
		for (var aB = a09.length - 1; 0 <= aB; aB--)
			if (a09[aB] === name) return canvas[aB];
		return aFv
	}, this.tB = function() {
		return aFu <= 0
	}, this.aFx = function() {
		aFu = 0, aFy()
	}
}

function cR() {
	var aG9, aGA, aGB, aGC, aGD, aGE, aGF, aGG, aGH, aGI, aG7 = [
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
		aG8 = [
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

	function aGO(jO, nM) {
		for (var aB = jO; aB < nM; aB++) aG9[aB] = 4 * bK.dq(64 * ax.random(), ax.value(100)), aGA[aB] = 4 * bK.dq(64 * ax.random(), ax.value(100)), aGB[aB] = 4 * bK.dq(64 * ax.random(), ax.value(100))
	}

	function aGN(jO, nM) {
		for (var colorsData = aD.data.colorsData, aB = jO; aB < nM; aB++) {
			var fB = colorsData[aB];
			aG9[aB] = 4 * (fB >> 12), aGA[aB] = 4 * (fB >> 6 & 63), aGB[aB] = 4 * (63 & fB)
		}
	}

	function aGa(eN, aGc) {
		aBX[eN] = 0, aBX[eN + 1] = 0, aBX[eN + 2] = aGc, aBX[eN + 3] = 0, aGd(eN)
	}

	function aGd(eN) {
		var eq;
		ba.nU || (eq = ac.xv(eN), eN = ac.xw(eN), ba.nU = eq >= bZ.aBW[0] && eq <= bZ.aBW[2] && eN >= bZ.aBW[1] && eN <= bZ.aBW[3])
	}
	this.el = new Int32Array(4), this.da = function() {
		var el = this.el;
		el[0] = -4 * bR.eu, el[1] = 4, el[2] = -el[0], el[3] = -el[1]
	}, this.dZ = function() {
		if (aG9 = new Uint8Array(aD.eg), aGA = new Uint8Array(aD.eg), aGB = new Uint8Array(aD.eg), aGC = new Uint8Array(aD.eg), aGD = new Uint8Array(aD.eg), aGE = new Uint8Array(aD.eg), aGF = new Uint8Array(aD.eg), aGG = new Uint8Array(aD.eg),
			aGH = new Uint8Array(aD.eg), aGI = new Uint8Array(aD.eg), this.a85 = new Uint8Array(aD.eg), aD.he)
			for (var aAE = bf.aAE, aB = aD.eg - 1; 0 <= aB; aB--) {
				var f4 = aAE[aB],
					l0 = bK.dq((aG8[f4][3] + 1) * ax.random(), ax.value(100));
				aG9[aB] = aG7[f4][0] + l0 * aG8[f4][0], aGA[aB] = aG7[f4][1] + l0 * aG8[f4][1], aGB[aB] = aG7[f4][2] + l0 * aG8[f4][2]
			} else 0 === aD.data.colorsType ? aD.data.selectableColor ? (aGN(0, aD.k7), aGO(aD.k7, aD.eg)) : aGO(0, aD.eg) : aGN(0, aD.eg);
		! function() {
			var aB, em;
			for (aB = aD.eg - 1; 0 <= aB; aB--) em = bK.dq(aG9[aB] + aGA[aB] + aGB[aB], 3), aG9[aB] += aGU(em - aG9[aB], 2), aGA[aB] += aGU(em - aGA[aB], 2), aGB[aB] += aGU(em - aGB[aB], 2), aG9[aB] -= aG9[aB] % 4, aGA[aB] -= aGA[aB] % 4, aGB[
				aB] -= aGB[aB] % 4
		}(),
		function() {
			for (var aB = aD.eg - 1; 0 <= aB; aB--) aG9[aB] += bK.dq(aB, 128), aGA[aB] += bK.dq(aB % 128, 32), aGB[aB] += bK.dq(aB % 32, 8), aGC[aB] = aB % 8
		}(), this.aGR(),
			function() {
				for (var aB = aD.eg - 1; 0 <= aB; aB--) aGD[aB] = aG9[aB] < 32 ? aG9[aB] + 32 : aG9[aB] - 32, aGE[aB] = aGA[aB] < 32 ? aGA[aB] + 32 : aGA[aB] - 32, aGF[aB] = aGB[aB] < 32 ? aGB[aB] + 32 : aGB[aB] - 32
			}(),
			function() {
				for (var aB = aD.eg - 1; 0 <= aB; aB--) aGG[aB] = 235 < aG9[aB] ? aG9[aB] - 20 : aG9[aB] + 20, aGH[aB] = 235 < aGA[aB] ? aGA[aB] - 20 : aGA[aB] + 20, aGI[aB] = 235 < aGB[aB] ? aGB[aB] - 20 : aGB[aB] + 20
			}()
	}, this.a6y = function(player) {
		var g = bN.fI;
		return g[0] = aG9[player], g[1] = aGA[player], g[2] = aGB[player], g
	}, this.aGR = function() {
		for (var aB = aD.eg - 1; 0 <= aB; aB--) this.a85[aB] = aG9[aB] + aGA[aB] + aGB[aB] < 280 ? 0 : 1
	}, this.xv = function(eN) {
		return bK.dq(eN, 4) % bR.eu
	}, this.xw = function(eN) {
		return bK.dq(eN, 4 * bR.eu)
	}, this.xV = function(eq, es) {
		return Math.floor(4 * (es * bR.eu + eq))
	}, this.xl = function(eN) {
		var el = this.el;
		return this.aGV(eN + el[0]) || this.aGV(eN + el[1]) || this.aGV(eN + el[2]) || this.aGV(eN + el[3])
	}, this.f8 = function(eN) {
		var el = this.el;
		return this.eo(eN + el[0]) || this.eo(eN + el[1]) || this.eo(eN + el[2]) || this.eo(eN + el[3])
	}, this.xj = function(eN, player) {
		var el = this.el;
		return this.aGW(eN + el[0], player) || this.aGW(eN + el[1], player) || this.aGW(eN + el[2], player) || this.aGW(eN + el[3], player)
	}, this.gJ = function(eN) {
		return 208 <= aBX[eN + 3]
	}, this.xq = function(player, eN) {
		return this.gJ(eN) && this.aGX(player, eN)
	}, this.aGX = function(player, eN) {
		return player === this.eb(eN)
	}, this.aGY = function(eN) {
		return 208 <= aBX[eN + 3] && aBX[eN + 3] < 224
	}, this.jJ = function(eN) {
		return 224 <= aBX[eN + 3] && aBX[eN + 3] < 248
	}, this.xk = function(eN) {
		for (var el = this.el, aB = 3; 0 <= aB; aB--)
			if (this.hy(eN + el[aB])) return !0;
		return !1
	}, this.ee = function(eN) {
		return this.gJ(eN) || this.ea(eN)
	}, this.hy = function(eN) {
		return 0 === aBX[eN + 3] && 2 === aBX[eN + 2]
	}, this.ea = function(eN) {
		return 0 === aBX[eN + 3] && 1 === aBX[eN + 2]
	}, this.wa = function(eN) {
		return 0 === aBX[eN + 3] && 3 === aBX[eN + 2]
	}, this.eo = function(eN) {
		return 0 === aBX[eN + 3] && 5 === aBX[eN + 2]
	}, this.aGV = function(eN) {
		return 0 === aBX[eN + 3] && 3 <= aBX[eN + 2]
	}, this.eR = function(eN) {
		return (aBX[eN] >> 1 << 8) + aBX[eN + 1]
	}, this.aGZ = function(eN) {
		return 1 & aBX[eN]
	}, this.aGW = function(eN, player) {
		return this.ea(eN) || this.gJ(eN) && player !== this.eb(eN)
	}, this.eb = function(eN) {
		return aBX[eN] % 4 * 128 + aBX[eN + 1] % 4 * 32 + aBX[eN + 2] % 4 * 8 + aBX[eN + 3] % 8
	}, this.xr = function(eN) {
		aGa(eN, 1)
	}, this.aGb = function(eN) {
		aGa(eN, 2)
	}, this.xW = function(eN, player) {
		aBX[eN] = aG9[player], aBX[eN + 1] = aGA[player], aBX[eN + 2] = aGB[player], aBX[eN + 3] = 208 + aGC[player], aGd(eN)
	}, this.gE = function(eN, player) {
		aBX[eN] = aGD[player], aBX[eN + 1] = aGE[player], aBX[eN + 2] = aGF[player], aBX[eN + 3] = 224 + aGC[player], aGd(eN)
	}, this.jK = function(eN, player) {
		aBX[eN] = aGG[player], aBX[eN + 1] = aGH[player], aBX[eN + 2] = aGI[player], aBX[eN + 3] = 248 + aGC[player], aGd(eN)
	}
}

function cp() {
	var e4 = 0,
		aGe = new Uint16Array(32);

	function remove(a54) {
		var aB;
		for (e4 -= 2, aB = a54; aB < e4; aB += 2) aGe[aB] = aGe[aB + 2], aGe[aB + 1] = aGe[aB + 3]
	}
	this.dZ = function() {
		e4 = 0
	}, this.j0 = function() {
		var aB, jH, iK;
		if (0 !== e4)
			if (0 === ag.me[aD.eT]) e4 = 0;
			else
				for (aB = e4 - 2; 0 <= aB; aB -= 2)(jH = aGe[aB]) < aD.eg && 0 === ag.me[jH] ? remove(aB) : (iK = aGe[aB + 1], (jH >= aD.eg && aGf(aD.eT) || jH < aD.eg && aGg(aD.eT, jH)) && (b7.h9.hG(iK, jH), remove(aB)))
	}, this.hI = function(jH, iK) {
		! function(jH, iK) {
			var aB;
			for (aB = 0; aB < e4; aB += 2)
				if (aGe[aB] === jH) return aGe[aB + 1] = Math.min(aGe[aB + 1] + iK, 1023), 1;
			return
		}(jH, iK) && 32 !== e4 && (aGe[e4] = jH, aGe[e4 + 1] = iK, e4 += 2)
	}
}

function cS() {
	function aGn(player) {
		var dp;
		b9.g5.a3D(player) && (dp = ag.gl[player] - ag.a3H[player] + ad.aGp(player), bc.g9(player, Math.abs(dp), dp < 0 ? 18 : 12)), ag.gl[player] = 0, ag.a3H[player] = 0
	}

	function aGw() {
		aX.show(!1, !1, !1, !0), aW.aAh(), bQ.zZ.a0J()
	}

	function aGk(player, aGv) {
		for (var aB = aGv.length - 1; 0 <= aB; aB--) ad.aGy(aGv[aB], player)
	}

	function aGm(player) {
		for (var ia = ag.ia, ib = ag.ib, ic = ag.ic, ie = ag.ie, n4 = ia[player], n5 = ic[player], eu = bR.eu, gX = ag.gX, eq = ib[player]; n4 <= eq; eq--)
			for (var es = ie[player]; n5 <= es; es--) {
				var gH = 4 * (es * eu + eq);
				ac.xq(player, gH) && (ac.xr(gH), gX[player]--)
			}
		ib[player] = ie[player] = 0, ia[player] = ic[player] = Math.max(eu, bR.ev)
	}
	this.di = function(gH) {
		var player, dp = ag.gX[gH];
		bM.y.pn[gH] ? dp && (aGk(player = gH, ad.aGl(player)), aGm(player), aF.g7(player), ad.clear(player), aGn(player), function(player) {
			ag.xR[player] = 0, ag.gB[player] = [], ag.gP[player] = [], ag.gQ[player] = [], ag.f9[player] = []
		}(player)) : !dp && ag.gB[gH].length || this.aGj(gH)
	}, this.aGj = function(player) {
		! function(player) {
			b9.g5.jV(player) || (ag.yG[player] = bh.a0d.aGu(), aD.zq++);
			var aGv = ad.aGl(player);
			0 === aGv.length ? b9.g5.a3A(player) && aGw() : (aGk(player, aGv), function(player, aGv) {
				var aH0 = aGv[function(aGv) {
					var aB, e4 = 0;
					for (aB = aGv.length - 1; 1 <= aB; aB--) ag.gX[aGv[aB]] > ag.gX[aGv[e4]] && (e4 = aB);
					return e4
				}(aGv)];
				9 === aD.kP && (1 === bf.eh[player] ? ax.jz(8) && ay.aH1(aH0) : aE.hT[player] && (aN.a6T(765, 0), aN.yH(280, L(133, [ag.a0N[aH0], ag.a0N[player]]), 765, aH0, bA.nV, bA.on, -1, !0)));
				if (b9.g5.a3A(player)) aGw(), aN.a00(aH0, 1);
				else {
					for (var aB = aGv.length - 1; 0 <= aB; aB--)
						if (b9.g5.a3D(aGv[aB]) && (bc.ma[4 - b9.g5.jV(player)]++, b9.g5.a3A(aGv[aB]))) return aN.a00(player, 0);
					b9.g5.jV(player) || aN.a6D(0, player, aH0)
				}
			}(player, aGv))
		}(player), aGm(player), aGn(player),
			function(player) {
				ag.me[player] = 0, ag.gB[player] = null, ag.gP[player] = null, ag.gQ[player] = null, ag.f9[player] = null
			}(player), aF.g7(player), ad.clear(player), bM.aGs.aGt(player)
	}
}

function cu() {
	var input;

	function aH2(e) {
		(e = e.target.files) && 0 < e.length && b5.aH5(e[0])
	}

	function aH9(e) {
		var f4 = new Image;
		f4.onload = aHA, f4.src = e.target.result
	}

	function aHA(e) {
		var e = e.target,
			canvas = document.createElement("canvas");
		canvas.width = e.width, canvas.height = e.height;
		canvas.getContext("2d").drawImage(e, 0, 0);
		var e = canvas.width,
			j = canvas.height;
		e > bR.aHC || j > bR.aHC || e < 10 || j < 10 ? (e = "Image dimensions must be between 10 and " + bR.aHC + ".", a0.vD ? a0.vD.showToast(e) : alert(e)) : 20 === t.sj && t.a4o().aHA(canvas)
	}
	this.dZ = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = aH2
	}, this.u5 = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.aH3 = function() {
		input.click()
	}, this.aH5 = function(aH6) {
		var g = aH6.name.split("."),
			g = g[g.length - 1].toLowerCase();
		"gif" !== g && "jpg" !== g && "jpeg" !== g && "png" !== g || ((g = new FileReader).onload = aH9, g.readAsDataURL(aH6))
	}
}

function cs() {
	this.aHE = null, this.dZ = function() {
		10 !== aD.kP ? this.aHE = null : this.aHE = new Uint32Array(aD.eg)
	}, this.j0 = function() {
		10 === aD.kP && this.ku()
	}, this.ku = function() {
		for (var gH, target, aAs, aHE = this.aHE, zc = al.k9, a3I = ag.gl, aB = al.k8 - 1; 0 <= aB; aB--)(gH = zc[aB]) >= aD.k7 || (target = Math.max(bK.dq(a3I[gH], 4), 2048), aAs = Math.max(ae.aAt(gH), 100), aHE[gH] += bK.dq(aAs * target, 1e4),
			aHE[gH] > target && (aHE[gH] = target))
	}, this.a3O = function(player, hT) {
		return hT > this.aHE[player] ? (hT = this.aHE[player], this.aHE[player] = 0) : this.aHE[player] -= hT, hT
	}
}

function dT() {
	function aHG(e) {
		var g, e = e.target.files;
		e && 0 < e.length && (e = e[0], "json" === (g = e.name.split("."))[g.length - 1].toLowerCase()) && ((g = new FileReader).onload = aHO, g.readAsText(e))
	}

	function aHO(e) {
		var aHS;
		aD.zo || (e = JSON.parse(e.target.result), aHS = aD.data = new a4H, aHT(e, aHS, "mapType", 0, 2), aHT(e, aHS, "mapProceduralIndex", 0, 255), aHT(e, aHS, "mapRealisticIndex", 0, 255), aHT(e, aHS, "mapSeed", 0, 16383), function(aHR, aHS, gI,
				max) {
				aHR = aHR[gI];
				aHS[gI] = aHZ(aHR) ? aHR.slice(0, max) : aHS[gI]
			}(e, aHS, "mapName", 20), function(aHR, aHS, gI) {
				var aHB;
				2 === aHS.mapType && (!aHZ(aHR = aHR[gI]) || aHR.length <= 20 ? aHS.mapType = 0 : ((aHB = new Image).onload = function() {
					b8.aHa.aHb(aHB, 1), aHB.onload = null, aHB = null
				}, aHB.src = aHR))
			}(e, aHS, "canvas"), aHT(e, aHS, "passableWater", 0, 1), aHT(e, aHS, "passableMountains", 0, 1), aHT(e, aHS, "playerCount", 1, 512), aHT(e, aHS, "humanCount", 1, 1), aHT(e, aHS, "selectedPlayer", 0, 0), aHT(e, aHS, "gameMode", 0, 1),
			aHT(e, aHS, "playerMode", 0, 0), aHT(e, aHS, "battleRoyaleMode", 0, 0), aHT(e, aHS, "numberTeams", 0, 8), aHT(e, aHS, "isZombieMode", 0, 0), aHT(e, aHS, "isContest", 0, 0), aHT(e, aHS, "isReplay", 0, 0), aHW(e, aHS, "elo", 16, 2,
				16383), aHT(e, aHS, "colorsType", 0, 1), aHT(e, aHS, "colorsPersonalized", 0, 1), aHW(e, aHS, "colorsData", 32, 512, 262143), aHT(e, aHS, "selectableColor", 0, 1), aHW(e, aHS, "teamPlayerCount", 16, 9, 512), aHT(e, aHS,
				"neutralBots", 0, 1), aHT(e, aHS, "botDifficultyType", 0, 3), aHT(e, aHS, "botDifficultyValue", 0, 15), aHW(e, aHS, "botDifficultyTeam", 8, 9, 15), aHW(e, aHS, "botDifficultyData", 8, 512, 15), aHT(e, aHS, "spawningType", 0, 2),
			aHT(e, aHS, "spawningSeed", 0, 16383), aHW(e, aHS, "spawningData", 16, 1024, 4095), aHT(e, aHS, "selectableSpawn", 0, 1), aHT(e, aHS, "playerNamesType", 0, 2),
			function(aHR, aHS, gI, size, max) {
				var a2P = aHR[gI];
				if (Array.isArray(a2P)) {
					for (var a2Q = new Array(size), ej = Math.min(a2P.length, size), aB = 0; aB < ej; aB++) a2Q[aB] = aHZ(a2P[aB]) ? a2P[aB].slice(0, max) : "";
					aHS[gI] = a2Q
				}
			}(e, aHS, "playerNamesData", 512, 20), aHT(e, aHS, "selectableName", 0, 1), aHT(e, aHS, "aIncomeType", 0, 2), aHT(e, aHS, "aIncomeValue", 0, 255), aHW(e, aHS, "aIncomeData", 8, 512, 255), aHT(e, aHS, "tIncomeType", 0, 2), aHT(e, aHS,
				"tIncomeValue", 0, 255), aHW(e, aHS, "tIncomeData", 8, 512, 255), aHT(e, aHS, "iIncomeType", 0, 2), aHT(e, aHS, "iIncomeValue", 0, 255), aHW(e, aHS, "iIncomeData", 8, 512, 255), aHT(e, aHS, "sResourcesType", 0, 2), aHT(e, aHS,
				"sResourcesValue", 0, 2047), aHW(e, aHS, "sResourcesData", 16, 512, 2047), t.x(), t.y.aHQ[0] = 0, t.u(19))
	}

	function aHT(aHR, aHS, gI, min, max) {
		aHR = aHR[gI];
		aHS[gI] = "number" == typeof aHR && min <= aHR && aHR <= max ? Math.floor(aHR) : aHS[gI]
	}

	function aHZ(qC) {
		return "string" == typeof qC
	}

	function aHW(aHR, aHS, gI, aHc, size, max) {
		var a2P = aHR[gI];
		if (Array.isArray(a2P)) {
			for (var a2Q = new(8 === aHc ? Uint8Array : 16 === aHc ? Uint16Array : Uint32Array)(size), ej = Math.min(a2P.length, size), aB = 0; aB < ej; aB++) a2Q[aB] = bK.hs(a2P[aB], 0, max);
			aHS[gI] = a2Q
		}
	}
	this.aHF = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aHG, input.click()
	}, this.aHH = function() {
		for (var aHK, aC7, a4m = aD.data, keys = Object.keys(a4m), aHI = {}, aB = 0; aB < keys.length; aB++) {
			var key = keys[aB];
			a4m[key] instanceof Uint8Array || a4m[key] instanceof Uint16Array || a4m[key] instanceof Uint32Array ? aHI[key] = Array.from(a4m[key]) : aHI[key] = a4m[key]
		}
		aHI.canvas = 2 === aHI.mapType && aHI.canvas ? aHI.canvas.toDataURL() : null, aHK = aHI, aHK = JSON.stringify(aHK, null, 2), aHK = new Blob([aHK], {
			type: "application/json"
		}), (aC7 = document.createElement("a")).href = URL.createObjectURL(aHK), aC7.download = "tt_scenario.json", aC7.click()
	}
}

function cV() {
	var aHd, aHe, size, jH, hT, aHf;

	function aHg(player) {
		return player < aD.k7 ? aHd * player : aHd * aD.k7 + aHe * (player - aD.k7)
	}
	this.dZ = function() {
		aHd = aD.k7 < 16 ? 12 : 8, aHe = 4;
		var ej = aHg(aD.eg);
		size = new Uint8Array(aD.eg), jH = new Uint16Array(ej), hT = new Uint32Array(ej), aHf = new Uint8Array(ej)
	}, this.q3 = function(a7a, aHh) {
		var aHi = this.gm(a7a, aHh),
			aHh = (this.gk(a7a, aHh, 0), b9.g5.g8(a7a, aHi));
		bc.g9(a7a, aHi - aHh, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.aGy = function(player, aHh) {
		var aHl, aHh = function(player, aHh) {
			var aB, l0 = aHg(player);
			for (aB = size[player] - 1; 0 <= aB; aB--)
				if (jH[l0 + aB] === aHh) return aB;
			return size[player]
		}(player, aHh);
		aHh !== size[player] && (aHl = hT[aHg(player) + aHh], this.gA(player, aHh), this.jE(player, aHl, aD.eg))
	}, this.jT = function(player, aHh) {
		for (var l0 = aHg(player), aB = size[player] - 1; 0 <= aB; aB--)
			if (jH[l0 + aB] === aHh) return !0;
		return !1
	}, this.jl = function(player) {
		return player < aD.k7 ? size[player] < aHd : size[player] < aHe
	}, this.fq = function(player) {
		return size[player]
	}, this.fv = function(player, aB) {
		return jH[aHg(player) + aB]
	}, this.fw = function(player, aB) {
		return hT[aHg(player) + aB]
	}, this.gm = function(player, aHh) {
		for (var l0 = aHg(player), aB = size[player] - 1; 0 <= aB; aB--)
			if (jH[l0 + aB] === aHh) return hT[l0 + aB];
		return 0
	}, this.aGp = function(player) {
		for (var l0 = aHg(player), fB = 0, aB = size[player] - 1; 0 <= aB; aB--) fB += hT[l0 + aB];
		return fB
	}, this.gk = function(player, aHh, aHl) {
		for (var l0 = aHg(player), aB = size[player] - 1; 0 <= aB; aB--) jH[l0 + aB] === aHh && (hT[l0 + aB] = aHl)
	}, this.gV = function(player, aB, aHl) {
		hT[aHg(player) + aB] = Math.max(aHl, 0)
	}, this.gW = function(player, aB) {
		aHf[aHg(player) + aB] = 0
	}, this.fx = function(player, aB) {
		return aHf[aHg(player) + aB]
	}, this.jE = function(player, aHl, aHh) {
		b9.g5.a3D(aHh) && bc.ma[6 - b9.g5.jV(player)]++;
		for (var l0 = aHg(player), aB = size[player] - 1; 0 <= aB; aB--)
			if (jH[l0 + aB] === aHh) return hT[l0 + aB] += aHl, void(hT[l0 + aB] = hT[l0 + aB] > aD.a3K ? aD.a3K : hT[l0 + aB]);
		jH[l0 + size[player]] = aHh, hT[l0 + size[player]] = aHl, aHf[l0 + size[player]] = 1, size[player]++, player < aD.k7 && (aHh === aD.eT ? aN.a00(player, 5) : player === aD.eT && af.a6F(aHh))
	}, this.gA = function(player, e4) {
		var f2, l0;
		if (0 !== size[player])
			for (l0 = aHg(player), size[player]--, f2 = e4; f2 < size[player]; f2++) jH[l0 + f2] = jH[l0 + f2 + 1], hT[l0 + f2] = hT[l0 + f2 + 1], aHf[l0 + f2] = aHf[l0 + f2 + 1]
	}, this.aGl = function(player) {
		for (var f2, l0, aGv = [], aB = al.k8 - 1; 0 <= aB; aB--)
			for (l0 = aHg(al.k9[aB]), f2 = size[al.k9[aB]] - 1; 0 <= f2; f2--)
				if (jH[l0 + f2] === player) {
					aGv.push(al.k9[aB]);
					break
				} return aGv
	}
}

function cW() {
	var aHm;

	function aHo(player) {
		var e3, jm;
		return b9.g5.jV(player) && player < aD.k7 ? 0 : (e3 = aHm[bK.dq((aD.eg - 1) * ag.gX[player], aD.jr)], be.k4() < 1920 && (e3 = Math.max(bK.dq(100 * (13440 - 6 * be.k4()), 1920), e3)), jm = ae.jn(player), ag.gl[player] > jm && (e3 -= bK.dq(2 *
			e3 * (ag.gl[player] - jm), jm)), Math.min(Math.max(e3, 0), 700))
	}

	function aI0(nG) {
		for (var gX = ag.gX, k9 = al.k9, aB = al.k8 - 1; 0 <= aB; aB--) {
			var gH = k9[aB];
			b9.g5.g8(gH, bK.dq(nG * gX[gH], 32))
		}
	}

	function aHx() {
		var wT = aD.eT;
		bN.fF[0] = ag.gl[wT] - ag.a3H[wT]
	}

	function aHz(e4) {
		var wT = aD.eT;
		bc.ma[e4] += ag.gl[wT] - ag.a3H[wT] - bN.fF[0]
	}
	this.dg = function() {
		for (var ej = aD.eg, aB = (aHm = new Uint16Array(ej), 0); aB < ej; aB++) aHm[aB] = 100 + aHn(bK.dq(25600 * aB, ej - 4), 9)
	}, this.dZ = function() {
		0 === aD.data.iIncomeType ? this.aAt = aHo : 1 === aD.data.iIncomeType ? this.aAt = function(player) {
			return bK.dq(aD.data.iIncomeValue * aHo(player), 64)
		} : this.aAt = function(player) {
			return bK.dq(aD.data.iIncomeData[player] * aHo(player), 64)
		}
	}, this.j0 = function() {
		if (be.k4() % 10 == 9 && (function() {
				aHx();
				for (var k9 = al.k9, gl = ag.gl, aB = al.k8 - 1; 0 <= aB; aB--) {
					var gH = k9[aB],
						aHy = bK.dq(ae.aAt(gH) * gl[gH], 1e4);
					b9.g5.g8(gH, Math.max(aHy, 1))
				}
				aHz(9)
			}(), function() {
				if (0 !== aD.data.aIncomeType) {
					if (aHx(), 1 === aD.data.aIncomeType)
						for (var gX = ag.gX, k9 = al.k9, nG = aD.data.aIncomeValue, aB = al.k8 - 1; 0 <= aB; aB--) {
							var gH = k9[aB];
							b9.g5.g8(gH, bK.dq(nG * gX[gH], 128))
						} else 2 === aD.data.aIncomeType && function() {
							for (var gX = ag.gX, k9 = al.k9, nG = aD.data.aIncomeData, aB = al.k8 - 1; 0 <= aB; aB--) {
								var gH = k9[aB];
								b9.g5.g8(gH, bK.dq(nG[gH] * gX[gH], 128))
							}
						}();
					aHz(18)
				}
			}(), be.k4() % 100 == 99)) {
			if (aHx(), 0 === aD.data.tIncomeType) aI0(32);
			else if (1 === aD.data.tIncomeType) aI0(aD.data.tIncomeValue);
			else
				for (var gX = ag.gX, k9 = al.k9, nG = aD.data.tIncomeData, aB = al.k8 - 1; 0 <= aB; aB--) {
					var gH = k9[aB];
					b9.g5.g8(gH, bK.dq(nG[gH] * gX[gH], 32))
				}
			aHz(8)
		}
	}, this.jn = function(player) {
		return Math.min(100 * ag.gX[player], aD.a4D)
	}, this.p2 = function(player, p3) {
		b9.g5.g8(p3, bN.fG[0]), bc.pP(player, p3), af.aHq(player, bN.fG[0] + bN.fG[1]), af.pQ(p3, bN.fG[0]), b9.g5.mF(player)
	}, this.aHr = function() {
		for (var ej = al.k8, zc = al.k9, l0 = 0, a3I = ag.gl, aB = 0; aB < ej; aB++) l0 += a3I[zc[aB]];
		return l0
	}, this.aHs = function(aHt) {
		for (var gH, ej = al.k8, zc = al.k9, l0 = 0, a3I = ag.gl, eh = bf.eh, aB = 0; aB < ej; aB++) eh[gH = zc[aB]] === aHt && (l0 += a3I[gH]);
		return l0
	}
}

function cY() {
	var aI4, aI5, aI6, aI7, aI8, aI9, aIA, aIB, aIC, aID, aIE, aIF, aIG, aIH, aII, aIJ, aIK, aIL, aIN, aIO, aC0, aIP, aIQ, aIX, aIY, aIM = null,
		aIS = 0,
		aIT = !1,
		aIU = new Float32Array(4),
		aIV = 0,
		aIW = !0,
		aA3 = 400,
		aIZ = 0;

	function qY() {
		aIC = Math.floor(+h.hu), aID = Math.floor(.5 * aIC)
	}

	function aIa() {
		var aB, aIf;
		for (uc.font = b9.qV.sJ(1, 100 * aIE), aIf = 80 / Math.floor(uc.measureText(b9.rU.z5(aD.a3K)).width), uc.font = b9.qV.sJ(1, 100), aB = aD.eg - 1; 0 <= aB; aB--) aIB[aB] = 100 / Math.floor(uc.measureText(ag.a0N[aB]).width), aIA[aB] = Math.min(
			aIf, aIB[aB])
	}

	function aIg(aB) {
		return !aIZ || (aB = ag.gl[aB]) < 1e6 ? 1 : aB < 1e7 ? aIU[0] : aIU[Math.min(Math.floor(Math.log10(aB)) - 6, 3)]
	}

	function aIe(hm) {
		aIL = !1, aIK = 1, aII = aIJ = 0, aIW && (b9.qV.textAlign(hm, 1), b9.qV.textBaseline(hm, 1));
		for (var aIm, aIn, aB, aIo, fontSize, aIp, n4 = iL / hv, n5 = iM / hv, nH = (h.i + iL) / hv, nI = (h.j + iM) / hv, aIq = 0 !== ag.me[aD.eT] && !b9.g5.jV(aD.eT), f2 = al.k8 - 1; 0 <= f2; f2--) aB = al.k9[f2], (fontSize = Math.floor(aIH * hv *
			aIg(aB) * aIA[aB] * aI8[aB])) < aIG || aIC <= fontSize || aI6[aB] + aI8[aB] > n4 && aI6[aB] < nH && aI7[aB] + aI9[aB] > n5 && aI7[aB] < nI && (aIm = Math.floor(h.i * (aI6[aB] + aI8[aB] / 2 - n4) / (nH - n4)), aIn = Math.floor(h.j * (
			aI7[aB] + aI9[aB] / 2 - n5) / (nI - n5) - .1 * fontSize), aIo = ac.a85[aB], hm.font = b9.qV.sJ(1 === ag.a39[aB] ? 4 : 1, fontSize), hm.fillStyle = aIr(fontSize, aIo % 2), aIZ ? aIs(hm, aB, fontSize, aIm, aIn, aIo) : aIt(aB,
			fontSize, aIm, aIn, hm), aIL = !0, 0 < aC0[aB] ? function(aIm, aIn, fontSize, aB, hm) {
			0 === js[aB] ? aj.rl.yw(aIO[aB]) ? (function(aIm, aIn, fontSize, player, pE, hm) {
				for (var x0 = aIn, hl = (hm.globalAlpha = aJ1(fontSize), aIg(player) * (aIZ ? aIV : aIB[player])), wz = aIm - .5 * fontSize / hl - .9 * fontSize, f3 = 0; f3 < 2; f3++) hm.fillText(aj.rl.yo(pE), wz, x0), wz = aIm + .5 *
					fontSize / hl + .9 * fontSize;
				hm.globalAlpha = 1
			}(aIm, aIn, fontSize, aB, aIO[aB], hm), aIv(aIm, aIn, fontSize, 0, 0, hm)) : aj.rl.yy(aIO[aB]) ? (aJ4(aIm, aIn, fontSize, aIO[aB], 0, hm), aIv(aIm, aIn, fontSize, 0, 1, hm)) : (aJ4(aIm, aIn, fontSize, aIO[aB], 1, hm), aIv(aIm,
				aIn, fontSize, 1, 0, hm)) : aJ4(aIm, aIn, fontSize, aIO[aB], 0, hm)
		}(aIm, aIn, fontSize, aB, hm) : 0 === js[aB] && aIv(aIm, aIn, fontSize, 0, 0, hm), aIq && (0 < aC0[aB + aD.eg] || 0 < aC0[aB + 2 * aD.eg] || 0 < aC0[aB + 3 * aD.eg] || 0 < aC0[aB + 4 * aD.eg]) && function(aIm, aIn, fontSize, aB, hm) {
			var f4, gC = -1;
			for (f4 = 4; 1 <= f4; f4--) 0 < aC0[aB + f4 * aD.eg] && gC++;
			for (f4 = 1; f4 < 5; f4++) 0 < aC0[aB + f4 * aD.eg] && (! function(aIm, aIn, fontSize, f4, aB, aIz, dp, hm) {
				var a2d;
				if (1 === f4) {
					aB = aIO[aB + aD.eg];
					if (!aj.rl.yx(aB)) return function(aIm, aIn, fontSize, pE, aIz, hm) {
						hm.globalAlpha = aJ1(fontSize);
						aIm -= .534 * aIz * fontSize, aIz = aIn + 1.59 * fontSize;
						hm.font = b9.qV.sJ(0, .785 * fontSize), hm.fillText(aj.rl.yo(pE), aIm, aIz), hm.globalAlpha = 1
					}(aIm, aIn, fontSize, aB, aIz, hm);
					a2d = aj.wS.yN[aB - 1024 + aj.rl.yZ]
				} else a2d = 2 === f4 ? aL.a52()[4].canvas[+(dp < 255)] : (3 === f4 ? aL.a52()[5] : aL.a52()[6]).canvas[0];
				aB = aj.wS.yO, dp = .8 * fontSize / aB, f4 = aIm - .5 * dp * aB - .534 * aIz * fontSize, aIm = aIn + 1.4 * dp * aB;
				hm.setTransform(dp, 0, 0, dp, f4, aIm), hm.globalAlpha = aJ1(fontSize), hm.drawImage(a2d, 0, 0), hm.globalAlpha = 1, hm.setTransform(1, 0, 0, 1, 0, 0)
			}(aIm, aIn, fontSize, f4, aB, gC, aC0[aB + f4 * aD.eg], hm), gC -= 2)
		}(aIm, aIn, fontSize, aB, hm), (aIp = aIE * fontSize) < aIG || (hm.font = b9.qV.sJ(1, aIp), aIn += Math.floor(.78 * fontSize), aIZ ? aIt(aB, aIp, aIm, aIn, hm) : aIs(hm, aB, aIp, aIm, aIn, aIo)))
	}

	function aIt(aB, fontSize, eq, es, hm) {
		var ___id = aB;
		var showName = aB < aD.k7 || !__fx.settings.hideBotNames;
		if (showName) hm.fillText(ag.a0N[aB], eq, es), aB < aD.k7 && 2 !== ag.a39[aB] || (aB = fontSize / aIB[aB], hm.fillRect(eq - .5 * aB, es + b9.qV.yp * fontSize, aB, Math.max(1, .1 * fontSize)));
		aIZ && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (hm.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			hm.fillText(__fx.utils.getDensity(___id), eq, showName ? es + fontSize : es)
		);
	}

	function aIs(hm, aB, fontSize, aIm, aIn, aIo) {
		var ___id = aB;
		aB = b9.rU.z5(ag.gl[aB]);
		aIo >> 1 & 1 ? (hm.lineWidth = .05 * fontSize, hm.strokeStyle = aIr(fontSize, aIo % 2), hm.strokeText(aB, aIm, aIn)) : (1 < aIo && (hm.lineWidth = .12 * fontSize, hm.strokeStyle = aIr(fontSize, aIo), hm.strokeText(aB, aIm, aIn)), hm.fillText(
			aB, aIm, aIn));
		aIZ || __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (hm.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)), hm.fillText(__fx.utils.getDensity(___id), aIm, aIn + fontSize))
	}

	function aIv(aIm, aIn, fontSize, aIz, aJ0, hm) {
		var a5X = .95 * fontSize / aIQ,
			aIm = aIm - .5 * a5X * aIP + .8 * aIz * fontSize,
			aIz = aIn - 1.76 * a5X * aIQ - (.35 - b9.qV.yp + .7) * aJ0 * fontSize;
		hm.setTransform(a5X, 0, 0, a5X, aIm, aIz), hm.globalAlpha = aJ1(fontSize), hm.drawImage(ab.get(4), 0, 0), hm.globalAlpha = 1, hm.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aJ4(aIm, aIn, fontSize, pE, aIz, hm) {
		var hg, wz, a5X;
		hm.globalAlpha = aJ1(fontSize), aj.rl.yx(pE) ? (hg = aj.wS.yO, hm.setTransform(a5X = 1.1 * fontSize / hg, 0, 0, a5X, wz = aIm - .5 * a5X * hg - .8 * aIz * fontSize, a5X = aIn - 1.55 * a5X * hg), hm.drawImage(aj.wS.yN[pE - 1024 + aj.rl.yZ], 0,
			0), hm.setTransform(1, 0, 0, 1, 0, 0)) : (wz = aIm - .8 * aIz * fontSize, a5X = aIn - (.35 - b9.qV.yp + 1) * fontSize, hm.fillText(aj.rl.yo(pE), wz, a5X)), hm.globalAlpha = 1
	}

	function aIr(fontSize, aIo) {
		return aID <= fontSize && fontSize < aIC ? bf.aJ6[aIo] + aJ1(fontSize).toFixed(3) + ")" : bf.aJ7[aIo]
	}

	function aJ1(fontSize) {
		return aID <= fontSize && fontSize < aIC ? 1 - (fontSize - aID) / (aIC - aID) : 1
	}

	function aJG(hl, i) {
		return 1 + Math.floor(aIF * hl * i)
	}

	function aJD(aB) {
		for (var left = aI6[aB], f2 = aI6[aB] - ag.ia[aB] - 1; 0 <= f2; f2--)
			if (!aJI(aB, --left, aI7[aB], aI9[aB])) {
				left++;
				break
			} var right = aI6[aB];
		for (f2 = ag.ib[aB] - aI6[aB] - aI8[aB]; 0 <= f2; f2--)
			if (!aJI(aB, ++right + aI8[aB] - 1, aI7[aB], aI9[aB])) {
				right--;
				break
			} var eq = Math.floor((left + right) / 2),
			top = aI7[aB];
		for (f2 = aI7[aB] - ag.ic[aB] - 1; 0 <= f2; f2--)
			if (!aJJ(aB, eq, --top, aI8[aB])) {
				top++;
				break
			} var bottom = aI7[aB];
		for (f2 = ag.ie[aB] - aI7[aB] - aI9[aB]; 0 <= f2; f2--)
			if (!aJJ(aB, eq, ++bottom + aI9[aB] - 1, aI8[aB])) {
				bottom--;
				break
			} var es = Math.floor((top + bottom) / 2);
		aJA(aB, eq, es, aI8[aB], aI9[aB]) && (aI6[aB] = eq, aI7[aB] = es)
	}

	function aJA(player, eq, es, i, j) {
		em = Math.floor(.2 * i);
		for (var em, f4 = eq + i - 1; eq <= f4; f4--)
			if (!aJI(player, f4, es, j)) return;
		for (f4 = es + j - 1 - (em = (em = Math.floor(.25 * j)) < 1 ? 1 : em); es + em <= f4; f4--)
			if (!aJJ(player, eq, f4, i)) return;
		return 1
	}

	function aJI(player, eq, es, j) {
		return ac.xq(player, 4 * (es * bR.eu + eq)) && ac.xq(player, 4 * ((es + j - 1) * bR.eu + eq))
	}

	function aJJ(player, eq, es, i) {
		return ac.xq(player, 4 * (es * bR.eu + eq)) && ac.xq(player, 4 * (es * bR.eu + eq + i - 1))
	}
	this.dZ = function() {
		if (aIZ = bi.eG.data[7].value || 8 === aD.kP, aA3 = 0 === (aA3 = bi.eG.data[11].value) ? 280 : 1 === aA3 ? 187 : 112, aIL = !1, aIH = .88, aIE = .5, aIF = 1.8, aIG = 12 - 3 * bi.eG.data[9].value, aI5 = aI4 = 0, aI6 = new Uint16Array(aD
				.eg), aI7 = new Uint16Array(aD.eg), aI8 = new Uint16Array(aD.eg), aI9 = new Uint16Array(aD.eg), aIA = new Float32Array(aD.eg), aIB = new Float32Array(aD.eg), aIO = new Uint16Array(2 * aD.eg), aC0 = new Uint8Array(5 * aD.eg), aIX =
			new Uint8Array(aD.eg), aIY = new Uint8Array(aD.eg), aIW || (aIM = aIM || document.createElement("canvas")), qY(), aIJ = aII = 0, aIK = 1, aIZ) {
			var aB, aIf;
			for (aIa(), uc.font = b9.qV.sJ(1, 100), aIf = 100 / Math.floor(uc.measureText("900 000").width), aB = aD.eg - 1; 0 <= aB; aB--) aIA[aB] = Math.min(aIf, 2 * aIB[aB]);
			aIV = aIf, aIU[0] = 100 / (aIf * Math.floor(uc.measureText("5 000 000").width)), aIU[1] = 100 / (aIf * Math.floor(uc.measureText("50 000 000").width)), aIU[2] = 100 / (aIf * Math.floor(uc.measureText("500 000 000").width)), aIU[3] =
				100 / (aIf * Math.floor(uc.measureText("1 000 000 000").width))
		} else aIa();
		! function() {
			var aB;
			for (aB = aD.eg - 1; 0 <= aB; aB--) ag.gX[aB] < 12 ? (aI6[aB] = ag.ia[aB] + 1, aI7[aB] = ag.ic[aB] + 1, aI8[aB] = 1, aI9[aB] = 1) : (aI6[aB] = ag.ia[aB], aI7[aB] = ag.ic[aB] + 1, aI8[aB] = 4, aI9[aB] = 2);
			if (aD.h7)
				for (aB = 0; aB < aD.k7; aB++) aI8[aB] = 0;
			aIP = ab.get(4).width, aIQ = ab.get(4).height
		}()
	}, this.aHq = function(gH, a6V) {
		a6V > 18 * ag.gX[gH] ? (aIY[gH] = 6, ac.a85[gH] = 2 + ac.a85[gH] % 2) : (aIX[gH] = 4, (ac.a85[gH] < 2 || 3 < ac.a85[gH]) && (ac.a85[gH] = 6 + ac.a85[gH] % 2))
	}, this.pQ = function(gH, a6V) {
		a6V > 6 * ag.gX[gH] ? (aIY[gH] = 6, ac.a85[gH] = 4 + ac.a85[gH] % 2) : (aIX[gH] = 4, (ac.a85[gH] < 4 || 5 < ac.a85[gH]) && (ac.a85[gH] = 8 + ac.a85[gH] % 2))
	}, this.resize = function() {
		qY(), aIW || aIe(aIN)
	}, this.a49 = function() {
		for (var aB = 0; aB < aD.k7; aB++) ag.ib[aB] - ag.ia[aB] != 3 || ag.ie[aB] - ag.ic[aB] != 3 ? (aI6[aB] = ag.ia[aB] + (ag.ib[aB] !== ag.ia[aB] ? 1 : 0), aI7[aB] = ag.ic[aB], aI8[aB] = 1, aI9[aB] = 1) : (aI6[aB] = ag.ia[aB], aI7[aB] = ag
			.ic[aB] + 1, aI8[aB] = 4, aI9[aB] = 2)
	}, this.q4 = function(player, e4, aIh) {
		! function(player, e4, aIh) {
			player += e4 * aD.eg;
			0 === e4 ? aIO[player] === aIh && 0 < aC0[player] ? aC0[player] = 0 : (aIO[player] = aIh, aC0[player] = aj.rl.yw(aIh) ? 255 : 64) : 1 === e4 ? (aC0[player] = 64, aIO[player] = aIh) : aC0[player] = aIh
		}(player, e4, aIh), 2 === aD.zo && this.mQ(!0)
	}, this.ub = function() {
		aIW ? aIe(uc) : aIL && (1 !== aIK ? (uc.imageSmoothingEnabled = !0, uc.setTransform(aIK, 0, 0, aIK, 0, 0), uc.drawImage(aIM, -aII / aIK, -aIJ / aIK), uc.setTransform(1, 0, 0, 1, 0, 0), uc.imageSmoothingEnabled = !1) : uc.drawImage(aIM, -
			aII, -aIJ))
	}, this.a8s = function(i4, i7) {
		aII += i4, aIJ += i7
	}, this.a1J = function(i4, i7) {
		af.a8s(i4, i7)
	}, this.zoom = function(a2C, lK, lL) {
		aIK *= a2C, aII = (aII + lK) * a2C - lK, aIJ = (aIJ + lL) * a2C - lL
	}, this.mQ = function(bs) {
		return !aIW && !(!aIT && !bs && be.eI < aIS + (1 === aIK && 0 === aII && 0 === aIJ && (aD.a4c() || aD.h7 || 2 === aD.zo) ? 1e3 : aA3) || (aIT = !1, aIS = be.eI, aIe(aIN), 0))
	}, this.aIk = function(aB) {
		return aIg(aB) * aIA[aB]
	}, this.aIl = function(player) {
		return aIA[player]
	}, this.j0 = function() {
		be.k4() % 10 == 9 && (aIT = aD.a4e() && !aD.a4c()), !aD.a4c() && 4 <= ++aI5 && function() {
			var aB, f2, f3;
			for (aI5 = 0, f3 = 4; 1 <= f3; f3--)
				for (f2 = al.k8 - 1; 0 <= f2; f2--) aB = al.k9[f2] + f3 * aD.eg, 0 < aC0[aB] && aC0[aB] < 255 && aC0[aB]--;
			if (2 !== aD.zo)
				for (f2 = al.k8 - 1; 0 <= f2; f2--) aB = al.k9[f2], 0 < aC0[aB] && aC0[aB] < 255 && aC0[aB]--
		}();
		var aB, f2, ej = Math.floor(.1 * al.k8);
		for (ej = (ej = ej < 8 ? 8 : ej) > al.k8 ? al.k8 : ej, aB = aI4 + ej - 1; aI4 <= aB; aB--) f2 = aB % al.k8, ! function(aB) {
			var hl = aIg(aB) * aIA[aB];
			0 < aI8[aB] && aJA(aB, aI6[aB], aI7[aB], aI8[aB], aI9[aB]) ? ! function(aB) {
				for (var eq, es, i, j, eN = !1, f3 = 0; f3 < 8; f3++) {
					if (i = aI8[aB] + 2, j = aI9[aB] + 2, i > ag.ib[aB] - ag.ia[aB] + 1 || j > ag.ie[aB] - ag.ic[aB] + 1) return eN;
					if (eq = aI6[aB] - 1, es = aI7[aB] - 1, !aJA(aB, eq, es, i, j)) return eN;
					aI6[aB] = eq, aI7[aB] = es, aI8[aB] = i, aI9[aB] = j, eN = !0
				}
				return eN
			}(aB) && function(aB, hl) {
				for (var eq, es, i, j, eN = !1, aC9 = aI8[aB], nG = 1 + Math.floor(.02 * aC9), f3 = 1; f3 < 5; f3++) {
					if ((i = aC9 + f3 * nG) > ag.ib[aB] - ag.ia[aB] + 1) return eN;
					if ((j = aJG(hl, i)) > ag.ie[aB] - ag.ic[aB] + 1) return eN;
					eq = ag.ia[aB] + Math.floor(Math.random() * (ag.ib[aB] - ag.ia[aB] + 2 - i)), es = ag.ic[aB] + Math.floor(Math.random() * (ag.ie[aB] - ag.ic[aB] + 2 - j)), aJA(aB, eq, es, i, j) && (aI6[aB] = eq, aI7[aB] = es, aI8[
						aB] = i, aI9[aB] = j, eN = !0)
				}
				return eN
			}(aB, hl) && aJD(aB) : ! function(aB, hl) {
				var j, eq = aI6[aB] + 1,
					es = aI7[aB] + 1,
					i = aI8[aB] - 2;
				for (;;) {
					if (i < 1) {
						aI8[aB] = 0;
						break
					}
					if (j = aJG(hl, i), aJA(aB, eq, es, i, j)) return aI6[aB] = eq, aI7[aB] = es, aI8[aB] = i, aI9[aB] = j, 1;
					eq++, es++, i -= 2
				}
				return
			}(aB, hl) ? function(aB, hl) {
				var eq, es, i, j, f3, nM, jO = ag.ib[aB] - ag.ia[aB] + 1,
					aJH = Math.floor(.02 * jO);
				for (nM = -6 * (aJH = aJH < 1 ? 1 : aJH), f3 = jO; nM <= f3; f3 -= aJH)
					if (j = aJG(hl, i = 0 < f3 ? f3 : 1), eq = ag.ia[aB] + Math.floor(Math.random() * (ag.ib[aB] - ag.ia[aB] + 2 - i)), es = ag.ic[aB] + Math.floor(Math.random() * (ag.ie[aB] - ag.ic[aB] + 2 - j)), aJA(aB, eq, es, i, j))
						return aI6[aB] = eq, aI7[aB] = es, aI8[aB] = i, aI9[aB] = j
			}(aB, hl) : aJD(aB)
		}(al.k9[f2]);
		aI4 = (aI4 += ej) % al.k8
	}, this.mL = function() {
		var aB, gH, yu, yv;
		if (be.k4() % 4 == 1)
			for (aB = al.k8 - 1; 0 <= aB; aB--) gH = al.k9[aB], ac.a85[gH] < 2 || ((yu = Math.max(aIX[gH] - 1, 0)) === (yv = Math.max(aIY[gH] - 1, 0)) ? 0 === yu && (ac.a85[gH] %= 2) : 0 === yv && ac.a85[gH] < 6 && (ac.a85[gH] += 4), aIX[gH] =
				yu, aIY[gH] = yv)
	}, this.a6F = function(player) {
		var aB = player + 2 * aD.eg,
			dp = aC0[aB];
		return 0 < dp && (aN.zv(50, player), aC0[aB] = 0, 255 === dp)
	}, this.a5H = function(player) {
		return 255 === aC0[player + 2 * aD.eg]
	}
}

function ca() {
	var aJK, aJL, aJM;
	this.dZ = function() {
		aJK =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), aJL =
			"Corrupted Earth;Returning Nature;Abandoned Areas;Restricted Area;Contaminated Area;Burning Land;Barren Land;Ravenland;Deadland;Dangerous Area;Devastated Land;Swampland;Plundered Land;Overrun Area;Undead Masses;Roaming Horde;Lurking Horde;Fallen Territory;Ghostland;Doomstruck Land;Infected Enclave;Plagued Nation;Forbidden Zone;Toxic Ground;Scorched Earth;Ruined City;Cursed Land;Diseased Colony;Forsaken Fields;Zombie Overlord"
			.split(";"), aJM = "Protected Zone;Quarantine Zone;Last Bastion;Buffer Zone;Liberated Area;Resistance Zone;Rising Territory;Recovered Region;Rebel Sector;Emerging Lands;Safety Corridor;Isolation Area;Final Stronghold;Guarded Sector"
			.split(";");
		for (var a6X = ["K ", " Y", "E ", " Z", " z", " s", "S "], aJN = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], aB = aJK.length - 1; 0 <= aB; aB--)
			for (var f2 = a6X.length - 1; 0 <= f2; f2--) aJK[aB] = aJK[aB].replace(a6X[f2], aJN[f2]);
		if (__fx.settings.realisticNames) aJK = realisticNames;
	}, this.a4O = function() {
		var ej = aD.k7,
			a0N = ag.a0N,
			a0S = ag.a0S,
			playerNamesData = aD.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < ej)
			for (var aB = 0; aB < ej; aB++) a0N[aB] = a0S[aB] = "Player " + ax.jP(1e3);
		else
			for (aB = 0; aB < ej; aB++) a0N[aB] = a0S[aB] = playerNamesData[aB]
	}, this.a7 = function() {
		if (9 === aD.kP) {
			for (var e3 = ax.random(), aJT = aJM, aJU = aJL, hT = aE.hT, ej = aJT.length, l0 = aD.data.teamPlayerCount[7], a0N = ag.a0N, a0S = ag.a0S, aB = l0 - 1; aB >= aD.k7; aB--) a0N[aB] = a0S[aB] = aJT[(aB + e3) % ej];
			for (ej = aJU.length - 1, aB = l0; aB < aD.eg; aB++) a0N[aB] = a0S[aB] = aJU[hT[aB] ? ej : aB % ej]
		} else(2 === aD.data.playerNamesType ? function() {
			for (var ej = aD.eg, a0N = ag.a0N, a0S = ag.a0S, playerNamesData = aD.data.playerNamesData, aB = aD.k7; aB < ej; aB++) a0N[aB] = a0S[aB] = playerNamesData[aB]
		} : 1 === aD.data.playerNamesType ? function() {
			for (var a0N = ag.a0N, a0S = ag.a0S, aB = aD.k7; aB < aD.eg; aB++) a0N[aB] = a0S[aB] = "Bot " + ax.jP(1e3)
		} : function() {
			for (var aJV = aJK, ej = aJV.length, e3 = ax.random(), a0N = ag.a0N, a0S = ag.a0S, aB = aD.k7; aB < aD.eg; aB++) a0N[aB] = a0S[aB] = aJV[(aB + e3) % ej]
		})()
	}
}

function ct() {
	this.aJW = [], this.aJX = [], this.dZ = function() {
		this.aJW = [], this.aJX = []
	}, this.j0 = function() {
		0 <= this.aJW.length && this.aJY(this.aJW), 0 <= this.aJX.length && this.aJY(this.aJX)
	}, this.aJY = function(g) {
		for (var f3 = -1, aB = g.length - 1; 0 <= aB; aB--)
			if (g[aB].eI--, g[aB].eI <= 0) {
				f3 = aB;
				break
			} for (aB = f3; 0 <= aB; aB--) g.shift()
	}, this.a5A = function(id, zc, aJZ) {
		return this.f5(this.aJW, id, zc, aJZ)
	}, this.aJa = function(id, zc, aJZ) {
		return this.f5(this.aJX, id, zc, aJZ)
	}, this.f5 = function(g, id, zc, aJZ) {
		return ! function(g, id, zc) {
			var aB, hc;
			for (aB = zc.length - 1; 0 <= aB; aB--)
				for (hc = g.length - 1; 0 <= hc; hc--)
					if (g[hc].player === zc[aB] && id === g[hc].id) return 1;
			return
		}(g, id, zc) && (aJZ && function(g, id, zc) {
			var aB;
			for (aB = zc.length - 1; 0 <= aB; aB--) g.push({
				player: zc[aB],
				id: id,
				eI: 384
			})
		}(g, id, zc), !0)
	}
}

function cZ() {
	this.a0S = new Array(aD.eg), this.a0N = new Array(aD.eg), this.a39 = new Uint8Array(aD.eg), this.me = new Uint8Array(aD.eg), this.ia = new Uint16Array(aD.eg), this.ic = new Uint16Array(aD.eg), this.ib = new Uint16Array(aD.eg), this.ie =
		new Uint16Array(aD.eg), this.gX = new Uint32Array(aD.eg), this.xR = new Uint32Array(aD.eg), this.gl = new Uint32Array(aD.eg), this.gB = null, this.gP = null, this.gQ = null, this.f9 = null, this.pu = new Uint16Array(aD.eg), this.j9 =
		new Uint16Array(aD.eg), this.jA = new Uint16Array(aD.eg), this.yG = new Uint16Array(aD.eg), this.a0L = new Uint8Array(aD.eg), this.a3H = new Uint16Array(aD.eg), this.dZ = function() {
			this.a0S.fill(""), this.a0N.fill(""), this.a39.fill(0), this.me.fill(0), this.ia.fill(0), this.ic.fill(0), this.ib.fill(0), this.ie.fill(0), this.gX.fill(0), this.xR.fill(0), this.gl.fill(0), this.gB = new Array(aD.eg), this.gP =
				new Array(aD.eg), this.gQ = new Array(aD.eg), this.f9 = new Array(aD.eg), this.pu.fill(0), this.j9.fill(0), this.jA.fill(0), this.yG.fill(0), this.a0L.fill(0), this.a3H.fill(0)
		}
}

function cr() {
	this.aCU = function(player) {
		aG.md(player), aD.zq++, ag.a39[player] = 2, ag.yG[player] = bh.a0d.aGu(), player === aD.eT && (aX.show(!1, !1), aW.aAh(), bQ.zZ.a0J()), af.a6F(player)
	}
}

function cT() {
	this.k9 = null, this.k8 = 0, this.a4S = function() {
		for (this.k8 = 0, aB = aD.eg - 1; 0 <= aB; aB--) 0 !== ag.me[aB] && this.k8++;
		this.k9 = new Uint16Array(this.k8);
		for (var ej = 0, aB = 0; aB < aD.eg; aB++) 0 !== ag.me[aB] && (this.k9[ej++] = aB)
	}, this.mK = function() {
		for (var gX = ag.gX, xR = ag.xR, a0L = ag.a0L, k9 = al.k9, aB = al.k8 - 1; 0 <= aB; aB--) {
			var dp, gH = k9[aB];
			gX[gH] <= bK.dq(xR[gH], 4) ? ak.di(gH) : gX[gH] >= xR[gH] ? (dp = gX[gH], 250 <= (xR[gH] = dp) && (a0L[gH] = 1)) : xR[gH] -= Math.max(1, bK.dq(xR[gH] - gX[gH], 1e3))
		}
		this.aJe()
	}, this.aJe = function() {
		for (var me = ag.me, kz = this.k9, aBN = this.k8, aB = aBN - 1; 0 <= aB; aB--) 0 === me[kz[aB]] && (kz[aB] = kz[--aBN]);
		this.k8 = aBN
	}
}

function cb() {
	var aJf;
	this.kY = null, this.kX = 0, this.dZ = function() {
		aJf = [], 9 === aD.kP && this.aJg()
	}, this.aJg = function() {
		var aJh = [60, 80, 105, 150, 190, 333];
		this.kY = [0, 0, 0, 0, 0, 0], this.kX = 0, aD.k7 < 9 ? (this.kX = 256 - bK.dq(275 * aD.k7, 100), this.kY[0] = aD.eg - aD.k7 - this.kX) : aD.k7 < 13 ? (this.kX = 234 - 7 * (aD.k7 - 8), this.kY[0] = aD.eg - aD.k7 - this.kX) : aD.k7 <= aJh[
				0] ? (this.kX = 256 - bK.dq(256 * aD.k7, aJh[0]), aD.k7 <= 23 ? this.kY[5] = bK.dq(Math.max(aD.k7 - 7, 0), 6) : this.kY[5] = 3 + bK.dq(37 * (aD.k7 - 23), 100), this.kY[0] = aD.eg - aD.k7 - this.kX - this.kY[5]) : (this.kY[5] =
				Math.min(16 + bK.dq(61 * (aD.k7 - 60), 100), 179), this.kY[0] = 512 - aD.k7 - this.kY[5]), aD.kT = aD.eg - aD.k7, aD.data.numberTeams = (0 < aD.k7) + (0 < aD.kT), aD.data.playerCount = aD.wx = aD.k7 + aD.kT, aD.data
			.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, aD.k7 + this.kX, aD.kT - this.kX]), aD.a4I.a4M()
	}, this.aH1 = function(player) {
		aJf.push({
			player: player,
			gC: 14 + ax.jP(20)
		})
	}, this.j0 = function() {
		if (9 === aD.kP)
			for (var aB = aJf.length - 1; 0 <= aB; aB--) --aJf[aB].gC <= 0 && (af.q4(aJf[aB].player, 0, aj.rl.yc + aj.rl.yq), aJf.splice(aB))
	}
}

function d8() {
	function aJw() {
		return {
			eu: bR.eu,
			ev: bR.ev,
			wP: bR.wP,
			wL: bR.wL,
			wM: bR.wM,
			wQ: bR.wQ,
			eP: bR.eP,
			mapSeed: bR.mapSeed,
			wN: bR.wN
		}
	}

	function aJo(aB) {
		return 1 !== aB && bR.aCy(aB) && aB !== bR.aJy()
	}
	this.aJj = 22, this.aHC = 4096, this.eu = 0, this.ev = 0, this.wP = null, this.wL = null, this.wM = null, this.wQ = null, this.eP = 0, this.mapSeed = 0, this.wN = !1, this.wO = new aJk, this.wF = new aJl, this.a6d = new aJm, this.dZ =
function() {
		this.wF.dZ()
	}, this.a7 = function(map, aJn) {
		((map %= this.aJj) !== this.eP || aJo(this.eP) && aJn !== this.mapSeed) && (this.wN = !1, this.wO.aJp(), ax.a4N(map), this.eP = map, this.mapSeed = aJn, aJo(map) && (bR.wF.wG[map].aJq = aJn), this.aCy(this.eP) ? (map = bR.wF.wG[this.eP],
			this.eu = map.i, this.ev = map.j, ax.a4N(map.aJq), ap.a7([this.eu, this.ev, map.mj, map.mg]), aJs(), ao.aJt(), ap.aJu()) : aJr())
	}, this.aJv = function(map, aJn) {
		var fS = aJw(),
			map = (this.a7(map, aJn), this.wO.aJp(), aJw());
		return aJn = fS, bR.eu = aJn.eu, bR.ev = aJn.ev, bR.wP = aJn.wP, bR.wL = aJn.wL, bR.wM = aJn.wM, bR.wQ = aJn.wQ, bR.eP = aJn.eP, bR.mapSeed = aJn.mapSeed, bR.wN = aJn.wN, map
	}, this.a4i = function(canvas) {
		canvas && this.wP !== canvas && (this.eu = canvas.width, this.ev = canvas.height, this.wP = canvas, this.wL = this.wP.getContext("2d", {
			alpha: !1
		}), this.hj = this.wL.getImageData(0, 0, this.eu, this.ev), this.wQ = this.hj.data, this.eP = this.aJy(), this.mapSeed = 0, bR.wF.wG[this.eP].name = aD.data.mapName)
	}, this.eO = function(aB) {
		return 3 === aB || 7 === aB || 9 === aB || 21 === aB || aB === this.aJy()
	}, this.aJz = function(aB) {
		return 2 === aB || 7 === aB || 9 === aB || 20 === aB
	}, this.aK0 = function(aB) {
		return 1 === aB
	}, this.aJy = function() {
		return this.aJj
	}, this.aCy = function(aB) {
		return void 0 === this.wF.wG[aB].aK1
	}, this.a4h = function(qN) {
		return 0 === qN.mapType ? qN.mapProceduralIndex < 10 ? qN.mapProceduralIndex : 10 + qN.mapProceduralIndex : 1 === qN.mapType ? qN.mapRealisticIndex + 10 : void 0
	}, this.aCz = function(qN, aK2) {
		0 === qN.mapType ? qN.mapProceduralIndex = aK2 < 10 ? aK2 : aK2 - 10 : 1 === qN.mapType && (qN.mapRealisticIndex = aK2 - 10)
	}
}

function aJk() {
	function aKB() {
		bR.wO.j0()
	}

	function aKH(gH, aKG) {
		0 < aKG && (bR.wQ[gH] += aKG, bR.wQ[gH + 1] += aKG, bR.wQ[gH + 2] += aKG)
	}

	function hy(gH) {
		return bR.wQ[gH + 2] > bR.wQ[gH] && bR.wQ[gH + 2] > bR.wQ[gH + 1]
	}
	this.a94 = -1, this.a0r = 0, this.aK3 = 0, this.aK4 = 8, this.aK5 = 32, this.aK6 = 8, this.aK7 = 32, this.aK8 = [0, 0], this.a85 = [0, 0, 0, 0], this.iU = null, this.aK9 = !0, this.aKA = !1, this.aJp = function() {
		-1 !== this.a94 && clearTimeout(this.a94), this.a94 = -1, this.iU = null, ap.aJu()
	}, this.dZ = function() {
		7 === aa.a10() || this.aKA || (this.aK9 = !0, this.a0r = 0, this.aK3 = 1, this.aK8 = [bR.wF.wG[bR.eP].wh[0], bR.wF.wG[bR.eP].wi[0]], this.a85 = [bR.wF.wG[bR.eP].aK1[3], bR.wF.wG[bR.eP].aK1[4], bR.wF.wG[bR.eP].aK1[5], bR.wF.wG[bR.eP].aK1[
			6]], this.aK4 = bR.wF.wG[bR.eP].aK1[7], this.aK5 = bR.wF.wG[bR.eP].aK1[8], this.aK6 = bR.wF.wG[bR.eP].aK1[9], this.aK7 = bR.wF.wG[bR.eP].aK1[10], this.aK9 ? this.a94 = setTimeout(aKB, 16) : this.j0())
	}, this.j0 = function() {
		if (8 === aa.a10() && aH.mw()) this.a94 = setTimeout(aKB, 16);
		else {
			if (0 === this.a0r) {
				var aJq = ax.aKC();
				if (ax.a4N(bR.wF.wG[bR.eP].aK1[2]), ap.a7([bR.eu, bR.ev, bR.wF.wG[bR.eP].aK1[0], bR.wF.wG[bR.eP].aK1[1]]), ax.a4N(aJq), this.iU = ap.aKD(), this.a0r++, this.aK9) return void(this.a94 = setTimeout(aKB, 16))
			}
			for (var gH, eV, aJq = this.aK9 ? 10 : 1e6, aJq = bR.ev - this.aK3 - 1 < aJq ? bR.ev - this.aK3 - 1 : aJq, xe = this.aK3 + aJq, es = this.aK3; es < xe; es++)
				for (var eq = 1; eq < bR.eu - 1; eq++) hy(gH = 4 * (eV = eq + es * bR.eu)) ? this.aKE(gH, eV, 1) : (this.aKE(gH, eV, 0), function(eq, es, gH) {
					return 1 < eq && hy(gH - 4) || eq < bR.eu - 2 && hy(gH + 4) || 1 < es && hy(gH - 4 * bR.eu) || es < bR.ev - 2 && hy(gH + 4 * bR.eu)
				}(eq, es, gH) && this.aKF(eq, es));
			this.aK3 = xe, this.aK3 >= bR.ev - 1 ? (bR.wL.putImageData(bR.wM, 0, 0, 1, 1, bR.eu - 2, bR.ev - 2), be.dh = !0, this.aJp()) : this.aK9 && (this.a94 = setTimeout(aKB, 16))
		}
	}, this.aKE = function(gH, eV, e4) {
		aKH(gH, Math.floor(this.aK8[e4] + this.a85[e4] * this.iU[eV] / 1e4) - bR.wQ[gH])
	}, this.aKI = function(gH, e3, aKJ, e4, a85) {
		aKH(gH, Math.floor(this.aK8[e4] + (1 - e3 / aKJ) * a85) - bR.wQ[gH])
	}, this.aKF = function(lK, lL) {
		for (var gH, e3, aKJ, a8u = lK - this.aK5, aKK = lL - this.aK5, xf = lK + this.aK5, xe = lL + this.aK5, a8u = a8u < 1 ? 1 : a8u, xf = xf > bR.eu - 2 ? bR.eu - 2 : xf, xe = xe > bR.ev - 2 ? bR.ev - 2 : xe, es = aKK < 1 ? 1 : aKK; es <=
			xe; es++)
			for (var eq = a8u; eq <= xf; eq++) hy(gH = 4 * (eq + es * bR.eu)) ? (aKJ = this.aK4 + (this.aK5 - this.aK4) * this.iU[eq + bR.eu * es] / 1e4, Math.abs(lK - eq) > aKJ || Math.abs(lL - es) > aKJ || aKJ <= (e3 = Math.sqrt((lK - eq) * (
				lK - eq) + (lL - es) * (lL - es))) || this.aKI(gH, e3, aKJ, 1, this.a85[3])) : (aKJ = this.aK6 + (this.aK7 - this.aK6) * this.iU[eq + bR.eu * es] / 1e4, Math.abs(lK - eq) > aKJ || Math.abs(lL - es) > aKJ || aKJ <= (e3 = Math
				.sqrt((lK - eq) * (lK - eq) + (lL - es) * (lL - es))) || this.aKI(gH, e3, aKJ, 0, this.a85[2]))
	}
}

function aJs() {
	var uL = aKL(bR.eP);
	uL && aKM(uL[0], uL[1], uL[2], uL[3], uL[4])
}

function aKL(eP) {
	return 2 === eP ? [
		[256],
		[256],
		[0, 205, 256],
		[500, 500, 0],
		[0, 0, 0]
	] : 7 === eP ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : 8 === eP ? [
		[410],
		[410],
		[0, 120, 210],
		[0, 80, 640],
		[0, 0, 0]
	] : 9 === eP ? [
		[512],
		[512],
		[0, 70, 180, 200, 290, 420, 512],
		[500, 500, 0, 0, 500, 500, 0],
		[0, 0, 0, 0, 0, 0, 0]
	] : 20 === eP ? [
		[512],
		[512],
		[0, 380, 512],
		[500, 500, 0],
		[0, 0, 0]
	] : null
}

function aKM(aKN, aKO, aKP, aKQ, aKR) {
	for (var eq, es, aKT, aKU, a2C, aKW, i3 = aKN.length - 1, aKS = bR.eu + bR.ev, ej = (aKS *= aKS, aKP.length), aKV = Array(ej), aB = ej - 1; 0 <= aB; aB--) aKV[aB] = aKP[aB] * aKP[aB];
	var aKX = new Array(ej),
		aBx = new Array(ej),
		aKY = new Array(ej),
		fB = ap.aKD();
	if (void 0 === aKR)
		for (aKR = new Array(ej), aB = ej - 1; 0 <= aB; aB--) aKR[aB] = 0;
	for (aB = 1; aB < ej; aB++) aKX[aB] = aKV[aB] - aKV[aB - 1], aBx[aB] = aKQ[aB] - aKQ[aB - 1], aKY[aB] = aKR[aB] - aKR[aB - 1];
	for (eq = bR.eu - 1; 0 <= eq; eq--)
		for (es = bR.ev - 1; 0 <= es; es--) {
			for (aKT = aKS, aB = i3; 0 <= aB; aB--) aKT = (aKU = (eq - aKN[aB]) * (eq - aKN[aB]) + (es - aKO[aB]) * (es - aKO[aB])) < aKT ? aKU : aKT;
			for (a2C = aKQ[ej - 1], aKW = aKR[ej - 1], aB = 1; aB < ej; aB++)
				if (aKT < aKV[aB]) {
					a2C = aKQ[aB - 1] + aGU((aKT - aKV[aB - 1]) * aBx[aB], aKX[aB]), aKW = aKR[aB - 1] + aGU((aKT - aKV[aB - 1]) * aKY[aB], aKX[aB]);
					break
				} aKZ(bR.eu * es + eq, a2C, aKW, fB)
		}
}

function aKZ(e4, a2C, aKW, fB) {
	a2C < 500 ? fB[e4] = bK.dq(fB[e4] * a2C * 2, 1e3) : 500 < a2C && (fB[e4] += bK.dq(2 * (1e4 - fB[e4]) * (a2C - 500), 1e3)), fB[e4] += bK.dq(aKW * (10 * a2C - fB[e4]), 1e3)
}

function cd() {
	var aKa;

	function aKk(a2d, hl, eq, es, globalAlpha) {
		bR.wL.save(), bR.wL.globalAlpha = globalAlpha, bR.wL.imageSmoothingEnabled = !1, bR.wL.scale(hl, hl), bR.wL.drawImage(a2d, Math.floor(eq * (bR.eu / hl - a2d.width)), Math.floor(es * (bR.ev / hl - a2d.height))), bR.wL.restore()
	}
	this.a6a = 0, this.a6b = 0, this.a6c = 0, this.a6d = 0, this.dZ = function() {
		(aKa = new Array(bR.aJj))[0] = {
			i: [0, 5e3, 8e3, 1e4],
			e3: [220, 250, 255, 220],
			t7: [190, 220, 0, 0],
			f3: [170, 200, 0, 0]
		}, aKa[1] = {
			i: [0, 4e3, 5e3, 6e3, 1e4],
			e3: [25, 0, 100, 0, 25],
			t7: [25, 0, 0, 0, 25],
			f3: [25, 0, 0, 0, 25]
		}, aKa[2] = {
			i: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			e3: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			t7: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			f3: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aKa[3] = {
			i: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			e3: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			t7: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			f3: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, aKa[4] = {
			i: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			e3: [10, 10, 20, 10, 10, 170, 212],
			t7: [20, 20, 60, 100, 100, 110, 170],
			f3: [70, 70, 160, 30, 30, 60, 120]
		}, aKa[5] = {
			i: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			e3: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			t7: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			f3: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aKa[6] = {
			i: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			e3: [10, 10, 60, 255, 255, 200, 200],
			t7: [10, 10, 60, 255, 255, 200, 200],
			f3: [80, 80, 255, 255, 255, 200, 200]
		}, aKa[7] = {
			i: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			e3: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			t7: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			f3: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aKa[8] = {
			i: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			e3: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			t7: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			f3: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aKa[9] = {
			i: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			e3: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			t7: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			f3: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aKa[20] = {
			i: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			e3: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			t7: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			f3: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, aKa[21] = {
			i: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			e3: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			t7: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			f3: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.aJt = function() {
		var aKj, aB, f2, fS, hj = function() {
				var hj;
				return bR.wP = document.createElement("canvas"), bR.wP.width = bR.eu, bR.wP.height = bR.ev, bR.wL = bR.wP.getContext("2d", {
					alpha: !1
				}), hj = bR.wL.getImageData(0, 0, bR.eu, bR.ev), bR.wQ = hj.data, hj
			}(),
			i = aKa[bR.eP].i,
			e3 = aKa[bR.eP].e3,
			t7 = aKa[bR.eP].t7,
			f3 = aKa[bR.eP].f3,
			fB = ap.aKD(),
			ej = i.length - 2,
			aKe = new Array(1 + ej),
			aKf = new Array(1 + ej),
			aKg = new Array(1 + ej),
			aKh = new Array(1 + ej);
		for (f2 = ej; 0 <= f2; f2--) aKe[f2] = i[f2 + 1] - i[f2], aKf[f2] = e3[f2 + 1] - e3[f2], aKg[f2] = t7[f2 + 1] - t7[f2], aKh[f2] = f3[f2 + 1] - f3[f2];
		for (aB = bR.eu * bR.ev - 1; 0 <= aB; aB--)
			for (f2 = ej; 0 <= f2; f2--)
				if (fB[aB] >= i[f2]) {
					fS = fB[aB] - i[f2], bR.wQ[4 * aB] = e3[f2] + aGU(aKf[f2] * fS, aKe[f2]), bR.wQ[4 * aB + 1] = t7[f2] + aGU(aKg[f2] * fS, aKe[f2]), bR.wQ[4 * aB + 2] = f3[f2] + aGU(aKh[f2] * fS, aKe[f2]), bR.wQ[4 * aB + 3] = 255;
					break
				} bR.wL.putImageData(hj, 0, 0), bR.aK0(bR.eP) && ab.tB() && bR.aK0(bR.eP) && (hj = ab.aFf("arena"), aKj = ab.aFf("territorial.io"), aKk(hj, 5, .5, .5, .1), aKk(aKj, 2, .5, .45, .1)), bR.wN = !0, be.dh = !0
	}, this.a4Q = function() {
		for (var gH, eq, es, aKl, ha, fU, a6b = 0, i = bR.eu, j = bR.ev, fS = i * j * 4, aKm = aBX, aKn = bR.wQ, aB = i - 1; 0 <= aB; aB--) aKm[(gH = aB << 2) + 2] = aKm[fS - gH - 2] = 3;
		for (fS = 4 * i, aB = j - 1; 0 <= aB; aB--) aKm[(gH = aB * fS) + 2] = aKm[gH + fS - 2] = 3;
		for (aKl = i - 1, ha = j - 1, es = 1; es < ha; es++)
			for (fS = es * i, eq = 1; eq < aKl; eq++) fU = 1 - (aKn[(gH = fS + eq << 2) + 2] > aKn[gH + 1] && aKn[gH + 2] > aKn[gH]), aKm[gH + 2] = 6 - 5 * fU, a6b += fU;
		this.a6a = (i - 2) * (j - 2), this.a6d = 0, bR.eO(bR.eP) && (bR.a6d.aKo(), bR.a6d.aKp(4, 5)), this.a6b = aD.jr = a6b - this.a6d, this.a6c = this.a6a - this.a6b - this.a6d, this.a6c && (bR.a6d.aKp(6, 2), bR.a6d.aKq())
	}
}

function aJr() {
	var qC;
	10 === bR.eP ? qC =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === bR.eP ? qC =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === bR.eP ? qC =
		"JJAf2uP6y-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeu0-F-n5a_GG4KJGGG3G3G3FFJFmKGJ4JGGGG3GJJFJG3G3G323G--kLPeduaKGFGGGG443JJJJJJG--B-C0FJK__443-BJ-66wmpBnJopCMJpCCCIIIJoopKKICKCBnCKJgooopMIDOzzSzUzbzzUSyTUxxrrrrrP1XcXXX9Hcn9cceemece7cPIoeX0sWWaOWVNTOcTNNcN0V0V5-N0aOa-0V--N50a5Obyc-M0z3TPOdgBnBF0NOpxpMV7-M2mMiLbinz03F0sTx8mfrNT-2l6QEdMwwp-5XX7UMTP1V1GIuvaNn-5Xfxrpw5XV1GNTEfn4-_XvzjAAA9mfA9ed9fpzyTUzyUaUyOX3n59NTKLLKHPPPO_LK4iidea_O_QeideeaLOLLJG3-0eeddOaPO_OKLKzEznzjgnnzBykknByEYnByug-3332ElJ222-2wBko2BnBnBwwzwx-9Y6j6rrrkccc-E5ctEizpJF-aDYgSMGz-X10G6VyjiyuuPeiuzjivh3G3K3G--k-9JGFAPEIZSKBghKSMIpKpCJnI9gcXeccehHccoeXBeoppKIJoghIHnCJnJmemmecmfA9jyTUzzzbbxbV0WaTT-OtWWWV0zxtyUN6yUzSxrSqTUztaN71190V7-5V15VUy--V-lxHEg--33oL-67Dhyu0--3FoL--7ahw-LGYowfzu-0HFMIfF-aHWWwxxxcXX-E8ZrUdfVl--TIJLzSr17V0wcDLvivjysGK3G4XaJb1zppIJpBccccge7fUxx9eocX7cXX6y7Y99Heggen9nJdAHp9Xnp9IIJfICIBdCKKIIMMJme19eXxxp9X9VVfEMMMSBpooe7XCSBomccxxpHcrKKCMHmXXmcxoeX1mpJe70BrMJmVV--gxExIpJcX71nKCJmhCKKCIJoopCKKKHX8KHd9nKrKBj6xrSrKpz6xSMMSrKppwObaP-UzSCAICIKCIKKKCMMKKCpCMMSrrrKpKprUSprMUSMrSprKrSpSrUrUSxpxprSrMrMprSSSppMKprSprrSrxKSUSqUGbqUbbrxrSxrSrKHXXeggeYBnBgmnBnKCrJnKpIKpBnKCMMrSS9chKKIBeX77EIAE5OxIIKKKIIEKSKSKKSKKMKpKpKKSMSSSSrSzxxxzlzzUzzzzzUxrMMMMSxxxrrxrrxxxxzUzOzrbxzrxzzzw6w6yOtttttyUbbyTTTTTTTTTUtzIrzbzbzbba-71-VVV77V--7711-V1-1---51--1-1-V0cN-N5VN1e-ee7-1mc71Xe9fIBcVV0WbyOzxX-VV7VNN5TUzUu1ce9menBecmf9gxHc7c7V-777---50VP-V-N-0WxppSJpr6zyObzttV6rMKpUyObttbryUbzWaP0sNNOX757X97X7ce9XXXXXVc7-V-X7VX5-V7eeA9menA9fBnCBnIIJoorMIRObpIKMJpppSSSMSoeX71-V7777X97c5V-ccWV0VX77--NN55-N--7U5111cXXenBcc7fABgcX117X7c-gf9emV---1--XXXVX7X17579VVV117Xed9XecXX--WV5Uzz6zyUzrSrUUaNUlxtzXXXee1777X1e-5NOy--WV5OttttaTUzyUrxxtzzzlzMUrzzxaUttbbxWzxpSonBmpCCJpCKCIJpJooeACHpprSxaOV577U6sOWV-NNN70WVOWzwTTT5NUxryUba5NNOba1cc79cXX199X-91X99mhIHfJmXgxxxpHe9XccX997c7X0zV--V-N7P6k49V711-111X-77cX79mmeHeccV1mdbn_Uno-DKNVSo1-O9kaiKKzzEzpK-8_SLEzzzeeeV1Hinzjh3-8_UsM9mjtyTVBHk8AfiyvivizpG43G3GG--0OIzV2mnjMaLEBxn29mc4SSpprSSSUprrKprSSpppKMMSrMrxrKIKHhKHfIKKpIBpCIIJpIJnIKpSKJo1AKKpppxprSprpMKphIKhMUSrCKMRpMKrrSMMMMSKUVUxxUxSJe19efAKKUbKnMxKKUKIKUStaSrUMTUrzbzxxrSzzUy5SSKtbqprTprzSxxSrBXe9ghSrMMUyUzzbySKrUKpUSpSUMtV---D--0aN-X9997977VVe9XD-19XX1-9XcXXXXYxzUttzbV-7VX78by0rUSppKMbs5-V77V77X-X71--17-X-7V-0WWVN-6byTOrJepKpSrpxrUSSIKSKSzrrrs797c1711ObUSxxpSSSSSSy5--7997VV6z_rrSrxpSprs-7VX17XeXVXN-11-TUUSxztyTT5ObzrSSrzbtbbtUKzrxrSxzUrzUzShKhMKrxzzzxyMtzqnAA9mgfAAACKICBnKzbbWWbaOtbaOaTUbtyUyTTTOaOa556zyMxrUtaTUzrxrrrzSzxzbta5N0s-ee997cX97cX7cX7X771-V-aT--V17V7X1--V7Xea6ty5T5Mts5--5-550aT55NU_ySxxta5OVD--0VN5NND-N--8a6a5OsN1og55OVVOta-75OTSqhCMrBmhMbbtzzzzta--NN5-8Us0V-N1eD-XN0VOKppraT18zs0SyOUaOa5OaN1-VcX7X5OSpSxpMSra5NNObV5-N19cVc-W_KMSrrxxztzsND--MJpKMrzb_pyTMzUa5-0a5-X-VOIMMMSBnKKSMrMzprzaQBen1ceeXcccempprtzUUSv9mmfMrxzUMxpUUUrzbztrxyOzUxrrMzbWbJppSvC7gmenA9mgggfABgnBf9nBppUrttbzUzCKrSSxzbaUxPfMSKpKnJhRpIAIIKrSzUMMzxztyTObaTOWWaTTTUbzzrza5ObaTOWbbbUrSrStzyUUzbyN--s5T2rs-1XeXeefBn97VfBnIBemf97cXcX7bWV1111c1eiN7f-ABa6s19n77X7g97cceX7f11UzUppry-N0MMAIKzV4UW_rJoppza55-TMSsNObztaOa6KzV-77N-SKKSUzbaOaOyUtzzzyTUbtzxrsOaObtttSraOWaObzzzzz_ptaUbyMzzyUtbVUyUrUzzzzzUzzxyQMzzUzzzeeeeXee9Xeee9eeeefKMIKcf9ggnABemefCCKzrLf99X1fABgeeXAKSSMKxxzUSrSraMRpSxrQA7X7X9oopBo1N9gnIKCIJmmmnKIKJomn7emfMBc51997cenKMUzPmegmfMMSzzyNA9OzzUUIKMUKrKpSSrUrxza6SrMSrrMSrUUxzrxxxrUSSzSSxSUSxSrSSrSrpUrMMUSprrUUUUSpKrySzSrxzzxpzSppprrzUrSpSSCSRprSMKKpMKrMKKCIIIBohIBonAAABnABmgemhBmmmeenBnA9X9ecceeXX7Xemmcemgef9nA7en9kecee9eXeX1-enBkeX7XeXce92VXX99ceACBn9XX77XVVV--X7XemmgeeXXX997VVc75OVeX9hAAA7eeme9eXe9Xeeee9e9ceemmmmf9meegfHenBmfBnA9mgggemnBggfBnIHmmekeeceX9e9cXXXmoeceeXce9Xce99eXnBpCBpSrSrSrMSxzzxyeeeeemkeemgf9pprUzUHmeXXem99e9eceef1dbs17ecepKrMgg9XeXccX-Xeen7cXeenBmnBghCBgnBACCCMCKJohCCMrzzzyUzzzzqognBmnCKprMSMACKpz_wmoogepCKrMSMStUZkeeeeAH15-11-X9hCKMSRomcgpKzprpprs0z_rKppzrSrzSpIKIBgXmprrUKIKKrttpKzSUBomm97ghJpSyUzSzzzUbzzUtrzfAI9epnHceceemegghUUzxzWbzzrbTopMSta5OVOrzzUSKUUxrsOrpxQCSrIIKSxSrSzSrzUrUUtttztUtbzxxMaOV-sOWV5--NNOUzUzxzxzUUrSxrrUSrrSzrrSxSprSppprSpxrrrUUrbbtzrbbrztzzrbbyTT6bSyOa0aTOaOy5T6aTOzbzpxxxxpzUSxs7XESrKyOUrtaOa17zyUaTOaOSxprKCKgnIAAABnBnKppppppJnHnCMJnCCKMSrSSKKICCKKKKppKo-2AYFDB--MPns--j8uk-0TwQV7mzO6ievyyvFGK3F--qNX0zxzxrXce9c-3mKUw-DOJuzw9-lBkNyuuuviyzjJK43G000-OaPJEprzSKMrrkccc-1997-2C8pDo-uPOqwf9mnbbtyTV-2Jzv--5gXT-CCmSUvvGG--5xsy-0D-rE-4b-qzSqX7--sMmk-0lNEV-IZ0nk-tm6EnFN-Rt3BvgF-5ReOUc-otNAvisG30DRoZzUzzzrwP9eeecc-3uJps0eSSKRrMGzrzrrM-V-eXXeX--2fpn--6MiT-0DoXD--6ULD--E2lg--TGhs--wrkk-0uNAV-npyzx-0bkCEF-6EeL6jG-5bpJQAEbaV0nuubvp-0dya3mhrk--BzMKzF28zMOzrMUP779c-gziXufkG-2byBQrcV-J-IhV490elopIKKJzlX70V---2FCPyV-HVlaxpX7-x0_hzvvGGF-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--1u44Wxxxr17cc-CFkqTusBG-2cO5jMcV3oE3YuuiB3FF0P7tWrre9-4GLRUh--19rRV-JN8nk-1B7iV-3OQA--cpNzV8oQxrjjizyyw4KKG44-1d-ezGV-_77wzvGF0eJQZmxL0V-C9jlvF09OI0rTX--JoI0k-PTDyyV-40oK--e5AbV7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL--1qoP6bvVF-qtlNxCKCUa0V7V0xqOguudaNznk-G3-Lvq2RrOc-2N7SOfvlG-2g3LFmnKUrla-7X--Vg031A1AJgoxMSporMSSr-XV--10aNXeV-y7CVQfz0GF0RIcNptae02XdsiLTezvzyyyzjzGGGGGGGGG3--GRVT-QXt0TTyyzwK4GJ-r5K0genCxtwT-V-yBnotTvg-F-RR4WyVBNuCtdejvYyi-knBLOFJJF3BSAjnMSzUbsX9XeV3t0vf_fzv-GF0wZ8bxrOe9--8AQA--HN1m-CZlGTLRwx-cmONzIxrprppKprUyUts-XccX1e97cXc--_7pw029QbgoonJUROV5-V-iJrguik4--mdjY-0tQAdaRk-BiCss-aMQLTjJ--3jUaV4tUqAvjzx5KGF-YB7rwfzwOeVuOXlO_O__Kbj2vizuviyuuvfeveTiviynvYziefiiefvfiYvjB-444G3F-0-2-kJ304K3GGG3JG34--F3GJ-IBbGxS--3yOw8PPd_GaaiC-Eueibvyvx-304--C-2IBzcggmeenCMSrwOaOzKHmnrUSxzTOu--V7VVV9c-yPFVPuf0-F0gt0ZpKs17-aTPhOiBFxRy2ZmgnJeeXAICBnBenJzSrKKrrSSrKpMKJnBnCKMSMIKMrxSOV0V0zzUKSpppSKSEKIESOV-Oa0sOzUrMKSppSUMMkP77V-0a1--VP-17--71--7-UxSrrrrSJpqOtzzOX770hBcX7V5--XXV11cc717X7X9XX999777X7e-_chDLLiiivYEl33G3-Vock29fSpSKonCMU5OaNV-NNX7c2DaQYtPjzvjfiywGK33G3G-0xDlzpUyX9V5PSx2jyuzVGGK-0CFZWnwNV1uXF0_fBo1IJJoSSJnACCCKppSxyUV-117-N711-6evlav4-JpSyQKUSSSpaX517c-c-yg6luPzk3F0CNJQpy9-iumBnaLKKeudOKG_KLKLLLueLOaQEEjEjyinEyzejjnskBnwC043F2-nn2zE2EEoKGKFASOdporHX8CBhzxraUqUzSlzSX77eeeXBc0V-LhikvW--KmlL-EfebDLTskk-YMe-RrMTV7V2uyCCaPEBC-5q1sjK6a7V-A2Ih-Aq892rMUNP7cc-TlB1tv--ANsVBjV2v6d6aOwnp-7qIGAIJlaNV1imQQOPszivwzE8GGGGJ0vODuRhCrppCBpULN5N7NX90WX-6gppqPk-GqSXfBnqOxtaUemec-5nnTs-YPD2wz6re9-3QGmz__bnno-2PJQD-KhKnTaaTn-nF-0Pg_N-aphUzj4FKhhRbmhUrKHohIzMpxrpKKKSMKSKxrU5N5OaUL--X11777Hf9VX-N7--5P-XHXe-0hhca-WqtqMCppppSJp6ltz5NVXV-X17eV0QUJbjJ-nREfwnBwOtbae-IiGGaLPvEk0-Er7eI9nCKpUa0V--1v_ZSfcl--0T7Zc0TwsLPNzgz8K4--MdCP-8jMTqMno-QTv6BfDUs-CjSgLdjBG--rknYV0vttlfW-0CxT2mcUV6Qv4daeffkn3J3B-EUOXBja1CjifiOvd_LdKKaaOaK--nBw8aOFFeeKbfivzjix3En-2Ennz-n-3-2UYTi-bkAQ5LLKaRzgwnznGJ-MWJCRr5NV0wBylcwF0D6jaola--BJZx--NfgX-6lRkav3--sx_2V7RUnUaK_aLLQjzzz-atBrI9mgmnICCpCKLTOaOzs0aNOWV9c-E9stskaiM_-pIJnKoxxzxzrUrrxzUxzSrUSzSpISxzxbxzzzzrzzrzxbzrzUta-0YBe7mf9eeV--P9eee7XXcecVXeXceA9eeeXX-c7T9Bee997n9X-0wqC2ylF4iQ5frxSUzJzqNX9cX97V1wr6EuslF-YbY3xSUaeX--x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === bR.eP ? qC =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === bR.eP ? qC =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === bR.eP ? qC =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === bR.eP ? qC =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === bR.eP ? qC =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === bR.eP ? qC =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === bR.eP && (qC =
			"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV"
			), (new w8).wA(qC)
}

function aJl() {
	this.wG = null, this.aKr = null, this.aKs = null, this.dZ = function() {
		var aKt = [120, 105, 92],
			cos = [12, 12, 60],
			aKu = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aKv = [140, 130, 120],
			aKw = [12, 12, 76],
			aKx = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aKy = [130, 117, 106],
			aKz = [12, 12, 68],
			aL0 = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.wG = new Array(bR.aJj + 1), this.wG[0] = {
			name: L(134),
			i: 230,
			j: 230,
			mj: 1e3,
			mg: 2e3,
			aJq: 173
		}, this.wG[1] = {
			name: L(135),
			i: 800,
			j: 800,
			mj: 100,
			mg: 50,
			aJq: 43
		}, this.wG[2] = {
			name: L(136),
			i: 512,
			j: 512,
			mj: 128,
			mg: 32,
			aJq: 0
		}, this.wG[3] = {
			name: L(137) + " 1",
			i: 960,
			j: 960,
			mj: 60,
			mg: 8,
			aJq: 0
		}, this.wG[4] = {
			name: L(138),
			i: 900,
			j: 900,
			mj: 100,
			mg: 5,
			aJq: 0
		}, this.wG[5] = {
			name: L(139),
			i: 1e3,
			j: 1e3,
			mj: 100,
			mg: 40,
			aJq: 0
		}, this.wG[6] = {
			name: L(140),
			i: 1e3,
			j: 1e3,
			mj: 100,
			mg: 20,
			aJq: 0
		}, this.wG[7] = {
			name: L(141),
			i: 1024,
			j: 1024,
			mj: 128,
			mg: 32,
			aJq: 0
		}, this.wG[8] = {
			name: L(142),
			i: 820,
			j: 820,
			mj: 200,
			mg: 100,
			aJq: 0
		}, this.wG[9] = {
			name: L(143),
			i: 1024,
			j: 1024,
			mj: 128,
			mg: 32,
			aJq: 0
		}, this.wG[10] = {
			name: L(144),
			wh: aKv,
			wi: aKw,
			aK1: aKx
		}, this.wG[11] = {
			name: L(145),
			wh: aKy,
			wi: aKz,
			aK1: aL0
		}, this.wG[12] = {
			name: L(146),
			wh: aKy,
			wi: aKz,
			aK1: aL0
		}, this.wG[13] = {
			name: L(147),
			wh: aKt,
			wi: cos,
			aK1: aKu
		}, this.wG[14] = {
			name: L(148),
			wh: aKt,
			wi: cos,
			aK1: aKu
		}, this.wG[15] = {
			name: L(149),
			wh: aKv,
			wi: aKw,
			aK1: aKx
		}, this.wG[16] = {
			name: L(150),
			wh: aKv,
			wi: aKw,
			aK1: aKx
		}, this.wG[17] = {
			name: L(151),
			wh: aKt,
			wi: cos,
			aK1: aKu
		}, this.wG[18] = {
			name: L(152),
			wh: aKy,
			wi: aKz,
			aK1: aL0
		}, this.wG[19] = {
			name: L(153),
			wh: aKt,
			wi: cos,
			aK1: aKu
		}, this.wG[20] = {
			name: L(154),
			i: 1024,
			j: 1024,
			mj: 128,
			mg: 32,
			aJq: 0
		}, this.wG[21] = {
			name: L(137) + " 2",
			i: 940,
			j: 940,
			mj: 80,
			mg: 8,
			aJq: 0
		}, this.wG[bR.aJj] = {
			name: ""
		}, this.aKr = new Uint8Array(12);
		for (var aB = 0; aB < 10; aB++) this.aKr[aB] = aB;
		for (this.aKr[10] = 20, this.aKr[11] = 21, this.aKs = new Uint8Array(10), aB = 0; aB < 10; aB++) this.aKs[aB] = 10 + aB
	}
}

function aJm() {
	this.aKo = function() {
		for (var gH, eq, fS, aKm = aBX, aKn = bR.wQ, i = bR.eu, aKl = i - 1, ha = bR.ev - 1, gC = 0, es = 1; es < ha; es++)
			for (fS = es * i, eq = 1; eq < aKl; eq++) aKn[gH = fS + eq << 2] === aKn[1 + gH] && aKn[gH] === aKn[2 + gH] && (gC++, aKm[2 + gH] = 4);
		ao.a6d = gC
	}, this.aKp = function(aL1, aL2) {
		for (var aKm = aBX, i = bR.eu, aKl = i - 1, ha = bR.ev - 1, id = 0, es = 1; es < ha; es++)
			for (var fS = es * i, eq = 1; eq < aKl; eq++) {
				var eN = 2 + (fS + eq << 2);
				aKm[eN] === aL1 && (! function(eN, id, aL1, aL2) {
					var ej = 1,
						aKm = aBX,
						el = ac.el,
						a2P = [eN],
						aL4 = id >> 8 << 1,
						aL5 = 255 & id;
					aKm[eN - 2] = aL4, aKm[eN - 1] = aL5, aKm[eN] = 5;
					for (; ej;) {
						for (var a2Q = [], aB = 0; aB < ej; aB++)
							for (var eY = a2P[aB], em = 3; 0 <= em; em--) {
								var en = eY + el[em];
								aKm[en] === aL1 && (aKm[en - 2] = aL4, aKm[en - 1] = aL5, aKm[en] = aL2, a2Q.push(en))
							}
						ej = (a2P = a2Q).length
					}
				}(eN, id, aL1, aL2), id = (id + 1) % 32768)
			}
	}, this.aKq = function() {
		for (var aKm = aBX, i = bR.eu, aKl = i - 3, ha = bR.ev - 3, aL7 = 12 * i, es = 3; es < ha; es++)
			for (var fS = es * i, eq = 3; eq < aKl; eq++) {
				var eN = 2 + (fS + eq << 2);
				2 !== aKm[eN] || 2 === aKm[eN - 12] && 2 === aKm[12 + eN] && 2 === aKm[eN - aL7] && 2 === aKm[eN + aL7] || (aKm[eN - 2] = 1 | aKm[eN - 2])
			}
	}
}

function a4P() {
	(xy = void 0 === xy ? document.createElement("canvas") : xy).width = bR.eu, xy.height = bR.ev, a4T = xy.getContext("2d", {
		alpha: !0
	}), a4U = aBX = null, a4U = a4T.getImageData(0, 0, bR.eu, bR.ev), aBX = a4U.data, b9.qd.wR(aBX)
}

function ce() {
	var fB, i, j, max, aL8, mg, aLA, aLB, aLC, aLD, aLE, aLF, aLG, aLH, aL9 = 1e4;

	function aLO(aLN, mj, ej) {
		var aB;
		for (aLA[0] = aLN, aB = 1; aB < ej; aB++) aLA[aB] = aLA[aB - 1] + mj, mj = aLA[aB] >= aL9 ? (aLA[aB] = aL9 - 1, -mj) : aLA[aB] < 0 ? (aLA[aB] = 0, -mj) : (mj += 16384 <= ax.random() ? mg : -mg) < -aL8 ? -aL8 : aL8 < mj ? aL8 : mj
	}

	function aLQ(eq, es, aLR, ej) {
		(aLR ? function(eq, es, ej) {
			var aB;
			for (aB = 0; aB < ej; aB++) fB[es * i + eq + aB] = aLA[aB]
		} : function(eq, es, ej) {
			var aB;
			for (aB = 0; aB < ej; aB++) fB[es * i + eq + aB * i] = aLA[aB]
		})(eq, es, ej)
	}

	function aLU(value, ej) {
		var aB, aJH, eN, jN = value - aLA[ej - 1];
		if (0 != jN) {
			for (aJH = 1 + bK.dq(Math.abs(jN), ej - 1), aJH = jN < 0 ? -aJH : aJH, aLA[ej - 1] = value, eN = (eN = ej - 1 - bK.dq(Math.abs(jN), Math.abs(aJH))) < 1 ? 1 : ej - 2 < eN ? ej - 2 : eN, aB = ej - 2; eN <= aB; aB--) aLA[aB] += jN - (ej -
				1 - aB) * aJH;
			(jN < 0 ? function(ej) {
				var aB;
				for (aB = ej - 2; 1 <= aB; aB--) aLA[aB] < 0 && (aLA[aB] = -aLA[aB] - 1)
			} : function(ej) {
				var aB;
				for (aB = ej - 2; 1 <= aB; aB--) aLA[aB] >= aL9 && (aLA[aB] = 2 * aL9 - aLA[aB] - 1)
			})(ej)
		}
	}

	function aLX(a2P, a2Q, ej) {
		for (var aB = 0; aB < ej; aB++) a2P[aB] = a2Q[aB]
	}

	function aLY(g) {
		for (var aB = 0; aB < g.length - 1; aB++) g[aB] = g[aB + 1] - g[aB];
		g[g.length - 1] = g[g.length - 3]
	}

	function aLZ(a54, gap, hb) {
		aLB.push(a54), aLC.push(gap), aLD.push(hb)
	}
	this.a7 = function(a3e) {
		! function(a3e) {
			var aB;
			for (i = a3e[0], j = a3e[1], aL8 = a3e[2], mg = a3e[3], fB = new Int16Array(i * j), max = j < i ? i : j, aLA = new Int16Array(max), aLB = [], aLC = [], aLD = [], aLE = new Array(i), aLF = new Array(j), aB = i - 1; 0 <= aB; aB--) aLE[
				aB] = !1;
			for (aB = j - 1; 0 <= aB; aB--) aLF[aB] = !1;
			aLG = new Int16Array(i), aLH = new Int16Array(j)
		}(a3e),
		function(ej) {
			var aLN = ax.random() % aL9,
				mj = ax.random() % (2 * aL8 + 1) - aL8;
			aLO(aLN, mj, ej)
		}(max), aLX(aLH, aLA, j), aLQ(0, 0, !0, i);
		var eq, es, a3e = fB[0],
			ej = max,
			mj = ax.random() % (2 * aL8 + 1) - aL8;
		for (aLO(a3e, mj, ej), aLX(aLG, aLA, i), aLQ(0, 0, !1, j), aLY(aLG), aLY(aLH), aLO(fB[i - 1], aLG[i - 1], j), aLQ(i - 1, 0, !1, j), aLO(fB[i * (j - 1)], aLH[j - 1], i), aLU(fB[i * j - 1], i), aLQ(0, j - 1, !0, i), aLE[i - 1] = aLE[0] = !
			0, aLF[j - 1] = aLF[0] = !0, aLZ(0, i, !0), aLZ(0, j, !1), ! function() {
				var aLb, a54;
				for (;;) {
					if (aLb = function() {
							var aB, aLb = aLB.length - 1;
							for (aB = aLb - 1; 0 <= aB; aB--) aLC[aB] > aLC[aLb] && (aLb = aB);
							return aLb
						}(), aLC[aLb] < 5) return;
					a54 = aLB[aLb] + bK.dq(aLC[aLb], 2), (aLD[aLb] ? function(eq) {
						var ej, aLe, aB, aF5 = 0,
							aLf = 0;
						for (; aLf < j - 1;) {
							for (aB = aF5 + 1; aB < j; aB++)
								if (aLF[aB]) {
									aLf = aB;
									break
								} ej = aLf - aF5 + 1, aLO(fB[eq + i * aF5], 0 === aF5 ? aLG[eq] : aLA[aLe - 1] - aLA[aLe - 2], ej), aLU(fB[aLf * i + eq], ej), aLQ(eq, aF5, !1, ej), aLe = ej, aF5 = aLf
						}
						aLE[eq] = !0
					} : function(es) {
						var ej, aLe, aB, aF5 = 0,
							aLf = 0;
						for (; aLf < i - 1;) {
							for (aB = aF5 + 1; aB < i; aB++)
								if (aLE[aB]) {
									aLf = aB;
									break
								} ej = aLf - aF5 + 1, aLO(fB[es * i + aF5], 0 === aF5 ? aLH[es] : aLA[aLe - 1] - aLA[aLe - 2], ej), aLU(fB[es * i + aLf], ej), aLQ(aF5, es, !0, ej), aLe = ej, aF5 = aLf
						}
						aLF[es] = !0
					})(a54), aLZ(a54, aLB[aLb] + aLC[aLb] - a54, aLD[aLb]), aLC[aLb] = a54 - aLB[aLb] + 1
				}
			}(), eq = 0; eq < i; eq++)
			if (!aLE[eq])
				for (es = 0; es < j; es++) aLF[es] || ! function(eq, es) {
					var value = fB[es * i + eq - 1] + fB[(es - 1) * i + eq],
						a6o = 2;
					aLE[eq + 1] && (a6o++, value += fB[es * i + eq + 1]);
					aLF[es + 1] && (a6o++, value += fB[(es + 1) * i + eq]);
					fB[es * i + eq] = bK.dq(value, a6o)
				}(eq, es)
	}, this.aKD = function() {
		return fB
	}, this.aJu = function() {
		fB = null
	}
}

function aGU(f2, f3) {
	return 0 <= f2 ? bK.dq(f2, f3) : -bK.dq(-f2, f3)
}

function je(fB) {
	return fB * fB
}

function a62(f2, f3) {
	return f3 < f2 ? f2 : f3
}

function aB1(f2, f3) {
	return f2 < f3 ? f2 : f3
}

function a8P(f2, fB, f3) {
	return fB < f2 ? f2 : f3 < fB ? f3 : fB
}

function aLh(fB, ej) {
	for (var f4 = bK.dq(fB + 1, 2), aB = 0; aB < ej; aB++) f4 = bK.dq(f4 + bK.dq(fB, f4), 2);
	return f4
}

function aHn(fB, ej) {
	return fB < 1 ? 0 : aLh(fB, ej)
}

function aLi(n4, n5, sq, a88, nH, nI, sr, tY) {
	return !(n4 + sq <= nH || n5 + a88 <= nI || nH + sr <= n4 || nI + tY <= n5)
}

function aLj(n4, n5, sq, a88, nH, nI, sr, tY) {
	return n4 <= nH && n5 <= nI && nH + sr <= n4 + sq && nI + tY <= n5 + a88
}

function wI(fB) {
	return Math.floor(!!fB * (1 + Math.log2(fB + .5)))
}

function bv() {
	this.dq = function(f2, f3) {
		return Math.floor((f2 + .5) / f3)
	}, this.aLk = function(f2, f3) {
		return Math.floor(f2 * (f3 + .5))
	}, this.sqrt = function(fB) {
		return ~~Math.sqrt(fB + .5)
	}, this.pow = function(e) {
		return Math.floor(Math.pow(2, e) + .5)
	}, this.hs = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aLl = function(fS, fU, fW) {
		return Math.max(Math.min(fS, fU), fW)
	}, this.aLm = function(aLn, aLo, eq, es) {
		eq -= aLn, aLn = es - aLo, es = 0;
		return 0 == eq ? es = 0 <= aLn ? Math.PI : 0 : (es = Math.atan(aLn / eq), es += 0 < eq ? .5 * Math.PI : 1.5 * Math.PI), es
	}, this.log2 = function(fB) {
		return Math.floor(!!fB * (1 + Math.log2(fB + .5)))
	}, this.log10 = function(fB) {
		return Math.floor(Math.log10(fB + .5))
	}, this.aLq = function(aLr, aLs, aLt, aLu, aLv) {
		return aLt - aLv < aLr && aLr < aLt + aLv && aLu - aLv < aLs && aLs < aLu + aLv
	}, this.xF = function(a8p, a8r) {
		return a8p * a8p + a8r * a8r
	}
}

function dA() {
	this.y = new aLw, this.sj = 0;
	var aLx = new Array(31);

	function aM1() {
		for (var ej = aLx.length, aB = 0; aB < ej; aB++) aLx[aB] = null
	}
	this.dZ = function() {
		for (var aLy, aLz = document.body.firstChild; aLz;) {
			if (aLy = aLz.nextSibling, document.body.contains(aLz) && ("DIV" === aLz.tagName || "INPUT" === aLz.tagName || "BUTTON" === aLz.tagName)) try {
				document.body.removeChild(aLz)
			} catch (e) {
				console.log("error 2623: " + e)
			}
			aLz = aLy
		}
	}, this.u = function(e4, aM0, a3e) {
		void 0 === aM0 && (aM0 = this.sj), be.dh = !0, 0 === e4 && (0 === aa.a10() ? e4 = 5 : a0.a1.setState(13)), this.rm(), this.sj === e4 && (aM0 = aLx[e4].aM0, aLx[e4] = null), this.sj = e4;
		var l0 = aLx[e4];
		if (!l0 || 4 === e4 || 7 === e4 || 8 === e4 || 9 === e4 || 10 === e4 || 11 === e4 || 13 === e4 || 15 === e4 || 18 === e4 || 20 <= e4 && e4 <= 28 || 32 === e4 || 33 === e4) {
			if (0 === e4) return void aM1();
			1 === e4 ? l0 = new aM2 : 2 === e4 ? l0 = new aM3 : 3 === e4 ? l0 = new aM4 : 4 === e4 || 9 === e4 || 10 === e4 || 11 === e4 || 13 === e4 || 33 === e4 ? l0 = a3e : 5 === e4 ? l0 = new aM5 : 6 === e4 ? l0 = new aM6 : 7 === e4 ? l0 =
				new aM7(t.y.aM8) : 8 === e4 ? l0 = a3e : 12 === e4 ? l0 = new aM9 : 14 === e4 ? l0 = new aMA : 15 === e4 ? l0 = new aM7(t.y.aMB) : 16 === e4 ? l0 = new aMC : 17 === e4 ? l0 = new aMD : 18 === e4 ? l0 = new aME : 19 === e4 ? l0 =
				new aMF : 20 === e4 ? l0 = new aMG : 21 === e4 ? l0 = new aMH : 22 === e4 ? l0 = new aMI : 23 === e4 ? l0 = new aMJ : 24 === e4 ? l0 = new aMK : 25 === e4 ? l0 = new aML : 26 === e4 ? l0 = new aMM : 27 === e4 ? l0 = new aMN :
				28 === e4 ? l0 = new aMO : 29 === e4 ? l0 = new aMP : 30 === e4 && (l0 = new aMQ), l0.aM0 = aM0, aLx[e4] = l0
		}
		l0.show(a3e)
	}, this.a0z = function() {
		this.hW() && this.aMR(this.a4o().aM0)
	}, this.aMR = function(e4) {
		this.hW() && (aLx[e4] ? (this.rm(), be.dh = !0, this.sj = e4, aLx[e4].show()) : this.u(e4))
	}, this.rm = function() {
		this.hW() && aLx[this.sj].rm()
	}, this.x = function() {
		this.hW() && (aLx[this.sj].rm(), aM1(), this.sj = 0, a0.a1.setState(13))
	}, this.ub = function() {
		var l0;
		this.hW() && (l0 = aLx[this.sj]).ub && l0.ub()
	}, this.resize = function() {
		if (!this.hW()) return !1;
		aLx[this.sj].resize()
	}, this.gw = function(eq, es) {
		var l0;
		this.hW() && (l0 = aLx[this.sj]).gw && l0.gw(eq, es)
	}, this.a1J = function(eq, es) {
		var l0;
		this.hW() && (l0 = aLx[this.sj]).a1J && l0.a1J(eq, es)
	}, this.a1h = function() {
		var l0;
		this.hW() && (l0 = aLx[this.sj]).a1h && l0.a1h()
	}, this.a1M = function(lK, lL, deltaY) {
		var l0;
		this.hW() && (l0 = aLx[this.sj]).a1M && l0.a1M(lK, lL, deltaY)
	}, this.a1r = function(code) {
		var l0;
		return !!this.hW() && ((l0 = aLx[this.sj]).a1r && l0.a1r(code), !0)
	}, this.j0 = function() {
		var l0;
		this.hW() && (l0 = aLx[this.sj]) && l0.j0 && l0.j0()
	}, this.hW = function() {
		return 0 < this.sj
	}, this.a4o = function() {
		return aLx[this.sj]
	}, this.a4p = function(e4) {
		return aLx[e4]
	}, this.aMS = function() {
		return aLx
	}
}

function aM7(data) {
	var aMT, aMU;
	this.show = function() {
		data.aMV && bH.aNM("account", data.sh), aMT.show(), this.resize()
	}, this.rm = function() {
		aMT.rm()
	}, this.resize = function() {
		aMT.resize(), aMU.resize()
	}, this.a1r = function(f4) {
		2 === f4 && aMT.uT[0].qm()
	}, aMT = new uM(data.username, [new w("⬅️ " + L(36), function() {
		bH.clear(), t.a0z()
	}), new w(data.aMV ? "🔄 " + L(155) : L(156), function() {
		t.u(8, t.a4o().aM0, new sk(25, {
			sl: 0,
			sh: data.sh,
			si: data.si
		}))
	}, 0, 0, 1)]), aMU = new qO(aMT.uS, function() {
		var qQ = [];
		qQ.push(function() {
				var aMm = new q8,
					rI = (aMm.qB(L(205)), new rJ({
						value: data.username,
						e4: -1
					}));
				rI.e.readOnly = !0, aMm.qM(rI), aMm.qM(new rz([new w(L(174), function(e) {
					return b9.qV.a35(rI.e), b9.qV.a36(e), !0
				}).button])), data.aMV || aMm.qD(L(206));
				return aMm
			}()),
			function(qQ) {
				var aMm, qE, aBl, aN5, aMv;
				data.aMV || ((aMm = new q8).qB(L(207)), (qE = aMm.qD(data.aN4.length + " / 160")).style.textAlign = "center", aBl = !0, (aN5 = new uk(0, 1, function(e) {
					e = e.target.value.length;
					qE.textContent = e + " / 160", 160 < e ? aBl && (aBl = !1, aMv.qp(1), aMv.button.style.color = bA.ne) : aBl || (aBl = !0, aMv.qp(0), aMv.button.style.color = bA.ob)
				})).e.rows = 6, aN5.e.style.fontSize = "1em", aN5.ur(data.aN4), aMm.qM(aN5), aMv = new w(L(208), function() {
					if (!aBl) return !0;
					t.u(8, t.a4o().aM0, new sk(29, {
						sl: 1,
						qC: aN5.ut().substring(0, 160)
					}))
				}, 0, 0, 1), aMm.qM(new rz([aMv.button])), 0 !== data.aN6 && (aMm.qM(new rz([new w(L(1 === data.aN6 ? 210 : 211), function() {
					t.u(8, t.a4o().aM0, new sk(29, {
						sl: 0,
						qC: ""
					}))
				}, 0, 0, 1).button])), aMm.qD(1 === data.aN6 ? L(212, [data.aN8 - 1]) : L(213, [data.aN8 - 1]))), aMm.qD(L(209, [data.aN7])), qQ.push(aMm))
			}(qQ),
			function(qQ) {
				var aMm;
				data.aMV && 0 !== data.aN6 && ((aMm = new q8).qB(L(214)), aMm.qF(data.aN4), aMm.qM(new rz([new w(L(215, 0, "Report"), function(e) {
					return az.y.aMr(0) && (b9.qV.a36(e), az.aMt.aN9({
						sl: 5,
						sh: data.sh
					})), !0
				}, 0, 0, 1).button])), qQ.push(aMm))
			}(qQ), qQ.push(function() {
				var aMm = new q8,
					aMn = (aMm.qB(L(157)), [L(158), L(159), L(160), L(161), L(162)]),
					e3 = data.aMo;
				aMm.qH(L(163) + b9.rU.a3v(data.vf, .01, 2) + "<br>" + L(164) + (e3 + 1) + " / " + data.ve + "<br>" + L(165) + aMn[e3 < 10 ? 0 : e3 < 50 ? 1 : e3 < 200 ? 2 : e3 < 1e3 ? 3 : 4]), data.aMV || (aMm.qD(L(166)), aMm.qD(L(167)),
					aMm.qD(L(168)));
				return aMm
			}()), data.aMV && qQ.push(function() {
				var aMm = new q8,
					rI = (aMm.qB(L(169)), new rJ({
						value: bi.eG.data[147].value,
						e4: -1
					}, 1, void 0, function(e) {
						bi.rw.rx(147, aMp(e.target.value))
					})),
					aMq = (aMm.qM(rI), new w(L(14), function(e) {
						return rI.e.readOnly && az.y.aMr(0) && (b9.qV.a36(e), aMs(), az.aMt.aMu({
							sl: 0,
							sh: data.sh,
							value: parseInt(bi.eG.data[147].value, 10)
						})), !0
					}, 1)),
					aMv = new w(L(170), function(e) {
						return e.textContent === L(170) ? (e.textContent = L(171), rI.e.readOnly = !0, aMq.qp(0), aMq.button.style.color = bA.ob, bi.rw.rx(147, rI.e.value), aMp(bi.eG.data[147].value)) : aMs(), !0
					}),
					qE = (aMm.qM(new rz([aMv.button])), aMm.qD()),
					aMp = function(fB) {
						fB = b9.g5.a3b(fB, 2, 1e6);
						var aMw = Math.max(1, 1 + Math.floor(.01 * (fB - 100)));
						qE.textContent = L(172, [fB, bi.eG.data[105].value, aMw, data.sh, fB - aMw])
					},
					aMs = function() {
						aMv.button.textContent = L(170), rI.e.readOnly = !1, aMq.qp(1), aMq.button.style.color = bA.ne
					};
				return aMp(bi.eG.data[147].value), aMm.qM(new rz([aMq.button])), aMm
			}());
		qQ.push(function() {
			var aMm = new q8,
				rI = (aMm.qB(L(173)), new rJ({
					value: data.sh,
					e4: -1
				}));
			return rI.e.readOnly = !0, aMm.qM(rI), aMm.qM(new rz([new w(L(174), function(e) {
				return b9.qV.a35(rI.e), b9.qV.a36(e), !0
			}).button])), aMm
		}()), data.aMV || (qQ.push(function() {
			var aMm = new q8,
				aMx = (aMm.qB(L(175)), new rJ(bi.eG.data[106]));
			return aMx.e.readOnly = !0, aMx.e.type = "password", aMm.qM(aMx), aMm.qM(new rz([new w(L(176), function(e) {
				return e.textContent === L(176) ? (e.textContent = L(177), aMx.e.type = "text") : (e.textContent = L(176), aMx.e.type = "password"), !0
			}).button, new w(L(174), function(e) {
				return b9.qV.a35(aMx.e), b9.qV.a36(e), !0
			}).button])), aMm.qM(new rz([new w(L(178), function() {
				t.u(8, t.a4o().aM0, new sk(15))
			}).button])), aMm.qB(L(179), "0.8em"), aMm.qD(L(180)), aMm.qD(L(181)), aMm.qD(L(182)), aMm
		}()), qQ.push(function() {
			var aMm = new q8;
			return aMm.qB(L(183)), aMm.qM(new rz([new w(L(184), function() {
				t.u(6, t.a4o().aM0)
			}).button])), aMm.qM(new rz([new w(L(185), function() {
				bi.rw.rx(105, ""), t.u(8, t.a4o().aM0, new sk(18))
			}).button])), aMm.qM(new rz([new w(L(186) + bi.eG.data[105].value, function() {
				t.u(4, 0, new v(L(187), L(188), !0, [new w("⬅️ " + L(36), function() {
					t.u(7, t.a4p(7).aM0)
				})]))
			}, bA.oJ).button])), aMm
		}()), qQ.push(function() {
			function aMz(e4) {
				for (var aB = 0; aB < 2; aB++) aMy[aB].qp(0 === e4 ? bA.nq : 0 === aB ? bA.oJ : bA.o1)
			}
			var qK, aMy, aMm = new q8;
			aMm.qB(L(189)), aMm.qD(L(190)), bi.y.vP();
			return aMy = [new w(L(191), function() {
				var e4 = Math.min(bi.eG.data[117].value, qK.qL.length - 1);
				if (!(e4 < 1)) {
					qK.qL[e4].remove(), qK.qL.splice(e4, 1);
					for (var aB = e4; aB < qK.qL.length; aB++) qK.qL[aB].name = "" + aB;
					bi.y.vS(e4), e4 = bi.eG.data[117].value, qK.qL[e4].textContent = qK.qL[e4].textContent.replace("⚪", "🟢"), aMz(e4)
				}
			}, bA.nq), new w(L(192), function() {
				var e4 = Math.min(bi.eG.data[117].value, qK.qL.length - 1);
				e4 < 1 || (e4 = bi.y.vT(e4), bi.rw.rx(105, e4.sh), bi.rw.rx(106, e4.password), t.u(8, t.a4o().aM0, new sk(18)))
			}, bA.nq)], (qK = new uH(bi.eG.data[117], aMz)).qL[0].style.marginTop = "0.5em", aMm.qJ(qK), aMm.qM(new rz([aMy[1].button])), aMm.qM(new rz([aMy[0].button])), aMm
		}()));
		return qQ.push(function() {
				var aMm = new q8,
					aMn = (aMm.qB(L(196)), [L(197), L(198), L(199), L(200)]),
					e3 = data.aN0;
				return aMm.qH(L(201) + (data.a0F / 100).toFixed(2) + "<br>" + L(164) + (e3 + 1) + " / " + data.ve + "<br>" + L(165) + aMn[e3 < 10 ? 0 : e3 < 50 ? 1 : e3 < 200 ? 2 : 3]), aMm
			}()), qQ.push(function() {
				var aMm = new q8;
				return aMm.qB(L(193)), aMm.qH(L(194) + b9.rU.a3v(data.vb, .1, 1) + "<br>" + L(164) + (data.vc + 1) + " / " + data.ve + "<br>" + L(195) + data.vd), aMm
			}()),
			function(qQ) {
				var aMm = new q8,
					aNA = data.vi,
					aNB = (aMm.qB(L(216)), aMm.qH(L(217, [data.vg.length ? "[" + data.vg + "]" : "-"])), aMm.qH(L(218, [b9.rU.a3v(aNA, .01, 2)])), aMm.qH(L(219, [data.vk + 1 + " / " + data.ve])), data.vl),
					aNC = (aMm.qH(L(220, [b9.rU.a3v(aNB, .1, 1)])), data.vn);
				aMm.qH(L(221, [aNC])), aMm.qH(L(222, [b9.rU.a3v(aNB / Math.max(aNC, 1), .1, 2)])), aNA = data.vj, aMm.qB(L(223), "0.8em"), aMm.qH(L(217, [data.vh.length ? "[" + data.vh + "]" : "-"])), aMm.qH(L(218, [b9.rU.a3v(aNA, .01, 2)])),
					aNB = data.vm, aMm.qH(L(220, [b9.rU.a3v(aNB, .1, 1)])), aNC = data.vo, aMm.qH(L(221, [aNC])), aMm.qH(L(222, [b9.rU.a3v(aNB / Math.max(aNC, 1), .1, 2)])), data.aMV || (aMm.qD(L(224)), aMm.qD(L(225)));
				qQ.push(aMm)
			}(qQ),
			function(qQ) {
				var aMm = new q8;
				aMm.qB(L(226)), aMm.qH(L(201) + (data.aND / 10).toFixed(1) + "<br>" + L(165) + (data.aNE.length ? L(227, [data.aNE]) : L(228))), data.aMV ? (aMm.qM(new rz([new w(L(229), function(e) {
					return az.y.aMr(0) && (b9.qV.a36(e), az.aMt.aN9({
						sl: 4,
						sh: data.sh
					})), !0
				}, 0, 0, 1).button])), aMm.qD(L(230)), aMm.qD(L(231))) : aMm.qD(L(232));
				qQ.push(aMm)
			}(qQ), qQ.push(function() {
				var aMm = new q8;
				if (aMm.qB(L(202)), aMm.qH(L(203) + data.aN1 + "<br>" + L(164) + (data.aN2 + 1) + " / " + data.ve + "<br>" + L(165) + bn.e6(data.aN2)), data.aMV) {
					var rI = new rJ({
							value: bi.eG.data[157].value,
							e4: -1
						}, 1, void 0, function(e) {
							bi.rw.rx(157, aMp(e.target.value))
						}),
						aMv = (rI.e.style.marginTop = "0.6em", aMm.qM(rI), new w(L(170), function(e) {
							return e.textContent === L(170) ? (e.textContent = L(171), rI.e.readOnly = !0, aN3[0].qp(0), aN3[1].qp(0), aN3[0].button.style.color = bA.ob, aN3[1].button.style.color = bA.ob, aMp(bi.eG.data[157]
								.value)) : aMs(), !0
						})),
						aN3 = (aMm.qM(new rz([aMv.button])), [new w("−", function(e) {
							return rI.e.readOnly && az.y.aMr(0) && (b9.qV.a36(e), aMs(), az.aMt.aMu({
								sl: 2,
								sh: data.sh,
								value: bK.hs(parseInt(bi.eG.data[157].value, 10), 3, 32767)
							})), !0
						}, 1), new w("+", function(e) {
							return rI.e.readOnly && az.y.aMr(0) && (b9.qV.a36(e), aMs(), az.aMt.aMu({
								sl: 1,
								sh: data.sh,
								value: bK.hs(parseInt(bi.eG.data[157].value, 10), 3, 32767)
							})), !0
						}, 1)]),
						qE = aMm.qD(),
						aMp = function(fB) {
							return fB = b9.g5.a3b(fB, 3, 32767), qE.textContent = L(204, [fB - 1, fB, bi.eG.data[105].value]), fB
						};
					aMm.qM(new rz([aN3[0].button, aN3[1].button]));
					for (var aB = 0; aB < 2; aB++) aN3[aB].button.style.fontSize = "1.6em";
					var aMs = function() {
						aMv.button.textContent = L(170), rI.e.readOnly = !1, aN3[0].qp(1), aN3[1].qp(1), aN3[0].button.style.color = bA.ne, aN3[1].button.style.color = bA.ne
					};
					aMp(bi.eG.data[157].value)
				}
				return aMm
			}()),
			function(qQ) {
				var aMm, a34;
				data.aMV && !data.aNF || (0 === a0.id || data.aMV || data.aNF) && ((aMm = new q8).qB("Patreon"), !data.aMV && data.aNG ? aMm.qM(new rz([new w(L(176), function() {
					az.aMt.aN9({
						sl: 7,
						sh: data.sh
					}), data.aNG = 0, t.u(7)
				}).button])) : data.aNF ? (aMm.qH(L(233, [(data.aNH / 100).toFixed(2)]) + "<br>" + L(234, [1 + data.aNI + " / " + data.aNJ]) + "<br>" + L(235, [data.aNK ? L(236) : L(237)])), data.aMV || aMm.qM(new rz([new w(L(238),
					function() {
						az.aMt.aN9({
							sl: 8,
							sh: data.sh
						}), data.aNF = 0, bi.rw.rx(160, 0), t.u(7)
					}).button]))) : (aMm.qH(L(239), "0.75em").style.marginBottom = "0.3em", aMm.qH("  • " + L(240), "0.75em").style.whiteSpace = "pre", aMm.qH("  • " + L(241), "0.75em").style.whiteSpace = "pre", aMm.qH("  • " + L(
						242), "0.75em").style.whiteSpace = "pre", aMm.qH(L(243), "0.75em").style.marginTop = "1.0em", aMm.qH(L(244), "0.75em").style.marginTop = "1.0em", aMm.qH("<a href='" + bJ.aNL +
						"' target='_blank'>patreon.com/c/territorial</a>", "0.75em").style.marginTop = "0.3em", a34 = "https://www.patreon.com/oauth2/authorize?state=" + data.sh +
					"&response_type=code&client_id=wWuOlDVZwn1sxSN9Wm4I9sJA3Ewfw7Zz4MjTMf9el2v3lviVkDwFtr92n7Tdlrhc&redirect_uri=https://territorial.io/", aMm.qH(L(245), "0.75em").style.marginTop = "1.0em", aMm.qH("<a href='" + a34 +
						"' target='_blank'>patreon.com/oauth2/...</a>", "0.75em").style.marginTop = "0.3em", data.aMV || (aMm.qM(new s9), aMm.qM(new rz([new w(L(177), function() {
						az.aMt.aN9({
							sl: 6,
							sh: data.sh
						}), data.aNG = 1, t.u(7)
					}).button])), aMm.qH(L(246), "0.75em").style.marginTop = "0.75em")), qQ.push(aMm))
			}(qQ), qQ
	}())
}

function aMI() {
	var aNN, aNO, aNP, qQ;

	function aNQ() {
		aNS(), 2 !== aD.data.aIncomeType && (aD.data.aIncomeData = null), t.aMS()[19] = null, t.a0z()
	}

	function aNS() {
		2 === aD.data.aIncomeType ? (b9.qd.a2T(aNP.ut(), aD.data.aIncomeData, 255), b9.qd.max(aD.data.aIncomeData) || (aD.data.aIncomeType = 0)) : 1 !== aD.data.aIncomeType || aD.data.aIncomeValue || (aD.data.aIncomeType = 0)
	}
	this.show = function() {
		aNN.show(), this.resize()
	}, this.rm = function() {
		aNN.rm()
	}, this.resize = function() {
		aNN.resize(), aNO.resize()
	}, this.a1r = function(f4) {
		2 === f4 && aNN.uT[0].qm()
	}, aNN = new uM(L(247), [new w("⬅️ " + L(36), aNQ)]), aNO = new qO(aNN.uS, (function(qQ) {
		var aMm = new q8;
		aMm.qB(L(248)), aMm.qJ(new uH({
			uL: [L(249), L(250), L(251)],
			value: aD.data.aIncomeType
		}, function(e4) {
			aNS(), 2 !== e4 || aD.data.aIncomeData || (aD.data.aIncomeData = new Uint8Array(aD.eg)), aD.data.aIncomeType = e4, t.u(22)
		})), qQ.push(aMm)
	}(qQ = []), function(qQ) {
		var aMm;
		1 === aD.data.aIncomeType && ((aMm = new q8).qB("Value"), aMm.qM(new rJ({
			e4: -1,
			value: aD.data.aIncomeValue
		}, 1, 0, function(e) {
			var value = bK.hs(Math.floor(e.target.value), 0, 255);
			e.target.value = aD.data.aIncomeValue = value
		})), qQ.push(aMm))
	}(qQ), function(qQ) {
		var aMm;
		2 === aD.data.aIncomeType && ((aMm = new q8).qB("Data"), (aNP = new uk(0, 1, 0, 1)).ur(b9.rU.a41(aD.data.aIncomeData, 4)), aMm.qM(aNP), qQ.push(aMm))
	}(qQ), qQ))
}

function aML() {
	var aNN, aNO, aNP;

	function aNQ() {
		aNS(), 3 !== aD.data.botDifficultyType || b9.qd.a2H(aD.data.botDifficultyData) || (aD.data.botDifficultyType = 0), 3 !== aD.data.botDifficultyType && (aD.data.botDifficultyData = null), t.aMS()[19] = null, t.a0z()
	}

	function aNS() {
		3 === aD.data.botDifficultyType && b9.qd.a2T(aNP.ut(), aD.data.botDifficultyData, aE.kI.length - 1)
	}

	function aNX(qQ, e4) {
		var aMm = new q8,
			value = (aMm.qB(e4 < 0 ? L(61) : L(60) + " " + bf.a09[e4 % 9]), 0 <= e4 && (aMm.qH(L(254) + ": " + aD.data.teamPlayerCount[e4]).style.marginBottom = "1em"), e4 < 0 ? aD.data.botDifficultyValue : aD.data.botDifficultyTeam[e4]);
		aMm.qJ(new uH({
			uL: aE.kI,
			value: value
		}, function(hc) {
			e4 < 0 ? aD.data.botDifficultyValue = hc : aD.data.botDifficultyTeam[e4] = hc
		})), qQ.push(aMm)
	}
	this.show = function() {
		aNN.show(), this.resize()
	}, this.rm = function() {
		aNN.rm()
	}, this.resize = function() {
		aNN.resize(), aNO.resize()
	}, this.a1r = function(f4) {
		2 === f4 && aNN.uT[0].qm()
	}, aNN = new uM(L(61), [new w("⬅️ " + L(36), aNQ)]), aNO = new qO(aNN.uS, function() {
		var qQ = [];
		if (function(qQ) {
				var aMm = new q8,
					uL = (aMm.qB(L(248)), [L(250), L(252), L(253), L(251)]),
					value = aD.data.botDifficultyType;
				0 === aD.data.gameMode && (value = Math.min(value, 2), uL.splice(2, 1));
				aMm.qJ(new uH({
					uL: uL,
					value: value
				}, function(e4) {
					aNS(), aD.data.botDifficultyType = e4, 0 === aD.data.gameMode && 2 === e4 && (aD.data.botDifficultyType = 3), 3 !== aD.data.botDifficultyType || aD.data.botDifficultyData || (aD.data.botDifficultyData =
						new Uint8Array(aD.eg)), 2 !== aD.data.botDifficultyType || aD.data.botDifficultyTeam || (aD.data.botDifficultyTeam = new Uint8Array(9)), t.u(25)
				})), qQ.push(aMm)
			}(qQ), 0 === aD.data.botDifficultyType) aNX(qQ, -1);
		else if (2 === aD.data.botDifficultyType)
			for (var aB = 0; aB < aD.data.teamPlayerCount.length; aB++) aD.data.teamPlayerCount[aB] && aNX(qQ, aB);
		else 3 === aD.data.botDifficultyType && ! function(qQ) {
			var aMm = new q8;
			aMm.qB("Data"), (aNP = new uk(0, 1, 0, 1)).ur(b9.rU.a41(aD.data.botDifficultyData, 8)), aMm.qM(aNP), qQ.push(aMm)
		}(qQ);
		return qQ
	}())
}

function aNY(data) {
	var aMT, aNZ, aNa, aNb, aNc, aNd, aNe, colors, aNf, aNg, aNh = 0,
		aNi = 0,
		aNj = !1,
		aNk = !1,
		aNl = [1, 5, 60, 240, 1440, 10080, 43200];

	function aOF(lK, lL) {
		! function(lK, lL) {
			return aNZ < lK && lK < aNZ + aNb && aNa < lL && lL < aNa + aNc
		}(aNh = lK, aNi = lL) ? (aNj && (be.dh = !0), aNj = !1) : (aNj = !0, be.dh = !0)
	}
	this.show = function() {
		aNk = bi.eG.data[127].value, aMT.show(), this.resize()
	}, this.rm = function() {
		aMT.rm()
	}, this.resize = function() {
		aMT.resize();
		var f4 = h.k,
			ua = aMT.uX(),
			aNu = f4 * ua.uZ,
			f4 = f4 * ua.rp;
		aNd = b9.qV.t8(.06), aNe = b9.qV.t8(.04), aNZ = b9.qV.t8(.06), aNa = f4 + aNd, aNb = h.i - aNZ - aNe, aNc = aNu + f4 - aNa - aNe
	}, this.ub = function() {
		aMT.ub(),
			function() {
				var aB, aNr, gC, eq, f2, g = data.data,
					aNy = 1,
					aNz = .125,
					aO0 = aNk ? 65536 : 0;
				for (aB = 0; aB < g.length; aB++)
					for (aNr = g[aB].aNr, gC = aNr.length, aNy = Math.max(gC, aNy), f2 = 0; f2 < gC; f2++) aNz = Math.max(aNr[f2], aNz), aO0 = Math.min(aNr[f2], aO0);
				var n5 = aNa + aNc,
					xo = aNc / (aNz - aO0),
					xn = 1 / (aNy - 1);
				for (uc.lineWidth = bb.ym, aB = 0; aB < g.length; aB++) {
					for (aNr = g[aB].aNr, gC = aNr.length, eq = aNZ, uc.beginPath(), uc.moveTo(eq + aNb, n5 - xo * (aNr[gC - 1] - aO0)), f2 = gC - 2; 0 <= f2; f2--) uc.lineTo(eq + xn * f2 * aNb, n5 - xo * (aNr[f2] - aO0));
					uc.strokeStyle = colors[aB], uc.stroke()
				}(function(aO0, aNz, n5, xo) {
					uc.font = b9.qV.sJ(0, .25 * aNZ), b9.qV.textBaseline(uc, 1), b9.qV.textAlign(uc, 2), uc.fillStyle = colors[0];
					for (var eq = .92 * aNZ, aB = 0; aB < 3; aB++) {
						var fB = aO0 + aB * (aNz - aO0) / 2;
						uc.fillText((fB / 1e3).toFixed(3), eq, n5 - xo * (fB - aO0))
					}
				})(aO0, aNz, n5, xo),
				function(aNy) {
					var es = aNa + aNc + .15 * aNe;
					uc.font = b9.qV.sJ(0, Math.min(.4 * aNe, .028 * h.i)), b9.qV.textBaseline(uc, 0), b9.qV.textAlign(uc, 2), uc.fillStyle = colors[0], uc.fillText(b9.a28.a2v(aNf), aNZ + aNb, es), b9.qV.textAlign(uc, 0), uc.fillText(b9.a28.a2v(
						new Date(aNg.getTime() - 6e4 * (aNy - 1) * aNl[data.aNq])), aNZ, es)
				}(aNy),
				function(aNy, aO0, aNz) {
					if (aNj && !(aNy < 2)) {
						for (var a8G, e4 = (aNh - aNZ) / aNb * (aNy - 1), aO3 = Math.floor(e4), aO4 = Math.floor(1 + e4), aO5 = e4 - aO3, aO6 = 1e5, aO7 = -1, aO8 = -1, aO9 = aNz - (aNz - aO0) * (aNi - aNa) / aNc, g = data.data, aB = 0; aB < g
							.length; aB++) {
							var aBx, aNr = g[aB].aNr;
							aNr.length <= aO4 || (aNr = aNr[aO3] + aO5 * (aNr[aO4] - aNr[aO3]), (aBx = Math.abs(aO9 - aNr)) < aO6 && (aO6 = aBx, aO7 = aB, aO8 = aNr))
						} - 1 !== aO7 && (aNz = aNa + aNc - (aO8 - aO0) / (aNz - aO0) * aNc, uc.lineWidth = .5 * bb.ym, uc.strokeStyle = colors[aO7], uc.beginPath(), uc.moveTo(aNZ, aNz), uc.lineTo(aNh, aNz), uc.lineTo(aNh, aNa + aNc), uc
						.stroke(), uc.beginPath(), uc.arc(aNh, aNz, .1 * aNZ, 0, 2 * Math.PI), uc.fillStyle = colors[aO7], uc.fill(), aO0 = aNa + aNc + .15 * aNe, b9.qV.textAlign(uc, 1), a8G = aNy - 2 < e4 ? (a8G = aNg.getTime() - 6e4 * aNl[
								data.aNq], new Date(a8G + (e4 - (aNy - 2)) * (aNf.getTime() - a8G))) : new Date(aNg.getTime() - 6e4 * (aNy - e4 - 1) * aNl[data.aNq]), aNy = b9.a28.a2v(a8G), e4 = b9.qV.measureText(aNy), a8G = bK.hs(aNh, aNZ +
								.5 * e4, aNZ + aNb - .5 * e4), uc.fillStyle = b9.color.nW(70, 50, 20), uc.fillRect(a8G - .52 * e4, aNa + aNc, 1.04 * e4, .55 * aNe), uc.fillStyle = colors[0], uc.fillText(aNy, a8G, aO0), uc.font = b9.qV.sJ(0,
								.25 * aNZ), b9.qV.textBaseline(uc, 1), b9.qV.textAlign(uc, 2), a8G = .92 * aNZ, aNy = (aO8 / 1e3).toFixed(3), e4 = b9.qV.measureText(aNy), aO0 = a8G - 1.04 * e4, uc.fillStyle = b9.color.nW(70, 50, 20), uc
							.fillRect(aO0, aNz - .1625 * aNZ, aNZ - aO0, .275 * aNZ), uc.fillStyle = colors[aO7], uc.fillText(aNy, a8G, aNz))
					}
				}(aNy, aO0, aNz)
			}(), uc.lineWidth = bb.ym, uc.strokeStyle = bA.ne, uc.beginPath(), uc.moveTo(aNZ, aNa), uc.lineTo(aNZ, aNa + aNc), uc.lineTo(aNZ + aNb, aNa + aNc), uc.stroke();
		var aB, fontSize = .5 * aNd,
			g = (uc.font = b9.qV.sJ(0, fontSize), b9.qV.textBaseline(uc, 1), b9.qV.textAlign(uc, 0), data.data),
			ej = g.length,
			es = aNa - .5 * aNd,
			qC = "";
		for (aB = 0; aB < ej; aB++) qC += g[aB].name + "  ";
		qC = qC.trim();
		var aOC = b9.qV.measureText(qC),
			eq = .5 * (h.i - aOC);
		for (aOC > h.i && (eq = 0, uc.font = b9.qV.sJ(0, h.i / aOC * fontSize)), aB = 0; aB < ej; aB++) uc.fillStyle = colors[aB], uc.fillText(g[aB].name, eq, es), eq += b9.qV.measureText(g[aB].name + "  ")
	}, this.gw = function(lK, lL) {
		aOF(lK, lL)
	}, this.a1J = function(lK, lL) {
		aOF(lK, lL)
	}, this.a1r = function(f4) {
		2 === f4 && aMT.uT[0].qm()
	};
	var aB, dp, a2t, hc, em = data.data,
		ej = em.length,
		max = 1;
	for (aB = 0; aB < ej; aB++) max = Math.max(max, em[aB].aNr.length);
	for (aB = 0; aB < ej; aB++)
		for (; em[aB].aNr.length < max;) em[aB].aNr.unshift(0);
	dp = new Date, a2t = 6e4 * dp.getTimezoneOffset(), hc = dp.getTime() - a2t, aNf = new Date(hc), 6 === data.aNq ? function(dp, a2t) {
		var aNt = dp.getUTCFullYear(),
			dp = dp.getUTCMonth() + 1;
		aNg = dp < 12 ? new Date(Date.UTC(aNt, dp) - a2t) : new Date(Date.UTC(aNt + 1, 0) - a2t)
	}(dp, a2t) : (a2t = 6e4 * aNl[data.aNq], aNg = data.aNq <= 4 ? new Date(hc + a2t - dp.getTime() % a2t) : new Date(hc + a2t - (dp.getTime() + 2592e5) % a2t)), hc = b9.color, colors = [bA.ne, hc.nW(255, 0, 0), hc.nW(0, 200, 0), hc.nW(80, 80,
		255), hc.nW(255, 255, 0), hc.nW(255, 0, 255), hc.nW(0, 255, 255), hc.nW(255, 140, 0), hc.nW(128, 128, 128), hc.nW(0, 255, 140)], aMT = new uM(L(255) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.aNq] + ", " + b9.a28.a2s(aNf), [
		new w("⬅️ " + L(36), function() {
			t.u(1)
		}), new w(L(256), function() {
			t.u(14)
		})
	], !1)
}

function aMA() {
	var aMT, aMU, qQ;
	this.show = function() {
		aMT.show(), this.resize()
	}, this.rm = function() {
		aMT.rm()
	}, this.resize = function() {
		aMT.resize(), aMU.resize()
	}, this.a1r = function(f4) {
		2 === f4 && aMT.uT[0].qm()
	}, aMT = new uM(L(257), [new w("⬅️ " + L(36), function() {
		t.aMR(13)
	})]), aMU = new qO(aMT.uS, ((qQ = []).push(function() {
		var aMm = new q8,
			aMv = (aMm.qB(L(258)), aMm.qD(L(259)), new w(L(260), function() {
				bi.rw.rx(130, 0), t.y.aOK()
			}, 0, 0, 1)),
			rI = new rJ(bi.eG.data[126], 0, function() {
				aMv.button.click()
			});
		return aMm.qM(rI), rI.e.placeholder = "a,b,c", rI.e.style.marginTop = "0.5em", aMm.qM(new rz([aMv.button])), aMm
	}()), qQ.push(function() {
		var aMm = new q8,
			aMv = new w(L(260), function() {
				bi.rw.rx(130, 1), t.y.aOK()
			}, 0, 0, 1),
			aOL = new rJ(bi.eG.data[129], 1, function() {
				aOL.e.focus()
			}),
			aOM = new rJ(bi.eG.data[128], 1, function() {
				aMv.button.click()
			});
		return aMm.qB(L(261)), aMm.qM(aOM), aOM.e.style.marginBottom = "0.5em", aMm.qB(L(262)), aMm.qM(aOL), aMm.qM(new rz([aMv.button])), aMm
	}()), qQ.push(function() {
		var aMm = new q8;
		return aMm.qB(L(263)), bi.eG.data[125].uL = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], aMm.qJ(new uH(bi.eG.data[125])), aMm
	}()), qQ.push(function() {
		var aMm = new q8;
		return aMm.qB(L(264)), aMm.qM(new rt(bi.eG.data[127], L(265))), aMm
	}()), qQ))
}

function aM9() {
	var aMT, aON, aNb, aOO, aOP, aOQ, colors = [0, 0, 0],
		aOR = -1;

	function aOU(aB) {
		var aOV = aON.es + aB * (bb.gap + aOQ);
		uc.fillStyle = "rgb(" + (0 === aB ? 150 : 2 === aB ? 30 : 0) + "," + (1 === aB ? 130 : 2 === aB ? 30 : 0) + "," + (2 === aB ? 220 : 0) + ")", uc.fillRect(aOO, aOV, colors[aB] * aOP, aOQ), uc.strokeStyle = bA.ne, uc.strokeRect(aOO, aOV, aOP,
			aOQ), uc.fillStyle = bA.ne, uc.font = b9.qV.sJ(0, .32 * aOQ), b9.qV.textBaseline(uc, 1), b9.qV.textAlign(uc, 0), uc.fillText(L(0 === aB ? 268 : 1 === aB ? 269 : 270) + aOS(aB), aOO + bb.gap, aOV + .53 * aOQ)
	}

	function aOS(aB, aOW) {
		return aOW = aOW || 256, bK.hs(Math.floor(aOW * colors[aB]), 0, aOW - 1)
	}

	function a1n(lK, lL) {
		return !(lK < aOO || lL < aON.es || lK > aON.eq + aON.i || lL > aON.es + aON.j)
	}
	this.show = function() {
		var fB = bi.eG.data[121].value;
		colors[0] = (fB >> 12) / 63, colors[1] = (fB >> 6 & 63) / 63, colors[2] = (63 & fB) / 63, aMT.show(), this.resize()
	}, this.rm = function() {
		bi.rw.rx(121, (aOS(0, 64) << 12) + (aOS(1, 64) << 6) + aOS(2, 64)), aMT.rm()
	}, this.resize = function() {
		aMT.resize(), aON.resize();
		var f4 = h.k,
			ua = aMT.uX(),
			aOT = (aON.es = Math.max(aON.es, f4 * ua.rp + bb.gap), f4 * ua.uZ - 2 * bb.gap);
		aON.j = Math.min(aON.j, aOT), aON.i = 2 * aON.j, aON.es = f4 * ua.rp + .5 * (f4 * ua.uZ - aON.j), aON.eq = .5 * (h.i - aON.i), aNb = .25 * aON.i, aOO = aON.eq + aNb + bb.gap, aOP = aON.i - aNb - bb.gap, aOQ = (aON.j - 2 * bb.gap) / 3
	}, this.ub = function() {
		var e3, t7, f3;
		aMT.ub(), uc.lineWidth = bb.ym, e3 = aOS(0), t7 = aOS(1), f3 = aOS(2), uc.fillStyle = "rgb(" + e3 + "," + t7 + "," + f3 + ")", uc.fillRect(aON.eq, aON.es, aNb, aON.j), uc.strokeStyle = bA.ne, uc.strokeRect(aON.eq, aON.es, aNb, aON.j), uc
			.fillStyle = e3 + t7 + f3 < 306 && t7 < 150 ? bA.ne : bA.nV, b9.qV.textBaseline(uc, 1), b9.qV.textAlign(uc, 1), uc.font = b9.qV.sJ(0, .1 * aON.j), uc.rotate(-Math.PI / 2), uc.fillText(L(267), -aON.es - .5 * aON.j, aON.eq + .5 * aNb),
			uc.setTransform(1, 0, 0, 1, 0, 0), aOU(0), aOU(1), aOU(2)
	}, this.gw = function(lK, lL) {
		a1n(lK, lL) && (aOR = bK.hs(Math.floor((lL - aON.es) / (aOQ + .75 * bb.gap)), 0, 2), colors[aOR] = bK.hs((lK - aOO) / aOP, 0, 1), be.dh = !0)
	}, this.a1J = function(lK) {
		-1 !== aOR && (colors[aOR] = bK.hs((lK - aOO) / aOP, 0, 1), be.dh = !0)
	}, this.a1M = function(lK, lL, deltaY) {
		a1n(lK, lL) && (lK = bK.hs(Math.floor((lL - aON.es) / (aOQ + .75 * bb.gap)), 0, 2), colors[lK] = bK.hs(colors[lK] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), be.dh = !0)
	}, this.a1h = function() {
		0 <= aOR && (aOR = -1, be.dh = !0)
	}, this.a1r = function(f4) {
		2 === f4 && aMT.uT[0].qm()
	}, aMT = new uM(L(266), [new w("⬅️ " + L(36), function() {
		t.y.aBr()
	})], !1), aON = new r6([.5, .25], [.5, .5], 1)
}

function aMH() {
	var aNN, aNO, aNP, r4;

	function aNQ() {
		aNS(), 1 !== aD.data.colorsType && (aD.data.colorsData = null), t.aMS()[19] = null, t.a0z()
	}

	function aOX() {
		aNS(), t.u(21)
	}

	function aNS() {
		1 === aD.data.gameMode ? aD.a4I.a4M() : 0 === aD.data.gameMode && 1 === aD.data.colorsType && b9.qd.a2T(aNP.ut(), aD.data.colorsData, 262143)
	}
	this.show = function() {
		aNN.show(), this.resize()
	}, this.rm = function() {
		aNN.rm()
	}, this.resize = function() {
		aNN.resize(), aNO.resize()
	}, this.a1r = function(f4) {
		2 === f4 && aNN.uT[0].qm()
	}, r4 = [new w("⬅️ " + L(36), aNQ)], 1 === aD.data.gameMode && r4.push(new w(L(271), aOX, 1, 1)), aNN = new uM(L(272), r4), aNO = new qO(aNN.uS, (function(qQ) {
		var aMm = new q8;
		aMm.qB(L(248)), 0 === aD.data.gameMode && (aMm.qJ(new uH({
			uL: [L(273), L(251)],
			value: aD.data.colorsType
		}, function(e4) {
			aNS(), aD.data.colorsType = e4, 1 !== aD.data.colorsType || aD.data.colorsData && aD.data.colorsData.length === aD.eg || (aD.data.colorsData = new Uint32Array(aD.eg)), t.u(21)
		})), aMm.qM(new s9));
		aMm.qM(new rt({
			value: aD.data.selectableColor
		}, L(274), function(value) {
			aD.data.selectableColor = value
		})), qQ.push(aMm)
	}(r4 = []), 0 === aD.data.gameMode ? 1 === aD.data.colorsType && function(qQ) {
		var aMm = new q8;
		aMm.qB("Data"), (aNP = new uk(0, 1, 0, 1)).ur(b9.rU.a41(aD.data.colorsData, 1)), aMm.qM(aNP), qQ.push(aMm)
	}(r4) : (aD.a4I.a4M(), r4.push(function() {
		var aMm = new q8;
		aMm.qB(L(254));
		for (var aB = 0; aB < bf.a09.length; aB++) {
			var hc = (aB + 1) % bf.a09.length,
				e = aMm.qH((0 == hc ? "" : "Team ") + bf.a09[hc]);
			aB && (e.style.marginTop = "0.5em"), aMm.qM(new rJ({
				e4: -1,
				value: aD.data.teamPlayerCount[hc]
			}, 1, 0, function(e) {
				aNN.uT[1].qp(0);
				var playerCount = bK.hs(Math.floor(e.target.value), 0, 512);
				e.target.value = playerCount, aD.data.teamPlayerCount[e.target.aOZ] = playerCount
			})).e.aOZ = hc
		}
		return aMm
	}())), r4))
}

function sk(id, a3e, aOa) {
	var aMT, aOb;

	function aOg() {
		aOb.qR.innerHTML += "<br>" + L(277)
	}

	function aOf() {
		bC.a7(48), bC.a8(24, Math.floor(bK.pow(24) * Math.random())), bC.a8(24, Math.floor(bK.pow(24) * Math.random())), bG.dZ(bC.aC), bi.rw.rx(110, bE.sm.sn(bE.sm.so(8))), az.aMt.aOu()
	}
	this.aOc = !0, this.aOd = id, this.show = function() {
		aMT.show(), this.resize(), 15 === id ? (az.y.aOe(id) ? aOf : aOg)() : 16 === id ? az.y.aOe(id) ? az.aBo.aOh(2) : aOg() : 17 === id ? az.y.aOe(id) ? az.aBo.aOh(3) : aOg() : 18 === id ? (az.y.close(0, 3253), az.y.aFN(0, id), aOg()) : 21 ===
			id ? az.y.aOe(id) ? az.aOi.aOj(a3e.t2, a3e.t3, a3e.t4) : aOg() : 22 === id ? az.y.aOe(id) ? az.aOi.aOk(a3e.t2, a3e.aOl, a3e.aOm) : aOg() : 23 === id ? az.y.aOe(id) ? az.aOi.aOn(a3e.aNq, a3e.a0T) : aOg() : 24 === id ? az.y.aOe(id) ? az
			.aOi.aOo(a3e.aNq, a3e.t3, a3e.t4) : aOg() : 25 === id ? az.y.aOe(id) ? az.aMt.aN9(a3e) : aOg() : 28 === id ? az.y.aOe(id) ? az.aOi.aOp(a3e.t2, a3e.aOl, a3e.aOm) : aOg() : 29 === id && (az.y.aOe(id) ? az.aMt.aOq(a3e) : aOg())
	}, this.aOr = function() {
		15 === id ? aOf() : 16 === id ? az.aBo.aOh(2) : 17 === id ? az.aBo.aOh(3) : 18 === id ? t.u(8, this.aM0, new sk(16)) : 21 === id ? az.aOi.aOj(a3e.t2, a3e.t3, a3e.t4) : 22 === id ? az.aOi.aOk(a3e.t2, a3e.aOl, a3e.aOm) : 23 === id ? az.aOi
			.aOn(a3e.aNq, a3e.a0T) : 24 === id ? az.aOi.aOo(a3e.aNq, a3e.t3, a3e.t4) : 25 === id ? az.aMt.aN9(a3e) : 28 === id ? az.aOi.aOp(a3e.t2, a3e.aOl, a3e.aOm) : 29 === id ? az.aMt.aOq(a3e) : 1e3 === id && (this.aOd = id = 25, az.aMt.aN9(
				a3e))
	}, this.aOs = function(code, bs, data) {
		!bs && code !== id || (15 === code || 16 === code ? t.u(7, this.aM0) : 17 === code ? (az.y.close(0, 3252), bi.y.vS(0), bi.eG.data[117].uL && 0 < bi.eG.data[117].uL.length ? (bs = bi.y.vT(0), bi.rw.rx(105, bs.sh), bi.rw.rx(106, bs
			.password), t.u(8, this.aM0, new sk(16))) : (bi.rw.rx(105, ""), t.y.aBr())) : 21 === code ? t.u(10, this.aM0, new aOt(data)) : 23 === code ? t.u(13, this.aM0, new aNY({
			data: data,
			aNq: a3e.aNq
		})) : 25 === code && (t.y.aMB.sh = a3e.sh, t.u(15, this.aM0)))
	}, this.rm = function() {
		aMT.rm()
	}, this.resize = function() {
		aMT.resize(), aOb.resize()
	}, this.a1r = function(f4) {
		2 === f4 && aMT.uT[0].qm()
	}, aMT = new uM(L(275), [new w("⬅️ " + L(36), function() {
		aOa ? t.u(29) : t.y.aBr()
	})]), aOb = new ry(aMT.uS, L(276))
}

function aMF() {
	var aNN, aNO, qQ;

	function aOx() {
		var gC;
		1 === aD.data.gameMode ? (aD.data.teamPlayerCount || (aD.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), aD.a4I.a4M()), gC = b9.qd.a2N(aD.data.teamPlayerCount, 0), aD.data.numberTeams = gC) : (2 === aD.data
			.botDifficultyType && (aD.data.botDifficultyType = 0), 1 === aD.data.spawningType && (aD.data.spawningType = 0))
	}

	function aNQ() {
		1 !== aD.data.gameMode && (aD.data.teamPlayerCount = null), aOz(), aD.data.canvas = null, t.u(5, 5)
	}

	function aOz() {
		b8.pp.dZ(), bi.rw.rx(156, b8.a4Y.zG())
	}

	function aOv() {
		aD.data.isReplay = 0, aOz(), aD.a4I.a4j(), aa.aFY(), aD.a4I.a4g(), aD.data.canvas = 2 === aD.data.mapType ? bR.wP : null, aD.a4L(), aD.a4K = 1
	}

	function aPB() {
		aOx();
		for (var g = [aP2(), aP3(), aP4()], aB = 3; aB < 6; aB++) aNO.qR.removeChild(aNO.qS[aB].qA), aNO.qS[aB] = g[aB - 3], aNO.qR.appendChild(aNO.qS[aB].qA);
		aNO.resize()
	}

	function aP2() {
		var aPC, aMm = new q8;
		return aMm.qB(L(272)), aPC = 0 === aD.data.gameMode ? [L(273), L(251)][aD.data.colorsType] : aD.data.numberTeams + " Team" + (1 === aD.data.numberTeams ? "" : "s"), aMm.qH(aPC), aMm.qM(new rz([new w(L(281), function() {
			t.u(21)
		}).button])), aMm
	}

	function aP3() {
		var aMm = new q8,
			g = (aMm.qB(L(61)), [L(250) + ": " + aE.kI[aD.data.botDifficultyValue], L(252), L(253), L(251)]);
		return aMm.qH(g[aD.data.botDifficultyType]), aMm.qM(new rz([new w(L(281), function() {
			t.u(25)
		}).button])), aMm
	}

	function aP4() {
		var aMm = new q8,
			g = (aMm.qB("Spawning"), [L(273), L(283), L(251)]);
		return aMm.qH(g[aD.data.spawningType]), aMm.qM(new rz([new w(L(281), function() {
			t.u(24)
		}).button])), aMm
	}
	this.show = function() {
		aNN.show(), this.resize(), aNN.uS.scrollTop = t.y.aHQ[0]
	}, this.rm = function() {
		t.y.aHQ[0] = aNN.uS.scrollTop, aNN.rm()
	}, this.resize = function() {
		aNN.resize(), aNO.resize()
	}, this.a1r = function(f4) {
		2 === f4 && aNN.uT[0].qm()
	}, aNN = new uM("🔧 " + L(278), [new w("⬅️ " + L(36), aNQ), new w(L(279), aOv)]), aOx(), aD.data.canvas || (2 === aD.data.mapType ? aD.data.canvas = bR.wP : 1 === aD.data.mapType ? aD.data.canvas = bR.aJv(bR.a4h(aD.data), 0).wP : (aD.data
		.mapType = 0, aD.data.passableWater = aD.data.passableMountains = 1, aD.data.canvas = bR.aJv(bR.a4h(aD.data), aD.data.mapSeed).wP)), aNO = new qO(aNN.uS, (function(qQ) {
		var aMm = new q8,
			a2d = (aMm.qB(L(280)), aD.data.canvas);
		a2d.style.width = "100%", aMm.qM({
			e: a2d
		}), aMm.qM(new rz([new w(L(281), function() {
			t.u(20)
		}).button])), qQ.push(aMm)
	}(qQ = []), function(qQ) {
		var aMm = new q8;
		aMm.qB(L(254)), aMm.qM(new rJ({
			e4: -1,
			value: aD.data.playerCount
		}, 1, 0, function(e) {
			var playerCount = bK.hs(Math.floor(e.target.value), 1, 512);
			e.target.value = aD.data.playerCount = playerCount, 1 === aD.data.gameMode && (e = b9.qd.a2N(aD.data.teamPlayerCount, 0), aD.a4I.a4M(), b9.qd.a2N(aD.data.teamPlayerCount, 0) !== e) && aPB()
		})), qQ.push(aMm)
	}(qQ), function(qQ) {
		var aMm = new q8;
		aMm.qB(L(282)), aMm.qJ(new uH({
			uL: ["Battle Royale", "Teams"],
			value: aD.data.gameMode
		}, function(e4) {
			aD.data.gameMode !== e4 && (aD.data.gameMode = e4, aPB())
		})), qQ.push(aMm)
	}(qQ), qQ.push(aP2()), qQ.push(aP3()), qQ.push(aP4()), function(qQ) {
		var aMm = new q8,
			g = (aMm.qB(L(284)), [L(285), L(286), L(251)]);
		aMm.qH(g[aD.data.playerNamesType]), aMm.qM(new rz([new w(L(281), function() {
			t.u(23)
		}).button])), qQ.push(aMm)
	}(qQ), function(qQ) {
		var aMm = new q8,
			g = (aMm.qB(L(247)), [L(249), L(250) + ": " + aD.data.aIncomeValue, L(251)]);
		aMm.qH(g[aD.data.aIncomeType]), aMm.qM(new rz([new w(L(281), function() {
			t.u(22)
		}).button])), qQ.push(aMm)
	}(qQ), function(qQ) {
		var aMm = new q8,
			g = (aMm.qB(L(287)), [L(249), L(250) + ": " + aD.data.tIncomeValue, L(251)]);
		aMm.qH(g[aD.data.tIncomeType]), aMm.qM(new rz([new w(L(281), function() {
			t.u(26)
		}).button])), qQ.push(aMm)
	}(qQ), function(qQ) {
		var aMm = new q8,
			g = (aMm.qB(L(288)), [L(249), L(250) + ": " + aD.data.iIncomeValue, L(251)]);
		aMm.qH(g[aD.data.iIncomeType]), aMm.qM(new rz([new w(L(281), function() {
			t.u(27)
		}).button])), qQ.push(aMm)
	}(qQ), function(qQ) {
		var aMm = new q8,
			g = (aMm.qB(L(289)), [L(249), L(250) + ": " + aD.data.sResourcesValue, L(251)]);
		aMm.qH(g[aD.data.sResourcesType]), aMm.qM(new rz([new w(L(281), function() {
			t.u(28)
		}).button])), qQ.push(aMm)
	}(qQ), function(qQ) {
		var aMm = new q8;
		aMm.qB(L(290)), aMm.qM(new rz([new w(L(291), function() {
			t.x(), aD.a4I.a4k(), t.y.aHQ[0] = 0, t.u(19)
		}).button])), aMm.qM(new rz([new w(L(292), function() {
			bl.aHF()
		}).button])), aMm.qM(new rz([new w(L(293), function() {
			return bl.aHH(), !0
		}).button])), qQ.push(aMm)
	}(qQ), qQ))
}

function aMQ() {
	var aNN, rO = !0;

	function rf(re, a4m) {
		var qA = document.createElement("div"),
			aPE = document.createElement("span"),
			aPF = document.createElement("span");
		aPE.textContent = aW.aAj(a4m.eI) + ":", aPE.style.color = bA.nt, aPE.style.paddingRight = "0.4em", aPE.style.display = "table-cell", aPE.style.width = "6ch", aPE.style.textAlign = "end", qA.appendChild(aPE), aPF.textContent = a4m.qC, qA
			.appendChild(aPF), qA.style.display = "table", a4m.pE && function(qA, pE) {
				{
					var aHB;
					pE >= 1024 - aj.rl.yZ ? ((aHB = document.createElement("img")).src = aj.wS.yN[pE - 1024 + aj.rl.yZ].toDataURL(), aHB.style.width = "1.5em", aHB.style.height = "1.5em", aHB.style.verticalAlign = "middle", qA.appendChild(aHB)) : ((
						aHB = document.createElement("span")).textContent = aj.rl.yo(pE), aHB.style.display = "inline-block", aHB.style.fontSize = "1.5em", aHB.style.lineHeight = "1em", aHB.style.verticalAlign = "middle", qA.appendChild(aHB))
				}
			}(qA, a4m.pE), re.appendChild(qA)
	}

	function ri() {
		rO && (aNN.uS.scrollTop = aNN.uS.scrollHeight)
	}
	this.clear = function() {
		aNN.uS.textContent = ""
	}, this.show = function() {
		this.clear();
		for (var a5f = bp.a4q(), ej = a5f.length, re = document.createDocumentFragment(), aB = 0; aB < ej; aB++) rf(re, a5f[aB]);
		aNN.uS.appendChild(re), ri(), aNN.show(), this.resize(), rO = !0, ri()
	}, this.rm = function() {
		aNN.rm()
	}, this.resize = function() {
		aNN.resize(), aNN.uS.style.padding = "0.4em " + b9.qV.qe(bb.qb)
	}, this.a1r = function(f4) {
		2 === f4 && aNN.uT[0].qm()
	}, this.yH = function(a4m) {
		var re = document.createDocumentFragment();
		rf(re, a4m), aNN.uS.appendChild(re), ri()
	}, (aNN = new uM(L(294), [new w("⬅️ " + L(36), function() {
		t.aMR(1)
	})])).uS.style.overflowY = "auto", aNN.uS.addEventListener("scroll", function() {
		rO = aNN.uS.scrollTop >= aNN.uS.scrollHeight - aNN.uS.clientHeight - 2
	})
}

function aMN() {
	var aNN, aNO, aNP, qQ;

	function aNQ() {
		aNS(), 2 !== aD.data.iIncomeType && (aD.data.iIncomeData = null), t.aMS()[19] = null, t.a0z()
	}

	function aNS() {
		2 === aD.data.iIncomeType && b9.qd.a2T(aNP.ut(), aD.data.iIncomeData, 255)
	}
	this.show = function() {
		aNN.show(), this.resize()
	}, this.rm = function() {
		aNN.rm()
	}, this.resize = function() {
		aNN.resize(), aNO.resize()
	}, this.a1r = function(f4) {
		2 === f4 && aNN.uT[0].qm()
	}, aNN = new uM(L(288), [new w("⬅️ " + L(36), aNQ)]), aNO = new qO(aNN.uS, (function(qQ) {
		var aMm = new q8;
		aMm.qB(L(248)), aMm.qJ(new uH({
			uL: [L(249), L(250), L(251)],
			value: aD.data.iIncomeType
		}, function(e4) {
			aNS(), 2 !== e4 || aD.data.iIncomeData || (aD.data.iIncomeData = new Uint8Array(aD.eg), aD.data.iIncomeData.fill(32)), aD.data.iIncomeType = e4, t.u(27)
		})), qQ.push(aMm)
	}(qQ = []), function(qQ) {
		var aMm;
		1 === aD.data.iIncomeType && ((aMm = new q8).qB("Value"), aMm.qM(new rJ({
			e4: -1,
			value: aD.data.iIncomeValue
		}, 1, 0, function(e) {
			var value = bK.hs(Math.floor(e.target.value), 0, 255);
			e.target.value = aD.data.iIncomeValue = value
		})), qQ.push(aMm))
	}(qQ), function(qQ) {
		var aMm;
		2 === aD.data.iIncomeType && ((aMm = new q8).qB("Data"), (aNP = new uk(0, 1, 0, 1)).ur(b9.rU.a41(aD.data.iIncomeData, 4)), aMm.qM(aNP), qQ.push(aMm))
	}(qQ), qQ))
}

function aM5() {
	var aPH, aPI, aON, rI, aPJ;
	this.aG6 = new ss, aON = new r6([.45, .27], [.5, .5], 2 / 3), aPI = [new w("⚔️<br>" + L(295), function() {
			aPK(0)
		}, bA.o7), new w("🗡️<br>" + L(278), function() {
			aPK(1)
		}, bA.oP), new w("🔑<br>" + L(296), function() {
			aPK(2)
		}, bA.oh), new w("☰<br>" + L(297), function() {
			aPK(3)
		}, bA.nr), new w("", function() {
			t.u(12)
		}, bA.na, !1),
		new w("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new w("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], rI = new rJ(bi.eG.data[122]);
	for (var aB = 0; aB < aPI.length; aB++) aPI[aB].button.style.position = "absolute";

	function aPK(e4) {
		a0.a1.setState(10), ab.tB() || ab.aFx(), 0 === e4 ? t.y.a4b() : 1 === e4 ? (b8.aHa.wA(bi.eG.data[156].value, 1) || aD.a4I.a4k(), t.u(19)) : 2 === e4 ? 0 !== a0.id || bi.eG.data[140].value ? t.u(8, t.sj, new sk(16)) : t.y.aPL(t.sj, 16) : 3 ===
			e4 && t.u(1)
	}
	rI.e.style.position = "absolute", rI.e.style.textAlign = "center", rI.e.placeholder = L(298), this.show = function() {
		aa.setState(0), a0.a1.setState(12), this.aG6.show(), aPI[4].qp(b9.color.a2k(bi.eG.data[121].value)), this.resize(), document.body.appendChild(rI.e);
		for (var aB = 0; aB < aPI.length; aB++) document.body.appendChild(aPI[aB].button);
		1 !== a0.id || a0.dr < 5 || (aPJ && be.eI > aPJ + 144e5 ? a0.vD.setState(14) : aPJ = be.eI)
	}, this.rm = function() {
		this.aG6.rm(), document.body.removeChild(rI.e);
		for (var aB = 0; aB < aPI.length; aB++) document.body.removeChild(aPI[aB].button)
	}, this.resize = function() {
		this.aG6.resize(), this.aG6.resize(), aON.resize();
		var gap = .5 * bb.gap,
			tg = 10 / 99 * .84 * aON.i,
			aPO = .16 * aON.j,
			a8o = .19 * aON.i,
			eq = aON.eq + a8o,
			tg = aON.es + tg + 3 * gap,
			i = .5 * (aON.i - gap) - a8o,
			a8o = aON.i - 2 * a8o - aPO - gap,
			a8o = (b9.qV.t9(rI.e, eq, tg, a8o, aPO), b9.qV.t9(aPI[4].button, eq + a8o + gap, tg, aPO, aPO), .5 * (aON.es + aON.j - (tg += aPO + gap) - gap));
		b9.qV.t9(aPI[0].button, eq, tg, i, a8o), b9.qV.t9(aPI[1].button, eq + i + gap, tg, i, a8o), b9.qV.t9(aPI[2].button, eq, tg + a8o + gap, i, a8o), b9.qV.t9(aPI[3].button, eq + i + gap, tg + a8o + gap, i, a8o);
		b9.qV.t9(aPI[5].button, eq, tg + a8o * 2 + gap * 2, i * 2 + gap, a8o / 3);
		b9.qV.t9(aPI[6].button, eq, tg + a8o * 2.33 + gap * 3, i * 2 + gap, a8o / 3);
		for (var aB = 0; aB < aPI.length; aB++) aPI[aB].button.style.font = b9.qV.sJ(0, b9.qV.a30(.065 * aON.j)), b9.qV.qf(aPI[aB].button, 5);
		rI.e.style.font = b9.qV.sJ(0, b9.qV.a30(.08 * aON.j)), b9.qV.qf(rI.e, 5)
	}, this.ub = function() {
		if (aa.aFc(), aT.ub(), aO.ub(), bX.ub(), ab.tB()) {
			if (__fx.settings.displayWinCounter) {
				const size = Math.floor(aON.i * 0.03);
				uc.font = b9.qV.sJ(1, size);
				uc.fillStyle = "#ffffff";
				const text = "Win count: " + __fx.wins.count;
				const textLength = uc.measureText(text).width;
				uc.textAlign = "left";
				uc.textBaseline = "middle";
				uc.fillText(text, uc.canvas.width - textLength - size / 2, size);
			};
			uc.imageSmoothingEnabled = !1;
			var f4 = ab.aFf("territorial.io"),
				nG = .84 * aON.i / f4.width;
			uc.setTransform(nG, 0, 0, nG, aON.eq + .08 * aON.i, aON.es), aPH = aPH || b9.a24.a3c(f4, b9.a24.a3i, [0, 0, 0]);
			for (var eq = -1; eq <= 1; eq += 2)
				for (var es = -1; es <= 1; es += 2) uc.drawImage(aPH, eq, es);
			uc.drawImage(f4, 0, 0), uc.imageSmoothingEnabled = !0;
			var yv = ab.aFf("logo"),
				aPQ = .6666 * nG * f4.height / yv.height,
				nH = .5 * h.i,
				nI = aON.es + .5 * nG * f4.height - .5 * aPQ * yv.height;
			uc.setTransform(aPQ, 0, 0, aPQ, nH - .6 * nG * f4.width, nI), uc.drawImage(yv, 0, 0), uc.setTransform(aPQ, 0, 0, aPQ, nH + .6 * nG * f4.width - aPQ * yv.width, nI), uc.drawImage(yv, 0, 0), uc.setTransform(1, 0, 0, 1, 0, 0), uc
				.imageSmoothingEnabled = !0
		}
	}
}

function aMC() {
	var aMT, aPR, aPS, uN;

	function aPT(aB) {
		t.u(8, t.sj, new sk(21, {
			t2: aB,
			t3: 0,
			t4: 10
		}))
	}
	this.show = function() {
		aMT.show(), this.resize()
	}, this.rm = function() {
		aMT.rm()
	}, this.resize = function() {
		aMT.resize(), aPR.resize()
	}, this.a1r = function(f4) {
		2 === f4 && aMT.uT[0].qm()
	}, aPS = [new w(L(299), function() {
		aPT(1)
	}, 0, 0, 1), new w(L(300), function() {
		aPT(2)
	}, 0, 0, 1), new w(L(301), function() {
		aPT(3)
	}, 0, 0, 1), new w(L(302), function() {
		aPT(0)
	}, 0, 0, 1), new w(L(303), function() {
		aPT(9)
	}, 0, 0, 1), new w(L(304), function() {
		aPT(10)
	}, 0, 0, 1), new w(L(305), function() {
		aPT(11)
	}, 0, 0, 1)], uN = [new w("⬅️ " + L(36), function() {
		t.a0z()
	})], aMT = new uM(L(306), uN), aPR = new r3(aPS, aMT.uS)
}

function aCF(title, qI, aPU) {
	var aMT, aOb;
	this.show = function() {
		aMT.show(), this.resize()
	}, this.rm = function() {
		aMT.rm()
	}, this.resize = function() {
		aMT.resize(), aOb.resize()
	}, this.a1r = function(f4) {
		2 === f4 && aMT.uT[0].qm()
	}, aPU = aPU || [new w("⬅️ " + L(36), function() {
		t.a0z()
	}, bA.oJ)], aMT = new uM(title, aPU), aOb = new ry(aMT.uS, qI), b9.qV.textAlign(aMT.uS.style, 1)
}

function aOt(data) {
	var aMT, aPV, f4, sZ;

	function aPW(jN) {
		var ej = data.data.length;
		if (ej) {
			for (var t3, max = min = parseInt(data.data[0][0]), aB = 1; aB < ej; aB++) var aE3 = parseInt(data.data[aB][0]),
				min = Math.min(aE3, min),
				max = Math.max(aE3, max);
			t3 = jN < 0 ? min + jN : max + 1, t.u(8, t.a4o().aM0, new sk(21, {
				t2: data.t2,
				t3: t3,
				t4: t3 + Math.abs(jN)
			}))
		}
	}
	this.show = function() {
			aMT.show(), this.resize()
		}, this.rm = function() {
			aMT.rm()
		}, this.resize = function() {
			aMT.resize(), aPV.resize()
		}, this.a1r = function(f4) {
			2 === f4 && aMT.uT[0].qm()
		}, f4 = data.data.length ? 0 : 1, f4 = [new w("⬅️ " + L(36), function() {
			t.a0z()
		}), new w(L(307), function() {
			aPW(-10)
		}, f4, 0, 1), new w(L(308), function() {
			aPW(10)
		}, f4, 0, 1), new w(L(256), function() {
			t.u(11, 10, new aPX({
				t2: data.t2
			}))
		})], sZ = [L(309), L(310), L(311), L(312), L(313), L(314), L(315), L(316), L(317), L(318), L(304), L(305), L(319)], aMT = new uM(sZ[data.t2], f4),
		function() {
			var aB, em = {
					sT: []
				},
				sT = em.sT,
				aPZ = data.data,
				ej = aPZ.length;
			ej && 0 === aPZ[0][0] && 0 <= (e4 = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5, 6, -1][data.t2]) && (t.y.t5[e4] = aPZ[0][1]);
			var nG = [.1, .001, .01, 1, 100, 1, 1, .1, 100, .01, .01, .01, 1][data.t2],
				a3o = [1, 3, 2, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0][data.t2],
				e4 = [
					[L(320), L(321) + " ↗", L(322)],
					[L(320), L(323), L(324), L(325) + " ↗"],
					[L(320), L(321) + " ↗", L(324)],
					[L(320), L(321) + " ↗", L(324)],
					[L(326), L(327), L(328) + " ↗", L(329) + " ↗", L(118)],
					[L(326), L(327), L(330) + " ↗", L(331) + " ↗", L(332)],
					[L(326), L(327), L(333) + " ↗", L(334) + " ↗", L(335)],
					[L(326), L(327), L(330) + " ↗", L(331) + " ↗", L(336)],
					[L(326), L(327), L(328) + " ↗", L(329) + " ↗", L(118)],
					[L(320), L(321) + " ↗", L(324)],
					[L(320), L(321) + " ↗", L(337)],
					[L(320), L(321) + " ↗", L(324)],
					[L(326), L(327), L(338) + " ↗", L(339) + " ↗", L(340)]
				];
			if (em.sZ = e4[data.t2], em.se = [
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
				][data.t2], 0 === data.t2 || 2 === data.t2 || 3 === data.t2 || 9 === data.t2 || 10 === data.t2 || 11 === data.t2)
				for (aB = 0; aB < ej; aB++) sT.push([{
					fB: aPZ[aB][0] + 1 + ".",
					dp: 0
				}, {
					fB: aPZ[aB][1],
					dp: 1,
					sh: aPZ[aB][4],
					si: aPZ[aB][3]
				}, {
					fB: (nG * aPZ[aB][2]).toFixed(a3o),
					dp: 0
				}]);
			else if (12 === data.t2)
				for (aB = 0; aB < ej; aB++) {
					var aPc = aPZ[aB][3];
					sT.push([{
						fB: "" + aPZ[aB][0],
						dp: 0
					}, {
						fB: "" + aPZ[aB][4],
						dp: 0
					}, {
						fB: aPZ[aB][5],
						dp: 1,
						sh: aPZ[aB][1],
						si: 0
					}, {
						fB: aPZ[aB][6],
						dp: 1,
						sh: aPZ[aB][2],
						si: 0
					}, {
						fB: bn.eA(aPc % 16, aPc >> 4),
						dp: 0
					}])
				} else if (1 === data.t2)
					for (aB = 0; aB < ej; aB++) sT.push([{
						fB: aPZ[aB][0] + 1 + ".",
						dp: 0
					}, {
						fB: aPZ[aB][1],
						dp: 0
					}, {
						fB: (nG * aPZ[aB][2]).toFixed(a3o),
						dp: 0
					}, {
						fB: aPZ[aB][3],
						dp: 1,
						sh: aPZ[aB][5],
						si: aPZ[aB][4]
					}]);
				else if (4 === data.t2 || 5 === data.t2 || 6 === data.t2 || 7 === data.t2 || 8 === data.t2)
				for (aB = 0; aB < ej; aB++) {
					var aPd = aPZ[aB][5];
					4 === data.t2 || 8 === data.t2 ? "100%" === (aPd = (aPd % 64 * 100 / (aPd >> 6)).toFixed(0) + "%") && (4 === data.t2 ? aPd += " (" + L(341) + ")" : aPd += " (" + L(342) + ")") : 5 === data.t2 ? 32768 <= aPd && (aPd = -(aPd -
						32768)) : aPd = (nG * aPd).toFixed(a3o), sT.push([{
						fB: "" + aPZ[aB][0],
						dp: 0
					}, {
						fB: "" + aPZ[aB][6],
						dp: 0
					}, {
						fB: aPZ[aB][7],
						dp: 1,
						sh: aPZ[aB][1],
						si: aPZ[aB][2]
					}, {
						fB: aPZ[aB][8],
						dp: 1,
						sh: aPZ[aB][3],
						si: aPZ[aB][4]
					}, {
						fB: "" + aPd,
						dp: 0
					}])
				}
			aPV = new sS(aMT.uS, em)
		}()
}

function aPX(a3e) {
	var aMT, aMU, qQ;
	this.show = function() {
		aMT.show(), this.resize()
	}, this.rm = function() {
		aMT.rm()
	}, this.resize = function() {
		aMT.resize(), aMU.resize()
	}, this.a1r = function(f4) {
		2 === f4 && aMT.uT[0].qm()
	}, aMT = new uM(L(343), [new w("⬅️ " + L(36), function() {
		t.aMR(10)
	})]), aMU = new qO(aMT.uS, ((qQ = []).push(function() {
		var aMv, aMm = new q8,
			aOL = new rJ(bi.eG.data[132], 1, function() {
				aMv.button.click()
			}),
			aOM = new rJ(bi.eG.data[131], 1, function() {
				aOL.e.focus()
			});
		aMm.qB(L(261)), aMm.qM(aOM), aOM.e.style.marginBottom = "0.8em", aMm.qB(L(262)), aMm.qM(aOL);
		return aMv = new w(L(260), function() {
			t3 = Math.floor(aOM.e.value), t4 = Math.floor(aOL.e.value);
			var t4, t3 = {
				a2L: Math.min(t3, t4),
				aLb: Math.max(t3, t4)
			};
			t.u(8, t.a4p(10).aM0, new sk(21, {
				t2: a3e.t2,
				t3: t3.a2L,
				t4: t3.aLb
			}))
		}, 0, 0, 1), aMm.qM(new rz([aMv.button])), aMm
	}()), qQ.push(function() {
		var aMv, aMm = new q8,
			aOL = new rJ(bi.eG.data[134], 1, function() {
				aMv.button.click()
			}),
			aOM = new rJ(bi.eG.data[133], 0, function() {
				aOL.e.focus()
			});
		return aMm.qB(1 === a3e.t2 ? L(344) : L(345)), aMm.qM(aOM), aOM.e.style.marginBottom = "0.8em", aMm.qB(L(346)), aMm.qM(aOL), aMv = new w(L(260), function() {
			var aOl = aOM.e.value.slice(0, 20),
				aOm = Math.abs(Math.floor(aOL.e.value));
			t.u(8, t.a4p(10).aM0, new sk(22, {
				t2: a3e.t2,
				aOl: aOl,
				aOm: aOm
			}))
		}, 0, 0, 1), aMm.qM(new rz([aMv.button])), aMm
	}()), qQ.push(function() {
		var aMv, aMm = new q8,
			aOL = new rJ(bi.eG.data[152], 1, function() {
				aMv.button.click()
			}),
			aOM = new rJ(bi.eG.data[151], 0, function() {
				aOL.e.focus()
			});
		return aMm.qB(L(347)), aMm.qM(aOM), aOM.e.style.marginBottom = "0.8em", aMm.qB(L(346)), aMm.qM(aOL), aMv = new w(L(260), function() {
			var aOl = aOM.e.value.slice(0, 5),
				aOm = Math.abs(Math.floor(aOL.e.value));
			t.u(8, t.a4p(10).aM0, new sk(28, {
				t2: a3e.t2,
				aOl: aOl,
				aOm: aOm
			}))
		}, 0, 0, 1), aMm.qM(new rz([aMv.button])), aMm
	}()), qQ))
}

function aMP() {
	var aPh, tF, aPk, tE, tH, aPi = [new Array(4), [], new Array(2), new Array(2)],
		aPj = new Array(4),
		aPl = new Array(2),
		aPm = [L(60), L(303), L(348), L(349)];

	function aDo() {
		var a6g = aPh.tS.rI.e.value.trim().slice(0, 127);
		a6g.length < 1 || (aPh.tS.rI.e.value = "", bm.aCI.zs(a6g))
	}

	function aPp(aPr) {
		bm.y.rZ[3] = 1 - bm.y.rZ[3], aPq(3, 1, bm.y.rZ[3]), aPr && az.aDz.aE0(4), bm.y.rZ[3] && bi.rw.rx(158, bm.y.rZ[0])
	}

	function aPn(f2, f3) {
		bm.y.rZ[f2] !== f3 && (0 === f2 && bm.y.rZ[3] && aPp(0), aPq(f2, bm.y.rZ[f2], 0), aPq(f2, f3, 1), bm.y.rZ[f2] = f3, 0 === f2 ? (az.aDz.aE0(2, f3), bm.y.rZ[2] ? (aPh.tT.mR(), aPh.tS.rW(1)) : aPh.tS.rW(0), t.a4o().aDd(), t.a4o().aDc()) : 2 ===
			f2 && (0 === f3 ? (az.aDz.aE0(0), aPh.tS.mR(), aPh.tb()) : (az.aDz.aE0(1), aPh.tT.mR(), aPh.tc())))
	}

	function aPq(f2, f3, color) {
		aPh.tV[f2].r4[f3].qp(color ? bA.o3 : bA.oq)
	}

	function aPu(aCr) {
		return aCr < 7 ? aCr + 2 + " " + L(356) : 7 === aCr || 10 === aCr ? L(303) + " (Full-Sending: " + L(7 === aCr ? 357 : 358) + ")" : 8 === aCr ? "1v1" : L(359)
	}

	function aPv(fB) {
		var a6j = bK.dq(fB, 60),
			fB = fB % 60;
		return (a6j < 10 ? "0" : "") + a6j + ":" + (fB < 10 ? "0" : "") + fB
	}
	this.aEB = function() {
		return aPh.tS
	}, this.aCI = function(sh) {
		aPn(2, 0);
		var qC = aPh.tS.rI.e.value,
			sh = "@" + sh + " ";
		qC.length && !b9.rU.a37(qC, " ") && (sh = " " + sh), aPh.tS.rI.e.value = qC += sh, aPh.tS.rI.e.focus()
	}, this.aDb = function() {
		aPh.tT.mR()
	}, this.aDd = function() {
		var aPt = bm.y.rZ[0],
			aPt = bm.y.rb[aPt];
		bR.a7(aPt.eP, aPt.mapSeed), tF.r4[0].button.textContent = L(280) + ": " + bR.wF.wG[aPt.eP].name, tF.r4[1].button.textContent = L(282, 0, "Mode") + ": " + aPu(aPt.aCr), tF.r4[2].button.textContent = L(353) + ": " + bR.wF.wG[aPt.aEZ].name,
			tF.r4[3].button.textContent = L(354, 0, "Next Mode") + ": " + aPu(aPt.aEa), tF.r4[4].button.textContent = L(355) + ": " + aPv(aPt.aDf), tF.resize()
	}, this.aDc = function() {
		var aPt = bm.y.rZ[0],
			ra = bm.y.rb[aPt];
		aPh.tZ(ra.ta);
		for (var aB = 0; aB < bm.tp.tq.length; aB++) aPi[0][aB].rT.textContent = "" + bm.tp.tq[aB].length;
		var tp = bm.tp.tq[aPt],
			aPw = tp.length,
			aPx = bm.tp.tr[aPt];
		aPi[2][1].rT.textContent = "" + aPw, aPi[3][1].rT.textContent = "" + aPx, tF.r4[4].button.textContent = L(355) + ": " + aPv(ra.aDf);
		for (aB = 0; aB < 4; aB++) {
			var aPy = bm.y.rb[aB];
			aPj[aB] ? 0 === aPy.ta && (aPj[aB].rT.textContent = bR.wF.wG[aPy.eP].name) : aPj[aB] = new rS(bR.wF.wG[aPy.eP].name, tE.r4[aB].button, 1, 1), b9.rU.startsWith(aPm[aB], "🏆 ") ? aPy.aCx || (aPm[aB] = aPm[aB].substring(3), tE.r4[aB]
				.button.textContent = aPm[aB], tE.r4[aB].button.appendChild(aPi[0][aB].rT), tE.r4[aB].button.appendChild(aPj[aB].rT)) : aPy.aCx && (aPm[aB] = "🏆 " + aPm[aB], tE.r4[aB].button.textContent = aPm[aB], tE.r4[aB].button
				.appendChild(aPi[0][aB].rT), tE.r4[aB].button.appendChild(aPj[aB].rT))
		}
		var ra = "",
			aQ0 = "";
		0 === aPt && (ra = bm.ku.aDB(tp, 0, aPw), aQ0 = bm.ku.aDB(tp, 0, aPx)), aPk[0].rT.textContent = ra, aPk[1].rT.textContent = aQ0, aPl[1].rT.textContent = "MP: " + bm.y.aDU[0] + "   SP: " + bm.y.aDU[1] + "   Lobby: " + b9.qd.a2Y(bm.tp.tq)
	}, this.aDh = function() {
		aPh.tS.mR()
	}, this.show = function() {
		aPh.show(), this.resize(), bm.message.show()
	}, this.rm = function() {
		aPh.rm(), bm.uB.rm(), bm.tn.rm(), bm.message.rm()
	}, this.resize = function() {
		aPh.resize(1 - bm.y.rZ[2]), bm.message.resize()
	}, this.a1r = function(f4) {
		2 === f4 ? bm.y.rZ[3] ? aPp(1) : aPh.tV[3].r4[0].qm() : f4 < 2 && aPp(1)
	}, tE = new s2([new w(aPm[0], function() {
		return aPn(0, 0), 2
	}), new w(aPm[1], function() {
		return aPn(0, 1), 2
	}), new w(aPm[2], function() {
		return aPn(0, 2), 2
	}), new w(aPm[3], function() {
		return aPn(0, 3), 2
	})], bA.oq), tF = new s2([new w("", 0, 2), new w("", 0, 2), new w("", 0, 2), new w("", 0, 2), new w("", 0, 2)], bA.or, 1);
	var aPo = new s2([new w(L(350), function() {
		return aPn(2, 0), 2
	}), new w(L(114), function() {
		return aPn(2, 1), 2
	})], bA.oq);
	tH = new s2([new w(L(351), (__fx.customLobby.setLeaveFunction(() => {
			t.x(), bm.u5(), az.y.a19(3240), __fx.customLobby.setActive(false), t.u(5, 5)
		}),
		function() {
			t.x(), bm.u5(), az.y.a19(3240), __fx.customLobby.setActive(false), t.u(5, 5)
		})), new w(L(352), function() {
		return aPp(1), 2
	})], bA.oq), aPh = new tD(tE, tF, aPo, tH, aDo, bm.uB.aEK);
	for (var aB = 0; aB < 4; aB++) aPi[0][aB] = new rS("0", tE.r4[aB].button);
	aPi[2][1] = new rS("0", aPo.r4[1].button), aPi[3][1] = new rS("0", tH.r4[1].button), aPk = [new rS("", aPo.r4[1].button, 1, 1), new rS("", tH.r4[1].button, 1, 1)], aPq(0, bm.y.rZ[0], 1), aPq(2, bm.y.rZ[2], 1), (aPl = [new rS(L(254), aPh.td(), 1,
		0), new rS("", aPh.td(), 1, 1)])[0].rT.style.fontSize = "0.4em", aPl[1].rT.style.fontSize = "0.4em"
}

function aM6() {
	var aMT, aMU, qQ;
	this.show = function() {
		aMT.show(), this.resize()
	}, this.rm = function() {
		aMT.rm()
	}, this.resize = function() {
		aMT.resize(), aMU.resize()
	}, this.a1r = function(f4) {
		2 === f4 && aMT.uT[0].qm()
	}, aMT = new uM(L(360), [new w("⬅️ " + L(36), function() {
		t.u(7, t.a4p(7).aM0)
	}), new w(L(192), function() {
		bi.rw.rx(105, bF.sm.vz(aMU.qS[0].q9[0].e.value, 5)), bi.rw.rx(106, bF.sm.vz(aMU.qS[1].q9[0].e.value, 8)), t.u(8, t.a4p(7).aM0, new sk(18))
	})]), aMU = new qO(aMT.uS, ((qQ = []).push(function() {
		var aMm = new q8;
		return aMm.qB(L(173)), aMm.qM(new rJ({
			value: "",
			e4: -1
		})), aMm
	}()), qQ.push(function() {
		var aMm = new q8,
			aMx = (aMm.qB(L(175)), new rJ({
				value: "",
				e4: -1
			}));
		return aMx.e.type = "password", aMm.qM(aMx), aMm.qM(new rz([new w(L(176), function(e) {
			return e.textContent === L(176) ? (e.textContent = L(177), aMx.e.type = "text") : (e.textContent = L(176), aMx.e.type = "password"), !0
		}).button])), aMm
	}()), qQ))
}

function aMD() {
	var aMT, aPR, aPS, uN;

	function aPT(aB) {
		t.u(8, t.sj, new sk(21, {
			t2: aB,
			t3: 0,
			t4: 10
		}))
	}
	this.show = function() {
		aMT.show(), this.resize()
	}, this.rm = function() {
		aMT.rm()
	}, this.resize = function() {
		aMT.resize(), aPR.resize()
	}, this.a1r = function(f4) {
		2 === f4 && aMT.uT[0].qm()
	}, aPS = [new w(L(314), function() {
		aPT(5)
	}, 0, 0, 1), new w(L(315), function() {
		aPT(6)
	}, 0, 0, 1), new w(L(316), function() {
		aPT(7)
	}, 0, 0, 1), new w(L(319), function() {
		aPT(12)
	}, 0, 0, 1)], uN = [new w("⬅️ " + L(36), function() {
		t.a0z()
	})], aMT = new uM(L(361), uN), aPR = new r3(aPS, aMT.uS)
}

function aLw() {
	this.eG = {}, this.t5 = new Array(7), this.aMB = null, this.aM8 = null, this.sQ = 0, this.aHQ = [0, 0], this.z = function() {
		t.u(5, 5)
	}, this.a4b = function() {
		t.x(), aZ.dZ()
	}, __fx.customLobby.setJoinFunction(() => {
		t.x(), aZ.dZ()
	}), this.aBr = function() {
		t.u(0 === aa.a10() ? 5 : 0)
	}, this.aOK = function() {
		if (1 === bi.eG.data[130].value) t.u(8, t.a4o().aM0, new sk(24, {
			aNq: bi.eG.data[125].value,
			t3: bi.eG.data[128].value,
			t4: bi.eG.data[129].value
		}));
		else {
			for (var g = (g = bi.eG.data[126].value.split(",")).slice(0, 10), aB = 0; aB < g.length; aB++) g[aB] = g[aB].trim().slice(0, 7).toUpperCase();
			1 === g.length && 0 === g[0].length && (g = []), t.u(8, t.a4o().aM0, new sk(23, {
				aNq: bi.eG.data[125].value,
				a0T: g
			}))
		}
	}, this.aPL = function(aM0, target) {
		t.u(4, aM0, new v("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: <a href='" + bJ.aQ2 +
			"' target='_blank'>" + bJ.aQ2 + "</a>", !1, [new w("⬅️ " + L(36), function() {
				t.u(aM0)
			}), new w("✅ Accept", function() {
				bi.rw.rx(140, 1), 0 === target ? t.u(2, aM0) : t.u(8, aM0, new sk(target))
			})]))
	}, this.aQ3 = function() {
		for (var aB = 0; aB < 7; aB++) this.t5[aB] = bF.vq.vu(bG.pc(5));
		this.t5[1] = "[" + this.t5[1] + "]", 5 === t.sj && (t.a4o().aG6.rx(this.t5), t.a4o().resize())
	}
}

function aMG() {
	var aNN, aNO, aQ4, qQ;

	function aNQ() {
		b5.u5(), t.aMS()[19] = null, t.a0z()
	}

	function aQB() {
		aQE(), aQC()
	}

	function aQE() {
		aQ4.qA.lastChild && aQ4.qA.removeChild(aQ4.qA.lastChild)
	}

	function aQC() {
		var aQF = bR.a4h(aD.data);
		aD.data.canvas = bR.aJv(aQF, aD.data.mapSeed).wP, aQD()
	}

	function aQD() {
		var a2d = aD.data.canvas;
		a2d.style.width = "100%", aQ4.qA.appendChild(a2d)
	}
	this.aHA = function(a2d) {
		aD.data.canvas && aQE(), aD.data.canvas = a2d, aQD()
	}, this.show = function() {
		aNN.show(), this.resize()
	}, this.rm = function() {
		aNN.rm()
	}, this.resize = function() {
		aNN.resize(), aNO.resize()
	}, this.a1r = function(f4) {
		2 === f4 && aNN.uT[0].qm()
	}, aNN = new uM(L(280), [new w("⬅️ " + L(36), aNQ)]), 2 === aD.data.mapType && b5.dZ(), aNO = new qO(aNN.uS, (function(qQ) {
		var aMm = new q8;
		aMm.qB(L(248)), aMm.qJ(new uH({
			uL: [L(362), L(363), L(364)],
			value: aD.data.mapType
		}, function(e4) {
			2 === (aD.data.mapType = e4) ? (b5.dZ(), aD.data.canvas = null) : (aD.data.passableWater = aD.data.passableMountains = 1, b5.u5()), t.u(20)
		})), 2 <= aD.data.mapType && (aMm.qM(new s9), aMm.qM(new rt({
			value: aD.data.passableWater
		}, L(365), function(value) {
			aD.data.passableWater = value
		})), aMm.qM(new rt({
			value: aD.data.passableMountains
		}, L(366), function(value) {
			aD.data.passableMountains = value
		})));
		qQ.push(aMm)
	}(qQ = []), function(qQ) {
		if (0 === aD.data.mapType) {
			for (var aMm = new q8, uL = (aMm.qB(L(280)), []), aB = 0; aB < bR.wF.aKr.length; aB++) uL.push(bR.wF.wG[bR.wF.aKr[aB]].name);
			aMm.qJ(new uH({
				uL: uL,
				value: aD.data.mapProceduralIndex
			}, function(e4) {
				aD.data.mapProceduralIndex = e4, aQB()
			})), qQ.push(aMm)
		}
	}(qQ), function(qQ) {
		if (1 === aD.data.mapType) {
			for (var aMm = new q8, uL = (aMm.qB(L(280)), []), aB = 0; aB < bR.wF.aKs.length; aB++) uL.push(bR.wF.wG[bR.wF.aKs[aB]].name);
			aMm.qJ(new uH({
				uL: uL,
				value: aD.data.mapRealisticIndex
			}, function(e4) {
				aD.data.mapRealisticIndex = e4, aQB()
			})), qQ.push(aMm)
		}
	}(qQ), function(qQ) {
		var aMm;
		2 === aD.data.mapType && ((aMm = new q8).qB(L(280)), aMm.qM(new rz([new w(L(367), function() {
			return b5.aH3(), !0
		}).button])), qQ.push(aMm))
	}(qQ), function(qQ) {
		(aQ4 = new q8).qB(L(368)), 2 !== aD.data.mapType ? aQC() : aD.data.canvas && aQD();
		qQ.push(aQ4)
	}(qQ), function(qQ) {
		var aMm, rI, aMv;
		0 === aD.data.mapType && ((aMm = new q8).qB("Seed"), rI = new rJ({
			e4: -1,
			value: aD.data.mapSeed
		}, 1, 0, function(e) {
			e = Math.abs(Math.floor(e.target.value)) % 16384;
			aD.data.mapSeed !== e && (aD.data.mapSeed = e, aQB())
		}), aMv = new w(L(273), function(e) {
			var aJq = Math.floor(16384 * Math.random());
			if (aD.data.mapSeed !== aJq) return rI.e.value = aD.data.mapSeed = aJq, aQB(), !0
		}), aMm.qM(rI), aMm.qM(new rz([aMv.button])), qQ.push(aMm))
	}(qQ), function(qQ) {
		var aMm, rI;
		2 === aD.data.mapType && ((aMm = new q8).qB(L(369)), rI = new rJ({
			e4: -1,
			value: aD.data.mapName
		}, 0, 0, function(e) {
			aD.data.mapName = e.target.value = e.target.value.slice(0, 20)
		}), aMm.qM(rI), qQ.push(aMm))
	}(qQ), qQ))
}

function v(title, qI, aQG, aPU) {
	var aMT, aOb;
	this.show = function() {
		aMT.show(), this.resize()
	}, this.rm = function() {
		aMT.rm()
	}, this.resize = function() {
		aMT.resize(), aOb.resize()
	}, this.a1r = function(f4) {
		2 === f4 && aMT.uT[0].qm()
	}, aPU = aPU || [new w("⬅️ " + L(36), function() {
		t.a0z()
	})], aMT = new uM(title, aPU), aOb = new ry(aMT.uS, qI), aQG && b9.qV.textAlign(aMT.uS.style, 1)
}

function aMJ() {
	var aNN, aNO, aNP, qQ;

	function aNQ() {
		aNS(), 2 === aD.data.playerNamesType && 1 === b9.qd.a2H(aD.data.playerNamesData).length && (aD.data.playerNamesType = 0), 2 !== aD.data.playerNamesType && (aD.data.playerNamesData = null), t.aMS()[19] = null, t.a0z()
	}

	function aNS() {
		2 === aD.data.playerNamesType && b9.qd.a2V(aNP.ut(), aD.data.playerNamesData, 20)
	}
	this.show = function() {
		aNN.show(), this.resize()
	}, this.rm = function() {
		aNN.rm()
	}, this.resize = function() {
		aNN.resize(), aNO.resize()
	}, this.a1r = function(f4) {
		2 === f4 && aNN.uT[0].qm()
	}, aNN = new uM(L(284), [new w("⬅️ " + L(36), aNQ)]), aNO = new qO(aNN.uS, (function(qQ) {
		var aMm = new q8;
		aMm.qB(L(248)), aMm.qJ(new uH({
			uL: [L(285), L(286), L(251)],
			value: aD.data.playerNamesType
		}, function(e4) {
			aNS(), aD.data.playerNamesType = e4, t.u(23)
		})), aMm.qM(new s9), aMm.qM(new rt({
			value: aD.data.selectableName
		}, L(370), function(value) {
			aD.data.selectableName = value
		})), qQ.push(aMm)
	}(qQ = []), function(qQ) {
		var aMm;
		2 === aD.data.playerNamesType && ((aMm = new q8).qB("Data"), aNP = new uk(0, 1, 0, 1), aD.data.playerNamesData && aD.data.playerNamesData.length === aD.eg || (aD.data.playerNamesData = new Array(aD.eg), aD.data.playerNamesData
			.fill("")), aNP.ur(b9.rU.a41(aD.data.playerNamesData, 1, '"')), aMm.qM(aNP), qQ.push(aMm))
	}(qQ), qQ))
}

function aM4() {
	var aNN, up;

	function aQH() {
		t.x();
		var qC = b8.aQL(up.ut());
		(aD.zo && 0 < qC.length && qC === b8.pp.a4X || b8.aHa.wA(qC)) && b8.aQM()
	}
	this.show = function(aQI) {
		this.aQJ(aQI), aNN.show(), this.resize()
	}, this.aQJ = function(aQI) {
		0 === aD.zo ? aQI ? up.ur(aQI) : b8.pp.a4X.length && up.ur(b8.pp.a4X) : (aD.gs || (b8.pp.a4X = b8.a4Y.zG()), up.ur(b8.aQK(b8.pp.a4X)))
	}, this.rm = function() {
		aNN.rm()
	}, this.resize = function() {
		aNN.resize(), up.resize()
	}, this.a1r = function(f4) {
		2 === f4 ? aNN.uT[0].qm() : aQH()
	}, aNN = new uM(L(371), [new w("⬅️ " + L(36), function() {
		t.aMR(1)
	}), new w(L(372), function() {
		up.uu()
	}), new w(L(373), function() {
		up.uv()
	}), new w(L(374), function() {
		up.clear()
	}), new w(L(375), function() {
		aQH()
	})]), up = new uk(L(376)), aNN.uS.appendChild(up.e)
}

function aM3() {
	var aMT, aMU, qQ, aBn, aMm;

	function aQN() {
		var eI;
		aBn !== bi.eG.data[12].value ? (b6.dZ(), b6.aBm(), eI = be.eI, t.u(4, 1, new v(L(379), L(380), !1, [new w("⬅️ " + L(36), function() {
			t.u(1)
		}), new w("🔄 Reload", function() {
			be.eI < eI + 1500 || a0.a1.a2()
		}, bA.o1)]))) : t.u(1)
	}
	this.show = function() {
			aBn = bi.eG.data[12].value, aMT.show(), this.resize()
		}, this.rm = function() {
			aMT.rm()
		}, this.resize = function() {
			aMT.resize(), aMU.resize()
		}, this.a1r = function(f4) {
			2 === f4 && aMT.uT[0].qm()
		}, aMT = new uM(L(377), [new w("⬅️ " + L(36), aQN), new w(L(378), function() {
			t.x(), bi.rw.vX(), t.u(2)
		})]), qQ = [], (aMm = new q8).qB(L(381)), aMm.qD(L(382)), qQ.push(aMm),
		function(qQ) {
			var aMm = new q8,
				g = (aMm.qB(L(403)), b6.data.aBv());
			aMm.qJ(new uH({
				uL: g,
				value: b6.data.aBz(g)
			}, function(e4) {
				return bi.rw.rx(12, g[e4].split(":")[0]), !0
			})), qQ.push(aMm)
		}(qQ),
		function(qQ) {
			var aMm = new q8,
				aQQ = (aMm.qB(L(401)), []);
			aMm.qM(new rz([new w(L(402), function(e) {
				bW.aQR();
				for (var aB = 0; aB < aQQ.length; aB++) aQQ[aB].e.value = bW.aBD[aB];
				return b9.qV.a36(e), !0
			}).button]));
			for (var aB = 0; aB < bW.aQS.length; aB++) {
				aMm.qD(bW.aQS[aB]);
				for (var f2 = 0; f2 < 2; f2++) {
					var e4 = 2 * aB + f2,
						rI = new rJ({
							value: bW.aBD[e4],
							e4: -1
						});
					rI.e.aQT = e4, aQQ.push(rI), rI.e.addEventListener("keydown", function(e) {
						e.preventDefault();
						var code = e.code;
						e.target.value = code, bW.aQU(e.target.aQT, code)
					}), f2 && (rI.e.style.marginLeft = "4%"), rI.e.style.width = "48%", aMm.qM(rI)
				}
			}
			qQ.push(aMm)
		}(qQ), (aMm = new q8).qB(L(23)), aMm.qJ(new uH({
			uL: ["1", "2"],
			value: aZ.aFJ - 1
		}, function(aB) {
			aZ.aFJ = aB + 1
		})), qQ.push(aMm), (aMm = new q8).qB(L(383)), bi.eG.data[1].uL = [L(384), L(385), L(386), L(387)], aMm.qJ(new uH(bi.eG.data[1])), qQ.push(aMm), (aMm = new q8).qB(L(388)), bi.eG.data[9].uL = [L(385), L(389), L(390)], aMm.qJ(new uH(bi.eG.data[
			9])), qQ.push(aMm), (aMm = new q8).qB(L(391)), bi.eG.data[11].uL = [L(392), L(9), L(393)], aMm.qJ(new uH(bi.eG.data[11])), qQ.push(aMm), (aMm = new q8).qB(L(394)), aMm.qM(new rt(bi.eG.data[2])), qQ.push(aMm), (aMm = new q8).qB(L(395)),
		aMm.qM(new rt(bi.eG.data[7])), qQ.push(aMm), (aMm = new q8).qB(L(396)), aMm.qM(new rt(bi.eG.data[8])), qQ.push(aMm), (aMm = new q8).qB(L(397)), aMm.qM(new rJ(bi.eG.data[5])), qQ.push(aMm), (aMm = new q8).qB(L(398)), aMm.qM(new rt(bi.eG.data[
			13], L(399))), aMm.qM(new rt(bi.eG.data[14], L(400))), qQ.push(aMm), aMU = new qO(aMT.uS, qQ)
}

function aMK() {
	var aNN, aNO, aNP, qQ;

	function aNQ() {
		aNS(), 2 !== aD.data.spawningType || b9.qd.a2H(aD.data.spawningData) || (aD.data.spawningType = 0), 2 !== aD.data.spawningType && (aD.data.spawningData = null), t.aMS()[19] = null, t.a0z()
	}

	function aNS() {
		2 === aD.data.spawningType && b9.qd.a2T(aNP.ut(), aD.data.spawningData, bR.aHC - 1)
	}
	this.show = function() {
		aNN.show(), this.resize()
	}, this.rm = function() {
		aNN.rm()
	}, this.resize = function() {
		aNN.resize(), aNO.resize()
	}, this.a1r = function(f4) {
		2 === f4 && aNN.uT[0].qm()
	}, aNN = new uM(L(404), [new w("⬅️ " + L(36), aNQ)]), aNO = new qO(aNN.uS, (function(qQ) {
		var aMm = new q8,
			uL = (aMm.qB(L(248)), [L(273), L(283), L(251)]),
			value = aD.data.spawningType;
		0 === aD.data.gameMode && (uL.splice(1, 1), 0 < value) && (value = 1);
		aMm.qJ(new uH({
			uL: uL,
			value: value
		}, function(e4) {
			aNS(), aD.data.spawningType = e4, 0 === aD.data.gameMode && 1 === e4 && (aD.data.spawningType = 2), 2 !== aD.data.spawningType || aD.data.spawningData || (aD.data.spawningData = new Uint16Array(2 * aD.eg)), t.u(24)
		})), aMm.qM(new s9), aMm.qM(new rt({
			value: aD.data.selectableSpawn
		}, L(405), function(value) {
			aD.data.selectableSpawn = value
		})), qQ.push(aMm)
	}(qQ = []), function(qQ) {
		var aMm = new q8;
		aMm.qB("Seed"), aMm.qM(new rJ({
			e4: -1,
			value: aD.data.spawningSeed
		}, 1, 0, function(e) {
			var value = Math.abs(Math.floor(e.target.value)) % 16384;
			e.target.value = aD.data.spawningSeed = value
		})), qQ.push(aMm)
	}(qQ), function(qQ) {
		var aMm;
		2 === aD.data.spawningType && ((aMm = new q8).qB("Data"), (aNP = new uk(0, 1, 0, 1)).ur(b9.rU.a41(aD.data.spawningData, 2)), aMm.qM(aNP), qQ.push(aMm))
	}(qQ), qQ))
}

function aM2() {
	var aMT, aPR, aPS, uN;

	function aQV(id) {
		0 !== a0.id || bi.eG.data[140].value ? 0 === id ? t.u(8, 1, new sk(16)) : t.u(2) : t.y.aPL(t.sj, 0 === id ? 16 : 0)
	}
	this.show = function() {
		a0.a1.setState(12), aMT.show(), this.resize(), this.j0()
	}, this.rm = function() {
		aMT.rm()
	}, this.resize = function() {
		aMT.resize(), aPR.resize()
	}, this.j0 = function() {
		8 === aa.a10() && (2 <= bc.aQa ? aPS[2].qn === bA.nq && aPS[2].qp(0) : aPS[2].qn !== bA.nq && aPS[2].qp(bA.nq), !aD.gs && aM.q6(aD.eT) ? aPS[1].qn === bA.nq && aPS[1].qp(0) : aPS[1].qn !== bA.nq && aPS[1].qp(bA.nq), !aD.gs && av.hZ(aD
			.eT) ? aPS[0].qn === bA.nq && aPS[0].qp(0) : aPS[0].qn !== bA.nq && aPS[0].qp(bA.nq))
	}, this.a1r = function(f4) {
		2 === f4 && aMT.uT[0].qm()
	}, aPS = [new w(L(406), function() {
		aQV(0)
	}), new w(L(306), function() {
		t.u(16)
	}), new w(L(361), function() {
		t.u(17)
	}), new w(L(407), function() {
		t.y.aOK()
	}, 0, 0, 1), new w(L(371), function() {
		t.u(3, 1)
	}), new w(L(408), function() {
		t.u(18)
	}), new w(L(377), function() {
		aQV(1)
	}), new w(L(409), function() {
		var sZ = ["Patreon", L(418), L(419), "YouTube Tutorial", "Discord", L(420), L(299), L(421), L(302), L(422), "Terms", "Privacy"],
			a32 = [bJ.aNL, bJ.aCC, bJ.a0t, "https://www.youtube.com/watch?v=6QBmA9N1668", bJ.aCD, bJ.aQb, bJ.aQc, bJ.a0a, bJ.aQd, bJ.aQe, bJ.aQf, bJ.aQ2];
		1 === a0.id ? (sZ.splice(2, 1), sZ.splice(0, 1), a32.splice(2, 1), a32.splice(0, 1)) : 2 === a0.id && (sZ.splice(1, 1), sZ.splice(0, 1), a32.splice(1, 1), a32.splice(0, 1)), t.u(4, 1, new v(L(409), b9.qV.a31(sZ, a32), !1, [new w(
			"⬅️ " + L(36),
			function() {
				t.u(1)
			})]))
	}), new w(L(410), function() {
		t.u(4, 1, new v(L(410), l.dr + "<br><a href='" + bJ.aQb + "' target='_blank'>" + bJ.aQb + "</a>" +
			"<br><br><b>" + "FX Client v" + __fx.version + "<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a>" +
			"<br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></b>", !0, [new w("⬅️ " + L(36), function() {
				t.u(1)
			})]))
	}), new w(L(411), function() {
		t.u(4, 1, new v(L(411), L(423) + "<br>" + L(424), !1, [new w("⬅️ " + L(36), function() {
			t.u(1)
		}), new w(L(425), function() {
			a0.a1.a0n(), t.u(1)
		})]))
	}), new w(L(412), function() {
		a0.a1.a0o(), t.u(4, 1, new v(L(426), L(427) + " <a href='" + bJ.aQ2 + "' target='_blank'>" + bJ.aQ2 + "</a>", !1, [new w("⬅️ " + L(36), function() {
			t.u(1)
		})]))
	})], uN = [new w("⬅️ " + L(36), function() {
		t.y.aBr()
	})], 8 === aa.a10() && (aPS.unshift(new w(L(294), function() {
		t.u(30)
	})), aPS.unshift(new w(L(415), function() {
		2 <= bc.aQa && (t.x(), bd.a1u(), be.dh = !0)
	}, 0, 1)), aPS.unshift(new w(L(416), function() {
		!aD.gs && aM.q6(aD.eT) && (b7.h9.pJ(), t.x(), aM.gt) && aM.a1u()
	}, 0, 1)), aPS.unshift(new w(L(417), function() {
		!aD.gs && av.hZ(aD.eT) && (bU.a5B(2), b7.h9.hV(), t.x(), aM.gt) && aM.a1u()
	}, 0, 1))), 1 === a0.id && 5 <= a0.dr && aPS.push(new w(L(413), function() {
		a0.a1.a0p()
	})), aMT = new uM(L(414), uN), aPR = new r3(aPS, aMT.uS)
}

function aMO() {
	var aNN, aNO, aNP, qQ;

	function aNQ() {
		aNS(), 2 !== aD.data.sResourcesType && (aD.data.sResourcesData = null), t.aMS()[19] = null, t.a0z()
	}

	function aNS() {
		2 === aD.data.sResourcesType && b9.qd.a2T(aNP.ut(), aD.data.sResourcesData, 2047)
	}
	this.show = function() {
		aNN.show(), this.resize()
	}, this.rm = function() {
		aNN.rm()
	}, this.resize = function() {
		aNN.resize(), aNO.resize()
	}, this.a1r = function(f4) {
		2 === f4 && aNN.uT[0].qm()
	}, aNN = new uM(L(289), [new w("⬅️ " + L(36), aNQ)]), aNO = new qO(aNN.uS, (function(qQ) {
		var aMm = new q8;
		aMm.qB(L(248)), aMm.qJ(new uH({
			uL: [L(249), L(250), L(251)],
			value: aD.data.sResourcesType
		}, function(e4) {
			aNS(), 2 !== e4 || aD.data.sResourcesData || (aD.data.sResourcesData = new Uint16Array(aD.eg)), aD.data.sResourcesType = e4, t.u(28)
		})), qQ.push(aMm)
	}(qQ = []), function(qQ) {
		var aMm;
		1 === aD.data.sResourcesType && ((aMm = new q8).qB("Value"), aMm.qM(new rJ({
			e4: -1,
			value: aD.data.sResourcesValue
		}, 1, 0, function(e) {
			var value = bK.hs(Math.floor(e.target.value), 0, 2047);
			e.target.value = aD.data.sResourcesValue = value
		})), qQ.push(aMm))
	}(qQ), function(qQ) {
		var aMm;
		2 === aD.data.sResourcesType && ((aMm = new q8).qB("Data"), (aNP = new uk(0, 1, 0, 1)).ur(b9.rU.a41(aD.data.sResourcesData, 2)), aMm.qM(aNP), qQ.push(aMm))
	}(qQ), qQ))
}

function aMM() {
	var aNN, aNO, aNP, qQ;

	function aNQ() {
		aNS(), 2 !== aD.data.tIncomeType && (aD.data.tIncomeData = null), t.aMS()[19] = null, t.a0z()
	}

	function aNS() {
		2 === aD.data.tIncomeType && b9.qd.a2T(aNP.ut(), aD.data.tIncomeData, 255)
	}
	this.show = function() {
		aNN.show(), this.resize()
	}, this.rm = function() {
		aNN.rm()
	}, this.resize = function() {
		aNN.resize(), aNO.resize()
	}, this.a1r = function(f4) {
		2 === f4 && aNN.uT[0].qm()
	}, aNN = new uM(L(287), [new w("⬅️ " + L(36), aNQ)]), aNO = new qO(aNN.uS, (function(qQ) {
		var aMm = new q8;
		aMm.qB(L(248)), aMm.qJ(new uH({
			uL: [L(249), L(250), L(251)],
			value: aD.data.tIncomeType
		}, function(e4) {
			aNS(), 2 !== e4 || aD.data.tIncomeData || (aD.data.tIncomeData = new Uint8Array(aD.eg), aD.data.tIncomeData.fill(32)), aD.data.tIncomeType = e4, t.u(26)
		})), qQ.push(aMm)
	}(qQ = []), function(qQ) {
		var aMm;
		1 === aD.data.tIncomeType && ((aMm = new q8).qB("Value"), aMm.qM(new rJ({
			e4: -1,
			value: aD.data.tIncomeValue
		}, 1, 0, function(e) {
			var value = bK.hs(Math.floor(e.target.value), 0, 255);
			e.target.value = aD.data.tIncomeValue = value
		})), qQ.push(aMm))
	}(qQ), function(qQ) {
		var aMm;
		2 === aD.data.tIncomeType && ((aMm = new q8).qB("Data"), (aNP = new uk(0, 1, 0, 1)).ur(b9.rU.a41(aD.data.tIncomeData, 4)), aMm.qM(aNP), qQ.push(aMm))
	}(qQ), qQ))
}

function aME() {
	var aMT, aMU, qQ;
	this.show = function() {
		aMT.show(), this.resize()
	}, this.rm = function() {
		aMT.rm()
	}, this.resize = function() {
		aMT.resize(), aMU.resize()
	}, this.a1r = function(f4) {
		2 === f4 && aMT.uT[0].qm()
	}, aMT = new uM(L(408), [new w("⬅️ " + L(36), function() {
		t.a0z()
	})]), aMU = new qO(aMT.uS, ((qQ = []).push(function() {
		function aMs() {
			aQk.button.textContent = L(170), aQi.e.readOnly = !1, aQj.e.readOnly = !1, aMq.qp(1), aMq.button.style.color = bA.ne
		}
		var aMm = new q8,
			aQh = (aMm.qB(L(428)), new rJ({
				value: bi.eG.data[105].value,
				e4: -1
			})),
			aQi = (aQh.e.readOnly = !0, aMm.qM(aQh), aMm.qB(L(331), "0.8em"), new rJ(bi.eG.data[148])),
			aQi = new rJ(bi.eG.data[148], 0, void 0, function(e) {
				aMp(bi.eG.data[149].value, e.target.value)
			}),
			aQj = (aMm.qM(aQi), aMm.qB(L(335), "0.8em"), new rJ(bi.eG.data[149], 1, void 0, function(e) {
				aMp(e.target.value, bi.eG.data[148].value)
			})),
			aQk = (aMm.qM(aQj), new w(L(170), function(e) {
				return e.textContent === L(170) ? (e.textContent = L(171), aQi.e.readOnly = !0, aQj.e.readOnly = !0, aMq.qp(0), aMq.button.style.color = bA.ob, bi.rw.rx(149, aQj.e.value), aMp(bi.eG.data[149].value, bi.eG.data[
					148].value)) : aMs(), !0
			})),
			aMq = (aMm.qM(new rz([aQk.button])), new w(L(14), function(e) {
				return aQi.e.readOnly && az.y.aMr(0) && (b9.qV.a36(e), aMs(), az.aMt.aMu({
					sl: 0,
					sh: bi.eG.data[148].value,
					value: parseInt(bi.eG.data[149].value, 10)
				})), !0
			}, 1)),
			qE = aMm.qD(),
			aMp = (aMm.qD(L(429)).style.fontWeight = "bold", function(fB, qC) {
				fB = b9.g5.a3b(fB, 2, 1e6);
				var aMw = Math.max(1, 1 + Math.floor(.01 * (fB - 100)));
				qE.textContent = L(172, [fB, bi.eG.data[105].value, aMw, qC, fB - aMw])
			});
		return aMm.qM(new rz([aMq.button])), aMp(bi.eG.data[149].value, bi.eG.data[148].value), aMm
	}()), qQ))
}

function bu() {
	"function" != typeof Math.log2 && (Math.log2 = function(eq) {
		return Math.log(eq) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(eq) {
		return Math.log(eq) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(eq) {
		return 0 < eq ? 1 : eq < 0 ? -1 : 0
	})
}

function cf() {
	var a94, aQm, aQn, aQo, aQl = !1;

	function aQp() {
		aQl = !0, a94 = -1, aQm = new Array(4);
		for (var aB = 3; 0 <= aB; aB--) aQm[aB] = !1;
		var xF = Math.floor(1 + .02 * h.min);
		aQn = new Array(4), (aQo = new Array(4))[1] = aQo[3] = aQn[0] = aQn[2] = 0, aQo[0] = aQn[3] = -xF, aQn[1] = aQo[2] = xF
	}

	function aQq() {
		if (-1 !== a94)
			if (0 !== aD.zo && aH.nM()) {
				for (var aQr = !1, aB = 3; 0 <= aB; aB--) aQm[aB] && (aQr = !0, iL += aQn[aB], iM += aQo[aB], af.a1J(aQn[aB], aQo[aB]), aS.a8k());
				aQr ? be.dh = !0 : aq.nC()
			} else aq.nC()
	}
	this.a1p = function(e4) {
		0 !== aD.zo && aH.nM() && (aQl || aQp(), aQm[e4] = !0, -1 === a94) && (a94 = setInterval(aQq, 20), aQq())
	}, this.a1s = function(e4) {
		if (0 !== aD.zo && (aQl || aQp(), aQm[e4] = !1, -1 !== a94)) {
			for (var aQr = !1, aB = 3; 0 <= aB; aB--) aQr = aQr || aQm[aB];
			aQr || this.nC()
		}
	}, this.nC = function() {
		if (aQl && -1 !== a94) {
			for (var aB = 3; 0 <= aB; aB--) aQm[aB] = !1;
			clearInterval(a94), a94 = -1
		}
	}
}

function cg() {
	this.y = new aQs, this.mM = new aQt, this.oz = new aQu, this.aDz = new aQv, this.aBo = new aQw, this.aMt = new aQx, this.pb = new aQy, this.aOi = new aQz, this.a6L = new aR0, this.aR1 = new aR2, this.aR3 = new aR4, this.aR5 = new aR6, this.aR7 =
		new aR8, this.dZ = function() {
			this.y.dZ()
		}
}

function aQs() {
	var aR9, aRB;
	this.aFM = 5, this.aRA = null;

	function aRI(aB) {
		return aRB[aB].aQl && aR9[aB].aRI()
	}

	function aRK(a0v) {
		aRB[a0v].eI = be.eI, aRB[a0v].aRD = !1
	}
	this.a15 = 0, this.a0y = 0, this.dZ = function() {
		this.aRA = new Array(this.aFM);
		this.aRA[0] = "territorial.io";
		var aJq = ax.aKC(0);
		ax.a4N(0);
		for (var aB = 1; aB < this.aFM; aB++) this.aRA[aB] = aK.zM() + ".territorial.io";
		for (ax.a4N(aJq), aR9 = new Array(this.aFM), aRB = new Array(this.aFM), aB = this.aFM - 1; 0 <= aB; aB--) aRB[aB] = {
			aQl: !1,
			eI: 0,
			aRD: !1
		};
		this.aFN(0, 0)
	}, this.aRE = function(aB) {
		return aR9[aB]
	}, this.j0 = function() {
		for (var aB = this.aFM - 1; 0 <= aB; aB--) this.aMr(aB) && be.eI > aRB[aB].eI + 15e3 && az.oz.aRF(aB, aRB[aB].aRD);
		!this.aMr(0) && be.eI > aRB[0].eI + 8e3 && (aRB[0].eI = be.eI, this.aFN(0, 0))
	}, this.aOe = function(id) {
		return this.aFN(0, id) && this.aRG(0)
	}, this.aFN = function(a0v, aM0) {
		if (aRB[a0v].aQl) {
			if (aR9[a0v].aRI()) return aR9[a0v].aRJ(aM0), aR9[a0v].aMr();
			aR9[a0v].rm()
		}
		return this.aRH(a0v, aM0), !1
	}, this.aRH = function(a0v, aM0) {
		aRB[a0v].aQl = !0, aRK(a0v), aR9[a0v] = new aRL, aR9[a0v].dZ(a0v, aM0)
	}, this.aRJ = function(a0v, aM0) {
		aRI(a0v) && aR9[a0v].aRJ(aM0)
	}, this.aRM = function(a0v, aM0) {
		az.aBo.aRN(a0v)
	}, this.aRG = function(aB) {
		return this.aMr(aB) && aR9[aB].aRG()
	}, this.aRO = function(aB) {
		aR9[aB].aRO()
	}, this.aMr = function(aB) {
		return aRB[aB].aQl && aR9[aB].aMr()
	}, this.send = function(a0v, aC) {
		aRK(a0v), aR9[a0v].send(aC)
	}, __fx.customLobby.setSendFunction(this.send), this.a1a = function(a0v) {
		8 === aa.a10() && (aRB[a0v].aRD = !0, az.mM.aRP = !0)
	}, this.close = function(a0v, aRQ) {
		aRI(a0v) && aR9[a0v].close(aRQ)
	}, this.aRR = function(a0v, aRQ) {
		o.a18(aRQ), aRI(a0v) && aR9[a0v].close(aRQ)
	}, this.a19 = function(aRQ) {
		for (var aB = this.aFM - 1; 0 <= aB; aB--) this.close(aB, aRQ)
	}, this.aRS = function(a0v, aRQ) {
		for (var aB = this.aFM - 1; 0 <= aB; aB--) aB !== a0v && this.close(aB, aRQ)
	}, this.a4Z = function() {
		this.close(this.a15, 3246)
	}, this.aRT = function(a0v, e) {
		aR9[a0v].rm(), o.a0u(a0v, e.code)
	}
}

function aQt() {
	this.aRP = !1, this.j0 = function() {
		be.k4() % 250 != 249 || aD.gs || (az.aBo.aRU(+(this.aRP && ag.me[aD.eT]), al.k8 + bM.y.lv), this.aRP = !1)
	}
}

function aR0() {
	function aRv(aRw) {
		var em = aD.data,
			aRw = (em.selectedPlayer = bG.pc(aRw), em.spawningSeed = bG.pc(14), bG.pc(4)),
			aRw = (aRw < 7 ? (em.gameMode = 1, em.numberTeams = aRw + 2) : 9 === aRw ? (em.gameMode = em.isZombieMode = 1, em.numberTeams = 2) : (em.gameMode = 0, em.battleRoyaleMode = 7 === aRw ? 0 : 10 === aRw ? 1 : 2), em.isContest = bG.pc(1), bG
				.pc(6));
		return em.mapType = bR.aCy(aRw) ? 0 : 1, bR.aCz(em, aRw), em.mapSeed = bG.pc(14), aRw
	}
	this.aRW = function(a0v, aC) {
		bG.dZ(aC), 0 === bG.size ? az.y.aRR(a0v, 3205) : __fx.customLobby.isCustomMessage(aC) || ((0 === bG.pc(1) ? function(a0v) {
			var aRa = bG.pc(6);
			0 === aRa ? function(a0v) {
					if (0 === a0v && 8 !== aa.a10()) {
						t.y.aQ3();
						for (var aRn = bG.pc(12), aRo = bG.pc(6), g = new Array(aRn), aB = 0; aB < aRn; aB++) g[aB] = bG.pc(aRo);
						aT.a9A(g)
					}
				}(a0v) : 2 === aRa ? az.aR1.aRc(a0v) : 3 === aRa || 4 === aRa ? aw.dZ() : 9 === aRa ? az.aR3.aRd(a0v) : 10 === aRa ? az.aR5.aRe() : 11 === aRa ? az.aR3.aRf(a0v) : 12 === aRa ? az.aR5.aRg() : 13 === aRa ? az.aR7.aRh() :
				14 === aRa ? az.aR7.aRi() : 15 === aRa ? az.aR3.aRj() : 16 === aRa ? az.aR1.aRk(a0v) : 17 === aRa ? az.aR1.aRl(a0v) : 19 === aRa && az.aR1.aRm(a0v)
		} : function(a0v) {
			if (8 !== aa.a10() && !aw.aFr()) return;
			if (a0v !== az.y.a15) az.y.aRR(a0v, 3244);
			else if (0 === bG.pc(1)) be.zx.aRx(bG.aC);
			else {
				var aB, a0v = bG.pc(2);
				if (0 === a0v) {
					var pE, oz = bG.pc(9);
					0 !== ag.me[oz] && 0 !== ag.me[aD.eT] && (pE = bG.pc(10), aN.pD(oz, aD.eT, pE), af.q4(oz, 1, pE))
				} else if (1 === a0v) ! function() {
					var oz = bG.pc(9);
					0 !== ag.me[oz] && 0 !== ag.me[aD.eT] && b4.aJa(0, [oz], !0) && aN.pU(oz, 1)
				}();
				else if (2 === a0v) ! function() {
					var oz = bG.pc(9),
						target = bG.pc(9);
					0 !== ag.me[oz] && 0 !== ag.me[target] && 0 !== ag.me[aD.eT] && b4.aJa(1, [oz], !0) && (af.q4(oz, 3, 96), af.q4(target, 4, 96), aN.a6S(oz, target))
				}();
				else if (l.a9 && !l.aA) {
					var ej = 540;
					for (bC.a7(17287), bC.a8(1, 0), bC.a8(6, 10), ej = Math.min(b7.ow.pe.length, 540), aB = 0; aB < ej; aB++) bC.aS3(32, b7.ow.pe[aB]);
					az.y.send(az.y.a15, bC.aC)
				}
			}
		})(a0v), be.aRZ())
	}, this.aRp = function(aC) {
		if (bG.dZ(aC), bG.e4 = 1, 3 === bG.pc(6)) {
			bG.e4 += 20;
			var em = aD.data = new a4H,
				aC = aRv(9),
				aD0 = em.humanCount = bG.pc(9) + 1;
			em.selectableSpawn = 1 === em.gameMode || aD0 < 100, em.colorsData = new Uint32Array(aD0), em.playerNamesData = new Array(aD0);
			for (var aB = 0; aB < aD0; aB++) bG.e4++, em.colorsData[aB] = bG.pc(18), em.playerNamesData[aB] = bF.vq.vu(bG.pc(5));
			aa.aFY(), bR.a7(aC, em.mapSeed), aD.a4L()
		} else ! function() {
			bG.e4 += 20;
			var em = aD.data = new a4H,
				aRu = aRv(1);
			em.humanCount = 2;
			em.selectableSpawn = 1, em.elo = new Uint16Array(2), em.colorsData = new Uint32Array(2), em.playerNamesData = new Array(2);
			for (var aB = 0; aB < 2; aB++) bG.e4++, em.colorsData[aB] = bG.pc(18), em.elo[aB] = bG.pc(14), em.playerNamesData[aB] = bF.vq.vu(bG.pc(5));
			aa.aFY(), bR.a7(aRu, em.mapSeed), aD.a4L()
		}()
	}, this.aRs = function() {
		bG.e4 = 1;
		var aRa = bG.pc(6),
			aRt = bG.pc(10);
		return az.y.a0y === aRt ? (az.y.a15 = aRt, !1) : (az.y.close(az.y.a0y, 3247), az.y.a15 = aRt, aw.aCv = bG.pc(10), aw.aFg = bG.pc(3 === aRa ? 9 : 1), az.y.aFN(aRt, 5) && az.oz.aFn(), !0)
	}
}

function aR6() {
	this.aRe = function() {
		bi.y.vO(), bi.rw.rx(105, bE.sm.sn(bE.sm.so(5))), bi.rw.rx(106, bE.sm.sn(bE.sm.so(8))), bi.rw.rx(109, bG.pc(30)), bi.rw.rx(108, bi.eG.data[109].value), bi.rw.rx(111, bi.eG.data[109].value + 1), bi.rw.rx(107, 0), bi.rw.rx(110, "")
	}, this.aRg = function() {
		var data;
		bG.size < bC.aS4(29) ? az.y.aRR(0, 3254) : ((data = {
			si: bG.pc(30),
			vb: bG.pc(16),
			vc: bG.pc(30),
			vd: bG.pc(30),
			ve: bG.pc(30),
			vf: bG.aS5(32),
			username: bF.vs.wA(5),
			vg: bF.vs.wA(3),
			vh: bF.vs.wA(3),
			vi: bG.aS5(32),
			vj: bG.aS5(32),
			vk: bG.pc(30),
			vl: bG.aS5(32),
			vm: bG.aS5(32),
			vn: bG.aS5(32),
			vo: bG.aS5(32),
			aN1: bG.aS5(32),
			aN2: bG.aS5(30),
			aND: bG.aS5(32),
			aNE: bF.vs.wA(3),
			aN6: bG.aS5(2),
			aN7: bG.aS5(10),
			aN4: bF.vs.wA(8),
			aN8: bG.aS5(5),
			aMo: bG.pc(30),
			aN0: bG.pc(30),
			a0F: bG.aS5(32),
			aNF: bG.pc(1),
			aNG: bG.pc(1)
		}).aNF && (data.aNH = bG.aS5(32), data.aNI = bG.pc(30), data.aNJ = bG.pc(30), data.aNK = bG.pc(1)), 8 === t.sj && (25 === t.a4o().aOd ? (data.aMV = !0, t.y.aMB = data, t.a4o().aOs(25, !1)) : (data.aMV = !1, bi.rw.rx(160, +(data
			.aNF && data.aNK)), data.sh = bi.eG.data[105].value, t.y.aM8 = data, bi.rw.va(data), t.a4o().aOs(16, !0))))
	}
}

function aR8() {
	this.aRh = function() {
		var aB;
		if (bG.size < bC.aS4(23)) az.y.aRR(0, 3259);
		else {
			var t2 = bG.pc(6),
				ej = bG.pc(10),
				data = [];
			if (9 === t2 || 10 === t2 || 11 === t2) {
				for (aB = 0; aB < ej; aB++) data.push([bG.pc(30), bF.vs.wA(5), bG.aS5(32), 0, bG.pc(30)]);
				8 === t.sj && t.a4o().aOs(21, !0, {
					t2: t2,
					data: data
				})
			} else if (12 === t2) {
				for (aB = 0; aB < ej; aB++) data.push([bG.pc(20), bG.pc(30), bG.pc(30), bG.aS5(32), bG.pc(30), bF.vs.wA(5), bF.vs.wA(5)]);
				8 === t.sj && t.a4o().aOs(21, !0, {
					t2: t2,
					data: data
				})
			} else {
				var hh = bG.pc(16);
				if (bG.aS6(39 + 16 * hh + ej * (0 === t2 ? 111 : 1 === t2 ? 101 : 2 === t2 || 3 === t2 ? 127 : 212))) {
					if (0 === t2)
						for (aB = 0; aB < ej; aB++) data.push([bG.pc(30), bF.vq.vu(bG.pc(5)), bG.pc(16), bG.pc(30), bG.pc(30)]);
					else if (1 === t2)
						for (aB = 0; aB < ej; aB++) data.push([bG.pc(16), bF.vq.vu(bG.pc(3)), bG.pc(16), bF.vq.vu(bG.pc(5)), bG.pc(31), bG.pc(30)]);
					else if (2 === t2 || 3 === t2)
						for (aB = 0; aB < ej; aB++) data.push([bG.pc(30), bF.vq.vu(bG.pc(5)), bG.aS5(32), bG.pc(30), bG.pc(30)]);
					else
						for (aB = 0; aB < ej; aB++) data.push([bG.pc(20), bG.pc(30), bG.pc(30), bG.pc(30), bG.pc(30), bG.aS5(32), bG.pc(30), bF.vq.vu(bG.pc(5)), bF.vq.vu(bG.pc(5))]);
					8 === t.sj && t.a4o().aOs(21, !0, {
						t2: t2,
						data: data
					})
				} else az.y.aRR(0, 3260)
			}
		}
	}, this.aRi = function() {
		if (bG.size < bC.aS4(29)) az.y.aRR(0, 3265);
		else {
			var aS7 = bG.pc(4),
				aS8 = bG.pc(7),
				aS9 = bG.pc(11);
			if (bG.aS6(29 + 16 * aS8 + 16 * aS9 + 11 * aS7)) {
				for (var data = [], aB = 0; aB < aS7; aB++) {
					for (var a0U = bF.vq.vu(bG.pc(3)), aSA = bG.pc(8), aNr = [], f2 = 0; f2 < aSA; f2++) aNr.push(bG.pc(16));
					data.push({
						name: "[" + a0U + "]",
						aNr: aNr
					})
				}
				8 === t.sj && t.a4o().aOs(23, !0, data)
			} else az.y.aRR(0, 3266)
		}
	}
}

function aR2() {
	function aSC() {
		var id = bG.pc(3);
		return 0 === id ? {
			id: id,
			sh: bG.pc(30),
			r: bm.aCI.aE5(bF.vs.wA(7))
		} : 1 === id ? {
			id: id,
			sh: bG.pc(30),
			aD6: bG.pc(3),
			value: bG.pc(30),
			target: bG.pc(30)
		} : 2 === id ? {
			id: id,
			sh: bG.pc(30),
			aD6: bG.pc(3)
		} : 3 === id ? {
			id: id,
			sh: bG.pc(30),
			aD6: bG.pc(3),
			value: bG.pc(4),
			target: bG.pc(30)
		} : 4 === id ? {
			id: id,
			sh: bG.pc(30),
			aD6: bG.pc(3),
			target: bG.pc(30)
		} : 5 === id ? {
			id: id,
			aD6: bG.pc(6)
		} : 6 === id ? {
			id: id,
			value: bG.pc(17)
		} : null
	}
	this.aRc = function(a0v) {
		if (a0v !== az.y.a0y) az.y.close(a0v, 3239);
		else if (6 !== aa.a10()) az.y.close(a0v, 3271);
		else {
			bm.dZ();
			for (var aB = 0; aB < 4; aB++) {
				var ra = bm.y.rb[aB],
					playerCount = (ra.ta = bG.pc(10), ra.eP = bG.pc(6), ra.mapSeed = bG.pc(14), ra.aCr = bG.pc(4), ra.aEZ = bG.pc(6), ra.aEa = bG.pc(4), ra.aCx = bG.pc(1), ra.aDf = bG.pc(12), ra.spawningSeed = bG.pc(14), bG.pc(16));
				bm.tp.tr[aB] = bG.pc(16);
				for (var f2 = 0; f2 < playerCount; f2++) bm.tp.aCU(aB, bG.pc(30), bF.vs.wA(5), bG.pc(4), bG.pc(30), bG.pc(7), bG.pc(16), bG.pc(18), bG.pc(11), bG.pc(12))
			}
			t.u(29), bm.y.aDW(!0)
		}
	}, this.aRk = function(a0v) {
		if (a0v !== az.y.a0y) az.y.close(a0v, 3239);
		else if (bm.a0x) {
			bm.y.aDU[0] = bG.pc(20), bm.y.aDU[1] = bG.pc(20);
			for (var aSB = bG.pc(16), f2 = 0; f2 < aSB; f2++) {
				var id = bG.pc(3);
				0 === id ? bm.tp.aCU(bG.pc(2), bG.pc(30), bF.vs.wA(5), 0, 1234566, 127, 0, bG.pc(18), 0, bG.pc(12)) : 1 === id ? bm.tp.aCl(bG.pc(16), bG.pc(2)) : 2 === id ? bm.tp.aCh(bG.pc(16), bG.pc(2), bG.pc(2)) : 3 === id ? bm.tp.aCk(bG.pc(
					16), bG.pc(2)) : 4 === id ? bm.tp.aCa(bG.pc(16), bG.pc(2), bG.pc(4), bG.pc(30), bG.pc(7), bG.pc(16), bG.pc(11)) : 5 === id && bm.tp.aCb(bG.pc(16), bG.pc(2), bG.pc(1))
			}
			for (var aB = 0; aB < 4; aB++) {
				var ra = bm.y.rb[aB];
				if (ra.ta = bG.pc(10), 0 === ra.ta) {
					if (ra.a15 = bG.pc(10), ra.aCv = bG.pc(10), bm.aCJ.di(aB)) return;
					ra.eP = bG.pc(6), ra.mapSeed = bG.pc(14), ra.aCr = bG.pc(4), ra.aEZ = bG.pc(6), ra.aEa = bG.pc(4), ra.aCx = bG.pc(1), ra.aDf = bG.pc(12), ra.spawningSeed = bG.pc(14), ra.aEb.push(ra.aEb[0]), ra.aEb.shift()
				}
			}
			bm.y.aDY()
		} else az.y.close(a0v, 3251)
	}, this.aRl = function(a0v) {
		if (a0v !== az.y.a0y) az.y.close(a0v, 3272);
		else if (bm.a0x) {
			for (var rY = bG.pc(4), ra = bm.y.rb[rY], rc = ra.rc, u4 = (ra.rd = bG.pc(20), bG.pc(6)), aB = 0; aB < u4; aB++) {
				var aEs = aSC();
				bm.rl.aEr(aEs), rc.push(aEs)
			}
			bm.y.aDg(rY)
		} else az.y.close(a0v, 3273)
	}, this.aRm = function(a0v) {
		a0v !== az.y.a0y ? az.y.close(a0v, 3276) : bm.a0x ? bm.message.aE1(aSC()) : az.y.close(a0v, 3277)
	}
}

function aR4() {
	this.aRd = function(a0v) {
		var aRz, r1;
		bG.aS6(70) ? (aRz = bG.pc(3), r1 = bh.aSD.j0(bG.pc(30), bG.pc(30)), az.aBo.aSE(a0v, r1, aRz), 0 < aRz || (0 === a0v && 0 === bi.eG.data[105].value.length ? az.aBo.aOh(0) : az.aMt.aSF(a0v), 4 === az.y.aRE(a0v).aSG() ? 6 === aa.a10() && az
			.aDz.aFO(a0v) : 5 !== az.y.aRE(a0v).aSG() || 8 !== aa.a10() && 10 !== aa.a10() || az.oz.aFn())) : az.y.aRR(a0v, 3269)
	}, this.aRf = function(a0v) {
		var id = bG.pc(6);
		1 === id ? (bi.rw.rx(160, bG.pc(30)), az.y.aRO(a0v), aT.a96 || az.aBo.aOh(1), b6.aBm(), 8 === t.sj && t.a4o().aOr()) : 21 === id ? 8 === t.sj && t.a4o().aOs(17) : 22 === id && (bi.rw.rx(106, bi.eG.data[110].value), bi.rw.rx(110, ""),
			8 === t.sj) && t.a4o().aOs(15)
	}, this.aRj = function() {
		var ej = bG.pc(16),
			aSH = bG.pc(16);
		if (bG.aS6(55 + 10 * ej + 16 * aSH)) {
			for (var g = [], aB = 0; aB < ej; aB++) g.push(bF.vq.vu(bG.pc(10)));
			b6.aBq(g)
		} else az.y.aRR(0, 3270)
	}
}

function aQu() {
	this.aRF = function(a0v, aRD) {
		bC.a7(8), bC.a8(1, 0), bC.a8(6, 4), bC.a8(1, aRD ? 1 : 0), az.y.send(a0v, bC.aC)
	}, this.aFn = function() {
		bC.a7(58), bC.a8(1, 0), bC.a8(6, 5), bC.a8(8, az.y.a0y), bC.a8(10, aw.aCv), bC.a8(9, aw.aFg), bC.a8(10, l.dt), bC.a8(14, l.dl), az.y.send(az.y.a15, bC.aC)
	}, this.p0 = function(eV) {
		bC.a7(27), bC.a8(1, 1), bC.a8(4, 0), bC.a8(22, eV), az.y.send(az.y.a15, bC.aC)
	}, this.p1 = function(iK, jH) {
		bC.a7(25), bC.a8(1, 1), bC.a8(4, 1), bC.a8(10, iK), bC.a8(10, jH), az.y.send(az.y.a15, bC.aC)
	}, this.p5 = function(iK, p3) {
		bC.a7(24), bC.a8(1, 1), bC.a8(4, 2), bC.a8(10, iK), bC.a8(9, p3), az.y.send(az.y.a15, bC.aC)
	}, this.p7 = function(iK, p6) {
		bC.a7(42), bC.a8(1, 1), bC.a8(4, 3), bC.a8(10, iK), bC.a8(27, p6), az.y.send(az.y.a15, bC.aC)
	}, this.p9 = function(iK, n1) {
		bC.a7(31), bC.a8(1, 1), bC.a8(4, 4), bC.a8(10, iK), bC.a8(16, n1), az.y.send(az.y.a15, bC.aC)
	}, this.pC = function(jH) {
		bC.a7(15), bC.a8(1, 1), bC.a8(4, 5), bC.a8(10, jH), az.y.send(az.y.a15, bC.aC)
	}, this.pG = function(e4) {
		bC.a7(15), bC.a8(1, 1), bC.a8(4, 6), bC.a8(10, e4), az.y.send(az.y.a15, bC.aC)
	}, this.pI = function(pH) {
		bC.a7(6), bC.a8(1, 1), bC.a8(4, 7), bC.a8(1, pH), az.y.send(az.y.a15, bC.aC)
	}, this.pK = function() {
		bC.a7(5), bC.a8(1, 1), bC.a8(4, 8), az.y.send(az.y.a15, bC.aC)
	}, this.pL = function(iK, eV, jH) {
		bC.a7(47), bC.a8(1, 1), bC.a8(4, 10), bC.a8(10, iK), bC.a8(10, jH), bC.a8(22, eV), az.y.send(az.y.a15, bC.aC)
	}, this.pS = function(aSI, aSJ) {
		bC.a7(24), bC.a8(1, 1), bC.a8(4, 15), bC.a8(9, aSJ), bC.a8(10, aSI), az.y.send(az.y.a15, bC.aC)
	}, this.pV = function(a6L) {
		bC.a7(14), bC.a8(1, 1), bC.a8(4, 14), bC.a8(9, a6L), az.y.send(az.y.a15, bC.aC)
	}, this.pZ = function(aSK, target) {
		var aB, ej = aSK.length;
		for (bC.a7(14 + 9 * ej), bC.a8(1, 1), bC.a8(4, 13), bC.a8(9, target), aB = 0; aB < ej; aB++) bC.a8(9, aSK[aB]);
		az.y.send(az.y.a15, bC.aC)
	}
}

function aQx() {
	this.aSL = function() {
		bC.a7(39), bC.a8(1, 0), bC.a8(6, 16), az.aBo.aSM(), az.y.send(0, bC.aC)
	}, this.aSF = function(a0v) {
		bC.a7(115), bC.a8(1, 0), bC.a8(6, 17), bF.sm.w6(bi.eG.data[105].value, 5), bF.sm.w6(bi.eG.data[106].value, 8), bC.a8(30, bi.eG.data[109].value), az.y.send(a0v, bC.aC)
	}, this.aOu = function() {
		bC.a7(55), bC.a8(1, 0), bC.a8(6, 18), bF.sm.w5(bi.eG.data[110].value), az.y.send(0, bC.aC)
	}, this.aOq = function(a3e) {
		var ej = a3e.qC.length;
		bC.a7(21 + 16 * ej), bC.a8(1, 0), bC.a8(6, 29), bC.a8(6, a3e.sl), bC.a8(8, ej), bE.vq.w5(a3e.qC), az.y.send(0, bC.aC)
	}, this.aN9 = function(data) {
		bC.a7(43), bC.a8(1, 0), bC.a8(6, 25), bC.a8(6, data.sl), bF.sm.w6(data.sh, 5), az.y.send(0, bC.aC)
	}, this.aMu = function(data) {
		bC.a7(75), bC.a8(1, 0), bC.a8(6, 27), bC.a8(6, data.sl), bF.sm.w6(data.sh, 5), bC.aS3(32, data.value), az.y.send(0, bC.aC)
	}
}

function aQy() {
	this.pa = function() {
		for (var ej = aD.k7, zd = bQ.result.zd, l0 = zd.length, yG = (bC.a7(17 + 16 * ej + 33 * l0), bC.a8(1, 1), bC.a8(4, 12), bC.a8(10, l0), bC.a8(1, +(2 === aD.zl)), bC.a8(1, aD.a05 % 2), ag.yG), aB = 0; aB < ej; aB++) bC.a8(16, yG[aB]);
		for (var gX = ag.gX, aB = 0; aB < l0; aB++) {
			var gH = zd[aB];
			bC.a8(9, gH), bC.a8(24, gX[gH])
		}
		az.y.send(az.y.a15, bC.aC)
	}
}

function aQz() {
	this.aOj = function(t2, t3, t4) {
		bC.a7(75), bC.a8(1, 0), bC.a8(6, 21), bC.a8(6, t2), bC.a8(1, +(t3 < 0)), bC.a8(1, +(t4 < 0)), bC.a8(30, Math.abs(t3)), bC.a8(30, Math.abs(t4)), az.y.send(0, bC.aC)
	}, this.aOk = function(t2, aOl, aOm) {
		bC.a7(18 + 16 * aOl.length + 30), bC.a8(1, 0), bC.a8(6, 22), bC.a8(6, t2), az.aBo.aSO(aOl), bC.a8(30, aOm), az.y.send(0, bC.aC)
	}, this.aOp = function(t2, aOl, aOm) {
		bC.a7(73), bC.a8(1, 0), bC.a8(6, 28), bC.a8(6, t2), bF.sm.w6(aOl, 5), bC.a8(30, aOm), az.y.send(0, bC.aC)
	}, this.aOn = function(aNq, a0T) {
		for (var ej = a0T.length, hh = 0, aB = 0; aB < ej; aB++) hh += a0T[aB].length;
		for (bC.a7(21 + 3 * ej + 16 * hh), bC.a8(1, 0), bC.a8(6, 23), bC.a8(3, aNq), bC.a8(4, ej), bC.a8(7, hh), aB = 0; aB < ej; aB++) bC.a8(3, a0T[aB].length), bE.vq.w5(a0T[aB]);
		az.y.send(0, bC.aC)
	}, this.aOo = function(aNq, t3, t4) {
		bC.a7(52), bC.a8(1, 0), bC.a8(6, 24), bC.a8(3, aNq), bC.a8(1, +(t3 < 0)), bC.a8(1, +(t4 < 0)), bC.a8(20, Math.abs(t3)), bC.a8(20, Math.abs(t4)), az.y.send(0, bC.aC)
	}
}

function aQv() {
	this.aFO = function(a0v) {
		var username = bi.eG.data[122].value.slice(0, 20),
			username = (bC.a7(24 + 16 * username.length + 18 + 18), bC.a8(1, 0), bC.a8(6, 1), bC.a8(10, l.dt), bC.a8(2, bi.eG.data[158].value), az.aBo.aSO(username), b9.color.a2i(bi.y.vV())),
			username = (bC.a8(6, username[0]), bC.a8(6, username[1]), bC.a8(6, username[2]), b6.aBs());
		bC.a8(9, username[0]), bC.a8(9, username[1]), az.y.a0y = a0v, az.y.send(a0v, bC.aC)
	}, this.aE0 = function(aSR, a3e) {
		bD.dZ(), bD.a8(1, 0), bD.a8(6, 2), bD.a8(3, aSR), 2 === aSR ? bD.a8(2, a3e) : 3 === aSR ? bE.vs.zG(a3e, 7, bD) : 5 === aSR && (bD.a8(3, a3e.id), bD.a8(3, a3e.value), bD.a8(30, a3e.sh)), az.y.send(az.y.a0y, bD.aSS())
	}
}

function aQw() {
	this.aRN = function(a0v) {
		bC.a7(39), bC.a8(1, 0), bC.a8(6, 13), bC.a8(14, l.dl), bC.a8(4, a0.id), bC.a8(7, a0.dr), bC.a8(1, +l.a9), bC.a8(1, +l.aA), bC.a8(5, (new Date).getHours() % 24), az.y.send(a0v, bC.aC)
	}, this.aSE = function(a0v, r1, aRz) {
		bC.a7(70), bC.a8(1, 0), bC.a8(6, 14), bC.a8(3, aRz), bC.a8(30, r1[0]), bC.a8(30, r1[1]), az.y.send(a0v, bC.aC)
	}, this.aOh = function(id) {
		bC.a7(13), bC.a8(1, 0), bC.a8(6, 15), bC.a8(6, id), az.y.send(0, bC.aC)
	}, this.aBp = function(id, qC) {
		var ej = Math.min(qC.length, 63);
		bC.a7(19 + 16 * ej), bC.a8(1, 0), bC.a8(6, 26), bC.a8(6, id), bC.a8(6, ej), bE.vq.w5(qC), az.y.send(0, bC.aC)
	}, this.aSU = function(aRt, qN) {
		bC.a7(7 + 26 * qN.length), bC.a8(1, 0), bC.a8(6, 9);
		for (var aB = 0; aB < qN.length; aB++) bC.a8(16, qN[aB][0]), bC.a8(10, qN[aB][1]);
		az.y.send(aRt, bC.aC)
	}, this.aRU = function(aSV, aSW) {
		bC.a7(20), bC.a8(1, 0), bC.a8(6, 19), bC.a8(1, aSV), bC.a8(12, aSW), az.y.send(az.y.a15, bC.aC)
	}, this.aSO = function(username) {
		bC.a8(5, username.length), bE.vq.w5(username)
	}
}

function aRL() {
	var a0v, aM0, aSX, aSY = ["wss://", "/s50/", "/s51/", "/s52/"],
		aSZ = 0;

	function aRM() {
		az.y.aRM(a0v, aM0)
	}

	function aSd(e) {
		az.a6L.aRW(a0v, new Uint8Array(e.data))
	}

	function aSe() {}

	function aRT(e) {
		az.y.aRT(a0v, e)
	}
	this.dZ = function(e4, aSa) {
		a0v = e4, aM0 = aSa, e4 = l.dm ? "ws://localhost:" + (7130 + a0v) + "/" : aSY[0] + az.y.aRA[a0v] + aSY[1 + l.dn], (aSX = new WebSocket(__fx.customLobby.isActive() && 1 === a0v ? __fx.customLobby.getSocketURL() : e4)).binaryType =
			"arraybuffer", aSX.onopen = aRM, aSX.onmessage = aSd, aSX.onclose = aRT, aSX.onerror = aSe
	}, this.aSc = function() {
		return aSX.readyState === aSX.CONNECTING
	}, this.aMr = function() {
		return aSX.readyState === aSX.OPEN
	}, this.aRG = function() {
		return aSZ
	}, this.aRO = function() {
		aSZ = 1
	}, this.aRI = function() {
		return this.aSc() || this.aMr()
	}, this.aRJ = function(aSa) {
		aM0 = aSa
	}, this.aSG = function() {
		return aM0
	}, this.send = function(aC) {
		this.aMr() && aSX.send(aC)
	}, this.close = function(aRQ) {
		this.aRI() && (aSX.close(aRQ), this.rm())
	}, this.rm = function() {
		aSX.onopen = null, aSX.onmessage = null, aSX.onclose = null, aSX.onerror = null
	}
}

function dH() {
	var aSf = !1,
		a6h = 0,
		i = 0,
		sq = 0,
		gap = 0,
		canvas = null,
		y0 = null,
		a2I = null;

	function aSh() {
		for (var aSn, aSl = 0, ej = 0, f4 = Math.floor(i / 2), e3 = Math.floor(sq / 2), aSm = 1.5 * Math.PI, aB = aD.x4; 0 <= aB; aB--) ej += a2I[aB], 0 === a2I[aB] && aSl++;
		if (aSf = !1, y0.clearRect(0, 0, i, i), y0.fillStyle = bA.nb, y0.fillRect(0, 0, i, i), y0.fillStyle = bA.ne, y0.fillRect(0, 0, i, gap), y0.fillRect(0, 0, gap, i), y0.fillRect(i - gap, 0, gap, i), y0.fillRect(0, i - gap, i, gap), 0 < ej)
			if (aSl === aD.x4) {
				for (aB = aD.x4; 0 <= aB; aB--)
					if (0 < a2I[aB]) {
						! function(aB, f4, e3) {
							y0.fillStyle = bf.aSu[bf.kU[aB]], y0.beginPath(), y0.arc(f4, f4, e3, 0, 2 * Math.PI), y0.fill()
						}(aB, f4, e3);
						break
					}!
				function(f4) {
					var fontSize = f4 / 3;
					y0.font = b9.qV.sJ(1, fontSize), y0.fillStyle = bA.ne, y0.fillText("100%", f4, f4 + .1 * fontSize)
				}(f4)
			} else {
				for (aB = 0; aB <= aD.x4; aB++) 0 < a2I[aB] && (! function(aB, f4, e3, aSm, aSn) {
					y0.fillStyle = bf.aSu[bf.kU[aB]], y0.beginPath(), y0.arc(f4, f4, e3, aSm, aSn), y0.lineTo(f4, f4), y0.fill()
				}(aB, f4, e3, aSm, aSn = aSm + 2 * Math.PI * a2I[aB] / ej), function(f4, e3, aSm, aSn) {
					var fB = (aSn - aSm) / (2 * Math.PI),
						fontSize = (__fx.settings.detailedTeamPercentage ? 0.75 : 1) * e3 * Math.min(fB, .37);
					fontSize < 8 || (aSm = (aSm + aSn) / 2, aSn = (__fx.settings.detailedTeamPercentage ? (100 * fB).toFixed(2) : Math.floor(100 * fB + .5)) + "%", e3 *= .525 - Math.max(.6 * (fB - .7), 0), y0.font = b9.qV.sJ(1, fontSize), y0
						.fillStyle = bA.ne, y0.fillText(aSn, f4 + Math.cos(aSm) * e3, f4 + Math.cos(aSm + 1.5 * Math.PI) * e3))
				}(f4, e3, aSm, aSn), 0 !== aB && aSs(f4, e3, aSm), aSm = aSn);
				aSs(f4, e3, 1.5 * Math.PI)
			}!
		function(f4, e3) {
			y0.beginPath(), y0.arc(f4, f4, e3, 0, 2 * Math.PI), y0.stroke()
		}(f4, e3)
	}

	function aSs(f4, e3, aSv) {
		y0.beginPath(), y0.moveTo(f4, f4), y0.lineTo(f4 + Math.cos(aSv) * e3, f4 + Math.cos(aSv + 1.5 * Math.PI) * e3), y0.stroke()
	}
	this.dZ = function() {
		if (aD.he) {
			a6h = 0, a2I = new Uint32Array(aD.x4 + 1);
			for (var aB = aD.x4; 0 <= aB; aB--) a2I[aB] = 0;
			for (aB = al.k8 - 1; 0 <= aB; aB--) a2I[bf.eh[al.k9[aB]]] += 1;
			this.resize()
		} else a2I = y0 = canvas = null
	}, this.a7e = function() {
		return i
	}, this.resize = function() {
		aD.he && (i = Math.floor(a0.a1.ht() && !aD.n7 ? .18 * h.min : .13 * h.hu), i = (i *= 1 + (.5 + .2 * a0.a1.ht()) * aD.n7) + i % 2, sq = Math.floor(7 * i / 8), (canvas = canvas || document.createElement("canvas")).width = i, canvas.height =
			i, y0 = canvas.getContext("2d", {
				alpha: !0
			}), gap = Math.max(1, .015 * i), y0.lineWidth = gap, y0.strokeStyle = bA.ne, b9.qV.textAlign(y0, 1), b9.qV.textBaseline(y0, 1), aSh())
	}, this.kd = function() {
		var dp, ke = this.kf();
		return bf.kU[ke] || (ke = function() {
			for (var ke = -1, aB = aD.x4; 1 <= aB; aB--)(-1 === ke || a2I[aB] > a2I[ke]) && (ke = aB);
			return ke
		}(), dp = ag.gX[lg[0]], -1 !== ke && a2I[ke] > dp) ? a2I[ke] : dp
	}, this.a0i = function() {
		return a6h = 31, this.j0(), this.kf()
	}, this.kf = function() {
		for (var ke = 0, aB = aD.x4; 0 < aB; aB--) a2I[aB] > a2I[ke] && (ke = aB);
		return ke
	}, this.le = function(aSj) {
		for (var gC = 0, k9 = al.k9, eh = bf.eh, ej = al.k8, fN = bN.fN, aB = 0; aB < ej; aB++) {
			var gH = k9[aB];
			eh[gH] === aSj && (fN[gC++] = gH)
		}
		bN.fE[0] = gC
	}, this.kg = function(aSj) {
		for (var gC = 0, k9 = al.k9, eh = bf.eh, ej = al.k8, fN = bN.fN, aB = 0; aB < ej; aB++) {
			var gH = k9[aB];
			eh[gH] !== aSj && (fN[gC++] = gH)
		}
		bN.fE[0] = gC
	}, this.a3B = function() {
		for (var gC = 0, aB = aD.x4; 0 <= aB; aB--) gC += 0 < a2I[aB];
		return gC
	}, this.j0 = function() {
		if (aD.he && 32 <= ++a6h) {
			a6h = 0;
			for (var aB = aD.x4; 0 <= aB; aB--) a2I[aB] = 0;
			for (aB = al.k8 - 1; 0 <= aB; aB--) a2I[bf.eh[al.k9[aB]]] += ag.gX[al.k9[aB]];
			aSf = !0
		}
	}, this.mR = function() {
		aD.he && aSf && aSh()
	}, this.ub = function() {
		aD.he && (aD.n7 ? uc.drawImage(canvas, bb.gap, bb.gap) : uc.drawImage(canvas, bb.gap, a7f + 2 * bb.gap))
	}
}

function dX() {
	function aT1(eq, ej, es, zQ, a8v, fA) {
		if (!(es < 1 || a8v < es))
			for (var aB = 0; aB <= ej; aB++) {
				var eN = bL.iO(eq, es);
				if (zQ(eN)) return eN >> 2;
				eq += fA
			}
		return -1
	}

	function aT5(es, ej, eq, zQ, aSz, fA) {
		if (!(eq < 1 || aSz < eq)) {
			ej = Math.max(ej, 0);
			for (var aB = 0; aB <= ej; aB++) {
				var eN = bL.iO(eq, es);
				if (zQ(eN)) return eN >> 2;
				es += fA
			}
		}
		return -1
	}

	function aT9(iB, iC, aSw) {
		return -1 !== iC && (-1 === iB || bL.iD(iC, aSw) < bL.iD(iB, aSw)) ? iC : iB
	}
	this.h8 = function(aSw) {
		return this.zs(aSw, function(eN) {
			return ac.ee(eN)
		})
	}, this.hE = function(aSw) {
		return this.zs(aSw, function(eN) {
			return ac.aGW(eN, aD.eT)
		})
	}, this.zs = function(aSw, zQ) {
		return function(aSw, aSx, zQ) {
			for (var gy = bL.er(aSw), h0 = bL.et(aSw), aSz = bR.eu - 2, a8v = bR.ev - 2, aT0 = -1, em = 0; em < aSx; em++) {
				var a8u = Math.max(gy - em, 1),
					aKK = Math.max(h0 - em, 1),
					xf = Math.min(gy + em, aSz),
					xe = Math.min(h0 + em, a8v),
					iB = aT1(gy, xf - gy, h0 - em, zQ, a8v, 1),
					iC = aT1(gy - 1, gy - a8u - 1, h0 - em, zQ, a8v, -1),
					xf = aT1(gy, xf - gy, h0 + em, zQ, a8v, 1),
					a8u = aT1(gy - 1, gy - a8u - 1, h0 + em, zQ, a8v, -1),
					aT4 = aT5(h0, xe - h0 - 1, gy - em, zQ, aSz, 1),
					aT6 = aT5(h0 - 1, h0 - aKK - 2, gy - em, zQ, aSz, -1),
					xe = aT5(h0, xe - h0 - 1, gy + em, zQ, aSz, 1),
					aKK = aT5(h0 - 1, h0 - aKK - 2, gy + em, zQ, aSz, -1);
				if (aT0 = aT9(aT0, iB, aSw), aT0 = aT9(aT0, iC, aSw), aT0 = aT9(aT0, xf, aSw), aT0 = aT9(aT0, a8u, aSw), aT0 = aT9(aT0, aT4, aSw), aT0 = aT9(aT0, aT6, aSw), aT0 = aT9(aT0, xe, aSw), 0 <= (aT0 = aT9(aT0, aKK, aSw)) && em *
					em >= bL.iD(aT0, aSw)) return aT0
			}
			return -1
		}(aSw, bL.hr(), zQ)
	}
}

function d0() {
	function aTB(key) {
		var aQI;
		return "undefined" == typeof URLSearchParams || (aQI = window.location.search, "string" != typeof(aQI = new URLSearchParams(aQI).get(key))) || aQI.length < 1 ? null : aQI
	}
	this.di = function() {
		if (0 !== a0.id) return !1;
		if (! function() {
				var value = aTB("account");
				if (!value && !(value = aTB("a"))) return void bH.clear();
				return bH.clear(), t.u(8, t.sj, new sk(1e3, {
					sl: 0,
					sh: value,
					si: 0
				})), 1
			}()) {
			var value = aTB("replay");
			if (!this.clear()) return !1;
			if (!value) return !1;
			t.u(3, 0, value)
		}
		return !0
	}, this.clear = function() {
		var a0s = new URL(window.location.href);
		a0s.search = "";
		try {
			return history.replaceState(null, "", a0s.toString()), !0
		} catch (e) {
			console.log("error 352: " + e)
		}
		return !1
	}, this.aNM = function(key, value) {
		if (0 === a0.id) try {
			var a0s = new URL(window.location.href),
				gH = a0s.searchParams;
			gH.set(key, value), a0s.search = gH.toString(), history.replaceState(null, "", a0s.toString())
		} catch (e) {
			console.log("error 358: " + e)
		}
	}
}

function ch() {
	var aTD, g;
	this.dZ = function() {
		for (var aB = (g = new Uint16Array(101)).length - 1; 0 <= aB; aB--) g[aB] = bK.dq(32768 * aB, 100);
		this.a4N(0)
	}, this.value = function(gH) {
		return g[gH]
	}, this.aKC = function() {
		return bK.dq(aTD - 1, 2)
	}, this.a4N = function(aJq) {
		aTD = 2 * aJq % 32768 + 1
	}, this.random = function() {
		return aTD = 167 * aTD % 32768
	}, this.jP = function(mZ) {
		return bK.dq(mZ * this.random(), 32768)
	}, this.jz = function(gH) {
		return 0 !== gH && this.random() < this.value(gH)
	}, this.ih = function(f2, f3) {
		return f2 + this.jP(f3 - f2)
	}
}

function cw() {
	this.pp = new aTE, this.a4Y = new aTF, this.aHa = new aTG, this.dZ = function() {
		aD.gs || this.pp.dZ()
	}, this.j0 = function() {
		aD.gs || (this.pp.j0(), 3 !== t.sj) || be.k4() % 15 != 5 && 2 !== aD.zo || t.a4o().aQJ()
	}, this.aQM = function() {
		0 === aD.zo && aa.aFY(), aD.a4I.a4g(), aD.data.canvas = null, az.y.close(az.y.a15, 3257), az.y.a15 = 0, aD.data.isReplay = 1, aD.a4L()
	}, this.aQL = function(qC) {
		var aB = qC.indexOf("=");
		return 0 <= aB ? qC.substring(aB + 1) : qC
	}, this.aQK = function(qC) {
		return "https://territorial.io/?replay=" + qC
	}
}

function aTE() {
	this.aTI = null, this.aTJ = null, this.aTK = null, this.aTL = null, this.aTM = null, this.aTN = null, this.a4X = "";
	var aTO = 0;
	this.dZ = function() {
		this.aTI = [], this.aTJ = [], this.aTK = [], this.aTL = [], this.aTM = [0], this.aTN = [0], aTO = 0, this.a4X = ""
	}, this.pq = function(id, fS, fU, fW) {
		aD.gs || 2 === aD.zo || (0 === this.aTM[aTO] && (this.aTN[aTO] ? (this.aTM.push(1), this.aTN.push(0), aTO++) : this.aTM[aTO] = 1), this.aTI.push(id), this.aTJ.push(fS), this.aTK.push(void 0 === fU ? 0 : fU), this.aTL.push(void 0 === fW ?
			0 : fW), this.aTN[aTO]++)
	}, this.j0 = function() {
		0 === this.aTM[aTO] ? this.aTN[aTO]++ : (this.aTM.push(0), this.aTN.push(0), aTO++)
	}
}

function aTG() {
	var aTP = 0;

	function aTT(qC, id) {
		aTP || (id ? 1 === id ? aN.a5n = L(431) + ": " + qC : t.u(4, 3, new v(L(432), qC, 1)) : t.u(4, 3, new v("⚠️ " + L(430), qC, 1)))
	}
	this.wA = function(qC, aTQ) {
		var qN;
		return aTP = aTQ, bF.sm.w2(bF.sm.w0(bF.sm.vy(qC))), aN.a5n = "", !(! function() {
			if (bG.size < 10) aTT("File Too Small");
			else {
				var aTV = bG.pc(12),
					aSW = (aTV !== l.rVersion && aTT("Incompatible Version   Required: " + l.rVersion + ("   Found: " + aTV) + ("   Compatible at territorial.io/" + aTV), 1), bG.pc(12)),
					aTW = bG.pc(31);
				if (aTW !== bG.size) aTT("Size Error: " + aTW + " " + bG.size);
				else if (function(j, aTV) {
						for (var gH = bG.aC, ej = bG.size, aSW = aTV, aB = 3; aB < ej; aB++) aSW = aSW + gH[aB] & 4095;
						return aSW === j || (aTT("Hash Error: " + aSW + " " + j + " " + ej), !1)
					}(aSW, aTV)) return 1
			}
			return
		}() || (aTQ = bG, (qN = aD.data = new a4H).mapType = aTQ.pc(2), qN.mapProceduralIndex = aTQ.pc(8), qN.mapRealisticIndex = aTQ.pc(8), qN.mapSeed = aTQ.pc(14), qN.mapName = aTQ.aTY(5), 2 === qN.mapType && aTQ.aTZ(), qN
			.passableWater = aTQ.pc(1), qN.passableMountains = aTQ.pc(1), qN.playerCount = aTQ.pc(10), qN.humanCount = aTQ.pc(10), qN.selectedPlayer = aTQ.pc(9), qN.gameMode = aTQ.pc(1), qN.playerMode = aTQ.pc(2), qN.battleRoyaleMode =
			aTQ.pc(2), qN.numberTeams = aTQ.pc(4), qN.isZombieMode = aTQ.pc(1), qN.isContest = aTQ.pc(1), qN.isReplay = aTQ.pc(1), qN.elo = aTQ.aTa(2, 14, 2), qN.colorsType = aTQ.pc(1), qN.colorsPersonalized = aTQ.pc(1), qN.colorsData =
			aTQ.aTa(10, 18, 512), qN.selectableColor = aTQ.pc(1), qN.teamPlayerCount = aTQ.aTa(4, 10, 9), qN.neutralBots = aTQ.pc(1), qN.botDifficultyType = aTQ.pc(2), qN.botDifficultyValue = aTQ.pc(4), qN.botDifficultyTeam = aTQ.aTa(4,
				4, 9), qN.botDifficultyData = aTQ.aTa(10, 4, 512), qN.spawningType = aTQ.pc(2), qN.spawningSeed = aTQ.pc(14), qN.spawningData = aTQ.aTa(11, 12, 1024), qN.selectableSpawn = aTQ.pc(1), qN.playerNamesType = aTQ.pc(2), qN
			.playerNamesData = aTQ.aTb(10, 5, 512), qN.selectableName = aTQ.pc(1), qN.aIncomeType = aTQ.pc(2), qN.aIncomeValue = aTQ.pc(8), qN.aIncomeData = aTQ.aTa(10, 8, 512), qN.tIncomeType = aTQ.pc(2), qN.tIncomeValue = aTQ.pc(8), qN
			.tIncomeData = aTQ.aTa(10, 8, 512), qN.iIncomeType = aTQ.pc(2), qN.iIncomeValue = aTQ.pc(8), qN.iIncomeData = aTQ.aTa(10, 8, 512), qN.sResourcesType = aTQ.pc(2), qN.sResourcesValue = aTQ.pc(11), qN.sResourcesData = aTQ.aTa(10,
				11, 512), ! function() {
				var i3 = bG,
					wB = i3.pc(5),
					aTc = i3.pc(30),
					aTd = i3.pc(30);
				if (aTc + aTd > 8 * i3.size) return void aTT("Corrupted File");
				return function(ej) {
						var aTg = new Uint8Array(ej),
							aTh = new Uint16Array(ej),
							aTi = new Uint32Array(ej),
							aTj = new Uint32Array(ej);
						b8.pp.aTI = aTg, b8.pp.aTJ = aTh, b8.pp.aTK = aTi, b8.pp.aTL = aTj;
						for (var aB = 0; aB < ej; aB++) {
							var id = bG.pc(4);
							aTg[aB] = id, aTh[aB] = bG.pc(9), 0 === id ? aTi[aB] = bG.pc(22) : 1 === id ? (aTi[aB] = bG.pc(10), aTj[aB] = bG.pc(10)) : 2 === id ? (aTi[aB] = bG.pc(10), aTj[aB] = bG.pc(9)) : 3 === id ? (aTi[aB] = bG.pc(10),
								aTj[aB] = bG.pc(27)) : 4 === id ? (aTi[aB] = bG.pc(10), aTj[aB] = bG.pc(16)) : 5 === id || 6 === id ? aTi[aB] = bG.pc(10) : 7 === id ? aTi[aB] = bG.pc(1) : 10 === id && (aTi[aB] = bG.pc(20), aTj[aB] =
								bG.pc(22))
						}
					}(aTc),
					function(ej, wB) {
						var aTM = new Uint8Array(ej),
							aTN = new Array(ej);
						aTN.fill(0), b8.pp.aTM = aTM, b8.pp.aTN = aTN;
						for (var aB = 0; aB < ej; aB++) aTM[aB] = bG.pc(1), aTN[aB] = bG.pc(wB)
					}(aTd, wB), 1
			}()) || (bG.e4 < 8 * bG.size - 13 || bG.e4 > 8 * bG.size ? (aTT("Out Of Bounds Error: " + bG.e4 + " " + 8 * bG.size), 1) : (b8.pp.a4X = qC, 2 === aD.data.mapType && (aTT("Load base64 image...", 2), 1))))
	}, this.aHb = function(aHB, aTU) {
		var a2d = document.createElement("canvas"),
			hm = a2d.getContext("2d");
		if (a2d.width = aHB.width, a2d.height = aHB.height, hm.drawImage(aHB, 0, 0), aTP || aTU) return aD.zo ? void 0 : (aD.data.canvas = a2d, aD.data.mapType = 2, t.x(), void t.u(19));
		b8.aQM()
	}
}

function aTF() {
	this.zG = function() {
		var wB = function() {
				for (var aTN = b8.pp.aTN, ej = aTN.length, max = 0, aB = 0; aB < ej; aB++) max = Math.max(max, aTN[aB]);
				return wI(Math.max(max, 1))
			}(),
			i = (qN = aD.data, (i = bD).dZ(), i.a8(12, l.rVersion), i.e4 += 43, i.a8(2, qN.mapType), i.a8(8, qN.mapProceduralIndex), i.a8(8, qN.mapRealisticIndex), i.a8(14, qN.mapSeed), i.aTq(qN.mapName, 5), 2 === qN.mapType && i.aTr(qN.canvas),
				i.a8(1, qN.passableWater), i.a8(1, qN.passableMountains), i.a8(10, qN.playerCount), i.a8(10, qN.humanCount), i.a8(9, qN.selectedPlayer), i.a8(1, qN.gameMode), i.a8(2, qN.playerMode), i.a8(2, qN.battleRoyaleMode), i.a8(4, qN
					.numberTeams), i.a8(1, qN.isZombieMode), i.a8(1, qN.isContest), i.a8(1, qN.isReplay), i.dg(qN.elo, 2, 14), i.a8(1, qN.colorsType), i.a8(1, qN.colorsPersonalized), i.dg(qN.colorsData, 10, 18), i.a8(1, qN.selectableColor), i.dg(
					qN.teamPlayerCount, 4, 10), i.a8(1, qN.neutralBots), i.a8(2, qN.botDifficultyType), i.a8(4, qN.botDifficultyValue), i.dg(qN.botDifficultyTeam, 4, 4), i.dg(qN.botDifficultyData, 10, 4), i.a8(2, qN.spawningType), i.a8(14, qN
					.spawningSeed), i.dg(qN.spawningData, 11, 12), i.a8(1, qN.selectableSpawn), i.a8(2, qN.playerNamesType), i.aTs(qN.playerNamesData, 10, 5), i.a8(1, qN.selectableName), i.a8(2, qN.aIncomeType), i.a8(8, qN.aIncomeValue), i.dg(qN
					.aIncomeData, 10, 8), i.a8(2, qN.tIncomeType), i.a8(8, qN.tIncomeValue), i.dg(qN.tIncomeData, 10, 8), i.a8(2, qN.iIncomeType), i.a8(8, qN.iIncomeValue), i.dg(qN.iIncomeData, 10, 8), i.a8(2, qN.sResourcesType), i.a8(11, qN
					.sResourcesValue), i.dg(qN.sResourcesData, 10, 11), ! function(wB) {
					var i = bD,
						aTI = b8.pp.aTI,
						fS = b8.pp.aTJ,
						fU = b8.pp.aTK,
						fW = b8.pp.aTL,
						ej = aTI.length;
					i.a8(5, wB), i.a8(30, ej), i.a8(30, b8.pp.aTN.length);
					for (var aB = 0; aB < ej; aB++) {
						var f4 = aTI[aB];
						i.a8(4, f4), i.a8(9, fS[aB]), 0 === f4 ? i.a8(22, fU[aB]) : 1 === f4 ? (i.a8(10, fU[aB]), i.a8(10, fW[aB])) : 2 === f4 ? (i.a8(10, fU[aB]), i.a8(9, fW[aB])) : 3 === f4 ? (i.a8(10, fU[aB]), i.a8(27, fW[aB])) : 4 === f4 ? (i
							.a8(10, fU[aB]), i.a8(16, fW[aB])) : 5 === f4 || 6 === f4 ? i.a8(10, fU[aB]) : 7 === f4 ? i.a8(1, fU[aB]) : 10 === f4 && (i.a8(20, fU[aB]), i.a8(22, fW[aB]))
					}
				}(wB), ! function(wB) {
					for (var i = bD, aTM = b8.pp.aTM, aTN = b8.pp.aTN, ej = aTM.length, aB = 0; aB < ej; aB++) i.a8(1, aTM[aB]), i.a8(wB, aTN[aB])
				}(wB), bD.e4),
			qN = bK.dq(i - 1, 6) + 1,
			wB = (bC.aS4(6 * qN) !== bD.g.length && bD.g.push(0), ! function() {
				var i = bD;
				i.e4 = 24, i.a8(31, i.g.length), i.e4 = 12, i.a8(12, function() {
					for (var g = bD.g, ej = g.length, aSW = l.rVersion, aB = 3; aB < ej; aB++) aSW = aSW + g[aB] & 4095;
					return aSW
				}())
			}(), bG.dZ(bD.g), bE.sm.sn(bE.sm.so(qN)));
		return bG.u5(), bD.dZ(), wB
	}
}

function cm() {
	var f4, bs = !1,
		aTu = !1,
		aTv = -1e4,
		aTw = -1,
		aTx = 0;

	function resize(aU1) {
		f4 = 0, ab.tB() && (aTz(aU1) || bs) && (bs = !1, bb.resize(), bV.aBP.resize(), aY.dZ(), bX.dZ(), aZ.resize(), aT.resize(), aO.resize(), t.resize(), 1 <= aD.zo ? (aV.resize(!1), aU.resize(), aW.resize(), aS.resize(), aR.resize(), aN.resize(),
			aM.resize(), bB.resize(), av.resize(), aP.resize(), aQ.resize(), aL.resize(), bd.resize(), af.resize(), aX.resize(), bg.resize(), aS.a8k()) : (aa.aFa(), aa.aFb()), be.dh = !0)
	}

	function aTy(fB) {
		return fB && 128 < fB ? Math.floor(fB) : 128
	}

	function aTz(aU1) {
		var i, j, aU3, sq, a88;
		if (!(0 < h.sR)) return sq = aTy(document.documentElement.clientWidth), a88 = aTy(window.visualViewport && 2 !== a0.id ? window.visualViewport.height : document.documentElement.clientHeight), i = sq, j = a88, aU3 = 0 !== a0.id || i < j ?
			700 : 1200, aU3 = Math.min(aU3 / ((i + j) / 2), 1), aU3 = 0 === bi.eG.data[1].value ? 2 * aU3 / 3 : Math.min(aU3 + (bi.eG.data[1].value - 1) * (1 - aU3) / 2, 1), h.k = (window.devicePixelRatio || 1) * aU3, __fx.hoveringTooltip
			.canvasPixelScale = h.k, aU1 && !aTu ? (aTu = !0, document.body.removeChild(a1I)) : aTu && (aTu = !1, document.body.appendChild(a1I)), i = Math.floor(.5 + sq * h.k), j = Math.floor(.5 + a88 * h.k), i !== h.i || j !== h.j ? (h.i = i, h
				.j = j, h.min = aB1(i, j), h.max = a62(i, j), h.hu = bK.dq(i + j, 2), h.uY = i / j, a1I.width = i, a1I.height = j, a1I.style.width = sq + "px", a1I.style.height = a88 + "px", aTw = be.eI + 1e3, 1) : void 0
	}
	this.i = 0, this.j = 0, this.min = 0, this.max = 0, this.hu = 0, this.uY = 1, this.k = 1, this.sR = 0, this.da = function() {
		this.i = aTy(document.documentElement.clientWidth) + 2, this.j = aTy(document.documentElement.clientHeight) + 2
	}, this.dZ = function() {
		f4 = 1, a1I = document.getElementById("canvasA"), (uc = a1I.getContext("2d", {
			alpha: __fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aTz(0)
	}, this.j0 = function() {
		50 <= ++f4 && resize(0), -1 === aTw || be.eI < aTw || (aTw = -1, 2e3 * ++aTx >= be.eI + 8e3 ? console.log("error 3748") : a0.a1.setState(15))
	}, this.dk = function(jN) {
		bs = !0, resize(jN)
	}, this.a1x = function() {
		aTv + 1e3 > be.eI || (aTv = be.eI, resize(0))
	}
}

function dE() {
	this.aSD = new aU5, this.a0d = new aU6
}

function aU6() {
	this.a0e = function() {
		for (var gH, ej = al.k8, zc = al.k9, yG = ag.yG, a7x = this.aGu(), aB = 0; aB < ej; aB++) gH = zc[aB], b9.g5.jV(gH) || (yG[gH] = a7x);
		var pu = ag.pu,
			j9 = ag.j9,
			jA = ag.jA,
			a0L = ag.a0L,
			ej = aD.k7;
		for (aB = 0; aB < ej; aB++)(0 === a0L[aB] || jA[aB] < 1 || 2 * pu[aB] > 3 * (j9[aB] + jA[aB])) && (yG[aB] = 0);
		var a0b = 0;
		for (aB = 0; aB < ej; aB++) a0b += 0 < yG[aB];
		return a0b
	}, this.aGu = function() {
		return Math.min(65535, be.k4())
	}
}

function aU5() {
	function aUA(g, fB, hc) {
		for (var aB = 0; aB < 256; aB++) g[aB] = (g[aB] + (fB >> (aB + hc) % 30 & 1)) % 256
	}
	this.j0 = function(aU7, aU8) {
		var g = new Uint8Array(256);
		return function(g, aU7, aU8) {
				var aB, aUC = 3 + (4 + aU7) % 32768,
					aUD = 12 + aU8 % 32768,
					aUE = 17 + ((aU7 & aU8) + (aU7 | aU8) + aU7) % 32768;
				for (aB = 0; aB < 256; aB++) aUC = 1 + aUC * aUD % aUE, g[aB] = aUC % 256
			}(g, aU7, aU8), aUA(g, aU7, 2), aUA(g, aU8, 7),
			function(g) {
				var aB, fB, e4 = 0;
				for (aB = 0; aB < 3e4; aB++) fB = g[e4], g[e4] = (fB + aB + g[(e4 + aB) % 256]) % 256, e4 = (fB + aB + e4 + (fB & e4)) % 256
			}(g),
			function(g) {
				var aB, a88 = 1,
					tY = 1;
				for (aB = 0; aB < 256; aB += 2) a88 = (1 + a88) * (g[aB] + 1) % 1073741824, tY = (1 + tY) * (g[aB + 1] + 1) % 1073741824;
				return [a88, tY]
			}(g)
	}
}

function cj() {
	var aUF, aUG, hy, aUH;
	this.dZ = function() {
		var aB, eq, es, aSP, aUI, i, j, y0, hj, wS, fB, gH, ez, f2, aUL;
		if (function() {
				if (hy = !0, aUH = "rgb(" + bR.wQ[0] + "," + bR.wQ[1] + "," + bR.wQ[2] + ")", bR.aJz(bR.eP)) return 1;
				return hy = !1, 0
			}()) aUG = null;
		else {
			for (aUF = bK.dq(96, 4), aUI = 1 === bR.eP ? (aSP = 0, 160) : (aSP = 128, 32), aUH = "rgb(" + aSP + "," + aSP + "," + aSP + ")", aUG = new Array(4), aB = 3; 0 <= aB; aB--) {
				if (aUG[aB] = document.createElement("canvas"), i = aB % 2 == 0 ? bR.eu : aUF, j = aB % 2 == 0 ? aUF : bR.ev + 2 * aUF, aUG[aB].width = i, aUG[aB].height = j, wS = (hj = (y0 = aUG[aB].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, i, j)).data, aB % 2 == 0)
					for (es = aUF - 1; 0 <= es; es--)
						for (fB = aUI + Math.floor((es + 1) * (aSP - aUI) / (aUF + 1)), eq = i - 1; 0 <= eq; eq--) wS[gH = 4 * ((0 === aB ? aUF - es - 1 : es) * i + eq)] = fB, wS[gH + 1] = fB, wS[gH + 2] = fB, wS[gH + 3] = 255;
				else {
					for (eq = aUF - 1; 0 <= eq; eq--)
						for (fB = aUI + Math.floor((eq + 1) * (aSP - aUI) / (aUF + 1)), es = j - 1 - aUF; aUF <= es; es--) wS[gH = 4 * (es * i + (3 === aB ? aUF - eq - 1 : eq))] = fB, wS[gH + 1] = fB, wS[gH + 2] = fB, wS[gH + 3] = 255;
					for (f2 = 1; 0 <= f2; f2--)
						for (eq = aUF - 1; 0 <= eq; eq--)
							for (es = aUF - 1; 0 <= es; es--) ez = (Math.pow(eq * eq + es * es, .5) + 1) / (aUF + 1), fB = aUI + Math.floor((1 < ez ? 1 : ez) * (aSP - aUI)), wS[gH = 4 * ((0 === f2 ? aUF - es - 1 : es + f2 * (j - aUF)) * i + (
								1 === aB ? eq : aUF - eq - 1))] = fB, wS[gH + 1] = fB, wS[gH + 2] = fB, wS[gH + 3] = 255
				}
				y0.putImageData(hj, 0, 0)
			}
			aUL = aUI, bR.wL.fillStyle = "rgb(" + aUL + "," + aUL + "," + aUL + ")", bR.wL.fillRect(0, 0, bR.eu, 1), bR.wL.fillRect(0, bR.ev - 1, bR.eu, 1), bR.wL.fillRect(0, 0, 1, bR.ev), bR.wL.fillRect(bR.eu - 1, 0, 1, bR.ev)
		}
	}, this.xu = function() {
		var f2 = hy ? 0 : -aUF;
		aLj(f2, f2, bR.eu - 2 * f2, bR.ev - 2 * f2, bZ.aUM, bZ.aUN, bZ.aUO, bZ.aUP) || (uc.fillStyle = aUH, uc.fillRect(0, 0, h.i, h.j))
	}, this.ub = function() {
		hy || (aLi(0, -aUF, bR.eu, aUF, bZ.aUM, bZ.aUN, bZ.aUO, bZ.aUP) && uc.drawImage(aUG[0], bZ.aUQ, bZ.aUR - aUF), aLi(bR.eu, -aUF, aUF, bR.ev + 2 * aUF, bZ.aUM, bZ.aUN, bZ.aUO, bZ.aUP) && uc.drawImage(aUG[1], bZ.aUQ + bR.eu, bZ.aUR - aUF),
			aLi(0, bR.ev, bR.eu, aUF, bZ.aUM, bZ.aUN, bZ.aUO, bZ.aUP) && uc.drawImage(aUG[2], bZ.aUQ, bZ.aUR + bR.ev), aLi(-aUF, -aUF, aUF, bR.ev + 2 * aUF, bZ.aUM, bZ.aUN, bZ.aUO, bZ.aUP) && uc.drawImage(aUG[3], bZ.aUQ - aUF, bZ.aUR - aUF))
	}
}

function d3() {
	this.aGs = new aUS, this.xx = new aUT, this.y = new aUU, this.iU = new aUV, this.aUL = new aUW, this.m0 = new aUX, this.jv = new aUY, this.ks = new aUZ, this.aUa = new aUb, this.aUc = new aUd, this.mB = new aUe, this.hK = new aUf, this.lQ =
		new aUg, this.ku = new aUh, this.hN = new aUi, this.m4 = new aUj, this.q2 = new aUk, this.dZ = function() {
			this.lQ.dZ(), this.xx.dZ(), this.y.dZ(), this.iU.dZ(), this.aUL.dZ(), this.aUc.dZ(), this.m4.dZ()
		}, this.ub = function() {
			this.aUc.ub(), this.xx.ub()
		}
}

function aUY() {
	this.j0 = function(player) {
		return !!bM.mB.mC(player) && !(bM.y.pn[player] >= Math.max(3 * an.performance.lJ, aE.kL[aE.hT[player]]) || !b9.g5.mD(player, aE.kJ[aE.hT[player]], 32, 0) || !(an.iw.j0(player) || an.ik.j0(player) || an.im.j0(player)) || (function(
		player) {
			bN.fL[1] = 4, b9.g5.mF(player), bM.y.mG(player)
		}(player), 0))
	}
}

function aUj() {
	var aUm = 0,
		aUn = null;
	this.dZ = function() {
		null === aUn && (aUn = new Uint16Array(2 * bM.y.kL)), aUm = 0
	}, this.jE = function(aUo, m4) {
		var aUp = aUn;
		aUp[aUm++] = aUo, aUp[aUm++] = m4
	}, this.m5 = function(player, m3) {
		for (var aUp = aUn, ej = aUm, aB = 0; aB < ej; aB += 2)
			if (aUp[aB] === m3 && bM.ku.aUq(aUp[aB + 1]) && player === bM.y.lz[bN.fL[2]] >> 3) return !0;
		return !1
	}, this.aUr = function(aUs) {
		var m0 = bM.y.lw[aUs];
		if (!(m0 < 64)) {
			var m3 = bM.y.ly[aUs],
				aUp = aUn,
				ej = aUm;
			for (let aB = ej - 2; 0 <= aB; aB -= 2)
				if (aUp[aB] === m3) {
					{
						aUx = void 0;
						var aUx = aUp[aB + 1];
						bM.ku.aUq(aUx) && bM.m4.aV5(bN.fL[2])
					}
					aUp[aB] = aUp[ej - 2], aUp[aB + 1] = aUp[ej - 1], ej -= 2
				} aUm = ej
		}
	}, this.aUu = function(aUv, aUw) {
		for (var aUx = bM.y.ly[aUv], m3 = -1, aUp = aUn, ej = aUm, aB = 1; aB < ej; aB += 2)
			if (aUp[aB] === aUx) {
				m3 = aUp[aB - 1];
				break
			} if (-1 === m3) return !1;
		if (!bM.ku.aUq(m3)) return !1;
		var aUs = bN.fL[2],
			lS = bM.y.lx[aUs];
		if (aUw === lS[lS.length - 1]) bM.y.lx[aUv] = bM.lQ.aUy(bM.y.lx[aUv], bM.lQ.lY(lS));
		else {
			var aUz = bM.ku.aV0(lS, aUw);
			if (-1 === aUz) return !1;
			var aV1 = bM.y.m9[aUs];
			aUz === aV1 ? (aUs = bL.iS(bM.y.mA[aUs]), bM.y.lx[aUv] = bM.lQ.aV3(bM.y.lx[aUv], lS, aUz, aUw, bL.iA(lS[aUz], aUw) > bL.iA(lS[aUz], aUs))) : bM.y.lx[aUv] = bM.lQ.aV3(bM.y.lx[aUv], lS, aUz, aUw, aV1 < aUz)
		}
		return !0
	}, this.aV5 = function(aV6) {
		var lS, l0 = bM.y,
			m0 = l0.lw[aV6];
		return m0 % 64 != 5 && (lS = l0.lx[aV6], l0.aV7[aV6] = 65535 - l0.aV7[aV6], l0.m9[aV6] = lS.length - l0.m9[aV6] - 2, l0.lx[aV6] = bM.lQ.lY(lS), l0.lw[aV6] = m0 - m0 % 64 + 5, !0)
	}
}

function aUe() {
	this.mC = function(player) {
		return !!aD.data.passableWater && bM.y.lv !== bM.y.kL && bM.y.pn[player] !== bM.y.aV8 && 0 !== ag.gQ[player].length
	}, this.px = function(aSw) {
		var m0 = bN.fL[1];
		return !(4 <= m0 || !bM.ku.aV9(bL.eZ(aSw))) && ac.ee(bL.eZ(bL.iW(aSw, m0)))
	}
}

function aUS() {
	this.aGt = function(player) {
		for (var a7N = bM.y.a7N, t3 = player << 3, aB = t3 + bM.y.pn[player] - 1; t3 <= aB; aB--) this.aVA(a7N[aB])
	}, this.aVA = function(aVB) {
		var y = bM.y,
			aVC = y.lv - 1,
			aVD = y.lz[aVB],
			aVE = y.aVF[aVB],
			aVG = y.mA[aVB];
		y.lv = aVC, y.lz[aVB] = y.lz[aVC], y.mA[aVB] = y.mA[aVC], y.aV7[aVB] = y.aV7[aVC], y.a6K[aVB] = y.a6K[aVC], y.aVF[aVB] = y.aVF[aVC], y.ly[aVB] = y.ly[aVC], y.lw[aVB] = y.lw[aVC], y.aVH[aVB] = y.aVH[aVC], y.lx[aVB] = y.lx[aVC], y.m9[aVB] =
			y.m9[aVC], y.a7N[y.lz[aVB]] = aVB,
			function(aSv) {
				var player = aSv >> 3,
					y = bM.y,
					ej = y.pn[player] - 1,
					aVK = (player << 3) + ej;
				y.pn[player] = ej, aVK !== aSv && (y.a7N[aSv] = y.a7N[aVK], y.lz[y.a7N[aSv]] = aSv)
			}(aVD), bM.iU.iU[bL.iT(y.mA[aVB])][y.aVF[aVB]] = aVB, aVC = bL.iT(aVG), aVD = aVE, aVC = bM.iU.iU[aVC], y = aVC.pop(), aVD !== aVC.length && (aVC[aVD] = y, bM.y.aVF[y] = aVD)
	}
}

function aUT() {
	var aVM, aVN = 8,
		aVO = null;

	function aVT(wS, eV, e4) {
		eV *= 4;
		wS[eV] = 255, wS[1 + eV] = 255, wS[2 + eV] = e4, wS[3 + eV] = 255
	}

	function aVV(hm, aUH) {
		var eq, es, i4, eV, aVY, aVZ, hg = aVN,
			hj = b9.qV.getImageData(hm, hg, hg),
			wS = hj.data,
			l0 = (hg >> 1) - .5,
			aVb = b9.qd.a2B(aUH, .5);
		for (b9.qd.a2D(aUH, aVb, 300) || b9.qd.a2F(aUH, 100), es = 0; es < hg; es++)
			for (eq = 0; eq < hg; eq++) aVZ = (hg - 1.5) * (hg - 1.5) / 4, wS[eV = 4 * (es * hg + eq)] = (aVY = (i4 = (i4 = eq - l0) * i4 + (i4 = es - l0) * i4) <= (hg - 4.5) * (hg - 4.5) / 4 ? aVb : aUH)[0], wS[1 + eV] = aVY[1], wS[2 + eV] = aVY[2],
				wS[3 + eV] = aVZ < i4 ? 0 : 255;
		hm.putImageData(hj, 0, 0)
	}
	this.dZ = function() {
		var e4, hg, a2d, hm, hj, wS;
		(aVM = aVM || new Array(aD.eg)).fill(null), e4 = 255, hg = aVN + 4, a2d = b9.qV.wH(hg, hg), hm = b9.qV.getContext(a2d, !0), hj = b9.qV.getImageData(hm, hg, hg), aVT(wS = hj.data, hg + 1, e4), aVT(wS, hg + 2, e4), aVT(wS, 2 * hg + 1, e4),
			aVT(wS, 2 * hg - 3, e4), aVT(wS, 2 * hg - 2, e4), aVT(wS, 3 * hg - 2, e4), aVT(wS, hg * (hg - 3) + 1, e4), aVT(wS, hg * (hg - 2) + 1, e4), aVT(wS, hg * (hg - 2) + 2, e4), aVT(wS, hg * (hg - 2) - 2, e4), aVT(wS, hg * (hg - 1) - 3, e4),
			aVT(wS, hg * (hg - 1) - 2, e4), hm.putImageData(hj, 0, 0), aVO = a2d,
			function() {
				if (aD.he) {
					for (var a2d = new Array(aD.x4), ha = (a2d.fill(null), 1 - aD.x5), aB = aD.x4 - 1; 0 <= aB; aB--) a2d[aB] = function(aVW) {
						var a2d = b9.qV.wH(aVN, aVN),
							hm = b9.qV.getContext(a2d, !0),
							g = bN.fI;
						return g.set(bf.aVX[bf.kU[aVW]]), aVV(hm, g), a2d
					}(aB + ha);
					var ej = aD.eg,
						aVS = aVM,
						eh = bf.eh;
					for (aB = 0; aB < ej; aB++) aVS[aB] = a2d[eh[aB] - ha]
				}
			}()
	}, this.ub = function() {
		var aB, player, aVc, aLr, hT, i3, aVe, aVg, aVh, mA = bM.y.mA,
			lz = bM.y.lz,
			a6K = bM.y.a6K,
			aVH = bM.y.aVH,
			aVi = aVM,
			aVj = aD.eT,
			ej = bM.y.lv,
			aVk = h.i,
			aVl = h.j,
			aVm = bR.eu << 4,
			eY = hv,
			eN = eY / aVN,
			n4 = iL / eY,
			n5 = iM / eY,
			i4 = (aVk + iL) / eY - n4,
			i7 = (aVl + iM) / eY - n5,
			hm = uc;
		for (hm.imageSmoothingEnabled = eY < 9, b9.qV.textAlign(hm, 1), b9.qV.textBaseline(hm, 1), aB = 0; aB < ej; aB++) player = lz[aB] >> 3, hT = a6K[aB], aVc = .9 + .1 * Math.log10(hT), aLr = (i3 = mA[aB]) % aVm / 16 - aVc, i3 = aVl * (Math
			.floor(i3 / aVm) / 16 - aVc - n5) / i7, aVe = -2 * (aVh = eY * aVc) * (1 + (aVg = +(player === aVj)) / 8), aVg = aVg * aVh / 4, (aVh = aVk * (aLr - n4) / i4) < aVe || i3 < aVe || aVk + aVg < aVh || aVl + aVg < i3 || (aLr = 2 *
			aVc * eN, aVe = aVc * eY, null === (aVg = aVi[player]) && (aVi[player] = aVg = function(player) {
				var a2d = b9.qV.wH(aVN, aVN);
				return aVV(b9.qV.getContext(a2d, !0), ac.a6y(player)), a2d
			}(player)), player === aVj && (hm.setTransform(aLr, 0, 0, aLr, aVh - 2 * aLr, i3 - 2 * aLr), hm.drawImage(aVO, 0, 0)), hm.setTransform(aLr, 0, 0, aLr, aVh, i3), hm.drawImage(aVg, 0, 0), (aVc = Math.floor(function(hT) {
				if (hT < 1e3) return .42;
				if (hT < 1e4) return .34;
				if (hT < 1e6) return .26;
				if (hT < 1e8) return .19;
				return .15
			}(hT) * aVe)) < 6) || (hm.setTransform(1, 0, 0, 1, 0, 0), hm.fillStyle = aVH[aB] ? bA.oC : bA.ne, hm.font = b9.qV.sJ(1, aVc), hm.fillText(b9.rU.z5(hT), aVh + aVe, i3 + aVe + .1 * aVc));
		hm.imageSmoothingEnabled = !1, hm.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aUd() {
	var aVp;
	this.dZ = function() {
		if (aD.he) {
			var ha = 1 - aD.x5;
			aVp = new Array(aD.x4 + ha);
			for (var aB = aD.x4 - 1; 0 <= aB; aB--) aVp[aB + ha] = bO.y.aVr(20, bf.aVs[bf.kU[aB + ha]])
		} else aVp = [bO.y.aVr(20, bf.aVs[7])]
	}, this.ub = function() {
		var nO = hv;
		if (!(5 <= nO)) {
			var aVk = h.i,
				aVl = h.j,
				n4 = iL / nO,
				n5 = iM / nO,
				nH = (aVk + iL) / nO,
				nI = (aVl + iM) / nO,
				gI = -20 * nO,
				aVu = .5 * gI,
				aVm = bR.eu << 4,
				ej = bM.y.lv,
				mA = bM.y.mA,
				lz = bM.y.lz,
				eh = bf.eh,
				a2d = aVp,
				hm = uc;
			3 < nO && (hm.globalAlpha = .5 * (5 - nO));
			for (var aB = 0; aB < ej; aB++) {
				var i3 = mA[aB],
					eq = aVk * (i3 % aVm / 16 - n4) / (nH - n4) + aVu,
					i3 = aVl * (Math.floor(i3 / aVm) / 16 - n5) / (nI - n5) + aVu;
				aVk < eq || aVl < i3 || eq < gI || i3 < gI || (hm.setTransform(nO, 0, 0, nO, eq, i3), hm.drawImage(a2d[eh[lz[aB] >> 3]], 0, 0))
			}
			hm.globalAlpha = 1, hm.setTransform(nO, 0, 0, nO, 0, 0)
		}
	}
}

function aUh() {
	this.aVx = function(player, id) {
		for (var aVy = ag.gQ[player], ej = aVy.length, aB = 0; aB < ej; aB++)
			if (bL.hw(aVy[aB], id)) return !0;
		return !1
	}, this.aVz = function(player, eV) {
		for (var iC, aW0, eN, aVy = ag.gQ[player], ej = aVy.length, i = bR.eu, aW2 = bL.er(eV), aW3 = bL.et(eV), ep = -1, min = bR.eu * bR.eu + bR.ev * bR.ev, id = ac.eR(bL.eZ(eV)), aB = 0; aB < ej; aB++)(aW0 = (aW0 = aW2 - (iC = (eN = aVy[
			aB]) >> 2) % i) * aW0 + (aW0 = aW3 - ~~((.5 + iC) / i)) * aW0) < min && bL.hw(eN, id) && (min = aW0, ep = iC);
		return ep
	}, this.kv = function(iB, iC) {
		for (var id = ac.eR(bL.eZ(iC)), hx = bL.hp, eN = bL.eZ(iB), aW4 = -1, aB = 0; aB < 4; aB++) {
			var eY = eN + hx[aB];
			ac.hy(eY) && ac.eR(eY) === id && (-1 === aW4 || bL.iD(bL.eX(eY), iC) < bL.iD(aW4, iC)) && (aW4 = bL.eX(eY))
		}
		return aW4
	}, this.lT = function(player, eV) {
		for (var hx = bL.hp, eN = bL.eZ(eV), aB = 0; aB < 4; aB++) {
			var eY = eN + hx[aB];
			if (ac.gJ(eY) && ac.aGX(player, eY)) return !0
		}
		return !1
	}, this.lU = function(player, eV) {
		for (var hx = bL.hp, eN = bL.eZ(eV), aB = 0; aB < 4; aB++) {
			var eY = eN + hx[aB];
			if (ac.ea(eY)) return !0;
			if (ac.gJ(eY)) {
				eY = ac.eb(eY);
				if (player !== eY && ec(player, eY)) return !0
			}
		}
		return !1
	}, this.m1 = function(eV) {
		for (var hx = bL.hp, eN = bL.eZ(eV), aB = 0; aB < 4; aB++) {
			var eY = eN + hx[aB];
			if (ac.gJ(eY)) {
				eY = ac.eb(eY);
				if (b9.g5.jV(eY)) return eY
			}
		}
		return -1
	}, this.aV9 = function(eN) {
		if (ac.hy(eN))
			for (var hx = bL.hp, aB = 0; aB < 4; aB++)
				if (ac.ee(eN + hx[aB])) return !0;
		return !1
	}, this.n3 = function(player, id) {
		for (var t3 = player << 3, t4 = t3 + bM.y.pn[player], ly = bM.y.ly, a7N = bM.y.a7N, aB = t3; aB < t4; aB++) {
			var a7O = a7N[aB];
			if (ly[a7O] === id) return a7O
		}
		return -1
	}, this.n8 = function(player) {
		return 0 === bM.y.pn[player] ? -1 : bM.y.a7N[player << 3]
	}, this.a5M = function(lK, lL) {
		var ej = bM.y.lv;
		if (ej < 1) return -1;
		for (var mA = bM.y.mA, aW5 = 80, aO7 = -1, aB = 0; aB < ej; aB++) {
			var ez = bL.i0(lK, lL, mA[aB]);
			ez < aW5 && (aW5 = ez, aO7 = aB)
		}
		return function(aB, lK, lL) {
			if (aB < 0) return;
			var aWA = bM.y.mA[aB],
				aWB = bL.i6(aWA),
				aWA = bL.i9(aWA),
				aB = 20 * (.9 + .1 * Math.log10(bM.y.a6K[aB]));
			return aB = Math.max(aB, bL.iN(b9.qV.t8(.02, 1.7))), bK.aLq(bL.i5(lK), bL.i8(lL), aWB, aWA, aB)
		}(aO7, lK, lL) ? aO7 : -1
	}, this.aUq = function(n1) {
		for (var ej = bM.y.lv, ly = bM.y.ly, aB = 0; aB < ej; aB++)
			if (ly[aB] === n1) return bN.fL[2] = aB, !0;
		return !1
	}, this.aGp = function(player) {
		for (var t3 = player << 3, t4 = t3 + bM.y.pn[player], a7N = bM.y.a7N, a6K = bM.y.a6K, hT = 0, aB = t3; aB < t4; aB++) hT += a6K[a7N[aB]];
		return hT
	}, this.aW7 = function(player, aV6) {
		aV6 = bM.y.lx[aV6];
		return this.lT(player, aV6[aV6.length - 1])
	}, this.aW8 = function(iB, iC, ez, aW9) {
		var iF = bL.er(iB),
			iB = bL.et(iB),
			iH = bL.er(iC),
			iC = bL.et(iC);
		return ez = Math.max(ez, 1), iF += bK.dq((iH - iF) * aW9, ez), iB += bK.dq((iC - iB) * aW9, ez), bL.f7(iF, iB)
	}, this.aV0 = function(lS, eV) {
		for (var ej = lS.length - 1, eq = bL.er(eV), es = bL.et(eV), aB = 0; aB < ej; aB++) {
			var iB = lS[aB],
				iC = lS[aB + 1],
				n4 = bL.er(iB),
				iB = bL.et(iB),
				nH = bL.er(iC),
				iC = bL.et(iC);
			if (!(eq !== n4 && eq !== nH && Math.sign(eq - n4) === Math.sign(eq - nH) || es !== iB && es !== iC && Math.sign(es - iB) === Math.sign(es - iC))) {
				if (n4 === nH || iB === iC) return aB;
				if (Math.abs(eq - n4) === Math.abs(es - iB) && Math.abs(eq - nH) === Math.abs(es - iC)) return aB
			}
		}
		return -1
	}
}

function aUi() {
	function aWF(player, aV6) {
		aV6 = bL.iS(bM.y.mA[aV6]), aV6 = ac.eR(bL.eZ(aV6));
		return !!bM.ku.aVx(player, aV6)
	}

	function aWD(player) {
		return bM.mB.mC(player) && !bM.lQ.lW()
	}
	this.hO = function(player, eV) {
		return !!aWD(player) && -1 !== (eV = function(player, eV) {
			for (var ej = bM.y.lv, mA = bM.y.mA, lz = bM.y.lz, aW5 = bL.hr(), aO7 = -1, aB = 0; aB < ej; aB++) {
				var ez = bL.iA(eV, bL.iS(mA[aB]));
				ez < aW5 && b9.g5.kj(player, lz[aB] >> 3) && (aW5 = ez, aO7 = aB)
			}
			return aO7
		}(player, eV)) && !!aWF(player, eV) && (bN.fL[3] = bM.y.ly[eV], !0)
	}, this.p8 = function(player, n1) {
		return !!aWD(player) && !!bM.ku.aUq(n1) && !!aWF(player, bN.fL[2])
	}, this.q1 = function(player, n1) {
		return !! function(player, n1) {
			if (aWD(player) && bM.ku.aUq(n1)) {
				n1 = bN.fL[2];
				if (b9.g5.kj(player, bM.y.lz[n1] >> 3)) {
					if (function(player, aV6) {
							return bM.ku.aW7(player, aV6) && (bN.g[0] = bM.lQ.lY(bM.y.lx[aV6]), bN.fL[1] = 6, !0)
						}(player, n1)) return 1;
					var aWH = bL.iS(bM.y.mA[n1]),
						aWK = bM.ku.aVz(player, aWH);
					if (-1 !== aWK) {
						aWK = bL.iA(aWK, aWH), n1 = function(aV6, aWL, aWH) {
							var lS = bM.y.lx[aV6],
								aV6 = bM.y.m9[aV6],
								aWN = bL.iA(aWH, lS[aV6 + 1]);
							if (aWL <= aWN) return bM.ku.aW8(aWH, lS[aV6 + 1], aWN, aWL);
							for (var ez = aWL - aWN, ej = lS.length - 1, aB = aV6 + 1; aB < ej; aB++) {
								var aWO = bL.iA(lS[aB], lS[aB + 1]);
								if (ez <= aWO) return bM.ku.aW8(lS[aB], lS[aB + 1], aWO, ez);
								ez -= aWO
							}
							return lS[ej]
						}(n1, aWK, aWH);
						if (bM.ks.py(player, n1, 1)) return bN.fL[1] = 6, 1
					}
				}
			}
			return
		}(player, n1) && (player = bN.fL[2], bM.y.lw[player] = 64 + bM.y.lw[player] % 64, bM.m4.jE(n1, bM.y.mE), !0)
	}
}

function aUX() {
	function aWT(player, hT, aWR, aWH) {
		var jH;
		if (ac.ea(aWR)) jH = aD.eg;
		else {
			if ((jH = ac.eb(aWR)) === player) return void bc.g9(player, hT - b9.g5.g8(player, hT), 12);
			if (!ec(player, jH)) return void b7.kA.pN(player, jH, hT)
		}
		ad.jT(player, jH) || ad.jl(player) ? (ag.gB[player].push(aWH << 2), ad.jE(player, hT, jH), aF.jF(player, !0)) : bc.g9(player, hT, 12)
	}
	this.j0 = function() {
		for (var lw = bM.y.lw, mA = bM.y.mA, aV7 = bM.y.aV7, aB = bM.y.lv - 1; 0 <= aB; aB--) 65535 === aV7[aB] && function(aB, aWH, hb) {
			if (6 === hb) {
				if (bM.m4.aUu(aB, aWH)) return bM.y.m9[aB]++, bM.y.aV7[aB] = 0, 0
			} else {
				var player = bM.y.lz[aB] >> 3,
					aB = bM.y.a6K[aB];
				bc.aWS(player), hb < 4 ? aWT(player, aB, aWH + bL.ho[hb] << 2, aWH) : 4 === hb ? function(player, hT, aWH) {
					var aB, en, hx = bL.hp,
						eY = bL.eZ(aWH);
					for (aB = 0; aB < 4; aB++)
						if (en = eY + hx[aB], ac.ea(en)) return aWT(player, hT, en, aWH);
					for (aB = 0; aB < 4; aB++)
						if (en = eY + hx[aB], ac.gJ(en) && !ac.aGX(player, en)) return aWT(player, hT, en, aWH);
					for (aB = 0; aB < 4; aB++)
						if (en = eY + hx[aB], ac.gJ(en)) return aWT(player, hT, en, aWH)
				}(player, aB, aWH) : 5 === hb && function(player, hT, aWH) {
					var aB, en, hx = bL.hp,
						eY = bL.eZ(aWH);
					for (aB = 0; aB < 4; aB++)
						if (en = eY + hx[aB], ac.gJ(en) && ac.aGX(player, en)) return aWT(player, hT, en, aWH);
					for (aB = 0; aB < 4; aB++)
						if (en = eY + hx[aB], ac.gJ(en)) return aWT(player, hT, en, aWH);
					for (aB = 0; aB < 4; aB++)
						if (en = eY + hx[aB], ac.ea(en)) return aWT(player, hT, en, aWH)
				}(player, aB, aWH)
			}
			return 1
		}(aB, bL.iS(mA[aB]), lw[aB] % 64) && (bM.m4.aUr(aB), bM.aGs.aVA(aB))
	}, this.aWQ = function(player, eV, hb, n1) {
		if (!(4 <= hb)) {
			var aVj = aD.eT;
			if (b9.g5.gv(aVj) && ec(player, aVj) && player !== aVj && 0 !== ag.gQ[aVj].length) {
				var aWR = eV + bL.ho[hb] << 2;
				if (ac.ea(aWR) || ec(player, ac.eb(aWR))) {
					for (var ex = !1, aB = 0; aB < 4; aB++)
						if (aWR = eV + bL.ho[aB] << 2, ac.ee(aWR) && !ac.ea(aWR) && ac.eb(aWR) === aVj) {
							ex = !0;
							break
						} ex && (aN.a6T(719, 0), aN.yH(180, L(433, [ag.a0N[player]]), 719, player, bA.oB, bA.nb, -1, !0, void 0, {
						f3: 1,
						n1: n1
					}))
				}
			}
		}
	}
}

function aUU() {
	this.kL = 512, this.aV8 = 8, this.lv = 0, this.mE = 0, this.lz = new Uint16Array(this.kL), this.mA = new Uint32Array(this.kL), this.aV7 = new Uint16Array(this.kL), this.a6K = new Uint32Array(this.kL), this.aVF = new Uint16Array(this.kL), this
		.ly = new Uint16Array(this.kL), this.lw = new Uint8Array(this.kL), this.aVH = new Uint8Array(this.kL), this.lx = new Array(this.kL), this.m9 = new Uint16Array(this.kL), this.pn = new Uint8Array(aD.eg), this.a7N = new Uint16Array(this.aV8 * aD
			.eg), this.dZ = function() {
			this.lv = 0, this.mE = 0, this.pn.fill(0), this.lx.fill(null)
		}, this.mG = function(player) {
			var hT = bN.fG[0],
				m0 = bN.fL[1],
				lS = bN.g[0],
				aWW = this.mE,
				ej = this.lv,
				aWX = bL.iR(lS[0]),
				aWY = this.pn[player],
				aWZ = (player << 3) + aWY;
			this.lz[ej] = aWZ, this.mA[ej] = aWX, this.aV7[ej] = 0, hT < 60 ? (b9.g5.g6(player, 60 - hT), this.a6K[ej] = 60) : this.a6K[ej] = hT, this.aVF[ej] = bM.iU.mG(ej, bL.iT(aWX)), this.ly[ej] = aWW, this.lw[ej] = m0, this.aVH[ej] = 0, this.lx[
				ej] = lS, this.m9[ej] = 0, this.mE = (aWW + 1) % 65536, this.pn[player] = aWY + 1, this.a7N[aWZ] = ej, this.lv++, bM.m0.aWQ(player, lS[lS.length - 1], m0, aWW)
		}, this.j0 = function() {
			bM.m0.j0();
			for (var gH = aD.eT, dp = bM.ku.aGp(gH), s6 = (! function(s6) {
					for (var aWe, mA = s6.mA, a6K = s6.a6K, aVH = s6.aVH, aV7 = s6.aV7, aVF = s6.aVF, lx = s6.lx, m9 = s6.m9, s6 = s6.lv, aVm = bR.eu << 4, aB = s6 - 1; 0 <= aB; aB--) {
						var aWf = mA[aB],
							lS = lx[aB],
							aWg = m9[aB],
							aWX = bL.iR(lS[aWg]),
							aWh = bL.iR(lS[aWg + 1]),
							aWi = aWX % aVm,
							aWX = ~~((aWX + .5) / aVm),
							aWk = aWh % aVm,
							aWl = ~~((aWh + .5) / aVm),
							aWm = aWk - aWi,
							aWn = aWl - aWX,
							em = Math.max(~~Math.sqrt(aWm * aWm + aWn * aWn + .5), 1),
							aWo = a6K[aB],
							aWo = (aWo = aVH[aB] ? 4e4 : 25e4 + Math.min(20 * aWo, 3e5) + Math.min(aWo >> 3, 5e4), aV7[aB] + Math.max(~~((aWo + .5) / em), 1));
						65535 <= aWo ? aWg + 2 < lS.length ? (m9[aB] = aWg + 1, mA[aB] = aWe = function(aB, aWp, aWi, aWj, aWg, em, lS, aVm) {
							aWp = Math.min(aWp - 65535, 65535);
							var lS = bL.iR(lS[aWg + 2]),
								aWg = lS % aVm - aWi,
								lS = ~~((lS + .5) / aVm) - aWj,
								aWs = Math.max(~~Math.sqrt(aWg * aWg + lS * lS + .5), 1);
							return aWp = Math.min(Math.floor((em * aWp + .5) / aWs), 65534), bM.y.aV7[aB] = aWp, aWi + bK.dq(aWp * aWg, 65535) + aVm * (aWj + bK.dq(aWp * lS, 65535))
						}(aB, aWo, aWk, aWl, aWg, em, lS, aVm)) : (mA[aB] = aWe = aWh, aV7[aB] = 65535) : (aV7[aB] = aWo, mA[aB] = aWe = aWi + bK.dq(aWo * aWm, 65535) + aVm * (aWX + bK.dq(aWo * aWn, 65535))), aVF[aB] = bM.iU.aWr(aVF[aB],
							aWf, aWe)
					}
				}(this), ! function(s6) {
					if (be.k4() % 2 == 1) {
						var aB, hc, l0, f3, f4, aWt, yj, aWu, hB, n4, n5, aWX, aWv, a8p, aWx, ki, ej = s6.lv,
							mA = s6.mA,
							lz = s6.lz,
							a6K = s6.a6K,
							aVH = s6.aVH,
							iU = bM.iU.iU,
							aWz = iU.length,
							aX0 = bM.iU.aX0,
							aVm = bR.eu << 4,
							aX1 = aD.he,
							aSj = bf.eh,
							gI = (ej - 1) * (bK.dq(be.k4(), 2) % 2);
						for (aB = 0; aB < ej; aB++)
							for (hc = Math.abs(aB - gI), aWX = mA[hc], l0 = bL.iT(aWX), hB = lz[hc] >> 3, n4 = aWX % aVm, n5 = ~~((aWX + .5) / aVm), aWx = a6K[hc], f3 = 0; f3 < 9; f3++)
								if (!((aWt = l0 + aX0[f3]) < 0 || aWz <= aWt))
									for (aWu = iU[aWt], yj = aWu.length, f4 = 0; f4 < yj; f4++) aWv = aWu[f4], ki = lz[aWv] >> 3, hB == ki || aX1 && aSj[hB] === aSj[ki] && aSj[hB] || (ki = mA[aWv], (a8p = n4 - ki % aVm) * a8p + (a8p = n5 - ~~
										((ki + .5) / aVm)) * a8p < 14400 && (ki = a6K[aWv], a8p = ki <= aWx ? Math.max(1, bK.dq(ki + bK.dq(aWx - ki, 10), 10)) : Math.max(1, bK.dq(aWx, 10)), a6K[aWv] = Math.max(ki - a8p, 0), aVH[aWv] =
										4))
					}
				}(this), ! function(s6) {
					if (be.k4() % 5 == 3)
						for (var a6K = s6.a6K, ej = s6.lv, aB = 0; aB < ej; aB++) {
							var hT = a6K[aB];
							a6K[aB] = Math.max(hT - Math.max(1, hT >> 7), 0)
						}
				}(this), this), a6K = s6.a6K, aVH = s6.aVH, aB = s6.lv - 1; 0 <= aB; aB--) aVH[aB] = aVH[aB] >> 1, 0 === a6K[aB] && (bM.m4.aUr(aB), bM.aGs.aVA(aB));
			bc.g9(gH, dp - bM.ku.aGp(gH), 15)
		}
}

function aUV() {
	this.aX2 = 32, this.eq = 0, this.es = 0, this.iV = 0, this.aX3 = 0, this.aX4 = 4, this.iU = null, this.aX0 = new Int16Array(9), this.dZ = function() {
		this.iV = 1 + bK.dq(bR.eu - 1, this.aX2), this.aX3 = 1 + bK.dq(bR.ev - 1, this.aX2), this.iU = new Array(this.iV * this.aX3), b9.qd.a2A(this.iU);
		var eq, es, aX0 = this.aX0,
			i = this.iV;
		for (eq = -1; eq <= 1; eq++)
			for (es = -1; es <= 1; es++) aX0[3 * (1 + es) + 1 + eq] = es * i + eq
	}, this.mG = function(aX6, aB) {
		return this.iU[aB].push(aX6), this.iU[aB].length - 1
	}, this.aWr = function(aX7, aWX, aWh) {
		var aX8, aX9, aWX = bL.iT(aWX),
			aWh = bL.iT(aWh);
		return aWX === aWh ? aX7 : (aX8 = this.iU[aWX].pop(), this.iU[aWX].length === aX7 ? this.mG(aX8, aWh) : (aX9 = this.iU[aWX][aX7], this.iU[aWX][aX7] = aX8, bM.y.aVF[aX8] = aX7, this.mG(aX9, aWh)))
	}
}

function aUZ() {
	this.kt = function(player, aXA) {
		return -1 !== aXA && !!bM.ku.lU(player, aXA) && this.py(player, aXA, 0)
	}, this.py = function(player, aXA, aXB) {
		player = function(player, aXA, aXB) {
			var aWK = bM.ku.aVz(player, aXA);
			if (-1 === aWK) return -1;
			aWK = bM.ku.kv(aWK, aXA);
			if (-1 === aWK) return -1;
			var lO = bM.lQ.lV(aWK, aXA);
			if (0 <= lO) return lO;
			if (bM.lQ.lW()) return -1;
			if (0 <= (lO = bM.lQ.lV(aXA, aWK))) return bM.lQ.lX(bM.lQ.lY(bM.lQ.get(lO)));
			if (aWK === aXA) return bM.lQ.lX(new Uint32Array([aWK, aXA]));
			if (0 <= (lO = bM.aUa.py(aWK, aXA))) return lO;
			return aXB ? function(aXF, player) {
				var fQ = bN.fQ,
					eG = (fQ.fill(0), [aXF]),
					hq = (fQ[aXF] = 1, bL.hq),
					aXG = -1,
					ej = eG.length;
				for (; - 1 === aXG && ej;) {
					for (var g = [], aB = 0; aB < ej; aB++)
						for (var eV = eG[aB], a3z = fQ[eV], em = 0; em < 8; em++) {
							var w1, a0X, ep = eV + hq[em],
								eN = 4 * ep;
							ac.hy(eN) ? (w1 = fQ[ep], a0X = a3z + 5 + ((1 & em) << 1), 0 === w1 ? (g.push(ep), fQ[ep] = a0X) : fQ[ep] = Math.min(a0X, w1)) : -1 === aXG && em % 2 == 0 && ac.xq(player, eN) && (aXG = eV)
						}
					ej = (eG = g).length
				}
				return -1 !== aXG ? function(iB, aXI) {
					var hq = bL.hq,
						aXJ = -1,
						hb = 0,
						ma = [];
					for (; aXI !== iB;)(hb = function(eV, hb) {
						var fQ = bN.fQ,
							hq = bL.hq,
							a3z = fQ[eV];
						if (a3z - fQ[eV + hq[hb]] != 5 + ((1 & hb) << 1))
							for (var f2 = 0; f2 < 8; f2++) {
								var em = f2 + hb + 6 & 7;
								if (a3z - fQ[eV + hq[em]] == 5 + ((1 & em) << 1)) return em
							}
						return hb
					}(aXI, hb)) !== aXJ && (ma.push(aXI), aXJ = hb), aXI += hq[hb];
					ma.push(iB);
					var lO = bM.lQ.lV(ma[0], iB);
					if (0 <= lO) return lO;
					return bM.lQ.lX(new Uint32Array(ma))
				}(aXF, aXG) : -1
			}(aXA, player) : -1
		}(player, aXA, aXB);
		return -1 !== player && (bN.g[0] = bM.lQ.get(player), !0)
	}
}

function aUb() {
	function aXL(gy, iG, iI) {
		for (var jO = Math.min(iG, iI), nM = Math.max(iG, iI), es = jO + 1; es < nM; es++)
			if (!ac.hy(bL.iO(gy, es))) return;
		return 1
	}

	function aXM(h0, iF, iH) {
		for (var jO = Math.min(iF, iH), nM = Math.max(iF, iH), eq = jO + 1; eq < nM; eq++)
			if (!ac.hy(bL.iO(eq, h0))) return;
		return 1
	}

	function aXN(iF, iG, iH, iI, aXD, aXA) {
		for (var ej = Math.min(Math.abs(iH - iF), Math.abs(iI - iG)), i4 = Math.sign(iH - iF), i7 = Math.sign(iI - iG), aB = 0; aB < ej; aB++)
			if (!ac.hy(bL.iO(iF += i4, iG += i7))) return null;
		return iF === iH ? aXL(iF, iG, iI) ? new Uint32Array([aXD, bL.f7(iF, iG), aXA]) : null : aXM(iG, iF, iH) ? new Uint32Array([aXD, bL.f7(iF, iG), aXA]) : null
	}
	this.py = function(aXD, aXA) {
		aXD = function(aXD, aXA) {
			var iF = bL.er(aXD),
				iG = bL.et(aXD),
				iH = bL.er(aXA),
				iI = bL.et(aXA);
			if (iF === iH) {
				if (aXL(iF, iG, iI)) return new Uint32Array([aXD, aXA])
			} else {
				if (iG !== iI) return aXN(iF, iG, iH, iI, aXD, aXA) || aXN(iH, iI, iF, iG, aXD, aXA);
				if (aXM(iG, iF, iH)) return new Uint32Array([aXD, aXA])
			}
			return null
		}(aXD, aXA);
		return null === aXD ? -1 : bM.lQ.lX(aXD)
	}
}

function aUg() {
	var aXO = [];
	this.dZ = function() {
		aXO = []
	}, this.lW = function() {
		return 65536 === aXO.length
	}, this.lV = function(aXD, aXA) {
		for (var lQ = aXO, ej = lQ.length, aB = 0; aB < ej; aB++) {
			var gH = lQ[aB];
			if (gH[0] === aXD && gH[gH.length - 1] === aXA) return aB
		}
		return -1
	}, this.lY = function(lS) {
		var aXP = new Uint32Array(lS.length);
		return aXP.set(lS), aXP.reverse()
	}, this.aUy = function(hB, ki) {
		var gC = hB.length - 1,
			aXQ = new Uint32Array(gC + ki.length);
		return aXQ.set(hB, 0), aXQ.set(ki, gC), aXQ
	}, this.aV3 = function(hB, ki, aAH, eV, aXR) {
		aXR && (aAH = (ki = this.lY(ki)).length - aAH - 2);
		aXR = ki.subarray(aAH + 1 + (eV === ki[aAH + 1])), eV = new Uint32Array(hB.length + aXR.length);
		return eV.set(hB, 0), eV.set(aXR, hB.length), eV
	}, this.lX = function(lS) {
		return aXO.push(lS), aXO.length - 1
	}, this.get = function(aB) {
		return aXO[aB]
	}, this.lR = function() {
		return aXO
	}, this.aXT = function(aXD, aXA) {
		return null
	}
}

function aUk() {
	this.j0 = function(player, n1) {
		player = bM.ku.n3(player, n1);
		return !(player < 0 || !bM.m4.aV5(player) || (bM.m4.aUr(player), 0))
	}
}

function aUW() {
	var yO = 32,
		yN = new Array(2);

	function wH(f4) {
		var eq, es, eV, i7, i4, hg = yO,
			a2d = b9.qV.wH(hg, hg),
			hm = b9.qV.getContext(a2d, !0),
			hj = b9.qV.getImageData(hm, hg, hg),
			wS = hj.data,
			l0 = (hg >> 1) - .5,
			l1 = Math.sqrt(l0 * l0);
		for (wS.fill(255), es = 0; es < hg; es++)
			for (eq = 0; eq < hg; eq++) i4 = eq - l0, i7 = es - l0, eV = 4 * (es * hg + eq), i4 = 714 * (l1 - Math.sqrt(i4 * i4 + i7 * i7)) / l1, wS[2 + eV] = f4, wS[3 + eV] = 255 < i4 ? 0 : i4;
		return hm.putImageData(hj, 0, 0), a2d
	}
	this.aXU = -1, this.dZ = function() {
		this.aXU = -1, yN[0] || (yN[0] = wH(255), yN[1] = wH(0))
	}, this.aXV = function(hm, eN, eq, es, e3, aB) {
		b9.g5.gv(aD.eT) && (hm.setTransform(eN *= 4 / 3 * .625, 0, 0, eN, eq - (e3 *= 4 / 3), es - e3), hm.drawImage(yN[+(bM.y.ly[aB] === this.aXU)], 0, 0))
	}
}

function aUf() {
	function aT1(eq, ej, es, aXW, a8v, fA, player) {
		if (!(es < 1 || a8v < es))
			for (var aB = 0; aB <= ej; aB++) {
				var eN = bL.iO(eq, es);
				if (bM.ku.aV9(eN) && !b9.qd.has(aXW, ac.eR(eN)) && ac.xj(eN, player)) return eN >> 2;
				eq += fA
			}
		return -1
	}

	function aT5(es, ej, eq, aXW, aSz, fA, player) {
		if (!(eq < 1 || aSz < eq)) {
			ej = Math.max(ej, 0);
			for (var aB = 0; aB <= ej; aB++) {
				var eN = bL.iO(eq, es);
				if (bM.ku.aV9(eN) && !b9.qd.has(aXW, ac.eR(eN)) && ac.xj(eN, player)) return eN >> 2;
				es += fA
			}
		}
		return -1
	}

	function aT9(iB, iC, aSw) {
		return -1 !== iC && (-1 === iB || bL.iD(iC, aSw) < bL.iD(iB, aSw)) ? iC : iB
	}
	this.hL = function(player, aSw) {
		if (bM.mB.mC(player))
			for (var aSx = bL.hr(), aXW = [];;) {
				var aXG = function(aSw, aSx, aXW, player) {
					for (var gy = bL.er(aSw), h0 = bL.et(aSw), aSz = bR.eu - 2, a8v = bR.ev - 2, aT0 = -1, em = 0; em < aSx; em++) {
						var a8u = Math.max(gy - em, 1),
							aKK = Math.max(h0 - em, 1),
							xf = Math.min(gy + em, aSz),
							xe = Math.min(h0 + em, a8v),
							iB = aT1(gy, xf - gy, h0 - em, aXW, a8v, 1, player),
							iC = aT1(gy - 1, gy - a8u - 1, h0 - em, aXW, a8v, -1, player),
							xf = aT1(gy, xf - gy, h0 + em, aXW, a8v, 1, player),
							a8u = aT1(gy - 1, gy - a8u - 1, h0 + em, aXW, a8v, -1, player),
							aT4 = aT5(h0, xe - h0 - 1, gy - em, aXW, aSz, 1, player),
							aT6 = aT5(h0 - 1, h0 - aKK - 2, gy - em, aXW, aSz, -1, player),
							xe = aT5(h0, xe - h0 - 1, gy + em, aXW, aSz, 1, player),
							aKK = aT5(h0 - 1, h0 - aKK - 2, gy + em, aXW, aSz, -1, player);
						if (aT0 = aT9(aT0, iB, aSw), aT0 = aT9(aT0, iC, aSw), aT0 = aT9(aT0, xf, aSw), aT0 = aT9(aT0, a8u, aSw), aT0 = aT9(aT0, aT4, aSw), aT0 = aT9(aT0, aT6, aSw), aT0 = aT9(aT0, xe, aSw), 0 <= (aT0 = aT9(aT0, aKK, aSw)) &&
							em * em >= bL.iD(aT0, aSw)) return aT0
					}
					return -1
				}(aSw, aSx, aXW, player);
				if (-1 === aXG) break;
				var id = ac.eR(bL.eZ(aXG));
				if (bM.ku.aVx(player, id)) return !! function(player, aXG, aSw) {
					for (var hb = bL.iY(aXG, aSw), aB = 0; aB < 4; aB++) {
						var eV = bL.iW(aXG, hb);
						if (ac.aGW(bL.eZ(eV), player)) return bN.fL[6] = hb, 1;
						hb = (hb + 1) % 4
					}
					return
				}(player, aXG, aSw) && (bN.fL[7] = aXG, !0);
				aXW.push(id)
			}
		return !1
	}
}

function dc() {
	this.aQS = [L(434), L(435), L(436), L(437), L(438), L(439), L(440), L(441), L(442), L(443), L(444), L(445), L(446), L(447), L(448), L(449)];
	var aXZ = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", "", "KeyI", ""];
	this.aBD = new Array(aXZ.length), this.dZ = function() {
		var g = bi.eG.data[155].value.split(";"),
			l0 = g.length;
		if (function() {
				for (var ej = aXZ.length, aB = 0; aB < ej; aB++) bW.aBD[aB] = aXZ[aB]
			}(), !(l0 > aXZ.length))
			for (var aB = 0; aB < l0; aB++) g[aB].length && (this.aBD[aB] = g[aB])
	}, this.aQU = function(e4, code) {
		for (var aBD = this.aBD, aXb = aXZ, qC = (aBD[e4] = code, ""), ej = aBD.length, aXc = [], aB = 0; aB < ej; aB++) aXc.push(aBD[aB] === aXb[aB] ? "" : aBD[aB]);
		ej--;
		for (aB = 0; aB < ej; aB++) qC += aXc[aB] + ";";
		bi.rw.rx(155, qC += aXc[ej])
	}, this.aQR = function() {
		bi.rw.rx(155, ""), this.dZ()
	}, this.f4 = function(code, e4) {
		return code === this.aBD[e4] || code === this.aBD[e4 + 1]
	}
}

function dV() {
	var aXd = new Array(1),
		aXe = new Array(1),
		aXf = 20,
		eH = 0,
		aXg = !1;

	function aXi() {
		aXf++, bo.play()
	}
	this.dZ = function() {
		if (!window.document.documentMode) {
			for (var aB = 0; 0 <= aB; aB--) ! function(aB, src) {
				aXe[aB] = 0, aXd[aB] = document.createElement("audio"), aXd[aB].src = src, aXd[aB].setAttribute("preload", "auto"), aXd[aB].setAttribute("controls", "none"), aXd[aB].style.display = "none", aXd[aB].onpause = function() {
					aXe[aB] = 1
				}, aXd[aB].oncanplaythrough = function() {
					aXe[aB] = 0 === aXe[aB] ? 1 : aXe[aB]
				}, document.body.appendChild(aXd[aB])
			}(aB,
				"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
				);
			aXg = !0
		}
	}, this.u5 = function() {
		if (aXg) {
			aXg = !1;
			for (var aB = 0; 0 <= aB; aB--) aXd[aB].onpause = null, aXd[aB].oncanplaythrough = null, document.body.removeChild(aXd[aB]), aXd[aB] = null
		}
	}, this.play = function() {
		if (aXg) {
			var dp = performance.now();
			if (eH + 66 < dp)
				for (var aB = 0; 0 <= aB; aB--)
					if (1 === aXe[aB]) return eH = dp, aXe[aB] = 2, void aXd[aB].play();
			0 < aXf && (aXf--, setTimeout(aXi, 66))
		}
	}
}

function cX() {
	this.a7v = function() {
		var aXl;
		return !(al.k8 < 3 || ag.gX[lg[0]] >= aD.jr >> 1) && (aD.he ? (aXl = ae.aHr(), !(2 * ae.aHs(bg.kf()) >= aXl)) : function() {
			var aXl = ae.aHr();
			if (2 * ag.gl[lg[0]] >= aXl) return !1;
			return !0
		}())
	}
}

function c8() {
	this.dZ = function() {
		if (0 === aD.data.sResourcesType) {
			for (var aWY = aD.k7, gl = ag.gl, aB = 0; aB < aWY; aB++) gl[aB] = 512;
			var aWZ = aD.wx,
				kK = aE.kK,
				hT = aE.hT;
			for (aB = aWY; aB < aWZ; aB++) gl[aB] = kK[hT[aB]]
		} else(1 === aD.data.sResourcesType ? function() {
			for (var ej = aD.wx, gl = ag.gl, sResourcesValue = aD.data.sResourcesValue, aB = 0; aB < ej; aB++) gl[aB] = sResourcesValue
		} : function() {
			for (var ej = aD.wx, gl = ag.gl, sResourcesData = aD.data.sResourcesData, aB = 0; aB < ej; aB++) gl[aB] = sResourcesData[aB]
		})();
		bc.ma[8] = ag.gl[aD.eT]
	}
}

function dM() {
	var aXq = 501,
		aXs = (this.aXr = new Uint32Array(aXq), this.a3I = new Uint32Array(aXq), this.aAs = new Uint16Array(aXq), this.aQa = 0, 1),
		aXt = 0;

	function aXw(self) {
		self.max.fill(0)
	}

	function aXy(self, aB) {
		self.max[0] = Math.max(self.aXr[aB], self.max[0]), self.max[1] = Math.max(self.a3I[aB], self.max[1]), self.max[2] = Math.max(self.aAs[aB], self.max[2])
	}
	this.max = [0, 0, 0], this.aXu = 0, this.ma = new Array(21), this.aXv = null, this.da = function() {
		this.aXv = [L(450), L(451), L(452), L(453), L(454), L(455), L(456), L(457), L(287), L(288), L(458), L(459), L(460), L(461), "", L(462), L(463), L(464), L(247), L(465), L(466)]
	}, this.dZ = function() {
		this.aQa = 0, aXs = 1, this.aXu = 0, aXt = 0, aXw(this), this.ma.fill(0)
	}, this.pv = function(player, iK) {
		b9.g5.a3D(player) && (this.ma[0] += iK + 1, this.ma[1]++, this.ma[12] += bN.fG[1])
	}, this.pP = function(player, p3) {
		__fx.donationsTracker.logDonation(player, p3, bN.fG[0]);
		player === aD.eT && (aN.pP(bN.fG[0], bN.fG[1], p3), this.ma[12] += bN.fG[1], this.ma[16] += bN.fG[0]), p3 === aD.eT && (aN.a6Y(bN.fG[0], player), this.ma[10] += bN.fG[0])
	}, this.pz = function(player) {
		b9.g5.a3D(player) && (this.ma[2]++, this.ma[12] += bN.fG[1])
	}, this.q7 = function(player) {
		b9.g5.a3D(player) && (this.ma[19]++, this.ma[12] += bN.fG[1])
	}, this.aWS = function(player) {
		b9.g5.a3D(player) && this.ma[20]++
	}, this.g9 = function(player, a3z, e4) {
		b9.g5.a3D(player) && (this.ma[e4] += a3z)
	}, this.j0 = function() {
		var self;
		this.aXu || 0 < aXt-- || ((self = this).aXr[self.aQa] = ag.gX[aD.eT], self.a3I[self.aQa] = ag.gl[aD.eT], self.aAs[self.aQa] = ae.aAt(aD.eT), aXy(self, self.aQa), self.aQa++, self.aQa === aXq && function(self) {
			aXw(self), aXy(self, 0), self.aQa = 1 + bK.dq(aXq, 2);
			for (var aB = 1; aB < self.aQa; aB++) self.aXr[aB] = self.aXr[2 * aB], self.a3I[aB] = self.a3I[2 * aB], self.aAs[aB] = self.aAs[2 * aB], aXy(self, aB);
			aXs *= 2
		}(self), aXt = aXs - 1, bd.mR(), 0 === ag.me[aD.eT] && (self.aXu = be.k4()))
	}
}

function dN() {
	this.i = 0, this.j = 0, this.sq = 0, this.sr = 0, this.aY0 = 0, this.aY1 = 0, this.a88 = 0, this.tY = 0;
	var aY3 = this.aY2 = 0;
	this.aY4 = 0, this.aY5 = 0, this.aY6 = 0, this.a7U = 0, this.e4 = 0, this.aAV = null, this.hW = !1, this.aY7 = -1, this.aY8 = !1, this.aY9 = [0, 0], this.da = function() {
		this.aAV = [L(467), L(120, 0, "Balance"), L(119, 0, "Interest"), L(468)]
	}, this.dZ = function() {
		this.hW = !1, this.aY7 = -1, this.aY8 = !1, this.resize()
	}, this.resize = function() {
		this.i = h.i < 1.369 * h.j ? h.i : 1.369 * h.j;
		var em = a0.a1.ht() && h.i < h.j ? 1 : a0.a1.ht() ? .8 : h.i < h.j ? .65 : .59;
		this.i = Math.floor(em * this.i), this.i -= a0.a1.ht() && h.i < h.j ? 2 * bb.gap + 2 : 0, this.j = Math.floor(this.i / 1.369), this.a7U = Math.floor(this.j / 150), this.a7U = Math.max(this.a7U, 1.5), this.sq = Math.floor(1 + .02 * this
			.i), this.sr = Math.floor(1 + .04 * this.i), this.a88 = this.sr, aY3 = Math.floor(.75 * this.a88), this.tY = Math.floor(1 + .075 * this.i), this.aY4 = Math.floor(1 + .1125 * this.i), this.aY5 = Math.floor(this.i * (a0.a1.ht() ? .03 :
				.029)), this.aY5 = Math.max(this.aY5, 4), this.aY6 = Math.floor(.035 * this.i), this.aY6 = Math.max(this.aY6, 4), this.aY2 = this.j - 2 * this.a88 - this.tY - this.aY4, this.hW && this.aYA()
	}, this.gw = function(lK, lL) {
		var x0, wz;
		return !!this.hW && (wz = lK, x0 = lL, lK -= bK.dq(h.i - this.i, 2), lL -= bK.dq(h.j - this.j, 2), lK < 0 || lL < 0 || lK >= this.i || lL >= this.j || lK >= this.i - this.aY4 && lL < this.aY4 ? -1 !== aM.gw(wz, x0) || bB.gw(wz, x0) ||
			this.rm() : lL < this.aY4 || (lL < this.j - this.tY ? (this.aY8 = !0, this.aY7 = (lK - 2 * this.sq - this.aY0) / this.aY1, 3 !== this.e4 && (be.dh = !0)) : (wz = (wz = Math.floor(lK / (this.i / this.aAV.length))) < 0 ? 0 : wz >=
				this.aAV.length ? this.aAV.length - 1 : wz) !== this.e4 && (this.e4 = wz, this.aYA(), be.dh = !0)), !0)
	}, this.a1J = function(lK, lL) {
		return this.aY9[0] = lK, this.aY9[1] = lL, !(!this.hW || !this.aY8 || (lK -= bK.dq(h.i - this.i, 2), lL = this.aY7, this.aY7 = (lK - 2 * this.sq - this.aY0) / this.aY1, (0 <= this.aY7 && this.aY7 <= 1 || 0 <= lL && lL <= 1) && (be.dh = !
			0), 0))
	}, this.a1i = function() {
		this.aY8 && (this.aY8 = !1)
	}, this.a1u = function() {
		this.hW ? this.rm() : this.show()
	}, this.show = function() {
		bc.aQa < 2 || (this.hW = !0, this.aYA())
	}, this.rm = function() {
		this.hW = !1, this.aY7 = -1, be.dh = !0
	}, this.aYA = function() {
		this.e4 < 2 ? this.aY0 = aQ.measureText(b9.rU.z5(bc.max[this.e4]), b9.qV.sJ(0, this.aY5)) : 2 === this.e4 && (this.aY0 = aQ.measureText(b9.rU.a3s(6, 2), b9.qV.sJ(0, this.aY5))), this.aY1 = this.i - 2 * this.sq - this.aY0 - this.sr
	}, this.mR = function() {
		this.hW && this.aYA()
	}, this.ub = function() {
		this.hW && this.a8Q()
	}, this.a8Q = function() {
		var eq = bK.dq(h.i - this.i, 2),
			es = bK.dq(h.j - this.j, 2);
		uc.setTransform(1, 0, 0, 1, eq, es), uc.fillStyle = bA.nb, uc.fillRect(0, this.aY4, this.i, this.j - this.aY4), this.aYB(), this.aPP(), uc.strokeRect(0, 0, this.i, this.j), b9.qV.textAlign(uc, 2), uc.font = b9.qV.sJ(0, this.aY5), 0 ===
			this.e4 ? this.aYC(bc.aXr, eq, es) : 1 === this.e4 ? this.aYC(bc.a3I, eq, es) : 2 === this.e4 ? this.aYD(eq, es) : 3 === this.e4 && (this.aYE(eq, es), this.aYF(eq, es)), aM.a5d(Math.floor(eq + this.i - .725 * this.aY4), Math.floor(
				es + .275 * this.aY4), Math.floor(.45 * this.aY4)), uc.setTransform(1, 0, 0, 1, 0, 0)
	}, this.aYB = function() {
		var aB, dp;
		for (uc.lineWidth = this.a7U, b9.qV.textBaseline(uc, 1), b9.qV.textAlign(uc, 1), uc.strokeStyle = bA.ne, uc.font = b9.qV.sJ(1, this.aY6), dp = this.i / this.aAV.length, uc.fillStyle = bA.o0, uc.fillRect(this.e4 * dp, this.j - this.tY, dp,
				this.tY), uc.fillStyle = bA.ne, uc.fillRect(0, this.j - this.tY - .5 * this.a7U, this.i, this.a7U), aB = 1; aB <= 3; aB++) uc.fillRect(aB * dp, this.j - this.tY, this.a7U, this.tY);
		for (aB = this.aAV.length - 1; 0 <= aB; aB--) uc.fillText(b9.y0.a2p(this.aAV[aB], 0, .9 * dp), (aB + .5) * dp, this.j - .46 * this.tY)
	}, this.aPP = function() {
		uc.fillStyle = bA.oQ, uc.fillRect(0, 0, this.i, this.aY4), uc.fillStyle = bA.ne, uc.fillRect(0, this.aY4 - .5 * this.a7U, this.i, this.a7U), uc.font = b9.qV.sJ(1, .39 * this.aY4), uc.fillText(b9.y0.a2p(L(469), 0, .8 * this.i), Math.floor(
			this.i / 2), Math.floor(.55 * this.aY4))
	}, this.aYC = function(g, eq, es) {
		var l0 = bc.max[this.e4],
			a2C = (uc.setTransform(1, 0, 0, 1, eq + 2 * this.sq + this.aY0, es + this.a88 + this.aY4), uc.lineWidth = 2, this.aY2 / Math.sqrt(l0));
		uc.beginPath(), uc.moveTo(this.aY1, this.aY2 - a2C * Math.sqrt(g[bc.aQa - 1]));
		for (var aB = bc.aQa - 2; 0 <= aB; aB--) uc.lineTo(aB * this.aY1 / (bc.aQa - 1), this.aY2 - a2C * Math.sqrt(g[aB]));
		uc.stroke();
		eq = this.a5d(g, a2C, .5);
		eq < .95 && uc.fillText(b9.rU.z5(l0), -this.sq, 0), .05 < Math.abs(eq - .5) && uc.fillText(b9.rU.z5(Math.floor(l0 / 4)), -this.sq, Math.floor(this.aY2 / 2)), .05 < eq && uc.fillText("0", -this.sq, this.aY2)
	}, this.aYD = function(eq, es) {
		uc.setTransform(1, 0, 0, 1, eq + 2 * this.sq + this.aY0, es + this.a88 + this.aY4), uc.lineWidth = 2;
		var a2C = this.aY2 / Math.max(bc.max[this.e4], 1);
		uc.beginPath(), uc.moveTo(this.aY1, this.aY2 - a2C * bc.aAs[bc.aQa - 1]);
		for (var aB = bc.aQa - 2; 0 <= aB; aB--) uc.lineTo(aB * this.aY1 / (bc.aQa - 1), this.aY2 - a2C * bc.aAs[aB]);
		uc.stroke();
		eq = this.a5d(bc.aAs, a2C, 1), es = bc.max[this.e4] / 100;
		eq < .95 && uc.fillText(b9.rU.a3s(es, 2), -this.sq, 0), .05 < Math.abs(eq - .5) && uc.fillText(b9.rU.a3s(es / 2, 2), -this.sq, Math.floor(this.aY2 / 2)), .05 < eq && uc.fillText(b9.rU.a3s(0, 2), -this.sq, this.aY2)
	}, this.aYE = function(eq, es) {
		uc.setTransform(1, 0, 0, 1, eq + .34 * this.i, es + 2 * aY3 + this.aY4), b9.qV.textAlign(uc, 2);
		for (var aAG = this.j - 4 * aY3 - this.tY - this.aY4, g = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], aB = 9; 0 <= aB; aB--) uc.fillText(b9.y0.a2p(bc.aXv[g[aB]], 0, .31 * this.i), 0, aB * aAG / 9);
		var fB = bc.ma;
		for (uc.setTransform(1, 0, 0, 1, eq + .39 * this.i, es + 2 * aY3 + this.aY4), b9.qV.textAlign(uc, 0), uc.fillText(b9.rU.a3s(100 * fB[0] / (1024 * Math.max(fB[1], 1)), 1), 0, 0), aB = 8; 1 <= aB; aB--) uc.fillText(fB[g[aB]].toString(), 0,
			aB * aAG / 9);
		uc.fillText(b9.rU.a3s(100 * (1 - ag.gX[aD.eT] / fB[7]), 0), 0, aAG)
	}, this.aYF = function(eq, es) {
		uc.setTransform(1, 0, 0, 1, eq + .79 * this.i, es + 2 * aY3 + this.aY4), b9.qV.textAlign(uc, 2);
		var aB, aAG = this.j - 4 * aY3 - this.tY - this.aY4;
		for (uc.fillStyle = bA.nv, aB = 2; 0 <= aB; aB--) uc.fillText(b9.y0.a2p(bc.aXv[aB + 8], 0, .31 * this.i), 0, aB * aAG / 9);
		uc.fillText(b9.y0.a2p(bc.aXv[18], 0, .31 * this.i), 0, 3 * aAG / 9), uc.fillStyle = bA.nu, uc.fillText(b9.y0.a2p(bc.aXv[11], 0, .31 * this.i), 0, 4 * aAG / 9), uc.fillStyle = bA.oD, uc.fillText(b9.y0.a2p(bc.aXv[13], 0, .31 * this.i), 0,
				5 * aAG / 9), uc.fillText(b9.y0.a2p(bc.aXv[15], 0, .31 * this.i), 0, 6 * aAG / 9), uc.fillText(b9.y0.a2p(bc.aXv[16], 0, .31 * this.i), 0, 7 * aAG / 9), uc.fillText(b9.y0.a2p(bc.aXv[12], 0, .31 * this.i), 0, 8 * aAG / 9), uc
			.fillStyle = bA.oC, uc.fillText(b9.y0.a2p(bc.aXv[17], 0, .31 * this.i), 0, aAG), uc.fillStyle = bA.nv;
		var fB = bc.ma,
			aE3 = fB[8] + fB[9] + fB[10] + fB[18],
			aE3 = b9.rU.z5(aE3),
			aOC = uc.measureText(aE3).width,
			eq = (uc.setTransform(1, 0, 0, 1, eq + .83 * this.i + aOC, es + 2 * aY3 + this.aY4), uc.fillText(b9.rU.z5(fB[8]), 0, 0), uc.fillText(b9.rU.z5(fB[9]), 0, aAG / 9), uc.fillText(b9.rU.z5(fB[10]), 0, 2 * aAG / 9), uc.fillText(b9.rU.z5(fB[
				18]), 0, 3 * aAG / 9), uc.fillStyle = bA.nu, uc.fillText(aE3, 0, 4 * aAG / 9), uc.fillStyle = bA.oD, uc.fillText(b9.rU.z5(fB[13]), 0, 5 * aAG / 9), uc.fillText(b9.rU.z5(fB[15]), 0, 6 * aAG / 9), uc.fillText(b9.rU.z5(fB[16]),
				0, 7 * aAG / 9), uc.fillText(b9.rU.z5(fB[12]), 0, 8 * aAG / 9), fB[12] + fB[13] + fB[15] + fB[16]);
		uc.fillStyle = bA.oC, uc.fillText(b9.rU.z5(eq), 0, aAG), uc.fillStyle = bA.ne
	}, this.a5d = function(g, a2C, a93) {
		var aB, e, fS;
		return this.aY7 < 0 || 1 < this.aY7 ? .25 : (aB = this.aY7 * (bc.aQa - 1), fS = g[e = Math.floor(aB)], fS += (aB - e) * (g[e < bc.aQa - 1 ? e + 1 : e] - fS), uc.strokeStyle = bA.nh, .04 < this.aY7 && this.aYH(0, this.aY2 - a2C * Math.pow(
				fS, a93), aB * this.aY1 / (bc.aQa - 1), this.aY2 - a2C * Math.pow(fS, a93)), .04 < fS / bc.max[this.e4] && this.aYH(aB * this.aY1 / (bc.aQa - 1), this.aY2, aB * this.aY1 / (bc.aQa - 1), this.aY2 - a2C * Math.pow(fS, a93)), uc
			.fillStyle = bA.oF, uc.beginPath(), uc.arc(aB * this.aY1 / (bc.aQa - 1), this.aY2 - a2C * Math.pow(fS, a93), Math.max(2, .014 * this.j), 0, 2 * Math.PI), uc.fill(), g = this.aY7 * be.aAu, g = 0 === ag.me[aD.eT] ? Math.floor(g * bc
				.aXu) : Math.floor(g * be.k4()), uc.fillStyle = bA.ne, uc.fillText(1 === a93 ? b9.rU.a3s(fS / 100, 2) : b9.rU.z5(Math.floor(fS)), -this.sq, this.aY2 - a2C * Math.pow(fS, a93)), b9.qV.textAlign(uc, 1), uc.fillText(aW.aAj(g),
				aB * this.aY1 / (bc.aQa - 1), this.aY2 + this.aY5 - (a0.a1.ht() ? 2 : 0) - this.a7U), b9.qV.textAlign(uc, 2), a2C * Math.pow(fS, a93) / this.aY2)
	}, this.aYH = function(n4, n5, nH, nI) {
		uc.beginPath(), uc.moveTo(n4, n5), uc.lineTo(nH, nI), uc.stroke()
	}
}

function bw() {
	this.aYI = "https://", this.aYJ = this.aYI + "territorial.io/", this.aQb = this.aYJ + "changelog", this.aQf = this.aYJ + "terms", this.aYK = this.aYJ + "cookie_policy", this.aQ2 = this.aYJ + "privacy", this.aQe = this.aYJ + "tutorial", this.aQd =
		this.aYJ + "players", this.aQc = this.aYJ + "clans", this.a0a = this.aYJ + "clan-results", this.aNL = "https://patreon.com/c/territorial", this.aCC = this.aYI + "play.google.com/store/apps/details?id=territorial.io", this.a0t = this.aYI +
		"apps.apple.com/app/id1581110913", this.aYL = this.aYI + "www.youtube.com/watch?v=toZTQ8aRdFc", this.aCD = this.aYI + "discord.gg/pthqvpTXmh", this.aCE = this.aYI + "www.instagram.com/davidtschacher/", this.yd =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function d5() {
	this.y = new aYM, this.xx = new aYN, this.dZ = function() {
		this.y.dZ()
	}, this.j0 = function() {
		0 !== this.y.a6h && this.y.a6h--
	}
}

function aYN() {
	this.ub = function() {
		if (0 !== bO.y.a6h && (uc.globalAlpha = Math.min(bO.y.a6h / 580, 1), uc.drawImage(bO.y.aYQ, 1 + aS.xv(), 1 + aS.xw()), uc.globalAlpha = 1, aD.h7)) {
			for (var n4 = iL / hv, n5 = iM / hv, nH = (h.i + iL) / hv, nI = (h.j + iM) / hv, gI = bO.y.aYR * hv, aYS = bO.y.aYS, aB = aD.k7 - 1; 0 <= aB; aB--) ! function(aB, gI, n4, n5, nH, nI, aYS) {
				var highlight;
				0 === ag.me[aB] || 0 === ag.gX[aB] || ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aB]) && (gI *= 2), nH = h.i * ((ag.ia[aB] + ag.ib[aB] + 1) / 2 - n4) / (nH - n4) - .5 * gI, n4 = h.j * ((ag.ic[
					aB] + ag.ie[aB] + 1) / 2 - n5) / (nI - n5) - .5 * gI, nH > h.i) || n4 > h.j || nH < -gI || n4 < -gI || (highlight ? uc.setTransform(2 * hv, 0, 0, 2 * hv, nH, n4) : uc.setTransform(hv, 0, 0, hv, nH, n4), uc.drawImage(
					aYS[aD.he ? bf.eh[aB] : 1], 0, 0))
			}(aB, gI, n4, n5, nH, nI, aYS);
			uc.setTransform(hv, 0, 0, hv, 0, 0)
		}
	}
}

function aYM() {
	this.aYR = 28, this.a6h = 0, this.aYQ = null;
	var aYU = this.aYS = null;

	function aYX(hg, aYY) {
		var eq, es, eV, i4, a2d = b9.qV.wH(hg, hg),
			hm = b9.qV.getContext(a2d, !0),
			hj = b9.qV.getImageData(hm, hg, hg),
			wS = hj.data,
			l0 = (hg >> 1) - .5,
			aYZ = .5 + l0;
		for (aYZ *= aYZ, es = 0; es < hg; es++)
			for (eq = 0; eq < hg; eq++) i4 = (i4 = eq - l0) * i4 + (i4 = es - l0) * i4, wS[eV = 4 * (es * hg + eq)] = aYY[0], wS[1 + eV] = aYY[1], wS[2 + eV] = aYY[2], wS[3 + eV] = (aYZ - i4) * aYY[3] / aYZ;
		return hm.putImageData(hj, 0, 0), a2d
	}

	function aXV(aB, hm, a2d, hg) {
		var highlight, eq, es;
		0 !== ag.me[aB] && 0 !== ag.gX[aB] && ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aB]) && (hg *= 2), eq = ag.ia[aB] + ag.ib[aB] + 1 - hg - 2 >> 1, es = ag.ic[aB] + ag.ie[aB] + 1 - hg - 2 >> 1, highlight ? hm
			.drawImage(a2d[aD.he ? 9 === aD.kP && 5 === aE.hT[aB] ? 3 : bf.eh[aB] : aB < aD.k7 ? 1 : 0], eq, es, hg, hg) : hm.drawImage(a2d[aD.he ? 9 === aD.kP && 5 === aE.hT[aB] ? 3 : bf.eh[aB] : aB < aD.k7 ? 1 : 0], eq, es))
	}
	this.dZ = function() {
		var s6;
		this.a6h = 700,
			function(s6) {
				var hg = s6.aYR;
				if (s6.aYS = [], aYU = [], aD.he) {
					for (var aB = 0; aB <= aD.x4; aB++) s6.aYS.push(aYX(hg, bf.aVs[bf.kU[aB]])), aYU.push(aYX(hg >> 1, bf.aVs[bf.kU[aB]]));
					9 === aD.kP && aYU.push(aYX(hg, bf.aVs[1]))
				} else s6.aYS.push(aYX(hg, bf.aVs[7])), s6.aYS.push(aYX(hg, bf.aVs[4])), aYU.push(aYX(hg >> 1, bf.aVs[7]))
			}(this),
			function(s6, aYa) {
				var aB, aYQ = s6.aYQ,
					hm = b9.qV.getContext(aYQ, !0),
					ej = aD.eg,
					hg = s6.aYR >> 1;
				hm.imageSmoothingEnabled = !1, hm.setTransform(1, 0, 0, 1, 0, 0), aYa && hm.clearRect(0, 0, aYQ.width, aYQ.height);
				if (9 === aD.kP) {
					hg <<= 1;
					s6 = ay.kY[5];
					for (aB = ej - s6; aB < ej; aB++) aXV(aB, hm, aYU, hg);
					ej -= s6, hg >>= 1
				}
				for (aB = aD.k7; aB < ej; aB++) aXV(aB, hm, aYU, hg)
			}(this, null !== (s6 = this).aYQ && s6.aYQ.width === bR.eu - 2 && s6.aYQ.height === bR.ev - 2 || (s6.aYQ = b9.qV.wH(bR.eu - 2, bR.ev - 2), !1)), aD.h7 || this.a4A()
	}, this.aVr = aYX, this.a4A = function() {
		for (var ej = aD.k7, hg = this.aYR, aYS = this.aYS, hm = b9.qV.getContext(this.aYQ, !0), aB = 0; aB < ej; aB++) aXV(aB, hm, aYS, hg)
	}
}

function d6() {
	function aYd() {
		8 === aD.kP && 1 === aD.zo && bQ.zQ.zn()
	}

	function aYc(player) {
		aD.h7 ? (ak.aGj(player), al.aJe(), aD.kR && aD.pr.j0()) : b2.aCU(player)
	}
	this.pJ = function(player) {
		aN.a00(player, player === aD.eT ? 21 : 22), aYc(player), aYd()
	}, this.po = function(player) {
		1 === aD.zo && 0 !== ag.me[player] && 2 !== ag.a39[player] && aYc(player), aD.zr--, aD.zq--, aN.a00(player, 4), b9.g5.gu(2) && aW.mQ(!0), aYd()
	}
}

function dG() {
	this.aSu = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.aAD = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", bA.ne, "rgb(170,170,170)"
	], this.aYe = [bA.ne, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", bA.ne, bA.nV], this.aYf = [bA.nV, bA.ne, bA.ne, bA.ne, bA.nV, bA.nV, bA.nV, bA.nV, bA.ne];
	var aYg = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"];
	this.aJ6 = ["rgba(" + aYg[0] + ",", "rgba(" + aYg[1] + ",", "rgba(" + aYg[2] + ",", "rgba(" + aYg[3] + ",", "rgba(" + aYg[4] + ",", "rgba(" + aYg[5] + ",", "rgba(" + aYg[6] + ",", "rgba(" + aYg[7] + ",", "rgba(" + aYg[8] + ",", "rgba(" + aYg[9] +
			","
		], this.aJ7 = ["rgb(" + aYg[0] + ")", "rgb(" + aYg[1] + ")", "rgb(" + aYg[2] + ")", "rgb(" + aYg[3] + ")", "rgb(" + aYg[4] + ")", "rgb(" + aYg[5] + ")", "rgb(" + aYg[6] + ")", "rgb(" + aYg[7] + ")", "rgb(" + aYg[8] + ")", "rgb(" + aYg[9] +
			")"
		], this.a09 = null, this.aVs = [
			[128, 128, 128, 180],
			[255, 0, 0, 180],
			[0, 255, 0, 180],
			[50, 50, 255, 180],
			[255, 255, 0, 180],
			[255, 0, 255, 180],
			[0, 255, 255, 180],
			[255, 255, 255, 180],
			[0, 0, 0, 180]
		], this.aVX = [
			[128, 128, 128],
			[255, 0, 0],
			[0, 255, 0],
			[0, 0, 255],
			[255, 255, 0],
			[255, 0, 255],
			[0, 255, 255],
			[255, 255, 255],
			[0, 0, 0]
		], this.kU = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.eh = new Uint8Array(aD.eg), this.aAE = new Uint8Array(aD.eg), this.xA = new Uint16Array(aD.eg), this.xB = new Uint16Array(this.kU.length + 1), this.xC = new Uint16Array(this.kU.length), this.da =
		function() {
			this.a09 = [L(470), L(471), L(472), L(473), L(474), L(475), L(476), L(477), L(478)]
		}, this.dZ = function() {
			if (this.eh.fill(0), this.aYh(), aD.he) {
				if (9 === aD.kP) {
					for (var eh = bf.eh, aB = aD.data.teamPlayerCount[7] - 1; 0 <= aB; aB--) eh[aB] = 1;
					var ej = aD.eg;
					for (aB = aD.data.teamPlayerCount[7]; aB < ej; aB++) eh[aB] = 2;
					bf.kU[1] = 7, bf.kU[2] = 8
				} else aD.kR ? function() {
					var aVX = bf.aVX,
						colorsData = aD.data.colorsData;
					if (!aD.data.selectableColor)
						for (var aB = aD.k7 - 1; 0 <= aB; aB--) colorsData[aB] = ax.jP(262144);
					var aYs = 0,
						ez = 768,
						aSP = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
						teamPlayerCount = aD.data.teamPlayerCount;
					for (aB = 0; aB < 9; aB++)
						if (teamPlayerCount[aB]) {
							for (var em = 0, f3 = 0; f3 < 3; f3++) em += Math.abs(aVX[aB][f3] - aSP[f3]);
							em < ez && (aYs = aB, ez = em)
						} var aYt = new Uint16Array(9);
					for (aB = 0; aB < 9; aB++) aYt[aB] = teamPlayerCount[aB];
					var kU = bf.kU,
						aYu = new Uint8Array(9),
						gC = (kU[0] = 0, 1);
					for (aB = 1; aB < 9; aB++) aYt[aB] && (aYu[aB] = gC, kU[gC++] = aB);
					var jO = aD.k7,
						eh = bf.eh;
					aYt[aYs] ? (aYt[aYs]--, eh[0] = aYu[aYs]) : jO = 0;
					var f4 = 0;
					for (aB = jO; aB < aD.wx; aB++) {
						var hc = kU[f4];
						if (aYt[hc]) aYt[hc]--, eh[aB] = aYu[hc];
						else if (aB--, 9 <= ++f4) return console.log("error 325")
					}
				}() : this.j0();
				! function() {
					for (var ej = aD.eg, xA = bf.xA, xB = bf.xB, xC = bf.xC, eh = bf.eh, kU = bf.kU, x3 = kU.length, eG = new Array(x3), aB = 0; aB < x3; aB++) eG[aB] = [];
					for (aB = 0; aB < ej; aB++) eG[kU[eh[aB]]].push(aB);
					for (aB = 1; aB <= x3; aB++) xB[aB] = xB[aB - 1] + eG[aB - 1].length;
					for (aB = 0; aB < x3; aB++)
						for (var gC = eG[aB].length, l0 = xB[aB], hc = 0; hc < gC; hc++) xA[hc + l0] = eG[aB][hc];
					var k7 = aD.k7;
					for (aB = 0; aB < x3; aB++)
						for (gC = eG[aB].length, l0 = xB[aB], hc = 0; hc < gC; hc++)
							if (xA[hc + l0] >= k7) {
								xC[aB] = hc;
								break
							}
				}(), ! function() {
					for (var ej = aD.eg, eh = bf.eh, aAE = bf.aAE, kU = bf.kU, aB = 0; aB < ej; aB++) aAE[aB] = kU[eh[aB]];
					9 === aD.kP && aAE.fill(1, ej - ay.kY[5])
				}()
			}
		}, this.aYh = function() {
			for (var aB = this.kU.length - 1; 0 <= aB; aB--) this.kU[aB] = aB
		}, this.j0 = function() {
			var yu = new Uint8Array(aD.k7),
				yv = new Uint8Array(aD.k7),
				aYm = new Uint16Array(8),
				aYn = new Uint16Array(this.kU.length);
			this.aYo(yu, yv, aYm, 1), this.aGM(aYm), this.aYp(aYn, yu, yv), this.aYq(yu, yv, aYn), this.aYr()
		}, this.aYo = function(yu, yv, aYt, aYv) {
			for (var f3, e, aYw, ej = this.kU.length - aYv, g = new Uint16Array(ej), aVX = this.aVX, colorsData = aD.data.colorsData, aB = aD.k7 - 1; 0 <= aB; aB--) {
				for (f3 = ej; aYv <= f3; f3--) g[f3 - 1] = Math.abs(4 * (colorsData[aB] >> 12) - aVX[f3][0]) + Math.abs(4 * (colorsData[aB] >> 6 & 63) - aVX[f3][1]) + Math.abs(4 * (63 & colorsData[aB]) - aVX[f3][2]);
				for (aYw = 768, f3 = ej - 1; 0 <= f3; f3--) g[e = (f3 + aB) % ej] < aYw && (aYw = g[e], yu[aB] = e);
				for (aYt[yu[aB]] += 4, aYw = 768, f3 = ej - 1; 0 <= f3; f3--) g[e = (f3 + aB) % ej] < aYw && e !== yu[aB] && (aYw = g[e], yv[aB] = e);
				aYt[yv[aB]]++
			}
		}, this.aGM = function(aYt) {
			for (var f3, l2, ej = this.kU.length - 1, aB = ej; 0 <= aB; aB--) this.kU[aB] = aB;
			for (aB = ej - 1; 0 <= aB; aB--) aYt[aB]++;
			for (aB = 1; aB <= ej; aB++) {
				for (l2 = 0, f3 = 1; f3 < ej; f3++) aYt[f3] > aYt[l2] && (l2 = f3);
				aYt[l2] = 0, this.kU[aB] = l2 + 1
			}
		}, this.aYp = function(aYn, yu, yv) {
			var f3, a0U, f4, em, e, nG, t7, aYx = this.kU.length - 1,
				qy = new Uint16Array(aYx),
				aYy = [],
				aYz = 0,
				a0T = [],
				aZ0 = [];
			loop: for (var aB = 0; aB < aD.k7; aB++)
				if (null !== (a0U = b9.rU.a0V(ag.a0S[aB]))) {
					for (f3 = a0T.length - 1; 0 <= f3; f3--)
						if (a0U === a0T[f3]) {
							aZ0[f3].push(aB), aYz = Math.max(aYz, aZ0[f3].length);
							continue loop
						} a0T.push(a0U), aYy.push(!1), aZ0.push([aB]), aYz = Math.max(aYz, 1)
				}
			for (; 2 < aD.x4 && aYz > bK.dq(aD.k7, aD.x4);) aD.x4--, aD.kP--;
			for (f3 = a0T.length - 1; 0 <= f3; f3--) {
				for (em = -1, f4 = a0T.length - 1; 0 <= f4; f4--) !aYy[f4] && (-1 === em || aZ0[f4].length > aZ0[em].length) && (em = f4);
				for (f4 = aYx - 1; 0 <= f4; f4--) qy[f4] = 1;
				for (f4 = aZ0[em].length - 1; 0 <= f4; f4--) qy[yu[aZ0[em][f4]]] += 3, qy[yv[aZ0[em][f4]]]++;
				for (aB = aYx - 1; 0 <= aB; aB--) {
					for (e = em % aYx, f4 = aYx - 1; 0 <= f4; f4--) qy[f4] > qy[e] && (e = f4);
					for (nG = -1, f4 = aD.x4; 0 < f4; f4--)
						if (this.kU[f4] === e + 1) {
							nG = f4;
							break
						} if (qy[e] = 0, -1 !== nG) {
						for (t7 = 0, f4 = aD.x4; 0 < f4; f4--) aYn[nG] > aYn[f4] && t7++;
						if (t7 !== aD.x4 - 1) {
							for (f4 = aZ0[em].length - 1; 0 <= f4; f4--) aYn[nG]++, this.eh[aZ0[em][f4]] = nG;
							break
						}
					}
				}
				aYy[em] = !0
			}
		}, this.aYq = function(yu, yv, aYn) {
			for (var aB, i3, ej = this.kU.length - 1, border = bK.dq(aD.k7, aD.x4), aZ1 = (0 < aD.k7 % aD.x4 && border++, new Uint8Array(1 + ej)), f3 = ej; 1 <= f3; f3--) aZ1[this.kU[f3]] = f3;
			for (aB = 0; aB < aD.k7; aB++) i3 = aZ1[yu[aB] + 1], 0 === this.eh[aB] && i3 <= aD.x4 && aYn[i3] < border && (aYn[i3]++, this.eh[aB] = i3);
			for (aB = 0; aB < aD.k7; aB++) i3 = aZ1[yv[aB] + 1], 0 === this.eh[aB] && i3 <= aD.x4 && aYn[i3] < border && (aYn[i3]++, this.eh[aB] = i3);
			for (f3 = aD.x4; 1 <= f3; f3--)
				for (aB = aD.k7 - 1; 0 <= aB && !(aYn[f3] >= border); aB--) 0 === this.eh[aB] && (aYn[f3]++, this.eh[aB] = f3)
		}, this.aYr = function() {
			for (var aB = aD.k7; aB < aD.eg; aB++) this.eh[aB] = 1 + aB % aD.x4
		}
}

function gY() {
	for (var eq, es, aB = ff - 1; 0 <= aB; aB--) eq = bK.dq(fh[aB], 4) % bR.eu, es = bK.dq(fh[aB], 4 * bR.eu), ag.ia[fa] = Math.min(eq, ag.ia[fa]), ag.ic[fa] = Math.min(es, ag.ic[fa]), ag.ib[fa] = Math.max(eq, ag.ib[fa]), ag.ie[fa] = Math.max(es, ag
		.ie[fa])
}

function ft() {
	var em, gH, aB, ej = ag.gB[fa].length,
		el = ac.el;
	loop: for (aB = ej - 1; 0 <= aB; aB--) {
		for (em = 3; 0 <= em; em--)
			if (gH = ag.gB[fa][aB] + el[em], ac.ea(gH) || ac.gJ(gH) && ac.eb(gH) !== fa) {
				ac.jK(ag.gB[fa][aB], fa);
				continue loop
			} ag.gB[fa][aB] = ag.gB[fa][ej - 1], ag.gB[fa].pop(), ej--
	}
}

function fu() {
	var player = fa,
		gP = ag.gP,
		gQ = ag.gQ,
		f9 = ag.f9,
		ej = gP[player].length,
		el = ac.el;
	loop: for (var aB = ej - 1; 0 <= aB; aB--) {
		for (var aZ2 = !1, aZ3 = !1, em = 3; 0 <= em; em--) {
			var gH = gP[player][aB] + el[em];
			if (ac.aGW(gH, player)) continue loop;
			aZ2 = aZ2 || ac.hy(gH), aZ3 = aZ3 || ac.aGV(gH)
		}
		aZ2 ? gQ[player].push(gP[player][aB]) : aZ3 ? f9[player].push(gP[player][aB]) : ac.xW(gP[player][aB], player), gP[player][aB] = gP[player][ej - 1], gP[player].pop(), ej--
	}
}

function gN() {
	ag.gX[fe] -= ff
}

function gO(border) {
	for (var ej = border.length, aB = ej - 1; 0 <= aB; aB--) ac.xq(fe, border[aB]) || (border[aB] = border[ej - 1], border.pop(), ej--)
}

function gR(border) {
	for (var ej = border.length, aB = ej - 1; 0 <= aB; aB--) !ac.xq(fe, border[aB]) && ac.ee(border[aB]) && (border[aB] = border[ej - 1], border.pop(), ej--)
}

function gS(border) {
	for (var em, gH, ej = border.length, el = ac.el, aB = ej - 1; 0 <= aB; aB--)
		for (em = 3; 0 <= em; em--)
			if (gH = border[aB] + el[em], ac.aGW(gH, fe)) {
				ag.gP[fe].push(border[aB]), border[aB] = border[ej - 1], border.pop(), ej--;
				break
			}
}

function gT() {
	for (var em, gH, el = ac.el, aB = ff - 1; 0 <= aB; aB--)
		for (em = 3; 0 <= em; em--) gH = fh[aB] + el[em], ac.aGX(fe, gH) && ac.aGY(gH) && (ag.gP[fe].push(gH), ac.gE(gH, fe))
}

function gU() {
	var eq, es;
	loop: for (; ag.ic[fe] < ag.ie[fe];) {
		for (eq = ag.ib[fe]; eq >= ag.ia[fe]; eq--)
			if (ac.xq(fe, 4 * (ag.ic[fe] * bR.eu + eq))) break loop;
		ag.ic[fe]++
	}
	loop: for (; ag.ic[fe] < ag.ie[fe];) {
		for (eq = ag.ib[fe]; eq >= ag.ia[fe]; eq--)
			if (ac.xq(fe, 4 * (ag.ie[fe] * bR.eu + eq))) break loop;
		ag.ie[fe]--
	}
	loop: for (; ag.ia[fe] < ag.ib[fe];) {
		for (es = ag.ie[fe]; es >= ag.ic[fe]; es--)
			if (ac.xq(fe, 4 * (es * bR.eu + ag.ia[fe]))) break loop;
		ag.ia[fe]++
	}
	loop: for (; ag.ia[fe] < ag.ib[fe];) {
		for (es = ag.ie[fe]; es >= ag.ic[fe]; es--)
			if (ac.xq(fe, 4 * (es * bR.eu + ag.ib[fe]))) break loop;
		ag.ib[fe]--
	}
}

function ec(player, jH) {
	return 0 === bf.eh[player] || bf.eh[player] !== bf.eh[jH]
}

function hH(player, jH) {
	for (var e, aZ4 = ad.fq(player), aB = 0; aB < aZ4; aB++)
		if ((e = ad.fv(player, aB)) === aD.eg) {
			if (jH === aD.eg) return !1;
			if (hF(jH)) return !0
		} else if (b9.g5.l3(e))
		if (jH === aD.eg) {
			if (hF(e)) return !0
		} else if (hJ(jH, e)) return !0;
	return !1
}

function hF(player) {
	for (var aB, gI, ej = ag.gP[player].length, el = ac.el, em = 3; 0 <= em; em--)
		for (gI = el[em], aB = 0; aB < ej; aB++)
			if (ac.ea(ag.gP[player][aB] + gI)) return !0;
	return !1
}

function aGf(player) {
	for (var aB, gI, ej = ag.gP[player].length, el = ac.el, em = 3; 0 <= em; em--)
		for (gI = el[em], aB = 0; aB < ej; aB++)
			if (ac.jJ(ag.gP[player][aB]) && ac.ea(ag.gP[player][aB] + gI)) return !0;
	return !1
}

function hJ(a3E, a3F) {
	for (var aB, dp, gI, gH, aWY = ag.gP[a3E].length, aWZ = ag.gP[a3F].length, el = (aWZ < aWY && (dp = a3E, a3E = a3F, a3F = dp, dp = aWY, aWY = aWZ, 0), ac.el), em = 3; 0 <= em; em--)
		for (gI = el[em], aB = 0; aB < aWY; aB++)
			if (gH = ag.gP[a3E][aB] + gI, ac.gJ(gH) && ac.eb(gH) === a3F) return !0;
	return !1
}

function aGg(a3E, a3F) {
	for (var aB, gI, gH, aWY = ag.gP[a3E].length, el = ac.el, em = 3; 0 <= em; em--)
		for (gI = el[em], aB = 0; aB < aWY; aB++)
			if (ac.jJ(ag.gP[a3E][aB]) && (gH = ag.gP[a3E][aB] + gI, ac.gJ(gH)) && ac.eb(gH) === a3F) return !0;
	return !1
}

function dS() {
	this.q0 = new aZ5
}

function aZ5() {
	this.hM = function(player) {
		b9.g5.a3A(player) && aN.yH(80, L(479), 637, 0, bA.oT, bA.nb, -1, !1)
	}, this.hP = function(player) {
		b9.g5.a3A(player) && aN.yH(80, L(480), 637, 0, bA.oT, bA.nb, -1, !1)
	}
}

function aZ6() {
	this.aZ7 = 0, this.j0 = function() {
		aO.j0(), aZ.j0(), h.j0(), az.y.j0(), aw.aFs(), be.dh && (be.dh = !1, aa.ub())
	}
}

function aZ8() {
	this.eI = be.eI, this.e4 = 0, this.aZ7 = 0, this.aFq = 0, this.aZ9 = null, this.aZA = 7, this.a6i = 0, this.dZ = function() {
		this.aFq = 0, this.aZ9 = [], this.e4 = 0, this.aZ7 = 0
	}, this.aRx = function(aC) {
		if (aD.h7) this.aAv(aC);
		else if (this.aZ9.push(aC), 2 === aD.zo) {
			for (var aB = 0; aB < this.aZ9.length; aB++) b7.ow.j0(this.aZ9[aB]);
			this.aZ9 = []
		}
	}, this.aAv = function(aC) {
		2 !== aD.zo && (b7.ow.j0(aC), b8.j0(), aW.aAv(this.aFq), this.aFq === aD.a4G ? (aD.pr.j0(), this.aFq = 0, this.e4 = 0, this.aZ7 = 0, this.eI = be.eI) : (this.aFq++, af.a49(), af.mQ(!0), ba.aBV()))
	}, this.j0 = function() {
		h.j0(), aD.h7 ? (be.dh = aW.aAv(-1) || be.dh, mS()) : (0 !== this.e4 || be.eI >= this.eI && (this.eI += be.aAu * Math.floor(1 + (be.eI - this.eI) / be.aAu), 2 === aD.zo ? mH() : this.aZB(), this.e4++, 27 < be.eI - this.a6i)) && this
		.aZC(), mN(), be.dh && (be.dh = !1, xt()), this.a6i = be.eI
	}, this.aZC = function() {
		be.dh = !0, mP(), this.e4 = 0
	}, this.aZB = function() {
		var vJ, aB;
		if (this.aZ7 !== 7 * this.aFq) mJ(), ba.aBV();
		else {
			vJ = !1;
			loop: for (; this.aZD() && (vJ = !0, mJ(), 2 !== aD.zo) && 0 < this.aZ9.length;)
				for (aB = this.aZA - 2; 0 <= aB; aB--)
					if (mJ(), 2 === aD.zo) break loop;
			vJ ? ba.aBV() : (mH(), ba.a4C())
		}
	}, this.aZD = function() {
		return 0 < this.aZ9.length && (this.aFq++, b7.ow.j0(this.aZ9[0]), this.aZ9.shift(), !0)
	}
}

function aZE() {
	var aZF, aZG, aZH, aFq, aZI, e4 = 0,
		eI = be.eI;

	function aZL() {
		! function() {
			if (!aD.h7) return;
			if (aD.kR) return;
			if (2 !== aD.zo)
				if (aZI % 7 != 0) aZI++;
				else if (aFq === aD.a4G) {
				if (!aZO()) return;
				aW.aAv(aFq), aD.pr.j0()
			} else {
				if (!aZO()) return;
				aZI++, aFq++, af.a49(), af.mQ(!0)
			}
			return 1
		}() && aZO() && mJ()
	}

	function aZM() {
		e4 = 0, (aD.h7 ? (be.dh = aW.aAv(aFq - (aZI % 7 == 0 ? 0 : 1) + aZI % 7 / 7) || be.dh, mS) : aM.gt || !bB.a4d ? mS : (be.dh = !0, mP))()
	}

	function aZO() {
		var aB, ej, aZP = b8.pp.aTI,
			fS = b8.pp.aTJ,
			fU = b8.pp.aTK,
			fW = b8.pp.aTL,
			aZQ = b8.pp.aTM,
			aZR = b8.pp.aTN;
		if (!(aZF >= aZR.length)) {
			if (aZR = aZR[aZF], aZQ[aZF]) {
				for (ej = aZG + aZR, aB = aZG; aB < ej; aB++) b7.ow.pd(aZP[aB], fS[aB], fU[aB], fW[aB]);
				aZG += aZR, aZF++
			} else ++aZH >= aZR && (aZF++, aZH = 0);
			return 1
		}
		aN.a16("Replay file smaller than expected."), bB.a1v(!1), aD.zo = 2
	}
	this.aZ7 = 0, this.dZ = function() {
		aZI = aFq = aZH = aZG = aZF = 0
	}, this.j0 = function() {
		var aWz;
		h.j0(), bB.a8K() < 1.7 ? 0 === e4 ? be.eI >= eI && (aWz = be.aAu / bB.a8K(), eI += aWz * Math.floor(1 + (be.eI - eI) / aWz), 2 === aD.zo || aM.gt || !bB.a4d ? mH() : (aZL(), ba.aBV()), e4++) : aZM() : function() {
			var aWz;
			if (be.eI >= eI)
				if (2 === aD.zo || aM.gt || !bB.a4d) mH(), eI = be.eI;
				else {
					for (aWz = be.aAu / bB.a8K(), 16 < (be.eI - eI) / aWz && (eI = be.eI - 16 * aWz); be.eI >= eI && 2 !== aD.zo;) eI += aWz, aZL();
					ba.aBV()
				} aZM()
		}(), mN(), be.dh && (be.dh = !1, xt())
	}, this.zy = function() {
		b8.pp.aTN.length - aZF <= 2 || aN.a16("Replay file larger than expected.")
	}
}

function aZS() {
	var e4 = 0,
		eI = be.eI;
	this.aZ7 = 0, this.j0 = function() {
		h.j0(), aD.h7 ? mS() : 0 === e4 ? be.eI >= eI && (eI += be.aAu * Math.floor(1 + (be.eI - eI) / be.aAu), 2 === aD.zo || aM.gt ? mH() : (mJ(), ba.aBV()), e4++) : ((aM.gt ? mS : (be.dh = !0, mP))(), e4 = 0), mN(), be.dh && (be.dh = !1, xt())
	}
}

function dO() {
	this.zx = null, this.dh = !1, this.eI = 0, this.aAu = 56;
	var aZT = 0;

	function aZU() {
		be.eI = aZT = performance.now(), be.zx.j0(), window.requestAnimationFrame(aZU)
	}
	this.dZ = function() {
		this.a4a(), window.requestAnimationFrame(aZU), this.eI = performance.now()
	}, this.a4R = function() {
		aD.gs ? (this.zx = new aZE, this.zx.dZ()) : aD.kR ? this.zx = new aZS : (this.zx = new aZ8, this.zx.dZ())
	}, this.a4a = function() {
		this.zx = new aZ6, this.dh = !0
	}, this.j0 = function() {
		this.zx.aZ7++
	}, this.k4 = function() {
		return this.zx.aZ7
	}, this.aRZ = function() {
		var dp = performance.now();
		dp < aZT + 1e3 || (this.eI = dp, this.zx.j0())
	}
}

function cq() {
	var aFG = 0,
		aZV = !0;

	function aZW(id) {
		id = [L(481), L(482), L(483), L(484)][id];
		aN.a6O(id)
	}
	this.j0 = function() {
		var dp, a6k;
		be.eI < aFG || (aFG = be.eI + 5e3, aD.gs) || aD.kR || b9.g5.gv(aD.eT) || (dp = new Date, a6k = dp.getUTCSeconds(), aZV ? a6k < 50 && (aZV = !1) : a6k < 50 || (aZV = !0, (a6k = (dp.getUTCMinutes() + 1) % 60) % 5 == 0 && (0 == a6k || 20 ==
			a6k || 40 == a6k ? aD.kP < 7 && aZW(0) : 10 == a6k || 30 == a6k || 50 == a6k ? 7 !== aD.kP && 10 !== aD.kP || aZW(1) : 5 == a6k || 25 == a6k || 45 == a6k ? 8 === aD.kP && aZW(2) : 35 == a6k && 9 === aD.kP && aZW(3))))
	}
}

function ck() {
	var n4, n5, nH, nI, aZX = 0,
		aZY = 0;

	function aZa() {
		return Math.pow(Math.pow(nH - n4, 2) + Math.pow(nI - n5, 2), .5)
	}

	function aZZ(e) {
		n4 = h.k * e.touches[0].clientX, n5 = h.k * e.touches[0].clientY, nH = h.k * e.touches[1].clientX, nI = h.k * e.touches[1].clientY
	}
	this.a1N = function(e) {
		return 1 < e.touches.length ? (aZY = be.eI, aZX = 3, aZZ(e), aL.rm(), !0) : (aZX = 0, !1)
	}, this.a1O = function(e) {
		var aKT, i1, i2;
		return 0 !== aD.zo && 1 < e.touches.length && (aZX = Math.max(aZX - 1, 0), aH.nM() && (aKT = aZa(), aZZ(e), e = aZa(), i1 = Math.floor((n4 + nH) / 2), i2 = Math.floor((n5 + nI) / 2), aS.a8l(i1, i2, Math.max(.125, e) / Math.max(.125,
			aKT)), be.dh = !0), !0)
	}, this.a1l = function() {
		var eq, es;
		return !!(aZX && (aZX = 0, be.eI < aZY + 500)) && (eq = (n4 + nH) / 2, es = (n5 + nI) / 2, aL.a1f(eq, es), aL.click(eq, es, !0) && (be.dh = !0), !0)
	}
}

function cz() {
	this.size = 0, this.e4 = 0, this.aC = null, this.dZ = function(aC) {
		this.e4 = 0, this.aC = aC, this.size = aC.length
	}, this.u5 = function() {
		this.aC = null
	}, this.pc = function(size) {
		for (var fB = 0, aC = this.aC, nM = this.e4 + size - 1, aB = this.e4; aB <= nM; aB++) fB |= (aC[aB >> 3] >> 7 - (7 & aB) & 1) << nM - aB;
		return this.e4 += size, this.e4 > 8 * this.size && console.error("Unwrapper Overflow"), fB
	}, this.aS5 = function(size) {
		var f3 = size >> 1;
		return (1 << f3) * this.pc(size - f3) + this.pc(f3)
	}, this.aS6 = function(aZb) {
		return this.size === bC.aS4(aZb)
	}, this.aTa = function(wj, aZc, aZd) {
		var gC = this.pc(wj);
		if (!gC) return null;
		for (var wj = Math.max(gC, aZd), g = new(aZc <= 8 ? Uint8Array : aZc <= 16 ? Uint16Array : Uint32Array)(wj), aB = 0; aB < gC; aB++) g[aB] = this.pc(aZc);
		aZd = g[gC - 1];
		return aZd && g.fill(aZd, gC), g
	}, this.aTb = function(wj, aZe, aZd) {
		var gC = this.pc(wj);
		if (!gC) return null;
		for (var wj = Math.max(gC, aZd), g = new Array(wj), aB = 0; aB < gC; aB++) g[aB] = this.aTY(aZe);
		return g.fill(g[gC - 1], gC), g
	}, this.aTY = function(wj) {
		return bF.vq.vu(this.pc(wj))
	}, this.aTZ = function() {
		var qC = bE.sm.sn(bE.sm.so(this.pc(30))),
			qC = b9.rU.a44(qC, "_", "/");
		qC = b9.rU.a44(qC, "-", "+");
		for (var aZf = "";
			(qC.length + aZf.length) % 4;) aZf += "=";
		qC = "data:image/png;base64," + qC + aZf;
		var aHB = new Image;
		aHB.onload = function() {
			b8.aHa.aHb(aHB), aHB.onload = null, aHB = null
		}, aHB.src = qC
	}
}

function dI() {
	this.aUQ = 0, this.aUR = 0, this.aUM = 0, this.aUN = 0, this.aUO = 0, this.aUP = 0, this.aBW = [0, 0, 0, 0], this.nL = function() {
		this.aUQ = aS.xv(), this.aUR = aS.xw(), this.aUM = -this.aUQ, this.aUN = -this.aUR, this.aUO = h.i / hv, this.aUP = h.j / hv, this.aBW[0] = Math.floor(this.aUM), this.aBW[1] = Math.floor(this.aUN), this.aBW[2] = Math.floor(this.aBW[0] +
			this.aUO + 1), this.aBW[3] = Math.floor(this.aBW[1] + this.aUP + 1), ba.aBT = !0
	}
}

function cl() {
	var a7Q, mr;
	this.dZ = function() {
		a7Q = 1, mr = 0
	}, this.j0 = function() {
		0 < a7Q && (mr = 0 === mr ? be.eI + 16 : mr, a7Q = (a7Q -= .001 * (be.eI - mr)) < 0 ? 0 : a7Q, mr = be.eI, be.dh = !0)
	}, this.ub = function() {
		0 < a7Q && (uc.fillStyle = "rgba(0,0,0," + a7Q + ")", uc.fillRect(0, 0, h.i, h.j))
	}
}

function a6() {
	this.size = 0, this.e4 = 0, this.aC = null, this.dZ = function(aC) {
		this.e4 = 0, this.aC = aC, this.size = aC.length
	}, this.a7 = function(aZb) {
		return this.dZ(new Uint8Array(this.aS4(aZb))), this.aC
	}, this.u5 = function() {
		this.aC = null
	}, this.a8 = function(size, a6o) {
		for (var aC = this.aC, nM = this.e4 + size - 1, aB = this.e4; aB <= nM; aB++) aC[aB >> 3] |= (a6o >> nM - aB & 1) << 7 - (7 & aB);
		this.e4 += size, this.e4 > 8 * this.size && console.error("Wrapper Overflow")
	}, this.aS3 = function(size, a6o) {
		var f3 = size >> 1,
			em = 1 << f3;
		this.a8(size - f3, bK.dq(a6o, em)), this.a8(f3, a6o % em)
	}, this.aZi = function(size) {
		for (var aC = this.aC, nM = this.e4 + size, aB = this.e4; aB < nM; aB++) aC[aB >> 3] &= 255 ^ 128 >>> (7 & aB)
	}, this.aS4 = function(aZb) {
		return aZb + 7 >> 3
	}, this.aZj = function(g, jO, nM, aZk) {
		for (var aB = jO; aB < nM; aB++) this.a8(aZk, g[aB])
	}
}

function cy() {
	this.dZ = function() {
		this.g = [], this.e4 = 0
	}, this.aSS = function() {
		return new Uint8Array(this.g)
	}, this.a8 = function(aZl, value) {
		for (var g = this.g, nM = this.e4 + aZl - 1, aZm = 1 + (nM >> 3); g.length < aZm;) g.push(0);
		for (var aB = this.e4; aB <= nM; aB++) g[aB >> 3] |= (value >> nM - aB & 1) << 7 - (7 & aB);
		this.e4 += aZl
	}, this.dg = function(g, wj, aZc) {
		var aZn = b9.qd.a2X(g);
		this.a8(wj, aZn);
		for (var aB = 0; aB < aZn; aB++) this.a8(aZc, g[aB])
	}, this.aTs = function(g, wj, aZe) {
		var aZn = b9.qd.a2X(g);
		this.a8(wj, aZn);
		for (var aB = 0; aB < aZn; aB++) this.aTq(g[aB], aZe)
	}, this.aTq = function(qC, wj) {
		var ej = qC.length;
		this.a8(wj, ej);
		for (var aB = 0; aB < ej; aB++) this.a8(16, qC.charCodeAt(aB))
	}, this.aTr = function(a2d) {
		var aZo = (a2d = a2d.toDataURL()).split(",");
		if (aZo.length < 2) console.log("error 266");
		else {
			a2d = b9.rU.a44(a2d = aZo[aZo.length - 1], "/", "_"), a2d = b9.rU.a44(a2d, "\\+", "-");
			var a2d = b9.rU.a44(a2d, "=", ""),
				w3 = bF.sm.w0(a2d),
				ej = w3.length;
			this.a8(30, ej);
			for (var aB = 0; aB < ej; aB++) this.a8(6, w3[aB])
		}
	}
}
a(), self.aiCommand746 = function(fB) {
	0 === fB ? br() : 1 !== fB || !a0 || 1 !== a0.id || a0.dr < 14 || bI.fC()
}, setTimeout(br, 1e4), window.onload = function() {
	br()
};