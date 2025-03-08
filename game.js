var l, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, at, au, av, h, aw, ax, ay, az, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, bA,
	bB, bC, bD, bE, bF, bG, bH, bI, bJ, bK, bL, bM, bN, bO, bP, bQ, bR, s, bS, bT, bU, bV, bW, bX, bY, bZ, ba, bb, bc, bd, be, bf, z, bg, bh, bi, q, bj, bk, bl, bm, bn, fM, fN, fO, fP, fQ, fR, fS, fT, fU, fV, fW, fX, fY, i9, i8, iA, a6S, l3, jY, a0L,
	te, x1, aAH, a3V, a3W, S = ["div", "100%", "⬅️ ", "absolute", "canvas", "none", "inherit", "rgb(", "rgba(", "center", "auto", "   ", "<br>", "hidden", "flex", "Data", "1em", "0.8em", "territorial.io", "span", "input",
		"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==", "click", "0.5em", "' target='_blank'>", " / ",
		"undefined", "bold", "</a>", "pointer", "password", "function", "break-word", "Value", "Escape", "Enter", "0.6em", "text", "string", "scroll", "rgba(0,0,0,0.8)", "number", "nowrap", "mouseleave", "focus", "blur", "Space", "Player ",
		"NoStack", "50%", "1.2em", "0px", "0.4em", "0.0em 0.9em", " voted with ", "   Gold: ", "🔄 Reload", "wheel", "underline", "top", "tls7", "Trebuchet MS", "rgba(140,10,10,0.75)", "rgba(100,0,0,0.8)", "rgba(10,140,10,0.75)", "rgba(0,100,0,0.8)",
		"rgba(0,", "rgb(10,220,10)", "pre-wrap", "pre", "placeholder", "mouseover", "mouseout", "middle", "long", "logo", "loading", "keydown", "italic ", "inline-block", "file", "error", "en-US", "data:image/png;base64,", "break-all", "blur(4px)",
		"arena", "account", "accept", "_blank", "Seed", "Report", "Reload", "Interest", "Bot ", "Battle Royale", "Back", "Arial Black, Trebuchet MS", "@room", "1v1", "1.4em", "1 Minute", "1 Hour", "1 Day", "000", "0.75em", "0.4em 0em", "0.2em",
		"0.02em brown", ". Duration: x", ",0,0.85)", " solid white;}", " Rank: ", " / 160", " -> "
	];

function a() {
	var b, c;

	function o() {
		(b = new WebSocket("wss://territorial.io/s52/")).onopen = a2, b.onclose = function() {
			a3()
		}
	}

	function a2() {
		if (b && b.readyState === b.OPEN) {
			var i = new a5;
			i.a6(1608), i.a7(1, 0), i.a7(6, 7), i.a7(2, z ? z.id : 3), i.a7(1, l.a8 ? 1 : 0), i.a7(1, l.a9 ? 1 : 0), i.a7(1, l ? l.m : 0);
			for (var aA = 0; aA < c.length && aA < 228; aA++) i.a7(7, c.charCodeAt(aA) % 128);
			b.send(i.aB), a3()
		}
	}

	function a3() {
		b && (b.onclose = null, b.onopen = null, b = null)
	}
	window.addEventListener("error", function d(e) {
		window.removeEventListener("error", d);
		return alert("Error:\n" + e.filename + " " + e.lineno + " " + e.colno + " " + e.message);
		c = "";
		try {
			var g;
			if (window.removeEventListener("error", d), c = e.lineno + " " + e.colno + "|" + function(e) {
					if (!e.error) return "NoStack";
					var stack = e.error.stack;
					if (!stack || !stack.length) return "NoStack";
					for (var match, a4 = new RegExp(":([0-9]+):([0-9]+)", "g"), result = []; null !== (match = a4.exec(stack));) result.push(parseInt(match[1], 10)), result.push(parseInt(match[2], 10));
					return result.length ? result.join(" ") : "NoStack"
				}(e), performance.memory && ((g = []).push(Math.floor(performance.memory.jsHeapSizeLimit / 1e5)), g.push(Math.floor(performance.memory.totalJSHeapSize / 1e5)), g.push(Math.floor(performance.memory.usedJSHeapSize / 1e5)), c =
					c + "|" + g.join(" ")), c = (c = h ? c + "|R" + h.i + "," + h.j + "," + h.k.toFixed(2) : c) + "|" + e.message, l && 1 === l.m) {
				if (c = l.n + "|" + c, e.lineno < 43) return void o();
				var p = "What happened? Please send us a detailed email to davidtschacher@gmail.com so we can fix this error!";
				p += "<br>Error Message: " + c, q.r(), s.t(4, 5, new u("🤖 Beep Boop! An error occurred.", p, !0, [new v("Close", function() {
					s.w(), s.x.y()
				}), new v("Reload", function() {
					z.a0.a1()
				})]))
			}
		} catch (e) {
			c = "SE|" + c + "|" + e, console.log(c), alert(c)
		}
		o()
	})
}

function bo(bp) {
	l && !bp || (br(), bJ = new bs, bI = new bt, b8 = new bu, b9 = new bv, aC = new bw, b5 = new bx, bD = new by, bE = new bz, aD = new c0, aE = new c1, aF = new c2, aG = new c3, aH = new c4, aI = new c5, aJ = new c6, aK = new c7, aL = new c8, aM =
		new c9, aN = new cA, aO = new cB, aP = new cC, aQ = new cD, aR = new cE, aS = new cF, aT = new cG, aU = new cH, aV = new cI, aW = new cJ, aX = new cK, aY = new cL, aZ = new cM, aa = new cN, ab = new cO, aj = new cP, ak = new cQ, al =
		new cR, ac = new cS, ad = new cT, ag = new cU, ae = new cV, af = new cW, ah = new cX, ax = new cY, ai = new cZ, an = new ca, ao = new cb, ap = new cc, ay = new cd, aw = new ce, am = new cf, aq = new cg, ar = new ch, at = new ci, h =
		new cj, au = new ck, av = new cl, az = new cm, b0 = new cn, b1 = new co, b2 = new cp, b3 = new cq, b4 = new cr, b6 = new cs, b7 = new ct, bA = new cu, bB = new a5, bC = new cv, bF = new cw, bG = new cx, bH = new cy, bK = new cz, bL =
		new d0, bM = new d1, bN = new d2, bO = new d3, bP = new d4, bQ = new d5, bR = new d6, s = new d7, bS = new d8, z = new d9, l = new dA, bg = new dB, bh = new dC, be = new dD, bf = new dE, bY = new dF, bZ = new dG, bT = new dH, bU = new dI,
		bb = new dJ, bc = new dK, bd = new dL, bi = new dM, ba = new dN, q = new dO, bj = new dP, bk = new dQ, bl = new dR, bn = new dS, l.dU(), z.dU(), h.dV(), bh.dU(), b5.dU(), b5.dW(), (bV = new dX).dU(), b8.dU(), bT.dU(), ay.dU(), bD.dU(), bE
		.dU(), bQ.dU(), s.dU(), bW = new dY, h.dU(), z.a0.dZ(), bd.dU(), ba.dU(), bU.dU(), bX = new da, aw.dU(), ad.db(), bS.dU(), an.dU(), aZ.dU(), aS.dU(), ah.dU(), bH.dU(), aa.dU(), bd.dc = !0, setTimeout(function() {
			bQ.a6(2, 14071)
		}, 0), s.t(5, 5), bG.dd() || z.a0.de(), h.df(), l.m = 1)
}

function dA() {
	this.dg = 1093, this.n = 2050, this.rVersion = 8, this.dU = function() {
		this.dh = 2;
		var di = bJ.dj(this.n, 10) % 100;
		this.dk = "8 Mar 2025 [" + bJ.dj(this.n, 1e3) + "." + (di < 10 ? "0" : "") + di + "." + this.n % 10 + "]", this.a8 = true, this.a9 = function() {
			try {
				return window.self !== window.top
			} catch (e) {
				return !0
			}
		}(), this.dm = (new Date).getTime() % 1024
	}, this.m = 0
}

function dn() {
	var dp = [L(0), L(1), L(2), L(3), L(4), L(5), L(6)],
		dq = [100, 60, 30, 15, 6, 1],
		dr = [
			[0, 0, 0, 0, 0],
			[0, 1, 1, 1, 1],
			[1, 2, 1, 1, 1],
			[1, 3, 2, 1, 2],
			[1, 4, 2, 2, 3],
			[1, 4, 3, 3, 4],
			[1, 5, 3, 3, 5]
		],
		ds = [" kicked ", " muted ", " redacted the username of ", " deducted x from ", " seized x from ", " reported "],
		dt = [".", ". Duration: x", ". Duration: x", ".", ".", ". Reason: x"];
	this.du = [
		["", "", ""],
		["20 Seconds", "1 Minute", "5 Minutes", "1 Hour", "1 Day"],
		["1 Minute", "1 Hour", "1 Day"],
		["1 Elo Point", "2 Elo Points", "4 Elo Points"],
		["0.5 Gold", "1 Gold", "2 Gold", "5 Gold", "10 Gold"],
		["Bad Username", "Cheating or Exploiting", "Inappropriate Content", "Bullying or Harassment"]
	], this.dv = function(id, dw, dx) {
		dw = this.dy(dw);
		return +(dr[dw][id] > dx)
	}, this.dy = function(dw) {
		for (var aA = 0; aA < dq.length; aA++)
			if (dq[aA] <= dw) return aA;
		return dq.length
	}, this.dz = function(dw) {
		return dp[this.dy(dw)]
	}, this.e0 = function(id, e1) {
		return ds[id].replace(new RegExp("x", "g"), e1)
	}, this.e2 = function(id, e1) {
		return dt[id].replace(new RegExp("x", "g"), e1)
	}
}

function d8() {
	this.e3 = new e4, this.dU = function() {
		z.a0.e5()
	}
}

function e4() {
	var e6 = 2e4;
	this.show = function() {
		if (bd.e7 < e6) return !1;
		e6 = bd.e7 + 135e4, 2 === l.dh && z.a0.e8(Math.floor(135e4))
	}
}

function cR() {
	this.e9 = new eA
}

function eA() {
	this.eB = function(eC) {
		var eF;
		return bQ.eD(bQ.eE) && aC.data.passableMountains && (eF = ab.eG(eC), this.eH(aC.eI, eF) || this.eJ(aC.eI, eF)) && 0 !== (eF = function(ee) {
			for (var ef = bK.eg(ee), eh = bK.ei(ee), max = Math.max(bQ.ej, bQ.ek) - 2, el = max * max, em = !1, en = 0, eo = 0; eo < max; eo++) {
				var ep, eK = function(ef, eh, eo) {
					for (var aA = 0; aA <= eo; aA++)
						for (var er = -1; er < 2; er += 2)
							for (var es = -1; es < 2; es += 2)
								for (var et = 0; et < 2; et++) {
									var eC = function(ef, eh) {
										if (bK.ev(ef, eh)) {
											ef = bK.ew(ef, eh), eh = bK.eO(ef);
											if (ab.eT(eh) && ab.ex(eh)) return ef
										}
										return 0
									}(ef + et * er * aA + (1 - et) * es * eo, eh + et * es * eo + (1 - et) * er * aA);
									if (eC) return eC
								}
					return 0
				}(ef, eh, eo);
				eK && (ep = bK.eq(ef, eh, eK)) < el && (en = eK, el = ep, em || (em = !0, max = Math.floor(Math.sqrt(ep)) + 1))
			}
			return en
		}(bK.eM(eC))) && (eC = bK.eO(eF), ab.eP(eC) || (eC = ab.eQ(eC)) !== aC.eI && eR(eC, aC.eI)) ? eF : 0
	}, this.eS = function(player, eK) {
		eK = bK.eO(eK);
		if (ab.eT(eK)) {
			if (ab.eP(eK)) bM.eU[0] = aC.eV;
			else if (ab.eQ(eK) !== bM.eU[0]) return !1;
			for (var eW = function(eC) {
					var ea = ab.ea,
						eW = [];
					loop: for (var eb = 3; 0 <= eb; eb--) {
						var ec = eC + ea[eb];
						if (ab.ed(ec)) {
							for (var id = ab.eG(ec), aA = 0; aA < eW.length; aA++)
								if (id === eW[aA]) continue loop;
							bM.eZ[eW.length] = ec, eW.push(id)
						}
					}
					return eW
				}(eK), eY = eW.length, aA = 0; aA < eY; aA++)
				if (this.eH(player, eW[aA]) || this.eJ(player, eW[aA])) return bM.eZ[0] = bM.eZ[aA], !0
		}
		return !1
	}, this.eH = function(player, eF) {
		for (var ey = af.ey[player], eY = ey.length, ez = Math.max(bJ.dj(eY, 12), 1), ea = ab.ea, aA = 0; aA < eY; aA += ez)
			for (var eN = ey[aA], eb = 3; 0 <= eb; eb--) {
				var ec = eN + ea[eb];
				if (ab.ed(ec) && eF === ab.eG(ec)) return !0
			}
		return !1
	}, this.eJ = function(player, eF) {
		for (var ey = af.ey[player], eY = ey.length, ea = ab.ea, aA = 0; aA < eY; aA++)
			for (var eN = ey[aA], eb = 3; 0 <= eb; eb--) {
				var ec = eN + ea[eb];
				if (ab.ed(ec) && eF === ab.eG(ec)) return !0
			}
		return !1
	}
}

function d1() {
	this.f2 = new Uint16Array(2), this.f3 = new Uint16Array(2), this.f4 = new Uint32Array(2), this.f5 = new Uint32Array(2), this.f6 = new Uint32Array(2), this.f7 = new Uint8Array(4), this.f8 = new Uint8Array(4), this.eZ = new Uint32Array(4), this
		.f9 = new Uint32Array(5), this.eU = new Uint32Array(8), this.fA = new Uint16Array(16), this.fB = new Uint16Array(512), this.fC = new Uint16Array(512), this.fD = new Uint16Array(512), this.fE = function(g, fF) {
			return g[0] = fF, g
		}, this.fG = function(g, fF, fH) {
			return g[0] = fF, g[1] = fH, g
		}, this.fI = function(g, fF, fH, fJ) {
			return g[0] = fF, g[1] = fH, g[2] = fJ, g
		}, this.fK = function(g, fF, fH, fJ, fL) {
			return g[0] = fF, g[1] = fH, g[2] = fJ, g[3] = fL, g
		}
}

function fZ() {
	fS = 0, fT = 2048, fU = new Uint32Array(4 * fT), fV = 0, fW = new Uint32Array(fT), fX = new Uint8Array(bQ.ej * bQ.ek)
}

function fa(player) {
	fN = player, fY = !1, fb(), fc();
	for (var aA = ac.fd(fN) - 1; 0 <= aA; aA--) 0 === ac.fe(fN, aA) && (fM = aA, ff());
	fY && fg()
}

function fg() {
	fh(), fi()
}

function ff() {
	fR = ac.fj(fN, fM), fO = ac.fk(fN, fM), fP = ac.fl(fN, fM), fm(), (0 !== fS && (fo(), fp()) ? fq : fn)()
}

function fp() {
	if (!((fQ = bJ.dj(fO, fS)) > aC.fr)) {
		if (!fP) return !1;
		var fs = fS * (1 + aC.fr);
		fO += b8.ft.fu(fN, fs - fO), fQ = bJ.dj(fO, fS)
	}
	return !0
}

function fo() {
	for (var aA = fS - 1; 0 <= aA; aA--) fX[bJ.dj(fU[aA], 4)] = 0
}

function fn() {
	1 === ac.fd(fN) && aE.fv(fN);
	var di = b8.ft.fw(fN, fO);
	bb.fx(fN, fO - di, 12), ac.fy(fN, fM)
}

function fb() {
	for (var player = fN, fz = af.fz, eY = Math.min(fz[player].length, fT), g0 = 0, g1 = fW, aA = eY - 1; 0 <= aA; aA--) g1[g0++] = fz[player][aA];
	fV = g0
}

function fc() {
	for (var aA = af.fz[fN].length - 1; 0 <= aA; aA--) ab.eT(af.fz[fN][aA]) && ab.g2(af.fz[fN][aA], fN);
	af.fz[fN] = []
}

function fm() {
	fS = 0, (fR === aC.eV ? g3 : g4)()
}

function g4() {
	for (var g5, g6, aA, ea = ab.ea, eb = 3; 0 <= eb; eb--)
		for (aA = fV - 1; 0 <= aA; aA--) g5 = fW[aA] + ea[eb], g6 = bJ.dj(g5, 4), 0 === fX[g6] && ab.g7(g5) && ab.eQ(g5) === fR && (fX[g6] = 1, fU[fS++] = g5)
}

function g3() {
	for (var g5, g6, aA, ea = ab.ea, eb = 3; 0 <= eb; eb--)
		for (aA = fV - 1; 0 <= aA; aA--) g5 = fW[aA] + ea[eb], g6 = bJ.dj(g5, 4), 0 === fX[g6] && ab.eP(g5) && (fX[g6] = 1, fU[fS++] = g5)
}

function fq() {
	g8() ? (g9(), fR !== aC.eV && gA()) : fn()
}

function gA() {
	gB(), gC(af.gD[fR]), gC(af.gE[fR]), bQ.eD(bQ.eE) && gC(af.ey[fR]), gF(af.fz[fR]), gG(af.gE[fR]), gG(af.ey[fR]), gH(), gI()
}

function g9() {
	fY = !0, ac.gJ(fN, fM, fO), ac.gK(fN, fM), af.gL[fN] += fS, gM(), gN()
}

function g8() {
	return (fR === aC.eV ? gO : gP)()
}

function gP() {
	var gQ = fS * aC.fr,
		gR = gS(),
		gT = gU(),
		gR = gQ + 2 * gR + gT,
		gW = fQ * fS;
	return gR < gW ? (fO -= gR, bb.fx(fN, gR, 13), gX(gR - gQ, gT), !0) : fP && 0 === gT ? (fO -= gW, gW += b8.ft.fu(fN, gR - gW + 1), bb.fx(fN, gW, 13), gX(gW - gQ, 0), !0) : (fO -= gW, bb.fx(fN, gW, 13), gX(gW - gQ, gT), !1)
}

function gX(gW, gT) {
	if (0 < gT) {
		if (gW <= gT) return bb.fx(fR, gW, 13), void ac.gY(fR, fN, gT - gW);
		ac.gY(fR, fN, 0), gW -= gT
	}
	gW = bJ.dj(gW, 2), gW = Math.min(af.gZ[fR], gW), bb.fx(fR, gW, 13), af.gZ[fR] -= gW
}

function gU() {
	return ac.ga(fR, fN)
}

function gS() {
	return bJ.dj(fS * af.gZ[fR], 1 + bJ.dj(10 * af.gL[fR], 16))
}

function gO() {
	var gb = fS * aC.fr;
	return fO -= gb, bb.fx(fN, gb, 13), !0
}

function gN() {
	for (var aA = fS - 1; 0 <= aA; aA--) af.fz[fN].push(fU[aA]), af.gD[fN].push(fU[aA]), ab.g2(fU[aA], fN)
}

function d6() {
	var gc = 0,
		gd = 0;
	this.ge = function(ef, eh) {
		gc = ef, gd = eh
	}, this.gf = function(gg) {
		aC.gh || aL.gi || (b8.ft.gj(0) || b8.ft.gj(1)) && b8.ft.gk(aC.eI) && (aQ.gl(gc, gd) ? aQ.gm = !1 : aO.gl(gc, gd) || function(gg) {
			var go = bK.gp(gc),
				gq = bK.gr(gd),
				eK = bK.ew(go, gq),
				eC = bK.eO(eK);
			bK.gs(go, gq) && (aC.gt ? ab.eT(eC) && b6.gu.gv(eK) : ab.ed(eC) ? gg || (go = al.e9.eB(eC)) && (gq = bK.eO(go), gq = ab.eP(gq) ? aC.eV : ab.eQ(gq), b6.gu.gy(aQ.gz(), go, gq)) : ab.h0(eC) || gg ? bL.h1.h2(aC.eI, eK) && b6.gu
				.h3(aQ.gz(), eK) : ab.eP(eC) ? h4(aC.eI) ? b6.gu.h5(aQ.gz(), aC.eV) : h6(aC.eI, aC.eV) ? az.h7(aC.eV, aQ.gz()) : bL.h1.h2(aC.eI, eK) && b6.gu.h3(aQ.gz(), eK) : (go = ab.eQ(eC)) !== aC.eI && (eR(go, aC.eI) ? h8(aC.eI,
					go) ? b6.gu.h5(aQ.gz(), go) : h6(aC.eI, go) ? az.h7(go, aQ.gz()) : bL.h1.h2(aC.eI, eK) && b6.gu.h3(aQ.gz(), eK) : bL.h1.h2(aC.eI, eK) && b6.gu.h3(aQ.gz(), eK)))
		}(gg))
	}, this.h9 = function() {
		if (!aC.gh && !aL.gi && b8.ft.gj(1)) {
			var g5 = aC.eI;
			if (b8.ft.gk(g5)) {
				var eY = ac.fd(g5);
				if (eY < 1) ! function() {
					var g5 = aC.eI;
					if (h4(g5)) b6.gu.h5(aQ.gz(), aC.eV);
					else
						for (var ea = ab.ea, gD = af.gD, eY = gD[g5].length, hJ = Math.floor(Math.random() * eY), aA = 0; aA < eY; aA++)
							for (var hK = 3; 0 <= hK; hK--) {
								var hL = gD[g5][(aA + hJ) % eY] + ea[hK];
								if (ab.g7(hL)) {
									hL = ab.eQ(hL);
									if (hL !== g5 && (!aC.hN || eR(g5, hL))) return b6.gu.h5(aQ.gz(), hL)
								}
							}
				}();
				else {
					for (var hB = 0, hC = ac.fk(g5, 0), aA = 1; aA < eY; aA++) {
						var hD = ac.fk(g5, aA);
						hD < hC && (hC = hD, hB = aA)
					}
					b6.gu.h5(aQ.gz(), ac.fj(g5, hB))
				}
			}
		}
	}, this.hE = function() {
		if (!aC.gh && !aL.gi && b8.ft.gk(aC.eI) && b8.ft.gj(1)) return au.hF ? au.hG(aC.eI) ? void b6.gu.hH(1) : void 0 : void(au.hI(aC.eI) && b6.gu.hE())
	}
}

function hO(hP, size, hQ, hR, font) {
	var aA, hU = .2,
		canvas = document.createElement("canvas"),
		hV = canvas.getContext("2d", {
			alpha: !1
		});
	for (canvas.width = hP, canvas.height = hP, hV.font = size + font, hV.textAlign = "center", hV.textBaseline = "middle", hV.fillStyle = "red", aA = 0; aA < hQ.length; aA++) hV.fillText(hQ[aA], .5 * hP, .5 * hP);
	return -1 < (canvas = function(hS) {
		var aA, dw, eb = hS.data;
		for (aA = eb.length - 4; 0 <= aA; aA -= 4)
			if (dw = eb[aA], hR <= dw) return Math.floor(aA / (4 * hP));
		return -1
	}(hV.getImageData(0, 0, hP, hP))) && (hU = (canvas - .5 * hP + .1 * size) / size), Math.max(hU, 0)
}

function cz() {
	this.hX = new Int16Array(4), this.hY = new Int16Array(4), this.dU = function() {
		var aA;
		for (this.hX[0] = -bQ.ej, this.hX[1] = 1, this.hX[2] = bQ.ej, this.hX[3] = -1, aA = 0; aA < 4; aA++) this.hY[aA] = 4 * this.hX[aA]
	}, this.hZ = function(gw, ha) {
		var hb = this.eg(ha) - this.eg(gw),
			ha = this.ei(ha) - this.ei(gw),
			gw = hb >>> 31 << 1;
		return 5 + gw + (1 - gw) * (1 - (ha >>> 31 << 1)) * (Math.abs(hb) - Math.abs(ha) >>> 31) & 3
	}, this.hg = function(gw, ha, hK) {
		return hK % 2 == 0 ? hK + (1 - hK) * (1 - (this.eg(ha) - this.eg(gw) >>> 31 << 1)) + 4 & 3 : hK + (2 - hK) * (1 - (this.ei(ha) - this.ei(gw) >>> 31 << 1)) + 4 & 3
	}, this.hi = function(g5, eK) {
		for (var ha, hj, hl = af.gE[g5], eY = hl.length, i = bQ.ej, hm = this.eg(eK), hn = this.ei(eK), ee = hl[0] >> 2, min = this.eq(hm, hn, ee), aA = 1; aA < eY; aA++)(hj = (hj = hm - (ha = hl[aA] >> 2) % i) * hj + (hj = hn - ~~((.5 + ha) /
			i)) * hj) < min && (min = hj, ee = ha);
		return ee
	}, this.ho = function(player, eC) {
		return !ab.eP(eC) && player === ab.eQ(eC)
	}, this.eq = function(go, gq, eK) {
		return (go -= this.eg(eK)) * go + (gq -= this.ei(eK)) * gq
	}, this.hp = function(hq, hr, hs) {
		hq = this.hu(hq) - this.hv(hs), hr = this.hx(hr) - this.hy(hs);
		return Math.sqrt(hq * hq + hr * hr)
	}, this.hz = function(gw, ha) {
		var ht = this.eg(gw) - this.eg(ha),
			gw = this.ei(gw) - this.ei(ha);
		return Math.sqrt(ht * ht + gw * gw)
	}, this.i0 = function(gw, ha) {
		var ht = this.eg(gw) - this.eg(ha),
			gw = this.ei(gw) - this.ei(ha);
		return ht * ht + gw * gw
	}, this.i1 = function(i2, i3, i4, i5) {
		return (i2 -= i4) * i2 + (i3 -= i5) * i3
	}, this.i6 = function(g5, i7) {
		return bJ.dj(i7 * af.gZ[g5], 1e3)
	}, this.hu = function(hq) {
		return 16 * (hq + i8) / i9
	}, this.hx = function(hr) {
		return 16 * (hr + iA) / i9
	}, this.iB = function(eb) {
		return 16 * eb / i9
	}, this.gp = function(hq) {
		return Math.floor((hq + i8) / i9)
	}, this.gr = function(hr) {
		return Math.floor((hr + iA) / i9)
	}, this.gs = function(go, gq) {
		return 1 <= go && 1 <= gq && go < bQ.ej - 1 && gq < bQ.ek - 1
	}, this.eg = function(eK) {
		return eK % bQ.ej
	}, this.ei = function(eK) {
		return bJ.dj(eK, bQ.ej)
	}, this.ew = function(go, gq) {
		return gq * bQ.ej + go
	}, this.iC = function(eK) {
		return this.ev(this.eg(eK), this.ei(eK))
	}, this.ev = function(go, gq) {
		return 0 < go && go < bQ.ej - 1 && 0 < gq && gq < bQ.ek - 1
	}, this.eO = function(eK) {
		return eK << 2
	}, this.eM = function(eC) {
		return eC >> 2
	}, this.iD = function(eK) {
		return bQ.ej * this.ei(eK) * 256 + (this.eg(eK) << 4)
	}, this.iE = function(eK) {
		return this.iD(eK) + 8 + (bQ.ej << 7)
	}, this.iF = function(hs) {
		return bQ.ej * (this.hy(hs) >> 4) + (this.hv(hs) >> 4)
	}, this.iG = function(hs) {
		hs = this.iF(hs);
		return (this.eg(hs) >> 5) + bL.iH.iI * (this.ei(hs) >> 5)
	}, this.hv = function(hs) {
		return hs % (bQ.ej << 4)
	}, this.hy = function(hs) {
		return bJ.dj(hs, bQ.ej << 4)
	}, this.iJ = function(eK, hK) {
		return eK + this.hX[hK]
	}, this.iK = function(eC, hK) {
		return eC + this.hY[hK]
	}, this.iL = function(player) {
		return this.ew(af.iM[player] + af.iN[player] >> 1, af.iO[player] + af.iP[player] >> 1)
	}, this.iQ = function(player) {
		return this.ew(aw.iR(af.iM[player], af.iN[player]), aw.iR(af.iO[player], af.iP[player]))
	}
}

function cf() {
	this.iS = new iT, this.iU = new iV, this.iW = new iX, this.performance = new iY, this.iZ = new ia, this.ib = new ic, this.ie = new ig, this.dU = function() {
		this.iS.dU(), this.iW.dU(), this.performance.dU(), this.iZ.dU(), this.ib.dU()
	}, this.ih = function() {
		this.performance.ih(), this.iS.ih()
	}
}

function ia() {
	var ii, ik = new Uint16Array(8);

	function iu(size, player) {
		for (var aA = af.fz[player].length - 1; size <= aA; aA--) ab.j1(af.fz[player][aA], player)
	}
	this.dU = function() {
		ii = 0
	}, this.il = function(player, im) {
		return bM.eU[1] = af.fz[player].length, bM.eU[0] === aC.eV ? am.iZ.io(player) : this.ip(player, bM.eU[0]), (0 !== bM.eU[1] || 0 !== af.fz[player].length) && !(!im && bM.eU[1] === af.fz[player].length || (bM.eU[0] === aC.eV ? af.iq[
			player]++ : af.ir[player]++, 0))
	}, this.is = function(player) {
		aC.hN && (am.ib.it[player] = 1), iu(bM.eU[1], player), ac.iv(player, bM.f5[0], bM.eU[0]), aE.iw(player, !1)
	}, this.ix = function(player, iy, eY, hC) {
		var iz = bJ.dj(12 * af.gZ[player], 1024);
		hC -= hC >= bJ.dj(af.gZ[player], 2) ? iz : 0, iu(eY, player), ac.iv(player, hC, iy), af.gZ[player] -= hC + iz, aE.iw(player, !1)
	}, this.ip = function(player, iy) {
		for (var hK, ea = ab.ea, aA = af.gD[player].length - 1; 0 <= aA; aA--)
			if (ab.j0(af.gD[player][aA]))
				for (hK = 3; 0 <= hK; hK--)
					if (ab.g7(af.gD[player][aA] + ea[hK]) && ab.eQ(af.gD[player][aA] + ea[hK]) === iy) {
						af.fz[player].push(af.gD[player][aA]);
						break
					}
	}, this.io = function(player) {
		for (var ea = ab.ea, aA = af.gD[player].length - 1; 0 <= aA; aA--)
			if (ab.j0(af.gD[player][aA]))
				for (var hK = 3; 0 <= hK; hK--)
					if (ab.eP(af.gD[player][aA] + ea[hK])) {
						af.fz[player].push(af.gD[player][aA]);
						break
					}
	}, this.j2 = function(player, j3) {
		var aA, er, hK, hM, eY = af.gD[player].length,
			hh = 256 <= eY ? 12 : 32 <= eY ? 6 : 1,
			j4 = eY - 1 - aw.j5(hh),
			ea = ab.ea;
		ii = 0;
		loop: for (aA = j4; 0 <= aA; aA -= hh)
			for (hK = 3; 0 <= hK; hK--)
				if ((hM = ab.eP(af.gD[player][aA] + ea[hK]) ? aC.eV : ab.eQ(af.gD[player][aA] + ea[hK])) === aC.eV || ab.g7(af.gD[player][aA] + ea[hK]) && hM !== player && (j3 || eR(player, hM))) {
					for (er = ii - 1; 0 <= er; er--)
						if (ik[er] === hM) continue loop;
					if (ik[ii] = hM, 8 <= ++ii) return !0
				}
		return 0 < ii
	}, this.j6 = function(player, j3) {
		var aA, hK, hM, ea = ab.ea;
		for (ii = 0, aA = af.gD[player].length - 1; 0 <= aA; aA--)
			for (hK = 3; 0 <= hK; hK--)
				if ((hM = ab.eP(af.gD[player][aA] + ea[hK]) ? aC.eV : ab.eQ(af.gD[player][aA] + ea[hK])) === aC.eV || ab.g7(af.gD[player][aA] + ea[hK]) && hM !== player && (j3 || eR(player, hM))) return ik[ii++] = hM, !0;
		return !1
	}, this.j7 = function() {
		for (var es, aA = ii - 1; 0 <= aA; aA--)
			if (ik[aA] === aC.eV) {
				for (ii--, es = aA; es < ii; es++) ik[es] = ik[es + 1];
				return !0
			} return !1
	}, this.j8 = function(player) {
		for (var es, aA = ii - 1; 0 <= aA; aA--)
			if (ac.j9(player, ik[aA]))
				for (ii--, es = aA; es < ii; es++) ik[es] = ik[es + 1];
		return 0 === ii
	}, this.jA = function() {
		for (var aA = ii - 1; 0 <= aA; aA--)
			if (b8.ft.jB(ik[aA])) return !0;
		return !1
	}, this.jC = function() {
		for (var aA = ii - 1; 0 <= aA; aA--) b8.ft.jB(ik[aA]) || (ik[aA] = ik[--ii]);
		return 0 < ii
	}, this.jD = function(player) {
		for (var es, jE = ik[0], jF = af.gZ[jE] + ac.ga(jE, player), aA = ii - 1; 1 <= aA; aA--)(es = af.gZ[ik[aA]] + ac.ga(ik[aA], player)) < jF && (jE = ik[aA], jF = es);
		return jE
	}, this.jG = function(player) {
		var j, jH = ik[0];
		if (1 !== ii)
			for (var jI = bJ.dj(af.iN[player] + af.iM[player], 2), jJ = bJ.dj(af.iP[player] + af.iO[player], 2), eo = jK(jI - bJ.dj(af.iN[jH] + af.iM[jH], 2)) + jK(jJ - bJ.dj(af.iP[jH] + af.iO[jH], 2)), aA = ii - 1; 1 <= aA; aA--)(j = jK(jI - bJ
				.dj(af.iN[ik[aA]] + af.iM[ik[aA]], 2)) + jK(jJ - bJ.dj(af.iP[ik[aA]] + af.iO[ik[aA]], 2))) < eo && (eo = j, jH = ik[aA]);
		return jH
	}, this.jL = function() {
		for (var jM = ik, jN = jM[0], gZ = af.gZ, jO = gZ[jN], aA = ii - 1; 1 <= aA; aA--) {
			var g5 = jM[aA],
				es = gZ[g5];
			jO < es && (jN = g5, jO = es)
		}
		return jN
	}, this.jP = function() {
		return ik[aw.j5(ii)]
	}
}

function ic() {
	function je(player, iy, jU) {
		3 <= jU && 2142 < bd.jk() && (iy === aC.eV || af.gZ[iy] < bJ.dj(af.gZ[player], 20)) && aD.jZ(player, 20)
	}

	function jh(player, hC, iy, jU) {
		3 <= jU && jU < 6 && bJ.dj(af.gZ[player], 8) > af.gZ[iy] && (hC = Math.max(bJ.dj(11 * af.gZ[iy], 5), bJ.dj(af.gZ[player], 10)));
		jU = af.fz[player].length;
		am.iZ.ip(player, iy), am.iZ.ix(player, iy, jU, hC)
	}

	function jd(player, hC) {
		var iy = aC.eV,
			eY = af.fz[player].length;
		am.iZ.io(player), af.fz[player].length !== eY && am.iZ.ix(player, iy, eY, hC)
	}
	this.it = new Uint8Array(aC.eV), this.dU = function() {
		this.it.fill(0)
	}, this.jQ = function(player, hC) {
		var jS, jU, jV, jW;
		ac.jR(player) && (jS = ad.jT(player), 3 <= (jU = aD.hC[player]) && jU < 6 && (hC = Math.max(af.gZ[player] - jS, hC)), jV = af.gE[player].length, jW = af.gD[player].length, 30 * af.gL[player] > aC.jX && jY[player] < 10 && 100 * jW <= jV &&
			aD.jZ(player, 10), aC.hN ? function(player, hC, jU, jS) {
				var iy;
				if (am.ib.it[player] = 1, am.iZ.j2(player, !1) || am.iZ.j6(player, !1)) {
					if (!am.iZ.j8(player))
						if (am.iZ.j7()) jd(player, hC), je(player, aC.eV, jU);
						else {
							if (aw.jf(aD.jg[jU])) iy = am.iZ.jD(player);
							else {
								if (am.iZ.jA() && aw.jf(aD.ji[jU]) && am.iZ.jC(), 6 === jU) return jh(player, hC, am.iZ.jP(), jU);
								iy = am.iZ.jG(player)
							}
							jh(player, hC, iy, jU), je(player, iy, jU)
						}
				} else bL.jb.ih(player) || am.ie.ih(player) || (am.ib.it[player] = 0, function(player, hC, jU, jS) {
					var aA, es, et, eW = be.eW,
						jl = eW[player];
					if (0 !== jl) {
						var jm = af.gZ[player],
							gL = af.gL;
						if (player < aC.jn && (hC = jm), !(jm < gL[player] || 5 === jU && jm < jS || 4 === jU && jm < bJ.dj(jS, 2))) {
							var eY = ak.jo,
								jp = ak.jp,
								it = (aA = aw.j5(eY), am.ib.it);
							for (es = 0; es < eY; es++)
								if (et = jp[(es + aA) % eY], 1 === it[et] && eW[et] === jl) return b6.jq.jr(player, et, hC)
						}
					}
				}(player, hC, jU, jS))
			}(player, hC, jU, jS) : (!jW || jV && (jV < jW && !aw.j5(10) || 100 * jW <= jV && aw.j5(3) || !aw.j5(8))) && bL.jb.ih(player) || function(player, hC, jU) {
				am.iZ.j2(player, !0) || am.iZ.j6(player, !0) ? am.iZ.j8(player) || (am.iZ.j7() ? jd(player, hC) : aw.jf(aD.jg[jU]) ? jh(player, hC, am.iZ.jD(player), jU) : 5 === jU ? jh(player, hC, am.iZ.jL(), jU) : (am.iZ.jA() && aw.jf(aD
					.ji[jU]) && am.iZ.jC(), jh(player, hC, 6 === jU ? am.iZ.jP() : am.iZ.jG(player), jU))) : am.ie.ih(player)
			}(player, hC, jU))
	}
}

function c0() {
	var js = new Uint8Array(aC.eV),
		jt = new Uint16Array(aC.eV),
		ju = new Uint16Array(aC.eV),
		jv = new Uint8Array(aC.eV),
		jw = (this.hC = new Uint8Array(aC.eV), new Uint16Array(aC.eV)),
		jx = new Uint16Array(aC.eV);

	function kB(aA) {
		js[aA] = 1 + bJ.dj(jw[aA] * aw.random(), 10 * aw.value(100))
	}
	this.jy = null, this.ji = [97, 94, 70, 40, 20, 0, 100], this.jz = [500, 450, 400, 300, 80, 50, 100], this.jg = [0, 0, 5, 25, 50, 100, 0], this.k0 = [60, 74, 112, 200, 256, 512, 512], this.k1 = [1, 2, 3, 4, 6, 8, 1], this.k2 = [500, 450, 400, 300,
		80, 50, 100
	], this.dV = function() {
		this.jy = [L(7), L(8), L(9), L(10), L(11), L(12), "H Bot"]
	}, this.dU = function() {
		js.fill(0), jt.fill(0), ju.fill(0), jv.fill(0), this.hC.fill(0), jw.fill(0), jx.fill(0);
		var k3 = aC.jn;
		if (9 === aC.k4) this.k5();
		else if (__fx.customLobby.isActive())
			for (aA = aC.k8 - 1; 0 <= aA; aA--) this.hC[aA + k3] = __fx.customLobby.gameInfo.difficulty;
		else if (aC.k6)
			if (3 === aC.data.botDifficultyType)
				for (aA = aC.k8 - 1; 0 <= aA; aA--) {
					var hL = aA + k3;
					this.hC[hL] = aC.data.botDifficultyData[hL]
				} else if (2 === aC.data.botDifficultyType)
					for (aA = aC.k8 - 1; 0 <= aA; aA--) this.hC[hL = aA + k3] = aC.data.botDifficultyTeam[be.k9[be.eW[hL]]];
				else if (1 === aC.data.botDifficultyType) {
			var kA = this.jy.length;
			for (aA = aC.k8 - 1; 0 <= aA; aA--) this.hC[aA + k3] = aA % kA
		} else
			for (kA = aC.data.botDifficultyValue, aA = aC.k8 - 1; 0 <= aA; aA--) this.hC[aA + k3] = kA;
		else
			for (var k7 = 8 === aC.k4 ? 1 : 0, aA = aC.k8 - 1; 0 <= aA; aA--) this.hC[aA + k3] = k7;
		for (aA = 0; aA < k3; aA++) this.hC[aA] = 6;
		var eY = aC.eV;
		for (aA = 0; aA < eY; aA++) this.hC[aA] <= 2 ? (jv[aA] = 5, jw[aA] = jx[aA] = 1040, 0 === this.hC[aA] ? (jt[aA] = 980, ju[aA] = 980) : 1 === this.hC[aA] ? (jt[aA] = 980, ju[aA] = 920, jw[aA] = jx[aA] = 1100) : (jt[aA] = 825, ju[aA] =
			750)) : this.hC[aA] <= 4 ? (jv[aA] = 1 + aw.j5(20), 3 === this.hC[aA] ? (jt[aA] = ju[aA] = 500, jw[aA] = jx[aA] = 1e3) : (jx[aA] = 250 + aw.j5(1501), jw[aA] = 500 + aw.j5(501), jt[aA] = 300 + aw.j5(201), ju[aA] = 100 + aw.j5(
			201))) : this.hC[aA] <= 5 ? (jw[aA] = 1e3, jx[aA] = 1e3, jv[aA] = 35 + aw.j5(16), jt[aA] = 300 + aw.j5(201), ju[aA] = 50 + aw.j5(101)) : (jw[aA] = jx[aA] = 800, jv[aA] = 5, jt[aA] = 10, ju[aA] = 250), kB(aA)
	}, this.k5 = function() {
		for (var eC = ax.kC, k3 = aC.jn, aA = eC - 1; 0 <= aA; aA--) this.hC[aA + k3] = 0;
		for (var es = 0; es < 6; es++) {
			for (aA = eC + ax.kD[es] - 1; eC <= aA; aA--) this.hC[aA + k3] = es;
			eC += ax.kD[es]
		}
	}, this.jZ = function(g5, value) {
		js[g5] = Math.min(value, js[g5])
	}, this.ih = function(g5) {
		0 == --js[g5] && ! function(g5) {
			(function(g5) {
				jw[g5] !== jx[g5] && (jw[g5] += jw[g5] < jx[g5] ? 3 : -3);
				jt[g5] !== ju[g5] && (jt[g5] += jt[g5] < ju[g5] ? jv[g5] : -jv[g5], jt[g5] = (Math.abs(jt[g5] - ju[g5]) <= jv[g5] ? ju : jt)[g5]);
				js[g5] = bJ.dj(jw[g5], 10)
			})(g5), am.ib.jQ(g5, bJ.dj(jt[g5] * af.gZ[g5], 1e3))
		}(g5)
	}, this.kG = function(g5, g0) {
		jw[g5] = jx[g5] = g0
	}
}

function iX() {
	var kH = new Uint16Array(aC.eV);

	function kM(player, kK) {
		for (var eY = bM.f3[0], fA = bM.fA, kW = -1, kX = aC.eV, aA = 0; aA < eY; aA++) {
			var eo, g5 = fA[aA];
			eR(player, g5) && (eo = bK.i0(kK, bK.iL(g5)), -1 === kW || eo < kW) && (kW = eo, kX = g5)
		}
		return kX
	}

	function kO(kL, kK) {
		if (kL === aC.eV) return 0;
		for (var gE = af.gE[kL], kV = gE.length, eY = Math.min(kV, 10), kX = 0, kW = bK.i0(gE[kX] >> 2, kK), aA = 0; aA < eY; aA++) {
			var hL = aw.j5(kV),
				eo = bK.i0(gE[hL] >> 2, kK);
			eo < kW && (kW = eo, kX = hL)
		}
		return gE[kX] >> 2
	}

	function kR(player, kK, iy, ka) {
		var kb;
		(ka === aC.eV || (kb = bK.iL(iy), ka = bK.iL(ka), bK.i0(kK, kb) < bK.i0(kK, ka))) && (kH[player] = iy)
	}
	this.dU = function() {
		kH.fill(aC.eV)
	}, this.ih = function(player) {
		var kK, kN, kL, iy = function(player) {
			var iy = kH[player];
			if (iy !== aC.eV) {
				if (b8.ft.kZ(iy)) return iy;
				kH[player] = aC.eV
			}
			return aC.eV
		}(player);
		return function(player) {
			for (var kU = ak.jp, kV = ak.jo, eY = Math.min(kV, kV < 17 && 5 === aw.j5(20) ? 1 : 16), g6 = aw.j5(kV), fA = bM.fA, gE = af.gE, g0 = 0, aA = 0; aA < eY; aA++) {
				var g5 = kU[(aA + g6) % kV];
				g5 !== player && gE[g5].length && (fA[g0++] = g5)
			}
			bM.f3[0] = g0
		}(player), 0 !== bM.f3[0] && (0 < (kN = kO(kL = kM(player, kK = bK.iQ(player)), kK)) && bL.kP.kQ(player, kN) ? (kR(player, kK, kL, iy), !0) : 0 < (kL = function(player, kK) {
			for (var eY = bM.f3[0], fA = bM.fA, kY = kH, g6 = 0, aA = 0; aA < eY; aA++) {
				var g5 = fA[aA],
					g5 = kY[g5];
				g5 !== aC.eV && b8.ft.kZ(g5) && player !== g5 && eR(player, g5) && (fA[g6++] = g5)
			}
			return 0 !== (bM.f3[0] = g6) ? kO(kM(player, kK), kK) : 0
		}(player, kK)) && bL.kP.kQ(player, kL) ? (kR(player, kK, ab.eQ(kL << 2), iy), !0) : !!(0 < (kN = kO(iy, kK)) && bL.kP.kQ(player, kN)))
	}
}

function ig() {
	function kf(player) {
		for (var ey = af.ey[player], eY = ey.length, ez = Math.max(bJ.dj(eY, 12), 1), ea = ab.ea, dw = aw.j5(eY), aA = 0; aA < eY; aA += ez)
			for (var eN = ey[(aA + dw) % eY], eb = 3; 0 <= eb; eb--) {
				var ec = eN + ea[eb];
				if (ab.ed(ec)) return {
					eC: ec,
					id: ab.eG(ec),
					g5: player
				}
			}
		return null
	}

	function kk(player, kn) {
		var hC = b8.ft.ko(player, aD.k2[aD.hC[player]]);
		af.fz[player].push(kn.eC), ac.iv(player, hC, kn.g5), aE.iw(player, !0)
	}
	this.ih = function(player) {
		return !!bQ.eD(bQ.eE) && !!aC.data.passableMountains && 0 !== af.ey[player].length && function(player) {
			var ke = kf(player);
			if (null === ke) return !1;
			! function(player) {
				for (var jp = ak.jp, jo = ak.jo, eY = Math.min(jo, 12), g6 = aw.j5(jo), fA = bM.fA, ey = af.ey, g0 = 0, aA = 0; aA < eY; aA++) {
					var g5 = jp[(aA + g6) % jo];
					g5 !== player && ey[g5].length && eR(player, g5) && (fA[g0++] = g5)
				}
				bM.f3[0] = g0
			}(player);
			var kh = function(eF) {
				for (var eY = bM.f3[0], fA = bM.fA, aA = 0; aA < eY; aA++) {
					var kn = kf(fA[aA]);
					if (null !== kn && kn.id === eF) return kn
				}
				return null
			}(ke.id);
			return null !== kh ? (kk(player, kh), !0) : function(player, eF) {
				var eY = am.iS.kl;
				if (0 !== eY)
					for (var eC = am.iS.km[aw.j5(eY)] << 2, ea = ab.ea, eb = aw.j5(4);;) {
						if (eC += ea[eb], ab.ed(eC)) {
							if (ab.eG(eC) === eF) return kk(player, {
								eC: eC,
								g5: aC.eV
							}), !0;
							break
						}
						if (!ab.eP(eC)) break
					}
				return !1
			}(player, ke.id)
		}(player)
	}
}

function iV() {
	this.ih = function(player) {
		var eK = function(player) {
			var eY = am.iS.kl;
			if (0 === eY) return -1;
			for (var kV = Math.min(eY, am.performance.kq ? eY : 10), km = am.iS.km, j4 = bJ.dj(aw.random() * eY, aw.value(100)), e = j4 + kV, kr = aw.iR(af.iM[player], af.iN[player]), ks = aw.iR(af.iO[player], af.iP[player]), kX = -1, eo = bK
					.i1(0, 0, bQ.ej, bQ.ek), aA = j4; aA < e; aA++) {
				var g6 = aA % eY,
					kt = bK.eq(kr, ks, km[g6]);
				kt < eo && (eo = kt, kX = g6)
			}
			return -1 !== kX ? km[kX] : -1
		}(player);
		return -1 !== eK && bL.kP.kQ(player, eK)
	}
}

function iY() {
	this.kq = 0, this.dU = function() {
		this.kq = 0
	}, this.ih = function() {
		if (!this.kq && bd.jk() % 30 == 7 && b8.ft.kw(80) && (am.performance.kq = 1)) {
			if (aC.hN) {
				var kz = bf.l0();
				if (be.k9[kz]) {
					bf.l1(kz);
					var g = bM.fB,
						eY = bM.f3[0];
					if (0 !== eY)
						for (var l2 = Math.min(100 + 10 * (eY - 1), 400), aA = 0; aA < eY; aA++) aD.kG(g[aA], l2)
				}
			}
			aD.kG(l3[0], 100)
		}
	}
}

function iT() {
	var l4 = 0,
		l5 = 0,
		l6 = 300,
		l7 = 300;
	this.kl = 0, this.km = new Uint32Array(512), this.dU = function() {
		l5 = l4 = 0, this.kl = 0
	}, this.ih = function() {
		if (function() {
				var eY = am.iS.kl;
				if (0 === eY) return 1;
				var km = am.iS.km;
				if (bd.jk() % 35 == 6) {
					for (var aA = eY - 1; 0 <= aA; aA--) ab.eP(km[aA] << 2) || (eY--, km[aA] = km[eY]);
					am.iS.kl = eY
				}
				return eY < km.length
			}())
			if (l6 <= l4) am.iS.kl || bd.jk() % 12 != 8 || b8.ft.lB() || am.iS.dU();
			else {
				var aA, i = bQ.ej,
					lC = i - 2,
					eY = lC * (bQ.ek - 2),
					lD = l6,
					km = am.iS.km,
					kV = am.iS.kl,
					lE = km.length,
					g6 = Math.min(l5 + lD * ((1 + 19 * am.performance.kq) * l7), eY);
				for (aA = l5; aA < g6; aA += lD) {
					var eC = 4 * (aA % lC + (bJ.dj(aA, lC) + 1) * i + 1);
					if (ab.eP(eC) && (km[kV] = eC >> 2, ++kV === lE)) {
						aA += lD;
						break
					}
				}(l5 = aA) >= eY && (l5 = ++l4), am.iS.kl = kV
			}
	}
}

function lF() {
	aM.ih(), ae.ih(), aV.lG(), ay.x.ih()
}

function lH() {
	az.ih(), aF.ih(), ad.ih(), b2.ih(), aE.ih(), am.ih(), bL.x.ih(), ak.lI(), aU.ih(), ax.ih(), bT.ih(), ae.ih(), ae.lJ(), aV.ih(), bN.ih(), aT.ih(), aO.ih(), aM.ih(), b3.ih(), aQ.ih(), au.ih(), bb.ih(), bf.ih(), ay.x.ih(), ay.lK.ih(), s.ih(), b7
	.ih(), bd.ih()
}

function lL() {
	aG.ih(), aW.ih(), aP.ih(), at.ih(), bA.ih(), av.lM()
}

function lN() {
	aU.lO(!1), aO.lO(), aV.lO(!1), aT.lO(), aQ.lO(), au.lO(), ae.lO(!1), bf.lP()
}

function lQ() {
	ae.lO(!1) && (bd.dc = !0), ay.x.ih()
}

function c1() {
	var lR, lS, lT;

	function lV(lX) {
		for (var aA = lR - 1; 0 <= aA; aA--) 0 === lT[lS[aA]] && af.gL[lS[aA]] >= lX && fa(lS[aA])
	}

	function lU(player) {
		var di;
		64 === lT[player] ? lT[player] = 6 : (di = af.gL[player], lT[player] = di < 1e3 ? 3 : di < 1e4 ? 2 : di < 6e4 ? 1 : 0)
	}
	this.dU = function() {
		lR = 0, lS = new Uint16Array(aC.eV), lT = new Uint8Array(aC.eV)
	}, this.ih = function() {
		for (var aA = lR - 1; 0 <= aA; aA--) 64 === lT[lS[aA]] ? lU(lS[aA]) : 0 == lT[lS[aA]]-- && (lU(lS[aA]), fa(lS[aA]));
		16e4 <= af.gL[l3[0]] && (lV(16e4), 3e5 <= af.gL[l3[0]]) && lV(3e5), b8.ft.kZ(aC.eI) && (bb.lY[7] = Math.max(af.gL[aC.eI], bb.lY[7]))
	}, this.fv = function(player) {
		for (var er, aA = lR - 1; 0 <= aA; aA--)
			if (player === lS[aA]) {
				for (lR--, er = aA; er < lR; er++) lS[er] = lS[er + 1];
				return
			}
	}, this.iw = function(player, lZ) {
		for (var aA = lR - 1; 0 <= aA; aA--)
			if (player === lS[aA]) return;
		lS[lR++] = player, lT[player] = lZ ? 2 : 64
	}
}

function c2() {
	var size, jb;
	this.dU = function() {
		size = aC.k8, jb = new Uint16Array(aC.eV);
		for (var jn = aC.jn, aA = aC.k8 - 1; 0 <= aA; aA--) jb[aA] = jn + aA
	}, this.ih = function() {
		for (var aA = size - 1; 0 <= aA; aA--)
			if (0 === af.lc[jb[aA]]) {
				er = void 0;
				var er = aA;
				size--, jb[er] = jb[size]
			} else aD.ih(jb[aA])
	}, this.lb = function(g5) {
		jb[size++] = g5
	}
}

function c3() {
	var le, lf, lg, lh, li, lj, lk, ll, lm, ln, lo, lp, lq, lr = !1,
		ls = !1;

	function lt(lu) {
		lp = bd.e7, lg = lh = lf = 0, li = (lq = 33) / lu, le = 1 / (lu / lq / 4), lj = (h.i / 2 + i8) / i9, lk = (h.j / 2 + iA) / i9, ll = i9
	}

	function m1(aA) {
		var m4; - 1 !== aA && (aA = bK.iF(bL.x.m3[aA]), m4 = bK.eg(aA) - 10, aA = bK.ei(aA) - 10, aG.lx(m4, aA, 19 + m4, 19 + aA))
	}

	function mF(e1) {
		Math.abs(Math.log(lo / ll)) < .125 && (lo = e1 * ll)
	}

	function mE(m4, m5, mH, mI) {
		lm = (m4 + mH + 1) / 2, ln = (m5 + mI + 1) / 2;
		mH = h.i / (mH - m4 + 1), m4 = h.j / (mI - m5 + 1);
		lo = .9 * (mH < m4 ? mH : m4)
	}
	this.lv = function() {
		return lr
	}, this.lw = function() {
		lt(1), this.lx(0, 0, bQ.ej - 1, bQ.ek - 1), aC.gt || aC.gh || this.ly(aC.eI, 3e3, !0, .3)
	}, this.lz = function(player, m0) {
		m1(bL.h1.m2(player, m0))
	}, this.ly = function(player, lu, m6, zoom) {
		aC.m7 || lr && !m6 && ls || (0 === af.gL[player] ? m1(bL.h1.m8(player)) : (aR.m9 = !1, ls = m6, lt(lu), function(player) {
			lm = (af.iM[player] + af.iN[player] + 1) / 2, ln = (af.iO[player] + af.iP[player] + 1) / 2
		}(player), function(zoom, player) {
			var ht = af.iN[player] - af.iM[player] + 1,
				player = af.iP[player] - af.iO[player] + 1,
				er = h.i / ht,
				es = h.j / player,
				er = (lo = er < es ? er : es, 0 !== zoom ? zoom : ht < 20 && player < 20 ? .5 : .9);
			lo *= er, mF(7 / 8)
		}(zoom, player), lr = !0, ap.mC()))
	}, this.mD = function(lu) {
		aC.gh || aC.m7 || (aR.m9 = !1, ls = !1, lt(lu), mE(0, 0, bQ.ej - 1, bQ.ek - 1), mF(7 / 8), lr = !0, ap.mC())
	}, this.lx = function(m4, m5, mH, mI) {
		mE(m4, m5, mH, mI), i9 = lo, aR.mJ(lm, h.i / 2), aR.mK(ln, h.j / 2), bY.mL(), bd.dc = !0
	}, this.mM = function() {
		return !(lr && ls || (lr = !1))
	}, this.ih = function() {
		var mP, mQ, eb, mT;
		lr && (lf < .5 ? lh < li && (lh += li * le, lg = lf) : 1 - lg < lf && (lh = (lh -= li * le) < li * le ? li * le : lh), lp = lp >= bd.e7 ? bd.e7 - 1 : lp, eb = bd.e7 - lp, lf = 1e3 < eb || 1 < (lf += lh * eb / lq) ? 1 : lf, lp = bd.e7,
			eb = i9, mP = i8, mQ = iA, eb = (i9 = ll * Math.pow(lo / ll, lf)) / eb, mT = 1 - (ll * Math.pow(lo / ll, 1 - lf) - ll) / (lo - ll), aR.mJ(lj + mT * (lm - lj), h.i / 2), aR.mK(lk + mT * (ln - lk), h.j / 2), ae.zoom(eb, (mP * eb -
				i8) / (1 - eb), (mQ * eb - iA) / (1 - eb)), bY.mL(), 1 <= lf && (lr = !1, bZ.mU = !0), bd.dc = !0)
	}
}

function bv() {
	var et = b8.color;
	this.mV = et.mW(0, 0, 0), this.mX = et.mY(0, 0, 0, .7), this.mZ = et.mY(0, 0, 0, .5), this.ma = et.mY(0, 0, 0, .85), this.mb = et.mY(0, 0, 0, .75), this.mc = et.mY(0, 0, 0, .6), this.md = et.mY(0, 0, 0, .35), this.me = et.mW(255, 255, 255), this
		.mf = et.mY(255, 255, 255, .3), this.mg = et.mY(255, 255, 255, .6), this.mh = et.mY(255, 255, 255, .4), this.mi = et.mY(255, 255, 255, .25), this.mj = et.mY(255, 255, 255, .85), this.mk = et.mY(255, 255, 255, .75), this.ml = et.mY(255, 255,
			255, .15), this.mm = et.mY(255, 255, 255, .11), this.mn = et.mW(128, 128, 128), this.mo = et.mY(64, 64, 64, .75), this.mp = et.mY(88, 88, 88, .83), this.mq = et.mY(60, 60, 60, .85), this.mr = et.mY(80, 60, 60, .85), this.ms = et.mW(170,
			170, 170), this.mt = et.mW(200, 235, 245), this.mu = et.mW(30, 255, 30), this.mv = et.mW(0, 200, 0), this.mw = et.mW(128, 255, 128), this.mx = et.mY(10, 65, 10, .75), this.my = et.mY(0, 255, 0, .6), this.mz = et.mY(0, 255, 0, .5), this
		.n0 = et.mY(0, 200, 0, .5), this.n1 = et.mY(0, 100, 0, .75), this.n2 = et.mY(0, 60, 0, .8), this.n3 = et.mY(0, 255, 0, .3), this.n4 = et.mY(0, 180, 0, .6), this.n5 = et.mY(0, 120, 0, .85), this.n6 = et.mW(0, 120, 0), this.n7 = et.mY(0, 70, 0,
			.85), this.n8 = et.mW(190, 230, 190), this.n9 = et.mW(0, 255, 0), this.nA = et.mW(255, 120, 120), this.nB = et.mW(255, 160, 160), this.nC = et.mW(255, 70, 70), this.nD = et.mW(230, 0, 0), this.nE = et.mY(220, 0, 0, .6), this.nF = et.mY(
			255, 100, 100, .8), this.nG = et.mY(100, 0, 0, .85), this.nH = et.mY(60, 0, 0, .85), this.nI = et.mY(200, 0, 0, .6), this.nJ = et.mY(120, 0, 0, .85), this.nK = et.mW(255, 70, 10), this.nL = et.mW(230, 190, 190), this.nM = et.mW(255, 0,
		0), this.nN = et.mW(255, 0, 255), this.nO = et.mY(60, 0, 60, .85), this.nP = et.mY(0, 60, 60, .85), this.nQ = et.mY(10, 60, 60, .9), this.nR = et.mY(0, 96, 96, .75), this.nS = et.mW(0, 255, 255), this.nT = et.mW(160, 160, 255), this.nU = et
		.mY(0, 40, 90, .75), this.nV = et.mY(0, 0, 255, .6), this.nW = et.mW(200, 200, 255), this.nX = et.mW(255, 120, 100), this.nY = et.mY(255, 255, 0, .5), this.nZ = et.mY(255, 255, 150, .2), this.na = et.mW(255, 255, 0), this.nb = et.mW(255, 255,
			200), this.nc = et.mY(200, 200, 0, .6), this.nd = et.mY(140, 120, 0, .75), this.ne = et.mY(180, 160, 40, .75), this.nf = et.mY(70, 50, 20, .85), this.ng = et.mY(30, 30, 0, .85), this.nh = et.mY(60, 60, 0, .85), this.ni = et.mY(255, 140,
			0, .75), this.nj = et.mY(70, 40, 0, .85), this.nk = et.mW(255, 150, 0), this.nl = et.mY(0, 0, 0, 0), this.nm = et.mY(255, 255, 255, 0), this.nn = et.mY(254, 254, 254, 0)
}

function cs() {
	this.gu = new no, this.ft = new np, this.nq = new nr, this.ns = new nt, this.jq = new nu
}

function no() {
	this.gv = function(eK) {
		aC.k6 ? b6.nq.gv(aC.eI, eK) : ay.nv.nw(eK)
	}, this.h5 = function(i7, iy) {
		aC.k6 ? b6.nq.h5(aC.eI, i7, iy) : ay.nv.nx(i7, iy)
	}, this.ny = function(i7, nz) {
		aC.k6 ? b6.nq.o0(aC.eI, i7, nz) : ay.nv.o1(i7, nz)
	}, this.h3 = function(i7, eK) {
		aC.k6 ? b6.nq.h3(aC.eI, i7, eK) : bL.h1.h2(aC.eI, eK) && ay.nv.o2(i7, eK)
	}, this.o3 = function(m0, eK) {
		aC.k6 ? b6.nq.o3(aC.eI, m0, eK) : bL.h1.o4(aC.eI, m0, eK) && ay.nv.o5(m0, eK)
	}, this.o6 = function(iy) {
		aC.k6 ? b6.nq.o6(aC.eI, iy) : ay.nv.o7(iy)
	}, this.o8 = function(o9) {
		aC.k6 ? b6.nq.oA(aC.eI, o9) : ay.nv.oB(o9)
	}, this.hH = function(oC) {
		aC.k6 ? b6.nq.hH(aC.eI, oC) : ay.nv.oD(oC)
	}, this.oE = function() {
		aC.k6 ? b6.nq.oE(aC.eI) : ay.nv.oF()
	}, this.hE = function() {
		aC.k6 ? b6.nq.hE(aC.eI) : ay.nv.o2(1, 0)
	}, this.gy = function(i7, eK, iy) {
		aC.k6 ? b6.nq.gy(aC.eI, i7, eK, iy) : ay.nv.oG(i7, eK, iy)
	}
}

function nu() {
	this.jr = function(player, nz, hC) {
		b8.ft.oH(player, hC, nz) && (ad.ny(player, nz), nz < aC.jn) && aw.random() < aw.value(10) && (am.ib.it[nz] = 0)
	}, this.oI = function(player, nz, hC) {
		b8.ft.oJ(hC, nz) ? (b8.ft.fw(nz, bM.f5[0]), bb.oK(player, nz), ae.oL(nz, bM.f5[0])) : bb.fx(player, hC, 12)
	}
}

function np() {
	this.oM = function(o9, player) {
		aM.o8(aC.eI, player, o9), ay.nv.oN(o9, player)
	}, this.oO = function(player) {
		aM.oP(player, 0), ay.nv.oQ(player)
	}, this.oR = function(oS, player) {
		aM.oT(oS, player), ay.nv.oU(oS, player)
	}, this.oV = function() {
		aC.k6 || aC.gh || ay.oW.oV()
	}
}

function nt() {
	this.ih = function(aB) {
		var id, fF, mM;
		for (bF.dU(aB), bF.dx += 2, mM = 8 * bF.size; bF.dx + 8 <= mM;) id = bF.oX(4), fF = bF.oX(9), 0 === id ? this.oY(id, fF, bF.oX(22)) : 1 === id ? this.oY(id, fF, bF.oX(10), bF.oX(10)) : 2 === id ? this.oY(id, fF, bF.oX(10), bF.oX(9)) :
			3 === id || 4 === id ? this.oY(id, fF, bF.oX(10), bF.oX(22)) : 5 === id || 6 === id ? this.oY(id, fF, bF.oX(10)) : 7 === id ? this.oY(id, fF, bF.oX(1)) : 10 === id ? this.oY(id, fF, bF.oX(20), bF.oX(22)) : this.oY(id, fF)
	}, this.oZ = [], this.oa = function() {
		for (var oc = 0, od = 0, oe = 0, og = 0, oh = 0, oi = 0, aA = 0; aA < 512; aA++) oc += af.lc[aA], od += af.gL[aA], oe += af.gZ[aA], og += bL.x.oj[aA];
		oh += bL.x.ok, oi += ak.jo, this.oZ.push(oe % 1073741824 * 4 + (oc + od + og + oh + oi) % 4)
	}, this.oY = function(id, fF, fH, fJ) {
		0 === id ? b6.nq.gv(fF, fH) : 1 === id ? b6.nq.h5(fF, fH, fJ) : 2 === id ? b6.nq.o0(fF, fH, fJ) : 3 === id ? b6.nq.h3(fF, fH, fJ) : 4 === id ? b6.nq.o3(fF, fH, fJ) : 5 === id ? b6.nq.o6(fF, fH) : 6 === id ? b6.nq.oA(fF, fH) : 7 === id ?
			b6.nq.hH(fF, fH) : 8 === id ? b6.nq.oE(fF) : 9 === id ? b6.nq.ol(fF) : 10 === id && b6.nq.gy(fF, fH >> 10, fJ, fH % 1024)
	}
}

function nr() {
	this.gv = function(player, eK) {
		b8.ft.gj(0) && b8.ft.gk(player) && bK.iC(eK) && (b7.om.on(0, player, eK), aC.oo.iv(player, eK))
	}, this.h5 = function(player, i7, iy) {
		b8.ft.gj(1) && b8.ft.gk(player) && b8.ft.op(player, iy) && b8.ft.oq(player, i7, 12, 0) && b8.ft.or(player, iy) && ((iy = ac.j9(player, bM.eU[0])) || ac.jR(player)) && (af.os[player]++, b7.om.on(1, player, i7, bM.eU[0]), am.iZ.il(player,
			iy)) && (b8.ft.ot(player), bb.ou(player, i7), am.iZ.is(player))
	}, this.o0 = function(player, i7, nz) {
		b8.ft.gj(1) && b8.ft.gk(player) && aC.hN && b8.ft.op(player, nz) && b8.ft.ov(player, nz) && b8.ft.oH(player, b8.ft.i6(player, i7), nz) && (b7.om.on(2, player, i7, nz), ad.ny(player, nz))
	}, this.h3 = function(player, i7, eK) {
		b8.ft.gj(1) && b8.ft.gk(player) && (0 === eK && 1 === i7 ? this.hE(player) : bK.iC(eK) && bL.x.ok !== bL.x.k1 && bL.x.oj[player] !== bL.x.ow && 0 !== af.gE[player].length && b8.ft.oq(player, i7, 32, 0) && bL.kP.kQ(player, eK) && (bb.ox(
			player), b7.om.on(3, player, i7, eK), b8.ft.ot(player), bj.oy.h3(player), bL.x.oz(player)))
	}, this.o3 = function(player, m0, eK) {
		b8.ft.gj(1) && b8.ft.gk(player) && bK.iC(eK) && bL.h1.p0(player, m0) && bL.kP.p1(eK) && (b7.om.on(4, player, m0, eK), b8.ft.p2(player, 8), bb.fx(player, bM.f5[1], 12), bj.oy.o3(player), bL.x.o3())
	}, this.o6 = function(player, iy) {
		b8.ft.gj(1) && b8.ft.gk(player) && (iy = Math.min(iy, aC.eV), ac.j9(player, iy)) && (b7.om.on(5, player, iy), ac.p3(player, iy))
	}, this.oA = function(player, o9) {
		(b8.ft.gj(1) || b8.ft.gj(2)) && b8.ft.gk(player) && (o9 = bJ.p4(o9, 0, 1023), b7.om.on(6, player, o9), ae.p5(player, 0, o9))
	}, this.hH = function(player, oC) {
		au.hG(player) && (b7.om.on(7, player, oC), au.p6(player, oC))
	}, this.oE = function(player) {
		(b8.ft.gj(0) || b8.ft.gj(1)) && b8.ft.gk(player) && aL.p7(player) && (b7.om.on(8, player), bO.oE(player))
	}, this.ol = function(player) {
		b7.om.on(9, player), bO.ol(player)
	}, this.hE = function(player) {
		au.hI(player) && (b7.om.on(3, player, 1, 0), au.hE(player))
	}, this.gy = function(player, i7, eK, iy) {
		b8.ft.gj(1) && b8.ft.gk(player) && b8.ft.op(player, iy) && b8.ft.or(player, iy) && bK.iC(eK) && al.e9.eS(player, eK) && (ac.j9(player, bM.eU[0]) || ac.jR(player)) && (b7.om.on(10, player, (i7 << 10) + bM.eU[0], eK), iy = b8.ft.ko(player,
			i7), af.fz[player].push(bM.eZ[0]), ac.iv(player, iy, bM.eU[0]), aE.iw(player, !0), bb.p8(player))
	}
}

function p9() {
	var pB;
	this.pA = [], this.pB = document.createElement("div"), this.pC = function(pD, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = pD, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.4em", title.style.overflowWrap = "break-word", this.pB.appendChild(
			title), title
	}, this.pE = function(pD, marginBottom) {
		var pF = document.createElement("p");
		return pF.textContent = pD, pF.style.fontSize = "0.75em", pF.style.lineHeight = "1.2em", pF.style.marginBottom = marginBottom || "0", this.pB.appendChild(pF), pF
	}, this.pG = function(pD) {
		var pH = document.createElement("p");
		return pH.textContent = pD, pH.style.fontSize = "1em", pH.style.marginBottom = "0", pH.style.whiteSpace = "pre-wrap", pH.style.overflowWrap = "break-word", this.pB.appendChild(pH), pH
	}, this.pI = function(pJ, fontSize) {
		var pB = document.createElement("div");
		return pB.innerHTML = pJ, pB.style.fontSize = fontSize || "1em", pB.style.lineHeight = "1.2em", this.pB.appendChild(pB), pB
	}, this.pK = function(pL) {
		for (var pM = pL.pM, eY = pM.length, aA = 0; aA < eY; aA++) this.pB.appendChild(pM[aA])
	}, this.pN = function(pO) {
		return this.pA.push(pO), this.pB.appendChild(pO.e), pO
	}, this.resize = function() {
		for (var eY = this.pA.length, aA = 0; aA < eY; aA++) this.pA[aA].resize && this.pA[aA].resize()
	}, (pB = this.pB).style.position = "absolute", pB.style.height = "auto", pB.style.padding = "0.5em"
}

function pP(pQ, pR) {
	var pB = document.createElement("div");

	function pa() {
		var aA, pb, j, g6, eb, pV = h.k * pB.offsetWidth,
			pc = new Float64Array(function(pV) {
				var i = .25 * b8.pW.pX(.6) * h.pY;
				return Math.max(Math.floor(pV / i), 1)
			}(pV)),
			pd = ba.pd,
			pe = (pV - (pc.length + 1) * ba.gap) / (pc.length * h.k);
		for (pc.fill(pd), aA = 0; aA < pR.length; aA++) pb = (eb = pR[aA].pB).style, j = b8.pf.min(pc), g6 = pc.indexOf(j), pb.top = b8.pW.pg(j), pb.left = b8.pW.pg(pd + g6 * (pe + pd)), pb.width = b8.pW.pg(pe), b8.pW.ph(eb, 5), pc[g6] += eb
			.offsetHeight + 3 * pd;
		pB.style.height = b8.pW.pg(b8.pf.max(pc) - 2 * pd)
	}
	this.pS = pB, this.pT = pR, this.resize = function() {
		var aA;
		for (aA = 0; aA < pR.length; aA++) pR[aA].resize();
		pa(), pa()
	}, pB.style.width = "100%", pB.style.maxWidth = "100%", pQ.style.lineHeight = "1.5em", pQ.style.overflowX = "hidden", pQ.style.overflowY = "auto";
	for (var aA = 0; aA < pR.length; aA++) pB.appendChild(pR[aA].pB);
	pQ.appendChild(pB)
}

function v(pi, pj, pk, pl, pm) {
	var self, pn = document.createElement("button");

	function pu() {
		var q0;
		bH.pz() || (q0 = b8.color.q1(pk), !1 !== pl && 0 < q0[0] && q0[0] < 255 && q0[0] === q0[1] && q0[0] === q0[2]) || (pn.style.backgroundColor = b8.color.q2(pk, q0[3] && q0[3] < 120 ? 150 : 50))
	}

	function pt() {
		if (pl) {
			var q0 = b8.color.q1(pk);
			if (q0[0] === q0[1] && q0[0] === q0[2]) return
		}
		pj && ((q0 = pj(this)) ? 2 === q0 && pu() : q4(this))
	}

	function pw() {
		this.style.backgroundColor = pk
	}

	function pv() {
		q4(this)
	}

	function q4(eb) {
		eb.style.backgroundColor = pk, eb.blur()
	}
	this.button = pn, this.po = pj, this.pp = pk, this.ps = function(px) {
		px = 1.1 - Math.min(.01 * pi.length, .6) + .2 * px;
		pn.style.fontSize = px.toFixed(1) + "em"
	}, this.pr = function(et) {
		et ? 1 === et ? et = b9.mq : 2 === et && (pl = 1, et = b9.mq) : (pl = 0, et = b9.ma), this.pp = pk = et, pn.style.backgroundColor = et
	}, self = this, pn.innerHTML = pi, pn.style.color = pm ? b9.na : b9.me, pn.style.userSelect = "none", pn.style.outline = "none", pn.style.overflowWrap = "break-word", self.pr(pk), pn.style.border = "none", pn.style.font = "inherit", self.ps(
		0), pn.style.padding = "0em 0.3em", pn.onclick = pt, pn.addEventListener("mouseover", pu), pn.addEventListener("mouseout", pv), pn.addEventListener("focus", pu), pn.addEventListener("blur", pw)
}

function q5(q6, pQ) {
	var pB;
	this.resize = function() {
		for (var aA = 0; aA < q6.length; aA++) b8.pW.ph(q6[aA].button);
		pB.style.gap = pB.style.padding = b8.pW.pg(ba.pd)
	}, (pB = document.createElement("div")).style.display = "grid", pB.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", pB.style.overflowY = "auto", pB.style.gridAutoRows = "5.3em", pB.style.maxHeight = "100%";
	for (var aA = 0; aA < q6.length; aA++) q6[aA].ps(1), pB.appendChild(q6[aA].button);
	pQ.appendChild(pB)
}

function q8(q9, qA, qB) {
	this.ef = 0, this.eh = 0, this.i = 0, this.j = 0, this.resize = function() {
		this.j = Math.min(b8.pW.pX(qB || .5) * q9[1] * h.pY, h.j - 2 * ba.gap), this.i = Math.min(this.j * (q9[0] / q9[1]), h.i - 2 * ba.gap), this.j = q9[1] * this.i / q9[0], this.ef = ba.gap + qA[0] * (h.i - this.i - 2 * ba.gap), this.eh = ba
			.gap + qA[1] * (h.j - this.j - 2 * ba.gap)
	}, this.qC = function() {
		return this.ef + .5 * this.i
	}
}

function qD(qE, qF) {
	var qO, self, qG = document.createElement("div"),
		qH = document.createElement("div"),
		qI = document.createElement("div"),
		qJ = null,
		qP = (this.qK = new qL({
			value: "",
			dx: -1
		}, 0, qM, function(e) {
			qJ.qV.textContent = 127 - e.target.value.length
		}), 0),
		qQ = 1,
		qR = 0,
		qS = 1048575;

	function qM() {
		qE(), qJ.qV.textContent = 127
	}

	function qf(qe, pO) {
		pO && (pO.ql = 1, qe.appendChild(bl.qm.transform(pO)))
	}

	function qj(bp) {
		qQ ? qG.scrollTop = qG.scrollHeight : bp && (qG.scrollTop = qR)
	}
	this.qW = function(qX) {
			qS = 1048575, qH.textContent = "", qX || this.lP()
		}, this.lP = function() {
			var qY = bl.x.qZ[0],
				qY = bl.x.qb[qY],
				qc = qY.qc,
				eY = qc.length,
				j4 = 1048575 === qS ? 0 : eY - (qY.qd - qS + 1048575) % 1048575;
			if (qS = qY.qd, !(eY <= (j4 = Math.max(j4, 0)))) {
				for (var qe = document.createDocumentFragment(), aA = j4; aA < eY; aA++) qf(qe, bl.qg.qh(qc[aA], bl.qg.qi(qc[aA])));
				qH.appendChild(qe), qj()
			}
		}, this.qk = function(p) {
			var qe = document.createDocumentFragment();
			qf(qe, p), qH.appendChild(qe), qj()
		}, this.show = function(pQ) {
			pQ.appendChild(qG), pQ.appendChild(qI), this.resize(pQ)
		}, this.qn = function(pQ) {
			pQ.removeChild(qG), pQ.removeChild(qI)
		}, this.resize = function(pQ) {
			qP = pQ ? pQ.offsetHeight : qP;
			var pQ = b8.pW.qp(.04, .75),
				qq = Math.max(pQ, qP - pQ),
				qr = h.i / h.k,
				qs = .7 * qr,
				qq = (qI.style.top = b8.pW.pg(qP - pQ), qI.style.height = b8.pW.pg(pQ), qG.style.top = b8.pW.pg(qP - pQ - qq), qG.style.height = b8.pW.pg(qq), b8.pW.ph(qG, 2), this.qK.e.style.width = b8.pW.pg(qs), this.qK.e.style.fontSize = qO.button
					.style.fontSize = b8.pW.pg(.5 * pQ), b8.pW.ph(this.qK.e, 6), qO.button.style.left = b8.pW.pg(qs), qO.button.style.width = b8.pW.pg(qr - qs), .385 * pQ);
			z.a0.qu() && (qq *= .8 - .12 * (h.i > h.j)), qH.style.marginLeft = qH.style.marginRight = b8.pW.pg(.5 * qq), qH.style.fontSize = b8.pW.pg(qq), qj(1)
		}, (self = this).qK.e.qT = 127, qG.style.position = "absolute", qG.style.top = "0", qG.style.left = "0", qG.style.width = "100%", qG.style.overflowX = "hidden", qG.style.overflowY = "auto", qG.style.font = "inherit", qG.style
		.backgroundColor = b9.mc, qG.addEventListener("scroll", function() {
			qR = qG.scrollTop, qQ = qR < qG.scrollHeight - qG.clientHeight - 2 ? 0 : 1
		}), qH.style.font = "inherit", qI.style.position = "absolute", qI.style.left = "0", qI.style.width = "100%", self.qK.e.setAttribute("placeholder", L(13)), self.qK.e.style.position = "absolute", self.qK.e.style.top = "0", self.qK.e.style
		.left = "0", self.qK.e.style.height = "100%", self.qK.e.style.backgroundColor = b9.mZ, self.qK.e.style.textAlign = "center", (qO = new v(L(14), qM)).button.top = "0", qO.button.style.position = "absolute", qO.button.style.height = "100%", qO
		.pr(b9.nm), qJ = new qU("127", qO.button, 1, 1), qG.appendChild(qH), qI.appendChild(self.qK.e), qI.appendChild(qO.button)
}

function qv(qw, pi, qx) {
	function click() {
		var value = 1 - qw.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + pi, void 0 !== qw.dx ? bh.qy.qz(qw.dx, value) : qw.value = value, qx && qx(value)
	}
	var e;
	pi = pi || L(15), this.e = document.createElement("p"), (e = this.e).textContent = (qw.value ? "🟩 " : "⬜ ") + pi, e.style.margin = "0", e.style.marginBottom = "0.5em", e.style.cursor = "pointer", e.addEventListener("click", click)
}

function r0(pQ, pJ) {
	var pB = document.createElement("div");
	this.pS = pB, this.resize = function() {
		pB.style.padding = b8.pW.pg(ba.pd), pB.style.lineHeight = b8.pW.pg(b8.pW.qp(.035))
	}, pQ.style.overflowX = "hidden", pQ.style.overflowY = "auto", pB.innerHTML = pJ, pQ.appendChild(pB)
}

function r1(r2) {
	var pB = document.createElement("div");
	this.e = pB, this.r3 = r2, this.resize = function() {
		for (var eY = r2.length, aA = 1; aA < eY; aA++) b8.pW.ph(r2[aA], 4)
	};
	var aA, eY = r2.length;
	for (pB.style.width = "100%", pB.style.height = "2.7em", pB.style.marginTop = "0.6em", pB.style.border = "inherit", aA = 0; aA < eY; aA++) r2[aA].style.verticalAlign = "top", r2[aA].style.width = (100 / eY).toFixed(2) + "%", r2[aA].style.height =
		"100%", r2[aA].style.fontSize = "0.75em", pB.appendChild(r2[aA])
}

function r4(r5, pk, r6) {
	this.pB = document.createElement("div"), this.q6 = r5;
	var r7 = 0;
	this.resize = function(pQ, r9) {
		var eY = r5.length;
		if (!r6)
			for (var aA = 1; aA < eY; aA++) b8.pW.ph(r5[aA].button, 4);
		for (var rA = 0, aA = 0; aA < eY; aA++) rA += r5[aA].button.offsetWidth;
		if (pQ && (r7 = pQ.offsetWidth), r9 && rA < r7)
			for (aA = 0; aA < eY; aA++) r5[aA].button.style.width = (100 * r5[aA].button.offsetWidth / rA).toFixed(2) + "%";
		else
			for (aA = 0; aA < eY; aA++) r5[aA].button.style.width = "auto";
		r9 || this.resize(pQ, 1)
	};
	var r8 = this;
	r8.pB.style.height = r8.pB.style.maxHeight = "100%";
	for (var aA = 0; aA < r5.length; aA++) r5[aA].pr(pk), r5[aA].button.style.height = "100%", r5[aA].button.style.padding = "0.0em 0.9em", r8.pB.appendChild(r5[aA].button)
}

function rB() {
	var e;
	this.e = document.createElement("hr"), this.resize = function() {
		b8.pW.ph(this.e, 8, b9.mn)
	}, (e = this.e).style.marginBottom = e.style.marginTop = "0.65em", e.style.marginLeft = e.style.marginRight = "-4%", e.style.border = "none"
}

function rC() {
	var rG, rH, rD = document.createElement("div"),
		rE = 0,
		rF = 0;
	this.show = function(ef, eh, pD, rI, rJ) {
		if (rE) {
			if (!rI) return;
			this.qn()
		}
		ef === eh && -1 === ef ? (ef = rG, eh = rH) : (rG = ef, rH = eh), rJ || (rF = rI), rE = 1;
		rJ = h.i / h.k, rD.style.whiteSpace = "pre", rD.textContent = pD, b8.pW.ph(rD, 5), rD.style.font = b8.pW.rL(0, b8.pW.qp(.015)), rD.style.padding = "0.3em 0.6em", rD.style.left = ef + "px", rD.style.top = "0px", document.body.appendChild(
			rD), rI = ef + rD.offsetWidth - rJ;
		0 < rI && (rD.style.left = (pD = ef - rI) + "px", pD < 5) && (rD.style.whiteSpace = "pre-wrap"), rD.style.top = eh - rD.offsetHeight + rF * ba.rN + "px"
	}, this.qn = function(rO) {
		if (rE) {
			if (rO && rF) return 0;
			rE = 0, document.body.removeChild(rD)
		}
		return 1
	}, rD.style.position = "absolute", rD.style.backgroundColor = b9.ma, rD.style.color = b9.me, rD.style.pointerEvents = "none", rD.style.zIndex = "5", rD.style.maxWidth = "100%"
}

function qL(rP, type, rQ, rR) {
	var e;
	this.e = document.createElement("input"), (e = this.e).type = type ? "number" : "text", e.id = "input" + s.x.rS++, e.value = rP.value, e.style.width = "100%", e.style.userSelect = "none", e.style.outline = "none", e.style.resize = "none", e.style
		.border = "inherit", e.style.font = "inherit", e.style.color = b9.me, e.style.backgroundColor = b9.mX, e.style.fontSize = "1em", e.style.padding = "0.1em 0.2em", e.addEventListener("focus", function() {
			h.rT++
		}), e.addEventListener("blur", function() {
			h.rT--, -1 !== rP.dx && bh.qy.qz(rP.dx, e.value)
		}), e.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== rP.dx && bh.qy.qz(rP.dx, e.value), rQ ? rQ() : e.blur())
		}), rR && e.addEventListener("input", function(pO) {
			rR(pO)
		})
}

function rU(pQ, data) {
	var eY = data.rV.length,
		rW = document.createElement("div"),
		rX = document.createElement("div"),
		rY = document.createElement("div"),
		rZ = new Array(eY),
		pR = new Array(eY),
		ra = new Array(data.rb.length),
		rc = b8.color.mY(70, 70, 0, .35);

	function q2() {
		this.style.backgroundColor = b8.color.q2(rc, 160)
	}

	function rh() {
		this.style.backgroundColor = rc
	}

	function pa() {
		var er;
		for (pQ.style.font = b8.pW.rL(0, b8.pW.rr(.026, .5, .03)), aA = 1; aA < ra.length; aA++) b8.pW.ph(ra[aA], 4);
		if (b8.pW.ph(rW, 2), eY) {
			for (var gx, rs = rW.offsetWidth, rt = rY.offsetWidth, aA = 0; aA < ra.length; aA++) gx = .01 * data.rg[aA] * rt, ra[aA].style.width = (100 * gx / rs).toFixed(2) + "%";
			var kV = data.rV[0].length;
			for (aA = 0; aA < eY; aA++)
				for (b8.pW.ph(rZ[aA], 2), er = 1; er < kV; er++) b8.pW.ph(pR[aA][er], 4);
			rX.rd && (rX.scrollTop = rX.rd)
		}
	}
	this.resize = function() {
			pa(), pa()
		}, pQ.style.display = "flex", pQ.style.flexDirection = "column", rX.style.overflowX = "hidden", rX.style.overflowY = "auto", rX.addEventListener("scroll", function() {
			this.rd = this.scrollTop
		}),
		function() {
			var eb, aA, rV = data.rV,
				kV = eY ? rV[0].length : 0;
			for (aA = 0; aA < eY; aA++) {
				rZ[aA] = document.createElement("div"), rZ[aA].style.backgroundColor = function(aA) {
					return aA % 2 == 1 ? b8.color.mY(130, 130, 130, .35) : b9.md
				}(aA), rZ[aA].style.width = "100%", rZ[aA].style.display = "flex", pR[aA] = new Array(kV);
				for (var er = 0; er < kV; er++) pR[aA][er] = eb = document.createElement("div"), eb.style.display = "flex", eb.style.justifyContent = "center", eb.style.wordBreak = "break-all", eb.style.padding = "0.4em 0em", eb.style.width = data
					.rg[er] + "%", eb.innerHTML = rV[aA][er].f0, 1 === rV[aA][er].di && (eb.name = "" + aA, eb.style.color = b9.na, eb.style.backgroundColor = rc, eb.addEventListener("mouseover", q2), eb.addEventListener("mouseout", rh), function(eb,
						rj, rk) {
						2147483647 !== rk && eb.addEventListener("click", function() {
							bB.a6(30), bB.a7(30, rj), bF.dU(bB.aB), this.style.backgroundColor = rc, s.t(8, s.rl, new rm(25, {
								rn: 0,
								rj: bD.ro.rp(bD.ro.rq(5)),
								rk: rk
							}))
						})
					}(eb, rV[aA][er].rj, rV[aA][er].rk)), rZ[aA].appendChild(eb)
			}
			for (rW.style.display = "flex", rW.style.backgroundColor = b8.color.mY(0, 120, 0, .35), aA = 0; aA < ra.length; aA++) ra[aA] = eb = document.createElement("div"), eb.style.display = "flex", eb.style.justifyContent = "center", eb.style
				.wordBreak = "break-all", eb.style.padding = "0.4em 0em", eb.style.width = data.rg[aA] + "%", eb.innerHTML = data.rb[aA], rW.appendChild(eb)
		}();
	for (var aA = 0; aA < eY; aA++) rY.appendChild(rZ[aA]);
	rX.appendChild(rY), pQ.appendChild(rW), pQ.appendChild(rX)
}

function ru() {
	var ry, rz, rv = document.createElement("div"),
		rw = document.createElement("div"),
		rx = document.createElement("div"),
		rY = document.createElement("div"),
		q6 = [],
		s0 = [L(16), L(17), L(18), L(19), L(20), L(21)],
		s1 = [1, 2, 3, 0, 9, 10];

	function s3(aA) {
		s.t(8, 0, new rm(21, {
			s5: s1[aA],
			s6: 0,
			s7: 10
		}))
	}
	this.show = function() {
			this.qz(s.x.s8), document.body.appendChild(rv)
		}, this.qn = function() {
			document.body.removeChild(rv)
		}, this.qz = function(s8) {
			for (var s9 = [3, 0, 1, 2, 4, 5], aA = 0; aA < q6.length; aA++) {
				var i = s8[aA];
				ry[s9[aA]][1].qV.textContent = i || ""
			}
		}, this.resize = function() {
			var aA, sA = ba.gap,
				j = b8.pW.sB(.085),
				i = Math.min(4 * j, h.i - 2 * sA),
				eY = q6.length;
			for (b8.pW.sC(rv, sA, h.j - sA - j, i, j), b8.pW.ph(rv), b8.pW.ph(rw, 6), aA = 0; aA < eY - 1; aA++) b8.pW.ph(q6[aA].button, 6);
			for (aA = 0; aA < eY; aA++) ry[aA][0].resize();
			for (q6[0].ef = 0, q6[0].button.style.left = b8.pW.pg(q6[0].ef), q6[0].button.style.width = b8.pW.pg(100), aA = 1; aA < eY; aA++) q6[aA].ef = q6[aA - 1].ef + q6[aA - 1].button.offsetWidth, q6[aA].button.style.left = b8.pW.pg(q6[aA].ef);
			if (!rz) {
				if (!aa.sD()) return;
				(rz = aa.get(14)).style.width = "24%", rz.style.position = "absolute", rw.appendChild(rz)
			}
			rz.style.left = b8.pW.pg(0), rz.style.top = "7%", rx.sE && (rx.scrollLeft = rx.sE)
		}, rv.style.position = "absolute", rw.style.width = "25%", rw.style.height = "100%", rw.style.backgroundColor = b9.ma, rx.style.position = "absolute", rx.style.width = "75%", rx.style.height = "100%", rx.style.backgroundColor = b9.ma, rx
		.style.top = rx.style.right = b8.pW.pg(0), b8.pW.s2(rx), rY.style.height = rY.style.maxHeight = "100%", q6.push(new v("", function() {
			s3(0)
		}, b9.nO)), q6.push(new v("", function() {
			s3(1)
		}, b9.nP)), q6.push(new v("", function() {
			s3(2)
		}, b9.nH)), q6.push(new v("", function() {
			s3(3)
		}, b9.n2)), q6.push(new v("", function() {
			s3(4)
		}, b9.nj)), q6.push(new v("", function() {
			s3(5)
		}, b9.nh)), ry = new Array(q6.length);
	for (var aA = 0; aA < q6.length; aA++) q6[aA].button.style.position = "absolute", ry[aA] = [new s4(s0[aA], q6[aA].button, .25, .45), new s4("", q6[aA].button, .53, .84, 1)], q6[aA].button.style.height = q6[aA].button.style.maxHeight = "100%", q6[
		aA].button.top = b8.pW.pg(0), rY.appendChild(q6[aA].button);
	rx.appendChild(rY), rv.appendChild(rw), rv.appendChild(rx)
}

function sF(sG, sH, sI, sJ, qE, qF) {
	var sK = document.createElement("div"),
		sL = document.createElement("div"),
		sM = document.createElement("div"),
		sN = document.createElement("div"),
		sO = document.createElement("div"),
		sP = document.createElement("div"),
		sQ = document.createElement("div"),
		sR = document.createElement("div"),
		sS = document.createElement("span"),
		sT = document.createElement("div");
	this.sU = new qD(qE, qF), this.sV = new sW(qF), this.sX = [sG, sH, sI, sJ], this.sb = function(sc) {
		sc = (sc / 10).toFixed(1) + "%";
		sR.style.width = sc, sS.innerHTML = sc
	}, this.sd = function() {
		this.sV.qn(sP), this.sU.show(sP)
	}, this.se = function() {
		this.sU.qn(sP), this.sV.show(sP)
	}, this.sf = function() {
		return sL
	}, this.show = function() {
		document.body.appendChild(sK)
	}, this.qn = function() {
		document.body.removeChild(sK)
	}, this.resize = function(sg) {
		var sh = 1 - .4 * z.a0.qu() * (h.i > 1.6 * h.j),
			si = b8.pW.qp(.05 * sh),
			sj = h.j > h.i,
			sk = b8.pW.qp(.07 * sh + .03 * sj),
			sl = b8.pW.qp(.04 + .02 * sj),
			sj = b8.pW.qp(.02 * sh + .01 * sj),
			sn = b8.pW.qp(.025);
		sK.style.font = b8.pW.rL(0, sn), sh < 1 && (sn = b8.pW.rL(0, sh * sn), sM.style.font = sn, sO.style.font = sn, sT.style.font = sn, sQ.style.font = sn, sN.style.font = sn), sL.style.height = b8.pW.pg(si), sL.style.font = b8.pW.rL(0, .72 *
				si), b8.pW.ph(sL, 2), sM.style.top = b8.pW.pg(si), sM.style.height = b8.pW.pg(sk), b8.pW.ph(sM, 2), sN.style.font = b8.pW.rL(0, sh * b8.pW.qp(.02)), sN.style.top = b8.pW.pg(si + sk), sN.style.height = b8.pW.pg(sl), b8.pW.ph(sN,
			2), sO.style.top = b8.pW.pg(si + sk + sl), sO.style.height = b8.pW.pg(sk), b8.pW.ph(sO, 2), sP.style.top = b8.pW.pg(si + sk + sl + sk), sP.style.height = b8.pW.pg(h.j / h.k - si - 3 * sk - sl - sj), sQ.style.top = b8.pW.pg(h.j / h.k -
				sk - sj), sQ.style.height = b8.pW.pg(sj), b8.pW.ph(sQ, 8), sS.style.font = b8.pW.rL(0, .8 * sj), sT.style.top = b8.pW.pg(h.j / h.k - sk), sT.style.height = b8.pW.pg(sk), b8.pW.ph(sT, 8), sG.resize(sM), sH.resize(sM), sI.resize(
			sM), sJ.resize(sM), sg ? this.sU.resize(sP) : this.sV.resize()
	};
	qE = this;
	sK.style.position = "absolute", sK.style.top = "0", sK.style.left = "0", sK.style.width = "100%", sK.style.height = "100%", sK.style.backgroundColor = b9.md, bH.pz() || (sK.style.backdropFilter = "blur(4px)", sK.style.webkitBackdropFilter =
			"blur(4px)"),
		__fx.customLobby.isActive() && (sK.style.display = "none"), sL.style.position = "absolute", sL.style.top = "0", sL.style.left = "0", sL.style.width = "100%", sL.style.display = "flex", sL.style.alignItems = "center";
	for (var g = [sM, sN, sO, sT], aA = 0; aA < g.length; aA++) g[aA].style.position = "absolute", g[aA].style.left = "0", g[aA].style.width = "100%", b8.pW.s2(g[aA]);
	sP.style.position = "absolute", sP.style.left = "0", sP.style.width = "100%", sP.style.font = "inherit", sQ.style.position = "absolute", sQ.style.left = "0", sQ.style.width = "100%", sR.style.position = "absolute", sR.style.top = "0", sR.style
		.left = "0", sR.style.height = "100%", sR.style.width = "50%", sR.style.backgroundColor = b9.n0, sS.innerHTML = "", sS.style.position = "absolute", sS.style.top = "50%", sS.style.left = "50%", sS.style.transform = "translate(-50%, -50%)", sL
		.appendChild(function() {
			var sa = document.createElement("h1");
			return sa.textContent = L(22), sa.style.margin = "0 auto 0.15em auto", sa.style.webkitTextStroke = "0.02em brown", sa.style.fontFamily = "Arial Black, Trebuchet MS", sa.style.fontSize = "inherit", sa.style.fontWeight = "inherit", sa
		}()), sM.appendChild(sG.pB), sN.appendChild(sH.pB), sO.appendChild(sI.pB), sQ.appendChild(sR), sQ.appendChild(sS), sT.appendChild(sJ.pB), sK.appendChild(sL), sK.appendChild(sM), sK.appendChild(sN), sK.appendChild(sO), sK.appendChild(sP), sK
		.appendChild(sQ), sK.appendChild(sT), qE.sV.show(sP)
}

function sW(qF) {
	var sK = document.createElement("div"),
		sP = document.createElement("div");
	this.lP = function() {
			sP.textContent = "", bl.sp.qn(1);
			for (var qe = document.createDocumentFragment(), sq = bl.x.qZ[0], sr = bl.sr.ss[sq], st = bl.sr.st[sq], aA = 0; aA < sr.length; aA++) ! function(qe, pO, sv, sq) {
				var qV = document.createElement("span");
				qV.textContent = (sv ? "🟢 " : "⚪ ") + bl.qg.sw(pO, sq), qV.style.color = bl.qg.sx(pO.sy), qV.style.cursor = "pointer", qV.style.margin = "0.2em 0.2em 0.2em 0.2em", qV.style.width = qV.style.maxWidth = 2 === sq ? "10em" : "9em",
					qV.style.height = qV.style.maxHeight = "1.4em", qV.style.whiteSpace = "nowrap", qV.style.overflow = "hidden", qV.style.textOverflow = "ellipsis", qV.style.font = "inherit", qV.style.display = "inline-block", bl.qg.sz(pO) && (
						qV.style.textDecoration = "underline"), qV.onclick = function(e) {
						qF(e, pO)
					}, bH.pz() || (qV.onmouseover = function(e) {
						bl.sp.t0(e, pO, 1)
					}), qe.appendChild(qV)
			}(qe, sr[aA], aA < st, sq);
			sP.appendChild(qe)
		}, this.show = function(pQ) {
			pQ.appendChild(sK)
		}, this.qn = function(pQ) {
			pQ.removeChild(sK)
		}, this.resize = function() {
			sP.style.fontSize = b8.pW.pg(b8.pW.qp(.02, .3))
		}, sK.style.top = "0", sK.style.left = "0", sK.style.width = sK.style.height = "100%", sK.style.overflowX = "hidden", sK.style.overflowY = "auto", sK.style.font = "inherit", sP.style.font = "inherit", sP.style.margin = "0.4em", sK
		.appendChild(sP)
}

function t1(t2) {
	var sK = document.createElement("div"),
		qI = document.createElement("div"),
		t3 = [];

	function pu() {
		bH.pz() || (this.style.backgroundColor = b8.color.q2(b9.ma, 50))
	}

	function pv() {
		this.style.backgroundColor = b9.ma
	}
	this.qz = function(t5, t6) {
			t3[2].textContent = t5 + 1 + " / " + t6
		}, this.show = function(pO) {
			qI.appendChild(bl.qm.transform(pO)), document.body.appendChild(sK)
		}, this.resize = function() {
			var j = b8.pW.qp(.03, .5);
			sK.style.width = 10 * j + "px", sK.style.font = b8.pW.rL(1, .75 * j), b8.pW.ph(sK, 4), qI.style.top = j + "px", qI.style.font = b8.pW.rL(0, .55 * j), b8.pW.ph(qI, 2), sK.style.height = j + qI.offsetHeight + "px";
			for (var aA = 0; aA < 3; aA++) b8.pW.ph(t3[aA], 6), t3[[0, 1, 3][aA]].style.width = 2 * j + "px";
			for (aA = 0; aA < 4; aA++) t3[aA].style.height = j + "px", b8.pW.ph(t3[aA], 2);
			t3[2].style.width = 4 * j + "px", t3[1].style.left = 2 * j + "px", t3[2].style.left = 4 * j + "px", t3[3].style.left = 8 * j + "px"
		}, this.t7 = function() {
			for (var aA = 0; aA < 4; aA++) t3[aA].onclick = null, t3[aA].onmouseover = null, t3[aA].onmouseout = null;
			document.body.removeChild(sK), sK = qI = t3 = null
		}, sK.style.position = "absolute", sK.style.color = b9.me, sK.style.zIndex = "3", sK.style.right = "0", sK.style.top = "0", qI.style.position = "absolute", qI.style.height = "auto", qI.style.color = b9.me, qI.style.backgroundColor = b9.ma, qI
		.style.left = "0", qI.style.width = "100%", qI.style.overflowWrap = "break-word", sK.appendChild(qI);
	for (var aA = 0; aA < 4; aA++) t3[aA] = document.createElement("div"), t3[aA].style.position = "absolute", t3[aA].style.backgroundColor = b9.ma, t3[aA].style.color = b9.me, t3[aA].style.top = "0", t3[aA].style.display = "flex", t3[aA].style
		.justifyContent = "center", t3[aA].style.alignItems = "center", t3[aA].style.userSelect = "none", t3[aA].style.outline = "none", t3[aA].style.font = "inherit", 2 !== (t3[aA].t4 = aA) && (t3[aA].onclick = t2, t3[aA].onmouseover = pu, t3[aA]
			.onmouseout = pv), sK.appendChild(t3[aA]);
	t3[0].textContent = "◀", t3[1].textContent = "▶", t3[3].textContent = "✖"
}

function t8(t2) {
	var rD = document.createElement("div");

	function pu() {
		bH.pz() || (rD.style.backgroundColor = b8.color.q2(b9.ma, 50))
	}

	function pv() {
		rD.style.backgroundColor = b9.ma
	}
	this.qz = function(t6) {
			rD.textContent = t6
		}, this.show = function() {
			document.body.appendChild(rD)
		}, this.resize = function() {
			var j = b8.pW.qp(.03, .5);
			rD.style.width = 2 * j + "px", rD.style.height = j + "px", rD.style.font = b8.pW.rL(1, .75 * j), b8.pW.ph(rD, 4), b8.pW.ph(rD, 2)
		}, this.t7 = function() {
			rD.onclick = null, rD.onmouseover = null, rD.onmouseout = null, document.body.removeChild(rD), rD = null
		}, rD.style.position = "absolute", pv(), rD.style.color = b9.me, rD.style.zIndex = "3", rD.style.right = "0", rD.style.top = "0", rD.style.display = "flex", rD.style.justifyContent = "center", rD.style.alignItems = "center", rD.style
		.userSelect = "none", rD.style.outline = "none", rD.onclick = t2, rD.onmouseover = pu, rD.onmouseout = pv
}

function t9(r5) {
	var sK = document.createElement("div"),
		tA = document.createElement("div"),
		rE = (this.ef = 0, this.eh = 0);

	function tC() {
		bl.tD.qn()
	}
	this.q6 = r5, this.show = function(ef, eh, tF) {
		if (rE) return [0, 0];
		rE = 1, this.ef = ef, this.eh = eh,
			function(self, tF) {
				var i = b8.pW.qp(.16, .7),
					j = r5.length * i / 3,
					tH = h.i / h.k,
					tI = h.j / h.k,
					mG = Math.min(1, Math.min(tH / i, tI / j));
				i *= mG, j *= mG, tF && (self.ef += b8.pW.qp(.03, .5)), self.ef = bJ.p4(self.ef, 0, tH - i), self.eh = bJ.p4(self.eh, 0, tI - j), tA.style.left = self.ef + "px", tA.style.top = self.eh + "px", tA.style.width = i + "px", tA.style
					.height = j + "px", tA.style.font = b8.pW.rL(0, .34 * j / r5.length), b8.pW.ph(tA, 5);
				for (var aA = 1; aA < r5.length; aA++) b8.pW.ph(r5[aA].button, 8)
			}(this, tF), document.body.appendChild(sK)
	}, this.qn = function() {
		rE && (rE = 0, sK.removeEventListener("click", tC), document.body.removeChild(sK))
	};
	for (var aA = 0; aA < r5.length; aA++) new qU("" + (1 + aA), r5[aA].button, 0, 1);
	sK.style.position = "fixed", sK.style.top = "0", sK.style.left = "0", sK.style.width = "100%", sK.style.height = "100%", sK.style.zIndex = "5", tA.style.position = "absolute",
		function() {
			for (var tE = (100 / r5.length).toFixed(2) + "%", aA = 0; aA < r5.length; aA++) r5[aA].button.style.width = "100%", r5[aA].button.style.height = r5[aA].button.style.maxHeight = tE, r5[aA].button.style.padding = "0.0em 0.9em", tA
				.appendChild(r5[aA].button)
		}(), sK.appendChild(tA), sK.addEventListener("click", tC)
}

function tJ(rP, tK) {
	this.pM = [];
	var tL = this.pM;

	function click() {
		for (var aA = 0; aA < tL.length; aA++) tL[aA].textContent = tL[aA].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var dx = parseInt(this.name);
		void 0 !== rP.dx && bh.qy.qz(rP.dx, dx), tK && tK(dx)
	}
	for (var tM, eY = rP.tN.length, aA = 0; aA < eY; aA++)(tM = document.createElement("p")).textContent = "⚪ " + rP.tN[aA], tM.style.margin = "0", tM.name = "" + aA, tM.style.cursor = "pointer", tM.style.fontSize = "1em", tM.addEventListener(
		"click", click), tL.push(tM);
	tL[rP.value].textContent = tL[rP.value].textContent.replace("⚪", "🟢")
}

function tO(title, tP, tQ) {
	var rv = document.createElement("div"),
		tR = document.createElement("div"),
		rY = document.createElement("div"),
		tS = document.createElement("div"),
		tT = document.createElement("div");
	this.tU = rY, this.tV = tP, this.show = function() {
			!1 !== tQ ? document.body.appendChild(rv) : (document.body.appendChild(tR), document.body.appendChild(tS))
		}, this.qn = function() {
			!1 !== tQ ? document.body.removeChild(rv) : (document.body.removeChild(tR), document.body.removeChild(tS))
		}, this.tZ = function() {
			var qq = b8.pW.qp(.1),
				qo = b8.pW.qp(.08 + .04 * (h.ta < 1));
			return {
				qq: qq,
				qo: qo,
				tb: h.j / h.k - qq - qo
			}
		}, this.resize = function(r9) {
			var eY = tP.length,
				tc = this.tZ(),
				qq = tc.qq,
				qo = tc.qo;
			for (tR.style.height = b8.pW.pg(qq), b8.pW.ph(tR, 2), tS.style.top = b8.pW.pg(h.j / h.k - qo), tS.style.height = b8.pW.pg(qo), b8.pW.ph(tS, 8), rY.style.top = b8.pW.pg(qq), rY.style.height = rY.style.maxHeight = b8.pW.pg(tc.tb), tR.style
				.font = b8.pW.rL(0, b8.pW.qp(.02, .3)), tS.style.font = b8.pW.rL(0, b8.pW.qp(.02, .7)), rY.style.font = b8.pW.rL(0, b8.pW.qp(.02, .7)), aA = 1; aA < eY; aA++) b8.pW.ph(tP[aA].button, 4);
			for (var rA = 0, aA = 0; aA < eY; aA++) rA += tP[aA].button.offsetWidth;
			if (r9 && rA < tS.offsetWidth)
				for (aA = 0; aA < eY; aA++) tP[aA].button.style.width = (100 * tP[aA].button.offsetWidth / rA).toFixed(2) + "%";
			else
				for (aA = 0; aA < eY; aA++) tP[aA].button.style.width = "auto";
			tS.sE && (tS.scrollLeft = tS.sE), r9 || this.resize(!0)
		}, this.td = function() {
			var tc = this.tZ(),
				et = h.k;
			te.fillStyle = b9.ma, te.fillRect(0, et * tc.qq, h.i, et * tc.tb)
		}, rv.style.position = "absolute", rv.style.top = "0", rv.style.left = "0", rv.style.width = "100%", rv.style.height = "100%", tR.style.position = "absolute", tR.style.top = "0", tR.style.left = "0", tR.style.width = "100%", tR.style
		.display = "flex", tR.style.backgroundColor = b9.ma, tS.style.position = "absolute", tS.style.left = "0", tS.style.width = "100%", b8.pW.s2(tS), tT.style.height = tT.style.maxHeight = "100%", rY.style.position = "absolute", rY.style.width =
		"100%", rY.style.backgroundColor = b9.ma,
		function() {
			for (var aA = 0; aA < tP.length; aA++) tP[aA].button.style.height = "100%", tP[aA].button.style.padding = "0.0em 0.9em"
		}();
	for (var aA = 0; aA < tP.length; aA++) tT.appendChild(tP[aA].button);
	tR.appendChild(function() {
		var tY = document.createElement("h1");
		return tY.textContent = title, tY.style.margin = "auto", tY.style.fontSize = 20 < title.length && h.j > h.i ? "1.8em" : "2.3em", tY.style.webkitTextStroke = "0.02em brown", tY.style.fontFamily = "Arial Black, Trebuchet MS", tY
	}()), tS.appendChild(tT), !1 !== tQ && (rv.appendChild(rY), rv.appendChild(tR), rv.appendChild(tS))
}

function qU(tf, tg, th, ti) {
	var self;
	this.qV = document.createElement("span"), (self = this).qV.textContent = tf, self.qV.style.color = b9.me, self.qV.style.position = "absolute", self.qV.style.font = "inherit", ti ? self.qV.style.bottom = "0.06em" : self.qV.style.top = "0.12em",
		th ? self.qV.style.left = "0.2em" : self.qV.style.right = "0.2em", self.qV.style.fontSize = "0.6em", self.qV.style.pointerEvents = "none", self.qV.style.whiteSpace = "pre", tg.style.position = "relative", tg.style.overflow = "hidden", tg
		.appendChild(self.qV)
}

function s4(tf, tg, tj, tk, tl) {
	var self;
	this.qV = document.createElement("span"), this.resize = function() {
			this.qV.style.fontSize = ((tk - tj) * tg.offsetHeight).toFixed(1) + "px"
		}, (self = this).qV.textContent = tf, self.qV.style.color = b9.me, self.qV.style.font = "inherit", self.qV.style.margin = "0.1em 0.6em", self.qV.style.pointerEvents = "none", tl && (self.qV.style.fontWeight = "bold"), self.qV.style
		.whiteSpace = "nowrap", self.qV.style.display = "block", tg.appendChild(self.qV)
}

function tm(tn, to, tp, tq) {
	var tr = document.createElement("textarea"),
		ts = (this.e = tr, !0);

	function ty() {
		tr.select(), document.execCommand("copy")
	}
	this.resize = function() {
			to && b8.pW.ph(tr, 5)
		}, this.tt = function(tu) {
			tr.value = tu
		}, this.tv = function() {
			return tr.value
		}, this.tw = function() {
			tr.select()
		}, this.clear = function() {
			tr.value = ""
		}, this.tx = function() {
			ts && navigator.clipboard ? (tr.select(), navigator.clipboard.writeText(tr.value).catch(function() {
				ts = !1, ty()
			})) : ty()
		}, tr.setAttribute("id", "textArea" + s.x.rS++), tr.setAttribute("autocomplete", "off"), tn && tr.setAttribute("placeholder", tn), tr.style.top = "0", tr.style.left = "0", tr.style.width = "100%", tr.style.height = "100%", tr.style
		.userSelect = "none", tr.style.outline = "none", tr.style.resize = "none", tr.style.border = "none", tr.style.color = b9.me, tr.style.backgroundColor = b9.mX, tq ? (tr.style.fontSize = "1em", tr.rows = 6, tr.style.padding = "0.25em") : (tr
			.style.padding = "0.45em", tr.style.fontSize = "1.2em"), tp && tr.addEventListener("input", function(e) {
			tp(e)
		}), tr.addEventListener("focus", function() {
			h.rT++
		}), tr.addEventListener("blur", function() {
			h.rT--
		})
}

function dC() {
	this.po = new tz, this.km = new u0, this.qy = new u1, this.x = new u2, this.dU = function() {
		this.km.dU(), (new u3).dU()
	}
}

function u0() {
	function u4(aA, type, uB, dk) {
		bh.km.data.push({
			dx: aA,
			type: type || 0,
			value: uB || 0,
			uB: uB || 0,
			dk: dk || 0
		})
	}

	function u5(aA, type, uB, dk) {
		bh.km.data.push({
			dx: aA,
			type: type,
			value: uB || "",
			uB: uB || "",
			dk: dk || 0
		})
	}

	function u6(mM) {
		for (var aA = bh.km.data.length; aA < mM; aA++) bh.km.data.push(null)
	}
	this.data = [], this.dU = function() {
		u4(0, 1, 0, 5), u4(1, 1, 1), u4(2, 0), u5(3, 2), u4(4, 1), u5(5, 2, "Trebuchet MS", 1), u4(6, 0), u4(7, 0, 0), u4(8, 0), u4(9, 1, 1), u4(10, 1), u4(11, 1, 1), u5(12, 2, navigator.language), u4(13), u4(14), u6(100), u5(100, 2), u5(101, 2),
			u5(102, 2), u5(103, 2), u5(104, 2), u5(105, 2), u5(106, 2), u4(107), u4(108), u4(109), u5(110, 2), u4(111), u4(112), u4(113), u5(114, 2), u4(115), u5(116, 2), u4(117, 1), u5(118, 2, "", 2), u4(119, 1, 0, 1), u5(120, 2), u4(121, 1, ~~(
				262144 * Math.random())), u5(122, 2, "Player " + Math.floor(1e3 * Math.random())), u4(123), u5(124), u4(125, 1), u5(126, 2), u4(127, 0, 1), u4(128), u4(129), u4(130), u4(131), u4(132), u5(133, 2), u4(134, 0, 5), u5(135, 2), u5(
				136, 2), u4(137), u4(138), u4(139), u4(140), u4(141), u4(142), u4(143), u4(144), u5(145, 2), u4(146), u4(147), u5(148, 2), u4(149), u4(150, 0, 1), u5(151, 2), u4(152, 0, 5), u4(153, 1), u4(154, 1), u5(155, 2), u5(156, 2), u4(157),
			u4(158), u4(159), u6(180), u4(180, 0), u4(181, 0)
	}, this.qz = function(dx, value) {
		this.data[dx].value = value
	}, this.u7 = function(dx, value) {
		this.qz(dx, value), bh.po.save(dx, String(value)), bh.po.save(dx, String(this.data[dx].dk), !0)
	}, this.u8 = function() {
		for (var aA = 0; aA < this.data.length; aA++) this.data[aA] && (bh.po.save(aA, String(this.data[aA].value)), bh.po.save(aA, String(this.data[aA].dk), !0))
	}, this.u9 = function(dx) {
		return Number(this.data[dx].value)
	}, this.uA = function(dx) {
		return String(this.data[dx].value)
	}
}

function tz() {
	this.uC = function(dx, dk) {
		return Number(this.uD(dx, dk))
	}, this.uD = function(dx, dk) {
		var f0 = null;
		return 0 === z.id ? z.uE && (f0 = z.uE.getItem((dk ? "v" : "d") + dx)) : 1 === z.id ? f0 = z.uF.loadString((dk ? 1e3 : 2e3) + dx) : 2 === z.id && (f0 = z.uG[(dk ? "v" : "d") + dx]), f0 && 0 !== f0.length ? f0 : null
	}, this.uH = function(eY, uI) {
		var g = [],
			uJ = uI ? "e" : "l";
		if (0 === z.id) {
			if (z.uE)
				for (aA = 0; aA < eY; aA++) g.push(z.uE.getItem(uJ + aA))
		} else if (1 === z.id)
			for (var uK = uI ? 5e3 : 3e3, aA = 0; aA < eY; aA++) g.push(z.uF.loadString(uK + aA));
		else if (2 === z.id)
			for (aA = 0; aA < eY; aA++) g.push(z.uG[uJ + aA]);
		return g
	}, this.save = function(dx, value, dk) {
		var uL = (dk ? "v" : "d") + dx;
		if (0 === z.id) {
			if (z.uE && bh.km.data[140].value) try {
				z.uE.setItem(uL, value)
			} catch (e) {
				console.log(e)
			}
		} else 1 === z.id ? z.uF.saveString((dk ? 1e3 : 2e3) + dx, value) : 2 === z.id && (z.uG[uL] = value, z.uM.postMessage(uL + " " + value))
	}, this.uN = function(g, uI) {
		var eY = g.length,
			uJ = uI ? "e" : "l";
		if (0 === z.id) {
			if (z.uE && bh.km.data[140].value) try {
				for (aA = 0; aA < eY; aA++) z.uE.setItem(uJ + aA, g[aA])
			} catch (e) {
				console.log(e)
			}
		} else if (1 === z.id)
			for (var uK = uI ? 5e3 : 3e3, aA = 0; aA < eY; aA++) z.uF.saveString(uK + aA, g[aA]);
		else if (2 === z.id)
			for (aA = 0; aA < eY; aA++) z.uG[uJ + aA] = g[aA], z.uM.postMessage(uJ + aA + " " + g[aA])
	}
}

function u3() {
	this.dU = function() {
		! function() {
			var data = bh.km.data;
			0 === data[2].dk && (h.j > h.i || 0 !== z.id) && (data[2].value = data[2].uB = 1);
			0 === data[100].dk && (data[100].value = data[100].uB = (0 === z.id ? "Player " : 1 === z.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var aA, f0, data = bh.km.data,
			eY = data.length;
		for (aA = 0; aA < eY; aA++) data[aA] && data[aA].dk === bh.po.uC(aA, !0) && (f0 = bh.po.uD(aA), data[aA].value = null === f0 ? data[aA].uB : 2 === data[aA].type ? f0 : Number(f0))
	}
}

function u2() {
	function uT(g) {
		if (0 === g.length) bh.qy.qz(116, "");
		else {
			for (var uW = g[0], aA = 1; aA < g.length; aA++) uW += ";" + g[aA];
			bh.qy.qz(116, uW)
		}
	}
	this.uQ = function() {
		bh.km.data[110].value.length && (bh.km.data[106].value = bh.km.data[110], bh.qy.qz(110, ""), this.uR())
	}, this.uR = function() {
		var g = bh.km.data[116].value.split(";");
		for (g.length % 2 == 1 && g.pop(), g.unshift(bh.km.data[106].value), g.unshift(bh.km.data[105].value), aA = 2; aA < g.length; aA += 2)
			if (g[aA] === g[0]) {
				g.splice(aA, 2);
				break
			} for (var uS = [], aA = 0; aA < g.length; aA += 2) uS.push(g[aA]);
		uT(g), bh.km.data[117].value = 0, bh.km.data[117].tN = uS
	}, this.uU = function(dx) {
		bh.km.data[117].tN.splice(dx, 1), bh.km.data[117].value = Math.min(dx, bh.km.data[117].tN.length - 1);
		var g = bh.km.data[116].value.split(";");
		g.splice(2 * dx, 2), uT(g)
	}, this.uV = function(dx) {
		var g = bh.km.data[116].value.split(";");
		return {
			rj: g[2 * dx],
			password: g[2 * dx + 1]
		}
	}, this.uX = function() {
		var f0 = bJ.p4(bh.km.data[121].value, -1, 262143);
		return f0 = -1 === f0 ? ~~(262144 * Math.random()) : f0
	}
}

function u1() {
	this.qz = function(dx, value) {
		bh.km.data[dx].value !== value && (bh.km.u7(dx, value), 0 === dx ? (s.w(), b5.dU(), s.t(2)) : 1 === dx ? h.df(1) : 2 === dx ? h.df(0) : 5 === dx && (b8.pW.uY(), h.df(0)))
	}, this.uZ = function() {
		for (var data = bh.km.data, aA = 0; aA < 100; aA++) data[aA] && bh.km.u7(aA, data[aA].uB);
		b8.pW.uY(), h.df(1), b5.dU()
	}, this.ua = function() {
		for (var data = bh.km.data, aA = 0; aA < data.length; aA++) data[aA] && bh.km.qz(aA, data[aA].uB)
	}, this.ub = function() {
		for (var es = bh.km, aA = 128; aA < 135; aA++) es.u7(aA, es.data[aA].uB)
	}, this.uc = function(data) {
		bh.qy.qz(109, data.rk), bh.qy.qz(107, data.ud), bh.qy.qz(108, data.ue), bh.qy.qz(112, data.uf), bh.qy.qz(111, data.ug), bh.qy.qz(113, data.uh), bh.qy.qz(135, data.ui), bh.qy.qz(136, data.uj), bh.qy.qz(137, data.uk), bh.qy.qz(138, data
			.ul), bh.qy.qz(139, data.um), bh.qy.qz(141, data.un), bh.qy.qz(142, data.uo), bh.qy.qz(143, data.up), bh.qy.qz(144, data.uq)
	}
}

function bz() {
	this.ro = new ur, this.us = new ut, this.uu = new uv, this.dU = function() {
		this.ro.dU()
	}
}

function ut() {
	this.uw = function(size) {
		for (var ux = bF, g = [], aA = 0; aA < size; aA++) g.push(String.fromCharCode(ux.oX(16)));
		return g.join("")
	}, this.uy = function(pD) {
		return 20 < (pD = pD.trim()).length ? pD.substring(0, 20) : pD
	}
}

function ur() {
	var uz = new Uint8Array(78);
	this.dU = function() {
		var aA;
		for (uz[50] = 37, aA = 0; aA < 10; aA++) uz[aA + 3] = aA + 1;
		for (aA = 0; aA < 26; aA++) uz[aA + 20] = aA + 11, uz[aA + 52] = aA + 38
	}, this.v0 = function(pD) {
		return pD.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.v1 = function(pD, size) {
		if ((pD = this.v0(pD)).length > size) return pD.substring(0, size);
		for (; pD.length < size;) pD = "-" + pD;
		return pD
	}, this.v2 = function(pD) {
		for (var v3 = uz, eY = pD.length, g = new Uint8Array(eY), aA = 0; aA < eY; aA++) g[aA] = v3[pD.charCodeAt(aA) - 45];
		return g
	}, this.v4 = function(v5) {
		bB.a6(6 * v5.length), this.v6(v5), bF.dU(bB.aB)
	}, this.v6 = function(v5) {
		for (var eY = v5.length, i = bB, aA = 0; aA < eY; aA++) i.a7(6, v5[aA])
	}, this.v7 = function(pD) {
		this.v6(this.v2(pD))
	}, this.v8 = function(pD, size) {
		this.v6(this.v2(this.v1(pD, size)))
	}, this.v9 = function(pD, size) {
		for (var g = this.v2(this.v1(pD, size)), f0 = 0, mG = 1, aA = g.length - 1; 0 <= aA; aA--) f0 += mG * g[aA], mG *= 64;
		return f0
	}
}

function vA() {
	var i, j, vB;

	function vb(gx, eb, vZ, vG, vU) {
		eb = va(gx, eb + 1 + 2 * vG & 3);
		! function(gx, vc) {
			return 1 < Math.abs(gx % i - vc % i) || 1 < Math.abs(vf(gx) - vf(vc))
		}(gx, eb) && 0 === vU[eb << 2] && (vU[eb << 2] = vZ)
	}

	function vf(g5) {
		return Math.floor((g5 + .5) / i) % j
	}

	function va(g5, eb) {
		return g5 + vB[eb]
	}
	this.vC = function(pD) {
		var aA, vD, eY, vE, ux = bF;
		for (bE.ro.v4(bE.ro.v2(pD)), bQ.vH.vI[bQ.eE].i = bQ.ej = i = ux.oX(12), bQ.vH.vI[bQ.eE].j = bQ.ek = j = ux.oX(12), vB = [-i, -1, i, 1], bQ.vR = document.createElement("canvas"), bQ.vR.width = bQ.ej, bQ.vR.height = bQ.ek, bQ.vN = bQ.vR
			.getContext("2d", {
				alpha: !1
			}), bQ.vO = bQ.vS = null, bQ.vO = bQ.vN.getImageData(0, 0, bQ.ej, bQ.ek), bQ.vS = bQ.vO.data, b8.pf.vT(bQ.vS), eY = ux.oX(12), vD = ux.oX(5), vE = vK(i * j - 1), aA = 0; aA < eY; aA++) ! function(kV, g5, vF, vG) {
			var aA, eb, ux = bF,
				vU = bQ.vS,
				vV = g5,
				vW = g5,
				vX = 0,
				vY = 1 + vF,
				vZ = 2 - vF;
			for (vU[g5 << 2] = vY, aA = 0; aA < kV; aA++) eb = ux.oX(2), g5 = va(g5, eb), vU[g5 << 2] === vY ? vX % 2 == 1 && vb(vW, vX + 2 * vG + 3, vZ, vG, vU) : vU[g5 << 2] = vY, vb(g5, eb, vZ, vG, vU), vb(vW, eb, vZ, vG, vU), vW = g5,
				vX = eb;
			va(g5, 0) === vV ? (vb(g5, 0, vZ, vG, vU), vb(vV, 0, vZ, vG, vU)) : va(g5, 1) === vV && (vb(g5, 0, vZ, vG, vU), vb(vV, 2, vZ, vG, vU));
			0 === kV && (vb(vV, 0, vZ, vG, vU), vb(vV, 2, vZ, vG, vU))
		}(ux.oX(vD), ux.oX(vE), 1 === ux.oX(1), 1 === ux.oX(1));
		var ef, eh, hL, vg, vh, vi, vU = bQ.vS,
			vj = !0,
			vk = bQ.vH.vI[bQ.eE].vk,
			vl = bQ.vH.vI[bQ.eE].vl;
		for (eh = 0; eh < j; eh++)
			for (vg = !0, vh = vj, ef = vi = 0; ef < i; ef++) hL = 4 * eh * i + 4 * ef, vi <= ef && 0 < vU[hL] && (vh = 2 === vU[hL], vg) && (vg = !1, vh !== vj) ? (vj = vh, vi = ef + 1, ef = -1) : (vh ? (vU[hL] = vl[0], vU[1 + hL] = vl[1], vU[
				2 + hL] = vl[2]) : (vU[hL] = vk[0], vU[1 + hL] = vk[1], vU[2 + hL] = vk[2]), vU[3 + hL] = 255);
		bQ.vN.putImageData(bQ.vO, 0, 0), bQ.vP = !0, bQ.vQ.dU(), bd.dc = !0
	}
}

function uv() {
	this.vC = function(vm) {
		for (var ux = bF, size = ux.oX(vm), vn = 7 + 9 * ux.oX(1), g = [], aA = 0; aA < size; aA++) g.push(String.fromCharCode(ux.oX(vn)));
		return g.join("")
	}
}

function c4() {
	var rG, rH, vo, vp, vq, vr, vs, vt, vu, vv;

	function vx() {
		var w0 = aC.w0;
		for (vu = w0; vu < aC.eV; vu++) vw();
		for (vu = aC.gt ? aC.jn : 0; vu < w0; vu++) {
			if (!w1()) {
				for (var es = aC.w5 = vu; es < w0; es++) vu = es, vw();
				return
			}
			w4(vr + rG * vq + bJ.dj(vq, 2), vs + rH * vq + bJ.dj(vq, 2))
		}
	}

	function wX(player) {
		for (var iM = af.iM, iO = af.iO, iN = af.iN, iP = af.iP, eh = iO[player]; eh <= iP[player]; eh++)
			for (var ef = iM[player]; ef <= iN[player]; ef++) {
				var eC = ab.wY(ef, eh);
				ab.g7(eC) && (ab.j0(eC) ? ab.g2(eC, player) : ab.wZ(eC, player))
			}
	}

	function wW(g, s6, s7) {
		var di = g[s6];
		g[s6] = g[s7], g[s7] = di
	}

	function w1() {
		return function() {
			var aA;
			for (aA = 0; aA < 8; aA++)
				if (rG = bJ.dj(vo * aw.random(), aw.value(100)), rH = bJ.dj(vp * aw.random(), aw.value(100)), we()) return 1;
			return
		}() || function() {
			var ht, hw, er, w3, es, w2;
			for (ht = bJ.dj(vo * aw.random(), aw.value(100)), hw = bJ.dj(vp * aw.random(), aw.value(100)), er = 40; 1 <= er; er--)
				for (w3 = vp - er; 0 <= w3; w3 -= 40)
					for (rH = (w3 + hw) % vp, es = 40; 1 <= es; es--)
						for (w2 = vo - es; 0 <= w2; w2 -= 40)
							if (rG = (w2 + ht) % vo, we()) return 1;
			return
		}()
	}

	function we() {
		for (var g5, wg, gap = bJ.dj(vq - vt, 2), wh = vs + rH * vq + gap, wi = vr + rG * vq + gap, wf = wh + vt - 1; wh <= wf; wf--)
			for (wg = wi + vt - 1; wi <= wg; wg--)
				if (g5 = ab.wY(wg, wf), !ab.eT(g5) || ab.j0(g5)) return;
		return 1
	}

	function w4(w2, w3) {
		vw(), wj(w2 - 2, w3 - 2)
	}

	function vw() {
		af.lc[vu] = 0, af.gL[vu] = af.wU[vu] = 0, af.fz[vu] = [], af.gD[vu] = [], af.gE[vu] = [], af.ey[vu] = [], af.iM[vu] = af.iO[vu] = af.iN[vu] = af.iP[vu] = 0
	}

	function wj(w2, w3) {
		var g5, aA, wk, wl;
		for (af.lc[vu] = 1, af.iM[vu] = w2 + 10, af.iO[vu] = w3 + 10, af.iP[vu] = af.iN[vu] = 0, wk = w2; wk < w2 + 4; wk++)
			for (wl = w3; wl < w3 + 4; wl++)(w2 < wk && wk < w2 + 3 || w3 < wl && wl < w3 + 3) && (g5 = ab.wY(wk, wl), ab.eT(g5)) && (af.iM[vu] = Math.min(wk, af.iM[vu]), af.iN[vu] = Math.max(wk, af.iN[vu]), af.iO[vu] = Math.min(wl, af.iO[vu]), af
				.iP[vu] = Math.max(wl, af.iP[vu]), vv[af.gL[vu]] = g5, af.gL[vu]++, ab.wZ(g5, vu));
		for (af.wU[vu] = af.gL[vu], aA = af.gL[vu] - 1; 0 <= aA; aA--) ab.wm(vv[aA], vu) ? (ab.g2(vv[aA], vu), af.gD[vu].push(vv[aA])) : ab.wn(vv[aA]) ? (ab.g2(vv[aA], vu), af.gE[vu].push(vv[aA])) : ab.wo(vv[aA]) && (ab.g2(vv[aA], vu), af.ey[vu]
			.push(vv[aA]))
	}

	function wd(w2, w3) {
		for (var g5, wg, wf = w3; w3 - 6 < wf; wf--)
			for (wg = w2; w2 - 6 < wg; wg--)
				if (g5 = ab.wY(wg, wf), ab.j0(g5)) return;
		return 1
	}
	this.dU = function() {
		if (vv = new Array(12), vt = 6, vq = 10, vo = bJ.dj(bQ.ej, vq), vp = bJ.dj(bQ.ek, vq), vr = bJ.dj(bQ.ej - vq * vo, 2), vs = bJ.dj(bQ.ek - vq * vp, 2), aC.gt)
			for (var aA = 0; aA < aC.jn; aA++) vu = aA, vw(), af.lc[vu] = 1;
		(0 === aC.data.spawningType ? vx : 1 === aC.data.spawningType ? (vx(), function() {
			var w6 = aC.w7;
			aC.w8 || w6++;
			if (!(w6 < 3)) {
				for (var data = aC.data, j4 = (aC.gt ? aC.jn : 0) + data.teamPlayerCount[0], mM = aC.w5, w9 = new Uint32Array(w6), wA = new Uint32Array(w6), wB = new Uint16Array(w6), wC = new Uint16Array(w6), eW = be.eW, iM = af.iM, iO =
						af.iO, iN = af.iN, iP = af.iP, fC = bM.fC, fD = bM.fD, aA = j4; aA < mM; aA++) fC[aA] = iM[aA] + iN[aA] >> 1, fD[aA] = iO[aA] + iP[aA] >> 1;
				for (aA = j4; aA < mM; aA++) {
					var id = eW[aA];
					w9[id] += fC[aA], wA[id] += fD[aA]
				}
				var k9 = be.k9;
				for (aA = 1; aA < w6; aA++) {
					var g0 = Math.max(data.teamPlayerCount[k9[aA]], 1);
					wB[aA] = bJ.dj(w9[aA], g0), wC[aA] = bJ.dj(wA[aA], g0)
				}
				var wD = be.wD,
					wE = be.wE,
					wF = be.wF,
					fB = bM.fB;
				for (aA = 0; aA < 512; aA++) fB[aA] = aA;
				for (var dw = 0; dw < 2 + (4 <= w6); dw++)
					for (aA = j4; aA < mM; aA++) {
						for (var gx = aA, wG = fB[gx], wH = 1, eo = bJ.wI(fC[wG] - wB[1], fD[wG] - wC[1]), er = 2; er < w6; er++) {
							var wJ = bJ.wI(fC[wG] - wB[er], fD[wG] - wC[er]);
							wJ < eo && (eo = wJ, wH = er)
						}
						var wK = eW[gx];
						if (wH !== wK) {
							if (2 === dw && 4 <= w6) {
								var wL = Math.max((wH + 1) % w6, 1),
									wM = bJ.wI(fC[wG] - wB[wL], fD[wG] - wC[wL]);
								for (er = 1; er < w6; er++) wJ = bJ.wI(fC[wG] - wB[er], fD[wG] - wC[er]), eo < wJ && wJ < wM && (wM = wJ, wL = er);
								wL !== wK && bJ.wI(wB[wK] - wB[wL], wC[wK] - wC[wL]) < bJ.wI(wB[wK] - wB[wH], wC[wK] - wC[wH]) && (wH = wL)
							}
							var wN = k9[wH],
								wO = wE[wN] + (aC.gt ? 0 : wF[wN]),
								vc = wD[wO],
								wP = fB[vc],
								wQ = wE[wN + 1];
							eo = bJ.wI(fC[wP] - wB[wK], fD[wP] - wC[wK]);
							for (var et = wO + 1; et < wQ; et++) {
								var wR = wD[et],
									wS = fB[wR];
								(wJ = bJ.wI(fC[wS] - wB[wK], fD[wS] - wC[wK])) < eo && (eo = wJ, vc = wR)
							}
							vc < j4 || mM <= vc || (wP = fB[vc], w9[wK] += fC[wP] - fC[wG], wA[wK] += fD[wP] - fD[wG], w9[wH] += fC[wG] - fC[wP], wA[wH] += fD[wG] - fD[wP], g0 = data.teamPlayerCount[k9[wK]], wB[wK] = bJ.dj(w9[wK], g0),
								wC[wK] = bJ.dj(wA[wK], g0), g0 = data.teamPlayerCount[wN], wB[wH] = bJ.dj(w9[wH], g0), wC[wH] = bJ.dj(wA[wH], g0), fB[gx] = wP, fB[vc] = wG)
						}
					}! function() {
						for (var fB = bM.fB, iM = af.iM, iO = af.iO, iN = af.iN, iP = af.iP, gL = af.gL, wU = af.wU, gD = af.gD, gE = af.gE, ey = af.ey, aA = 0; aA < 512; aA++) {
							var wV = fB[aA];
							if (wV !== aA) {
								wW(iM, aA, wV), wW(iO, aA, wV), wW(iN, aA, wV), wW(iP, aA, wV), wW(gL, aA, wV), wW(wU, aA, wV), wW(gD, aA, wV), wW(gE, aA, wV), wW(ey, aA, wV), wX(aA), wX(wV), fB[aA] = aA;
								for (var j = wV, g6 = fB[j]; g6 !== aA;) g6 = fB[j = g6];
								fB[j] = wV
							}
						}
					}()
			}
		}) : function() {
			var w0 = aC.w0;
			for (vu = w0; vu < aC.eV; vu++) vw();
			for (vu = aC.gt ? aC.jn : 0; vu < w0; vu++)
				if (! function() {
						var spawningData = aC.data.spawningData,
							w2 = spawningData[2 * vu] + 1,
							spawningData = spawningData[2 * vu + 1] + 1;
						if (3 < w2 && w2 < bQ.ej - 5 && 3 < spawningData && spawningData < bQ.ek - 5 && ab.eT(ab.wY(w2, spawningData)) && wd(w2 + 3, spawningData + 3)) return w4(w2 + 1, spawningData + 1), 1;
						return
					}()) {
					if (!w1()) {
						for (var es = aC.w5 = vu; es < w0; es++) vu = es, vw();
						return
					}
					var w2 = vr + rG * vq + bJ.dj(vq, 2),
						w3 = vs + rH * vq + bJ.dj(vq, 2);
					w4(w2, w3)
				}
		})(), bb.lY[7] = af.gL[aC.eI]
	}, this.wp = function(iy, wq, wr) {
		var aA, w2, w3, g5, rG, rH;
		for (vu = iy, aA = 0; aA < 20; aA++)
			for (w2 = wq + aA; wq - aA <= w2; w2--)
				for (w3 = wr + aA; wr - aA <= w3; w3--)
					if ((w2 === wq + aA || w2 === wq - aA || w3 === wr + aA || w3 === wr - aA) && 3 < w2 && w2 < bQ.ej - 5 && 3 < w3 && w3 < bQ.ek - 5 && ab.eT(ab.wY(w2, w3)) && wd(w2 + 3, w3 + 3)) {
						if (0 < af.gL[vu]) {
							for (rH = rG = g5 = void 0, rG = af.iN[vu]; rG >= af.iM[vu]; rG--)
								for (rH = af.iP[vu]; rH >= af.iO[vu]; rH--) g5 = 4 * (rH * bQ.ej + rG), ab.wt(vu, g5) && (ab.wu(g5), af.gL[vu]--);
							vw()
						}
						return wj(w2 - 1, w3 - 1), !0
					} return !1
	}, this.wv = function(iy) {
		vu = iy, w1() ? w4(vr + rG * vq + bJ.dj(vq, 2), vs + rH * vq + bJ.dj(vq, 2)) : vw()
	}
}

function ww() {
	aq.wx(), te.setTransform(i9, 0, 0, i9, 0, 0), te.imageSmoothingEnabled = i9 < 3, te.drawImage(bQ.vR, aR.wy(), aR.wz()), bN.x0.td(), te.drawImage(x1, aR.wy(), aR.wz()), aq.td(), bL.td(), ae.td(), (aC.m7 ? (bf.td(), bA) : (aM.td(), aU.td(), aQ
	.td(), bA.td(), au.td(), aV.td(), aR.td(), aP.td(), bf.td(), aT.td(), aO.td(), aL.td(), aK.td(), aW.td(), bc.td(), at)).td(), s.td()
}

function x2(x3, i, j) {
	x3.clearRect(0, 0, i, j), x3.fillStyle = b9.mb, x3.fillRect(0, 0, i, j)
}

function x4(x3, i, j, x5) {
	x3.fillStyle = b9.me, x3.fillRect(0, 0, i, x5), x3.fillRect(0, 0, x5, j), x3.fillRect(i - x5, 0, x5, j), x3.fillRect(0, j - x5, i, x5)
}

function x6(x3, ef, eh, hP, x5, g5, x7) {
	x3.fillStyle = b9.me;
	var g5 = Math.floor(hP * g5),
		rt = (g5 += (g5 - x5) % 2, Math.floor((g5 - x5) / 2)),
		hP = Math.floor((hP - g5) / 2);
	x3.fillRect(ef + hP, eh + hP + rt, g5, x5), x7 && x3.fillRect(ef + hP + rt, eh + hP, x5, g5)
}

function x9() {
	this.dU = function() {
		8 === aC.k4 && aM.xA()
	}, this.xB = function(xC) {
		var elo = aC.data.elo,
			hh = (elo[xC] - elo[1 - xC]) / 10,
			hh = 8 / (1 + Math.pow(2, hh / 32)),
			hh = Math.floor(10 * hh + .5),
			xE = this.xF(elo[xC] + (1 + aC.xG) * hh + 1),
			elo = this.xF(elo[1 - xC] - hh);
		0 === xC ? aM.xI(xE, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : aM.xI(elo, xE, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"])
	}, this.xF = function(elo) {
		return 16e3 === (elo = bJ.p4(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function cZ() {
	this.qm = new xJ, this.vU = new xK
}

function xK() {
	this.hF = !1;
	this.xO = [], this.xP = 100;
	var m4, m5, gap, hP, xL, xN, xQ = 0,
		xR = new Array(9),
		xS = [],
		xT = [],
		xU = 0,
		xV = 0,
		xW = 0,
		xX = 0;

	function xj() {
		xR.sort(function(er, es) {
			return es.js - er.js
		});
		for (var pD = "" + xR[0].o9, aA = 1; aA < 9; aA++) pD += "," + xR[aA].o9;
		for (aA = 0; aA < 9; aA++) pD += "," + xR[aA].js;
		bh.km.u7(120, pD)
	}
	this.dU = function() {
		for (var xY = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], aA = 0; aA < xY.length; aA++) {
			var color = 6 === xY[aA] ? b9.n4 : b9.mc;
			this.xO.push(b8.canvas.xZ(aa.get(3), xY[aA], color))
		}
		for (aA = 0; aA < ai.qm.xa; aA++) xT.push(ai.qm.xb - ai.qm.xa + aA);
		for (aA = 0; aA < ai.qm.xc; aA++) xT.push(ai.qm.xd + aA);
		var xe = ai.qm.xf(bI.xe);
		for (aA = 0; aA < xe.length; aA++) xT.push(xe[aA]);
		! function() {
			var aA, g = bh.km.data[120].value.split(",");
			if (18 !== g.length)
				for (aA = 0; aA < 9; aA++) xR[aA] = {
					o9: 1015 + aA,
					js: 0
				};
			else
				for (aA = 0; aA < 9; aA++) {
					var f0 = parseInt(g[aA]),
						et = (f0 = 0 <= f0 && f0 < ai.qm.xb ? f0 : 0, parseInt(g[aA + 9]));
					et = 0 <= et && et < 1e3 ? et : 0, xR[aA] = {
						o9: f0,
						js: et
					}
				}
		}()
	}, this.show = function(kr, ks, xk) {
		var aA;
		if (xU = kr, xV = ks, xQ = xk || 0, this.hF = !0, xS = [], 0 === xQ)
			for (aA = 0; aA < 9; aA++) xS.push(xR[aA].o9);
		else {
			var es = 49 * xQ,
				xk = es - 49;
			for (xk >= xT.length && (xQ = 1, xk = 0, es = 49), aA = xk = (es = Math.min(es, xT.length)) - 49; aA < es; aA++) xS.push(xT[aA])
		}
		xS.push(1024);
		xk = xS.length, hP = Math.floor((z.a0.qu() ? .075 : .0468) * h.pY), gap = Math.floor(hP / 3), (xW = 10 * (xL = hP + gap)) > h.i && (xW = h.i, gap = (xL = xW / 10) - (hP = 3 * xL / 4)), xN = bJ.dj(xk, 10) + !!(xk % 10), (xX = xN * xL) > h
			.j && (xX = h.j, gap = (xL = xX / xN) - (hP = 3 * xL / 4)), xk = .5 * gap;
		m4 = Math.min(Math.max(kr - .5 * xW + xk, xk), h.i - xW + xk), m5 = Math.min(Math.max(ks - .5 * xX + xk, xk), h.j - xX + xk)
	}, this.gl = function(kr, ks, player) {
		if (!this.hF) return !1;
		if (this.xm(kr, ks)) {
			kr = bJ.p4(bJ.dj(kr - m4 + .5 * gap, xL), 0, 9);
			if ((kr += 10 * bJ.p4(bJ.dj(ks - m5 + .5 * gap, xL), 0, 9)) >= xS.length) return aK.qn(), !0;
			ks = xS[kr];
			if (1024 === ks) return this.show(xU, xV, xQ + 1), !0;
			! function(o9) {
				for (var aA = 0; aA < 9; aA++) xR[aA].js = Math.floor(.99 * xR[aA].js);
				for (aA = 0; aA < 9; aA++)
					if (o9 === xR[aA].o9) return xR[aA].js = Math.min(xR[aA].js + 30, 999), xj();
				xR.splice(5, 0, {
					o9: o9,
					js: Math.max(xR[4].js, 30)
				}), xR.pop(), xj()
			}(ks), player === aC.eI ? b6.gu.o8(ks) : b6.ft.oM(ks, player)
		}
		return aK.qn(), !0
	}, this.xm = function(kr, ks) {
		return !(kr < m4 - .5 * gap || ks < m5 - .5 * gap || m4 + xW - .5 * gap <= kr || m5 + xX - .5 * gap <= ks)
	}, this.td = function() {
		te.fillStyle = b9.mb, te.fillRect(m4 - .5 * gap, m5 - .5 * gap, xW, xX);
		for (var hL = .5 * ba.xn, eY = (te.lineWidth = ba.xn, te.strokeStyle = te.fillStyle = b9.me, te.strokeRect(m4 - .5 * gap + hL, m5 - .5 * gap + hL, xW - 2 * hL, xX - 2 * hL), te.imageSmoothingEnabled = !0, xS.length), aA = 0; aA <
			eY; aA++) this.xo(xS[aA], te, m4 + aA % 10 * xL, m5 + bJ.dj(aA, 10) * xL, hP);
		te.imageSmoothingEnabled = !1
	}, this.xo = function(o9, hV, ef, eh, hP) {
		var eC;
		o9 >= 1024 - ai.qm.xa ? (eC = hP / this.xP, hV.setTransform(eC, 0, 0, eC, ef, eh), hV.drawImage(this.xO[o9 - 1024 + ai.qm.xa], 0, 0), hV.setTransform(1, 0, 0, 1, 0, 0)) : (b8.pW.textAlign(hV, 1), b8.pW.textBaseline(hV, 1), hV.font = b8.pW
			.rL(0, .89 * hP), hV.fillText(ai.qm.xp(o9), ef + .5 * hP, eh + (.35 - b8.pW.xq + .56) * hP))
	}
}

function xJ() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.xa = 13, this.xc = this.emojis.length, this.xd = 676, this.xb = 1024, this.xr = this.emojis.indexOf("💀"), this.xs = this.xr + 1, this.xt = this.emojis.indexOf("🥇"), this.xu = this.emojis.indexOf("😊"), this.xp = function(f0) {
		return f0 < this.xd ? String.fromCharCode(55356, 56806 + bJ.dj(f0, 26), 55356, 56806 + f0 % 26) : this.emojis[Math.min(f0 - this.xd, this.xc - 1)]
	}, this.xf = function(pD) {
		for (var eY = pD.length - 2, g = [], aA = 0; aA < eY; aA++) {
			var hd = pD.charCodeAt(aA) - 56806,
				he = pD.charCodeAt(aA + 2) - 56806;
			0 <= hd && hd < 26 && 0 <= he && he < 26 && (g.push(26 * hd + he), aA += 3)
		}
		return g
	}, this.xv = function(f0) {
		return f0 < this.xd
	}, this.xw = function(f0) {
		return f0 >= 1024 - this.xa
	}, this.xx = function(f0) {
		return f0 >= this.xd && f0 < this.xd + this.xs
	}
}

function by() {
	this.ro = new xy, this.us = new xz, this.uu = new y0, this.dU = function() {
		this.ro.dU()
	}
}

function xz() {
	this.v7 = function(pD) {
		for (var eY = pD.length, i = bB, aA = 0; aA < eY; aA++) i.a7(16, pD.charCodeAt(aA))
	}
}

function xy() {
	var y1 = new Uint8Array(64);
	this.dU = function() {
		var aA;
		for (y1[0] = 45, y1[37] = 95, aA = 0; aA < 10; aA++) y1[aA + 1] = 48 + aA;
		for (aA = 0; aA < 26; aA++) y1[aA + 11] = 65 + aA, y1[aA + 38] = 97 + aA
	}, this.rq = function(y2) {
		for (var ux = bF, v5 = new Uint8Array(y2), aA = 0; aA < y2; aA++) v5[aA] = ux.oX(6);
		return v5
	}, this.rp = function(v5) {
		for (var eY = v5.length, y3 = y1, g = [], aA = 0; aA < eY; aA++) g.push(String.fromCharCode(y3[v5[aA]]));
		return g.join("")
	}, this.y4 = function(value, y5) {
		for (var y3 = y1, g = [], aA = 0; aA < y5; aA++) g.push(String.fromCharCode(y3[value >> 6 * (y5 - 1 - aA) & 63]));
		return g.join("")
	}
}

function c6() {
	var y6, y7, y8;
	y6 = [32, 65, 191, 913, 931], y7 = [64, 127, 688, 930, 1155], y8 = new Array(y6.length + 1);
	for (var aA = 0; aA < y8.length; aA++) {
		y8[aA] = 0;
		for (var er = aA - 1; 0 <= er; er--) y8[aA] += y7[er] - y6[er]
	}

	function yE(et) {
		for (var aA = y6.length - 1; 0 <= aA; aA--)
			if (et >= y6[aA] && et < y7[aA]) return aA;
		return -1
	}
	this.uy = function(pD) {
		return 0 !== (pD = pD.trim()).indexOf("Bot ") && 0 !== pD.indexOf("[Bot] ") && function(pD, yB, yC) {
			var eY = (pD = pD.trim()).length;
			if (eY < yB || yC < eY) return !1;
			for (var et, yD = 0, aA = 0; aA < eY; aA++)
				if (et = pD.charCodeAt(aA), yD += 65 <= et && et <= 90 || 1040 <= et && et <= 1071 ? 1 : 0, -1 === yE(et)) return !1;
			if (3 < yD && yD > Math.floor(eY / 2)) return !1;
			return !0
		}(pD, 3, 20)
	}, this.yF = function(pD) {
		for (var eY = (pD = pD.trim()).length, g = [], aA = 0; aA < eY; aA++) {
			var et, g5 = yE(et = pD.charCodeAt(aA));
			g.push(y8[g5] + et - y6[g5])
		}
		return g
	}, this.vC = function(g) {
		for (var et, es, pD = "", eY = g.length, aA = 0; aA < eY; aA++)
			for (es = 1; es < y8.length; es++)
				if (g[aA] < y8[es]) {
					et = y6[es - 1] + g[aA] - y8[es - 1], pD += String.fromCharCode(et);
					break
				} return pD
	}, this.yG = function(pD) {
		for (var g = this.yF(pD), result = "", aA = 0; aA < g.length; aA++) result = (result += g[aA] < 10 ? "00" : g[aA] < 100 ? "0" : "") + g[aA].toString(10);
		return result
	}, this.yH = function(pD) {
		for (var g = new Array(Math.floor(pD.length / 3)), aA = 0; aA < pD.length; aA += 3) g[Math.floor(aA / 3)] = parseInt(pD.substring(aA, aA + 3));
		return this.vC(g)
	}, this.yI = function(pD) {
		for (var f0, g = [pD.length], aA = 0; aA < pD.length; aA++) g[aA] = pD.charCodeAt(aA) - 48;
		var result = "";
		for (aA = 0; aA < pD.length; aA++) aA === pD.length - 1 || 51 < 10 * g[aA] + g[aA + 1] ? result += g[aA].toString() : (f0 = 10 * g[aA] + g[aA + 1], result += String.fromCharCode(f0 + (f0 < 26 ? 65 : 71)), aA++);
		return result
	}, this.yJ = function(pD) {
		for (var et, result = "", aA = 0; aA < pD.length; aA++) 48 <= (et = pD.charCodeAt(aA)) && et < 58 ? result += String.fromCharCode(et) : 65 <= et && et < 75 ? result += "0" + (et - 65).toString() : 75 <= et && et < 91 ? result += (et - 65)
			.toString() : 97 <= et && et < 123 && (result += (et - 71).toString());
		return result
	}, this.yK = function(pD) {
		for (var eY = pD.length, g = [], aA = 0; aA < eY; aA++)(et = pD.charCodeAt(aA)) < 58 ? g.push(pD[aA]) : (et -= et < 91 ? 65 : 71, g.push(String(bJ.dj(et, 10))), g.push(String(et - 10 * bJ.dj(et, 10))));
		var eY = g.length - 2,
			et = 0,
			v5 = [];
		for (aA = 0; aA < eY; aA += 3) v5[et++] = parseInt(g[aA] + g[aA + 1] + g[aA + 2]);
		return v5
	}, this.yL = function() {
		for (var dw, yM = "", aA = 0; aA < 6; aA++) dw = 48 + aw.random() % 36, dw += 58 <= dw ? 39 : 0, yM += String.fromCharCode(dw);
		return yM
	}
}

function y0() {
	this.yF = function(pD, vm, yN) {
		for (var yO = [], eY = pD.length, max = 0, aA = 0; aA < eY; aA++) {
			var f0 = pD.charCodeAt(aA);
			yO.push(f0), max = Math.max(max, f0)
		}
		var vn = max < 128 ? 7 : 16;
		for (yN.a7(vm, eY), yN.a7(1, +(16 == vn)), aA = 0; aA < eY; aA++) yN.a7(vn, yO[aA])
	}
}

function d4() {
	this.yP = new yQ, this.result = new yR, this.h1 = new yS, this.yT = new yU, this.yV = new yW, this.yX = new yY, this.dU = function() {
		this.result.dU()
	}
}

function yS() {
	this.yZ = function() {
		for (var eY = ak.jo, ya = ak.jp, yb = [], aA = 0; aA < eY; aA++) {
			var g5 = ya[aA];
			b8.ft.yc(g5) && yb.push(g5)
		}
		return yb
	}, this.yd = function() {
		if (0 === be.k9[aC.ye]) return this.yf();
		bf.l1(aC.ye);
		for (var yb = [], eY = bM.f3[0], fB = bM.fB, aA = 0; aA < eY; aA++) {
			var g5 = fB[aA];
			b8.ft.yc(g5) && yb.push(g5)
		}
		return yb
	}, this.yf = function() {
		var g5 = l3[0];
		return b8.ft.yc(g5) ? [g5] : []
	}, this.yg = function(yb) {
		for (var eY = yb.length, di = 0, gL = af.gL, aA = 0; aA < eY; aA++) di += gL[yb[aA]];
		return di
	}
}

function yQ() {
	function yi() {
		if (2 === aC.ym) return 1;
		au.yn(), aC.ym = 2, aC.yo = aC.yp
	}

	function yk() {
		bP.yV.yq(), aW.show(1 === aC.yr, !1, 2 === aC.yr), bP.result.yq(), bP.yX.ih(), bP.yT.ih(), aM.ys(!0), aM.yt(247), aM.yt(956), aM.yt(957), aU.lO(!0), aV.lO(!0), au.lO(), bA.yu(), aC.gh && bd.yv.yw(), bd.dc = !0, bZ.yx(), z.a0.setState(0)
	}
	this.yh = function() {
		yi() || (aC.yj = 2, yk())
	}, this.yl = function() {
		yi() || (aC.yj = 1, yk())
	}
}

function yU() {
	this.ih = function() {
		var z6;
		2 === aC.yj ? (aM.yy(0, 59), aG.mD(2700)) : aC.k4 < 7 ? (z6 = be.k9[aC.ye], z6 = be.z8[z6], aP.z9(L(23, [z6]), 2, 1, 12), aM.zA(0, L(24, [z6]), 40, 0, b9.me, b9.mb, -1, !1), aG.mD(2700)) : 8 === aC.k4 ? (aC.yr ? aM.yy(aC.z3, 2) : aM.yy(
			1 - aC.eI, 3), aC.z4.xB(aC.z3), aM.z5(aC.z3), aG.ly(aC.z3, 2700, !1, 0)) : 9 === aC.k4 ? (aM.zB(), aG.mD(2700)) : (aM.z5(aC.z3), aG.ly(aC.z3, 2700, !1, 0))
	}
}

function yY() {
	function zL() {
		var sA = Math.floor(af.zM[aC.eI] / 50);
		return Math.min(sA, 400) / 100
	}

	function zD() {
		var sA = zL();
		0 !== sA && aM.zA(440, L(25, [sA.toFixed(2)]), 40, 0, b9.mw, b9.mb, -1, !1)
	}
	this.ih = function() {
		if (0 === bP.result.zC || 0 === bP.result.yb.length) b8.ft.gk(aC.eI) && zD();
		else {
			var zE = function() {
				aM.zA(520, L(26), 40, 0, b9.me, b9.mb, -1, !1);
				for (var yb = bP.result.yb, eY = yb.length, gL = af.gL, g = [], aA = 0; aA < eY; aA++) {
					var g5 = yb[aA];
					g.push({
						g5: g5,
						di: gL[g5]
					})
				}
				g.sort((er, es) => es.di - er.di);
				var z8 = af.zN,
					di = bP.result.zO,
					sA = bP.result.zC,
					pD = "",
					zE = 0;
				for (aA = 0; aA < eY; aA++) {
					var hD = g[aA].di * sA / (100 * di),
						zQ = z8[g[aA].g5] + ": " + hD.toFixed(2) + "   ";
					g[aA].g5 === aC.eI && (zE = hD), 2 < aA && 4 !== eY ? 3 === aA && (pD += "(" + L(27, [eY - 3]) + ")") : pD += zQ
				}
				aM.zA(560, b8.zR.zS(pD), 40, 0, b9.mw, b9.mb, -1, !1), zE ? aM.zA(580, L(28, [zE.toFixed(2) + " + " + zL().toFixed(2)]), 40, 0, b9.mw, b9.mb, -1, !1) : b8.ft.gk(aC.eI) && zD();
				return zE
			}();
			if (! function(zE) {
					7 !== aC.k4 && 10 !== aC.k4 || 0 !== aC.yr && aM.zA(600, L(29, [zE.toFixed(2)]), 40, 0, b9.me, b9.mb, -1, !1)
				}(zE), !(2 === aC.yj || 7 <= aC.k4)) {
				var yb = bP.result.yb,
					eY = yb.length,
					zT = af.zT,
					gL = af.gL,
					zU = [];
				loop: for (var aA = 0; aA < eY; aA++) {
					var g5 = yb[aA],
						zV = b8.zR.zW(zT[g5]);
					if (null !== zV) {
						for (var zX = gL[g5], es = zU.length - 1; 0 <= es; es--)
							if (zV === zU[es].name) {
								zU[es].di += zX, zU[es].g.push({
									g5: g5,
									di: zX
								});
								continue loop
							} zU.push({
							name: zV,
							di: zX,
							g: [{
								g5: g5,
								di: zX
							}]
						})
					}
				}
				if (0 !== zU.length) {
					zU.sort((er, es) => es.di - er.di);
					var g = zU[0].g,
						zE = (g.sort((er, es) => es.di - er.di), "[" + zU[0].name + "]"),
						sA = bP.result.zC,
						zZ = 512 * sA / 26214400,
						kV = (aM.zA(0, L(30, [zE, zZ.toFixed(4)]), 40, 0, b9.me, b9.mb, -1, !1), g.length),
						di = bP.result.zO,
						v3 = zU[0].di,
						za = 1e4 * zZ;
					for (aA = 0; aA < kV; aA++)
						if (g[aA].g5 === aC.eI) {
							aM.zA(600, L(31, [(za * g[aA].di / (10 * v3)).toFixed(2)]), 40, 0, b9.me, b9.mb, -1, !1), aM.zA(600, L(32), 40, 0, b9.me, b9.mb, -1, !1);
							break
						} zZ = (v3 * sA / (1e3 * di)).toFixed(2);
					aM.zA(680, L(33, [zE, zZ]), 40, 0, b9.me, b9.mb, -1, !1), aC.gh || aM.zA(720, L(34) + bI.zc, 736, 0, b9.me, b9.n2, -1, !1)
				}
			}
		}
	}, this.zI = function() {
		var zJ, vV;
		aC.k6 || (zJ = af, vV = aC.eI, 0 === zJ.zK[vV]) || zJ.ir[vV] < 1 || 2 * zJ.os[vV] > 3 * (zJ.iq[vV] + zJ.ir[vV]) || zD()
	}
}

function yR() {
	this.dU = function() {
		this.zd = 0, this.yb = [], this.zO = 0, this.zC = 0
	}, this.yq = function() {
		var r8, zi;
		aC.k6 || (r8 = this, 2 === aC.yj ? r8.yb = bP.h1.yZ() : aC.hN ? r8.yb = bP.h1.yd() : r8.yb = bP.h1.yf(), r8.zd = bg.zf.zg(), r8.zO = Math.max(1, bP.h1.yg(r8.yb)), b6.ft.oV(), 8 === aC.k4 ? (bP.result.zC = 0, 1 !== aC.yr || 0 === bh.km
			.data[107].value || 100 <= (zi = bh.km.data[108].value) || (bP.result.zC = (1 + aC.xG) * (100 - zi) * 10)) : r8.zC = 100 * bP.result.zd * (1 + aC.xG))
	}
}

function yW() {
	this.yq = function() {
		if (2 === aC.yj) aC.yr = 2;
		else {
			if (8 === aC.k4) b8.ft.jB(0) || 0 === af.lc[0] ? aC.z3 = 1 : b8.ft.jB(1) || 0 === af.lc[1] ? aC.z3 = 0 : aC.z3 = +(af.gL[1] > af.gL[0]);
			else {
				if (aC.hN) {
					var kz = bf.zk();
					if (aC.ye = kz, be.k9[kz]) return void(aC.yr = +(be.eW[aC.eI] === kz))
				}
				aC.z3 = l3[0]
			}
			aC.yr = +(aC.z3 === aC.eI)
		}
	}
}

function d9() {
	this.id = 0, this.dk = 0, this.uE = null, this.uF = null, this.uG = null, this.uM = null, this.a0 = new zl, this.dU = function() {
		var self, dk;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (dk = Android.getVersion()) < 12 || (self.dk = dk, self.id = 1, self.uF = Android),
			function(self) {
				var dk;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.uG = mwIOSdataX, self.uM = window.webkit.messageHandlers.iosCommandA, dk = self
					.uG.version, self.dk = dk ? Number(dk) : 0)
			}(this),
			function(self) {
				var uE;
				if (0 === self.id) {
					try {
						if (!(uE = window.localStorage)) return;
						uE.setItem("tls7", "1"), uE.removeItem("tls7")
					} catch (error) {
						return
					}
					self.uE = uE
				}
			}(this)
	}
}

function zl() {
	this.zp = function() {
		bh.qy.uZ(), bh.qy.ua(), ay.x.close(0, 3255), 0 === z.id ? z.uE && z.uE.clear() : 1 === z.id ? z.uF.saveString(199, "") : 2 === z.id && z.uM.postMessage("clear")
	}, this.zq = function() {
		2 === z.id ? z.uM.postMessage("showConsentForm") : 1 === z.id && z.uF.setState(7)
	}, this.zr = function() {
		this.setState(14)
	}, this.qu = function() {
		return 1 === bh.km.u9(2)
	}, this.zs = function() {
		bh.km.u7(102, "")
	}, this.setState = function(zt) {
		1 === z.id && 5 <= z.dk && z.uF.setState(zt)
	}, this.a1 = function() {
		var zu;
		1 === z.id && 7 <= z.dk ? z.uF.setState(5) : ((zu = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = zu.toString())
	}, this.dZ = function() {
		1 !== z.id || z.dk < 17 || z.uF.saveString(23, document.documentElement.outerHTML)
	}, this.e5 = function() {
		0 !== z.id && (1 === z.id ? z.uF.prepareAd("1688441405") : 2 === z.id && (0 === z.dk ? z.uM.postMessage("prepare ad 1770251391") : z.uM.postMessage("loadAds 1770251391")))
	}, this.e8 = function(di) {
		return 0 !== z.id && 1 !== z.id && 2 === z.id && (0 === z.dk ? z.uM.postMessage("show ad " + di) : z.uM.postMessage("showAd"), !0)
	}, this.de = function() {
		2 === z.id && z.dk < 23 && s.t(4, 1, new u("App Update Required", "A new iOS app version with bug fixes has been published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + bI.zv + "' target='_blank'>" + bI
			.zv + "</a>", !0, [new v("⬅️ " + L(35), function() {
				s.t(0)
			}, b9.nJ)]))
	}
}

function dO() {
	function zy(e) {
		a09(e), s.t(4, 5, new u("🚀 New Game Update", "The game has been updated! Please reload the game." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new v("⬅️ " + L(35), function() {
				s.a0A()
			}), new v("🔄 Reload", function() {
				z.a0.a1()
			}, b9.n1)]))
	}

	function a08(e) {
		a09(e), s.t(4, 5, new u(L(36), {
			"3249": "No servers found",
			"4705": "Lobby not found",
			"4730": "Kicked from lobby"
		} [e] ?? a02(e), !0))
	}

	function a02(e) {
		var pD = " [" + e + "]";
		return 3249 === e || 1006 === e ? "No Internet / No Server Response" + pD : 4527 === e ? "Player already in lobby" + pD : 4530 === e ? "Lobby Timeout" + pD : 4528 === e ? "Lobby Kick: Another login detected." + pD : 4540 === e ?
			"You have been kicked." + pD : "Unknown error" + pD
	}

	function a09(e) {
		a01(e), s.x.y()
	}

	function a01(e) {
		var zt = aZ.a00();
		6 === zt ? ay.x.a0C(e) : bl.a04 ? (s.w(), bl.t7(), ay.x.close(ay.x.a05, 3256)) : 8 === zt && aC.a0D(!0)
	}
	this.zw = function(zx, e) {
		zx === 1 && __fx.customLobby.isActive() && aZ.a00() !== 6 && __fx.customLobby.setActive(false);
		if (8 === s.rl && 0 === zx)
			if (4211 === e) zy(e);
			else {
				if (4480 === e) return bh.qy.ub(), void s.t(4, 0, new u(L(38), L(39), !0));
				8 !== aZ.a00() && a01(), s.t(4, 0, new u(L(36), a02(e), !0))
			}
		else {
			var zt = aZ.a00();
			if (6 === zt) {
				if (4211 === e) return void zy(e);
				if (4215 !== e && 4516 !== e && 4527 !== e && 4533 !== e) return void aY.a03(zx)
			} else {
				if (!bl.a04) return 8 === zt ? void(zx !== ay.x.a06 || aC.k6 || 1 !== aC.ym || aC.gh || aM.a07(L(37, [e]))) : void 0;
				if (zx !== ay.x.a05) return
			}
			a08(e)
		}
	}, this.a0B = function(e) {
		8 === aZ.a00() ? aC.k6 || 1 !== aC.ym || aM.a07(L(37, [e])) : a08(e)
	}, this.r = function() {
		a09(3268)
	}
}

function cy() {
	var a0E, a0F, a0G = -15e3,
		a0H = !1;

	function gl(e) {
		a0b() || (a0H = !0, a0c(e, 1), ay.x.a0d(ay.x.a06), a0e(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY)))
	}

	function a0Q(e) {
		a0G = bd.e7, a0c(e, 1), ay.x.a0d(ay.x.a06), 0 < e.touches.length && (a0E = Math.floor(h.k * e.touches[0].clientX), a0F = Math.floor(h.k * e.touches[0].clientY), ar.a0Q(e) || a0e(a0E, a0F))
	}

	function a0e(ef, eh) {
		s.gl(ef, eh), 0 === aC.ym ? aZ.gl(ef, eh) : bA.a0f(ef, eh) || bc.gl(ef, eh) || aW.gl(ef, eh) || aK.a0g(ef, eh) || aO.gl(ef, eh) || 0 <= aL.gl(ef, eh) || au.gl(ef, eh) || bH.a0h(ef, eh) || aK.a0i(ef, eh)
	}

	function a0M(e) {
		a0b() || (a0H = !0, a0c(e, 1), a0j(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY)))
	}

	function a0R(e) {
		a0G = bd.e7, a0c(e, 1), 0 < e.touches.length && (a0E = Math.floor(h.k * e.touches[0].clientX), a0F = Math.floor(h.k * e.touches[0].clientY), ar.a0R(e) || a0j(a0E, a0F))
	}

	function a0j(ef, eh) {
		s.a0M(ef, eh), 0 === aC.ym ? aZ.a0M(ef, eh) : (bR.ge(ef, eh), bc.a0M(ef, eh) || (aL.a0M(ef, eh), aK.hF() ? aK.a0M(ef, eh) : aQ.gm ? aQ.a0M(ef) && (bd.dc = !0) : (aU.a0M(ef, eh), aR.m9 && aR.a0M(ef, eh) && (bd.dc = !0))))
	}

	function a0O(e) {
		a0b() || (a0c(e, 1), a0k(), 0 === aC.ym ? (aZ.click(-1024, -1024), aS.qW()) : (aU.a0l(-1024, -1024), aL.a0M(-1024, -1024), aQ.a0m(), aR.m9 = !1))
	}

	function a0N(e) {
		a0b() || (a0c(e, 1), a0n(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY), 2 === e.button), bH.a0K && (bH.a0K = !1, e.preventDefault()))
	}

	function click(e) {
		a0b() || a0c(e, 1)
	}

	function a0S(e) {
		a0G = bd.e7, a0c(e, 1), e && e.touches && 0 < e.touches.length && 0 !== aC.ym ? aR.m9 = !1 : ar.a0o() || (a0n(a0E, a0F, !1), bH.a0K && (bH.a0K = !1, e.preventDefault()))
	}

	function a0T(e) {
		a0G = bd.e7, a0c(e, 1), a0n(a0E, a0F, !1), bH.a0K && (bH.a0K = !1, e.preventDefault())
	}

	function a0U(e) {}

	function a0V(e) {}

	function a0W(e) {
		a0b() || a0c(e, 0)
	}

	function a0n(ef, eh, a0p) {
		a0k(), 0 === aC.ym ? aZ.click(ef, eh) : (aU.a0l(ef, eh), bc.a0l(), aQ.a0m(), aR.m9 = !1, aK.click(ef, eh, a0p) ? bd.dc = !0 : aL.a0N(ef, eh))
	}

	function a0k() {
		s.a0k()
	}

	function a0P(e) {
		var ef, eh, deltaY;
		a0b() || (a0c(e, 1), ay.x.a0d(ay.x.a06), ef = Math.floor(h.k * e.clientX), eh = Math.floor(h.k * e.clientY), deltaY = e.deltaY, 1 === e.deltaMode && (deltaY *= 16), s.a0P(ef, eh, deltaY), 0 === aC.ym ? aZ.a0P(ef, eh, deltaY) : aU.a0P(ef, eh,
			deltaY) || (aQ.a0q(ef, eh) ? aQ.a0P(deltaY) && (bd.dc = !0) : aR.a0P(ef, eh, deltaY)))
	}

	function a0X(e) {
		a0c(e, 0)
	}

	function a0c(e, id) {
		0 === id && s.hF() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== aZ.a00() && e.preventDefault()
	}

	function a0Y(e) {
		if (__fx.keybindHandler(e.key)) return;
		a0b() || 0 < h.rT || (e = e.code) && e.length && (bV.et(e, 18) ? ap.a0s(3) : bV.et(e, 22) ? ap.a0s(0) : bV.et(e, 20) ? ap.a0s(1) : bV.et(e, 24) ? ap.a0s(2) : bV.et(e, 10) ? aQ.a0t(31 / 32) : bV.et(e, 8) ? aQ.a0t(32 / 31) : bV.et(e, 6) ? aQ
			.a0t(7 / 8) : bV.et(e, 4) ? aQ.a0t(8 / 7) : bV.et(e, 14) ? 0 !== aC.ym && aR.a0P(Math.floor(h.i / 2), Math.floor(h.j / 2), -200) : bV.et(e, 16) ? 0 !== aC.ym && aR.a0P(Math.floor(h.i / 2), Math.floor(h.j / 2), 200) : bV.et(e, 0) ? aC
			.ym && bR.gf(!1) : bV.et(e, 2) ? aC.ym && bR.gf(!0) : bV.et(e, 26) ? aC.ym && bR.h9() : bV.et(e, 28) && aC.ym && bR.hE())
	}

	function a0Z(e) {
		if (!a0b() && !(0 < h.rT || bd.e7 < 400)) {
			var code = e.code;
			if (code && code.length && !("Enter" === code && s.a0u(1) || "Space" === code && s.a0u(0))) return bl.a04 ? bl.tD.a0u(code) ? void 0 : void("Escape" === code && bH.f1()) : void(8 !== aZ.a00() && aZ.a0u(e) ? bd.dc = !0 : "Escape" ===
				code ? bH.f1() : bV.et(code, 18) ? ap.a0v(3) : bV.et(code, 22) ? ap.a0v(0) : bV.et(code, 20) ? ap.a0v(1) : bV.et(code, 24) ? ap.a0v(2) : bV.et(code, 12) ? bA.a0w(!aC.m7) : "Space" === code && aC.ym && (aL.gi && aL.a0x(), aC
					.gh) && bA.a0y(!1))
		}
	}

	function a0a() {
		"hidden" === document.visibilityState ? 1 === aC.ym && (aC.gh ? bA.a0z() : !aC.k6 || aL.gi || aC.gt || aL.a0x()) : bd.dc = !0
	}

	function a0b() {
		return a0G + 15e3 > bd.e7
	}

	function resize() {
		h.a11()
	}
	this.a0I = 0, this.a0J = "", this.a0K = !1, this.dU = function() {
		a0L.addEventListener("mousedown", gl, {
			passive: !1
		}), a0L.addEventListener("mousemove", a0M, {
			passive: !1
		}), a0L.addEventListener("mouseup", a0N, {
			passive: !1
		}), a0L.addEventListener("click", click, {
			passive: !1
		}), a0L.addEventListener("mouseleave", a0O, {
			passive: !1
		}), a0L.addEventListener("wheel", a0P, {
			passive: !1
		}), a0L.addEventListener("touchstart", a0Q, {
			passive: !1
		}), a0L.addEventListener("touchmove", a0R, {
			passive: !1
		}), a0L.addEventListener("touchend", a0S, {
			passive: !1
		}), a0L.addEventListener("touchcancel", a0T, {
			passive: !1
		}), a0L.addEventListener("dragover", a0U), a0L.addEventListener("drop", a0V), a0L.addEventListener("dblclick", a0W), document.addEventListener("contextmenu", a0X), document.addEventListener("keydown", a0Y), document.addEventListener(
			"keyup", a0Z), document.addEventListener("visibilitychange", a0a), window.addEventListener("resize", resize)
	}, this.a0h = function(ef, eh) {
		return !!bA.gl(ef, eh) || !!(aU.gl(ef, eh) || aR.gl(ef, eh) || aQ.gl(ef, eh) || aM.gl(ef, eh))
	}, this.a10 = a0b, this.pz = function() {
		return !a0H || 0 < a0G
	}, this.f1 = function() {
		if (!s.hF()) return 8 === aZ.a00() ? aC.m7 ? void bA.a0w(!1) : bc.hF ? void bc.a0x() : void aL.a0x() : void(7 !== aZ.a00() && 6 === aZ.a00() && aY.a12());
		s.a0u(2)
	}
}

function bu() {
	this.pW = new a13, this.pf = new a14, this.ft = new a15, this.zR = new a16, this.x3 = new a17, this.a18 = new a19, this.canvas = new a1A, this.color = new a1B, this.a1C = new a1D, this.dU = function() {
		this.pW.uY()
	}
}

function a14() {
	this.vT = function(g) {
		g.fill(0)
	}, this.a1E = function(g) {
		for (var eY = g.length, aA = 0; aA < eY; aA++) g[aA] = []
	}, this.a1F = function(hd, a1G) {
		for (var he = bM.f8, aA = 0; aA < 3; aA++) he[aA] = a1G * hd[aA];
		return he
	}, this.a1H = function(hd, he, a1I) {
		for (var hh = 0, aA = 0; aA < 3; aA++) hh += Math.abs(hd[aA] - he[aA]);
		return a1I <= hh
	}, this.a1J = function(hd, a1K) {
		for (var aA = 0; aA < 3; aA++) hd[aA] = bJ.p4(hd[aA] + a1K, 0, 255);
		return hd
	}, this.a1L = function(g, s6, s7) {
		s7 = s7 || g.length - 1;
		for (var a1M = 0, aA = s6 = s6 || 0; aA <= s7; aA++) a1M += g[aA];
		return a1M
	}, this.a1N = function(g, a1O) {
		for (var aA, a1P, eY = g.length, a1Q = [], er = eY - 1; 0 <= er; er--) {
			for (aA = a1P = 0; aA < eY; aA++) a1O(g[aA]) < a1O(g[a1P]) && (a1P = aA);
			eY--, a1Q.push(g[a1P]), g[a1P] = g[eY], g.pop()
		}
		return a1Q
	}, this.min = function(g) {
		var aA, f0, eY = g.length;
		if (0 === eY) return 0;
		for (f0 = g[0], aA = 1; aA < eY; aA++) f0 = Math.min(f0, g[aA]);
		return f0
	}, this.max = function(g) {
		var eY = g.length;
		if (0 === eY) return 0;
		for (var f0 = g[0], aA = 1; aA < eY; aA++) f0 = Math.max(f0, g[aA]);
		return f0
	}, this.a1R = function(g, f0) {
		for (var eY = g.length, g0 = 0, aA = 0; aA < eY; aA++) g0 += g[aA] > f0;
		return g0
	}, this.a1S = function(a1T, a1U, min) {
		for (var eY = a1U[0], aA = eY - 1; 0 <= aA; aA--) a1T[aA] < min && (a1T[aA] = a1T[--eY]);
		a1U[0] = eY
	}, this.a1V = function(g, eY, value) {
		for (var aA = 0; aA < eY; aA++) g[aA] -= value
	}, this.a1W = function(g) {
		for (var eY = g.length, aA = 0; aA < eY; aA++)
			if ("string" != typeof g[aA]) return !1;
		return !0
	}, this.a1X = function(pD, g, a1Y) {
		g.fill(0);
		for (var sA = pD.split(","), eY = Math.min(sA.length, g.length), aA = 0; aA < eY; aA++) g[aA] = Math.min(parseInt(sA[aA]), a1Y)
	}, this.a1Z = function(pD, g, qT) {
		g.fill("");
		for (var sA = pD.split('"'), eY = Math.min(sA.length, 2 * g.length), hL = 0, aA = 1; aA < eY; aA += 2) g[hL++] = sA[aA].slice(0, qT)
	}, this.a1a = function(g, g0) {
		if (0 === g0) g.fill(0);
		else {
			var a1M = this.a1L(g),
				eY = g.length;
			if (0 === a1M) g.fill(bJ.dj(g0, eY));
			else
				for (var aA = 0; aA < eY; aA++) g[aA] = bJ.dj(g0 * g[aA], a1M);
			if (0 === (a1M = this.a1L(g))) g[1] = g0;
			else
				for (var hL = 0; a1M++ < g0;) g[hL = (hL + 1) % eY] && g[hL]++
		}
	}, this.a1b = function(g) {
		if (!g) return 0;
		var eY = g.length;
		if (0 === eY) return 0;
		for (var f0 = g[eY - 1], aA = eY - 2; 0 <= aA; aA--)
			if (g[aA] !== f0) return aA + 2;
		return 1
	}, this.a1c = function(g) {
		for (var a1M = 0, aA = 0; aA < g.length; aA++) a1M += g[aA].length;
		return a1M
	}, this.a1d = function(a1e) {
		for (var g = [], aA = 0; aA < a1e.length; aA++) g = g.concat(a1e[aA]);
		return g
	}
}

function a1A() {
	this.xZ = function(a1f, dx, a1g) {
		var hP = a1f.height,
			a1h = b8.pW.vJ(hP, hP),
			hV = b8.pW.getContext(a1h);
		return function(i, hV, a1g) {
			hV.fillStyle = a1g, hV.beginPath(), hV.arc(i / 2, i / 2, .47 * i, 0, 2 * Math.PI), hV.fill()
		}(hP, hV, a1g), hV.drawImage(a1f, -dx * hP, 0), a1h
	}, this.a1j = function(a1k) {
		var hV, hS, hP = a1k.height;
		return a1k.width === hP && (hS = (hV = b8.pW.getContext(a1k, !0)).getImageData(0, 0, hP, hP), b8.a18.a1l(hS.data, hP, hP, .9), hV.putImageData(hS, 0, 0)), a1k
	}
}

function a1B() {
	this.a1m = function(f0) {
		return [f0 >> 12 & 63, f0 >> 6 & 63, 63 & f0]
	}, this.a1n = function(f0) {
		for (var g = this.a1m(f0), aA = 0; aA < 3; aA++) g[aA] = ~~(4.05 * g[aA]);
		return g
	}, this.a1o = function(f0) {
		f0 = this.a1n(f0);
		return b8.color.mW(f0[0], f0[1], f0[2])
	}, this.a1p = function(g) {
		for (var aA = 0; aA < 3; aA++) g[aA] = ~~(g[aA] / 4.04);
		return (g[0] << 12) + (g[1] << 6) + g[2]
	}, this.mW = function(dw, sA, es) {
		return "rgb(" + dw + "," + sA + "," + es + ")"
	}, this.mY = function(dw, sA, es, er) {
		return "rgba(" + dw + "," + sA + "," + es + "," + er.toFixed(3) + ")"
	}, this.q1 = function(et) {
		for (var g = et.split("(")[1].split(","), f7 = bM.f7, aA = 0; aA < 3; aA++) f7[aA] = parseInt(g[aA]);
		return 4 === g.length ? f7[3] = 255 * parseFloat(g[3].slice(0, -1)) : f7[3] = 255, f7
	}, this.q2 = function(a1q, eb) {
		for (var g = a1q.slice(a1q.indexOf("(") + 1, a1q.indexOf(")")).split(","), f7 = bM.f7, aA = 0; aA < 3; aA++) f7[aA] = bJ.p4(parseInt(g[aA].trim(), 10) + eb, 0, 255);
		return 3 === g.length ? this.mW(f7[0], f7[1], f7[2]) : (a1q = parseFloat(g[3].trim()), this.mY(f7[0], f7[1], f7[2], a1q = 0 === a1q ? .3 : a1q))
	}, this.a1r = function(g) {
		for (var pD = "#", aA = 0; aA < 3; aA++) {
			var dw = g[aA].toString(16);
			pD += 1 === dw.length ? "0" + dw : dw
		}
		return pD
	}, this.a1s = function(pD) {
		var dw, sA;
		return pD.length < 7 ? b9.mV : (dw = parseInt(pD.slice(1, 3), 16), sA = parseInt(pD.slice(3, 5), 16), pD = parseInt(pD.slice(5, 7), 16), this.mW(dw, sA, pD))
	}
}

function a17() {
	this.a1t = function(pD, font, maxWidth) {
		if (font && (te.font = font), te.measureText(pD).width <= maxWidth) return pD;
		for (var aA = pD.length - 1; 1 <= aA; aA--)
			if (pD = pD.substring(0, aA), te.measureText(pD + "...").width <= maxWidth) return pD + "...";
		return "..."
	}
}

function a1D() {
	var a1v = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.a1w = function(e7) {
		var a1y, pD = new Date(e7.getTime() - 6e4 * e7.getTimezoneOffset()).toUTCString();
		return pD.length < 12 || (pD = pD.substring(5, pD.length), 0 === (e7 = e7.getTimezoneOffset())) ? pD : (a1y = (e7 < 0 ? "+" : "-") + bJ.dj(Math.abs(e7), 60), 0 == (e7 = Math.abs(e7) % 60) ? pD + a1y : pD + a1y + ":" + (e7 < 10 ? "0" :
			"") + e7)
	}, this.a1z = function(e7) {
		var pD = e7.toUTCString();
		return pD.length < 12 ? pD : function(e7) {
			return a1v[e7.getUTCDay()]
		}(e7) + ", " + pD.substring(5, pD.length - 4)
	}
}

function a13() {
	var a21 = null;
	this.xq = 0, this.uY = function() {
		var f0 = bh.km.data[5].value;
		a21 = "px " + f0, "Trebuchet MS" !== f0 && (a21 += ", Trebuchet MS"), this.xq = hO(32, 32, ["a", "b", "m"], 200, a21)
	}, this.vJ = function(i, j) {
		var et = document.createElement("canvas");
		return et.width = i, et.height = j, et
	}, this.getContext = function(canvas, alpha) {
		return canvas.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(x3, i, j) {
		return x3.getImageData(0, 0, i, j)
	}, this.rL = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + a21 : 1 === type ? "bold " + size + a21 : 2 === type ? "lighter " + size + a21 : 3 === type ? "italic " + size + a21 : 4 === type ? "oblique " + size + a21 : 5 === type ? "small-caps " +
			size + a21 : "small-caps bold " + size + a21
	}, this.textAlign = function(hV, id) {
		hV.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(hV, id) {
		hV.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.ph = function(e, code, color) {
		color = this.pg(ba.rN) + " solid " + (color || b9.me);
		5 === (code = code || 5) ? e.style.border = color : 4 === code ? e.style.borderLeft = color : 2 === code ? e.style.borderBottom = color : 6 === code ? e.style.borderRight = color : e.style.borderTop = color
	}, this.sC = function(e, ef, eh, i, j) {
		e = e.style;
		e.left = this.a22(ef), e.top = this.a22(eh), e.width = this.a22(i), e.height = this.a22(j)
	}, this.pX = function(f0) {
		return 1 + f0 * z.a0.qu()
	}, this.qp = function(mG, g6) {
		return mG * this.pX(void 0 === g6 ? .5 : g6) * h.pY / h.k
	}, this.sB = function(mG, g6) {
		return mG * this.pX(void 0 === g6 ? .5 : g6) * h.pY
	}, this.rr = function(mG, g6, a23) {
		return this.pX(g6) * Math.min(mG * h.pY, a23 * h.i) / h.k
	}, this.pg = function(f0) {
		return f0.toFixed(1) + "px"
	}, this.a22 = function(f0) {
		return this.a25(f0).toFixed(1) + "px"
	}, this.a25 = function(f0) {
		return f0 / h.k
	}, this.a26 = function(rb, a27) {
		for (var pD = "<ul>", eY = rb.length, aA = 0; aA < eY; aA++) pD += "<li>" + rb[aA] + ": <a href='" + a27[aA] + "' target='_blank'>" + a27[aA] + "</a></li>";
		return pD += "</ul>"
	}, this.a28 = function(a29) {
		return "<a href='" + a29 + "' target='_blank'>" + a29 + "</a>"
	}, this.a2A = function(e) {
		navigator.clipboard && navigator.clipboard.writeText(e.value)
	}, this.a2B = function(e) {
		var di = e.textContent;
		b8.zR.a2C(di, "✔") || (1 === di.length ? e.textContent = "✔" : e.textContent = di + " ✔", setTimeout(function() {
			e.textContent = di
		}, 500))
	}, this.measureText = function(pD) {
		return te.measureText(pD).width
	}, this.s2 = function(a2D) {
		a2D.style.overflowX = "auto", a2D.style.overflowY = "hidden", a2D.style.whiteSpace = "nowrap", a2D.addEventListener("wheel", function(e) {
			Math.abs(e.deltaY) < Math.abs(e.deltaX) || (this.scrollLeft += e.deltaY, this.sE = this.scrollLeft, e.preventDefault())
		}), a2D.addEventListener("scroll", function() {
			this.sE = this.scrollLeft
		})
	}
}

function a15() {
	this.gj = function(zt) {
		return 0 === zt ? 1 === aC.ym && aC.gt : 1 === zt ? 1 === aC.ym && !aC.gt : 2 === aC.ym
	}, this.gk = function(player) {
		return 0 !== af.lc[player] && 2 !== af.a2E[player]
	}, this.a2F = function(player) {
		return player === aC.eI && 2 !== af.a2E[player]
	}, this.lB = function() {
		return ak.jo < 2 ? 0 : aC.hN ? 1 < bf.a2G() : af.gL[l3[1]]
	}, this.a2H = function() {
		var jo = ak.jo;
		if (0 !== jo) {
			if (!aC.hN) return !this.jB(l3[0]);
			for (var eW = be.eW, kz = bf.l0(), jp = ak.jp, aA = jo - 1; 0 <= aA; aA--) {
				var g5 = jp[aA];
				if (eW[g5] === kz && !this.jB(g5)) return 1
			}
		}
		return 0
	}, this.a2I = function(player) {
		return player === aC.eI
	}, this.jB = function(player) {
		return player >= aC.jn || 2 === af.a2E[player]
	}, this.kZ = function(player) {
		return 0 !== af.lc[player]
	}, this.yc = function(player) {
		return player < aC.jn
	}, this.op = function(a2J, a2K) {
		return a2J !== a2K
	}, this.fw = function(player, f0) {
		var min;
		return f0 = this.a2L(player, f0), af.gZ[player] += f0, af.a2M[player] && (min = Math.min(af.a2M[player], af.gZ[player]), af.a2M[player] -= min, af.gZ[player] -= min), f0
	}, this.a2L = function(player, f0) {
		var a2N = af.gZ[player];
		return f0 = Math.min(f0, af.gL[player] * aC.a2O - a2N), f0 = Math.min(f0, aC.a2P - a2N), Math.max(f0, 0)
	}, this.oq = function(player, i7, a2Q, a2R) {
		var a2N = af.gZ[player],
			i7 = bJ.dj(a2N * (i7 + 1), 1024),
			a2Q = bJ.dj(a2Q * a2N, 1024),
			i7 = Math.min(i7, a2N - a2Q);
		return 10 === aC.k4 && (i7 = b2.a2T(player, i7)), bM.f5[0] = i7, bM.f5[1] = a2Q, a2R <= i7
	}, this.oH = function(player, o0, nz) {
		var player = af.gZ[player],
			a2S = bJ.dj(64 * player, 1024),
			player = (o0 = Math.min(o0, player - a2S), this.a2V(o0));
		return a2S += player, o0 = this.a2L(nz, o0 -= player), bM.f5[0] = o0, bM.f5[1] = a2S, 1 <= o0
	}, this.oJ = function(o0, nz) {
		var a2U = this.a2V(o0);
		return o0 = this.a2L(nz, o0 -= a2U), bM.f5[0] = o0, bM.f5[1] = a2U, 1 <= o0
	}, this.i6 = function(player, a2W) {
		return bJ.dj(af.gZ[player] * (a2W + 1), 1024)
	}, this.a2V = function(a2X) {
		return bJ.dj(Math.max(2142 - bd.jk(), 0) * a2X, 2142)
	}, this.p2 = function(player, a2Q) {
		a2Q = bJ.dj(a2Q * af.gZ[player], 1024);
		bM.f5[1] = a2Q, af.gZ[player] -= a2Q
	}, this.fu = function(player, a2Y) {
		var fH, fJ, es = af.gZ[player];
		return a2Y <= es ? af.gZ[player] -= a2Y : (af.gZ[player] = 0, fJ = af.a2M[player] + (fH = 5 * ((es = a2Y - es) >> 2)), bb.fx(player, fH - es, 12), fJ <= aC.a2Z ? af.a2M[player] = fJ : (af.a2M[player] = aC.a2Z, bb.fx(player, fJ - aC.a2Z,
			18))), a2Y
	}, this.ko = function(player, i7) {
		var gZ = af.gZ,
			a2N = gZ[player],
			i7 = bJ.dj(a2N * (i7 + 1), 1024),
			a2S = Math.max(bJ.dj(a2N, 10), 1e3);
		return (i7 = Math.min(i7, a2N - a2S)) < 0 ? (gZ[player] = 0, a2S = Math.min(1e3, a2N + aC.a2Z - af.a2M[player]), bM.f5[1] = a2S, af.a2M[player] += a2S - a2N, 0) : (bM.f5[1] = a2S, 10 === aC.k4 && (i7 = b2.a2T(player, i7)), gZ[player] -=
			a2S + i7, i7)
	}, this.ot = function(player) {
		af.gZ[player] -= bM.f5[0] + bM.f5[1]
	}, this.or = function(player, iy) {
		return (iy = Math.min(iy, aC.eV)) < aC.eV && 0 === af.lc[iy] && (iy = aC.eV), (bM.eU[0] = iy) === aC.eV || eR(player, iy)
	}, this.ov = function(player, nz) {
		return 0 !== af.lc[nz] && !eR(player, nz)
	}, this.a2a = function(player, a2b) {
		for (var g5, eY = ak.jo, zi = 0, a2c = l3, aA = 0; aA < eY; aA++)
			if (g5 = a2c[aA], !this.jB(g5)) {
				if (player === g5) return !0;
				if (++zi > a2b) return !1
			} return !1
	}, this.kw = function(g5) {
		var a2d = aC.hN ? bf.a2e() : af.gL[l3[0]];
		return a2d >= bJ.dj(g5 * aC.jX, 100)
	}, this.a2f = function(f0, min, max) {
		return Math.floor(bJ.p4(isNaN(f0) ? 0 : Number(f0), min, max))
	}
}

function a19() {
	this.a2g = function(canvas, a2h, a2i) {
		var i = canvas.width,
			j = canvas.height,
			et = b8.pW.vJ(i, j),
			hV = b8.pW.getContext(et, !0),
			canvas = (hV.drawImage(canvas, 0, 0), hV.getImageData(0, 0, i, j));
		return a2h(canvas.data, i, j, a2i), hV.putImageData(canvas, 0, 0), et
	}, this.a2j = function(vU, i, j) {
		for (var ef = i - 1; 0 <= ef; ef--)
			for (var eh = j - 1; 0 <= eh; eh--) {
				var aA = 4 * (ef + eh * i);
				vU[3 + aA] = vU[aA], vU[aA] = vU[1 + aA] = vU[2 + aA] = 255
			}
	}, this.a2k = function(vU, i, j) {
		for (var ef = i - 1; 0 <= ef; ef--)
			for (var eh = j - 1; 0 <= eh; eh--) {
				var aA = 4 * (ef + eh * i);
				vU[1 + aA] > vU[2 + aA] + 10 && (vU[3 + aA] = vU[aA], vU[1 + aA] = vU[2 + aA])
			}
	}, this.a2l = function(vU, i, j, a2i) {
		for (var gap = Math.floor(Math.min(i, j) * a2i), ef = 0; ef < i; ef++)
			for (var aA, eh = 0; eh < j; eh++)(ef < gap || eh < gap || i - gap <= ef || j - gap <= eh) && (vU[3 + (aA = 4 * (ef + eh * i))] = 255 - 255 * (vU[1 + aA] - vU[aA]) / (255 - vU[aA]))
	}, this.a2m = function(vU, i, j, a2i) {
		for (var ef = i - 1; 0 <= ef; ef--)
			for (var eh = j - 1; 0 <= eh; eh--) {
				var aA = 4 * (ef + eh * i);
				vU[aA] = a2i[0], vU[1 + aA] = a2i[1], vU[2 + aA] = a2i[2]
			}
	}, this.a2n = function(vU, i, j, a2i) {
		for (var gap = Math.floor(i * a2i), ef = 0; ef < i; ef++)
			for (var aA, eh = 0; eh < j; eh++)(ef < gap || eh < gap || i - gap <= ef || j - gap <= eh) && (vU[aA = 4 * (ef + eh * i)] = vU[1 + aA] = vU[2 + aA] = 0)
	}, this.a2o = function(vU, i, j) {
		for (var eh, aA, ef = i - 1; 0 <= ef; ef--)
			for (eh = j - 1; 0 <= eh; eh--) 200 < vU[1 + (aA = 4 * (ef + eh * i))] && vU[1 + aA] - 20 > vU[aA] && vU[1 + aA] - 20 > vU[2 + aA] ? vU[aA] + vU[2 + aA] < 40 ? vU[3 + aA] = 0 : (vU[3 + aA] = vU[aA], vU[aA] = 255, vU[1 + aA] = 255, vU[
				2 + aA] = 255) : vU[aA] < 50 && vU[1 + aA] < 50 && vU[2 + aA] < 50 && (vU[aA] + vU[1 + aA] + vU[2 + aA] < 50 ? vU[3 + aA] = 180 : vU[3 + aA] = 180 + Math.floor(75 * (vU[aA] + vU[1 + aA] + vU[2 + aA] - 50) / 100))
	}, this.a2p = function(vU, i, j) {
		for (var eh, aA, ef = i - 1; 0 <= ef; ef--)
			for (eh = j - 1; 0 <= eh; eh--) vU[1 + (aA = 4 * (ef + eh * i))] > vU[aA] + 20 && vU[1 + aA] > vU[2 + aA] + 20 && vU[aA] + vU[2] < 40 && (vU[3 + aA] = 255 - vU[1 + aA], vU[aA] = vU[1 + aA] = vU[2 + aA] = vU[aA])
	}, this.a1l = function(vU, i, j, a2i) {
		for (var dw = i >> 1, ef = 0; ef < i; ef++)
			for (var eh = 0; eh < j; eh++) Math.sqrt((ef - dw) * (ef - dw) + (eh - dw) * (eh - dw)) > a2i * dw && (vU[4 * (ef + eh * i) + 3] = 0)
	}
}

function a16() {
	this.y4 = function(f0) {
		var aA, a2q, a2r, a2s, a2t;
		if (f0 < 0) return "-" + this.y4(Math.abs(f0));
		if (f0 < 1e3) return f0.toString();
		for (a2q = Math.floor(Math.log(f0 + .5) / Math.log(10)) + 1, a2r = Math.floor((a2q - 1) / 3), a2t = (a2s = f0.toString()).substring(a2q - 3, a2q), aA = 1; aA < a2r; aA++) a2t = a2s.substring(a2q - 3 * (aA + 1), a2q - 3 * aA) + " " + a2t;
		return a2s.substring(0, a2q - 3 * a2r) + " " + a2t
	}, this.a2u = function(g5, a2q) {
		return g5.toFixed(a2q) + "%"
	}, this.a2v = function(f0, a2w) {
		return f0.toFixed(bJ.p4(Math.floor((void 0 === a2w ? 3 : a2w) - Math.log10(Math.max(f0, 1))), 0, 8))
	}, this.a2x = function(f0, mG, a2q) {
		return (f0 * mG).toFixed(a2q)
	}, this.zW = function(username) {
		var ec, eN = username.indexOf("[");
		return !(eN < 0) && 1 < (ec = username.indexOf("]")) - eN && ec - eN <= 8 ? username.substring(eN + 1, ec).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.zW;
	this.a2y = function(pD) {
		for (var er = Math.floor(.5 * pD.length + .5), mM = Math.floor(.5 * (er - 1)), aA = 0; aA < mM; aA++)
			for (var es = -1; es < 2; es += 2) {
				var et = er + es * aA;
				if (" " === pD[et]) return [this.zS(pD.substring(0, et)), this.a2z(pD.substring(et))]
			}
		return [pD.substring(0, er), pD.substring(er)]
	}, this.a2z = function(pD) {
		for (var eY = pD.length, aA = 0; aA < eY; aA++)
			if (" " !== pD[aA]) return pD.substring(aA);
		return pD
	}, this.zS = function(pD) {
		for (var aA = pD.length - 1; 0 <= aA; aA--)
			if (" " !== pD[aA]) return pD.substring(0, aA + 1);
		return pD
	}, this.a30 = function(pD, a31) {
		return pD.split("(")[0] + "(🧈 " + a31.toFixed(2) + ")"
	}, this.startsWith = function(pD, a32) {
		return pD.substring(0, a32.length) === a32
	}, this.a2C = function(pD, a32) {
		var eY = pD.length;
		return pD.substring(eY - a32.length, eY) === a32
	}, this.a33 = function(g, a34, a35) {
		var pD = "",
			eY = g.length - 1;
		a35 = a35 || "";
		for (var aA = 0; aA < eY; aA++) pD += a35 + g[aA] + a35 + ",", (aA + 1) % a34 == 0 && (pD += "\n");
		return pD += a35 + g[eY] + a35
	}, this.a36 = function(pD, hd, he) {
		return pD.replace(new RegExp(hd, "g"), he)
	}
}

function a37() {
	this.iv = function(player, eK) {
		aH.wp(player, bK.eg(eK), bK.ei(eK)) && (bd.dc = !0), aC.k6 && this.ih()
	}, this.ih = function() {
		aC.gt = !1;
		for (var aA = 0; aA < aC.jn; aA++) 0 !== af.lc[aA] && 0 === af.gL[aA] && aH.wv(aA);
		0 !== af.lc[aC.eI] ? (bb.lY[7] = af.gL[aC.eI], bb.lY[8] = af.gZ[aC.eI], aQ.a38(), aV.a39(), aC.gh || aG.lx(af.iM[aC.eI] - 5, af.iO[aC.eI] - 5, af.iN[aC.eI] + 5, af.iP[aC.eI] + 5), at.dU()) : aW.show(!1, !1, !1, !0), aM.a3A(18), ae.a3B(),
			ae.lO(!0), bN.x.a3C(), aK.qn(), aC.oo = null, bZ.a3D = !0, bZ.a3E(), aC.k6 && z.a0.setState(1)
	}
}

function bw() {
	this.eV = 512, this.a2P = 15e8, this.a3F = 1e9, this.a2Z = 5e4, this.a3G = 512, this.fr = 2, this.eI = 0, this.jn = 0, this.yp = 0, this.k8 = 0, this.yo = 0, this.w0 = 512, this.w5 = 512, this.a2O = 150, this.k6 = !0, this.gh = 0, this.ym = 0,
		this.jX = 0, this.m7 = !1, this.gt = 0, this.a3H = 0, this.hN = !1, this.w7 = 0, this.w8 = 0, this.k4 = 0, this.xG = 0, this.oo = null, this.z4 = new x9, this.a3I = 30, this.yj = 0, this.yr = 0, this.z3 = 0, this.ye = 0, this.data = new a3J,
		this.a3K = new a3L, this.a3M = 0, this.a3N = function() {
			bP.dU(), this.yp = this.jn = this.data.humanCount, this.k6 = 1 === this.yp && !__fx.customLobby.isActive(), this.m7 = !1, this.gh = this.data.isReplay, this.k4 = 0 === this.data.gameMode ? [7, 10, 8][this.data.battleRoyaleMode] : this
				.data.isZombieMode ? 9 : this.data.numberTeams - 2, this.xG = this.data.isContest, this.hN = this.k4 < 7 || 9 === this.k4, this.k4 = 10 === this.k4 && this.k6 ? 7 : this.k4, this.k4 = 8 === this.k4 && 2 !== this.jn ? 7 : this.k4, ax
				.dU(), this.w7 = this.data.numberTeams, this.data.teamPlayerCount ? this.w8 = +(0 < this.data.teamPlayerCount[0]) : (this.w8 = 0, this.hN && this.k6 && (this.data.teamPlayerCount = new Uint16Array(9), this.data.teamPlayerCount.fill(1,
					1, this.w7 + 1), aC.a3K.a3O())), this.a3I = this.jn <= 2 ? 30 : this.jn <= 50 ? 40 : 50, this.a3H = this.gt = __fx.customLobby.isActive() ? __fx.customLobby.gameInfo.spawnSelection : this.data.selectableSpawn, this.oo = this.gt ?
				new a37 : null, this.w0 = __fx.customLobby.isActive() ? Math.max(Math.min(__fx.customLobby.gameInfo.botCount, this.data.playerCount), this.jn) : 1 === l.dh ? this.w0 = this.jn : this.w0 = this.data.playerCount,
				this.w5 = this.w0, this.k8 = this.w0 - this.jn, this.yo = 0, this.eI = this.data.selectedPlayer, this.yj = 0, this.yr = 0, this.z3 = 0, this.ye = 0, aw.a3P(this.data.spawningSeed), ad.dU(), af.dU(), ah.a3Q(), b6.ns.oZ = [], be.dU(),
				this.ym = 1,
				__fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), bb.dU(), a3R(), ab.dV(), an.a3S(), bZ.dU(), ab.dU(), aq.dU(), bK.dU(), bL.dU(), am.dU(), bT.a3T(), aD.dU(),
				ah.a6(), aH.dU(), aI.dU(), ak.a3U(), b7.dU(), bf.dU(), bN.dU(), bc.dU(), a3V.putImageData(a3W, 0, 0), aU.dU(), aR.dU(), aQ.dU(), bA.dU(), au.dU(), aT.dU(), aV.dU(), aL.dU(), aP.dU(), aM.dU(), aO.dU(), aK.dU(), aW.dU(), aE.dU(), aF
				.dU(), fZ(), ac.dU(), ae.dU(), b2.dU(), b3.dU(), az.dU(), this.z4.dU(), bd.a3T(), aG.lw(), 0 === af.lc[aC.eI] && aW.show(!1, !0), ae.lO(!0), at.dU(), bd.dc = !0, this.gh || this.k6 && this.gt || z.a0.setState(1), this.a3M = 0
		}, this.a0D = function(a3Y) {
			aC.gh || b7.om.a3Z.length || (b7.om.a3Z = b7.a3a.yF()),
				__fx.customLobby.isActive() === false && ay.x.a3b(),
				this.ym = 0, bd.a3c(), z.a0.setState(0), aZ.setState(0), a3Y || bS.e3.show();
			if (__fx.customLobby.isActive()) __fx.customLobby.rejoinLobby();
			else 2 === this.a3M ? s.x.a3d() : 1 === this.a3M ? s.t(19) : s.t(5, 5)
		}, this.a3e = function() {
			return this.gh ? aL.gi || !bA.a3f : this.k6 && (aL.gi || this.gt)
		}, this.a3g = function() {
			return 1 === this.ym && !this.gt
		}
}

function a3J() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.elo = null, this.colorsType = 0, this.colorsPersonalized = 1,
		this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData = null, this.spawningType = 0,
		this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this.aIncomeData = null, this
		.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null
}

function a3L() {
	this.a3O = function() {
		var a3h = aC.data;
		b8.pf.a1a(a3h.teamPlayerCount, a3h.playerCount), a3h.numberTeams = b8.pf.a1R(a3h.teamPlayerCount, 0), a3h.teamPlayerCount[0] && a3h.teamPlayerCount[7] && (a3h.teamPlayerCount[7] = 0, this.a3O())
	}, this.a3i = function() {
		var a3h = aC.data;
		a3h.mapType < 2 ? bQ.a6(bQ.a3j(a3h), a3h.mapSeed) : bQ.a3k(a3h.canvas)
	}, this.a3l = function() {
		var a3h = aC.data;
		a3h.colorsData || (a3h.colorsData = new Uint32Array(1)), a3h.selectableColor && (a3h.colorsData[0] = bh.x.uX()), a3h.selectableName && (a3h.playerNamesData || (a3h.playerNamesData = new Array(1)), a3h.playerNamesData[0] = bh.km.data[122]
			.value)
	}, this.a3m = function() {
		aC.data = new a3J, aC.data.aIncomeType = 2, aC.data.aIncomeData = new Uint8Array(aC.eV), aC.data.aIncomeData[0] = 64
	}
}

function dN() {
	this.xn = 0, this.gap = 0, this.rN = 0, this.pd = 0, this.dU = function() {
		this.resize()
	}, this.resize = function() {
		this.xn = .0022 * b8.pW.pX(.5) * h.pY, this.rN = this.xn / h.k, this.gap = Math.max(Math.floor((z.a0.qu() ? .0114 : .01296) * h.pY), 2), this.pd = this.gap / h.k
	}
}

function dM() {
	this.a3n = function() {
		return z.a0.qu() ? 2 : 1
	}
}

function c7() {
	var q6, ef, eh, a3o, a3p, a3q, e7, player, a3r, gap, zoom, oS, a3s;

	function a42(player) {
		for (var aA = oS.length - 1; 0 <= aA; aA--)
			if (oS[aA] === player) return 1
	}

	function a40(a3x) {
		var aA, eY;
		if (-1 !== a3x)
			for (eY = q6.length, aA = 0; aA < eY; aA++)
				if (q6[aA].hF && q6[aA].ef + 1 === a3x % 4 && q6[aA].eh + 1 === a3x >> 2) return aA;
		return -1
	}

	function a3y(kr, ks) {
		var sA = gap / 2;
		return kr < ef - a3o - 3 * sA || ef + 3 * a3o + 5 * sA < kr || ks < eh - a3o - 3 * sA || eh + 2 * a3o + 3 * sA < ks ? -1 : 4 * (ks < eh - sA ? 0 : ks < eh + a3o + sA ? 1 : 2) + (kr < ef - sA ? 0 : kr < ef + a3o + sA ? 1 : kr < ef + 2 * a3o +
			3 * sA ? 2 : 3)
	}
	this.a3t = function() {
		var aA, es, a3w = [b9.n4, b9.nI, b9.mc, b9.nc, b9.nV];
		for (q6 = new Array(9), aA = 0; aA < 9; aA++) q6[aA] = {
			id: aA,
			hF: !1,
			kX: 0,
			canvas: [],
			ef: 0,
			eh: 0
		};
		for (q6[0].colors = [0, 1, 2, 3], q6[0].ef = 0, q6[0].eh = 0, q6[1].colors = [0, 1, 4], q6[1].ef = 1, q6[1].eh = 0, q6[2].colors = [0, 2], q6[2].ef = -1, q6[2].eh = 0, q6[3].colors = [0], q6[3].ef = 0, q6[3].eh = 0, q6[4].colors = [0, 2],
			q6[4].ef = 1, q6[4].eh = 1, q6[5].colors = [3], q6[5].ef = 0, q6[5].eh = -1, q6[6].id = 20, q6[6].colors = [0], q6[6].ef = 1, q6[6].eh = -1, q6[7].id = 21, q6[7].colors = [0], q6[7].ef = 0, q6[7].eh = 1, q6[8].id = 16, q6[8]
			.colors = [0], q6[8].ef = 0, q6[8].eh = 0, aA = 0; aA < 9; aA++)
			for (es = 0; es < q6[aA].colors.length; es++) q6[aA].canvas.push(function(id, a1g) {
				if (id < 20) return b8.canvas.xZ(aa.get(3), id, a1g);
				var a1g = aa.get(3).height,
					a1h = b8.pW.vJ(a1g, a1g),
					hV = b8.pW.getContext(a1h);
				20 === id ? hV.drawImage(aa.get(18), 0, 0) : 21 === id && ai.vU.xo(ai.qm.xd + ai.qm.xu, hV, 0, 0, a1g);
				return a1h
			}(q6[aA].id, a3w[q6[aA].colors[es]]))
	}, this.a3v = function() {
		return q6
	}, this.dU = function() {
		oS = [], ef = eh = e7 = 0, a3p = a3q = -1e3, this.resize()
	}, this.resize = function() {
		a3o = Math.floor((z.a0.qu() ? .075 : .0468) * h.pY), zoom = a3o / aa.get(3).height, gap = Math.floor(a3o / 3)
	}, this.a0g = function(kr, ks) {
		return !!this.hF() && (bd.dc = !0, !!ai.vU.gl(kr, ks, player) || (kr = function(kr, ks) {
			a3q = a3p = -1e3;
			var a3z = a40(a3y(kr, ks));
			if (-1 === a3z) return 0;
			if (1 !== q6[a3z].colors[q6[a3z].kX])
				if (5 === a3z) {
					if (! function() {
							var di = performance.now();
							a3s + 4e3 < di && (oS = []);
							a3s = di
						}(), a42(player)) return 1;
					oS.push(player), 16 < oS.length && oS.shift()
				} else if (6 === a3z) {
				for (var aA = oS.length - 1; 0 <= aA; aA--) 0 === af.lc[oS[aA]] && oS.splice(aA, 1);
				0 < oS.length && (b3.a43(1, oS, !0) && b6.ft.oR(oS, player), oS = [])
			} else if (2 === a3z) b6.gu.ny(aQ.gz(), player);
			else if (3 === a3z) aC.gt && b6.gu.gv(a3r);
			else if (0 === a3z)
				if (0 === q6[0].kX) {
					if (aC.a3H && aV.a44() < 350) return 1;
					bT.a45(4), b6.gu.h5(aQ.gz(), player)
				} else az.h7(player, aQ.gz());
			else if (1 === a3z) bT.a45(1), b6.gu.h3(aQ.gz(), a3r);
			else {
				if (7 === a3z) return bT.a45(0), ai.vU.show(kr, ks), 2;
				if (4 === a3z) b3.a43(0, [player], !0) && b6.ft.oO(player);
				else {
					if (8 !== a3z) return 0;
					b6.gu.gy(aQ.gz(), a3r, player)
				}
			}
			return 1
		}(kr, ks), this.qn(), 2 === kr && (ai.vU.hF = !0), 0 < kr))
	}, this.a0i = function(kr, ks) {
		this.hF() || (a3p = kr, a3q = ks, e7 = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = bK.gp(mouseX),
			coordY = bK.gr(mouseY),
			coord = bK.ew(coordX, coordY),
			point = bK.eO(coord);
		if (coordX < 0 || coordY < 0) return;
		(function(kr, ks, eC) {
			ab.eT(eC) || -1 === (kr = bL.h1.a4J(kr, ks)) ? aM.a4I(eC) : aM.a4K(kr)
		}(mouseX, mouseY, point))
	}
	this.click = function(kr, ks, a0p) {
		var go = bK.gp(kr),
			gq = bK.gr(ks),
			eK = bK.ew(go, gq),
			eC = bK.eO(eK);
		if (!bK.gs(go, gq)) return !1;
		go = (z.a0.qu() ? .025 : .0144) * h.pY, gq = performance.now();
		if (Math.abs(kr - a3p) > go || Math.abs(ks - a3q) > go || e7 + 500 < gq) return !1;
		if (e7 = gq, a0p && ! function(kr, ks, eC) {
				ab.eT(eC) || -1 === (kr = bL.h1.a4J(kr, ks)) ? aM.a4I(eC) : aM.a4K(kr)
			}(kr, ks, eC), aL.gi || this.hF() || !b8.ft.gk(aC.eI) || aC.gh) return this.qn(), !1;
		if (aC.gt) {
			if (!a0p) {
				if (!ab.eT(eC)) return !1;
				a3r = eK, q6[3].hF = !0
			}
		} else if (bL.h1.o3(eK)) a0p ? aM.a4B(55, 0) : bL.a49.a4A = -1;
		else {
			if (a0p) return !1;
			bL.h1.a4C(kr, ks) || (2 === aC.ym ? ab.g7(eC) && (player = ab.eQ(eC), b8.ft.jB(player) || (q6[0].hF = !0, q6[0].kX = 1, q6[7].hF = !0)) : ab.ed(eC) ? (a3r = al.e9.eB(eC)) && (go = bK.eO(a3r), q6[8].hF = !0, player = ab.eP(go) ? aC
				.eV : ab.eQ(go)) : (a3r = eK, bL.h1.h2(aC.eI, eK) && (q6[0].hF = !0, q6[0].kX = 1, q6[1].hF = !0, q6[1].kX = bM.f9[2] ? 0 : 2), ab.h0(eC) || (ab.eP(eC) ? (player = aC.eV, h4(aC.eI) ? (q6[0].hF = !0, q6[0].kX = 0) : h6(aC
				.eI, player) && (q6[0].hF = !0, q6[0].kX = 3)) : (player = ab.eQ(eC)) === aC.eI ? (q6[0].hF = !0, q6[0].kX = 1, q6[7].hF = !0) : (q6[0].kX = 1, q6[5].hF = function(player) {
				return !b8.ft.jB(player) && !a42(player) && b3.a43(1, [player], !1)
			}(player), q6[7].hF = !b8.ft.jB(player), eR(player, aC.eI) ? (q6[4].hF = !b8.ft.jB(player) && !ae.a4E(player) && b3.a43(0, [player], !1), q6[6].hF = function(player) {
				if (0 === oS.length) return !1;
				if (performance.now() > a3s + 4e3) return !(oS = []);
				return !a42(player) && ! function(player) {
					var aA;
					if (aC.hN)
						for (aA = oS.length - 1; 0 <= aA; aA--)
							if (!eR(player, oS[aA])) return 1;
					return
				}(player)
			}(player), h8(aC.eI, player) ? (q6[0].kX = 0, q6[0].hF = !0) : h6(aC.eI, player) && (q6[0].kX = 3, q6[0].hF = !0), q6[0].hF = this.a4G()) : (q6[2].hF = !0, q6[0].hF = !0)))))
		}
		return this.a48(kr, ks)
	}, this.a48 = function(kr, ks) {
		return ef = kr - Math.floor(a3o / 2), eh = ks - Math.floor(a3o / 2), !!this.hF()
	}, this.a0M = function(kr, ks) {
		return !!this.hF() && (ai.vU.hF ? !ai.vU.xm(kr, ks) && (ai.vU.hF = !1, bd.dc = !0) : function(r8, kr, ks) {
			kr = a3y(kr, ks);
			if (0 <= a40(kr)) return !1;
			if ((1 === kr || 6 === kr) && 0 <= a40(2)) return !1;
			if ((6 === kr || 9 === kr) && 0 <= a40(10)) return !1;
			return r8.qn(), bd.dc = !0
		}(this, kr, ks))
	}, this.qn = function() {
		for (var aA = q6.length - 1; 0 <= aA; aA--) q6[aA].hF = !1, q6[aA].kX = 0;
		ai.vU.hF = !1
	}, this.hF = function() {
		return this.a4G() || ai.vU.hF
	}, this.a4G = function() {
		for (var eY = q6.length, aA = 0; aA < eY; aA++)
			if (q6[aA].hF) return !0;
		return !1
	}, this.td = function() {
		if (this.hF())
			if (ai.vU.hF) ai.vU.td();
			else {
				var aA, hV = te,
					es = q6,
					eY = es.length,
					a4O = (a3o + gap) / zoom;
				for (hV.imageSmoothingEnabled = !0, hV.setTransform(zoom, 0, 0, zoom, ef, eh), aA = 0; aA < eY; aA++) es[aA].hF && te.drawImage(es[aA].canvas[es[aA].kX], es[aA].ef * a4O, es[aA].eh * a4O);
				hV.imageSmoothingEnabled = !1, hV.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function c8() {
	var j, canvas, a4P, a4Q, a4R, a4S = -1;

	function a4T() {
		var a4U, x3 = canvas.getContext("2d", {
			alpha: !0
		});
		x3.clearRect(0, 0, j, j), x3.fillStyle = b9.ma, x3.fillRect(0, 0, j, j), 0 === a4Q && (x3.fillStyle = b9.mf, x3.fillRect(0, 0, j, j)), x3.fillStyle = b9.me, x3.fillRect(0, 0, j, 1), x3.fillRect(0, 0, 1, j), x3.fillRect(0, j - 1, j, 1), x3
			.fillRect(j - 1, 0, 1, j), a4U = .9 * j / aa.get(0).width, x3.imageSmoothingEnabled = !0, x3.setTransform(a4U, 0, 0, a4U, Math.floor((j - a4U * aa.get(0).width) / 2), Math.floor((j - a4U * aa.get(0).height) / 2)), x3.drawImage(aa.get(0),
				0, 0), x3.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a4W(kr, ks) {
		if (!aL.gi) return kr <= j + ba.gap && ks >= aQ.eh ? 9 : -1;
		if (kr <= 4 * j + ba.gap) {
			if (ks >= aQ.eh) return 0;
			if (ks >= aQ.eh - j - a4R * ba.gap) return 2
		} else if (kr <= 7 * j + ba.gap && ks >= aQ.eh - j - a4R * ba.gap) return 1;
		return -1
	}
	this.gi = !1, this.dU = function() {
		a4Q = -1, this.gi = !1, a4R = z.a0.qu() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		j = aQ.j, (canvas = document.createElement("canvas")).width = j, canvas.height = j, a4P = b8.pW.rL(1, (z.a0.qu() ? .5 : .45) * j), a4T()
	}, this.a0x = function() {
		this.gi = !this.gi, this.gi ? (bA.a0w(!1), aC.gh && bA.a3f && bA.a0y(!0), this.a4V()) : (a4Q = -1, a4T(), !aC.k6 || 1 !== aC.ym || aC.gt || aC.gh || z.a0.setState(1)), bd.dc = !0
	}, this.a4V = function() {
		(aC.k6 || aC.gh) && 1 === aC.ym && (aU.lO(!0), aC.gt || setTimeout(function() {
			bZ.yx()
		}, 0), z.a0.setState(0))
	}, this.gl = function(kr, ks) {
		return 0 <= (a4S = a4W(kr, ks)) || !aL.gi || aC.k6 || aC.gh || bc.hF || aL.a0x(), a4S
	}, this.a0M = function(kr, ks) {
		kr = a4W(kr, ks);
		kr !== a4Q && (a4Q = kr, this.gi || a4T(), bd.dc = !0)
	}, this.a0N = function(kr, ks) {
		kr = a4W(kr, ks);
		return -1 !== kr && a4S === kr && (this.gi ? aC.m7 ? (0 <= kr && bA.a0w(!1), !aC.gh) : (0 === kr ? aC.a0D() : 1 === kr ? this.a0x() : 2 === kr && s.t(1, 0), !0) : 9 === kr && (this.a0x(), !0))
	}, this.td = function() {
		var i;
		this.gi ? (i = Math.floor(5.5 * j), te.setTransform(1, 0, 0, 1, ba.gap, aQ.eh), te.fillStyle = b9.ma, te.fillRect(0, 0, i, j), 0 === a4Q ? (te.fillStyle = b9.mf, te.fillRect(0, 0, 4 * j, j)) : 1 === a4Q && (te.fillStyle = b9.mf, te
				.fillRect(4 * j, 0, Math.floor(1.5 * j), j)), te.fillStyle = b9.me, te.fillRect(0, 0, i, 1), te.fillRect(0, 0, 1, j), te.fillRect(4 * j, 0, 1, j), te.fillRect(0, j - 1, i, 1), te.fillRect(i - 1, 0, 1, j), te.font = a4P, b8.pW
			.textBaseline(te, 1), b8.pW.textAlign(te, 1), te.fillText(L(40), 2 * j, .54 * j), i = .4 * j, aL.a4a(ba.gap + 4 * j + (1.5 * j - i) / 2, aQ.eh + .3 * j, i), i = 1, te.setTransform(1, 0, 0, 1, ba.gap, aQ.eh - i * a4R * ba.gap - i *
				j), te.fillStyle = b9.ma, te.fillRect(0, 0, 4 * j, j), a4Q === i + 1 && (te.fillStyle = b9.mf, te.fillRect(0, 0, 4 * j, j)), te.fillStyle = b9.me, te.fillRect(0, 0, 4 * j, 1), te.fillRect(0, 0, 1, j), te.fillRect(4 * j, 0, 1,
				j), te.fillRect(0, j - 1, 4 * j, 1), te.fillText(L(0 === i ? 40 : 41), 2 * j, .54 * j), te.setTransform(1, 0, 0, 1, 0, 0)) : te.drawImage(canvas, ba.gap, aQ.eh)
	}, this.p7 = function(player) {
		return 0 !== af.lc[player] && 2 !== aC.ym && !b8.ft.jB(player)
	}, this.a4a = function(ef, eh, eY) {
		te.setTransform(1, 0, 0, 1, ef, eh), te.lineWidth = ba.xn, te.strokeStyle = b9.me, te.beginPath(), te.moveTo(0, 0), te.lineTo(eY, eY), te.moveTo(0, eY), te.lineTo(eY, 0), te.stroke()
	}
}

function c9() {
	var a4c, j, a4d, a4e, a4f, a4g, a4h, a4i, a4j;

	function wz() {
		return aQ.a51(aM.a4x()) ? au.hF ? __fx.settings.keybindButtons ? aQ.eh - 2 * aQ.j - 3 * a4d : aQ.eh - aQ.j - 2 * a4d : __fx.settings.keybindButtons ? aQ.eh - aQ.j - 2 * a4d : aQ.eh - a4d : bA.a51(aM.a50()) ? au.hF ? bA.wz() - aQ.j - 2 * a4d :
			bA.wz() - a4d : au.hF ? h.j - aQ.j - (bi.a3n() + 1) * a4d : h.j - bi.a3n() * ba.gap
	}

	function a4o(di, pD, id, g5, a4r, a4s, vc, a4t, a4u, a4v) {
		var aA, x3, a1h, pO, g, a56 = void 0 !== a4u,
			i = Math.floor(aP.measureText(pD, aM.a4P) + 1.5 * a4e + (a56 ? j : 1.5 * a4e));
		if (bd.dc = !0, i + 2 * a4d + aQ.j > h.i && !a56 && 50 !== id && 20 < pD.length) a4o(di, (g = b8.zR.a2y(pD))[0], id, g5, a4r, a4s, vc, a4t, a4u, a4v), a4o(di, g[1], id, g5, a4r, a4s, vc, a4t, a4u, a4v);
		else if (g = i + (50 === id ? a4f : 0), (a1h = document.createElement("canvas")).width = i, a1h.height = j, (x3 = a1h.getContext("2d", {
				alpha: !0
			})).font = aM.a4P, b8.pW.textBaseline(x3, 1), b8.pW.textAlign(x3, 0), x3.clearRect(0, 0, i, j), x3.fillStyle = a4s, x3.fillRect(0, 0, i, j), x3.fillStyle = a4r, x3.fillText(pD, Math.floor(1.5 * a4e), Math.floor(j / 2)), a56 && (x3
				.imageSmoothingEnabled = !0, ai.vU.xo(a4u, x3, i - j, 0, j)), 0 === (pO = {
				e7: di,
				pD: pD,
				id: id,
				player: g5,
				canvas: a1h,
				a4r: a4r,
				a4s: a4s,
				i: i,
				a4y: g,
				vc: vc,
				a4t: a4t,
				a4u: a4u,
				a4v: a4v
			}).e7 || 0 < a4c.length && 0 < a4c[0].e7) a4c.unshift(pO);
		else {
			for (aA = 1; aA < a4c.length; aA++)
				if (0 < a4c[aA].e7) return void a4c.splice(aA, 0, pO);
			a4c.push(pO)
		}
	}

	function a4p(dw, sA, es) {
		return "rgb(" + dw + "," + sA + "," + es + ")"
	}

	function a57(id, g0) {
		for (var eY = a4c.length, aA = 0; aA < eY; aA++) a4c[aA].id === id && g0-- <= 0 && (a4c.splice(aA, 1), aA--, eY--)
	}

	function a58(id, player) {
		for (var em = !1, aA = a4c.length - 1; 0 <= aA; aA--) a4c[aA].id !== id || player !== aC.eV && a4c[aA].player !== player || (a4c.splice(aA, 1), em = !0);
		return em
	}

	function a5V(pD) {
		a4o(340, pD, 6, 0, a4p(215, 245, 255), b9.mb, -1, !1)
	}
	this.a4k = "", this.dU = function() {
		var self;
		a4i = 0, a4h = z.a0.qu() ? 7 : 12, a4g = {
			ya: [0, 0, 0],
			a4l: [0, 0, 0],
			lu: [220, 180, 180],
			tc: [0, 0, 0],
			et: [0, 0, 0]
		}, a4c = [], this.resize(), aC.gt && this.yy(0, 18), bQ.vH.vI[bQ.eE].name.length && a5V(L(88, [bQ.vH.vI[bQ.eE].name])), a5V(L(89, [bQ.ej - 2 + "x" + (bQ.ek - 2)])), a5V(L(90, [an.a5W])), an.a5W !== an.a5X && a5V(L(91, [an.a5X + " (" +
			b8.zR.a2u(100 * an.a5X / an.a5W, 1) + ")"
		])), 0 < an.a5Y && a5V(L(64, [an.a5Y + " (" + b8.zR.a2u(100 * an.a5Y / an.a5W, 1) + ")"])), 0 < an.a5Z && a5V(L(92, [an.a5Z + " (" + b8.zR.a2u(100 * an.a5Z / an.a5W, 1) + ")"])), 10 === aC.k4 && a4o(120, L(93), 6, 0, a4p(235, 255,
			120), b9.mb, -1, !1), 0 !== (self = this).a4k.length && (a4o(200, self.a4k, 0, 0, b9.me, b9.mb, -1, !1), self.a4k = ""), aC.xG && a4o(340, L(42), 6, 0, a4p(255, 200, 0), b9.mb, -1, !1)
	}, this.resize = function() {
		var a4q, aA;
		if (j = (j = Math.floor((z.a0.qu() ? .031 : .0249) * h.pY)) < 10 ? 10 : j, this.fontSize = Math.floor(2 * j / 3), this.a4P = b8.pW.rL(1, this.fontSize), a4d = ba.gap, a4e = Math.floor(j / 5), 0 < a4c.length)
			for (a4q = a4c, a4c = [], aA = a4q.length - 1; 0 <= aA; aA--) a4o(a4q[aA].e7, a4q[aA].pD, a4q[aA].id, a4q[aA].player, a4q[aA].a4r, a4q[aA].a4s, a4q[aA].vc, a4q[aA].a4t, a4q[aA].a4u, a4q[aA].a4v);
		this.a4w()
	}, this.a4w = function() {
		a4j = document.createElement("canvas");
		var pD = L(43),
			x3 = (a4f = aP.measureText(pD, this.a4P) + 5 * a4e, a4j.height = j, a4j.width = a4f, a4j.getContext("2d", {
				alpha: !0
			}));
		x3.font = this.a4P, b8.pW.textBaseline(x3, 1), b8.pW.textAlign(x3, 1), x3.clearRect(0, 0, a4f, j), x3.fillStyle = b9.n1, x3.fillRect(0, 0, a4f, j), x3.fillStyle = b9.me, x3.fillText(pD, Math.floor(a4f / 2), Math.floor(j / 2))
	}, this.a4x = function() {
		var eY;
		return au.hF ? au.i : 0 === (eY = a4c.length) ? 0 : 1 === eY ? a4c[0].a4y : a4z(a4c[0].a4y, a4c[1].a4y)
	}, this.a50 = function() {
		var eY = a4c.length;
		return au.hF ? eY ? a4z(au.i, a4c[0].a4y) : au.i : 0 === eY ? 0 : 1 === eY ? a4c[0].a4y : 2 === eY ? a4z(a4c[0].a4y, a4c[1].a4y) : a4z(a4z(a4c[0].a4y, a4c[1].a4y), a4c[2].a4y)
	}, this.gl = function(ef, eh) {
		for (var m4, a52, a53 = wz(), aA = a4c.length - 1; 0 <= aA; aA--)
			if ((a52 = a53 - (aA + 1) * j) <= eh && eh < a52 + j) return 50 === a4c[aA].id ? ef >= h.i - a4f - a4d - a4c[aA].i && (ef >= h.i - a4f - a4d ? b6.ft.oO(a4c[aA].player) : aG.ly(a4c[aA].player, 800, !1, 0), !0) : ef >= h.i - a4c[aA].i -
				a4d && (736 === a4c[aA].id ? (a52 = a4c[aA].pD.split(" "), window.open(a52[a52.length - 1], "_blank")) : a4c[aA].a4t && (a4c[aA].a4v && a4c[aA].a4v.er ? (a52 = a4c[aA].a4v.eK, m4 = bK.eg(a52) - 10, a52 = bK.ei(a52) - 10, aG
					.lx(m4, a52, 19 + m4, 19 + a52)) : a4c[aA].a4v && a4c[aA].a4v.es ? aG.lz(a4c[aA].player, a4c[aA].a4v.m0) : (aG.ly(a4c[aA].player, 800, !1, 0), 0 <= a4c[aA].vc && (m4 = a4c[aA].vc, a4c[aA].vc = a4c[aA].player, a4c[
					aA].player = m4))), !0);
		return !1
	}, this.zA = function(di, pD, id, g5, a4r, a4s, vc, a4t, a4u, a4v) {
		a4o(di, pD, id, g5, a4r, a4s, vc, a4t, a4u, a4v)
	}, this.a55 = function(p) {
		a4o(300, p, 252, 0, b9.me, b9.mb, -1, !1)
	}, this.a3A = function(id) {
		for (var aA = a4c.length - 1; 0 <= aA; aA--) a4c[aA].id === id && (a4c[aA].e7 = 1)
	}, this.yy = function(player, id) {
		0 === id ? (aP.iv(player, 0), a57(423, 0), a4o(160, L(44, [af.zN[player]]), 423, player, "rgb(10,220,10)", b9.mb, -1, !1)) : 1 === id ? (a58(50, aC.eV), aP.iv(player, 1), a4o(360, L(45, [af.zN[player]]), 0, player, b9.nK, b9.mb, -1, !0),
			aG.ly(player, 2700, !1, 0)) : 2 === id ? (aP.iv(player, 2), a4o(0, L(46), 0, player, "rgb(10,255,255)", b9.mb, -1, !0), aG.ly(player, 2700, !1, 0)) : 3 === id ? (aP.iv(player, 2), a4o(0, L(47, [af.zN[player]]), 0, player, b9.me,
			b9.mb, -1, !0), aG.ly(player, 2700, !1, 0)) : 4 === id ? this.a59(1, player, player) : 5 === id ? 2 === af.a2E[player] || b8.ft.jB(aC.eI) || (function(id, lX) {
			var aA, a5K = 0,
				eY = a4c.length;
			for (aA = 0; aA < eY; aA++)
				if (a4c[aA].id === id && lX <= ++a5K) return a4c.splice(aA, 1)
		}(1, 5), ae.a5B(player) ? a4o(180, L(48, [af.zN[player]]), 1, player, a4p(255, 200, 180), b9.mb, -1, !0) : (a57(573, 0), a4o(180, L(49, [af.zN[player]]), 573, player, b9.nK, b9.mb, -1, !0))) : 18 === id ? a4o(255, L(50), 18, 0, b9.me,
			b9.mb, -1, !1) : 21 === id ? a4o(220, L(51), id, 0, b9.me, b9.mb, -1, !1) : 22 === id ? this.a59(2, player, player) : 59 === id && a4o(0, L(52), id, 0, b9.nb, b9.mb, 0, !1)
	}, this.a07 = function(p) {
		a4o(200, L(53, [p]), 94, 0, b9.me, b9.nG, -1, !1)
	}, this.z5 = function(a5C) {
		if (aC.eI === a5C && !aC.k6)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			a4o(0, "Your Win Count is now " + __fx.wins.count, 3, a5C, b9.me, b9.mb, -1, !0);
		af.gL[a5C] && (aP.iv(a5C, 2), aC.jn < 100 ? a4o(0, L(47, [af.zN[a5C]]), 3, a5C, b9.me, b9.mb, -1, !0) : a4o(0, L(54, [af.zN[a5C]]), 3, a5C, b9.me, b9.mb, -1, !0))
	}, this.a4I = function(eC) {
		var a5E, pD, a5D = "(" + bK.eg(eC >> 2) + ", " + bK.ei(eC >> 2) + ")",
			a4t = !1,
			player = 0;
		ab.eT(eC) ? ab.eP(eC) ? a5D = L(55, [a5D]) : (player = ab.eQ(eC), pD = L(56, [b8.x3.a1t(af.zT[player], b8.pW.rL(0, 10), 150)]) + "   ", pD = (pD += L(57, [b8.zR.y4(af.gZ[player])]) + "   ") + L(58, [b8.zR.y4(af.gL[player])]) + "   ", aC
				.hN && (a5E = be.z8[be.k9[be.eW[player]]], pD += L(59) + ": " + a5E + "   "), b8.ft.jB(player) && (pD += L(60) + ": " + aD.jy[aD.hC[player]] + "   "), a5D = pD = (pD += L(61, [player]) + "   ") + L(62, [a5D]), a4t = !0) : a5D = ab
			.ed(eC) ? L(63, [a5D]) + "   #" + ab.eG(eC) : L(64, [a5D]), bd.dc = !0, a57(55, 0), a4o(220, a5D, 55, player, b9.me, b9.mb, -1, a4t)
	}, this.a4K = function(a5F) {
		var kV = bL.x,
			player = kV.a5G[a5F] >> 3,
			pD = (bd.dc = !0, a57(55, 0), L(65, [af.zN[player]]) + "   ");
		a4o(220, pD += L(57, [kV.a5H[a5F]]), 55, player, b9.me, b9.mb, -1, !0)
	}, this.o8 = function(nv, a5I, o9) {
		nv === aC.eI ? a4o(175, " " + L(66, [af.zN[a5I]]) + ": ", 1001, a5I, a4p(200, 255, 210), b9.mb, -1, !0, o9) : this.a5J(nv, o9)
	}, this.a5J = function(nv, o9) {
		a57(1e3, 0), a4o(175, af.zN[nv] + ": ", 1e3, nv, b9.me, "rgba(5,60,25,0.9)", -1, !0, o9)
	}, this.zB = function() {
		var p;
		aC.yr ? (p = L(67), aP.z9(L(68), 2, 1, 12), a4o(0, p, 40, 0, "rgb(10,220,10)", b9.mb, -1, !1)) : (p = L(69), aP.z9(L(70), 2, 0, 16), a4o(0, p, 41, 0, b9.me, b9.mb, -1, !1))
	}, this.xA = function() {
		var g0 = af.zN,
			eb = aC.data;
		a4o(300, g0[0] + " [" + aC.z4.xF(eb.elo[0]) + "] vs " + g0[1] + " [" + aC.z4.xF(eb.elo[1]) + "]", 65, 0, b9.mV, "rgba(100,255,255,0.75)", -1, !1)
	}, this.a5L = function(p) {
		a4o(350, p, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.a5M = function(a5N) {
		a4o(0, L(a5N ? 71 : 72), 247, 0, b9.na, b9.mb, -1, !1)
	}, this.xI = function(xE, xH, a5O) {
		var eb = aC.data,
			g0 = af.zN;
		a4o(0, g0[0] + ": " + aC.z4.xF(eb.elo[0]) + " -> " + xE, 66, 0, b9.me, a5O[0], -1, !1), a4o(0, g0[1] + ": " + aC.z4.xF(eb.elo[1]) + " -> " + xH, 66, 1, b9.me, a5O[1], -1, !1)
	}, this.oP = function(player, id) {
		0 === id ? a58(50, player) ? (a4o(128, L(73, [af.zN[player]]), 52, player, a4p(180, 255, 180), b9.mb, -1, !0), ae.p5(player, 2, 255)) : a4o(384, L(74, [af.zN[player]]), 51, player, a4p(210, 210, 255), b9.mb, -1, !0) : a58(51, player) ? (
			a4o(128, L(75, [af.zN[player]]), 52, player, b9.me, "rgba(60,120,10,0.9)", -1, !0), ae.p5(player, 2, 255)) : (a4o(384, L(76, [af.zN[player]]), 50, player, b9.me, "rgba(90,90,90,0.9)", -1, !0), ae.p5(player, 2, 96))
	}, this.oT = function(ya, target) {
		var color = a4p(210, 255, 210);
		1 < ya.length ? a4o(230, L(77, [ya.length, af.zN[target]]), 66, target, color, b9.mb, -1, !0) : a4o(230, L(78, [af.zN[ya[0]], af.zN[target]]), 66, ya[0], color, b9.mb, target, !0)
	}, this.a5P = function(player, target) {
		a4o(230, L(79, [af.zN[player], af.zN[target]]), 66, player, b9.me, "rgba(75,65,5,0.9)", target, !0)
	}, this.a4B = function(id, g0) {
		a57(id, g0)
	}, this.yt = function(id, player) {
		a58(id, void 0 === player ? aC.eV : player)
	}, this.a5Q = function(id) {
		for (var aA = a4c.length - 1; 0 <= aA; aA--)
			if (a4c[aA].id === id) return a4c[aA];
		return null
	}, this.oK = function(a5R, a5S, player) {
		2 !== af.a2E[aC.eI] && (a4o(200, 1 === a5R ? L(80, [af.zN[player]]) : L(81, [a5R, af.zN[player]]), 30, player, "rgb(190,255,190)", b9.mb, -1, !0), a5S) && a4o(30, 1 === a5S ? L(82) : L(83, [a5S]), 30, 0, b9.me, b9.mb, -1, !1)
	}, this.a5U = function(a5R, player) {
		2 !== af.a2E[aC.eI] && (a57(31, 0), 2 === af.a2E[player] || player >= aC.jn ? a4o(150, 1 === a5R ? L(84, [af.zN[player]]) : L(85, [af.zN[player], a5R]), 31, player, b9.mV, "rgba(205,205,205,0.9)", -1, !0) : a4o(150, 1 === a5R ? L(86, [af
			.zN[player]
		]) : L(87, [af.zN[player], a5R]), 31, player, b9.mV, "rgba(205,255,205,0.9)", -1, !0))
	}, this.ys = function(bp) {
		for (var et = bd.jk(), aA = 2; 0 <= aA; aA--) 0 < a4g.tc[aA] && (bp || a4g.et[aA] < et - 220) && this.a5a(aA)
	}, this.a5a = function(id) {
		var pD, eY = a4g.tc[id],
			player = a4g.ya[id];
		a4g.tc[id] = 0, 1 === eY ? (0 === id ? pD = L(94, [af.zN[player], af.zN[a4g.a4l[0]]]) : 1 === id ? pD = L(95, [af.zN[player]]) : 2 === id ? pD = L(96, [af.zN[player]]) : 3 === id && (pD = L(97, [af.zN[player]])), a57(7, 0), a4o(a4g.lu[
			id], pD, 7, a4g.a4l[id], b9.me, b9.mb, -1, !0)) : (pD = L(0 === id ? 98 : 1 === id ? 99 : 100, [eY]), a57(7, 0), a4o(a4g.lu[id], pD, 7, player, b9.me, b9.mb, -1, !1))
	}, this.a59 = function(id, gx, vc) {
		var et = bd.jk(),
			eY = a4g.tc[id] + 1;
		a4g.tc[id]++, a4g.ya[id] = gx, a4g.a4l[id] = vc, 1 === eY && (a4g.et[id] = et), (1 === eY && (aC.yp < 32 || 2 === aC.ym) || 1 < eY && (a4g.et[id] < et - 140 || 2 === aC.ym)) && this.a5a(id)
	}, this.ih = function() {
		b0.ih();
		for (var hh = (hh = a4c.length - a4h) <= 1 ? 1 : hh * hh, aA = a4c.length - 1; 0 <= aA; aA--) 0 < a4c[aA].e7 && (a4c[aA].e7 -= hh, a4c[aA].e7 <= 0) && (bd.dc = !0, a4c.splice(aA, 1));
		! function() {
			var g0, aA;
			if (128 !== a4i && !(++a4i < 128))
				for (g0 = 5, aA = ak.jo - 1; 0 <= aA; aA--) 1 === af.a2E[ak.jp[aA]] && 0 < g0-- && a4o(240, L(97, [af.zN[ak.jp[aA]]]), 1, ak.jp[aA], b9.mV, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.ys(!1)
	}, this.td = function() {
		for (var w3, eh = wz(), aA = a4c.length - 1; 0 <= aA; aA--) w3 = eh - (aA + 1) * j, 50 === a4c[aA].id ? (te.drawImage(a4c[aA].canvas, h.i - a4c[aA].i - a4f - a4d, w3), te.drawImage(a4j, h.i - a4f - a4d, w3)) : te.drawImage(a4c[aA].canvas,
			h.i - a4c[aA].i - a4d, w3)
	}
}

function cA() {
	var a5c, a5d, a5e, i, j, font, pD;

	function a5j(a5k) {
		return a5k < 10 ? "0" + a5k : String(a5k)
	}
	this.dU = function() {
		pD = L(101)
	}, this.resize = function() {
		i = Math.floor((z.a0.qu() ? .53 : .36) * h.pY), j = Math.floor(.065 * i), font = b8.pW.rL(1, Math.floor(.9 * j)), a5e--, this.setTime()
	}, this.ih = function() {
		this.setTime() && (bd.dc = !0)
	}, this.setTime = function() {
		for (var di = new Date, a5f = di.getUTCMinutes(), a5g = di.getUTCSeconds(), a5h = [0, 10, 20, 25, 30, 35, 40, 45, 50], a5i = (a5d = 3600 - 60 * a5f - a5g, a5d %= 300, 300), aA = 0; aA < a5h.length; aA++)
			if ((60 * a5f + a5g + a5d) % 3600 == 60 * a5h[aA]) {
				a5i = 0;
				break
			} return a5d += a5i, a5c = pD + a5j(Math.floor(a5d / 60)) + ":" + a5j(a5d % 60), a5e !== (a5e = 60 * a5f + a5g) && (i = aP.measureText(a5c, font), i += Math.floor(.4 * j), !0)
	}, this.td = function() {
		te.lineWidth = 1 + Math.floor(j / 15), te.translate(h.i - j, Math.floor(.5 * (h.j + i))), te.rotate(-Math.PI / 2), te.fillStyle = b9.me, te.fillRect(0, 0, i, j), te.strokeStyle = b9.mV, te.strokeRect(0, 0, i, j + 10), te.fillStyle = b9
			.mV, te.font = font, b8.pW.textBaseline(te, 1), b8.pW.textAlign(te, 1), te.fillText(a5c, Math.floor(i / 2), Math.floor(.59 * j)), te.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function cB() {
	var a4c, a5l, a4P, j, a5m;

	function a5o(aA) {
		var a5q = !0,
			hd = b9.me,
			i = (a4c[aA].iy === aC.eV ? a4c[aA].x3.fillStyle = b9.mp : (ab.a5r(a4c[aA].iy), a4c[aA].x3.fillStyle = b8.color.mY(bM.f7[0], bM.f7[1], bM.f7[2], .87), 400 < b8.pf.a1L(bM.f7, 0, 2) && (a5q = !1, hd = b9.mV)), a4c[aA].canvas.width),
			rs = (a4c[aA].x3.clearRect(0, 0, i, j), a4c[aA].x3.fillRect(0, 0, i, j), a4c[aA].x3.fillStyle = hd, ! function(x3, i, j) {
				x3.fillRect(0, 0, i, 1), x3.fillRect(0, j - 1, i, 1), x3.fillRect(0, 0, 1, j), x3.fillRect(i - 1, 0, 1, j)
			}(a4c[aA].x3, i, j), a5l + 2 * j < i && (a4c[aA].x3.fillRect(i - a5l - j, 0, 1, j), a4c[aA].x3.fillText(af.zN[a4c[aA].iy], Math.floor((i - a5l) / 2), Math.floor(.57 * j))), 0 !== a4c[aA].id ? 0 : j);
		a4c[aA].x3.fillText(b8.zR.y4(a4c[aA].hC), Math.floor(i - a5l / 2 - rs), Math.floor(.57 * j)),
			function(aA, i, rs, a5q) {
				a4c[aA].x3.fillStyle = a5q ? b9.mg : b9.mc;
				a5q = Math.floor(a5l * a4c[aA].hC / a4c[aA].a5x);
				a4c[aA].x3.fillRect(Math.floor(i - a5l - rs), j - a5m, a5q, a5m)
			}(aA, i, rs, a5q), 0 === a4c[aA].id ? (a5u(aA, i, a5q, hd), function(aA, i, a5q) {
				a4c[aA].x3.strokeStyle = a5q ? b9.mw : b9.n6, a4c[aA].x3.fillRect(j, 0, 1, j);
				a5q = i - j;
				a4c[aA].x3.beginPath(), a4c[aA].x3.moveTo(Math.floor(.3 * j + a5q), Math.floor(j / 2)), a4c[aA].x3.lineTo(Math.floor(j - .3 * j + 0 + a5q), Math.floor(j / 2)), a4c[aA].x3.stroke(), a4c[aA].x3.beginPath(), a4c[aA].x3.moveTo(Math
					.floor(j / 2 + a5q), Math.floor(.3 * j)), a4c[aA].x3.lineTo(Math.floor(j / 2 + a5q), Math.floor(j - .3 * j + 0)), a4c[aA].x3.stroke()
			}(aA, i, a5q)) : a5u(aA, 2 * j, a5q, hd)
	}

	function a5u(aA, i, a5q, hd) {
		a4c[aA].x3.strokeStyle = a4c[aA].a5y ? b9.mn : a5q ? b9.nC : b9.nD, a4c[aA].x3.fillStyle = hd, a4c[aA].x3.fillRect(i - j, 0, 1, j), a4c[aA].x3.lineWidth = Math.max(Math.floor(j / 12), 3), a4c[aA].x3.lineCap = "round";
		a5q = .35;
		i = j + 1, a4c[aA].x3.beginPath(), a4c[aA].x3.moveTo(Math.floor(i - a5q * j + 0), Math.floor(a5q * j)), a4c[aA].x3.lineTo(Math.floor(i - j + a5q * j), Math.floor(j - a5q * j + 0)), a4c[aA].x3.stroke(), a4c[aA].x3.beginPath(), a4c[aA].x3
			.moveTo(Math.floor(i - j + a5q * j), Math.floor(a5q * j)), a4c[aA].x3.lineTo(Math.floor(i - a5q * j + 0), Math.floor(j - a5q * j + 0)), a4c[aA].x3.stroke()
	}

	function a68(eY) {
		for (var hC, aA = eY - 1; 0 <= aA; aA--) hC = ac.fk(aC.eI, aA), a4c[aA].hC !== hC && (a4c[aA].hC = hC, a4c[aA].a5x = hC > a4c[aA].a5x ? hC : a4c[aA].a5x, a4c[aA].a5p = !0)
	}

	function a5n(a6A) {
		a6A.canvas = document.createElement("canvas"), bQ.vN.font = a4P;
		var i = a5l;
		a6A.iy < aC.eV && 0 === a6A.id && (i += Math.floor(bQ.vN.measureText(af.zN[a6A.iy] + "000").width)), i += j, 0 === a6A.id && (i += j), a6A.canvas.width = i, a6A.canvas.height = j, a6A.x3 = a6A.canvas.getContext("2d", {
			alpha: !0
		}), a6A.x3.font = a4P, b8.pW.textBaseline(a6A.x3, 1), b8.pW.textAlign(a6A.x3, 1)
	}

	function a64(aA) {
		return aT.a6C() ? h.i - a4c[aA].canvas.width - ba.gap : aT.ef
	}

	function a65(aA) {
		return Math.floor(2 * ba.gap + (aT.a6C() ? aV.j + ba.gap : 0) + aT.j + aA * (1.3 * j))
	}
	this.dU = function() {
		a4c = [], this.resize()
	}, this.resize = function() {
		a4P = aM.a4P, j = aM.fontSize + 5, j = Math.floor(1.25 * j), z.a0.qu() && (j = Math.floor(1.25 * j)), a5m = Math.floor(.15 * j), bQ.vN.font = a4P, a5l = Math.floor(bQ.vN.measureText("02 000 000 0000").width);
		for (var aA = a4c.length - 1; 0 <= aA; aA--) a5n(a4c[aA]), a5o(aA)
	}, this.lO = function() {
		for (var aA = a4c.length - 1; 0 <= aA; aA--) a4c[aA].a5p && (a4c[aA].a5p = !1, a5o(aA))
	}, this.gl = function(kr, ks) {
		if (2 !== aC.ym && 0 !== af.lc[aC.eI] && !aC.gh && !b8.ft.jB(aC.eI))
			for (var a5z, a60, a61, a62 = z.a0.qu() ? j : 0, a63 = z.a0.qu() ? Math.floor(.15 * j) : 0, aA = a4c.length - 1; 0 <= aA; aA--)
				if (a5z = a64(aA), a60 = a65(aA), a61 = a4c[aA].canvas.width, a60 - a63 <= ks && ks <= a60 + j + a63) {
					if (a5z - a62 <= kr && kr <= a5z + j + a62) return a4c[aA].a5y || (a4c[aA].a5p = !0, a4c[aA].a5y = !0, 0 === a4c[aA].id && b6.gu.o6(a4c[aA].iy)), !0;
					if (0 === a4c[aA].id && a5z + a61 - j - a62 <= kr && kr <= a5z + a61 + a62) return bT.a45(3), b6.gu.h5(aQ.gz(), a4c[aA].iy), !0
				} return !1
	}, this.ih = function() {
		var eY;
		0 === af.lc[aC.eI] || b8.ft.jB(aC.eI) && !aC.gh || (function(eY) {
			if (a4c.length !== eY) return 1;
			for (var aA = eY - 1; 0 <= aA; aA--)
				if (a4c[aA].id !== ac.fe(aC.eI, aA) || a4c[aA].iy !== ac.fj(aC.eI, aA)) return 1;
			return
		}(eY = ac.fd(aC.eI)) && function(eY) {
			var aA, id, iy, es, hC, a4q = [];
			loop: for (aA = 0; aA < eY; aA++) {
				for (id = ac.fe(aC.eI, aA), iy = ac.fj(aC.eI, aA), es = 0; es < a4c.length; es++)
					if (a4c[es].id === id && a4c[es].iy === iy) {
						a4q.push(a4c.splice(es, 1)[0]);
						continue loop
					} hC = ac.fk(aC.eI, aA), a5n(hC = {
					iy: iy,
					hC: hC,
					a5x: hC,
					id: id,
					a5p: !0,
					a5y: !1,
					canvas: null,
					x3: null
				}), a4q.push(hC)
			}
			a4c = a4q
		}(eY), a68(eY))
	}, this.a6B = function(g5) {
		for (var eY = Math.min(a4c.length, ac.fd(aC.eI)), aA = 0; aA < eY; aA++)
			if (a4c[aA].iy === g5) return void(a4c = [])
	}, this.td = function() {
		if (0 !== af.lc[aC.eI] && (!b8.ft.jB(aC.eI) || aC.gh))
			for (var aA = a4c.length - 1; 0 <= aA; aA--) te.drawImage(a4c[aA].canvas, a64(aA), a65(aA))
	}
}

function cC() {
	var a4c, js, a6D, a6E, j, a4P, fontSize, a6F, a6G, a6H, a6I, canvas, x3, lp, a6J;

	function tv(aA) {
		return L(0 === aA ? 102 : 1 === aA ? 103 : 2 === aA ? 104 : 105)
	}

	function a6Q() {
		te.drawImage(canvas, ba.gap + (aC.hN ? ba.gap + bf.a6R() : 0), a6S + 2 * ba.gap)
	}

	function a6K() {
		canvas.width = a4c[0].width + a6H, canvas.height = j + a6H, (x3 = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, a4c[0].width + a6H, j + a6H), x3.translate(Math.floor(a6H / 2), Math.floor(a6H / 2)), x3.lineWidth = a6H, x3.fillStyle = 1 === a4c[0].a6P ? b9.mj : b9.mb, a6T(), x3.fill(), x3.strokeStyle = 1 === a4c[0].a6P ? b9.mV :
			b9.me, a6T(), x3.stroke(), b8.pW.textAlign(x3, 1), b8.pW.textBaseline(x3, 1), x3.fillStyle = 1 === a4c[0].a6P ? b9.mV : b9.me, x3.font = a4P[0], x3.fillText(tv(a4c[0].a6O), Math.floor(a4c[0].width / 2), Math.floor(.72 * a6F[0] * j)), x3
			.font = a4P[1], x3.fillText(a4c[0].pD, Math.floor(a4c[0].width / 2), Math.floor((a6F[0] + .48 * a6F[1]) * j))
	}

	function a6T() {
		x3.beginPath(), x3.moveTo(a6I, 0), x3.lineTo(a4c[0].width - a6I, 0), x3.lineTo(a4c[0].width, a6I), x3.lineTo(a4c[0].width, j - a6I), x3.lineTo(a4c[0].width - a6I, j), x3.lineTo(a6I, j), x3.lineTo(0, j - a6I), x3.lineTo(0, a6I), x3.closePath()
	}
	this.dU = function() {
		js = 4, a6D = a6E = lp = 0, a4c = [], a4P = new Array(2), fontSize = new Array(2), (a6F = new Array(2))[0] = .3, a6F[1] = .7, a6G = new Array(4), canvas = document.createElement("canvas"), a6J = bd.e7 + 2e3, this.resize()
	}, this.resize = function() {
		var aA, i;
		for (j = Math.floor((z.a0.qu() ? .0725 : .058) * h.pY), fontSize[0] = Math.floor(.85 * a6F[0] * j), fontSize[1] = Math.floor(.85 * a6F[1] * j), a4P[0] = b8.pW.rL(1, fontSize[0]), a4P[1] = b8.pW.rL(1, fontSize[1]), aA = a6G.length -
			1; 0 <= aA; aA--) a6G[aA] = this.measureText(tv(aA) + "000", a4P[0]);
		if (a6H = Math.floor(1 + .05 * j), a6I = Math.floor(.2 * j), 0 < a4c.length) {
			for (aA = a4c.length - 1; 0 <= aA; aA--) i = this.measureText(a4c[aA].pD + "00", a4P[1]), a4c[aA].width = i < a6G[aA] ? a6G[aA] : i;
			a6K()
		}
	}, this.ih = function() {
		0 !== js && (4 === js ? bd.e7 > a6J && (js = 0, 1 === aC.ym) && aP.z9(bQ.vH.vI[bQ.eE].name, 3, 1, 9) : (1 === js ? (0 === a6D && (a6K(), a6D = 1e-4), 1 <= (a6D += .002 * (bd.e7 - lp)) && (a6E = 0, js = 2, a6D = 1), bd.dc = !0) : 2 ===
			js ? ((a6E += (bd.e7 - lp) / 1e3) > a4c[0].lu || 1 < a6E && 1 < a4c.length) && (js = 3) : 3 === js && ((a6D -= .002 * (bd.e7 - lp)) <= 0 && (a6D = 0, a4c.shift(), js = 0 < a4c.length ? 1 : 0), bd.dc = !0), lp = bd.e7))
	}, this.measureText = function(pD, a4P) {
		return te.font = a4P, Math.floor(te.measureText(pD).width)
	}, this.iv = function(a6N, aA) {
		this.z9(af.zN[a6N], aA, 1, 0 === aA ? 3 : 7)
	}, this.z9 = function(pD, a6O, a6P, lu) {
		var i;
		pD.length && (i = (i = this.measureText(pD + "00", a4P[1])) < a6G[a6O] ? a6G[a6O] : i, a4c.push({
			pD: pD,
			width: i,
			a6O: a6O,
			a6P: a6P,
			lu: lu
		}), 0 === js) && (a6D = 0, js = 1, lp = bd.e7)
	}, this.td = function() {
		0 !== js && 0 !== a6D && (a6D < 1 ? (te.globalAlpha = a6D, a6Q(), te.globalAlpha = 1) : a6Q())
	}
}

function ck() {
	var j, canvas, x3, a6U, a6V, a6W, a6X, a5p, a6Y, a6Z, a6a, a6b, a5N = !1,
		a1h = (this.hF = !1, this.i = 0, new Array(2)),
		a6c = 0;

	function lP() {
		var i = au.i,
			kV = (a5p = !1, x2(x3, i, j), Math.floor(i / 2));
		1 === a6U ? (x3.fillStyle = b9.my, x3.fillRect(kV, 0, kV, j)) : -1 === a6U && (x3.fillStyle = b9.nE, x3.fillRect(0, 0, kV, j)), x4(x3, i, j, 2);
		var kV = (kV = Math.floor(.25 * j)) < 2 ? 2 : kV,
			a5W = (x3.fillStyle = b9.mk, Math.floor((j - 4) * a6V[1] / a6W[1]));
		0 < a5W && x3.fillRect(2, j - 2 - a5W, kV, a5W), 0 < (a5W = Math.floor((j - 4) * a6V[0] / a6W[0])) && x3.fillRect(i - 2 - kV, j - 2 - a5W, kV, a5W);
		kV = (kV = Math.floor(j / 8)) < 2 ? 2 : kV, x6(x3, Math.floor(.4 * j), 0, j, kV, .5, !1), x6(x3, Math.floor(i - 1.4 * j), 0, j, kV, .5, !0), a5W = 1.1 * j / a1h[0].width;
		x3.imageSmoothingEnabled = !0, x3.setTransform(a5W, 0, 0, a5W, (i - a5W * a1h[0].width) / 2, -.05 * j), x3.drawImage(a1h[+a5N], 0, 0), x3.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a6h() {
		a6b = -1, a5N = ag.a6i(), aM.a3A(257), aM.a5M(a5N), au.hF = !0, a5p = !0, a6Y = 360;
		for (var f0, di = 0, aA = ak.jo - 1; 0 <= aA; aA--) b8.ft.jB(ak.jp[aA]) || (di += af.gL[ak.jp[aA]]);
		a5N ? a6W[0] = Math.max(bJ.dj(3 * di, 4), 1) : aC.hN ? 9 === aC.k4 && 8 === be.k9[bf.l0()] ? a6W[0] = Math.max(di, 1) : (f0 = bJ.dj(100 * bf.a2e(), aC.jX), f0 = bJ.p4(200 - 2 * f0, 40, 100), f0 = bJ.dj(f0 * di, 100), a6W[0] = Math.max(f0,
			1)) : a6W[0] = Math.max(bJ.dj(3 * di, 5), 1), a6W[1] = Math.max(di - a6W[0], 1)
	}

	function a6d() {
		a6a = bd.jk(), a5p = !0, a6Y = a6U = 0, a6X = [], au.hF = !1, aM.yt(247), a6V[0] = a6V[1] = 0, aM.a3A(673)
	}

	function wz() {
		return aQ.a51(aM.a4x()) ? __fx.settings.keybindButtons ? aQ.eh - 2 * (j + ba.gap) : aQ.eh - j - ba.gap : bA.a51(aM.a50()) ? bA.wz() - j - ba.gap : h.j - j - bi.a3n() * ba.gap
	}
	this.dV = function() {
		for (var aA = 0; aA < 2; aA++) a1h[aA] = b8.canvas.xZ(aa.get(3), 8 - aA, b9.nl), a1h[aA] = b8.canvas.a1j(a1h[aA])
	}, this.dU = function() {
		a6a = -1e4, a6Z = a6c = 0, a6b = -1, this.hF = !1, a5p = a5N = !1, a6V = [a6U = a6Y = 0, 0], a6W = [1, 1], a6X = [], this.resize()
	}, this.resize = function() {
		j = aQ.j, this.i = 4 * j, (canvas = document.createElement("canvas")).width = this.i, canvas.height = j, x3 = canvas.getContext("2d", {
			alpha: !0
		}), lP()
	}, this.lO = function() {
		a5p && lP()
	}, this.gl = function(ef, eh) {
		return !!this.hF && !(ef < h.i - this.i - ba.gap || eh < wz() || (aC.gh || this.hG(aC.eI) && (aL.gi && aL.a0x(), b6.gu.hH(ef > h.i - ba.gap - this.i / 2 ? 1 : 0)), 0))
	}, this.ih = function() {
		0 < a6Z ? 0 === --a6Z && a6d() : this.hF ? 180 == --a6Y && 3 * a6V[0] < a6W[0] ? a6d() : a6V[0] >= a6W[0] ? a5N ? bP.yP.yh() : bP.yP.yl() : a6V[1] >= a6W[1] ? a6Z = 4 : a6Y <= 0 && a6d() : ! function() {
			var a6k = bd.jk();
			if (a6k % 40 == 14) {
				if (a6c) return !(a6k < a6c) && !(a6k < a6a + 535) && (a6c = a6k + 1071, b8.ft.a2H()) ? (a6h(), 1) : 0;
				(1 === ak.jo || (aC.hN ? bf.a2e() : af.gL[l3[0]]) >= bJ.dj(96 * aC.jX, 100)) && (a6c = a6k + 535)
			}
			return
		}() && 0 <= a6b && (aM.zA(250, L(106, [af.zN[a6b]]), 673, a6b, b9.me, b9.mb, -1, !0), a6h())
	}, this.yn = function() {
		this.hF && a6V[0] < a6W[0] && a6d()
	}, this.p6 = function(player, a6l) {
		var a6m = L(a6l ? 107 : 108, [af.zN[player]]),
			a6m = (aM.zA(450, a6m, 257, player, a6l ? b9.mw : b9.nB, b9.mb, -1, !0), a6X.push(player), a5p = !0, aC.k6 ? Math.max(a6W[0], a6W[1]) : af.gL[player]),
			a6m = Math.max(a6m, 1);
		a6l ? a6V[0] += a6m : a6V[1] += a6m, player === aC.eI && (a6U = a6l ? 1 : -1)
	}, this.td = function() {
		var eh;
		this.hF && (eh = wz(), te.drawImage(canvas, h.i - this.i - ba.gap, eh))
	}, this.hI = function(player) {
		return !(!aC.k6 && bd.jk() < a6a + 140 || 0 !== a6Y || !b8.ft.gj(1) || !b8.ft.gk(player) || 10 <= jY[player] && !b8.ft.a2a(player, 9))
	}, this.hG = function(g5) {
		if (!b8.ft.gj(1)) return !1;
		if (!b8.ft.gk(g5)) return !1;
		if (!this.hF) return !1;
		for (var aA = a6X.length - 1; 0 <= aA; aA--)
			if (a6X[aA] === g5) return !1;
		return !0
	}, this.hE = function(player) {
		a6b = player
	}
}

function cD() {
	var i, ef, a6n, canvas, x3, hF, i7, a31, a4P, a5p, a6o = 11 / 12;

	function a6q() {
		var a5w = Math.floor(i7 * (i - 2 * a6n)),
			a6t = 1 + Math.floor(.0625 * aQ.j),
			a6u = 1 + Math.floor(.3 * aQ.j),
			a6v = Math.floor(.55 * aQ.j);
		x3.clearRect(0, 0, i, aQ.j), x3.fillStyle = b9.ma, x3.fillRect(0, 0, a6n, aQ.j), x3.fillRect(a6n + a5w, 0, i - a6n - a5w, aQ.j), x3.fillStyle = i7 < 1 / 3 ? "rgba(" + Math.floor(3 * i7 * 130) + ",130,0,0.85)" : i7 < 2 / 3 ? "rgba(130," + (
				130 - Math.floor(3 * (i7 - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (i7 - 2 / 3) * 130) + ",0.85)", x3.fillRect(a6n, 0, a5w, aQ.j), x3.fillStyle = b9.me, x3.fillRect(0, 0, i, 1), x3.fillRect(0, aQ.j - 1, i, 1), x3
			.fillRect(0, 0, 1, aQ.j), x3.fillRect(a6n, 0, 1, aQ.j), x3.fillRect(a6n + a5w, 0, 1, aQ.j), x3.fillRect(i - a6n, 0, 1, aQ.j), x3.fillRect(i - 1, 0, 1, aQ.j), x3.fillRect(Math.floor(.25 * aQ.j) + a6u, Math.floor((aQ.j - a6t) / 2), aQ.j -
				2 * a6u, a6t), x3.fillRect(Math.floor(i - 1.25 * aQ.j) + a6u, Math.floor((aQ.j - a6t) / 2), aQ.j - 2 * a6u - a6u % 2, a6t), x3.fillRect(Math.floor(i - 1.25 * aQ.j) + Math.floor((aQ.j - a6t) / 2), a6u, a6t, aQ.j - 2 * a6u - a6u % 2),
			a31 = b8.ft.i6(aC.eI, aQ.gz()), x3.fillText(b8.zR.y4(a31) + " (" + b8.zR.a2u(100 * i7, +(i7 < .1)) + ")", Math.floor(.5 * i), a6v)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		i7 = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => aQ.a0t(arg1);

	function a70(a1G) {
		return !(1 < a1G && 1 === i7 || (1 < a1G && a1G * i7 - i7 < 1 / 1024 ? a1G = (i7 + 1 / 1024) / i7 : a1G < 1 && i7 - a1G * i7 < 1 / 1024 && (a1G = (i7 - 1 / 1024) / i7), i7 = bJ.p4(i7 * a1G, 1 / 1024, 1), a6q(), 0))
	}

	function a71(kr) {
		return i7 !== (i7 = bJ.p4((kr - ef - a6n) / (i - 2 * a6n), 1 / 1024, 1)) && (a6q(), !0)
	}
	__fx.keybindFunctions.repaintAttackPercentageBar = function() {
		a6q(), bd.dc = !0
	}, this.eh = 0, this.gm = !1, this.dU = function() {
		hF = !aC.gt && !aC.gh, a5p = !1, i7 = .5, a31 = 0, this.gm = !1, this.resize()
	}, this.resize = function() {
		z.a0.qu() && h.i < .8 * h.j ? (this.j = Math.floor(.066 * h.pY), i = h.i - 4 * ba.gap - this.j) : (i = Math.floor((z.a0.qu() ? .65 : .389) * h.pY), i += 12 - i % 12, this.j = Math.floor(i / 12)), a6n = Math.floor(3 * this.j / 2), a4P = b8
			.pW.rL(1, Math.floor(.5 * this.j)), (canvas = document.createElement("canvas")).width = i, __fx.mobileKeybinds.setSize(i, this.j, te), canvas.height = this.j, (x3 = canvas.getContext("2d", {
				alpha: !0
			})).font = a4P, b8.pW.textBaseline(x3, 1), b8.pW.textAlign(x3, 1), this.a6p(), a6q()
	}, this.a6p = function() {
		ef = z.a0.qu() && h.i < .8 * h.j ? this.j + 3 * ba.gap : Math.floor((h.i - i) / 2), this.eh = h.j - this.j - bi.a3n() * ba.gap
	}, this.lO = function() {
		a5p && (a5p = !1, a6q())
	}, this.hF = function() {
		return !(!hF || aL.gi && ef < Math.floor(ba.gap + 5.5 * this.j))
	}, this.a51 = function(a6w) {
		return !!this.hF() && ef + i > h.i - a6w - ba.gap
	}, this.a38 = function() {
		hF = !aC.gh
	}, this.a6d = function() {
		hF = !1
	}, this.gz = function() {
		return bJ.p4(Math.floor(1024 * i7 + .5) - 1, 0, 1023)
	}, this.a0q = function(kr, ks) {
		return this.hF() && ef < kr && kr < ef + i && ks > this.eh
	}, this.gl = function(kr, ks) {
		if (!this.hF()) return !1;
		if (!(__fx.settings.keybindButtons && ks > this.eh - Math.floor(ba.gap / 4) - this.j && ks < this.eh - Math.floor(ba.gap / 4) && __fx.mobileKeybinds.click(kr - ef))) {
			if (!aQ.a0q(kr, ks)) return !1;
			aR.m9 = !1, ! function(r8, kr, ks) {
				if (function(kr, ks) {
						return ef < kr && kr < ef + a6n && ks > aQ.eh
					}(kr, ks)) return a70(a6o);
				if (function(kr, ks) {
						return ef + i - a6n < kr && kr < ef + i && ks > aQ.eh
					}(kr, ks)) return a70(1 / a6o);
				return r8.gm = !0, a71(kr)
			}(this, kr, ks) || (bd.dc = !0)
		}
		return !0
	}, this.a0t = function(mG) {
		0 !== aC.ym && this.hF() && a70(mG) && (bd.dc = !0)
	}, this.a0P = function(deltaY) {
		var mG;
		return !(0 === deltaY || !this.hF()) && a70(mG = 0 < deltaY ? (mG = 400 / (400 + deltaY)) < a6o ? a6o : mG : 1 / a6o < (mG = (400 - deltaY) / 400) ? 1 / a6o : mG)
	}, this.a0M = function(kr) {
		return !!this.gm && a71(kr)
	}, this.a0m = function() {
		this.gm = !1
	}, this.ih = function() {
		this.hF() && a31 !== b8.ft.i6(aC.eI, this.gz()) && (a5p = !0)
	}, this.td = function() {
		this.hF() && (te.drawImage(canvas, ef, this.eh), __fx.settings.keybindButtons) && __fx.mobileKeybinds.draw(te, ef, this.eh)
	}
}

function cu() {
	var canvas, x3, a72, font, a73 = 0,
		a74 = !1,
		a75 = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		a76 = 5;

	function a7C() {
		if (a74) {
			var aA, eY = a75.length,
				a6v = Math.floor(.5 * a72.j),
				j = eY * a6v,
				ef = Math.floor(Math.floor(a72.ef) + .3 * a72.i - .5),
				eh = Math.floor(Math.floor(a72.eh) - j),
				i = Math.floor(.4 * a72.i + 2.5);
			for (te.fillStyle = b9.ma, te.fillRect(ef, eh, i, j), te.fillStyle = b9.n3, te.fillRect(ef, eh + a76 * a6v, i, a6v), te.fillStyle = b9.me, te.fillRect(ef, eh, 2, j), te.fillRect(ef, eh, i, 2), te.fillRect(ef + i - 2, eh, 2, j), aA =
				1; aA < eY; aA++) te.fillRect(ef, eh + aA * a6v, i, 2);
			for (te.fillStyle = b9.me, b8.pW.textAlign(te, 1), b8.pW.textBaseline(te, 1), te.font = b8.pW.rL(0, .6 * a6v), ef += .5 * i, aA = 0; aA < eY; aA++) te.fillText(a7K(aA), ef, eh + (aA + .6) * a6v)
		}
		te.drawImage(canvas, Math.floor(a72.ef), Math.floor(a72.eh))
	}

	function lP(r8) {
		var ef, m4, m5, a6v;
		x3.clearRect(0, 0, Math.floor(a72.i), Math.floor(a72.j)), x3.fillStyle = b9.ma, x3.fillRect(0, 0, Math.floor(a72.i), Math.floor(a72.j)), aC.m7 && (x3.fillStyle = b9.n3, x3.fillRect(0, 0, Math.floor(.3 * a72.i), Math.floor(a72.j))), x3
			.fillStyle = b9.me, x3.fillText("Hide UI", .15 * a72.i, .5 * a72.j), x3.fillRect(Math.floor(.3 * a72.i - .5), 0, 2, Math.floor(a72.j)), ef = .5 * a72.i, x3.fillText("Replay Speed", ef, .31 * a72.j), x3.fillText(a7K(a76), ef, .69 * a72.j),
			x3.fillRect(Math.floor(.7 * a72.i - .5), 0, 2, Math.floor(a72.j)), r8.a3f ? (ef = Math.floor(.02 * a72.i), r8 = Math.floor(.025 * a72.i), m4 = Math.floor(.85 * a72.i - ef - .5 * r8), m5 = Math.floor(.25 * a72.j), a6v = Math.floor(a72.j) -
				2 * m5, x3.fillRect(m4, m5, ef, a6v), x3.fillRect(m4 + ef + r8, m5, ef, a6v)) : function() {
				var i = Math.floor(.46 * a72.j),
					j = Math.floor(.23 * a72.j),
					ef = Math.floor(.85 * a72.i - .5 * i + i / 12),
					eh = Math.floor(.5 * a72.j - j);
				x3.beginPath(), x3.moveTo(ef, eh), x3.lineTo(ef + i, eh + j), x3.lineTo(ef, eh + (j << 1)), x3.fill()
			}(), x3.fillRect(0, 0, Math.floor(a72.i), 2), x3.fillRect(0, 0, 2, Math.floor(a72.j)), x3.fillRect(0, Math.floor(a72.j) - 2, Math.floor(a72.i), 2), x3.fillRect(Math.floor(a72.i - 2), 0, 2, Math.floor(a72.j))
	}

	function a7K(aA) {
		return 5 === aA ? "Normal" : "" + a75[aA]
	}
	this.a3f = !1, this.dU = function() {
		aC.gh && (a76 = 5, this.a3f = !1, a74 = !1, a72 = new q8([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.a77 = function() {
		return a75[a76]
	}, this.wz = function() {
		return a72.eh
	}, this.a51 = function(a6w) {
		return !!aC.gh && a72.ef + a72.i > h.i - a6w - ba.gap
	}, this.resize = function() {
		aC.gh && (a72.resize(), a72.eh -= (bi.a3n() - 1) * ba.gap, font = b8.pW.rL(0, .3 * a72.j), (canvas = document.createElement("canvas")).width = Math.floor(a72.i), canvas.height = Math.floor(a72.j), (x3 = canvas.getContext("2d", {
			alpha: !0
		})).font = font, b8.pW.textAlign(x3, 1), b8.pW.textBaseline(x3, 1), lP(this))
	}, this.a0w = function(a78) {
		0 === aC.ym || s.hF() || a78 !== aC.m7 && (aC.m7 = a78, bf.resize(), bd.dc = !0, aC.gh) && (a73 = bd.e7 + 2e3, lP(this))
	}, this.gl = function(ef, eh) {
		if (!aC.gh) return !1;
		if (ef < a72.ef || eh < a72.eh || ef > a72.ef + a72.i) return a74 && function(r8, ef, eh) {
			var eY = a75.length,
				a6v = Math.floor(.5 * a72.j),
				j = eY * a6v,
				m4 = Math.floor(Math.floor(a72.ef) + .3 * a72.i - .5),
				j = Math.floor(Math.floor(a72.eh) - j),
				i = Math.floor(.4 * a72.i + 2.5);
			return a74 = !1, bd.dc = !0, ef < m4 || m4 + i < ef || eh < j || (a76 = a7B(0, Math.floor((eh - j) / a6v), eY - 1), lP(r8)), !0
		}(this, ef, eh);
		if ((ef -= a72.ef) < .3 * a72.i) a74 = !1, this.a0w(!aC.m7);
		else {
			if (ef < .7 * a72.i) return a74 = !a74, bd.dc = !0;
			this.a0y(!1)
		}
		return !0
	}, this.a0y = function(a7A) {
		2 === aC.ym ? (this.a0w(!1), s.t(3)) : (a74 = !1, this.a3f = !this.a3f, this.a3f ? (aL.gi && aL.a0x(), z.a0.setState(1)) : a7A || aL.a4V(), bd.dc = !0, lP(this))
	}, this.a0z = function() {
		this.a3f = !1, aL.a4V(), bd.dc = !0, lP(this)
	}, this.a0f = function(ef, eh) {
		return !!aC.m7 && (0 <= aL.gl(ef, eh) || (aC.gh ? ((bd.e7 > a73 || !this.gl(ef, eh)) && aR.gl(ef, eh), bd.dc = !0, a73 = bd.e7 + 2e3) : aR.gl(ef, eh)), !0)
	}, this.ih = function() {
		aC.gh && aC.m7 && bd.e7 > a73 - 1e3 && bd.e7 < a73 && (bd.dc = !0)
	}, this.yu = function() {
		aC.gh && (this.a3f = !1, bd.dc = !0, lP(this))
	}, this.td = function() {
		if (aC.gh) {
			if (aC.m7) {
				if (bd.e7 > a73) return;
				if (bd.e7 > a73 - 1e3) return te.globalAlpha = a7B(0, (1e3 - (bd.e7 - (a73 - 1e3))) / 1e3, 1), a7C(), void(te.globalAlpha = 1)
			}
			a7C()
		}
	}
}

function cE() {
	var a7L, a7M, i, ef, eh, a7N, a7O;
	this.dU = function() {
		a7L = new Array(2), a7M = new Array(2), this.m9 = !1, a7O = a7N = iA = i8 = 0, i9 = 1, this.resize()
	}, this.resize = function() {
		i = (i = Math.floor((z.a0.qu() ? .072 : .0502) * h.pY)) < 8 ? 8 : i;
		for (var aA = 1; 0 <= aA; aA--) a7L[aA] = document.createElement("canvas"), a7L[aA].width = i, a7L[aA].height = i, a7M[aA] = a7L[aA].getContext("2d", {
			alpha: !0
		});
		this.a6p(),
			function() {
				for (var a7d = Math.floor(1 + i / 20), aA = 1; 0 <= aA; aA--) a7M[aA].clearRect(0, 0, i, i), a7M[aA].fillStyle = b9.mX, a7M[aA].beginPath(), a7M[aA].arc(i / 2, i / 2, i / 2 - a7d, 0, 2 * Math.PI), a7M[aA].fill(), a7M[aA]
					.lineWidth = a7d, a7M[aA].fillStyle = b9.me, a7M[aA].strokeStyle = b9.me, a7M[aA].beginPath(), a7M[aA].arc(i / 2, i / 2, i / 2 - a7d, 0, 2 * Math.PI), a7M[aA].stroke(), x6(a7M[aA], 0, 0, i, a7d, .3, 0 === aA)
			}()
	}, this.wy = function() {
		return -i8 / i9
	}, this.wz = function() {
		return -iA / i9
	}, this.mJ = function(a7S, hq) {
		i8 = i9 * a7S - hq
	}, this.mK = function(a7T, hr) {
		iA = i9 * a7T - hr
	}, this.gl = function(a7R, a52) {
		return aC.m7 || ! function(a7R, a52) {
			return Math.pow(a7R - (ef + i / 2), 2) + Math.pow(a52 - (eh + i / 2), 2) < i * i / 4 || Math.pow(a7R - (ef + i / 2), 2) + Math.pow(a52 - (eh + 2 * i), 2) < i * i / 4
		}(a7R, a52) || bh.km.data[8].value ? (aG.mM() && (this.m9 = !0, a7N = a7R, a7O = a52), !1) : a52 < eh + 1.25 * i ? this.a0P(Math.floor(h.i / 2), Math.floor(h.j / 2), -200) : this.a0P(Math.floor(h.i / 2), Math.floor(h.j / 2), 200)
	}, this.a0M = function(a7R, a52) {
		var a7U, a7V, ht, hw;
		return !aG.mM() || (a7U = i8, a7V = iA, i8 += ht = a7N - a7R, iA += hw = a7O - a52, ae.a0M(ht, hw), this.a7W(), a7N = a7R, a7O = a52, a7U !== i8) || a7V !== iA
	}, this.a0P = function(kr, ks, deltaY) {
		var mG;
		if (aG.mM()) {
			if (0 < deltaY) mG = (mG = 500 / (500 + deltaY)) < .5 ? .5 : mG;
			else {
				if (!(deltaY < 0)) return !1;
				mG = 2 < (mG = (500 - deltaY) / 500) ? 2 : mG
			}
			this.a7X(kr, ks, mG), bd.dc = !0
		}
		return !0
	}, this.a7X = function(ef, eh, eC) {
		var a1G;
		eC = a1G = (a1G = 1024 < (a1G = eC) * i9 ? 1024 / i9 : a1G) * i9 < .125 ? .125 / i9 : a1G, ae.zoom(eC, ef, eh),
			function(a1G, kr, ks) {
				i9 *= a1G, i8 = (i8 + kr) * a1G - kr, iA = (iA + ks) * a1G - ks, aR.a7W()
			}(eC, ef, eh)
	}, this.a7W = function() {
		var a7a = h.i / 16,
			hb = 0,
			a7b = h.j / 16,
			hc = 0;
		i8 < -h.i + a7a && (hb = -h.i + a7a - i8), i8 > i9 * bQ.ej - a7a && (hb = i9 * bQ.ej - a7a - i8), iA < -h.j + a7b && (hc = -h.j + a7b - iA), iA > i9 * bQ.ek - a7b && (hc = i9 * bQ.ek - a7b - iA), i8 += hb, iA += hc, bY.mL(), ae.a7c(hb,
			hc)
	}, this.a6p = function() {
		ef = h.i - i - ba.gap, eh = Math.floor(h.j / 2 - 1.25 * i)
	}, this.td = function() {
		bh.km.data[8].value || (te.drawImage(a7L[0], ef, eh), te.drawImage(a7L[1], ef, Math.floor(eh + 3 * i / 2)))
	}
}

function cF() {
	var g, a7e, a7f, a7g, gap, a7h, a7i, a7j, a7k, a7l, a4P, a7m, gc, a7n, a5w, a7o, a7p, a7q;

	function a7u() {
		a7g = Math.floor(.2 * (z.a0.qu() ? .07 : .035) * h.pY), a7g = a4z(z.a0.qu() ? 3 : 1, a7g);
		var a7x = h.i / (g.length + gap);
		a7g = a7g < a7x ? a7x : a7g, a5w = Math.floor((1 - gap) * a7g), a7e = 0, a7y()
	}

	function a7y() {
		a7e = (a7e = a7e < -20 ? -20 : a7e) > (g.length - 15) * a7g ? (g.length - 15) * a7g : a7e, a7i = Math.floor(a7e / a7g), a7j = (a7j = a7i + Math.floor(h.i / a7g)) > g.length - 1 ? g.length - 1 : a7j, a7i = (a7i = a7j < a7i ? a7j : a7i) < 0 ?
			0 : a7i;
		var kV = a7j;
		a7h = a7f / g[kV];
		for (var aA = a7j - 1; a7i <= aA; aA--) g[aA] > g[kV] && (kV = aA, a7h = a7f / Math.pow(g[aA], a7n))
	}

	function a81(ef) {
		ef = Math.floor((a7e + h.i - ef - gap * a7g) / a7g);
		return (ef = ef < -1 ? -1 : -1 === ef ? 0 : ef > g.length - 1 ? -1 : ef) !== a7k && (a7k = ef, -1 === a7o && 0 === a7k && aS.a7r && (a7o = setInterval(a82, 100)), 1)
	}

	function a83(aA) {
		var a5m = Math.floor(a7h * Math.pow(g[aA], a7n));
		te.fillRect(a7e + h.i - (aA + 1) * a7g, h.j - a5m, a5w, a5m)
	}

	function a82() {
		var g5;
		0 !== (a7k = 8 === aZ.a00() ? -1 : a7k) ? (a7p = (new Date).getTime(), clearInterval(a7o), a7o = -1) : (g5 = g[1] / 864e3, -1 !== a7p && (g5 += ((new Date).getTime() - a7p) * g[1] / 864e5, a7p = -1), 0 < g5 && (g[0] += Math.floor(g5), bd
			.dc = !0))
	}
	this.a7r = !1, this.dU = function() {
		a7p = a7o = -1, a7k = -(a7n = 1), this.a7s = !1, gc = 0, a7m = new Date, a7e = 0, gap = .3, (a7q = []).push({
			g0: "Plateau A",
			eY: 0,
			e: 57
		}), a7q.push({
			g0: "Max A",
			eY: 1,
			e: 1
		}), a7q.push({
			g0: "Black Friday",
			eY: 15,
			e: 15
		}), a7q.push({
			g0: "Max B",
			eY: 19,
			e: 19
		}), a7q.push({
			g0: "Max C",
			eY: 44,
			e: 44
		}), a7q.push({
			g0: "First Android Version",
			eY: 58,
			e: 58
		}), a7q.push({
			g0: "Max D",
			eY: 67,
			e: 67
		}), a7q.push({
			g0: "The iFrame Explosion",
			eY: 98,
			e: 99
		}), a7q.push({
			g0: "The 155-Day Uptrend",
			eY: 58,
			e: 213
		}), a7q.push({
			g0: "Max E",
			eY: 213,
			e: 213
		}), a7q.push({
			g0: "Plateau B",
			eY: 214,
			e: 259
		}), a7q.push({
			g0: "Turbulent Times",
			eY: 260,
			e: 344
		}), a7q.push({
			g0: "Max F",
			eY: 262,
			e: 262
		}), a7q.push({
			g0: "Max G",
			eY: 282,
			e: 282
		}), a7q.push({
			g0: "Max H",
			eY: 333,
			e: 333
		}), a7q.push({
			g0: "The 19-Day Downtrend",
			eY: 283,
			e: 301
		}), a7q.push({
			g0: "Plateau C",
			eY: 345,
			e: 385
		}), a7q.push({
			g0: "The Alliance Ascent",
			eY: 386,
			e: 395
		}), a7q.push({
			g0: "Max I",
			eY: 395,
			e: 395
		}), a7q.push({
			g0: "First iOS Version",
			eY: 411,
			e: 411
		}), a7q.push({
			g0: "Plateau D",
			eY: 396,
			e: 453
		}), a7q.push({
			g0: "The TikTok Revolution",
			eY: 454,
			e: 470
		}), a7q.push({
			g0: "Max J",
			eY: 456,
			e: 456
		}), a7q.push({
			g0: "Max K",
			eY: 472,
			e: 472
		}), a7q.push({
			g0: "Max L",
			eY: 478,
			e: 478
		}), a7q.push({
			g0: "YT Drew",
			eY: 471,
			e: 485
		}), a7q.push({
			g0: "Plateau E",
			eY: 485,
			e: 600
		}), a7q.push({
			g0: "Uptrend A",
			eY: 600,
			e: 613
		}), a7q.push({
			g0: "Max M",
			eY: 613,
			e: 613
		}), a7q.push({
			g0: "Downtrend A",
			eY: 614,
			e: 635
		}), a7q.push({
			g0: "Plateau F",
			eY: 636,
			e: 737
		}), a7q.push({
			g0: "End of Record",
			eY: 738,
			e: 738
		}), g = [208644377, 208644377, 208644377, 206964709, 205156594, 250680803, 249089835, 234476552, 252346209, 263196406, 270821533, 291436400, 294907103, 288866179, 297960890, 310165928, 323215738, 326005712, 312078872, 282668674,
			268883231, 261100885, 247870209, 240175828, 231697235, 240614202, 237647174, 230525212, 228239099, 226070733, 215992739, 216961676, 231079584, 235793502, 234032821, 228402462, 216942832, 211862670, 209792418, 220626495, 221020535,
			228198633, 226910806, 227687295, 210969547, 197393506, 205629061, 215820135, 213694935, 209455870, 215822584, 215130299, 214034219, 229190414, 230055290, 225313791, 223398523, 231870169, 226224938, 218242706, 235891029, 210498444,
			195329116, 187676007, 183432634, 175752106, 170096205, 173369342, 171454357, 185810310, 189616577, 190788861, 179291487, 179513980, 189122353, 188375572, 202060722, 203256609, 197948652, 191950448, 194693217, 196335490, 195911919,
			202264283, 199251620, 193699336, 188441210, 183419345, 195919988, 198126823, 199780788, 197440550, 190144884, 179139362, 166469099, 178827877, 183801980, 197952484, 188875861, 185919783, 186237411, 182504952, 183532013, 174109004,
			178159701, 161031347, 194622838, 205645645, 200496457, 194773327, 194546481, 207893217, 210920126, 213376144, 173859897, 154326886, 158943729, 166772975, 175066046, 177406405, 179018562, 185986119, 186747583, 200787939, 208959937,
			161987576, 185512400, 185788899, 185957487, 194591063, 215634157, 230579314, 237637383, 240518707, 221398239, 225230795, 224891285, 211292916, 216944626, 219436299, 226523918, 232405568, 232166426, 216921782, 244767964, 257278946,
			243548100, 237386943, 242802627, 229717622, 168149709, 259971896, 267057767, 257606635, 209857364, 126035568, 129833237, 151312703, 197006695, 73120657, 37551024, 39229432, 29517736, 29382631, 31512045, 42652097, 47363019,
			49624906, 46687310, 33767120, 31230439, 34211643, 43094531, 53747053, 55380682, 49779117, 47748833, 21038802, 20406484, 24523793, 26566139, 25284142, 26825553, 23497443, 20291865, 17765022, 21291320, 21106123, 19050128, 18324426,
			19044067, 19594721, 19347845, 23365124, 24186529, 19824881, 17952812, 17093838, 17328579, 17607296, 21284737, 22551012, 20471281, 19350848, 19654931, 18725460, 18641926, 23301269, 25178902, 21617041, 21433781, 21078957, 19526047,
			18665064, 21394401, 21575049, 19286677, 18018450, 17550775, 17282428, 17055509, 19348704, 20177845, 19766211, 19088037, 18118802, 18269428, 18500614, 19130220, 19351798, 19205188, 19489961, 20233286, 20726811, 23245145, 26158741,
			26096642, 24424181, 23690661, 22967492, 21098008, 20325973, 19431907, 17008295, 15583096, 14209752, 14307184, 13541498, 12822679, 13154311, 12161194, 12956543, 11435697, 13428928, 12262514, 12858519, 12405344, 12884309, 14410011,
			15556681, 15260178, 14863807, 13861458, 15176144, 14089849, 13063987, 12378716, 13061867, 13118900, 13112653, 13137263, 13062253, 13126875, 14136833, 14711852, 14341250, 11888270, 13137006, 12830841, 12516937, 12783789, 13139393,
			12931e3, 12857582, 13677329, 13892963, 13171528, 14135236, 14640750, 15677970, 16758399, 19125177, 17723446, 16469484, 17032884, 19792603, 21426397, 22032534, 20271251, 16190176, 16772813, 17675977, 18764026, 18346209, 19576834,
			20989792, 21350839, 14696885, 14653075, 14677999, 14958759, 14210260, 15488352, 15623604, 14473144, 12823062, 14869909, 15142264, 15567014, 17896725, 20081347, 17765006, 12763925, 13523610, 13979983, 15080856, 17116394, 18483238,
			18084320, 12100282, 12221529, 12441579, 12058220, 12441689, 12821546, 13401583, 13009895, 12271066, 12210094, 12355642, 13737115, 14257807, 14904897, 14072161, 15640387, 15721803, 16397970, 19254839, 21608906, 20527471, 16596206,
			15550563, 14385591, 15547262, 13174302, 12462319, 13000669, 12832541, 12186376, 13150940, 14654379, 14299386, 14158528, 15185971, 12444117, 14253445, 15049053, 14123310, 16892853, 15963931, 11858727, 10012703, 9478191, 9193460,
			8851082, 9298848, 9638204, 9442496, 8653593, 9093527, 8530977, 8809114, 9609612, 9906912, 9615756, 9477879, 9713075, 9126583, 8949378, 9577595, 10180186, 9858705, 9534213, 9184660, 8889455, 8311313, 9738346, 9772164, 9157791,
			8445413, 8467279, 8756002, 9257951, 10213536, 10620530, 10352296, 9350531, 9118709, 9614237, 9692491, 10801215, 10984804, 9542309, 9609538, 9391430, 9515517, 10064494, 11061684, 10408005, 9794768, 9297643, 9275992, 9394076,
			9716084, 10045958, 9715229, 9091248, 10010584, 9845528, 9532588, 8986320, 9037708, 9820996, 8953464, 9074064, 8644692, 8025308, 8832112, 10785788, 10539708, 8908744, 8331216, 8858100, 8626840, 7666284, 8503372, 8855308, 6762540,
			6414076, 6786692, 6445532, 6262192, 5918176, 5864376, 5464928, 5384996, 5942760, 5261972, 5404612, 6184860, 6312948, 5815660, 5208552, 4734392, 4538784, 4661404, 5145524, 4819368, 4369224, 4458584, 4289956, 3538288, 3517544,
			3871876, 3388048, 3344796, 3089228, 2863676, 2268964, 2160500, 2580004, 2244356, 2018408, 1688912, 1945368, 1796332, 1619260, 2060292, 1597656, 1472788, 1306208, 1171408, 1021096, 1109312, 1241276, 1305092, 1142748, 1157700,
			991984, 786992, 786396, 1043956, 1029320, 860500, 834824, 841912, 736464, 690328, 878376, 907232, 794932, 646388, 752600, 672836, 636212, 794108, 746856, 642928, 671328, 493568, 458168, 428776, 464736, 371412, 314568, 225472,
			252072, 227604, 251048, 269184, 174136, 825576, 536060, 165952, 153252, 180036, 149616, 138472, 157832, 188152, 180108, 134076, 70960, 89236, 111428, 60520, 74620, 73424, 74720, 71584, 94432, 62572, 66420, 32532, 34452, 41048,
			51372, 61916, 43236, 55172, 26776, 47e3, 57424, 93100, 64980, 37288, 44296, 34588, 40700, 29200, 24604, 18184, 42660, 31404, 38096, 18556, 17388, 19568, 17604, 22328, 40300, 39392, 33440, 17960, 7984, 11612, 67700, 14108, 22444,
			19756, 9436, 16864, 14400, 17216, 14436, 8612, 15952, 29764, 18748, 16348, 23976, 22080, 20268, 20984, 9480, 30736, 15996, 9484, 9392, 9716, 21540, 57428, 24788, 18728, 8528, 5972, 20560, 18268, 28088, 15364, 15300, 29348, 30992,
			20564, 34420, 16716, 14424, 12360, 15124, 51172, 13176
		], this.resize()
	}, this.resize = function() {
		a7f = Math.floor(.15 * h.j), a7l = (a7l = Math.floor((z.a0.qu() ? .018 : .0137) * h.pY)) < 2 ? 2 : a7l, a4P = b8.pW.rL(1, a7l), a7u()
	}, this.a7v = function(a7w) {
		var aA;
		for (this.a7r = !0, aA = 0; aA < a7w.length; aA++) g.unshift(a7w[aA]);
		a7u(), bd.dc = !0
	}, this.a7z = function() {
		a7y()
	}, this.a0M = function(ef, eh) {
		eh > h.j - .6 * a7f ? this.a7s ? ef !== gc && (a7e += ef - gc, gc = ef, a7y(), a81(ef), this.a7s = -1 !== a7k, bd.dc = !0) : a81(ef) && (bd.dc = !0) : this.qW()
	}, this.qW = function() {
		-1 !== a7k && (this.a7s = !1, a7k = -1, bd.dc = !0)
	}, this.a0P = function(ef, deltaY) {
		-1 !== a7k && (a7e += Math.floor(deltaY), a7y(), a81(ef), bd.dc = !0)
	}, this.gl = function(ef, eh) {
		this.a0M(ef, eh), -1 !== a7k && (gc = ef, this.a7s = !0)
	}, this.a0l = function() {
		-1 !== a7k && (this.a7s = !1)
	}, this.td = function() {
		te.fillStyle = b9.mh;
		for (var a85, month, di, rt, a88, a89, m5, a8A, a8B, aA = a7j; a7i <= aA; aA--) a83(aA);
		this.a7r && 0 === a7i && (te.fillStyle = b9.nE, a83(0)), -1 !== a7k && (te.fillStyle = b9.mg, a83(a7k)), -1 !== a7k && (te.font = a4P, b8.pW.textBaseline(te, 2), (di = new Date).setTime(a7m.getTime() - 1e3 * a7k * 60 * 60 * 24), month =
			"month", a85 = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(di), a85 = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(di)), a85 = a85 + ", " + di.getUTCDate() + " " + month + " " + di.getFullYear(), month = 1 === g[a7k] ? L(109) : L(110), month = b8.zR.y4(g[a7k]) + " " + month, di = Math.floor(te.measureText(a85).width), rt = Math
			.floor(te.measureText(month).width), a88 = Math.floor(.5 * (di + a7l)), a89 = (a89 = a7e + h.i - (a7k + 1) * a7g) < a88 ? a88 : a89 > h.i - a88 ? h.i - a88 : a89, m5 = h.j - Math.floor(a7h * Math.pow(g[a7k], a7n)), a8A = Math
			.floor(1.1 * a7l), a8B = m5 > h.j - a8A ? h.j - a8A : m5, te.fillStyle = b9.mb, te.fillRect(h.i - rt - a7l, a8B - a8A, rt + a7l, a8A), te.fillRect(a89 - a88, h.j - a8A, di + a7l, a8A), te.fillStyle = b9.me, b8.pW.textAlign(te, 2),
			te.fillText(month, Math.floor(h.i - .5 * a7l), a8B),
			function(m5, a8A) {
				for (var rs, kX = -1, dx = g.length - a7k - 1, aA = a7q.length - 1; 0 <= aA; aA--) dx >= a7q[aA].eY && dx <= a7q[aA].e && (-1 === kX || a7q[aA].e - a7q[aA].eY < a7q[kX].e - a7q[kX].eY) && (kX = aA); - 1 !== kX && (rs = Math
					.floor(te.measureText(a7q[kX].g0).width), te.fillStyle = b9.mb, te.fillRect(h.i - rs - a7l, m5, rs + a7l, a8A), te.fillStyle = b9.me, te.fillText(a7q[kX].g0, Math.floor(h.i - .5 * a7l), m5 + a8A))
			}(a8B - 2 * a8A, a8A), b8.pW.textAlign(te, 1), te.fillText(a85, a89, h.j), te.strokeStyle = b9.mi, te.lineWidth = 1, te.beginPath(), te.moveTo(0, m5), te.lineTo(h.i, m5), te.closePath(), te.stroke())
	}
}

function cG() {
	var a4P, i, eh, a8D, a8E, canvas, x3, a5p, a2N, a8F, a8G, a8H, a8I;
	this.ef = 0, this.j = 0, this.dU = function() {
		a8E = aC.a3G, a8G = "rgba(0,100,0,0.8)", a8H = "rgba(150,0,0,0.8)", a5p = a8F = !0, a2N = af.gZ[aC.eI], this.resize()
	}, this.resize = function() {
		i = Math.floor((z.a0.qu() ? .305 : .24) * h.pY), this.j = Math.floor(.5 + .13 * i), i = Math.floor(6 * this.j), a4P = b8.pW.rL(1, Math.floor(.8 * this.j)), a8I = Math.floor(.5 * this.j), bQ.vN.font = a4P, eh = ba.gap, a8D = Math.floor(1 +
			.13 * this.j), (canvas = document.createElement("canvas")).width = i, canvas.height = this.j, (x3 = canvas.getContext("2d", {
			alpha: !0
		})).font = a4P, b8.pW.textBaseline(x3, 1), b8.pW.textAlign(x3, 1), this.a8J()
	}, this.a6C = function() {
		return z.a0.qu() && h.i < 1.2 * h.j
	}, this.a6p = function() {
		this.a6C() ? this.ef = h.i - i - ba.gap : this.ef = Math.floor(aU.a8K() + (h.i - aU.a8K() - aV.i - i) / 2 - .5 * ba.gap)
	}, this.lO = function() {
		a5p && (a5p = !1, this.a8J())
	}, this.a8J = function() {
		x3.clearRect(0, 0, i, this.j), x3.fillStyle = a8F ? a8G : a8H, x3.fillRect(0, 0, i, this.j), x3.fillStyle = b9.mg, this.a8L(), this.a8M(), x3.fillStyle = af.gZ[aC.eI] >= ad.jT(aC.eI) ? b9.nB : b9.me, x3.fillText(b8.zR.y4(a2N), Math.floor(
			i / 2), a8I), x3.fillStyle = b9.me, x3.fillRect(0, 0, i, 1), x3.fillRect(0, 0, 1, this.j), x3.fillRect(0, this.j - 1, i, 1), x3.fillRect(i - 1, 0, 1, this.j)
	}, this.a8L = function() {
		var et = bd.jk() % 100,
			et = (et = 9 - bJ.dj(et -= et % 10, 10), Math.floor(et * (this.j - a8D) / 9));
		x3.fillRect(0, et, a8D, this.j - et), x3.fillRect(i - a8D, et, a8D, this.j - et)
	}, this.a8M = function() {
		x3.fillRect(a8D, this.j - a8D, Math.floor((i - 2 * a8D) * af.gZ[aC.eI] / a8E), a8D)
	}, this.ih = function() {
		var g5 = aC.eI;
		b8.ft.gk(g5) && (g5 = af.gZ[g5] - af.a2M[g5], a2N !== g5 ? (a8E = a4z(g5, a8E), a8F = a2N < g5 && 10 <= g5, a2N = g5, a5p = !0) : bd.jk() % 10 == 9 && (a5p = !0))
	}, this.td = function() {
		0 === af.lc[aC.eI] || aC.gt || 2 === af.a2E[aC.eI] || te.drawImage(canvas, this.ef, eh)
	}
}

function cH() {
	var a8N, a8O, a8P, a8Q, a8R, a8S, a8T, a8U, a8V, a8W, a8X, a8Y, a8Z, a8a, a8b, a8c, a8d, a8e, a8f, a8g, a8h, a8i, position, a8j, a8k, a8l, a8m, a8n = 1,
		a8o = 1,
		a8p = "";
	var leaderboardHasChanged = true;
	this.playerPos = aC.eI;
	__fx.leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		__fx.leaderboardFilter.filteredLeaderboard = __fx.leaderboardFilter.playersToInclude
			.map(id => jY[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = __fx.leaderboardFilter.filteredLeaderboard.indexOf(jY[aC.eI]);
	}

	function a8r() {
		a8T.clearRect(0, 0, a8N, a6S),
			a8T.fillStyle = b9.nU,
			a8T.fillRect(0, 0, a8N, a8Y),
			a8T.fillStyle = b9.ma,
			a8T.fillRect(0, a8Y, a8N, a6S - a8Y);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			jY[aC.eI]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) a8i = -1;
		if (__fx.leaderboardFilter.enabled && a8i >= __fx.leaderboardFilter.filteredLeaderboard.length) a8i = -1;
		playerPos >= position && a8t(playerPos - position, b9.n3),
			0 !== jY[aC.eI] && 0 === position && a8t(0, b9.nZ),
			-1 !== a8i && a8t(a8i, b9.mf),
			a8T.fillStyle = b9.ma,
			//console.log("drawing", a8i),
			a8T.clearRect(0, a6S - __fx.leaderboardFilter.tabBarOffset, a8N, __fx.leaderboardFilter.tabBarOffset);
		a8T.fillRect(0, a6S - __fx.leaderboardFilter.tabBarOffset, a8N, __fx.leaderboardFilter.tabBarOffset);
		a8T.fillStyle = b9.me,
			a8T.fillRect(0, a8Y, a8N, 1),
			a8T.fillRect(0, a6S - __fx.leaderboardFilter.tabBarOffset, a8N, 1),
			__fx.leaderboardFilter.drawTabs(a8T, a8N, a6S - __fx.leaderboardFilter.tabBarOffset, b9.n3),
			a8T.fillRect(0, 0, a8N, ba.xn),
			a8T.fillRect(0, 0, ba.xn, a6S),
			a8T.fillRect(a8N - ba.xn, 0, ba.xn, a6S),
			a8T.fillRect(0, a6S - ba.xn, a8N, ba.xn), a8T.font = a8O, b8.pW.textBaseline(a8T, 1), b8.pW.textAlign(a8T, 1), a8T.fillText(a8p, Math.floor((a8N + a8Y - 22) / 2), Math.floor(a8W + a8P / 2));
		__fx.playerList.drawButton(a8T, 12, 12, a8Y - 22);
		var er, g6 = playerPos < position + a8R - 1 ? 1 : 2;

		if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - a8R)
				position = (result.length > a8R ? result.length : a8R) - a8R;
			//if (position >= result.length) position = result.length - 1;
			for (a8T.font = a8Q, b8.pW.textAlign(a8T, 0), er = a8R - g6; 0 <= er; er--) {
				const pos = result[er + position];
				if (pos !== undefined)
					a8u(l3[pos]), a8v(er, pos, l3[pos]);
			}
			for (b8.pW.textAlign(a8T, 2), er = a8R - g6; 0 <= er; er--) {
				const pos = result[er + position];
				if (pos !== undefined)
					a8u(l3[pos]), a8w(er, l3[pos]);
			}
		} else {
			for (a8T.font = a8Q, b8.pW.textAlign(a8T, 0), er = a8R - g6; 0 <= er; er--)
				a8u(l3[er + position]), a8v(er, er + position, l3[er + position]);
			for (b8.pW.textAlign(a8T, 2), er = a8R - g6; 0 <= er; er--)
				a8u(l3[er + position]), a8w(er, l3[er + position]);
		}
		2 == g6 && (a8u(aC.eI), b8.pW.textAlign(a8T, 0), a8v(a8R - 1, jY[aC.eI], aC.eI), b8.pW.textAlign(a8T, 2), a8w(a8R - 1, aC.eI)), 0 === position && (g6 = .7 * a8Z / aa.get(4).height, a8T.setTransform(g6, 0, 0, g6, Math.floor(a8a + .58 * a8Z +
			.5 * g6 * aa.get(4).width), Math.floor(a8W + a8P + .4 * a8Z)), a8T.imageSmoothingEnabled = !0, a8T.drawImage(aa.get(4), -Math.floor(aa.get(4).width / 2), -Math.floor(aa.get(4).height / 2)), a8T.setTransform(1, 0, 0, 1, 0, 0))
	}

	function a8u(player) {
		aC.hN && (a8T.fillStyle = be.a8y[be.k9[be.eW[player]]])
	}

	function a8t(aA, a8z) {
		a8T.fillStyle = a8z, aA = a8R - 1 < aA ? a8R - 1 : aA;
		a8z = Math.floor((aA === a8R - 1 ? 2 : 0 === aA ? 1.15 : 1) * a8Z), a8z = aA === a8R - 2 ? Math.floor(a8Y + 9.15 * a8Z) - Math.floor(a8Y + 8.15 * a8Z) : a8z;
		a8T.fillRect(0, Math.floor(a8Y + (aA + (0 === aA ? 0 : .15)) * a8Z), a8N, a8z)
	}

	function a8v(a91, zi, aA) {
		a8T.fillText(a8e[zi], a8a, Math.floor(a8W + a8P + (a91 + .5) * a8Z)), 1 === af.a2E[aA] && (a8T.font = "italic " + a8Q);
		zi = Math.floor(a8W + a8P + (a91 + .5) * a8Z);
		a8T.fillText(af.zN[aA], a8b, zi), 0 !== af.a2E[aA] && (a8T.font = a8Q), aA < aC.jn && 2 !== af.a2E[aA] || a8T.fillRect(a8b, zi + .35 * a8n, a8d[aA], Math.max(1, .1 * a8n))
	}

	function a8w(a91, aA) {
		a8T.fillText(af.gL[aA], a8c, Math.floor(a8W + a8P + (a91 + .5) * a8Z))
	}

	function a9A(eh) {
		return (eh -= ba.gap + a8Y) < 0 ? Math.floor(eh / a8Z) - 1 : eh < (a8R - 1) * a8Z ? Math.floor(eh / a8Z) : eh < a6S - a8Y ? a8R - 1 : (eh -= a6S - a8Y, a8R + Math.floor(eh / a8Z))
	}

	function xm(ef, eh) {
		return ef >= ba.gap && ef < ba.gap + a8N && eh >= ba.gap && eh < ba.gap + a6S
	}
	this.dU = function() {
			var aA;
			for (a8k = !1, a8m = a8l = a8j = 0, a8i = -1, a8R = z.a0.qu() ? 6 : 10, a8o = (position = 0) === (a8o = bh.km.data[11].value) ? 10 : 1 === a8o ? 5 : 1, a8h = !1, a8f = new Uint16Array(a8R + 1), a8g = new Uint32Array(a8R + 1), a8V = aC.eV,
				l3 = new Uint16Array(a8V), jY = new Uint16Array(a8V), aA = a8V - 1; 0 <= aA; aA--) l3[aA] = aA, jY[aA] = aA;
			this.resize(!0), a8d = new Uint16Array(aC.eV);
			var a8q = Math.floor(a8N - a8b - a8a - a8U);
			for (a8e = new Array(aC.eV), a8T.font = a8Q, aA = aC.eV - 1; 0 <= aA; aA--) a8e[aA] = aA + 1 + ".", af.zN[aA] = b8.x3.a1t(af.zT[aA], a8Q, a8q), a8d[aA] = Math.floor(a8T.measureText(af.zN[aA]).width);
			a8r()
		}, this.resize = function(dU) {
			if (a6S = z.a0.qu() ? (a8N = Math.floor(.335 * h.pY), Math.floor(a8R * a8N / 8)) : (a8N = Math.floor(.27 * h.pY), Math.floor(a8R * a8N / 10)), a8N = Math.floor(.97 * a8N), (a8S = document.createElement("canvas")).width = a8N, a8S.height =
				a6S, a8T = a8S.getContext("2d", {
					alpha: !0
				}), a8W = .025 * a8N, a8P = .16 * a8N, a8X = 0 * a8N, a8Y = Math.floor(.45 * a8W + a8P), a8Z = (a6S - a8P - 2 * a8W - a8X) / a8R,
				a8S.height = a6S += a8Z, __fx.leaderboardFilter.tabBarOffset = Math.floor(a8Z * 1.3), __fx.leaderboardFilter.verticalClickThreshold = a6S - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = a8N,
				a8O = b8.pW.rL(1, Math.floor(.55 * a8P)), a8n = Math.floor((z.a0.qu() ? .67 : .72) * a8Z), a8Q = b8.pW.rL(0, a8n), a8T.font = a8Q, a8a = Math.floor(.04 * a8N), a8b = Math.floor((z.a0.qu() ? .195 : .18) * a8N), a8U = Math.floor(a8T
					.measureText("00920600").width), a8T.font = a8O, a8c = a8N - a8a, !dU) {
				a8T.font = a8Q;
				for (var aA = aC.eV - 1; 0 <= aA; aA--) a8d[aA] = Math.floor(a8T.measureText(af.zN[aA]).width);
				a8r()
			}
			a8p = b8.x3.a1t(L(111), a8O, .96 * a8N)
		}, this.a8K = function() {
			return a8N
		}, this.lO = function(bp, a8s) {
			(a8s || a8h && (bp || bd.jk() % a8o == 0)) && (a8h = !1, a8r())
		}, this.ih = function() {
			! function() {
				for (var er = a8V - 1; 0 <= er; er--) 0 === af.lc[l3[er]] && ! function(er) {
					var a98 = l3[er];
					a8V--;
					for (var aA = er; aA < a8V; aA++) l3[aA] = l3[aA + 1], jY[l3[aA]] = aA;
					l3[a8V] = a98, jY[l3[a8V]] = a8V
				}(er)
			}();
			for (var a96, mM = a8V - 1, er = 0; er < mM; er++) af.gL[l3[er]] < af.gL[l3[er + 1]] && (a96 = l3[er], l3[er] = l3[er + 1], l3[er + 1] = a96, jY[l3[er]] = er, jY[l3[er + 1]] = er + 1);
			! function() {
				for (var di = a8h, g6 = (a8h = !0, jY[aC.eI] >= a8R - 1 ? a8R - 2 : a8R - 1), aA = g6; 0 <= aA; aA--)
					if (a8f[aA] !== l3[aA] || a8g[aA] !== af.gL[l3[aA]]) return;
				(g6 != a8R - 2 || a8f[a8R] === jY[aC.eI] && a8g[a8R] === af.gL[aC.eI]) && (a8h = di)
			}();
			for (var aA = a8R - 1; 0 <= aA; aA--) a8f[aA] = l3[aA], a8g[aA] = af.gL[l3[aA]];
			a8f[a8R] = jY[aC.eI], a8g[a8R] = af.gL[aC.eI];
			leaderboardHasChanged = true;
		}, __fx.leaderboardFilter.scrollToTop = function() {
			position = 0;
		}, this.gl = function(ef, eh) {
			return !!xm(ef, eh) && ((__fx.utils.isPointInRectangle(ef, eh, ba.gap + 12, ba.gap + 12, a8Y - 22, a8Y - 22) && __fx.playerList.display(af.zT), true) &&
				!(eh - ba.gap > __fx.leaderboardFilter.verticalClickThreshold && __fx.leaderboardFilter.handleMouseDown(ef - ba.gap)) && (a8j = bd.e7, a8k = !0, a8l = a8m = a9A(eh), bH.a10() && (ef = a7B(-1, a8m, a8R), a8i !== (ef = ef === a8R ?
					-1 : ef)) && (a8i = ef, a8r(), bd.dc = !0)), !0)
		}, __fx.leaderboardFilter.repaintLeaderboard = function() {
			a8r(), bd.dc = !0;
		},
		this.a0M = function(ef, eh) {
			if (__fx.utils.isPointInRectangle(ef, eh, ba.gap + 12, ba.gap + 12, a8Y - 22, a8Y - 22)) {
				__fx.playerList.hoveringOverButton === false && (__fx.playerList.hoveringOverButton = true, a8r(), bd.dc = !0);
			} else {
				__fx.playerList.hoveringOverButton === true && (__fx.playerList.hoveringOverButton = false, a8r(), bd.dc = !0);
			}
			if (__fx.leaderboardFilter.setHovering(
					__fx.utils.isPointInRectangle(ef, eh, ba.gap, ba.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth, __fx.leaderboardFilter.tabBarOffset), ef - ba.gap
				)) return;
			var di, a99 = a9A(eh);
			return a8k ? (di = position, (position = a7B(0, position += a8l - a99, aC.eV - a8R)) !== di && (a99 = (a99 = a7B(-1, a8l = a99, a8R)) !== a8R && xm(ef, eh) ? a99 : -1, a8i = a99, a8r(), bd.dc = !0), !0) : (a99 = (a99 = a7B(-1, a99,
				a8R)) === a8R || !xm(ef, eh) || bH.a10() ? -1 : a99, a8i !== a99 && (a8i = a99, a8r(), bd.dc = !0))
		}, this.a0l = function(ef, eh) {
			if (!a8k) return !1;
			a8k = !1;
			var a99 = a9A(eh);
			var isEmptySpace = false;
			return bH.a10() && -1 !== a8i && (a8i = -1, a8r(), bd.dc = !0), bd.e7 - a8j < 350 && a8m === a99 && -1 !== (a99 = (a99 = a7B(-1, a99, a8R)) !== a8R && xm(ef, eh) ? a99 : -1) && (ef = (__fx.leaderboardFilter.enabled ? (updateFilteredLb(),
					l3[__fx.leaderboardFilter.filteredLeaderboard[a99 + position] ?? (isEmptySpace = true, jY[aC.eI])]) : l3[a99 + position]), a99 === a8R - 1 && (__fx.leaderboardFilter.enabled ? this.playerPos : jY[aC.eI]) >=
				position + a8R - 1 && (ef = aC.eI), !isEmptySpace && aC.hN && __fx.donationsTracker.displayHistory(ef, af.zT, aC.k6), 0 !== af.lc[ef] && !isEmptySpace) && aG.ly(ef, 800, !1, 0), !0
		}, this.a0P = function(ef, eh, deltaY) {
			var a9B;
			return !(a8k || aC.m7 || (a9B = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !xm(ef, eh)) || (ef = (ef = a7B(-1, a9A(eh), a8R)) === a8R || bH.a10() ? -1 : ef, 0 < deltaY ? position < aC.eV - a8R && (position += Math.min(aC.eV - a8R -
				position, a9B), a8i = ef, a8r(), bd.dc = !0) : 0 < position && (position -= Math.min(position, a9B), a8i = ef, a8r(), bd.dc = !0), 0))
		}, this.td = function() {
			te.drawImage(a8S, ba.gap, ba.gap)
		}
}

function cI() {
	var canvas, x3, ef, eh, a5m, a9C, gap, a9D, fontSize, a9E, a9F, a9G, a9H, a9I, a9J, a9K, a9L, a9M;

	function a9Q() {
		x3.clearRect(0, 0, aV.i, aV.j), x3.fillStyle = b9.mb, x3.fillRect(0, 0, aV.i, aV.j), x3.fillStyle = b9.my, eC = 0 < a9K ? a9K : Math.sqrt(a9H[4] / 1e4), x3.fillRect(0, aV.j - a5m - 1, Math.floor(eC * aV.i), a5m), x3.fillStyle = b9.me, x3
			.fillRect(0, 0, aV.i, 1), x3.fillRect(0, 0, 1, aV.j), x3.fillRect(aV.i - 1, 0, 1, aV.j), x3.fillRect(0, aV.j - 1, aV.i, 1), x3.fillRect(0, aV.j - a5m - 1, aV.i, 1);
		for (var eC, a9S, di = 0, aA = 0; aA < a9G.length; aA++) a9I[aA] ? (b8.pW.textAlign(x3, 0), a9S = Math.floor((a9C - a5m + 2 * a9D) * (aA - di + 1) / (a9G.length + 1) - .7 * a9D), x3.fillText(a9G[aA], gap, a9S), b8.pW.textAlign(x3, 2), 5 ===
			aA && 0 !== af.lc[aC.eI] && af.gZ[aC.eI] >= ad.jT(aC.eI) ? (x3.fillStyle = b9.nX, x3.fillText(a9O(aA), aV.i - gap, a9S), x3.fillStyle = b9.me) : x3.fillText(a9O(aA), aV.i - gap, a9S)) : di++
	}

	function a9O(aA) {
		return aA < 3 ? a9H[aA].toString() : 3 === aA || 4 === aA || 5 === aA ? b8.zR.a2u(a9H[aA] / 100, 2) : aA < 7 ? b8.zR.y4(a9H[aA]) : aA === 7 ? aV.a9T(a9H[7]) : aA === 8 ? __fx.utils.getMaxTroops(af.gL, aC.eI) : __fx.utils.getDensity(aC.eI)
	}

	function a9N() {
		af.gL[aC.eI] !== a9H[6] && (a9H[6] = af.gL[aC.eI], a9E++)
	}
	this.dU = function() {
		a9K = a9L = 0, (a9F = new Array(8))[0] = L(112), a9F[1] = aC.k6 ? L(113) : L(114), a9F[2] = L(115), a9F[3] = L(116), a9F[4] = L(117), a9F[5] = L(118, 0, "Interest"), a9F[6] = L(119), a9F[7] = L(120),
			a9F.push("Max Troops", "Density"), // add a9F
			(a9G = new Array(a9F.length)).fill(""), (a9H = new Array(a9F.length))[0] = aC.k6 ? 0 : aC.jn, a9H[1] = aC.k6 ? ak.jo : aC.k8, a9H[2] = aC.yo, a9H[3] = 0, a9H[4] = bJ.dj(1e4 * af.gL[0], Math.max(aC.jX, 1)), a9H[5] = 0 === aC.data
			.iIncomeType ? 700 : 1 === aC.data.iIncomeType ? bJ.dj(700 * aC.data.iIncomeValue, 64) : bJ.dj(700 * aC.data.iIncomeData[aC.eI], 64), a9H[6] = 0, a9N(), a9H[7] = 0, a9J = a9O(6), a9I = new Array(a9F.length);
		for (var aA = a9F.length - 1; 0 <= aA; aA--) a9I[aA] = !0;
		a9M = 0, a9M = aC.k6 ? (a9I[0] = !1, a9I[2] = !1, a9I[3] = !1, 3) : (a9I[3] = !1, 1), a9E = 0, this.resize()
	}, this.resize = function() {
		this.i = Math.floor((z.a0.qu() ? .1646 : .126) * 1.25 * h.pY), this.j = Math.floor(1.18 * this.i), a5m = Math.floor(.04 * this.i), gap = Math.floor(.035 * this.i), a9D = .04 * this.i, a9C = this.j, this.j -= Math.floor(a9M * (this.j - 2 *
			a5m) / a9F.length), fontSize = Math.floor(.7 * (a9C - a5m) / a9F.length);
		var a4P = b8.pW.rL(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.i, canvas.height = this.j,
			function(a4P, i) {
				for (var aA = 0; aA < a9G.length; aA++) a9G[aA] = b8.x3.a1t(a9F[aA], a4P, i)
			}((x3 = canvas.getContext("2d", {
				alpha: !0
			})).font = a4P, .575 * this.i), b8.pW.textBaseline(x3, 1), x3.lineWidth = 1, this.a39(), this.a6p(), aT.a6p(), a9Q()
	}, this.a6p = function() {
		ef = h.i - this.i - ba.gap
	}, this.a9R = function() {
		eh = ba.gap
	}, this.a39 = function() {
		eh = ba.gap + (aT.a6C() && 0 !== af.lc[aC.eI] && !aC.gt ? aT.j + ba.gap : 0)
	}, this.lO = function(bp) {
		(bp || 100 <= a9E) && (a9E = 0, a9Q())
	}, this.a44 = function() {
		return a9H[7]
	}, this.a9T = function(value) {
		var kV = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * kV) / 1e3);
		return value < 10 ? kV + ":0" + value : kV + ":" + value
	}, this.ih = function() {
		var a9c, per;
		a9I[0] && aC.yp - aC.yo !== a9H[0] && (a9H[0] = aC.yp - aC.yo, a9E++), ak.jo - a9H[0] !== a9H[1] && (a9H[1] = ak.jo - a9H[0], a9E++), this.lG(), (a9c = ad.a9d(aC.eI)) !== a9H[5] && (a9H[5] = a9c, a9E++), a9N(), a9H[7] += bd.a9e, a9c =
			a9O(7), a9J !== a9c && (a9J = a9c, a9E += 100), a9c = aC.hN ? bf.a2e() : af.gL[l3[0]], per = bJ.dj(1e4 * a9c, Math.max(aC.jX, 1)), a9H[3] = a9c, a9H[4] !== per && (a9E++, a9H[4] = per), 8 === aC.k4 && function() {
				for (var aA = 0; aA < 2; aA++)
					if (!b8.ft.gk(aA)) return bP.yP.yl(), 1;
				return
			}() || a9H[3] < aC.jX || ! function() {
				for (var aA = ak.jo - 1; 0 <= aA; aA--)
					if (0 < af.fz[ak.jp[aA]].length) return;
				return 1
			}() || bP.yP.yl()
	}, this.lG = function() {
		a9I[2] && aC.yo !== a9H[2] && (a9H[2] = aC.yo, a9E++)
	}, this.a9f = function(aA) {
		var sA, a9g, di;
		return 2 !== aC.ym && (aA % 2 == 1 && (aU.lO(1, 1), bd.dc = !0), aA === aC.a3I ? (a9K = 0, a9Q(), !1) : (-1 !== aA || 0 !== a9L) && (a9g = a9K, a9K = aC.gh ? aA / aC.a3I : (di = performance.now(), 0 <= aA && (sA = di - 392 * aA, a9L =
			0 === aA || sA < a9L ? sA : a9L), 1 < (a9K = (di - a9L) / (392 * aC.a3I)) ? 1 : a9K), a9Q(), a9K !== a9g))
	}, this.td = function() {
		te.drawImage(canvas, ef, eh)
	}
}

function cJ() {
	var hF, a9h, i, j, a6v, a9i, a9j, a6D, canvas, lp, a9k;

	function wz() {
		return Math.floor((h.i - i) / 2) < aQ.j + 2 * ba.gap ? h.j - j - 4 * ba.gap - aQ.j : h.j - j - 2 * ba.gap
	}
	this.dU = function() {
		a9k = hF = !1, a6v = .61, a9i = .07, a9j = .09, lp = a6D = j = 0
	}, this.resize = function() {
		var x3, m4, et, a9p, a9q, a4U;
		hF && (i = a9l(i = z.a0.qu() ? Math.floor(.69 * h.pY) : Math.floor(.5 * h.pY), a4z(h.i - 2 * ba.gap, 10)), i = a9l(i, Math.floor(3.57 * a4z(h.j - 2 * ba.gap, 3))), j = Math.floor(.28 * i), (canvas = document.createElement("canvas"))
			.width = i, canvas.height = j, x3 = canvas.getContext("2d", {
				alpha: !0
			}), m4 = Math.floor(1 + j / 40), x3.clearRect(0, 0, i, j), x3.fillStyle = b9.mb, x3.fillRect(m4, m4, i - 2 * m4, j - 2 * m4), x3.lineJoin = "bevel", x3.lineWidth = 2 * m4, x3.strokeStyle = b9.me, x3.strokeRect(m4, m4, i - 2 * m4,
				j - 2 * m4), x3.imageSmoothingEnabled = !1, et = aa.get(a9h), a9p = et.width, a4U = (1 === a9h ? .85 : 21 === a9h ? .666 : .9) * a6v * j / (a9q = et.height), x3.setTransform(a4U, 0, 0, a4U, Math.floor((i - a4U * a9p) / 2),
				Math.floor((j - a4U * a9q) / 2)), x3.drawImage(et, 0, 0), x3.setTransform(1, 0, 0, 1, Math.floor(i - a9j * j - a9i * j - m4), Math.floor(m4 + a9i * j)),
			function(x3, eY) {
				x3.lineWidth = Math.floor(1 + j / 80), x3.strokeStyle = b9.me, x3.beginPath(), x3.moveTo(0, 0), x3.lineTo(eY, eY), x3.moveTo(0, eY), x3.lineTo(eY, 0), x3.stroke()
			}(x3, Math.floor(a9j * j)), x3.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(f0, a9n, a6i, a9o) {
		hF || a9o && a9k || (a9h = a6i ? 21 : f0 ? 1 : 2, hF = a9k = !0, this.resize(), aK.qn(), aQ.a6d(), lp = bd.e7, a6D = a9n ? 1 : 0)
	}, this.ih = function() {
		!hF || 1 <= a6D || (a6D = 1 < (a6D += 5e-4 * (bd.e7 - lp)) ? 1 : a6D, lp = bd.e7, bd.dc = !0)
	}, this.gl = function(ef, eh) {
		return !(!hF || a6D <= 0 || (ef -= Math.floor((h.i - i) / 2), eh -= wz(), ef < 0) || eh < 0 || i < ef || j < eh || (i - j / 3 < ef && eh < j / 3 && (hF = !1, bd.dc = !0), 0))
	}, this.td = function() {
		!hF || a6D <= 0 || (te.globalAlpha = a6D, te.drawImage(canvas, Math.floor((h.i - i) / 2), wz()), te.globalAlpha = 1)
	}
}

function dH() {
	var a9s, a9t = new Uint8Array(5),
		a9u = new Uint8Array(5);
	this.a9v = new a9w, this.dU = function() {
		for (var f0 = bh.km.data[119].value, aA = 0; aA < a9t.length; aA++) a9t[aA] = (f0 >> 2 * aA) % 4
	}, this.a3T = function() {
		a9s = [L(121), L(122), L(123, [bV.a9x[28]]), L(124, [bV.a9x[26]]), L(125, [bV.a9x[0]])], this.a9v.dU()
	}, this.ih = function() {
		this.a9v.ih()
	}, this.a45 = function(id) {
		1 < id && bH.pz() || ! function(dx) {
			if (3 === a9t[dx] || 1 === a9u[dx]) return;
			if (a9u[dx] = 1, !(Math.random() < .6)) {
				a9t[dx]++;
				for (var f0 = 0, aA = 0; aA < a9t.length; aA++) f0 += a9t[aA] << 2 * aA;
				bh.qy.qz(119, f0)
			}
			return 1
		}(id) || aM.a55(a9s[id])
	}
}

function a9w() {
	var a9z;
	this.dU = function() {
		a9z = !1
	}, this.ih = function() {
		var g5;
		if (function() {
				if (!a9z) {
					if (bd.jk() % 30 != 9) return;
					if (!b8.ft.kw(90)) return;
					a9z = !0
				}
				return 1
			}() && (! function() {
				var pO = aM.a5Q(956);
				if (pO) {
					if (b8.ft.kZ(pO.player)) return 1;
					aM.a4B(956, 0)
				}
				return
			}() && (-1 === (g5 = (aC.hN ? function() {
				var id = bf.l0(),
					eY = ak.jo;
				if (be.k9[id])
					for (var ya = ak.jp, eW = be.eW, aA = 0; aA < eY; aA++) {
						var g5 = ya[aA];
						if (eW[g5] !== id) return g5
					} else if (1 < eY) return l3[eY - 1];
				return -1
			} : function() {
				for (var aA7 = ak.jo, kU = ak.jp, aA8 = jY, aA = 0; aA < aA7; aA++) {
					var g5 = kU[aA];
					if (0 !== aA8[g5]) return g5
				}
				return -1
			})()) ? ! function() {
				var pO = aM.a5Q(957);
				if (pO && pO.a4v) {
					if (ab.eP(pO.a4v.eK << 2)) return 1;
					aM.a4B(957, 0)
				}
				return
			}() : (aM.zA(0, L(126, [af.zN[g5]]), 956, g5, b9.me, b9.mb, -1, !0), 0)))) {
			var eY = am.iS.kl;
			if (0 !== eY)
				for (var km = am.iS.km, aA = 0; aA < eY; aA++) {
					var eK = km[aA];
					if (ab.eP(eK << 2)) return void aM.zA(0, L(127, [bK.eg(eK), bK.ei(eK)]), 957, 0, b9.me, b9.mb, -1, !0, void 0, {
						er: 1,
						eK: eK
					})
				}
		}
	}
}

function dI() {
	this.aA9 = new aAA, this.dU = function() {
		this.aA9.resize()
	}
}

function aAA() {
	this.resize = function() {
		var aA, aAB = document.head.querySelector("style#ss");
		if (aAB)
			for (aA = aAB.sheet.cssRules.length - 1; 0 <= aA; aA--) aAB.sheet.deleteRule(0);
		else(aAB = document.createElement("style")).id = "ss", document.head.appendChild(aAB);
		var a73 = "::-webkit-scrollbar",
			aAC = b8.pW.pg(ba.rN),
			hP = b8.pW.pg(Math.max(b8.pW.qp(.012), 8));
		try {
			aAB.sheet.insertRule(a73 + "{width:" + hP + ";height:" + hP + ";}", aAB.sheet.cssRules.length), aAB.sheet.insertRule(a73 + "-thumb{background-color:white;}", aAB.sheet.cssRules.length), aAB.sheet.insertRule(a73 +
				"-track{background:" + b9.ma + ";}", aAB.sheet.cssRules.length), aAB.sheet.insertRule(a73 + "-track:horizontal{border-top:" + aAC + " solid white;}", aAB.sheet.cssRules.length), aAB.sheet.insertRule(a73 +
				"-track:vertical{border-left:" + aAC + " solid white;}", aAB.sheet.cssRules.length), aAB.sheet.insertRule(a73 + "-button{display:none;}", aAB.sheet.cssRules.length)
		} catch (e) {
			for (console.log("error 3425: " + e), aA = aAB.sheet.cssRules.length - 1; 0 <= aA; aA--) aAB.sheet.deleteRule(0)
		}
	}
}

function dG() {
	this.aAD = !1, this.mU = !1, this.a3D = !1, this.aAE = [0, 0, 0, 0], this.aAF = function() {
		var m4, m5, mH, mI;
		this.a3D = this.a3D || this.mU, (this.mU || this.aAD && this.a3D) && (m4 = bY.aAG[0], m5 = bY.aAG[1], mH = bY.aAG[2], mI = bY.aAG[3], m4 = m4 < this.aAE[0] ? this.aAE[0] : m4, m5 = m5 < this.aAE[1] ? this.aAE[1] : m5, mH = mH > this.aAE[
				2] ? this.aAE[2] : mH, mI = mI > this.aAE[3] ? this.aAE[3] : mI, this.mU = !1, this.aAD = !1, m4 === this.aAE[0] && m5 === this.aAE[1] && mH === this.aAE[2] && mI === this.aAE[3] ? this.a3E() : m4 <= mH && m5 <= mI && a3V
			.putImageData(a3W, 0, 0, m4, m5, mH - m4 + 1, mI - m5 + 1))
	}, this.a3E = function() {
		this.a3D && this.aAE[2] >= this.aAE[0] && this.aAE[3] >= this.aAE[1] && a3V.putImageData(a3W, 0, 0, this.aAE[0], this.aAE[1], this.aAE[2] - this.aAE[0] + 1, this.aAE[3] - this.aAE[1] + 1), this.a3D = !1
	}, this.yx = function() {
		this.aAE[2] >= this.aAE[0] && this.aAE[3] >= this.aAE[1] && a3V.putImageData(a3W, 0, 0, this.aAE[0], this.aAE[1], this.aAE[2] - this.aAE[0] + 1, this.aAE[3] - this.aAE[1] + 1), this.a3D = !1
	}, this.dU = function() {
		var ef, eh;
		this.aAD = !1, this.mU = !1, this.a3D = !1, this.aAE[0] = bQ.ej, this.aAE[1] = bQ.ek, this.aAE[2] = this.aAE[3] = 0;
		loop: for (ef = 1; ef < bQ.ej - 1; ef++)
			for (eh = bQ.ek - 2; 1 < eh; eh--)
				if (1 === aAH[ab.wY(ef, eh) + 2]) {
					this.aAE[0] = ef;
					break loop
				} loop: for (eh = 1; eh < bQ.ek - 1; eh++)
			for (ef = bQ.ej - 2; 1 < ef; ef--)
				if (1 === aAH[ab.wY(ef, eh) + 2]) {
					this.aAE[1] = eh;
					break loop
				} loop: for (ef = bQ.ej - 2; 0 < ef; ef--)
			for (eh = bQ.ek - 2; 1 < eh; eh--)
				if (1 === aAH[ab.wY(ef, eh) + 2]) {
					this.aAE[2] = ef;
					break loop
				} loop: for (eh = bQ.ek - 2; 0 < eh; eh--)
			for (ef = bQ.ej - 2; 1 < ef; ef--)
				if (1 === aAH[ab.wY(ef, eh) + 2]) {
					this.aAE[3] = eh;
					break loop
				}
	}
}

function L(value, aAI, uB) {
	var pD = "number" == typeof value ? b5.aAJ[value] : value;
	if (uB && b5.aAK() && (pD = uB), aAI)
		for (var eY = aAI.length, aA = 0; aA < eY; aA++)
			for (var er = 0; er < 3; er++) pD = pD.replace("{" + (10 * er + aA) + "}", aAI[aA]);
	return pD
}

function bx() {
	this.data = new aAL;
	var aAM = (new aAN).L84,
		aAO = (this.aAJ = aAM, !1);
	this.dU = function() {
		var eY, g;
		aAO = !1, "en" !== bh.km.data[12].value.split("-")[0].toLowerCase() ? bh.km.data[12].value === bh.km.data[145].value && 0 < bh.km.data[146].value && (eY = bh.km.data[146].value, (g = bh.po.uH(eY, !1)).length === eY) && !!b8.pf.a1W(g) &&
			function(g) {
				for (var eY = g.length, j = 0; j < eY; j++) g[j] = g[j].replace("&#39;", "'");
				var aAU = bh.po.uH(eY, !0);
				if (eY !== aAU.length) return !1;
				if (!b8.pf.a1W(aAU)) return !1;
				for (var kV = aAM.length, a7w = new Array(kV), aAV = kV === eY, g0 = Math.min(eY, kV), aA = 0; aA < kV; aA++)
					if (a7w[aA] = aAM[aA], aA < eY && aAU[aA] === a7w[aA]) a7w[aA] = g[aA];
					else {
						aAV = !1;
						for (var es = 0; es < g0; es++)
							if (aAU[es] === a7w[aA]) {
								a7w[aA] = g[es];
								break
							}
					} return b5.aAJ = a7w, aAV
			}(g) || (aAO = !0) : b5.aAJ = aAM
	}, this.dW = function() {
		be.dV(), aD.dV(), bc.dV(), bb.dV(), aN.dU(), bm = new dn
	}, this.aAK = function() {
		return this.aAJ === aAM || !aAM.length
	}, this.aAW = function() {
		var aAX;
		aAO && (aAO = !1, 0 !== aAM.length) && (aAX = bh.km.data[12].value, ay.aAY.aAZ(0, aAX.slice(0, 20)))
	}, this.aAa = function(g) {
		g.length === aAM.length && (this.aAJ = g, bh.qy.qz(145, bh.km.data[12].value), bh.qy.qz(146, g.length), bh.po.uN(g, !1), bh.po.uN(aAM, !0), 0 === aZ.a00()) && 5 === s.rl && s.x.aAb()
	}, this.aAc = function() {
		var aAd, g = navigator.languages;
		return g && g.length ? (aAd = Math.max(b5.data.aAe(g[0]), 0), 1 === g.length ? [aAd, aAd] : [aAd, Math.max(b5.data.aAe(g[1]), 0)]) : [0, 0]
	}
}

function aAL() {
	this.g = ["en", "aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts",
		"btx", "bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fj", "fo",
		"fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac", "kek",
		"kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk", "ml",
		"mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu", "rn", "ro",
		"rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl", "tn", "to", "tpi",
		"tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu", "nb", "fil", "sh"
	], this.aAf = function() {
		for (var aAg = [], g = this.g, eY = g.length, aA = 0; aA < eY; aA++) aAg.push(g[aA]);
		var aAh = bh.km.data[12].uB;
		for (aA = 0; aA < eY; aA++)
			if (aAg[aA] === aAh) {
				aAg.splice(aA, 1), eY--;
				break
			} aAg.sort(), eY++, aAg.unshift(aAh);
		try {
			if ("undefined" == typeof Intl) return aAg;
			for (aA = 0; aA < eY; aA++) {
				var pD = new Intl.DisplayNames([aAg[aA]], {
					type: "language"
				}).of(aAg[aA]);
				pD !== aAg[aA] && (aAg[aA] = aAg[aA] + ": " + pD)
			}
		} catch (e) {
			console.log("error 3646: " + e)
		}
		return aAg
	}, this.aAj = function(aAk) {
		for (var pD = bh.km.data[12].value, eY = aAk.length, aA = 0; aA < eY; aA++)
			if (pD === aAk[aA].split(":")[0]) return aA;
		return 0
	}, this.aAe = function(aAl) {
		if (!aAl || aAl.length < 2) return 0;
		aAl = aAl.split("-")[0].toLowerCase();
		for (var g = this.g, eY = g.length, aA = 0; aA < eY; aA++)
			if (aAl === g[aA]) return aA;
		return -1
	}
}

function aAN() {
	this.L84 = ["No Admin", "Helper", "Junior Moderator", "Moderator", "Senior Moderator", "Lead Moderator", "Head Admin", "Very Easy", "Easy", "Normal", "Hard", "Very Hard", "Impossible", "Type your message here...", "Send", "Activated", "Top Clan",
		"Best Clan Member", "Top Admin", "Best 1v1 Player", "Best Battle Royale Player", "Richest Player", "Lobby", "Team {0}", "Team {0} has won the game!", "You have earned a participation reward of {10} gold.",
		"The prize money has been distributed as follows:", "{10} more", "You have earned {10} gold.", "You have earned {10} battle royale points!", "Clan {0} has won {11} points.", "You have earned {10} clan points!",
		"You have actually earned 40% more gold!", "The clan leader of {0} has earned {11} gold.", "Check clan results at this page: ", "Back", "Error", "Error {10}", "Not Enough Gold!", "You need more gold to perform this action.", "Quit Game",
		"More", "This is a contest!", "Accept", "You have conquered {0}.", "You have been conquered by {0}.", "Congratulations! You have won the game.", "{0} has won the game.", "{0} has broken the non-aggression pact.", "{0} is attacking you!",
		"Choose your start position!", "You have surrendered!", "The game has ended in a stalemate!", "Error: {10}", "{0} has been immortalized!", "Neutral Land: {0}", "Player: {0}", "Strength: {10}", "Territory: {10}", "Team", "Bot Difficulty",
		"Index: {10}", "Coordinates: {10}", "Mountain: {10}", "Water: {10}", "Ship Owner: {0}", "Message to {0}", "Humanity triumphs! The undead have been beaten back.", "The Resistance",
		"Mankind's era ends, overrun by the relentless tide of the undead.", "The Virus", "If peace is agreed upon, the game ends in a stalemate.", "If peace is agreed upon, the largest territory holder wins the game.",
		"You have signed a non-aggression pact with {0}.", "You have asked {0} to sign a non-aggression pact.", "{0} has accepted the non-aggression pact.", "{0} requests a non-aggression pact.", "You have asked {10} players to attack {1}.",
		"You have asked {0} to attack {1}.", "{0} suggests you attack {1}.", "You have exported 1 resource to {0}.", "You have exported {10} resources to {1}.", "A tax of 1 unit has been deducted.", "A tax of {10} units has been deducted.",
		"A bot ({0}) has supported you with 1 resource.", "A bot ({0}) has supported you with {11} resources.", "{0} has supported you with 1 resource.", "{0} has supported you with {11} resources.", "Map: {0}", "Dimension: {10}",
		"Overall Pixels: {10}", "Land: {10}", "Mountains: {10}", "Full sending is disabled.", "{0} has been conquered by {1}.", "{0} has left the game.", "{0} has surrendered.", "{0} has joined the game.", "{10} players have been conquered.",
		"{10} players have left the game.", "{10} players have surrendered.", "Next Contest: ", "YOU HAVE CONQUERED", "YOU HAVE BEEN CONQUERED BY", "THE GAME HAS BEEN WON BY", "MAP:", "{0} has called the peace vote.", "{0} has voted for peace.",
		"{0} has rejected peace.", "second played", "seconds played", "LEADERBOARD", "Humans", "Players", "Bots", "Spectators", "Threshold", "Percentage", "Growth", "Income", "Time", "Hint: The top 9 emojis are ordered by usage.",
		"Hint: Select a boat to send it to a new location.", "Hint: Call the peace vote by pressing {0}.", "Hint: Add troops to your weakest ongoing attack with {0}.", "Hint: Hover with the mouse over a player and press {0} to attack them.",
		"{0} still needs to be conquered!", "A neutral pixel at position ({10}, {11}) still needs to be conquered!", "Show Account", "Moderation Actions", "Report User", "Mention", "Loading", "White Arena", "Black Arena", "Island", "Mountains",
		"Desert", "Swamp", "White Plains", "Cliffs", "Pond", "Halo", "Europe", "World", "Caucasia", "Africa", "Middle East", "Scandinavia", "North America", "South America", "Asia", "Australia", "Island Kingdom", "Refresh", "Public Profile",
		"🧈 Gold", "Monopolist", "Banker", "Miner", "Saver", "Starter", "Account Balance: ", "Rank: ", "Status: ",
		"Play multiplayer games to earn gold. Accounts without gold will be deleted! Each day, you will lose 0.50 gold or 0.01% of your balance, whichever amount is higher.",
		"Buttons with yellow font color use a small amount of gold, which is then redirected based on the specific action taken.", "Gold is the fuel that keeps your account running! Keep the balance up!", "Gold Transfer", "Confirm", "Cancel",
		"Send gold only to trusted accounts!", "You are about to send {10} gold from the Source Account {1}. The transaction fee is 1 gold. The Target Account ({2}) will receive {13} gold.", "Account Name", "Copy", "Password", "Show", "Hide",
		"Request New Password", "Security Tip", "To safeguard your account, never disclose your password to anyone. We will never ask for your password, as we do not require it for any service.",
		"If you have accessed your account through unofficial webpages or apps, your security may be compromised. We recommend changing your password.",
		"If you lose your password or account name, you may lose access to your account. In such a case, we are unable to recover it. Please ensure that you store your account name and password in a safe place.", "Account Options",
		"Log in to a Different Account", "Create New Account", "Delete Account: ", "🗑️ Account Deletion", "Accounts without gold will be deleted automatically after 8 days. To initiate this process, deplete all your gold.", "Saved Accounts",
		"Listed accounts may have been removed in the meantime due to insufficient funds.", "🗑️ Remove From List", "➡️ Login", "1v1 Rating", "Elo: ", "Played Games: ", "Battle Royale Rating", "Commander", "Strategist", "Soldier", "Recruit",
		"Rating: ", "Admin Statistics", "Votes: ", "You are about to purchase {10} votes for {11} Gold with your Account {2}.", "Username", "Please choose a respectful username.", "Bio", "Upload Bio", "The monthly fee is currently {10} gold.",
		"Enable Auto Renew", "Disable Auto Renew", "Auto Renew is off. The subscription will end in {10} day(s).", "Auto Renew is on. The subscription will renew in {10} day(s).", "Description", "Report Player", "Primary Clan Stats", "Clan: {0}",
		"Monthly Points: {0}", "Rank: {0}", "Total Points: {0}", "Won Games: {0}", "Avg. Points per Game: {0}", "Secondary Clan Stats",
		"Once the monthly points of the secondary clan surpass the monthly points of the primary clan, the secondary clan will become the new primary clan.", "In this scenario, your clan leader statistics will be reset.",
		"Clan Leader Statistics", "Clan Leader of {0}", "No Clan Leader", "Elect", "Every week, you can vote for one clan member to increase their clan leader points.",
		"You and this clan member must have the same primary clan, which can be checked in the Primary Clan Stats.", "A clan leader earns gold whenever their clan wins points.", "Link your Account with Patreon", "Additional Income", "Options",
		"Default", "Uniform", "Customized", "Mixed", "Team dependent", "Player Count", "Clan Chart", "🛠️ Options", "🛠️ Chart Options", "Search Terms", "Separate search terms with a comma.", "Load Data", "Start Index", "End Index", "Timeframe",
		"More Options", "Y-Axis Compression", "Choose Your Nation's Color!", "National Color", "Red: ", "Green: ", "Blue: ", "Adjust", "Colors", "Random", "Selectable Color", "⏳ Connecting...", "Find Server...", "New Connection...",
		"Custom Scenario", "⚔️ Play", "Map", "Settings", "Game Mode", "Clustered", "Player Names", "Kingdom Names", "Simple Names", "Territorial Income", "Interest Income", "Starting Resources", "More Settings", "Reset Scenario", "Open File...",
		"Save As File...", "Multiplayer", "My Account", "Game Menu", "Your Kingdom's Name", "Clans", "Clan Members", "Admins", "1v1 Players", "Battle Royale", "Richest Players", "🏆 Leaderboards", "Previous 10", "Next 10", "1v1 Player Ranking",
		"Clan Ranking", "Clan Member Ranking", "Admin Ranking", "1v1 Reports", "Admin Election", "Blockchain", "Clan Leader Election", "Bio Reports", "Battle Royale Players", "Ranking", "Player", "Elo", "Clan", "Rating", "Leader", "Index",
		"Seconds Ago", "Accuser", "Accused", "Voter", "Target Account", "Votes", "Sender", "Receiver", "Amount", "Number", "Gold", "Elo Deducted", "Bio Removed", "🛠️ List Options", "Clan Name Search", "Username Search", "Quantity",
		"Account Name Search", "1v1", "Zombie", "Chat", "Close", "Ready", "Next Map", "Next Game Mode", "Next Contest", "Teams", "ON", "OFF", "Zombies", "Login", "📜 Logs", "Procedural Map", "Realistic Map", "Custom Map", "Passable Water",
		"Passable Mountains", "Select File", "Preview", "Map Name", "Selectable Name", "▶️ Replay", "🔲 Select All", "📋 Copy", "🗑️ Clear", "▶️ Launch", "Insert the replay string here!", "⚙️ Settings", "🔄 Reset", "Reload Required",
		"A game reload is required to apply the new configuration.", "Information", "Increasing resolution, shrinking minimum font size, and speeding up text rendering can strain your system and hinder gameplay responsiveness.", "Resolution",
		"Low", "Medium", "High", "Very High", "Minimum Font Size", "Small", "Very Small", "Text Rendering Speed", "Slow", "Fast", "Large UI", "Place Balance Above", "Hide Zoom Buttons", "Font", "Lobby Chirper", "Keep Closed", "Mute",
		"Shortcut Keys", "Reset", "Language", "Spawning", "Selectable Spawn", "🔑 My Account", "📈 Charts", "🧈 Gold Transfer", "🔗 Links", "ℹ️ Game Version", "🗑️ Delete Data", "Privacy Settings", "Force Restart Game", "☰ Game Menu",
		"📊 Game Statistics", "🏳️ Surrender", "🕊️ Call Peace Vote", "Android App", "iOS App", "Changelog", "Clan Results", "Tutorial", "Terms", "Privacy",
		"Do you want to delete all locally stored data, like usernames, account data and setting data?", "Accounts without gold will be deleted after some days of grace.", "🗑️ Delete", "User Privacy", "Check out our Privacy Policy at:",
		"Source Account", "Replay Error", "Warning", "Loading...", "An enemy ship belonging to {0} is heading towards your shore.", "Initiate Land Attack At Mouse Pointer", "Launch Ship Towards Mouse Pointer", "Increase Percentage Bar",
		"Decrease Percentage Bar", "Slightly Increase Percentage Bar", "Slightly Decrease Percentage Bar", "Switch UI Visibility", "Zoom In", "Zoom Out", "Camera Left", "Camera Right", "Camera Up", "Camera Down", "Add To Weakest Attack",
		"Call Peace Vote", "Avg. Attack Strength", "Land Attacks", "Ships launched", "Bots conquered", "Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Received Support", "Overall Income", "Additional Costs",
		"Land War Losses", "Naval Losses", "Transmitted Support", "Overall Expenses", "Mountain Attacks", "Ships landed", "Territory", "Numbers", "Statistics", "Neutral", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black",
		"Ship launched!", "Ship selected!", "Ship on the way!", "Upcoming Alliance Contest!", "Upcoming Battle Royale Contest!", "Upcoming 1v1 Contest!", "Upcoming Zombie Contest!"
	]
}

function da() {
	var ef, eh, j, si, aAm, aAn, aAo, aAp, aAq, i, a29, aAr;
	this.hF = !1, this.dU = function(pD, aAs) {
		if (1 === z.id && 13 <= z.dk && z.dk < 18) return aAs ? void(a29 = pD) : a29 !== pD ? void 0 : void z.uF.saveString(200, pD);
		aAs && (a29 = pD, (aAr = document.createElement("a")).appendChild(document.createTextNode(a29)), this.hF = !0, aAr.title = a29, aAr.target = "_blank", aAr.href = a29, aAr.style.textAlign = "center", aAr.style.color = b9.me, aAr.style
			.position = "absolute", aAr.style.padding = "0px", aAr.style.margin = "0px", this.resize(), document.body.appendChild(aAr), bd.dc = !0)
	}, this.qn = function() {
		return !(!this.hF || (document.body.removeChild(aAr), this.hF = !1))
	}, this.gl = function(hq, hr) {
		return !!this.hF && ((hq < ef || hr < eh || ef + i < hq || eh + j < hr || ef + i - si < hq && hr < eh + si) && (bd.dc = !0, this.hF = !1, document.body.removeChild(aAr)), !0)
	}, this.resize = function() {
		var a4P, aAt;
		this.hF && (aAp = Math.floor(.8 * (z.a0.qu() ? h.i > h.j ? .6 : .55 : .4) * h.pY), si = Math.floor(.15 * aAp), aAm = Math.floor(.35 * si), aAn = Math.floor(.5 * si), aAo = Math.floor(2.5 * aAn), j = si + aAm + 3 * aAn, a4P = b8.pW.rL(1,
			aAm / h.k), aAq = Math.floor(h.k * aP.measureText(a29, a4P)), aAt = i = (aAp < aAq ? aAq : aAp) + 2 * aAo, i = Math.min(i, h.i - 2 * (z.a0.qu() ? 2 : 1) * ba.gap), a4P = b8.pW.rL(1, i / aAt * aAm / h.k), aAq = Math.floor(h.k *
			aP.measureText(a29, a4P)), ef = Math.floor((h.i - i) / 2), eh = Math.floor((h.j - j) / 2), aAr.style.font = a4P, aAr.style.top = Math.floor((eh + 1.4 * aAn + si) / h.k) + "px", aAr.style.left = Math.floor((ef + (i - aAq) /
			2) / h.k) + "px")
	}, this.td = function() {
		this.hF && (te.fillStyle = b9.mb, te.fillRect(ef, eh + si, i, j - si), te.fillStyle = b9.ni, te.fillRect(ef, eh, i, si), te.fillStyle = b9.me, te.lineWidth = ba.xn, te.strokeStyle = b9.me, te.strokeRect(ef, eh, i, j), te.fillRect(ef, eh +
			si, i, ba.xn), te.font = b8.pW.rL(1, .48 * si), b8.pW.textAlign(te, 1), b8.pW.textBaseline(te, 1), te.fillText("You are leaving Territorial.io!", Math.floor(ef + (i - .5 * si) / 2), Math.floor(eh + .55 * si)), aL.a4a(Math
			.floor(ef + i - .8 * si), Math.floor(eh + .25 * si), Math.floor(.5 * si)), te.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function dY() {
	var gap, a9F, ef = [0, 0, 0, 0, 0],
		eh = [0, 0, 0, 0, 0],
		mG = [1, 1, 1, 1, 1],
		f0 = [!0, !0, !0, !1, !1],
		et = (this.fJ = [!0, !0, !0, !1, !1], null);
	this.aAu = function(a1h, aAv) {
		et = a1h, f0 = aAv, a9F = [bI.aAw, bI.zv, bI.aAx, bI.aAx, bI.aAy], this.dU()
	}, this.dU = function() {
		if (aa.sD()) {
			var aA, rs = Math.floor((z.a0.qu() ? .261 : .195) * h.pY),
				rt = Math.floor(.9 * rs),
				a6v = Math.floor(.17 * rt);
			if (gap = z.a0.qu() ? 2 * ba.gap : ba.gap, mG[0] = rs / et[0].width, mG[1] = rt / et[1].width, mG[2] = a6v / et[2].height, mG[3] = a6v / et[3].height, mG[4] = a6v / et[4].height, mG[2] *= 1.7, mG[3] *= 1.07, ef[0] = gap, ef[1] = gap,
				ef[2] = gap, ef[3] = gap, ef[4] = Math.floor(2 * gap + mG[3] * et[3].width), eh[0] = gap, eh[1] = eh[0] + gap + mG[0] * et[0].height, eh[2] = eh[1] + gap + mG[1] * et[1].height, eh[3] = eh[2] + gap + mG[2] * et[2].height, eh[4] =
				eh[3], !f0[0])
				for (aA = 0; aA < 5; aA++) eh[aA] -= mG[0] * et[0].height + gap;
			if (!f0[1])
				for (aA = 2; aA < 5; aA++) eh[aA] -= mG[1] * et[1].height + gap
		}
	}, this.hF = function() {
		return !(7 === aZ.a00() && z.a0.qu())
	}, this.gl = function(hq, hr) {
		if (et && this.hF())
			for (var aA = f0.length - 1; 0 <= aA; aA--)
				if (f0[aA] && this.fJ[aA] && ef[aA] < hq && eh[aA] < hr && hq < ef[aA] + mG[aA] * et[aA].width && hr < eh[aA] + mG[aA] * et[aA].height) return s.t(9, s.rl, new aAz("You are leaving Territorial.io.", b8.pW.a28(a9F[aA]))), !0;
		return !1
	}, this.td = function() {
		if (et && this.hF()) {
			var aA;
			for (te.imageSmoothingEnabled = !0, aA = 0; aA < 5; aA++) f0[aA] && this.fJ[aA] && (te.setTransform(mG[aA], 0, 0, mG[aA], ef[aA], eh[aA]), te.drawImage(et[aA], 0, 0));
			te.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function dR() {
	this.aB0 = 0, this.aB1 = null, this.sr = null, this.qg = null, this.x = null, this.tD = null, this.sp = null, this.message = null, this.aB2 = null, this.qm = null, this.aB3 = new aB4, this.a04 = 0, this.dU = function() {
		this.aB0 = bE.ro.v9(bh.km.data[105].value), this.sr = new aB5, this.qg = new aB6, this.x = new aB7, this.tD = new aB8, this.sp = new aB9, this.message = new aBA, this.aB2 = new aBB, this.qm = new aBC, this.x.dU(), bn.dU(), this.a04 = 1, z
			.a0.setState(1), aZ.setState(0)
	}, this.t7 = function() {
		this.qm && this.qm.t7(), this.aB1 = null, this.sr = null, this.qg = null, this.x = null, this.tD = null, this.sp = null, this.message = null, this.aB2 = null, this.qm = null, this.a04 = 0, bn.t7(), z.a0.setState(0)
	}
}

function aB5() {
	function aBV(g, s6, s7) {
		var aBW = g[s6];
		g[s6] = g[s7], g[s7] = aBW
	}
	this.ss = [
		[],
		[],
		[],
		[]
	], this.st = [0, 0, 0, 0], this.aBD = function(aBE, rj, username, sy, zi, aBF, elo, color, uh, aBG) {
		this.ss[aBE].push(this.aBH(rj, username, sy, zi, aBF, elo, color, uh, aBG)), bl.aB0 === rj && (bl.aB1 = this.ss[aBE][this.ss[aBE].length - 1]), bl.x.aBI += 29 === s.rl && bl.x.qZ[0] === aBE && 1 === bl.x.qZ[2]
	}, this.aBH = function(rj, username, sy, zi, aBF, elo, color, uh, aBG) {
		return {
			rj: rj,
			username: username,
			sy: sy,
			zi: zi,
			aBF: aBF,
			elo: elo,
			color: color,
			uh: uh,
			aBG: aBG
		}
	}, this.aBJ = function(dx, aBE, sy, zi, aBF, elo, uh) {
		dx = this.ss[aBE][dx];
		dx.sy = sy, dx.zi = zi, dx.aBF = aBF, dx.elo = elo, dx.uh = uh, bl.x.aBI += 29 === s.rl && bl.x.qZ[0] === aBE && 1 === bl.x.qZ[2]
	}, this.aBK = function(dx, aBE, aBL) {
		var dx = this.ss[aBE][dx],
			aBM = dx.username,
			aBN = "Redacted " + bD.ro.y4(dx.rj, 2);
		dx.username = aBL ? "[" + b8.zR.zW(aBM) + "] " + aBN : aBN, aBM.indexOf("Redacted") < 0 && (dx.aBO = aBM), bl.x.aBI += 29 === s.rl && bl.x.qZ[0] === aBE && 1 === bl.x.qZ[2]
	}, this.aBP = function(dx, aBQ, aBR) {
		var player = this.ss[aBQ][dx];
		this.aBS(dx, aBQ), this.ss[aBR].push(player), bl.x.aBI += 29 === s.rl && bl.x.qZ[0] === aBR && 1 === bl.x.qZ[2]
	}, this.aBS = function(dx, aBQ) {
		var sr = this.ss[aBQ];
		dx >= this.st[aBQ] ? sr[dx] = sr[sr.length - 1] : (this.st[aBQ]--, 2 === aBQ ? (sr.splice(this.st[aBQ] + 1, 0, sr[sr.length - 1]), sr.splice(dx, 1)) : (sr[dx] = sr[this.st[aBQ]], sr[this.st[aBQ]] = sr[sr.length - 1])), sr.pop(), bl.x
			.aBI += 29 === s.rl && bl.x.qZ[0] === aBQ && 1 === bl.x.qZ[2]
	}, this.aBT = function(dx, qY) {
		bl.x.aBI += 29 === s.rl && bl.x.qZ[0] === qY && 1 === bl.x.qZ[2];
		var sr = this.ss[qY],
			pO = sr[dx];
		if (2 === qY)
			if (dx >= this.st[qY]) {
				for (var aBU = this.st[qY], elo = pO.elo; aBU && elo > sr[aBU - 1].elo;) aBU--;
				sr[dx] = sr[this.st[qY]], sr.splice(this.st[qY]++, 1), sr.splice(aBU, 0, pO)
			} else sr.splice(this.st[qY]--, 0, pO), sr.splice(dx, 1);
		else dx >= this.st[qY] ? aBV(sr, this.st[qY]++, dx) : aBV(sr, --this.st[qY], dx)
	}, this.aBX = function(rj) {
		for (var ss = this.ss, eY = ss.length, aA = 0; aA < eY; aA++)
			for (var sr = ss[aA], kV = sr.length, er = 0; er < kV; er++)
				if (rj === sr[er].rj) return sr[er];
		return null
	}
}

function aB4() {
	this.dd = function(dx) {
		if ((st = bl.sr.st[dx]) < 2 && !__fx.customLobby.isActive()) return !1;
		var qa = bl.x.qb[dx],
			aBY = 9 === qa.aBZ ? 333 : 512,
			st = Math.min(st, aBY);
		8 === qa.aBZ && (st -= st % 2);
		aBY = bl.sr.ss[dx].splice(0, st), bl.sr.st[dx] -= st, st = function(aBa) {
			if (bl.aB1) {
				if (__fx.customLobby.isActive()) return __fx.customLobby.getPlayerId();
				for (var eY = aBa.length, rj = bl.aB1.rj, aA = 0; aA < eY; aA++)
					if (aBa[aA].rj === rj) return aA
			}
			return -1
		}(aBY);
		return -1 === st ? (bl.x.aBI += 29 === s.rl && bl.x.qZ[0] === dx && 1 === bl.x.qZ[2], !1) : (8 === qa.aBZ && (qa.aBd = (qa.aBd + (st >> 1)) % 1024, dx = st - st % 2, st %= 2, aBY = aBY.slice(dx, 2 + dx)), av.dU(qa, aBY, st), !0)
	}, this.aBe = function(qa, aBa, aBb) {
		var eb = aC.data = new a3J,
			aBi = (eb.spawningSeed = qa.spawningSeed, qa.aBZ < 7 ? (eb.gameMode = 1, eb.numberTeams = qa.aBZ + 2) : 9 === qa.aBZ ? (eb.gameMode = eb.isZombieMode = 1, eb.numberTeams = 2) : (eb.gameMode = 0, eb.battleRoyaleMode = 7 === qa.aBZ ?
				0 : 10 === qa.aBZ ? 1 : 2), eb.selectedPlayer = aBb, eb.isContest = qa.aBf, eb.mapType = bQ.aBg(qa.eE) ? 0 : 1, bQ.aBh(eb, qa.eE), eb.mapSeed = qa.mapSeed, eb.humanCount = aBa.length);
		eb.selectableSpawn = 1 === eb.gameMode || aBi < 100, eb.colorsData = new Uint32Array(aBi), eb.playerNamesData = new Array(aBi);
		for (var aA = 0; aA < aBi; aA++) eb.colorsData[aA] = aBa[aA].color, eb.playerNamesData[aA] = aBa[aA].username;
		if (2 === eb.battleRoyaleMode)
			for (eb.elo = new Uint16Array(aBi), aA = 0; aA < aBi; aA++) eb.elo[aA] = aBa[aA].elo;
		aZ.setState(8), bQ.a6(qa.eE, eb.mapSeed), aC.a3N(), aC.a3M = 2
	}
}

function aB6() {
	var dp = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player"],
		aBj = [b9.ms, b9.ms, b9.mt, b9.nM, b9.nN, b9.n9, b9.nS, b9.mt, b9.nk, b9.na],
		aBk = [
			[1],
			[1],
			[1.2],
			[1.4, 1.2],
			[1.7, 1.4, 1.2],
			[1.4, 1.2],
			[1.4, 1.2],
			[1.2],
			[1.4, 1.2],
			[1.4, 1.2]
		],
		aBl = ["Your account is too new!", "The server couldn't process your request.", "Spam detected!", "You are muted!", "Player couldn't be found.", "You don't have permission for this operation!", "Not enough gold!", "Action cancelled!"];
	this.qi = function(aBm) {
		var aBn, zX;
		return aBm.id < 5 && (aBn = "@" + bD.ro.y4(aBm.rj, 5)), 0 === aBm.id ? aBn + ": " + aBm.p : 1 === aBm.id ? (zX = "@" + bD.ro.y4(aBm.target, 5), 0 === aBm.aBo ? 32768 <= aBm.value ? aBn + " voted with " + (aBm.value - 32768 + 1) +
				" gold against " + zX + " to weaken the latter's admin position." : aBn + " voted with " + (aBm.value + 1) + " gold for " + zX + " to strengthen the latter's admin position." : 1 === aBm.aBo ? aBn + " sent " + Math.floor(aBm
					.value / 100) + " Gold to " + zX + "." : aBn + " voted with " + aBm.value + " points for " + zX + " to acknowledge the latter as clan leader.") : 2 === aBm.id ? 0 === aBm.aBo ? aBn + " was muted. Duration: 1 Hour" : 1 === aBm
			.aBo ? "The username of " + aBn + " was redacted. Duration: 1 Day" : aBn + " was kicked." : 3 === aBm.id ? aBn + bm.e0(aBm.aBo, bm.du[aBm.aBo][aBm.value]) + "@" + bD.ro.y4(aBm.target, 5) + bm.e2(aBm.aBo, bm.du[aBm.aBo][aBm.value]) :
			4 === aBm.id ? aBn + bm.e0(5, bm.du[5][aBm.aBo]) + "@" + bD.ro.y4(aBm.target, 5) + bm.e2(5, bm.du[5][aBm.aBo]) : 5 === aBm.id ? aBl[aBm.aBo] : 6 === aBm.id ? "You are about to mention " + aBm.value + " player" + (1 === aBm.value ?
				"" : "s") + ". This action will cost " + (Math.max(20 * aBm.value, 20) / 100).toFixed(2) + " Gold. Proceed? (yes / no)" : void 0
	}, this.qh = function(aBm, a5c) {
		return {
			id: aBm.id,
			p: a5c,
			aBp: 0,
			fontSize: 1,
			ql: 0,
			aBq: aBm.id ? b9.nL : b9.me
		}
	}, this.sw = function(player, qY, aBr) {
		return (2 === qY ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username + (aBr && player.aBO ? " (" + player.aBO + ")" : "")
	}, this.sx = function(sy) {
		return aBj[sy]
	}, this.aBs = function(sy, zi) {
		return sy < 3 || 7 === sy ? aBk[sy][0] : 4 === sy ? aBk[sy][zi < 1 ? 0 : zi < 10 ? 1 : 2] : aBk[sy][zi < 10 ? 0 : 1]
	}, this.aBt = function(zi) {
		return 0 === zi
	}, this.aBX = function(qY, rj) {
		for (var ss = bl.sr.ss, sr = ss[qY], eY = sr.length, aA = 0; aA < eY; aA++)
			if (rj === sr[aA].rj) return sr[aA];
		for (var es = 0; es < ss.length; es++)
			if (qY !== es)
				for (eY = (sr = ss[es]).length, aA = 0; aA < eY; aA++)
					if (rj === sr[aA].rj) return sr[aA];
		return null
	}, this.sz = function(pO) {
		return !!bl.aB1 && pO.rj === bl.aB1.rj
	}, this.aBu = function(sr, aBv, aBw) {
		var zU = [];
		loop: for (var aA = aBv; aA < aBw; aA++) {
			var zV = b8.zR.zW(sr[aA].username);
			if (zV) {
				for (var es = zU.length - 1; 0 <= es; es--)
					if (zV === zU[es].name) {
						zU[es].g0++;
						continue loop
					} zU.push({
					name: zV,
					g0: 1
				})
			}
		}
		if (zU.sort(function(er, es) {
				return es.g0 - er.g0
			}), 0 === zU.length) return "";
		for (var pD = zU[0].name + ": " + zU[0].g0, aA = 1; aA < zU.length; aA++) pD += "   " + zU[aA].name + ": " + zU[aA].g0;
		return pD
	}, this.aBx = function(sy, zi, aBF) {
		return 0 === dp[sy].length ? "Rank: " + (zi + 1) : dp[sy] + " Rank: " + (zi + 1) + (3 !== sy && aBF < 100 ? "   " + dp[3] + " Rank: " + (aBF + 1) : "")
	}
}

function aB9() {
	var rE = 0,
		aBy = 0,
		aBz = 0,
		aC0 = null,
		aC1 = null;

	function aC4(pO, aC5, aC6) {
		var pD = pO.username;
		return (pD += "   " + bl.qg.aBx(pO.sy, pO.zi, pO.aBF)) + function(pO) {
			pO = pO.uh;
			if (pO < 1e3) return "   Gold: " + pO;
			if ((pO %= 1024) < 1e3) return "   Gold: " + pO + "k";
			return "   Gold: " + (pO - 999) + "M"
		}(pO) + ("   IP: " + bD.ro.y4(pO.aBG, 2)) + ("   " + ["🟥 Offline", "🟩 Online"][aC6 ? aBy : aC3(pO, aC5)])
	}

	function aC3(pO, aC5) {
		return aBy = aC5 || bl.sr.aBX(pO.rj) ? 1 : 0
	}
	this.aC2 = function() {
		!rE || aBy === aC3(aC1) && aBz === aC1.uh || (aBz = aC1.uh, aC0.show(-1, -1, aC4(aC1, 0, 1), 1, 1))
	}, this.t0 = function(e, pO, aC5) {
		var a72 = e.target.getBoundingClientRect();
		this.show(a72.left, a72.top, pO, 0, aC5), e.target.addEventListener("mouseleave", function remove() {
			e.target.removeEventListener("mouseleave", remove), bl.sp && bl.sp.qn(1)
		})
	}, this.show = function(ef, eh, pO, rI, aC5) {
		aC0 = aC0 || new rC, aBz = (aC1 = pO).uh, aC0.show(ef, eh, aC4(pO, aC5), rI), rE = 1
	}, this.qn = function(rO) {
		aC0 && aC0.qn(rO) && (rE = 0, aC1 = null)
	}
}

function aB7() {
	function aCB(aCE) {
		bl.x.aBI && 1 === bl.x.qZ[2] && s.aCF(29).aCG(), bl.x.aBI = 0, s.aCF(29).aCH(), 0 !== bl.x.qb[bl.x.qZ[0]].sc && !aCE || s.aCF(29).aCI(), bl.sp.aC2()
	}
	this.qb = new Array(4), this.qZ = [0, 0, 1, 0], this.aBI = 0, this.aC8 = [0, 0], this.dU = function() {
		for (var aA = 0; aA < this.qb.length; aA++) this.qb[aA] = new aC9;
		this.qZ[0] = bh.km.data[158].value
	}, this.aCA = function() {
		aCB(!0)
	}, this.aCC = function() {
		for (var aA = 0; aA < bl.x.qb.length; aA++) {
			var qa = bl.x.qb[aA];
			0 === qa.sc ? qa.aCJ = 0 : (qa.aCK = Math.max(qa.aCK - qa.aCJ % 2, 0), qa.aCJ++)
		}
		aCB(!1)
	}, this.aCL = function(qY) {
		this.qZ[0] !== qY || this.qZ[2] || s.aCF(29).aCM()
	}
}

function aBB() {
	var aCN = 0,
		aCO = "",
		aCP = 0,
		aCQ = 0,
		aCR = 0;

	function aCT(a5c) {
		ay.aCe.aCf(3, a5c)
	}

	function aCc(g0) {
		aCN = 1, bl.message.aCg({
			id: 6,
			value: g0
		})
	}

	function aCW(p) {
		var aCj = new RegExp("\\B@[-\\w\\[\\]]+", "g");
		return p.match(aCj)
	}
	this.yq = function(p) {
		var aCS, g, aCY;
		if (aCN) return aCN = 0, "yes" === (aCS = p.toLowerCase()) || "y" === aCS ? void aCT(aCO) : void bl.message.aCg({
			id: 5,
			aBo: 7
		});
		!(p.indexOf("@") < 0) && (aCS = aCW(p)) ? (aCO = p, g = function(aCV) {
			for (var eY = aCV.length, aCh = [0, 0, 0, 0], aA = 0; aA < eY; aA++)
				for (var i = aCV[aA], er = 0; er < 4; er++) i === "@room" + (er + 1) && (aCh[er] = 1);
			if ((aCQ = b8.pf.a1L(aCh)) % 4 == 0) return b8.pf.a1d(bl.sr.ss);
			for (er = 0; er < 4; er++) aCh[er] = aCh[er] ? bl.sr.ss[er] : [];
			return b8.pf.a1d(aCh)
		}(aCS), function(aCV, aCY, p) {
			if (!aCP) return;
			for (var eY = aCY.length, aA = 0; aA < eY; aA++) 2 === aCY[aA].id && (p = p.replace(aCV[aCY[aA].dx], "@" + aCY[aA].f0));
			return aCN = 1, aCT((aCO = p).slice(0, 126) + "|"), 1
		}(aCS, aCY = function(aCV) {
			for (var aCY = [], eY = (aCR = aCP = 0, aCV.length), aA = 0; aA < eY; aA++) {
				var i = aCV[aA],
					kV = i.length;
				b8.zR.startsWith(i, "@[") ? kV <= 9 && b8.zR.a2C(i, "]") && aCY.push({
					id: 0,
					f0: i.substring(2, kV - 1).toUpperCase()
				}) : 6 === kV ? b8.zR.startsWith(i, "@room") || (aCR++, aCY.push({
					id: 1,
					f0: bE.ro.v9(i.substring(1))
				})) : 1 < kV && kV < 5 && 0 <= (kV = b5.data.aAe(i.substring(1))) && (aCY.push({
					id: 2,
					f0: kV,
					dx: aA
				}), aCP = 1)
			}
			return aCY
		}(aCS), p) || (0 === aCY.length ? aCQ || function(aCV) {
			for (var eY = aCV.length, aA = 0; aA < eY; aA++) {
				var i = aCV[aA];
				if ("@all" === i || "@everyone" === i) return 1
			}
			return
		}(aCS) ? aCc(g.length) : aCT(p) : aCS.length === aCR ? aCT(p) : (function(g, aCY) {
			var kV = aCY.length;
			if (0 === kV) return;
			var eY = g.length;
			loop: for (var aA = eY - 1; 0 <= aA; aA--) {
				for (var er = 0; er < kV; er++)
					if (0 === aCY[er].id) {
						if (aCY[er].f0 === b8.zR.zW(g[aA].username)) continue loop
					} else if (1 === aCY[er].id && aCY[er].f0 === g[aA].rj) continue loop;
				g[aA] = g[--eY], g.pop()
			}
		}(g, aCY), aCc(g.length)))) : aCT(p)
	}, this.aCk = function(p) {
		var aCV = aCW(p);
		if (aCV)
			for (var a4 = new RegExp("^[0-9]+$"), eY = aCV.length, aA = 0; aA < eY; aA++) {
				var i = aCV[aA].substring(1),
					kV = i.length;
				1 <= kV && kV <= 3 && a4.test(i) && (kV = parseInt(i, 10), !isNaN(kV)) && 0 <= kV && kV < b5.data.g.length && (p = p.replace("@" + i, "@" + b5.data.g[kV]))
			}
		return p
	}
}

function aBA() {
	var aCl, aCm = [],
		aCn = -1,
		aCo = 0,
		aCp = 0;

	function aCt() {
		aCo = bd.e7, (3 === this.t4 ? (aCp = 1, aCs) : (aCn = (aCm.length + aCn + 2 * this.t4 - 1) % aCm.length, aCr))()
	}

	function aCr() {
		0 !== aCm.length && (aCp = 0, aCl && aCl.t7(), (aCl = new t1(aCt)).qz(aCn, aCm.length), aCl.show(aCm[aCn]), bl.message.resize())
	}

	function aCs() {
		aCl && aCl.t7(), (aCl = new t8(aCr)).qz(aCm.length), aCl.show(), bl.message.resize()
	}
	this.aCg = function(aBm) {
		var es, aBm = bl.qg.qh(aBm, bl.qg.qi(aBm));
		5 === aBm.id || 6 === aBm.id ? s.aCF(29).aCq().qk(aBm) : (es = bd.e7 < aCo + 2e4, aCn !== aCm.length - 1 && es || (aCn = aCm.length), aCm.push(aBm), bh.km.data[14].value || bn.play(), aCl && (bh.km.data[13].value || aCp && es ? aCl.qz(aCm
			.length) : aCr()))
	}, this.show = function() {
		aCs()
	}, this.qn = function() {
		aCn = aCm.length - 1, aCl && aCl.t7(), aCl = null
	}, this.resize = function() {
		aCl && aCl.resize()
	}
}

function aB8() {
	var aCu = null,
		aCv = null,
		aCw = 0,
		aCx = 0,
		aCy = null;

	function aD0() {
		0 !== aCv.sy && (bl.tD.qn(), s.t(8, 29, new rm(25, {
			rn: 0,
			rj: bD.ro.y4(aCv.rj, 5),
			rk: 0
		}, 29)))
	}

	function aD1() {
		var ef = aCu.ef,
			eh = aCu.eh;
		bl.tD.qn(), aCu = new t9([new v("Kick User", function() {
			aD7(0, 0)
		}, aDC(0, 0)), new v("Block Chat", aD8, aDD(1)), new v("Censor Username", aD9, aDD(2)), new v("Elo Deduction", aDA, aDD(3)), new v("Gold Seizure", aDB, aDD(4))]), aD6(ef, eh), aCw = 2, aCx = 1
	}

	function aDD(id) {
		return !bl.aB1 || bl.qg.sz(aCv) ? 1 : 4 === id && 9 === bl.aB1.sy && bl.aB1.zi < aCv.zi ? 0 : bl.aB1.aBF >= aCv.zi || 0 === id && aCv.zi < 200 ? 1 : 1 - bm.dv(id, bl.aB1.aBF, 0)
	}

	function aD4() {
		return !bl.aB1 || bl.qg.sz(aCv) ? 1 : 0
	}

	function aDC(id, dx) {
		var zi;
		return !bl.aB1 || bl.qg.sz(aCv) || (zi = bl.aB1.aBF, (zi = 4 === id && 9 === bl.aB1.sy ? Math.min(bl.aB1.zi, zi) : zi) >= aCv.zi) ? 1 : 1 - bm.dv(id, zi, dx)
	}

	function aD3() {
		var ef = aCu.ef,
			eh = aCu.eh,
			aDE = (bl.tD.qn(), aD4());
		aCu = new t9([new v(bm.du[5][0], function() {
			aD7(5, 0)
		}, aDE), new v(bm.du[5][1], function() {
			aD7(5, 1)
		}, aDE), new v(bm.du[5][2], function() {
			aD7(5, 2)
		}, aDE), new v(bm.du[5][3], function() {
			aD7(5, 3)
		}, aDE)]), aD6(ef, eh), aCx = aCw = 2
	}

	function aD5() {
		29 === s.rl && s.aDF().aB2(bD.ro.y4(aCv.rj, 5))
	}

	function aD7(id, value) {
		ay.aCe.aCf(5, {
			id: id,
			value: value,
			rj: aCv.rj
		})
	}

	function aD8() {
		var ef = aCu.ef,
			eh = aCu.eh;
		bl.tD.qn(), aCu = new t9([new v(bm.du[1][0], function() {
			aD7(1, 0)
		}, aDC(1, 0)), new v(bm.du[1][1], function() {
			aD7(1, 1)
		}, aDC(1, 1)), new v(bm.du[1][2], function() {
			aD7(1, 2)
		}, aDC(1, 2)), new v(bm.du[1][3], function() {
			aD7(1, 3)
		}, aDC(1, 3)), new v(bm.du[1][4], function() {
			aD7(1, 4)
		}, aDC(1, 4))]), aD6(ef, eh), aCw = 3, aCx = 1
	}

	function aD9() {
		var ef = aCu.ef,
			eh = aCu.eh;
		bl.tD.qn(), aCu = new t9([new v(bm.du[2][0], function() {
			aD7(2, 0)
		}, aDC(2, 0)), new v(bm.du[2][1], function() {
			aD7(2, 1)
		}, aDC(2, 1)), new v(bm.du[2][2], function() {
			aD7(2, 2)
		}, aDC(2, 2))]), aD6(ef, eh), aCw = 3, aCx = 2
	}

	function aDA() {
		var ef = aCu.ef,
			eh = aCu.eh;
		bl.tD.qn(), aCu = new t9([new v(bm.du[3][0], function() {
			aD7(3, 0)
		}, aDC(3, 0)), new v(bm.du[3][1], function() {
			aD7(3, 1)
		}, aDC(3, 1)), new v(bm.du[3][2], function() {
			aD7(3, 2)
		}, aDC(3, 2))]), aD6(ef, eh), aCx = aCw = 3
	}

	function aDB() {
		var ef = aCu.ef,
			eh = aCu.eh;
		bl.tD.qn(), aCu = new t9([new v(bm.du[4][0], function() {
			aD7(4, 0)
		}, aDC(4, 0)), new v(bm.du[4][1], function() {
			aD7(4, 1)
		}, aDC(4, 1)), new v(bm.du[4][2], function() {
			aD7(4, 2)
		}, aDC(4, 2)), new v(bm.du[4][3], function() {
			aD7(4, 3)
		}, aDC(4, 3)), new v(bm.du[4][4], function() {
			aD7(4, 4)
		}, aDC(4, 4))]), aD6(ef, eh), aCw = 3, aCx = 4
	}

	function aD6(ef, eh, tF) {
		aCu.show(ef, eh, tF), bl.sp.show(aCu.ef, aCu.eh, aCv, 1)
	}
	this.aCz = function(e, pO) {
		aCw = 1, aCv = pO, aCu = new t9([new v(L(128), aD0, 0 === aCv.sy ? 1 : 0), new v(L(129), aD1, function() {
			if (!bl.aB1) return 1;
			if (bl.qg.sz(aCv)) return 1;
			if (!(9 === bl.aB1.sy && bl.aB1.zi < aCv.zi)) {
				if (100 <= bl.aB1.aBF) return 1;
				if (bl.aB1.aBF >= aCv.zi) return 1
			}
			return 0
		}()), new v(L(130, 0, "Report"), aD3, aD4()), new v(L(131), aD5, 0)]), aD6((aCy = {
			clientX: e.clientX,
			clientY: e.clientY
		}).clientX, aCy.clientY, 1)
	}, this.a0u = function(code) {
		if (29 !== s.rl) return !1;
		if (!aCv) return !1;
		if (!(code.length < 1))
			if ("Escape" === code) this.qn();
			else if (b8.zR.startsWith(code, "Numpad") || b8.zR.startsWith(code, "Digit")) {
			code = parseInt(code[code.length - 1], 10);
			if (!isNaN(code))
				if (0 === aCw) this.aCz(aCy, aCv);
				else {
					if (!aCu) return !1;
					1 === aCw ? code <= 1 ? aD0() : 2 === code ? aD1() : 3 === code ? aD3() : (aD5(), this.qn()) : 2 === aCw ? 1 === aCx ? code <= 1 ? (aD7(0, 0), this.qn()) : (2 === code ? aD8 : 3 === code ? aD9 : 4 === code ? aDA : aDB)() : (
						aD7(5, bJ.p4(code - 1, 0, 3)), this.qn()) : (aD7(aCx, bJ.p4(code - 1, 0, bm.du[aCx].length - 1)), this.qn())
				}
		}
		return !0
	}, this.qn = function() {
		aCw = 0, aCu && aCu.qn(), aCu = null, bl.sp.qn()
	}
}

function aC9() {
	this.sc = 0, this.eE = 0, this.mapSeed = 0, this.aBZ = 0, this.aDG = 0, this.aDH = 0, this.aBf = 0, this.aCK = 0, this.spawningSeed = 0, this.a06 = 0, this.aBd = 0, this.qc = [], this.qd = 1048575, this.aCJ = 0, this.aDI = [{
		eE: 0,
		mapSeed: 0,
		aBZ: 0,
		e7: 100,
		aBf: 0
	}, {
		eE: 1,
		mapSeed: 0,
		aBZ: 1,
		e7: 200,
		aBf: 0
	}, {
		eE: 2,
		mapSeed: 0,
		aBZ: 2,
		e7: 300,
		aBf: 0
	}, {
		eE: 3,
		mapSeed: 0,
		aBZ: 3,
		e7: 400,
		aBf: 0
	}, {
		eE: 0,
		mapSeed: 0,
		aBZ: 9,
		e7: 500,
		aBf: 0
	}, {
		eE: 1,
		mapSeed: 0,
		aBZ: 10,
		e7: 600,
		aBf: 0
	}, {
		eE: 2,
		mapSeed: 0,
		aBZ: 8,
		e7: 700,
		aBf: 0
	}, {
		eE: 3,
		mapSeed: 0,
		aBZ: 3,
		e7: 800,
		aBf: 0
	}]
}

function aBC() {
	var aDJ = [],
		ry = [];

	function aDP(pD, pO) {
		var aDQ = function(pD) {
				var rj = bE.ro.v9(pD),
					aDQ = bl.sr.aBX(rj);
				if (aDQ) {
					for (aDJ.push(aDQ); 50 < aDJ.length;) aDJ.shift();
					return aDQ
				}
				for (var aA = aDJ.length - 1; 0 <= aA; aA--)
					if (rj === aDJ[aA].rj) return aDQ = aDJ[aA], aA < 40 && aDJ.push(aDQ), aDQ;
				return bl.sr.aBH(rj, pD, 1, 999999, 999999, 0, 0, 0, 0)
			}(pD),
			pD = (pO && 0 === pO.id && pO.ql && (pO.fontSize = bl.qg.aBs(aDQ.sy, aDQ.zi), pO.aBp = bl.qg.aBt(aDQ.zi)), document.createElement("span"));
		return pD.textContent = aDQ.username, pD.style.display = "inline-block", pD.style.color = bl.qg.sx(aDQ.sy), pD.style.cursor = "pointer", pD.style.margin = "0", pD.style.font = "inherit", pD.style.minWidth = pD.style.minHeight = "1em", bl.qg
			.sz(aDQ) && (pD.style.textDecoration = "underline"), bl.qg.aBt(aDQ.zi) && (pD.style.fontWeight = "bold"), pD.onclick = function(e) {
				bl.tD.aCz(e, aDQ)
			}, bH.pz() || (pD.onmouseover = function(e) {
				bl.sp.t0(e, aDQ)
			}), ry.push(pD), pD
	}

	function aDO(p, pO) {
		var qV = document.createElement("span");
		return qV.textContent = p, qV.style.color = pO.aBq, qV.style.margin = "0", qV.style.font = "inherit", qV
	}
	this.t7 = function() {
		for (var aA = 0; aA < ry.length; aA++) ry[aA].onclick = ry[aA].onmouseover = null;
		ry[aA] = null
	}, this.transform = function(pO) {
		for (var pB = document.createElement("div"), aDK = function(pO) {
				var p = pO.p,
					aDK = [];
				for (;;) {
					var et = function aDN(p, position) {
						position = p.indexOf("@", position);
						if (position < 0) return -1;
						var pD = p.substring(position + 1, position + 6);
						if (5 !== pD.length) return aDN(p, position + 1);
						if (b8.zR.startsWith(pD, "room")) return aDN(p, position + 1);
						var aDS = new RegExp("^[a-zA-Z0-9_-]+$");
						if (!aDS.test(pD)) return aDN(p, position + 1);
						aDS = p.substring(position + 6, position + 7);
						if (1 !== aDS.length) return position;
						pD = new RegExp("^[ :!.]+$");
						if (!pD.test(aDS)) return aDN(p, position + 1);
						return position
					}(p, 0);
					if (-1 === et) {
						aDK.push(aDO(p, pO));
						break
					}
					0 === et ? aDK.push(aDP(p.substring(1, 6), pO)) : (aDK.push(aDO(p.substring(0, et), pO)), aDK.push(aDP(p.substring(et + 1, et + 6)))), p = p.substring(et + 6)
				}
				return aDK
			}(pO), aA = 0; aA < aDK.length; aA++) pB.appendChild(aDK[aA]);
		pB.style.margin = "0.6em 0.6em", pO.ql && (pB.style.marginLeft = pB.style.marginRight = "inherit"), pB.style.font = "inherit";
		var aDM = 0 < pO.id;
		return pO.aBp && (pB.style.fontWeight = "bold"), aDM && (pB.style.paddingLeft = "0.7em"), aDM && (pB.style.fontStyle = "italic"), pB.style.fontSize = pO.fontSize.toFixed(2) + "em", pB
	}
}

function cK() {
	var aDV, aDW, aDX;

	function aDc(aA) {
		var button = aX.q6[aA],
			ef = button.ef,
			eh = button.eh,
			i = button.i,
			j = button.j;
		te.fillStyle = button.aDa, te.fillRect(ef, eh, i, j), aA === aDV && (te.fillStyle = aDX, te.fillRect(ef, eh, i, j)), te.lineWidth = ba.xn, te.strokeStyle = aDW, te.strokeRect(ef, eh, i, j),
			function(button) {
				var ef = button.ef,
					eh = button.eh,
					i = button.i,
					j = button.j;
				b8.pW.textAlign(te, 1), b8.pW.textBaseline(te, 1), te.font = button.font, te.fillStyle = aDW, te.fillText(button.a5c, Math.floor(ef + i / 2), Math.floor(eh + j / 2 + .1 * button.fontSize))
			}(button)
	}
	this.i = 0, this.j = 0, this.eh = 0, this.gap = 0, this.dU = function() {
		aDV = -1, aDW = b9.me, aDX = "rgba(255,255,255,0.16)", this.q6 = new Array(7), this.j = Math.floor((z.a0.qu() ? .123 : .093) * h.pY), this.i = Math.floor((z.a0.qu() ? 3.96 : 4.2) * this.j), this.gap = Math.floor(.025 * this.i);
		var aDY = Math.floor(.26 * this.j),
			aDZ = b8.pW.rL(1, aDY);
		this.q6[0] = {
			ef: 0,
			eh: 0,
			i: Math.floor(.6 * this.i - this.gap / 2),
			j: this.j,
			a5c: "Multiplayer",
			font: aDZ,
			aDa: "rgba(22,88,22,0.8)",
			fontSize: aDY
		}, aDY = Math.floor(.18 * this.j), aDZ = b8.pW.rL(1, aDY), this.q6[1] = {
			ef: 0,
			eh: 0,
			i: this.i - this.q6[0].i - this.gap,
			j: this.j,
			a5c: "Single Player",
			font: aDZ,
			aDa: "rgba(22,88,88,0.8)",
			fontSize: aDY
		}, this.q6[2] = {
			ef: 0,
			eh: 0,
			i: this.i,
			j: Math.floor(.3 * this.j),
			a5c: "",
			font: this.q6[1].font,
			aDa: "rgba(100,0,0,0.8)",
			fontSize: this.q6[1].fontSize
		}, this.q6[3] = {
			ef: 0,
			eh: 0,
			i: this.i,
			j: this.j,
			a5c: "Back",
			font: this.q6[0].font,
			aDa: "rgba(0,0,0,0.8)",
			fontSize: this.q6[0].fontSize
		}, this.q6[4] = {
			ef: 0,
			eh: 0,
			i: this.i,
			j: Math.floor(.3 * this.j),
			a5c: "The game was updated!",
			font: this.q6[1].font,
			aDa: "rgba(100,0,0,0.8)",
			fontSize: this.q6[1].fontSize
		}, this.q6[5] = {
			ef: 0,
			eh: 0,
			i: this.q6[0].i,
			j: Math.floor(.8 * this.j),
			a5c: "Reload",
			font: this.q6[0].font,
			aDa: "rgba(0,100,0,0.8)",
			fontSize: this.q6[0].fontSize
		}, this.q6[6] = {
			ef: 0,
			eh: 0,
			i: this.q6[1].i,
			j: this.q6[5].j,
			a5c: "Back",
			font: this.q6[0].font,
			aDa: "rgba(0,0,0,0.8)",
			fontSize: this.q6[0].fontSize
		}, this.a7z()
	}, this.a7z = function() {
		this.eh = Math.floor(.54 * h.j), this.q6[0].ef = Math.floor(.5 * h.i - .5 * this.i), this.q6[1].ef = this.q6[0].ef + this.q6[0].i + this.gap, this.q6[2].ef = this.q6[3].ef = this.q6[0].ef, this.q6[4].ef = this.q6[5].ef = this.q6[0].ef,
			this.q6[6].ef = this.q6[1].ef, this.q6[0].eh = Math.floor(.54 * h.j), this.q6[1].eh = this.q6[0].eh, this.q6[2].eh = Math.floor((h.j - this.q6[2].j - this.q6[3].j - this.gap) / 2), this.q6[3].eh = this.q6[2].eh + this.q6[2].j + this
			.gap, this.q6[4].eh = Math.floor((h.j - this.q6[4].j - this.q6[5].j - this.gap) / 2), this.q6[5].eh = this.q6[6].eh = this.q6[4].eh + this.q6[4].j + this.gap
	}, this.aDb = function() {
		aDc(0), aDc(1)
	}, this.aDd = function() {
		aDc(2), aDc(3)
	}, this.aDe = function() {
		aDc(4), aDc(5), aDc(6)
	}, this.a0M = function(ef, eh, lO) {
		var aA = -1;
		return 0 === aZ.a00() ? aA = this.a0q(ef, eh, 0, 2) : 3 === aZ.a00() ? aA = this.a0q(ef, eh, 3, 1) : 5 === aZ.a00() && (aA = this.a0q(ef, eh, 5, 2)), aDV !== aA && (aDV = aA, lO) && (bd.dc = !0), -1 !== aA && (aS.qW(), !0)
	}, this.a0q = function(ef, eh, aDf, size) {
		for (var aA = aDf; aA < aDf + size; aA++)
			if (ef >= this.q6[aA].ef && eh >= this.q6[aA].eh && ef <= this.q6[aA].ef + this.q6[aA].i && eh <= this.q6[aA].eh + this.q6[aA].j) return aA;
		return -1
	}
}

function cL() {
	var aDh, aDi, aDj, aDk, aDl, aDm, aDn, aDo, aDp, aDq, aDr, aDs, aDt, aDu = 1;

	function aDw(aDx) {
		!aDx && 1 === aDt && aDu ? (aDu = 0, ay.x.close(aDt, 3280)) : aDt = (aDt + 1) % ay.x.aDy, aDs = bd.e7, ay.x.aDz(aDt, 4) && ay.aCe.aE0(aDt)
	}

	function aE1() {
		if (0 !== aDt) return 1 === aDt && __fx.customLobby.isActive() ? (q.a0B(3249), __fx.customLobby.setActive(!1)) : void aDw();
		q.a0B(3249)
	}

	function aE6(eh, a7g, sc) {
		var m4 = Math.floor((h.i - aDk) / 2) + aDn,
			mH = m4 + Math.floor(sc * (aDk - 2 * aDn));
		te.lineWidth = a7g, te.beginPath(), te.moveTo(m4, eh), te.lineTo(mH, eh), te.lineTo(Math.floor(m4 - aDn + sc * aDk), eh + aDj), te.lineTo(m4 - aDn, eh + aDj), te.closePath()
	}
	this.aDv = 1, this.dU = function() {
		aZ.setState(6), aDh = 0, aDi = 1, aDo = "rgba(0,220,120,0.4)", aDp = "rgba(0,0,0,0.8)", this.resize(), bd.dc = !0, aDu = 1, aDt = this.aDv - 1, aDw(1)
	}, this.resize = function() {
		aDk = Math.floor((z.a0.qu() ? .5 : .25) * h.pY), aDl = aDk + 12, aDj = Math.floor(.125 * aDk), aDn = 3 * aDj, aDm = Math.floor(.225 * aDk), aDr = Math.floor(.3 * aDj), aDq = b8.pW.rL(0, aDr)
	}, this.a03 = function(zx) {
		zx === aDt && aE1()
	}, this.gl = function(ef, eh) {
		var m4 = Math.floor((h.i - aDl) / 2),
			m5 = Math.floor(.5 * (h.j - ba.gap - aDj - aDm)) + aDj + ba.gap;
		return m4 < ef && ef < m4 + aDl && m5 < eh && eh < m5 + aDm && (this.a12(), aX.a0M(ef, eh, !1), !0)
	}, this.a12 = function() {
		ay.x.a0C(3260), __fx.customLobby.setActive(false), s.x.y()
	}, this.ih = function() {
		6 === aZ.a00() && (bd.e7 > aDs + 12e3 && aE1(), 100 < (aDh += .07 * aDi * (aDh < 16 ? 5 + aDh : 84 < aDh ? 105 - aDh : 17)) ? (aDh = 100, aDi = -1) : aDh < 0 && (aDh = 0, aDi = 1), aDo = "rgba(0," + Math.floor(190 - 1.9 * aDh) + "," +
			Math.floor(120 - 1.2 * aDh) + "," + (.4 + .004 * aDh) + ")", aDp = "rgba(0," + Math.floor(1.9 * aDh) + "," + Math.floor(1.2 * aDh) + "," + (.8 - .004 * aDh) + ")", bd.dc = !0)
	}, this.td = function() {
		var ef = Math.floor((h.i - aDl) / 2),
			eh = Math.floor(.5 * (h.j - ba.gap - aDj - aDm));
		! function(title, eh, a7g, sc) {
			te.fillStyle = aDp, aE6(eh, a7g, 1), te.fill(), te.fillStyle = aDo, aE6(eh, a7g, sc), te.fill(), te.strokeStyle = b9.me, aE6(eh, a7g, 1), te.stroke(),
				function(aE8, eh) {
					b8.pW.textAlign(te, 1), b8.pW.textBaseline(te, 1), te.font = aDq, te.fillStyle = b9.me, te.fillText(aE8, Math.floor(.5 * h.i), Math.floor(eh + .58 * aDj))
				}(title, eh)
		}(L(132), eh, 3, aDh / 100),
		function(ef, eh, i, j, a5c) {
			te.fillStyle = b9.mZ, te.fillRect(ef, eh, i, j), te.lineWidth = 3, te.strokeStyle = b9.me, te.strokeRect(ef, eh, i, j);
			var eY = Math.floor(.3 * j);
			b8.pW.textAlign(te, 1), b8.pW.textBaseline(te, 1), te.font = b8.pW.rL(0, eY), te.fillStyle = b9.me, te.fillText(a5c, Math.floor(ef + i / 2), Math.floor(eh + j / 2 + .1 * eY))
		}(ef, eh + aDj + ba.gap, aDl, aDm, L(35))
	}
}

function cM() {
	var zt = 0;
	this.dU = function() {
		aX.dU(), zt = 0
	}, this.setState = function(aE9) {
		zt = aE9
	}, this.a00 = function() {
		return zt
	}, this.aEA = function() {
		this.setState(8), s.w()
	}, this.a0u = function(e) {
		if (!bQ.vP) return !1;
		if (!(bd.e7 < 400)) {
			if ("Enter" === e.key || "Escape" === e.key) {
				if (this.aEB()) return !0;
				if ("Enter" === e.key) {
					if (0 === zt) return !0;
					if (7 === zt) return !0
				}
			}
			return !1
		}
	}, this.aEC = function() {
		bX.resize()
	}, this.aEB = function() {
		return !!bX.qn()
	}, this.gl = function(ef, eh) {
		!bQ.vP || bX.gl(ef, eh) || 6 === zt && aY.gl(ef, eh) || bW.gl(ef, eh) || aS.gl(ef, eh)
	}, this.a0M = function(ef, eh) {
		!aS.a7s && aX.a0M(ef, eh, !0) || aS.a0M(ef, eh)
	}, this.click = function(ef, eh) {
		aS.a0l()
	}, this.a0P = function(ef, eh, deltaY) {}, this.aED = function() {
		aX.a7z(), bd.dc = !0
	}, this.td = function() {
		8 !== zt && 10 !== zt && (te.imageSmoothingEnabled = !0, this.wx(), 0 !== zt && (aS.td(), aN.td(), this.aEE(), bW.td()), 0 !== zt && 6 === zt && aY.td(), bX.td(), s.td())
	}, this.wx = function() {
		var aEG, aEF;
		if (__fx.makeMainMenuTransparent) te.clearRect(0, 0, h.i, h.j);
		else bQ.vP ? (aEF = h.i / bQ.ej, aEG = h.j / bQ.ek, te.setTransform(aEF = aEG < aEF ? aEF : aEG, 0, 0, aEF, Math.floor((h.i - aEF * bQ.ej) / 2), Math.floor((h.j - aEF * bQ.ek) / 2)), te.drawImage(bQ.vR, 0, 0), te.setTransform(1, 0, 0, 1,
			0, 0), te.fillStyle = b9.mZ) : te.fillStyle = b9.mV, te.fillRect(0, 0, h.i, h.j)
	}, this.aEE = function() {
		var eh = Math.floor(.3 * h.j),
			canvas = aa.aEH("territorial.io"),
			hU = (hU = 1.75 * h.j / canvas.width) * canvas.width < .98 * h.i ? .98 * h.i / canvas.width : hU,
			ef = (te.globalAlpha = .15, te.imageSmoothingEnabled = !1, Math.floor(.5 * (h.i - hU * canvas.width))),
			ef = Math.floor(ef / hU),
			eh = Math.floor(eh - .5 * canvas.height * hU),
			eh = Math.floor(eh / hU);
		te.setTransform(hU, 0, 0, hU, ef, eh), te.drawImage(canvas, ef, eh), te.setTransform(1, 0, 0, 1, 0, 0), te.globalAlpha = 1, te.imageSmoothingEnabled = !0
	}
}

function cl() {
	this.aBd = 0;
	var aEJ, aEK, aEL, aEM, aEN, aEO = this.aEI = 0;

	function aER() {
		aEM = aEN = null, aEO = 0
	}
	this.dU = function(qa, aBa, aBb) {
		s.w(), bl.t7(), aZ.setState(10), aEM = qa, aEN = aBa, aEO = aBb, this.aBd = qa.aBd, this.aEI = aBb, aEJ = 0, aEK = bd.e7 + 4500, ay.x.a06 = qa.a06, ay.x.a05 === qa.a06 ? (console.log("direct pass"), aEL = 0) : (console.log(
			"delayed pass"), ay.x.close(ay.x.a05, 3247), aEL = 2, ay.x.aDz(qa.a06, 5) && ay.nv.aEP()), te.imageSmoothingEnabled = !0, aZ.wx();
		aBa = aa.aEH("loading"), aBb = (z.a0.qu() ? .396 : .25) * h.pY / aBa.width;
		te.setTransform(aBb, 0, 0, aBb, Math.floor((h.i - aBb * aBa.width) / 2), Math.floor((h.j - aBb * aBa.height) / 2)), te.imageSmoothingEnabled = !1, te.drawImage(aBa, 0, 0), te.setTransform(1, 0, 0, 1, 0, 0)
	}, this.lM = function() {
		0 < aEL && bd.e7 > aEK && (aEL--, aEK += 4500, 0 === bd.aET) && 0 === bd.jk() && ay.x.aDz(ay.x.a06, 5)
	}, this.aEU = function() {
		return 10 === aZ.a00() && (bl.aB3.aBe(aEM, aEN, aEO), aER(), !0)
	}, this.aEV = function() {
		10 === aZ.a00() && 2 <= ++aEJ && (bl.aB3.aBe(aEM, aEN, aEO), aER())
	}
}

function cN() {
	var aEX, canvas, z8, aEY;

	function aEe(dx, name, aEf, pD) {
		z8[dx] = name, canvas[dx] = new Image, canvas[dx].onload = function() {
			! function(dx, aEf) {
				var a2h, a2i = null;
				7 === aEf ? a2h = b8.a18.a2k : 8 === aEf ? (a2h = b8.a18.a2n, a2i = .1) : 3 === aEf ? (a2h = b8.a18.a2l, a2i = .06) : 5 === aEf ? a2h = b8.a18.a2o : 6 === aEf ? a2h = b8.a18.a2j : 4 === aEf && (a2h = b8.a18.a2p);
				canvas[dx] = b8.a18.a2g(canvas[dx], a2h, a2i)
			}(dx, aEf), aEh()
		}, canvas[dx].onerror = function(e) {
			console.error("Error loading image at index", dx, "Error:", e), aEh()
		}, canvas[dx].src = "data:image/png;base64," + pD
	}

	function aEh() {
		aEX--, aEb()
	}

	function aEb() {
		0 === aEX && (aEX = -1, aEd(), bd.dc = !0, canvas[7] = aEY, canvas[8] = aEY, canvas[9] = aEY, canvas[10] = aEY, 5 === s.rl) && s.aDF().aEj.resize()
	}

	function aEd() {
		aK.a3t(), bW.aAu([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== z.id, 1 !== z.id, !0, !0, !0]), ai.vU = new xK, ai.vU.dU(), au.dV()
	}
	this.dU = function() {
		if (void 0 === canvas) {
			aEX = 23, canvas = new Array(aEX), z8 = new Array(aEX), (aEY = document.createElement("canvas")).width = 1;
			for (var aA = aEX - (aEY.height = 1); 0 <= aA; aA--) canvas[aA] = aEY;
			aEd(), aEe(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aEe(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aEe(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aEe(3, "orders", 6,
					"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"
					), aEe(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), aEe(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aEe(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), aEe(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aEe(8,
					"googleplay", 3,
					"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"
					), aEe(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aEe(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aEe(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aEe(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aEe(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aEe(14, "bestPlayer", 5,
					"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"
					), aEe(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aEe(16, "apple", 3,
					"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"
					), aEe(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aEe(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aEe(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aEe(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aEe(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aEe(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(dx) {
		return canvas[dx]
	}, this.aEH = function(name) {
		for (var aA = z8.length - 1; 0 <= aA; aA--)
			if (z8[aA] === name) return canvas[aA];
		return aEY
	}, this.sD = function() {
		return aEX <= 0
	}, this.aEa = function() {
		aEX = 0, aEb()
	}
}

function cO() {
	var aEm, aEn, aEo, aEp, aEq, aEr, aEs, aEt, aEu, aEv, aEk = [
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
		aEl = [
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

	function aF1(j4, mM) {
		for (var aA = j4; aA < mM; aA++) aEm[aA] = 4 * bJ.dj(64 * aw.random(), aw.value(100)), aEn[aA] = 4 * bJ.dj(64 * aw.random(), aw.value(100)), aEo[aA] = 4 * bJ.dj(64 * aw.random(), aw.value(100))
	}

	function aF0(j4, mM) {
		for (var colorsData = aC.data.colorsData, aA = j4; aA < mM; aA++) {
			var f0 = colorsData[aA];
			aEm[aA] = 4 * (f0 >> 12), aEn[aA] = 4 * (f0 >> 6 & 63), aEo[aA] = 4 * (63 & f0)
		}
	}

	function aFC(eC, aFE) {
		aAH[eC] = 0, aAH[eC + 1] = 0, aAH[eC + 2] = aFE, aAH[eC + 3] = 0, aFF(eC)
	}

	function aFF(eC) {
		var ef;
		bZ.mU || (ef = ab.wy(eC), eC = ab.wz(eC), bZ.mU = ef >= bY.aAG[0] && ef <= bY.aAG[2] && eC >= bY.aAG[1] && eC <= bY.aAG[3])
	}
	this.ea = new Int32Array(4), this.dV = function() {
		var ea = this.ea;
		ea[0] = -4 * bQ.ej, ea[1] = 4, ea[2] = -ea[0], ea[3] = -ea[1]
	}, this.dU = function() {
		if (aEm = new Uint8Array(aC.eV), aEn = new Uint8Array(aC.eV), aEo = new Uint8Array(aC.eV), aEp = new Uint8Array(aC.eV), aEq = new Uint8Array(aC.eV), aEr = new Uint8Array(aC.eV), aEs = new Uint8Array(aC.eV), aEt = new Uint8Array(aC.eV),
			aEu = new Uint8Array(aC.eV), aEv = new Uint8Array(aC.eV), this.a6s = new Uint8Array(aC.eV), aC.hN)
			for (var aA = aC.eV - 1; 0 <= aA; aA--) {
				var et = be.k9[be.eW[aA]],
					kV = bJ.dj((aEl[et][3] + 1) * aw.random(), aw.value(100));
				aEm[aA] = aEk[et][0] + kV * aEl[et][0], aEn[aA] = aEk[et][1] + kV * aEl[et][1], aEo[aA] = aEk[et][2] + kV * aEl[et][2]
			} else 0 === aC.data.colorsType ? aC.data.selectableColor ? (aF0(0, aC.jn), aF1(aC.jn, aC.eV)) : aF1(0, aC.eV) : aF0(0, aC.eV);
		! function() {
			var aA, eb;
			for (aA = aC.eV - 1; 0 <= aA; aA--) eb = bJ.dj(aEm[aA] + aEn[aA] + aEo[aA], 3), aEm[aA] += aF7(eb - aEm[aA], 2), aEn[aA] += aF7(eb - aEn[aA], 2), aEo[aA] += aF7(eb - aEo[aA], 2), aEm[aA] -= aEm[aA] % 4, aEn[aA] -= aEn[aA] % 4, aEo[
				aA] -= aEo[aA] % 4
		}(),
		function() {
			for (var aA = aC.eV - 1; 0 <= aA; aA--) aEm[aA] += bJ.dj(aA, 128), aEn[aA] += bJ.dj(aA % 128, 32), aEo[aA] += bJ.dj(aA % 32, 8), aEp[aA] = aA % 8
		}(), this.aF4(),
			function() {
				for (var aA = aC.eV - 1; 0 <= aA; aA--) aEq[aA] = aEm[aA] < 32 ? aEm[aA] + 32 : aEm[aA] - 32, aEr[aA] = aEn[aA] < 32 ? aEn[aA] + 32 : aEn[aA] - 32, aEs[aA] = aEo[aA] < 32 ? aEo[aA] + 32 : aEo[aA] - 32
			}(),
			function() {
				for (var aA = aC.eV - 1; 0 <= aA; aA--) aEt[aA] = 235 < aEm[aA] ? aEm[aA] - 20 : aEm[aA] + 20, aEu[aA] = 235 < aEn[aA] ? aEn[aA] - 20 : aEn[aA] + 20, aEv[aA] = 235 < aEo[aA] ? aEo[aA] - 20 : aEo[aA] + 20
			}()
	}, this.a5r = function(player) {
		var g = bM.f7;
		return g[0] = aEm[player], g[1] = aEn[player], g[2] = aEo[player], g
	}, this.aF4 = function() {
		for (var aA = aC.eV - 1; 0 <= aA; aA--) this.a6s[aA] = aEm[aA] + aEn[aA] + aEo[aA] < 280 ? 0 : 1
	}, this.wy = function(eC) {
		return bJ.dj(eC, 4) % bQ.ej
	}, this.wz = function(eC) {
		return bJ.dj(eC, 4 * bQ.ej)
	}, this.wY = function(ef, eh) {
		return Math.floor(4 * (eh * bQ.ej + ef))
	}, this.wo = function(eC) {
		var ea = this.ea;
		return this.aF8(eC + ea[0]) || this.aF8(eC + ea[1]) || this.aF8(eC + ea[2]) || this.aF8(eC + ea[3])
	}, this.ex = function(eC) {
		var ea = this.ea;
		return this.ed(eC + ea[0]) || this.ed(eC + ea[1]) || this.ed(eC + ea[2]) || this.ed(eC + ea[3])
	}, this.wm = function(eC, player) {
		var ea = this.ea;
		return this.aF9(eC + ea[0], player) || this.aF9(eC + ea[1], player) || this.aF9(eC + ea[2], player) || this.aF9(eC + ea[3], player)
	}, this.g7 = function(eC) {
		return 208 <= aAH[eC + 3]
	}, this.wt = function(player, eC) {
		return this.g7(eC) && this.aFA(player, eC)
	}, this.aFA = function(player, eC) {
		return player === this.eQ(eC)
	}, this.aFB = function(eC) {
		return 208 <= aAH[eC + 3] && aAH[eC + 3] < 224
	}, this.j0 = function(eC) {
		return 224 <= aAH[eC + 3] && aAH[eC + 3] < 248
	}, this.wn = function(eC) {
		for (var ea = this.ea, aA = 3; 0 <= aA; aA--)
			if (this.h0(eC + ea[aA])) return !0;
		return !1
	}, this.eT = function(eC) {
		return this.g7(eC) || this.eP(eC)
	}, this.h0 = function(eC) {
		return 0 === aAH[eC + 3] && 2 === aAH[eC + 2]
	}, this.eP = function(eC) {
		return 0 === aAH[eC + 3] && 1 === aAH[eC + 2]
	}, this.vd = function(eC) {
		return 0 === aAH[eC + 3] && 3 === aAH[eC + 2]
	}, this.ed = function(eC) {
		return 0 === aAH[eC + 3] && 5 <= aAH[eC + 2]
	}, this.aF8 = function(eC) {
		return 0 === aAH[eC + 3] && 3 <= aAH[eC + 2]
	}, this.eG = function(eC) {
		return aAH[eC + 2] - 5
	}, this.aF9 = function(eC, player) {
		return this.eP(eC) || this.g7(eC) && player !== this.eQ(eC)
	}, this.eQ = function(eC) {
		return aAH[eC] % 4 * 128 + aAH[eC + 1] % 4 * 32 + aAH[eC + 2] % 4 * 8 + aAH[eC + 3] % 8
	}, this.wu = function(eC) {
		aFC(eC, 1)
	}, this.aFD = function(eC) {
		aFC(eC, 2)
	}, this.wZ = function(eC, player) {
		aAH[eC] = aEm[player], aAH[eC + 1] = aEn[player], aAH[eC + 2] = aEo[player], aAH[eC + 3] = 208 + aEp[player], aFF(eC)
	}, this.g2 = function(eC, player) {
		aAH[eC] = aEq[player], aAH[eC + 1] = aEr[player], aAH[eC + 2] = aEs[player], aAH[eC + 3] = 224 + aEp[player], aFF(eC)
	}, this.j1 = function(eC, player) {
		aAH[eC] = aEt[player], aAH[eC + 1] = aEu[player], aAH[eC + 2] = aEv[player], aAH[eC + 3] = 248 + aEp[player], aFF(eC)
	}
}

function cm() {
	var dx = 0,
		aFG = new Uint16Array(32);

	function remove(a3x) {
		var aA;
		for (dx -= 2, aA = a3x; aA < dx; aA += 2) aFG[aA] = aFG[aA + 2], aFG[aA + 1] = aFG[aA + 3]
	}
	this.dU = function() {
		dx = 0
	}, this.ih = function() {
		var aA, iy, i7;
		if (0 !== dx)
			if (0 === af.lc[aC.eI] || ac.aFH(aC.eI) === ac.fd(aC.eI)) dx = 0;
			else
				for (aA = dx - 2; 0 <= aA; aA -= 2)(iy = aFG[aA]) < aC.eV && 0 === af.lc[iy] ? remove(aA) : (i7 = aFG[aA + 1], (iy >= aC.eV && aFI(aC.eI) || iy < aC.eV && aFJ(aC.eI, iy)) && (b6.gu.h5(i7, iy), remove(aA)))
	}, this.h7 = function(iy, i7) {
		! function(iy, i7) {
			var aA;
			for (aA = 0; aA < dx; aA += 2)
				if (aFG[aA] === iy) return aFG[aA + 1] = Math.min(aFG[aA + 1] + i7, 1023), 1;
			return
		}(iy, i7) && 32 !== dx && (aFG[dx] = iy, aFG[dx + 1] = i7, dx += 2)
	}
}

function cP() {
	function aFQ(player) {
		var di;
		b8.ft.a2I(player) && (di = af.gZ[player] - af.a2M[player] + ac.aFS(player), bb.fx(player, Math.abs(di), di < 0 ? 18 : 12)), af.gZ[player] = 0, af.a2M[player] = 0
	}

	function aFZ() {
		aW.show(!1, !1, !1, !0), aV.a9R(), bP.yX.zI()
	}

	function aFN(player, aFY) {
		for (var aA = aFY.length - 1; 0 <= aA; aA--) ac.aFb(aFY[aA], player)
	}

	function aFP(player) {
		for (var iM = af.iM, iN = af.iN, iO = af.iO, iP = af.iP, m4 = iM[player], m5 = iO[player], ej = bQ.ej, gL = af.gL, ef = iN[player]; m4 <= ef; ef--)
			for (var eh = iP[player]; m5 <= eh; eh--) {
				var g5 = 4 * (eh * ej + ef);
				ab.wt(player, g5) && (ab.wu(g5), gL[player]--)
			}
		iN[player] = iP[player] = 0, iM[player] = iO[player] = Math.max(ej, bQ.ek)
	}
	this.dd = function(g5) {
		var player, di = af.gL[g5];
		bL.x.oj[g5] ? di && (aFN(player = g5, ac.aFO(player)), aFP(player), aE.fv(player), ac.clear(player), aFQ(player), function(player) {
			af.wU[player] = 0, af.fz[player] = [], af.gD[player] = [], af.gE[player] = [], af.ey[player] = []
		}(player)) : !di && af.fz[g5].length || this.aFM(g5)
	}, this.aFM = function(player) {
		! function(player) {
			b8.ft.jB(player) || (af.zM[player] = bg.zf.aFX(), aC.yo++);
			var aFY = ac.aFO(player);
			0 === aFY.length ? b8.ft.a2F(player) && aFZ() : (aFN(player, aFY), function(player, aFY) {
				var aFd = aFY[function(aFY) {
					var aA, dx = 0;
					for (aA = aFY.length - 1; 1 <= aA; aA--) af.gL[aFY[aA]] > af.gL[aFY[dx]] && (dx = aA);
					return dx
				}(aFY)];
				9 === aC.k4 && (1 === be.eW[player] ? aw.jf(8) && ax.aFe(aFd) : aD.hC[player] && aFd !== aC.eI && aM.zA(300, L(94, [af.zN[player], af.zN[aFd]]), 40, aFd, b9.me, b9.mb, -1, !0));
				if (b8.ft.a2F(player)) aFZ(), aM.yy(aFd, 1);
				else {
					for (var aA = aFY.length - 1; 0 <= aA; aA--)
						if (b8.ft.a2I(aFY[aA]) && (bb.lY[4 - b8.ft.jB(player)]++, b8.ft.a2F(aFY[aA]))) return aM.yy(player, 0);
					b8.ft.jB(player) || aM.a59(0, player, aFd)
				}
			}(player, aFY))
		}(player), aFP(player), aFQ(player),
			function(player) {
				af.lc[player] = 0, af.fz[player] = null, af.gD[player] = null, af.gE[player] = null, af.ey[player] = null
			}(player), aE.fv(player), ac.clear(player), bL.aFV.aFW(player)
	}
}

function cr() {
	var input;

	function aFf(e) {
		(e = e.target.files) && 0 < e.length && b4.aFi(e[0])
	}

	function aFm(e) {
		var et = new Image;
		et.onload = aFn, et.src = e.target.result
	}

	function aFn(e) {
		var e = e.target,
			canvas = document.createElement("canvas");
		canvas.width = e.width, canvas.height = e.height;
		canvas.getContext("2d").drawImage(e, 0, 0);
		var e = canvas.width,
			j = canvas.height;
		e > bQ.aFp || j > bQ.aFp || e < 10 || j < 10 ? (e = "Image dimensions must be between 10 and " + bQ.aFp + ".", z.uF ? z.uF.showToast(e) : alert(e)) : 20 === s.rl && s.aDF().aFn(canvas)
	}
	this.dU = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = aFf
	}, this.t7 = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.aFg = function() {
		input.click()
	}, this.aFi = function(aFj) {
		var g = aFj.name.split("."),
			g = g[g.length - 1].toLowerCase();
		"gif" !== g && "jpg" !== g && "jpeg" !== g && "png" !== g || ((g = new FileReader).onload = aFm, g.readAsDataURL(aFj))
	}
}

function cp() {
	this.aFr = null, this.dU = function() {
		10 !== aC.k4 ? this.aFr = null : this.aFr = new Uint32Array(aC.eV)
	}, this.ih = function() {
		10 === aC.k4 && this.qg()
	}, this.qg = function() {
		for (var g5, target, a9c, aFr = this.aFr, ya = ak.jp, a2N = af.gZ, aA = ak.jo - 1; 0 <= aA; aA--)(g5 = ya[aA]) >= aC.jn || (target = Math.max(bJ.dj(a2N[g5], 4), 2048), a9c = Math.max(ad.a9d(g5), 100), aFr[g5] += bJ.dj(a9c * target, 1e4),
			aFr[g5] > target && (aFr[g5] = target))
	}, this.a2T = function(player, hC) {
		return hC > this.aFr[player] ? (hC = this.aFr[player], this.aFr[player] = 0) : this.aFr[player] -= hC, hC
	}
}

function dQ() {
	function aFt(e) {
		var g, e = e.target.files;
		e && 0 < e.length && (e = e[0], "json" === (g = e.name.split("."))[g.length - 1].toLowerCase()) && ((g = new FileReader).onload = aG1, g.readAsText(e))
	}

	function aG1(e) {
		var aG5;
		aC.ym || (e = JSON.parse(e.target.result), aG5 = aC.data = new a3J, aG6(e, aG5, "mapType", 0, 2), aG6(e, aG5, "mapProceduralIndex", 0, 255), aG6(e, aG5, "mapRealisticIndex", 0, 255), aG6(e, aG5, "mapSeed", 0, 16383), function(aG4, aG5, g6,
				max) {
				aG4 = aG4[g6];
				aG5[g6] = aGC(aG4) ? aG4.slice(0, max) : aG5[g6]
			}(e, aG5, "mapName", 20), function(aG4, aG5, g6) {
				var aFo;
				2 === aG5.mapType && (!aGC(aG4 = aG4[g6]) || aG4.length <= 20 ? aG5.mapType = 0 : ((aFo = new Image).onload = function() {
					b7.aGD.aGE(aFo, 1), aFo.onload = null, aFo = null
				}, aFo.src = aG4))
			}(e, aG5, "canvas"), aG6(e, aG5, "passableWater", 0, 1), aG6(e, aG5, "passableMountains", 0, 1), aG6(e, aG5, "playerCount", 1, 512), aG6(e, aG5, "humanCount", 1, 1), aG6(e, aG5, "selectedPlayer", 0, 0), aG6(e, aG5, "gameMode", 0, 1),
			aG6(e, aG5, "playerMode", 0, 0), aG6(e, aG5, "battleRoyaleMode", 0, 0), aG6(e, aG5, "numberTeams", 0, 8), aG6(e, aG5, "isZombieMode", 0, 0), aG6(e, aG5, "isContest", 0, 0), aG6(e, aG5, "isReplay", 0, 0), aG9(e, aG5, "elo", 16, 2,
				16383), aG6(e, aG5, "colorsType", 0, 1), aG6(e, aG5, "colorsPersonalized", 0, 1), aG9(e, aG5, "colorsData", 32, 512, 262143), aG6(e, aG5, "selectableColor", 0, 1), aG9(e, aG5, "teamPlayerCount", 16, 9, 512), aG6(e, aG5,
				"neutralBots", 0, 1), aG6(e, aG5, "botDifficultyType", 0, 3), aG6(e, aG5, "botDifficultyValue", 0, 15), aG9(e, aG5, "botDifficultyTeam", 8, 9, 15), aG9(e, aG5, "botDifficultyData", 8, 512, 15), aG6(e, aG5, "spawningType", 0, 2),
			aG6(e, aG5, "spawningSeed", 0, 16383), aG9(e, aG5, "spawningData", 16, 1024, 4095), aG6(e, aG5, "selectableSpawn", 0, 1), aG6(e, aG5, "playerNamesType", 0, 2),
			function(aG4, aG5, g6, size, max) {
				var a1T = aG4[g6];
				if (Array.isArray(a1T)) {
					for (var a1U = new Array(size), eY = Math.min(a1T.length, size), aA = 0; aA < eY; aA++) a1U[aA] = aGC(a1T[aA]) ? a1T[aA].slice(0, max) : "";
					aG5[g6] = a1U
				}
			}(e, aG5, "playerNamesData", 512, 20), aG6(e, aG5, "selectableName", 0, 1), aG6(e, aG5, "aIncomeType", 0, 2), aG6(e, aG5, "aIncomeValue", 0, 255), aG9(e, aG5, "aIncomeData", 8, 512, 255), aG6(e, aG5, "tIncomeType", 0, 2), aG6(e, aG5,
				"tIncomeValue", 0, 255), aG9(e, aG5, "tIncomeData", 8, 512, 255), aG6(e, aG5, "iIncomeType", 0, 2), aG6(e, aG5, "iIncomeValue", 0, 255), aG9(e, aG5, "iIncomeData", 8, 512, 255), aG6(e, aG5, "sResourcesType", 0, 2), aG6(e, aG5,
				"sResourcesValue", 0, 2047), aG9(e, aG5, "sResourcesData", 16, 512, 2047), s.w(), s.x.aG3[0] = 0, s.t(19))
	}

	function aG6(aG4, aG5, g6, min, max) {
		aG4 = aG4[g6];
		aG5[g6] = "number" == typeof aG4 && min <= aG4 && aG4 <= max ? Math.floor(aG4) : aG5[g6]
	}

	function aGC(pD) {
		return "string" == typeof pD
	}

	function aG9(aG4, aG5, g6, aGF, size, max) {
		var a1T = aG4[g6];
		if (Array.isArray(a1T)) {
			for (var a1U = new(8 === aGF ? Uint8Array : 16 === aGF ? Uint16Array : Uint32Array)(size), eY = Math.min(a1T.length, size), aA = 0; aA < eY; aA++) a1U[aA] = bJ.p4(a1T[aA], 0, max);
			aG5[g6] = a1U
		}
	}
	this.aFs = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aFt, input.click()
	}, this.aFu = function() {
		for (var aFx, aAr, a6A = aC.data, keys = Object.keys(a6A), aFv = {}, aA = 0; aA < keys.length; aA++) {
			var key = keys[aA];
			a6A[key] instanceof Uint8Array || a6A[key] instanceof Uint16Array || a6A[key] instanceof Uint32Array ? aFv[key] = Array.from(a6A[key]) : aFv[key] = a6A[key]
		}
		aFv.canvas = 2 === aFv.mapType && aFv.canvas ? aFv.canvas.toDataURL() : null, aFx = aFv, aFx = JSON.stringify(aFx, null, 2), aFx = new Blob([aFx], {
			type: "application/json"
		}), (aAr = document.createElement("a")).href = URL.createObjectURL(aFx), aAr.download = "tt_scenario.json", aAr.click()
	}
}

function cS() {
	var aGG, aGH, size, iy, hC, id, aGI;

	function aGJ(player) {
		return player < aC.jn ? aGG * player : aGG * aC.jn + aGH * (player - aC.jn)
	}
	this.dU = function() {
		aGG = aC.jn < 16 ? 12 : 8, aGH = 4;
		var eY = aGJ(aC.eV);
		size = new Uint8Array(aC.eV), iy = new Uint16Array(eY), hC = new Uint32Array(eY), id = new Uint16Array(eY), aGI = new Uint8Array(eY)
	}, this.p3 = function(a6N, aGK) {
		var aGL = this.ga(a6N, aGK),
			aGK = (this.gY(a6N, aGK, 0), b8.ft.fw(a6N, aGL));
		bb.fx(a6N, aGL - aGK, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.aFb = function(player, aGK) {
		var aGO, aGK = function(player, aGK) {
			var aA, kV = aGJ(player);
			for (aA = size[player] - 1; 0 <= aA; aA--)
				if (0 === id[kV + aA] && iy[kV + aA] === aGK) return aA;
			return size[player]
		}(player, aGK);
		aGK !== size[player] && (aGO = hC[aGJ(player) + aGK], this.fy(player, aGK), this.iv(player, aGO, aC.eV))
	}, this.j9 = function(player, aGK) {
		for (var kV = aGJ(player), aA = size[player] - 1; 0 <= aA; aA--)
			if (0 === id[kV + aA] && iy[kV + aA] === aGK) return !0;
		return !1
	}, this.jR = function(player) {
		return player < aC.jn ? size[player] < aGG : size[player] < aGH
	}, this.fd = function(player) {
		return size[player]
	}, this.fj = function(player, aA) {
		return iy[aGJ(player) + aA]
	}, this.fe = function(player, aA) {
		return id[aGJ(player) + aA]
	}, this.aGP = function(player, aGQ) {
		for (var kV = aGJ(player), aA = size[player] - 1; 0 <= aA; aA--)
			if (id[kV + aA] === aGQ) return aA;
		return -1
	}, this.fk = function(player, aA) {
		return hC[aGJ(player) + aA]
	}, this.ga = function(player, aGK) {
		for (var kV = aGJ(player), aA = size[player] - 1; 0 <= aA; aA--)
			if (0 === id[kV + aA] && iy[kV + aA] === aGK) return hC[kV + aA];
		return 0
	}, this.aFS = function(player) {
		for (var kV = aGJ(player), f0 = 0, aA = size[player] - 1; 0 <= aA; aA--) f0 += hC[kV + aA];
		return f0
	}, this.aGR = function(player) {
		for (var kV = aGJ(player), f0 = 0, aA = size[player] - 1; 0 <= aA; aA--) 0 === id[kV + aA] && (f0 += hC[kV + aA]);
		return f0
	}, this.aFH = function(player) {
		for (var kV = aGJ(player), g0 = 0, aA = size[player] - 1; 0 <= aA; aA--) 0 < id[kV + aA] && g0++;
		return g0
	}, this.gY = function(player, aGK, aGO) {
		for (var kV = aGJ(player), aA = size[player] - 1; 0 <= aA; aA--) 0 === id[kV + aA] && iy[kV + aA] === aGK && (hC[kV + aA] = aGO)
	}, this.gJ = function(player, aA, aGO) {
		hC[aGJ(player) + aA] = Math.max(aGO, 0)
	}, this.gK = function(player, aA) {
		aGI[aGJ(player) + aA] = 0
	}, this.fl = function(player, aA) {
		return aGI[aGJ(player) + aA]
	}, this.iv = function(player, aGO, aGK) {
		b8.ft.a2I(aGK) && bb.lY[6 - b8.ft.jB(player)]++;
		for (var kV = aGJ(player), aA = size[player] - 1; 0 <= aA; aA--)
			if (0 === id[kV + aA] && iy[kV + aA] === aGK) return hC[kV + aA] += aGO, void(hC[kV + aA] = hC[kV + aA] > aC.a2P ? aC.a2P : hC[kV + aA]);
		iy[kV + size[player]] = aGK, hC[kV + size[player]] = aGO, id[kV + size[player]] = 0, aGI[kV + size[player]] = 1, size[player]++, player < aC.jn && (aGK === aC.eI ? aM.yy(player, 5) : player === aC.eI && ae.a5B(aGK))
	}, this.aGS = function(player, aGO, aGQ) {
		var kV = aGJ(player);
		iy[kV + size[player]] = 0, hC[kV + size[player]] = aGO, id[kV + size[player]] = aGQ, aGI[kV + size[player]] = 0, size[player]++
	}, this.fy = function(player, dx) {
		var er, kV;
		if (0 !== size[player])
			for (kV = aGJ(player), size[player]--, er = dx; er < size[player]; er++) iy[kV + er] = iy[kV + er + 1], hC[kV + er] = hC[kV + er + 1], id[kV + er] = id[kV + er + 1], aGI[kV + er] = aGI[kV + er + 1]
	}, this.aFO = function(player) {
		for (var er, kV, aFY = [], aA = ak.jo - 1; 0 <= aA; aA--)
			for (kV = aGJ(ak.jp[aA]), er = size[ak.jp[aA]] - 1; 0 <= er; er--)
				if (0 === id[kV + er] && iy[kV + er] === player) {
					aFY.push(ak.jp[aA]);
					break
				} return aFY
	}
}

function cT() {
	var aGT;

	function aGV(player) {
		var dw, jS;
		return b8.ft.jB(player) && player < aC.jn ? 0 : (dw = aGT[bJ.dj((aC.eV - 1) * af.gL[player], aC.jX)], bd.jk() < 1920 && (dw = Math.max(bJ.dj(100 * (13440 - 6 * bd.jk()), 1920), dw)), jS = ad.jT(player), af.gZ[player] > jS && (dw -= bJ.dj(2 *
			dw * (af.gZ[player] - jS), jS)), Math.min(Math.max(dw, 0), 700))
	}

	function aGh(mG) {
		for (var gL = af.gL, jp = ak.jp, aA = ak.jo - 1; 0 <= aA; aA--) {
			var g5 = jp[aA];
			b8.ft.fw(g5, bJ.dj(mG * gL[g5], 32))
		}
	}

	function aGe() {
		var vV = aC.eI;
		bM.f4[0] = af.gZ[vV] - af.a2M[vV]
	}

	function aGg(dx) {
		var vV = aC.eI;
		bb.lY[dx] += af.gZ[vV] - af.a2M[vV] - bM.f4[0]
	}
	this.db = function() {
		for (var eY = aC.eV, aA = (aGT = new Uint16Array(eY), 0); aA < eY; aA++) aGT[aA] = 100 + aGU(bJ.dj(25600 * aA, eY - 4), 9)
	}, this.dU = function() {
		0 === aC.data.iIncomeType ? this.a9d = aGV : 1 === aC.data.iIncomeType ? this.a9d = function(player) {
			return bJ.dj(aC.data.iIncomeValue * aGV(player), 64)
		} : this.a9d = function(player) {
			return bJ.dj(aC.data.iIncomeData[player] * aGV(player), 64)
		}
	}, this.ih = function() {
		if (bd.jk() % 10 == 9 && (function() {
				aGe();
				for (var jp = ak.jp, gZ = af.gZ, aA = ak.jo - 1; 0 <= aA; aA--) {
					var g5 = jp[aA],
						aGf = bJ.dj(ad.a9d(g5) * gZ[g5], 1e4);
					b8.ft.fw(g5, Math.max(aGf, 1))
				}
				aGg(9)
			}(), function() {
				if (0 !== aC.data.aIncomeType) {
					if (aGe(), 1 === aC.data.aIncomeType)
						for (var gL = af.gL, jp = ak.jp, mG = aC.data.aIncomeValue, aA = ak.jo - 1; 0 <= aA; aA--) {
							var g5 = jp[aA];
							b8.ft.fw(g5, bJ.dj(mG * gL[g5], 128))
						} else 2 === aC.data.aIncomeType && function() {
							for (var gL = af.gL, jp = ak.jp, mG = aC.data.aIncomeData, aA = ak.jo - 1; 0 <= aA; aA--) {
								var g5 = jp[aA];
								b8.ft.fw(g5, bJ.dj(mG[g5] * gL[g5], 128))
							}
						}();
					aGg(18)
				}
			}(), bd.jk() % 100 == 99)) {
			if (aGe(), 0 === aC.data.tIncomeType) aGh(32);
			else if (1 === aC.data.tIncomeType) aGh(aC.data.tIncomeValue);
			else
				for (var gL = af.gL, jp = ak.jp, mG = aC.data.tIncomeData, aA = ak.jo - 1; 0 <= aA; aA--) {
					var g5 = jp[aA];
					b8.ft.fw(g5, bJ.dj(mG[g5] * gL[g5], 32))
				}
			aGg(8)
		}
	}, this.jT = function(player) {
		return Math.min(100 * af.gL[player], aC.a3F)
	}, this.ny = function(player, nz) {
		b8.ft.fw(nz, bM.f5[0]), bb.oK(player, nz), ae.aGX(player, bM.f5[0] + bM.f5[1]), ae.oL(nz, bM.f5[0]), b8.ft.ot(player)
	}, this.aGY = function() {
		for (var eY = ak.jo, ya = ak.jp, kV = 0, a2N = af.gZ, aA = 0; aA < eY; aA++) kV += a2N[ya[aA]];
		return kV
	}, this.aGZ = function(aGa) {
		for (var g5, eY = ak.jo, ya = ak.jp, kV = 0, a2N = af.gZ, eW = be.eW, aA = 0; aA < eY; aA++) eW[g5 = ya[aA]] === aGa && (kV += a2N[g5]);
		return kV
	}
}

function cV() {
	var aGl, aGm, aGn, aGo, aGp, aGq, aGr, aGs, aGt, aGu, aGv, aGw, aGx, aGy, aGz, aH0, aH1, aH2, aH4, aH5, aAk, aH6, aH7, aHE, aHF, aH3 = null,
		aH9 = 0,
		aHA = !1,
		aHB = new Float32Array(4),
		aHC = 0,
		aHD = !0,
		a8o = 400,
		aHG = 0;

	function pa() {
		aGt = Math.floor(+h.pY), aGu = Math.floor(.5 * aGt)
	}

	function aHH() {
		var aA, aHM;
		for (te.font = b8.pW.rL(1, 100 * aGv), aHM = 80 / Math.floor(te.measureText(b8.zR.y4(aC.a2P)).width), te.font = b8.pW.rL(1, 100), aA = aC.eV - 1; 0 <= aA; aA--) aGs[aA] = 100 / Math.floor(te.measureText(af.zN[aA]).width), aGr[aA] = Math.min(
			aHM, aGs[aA])
	}

	function aHN(aA) {
		return !aHG || (aA = af.gZ[aA]) < 1e6 ? 1 : aA < 1e7 ? aHB[0] : aHB[Math.min(Math.floor(Math.log10(aA)) - 6, 3)]
	}

	function aHL(hV) {
		aH2 = !1, aH1 = 1, aGz = aH0 = 0, aHD && (b8.pW.textAlign(hV, 1), b8.pW.textBaseline(hV, 1));
		for (var aHT, aHU, aA, aHV, fontSize, aHW, m4 = i8 / i9, m5 = iA / i9, mH = (h.i + i8) / i9, mI = (h.j + iA) / i9, aHX = 0 !== af.lc[aC.eI] && !b8.ft.jB(aC.eI), er = ak.jo - 1; 0 <= er; er--) aA = ak.jp[er], (fontSize = Math.floor(aGy * i9 *
			aHN(aA) * aGr[aA] * aGp[aA])) < aGx || aGt <= fontSize || aGn[aA] + aGp[aA] > m4 && aGn[aA] < mH && aGo[aA] + aGq[aA] > m5 && aGo[aA] < mI && (aHT = Math.floor(h.i * (aGn[aA] + aGp[aA] / 2 - m4) / (mH - m4)), aHU = Math.floor(h.j * (
			aGo[aA] + aGq[aA] / 2 - m5) / (mI - m5) - .1 * fontSize), aHV = ab.a6s[aA], hV.font = b8.pW.rL(1 === af.a2E[aA] ? 4 : 1, fontSize), hV.fillStyle = aHY(fontSize, aHV % 2), aHG ? aHZ(hV, aA, fontSize, aHT, aHU, aHV) : aHa(aA,
			fontSize, aHT, aHU, hV), aH2 = !0, 0 < aAk[aA] ? function(aHT, aHU, fontSize, aA, hV) {
			0 === jY[aA] ? ai.qm.xv(aH5[aA]) ? (function(aHT, aHU, fontSize, player, o9, hV) {
				for (var w3 = aHU, hU = (hV.globalAlpha = aHi(fontSize), aHN(player) * (aHG ? aHC : aGs[player])), w2 = aHT - .5 * fontSize / hU - .9 * fontSize, es = 0; es < 2; es++) hV.fillText(ai.qm.xp(o9), w2, w3), w2 = aHT + .5 *
					fontSize / hU + .9 * fontSize;
				hV.globalAlpha = 1
			}(aHT, aHU, fontSize, aA, aH5[aA], hV), aHc(aHT, aHU, fontSize, 0, 0, hV)) : ai.qm.xx(aH5[aA]) ? (aHl(aHT, aHU, fontSize, aH5[aA], 0, hV), aHc(aHT, aHU, fontSize, 0, 1, hV)) : (aHl(aHT, aHU, fontSize, aH5[aA], 1, hV), aHc(aHT,
				aHU, fontSize, 1, 0, hV)) : aHl(aHT, aHU, fontSize, aH5[aA], 0, hV)
		}(aHT, aHU, fontSize, aA, hV) : 0 === jY[aA] && aHc(aHT, aHU, fontSize, 0, 0, hV), aHX && (0 < aAk[aA + aC.eV] || 0 < aAk[aA + 2 * aC.eV] || 0 < aAk[aA + 3 * aC.eV] || 0 < aAk[aA + 4 * aC.eV]) && function(aHT, aHU, fontSize, aA, hV) {
			var et, g0 = -1;
			for (et = 4; 1 <= et; et--) 0 < aAk[aA + et * aC.eV] && g0++;
			for (et = 1; et < 5; et++) 0 < aAk[aA + et * aC.eV] && (! function(aHT, aHU, fontSize, et, aA, aHg, di, hV) {
				var a1h;
				if (1 === et) {
					aA = aH5[aA + aC.eV];
					if (!ai.qm.xw(aA)) return function(aHT, aHU, fontSize, o9, aHg, hV) {
						hV.globalAlpha = aHi(fontSize);
						aHT -= .534 * aHg * fontSize, aHg = aHU + 1.59 * fontSize;
						hV.font = b8.pW.rL(0, .785 * fontSize), hV.fillText(ai.qm.xp(o9), aHT, aHg), hV.globalAlpha = 1
					}(aHT, aHU, fontSize, aA, aHg, hV);
					a1h = ai.vU.xO[aA - 1024 + ai.qm.xa]
				} else a1h = 2 === et ? aK.a3v()[4].canvas[+(di < 255)] : (3 === et ? aK.a3v()[5] : aK.a3v()[6]).canvas[0];
				aA = ai.vU.xP, di = .8 * fontSize / aA, et = aHT - .5 * di * aA - .534 * aHg * fontSize, aHT = aHU + 1.4 * di * aA;
				hV.setTransform(di, 0, 0, di, et, aHT), hV.globalAlpha = aHi(fontSize), hV.drawImage(a1h, 0, 0), hV.globalAlpha = 1, hV.setTransform(1, 0, 0, 1, 0, 0)
			}(aHT, aHU, fontSize, et, aA, g0, aAk[aA + et * aC.eV], hV), g0 -= 2)
		}(aHT, aHU, fontSize, aA, hV), (aHW = aGv * fontSize) < aGx || (hV.font = b8.pW.rL(1, aHW), aHU += Math.floor(.78 * fontSize), aHG ? aHa(aA, aHW, aHT, aHU, hV) : aHZ(hV, aA, aHW, aHT, aHU, aHV)))
	}

	function aHa(aA, fontSize, ef, eh, hV) {
		var ___id = aA;
		var showName = aA < aC.jn || !__fx.settings.hideBotNames;
		if (showName) hV.fillText(af.zN[aA], ef, eh), aA < aC.jn && 2 !== af.a2E[aA] || (aA = fontSize / aGs[aA], hV.fillRect(ef - .5 * aA, eh + b8.pW.xq * fontSize, aA, Math.max(1, .1 * fontSize)));
		aHG && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (hV.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			hV.fillText(__fx.utils.getDensity(___id), ef, showName ? eh + fontSize : eh)
		);
	}

	function aHZ(hV, aA, fontSize, aHT, aHU, aHV) {
		var ___id = aA;
		aA = b8.zR.y4(af.gZ[aA]);
		aHV >> 1 & 1 ? (hV.lineWidth = .05 * fontSize, hV.strokeStyle = aHY(fontSize, aHV % 2), hV.strokeText(aA, aHT, aHU)) : (1 < aHV && (hV.lineWidth = .12 * fontSize, hV.strokeStyle = aHY(fontSize, aHV), hV.strokeText(aA, aHT, aHU)), hV.fillText(
			aA, aHT, aHU));
		aHG || __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (hV.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)), hV.fillText(__fx.utils.getDensity(___id), aHT, aHU + fontSize))
	}

	function aHc(aHT, aHU, fontSize, aHg, aHh, hV) {
		var a4U = .95 * fontSize / aH7,
			aHT = aHT - .5 * a4U * aH6 + .8 * aHg * fontSize,
			aHg = aHU - 1.76 * a4U * aH7 - (.35 - b8.pW.xq + .7) * aHh * fontSize;
		hV.setTransform(a4U, 0, 0, a4U, aHT, aHg), hV.globalAlpha = aHi(fontSize), hV.drawImage(aa.get(4), 0, 0), hV.globalAlpha = 1, hV.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aHl(aHT, aHU, fontSize, o9, aHg, hV) {
		var hP, w2, a4U;
		hV.globalAlpha = aHi(fontSize), ai.qm.xw(o9) ? (hP = ai.vU.xP, hV.setTransform(a4U = 1.1 * fontSize / hP, 0, 0, a4U, w2 = aHT - .5 * a4U * hP - .8 * aHg * fontSize, a4U = aHU - 1.55 * a4U * hP), hV.drawImage(ai.vU.xO[o9 - 1024 + ai.qm.xa], 0,
			0), hV.setTransform(1, 0, 0, 1, 0, 0)) : (w2 = aHT - .8 * aHg * fontSize, a4U = aHU - (.35 - b8.pW.xq + 1) * fontSize, hV.fillText(ai.qm.xp(o9), w2, a4U)), hV.globalAlpha = 1
	}

	function aHY(fontSize, aHV) {
		return aGu <= fontSize && fontSize < aGt ? be.aHn[aHV] + aHi(fontSize).toFixed(3) + ")" : be.aHo[aHV]
	}

	function aHi(fontSize) {
		return aGu <= fontSize && fontSize < aGt ? 1 - (fontSize - aGu) / (aGt - aGu) : 1
	}

	function aHx(hU, i) {
		return 1 + Math.floor(aGw * hU * i)
	}

	function aHu(aA) {
		for (var left = aGn[aA], er = aGn[aA] - af.iM[aA] - 1; 0 <= er; er--)
			if (!aHz(aA, --left, aGo[aA], aGq[aA])) {
				left++;
				break
			} var right = aGn[aA];
		for (er = af.iN[aA] - aGn[aA] - aGp[aA]; 0 <= er; er--)
			if (!aHz(aA, ++right + aGp[aA] - 1, aGo[aA], aGq[aA])) {
				right--;
				break
			} var ef = Math.floor((left + right) / 2),
			top = aGo[aA];
		for (er = aGo[aA] - af.iO[aA] - 1; 0 <= er; er--)
			if (!aI0(aA, ef, --top, aGp[aA])) {
				top++;
				break
			} var bottom = aGo[aA];
		for (er = af.iP[aA] - aGo[aA] - aGq[aA]; 0 <= er; er--)
			if (!aI0(aA, ef, ++bottom + aGq[aA] - 1, aGp[aA])) {
				bottom--;
				break
			} var eh = Math.floor((top + bottom) / 2);
		aHr(aA, ef, eh, aGp[aA], aGq[aA]) && (aGn[aA] = ef, aGo[aA] = eh)
	}

	function aHr(player, ef, eh, i, j) {
		eb = Math.floor(.2 * i);
		for (var eb, et = ef + i - 1; ef <= et; et--)
			if (!aHz(player, et, eh, j)) return;
		for (et = eh + j - 1 - (eb = (eb = Math.floor(.25 * j)) < 1 ? 1 : eb); eh + eb <= et; et--)
			if (!aI0(player, ef, et, i)) return;
		return 1
	}

	function aHz(player, ef, eh, j) {
		return ab.wt(player, 4 * (eh * bQ.ej + ef)) && ab.wt(player, 4 * ((eh + j - 1) * bQ.ej + ef))
	}

	function aI0(player, ef, eh, i) {
		return ab.wt(player, 4 * (eh * bQ.ej + ef)) && ab.wt(player, 4 * (eh * bQ.ej + ef + i - 1))
	}
	this.dU = function() {
		if (aHG = bh.km.data[7].value || 8 === aC.k4, a8o = 0 === (a8o = bh.km.data[11].value) ? 280 : 1 === a8o ? 187 : 112, aH2 = !1, aGy = .88, aGv = .5, aGw = 1.8, aGx = 12 - 3 * bh.km.data[9].value, aGm = aGl = 0, aGn = new Uint16Array(aC
				.eV), aGo = new Uint16Array(aC.eV), aGp = new Uint16Array(aC.eV), aGq = new Uint16Array(aC.eV), aGr = new Float32Array(aC.eV), aGs = new Float32Array(aC.eV), aH5 = new Uint16Array(2 * aC.eV), aAk = new Uint8Array(5 * aC.eV), aHE =
			new Uint8Array(aC.eV), aHF = new Uint8Array(aC.eV), aHD || (aH3 = aH3 || document.createElement("canvas")), pa(), aH0 = aGz = 0, aH1 = 1, aHG) {
			var aA, aHM;
			for (aHH(), te.font = b8.pW.rL(1, 100), aHM = 100 / Math.floor(te.measureText("900 000").width), aA = aC.eV - 1; 0 <= aA; aA--) aGr[aA] = Math.min(aHM, 2 * aGs[aA]);
			aHC = aHM, aHB[0] = 100 / (aHM * Math.floor(te.measureText("5 000 000").width)), aHB[1] = 100 / (aHM * Math.floor(te.measureText("50 000 000").width)), aHB[2] = 100 / (aHM * Math.floor(te.measureText("500 000 000").width)), aHB[3] =
				100 / (aHM * Math.floor(te.measureText("1 000 000 000").width))
		} else aHH();
		! function() {
			var aA;
			for (aA = aC.eV - 1; 0 <= aA; aA--) af.gL[aA] < 12 ? (aGn[aA] = af.iM[aA] + 1, aGo[aA] = af.iO[aA] + 1, aGp[aA] = 1, aGq[aA] = 1) : (aGn[aA] = af.iM[aA], aGo[aA] = af.iO[aA] + 1, aGp[aA] = 4, aGq[aA] = 2);
			if (aC.gt)
				for (aA = 0; aA < aC.jn; aA++) aGp[aA] = 0;
			aH6 = aa.get(4).width, aH7 = aa.get(4).height
		}()
	}, this.aGX = function(g5, a5R) {
		a5R > 18 * af.gL[g5] ? (aHF[g5] = 6, ab.a6s[g5] = 2 + ab.a6s[g5] % 2) : (aHE[g5] = 4, (ab.a6s[g5] < 2 || 3 < ab.a6s[g5]) && (ab.a6s[g5] = 6 + ab.a6s[g5] % 2))
	}, this.oL = function(g5, a5R) {
		a5R > 6 * af.gL[g5] ? (aHF[g5] = 6, ab.a6s[g5] = 4 + ab.a6s[g5] % 2) : (aHE[g5] = 4, (ab.a6s[g5] < 4 || 5 < ab.a6s[g5]) && (ab.a6s[g5] = 8 + ab.a6s[g5] % 2))
	}, this.resize = function() {
		pa(), aHD || aHL(aH4)
	}, this.a3B = function() {
		for (var aA = 0; aA < aC.jn; aA++) af.iN[aA] - af.iM[aA] != 3 || af.iP[aA] - af.iO[aA] != 3 ? (aGn[aA] = af.iM[aA] + (af.iN[aA] !== af.iM[aA] ? 1 : 0), aGo[aA] = af.iO[aA], aGp[aA] = 1, aGq[aA] = 1) : (aGn[aA] = af.iM[aA], aGo[aA] = af
			.iO[aA] + 1, aGp[aA] = 4, aGq[aA] = 2)
	}, this.p5 = function(player, dx, aHO) {
		! function(player, dx, aHO) {
			player += dx * aC.eV;
			0 === dx ? aH5[player] === aHO && 0 < aAk[player] ? aAk[player] = 0 : (aH5[player] = aHO, aAk[player] = ai.qm.xv(aHO) ? 255 : 64) : 1 === dx ? (aAk[player] = 64, aH5[player] = aHO) : aAk[player] = aHO
		}(player, dx, aHO), 2 === aC.ym && this.lO(!0)
	}, this.td = function() {
		aHD ? aHL(te) : aH2 && (1 !== aH1 ? (te.imageSmoothingEnabled = !0, te.setTransform(aH1, 0, 0, aH1, 0, 0), te.drawImage(aH3, -aGz / aH1, -aH0 / aH1), te.setTransform(1, 0, 0, 1, 0, 0), te.imageSmoothingEnabled = !1) : te.drawImage(aH3, -
			aGz, -aH0))
	}, this.a7c = function(ht, hw) {
		aGz += ht, aH0 += hw
	}, this.a0M = function(ht, hw) {
		ae.a7c(ht, hw)
	}, this.zoom = function(a1G, kr, ks) {
		aH1 *= a1G, aGz = (aGz + kr) * a1G - kr, aH0 = (aH0 + ks) * a1G - ks
	}, this.lO = function(bp) {
		return !aHD && !(!aHA && !bp && bd.e7 < aH9 + (1 === aH1 && 0 === aGz && 0 === aH0 && (aC.a3e() || aC.gt || 2 === aC.ym) ? 1e3 : a8o) || (aHA = !1, aH9 = bd.e7, aHL(aH4), 0))
	}, this.aHR = function(aA) {
		return aHN(aA) * aGr[aA]
	}, this.aHS = function(player) {
		return aGr[player]
	}, this.ih = function() {
		bd.jk() % 10 == 9 && (aHA = aC.a3g() && !aC.a3e()), !aC.a3e() && 4 <= ++aGm && function() {
			var aA, er, es;
			for (aGm = 0, es = 4; 1 <= es; es--)
				for (er = ak.jo - 1; 0 <= er; er--) aA = ak.jp[er] + es * aC.eV, 0 < aAk[aA] && aAk[aA] < 255 && aAk[aA]--;
			if (2 !== aC.ym)
				for (er = ak.jo - 1; 0 <= er; er--) aA = ak.jp[er], 0 < aAk[aA] && aAk[aA] < 255 && aAk[aA]--
		}();
		var aA, er, eY = Math.floor(.1 * ak.jo);
		for (eY = (eY = eY < 8 ? 8 : eY) > ak.jo ? ak.jo : eY, aA = aGl + eY - 1; aGl <= aA; aA--) er = aA % ak.jo, ! function(aA) {
			var hU = aHN(aA) * aGr[aA];
			0 < aGp[aA] && aHr(aA, aGn[aA], aGo[aA], aGp[aA], aGq[aA]) ? ! function(aA) {
				for (var ef, eh, i, j, eC = !1, es = 0; es < 8; es++) {
					if (i = aGp[aA] + 2, j = aGq[aA] + 2, i > af.iN[aA] - af.iM[aA] + 1 || j > af.iP[aA] - af.iO[aA] + 1) return eC;
					if (ef = aGn[aA] - 1, eh = aGo[aA] - 1, !aHr(aA, ef, eh, i, j)) return eC;
					aGn[aA] = ef, aGo[aA] = eh, aGp[aA] = i, aGq[aA] = j, eC = !0
				}
				return eC
			}(aA) && function(aA, hU) {
				for (var ef, eh, i, j, eC = !1, aAt = aGp[aA], mG = 1 + Math.floor(.02 * aAt), es = 1; es < 5; es++) {
					if ((i = aAt + es * mG) > af.iN[aA] - af.iM[aA] + 1) return eC;
					if ((j = aHx(hU, i)) > af.iP[aA] - af.iO[aA] + 1) return eC;
					ef = af.iM[aA] + Math.floor(Math.random() * (af.iN[aA] - af.iM[aA] + 2 - i)), eh = af.iO[aA] + Math.floor(Math.random() * (af.iP[aA] - af.iO[aA] + 2 - j)), aHr(aA, ef, eh, i, j) && (aGn[aA] = ef, aGo[aA] = eh, aGp[
						aA] = i, aGq[aA] = j, eC = !0)
				}
				return eC
			}(aA, hU) && aHu(aA) : ! function(aA, hU) {
				var j, ef = aGn[aA] + 1,
					eh = aGo[aA] + 1,
					i = aGp[aA] - 2;
				for (;;) {
					if (i < 1) {
						aGp[aA] = 0;
						break
					}
					if (j = aHx(hU, i), aHr(aA, ef, eh, i, j)) return aGn[aA] = ef, aGo[aA] = eh, aGp[aA] = i, aGq[aA] = j, 1;
					ef++, eh++, i -= 2
				}
				return
			}(aA, hU) ? function(aA, hU) {
				var ef, eh, i, j, es, mM, j4 = af.iN[aA] - af.iM[aA] + 1,
					aHy = Math.floor(.02 * j4);
				for (mM = -6 * (aHy = aHy < 1 ? 1 : aHy), es = j4; mM <= es; es -= aHy)
					if (j = aHx(hU, i = 0 < es ? es : 1), ef = af.iM[aA] + Math.floor(Math.random() * (af.iN[aA] - af.iM[aA] + 2 - i)), eh = af.iO[aA] + Math.floor(Math.random() * (af.iP[aA] - af.iO[aA] + 2 - j)), aHr(aA, ef, eh, i, j))
						return aGn[aA] = ef, aGo[aA] = eh, aGp[aA] = i, aGq[aA] = j
			}(aA, hU) : aHu(aA)
		}(ak.jp[er]);
		aGl = (aGl += eY) % ak.jo
	}, this.lJ = function() {
		var aA, g5, hd, he;
		if (bd.jk() % 4 == 1)
			for (aA = ak.jo - 1; 0 <= aA; aA--) g5 = ak.jp[aA], ab.a6s[g5] < 2 || ((hd = Math.max(aHE[g5] - 1, 0)) === (he = Math.max(aHF[g5] - 1, 0)) ? 0 === hd && (ab.a6s[g5] %= 2) : 0 === he && ab.a6s[g5] < 6 && (ab.a6s[g5] += 4), aHE[g5] =
				hd, aHF[g5] = he)
	}, this.a5B = function(player) {
		var aA = player + 2 * aC.eV,
			di = aAk[aA];
		return 0 < di && (aM.yt(50, player), aAk[aA] = 0, 255 === di)
	}, this.a4E = function(player) {
		return 255 === aAk[player + 2 * aC.eV]
	}
}

function cX() {
	var aI1, aI2, aI3;
	this.dU = function() {
		aI1 =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), aI2 =
			"Corrupted Earth;Returning Nature;Abandoned Areas;Restricted Area;Contaminated Area;Burning Land;Barren Land;Ravenland;Deadland;Dangerous Area;Devastated Land;Swampland;Plundered Land;Overrun Area;Undead Masses;Roaming Horde;Lurking Horde;Fallen Territory;Ghostland;Doomstruck Land;Infected Enclave;Plagued Nation;Forbidden Zone;Toxic Ground;Scorched Earth;Ruined City;Cursed Land;Diseased Colony;Forsaken Fields;Darkmaster"
			.split(";"), aI3 = "Protected Zone;Quarantine Zone;Last Bastion;Buffer Zone;Liberated Area;Resistance Zone;Rising Territory;Recovered Region;Rebel Sector;Emerging Lands;Safety Corridor;Isolation Area;Final Stronghold;Guarded Sector"
			.split(";");
		for (var a5T = ["K ", " Y", "E ", " Z", " z", " s", "S "], aI4 = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], aA = aI1.length - 1; 0 <= aA; aA--)
			for (var er = a5T.length - 1; 0 <= er; er--) aI1[aA] = aI1[aA].replace(a5T[er], aI4[er]);
		if (__fx.settings.realisticNames) aI1 = realisticNames;
	}, this.a3Q = function() {
		var eY = aC.jn,
			zN = af.zN,
			zT = af.zT,
			playerNamesData = aC.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < eY)
			for (var aA = 0; aA < eY; aA++) zN[aA] = zT[aA] = "Player " + aw.j5(1e3);
		else
			for (aA = 0; aA < eY; aA++) zN[aA] = zT[aA] = playerNamesData[aA]
	}, this.a6 = function() {
		if (9 === aC.k4) {
			for (var dw = aw.random(), aIA = aI3, aIB = aI2, hC = aD.hC, eY = aIA.length, kV = aC.data.teamPlayerCount[7], zN = af.zN, zT = af.zT, aA = kV - 1; aA >= aC.jn; aA--) zN[aA] = zT[aA] = aIA[(aA + dw) % eY];
			for (eY = aIB.length - 1, aA = kV; aA < aC.eV; aA++) zN[aA] = zT[aA] = aIB[hC[aA] ? eY : aA % eY]
		} else(2 === aC.data.playerNamesType ? function() {
			for (var eY = aC.eV, zN = af.zN, zT = af.zT, playerNamesData = aC.data.playerNamesData, aA = aC.jn; aA < eY; aA++) zN[aA] = zT[aA] = playerNamesData[aA]
		} : 1 === aC.data.playerNamesType ? function() {
			for (var zN = af.zN, zT = af.zT, aA = aC.jn; aA < aC.eV; aA++) zN[aA] = zT[aA] = "Bot " + aw.j5(1e3)
		} : function() {
			for (var aIC = aI1, eY = aIC.length, dw = aw.random(), zN = af.zN, zT = af.zT, aA = aC.jn; aA < aC.eV; aA++) zN[aA] = zT[aA] = aIC[(aA + dw) % eY]
		})()
	}
}

function cq() {
	this.aID = [], this.aIE = [], this.dU = function() {
		this.aID = [], this.aIE = []
	}, this.ih = function() {
		0 <= this.aID.length && this.aIF(this.aID), 0 <= this.aIE.length && this.aIF(this.aIE)
	}, this.aIF = function(g) {
		for (var es = -1, aA = g.length - 1; 0 <= aA; aA--)
			if (g[aA].e7--, g[aA].e7 <= 0) {
				es = aA;
				break
			} for (aA = es; 0 <= aA; aA--) g.shift()
	}, this.a43 = function(id, ya, aIG) {
		return this.eu(this.aID, id, ya, aIG)
	}, this.aIH = function(id, ya, aIG) {
		return this.eu(this.aIE, id, ya, aIG)
	}, this.eu = function(g, id, ya, aIG) {
		return ! function(g, id, ya) {
			var aA, hL;
			for (aA = ya.length - 1; 0 <= aA; aA--)
				for (hL = g.length - 1; 0 <= hL; hL--)
					if (g[hL].player === ya[aA] && id === g[hL].id) return 1;
			return
		}(g, id, ya) && (aIG && function(g, id, ya) {
			var aA;
			for (aA = ya.length - 1; 0 <= aA; aA--) g.push({
				player: ya[aA],
				id: id,
				e7: 384
			})
		}(g, id, ya), !0)
	}
}

function cW() {
	this.zT = new Array(aC.eV), this.zN = new Array(aC.eV), this.a2E = new Uint8Array(aC.eV), this.lc = new Uint8Array(aC.eV), this.iM = new Uint16Array(aC.eV), this.iO = new Uint16Array(aC.eV), this.iN = new Uint16Array(aC.eV), this.iP =
		new Uint16Array(aC.eV), this.gL = new Uint32Array(aC.eV), this.wU = new Uint32Array(aC.eV), this.gZ = new Uint32Array(aC.eV), this.fz = null, this.gD = null, this.gE = null, this.ey = null, this.os = new Uint16Array(aC.eV), this.iq =
		new Uint16Array(aC.eV), this.ir = new Uint16Array(aC.eV), this.zM = new Uint16Array(aC.eV), this.zK = new Uint8Array(aC.eV), this.a2M = new Uint16Array(aC.eV), this.dU = function() {
			this.zT.fill(""), this.zN.fill(""), this.a2E.fill(0), this.lc.fill(0), this.iM.fill(0), this.iO.fill(0), this.iN.fill(0), this.iP.fill(0), this.gL.fill(0), this.wU.fill(0), this.gZ.fill(0), this.fz = new Array(aC.eV), this.gD = new Array(
				aC.eV), this.gE = new Array(aC.eV), this.ey = new Array(aC.eV), this.os.fill(0), this.iq.fill(0), this.ir.fill(0), this.zM.fill(0), this.zK.fill(0), this.a2M.fill(0)
		}
}

function co() {
	this.aBD = function(player) {
		aF.lb(player), aC.yo++, af.a2E[player] = 2, af.zM[player] = bg.zf.aFX(), player === aC.eI && (aW.show(!1, !1), aV.a9R(), bP.yX.zI()), ae.a5B(player)
	}
}

function cQ() {
	this.jp = null, this.jo = 0, this.a3U = function() {
		for (this.jo = 0, aA = aC.eV - 1; 0 <= aA; aA--) 0 !== af.lc[aA] && this.jo++;
		this.jp = new Uint16Array(this.jo);
		for (var eY = 0, aA = 0; aA < aC.eV; aA++) 0 !== af.lc[aA] && (this.jp[eY++] = aA)
	}, this.lI = function() {
		for (var gL = af.gL, wU = af.wU, zK = af.zK, jp = ak.jp, aA = ak.jo - 1; 0 <= aA; aA--) {
			var di, g5 = jp[aA];
			gL[g5] <= bJ.dj(wU[g5], 4) ? aj.dd(g5) : gL[g5] >= wU[g5] ? (di = gL[g5], 250 <= (wU[g5] = di) && (zK[g5] = 1)) : wU[g5] -= Math.max(1, bJ.dj(wU[g5] - gL[g5], 1e3))
		}
		this.aIL()
	}, this.aIL = function() {
		for (var lc = af.lc, kU = this.jp, aA7 = this.jo, aA = aA7 - 1; 0 <= aA; aA--) 0 === lc[kU[aA]] && (kU[aA] = kU[--aA7]);
		this.jo = aA7
	}
}

function cY() {
	var aIM;
	this.kD = null, this.kC = 0, this.dU = function() {
		aIM = [], 9 === aC.k4 && this.aIN()
	}, this.aIN = function() {
		var aIO = [60, 80, 105, 150, 190, 333];
		this.kD = [0, 0, 0, 0, 0, 0], this.kC = 0, aC.jn <= aIO[0] ? (this.kC = 256 - bJ.dj(256 * aC.jn, aIO[0]), this.kD[5] = bJ.dj(Math.max(aC.jn - 10, 0), 5), this.kD[0] = aC.eV - aC.jn - this.kC - this.kD[5]) : (this.kD[5] = 10 + bJ.dj(100 *
			(aC.jn - 60), 161), this.kD[0] = 512 - aC.jn - this.kD[5]), aC.k8 = aC.eV - aC.jn, aC.data.numberTeams = (0 < aC.jn) + (0 < aC.k8), aC.data.playerCount = aC.w0 = aC.jn + aC.k8, aC.data.teamPlayerCount = new Uint16Array([0, 0, 0,
			0, 0, 0, 0, aC.jn + this.kC, aC.k8 - this.kC
		]), aC.a3K.a3O()
	}, this.aFe = function(player) {
		aIM.push({
			player: player,
			g0: 14 + aw.j5(20)
		})
	}, this.ih = function() {
		if (9 === aC.k4)
			for (var aA = aIM.length - 1; 0 <= aA; aA--) --aIM[aA].g0 <= 0 && (ae.p5(aIM[aA].player, 0, ai.qm.xd + ai.qm.xr), aIM.splice(aA))
	}
}

function d5() {
	function aId() {
		return {
			ej: bQ.ej,
			ek: bQ.ek,
			vR: bQ.vR,
			vN: bQ.vN,
			vO: bQ.vO,
			vS: bQ.vS,
			eE: bQ.eE,
			mapSeed: bQ.mapSeed
		}
	}

	function aIV(aA) {
		return 1 !== aA && bQ.aBg(aA) && aA !== bQ.aIe()
	}
	this.aIQ = 22, this.aFp = 4096, this.ej = 0, this.ek = 0, this.vR = null, this.vN = null, this.vO = null, this.vS = null, this.eE = 0, this.mapSeed = 0, this.vP = !1, this.vQ = new aIR, this.vH = new aIS, this.a5Z = new aIT, this.dU =
function() {
		this.vH.dU()
	}, this.a6 = function(map, aIU) {
		((map %= this.aIQ) !== this.eE || aIV(this.eE) && aIU !== this.mapSeed) && (this.vP = !1, this.vQ.aIW(), aw.a3P(map), this.eE = map, this.mapSeed = aIU, aIV(map) && (bQ.vH.vI[map].aIX = aIU), this.aBg(this.eE) ? (map = bQ.vH.vI[this.eE],
			this.ej = map.i, this.ek = map.j, aw.a3P(map.aIX), ao.a6([this.ej, this.ek, map.lh, map.le]), aIZ(), an.aIa(), ao.aIb()) : aIY())
	}, this.aIc = function(map, aIU) {
		var fF = aId(),
			map = (this.a6(map, aIU), this.vQ.aIW(), aId());
		return this.ej = fF.ej, this.ek = fF.ek, this.vR = fF.vR, this.vN = fF.vN, this.vO = fF.vO, this.vS = fF.vS, this.eE = fF.eE, this.mapSeed = fF.mapSeed, map
	}, this.a3k = function(canvas) {
		canvas && this.vR !== canvas && (this.ej = canvas.width, this.ek = canvas.height, this.vR = canvas, this.vN = this.vR.getContext("2d", {
			alpha: !1
		}), this.hS = this.vN.getImageData(0, 0, this.ej, this.ek), this.vS = this.hS.data, this.eE = this.aIe(), this.mapSeed = 0, bQ.vH.vI[this.eE].name = aC.data.mapName)
	}, this.eD = function(aA) {
		return 3 === aA || 7 === aA || 9 === aA || 21 === aA || aA === this.aIe()
	}, this.aIf = function(aA) {
		return 2 === aA || 7 === aA || 9 === aA || 20 === aA
	}, this.aIg = function(aA) {
		return 1 === aA
	}, this.aIe = function() {
		return this.aIQ
	}, this.aBg = function(aA) {
		return void 0 === this.vH.vI[aA].aIh
	}, this.a3j = function(pO) {
		return 0 === pO.mapType ? pO.mapProceduralIndex < 10 ? pO.mapProceduralIndex : 10 + pO.mapProceduralIndex : 1 === pO.mapType ? pO.mapRealisticIndex + 10 : void 0
	}, this.aBh = function(pO, aIi) {
		0 === pO.mapType ? pO.mapProceduralIndex = aIi < 10 ? aIi : aIi - 10 : 1 === pO.mapType && (pO.mapRealisticIndex = aIi - 10)
	}
}

function aIR() {
	function aIr() {
		bQ.vQ.ih()
	}

	function aIx(g5, aIw) {
		0 < aIw && (bQ.vS[g5] += aIw, bQ.vS[g5 + 1] += aIw, bQ.vS[g5 + 2] += aIw)
	}

	function h0(g5) {
		return bQ.vS[g5 + 2] > bQ.vS[g5] && bQ.vS[g5 + 2] > bQ.vS[g5 + 1]
	}
	this.a7o = -1, this.zt = 0, this.aIj = 0, this.aIk = 8, this.aIl = 32, this.aIm = 8, this.aIn = 32, this.aIo = [0, 0], this.a6s = [0, 0, 0, 0], this.iH = null, this.aIp = !0, this.aIq = !1, this.aIW = function() {
		-1 !== this.a7o && clearTimeout(this.a7o), this.a7o = -1, this.iH = null, ao.aIb()
	}, this.dU = function() {
		7 === aZ.a00() || this.aIq || (this.aIp = !0, this.zt = 0, this.aIj = 1, this.aIo = [bQ.vH.vI[bQ.eE].vk[0], bQ.vH.vI[bQ.eE].vl[0]], this.a6s = [bQ.vH.vI[bQ.eE].aIh[3], bQ.vH.vI[bQ.eE].aIh[4], bQ.vH.vI[bQ.eE].aIh[5], bQ.vH.vI[bQ.eE].aIh[
			6]], this.aIk = bQ.vH.vI[bQ.eE].aIh[7], this.aIl = bQ.vH.vI[bQ.eE].aIh[8], this.aIm = bQ.vH.vI[bQ.eE].aIh[9], this.aIn = bQ.vH.vI[bQ.eE].aIh[10], this.aIp ? this.a7o = setTimeout(aIr, 16) : this.ih())
	}, this.ih = function() {
		if (8 === aZ.a00() && aG.lv()) this.a7o = setTimeout(aIr, 16);
		else {
			if (0 === this.zt) {
				var aIX = aw.aIs();
				if (aw.a3P(bQ.vH.vI[bQ.eE].aIh[2]), ao.a6([bQ.ej, bQ.ek, bQ.vH.vI[bQ.eE].aIh[0], bQ.vH.vI[bQ.eE].aIh[1]]), aw.a3P(aIX), this.iH = ao.aIt(), this.zt++, this.aIp) return void(this.a7o = setTimeout(aIr, 16))
			}
			for (var g5, eK, aIX = this.aIp ? 10 : 1e6, aIX = bQ.ek - this.aIj - 1 < aIX ? bQ.ek - this.aIj - 1 : aIX, wh = this.aIj + aIX, eh = this.aIj; eh < wh; eh++)
				for (var ef = 1; ef < bQ.ej - 1; ef++) h0(g5 = 4 * (eK = ef + eh * bQ.ej)) ? this.aIu(g5, eK, 1) : (this.aIu(g5, eK, 0), function(ef, eh, g5) {
					return 1 < ef && h0(g5 - 4) || ef < bQ.ej - 2 && h0(g5 + 4) || 1 < eh && h0(g5 - 4 * bQ.ej) || eh < bQ.ek - 2 && h0(g5 + 4 * bQ.ej)
				}(ef, eh, g5) && this.aIv(ef, eh));
			this.aIj = wh, this.aIj >= bQ.ek - 1 ? (bQ.vN.putImageData(bQ.vO, 0, 0, 1, 1, bQ.ej - 2, bQ.ek - 2), bd.dc = !0, this.aIW()) : this.aIp && (this.a7o = setTimeout(aIr, 16))
		}
	}, this.aIu = function(g5, eK, dx) {
		aIx(g5, Math.floor(this.aIo[dx] + this.a6s[dx] * this.iH[eK] / 1e4) - bQ.vS[g5])
	}, this.aIy = function(g5, dw, aIz, dx, a6s) {
		aIx(g5, Math.floor(this.aIo[dx] + (1 - dw / aIz) * a6s) - bQ.vS[g5])
	}, this.aIv = function(kr, ks) {
		for (var g5, dw, aIz, a7e = kr - this.aIl, aJ0 = ks - this.aIl, wi = kr + this.aIl, wh = ks + this.aIl, a7e = a7e < 1 ? 1 : a7e, wi = wi > bQ.ej - 2 ? bQ.ej - 2 : wi, wh = wh > bQ.ek - 2 ? bQ.ek - 2 : wh, eh = aJ0 < 1 ? 1 : aJ0; eh <=
			wh; eh++)
			for (var ef = a7e; ef <= wi; ef++) h0(g5 = 4 * (ef + eh * bQ.ej)) ? (aIz = this.aIk + (this.aIl - this.aIk) * this.iH[ef + bQ.ej * eh] / 1e4, Math.abs(kr - ef) > aIz || Math.abs(ks - eh) > aIz || aIz <= (dw = Math.sqrt((kr - ef) * (
				kr - ef) + (ks - eh) * (ks - eh))) || this.aIy(g5, dw, aIz, 1, this.a6s[3])) : (aIz = this.aIm + (this.aIn - this.aIm) * this.iH[ef + bQ.ej * eh] / 1e4, Math.abs(kr - ef) > aIz || Math.abs(ks - eh) > aIz || aIz <= (dw = Math
				.sqrt((kr - ef) * (kr - ef) + (ks - eh) * (ks - eh))) || this.aIy(g5, dw, aIz, 0, this.a6s[2]))
	}
}

function aIZ() {
	2 === bQ.eE ? aJ1([256], [256], [0, 205, 256], [500, 500, 0], [0, 0, 0]) : 7 === bQ.eE ? aJ1([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0]) : 8 === bQ.eE ? aJ1([410], [410], [0, 120, 210], [0, 80, 640], [0, 0, 0]) : 9 === bQ.eE ? aJ1([
		512], [512], [0, 70, 180, 200, 290, 420, 512], [500, 500, 0, 0, 500, 500, 0], [0, 0, 0, 0, 0, 0, 0]) : 20 === bQ.eE && aJ1([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0])
}

function aJ1(aJ2, aJ3, aJ4, aJ5, aJ6) {
	for (var ef, eh, aJ8, aJ9, a1G, aJA, hs = aJ2.length - 1, aJ7 = bQ.ej + bQ.ek, eY = (aJ7 *= aJ7, aJ4.length), aA = eY - 1; 0 <= aA; aA--) aJ4[aA] *= aJ4[aA];
	var aJB = new Array(eY),
		aAh = new Array(eY),
		aJC = new Array(eY),
		f0 = ao.aIt();
	if (void 0 === aJ6)
		for (aJ6 = new Array(eY), aA = eY - 1; 0 <= aA; aA--) aJ6[aA] = 0;
	for (aA = 1; aA < eY; aA++) aJB[aA] = aJ4[aA] - aJ4[aA - 1], aAh[aA] = aJ5[aA] - aJ5[aA - 1], aJC[aA] = aJ6[aA] - aJ6[aA - 1];
	for (ef = bQ.ej - 1; 0 <= ef; ef--)
		for (eh = bQ.ek - 1; 0 <= eh; eh--) {
			for (aJ8 = aJ7, aA = hs; 0 <= aA; aA--) aJ8 = (aJ9 = (ef - aJ2[aA]) * (ef - aJ2[aA]) + (eh - aJ3[aA]) * (eh - aJ3[aA])) < aJ8 ? aJ9 : aJ8;
			for (a1G = aJ5[eY - 1], aJA = aJ6[eY - 1], aA = 1; aA < eY; aA++)
				if (aJ8 < aJ4[aA]) {
					a1G = aJ5[aA - 1] + aF7((aJ8 - aJ4[aA - 1]) * aAh[aA], aJB[aA]), aJA = aJ6[aA - 1] + aF7((aJ8 - aJ4[aA - 1]) * aJC[aA], aJB[aA]);
					break
				} aJD(bQ.ej * eh + ef, a1G, aJA, f0)
		}
}

function aJD(dx, a1G, aJA, f0) {
	a1G < 500 ? f0[dx] = bJ.dj(f0[dx] * a1G * 2, 1e3) : 500 < a1G && (f0[dx] += bJ.dj(2 * (1e4 - f0[dx]) * (a1G - 500), 1e3)), f0[dx] += bJ.dj(aJA * (10 * a1G - f0[dx]), 1e3)
}

function ca() {
	var aJE;

	function aJO(a1h, hU, ef, eh, globalAlpha) {
		bQ.vN.save(), bQ.vN.globalAlpha = globalAlpha, bQ.vN.imageSmoothingEnabled = !1, bQ.vN.scale(hU, hU), bQ.vN.drawImage(a1h, Math.floor(ef * (bQ.ej / hU - a1h.width)), Math.floor(eh * (bQ.ek / hU - a1h.height))), bQ.vN.restore()
	}
	this.a5W = 0, this.a5X = 0, this.a5Y = 0, this.a5Z = 0, this.dU = function() {
		(aJE = new Array(bQ.aIQ))[0] = {
			i: [0, 5e3, 8e3, 1e4],
			dw: [220, 250, 255, 220],
			sA: [190, 220, 0, 0],
			es: [170, 200, 0, 0]
		}, aJE[1] = {
			i: [0, 4e3, 5e3, 6e3, 1e4],
			dw: [25, 0, 100, 0, 25],
			sA: [25, 0, 0, 0, 25],
			es: [25, 0, 0, 0, 25]
		}, aJE[2] = {
			i: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			dw: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			sA: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			es: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aJE[3] = {
			i: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			dw: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			sA: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			es: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, aJE[4] = {
			i: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			dw: [10, 10, 20, 10, 10, 170, 212],
			sA: [20, 20, 60, 100, 100, 110, 170],
			es: [70, 70, 160, 30, 30, 60, 120]
		}, aJE[5] = {
			i: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			dw: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			sA: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			es: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aJE[6] = {
			i: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			dw: [10, 10, 60, 255, 255, 200, 200],
			sA: [10, 10, 60, 255, 255, 200, 200],
			es: [80, 80, 255, 255, 255, 200, 200]
		}, aJE[7] = {
			i: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			dw: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			sA: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			es: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aJE[8] = {
			i: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			dw: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			sA: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			es: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aJE[9] = {
			i: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			dw: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			sA: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			es: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aJE[20] = {
			i: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			dw: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			sA: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			es: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, aJE[21] = {
			i: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			dw: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			sA: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			es: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.aIa = function() {
		var aJN, aA, er, fF, hS = function() {
				var hS;
				return bQ.vR = document.createElement("canvas"), bQ.vR.width = bQ.ej, bQ.vR.height = bQ.ek, bQ.vN = bQ.vR.getContext("2d", {
					alpha: !1
				}), hS = bQ.vN.getImageData(0, 0, bQ.ej, bQ.ek), bQ.vS = hS.data, hS
			}(),
			i = aJE[bQ.eE].i,
			dw = aJE[bQ.eE].dw,
			sA = aJE[bQ.eE].sA,
			es = aJE[bQ.eE].es,
			f0 = ao.aIt(),
			eY = i.length - 2,
			aJI = new Array(1 + eY),
			aJJ = new Array(1 + eY),
			aJK = new Array(1 + eY),
			aJL = new Array(1 + eY);
		for (er = eY; 0 <= er; er--) aJI[er] = i[er + 1] - i[er], aJJ[er] = dw[er + 1] - dw[er], aJK[er] = sA[er + 1] - sA[er], aJL[er] = es[er + 1] - es[er];
		for (aA = bQ.ej * bQ.ek - 1; 0 <= aA; aA--)
			for (er = eY; 0 <= er; er--)
				if (f0[aA] >= i[er]) {
					fF = f0[aA] - i[er], bQ.vS[4 * aA] = dw[er] + aF7(aJJ[er] * fF, aJI[er]), bQ.vS[4 * aA + 1] = sA[er] + aF7(aJK[er] * fF, aJI[er]), bQ.vS[4 * aA + 2] = es[er] + aF7(aJL[er] * fF, aJI[er]), bQ.vS[4 * aA + 3] = 255;
					break
				} bQ.vN.putImageData(hS, 0, 0), bQ.aIg(bQ.eE) && aa.sD() && bQ.aIg(bQ.eE) && (hS = aa.aEH("arena"), aJN = aa.aEH("territorial.io"), aJO(hS, 5, .5, .5, .1), aJO(aJN, 2, .5, .45, .1)), bQ.vP = !0, bd.dc = !0
	}, this.a3S = function() {
		for (var g5, ef, eh, aJP, hJ, fH, a5X = 0, i = bQ.ej, j = bQ.ek, fF = i * j * 4, aJQ = aAH, aJR = bQ.vS, aA = i - 1; 0 <= aA; aA--) aJQ[(g5 = aA << 2) + 2] = aJQ[fF - g5 - 2] = 3;
		for (fF = 4 * i, aA = j - 1; 0 <= aA; aA--) aJQ[(g5 = aA * fF) + 2] = aJQ[g5 + fF - 2] = 3;
		for (aJP = i - 1, hJ = j - 1, eh = 1; eh < hJ; eh++)
			for (fF = eh * i, ef = 1; ef < aJP; ef++) fH = 1 - (aJR[(g5 = fF + ef << 2) + 2] > aJR[g5 + 1] && aJR[g5 + 2] > aJR[g5]), aJQ[g5 + 2] = 2 - fH, a5X += fH;
		this.a5W = (i - 2) * (j - 2), this.a5Z = 0, bQ.eD(bQ.eE) && (bQ.a5Z.aJS(), bQ.a5Z.aJT()), this.a5X = aC.jX = a5X - this.a5Z, this.a5Y = this.a5W - this.a5X - this.a5Z
	}
}

function aIY() {
	var pD;
	10 === bQ.eE ? pD =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === bQ.eE ? pD =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === bQ.eE ? pD =
		"JJAf2uP6y-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeu0-F-n5a_GG4KJGGG3G3G3FFJFmKGJ4JGGGG3GJJFJG3G3G323G--kLPeduaKGFGGGG443JJJJJJG--B-C0FJK__443-BJ-66wmpBnJopCMJpCCCIIIJoopKKICKCBnCKJgooopMIDOzzSzUzbzzUSyTUxxrrrrrP1XcXXX9Hcn9cceemece7cPIoeX0sWWaOWVNTOcTNNcN0V0V5-N0aOa-0V--N50a5Obyc-M0z3TPOdgBnBF0NOpxpMV7-M2mMiLbinz03F0sTx8mfrNT-2l6QEdMwwp-5XX7UMTP1V1GIuvaNn-5Xfxrpw5XV1GNTEfn4-_XvzjAAA9mfA9ed9fpzyTUzyUaUyOX3n59NTKLLKHPPPO_LK4iidea_O_QeideeaLOLLJG3-0eeddOaPO_OKLKzEznzjgnnzBykknByEYnByug-3332ElJ222-2wBko2BnBnBwwzwx-9Y6j6rrrkccc-E5ctEizpJF-aDYgSMGz-X10G6VyjiyuuPeiuzjivh3G3K3G--k-9JGFAPEIZSKBghKSMIpKpCJnI9gcXeccehHccoeXBeoppKIJoghIHnCJnJmemmecmfA9jyTUzzzbbxbV0WaTT-OtWWWV0zxtyUN6yUzSxrSqTUztaN71190V7-5V15VUy--V-lxHEg--33oL-67Dhyu0--3FoL--7ahw-LGYowfzu-0HFMIfF-aHWWwxxxcXX-E8ZrUdfVl--TIJLzSr17V0wcDLvivjysGK3G4XaJb1zppIJpBccccge7fUxx9eocX7cXX6y7Y99Heggen9nJdAHp9Xnp9IIJfICIBdCKKIIMMJme19eXxxp9X9VVfEMMMSBpooe7XCSBomccxxpHcrKKCMHmXXmcxoeX1mpJe70BrMJmVV--gxExIpJcX71nKCJmhCKKCIJoopCKKKHX8KHd9nKrKBj6xrSrKpz6xSMMSrKppwObaP-UzSCAICIKCIKKKCMMKKCpCMMSrrrKpKprUSprMUSMrSprKrSpSrUrUSxpxprSrMrMprSSSppMKprSprrSrxKSUSqUGbqUbbrxrSxrSrKHXXeggeYBnBgmnBnKCrJnKpIKpBnKCMMrSS9chKKIBeX77EIAE5OxIIKKKIIEKSKSKKSKKMKpKpKKSMSSSSrSzxxxzlzzUzzzzzUxrMMMMSxxxrrxrrxxxxzUzOzrbxzrxzzzw6w6yOtttttyUbbyTTTTTTTTTUtzIrzbzbzbba-71-VVV77V--7711-V1-1---51--1-1-V0cN-N5VN1e-ee7-1mc71Xe9fIBcVV0WbyOzxX-VV7VNN5TUzUu1ce9menBecmf9gxHc7c7V-777---50VP-V-N-0WxppSJpr6zyObzttV6rMKpUyObttbryUbzWaP0sNNOX757X97X7ce9XXXXXVc7-V-X7VX5-V7eeA9menA9fBnCBnIIJoorMIRObpIKMJpppSSSMSoeX71-V7777X97c5V-ccWV0VX77--NN55-N--7U5111cXXenBcc7fABgcX117X7c-gf9emV---1--XXXVX7X17579VVV117Xed9XecXX--WV5Uzz6zyUzrSrUUaNUlxtzXXXee1777X1e-5NOy--WV5OttttaTUzyUrxxtzzzlzMUrzzxaUttbbxWzxpSonBmpCCJpCKCIJpJooeACHpprSxaOV577U6sOWV-NNN70WVOWzwTTT5NUxryUba5NNOba1cc79cXX199X-91X99mhIHfJmXgxxxpHe9XccX997c7X0zV--V-N7P6k49V711-111X-77cX79mmeHeccV1mdbn_Uno-DKNVSo1-O9kaiKKzzEzpK-8_SLEzzzeeeV1Hinzjh3-8_UsM9mjtyTVBHk8AfiyvivizpG43G3GG--0OIzV2mnjMaLEBxn29mc4SSpprSSSUprrKprSSpppKMMSrMrxrKIKHhKHfIKKpIBpCIIJpIJnIKpSKJo1AKKpppxprSprpMKphIKhMUSrCKMRpMKrrSMMMMSKUVUxxUxSJe19efAKKUbKnMxKKUKIKUStaSrUMTUrzbzxxrSzzUy5SSKtbqprTprzSxxSrBXe9ghSrMMUyUzzbySKrUKpUSpSUMtV---D--0aN-X9997977VVe9XD-19XX1-9XcXXXXYxzUttzbV-7VX78by0rUSppKMbs5-V77V77X-X71--17-X-7V-0WWVN-6byTOrJepKpSrpxrUSSIKSKSzrrrs797c1711ObUSxxpSSSSSSy5--7997VV6z_rrSrxpSprs-7VX17XeXVXN-11-TUUSxztyTT5ObzrSSrzbtbbtUKzrxrSxzUrzUzShKhMKrxzzzxyMtzqnAA9mgfAAACKICBnKzbbWWbaOtbaOaTUbtyUyTTTOaOa556zyMxrUtaTUzrxrrrzSzxzbta5N0s-ee997cX97cX7cX7X771-V-aT--V17V7X1--V7Xea6ty5T5Mts5--5-550aT55NU_ySxxta5OVD--0VN5NND-N--8a6a5OsN1og55OVVOta-75OTSqhCMrBmhMbbtzzzzta--NN5-8Us0V-N1eD-XN0VOKppraT18zs0SyOUaOa5OaN1-VcX7X5OSpSxpMSra5NNObV5-N19cVc-W_KMSrrxxztzsND--MJpKMrzb_pyTMzUa5-0a5-X-VOIMMMSBnKKSMrMzprzaQBen1ceeXcccempprtzUUSv9mmfMrxzUMxpUUUrzbztrxyOzUxrrMzbWbJppSvC7gmenA9mgggfABgnBf9nBppUrttbzUzCKrSSxzbaUxPfMSKpKnJhRpIAIIKrSzUMMzxztyTObaTOWWaTTTUbzzrza5ObaTOWbbbUrSrStzyUUzbyN--s5T2rs-1XeXeefBn97VfBnIBemf97cXcX7bWV1111c1eiN7f-ABa6s19n77X7g97cceX7f11UzUppry-N0MMAIKzV4UW_rJoppza55-TMSsNObztaOa6KzV-77N-SKKSUzbaOaOyUtzzzyTUbtzxrsOaObtttSraOWaObzzzzz_ptaUbyMzzyUtbVUyUrUzzzzzUzzxyQMzzUzzzeeeeXee9Xeee9eeeefKMIKcf9ggnABemefCCKzrLf99X1fABgeeXAKSSMKxxzUSrSraMRpSxrQA7X7X9oopBo1N9gnIKCIJmmmnKIKJomn7emfMBc51997cenKMUzPmegmfMMSzzyNA9OzzUUIKMUKrKpSSrUrxza6SrMSrrMSrUUxzrxxxrUSSzSSxSUSxSrSSrSrpUrMMUSprrUUUUSpKrySzSrxzzxpzSppprrzUrSpSSCSRprSMKKpMKrMKKCIIIBohIBonAAABnABmgemhBmmmeenBnA9X9ecceeXX7Xemmcemgef9nA7en9kecee9eXeX1-enBkeX7XeXce92VXX99ceACBn9XX77XVVV--X7XemmgeeXXX997VVc75OVeX9hAAA7eeme9eXe9Xeeee9e9ceemmmmf9meegfHenBmfBnA9mgggemnBggfBnIHmmekeeceX9e9cXXXmoeceeXce9Xce99eXnBpCBpSrSrSrMSxzzxyeeeeemkeemgf9pprUzUHmeXXem99e9eceef1dbs17ecepKrMgg9XeXccX-Xeen7cXeenBmnBghCBgnBACCCMCKJohCCMrzzzyUzzzzqognBmnCKprMSMACKpz_wmoogepCKrMSMStUZkeeeeAH15-11-X9hCKMSRomcgpKzprpprs0z_rKppzrSrzSpIKIBgXmprrUKIKKrttpKzSUBomm97ghJpSyUzSzzzUbzzUtrzfAI9epnHceceemegghUUzxzWbzzrbTopMSta5OVOrzzUSKUUxrsOrpxQCSrIIKSxSrSzSrzUrUUtttztUtbzxxMaOV-sOWV5--NNOUzUzxzxzUUrSxrrUSrrSzrrSxSprSppprSpxrrrUUrbbtzrbbrztzzrbbyTT6bSyOa0aTOaOy5T6aTOzbzpxxxxpzUSxs7XESrKyOUrtaOa17zyUaTOaOSxprKCKgnIAAABnBnKppppppJnHnCMJnCCKMSrSSKKICCKKKKppKo-2AYFDB--MPns--j8uk-0TwQV7mzO6ievyyvFGK3F--qNX0zxzxrXce9c-3mKUw-DOJuzw9-lBkNyuuuviyzjJK43G000-OaPJEprzSKMrrkccc-1997-2C8pDo-uPOqwf9mnbbtyTV-2Jzv--5gXT-CCmSUvvGG--5xsy-0D-rE-4b-qzSqX7--sMmk-0lNEV-IZ0nk-tm6EnFN-Rt3BvgF-5ReOUc-otNAvisG30DRoZzUzzzrwP9eeecc-3uJps0eSSKRrMGzrzrrM-V-eXXeX--2fpn--6MiT-0DoXD--6ULD--E2lg--TGhs--wrkk-0uNAV-npyzx-0bkCEF-6EeL6jG-5bpJQAEbaV0nuubvp-0dya3mhrk--BzMKzF28zMOzrMUP779c-gziXufkG-2byBQrcV-J-IhV490elopIKKJzlX70V---2FCPyV-HVlaxpX7-x0_hzvvGGF-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--1u44Wxxxr17cc-CFkqTusBG-2cO5jMcV3oE3YuuiB3FF0P7tWrre9-4GLRUh--19rRV-JN8nk-1B7iV-3OQA--cpNzV8oQxrjjizyyw4KKG44-1d-ezGV-_77wzvGF0eJQZmxL0V-C9jlvF09OI0rTX--JoI0k-PTDyyV-40oK--e5AbV7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL--1qoP6bvVF-qtlNxCKCUa0V7V0xqOguudaNznk-G3-Lvq2RrOc-2N7SOfvlG-2g3LFmnKUrla-7X--Vg031A1AJgoxMSporMSSr-XV--10aNXeV-y7CVQfz0GF0RIcNptae02XdsiLTezvzyyyzjzGGGGGGGGG3--GRVT-QXt0TTyyzwK4GJ-r5K0genCxtwT-V-yBnotTvg-F-RR4WyVBNuCtdejvYyi-knBLOFJJF3BSAjnMSzUbsX9XeV3t0vf_fzv-GF0wZ8bxrOe9--8AQA--HN1m-CZlGTLRwx-cmONzIxrprppKprUyUts-XccX1e97cXc--_7pw029QbgoonJUROV5-V-iJrguik4--mdjY-0tQAdaRk-BiCss-aMQLTjJ--3jUaV4tUqAvjzx5KGF-YB7rwfzwOeVuOXlO_O__Kbj2vizuviyuuvfeveTiviynvYziefiiefvfiYvjB-444G3F-0-2-kJ304K3GGG3JG34--F3GJ-IBbGxS--3yOw8PPd_GaaiC-Eueibvyvx-304--C-2IBzcggmeenCMSrwOaOzKHmnrUSxzTOu--V7VVV9c-yPFVPuf0-F0gt0ZpKs17-aTPhOiBFxRy2ZmgnJeeXAICBnBenJzSrKKrrSSrKpMKJnBnCKMSMIKMrxSOV0V0zzUKSpppSKSEKIESOV-Oa0sOzUrMKSppSUMMkP77V-0a1--VP-17--71--7-UxSrrrrSJpqOtzzOX770hBcX7V5--XXV11cc717X7X9XX999777X7e-_chDLLiiivYEl33G3-Vock29fSpSKonCMU5OaNV-NNX7c2DaQYtPjzvjfiywGK33G3G-0xDlzpUyX9V5PSx2jyuzVGGK-0CFZWnwNV1uXF0_fBo1IJJoSSJnACCCKppSxyUV-117-N711-6evlav4-JpSyQKUSSSpaX517c-c-yg6luPzk3F0CNJQpy9-iumBnaLKKeudOKG_KLKLLLueLOaQEEjEjyinEyzejjnskBnwC043F2-nn2zE2EEoKGKFASOdporHX8CBhzxraUqUzSlzSX77eeeXBc0V-LhikvW--KmlL-EfebDLTskk-YMe-RrMTV7V2uyCCaPEBC-5q1sjK6a7V-A2Ih-Aq892rMUNP7cc-TlB1tv--ANsVBjV2v6d6aOwnp-7qIGAIJlaNV1imQQOPszivwzE8GGGGJ0vODuRhCrppCBpULN5N7NX90WX-6gppqPk-GqSXfBnqOxtaUemec-5nnTs-YPD2wz6re9-3QGmz__bnno-2PJQD-KhKnTaaTn-nF-0Pg_N-aphUzj4FKhhRbmhUrKHohIzMpxrpKKKSMKSKxrU5N5OaUL--X11777Hf9VX-N7--5P-XHXe-0hhca-WqtqMCppppSJp6ltz5NVXV-X17eV0QUJbjJ-nREfwnBwOtbae-IiGGaLPvEk0-Er7eI9nCKpUa0V--1v_ZSfcl--0T7Zc0TwsLPNzgz8K4--MdCP-8jMTqMno-QTv6BfDUs-CjSgLdjBG--rknYV0vttlfW-0CxT2mcUV6Qv4daeffkn3J3B-EUOXBja1CjifiOvd_LdKKaaOaK--nBw8aOFFeeKbfivzjix3En-2Ennz-n-3-2UYTi-bkAQ5LLKaRzgwnznGJ-MWJCRr5NV0wBylcwF0D6jaola--BJZx--NfgX-6lRkav3--sx_2V7RUnUaK_aLLQjzzz-atBrI9mgmnICCpCKLTOaOzs0aNOWV9c-E9stskaiM_-pIJnKoxxzxzrUrrxzUxzSrUSzSpISxzxbxzzzzrzzrzxbzrzUta-0YBe7mf9eeV--P9eee7XXcecVXeXceA9eeeXX-c7T9Bee997n9X-0wqC2ylF4iQ5frxSUzJzqNX9cX97V1wr6EuslF-YbY3xSUaeX--x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === bQ.eE ? pD =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === bQ.eE ? pD =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === bQ.eE ? pD =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === bQ.eE ? pD =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === bQ.eE ? pD =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === bQ.eE ? pD =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === bQ.eE && (pD =
			"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV"
			), (new vA).vC(pD)
}

function aIS() {
	this.vI = null, this.aJU = null, this.aJV = null, this.dU = function() {
		var aJW = [120, 105, 92],
			cos = [12, 12, 60],
			aJX = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aJY = [140, 130, 120],
			aJZ = [12, 12, 76],
			aJa = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aJb = [130, 117, 106],
			aJc = [12, 12, 68],
			aJd = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.vI = new Array(bQ.aIQ + 1), __fx.customLobby.setMapInfo(this.vI), this.vI[0] = {
			name: L(133),
			i: 230,
			j: 230,
			lh: 1e3,
			le: 2e3,
			aIX: 173
		}, this.vI[1] = {
			name: L(134),
			i: 800,
			j: 800,
			lh: 100,
			le: 50,
			aIX: 43
		}, this.vI[2] = {
			name: L(135),
			i: 512,
			j: 512,
			lh: 128,
			le: 32,
			aIX: 0
		}, this.vI[3] = {
			name: L(136) + " 1",
			i: 960,
			j: 960,
			lh: 60,
			le: 8,
			aIX: 0
		}, this.vI[4] = {
			name: L(137),
			i: 900,
			j: 900,
			lh: 100,
			le: 5,
			aIX: 0
		}, this.vI[5] = {
			name: L(138),
			i: 1e3,
			j: 1e3,
			lh: 100,
			le: 40,
			aIX: 0
		}, this.vI[6] = {
			name: L(139),
			i: 1e3,
			j: 1e3,
			lh: 100,
			le: 20,
			aIX: 0
		}, this.vI[7] = {
			name: L(140),
			i: 1024,
			j: 1024,
			lh: 128,
			le: 32,
			aIX: 0
		}, this.vI[8] = {
			name: L(141),
			i: 820,
			j: 820,
			lh: 200,
			le: 100,
			aIX: 0
		}, this.vI[9] = {
			name: L(142),
			i: 1024,
			j: 1024,
			lh: 128,
			le: 32,
			aIX: 0
		}, this.vI[10] = {
			name: L(143),
			vk: aJY,
			vl: aJZ,
			aIh: aJa
		}, this.vI[11] = {
			name: L(144),
			vk: aJb,
			vl: aJc,
			aIh: aJd
		}, this.vI[12] = {
			name: L(145),
			vk: aJb,
			vl: aJc,
			aIh: aJd
		}, this.vI[13] = {
			name: L(146),
			vk: aJW,
			vl: cos,
			aIh: aJX
		}, this.vI[14] = {
			name: L(147),
			vk: aJW,
			vl: cos,
			aIh: aJX
		}, this.vI[15] = {
			name: L(148),
			vk: aJY,
			vl: aJZ,
			aIh: aJa
		}, this.vI[16] = {
			name: L(149),
			vk: aJY,
			vl: aJZ,
			aIh: aJa
		}, this.vI[17] = {
			name: L(150),
			vk: aJW,
			vl: cos,
			aIh: aJX
		}, this.vI[18] = {
			name: L(151),
			vk: aJb,
			vl: aJc,
			aIh: aJd
		}, this.vI[19] = {
			name: L(152),
			vk: aJW,
			vl: cos,
			aIh: aJX
		}, this.vI[20] = {
			name: L(153),
			i: 1024,
			j: 1024,
			lh: 128,
			le: 32,
			aIX: 0
		}, this.vI[21] = {
			name: L(136) + " 2",
			i: 940,
			j: 940,
			lh: 80,
			le: 8,
			aIX: 0
		}, this.vI[bQ.aIQ] = {
			name: ""
		}, this.aJU = new Uint8Array(12);
		for (var aA = 0; aA < 10; aA++) this.aJU[aA] = aA;
		for (this.aJU[10] = 20, this.aJU[11] = 21, this.aJV = new Uint8Array(10), aA = 0; aA < 10; aA++) this.aJV[aA] = 10 + aA
	}
}

function aIT() {
	this.aJS = function() {
		for (var g5, ef, fF, aJQ = aAH, aJR = bQ.vS, i = bQ.ej, aJP = i - 1, hJ = bQ.ek - 1, g0 = 0, eh = 1; eh < hJ; eh++)
			for (fF = eh * i, ef = 1; ef < aJP; ef++) aJR[g5 = fF + ef << 2] === aJR[1 + g5] && aJR[g5] === aJR[2 + g5] && (g0++, aJQ[2 + g5] = 4);
		an.a5Z = g0
	}, this.aJT = function() {
		for (var aJQ = aAH, i = bQ.ej, aJP = i - 1, hJ = bQ.ek - 1, id = 5, eh = 1; eh < hJ; eh++)
			for (var fF = eh * i, ef = 1; ef < aJP; ef++) {
				var eC = 2 + (fF + ef << 2);
				4 === aJQ[eC] && (! function(eC, id) {
					var eY = 1,
						aJQ = aAH,
						ea = ab.ea,
						a1T = [eC];
					aJQ[eC] = id;
					for (; eY;) {
						for (var a1U = [], aA = 0; aA < eY; aA++)
							for (var eN = a1T[aA], eb = 3; 0 <= eb; eb--) {
								var ec = eN + ea[eb];
								4 === aJQ[ec] && (aJQ[ec] = id, a1U.push(ec))
							}
						eY = (a1T = a1U).length
					}
				}(eC, id), id = Math.max((id + 1) % 256, 5))
			}
	}
}

function a3R() {
	(x1 = void 0 === x1 ? document.createElement("canvas") : x1).width = bQ.ej, x1.height = bQ.ek, a3V = x1.getContext("2d", {
		alpha: !0
	}), a3W = aAH = null, a3W = a3V.getImageData(0, 0, bQ.ej, bQ.ek), aAH = a3W.data, b8.pf.vT(aAH)
}

function cb() {
	var f0, i, j, max, aJf, le, aJh, aJi, aJj, aJk, aJl, aJm, aJn, aJo, aJg = 1e4;

	function aJv(aJu, lh, eY) {
		var aA;
		for (aJh[0] = aJu, aA = 1; aA < eY; aA++) aJh[aA] = aJh[aA - 1] + lh, lh = aJh[aA] >= aJg ? (aJh[aA] = aJg - 1, -lh) : aJh[aA] < 0 ? (aJh[aA] = 0, -lh) : (lh += 16384 <= aw.random() ? le : -le) < -aJf ? -aJf : aJf < lh ? aJf : lh
	}

	function aJx(ef, eh, aJy, eY) {
		(aJy ? function(ef, eh, eY) {
			var aA;
			for (aA = 0; aA < eY; aA++) f0[eh * i + ef + aA] = aJh[aA]
		} : function(ef, eh, eY) {
			var aA;
			for (aA = 0; aA < eY; aA++) f0[eh * i + ef + aA * i] = aJh[aA]
		})(ef, eh, eY)
	}

	function aK1(value, eY) {
		var aA, aHy, eC, hh = value - aJh[eY - 1];
		if (0 != hh) {
			for (aHy = 1 + bJ.dj(Math.abs(hh), eY - 1), aHy = hh < 0 ? -aHy : aHy, aJh[eY - 1] = value, eC = (eC = eY - 1 - bJ.dj(Math.abs(hh), Math.abs(aHy))) < 1 ? 1 : eY - 2 < eC ? eY - 2 : eC, aA = eY - 2; eC <= aA; aA--) aJh[aA] += hh - (eY -
				1 - aA) * aHy;
			(hh < 0 ? function(eY) {
				var aA;
				for (aA = eY - 2; 1 <= aA; aA--) aJh[aA] < 0 && (aJh[aA] = -aJh[aA] - 1)
			} : function(eY) {
				var aA;
				for (aA = eY - 2; 1 <= aA; aA--) aJh[aA] >= aJg && (aJh[aA] = 2 * aJg - aJh[aA] - 1)
			})(eY)
		}
	}

	function aK4(a1T, a1U, eY) {
		for (var aA = 0; aA < eY; aA++) a1T[aA] = a1U[aA]
	}

	function aK5(g) {
		for (var aA = 0; aA < g.length - 1; aA++) g[aA] = g[aA + 1] - g[aA];
		g[g.length - 1] = g[g.length - 3]
	}

	function aK6(a3x, gap, hK) {
		aJi.push(a3x), aJj.push(gap), aJk.push(hK)
	}
	this.a6 = function(a2i) {
		! function(a2i) {
			var aA;
			for (i = a2i[0], j = a2i[1], aJf = a2i[2], le = a2i[3], f0 = new Int16Array(i * j), max = j < i ? i : j, aJh = new Int16Array(max), aJi = [], aJj = [], aJk = [], aJl = new Array(i), aJm = new Array(j), aA = i - 1; 0 <= aA; aA--) aJl[
				aA] = !1;
			for (aA = j - 1; 0 <= aA; aA--) aJm[aA] = !1;
			aJn = new Int16Array(i), aJo = new Int16Array(j)
		}(a2i),
		function(eY) {
			var aJu = aw.random() % aJg,
				lh = aw.random() % (2 * aJf + 1) - aJf;
			aJv(aJu, lh, eY)
		}(max), aK4(aJo, aJh, j), aJx(0, 0, !0, i);
		var ef, eh, a2i = f0[0],
			eY = max,
			lh = aw.random() % (2 * aJf + 1) - aJf;
		for (aJv(a2i, lh, eY), aK4(aJn, aJh, i), aJx(0, 0, !1, j), aK5(aJn), aK5(aJo), aJv(f0[i - 1], aJn[i - 1], j), aJx(i - 1, 0, !1, j), aJv(f0[i * (j - 1)], aJo[j - 1], i), aK1(f0[i * j - 1], i), aJx(0, j - 1, !0, i), aJl[i - 1] = aJl[0] = !
			0, aJm[j - 1] = aJm[0] = !0, aK6(0, i, !0), aK6(0, j, !1), ! function() {
				var aK8, a3x;
				for (;;) {
					if (aK8 = function() {
							var aA, aK8 = aJi.length - 1;
							for (aA = aK8 - 1; 0 <= aA; aA--) aJj[aA] > aJj[aK8] && (aK8 = aA);
							return aK8
						}(), aJj[aK8] < 5) return;
					a3x = aJi[aK8] + bJ.dj(aJj[aK8], 2), (aJk[aK8] ? function(ef) {
						var eY, aKB, aA, aDf = 0,
							aKC = 0;
						for (; aKC < j - 1;) {
							for (aA = aDf + 1; aA < j; aA++)
								if (aJm[aA]) {
									aKC = aA;
									break
								} eY = aKC - aDf + 1, aJv(f0[ef + i * aDf], 0 === aDf ? aJn[ef] : aJh[aKB - 1] - aJh[aKB - 2], eY), aK1(f0[aKC * i + ef], eY), aJx(ef, aDf, !1, eY), aKB = eY, aDf = aKC
						}
						aJl[ef] = !0
					} : function(eh) {
						var eY, aKB, aA, aDf = 0,
							aKC = 0;
						for (; aKC < i - 1;) {
							for (aA = aDf + 1; aA < i; aA++)
								if (aJl[aA]) {
									aKC = aA;
									break
								} eY = aKC - aDf + 1, aJv(f0[eh * i + aDf], 0 === aDf ? aJo[eh] : aJh[aKB - 1] - aJh[aKB - 2], eY), aK1(f0[eh * i + aKC], eY), aJx(aDf, eh, !0, eY), aKB = eY, aDf = aKC
						}
						aJm[eh] = !0
					})(a3x), aK6(a3x, aJi[aK8] + aJj[aK8] - a3x, aJk[aK8]), aJj[aK8] = a3x - aJi[aK8] + 1
				}
			}(), ef = 0; ef < i; ef++)
			if (!aJl[ef])
				for (eh = 0; eh < j; eh++) aJm[eh] || ! function(ef, eh) {
					var value = f0[eh * i + ef - 1] + f0[(eh - 1) * i + ef],
						a5k = 2;
					aJl[ef + 1] && (a5k++, value += f0[eh * i + ef + 1]);
					aJm[eh + 1] && (a5k++, value += f0[(eh + 1) * i + ef]);
					f0[eh * i + ef] = bJ.dj(value, a5k)
				}(ef, eh)
	}, this.aIt = function() {
		return f0
	}, this.aIb = function() {
		f0 = null
	}
}

function aF7(er, es) {
	return 0 <= er ? bJ.dj(er, es) : -bJ.dj(-er, es)
}

function jK(f0) {
	return f0 * f0
}

function a4z(er, es) {
	return es < er ? er : es
}

function a9l(er, es) {
	return er < es ? er : es
}

function a7B(er, f0, es) {
	return f0 < er ? er : es < f0 ? es : f0
}

function aKE(f0, eY) {
	for (var et = bJ.dj(f0 + 1, 2), aA = 0; aA < eY; aA++) et = bJ.dj(et + bJ.dj(f0, et), 2);
	return et
}

function aGU(f0, eY) {
	return f0 < 1 ? 0 : aKE(f0, eY)
}

function aKF(m4, m5, rs, a6v, mH, mI, rt, sa) {
	return !(m4 + rs <= mH || m5 + a6v <= mI || mH + rt <= m4 || mI + sa <= m5)
}

function aKG(m4, m5, rs, a6v, mH, mI, rt, sa) {
	return m4 <= mH && m5 <= mI && mH + rt <= m4 + rs && mI + sa <= m5 + a6v
}

function vK(f0) {
	return Math.floor(!!f0 * (1 + Math.log2(f0 + .5)))
}

function bs() {
	this.dj = function(er, es) {
		return Math.floor((er + .5) / es)
	}, this.aKH = function(er, es) {
		return Math.floor(er * (es + .5))
	}, this.sqrt = function(f0) {
		return ~~Math.sqrt(f0 + .5)
	}, this.pow = function(e) {
		return Math.floor(Math.pow(2, e) + .5)
	}, this.p4 = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aKI = function(fF, fH, fJ) {
		return Math.max(Math.min(fF, fH), fJ)
	}, this.aKJ = function(aKK, aKL, ef, eh) {
		ef -= aKK, aKK = eh - aKL, eh = 0;
		return 0 == ef ? eh = 0 <= aKK ? Math.PI : 0 : (eh = Math.atan(aKK / ef), eh += 0 < ef ? .5 * Math.PI : 1.5 * Math.PI), eh
	}, this.log2 = function(f0) {
		return Math.floor(!!f0 * (1 + Math.log2(f0 + .5)))
	}, this.log10 = function(f0) {
		return Math.floor(Math.log10(f0 + .5))
	}, this.aKN = function(aKO, aKP, aKQ, aKR, aKS) {
		return aKQ - aKS < aKO && aKO < aKQ + aKS && aKR - aKS < aKP && aKP < aKR + aKS
	}, this.wI = function(hb, hc) {
		return hb * hb + hc * hc
	}
}

function d7() {
	this.x = new aKT, this.rl = 0;
	var aKU = new Array(30);

	function aKY() {
		for (var eY = aKU.length, aA = 0; aA < eY; aA++) aKU[aA] = null
	}
	this.dU = function() {
		for (var aKV, aKW = document.body.firstChild; aKW;) {
			if (aKV = aKW.nextSibling, document.body.contains(aKW) && ("DIV" === aKW.tagName || "INPUT" === aKW.tagName || "BUTTON" === aKW.tagName)) try {
				document.body.removeChild(aKW)
			} catch (e) {
				console.log("error 2623: " + e)
			}
			aKW = aKV
		}
	}, this.t = function(dx, aKX, a2i) {
		void 0 === aKX && (aKX = this.rl), bd.dc = !0, 0 === dx && (0 === aZ.a00() ? dx = 5 : z.a0.setState(13)), this.qn(), this.rl === dx && (aKX = aKU[dx].aKX, aKU[dx] = null), this.rl = dx;
		var kV = aKU[dx];
		if (!kV || 4 === dx || 7 === dx || 8 === dx || 9 === dx || 10 === dx || 11 === dx || 13 === dx || 15 === dx || 18 === dx || 20 <= dx && dx <= 28) {
			if (0 === dx) return void aKY();
			1 === dx ? kV = new aKZ : 2 === dx ? kV = new aKa : 3 === dx ? kV = new aKb : 4 === dx || 9 === dx || 10 === dx || 11 === dx || 13 === dx ? kV = a2i : 5 === dx ? kV = new aKc : 6 === dx ? kV = new aKd : 7 === dx ? kV = new aKe(s.x
					.aKf) : 8 === dx ? kV = a2i : 12 === dx ? kV = new aKg : 14 === dx ? kV = new aKh : 15 === dx ? kV = new aKe(s.x.aKi) : 16 === dx ? kV = new aKj : 17 === dx ? kV = new aKk : 18 === dx ? kV = new aKl : 19 === dx ? kV =
				new aKm : 20 === dx ? kV = new aKn : 21 === dx ? kV = new aKo : 22 === dx ? kV = new aKp : 23 === dx ? kV = new aKq : 24 === dx ? kV = new aKr : 25 === dx ? kV = new aKs : 26 === dx ? kV = new aKt : 27 === dx ? kV = new aKu :
				28 === dx ? kV = new aKv : 29 === dx && (kV = new aKw), kV.aKX = aKX, aKU[dx] = kV
		}
		kV.show(a2i)
	}, this.a0A = function() {
		this.hF() && this.aKx(this.aDF().aKX)
	}, this.aKx = function(dx) {
		this.hF() && (aKU[dx] ? (this.qn(), bd.dc = !0, this.rl = dx, aKU[dx].show()) : this.t(dx))
	}, this.qn = function() {
		this.hF() && aKU[this.rl].qn()
	}, this.w = function() {
		this.hF() && (aKU[this.rl].qn(), aKY(), this.rl = 0, z.a0.setState(13))
	}, this.td = function() {
		var kV;
		this.hF() && (kV = aKU[this.rl]).td && kV.td()
	}, this.resize = function() {
		if (!this.hF()) return !1;
		aKU[this.rl].resize()
	}, this.gl = function(ef, eh) {
		var kV;
		this.hF() && (kV = aKU[this.rl]).gl && kV.gl(ef, eh)
	}, this.a0M = function(ef, eh) {
		var kV;
		this.hF() && (kV = aKU[this.rl]).a0M && kV.a0M(ef, eh)
	}, this.a0k = function() {
		var kV;
		this.hF() && (kV = aKU[this.rl]).a0k && kV.a0k()
	}, this.a0P = function(kr, ks, deltaY) {
		var kV;
		this.hF() && (kV = aKU[this.rl]).a0P && kV.a0P(kr, ks, deltaY)
	}, this.a0u = function(code) {
		var kV;
		return !!this.hF() && ((kV = aKU[this.rl]).a0u && kV.a0u(code), !0)
	}, this.ih = function() {
		var kV;
		this.hF() && (kV = aKU[this.rl]) && kV.ih && kV.ih()
	}, this.hF = function() {
		return 0 < this.rl
	}, this.aDF = function() {
		return aKU[this.rl]
	}, this.aCF = function(dx) {
		return aKU[dx]
	}, this.aKy = function() {
		return aKU
	}
}

function aKe(data) {
	var aKz, aL0;
	this.show = function() {
		data.aL1 && bG.aLk("account", data.rj), aKz.show(), this.resize()
	}, this.qn = function() {
		aKz.qn()
	}, this.resize = function() {
		aKz.resize(), aL0.resize()
	}, this.a0u = function(et) {
		2 === et && aKz.tV[0].po()
	}, aKz = new tO(data.username, [new v("⬅️ " + L(35), function() {
		bG.clear(), s.a0A()
	}), new v(data.aL1 ? "🔄 " + L(154) : L(155), function() {
		s.t(8, s.aDF().aKX, new rm(25, {
			rn: 0,
			rj: data.rj,
			rk: data.rk
		}))
	}, 0, 0, 1)]), aL0 = new pP(aKz.tU, function() {
		var pR = [];
		pR.push(function() {
				var aLI = new p9,
					qK = (aLI.pC(L(205)), new qL({
						value: data.username,
						dx: -1
					}));
				qK.e.readOnly = !0, aLI.pN(qK), aLI.pN(new r1([new v(L(174), function(e) {
					return b8.pW.a2A(qK.e), b8.pW.a2B(e), !0
				}).button])), data.aL1 || aLI.pE(L(206));
				return aLI
			}()),
			function(pR) {
				var aLI, pF, aAV, aLa, aLR;
				data.aL1 || ((aLI = new p9).pC(L(207)), (pF = aLI.pE(data.aLZ.length + " / 160")).style.textAlign = "center", aAV = !0, (aLa = new tm(0, 1, function(e) {
					e = e.target.value.length;
					pF.textContent = e + " / 160", 160 < e ? aAV && (aAV = !1, aLR.pr(1), aLR.button.style.color = b9.me) : aAV || (aAV = !0, aLR.pr(0), aLR.button.style.color = b9.na)
				})).e.rows = 6, aLa.e.style.fontSize = "1em", aLa.tt(data.aLZ), aLI.pN(aLa), aLR = new v(L(208), function() {
					if (!aAV) return !0;
					s.t(8, s.aDF().aKX, new rm(29, {
						rn: 1,
						pD: aLa.tv().substring(0, 160)
					}))
				}, 0, 0, 1), aLI.pN(new r1([aLR.button])), 0 !== data.aLb && (aLI.pN(new r1([new v(L(1 === data.aLb ? 210 : 211), function() {
					s.t(8, s.aDF().aKX, new rm(29, {
						rn: 0,
						pD: ""
					}))
				}, 0, 0, 1).button])), aLI.pE(1 === data.aLb ? L(212, [data.aLd - 1]) : L(213, [data.aLd - 1]))), aLI.pE(L(209, [data.aLc])), pR.push(aLI))
			}(pR),
			function(pR) {
				var aLI;
				data.aL1 && 0 !== data.aLb && ((aLI = new p9).pC(L(214)), aLI.pG(data.aLZ), aLI.pN(new r1([new v(L(215, 0, "Report"), function(e) {
					return ay.x.aLN(0) && (b8.pW.a2B(e), ay.aLP.aLe({
						rn: 5,
						rj: data.rj
					})), !0
				}, 0, 0, 1).button])), pR.push(aLI))
			}(pR), pR.push(function() {
				var aLI = new p9,
					aLJ = (aLI.pC(L(156)), [L(157), L(158), L(159), L(160), L(161)]),
					dw = data.aLK;
				aLI.pI(L(162) + b8.zR.a2x(data.uh, .01, 2) + "<br>" + L(163) + (dw + 1) + " / " + data.ug + "<br>" + L(164) + aLJ[dw < 10 ? 0 : dw < 50 ? 1 : dw < 200 ? 2 : dw < 1e3 ? 3 : 4]), data.aL1 || (aLI.pE(L(165)), aLI.pE(L(166)),
					aLI.pE(L(167)));
				return aLI
			}()), data.aL1 && pR.push(function() {
				var aLI = new p9,
					qK = (aLI.pC(L(168)), new qL({
						value: bh.km.data[147].value,
						dx: -1
					}, 1, void 0, function(e) {
						bh.qy.qz(147, aLL(e.target.value))
					})),
					aLM = (aLI.pN(qK), new v(L(14), function(e) {
						return qK.e.readOnly && ay.x.aLN(0) && (b8.pW.a2B(e), aLO(), ay.aLP.aLQ({
							rn: 0,
							rj: data.rj,
							value: parseInt(bh.km.data[147].value, 10)
						})), !0
					}, 1)),
					aLR = new v(L(169), function(e) {
						return e.textContent === L(169) ? (e.textContent = L(170), qK.e.readOnly = !0, aLM.pr(0), aLM.button.style.color = b9.na, bh.qy.qz(147, qK.e.value), aLL(bh.km.data[147].value)) : aLO(), !0
					}),
					pF = (aLI.pN(new r1([aLR.button])), aLI.pE()),
					aLL = (aLI.pE(L(171)).style.fontWeight = "bold", function(f0) {
						f0 = b8.ft.a2f(f0, 2, 1e6), pF.textContent = L(172, [f0, bh.km.data[105].value, data.rj, f0 - 1])
					}),
					aLO = function() {
						aLR.button.textContent = L(169), qK.e.readOnly = !1, aLM.pr(1), aLM.button.style.color = b9.me
					};
				return aLL(bh.km.data[147].value), aLI.pN(new r1([aLM.button])), aLI
			}());
		pR.push(function() {
			var aLI = new p9,
				qK = (aLI.pC(L(173)), new qL({
					value: data.rj,
					dx: -1
				}));
			return qK.e.readOnly = !0, aLI.pN(qK), aLI.pN(new r1([new v(L(174), function(e) {
				return b8.pW.a2A(qK.e), b8.pW.a2B(e), !0
			}).button])), aLI
		}()), data.aL1 || (pR.push(function() {
			var aLI = new p9,
				aLS = (aLI.pC(L(175)), new qL(bh.km.data[106]));
			return aLS.e.readOnly = !0, aLS.e.type = "password", aLI.pN(aLS), aLI.pN(new r1([new v(L(176), function(e) {
				return e.textContent === L(176) ? (e.textContent = L(177), aLS.e.type = "text") : (e.textContent = L(176), aLS.e.type = "password"), !0
			}).button, new v(L(174), function(e) {
				return b8.pW.a2A(aLS.e), b8.pW.a2B(e), !0
			}).button])), aLI.pN(new r1([new v(L(178), function() {
				s.t(8, s.aDF().aKX, new rm(15))
			}).button])), aLI.pC(L(179), "0.8em"), aLI.pE(L(180)), aLI.pE(L(181)), aLI.pE(L(182)), aLI
		}()), pR.push(function() {
			var aLI = new p9;
			return aLI.pC(L(183)), aLI.pN(new r1([new v(L(184), function() {
				s.t(6, s.aDF().aKX)
			}).button])), aLI.pN(new r1([new v(L(185), function() {
				bh.qy.qz(105, ""), s.t(8, s.aDF().aKX, new rm(18))
			}).button])), aLI.pN(new r1([new v(L(186) + bh.km.data[105].value, function() {
				s.t(4, 0, new u(L(187), L(188), !0, [new v("⬅️ " + L(35), function() {
					s.t(7, s.aCF(7).aKX)
				})]))
			}, b9.nJ).button])), aLI
		}()), pR.push(function() {
			function aLU(dx) {
				for (var aA = 0; aA < 2; aA++) aLT[aA].pr(0 === dx ? b9.mq : 0 === aA ? b9.nJ : b9.n1)
			}
			var pL, aLT, aLI = new p9;
			aLI.pC(L(189)), aLI.pE(L(190)), bh.x.uR();
			return aLT = [new v(L(191), function() {
				var dx = Math.min(bh.km.data[117].value, pL.pM.length - 1);
				if (!(dx < 1)) {
					pL.pM[dx].remove(), pL.pM.splice(dx, 1);
					for (var aA = dx; aA < pL.pM.length; aA++) pL.pM[aA].name = "" + aA;
					bh.x.uU(dx), dx = bh.km.data[117].value, pL.pM[dx].textContent = pL.pM[dx].textContent.replace("⚪", "🟢"), aLU(dx)
				}
			}, b9.mq), new v(L(192), function() {
				var dx = Math.min(bh.km.data[117].value, pL.pM.length - 1);
				dx < 1 || (dx = bh.x.uV(dx), bh.qy.qz(105, dx.rj), bh.qy.qz(106, dx.password), s.t(8, s.aDF().aKX, new rm(18)))
			}, b9.mq)], (pL = new tJ(bh.km.data[117], aLU)).pM[0].style.marginTop = "0.5em", aLI.pK(pL), aLI.pN(new r1([aLT[1].button])), aLI.pN(new r1([aLT[0].button])), aLI
		}()));
		return pR.push(function() {
				var aLI = new p9,
					aLJ = (aLI.pC(L(196)), [L(197), L(198), L(199), L(200)]),
					dw = data.aLV;
				return aLI.pI(L(201) + (data.zE / 100).toFixed(2) + "<br>" + L(163) + (dw + 1) + " / " + data.ug + "<br>" + L(164) + aLJ[dw < 10 ? 0 : dw < 50 ? 1 : dw < 200 ? 2 : 3]), aLI
			}()), pR.push(function() {
				var aLI = new p9;
				return aLI.pC(L(193)), aLI.pI(L(194) + b8.zR.a2x(data.ud, .1, 1) + "<br>" + L(163) + (data.ue + 1) + " / " + data.ug + "<br>" + L(195) + data.uf), aLI
			}()),
			function(pR) {
				var aLI = new p9,
					aLf = data.uk,
					aLg = (aLI.pC(L(216)), aLI.pI(L(217, [aLf ? "[" + data.ui + "]" : "-"])), aLI.pI(L(218, [b8.zR.a2x(aLf, .01, 2)])), aLI.pI(L(219, [data.um + 1 + " / " + data.ug])), data.un),
					aLh = (aLI.pI(L(220, [b8.zR.a2x(aLg, .1, 1)])), data.up);
				aLI.pI(L(221, [aLh])), aLI.pI(L(222, [b8.zR.a2x(aLg / Math.max(aLh, 1), .1, 2)])), aLf = data.ul, aLI.pC(L(223), "0.8em"), aLI.pI(L(217, [aLf ? "[" + data.uj + "]" : "-"])), aLI.pI(L(218, [b8.zR.a2x(aLf, .01, 2)])), aLg = data
					.uo, aLI.pI(L(220, [b8.zR.a2x(aLg, .1, 1)])), aLh = data.uq, aLI.pI(L(221, [aLh])), aLI.pI(L(222, [b8.zR.a2x(aLg / Math.max(aLh, 1), .1, 2)])), data.aL1 || (aLI.pE(L(224)), aLI.pE(L(225)));
				pR.push(aLI)
			}(pR),
			function(pR) {
				var aLI = new p9;
				aLI.pC(L(226)), aLI.pI(L(201) + (data.aLi / 10).toFixed(1) + "<br>" + L(164) + (data.aLj.length ? L(227, [data.aLj]) : L(228))), data.aL1 ? (aLI.pN(new r1([new v(L(229), function(e) {
					return ay.x.aLN(0) && (b8.pW.a2B(e), ay.aLP.aLe({
						rn: 4,
						rj: data.rj
					})), !0
				}, 0, 0, 1).button])), aLI.pE(L(230)), aLI.pE(L(231))) : aLI.pE(L(232));
				pR.push(aLI)
			}(pR), pR.push(function() {
				var aLI = new p9;
				if (aLI.pC(L(202)), aLI.pI(L(203) + data.aLW + "<br>" + L(163) + (data.aLX + 1) + " / " + data.ug + "<br>" + L(164) + bm.dz(data.aLX)), data.aL1) {
					var qK = new qL({
							value: bh.km.data[157].value,
							dx: -1
						}, 1, void 0, function(e) {
							bh.qy.qz(157, aLL(e.target.value))
						}),
						aLR = (qK.e.style.marginTop = "0.6em", aLI.pN(qK), new v(L(169), function(e) {
							return e.textContent === L(169) ? (e.textContent = L(170), qK.e.readOnly = !0, aLY[0].pr(0), aLY[1].pr(0), aLY[0].button.style.color = b9.na, aLY[1].button.style.color = b9.na, aLL(bh.km.data[157]
								.value)) : aLO(), !0
						})),
						aLY = (aLI.pN(new r1([aLR.button])), [new v("−", function(e) {
							return qK.e.readOnly && ay.x.aLN(0) && (b8.pW.a2B(e), aLO(), ay.aLP.aLQ({
								rn: 2,
								rj: data.rj,
								value: bJ.p4(parseInt(bh.km.data[157].value, 10), 3, 32767)
							})), !0
						}, 1), new v("+", function(e) {
							return qK.e.readOnly && ay.x.aLN(0) && (b8.pW.a2B(e), aLO(), ay.aLP.aLQ({
								rn: 1,
								rj: data.rj,
								value: bJ.p4(parseInt(bh.km.data[157].value, 10), 3, 32767)
							})), !0
						}, 1)]),
						pF = aLI.pE(),
						aLL = function(f0) {
							return f0 = b8.ft.a2f(f0, 3, 32767), pF.textContent = L(204, [f0 - 1, f0, bh.km.data[105].value]), f0
						};
					aLI.pN(new r1([aLY[0].button, aLY[1].button]));
					for (var aA = 0; aA < 2; aA++) aLY[aA].button.style.fontSize = "1.6em";
					var aLO = function() {
						aLR.button.textContent = L(169), qK.e.readOnly = !1, aLY[0].pr(1), aLY[1].pr(1), aLY[0].button.style.color = b9.me, aLY[1].button.style.color = b9.me
					};
					aLL(bh.km.data[157].value)
				}
				return aLI
			}()), data.aL1, pR
	}())
}

function aKp() {
	var aLl, aLm, aLn, pR;

	function aLo() {
		aLq(), 2 !== aC.data.aIncomeType && (aC.data.aIncomeData = null), s.aKy()[19] = null, s.a0A()
	}

	function aLq() {
		2 === aC.data.aIncomeType ? (b8.pf.a1X(aLn.tv(), aC.data.aIncomeData, 255), b8.pf.max(aC.data.aIncomeData) || (aC.data.aIncomeType = 0)) : 1 !== aC.data.aIncomeType || aC.data.aIncomeValue || (aC.data.aIncomeType = 0)
	}
	this.show = function() {
		aLl.show(), this.resize()
	}, this.qn = function() {
		aLl.qn()
	}, this.resize = function() {
		aLl.resize(), aLm.resize()
	}, this.a0u = function(et) {
		2 === et && aLl.tV[0].po()
	}, aLl = new tO(L(234), [new v("⬅️ " + L(35), aLo)]), aLm = new pP(aLl.tU, (function(pR) {
		var aLI = new p9;
		aLI.pC(L(235)), aLI.pK(new tJ({
			tN: [L(236), L(237), L(238)],
			value: aC.data.aIncomeType
		}, function(dx) {
			aLq(), 2 !== dx || aC.data.aIncomeData || (aC.data.aIncomeData = new Uint8Array(aC.eV)), aC.data.aIncomeType = dx, s.t(22)
		})), pR.push(aLI)
	}(pR = []), function(pR) {
		var aLI;
		1 === aC.data.aIncomeType && ((aLI = new p9).pC("Value"), aLI.pN(new qL({
			dx: -1,
			value: aC.data.aIncomeValue
		}, 1, 0, function(e) {
			var value = bJ.p4(Math.floor(e.target.value), 0, 255);
			e.target.value = aC.data.aIncomeValue = value
		})), pR.push(aLI))
	}(pR), function(pR) {
		var aLI;
		2 === aC.data.aIncomeType && ((aLI = new p9).pC("Data"), (aLn = new tm(0, 1, 0, 1)).tt(b8.zR.a33(aC.data.aIncomeData, 4)), aLI.pN(aLn), pR.push(aLI))
	}(pR), pR))
}

function aKs() {
	var aLl, aLm, aLn;

	function aLo() {
		aLq(), 3 !== aC.data.botDifficultyType || b8.pf.a1L(aC.data.botDifficultyData) || (aC.data.botDifficultyType = 0), 3 !== aC.data.botDifficultyType && (aC.data.botDifficultyData = null), s.aKy()[19] = null, s.a0A()
	}

	function aLq() {
		3 === aC.data.botDifficultyType && b8.pf.a1X(aLn.tv(), aC.data.botDifficultyData, aD.jy.length - 1)
	}

	function aLv(pR, dx) {
		var aLI = new p9,
			value = (aLI.pC(dx < 0 ? L(60) : L(59) + " " + be.z8[dx % 9]), 0 <= dx && (aLI.pI(L(241) + ": " + aC.data.teamPlayerCount[dx]).style.marginBottom = "1em"), dx < 0 ? aC.data.botDifficultyValue : aC.data.botDifficultyTeam[dx]);
		aLI.pK(new tJ({
			tN: aD.jy,
			value: value
		}, function(hL) {
			dx < 0 ? aC.data.botDifficultyValue = hL : aC.data.botDifficultyTeam[dx] = hL
		})), pR.push(aLI)
	}
	this.show = function() {
		aLl.show(), this.resize()
	}, this.qn = function() {
		aLl.qn()
	}, this.resize = function() {
		aLl.resize(), aLm.resize()
	}, this.a0u = function(et) {
		2 === et && aLl.tV[0].po()
	}, aLl = new tO(L(60), [new v("⬅️ " + L(35), aLo)]), aLm = new pP(aLl.tU, function() {
		var pR = [];
		if (function(pR) {
				var aLI = new p9,
					tN = (aLI.pC(L(235)), [L(237), L(239), L(240), L(238)]),
					value = aC.data.botDifficultyType;
				0 === aC.data.gameMode && (value = Math.min(value, 2), tN.splice(2, 1));
				aLI.pK(new tJ({
					tN: tN,
					value: value
				}, function(dx) {
					aLq(), aC.data.botDifficultyType = dx, 0 === aC.data.gameMode && 2 === dx && (aC.data.botDifficultyType = 3), 3 !== aC.data.botDifficultyType || aC.data.botDifficultyData || (aC.data.botDifficultyData =
						new Uint8Array(aC.eV)), 2 !== aC.data.botDifficultyType || aC.data.botDifficultyTeam || (aC.data.botDifficultyTeam = new Uint8Array(9)), s.t(25)
				})), pR.push(aLI)
			}(pR), 0 === aC.data.botDifficultyType) aLv(pR, -1);
		else if (2 === aC.data.botDifficultyType)
			for (var aA = 0; aA < aC.data.teamPlayerCount.length; aA++) aC.data.teamPlayerCount[aA] && aLv(pR, aA);
		else 3 === aC.data.botDifficultyType && ! function(pR) {
			var aLI = new p9;
			aLI.pC("Data"), (aLn = new tm(0, 1, 0, 1)).tt(b8.zR.a33(aC.data.botDifficultyData, 8)), aLI.pN(aLn), pR.push(aLI)
		}(pR);
		return pR
	}())
}

function aLw(data) {
	var aKz, aLx, aLy, aLz, aM0, aM1, aM2, colors, aM3, aM4, aM5 = 0,
		aM6 = 0,
		aM7 = !1,
		aM8 = !1,
		aM9 = [1, 5, 60, 240, 1440, 10080, 43200];

	function aMd(kr, ks) {
		! function(kr, ks) {
			return aLx < kr && kr < aLx + aLz && aLy < ks && ks < aLy + aM0
		}(aM5 = kr, aM6 = ks) ? (aM7 && (bd.dc = !0), aM7 = !1) : (aM7 = !0, bd.dc = !0)
	}
	this.show = function() {
		aM8 = bh.km.data[127].value, aKz.show(), this.resize()
	}, this.qn = function() {
		aKz.qn()
	}, this.resize = function() {
		aKz.resize();
		var et = h.k,
			tc = aKz.tZ(),
			aMI = et * tc.tb,
			et = et * tc.qq;
		aM1 = b8.pW.sB(.06), aM2 = b8.pW.sB(.04), aLx = b8.pW.sB(.06), aLy = et + aM1, aLz = h.i - aLx - aM2, aM0 = aMI + et - aLy - aM2
	}, this.td = function() {
		aKz.td(),
			function() {
				var aA, aMF, g0, ef, er, g = data.data,
					aMM = 1,
					aMN = .125,
					aMO = aM8 ? 65536 : 0;
				for (aA = 0; aA < g.length; aA++)
					for (aMF = g[aA].aMF, g0 = aMF.length, aMM = Math.max(g0, aMM), er = 0; er < g0; er++) aMN = Math.max(aMF[er], aMN), aMO = Math.min(aMF[er], aMO);
				var m5 = aLy + aM0,
					wr = aM0 / (aMN - aMO),
					wq = 1 / (aMM - 1);
				for (te.lineWidth = ba.xn, aA = 0; aA < g.length; aA++) {
					for (aMF = g[aA].aMF, g0 = aMF.length, ef = aLx, te.beginPath(), te.moveTo(ef + aLz, m5 - wr * (aMF[g0 - 1] - aMO)), er = g0 - 2; 0 <= er; er--) te.lineTo(ef + wq * er * aLz, m5 - wr * (aMF[er] - aMO));
					te.strokeStyle = colors[aA], te.stroke()
				}(function(aMO, aMN, m5, wr) {
					te.font = b8.pW.rL(0, .25 * aLx), b8.pW.textBaseline(te, 1), b8.pW.textAlign(te, 2), te.fillStyle = colors[0];
					for (var ef = .92 * aLx, aA = 0; aA < 3; aA++) {
						var f0 = aMO + aA * (aMN - aMO) / 2;
						te.fillText((f0 / 1e3).toFixed(3), ef, m5 - wr * (f0 - aMO))
					}
				})(aMO, aMN, m5, wr),
				function(aMM) {
					var eh = aLy + aM0 + .15 * aM2;
					te.font = b8.pW.rL(0, Math.min(.4 * aM2, .028 * h.i)), b8.pW.textBaseline(te, 0), b8.pW.textAlign(te, 2), te.fillStyle = colors[0], te.fillText(b8.a1C.a1z(aM3), aLx + aLz, eh), b8.pW.textAlign(te, 0), te.fillText(b8.a1C.a1z(
						new Date(aM4.getTime() - 6e4 * (aMM - 1) * aM9[data.aME])), aLx, eh)
				}(aMM),
				function(aMM, aMO, aMN) {
					if (aM7 && !(aMM < 2)) {
						for (var a73, dx = (aM5 - aLx) / aLz * (aMM - 1), aMR = Math.floor(dx), aMS = Math.floor(1 + dx), aMT = dx - aMR, aMU = 1e5, aMV = -1, aMW = -1, aMX = aMN - (aMN - aMO) * (aM6 - aLy) / aM0, g = data.data, aA = 0; aA < g
							.length; aA++) {
							var aAh, aMF = g[aA].aMF;
							aMF.length <= aMS || (aMF = aMF[aMR] + aMT * (aMF[aMS] - aMF[aMR]), (aAh = Math.abs(aMX - aMF)) < aMU && (aMU = aAh, aMV = aA, aMW = aMF))
						} - 1 !== aMV && (aMN = aLy + aM0 - (aMW - aMO) / (aMN - aMO) * aM0, te.lineWidth = .5 * ba.xn, te.strokeStyle = colors[aMV], te.beginPath(), te.moveTo(aLx, aMN), te.lineTo(aM5, aMN), te.lineTo(aM5, aLy + aM0), te
						.stroke(), te.beginPath(), te.arc(aM5, aMN, .1 * aLx, 0, 2 * Math.PI), te.fillStyle = colors[aMV], te.fill(), aMO = aLy + aM0 + .15 * aM2, b8.pW.textAlign(te, 1), a73 = aMM - 2 < dx ? (a73 = aM4.getTime() - 6e4 * aM9[
								data.aME], new Date(a73 + (dx - (aMM - 2)) * (aM3.getTime() - a73))) : new Date(aM4.getTime() - 6e4 * (aMM - dx - 1) * aM9[data.aME]), aMM = b8.a1C.a1z(a73), dx = b8.pW.measureText(aMM), a73 = bJ.p4(aM5, aLx +
								.5 * dx, aLx + aLz - .5 * dx), te.fillStyle = b8.color.mW(70, 50, 20), te.fillRect(a73 - .52 * dx, aLy + aM0, 1.04 * dx, .55 * aM2), te.fillStyle = colors[0], te.fillText(aMM, a73, aMO), te.font = b8.pW.rL(0,
								.25 * aLx), b8.pW.textBaseline(te, 1), b8.pW.textAlign(te, 2), a73 = .92 * aLx, aMM = (aMW / 1e3).toFixed(3), dx = b8.pW.measureText(aMM), aMO = a73 - 1.04 * dx, te.fillStyle = b8.color.mW(70, 50, 20), te
							.fillRect(aMO, aMN - .1625 * aLx, aLx - aMO, .275 * aLx), te.fillStyle = colors[aMV], te.fillText(aMM, a73, aMN))
					}
				}(aMM, aMO, aMN)
			}(), te.lineWidth = ba.xn, te.strokeStyle = b9.me, te.beginPath(), te.moveTo(aLx, aLy), te.lineTo(aLx, aLy + aM0), te.lineTo(aLx + aLz, aLy + aM0), te.stroke();
		var aA, fontSize = .5 * aM1,
			g = (te.font = b8.pW.rL(0, fontSize), b8.pW.textBaseline(te, 1), b8.pW.textAlign(te, 0), data.data),
			eY = g.length,
			eh = aLy - .5 * aM1,
			pD = "";
		for (aA = 0; aA < eY; aA++) pD += g[aA].name + "  ";
		pD = pD.trim();
		var aMa = b8.pW.measureText(pD),
			ef = .5 * (h.i - aMa);
		for (aMa > h.i && (ef = 0, te.font = b8.pW.rL(0, h.i / aMa * fontSize)), aA = 0; aA < eY; aA++) te.fillStyle = colors[aA], te.fillText(g[aA].name, ef, eh), ef += b8.pW.measureText(g[aA].name + "  ")
	}, this.gl = function(kr, ks) {
		aMd(kr, ks)
	}, this.a0M = function(kr, ks) {
		aMd(kr, ks)
	}, this.a0u = function(et) {
		2 === et && aKz.tV[0].po()
	};
	var aA, di, a1x, hL, eb = data.data,
		eY = eb.length,
		max = 1;
	for (aA = 0; aA < eY; aA++) max = Math.max(max, eb[aA].aMF.length);
	for (aA = 0; aA < eY; aA++)
		for (; eb[aA].aMF.length < max;) eb[aA].aMF.unshift(0);
	di = new Date, a1x = 6e4 * di.getTimezoneOffset(), hL = di.getTime() - a1x, aM3 = new Date(hL), 6 === data.aME ? function(di, a1x) {
		var aMH = di.getUTCFullYear(),
			di = di.getUTCMonth() + 1;
		aM4 = di < 12 ? new Date(Date.UTC(aMH, di) - a1x) : new Date(Date.UTC(aMH + 1, 0) - a1x)
	}(di, a1x) : (a1x = 6e4 * aM9[data.aME], aM4 = data.aME <= 4 ? new Date(hL + a1x - di.getTime() % a1x) : new Date(hL + a1x - (di.getTime() + 2592e5) % a1x)), hL = b8.color, colors = [b9.me, hL.mW(255, 0, 0), hL.mW(0, 200, 0), hL.mW(80, 80,
		255), hL.mW(255, 255, 0), hL.mW(255, 0, 255), hL.mW(0, 255, 255), hL.mW(255, 140, 0), hL.mW(128, 128, 128), hL.mW(0, 255, 140)], aKz = new tO(L(242) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.aME] + ", " + b8.a1C.a1w(aM3), [
		new v("⬅️ " + L(35), function() {
			s.x.aAb()
		}), new v(L(243), function() {
			s.t(14)
		})
	], !1)
}

function aKh() {
	var aKz, aL0, pR;
	this.show = function() {
		aKz.show(), this.resize()
	}, this.qn = function() {
		aKz.qn()
	}, this.resize = function() {
		aKz.resize(), aL0.resize()
	}, this.a0u = function(et) {
		2 === et && aKz.tV[0].po()
	}, aKz = new tO(L(244), [new v("⬅️ " + L(35), function() {
		s.aKx(13)
	})]), aL0 = new pP(aKz.tU, ((pR = []).push(function() {
		var aLI = new p9,
			aLR = (aLI.pC(L(245)), aLI.pE(L(246)), new v(L(247), function() {
				bh.qy.qz(130, 0), s.x.aMi()
			}, 0, 0, 1)),
			qK = new qL(bh.km.data[126], 0, function() {
				aLR.button.click()
			});
		return aLI.pN(qK), qK.e.placeholder = "a,b,c", qK.e.style.marginTop = "0.5em", aLI.pN(new r1([aLR.button])), aLI
	}()), pR.push(function() {
		var aLI = new p9,
			aLR = new v(L(247), function() {
				bh.qy.qz(130, 1), s.x.aMi()
			}, 0, 0, 1),
			aMj = new qL(bh.km.data[129], 1, function() {
				aMj.e.focus()
			}),
			aMk = new qL(bh.km.data[128], 1, function() {
				aLR.button.click()
			});
		return aLI.pC(L(248)), aLI.pN(aMk), aMk.e.style.marginBottom = "0.5em", aLI.pC(L(249)), aLI.pN(aMj), aLI.pN(new r1([aLR.button])), aLI
	}()), pR.push(function() {
		var aLI = new p9;
		return aLI.pC(L(250)), bh.km.data[125].tN = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], aLI.pK(new tJ(bh.km.data[125])), aLI
	}()), pR.push(function() {
		var aLI = new p9;
		return aLI.pC(L(251)), aLI.pN(new qv(bh.km.data[127], L(252))), aLI
	}()), pR))
}

function aKg() {
	var aKz, aMl, aLz, aMm, aMn, aMo, colors = [0, 0, 0],
		aMp = -1;

	function aMs(aA) {
		var aMt = aMl.eh + aA * (ba.gap + aMo);
		te.fillStyle = "rgb(" + (0 === aA ? 150 : 2 === aA ? 30 : 0) + "," + (1 === aA ? 130 : 2 === aA ? 30 : 0) + "," + (2 === aA ? 220 : 0) + ")", te.fillRect(aMm, aMt, colors[aA] * aMn, aMo), te.strokeStyle = b9.me, te.strokeRect(aMm, aMt, aMn,
			aMo), te.fillStyle = b9.me, te.font = b8.pW.rL(0, .32 * aMo), b8.pW.textBaseline(te, 1), b8.pW.textAlign(te, 0), te.fillText(L(0 === aA ? 255 : 1 === aA ? 256 : 257) + aMq(aA), aMm + ba.gap, aMt + .53 * aMo)
	}

	function aMq(aA, aMu) {
		return aMu = aMu || 256, bJ.p4(Math.floor(aMu * colors[aA]), 0, aMu - 1)
	}

	function a0q(kr, ks) {
		return !(kr < aMm || ks < aMl.eh || kr > aMl.ef + aMl.i || ks > aMl.eh + aMl.j)
	}
	this.show = function() {
		var f0 = bh.km.data[121].value;
		colors[0] = (f0 >> 12) / 63, colors[1] = (f0 >> 6 & 63) / 63, colors[2] = (63 & f0) / 63, aKz.show(), this.resize()
	}, this.qn = function() {
		bh.qy.qz(121, (aMq(0, 64) << 12) + (aMq(1, 64) << 6) + aMq(2, 64)), aKz.qn()
	}, this.resize = function() {
		aKz.resize(), aMl.resize();
		var et = h.k,
			tc = aKz.tZ(),
			aMr = (aMl.eh = Math.max(aMl.eh, et * tc.qq + ba.gap), et * tc.tb - 2 * ba.gap);
		aMl.j = Math.min(aMl.j, aMr), aMl.i = 2 * aMl.j, aMl.eh = et * tc.qq + .5 * (et * tc.tb - aMl.j), aMl.ef = .5 * (h.i - aMl.i), aLz = .25 * aMl.i, aMm = aMl.ef + aLz + ba.gap, aMn = aMl.i - aLz - ba.gap, aMo = (aMl.j - 2 * ba.gap) / 3
	}, this.td = function() {
		var dw, sA, es;
		aKz.td(), te.lineWidth = ba.xn, dw = aMq(0), sA = aMq(1), es = aMq(2), te.fillStyle = "rgb(" + dw + "," + sA + "," + es + ")", te.fillRect(aMl.ef, aMl.eh, aLz, aMl.j), te.strokeStyle = b9.me, te.strokeRect(aMl.ef, aMl.eh, aLz, aMl.j), te
			.fillStyle = dw + sA + es < 306 && sA < 150 ? b9.me : b9.mV, b8.pW.textBaseline(te, 1), b8.pW.textAlign(te, 1), te.font = b8.pW.rL(0, .1 * aMl.j), te.rotate(-Math.PI / 2), te.fillText(L(254), -aMl.eh - .5 * aMl.j, aMl.ef + .5 * aLz),
			te.setTransform(1, 0, 0, 1, 0, 0), aMs(0), aMs(1), aMs(2)
	}, this.gl = function(kr, ks) {
		a0q(kr, ks) && (aMp = bJ.p4(Math.floor((ks - aMl.eh) / (aMo + .75 * ba.gap)), 0, 2), colors[aMp] = bJ.p4((kr - aMm) / aMn, 0, 1), bd.dc = !0)
	}, this.a0M = function(kr) {
		-1 !== aMp && (colors[aMp] = bJ.p4((kr - aMm) / aMn, 0, 1), bd.dc = !0)
	}, this.a0P = function(kr, ks, deltaY) {
		a0q(kr, ks) && (kr = bJ.p4(Math.floor((ks - aMl.eh) / (aMo + .75 * ba.gap)), 0, 2), colors[kr] = bJ.p4(colors[kr] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), bd.dc = !0)
	}, this.a0k = function() {
		0 <= aMp && (aMp = -1, bd.dc = !0)
	}, this.a0u = function(et) {
		2 === et && aKz.tV[0].po()
	}, aKz = new tO(L(253), [new v("⬅️ " + L(35), function() {
		s.x.aAb()
	})], !1), aMl = new q8([.5, .25], [.5, .5], 1)
}

function aKo() {
	var aLl, aLm, aLn, q6;

	function aLo() {
		aLq(), 1 !== aC.data.colorsType && (aC.data.colorsData = null), s.aKy()[19] = null, s.a0A()
	}

	function aMv() {
		aLq(), s.t(21)
	}

	function aLq() {
		1 === aC.data.gameMode ? aC.a3K.a3O() : 0 === aC.data.gameMode && 1 === aC.data.colorsType && b8.pf.a1X(aLn.tv(), aC.data.colorsData, 262143)
	}
	this.show = function() {
		aLl.show(), this.resize()
	}, this.qn = function() {
		aLl.qn()
	}, this.resize = function() {
		aLl.resize(), aLm.resize()
	}, this.a0u = function(et) {
		2 === et && aLl.tV[0].po()
	}, q6 = [new v("⬅️ " + L(35), aLo)], 1 === aC.data.gameMode && q6.push(new v(L(258), aMv, 1, 1)), aLl = new tO(L(259), q6), aLm = new pP(aLl.tU, (function(pR) {
		var aLI = new p9;
		aLI.pC(L(235)), 0 === aC.data.gameMode && (aLI.pK(new tJ({
			tN: [L(260), L(238)],
			value: aC.data.colorsType
		}, function(dx) {
			aLq(), aC.data.colorsType = dx, 1 !== aC.data.colorsType || aC.data.colorsData && aC.data.colorsData.length === aC.eV || (aC.data.colorsData = new Uint32Array(aC.eV)), s.t(21)
		})), aLI.pN(new rB));
		aLI.pN(new qv({
			value: aC.data.selectableColor
		}, L(261), function(value) {
			aC.data.selectableColor = value
		})), pR.push(aLI)
	}(q6 = []), 0 === aC.data.gameMode ? 1 === aC.data.colorsType && function(pR) {
		var aLI = new p9;
		aLI.pC("Data"), (aLn = new tm(0, 1, 0, 1)).tt(b8.zR.a33(aC.data.colorsData, 1)), aLI.pN(aLn), pR.push(aLI)
	}(q6) : (aC.a3K.a3O(), q6.push(function() {
		var aLI = new p9;
		aLI.pC(L(241));
		for (var aA = 0; aA < be.z8.length; aA++) {
			var hL = (aA + 1) % be.z8.length,
				e = aLI.pI((0 == hL ? "" : "Team ") + be.z8[hL]);
			aA && (e.style.marginTop = "0.5em"), aLI.pN(new qL({
				dx: -1,
				value: aC.data.teamPlayerCount[hL]
			}, 1, 0, function(e) {
				aLl.tV[1].pr(0);
				var playerCount = bJ.p4(Math.floor(e.target.value), 0, 512);
				e.target.value = playerCount, aC.data.teamPlayerCount[e.target.aMx] = playerCount
			})).e.aMx = hL
		}
		return aLI
	}())), q6))
}

function rm(id, a2i, aMy) {
	var aKz, aMz;

	function aN4() {
		aMz.pS.innerHTML += "<br>" + L(264)
	}

	function aN3() {
		bB.a6(48), bB.a7(24, Math.floor(bJ.pow(24) * Math.random())), bB.a7(24, Math.floor(bJ.pow(24) * Math.random())), bF.dU(bB.aB), bh.qy.qz(110, bD.ro.rp(bD.ro.rq(8))), ay.aLP.aNI()
	}
	this.aN0 = !0, this.aN1 = id, this.show = function() {
		aKz.show(), this.resize(), 15 === id ? (ay.x.aN2(id) ? aN3 : aN4)() : 16 === id ? ay.x.aN2(id) ? ay.aAY.aN5(2) : aN4() : 17 === id ? ay.x.aN2(id) ? ay.aAY.aN5(3) : aN4() : 18 === id ? (ay.x.close(0, 3253), ay.x.aDz(0, id), aN4()) : 21 ===
			id ? ay.x.aN2(id) ? ay.aN6.aN7(a2i.s5, a2i.s6, a2i.s7) : aN4() : 22 === id ? ay.x.aN2(id) ? ay.aN6.aN8(a2i.s5, a2i.aN9, a2i.aNA) : aN4() : 23 === id ? ay.x.aN2(id) ? ay.aN6.aNB(a2i.aME, a2i.zU) : aN4() : 24 === id ? ay.x.aN2(id) ? ay
			.aN6.aNC(a2i.aME, a2i.s6, a2i.s7) : aN4() : 25 === id ? ay.x.aN2(id) ? ay.aLP.aLe(a2i) : aN4() : 28 === id ? ay.x.aN2(id) ? ay.aN6.aND(a2i.s5, a2i.aN9, a2i.aNA) : aN4() : 29 === id && (ay.x.aN2(id) ? ay.aLP.aNE(a2i) : aN4())
	}, this.aNF = function() {
		15 === id ? aN3() : 16 === id ? ay.aAY.aN5(2) : 17 === id ? ay.aAY.aN5(3) : 18 === id ? s.t(8, this.aKX, new rm(16)) : 21 === id ? ay.aN6.aN7(a2i.s5, a2i.s6, a2i.s7) : 22 === id ? ay.aN6.aN8(a2i.s5, a2i.aN9, a2i.aNA) : 23 === id ? ay.aN6
			.aNB(a2i.aME, a2i.zU) : 24 === id ? ay.aN6.aNC(a2i.aME, a2i.s6, a2i.s7) : 25 === id ? ay.aLP.aLe(a2i) : 28 === id ? ay.aN6.aND(a2i.s5, a2i.aN9, a2i.aNA) : 29 === id ? ay.aLP.aNE(a2i) : 1e3 === id && (this.aN1 = id = 25, ay.aLP.aLe(
				a2i))
	}, this.aNG = function(code, bp, data) {
		!bp && code !== id || (16 === code ? s.t(7, this.aKX) : 17 === code ? (ay.x.close(0, 3252), bh.x.uU(0), bh.km.data[117].tN && 0 < bh.km.data[117].tN.length ? (bp = bh.x.uV(0), bh.qy.qz(105, bp.rj), bh.qy.qz(106, bp.password), s.t(8, this
			.aKX, new rm(16))) : (bh.qy.qz(105, ""), s.x.aAb())) : 21 === code ? s.t(10, this.aKX, new aNH(data)) : 23 === code ? s.t(13, 0, new aLw({
			data: data,
			aME: a2i.aME
		})) : 25 === code && (s.x.aKi.rj = a2i.rj, s.t(15, this.aKX)))
	}, this.qn = function() {
		aKz.qn()
	}, this.resize = function() {
		aKz.resize(), aMz.resize()
	}, this.a0u = function(et) {
		2 === et && aKz.tV[0].po()
	}, aKz = new tO(L(262), [new v("⬅️ " + L(35), function() {
		aMy ? s.t(29) : s.x.aAb()
	})]), aMz = new r0(aKz.tU, L(263))
}

function aKm() {
	var aLl, aLm, pR;

	function aNL() {
		var g0;
		1 === aC.data.gameMode ? (aC.data.teamPlayerCount || (aC.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), aC.a3K.a3O()), g0 = b8.pf.a1R(aC.data.teamPlayerCount, 0), aC.data.numberTeams = g0) : (2 === aC.data
			.botDifficultyType && (aC.data.botDifficultyType = 0), 1 === aC.data.spawningType && (aC.data.spawningType = 0))
	}

	function aLo() {
		1 !== aC.data.gameMode && (aC.data.teamPlayerCount = null), aNN(), aC.data.canvas = null, s.t(5, 5)
	}

	function aNN() {
		b7.om.dU(), bh.qy.qz(156, b7.a3a.yF())
	}

	function aNJ() {
		aC.data.isReplay = 0, aNN(), aC.a3K.a3l(), aZ.aEA(), aC.a3K.a3i(), aC.data.canvas = 2 === aC.data.mapType ? bQ.vR : null, aC.a3N(), aC.a3M = 1
	}

	function aNb() {
		aNL();
		for (var g = [aNQ(), aNR(), aNS()], aA = 3; aA < 6; aA++) aLm.pS.removeChild(aLm.pT[aA].pB), aLm.pT[aA] = g[aA - 3], aLm.pS.appendChild(aLm.pT[aA].pB);
		aLm.resize()
	}

	function aNQ() {
		var aNc, aLI = new p9;
		return aLI.pC(L(259)), aNc = 0 === aC.data.gameMode ? [L(260), L(238)][aC.data.colorsType] : aC.data.numberTeams + " Team" + (1 === aC.data.numberTeams ? "" : "s"), aLI.pI(aNc), aLI.pN(new r1([new v(L(268), function() {
			s.t(21)
		}).button])), aLI
	}

	function aNR() {
		var aLI = new p9,
			g = (aLI.pC(L(60)), [L(237) + ": " + aD.jy[aC.data.botDifficultyValue], L(239), L(240), L(238)]);
		return aLI.pI(g[aC.data.botDifficultyType]), aLI.pN(new r1([new v(L(268), function() {
			s.t(25)
		}).button])), aLI
	}

	function aNS() {
		var aLI = new p9,
			g = (aLI.pC("Spawning"), [L(260), L(270), L(238)]);
		return aLI.pI(g[aC.data.spawningType]), aLI.pN(new r1([new v(L(268), function() {
			s.t(24)
		}).button])), aLI
	}
	this.show = function() {
		aLl.show(), this.resize(), aLl.tU.scrollTop = s.x.aG3[0]
	}, this.qn = function() {
		s.x.aG3[0] = aLl.tU.scrollTop, aLl.qn()
	}, this.resize = function() {
		aLl.resize(), aLm.resize()
	}, this.a0u = function(et) {
		2 === et && aLl.tV[0].po()
	}, aLl = new tO("🔧 " + L(265), [new v("⬅️ " + L(35), aLo), new v(L(266), aNJ)]), aNL(), aC.data.canvas || (2 === aC.data.mapType ? aC.data.canvas = bQ.vR : 1 === aC.data.mapType ? aC.data.canvas = bQ.aIc(bQ.a3j(aC.data), 0).vR : (aC.data
		.mapType = 0, aC.data.passableWater = aC.data.passableMountains = 1, aC.data.canvas = bQ.aIc(bQ.a3j(aC.data), aC.data.mapSeed).vR)), aLm = new pP(aLl.tU, (function(pR) {
		var aLI = new p9,
			a1h = (aLI.pC(L(267)), aC.data.canvas);
		a1h.style.width = "100%", aLI.pN({
			e: a1h
		}), aLI.pN(new r1([new v(L(268), function() {
			s.t(20)
		}).button])), pR.push(aLI)
	}(pR = []), function(pR) {
		var aLI = new p9;
		aLI.pC(L(241)), aLI.pN(new qL({
			dx: -1,
			value: aC.data.playerCount
		}, 1, 0, function(e) {
			var playerCount = bJ.p4(Math.floor(e.target.value), 1, 512);
			e.target.value = aC.data.playerCount = playerCount, 1 === aC.data.gameMode && (e = b8.pf.a1R(aC.data.teamPlayerCount, 0), aC.a3K.a3O(), b8.pf.a1R(aC.data.teamPlayerCount, 0) !== e) && aNb()
		})), pR.push(aLI)
	}(pR), function(pR) {
		var aLI = new p9;
		aLI.pC(L(269)), aLI.pK(new tJ({
			tN: ["Battle Royale", "Teams"],
			value: aC.data.gameMode
		}, function(dx) {
			aC.data.gameMode !== dx && (aC.data.gameMode = dx, aNb())
		})), pR.push(aLI)
	}(pR), pR.push(aNQ()), pR.push(aNR()), pR.push(aNS()), function(pR) {
		var aLI = new p9,
			g = (aLI.pC(L(271)), [L(272), L(273), L(238)]);
		aLI.pI(g[aC.data.playerNamesType]), aLI.pN(new r1([new v(L(268), function() {
			s.t(23)
		}).button])), pR.push(aLI)
	}(pR), function(pR) {
		var aLI = new p9,
			g = (aLI.pC(L(234)), [L(236), L(237) + ": " + aC.data.aIncomeValue, L(238)]);
		aLI.pI(g[aC.data.aIncomeType]), aLI.pN(new r1([new v(L(268), function() {
			s.t(22)
		}).button])), pR.push(aLI)
	}(pR), function(pR) {
		var aLI = new p9,
			g = (aLI.pC(L(274)), [L(236), L(237) + ": " + aC.data.tIncomeValue, L(238)]);
		aLI.pI(g[aC.data.tIncomeType]), aLI.pN(new r1([new v(L(268), function() {
			s.t(26)
		}).button])), pR.push(aLI)
	}(pR), function(pR) {
		var aLI = new p9,
			g = (aLI.pC(L(275)), [L(236), L(237) + ": " + aC.data.iIncomeValue, L(238)]);
		aLI.pI(g[aC.data.iIncomeType]), aLI.pN(new r1([new v(L(268), function() {
			s.t(27)
		}).button])), pR.push(aLI)
	}(pR), function(pR) {
		var aLI = new p9,
			g = (aLI.pC(L(276)), [L(236), L(237) + ": " + aC.data.sResourcesValue, L(238)]);
		aLI.pI(g[aC.data.sResourcesType]), aLI.pN(new r1([new v(L(268), function() {
			s.t(28)
		}).button])), pR.push(aLI)
	}(pR), function(pR) {
		var aLI = new p9;
		aLI.pC(L(277)), aLI.pN(new r1([new v(L(278), function() {
			s.w(), aC.a3K.a3m(), s.x.aG3[0] = 0, s.t(19)
		}).button])), aLI.pN(new r1([new v(L(279), function() {
			bk.aFs()
		}).button])), aLI.pN(new r1([new v(L(280), function() {
			return bk.aFu(), !0
		}).button])), pR.push(aLI)
	}(pR), pR))
}

function aKu() {
	var aLl, aLm, aLn, pR;

	function aLo() {
		aLq(), 2 !== aC.data.iIncomeType && (aC.data.iIncomeData = null), s.aKy()[19] = null, s.a0A()
	}

	function aLq() {
		2 === aC.data.iIncomeType && b8.pf.a1X(aLn.tv(), aC.data.iIncomeData, 255)
	}
	this.show = function() {
		aLl.show(), this.resize()
	}, this.qn = function() {
		aLl.qn()
	}, this.resize = function() {
		aLl.resize(), aLm.resize()
	}, this.a0u = function(et) {
		2 === et && aLl.tV[0].po()
	}, aLl = new tO(L(275), [new v("⬅️ " + L(35), aLo)]), aLm = new pP(aLl.tU, (function(pR) {
		var aLI = new p9;
		aLI.pC(L(235)), aLI.pK(new tJ({
			tN: [L(236), L(237), L(238)],
			value: aC.data.iIncomeType
		}, function(dx) {
			aLq(), 2 !== dx || aC.data.iIncomeData || (aC.data.iIncomeData = new Uint8Array(aC.eV), aC.data.iIncomeData.fill(32)), aC.data.iIncomeType = dx, s.t(27)
		})), pR.push(aLI)
	}(pR = []), function(pR) {
		var aLI;
		1 === aC.data.iIncomeType && ((aLI = new p9).pC("Value"), aLI.pN(new qL({
			dx: -1,
			value: aC.data.iIncomeValue
		}, 1, 0, function(e) {
			var value = bJ.p4(Math.floor(e.target.value), 0, 255);
			e.target.value = aC.data.iIncomeValue = value
		})), pR.push(aLI))
	}(pR), function(pR) {
		var aLI;
		2 === aC.data.iIncomeType && ((aLI = new p9).pC("Data"), (aLn = new tm(0, 1, 0, 1)).tt(b8.zR.a33(aC.data.iIncomeData, 4)), aLI.pN(aLn), pR.push(aLI))
	}(pR), pR))
}

function aKc() {
	var aNd, aNe, aMl, qK, aNf;
	this.aEj = new ru, aMl = new q8([.45, .27], [.5, .5], 2 / 3), aNe = [new v("⚔️<br>" + L(281), function() {
			aNg(0)
		}, b9.n7), new v("🗡️<br>" + L(265), function() {
			aNg(1)
		}, b9.nP), new v("🔑<br>" + L(282), function() {
			aNg(2)
		}, b9.nf), new v("☰<br>" + L(283), function() {
			aNg(3)
		}, b9.mr), new v("", function() {
			s.t(12)
		}, b9.ma, !1),
		new v("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new v("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], qK = new qL(bh.km.data[122]);
	for (var aA = 0; aA < aNe.length; aA++) aNe[aA].button.style.position = "absolute";

	function aNg(dx) {
		z.a0.setState(10), aa.sD() || aa.aEa(), 0 === dx ? s.x.a3d() : 1 === dx ? (b7.aGD.vC(bh.km.data[156].value, 1) || aC.a3K.a3m(), s.t(19)) : 2 === dx ? 0 !== z.id || bh.km.data[140].value ? s.t(8, s.rl, new rm(16)) : s.x.aNh(s.rl, 16) : 3 ===
			dx && s.t(1)
	}
	qK.e.style.position = "absolute", qK.e.style.textAlign = "center", qK.e.placeholder = L(284), this.show = function() {
		aZ.setState(0), z.a0.setState(12), this.aEj.show(), aNe[4].pr(b8.color.a1o(bh.km.data[121].value)), this.resize(), document.body.appendChild(qK.e);
		for (var aA = 0; aA < aNe.length; aA++) document.body.appendChild(aNe[aA].button);
		1 !== z.id || z.dk < 5 || (aNf && bd.e7 > aNf + 144e5 ? z.uF.setState(14) : aNf = bd.e7)
	}, this.qn = function() {
		this.aEj.qn(), document.body.removeChild(qK.e);
		for (var aA = 0; aA < aNe.length; aA++) document.body.removeChild(aNe[aA].button)
	}, this.resize = function() {
		this.aEj.resize(), this.aEj.resize(), aMl.resize();
		var gap = .5 * ba.gap,
			si = 10 / 99 * .84 * aMl.i,
			aNk = .16 * aMl.j,
			a7a = .19 * aMl.i,
			ef = aMl.ef + a7a,
			si = aMl.eh + si + 3 * gap,
			i = .5 * (aMl.i - gap) - a7a,
			a7a = aMl.i - 2 * a7a - aNk - gap,
			a7a = (b8.pW.sC(qK.e, ef, si, a7a, aNk), b8.pW.sC(aNe[4].button, ef + a7a + gap, si, aNk, aNk), .5 * (aMl.eh + aMl.j - (si += aNk + gap) - gap));
		b8.pW.sC(aNe[0].button, ef, si, i, a7a), b8.pW.sC(aNe[1].button, ef + i + gap, si, i, a7a), b8.pW.sC(aNe[2].button, ef, si + a7a + gap, i, a7a), b8.pW.sC(aNe[3].button, ef + i + gap, si + a7a + gap, i, a7a);
		b8.pW.sC(aNe[5].button, ef, si + a7a * 2 + gap * 2, i * 2 + gap, a7a / 3);
		b8.pW.sC(aNe[6].button, ef, si + a7a * 2.33 + gap * 3, i * 2 + gap, a7a / 3);
		for (var aA = 0; aA < aNe.length; aA++) aNe[aA].button.style.font = b8.pW.rL(0, b8.pW.a25(.065 * aMl.j)), b8.pW.ph(aNe[aA].button, 5);
		qK.e.style.font = b8.pW.rL(0, b8.pW.a25(.08 * aMl.j)), b8.pW.ph(qK.e, 5)
	}, this.td = function() {
		if (aZ.aEE(), aS.td(), aN.td(), bW.td(), aa.sD()) {
			if (__fx.settings.displayWinCounter) {
				const size = Math.floor(aMl.i * 0.03);
				te.font = b8.pW.rL(1, size);
				te.fillStyle = "#ffffff";
				const text = "Win count: " + __fx.wins.count;
				const textLength = te.measureText(text).width;
				te.textAlign = "left";
				te.textBaseline = "middle";
				te.fillText(text, te.canvas.width - textLength - size / 2, size);
			};
			te.imageSmoothingEnabled = !1;
			var et = aa.aEH("territorial.io"),
				mG = .84 * aMl.i / et.width;
			te.setTransform(mG, 0, 0, mG, aMl.ef + .08 * aMl.i, aMl.eh), aNd = aNd || b8.a18.a2g(et, b8.a18.a2m, [0, 0, 0]);
			for (var ef = -1; ef <= 1; ef += 2)
				for (var eh = -1; eh <= 1; eh += 2) te.drawImage(aNd, ef, eh);
			te.drawImage(et, 0, 0), te.imageSmoothingEnabled = !0;
			var he = aa.aEH("logo"),
				aNm = .6666 * mG * et.height / he.height,
				mH = .5 * h.i,
				mI = aMl.eh + .5 * mG * et.height - .5 * aNm * he.height;
			te.setTransform(aNm, 0, 0, aNm, mH - .6 * mG * et.width, mI), te.drawImage(he, 0, 0), te.setTransform(aNm, 0, 0, aNm, mH + .6 * mG * et.width - aNm * he.width, mI), te.drawImage(he, 0, 0), te.setTransform(1, 0, 0, 1, 0, 0), te
				.imageSmoothingEnabled = !0
		}
	}
}

function aKj() {
	var aKz, aNn, aNo, tP;

	function aNp(aA) {
		s.t(8, s.rl, new rm(21, {
			s5: aA,
			s6: 0,
			s7: 10
		}))
	}
	this.show = function() {
		aKz.show(), this.resize()
	}, this.qn = function() {
		aKz.qn()
	}, this.resize = function() {
		aKz.resize(), aNn.resize()
	}, this.a0u = function(et) {
		2 === et && aKz.tV[0].po()
	}, aNo = [new v(L(285), function() {
		aNp(1)
	}, 0, 0, 1), new v(L(286), function() {
		aNp(2)
	}, 0, 0, 1), new v(L(287), function() {
		aNp(3)
	}, 0, 0, 1), new v(L(288), function() {
		aNp(0)
	}, 0, 0, 1), new v(L(289), function() {
		aNp(9)
	}, 0, 0, 1), new v(L(290), function() {
		aNp(10)
	}, 0, 0, 1)], tP = [new v("⬅️ " + L(35), function() {
		s.a0A()
	})], aKz = new tO(L(291), tP), aNn = new q5(aNo, aKz.tU)
}

function aAz(title, pJ, aNq) {
	var aKz, aMz;
	this.show = function() {
		aKz.show(), this.resize()
	}, this.qn = function() {
		aKz.qn()
	}, this.resize = function() {
		aKz.resize(), aMz.resize()
	}, this.a0u = function(et) {
		2 === et && aKz.tV[0].po()
	}, aNq = aNq || [new v("⬅️ " + L(35), function() {
		s.a0A()
	}, b9.nJ)], aKz = new tO(title, aNq), aMz = new r0(aKz.tU, pJ), b8.pW.textAlign(aKz.tU.style, 1)
}

function aNH(data) {
	var aKz, aNr, et, rb;

	function aNs(hh) {
		var eY = data.data.length;
		if (eY) {
			for (var s6, max = min = parseInt(data.data[0][0]), aA = 1; aA < eY; aA++) var aCi = parseInt(data.data[aA][0]),
				min = Math.min(aCi, min),
				max = Math.max(aCi, max);
			s6 = hh < 0 ? min + hh : max + 1, s.t(8, s.aDF().aKX, new rm(21, {
				s5: data.s5,
				s6: s6,
				s7: s6 + Math.abs(hh)
			}))
		}
	}
	this.show = function() {
			aKz.show(), this.resize()
		}, this.qn = function() {
			aKz.qn()
		}, this.resize = function() {
			aKz.resize(), aNr.resize()
		}, this.a0u = function(et) {
			2 === et && aKz.tV[0].po()
		}, et = data.data.length ? 0 : 1, et = [new v("⬅️ " + L(35), function() {
			s.a0A()
		}), new v(L(292), function() {
			aNs(-10)
		}, et, 0, 1), new v(L(293), function() {
			aNs(10)
		}, et, 0, 1), new v(L(243), function() {
			s.t(11, 10, new aNt({
				s5: data.s5
			}))
		})], rb = [L(294), L(295), L(296), L(297), L(298), L(299), L(300), L(301), L(302), L(303), L(290)], aKz = new tO(rb[data.s5], et),
		function() {
			var aA, eb = {
					rV: []
				},
				rV = eb.rV,
				aNv = data.data,
				eY = aNv.length;
			eY && 0 === aNv[0][0] && 0 <= (dx = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5][data.s5]) && (s.x.s8[dx] = aNv[0][1]);
			var mG = [.1, .001, .01, 1, 100, 1, 1, .1, 100, .01, .01][data.s5],
				a2q = [1, 3, 2, 0, 0, 0, 0, 1, 0, 2, 2][data.s5],
				dx = [
					[L(304), L(305) + " ↗", L(306)],
					[L(304), L(307), L(308), L(309) + " ↗"],
					[L(304), L(305) + " ↗", L(308)],
					[L(304), L(305) + " ↗", L(308)],
					[L(310), L(311), L(312) + " ↗", L(313) + " ↗", L(117)],
					[L(310), L(311), L(314) + " ↗", L(315) + " ↗", L(316)],
					[L(310), L(311), L(317) + " ↗", L(318) + " ↗", L(319)],
					[L(310), L(311), L(314) + " ↗", L(315) + " ↗", L(320)],
					[L(310), L(311), L(312) + " ↗", L(313) + " ↗", L(117)],
					[L(304), L(305) + " ↗", L(308)],
					[L(304), L(305) + " ↗", L(321)]
				];
			if (eb.rb = dx[data.s5], eb.rg = [
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
					[25, 40, 35]
				][data.s5], 0 === data.s5 || 2 === data.s5 || 3 === data.s5 || 9 === data.s5 || 10 === data.s5)
				for (aA = 0; aA < eY; aA++) rV.push([{
					f0: aNv[aA][0] + 1 + ".",
					di: 0
				}, {
					f0: aNv[aA][1],
					di: 1,
					rj: aNv[aA][4],
					rk: aNv[aA][3]
				}, {
					f0: (mG * aNv[aA][2]).toFixed(a2q),
					di: 0
				}]);
			else if (1 === data.s5)
				for (aA = 0; aA < eY; aA++) rV.push([{
					f0: aNv[aA][0] + 1 + ".",
					di: 0
				}, {
					f0: aNv[aA][1],
					di: 0
				}, {
					f0: (mG * aNv[aA][2]).toFixed(a2q),
					di: 0
				}, {
					f0: aNv[aA][3],
					di: 1,
					rj: aNv[aA][5],
					rk: aNv[aA][4]
				}]);
			else if (4 === data.s5 || 5 === data.s5 || 6 === data.s5 || 7 === data.s5 || 8 === data.s5)
				for (aA = 0; aA < eY; aA++) {
					var aNy = aNv[aA][5];
					4 === data.s5 || 8 === data.s5 ? "100%" === (aNy = (aNy % 64 * 100 / (aNy >> 6)).toFixed(0) + "%") && (4 === data.s5 ? aNy += " (" + L(322) + ")" : aNy += " (" + L(323) + ")") : 5 === data.s5 ? 32768 <= aNy && (aNy = -(aNy -
						32768)) : aNy = (mG * aNy).toFixed(a2q), rV.push([{
						f0: "" + aNv[aA][0],
						di: 0
					}, {
						f0: "" + aNv[aA][6],
						di: 0
					}, {
						f0: aNv[aA][7],
						di: 1,
						rj: aNv[aA][1],
						rk: aNv[aA][2]
					}, {
						f0: aNv[aA][8],
						di: 1,
						rj: aNv[aA][3],
						rk: aNv[aA][4]
					}, {
						f0: "" + aNy,
						di: 0
					}])
				}
			aNr = new rU(aKz.tU, eb)
		}()
}

function aNt(a2i) {
	var aKz, aL0, pR;
	this.show = function() {
		aKz.show(), this.resize()
	}, this.qn = function() {
		aKz.qn()
	}, this.resize = function() {
		aKz.resize(), aL0.resize()
	}, this.a0u = function(et) {
		2 === et && aKz.tV[0].po()
	}, aKz = new tO(L(324), [new v("⬅️ " + L(35), function() {
		s.aKx(10)
	})]), aL0 = new pP(aKz.tU, ((pR = []).push(function() {
		var aLR, aLI = new p9,
			aMj = new qL(bh.km.data[132], 1, function() {
				aLR.button.click()
			}),
			aMk = new qL(bh.km.data[131], 1, function() {
				aMj.e.focus()
			});
		aLI.pC(L(248)), aLI.pN(aMk), aMk.e.style.marginBottom = "0.8em", aLI.pC(L(249)), aLI.pN(aMj);
		return aLR = new v(L(247), function() {
			s6 = Math.floor(aMk.e.value), s7 = Math.floor(aMj.e.value);
			var s7, s6 = {
				a1P: Math.min(s6, s7),
				aK8: Math.max(s6, s7)
			};
			s.t(8, s.aCF(10).aKX, new rm(21, {
				s5: a2i.s5,
				s6: s6.a1P,
				s7: s6.aK8
			}))
		}, 0, 0, 1), aLI.pN(new r1([aLR.button])), aLI
	}()), pR.push(function() {
		var aLR, aLI = new p9,
			aMj = new qL(bh.km.data[134], 1, function() {
				aLR.button.click()
			}),
			aMk = new qL(bh.km.data[133], 0, function() {
				aMj.e.focus()
			});
		return aLI.pC(1 === a2i.s5 ? L(325) : L(326)), aLI.pN(aMk), aMk.e.style.marginBottom = "0.8em", aLI.pC(L(327)), aLI.pN(aMj), aLR = new v(L(247), function() {
			var aN9 = aMk.e.value.slice(0, 20),
				aNA = Math.abs(Math.floor(aMj.e.value));
			s.t(8, s.aCF(10).aKX, new rm(22, {
				s5: a2i.s5,
				aN9: aN9,
				aNA: aNA
			}))
		}, 0, 0, 1), aLI.pN(new r1([aLR.button])), aLI
	}()), pR.push(function() {
		var aLR, aLI = new p9,
			aMj = new qL(bh.km.data[152], 1, function() {
				aLR.button.click()
			}),
			aMk = new qL(bh.km.data[151], 0, function() {
				aMj.e.focus()
			});
		return aLI.pC(L(328)), aLI.pN(aMk), aMk.e.style.marginBottom = "0.8em", aLI.pC(L(327)), aLI.pN(aMj), aLR = new v(L(247), function() {
			var aN9 = aMk.e.value.slice(0, 5),
				aNA = Math.abs(Math.floor(aMj.e.value));
			s.t(8, s.aCF(10).aKX, new rm(28, {
				s5: a2i.s5,
				aN9: aN9,
				aNA: aNA
			}))
		}, 0, 0, 1), aLI.pN(new r1([aLR.button])), aLI
	}()), pR))
}

function aKw() {
	var aO2, sH, aO5, sG, sJ, aO3 = [new Array(4), [], new Array(2), new Array(2)],
		aO4 = new Array(4),
		aO6 = new Array(2),
		aO7 = [L(59), L(289), L(329), L(330)];

	function aCT() {
		var a5c = aO2.sU.qK.e.value.trim().slice(0, 127);
		a5c.length < 1 || (aO2.sU.qK.e.value = "", bl.aB2.yq(a5c))
	}

	function aOA(aOC) {
		bl.x.qZ[3] = 1 - bl.x.qZ[3], aOB(3, 1, bl.x.qZ[3]), aOC && ay.aCe.aCf(4), bl.x.qZ[3] && bh.qy.qz(158, bl.x.qZ[0])
	}

	function aO8(er, es) {
		bl.x.qZ[er] !== es && (0 === er && bl.x.qZ[3] && aOA(0), aOB(er, bl.x.qZ[er], 0), aOB(er, es, 1), bl.x.qZ[er] = es, 0 === er ? (ay.aCe.aCf(2, es), bl.x.qZ[2] ? (aO2.sV.lP(), aO2.sU.qW(1)) : aO2.sU.qW(0), s.aDF().aCI(), s.aDF().aCH()) : 2 ===
			er && (0 === es ? (ay.aCe.aCf(0), aO2.sU.lP(), aO2.sd()) : (ay.aCe.aCf(1), aO2.sV.lP(), aO2.se())))
	}

	function aOB(er, es, color) {
		aO2.sX[er].q6[es].pr(color ? b9.n3 : b9.nm)
	}

	function aOF(aBZ) {
		return aBZ < 7 ? aBZ + 2 + " " + L(337) : 7 === aBZ || 10 === aBZ ? L(289) + " (Full-Sending: " + L(7 === aBZ ? 338 : 339) + ")" : 8 === aBZ ? "1v1" : L(340)
	}

	function aOG(f0) {
		var a5f = bJ.dj(f0, 60),
			f0 = f0 % 60;
		return (a5f < 10 ? "0" : "") + a5f + ":" + (f0 < 10 ? "0" : "") + f0
	}
	this.aCq = function() {
		return aO2.sU
	}, this.aB2 = function(rj) {
		aO8(2, 0);
		var pD = aO2.sU.qK.e.value,
			rj = "@" + rj + " ";
		pD.length && !b8.zR.a2C(pD, " ") && (rj = " " + rj), aO2.sU.qK.e.value = pD += rj, aO2.sU.qK.e.focus()
	}, this.aCG = function() {
		aO2.sV.lP()
	}, this.aCI = function() {
		var aOE = bl.x.qZ[0],
			aOE = bl.x.qb[aOE];
		bQ.a6(aOE.eE, aOE.mapSeed), sH.q6[0].button.textContent = L(267) + ": " + bQ.vH.vI[aOE.eE].name, sH.q6[1].button.textContent = L(269, 0, "Mode") + ": " + aOF(aOE.aBZ), sH.q6[2].button.textContent = L(334) + ": " + bQ.vH.vI[aOE.aDG].name,
			sH.q6[3].button.textContent = L(335, 0, "Next Mode") + ": " + aOF(aOE.aDH), sH.q6[4].button.textContent = L(336) + ": " + aOG(aOE.aCK), sH.resize()
	}, this.aCH = function() {
		var aOE = bl.x.qZ[0],
			qa = bl.x.qb[aOE];
		aO2.sb(qa.sc);
		for (var aA = 0; aA < bl.sr.ss.length; aA++) aO3[0][aA].qV.textContent = "" + bl.sr.ss[aA].length;
		var sr = bl.sr.ss[aOE],
			aOH = sr.length,
			aOI = bl.sr.st[aOE];
		aO3[2][1].qV.textContent = "" + aOH, aO3[3][1].qV.textContent = "" + aOI, sH.q6[4].button.textContent = L(336) + ": " + aOG(qa.aCK);
		for (aA = 0; aA < 4; aA++) {
			var aOJ = bl.x.qb[aA];
			aO4[aA] ? 0 === aOJ.sc && (aO4[aA].qV.textContent = bQ.vH.vI[aOJ.eE].name) : aO4[aA] = new qU(bQ.vH.vI[aOJ.eE].name, sG.q6[aA].button, 1, 1), b8.zR.startsWith(aO7[aA], "🏆 ") ? aOJ.aBf || (aO7[aA] = aO7[aA].substring(3), sG.q6[aA]
				.button.textContent = aO7[aA], sG.q6[aA].button.appendChild(aO3[0][aA].qV), sG.q6[aA].button.appendChild(aO4[aA].qV)) : aOJ.aBf && (aO7[aA] = "🏆 " + aO7[aA], sG.q6[aA].button.textContent = aO7[aA], sG.q6[aA].button
				.appendChild(aO3[0][aA].qV), sG.q6[aA].button.appendChild(aO4[aA].qV))
		}
		var qa = "",
			aOL = "";
		0 === aOE && (qa = bl.qg.aBu(sr, 0, aOH), aOL = bl.qg.aBu(sr, 0, aOI)), aO5[0].qV.textContent = qa, aO5[1].qV.textContent = aOL, aO6[1].qV.textContent = "MP: " + bl.x.aC8[0] + "   SP: " + bl.x.aC8[1] + "   Lobby: " + b8.pf.a1c(bl.sr.ss)
	}, this.aCM = function() {
		aO2.sU.lP()
	}, this.show = function() {
		aO2.show(), this.resize(), bl.message.show()
	}, this.qn = function() {
		aO2.qn(), bl.tD.qn(), bl.sp.qn(), bl.message.qn()
	}, this.resize = function() {
		aO2.resize(1 - bl.x.qZ[2]), bl.message.resize()
	}, this.a0u = function(et) {
		2 === et ? bl.x.qZ[3] ? aOA(1) : aO2.sX[3].q6[0].po() : et < 2 && aOA(1)
	}, sG = new r4([new v(aO7[0], function() {
		return aO8(0, 0), 2
	}), new v(aO7[1], function() {
		return aO8(0, 1), 2
	}), new v(aO7[2], function() {
		return aO8(0, 2), 2
	}), new v(aO7[3], function() {
		return aO8(0, 3), 2
	})], b9.nm), sH = new r4([new v("", 0, 2), new v("", 0, 2), new v("", 0, 2), new v("", 0, 2), new v("", 0, 2)], b9.nn, 1);
	var aO9 = new r4([new v(L(331), function() {
		return aO8(2, 0), 2
	}), new v(L(113), function() {
		return aO8(2, 1), 2
	})], b9.nm);
	sJ = new r4([new v(L(332), (__fx.customLobby.setLeaveFunction(() => {
			s.w(), bl.t7(), ay.x.a0C(3240), __fx.customLobby.setActive(false), s.t(5, 5)
		}),
		function() {
			s.w(), bl.t7(), ay.x.a0C(3240), __fx.customLobby.setActive(false), s.t(5, 5)
		})), new v(L(333), function() {
		return aOA(1), 2
	})], b9.nm), aO2 = new sF(sG, sH, aO9, sJ, aCT, bl.tD.aCz);
	for (var aA = 0; aA < 4; aA++) aO3[0][aA] = new qU("0", sG.q6[aA].button);
	aO3[2][1] = new qU("0", aO9.q6[1].button), aO3[3][1] = new qU("0", sJ.q6[1].button), aO5 = [new qU("", aO9.q6[1].button, 1, 1), new qU("", sJ.q6[1].button, 1, 1)], aOB(0, bl.x.qZ[0], 1), aOB(2, bl.x.qZ[2], 1), (aO6 = [new qU(L(241), aO2.sf(), 1,
		0), new qU("", aO2.sf(), 1, 1)])[0].qV.style.fontSize = "0.4em", aO6[1].qV.style.fontSize = "0.4em"
}

function aKd() {
	var aKz, aL0, pR;
	this.show = function() {
		aKz.show(), this.resize()
	}, this.qn = function() {
		aKz.qn()
	}, this.resize = function() {
		aKz.resize(), aL0.resize()
	}, this.a0u = function(et) {
		2 === et && aKz.tV[0].po()
	}, aKz = new tO(L(341), [new v("⬅️ " + L(35), function() {
		s.t(7, s.aCF(7).aKX)
	}), new v(L(192), function() {
		bh.qy.qz(105, bE.ro.v1(aL0.pT[0].pA[0].e.value, 5)), bh.qy.qz(106, bE.ro.v1(aL0.pT[1].pA[0].e.value, 8)), s.t(8, s.aCF(7).aKX, new rm(18))
	})]), aL0 = new pP(aKz.tU, ((pR = []).push(function() {
		var aLI = new p9;
		return aLI.pC(L(173)), aLI.pN(new qL({
			value: "",
			dx: -1
		})), aLI
	}()), pR.push(function() {
		var aLI = new p9,
			aLS = (aLI.pC(L(175)), new qL({
				value: "",
				dx: -1
			}));
		return aLS.e.type = "password", aLI.pN(aLS), aLI.pN(new r1([new v(L(176), function(e) {
			return e.textContent === L(176) ? (e.textContent = L(177), aLS.e.type = "text") : (e.textContent = L(176), aLS.e.type = "password"), !0
		}).button])), aLI
	}()), pR))
}

function aKk() {
	var aKz, aNn, aNo, tP;

	function aNp(aA) {
		s.t(8, s.rl, new rm(21, {
			s5: aA,
			s6: 0,
			s7: 10
		}))
	}
	this.show = function() {
		aKz.show(), this.resize()
	}, this.qn = function() {
		aKz.qn()
	}, this.resize = function() {
		aKz.resize(), aNn.resize()
	}, this.a0u = function(et) {
		2 === et && aKz.tV[0].po()
	}, aNo = [new v(L(299), function() {
		aNp(5)
	}, 0, 0, 1), new v(L(300), function() {
		aNp(6)
	}, 0, 0, 1), new v(L(301), function() {
		aNp(7)
	}, 0, 0, 1)], tP = [new v("⬅️ " + L(35), function() {
		s.a0A()
	})], aKz = new tO(L(342), tP), aNn = new q5(aNo, aKz.tU)
}

function aKT() {
	this.km = {}, this.s8 = new Array(6), this.aKi = null, this.aKf = null, this.rS = 0, this.aG3 = [0], this.y = function() {
		s.t(5, 5)
	}, this.a3d = function() {
		s.w(), aY.dU()
	}, __fx.customLobby.setJoinFunction(() => {
		s.w(), aY.dU()
	}), this.aAb = function() {
		s.t(0 === aZ.a00() ? 5 : 0)
	}, this.aMi = function() {
		if (1 === bh.km.data[130].value) s.t(8, s.aDF().aKX, new rm(24, {
			aME: bh.km.data[125].value,
			s6: bh.km.data[128].value,
			s7: bh.km.data[129].value
		}));
		else {
			for (var g = (g = bh.km.data[126].value.split(",")).slice(0, 10), aA = 0; aA < g.length; aA++) g[aA] = g[aA].trim().slice(0, 7).toUpperCase();
			1 === g.length && 0 === g[0].length && (g = []), s.t(8, s.aDF().aKX, new rm(23, {
				aME: bh.km.data[125].value,
				zU: g
			}))
		}
	}, this.aNh = function(aKX, target) {
		s.t(4, aKX, new u("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: <a href='" + bI.aON +
			"' target='_blank'>" + bI.aON + "</a>", !1, [new v("⬅️ " + L(35), function() {
				s.t(aKX)
			}), new v("✅ Accept", function() {
				bh.qy.qz(140, 1), 0 === target ? s.t(2, aKX) : s.t(8, aKX, new rm(target))
			})]))
	}, this.aOO = function() {
		for (var aA = 0; aA < 6; aA++) this.s8[aA] = bE.us.uw(bF.oX(5));
		this.s8[1] = "[" + this.s8[1] + "]", 5 === s.rl && (s.aDF().aEj.qz(this.s8), s.aDF().resize())
	}
}

function aKn() {
	var aLl, aLm, aOP, pR;

	function aLo() {
		b4.t7(), s.aKy()[19] = null, s.a0A()
	}

	function aOW() {
		aOZ(), aOX()
	}

	function aOZ() {
		aOP.pB.lastChild && aOP.pB.removeChild(aOP.pB.lastChild)
	}

	function aOX() {
		var aOa = bQ.a3j(aC.data);
		aC.data.canvas = bQ.aIc(aOa, aC.data.mapSeed).vR, aOY()
	}

	function aOY() {
		var a1h = aC.data.canvas;
		a1h.style.width = "100%", aOP.pB.appendChild(a1h)
	}
	this.aFn = function(a1h) {
		aC.data.canvas && aOZ(), aC.data.canvas = a1h, aOY()
	}, this.show = function() {
		aLl.show(), this.resize()
	}, this.qn = function() {
		aLl.qn()
	}, this.resize = function() {
		aLl.resize(), aLm.resize()
	}, this.a0u = function(et) {
		2 === et && aLl.tV[0].po()
	}, aLl = new tO(L(267), [new v("⬅️ " + L(35), aLo)]), 2 === aC.data.mapType && b4.dU(), aLm = new pP(aLl.tU, (function(pR) {
		var aLI = new p9;
		aLI.pC(L(235)), aLI.pK(new tJ({
			tN: [L(343), L(344), L(345)],
			value: aC.data.mapType
		}, function(dx) {
			2 === (aC.data.mapType = dx) ? (b4.dU(), aC.data.canvas = null) : (aC.data.passableWater = aC.data.passableMountains = 1, b4.t7()), s.t(20)
		})), 2 <= aC.data.mapType && (aLI.pN(new rB), aLI.pN(new qv({
			value: aC.data.passableWater
		}, L(346), function(value) {
			aC.data.passableWater = value
		})), aLI.pN(new qv({
			value: aC.data.passableMountains
		}, L(347), function(value) {
			aC.data.passableMountains = value
		})));
		pR.push(aLI)
	}(pR = []), function(pR) {
		if (0 === aC.data.mapType) {
			for (var aLI = new p9, tN = (aLI.pC(L(267)), []), aA = 0; aA < bQ.vH.aJU.length; aA++) tN.push(bQ.vH.vI[bQ.vH.aJU[aA]].name);
			aLI.pK(new tJ({
				tN: tN,
				value: aC.data.mapProceduralIndex
			}, function(dx) {
				aC.data.mapProceduralIndex = dx, aOW()
			})), pR.push(aLI)
		}
	}(pR), function(pR) {
		if (1 === aC.data.mapType) {
			for (var aLI = new p9, tN = (aLI.pC(L(267)), []), aA = 0; aA < bQ.vH.aJV.length; aA++) tN.push(bQ.vH.vI[bQ.vH.aJV[aA]].name);
			aLI.pK(new tJ({
				tN: tN,
				value: aC.data.mapRealisticIndex
			}, function(dx) {
				aC.data.mapRealisticIndex = dx, aOW()
			})), pR.push(aLI)
		}
	}(pR), function(pR) {
		var aLI;
		2 === aC.data.mapType && ((aLI = new p9).pC(L(267)), aLI.pN(new r1([new v(L(348), function() {
			return b4.aFg(), !0
		}).button])), pR.push(aLI))
	}(pR), function(pR) {
		(aOP = new p9).pC(L(349)), 2 !== aC.data.mapType ? aOX() : aC.data.canvas && aOY();
		pR.push(aOP)
	}(pR), function(pR) {
		var aLI, qK, aLR;
		0 === aC.data.mapType && ((aLI = new p9).pC("Seed"), qK = new qL({
			dx: -1,
			value: aC.data.mapSeed
		}, 1, 0, function(e) {
			e = Math.abs(Math.floor(e.target.value)) % 16384;
			aC.data.mapSeed !== e && (aC.data.mapSeed = e, aOW())
		}), aLR = new v(L(260), function(e) {
			var aIX = Math.floor(16384 * Math.random());
			if (aC.data.mapSeed !== aIX) return qK.e.value = aC.data.mapSeed = aIX, aOW(), !0
		}), aLI.pN(qK), aLI.pN(new r1([aLR.button])), pR.push(aLI))
	}(pR), function(pR) {
		var aLI, qK;
		2 === aC.data.mapType && ((aLI = new p9).pC(L(350)), qK = new qL({
			dx: -1,
			value: aC.data.mapName
		}, 0, 0, function(e) {
			aC.data.mapName = e.target.value = e.target.value.slice(0, 20)
		}), aLI.pN(qK), pR.push(aLI))
	}(pR), pR))
}

function u(title, pJ, aOb, aNq) {
	var aKz, aMz;
	this.show = function() {
		aKz.show(), this.resize()
	}, this.qn = function() {
		aKz.qn()
	}, this.resize = function() {
		aKz.resize(), aMz.resize()
	}, this.a0u = function(et) {
		2 === et && aKz.tV[0].po()
	}, aNq = aNq || [new v("⬅️ " + L(35), function() {
		s.a0A()
	})], aKz = new tO(title, aNq), aMz = new r0(aKz.tU, pJ), aOb && b8.pW.textAlign(aKz.tU.style, 1)
}

function aKq() {
	var aLl, aLm, aLn, pR;

	function aLo() {
		aLq(), 2 === aC.data.playerNamesType && 1 === b8.pf.a1L(aC.data.playerNamesData).length && (aC.data.playerNamesType = 0), 2 !== aC.data.playerNamesType && (aC.data.playerNamesData = null), s.aKy()[19] = null, s.a0A()
	}

	function aLq() {
		2 === aC.data.playerNamesType && b8.pf.a1Z(aLn.tv(), aC.data.playerNamesData, 20)
	}
	this.show = function() {
		aLl.show(), this.resize()
	}, this.qn = function() {
		aLl.qn()
	}, this.resize = function() {
		aLl.resize(), aLm.resize()
	}, this.a0u = function(et) {
		2 === et && aLl.tV[0].po()
	}, aLl = new tO(L(271), [new v("⬅️ " + L(35), aLo)]), aLm = new pP(aLl.tU, (function(pR) {
		var aLI = new p9;
		aLI.pC(L(235)), aLI.pK(new tJ({
			tN: [L(272), L(273), L(238)],
			value: aC.data.playerNamesType
		}, function(dx) {
			aLq(), aC.data.playerNamesType = dx, s.t(23)
		})), aLI.pN(new rB), aLI.pN(new qv({
			value: aC.data.selectableName
		}, L(351), function(value) {
			aC.data.selectableName = value
		})), pR.push(aLI)
	}(pR = []), function(pR) {
		var aLI;
		2 === aC.data.playerNamesType && ((aLI = new p9).pC("Data"), aLn = new tm(0, 1, 0, 1), aC.data.playerNamesData && aC.data.playerNamesData.length === aC.eV || (aC.data.playerNamesData = new Array(aC.eV), aC.data.playerNamesData
			.fill("")), aLn.tt(b8.zR.a33(aC.data.playerNamesData, 1, '"')), aLI.pN(aLn), pR.push(aLI))
	}(pR), pR))
}

function aKb() {
	var aLl, tr;

	function aOc() {
		s.w();
		var pD = b7.aOg(tr.tv());
		(aC.ym && 0 < pD.length && pD === b7.om.a3Z || b7.aGD.vC(pD)) && b7.aOh()
	}
	this.show = function(aOd) {
		this.aOe(aOd), aLl.show(), this.resize()
	}, this.aOe = function(aOd) {
		0 === aC.ym ? aOd ? tr.tt(aOd) : b7.om.a3Z.length && tr.tt(b7.om.a3Z) : (aC.gh || (b7.om.a3Z = b7.a3a.yF()), tr.tt(b7.aOf(b7.om.a3Z)))
	}, this.qn = function() {
		aLl.qn()
	}, this.resize = function() {
		aLl.resize(), tr.resize()
	}, this.a0u = function(et) {
		2 === et ? aLl.tV[0].po() : aOc()
	}, aLl = new tO(L(352), [new v("⬅️ " + L(35), function() {
		s.aKx(1)
	}), new v(L(353), function() {
		tr.tw()
	}), new v(L(354), function() {
		tr.tx()
	}), new v(L(355), function() {
		tr.clear()
	}), new v(L(356), function() {
		aOc()
	})]), tr = new tm(L(357)), aLl.tU.appendChild(tr.e)
}

function aKa() {
	var aKz, aL0, pR, aAX, aLI;

	function aOi() {
		var e7;
		aAX !== bh.km.data[12].value ? (b5.dU(), b5.aAW(), e7 = bd.e7, s.t(4, 1, new u(L(360), L(361), !1, [new v("⬅️ " + L(35), function() {
			s.t(1)
		}), new v("🔄 Reload", function() {
			bd.e7 < e7 + 1500 || z.a0.a1()
		}, b9.n1)]))) : s.t(1)
	}
	this.show = function() {
			aAX = bh.km.data[12].value, aKz.show(), this.resize()
		}, this.qn = function() {
			aKz.qn()
		}, this.resize = function() {
			aKz.resize(), aL0.resize()
		}, this.a0u = function(et) {
			2 === et && aKz.tV[0].po()
		}, aKz = new tO(L(358), [new v("⬅️ " + L(35), aOi), new v(L(359), function() {
			s.w(), bh.qy.uZ(), s.t(2)
		})]), pR = [], (aLI = new p9).pC(L(362)), aLI.pE(L(363)), pR.push(aLI),
		function(pR) {
			var aLI = new p9,
				g = (aLI.pC(L(384)), b5.data.aAf());
			aLI.pK(new tJ({
				tN: g,
				value: b5.data.aAj(g)
			}, function(dx) {
				return bh.qy.qz(12, g[dx].split(":")[0]), !0
			})), pR.push(aLI)
		}(pR),
		function(pR) {
			var aLI = new p9,
				aOl = (aLI.pC(L(382)), []);
			aLI.pN(new r1([new v(L(383), function(e) {
				bV.aOm();
				for (var aA = 0; aA < aOl.length; aA++) aOl[aA].e.value = bV.a9x[aA];
				return b8.pW.a2B(e), !0
			}).button]));
			for (var aA = 0; aA < bV.aOn.length; aA++) {
				aLI.pE(bV.aOn[aA]);
				for (var er = 0; er < 2; er++) {
					var dx = 2 * aA + er,
						qK = new qL({
							value: bV.a9x[dx],
							dx: -1
						});
					qK.e.aOo = dx, aOl.push(qK), qK.e.addEventListener("keydown", function(e) {
						e.preventDefault();
						var code = e.code;
						e.target.value = code, bV.aOp(e.target.aOo, code)
					}), er && (qK.e.style.marginLeft = "4%"), qK.e.style.width = "48%", aLI.pN(qK)
				}
			}
			pR.push(aLI)
		}(pR), (aLI = new p9).pC(L(22)), aLI.pK(new tJ({
			tN: ["1", "2"],
			value: aY.aDv - 1
		}, function(aA) {
			aY.aDv = aA + 1
		})), pR.push(aLI), (aLI = new p9).pC(L(364)), bh.km.data[1].tN = [L(365), L(366), L(367), L(368)], aLI.pK(new tJ(bh.km.data[1])), pR.push(aLI), (aLI = new p9).pC(L(369)), bh.km.data[9].tN = [L(366), L(370), L(371)], aLI.pK(new tJ(bh.km.data[
			9])), pR.push(aLI), (aLI = new p9).pC(L(372)), bh.km.data[11].tN = [L(373), L(9), L(374)], aLI.pK(new tJ(bh.km.data[11])), pR.push(aLI), (aLI = new p9).pC(L(375)), aLI.pN(new qv(bh.km.data[2])), pR.push(aLI), (aLI = new p9).pC(L(376)),
		aLI.pN(new qv(bh.km.data[7])), pR.push(aLI), (aLI = new p9).pC(L(377)), aLI.pN(new qv(bh.km.data[8])), pR.push(aLI), (aLI = new p9).pC(L(378)), aLI.pN(new qL(bh.km.data[5])), pR.push(aLI), (aLI = new p9).pC(L(379)), aLI.pN(new qv(bh.km.data[
			13], L(380))), aLI.pN(new qv(bh.km.data[14], L(381))), pR.push(aLI), aL0 = new pP(aKz.tU, pR)
}

function aKr() {
	var aLl, aLm, aLn, pR;

	function aLo() {
		aLq(), 2 !== aC.data.spawningType || b8.pf.a1L(aC.data.spawningData) || (aC.data.spawningType = 0), 2 !== aC.data.spawningType && (aC.data.spawningData = null), s.aKy()[19] = null, s.a0A()
	}

	function aLq() {
		2 === aC.data.spawningType && b8.pf.a1X(aLn.tv(), aC.data.spawningData, bQ.aFp - 1)
	}
	this.show = function() {
		aLl.show(), this.resize()
	}, this.qn = function() {
		aLl.qn()
	}, this.resize = function() {
		aLl.resize(), aLm.resize()
	}, this.a0u = function(et) {
		2 === et && aLl.tV[0].po()
	}, aLl = new tO(L(385), [new v("⬅️ " + L(35), aLo)]), aLm = new pP(aLl.tU, (function(pR) {
		var aLI = new p9,
			tN = (aLI.pC(L(235)), [L(260), L(270), L(238)]),
			value = aC.data.spawningType;
		0 === aC.data.gameMode && (tN.splice(1, 1), 0 < value) && (value = 1);
		aLI.pK(new tJ({
			tN: tN,
			value: value
		}, function(dx) {
			aLq(), aC.data.spawningType = dx, 0 === aC.data.gameMode && 1 === dx && (aC.data.spawningType = 2), 2 !== aC.data.spawningType || aC.data.spawningData || (aC.data.spawningData = new Uint16Array(2 * aC.eV)), s.t(24)
		})), aLI.pN(new rB), aLI.pN(new qv({
			value: aC.data.selectableSpawn
		}, L(386), function(value) {
			aC.data.selectableSpawn = value
		})), pR.push(aLI)
	}(pR = []), function(pR) {
		var aLI = new p9;
		aLI.pC("Seed"), aLI.pN(new qL({
			dx: -1,
			value: aC.data.spawningSeed
		}, 1, 0, function(e) {
			var value = Math.abs(Math.floor(e.target.value)) % 16384;
			e.target.value = aC.data.spawningSeed = value
		})), pR.push(aLI)
	}(pR), function(pR) {
		var aLI;
		2 === aC.data.spawningType && ((aLI = new p9).pC("Data"), (aLn = new tm(0, 1, 0, 1)).tt(b8.zR.a33(aC.data.spawningData, 2)), aLI.pN(aLn), pR.push(aLI))
	}(pR), pR))
}

function aKZ() {
	var aKz, aNn, aNo, tP;

	function aOq(id) {
		0 !== z.id || bh.km.data[140].value ? 0 === id ? s.t(8, 1, new rm(16)) : s.t(2) : s.x.aNh(s.rl, 0 === id ? 16 : 0)
	}
	this.show = function() {
		z.a0.setState(12), aKz.show(), this.resize(), this.ih()
	}, this.qn = function() {
		aKz.qn()
	}, this.resize = function() {
		aKz.resize(), aNn.resize()
	}, this.ih = function() {
		8 === aZ.a00() && (2 <= bb.aOv ? aNo[2].pp === b9.mq && aNo[2].pr(0) : aNo[2].pp !== b9.mq && aNo[2].pr(b9.mq), !aC.gh && aL.p7(aC.eI) ? aNo[1].pp === b9.mq && aNo[1].pr(0) : aNo[1].pp !== b9.mq && aNo[1].pr(b9.mq), !aC.gh && au.hI(aC
			.eI) ? aNo[0].pp === b9.mq && aNo[0].pr(0) : aNo[0].pp !== b9.mq && aNo[0].pr(b9.mq))
	}, this.a0u = function(et) {
		2 === et && aKz.tV[0].po()
	}, aNo = [new v(L(387), function() {
		aOq(0)
	}), new v(L(291), function() {
		s.t(16)
	}), new v(L(342), function() {
		s.t(17)
	}), new v(L(388), function() {
		s.x.aMi()
	}, 0, 0, 1), new v(L(352), function() {
		s.t(3, 1)
	}), new v(L(389), function() {
		s.t(18)
	}), new v(L(358), function() {
		aOq(1)
	}), new v(L(390), function() {
		s.t(4, 1, new u(L(390), b8.pW.a26([L(399), L(400), "Discord", L(401), L(285), L(402), L(113), L(403), L(404), L(405)], [bI.aAw, bI.zv, bI.aAx, bI.aOw, bI.aOx, bI.zc, bI.aOy, bI.aOz, bI.aP0, bI.aON]), !1, [new v("⬅️ " + L(35),
			function() {
				s.t(1)
			})]))
	}), new v(L(391), function() {
		s.t(4, 1, new u(L(391), l.dk + "<br><a href='" + bI.aOw + "' target='_blank'>" + bI.aOw + "</a>" +
			"<br><br><b>" + "FX Client v" + __fx.version + "<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a>" +
			"<br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></b>", !0, [new v("⬅️ " + L(35), function() {
				s.t(1)
			})]))
	}), new v(L(392), function() {
		s.t(4, 1, new u(L(392), L(406) + "<br>" + L(407), !1, [new v("⬅️ " + L(35), function() {
			s.t(1)
		}), new v(L(408), function() {
			z.a0.zp(), s.t(1)
		})]))
	}), new v(L(393), function() {
		z.a0.zq(), s.t(4, 1, new u(L(409), L(410) + " <a href='" + bI.aON + "' target='_blank'>" + bI.aON + "</a>", !1, [new v("⬅️ " + L(35), function() {
			s.t(1)
		})]))
	})], tP = [new v("⬅️ " + L(35), function() {
		s.x.aAb()
	})], 8 === aZ.a00() && (aNo.unshift(new v(L(396), function() {
		2 <= bb.aOv && (s.w(), bc.a0x(), bd.dc = !0)
	}, 0, 1)), aNo.unshift(new v(L(397), function() {
		!aC.gh && aL.p7(aC.eI) && (b6.gu.oE(), s.w(), aL.gi) && aL.a0x()
	}, 0, 1)), aNo.unshift(new v(L(398), function() {
		!aC.gh && au.hI(aC.eI) && (bT.a45(2), b6.gu.hE(), s.w(), aL.gi) && aL.a0x()
	}, 0, 1))), 1 === z.id && 5 <= z.dk && aNo.push(new v(L(394), function() {
		z.a0.zr()
	})), aKz = new tO(L(395), tP), aNn = new q5(aNo, aKz.tU)
}

function aKv() {
	var aLl, aLm, aLn, pR;

	function aLo() {
		aLq(), 2 !== aC.data.sResourcesType && (aC.data.sResourcesData = null), s.aKy()[19] = null, s.a0A()
	}

	function aLq() {
		2 === aC.data.sResourcesType && b8.pf.a1X(aLn.tv(), aC.data.sResourcesData, 2047)
	}
	this.show = function() {
		aLl.show(), this.resize()
	}, this.qn = function() {
		aLl.qn()
	}, this.resize = function() {
		aLl.resize(), aLm.resize()
	}, this.a0u = function(et) {
		2 === et && aLl.tV[0].po()
	}, aLl = new tO(L(276), [new v("⬅️ " + L(35), aLo)]), aLm = new pP(aLl.tU, (function(pR) {
		var aLI = new p9;
		aLI.pC(L(235)), aLI.pK(new tJ({
			tN: [L(236), L(237), L(238)],
			value: aC.data.sResourcesType
		}, function(dx) {
			aLq(), 2 !== dx || aC.data.sResourcesData || (aC.data.sResourcesData = new Uint16Array(aC.eV)), aC.data.sResourcesType = dx, s.t(28)
		})), pR.push(aLI)
	}(pR = []), function(pR) {
		var aLI;
		1 === aC.data.sResourcesType && ((aLI = new p9).pC("Value"), aLI.pN(new qL({
			dx: -1,
			value: aC.data.sResourcesValue
		}, 1, 0, function(e) {
			var value = bJ.p4(Math.floor(e.target.value), 0, 2047);
			e.target.value = aC.data.sResourcesValue = value
		})), pR.push(aLI))
	}(pR), function(pR) {
		var aLI;
		2 === aC.data.sResourcesType && ((aLI = new p9).pC("Data"), (aLn = new tm(0, 1, 0, 1)).tt(b8.zR.a33(aC.data.sResourcesData, 2)), aLI.pN(aLn), pR.push(aLI))
	}(pR), pR))
}

function aKt() {
	var aLl, aLm, aLn, pR;

	function aLo() {
		aLq(), 2 !== aC.data.tIncomeType && (aC.data.tIncomeData = null), s.aKy()[19] = null, s.a0A()
	}

	function aLq() {
		2 === aC.data.tIncomeType && b8.pf.a1X(aLn.tv(), aC.data.tIncomeData, 255)
	}
	this.show = function() {
		aLl.show(), this.resize()
	}, this.qn = function() {
		aLl.qn()
	}, this.resize = function() {
		aLl.resize(), aLm.resize()
	}, this.a0u = function(et) {
		2 === et && aLl.tV[0].po()
	}, aLl = new tO(L(274), [new v("⬅️ " + L(35), aLo)]), aLm = new pP(aLl.tU, (function(pR) {
		var aLI = new p9;
		aLI.pC(L(235)), aLI.pK(new tJ({
			tN: [L(236), L(237), L(238)],
			value: aC.data.tIncomeType
		}, function(dx) {
			aLq(), 2 !== dx || aC.data.tIncomeData || (aC.data.tIncomeData = new Uint8Array(aC.eV), aC.data.tIncomeData.fill(32)), aC.data.tIncomeType = dx, s.t(26)
		})), pR.push(aLI)
	}(pR = []), function(pR) {
		var aLI;
		1 === aC.data.tIncomeType && ((aLI = new p9).pC("Value"), aLI.pN(new qL({
			dx: -1,
			value: aC.data.tIncomeValue
		}, 1, 0, function(e) {
			var value = bJ.p4(Math.floor(e.target.value), 0, 255);
			e.target.value = aC.data.tIncomeValue = value
		})), pR.push(aLI))
	}(pR), function(pR) {
		var aLI;
		2 === aC.data.tIncomeType && ((aLI = new p9).pC("Data"), (aLn = new tm(0, 1, 0, 1)).tt(b8.zR.a33(aC.data.tIncomeData, 4)), aLI.pN(aLn), pR.push(aLI))
	}(pR), pR))
}

function aKl() {
	var aKz, aL0, pR;
	this.show = function() {
		aKz.show(), this.resize()
	}, this.qn = function() {
		aKz.qn()
	}, this.resize = function() {
		aKz.resize(), aL0.resize()
	}, this.a0u = function(et) {
		2 === et && aKz.tV[0].po()
	}, aKz = new tO(L(389), [new v("⬅️ " + L(35), function() {
		s.a0A()
	})]), aL0 = new pP(aKz.tU, ((pR = []).push(function() {
		function aLO() {
			aP5.button.textContent = L(169), aP3.e.readOnly = !1, aP4.e.readOnly = !1, aLM.pr(1), aLM.button.style.color = b9.me
		}
		var aLI = new p9,
			aP2 = (aLI.pC(L(411)), new qL({
				value: bh.km.data[105].value,
				dx: -1
			})),
			aP3 = (aP2.e.readOnly = !0, aLI.pN(aP2), aLI.pC(L(315), "0.8em"), new qL(bh.km.data[148])),
			aP3 = new qL(bh.km.data[148], 0, void 0, function(e) {
				aLL(bh.km.data[149].value, e.target.value)
			}),
			aP4 = (aLI.pN(aP3), aLI.pC(L(319), "0.8em"), new qL(bh.km.data[149], 1, void 0, function(e) {
				aLL(e.target.value, bh.km.data[148].value)
			})),
			aP5 = (aLI.pN(aP4), new v(L(169), function(e) {
				return e.textContent === L(169) ? (e.textContent = L(170), aP3.e.readOnly = !0, aP4.e.readOnly = !0, aLM.pr(0), aLM.button.style.color = b9.na, bh.qy.qz(149, aP4.e.value), aLL(bh.km.data[149].value, bh.km.data[
					148].value)) : aLO(), !0
			})),
			aLM = (aLI.pN(new r1([aP5.button])), new v(L(14), function(e) {
				return aP3.e.readOnly && ay.x.aLN(0) && (b8.pW.a2B(e), aLO(), ay.aLP.aLQ({
					rn: 0,
					rj: bh.km.data[148].value,
					value: parseInt(bh.km.data[149].value, 10)
				})), !0
			}, 1)),
			pF = aLI.pE(),
			aLL = (aLI.pE(L(171)).style.fontWeight = "bold", function(f0, pD) {
				f0 = b8.ft.a2f(f0, 2, 1e6), pF.textContent = L(172, [f0, bh.km.data[105].value, pD, f0 - 1])
			});
		return aLI.pN(new r1([aLM.button])), aLL(bh.km.data[149].value, bh.km.data[148].value), aLI
	}()), pR))
}

function br() {
	"function" != typeof Math.log2 && (Math.log2 = function(ef) {
		return Math.log(ef) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(ef) {
		return Math.log(ef) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(ef) {
		return 0 < ef ? 1 : ef < 0 ? -1 : 0
	})
}

function cc() {
	var a7o, aP7, aP8, aP9, aP6 = !1;

	function aPA() {
		aP6 = !0, a7o = -1, aP7 = new Array(4);
		for (var aA = 3; 0 <= aA; aA--) aP7[aA] = !1;
		var wI = Math.floor(1 + .02 * h.min);
		aP8 = new Array(4), (aP9 = new Array(4))[1] = aP9[3] = aP8[0] = aP8[2] = 0, aP9[0] = aP8[3] = -wI, aP8[1] = aP9[2] = wI
	}

	function aPB() {
		if (-1 !== a7o)
			if (0 !== aC.ym && aG.mM()) {
				for (var aPC = !1, aA = 3; 0 <= aA; aA--) aP7[aA] && (aPC = !0, i8 += aP8[aA], iA += aP9[aA], ae.a0M(aP8[aA], aP9[aA]), aR.a7W());
				aPC ? bd.dc = !0 : ap.mC()
			} else ap.mC()
	}
	this.a0s = function(dx) {
		0 !== aC.ym && aG.mM() && (aP6 || aPA(), aP7[dx] = !0, -1 === a7o) && (a7o = setInterval(aPB, 20), aPB())
	}, this.a0v = function(dx) {
		if (0 !== aC.ym && (aP6 || aPA(), aP7[dx] = !1, -1 !== a7o)) {
			for (var aPC = !1, aA = 3; 0 <= aA; aA--) aPC = aPC || aP7[aA];
			aPC || this.mC()
		}
	}, this.mC = function() {
		if (aP6 && -1 !== a7o) {
			for (var aA = 3; 0 <= aA; aA--) aP7[aA] = !1;
			clearInterval(a7o), a7o = -1
		}
	}
}

function cd() {
	this.x = new aPD, this.lK = new aPE, this.nv = new aPF, this.aCe = new aPG, this.aAY = new aPH, this.aLP = new aPI, this.oW = new aPJ, this.aN6 = new aPK, this.a5I = new aPL, this.aPM = new aPN, this.aPO = new aPP, this.aPQ = new aPR, this.aPS =
		new aPT, this.dU = function() {
			this.x.dU()
		}
}

function aPD() {
	var aPU, aPW;
	this.aDy = 5, this.aPV = null;

	function aPd(aA) {
		return aPW[aA].aP6 && aPU[aA].aPd()
	}

	function aPf(zx) {
		aPW[zx].e7 = bd.e7, aPW[zx].aPY = !1
	}
	this.a06 = 0, this.a05 = 0, this.dU = function() {
		this.aPV = new Array(this.aDy);
		this.aPV[0] = "territorial.io";
		var aIX = aw.aIs(0);
		aw.a3P(0);
		for (var aA = 1; aA < this.aDy; aA++) this.aPV[aA] = aJ.yL() + ".territorial.io";
		for (aw.a3P(aIX), aPU = new Array(this.aDy), aPW = new Array(this.aDy), aA = this.aDy - 1; 0 <= aA; aA--) aPW[aA] = {
			aP6: !1,
			e7: 0,
			aPY: !1
		};
		this.aDz(0, 0)
	}, this.aPZ = function(aA) {
		return aPU[aA]
	}, this.ih = function() {
		for (var aA = this.aDy - 1; 0 <= aA; aA--) this.aLN(aA) && bd.e7 > aPW[aA].e7 + 15e3 && ay.nv.aPa(aA, aPW[aA].aPY);
		!this.aLN(0) && bd.e7 > aPW[0].e7 + 8e3 && (aPW[0].e7 = bd.e7, this.aDz(0, 0))
	}, this.aN2 = function(id) {
		return this.aDz(0, id) && this.aPb(0)
	}, this.aDz = function(zx, aKX) {
		if (aPW[zx].aP6) {
			if (aPU[zx].aPd()) return aPU[zx].aPe(aKX), aPU[zx].aLN();
			aPU[zx].qn()
		}
		return this.aPc(zx, aKX), !1
	}, this.aPc = function(zx, aKX) {
		aPW[zx].aP6 = !0, aPf(zx), aPU[zx] = new aPg, aPU[zx].dU(zx, aKX)
	}, this.aPe = function(zx, aKX) {
		aPd(zx) && aPU[zx].aPe(aKX)
	}, this.aPh = function(zx, aKX) {
		ay.aAY.aPi(zx)
	}, this.aPb = function(aA) {
		return this.aLN(aA) && aPU[aA].aPb()
	}, this.aPj = function(aA) {
		aPU[aA].aPj()
	}, this.aLN = function(aA) {
		return aPW[aA].aP6 && aPU[aA].aLN()
	}, this.send = function(zx, aB) {
		aPf(zx), aPU[zx].send(aB)
	}, __fx.customLobby.setSendFunction(this.send), this.a0d = function(zx) {
		8 === aZ.a00() && (aPW[zx].aPY = !0, ay.lK.aPk = !0)
	}, this.close = function(zx, aPl) {
		aPd(zx) && aPU[zx].close(aPl)
	}, this.aPm = function(zx, aPl) {
		q.a0B(aPl), aPd(zx) && aPU[zx].close(aPl)
	}, this.a0C = function(aPl) {
		for (var aA = this.aDy - 1; 0 <= aA; aA--) this.close(aA, aPl)
	}, this.aPn = function(zx, aPl) {
		for (var aA = this.aDy - 1; 0 <= aA; aA--) aA !== zx && this.close(aA, aPl)
	}, this.a3b = function() {
		this.close(this.a06, 3246)
	}, this.aPo = function(zx, e) {
		aPU[zx].qn(), q.zw(zx, e.code)
	}
}

function aPE() {
	this.aPk = !1, this.ih = function() {
		bd.jk() % 250 != 249 || aC.gh || (ay.aAY.aPp(+(this.aPk && af.lc[aC.eI]), ak.jo + bL.x.ok), this.aPk = !1)
	}
}

function aPL() {
	function aQG(aQH) {
		var eb = aC.data,
			aQH = (eb.selectedPlayer = bF.oX(aQH), eb.spawningSeed = bF.oX(14), bF.oX(4)),
			aQH = (aQH < 7 ? (eb.gameMode = 1, eb.numberTeams = aQH + 2) : 9 === aQH ? (eb.gameMode = eb.isZombieMode = 1, eb.numberTeams = 2) : (eb.gameMode = 0, eb.battleRoyaleMode = 7 === aQH ? 0 : 10 === aQH ? 1 : 2), eb.isContest = bF.oX(1), bF
				.oX(6));
		return eb.mapType = bQ.aBg(aQH) ? 0 : 1, bQ.aBh(eb, aQH), eb.mapSeed = bF.oX(14), aQH
	}
	this.aPr = function(zx, aB) {
		bF.dU(aB), 0 === bF.size ? ay.x.aPm(zx, 3205) : __fx.customLobby.isCustomMessage(aB) || ((0 === bF.oX(1) ? function(zx) {
			var aPv = bF.oX(6);
			0 === aPv ? function(zx) {
					if (0 === zx && 8 !== aZ.a00()) {
						s.x.aOO();
						for (var aQ8 = bF.oX(12), aQ9 = bF.oX(6), g = new Array(aQ8), aA = 0; aA < aQ8; aA++) g[aA] = bF.oX(aQ9);
						aS.a7v(g)
					}
				}(zx) : 2 === aPv ? ay.aPM.aPx(zx) : 3 === aPv || 4 === aPv ? av.dU() : 9 === aPv ? ay.aPO.aPy(zx) : 10 === aPv ? ay.aPQ.aPz() : 11 === aPv ? ay.aPO.aQ0(zx) : 12 === aPv ? ay.aPQ.aQ1() : 13 === aPv ? ay.aPS.aQ2() :
				14 === aPv ? ay.aPS.aQ3() : 15 === aPv ? ay.aPO.aQ4() : 16 === aPv ? ay.aPM.aQ5(zx) : 17 === aPv ? ay.aPM.aQ6(zx) : 19 === aPv && ay.aPM.aQ7(zx)
		} : function(zx) {
			if (8 !== aZ.a00() && !av.aEU()) return;
			if (zx !== ay.x.a06) ay.x.aPm(zx, 3244);
			else if (0 === bF.oX(1)) bd.yv.aQI(bF.aB);
			else {
				var aA, zx = bF.oX(2);
				if (0 === zx) {
					var o9, nv = bF.oX(9);
					0 !== af.lc[nv] && 0 !== af.lc[aC.eI] && (o9 = bF.oX(10), aM.o8(nv, aC.eI, o9), ae.p5(nv, 1, o9))
				} else if (1 === zx) ! function() {
					var nv = bF.oX(9);
					0 !== af.lc[nv] && 0 !== af.lc[aC.eI] && b3.aIH(0, [nv], !0) && aM.oP(nv, 1)
				}();
				else if (2 === zx) ! function() {
					var nv = bF.oX(9),
						target = bF.oX(9);
					0 !== af.lc[nv] && 0 !== af.lc[target] && 0 !== af.lc[aC.eI] && b3.aIH(1, [nv], !0) && (ae.p5(nv, 3, 96), ae.p5(target, 4, 96), aM.a5P(nv, target))
				}();
				else if (l.a8 && !l.a9) {
					var eY = 540;
					for (bB.a6(17287), bB.a7(1, 0), bB.a7(6, 10), eY = Math.min(b6.ns.oZ.length, 540), aA = 0; aA < eY; aA++) bB.aQO(32, b6.ns.oZ[aA]);
					ay.x.send(ay.x.a06, bB.aB)
				}
			}
		})(zx), bd.aPu())
	}, this.aQA = function(aB) {
		if (bF.dU(aB), bF.dx = 1, 3 === bF.oX(6)) {
			bF.dx += 20;
			var eb = aC.data = new a3J,
				aB = aQG(9),
				aBi = eb.humanCount = bF.oX(9) + 1;
			eb.selectableSpawn = 1 === eb.gameMode || aBi < 100, eb.colorsData = new Uint32Array(aBi), eb.playerNamesData = new Array(aBi);
			for (var aA = 0; aA < aBi; aA++) bF.dx++, eb.colorsData[aA] = bF.oX(18), eb.playerNamesData[aA] = bE.us.uw(bF.oX(5));
			aZ.aEA(), bQ.a6(aB, eb.mapSeed), aC.a3N()
		} else ! function() {
			bF.dx += 20;
			var eb = aC.data = new a3J,
				aQF = aQG(1);
			eb.humanCount = 2;
			eb.selectableSpawn = 1, eb.elo = new Uint16Array(2), eb.colorsData = new Uint32Array(2), eb.playerNamesData = new Array(2);
			for (var aA = 0; aA < 2; aA++) bF.dx++, eb.colorsData[aA] = bF.oX(18), eb.elo[aA] = bF.oX(14), eb.playerNamesData[aA] = bE.us.uw(bF.oX(5));
			aZ.aEA(), bQ.a6(aQF, eb.mapSeed), aC.a3N()
		}()
	}, this.aQD = function() {
		bF.dx = 1;
		var aPv = bF.oX(6),
			aQE = bF.oX(10);
		return ay.x.a05 === aQE ? (ay.x.a06 = aQE, !1) : (ay.x.close(ay.x.a05, 3247), ay.x.a06 = aQE, av.aBd = bF.oX(10), av.aEI = bF.oX(3 === aPv ? 9 : 1), ay.x.aDz(aQE, 5) && ay.nv.aEP(), !0)
	}
}

function aPR() {
	this.aPz = function() {
		bh.x.uQ(), bh.qy.qz(105, bD.ro.rp(bD.ro.rq(5))), bh.qy.qz(106, bD.ro.rp(bD.ro.rq(8))), bh.qy.qz(109, bF.oX(30)), bh.qy.qz(108, bh.km.data[109].value), bh.qy.qz(111, bh.km.data[109].value + 1), bh.qy.qz(107, 0), bh.qy.qz(110, "")
	}, this.aQ1 = function() {
		var aQR, aQS, aQT, aQU, aQQ;
		bF.size < bB.aQP(29) ? ay.x.aPm(0, 3254) : (aQQ = bF.oX(5), aQR = bF.oX(3), aQS = bF.oX(3), aQT = bF.oX(3), aQU = bF.oX(8), bF.aQV(197 + 16 * (aQQ + aQR + aQS + aQT + aQU) + 32 + 32 + 30 + 128 + 32 + 30 + 32 + 2 + 10 + 5 + 30 + 30 + 32) ?
			(aQQ = {
				rk: bF.oX(30),
				ud: bF.oX(16),
				ue: bF.oX(30),
				uf: bF.oX(30),
				ug: bF.oX(30),
				uh: bF.aQW(32),
				username: bE.us.uw(aQQ),
				ui: bE.us.uw(aQR),
				uj: bE.us.uw(aQS),
				uk: bF.aQW(32),
				ul: bF.aQW(32),
				um: bF.oX(30),
				un: bF.aQW(32),
				uo: bF.aQW(32),
				up: bF.aQW(32),
				uq: bF.aQW(32),
				aLW: bF.aQW(32),
				aLX: bF.aQW(30),
				aLi: bF.aQW(32),
				aLj: bE.us.uw(aQT),
				aLb: bF.aQW(2),
				aLc: bF.aQW(10),
				aLZ: bE.us.uw(aQU),
				aLd: bF.aQW(5),
				aLK: bF.oX(30),
				aLV: bF.oX(30),
				zE: bF.aQW(32)
			}, 8 === s.rl && (25 === s.aDF().aN1 ? (aQQ.aL1 = !0, s.x.aKi = aQQ, s.aDF().aNG(25, !1)) : (aQQ.aL1 = !1, aQQ.rj = bh.km.data[105].value, s.x.aKf = aQQ, bh.qy.uc(aQQ), s.aDF().aNG(16, !0)))) : ay.x.aPm(0, 3267))
	}
}

function aPT() {
	this.aQ2 = function() {
		var aA;
		if (bF.size < bB.aQP(39)) ay.x.aPm(0, 3259);
		else {
			var s5 = bF.oX(6),
				eY = bF.oX(10),
				data = [];
			if (9 === s5 || 10 === s5) {
				for (aA = 0; aA < eY; aA++) data.push([bF.oX(30), bE.uu.vC(5), bF.aQW(32), 0, bF.oX(30)]);
				8 === s.rl && s.aDF().aNG(21, !0, {
					s5: s5,
					data: data
				})
			} else {
				var hQ = bF.oX(16);
				if (bF.aQV(39 + 16 * hQ + eY * (0 === s5 ? 111 : 1 === s5 ? 101 : 2 === s5 || 3 === s5 ? 127 : 212))) {
					if (0 === s5)
						for (aA = 0; aA < eY; aA++) data.push([bF.oX(30), bE.us.uw(bF.oX(5)), bF.oX(16), bF.oX(30), bF.oX(30)]);
					else if (1 === s5)
						for (aA = 0; aA < eY; aA++) data.push([bF.oX(16), bE.us.uw(bF.oX(3)), bF.oX(16), bE.us.uw(bF.oX(5)), bF.oX(31), bF.oX(30)]);
					else if (2 === s5 || 3 === s5)
						for (aA = 0; aA < eY; aA++) data.push([bF.oX(30), bE.us.uw(bF.oX(5)), bF.aQW(32), bF.oX(30), bF.oX(30)]);
					else
						for (aA = 0; aA < eY; aA++) data.push([bF.oX(20), bF.oX(30), bF.oX(30), bF.oX(30), bF.oX(30), bF.aQW(32), bF.oX(30), bE.us.uw(bF.oX(5)), bE.us.uw(bF.oX(5))]);
					8 === s.rl && s.aDF().aNG(21, !0, {
						s5: s5,
						data: data
					})
				} else ay.x.aPm(0, 3260)
			}
		}
	}, this.aQ3 = function() {
		if (bF.size < bB.aQP(29)) ay.x.aPm(0, 3265);
		else {
			var aQX = bF.oX(4),
				aQY = bF.oX(7),
				aQZ = bF.oX(11);
			if (bF.aQV(29 + 16 * aQY + 16 * aQZ + 11 * aQX)) {
				for (var data = [], aA = 0; aA < aQX; aA++) {
					for (var zV = bE.us.uw(bF.oX(3)), aQa = bF.oX(8), aMF = [], er = 0; er < aQa; er++) aMF.push(bF.oX(16));
					data.push({
						name: "[" + zV + "]",
						aMF: aMF
					})
				}
				8 === s.rl && s.aDF().aNG(23, !0, data)
			} else ay.x.aPm(0, 3266)
		}
	}
}

function aPN() {
	function aQc() {
		var id = bF.oX(3);
		return 0 === id ? {
			id: id,
			rj: bF.oX(30),
			p: bl.aB2.aCk(bE.uu.vC(7))
		} : 1 === id ? {
			id: id,
			rj: bF.oX(30),
			aBo: bF.oX(3),
			value: bF.oX(30),
			target: bF.oX(30)
		} : 2 === id ? {
			id: id,
			rj: bF.oX(30),
			aBo: bF.oX(3)
		} : 3 === id ? {
			id: id,
			rj: bF.oX(30),
			aBo: bF.oX(3),
			value: bF.oX(4),
			target: bF.oX(30)
		} : 4 === id ? {
			id: id,
			rj: bF.oX(30),
			aBo: bF.oX(3),
			target: bF.oX(30)
		} : 5 === id ? {
			id: id,
			aBo: bF.oX(3)
		} : 6 === id ? {
			id: id,
			value: bF.oX(17)
		} : null
	}
	this.aPx = function(zx) {
		if (zx !== ay.x.a05) ay.x.close(zx, 3239);
		else if (6 !== aZ.a00()) ay.x.close(zx, 3271);
		else {
			bl.dU();
			for (var aA = 0; aA < 4; aA++) {
				var qa = bl.x.qb[aA],
					playerCount = (qa.sc = bF.oX(10), qa.eE = bF.oX(6), qa.mapSeed = bF.oX(14), qa.aBZ = bF.oX(4), qa.aDG = bF.oX(6), qa.aDH = bF.oX(4), qa.aBf = bF.oX(1), qa.aCK = bF.oX(12), qa.spawningSeed = bF.oX(14), bF.oX(16));
				bl.sr.st[aA] = bF.oX(16);
				for (var er = 0; er < playerCount; er++) bl.sr.aBD(aA, bF.oX(30), bE.uu.vC(5), bF.oX(4), bF.oX(30), bF.oX(7), bF.oX(16), bF.oX(18), bF.oX(11), bF.oX(12))
			}
			s.t(29), bl.x.aCA(!0)
		}
	}, this.aQ5 = function(zx) {
		if (zx !== ay.x.a05) ay.x.close(zx, 3239);
		else if (bl.a04) {
			bl.x.aC8[0] = bF.oX(20), bl.x.aC8[1] = bF.oX(20);
			for (var aQb = bF.oX(16), er = 0; er < aQb; er++) {
				var id = bF.oX(3);
				0 === id ? bl.sr.aBD(bF.oX(2), bF.oX(30), bE.uu.vC(5), 0, 1234566, 127, 0, bF.oX(18), 0, bF.oX(12)) : 1 === id ? bl.sr.aBT(bF.oX(16), bF.oX(2)) : 2 === id ? bl.sr.aBP(bF.oX(16), bF.oX(2), bF.oX(2)) : 3 === id ? bl.sr.aBS(bF.oX(
					16), bF.oX(2)) : 4 === id ? bl.sr.aBJ(bF.oX(16), bF.oX(2), bF.oX(4), bF.oX(30), bF.oX(7), bF.oX(16), bF.oX(11)) : 5 === id && bl.sr.aBK(bF.oX(16), bF.oX(2), bF.oX(1))
			}
			for (var aA = 0; aA < 4; aA++) {
				var qa = bl.x.qb[aA];
				if (qa.sc = bF.oX(10), 0 === qa.sc) {
					if (qa.a06 = bF.oX(10), qa.aBd = bF.oX(10), bl.aB3.dd(aA)) return;
					qa.eE = bF.oX(6), qa.mapSeed = bF.oX(14), qa.aBZ = bF.oX(4), qa.aDG = bF.oX(6), qa.aDH = bF.oX(4), qa.aBf = bF.oX(1), qa.aCK = bF.oX(12), qa.spawningSeed = bF.oX(14), qa.aDI.push(qa.aDI[0]), qa.aDI.shift()
				}
			}
			bl.x.aCC()
		} else ay.x.close(zx, 3251)
	}, this.aQ6 = function(zx) {
		if (zx !== ay.x.a05) ay.x.close(zx, 3272);
		else if (bl.a04) {
			for (var qY = bF.oX(4), qa = bl.x.qb[qY], qc = qa.qc, t6 = (qa.qd = bF.oX(20), bF.oX(6)), aA = 0; aA < t6; aA++) qc.push(aQc());
			bl.x.aCL(qY)
		} else ay.x.close(zx, 3273)
	}, this.aQ7 = function(zx) {
		zx !== ay.x.a05 ? ay.x.close(zx, 3276) : bl.a04 ? bl.message.aCg(aQc()) : ay.x.close(zx, 3277)
	}
}

function aPP() {
	this.aPy = function(zx) {
		var aQK, q3;
		bF.aQV(70) ? (aQK = bF.oX(3), q3 = bg.aQd.ih(bF.oX(30), bF.oX(30)), ay.aAY.aQe(zx, q3, aQK), 0 < aQK || (0 === zx && 0 === bh.km.data[105].value.length ? ay.aAY.aN5(0) : ay.aLP.aQf(zx), 4 === ay.x.aPZ(zx).aQg() ? 6 === aZ.a00() && ay.aCe
			.aE0(zx) : 5 !== ay.x.aPZ(zx).aQg() || 8 !== aZ.a00() && 10 !== aZ.a00() || ay.nv.aEP())) : ay.x.aPm(zx, 3269)
	}, this.aQ0 = function(zx) {
		var id = bF.oX(6);
		0 === id ? (ay.x.aPj(zx), aS.a7r || ay.aAY.aN5(1), b5.aAW(), 8 === s.rl && s.aDF().aNF()) : 21 === id ? 8 === s.rl && s.aDF().aNG(17) : 22 === id && (bh.qy.qz(106, bh.km.data[110].value), bh.qy.qz(110, ""), 8 === s.rl) && s.aDF().aNG(16)
	}, this.aQ4 = function() {
		var eY = bF.oX(16),
			aQh = bF.oX(16);
		if (bF.aQV(55 + 10 * eY + 16 * aQh)) {
			for (var g = [], aA = 0; aA < eY; aA++) g.push(bE.us.uw(bF.oX(10)));
			b5.aAa(g)
		} else ay.x.aPm(0, 3270)
	}
}

function aPF() {
	this.aPa = function(zx, aPY) {
		bB.a6(8), bB.a7(1, 0), bB.a7(6, 4), bB.a7(1, aPY ? 1 : 0), ay.x.send(zx, bB.aB)
	}, this.aEP = function() {
		bB.a6(58), bB.a7(1, 0), bB.a7(6, 5), bB.a7(8, ay.x.a05), bB.a7(10, av.aBd), bB.a7(9, av.aEI), bB.a7(10, l.dm), bB.a7(14, l.dg), ay.x.send(ay.x.a06, bB.aB)
	}, this.nw = function(eK) {
		bB.a6(27), bB.a7(1, 1), bB.a7(4, 0), bB.a7(22, eK), ay.x.send(ay.x.a06, bB.aB)
	}, this.nx = function(i7, iy) {
		bB.a6(25), bB.a7(1, 1), bB.a7(4, 1), bB.a7(10, i7), bB.a7(10, iy), ay.x.send(ay.x.a06, bB.aB)
	}, this.o1 = function(i7, nz) {
		bB.a6(24), bB.a7(1, 1), bB.a7(4, 2), bB.a7(10, i7), bB.a7(9, nz), ay.x.send(ay.x.a06, bB.aB)
	}, this.o2 = function(i7, eK) {
		bB.a6(37), bB.a7(1, 1), bB.a7(4, 3), bB.a7(10, i7), bB.a7(22, eK), ay.x.send(ay.x.a06, bB.aB)
	}, this.o5 = function(m0, eK) {
		bB.a6(37), bB.a7(1, 1), bB.a7(4, 4), bB.a7(10, m0), bB.a7(22, eK), ay.x.send(ay.x.a06, bB.aB)
	}, this.o7 = function(iy) {
		bB.a6(15), bB.a7(1, 1), bB.a7(4, 5), bB.a7(10, iy), ay.x.send(ay.x.a06, bB.aB)
	}, this.oB = function(dx) {
		bB.a6(15), bB.a7(1, 1), bB.a7(4, 6), bB.a7(10, dx), ay.x.send(ay.x.a06, bB.aB)
	}, this.oD = function(oC) {
		bB.a6(6), bB.a7(1, 1), bB.a7(4, 7), bB.a7(1, oC), ay.x.send(ay.x.a06, bB.aB)
	}, this.oF = function() {
		bB.a6(5), bB.a7(1, 1), bB.a7(4, 8), ay.x.send(ay.x.a06, bB.aB)
	}, this.oG = function(i7, eK, iy) {
		bB.a6(47), bB.a7(1, 1), bB.a7(4, 10), bB.a7(10, i7), bB.a7(10, iy), bB.a7(22, eK), ay.x.send(ay.x.a06, bB.aB)
	}, this.oN = function(aQi, aQj) {
		bB.a6(24), bB.a7(1, 1), bB.a7(4, 15), bB.a7(9, aQj), bB.a7(10, aQi), ay.x.send(ay.x.a06, bB.aB)
	}, this.oQ = function(a5I) {
		bB.a6(14), bB.a7(1, 1), bB.a7(4, 14), bB.a7(9, a5I), ay.x.send(ay.x.a06, bB.aB)
	}, this.oU = function(aQk, target) {
		var aA, eY = aQk.length;
		for (bB.a6(14 + 9 * eY), bB.a7(1, 1), bB.a7(4, 13), bB.a7(9, target), aA = 0; aA < eY; aA++) bB.a7(9, aQk[aA]);
		ay.x.send(ay.x.a06, bB.aB)
	}
}

function aPI() {
	this.aQl = function() {
		bB.a6(39), bB.a7(1, 0), bB.a7(6, 16), ay.aAY.aQm(), ay.x.send(0, bB.aB)
	}, this.aQf = function(zx) {
		bB.a6(115), bB.a7(1, 0), bB.a7(6, 17), bE.ro.v8(bh.km.data[105].value, 5), bE.ro.v8(bh.km.data[106].value, 8), bB.a7(30, bh.km.data[109].value), ay.x.send(zx, bB.aB)
	}, this.aNI = function() {
		bB.a6(55), bB.a7(1, 0), bB.a7(6, 18), bE.ro.v7(bh.km.data[110].value), ay.x.send(0, bB.aB)
	}, this.aNE = function(a2i) {
		var eY = a2i.pD.length;
		bB.a6(21 + 16 * eY), bB.a7(1, 0), bB.a7(6, 29), bB.a7(6, a2i.rn), bB.a7(8, eY), bD.us.v7(a2i.pD), ay.x.send(0, bB.aB)
	}, this.aLe = function(data) {
		bB.a6(43), bB.a7(1, 0), bB.a7(6, 25), bB.a7(6, data.rn), bE.ro.v8(data.rj, 5), ay.x.send(0, bB.aB)
	}, this.aLQ = function(data) {
		bB.a6(75), bB.a7(1, 0), bB.a7(6, 27), bB.a7(6, data.rn), bE.ro.v8(data.rj, 5), bB.aQO(32, data.value), ay.x.send(0, bB.aB)
	}
}

function aPJ() {
	this.oV = function() {
		for (var eY = aC.jn, yb = bP.result.yb, kV = yb.length, zM = (bB.a6(17 + 16 * eY + 33 * kV), bB.a7(1, 1), bB.a7(4, 12), bB.a7(10, kV), bB.a7(1, +(2 === aC.yj)), bB.a7(1, aC.z3 % 2), af.zM), aA = 0; aA < eY; aA++) bB.a7(16, zM[aA]);
		for (var gL = af.gL, aA = 0; aA < kV; aA++) {
			var g5 = yb[aA];
			bB.a7(9, g5), bB.a7(24, gL[g5])
		}
		ay.x.send(ay.x.a06, bB.aB)
	}
}

function aPK() {
	this.aN7 = function(s5, s6, s7) {
		bB.a6(75), bB.a7(1, 0), bB.a7(6, 21), bB.a7(6, s5), bB.a7(1, +(s6 < 0)), bB.a7(1, +(s7 < 0)), bB.a7(30, Math.abs(s6)), bB.a7(30, Math.abs(s7)), ay.x.send(0, bB.aB)
	}, this.aN8 = function(s5, aN9, aNA) {
		bB.a6(18 + 16 * aN9.length + 30), bB.a7(1, 0), bB.a7(6, 22), bB.a7(6, s5), ay.aAY.aQo(aN9), bB.a7(30, aNA), ay.x.send(0, bB.aB)
	}, this.aND = function(s5, aN9, aNA) {
		bB.a6(73), bB.a7(1, 0), bB.a7(6, 28), bB.a7(6, s5), bE.ro.v8(aN9, 5), bB.a7(30, aNA), ay.x.send(0, bB.aB)
	}, this.aNB = function(aME, zU) {
		for (var eY = zU.length, hQ = 0, aA = 0; aA < eY; aA++) hQ += zU[aA].length;
		for (bB.a6(21 + 3 * eY + 16 * hQ), bB.a7(1, 0), bB.a7(6, 23), bB.a7(3, aME), bB.a7(4, eY), bB.a7(7, hQ), aA = 0; aA < eY; aA++) bB.a7(3, zU[aA].length), bD.us.v7(zU[aA]);
		ay.x.send(0, bB.aB)
	}, this.aNC = function(aME, s6, s7) {
		bB.a6(52), bB.a7(1, 0), bB.a7(6, 24), bB.a7(3, aME), bB.a7(1, +(s6 < 0)), bB.a7(1, +(s7 < 0)), bB.a7(20, Math.abs(s6)), bB.a7(20, Math.abs(s7)), ay.x.send(0, bB.aB)
	}
}

function aPG() {
	this.aE0 = function(zx) {
		var username = bh.km.data[122].value.slice(0, 20),
			username = (bB.a6(24 + 16 * username.length + 18 + 18), bB.a7(1, 0), bB.a7(6, 1), bB.a7(10, l.dm), bB.a7(2, bh.km.data[158].value), ay.aAY.aQo(username), b8.color.a1m(bh.x.uX())),
			username = (bB.a7(6, username[0]), bB.a7(6, username[1]), bB.a7(6, username[2]), b5.aAc());
		bB.a7(9, username[0]), bB.a7(9, username[1]), ay.x.a05 = zx, ay.x.send(zx, bB.aB)
	}, this.aCf = function(aQr, a2i) {
		bC.dU(), bC.a7(1, 0), bC.a7(6, 2), bC.a7(3, aQr), 2 === aQr ? bC.a7(2, a2i) : 3 === aQr ? bD.uu.yF(a2i, 7, bC) : 5 === aQr && (bC.a7(3, a2i.id), bC.a7(3, a2i.value), bC.a7(30, a2i.rj)), ay.x.send(ay.x.a05, bC.aQs())
	}
}

function aPH() {
	this.aPi = function(zx) {
		bB.a6(39), bB.a7(1, 0), bB.a7(6, 13), bB.a7(14, l.dg), bB.a7(4, z.id), bB.a7(7, z.dk), bB.a7(1, +l.a8), bB.a7(1, +l.a9), bB.a7(5, (new Date).getHours() % 24), ay.x.send(zx, bB.aB)
	}, this.aQe = function(zx, q3, aQK) {
		bB.a6(70), bB.a7(1, 0), bB.a7(6, 14), bB.a7(3, aQK), bB.a7(30, q3[0]), bB.a7(30, q3[1]), ay.x.send(zx, bB.aB)
	}, this.aN5 = function(id) {
		bB.a6(13), bB.a7(1, 0), bB.a7(6, 15), bB.a7(6, id), ay.x.send(0, bB.aB)
	}, this.aAZ = function(id, pD) {
		var eY = Math.min(pD.length, 63);
		bB.a6(19 + 16 * eY), bB.a7(1, 0), bB.a7(6, 26), bB.a7(6, id), bB.a7(6, eY), bD.us.v7(pD), ay.x.send(0, bB.aB)
	}, this.aQu = function(aQE, pO) {
		bB.a6(7 + 26 * pO.length), bB.a7(1, 0), bB.a7(6, 9);
		for (var aA = 0; aA < pO.length; aA++) bB.a7(16, pO[aA][0]), bB.a7(10, pO[aA][1]);
		ay.x.send(aQE, bB.aB)
	}, this.aPp = function(aQv, aQw) {
		bB.a6(20), bB.a7(1, 0), bB.a7(6, 19), bB.a7(1, aQv), bB.a7(12, aQw), ay.x.send(ay.x.a06, bB.aB)
	}, this.aQo = function(username) {
		bB.a7(5, username.length), bD.us.v7(username)
	}
}

function aPg() {
	var zx, aKX, aQx, aQy = ["wss://", "/s50/", "/s51/", "/s52/"],
		aQz = 0;

	function aPh() {
		ay.x.aPh(zx, aKX)
	}

	function aR4(e) {
		ay.a5I.aPr(zx, new Uint8Array(e.data))
	}

	function aR5() {}

	function aPo(e) {
		ay.x.aPo(zx, e)
	}
	this.dU = function(dx, aR0) {
		zx = dx, aKX = aR0, dx = aQy[0] + ay.x.aPV[zx] + aQy[1 + l.dh], (aQx = new WebSocket(__fx.customLobby.isActive() && 1 === zx ? __fx.customLobby.getSocketURL() : dx)).binaryType = "arraybuffer", aQx.onopen = aPh, aQx.onmessage = aR4, aQx
			.onclose = aPo, aQx.onerror = aR5
	}, this.aR2 = function() {
		return aQx.readyState === aQx.CONNECTING
	}, this.aLN = function() {
		return aQx.readyState === aQx.OPEN
	}, this.aPb = function() {
		return aQz
	}, this.aPj = function() {
		aQz = 1
	}, this.aPd = function() {
		return this.aR2() || this.aLN()
	}, this.aPe = function(aR0) {
		aKX = aR0
	}, this.aQg = function() {
		return aKX
	}, this.send = function(aB) {
		this.aLN() && aQx.send(aB)
	}, this.close = function(aPl) {
		this.aPd() && (aQx.close(aPl), this.qn())
	}, this.qn = function() {
		aQx.onopen = null, aQx.onmessage = null, aQx.onclose = null, aQx.onerror = null
	}
}

function dE() {
	var aR6 = !1,
		a5d = 0,
		i = 0,
		rs = 0,
		gap = 0,
		canvas = null,
		x3 = null,
		a1M = null;

	function aR8() {
		for (var aRE, aRC = 0, eY = 0, et = Math.floor(i / 2), dw = Math.floor(rs / 2), aRD = 1.5 * Math.PI, aA = aC.w7; 0 <= aA; aA--) eY += a1M[aA], 0 === a1M[aA] && aRC++;
		if (aR6 = !1, x3.clearRect(0, 0, i, i), x3.fillStyle = b9.mb, x3.fillRect(0, 0, i, i), x3.fillStyle = b9.me, x3.fillRect(0, 0, i, gap), x3.fillRect(0, 0, gap, i), x3.fillRect(i - gap, 0, gap, i), x3.fillRect(0, i - gap, i, gap), 0 < eY)
			if (aRC === aC.w7) {
				for (aA = aC.w7; 0 <= aA; aA--)
					if (0 < a1M[aA]) {
						! function(aA, et, dw) {
							x3.fillStyle = be.aRL[be.k9[aA]], x3.beginPath(), x3.arc(et, et, dw, 0, 2 * Math.PI), x3.fill()
						}(aA, et, dw);
						break
					}!
				function(et) {
					var fontSize = et / 3;
					x3.font = b8.pW.rL(1, fontSize), x3.fillStyle = b9.me, x3.fillText("100%", et, et + .1 * fontSize)
				}(et)
			} else {
				for (aA = 0; aA <= aC.w7; aA++) 0 < a1M[aA] && (! function(aA, et, dw, aRD, aRE) {
					x3.fillStyle = be.aRL[be.k9[aA]], x3.beginPath(), x3.arc(et, et, dw, aRD, aRE), x3.lineTo(et, et), x3.fill()
				}(aA, et, dw, aRD, aRE = aRD + 2 * Math.PI * a1M[aA] / eY), function(et, dw, aRD, aRE) {
					var f0 = (aRE - aRD) / (2 * Math.PI),
						fontSize = (__fx.settings.detailedTeamPercentage ? 0.75 : 1) * dw * Math.min(f0, .37);
					fontSize < 8 || (aRD = (aRD + aRE) / 2, aRE = (__fx.settings.detailedTeamPercentage ? (100 * f0).toFixed(2) : Math.floor(100 * f0 + .5)) + "%", dw *= .525 - Math.max(.6 * (f0 - .7), 0), x3.font = b8.pW.rL(1, fontSize), x3
						.fillStyle = b9.me, x3.fillText(aRE, et + Math.cos(aRD) * dw, et + Math.cos(aRD + 1.5 * Math.PI) * dw))
				}(et, dw, aRD, aRE), 0 !== aA && aRJ(et, dw, aRD), aRD = aRE);
				aRJ(et, dw, 1.5 * Math.PI)
			}!
		function(et, dw) {
			x3.beginPath(), x3.arc(et, et, dw, 0, 2 * Math.PI), x3.stroke()
		}(et, dw)
	}

	function aRJ(et, dw, aRM) {
		x3.beginPath(), x3.moveTo(et, et), x3.lineTo(et + Math.cos(aRM) * dw, et + Math.cos(aRM + 1.5 * Math.PI) * dw), x3.stroke()
	}
	this.dU = function() {
		if (aC.hN) {
			a5d = 0, a1M = new Uint32Array(aC.w7 + 1);
			for (var aA = aC.w7; 0 <= aA; aA--) a1M[aA] = 0;
			for (aA = ak.jo - 1; 0 <= aA; aA--) a1M[be.eW[ak.jp[aA]]] += 1;
			this.resize()
		} else a1M = x3 = canvas = null
	}, this.a6R = function() {
		return i
	}, this.resize = function() {
		aC.hN && (i = Math.floor(z.a0.qu() && !aC.m7 ? .18 * h.min : .13 * h.pY), i = (i *= 1 + (.5 + .2 * z.a0.qu()) * aC.m7) + i % 2, rs = Math.floor(7 * i / 8), (canvas = canvas || document.createElement("canvas")).width = i, canvas.height =
			i, x3 = canvas.getContext("2d", {
				alpha: !0
			}), gap = Math.max(1, .015 * i), x3.lineWidth = gap, x3.strokeStyle = b9.me, b8.pW.textAlign(x3, 1), b8.pW.textBaseline(x3, 1), aR8())
	}, this.a2e = function() {
		var di, kz = this.l0();
		return be.k9[kz] || (kz = function() {
			for (var kz = -1, aA = aC.w7; 1 <= aA; aA--)(-1 === kz || a1M[aA] > a1M[kz]) && (kz = aA);
			return kz
		}(), di = af.gL[l3[0]], -1 !== kz && a1M[kz] > di) ? a1M[kz] : di
	}, this.zk = function() {
		return a5d = 31, this.ih(), this.l0()
	}, this.l0 = function() {
		for (var kz = 0, aA = aC.w7; 0 < aA; aA--) a1M[aA] > a1M[kz] && (kz = aA);
		return kz
	}, this.l1 = function(aRA) {
		for (var g0 = 0, jp = ak.jp, eW = be.eW, eY = ak.jo, fB = bM.fB, aA = 0; aA < eY; aA++) {
			var g5 = jp[aA];
			eW[g5] === aRA && (fB[g0++] = g5)
		}
		bM.f3[0] = g0
	}, this.a2G = function() {
		for (var g0 = 0, aA = aC.w7; 0 <= aA; aA--) g0 += 0 < a1M[aA];
		return g0
	}, this.ih = function() {
		if (aC.hN && 32 <= ++a5d) {
			a5d = 0;
			for (var aA = aC.w7; 0 <= aA; aA--) a1M[aA] = 0;
			for (aA = ak.jo - 1; 0 <= aA; aA--) a1M[be.eW[ak.jp[aA]]] += af.gL[ak.jp[aA]];
			aR6 = !0
		}
	}, this.lP = function() {
		aC.hN && aR6 && aR8()
	}, this.td = function() {
		aC.hN && (aC.m7 ? te.drawImage(canvas, ba.gap, ba.gap) : te.drawImage(canvas, ba.gap, a6S + 2 * ba.gap))
	}
}

function cx() {
	function aRO(key) {
		var aOd;
		return "undefined" == typeof URLSearchParams || (aOd = window.location.search, "string" != typeof(aOd = new URLSearchParams(aOd).get(key))) || aOd.length < 1 ? null : aOd
	}
	this.dd = function() {
		if (0 !== z.id) return !1;
		if (! function() {
				var value = aRO("account");
				if (!value && !(value = aRO("a"))) return void bG.clear();
				return bG.clear(), s.t(8, s.rl, new rm(1e3, {
					rn: 0,
					rj: value,
					rk: 0
				})), 1
			}()) {
			var value = aRO("replay");
			if (!this.clear()) return !1;
			if (!value) return !1;
			s.t(3, 0, value)
		}
		return !0
	}, this.clear = function() {
		var zu = new URL(window.location.href);
		zu.search = "";
		try {
			return history.replaceState(null, "", zu.toString()), !0
		} catch (e) {
			console.log("error 352: " + e)
		}
		return !1
	}, this.aLk = function(key, value) {
		if (0 === z.id) try {
			var zu = new URL(window.location.href),
				g5 = zu.searchParams;
			g5.set(key, value), zu.search = g5.toString(), history.replaceState(null, "", zu.toString())
		} catch (e) {
			console.log("error 358: " + e)
		}
	}
}

function ce() {
	var aRQ, g;
	this.dU = function() {
		for (var aA = (g = new Uint16Array(101)).length - 1; 0 <= aA; aA--) g[aA] = bJ.dj(32768 * aA, 100);
		this.a3P(0)
	}, this.value = function(g5) {
		return g[g5]
	}, this.aIs = function() {
		return bJ.dj(aRQ - 1, 2)
	}, this.a3P = function(aIX) {
		aRQ = 2 * aIX % 32768 + 1
	}, this.random = function() {
		return aRQ = 167 * aRQ % 32768
	}, this.j5 = function(lX) {
		return bJ.dj(lX * this.random(), 32768)
	}, this.jf = function(g5) {
		return 0 !== g5 && this.random() < this.value(g5)
	}, this.iR = function(er, es) {
		return er + this.j5(es - er)
	}
}

function ct() {
	this.om = new aRR, this.a3a = new aRS, this.aGD = new aRT, this.dU = function() {
		aC.gh || this.om.dU()
	}, this.ih = function() {
		aC.gh || (this.om.ih(), 3 !== s.rl) || bd.jk() % 15 != 5 && 2 !== aC.ym || s.aDF().aOe()
	}, this.aOh = function() {
		0 === aC.ym && aZ.aEA(), aC.a3K.a3i(), aC.data.canvas = null, ay.x.close(ay.x.a06, 3257), ay.x.a06 = 0, aC.data.isReplay = 1, aC.a3N()
	}, this.aOg = function(pD) {
		var aA = pD.indexOf("=");
		return 0 <= aA ? pD.substring(aA + 1) : pD
	}, this.aOf = function(pD) {
		return "https://territorial.io/?replay=" + pD
	}
}

function aRR() {
	this.aRV = null, this.aRW = null, this.aRX = null, this.aRY = null, this.aRZ = null, this.aRa = null, this.a3Z = "";
	var aRb = 0;
	this.dU = function() {
		this.aRV = [], this.aRW = [], this.aRX = [], this.aRY = [], this.aRZ = [0], this.aRa = [0], aRb = 0, this.a3Z = ""
	}, this.on = function(id, fF, fH, fJ) {
		aC.gh || 2 === aC.ym || (0 === this.aRZ[aRb] && (this.aRa[aRb] ? (this.aRZ.push(1), this.aRa.push(0), aRb++) : this.aRZ[aRb] = 1), this.aRV.push(id), this.aRW.push(fF), this.aRX.push(void 0 === fH ? 0 : fH), this.aRY.push(void 0 === fJ ?
			0 : fJ), this.aRa[aRb]++)
	}, this.ih = function() {
		0 === this.aRZ[aRb] ? this.aRa[aRb]++ : (this.aRZ.push(0), this.aRa.push(0), aRb++)
	}
}

function aRT() {
	var aRc = 0;

	function aRg(pD, id) {
		aRc || (id ? 1 === id ? aM.a4k = L(413) + ": " + pD : s.t(4, 3, new u(L(414), pD, 1)) : s.t(4, 3, new u("⚠️ " + L(412), pD, 1)))
	}
	this.vC = function(pD, aRd) {
		var pO;
		return aRc = aRd, bE.ro.v4(bE.ro.v2(bE.ro.v0(pD))), aM.a4k = "", !(! function() {
			if (bF.size < 10) aRg("File Too Small");
			else {
				var aRi = bF.oX(12),
					aQw = (aRi !== l.rVersion && aRg("Incompatible Version " + aRi + " " + l.rVersion, 1), bF.oX(12)),
					aRj = bF.oX(31);
				if (aRj !== bF.size) aRg("Size Error: " + aRj + " " + bF.size);
				else if (function(j, aRi) {
						for (var g5 = bF.aB, eY = bF.size, aQw = aRi, aA = 3; aA < eY; aA++) aQw = aQw + g5[aA] & 4095;
						return aQw === j || (aRg("Hash Error: " + aQw + " " + j + " " + eY), !1)
					}(aQw, aRi)) return 1
			}
			return
		}() || (aRd = bF, (pO = aC.data = new a3J).mapType = aRd.oX(2), pO.mapProceduralIndex = aRd.oX(8), pO.mapRealisticIndex = aRd.oX(8), pO.mapSeed = aRd.oX(14), pO.mapName = aRd.aRl(5), 2 === pO.mapType && aRd.aRm(), pO
			.passableWater = aRd.oX(1), pO.passableMountains = aRd.oX(1), pO.playerCount = aRd.oX(10), pO.humanCount = aRd.oX(10), pO.selectedPlayer = aRd.oX(9), pO.gameMode = aRd.oX(1), pO.playerMode = aRd.oX(2), pO.battleRoyaleMode =
			aRd.oX(2), pO.numberTeams = aRd.oX(4), pO.isZombieMode = aRd.oX(1), pO.isContest = aRd.oX(1), pO.isReplay = aRd.oX(1), pO.elo = aRd.aRn(2, 14, 2), pO.colorsType = aRd.oX(1), pO.colorsPersonalized = aRd.oX(1), pO.colorsData =
			aRd.aRn(10, 18, 512), pO.selectableColor = aRd.oX(1), pO.teamPlayerCount = aRd.aRn(4, 10, 9), pO.neutralBots = aRd.oX(1), pO.botDifficultyType = aRd.oX(2), pO.botDifficultyValue = aRd.oX(4), pO.botDifficultyTeam = aRd.aRn(4,
				4, 9), pO.botDifficultyData = aRd.aRn(10, 4, 512), pO.spawningType = aRd.oX(2), pO.spawningSeed = aRd.oX(14), pO.spawningData = aRd.aRn(11, 12, 1024), pO.selectableSpawn = aRd.oX(1), pO.playerNamesType = aRd.oX(2), pO
			.playerNamesData = aRd.aRo(10, 5, 512), pO.selectableName = aRd.oX(1), pO.aIncomeType = aRd.oX(2), pO.aIncomeValue = aRd.oX(8), pO.aIncomeData = aRd.aRn(10, 8, 512), pO.tIncomeType = aRd.oX(2), pO.tIncomeValue = aRd.oX(8), pO
			.tIncomeData = aRd.aRn(10, 8, 512), pO.iIncomeType = aRd.oX(2), pO.iIncomeValue = aRd.oX(8), pO.iIncomeData = aRd.aRn(10, 8, 512), pO.sResourcesType = aRd.oX(2), pO.sResourcesValue = aRd.oX(11), pO.sResourcesData = aRd.aRn(10,
				11, 512), ! function() {
				var hs = bF,
					vD = hs.oX(5),
					aRp = hs.oX(30),
					aRq = hs.oX(30);
				if (aRp + aRq > 8 * hs.size) return void aRg("Corrupted File");
				return function(eY) {
						var aRt = new Uint8Array(eY),
							aRu = new Uint16Array(eY),
							aRv = new Uint32Array(eY),
							aRw = new Uint32Array(eY);
						b7.om.aRV = aRt, b7.om.aRW = aRu, b7.om.aRX = aRv, b7.om.aRY = aRw;
						for (var aA = 0; aA < eY; aA++) {
							var id = bF.oX(4);
							aRt[aA] = id, aRu[aA] = bF.oX(9), 0 === id ? aRv[aA] = bF.oX(22) : 1 === id ? (aRv[aA] = bF.oX(10), aRw[aA] = bF.oX(10)) : 2 === id ? (aRv[aA] = bF.oX(10), aRw[aA] = bF.oX(9)) : 3 === id || 4 === id ? (aRv[
								aA] = bF.oX(10), aRw[aA] = bF.oX(22)) : 5 === id || 6 === id ? aRv[aA] = bF.oX(10) : 7 === id ? aRv[aA] = bF.oX(1) : 10 === id && (aRv[aA] = bF.oX(20), aRw[aA] = bF.oX(22))
						}
					}(aRp),
					function(eY, vD) {
						var aRZ = new Uint8Array(eY),
							aRa = new Array(eY);
						aRa.fill(0), b7.om.aRZ = aRZ, b7.om.aRa = aRa;
						for (var aA = 0; aA < eY; aA++) aRZ[aA] = bF.oX(1), aRa[aA] = bF.oX(vD)
					}(aRq, vD), 1
			}()) || (bF.dx < 8 * bF.size - 13 || bF.dx > 8 * bF.size ? (aRg("Out Of Bounds Error: " + bF.dx + " " + 8 * bF.size), 1) : (b7.om.a3Z = pD, 2 === aC.data.mapType && (aRg("Load base64 image...", 2), 1))))
	}, this.aGE = function(aFo, aRh) {
		var a1h = document.createElement("canvas"),
			hV = a1h.getContext("2d");
		if (a1h.width = aFo.width, a1h.height = aFo.height, hV.drawImage(aFo, 0, 0), aRc || aRh) return aC.ym ? void 0 : (aC.data.canvas = a1h, aC.data.mapType = 2, s.w(), void s.t(19));
		b7.aOh()
	}
}

function aRS() {
	this.yF = function() {
		var vD = function() {
				for (var aRa = b7.om.aRa, eY = aRa.length, max = 0, aA = 0; aA < eY; aA++) max = Math.max(max, aRa[aA]);
				return vK(Math.max(max, 1))
			}(),
			i = (pO = aC.data, (i = bC).dU(), i.a7(12, l.rVersion), i.dx += 43, i.a7(2, pO.mapType), i.a7(8, pO.mapProceduralIndex), i.a7(8, pO.mapRealisticIndex), i.a7(14, pO.mapSeed), i.aS3(pO.mapName, 5), 2 === pO.mapType && i.aS4(pO.canvas),
				i.a7(1, pO.passableWater), i.a7(1, pO.passableMountains), i.a7(10, pO.playerCount), i.a7(10, pO.humanCount), i.a7(9, pO.selectedPlayer), i.a7(1, pO.gameMode), i.a7(2, pO.playerMode), i.a7(2, pO.battleRoyaleMode), i.a7(4, pO
					.numberTeams), i.a7(1, pO.isZombieMode), i.a7(1, pO.isContest), i.a7(1, pO.isReplay), i.db(pO.elo, 2, 14), i.a7(1, pO.colorsType), i.a7(1, pO.colorsPersonalized), i.db(pO.colorsData, 10, 18), i.a7(1, pO.selectableColor), i.db(
					pO.teamPlayerCount, 4, 10), i.a7(1, pO.neutralBots), i.a7(2, pO.botDifficultyType), i.a7(4, pO.botDifficultyValue), i.db(pO.botDifficultyTeam, 4, 4), i.db(pO.botDifficultyData, 10, 4), i.a7(2, pO.spawningType), i.a7(14, pO
					.spawningSeed), i.db(pO.spawningData, 11, 12), i.a7(1, pO.selectableSpawn), i.a7(2, pO.playerNamesType), i.aS5(pO.playerNamesData, 10, 5), i.a7(1, pO.selectableName), i.a7(2, pO.aIncomeType), i.a7(8, pO.aIncomeValue), i.db(pO
					.aIncomeData, 10, 8), i.a7(2, pO.tIncomeType), i.a7(8, pO.tIncomeValue), i.db(pO.tIncomeData, 10, 8), i.a7(2, pO.iIncomeType), i.a7(8, pO.iIncomeValue), i.db(pO.iIncomeData, 10, 8), i.a7(2, pO.sResourcesType), i.a7(11, pO
					.sResourcesValue), i.db(pO.sResourcesData, 10, 11), ! function(vD) {
					var i = bC,
						aRV = b7.om.aRV,
						fF = b7.om.aRW,
						fH = b7.om.aRX,
						fJ = b7.om.aRY,
						eY = aRV.length;
					i.a7(5, vD), i.a7(30, eY), i.a7(30, b7.om.aRa.length);
					for (var aA = 0; aA < eY; aA++) {
						var et = aRV[aA];
						i.a7(4, et), i.a7(9, fF[aA]), 0 === et ? i.a7(22, fH[aA]) : 1 === et ? (i.a7(10, fH[aA]), i.a7(10, fJ[aA])) : 2 === et ? (i.a7(10, fH[aA]), i.a7(9, fJ[aA])) : 3 === et || 4 === et ? (i.a7(10, fH[aA]), i.a7(22, fJ[aA])) :
							5 === et || 6 === et ? i.a7(10, fH[aA]) : 7 === et ? i.a7(1, fH[aA]) : 10 === et && (i.a7(20, fH[aA]), i.a7(22, fJ[aA]))
					}
				}(vD), ! function(vD) {
					for (var i = bC, aRZ = b7.om.aRZ, aRa = b7.om.aRa, eY = aRZ.length, aA = 0; aA < eY; aA++) i.a7(1, aRZ[aA]), i.a7(vD, aRa[aA])
				}(vD), bC.dx),
			pO = bJ.dj(i - 1, 6) + 1,
			vD = (bB.aQP(6 * pO) !== bC.g.length && bC.g.push(0), ! function() {
				var i = bC;
				i.dx = 24, i.a7(31, i.g.length), i.dx = 12, i.a7(12, function() {
					for (var g = bC.g, eY = g.length, aQw = l.rVersion, aA = 3; aA < eY; aA++) aQw = aQw + g[aA] & 4095;
					return aQw
				}())
			}(), bF.dU(bC.g), bD.ro.rp(bD.ro.rq(pO)));
		return bF.t7(), bC.dU(), vD
	}
}

function cj() {
	var et, bp = !1,
		aS7 = !1,
		aS8 = -1e4,
		aS9 = -1,
		aSA = 0;

	function resize(aSE) {
		et = 0, aa.sD() && (aSC(aSE) || bp) && (bp = !1, ba.resize(), bU.aA9.resize(), aX.dU(), bW.dU(), aY.resize(), aS.resize(), aN.resize(), s.resize(), 1 <= aC.ym ? (aU.resize(!1), aT.resize(), aV.resize(), aR.resize(), aQ.resize(), aM.resize(),
			aL.resize(), bA.resize(), au.resize(), aO.resize(), aP.resize(), aK.resize(), bc.resize(), ae.resize(), aW.resize(), bf.resize(), aR.a7W()) : (aZ.aEC(), aZ.aED()), bd.dc = !0)
	}

	function aSB(f0) {
		return f0 && 128 < f0 ? Math.floor(f0) : 128
	}

	function aSC(aSE) {
		var i, j, aSG, rs, a6v;
		if (!(0 < h.rT)) return rs = aSB(document.documentElement.clientWidth), a6v = aSB(window.visualViewport && 2 !== z.id ? window.visualViewport.height : document.documentElement.clientHeight), i = rs, j = a6v, aSG = 0 !== z.id || i < j ? 700 :
			1200, aSG = Math.min(aSG / ((i + j) / 2), 1), aSG = 0 === bh.km.data[1].value ? 2 * aSG / 3 : Math.min(aSG + (bh.km.data[1].value - 1) * (1 - aSG) / 2, 1), h.k = (window.devicePixelRatio || 1) * aSG, __fx.hoveringTooltip
			.canvasPixelScale = h.k, aSE && !aS7 ? (aS7 = !0, document.body.removeChild(a0L)) : aS7 && (aS7 = !1, document.body.appendChild(a0L)), i = Math.floor(.5 + rs * h.k), j = Math.floor(.5 + a6v * h.k), i !== h.i || j !== h.j ? (h.i = i, h
				.j = j, h.min = a9l(i, j), h.max = a4z(i, j), h.pY = bJ.dj(i + j, 2), h.ta = i / j, a0L.width = i, a0L.height = j, a0L.style.width = rs + "px", a0L.style.height = a6v + "px", aS9 = bd.e7 + 1e3, 1) : void 0
	}
	this.i = 0, this.j = 0, this.min = 0, this.max = 0, this.pY = 0, this.ta = 1, this.k = 1, this.rT = 0, this.dV = function() {
		this.i = aSB(document.documentElement.clientWidth) + 2, this.j = aSB(document.documentElement.clientHeight) + 2
	}, this.dU = function() {
		et = 1, a0L = document.getElementById("canvasA"), (te = a0L.getContext("2d", {
			alpha: __fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aSC(0)
	}, this.ih = function() {
		50 <= ++et && resize(0), -1 === aS9 || bd.e7 < aS9 || (aS9 = -1, 2e3 * ++aSA >= bd.e7 + 8e3 ? console.log("error 3748") : z.a0.setState(15))
	}, this.df = function(hh) {
		bp = !0, resize(hh)
	}, this.a11 = function() {
		aS8 + 1e3 > bd.e7 || (aS8 = bd.e7, resize(0))
	}
}

function dB() {
	this.aQd = new aSI, this.zf = new aSJ
}

function aSJ() {
	this.zg = function() {
		for (var g5, eY = ak.jo, ya = ak.jp, zM = af.zM, a6k = this.aFX(), aA = 0; aA < eY; aA++) g5 = ya[aA], b8.ft.jB(g5) || (zM[g5] = a6k);
		var os = af.os,
			iq = af.iq,
			ir = af.ir,
			zK = af.zK,
			eY = aC.jn;
		for (aA = 0; aA < eY; aA++)(0 === zK[aA] || ir[aA] < 1 || 2 * os[aA] > 3 * (iq[aA] + ir[aA])) && (zM[aA] = 0);
		var zd = 0;
		for (aA = 0; aA < eY; aA++) zd += 0 < zM[aA];
		return zd
	}, this.aFX = function() {
		return Math.min(65535, bd.jk())
	}
}

function aSI() {
	function aSN(g, f0, hL) {
		for (var aA = 0; aA < 256; aA++) g[aA] = (g[aA] + (f0 >> (aA + hL) % 30 & 1)) % 256
	}
	this.ih = function(aSK, aSL) {
		var g = new Uint8Array(256);
		return function(g, aSK, aSL) {
				var aA, aSP = 3 + (4 + aSK) % 32768,
					aSQ = 12 + aSL % 32768,
					aSR = 17 + ((aSK & aSL) + (aSK | aSL) + aSK) % 32768;
				for (aA = 0; aA < 256; aA++) aSP = 1 + aSP * aSQ % aSR, g[aA] = aSP % 256
			}(g, aSK, aSL), aSN(g, aSK, 2), aSN(g, aSL, 7),
			function(g) {
				var aA, f0, dx = 0;
				for (aA = 0; aA < 3e4; aA++) f0 = g[dx], g[dx] = (f0 + aA + g[(dx + aA) % 256]) % 256, dx = (f0 + aA + dx + (f0 & dx)) % 256
			}(g),
			function(g) {
				var aA, a6v = 1,
					sa = 1;
				for (aA = 0; aA < 256; aA += 2) a6v = (1 + a6v) * (g[aA] + 1) % 1073741824, sa = (1 + sa) * (g[aA + 1] + 1) % 1073741824;
				return [a6v, sa]
			}(g)
	}
}

function cg() {
	var aSS, aST, h0, aSU;
	this.dU = function() {
		var aA, ef, eh, aQp, aSV, i, j, x3, hS, vU, f0, g5, eo, er, a49;
		if (function() {
				if (h0 = !0, aSU = "rgb(" + bQ.vS[0] + "," + bQ.vS[1] + "," + bQ.vS[2] + ")", bQ.aIf(bQ.eE)) return 1;
				return h0 = !1, 0
			}()) aST = null;
		else {
			for (aSS = bJ.dj(96, 4), aSV = 1 === bQ.eE ? (aQp = 0, 160) : (aQp = 128, 32), aSU = "rgb(" + aQp + "," + aQp + "," + aQp + ")", aST = new Array(4), aA = 3; 0 <= aA; aA--) {
				if (aST[aA] = document.createElement("canvas"), i = aA % 2 == 0 ? bQ.ej : aSS, j = aA % 2 == 0 ? aSS : bQ.ek + 2 * aSS, aST[aA].width = i, aST[aA].height = j, vU = (hS = (x3 = aST[aA].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, i, j)).data, aA % 2 == 0)
					for (eh = aSS - 1; 0 <= eh; eh--)
						for (f0 = aSV + Math.floor((eh + 1) * (aQp - aSV) / (aSS + 1)), ef = i - 1; 0 <= ef; ef--) vU[g5 = 4 * ((0 === aA ? aSS - eh - 1 : eh) * i + ef)] = f0, vU[g5 + 1] = f0, vU[g5 + 2] = f0, vU[g5 + 3] = 255;
				else {
					for (ef = aSS - 1; 0 <= ef; ef--)
						for (f0 = aSV + Math.floor((ef + 1) * (aQp - aSV) / (aSS + 1)), eh = j - 1 - aSS; aSS <= eh; eh--) vU[g5 = 4 * (eh * i + (3 === aA ? aSS - ef - 1 : ef))] = f0, vU[g5 + 1] = f0, vU[g5 + 2] = f0, vU[g5 + 3] = 255;
					for (er = 1; 0 <= er; er--)
						for (ef = aSS - 1; 0 <= ef; ef--)
							for (eh = aSS - 1; 0 <= eh; eh--) eo = (Math.pow(ef * ef + eh * eh, .5) + 1) / (aSS + 1), f0 = aSV + Math.floor((1 < eo ? 1 : eo) * (aQp - aSV)), vU[g5 = 4 * ((0 === er ? aSS - eh - 1 : eh + er * (j - aSS)) * i + (
								1 === aA ? ef : aSS - ef - 1))] = f0, vU[g5 + 1] = f0, vU[g5 + 2] = f0, vU[g5 + 3] = 255
				}
				x3.putImageData(hS, 0, 0)
			}
			a49 = aSV, bQ.vN.fillStyle = "rgb(" + a49 + "," + a49 + "," + a49 + ")", bQ.vN.fillRect(0, 0, bQ.ej, 1), bQ.vN.fillRect(0, bQ.ek - 1, bQ.ej, 1), bQ.vN.fillRect(0, 0, 1, bQ.ek), bQ.vN.fillRect(bQ.ej - 1, 0, 1, bQ.ek)
		}
	}, this.wx = function() {
		var er = h0 ? 0 : -aSS;
		aKG(er, er, bQ.ej - 2 * er, bQ.ek - 2 * er, bY.aSY, bY.aSZ, bY.aSa, bY.aSb) || (te.fillStyle = aSU, te.fillRect(0, 0, h.i, h.j))
	}, this.td = function() {
		h0 || (aKF(0, -aSS, bQ.ej, aSS, bY.aSY, bY.aSZ, bY.aSa, bY.aSb) && te.drawImage(aST[0], bY.aSc, bY.aSd - aSS), aKF(bQ.ej, -aSS, aSS, bQ.ek + 2 * aSS, bY.aSY, bY.aSZ, bY.aSa, bY.aSb) && te.drawImage(aST[1], bY.aSc + bQ.ej, bY.aSd - aSS),
			aKF(0, bQ.ek, bQ.ej, aSS, bY.aSY, bY.aSZ, bY.aSa, bY.aSb) && te.drawImage(aST[2], bY.aSc, bY.aSd + bQ.ek), aKF(-aSS, -aSS, aSS, bQ.ek + 2 * aSS, bY.aSY, bY.aSZ, bY.aSa, bY.aSb) && te.drawImage(aST[3], bY.aSc - aSS, bY.aSd - aSS))
	}
}

function d0() {
	this.h1 = new aSe, this.aFV = new aSf, this.x0 = new aSg, this.x = new aSh, this.iH = new aSi, this.a49 = new aSj, this.aSk = new aSl, this.jb = new aSm, this.kP = new aSn, this.aSo = new aSp, this.dU = function() {
		this.x0.dU(), this.x.dU(), this.iH.dU(), this.a49.dU(), this.aSo.dU()
	}, this.td = function() {
		this.aSo.td(), this.x0.td()
	}
}

function aSm() {
	this.ih = function(player) {
		var oj;
		return !!aC.data.passableWater && 0 !== af.gE[player].length && bL.x.ok !== bL.x.k1 && !((oj = bL.x.oj[player]) >= Math.max(3 * am.performance.kq, aD.k1[aD.hC[player]]) || oj === bL.x.ow || !b8.ft.oq(player, aD.jz[aD.hC[player]], 32,
			0) || !am.iU.ih(player) && !am.iW.ih(player) || ! function(a2J) {
				var aSs = bM.f9[1] + bK.hX[bM.f9[2] - 1] << 2;
				if (ab.eP(aSs)) return 1;
				return aSs = ab.eQ(aSs), a2J !== aSs && !!eR(a2J, aSs)
			}(player)) && function(player) {
			return b8.ft.ot(player), bL.x.oz(player), !0
		}(player)
	}
}

function aSe() {
	function aT0(aA, kr, ks) {
		var aT2, aT1;
		if (!(aA < 0)) return aT1 = bL.x.m3[aA], aT2 = bK.hv(aT1), aT1 = bK.hy(aT1), aA = 20 * (.9 + .1 * Math.log10(bL.x.a5H[aA])), aA = Math.max(aA, bK.iB(b8.pW.sB(.02, 1.7))), bJ.aKN(bK.hu(kr), bK.hx(ks), aT2, aT1, aA)
	}

	function aSu(aSt) {
		var aT5 = 4 + .03 * (1 + 1.5 * z.a0.qu()) * h.pY / i9;
		return bK.hz(aSt, bM.f9[1]) < aT5
	}
	this.h2 = function(player, aSt) {
		return !!(aC.data.passableWater && bK.iC(aSt) && bL.x.ok !== bL.x.k1 && bL.x.oj[player] !== bL.x.ow && 0 !== af.gE[player].length && bL.kP.kQ(player, aSt) && aSu(aSt))
	}, this.o4 = function(player, m0, aSt) {
		return !!(bK.iC(aSt) && this.p0(player, m0) && bL.kP.p1(aSt) && aSu(aSt))
	}, this.p0 = function(player, id) {
		for (var aSv, s6 = player << 3, s7 = s6 + bL.x.oj[player], aSw = bL.x.aSw, aSx = bL.x.aSx, aA = s6; aA < s7; aA++)
			if (id === aSx[aSv = aSw[aA]]) return bM.f9[3] = aSv, !0;
		return !1
	}, this.o3 = function(eK) {
		var a4A = bL.a49.a4A;
		return !!this.p0(aC.eI, a4A) && (b6.gu.o3(a4A, eK), !0)
	}, this.a4C = function(kr, ks) {
		var player = aC.eI,
			eY = bL.x.oj[player];
		if (0 === eY) return !1;
		for (var aSw = bL.x.aSw, m3 = bL.x.m3, s6 = player << 3, aSy = 80, aMV = -1, aA = s6 + eY - 1; s6 <= aA; aA--) {
			var aSz = aSw[aA],
				eo = bK.hp(kr, ks, m3[aSz]);
			eo < aSy && (aSy = eo, aMV = aSz)
		}
		return !!aT0(aMV, kr, ks) && (bL.a49.a4A = bL.x.aSx[aMV], bj.oy.a4C(), !0)
	}, this.a4J = function(kr, ks) {
		var eY = bL.x.ok;
		if (eY < 1) return -1;
		for (var m3 = bL.x.m3, aSy = 80, aMV = -1, aA = 0; aA < eY; aA++) {
			var eo = bK.hp(kr, ks, m3[aA]);
			eo < aSy && (aSy = eo, aMV = aA)
		}
		return aT0(aMV, kr, ks) ? aMV : -1
	}, this.m2 = function(player, id) {
		for (var s6 = player << 3, s7 = s6 + bL.x.oj[player], aSx = bL.x.aSx, aSw = bL.x.aSw, aA = s6; aA < s7; aA++) {
			var aSz = aSw[aA];
			if (aSx[aSz] === id) return aSz
		}
		return -1
	}, this.aFS = function(player) {
		for (var s6 = player << 3, s7 = s6 + bL.x.oj[player], aSw = bL.x.aSw, a5H = bL.x.a5H, hC = 0, aA = s6; aA < s7; aA++) hC += a5H[aSw[aA]];
		return hC
	}, this.m8 = function(player) {
		return 0 === bL.x.oj[player] ? -1 : bL.x.aSw[player << 3]
	}
}

function aSf() {
	this.aFW = function(player) {
		for (var aSw = bL.x.aSw, s6 = player << 3, aA = s6 + bL.x.oj[player] - 1; s6 <= aA; aA--) this.aT6(aSw[aA])
	}, this.aT6 = function(aT7) {
		var x = bL.x,
			aT8 = x.ok - 1,
			aT9 = x.a5G[aT7],
			aTA = x.aTB[aT7],
			aTC = x.m3[aT7];
		x.ok = aT8, x.a5G[aT7] = x.a5G[aT8], x.aTD[aT7] = x.aTD[aT8], x.aTE[aT7] = x.aTE[aT8], x.m3[aT7] = x.m3[aT8], x.aTF[aT7] = x.aTF[aT8], x.a5H[aT7] = x.a5H[aT8], x.aTB[aT7] = x.aTB[aT8], x.aSx[aT7] = x.aSx[aT8], x.aTG[aT7] = x.aTG[aT8], x
			.aTH[aT7] = x.aTH[aT8], x.aSw[x.a5G[aT7]] = aT7,
			function(aRM) {
				var player = aRM >> 3,
					x = bL.x,
					eY = x.oj[player] - 1,
					aTK = (player << 3) + eY;
				x.oj[player] = eY, aTK !== aRM && (x.aSw[aRM] = x.aSw[aTK], x.a5G[x.aSw[aRM]] = aRM)
			}(aT9), bL.iH.iH[bK.iG(x.m3[aT7])][x.aTB[aT7]] = aT7, aT8 = bK.iG(aTC), aT9 = aTA, aT8 = bL.iH.iH[aT8], x = aT8.pop(), aT9 !== aT8.length && (aT8[aT9] = x, bL.x.aTB[x] = aT9)
	}
}

function aSg() {
	var aTM, xP = 8,
		aTN = new Array(2);

	function aTO(dx) {
		var hP = xP + 4,
			a1h = b8.pW.vJ(hP, hP),
			hV = b8.pW.getContext(a1h, !0),
			hS = b8.pW.getImageData(hV, hP, hP),
			vU = hS.data;
		return aTP(vU, hP + 1, dx), aTP(vU, hP + 2, dx), aTP(vU, 2 * hP + 1, dx), aTP(vU, 2 * hP - 3, dx), aTP(vU, 2 * hP - 2, dx), aTP(vU, 3 * hP - 2, dx), aTP(vU, hP * (hP - 3) + 1, dx), aTP(vU, hP * (hP - 2) + 1, dx), aTP(vU, hP * (hP - 2) + 2,
			dx), aTP(vU, hP * (hP - 2) - 2, dx), aTP(vU, hP * (hP - 1) - 3, dx), aTP(vU, hP * (hP - 1) - 2, dx), hV.putImageData(hS, 0, 0), a1h
	}

	function aTP(vU, eK, dx) {
		eK *= 4;
		vU[eK] = 255, vU[1 + eK] = 255, vU[2 + eK] = dx, vU[3 + eK] = 255
	}

	function vJ(player) {
		var a1h = b8.pW.vJ(xP, xP);
		return function(hV, player) {
			var ef, eh, ht, eK, aTR, aTS, hP = xP,
				hS = b8.pW.getImageData(hV, hP, hP),
				vU = hS.data,
				kV = (hP >> 1) - .5,
				aSU = ab.a5r(player),
				aTU = b8.pf.a1F(aSU, .5);
			b8.pf.a1H(aSU, aTU, 300) || b8.pf.a1J(aSU, 100);
			for (eh = 0; eh < hP; eh++)
				for (ef = 0; ef < hP; ef++) aTS = (hP - 1.5) * (hP - 1.5) / 4, aTR = (ht = (ht = ef - kV) * ht + (ht = eh - kV) * ht) <= (hP - 4.5) * (hP - 4.5) / 4 ? aTU : aSU, vU[eK = 4 * (eh * hP + ef)] = aTR[0], vU[1 + eK] = aTR[1], vU[2 +
					eK] = aTR[2], vU[3 + eK] = aTS < ht ? 0 : 255;
			hV.putImageData(hS, 0, 0)
		}(b8.pW.getContext(a1h, !0), player), a1h
	}
	this.dU = function() {
		aTM = new Array(aC.eV), aTN[0] = aTO(255), aTN[1] = aTO(0)
	}, this.td = function() {
		var aA, player, aTV, aKO, hC, hs, aTX, aTZ, aTa, m3 = bL.x.m3,
			a5G = bL.x.a5G,
			a5H = bL.x.a5H,
			aTH = bL.x.aTH,
			aTb = aTM,
			aTc = aC.eI,
			aTd = -1,
			eY = bL.x.ok,
			aTe = h.i,
			aTf = h.j,
			aTg = bQ.ej << 4,
			eN = i9,
			eC = eN / xP,
			m4 = i8 / eN,
			m5 = iA / eN,
			ht = (aTe + i8) / eN - m4,
			hw = (aTf + iA) / eN - m5,
			hV = te;
		for (bL.h1.p0(aC.eI, bL.a49.a4A) && (aTd = bM.f9[3]), hV.imageSmoothingEnabled = eN < 9, b8.pW.textAlign(hV, 1), b8.pW.textBaseline(hV, 1), aA = 0; aA < eY; aA++) player = a5G[aA] >> 3, hC = a5H[aA], aTV = .9 + .1 * Math.log10(hC), aKO =
			(hs = m3[aA]) % aTg / 16 - aTV, hs = aTf * (Math.floor(hs / aTg) / 16 - aTV - m5) / hw, aTX = -2 * (aTa = eN * aTV) * (1 + (aTZ = +(player === aTc)) / 8), aTZ = aTZ * aTa / 4, (aTa = aTe * (aKO - m4) / ht) < aTX || hs < aTX || aTe +
			aTZ < aTa || aTf + aTZ < hs || (aKO = 2 * aTV * eC, aTX = aTV * eN, void 0 === (aTZ = aTb[player]) && (aTb[player] = aTZ = vJ(player)), player === aTc && (hV.setTransform(aKO, 0, 0, aKO, aTa - 2 * aKO, hs - 2 * aKO), hV.drawImage(aTN[
				+(aA === aTd)], 0, 0)), hV.setTransform(aKO, 0, 0, aKO, aTa, hs), hV.drawImage(aTZ, 0, 0), (aTV = Math.floor(function(hC) {
				if (hC < 1e3) return .42;
				if (hC < 1e4) return .34;
				if (hC < 1e6) return .26;
				if (hC < 1e8) return .19;
				return .15
			}(hC) * aTX)) < 6) || (hV.setTransform(1, 0, 0, 1, 0, 0), hV.fillStyle = aTH[aA] ? b9.nC : b9.me, hV.font = b8.pW.rL(1, aTV), hV.fillText(b8.zR.y4(hC), aTa + aTX, hs + aTX + .1 * aTV));
		hV.imageSmoothingEnabled = !1, hV.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aSp() {
	var a1h;
	this.dU = function() {
		a1h = a1h || bN.x.aTj(20, be.aTk[7])
	}, this.td = function() {
		var mO = i9;
		if (!(5 <= mO)) {
			var aTe = h.i,
				aTf = h.j,
				m4 = i8 / mO,
				m5 = iA / mO,
				mH = (aTe + i8) / mO,
				mI = (aTf + iA) / mO,
				g6 = -20 * mO,
				aTl = .5 * g6,
				aTg = bQ.ej << 4,
				eY = bL.x.ok,
				m3 = bL.x.m3,
				aTm = a1h,
				hV = te;
			3 < mO && (hV.globalAlpha = .5 * (5 - mO));
			for (var aA = 0; aA < eY; aA++) {
				var hs = m3[aA],
					ef = aTe * (hs % aTg / 16 - m4) / (mH - m4) + aTl,
					hs = aTf * (Math.floor(hs / aTg) / 16 - m5) / (mI - m5) + aTl;
				aTe < ef || aTf < hs || ef < g6 || hs < g6 || (hV.setTransform(mO, 0, 0, mO, ef, hs), hV.drawImage(aTm, 0, 0))
			}
			hV.globalAlpha = 1, hV.setTransform(mO, 0, 0, mO, 0, 0)
		}
	}
}

function aSl() {
	this.ih = function() {
		for (var aT1, aSk, aTG = bL.x.aTG, m3 = bL.x.m3, aTE = bL.x.aTE, aA = bL.x.ok - 1; 0 <= aA; aA--) aT1 = m3[aA], 0 !== (aSk = aTG[aA]) && aT1 === aTE[aA] && (! function(aA, aTq, hK) {
			var iy, player = bL.x.a5G[aA] >> 3,
				hK = aTq + bK.hX[hK] << 2,
				aA = bL.x.a5H[aA];
			if (bb.aTr(player), ab.eP(hK)) iy = aC.eV;
			else {
				if ((iy = ab.eQ(hK)) === player) return hK = b8.ft.fw(player, aA), bb.fx(player, aA - hK, 12);
				if (!eR(player, iy)) return b6.jq.oI(player, iy, aA)
			}
			ac.j9(player, iy) || ac.jR(player) ? (af.fz[player].push(aTq << 2), ac.iv(player, aA, iy), aE.iw(player, !0)) : bb.fx(player, aA, 12)
		}(aA, bK.iF(aT1), aSk - 1), bL.aFV.aT6(aA))
	}, this.aTs = function(player, eK, hK, m0) {
		if (0 !== hK) {
			var aTc = aC.eI;
			if (b8.ft.gk(aTc) && eR(player, aTc) && player !== aTc && 0 !== af.gE[aTc].length) {
				var aSs = eK + bK.hX[--hK] << 2;
				if (ab.eP(aSs) || eR(player, ab.eQ(aSs))) {
					for (var em = !1, aA = 0; aA < 4; aA++)
						if (aSs = eK + bK.hX[aA] << 2, ab.eT(aSs) && !ab.eP(aSs) && ab.eQ(aSs) === aTc) {
							em = !0;
							break
						} em && (aM.a4B(719, 0), aM.zA(180, L(415, [af.zN[player]]), 719, player, b9.nB, b9.mb, -1, !0, void 0, {
						es: 1,
						m0: m0
					}))
				}
			}
		}
	}
}

function aSh() {
	this.aTt = null, this.k1 = 512, this.ow = 8, this.ok = 0, this.aTu = 0, this.a5G = new Uint16Array(this.k1), this.aTD = new Uint32Array(this.k1), this.aTE = new Uint32Array(this.k1), this.m3 = new Uint32Array(this.k1), this.aTF = new Uint16Array(
			this.k1), this.a5H = new Uint32Array(this.k1), this.aTB = new Uint16Array(this.k1), this.aSx = new Uint16Array(this.k1), this.aTG = new Uint8Array(this.k1), this.aTH = new Uint8Array(this.k1), this.oj = new Uint8Array(aC.eV), this.aSw =
		new Uint16Array(this.ow * aC.eV), this.dU = function() {
			this.aTu = 0, this.ok = 0, this.aTt = new Uint8Array(bQ.ej + bQ.ek), this.oj.fill(0)
		}, this.oz = function(player) {
			var eY = this.ok,
				aTv = bK.iE(bM.f9[0]),
				aTw = this.oj[player],
				aTx = (player << 3) + aTw,
				hC = (this.a5G[eY] = aTx, this.aTD[eY] = aTv, this.m3[eY] = aTv, this.aTE[eY] = bK.iE(bM.f9[1]), this.aTF[eY] = 0, bM.f5[0]);
			hC < 60 ? (b8.ft.fu(player, 60 - hC), this.a5H[eY] = 60) : this.a5H[eY] = hC, this.aTB[eY] = bL.iH.oz(eY, bK.iG(aTv)), this.aSx[eY] = this.aTu, this.aTG[eY] = bM.f9[2], this.aTH[eY] = 0, this.aTu = this.aTu + 1 & 1023, this.aSw[aTx] = eY,
				this.oj[player] = aTw + 1, this.ok++, bL.aSk.aTs(player, bM.f9[1], bM.f9[2], this.aSx[eY])
		}, this.o3 = function() {
			var aSv = bM.f9[3];
			this.aTD[aSv] = this.m3[aSv], this.aTE[aSv] = bK.iE(bM.f9[1]), this.aTF[aSv] = 0, this.aTG[aSv] = bM.f9[2], bL.aSk.aTs(this.a5G[aSv] >> 3, bM.f9[1], bM.f9[2], this.aSx[aSv])
		}, this.ih = function() {
			bL.aSk.ih();
			var aA, g5 = aC.eI,
				di = bL.h1.aFS(g5),
				r8 = (! function(r8) {
					var aA, aU2, aU3, aU4, aU5, aTv, aU9, aUA, eb, g6, aTD = r8.aTD,
						aTE = r8.aTE,
						m3 = r8.m3,
						a5H = r8.a5H,
						aTH = r8.aTH,
						aTF = r8.aTF,
						aTB = r8.aTB,
						r8 = r8.ok,
						aTg = bQ.ej << 4;
					for (aA = r8 - 1; 0 <= aA; aA--) aU3 = m3[aA], aU2 = aTE[aA], aU3 !== aU2 && (aTv = aTD[aA], aU9 = aU2 % aTg - (aU5 = aTv % aTg), aUA = ~~((aU2 + .5) / aTg) - (aTv = ~~((aTv + .5) / aTg)), eb = ~~Math.sqrt(aU9 * aU9 + aUA *
						aUA + .5), g6 = 15e4 + 25e3 * bJ.log10(a5H[aA]), aTH[aA] && (g6 = bJ.dj(g6, 5)), 65535 <= (g6 = aTF[aA] + Math.max(~~((g6 + .5) / eb), 1)) ? m3[aA] = aU4 = aU2 : (aTF[aA] = g6, m3[aA] = aU4 = aU5 + bJ.dj(g6 * aU9,
						65536) + aTg * (aTv + bJ.dj(g6 * aUA, 65536))), aTB[aA] = bL.iH.aUC(aTB[aA], aU3, aU4))
				}(this), ! function(r8) {
					if (bd.jk() % 2 == 1) {
						var aA, hL, kV, es, et, aUD, xk, aUE, gx, m4, m5, aTv, aUF, hb, aUH, vc, eY = r8.ok,
							m3 = r8.m3,
							a5G = r8.a5G,
							a5H = r8.a5H,
							aTH = r8.aTH,
							iH = bL.iH.iH,
							aUJ = iH.length,
							aUK = bL.iH.aUK,
							aTg = bQ.ej << 4,
							aUL = aC.hN,
							aRA = be.eW,
							g6 = (eY - 1) * (bJ.dj(bd.jk(), 2) % 2);
						for (aA = 0; aA < eY; aA++)
							for (hL = Math.abs(aA - g6), aTv = m3[hL], kV = bK.iG(aTv), gx = a5G[hL] >> 3, m4 = aTv % aTg, m5 = ~~((aTv + .5) / aTg), aUH = a5H[hL], es = 0; es < 9; es++)
								if (!((aUD = kV + aUK[es]) < 0 || aUJ <= aUD))
									for (aUE = iH[aUD], xk = aUE.length, et = 0; et < xk; et++) aUF = aUE[et], vc = a5G[aUF] >> 3, gx == vc || aUL && aRA[gx] === aRA[vc] && aRA[gx] || (vc = m3[aUF], (hb = m4 - vc % aTg) * hb + (hb = m5 - ~~((vc +
										.5) / aTg)) * hb < 14400 && (vc = a5H[aUF], hb = vc <= aUH ? Math.max(1, bJ.dj(vc + bJ.dj(aUH - vc, 10), 10)) : Math.max(1, bJ.dj(aUH, 10)), a5H[aUF] = Math.max(vc - hb, 0), aTH[aUF] = 4))
					}
				}(this), ! function(r8) {
					if (bd.jk() % 5 == 3) {
						var aA, hC, a5H = r8.a5H,
							eY = r8.ok;
						for (aA = 0; aA < eY; aA++) hC = a5H[aA], a5H[aA] = Math.max(hC - Math.max(1, hC >> 7), 0)
					}
				}(this), this),
				a5H = r8.a5H,
				aTH = r8.aTH;
			for (aA = r8.ok - 1; 0 <= aA; aA--) aTH[aA] = aTH[aA] >> 1, 0 === a5H[aA] && bL.aFV.aT6(aA);
			bb.fx(g5, di - bL.h1.aFS(g5), 15)
		}
}

function aSi() {
	this.aUM = 32, this.ef = 0, this.eh = 0, this.iI = 0, this.aUN = 0, this.aUO = 4, this.iH = null, this.aUK = new Int16Array(9), this.dU = function() {
		this.iI = 1 + bJ.dj(bQ.ej - 1, this.aUM), this.aUN = 1 + bJ.dj(bQ.ek - 1, this.aUM), this.iH = new Array(this.iI * this.aUN), b8.pf.a1E(this.iH);
		var ef, eh, aUK = this.aUK,
			i = this.iI;
		for (ef = -1; ef <= 1; ef++)
			for (eh = -1; eh <= 1; eh++) aUK[3 * (1 + eh) + 1 + ef] = eh * i + ef
	}, this.oz = function(aUQ, aA) {
		return this.iH[aA].push(aUQ), this.iH[aA].length - 1
	}, this.aUC = function(aUR, aTv, aU2) {
		var aUS, aUT, aTv = bK.iG(aTv),
			aU2 = bK.iG(aU2);
		return aTv === aU2 ? aUR : (aUS = this.iH[aTv].pop(), this.iH[aTv].length === aUR ? this.oz(aUS, aU2) : (aUT = this.iH[aTv][aUR], this.iH[aTv][aUR] = aUS, bL.x.aTB[aUS] = aUR, this.oz(aUT, aU2)))
	}
}

function aSn() {
	function a09(aU2, aUU) {
		if (! function(aU2, aSt) {
				var ha = bK.iF(aU2),
					aUY = Math.abs(bK.eg(aSt) - bK.eg(ha)),
					ha = Math.abs(bK.ei(aSt) - bK.ei(ha));
				return 0 !== Math.max(aUY, ha) && (function(aTv, aU2, aUY, aUZ) {
					var aUb = bK.hv(aTv),
						aTv = bK.hy(aTv),
						aUd = bK.hv(aU2),
						aU2 = bK.hy(aU2),
						aUd = aUd - aUb,
						aU2 = aU2 - aTv,
						aUh = Math.abs(aUd),
						aUi = Math.abs(aU2),
						aUd = 0 < aUd ? 1 : 3,
						aU2 = 0 < aU2 ? 2 : 0;
					aUi < aUh ? aUl(aUb, aTv, aUb + aUh, aTv + aUi, aUd, aU2, aUY) : aUl(aTv, aUb, aTv + aUi, aUb + aUh, aU2, aUd, aUZ)
				}(aU2, bK.iE(aSt), aUY, ha), !0)
			}(aU2, aUU)) return !1;
		if (0 === bM.f2[0]) return !!ab.h0(aUU << 2);
		if (! function(aSt) {
				if (ab.h0(aSt << 2)) return 1;
				return function(aSt) {
					var aA, hK, aTt = bL.x.aTt,
						aUp = bK,
						eY = bM.f2[0],
						aUq = 4 * aSt;
					for (aA = eY - 1; 0 <= aA; aA--) {
						hK = aTt[aA];
						var aUr = aUq;
						if (aUq = aUp.iK(aUq, hK + 2 & 3), ab.h0(aUq)) return bM.f2[0] = aA, bM.f9[1] = aUq >> 2, bM.f9[2] = 1 + hK, bM.f9[4] = aUr, 1
					}
					return
				}(aSt)
			}(aUU)) return !1;
		if (bM.f9[2] && ab.ed(bM.f9[4])) return !1;
		var aA, aUU = bK.iF(aU2),
			vU = aAH,
			aTt = bL.x.aTt,
			eY = bM.f2[0] - 1,
			aUq = 4 * aUU,
			hY = bK.hY;
		for (aA = 0; aA < eY; aA++)
			if (aUq += hY[aTt[aA]], 0 !== vU[aUq + 3] || 2 !== vU[aUq + 2]) return !!void 0;
		return !!1
	}

	function aUl(aUb, aUc, aUd, aUe, aUj, aUk, aUY) {
		for (var eh, aTt = bL.x.aTt, g6 = 0, aUm = 0, j = aUe - aUc, i = aUd - aUb, aUn = aUb % 16, aA = 1; aA <= aUY; aA++) aTt[g6++] = aUj, aTt[g6] = aUk, g6 += (eh = (j * (aUn + (aA << 4)) + .5) / i >> 4) - aUm, aUm = eh;
		bM.fE(bM.f2, g6)
	}
	this.kQ = function(player, aUU) {
		var hK, ha, gw = bK.hi(player, aUU);
		return gw !== aUU && (hK = bK.hZ(gw, aUU), ha = bK.iJ(gw, hK), !(!ab.h0(ha << 2) && (hK = bK.hg(gw, aUU, hK), ha = bK.iJ(gw, hK), !ab.h0(ha << 2)) || (bM.f9[0] = ha, bM.f9[1] = aUU, bM.f9[2] = 0, ha !== aUU && (!a09(bK.iE(ha), aUU) ||
			0 !== bM.f9[2] && bK.ho(player, bM.f9[1] + bK.hX[bM.f9[2] - 1] << 2)))))
	}, this.p1 = function(aUU) {
		var aTv = bL.x.m3[bM.f9[3]];
		return bM.f9[1] = aUU, bM.f9[2] = 0, a09(aTv, aUU)
	}
}

function aSj() {
	var xP = 32,
		xO = new Array(2);

	function vJ(et) {
		var ef, eh, eK, hw, ht, hP = xP,
			a1h = b8.pW.vJ(hP, hP),
			hV = b8.pW.getContext(a1h, !0),
			hS = b8.pW.getImageData(hV, hP, hP),
			vU = hS.data,
			kV = (hP >> 1) - .5,
			kW = Math.sqrt(kV * kV);
		for (vU.fill(255), eh = 0; eh < hP; eh++)
			for (ef = 0; ef < hP; ef++) ht = ef - kV, hw = eh - kV, eK = 4 * (eh * hP + ef), ht = 714 * (kW - Math.sqrt(ht * ht + hw * hw)) / kW, vU[2 + eK] = et, vU[3 + eK] = 255 < ht ? 0 : ht;
		return hV.putImageData(hS, 0, 0), a1h
	}
	this.a4A = -1, this.dU = function() {
		this.a4A = -1, xO[0] || (xO[0] = vJ(255), xO[1] = vJ(0))
	}, this.aUt = function(hV, eC, ef, eh, dw, aA) {
		b8.ft.gk(aC.eI) && (hV.setTransform(eC *= 4 / 3 * .625, 0, 0, eC, ef - (dw *= 4 / 3), eh - dw), hV.drawImage(xO[+(bL.x.aSx[aA] === this.a4A)], 0, 0))
	}
}

function dX() {
	this.aOn = [L(416), L(417), L(418), L(419), L(420), L(421), L(422), L(423), L(424), L(425), L(426), L(427), L(428), L(429), L(430)];
	var aUu = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", ""];
	this.a9x = new Array(aUu.length), this.dU = function() {
		var g = bh.km.data[155].value.split(";"),
			kV = g.length;
		if (function() {
				for (var eY = aUu.length, aA = 0; aA < eY; aA++) bV.a9x[aA] = aUu[aA]
			}(), !(kV > aUu.length))
			for (var aA = 0; aA < kV; aA++) g[aA].length && (this.a9x[aA] = g[aA])
	}, this.aOp = function(dx, code) {
		for (var a9x = this.a9x, aUw = aUu, pD = (a9x[dx] = code, ""), eY = a9x.length, aUx = [], aA = 0; aA < eY; aA++) aUx.push(a9x[aA] === aUw[aA] ? "" : a9x[aA]);
		eY--;
		for (aA = 0; aA < eY; aA++) pD += aUx[aA] + ";";
		bh.qy.qz(155, pD += aUx[eY])
	}, this.aOm = function() {
		bh.qy.qz(155, ""), this.dU()
	}, this.et = function(code, dx) {
		return code === this.a9x[dx] || code === this.a9x[dx + 1]
	}
}

function dS() {
	var aUz = new Array(1),
		aV0 = new Array(1),
		aV1 = 20,
		e6 = 0,
		aV2 = !1;

	function aV4() {
		aV1++, bn.play()
	}
	this.dU = function() {
		if (!window.document.documentMode) {
			for (var aA = 0; 0 <= aA; aA--) ! function(aA, src) {
				aV0[aA] = 0, aUz[aA] = document.createElement("audio"), aUz[aA].src = src, aUz[aA].setAttribute("preload", "auto"), aUz[aA].setAttribute("controls", "none"), aUz[aA].style.display = "none", aUz[aA].onpause = function() {
					aV0[aA] = 1
				}, aUz[aA].oncanplaythrough = function() {
					aV0[aA] = 0 === aV0[aA] ? 1 : aV0[aA]
				}, document.body.appendChild(aUz[aA])
			}(aA,
				"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
				);
			aV2 = !0
		}
	}, this.t7 = function() {
		if (aV2) {
			aV2 = !1;
			for (var aA = 0; 0 <= aA; aA--) aUz[aA].onpause = null, aUz[aA].oncanplaythrough = null, document.body.removeChild(aUz[aA]), aUz[aA] = null
		}
	}, this.play = function() {
		if (aV2) {
			var di = performance.now();
			if (e6 + 66 < di)
				for (var aA = 0; 0 <= aA; aA--)
					if (1 === aV0[aA]) return e6 = di, aV0[aA] = 2, void aUz[aA].play();
			0 < aV1 && (aV1--, setTimeout(aV4, 66))
		}
	}
}

function cU() {
	this.a6i = function() {
		var aV7;
		return !(ak.jo < 3 || af.gL[l3[0]] >= aC.jX >> 1) && (aC.hN ? (aV7 = ad.aGY(), !(2 * ad.aGZ(bf.l0()) >= aV7)) : function() {
			var aV7 = ad.aGY();
			if (2 * af.gZ[l3[0]] >= aV7) return !1;
			return !0
		}())
	}
}

function c5() {
	this.dU = function() {
		if (0 === aC.data.sResourcesType) {
			for (var aTw = aC.jn, gZ = af.gZ, aA = 0; aA < aTw; aA++) gZ[aA] = 512;
			var aTx = aC.w0,
				k0 = aD.k0,
				hC = aD.hC;
			for (aA = aTw; aA < aTx; aA++) gZ[aA] = k0[hC[aA]]
		} else(1 === aC.data.sResourcesType ? function() {
			for (var eY = aC.w0, gZ = af.gZ, sResourcesValue = aC.data.sResourcesValue, aA = 0; aA < eY; aA++) gZ[aA] = sResourcesValue
		} : function() {
			for (var eY = aC.w0, gZ = af.gZ, sResourcesData = aC.data.sResourcesData, aA = 0; aA < eY; aA++) gZ[aA] = sResourcesData[aA]
		})();
		bb.lY[8] = af.gZ[aC.eI]
	}
}

function dJ() {
	var aVC = 501,
		aVE = (this.aVD = new Uint32Array(aVC), this.a2N = new Uint32Array(aVC), this.a9c = new Uint16Array(aVC), this.aOv = 0, 1),
		aVF = 0;

	function aVI(self) {
		self.max.fill(0)
	}

	function aVK(self, aA) {
		self.max[0] = Math.max(self.aVD[aA], self.max[0]), self.max[1] = Math.max(self.a2N[aA], self.max[1]), self.max[2] = Math.max(self.a9c[aA], self.max[2])
	}
	this.max = [0, 0, 0], this.aVG = 0, this.lY = new Array(21), this.aVH = null, this.dV = function() {
		this.aVH = [L(431), L(432), L(433), L(434), L(435), L(436), L(437), L(438), L(274), L(275), L(439), L(440), L(441), L(442), "", L(443), L(444), L(445), L(234), L(446), L(447)]
	}, this.dU = function() {
		this.aOv = 0, aVE = 1, this.aVG = 0, aVF = 0, aVI(this), this.lY.fill(0)
	}, this.ou = function(player, i7) {
		b8.ft.a2I(player) && (this.lY[0] += i7 + 1, this.lY[1]++, this.lY[12] += bM.f5[1])
	}, this.oK = function(player, nz) {
		__fx.donationsTracker.logDonation(player, nz, bM.f5[0]);
		player === aC.eI && (aM.oK(bM.f5[0], bM.f5[1], nz), this.lY[12] += bM.f5[1], this.lY[16] += bM.f5[0]), nz === aC.eI && (aM.a5U(bM.f5[0], player), this.lY[10] += bM.f5[0])
	}, this.ox = function(player) {
		b8.ft.a2I(player) && (this.lY[2]++, this.lY[12] += bM.f5[1])
	}, this.p8 = function(player) {
		b8.ft.a2I(player) && (this.lY[19]++, this.lY[12] += bM.f5[1])
	}, this.aTr = function(player) {
		b8.ft.a2I(player) && this.lY[20]++
	}, this.fx = function(player, a31, dx) {
		b8.ft.a2I(player) && (this.lY[dx] += a31)
	}, this.ih = function() {
		var self;
		this.aVG || 0 < aVF-- || ((self = this).aVD[self.aOv] = af.gL[aC.eI], self.a2N[self.aOv] = af.gZ[aC.eI], self.a9c[self.aOv] = ad.a9d(aC.eI), aVK(self, self.aOv), self.aOv++, self.aOv === aVC && function(self) {
			aVI(self), aVK(self, 0), self.aOv = 1 + bJ.dj(aVC, 2);
			for (var aA = 1; aA < self.aOv; aA++) self.aVD[aA] = self.aVD[2 * aA], self.a2N[aA] = self.a2N[2 * aA], self.a9c[aA] = self.a9c[2 * aA], aVK(self, aA);
			aVE *= 2
		}(self), aVF = aVE - 1, bc.lP(), 0 === af.lc[aC.eI] && (self.aVG = bd.jk()))
	}
}

function dK() {
	this.i = 0, this.j = 0, this.rs = 0, this.rt = 0, this.aVM = 0, this.aVN = 0, this.a6v = 0, this.sa = 0;
	var aVP = this.aVO = 0;
	this.aVQ = 0, this.aVR = 0, this.aVS = 0, this.a6H = 0, this.dx = 0, this.a9F = null, this.hF = !1, this.aVT = -1, this.aVU = !1, this.aVV = [0, 0], this.dV = function() {
		this.a9F = [L(448), L(119, 0, "Balance"), L(118, 0, "Interest"), L(449)]
	}, this.dU = function() {
		this.hF = !1, this.aVT = -1, this.aVU = !1, this.resize()
	}, this.resize = function() {
		this.i = h.i < 1.369 * h.j ? h.i : 1.369 * h.j;
		var eb = z.a0.qu() && h.i < h.j ? 1 : z.a0.qu() ? .8 : h.i < h.j ? .65 : .59;
		this.i = Math.floor(eb * this.i), this.i -= z.a0.qu() && h.i < h.j ? 2 * ba.gap + 2 : 0, this.j = Math.floor(this.i / 1.369), this.a6H = Math.floor(this.j / 150), this.a6H = Math.max(this.a6H, 1.5), this.rs = Math.floor(1 + .02 * this.i),
			this.rt = Math.floor(1 + .04 * this.i), this.a6v = this.rt, aVP = Math.floor(.75 * this.a6v), this.sa = Math.floor(1 + .075 * this.i), this.aVQ = Math.floor(1 + .1125 * this.i), this.aVR = Math.floor(this.i * (z.a0.qu() ? .03 :
			.029)), this.aVR = Math.max(this.aVR, 4), this.aVS = Math.floor(.035 * this.i), this.aVS = Math.max(this.aVS, 4), this.aVO = this.j - 2 * this.a6v - this.sa - this.aVQ, this.hF && this.aVW()
	}, this.gl = function(kr, ks) {
		var w3, w2;
		return !!this.hF && (w2 = kr, w3 = ks, kr -= bJ.dj(h.i - this.i, 2), ks -= bJ.dj(h.j - this.j, 2), kr < 0 || ks < 0 || kr >= this.i || ks >= this.j || kr >= this.i - this.aVQ && ks < this.aVQ ? -1 !== aL.gl(w2, w3) || bA.gl(w2, w3) ||
			this.qn() : ks < this.aVQ || (ks < this.j - this.sa ? (this.aVU = !0, this.aVT = (kr - 2 * this.rs - this.aVM) / this.aVN, 3 !== this.dx && (bd.dc = !0)) : (w2 = (w2 = Math.floor(kr / (this.i / this.a9F.length))) < 0 ? 0 : w2 >=
				this.a9F.length ? this.a9F.length - 1 : w2) !== this.dx && (this.dx = w2, this.aVW(), bd.dc = !0)), !0)
	}, this.a0M = function(kr, ks) {
		return this.aVV[0] = kr, this.aVV[1] = ks, !(!this.hF || !this.aVU || (kr -= bJ.dj(h.i - this.i, 2), ks = this.aVT, this.aVT = (kr - 2 * this.rs - this.aVM) / this.aVN, (0 <= this.aVT && this.aVT <= 1 || 0 <= ks && ks <= 1) && (bd.dc = !
			0), 0))
	}, this.a0l = function() {
		this.aVU && (this.aVU = !1)
	}, this.a0x = function() {
		this.hF ? this.qn() : this.show()
	}, this.show = function() {
		bb.aOv < 2 || (this.hF = !0, this.aVW())
	}, this.qn = function() {
		this.hF = !1, this.aVT = -1, bd.dc = !0
	}, this.aVW = function() {
		this.dx < 2 ? this.aVM = aP.measureText(b8.zR.y4(bb.max[this.dx]), b8.pW.rL(0, this.aVR)) : 2 === this.dx && (this.aVM = aP.measureText(b8.zR.a2u(6, 2), b8.pW.rL(0, this.aVR))), this.aVN = this.i - 2 * this.rs - this.aVM - this.rt
	}, this.lP = function() {
		this.hF && this.aVW()
	}, this.td = function() {
		this.hF && this.a7C()
	}, this.a7C = function() {
		var ef = bJ.dj(h.i - this.i, 2),
			eh = bJ.dj(h.j - this.j, 2);
		te.setTransform(1, 0, 0, 1, ef, eh), te.fillStyle = b9.mb, te.fillRect(0, this.aVQ, this.i, this.j - this.aVQ), this.aVX(), this.aNl(), te.strokeRect(0, 0, this.i, this.j), b8.pW.textAlign(te, 2), te.font = b8.pW.rL(0, this.aVR), 0 ===
			this.dx ? this.aVY(bb.aVD, ef, eh) : 1 === this.dx ? this.aVY(bb.a2N, ef, eh) : 2 === this.dx ? this.aVZ(ef, eh) : 3 === this.dx && (this.aVa(ef, eh), this.aVb(ef, eh)), aL.a4a(Math.floor(ef + this.i - .725 * this.aVQ), Math.floor(
				eh + .275 * this.aVQ), Math.floor(.45 * this.aVQ)), te.setTransform(1, 0, 0, 1, 0, 0)
	}, this.aVX = function() {
		var aA, di;
		for (te.lineWidth = this.a6H, b8.pW.textBaseline(te, 1), b8.pW.textAlign(te, 1), te.strokeStyle = b9.me, te.font = b8.pW.rL(1, this.aVS), di = this.i / this.a9F.length, te.fillStyle = b9.n0, te.fillRect(this.dx * di, this.j - this.sa, di,
				this.sa), te.fillStyle = b9.me, te.fillRect(0, this.j - this.sa - .5 * this.a6H, this.i, this.a6H), aA = 1; aA <= 3; aA++) te.fillRect(aA * di, this.j - this.sa, this.a6H, this.sa);
		for (aA = this.a9F.length - 1; 0 <= aA; aA--) te.fillText(b8.x3.a1t(this.a9F[aA], 0, .9 * di), (aA + .5) * di, this.j - .46 * this.sa)
	}, this.aNl = function() {
		te.fillStyle = b9.nQ, te.fillRect(0, 0, this.i, this.aVQ), te.fillStyle = b9.me, te.fillRect(0, this.aVQ - .5 * this.a6H, this.i, this.a6H), te.font = b8.pW.rL(1, .39 * this.aVQ), te.fillText(b8.x3.a1t(L(450), 0, .8 * this.i), Math.floor(
			this.i / 2), Math.floor(.55 * this.aVQ))
	}, this.aVY = function(g, ef, eh) {
		var kV = bb.max[this.dx],
			a1G = (te.setTransform(1, 0, 0, 1, ef + 2 * this.rs + this.aVM, eh + this.a6v + this.aVQ), te.lineWidth = 2, this.aVO / Math.sqrt(kV));
		te.beginPath(), te.moveTo(this.aVN, this.aVO - a1G * Math.sqrt(g[bb.aOv - 1]));
		for (var aA = bb.aOv - 2; 0 <= aA; aA--) te.lineTo(aA * this.aVN / (bb.aOv - 1), this.aVO - a1G * Math.sqrt(g[aA]));
		te.stroke();
		ef = this.a4a(g, a1G, .5);
		ef < .95 && te.fillText(b8.zR.y4(kV), -this.rs, 0), .05 < Math.abs(ef - .5) && te.fillText(b8.zR.y4(Math.floor(kV / 4)), -this.rs, Math.floor(this.aVO / 2)), .05 < ef && te.fillText("0", -this.rs, this.aVO)
	}, this.aVZ = function(ef, eh) {
		te.setTransform(1, 0, 0, 1, ef + 2 * this.rs + this.aVM, eh + this.a6v + this.aVQ), te.lineWidth = 2;
		var a1G = this.aVO / Math.max(bb.max[this.dx], 1);
		te.beginPath(), te.moveTo(this.aVN, this.aVO - a1G * bb.a9c[bb.aOv - 1]);
		for (var aA = bb.aOv - 2; 0 <= aA; aA--) te.lineTo(aA * this.aVN / (bb.aOv - 1), this.aVO - a1G * bb.a9c[aA]);
		te.stroke();
		ef = this.a4a(bb.a9c, a1G, 1), eh = bb.max[this.dx] / 100;
		ef < .95 && te.fillText(b8.zR.a2u(eh, 2), -this.rs, 0), .05 < Math.abs(ef - .5) && te.fillText(b8.zR.a2u(eh / 2, 2), -this.rs, Math.floor(this.aVO / 2)), .05 < ef && te.fillText(b8.zR.a2u(0, 2), -this.rs, this.aVO)
	}, this.aVa = function(ef, eh) {
		te.setTransform(1, 0, 0, 1, ef + .34 * this.i, eh + 2 * aVP + this.aVQ), b8.pW.textAlign(te, 2);
		for (var a90 = this.j - 4 * aVP - this.sa - this.aVQ, g = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], aA = 9; 0 <= aA; aA--) te.fillText(b8.x3.a1t(bb.aVH[g[aA]], 0, .31 * this.i), 0, aA * a90 / 9);
		var f0 = bb.lY;
		for (te.setTransform(1, 0, 0, 1, ef + .39 * this.i, eh + 2 * aVP + this.aVQ), b8.pW.textAlign(te, 0), te.fillText(b8.zR.a2u(100 * f0[0] / (1024 * Math.max(f0[1], 1)), 1), 0, 0), aA = 8; 1 <= aA; aA--) te.fillText(f0[g[aA]].toString(), 0,
			aA * a90 / 9);
		te.fillText(b8.zR.a2u(100 * (1 - af.gL[aC.eI] / f0[7]), 0), 0, a90)
	}, this.aVb = function(ef, eh) {
		te.setTransform(1, 0, 0, 1, ef + .79 * this.i, eh + 2 * aVP + this.aVQ), b8.pW.textAlign(te, 2);
		var aA, a90 = this.j - 4 * aVP - this.sa - this.aVQ;
		for (te.fillStyle = b9.mv, aA = 2; 0 <= aA; aA--) te.fillText(b8.x3.a1t(bb.aVH[aA + 8], 0, .31 * this.i), 0, aA * a90 / 9);
		te.fillText(b8.x3.a1t(bb.aVH[18], 0, .31 * this.i), 0, 3 * a90 / 9), te.fillStyle = b9.mu, te.fillText(b8.x3.a1t(bb.aVH[11], 0, .31 * this.i), 0, 4 * a90 / 9), te.fillStyle = b9.nD, te.fillText(b8.x3.a1t(bb.aVH[13], 0, .31 * this.i), 0,
				5 * a90 / 9), te.fillText(b8.x3.a1t(bb.aVH[15], 0, .31 * this.i), 0, 6 * a90 / 9), te.fillText(b8.x3.a1t(bb.aVH[16], 0, .31 * this.i), 0, 7 * a90 / 9), te.fillText(b8.x3.a1t(bb.aVH[12], 0, .31 * this.i), 0, 8 * a90 / 9), te
			.fillStyle = b9.nC, te.fillText(b8.x3.a1t(bb.aVH[17], 0, .31 * this.i), 0, a90), te.fillStyle = b9.mv;
		var f0 = bb.lY,
			aCi = f0[8] + f0[9] + f0[10] + f0[18],
			aCi = b8.zR.y4(aCi),
			aMa = te.measureText(aCi).width,
			ef = (te.setTransform(1, 0, 0, 1, ef + .83 * this.i + aMa, eh + 2 * aVP + this.aVQ), te.fillText(b8.zR.y4(f0[8]), 0, 0), te.fillText(b8.zR.y4(f0[9]), 0, a90 / 9), te.fillText(b8.zR.y4(f0[10]), 0, 2 * a90 / 9), te.fillText(b8.zR.y4(f0[
				18]), 0, 3 * a90 / 9), te.fillStyle = b9.mu, te.fillText(aCi, 0, 4 * a90 / 9), te.fillStyle = b9.nD, te.fillText(b8.zR.y4(f0[13]), 0, 5 * a90 / 9), te.fillText(b8.zR.y4(f0[15]), 0, 6 * a90 / 9), te.fillText(b8.zR.y4(f0[16]),
				0, 7 * a90 / 9), te.fillText(b8.zR.y4(f0[12]), 0, 8 * a90 / 9), f0[12] + f0[13] + f0[15] + f0[16]);
		te.fillStyle = b9.nC, te.fillText(b8.zR.y4(ef), 0, a90), te.fillStyle = b9.me
	}, this.a4a = function(g, a1G, a7n) {
		var aA, e, fF;
		return this.aVT < 0 || 1 < this.aVT ? .25 : (aA = this.aVT * (bb.aOv - 1), fF = g[e = Math.floor(aA)], fF += (aA - e) * (g[e < bb.aOv - 1 ? e + 1 : e] - fF), te.strokeStyle = b9.mh, .04 < this.aVT && this.aVd(0, this.aVO - a1G * Math.pow(
				fF, a7n), aA * this.aVN / (bb.aOv - 1), this.aVO - a1G * Math.pow(fF, a7n)), .04 < fF / bb.max[this.dx] && this.aVd(aA * this.aVN / (bb.aOv - 1), this.aVO, aA * this.aVN / (bb.aOv - 1), this.aVO - a1G * Math.pow(fF, a7n)), te
			.fillStyle = b9.nF, te.beginPath(), te.arc(aA * this.aVN / (bb.aOv - 1), this.aVO - a1G * Math.pow(fF, a7n), Math.max(2, .014 * this.j), 0, 2 * Math.PI), te.fill(), g = this.aVT * bd.a9e, g = 0 === af.lc[aC.eI] ? Math.floor(g * bb
				.aVG) : Math.floor(g * bd.jk()), te.fillStyle = b9.me, te.fillText(1 === a7n ? b8.zR.a2u(fF / 100, 2) : b8.zR.y4(Math.floor(fF)), -this.rs, this.aVO - a1G * Math.pow(fF, a7n)), b8.pW.textAlign(te, 1), te.fillText(aV.a9T(g),
				aA * this.aVN / (bb.aOv - 1), this.aVO + this.aVR - (z.a0.qu() ? 2 : 0) - this.a6H), b8.pW.textAlign(te, 2), a1G * Math.pow(fF, a7n) / this.aVO)
	}, this.aVd = function(m4, m5, mH, mI) {
		te.beginPath(), te.moveTo(m4, m5), te.lineTo(mH, mI), te.stroke()
	}
}

function bt() {
	this.aVe = "https://", this.aVf = this.aVe + "territorial.io/", this.aOw = this.aVf + "changelog", this.aP0 = this.aVf + "terms", this.aVg = this.aVf + "cookie_policy", this.aON = this.aVf + "privacy", this.aOz = this.aVf + "tutorial", this.aOy =
		this.aVf + "players", this.aOx = this.aVf + "clans", this.zc = this.aVf + "clan-results", this.aVh = "https://patreon.com/c/territorial", this.aAw = this.aVe + "play.google.com/store/apps/details?id=territorial.io", this.zv = this.aVe +
		"apps.apple.com/app/id1581110913", this.aVi = this.aVe + "www.youtube.com/watch?v=toZTQ8aRdFc", this.aAx = this.aVe + "discord.gg/pthqvpTXmh", this.aAy = this.aVe + "www.instagram.com/davidtschacher/", this.xe =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function d2() {
	this.x = new aVj, this.x0 = new aVk, this.dU = function() {
		this.x.dU()
	}, this.ih = function() {
		0 !== this.x.a5d && this.x.a5d--
	}
}

function aVk() {
	this.td = function() {
		if (0 !== bN.x.a5d && (te.globalAlpha = Math.min(bN.x.a5d / 580, 1), te.drawImage(bN.x.aVn, 1 + aR.wy(), 1 + aR.wz()), te.globalAlpha = 1, aC.gt)) {
			for (var m4 = i8 / i9, m5 = iA / i9, mH = (h.i + i8) / i9, mI = (h.j + iA) / i9, g6 = bN.x.aVo * i9, aVp = bN.x.aVp, aA = aC.jn - 1; 0 <= aA; aA--) ! function(aA, g6, m4, m5, mH, mI, aVp) {
				var highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aA];
				if (highlight) g6 *= 2;
				0 === af.lc[aA] || 0 === af.gL[aA] || (mH = h.i * ((af.iM[aA] + af.iN[aA] + 1) / 2 - m4) / (mH - m4) - .5 * g6, m4 = h.j * ((af.iO[aA] + af.iP[aA] + 1) / 2 - m5) / (mI - m5) - .5 * g6, mH > h.i) || m4 > h.j || mH < -g6 || m4 <
					-g6 || (te.setTransform(highlight ? i9 * 2 : i9, 0, 0, highlight ? i9 * 2 : i9, mH, m4), te.drawImage(aVp[aC.hN ? be.eW[aA] : 1], 0, 0))
			}(aA, g6, m4, m5, mH, mI, aVp);
			te.setTransform(i9, 0, 0, i9, 0, 0)
		}
	}
}

function aVj() {
	this.aVo = 28, this.a5d = 0, this.aVn = null;
	var aVr = this.aVp = null;

	function aVu(hP, aVv) {
		var ef, eh, eK, ht, a1h = b8.pW.vJ(hP, hP),
			hV = b8.pW.getContext(a1h, !0),
			hS = b8.pW.getImageData(hV, hP, hP),
			vU = hS.data,
			kV = (hP >> 1) - .5,
			aVw = .5 + kV;
		for (aVw *= aVw, eh = 0; eh < hP; eh++)
			for (ef = 0; ef < hP; ef++) ht = (ht = ef - kV) * ht + (ht = eh - kV) * ht, vU[eK = 4 * (eh * hP + ef)] = aVv[0], vU[1 + eK] = aVv[1], vU[2 + eK] = aVv[2], vU[3 + eK] = (aVw - ht) * aVv[3] / aVw;
		return hV.putImageData(hS, 0, 0), a1h
	}

	function aUt(aA, hV, a1h, hP) {
		var highlight, ef, eh;
		0 !== af.lc[aA] && 0 !== af.gL[aA] && ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aA]) && (hP *= 2), ef = af.iM[aA] + af.iN[aA] + 1 - hP - 2 >> 1, eh = af.iO[aA] + af.iP[aA] + 1 - hP - 2 >> 1, highlight ? hV
			.drawImage(a1h[aC.hN ? 9 === aC.k4 && 5 === aD.hC[aA] ? 3 : be.eW[aA] : aA < aC.jn ? 1 : 0], ef, eh, hP, hP) : hV.drawImage(a1h[aC.hN ? 9 === aC.k4 && 5 === aD.hC[aA] ? 3 : be.eW[aA] : aA < aC.jn ? 1 : 0], ef, eh))
	}
	this.dU = function() {
		var r8;
		this.a5d = 700,
			function(r8) {
				var hP = r8.aVo;
				if (r8.aVp = [], aVr = [], aC.hN) {
					for (var aA = 0; aA <= aC.w7; aA++) r8.aVp.push(aVu(hP, be.aTk[be.k9[aA]])), aVr.push(aVu(hP >> 1, be.aTk[be.k9[aA]]));
					9 === aC.k4 && aVr.push(aVu(hP, be.aTk[1]))
				} else r8.aVp.push(aVu(hP, be.aTk[7])), r8.aVp.push(aVu(hP, be.aTk[4])), aVr.push(aVu(hP >> 1, be.aTk[7]))
			}(this),
			function(r8, aVx) {
				var aA, aVn = r8.aVn,
					hV = b8.pW.getContext(aVn, !0),
					eY = aC.eV,
					hP = r8.aVo >> 1;
				hV.imageSmoothingEnabled = !1, hV.setTransform(1, 0, 0, 1, 0, 0), aVx && hV.clearRect(0, 0, aVn.width, aVn.height);
				if (9 === aC.k4) {
					hP <<= 1;
					r8 = ax.kD[5];
					for (aA = eY - r8; aA < eY; aA++) aUt(aA, hV, aVr, hP);
					eY -= r8, hP >>= 1
				}
				for (aA = aC.jn; aA < eY; aA++) aUt(aA, hV, aVr, hP)
			}(this, null !== (r8 = this).aVn && r8.aVn.width === bQ.ej - 2 && r8.aVn.height === bQ.ek - 2 || (r8.aVn = b8.pW.vJ(bQ.ej - 2, bQ.ek - 2), !1)), aC.gt || this.a3C()
	}, this.aTj = aVu, this.a3C = function() {
		for (var eY = aC.jn, hP = this.aVo, aVp = this.aVp, hV = b8.pW.getContext(this.aVn, !0), aA = 0; aA < eY; aA++) aUt(aA, hV, aVp, hP)
	}
}

function d3() {
	function aW0() {
		8 === aC.k4 && 1 === aC.ym && bP.yP.yl()
	}

	function aVz(player) {
		aC.gt ? (aj.aFM(player), ak.aIL(), aC.k6 && aC.oo.ih()) : b1.aBD(player)
	}
	this.oE = function(player) {
		aM.yy(player, player === aC.eI ? 21 : 22), aVz(player), aW0()
	}, this.ol = function(player) {
		1 === aC.ym && 0 !== af.lc[player] && 2 !== af.a2E[player] && aVz(player), aC.yp--, aC.yo--, aM.yy(player, 4), b8.ft.gj(2) && aV.lO(!0), aW0()
	}
}

function dD() {
	this.aRL = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.a8y = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", b9.me, "rgb(170,170,170)"
	], this.aW1 = [b9.me, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", b9.me, b9.mV], this.aW2 = [b9.mV, b9.me, b9.me, b9.me, b9.mV, b9.mV, b9.mV, b9.mV, b9.me];
	var aW3 = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"],
		aW4 = (this.aHn = ["rgba(" + aW3[0] + ",", "rgba(" + aW3[1] + ",", "rgba(" + aW3[2] + ",", "rgba(" + aW3[3] + ",", "rgba(" + aW3[4] + ",", "rgba(" + aW3[5] + ",", "rgba(" + aW3[6] + ",", "rgba(" + aW3[7] + ",", "rgba(" + aW3[8] + ",",
			"rgba(" + aW3[9] + ","
		], this.aHo = ["rgb(" + aW3[0] + ")", "rgb(" + aW3[1] + ")", "rgb(" + aW3[2] + ")", "rgb(" + aW3[3] + ")", "rgb(" + aW3[4] + ")", "rgb(" + aW3[5] + ")", "rgb(" + aW3[6] + ")", "rgb(" + aW3[7] + ")", "rgb(" + aW3[8] + ")", "rgb(" + aW3[
			9] + ")"
		], this.z8 = null, this.aTk = [
			[128, 128, 128, 180],
			[255, 0, 0, 180],
			[0, 255, 0, 180],
			[50, 50, 255, 180],
			[255, 255, 0, 180],
			[255, 0, 255, 180],
			[0, 255, 255, 180],
			[255, 255, 255, 180],
			[0, 0, 0, 180]
		], [
			[128, 128, 128],
			[255, 0, 0],
			[0, 255, 0],
			[0, 0, 255],
			[255, 255, 0],
			[255, 0, 255],
			[0, 255, 255],
			[255, 255, 255],
			[0, 0, 0]
		]);
	this.k9 = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.eW = new Uint8Array(aC.eV), this.wD = new Uint16Array(aC.eV), this.wE = new Uint16Array(this.k9.length + 1), this.wF = new Uint16Array(this.k9.length), this.dV = function() {
		this.z8 = [L(451), L(452), L(453), L(454), L(455), L(456), L(457), L(458), L(459)]
	}, this.dU = function() {
		if (this.eW.fill(0), this.aW5(), aC.hN) {
			9 === aC.k4 ? this.aW6() : aC.k6 ? function() {
				var colorsData = aC.data.colorsData;
				if (!aC.data.selectableColor)
					for (var aA = aC.jn - 1; 0 <= aA; aA--) colorsData[aA] = aw.j5(262144);
				var aWF = 0,
					eo = 768,
					aQp = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
					teamPlayerCount = aC.data.teamPlayerCount;
				for (aA = 0; aA < 9; aA++)
					if (teamPlayerCount[aA]) {
						for (var eb = 0, es = 0; es < 3; es++) eb += Math.abs(aW4[aA][es] - aQp[es]);
						eb < eo && (aWF = aA, eo = eb)
					} var aWG = new Uint16Array(9);
				for (aA = 0; aA < 9; aA++) aWG[aA] = teamPlayerCount[aA];
				var k9 = be.k9,
					aWH = new Uint8Array(9),
					g0 = (k9[0] = 0, 1);
				for (aA = 1; aA < 9; aA++) aWG[aA] && (aWH[aA] = g0, k9[g0++] = aA);
				var j4 = aC.jn,
					eW = be.eW;
				aWG[aWF] ? (aWG[aWF]--, eW[0] = aWH[aWF]) : j4 = 0;
				var et = 0;
				for (aA = j4; aA < aC.w0; aA++) {
					var hL = k9[et];
					if (aWG[hL]) aWG[hL]--, eW[aA] = aWH[hL];
					else if (aA--, 9 <= ++et) return console.log("error 325")
				}
			}() : this.ih();
			for (var eY = aC.eV, wD = be.wD, wE = be.wE, wF = be.wF, eW = be.eW, k9 = be.k9, w6 = k9.length, km = new Array(w6), aA = 0; aA < w6; aA++) km[aA] = [];
			for (aA = 0; aA < eY; aA++) km[k9[eW[aA]]].push(aA);
			for (aA = 1; aA <= w6; aA++) wE[aA] = wE[aA - 1] + km[aA - 1].length;
			for (aA = 0; aA < w6; aA++)
				for (var g0 = km[aA].length, kV = wE[aA], hL = 0; hL < g0; hL++) wD[hL + kV] = km[aA][hL];
			var jn = aC.jn;
			for (aA = 0; aA < w6; aA++)
				for (g0 = km[aA].length, kV = wE[aA], hL = 0; hL < g0; hL++)
					if (wD[hL + kV] >= jn) {
						wF[aA] = hL;
						break
					}
		}
	}, this.aW5 = function() {
		for (var aA = this.k9.length - 1; 0 <= aA; aA--) this.k9[aA] = aA
	}, this.aW6 = function() {
		for (var aA = aC.data.teamPlayerCount[7] - 1; 0 <= aA; aA--) this.eW[aA] = 1;
		for (aA = aC.data.teamPlayerCount[7]; aA < aC.eV; aA++) this.eW[aA] = 2;
		this.k9[1] = 7, this.k9[2] = 8
	}, this.ih = function() {
		var hd = new Uint8Array(aC.jn),
			he = new Uint8Array(aC.jn),
			aW9 = new Uint16Array(8),
			aWA = new Uint16Array(this.k9.length);
		this.aWB(hd, he, aW9, 1), this.aEz(aW9), this.aWC(aWA, hd, he), this.aWD(hd, he, aWA), this.aWE()
	}, this.aWB = function(hd, he, aWG, aWI) {
		for (var es, e, aWJ, eY = this.k9.length - aWI, g = new Uint16Array(eY), colorsData = aC.data.colorsData, aA = aC.jn - 1; 0 <= aA; aA--) {
			for (es = eY; aWI <= es; es--) g[es - 1] = Math.abs(4 * (colorsData[aA] >> 12) - aW4[es][0]) + Math.abs(4 * (colorsData[aA] >> 6 & 63) - aW4[es][1]) + Math.abs(4 * (63 & colorsData[aA]) - aW4[es][2]);
			for (aWJ = 768, es = eY - 1; 0 <= es; es--) g[e = (es + aA) % eY] < aWJ && (aWJ = g[e], hd[aA] = e);
			for (aWG[hd[aA]] += 4, aWJ = 768, es = eY - 1; 0 <= es; es--) g[e = (es + aA) % eY] < aWJ && e !== hd[aA] && (aWJ = g[e], he[aA] = e);
			aWG[he[aA]]++
		}
	}, this.aEz = function(aWG) {
		for (var es, kX, eY = this.k9.length - 1, aA = eY; 0 <= aA; aA--) this.k9[aA] = aA;
		for (aA = eY - 1; 0 <= aA; aA--) aWG[aA]++;
		for (aA = 1; aA <= eY; aA++) {
			for (kX = 0, es = 1; es < eY; es++) aWG[es] > aWG[kX] && (kX = es);
			aWG[kX] = 0, this.k9[aA] = kX + 1
		}
	}, this.aWC = function(aWA, hd, he) {
		var es, zV, et, eb, e, mG, sA, aWK = this.k9.length - 1,
			q0 = new Uint16Array(aWK),
			aWL = [],
			aWM = 0,
			zU = [],
			aWN = [];
		loop: for (var aA = 0; aA < aC.jn; aA++)
			if (null !== (zV = b8.zR.zW(af.zT[aA]))) {
				for (es = zU.length - 1; 0 <= es; es--)
					if (zV === zU[es]) {
						aWN[es].push(aA), aWM = Math.max(aWM, aWN[es].length);
						continue loop
					} zU.push(zV), aWL.push(!1), aWN.push([aA]), aWM = Math.max(aWM, 1)
			}
		for (; 2 < aC.w7 && aWM > bJ.dj(aC.jn, aC.w7);) aC.w7--, aC.k4--;
		for (es = zU.length - 1; 0 <= es; es--) {
			for (eb = -1, et = zU.length - 1; 0 <= et; et--) !aWL[et] && (-1 === eb || aWN[et].length > aWN[eb].length) && (eb = et);
			for (et = aWK - 1; 0 <= et; et--) q0[et] = 1;
			for (et = aWN[eb].length - 1; 0 <= et; et--) q0[hd[aWN[eb][et]]] += 3, q0[he[aWN[eb][et]]]++;
			for (aA = aWK - 1; 0 <= aA; aA--) {
				for (e = eb % aWK, et = aWK - 1; 0 <= et; et--) q0[et] > q0[e] && (e = et);
				for (mG = -1, et = aC.w7; 0 < et; et--)
					if (this.k9[et] === e + 1) {
						mG = et;
						break
					} if (q0[e] = 0, -1 !== mG) {
					for (sA = 0, et = aC.w7; 0 < et; et--) aWA[mG] > aWA[et] && sA++;
					if (sA !== aC.w7 - 1) {
						for (et = aWN[eb].length - 1; 0 <= et; et--) aWA[mG]++, this.eW[aWN[eb][et]] = mG;
						break
					}
				}
			}
			aWL[eb] = !0
		}
	}, this.aWD = function(hd, he, aWA) {
		for (var aA, hs, eY = this.k9.length - 1, border = bJ.dj(aC.jn, aC.w7), aWO = (0 < aC.jn % aC.w7 && border++, new Uint8Array(1 + eY)), es = eY; 1 <= es; es--) aWO[this.k9[es]] = es;
		for (aA = 0; aA < aC.jn; aA++) hs = aWO[hd[aA] + 1], 0 === this.eW[aA] && hs <= aC.w7 && aWA[hs] < border && (aWA[hs]++, this.eW[aA] = hs);
		for (aA = 0; aA < aC.jn; aA++) hs = aWO[he[aA] + 1], 0 === this.eW[aA] && hs <= aC.w7 && aWA[hs] < border && (aWA[hs]++, this.eW[aA] = hs);
		for (es = aC.w7; 1 <= es; es--)
			for (aA = aC.jn - 1; 0 <= aA && !(aWA[es] >= border); aA--) 0 === this.eW[aA] && (aWA[es]++, this.eW[aA] = es)
	}, this.aWE = function() {
		for (var aA = aC.jn; aA < aC.eV; aA++) this.eW[aA] = 1 + aA % aC.w7
	}
}

function gM() {
	for (var ef, eh, aA = fS - 1; 0 <= aA; aA--) ef = bJ.dj(fU[aA], 4) % bQ.ej, eh = bJ.dj(fU[aA], 4 * bQ.ej), af.iM[fN] = Math.min(ef, af.iM[fN]), af.iO[fN] = Math.min(eh, af.iO[fN]), af.iN[fN] = Math.max(ef, af.iN[fN]), af.iP[fN] = Math.max(eh, af
		.iP[fN])
}

function fh() {
	var eb, g5, aA, eY = af.fz[fN].length,
		ea = ab.ea;
	loop: for (aA = eY - 1; 0 <= aA; aA--) {
		for (eb = 3; 0 <= eb; eb--)
			if (g5 = af.fz[fN][aA] + ea[eb], ab.eP(g5) || ab.g7(g5) && ab.eQ(g5) !== fN) {
				ab.j1(af.fz[fN][aA], fN);
				continue loop
			} af.fz[fN][aA] = af.fz[fN][eY - 1], af.fz[fN].pop(), eY--
	}
}

function fi() {
	var player = fN,
		gD = af.gD,
		gE = af.gE,
		ey = af.ey,
		eY = gD[player].length,
		ea = ab.ea;
	loop: for (var aA = eY - 1; 0 <= aA; aA--) {
		for (var aWP = !1, aWQ = !1, eb = 3; 0 <= eb; eb--) {
			var g5 = gD[player][aA] + ea[eb];
			if (ab.aF9(g5, player)) continue loop;
			aWP = aWP || ab.h0(g5), aWQ = aWQ || ab.aF8(g5)
		}
		aWP ? gE[player].push(gD[player][aA]) : aWQ ? ey[player].push(gD[player][aA]) : ab.wZ(gD[player][aA], player), gD[player][aA] = gD[player][eY - 1], gD[player].pop(), eY--
	}
}

function gB() {
	af.gL[fR] -= fS
}

function gC(border) {
	for (var eY = border.length, aA = eY - 1; 0 <= aA; aA--) ab.wt(fR, border[aA]) || (border[aA] = border[eY - 1], border.pop(), eY--)
}

function gF(border) {
	for (var eY = border.length, aA = eY - 1; 0 <= aA; aA--) !ab.wt(fR, border[aA]) && ab.eT(border[aA]) && (border[aA] = border[eY - 1], border.pop(), eY--)
}

function gG(border) {
	for (var eb, g5, eY = border.length, ea = ab.ea, aA = eY - 1; 0 <= aA; aA--)
		for (eb = 3; 0 <= eb; eb--)
			if (g5 = border[aA] + ea[eb], ab.aF9(g5, fR)) {
				af.gD[fR].push(border[aA]), border[aA] = border[eY - 1], border.pop(), eY--;
				break
			}
}

function gH() {
	for (var eb, g5, ea = ab.ea, aA = fS - 1; 0 <= aA; aA--)
		for (eb = 3; 0 <= eb; eb--) g5 = fU[aA] + ea[eb], ab.aFA(fR, g5) && ab.aFB(g5) && (af.gD[fR].push(g5), ab.g2(g5, fR))
}

function gI() {
	var ef, eh;
	loop: for (; af.iO[fR] < af.iP[fR];) {
		for (ef = af.iN[fR]; ef >= af.iM[fR]; ef--)
			if (ab.wt(fR, 4 * (af.iO[fR] * bQ.ej + ef))) break loop;
		af.iO[fR]++
	}
	loop: for (; af.iO[fR] < af.iP[fR];) {
		for (ef = af.iN[fR]; ef >= af.iM[fR]; ef--)
			if (ab.wt(fR, 4 * (af.iP[fR] * bQ.ej + ef))) break loop;
		af.iP[fR]--
	}
	loop: for (; af.iM[fR] < af.iN[fR];) {
		for (eh = af.iP[fR]; eh >= af.iO[fR]; eh--)
			if (ab.wt(fR, 4 * (eh * bQ.ej + af.iM[fR]))) break loop;
		af.iM[fR]++
	}
	loop: for (; af.iM[fR] < af.iN[fR];) {
		for (eh = af.iP[fR]; eh >= af.iO[fR]; eh--)
			if (ab.wt(fR, 4 * (eh * bQ.ej + af.iN[fR]))) break loop;
		af.iN[fR]--
	}
}

function eR(player, iy) {
	return 0 === be.eW[player] || be.eW[player] !== be.eW[iy]
}

function h6(player, iy) {
	for (var e, aWR = ac.fd(player), aA = 0; aA < aWR; aA++)
		if (0 === ac.fe(player, aA))
			if ((e = ac.fj(player, aA)) === aC.eV) {
				if (iy === aC.eV) return !1;
				if (h4(iy)) return !0
			} else if (b8.ft.kZ(e))
		if (iy === aC.eV) {
			if (h4(e)) return !0
		} else if (h8(iy, e)) return !0;
	return !1
}

function h4(player) {
	for (var aA, g6, eY = af.gD[player].length, ea = ab.ea, eb = 3; 0 <= eb; eb--)
		for (g6 = ea[eb], aA = 0; aA < eY; aA++)
			if (ab.eP(af.gD[player][aA] + g6)) return !0;
	return !1
}

function aFI(player) {
	for (var aA, g6, eY = af.gD[player].length, ea = ab.ea, eb = 3; 0 <= eb; eb--)
		for (g6 = ea[eb], aA = 0; aA < eY; aA++)
			if (ab.j0(af.gD[player][aA]) && ab.eP(af.gD[player][aA] + g6)) return !0;
	return !1
}

function h8(a2J, a2K) {
	for (var aA, di, g6, g5, aTw = af.gD[a2J].length, aTx = af.gD[a2K].length, ea = (aTx < aTw && (di = a2J, a2J = a2K, a2K = di, di = aTw, aTw = aTx, 0), ab.ea), eb = 3; 0 <= eb; eb--)
		for (g6 = ea[eb], aA = 0; aA < aTw; aA++)
			if (g5 = af.gD[a2J][aA] + g6, ab.g7(g5) && ab.eQ(g5) === a2K) return !0;
	return !1
}

function aFJ(a2J, a2K) {
	for (var aA, g6, g5, aTw = af.gD[a2J].length, ea = ab.ea, eb = 3; 0 <= eb; eb--)
		for (g6 = ea[eb], aA = 0; aA < aTw; aA++)
			if (ab.j0(af.gD[a2J][aA]) && (g5 = af.gD[a2J][aA] + g6, ab.g7(g5)) && ab.eQ(g5) === a2K) return !0;
	return !1
}

function dP() {
	this.oy = new aWS
}

function aWS() {
	this.h3 = function(player) {
		b8.ft.a2F(player) && aM.zA(80, L(460), 637, 0, b9.nT, b9.mb, -1, !1)
	}, this.a4C = function() {
		aM.zA(80, L(461), 637, 0, b9.nT, b9.mb, -1, !1)
	}, this.o3 = function(player) {
		b8.ft.a2F(player) && aM.zA(80, L(462), 637, 0, b9.nT, b9.mb, -1, !1)
	}
}

function aWT() {
	this.aWU = 0, this.ih = function() {
		aN.ih(), aY.ih(), h.ih(), ay.x.ih(), av.aEV(), bd.dc && (bd.dc = !1, aZ.td())
	}
}

function aWV() {
	this.e7 = bd.e7, this.dx = 0, this.aWU = 0, this.aET = 0, this.aWW = null, this.aWX = 7, this.a5e = 0, this.dU = function() {
		this.aET = 0, this.aWW = [], this.dx = 0, this.aWU = 0
	}, this.aQI = function(aB) {
		if (aC.gt) this.a9f(aB);
		else if (this.aWW.push(aB), 2 === aC.ym) {
			for (var aA = 0; aA < this.aWW.length; aA++) b6.ns.ih(this.aWW[aA]);
			this.aWW = []
		}
	}, this.a9f = function(aB) {
		2 !== aC.ym && (b6.ns.ih(aB), b7.ih(), aV.a9f(this.aET), this.aET === aC.a3I ? (aC.oo.ih(), this.aET = 0, this.dx = 0, this.aWU = 0, this.e7 = bd.e7) : (this.aET++, ae.a3B(), ae.lO(!0), bZ.aAF()))
	}, this.ih = function() {
		h.ih(), aC.gt ? (bd.dc = aV.a9f(-1) || bd.dc, lQ()) : (0 !== this.dx || bd.e7 >= this.e7 && (this.e7 += bd.a9e * Math.floor(1 + (bd.e7 - this.e7) / bd.a9e), 2 === aC.ym ? lF() : this.aWY(), this.dx++, 27 < bd.e7 - this.a5e)) && this
		.aWZ(), lL(), bd.dc && (bd.dc = !1, ww()), this.a5e = bd.e7
	}, this.aWZ = function() {
		bd.dc = !0, lN(), this.dx = 0
	}, this.aWY = function() {
		var uL, aA;
		if (this.aWU !== 7 * this.aET) lH(), bZ.aAF();
		else {
			uL = !1;
			loop: for (; this.aWa() && (uL = !0, lH(), 2 !== aC.ym) && 0 < this.aWW.length;)
				for (aA = this.aWX - 2; 0 <= aA; aA--)
					if (lH(), 2 === aC.ym) break loop;
			uL ? bZ.aAF() : (lF(), bZ.a3E())
		}
	}, this.aWa = function() {
		return 0 < this.aWW.length && (this.aET++, b6.ns.ih(this.aWW[0]), this.aWW.shift(), !0)
	}
}

function aWb() {
	var aWc, aWd, aWe, aET, aWf, dx = 0,
		e7 = bd.e7;

	function aWi() {
		! function() {
			if (!aC.gt) return;
			if (aC.k6) return;
			if (2 !== aC.ym)
				if (aWf % 7 != 0) aWf++;
				else if (aET === aC.a3I) {
				if (!aWl()) return;
				aV.a9f(aET), aC.oo.ih()
			} else {
				if (!aWl()) return;
				aWf++, aET++, ae.a3B(), ae.lO(!0)
			}
			return 1
		}() && aWl() && lH()
	}

	function aWj() {
		dx = 0, (aC.gt ? (bd.dc = aV.a9f(aET - (aWf % 7 == 0 ? 0 : 1) + aWf % 7 / 7) || bd.dc, lQ) : aL.gi || !bA.a3f ? lQ : (bd.dc = !0, lN))()
	}

	function aWl() {
		var aA, eY, aWm = b7.om.aRV,
			fF = b7.om.aRW,
			fH = b7.om.aRX,
			fJ = b7.om.aRY,
			aWn = b7.om.aRZ,
			aWo = b7.om.aRa;
		if (!(aWc >= aWo.length)) {
			if (aWo = aWo[aWc], aWn[aWc]) {
				for (eY = aWd + aWo, aA = aWd; aA < eY; aA++) b6.ns.oY(aWm[aA], fF[aA], fH[aA], fJ[aA]);
				aWd += aWo, aWc++
			} else ++aWe >= aWo && (aWc++, aWe = 0);
			return 1
		}
		aM.a07("Replay file smaller than expected."), bA.a0y(!1), aC.ym = 2
	}
	this.aWU = 0, this.dU = function() {
		aWf = aET = aWe = aWd = aWc = 0
	}, this.ih = function() {
		var aUJ;
		h.ih(), bA.a77() < 1.7 ? 0 === dx ? bd.e7 >= e7 && (aUJ = bd.a9e / bA.a77(), e7 += aUJ * Math.floor(1 + (bd.e7 - e7) / aUJ), 2 === aC.ym || aL.gi || !bA.a3f ? lF() : (aWi(), bZ.aAF()), dx++) : aWj() : function() {
			var aUJ;
			if (bd.e7 >= e7)
				if (2 === aC.ym || aL.gi || !bA.a3f) lF(), e7 = bd.e7;
				else {
					for (aUJ = bd.a9e / bA.a77(), 16 < (bd.e7 - e7) / aUJ && (e7 = bd.e7 - 16 * aUJ); bd.e7 >= e7 && 2 !== aC.ym;) e7 += aUJ, aWi();
					bZ.aAF()
				} aWj()
		}(), lL(), bd.dc && (bd.dc = !1, ww())
	}, this.yw = function() {
		b7.om.aRa.length - aWc <= 2 || aM.a07("Replay file larger than expected.")
	}
}

function aWp() {
	var dx = 0,
		e7 = bd.e7;
	this.aWU = 0, this.ih = function() {
		h.ih(), aC.gt ? lQ() : 0 === dx ? bd.e7 >= e7 && (e7 += bd.a9e * Math.floor(1 + (bd.e7 - e7) / bd.a9e), 2 === aC.ym || aL.gi ? lF() : (lH(), bZ.aAF()), dx++) : ((aL.gi ? lQ : (bd.dc = !0, lN))(), dx = 0), lL(), bd.dc && (bd.dc = !1, ww())
	}
}

function dL() {
	this.yv = null, this.dc = !1, this.e7 = 0, this.a9e = 56;
	var aWq = 0;

	function aWr() {
		bd.e7 = aWq = performance.now(), bd.yv.ih(), window.requestAnimationFrame(aWr)
	}
	this.dU = function() {
		this.a3c(), window.requestAnimationFrame(aWr), this.e7 = performance.now()
	}, this.a3T = function() {
		aC.gh ? (this.yv = new aWb, this.yv.dU()) : aC.k6 ? this.yv = new aWp : (this.yv = new aWV, this.yv.dU())
	}, this.a3c = function() {
		this.yv = new aWT, this.dc = !0
	}, this.ih = function() {
		this.yv.aWU++
	}, this.jk = function() {
		return this.yv.aWU
	}, this.aPu = function() {
		var di = performance.now();
		di < aWq + 1e3 || (this.e7 = di, this.yv.ih())
	}
}

function cn() {
	var aDs = 0,
		aWs = !0;

	function aWt(id) {
		id = [L(463), L(464), L(465), L(466)][id];
		aM.a5L(id)
	}
	this.ih = function() {
		var di, a5g;
		bd.e7 < aDs || (aDs = bd.e7 + 5e3, aC.gh) || aC.k6 || b8.ft.gk(aC.eI) || (di = new Date, a5g = di.getUTCSeconds(), aWs ? a5g < 50 && (aWs = !1) : a5g < 50 || (aWs = !0, (a5g = (di.getUTCMinutes() + 1) % 60) % 5 == 0 && (0 == a5g || 20 ==
			a5g || 40 == a5g ? aC.k4 < 7 && aWt(0) : 10 == a5g || 30 == a5g || 50 == a5g ? 7 !== aC.k4 && 10 !== aC.k4 || aWt(1) : 5 == a5g || 25 == a5g || 45 == a5g ? 8 === aC.k4 && aWt(2) : 35 == a5g && 9 === aC.k4 && aWt(3))))
	}
}

function ch() {
	var m4, m5, mH, mI, aWu = 0,
		aWv = 0;

	function aWx() {
		return Math.pow(Math.pow(mH - m4, 2) + Math.pow(mI - m5, 2), .5)
	}

	function aWw(e) {
		m4 = h.k * e.touches[0].clientX, m5 = h.k * e.touches[0].clientY, mH = h.k * e.touches[1].clientX, mI = h.k * e.touches[1].clientY
	}
	this.a0Q = function(e) {
		return 1 < e.touches.length ? (aWv = bd.e7, aWu = 3, aWw(e), aK.qn(), !0) : (aWu = 0, !1)
	}, this.a0R = function(e) {
		var aJ8, hq, hr;
		return 0 !== aC.ym && 1 < e.touches.length && (aWu = Math.max(aWu - 1, 0), aG.mM() && (aJ8 = aWx(), aWw(e), e = aWx(), hq = Math.floor((m4 + mH) / 2), hr = Math.floor((m5 + mI) / 2), aR.a7X(hq, hr, Math.max(.125, e) / Math.max(.125,
			aJ8)), bd.dc = !0), !0)
	}, this.a0o = function() {
		var ef, eh;
		return !!(aWu && (aWu = 0, bd.e7 < aWv + 500)) && (ef = (m4 + mH) / 2, eh = (m5 + mI) / 2, aK.a0i(ef, eh), aK.click(ef, eh, !0) && (bd.dc = !0), !0)
	}
}

function cw() {
	this.size = 0, this.dx = 0, this.aB = null, this.dU = function(aB) {
		this.dx = 0, this.aB = aB, this.size = aB.length
	}, this.t7 = function() {
		this.aB = null
	}, this.oX = function(size) {
		for (var f0 = 0, aB = this.aB, mM = this.dx + size - 1, aA = this.dx; aA <= mM; aA++) f0 |= (aB[aA >> 3] >> 7 - (7 & aA) & 1) << mM - aA;
		return this.dx += size, this.dx > 8 * this.size && console.error("Unwrapper Overflow"), f0
	}, this.aQW = function(size) {
		var es = size >> 1;
		return (1 << es) * this.oX(size - es) + this.oX(es)
	}, this.aQV = function(aWy) {
		return this.size === bB.aQP(aWy)
	}, this.aRn = function(vm, aWz, aX0) {
		var g0 = this.oX(vm);
		if (!g0) return null;
		for (var vm = Math.max(g0, aX0), g = new(aWz <= 8 ? Uint8Array : aWz <= 16 ? Uint16Array : Uint32Array)(vm), aA = 0; aA < g0; aA++) g[aA] = this.oX(aWz);
		aX0 = g[g0 - 1];
		return aX0 && g.fill(aX0, g0), g
	}, this.aRo = function(vm, aX1, aX0) {
		var g0 = this.oX(vm);
		if (!g0) return null;
		for (var vm = Math.max(g0, aX0), g = new Array(vm), aA = 0; aA < g0; aA++) g[aA] = this.aRl(aX1);
		return g.fill(g[g0 - 1], g0), g
	}, this.aRl = function(vm) {
		return bE.us.uw(this.oX(vm))
	}, this.aRm = function() {
		var pD = bD.ro.rp(bD.ro.rq(this.oX(30))),
			pD = b8.zR.a36(pD, "_", "/");
		pD = b8.zR.a36(pD, "-", "+");
		for (var aX2 = "";
			(pD.length + aX2.length) % 4;) aX2 += "=";
		pD = "data:image/png;base64," + pD + aX2;
		var aFo = new Image;
		aFo.onload = function() {
			b7.aGD.aGE(aFo), aFo.onload = null, aFo = null
		}, aFo.src = pD
	}
}

function dF() {
	this.aSc = 0, this.aSd = 0, this.aSY = 0, this.aSZ = 0, this.aSa = 0, this.aSb = 0, this.aAG = [0, 0, 0, 0], this.mL = function() {
		this.aSc = aR.wy(), this.aSd = aR.wz(), this.aSY = -this.aSc, this.aSZ = -this.aSd, this.aSa = h.i / i9, this.aSb = h.j / i9, this.aAG[0] = Math.floor(this.aSY), this.aAG[1] = Math.floor(this.aSZ), this.aAG[2] = Math.floor(this.aAG[0] +
			this.aSa + 1), this.aAG[3] = Math.floor(this.aAG[1] + this.aSb + 1), bZ.aAD = !0
	}
}

function ci() {
	var a6D, lp;
	this.dU = function() {
		a6D = 1, lp = 0
	}, this.ih = function() {
		0 < a6D && (lp = 0 === lp ? bd.e7 + 16 : lp, a6D = (a6D -= .001 * (bd.e7 - lp)) < 0 ? 0 : a6D, lp = bd.e7, bd.dc = !0)
	}, this.td = function() {
		0 < a6D && (te.fillStyle = "rgba(0,0,0," + a6D + ")", te.fillRect(0, 0, h.i, h.j))
	}
}

function a5() {
	this.size = 0, this.dx = 0, this.aB = null, this.dU = function(aB) {
		this.dx = 0, this.aB = aB, this.size = aB.length
	}, this.a6 = function(aWy) {
		return this.dU(new Uint8Array(this.aQP(aWy))), this.aB
	}, this.t7 = function() {
		this.aB = null
	}, this.a7 = function(size, a5k) {
		for (var aB = this.aB, mM = this.dx + size - 1, aA = this.dx; aA <= mM; aA++) aB[aA >> 3] |= (a5k >> mM - aA & 1) << 7 - (7 & aA);
		this.dx += size, this.dx > 8 * this.size && console.error("Wrapper Overflow")
	}, this.aQO = function(size, a5k) {
		var es = size >> 1,
			eb = 1 << es;
		this.a7(size - es, bJ.dj(a5k, eb)), this.a7(es, a5k % eb)
	}, this.aX5 = function(size) {
		for (var aB = this.aB, mM = this.dx + size, aA = this.dx; aA < mM; aA++) aB[aA >> 3] &= 255 ^ 128 >>> (7 & aA)
	}, this.aQP = function(aWy) {
		return aWy + 7 >> 3
	}, this.aX6 = function(g, j4, mM, aX7) {
		for (var aA = j4; aA < mM; aA++) this.a7(aX7, g[aA])
	}
}

function cv() {
	this.dU = function() {
		this.g = [], this.dx = 0
	}, this.aQs = function() {
		return new Uint8Array(this.g)
	}, this.a7 = function(aX8, value) {
		for (var g = this.g, mM = this.dx + aX8 - 1, aX9 = 1 + (mM >> 3); g.length < aX9;) g.push(0);
		for (var aA = this.dx; aA <= mM; aA++) g[aA >> 3] |= (value >> mM - aA & 1) << 7 - (7 & aA);
		this.dx += aX8
	}, this.db = function(g, vm, aWz) {
		var aXA = b8.pf.a1b(g);
		this.a7(vm, aXA);
		for (var aA = 0; aA < aXA; aA++) this.a7(aWz, g[aA])
	}, this.aS5 = function(g, vm, aX1) {
		var aXA = b8.pf.a1b(g);
		this.a7(vm, aXA);
		for (var aA = 0; aA < aXA; aA++) this.aS3(g[aA], aX1)
	}, this.aS3 = function(pD, vm) {
		var eY = pD.length;
		this.a7(vm, eY);
		for (var aA = 0; aA < eY; aA++) this.a7(16, pD.charCodeAt(aA))
	}, this.aS4 = function(a1h) {
		var aXB = (a1h = a1h.toDataURL()).split(",");
		if (aXB.length < 2) console.log("error 266");
		else {
			a1h = b8.zR.a36(a1h = aXB[aXB.length - 1], "/", "_"), a1h = b8.zR.a36(a1h, "\\+", "-");
			var a1h = b8.zR.a36(a1h, "=", ""),
				v5 = bE.ro.v2(a1h),
				eY = v5.length;
			this.a7(30, eY);
			for (var aA = 0; aA < eY; aA++) this.a7(6, v5[aA])
		}
	}
}
a(), self.aiCommand746 = function(f0) {
	0 === f0 ? bo() : 1 !== f0 || !z || 1 !== z.id || z.dk < 14 || bH.f1()
}, setTimeout(bo, 1e4), window.onload = function() {
	bo()
};