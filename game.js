var l, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, at, au, av, h, aw, ax, ay, az, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, bA,
	bB, bC, bD, bE, bF, bG, bH, bI, bJ, bK, bL, bM, bN, bO, bP, bQ, bR, s, bS, bT, bU, bV, bW, bX, bY, bZ, ba, bb, bc, bd, be, bf, z, bg, bh, bi, q, bj, bk, bl, bm, bn, fM, fN, fO, fP, fQ, fR, fS, fT, fU, fV, fW, fX, fY, i9, i8, iA, a6T, l3, jY, a0M,
	tf, x2, aAI, a3W, a3X, S = ["div", "100%", "⬅️ ", "absolute", "canvas", "none", "inherit", "rgb(", "rgba(", "center", "auto", "   ", "<br>", "hidden", "flex", "Data", "1em", "0.8em", "territorial.io", "span", "input",
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
	this.dg = 1093, this.n = 2053, this.rVersion = 8, this.dU = function() {
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
			0, .75), this.nj = et.mY(70, 40, 0, .85), this.nk = et.mW(255, 150, 0), this.nl = et.mY(255, 200, 80, .85), this.nm = et.mY(0, 0, 0, 0), this.nn = et.mY(255, 255, 255, 0), this.no = et.mY(254, 254, 254, 0)
}

function cs() {
	this.gu = new np, this.ft = new nq, this.nr = new ns, this.nt = new nu, this.jq = new nv
}

function np() {
	this.gv = function(eK) {
		aC.k6 ? b6.nr.gv(aC.eI, eK) : ay.nw.nx(eK)
	}, this.h5 = function(i7, iy) {
		aC.k6 ? b6.nr.h5(aC.eI, i7, iy) : ay.nw.ny(i7, iy)
	}, this.nz = function(i7, o0) {
		aC.k6 ? b6.nr.o1(aC.eI, i7, o0) : ay.nw.o2(i7, o0)
	}, this.h3 = function(i7, eK) {
		aC.k6 ? b6.nr.h3(aC.eI, i7, eK) : bL.h1.h2(aC.eI, eK) && ay.nw.o3(i7, eK)
	}, this.o4 = function(m0, eK) {
		aC.k6 ? b6.nr.o4(aC.eI, m0, eK) : bL.h1.o5(aC.eI, m0, eK) && ay.nw.o6(m0, eK)
	}, this.o7 = function(iy) {
		aC.k6 ? b6.nr.o7(aC.eI, iy) : ay.nw.o8(iy)
	}, this.o9 = function(oA) {
		aC.k6 ? b6.nr.oB(aC.eI, oA) : ay.nw.oC(oA)
	}, this.hH = function(oD) {
		aC.k6 ? b6.nr.hH(aC.eI, oD) : ay.nw.oE(oD)
	}, this.oF = function() {
		aC.k6 ? b6.nr.oF(aC.eI) : ay.nw.oG()
	}, this.hE = function() {
		aC.k6 ? b6.nr.hE(aC.eI) : ay.nw.o3(1, 0)
	}, this.gy = function(i7, eK, iy) {
		aC.k6 ? b6.nr.gy(aC.eI, i7, eK, iy) : ay.nw.oH(i7, eK, iy)
	}
}

function nv() {
	this.jr = function(player, o0, hC) {
		b8.ft.oI(player, hC, o0) && (ad.nz(player, o0), o0 < aC.jn) && aw.random() < aw.value(10) && (am.ib.it[o0] = 0)
	}, this.oJ = function(player, o0, hC) {
		b8.ft.oK(hC, o0) ? (b8.ft.fw(o0, bM.f5[0]), bb.oL(player, o0), ae.oM(o0, bM.f5[0])) : bb.fx(player, hC, 12)
	}
}

function nq() {
	this.oN = function(oA, player) {
		aM.o9(aC.eI, player, oA), ay.nw.oO(oA, player)
	}, this.oP = function(player) {
		aM.oQ(player, 0), ay.nw.oR(player)
	}, this.oS = function(oT, player) {
		aM.oU(oT, player), ay.nw.oV(oT, player)
	}, this.oW = function() {
		aC.k6 || aC.gh || ay.oX.oW()
	}
}

function nu() {
	this.ih = function(aB) {
		var id, fF, mM;
		for (bF.dU(aB), bF.dx += 2, mM = 8 * bF.size; bF.dx + 8 <= mM;) id = bF.oY(4), fF = bF.oY(9), 0 === id ? this.oZ(id, fF, bF.oY(22)) : 1 === id ? this.oZ(id, fF, bF.oY(10), bF.oY(10)) : 2 === id ? this.oZ(id, fF, bF.oY(10), bF.oY(9)) :
			3 === id || 4 === id ? this.oZ(id, fF, bF.oY(10), bF.oY(22)) : 5 === id || 6 === id ? this.oZ(id, fF, bF.oY(10)) : 7 === id ? this.oZ(id, fF, bF.oY(1)) : 10 === id ? this.oZ(id, fF, bF.oY(20), bF.oY(22)) : this.oZ(id, fF)
	}, this.oa = [], this.ob = function() {
		for (var od = 0, oe = 0, og = 0, oh = 0, oi = 0, oj = 0, aA = 0; aA < 512; aA++) od += af.lc[aA], oe += af.gL[aA], og += af.gZ[aA], oh += bL.x.ok[aA];
		oi += bL.x.ol, oj += ak.jo, this.oa.push(og % 1073741824 * 4 + (od + oe + oh + oi + oj) % 4)
	}, this.oZ = function(id, fF, fH, fJ) {
		0 === id ? b6.nr.gv(fF, fH) : 1 === id ? b6.nr.h5(fF, fH, fJ) : 2 === id ? b6.nr.o1(fF, fH, fJ) : 3 === id ? b6.nr.h3(fF, fH, fJ) : 4 === id ? b6.nr.o4(fF, fH, fJ) : 5 === id ? b6.nr.o7(fF, fH) : 6 === id ? b6.nr.oB(fF, fH) : 7 === id ?
			b6.nr.hH(fF, fH) : 8 === id ? b6.nr.oF(fF) : 9 === id ? b6.nr.om(fF) : 10 === id && b6.nr.gy(fF, fH >> 10, fJ, fH % 1024)
	}
}

function ns() {
	this.gv = function(player, eK) {
		b8.ft.gj(0) && b8.ft.gk(player) && bK.iC(eK) && (b7.on.oo(0, player, eK), aC.op.iv(player, eK))
	}, this.h5 = function(player, i7, iy) {
		b8.ft.gj(1) && b8.ft.gk(player) && b8.ft.oq(player, iy) && b8.ft.or(player, i7, 12, 0) && b8.ft.os(player, iy) && ((iy = ac.j9(player, bM.eU[0])) || ac.jR(player)) && (af.ot[player]++, b7.on.oo(1, player, i7, bM.eU[0]), am.iZ.il(player,
			iy)) && (b8.ft.ou(player), bb.ov(player, i7), am.iZ.is(player))
	}, this.o1 = function(player, i7, o0) {
		b8.ft.gj(1) && b8.ft.gk(player) && aC.hN && b8.ft.oq(player, o0) && b8.ft.ow(player, o0) && b8.ft.oI(player, b8.ft.i6(player, i7), o0) && (b7.on.oo(2, player, i7, o0), ad.nz(player, o0))
	}, this.h3 = function(player, i7, eK) {
		b8.ft.gj(1) && b8.ft.gk(player) && (0 === eK && 1 === i7 ? this.hE(player) : bK.iC(eK) && bL.x.ol !== bL.x.k1 && bL.x.ok[player] !== bL.x.ox && 0 !== af.gE[player].length && b8.ft.or(player, i7, 32, 0) && bL.kP.kQ(player, eK) && (bb.oy(
			player), b7.on.oo(3, player, i7, eK), b8.ft.ou(player), bj.oz.h3(player), bL.x.p0(player)))
	}, this.o4 = function(player, m0, eK) {
		b8.ft.gj(1) && b8.ft.gk(player) && bK.iC(eK) && bL.h1.p1(player, m0) && bL.kP.p2(eK) && (b7.on.oo(4, player, m0, eK), b8.ft.p3(player, 8), bb.fx(player, bM.f5[1], 12), bj.oz.o4(player), bL.x.o4())
	}, this.o7 = function(player, iy) {
		b8.ft.gj(1) && b8.ft.gk(player) && (iy = Math.min(iy, aC.eV), ac.j9(player, iy)) && (b7.on.oo(5, player, iy), ac.p4(player, iy))
	}, this.oB = function(player, oA) {
		(b8.ft.gj(1) || b8.ft.gj(2)) && b8.ft.gk(player) && (oA = bJ.p5(oA, 0, 1023), b7.on.oo(6, player, oA), ae.p6(player, 0, oA))
	}, this.hH = function(player, oD) {
		au.hG(player) && (b7.on.oo(7, player, oD), au.p7(player, oD))
	}, this.oF = function(player) {
		(b8.ft.gj(0) || b8.ft.gj(1)) && b8.ft.gk(player) && aL.p8(player) && (b7.on.oo(8, player), bO.oF(player))
	}, this.om = function(player) {
		b7.on.oo(9, player), bO.om(player)
	}, this.hE = function(player) {
		au.hI(player) && (b7.on.oo(3, player, 1, 0), au.hE(player))
	}, this.gy = function(player, i7, eK, iy) {
		b8.ft.gj(1) && b8.ft.gk(player) && b8.ft.oq(player, iy) && b8.ft.os(player, iy) && bK.iC(eK) && al.e9.eS(player, eK) && (ac.j9(player, bM.eU[0]) || ac.jR(player)) && (b7.on.oo(10, player, (i7 << 10) + bM.eU[0], eK), iy = b8.ft.ko(player,
			i7), af.fz[player].push(bM.eZ[0]), ac.iv(player, iy, bM.eU[0]), aE.iw(player, !0), bb.p9(player))
	}
}

function pA() {
	var pC;
	this.pB = [], this.pC = document.createElement("div"), this.pD = function(pE, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = pE, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.4em", title.style.overflowWrap = "break-word", this.pC.appendChild(
			title), title
	}, this.pF = function(pE, marginBottom) {
		var pG = document.createElement("p");
		return pG.textContent = pE, pG.style.fontSize = "0.75em", pG.style.lineHeight = "1.2em", pG.style.marginBottom = marginBottom || "0", this.pC.appendChild(pG), pG
	}, this.pH = function(pE) {
		var pI = document.createElement("p");
		return pI.textContent = pE, pI.style.fontSize = "1em", pI.style.marginBottom = "0", pI.style.whiteSpace = "pre-wrap", pI.style.overflowWrap = "break-word", this.pC.appendChild(pI), pI
	}, this.pJ = function(pK, fontSize) {
		var pC = document.createElement("div");
		return pC.innerHTML = pK, pC.style.fontSize = fontSize || "1em", pC.style.lineHeight = "1.2em", this.pC.appendChild(pC), pC
	}, this.pL = function(pM) {
		for (var pN = pM.pN, eY = pN.length, aA = 0; aA < eY; aA++) this.pC.appendChild(pN[aA])
	}, this.pO = function(pP) {
		return this.pB.push(pP), this.pC.appendChild(pP.e), pP
	}, this.resize = function() {
		for (var eY = this.pB.length, aA = 0; aA < eY; aA++) this.pB[aA].resize && this.pB[aA].resize()
	}, (pC = this.pC).style.position = "absolute", pC.style.height = "auto", pC.style.padding = "0.5em"
}

function pQ(pR, pS) {
	var pC = document.createElement("div");

	function pb() {
		var aA, pc, j, g6, eb, pW = h.k * pC.offsetWidth,
			pd = new Float64Array(function(pW) {
				var i = .25 * b8.pX.pY(.6) * h.pZ;
				return Math.max(Math.floor(pW / i), 1)
			}(pW)),
			pe = ba.pe,
			pf = (pW - (pd.length + 1) * ba.gap) / (pd.length * h.k);
		for (pd.fill(pe), aA = 0; aA < pS.length; aA++) pc = (eb = pS[aA].pC).style, j = b8.pg.min(pd), g6 = pd.indexOf(j), pc.top = b8.pX.ph(j), pc.left = b8.pX.ph(pe + g6 * (pf + pe)), pc.width = b8.pX.ph(pf), b8.pX.pi(eb, 5), pd[g6] += eb
			.offsetHeight + 3 * pe;
		pC.style.height = b8.pX.ph(b8.pg.max(pd) - 2 * pe)
	}
	this.pT = pC, this.pU = pS, this.resize = function() {
		var aA;
		for (aA = 0; aA < pS.length; aA++) pS[aA].resize();
		pb(), pb()
	}, pC.style.width = "100%", pC.style.maxWidth = "100%", pR.style.lineHeight = "1.5em", pR.style.overflowX = "hidden", pR.style.overflowY = "auto";
	for (var aA = 0; aA < pS.length; aA++) pC.appendChild(pS[aA].pC);
	pR.appendChild(pC)
}

function v(pj, pk, pl, pm, pn) {
	var self, po = document.createElement("button");

	function pv() {
		var q1;
		bH.q0() || (q1 = b8.color.q2(pl), !1 !== pm && 0 < q1[0] && q1[0] < 255 && q1[0] === q1[1] && q1[0] === q1[2]) || (po.style.backgroundColor = b8.color.q3(pl, q1[3] && q1[3] < 120 ? 150 : 50))
	}

	function pu() {
		if (pm) {
			var q1 = b8.color.q2(pl);
			if (q1[0] === q1[1] && q1[0] === q1[2]) return
		}
		pk && ((q1 = pk(this)) ? 2 === q1 && pv() : q5(this))
	}

	function px() {
		this.style.backgroundColor = pl
	}

	function pw() {
		q5(this)
	}

	function q5(eb) {
		eb.style.backgroundColor = pl, eb.blur()
	}
	this.button = po, this.pp = pk, this.pq = pl, this.pt = function(py) {
		py = 1.1 - Math.min(.01 * pj.length, .6) + .2 * py;
		po.style.fontSize = py.toFixed(1) + "em"
	}, this.ps = function(et) {
		et ? 1 === et ? et = b9.mq : 2 === et && (pm = 1, et = b9.mq) : (pm = 0, et = b9.ma), this.pq = pl = et, po.style.backgroundColor = et
	}, self = this, po.innerHTML = pj, po.style.color = pn ? b9.na : b9.me, po.style.userSelect = "none", po.style.outline = "none", po.style.overflowWrap = "break-word", self.ps(pl), po.style.border = "none", po.style.font = "inherit", self.pt(
		0), po.style.padding = "0em 0.3em", po.onclick = pu, po.addEventListener("mouseover", pv), po.addEventListener("mouseout", pw), po.addEventListener("focus", pv), po.addEventListener("blur", px)
}

function q6(q7, pR) {
	var pC;
	this.resize = function() {
		for (var aA = 0; aA < q7.length; aA++) b8.pX.pi(q7[aA].button);
		pC.style.gap = pC.style.padding = b8.pX.ph(ba.pe)
	}, (pC = document.createElement("div")).style.display = "grid", pC.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", pC.style.overflowY = "auto", pC.style.gridAutoRows = "5.3em", pC.style.maxHeight = "100%";
	for (var aA = 0; aA < q7.length; aA++) q7[aA].pt(1), pC.appendChild(q7[aA].button);
	pR.appendChild(pC)
}

function q9(qA, qB, qC) {
	this.ef = 0, this.eh = 0, this.i = 0, this.j = 0, this.resize = function() {
		this.j = Math.min(b8.pX.pY(qC || .5) * qA[1] * h.pZ, h.j - 2 * ba.gap), this.i = Math.min(this.j * (qA[0] / qA[1]), h.i - 2 * ba.gap), this.j = qA[1] * this.i / qA[0], this.ef = ba.gap + qB[0] * (h.i - this.i - 2 * ba.gap), this.eh = ba
			.gap + qB[1] * (h.j - this.j - 2 * ba.gap)
	}, this.qD = function() {
		return this.ef + .5 * this.i
	}
}

function qE(qF, qG) {
	var qP, self, qH = document.createElement("div"),
		qI = document.createElement("div"),
		qJ = document.createElement("div"),
		qK = null,
		qQ = (this.qL = new qM({
			value: "",
			dx: -1
		}, 0, qN, function(e) {
			qK.qW.textContent = 127 - e.target.value.length
		}), 0),
		qR = 1,
		qS = 0,
		qT = 1048575;

	function qN() {
		qF(), qK.qW.textContent = 127
	}

	function qg(qf, pP) {
		pP && (pP.qm = 1, qf.appendChild(bl.qn.transform(pP)))
	}

	function qk(bp) {
		qR ? qH.scrollTop = qH.scrollHeight : bp && (qH.scrollTop = qS)
	}
	this.qX = function(qY) {
			qT = 1048575, qI.textContent = "", qY || this.lP()
		}, this.lP = function() {
			var qZ = bl.x.qa[0],
				qZ = bl.x.qc[qZ],
				qd = qZ.qd,
				eY = qd.length,
				j4 = 1048575 === qT ? 0 : eY - (qZ.qe - qT + 1048575) % 1048575;
			if (qT = qZ.qe, !(eY <= (j4 = Math.max(j4, 0)))) {
				for (var qf = document.createDocumentFragment(), aA = j4; aA < eY; aA++) qg(qf, bl.qh.qi(qd[aA], bl.qh.qj(qd[aA])));
				qI.appendChild(qf), qk()
			}
		}, this.ql = function(p) {
			var qf = document.createDocumentFragment();
			qg(qf, p), qI.appendChild(qf), qk()
		}, this.show = function(pR) {
			pR.appendChild(qH), pR.appendChild(qJ), this.resize(pR)
		}, this.qo = function(pR) {
			pR.removeChild(qH), pR.removeChild(qJ)
		}, this.resize = function(pR) {
			qQ = pR ? pR.offsetHeight : qQ;
			var pR = b8.pX.qq(.04, .75),
				qr = Math.max(pR, qQ - pR),
				qs = h.i / h.k,
				qt = .7 * qs,
				qr = (qJ.style.top = b8.pX.ph(qQ - pR), qJ.style.height = b8.pX.ph(pR), qH.style.top = b8.pX.ph(qQ - pR - qr), qH.style.height = b8.pX.ph(qr), b8.pX.pi(qH, 2), this.qL.e.style.width = b8.pX.ph(qt), this.qL.e.style.fontSize = qP.button
					.style.fontSize = b8.pX.ph(.5 * pR), b8.pX.pi(this.qL.e, 6), qP.button.style.left = b8.pX.ph(qt), qP.button.style.width = b8.pX.ph(qs - qt), .385 * pR);
			z.a0.qv() && (qr *= .8 - .12 * (h.i > h.j)), qI.style.marginLeft = qI.style.marginRight = b8.pX.ph(.5 * qr), qI.style.fontSize = b8.pX.ph(qr), qk(1)
		}, (self = this).qL.e.qU = 127, qH.style.position = "absolute", qH.style.top = "0", qH.style.left = "0", qH.style.width = "100%", qH.style.overflowX = "hidden", qH.style.overflowY = "auto", qH.style.font = "inherit", qH.style
		.backgroundColor = b9.mc, qH.addEventListener("scroll", function() {
			qS = qH.scrollTop, qR = qS < qH.scrollHeight - qH.clientHeight - 2 ? 0 : 1
		}), qI.style.font = "inherit", qJ.style.position = "absolute", qJ.style.left = "0", qJ.style.width = "100%", self.qL.e.setAttribute("placeholder", L(13)), self.qL.e.style.position = "absolute", self.qL.e.style.top = "0", self.qL.e.style
		.left = "0", self.qL.e.style.height = "100%", self.qL.e.style.backgroundColor = b9.mZ, self.qL.e.style.textAlign = "center", (qP = new v(L(14), qN)).button.top = "0", qP.button.style.position = "absolute", qP.button.style.height = "100%", qP
		.ps(b9.nn), qK = new qV("127", qP.button, 1, 1), qH.appendChild(qI), qJ.appendChild(self.qL.e), qJ.appendChild(qP.button)
}

function qw(qx, pj, qy) {
	function click() {
		var value = 1 - qx.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + pj, void 0 !== qx.dx ? bh.qz.r0(qx.dx, value) : qx.value = value, qy && qy(value)
	}
	var e;
	pj = pj || L(15), this.e = document.createElement("p"), (e = this.e).textContent = (qx.value ? "🟩 " : "⬜ ") + pj, e.style.margin = "0", e.style.marginBottom = "0.5em", e.style.cursor = "pointer", e.addEventListener("click", click)
}

function r1(pR, pK) {
	var pC = document.createElement("div");
	this.pT = pC, this.resize = function() {
		pC.style.padding = b8.pX.ph(ba.pe), pC.style.lineHeight = b8.pX.ph(b8.pX.qq(.035))
	}, pR.style.overflowX = "hidden", pR.style.overflowY = "auto", pC.innerHTML = pK, pR.appendChild(pC)
}

function r2(r3) {
	var pC = document.createElement("div");
	this.e = pC, this.r4 = r3, this.resize = function() {
		for (var eY = r3.length, aA = 1; aA < eY; aA++) b8.pX.pi(r3[aA], 4)
	};
	var aA, eY = r3.length;
	for (pC.style.width = "100%", pC.style.height = "2.7em", pC.style.marginTop = "0.6em", pC.style.border = "inherit", aA = 0; aA < eY; aA++) r3[aA].style.verticalAlign = "top", r3[aA].style.width = (100 / eY).toFixed(2) + "%", r3[aA].style.height =
		"100%", r3[aA].style.fontSize = "0.75em", pC.appendChild(r3[aA])
}

function r5(r6, pl, r7) {
	this.pC = document.createElement("div"), this.q7 = r6;
	var r8 = 0;
	this.resize = function(pR, rA) {
		var eY = r6.length;
		if (!r7)
			for (var aA = 1; aA < eY; aA++) b8.pX.pi(r6[aA].button, 4);
		for (var rB = 0, aA = 0; aA < eY; aA++) rB += r6[aA].button.offsetWidth;
		if (pR && (r8 = pR.offsetWidth), rA && rB < r8)
			for (aA = 0; aA < eY; aA++) r6[aA].button.style.width = (100 * r6[aA].button.offsetWidth / rB).toFixed(2) + "%";
		else
			for (aA = 0; aA < eY; aA++) r6[aA].button.style.width = "auto";
		rA || this.resize(pR, 1)
	};
	var r9 = this;
	r9.pC.style.height = r9.pC.style.maxHeight = "100%";
	for (var aA = 0; aA < r6.length; aA++) r6[aA].ps(pl), r6[aA].button.style.height = "100%", r6[aA].button.style.padding = "0.0em 0.9em", r9.pC.appendChild(r6[aA].button)
}

function rC() {
	var e;
	this.e = document.createElement("hr"), this.resize = function() {
		b8.pX.pi(this.e, 8, b9.mn)
	}, (e = this.e).style.marginBottom = e.style.marginTop = "0.65em", e.style.marginLeft = e.style.marginRight = "-4%", e.style.border = "none"
}

function rD() {
	var rH, rI, rE = document.createElement("div"),
		rF = 0,
		rG = 0;
	this.show = function(ef, eh, pE, rJ, rK) {
		if (rF) {
			if (!rJ) return;
			this.qo()
		}
		ef === eh && -1 === ef ? (ef = rH, eh = rI) : (rH = ef, rI = eh), rK || (rG = rJ), rF = 1;
		rK = h.i / h.k, rE.style.whiteSpace = "pre", rE.textContent = pE, b8.pX.pi(rE, 5), rE.style.font = b8.pX.rM(0, b8.pX.qq(.015)), rE.style.padding = "0.3em 0.6em", rE.style.left = ef + "px", rE.style.top = "0px", document.body.appendChild(
			rE), rJ = ef + rE.offsetWidth - rK;
		0 < rJ && (rE.style.left = (pE = ef - rJ) + "px", pE < 5) && (rE.style.whiteSpace = "pre-wrap"), rE.style.top = eh - rE.offsetHeight + rG * ba.rO + "px"
	}, this.qo = function(rP) {
		if (rF) {
			if (rP && rG) return 0;
			rF = 0, document.body.removeChild(rE)
		}
		return 1
	}, rE.style.position = "absolute", rE.style.backgroundColor = b9.ma, rE.style.color = b9.me, rE.style.pointerEvents = "none", rE.style.zIndex = "5", rE.style.maxWidth = "100%"
}

function qM(rQ, type, rR, rS) {
	var e;
	this.e = document.createElement("input"), (e = this.e).type = type ? "number" : "text", e.id = "input" + s.x.rT++, e.value = rQ.value, e.style.width = "100%", e.style.userSelect = "none", e.style.outline = "none", e.style.resize = "none", e.style
		.border = "inherit", e.style.font = "inherit", e.style.color = b9.me, e.style.backgroundColor = b9.mX, e.style.fontSize = "1em", e.style.padding = "0.1em 0.2em", e.addEventListener("focus", function() {
			h.rU++
		}), e.addEventListener("blur", function() {
			h.rU--, -1 !== rQ.dx && bh.qz.r0(rQ.dx, e.value)
		}), e.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== rQ.dx && bh.qz.r0(rQ.dx, e.value), rR ? rR() : e.blur())
		}), rS && e.addEventListener("input", function(pP) {
			rS(pP)
		})
}

function rV(pR, data) {
	var eY = data.rW.length,
		rX = document.createElement("div"),
		rY = document.createElement("div"),
		rZ = document.createElement("div"),
		ra = new Array(eY),
		pS = new Array(eY),
		rb = new Array(data.rc.length),
		rd = b8.color.mY(70, 70, 0, .35);

	function q3() {
		this.style.backgroundColor = b8.color.q3(rd, 160)
	}

	function ri() {
		this.style.backgroundColor = rd
	}

	function pb() {
		var er;
		for (pR.style.font = b8.pX.rM(0, b8.pX.rs(.026, .5, .03)), aA = 1; aA < rb.length; aA++) b8.pX.pi(rb[aA], 4);
		if (b8.pX.pi(rX, 2), eY) {
			for (var gx, rt = rX.offsetWidth, ru = rZ.offsetWidth, aA = 0; aA < rb.length; aA++) gx = .01 * data.rh[aA] * ru, rb[aA].style.width = (100 * gx / rt).toFixed(2) + "%";
			var kV = data.rW[0].length;
			for (aA = 0; aA < eY; aA++)
				for (b8.pX.pi(ra[aA], 2), er = 1; er < kV; er++) b8.pX.pi(pS[aA][er], 4);
			rY.re && (rY.scrollTop = rY.re)
		}
	}
	this.resize = function() {
			pb(), pb()
		}, pR.style.display = "flex", pR.style.flexDirection = "column", rY.style.overflowX = "hidden", rY.style.overflowY = "auto", rY.addEventListener("scroll", function() {
			this.re = this.scrollTop
		}),
		function() {
			var eb, aA, rW = data.rW,
				kV = eY ? rW[0].length : 0;
			for (aA = 0; aA < eY; aA++) {
				ra[aA] = document.createElement("div"), ra[aA].style.backgroundColor = function(aA) {
					return aA % 2 == 1 ? b8.color.mY(130, 130, 130, .35) : b9.md
				}(aA), ra[aA].style.width = "100%", ra[aA].style.display = "flex", pS[aA] = new Array(kV);
				for (var er = 0; er < kV; er++) pS[aA][er] = eb = document.createElement("div"), eb.style.display = "flex", eb.style.justifyContent = "center", eb.style.wordBreak = "break-all", eb.style.padding = "0.4em 0em", eb.style.width = data
					.rh[er] + "%", eb.innerHTML = rW[aA][er].f0, 1 === rW[aA][er].di && (eb.name = "" + aA, eb.style.color = b9.na, eb.style.backgroundColor = rd, eb.addEventListener("mouseover", q3), eb.addEventListener("mouseout", ri), function(eb,
						rk, rl) {
						2147483647 !== rl && eb.addEventListener("click", function() {
							bB.a6(30), bB.a7(30, rk), bF.dU(bB.aB), this.style.backgroundColor = rd, s.t(8, s.rm, new rn(25, {
								ro: 0,
								rk: bD.rp.rq(bD.rp.rr(5)),
								rl: rl
							}))
						})
					}(eb, rW[aA][er].rk, rW[aA][er].rl)), ra[aA].appendChild(eb)
			}
			for (rX.style.display = "flex", rX.style.backgroundColor = b8.color.mY(0, 120, 0, .35), aA = 0; aA < rb.length; aA++) rb[aA] = eb = document.createElement("div"), eb.style.display = "flex", eb.style.justifyContent = "center", eb.style
				.wordBreak = "break-all", eb.style.padding = "0.4em 0em", eb.style.width = data.rh[aA] + "%", eb.innerHTML = data.rc[aA], rX.appendChild(eb)
		}();
	for (var aA = 0; aA < eY; aA++) rZ.appendChild(ra[aA]);
	rY.appendChild(rZ), pR.appendChild(rX), pR.appendChild(rY)
}

function rv() {
	var rz, s0, rw = document.createElement("div"),
		rx = document.createElement("div"),
		ry = document.createElement("div"),
		rZ = document.createElement("div"),
		q7 = [],
		s1 = [L(16), L(17), L(18), L(19), L(20), L(21)],
		s2 = [1, 2, 3, 0, 9, 10];

	function s4(aA) {
		s.t(8, 0, new rn(21, {
			s6: s2[aA],
			s7: 0,
			s8: 10
		}))
	}
	this.show = function() {
			this.r0(s.x.s9), document.body.appendChild(rw)
		}, this.qo = function() {
			document.body.removeChild(rw)
		}, this.r0 = function(s9) {
			for (var sA = [3, 0, 1, 2, 4, 5], aA = 0; aA < q7.length; aA++) {
				var i = s9[aA];
				rz[sA[aA]][1].qW.textContent = i || ""
			}
		}, this.resize = function() {
			var aA, sB = ba.gap,
				j = b8.pX.sC(.085),
				i = Math.min(4 * j, h.i - 2 * sB),
				eY = q7.length;
			for (b8.pX.sD(rw, sB, h.j - sB - j, i, j), b8.pX.pi(rw), b8.pX.pi(rx, 6), aA = 0; aA < eY - 1; aA++) b8.pX.pi(q7[aA].button, 6);
			for (aA = 0; aA < eY; aA++) rz[aA][0].resize();
			for (q7[0].ef = 0, q7[0].button.style.left = b8.pX.ph(q7[0].ef), q7[0].button.style.width = b8.pX.ph(100), aA = 1; aA < eY; aA++) q7[aA].ef = q7[aA - 1].ef + q7[aA - 1].button.offsetWidth, q7[aA].button.style.left = b8.pX.ph(q7[aA].ef);
			if (!s0) {
				if (!aa.sE()) return;
				(s0 = aa.get(14)).style.width = "24%", s0.style.position = "absolute", rx.appendChild(s0)
			}
			s0.style.left = b8.pX.ph(0), s0.style.top = "7%", ry.sF && (ry.scrollLeft = ry.sF)
		}, rw.style.position = "absolute", rx.style.width = "25%", rx.style.height = "100%", rx.style.backgroundColor = b9.ma, ry.style.position = "absolute", ry.style.width = "75%", ry.style.height = "100%", ry.style.backgroundColor = b9.ma, ry
		.style.top = ry.style.right = b8.pX.ph(0), b8.pX.s3(ry), rZ.style.height = rZ.style.maxHeight = "100%", q7.push(new v("", function() {
			s4(0)
		}, b9.nO)), q7.push(new v("", function() {
			s4(1)
		}, b9.nP)), q7.push(new v("", function() {
			s4(2)
		}, b9.nH)), q7.push(new v("", function() {
			s4(3)
		}, b9.n2)), q7.push(new v("", function() {
			s4(4)
		}, b9.nj)), q7.push(new v("", function() {
			s4(5)
		}, b9.nh)), rz = new Array(q7.length);
	for (var aA = 0; aA < q7.length; aA++) q7[aA].button.style.position = "absolute", rz[aA] = [new s5(s1[aA], q7[aA].button, .25, .45), new s5("", q7[aA].button, .53, .84, 1)], q7[aA].button.style.height = q7[aA].button.style.maxHeight = "100%", q7[
		aA].button.top = b8.pX.ph(0), rZ.appendChild(q7[aA].button);
	ry.appendChild(rZ), rw.appendChild(rx), rw.appendChild(ry)
}

function sG(sH, sI, sJ, sK, qF, qG) {
	var sL = document.createElement("div"),
		sM = document.createElement("div"),
		sN = document.createElement("div"),
		sO = document.createElement("div"),
		sP = document.createElement("div"),
		sQ = document.createElement("div"),
		sR = document.createElement("div"),
		sS = document.createElement("div"),
		sT = document.createElement("span"),
		sU = document.createElement("div");
	this.sV = new qE(qF, qG), this.sW = new sX(qG), this.sY = [sH, sI, sJ, sK], this.sc = function(sd) {
		sd = (sd / 10).toFixed(1) + "%";
		sS.style.width = sd, sT.innerHTML = sd
	}, this.se = function() {
		this.sW.qo(sQ), this.sV.show(sQ)
	}, this.sf = function() {
		this.sV.qo(sQ), this.sW.show(sQ)
	}, this.sg = function() {
		return sM
	}, this.show = function() {
		document.body.appendChild(sL)
	}, this.qo = function() {
		document.body.removeChild(sL)
	}, this.resize = function(sh) {
		var si = 1 - .4 * z.a0.qv() * (h.i > 1.6 * h.j),
			sj = b8.pX.qq(.05 * si),
			sk = h.j > h.i,
			sl = b8.pX.qq(.07 * si + .03 * sk),
			sm = b8.pX.qq(.04 + .02 * sk),
			sk = b8.pX.qq(.02 * si + .01 * sk),
			so = b8.pX.qq(.025);
		sL.style.font = b8.pX.rM(0, so), si < 1 && (so = b8.pX.rM(0, si * so), sN.style.font = so, sP.style.font = so, sU.style.font = so, sR.style.font = so, sO.style.font = so), sM.style.height = b8.pX.ph(sj), sM.style.font = b8.pX.rM(0, .72 *
				sj), b8.pX.pi(sM, 2), sN.style.top = b8.pX.ph(sj), sN.style.height = b8.pX.ph(sl), b8.pX.pi(sN, 2), sO.style.font = b8.pX.rM(0, si * b8.pX.qq(.02)), sO.style.top = b8.pX.ph(sj + sl), sO.style.height = b8.pX.ph(sm), b8.pX.pi(sO,
			2), sP.style.top = b8.pX.ph(sj + sl + sm), sP.style.height = b8.pX.ph(sl), b8.pX.pi(sP, 2), sQ.style.top = b8.pX.ph(sj + sl + sm + sl), sQ.style.height = b8.pX.ph(h.j / h.k - sj - 3 * sl - sm - sk), sR.style.top = b8.pX.ph(h.j / h.k -
				sl - sk), sR.style.height = b8.pX.ph(sk), b8.pX.pi(sR, 8), sT.style.font = b8.pX.rM(0, .8 * sk), sU.style.top = b8.pX.ph(h.j / h.k - sl), sU.style.height = b8.pX.ph(sl), b8.pX.pi(sU, 8), sH.resize(sN), sI.resize(sN), sJ.resize(
			sN), sK.resize(sN), sh ? this.sV.resize(sQ) : this.sW.resize()
	};
	qF = this;
	sL.style.position = "absolute", sL.style.top = "0", sL.style.left = "0", sL.style.width = "100%", sL.style.height = "100%", sL.style.backgroundColor = b9.md, bH.q0() || (sL.style.backdropFilter = "blur(4px)", sL.style.webkitBackdropFilter =
			"blur(4px)"),
		__fx.customLobby.isActive() && (sL.style.display = "none"), sM.style.position = "absolute", sM.style.top = "0", sM.style.left = "0", sM.style.width = "100%", sM.style.display = "flex", sM.style.alignItems = "center";
	for (var g = [sN, sO, sP, sU], aA = 0; aA < g.length; aA++) g[aA].style.position = "absolute", g[aA].style.left = "0", g[aA].style.width = "100%", b8.pX.s3(g[aA]);
	sQ.style.position = "absolute", sQ.style.left = "0", sQ.style.width = "100%", sQ.style.font = "inherit", sR.style.position = "absolute", sR.style.left = "0", sR.style.width = "100%", sS.style.position = "absolute", sS.style.top = "0", sS.style
		.left = "0", sS.style.height = "100%", sS.style.width = "50%", sS.style.backgroundColor = b9.n0, sT.innerHTML = "", sT.style.position = "absolute", sT.style.top = "50%", sT.style.left = "50%", sT.style.transform = "translate(-50%, -50%)", sM
		.appendChild(function() {
			var sb = document.createElement("h1");
			return sb.textContent = L(22), sb.style.margin = "0 auto 0.15em auto", sb.style.webkitTextStroke = "0.02em brown", sb.style.fontFamily = "Arial Black, Trebuchet MS", sb.style.fontSize = "inherit", sb.style.fontWeight = "inherit", sb
		}()), sN.appendChild(sH.pC), sO.appendChild(sI.pC), sP.appendChild(sJ.pC), sR.appendChild(sS), sR.appendChild(sT), sU.appendChild(sK.pC), sL.appendChild(sM), sL.appendChild(sN), sL.appendChild(sO), sL.appendChild(sP), sL.appendChild(sQ), sL
		.appendChild(sR), sL.appendChild(sU), qF.sW.show(sQ)
}

function sX(qG) {
	var sL = document.createElement("div"),
		sQ = document.createElement("div");
	this.lP = function() {
			sQ.textContent = "", bl.sq.qo(1);
			for (var qf = document.createDocumentFragment(), sr = bl.x.qa[0], ss = bl.ss.st[sr], su = bl.ss.su[sr], aA = 0; aA < ss.length; aA++) ! function(qf, pP, sw, sr) {
				var qW = document.createElement("span");
				qW.textContent = (sw ? "🟢 " : "⚪ ") + bl.qh.sx(pP, sr), qW.style.color = bl.qh.sy(pP.sz), qW.style.cursor = "pointer", qW.style.margin = "0.2em 0.2em 0.2em 0.2em", qW.style.width = qW.style.maxWidth = 2 === sr ? "10em" : "9em",
					qW.style.height = qW.style.maxHeight = "1.4em", qW.style.whiteSpace = "nowrap", qW.style.overflow = "hidden", qW.style.textOverflow = "ellipsis", qW.style.font = "inherit", qW.style.display = "inline-block", bl.qh.t0(pP) && (
						qW.style.textDecoration = "underline"), qW.onclick = function(e) {
						qG(e, pP)
					}, bH.q0() || (qW.onmouseover = function(e) {
						bl.sq.t1(e, pP, 1)
					}), qf.appendChild(qW)
			}(qf, ss[aA], aA < su, sr);
			sQ.appendChild(qf)
		}, this.show = function(pR) {
			pR.appendChild(sL)
		}, this.qo = function(pR) {
			pR.removeChild(sL)
		}, this.resize = function() {
			sQ.style.fontSize = b8.pX.ph(b8.pX.qq(.02, .3))
		}, sL.style.top = "0", sL.style.left = "0", sL.style.width = sL.style.height = "100%", sL.style.overflowX = "hidden", sL.style.overflowY = "auto", sL.style.font = "inherit", sQ.style.font = "inherit", sQ.style.margin = "0.4em", sL
		.appendChild(sQ)
}

function t2(t3) {
	var sL = document.createElement("div"),
		qJ = document.createElement("div"),
		t4 = [];

	function pv() {
		bH.q0() || (this.style.backgroundColor = b8.color.q3(b9.ma, 50))
	}

	function pw() {
		this.style.backgroundColor = b9.ma
	}
	this.r0 = function(t6, t7) {
			t4[2].textContent = t6 + 1 + " / " + t7
		}, this.show = function(pP) {
			qJ.appendChild(bl.qn.transform(pP)), document.body.appendChild(sL)
		}, this.resize = function() {
			var j = b8.pX.qq(.03, .5);
			sL.style.width = 10 * j + "px", sL.style.font = b8.pX.rM(1, .75 * j), b8.pX.pi(sL, 4), qJ.style.top = j + "px", qJ.style.font = b8.pX.rM(0, .55 * j), b8.pX.pi(qJ, 2), sL.style.height = j + qJ.offsetHeight + "px";
			for (var aA = 0; aA < 3; aA++) b8.pX.pi(t4[aA], 6), t4[[0, 1, 3][aA]].style.width = 2 * j + "px";
			for (aA = 0; aA < 4; aA++) t4[aA].style.height = j + "px", b8.pX.pi(t4[aA], 2);
			t4[2].style.width = 4 * j + "px", t4[1].style.left = 2 * j + "px", t4[2].style.left = 4 * j + "px", t4[3].style.left = 8 * j + "px"
		}, this.t8 = function() {
			for (var aA = 0; aA < 4; aA++) t4[aA].onclick = null, t4[aA].onmouseover = null, t4[aA].onmouseout = null;
			document.body.removeChild(sL), sL = qJ = t4 = null
		}, sL.style.position = "absolute", sL.style.color = b9.me, sL.style.zIndex = "3", sL.style.right = "0", sL.style.top = "0", qJ.style.position = "absolute", qJ.style.height = "auto", qJ.style.color = b9.me, qJ.style.backgroundColor = b9.ma, qJ
		.style.left = "0", qJ.style.width = "100%", qJ.style.overflowWrap = "break-word", sL.appendChild(qJ);
	for (var aA = 0; aA < 4; aA++) t4[aA] = document.createElement("div"), t4[aA].style.position = "absolute", t4[aA].style.backgroundColor = b9.ma, t4[aA].style.color = b9.me, t4[aA].style.top = "0", t4[aA].style.display = "flex", t4[aA].style
		.justifyContent = "center", t4[aA].style.alignItems = "center", t4[aA].style.userSelect = "none", t4[aA].style.outline = "none", t4[aA].style.font = "inherit", 2 !== (t4[aA].t5 = aA) && (t4[aA].onclick = t3, t4[aA].onmouseover = pv, t4[aA]
			.onmouseout = pw), sL.appendChild(t4[aA]);
	t4[0].textContent = "◀", t4[1].textContent = "▶", t4[3].textContent = "✖"
}

function t9(t3) {
	var rE = document.createElement("div");

	function pv() {
		bH.q0() || (rE.style.backgroundColor = b8.color.q3(b9.ma, 50))
	}

	function pw() {
		rE.style.backgroundColor = b9.ma
	}
	this.r0 = function(t7) {
			rE.textContent = t7
		}, this.show = function() {
			document.body.appendChild(rE)
		}, this.resize = function() {
			var j = b8.pX.qq(.03, .5);
			rE.style.width = 2 * j + "px", rE.style.height = j + "px", rE.style.font = b8.pX.rM(1, .75 * j), b8.pX.pi(rE, 4), b8.pX.pi(rE, 2)
		}, this.t8 = function() {
			rE.onclick = null, rE.onmouseover = null, rE.onmouseout = null, document.body.removeChild(rE), rE = null
		}, rE.style.position = "absolute", pw(), rE.style.color = b9.me, rE.style.zIndex = "3", rE.style.right = "0", rE.style.top = "0", rE.style.display = "flex", rE.style.justifyContent = "center", rE.style.alignItems = "center", rE.style
		.userSelect = "none", rE.style.outline = "none", rE.onclick = t3, rE.onmouseover = pv, rE.onmouseout = pw
}

function tA(r6) {
	var sL = document.createElement("div"),
		tB = document.createElement("div"),
		rF = (this.ef = 0, this.eh = 0);

	function tD() {
		bl.tE.qo()
	}
	this.q7 = r6, this.show = function(ef, eh, tG) {
		if (rF) return [0, 0];
		rF = 1, this.ef = ef, this.eh = eh,
			function(self, tG) {
				var i = b8.pX.qq(.16, .7),
					j = r6.length * i / 3,
					tI = h.i / h.k,
					tJ = h.j / h.k,
					mG = Math.min(1, Math.min(tI / i, tJ / j));
				i *= mG, j *= mG, tG && (self.ef += b8.pX.qq(.03, .5)), self.ef = bJ.p5(self.ef, 0, tI - i), self.eh = bJ.p5(self.eh, 0, tJ - j), tB.style.left = self.ef + "px", tB.style.top = self.eh + "px", tB.style.width = i + "px", tB.style
					.height = j + "px", tB.style.font = b8.pX.rM(0, .34 * j / r6.length), b8.pX.pi(tB, 5);
				for (var aA = 1; aA < r6.length; aA++) b8.pX.pi(r6[aA].button, 8)
			}(this, tG), document.body.appendChild(sL)
	}, this.qo = function() {
		rF && (rF = 0, sL.removeEventListener("click", tD), document.body.removeChild(sL))
	};
	for (var aA = 0; aA < r6.length; aA++) new qV("" + (1 + aA), r6[aA].button, 0, 1);
	sL.style.position = "fixed", sL.style.top = "0", sL.style.left = "0", sL.style.width = "100%", sL.style.height = "100%", sL.style.zIndex = "5", tB.style.position = "absolute",
		function() {
			for (var tF = (100 / r6.length).toFixed(2) + "%", aA = 0; aA < r6.length; aA++) r6[aA].button.style.width = "100%", r6[aA].button.style.height = r6[aA].button.style.maxHeight = tF, r6[aA].button.style.padding = "0.0em 0.9em", tB
				.appendChild(r6[aA].button)
		}(), sL.appendChild(tB), sL.addEventListener("click", tD)
}

function tK(rQ, tL) {
	this.pN = [];
	var tM = this.pN;

	function click() {
		for (var aA = 0; aA < tM.length; aA++) tM[aA].textContent = tM[aA].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var dx = parseInt(this.name);
		void 0 !== rQ.dx && bh.qz.r0(rQ.dx, dx), tL && tL(dx)
	}
	for (var tN, eY = rQ.tO.length, aA = 0; aA < eY; aA++)(tN = document.createElement("p")).textContent = "⚪ " + rQ.tO[aA], tN.style.margin = "0", tN.name = "" + aA, tN.style.cursor = "pointer", tN.style.fontSize = "1em", tN.addEventListener(
		"click", click), tM.push(tN);
	tM[rQ.value].textContent = tM[rQ.value].textContent.replace("⚪", "🟢")
}

function tP(title, tQ, tR) {
	var rw = document.createElement("div"),
		tS = document.createElement("div"),
		rZ = document.createElement("div"),
		tT = document.createElement("div"),
		tU = document.createElement("div");
	this.tV = rZ, this.tW = tQ, this.show = function() {
			!1 !== tR ? document.body.appendChild(rw) : (document.body.appendChild(tS), document.body.appendChild(tT))
		}, this.qo = function() {
			!1 !== tR ? document.body.removeChild(rw) : (document.body.removeChild(tS), document.body.removeChild(tT))
		}, this.ta = function() {
			var qr = b8.pX.qq(.1),
				qp = b8.pX.qq(.08 + .04 * (h.tb < 1));
			return {
				qr: qr,
				qp: qp,
				tc: h.j / h.k - qr - qp
			}
		}, this.resize = function(rA) {
			var eY = tQ.length,
				td = this.ta(),
				qr = td.qr,
				qp = td.qp;
			for (tS.style.height = b8.pX.ph(qr), b8.pX.pi(tS, 2), tT.style.top = b8.pX.ph(h.j / h.k - qp), tT.style.height = b8.pX.ph(qp), b8.pX.pi(tT, 8), rZ.style.top = b8.pX.ph(qr), rZ.style.height = rZ.style.maxHeight = b8.pX.ph(td.tc), tS.style
				.font = b8.pX.rM(0, b8.pX.qq(.02, .3)), tT.style.font = b8.pX.rM(0, b8.pX.qq(.02, .7)), rZ.style.font = b8.pX.rM(0, b8.pX.qq(.02, .7)), aA = 1; aA < eY; aA++) b8.pX.pi(tQ[aA].button, 4);
			for (var rB = 0, aA = 0; aA < eY; aA++) rB += tQ[aA].button.offsetWidth;
			if (rA && rB < tT.offsetWidth)
				for (aA = 0; aA < eY; aA++) tQ[aA].button.style.width = (100 * tQ[aA].button.offsetWidth / rB).toFixed(2) + "%";
			else
				for (aA = 0; aA < eY; aA++) tQ[aA].button.style.width = "auto";
			tT.sF && (tT.scrollLeft = tT.sF), rA || this.resize(!0)
		}, this.te = function() {
			var td = this.ta(),
				et = h.k;
			tf.fillStyle = b9.ma, tf.fillRect(0, et * td.qr, h.i, et * td.tc)
		}, rw.style.position = "absolute", rw.style.top = "0", rw.style.left = "0", rw.style.width = "100%", rw.style.height = "100%", tS.style.position = "absolute", tS.style.top = "0", tS.style.left = "0", tS.style.width = "100%", tS.style
		.display = "flex", tS.style.backgroundColor = b9.ma, tT.style.position = "absolute", tT.style.left = "0", tT.style.width = "100%", b8.pX.s3(tT), tU.style.height = tU.style.maxHeight = "100%", rZ.style.position = "absolute", rZ.style.width =
		"100%", rZ.style.backgroundColor = b9.ma,
		function() {
			for (var aA = 0; aA < tQ.length; aA++) tQ[aA].button.style.height = "100%", tQ[aA].button.style.padding = "0.0em 0.9em"
		}();
	for (var aA = 0; aA < tQ.length; aA++) tU.appendChild(tQ[aA].button);
	tS.appendChild(function() {
		var tZ = document.createElement("h1");
		return tZ.textContent = title, tZ.style.margin = "auto", tZ.style.fontSize = 20 < title.length && h.j > h.i ? "1.8em" : "2.3em", tZ.style.webkitTextStroke = "0.02em brown", tZ.style.fontFamily = "Arial Black, Trebuchet MS", tZ
	}()), tT.appendChild(tU), !1 !== tR && (rw.appendChild(rZ), rw.appendChild(tS), rw.appendChild(tT))
}

function qV(tg, th, ti, tj) {
	var self;
	this.qW = document.createElement("span"), (self = this).qW.textContent = tg, self.qW.style.color = b9.me, self.qW.style.position = "absolute", self.qW.style.font = "inherit", tj ? self.qW.style.bottom = "0.06em" : self.qW.style.top = "0.12em",
		ti ? self.qW.style.left = "0.2em" : self.qW.style.right = "0.2em", self.qW.style.fontSize = "0.6em", self.qW.style.pointerEvents = "none", self.qW.style.whiteSpace = "pre", th.style.position = "relative", th.style.overflow = "hidden", th
		.appendChild(self.qW)
}

function s5(tg, th, tk, tl, tm) {
	var self;
	this.qW = document.createElement("span"), this.resize = function() {
			this.qW.style.fontSize = ((tl - tk) * th.offsetHeight).toFixed(1) + "px"
		}, (self = this).qW.textContent = tg, self.qW.style.color = b9.me, self.qW.style.font = "inherit", self.qW.style.margin = "0.1em 0.6em", self.qW.style.pointerEvents = "none", tm && (self.qW.style.fontWeight = "bold"), self.qW.style
		.whiteSpace = "nowrap", self.qW.style.display = "block", th.appendChild(self.qW)
}

function tn(to, tp, tq, tr) {
	var ts = document.createElement("textarea"),
		tt = (this.e = ts, !0);

	function tz() {
		ts.select(), document.execCommand("copy")
	}
	this.resize = function() {
			tp && b8.pX.pi(ts, 5)
		}, this.tu = function(tv) {
			ts.value = tv
		}, this.tw = function() {
			return ts.value
		}, this.tx = function() {
			ts.select()
		}, this.clear = function() {
			ts.value = ""
		}, this.ty = function() {
			tt && navigator.clipboard ? (ts.select(), navigator.clipboard.writeText(ts.value).catch(function() {
				tt = !1, tz()
			})) : tz()
		}, ts.setAttribute("id", "textArea" + s.x.rT++), ts.setAttribute("autocomplete", "off"), to && ts.setAttribute("placeholder", to), ts.style.top = "0", ts.style.left = "0", ts.style.width = "100%", ts.style.height = "100%", ts.style
		.userSelect = "none", ts.style.outline = "none", ts.style.resize = "none", ts.style.border = "none", ts.style.color = b9.me, ts.style.backgroundColor = b9.mX, tr ? (ts.style.fontSize = "1em", ts.rows = 6, ts.style.padding = "0.25em") : (ts
			.style.padding = "0.45em", ts.style.fontSize = "1.2em"), tq && ts.addEventListener("input", function(e) {
			tq(e)
		}), ts.addEventListener("focus", function() {
			h.rU++
		}), ts.addEventListener("blur", function() {
			h.rU--
		})
}

function dC() {
	this.pp = new u0, this.km = new u1, this.qz = new u2, this.x = new u3, this.dU = function() {
		this.km.dU(), (new u4).dU()
	}
}

function u1() {
	function u5(aA, type, uC, dk) {
		bh.km.data.push({
			dx: aA,
			type: type || 0,
			value: uC || 0,
			uC: uC || 0,
			dk: dk || 0
		})
	}

	function u6(aA, type, uC, dk) {
		bh.km.data.push({
			dx: aA,
			type: type,
			value: uC || "",
			uC: uC || "",
			dk: dk || 0
		})
	}

	function u7(mM) {
		for (var aA = bh.km.data.length; aA < mM; aA++) bh.km.data.push(null)
	}
	this.data = [], this.dU = function() {
		u5(0, 1, 0, 5), u5(1, 1, 1), u5(2, 0), u6(3, 2), u5(4, 1), u6(5, 2, "Trebuchet MS", 1), u5(6, 0), u5(7, 0, 0), u5(8, 0), u5(9, 1, 1), u5(10, 1), u5(11, 1, 1), u6(12, 2, navigator.language), u5(13), u5(14), u7(100), u6(100, 2), u6(101, 2),
			u6(102, 2), u6(103, 2), u6(104, 2), u6(105, 2), u6(106, 2), u5(107), u5(108), u5(109), u6(110, 2), u5(111), u5(112), u5(113), u6(114, 2), u5(115), u6(116, 2), u5(117, 1), u6(118, 2, "", 2), u5(119, 1, 0, 1), u6(120, 2), u5(121, 1, ~~(
				262144 * Math.random())), u6(122, 2, "Player " + Math.floor(1e3 * Math.random())), u5(123), u6(124), u5(125, 1), u6(126, 2), u5(127, 0, 1), u5(128), u5(129), u5(130), u5(131), u5(132), u6(133, 2), u5(134, 0, 5), u6(135, 2), u6(
				136, 2), u5(137), u5(138), u5(139), u5(140), u5(141), u5(142), u5(143), u5(144), u6(145, 2), u5(146), u5(147), u6(148, 2), u5(149), u5(150, 0, 1), u6(151, 2), u5(152, 0, 5), u5(153, 1), u5(154, 1), u6(155, 2), u6(156, 2), u5(157),
			u5(158), u5(159), u7(180), u5(180, 0), u5(181, 0)
	}, this.r0 = function(dx, value) {
		this.data[dx].value = value
	}, this.u8 = function(dx, value) {
		this.r0(dx, value), bh.pp.save(dx, String(value)), bh.pp.save(dx, String(this.data[dx].dk), !0)
	}, this.u9 = function() {
		for (var aA = 0; aA < this.data.length; aA++) this.data[aA] && (bh.pp.save(aA, String(this.data[aA].value)), bh.pp.save(aA, String(this.data[aA].dk), !0))
	}, this.uA = function(dx) {
		return Number(this.data[dx].value)
	}, this.uB = function(dx) {
		return String(this.data[dx].value)
	}
}

function u0() {
	this.uD = function(dx, dk) {
		return Number(this.uE(dx, dk))
	}, this.uE = function(dx, dk) {
		var f0 = null;
		return 0 === z.id ? z.uF && (f0 = z.uF.getItem((dk ? "v" : "d") + dx)) : 1 === z.id ? f0 = z.uG.loadString((dk ? 1e3 : 2e3) + dx) : 2 === z.id && (f0 = z.uH[(dk ? "v" : "d") + dx]), f0 && 0 !== f0.length ? f0 : null
	}, this.uI = function(eY, uJ) {
		var g = [],
			uK = uJ ? "e" : "l";
		if (0 === z.id) {
			if (z.uF)
				for (aA = 0; aA < eY; aA++) g.push(z.uF.getItem(uK + aA))
		} else if (1 === z.id)
			for (var uL = uJ ? 5e3 : 3e3, aA = 0; aA < eY; aA++) g.push(z.uG.loadString(uL + aA));
		else if (2 === z.id)
			for (aA = 0; aA < eY; aA++) g.push(z.uH[uK + aA]);
		return g
	}, this.save = function(dx, value, dk) {
		var uM = (dk ? "v" : "d") + dx;
		if (0 === z.id) {
			if (z.uF && bh.km.data[140].value) try {
				z.uF.setItem(uM, value)
			} catch (e) {
				console.log(e)
			}
		} else 1 === z.id ? z.uG.saveString((dk ? 1e3 : 2e3) + dx, value) : 2 === z.id && (z.uH[uM] = value, z.uN.postMessage(uM + " " + value))
	}, this.uO = function(g, uJ) {
		var eY = g.length,
			uK = uJ ? "e" : "l";
		if (0 === z.id) {
			if (z.uF && bh.km.data[140].value) try {
				for (aA = 0; aA < eY; aA++) z.uF.setItem(uK + aA, g[aA])
			} catch (e) {
				console.log(e)
			}
		} else if (1 === z.id)
			for (var uL = uJ ? 5e3 : 3e3, aA = 0; aA < eY; aA++) z.uG.saveString(uL + aA, g[aA]);
		else if (2 === z.id)
			for (aA = 0; aA < eY; aA++) z.uH[uK + aA] = g[aA], z.uN.postMessage(uK + aA + " " + g[aA])
	}
}

function u4() {
	this.dU = function() {
		! function() {
			var data = bh.km.data;
			0 === data[2].dk && (h.j > h.i || 0 !== z.id) && (data[2].value = data[2].uC = 1);
			0 === data[100].dk && (data[100].value = data[100].uC = (0 === z.id ? "Player " : 1 === z.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var aA, f0, data = bh.km.data,
			eY = data.length;
		for (aA = 0; aA < eY; aA++) data[aA] && data[aA].dk === bh.pp.uD(aA, !0) && (f0 = bh.pp.uE(aA), data[aA].value = null === f0 ? data[aA].uC : 2 === data[aA].type ? f0 : Number(f0))
	}
}

function u3() {
	function uU(g) {
		if (0 === g.length) bh.qz.r0(116, "");
		else {
			for (var uX = g[0], aA = 1; aA < g.length; aA++) uX += ";" + g[aA];
			bh.qz.r0(116, uX)
		}
	}
	this.uR = function() {
		bh.km.data[110].value.length && (bh.km.data[106].value = bh.km.data[110], bh.qz.r0(110, ""), this.uS())
	}, this.uS = function() {
		var g = bh.km.data[116].value.split(";");
		for (g.length % 2 == 1 && g.pop(), g.unshift(bh.km.data[106].value), g.unshift(bh.km.data[105].value), aA = 2; aA < g.length; aA += 2)
			if (g[aA] === g[0]) {
				g.splice(aA, 2);
				break
			} for (var uT = [], aA = 0; aA < g.length; aA += 2) uT.push(g[aA]);
		uU(g), bh.km.data[117].value = 0, bh.km.data[117].tO = uT
	}, this.uV = function(dx) {
		bh.km.data[117].tO.splice(dx, 1), bh.km.data[117].value = Math.min(dx, bh.km.data[117].tO.length - 1);
		var g = bh.km.data[116].value.split(";");
		g.splice(2 * dx, 2), uU(g)
	}, this.uW = function(dx) {
		var g = bh.km.data[116].value.split(";");
		return {
			rk: g[2 * dx],
			password: g[2 * dx + 1]
		}
	}, this.uY = function() {
		var f0 = bJ.p5(bh.km.data[121].value, -1, 262143);
		return f0 = -1 === f0 ? ~~(262144 * Math.random()) : f0
	}
}

function u2() {
	this.r0 = function(dx, value) {
		bh.km.data[dx].value !== value && (bh.km.u8(dx, value), 0 === dx ? (s.w(), b5.dU(), s.t(2)) : 1 === dx ? h.df(1) : 2 === dx ? h.df(0) : 5 === dx && (b8.pX.uZ(), h.df(0)))
	}, this.ua = function() {
		for (var data = bh.km.data, aA = 0; aA < 100; aA++) data[aA] && bh.km.u8(aA, data[aA].uC);
		b8.pX.uZ(), h.df(1), b5.dU()
	}, this.ub = function() {
		for (var data = bh.km.data, aA = 0; aA < data.length; aA++) data[aA] && bh.km.r0(aA, data[aA].uC)
	}, this.uc = function() {
		for (var es = bh.km, aA = 128; aA < 135; aA++) es.u8(aA, es.data[aA].uC)
	}, this.ud = function(data) {
		bh.qz.r0(109, data.rl), bh.qz.r0(107, data.ue), bh.qz.r0(108, data.uf), bh.qz.r0(112, data.ug), bh.qz.r0(111, data.uh), bh.qz.r0(113, data.ui), bh.qz.r0(135, data.uj), bh.qz.r0(136, data.uk), bh.qz.r0(137, data.ul), bh.qz.r0(138, data
			.um), bh.qz.r0(139, data.un), bh.qz.r0(141, data.uo), bh.qz.r0(142, data.up), bh.qz.r0(143, data.uq), bh.qz.r0(144, data.ur)
	}
}

function bz() {
	this.rp = new us, this.ut = new uu, this.uv = new uw, this.dU = function() {
		this.rp.dU()
	}
}

function uu() {
	this.ux = function(size) {
		for (var uy = bF, g = [], aA = 0; aA < size; aA++) g.push(String.fromCharCode(uy.oY(16)));
		return g.join("")
	}, this.uz = function(pE) {
		return 20 < (pE = pE.trim()).length ? pE.substring(0, 20) : pE
	}
}

function us() {
	var v0 = new Uint8Array(78);
	this.dU = function() {
		var aA;
		for (v0[50] = 37, aA = 0; aA < 10; aA++) v0[aA + 3] = aA + 1;
		for (aA = 0; aA < 26; aA++) v0[aA + 20] = aA + 11, v0[aA + 52] = aA + 38
	}, this.v1 = function(pE) {
		return pE.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.v2 = function(pE, size) {
		if ((pE = this.v1(pE)).length > size) return pE.substring(0, size);
		for (; pE.length < size;) pE = "-" + pE;
		return pE
	}, this.v3 = function(pE) {
		for (var v4 = v0, eY = pE.length, g = new Uint8Array(eY), aA = 0; aA < eY; aA++) g[aA] = v4[pE.charCodeAt(aA) - 45];
		return g
	}, this.v5 = function(v6) {
		bB.a6(6 * v6.length), this.v7(v6), bF.dU(bB.aB)
	}, this.v7 = function(v6) {
		for (var eY = v6.length, i = bB, aA = 0; aA < eY; aA++) i.a7(6, v6[aA])
	}, this.v8 = function(pE) {
		this.v7(this.v3(pE))
	}, this.v9 = function(pE, size) {
		this.v7(this.v3(this.v2(pE, size)))
	}, this.vA = function(pE, size) {
		for (var g = this.v3(this.v2(pE, size)), f0 = 0, mG = 1, aA = g.length - 1; 0 <= aA; aA--) f0 += mG * g[aA], mG *= 64;
		return f0
	}
}

function vB() {
	var i, j, vC;

	function vc(gx, eb, va, vH, vV) {
		eb = vb(gx, eb + 1 + 2 * vH & 3);
		! function(gx, vd) {
			return 1 < Math.abs(gx % i - vd % i) || 1 < Math.abs(vg(gx) - vg(vd))
		}(gx, eb) && 0 === vV[eb << 2] && (vV[eb << 2] = va)
	}

	function vg(g5) {
		return Math.floor((g5 + .5) / i) % j
	}

	function vb(g5, eb) {
		return g5 + vC[eb]
	}
	this.vD = function(pE) {
		var aA, vE, eY, vF, uy = bF;
		for (bE.rp.v5(bE.rp.v3(pE)), bQ.vI.vJ[bQ.eE].i = bQ.ej = i = uy.oY(12), bQ.vI.vJ[bQ.eE].j = bQ.ek = j = uy.oY(12), vC = [-i, -1, i, 1], bQ.vS = document.createElement("canvas"), bQ.vS.width = bQ.ej, bQ.vS.height = bQ.ek, bQ.vO = bQ.vS
			.getContext("2d", {
				alpha: !1
			}), bQ.vP = bQ.vT = null, bQ.vP = bQ.vO.getImageData(0, 0, bQ.ej, bQ.ek), bQ.vT = bQ.vP.data, b8.pg.vU(bQ.vT), eY = uy.oY(12), vE = uy.oY(5), vF = vL(i * j - 1), aA = 0; aA < eY; aA++) ! function(kV, g5, vG, vH) {
			var aA, eb, uy = bF,
				vV = bQ.vT,
				vW = g5,
				vX = g5,
				vY = 0,
				vZ = 1 + vG,
				va = 2 - vG;
			for (vV[g5 << 2] = vZ, aA = 0; aA < kV; aA++) eb = uy.oY(2), g5 = vb(g5, eb), vV[g5 << 2] === vZ ? vY % 2 == 1 && vc(vX, vY + 2 * vH + 3, va, vH, vV) : vV[g5 << 2] = vZ, vc(g5, eb, va, vH, vV), vc(vX, eb, va, vH, vV), vX = g5,
				vY = eb;
			vb(g5, 0) === vW ? (vc(g5, 0, va, vH, vV), vc(vW, 0, va, vH, vV)) : vb(g5, 1) === vW && (vc(g5, 0, va, vH, vV), vc(vW, 2, va, vH, vV));
			0 === kV && (vc(vW, 0, va, vH, vV), vc(vW, 2, va, vH, vV))
		}(uy.oY(vE), uy.oY(vF), 1 === uy.oY(1), 1 === uy.oY(1));
		var ef, eh, hL, vh, vi, vj, vV = bQ.vT,
			vk = !0,
			vl = bQ.vI.vJ[bQ.eE].vl,
			vm = bQ.vI.vJ[bQ.eE].vm;
		for (eh = 0; eh < j; eh++)
			for (vh = !0, vi = vk, ef = vj = 0; ef < i; ef++) hL = 4 * eh * i + 4 * ef, vj <= ef && 0 < vV[hL] && (vi = 2 === vV[hL], vh) && (vh = !1, vi !== vk) ? (vk = vi, vj = ef + 1, ef = -1) : (vi ? (vV[hL] = vm[0], vV[1 + hL] = vm[1], vV[
				2 + hL] = vm[2]) : (vV[hL] = vl[0], vV[1 + hL] = vl[1], vV[2 + hL] = vl[2]), vV[3 + hL] = 255);
		bQ.vO.putImageData(bQ.vP, 0, 0), bQ.vQ = !0, bQ.vR.dU(), bd.dc = !0
	}
}

function uw() {
	this.vD = function(vn) {
		for (var uy = bF, size = uy.oY(vn), vo = 7 + 9 * uy.oY(1), g = [], aA = 0; aA < size; aA++) g.push(String.fromCharCode(uy.oY(vo)));
		return g.join("")
	}
}

function c4() {
	var rH, rI, vp, vq, vr, vs, vt, vu, vv, vw;

	function vy() {
		var w1 = aC.w1;
		for (vv = w1; vv < aC.eV; vv++) vx();
		for (vv = aC.gt ? aC.jn : 0; vv < w1; vv++) {
			if (!w2()) {
				for (var es = aC.w6 = vv; es < w1; es++) vv = es, vx();
				return
			}
			w5(vs + rH * vr + bJ.dj(vr, 2), vt + rI * vr + bJ.dj(vr, 2))
		}
	}

	function wY(player) {
		for (var iM = af.iM, iO = af.iO, iN = af.iN, iP = af.iP, eh = iO[player]; eh <= iP[player]; eh++)
			for (var ef = iM[player]; ef <= iN[player]; ef++) {
				var eC = ab.wZ(ef, eh);
				ab.g7(eC) && (ab.j0(eC) ? ab.g2(eC, player) : ab.wa(eC, player))
			}
	}

	function wX(g, s7, s8) {
		var di = g[s7];
		g[s7] = g[s8], g[s8] = di
	}

	function w2() {
		return function() {
			var aA;
			for (aA = 0; aA < 8; aA++)
				if (rH = bJ.dj(vp * aw.random(), aw.value(100)), rI = bJ.dj(vq * aw.random(), aw.value(100)), wf()) return 1;
			return
		}() || function() {
			var ht, hw, er, w4, es, w3;
			for (ht = bJ.dj(vp * aw.random(), aw.value(100)), hw = bJ.dj(vq * aw.random(), aw.value(100)), er = 40; 1 <= er; er--)
				for (w4 = vq - er; 0 <= w4; w4 -= 40)
					for (rI = (w4 + hw) % vq, es = 40; 1 <= es; es--)
						for (w3 = vp - es; 0 <= w3; w3 -= 40)
							if (rH = (w3 + ht) % vp, wf()) return 1;
			return
		}()
	}

	function wf() {
		for (var g5, wh, gap = bJ.dj(vr - vu, 2), wi = vt + rI * vr + gap, wj = vs + rH * vr + gap, wg = wi + vu - 1; wi <= wg; wg--)
			for (wh = wj + vu - 1; wj <= wh; wh--)
				if (g5 = ab.wZ(wh, wg), !ab.eT(g5) || ab.j0(g5)) return;
		return 1
	}

	function w5(w3, w4) {
		vx(), wk(w3 - 2, w4 - 2)
	}

	function vx() {
		af.lc[vv] = 0, af.gL[vv] = af.wV[vv] = 0, af.fz[vv] = [], af.gD[vv] = [], af.gE[vv] = [], af.ey[vv] = [], af.iM[vv] = af.iO[vv] = af.iN[vv] = af.iP[vv] = 0
	}

	function wk(w3, w4) {
		var g5, aA, wl, wm;
		for (af.lc[vv] = 1, af.iM[vv] = w3 + 10, af.iO[vv] = w4 + 10, af.iP[vv] = af.iN[vv] = 0, wl = w3; wl < w3 + 4; wl++)
			for (wm = w4; wm < w4 + 4; wm++)(w3 < wl && wl < w3 + 3 || w4 < wm && wm < w4 + 3) && (g5 = ab.wZ(wl, wm), ab.eT(g5)) && (af.iM[vv] = Math.min(wl, af.iM[vv]), af.iN[vv] = Math.max(wl, af.iN[vv]), af.iO[vv] = Math.min(wm, af.iO[vv]), af
				.iP[vv] = Math.max(wm, af.iP[vv]), vw[af.gL[vv]] = g5, af.gL[vv]++, ab.wa(g5, vv));
		for (af.wV[vv] = af.gL[vv], aA = af.gL[vv] - 1; 0 <= aA; aA--) ab.wn(vw[aA], vv) ? (ab.g2(vw[aA], vv), af.gD[vv].push(vw[aA])) : ab.wo(vw[aA]) ? (ab.g2(vw[aA], vv), af.gE[vv].push(vw[aA])) : ab.wp(vw[aA]) && (ab.g2(vw[aA], vv), af.ey[vv]
			.push(vw[aA]))
	}

	function we(w3, w4) {
		for (var g5, wh, wg = w4; w4 - 6 < wg; wg--)
			for (wh = w3; w3 - 6 < wh; wh--)
				if (g5 = ab.wZ(wh, wg), ab.j0(g5)) return;
		return 1
	}
	this.dU = function() {
		if (vw = new Array(12), vu = 6, vr = 10, vp = bJ.dj(bQ.ej, vr), vq = bJ.dj(bQ.ek, vr), vs = bJ.dj(bQ.ej - vr * vp, 2), vt = bJ.dj(bQ.ek - vr * vq, 2), aC.gt)
			for (var aA = 0; aA < aC.jn; aA++) vv = aA, vx(), af.lc[vv] = 1;
		(0 === aC.data.spawningType ? vy : 1 === aC.data.spawningType ? (vy(), function() {
			var w7 = aC.w8;
			aC.w9 || w7++;
			if (!(w7 < 3)) {
				for (var data = aC.data, j4 = (aC.gt ? aC.jn : 0) + data.teamPlayerCount[0], mM = aC.w6, wA = new Uint32Array(w7), wB = new Uint32Array(w7), wC = new Uint16Array(w7), wD = new Uint16Array(w7), eW = be.eW, iM = af.iM, iO =
						af.iO, iN = af.iN, iP = af.iP, fC = bM.fC, fD = bM.fD, aA = j4; aA < mM; aA++) fC[aA] = iM[aA] + iN[aA] >> 1, fD[aA] = iO[aA] + iP[aA] >> 1;
				for (aA = j4; aA < mM; aA++) {
					var id = eW[aA];
					wA[id] += fC[aA], wB[id] += fD[aA]
				}
				var k9 = be.k9;
				for (aA = 1; aA < w7; aA++) {
					var g0 = Math.max(data.teamPlayerCount[k9[aA]], 1);
					wC[aA] = bJ.dj(wA[aA], g0), wD[aA] = bJ.dj(wB[aA], g0)
				}
				var wE = be.wE,
					wF = be.wF,
					wG = be.wG,
					fB = bM.fB;
				for (aA = 0; aA < 512; aA++) fB[aA] = aA;
				for (var dw = 0; dw < 2 + (4 <= w7); dw++)
					for (aA = j4; aA < mM; aA++) {
						for (var gx = aA, wH = fB[gx], wI = 1, eo = bJ.wJ(fC[wH] - wC[1], fD[wH] - wD[1]), er = 2; er < w7; er++) {
							var wK = bJ.wJ(fC[wH] - wC[er], fD[wH] - wD[er]);
							wK < eo && (eo = wK, wI = er)
						}
						var wL = eW[gx];
						if (wI !== wL) {
							if (2 === dw && 4 <= w7) {
								var wM = Math.max((wI + 1) % w7, 1),
									wN = bJ.wJ(fC[wH] - wC[wM], fD[wH] - wD[wM]);
								for (er = 1; er < w7; er++) wK = bJ.wJ(fC[wH] - wC[er], fD[wH] - wD[er]), eo < wK && wK < wN && (wN = wK, wM = er);
								wM !== wL && bJ.wJ(wC[wL] - wC[wM], wD[wL] - wD[wM]) < bJ.wJ(wC[wL] - wC[wI], wD[wL] - wD[wI]) && (wI = wM)
							}
							var wO = k9[wI],
								wP = wF[wO] + (aC.gt ? 0 : wG[wO]),
								vd = wE[wP],
								wQ = fB[vd],
								wR = wF[wO + 1];
							eo = bJ.wJ(fC[wQ] - wC[wL], fD[wQ] - wD[wL]);
							for (var et = wP + 1; et < wR; et++) {
								var wS = wE[et],
									wT = fB[wS];
								(wK = bJ.wJ(fC[wT] - wC[wL], fD[wT] - wD[wL])) < eo && (eo = wK, vd = wS)
							}
							vd < j4 || mM <= vd || (wQ = fB[vd], wA[wL] += fC[wQ] - fC[wH], wB[wL] += fD[wQ] - fD[wH], wA[wI] += fC[wH] - fC[wQ], wB[wI] += fD[wH] - fD[wQ], g0 = data.teamPlayerCount[k9[wL]], wC[wL] = bJ.dj(wA[wL], g0),
								wD[wL] = bJ.dj(wB[wL], g0), g0 = data.teamPlayerCount[wO], wC[wI] = bJ.dj(wA[wI], g0), wD[wI] = bJ.dj(wB[wI], g0), fB[gx] = wQ, fB[vd] = wH)
						}
					}! function() {
						for (var fB = bM.fB, iM = af.iM, iO = af.iO, iN = af.iN, iP = af.iP, gL = af.gL, wV = af.wV, gD = af.gD, gE = af.gE, ey = af.ey, aA = 0; aA < 512; aA++) {
							var wW = fB[aA];
							if (wW !== aA) {
								wX(iM, aA, wW), wX(iO, aA, wW), wX(iN, aA, wW), wX(iP, aA, wW), wX(gL, aA, wW), wX(wV, aA, wW), wX(gD, aA, wW), wX(gE, aA, wW), wX(ey, aA, wW), wY(aA), wY(wW), fB[aA] = aA;
								for (var j = wW, g6 = fB[j]; g6 !== aA;) g6 = fB[j = g6];
								fB[j] = wW
							}
						}
					}()
			}
		}) : function() {
			var w1 = aC.w1;
			for (vv = w1; vv < aC.eV; vv++) vx();
			for (vv = aC.gt ? aC.jn : 0; vv < w1; vv++)
				if (! function() {
						var spawningData = aC.data.spawningData,
							w3 = spawningData[2 * vv] + 1,
							spawningData = spawningData[2 * vv + 1] + 1;
						if (3 < w3 && w3 < bQ.ej - 5 && 3 < spawningData && spawningData < bQ.ek - 5 && ab.eT(ab.wZ(w3, spawningData)) && we(w3 + 3, spawningData + 3)) return w5(w3 + 1, spawningData + 1), 1;
						return
					}()) {
					if (!w2()) {
						for (var es = aC.w6 = vv; es < w1; es++) vv = es, vx();
						return
					}
					var w3 = vs + rH * vr + bJ.dj(vr, 2),
						w4 = vt + rI * vr + bJ.dj(vr, 2);
					w5(w3, w4)
				}
		})(), bb.lY[7] = af.gL[aC.eI]
	}, this.wq = function(iy, wr, ws) {
		var aA, w3, w4, g5, rH, rI;
		for (vv = iy, aA = 0; aA < 20; aA++)
			for (w3 = wr + aA; wr - aA <= w3; w3--)
				for (w4 = ws + aA; ws - aA <= w4; w4--)
					if ((w3 === wr + aA || w3 === wr - aA || w4 === ws + aA || w4 === ws - aA) && 3 < w3 && w3 < bQ.ej - 5 && 3 < w4 && w4 < bQ.ek - 5 && ab.eT(ab.wZ(w3, w4)) && we(w3 + 3, w4 + 3)) {
						if (0 < af.gL[vv]) {
							for (rI = rH = g5 = void 0, rH = af.iN[vv]; rH >= af.iM[vv]; rH--)
								for (rI = af.iP[vv]; rI >= af.iO[vv]; rI--) g5 = 4 * (rI * bQ.ej + rH), ab.wu(vv, g5) && (ab.wv(g5), af.gL[vv]--);
							vx()
						}
						return wk(w3 - 1, w4 - 1), !0
					} return !1
	}, this.ww = function(iy) {
		vv = iy, w2() ? w5(vs + rH * vr + bJ.dj(vr, 2), vt + rI * vr + bJ.dj(vr, 2)) : vx()
	}
}

function wx() {
	aq.wy(), tf.setTransform(i9, 0, 0, i9, 0, 0), tf.imageSmoothingEnabled = i9 < 3, tf.drawImage(bQ.vS, aR.wz(), aR.x0()), bN.x1.te(), tf.drawImage(x2, aR.wz(), aR.x0()), aq.te(), bL.te(), ae.te(), (aC.m7 ? (bf.te(), bA) : (aM.te(), aU.te(), aQ
	.te(), bA.te(), au.te(), aV.te(), aR.te(), aP.te(), bf.te(), aT.te(), aO.te(), aL.te(), aK.te(), aW.te(), bc.te(), at)).te(), s.te()
}

function x3(x4, i, j) {
	x4.clearRect(0, 0, i, j), x4.fillStyle = b9.mb, x4.fillRect(0, 0, i, j)
}

function x5(x4, i, j, x6) {
	x4.fillStyle = b9.me, x4.fillRect(0, 0, i, x6), x4.fillRect(0, 0, x6, j), x4.fillRect(i - x6, 0, x6, j), x4.fillRect(0, j - x6, i, x6)
}

function x7(x4, ef, eh, hP, x6, g5, x8) {
	x4.fillStyle = b9.me;
	var g5 = Math.floor(hP * g5),
		ru = (g5 += (g5 - x6) % 2, Math.floor((g5 - x6) / 2)),
		hP = Math.floor((hP - g5) / 2);
	x4.fillRect(ef + hP, eh + hP + ru, g5, x6), x8 && x4.fillRect(ef + hP + ru, eh + hP, x6, g5)
}

function xA() {
	this.dU = function() {
		8 === aC.k4 && aM.xB()
	}, this.xC = function(xD) {
		var elo = aC.data.elo,
			hh = (elo[xD] - elo[1 - xD]) / 10,
			hh = 8 / (1 + Math.pow(2, hh / 32)),
			hh = Math.floor(10 * hh + .5),
			xF = this.xG(elo[xD] + (1 + aC.xH) * hh + 1),
			elo = this.xG(elo[1 - xD] - hh);
		0 === xD ? aM.xJ(xF, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : aM.xJ(elo, xF, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"])
	}, this.xG = function(elo) {
		return 16e3 === (elo = bJ.p5(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function cZ() {
	this.qn = new xK, this.vV = new xL
}

function xL() {
	this.hF = !1;
	this.xP = [], this.xQ = 100;
	var m4, m5, gap, hP, xM, xO, xR = 0,
		xS = new Array(9),
		xT = [],
		xU = [],
		xV = 0,
		xW = 0,
		xX = 0,
		xY = 0;

	function xk() {
		xS.sort(function(er, es) {
			return es.js - er.js
		});
		for (var pE = "" + xS[0].oA, aA = 1; aA < 9; aA++) pE += "," + xS[aA].oA;
		for (aA = 0; aA < 9; aA++) pE += "," + xS[aA].js;
		bh.km.u8(120, pE)
	}
	this.dU = function() {
		for (var xZ = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], aA = 0; aA < xZ.length; aA++) {
			var color = 6 === xZ[aA] ? b9.n4 : b9.mc;
			this.xP.push(b8.canvas.xa(aa.get(3), xZ[aA], color))
		}
		for (aA = 0; aA < ai.qn.xb; aA++) xU.push(ai.qn.xc - ai.qn.xb + aA);
		for (aA = 0; aA < ai.qn.xd; aA++) xU.push(ai.qn.xe + aA);
		var xf = ai.qn.xg(bI.xf);
		for (aA = 0; aA < xf.length; aA++) xU.push(xf[aA]);
		! function() {
			var aA, g = bh.km.data[120].value.split(",");
			if (18 !== g.length)
				for (aA = 0; aA < 9; aA++) xS[aA] = {
					oA: 1015 + aA,
					js: 0
				};
			else
				for (aA = 0; aA < 9; aA++) {
					var f0 = parseInt(g[aA]),
						et = (f0 = 0 <= f0 && f0 < ai.qn.xc ? f0 : 0, parseInt(g[aA + 9]));
					et = 0 <= et && et < 1e3 ? et : 0, xS[aA] = {
						oA: f0,
						js: et
					}
				}
		}()
	}, this.show = function(kr, ks, xl) {
		var aA;
		if (xV = kr, xW = ks, xR = xl || 0, this.hF = !0, xT = [], 0 === xR)
			for (aA = 0; aA < 9; aA++) xT.push(xS[aA].oA);
		else {
			var es = 49 * xR,
				xl = es - 49;
			for (xl >= xU.length && (xR = 1, xl = 0, es = 49), aA = xl = (es = Math.min(es, xU.length)) - 49; aA < es; aA++) xT.push(xU[aA])
		}
		xT.push(1024);
		xl = xT.length, hP = Math.floor((z.a0.qv() ? .075 : .0468) * h.pZ), gap = Math.floor(hP / 3), (xX = 10 * (xM = hP + gap)) > h.i && (xX = h.i, gap = (xM = xX / 10) - (hP = 3 * xM / 4)), xO = bJ.dj(xl, 10) + !!(xl % 10), (xY = xO * xM) > h
			.j && (xY = h.j, gap = (xM = xY / xO) - (hP = 3 * xM / 4)), xl = .5 * gap;
		m4 = Math.min(Math.max(kr - .5 * xX + xl, xl), h.i - xX + xl), m5 = Math.min(Math.max(ks - .5 * xY + xl, xl), h.j - xY + xl)
	}, this.gl = function(kr, ks, player) {
		if (!this.hF) return !1;
		if (this.xn(kr, ks)) {
			kr = bJ.p5(bJ.dj(kr - m4 + .5 * gap, xM), 0, 9);
			if ((kr += 10 * bJ.p5(bJ.dj(ks - m5 + .5 * gap, xM), 0, 9)) >= xT.length) return aK.qo(), !0;
			ks = xT[kr];
			if (1024 === ks) return this.show(xV, xW, xR + 1), !0;
			! function(oA) {
				for (var aA = 0; aA < 9; aA++) xS[aA].js = Math.floor(.99 * xS[aA].js);
				for (aA = 0; aA < 9; aA++)
					if (oA === xS[aA].oA) return xS[aA].js = Math.min(xS[aA].js + 30, 999), xk();
				xS.splice(5, 0, {
					oA: oA,
					js: Math.max(xS[4].js, 30)
				}), xS.pop(), xk()
			}(ks), player === aC.eI ? b6.gu.o9(ks) : b6.ft.oN(ks, player)
		}
		return aK.qo(), !0
	}, this.xn = function(kr, ks) {
		return !(kr < m4 - .5 * gap || ks < m5 - .5 * gap || m4 + xX - .5 * gap <= kr || m5 + xY - .5 * gap <= ks)
	}, this.te = function() {
		tf.fillStyle = b9.mb, tf.fillRect(m4 - .5 * gap, m5 - .5 * gap, xX, xY);
		for (var hL = .5 * ba.xo, eY = (tf.lineWidth = ba.xo, tf.strokeStyle = tf.fillStyle = b9.me, tf.strokeRect(m4 - .5 * gap + hL, m5 - .5 * gap + hL, xX - 2 * hL, xY - 2 * hL), tf.imageSmoothingEnabled = !0, xT.length), aA = 0; aA <
			eY; aA++) this.xp(xT[aA], tf, m4 + aA % 10 * xM, m5 + bJ.dj(aA, 10) * xM, hP);
		tf.imageSmoothingEnabled = !1
	}, this.xp = function(oA, hV, ef, eh, hP) {
		var eC;
		oA >= 1024 - ai.qn.xb ? (eC = hP / this.xQ, hV.setTransform(eC, 0, 0, eC, ef, eh), hV.drawImage(this.xP[oA - 1024 + ai.qn.xb], 0, 0), hV.setTransform(1, 0, 0, 1, 0, 0)) : (b8.pX.textAlign(hV, 1), b8.pX.textBaseline(hV, 1), hV.font = b8.pX
			.rM(0, .89 * hP), hV.fillText(ai.qn.xq(oA), ef + .5 * hP, eh + (.35 - b8.pX.xr + .56) * hP))
	}
}

function xK() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.xb = 13, this.xd = this.emojis.length, this.xe = 676, this.xc = 1024, this.xs = this.emojis.indexOf("💀"), this.xt = this.xs + 1, this.xu = this.emojis.indexOf("🥇"), this.xv = this.emojis.indexOf("😊"), this.xq = function(f0) {
		return f0 < this.xe ? String.fromCharCode(55356, 56806 + bJ.dj(f0, 26), 55356, 56806 + f0 % 26) : this.emojis[Math.min(f0 - this.xe, this.xd - 1)]
	}, this.xg = function(pE) {
		for (var eY = pE.length - 2, g = [], aA = 0; aA < eY; aA++) {
			var hd = pE.charCodeAt(aA) - 56806,
				he = pE.charCodeAt(aA + 2) - 56806;
			0 <= hd && hd < 26 && 0 <= he && he < 26 && (g.push(26 * hd + he), aA += 3)
		}
		return g
	}, this.xw = function(f0) {
		return f0 < this.xe
	}, this.xx = function(f0) {
		return f0 >= 1024 - this.xb
	}, this.xy = function(f0) {
		return f0 >= this.xe && f0 < this.xe + this.xt
	}
}

function by() {
	this.rp = new xz, this.ut = new y0, this.uv = new y1, this.dU = function() {
		this.rp.dU()
	}
}

function y0() {
	this.v8 = function(pE) {
		for (var eY = pE.length, i = bB, aA = 0; aA < eY; aA++) i.a7(16, pE.charCodeAt(aA))
	}
}

function xz() {
	var y2 = new Uint8Array(64);
	this.dU = function() {
		var aA;
		for (y2[0] = 45, y2[37] = 95, aA = 0; aA < 10; aA++) y2[aA + 1] = 48 + aA;
		for (aA = 0; aA < 26; aA++) y2[aA + 11] = 65 + aA, y2[aA + 38] = 97 + aA
	}, this.rr = function(y3) {
		for (var uy = bF, v6 = new Uint8Array(y3), aA = 0; aA < y3; aA++) v6[aA] = uy.oY(6);
		return v6
	}, this.rq = function(v6) {
		for (var eY = v6.length, y4 = y2, g = [], aA = 0; aA < eY; aA++) g.push(String.fromCharCode(y4[v6[aA]]));
		return g.join("")
	}, this.y5 = function(value, y6) {
		for (var y4 = y2, g = [], aA = 0; aA < y6; aA++) g.push(String.fromCharCode(y4[value >> 6 * (y6 - 1 - aA) & 63]));
		return g.join("")
	}
}

function c6() {
	var y7, y8, y9;
	y7 = [32, 65, 191, 913, 931], y8 = [64, 127, 688, 930, 1155], y9 = new Array(y7.length + 1);
	for (var aA = 0; aA < y9.length; aA++) {
		y9[aA] = 0;
		for (var er = aA - 1; 0 <= er; er--) y9[aA] += y8[er] - y7[er]
	}

	function yF(et) {
		for (var aA = y7.length - 1; 0 <= aA; aA--)
			if (et >= y7[aA] && et < y8[aA]) return aA;
		return -1
	}
	this.uz = function(pE) {
		return 0 !== (pE = pE.trim()).indexOf("Bot ") && 0 !== pE.indexOf("[Bot] ") && function(pE, yC, yD) {
			var eY = (pE = pE.trim()).length;
			if (eY < yC || yD < eY) return !1;
			for (var et, yE = 0, aA = 0; aA < eY; aA++)
				if (et = pE.charCodeAt(aA), yE += 65 <= et && et <= 90 || 1040 <= et && et <= 1071 ? 1 : 0, -1 === yF(et)) return !1;
			if (3 < yE && yE > Math.floor(eY / 2)) return !1;
			return !0
		}(pE, 3, 20)
	}, this.yG = function(pE) {
		for (var eY = (pE = pE.trim()).length, g = [], aA = 0; aA < eY; aA++) {
			var et, g5 = yF(et = pE.charCodeAt(aA));
			g.push(y9[g5] + et - y7[g5])
		}
		return g
	}, this.vD = function(g) {
		for (var et, es, pE = "", eY = g.length, aA = 0; aA < eY; aA++)
			for (es = 1; es < y9.length; es++)
				if (g[aA] < y9[es]) {
					et = y7[es - 1] + g[aA] - y9[es - 1], pE += String.fromCharCode(et);
					break
				} return pE
	}, this.yH = function(pE) {
		for (var g = this.yG(pE), result = "", aA = 0; aA < g.length; aA++) result = (result += g[aA] < 10 ? "00" : g[aA] < 100 ? "0" : "") + g[aA].toString(10);
		return result
	}, this.yI = function(pE) {
		for (var g = new Array(Math.floor(pE.length / 3)), aA = 0; aA < pE.length; aA += 3) g[Math.floor(aA / 3)] = parseInt(pE.substring(aA, aA + 3));
		return this.vD(g)
	}, this.yJ = function(pE) {
		for (var f0, g = [pE.length], aA = 0; aA < pE.length; aA++) g[aA] = pE.charCodeAt(aA) - 48;
		var result = "";
		for (aA = 0; aA < pE.length; aA++) aA === pE.length - 1 || 51 < 10 * g[aA] + g[aA + 1] ? result += g[aA].toString() : (f0 = 10 * g[aA] + g[aA + 1], result += String.fromCharCode(f0 + (f0 < 26 ? 65 : 71)), aA++);
		return result
	}, this.yK = function(pE) {
		for (var et, result = "", aA = 0; aA < pE.length; aA++) 48 <= (et = pE.charCodeAt(aA)) && et < 58 ? result += String.fromCharCode(et) : 65 <= et && et < 75 ? result += "0" + (et - 65).toString() : 75 <= et && et < 91 ? result += (et - 65)
			.toString() : 97 <= et && et < 123 && (result += (et - 71).toString());
		return result
	}, this.yL = function(pE) {
		for (var eY = pE.length, g = [], aA = 0; aA < eY; aA++)(et = pE.charCodeAt(aA)) < 58 ? g.push(pE[aA]) : (et -= et < 91 ? 65 : 71, g.push(String(bJ.dj(et, 10))), g.push(String(et - 10 * bJ.dj(et, 10))));
		var eY = g.length - 2,
			et = 0,
			v6 = [];
		for (aA = 0; aA < eY; aA += 3) v6[et++] = parseInt(g[aA] + g[aA + 1] + g[aA + 2]);
		return v6
	}, this.yM = function() {
		for (var dw, yN = "", aA = 0; aA < 6; aA++) dw = 48 + aw.random() % 36, dw += 58 <= dw ? 39 : 0, yN += String.fromCharCode(dw);
		return yN
	}
}

function y1() {
	this.yG = function(pE, vn, yO) {
		for (var yP = [], eY = pE.length, max = 0, aA = 0; aA < eY; aA++) {
			var f0 = pE.charCodeAt(aA);
			yP.push(f0), max = Math.max(max, f0)
		}
		var vo = max < 128 ? 7 : 16;
		for (yO.a7(vn, eY), yO.a7(1, +(16 == vo)), aA = 0; aA < eY; aA++) yO.a7(vo, yP[aA])
	}
}

function d4() {
	this.yQ = new yR, this.result = new yS, this.h1 = new yT, this.yU = new yV, this.yW = new yX, this.yY = new yZ, this.dU = function() {
		this.result.dU()
	}
}

function yT() {
	this.ya = function() {
		for (var eY = ak.jo, yb = ak.jp, yc = [], aA = 0; aA < eY; aA++) {
			var g5 = yb[aA];
			b8.ft.yd(g5) && yc.push(g5)
		}
		return yc
	}, this.ye = function() {
		if (0 === be.k9[aC.yf]) return this.yg();
		bf.l1(aC.yf);
		for (var yc = [], eY = bM.f3[0], fB = bM.fB, aA = 0; aA < eY; aA++) {
			var g5 = fB[aA];
			b8.ft.yd(g5) && yc.push(g5)
		}
		return yc
	}, this.yg = function() {
		var g5 = l3[0];
		return b8.ft.yd(g5) ? [g5] : []
	}, this.yh = function(yc) {
		for (var eY = yc.length, di = 0, gL = af.gL, aA = 0; aA < eY; aA++) di += gL[yc[aA]];
		return di
	}
}

function yR() {
	function yj() {
		if (2 === aC.yn) return 1;
		au.yo(), aC.yn = 2, aC.yp = aC.yq
	}

	function yl() {
		bP.yW.yr(), aW.show(1 === aC.ys, !1, 2 === aC.ys), bP.result.yr(), bP.yY.ih(), bP.yU.ih(), aM.yt(!0), aM.yu(247), aM.yu(956), aM.yu(957), aU.lO(!0), aV.lO(!0), au.lO(), bA.yv(), aC.gh && bd.yw.yx(), bd.dc = !0, bZ.yy(), z.a0.setState(0)
	}
	this.yi = function() {
		yj() || (aC.yk = 2, yl())
	}, this.ym = function() {
		yj() || (aC.yk = 1, yl())
	}
}

function yV() {
	this.ih = function() {
		var z7;
		2 === aC.yk ? (aM.yz(0, 59), aG.mD(2700)) : aC.k4 < 7 ? (z7 = be.k9[aC.yf], z7 = be.z9[z7], aP.zA(L(23, [z7]), 2, 1, 12), aM.zB(0, L(24, [z7]), 40, 0, b9.me, b9.mb, -1, !1), aG.mD(2700)) : 8 === aC.k4 ? (aC.ys ? aM.yz(aC.z4, 2) : aM.yz(
			1 - aC.eI, 3), aC.z5.xC(aC.z4), aM.z6(aC.z4), aG.ly(aC.z4, 2700, !1, 0)) : 9 === aC.k4 ? (aM.zC(), aG.mD(2700)) : (aM.z6(aC.z4), aG.ly(aC.z4, 2700, !1, 0))
	}
}

function yZ() {
	function zM() {
		var sB = Math.floor(af.zN[aC.eI] / 50);
		return Math.min(sB, 400) / 100
	}

	function zE() {
		var sB = zM();
		0 !== sB && aM.zB(440, L(25, [sB.toFixed(2)]), 40, 0, b9.mw, b9.mb, -1, !1)
	}
	this.ih = function() {
		if (0 === bP.result.zD || 0 === bP.result.yc.length) b8.ft.gk(aC.eI) && zE();
		else {
			var zF = function() {
				aM.zB(520, L(26), 40, 0, b9.me, b9.mb, -1, !1);
				for (var yc = bP.result.yc, eY = yc.length, gL = af.gL, g = [], aA = 0; aA < eY; aA++) {
					var g5 = yc[aA];
					g.push({
						g5: g5,
						di: gL[g5]
					})
				}
				g.sort((er, es) => es.di - er.di);
				var z9 = af.zO,
					di = bP.result.zP,
					sB = bP.result.zD,
					pE = "",
					zF = 0;
				for (aA = 0; aA < eY; aA++) {
					var hD = g[aA].di * sB / (100 * di),
						zR = z9[g[aA].g5] + ": " + hD.toFixed(2) + "   ";
					g[aA].g5 === aC.eI && (zF = hD), 2 < aA && 4 !== eY ? 3 === aA && (pE += "(" + L(27, [eY - 3]) + ")") : pE += zR
				}
				aM.zB(560, b8.zS.zT(pE), 40, 0, b9.mw, b9.mb, -1, !1), zF ? aM.zB(580, L(28, [zF.toFixed(2) + " + " + zM().toFixed(2)]), 40, 0, b9.mw, b9.mb, -1, !1) : b8.ft.gk(aC.eI) && zE();
				return zF
			}();
			if (! function(zF) {
					7 !== aC.k4 && 10 !== aC.k4 || 0 !== aC.ys && aM.zB(600, L(29, [zF.toFixed(2)]), 40, 0, b9.me, b9.mb, -1, !1)
				}(zF), !(2 === aC.yk || 7 <= aC.k4)) {
				var yc = bP.result.yc,
					eY = yc.length,
					zU = af.zU,
					gL = af.gL,
					zV = [];
				loop: for (var aA = 0; aA < eY; aA++) {
					var g5 = yc[aA],
						zW = b8.zS.zX(zU[g5]);
					if (null !== zW) {
						for (var zY = gL[g5], es = zV.length - 1; 0 <= es; es--)
							if (zW === zV[es].name) {
								zV[es].di += zY, zV[es].g.push({
									g5: g5,
									di: zY
								});
								continue loop
							} zV.push({
							name: zW,
							di: zY,
							g: [{
								g5: g5,
								di: zY
							}]
						})
					}
				}
				if (0 !== zV.length) {
					zV.sort((er, es) => es.di - er.di);
					var g = zV[0].g,
						zF = (g.sort((er, es) => es.di - er.di), "[" + zV[0].name + "]"),
						sB = bP.result.zD,
						za = 512 * sB / 26214400,
						kV = (aM.zB(0, L(30, [zF, za.toFixed(4)]), 40, 0, b9.me, b9.mb, -1, !1), g.length),
						di = bP.result.zP,
						v4 = zV[0].di,
						zb = 1e4 * za;
					for (aA = 0; aA < kV; aA++)
						if (g[aA].g5 === aC.eI) {
							aM.zB(600, L(31, [(zb * g[aA].di / (10 * v4)).toFixed(2)]), 40, 0, b9.me, b9.mb, -1, !1), aM.zB(600, L(32), 40, 0, b9.me, b9.mb, -1, !1);
							break
						} za = (v4 * sB / (1e3 * di)).toFixed(2);
					aM.zB(680, L(33, [zF, za]), 40, 0, b9.me, b9.mb, -1, !1), aC.gh || aM.zB(720, L(34) + bI.zd, 736, 0, b9.me, b9.n2, -1, !1)
				}
			}
		}
	}, this.zJ = function() {
		var zK, vW;
		aC.k6 || (zK = af, vW = aC.eI, 0 === zK.zL[vW]) || zK.ir[vW] < 1 || 2 * zK.ot[vW] > 3 * (zK.iq[vW] + zK.ir[vW]) || zE()
	}
}

function yS() {
	this.dU = function() {
		this.ze = 0, this.yc = [], this.zP = 0, this.zD = 0
	}, this.yr = function() {
		var r9, zj;
		aC.k6 || (r9 = this, 2 === aC.yk ? r9.yc = bP.h1.ya() : aC.hN ? r9.yc = bP.h1.ye() : r9.yc = bP.h1.yg(), r9.ze = bg.zg.zh(), r9.zP = Math.max(1, bP.h1.yh(r9.yc)), b6.ft.oW(), 8 === aC.k4 ? (bP.result.zD = 0, 1 !== aC.ys || 0 === bh.km
			.data[107].value || 100 <= (zj = bh.km.data[108].value) || (bP.result.zD = (1 + aC.xH) * (100 - zj) * 10)) : r9.zD = 100 * bP.result.ze * (1 + aC.xH))
	}
}

function yX() {
	this.yr = function() {
		if (2 === aC.yk) aC.ys = 2;
		else {
			if (8 === aC.k4) b8.ft.jB(0) || 0 === af.lc[0] ? aC.z4 = 1 : b8.ft.jB(1) || 0 === af.lc[1] ? aC.z4 = 0 : aC.z4 = +(af.gL[1] > af.gL[0]);
			else {
				if (aC.hN) {
					var kz = bf.zl();
					if (aC.yf = kz, be.k9[kz]) return void(aC.ys = +(be.eW[aC.eI] === kz))
				}
				aC.z4 = l3[0]
			}
			aC.ys = +(aC.z4 === aC.eI)
		}
	}
}

function d9() {
	this.id = 0, this.dk = 0, this.uF = null, this.uG = null, this.uH = null, this.uN = null, this.a0 = new zm, this.dU = function() {
		var self, dk;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (dk = Android.getVersion()) < 12 || (self.dk = dk, self.id = 1, self.uG = Android),
			function(self) {
				var dk;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.uH = mwIOSdataX, self.uN = window.webkit.messageHandlers.iosCommandA, dk = self
					.uH.version, self.dk = dk ? Number(dk) : 0)
			}(this),
			function(self) {
				var uF;
				if (0 === self.id) {
					try {
						if (!(uF = window.localStorage)) return;
						uF.setItem("tls7", "1"), uF.removeItem("tls7")
					} catch (error) {
						return
					}
					self.uF = uF
				}
			}(this)
	}
}

function zm() {
	this.zq = function() {
		bh.qz.ua(), bh.qz.ub(), ay.x.close(0, 3255), 0 === z.id ? z.uF && z.uF.clear() : 1 === z.id ? z.uG.saveString(199, "") : 2 === z.id && z.uN.postMessage("clear")
	}, this.zr = function() {
		2 === z.id ? z.uN.postMessage("showConsentForm") : 1 === z.id && z.uG.setState(7)
	}, this.zs = function() {
		this.setState(14)
	}, this.qv = function() {
		return 1 === bh.km.uA(2)
	}, this.zt = function() {
		bh.km.u8(102, "")
	}, this.setState = function(zu) {
		1 === z.id && 5 <= z.dk && z.uG.setState(zu)
	}, this.a1 = function() {
		var zv;
		1 === z.id && 7 <= z.dk ? z.uG.setState(5) : ((zv = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = zv.toString())
	}, this.dZ = function() {
		1 !== z.id || z.dk < 17 || z.uG.saveString(23, document.documentElement.outerHTML)
	}, this.e5 = function() {
		0 !== z.id && (1 === z.id ? z.uG.prepareAd("1688441405") : 2 === z.id && (0 === z.dk ? z.uN.postMessage("prepare ad 1770251391") : z.uN.postMessage("loadAds 1770251391")))
	}, this.e8 = function(di) {
		return 0 !== z.id && 1 !== z.id && 2 === z.id && (0 === z.dk ? z.uN.postMessage("show ad " + di) : z.uN.postMessage("showAd"), !0)
	}, this.de = function() {
		2 === z.id && z.dk < 23 && s.t(4, 1, new u("App Update Required", "A new iOS app version with bug fixes has been published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + bI.zw + "' target='_blank'>" + bI
			.zw + "</a>", !0, [new v("⬅️ " + L(35), function() {
				s.t(0)
			}, b9.nJ)]))
	}
}

function dO() {
	function zz(e) {
		a0A(e), s.t(4, 5, new u("🚀 New Game Update", "The game has been updated! Please reload the game." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new v("⬅️ " + L(35), function() {
				s.a0B()
			}), new v("🔄 Reload", function() {
				z.a0.a1()
			}, b9.n1)]))
	}

	function a09(e) {
		a0A(e), s.t(4, 5, new u(L(36), {
			"3249": "No servers found",
			"4705": "Lobby not found",
			"4730": "Kicked from lobby"
		} [e] ?? a03(e), !0))
	}

	function a03(e) {
		var pE = " [" + e + "]";
		return 3249 === e || 1006 === e ? "No Internet / No Server Response" + pE : 4527 === e ? "Player already in lobby" + pE : 4530 === e ? "Lobby Timeout" + pE : 4528 === e ? "Lobby Kick: Another login detected." + pE : 4540 === e ?
			"You have been kicked." + pE : "Unknown error" + pE
	}

	function a0A(e) {
		a02(e), s.x.y()
	}

	function a02(e) {
		var zu = aZ.a01();
		6 === zu ? ay.x.a0D(e) : bl.a05 ? (s.w(), bl.t8(), ay.x.close(ay.x.a06, 3256)) : 8 === zu && aC.a0E(!0)
	}
	this.zx = function(zy, e) {
		zy === 1 && __fx.customLobby.isActive() && aZ.a01() !== 6 && __fx.customLobby.setActive(false);
		if (8 === s.rm && 0 === zy)
			if (4211 === e) zz(e);
			else {
				if (4480 === e) return bh.qz.uc(), void s.t(4, 0, new u(L(38), L(39), !0));
				8 !== aZ.a01() && a02(), s.t(4, 0, new u(L(36), a03(e), !0))
			}
		else {
			var zu = aZ.a01();
			if (6 === zu) {
				if (4211 === e) return void zz(e);
				if (4215 !== e && 4516 !== e && 4527 !== e && 4533 !== e) return void aY.a04(zy)
			} else {
				if (!bl.a05) return 8 === zu ? void(zy !== ay.x.a07 || aC.k6 || 1 !== aC.yn || aC.gh || aM.a08(L(37, [e]))) : void 0;
				if (zy !== ay.x.a06) return
			}
			a09(e)
		}
	}, this.a0C = function(e) {
		8 === aZ.a01() ? aC.k6 || 1 !== aC.yn || aM.a08(L(37, [e])) : a09(e)
	}, this.r = function() {
		a0A(3268)
	}
}

function cy() {
	var a0F, a0G, a0H = -15e3,
		a0I = !1;

	function gl(e) {
		a0c() || (a0I = !0, a0d(e, 1), ay.x.a0e(ay.x.a07), a0f(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY)))
	}

	function a0R(e) {
		a0H = bd.e7, a0d(e, 1), ay.x.a0e(ay.x.a07), 0 < e.touches.length && (a0F = Math.floor(h.k * e.touches[0].clientX), a0G = Math.floor(h.k * e.touches[0].clientY), ar.a0R(e) || a0f(a0F, a0G))
	}

	function a0f(ef, eh) {
		s.gl(ef, eh), 0 === aC.yn ? aZ.gl(ef, eh) : bA.a0g(ef, eh) || bc.gl(ef, eh) || aW.gl(ef, eh) || aK.a0h(ef, eh) || aO.gl(ef, eh) || 0 <= aL.gl(ef, eh) || au.gl(ef, eh) || bH.a0i(ef, eh) || aK.a0j(ef, eh)
	}

	function a0N(e) {
		a0c() || (a0I = !0, a0d(e, 1), a0k(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY)))
	}

	function a0S(e) {
		a0H = bd.e7, a0d(e, 1), 0 < e.touches.length && (a0F = Math.floor(h.k * e.touches[0].clientX), a0G = Math.floor(h.k * e.touches[0].clientY), ar.a0S(e) || a0k(a0F, a0G))
	}

	function a0k(ef, eh) {
		s.a0N(ef, eh), 0 === aC.yn ? aZ.a0N(ef, eh) : (bR.ge(ef, eh), bc.a0N(ef, eh) || (aL.a0N(ef, eh), aK.hF() ? aK.a0N(ef, eh) : aQ.gm ? aQ.a0N(ef) && (bd.dc = !0) : (aU.a0N(ef, eh), aR.m9 && aR.a0N(ef, eh) && (bd.dc = !0))))
	}

	function a0P(e) {
		a0c() || (a0d(e, 1), a0l(), 0 === aC.yn ? (aZ.click(-1024, -1024), aS.qX()) : (aU.a0m(-1024, -1024), aL.a0N(-1024, -1024), aQ.a0n(), aR.m9 = !1))
	}

	function a0O(e) {
		a0c() || (a0d(e, 1), a0o(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY), 2 === e.button), bH.a0L && (bH.a0L = !1, e.preventDefault()))
	}

	function click(e) {
		a0c() || a0d(e, 1)
	}

	function a0T(e) {
		a0H = bd.e7, a0d(e, 1), e && e.touches && 0 < e.touches.length && 0 !== aC.yn ? aR.m9 = !1 : ar.a0p() || (a0o(a0F, a0G, !1), bH.a0L && (bH.a0L = !1, e.preventDefault()))
	}

	function a0U(e) {
		a0H = bd.e7, a0d(e, 1), a0o(a0F, a0G, !1), bH.a0L && (bH.a0L = !1, e.preventDefault())
	}

	function a0V(e) {}

	function a0W(e) {}

	function a0X(e) {
		a0c() || a0d(e, 0)
	}

	function a0o(ef, eh, a0q) {
		a0l(), 0 === aC.yn ? aZ.click(ef, eh) : (aU.a0m(ef, eh), bc.a0m(), aQ.a0n(), aR.m9 = !1, aK.click(ef, eh, a0q) ? bd.dc = !0 : aL.a0O(ef, eh))
	}

	function a0l() {
		s.a0l()
	}

	function a0Q(e) {
		var ef, eh, deltaY;
		a0c() || (a0d(e, 1), ay.x.a0e(ay.x.a07), ef = Math.floor(h.k * e.clientX), eh = Math.floor(h.k * e.clientY), deltaY = e.deltaY, 1 === e.deltaMode && (deltaY *= 16), s.a0Q(ef, eh, deltaY), 0 === aC.yn ? aZ.a0Q(ef, eh, deltaY) : aU.a0Q(ef, eh,
			deltaY) || (aQ.a0r(ef, eh) ? aQ.a0Q(deltaY) && (bd.dc = !0) : aR.a0Q(ef, eh, deltaY)))
	}

	function a0Y(e) {
		a0d(e, 0)
	}

	function a0d(e, id) {
		0 === id && s.hF() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== aZ.a01() && e.preventDefault()
	}

	function a0Z(e) {
		if (__fx.keybindHandler(e.key)) return;
		a0c() || 0 < h.rU || (e = e.code) && e.length && (bV.et(e, 18) ? ap.a0t(3) : bV.et(e, 22) ? ap.a0t(0) : bV.et(e, 20) ? ap.a0t(1) : bV.et(e, 24) ? ap.a0t(2) : bV.et(e, 10) ? aQ.a0u(31 / 32) : bV.et(e, 8) ? aQ.a0u(32 / 31) : bV.et(e, 6) ? aQ
			.a0u(7 / 8) : bV.et(e, 4) ? aQ.a0u(8 / 7) : bV.et(e, 14) ? 0 !== aC.yn && aR.a0Q(Math.floor(h.i / 2), Math.floor(h.j / 2), -200) : bV.et(e, 16) ? 0 !== aC.yn && aR.a0Q(Math.floor(h.i / 2), Math.floor(h.j / 2), 200) : bV.et(e, 0) ? aC
			.yn && bR.gf(!1) : bV.et(e, 2) ? aC.yn && bR.gf(!0) : bV.et(e, 26) ? aC.yn && bR.h9() : bV.et(e, 28) && aC.yn && bR.hE())
	}

	function a0a(e) {
		if (!a0c() && !(0 < h.rU || bd.e7 < 400)) {
			var code = e.code;
			if (code && code.length && !("Enter" === code && s.a0v(1) || "Space" === code && s.a0v(0))) return bl.a05 ? bl.tE.a0v(code) ? void 0 : void("Escape" === code && bH.f1()) : void(8 !== aZ.a01() && aZ.a0v(e) ? bd.dc = !0 : "Escape" ===
				code ? bH.f1() : bV.et(code, 18) ? ap.a0w(3) : bV.et(code, 22) ? ap.a0w(0) : bV.et(code, 20) ? ap.a0w(1) : bV.et(code, 24) ? ap.a0w(2) : bV.et(code, 12) ? bA.a0x(!aC.m7) : "Space" === code && aC.yn && (aL.gi && aL.a0y(), aC
					.gh) && bA.a0z(!1))
		}
	}

	function a0b() {
		"hidden" === document.visibilityState ? 1 === aC.yn && (aC.gh ? bA.a10() : !aC.k6 || aL.gi || aC.gt || aL.a0y()) : bd.dc = !0
	}

	function a0c() {
		return a0H + 15e3 > bd.e7
	}

	function resize() {
		h.a12()
	}
	this.a0J = 0, this.a0K = "", this.a0L = !1, this.dU = function() {
		a0M.addEventListener("mousedown", gl, {
			passive: !1
		}), a0M.addEventListener("mousemove", a0N, {
			passive: !1
		}), a0M.addEventListener("mouseup", a0O, {
			passive: !1
		}), a0M.addEventListener("click", click, {
			passive: !1
		}), a0M.addEventListener("mouseleave", a0P, {
			passive: !1
		}), a0M.addEventListener("wheel", a0Q, {
			passive: !1
		}), a0M.addEventListener("touchstart", a0R, {
			passive: !1
		}), a0M.addEventListener("touchmove", a0S, {
			passive: !1
		}), a0M.addEventListener("touchend", a0T, {
			passive: !1
		}), a0M.addEventListener("touchcancel", a0U, {
			passive: !1
		}), a0M.addEventListener("dragover", a0V), a0M.addEventListener("drop", a0W), a0M.addEventListener("dblclick", a0X), document.addEventListener("contextmenu", a0Y), document.addEventListener("keydown", a0Z), document.addEventListener(
			"keyup", a0a), document.addEventListener("visibilitychange", a0b), window.addEventListener("resize", resize)
	}, this.a0i = function(ef, eh) {
		return !!bA.gl(ef, eh) || !!(aU.gl(ef, eh) || aR.gl(ef, eh) || aQ.gl(ef, eh) || aM.gl(ef, eh))
	}, this.a11 = a0c, this.q0 = function() {
		return !a0I || 0 < a0H
	}, this.f1 = function() {
		if (!s.hF()) return 8 === aZ.a01() ? aC.m7 ? void bA.a0x(!1) : bc.hF ? void bc.a0y() : void aL.a0y() : void(7 !== aZ.a01() && 6 === aZ.a01() && aY.a13());
		s.a0v(2)
	}
}

function bu() {
	this.pX = new a14, this.pg = new a15, this.ft = new a16, this.zS = new a17, this.x4 = new a18, this.a19 = new a1A, this.canvas = new a1B, this.color = new a1C, this.a1D = new a1E, this.dU = function() {
		this.pX.uZ()
	}
}

function a15() {
	this.vU = function(g) {
		g.fill(0)
	}, this.a1F = function(g) {
		for (var eY = g.length, aA = 0; aA < eY; aA++) g[aA] = []
	}, this.a1G = function(hd, a1H) {
		for (var he = bM.f8, aA = 0; aA < 3; aA++) he[aA] = a1H * hd[aA];
		return he
	}, this.a1I = function(hd, he, a1J) {
		for (var hh = 0, aA = 0; aA < 3; aA++) hh += Math.abs(hd[aA] - he[aA]);
		return a1J <= hh
	}, this.a1K = function(hd, a1L) {
		for (var aA = 0; aA < 3; aA++) hd[aA] = bJ.p5(hd[aA] + a1L, 0, 255);
		return hd
	}, this.a1M = function(g, s7, s8) {
		s8 = s8 || g.length - 1;
		for (var a1N = 0, aA = s7 = s7 || 0; aA <= s8; aA++) a1N += g[aA];
		return a1N
	}, this.a1O = function(g, a1P) {
		for (var aA, a1Q, eY = g.length, a1R = [], er = eY - 1; 0 <= er; er--) {
			for (aA = a1Q = 0; aA < eY; aA++) a1P(g[aA]) < a1P(g[a1Q]) && (a1Q = aA);
			eY--, a1R.push(g[a1Q]), g[a1Q] = g[eY], g.pop()
		}
		return a1R
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
	}, this.a1S = function(g, f0) {
		for (var eY = g.length, g0 = 0, aA = 0; aA < eY; aA++) g0 += g[aA] > f0;
		return g0
	}, this.a1T = function(a1U, a1V, min) {
		for (var eY = a1V[0], aA = eY - 1; 0 <= aA; aA--) a1U[aA] < min && (a1U[aA] = a1U[--eY]);
		a1V[0] = eY
	}, this.a1W = function(g, eY, value) {
		for (var aA = 0; aA < eY; aA++) g[aA] -= value
	}, this.a1X = function(g) {
		for (var eY = g.length, aA = 0; aA < eY; aA++)
			if ("string" != typeof g[aA]) return !1;
		return !0
	}, this.a1Y = function(pE, g, a1Z) {
		g.fill(0);
		for (var sB = pE.split(","), eY = Math.min(sB.length, g.length), aA = 0; aA < eY; aA++) g[aA] = Math.min(parseInt(sB[aA]), a1Z)
	}, this.a1a = function(pE, g, qU) {
		g.fill("");
		for (var sB = pE.split('"'), eY = Math.min(sB.length, 2 * g.length), hL = 0, aA = 1; aA < eY; aA += 2) g[hL++] = sB[aA].slice(0, qU)
	}, this.a1b = function(g, g0) {
		if (0 === g0) g.fill(0);
		else {
			var a1N = this.a1M(g),
				eY = g.length;
			if (0 === a1N) g.fill(bJ.dj(g0, eY));
			else
				for (var aA = 0; aA < eY; aA++) g[aA] = bJ.dj(g0 * g[aA], a1N);
			if (0 === (a1N = this.a1M(g))) g[1] = g0;
			else
				for (var hL = 0; a1N++ < g0;) g[hL = (hL + 1) % eY] && g[hL]++
		}
	}, this.a1c = function(g) {
		if (!g) return 0;
		var eY = g.length;
		if (0 === eY) return 0;
		for (var f0 = g[eY - 1], aA = eY - 2; 0 <= aA; aA--)
			if (g[aA] !== f0) return aA + 2;
		return 1
	}, this.a1d = function(g) {
		for (var a1N = 0, aA = 0; aA < g.length; aA++) a1N += g[aA].length;
		return a1N
	}, this.a1e = function(a1f) {
		for (var g = [], aA = 0; aA < a1f.length; aA++) g = g.concat(a1f[aA]);
		return g
	}
}

function a1B() {
	this.xa = function(a1g, dx, a1h) {
		var hP = a1g.height,
			a1i = b8.pX.vK(hP, hP),
			hV = b8.pX.getContext(a1i);
		return function(i, hV, a1h) {
			hV.fillStyle = a1h, hV.beginPath(), hV.arc(i / 2, i / 2, .47 * i, 0, 2 * Math.PI), hV.fill()
		}(hP, hV, a1h), hV.drawImage(a1g, -dx * hP, 0), a1i
	}, this.a1k = function(a1l) {
		var hV, hS, hP = a1l.height;
		return a1l.width === hP && (hS = (hV = b8.pX.getContext(a1l, !0)).getImageData(0, 0, hP, hP), b8.a19.a1m(hS.data, hP, hP, .9), hV.putImageData(hS, 0, 0)), a1l
	}
}

function a1C() {
	this.a1n = function(f0) {
		return [f0 >> 12 & 63, f0 >> 6 & 63, 63 & f0]
	}, this.a1o = function(f0) {
		for (var g = this.a1n(f0), aA = 0; aA < 3; aA++) g[aA] = ~~(4.05 * g[aA]);
		return g
	}, this.a1p = function(f0) {
		f0 = this.a1o(f0);
		return b8.color.mW(f0[0], f0[1], f0[2])
	}, this.a1q = function(g) {
		for (var aA = 0; aA < 3; aA++) g[aA] = ~~(g[aA] / 4.04);
		return (g[0] << 12) + (g[1] << 6) + g[2]
	}, this.mW = function(dw, sB, es) {
		return "rgb(" + dw + "," + sB + "," + es + ")"
	}, this.mY = function(dw, sB, es, er) {
		return "rgba(" + dw + "," + sB + "," + es + "," + er.toFixed(3) + ")"
	}, this.q2 = function(et) {
		for (var g = et.split("(")[1].split(","), f7 = bM.f7, aA = 0; aA < 3; aA++) f7[aA] = parseInt(g[aA]);
		return 4 === g.length ? f7[3] = 255 * parseFloat(g[3].slice(0, -1)) : f7[3] = 255, f7
	}, this.q3 = function(a1r, eb) {
		for (var g = a1r.slice(a1r.indexOf("(") + 1, a1r.indexOf(")")).split(","), f7 = bM.f7, aA = 0; aA < 3; aA++) f7[aA] = bJ.p5(parseInt(g[aA].trim(), 10) + eb, 0, 255);
		return 3 === g.length ? this.mW(f7[0], f7[1], f7[2]) : (a1r = parseFloat(g[3].trim()), this.mY(f7[0], f7[1], f7[2], a1r = 0 === a1r ? .3 : a1r))
	}, this.a1s = function(g) {
		for (var pE = "#", aA = 0; aA < 3; aA++) {
			var dw = g[aA].toString(16);
			pE += 1 === dw.length ? "0" + dw : dw
		}
		return pE
	}, this.a1t = function(pE) {
		var dw, sB;
		return pE.length < 7 ? b9.mV : (dw = parseInt(pE.slice(1, 3), 16), sB = parseInt(pE.slice(3, 5), 16), pE = parseInt(pE.slice(5, 7), 16), this.mW(dw, sB, pE))
	}
}

function a18() {
	this.a1u = function(pE, font, maxWidth) {
		if (font && (tf.font = font), tf.measureText(pE).width <= maxWidth) return pE;
		for (var aA = pE.length - 1; 1 <= aA; aA--)
			if (pE = pE.substring(0, aA), tf.measureText(pE + "...").width <= maxWidth) return pE + "...";
		return "..."
	}
}

function a1E() {
	var a1w = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.a1x = function(e7) {
		var a1z, pE = new Date(e7.getTime() - 6e4 * e7.getTimezoneOffset()).toUTCString();
		return pE.length < 12 || (pE = pE.substring(5, pE.length), 0 === (e7 = e7.getTimezoneOffset())) ? pE : (a1z = (e7 < 0 ? "+" : "-") + bJ.dj(Math.abs(e7), 60), 0 == (e7 = Math.abs(e7) % 60) ? pE + a1z : pE + a1z + ":" + (e7 < 10 ? "0" :
			"") + e7)
	}, this.a20 = function(e7) {
		var pE = e7.toUTCString();
		return pE.length < 12 ? pE : function(e7) {
			return a1w[e7.getUTCDay()]
		}(e7) + ", " + pE.substring(5, pE.length - 4)
	}
}

function a14() {
	var a22 = null;
	this.xr = 0, this.uZ = function() {
		var f0 = bh.km.data[5].value;
		a22 = "px " + f0, "Trebuchet MS" !== f0 && (a22 += ", Trebuchet MS"), this.xr = hO(32, 32, ["a", "b", "m"], 200, a22)
	}, this.vK = function(i, j) {
		var et = document.createElement("canvas");
		return et.width = i, et.height = j, et
	}, this.getContext = function(canvas, alpha) {
		return canvas.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(x4, i, j) {
		return x4.getImageData(0, 0, i, j)
	}, this.rM = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + a22 : 1 === type ? "bold " + size + a22 : 2 === type ? "lighter " + size + a22 : 3 === type ? "italic " + size + a22 : 4 === type ? "oblique " + size + a22 : 5 === type ? "small-caps " +
			size + a22 : "small-caps bold " + size + a22
	}, this.textAlign = function(hV, id) {
		hV.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(hV, id) {
		hV.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.pi = function(e, code, color) {
		color = this.ph(ba.rO) + " solid " + (color || b9.me);
		5 === (code = code || 5) ? e.style.border = color : 4 === code ? e.style.borderLeft = color : 2 === code ? e.style.borderBottom = color : 6 === code ? e.style.borderRight = color : e.style.borderTop = color
	}, this.sD = function(e, ef, eh, i, j) {
		e = e.style;
		e.left = this.a23(ef), e.top = this.a23(eh), e.width = this.a23(i), e.height = this.a23(j)
	}, this.pY = function(f0) {
		return 1 + f0 * z.a0.qv()
	}, this.qq = function(mG, g6) {
		return mG * this.pY(void 0 === g6 ? .5 : g6) * h.pZ / h.k
	}, this.sC = function(mG, g6) {
		return mG * this.pY(void 0 === g6 ? .5 : g6) * h.pZ
	}, this.rs = function(mG, g6, a24) {
		return this.pY(g6) * Math.min(mG * h.pZ, a24 * h.i) / h.k
	}, this.ph = function(f0) {
		return f0.toFixed(1) + "px"
	}, this.a23 = function(f0) {
		return this.a26(f0).toFixed(1) + "px"
	}, this.a26 = function(f0) {
		return f0 / h.k
	}, this.a27 = function(rc, a28) {
		for (var pE = "<ul>", eY = rc.length, aA = 0; aA < eY; aA++) pE += "<li>" + rc[aA] + ": <a href='" + a28[aA] + "' target='_blank'>" + a28[aA] + "</a></li>";
		return pE += "</ul>"
	}, this.a29 = function(a2A) {
		return "<a href='" + a2A + "' target='_blank'>" + a2A + "</a>"
	}, this.a2B = function(e) {
		navigator.clipboard && navigator.clipboard.writeText(e.value)
	}, this.a2C = function(e) {
		var di = e.textContent;
		b8.zS.a2D(di, "✔") || (1 === di.length ? e.textContent = "✔" : e.textContent = di + " ✔", setTimeout(function() {
			e.textContent = di
		}, 500))
	}, this.measureText = function(pE) {
		return tf.measureText(pE).width
	}, this.s3 = function(a2E) {
		a2E.style.overflowX = "auto", a2E.style.overflowY = "hidden", a2E.style.whiteSpace = "nowrap", a2E.addEventListener("wheel", function(e) {
			Math.abs(e.deltaY) < Math.abs(e.deltaX) || (this.scrollLeft += e.deltaY, this.sF = this.scrollLeft, e.preventDefault())
		}), a2E.addEventListener("scroll", function() {
			this.sF = this.scrollLeft
		})
	}
}

function a16() {
	this.gj = function(zu) {
		return 0 === zu ? 1 === aC.yn && aC.gt : 1 === zu ? 1 === aC.yn && !aC.gt : 2 === aC.yn
	}, this.gk = function(player) {
		return 0 !== af.lc[player] && 2 !== af.a2F[player]
	}, this.a2G = function(player) {
		return player === aC.eI && 2 !== af.a2F[player]
	}, this.lB = function() {
		return ak.jo < 2 ? 0 : aC.hN ? 1 < bf.a2H() : af.gL[l3[1]]
	}, this.a2I = function() {
		var jo = ak.jo;
		if (0 !== jo) {
			if (!aC.hN) return !this.jB(l3[0]);
			for (var eW = be.eW, kz = bf.l0(), jp = ak.jp, aA = jo - 1; 0 <= aA; aA--) {
				var g5 = jp[aA];
				if (eW[g5] === kz && !this.jB(g5)) return 1
			}
		}
		return 0
	}, this.a2J = function(player) {
		return player === aC.eI
	}, this.jB = function(player) {
		return player >= aC.jn || 2 === af.a2F[player]
	}, this.kZ = function(player) {
		return 0 !== af.lc[player]
	}, this.yd = function(player) {
		return player < aC.jn
	}, this.oq = function(a2K, a2L) {
		return a2K !== a2L
	}, this.fw = function(player, f0) {
		var min;
		return f0 = this.a2M(player, f0), af.gZ[player] += f0, af.a2N[player] && (min = Math.min(af.a2N[player], af.gZ[player]), af.a2N[player] -= min, af.gZ[player] -= min), f0
	}, this.a2M = function(player, f0) {
		var a2O = af.gZ[player];
		return f0 = Math.min(f0, af.gL[player] * aC.a2P - a2O), f0 = Math.min(f0, aC.a2Q - a2O), Math.max(f0, 0)
	}, this.or = function(player, i7, a2R, a2S) {
		var a2O = af.gZ[player],
			i7 = bJ.dj(a2O * (i7 + 1), 1024),
			a2R = bJ.dj(a2R * a2O, 1024),
			i7 = Math.min(i7, a2O - a2R);
		return 10 === aC.k4 && (i7 = b2.a2U(player, i7)), bM.f5[0] = i7, bM.f5[1] = a2R, a2S <= i7
	}, this.oI = function(player, o1, o0) {
		var player = af.gZ[player],
			a2T = bJ.dj(64 * player, 1024),
			player = (o1 = Math.min(o1, player - a2T), this.a2W(o1));
		return a2T += player, o1 = this.a2M(o0, o1 -= player), bM.f5[0] = o1, bM.f5[1] = a2T, 1 <= o1
	}, this.oK = function(o1, o0) {
		var a2V = this.a2W(o1);
		return o1 = this.a2M(o0, o1 -= a2V), bM.f5[0] = o1, bM.f5[1] = a2V, 1 <= o1
	}, this.i6 = function(player, a2X) {
		return bJ.dj(af.gZ[player] * (a2X + 1), 1024)
	}, this.a2W = function(a2Y) {
		return bJ.dj(Math.max(2142 - bd.jk(), 0) * a2Y, 2142)
	}, this.p3 = function(player, a2R) {
		a2R = bJ.dj(a2R * af.gZ[player], 1024);
		bM.f5[1] = a2R, af.gZ[player] -= a2R
	}, this.fu = function(player, a2Z) {
		var fH, fJ, es = af.gZ[player];
		return a2Z <= es ? af.gZ[player] -= a2Z : (af.gZ[player] = 0, fJ = af.a2N[player] + (fH = 5 * ((es = a2Z - es) >> 2)), bb.fx(player, fH - es, 12), fJ <= aC.a2a ? af.a2N[player] = fJ : (af.a2N[player] = aC.a2a, bb.fx(player, fJ - aC.a2a,
			18))), a2Z
	}, this.ko = function(player, i7) {
		var gZ = af.gZ,
			a2O = gZ[player],
			i7 = bJ.dj(a2O * (i7 + 1), 1024),
			a2T = Math.max(bJ.dj(a2O, 10), 1e3);
		return (i7 = Math.min(i7, a2O - a2T)) < 0 ? (gZ[player] = 0, a2T = Math.min(1e3, a2O + aC.a2a - af.a2N[player]), bM.f5[1] = a2T, af.a2N[player] += a2T - a2O, 0) : (bM.f5[1] = a2T, 10 === aC.k4 && (i7 = b2.a2U(player, i7)), gZ[player] -=
			a2T + i7, i7)
	}, this.ou = function(player) {
		af.gZ[player] -= bM.f5[0] + bM.f5[1]
	}, this.os = function(player, iy) {
		return (iy = Math.min(iy, aC.eV)) < aC.eV && 0 === af.lc[iy] && (iy = aC.eV), (bM.eU[0] = iy) === aC.eV || eR(player, iy)
	}, this.ow = function(player, o0) {
		return 0 !== af.lc[o0] && !eR(player, o0)
	}, this.a2b = function(player, a2c) {
		for (var g5, eY = ak.jo, zj = 0, a2d = l3, aA = 0; aA < eY; aA++)
			if (g5 = a2d[aA], !this.jB(g5)) {
				if (player === g5) return !0;
				if (++zj > a2c) return !1
			} return !1
	}, this.kw = function(g5) {
		var a2e = aC.hN ? bf.a2f() : af.gL[l3[0]];
		return a2e >= bJ.dj(g5 * aC.jX, 100)
	}, this.a2g = function(f0, min, max) {
		return Math.floor(bJ.p5(isNaN(f0) ? 0 : Number(f0), min, max))
	}
}

function a1A() {
	this.a2h = function(canvas, a2i, a2j) {
		var i = canvas.width,
			j = canvas.height,
			et = b8.pX.vK(i, j),
			hV = b8.pX.getContext(et, !0),
			canvas = (hV.drawImage(canvas, 0, 0), hV.getImageData(0, 0, i, j));
		return a2i(canvas.data, i, j, a2j), hV.putImageData(canvas, 0, 0), et
	}, this.a2k = function(vV, i, j) {
		for (var ef = i - 1; 0 <= ef; ef--)
			for (var eh = j - 1; 0 <= eh; eh--) {
				var aA = 4 * (ef + eh * i);
				vV[3 + aA] = vV[aA], vV[aA] = vV[1 + aA] = vV[2 + aA] = 255
			}
	}, this.a2l = function(vV, i, j) {
		for (var ef = i - 1; 0 <= ef; ef--)
			for (var eh = j - 1; 0 <= eh; eh--) {
				var aA = 4 * (ef + eh * i);
				vV[1 + aA] > vV[2 + aA] + 10 && (vV[3 + aA] = vV[aA], vV[1 + aA] = vV[2 + aA])
			}
	}, this.a2m = function(vV, i, j, a2j) {
		for (var gap = Math.floor(Math.min(i, j) * a2j), ef = 0; ef < i; ef++)
			for (var aA, eh = 0; eh < j; eh++)(ef < gap || eh < gap || i - gap <= ef || j - gap <= eh) && (vV[3 + (aA = 4 * (ef + eh * i))] = 255 - 255 * (vV[1 + aA] - vV[aA]) / (255 - vV[aA]))
	}, this.a2n = function(vV, i, j, a2j) {
		for (var ef = i - 1; 0 <= ef; ef--)
			for (var eh = j - 1; 0 <= eh; eh--) {
				var aA = 4 * (ef + eh * i);
				vV[aA] = a2j[0], vV[1 + aA] = a2j[1], vV[2 + aA] = a2j[2]
			}
	}, this.a2o = function(vV, i, j, a2j) {
		for (var gap = Math.floor(i * a2j), ef = 0; ef < i; ef++)
			for (var aA, eh = 0; eh < j; eh++)(ef < gap || eh < gap || i - gap <= ef || j - gap <= eh) && (vV[aA = 4 * (ef + eh * i)] = vV[1 + aA] = vV[2 + aA] = 0)
	}, this.a2p = function(vV, i, j) {
		for (var eh, aA, ef = i - 1; 0 <= ef; ef--)
			for (eh = j - 1; 0 <= eh; eh--) 200 < vV[1 + (aA = 4 * (ef + eh * i))] && vV[1 + aA] - 20 > vV[aA] && vV[1 + aA] - 20 > vV[2 + aA] ? vV[aA] + vV[2 + aA] < 40 ? vV[3 + aA] = 0 : (vV[3 + aA] = vV[aA], vV[aA] = 255, vV[1 + aA] = 255, vV[
				2 + aA] = 255) : vV[aA] < 50 && vV[1 + aA] < 50 && vV[2 + aA] < 50 && (vV[aA] + vV[1 + aA] + vV[2 + aA] < 50 ? vV[3 + aA] = 180 : vV[3 + aA] = 180 + Math.floor(75 * (vV[aA] + vV[1 + aA] + vV[2 + aA] - 50) / 100))
	}, this.a2q = function(vV, i, j) {
		for (var eh, aA, ef = i - 1; 0 <= ef; ef--)
			for (eh = j - 1; 0 <= eh; eh--) vV[1 + (aA = 4 * (ef + eh * i))] > vV[aA] + 20 && vV[1 + aA] > vV[2 + aA] + 20 && vV[aA] + vV[2] < 40 && (vV[3 + aA] = 255 - vV[1 + aA], vV[aA] = vV[1 + aA] = vV[2 + aA] = vV[aA])
	}, this.a1m = function(vV, i, j, a2j) {
		for (var dw = i >> 1, ef = 0; ef < i; ef++)
			for (var eh = 0; eh < j; eh++) Math.sqrt((ef - dw) * (ef - dw) + (eh - dw) * (eh - dw)) > a2j * dw && (vV[4 * (ef + eh * i) + 3] = 0)
	}
}

function a17() {
	this.y5 = function(f0) {
		var aA, a2r, a2s, a2t, a2u;
		if (f0 < 0) return "-" + this.y5(Math.abs(f0));
		if (f0 < 1e3) return f0.toString();
		for (a2r = Math.floor(Math.log(f0 + .5) / Math.log(10)) + 1, a2s = Math.floor((a2r - 1) / 3), a2u = (a2t = f0.toString()).substring(a2r - 3, a2r), aA = 1; aA < a2s; aA++) a2u = a2t.substring(a2r - 3 * (aA + 1), a2r - 3 * aA) + " " + a2u;
		return a2t.substring(0, a2r - 3 * a2s) + " " + a2u
	}, this.a2v = function(g5, a2r) {
		return g5.toFixed(a2r) + "%"
	}, this.a2w = function(f0, a2x) {
		return f0.toFixed(bJ.p5(Math.floor((void 0 === a2x ? 3 : a2x) - Math.log10(Math.max(f0, 1))), 0, 8))
	}, this.a2y = function(f0, mG, a2r) {
		return (f0 * mG).toFixed(a2r)
	}, this.zX = function(username) {
		var ec, eN = username.indexOf("[");
		return !(eN < 0) && 1 < (ec = username.indexOf("]")) - eN && ec - eN <= 8 ? username.substring(eN + 1, ec).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.zX;
	this.a2z = function(pE) {
		for (var er = Math.floor(.5 * pE.length + .5), mM = Math.floor(.5 * (er - 1)), aA = 0; aA < mM; aA++)
			for (var es = -1; es < 2; es += 2) {
				var et = er + es * aA;
				if (" " === pE[et]) return [this.zT(pE.substring(0, et)), this.a30(pE.substring(et))]
			}
		return [pE.substring(0, er), pE.substring(er)]
	}, this.a30 = function(pE) {
		for (var eY = pE.length, aA = 0; aA < eY; aA++)
			if (" " !== pE[aA]) return pE.substring(aA);
		return pE
	}, this.zT = function(pE) {
		for (var aA = pE.length - 1; 0 <= aA; aA--)
			if (" " !== pE[aA]) return pE.substring(0, aA + 1);
		return pE
	}, this.a31 = function(pE, a32) {
		return pE.split("(")[0] + "(🧈 " + a32.toFixed(2) + ")"
	}, this.startsWith = function(pE, a33) {
		return pE.substring(0, a33.length) === a33
	}, this.a2D = function(pE, a33) {
		var eY = pE.length;
		return pE.substring(eY - a33.length, eY) === a33
	}, this.a34 = function(g, a35, a36) {
		var pE = "",
			eY = g.length - 1;
		a36 = a36 || "";
		for (var aA = 0; aA < eY; aA++) pE += a36 + g[aA] + a36 + ",", (aA + 1) % a35 == 0 && (pE += "\n");
		return pE += a36 + g[eY] + a36
	}, this.a37 = function(pE, hd, he) {
		return pE.replace(new RegExp(hd, "g"), he)
	}
}

function a38() {
	this.iv = function(player, eK) {
		aH.wq(player, bK.eg(eK), bK.ei(eK)) && (bd.dc = !0), aC.k6 && this.ih()
	}, this.ih = function() {
		aC.gt = !1;
		for (var aA = 0; aA < aC.jn; aA++) 0 !== af.lc[aA] && 0 === af.gL[aA] && aH.ww(aA);
		0 !== af.lc[aC.eI] ? (bb.lY[7] = af.gL[aC.eI], bb.lY[8] = af.gZ[aC.eI], aQ.a39(), aV.a3A(), aC.gh || aG.lx(af.iM[aC.eI] - 5, af.iO[aC.eI] - 5, af.iN[aC.eI] + 5, af.iP[aC.eI] + 5), at.dU()) : aW.show(!1, !1, !1, !0), aM.a3B(18), ae.a3C(),
			ae.lO(!0), bN.x.a3D(), aK.qo(), aC.op = null, bZ.a3E = !0, bZ.a3F(), aC.k6 && z.a0.setState(1)
	}
}

function bw() {
	this.eV = 512, this.a2Q = 15e8, this.a3G = 1e9, this.a2a = 5e4, this.a3H = 512, this.fr = 2, this.eI = 0, this.jn = 0, this.yq = 0, this.k8 = 0, this.yp = 0, this.w1 = 512, this.w6 = 512, this.a2P = 150, this.k6 = !0, this.gh = 0, this.yn = 0,
		this.jX = 0, this.m7 = !1, this.gt = 0, this.a3I = 0, this.hN = !1, this.w8 = 0, this.w9 = 0, this.k4 = 0, this.xH = 0, this.op = null, this.z5 = new xA, this.a3J = 30, this.yk = 0, this.ys = 0, this.z4 = 0, this.yf = 0, this.data = new a3K,
		this.a3L = new a3M, this.a3N = 0, this.a3O = function() {
			bP.dU(), this.yq = this.jn = this.data.humanCount, this.k6 = 1 === this.yq && !__fx.customLobby.isActive(), this.m7 = !1, this.gh = this.data.isReplay, this.k4 = 0 === this.data.gameMode ? [7, 10, 8][this.data.battleRoyaleMode] : this
				.data.isZombieMode ? 9 : this.data.numberTeams - 2, this.xH = this.data.isContest, this.hN = this.k4 < 7 || 9 === this.k4, this.k4 = 10 === this.k4 && this.k6 ? 7 : this.k4, this.k4 = 8 === this.k4 && 2 !== this.jn ? 7 : this.k4, ax
				.dU(), this.w8 = this.data.numberTeams, this.data.teamPlayerCount ? this.w9 = +(0 < this.data.teamPlayerCount[0]) : (this.w9 = 0, this.hN && this.k6 && (this.data.teamPlayerCount = new Uint16Array(9), this.data.teamPlayerCount.fill(1,
					1, this.w8 + 1), aC.a3L.a3P())), this.a3J = this.jn <= 2 ? 30 : this.jn <= 50 ? 40 : 50, this.a3I = this.gt = __fx.customLobby.isActive() ? __fx.customLobby.gameInfo.spawnSelection : this.data.selectableSpawn, this.op = this.gt ?
				new a38 : null, this.w1 = __fx.customLobby.isActive() ? Math.max(Math.min(__fx.customLobby.gameInfo.botCount, this.data.playerCount), this.jn) : 1 === l.dh ? this.w1 = this.jn : this.w1 = this.data.playerCount,
				this.w6 = this.w1, this.k8 = this.w1 - this.jn, this.yp = 0, this.eI = this.data.selectedPlayer, this.yk = 0, this.ys = 0, this.z4 = 0, this.yf = 0, aw.a3Q(this.data.spawningSeed), ad.dU(), af.dU(), ah.a3R(), b6.nt.oa = [], be.dU(),
				this.yn = 1,
				__fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), bb.dU(), a3S(), ab.dV(), an.a3T(), bZ.dU(), ab.dU(), aq.dU(), bK.dU(), bL.dU(), am.dU(), bT.a3U(), aD.dU(),
				ah.a6(), aH.dU(), aI.dU(), ak.a3V(), b7.dU(), bf.dU(), bN.dU(), bc.dU(), a3W.putImageData(a3X, 0, 0), aU.dU(), aR.dU(), aQ.dU(), bA.dU(), au.dU(), aT.dU(), aV.dU(), aL.dU(), aP.dU(), aM.dU(), aO.dU(), aK.dU(), aW.dU(), aE.dU(), aF
				.dU(), fZ(), ac.dU(), ae.dU(), b2.dU(), b3.dU(), az.dU(), this.z5.dU(), bd.a3U(), aG.lw(), 0 === af.lc[aC.eI] && aW.show(!1, !0), ae.lO(!0), at.dU(), bd.dc = !0, this.gh || this.k6 && this.gt || z.a0.setState(1), this.a3N = 0
		}, this.a0E = function(a3Z) {
			aC.gh || b7.on.a3a.length || (b7.on.a3a = b7.a3b.yG()),
				__fx.customLobby.isActive() === false && ay.x.a3c(),
				this.yn = 0, bd.a3d(), z.a0.setState(0), aZ.setState(0), a3Z || bS.e3.show();
			if (__fx.customLobby.isActive()) __fx.customLobby.rejoinLobby();
			else 2 === this.a3N ? s.x.a3e() : 1 === this.a3N ? s.t(19) : s.t(5, 5)
		}, this.a3f = function() {
			return this.gh ? aL.gi || !bA.a3g : this.k6 && (aL.gi || this.gt)
		}, this.a3h = function() {
			return 1 === this.yn && !this.gt
		}
}

function a3K() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.elo = null, this.colorsType = 0, this.colorsPersonalized = 1,
		this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData = null, this.spawningType = 0,
		this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this.aIncomeData = null, this
		.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null
}

function a3M() {
	this.a3P = function() {
		var a3i = aC.data;
		b8.pg.a1b(a3i.teamPlayerCount, a3i.playerCount), a3i.numberTeams = b8.pg.a1S(a3i.teamPlayerCount, 0), a3i.teamPlayerCount[0] && a3i.teamPlayerCount[7] && (a3i.teamPlayerCount[7] = 0, this.a3P())
	}, this.a3j = function() {
		var a3i = aC.data;
		a3i.mapType < 2 ? bQ.a6(bQ.a3k(a3i), a3i.mapSeed) : bQ.a3l(a3i.canvas)
	}, this.a3m = function() {
		var a3i = aC.data;
		a3i.colorsData || (a3i.colorsData = new Uint32Array(1)), a3i.selectableColor && (a3i.colorsData[0] = bh.x.uY()), a3i.selectableName && (a3i.playerNamesData || (a3i.playerNamesData = new Array(1)), a3i.playerNamesData[0] = bh.km.data[122]
			.value)
	}, this.a3n = function() {
		aC.data = new a3K, aC.data.aIncomeType = 2, aC.data.aIncomeData = new Uint8Array(aC.eV), aC.data.aIncomeData[0] = 64
	}
}

function dN() {
	this.xo = 0, this.gap = 0, this.rO = 0, this.pe = 0, this.dU = function() {
		this.resize()
	}, this.resize = function() {
		this.xo = .0022 * b8.pX.pY(.5) * h.pZ, this.rO = this.xo / h.k, this.gap = Math.max(Math.floor((z.a0.qv() ? .0114 : .01296) * h.pZ), 2), this.pe = this.gap / h.k
	}
}

function dM() {
	this.a3o = function() {
		return z.a0.qv() ? 2 : 1
	}
}

function c7() {
	var q7, ef, eh, a3p, a3q, a3r, e7, player, a3s, gap, zoom, oT, a3t;

	function a43(player) {
		for (var aA = oT.length - 1; 0 <= aA; aA--)
			if (oT[aA] === player) return 1
	}

	function a41(a3y) {
		var aA, eY;
		if (-1 !== a3y)
			for (eY = q7.length, aA = 0; aA < eY; aA++)
				if (q7[aA].hF && q7[aA].ef + 1 === a3y % 4 && q7[aA].eh + 1 === a3y >> 2) return aA;
		return -1
	}

	function a3z(kr, ks) {
		var sB = gap / 2;
		return kr < ef - a3p - 3 * sB || ef + 3 * a3p + 5 * sB < kr || ks < eh - a3p - 3 * sB || eh + 2 * a3p + 3 * sB < ks ? -1 : 4 * (ks < eh - sB ? 0 : ks < eh + a3p + sB ? 1 : 2) + (kr < ef - sB ? 0 : kr < ef + a3p + sB ? 1 : kr < ef + 2 * a3p +
			3 * sB ? 2 : 3)
	}
	this.a3u = function() {
		var aA, es, a3x = [b9.n4, b9.nI, b9.mc, b9.nc, b9.nV];
		for (q7 = new Array(9), aA = 0; aA < 9; aA++) q7[aA] = {
			id: aA,
			hF: !1,
			kX: 0,
			canvas: [],
			ef: 0,
			eh: 0
		};
		for (q7[0].colors = [0, 1, 2, 3], q7[0].ef = 0, q7[0].eh = 0, q7[1].colors = [0, 1, 4], q7[1].ef = 1, q7[1].eh = 0, q7[2].colors = [0, 2], q7[2].ef = -1, q7[2].eh = 0, q7[3].colors = [0], q7[3].ef = 0, q7[3].eh = 0, q7[4].colors = [0, 2],
			q7[4].ef = 1, q7[4].eh = 1, q7[5].colors = [3], q7[5].ef = 0, q7[5].eh = -1, q7[6].id = 20, q7[6].colors = [0], q7[6].ef = 1, q7[6].eh = -1, q7[7].id = 21, q7[7].colors = [0], q7[7].ef = 0, q7[7].eh = 1, q7[8].id = 16, q7[8]
			.colors = [0], q7[8].ef = 0, q7[8].eh = 0, aA = 0; aA < 9; aA++)
			for (es = 0; es < q7[aA].colors.length; es++) q7[aA].canvas.push(function(id, a1h) {
				if (id < 20) return b8.canvas.xa(aa.get(3), id, a1h);
				var a1h = aa.get(3).height,
					a1i = b8.pX.vK(a1h, a1h),
					hV = b8.pX.getContext(a1i);
				20 === id ? hV.drawImage(aa.get(18), 0, 0) : 21 === id && ai.vV.xp(ai.qn.xe + ai.qn.xv, hV, 0, 0, a1h);
				return a1i
			}(q7[aA].id, a3x[q7[aA].colors[es]]))
	}, this.a3w = function() {
		return q7
	}, this.dU = function() {
		oT = [], ef = eh = e7 = 0, a3q = a3r = -1e3, this.resize()
	}, this.resize = function() {
		a3p = Math.floor((z.a0.qv() ? .075 : .0468) * h.pZ), zoom = a3p / aa.get(3).height, gap = Math.floor(a3p / 3)
	}, this.a0h = function(kr, ks) {
		return !!this.hF() && (bd.dc = !0, !!ai.vV.gl(kr, ks, player) || (kr = function(kr, ks) {
			a3r = a3q = -1e3;
			var a40 = a41(a3z(kr, ks));
			if (-1 === a40) return 0;
			if (1 !== q7[a40].colors[q7[a40].kX])
				if (5 === a40) {
					if (! function() {
							var di = performance.now();
							a3t + 4e3 < di && (oT = []);
							a3t = di
						}(), a43(player)) return 1;
					oT.push(player), 16 < oT.length && oT.shift()
				} else if (6 === a40) {
				for (var aA = oT.length - 1; 0 <= aA; aA--) 0 === af.lc[oT[aA]] && oT.splice(aA, 1);
				0 < oT.length && (b3.a44(1, oT, !0) && b6.ft.oS(oT, player), oT = [])
			} else if (2 === a40) b6.gu.nz(aQ.gz(), player);
			else if (3 === a40) aC.gt && b6.gu.gv(a3s);
			else if (0 === a40)
				if (0 === q7[0].kX) {
					if (aC.a3I && aV.a45() < 350) return 1;
					bT.a46(4), b6.gu.h5(aQ.gz(), player)
				} else az.h7(player, aQ.gz());
			else if (1 === a40) bT.a46(1), b6.gu.h3(aQ.gz(), a3s);
			else {
				if (7 === a40) return bT.a46(0), ai.vV.show(kr, ks), 2;
				if (4 === a40) b3.a44(0, [player], !0) && b6.ft.oP(player);
				else {
					if (8 !== a40) return 0;
					b6.gu.gy(aQ.gz(), a3s, player)
				}
			}
			return 1
		}(kr, ks), this.qo(), 2 === kr && (ai.vV.hF = !0), 0 < kr))
	}, this.a0j = function(kr, ks) {
		this.hF() || (a3q = kr, a3r = ks, e7 = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = bK.gp(mouseX),
			coordY = bK.gr(mouseY),
			coord = bK.ew(coordX, coordY),
			point = bK.eO(coord);
		if (coordX < 0 || coordY < 0) return;
		(function(kr, ks, eC) {
			ab.eT(eC) || -1 === (kr = bL.h1.a4K(kr, ks)) ? aM.a4J(eC) : aM.a4L(kr)
		}(mouseX, mouseY, point))
	}
	this.click = function(kr, ks, a0q) {
		var go = bK.gp(kr),
			gq = bK.gr(ks),
			eK = bK.ew(go, gq),
			eC = bK.eO(eK);
		if (!bK.gs(go, gq)) return !1;
		go = (z.a0.qv() ? .025 : .0144) * h.pZ, gq = performance.now();
		if (Math.abs(kr - a3q) > go || Math.abs(ks - a3r) > go || e7 + 500 < gq) return !1;
		if (e7 = gq, a0q && ! function(kr, ks, eC) {
				ab.eT(eC) || -1 === (kr = bL.h1.a4K(kr, ks)) ? aM.a4J(eC) : aM.a4L(kr)
			}(kr, ks, eC), aL.gi || this.hF() || !b8.ft.gk(aC.eI) || aC.gh) return this.qo(), !1;
		if (aC.gt) {
			if (!a0q) {
				if (!ab.eT(eC)) return !1;
				a3s = eK, q7[3].hF = !0
			}
		} else if (bL.h1.o4(eK)) a0q ? aM.a4C(55, 0) : bL.a4A.a4B = -1;
		else {
			if (a0q) return !1;
			bL.h1.a4D(kr, ks) || (2 === aC.yn ? ab.g7(eC) && (player = ab.eQ(eC), b8.ft.jB(player) || (q7[0].hF = !0, q7[0].kX = 1, q7[7].hF = !0)) : ab.ed(eC) ? (a3s = al.e9.eB(eC)) && (go = bK.eO(a3s), q7[8].hF = !0, player = ab.eP(go) ? aC
				.eV : ab.eQ(go)) : (a3s = eK, bL.h1.h2(aC.eI, eK) && (q7[0].hF = !0, q7[0].kX = 1, q7[1].hF = !0, q7[1].kX = bM.f9[2] ? 0 : 2), ab.h0(eC) || (ab.eP(eC) ? (player = aC.eV, h4(aC.eI) ? (q7[0].hF = !0, q7[0].kX = 0) : h6(aC
				.eI, player) && (q7[0].hF = !0, q7[0].kX = 3)) : (player = ab.eQ(eC)) === aC.eI ? (q7[0].hF = !0, q7[0].kX = 1, q7[7].hF = !0) : (q7[0].kX = 1, q7[5].hF = function(player) {
				return !b8.ft.jB(player) && !a43(player) && b3.a44(1, [player], !1)
			}(player), q7[7].hF = !b8.ft.jB(player), eR(player, aC.eI) ? (q7[4].hF = !b8.ft.jB(player) && !ae.a4F(player) && b3.a44(0, [player], !1), q7[6].hF = function(player) {
				if (0 === oT.length) return !1;
				if (performance.now() > a3t + 4e3) return !(oT = []);
				return !a43(player) && ! function(player) {
					var aA;
					if (aC.hN)
						for (aA = oT.length - 1; 0 <= aA; aA--)
							if (!eR(player, oT[aA])) return 1;
					return
				}(player)
			}(player), h8(aC.eI, player) ? (q7[0].kX = 0, q7[0].hF = !0) : h6(aC.eI, player) && (q7[0].kX = 3, q7[0].hF = !0), q7[0].hF = this.a4H()) : (q7[2].hF = !0, q7[0].hF = !0)))))
		}
		return this.a49(kr, ks)
	}, this.a49 = function(kr, ks) {
		return ef = kr - Math.floor(a3p / 2), eh = ks - Math.floor(a3p / 2), !!this.hF()
	}, this.a0N = function(kr, ks) {
		return !!this.hF() && (ai.vV.hF ? !ai.vV.xn(kr, ks) && (ai.vV.hF = !1, bd.dc = !0) : function(r9, kr, ks) {
			kr = a3z(kr, ks);
			if (0 <= a41(kr)) return !1;
			if ((1 === kr || 6 === kr) && 0 <= a41(2)) return !1;
			if ((6 === kr || 9 === kr) && 0 <= a41(10)) return !1;
			return r9.qo(), bd.dc = !0
		}(this, kr, ks))
	}, this.qo = function() {
		for (var aA = q7.length - 1; 0 <= aA; aA--) q7[aA].hF = !1, q7[aA].kX = 0;
		ai.vV.hF = !1
	}, this.hF = function() {
		return this.a4H() || ai.vV.hF
	}, this.a4H = function() {
		for (var eY = q7.length, aA = 0; aA < eY; aA++)
			if (q7[aA].hF) return !0;
		return !1
	}, this.te = function() {
		if (this.hF())
			if (ai.vV.hF) ai.vV.te();
			else {
				var aA, hV = tf,
					es = q7,
					eY = es.length,
					a4P = (a3p + gap) / zoom;
				for (hV.imageSmoothingEnabled = !0, hV.setTransform(zoom, 0, 0, zoom, ef, eh), aA = 0; aA < eY; aA++) es[aA].hF && tf.drawImage(es[aA].canvas[es[aA].kX], es[aA].ef * a4P, es[aA].eh * a4P);
				hV.imageSmoothingEnabled = !1, hV.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function c8() {
	var j, canvas, a4Q, a4R, a4S, a4T = -1;

	function a4U() {
		var a4V, x4 = canvas.getContext("2d", {
			alpha: !0
		});
		x4.clearRect(0, 0, j, j), x4.fillStyle = b9.ma, x4.fillRect(0, 0, j, j), 0 === a4R && (x4.fillStyle = b9.mf, x4.fillRect(0, 0, j, j)), x4.fillStyle = b9.me, x4.fillRect(0, 0, j, 1), x4.fillRect(0, 0, 1, j), x4.fillRect(0, j - 1, j, 1), x4
			.fillRect(j - 1, 0, 1, j), a4V = .9 * j / aa.get(0).width, x4.imageSmoothingEnabled = !0, x4.setTransform(a4V, 0, 0, a4V, Math.floor((j - a4V * aa.get(0).width) / 2), Math.floor((j - a4V * aa.get(0).height) / 2)), x4.drawImage(aa.get(0),
				0, 0), x4.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a4X(kr, ks) {
		if (!aL.gi) return kr <= j + ba.gap && ks >= aQ.eh ? 9 : -1;
		if (kr <= 4 * j + ba.gap) {
			if (ks >= aQ.eh) return 0;
			if (ks >= aQ.eh - j - a4S * ba.gap) return 2
		} else if (kr <= 7 * j + ba.gap && ks >= aQ.eh - j - a4S * ba.gap) return 1;
		return -1
	}
	this.gi = !1, this.dU = function() {
		a4R = -1, this.gi = !1, a4S = z.a0.qv() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		j = aQ.j, (canvas = document.createElement("canvas")).width = j, canvas.height = j, a4Q = b8.pX.rM(1, (z.a0.qv() ? .5 : .45) * j), a4U()
	}, this.a0y = function() {
		this.gi = !this.gi, this.gi ? (bA.a0x(!1), aC.gh && bA.a3g && bA.a0z(!0), this.a4W()) : (a4R = -1, a4U(), !aC.k6 || 1 !== aC.yn || aC.gt || aC.gh || z.a0.setState(1)), bd.dc = !0
	}, this.a4W = function() {
		(aC.k6 || aC.gh) && 1 === aC.yn && (aU.lO(!0), aC.gt || setTimeout(function() {
			bZ.yy()
		}, 0), z.a0.setState(0))
	}, this.gl = function(kr, ks) {
		return 0 <= (a4T = a4X(kr, ks)) || !aL.gi || aC.k6 || aC.gh || bc.hF || aL.a0y(), a4T
	}, this.a0N = function(kr, ks) {
		kr = a4X(kr, ks);
		kr !== a4R && (a4R = kr, this.gi || a4U(), bd.dc = !0)
	}, this.a0O = function(kr, ks) {
		kr = a4X(kr, ks);
		return -1 !== kr && a4T === kr && (this.gi ? aC.m7 ? (0 <= kr && bA.a0x(!1), !aC.gh) : (0 === kr ? aC.a0E() : 1 === kr ? this.a0y() : 2 === kr && s.t(1, 0), !0) : 9 === kr && (this.a0y(), !0))
	}, this.te = function() {
		var i;
		this.gi ? (i = Math.floor(5.5 * j), tf.setTransform(1, 0, 0, 1, ba.gap, aQ.eh), tf.fillStyle = b9.ma, tf.fillRect(0, 0, i, j), 0 === a4R ? (tf.fillStyle = b9.mf, tf.fillRect(0, 0, 4 * j, j)) : 1 === a4R && (tf.fillStyle = b9.mf, tf
				.fillRect(4 * j, 0, Math.floor(1.5 * j), j)), tf.fillStyle = b9.me, tf.fillRect(0, 0, i, 1), tf.fillRect(0, 0, 1, j), tf.fillRect(4 * j, 0, 1, j), tf.fillRect(0, j - 1, i, 1), tf.fillRect(i - 1, 0, 1, j), tf.font = a4Q, b8.pX
			.textBaseline(tf, 1), b8.pX.textAlign(tf, 1), tf.fillText(L(40), 2 * j, .54 * j), i = .4 * j, aL.a4b(ba.gap + 4 * j + (1.5 * j - i) / 2, aQ.eh + .3 * j, i), i = 1, tf.setTransform(1, 0, 0, 1, ba.gap, aQ.eh - i * a4S * ba.gap - i *
				j), tf.fillStyle = b9.ma, tf.fillRect(0, 0, 4 * j, j), a4R === i + 1 && (tf.fillStyle = b9.mf, tf.fillRect(0, 0, 4 * j, j)), tf.fillStyle = b9.me, tf.fillRect(0, 0, 4 * j, 1), tf.fillRect(0, 0, 1, j), tf.fillRect(4 * j, 0, 1,
				j), tf.fillRect(0, j - 1, 4 * j, 1), tf.fillText(L(0 === i ? 40 : 41), 2 * j, .54 * j), tf.setTransform(1, 0, 0, 1, 0, 0)) : tf.drawImage(canvas, ba.gap, aQ.eh)
	}, this.p8 = function(player) {
		return 0 !== af.lc[player] && 2 !== aC.yn && !b8.ft.jB(player)
	}, this.a4b = function(ef, eh, eY) {
		tf.setTransform(1, 0, 0, 1, ef, eh), tf.lineWidth = ba.xo, tf.strokeStyle = b9.me, tf.beginPath(), tf.moveTo(0, 0), tf.lineTo(eY, eY), tf.moveTo(0, eY), tf.lineTo(eY, 0), tf.stroke()
	}
}

function c9() {
	var a4d, j, a4e, a4f, a4g, a4h, a4i, a4j, a4k;

	function x0() {
		return aQ.a52(aM.a4y()) ? au.hF ? __fx.settings.keybindButtons ? aQ.eh - 2 * aQ.j - 3 * a4e : aQ.eh - aQ.j - 2 * a4e : __fx.settings.keybindButtons ? aQ.eh - aQ.j - 2 * a4e : aQ.eh - a4e : bA.a52(aM.a51()) ? au.hF ? bA.x0() - aQ.j - 2 * a4e :
			bA.x0() - a4e : au.hF ? h.j - aQ.j - (bi.a3o() + 1) * a4e : h.j - bi.a3o() * ba.gap
	}

	function a4p(di, pE, id, g5, a4s, a4t, vd, a4u, a4v, a4w) {
		var aA, x4, a1i, pP, g, a57 = void 0 !== a4v,
			i = Math.floor(aP.measureText(pE, aM.a4Q) + 1.5 * a4f + (a57 ? j : 1.5 * a4f));
		if (bd.dc = !0, i + 2 * a4e + aQ.j > h.i && !a57 && 50 !== id && 20 < pE.length) a4p(di, (g = b8.zS.a2z(pE))[0], id, g5, a4s, a4t, vd, a4u, a4v, a4w), a4p(di, g[1], id, g5, a4s, a4t, vd, a4u, a4v, a4w);
		else if (g = i + (50 === id ? a4g : 0), (a1i = document.createElement("canvas")).width = i, a1i.height = j, (x4 = a1i.getContext("2d", {
				alpha: !0
			})).font = aM.a4Q, b8.pX.textBaseline(x4, 1), b8.pX.textAlign(x4, 0), x4.clearRect(0, 0, i, j), x4.fillStyle = a4t, x4.fillRect(0, 0, i, j), x4.fillStyle = a4s, x4.fillText(pE, Math.floor(1.5 * a4f), Math.floor(j / 2)), a57 && (x4
				.imageSmoothingEnabled = !0, ai.vV.xp(a4v, x4, i - j, 0, j)), 0 === (pP = {
				e7: di,
				pE: pE,
				id: id,
				player: g5,
				canvas: a1i,
				a4s: a4s,
				a4t: a4t,
				i: i,
				a4z: g,
				vd: vd,
				a4u: a4u,
				a4v: a4v,
				a4w: a4w
			}).e7 || 0 < a4d.length && 0 < a4d[0].e7) a4d.unshift(pP);
		else {
			for (aA = 1; aA < a4d.length; aA++)
				if (0 < a4d[aA].e7) return void a4d.splice(aA, 0, pP);
			a4d.push(pP)
		}
	}

	function a4q(dw, sB, es) {
		return "rgb(" + dw + "," + sB + "," + es + ")"
	}

	function a58(id, g0) {
		for (var eY = a4d.length, aA = 0; aA < eY; aA++) a4d[aA].id === id && g0-- <= 0 && (a4d.splice(aA, 1), aA--, eY--)
	}

	function a59(id, player) {
		for (var em = !1, aA = a4d.length - 1; 0 <= aA; aA--) a4d[aA].id !== id || player !== aC.eV && a4d[aA].player !== player || (a4d.splice(aA, 1), em = !0);
		return em
	}

	function a5W(pE) {
		a4p(340, pE, 6, 0, a4q(215, 245, 255), b9.mb, -1, !1)
	}
	this.a4l = "", this.dU = function() {
		var self;
		a4j = 0, a4i = z.a0.qv() ? 7 : 12, a4h = {
			yb: [0, 0, 0],
			a4m: [0, 0, 0],
			lu: [220, 180, 180],
			td: [0, 0, 0],
			et: [0, 0, 0]
		}, a4d = [], this.resize(), aC.gt && this.yz(0, 18), bQ.vI.vJ[bQ.eE].name.length && a5W(L(88, [bQ.vI.vJ[bQ.eE].name])), a5W(L(89, [bQ.ej - 2 + "x" + (bQ.ek - 2)])), a5W(L(90, [an.a5X])), an.a5X !== an.a5Y && a5W(L(91, [an.a5Y + " (" +
			b8.zS.a2v(100 * an.a5Y / an.a5X, 1) + ")"
		])), 0 < an.a5Z && a5W(L(64, [an.a5Z + " (" + b8.zS.a2v(100 * an.a5Z / an.a5X, 1) + ")"])), 0 < an.a5a && a5W(L(92, [an.a5a + " (" + b8.zS.a2v(100 * an.a5a / an.a5X, 1) + ")"])), 10 === aC.k4 && a4p(120, L(93), 6, 0, a4q(235, 255,
			120), b9.mb, -1, !1), 0 !== (self = this).a4l.length && (a4p(200, self.a4l, 0, 0, b9.me, b9.mb, -1, !1), self.a4l = ""), aC.xH && a4p(340, L(42), 6, 0, a4q(255, 200, 0), b9.mb, -1, !1)
	}, this.resize = function() {
		var a4r, aA;
		if (j = (j = Math.floor((z.a0.qv() ? .031 : .0249) * h.pZ)) < 10 ? 10 : j, this.fontSize = Math.floor(2 * j / 3), this.a4Q = b8.pX.rM(1, this.fontSize), a4e = ba.gap, a4f = Math.floor(j / 5), 0 < a4d.length)
			for (a4r = a4d, a4d = [], aA = a4r.length - 1; 0 <= aA; aA--) a4p(a4r[aA].e7, a4r[aA].pE, a4r[aA].id, a4r[aA].player, a4r[aA].a4s, a4r[aA].a4t, a4r[aA].vd, a4r[aA].a4u, a4r[aA].a4v, a4r[aA].a4w);
		this.a4x()
	}, this.a4x = function() {
		a4k = document.createElement("canvas");
		var pE = L(43),
			x4 = (a4g = aP.measureText(pE, this.a4Q) + 5 * a4f, a4k.height = j, a4k.width = a4g, a4k.getContext("2d", {
				alpha: !0
			}));
		x4.font = this.a4Q, b8.pX.textBaseline(x4, 1), b8.pX.textAlign(x4, 1), x4.clearRect(0, 0, a4g, j), x4.fillStyle = b9.n1, x4.fillRect(0, 0, a4g, j), x4.fillStyle = b9.me, x4.fillText(pE, Math.floor(a4g / 2), Math.floor(j / 2))
	}, this.a4y = function() {
		var eY;
		return au.hF ? au.i : 0 === (eY = a4d.length) ? 0 : 1 === eY ? a4d[0].a4z : a50(a4d[0].a4z, a4d[1].a4z)
	}, this.a51 = function() {
		var eY = a4d.length;
		return au.hF ? eY ? a50(au.i, a4d[0].a4z) : au.i : 0 === eY ? 0 : 1 === eY ? a4d[0].a4z : 2 === eY ? a50(a4d[0].a4z, a4d[1].a4z) : a50(a50(a4d[0].a4z, a4d[1].a4z), a4d[2].a4z)
	}, this.gl = function(ef, eh) {
		for (var m4, a53, a54 = x0(), aA = a4d.length - 1; 0 <= aA; aA--)
			if ((a53 = a54 - (aA + 1) * j) <= eh && eh < a53 + j) return 50 === a4d[aA].id ? ef >= h.i - a4g - a4e - a4d[aA].i && (ef >= h.i - a4g - a4e ? b6.ft.oP(a4d[aA].player) : aG.ly(a4d[aA].player, 800, !1, 0), !0) : ef >= h.i - a4d[aA].i -
				a4e && (736 === a4d[aA].id ? (a53 = a4d[aA].pE.split(" "), window.open(a53[a53.length - 1], "_blank")) : a4d[aA].a4u && (a4d[aA].a4w && a4d[aA].a4w.er ? (a53 = a4d[aA].a4w.eK, m4 = bK.eg(a53) - 10, a53 = bK.ei(a53) - 10, aG
					.lx(m4, a53, 19 + m4, 19 + a53)) : a4d[aA].a4w && a4d[aA].a4w.es ? aG.lz(a4d[aA].player, a4d[aA].a4w.m0) : (aG.ly(a4d[aA].player, 800, !1, 0), 0 <= a4d[aA].vd && (m4 = a4d[aA].vd, a4d[aA].vd = a4d[aA].player, a4d[
					aA].player = m4))), !0);
		return !1
	}, this.zB = function(di, pE, id, g5, a4s, a4t, vd, a4u, a4v, a4w) {
		a4p(di, pE, id, g5, a4s, a4t, vd, a4u, a4v, a4w)
	}, this.a56 = function(p) {
		a4p(300, p, 252, 0, b9.me, b9.mb, -1, !1)
	}, this.a3B = function(id) {
		for (var aA = a4d.length - 1; 0 <= aA; aA--) a4d[aA].id === id && (a4d[aA].e7 = 1)
	}, this.yz = function(player, id) {
		0 === id ? (aP.iv(player, 0), a58(423, 0), a4p(160, L(44, [af.zO[player]]), 423, player, "rgb(10,220,10)", b9.mb, -1, !1)) : 1 === id ? (a59(50, aC.eV), aP.iv(player, 1), a4p(360, L(45, [af.zO[player]]), 0, player, b9.nK, b9.mb, -1, !0),
			aG.ly(player, 2700, !1, 0)) : 2 === id ? (aP.iv(player, 2), a4p(0, L(46), 0, player, "rgb(10,255,255)", b9.mb, -1, !0), aG.ly(player, 2700, !1, 0)) : 3 === id ? (aP.iv(player, 2), a4p(0, L(47, [af.zO[player]]), 0, player, b9.me,
			b9.mb, -1, !0), aG.ly(player, 2700, !1, 0)) : 4 === id ? this.a5A(1, player, player) : 5 === id ? 2 === af.a2F[player] || b8.ft.jB(aC.eI) || (function(id, lX) {
			var aA, a5L = 0,
				eY = a4d.length;
			for (aA = 0; aA < eY; aA++)
				if (a4d[aA].id === id && lX <= ++a5L) return a4d.splice(aA, 1)
		}(1, 5), ae.a5C(player) ? a4p(180, L(48, [af.zO[player]]), 1, player, a4q(255, 200, 180), b9.mb, -1, !0) : (a58(573, 0), a4p(180, L(49, [af.zO[player]]), 573, player, b9.nK, b9.mb, -1, !0))) : 18 === id ? a4p(255, L(50), 18, 0, b9.me,
			b9.mb, -1, !1) : 21 === id ? a4p(220, L(51), id, 0, b9.me, b9.mb, -1, !1) : 22 === id ? this.a5A(2, player, player) : 59 === id && a4p(0, L(52), id, 0, b9.nb, b9.mb, 0, !1)
	}, this.a08 = function(p) {
		a4p(200, L(53, [p]), 94, 0, b9.me, b9.nG, -1, !1)
	}, this.z6 = function(a5D) {
		if (aC.eI === a5D && !aC.k6)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			a4p(0, "Your Win Count is now " + __fx.wins.count, 3, a5D, b9.me, b9.mb, -1, !0);
		af.gL[a5D] && (aP.iv(a5D, 2), aC.jn < 100 ? a4p(0, L(47, [af.zO[a5D]]), 3, a5D, b9.me, b9.mb, -1, !0) : a4p(0, L(54, [af.zO[a5D]]), 3, a5D, b9.me, b9.mb, -1, !0))
	}, this.a4J = function(eC) {
		var a5F, pE, a5E = "(" + bK.eg(eC >> 2) + ", " + bK.ei(eC >> 2) + ")",
			a4u = !1,
			player = 0;
		ab.eT(eC) ? ab.eP(eC) ? a5E = L(55, [a5E]) : (player = ab.eQ(eC), pE = L(56, [b8.x4.a1u(af.zU[player], b8.pX.rM(0, 10), 150)]) + "   ", pE = (pE += L(57, [b8.zS.y5(af.gZ[player])]) + "   ") + L(58, [b8.zS.y5(af.gL[player])]) + "   ", aC
				.hN && (a5F = be.z9[be.k9[be.eW[player]]], pE += L(59) + ": " + a5F + "   "), b8.ft.jB(player) && (pE += L(60) + ": " + aD.jy[aD.hC[player]] + "   "), a5E = pE = (pE += L(61, [player]) + "   ") + L(62, [a5E]), a4u = !0) : a5E = ab
			.ed(eC) ? L(63, [a5E]) + "   #" + ab.eG(eC) : L(64, [a5E]), bd.dc = !0, a58(55, 0), a4p(220, a5E, 55, player, b9.me, b9.mb, -1, a4u)
	}, this.a4L = function(a5G) {
		var kV = bL.x,
			player = kV.a5H[a5G] >> 3,
			pE = (bd.dc = !0, a58(55, 0), L(65, [af.zO[player]]) + "   ");
		a4p(220, pE += L(57, [kV.a5I[a5G]]), 55, player, b9.me, b9.mb, -1, !0)
	}, this.o9 = function(nw, a5J, oA) {
		nw === aC.eI ? a4p(175, " " + L(66, [af.zO[a5J]]) + ": ", 1001, a5J, a4q(200, 255, 210), b9.mb, -1, !0, oA) : this.a5K(nw, oA)
	}, this.a5K = function(nw, oA) {
		a58(1e3, 0), a4p(175, af.zO[nw] + ": ", 1e3, nw, b9.me, "rgba(5,60,25,0.9)", -1, !0, oA)
	}, this.zC = function() {
		var p;
		aC.ys ? (p = L(67), aP.zA(L(68), 2, 1, 12), a4p(0, p, 40, 0, "rgb(10,220,10)", b9.mb, -1, !1)) : (p = L(69), aP.zA(L(70), 2, 0, 16), a4p(0, p, 41, 0, b9.me, b9.mb, -1, !1))
	}, this.xB = function() {
		var g0 = af.zO,
			eb = aC.data;
		a4p(300, g0[0] + " [" + aC.z5.xG(eb.elo[0]) + "] vs " + g0[1] + " [" + aC.z5.xG(eb.elo[1]) + "]", 65, 0, b9.mV, "rgba(100,255,255,0.75)", -1, !1)
	}, this.a5M = function(p) {
		a4p(350, p, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.a5N = function(a5O) {
		a4p(0, L(a5O ? 71 : 72), 247, 0, b9.na, b9.mb, -1, !1)
	}, this.xJ = function(xF, xI, a5P) {
		var eb = aC.data,
			g0 = af.zO;
		a4p(0, g0[0] + ": " + aC.z5.xG(eb.elo[0]) + " -> " + xF, 66, 0, b9.me, a5P[0], -1, !1), a4p(0, g0[1] + ": " + aC.z5.xG(eb.elo[1]) + " -> " + xI, 66, 1, b9.me, a5P[1], -1, !1)
	}, this.oQ = function(player, id) {
		0 === id ? a59(50, player) ? (a4p(128, L(73, [af.zO[player]]), 52, player, a4q(180, 255, 180), b9.mb, -1, !0), ae.p6(player, 2, 255)) : a4p(384, L(74, [af.zO[player]]), 51, player, a4q(210, 210, 255), b9.mb, -1, !0) : a59(51, player) ? (
			a4p(128, L(75, [af.zO[player]]), 52, player, b9.me, "rgba(60,120,10,0.9)", -1, !0), ae.p6(player, 2, 255)) : (a4p(384, L(76, [af.zO[player]]), 50, player, b9.me, "rgba(90,90,90,0.9)", -1, !0), ae.p6(player, 2, 96))
	}, this.oU = function(yb, target) {
		var color = a4q(210, 255, 210);
		1 < yb.length ? a4p(230, L(77, [yb.length, af.zO[target]]), 66, target, color, b9.mb, -1, !0) : a4p(230, L(78, [af.zO[yb[0]], af.zO[target]]), 66, yb[0], color, b9.mb, target, !0)
	}, this.a5Q = function(player, target) {
		a4p(230, L(79, [af.zO[player], af.zO[target]]), 66, player, b9.me, "rgba(75,65,5,0.9)", target, !0)
	}, this.a4C = function(id, g0) {
		a58(id, g0)
	}, this.yu = function(id, player) {
		a59(id, void 0 === player ? aC.eV : player)
	}, this.a5R = function(id) {
		for (var aA = a4d.length - 1; 0 <= aA; aA--)
			if (a4d[aA].id === id) return a4d[aA];
		return null
	}, this.oL = function(a5S, a5T, player) {
		2 !== af.a2F[aC.eI] && (a4p(200, 1 === a5S ? L(80, [af.zO[player]]) : L(81, [a5S, af.zO[player]]), 30, player, "rgb(190,255,190)", b9.mb, -1, !0), a5T) && a4p(30, 1 === a5T ? L(82) : L(83, [a5T]), 30, 0, b9.me, b9.mb, -1, !1)
	}, this.a5V = function(a5S, player) {
		2 !== af.a2F[aC.eI] && (a58(31, 0), 2 === af.a2F[player] || player >= aC.jn ? a4p(150, 1 === a5S ? L(84, [af.zO[player]]) : L(85, [af.zO[player], a5S]), 31, player, b9.mV, "rgba(205,205,205,0.9)", -1, !0) : a4p(150, 1 === a5S ? L(86, [af
			.zO[player]
		]) : L(87, [af.zO[player], a5S]), 31, player, b9.mV, "rgba(205,255,205,0.9)", -1, !0))
	}, this.yt = function(bp) {
		for (var et = bd.jk(), aA = 2; 0 <= aA; aA--) 0 < a4h.td[aA] && (bp || a4h.et[aA] < et - 220) && this.a5b(aA)
	}, this.a5b = function(id) {
		var pE, eY = a4h.td[id],
			player = a4h.yb[id];
		a4h.td[id] = 0, 1 === eY ? (0 === id ? pE = L(94, [af.zO[player], af.zO[a4h.a4m[0]]]) : 1 === id ? pE = L(95, [af.zO[player]]) : 2 === id ? pE = L(96, [af.zO[player]]) : 3 === id && (pE = L(97, [af.zO[player]])), a58(7, 0), a4p(a4h.lu[
			id], pE, 7, a4h.a4m[id], b9.me, b9.mb, -1, !0)) : (pE = L(0 === id ? 98 : 1 === id ? 99 : 100, [eY]), a58(7, 0), a4p(a4h.lu[id], pE, 7, player, b9.me, b9.mb, -1, !1))
	}, this.a5A = function(id, gx, vd) {
		var et = bd.jk(),
			eY = a4h.td[id] + 1;
		a4h.td[id]++, a4h.yb[id] = gx, a4h.a4m[id] = vd, 1 === eY && (a4h.et[id] = et), (1 === eY && (aC.yq < 32 || 2 === aC.yn) || 1 < eY && (a4h.et[id] < et - 140 || 2 === aC.yn)) && this.a5b(id)
	}, this.ih = function() {
		b0.ih();
		for (var hh = (hh = a4d.length - a4i) <= 1 ? 1 : hh * hh, aA = a4d.length - 1; 0 <= aA; aA--) 0 < a4d[aA].e7 && (a4d[aA].e7 -= hh, a4d[aA].e7 <= 0) && (bd.dc = !0, a4d.splice(aA, 1));
		! function() {
			var g0, aA;
			if (128 !== a4j && !(++a4j < 128))
				for (g0 = 5, aA = ak.jo - 1; 0 <= aA; aA--) 1 === af.a2F[ak.jp[aA]] && 0 < g0-- && a4p(240, L(97, [af.zO[ak.jp[aA]]]), 1, ak.jp[aA], b9.mV, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.yt(!1)
	}, this.te = function() {
		for (var w4, eh = x0(), aA = a4d.length - 1; 0 <= aA; aA--) w4 = eh - (aA + 1) * j, 50 === a4d[aA].id ? (tf.drawImage(a4d[aA].canvas, h.i - a4d[aA].i - a4g - a4e, w4), tf.drawImage(a4k, h.i - a4g - a4e, w4)) : tf.drawImage(a4d[aA].canvas,
			h.i - a4d[aA].i - a4e, w4)
	}
}

function cA() {
	var a5d, a5e, a5f, i, j, font, pE;

	function a5k(a5l) {
		return a5l < 10 ? "0" + a5l : String(a5l)
	}
	this.dU = function() {
		pE = L(101)
	}, this.resize = function() {
		i = Math.floor((z.a0.qv() ? .53 : .36) * h.pZ), j = Math.floor(.065 * i), font = b8.pX.rM(1, Math.floor(.9 * j)), a5f--, this.setTime()
	}, this.ih = function() {
		this.setTime() && (bd.dc = !0)
	}, this.setTime = function() {
		for (var di = new Date, a5g = di.getUTCMinutes(), a5h = di.getUTCSeconds(), a5i = [0, 10, 20, 25, 30, 35, 40, 45, 50], a5j = (a5e = 3600 - 60 * a5g - a5h, a5e %= 300, 300), aA = 0; aA < a5i.length; aA++)
			if ((60 * a5g + a5h + a5e) % 3600 == 60 * a5i[aA]) {
				a5j = 0;
				break
			} return a5e += a5j, a5d = pE + a5k(Math.floor(a5e / 60)) + ":" + a5k(a5e % 60), a5f !== (a5f = 60 * a5g + a5h) && (i = aP.measureText(a5d, font), i += Math.floor(.4 * j), !0)
	}, this.te = function() {
		tf.lineWidth = 1 + Math.floor(j / 15), tf.translate(h.i - j, Math.floor(.5 * (h.j + i))), tf.rotate(-Math.PI / 2), tf.fillStyle = b9.me, tf.fillRect(0, 0, i, j), tf.strokeStyle = b9.mV, tf.strokeRect(0, 0, i, j + 10), tf.fillStyle = b9
			.mV, tf.font = font, b8.pX.textBaseline(tf, 1), b8.pX.textAlign(tf, 1), tf.fillText(a5d, Math.floor(i / 2), Math.floor(.59 * j)), tf.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function cB() {
	var a4d, a5m, a4Q, j, a5n;

	function a5p(aA) {
		var a5r = !0,
			hd = b9.me,
			i = (a4d[aA].iy === aC.eV ? a4d[aA].x4.fillStyle = b9.mp : (ab.a5s(a4d[aA].iy), a4d[aA].x4.fillStyle = b8.color.mY(bM.f7[0], bM.f7[1], bM.f7[2], .87), 400 < b8.pg.a1M(bM.f7, 0, 2) && (a5r = !1, hd = b9.mV)), a4d[aA].canvas.width),
			rt = (a4d[aA].x4.clearRect(0, 0, i, j), a4d[aA].x4.fillRect(0, 0, i, j), a4d[aA].x4.fillStyle = hd, ! function(x4, i, j) {
				x4.fillRect(0, 0, i, 1), x4.fillRect(0, j - 1, i, 1), x4.fillRect(0, 0, 1, j), x4.fillRect(i - 1, 0, 1, j)
			}(a4d[aA].x4, i, j), a5m + 2 * j < i && (a4d[aA].x4.fillRect(i - a5m - j, 0, 1, j), a4d[aA].x4.fillText(af.zO[a4d[aA].iy], Math.floor((i - a5m) / 2), Math.floor(.57 * j))), 0 !== a4d[aA].id ? 0 : j);
		a4d[aA].x4.fillText(b8.zS.y5(a4d[aA].hC), Math.floor(i - a5m / 2 - rt), Math.floor(.57 * j)),
			function(aA, i, rt, a5r) {
				a4d[aA].x4.fillStyle = a5r ? b9.mg : b9.mc;
				a5r = Math.floor(a5m * a4d[aA].hC / a4d[aA].a5y);
				a4d[aA].x4.fillRect(Math.floor(i - a5m - rt), j - a5n, a5r, a5n)
			}(aA, i, rt, a5r), 0 === a4d[aA].id ? (a5v(aA, i, a5r, hd), function(aA, i, a5r) {
				a4d[aA].x4.strokeStyle = a5r ? b9.mw : b9.n6, a4d[aA].x4.fillRect(j, 0, 1, j);
				a5r = i - j;
				a4d[aA].x4.beginPath(), a4d[aA].x4.moveTo(Math.floor(.3 * j + a5r), Math.floor(j / 2)), a4d[aA].x4.lineTo(Math.floor(j - .3 * j + 0 + a5r), Math.floor(j / 2)), a4d[aA].x4.stroke(), a4d[aA].x4.beginPath(), a4d[aA].x4.moveTo(Math
					.floor(j / 2 + a5r), Math.floor(.3 * j)), a4d[aA].x4.lineTo(Math.floor(j / 2 + a5r), Math.floor(j - .3 * j + 0)), a4d[aA].x4.stroke()
			}(aA, i, a5r)) : a5v(aA, 2 * j, a5r, hd)
	}

	function a5v(aA, i, a5r, hd) {
		a4d[aA].x4.strokeStyle = a4d[aA].a5z ? b9.mn : a5r ? b9.nC : b9.nD, a4d[aA].x4.fillStyle = hd, a4d[aA].x4.fillRect(i - j, 0, 1, j), a4d[aA].x4.lineWidth = Math.max(Math.floor(j / 12), 3), a4d[aA].x4.lineCap = "round";
		a5r = .35;
		i = j + 1, a4d[aA].x4.beginPath(), a4d[aA].x4.moveTo(Math.floor(i - a5r * j + 0), Math.floor(a5r * j)), a4d[aA].x4.lineTo(Math.floor(i - j + a5r * j), Math.floor(j - a5r * j + 0)), a4d[aA].x4.stroke(), a4d[aA].x4.beginPath(), a4d[aA].x4
			.moveTo(Math.floor(i - j + a5r * j), Math.floor(a5r * j)), a4d[aA].x4.lineTo(Math.floor(i - a5r * j + 0), Math.floor(j - a5r * j + 0)), a4d[aA].x4.stroke()
	}

	function a69(eY) {
		for (var hC, aA = eY - 1; 0 <= aA; aA--) hC = ac.fk(aC.eI, aA), a4d[aA].hC !== hC && (a4d[aA].hC = hC, a4d[aA].a5y = hC > a4d[aA].a5y ? hC : a4d[aA].a5y, a4d[aA].a5q = !0)
	}

	function a5o(a6B) {
		a6B.canvas = document.createElement("canvas"), bQ.vO.font = a4Q;
		var i = a5m;
		a6B.iy < aC.eV && 0 === a6B.id && (i += Math.floor(bQ.vO.measureText(af.zO[a6B.iy] + "000").width)), i += j, 0 === a6B.id && (i += j), a6B.canvas.width = i, a6B.canvas.height = j, a6B.x4 = a6B.canvas.getContext("2d", {
			alpha: !0
		}), a6B.x4.font = a4Q, b8.pX.textBaseline(a6B.x4, 1), b8.pX.textAlign(a6B.x4, 1)
	}

	function a65(aA) {
		return aT.a6D() ? h.i - a4d[aA].canvas.width - ba.gap : aT.ef
	}

	function a66(aA) {
		return Math.floor(2 * ba.gap + (aT.a6D() ? aV.j + ba.gap : 0) + aT.j + aA * (1.3 * j))
	}
	this.dU = function() {
		a4d = [], this.resize()
	}, this.resize = function() {
		a4Q = aM.a4Q, j = aM.fontSize + 5, j = Math.floor(1.25 * j), z.a0.qv() && (j = Math.floor(1.25 * j)), a5n = Math.floor(.15 * j), bQ.vO.font = a4Q, a5m = Math.floor(bQ.vO.measureText("02 000 000 0000").width);
		for (var aA = a4d.length - 1; 0 <= aA; aA--) a5o(a4d[aA]), a5p(aA)
	}, this.lO = function() {
		for (var aA = a4d.length - 1; 0 <= aA; aA--) a4d[aA].a5q && (a4d[aA].a5q = !1, a5p(aA))
	}, this.gl = function(kr, ks) {
		if (2 !== aC.yn && 0 !== af.lc[aC.eI] && !aC.gh && !b8.ft.jB(aC.eI))
			for (var a60, a61, a62, a63 = z.a0.qv() ? j : 0, a64 = z.a0.qv() ? Math.floor(.15 * j) : 0, aA = a4d.length - 1; 0 <= aA; aA--)
				if (a60 = a65(aA), a61 = a66(aA), a62 = a4d[aA].canvas.width, a61 - a64 <= ks && ks <= a61 + j + a64) {
					if (a60 - a63 <= kr && kr <= a60 + j + a63) return a4d[aA].a5z || (a4d[aA].a5q = !0, a4d[aA].a5z = !0, 0 === a4d[aA].id && b6.gu.o7(a4d[aA].iy)), !0;
					if (0 === a4d[aA].id && a60 + a62 - j - a63 <= kr && kr <= a60 + a62 + a63) return bT.a46(3), b6.gu.h5(aQ.gz(), a4d[aA].iy), !0
				} return !1
	}, this.ih = function() {
		var eY;
		0 === af.lc[aC.eI] || b8.ft.jB(aC.eI) && !aC.gh || (function(eY) {
			if (a4d.length !== eY) return 1;
			for (var aA = eY - 1; 0 <= aA; aA--)
				if (a4d[aA].id !== ac.fe(aC.eI, aA) || a4d[aA].iy !== ac.fj(aC.eI, aA)) return 1;
			return
		}(eY = ac.fd(aC.eI)) && function(eY) {
			var aA, id, iy, es, hC, a4r = [];
			loop: for (aA = 0; aA < eY; aA++) {
				for (id = ac.fe(aC.eI, aA), iy = ac.fj(aC.eI, aA), es = 0; es < a4d.length; es++)
					if (a4d[es].id === id && a4d[es].iy === iy) {
						a4r.push(a4d.splice(es, 1)[0]);
						continue loop
					} hC = ac.fk(aC.eI, aA), a5o(hC = {
					iy: iy,
					hC: hC,
					a5y: hC,
					id: id,
					a5q: !0,
					a5z: !1,
					canvas: null,
					x4: null
				}), a4r.push(hC)
			}
			a4d = a4r
		}(eY), a69(eY))
	}, this.a6C = function(g5) {
		for (var eY = Math.min(a4d.length, ac.fd(aC.eI)), aA = 0; aA < eY; aA++)
			if (a4d[aA].iy === g5) return void(a4d = [])
	}, this.te = function() {
		if (0 !== af.lc[aC.eI] && (!b8.ft.jB(aC.eI) || aC.gh))
			for (var aA = a4d.length - 1; 0 <= aA; aA--) tf.drawImage(a4d[aA].canvas, a65(aA), a66(aA))
	}
}

function cC() {
	var a4d, js, a6E, a6F, j, a4Q, fontSize, a6G, a6H, a6I, a6J, canvas, x4, lp, a6K;

	function tw(aA) {
		return L(0 === aA ? 102 : 1 === aA ? 103 : 2 === aA ? 104 : 105)
	}

	function a6R() {
		tf.drawImage(canvas, ba.gap + (aC.hN ? ba.gap + bf.a6S() : 0), a6T + 2 * ba.gap)
	}

	function a6L() {
		canvas.width = a4d[0].width + a6I, canvas.height = j + a6I, (x4 = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, a4d[0].width + a6I, j + a6I), x4.translate(Math.floor(a6I / 2), Math.floor(a6I / 2)), x4.lineWidth = a6I, x4.fillStyle = 1 === a4d[0].a6Q ? b9.mj : b9.mb, a6U(), x4.fill(), x4.strokeStyle = 1 === a4d[0].a6Q ? b9.mV :
			b9.me, a6U(), x4.stroke(), b8.pX.textAlign(x4, 1), b8.pX.textBaseline(x4, 1), x4.fillStyle = 1 === a4d[0].a6Q ? b9.mV : b9.me, x4.font = a4Q[0], x4.fillText(tw(a4d[0].a6P), Math.floor(a4d[0].width / 2), Math.floor(.72 * a6G[0] * j)), x4
			.font = a4Q[1], x4.fillText(a4d[0].pE, Math.floor(a4d[0].width / 2), Math.floor((a6G[0] + .48 * a6G[1]) * j))
	}

	function a6U() {
		x4.beginPath(), x4.moveTo(a6J, 0), x4.lineTo(a4d[0].width - a6J, 0), x4.lineTo(a4d[0].width, a6J), x4.lineTo(a4d[0].width, j - a6J), x4.lineTo(a4d[0].width - a6J, j), x4.lineTo(a6J, j), x4.lineTo(0, j - a6J), x4.lineTo(0, a6J), x4.closePath()
	}
	this.dU = function() {
		js = 4, a6E = a6F = lp = 0, a4d = [], a4Q = new Array(2), fontSize = new Array(2), (a6G = new Array(2))[0] = .3, a6G[1] = .7, a6H = new Array(4), canvas = document.createElement("canvas"), a6K = bd.e7 + 2e3, this.resize()
	}, this.resize = function() {
		var aA, i;
		for (j = Math.floor((z.a0.qv() ? .0725 : .058) * h.pZ), fontSize[0] = Math.floor(.85 * a6G[0] * j), fontSize[1] = Math.floor(.85 * a6G[1] * j), a4Q[0] = b8.pX.rM(1, fontSize[0]), a4Q[1] = b8.pX.rM(1, fontSize[1]), aA = a6H.length -
			1; 0 <= aA; aA--) a6H[aA] = this.measureText(tw(aA) + "000", a4Q[0]);
		if (a6I = Math.floor(1 + .05 * j), a6J = Math.floor(.2 * j), 0 < a4d.length) {
			for (aA = a4d.length - 1; 0 <= aA; aA--) i = this.measureText(a4d[aA].pE + "00", a4Q[1]), a4d[aA].width = i < a6H[aA] ? a6H[aA] : i;
			a6L()
		}
	}, this.ih = function() {
		0 !== js && (4 === js ? bd.e7 > a6K && (js = 0, 1 === aC.yn) && aP.zA(bQ.vI.vJ[bQ.eE].name, 3, 1, 9) : (1 === js ? (0 === a6E && (a6L(), a6E = 1e-4), 1 <= (a6E += .002 * (bd.e7 - lp)) && (a6F = 0, js = 2, a6E = 1), bd.dc = !0) : 2 ===
			js ? ((a6F += (bd.e7 - lp) / 1e3) > a4d[0].lu || 1 < a6F && 1 < a4d.length) && (js = 3) : 3 === js && ((a6E -= .002 * (bd.e7 - lp)) <= 0 && (a6E = 0, a4d.shift(), js = 0 < a4d.length ? 1 : 0), bd.dc = !0), lp = bd.e7))
	}, this.measureText = function(pE, a4Q) {
		return tf.font = a4Q, Math.floor(tf.measureText(pE).width)
	}, this.iv = function(a6O, aA) {
		this.zA(af.zO[a6O], aA, 1, 0 === aA ? 3 : 7)
	}, this.zA = function(pE, a6P, a6Q, lu) {
		var i;
		pE.length && (i = (i = this.measureText(pE + "00", a4Q[1])) < a6H[a6P] ? a6H[a6P] : i, a4d.push({
			pE: pE,
			width: i,
			a6P: a6P,
			a6Q: a6Q,
			lu: lu
		}), 0 === js) && (a6E = 0, js = 1, lp = bd.e7)
	}, this.te = function() {
		0 !== js && 0 !== a6E && (a6E < 1 ? (tf.globalAlpha = a6E, a6R(), tf.globalAlpha = 1) : a6R())
	}
}

function ck() {
	var j, canvas, x4, a6V, a6W, a6X, a6Y, a5q, a6Z, a6a, a6b, a6c, a5O = !1,
		a1i = (this.hF = !1, this.i = 0, new Array(2)),
		a6d = 0;

	function lP() {
		var i = au.i,
			kV = (a5q = !1, x3(x4, i, j), Math.floor(i / 2));
		1 === a6V ? (x4.fillStyle = b9.my, x4.fillRect(kV, 0, kV, j)) : -1 === a6V && (x4.fillStyle = b9.nE, x4.fillRect(0, 0, kV, j)), x5(x4, i, j, 2);
		var kV = (kV = Math.floor(.25 * j)) < 2 ? 2 : kV,
			a5X = (x4.fillStyle = b9.mk, Math.floor((j - 4) * a6W[1] / a6X[1]));
		0 < a5X && x4.fillRect(2, j - 2 - a5X, kV, a5X), 0 < (a5X = Math.floor((j - 4) * a6W[0] / a6X[0])) && x4.fillRect(i - 2 - kV, j - 2 - a5X, kV, a5X);
		kV = (kV = Math.floor(j / 8)) < 2 ? 2 : kV, x7(x4, Math.floor(.4 * j), 0, j, kV, .5, !1), x7(x4, Math.floor(i - 1.4 * j), 0, j, kV, .5, !0), a5X = 1.1 * j / a1i[0].width;
		x4.imageSmoothingEnabled = !0, x4.setTransform(a5X, 0, 0, a5X, (i - a5X * a1i[0].width) / 2, -.05 * j), x4.drawImage(a1i[+a5O], 0, 0), x4.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a6i() {
		a6c = -1, a5O = ag.a6j(), aM.a3B(257), aM.a5N(a5O), au.hF = !0, a5q = !0, a6Z = 360;
		for (var f0, di = 0, aA = ak.jo - 1; 0 <= aA; aA--) b8.ft.jB(ak.jp[aA]) || (di += af.gL[ak.jp[aA]]);
		a5O ? a6X[0] = Math.max(bJ.dj(3 * di, 4), 1) : aC.hN ? 9 === aC.k4 && 8 === be.k9[bf.l0()] ? a6X[0] = Math.max(di, 1) : (f0 = bJ.dj(100 * bf.a2f(), aC.jX), f0 = bJ.p5(200 - 2 * f0, 40, 100), f0 = bJ.dj(f0 * di, 100), a6X[0] = Math.max(f0,
			1)) : a6X[0] = Math.max(bJ.dj(3 * di, 5), 1), a6X[1] = Math.max(di - a6X[0], 1)
	}

	function a6e() {
		a6b = bd.jk(), a5q = !0, a6Z = a6V = 0, a6Y = [], au.hF = !1, aM.yu(247), a6W[0] = a6W[1] = 0, aM.a3B(673)
	}

	function x0() {
		return aQ.a52(aM.a4y()) ? __fx.settings.keybindButtons ? aQ.eh - 2 * (j + ba.gap) : aQ.eh - j - ba.gap : bA.a52(aM.a51()) ? bA.x0() - j - ba.gap : h.j - j - bi.a3o() * ba.gap
	}
	this.dV = function() {
		for (var aA = 0; aA < 2; aA++) a1i[aA] = b8.canvas.xa(aa.get(3), 8 - aA, b9.nm), a1i[aA] = b8.canvas.a1k(a1i[aA])
	}, this.dU = function() {
		a6b = -1e4, a6a = a6d = 0, a6c = -1, this.hF = !1, a5q = a5O = !1, a6W = [a6V = a6Z = 0, 0], a6X = [1, 1], a6Y = [], this.resize()
	}, this.resize = function() {
		j = aQ.j, this.i = 4 * j, (canvas = document.createElement("canvas")).width = this.i, canvas.height = j, x4 = canvas.getContext("2d", {
			alpha: !0
		}), lP()
	}, this.lO = function() {
		a5q && lP()
	}, this.gl = function(ef, eh) {
		return !!this.hF && !(ef < h.i - this.i - ba.gap || eh < x0() || (aC.gh || this.hG(aC.eI) && (aL.gi && aL.a0y(), b6.gu.hH(ef > h.i - ba.gap - this.i / 2 ? 1 : 0)), 0))
	}, this.ih = function() {
		0 < a6a ? 0 === --a6a && a6e() : this.hF ? 180 == --a6Z && 3 * a6W[0] < a6X[0] ? a6e() : a6W[0] >= a6X[0] ? a5O ? bP.yQ.yi() : bP.yQ.ym() : a6W[1] >= a6X[1] ? a6a = 4 : a6Z <= 0 && a6e() : ! function() {
			var a6l = bd.jk();
			if (a6l % 40 == 14) {
				if (a6d) return !(a6l < a6d) && !(a6l < a6b + 535) && (a6d = a6l + 1071, b8.ft.a2I()) ? (a6i(), 1) : 0;
				(1 === ak.jo || (aC.hN ? bf.a2f() : af.gL[l3[0]]) >= bJ.dj(96 * aC.jX, 100)) && (a6d = a6l + 535)
			}
			return
		}() && 0 <= a6c && (aM.zB(250, L(106, [af.zO[a6c]]), 673, a6c, b9.me, b9.mb, -1, !0), a6i())
	}, this.yo = function() {
		this.hF && a6W[0] < a6X[0] && a6e()
	}, this.p7 = function(player, a6m) {
		var a6n = L(a6m ? 107 : 108, [af.zO[player]]),
			a6n = (aM.zB(450, a6n, 257, player, a6m ? b9.mw : b9.nB, b9.mb, -1, !0), a6Y.push(player), a5q = !0, aC.k6 ? Math.max(a6X[0], a6X[1]) : af.gL[player]),
			a6n = Math.max(a6n, 1);
		a6m ? a6W[0] += a6n : a6W[1] += a6n, player === aC.eI && (a6V = a6m ? 1 : -1)
	}, this.te = function() {
		var eh;
		this.hF && (eh = x0(), tf.drawImage(canvas, h.i - this.i - ba.gap, eh))
	}, this.hI = function(player) {
		return !(!aC.k6 && bd.jk() < a6b + 140 || 0 !== a6Z || !b8.ft.gj(1) || !b8.ft.gk(player) || 10 <= jY[player] && !b8.ft.a2b(player, 9))
	}, this.hG = function(g5) {
		if (!b8.ft.gj(1)) return !1;
		if (!b8.ft.gk(g5)) return !1;
		if (!this.hF) return !1;
		for (var aA = a6Y.length - 1; 0 <= aA; aA--)
			if (a6Y[aA] === g5) return !1;
		return !0
	}, this.hE = function(player) {
		a6c = player
	}
}

function cD() {
	var i, ef, a6o, canvas, x4, hF, i7, a32, a4Q, a5q, a6p = 11 / 12;

	function a6r() {
		var a5x = Math.floor(i7 * (i - 2 * a6o)),
			a6u = 1 + Math.floor(.0625 * aQ.j),
			a6v = 1 + Math.floor(.3 * aQ.j),
			a6w = Math.floor(.55 * aQ.j);
		x4.clearRect(0, 0, i, aQ.j), x4.fillStyle = b9.ma, x4.fillRect(0, 0, a6o, aQ.j), x4.fillRect(a6o + a5x, 0, i - a6o - a5x, aQ.j), x4.fillStyle = i7 < 1 / 3 ? "rgba(" + Math.floor(3 * i7 * 130) + ",130,0,0.85)" : i7 < 2 / 3 ? "rgba(130," + (
				130 - Math.floor(3 * (i7 - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (i7 - 2 / 3) * 130) + ",0.85)", x4.fillRect(a6o, 0, a5x, aQ.j), x4.fillStyle = b9.me, x4.fillRect(0, 0, i, 1), x4.fillRect(0, aQ.j - 1, i, 1), x4
			.fillRect(0, 0, 1, aQ.j), x4.fillRect(a6o, 0, 1, aQ.j), x4.fillRect(a6o + a5x, 0, 1, aQ.j), x4.fillRect(i - a6o, 0, 1, aQ.j), x4.fillRect(i - 1, 0, 1, aQ.j), x4.fillRect(Math.floor(.25 * aQ.j) + a6v, Math.floor((aQ.j - a6u) / 2), aQ.j -
				2 * a6v, a6u), x4.fillRect(Math.floor(i - 1.25 * aQ.j) + a6v, Math.floor((aQ.j - a6u) / 2), aQ.j - 2 * a6v - a6v % 2, a6u), x4.fillRect(Math.floor(i - 1.25 * aQ.j) + Math.floor((aQ.j - a6u) / 2), a6v, a6u, aQ.j - 2 * a6v - a6v % 2),
			a32 = b8.ft.i6(aC.eI, aQ.gz()), x4.fillText(b8.zS.y5(a32) + " (" + b8.zS.a2v(100 * i7, +(i7 < .1)) + ")", Math.floor(.5 * i), a6w)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		i7 = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => aQ.a0u(arg1);

	function a71(a1H) {
		return !(1 < a1H && 1 === i7 || (1 < a1H && a1H * i7 - i7 < 1 / 1024 ? a1H = (i7 + 1 / 1024) / i7 : a1H < 1 && i7 - a1H * i7 < 1 / 1024 && (a1H = (i7 - 1 / 1024) / i7), i7 = bJ.p5(i7 * a1H, 1 / 1024, 1), a6r(), 0))
	}

	function a72(kr) {
		return i7 !== (i7 = bJ.p5((kr - ef - a6o) / (i - 2 * a6o), 1 / 1024, 1)) && (a6r(), !0)
	}
	__fx.keybindFunctions.repaintAttackPercentageBar = function() {
		a6r(), bd.dc = !0
	}, this.eh = 0, this.gm = !1, this.dU = function() {
		hF = !aC.gt && !aC.gh, a5q = !1, i7 = .5, a32 = 0, this.gm = !1, this.resize()
	}, this.resize = function() {
		z.a0.qv() && h.i < .8 * h.j ? (this.j = Math.floor(.066 * h.pZ), i = h.i - 4 * ba.gap - this.j) : (i = Math.floor((z.a0.qv() ? .65 : .389) * h.pZ), i += 12 - i % 12, this.j = Math.floor(i / 12)), a6o = Math.floor(3 * this.j / 2), a4Q = b8
			.pX.rM(1, Math.floor(.5 * this.j)), (canvas = document.createElement("canvas")).width = i, __fx.mobileKeybinds.setSize(i, this.j, tf), canvas.height = this.j, (x4 = canvas.getContext("2d", {
				alpha: !0
			})).font = a4Q, b8.pX.textBaseline(x4, 1), b8.pX.textAlign(x4, 1), this.a6q(), a6r()
	}, this.a6q = function() {
		ef = z.a0.qv() && h.i < .8 * h.j ? this.j + 3 * ba.gap : Math.floor((h.i - i) / 2), this.eh = h.j - this.j - bi.a3o() * ba.gap
	}, this.lO = function() {
		a5q && (a5q = !1, a6r())
	}, this.hF = function() {
		return !(!hF || aL.gi && ef < Math.floor(ba.gap + 5.5 * this.j))
	}, this.a52 = function(a6x) {
		return !!this.hF() && ef + i > h.i - a6x - ba.gap
	}, this.a39 = function() {
		hF = !aC.gh
	}, this.a6e = function() {
		hF = !1
	}, this.gz = function() {
		return bJ.p5(Math.floor(1024 * i7 + .5) - 1, 0, 1023)
	}, this.a0r = function(kr, ks) {
		return this.hF() && ef < kr && kr < ef + i && ks > this.eh
	}, this.gl = function(kr, ks) {
		if (!this.hF()) return !1;
		if (!(__fx.settings.keybindButtons && ks > this.eh - Math.floor(ba.gap / 4) - this.j && ks < this.eh - Math.floor(ba.gap / 4) && __fx.mobileKeybinds.click(kr - ef))) {
			if (!aQ.a0r(kr, ks)) return !1;
			aR.m9 = !1, ! function(r9, kr, ks) {
				if (function(kr, ks) {
						return ef < kr && kr < ef + a6o && ks > aQ.eh
					}(kr, ks)) return a71(a6p);
				if (function(kr, ks) {
						return ef + i - a6o < kr && kr < ef + i && ks > aQ.eh
					}(kr, ks)) return a71(1 / a6p);
				return r9.gm = !0, a72(kr)
			}(this, kr, ks) || (bd.dc = !0)
		}
		return !0
	}, this.a0u = function(mG) {
		0 !== aC.yn && this.hF() && a71(mG) && (bd.dc = !0)
	}, this.a0Q = function(deltaY) {
		var mG;
		return !(0 === deltaY || !this.hF()) && a71(mG = 0 < deltaY ? (mG = 400 / (400 + deltaY)) < a6p ? a6p : mG : 1 / a6p < (mG = (400 - deltaY) / 400) ? 1 / a6p : mG)
	}, this.a0N = function(kr) {
		return !!this.gm && a72(kr)
	}, this.a0n = function() {
		this.gm = !1
	}, this.ih = function() {
		this.hF() && a32 !== b8.ft.i6(aC.eI, this.gz()) && (a5q = !0)
	}, this.te = function() {
		this.hF() && (tf.drawImage(canvas, ef, this.eh), __fx.settings.keybindButtons) && __fx.mobileKeybinds.draw(tf, ef, this.eh)
	}
}

function cu() {
	var canvas, x4, a73, font, a74 = 0,
		a75 = !1,
		a76 = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		a77 = 5;

	function a7D() {
		if (a75) {
			var aA, eY = a76.length,
				a6w = Math.floor(.5 * a73.j),
				j = eY * a6w,
				ef = Math.floor(Math.floor(a73.ef) + .3 * a73.i - .5),
				eh = Math.floor(Math.floor(a73.eh) - j),
				i = Math.floor(.4 * a73.i + 2.5);
			for (tf.fillStyle = b9.ma, tf.fillRect(ef, eh, i, j), tf.fillStyle = b9.n3, tf.fillRect(ef, eh + a77 * a6w, i, a6w), tf.fillStyle = b9.me, tf.fillRect(ef, eh, 2, j), tf.fillRect(ef, eh, i, 2), tf.fillRect(ef + i - 2, eh, 2, j), aA =
				1; aA < eY; aA++) tf.fillRect(ef, eh + aA * a6w, i, 2);
			for (tf.fillStyle = b9.me, b8.pX.textAlign(tf, 1), b8.pX.textBaseline(tf, 1), tf.font = b8.pX.rM(0, .6 * a6w), ef += .5 * i, aA = 0; aA < eY; aA++) tf.fillText(a7L(aA), ef, eh + (aA + .6) * a6w)
		}
		tf.drawImage(canvas, Math.floor(a73.ef), Math.floor(a73.eh))
	}

	function lP(r9) {
		var ef, m4, m5, a6w;
		x4.clearRect(0, 0, Math.floor(a73.i), Math.floor(a73.j)), x4.fillStyle = b9.ma, x4.fillRect(0, 0, Math.floor(a73.i), Math.floor(a73.j)), aC.m7 && (x4.fillStyle = b9.n3, x4.fillRect(0, 0, Math.floor(.3 * a73.i), Math.floor(a73.j))), x4
			.fillStyle = b9.me, x4.fillText("Hide UI", .15 * a73.i, .5 * a73.j), x4.fillRect(Math.floor(.3 * a73.i - .5), 0, 2, Math.floor(a73.j)), ef = .5 * a73.i, x4.fillText("Replay Speed", ef, .31 * a73.j), x4.fillText(a7L(a77), ef, .69 * a73.j),
			x4.fillRect(Math.floor(.7 * a73.i - .5), 0, 2, Math.floor(a73.j)), r9.a3g ? (ef = Math.floor(.02 * a73.i), r9 = Math.floor(.025 * a73.i), m4 = Math.floor(.85 * a73.i - ef - .5 * r9), m5 = Math.floor(.25 * a73.j), a6w = Math.floor(a73.j) -
				2 * m5, x4.fillRect(m4, m5, ef, a6w), x4.fillRect(m4 + ef + r9, m5, ef, a6w)) : function() {
				var i = Math.floor(.46 * a73.j),
					j = Math.floor(.23 * a73.j),
					ef = Math.floor(.85 * a73.i - .5 * i + i / 12),
					eh = Math.floor(.5 * a73.j - j);
				x4.beginPath(), x4.moveTo(ef, eh), x4.lineTo(ef + i, eh + j), x4.lineTo(ef, eh + (j << 1)), x4.fill()
			}(), x4.fillRect(0, 0, Math.floor(a73.i), 2), x4.fillRect(0, 0, 2, Math.floor(a73.j)), x4.fillRect(0, Math.floor(a73.j) - 2, Math.floor(a73.i), 2), x4.fillRect(Math.floor(a73.i - 2), 0, 2, Math.floor(a73.j))
	}

	function a7L(aA) {
		return 5 === aA ? "Normal" : "" + a76[aA]
	}
	this.a3g = !1, this.dU = function() {
		aC.gh && (a77 = 5, this.a3g = !1, a75 = !1, a73 = new q9([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.a78 = function() {
		return a76[a77]
	}, this.x0 = function() {
		return a73.eh
	}, this.a52 = function(a6x) {
		return !!aC.gh && a73.ef + a73.i > h.i - a6x - ba.gap
	}, this.resize = function() {
		aC.gh && (a73.resize(), a73.eh -= (bi.a3o() - 1) * ba.gap, font = b8.pX.rM(0, .3 * a73.j), (canvas = document.createElement("canvas")).width = Math.floor(a73.i), canvas.height = Math.floor(a73.j), (x4 = canvas.getContext("2d", {
			alpha: !0
		})).font = font, b8.pX.textAlign(x4, 1), b8.pX.textBaseline(x4, 1), lP(this))
	}, this.a0x = function(a79) {
		0 === aC.yn || s.hF() || a79 !== aC.m7 && (aC.m7 = a79, bf.resize(), bd.dc = !0, aC.gh) && (a74 = bd.e7 + 2e3, lP(this))
	}, this.gl = function(ef, eh) {
		if (!aC.gh) return !1;
		if (ef < a73.ef || eh < a73.eh || ef > a73.ef + a73.i) return a75 && function(r9, ef, eh) {
			var eY = a76.length,
				a6w = Math.floor(.5 * a73.j),
				j = eY * a6w,
				m4 = Math.floor(Math.floor(a73.ef) + .3 * a73.i - .5),
				j = Math.floor(Math.floor(a73.eh) - j),
				i = Math.floor(.4 * a73.i + 2.5);
			return a75 = !1, bd.dc = !0, ef < m4 || m4 + i < ef || eh < j || (a77 = a7C(0, Math.floor((eh - j) / a6w), eY - 1), lP(r9)), !0
		}(this, ef, eh);
		if ((ef -= a73.ef) < .3 * a73.i) a75 = !1, this.a0x(!aC.m7);
		else {
			if (ef < .7 * a73.i) return a75 = !a75, bd.dc = !0;
			this.a0z(!1)
		}
		return !0
	}, this.a0z = function(a7B) {
		2 === aC.yn ? (this.a0x(!1), s.t(3)) : (a75 = !1, this.a3g = !this.a3g, this.a3g ? (aL.gi && aL.a0y(), z.a0.setState(1)) : a7B || aL.a4W(), bd.dc = !0, lP(this))
	}, this.a10 = function() {
		this.a3g = !1, aL.a4W(), bd.dc = !0, lP(this)
	}, this.a0g = function(ef, eh) {
		return !!aC.m7 && (0 <= aL.gl(ef, eh) || (aC.gh ? ((bd.e7 > a74 || !this.gl(ef, eh)) && aR.gl(ef, eh), bd.dc = !0, a74 = bd.e7 + 2e3) : aR.gl(ef, eh)), !0)
	}, this.ih = function() {
		aC.gh && aC.m7 && bd.e7 > a74 - 1e3 && bd.e7 < a74 && (bd.dc = !0)
	}, this.yv = function() {
		aC.gh && (this.a3g = !1, bd.dc = !0, lP(this))
	}, this.te = function() {
		if (aC.gh) {
			if (aC.m7) {
				if (bd.e7 > a74) return;
				if (bd.e7 > a74 - 1e3) return tf.globalAlpha = a7C(0, (1e3 - (bd.e7 - (a74 - 1e3))) / 1e3, 1), a7D(), void(tf.globalAlpha = 1)
			}
			a7D()
		}
	}
}

function cE() {
	var a7M, a7N, i, ef, eh, a7O, a7P;
	this.dU = function() {
		a7M = new Array(2), a7N = new Array(2), this.m9 = !1, a7P = a7O = iA = i8 = 0, i9 = 1, this.resize()
	}, this.resize = function() {
		i = (i = Math.floor((z.a0.qv() ? .072 : .0502) * h.pZ)) < 8 ? 8 : i;
		for (var aA = 1; 0 <= aA; aA--) a7M[aA] = document.createElement("canvas"), a7M[aA].width = i, a7M[aA].height = i, a7N[aA] = a7M[aA].getContext("2d", {
			alpha: !0
		});
		this.a6q(),
			function() {
				for (var a7e = Math.floor(1 + i / 20), aA = 1; 0 <= aA; aA--) a7N[aA].clearRect(0, 0, i, i), a7N[aA].fillStyle = b9.mX, a7N[aA].beginPath(), a7N[aA].arc(i / 2, i / 2, i / 2 - a7e, 0, 2 * Math.PI), a7N[aA].fill(), a7N[aA]
					.lineWidth = a7e, a7N[aA].fillStyle = b9.me, a7N[aA].strokeStyle = b9.me, a7N[aA].beginPath(), a7N[aA].arc(i / 2, i / 2, i / 2 - a7e, 0, 2 * Math.PI), a7N[aA].stroke(), x7(a7N[aA], 0, 0, i, a7e, .3, 0 === aA)
			}()
	}, this.wz = function() {
		return -i8 / i9
	}, this.x0 = function() {
		return -iA / i9
	}, this.mJ = function(a7T, hq) {
		i8 = i9 * a7T - hq
	}, this.mK = function(a7U, hr) {
		iA = i9 * a7U - hr
	}, this.gl = function(a7S, a53) {
		return aC.m7 || ! function(a7S, a53) {
			return Math.pow(a7S - (ef + i / 2), 2) + Math.pow(a53 - (eh + i / 2), 2) < i * i / 4 || Math.pow(a7S - (ef + i / 2), 2) + Math.pow(a53 - (eh + 2 * i), 2) < i * i / 4
		}(a7S, a53) || bh.km.data[8].value ? (aG.mM() && (this.m9 = !0, a7O = a7S, a7P = a53), !1) : a53 < eh + 1.25 * i ? this.a0Q(Math.floor(h.i / 2), Math.floor(h.j / 2), -200) : this.a0Q(Math.floor(h.i / 2), Math.floor(h.j / 2), 200)
	}, this.a0N = function(a7S, a53) {
		var a7V, a7W, ht, hw;
		return !aG.mM() || (a7V = i8, a7W = iA, i8 += ht = a7O - a7S, iA += hw = a7P - a53, ae.a0N(ht, hw), this.a7X(), a7O = a7S, a7P = a53, a7V !== i8) || a7W !== iA
	}, this.a0Q = function(kr, ks, deltaY) {
		var mG;
		if (aG.mM()) {
			if (0 < deltaY) mG = (mG = 500 / (500 + deltaY)) < .5 ? .5 : mG;
			else {
				if (!(deltaY < 0)) return !1;
				mG = 2 < (mG = (500 - deltaY) / 500) ? 2 : mG
			}
			this.a7Y(kr, ks, mG), bd.dc = !0
		}
		return !0
	}, this.a7Y = function(ef, eh, eC) {
		var a1H;
		eC = a1H = (a1H = 1024 < (a1H = eC) * i9 ? 1024 / i9 : a1H) * i9 < .125 ? .125 / i9 : a1H, ae.zoom(eC, ef, eh),
			function(a1H, kr, ks) {
				i9 *= a1H, i8 = (i8 + kr) * a1H - kr, iA = (iA + ks) * a1H - ks, aR.a7X()
			}(eC, ef, eh)
	}, this.a7X = function() {
		var a7b = h.i / 16,
			hb = 0,
			a7c = h.j / 16,
			hc = 0;
		i8 < -h.i + a7b && (hb = -h.i + a7b - i8), i8 > i9 * bQ.ej - a7b && (hb = i9 * bQ.ej - a7b - i8), iA < -h.j + a7c && (hc = -h.j + a7c - iA), iA > i9 * bQ.ek - a7c && (hc = i9 * bQ.ek - a7c - iA), i8 += hb, iA += hc, bY.mL(), ae.a7d(hb,
			hc)
	}, this.a6q = function() {
		ef = h.i - i - ba.gap, eh = Math.floor(h.j / 2 - 1.25 * i)
	}, this.te = function() {
		bh.km.data[8].value || (tf.drawImage(a7M[0], ef, eh), tf.drawImage(a7M[1], ef, Math.floor(eh + 3 * i / 2)))
	}
}

function cF() {
	var g, a7f, a7g, a7h, gap, a7i, a7j, a7k, a7l, a7m, a4Q, a7n, gc, a7o, a5x, a7p, a7q, a7r;

	function a7v() {
		a7h = Math.floor(.2 * (z.a0.qv() ? .07 : .035) * h.pZ), a7h = a50(z.a0.qv() ? 3 : 1, a7h);
		var a7y = h.i / (g.length + gap);
		a7h = a7h < a7y ? a7y : a7h, a5x = Math.floor((1 - gap) * a7h), a7f = 0, a7z()
	}

	function a7z() {
		a7f = (a7f = a7f < -20 ? -20 : a7f) > (g.length - 15) * a7h ? (g.length - 15) * a7h : a7f, a7j = Math.floor(a7f / a7h), a7k = (a7k = a7j + Math.floor(h.i / a7h)) > g.length - 1 ? g.length - 1 : a7k, a7j = (a7j = a7k < a7j ? a7k : a7j) < 0 ?
			0 : a7j;
		var kV = a7k;
		a7i = a7g / g[kV];
		for (var aA = a7k - 1; a7j <= aA; aA--) g[aA] > g[kV] && (kV = aA, a7i = a7g / Math.pow(g[aA], a7o))
	}

	function a82(ef) {
		ef = Math.floor((a7f + h.i - ef - gap * a7h) / a7h);
		return (ef = ef < -1 ? -1 : -1 === ef ? 0 : ef > g.length - 1 ? -1 : ef) !== a7l && (a7l = ef, -1 === a7p && 0 === a7l && aS.a7s && (a7p = setInterval(a83, 100)), 1)
	}

	function a84(aA) {
		var a5n = Math.floor(a7i * Math.pow(g[aA], a7o));
		tf.fillRect(a7f + h.i - (aA + 1) * a7h, h.j - a5n, a5x, a5n)
	}

	function a83() {
		var g5;
		0 !== (a7l = 8 === aZ.a01() ? -1 : a7l) ? (a7q = (new Date).getTime(), clearInterval(a7p), a7p = -1) : (g5 = g[1] / 864e3, -1 !== a7q && (g5 += ((new Date).getTime() - a7q) * g[1] / 864e5, a7q = -1), 0 < g5 && (g[0] += Math.floor(g5), bd
			.dc = !0))
	}
	this.a7s = !1, this.dU = function() {
		a7q = a7p = -1, a7l = -(a7o = 1), this.a7t = !1, gc = 0, a7n = new Date, a7f = 0, gap = .3, (a7r = []).push({
			g0: "Plateau A",
			eY: 0,
			e: 57
		}), a7r.push({
			g0: "Max A",
			eY: 1,
			e: 1
		}), a7r.push({
			g0: "Black Friday",
			eY: 15,
			e: 15
		}), a7r.push({
			g0: "Max B",
			eY: 19,
			e: 19
		}), a7r.push({
			g0: "Max C",
			eY: 44,
			e: 44
		}), a7r.push({
			g0: "First Android Version",
			eY: 58,
			e: 58
		}), a7r.push({
			g0: "Max D",
			eY: 67,
			e: 67
		}), a7r.push({
			g0: "The iFrame Explosion",
			eY: 98,
			e: 99
		}), a7r.push({
			g0: "The 155-Day Uptrend",
			eY: 58,
			e: 213
		}), a7r.push({
			g0: "Max E",
			eY: 213,
			e: 213
		}), a7r.push({
			g0: "Plateau B",
			eY: 214,
			e: 259
		}), a7r.push({
			g0: "Turbulent Times",
			eY: 260,
			e: 344
		}), a7r.push({
			g0: "Max F",
			eY: 262,
			e: 262
		}), a7r.push({
			g0: "Max G",
			eY: 282,
			e: 282
		}), a7r.push({
			g0: "Max H",
			eY: 333,
			e: 333
		}), a7r.push({
			g0: "The 19-Day Downtrend",
			eY: 283,
			e: 301
		}), a7r.push({
			g0: "Plateau C",
			eY: 345,
			e: 385
		}), a7r.push({
			g0: "The Alliance Ascent",
			eY: 386,
			e: 395
		}), a7r.push({
			g0: "Max I",
			eY: 395,
			e: 395
		}), a7r.push({
			g0: "First iOS Version",
			eY: 411,
			e: 411
		}), a7r.push({
			g0: "Plateau D",
			eY: 396,
			e: 453
		}), a7r.push({
			g0: "The TikTok Revolution",
			eY: 454,
			e: 470
		}), a7r.push({
			g0: "Max J",
			eY: 456,
			e: 456
		}), a7r.push({
			g0: "Max K",
			eY: 472,
			e: 472
		}), a7r.push({
			g0: "Max L",
			eY: 478,
			e: 478
		}), a7r.push({
			g0: "YT Drew",
			eY: 471,
			e: 485
		}), a7r.push({
			g0: "Plateau E",
			eY: 485,
			e: 600
		}), a7r.push({
			g0: "Uptrend A",
			eY: 600,
			e: 613
		}), a7r.push({
			g0: "Max M",
			eY: 613,
			e: 613
		}), a7r.push({
			g0: "Downtrend A",
			eY: 614,
			e: 635
		}), a7r.push({
			g0: "Plateau F",
			eY: 636,
			e: 737
		}), a7r.push({
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
		a7g = Math.floor(.15 * h.j), a7m = (a7m = Math.floor((z.a0.qv() ? .018 : .0137) * h.pZ)) < 2 ? 2 : a7m, a4Q = b8.pX.rM(1, a7m), a7v()
	}, this.a7w = function(a7x) {
		var aA;
		for (this.a7s = !0, aA = 0; aA < a7x.length; aA++) g.unshift(a7x[aA]);
		a7v(), bd.dc = !0
	}, this.a80 = function() {
		a7z()
	}, this.a0N = function(ef, eh) {
		eh > h.j - .6 * a7g ? this.a7t ? ef !== gc && (a7f += ef - gc, gc = ef, a7z(), a82(ef), this.a7t = -1 !== a7l, bd.dc = !0) : a82(ef) && (bd.dc = !0) : this.qX()
	}, this.qX = function() {
		-1 !== a7l && (this.a7t = !1, a7l = -1, bd.dc = !0)
	}, this.a0Q = function(ef, deltaY) {
		-1 !== a7l && (a7f += Math.floor(deltaY), a7z(), a82(ef), bd.dc = !0)
	}, this.gl = function(ef, eh) {
		this.a0N(ef, eh), -1 !== a7l && (gc = ef, this.a7t = !0)
	}, this.a0m = function() {
		-1 !== a7l && (this.a7t = !1)
	}, this.te = function() {
		tf.fillStyle = b9.mh;
		for (var a86, month, di, ru, a89, a8A, m5, a8B, a8C, aA = a7k; a7j <= aA; aA--) a84(aA);
		this.a7s && 0 === a7j && (tf.fillStyle = b9.nE, a84(0)), -1 !== a7l && (tf.fillStyle = b9.mg, a84(a7l)), -1 !== a7l && (tf.font = a4Q, b8.pX.textBaseline(tf, 2), (di = new Date).setTime(a7n.getTime() - 1e3 * a7l * 60 * 60 * 24), month =
			"month", a86 = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(di), a86 = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(di)), a86 = a86 + ", " + di.getUTCDate() + " " + month + " " + di.getFullYear(), month = 1 === g[a7l] ? L(109) : L(110), month = b8.zS.y5(g[a7l]) + " " + month, di = Math.floor(tf.measureText(a86).width), ru = Math
			.floor(tf.measureText(month).width), a89 = Math.floor(.5 * (di + a7m)), a8A = (a8A = a7f + h.i - (a7l + 1) * a7h) < a89 ? a89 : a8A > h.i - a89 ? h.i - a89 : a8A, m5 = h.j - Math.floor(a7i * Math.pow(g[a7l], a7o)), a8B = Math
			.floor(1.1 * a7m), a8C = m5 > h.j - a8B ? h.j - a8B : m5, tf.fillStyle = b9.mb, tf.fillRect(h.i - ru - a7m, a8C - a8B, ru + a7m, a8B), tf.fillRect(a8A - a89, h.j - a8B, di + a7m, a8B), tf.fillStyle = b9.me, b8.pX.textAlign(tf, 2),
			tf.fillText(month, Math.floor(h.i - .5 * a7m), a8C),
			function(m5, a8B) {
				for (var rt, kX = -1, dx = g.length - a7l - 1, aA = a7r.length - 1; 0 <= aA; aA--) dx >= a7r[aA].eY && dx <= a7r[aA].e && (-1 === kX || a7r[aA].e - a7r[aA].eY < a7r[kX].e - a7r[kX].eY) && (kX = aA); - 1 !== kX && (rt = Math
					.floor(tf.measureText(a7r[kX].g0).width), tf.fillStyle = b9.mb, tf.fillRect(h.i - rt - a7m, m5, rt + a7m, a8B), tf.fillStyle = b9.me, tf.fillText(a7r[kX].g0, Math.floor(h.i - .5 * a7m), m5 + a8B))
			}(a8C - 2 * a8B, a8B), b8.pX.textAlign(tf, 1), tf.fillText(a86, a8A, h.j), tf.strokeStyle = b9.mi, tf.lineWidth = 1, tf.beginPath(), tf.moveTo(0, m5), tf.lineTo(h.i, m5), tf.closePath(), tf.stroke())
	}
}

function cG() {
	var a4Q, i, eh, a8E, a8F, canvas, x4, a5q, a2O, a8G, a8H, a8I, a8J;
	this.ef = 0, this.j = 0, this.dU = function() {
		a8F = aC.a3H, a8H = "rgba(0,100,0,0.8)", a8I = "rgba(150,0,0,0.8)", a5q = a8G = !0, a2O = af.gZ[aC.eI], this.resize()
	}, this.resize = function() {
		i = Math.floor((z.a0.qv() ? .305 : .24) * h.pZ), this.j = Math.floor(.5 + .13 * i), i = Math.floor(6 * this.j), a4Q = b8.pX.rM(1, Math.floor(.8 * this.j)), a8J = Math.floor(.5 * this.j), bQ.vO.font = a4Q, eh = ba.gap, a8E = Math.floor(1 +
			.13 * this.j), (canvas = document.createElement("canvas")).width = i, canvas.height = this.j, (x4 = canvas.getContext("2d", {
			alpha: !0
		})).font = a4Q, b8.pX.textBaseline(x4, 1), b8.pX.textAlign(x4, 1), this.a8K()
	}, this.a6D = function() {
		return z.a0.qv() && h.i < 1.2 * h.j
	}, this.a6q = function() {
		this.a6D() ? this.ef = h.i - i - ba.gap : this.ef = Math.floor(aU.a8L() + (h.i - aU.a8L() - aV.i - i) / 2 - .5 * ba.gap)
	}, this.lO = function() {
		a5q && (a5q = !1, this.a8K())
	}, this.a8K = function() {
		x4.clearRect(0, 0, i, this.j), x4.fillStyle = a8G ? a8H : a8I, x4.fillRect(0, 0, i, this.j), x4.fillStyle = b9.mg, this.a8M(), this.a8N(), x4.fillStyle = af.gZ[aC.eI] >= ad.jT(aC.eI) ? b9.nB : b9.me, x4.fillText(b8.zS.y5(a2O), Math.floor(
			i / 2), a8J), x4.fillStyle = b9.me, x4.fillRect(0, 0, i, 1), x4.fillRect(0, 0, 1, this.j), x4.fillRect(0, this.j - 1, i, 1), x4.fillRect(i - 1, 0, 1, this.j)
	}, this.a8M = function() {
		var et = bd.jk() % 100,
			et = (et = 9 - bJ.dj(et -= et % 10, 10), Math.floor(et * (this.j - a8E) / 9));
		x4.fillRect(0, et, a8E, this.j - et), x4.fillRect(i - a8E, et, a8E, this.j - et)
	}, this.a8N = function() {
		x4.fillRect(a8E, this.j - a8E, Math.floor((i - 2 * a8E) * af.gZ[aC.eI] / a8F), a8E)
	}, this.ih = function() {
		var g5 = aC.eI;
		b8.ft.gk(g5) && (g5 = af.gZ[g5] - af.a2N[g5], a2O !== g5 ? (a8F = a50(g5, a8F), a8G = a2O < g5 && 10 <= g5, a2O = g5, a5q = !0) : bd.jk() % 10 == 9 && (a5q = !0))
	}, this.te = function() {
		0 === af.lc[aC.eI] || aC.gt || 2 === af.a2F[aC.eI] || tf.drawImage(canvas, this.ef, eh)
	}
}

function cH() {
	var a8O, a8P, a8Q, a8R, a8S, a8T, a8U, a8V, a8W, a8X, a8Y, a8Z, a8a, a8b, a8c, a8d, a8e, a8f, a8g, a8h, a8i, a8j, position, a8k, a8l, a8m, a8n, a8o = 1,
		a8p = 1,
		a8q = "";
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

	function a8s() {
		a8U.clearRect(0, 0, a8O, a6T),
			a8U.fillStyle = b9.nU,
			a8U.fillRect(0, 0, a8O, a8Z),
			a8U.fillStyle = b9.ma,
			a8U.fillRect(0, a8Z, a8O, a6T - a8Z);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			jY[aC.eI]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) a8j = -1;
		if (__fx.leaderboardFilter.enabled && a8j >= __fx.leaderboardFilter.filteredLeaderboard.length) a8j = -1;
		playerPos >= position && a8u(playerPos - position, b9.n3),
			0 !== jY[aC.eI] && 0 === position && a8u(0, b9.nZ),
			-1 !== a8j && a8u(a8j, b9.mf),
			a8U.fillStyle = b9.ma,
			//console.log("drawing", a8j),
			a8U.clearRect(0, a6T - __fx.leaderboardFilter.tabBarOffset, a8O, __fx.leaderboardFilter.tabBarOffset);
		a8U.fillRect(0, a6T - __fx.leaderboardFilter.tabBarOffset, a8O, __fx.leaderboardFilter.tabBarOffset);
		a8U.fillStyle = b9.me,
			a8U.fillRect(0, a8Z, a8O, 1),
			a8U.fillRect(0, a6T - __fx.leaderboardFilter.tabBarOffset, a8O, 1),
			__fx.leaderboardFilter.drawTabs(a8U, a8O, a6T - __fx.leaderboardFilter.tabBarOffset, b9.n3),
			a8U.fillRect(0, 0, a8O, ba.xo),
			a8U.fillRect(0, 0, ba.xo, a6T),
			a8U.fillRect(a8O - ba.xo, 0, ba.xo, a6T),
			a8U.fillRect(0, a6T - ba.xo, a8O, ba.xo), a8U.font = a8P, b8.pX.textBaseline(a8U, 1), b8.pX.textAlign(a8U, 1), a8U.fillText(a8q, Math.floor((a8O + a8Z - 22) / 2), Math.floor(a8X + a8Q / 2));
		__fx.playerList.drawButton(a8U, 12, 12, a8Z - 22);
		var er, g6 = playerPos < position + a8S - 1 ? 1 : 2;

		if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - a8S)
				position = (result.length > a8S ? result.length : a8S) - a8S;
			//if (position >= result.length) position = result.length - 1;
			for (a8U.font = a8R, b8.pX.textAlign(a8U, 0), er = a8S - g6; 0 <= er; er--) {
				const pos = result[er + position];
				if (pos !== undefined)
					a8v(l3[pos]), a8w(er, pos, l3[pos]);
			}
			for (b8.pX.textAlign(a8U, 2), er = a8S - g6; 0 <= er; er--) {
				const pos = result[er + position];
				if (pos !== undefined)
					a8v(l3[pos]), a8x(er, l3[pos]);
			}
		} else {
			for (a8U.font = a8R, b8.pX.textAlign(a8U, 0), er = a8S - g6; 0 <= er; er--)
				a8v(l3[er + position]), a8w(er, er + position, l3[er + position]);
			for (b8.pX.textAlign(a8U, 2), er = a8S - g6; 0 <= er; er--)
				a8v(l3[er + position]), a8x(er, l3[er + position]);
		}
		2 == g6 && (a8v(aC.eI), b8.pX.textAlign(a8U, 0), a8w(a8S - 1, jY[aC.eI], aC.eI), b8.pX.textAlign(a8U, 2), a8x(a8S - 1, aC.eI)), 0 === position && (g6 = .7 * a8a / aa.get(4).height, a8U.setTransform(g6, 0, 0, g6, Math.floor(a8b + .58 * a8a +
			.5 * g6 * aa.get(4).width), Math.floor(a8X + a8Q + .4 * a8a)), a8U.imageSmoothingEnabled = !0, a8U.drawImage(aa.get(4), -Math.floor(aa.get(4).width / 2), -Math.floor(aa.get(4).height / 2)), a8U.setTransform(1, 0, 0, 1, 0, 0))
	}

	function a8v(player) {
		aC.hN && (a8U.fillStyle = be.a8z[be.k9[be.eW[player]]])
	}

	function a8u(aA, a90) {
		a8U.fillStyle = a90, aA = a8S - 1 < aA ? a8S - 1 : aA;
		a90 = Math.floor((aA === a8S - 1 ? 2 : 0 === aA ? 1.15 : 1) * a8a), a90 = aA === a8S - 2 ? Math.floor(a8Z + 9.15 * a8a) - Math.floor(a8Z + 8.15 * a8a) : a90;
		a8U.fillRect(0, Math.floor(a8Z + (aA + (0 === aA ? 0 : .15)) * a8a), a8O, a90)
	}

	function a8w(a92, zj, aA) {
		a8U.fillText(a8f[zj], a8b, Math.floor(a8X + a8Q + (a92 + .5) * a8a)), 1 === af.a2F[aA] && (a8U.font = "italic " + a8R);
		zj = Math.floor(a8X + a8Q + (a92 + .5) * a8a);
		a8U.fillText(af.zO[aA], a8c, zj), 0 !== af.a2F[aA] && (a8U.font = a8R), aA < aC.jn && 2 !== af.a2F[aA] || a8U.fillRect(a8c, zj + .35 * a8o, a8e[aA], Math.max(1, .1 * a8o))
	}

	function a8x(a92, aA) {
		a8U.fillText(af.gL[aA], a8d, Math.floor(a8X + a8Q + (a92 + .5) * a8a))
	}

	function a9B(eh) {
		return (eh -= ba.gap + a8Z) < 0 ? Math.floor(eh / a8a) - 1 : eh < (a8S - 1) * a8a ? Math.floor(eh / a8a) : eh < a6T - a8Z ? a8S - 1 : (eh -= a6T - a8Z, a8S + Math.floor(eh / a8a))
	}

	function xn(ef, eh) {
		return ef >= ba.gap && ef < ba.gap + a8O && eh >= ba.gap && eh < ba.gap + a6T
	}
	this.dU = function() {
			var aA;
			for (a8l = !1, a8n = a8m = a8k = 0, a8j = -1, a8S = z.a0.qv() ? 6 : 10, a8p = (position = 0) === (a8p = bh.km.data[11].value) ? 10 : 1 === a8p ? 5 : 1, a8i = !1, a8g = new Uint16Array(a8S + 1), a8h = new Uint32Array(a8S + 1), a8W = aC.eV,
				l3 = new Uint16Array(a8W), jY = new Uint16Array(a8W), aA = a8W - 1; 0 <= aA; aA--) l3[aA] = aA, jY[aA] = aA;
			this.resize(!0), a8e = new Uint16Array(aC.eV);
			var a8r = Math.floor(a8O - a8c - a8b - a8V);
			for (a8f = new Array(aC.eV), a8U.font = a8R, aA = aC.eV - 1; 0 <= aA; aA--) a8f[aA] = aA + 1 + ".", af.zO[aA] = b8.x4.a1u(af.zU[aA], a8R, a8r), a8e[aA] = Math.floor(a8U.measureText(af.zO[aA]).width);
			a8s()
		}, this.resize = function(dU) {
			if (a6T = z.a0.qv() ? (a8O = Math.floor(.335 * h.pZ), Math.floor(a8S * a8O / 8)) : (a8O = Math.floor(.27 * h.pZ), Math.floor(a8S * a8O / 10)), a8O = Math.floor(.97 * a8O), (a8T = document.createElement("canvas")).width = a8O, a8T.height =
				a6T, a8U = a8T.getContext("2d", {
					alpha: !0
				}), a8X = .025 * a8O, a8Q = .16 * a8O, a8Y = 0 * a8O, a8Z = Math.floor(.45 * a8X + a8Q), a8a = (a6T - a8Q - 2 * a8X - a8Y) / a8S,
				a8T.height = a6T += a8a, __fx.leaderboardFilter.tabBarOffset = Math.floor(a8a * 1.3), __fx.leaderboardFilter.verticalClickThreshold = a6T - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = a8O,
				a8P = b8.pX.rM(1, Math.floor(.55 * a8Q)), a8o = Math.floor((z.a0.qv() ? .67 : .72) * a8a), a8R = b8.pX.rM(0, a8o), a8U.font = a8R, a8b = Math.floor(.04 * a8O), a8c = Math.floor((z.a0.qv() ? .195 : .18) * a8O), a8V = Math.floor(a8U
					.measureText("00920600").width), a8U.font = a8P, a8d = a8O - a8b, !dU) {
				a8U.font = a8R;
				for (var aA = aC.eV - 1; 0 <= aA; aA--) a8e[aA] = Math.floor(a8U.measureText(af.zO[aA]).width);
				a8s()
			}
			a8q = b8.x4.a1u(L(111), a8P, .96 * a8O)
		}, this.a8L = function() {
			return a8O
		}, this.lO = function(bp, a8t) {
			(a8t || a8i && (bp || bd.jk() % a8p == 0)) && (a8i = !1, a8s())
		}, this.ih = function() {
			! function() {
				for (var er = a8W - 1; 0 <= er; er--) 0 === af.lc[l3[er]] && ! function(er) {
					var a99 = l3[er];
					a8W--;
					for (var aA = er; aA < a8W; aA++) l3[aA] = l3[aA + 1], jY[l3[aA]] = aA;
					l3[a8W] = a99, jY[l3[a8W]] = a8W
				}(er)
			}();
			for (var a97, mM = a8W - 1, er = 0; er < mM; er++) af.gL[l3[er]] < af.gL[l3[er + 1]] && (a97 = l3[er], l3[er] = l3[er + 1], l3[er + 1] = a97, jY[l3[er]] = er, jY[l3[er + 1]] = er + 1);
			! function() {
				for (var di = a8i, g6 = (a8i = !0, jY[aC.eI] >= a8S - 1 ? a8S - 2 : a8S - 1), aA = g6; 0 <= aA; aA--)
					if (a8g[aA] !== l3[aA] || a8h[aA] !== af.gL[l3[aA]]) return;
				(g6 != a8S - 2 || a8g[a8S] === jY[aC.eI] && a8h[a8S] === af.gL[aC.eI]) && (a8i = di)
			}();
			for (var aA = a8S - 1; 0 <= aA; aA--) a8g[aA] = l3[aA], a8h[aA] = af.gL[l3[aA]];
			a8g[a8S] = jY[aC.eI], a8h[a8S] = af.gL[aC.eI];
			leaderboardHasChanged = true;
		}, __fx.leaderboardFilter.scrollToTop = function() {
			position = 0;
		}, this.gl = function(ef, eh) {
			return !!xn(ef, eh) && ((__fx.utils.isPointInRectangle(ef, eh, ba.gap + 12, ba.gap + 12, a8Z - 22, a8Z - 22) && __fx.playerList.display(af.zU), true) &&
				!(eh - ba.gap > __fx.leaderboardFilter.verticalClickThreshold && __fx.leaderboardFilter.handleMouseDown(ef - ba.gap)) && (a8k = bd.e7, a8l = !0, a8m = a8n = a9B(eh), bH.a11() && (ef = a7C(-1, a8n, a8S), a8j !== (ef = ef === a8S ?
					-1 : ef)) && (a8j = ef, a8s(), bd.dc = !0)), !0)
		}, __fx.leaderboardFilter.repaintLeaderboard = function() {
			a8s(), bd.dc = !0;
		},
		this.a0N = function(ef, eh) {
			if (__fx.utils.isPointInRectangle(ef, eh, ba.gap + 12, ba.gap + 12, a8Z - 22, a8Z - 22)) {
				__fx.playerList.hoveringOverButton === false && (__fx.playerList.hoveringOverButton = true, a8s(), bd.dc = !0);
			} else {
				__fx.playerList.hoveringOverButton === true && (__fx.playerList.hoveringOverButton = false, a8s(), bd.dc = !0);
			}
			if (__fx.leaderboardFilter.setHovering(
					__fx.utils.isPointInRectangle(ef, eh, ba.gap, ba.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth, __fx.leaderboardFilter.tabBarOffset), ef - ba.gap
				)) return;
			var di, a9A = a9B(eh);
			return a8l ? (di = position, (position = a7C(0, position += a8m - a9A, aC.eV - a8S)) !== di && (a9A = (a9A = a7C(-1, a8m = a9A, a8S)) !== a8S && xn(ef, eh) ? a9A : -1, a8j = a9A, a8s(), bd.dc = !0), !0) : (a9A = (a9A = a7C(-1, a9A,
				a8S)) === a8S || !xn(ef, eh) || bH.a11() ? -1 : a9A, a8j !== a9A && (a8j = a9A, a8s(), bd.dc = !0))
		}, this.a0m = function(ef, eh) {
			if (!a8l) return !1;
			a8l = !1;
			var a9A = a9B(eh);
			var isEmptySpace = false;
			return bH.a11() && -1 !== a8j && (a8j = -1, a8s(), bd.dc = !0), bd.e7 - a8k < 350 && a8n === a9A && -1 !== (a9A = (a9A = a7C(-1, a9A, a8S)) !== a8S && xn(ef, eh) ? a9A : -1) && (ef = (__fx.leaderboardFilter.enabled ? (updateFilteredLb(),
					l3[__fx.leaderboardFilter.filteredLeaderboard[a9A + position] ?? (isEmptySpace = true, jY[aC.eI])]) : l3[a9A + position]), a9A === a8S - 1 && (__fx.leaderboardFilter.enabled ? this.playerPos : jY[aC.eI]) >=
				position + a8S - 1 && (ef = aC.eI), !isEmptySpace && aC.hN && __fx.donationsTracker.displayHistory(ef, af.zU, aC.k6), 0 !== af.lc[ef] && !isEmptySpace) && aG.ly(ef, 800, !1, 0), !0
		}, this.a0Q = function(ef, eh, deltaY) {
			var a9C;
			return !(a8l || aC.m7 || (a9C = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !xn(ef, eh)) || (ef = (ef = a7C(-1, a9B(eh), a8S)) === a8S || bH.a11() ? -1 : ef, 0 < deltaY ? position < aC.eV - a8S && (position += Math.min(aC.eV - a8S -
				position, a9C), a8j = ef, a8s(), bd.dc = !0) : 0 < position && (position -= Math.min(position, a9C), a8j = ef, a8s(), bd.dc = !0), 0))
		}, this.te = function() {
			tf.drawImage(a8T, ba.gap, ba.gap)
		}
}

function cI() {
	var canvas, x4, ef, eh, a5n, a9D, gap, a9E, fontSize, a9F, a9G, a9H, a9I, a9J, a9K, a9L, a9M, a9N;

	function a9R() {
		x4.clearRect(0, 0, aV.i, aV.j), x4.fillStyle = b9.mb, x4.fillRect(0, 0, aV.i, aV.j), x4.fillStyle = b9.my, eC = 0 < a9L ? a9L : Math.sqrt(a9I[4] / 1e4), x4.fillRect(0, aV.j - a5n - 1, Math.floor(eC * aV.i), a5n), x4.fillStyle = b9.me, x4
			.fillRect(0, 0, aV.i, 1), x4.fillRect(0, 0, 1, aV.j), x4.fillRect(aV.i - 1, 0, 1, aV.j), x4.fillRect(0, aV.j - 1, aV.i, 1), x4.fillRect(0, aV.j - a5n - 1, aV.i, 1);
		for (var eC, a9T, di = 0, aA = 0; aA < a9H.length; aA++) a9J[aA] ? (b8.pX.textAlign(x4, 0), a9T = Math.floor((a9D - a5n + 2 * a9E) * (aA - di + 1) / (a9H.length + 1) - .7 * a9E), x4.fillText(a9H[aA], gap, a9T), b8.pX.textAlign(x4, 2), 5 ===
			aA && 0 !== af.lc[aC.eI] && af.gZ[aC.eI] >= ad.jT(aC.eI) ? (x4.fillStyle = b9.nX, x4.fillText(a9P(aA), aV.i - gap, a9T), x4.fillStyle = b9.me) : x4.fillText(a9P(aA), aV.i - gap, a9T)) : di++
	}

	function a9P(aA) {
		return aA < 3 ? a9I[aA].toString() : 3 === aA || 4 === aA || 5 === aA ? b8.zS.a2v(a9I[aA] / 100, 2) : aA < 7 ? b8.zS.y5(a9I[aA]) : aA === 7 ? aV.a9U(a9I[7]) : aA === 8 ? __fx.utils.getMaxTroops(af.gL, aC.eI) : __fx.utils.getDensity(aC.eI)
	}

	function a9O() {
		af.gL[aC.eI] !== a9I[6] && (a9I[6] = af.gL[aC.eI], a9F++)
	}
	this.dU = function() {
		a9L = a9M = 0, (a9G = new Array(8))[0] = L(112), a9G[1] = aC.k6 ? L(113) : L(114), a9G[2] = L(115), a9G[3] = L(116), a9G[4] = L(117), a9G[5] = L(118, 0, "Interest"), a9G[6] = L(119), a9G[7] = L(120),
			a9G.push("Max Troops", "Density"), // add a9G
			(a9H = new Array(a9G.length)).fill(""), (a9I = new Array(a9G.length))[0] = aC.k6 ? 0 : aC.jn, a9I[1] = aC.k6 ? ak.jo : aC.k8, a9I[2] = aC.yp, a9I[3] = 0, a9I[4] = bJ.dj(1e4 * af.gL[0], Math.max(aC.jX, 1)), a9I[5] = 0 === aC.data
			.iIncomeType ? 700 : 1 === aC.data.iIncomeType ? bJ.dj(700 * aC.data.iIncomeValue, 64) : bJ.dj(700 * aC.data.iIncomeData[aC.eI], 64), a9I[6] = 0, a9O(), a9I[7] = 0, a9K = a9P(6), a9J = new Array(a9G.length);
		for (var aA = a9G.length - 1; 0 <= aA; aA--) a9J[aA] = !0;
		a9N = 0, a9N = aC.k6 ? (a9J[0] = !1, a9J[2] = !1, a9J[3] = !1, 3) : (a9J[3] = !1, 1), a9F = 0, this.resize()
	}, this.resize = function() {
		this.i = Math.floor((z.a0.qv() ? .1646 : .126) * 1.25 * h.pZ), this.j = Math.floor(1.18 * this.i), a5n = Math.floor(.04 * this.i), gap = Math.floor(.035 * this.i), a9E = .04 * this.i, a9D = this.j, this.j -= Math.floor(a9N * (this.j - 2 *
			a5n) / a9G.length), fontSize = Math.floor(.7 * (a9D - a5n) / a9G.length);
		var a4Q = b8.pX.rM(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.i, canvas.height = this.j,
			function(a4Q, i) {
				for (var aA = 0; aA < a9H.length; aA++) a9H[aA] = b8.x4.a1u(a9G[aA], a4Q, i)
			}((x4 = canvas.getContext("2d", {
				alpha: !0
			})).font = a4Q, .575 * this.i), b8.pX.textBaseline(x4, 1), x4.lineWidth = 1, this.a3A(), this.a6q(), aT.a6q(), a9R()
	}, this.a6q = function() {
		ef = h.i - this.i - ba.gap
	}, this.a9S = function() {
		eh = ba.gap
	}, this.a3A = function() {
		eh = ba.gap + (aT.a6D() && 0 !== af.lc[aC.eI] && !aC.gt ? aT.j + ba.gap : 0)
	}, this.lO = function(bp) {
		(bp || 100 <= a9F) && (a9F = 0, a9R())
	}, this.a45 = function() {
		return a9I[7]
	}, this.a9U = function(value) {
		var kV = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * kV) / 1e3);
		return value < 10 ? kV + ":0" + value : kV + ":" + value
	}, this.ih = function() {
		var a9d, per;
		a9J[0] && aC.yq - aC.yp !== a9I[0] && (a9I[0] = aC.yq - aC.yp, a9F++), ak.jo - a9I[0] !== a9I[1] && (a9I[1] = ak.jo - a9I[0], a9F++), this.lG(), (a9d = ad.a9e(aC.eI)) !== a9I[5] && (a9I[5] = a9d, a9F++), a9O(), a9I[7] += bd.a9f, a9d =
			a9P(7), a9K !== a9d && (a9K = a9d, a9F += 100), a9d = aC.hN ? bf.a2f() : af.gL[l3[0]], per = bJ.dj(1e4 * a9d, Math.max(aC.jX, 1)), a9I[3] = a9d, a9I[4] !== per && (a9F++, a9I[4] = per), 8 === aC.k4 && function() {
				for (var aA = 0; aA < 2; aA++)
					if (!b8.ft.gk(aA)) return bP.yQ.ym(), 1;
				return
			}() || a9I[3] < aC.jX || ! function() {
				for (var aA = ak.jo - 1; 0 <= aA; aA--)
					if (0 < af.fz[ak.jp[aA]].length) return;
				return 1
			}() || bP.yQ.ym()
	}, this.lG = function() {
		a9J[2] && aC.yp !== a9I[2] && (a9I[2] = aC.yp, a9F++)
	}, this.a9g = function(aA) {
		var sB, a9h, di;
		return 2 !== aC.yn && (aA % 2 == 1 && (aU.lO(1, 1), bd.dc = !0), aA === aC.a3J ? (a9L = 0, a9R(), !1) : (-1 !== aA || 0 !== a9M) && (a9h = a9L, a9L = aC.gh ? aA / aC.a3J : (di = performance.now(), 0 <= aA && (sB = di - 392 * aA, a9M =
			0 === aA || sB < a9M ? sB : a9M), 1 < (a9L = (di - a9M) / (392 * aC.a3J)) ? 1 : a9L), a9R(), a9L !== a9h))
	}, this.te = function() {
		tf.drawImage(canvas, ef, eh)
	}
}

function cJ() {
	var hF, a9i, i, j, a6w, a9j, a9k, a6E, canvas, lp, a9l;

	function x0() {
		return Math.floor((h.i - i) / 2) < aQ.j + 2 * ba.gap ? h.j - j - 4 * ba.gap - aQ.j : h.j - j - 2 * ba.gap
	}
	this.dU = function() {
		a9l = hF = !1, a6w = .61, a9j = .07, a9k = .09, lp = a6E = j = 0
	}, this.resize = function() {
		var x4, m4, et, a9q, a9r, a4V;
		hF && (i = a9m(i = z.a0.qv() ? Math.floor(.69 * h.pZ) : Math.floor(.5 * h.pZ), a50(h.i - 2 * ba.gap, 10)), i = a9m(i, Math.floor(3.57 * a50(h.j - 2 * ba.gap, 3))), j = Math.floor(.28 * i), (canvas = document.createElement("canvas"))
			.width = i, canvas.height = j, x4 = canvas.getContext("2d", {
				alpha: !0
			}), m4 = Math.floor(1 + j / 40), x4.clearRect(0, 0, i, j), x4.fillStyle = b9.mb, x4.fillRect(m4, m4, i - 2 * m4, j - 2 * m4), x4.lineJoin = "bevel", x4.lineWidth = 2 * m4, x4.strokeStyle = b9.me, x4.strokeRect(m4, m4, i - 2 * m4,
				j - 2 * m4), x4.imageSmoothingEnabled = !1, et = aa.get(a9i), a9q = et.width, a4V = (1 === a9i ? .85 : 21 === a9i ? .666 : .9) * a6w * j / (a9r = et.height), x4.setTransform(a4V, 0, 0, a4V, Math.floor((i - a4V * a9q) / 2),
				Math.floor((j - a4V * a9r) / 2)), x4.drawImage(et, 0, 0), x4.setTransform(1, 0, 0, 1, Math.floor(i - a9k * j - a9j * j - m4), Math.floor(m4 + a9j * j)),
			function(x4, eY) {
				x4.lineWidth = Math.floor(1 + j / 80), x4.strokeStyle = b9.me, x4.beginPath(), x4.moveTo(0, 0), x4.lineTo(eY, eY), x4.moveTo(0, eY), x4.lineTo(eY, 0), x4.stroke()
			}(x4, Math.floor(a9k * j)), x4.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(f0, a9o, a6j, a9p) {
		hF || a9p && a9l || (a9i = a6j ? 21 : f0 ? 1 : 2, hF = a9l = !0, this.resize(), aK.qo(), aQ.a6e(), lp = bd.e7, a6E = a9o ? 1 : 0)
	}, this.ih = function() {
		!hF || 1 <= a6E || (a6E = 1 < (a6E += 5e-4 * (bd.e7 - lp)) ? 1 : a6E, lp = bd.e7, bd.dc = !0)
	}, this.gl = function(ef, eh) {
		return !(!hF || a6E <= 0 || (ef -= Math.floor((h.i - i) / 2), eh -= x0(), ef < 0) || eh < 0 || i < ef || j < eh || (i - j / 3 < ef && eh < j / 3 && (hF = !1, bd.dc = !0), 0))
	}, this.te = function() {
		!hF || a6E <= 0 || (tf.globalAlpha = a6E, tf.drawImage(canvas, Math.floor((h.i - i) / 2), x0()), tf.globalAlpha = 1)
	}
}

function dH() {
	var a9t, a9u = new Uint8Array(5),
		a9v = new Uint8Array(5);
	this.a9w = new a9x, this.dU = function() {
		for (var f0 = bh.km.data[119].value, aA = 0; aA < a9u.length; aA++) a9u[aA] = (f0 >> 2 * aA) % 4
	}, this.a3U = function() {
		a9t = [L(121), L(122), L(123, [bV.a9y[28]]), L(124, [bV.a9y[26]]), L(125, [bV.a9y[0]])], this.a9w.dU()
	}, this.ih = function() {
		this.a9w.ih()
	}, this.a46 = function(id) {
		1 < id && bH.q0() || ! function(dx) {
			if (3 === a9u[dx] || 1 === a9v[dx]) return;
			if (a9v[dx] = 1, !(Math.random() < .6)) {
				a9u[dx]++;
				for (var f0 = 0, aA = 0; aA < a9u.length; aA++) f0 += a9u[aA] << 2 * aA;
				bh.qz.r0(119, f0)
			}
			return 1
		}(id) || aM.a56(a9t[id])
	}
}

function a9x() {
	var aA0;
	this.dU = function() {
		aA0 = !1
	}, this.ih = function() {
		var g5;
		if (function() {
				if (!aA0) {
					if (bd.jk() % 30 != 9) return;
					if (!b8.ft.kw(90)) return;
					aA0 = !0
				}
				return 1
			}() && (! function() {
				var pP = aM.a5R(956);
				if (pP) {
					if (b8.ft.kZ(pP.player)) return 1;
					aM.a4C(956, 0)
				}
				return
			}() && (-1 === (g5 = (aC.hN ? function() {
				var id = bf.l0(),
					eY = ak.jo;
				if (be.k9[id])
					for (var yb = ak.jp, eW = be.eW, aA = 0; aA < eY; aA++) {
						var g5 = yb[aA];
						if (eW[g5] !== id) return g5
					} else if (1 < eY) return l3[eY - 1];
				return -1
			} : function() {
				for (var aA8 = ak.jo, kU = ak.jp, aA9 = jY, aA = 0; aA < aA8; aA++) {
					var g5 = kU[aA];
					if (0 !== aA9[g5]) return g5
				}
				return -1
			})()) ? ! function() {
				var pP = aM.a5R(957);
				if (pP && pP.a4w) {
					if (ab.eP(pP.a4w.eK << 2)) return 1;
					aM.a4C(957, 0)
				}
				return
			}() : (aM.zB(0, L(126, [af.zO[g5]]), 956, g5, b9.me, b9.mb, -1, !0), 0)))) {
			var eY = am.iS.kl;
			if (0 !== eY)
				for (var km = am.iS.km, aA = 0; aA < eY; aA++) {
					var eK = km[aA];
					if (ab.eP(eK << 2)) return void aM.zB(0, L(127, [bK.eg(eK), bK.ei(eK)]), 957, 0, b9.me, b9.mb, -1, !0, void 0, {
						er: 1,
						eK: eK
					})
				}
		}
	}
}

function dI() {
	this.aAA = new aAB, this.dU = function() {
		this.aAA.resize()
	}
}

function aAB() {
	this.resize = function() {
		var aA, aAC = document.head.querySelector("style#ss");
		if (aAC)
			for (aA = aAC.sheet.cssRules.length - 1; 0 <= aA; aA--) aAC.sheet.deleteRule(0);
		else(aAC = document.createElement("style")).id = "ss", document.head.appendChild(aAC);
		var a74 = "::-webkit-scrollbar",
			aAD = b8.pX.ph(ba.rO),
			hP = b8.pX.ph(Math.max(b8.pX.qq(.012), 8));
		try {
			aAC.sheet.insertRule(a74 + "{width:" + hP + ";height:" + hP + ";}", aAC.sheet.cssRules.length), aAC.sheet.insertRule(a74 + "-thumb{background-color:white;}", aAC.sheet.cssRules.length), aAC.sheet.insertRule(a74 +
				"-track{background:" + b9.ma + ";}", aAC.sheet.cssRules.length), aAC.sheet.insertRule(a74 + "-track:horizontal{border-top:" + aAD + " solid white;}", aAC.sheet.cssRules.length), aAC.sheet.insertRule(a74 +
				"-track:vertical{border-left:" + aAD + " solid white;}", aAC.sheet.cssRules.length), aAC.sheet.insertRule(a74 + "-button{display:none;}", aAC.sheet.cssRules.length)
		} catch (e) {
			for (console.log("error 3425: " + e), aA = aAC.sheet.cssRules.length - 1; 0 <= aA; aA--) aAC.sheet.deleteRule(0)
		}
	}
}

function dG() {
	this.aAE = !1, this.mU = !1, this.a3E = !1, this.aAF = [0, 0, 0, 0], this.aAG = function() {
		var m4, m5, mH, mI;
		this.a3E = this.a3E || this.mU, (this.mU || this.aAE && this.a3E) && (m4 = bY.aAH[0], m5 = bY.aAH[1], mH = bY.aAH[2], mI = bY.aAH[3], m4 = m4 < this.aAF[0] ? this.aAF[0] : m4, m5 = m5 < this.aAF[1] ? this.aAF[1] : m5, mH = mH > this.aAF[
				2] ? this.aAF[2] : mH, mI = mI > this.aAF[3] ? this.aAF[3] : mI, this.mU = !1, this.aAE = !1, m4 === this.aAF[0] && m5 === this.aAF[1] && mH === this.aAF[2] && mI === this.aAF[3] ? this.a3F() : m4 <= mH && m5 <= mI && a3W
			.putImageData(a3X, 0, 0, m4, m5, mH - m4 + 1, mI - m5 + 1))
	}, this.a3F = function() {
		this.a3E && this.aAF[2] >= this.aAF[0] && this.aAF[3] >= this.aAF[1] && a3W.putImageData(a3X, 0, 0, this.aAF[0], this.aAF[1], this.aAF[2] - this.aAF[0] + 1, this.aAF[3] - this.aAF[1] + 1), this.a3E = !1
	}, this.yy = function() {
		this.aAF[2] >= this.aAF[0] && this.aAF[3] >= this.aAF[1] && a3W.putImageData(a3X, 0, 0, this.aAF[0], this.aAF[1], this.aAF[2] - this.aAF[0] + 1, this.aAF[3] - this.aAF[1] + 1), this.a3E = !1
	}, this.dU = function() {
		var ef, eh;
		this.aAE = !1, this.mU = !1, this.a3E = !1, this.aAF[0] = bQ.ej, this.aAF[1] = bQ.ek, this.aAF[2] = this.aAF[3] = 0;
		loop: for (ef = 1; ef < bQ.ej - 1; ef++)
			for (eh = bQ.ek - 2; 1 < eh; eh--)
				if (1 === aAI[ab.wZ(ef, eh) + 2]) {
					this.aAF[0] = ef;
					break loop
				} loop: for (eh = 1; eh < bQ.ek - 1; eh++)
			for (ef = bQ.ej - 2; 1 < ef; ef--)
				if (1 === aAI[ab.wZ(ef, eh) + 2]) {
					this.aAF[1] = eh;
					break loop
				} loop: for (ef = bQ.ej - 2; 0 < ef; ef--)
			for (eh = bQ.ek - 2; 1 < eh; eh--)
				if (1 === aAI[ab.wZ(ef, eh) + 2]) {
					this.aAF[2] = ef;
					break loop
				} loop: for (eh = bQ.ek - 2; 0 < eh; eh--)
			for (ef = bQ.ej - 2; 1 < ef; ef--)
				if (1 === aAI[ab.wZ(ef, eh) + 2]) {
					this.aAF[3] = eh;
					break loop
				}
	}
}

function L(value, aAJ, uC) {
	var pE = "number" == typeof value ? b5.aAK[value] : value;
	if (uC && b5.aAL() && (pE = uC), aAJ)
		for (var eY = aAJ.length, aA = 0; aA < eY; aA++)
			for (var er = 0; er < 3; er++) pE = pE.replace("{" + (10 * er + aA) + "}", aAJ[aA]);
	return pE
}

function bx() {
	this.data = new aAM;
	var aAN = (new aAO).L84,
		aAP = (this.aAK = aAN, !1);
	this.dU = function() {
		var eY, g;
		aAP = !1, "en" !== bh.km.data[12].value.split("-")[0].toLowerCase() ? bh.km.data[12].value === bh.km.data[145].value && 0 < bh.km.data[146].value && (eY = bh.km.data[146].value, (g = bh.pp.uI(eY, !1)).length === eY) && !!b8.pg.a1X(g) &&
			function(g) {
				for (var eY = g.length, j = 0; j < eY; j++) g[j] = g[j].replace("&#39;", "'");
				var aAV = bh.pp.uI(eY, !0);
				if (eY !== aAV.length) return !1;
				if (!b8.pg.a1X(aAV)) return !1;
				for (var kV = aAN.length, a7x = new Array(kV), aAW = kV === eY, g0 = Math.min(eY, kV), aA = 0; aA < kV; aA++)
					if (a7x[aA] = aAN[aA], aA < eY && aAV[aA] === a7x[aA]) a7x[aA] = g[aA];
					else {
						aAW = !1;
						for (var es = 0; es < g0; es++)
							if (aAV[es] === a7x[aA]) {
								a7x[aA] = g[es];
								break
							}
					} return b5.aAK = a7x, aAW
			}(g) || (aAP = !0) : b5.aAK = aAN
	}, this.dW = function() {
		be.dV(), aD.dV(), bc.dV(), bb.dV(), aN.dU(), bm = new dn
	}, this.aAL = function() {
		return this.aAK === aAN || !aAN.length
	}, this.aAX = function() {
		var aAY;
		aAP && (aAP = !1, 0 !== aAN.length) && (aAY = bh.km.data[12].value, ay.aAZ.aAa(0, aAY.slice(0, 20)))
	}, this.aAb = function(g) {
		g.length === aAN.length && (this.aAK = g, bh.qz.r0(145, bh.km.data[12].value), bh.qz.r0(146, g.length), bh.pp.uO(g, !1), bh.pp.uO(aAN, !0), 0 === aZ.a01()) && 5 === s.rm && s.x.aAc()
	}, this.aAd = function() {
		var aAe, g = navigator.languages;
		return g && g.length ? (aAe = Math.max(b5.data.aAf(g[0]), 0), 1 === g.length ? [aAe, aAe] : [aAe, Math.max(b5.data.aAf(g[1]), 0)]) : [0, 0]
	}
}

function aAM() {
	this.g = ["en", "aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts",
		"btx", "bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fj", "fo",
		"fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac", "kek",
		"kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk", "ml",
		"mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu", "rn", "ro",
		"rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl", "tn", "to", "tpi",
		"tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu", "nb", "fil", "sh"
	], this.aAg = function() {
		for (var aAh = [], g = this.g, eY = g.length, aA = 0; aA < eY; aA++) aAh.push(g[aA]);
		var aAi = bh.km.data[12].uC;
		for (aA = 0; aA < eY; aA++)
			if (aAh[aA] === aAi) {
				aAh.splice(aA, 1), eY--;
				break
			} aAh.sort(), eY++, aAh.unshift(aAi);
		try {
			if ("undefined" == typeof Intl) return aAh;
			for (aA = 0; aA < eY; aA++) {
				var pE = new Intl.DisplayNames([aAh[aA]], {
					type: "language"
				}).of(aAh[aA]);
				pE !== aAh[aA] && (aAh[aA] = aAh[aA] + ": " + pE)
			}
		} catch (e) {
			console.log("error 3646: " + e)
		}
		return aAh
	}, this.aAk = function(aAl) {
		for (var pE = bh.km.data[12].value, eY = aAl.length, aA = 0; aA < eY; aA++)
			if (pE === aAl[aA].split(":")[0]) return aA;
		return 0
	}, this.aAf = function(aAm) {
		if (!aAm || aAm.length < 2) return 0;
		aAm = aAm.split("-")[0].toLowerCase();
		for (var g = this.g, eY = g.length, aA = 0; aA < eY; aA++)
			if (aAm === g[aA]) return aA;
		return -1
	}
}

function aAO() {
	this.L84 = ["No Admin", "Helper", "Junior Moderator", "Moderator", "Senior Moderator", "Lead Moderator", "Head Admin", "Very Easy", "Easy", "Normal", "Hard", "Very Hard", "Impossible", "Type your message here...", "Send", "Activated", "Top Clan",
		"Best Clan Member", "Top Admin", "Best 1v1 Player", "Best Battle Royale Player", "Richest Player", "Lobby", "Team {0}", "Team {0} has won the game!", "You have earned a participation reward of {10} gold.",
		"The prize money has been distributed as follows:", "and {10} more", "You have earned {10} gold.", "You have earned {10} battle royale points!", "Clan {0} has won {11} points.", "You have earned {10} clan points!",
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
		"{0} still needs to be conquered!", "A neutral pixel at position ({10}, {11}) still needs to be conquered!", "Show Account", "Moderation Actions", "Report User", "Mention", "Loading", "{0} has defeated {1}!", "White Arena", "Black Arena",
		"Island", "Mountains", "Desert", "Swamp", "White Plains", "Cliffs", "Pond", "Halo", "Europe", "World", "Caucasia", "Africa", "Middle East", "Scandinavia", "North America", "South America", "Asia", "Australia", "Island Kingdom", "Refresh",
		"Public Profile", "🧈 Gold", "Monopolist", "Banker", "Miner", "Saver", "Starter", "Account Balance: ", "Rank: ", "Status: ",
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
	var ef, eh, j, sj, aAn, aAo, aAp, aAq, aAr, i, a2A, aAs;
	this.hF = !1, this.dU = function(pE, aAt) {
		if (1 === z.id && 13 <= z.dk && z.dk < 18) return aAt ? void(a2A = pE) : a2A !== pE ? void 0 : void z.uG.saveString(200, pE);
		aAt && (a2A = pE, (aAs = document.createElement("a")).appendChild(document.createTextNode(a2A)), this.hF = !0, aAs.title = a2A, aAs.target = "_blank", aAs.href = a2A, aAs.style.textAlign = "center", aAs.style.color = b9.me, aAs.style
			.position = "absolute", aAs.style.padding = "0px", aAs.style.margin = "0px", this.resize(), document.body.appendChild(aAs), bd.dc = !0)
	}, this.qo = function() {
		return !(!this.hF || (document.body.removeChild(aAs), this.hF = !1))
	}, this.gl = function(hq, hr) {
		return !!this.hF && ((hq < ef || hr < eh || ef + i < hq || eh + j < hr || ef + i - sj < hq && hr < eh + sj) && (bd.dc = !0, this.hF = !1, document.body.removeChild(aAs)), !0)
	}, this.resize = function() {
		var a4Q, aAu;
		this.hF && (aAq = Math.floor(.8 * (z.a0.qv() ? h.i > h.j ? .6 : .55 : .4) * h.pZ), sj = Math.floor(.15 * aAq), aAn = Math.floor(.35 * sj), aAo = Math.floor(.5 * sj), aAp = Math.floor(2.5 * aAo), j = sj + aAn + 3 * aAo, a4Q = b8.pX.rM(1,
			aAn / h.k), aAr = Math.floor(h.k * aP.measureText(a2A, a4Q)), aAu = i = (aAq < aAr ? aAr : aAq) + 2 * aAp, i = Math.min(i, h.i - 2 * (z.a0.qv() ? 2 : 1) * ba.gap), a4Q = b8.pX.rM(1, i / aAu * aAn / h.k), aAr = Math.floor(h.k *
			aP.measureText(a2A, a4Q)), ef = Math.floor((h.i - i) / 2), eh = Math.floor((h.j - j) / 2), aAs.style.font = a4Q, aAs.style.top = Math.floor((eh + 1.4 * aAo + sj) / h.k) + "px", aAs.style.left = Math.floor((ef + (i - aAr) /
			2) / h.k) + "px")
	}, this.te = function() {
		this.hF && (tf.fillStyle = b9.mb, tf.fillRect(ef, eh + sj, i, j - sj), tf.fillStyle = b9.ni, tf.fillRect(ef, eh, i, sj), tf.fillStyle = b9.me, tf.lineWidth = ba.xo, tf.strokeStyle = b9.me, tf.strokeRect(ef, eh, i, j), tf.fillRect(ef, eh +
			sj, i, ba.xo), tf.font = b8.pX.rM(1, .48 * sj), b8.pX.textAlign(tf, 1), b8.pX.textBaseline(tf, 1), tf.fillText("You are leaving Territorial.io!", Math.floor(ef + (i - .5 * sj) / 2), Math.floor(eh + .55 * sj)), aL.a4b(Math
			.floor(ef + i - .8 * sj), Math.floor(eh + .25 * sj), Math.floor(.5 * sj)), tf.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function dY() {
	var gap, a9G, ef = [0, 0, 0, 0, 0],
		eh = [0, 0, 0, 0, 0],
		mG = [1, 1, 1, 1, 1],
		f0 = [!0, !0, !0, !1, !1],
		et = (this.fJ = [!0, !0, !0, !1, !1], null);
	this.aAv = function(a1i, aAw) {
		et = a1i, f0 = aAw, a9G = [bI.aAx, bI.zw, bI.aAy, bI.aAy, bI.aAz], this.dU()
	}, this.dU = function() {
		if (aa.sE()) {
			var aA, rt = Math.floor((z.a0.qv() ? .261 : .195) * h.pZ),
				ru = Math.floor(.9 * rt),
				a6w = Math.floor(.17 * ru);
			if (gap = z.a0.qv() ? 2 * ba.gap : ba.gap, mG[0] = rt / et[0].width, mG[1] = ru / et[1].width, mG[2] = a6w / et[2].height, mG[3] = a6w / et[3].height, mG[4] = a6w / et[4].height, mG[2] *= 1.7, mG[3] *= 1.07, ef[0] = gap, ef[1] = gap,
				ef[2] = gap, ef[3] = gap, ef[4] = Math.floor(2 * gap + mG[3] * et[3].width), eh[0] = gap, eh[1] = eh[0] + gap + mG[0] * et[0].height, eh[2] = eh[1] + gap + mG[1] * et[1].height, eh[3] = eh[2] + gap + mG[2] * et[2].height, eh[4] =
				eh[3], !f0[0])
				for (aA = 0; aA < 5; aA++) eh[aA] -= mG[0] * et[0].height + gap;
			if (!f0[1])
				for (aA = 2; aA < 5; aA++) eh[aA] -= mG[1] * et[1].height + gap
		}
	}, this.hF = function() {
		return !(7 === aZ.a01() && z.a0.qv())
	}, this.gl = function(hq, hr) {
		if (et && this.hF())
			for (var aA = f0.length - 1; 0 <= aA; aA--)
				if (f0[aA] && this.fJ[aA] && ef[aA] < hq && eh[aA] < hr && hq < ef[aA] + mG[aA] * et[aA].width && hr < eh[aA] + mG[aA] * et[aA].height) return s.t(9, s.rm, new aB0("You are leaving Territorial.io.", b8.pX.a29(a9G[aA]))), !0;
		return !1
	}, this.te = function() {
		if (et && this.hF()) {
			var aA;
			for (tf.imageSmoothingEnabled = !0, aA = 0; aA < 5; aA++) f0[aA] && this.fJ[aA] && (tf.setTransform(mG[aA], 0, 0, mG[aA], ef[aA], eh[aA]), tf.drawImage(et[aA], 0, 0));
			tf.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function dR() {
	this.aB1 = 0, this.aB2 = null, this.ss = null, this.qh = null, this.x = null, this.tE = null, this.sq = null, this.message = null, this.aB3 = null, this.qn = null, this.aB4 = new aB5, this.a05 = 0, this.dU = function() {
		this.aB1 = bE.rp.vA(bh.km.data[105].value), this.ss = new aB6, this.qh = new aB7, this.x = new aB8, this.tE = new aB9, this.sq = new aBA, this.message = new aBB, this.aB3 = new aBC, this.qn = new aBD, this.x.dU(), bn.dU(), this.a05 = 1, z
			.a0.setState(1), aZ.setState(0)
	}, this.t8 = function() {
		this.qn && this.qn.t8(), this.aB2 = null, this.ss = null, this.qh = null, this.x = null, this.tE = null, this.sq = null, this.message = null, this.aB3 = null, this.qn = null, this.a05 = 0, bn.t8(), z.a0.setState(0)
	}
}

function aB6() {
	function aBX(g, s7, s8) {
		var aBY = g[s7];
		g[s7] = g[s8], g[s8] = aBY
	}
	this.st = [
		[],
		[],
		[],
		[]
	], this.su = [0, 0, 0, 0], this.aBE = function(aBF, rk, username, sz, zj, aBG, elo, color, ui, aBH) {
		this.st[aBF].push(this.aBI(rk, username, sz, zj, aBG, elo, color, ui, aBH)), bl.aB1 === rk && (bl.aB2 = this.st[aBF][this.st[aBF].length - 1]), bl.x.aBJ += 29 === s.rm && bl.x.qa[0] === aBF && 1 === bl.x.qa[2]
	}, this.aBI = function(rk, username, sz, zj, aBG, elo, color, ui, aBH) {
		return {
			rk: rk,
			username: username,
			sz: sz,
			zj: zj,
			aBG: aBG,
			elo: elo,
			color: color,
			ui: ui,
			aBH: aBH
		}
	}, this.aBK = function(dx, aBF, sz, zj, aBG, elo, ui) {
		dx = this.st[aBF][dx];
		dx.sz = sz, dx.zj = zj, dx.aBG = aBG, dx.elo = elo, dx.ui = ui, bl.x.aBJ += 29 === s.rm && bl.x.qa[0] === aBF && 1 === bl.x.qa[2]
	}, this.aBL = function(dx, aBF, aBM) {
		var dx = this.st[aBF][dx],
			aBN = dx.username,
			aBO = "Redacted " + bD.rp.y5(dx.rk, 2);
		dx.username = aBM ? "[" + b8.zS.zX(aBN) + "] " + aBO : aBO, aBN.indexOf("Redacted") < 0 && (dx.aBP = aBN, dx.aBQ = 3), bl.x.aBJ += 29 === s.rm && bl.x.qa[0] === aBF && 1 === bl.x.qa[2]
	}, this.aBR = function(dx, aBS, aBT) {
		var player = this.st[aBS][dx];
		this.aBU(dx, aBS), this.st[aBT].push(player), bl.x.aBJ += 29 === s.rm && bl.x.qa[0] === aBT && 1 === bl.x.qa[2]
	}, this.aBU = function(dx, aBS) {
		var ss = this.st[aBS];
		dx >= this.su[aBS] ? ss[dx] = ss[ss.length - 1] : (this.su[aBS]--, 2 === aBS ? (ss.splice(this.su[aBS] + 1, 0, ss[ss.length - 1]), ss.splice(dx, 1)) : (ss[dx] = ss[this.su[aBS]], ss[this.su[aBS]] = ss[ss.length - 1])), ss.pop(), bl.x
			.aBJ += 29 === s.rm && bl.x.qa[0] === aBS && 1 === bl.x.qa[2]
	}, this.aBV = function(dx, qZ) {
		bl.x.aBJ += 29 === s.rm && bl.x.qa[0] === qZ && 1 === bl.x.qa[2];
		var ss = this.st[qZ],
			pP = ss[dx];
		if (2 === qZ)
			if (dx >= this.su[qZ]) {
				for (var aBW = this.su[qZ], elo = pP.elo; aBW && elo > ss[aBW - 1].elo;) aBW--;
				ss[dx] = ss[this.su[qZ]], ss.splice(this.su[qZ]++, 1), ss.splice(aBW, 0, pP)
			} else ss.splice(this.su[qZ]--, 0, pP), ss.splice(dx, 1);
		else dx >= this.su[qZ] ? aBX(ss, this.su[qZ]++, dx) : aBX(ss, --this.su[qZ], dx)
	}, this.aBZ = function(rk) {
		for (var st = this.st, eY = st.length, aA = 0; aA < eY; aA++)
			for (var ss = st[aA], kV = ss.length, er = 0; er < kV; er++)
				if (rk === ss[er].rk) return ss[er];
		return null
	}
}

function aB5() {
	this.dd = function(dx) {
		if ((su = bl.ss.su[dx]) < 2 && !__fx.customLobby.isActive()) return !1;
		var qb = bl.x.qc[dx],
			aBa = 9 === qb.aBb ? 333 : 512,
			su = Math.min(su, aBa);
		8 === qb.aBb && (su -= su % 2);
		aBa = bl.ss.st[dx].splice(0, su), bl.ss.su[dx] -= su, su = function(aBc) {
			if (bl.aB2) {
				if (__fx.customLobby.isActive()) return __fx.customLobby.getPlayerId();
				for (var eY = aBc.length, rk = bl.aB2.rk, aA = 0; aA < eY; aA++)
					if (aBc[aA].rk === rk) return aA
			}
			return -1
		}(aBa);
		return -1 === su ? (bl.x.aBJ += 29 === s.rm && bl.x.qa[0] === dx && 1 === bl.x.qa[2], !1) : (8 === qb.aBb && (qb.aBf = (qb.aBf + (su >> 1)) % 1024, dx = su - su % 2, su %= 2, aBa = aBa.slice(dx, 2 + dx)), av.dU(qb, aBa, su), !0)
	}, this.aBg = function(qb, aBc, aBd) {
		var eb = aC.data = new a3K,
			aBk = (eb.spawningSeed = qb.spawningSeed, qb.aBb < 7 ? (eb.gameMode = 1, eb.numberTeams = qb.aBb + 2) : 9 === qb.aBb ? (eb.gameMode = eb.isZombieMode = 1, eb.numberTeams = 2) : (eb.gameMode = 0, eb.battleRoyaleMode = 7 === qb.aBb ?
				0 : 10 === qb.aBb ? 1 : 2), eb.selectedPlayer = aBd, eb.isContest = qb.aBh, eb.mapType = bQ.aBi(qb.eE) ? 0 : 1, bQ.aBj(eb, qb.eE), eb.mapSeed = qb.mapSeed, eb.humanCount = aBc.length);
		eb.selectableSpawn = 1 === eb.gameMode || aBk < 100, eb.colorsData = new Uint32Array(aBk), eb.playerNamesData = new Array(aBk);
		for (var aA = 0; aA < aBk; aA++) eb.colorsData[aA] = aBc[aA].color, eb.playerNamesData[aA] = aBc[aA].username;
		if (2 === eb.battleRoyaleMode)
			for (eb.elo = new Uint16Array(aBk), aA = 0; aA < aBk; aA++) eb.elo[aA] = aBc[aA].elo;
		aZ.setState(8), bQ.a6(qb.eE, eb.mapSeed), aC.a3O(), aC.a3N = 2
	}
}

function aB7() {
	var dp = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player"],
		aBl = [b9.ms, b9.ms, b9.mt, b9.nM, b9.nN, b9.n9, b9.nS, b9.mt, b9.nk, b9.na],
		aBm = [
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
		aBn = ["Your account is too new!", "The server couldn't process your request.", "Spam detected!", "You are muted!", "Player couldn't be found.", "You don't have permission for this operation!", "Not enough gold!", "Action cancelled!"];
	this.qj = function(aBo) {
		var aBp, zY;
		return aBo.id < 5 && (aBp = "@" + bD.rp.y5(aBo.rk, 5)), 0 === aBo.id ? aBp + ": " + aBo.p : 1 === aBo.id ? (zY = "@" + bD.rp.y5(aBo.target, 5), 0 === aBo.aBq ? 32768 <= aBo.value ? aBp + " voted with " + (aBo.value - 32768 + 1) +
				" gold against " + zY + " to weaken the latter's admin position." : aBp + " voted with " + (aBo.value + 1) + " gold for " + zY + " to strengthen the latter's admin position." : 1 === aBo.aBq ? aBp + " sent " + Math.floor(aBo
					.value / 100) + " Gold to " + zY + "." : aBp + " voted with " + aBo.value + " points for " + zY + " to acknowledge the latter as clan leader.") : 2 === aBo.id ? 0 === aBo.aBq ? aBp + " was muted. Duration: 1 Hour" : 1 === aBo
			.aBq ? "The username of " + aBp + " was redacted. Duration: 1 Day" : aBp + " was kicked." : 3 === aBo.id ? aBp + bm.e0(aBo.aBq, bm.du[aBo.aBq][aBo.value]) + "@" + bD.rp.y5(aBo.target, 5) + bm.e2(aBo.aBq, bm.du[aBo.aBq][aBo.value]) :
			4 === aBo.id ? aBp + bm.e0(5, bm.du[5][aBo.aBq]) + "@" + bD.rp.y5(aBo.target, 5) + bm.e2(5, bm.du[5][aBo.aBq]) : 5 === aBo.id ? aBn[aBo.aBq] : 6 === aBo.id ? "You are about to mention " + aBo.value + " player" + (1 === aBo.value ?
				"" : "s") + ". This action will cost " + (Math.max(20 * aBo.value, 20) / 100).toFixed(2) + " Gold. Proceed? (yes / no)" : void 0
	}, this.qi = function(aBo, a5d) {
		return {
			id: aBo.id,
			p: a5d,
			aBr: 0,
			fontSize: 1,
			qm: 0,
			aBs: aBo.id ? b9.nL : b9.me
		}
	}, this.sx = function(player, qZ) {
		return (2 === qZ ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username
	}, this.sy = function(sz) {
		return aBl[sz]
	}, this.aBt = function(sz, zj) {
		return sz < 3 || 7 === sz ? aBm[sz][0] : 4 === sz ? aBm[sz][zj < 1 ? 0 : zj < 10 ? 1 : 2] : aBm[sz][zj < 10 ? 0 : 1]
	}, this.aBu = function(zj) {
		return 0 === zj
	}, this.aBZ = function(qZ, rk) {
		for (var st = bl.ss.st, ss = st[qZ], eY = ss.length, aA = 0; aA < eY; aA++)
			if (rk === ss[aA].rk) return ss[aA];
		for (var es = 0; es < st.length; es++)
			if (qZ !== es)
				for (eY = (ss = st[es]).length, aA = 0; aA < eY; aA++)
					if (rk === ss[aA].rk) return ss[aA];
		return null
	}, this.t0 = function(pP) {
		return !!bl.aB2 && pP.rk === bl.aB2.rk
	}, this.aBv = function(ss, aBw, aBx) {
		var zV = [];
		loop: for (var aA = aBw; aA < aBx; aA++) {
			var zW = b8.zS.zX(ss[aA].username);
			if (zW) {
				for (var es = zV.length - 1; 0 <= es; es--)
					if (zW === zV[es].name) {
						zV[es].g0++;
						continue loop
					} zV.push({
					name: zW,
					g0: 1
				})
			}
		}
		if (zV.sort(function(er, es) {
				return es.g0 - er.g0
			}), 0 === zV.length) return "";
		for (var pE = zV[0].name + ": " + zV[0].g0, aA = 1; aA < zV.length; aA++) pE += "   " + zV[aA].name + ": " + zV[aA].g0;
		return pE
	}, this.aBy = function(sz, zj, aBG) {
		return 0 === dp[sz].length ? "Rank: " + (zj + 1) : dp[sz] + " Rank: " + (zj + 1) + (3 !== sz && aBG < 100 ? "   " + dp[3] + " Rank: " + (aBG + 1) : "")
	}
}

function aBA() {
	var rF = 0,
		aBz = 0,
		aC0 = 0,
		aC1 = null,
		aC2 = null;

	function aC5(pP, aC6, aC7) {
		var pE = pP.username;
		return (pE += "   " + bl.qh.aBy(pP.sz, pP.zj, pP.aBG)) + function(pP) {
			pP = pP.ui;
			if (pP < 1e3) return "   Gold: " + pP;
			if ((pP %= 1024) < 1e3) return "   Gold: " + pP + "k";
			return "   Gold: " + (pP - 999) + "M"
		}(pP) + ("   IP: " + bD.rp.y5(pP.aBH, 2)) + ("   " + ["🟥 Offline", "🟩 Online"][aC7 ? aBz : aC4(pP, aC6)])
	}

	function aC4(pP, aC6) {
		return aBz = aC6 || bl.ss.aBZ(pP.rk) ? 1 : 0
	}
	this.aC3 = function() {
		!rF || aBz === aC4(aC2) && aC0 === aC2.ui || (aC0 = aC2.ui, aC1.show(-1, -1, aC5(aC2, 0, 1), 1, 1))
	}, this.t1 = function(e, pP, aC6) {
		var a73 = e.target.getBoundingClientRect();
		this.show(a73.left, a73.top, pP, 0, aC6), e.target.addEventListener("mouseleave", function remove() {
			e.target.removeEventListener("mouseleave", remove), bl.sq && bl.sq.qo(1)
		})
	}, this.show = function(ef, eh, pP, rJ, aC6) {
		aC1 = aC1 || new rD, aC0 = (aC2 = pP).ui, aC1.show(ef, eh, aC5(pP, aC6), rJ), rF = 1
	}, this.qo = function(rP) {
		aC1 && aC1.qo(rP) && (rF = 0, aC2 = null)
	}
}

function aB8() {
	function aCC(aCF) {
		bl.x.aBJ && 1 === bl.x.qa[2] && s.aCG(29).aCH(), bl.x.aBJ = 0, s.aCG(29).aCI(), 0 !== bl.x.qc[bl.x.qa[0]].sd && !aCF || s.aCG(29).aCJ(), bl.sq.aC3()
	}
	this.qc = new Array(4), this.qa = [0, 0, 1, 0], this.aBJ = 0, this.aC9 = [0, 0], this.dU = function() {
		for (var aA = 0; aA < this.qc.length; aA++) this.qc[aA] = new aCA;
		this.qa[0] = bh.km.data[158].value
	}, this.aCB = function() {
		aCC(!0)
	}, this.aCD = function() {
		for (var aA = 0; aA < bl.x.qc.length; aA++) {
			var qb = bl.x.qc[aA];
			0 === qb.sd ? qb.aCK = 0 : (qb.aCL = Math.max(qb.aCL - qb.aCK % 2, 0), qb.aCK++)
		}
		aCC(!1)
	}, this.aCM = function(qZ) {
		this.qa[0] !== qZ || this.qa[2] || s.aCG(29).aCN()
	}
}

function aBC() {
	var aCO = 0,
		aCP = "",
		aCQ = 0,
		aCR = 0,
		aCS = 0;

	function aCU(a5d) {
		ay.aCf.aCg(3, a5d)
	}

	function aCd(g0) {
		aCO = 1, bl.message.aCh({
			id: 6,
			value: g0
		})
	}

	function aCX(p) {
		var aCk = new RegExp("\\B@[-\\w\\[\\]]+", "g");
		return p.match(aCk)
	}
	this.yr = function(p) {
		var aCT, g, aCZ;
		if (aCO) return aCO = 0, "yes" === (aCT = p.toLowerCase()) || "y" === aCT ? void aCU(aCP) : void bl.message.aCh({
			id: 5,
			aBq: 7
		});
		!(p.indexOf("@") < 0) && (aCT = aCX(p)) ? (aCP = p, g = function(aCW) {
			for (var eY = aCW.length, aCi = [0, 0, 0, 0], aA = 0; aA < eY; aA++)
				for (var i = aCW[aA], er = 0; er < 4; er++) i === "@room" + (er + 1) && (aCi[er] = 1);
			if ((aCR = b8.pg.a1M(aCi)) % 4 == 0) return b8.pg.a1e(bl.ss.st);
			for (er = 0; er < 4; er++) aCi[er] = aCi[er] ? bl.ss.st[er] : [];
			return b8.pg.a1e(aCi)
		}(aCT), function(aCW, aCZ, p) {
			if (!aCQ) return;
			for (var eY = aCZ.length, aA = 0; aA < eY; aA++) 2 === aCZ[aA].id && (p = p.replace(aCW[aCZ[aA].dx], "@" + aCZ[aA].f0));
			return aCO = 1, aCU((aCP = p).slice(0, 126) + "|"), 1
		}(aCT, aCZ = function(aCW) {
			for (var aCZ = [], eY = (aCS = aCQ = 0, aCW.length), aA = 0; aA < eY; aA++) {
				var i = aCW[aA],
					kV = i.length;
				b8.zS.startsWith(i, "@[") ? kV <= 9 && b8.zS.a2D(i, "]") && aCZ.push({
					id: 0,
					f0: i.substring(2, kV - 1).toUpperCase()
				}) : 6 === kV ? b8.zS.startsWith(i, "@room") || (aCS++, aCZ.push({
					id: 1,
					f0: bE.rp.vA(i.substring(1))
				})) : 1 < kV && kV < 5 && 0 <= (kV = b5.data.aAf(i.substring(1))) && (aCZ.push({
					id: 2,
					f0: kV,
					dx: aA
				}), aCQ = 1)
			}
			return aCZ
		}(aCT), p) || (0 === aCZ.length ? aCR || function(aCW) {
			for (var eY = aCW.length, aA = 0; aA < eY; aA++) {
				var i = aCW[aA];
				if ("@all" === i || "@everyone" === i) return 1
			}
			return
		}(aCT) ? aCd(g.length) : aCU(p) : aCT.length === aCS ? aCU(p) : (function(g, aCZ) {
			var kV = aCZ.length;
			if (0 === kV) return;
			var eY = g.length;
			loop: for (var aA = eY - 1; 0 <= aA; aA--) {
				for (var er = 0; er < kV; er++)
					if (0 === aCZ[er].id) {
						if (aCZ[er].f0 === b8.zS.zX(g[aA].username)) continue loop
					} else if (1 === aCZ[er].id && aCZ[er].f0 === g[aA].rk) continue loop;
				g[aA] = g[--eY], g.pop()
			}
		}(g, aCZ), aCd(g.length)))) : aCU(p)
	}, this.aCl = function(p) {
		var aCW = aCX(p);
		if (aCW)
			for (var a4 = new RegExp("^[0-9]+$"), eY = aCW.length, aA = 0; aA < eY; aA++) {
				var i = aCW[aA].substring(1),
					kV = i.length;
				1 <= kV && kV <= 3 && a4.test(i) && (kV = parseInt(i, 10), !isNaN(kV)) && 0 <= kV && kV < b5.data.g.length && (p = p.replace("@" + i, "@" + b5.data.g[kV]))
			}
		return p
	}
}

function aBB() {
	var aCm, aCn = [],
		aCo = -1,
		aCp = 0,
		aCq = 0;

	function aCu() {
		aCp = bd.e7, (3 === this.t5 ? (aCq = 1, aCt) : (aCo = (aCn.length + aCo + 2 * this.t5 - 1) % aCn.length, aCs))()
	}

	function aCs() {
		0 !== aCn.length && (aCq = 0, aCm && aCm.t8(), (aCm = new t2(aCu)).r0(aCo, aCn.length), aCm.show(aCn[aCo]), bl.message.resize())
	}

	function aCt() {
		aCm && aCm.t8(), (aCm = new t9(aCs)).r0(aCn.length), aCm.show(), bl.message.resize()
	}
	this.aCh = function(aBo) {
		var es, aBo = bl.qh.qi(aBo, bl.qh.qj(aBo));
		5 === aBo.id || 6 === aBo.id ? s.aCG(29).aCr().ql(aBo) : (es = bd.e7 < aCp + 2e4, aCo !== aCn.length - 1 && es || (aCo = aCn.length), aCn.push(aBo), bh.km.data[14].value || bn.play(), aCm && (bh.km.data[13].value || aCq && es ? aCm.r0(aCn
			.length) : aCs()))
	}, this.show = function() {
		aCt()
	}, this.qo = function() {
		aCo = aCn.length - 1, aCm && aCm.t8(), aCm = null
	}, this.resize = function() {
		aCm && aCm.resize()
	}
}

function aB9() {
	var aCv = null,
		aCw = null,
		aCx = 0,
		aCy = 0,
		aCz = null;

	function aD1() {
		0 !== aCw.sz && (bl.tE.qo(), s.t(8, 29, new rn(25, {
			ro: 0,
			rk: bD.rp.y5(aCw.rk, 5),
			rl: 0
		}, 29)))
	}

	function aD2() {
		var ef = aCv.ef,
			eh = aCv.eh;
		bl.tE.qo(), aCv = new tA([new v("Kick User", function() {
			aD8(0, 0)
		}, aDD(0, 0)), new v("Block Chat", aD9, aDE(1)), new v("Censor Username", aDA, aDE(2)), new v("Elo Deduction", aDB, aDE(3)), new v("Gold Seizure", aDC, aDE(4))]), aD7(ef, eh), aCx = 2, aCy = 1
	}

	function aDE(id) {
		return !bl.aB2 || bl.qh.t0(aCw) ? 1 : 4 === id && 9 === bl.aB2.sz && bl.aB2.zj < aCw.zj ? 0 : bl.aB2.aBG >= aCw.zj || 0 === id && aCw.zj < 200 ? 1 : 1 - bm.dv(id, bl.aB2.aBG, 0)
	}

	function aD5() {
		return !bl.aB2 || bl.qh.t0(aCw) ? 1 : 0
	}

	function aDD(id, dx) {
		var zj;
		return !bl.aB2 || bl.qh.t0(aCw) || (zj = bl.aB2.aBG, (zj = 4 === id && 9 === bl.aB2.sz ? Math.min(bl.aB2.zj, zj) : zj) >= aCw.zj) ? 1 : 1 - bm.dv(id, zj, dx)
	}

	function aD4() {
		var ef = aCv.ef,
			eh = aCv.eh,
			aDF = (bl.tE.qo(), aD5());
		aCv = new tA([new v(bm.du[5][0], function() {
			aD8(5, 0)
		}, aDF), new v(bm.du[5][1], function() {
			aD8(5, 1)
		}, aDF), new v(bm.du[5][2], function() {
			aD8(5, 2)
		}, aDF), new v(bm.du[5][3], function() {
			aD8(5, 3)
		}, aDF)]), aD7(ef, eh), aCy = aCx = 2
	}

	function aD6() {
		29 === s.rm && s.aDG().aB3(bD.rp.y5(aCw.rk, 5))
	}

	function aD8(id, value) {
		ay.aCf.aCg(5, {
			id: id,
			value: value,
			rk: aCw.rk
		})
	}

	function aD9() {
		var ef = aCv.ef,
			eh = aCv.eh;
		bl.tE.qo(), aCv = new tA([new v(bm.du[1][0], function() {
			aD8(1, 0)
		}, aDD(1, 0)), new v(bm.du[1][1], function() {
			aD8(1, 1)
		}, aDD(1, 1)), new v(bm.du[1][2], function() {
			aD8(1, 2)
		}, aDD(1, 2)), new v(bm.du[1][3], function() {
			aD8(1, 3)
		}, aDD(1, 3)), new v(bm.du[1][4], function() {
			aD8(1, 4)
		}, aDD(1, 4))]), aD7(ef, eh), aCx = 3, aCy = 1
	}

	function aDA() {
		var ef = aCv.ef,
			eh = aCv.eh;
		bl.tE.qo(), aCv = new tA([new v(bm.du[2][0], function() {
			aD8(2, 0)
		}, aDD(2, 0)), new v(bm.du[2][1], function() {
			aD8(2, 1)
		}, aDD(2, 1)), new v(bm.du[2][2], function() {
			aD8(2, 2)
		}, aDD(2, 2))]), aD7(ef, eh), aCx = 3, aCy = 2
	}

	function aDB() {
		var ef = aCv.ef,
			eh = aCv.eh;
		bl.tE.qo(), aCv = new tA([new v(bm.du[3][0], function() {
			aD8(3, 0)
		}, aDD(3, 0)), new v(bm.du[3][1], function() {
			aD8(3, 1)
		}, aDD(3, 1)), new v(bm.du[3][2], function() {
			aD8(3, 2)
		}, aDD(3, 2))]), aD7(ef, eh), aCy = aCx = 3
	}

	function aDC() {
		var ef = aCv.ef,
			eh = aCv.eh;
		bl.tE.qo(), aCv = new tA([new v(bm.du[4][0], function() {
			aD8(4, 0)
		}, aDD(4, 0)), new v(bm.du[4][1], function() {
			aD8(4, 1)
		}, aDD(4, 1)), new v(bm.du[4][2], function() {
			aD8(4, 2)
		}, aDD(4, 2)), new v(bm.du[4][3], function() {
			aD8(4, 3)
		}, aDD(4, 3)), new v(bm.du[4][4], function() {
			aD8(4, 4)
		}, aDD(4, 4))]), aD7(ef, eh), aCx = 3, aCy = 4
	}

	function aD7(ef, eh, tG) {
		aCv.show(ef, eh, tG), bl.sq.show(aCv.ef, aCv.eh, aCw, 1)
	}
	this.aD0 = function(e, pP) {
		aCx = 1, aCw = pP, aCv = new tA([new v(L(128), aD1, 0 === aCw.sz ? 1 : 0), new v(L(129), aD2, function() {
			if (!bl.aB2) return 1;
			if (bl.qh.t0(aCw)) return 1;
			if (!(9 === bl.aB2.sz && bl.aB2.zj < aCw.zj)) {
				if (100 <= bl.aB2.aBG) return 1;
				if (bl.aB2.aBG >= aCw.zj) return 1
			}
			return 0
		}()), new v(L(130, 0, "Report"), aD4, aD5()), new v(L(131), aD6, 0)]), aD7((aCz = {
			clientX: e.clientX,
			clientY: e.clientY
		}).clientX, aCz.clientY, 1)
	}, this.a0v = function(code) {
		if (29 !== s.rm) return !1;
		if (!aCw) return !1;
		if (!(code.length < 1))
			if ("Escape" === code) this.qo();
			else if (b8.zS.startsWith(code, "Numpad") || b8.zS.startsWith(code, "Digit")) {
			code = parseInt(code[code.length - 1], 10);
			if (!isNaN(code))
				if (0 === aCx) this.aD0(aCz, aCw);
				else {
					if (!aCv) return !1;
					1 === aCx ? code <= 1 ? aD1() : 2 === code ? aD2() : 3 === code ? aD4() : (aD6(), this.qo()) : 2 === aCx ? 1 === aCy ? code <= 1 ? (aD8(0, 0), this.qo()) : (2 === code ? aD9 : 3 === code ? aDA : 4 === code ? aDB : aDC)() : (
						aD8(5, bJ.p5(code - 1, 0, 3)), this.qo()) : (aD8(aCy, bJ.p5(code - 1, 0, bm.du[aCy].length - 1)), this.qo())
				}
		}
		return !0
	}, this.qo = function() {
		aCx = 0, aCv && aCv.qo(), aCv = null, bl.sq.qo()
	}
}

function aCA() {
	this.sd = 0, this.eE = 0, this.mapSeed = 0, this.aBb = 0, this.aDH = 0, this.aDI = 0, this.aBh = 0, this.aCL = 0, this.spawningSeed = 0, this.a07 = 0, this.aBf = 0, this.qd = [], this.qe = 1048575, this.aCK = 0, this.aDJ = [{
		eE: 0,
		mapSeed: 0,
		aBb: 0,
		e7: 100,
		aBh: 0
	}, {
		eE: 1,
		mapSeed: 0,
		aBb: 1,
		e7: 200,
		aBh: 0
	}, {
		eE: 2,
		mapSeed: 0,
		aBb: 2,
		e7: 300,
		aBh: 0
	}, {
		eE: 3,
		mapSeed: 0,
		aBb: 3,
		e7: 400,
		aBh: 0
	}, {
		eE: 0,
		mapSeed: 0,
		aBb: 9,
		e7: 500,
		aBh: 0
	}, {
		eE: 1,
		mapSeed: 0,
		aBb: 10,
		e7: 600,
		aBh: 0
	}, {
		eE: 2,
		mapSeed: 0,
		aBb: 8,
		e7: 700,
		aBh: 0
	}, {
		eE: 3,
		mapSeed: 0,
		aBb: 3,
		e7: 800,
		aBh: 0
	}]
}

function aBD() {
	var aDK = [],
		rz = [];

	function aDQ(pE, pP, et) {
		var aDR = function(pE) {
				var rk = bE.rp.vA(pE),
					aDR = bl.ss.aBZ(rk);
				if (aDR) {
					for (aDK.push(aDR); 50 < aDK.length;) aDK.shift();
					return aDR
				}
				for (var aA = aDK.length - 1; 0 <= aA; aA--)
					if (rk === aDK[aA].rk) return aDR = aDK[aA], aA < 40 && aDK.push(aDR), aDR;
				return bl.ss.aBI(rk, pE, 1, 999999, 999999, 0, 0, 0, 0)
			}(pE),
			pE = (0 === et && 0 === pP.id && pP.qm && (pP.fontSize = bl.qh.aBt(aDR.sz, aDR.zj), pP.aBr = bl.qh.aBu(aDR.zj)), document.createElement("span"));
		return pE.textContent = function(aDR, pP, et) {
			pP = aDR.aBQ && aDR.aBQ-- && (2 === pP.id || (3 === pP.id || 4 === pP.id) && 0 !== et);
			return aDR.username + (pP ? " (" + aDR.aBP + ")" : "")
		}(aDR, pP, et), pE.style.display = "inline-block", pE.style.color = bl.qh.sy(aDR.sz), pE.style.cursor = "pointer", pE.style.margin = "0", pE.style.font = "inherit", pE.style.minWidth = pE.style.minHeight = "1em", bl.qh.t0(aDR) && (pE
			.style.textDecoration = "underline"), bl.qh.aBu(aDR.zj) && (pE.style.fontWeight = "bold"), pE.onclick = function(e) {
			bl.tE.aD0(e, aDR)
		}, bH.q0() || (pE.onmouseover = function(e) {
			bl.sq.t1(e, aDR)
		}), rz.push(pE), pE
	}

	function aDP(p, pP) {
		var qW = document.createElement("span");
		return qW.textContent = p, qW.style.color = pP.aBs, qW.style.margin = "0", qW.style.font = "inherit", qW
	}
	this.t8 = function() {
		for (var aA = 0; aA < rz.length; aA++) rz[aA].onclick = rz[aA].onmouseover = null;
		rz[aA] = null
	}, this.transform = function(pP) {
		for (var pC = document.createElement("div"), aDL = function(pP) {
				var p = pP.p,
					aDL = [];
				for (;;) {
					var et = function aDO(p, position) {
						position = p.indexOf("@", position);
						if (position < 0) return -1;
						var pE = p.substring(position + 1, position + 6);
						if (5 !== pE.length) return aDO(p, position + 1);
						if (b8.zS.startsWith(pE, "room")) return aDO(p, position + 1);
						var aDV = new RegExp("^[a-zA-Z0-9_-]+$");
						if (!aDV.test(pE)) return aDO(p, position + 1);
						aDV = p.substring(position + 6, position + 7);
						if (1 !== aDV.length) return position;
						pE = new RegExp("^[ :!.]+$");
						if (!pE.test(aDV)) return aDO(p, position + 1);
						return position
					}(p, 0);
					if (-1 === et) {
						aDL.push(aDP(p, pP));
						break
					}
					0 === et ? aDL.push(aDQ(p.substring(1, 6), pP, et)) : (aDL.push(aDP(p.substring(0, et), pP)), aDL.push(aDQ(p.substring(et + 1, et + 6), pP, et))), p = p.substring(et + 6)
				}
				return aDL
			}(pP), aA = 0; aA < aDL.length; aA++) pC.appendChild(aDL[aA]);
		pC.style.margin = "0.6em 0.6em", pP.qm && (pC.style.marginLeft = pC.style.marginRight = "inherit"), pC.style.font = "inherit";
		var aDN = 0 < pP.id;
		return pP.aBr && (pC.style.fontWeight = "bold"), aDN && (pC.style.paddingLeft = "0.7em"), aDN && (pC.style.fontStyle = "italic"), pC.style.fontSize = pP.fontSize.toFixed(2) + "em", pC
	}
}

function cK() {
	var aDY, aDZ, aDa;

	function aDf(aA) {
		var button = aX.q7[aA],
			ef = button.ef,
			eh = button.eh,
			i = button.i,
			j = button.j;
		tf.fillStyle = button.aDd, tf.fillRect(ef, eh, i, j), aA === aDY && (tf.fillStyle = aDa, tf.fillRect(ef, eh, i, j)), tf.lineWidth = ba.xo, tf.strokeStyle = aDZ, tf.strokeRect(ef, eh, i, j),
			function(button) {
				var ef = button.ef,
					eh = button.eh,
					i = button.i,
					j = button.j;
				b8.pX.textAlign(tf, 1), b8.pX.textBaseline(tf, 1), tf.font = button.font, tf.fillStyle = aDZ, tf.fillText(button.a5d, Math.floor(ef + i / 2), Math.floor(eh + j / 2 + .1 * button.fontSize))
			}(button)
	}
	this.i = 0, this.j = 0, this.eh = 0, this.gap = 0, this.dU = function() {
		aDY = -1, aDZ = b9.me, aDa = "rgba(255,255,255,0.16)", this.q7 = new Array(7), this.j = Math.floor((z.a0.qv() ? .123 : .093) * h.pZ), this.i = Math.floor((z.a0.qv() ? 3.96 : 4.2) * this.j), this.gap = Math.floor(.025 * this.i);
		var aDb = Math.floor(.26 * this.j),
			aDc = b8.pX.rM(1, aDb);
		this.q7[0] = {
			ef: 0,
			eh: 0,
			i: Math.floor(.6 * this.i - this.gap / 2),
			j: this.j,
			a5d: "Multiplayer",
			font: aDc,
			aDd: "rgba(22,88,22,0.8)",
			fontSize: aDb
		}, aDb = Math.floor(.18 * this.j), aDc = b8.pX.rM(1, aDb), this.q7[1] = {
			ef: 0,
			eh: 0,
			i: this.i - this.q7[0].i - this.gap,
			j: this.j,
			a5d: "Single Player",
			font: aDc,
			aDd: "rgba(22,88,88,0.8)",
			fontSize: aDb
		}, this.q7[2] = {
			ef: 0,
			eh: 0,
			i: this.i,
			j: Math.floor(.3 * this.j),
			a5d: "",
			font: this.q7[1].font,
			aDd: "rgba(100,0,0,0.8)",
			fontSize: this.q7[1].fontSize
		}, this.q7[3] = {
			ef: 0,
			eh: 0,
			i: this.i,
			j: this.j,
			a5d: "Back",
			font: this.q7[0].font,
			aDd: "rgba(0,0,0,0.8)",
			fontSize: this.q7[0].fontSize
		}, this.q7[4] = {
			ef: 0,
			eh: 0,
			i: this.i,
			j: Math.floor(.3 * this.j),
			a5d: "The game was updated!",
			font: this.q7[1].font,
			aDd: "rgba(100,0,0,0.8)",
			fontSize: this.q7[1].fontSize
		}, this.q7[5] = {
			ef: 0,
			eh: 0,
			i: this.q7[0].i,
			j: Math.floor(.8 * this.j),
			a5d: "Reload",
			font: this.q7[0].font,
			aDd: "rgba(0,100,0,0.8)",
			fontSize: this.q7[0].fontSize
		}, this.q7[6] = {
			ef: 0,
			eh: 0,
			i: this.q7[1].i,
			j: this.q7[5].j,
			a5d: "Back",
			font: this.q7[0].font,
			aDd: "rgba(0,0,0,0.8)",
			fontSize: this.q7[0].fontSize
		}, this.a80()
	}, this.a80 = function() {
		this.eh = Math.floor(.54 * h.j), this.q7[0].ef = Math.floor(.5 * h.i - .5 * this.i), this.q7[1].ef = this.q7[0].ef + this.q7[0].i + this.gap, this.q7[2].ef = this.q7[3].ef = this.q7[0].ef, this.q7[4].ef = this.q7[5].ef = this.q7[0].ef,
			this.q7[6].ef = this.q7[1].ef, this.q7[0].eh = Math.floor(.54 * h.j), this.q7[1].eh = this.q7[0].eh, this.q7[2].eh = Math.floor((h.j - this.q7[2].j - this.q7[3].j - this.gap) / 2), this.q7[3].eh = this.q7[2].eh + this.q7[2].j + this
			.gap, this.q7[4].eh = Math.floor((h.j - this.q7[4].j - this.q7[5].j - this.gap) / 2), this.q7[5].eh = this.q7[6].eh = this.q7[4].eh + this.q7[4].j + this.gap
	}, this.aDe = function() {
		aDf(0), aDf(1)
	}, this.aDg = function() {
		aDf(2), aDf(3)
	}, this.aDh = function() {
		aDf(4), aDf(5), aDf(6)
	}, this.a0N = function(ef, eh, lO) {
		var aA = -1;
		return 0 === aZ.a01() ? aA = this.a0r(ef, eh, 0, 2) : 3 === aZ.a01() ? aA = this.a0r(ef, eh, 3, 1) : 5 === aZ.a01() && (aA = this.a0r(ef, eh, 5, 2)), aDY !== aA && (aDY = aA, lO) && (bd.dc = !0), -1 !== aA && (aS.qX(), !0)
	}, this.a0r = function(ef, eh, aDi, size) {
		for (var aA = aDi; aA < aDi + size; aA++)
			if (ef >= this.q7[aA].ef && eh >= this.q7[aA].eh && ef <= this.q7[aA].ef + this.q7[aA].i && eh <= this.q7[aA].eh + this.q7[aA].j) return aA;
		return -1
	}
}

function cL() {
	var aDk, aDl, aDm, aDn, aDo, aDp, aDq, aDr, aDs, aDt, aDu, aDv, aDw, aDx = 1;

	function aDz(aE0) {
		!aE0 && 1 === aDw && aDx ? (aDx = 0, ay.x.close(aDw, 3280)) : aDw = (aDw + 1) % ay.x.aE1, aDv = bd.e7, ay.x.aE2(aDw, 4) && ay.aCf.aE3(aDw)
	}

	function aE4() {
		if (0 !== aDw) return 1 === aDw && __fx.customLobby.isActive() ? (q.a0C(3249), __fx.customLobby.setActive(!1)) : void aDz();
		q.a0C(3249)
	}

	function aE9(eh, a7h, sd) {
		var m4 = Math.floor((h.i - aDn) / 2) + aDq,
			mH = m4 + Math.floor(sd * (aDn - 2 * aDq));
		tf.lineWidth = a7h, tf.beginPath(), tf.moveTo(m4, eh), tf.lineTo(mH, eh), tf.lineTo(Math.floor(m4 - aDq + sd * aDn), eh + aDm), tf.lineTo(m4 - aDq, eh + aDm), tf.closePath()
	}
	this.aDy = 1, this.dU = function() {
		aZ.setState(6), aDk = 0, aDl = 1, aDr = "rgba(0,220,120,0.4)", aDs = "rgba(0,0,0,0.8)", this.resize(), bd.dc = !0, aDx = 1, aDw = this.aDy - 1, aDz(1)
	}, this.resize = function() {
		aDn = Math.floor((z.a0.qv() ? .5 : .25) * h.pZ), aDo = aDn + 12, aDm = Math.floor(.125 * aDn), aDq = 3 * aDm, aDp = Math.floor(.225 * aDn), aDu = Math.floor(.3 * aDm), aDt = b8.pX.rM(0, aDu)
	}, this.a04 = function(zy) {
		zy === aDw && aE4()
	}, this.gl = function(ef, eh) {
		var m4 = Math.floor((h.i - aDo) / 2),
			m5 = Math.floor(.5 * (h.j - ba.gap - aDm - aDp)) + aDm + ba.gap;
		return m4 < ef && ef < m4 + aDo && m5 < eh && eh < m5 + aDp && (this.a13(), aX.a0N(ef, eh, !1), !0)
	}, this.a13 = function() {
		ay.x.a0D(3260), __fx.customLobby.setActive(false), s.x.y()
	}, this.ih = function() {
		6 === aZ.a01() && (bd.e7 > aDv + 12e3 && aE4(), 100 < (aDk += .07 * aDl * (aDk < 16 ? 5 + aDk : 84 < aDk ? 105 - aDk : 17)) ? (aDk = 100, aDl = -1) : aDk < 0 && (aDk = 0, aDl = 1), aDr = "rgba(0," + Math.floor(190 - 1.9 * aDk) + "," +
			Math.floor(120 - 1.2 * aDk) + "," + (.4 + .004 * aDk) + ")", aDs = "rgba(0," + Math.floor(1.9 * aDk) + "," + Math.floor(1.2 * aDk) + "," + (.8 - .004 * aDk) + ")", bd.dc = !0)
	}, this.te = function() {
		var ef = Math.floor((h.i - aDo) / 2),
			eh = Math.floor(.5 * (h.j - ba.gap - aDm - aDp));
		! function(title, eh, a7h, sd) {
			tf.fillStyle = aDs, aE9(eh, a7h, 1), tf.fill(), tf.fillStyle = aDr, aE9(eh, a7h, sd), tf.fill(), tf.strokeStyle = b9.me, aE9(eh, a7h, 1), tf.stroke(),
				function(aEB, eh) {
					b8.pX.textAlign(tf, 1), b8.pX.textBaseline(tf, 1), tf.font = aDt, tf.fillStyle = b9.me, tf.fillText(aEB, Math.floor(.5 * h.i), Math.floor(eh + .58 * aDm))
				}(title, eh)
		}(L(132), eh, 3, aDk / 100),
		function(ef, eh, i, j, a5d) {
			tf.fillStyle = b9.mZ, tf.fillRect(ef, eh, i, j), tf.lineWidth = 3, tf.strokeStyle = b9.me, tf.strokeRect(ef, eh, i, j);
			var eY = Math.floor(.3 * j);
			b8.pX.textAlign(tf, 1), b8.pX.textBaseline(tf, 1), tf.font = b8.pX.rM(0, eY), tf.fillStyle = b9.me, tf.fillText(a5d, Math.floor(ef + i / 2), Math.floor(eh + j / 2 + .1 * eY))
		}(ef, eh + aDm + ba.gap, aDo, aDp, L(35))
	}
}

function cM() {
	var zu = 0;
	this.dU = function() {
		aX.dU(), zu = 0
	}, this.setState = function(aEC) {
		zu = aEC
	}, this.a01 = function() {
		return zu
	}, this.aED = function() {
		this.setState(8), s.w()
	}, this.a0v = function(e) {
		if (!bQ.vQ) return !1;
		if (!(bd.e7 < 400)) {
			if ("Enter" === e.key || "Escape" === e.key) {
				if (this.aEE()) return !0;
				if ("Enter" === e.key) {
					if (0 === zu) return !0;
					if (7 === zu) return !0
				}
			}
			return !1
		}
	}, this.aEF = function() {
		bX.resize()
	}, this.aEE = function() {
		return !!bX.qo()
	}, this.gl = function(ef, eh) {
		!bQ.vQ || bX.gl(ef, eh) || 6 === zu && aY.gl(ef, eh) || bW.gl(ef, eh) || aS.gl(ef, eh)
	}, this.a0N = function(ef, eh) {
		!aS.a7t && aX.a0N(ef, eh, !0) || aS.a0N(ef, eh)
	}, this.click = function(ef, eh) {
		aS.a0m()
	}, this.a0Q = function(ef, eh, deltaY) {}, this.aEG = function() {
		aX.a80(), bd.dc = !0
	}, this.te = function() {
		8 !== zu && 10 !== zu && (tf.imageSmoothingEnabled = !0, this.wy(), 0 !== zu && (aS.te(), aN.te(), this.aEH(), bW.te()), 0 !== zu && 6 === zu && aY.te(), bX.te(), s.te())
	}, this.wy = function() {
		var aEJ, aEI;
		if (__fx.makeMainMenuTransparent) tf.clearRect(0, 0, h.i, h.j);
		else bQ.vQ ? (aEI = h.i / bQ.ej, aEJ = h.j / bQ.ek, tf.setTransform(aEI = aEJ < aEI ? aEI : aEJ, 0, 0, aEI, Math.floor((h.i - aEI * bQ.ej) / 2), Math.floor((h.j - aEI * bQ.ek) / 2)), tf.drawImage(bQ.vS, 0, 0), tf.setTransform(1, 0, 0, 1,
			0, 0), tf.fillStyle = b9.mZ) : tf.fillStyle = b9.mV, tf.fillRect(0, 0, h.i, h.j)
	}, this.aEH = function() {
		var eh = Math.floor(.3 * h.j),
			canvas = aa.aEK("territorial.io"),
			hU = (hU = 1.75 * h.j / canvas.width) * canvas.width < .98 * h.i ? .98 * h.i / canvas.width : hU,
			ef = (tf.globalAlpha = .15, tf.imageSmoothingEnabled = !1, Math.floor(.5 * (h.i - hU * canvas.width))),
			ef = Math.floor(ef / hU),
			eh = Math.floor(eh - .5 * canvas.height * hU),
			eh = Math.floor(eh / hU);
		tf.setTransform(hU, 0, 0, hU, ef, eh), tf.drawImage(canvas, ef, eh), tf.setTransform(1, 0, 0, 1, 0, 0), tf.globalAlpha = 1, tf.imageSmoothingEnabled = !0
	}
}

function cl() {
	this.aBf = 0;
	var aEM, aEN, aEO, aEP, aEQ, aER = this.aEL = 0;

	function aEU() {
		aEP = aEQ = null, aER = 0
	}
	this.dU = function(qb, aBc, aBd) {
		s.w(), bl.t8(), aZ.setState(10), aEP = qb, aEQ = aBc, aER = aBd, this.aBf = qb.aBf, this.aEL = aBd, aEM = 0, aEN = bd.e7 + 4500, ay.x.a07 = qb.a07, ay.x.a06 === qb.a07 ? (console.log("direct pass"), aEO = 0) : (console.log(
			"delayed pass"), ay.x.close(ay.x.a06, 3247), aEO = 2, ay.x.aE2(qb.a07, 5) && ay.nw.aES()), tf.imageSmoothingEnabled = !0, aZ.wy();
		aBc = aa.aEK("loading"), aBd = (z.a0.qv() ? .396 : .25) * h.pZ / aBc.width;
		tf.setTransform(aBd, 0, 0, aBd, Math.floor((h.i - aBd * aBc.width) / 2), Math.floor((h.j - aBd * aBc.height) / 2)), tf.imageSmoothingEnabled = !1, tf.drawImage(aBc, 0, 0), tf.setTransform(1, 0, 0, 1, 0, 0)
	}, this.lM = function() {
		0 < aEO && bd.e7 > aEN && (aEO--, aEN += 4500, 0 === bd.aEW) && 0 === bd.jk() && ay.x.aE2(ay.x.a07, 5)
	}, this.aEX = function() {
		return 10 === aZ.a01() && (bl.aB4.aBg(aEP, aEQ, aER), aEU(), !0)
	}, this.aEY = function() {
		10 === aZ.a01() && 2 <= ++aEM && (bl.aB4.aBg(aEP, aEQ, aER), aEU())
	}
}

function cN() {
	var aEa, canvas, z9, aEb;

	function aEh(dx, name, aEi, pE) {
		z9[dx] = name, canvas[dx] = new Image, canvas[dx].onload = function() {
			! function(dx, aEi) {
				var a2i, a2j = null;
				7 === aEi ? a2i = b8.a19.a2l : 8 === aEi ? (a2i = b8.a19.a2o, a2j = .1) : 3 === aEi ? (a2i = b8.a19.a2m, a2j = .06) : 5 === aEi ? a2i = b8.a19.a2p : 6 === aEi ? a2i = b8.a19.a2k : 4 === aEi && (a2i = b8.a19.a2q);
				canvas[dx] = b8.a19.a2h(canvas[dx], a2i, a2j)
			}(dx, aEi), aEk()
		}, canvas[dx].onerror = function(e) {
			console.error("Error loading image at index", dx, "Error:", e), aEk()
		}, canvas[dx].src = "data:image/png;base64," + pE
	}

	function aEk() {
		aEa--, aEe()
	}

	function aEe() {
		0 === aEa && (aEa = -1, aEg(), bd.dc = !0, canvas[7] = aEb, canvas[8] = aEb, canvas[9] = aEb, canvas[10] = aEb, 5 === s.rm) && s.aDG().aEm.resize()
	}

	function aEg() {
		aK.a3u(), bW.aAv([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== z.id, 1 !== z.id, !0, !0, !0]), ai.vV = new xL, ai.vV.dU(), au.dV()
	}
	this.dU = function() {
		if (void 0 === canvas) {
			aEa = 23, canvas = new Array(aEa), z9 = new Array(aEa), (aEb = document.createElement("canvas")).width = 1;
			for (var aA = aEa - (aEb.height = 1); 0 <= aA; aA--) canvas[aA] = aEb;
			aEg(), aEh(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aEh(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aEh(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aEh(3, "orders", 6,
					"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"
					), aEh(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), aEh(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aEh(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), aEh(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aEh(8,
					"googleplay", 3,
					"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"
					), aEh(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aEh(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aEh(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aEh(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aEh(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aEh(14, "bestPlayer", 5,
					"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"
					), aEh(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aEh(16, "apple", 3,
					"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"
					), aEh(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aEh(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aEh(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aEh(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aEh(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aEh(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(dx) {
		return canvas[dx]
	}, this.aEK = function(name) {
		for (var aA = z9.length - 1; 0 <= aA; aA--)
			if (z9[aA] === name) return canvas[aA];
		return aEb
	}, this.sE = function() {
		return aEa <= 0
	}, this.aEd = function() {
		aEa = 0, aEe()
	}
}

function cO() {
	var aEp, aEq, aEr, aEs, aEt, aEu, aEv, aEw, aEx, aEy, aEn = [
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
		aEo = [
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

	function aF4(j4, mM) {
		for (var aA = j4; aA < mM; aA++) aEp[aA] = 4 * bJ.dj(64 * aw.random(), aw.value(100)), aEq[aA] = 4 * bJ.dj(64 * aw.random(), aw.value(100)), aEr[aA] = 4 * bJ.dj(64 * aw.random(), aw.value(100))
	}

	function aF3(j4, mM) {
		for (var colorsData = aC.data.colorsData, aA = j4; aA < mM; aA++) {
			var f0 = colorsData[aA];
			aEp[aA] = 4 * (f0 >> 12), aEq[aA] = 4 * (f0 >> 6 & 63), aEr[aA] = 4 * (63 & f0)
		}
	}

	function aFF(eC, aFH) {
		aAI[eC] = 0, aAI[eC + 1] = 0, aAI[eC + 2] = aFH, aAI[eC + 3] = 0, aFI(eC)
	}

	function aFI(eC) {
		var ef;
		bZ.mU || (ef = ab.wz(eC), eC = ab.x0(eC), bZ.mU = ef >= bY.aAH[0] && ef <= bY.aAH[2] && eC >= bY.aAH[1] && eC <= bY.aAH[3])
	}
	this.ea = new Int32Array(4), this.dV = function() {
		var ea = this.ea;
		ea[0] = -4 * bQ.ej, ea[1] = 4, ea[2] = -ea[0], ea[3] = -ea[1]
	}, this.dU = function() {
		if (aEp = new Uint8Array(aC.eV), aEq = new Uint8Array(aC.eV), aEr = new Uint8Array(aC.eV), aEs = new Uint8Array(aC.eV), aEt = new Uint8Array(aC.eV), aEu = new Uint8Array(aC.eV), aEv = new Uint8Array(aC.eV), aEw = new Uint8Array(aC.eV),
			aEx = new Uint8Array(aC.eV), aEy = new Uint8Array(aC.eV), this.a6t = new Uint8Array(aC.eV), aC.hN)
			for (var aA = aC.eV - 1; 0 <= aA; aA--) {
				var et = be.k9[be.eW[aA]],
					kV = bJ.dj((aEo[et][3] + 1) * aw.random(), aw.value(100));
				aEp[aA] = aEn[et][0] + kV * aEo[et][0], aEq[aA] = aEn[et][1] + kV * aEo[et][1], aEr[aA] = aEn[et][2] + kV * aEo[et][2]
			} else 0 === aC.data.colorsType ? aC.data.selectableColor ? (aF3(0, aC.jn), aF4(aC.jn, aC.eV)) : aF4(0, aC.eV) : aF3(0, aC.eV);
		! function() {
			var aA, eb;
			for (aA = aC.eV - 1; 0 <= aA; aA--) eb = bJ.dj(aEp[aA] + aEq[aA] + aEr[aA], 3), aEp[aA] += aFA(eb - aEp[aA], 2), aEq[aA] += aFA(eb - aEq[aA], 2), aEr[aA] += aFA(eb - aEr[aA], 2), aEp[aA] -= aEp[aA] % 4, aEq[aA] -= aEq[aA] % 4, aEr[
				aA] -= aEr[aA] % 4
		}(),
		function() {
			for (var aA = aC.eV - 1; 0 <= aA; aA--) aEp[aA] += bJ.dj(aA, 128), aEq[aA] += bJ.dj(aA % 128, 32), aEr[aA] += bJ.dj(aA % 32, 8), aEs[aA] = aA % 8
		}(), this.aF7(),
			function() {
				for (var aA = aC.eV - 1; 0 <= aA; aA--) aEt[aA] = aEp[aA] < 32 ? aEp[aA] + 32 : aEp[aA] - 32, aEu[aA] = aEq[aA] < 32 ? aEq[aA] + 32 : aEq[aA] - 32, aEv[aA] = aEr[aA] < 32 ? aEr[aA] + 32 : aEr[aA] - 32
			}(),
			function() {
				for (var aA = aC.eV - 1; 0 <= aA; aA--) aEw[aA] = 235 < aEp[aA] ? aEp[aA] - 20 : aEp[aA] + 20, aEx[aA] = 235 < aEq[aA] ? aEq[aA] - 20 : aEq[aA] + 20, aEy[aA] = 235 < aEr[aA] ? aEr[aA] - 20 : aEr[aA] + 20
			}()
	}, this.a5s = function(player) {
		var g = bM.f7;
		return g[0] = aEp[player], g[1] = aEq[player], g[2] = aEr[player], g
	}, this.aF7 = function() {
		for (var aA = aC.eV - 1; 0 <= aA; aA--) this.a6t[aA] = aEp[aA] + aEq[aA] + aEr[aA] < 280 ? 0 : 1
	}, this.wz = function(eC) {
		return bJ.dj(eC, 4) % bQ.ej
	}, this.x0 = function(eC) {
		return bJ.dj(eC, 4 * bQ.ej)
	}, this.wZ = function(ef, eh) {
		return Math.floor(4 * (eh * bQ.ej + ef))
	}, this.wp = function(eC) {
		var ea = this.ea;
		return this.aFB(eC + ea[0]) || this.aFB(eC + ea[1]) || this.aFB(eC + ea[2]) || this.aFB(eC + ea[3])
	}, this.ex = function(eC) {
		var ea = this.ea;
		return this.ed(eC + ea[0]) || this.ed(eC + ea[1]) || this.ed(eC + ea[2]) || this.ed(eC + ea[3])
	}, this.wn = function(eC, player) {
		var ea = this.ea;
		return this.aFC(eC + ea[0], player) || this.aFC(eC + ea[1], player) || this.aFC(eC + ea[2], player) || this.aFC(eC + ea[3], player)
	}, this.g7 = function(eC) {
		return 208 <= aAI[eC + 3]
	}, this.wu = function(player, eC) {
		return this.g7(eC) && this.aFD(player, eC)
	}, this.aFD = function(player, eC) {
		return player === this.eQ(eC)
	}, this.aFE = function(eC) {
		return 208 <= aAI[eC + 3] && aAI[eC + 3] < 224
	}, this.j0 = function(eC) {
		return 224 <= aAI[eC + 3] && aAI[eC + 3] < 248
	}, this.wo = function(eC) {
		for (var ea = this.ea, aA = 3; 0 <= aA; aA--)
			if (this.h0(eC + ea[aA])) return !0;
		return !1
	}, this.eT = function(eC) {
		return this.g7(eC) || this.eP(eC)
	}, this.h0 = function(eC) {
		return 0 === aAI[eC + 3] && 2 === aAI[eC + 2]
	}, this.eP = function(eC) {
		return 0 === aAI[eC + 3] && 1 === aAI[eC + 2]
	}, this.ve = function(eC) {
		return 0 === aAI[eC + 3] && 3 === aAI[eC + 2]
	}, this.ed = function(eC) {
		return 0 === aAI[eC + 3] && 5 <= aAI[eC + 2]
	}, this.aFB = function(eC) {
		return 0 === aAI[eC + 3] && 3 <= aAI[eC + 2]
	}, this.eG = function(eC) {
		return aAI[eC + 2] - 5
	}, this.aFC = function(eC, player) {
		return this.eP(eC) || this.g7(eC) && player !== this.eQ(eC)
	}, this.eQ = function(eC) {
		return aAI[eC] % 4 * 128 + aAI[eC + 1] % 4 * 32 + aAI[eC + 2] % 4 * 8 + aAI[eC + 3] % 8
	}, this.wv = function(eC) {
		aFF(eC, 1)
	}, this.aFG = function(eC) {
		aFF(eC, 2)
	}, this.wa = function(eC, player) {
		aAI[eC] = aEp[player], aAI[eC + 1] = aEq[player], aAI[eC + 2] = aEr[player], aAI[eC + 3] = 208 + aEs[player], aFI(eC)
	}, this.g2 = function(eC, player) {
		aAI[eC] = aEt[player], aAI[eC + 1] = aEu[player], aAI[eC + 2] = aEv[player], aAI[eC + 3] = 224 + aEs[player], aFI(eC)
	}, this.j1 = function(eC, player) {
		aAI[eC] = aEw[player], aAI[eC + 1] = aEx[player], aAI[eC + 2] = aEy[player], aAI[eC + 3] = 248 + aEs[player], aFI(eC)
	}
}

function cm() {
	var dx = 0,
		aFJ = new Uint16Array(32);

	function remove(a3y) {
		var aA;
		for (dx -= 2, aA = a3y; aA < dx; aA += 2) aFJ[aA] = aFJ[aA + 2], aFJ[aA + 1] = aFJ[aA + 3]
	}
	this.dU = function() {
		dx = 0
	}, this.ih = function() {
		var aA, iy, i7;
		if (0 !== dx)
			if (0 === af.lc[aC.eI] || ac.aFK(aC.eI) === ac.fd(aC.eI)) dx = 0;
			else
				for (aA = dx - 2; 0 <= aA; aA -= 2)(iy = aFJ[aA]) < aC.eV && 0 === af.lc[iy] ? remove(aA) : (i7 = aFJ[aA + 1], (iy >= aC.eV && aFL(aC.eI) || iy < aC.eV && aFM(aC.eI, iy)) && (b6.gu.h5(i7, iy), remove(aA)))
	}, this.h7 = function(iy, i7) {
		! function(iy, i7) {
			var aA;
			for (aA = 0; aA < dx; aA += 2)
				if (aFJ[aA] === iy) return aFJ[aA + 1] = Math.min(aFJ[aA + 1] + i7, 1023), 1;
			return
		}(iy, i7) && 32 !== dx && (aFJ[dx] = iy, aFJ[dx + 1] = i7, dx += 2)
	}
}

function cP() {
	function aFT(player) {
		var di;
		b8.ft.a2J(player) && (di = af.gZ[player] - af.a2N[player] + ac.aFV(player), bb.fx(player, Math.abs(di), di < 0 ? 18 : 12)), af.gZ[player] = 0, af.a2N[player] = 0
	}

	function aFc() {
		aW.show(!1, !1, !1, !0), aV.a9S(), bP.yY.zJ()
	}

	function aFQ(player, aFb) {
		for (var aA = aFb.length - 1; 0 <= aA; aA--) ac.aFe(aFb[aA], player)
	}

	function aFS(player) {
		for (var iM = af.iM, iN = af.iN, iO = af.iO, iP = af.iP, m4 = iM[player], m5 = iO[player], ej = bQ.ej, gL = af.gL, ef = iN[player]; m4 <= ef; ef--)
			for (var eh = iP[player]; m5 <= eh; eh--) {
				var g5 = 4 * (eh * ej + ef);
				ab.wu(player, g5) && (ab.wv(g5), gL[player]--)
			}
		iN[player] = iP[player] = 0, iM[player] = iO[player] = Math.max(ej, bQ.ek)
	}
	this.dd = function(g5) {
		var player, di = af.gL[g5];
		bL.x.ok[g5] ? di && (aFQ(player = g5, ac.aFR(player)), aFS(player), aE.fv(player), ac.clear(player), aFT(player), function(player) {
			af.wV[player] = 0, af.fz[player] = [], af.gD[player] = [], af.gE[player] = [], af.ey[player] = []
		}(player)) : !di && af.fz[g5].length || this.aFP(g5)
	}, this.aFP = function(player) {
		! function(player) {
			b8.ft.jB(player) || (af.zN[player] = bg.zg.aFa(), aC.yp++);
			var aFb = ac.aFR(player);
			0 === aFb.length ? b8.ft.a2G(player) && aFc() : (aFQ(player, aFb), function(player, aFb) {
				var aFg = aFb[function(aFb) {
					var aA, dx = 0;
					for (aA = aFb.length - 1; 1 <= aA; aA--) af.gL[aFb[aA]] > af.gL[aFb[dx]] && (dx = aA);
					return dx
				}(aFb)];
				9 === aC.k4 && (1 === be.eW[player] ? aw.jf(8) && ax.aFh(aFg) : aD.hC[player] && aM.zB(280, L(133, [af.zO[aFg], af.zO[player]]), 40, aFg, b9.mV, b9.nl, -1, !0));
				if (b8.ft.a2G(player)) aFc(), aM.yz(aFg, 1);
				else {
					for (var aA = aFb.length - 1; 0 <= aA; aA--)
						if (b8.ft.a2J(aFb[aA]) && (bb.lY[4 - b8.ft.jB(player)]++, b8.ft.a2G(aFb[aA]))) return aM.yz(player, 0);
					b8.ft.jB(player) || aM.a5A(0, player, aFg)
				}
			}(player, aFb))
		}(player), aFS(player), aFT(player),
			function(player) {
				af.lc[player] = 0, af.fz[player] = null, af.gD[player] = null, af.gE[player] = null, af.ey[player] = null
			}(player), aE.fv(player), ac.clear(player), bL.aFY.aFZ(player)
	}
}

function cr() {
	var input;

	function aFi(e) {
		(e = e.target.files) && 0 < e.length && b4.aFl(e[0])
	}

	function aFp(e) {
		var et = new Image;
		et.onload = aFq, et.src = e.target.result
	}

	function aFq(e) {
		var e = e.target,
			canvas = document.createElement("canvas");
		canvas.width = e.width, canvas.height = e.height;
		canvas.getContext("2d").drawImage(e, 0, 0);
		var e = canvas.width,
			j = canvas.height;
		e > bQ.aFs || j > bQ.aFs || e < 10 || j < 10 ? (e = "Image dimensions must be between 10 and " + bQ.aFs + ".", z.uG ? z.uG.showToast(e) : alert(e)) : 20 === s.rm && s.aDG().aFq(canvas)
	}
	this.dU = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = aFi
	}, this.t8 = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.aFj = function() {
		input.click()
	}, this.aFl = function(aFm) {
		var g = aFm.name.split("."),
			g = g[g.length - 1].toLowerCase();
		"gif" !== g && "jpg" !== g && "jpeg" !== g && "png" !== g || ((g = new FileReader).onload = aFp, g.readAsDataURL(aFm))
	}
}

function cp() {
	this.aFu = null, this.dU = function() {
		10 !== aC.k4 ? this.aFu = null : this.aFu = new Uint32Array(aC.eV)
	}, this.ih = function() {
		10 === aC.k4 && this.qh()
	}, this.qh = function() {
		for (var g5, target, a9d, aFu = this.aFu, yb = ak.jp, a2O = af.gZ, aA = ak.jo - 1; 0 <= aA; aA--)(g5 = yb[aA]) >= aC.jn || (target = Math.max(bJ.dj(a2O[g5], 4), 2048), a9d = Math.max(ad.a9e(g5), 100), aFu[g5] += bJ.dj(a9d * target, 1e4),
			aFu[g5] > target && (aFu[g5] = target))
	}, this.a2U = function(player, hC) {
		return hC > this.aFu[player] ? (hC = this.aFu[player], this.aFu[player] = 0) : this.aFu[player] -= hC, hC
	}
}

function dQ() {
	function aFw(e) {
		var g, e = e.target.files;
		e && 0 < e.length && (e = e[0], "json" === (g = e.name.split("."))[g.length - 1].toLowerCase()) && ((g = new FileReader).onload = aG4, g.readAsText(e))
	}

	function aG4(e) {
		var aG8;
		aC.yn || (e = JSON.parse(e.target.result), aG8 = aC.data = new a3K, aG9(e, aG8, "mapType", 0, 2), aG9(e, aG8, "mapProceduralIndex", 0, 255), aG9(e, aG8, "mapRealisticIndex", 0, 255), aG9(e, aG8, "mapSeed", 0, 16383), function(aG7, aG8, g6,
				max) {
				aG7 = aG7[g6];
				aG8[g6] = aGF(aG7) ? aG7.slice(0, max) : aG8[g6]
			}(e, aG8, "mapName", 20), function(aG7, aG8, g6) {
				var aFr;
				2 === aG8.mapType && (!aGF(aG7 = aG7[g6]) || aG7.length <= 20 ? aG8.mapType = 0 : ((aFr = new Image).onload = function() {
					b7.aGG.aGH(aFr, 1), aFr.onload = null, aFr = null
				}, aFr.src = aG7))
			}(e, aG8, "canvas"), aG9(e, aG8, "passableWater", 0, 1), aG9(e, aG8, "passableMountains", 0, 1), aG9(e, aG8, "playerCount", 1, 512), aG9(e, aG8, "humanCount", 1, 1), aG9(e, aG8, "selectedPlayer", 0, 0), aG9(e, aG8, "gameMode", 0, 1),
			aG9(e, aG8, "playerMode", 0, 0), aG9(e, aG8, "battleRoyaleMode", 0, 0), aG9(e, aG8, "numberTeams", 0, 8), aG9(e, aG8, "isZombieMode", 0, 0), aG9(e, aG8, "isContest", 0, 0), aG9(e, aG8, "isReplay", 0, 0), aGC(e, aG8, "elo", 16, 2,
				16383), aG9(e, aG8, "colorsType", 0, 1), aG9(e, aG8, "colorsPersonalized", 0, 1), aGC(e, aG8, "colorsData", 32, 512, 262143), aG9(e, aG8, "selectableColor", 0, 1), aGC(e, aG8, "teamPlayerCount", 16, 9, 512), aG9(e, aG8,
				"neutralBots", 0, 1), aG9(e, aG8, "botDifficultyType", 0, 3), aG9(e, aG8, "botDifficultyValue", 0, 15), aGC(e, aG8, "botDifficultyTeam", 8, 9, 15), aGC(e, aG8, "botDifficultyData", 8, 512, 15), aG9(e, aG8, "spawningType", 0, 2),
			aG9(e, aG8, "spawningSeed", 0, 16383), aGC(e, aG8, "spawningData", 16, 1024, 4095), aG9(e, aG8, "selectableSpawn", 0, 1), aG9(e, aG8, "playerNamesType", 0, 2),
			function(aG7, aG8, g6, size, max) {
				var a1U = aG7[g6];
				if (Array.isArray(a1U)) {
					for (var a1V = new Array(size), eY = Math.min(a1U.length, size), aA = 0; aA < eY; aA++) a1V[aA] = aGF(a1U[aA]) ? a1U[aA].slice(0, max) : "";
					aG8[g6] = a1V
				}
			}(e, aG8, "playerNamesData", 512, 20), aG9(e, aG8, "selectableName", 0, 1), aG9(e, aG8, "aIncomeType", 0, 2), aG9(e, aG8, "aIncomeValue", 0, 255), aGC(e, aG8, "aIncomeData", 8, 512, 255), aG9(e, aG8, "tIncomeType", 0, 2), aG9(e, aG8,
				"tIncomeValue", 0, 255), aGC(e, aG8, "tIncomeData", 8, 512, 255), aG9(e, aG8, "iIncomeType", 0, 2), aG9(e, aG8, "iIncomeValue", 0, 255), aGC(e, aG8, "iIncomeData", 8, 512, 255), aG9(e, aG8, "sResourcesType", 0, 2), aG9(e, aG8,
				"sResourcesValue", 0, 2047), aGC(e, aG8, "sResourcesData", 16, 512, 2047), s.w(), s.x.aG6[0] = 0, s.t(19))
	}

	function aG9(aG7, aG8, g6, min, max) {
		aG7 = aG7[g6];
		aG8[g6] = "number" == typeof aG7 && min <= aG7 && aG7 <= max ? Math.floor(aG7) : aG8[g6]
	}

	function aGF(pE) {
		return "string" == typeof pE
	}

	function aGC(aG7, aG8, g6, aGI, size, max) {
		var a1U = aG7[g6];
		if (Array.isArray(a1U)) {
			for (var a1V = new(8 === aGI ? Uint8Array : 16 === aGI ? Uint16Array : Uint32Array)(size), eY = Math.min(a1U.length, size), aA = 0; aA < eY; aA++) a1V[aA] = bJ.p5(a1U[aA], 0, max);
			aG8[g6] = a1V
		}
	}
	this.aFv = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aFw, input.click()
	}, this.aFx = function() {
		for (var aG0, aAs, a6B = aC.data, keys = Object.keys(a6B), aFy = {}, aA = 0; aA < keys.length; aA++) {
			var key = keys[aA];
			a6B[key] instanceof Uint8Array || a6B[key] instanceof Uint16Array || a6B[key] instanceof Uint32Array ? aFy[key] = Array.from(a6B[key]) : aFy[key] = a6B[key]
		}
		aFy.canvas = 2 === aFy.mapType && aFy.canvas ? aFy.canvas.toDataURL() : null, aG0 = aFy, aG0 = JSON.stringify(aG0, null, 2), aG0 = new Blob([aG0], {
			type: "application/json"
		}), (aAs = document.createElement("a")).href = URL.createObjectURL(aG0), aAs.download = "tt_scenario.json", aAs.click()
	}
}

function cS() {
	var aGJ, aGK, size, iy, hC, id, aGL;

	function aGM(player) {
		return player < aC.jn ? aGJ * player : aGJ * aC.jn + aGK * (player - aC.jn)
	}
	this.dU = function() {
		aGJ = aC.jn < 16 ? 12 : 8, aGK = 4;
		var eY = aGM(aC.eV);
		size = new Uint8Array(aC.eV), iy = new Uint16Array(eY), hC = new Uint32Array(eY), id = new Uint16Array(eY), aGL = new Uint8Array(eY)
	}, this.p4 = function(a6O, aGN) {
		var aGO = this.ga(a6O, aGN),
			aGN = (this.gY(a6O, aGN, 0), b8.ft.fw(a6O, aGO));
		bb.fx(a6O, aGO - aGN, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.aFe = function(player, aGN) {
		var aGR, aGN = function(player, aGN) {
			var aA, kV = aGM(player);
			for (aA = size[player] - 1; 0 <= aA; aA--)
				if (0 === id[kV + aA] && iy[kV + aA] === aGN) return aA;
			return size[player]
		}(player, aGN);
		aGN !== size[player] && (aGR = hC[aGM(player) + aGN], this.fy(player, aGN), this.iv(player, aGR, aC.eV))
	}, this.j9 = function(player, aGN) {
		for (var kV = aGM(player), aA = size[player] - 1; 0 <= aA; aA--)
			if (0 === id[kV + aA] && iy[kV + aA] === aGN) return !0;
		return !1
	}, this.jR = function(player) {
		return player < aC.jn ? size[player] < aGJ : size[player] < aGK
	}, this.fd = function(player) {
		return size[player]
	}, this.fj = function(player, aA) {
		return iy[aGM(player) + aA]
	}, this.fe = function(player, aA) {
		return id[aGM(player) + aA]
	}, this.aGS = function(player, aGT) {
		for (var kV = aGM(player), aA = size[player] - 1; 0 <= aA; aA--)
			if (id[kV + aA] === aGT) return aA;
		return -1
	}, this.fk = function(player, aA) {
		return hC[aGM(player) + aA]
	}, this.ga = function(player, aGN) {
		for (var kV = aGM(player), aA = size[player] - 1; 0 <= aA; aA--)
			if (0 === id[kV + aA] && iy[kV + aA] === aGN) return hC[kV + aA];
		return 0
	}, this.aFV = function(player) {
		for (var kV = aGM(player), f0 = 0, aA = size[player] - 1; 0 <= aA; aA--) f0 += hC[kV + aA];
		return f0
	}, this.aGU = function(player) {
		for (var kV = aGM(player), f0 = 0, aA = size[player] - 1; 0 <= aA; aA--) 0 === id[kV + aA] && (f0 += hC[kV + aA]);
		return f0
	}, this.aFK = function(player) {
		for (var kV = aGM(player), g0 = 0, aA = size[player] - 1; 0 <= aA; aA--) 0 < id[kV + aA] && g0++;
		return g0
	}, this.gY = function(player, aGN, aGR) {
		for (var kV = aGM(player), aA = size[player] - 1; 0 <= aA; aA--) 0 === id[kV + aA] && iy[kV + aA] === aGN && (hC[kV + aA] = aGR)
	}, this.gJ = function(player, aA, aGR) {
		hC[aGM(player) + aA] = Math.max(aGR, 0)
	}, this.gK = function(player, aA) {
		aGL[aGM(player) + aA] = 0
	}, this.fl = function(player, aA) {
		return aGL[aGM(player) + aA]
	}, this.iv = function(player, aGR, aGN) {
		b8.ft.a2J(aGN) && bb.lY[6 - b8.ft.jB(player)]++;
		for (var kV = aGM(player), aA = size[player] - 1; 0 <= aA; aA--)
			if (0 === id[kV + aA] && iy[kV + aA] === aGN) return hC[kV + aA] += aGR, void(hC[kV + aA] = hC[kV + aA] > aC.a2Q ? aC.a2Q : hC[kV + aA]);
		iy[kV + size[player]] = aGN, hC[kV + size[player]] = aGR, id[kV + size[player]] = 0, aGL[kV + size[player]] = 1, size[player]++, player < aC.jn && (aGN === aC.eI ? aM.yz(player, 5) : player === aC.eI && ae.a5C(aGN))
	}, this.aGV = function(player, aGR, aGT) {
		var kV = aGM(player);
		iy[kV + size[player]] = 0, hC[kV + size[player]] = aGR, id[kV + size[player]] = aGT, aGL[kV + size[player]] = 0, size[player]++
	}, this.fy = function(player, dx) {
		var er, kV;
		if (0 !== size[player])
			for (kV = aGM(player), size[player]--, er = dx; er < size[player]; er++) iy[kV + er] = iy[kV + er + 1], hC[kV + er] = hC[kV + er + 1], id[kV + er] = id[kV + er + 1], aGL[kV + er] = aGL[kV + er + 1]
	}, this.aFR = function(player) {
		for (var er, kV, aFb = [], aA = ak.jo - 1; 0 <= aA; aA--)
			for (kV = aGM(ak.jp[aA]), er = size[ak.jp[aA]] - 1; 0 <= er; er--)
				if (0 === id[kV + er] && iy[kV + er] === player) {
					aFb.push(ak.jp[aA]);
					break
				} return aFb
	}
}

function cT() {
	var aGW;

	function aGY(player) {
		var dw, jS;
		return b8.ft.jB(player) && player < aC.jn ? 0 : (dw = aGW[bJ.dj((aC.eV - 1) * af.gL[player], aC.jX)], bd.jk() < 1920 && (dw = Math.max(bJ.dj(100 * (13440 - 6 * bd.jk()), 1920), dw)), jS = ad.jT(player), af.gZ[player] > jS && (dw -= bJ.dj(2 *
			dw * (af.gZ[player] - jS), jS)), Math.min(Math.max(dw, 0), 700))
	}

	function aGk(mG) {
		for (var gL = af.gL, jp = ak.jp, aA = ak.jo - 1; 0 <= aA; aA--) {
			var g5 = jp[aA];
			b8.ft.fw(g5, bJ.dj(mG * gL[g5], 32))
		}
	}

	function aGh() {
		var vW = aC.eI;
		bM.f4[0] = af.gZ[vW] - af.a2N[vW]
	}

	function aGj(dx) {
		var vW = aC.eI;
		bb.lY[dx] += af.gZ[vW] - af.a2N[vW] - bM.f4[0]
	}
	this.db = function() {
		for (var eY = aC.eV, aA = (aGW = new Uint16Array(eY), 0); aA < eY; aA++) aGW[aA] = 100 + aGX(bJ.dj(25600 * aA, eY - 4), 9)
	}, this.dU = function() {
		0 === aC.data.iIncomeType ? this.a9e = aGY : 1 === aC.data.iIncomeType ? this.a9e = function(player) {
			return bJ.dj(aC.data.iIncomeValue * aGY(player), 64)
		} : this.a9e = function(player) {
			return bJ.dj(aC.data.iIncomeData[player] * aGY(player), 64)
		}
	}, this.ih = function() {
		if (bd.jk() % 10 == 9 && (function() {
				aGh();
				for (var jp = ak.jp, gZ = af.gZ, aA = ak.jo - 1; 0 <= aA; aA--) {
					var g5 = jp[aA],
						aGi = bJ.dj(ad.a9e(g5) * gZ[g5], 1e4);
					b8.ft.fw(g5, Math.max(aGi, 1))
				}
				aGj(9)
			}(), function() {
				if (0 !== aC.data.aIncomeType) {
					if (aGh(), 1 === aC.data.aIncomeType)
						for (var gL = af.gL, jp = ak.jp, mG = aC.data.aIncomeValue, aA = ak.jo - 1; 0 <= aA; aA--) {
							var g5 = jp[aA];
							b8.ft.fw(g5, bJ.dj(mG * gL[g5], 128))
						} else 2 === aC.data.aIncomeType && function() {
							for (var gL = af.gL, jp = ak.jp, mG = aC.data.aIncomeData, aA = ak.jo - 1; 0 <= aA; aA--) {
								var g5 = jp[aA];
								b8.ft.fw(g5, bJ.dj(mG[g5] * gL[g5], 128))
							}
						}();
					aGj(18)
				}
			}(), bd.jk() % 100 == 99)) {
			if (aGh(), 0 === aC.data.tIncomeType) aGk(32);
			else if (1 === aC.data.tIncomeType) aGk(aC.data.tIncomeValue);
			else
				for (var gL = af.gL, jp = ak.jp, mG = aC.data.tIncomeData, aA = ak.jo - 1; 0 <= aA; aA--) {
					var g5 = jp[aA];
					b8.ft.fw(g5, bJ.dj(mG[g5] * gL[g5], 32))
				}
			aGj(8)
		}
	}, this.jT = function(player) {
		return Math.min(100 * af.gL[player], aC.a3G)
	}, this.nz = function(player, o0) {
		b8.ft.fw(o0, bM.f5[0]), bb.oL(player, o0), ae.aGa(player, bM.f5[0] + bM.f5[1]), ae.oM(o0, bM.f5[0]), b8.ft.ou(player)
	}, this.aGb = function() {
		for (var eY = ak.jo, yb = ak.jp, kV = 0, a2O = af.gZ, aA = 0; aA < eY; aA++) kV += a2O[yb[aA]];
		return kV
	}, this.aGc = function(aGd) {
		for (var g5, eY = ak.jo, yb = ak.jp, kV = 0, a2O = af.gZ, eW = be.eW, aA = 0; aA < eY; aA++) eW[g5 = yb[aA]] === aGd && (kV += a2O[g5]);
		return kV
	}
}

function cV() {
	var aGo, aGp, aGq, aGr, aGs, aGt, aGu, aGv, aGw, aGx, aGy, aGz, aH0, aH1, aH2, aH3, aH4, aH5, aH7, aH8, aAl, aH9, aHA, aHH, aHI, aH6 = null,
		aHC = 0,
		aHD = !1,
		aHE = new Float32Array(4),
		aHF = 0,
		aHG = !0,
		a8p = 400,
		aHJ = 0;

	function pb() {
		aGw = Math.floor(+h.pZ), aGx = Math.floor(.5 * aGw)
	}

	function aHK() {
		var aA, aHP;
		for (tf.font = b8.pX.rM(1, 100 * aGy), aHP = 80 / Math.floor(tf.measureText(b8.zS.y5(aC.a2Q)).width), tf.font = b8.pX.rM(1, 100), aA = aC.eV - 1; 0 <= aA; aA--) aGv[aA] = 100 / Math.floor(tf.measureText(af.zO[aA]).width), aGu[aA] = Math.min(
			aHP, aGv[aA])
	}

	function aHQ(aA) {
		return !aHJ || (aA = af.gZ[aA]) < 1e6 ? 1 : aA < 1e7 ? aHE[0] : aHE[Math.min(Math.floor(Math.log10(aA)) - 6, 3)]
	}

	function aHO(hV) {
		aH5 = !1, aH4 = 1, aH2 = aH3 = 0, aHG && (b8.pX.textAlign(hV, 1), b8.pX.textBaseline(hV, 1));
		for (var aHW, aHX, aA, aHY, fontSize, aHZ, m4 = i8 / i9, m5 = iA / i9, mH = (h.i + i8) / i9, mI = (h.j + iA) / i9, aHa = 0 !== af.lc[aC.eI] && !b8.ft.jB(aC.eI), er = ak.jo - 1; 0 <= er; er--) aA = ak.jp[er], (fontSize = Math.floor(aH1 * i9 *
			aHQ(aA) * aGu[aA] * aGs[aA])) < aH0 || aGw <= fontSize || aGq[aA] + aGs[aA] > m4 && aGq[aA] < mH && aGr[aA] + aGt[aA] > m5 && aGr[aA] < mI && (aHW = Math.floor(h.i * (aGq[aA] + aGs[aA] / 2 - m4) / (mH - m4)), aHX = Math.floor(h.j * (
			aGr[aA] + aGt[aA] / 2 - m5) / (mI - m5) - .1 * fontSize), aHY = ab.a6t[aA], hV.font = b8.pX.rM(1 === af.a2F[aA] ? 4 : 1, fontSize), hV.fillStyle = aHb(fontSize, aHY % 2), aHJ ? aHc(hV, aA, fontSize, aHW, aHX, aHY) : aHd(aA,
			fontSize, aHW, aHX, hV), aH5 = !0, 0 < aAl[aA] ? function(aHW, aHX, fontSize, aA, hV) {
			0 === jY[aA] ? ai.qn.xw(aH8[aA]) ? (function(aHW, aHX, fontSize, player, oA, hV) {
				for (var w4 = aHX, hU = (hV.globalAlpha = aHl(fontSize), aHQ(player) * (aHJ ? aHF : aGv[player])), w3 = aHW - .5 * fontSize / hU - .9 * fontSize, es = 0; es < 2; es++) hV.fillText(ai.qn.xq(oA), w3, w4), w3 = aHW + .5 *
					fontSize / hU + .9 * fontSize;
				hV.globalAlpha = 1
			}(aHW, aHX, fontSize, aA, aH8[aA], hV), aHf(aHW, aHX, fontSize, 0, 0, hV)) : ai.qn.xy(aH8[aA]) ? (aHo(aHW, aHX, fontSize, aH8[aA], 0, hV), aHf(aHW, aHX, fontSize, 0, 1, hV)) : (aHo(aHW, aHX, fontSize, aH8[aA], 1, hV), aHf(aHW,
				aHX, fontSize, 1, 0, hV)) : aHo(aHW, aHX, fontSize, aH8[aA], 0, hV)
		}(aHW, aHX, fontSize, aA, hV) : 0 === jY[aA] && aHf(aHW, aHX, fontSize, 0, 0, hV), aHa && (0 < aAl[aA + aC.eV] || 0 < aAl[aA + 2 * aC.eV] || 0 < aAl[aA + 3 * aC.eV] || 0 < aAl[aA + 4 * aC.eV]) && function(aHW, aHX, fontSize, aA, hV) {
			var et, g0 = -1;
			for (et = 4; 1 <= et; et--) 0 < aAl[aA + et * aC.eV] && g0++;
			for (et = 1; et < 5; et++) 0 < aAl[aA + et * aC.eV] && (! function(aHW, aHX, fontSize, et, aA, aHj, di, hV) {
				var a1i;
				if (1 === et) {
					aA = aH8[aA + aC.eV];
					if (!ai.qn.xx(aA)) return function(aHW, aHX, fontSize, oA, aHj, hV) {
						hV.globalAlpha = aHl(fontSize);
						aHW -= .534 * aHj * fontSize, aHj = aHX + 1.59 * fontSize;
						hV.font = b8.pX.rM(0, .785 * fontSize), hV.fillText(ai.qn.xq(oA), aHW, aHj), hV.globalAlpha = 1
					}(aHW, aHX, fontSize, aA, aHj, hV);
					a1i = ai.vV.xP[aA - 1024 + ai.qn.xb]
				} else a1i = 2 === et ? aK.a3w()[4].canvas[+(di < 255)] : (3 === et ? aK.a3w()[5] : aK.a3w()[6]).canvas[0];
				aA = ai.vV.xQ, di = .8 * fontSize / aA, et = aHW - .5 * di * aA - .534 * aHj * fontSize, aHW = aHX + 1.4 * di * aA;
				hV.setTransform(di, 0, 0, di, et, aHW), hV.globalAlpha = aHl(fontSize), hV.drawImage(a1i, 0, 0), hV.globalAlpha = 1, hV.setTransform(1, 0, 0, 1, 0, 0)
			}(aHW, aHX, fontSize, et, aA, g0, aAl[aA + et * aC.eV], hV), g0 -= 2)
		}(aHW, aHX, fontSize, aA, hV), (aHZ = aGy * fontSize) < aH0 || (hV.font = b8.pX.rM(1, aHZ), aHX += Math.floor(.78 * fontSize), aHJ ? aHd(aA, aHZ, aHW, aHX, hV) : aHc(hV, aA, aHZ, aHW, aHX, aHY)))
	}

	function aHd(aA, fontSize, ef, eh, hV) {
		var ___id = aA;
		var showName = aA < aC.jn || !__fx.settings.hideBotNames;
		if (showName) hV.fillText(af.zO[aA], ef, eh), aA < aC.jn && 2 !== af.a2F[aA] || (aA = fontSize / aGv[aA], hV.fillRect(ef - .5 * aA, eh + b8.pX.xr * fontSize, aA, Math.max(1, .1 * fontSize)));
		aHJ && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (hV.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			hV.fillText(__fx.utils.getDensity(___id), ef, showName ? eh + fontSize : eh)
		);
	}

	function aHc(hV, aA, fontSize, aHW, aHX, aHY) {
		var ___id = aA;
		aA = b8.zS.y5(af.gZ[aA]);
		aHY >> 1 & 1 ? (hV.lineWidth = .05 * fontSize, hV.strokeStyle = aHb(fontSize, aHY % 2), hV.strokeText(aA, aHW, aHX)) : (1 < aHY && (hV.lineWidth = .12 * fontSize, hV.strokeStyle = aHb(fontSize, aHY), hV.strokeText(aA, aHW, aHX)), hV.fillText(
			aA, aHW, aHX));
		aHJ || __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (hV.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)), hV.fillText(__fx.utils.getDensity(___id), aHW, aHX + fontSize))
	}

	function aHf(aHW, aHX, fontSize, aHj, aHk, hV) {
		var a4V = .95 * fontSize / aHA,
			aHW = aHW - .5 * a4V * aH9 + .8 * aHj * fontSize,
			aHj = aHX - 1.76 * a4V * aHA - (.35 - b8.pX.xr + .7) * aHk * fontSize;
		hV.setTransform(a4V, 0, 0, a4V, aHW, aHj), hV.globalAlpha = aHl(fontSize), hV.drawImage(aa.get(4), 0, 0), hV.globalAlpha = 1, hV.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aHo(aHW, aHX, fontSize, oA, aHj, hV) {
		var hP, w3, a4V;
		hV.globalAlpha = aHl(fontSize), ai.qn.xx(oA) ? (hP = ai.vV.xQ, hV.setTransform(a4V = 1.1 * fontSize / hP, 0, 0, a4V, w3 = aHW - .5 * a4V * hP - .8 * aHj * fontSize, a4V = aHX - 1.55 * a4V * hP), hV.drawImage(ai.vV.xP[oA - 1024 + ai.qn.xb], 0,
			0), hV.setTransform(1, 0, 0, 1, 0, 0)) : (w3 = aHW - .8 * aHj * fontSize, a4V = aHX - (.35 - b8.pX.xr + 1) * fontSize, hV.fillText(ai.qn.xq(oA), w3, a4V)), hV.globalAlpha = 1
	}

	function aHb(fontSize, aHY) {
		return aGx <= fontSize && fontSize < aGw ? be.aHq[aHY] + aHl(fontSize).toFixed(3) + ")" : be.aHr[aHY]
	}

	function aHl(fontSize) {
		return aGx <= fontSize && fontSize < aGw ? 1 - (fontSize - aGx) / (aGw - aGx) : 1
	}

	function aI0(hU, i) {
		return 1 + Math.floor(aGz * hU * i)
	}

	function aHx(aA) {
		for (var left = aGq[aA], er = aGq[aA] - af.iM[aA] - 1; 0 <= er; er--)
			if (!aI2(aA, --left, aGr[aA], aGt[aA])) {
				left++;
				break
			} var right = aGq[aA];
		for (er = af.iN[aA] - aGq[aA] - aGs[aA]; 0 <= er; er--)
			if (!aI2(aA, ++right + aGs[aA] - 1, aGr[aA], aGt[aA])) {
				right--;
				break
			} var ef = Math.floor((left + right) / 2),
			top = aGr[aA];
		for (er = aGr[aA] - af.iO[aA] - 1; 0 <= er; er--)
			if (!aI3(aA, ef, --top, aGs[aA])) {
				top++;
				break
			} var bottom = aGr[aA];
		for (er = af.iP[aA] - aGr[aA] - aGt[aA]; 0 <= er; er--)
			if (!aI3(aA, ef, ++bottom + aGt[aA] - 1, aGs[aA])) {
				bottom--;
				break
			} var eh = Math.floor((top + bottom) / 2);
		aHu(aA, ef, eh, aGs[aA], aGt[aA]) && (aGq[aA] = ef, aGr[aA] = eh)
	}

	function aHu(player, ef, eh, i, j) {
		eb = Math.floor(.2 * i);
		for (var eb, et = ef + i - 1; ef <= et; et--)
			if (!aI2(player, et, eh, j)) return;
		for (et = eh + j - 1 - (eb = (eb = Math.floor(.25 * j)) < 1 ? 1 : eb); eh + eb <= et; et--)
			if (!aI3(player, ef, et, i)) return;
		return 1
	}

	function aI2(player, ef, eh, j) {
		return ab.wu(player, 4 * (eh * bQ.ej + ef)) && ab.wu(player, 4 * ((eh + j - 1) * bQ.ej + ef))
	}

	function aI3(player, ef, eh, i) {
		return ab.wu(player, 4 * (eh * bQ.ej + ef)) && ab.wu(player, 4 * (eh * bQ.ej + ef + i - 1))
	}
	this.dU = function() {
		if (aHJ = bh.km.data[7].value || 8 === aC.k4, a8p = 0 === (a8p = bh.km.data[11].value) ? 280 : 1 === a8p ? 187 : 112, aH5 = !1, aH1 = .88, aGy = .5, aGz = 1.8, aH0 = 12 - 3 * bh.km.data[9].value, aGp = aGo = 0, aGq = new Uint16Array(aC
				.eV), aGr = new Uint16Array(aC.eV), aGs = new Uint16Array(aC.eV), aGt = new Uint16Array(aC.eV), aGu = new Float32Array(aC.eV), aGv = new Float32Array(aC.eV), aH8 = new Uint16Array(2 * aC.eV), aAl = new Uint8Array(5 * aC.eV), aHH =
			new Uint8Array(aC.eV), aHI = new Uint8Array(aC.eV), aHG || (aH6 = aH6 || document.createElement("canvas")), pb(), aH3 = aH2 = 0, aH4 = 1, aHJ) {
			var aA, aHP;
			for (aHK(), tf.font = b8.pX.rM(1, 100), aHP = 100 / Math.floor(tf.measureText("900 000").width), aA = aC.eV - 1; 0 <= aA; aA--) aGu[aA] = Math.min(aHP, 2 * aGv[aA]);
			aHF = aHP, aHE[0] = 100 / (aHP * Math.floor(tf.measureText("5 000 000").width)), aHE[1] = 100 / (aHP * Math.floor(tf.measureText("50 000 000").width)), aHE[2] = 100 / (aHP * Math.floor(tf.measureText("500 000 000").width)), aHE[3] =
				100 / (aHP * Math.floor(tf.measureText("1 000 000 000").width))
		} else aHK();
		! function() {
			var aA;
			for (aA = aC.eV - 1; 0 <= aA; aA--) af.gL[aA] < 12 ? (aGq[aA] = af.iM[aA] + 1, aGr[aA] = af.iO[aA] + 1, aGs[aA] = 1, aGt[aA] = 1) : (aGq[aA] = af.iM[aA], aGr[aA] = af.iO[aA] + 1, aGs[aA] = 4, aGt[aA] = 2);
			if (aC.gt)
				for (aA = 0; aA < aC.jn; aA++) aGs[aA] = 0;
			aH9 = aa.get(4).width, aHA = aa.get(4).height
		}()
	}, this.aGa = function(g5, a5S) {
		a5S > 18 * af.gL[g5] ? (aHI[g5] = 6, ab.a6t[g5] = 2 + ab.a6t[g5] % 2) : (aHH[g5] = 4, (ab.a6t[g5] < 2 || 3 < ab.a6t[g5]) && (ab.a6t[g5] = 6 + ab.a6t[g5] % 2))
	}, this.oM = function(g5, a5S) {
		a5S > 6 * af.gL[g5] ? (aHI[g5] = 6, ab.a6t[g5] = 4 + ab.a6t[g5] % 2) : (aHH[g5] = 4, (ab.a6t[g5] < 4 || 5 < ab.a6t[g5]) && (ab.a6t[g5] = 8 + ab.a6t[g5] % 2))
	}, this.resize = function() {
		pb(), aHG || aHO(aH7)
	}, this.a3C = function() {
		for (var aA = 0; aA < aC.jn; aA++) af.iN[aA] - af.iM[aA] != 3 || af.iP[aA] - af.iO[aA] != 3 ? (aGq[aA] = af.iM[aA] + (af.iN[aA] !== af.iM[aA] ? 1 : 0), aGr[aA] = af.iO[aA], aGs[aA] = 1, aGt[aA] = 1) : (aGq[aA] = af.iM[aA], aGr[aA] = af
			.iO[aA] + 1, aGs[aA] = 4, aGt[aA] = 2)
	}, this.p6 = function(player, dx, aHR) {
		! function(player, dx, aHR) {
			player += dx * aC.eV;
			0 === dx ? aH8[player] === aHR && 0 < aAl[player] ? aAl[player] = 0 : (aH8[player] = aHR, aAl[player] = ai.qn.xw(aHR) ? 255 : 64) : 1 === dx ? (aAl[player] = 64, aH8[player] = aHR) : aAl[player] = aHR
		}(player, dx, aHR), 2 === aC.yn && this.lO(!0)
	}, this.te = function() {
		aHG ? aHO(tf) : aH5 && (1 !== aH4 ? (tf.imageSmoothingEnabled = !0, tf.setTransform(aH4, 0, 0, aH4, 0, 0), tf.drawImage(aH6, -aH2 / aH4, -aH3 / aH4), tf.setTransform(1, 0, 0, 1, 0, 0), tf.imageSmoothingEnabled = !1) : tf.drawImage(aH6, -
			aH2, -aH3))
	}, this.a7d = function(ht, hw) {
		aH2 += ht, aH3 += hw
	}, this.a0N = function(ht, hw) {
		ae.a7d(ht, hw)
	}, this.zoom = function(a1H, kr, ks) {
		aH4 *= a1H, aH2 = (aH2 + kr) * a1H - kr, aH3 = (aH3 + ks) * a1H - ks
	}, this.lO = function(bp) {
		return !aHG && !(!aHD && !bp && bd.e7 < aHC + (1 === aH4 && 0 === aH2 && 0 === aH3 && (aC.a3f() || aC.gt || 2 === aC.yn) ? 1e3 : a8p) || (aHD = !1, aHC = bd.e7, aHO(aH7), 0))
	}, this.aHU = function(aA) {
		return aHQ(aA) * aGu[aA]
	}, this.aHV = function(player) {
		return aGu[player]
	}, this.ih = function() {
		bd.jk() % 10 == 9 && (aHD = aC.a3h() && !aC.a3f()), !aC.a3f() && 4 <= ++aGp && function() {
			var aA, er, es;
			for (aGp = 0, es = 4; 1 <= es; es--)
				for (er = ak.jo - 1; 0 <= er; er--) aA = ak.jp[er] + es * aC.eV, 0 < aAl[aA] && aAl[aA] < 255 && aAl[aA]--;
			if (2 !== aC.yn)
				for (er = ak.jo - 1; 0 <= er; er--) aA = ak.jp[er], 0 < aAl[aA] && aAl[aA] < 255 && aAl[aA]--
		}();
		var aA, er, eY = Math.floor(.1 * ak.jo);
		for (eY = (eY = eY < 8 ? 8 : eY) > ak.jo ? ak.jo : eY, aA = aGo + eY - 1; aGo <= aA; aA--) er = aA % ak.jo, ! function(aA) {
			var hU = aHQ(aA) * aGu[aA];
			0 < aGs[aA] && aHu(aA, aGq[aA], aGr[aA], aGs[aA], aGt[aA]) ? ! function(aA) {
				for (var ef, eh, i, j, eC = !1, es = 0; es < 8; es++) {
					if (i = aGs[aA] + 2, j = aGt[aA] + 2, i > af.iN[aA] - af.iM[aA] + 1 || j > af.iP[aA] - af.iO[aA] + 1) return eC;
					if (ef = aGq[aA] - 1, eh = aGr[aA] - 1, !aHu(aA, ef, eh, i, j)) return eC;
					aGq[aA] = ef, aGr[aA] = eh, aGs[aA] = i, aGt[aA] = j, eC = !0
				}
				return eC
			}(aA) && function(aA, hU) {
				for (var ef, eh, i, j, eC = !1, aAu = aGs[aA], mG = 1 + Math.floor(.02 * aAu), es = 1; es < 5; es++) {
					if ((i = aAu + es * mG) > af.iN[aA] - af.iM[aA] + 1) return eC;
					if ((j = aI0(hU, i)) > af.iP[aA] - af.iO[aA] + 1) return eC;
					ef = af.iM[aA] + Math.floor(Math.random() * (af.iN[aA] - af.iM[aA] + 2 - i)), eh = af.iO[aA] + Math.floor(Math.random() * (af.iP[aA] - af.iO[aA] + 2 - j)), aHu(aA, ef, eh, i, j) && (aGq[aA] = ef, aGr[aA] = eh, aGs[
						aA] = i, aGt[aA] = j, eC = !0)
				}
				return eC
			}(aA, hU) && aHx(aA) : ! function(aA, hU) {
				var j, ef = aGq[aA] + 1,
					eh = aGr[aA] + 1,
					i = aGs[aA] - 2;
				for (;;) {
					if (i < 1) {
						aGs[aA] = 0;
						break
					}
					if (j = aI0(hU, i), aHu(aA, ef, eh, i, j)) return aGq[aA] = ef, aGr[aA] = eh, aGs[aA] = i, aGt[aA] = j, 1;
					ef++, eh++, i -= 2
				}
				return
			}(aA, hU) ? function(aA, hU) {
				var ef, eh, i, j, es, mM, j4 = af.iN[aA] - af.iM[aA] + 1,
					aI1 = Math.floor(.02 * j4);
				for (mM = -6 * (aI1 = aI1 < 1 ? 1 : aI1), es = j4; mM <= es; es -= aI1)
					if (j = aI0(hU, i = 0 < es ? es : 1), ef = af.iM[aA] + Math.floor(Math.random() * (af.iN[aA] - af.iM[aA] + 2 - i)), eh = af.iO[aA] + Math.floor(Math.random() * (af.iP[aA] - af.iO[aA] + 2 - j)), aHu(aA, ef, eh, i, j))
						return aGq[aA] = ef, aGr[aA] = eh, aGs[aA] = i, aGt[aA] = j
			}(aA, hU) : aHx(aA)
		}(ak.jp[er]);
		aGo = (aGo += eY) % ak.jo
	}, this.lJ = function() {
		var aA, g5, hd, he;
		if (bd.jk() % 4 == 1)
			for (aA = ak.jo - 1; 0 <= aA; aA--) g5 = ak.jp[aA], ab.a6t[g5] < 2 || ((hd = Math.max(aHH[g5] - 1, 0)) === (he = Math.max(aHI[g5] - 1, 0)) ? 0 === hd && (ab.a6t[g5] %= 2) : 0 === he && ab.a6t[g5] < 6 && (ab.a6t[g5] += 4), aHH[g5] =
				hd, aHI[g5] = he)
	}, this.a5C = function(player) {
		var aA = player + 2 * aC.eV,
			di = aAl[aA];
		return 0 < di && (aM.yu(50, player), aAl[aA] = 0, 255 === di)
	}, this.a4F = function(player) {
		return 255 === aAl[player + 2 * aC.eV]
	}
}

function cX() {
	var aI4, aI5, aI6;
	this.dU = function() {
		aI4 =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), aI5 =
			"Corrupted Earth;Returning Nature;Abandoned Areas;Restricted Area;Contaminated Area;Burning Land;Barren Land;Ravenland;Deadland;Dangerous Area;Devastated Land;Swampland;Plundered Land;Overrun Area;Undead Masses;Roaming Horde;Lurking Horde;Fallen Territory;Ghostland;Doomstruck Land;Infected Enclave;Plagued Nation;Forbidden Zone;Toxic Ground;Scorched Earth;Ruined City;Cursed Land;Diseased Colony;Forsaken Fields;Zombie Overlord"
			.split(";"), aI6 = "Protected Zone;Quarantine Zone;Last Bastion;Buffer Zone;Liberated Area;Resistance Zone;Rising Territory;Recovered Region;Rebel Sector;Emerging Lands;Safety Corridor;Isolation Area;Final Stronghold;Guarded Sector"
			.split(";");
		for (var a5U = ["K ", " Y", "E ", " Z", " z", " s", "S "], aI7 = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], aA = aI4.length - 1; 0 <= aA; aA--)
			for (var er = a5U.length - 1; 0 <= er; er--) aI4[aA] = aI4[aA].replace(a5U[er], aI7[er]);
		if (__fx.settings.realisticNames) aI4 = realisticNames;
	}, this.a3R = function() {
		var eY = aC.jn,
			zO = af.zO,
			zU = af.zU,
			playerNamesData = aC.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < eY)
			for (var aA = 0; aA < eY; aA++) zO[aA] = zU[aA] = "Player " + aw.j5(1e3);
		else
			for (aA = 0; aA < eY; aA++) zO[aA] = zU[aA] = playerNamesData[aA]
	}, this.a6 = function() {
		if (9 === aC.k4) {
			for (var dw = aw.random(), aID = aI6, aIE = aI5, hC = aD.hC, eY = aID.length, kV = aC.data.teamPlayerCount[7], zO = af.zO, zU = af.zU, aA = kV - 1; aA >= aC.jn; aA--) zO[aA] = zU[aA] = aID[(aA + dw) % eY];
			for (eY = aIE.length - 1, aA = kV; aA < aC.eV; aA++) zO[aA] = zU[aA] = aIE[hC[aA] ? eY : aA % eY]
		} else(2 === aC.data.playerNamesType ? function() {
			for (var eY = aC.eV, zO = af.zO, zU = af.zU, playerNamesData = aC.data.playerNamesData, aA = aC.jn; aA < eY; aA++) zO[aA] = zU[aA] = playerNamesData[aA]
		} : 1 === aC.data.playerNamesType ? function() {
			for (var zO = af.zO, zU = af.zU, aA = aC.jn; aA < aC.eV; aA++) zO[aA] = zU[aA] = "Bot " + aw.j5(1e3)
		} : function() {
			for (var aIF = aI4, eY = aIF.length, dw = aw.random(), zO = af.zO, zU = af.zU, aA = aC.jn; aA < aC.eV; aA++) zO[aA] = zU[aA] = aIF[(aA + dw) % eY]
		})()
	}
}

function cq() {
	this.aIG = [], this.aIH = [], this.dU = function() {
		this.aIG = [], this.aIH = []
	}, this.ih = function() {
		0 <= this.aIG.length && this.aII(this.aIG), 0 <= this.aIH.length && this.aII(this.aIH)
	}, this.aII = function(g) {
		for (var es = -1, aA = g.length - 1; 0 <= aA; aA--)
			if (g[aA].e7--, g[aA].e7 <= 0) {
				es = aA;
				break
			} for (aA = es; 0 <= aA; aA--) g.shift()
	}, this.a44 = function(id, yb, aIJ) {
		return this.eu(this.aIG, id, yb, aIJ)
	}, this.aIK = function(id, yb, aIJ) {
		return this.eu(this.aIH, id, yb, aIJ)
	}, this.eu = function(g, id, yb, aIJ) {
		return ! function(g, id, yb) {
			var aA, hL;
			for (aA = yb.length - 1; 0 <= aA; aA--)
				for (hL = g.length - 1; 0 <= hL; hL--)
					if (g[hL].player === yb[aA] && id === g[hL].id) return 1;
			return
		}(g, id, yb) && (aIJ && function(g, id, yb) {
			var aA;
			for (aA = yb.length - 1; 0 <= aA; aA--) g.push({
				player: yb[aA],
				id: id,
				e7: 384
			})
		}(g, id, yb), !0)
	}
}

function cW() {
	this.zU = new Array(aC.eV), this.zO = new Array(aC.eV), this.a2F = new Uint8Array(aC.eV), this.lc = new Uint8Array(aC.eV), this.iM = new Uint16Array(aC.eV), this.iO = new Uint16Array(aC.eV), this.iN = new Uint16Array(aC.eV), this.iP =
		new Uint16Array(aC.eV), this.gL = new Uint32Array(aC.eV), this.wV = new Uint32Array(aC.eV), this.gZ = new Uint32Array(aC.eV), this.fz = null, this.gD = null, this.gE = null, this.ey = null, this.ot = new Uint16Array(aC.eV), this.iq =
		new Uint16Array(aC.eV), this.ir = new Uint16Array(aC.eV), this.zN = new Uint16Array(aC.eV), this.zL = new Uint8Array(aC.eV), this.a2N = new Uint16Array(aC.eV), this.dU = function() {
			this.zU.fill(""), this.zO.fill(""), this.a2F.fill(0), this.lc.fill(0), this.iM.fill(0), this.iO.fill(0), this.iN.fill(0), this.iP.fill(0), this.gL.fill(0), this.wV.fill(0), this.gZ.fill(0), this.fz = new Array(aC.eV), this.gD = new Array(
				aC.eV), this.gE = new Array(aC.eV), this.ey = new Array(aC.eV), this.ot.fill(0), this.iq.fill(0), this.ir.fill(0), this.zN.fill(0), this.zL.fill(0), this.a2N.fill(0)
		}
}

function co() {
	this.aBE = function(player) {
		aF.lb(player), aC.yp++, af.a2F[player] = 2, af.zN[player] = bg.zg.aFa(), player === aC.eI && (aW.show(!1, !1), aV.a9S(), bP.yY.zJ()), ae.a5C(player)
	}
}

function cQ() {
	this.jp = null, this.jo = 0, this.a3V = function() {
		for (this.jo = 0, aA = aC.eV - 1; 0 <= aA; aA--) 0 !== af.lc[aA] && this.jo++;
		this.jp = new Uint16Array(this.jo);
		for (var eY = 0, aA = 0; aA < aC.eV; aA++) 0 !== af.lc[aA] && (this.jp[eY++] = aA)
	}, this.lI = function() {
		for (var gL = af.gL, wV = af.wV, zL = af.zL, jp = ak.jp, aA = ak.jo - 1; 0 <= aA; aA--) {
			var di, g5 = jp[aA];
			gL[g5] <= bJ.dj(wV[g5], 4) ? aj.dd(g5) : gL[g5] >= wV[g5] ? (di = gL[g5], 250 <= (wV[g5] = di) && (zL[g5] = 1)) : wV[g5] -= Math.max(1, bJ.dj(wV[g5] - gL[g5], 1e3))
		}
		this.aIO()
	}, this.aIO = function() {
		for (var lc = af.lc, kU = this.jp, aA8 = this.jo, aA = aA8 - 1; 0 <= aA; aA--) 0 === lc[kU[aA]] && (kU[aA] = kU[--aA8]);
		this.jo = aA8
	}
}

function cY() {
	var aIP;
	this.kD = null, this.kC = 0, this.dU = function() {
		aIP = [], 9 === aC.k4 && this.aIQ()
	}, this.aIQ = function() {
		var aIR = [60, 80, 105, 150, 190, 333];
		this.kD = [0, 0, 0, 0, 0, 0], this.kC = 0, aC.jn <= aIR[0] ? (this.kC = 256 - bJ.dj(256 * aC.jn, aIR[0]), aC.jn <= 24 ? this.kD[5] = bJ.dj(Math.max(aC.jn - 6, 0), 6) : this.kD[5] = 3 + bJ.dj(aC.jn - 24, 3), this.kD[0] = aC.eV - aC.jn -
				this.kC - this.kD[5]) : (this.kD[5] = Math.min(15 + bJ.dj(100 * (aC.jn - 60), 150), 179), this.kD[0] = 512 - aC.jn - this.kD[5]), aC.k8 = aC.eV - aC.jn, aC.data.numberTeams = (0 < aC.jn) + (0 < aC.k8), aC.data.playerCount = aC
			.w1 = aC.jn + aC.k8, aC.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, aC.jn + this.kC, aC.k8 - this.kC]), aC.a3L.a3P()
	}, this.aFh = function(player) {
		aIP.push({
			player: player,
			g0: 14 + aw.j5(20)
		})
	}, this.ih = function() {
		if (9 === aC.k4)
			for (var aA = aIP.length - 1; 0 <= aA; aA--) --aIP[aA].g0 <= 0 && (ae.p6(aIP[aA].player, 0, ai.qn.xe + ai.qn.xs), aIP.splice(aA))
	}
}

function d5() {
	function aIg() {
		return {
			ej: bQ.ej,
			ek: bQ.ek,
			vS: bQ.vS,
			vO: bQ.vO,
			vP: bQ.vP,
			vT: bQ.vT,
			eE: bQ.eE,
			mapSeed: bQ.mapSeed
		}
	}

	function aIY(aA) {
		return 1 !== aA && bQ.aBi(aA) && aA !== bQ.aIh()
	}
	this.aIT = 22, this.aFs = 4096, this.ej = 0, this.ek = 0, this.vS = null, this.vO = null, this.vP = null, this.vT = null, this.eE = 0, this.mapSeed = 0, this.vQ = !1, this.vR = new aIU, this.vI = new aIV, this.a5a = new aIW, this.dU =
function() {
		this.vI.dU()
	}, this.a6 = function(map, aIX) {
		((map %= this.aIT) !== this.eE || aIY(this.eE) && aIX !== this.mapSeed) && (this.vQ = !1, this.vR.aIZ(), aw.a3Q(map), this.eE = map, this.mapSeed = aIX, aIY(map) && (bQ.vI.vJ[map].aIa = aIX), this.aBi(this.eE) ? (map = bQ.vI.vJ[this.eE],
			this.ej = map.i, this.ek = map.j, aw.a3Q(map.aIa), ao.a6([this.ej, this.ek, map.lh, map.le]), aIc(), an.aId(), ao.aIe()) : aIb())
	}, this.aIf = function(map, aIX) {
		var fF = aIg(),
			map = (this.a6(map, aIX), this.vR.aIZ(), aIg());
		return this.ej = fF.ej, this.ek = fF.ek, this.vS = fF.vS, this.vO = fF.vO, this.vP = fF.vP, this.vT = fF.vT, this.eE = fF.eE, this.mapSeed = fF.mapSeed, map
	}, this.a3l = function(canvas) {
		canvas && this.vS !== canvas && (this.ej = canvas.width, this.ek = canvas.height, this.vS = canvas, this.vO = this.vS.getContext("2d", {
			alpha: !1
		}), this.hS = this.vO.getImageData(0, 0, this.ej, this.ek), this.vT = this.hS.data, this.eE = this.aIh(), this.mapSeed = 0, bQ.vI.vJ[this.eE].name = aC.data.mapName)
	}, this.eD = function(aA) {
		return 3 === aA || 7 === aA || 9 === aA || 21 === aA || aA === this.aIh()
	}, this.aIi = function(aA) {
		return 2 === aA || 7 === aA || 9 === aA || 20 === aA
	}, this.aIj = function(aA) {
		return 1 === aA
	}, this.aIh = function() {
		return this.aIT
	}, this.aBi = function(aA) {
		return void 0 === this.vI.vJ[aA].aIk
	}, this.a3k = function(pP) {
		return 0 === pP.mapType ? pP.mapProceduralIndex < 10 ? pP.mapProceduralIndex : 10 + pP.mapProceduralIndex : 1 === pP.mapType ? pP.mapRealisticIndex + 10 : void 0
	}, this.aBj = function(pP, aIl) {
		0 === pP.mapType ? pP.mapProceduralIndex = aIl < 10 ? aIl : aIl - 10 : 1 === pP.mapType && (pP.mapRealisticIndex = aIl - 10)
	}
}

function aIU() {
	function aIu() {
		bQ.vR.ih()
	}

	function aJ0(g5, aIz) {
		0 < aIz && (bQ.vT[g5] += aIz, bQ.vT[g5 + 1] += aIz, bQ.vT[g5 + 2] += aIz)
	}

	function h0(g5) {
		return bQ.vT[g5 + 2] > bQ.vT[g5] && bQ.vT[g5 + 2] > bQ.vT[g5 + 1]
	}
	this.a7p = -1, this.zu = 0, this.aIm = 0, this.aIn = 8, this.aIo = 32, this.aIp = 8, this.aIq = 32, this.aIr = [0, 0], this.a6t = [0, 0, 0, 0], this.iH = null, this.aIs = !0, this.aIt = !1, this.aIZ = function() {
		-1 !== this.a7p && clearTimeout(this.a7p), this.a7p = -1, this.iH = null, ao.aIe()
	}, this.dU = function() {
		7 === aZ.a01() || this.aIt || (this.aIs = !0, this.zu = 0, this.aIm = 1, this.aIr = [bQ.vI.vJ[bQ.eE].vl[0], bQ.vI.vJ[bQ.eE].vm[0]], this.a6t = [bQ.vI.vJ[bQ.eE].aIk[3], bQ.vI.vJ[bQ.eE].aIk[4], bQ.vI.vJ[bQ.eE].aIk[5], bQ.vI.vJ[bQ.eE].aIk[
			6]], this.aIn = bQ.vI.vJ[bQ.eE].aIk[7], this.aIo = bQ.vI.vJ[bQ.eE].aIk[8], this.aIp = bQ.vI.vJ[bQ.eE].aIk[9], this.aIq = bQ.vI.vJ[bQ.eE].aIk[10], this.aIs ? this.a7p = setTimeout(aIu, 16) : this.ih())
	}, this.ih = function() {
		if (8 === aZ.a01() && aG.lv()) this.a7p = setTimeout(aIu, 16);
		else {
			if (0 === this.zu) {
				var aIa = aw.aIv();
				if (aw.a3Q(bQ.vI.vJ[bQ.eE].aIk[2]), ao.a6([bQ.ej, bQ.ek, bQ.vI.vJ[bQ.eE].aIk[0], bQ.vI.vJ[bQ.eE].aIk[1]]), aw.a3Q(aIa), this.iH = ao.aIw(), this.zu++, this.aIs) return void(this.a7p = setTimeout(aIu, 16))
			}
			for (var g5, eK, aIa = this.aIs ? 10 : 1e6, aIa = bQ.ek - this.aIm - 1 < aIa ? bQ.ek - this.aIm - 1 : aIa, wi = this.aIm + aIa, eh = this.aIm; eh < wi; eh++)
				for (var ef = 1; ef < bQ.ej - 1; ef++) h0(g5 = 4 * (eK = ef + eh * bQ.ej)) ? this.aIx(g5, eK, 1) : (this.aIx(g5, eK, 0), function(ef, eh, g5) {
					return 1 < ef && h0(g5 - 4) || ef < bQ.ej - 2 && h0(g5 + 4) || 1 < eh && h0(g5 - 4 * bQ.ej) || eh < bQ.ek - 2 && h0(g5 + 4 * bQ.ej)
				}(ef, eh, g5) && this.aIy(ef, eh));
			this.aIm = wi, this.aIm >= bQ.ek - 1 ? (bQ.vO.putImageData(bQ.vP, 0, 0, 1, 1, bQ.ej - 2, bQ.ek - 2), bd.dc = !0, this.aIZ()) : this.aIs && (this.a7p = setTimeout(aIu, 16))
		}
	}, this.aIx = function(g5, eK, dx) {
		aJ0(g5, Math.floor(this.aIr[dx] + this.a6t[dx] * this.iH[eK] / 1e4) - bQ.vT[g5])
	}, this.aJ1 = function(g5, dw, aJ2, dx, a6t) {
		aJ0(g5, Math.floor(this.aIr[dx] + (1 - dw / aJ2) * a6t) - bQ.vT[g5])
	}, this.aIy = function(kr, ks) {
		for (var g5, dw, aJ2, a7f = kr - this.aIo, aJ3 = ks - this.aIo, wj = kr + this.aIo, wi = ks + this.aIo, a7f = a7f < 1 ? 1 : a7f, wj = wj > bQ.ej - 2 ? bQ.ej - 2 : wj, wi = wi > bQ.ek - 2 ? bQ.ek - 2 : wi, eh = aJ3 < 1 ? 1 : aJ3; eh <=
			wi; eh++)
			for (var ef = a7f; ef <= wj; ef++) h0(g5 = 4 * (ef + eh * bQ.ej)) ? (aJ2 = this.aIn + (this.aIo - this.aIn) * this.iH[ef + bQ.ej * eh] / 1e4, Math.abs(kr - ef) > aJ2 || Math.abs(ks - eh) > aJ2 || aJ2 <= (dw = Math.sqrt((kr - ef) * (
				kr - ef) + (ks - eh) * (ks - eh))) || this.aJ1(g5, dw, aJ2, 1, this.a6t[3])) : (aJ2 = this.aIp + (this.aIq - this.aIp) * this.iH[ef + bQ.ej * eh] / 1e4, Math.abs(kr - ef) > aJ2 || Math.abs(ks - eh) > aJ2 || aJ2 <= (dw = Math
				.sqrt((kr - ef) * (kr - ef) + (ks - eh) * (ks - eh))) || this.aJ1(g5, dw, aJ2, 0, this.a6t[2]))
	}
}

function aIc() {
	2 === bQ.eE ? aJ4([256], [256], [0, 205, 256], [500, 500, 0], [0, 0, 0]) : 7 === bQ.eE ? aJ4([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0]) : 8 === bQ.eE ? aJ4([410], [410], [0, 120, 210], [0, 80, 640], [0, 0, 0]) : 9 === bQ.eE ? aJ4([
		512], [512], [0, 70, 180, 200, 290, 420, 512], [500, 500, 0, 0, 500, 500, 0], [0, 0, 0, 0, 0, 0, 0]) : 20 === bQ.eE && aJ4([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0])
}

function aJ4(aJ5, aJ6, aJ7, aJ8, aJ9) {
	for (var ef, eh, aJB, aJC, a1H, aJD, hs = aJ5.length - 1, aJA = bQ.ej + bQ.ek, eY = (aJA *= aJA, aJ7.length), aA = eY - 1; 0 <= aA; aA--) aJ7[aA] *= aJ7[aA];
	var aJE = new Array(eY),
		aAi = new Array(eY),
		aJF = new Array(eY),
		f0 = ao.aIw();
	if (void 0 === aJ9)
		for (aJ9 = new Array(eY), aA = eY - 1; 0 <= aA; aA--) aJ9[aA] = 0;
	for (aA = 1; aA < eY; aA++) aJE[aA] = aJ7[aA] - aJ7[aA - 1], aAi[aA] = aJ8[aA] - aJ8[aA - 1], aJF[aA] = aJ9[aA] - aJ9[aA - 1];
	for (ef = bQ.ej - 1; 0 <= ef; ef--)
		for (eh = bQ.ek - 1; 0 <= eh; eh--) {
			for (aJB = aJA, aA = hs; 0 <= aA; aA--) aJB = (aJC = (ef - aJ5[aA]) * (ef - aJ5[aA]) + (eh - aJ6[aA]) * (eh - aJ6[aA])) < aJB ? aJC : aJB;
			for (a1H = aJ8[eY - 1], aJD = aJ9[eY - 1], aA = 1; aA < eY; aA++)
				if (aJB < aJ7[aA]) {
					a1H = aJ8[aA - 1] + aFA((aJB - aJ7[aA - 1]) * aAi[aA], aJE[aA]), aJD = aJ9[aA - 1] + aFA((aJB - aJ7[aA - 1]) * aJF[aA], aJE[aA]);
					break
				} aJG(bQ.ej * eh + ef, a1H, aJD, f0)
		}
}

function aJG(dx, a1H, aJD, f0) {
	a1H < 500 ? f0[dx] = bJ.dj(f0[dx] * a1H * 2, 1e3) : 500 < a1H && (f0[dx] += bJ.dj(2 * (1e4 - f0[dx]) * (a1H - 500), 1e3)), f0[dx] += bJ.dj(aJD * (10 * a1H - f0[dx]), 1e3)
}

function ca() {
	var aJH;

	function aJR(a1i, hU, ef, eh, globalAlpha) {
		bQ.vO.save(), bQ.vO.globalAlpha = globalAlpha, bQ.vO.imageSmoothingEnabled = !1, bQ.vO.scale(hU, hU), bQ.vO.drawImage(a1i, Math.floor(ef * (bQ.ej / hU - a1i.width)), Math.floor(eh * (bQ.ek / hU - a1i.height))), bQ.vO.restore()
	}
	this.a5X = 0, this.a5Y = 0, this.a5Z = 0, this.a5a = 0, this.dU = function() {
		(aJH = new Array(bQ.aIT))[0] = {
			i: [0, 5e3, 8e3, 1e4],
			dw: [220, 250, 255, 220],
			sB: [190, 220, 0, 0],
			es: [170, 200, 0, 0]
		}, aJH[1] = {
			i: [0, 4e3, 5e3, 6e3, 1e4],
			dw: [25, 0, 100, 0, 25],
			sB: [25, 0, 0, 0, 25],
			es: [25, 0, 0, 0, 25]
		}, aJH[2] = {
			i: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			dw: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			sB: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			es: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aJH[3] = {
			i: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			dw: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			sB: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			es: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, aJH[4] = {
			i: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			dw: [10, 10, 20, 10, 10, 170, 212],
			sB: [20, 20, 60, 100, 100, 110, 170],
			es: [70, 70, 160, 30, 30, 60, 120]
		}, aJH[5] = {
			i: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			dw: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			sB: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			es: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aJH[6] = {
			i: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			dw: [10, 10, 60, 255, 255, 200, 200],
			sB: [10, 10, 60, 255, 255, 200, 200],
			es: [80, 80, 255, 255, 255, 200, 200]
		}, aJH[7] = {
			i: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			dw: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			sB: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			es: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aJH[8] = {
			i: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			dw: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			sB: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			es: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aJH[9] = {
			i: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			dw: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			sB: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			es: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aJH[20] = {
			i: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			dw: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			sB: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			es: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, aJH[21] = {
			i: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			dw: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			sB: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			es: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.aId = function() {
		var aJQ, aA, er, fF, hS = function() {
				var hS;
				return bQ.vS = document.createElement("canvas"), bQ.vS.width = bQ.ej, bQ.vS.height = bQ.ek, bQ.vO = bQ.vS.getContext("2d", {
					alpha: !1
				}), hS = bQ.vO.getImageData(0, 0, bQ.ej, bQ.ek), bQ.vT = hS.data, hS
			}(),
			i = aJH[bQ.eE].i,
			dw = aJH[bQ.eE].dw,
			sB = aJH[bQ.eE].sB,
			es = aJH[bQ.eE].es,
			f0 = ao.aIw(),
			eY = i.length - 2,
			aJL = new Array(1 + eY),
			aJM = new Array(1 + eY),
			aJN = new Array(1 + eY),
			aJO = new Array(1 + eY);
		for (er = eY; 0 <= er; er--) aJL[er] = i[er + 1] - i[er], aJM[er] = dw[er + 1] - dw[er], aJN[er] = sB[er + 1] - sB[er], aJO[er] = es[er + 1] - es[er];
		for (aA = bQ.ej * bQ.ek - 1; 0 <= aA; aA--)
			for (er = eY; 0 <= er; er--)
				if (f0[aA] >= i[er]) {
					fF = f0[aA] - i[er], bQ.vT[4 * aA] = dw[er] + aFA(aJM[er] * fF, aJL[er]), bQ.vT[4 * aA + 1] = sB[er] + aFA(aJN[er] * fF, aJL[er]), bQ.vT[4 * aA + 2] = es[er] + aFA(aJO[er] * fF, aJL[er]), bQ.vT[4 * aA + 3] = 255;
					break
				} bQ.vO.putImageData(hS, 0, 0), bQ.aIj(bQ.eE) && aa.sE() && bQ.aIj(bQ.eE) && (hS = aa.aEK("arena"), aJQ = aa.aEK("territorial.io"), aJR(hS, 5, .5, .5, .1), aJR(aJQ, 2, .5, .45, .1)), bQ.vQ = !0, bd.dc = !0
	}, this.a3T = function() {
		for (var g5, ef, eh, aJS, hJ, fH, a5Y = 0, i = bQ.ej, j = bQ.ek, fF = i * j * 4, aJT = aAI, aJU = bQ.vT, aA = i - 1; 0 <= aA; aA--) aJT[(g5 = aA << 2) + 2] = aJT[fF - g5 - 2] = 3;
		for (fF = 4 * i, aA = j - 1; 0 <= aA; aA--) aJT[(g5 = aA * fF) + 2] = aJT[g5 + fF - 2] = 3;
		for (aJS = i - 1, hJ = j - 1, eh = 1; eh < hJ; eh++)
			for (fF = eh * i, ef = 1; ef < aJS; ef++) fH = 1 - (aJU[(g5 = fF + ef << 2) + 2] > aJU[g5 + 1] && aJU[g5 + 2] > aJU[g5]), aJT[g5 + 2] = 2 - fH, a5Y += fH;
		this.a5X = (i - 2) * (j - 2), this.a5a = 0, bQ.eD(bQ.eE) && (bQ.a5a.aJV(), bQ.a5a.aJW()), this.a5Y = aC.jX = a5Y - this.a5a, this.a5Z = this.a5X - this.a5Y - this.a5a
	}
}

function aIb() {
	var pE;
	10 === bQ.eE ? pE =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === bQ.eE ? pE =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === bQ.eE ? pE =
		"JJAf2uP6y-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeu0-F-n5a_GG4KJGGG3G3G3FFJFmKGJ4JGGGG3GJJFJG3G3G323G--kLPeduaKGFGGGG443JJJJJJG--B-C0FJK__443-BJ-66wmpBnJopCMJpCCCIIIJoopKKICKCBnCKJgooopMIDOzzSzUzbzzUSyTUxxrrrrrP1XcXXX9Hcn9cceemece7cPIoeX0sWWaOWVNTOcTNNcN0V0V5-N0aOa-0V--N50a5Obyc-M0z3TPOdgBnBF0NOpxpMV7-M2mMiLbinz03F0sTx8mfrNT-2l6QEdMwwp-5XX7UMTP1V1GIuvaNn-5Xfxrpw5XV1GNTEfn4-_XvzjAAA9mfA9ed9fpzyTUzyUaUyOX3n59NTKLLKHPPPO_LK4iidea_O_QeideeaLOLLJG3-0eeddOaPO_OKLKzEznzjgnnzBykknByEYnByug-3332ElJ222-2wBko2BnBnBwwzwx-9Y6j6rrrkccc-E5ctEizpJF-aDYgSMGz-X10G6VyjiyuuPeiuzjivh3G3K3G--k-9JGFAPEIZSKBghKSMIpKpCJnI9gcXeccehHccoeXBeoppKIJoghIHnCJnJmemmecmfA9jyTUzzzbbxbV0WaTT-OtWWWV0zxtyUN6yUzSxrSqTUztaN71190V7-5V15VUy--V-lxHEg--33oL-67Dhyu0--3FoL--7ahw-LGYowfzu-0HFMIfF-aHWWwxxxcXX-E8ZrUdfVl--TIJLzSr17V0wcDLvivjysGK3G4XaJb1zppIJpBccccge7fUxx9eocX7cXX6y7Y99Heggen9nJdAHp9Xnp9IIJfICIBdCKKIIMMJme19eXxxp9X9VVfEMMMSBpooe7XCSBomccxxpHcrKKCMHmXXmcxoeX1mpJe70BrMJmVV--gxExIpJcX71nKCJmhCKKCIJoopCKKKHX8KHd9nKrKBj6xrSrKpz6xSMMSrKppwObaP-UzSCAICIKCIKKKCMMKKCpCMMSrrrKpKprUSprMUSMrSprKrSpSrUrUSxpxprSrMrMprSSSppMKprSprrSrxKSUSqUGbqUbbrxrSxrSrKHXXeggeYBnBgmnBnKCrJnKpIKpBnKCMMrSS9chKKIBeX77EIAE5OxIIKKKIIEKSKSKKSKKMKpKpKKSMSSSSrSzxxxzlzzUzzzzzUxrMMMMSxxxrrxrrxxxxzUzOzrbxzrxzzzw6w6yOtttttyUbbyTTTTTTTTTUtzIrzbzbzbba-71-VVV77V--7711-V1-1---51--1-1-V0cN-N5VN1e-ee7-1mc71Xe9fIBcVV0WbyOzxX-VV7VNN5TUzUu1ce9menBecmf9gxHc7c7V-777---50VP-V-N-0WxppSJpr6zyObzttV6rMKpUyObttbryUbzWaP0sNNOX757X97X7ce9XXXXXVc7-V-X7VX5-V7eeA9menA9fBnCBnIIJoorMIRObpIKMJpppSSSMSoeX71-V7777X97c5V-ccWV0VX77--NN55-N--7U5111cXXenBcc7fABgcX117X7c-gf9emV---1--XXXVX7X17579VVV117Xed9XecXX--WV5Uzz6zyUzrSrUUaNUlxtzXXXee1777X1e-5NOy--WV5OttttaTUzyUrxxtzzzlzMUrzzxaUttbbxWzxpSonBmpCCJpCKCIJpJooeACHpprSxaOV577U6sOWV-NNN70WVOWzwTTT5NUxryUba5NNOba1cc79cXX199X-91X99mhIHfJmXgxxxpHe9XccX997c7X0zV--V-N7P6k49V711-111X-77cX79mmeHeccV1mdbn_Uno-DKNVSo1-O9kaiKKzzEzpK-8_SLEzzzeeeV1Hinzjh3-8_UsM9mjtyTVBHk8AfiyvivizpG43G3GG--0OIzV2mnjMaLEBxn29mc4SSpprSSSUprrKprSSpppKMMSrMrxrKIKHhKHfIKKpIBpCIIJpIJnIKpSKJo1AKKpppxprSprpMKphIKhMUSrCKMRpMKrrSMMMMSKUVUxxUxSJe19efAKKUbKnMxKKUKIKUStaSrUMTUrzbzxxrSzzUy5SSKtbqprTprzSxxSrBXe9ghSrMMUyUzzbySKrUKpUSpSUMtV---D--0aN-X9997977VVe9XD-19XX1-9XcXXXXYxzUttzbV-7VX78by0rUSppKMbs5-V77V77X-X71--17-X-7V-0WWVN-6byTOrJepKpSrpxrUSSIKSKSzrrrs797c1711ObUSxxpSSSSSSy5--7997VV6z_rrSrxpSprs-7VX17XeXVXN-11-TUUSxztyTT5ObzrSSrzbtbbtUKzrxrSxzUrzUzShKhMKrxzzzxyMtzqnAA9mgfAAACKICBnKzbbWWbaOtbaOaTUbtyUyTTTOaOa556zyMxrUtaTUzrxrrrzSzxzbta5N0s-ee997cX97cX7cX7X771-V-aT--V17V7X1--V7Xea6ty5T5Mts5--5-550aT55NU_ySxxta5OVD--0VN5NND-N--8a6a5OsN1og55OVVOta-75OTSqhCMrBmhMbbtzzzzta--NN5-8Us0V-N1eD-XN0VOKppraT18zs0SyOUaOa5OaN1-VcX7X5OSpSxpMSra5NNObV5-N19cVc-W_KMSrrxxztzsND--MJpKMrzb_pyTMzUa5-0a5-X-VOIMMMSBnKKSMrMzprzaQBen1ceeXcccempprtzUUSv9mmfMrxzUMxpUUUrzbztrxyOzUxrrMzbWbJppSvC7gmenA9mgggfABgnBf9nBppUrttbzUzCKrSSxzbaUxPfMSKpKnJhRpIAIIKrSzUMMzxztyTObaTOWWaTTTUbzzrza5ObaTOWbbbUrSrStzyUUzbyN--s5T2rs-1XeXeefBn97VfBnIBemf97cXcX7bWV1111c1eiN7f-ABa6s19n77X7g97cceX7f11UzUppry-N0MMAIKzV4UW_rJoppza55-TMSsNObztaOa6KzV-77N-SKKSUzbaOaOyUtzzzyTUbtzxrsOaObtttSraOWaObzzzzz_ptaUbyMzzyUtbVUyUrUzzzzzUzzxyQMzzUzzzeeeeXee9Xeee9eeeefKMIKcf9ggnABemefCCKzrLf99X1fABgeeXAKSSMKxxzUSrSraMRpSxrQA7X7X9oopBo1N9gnIKCIJmmmnKIKJomn7emfMBc51997cenKMUzPmegmfMMSzzyNA9OzzUUIKMUKrKpSSrUrxza6SrMSrrMSrUUxzrxxxrUSSzSSxSUSxSrSSrSrpUrMMUSprrUUUUSpKrySzSrxzzxpzSppprrzUrSpSSCSRprSMKKpMKrMKKCIIIBohIBonAAABnABmgemhBmmmeenBnA9X9ecceeXX7Xemmcemgef9nA7en9kecee9eXeX1-enBkeX7XeXce92VXX99ceACBn9XX77XVVV--X7XemmgeeXXX997VVc75OVeX9hAAA7eeme9eXe9Xeeee9e9ceemmmmf9meegfHenBmfBnA9mgggemnBggfBnIHmmekeeceX9e9cXXXmoeceeXce9Xce99eXnBpCBpSrSrSrMSxzzxyeeeeemkeemgf9pprUzUHmeXXem99e9eceef1dbs17ecepKrMgg9XeXccX-Xeen7cXeenBmnBghCBgnBACCCMCKJohCCMrzzzyUzzzzqognBmnCKprMSMACKpz_wmoogepCKrMSMStUZkeeeeAH15-11-X9hCKMSRomcgpKzprpprs0z_rKppzrSrzSpIKIBgXmprrUKIKKrttpKzSUBomm97ghJpSyUzSzzzUbzzUtrzfAI9epnHceceemegghUUzxzWbzzrbTopMSta5OVOrzzUSKUUxrsOrpxQCSrIIKSxSrSzSrzUrUUtttztUtbzxxMaOV-sOWV5--NNOUzUzxzxzUUrSxrrUSrrSzrrSxSprSppprSpxrrrUUrbbtzrbbrztzzrbbyTT6bSyOa0aTOaOy5T6aTOzbzpxxxxpzUSxs7XESrKyOUrtaOa17zyUaTOaOSxprKCKgnIAAABnBnKppppppJnHnCMJnCCKMSrSSKKICCKKKKppKo-2AYFDB--MPns--j8uk-0TwQV7mzO6ievyyvFGK3F--qNX0zxzxrXce9c-3mKUw-DOJuzw9-lBkNyuuuviyzjJK43G000-OaPJEprzSKMrrkccc-1997-2C8pDo-uPOqwf9mnbbtyTV-2Jzv--5gXT-CCmSUvvGG--5xsy-0D-rE-4b-qzSqX7--sMmk-0lNEV-IZ0nk-tm6EnFN-Rt3BvgF-5ReOUc-otNAvisG30DRoZzUzzzrwP9eeecc-3uJps0eSSKRrMGzrzrrM-V-eXXeX--2fpn--6MiT-0DoXD--6ULD--E2lg--TGhs--wrkk-0uNAV-npyzx-0bkCEF-6EeL6jG-5bpJQAEbaV0nuubvp-0dya3mhrk--BzMKzF28zMOzrMUP779c-gziXufkG-2byBQrcV-J-IhV490elopIKKJzlX70V---2FCPyV-HVlaxpX7-x0_hzvvGGF-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--1u44Wxxxr17cc-CFkqTusBG-2cO5jMcV3oE3YuuiB3FF0P7tWrre9-4GLRUh--19rRV-JN8nk-1B7iV-3OQA--cpNzV8oQxrjjizyyw4KKG44-1d-ezGV-_77wzvGF0eJQZmxL0V-C9jlvF09OI0rTX--JoI0k-PTDyyV-40oK--e5AbV7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL--1qoP6bvVF-qtlNxCKCUa0V7V0xqOguudaNznk-G3-Lvq2RrOc-2N7SOfvlG-2g3LFmnKUrla-7X--Vg031A1AJgoxMSporMSSr-XV--10aNXeV-y7CVQfz0GF0RIcNptae02XdsiLTezvzyyyzjzGGGGGGGGG3--GRVT-QXt0TTyyzwK4GJ-r5K0genCxtwT-V-yBnotTvg-F-RR4WyVBNuCtdejvYyi-knBLOFJJF3BSAjnMSzUbsX9XeV3t0vf_fzv-GF0wZ8bxrOe9--8AQA--HN1m-CZlGTLRwx-cmONzIxrprppKprUyUts-XccX1e97cXc--_7pw029QbgoonJUROV5-V-iJrguik4--mdjY-0tQAdaRk-BiCss-aMQLTjJ--3jUaV4tUqAvjzx5KGF-YB7rwfzwOeVuOXlO_O__Kbj2vizuviyuuvfeveTiviynvYziefiiefvfiYvjB-444G3F-0-2-kJ304K3GGG3JG34--F3GJ-IBbGxS--3yOw8PPd_GaaiC-Eueibvyvx-304--C-2IBzcggmeenCMSrwOaOzKHmnrUSxzTOu--V7VVV9c-yPFVPuf0-F0gt0ZpKs17-aTPhOiBFxRy2ZmgnJeeXAICBnBenJzSrKKrrSSrKpMKJnBnCKMSMIKMrxSOV0V0zzUKSpppSKSEKIESOV-Oa0sOzUrMKSppSUMMkP77V-0a1--VP-17--71--7-UxSrrrrSJpqOtzzOX770hBcX7V5--XXV11cc717X7X9XX999777X7e-_chDLLiiivYEl33G3-Vock29fSpSKonCMU5OaNV-NNX7c2DaQYtPjzvjfiywGK33G3G-0xDlzpUyX9V5PSx2jyuzVGGK-0CFZWnwNV1uXF0_fBo1IJJoSSJnACCCKppSxyUV-117-N711-6evlav4-JpSyQKUSSSpaX517c-c-yg6luPzk3F0CNJQpy9-iumBnaLKKeudOKG_KLKLLLueLOaQEEjEjyinEyzejjnskBnwC043F2-nn2zE2EEoKGKFASOdporHX8CBhzxraUqUzSlzSX77eeeXBc0V-LhikvW--KmlL-EfebDLTskk-YMe-RrMTV7V2uyCCaPEBC-5q1sjK6a7V-A2Ih-Aq892rMUNP7cc-TlB1tv--ANsVBjV2v6d6aOwnp-7qIGAIJlaNV1imQQOPszivwzE8GGGGJ0vODuRhCrppCBpULN5N7NX90WX-6gppqPk-GqSXfBnqOxtaUemec-5nnTs-YPD2wz6re9-3QGmz__bnno-2PJQD-KhKnTaaTn-nF-0Pg_N-aphUzj4FKhhRbmhUrKHohIzMpxrpKKKSMKSKxrU5N5OaUL--X11777Hf9VX-N7--5P-XHXe-0hhca-WqtqMCppppSJp6ltz5NVXV-X17eV0QUJbjJ-nREfwnBwOtbae-IiGGaLPvEk0-Er7eI9nCKpUa0V--1v_ZSfcl--0T7Zc0TwsLPNzgz8K4--MdCP-8jMTqMno-QTv6BfDUs-CjSgLdjBG--rknYV0vttlfW-0CxT2mcUV6Qv4daeffkn3J3B-EUOXBja1CjifiOvd_LdKKaaOaK--nBw8aOFFeeKbfivzjix3En-2Ennz-n-3-2UYTi-bkAQ5LLKaRzgwnznGJ-MWJCRr5NV0wBylcwF0D6jaola--BJZx--NfgX-6lRkav3--sx_2V7RUnUaK_aLLQjzzz-atBrI9mgmnICCpCKLTOaOzs0aNOWV9c-E9stskaiM_-pIJnKoxxzxzrUrrxzUxzSrUSzSpISxzxbxzzzzrzzrzxbzrzUta-0YBe7mf9eeV--P9eee7XXcecVXeXceA9eeeXX-c7T9Bee997n9X-0wqC2ylF4iQ5frxSUzJzqNX9cX97V1wr6EuslF-YbY3xSUaeX--x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === bQ.eE ? pE =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === bQ.eE ? pE =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === bQ.eE ? pE =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === bQ.eE ? pE =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === bQ.eE ? pE =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === bQ.eE ? pE =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === bQ.eE && (pE =
			"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV"
			), (new vB).vD(pE)
}

function aIV() {
	this.vJ = null, this.aJX = null, this.aJY = null, this.dU = function() {
		var aJZ = [120, 105, 92],
			cos = [12, 12, 60],
			aJa = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aJb = [140, 130, 120],
			aJc = [12, 12, 76],
			aJd = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aJe = [130, 117, 106],
			aJf = [12, 12, 68],
			aJg = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.vJ = new Array(bQ.aIT + 1), __fx.customLobby.setMapInfo(this.vJ), this.vJ[0] = {
			name: L(134),
			i: 230,
			j: 230,
			lh: 1e3,
			le: 2e3,
			aIa: 173
		}, this.vJ[1] = {
			name: L(135),
			i: 800,
			j: 800,
			lh: 100,
			le: 50,
			aIa: 43
		}, this.vJ[2] = {
			name: L(136),
			i: 512,
			j: 512,
			lh: 128,
			le: 32,
			aIa: 0
		}, this.vJ[3] = {
			name: L(137) + " 1",
			i: 960,
			j: 960,
			lh: 60,
			le: 8,
			aIa: 0
		}, this.vJ[4] = {
			name: L(138),
			i: 900,
			j: 900,
			lh: 100,
			le: 5,
			aIa: 0
		}, this.vJ[5] = {
			name: L(139),
			i: 1e3,
			j: 1e3,
			lh: 100,
			le: 40,
			aIa: 0
		}, this.vJ[6] = {
			name: L(140),
			i: 1e3,
			j: 1e3,
			lh: 100,
			le: 20,
			aIa: 0
		}, this.vJ[7] = {
			name: L(141),
			i: 1024,
			j: 1024,
			lh: 128,
			le: 32,
			aIa: 0
		}, this.vJ[8] = {
			name: L(142),
			i: 820,
			j: 820,
			lh: 200,
			le: 100,
			aIa: 0
		}, this.vJ[9] = {
			name: L(143),
			i: 1024,
			j: 1024,
			lh: 128,
			le: 32,
			aIa: 0
		}, this.vJ[10] = {
			name: L(144),
			vl: aJb,
			vm: aJc,
			aIk: aJd
		}, this.vJ[11] = {
			name: L(145),
			vl: aJe,
			vm: aJf,
			aIk: aJg
		}, this.vJ[12] = {
			name: L(146),
			vl: aJe,
			vm: aJf,
			aIk: aJg
		}, this.vJ[13] = {
			name: L(147),
			vl: aJZ,
			vm: cos,
			aIk: aJa
		}, this.vJ[14] = {
			name: L(148),
			vl: aJZ,
			vm: cos,
			aIk: aJa
		}, this.vJ[15] = {
			name: L(149),
			vl: aJb,
			vm: aJc,
			aIk: aJd
		}, this.vJ[16] = {
			name: L(150),
			vl: aJb,
			vm: aJc,
			aIk: aJd
		}, this.vJ[17] = {
			name: L(151),
			vl: aJZ,
			vm: cos,
			aIk: aJa
		}, this.vJ[18] = {
			name: L(152),
			vl: aJe,
			vm: aJf,
			aIk: aJg
		}, this.vJ[19] = {
			name: L(153),
			vl: aJZ,
			vm: cos,
			aIk: aJa
		}, this.vJ[20] = {
			name: L(154),
			i: 1024,
			j: 1024,
			lh: 128,
			le: 32,
			aIa: 0
		}, this.vJ[21] = {
			name: L(137) + " 2",
			i: 940,
			j: 940,
			lh: 80,
			le: 8,
			aIa: 0
		}, this.vJ[bQ.aIT] = {
			name: ""
		}, this.aJX = new Uint8Array(12);
		for (var aA = 0; aA < 10; aA++) this.aJX[aA] = aA;
		for (this.aJX[10] = 20, this.aJX[11] = 21, this.aJY = new Uint8Array(10), aA = 0; aA < 10; aA++) this.aJY[aA] = 10 + aA
	}
}

function aIW() {
	this.aJV = function() {
		for (var g5, ef, fF, aJT = aAI, aJU = bQ.vT, i = bQ.ej, aJS = i - 1, hJ = bQ.ek - 1, g0 = 0, eh = 1; eh < hJ; eh++)
			for (fF = eh * i, ef = 1; ef < aJS; ef++) aJU[g5 = fF + ef << 2] === aJU[1 + g5] && aJU[g5] === aJU[2 + g5] && (g0++, aJT[2 + g5] = 4);
		an.a5a = g0
	}, this.aJW = function() {
		for (var aJT = aAI, i = bQ.ej, aJS = i - 1, hJ = bQ.ek - 1, id = 5, eh = 1; eh < hJ; eh++)
			for (var fF = eh * i, ef = 1; ef < aJS; ef++) {
				var eC = 2 + (fF + ef << 2);
				4 === aJT[eC] && (! function(eC, id) {
					var eY = 1,
						aJT = aAI,
						ea = ab.ea,
						a1U = [eC];
					aJT[eC] = id;
					for (; eY;) {
						for (var a1V = [], aA = 0; aA < eY; aA++)
							for (var eN = a1U[aA], eb = 3; 0 <= eb; eb--) {
								var ec = eN + ea[eb];
								4 === aJT[ec] && (aJT[ec] = id, a1V.push(ec))
							}
						eY = (a1U = a1V).length
					}
				}(eC, id), id = Math.max((id + 1) % 256, 5))
			}
	}
}

function a3S() {
	(x2 = void 0 === x2 ? document.createElement("canvas") : x2).width = bQ.ej, x2.height = bQ.ek, a3W = x2.getContext("2d", {
		alpha: !0
	}), a3X = aAI = null, a3X = a3W.getImageData(0, 0, bQ.ej, bQ.ek), aAI = a3X.data, b8.pg.vU(aAI)
}

function cb() {
	var f0, i, j, max, aJi, le, aJk, aJl, aJm, aJn, aJo, aJp, aJq, aJr, aJj = 1e4;

	function aJy(aJx, lh, eY) {
		var aA;
		for (aJk[0] = aJx, aA = 1; aA < eY; aA++) aJk[aA] = aJk[aA - 1] + lh, lh = aJk[aA] >= aJj ? (aJk[aA] = aJj - 1, -lh) : aJk[aA] < 0 ? (aJk[aA] = 0, -lh) : (lh += 16384 <= aw.random() ? le : -le) < -aJi ? -aJi : aJi < lh ? aJi : lh
	}

	function aK0(ef, eh, aK1, eY) {
		(aK1 ? function(ef, eh, eY) {
			var aA;
			for (aA = 0; aA < eY; aA++) f0[eh * i + ef + aA] = aJk[aA]
		} : function(ef, eh, eY) {
			var aA;
			for (aA = 0; aA < eY; aA++) f0[eh * i + ef + aA * i] = aJk[aA]
		})(ef, eh, eY)
	}

	function aK4(value, eY) {
		var aA, aI1, eC, hh = value - aJk[eY - 1];
		if (0 != hh) {
			for (aI1 = 1 + bJ.dj(Math.abs(hh), eY - 1), aI1 = hh < 0 ? -aI1 : aI1, aJk[eY - 1] = value, eC = (eC = eY - 1 - bJ.dj(Math.abs(hh), Math.abs(aI1))) < 1 ? 1 : eY - 2 < eC ? eY - 2 : eC, aA = eY - 2; eC <= aA; aA--) aJk[aA] += hh - (eY -
				1 - aA) * aI1;
			(hh < 0 ? function(eY) {
				var aA;
				for (aA = eY - 2; 1 <= aA; aA--) aJk[aA] < 0 && (aJk[aA] = -aJk[aA] - 1)
			} : function(eY) {
				var aA;
				for (aA = eY - 2; 1 <= aA; aA--) aJk[aA] >= aJj && (aJk[aA] = 2 * aJj - aJk[aA] - 1)
			})(eY)
		}
	}

	function aK7(a1U, a1V, eY) {
		for (var aA = 0; aA < eY; aA++) a1U[aA] = a1V[aA]
	}

	function aK8(g) {
		for (var aA = 0; aA < g.length - 1; aA++) g[aA] = g[aA + 1] - g[aA];
		g[g.length - 1] = g[g.length - 3]
	}

	function aK9(a3y, gap, hK) {
		aJl.push(a3y), aJm.push(gap), aJn.push(hK)
	}
	this.a6 = function(a2j) {
		! function(a2j) {
			var aA;
			for (i = a2j[0], j = a2j[1], aJi = a2j[2], le = a2j[3], f0 = new Int16Array(i * j), max = j < i ? i : j, aJk = new Int16Array(max), aJl = [], aJm = [], aJn = [], aJo = new Array(i), aJp = new Array(j), aA = i - 1; 0 <= aA; aA--) aJo[
				aA] = !1;
			for (aA = j - 1; 0 <= aA; aA--) aJp[aA] = !1;
			aJq = new Int16Array(i), aJr = new Int16Array(j)
		}(a2j),
		function(eY) {
			var aJx = aw.random() % aJj,
				lh = aw.random() % (2 * aJi + 1) - aJi;
			aJy(aJx, lh, eY)
		}(max), aK7(aJr, aJk, j), aK0(0, 0, !0, i);
		var ef, eh, a2j = f0[0],
			eY = max,
			lh = aw.random() % (2 * aJi + 1) - aJi;
		for (aJy(a2j, lh, eY), aK7(aJq, aJk, i), aK0(0, 0, !1, j), aK8(aJq), aK8(aJr), aJy(f0[i - 1], aJq[i - 1], j), aK0(i - 1, 0, !1, j), aJy(f0[i * (j - 1)], aJr[j - 1], i), aK4(f0[i * j - 1], i), aK0(0, j - 1, !0, i), aJo[i - 1] = aJo[0] = !
			0, aJp[j - 1] = aJp[0] = !0, aK9(0, i, !0), aK9(0, j, !1), ! function() {
				var aKB, a3y;
				for (;;) {
					if (aKB = function() {
							var aA, aKB = aJl.length - 1;
							for (aA = aKB - 1; 0 <= aA; aA--) aJm[aA] > aJm[aKB] && (aKB = aA);
							return aKB
						}(), aJm[aKB] < 5) return;
					a3y = aJl[aKB] + bJ.dj(aJm[aKB], 2), (aJn[aKB] ? function(ef) {
						var eY, aKE, aA, aDi = 0,
							aKF = 0;
						for (; aKF < j - 1;) {
							for (aA = aDi + 1; aA < j; aA++)
								if (aJp[aA]) {
									aKF = aA;
									break
								} eY = aKF - aDi + 1, aJy(f0[ef + i * aDi], 0 === aDi ? aJq[ef] : aJk[aKE - 1] - aJk[aKE - 2], eY), aK4(f0[aKF * i + ef], eY), aK0(ef, aDi, !1, eY), aKE = eY, aDi = aKF
						}
						aJo[ef] = !0
					} : function(eh) {
						var eY, aKE, aA, aDi = 0,
							aKF = 0;
						for (; aKF < i - 1;) {
							for (aA = aDi + 1; aA < i; aA++)
								if (aJo[aA]) {
									aKF = aA;
									break
								} eY = aKF - aDi + 1, aJy(f0[eh * i + aDi], 0 === aDi ? aJr[eh] : aJk[aKE - 1] - aJk[aKE - 2], eY), aK4(f0[eh * i + aKF], eY), aK0(aDi, eh, !0, eY), aKE = eY, aDi = aKF
						}
						aJp[eh] = !0
					})(a3y), aK9(a3y, aJl[aKB] + aJm[aKB] - a3y, aJn[aKB]), aJm[aKB] = a3y - aJl[aKB] + 1
				}
			}(), ef = 0; ef < i; ef++)
			if (!aJo[ef])
				for (eh = 0; eh < j; eh++) aJp[eh] || ! function(ef, eh) {
					var value = f0[eh * i + ef - 1] + f0[(eh - 1) * i + ef],
						a5l = 2;
					aJo[ef + 1] && (a5l++, value += f0[eh * i + ef + 1]);
					aJp[eh + 1] && (a5l++, value += f0[(eh + 1) * i + ef]);
					f0[eh * i + ef] = bJ.dj(value, a5l)
				}(ef, eh)
	}, this.aIw = function() {
		return f0
	}, this.aIe = function() {
		f0 = null
	}
}

function aFA(er, es) {
	return 0 <= er ? bJ.dj(er, es) : -bJ.dj(-er, es)
}

function jK(f0) {
	return f0 * f0
}

function a50(er, es) {
	return es < er ? er : es
}

function a9m(er, es) {
	return er < es ? er : es
}

function a7C(er, f0, es) {
	return f0 < er ? er : es < f0 ? es : f0
}

function aKH(f0, eY) {
	for (var et = bJ.dj(f0 + 1, 2), aA = 0; aA < eY; aA++) et = bJ.dj(et + bJ.dj(f0, et), 2);
	return et
}

function aGX(f0, eY) {
	return f0 < 1 ? 0 : aKH(f0, eY)
}

function aKI(m4, m5, rt, a6w, mH, mI, ru, sb) {
	return !(m4 + rt <= mH || m5 + a6w <= mI || mH + ru <= m4 || mI + sb <= m5)
}

function aKJ(m4, m5, rt, a6w, mH, mI, ru, sb) {
	return m4 <= mH && m5 <= mI && mH + ru <= m4 + rt && mI + sb <= m5 + a6w
}

function vL(f0) {
	return Math.floor(!!f0 * (1 + Math.log2(f0 + .5)))
}

function bs() {
	this.dj = function(er, es) {
		return Math.floor((er + .5) / es)
	}, this.aKK = function(er, es) {
		return Math.floor(er * (es + .5))
	}, this.sqrt = function(f0) {
		return ~~Math.sqrt(f0 + .5)
	}, this.pow = function(e) {
		return Math.floor(Math.pow(2, e) + .5)
	}, this.p5 = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aKL = function(fF, fH, fJ) {
		return Math.max(Math.min(fF, fH), fJ)
	}, this.aKM = function(aKN, aKO, ef, eh) {
		ef -= aKN, aKN = eh - aKO, eh = 0;
		return 0 == ef ? eh = 0 <= aKN ? Math.PI : 0 : (eh = Math.atan(aKN / ef), eh += 0 < ef ? .5 * Math.PI : 1.5 * Math.PI), eh
	}, this.log2 = function(f0) {
		return Math.floor(!!f0 * (1 + Math.log2(f0 + .5)))
	}, this.log10 = function(f0) {
		return Math.floor(Math.log10(f0 + .5))
	}, this.aKQ = function(aKR, aKS, aKT, aKU, aKV) {
		return aKT - aKV < aKR && aKR < aKT + aKV && aKU - aKV < aKS && aKS < aKU + aKV
	}, this.wJ = function(hb, hc) {
		return hb * hb + hc * hc
	}
}

function d7() {
	this.x = new aKW, this.rm = 0;
	var aKX = new Array(30);

	function aKb() {
		for (var eY = aKX.length, aA = 0; aA < eY; aA++) aKX[aA] = null
	}
	this.dU = function() {
		for (var aKY, aKZ = document.body.firstChild; aKZ;) {
			if (aKY = aKZ.nextSibling, document.body.contains(aKZ) && ("DIV" === aKZ.tagName || "INPUT" === aKZ.tagName || "BUTTON" === aKZ.tagName)) try {
				document.body.removeChild(aKZ)
			} catch (e) {
				console.log("error 2623: " + e)
			}
			aKZ = aKY
		}
	}, this.t = function(dx, aKa, a2j) {
		void 0 === aKa && (aKa = this.rm), bd.dc = !0, 0 === dx && (0 === aZ.a01() ? dx = 5 : z.a0.setState(13)), this.qo(), this.rm === dx && (aKa = aKX[dx].aKa, aKX[dx] = null), this.rm = dx;
		var kV = aKX[dx];
		if (!kV || 4 === dx || 7 === dx || 8 === dx || 9 === dx || 10 === dx || 11 === dx || 13 === dx || 15 === dx || 18 === dx || 20 <= dx && dx <= 28) {
			if (0 === dx) return void aKb();
			1 === dx ? kV = new aKc : 2 === dx ? kV = new aKd : 3 === dx ? kV = new aKe : 4 === dx || 9 === dx || 10 === dx || 11 === dx || 13 === dx ? kV = a2j : 5 === dx ? kV = new aKf : 6 === dx ? kV = new aKg : 7 === dx ? kV = new aKh(s.x
					.aKi) : 8 === dx ? kV = a2j : 12 === dx ? kV = new aKj : 14 === dx ? kV = new aKk : 15 === dx ? kV = new aKh(s.x.aKl) : 16 === dx ? kV = new aKm : 17 === dx ? kV = new aKn : 18 === dx ? kV = new aKo : 19 === dx ? kV =
				new aKp : 20 === dx ? kV = new aKq : 21 === dx ? kV = new aKr : 22 === dx ? kV = new aKs : 23 === dx ? kV = new aKt : 24 === dx ? kV = new aKu : 25 === dx ? kV = new aKv : 26 === dx ? kV = new aKw : 27 === dx ? kV = new aKx :
				28 === dx ? kV = new aKy : 29 === dx && (kV = new aKz), kV.aKa = aKa, aKX[dx] = kV
		}
		kV.show(a2j)
	}, this.a0B = function() {
		this.hF() && this.aL0(this.aDG().aKa)
	}, this.aL0 = function(dx) {
		this.hF() && (aKX[dx] ? (this.qo(), bd.dc = !0, this.rm = dx, aKX[dx].show()) : this.t(dx))
	}, this.qo = function() {
		this.hF() && aKX[this.rm].qo()
	}, this.w = function() {
		this.hF() && (aKX[this.rm].qo(), aKb(), this.rm = 0, z.a0.setState(13))
	}, this.te = function() {
		var kV;
		this.hF() && (kV = aKX[this.rm]).te && kV.te()
	}, this.resize = function() {
		if (!this.hF()) return !1;
		aKX[this.rm].resize()
	}, this.gl = function(ef, eh) {
		var kV;
		this.hF() && (kV = aKX[this.rm]).gl && kV.gl(ef, eh)
	}, this.a0N = function(ef, eh) {
		var kV;
		this.hF() && (kV = aKX[this.rm]).a0N && kV.a0N(ef, eh)
	}, this.a0l = function() {
		var kV;
		this.hF() && (kV = aKX[this.rm]).a0l && kV.a0l()
	}, this.a0Q = function(kr, ks, deltaY) {
		var kV;
		this.hF() && (kV = aKX[this.rm]).a0Q && kV.a0Q(kr, ks, deltaY)
	}, this.a0v = function(code) {
		var kV;
		return !!this.hF() && ((kV = aKX[this.rm]).a0v && kV.a0v(code), !0)
	}, this.ih = function() {
		var kV;
		this.hF() && (kV = aKX[this.rm]) && kV.ih && kV.ih()
	}, this.hF = function() {
		return 0 < this.rm
	}, this.aDG = function() {
		return aKX[this.rm]
	}, this.aCG = function(dx) {
		return aKX[dx]
	}, this.aL1 = function() {
		return aKX
	}
}

function aKh(data) {
	var aL2, aL3;
	this.show = function() {
		data.aL4 && bG.aLn("account", data.rk), aL2.show(), this.resize()
	}, this.qo = function() {
		aL2.qo()
	}, this.resize = function() {
		aL2.resize(), aL3.resize()
	}, this.a0v = function(et) {
		2 === et && aL2.tW[0].pp()
	}, aL2 = new tP(data.username, [new v("⬅️ " + L(35), function() {
		bG.clear(), s.a0B()
	}), new v(data.aL4 ? "🔄 " + L(155) : L(156), function() {
		s.t(8, s.aDG().aKa, new rn(25, {
			ro: 0,
			rk: data.rk,
			rl: data.rl
		}))
	}, 0, 0, 1)]), aL3 = new pQ(aL2.tV, function() {
		var pS = [];
		pS.push(function() {
				var aLL = new pA,
					qL = (aLL.pD(L(206)), new qM({
						value: data.username,
						dx: -1
					}));
				qL.e.readOnly = !0, aLL.pO(qL), aLL.pO(new r2([new v(L(175), function(e) {
					return b8.pX.a2B(qL.e), b8.pX.a2C(e), !0
				}).button])), data.aL4 || aLL.pF(L(207));
				return aLL
			}()),
			function(pS) {
				var aLL, pG, aAW, aLd, aLU;
				data.aL4 || ((aLL = new pA).pD(L(208)), (pG = aLL.pF(data.aLc.length + " / 160")).style.textAlign = "center", aAW = !0, (aLd = new tn(0, 1, function(e) {
					e = e.target.value.length;
					pG.textContent = e + " / 160", 160 < e ? aAW && (aAW = !1, aLU.ps(1), aLU.button.style.color = b9.me) : aAW || (aAW = !0, aLU.ps(0), aLU.button.style.color = b9.na)
				})).e.rows = 6, aLd.e.style.fontSize = "1em", aLd.tu(data.aLc), aLL.pO(aLd), aLU = new v(L(209), function() {
					if (!aAW) return !0;
					s.t(8, s.aDG().aKa, new rn(29, {
						ro: 1,
						pE: aLd.tw().substring(0, 160)
					}))
				}, 0, 0, 1), aLL.pO(new r2([aLU.button])), 0 !== data.aLe && (aLL.pO(new r2([new v(L(1 === data.aLe ? 211 : 212), function() {
					s.t(8, s.aDG().aKa, new rn(29, {
						ro: 0,
						pE: ""
					}))
				}, 0, 0, 1).button])), aLL.pF(1 === data.aLe ? L(213, [data.aLg - 1]) : L(214, [data.aLg - 1]))), aLL.pF(L(210, [data.aLf])), pS.push(aLL))
			}(pS),
			function(pS) {
				var aLL;
				data.aL4 && 0 !== data.aLe && ((aLL = new pA).pD(L(215)), aLL.pH(data.aLc), aLL.pO(new r2([new v(L(216, 0, "Report"), function(e) {
					return ay.x.aLQ(0) && (b8.pX.a2C(e), ay.aLS.aLh({
						ro: 5,
						rk: data.rk
					})), !0
				}, 0, 0, 1).button])), pS.push(aLL))
			}(pS), pS.push(function() {
				var aLL = new pA,
					aLM = (aLL.pD(L(157)), [L(158), L(159), L(160), L(161), L(162)]),
					dw = data.aLN;
				aLL.pJ(L(163) + b8.zS.a2y(data.ui, .01, 2) + "<br>" + L(164) + (dw + 1) + " / " + data.uh + "<br>" + L(165) + aLM[dw < 10 ? 0 : dw < 50 ? 1 : dw < 200 ? 2 : dw < 1e3 ? 3 : 4]), data.aL4 || (aLL.pF(L(166)), aLL.pF(L(167)),
					aLL.pF(L(168)));
				return aLL
			}()), data.aL4 && pS.push(function() {
				var aLL = new pA,
					qL = (aLL.pD(L(169)), new qM({
						value: bh.km.data[147].value,
						dx: -1
					}, 1, void 0, function(e) {
						bh.qz.r0(147, aLO(e.target.value))
					})),
					aLP = (aLL.pO(qL), new v(L(14), function(e) {
						return qL.e.readOnly && ay.x.aLQ(0) && (b8.pX.a2C(e), aLR(), ay.aLS.aLT({
							ro: 0,
							rk: data.rk,
							value: parseInt(bh.km.data[147].value, 10)
						})), !0
					}, 1)),
					aLU = new v(L(170), function(e) {
						return e.textContent === L(170) ? (e.textContent = L(171), qL.e.readOnly = !0, aLP.ps(0), aLP.button.style.color = b9.na, bh.qz.r0(147, qL.e.value), aLO(bh.km.data[147].value)) : aLR(), !0
					}),
					pG = (aLL.pO(new r2([aLU.button])), aLL.pF()),
					aLO = (aLL.pF(L(172)).style.fontWeight = "bold", function(f0) {
						f0 = b8.ft.a2g(f0, 2, 1e6), pG.textContent = L(173, [f0, bh.km.data[105].value, data.rk, f0 - 1])
					}),
					aLR = function() {
						aLU.button.textContent = L(170), qL.e.readOnly = !1, aLP.ps(1), aLP.button.style.color = b9.me
					};
				return aLO(bh.km.data[147].value), aLL.pO(new r2([aLP.button])), aLL
			}());
		pS.push(function() {
			var aLL = new pA,
				qL = (aLL.pD(L(174)), new qM({
					value: data.rk,
					dx: -1
				}));
			return qL.e.readOnly = !0, aLL.pO(qL), aLL.pO(new r2([new v(L(175), function(e) {
				return b8.pX.a2B(qL.e), b8.pX.a2C(e), !0
			}).button])), aLL
		}()), data.aL4 || (pS.push(function() {
			var aLL = new pA,
				aLV = (aLL.pD(L(176)), new qM(bh.km.data[106]));
			return aLV.e.readOnly = !0, aLV.e.type = "password", aLL.pO(aLV), aLL.pO(new r2([new v(L(177), function(e) {
				return e.textContent === L(177) ? (e.textContent = L(178), aLV.e.type = "text") : (e.textContent = L(177), aLV.e.type = "password"), !0
			}).button, new v(L(175), function(e) {
				return b8.pX.a2B(aLV.e), b8.pX.a2C(e), !0
			}).button])), aLL.pO(new r2([new v(L(179), function() {
				s.t(8, s.aDG().aKa, new rn(15))
			}).button])), aLL.pD(L(180), "0.8em"), aLL.pF(L(181)), aLL.pF(L(182)), aLL.pF(L(183)), aLL
		}()), pS.push(function() {
			var aLL = new pA;
			return aLL.pD(L(184)), aLL.pO(new r2([new v(L(185), function() {
				s.t(6, s.aDG().aKa)
			}).button])), aLL.pO(new r2([new v(L(186), function() {
				bh.qz.r0(105, ""), s.t(8, s.aDG().aKa, new rn(18))
			}).button])), aLL.pO(new r2([new v(L(187) + bh.km.data[105].value, function() {
				s.t(4, 0, new u(L(188), L(189), !0, [new v("⬅️ " + L(35), function() {
					s.t(7, s.aCG(7).aKa)
				})]))
			}, b9.nJ).button])), aLL
		}()), pS.push(function() {
			function aLX(dx) {
				for (var aA = 0; aA < 2; aA++) aLW[aA].ps(0 === dx ? b9.mq : 0 === aA ? b9.nJ : b9.n1)
			}
			var pM, aLW, aLL = new pA;
			aLL.pD(L(190)), aLL.pF(L(191)), bh.x.uS();
			return aLW = [new v(L(192), function() {
				var dx = Math.min(bh.km.data[117].value, pM.pN.length - 1);
				if (!(dx < 1)) {
					pM.pN[dx].remove(), pM.pN.splice(dx, 1);
					for (var aA = dx; aA < pM.pN.length; aA++) pM.pN[aA].name = "" + aA;
					bh.x.uV(dx), dx = bh.km.data[117].value, pM.pN[dx].textContent = pM.pN[dx].textContent.replace("⚪", "🟢"), aLX(dx)
				}
			}, b9.mq), new v(L(193), function() {
				var dx = Math.min(bh.km.data[117].value, pM.pN.length - 1);
				dx < 1 || (dx = bh.x.uW(dx), bh.qz.r0(105, dx.rk), bh.qz.r0(106, dx.password), s.t(8, s.aDG().aKa, new rn(18)))
			}, b9.mq)], (pM = new tK(bh.km.data[117], aLX)).pN[0].style.marginTop = "0.5em", aLL.pL(pM), aLL.pO(new r2([aLW[1].button])), aLL.pO(new r2([aLW[0].button])), aLL
		}()));
		return pS.push(function() {
				var aLL = new pA,
					aLM = (aLL.pD(L(197)), [L(198), L(199), L(200), L(201)]),
					dw = data.aLY;
				return aLL.pJ(L(202) + (data.zF / 100).toFixed(2) + "<br>" + L(164) + (dw + 1) + " / " + data.uh + "<br>" + L(165) + aLM[dw < 10 ? 0 : dw < 50 ? 1 : dw < 200 ? 2 : 3]), aLL
			}()), pS.push(function() {
				var aLL = new pA;
				return aLL.pD(L(194)), aLL.pJ(L(195) + b8.zS.a2y(data.ue, .1, 1) + "<br>" + L(164) + (data.uf + 1) + " / " + data.uh + "<br>" + L(196) + data.ug), aLL
			}()),
			function(pS) {
				var aLL = new pA,
					aLi = data.ul,
					aLj = (aLL.pD(L(217)), aLL.pJ(L(218, [aLi ? "[" + data.uj + "]" : "-"])), aLL.pJ(L(219, [b8.zS.a2y(aLi, .01, 2)])), aLL.pJ(L(220, [data.un + 1 + " / " + data.uh])), data.uo),
					aLk = (aLL.pJ(L(221, [b8.zS.a2y(aLj, .1, 1)])), data.uq);
				aLL.pJ(L(222, [aLk])), aLL.pJ(L(223, [b8.zS.a2y(aLj / Math.max(aLk, 1), .1, 2)])), aLi = data.um, aLL.pD(L(224), "0.8em"), aLL.pJ(L(218, [aLi ? "[" + data.uk + "]" : "-"])), aLL.pJ(L(219, [b8.zS.a2y(aLi, .01, 2)])), aLj = data
					.up, aLL.pJ(L(221, [b8.zS.a2y(aLj, .1, 1)])), aLk = data.ur, aLL.pJ(L(222, [aLk])), aLL.pJ(L(223, [b8.zS.a2y(aLj / Math.max(aLk, 1), .1, 2)])), data.aL4 || (aLL.pF(L(225)), aLL.pF(L(226)));
				pS.push(aLL)
			}(pS),
			function(pS) {
				var aLL = new pA;
				aLL.pD(L(227)), aLL.pJ(L(202) + (data.aLl / 10).toFixed(1) + "<br>" + L(165) + (data.aLm.length ? L(228, [data.aLm]) : L(229))), data.aL4 ? (aLL.pO(new r2([new v(L(230), function(e) {
					return ay.x.aLQ(0) && (b8.pX.a2C(e), ay.aLS.aLh({
						ro: 4,
						rk: data.rk
					})), !0
				}, 0, 0, 1).button])), aLL.pF(L(231)), aLL.pF(L(232))) : aLL.pF(L(233));
				pS.push(aLL)
			}(pS), pS.push(function() {
				var aLL = new pA;
				if (aLL.pD(L(203)), aLL.pJ(L(204) + data.aLZ + "<br>" + L(164) + (data.aLa + 1) + " / " + data.uh + "<br>" + L(165) + bm.dz(data.aLa)), data.aL4) {
					var qL = new qM({
							value: bh.km.data[157].value,
							dx: -1
						}, 1, void 0, function(e) {
							bh.qz.r0(157, aLO(e.target.value))
						}),
						aLU = (qL.e.style.marginTop = "0.6em", aLL.pO(qL), new v(L(170), function(e) {
							return e.textContent === L(170) ? (e.textContent = L(171), qL.e.readOnly = !0, aLb[0].ps(0), aLb[1].ps(0), aLb[0].button.style.color = b9.na, aLb[1].button.style.color = b9.na, aLO(bh.km.data[157]
								.value)) : aLR(), !0
						})),
						aLb = (aLL.pO(new r2([aLU.button])), [new v("−", function(e) {
							return qL.e.readOnly && ay.x.aLQ(0) && (b8.pX.a2C(e), aLR(), ay.aLS.aLT({
								ro: 2,
								rk: data.rk,
								value: bJ.p5(parseInt(bh.km.data[157].value, 10), 3, 32767)
							})), !0
						}, 1), new v("+", function(e) {
							return qL.e.readOnly && ay.x.aLQ(0) && (b8.pX.a2C(e), aLR(), ay.aLS.aLT({
								ro: 1,
								rk: data.rk,
								value: bJ.p5(parseInt(bh.km.data[157].value, 10), 3, 32767)
							})), !0
						}, 1)]),
						pG = aLL.pF(),
						aLO = function(f0) {
							return f0 = b8.ft.a2g(f0, 3, 32767), pG.textContent = L(205, [f0 - 1, f0, bh.km.data[105].value]), f0
						};
					aLL.pO(new r2([aLb[0].button, aLb[1].button]));
					for (var aA = 0; aA < 2; aA++) aLb[aA].button.style.fontSize = "1.6em";
					var aLR = function() {
						aLU.button.textContent = L(170), qL.e.readOnly = !1, aLb[0].ps(1), aLb[1].ps(1), aLb[0].button.style.color = b9.me, aLb[1].button.style.color = b9.me
					};
					aLO(bh.km.data[157].value)
				}
				return aLL
			}()), data.aL4, pS
	}())
}

function aKs() {
	var aLo, aLp, aLq, pS;

	function aLr() {
		aLt(), 2 !== aC.data.aIncomeType && (aC.data.aIncomeData = null), s.aL1()[19] = null, s.a0B()
	}

	function aLt() {
		2 === aC.data.aIncomeType ? (b8.pg.a1Y(aLq.tw(), aC.data.aIncomeData, 255), b8.pg.max(aC.data.aIncomeData) || (aC.data.aIncomeType = 0)) : 1 !== aC.data.aIncomeType || aC.data.aIncomeValue || (aC.data.aIncomeType = 0)
	}
	this.show = function() {
		aLo.show(), this.resize()
	}, this.qo = function() {
		aLo.qo()
	}, this.resize = function() {
		aLo.resize(), aLp.resize()
	}, this.a0v = function(et) {
		2 === et && aLo.tW[0].pp()
	}, aLo = new tP(L(235), [new v("⬅️ " + L(35), aLr)]), aLp = new pQ(aLo.tV, (function(pS) {
		var aLL = new pA;
		aLL.pD(L(236)), aLL.pL(new tK({
			tO: [L(237), L(238), L(239)],
			value: aC.data.aIncomeType
		}, function(dx) {
			aLt(), 2 !== dx || aC.data.aIncomeData || (aC.data.aIncomeData = new Uint8Array(aC.eV)), aC.data.aIncomeType = dx, s.t(22)
		})), pS.push(aLL)
	}(pS = []), function(pS) {
		var aLL;
		1 === aC.data.aIncomeType && ((aLL = new pA).pD("Value"), aLL.pO(new qM({
			dx: -1,
			value: aC.data.aIncomeValue
		}, 1, 0, function(e) {
			var value = bJ.p5(Math.floor(e.target.value), 0, 255);
			e.target.value = aC.data.aIncomeValue = value
		})), pS.push(aLL))
	}(pS), function(pS) {
		var aLL;
		2 === aC.data.aIncomeType && ((aLL = new pA).pD("Data"), (aLq = new tn(0, 1, 0, 1)).tu(b8.zS.a34(aC.data.aIncomeData, 4)), aLL.pO(aLq), pS.push(aLL))
	}(pS), pS))
}

function aKv() {
	var aLo, aLp, aLq;

	function aLr() {
		aLt(), 3 !== aC.data.botDifficultyType || b8.pg.a1M(aC.data.botDifficultyData) || (aC.data.botDifficultyType = 0), 3 !== aC.data.botDifficultyType && (aC.data.botDifficultyData = null), s.aL1()[19] = null, s.a0B()
	}

	function aLt() {
		3 === aC.data.botDifficultyType && b8.pg.a1Y(aLq.tw(), aC.data.botDifficultyData, aD.jy.length - 1)
	}

	function aLy(pS, dx) {
		var aLL = new pA,
			value = (aLL.pD(dx < 0 ? L(60) : L(59) + " " + be.z9[dx % 9]), 0 <= dx && (aLL.pJ(L(242) + ": " + aC.data.teamPlayerCount[dx]).style.marginBottom = "1em"), dx < 0 ? aC.data.botDifficultyValue : aC.data.botDifficultyTeam[dx]);
		aLL.pL(new tK({
			tO: aD.jy,
			value: value
		}, function(hL) {
			dx < 0 ? aC.data.botDifficultyValue = hL : aC.data.botDifficultyTeam[dx] = hL
		})), pS.push(aLL)
	}
	this.show = function() {
		aLo.show(), this.resize()
	}, this.qo = function() {
		aLo.qo()
	}, this.resize = function() {
		aLo.resize(), aLp.resize()
	}, this.a0v = function(et) {
		2 === et && aLo.tW[0].pp()
	}, aLo = new tP(L(60), [new v("⬅️ " + L(35), aLr)]), aLp = new pQ(aLo.tV, function() {
		var pS = [];
		if (function(pS) {
				var aLL = new pA,
					tO = (aLL.pD(L(236)), [L(238), L(240), L(241), L(239)]),
					value = aC.data.botDifficultyType;
				0 === aC.data.gameMode && (value = Math.min(value, 2), tO.splice(2, 1));
				aLL.pL(new tK({
					tO: tO,
					value: value
				}, function(dx) {
					aLt(), aC.data.botDifficultyType = dx, 0 === aC.data.gameMode && 2 === dx && (aC.data.botDifficultyType = 3), 3 !== aC.data.botDifficultyType || aC.data.botDifficultyData || (aC.data.botDifficultyData =
						new Uint8Array(aC.eV)), 2 !== aC.data.botDifficultyType || aC.data.botDifficultyTeam || (aC.data.botDifficultyTeam = new Uint8Array(9)), s.t(25)
				})), pS.push(aLL)
			}(pS), 0 === aC.data.botDifficultyType) aLy(pS, -1);
		else if (2 === aC.data.botDifficultyType)
			for (var aA = 0; aA < aC.data.teamPlayerCount.length; aA++) aC.data.teamPlayerCount[aA] && aLy(pS, aA);
		else 3 === aC.data.botDifficultyType && ! function(pS) {
			var aLL = new pA;
			aLL.pD("Data"), (aLq = new tn(0, 1, 0, 1)).tu(b8.zS.a34(aC.data.botDifficultyData, 8)), aLL.pO(aLq), pS.push(aLL)
		}(pS);
		return pS
	}())
}

function aLz(data) {
	var aL2, aM0, aM1, aM2, aM3, aM4, aM5, colors, aM6, aM7, aM8 = 0,
		aM9 = 0,
		aMA = !1,
		aMB = !1,
		aMC = [1, 5, 60, 240, 1440, 10080, 43200];

	function aMg(kr, ks) {
		! function(kr, ks) {
			return aM0 < kr && kr < aM0 + aM2 && aM1 < ks && ks < aM1 + aM3
		}(aM8 = kr, aM9 = ks) ? (aMA && (bd.dc = !0), aMA = !1) : (aMA = !0, bd.dc = !0)
	}
	this.show = function() {
		aMB = bh.km.data[127].value, aL2.show(), this.resize()
	}, this.qo = function() {
		aL2.qo()
	}, this.resize = function() {
		aL2.resize();
		var et = h.k,
			td = aL2.ta(),
			aML = et * td.tc,
			et = et * td.qr;
		aM4 = b8.pX.sC(.06), aM5 = b8.pX.sC(.04), aM0 = b8.pX.sC(.06), aM1 = et + aM4, aM2 = h.i - aM0 - aM5, aM3 = aML + et - aM1 - aM5
	}, this.te = function() {
		aL2.te(),
			function() {
				var aA, aMI, g0, ef, er, g = data.data,
					aMP = 1,
					aMQ = .125,
					aMR = aMB ? 65536 : 0;
				for (aA = 0; aA < g.length; aA++)
					for (aMI = g[aA].aMI, g0 = aMI.length, aMP = Math.max(g0, aMP), er = 0; er < g0; er++) aMQ = Math.max(aMI[er], aMQ), aMR = Math.min(aMI[er], aMR);
				var m5 = aM1 + aM3,
					ws = aM3 / (aMQ - aMR),
					wr = 1 / (aMP - 1);
				for (tf.lineWidth = ba.xo, aA = 0; aA < g.length; aA++) {
					for (aMI = g[aA].aMI, g0 = aMI.length, ef = aM0, tf.beginPath(), tf.moveTo(ef + aM2, m5 - ws * (aMI[g0 - 1] - aMR)), er = g0 - 2; 0 <= er; er--) tf.lineTo(ef + wr * er * aM2, m5 - ws * (aMI[er] - aMR));
					tf.strokeStyle = colors[aA], tf.stroke()
				}(function(aMR, aMQ, m5, ws) {
					tf.font = b8.pX.rM(0, .25 * aM0), b8.pX.textBaseline(tf, 1), b8.pX.textAlign(tf, 2), tf.fillStyle = colors[0];
					for (var ef = .92 * aM0, aA = 0; aA < 3; aA++) {
						var f0 = aMR + aA * (aMQ - aMR) / 2;
						tf.fillText((f0 / 1e3).toFixed(3), ef, m5 - ws * (f0 - aMR))
					}
				})(aMR, aMQ, m5, ws),
				function(aMP) {
					var eh = aM1 + aM3 + .15 * aM5;
					tf.font = b8.pX.rM(0, Math.min(.4 * aM5, .028 * h.i)), b8.pX.textBaseline(tf, 0), b8.pX.textAlign(tf, 2), tf.fillStyle = colors[0], tf.fillText(b8.a1D.a20(aM6), aM0 + aM2, eh), b8.pX.textAlign(tf, 0), tf.fillText(b8.a1D.a20(
						new Date(aM7.getTime() - 6e4 * (aMP - 1) * aMC[data.aMH])), aM0, eh)
				}(aMP),
				function(aMP, aMR, aMQ) {
					if (aMA && !(aMP < 2)) {
						for (var a74, dx = (aM8 - aM0) / aM2 * (aMP - 1), aMU = Math.floor(dx), aMV = Math.floor(1 + dx), aMW = dx - aMU, aMX = 1e5, aMY = -1, aMZ = -1, aMa = aMQ - (aMQ - aMR) * (aM9 - aM1) / aM3, g = data.data, aA = 0; aA < g
							.length; aA++) {
							var aAi, aMI = g[aA].aMI;
							aMI.length <= aMV || (aMI = aMI[aMU] + aMW * (aMI[aMV] - aMI[aMU]), (aAi = Math.abs(aMa - aMI)) < aMX && (aMX = aAi, aMY = aA, aMZ = aMI))
						} - 1 !== aMY && (aMQ = aM1 + aM3 - (aMZ - aMR) / (aMQ - aMR) * aM3, tf.lineWidth = .5 * ba.xo, tf.strokeStyle = colors[aMY], tf.beginPath(), tf.moveTo(aM0, aMQ), tf.lineTo(aM8, aMQ), tf.lineTo(aM8, aM1 + aM3), tf
						.stroke(), tf.beginPath(), tf.arc(aM8, aMQ, .1 * aM0, 0, 2 * Math.PI), tf.fillStyle = colors[aMY], tf.fill(), aMR = aM1 + aM3 + .15 * aM5, b8.pX.textAlign(tf, 1), a74 = aMP - 2 < dx ? (a74 = aM7.getTime() - 6e4 * aMC[
								data.aMH], new Date(a74 + (dx - (aMP - 2)) * (aM6.getTime() - a74))) : new Date(aM7.getTime() - 6e4 * (aMP - dx - 1) * aMC[data.aMH]), aMP = b8.a1D.a20(a74), dx = b8.pX.measureText(aMP), a74 = bJ.p5(aM8, aM0 +
								.5 * dx, aM0 + aM2 - .5 * dx), tf.fillStyle = b8.color.mW(70, 50, 20), tf.fillRect(a74 - .52 * dx, aM1 + aM3, 1.04 * dx, .55 * aM5), tf.fillStyle = colors[0], tf.fillText(aMP, a74, aMR), tf.font = b8.pX.rM(0,
								.25 * aM0), b8.pX.textBaseline(tf, 1), b8.pX.textAlign(tf, 2), a74 = .92 * aM0, aMP = (aMZ / 1e3).toFixed(3), dx = b8.pX.measureText(aMP), aMR = a74 - 1.04 * dx, tf.fillStyle = b8.color.mW(70, 50, 20), tf
							.fillRect(aMR, aMQ - .1625 * aM0, aM0 - aMR, .275 * aM0), tf.fillStyle = colors[aMY], tf.fillText(aMP, a74, aMQ))
					}
				}(aMP, aMR, aMQ)
			}(), tf.lineWidth = ba.xo, tf.strokeStyle = b9.me, tf.beginPath(), tf.moveTo(aM0, aM1), tf.lineTo(aM0, aM1 + aM3), tf.lineTo(aM0 + aM2, aM1 + aM3), tf.stroke();
		var aA, fontSize = .5 * aM4,
			g = (tf.font = b8.pX.rM(0, fontSize), b8.pX.textBaseline(tf, 1), b8.pX.textAlign(tf, 0), data.data),
			eY = g.length,
			eh = aM1 - .5 * aM4,
			pE = "";
		for (aA = 0; aA < eY; aA++) pE += g[aA].name + "  ";
		pE = pE.trim();
		var aMd = b8.pX.measureText(pE),
			ef = .5 * (h.i - aMd);
		for (aMd > h.i && (ef = 0, tf.font = b8.pX.rM(0, h.i / aMd * fontSize)), aA = 0; aA < eY; aA++) tf.fillStyle = colors[aA], tf.fillText(g[aA].name, ef, eh), ef += b8.pX.measureText(g[aA].name + "  ")
	}, this.gl = function(kr, ks) {
		aMg(kr, ks)
	}, this.a0N = function(kr, ks) {
		aMg(kr, ks)
	}, this.a0v = function(et) {
		2 === et && aL2.tW[0].pp()
	};
	var aA, di, a1y, hL, eb = data.data,
		eY = eb.length,
		max = 1;
	for (aA = 0; aA < eY; aA++) max = Math.max(max, eb[aA].aMI.length);
	for (aA = 0; aA < eY; aA++)
		for (; eb[aA].aMI.length < max;) eb[aA].aMI.unshift(0);
	di = new Date, a1y = 6e4 * di.getTimezoneOffset(), hL = di.getTime() - a1y, aM6 = new Date(hL), 6 === data.aMH ? function(di, a1y) {
		var aMK = di.getUTCFullYear(),
			di = di.getUTCMonth() + 1;
		aM7 = di < 12 ? new Date(Date.UTC(aMK, di) - a1y) : new Date(Date.UTC(aMK + 1, 0) - a1y)
	}(di, a1y) : (a1y = 6e4 * aMC[data.aMH], aM7 = data.aMH <= 4 ? new Date(hL + a1y - di.getTime() % a1y) : new Date(hL + a1y - (di.getTime() + 2592e5) % a1y)), hL = b8.color, colors = [b9.me, hL.mW(255, 0, 0), hL.mW(0, 200, 0), hL.mW(80, 80,
		255), hL.mW(255, 255, 0), hL.mW(255, 0, 255), hL.mW(0, 255, 255), hL.mW(255, 140, 0), hL.mW(128, 128, 128), hL.mW(0, 255, 140)], aL2 = new tP(L(243) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.aMH] + ", " + b8.a1D.a1x(aM6), [
		new v("⬅️ " + L(35), function() {
			s.x.aAc()
		}), new v(L(244), function() {
			s.t(14)
		})
	], !1)
}

function aKk() {
	var aL2, aL3, pS;
	this.show = function() {
		aL2.show(), this.resize()
	}, this.qo = function() {
		aL2.qo()
	}, this.resize = function() {
		aL2.resize(), aL3.resize()
	}, this.a0v = function(et) {
		2 === et && aL2.tW[0].pp()
	}, aL2 = new tP(L(245), [new v("⬅️ " + L(35), function() {
		s.aL0(13)
	})]), aL3 = new pQ(aL2.tV, ((pS = []).push(function() {
		var aLL = new pA,
			aLU = (aLL.pD(L(246)), aLL.pF(L(247)), new v(L(248), function() {
				bh.qz.r0(130, 0), s.x.aMl()
			}, 0, 0, 1)),
			qL = new qM(bh.km.data[126], 0, function() {
				aLU.button.click()
			});
		return aLL.pO(qL), qL.e.placeholder = "a,b,c", qL.e.style.marginTop = "0.5em", aLL.pO(new r2([aLU.button])), aLL
	}()), pS.push(function() {
		var aLL = new pA,
			aLU = new v(L(248), function() {
				bh.qz.r0(130, 1), s.x.aMl()
			}, 0, 0, 1),
			aMm = new qM(bh.km.data[129], 1, function() {
				aMm.e.focus()
			}),
			aMn = new qM(bh.km.data[128], 1, function() {
				aLU.button.click()
			});
		return aLL.pD(L(249)), aLL.pO(aMn), aMn.e.style.marginBottom = "0.5em", aLL.pD(L(250)), aLL.pO(aMm), aLL.pO(new r2([aLU.button])), aLL
	}()), pS.push(function() {
		var aLL = new pA;
		return aLL.pD(L(251)), bh.km.data[125].tO = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], aLL.pL(new tK(bh.km.data[125])), aLL
	}()), pS.push(function() {
		var aLL = new pA;
		return aLL.pD(L(252)), aLL.pO(new qw(bh.km.data[127], L(253))), aLL
	}()), pS))
}

function aKj() {
	var aL2, aMo, aM2, aMp, aMq, aMr, colors = [0, 0, 0],
		aMs = -1;

	function aMv(aA) {
		var aMw = aMo.eh + aA * (ba.gap + aMr);
		tf.fillStyle = "rgb(" + (0 === aA ? 150 : 2 === aA ? 30 : 0) + "," + (1 === aA ? 130 : 2 === aA ? 30 : 0) + "," + (2 === aA ? 220 : 0) + ")", tf.fillRect(aMp, aMw, colors[aA] * aMq, aMr), tf.strokeStyle = b9.me, tf.strokeRect(aMp, aMw, aMq,
			aMr), tf.fillStyle = b9.me, tf.font = b8.pX.rM(0, .32 * aMr), b8.pX.textBaseline(tf, 1), b8.pX.textAlign(tf, 0), tf.fillText(L(0 === aA ? 256 : 1 === aA ? 257 : 258) + aMt(aA), aMp + ba.gap, aMw + .53 * aMr)
	}

	function aMt(aA, aMx) {
		return aMx = aMx || 256, bJ.p5(Math.floor(aMx * colors[aA]), 0, aMx - 1)
	}

	function a0r(kr, ks) {
		return !(kr < aMp || ks < aMo.eh || kr > aMo.ef + aMo.i || ks > aMo.eh + aMo.j)
	}
	this.show = function() {
		var f0 = bh.km.data[121].value;
		colors[0] = (f0 >> 12) / 63, colors[1] = (f0 >> 6 & 63) / 63, colors[2] = (63 & f0) / 63, aL2.show(), this.resize()
	}, this.qo = function() {
		bh.qz.r0(121, (aMt(0, 64) << 12) + (aMt(1, 64) << 6) + aMt(2, 64)), aL2.qo()
	}, this.resize = function() {
		aL2.resize(), aMo.resize();
		var et = h.k,
			td = aL2.ta(),
			aMu = (aMo.eh = Math.max(aMo.eh, et * td.qr + ba.gap), et * td.tc - 2 * ba.gap);
		aMo.j = Math.min(aMo.j, aMu), aMo.i = 2 * aMo.j, aMo.eh = et * td.qr + .5 * (et * td.tc - aMo.j), aMo.ef = .5 * (h.i - aMo.i), aM2 = .25 * aMo.i, aMp = aMo.ef + aM2 + ba.gap, aMq = aMo.i - aM2 - ba.gap, aMr = (aMo.j - 2 * ba.gap) / 3
	}, this.te = function() {
		var dw, sB, es;
		aL2.te(), tf.lineWidth = ba.xo, dw = aMt(0), sB = aMt(1), es = aMt(2), tf.fillStyle = "rgb(" + dw + "," + sB + "," + es + ")", tf.fillRect(aMo.ef, aMo.eh, aM2, aMo.j), tf.strokeStyle = b9.me, tf.strokeRect(aMo.ef, aMo.eh, aM2, aMo.j), tf
			.fillStyle = dw + sB + es < 306 && sB < 150 ? b9.me : b9.mV, b8.pX.textBaseline(tf, 1), b8.pX.textAlign(tf, 1), tf.font = b8.pX.rM(0, .1 * aMo.j), tf.rotate(-Math.PI / 2), tf.fillText(L(255), -aMo.eh - .5 * aMo.j, aMo.ef + .5 * aM2),
			tf.setTransform(1, 0, 0, 1, 0, 0), aMv(0), aMv(1), aMv(2)
	}, this.gl = function(kr, ks) {
		a0r(kr, ks) && (aMs = bJ.p5(Math.floor((ks - aMo.eh) / (aMr + .75 * ba.gap)), 0, 2), colors[aMs] = bJ.p5((kr - aMp) / aMq, 0, 1), bd.dc = !0)
	}, this.a0N = function(kr) {
		-1 !== aMs && (colors[aMs] = bJ.p5((kr - aMp) / aMq, 0, 1), bd.dc = !0)
	}, this.a0Q = function(kr, ks, deltaY) {
		a0r(kr, ks) && (kr = bJ.p5(Math.floor((ks - aMo.eh) / (aMr + .75 * ba.gap)), 0, 2), colors[kr] = bJ.p5(colors[kr] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), bd.dc = !0)
	}, this.a0l = function() {
		0 <= aMs && (aMs = -1, bd.dc = !0)
	}, this.a0v = function(et) {
		2 === et && aL2.tW[0].pp()
	}, aL2 = new tP(L(254), [new v("⬅️ " + L(35), function() {
		s.x.aAc()
	})], !1), aMo = new q9([.5, .25], [.5, .5], 1)
}

function aKr() {
	var aLo, aLp, aLq, q7;

	function aLr() {
		aLt(), 1 !== aC.data.colorsType && (aC.data.colorsData = null), s.aL1()[19] = null, s.a0B()
	}

	function aMy() {
		aLt(), s.t(21)
	}

	function aLt() {
		1 === aC.data.gameMode ? aC.a3L.a3P() : 0 === aC.data.gameMode && 1 === aC.data.colorsType && b8.pg.a1Y(aLq.tw(), aC.data.colorsData, 262143)
	}
	this.show = function() {
		aLo.show(), this.resize()
	}, this.qo = function() {
		aLo.qo()
	}, this.resize = function() {
		aLo.resize(), aLp.resize()
	}, this.a0v = function(et) {
		2 === et && aLo.tW[0].pp()
	}, q7 = [new v("⬅️ " + L(35), aLr)], 1 === aC.data.gameMode && q7.push(new v(L(259), aMy, 1, 1)), aLo = new tP(L(260), q7), aLp = new pQ(aLo.tV, (function(pS) {
		var aLL = new pA;
		aLL.pD(L(236)), 0 === aC.data.gameMode && (aLL.pL(new tK({
			tO: [L(261), L(239)],
			value: aC.data.colorsType
		}, function(dx) {
			aLt(), aC.data.colorsType = dx, 1 !== aC.data.colorsType || aC.data.colorsData && aC.data.colorsData.length === aC.eV || (aC.data.colorsData = new Uint32Array(aC.eV)), s.t(21)
		})), aLL.pO(new rC));
		aLL.pO(new qw({
			value: aC.data.selectableColor
		}, L(262), function(value) {
			aC.data.selectableColor = value
		})), pS.push(aLL)
	}(q7 = []), 0 === aC.data.gameMode ? 1 === aC.data.colorsType && function(pS) {
		var aLL = new pA;
		aLL.pD("Data"), (aLq = new tn(0, 1, 0, 1)).tu(b8.zS.a34(aC.data.colorsData, 1)), aLL.pO(aLq), pS.push(aLL)
	}(q7) : (aC.a3L.a3P(), q7.push(function() {
		var aLL = new pA;
		aLL.pD(L(242));
		for (var aA = 0; aA < be.z9.length; aA++) {
			var hL = (aA + 1) % be.z9.length,
				e = aLL.pJ((0 == hL ? "" : "Team ") + be.z9[hL]);
			aA && (e.style.marginTop = "0.5em"), aLL.pO(new qM({
				dx: -1,
				value: aC.data.teamPlayerCount[hL]
			}, 1, 0, function(e) {
				aLo.tW[1].ps(0);
				var playerCount = bJ.p5(Math.floor(e.target.value), 0, 512);
				e.target.value = playerCount, aC.data.teamPlayerCount[e.target.aN0] = playerCount
			})).e.aN0 = hL
		}
		return aLL
	}())), q7))
}

function rn(id, a2j, aN1) {
	var aL2, aN2;

	function aN7() {
		aN2.pT.innerHTML += "<br>" + L(265)
	}

	function aN6() {
		bB.a6(48), bB.a7(24, Math.floor(bJ.pow(24) * Math.random())), bB.a7(24, Math.floor(bJ.pow(24) * Math.random())), bF.dU(bB.aB), bh.qz.r0(110, bD.rp.rq(bD.rp.rr(8))), ay.aLS.aNL()
	}
	this.aN3 = !0, this.aN4 = id, this.show = function() {
		aL2.show(), this.resize(), 15 === id ? (ay.x.aN5(id) ? aN6 : aN7)() : 16 === id ? ay.x.aN5(id) ? ay.aAZ.aN8(2) : aN7() : 17 === id ? ay.x.aN5(id) ? ay.aAZ.aN8(3) : aN7() : 18 === id ? (ay.x.close(0, 3253), ay.x.aE2(0, id), aN7()) : 21 ===
			id ? ay.x.aN5(id) ? ay.aN9.aNA(a2j.s6, a2j.s7, a2j.s8) : aN7() : 22 === id ? ay.x.aN5(id) ? ay.aN9.aNB(a2j.s6, a2j.aNC, a2j.aND) : aN7() : 23 === id ? ay.x.aN5(id) ? ay.aN9.aNE(a2j.aMH, a2j.zV) : aN7() : 24 === id ? ay.x.aN5(id) ? ay
			.aN9.aNF(a2j.aMH, a2j.s7, a2j.s8) : aN7() : 25 === id ? ay.x.aN5(id) ? ay.aLS.aLh(a2j) : aN7() : 28 === id ? ay.x.aN5(id) ? ay.aN9.aNG(a2j.s6, a2j.aNC, a2j.aND) : aN7() : 29 === id && (ay.x.aN5(id) ? ay.aLS.aNH(a2j) : aN7())
	}, this.aNI = function() {
		15 === id ? aN6() : 16 === id ? ay.aAZ.aN8(2) : 17 === id ? ay.aAZ.aN8(3) : 18 === id ? s.t(8, this.aKa, new rn(16)) : 21 === id ? ay.aN9.aNA(a2j.s6, a2j.s7, a2j.s8) : 22 === id ? ay.aN9.aNB(a2j.s6, a2j.aNC, a2j.aND) : 23 === id ? ay.aN9
			.aNE(a2j.aMH, a2j.zV) : 24 === id ? ay.aN9.aNF(a2j.aMH, a2j.s7, a2j.s8) : 25 === id ? ay.aLS.aLh(a2j) : 28 === id ? ay.aN9.aNG(a2j.s6, a2j.aNC, a2j.aND) : 29 === id ? ay.aLS.aNH(a2j) : 1e3 === id && (this.aN4 = id = 25, ay.aLS.aLh(
				a2j))
	}, this.aNJ = function(code, bp, data) {
		!bp && code !== id || (16 === code ? s.t(7, this.aKa) : 17 === code ? (ay.x.close(0, 3252), bh.x.uV(0), bh.km.data[117].tO && 0 < bh.km.data[117].tO.length ? (bp = bh.x.uW(0), bh.qz.r0(105, bp.rk), bh.qz.r0(106, bp.password), s.t(8, this
			.aKa, new rn(16))) : (bh.qz.r0(105, ""), s.x.aAc())) : 21 === code ? s.t(10, this.aKa, new aNK(data)) : 23 === code ? s.t(13, 0, new aLz({
			data: data,
			aMH: a2j.aMH
		})) : 25 === code && (s.x.aKl.rk = a2j.rk, s.t(15, this.aKa)))
	}, this.qo = function() {
		aL2.qo()
	}, this.resize = function() {
		aL2.resize(), aN2.resize()
	}, this.a0v = function(et) {
		2 === et && aL2.tW[0].pp()
	}, aL2 = new tP(L(263), [new v("⬅️ " + L(35), function() {
		aN1 ? s.t(29) : s.x.aAc()
	})]), aN2 = new r1(aL2.tV, L(264))
}

function aKp() {
	var aLo, aLp, pS;

	function aNO() {
		var g0;
		1 === aC.data.gameMode ? (aC.data.teamPlayerCount || (aC.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), aC.a3L.a3P()), g0 = b8.pg.a1S(aC.data.teamPlayerCount, 0), aC.data.numberTeams = g0) : (2 === aC.data
			.botDifficultyType && (aC.data.botDifficultyType = 0), 1 === aC.data.spawningType && (aC.data.spawningType = 0))
	}

	function aLr() {
		1 !== aC.data.gameMode && (aC.data.teamPlayerCount = null), aNQ(), aC.data.canvas = null, s.t(5, 5)
	}

	function aNQ() {
		b7.on.dU(), bh.qz.r0(156, b7.a3b.yG())
	}

	function aNM() {
		aC.data.isReplay = 0, aNQ(), aC.a3L.a3m(), aZ.aED(), aC.a3L.a3j(), aC.data.canvas = 2 === aC.data.mapType ? bQ.vS : null, aC.a3O(), aC.a3N = 1
	}

	function aNe() {
		aNO();
		for (var g = [aNT(), aNU(), aNV()], aA = 3; aA < 6; aA++) aLp.pT.removeChild(aLp.pU[aA].pC), aLp.pU[aA] = g[aA - 3], aLp.pT.appendChild(aLp.pU[aA].pC);
		aLp.resize()
	}

	function aNT() {
		var aNf, aLL = new pA;
		return aLL.pD(L(260)), aNf = 0 === aC.data.gameMode ? [L(261), L(239)][aC.data.colorsType] : aC.data.numberTeams + " Team" + (1 === aC.data.numberTeams ? "" : "s"), aLL.pJ(aNf), aLL.pO(new r2([new v(L(269), function() {
			s.t(21)
		}).button])), aLL
	}

	function aNU() {
		var aLL = new pA,
			g = (aLL.pD(L(60)), [L(238) + ": " + aD.jy[aC.data.botDifficultyValue], L(240), L(241), L(239)]);
		return aLL.pJ(g[aC.data.botDifficultyType]), aLL.pO(new r2([new v(L(269), function() {
			s.t(25)
		}).button])), aLL
	}

	function aNV() {
		var aLL = new pA,
			g = (aLL.pD("Spawning"), [L(261), L(271), L(239)]);
		return aLL.pJ(g[aC.data.spawningType]), aLL.pO(new r2([new v(L(269), function() {
			s.t(24)
		}).button])), aLL
	}
	this.show = function() {
		aLo.show(), this.resize(), aLo.tV.scrollTop = s.x.aG6[0]
	}, this.qo = function() {
		s.x.aG6[0] = aLo.tV.scrollTop, aLo.qo()
	}, this.resize = function() {
		aLo.resize(), aLp.resize()
	}, this.a0v = function(et) {
		2 === et && aLo.tW[0].pp()
	}, aLo = new tP("🔧 " + L(266), [new v("⬅️ " + L(35), aLr), new v(L(267), aNM)]), aNO(), aC.data.canvas || (2 === aC.data.mapType ? aC.data.canvas = bQ.vS : 1 === aC.data.mapType ? aC.data.canvas = bQ.aIf(bQ.a3k(aC.data), 0).vS : (aC.data
		.mapType = 0, aC.data.passableWater = aC.data.passableMountains = 1, aC.data.canvas = bQ.aIf(bQ.a3k(aC.data), aC.data.mapSeed).vS)), aLp = new pQ(aLo.tV, (function(pS) {
		var aLL = new pA,
			a1i = (aLL.pD(L(268)), aC.data.canvas);
		a1i.style.width = "100%", aLL.pO({
			e: a1i
		}), aLL.pO(new r2([new v(L(269), function() {
			s.t(20)
		}).button])), pS.push(aLL)
	}(pS = []), function(pS) {
		var aLL = new pA;
		aLL.pD(L(242)), aLL.pO(new qM({
			dx: -1,
			value: aC.data.playerCount
		}, 1, 0, function(e) {
			var playerCount = bJ.p5(Math.floor(e.target.value), 1, 512);
			e.target.value = aC.data.playerCount = playerCount, 1 === aC.data.gameMode && (e = b8.pg.a1S(aC.data.teamPlayerCount, 0), aC.a3L.a3P(), b8.pg.a1S(aC.data.teamPlayerCount, 0) !== e) && aNe()
		})), pS.push(aLL)
	}(pS), function(pS) {
		var aLL = new pA;
		aLL.pD(L(270)), aLL.pL(new tK({
			tO: ["Battle Royale", "Teams"],
			value: aC.data.gameMode
		}, function(dx) {
			aC.data.gameMode !== dx && (aC.data.gameMode = dx, aNe())
		})), pS.push(aLL)
	}(pS), pS.push(aNT()), pS.push(aNU()), pS.push(aNV()), function(pS) {
		var aLL = new pA,
			g = (aLL.pD(L(272)), [L(273), L(274), L(239)]);
		aLL.pJ(g[aC.data.playerNamesType]), aLL.pO(new r2([new v(L(269), function() {
			s.t(23)
		}).button])), pS.push(aLL)
	}(pS), function(pS) {
		var aLL = new pA,
			g = (aLL.pD(L(235)), [L(237), L(238) + ": " + aC.data.aIncomeValue, L(239)]);
		aLL.pJ(g[aC.data.aIncomeType]), aLL.pO(new r2([new v(L(269), function() {
			s.t(22)
		}).button])), pS.push(aLL)
	}(pS), function(pS) {
		var aLL = new pA,
			g = (aLL.pD(L(275)), [L(237), L(238) + ": " + aC.data.tIncomeValue, L(239)]);
		aLL.pJ(g[aC.data.tIncomeType]), aLL.pO(new r2([new v(L(269), function() {
			s.t(26)
		}).button])), pS.push(aLL)
	}(pS), function(pS) {
		var aLL = new pA,
			g = (aLL.pD(L(276)), [L(237), L(238) + ": " + aC.data.iIncomeValue, L(239)]);
		aLL.pJ(g[aC.data.iIncomeType]), aLL.pO(new r2([new v(L(269), function() {
			s.t(27)
		}).button])), pS.push(aLL)
	}(pS), function(pS) {
		var aLL = new pA,
			g = (aLL.pD(L(277)), [L(237), L(238) + ": " + aC.data.sResourcesValue, L(239)]);
		aLL.pJ(g[aC.data.sResourcesType]), aLL.pO(new r2([new v(L(269), function() {
			s.t(28)
		}).button])), pS.push(aLL)
	}(pS), function(pS) {
		var aLL = new pA;
		aLL.pD(L(278)), aLL.pO(new r2([new v(L(279), function() {
			s.w(), aC.a3L.a3n(), s.x.aG6[0] = 0, s.t(19)
		}).button])), aLL.pO(new r2([new v(L(280), function() {
			bk.aFv()
		}).button])), aLL.pO(new r2([new v(L(281), function() {
			return bk.aFx(), !0
		}).button])), pS.push(aLL)
	}(pS), pS))
}

function aKx() {
	var aLo, aLp, aLq, pS;

	function aLr() {
		aLt(), 2 !== aC.data.iIncomeType && (aC.data.iIncomeData = null), s.aL1()[19] = null, s.a0B()
	}

	function aLt() {
		2 === aC.data.iIncomeType && b8.pg.a1Y(aLq.tw(), aC.data.iIncomeData, 255)
	}
	this.show = function() {
		aLo.show(), this.resize()
	}, this.qo = function() {
		aLo.qo()
	}, this.resize = function() {
		aLo.resize(), aLp.resize()
	}, this.a0v = function(et) {
		2 === et && aLo.tW[0].pp()
	}, aLo = new tP(L(276), [new v("⬅️ " + L(35), aLr)]), aLp = new pQ(aLo.tV, (function(pS) {
		var aLL = new pA;
		aLL.pD(L(236)), aLL.pL(new tK({
			tO: [L(237), L(238), L(239)],
			value: aC.data.iIncomeType
		}, function(dx) {
			aLt(), 2 !== dx || aC.data.iIncomeData || (aC.data.iIncomeData = new Uint8Array(aC.eV), aC.data.iIncomeData.fill(32)), aC.data.iIncomeType = dx, s.t(27)
		})), pS.push(aLL)
	}(pS = []), function(pS) {
		var aLL;
		1 === aC.data.iIncomeType && ((aLL = new pA).pD("Value"), aLL.pO(new qM({
			dx: -1,
			value: aC.data.iIncomeValue
		}, 1, 0, function(e) {
			var value = bJ.p5(Math.floor(e.target.value), 0, 255);
			e.target.value = aC.data.iIncomeValue = value
		})), pS.push(aLL))
	}(pS), function(pS) {
		var aLL;
		2 === aC.data.iIncomeType && ((aLL = new pA).pD("Data"), (aLq = new tn(0, 1, 0, 1)).tu(b8.zS.a34(aC.data.iIncomeData, 4)), aLL.pO(aLq), pS.push(aLL))
	}(pS), pS))
}

function aKf() {
	var aNg, aNh, aMo, qL, aNi;
	this.aEm = new rv, aMo = new q9([.45, .27], [.5, .5], 2 / 3), aNh = [new v("⚔️<br>" + L(282), function() {
			aNj(0)
		}, b9.n7), new v("🗡️<br>" + L(266), function() {
			aNj(1)
		}, b9.nP), new v("🔑<br>" + L(283), function() {
			aNj(2)
		}, b9.nf), new v("☰<br>" + L(284), function() {
			aNj(3)
		}, b9.mr), new v("", function() {
			s.t(12)
		}, b9.ma, !1),
		new v("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new v("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], qL = new qM(bh.km.data[122]);
	for (var aA = 0; aA < aNh.length; aA++) aNh[aA].button.style.position = "absolute";

	function aNj(dx) {
		z.a0.setState(10), aa.sE() || aa.aEd(), 0 === dx ? s.x.a3e() : 1 === dx ? (b7.aGG.vD(bh.km.data[156].value, 1) || aC.a3L.a3n(), s.t(19)) : 2 === dx ? 0 !== z.id || bh.km.data[140].value ? s.t(8, s.rm, new rn(16)) : s.x.aNk(s.rm, 16) : 3 ===
			dx && s.t(1)
	}
	qL.e.style.position = "absolute", qL.e.style.textAlign = "center", qL.e.placeholder = L(285), this.show = function() {
		aZ.setState(0), z.a0.setState(12), this.aEm.show(), aNh[4].ps(b8.color.a1p(bh.km.data[121].value)), this.resize(), document.body.appendChild(qL.e);
		for (var aA = 0; aA < aNh.length; aA++) document.body.appendChild(aNh[aA].button);
		1 !== z.id || z.dk < 5 || (aNi && bd.e7 > aNi + 144e5 ? z.uG.setState(14) : aNi = bd.e7)
	}, this.qo = function() {
		this.aEm.qo(), document.body.removeChild(qL.e);
		for (var aA = 0; aA < aNh.length; aA++) document.body.removeChild(aNh[aA].button)
	}, this.resize = function() {
		this.aEm.resize(), this.aEm.resize(), aMo.resize();
		var gap = .5 * ba.gap,
			sj = 10 / 99 * .84 * aMo.i,
			aNn = .16 * aMo.j,
			a7b = .19 * aMo.i,
			ef = aMo.ef + a7b,
			sj = aMo.eh + sj + 3 * gap,
			i = .5 * (aMo.i - gap) - a7b,
			a7b = aMo.i - 2 * a7b - aNn - gap,
			a7b = (b8.pX.sD(qL.e, ef, sj, a7b, aNn), b8.pX.sD(aNh[4].button, ef + a7b + gap, sj, aNn, aNn), .5 * (aMo.eh + aMo.j - (sj += aNn + gap) - gap));
		b8.pX.sD(aNh[0].button, ef, sj, i, a7b), b8.pX.sD(aNh[1].button, ef + i + gap, sj, i, a7b), b8.pX.sD(aNh[2].button, ef, sj + a7b + gap, i, a7b), b8.pX.sD(aNh[3].button, ef + i + gap, sj + a7b + gap, i, a7b);
		b8.pX.sD(aNh[5].button, ef, sj + a7b * 2 + gap * 2, i * 2 + gap, a7b / 3);
		b8.pX.sD(aNh[6].button, ef, sj + a7b * 2.33 + gap * 3, i * 2 + gap, a7b / 3);
		for (var aA = 0; aA < aNh.length; aA++) aNh[aA].button.style.font = b8.pX.rM(0, b8.pX.a26(.065 * aMo.j)), b8.pX.pi(aNh[aA].button, 5);
		qL.e.style.font = b8.pX.rM(0, b8.pX.a26(.08 * aMo.j)), b8.pX.pi(qL.e, 5)
	}, this.te = function() {
		if (aZ.aEH(), aS.te(), aN.te(), bW.te(), aa.sE()) {
			if (__fx.settings.displayWinCounter) {
				const size = Math.floor(aMo.i * 0.03);
				tf.font = b8.pX.rM(1, size);
				tf.fillStyle = "#ffffff";
				const text = "Win count: " + __fx.wins.count;
				const textLength = tf.measureText(text).width;
				tf.textAlign = "left";
				tf.textBaseline = "middle";
				tf.fillText(text, tf.canvas.width - textLength - size / 2, size);
			};
			tf.imageSmoothingEnabled = !1;
			var et = aa.aEK("territorial.io"),
				mG = .84 * aMo.i / et.width;
			tf.setTransform(mG, 0, 0, mG, aMo.ef + .08 * aMo.i, aMo.eh), aNg = aNg || b8.a19.a2h(et, b8.a19.a2n, [0, 0, 0]);
			for (var ef = -1; ef <= 1; ef += 2)
				for (var eh = -1; eh <= 1; eh += 2) tf.drawImage(aNg, ef, eh);
			tf.drawImage(et, 0, 0), tf.imageSmoothingEnabled = !0;
			var he = aa.aEK("logo"),
				aNp = .6666 * mG * et.height / he.height,
				mH = .5 * h.i,
				mI = aMo.eh + .5 * mG * et.height - .5 * aNp * he.height;
			tf.setTransform(aNp, 0, 0, aNp, mH - .6 * mG * et.width, mI), tf.drawImage(he, 0, 0), tf.setTransform(aNp, 0, 0, aNp, mH + .6 * mG * et.width - aNp * he.width, mI), tf.drawImage(he, 0, 0), tf.setTransform(1, 0, 0, 1, 0, 0), tf
				.imageSmoothingEnabled = !0
		}
	}
}

function aKm() {
	var aL2, aNq, aNr, tQ;

	function aNs(aA) {
		s.t(8, s.rm, new rn(21, {
			s6: aA,
			s7: 0,
			s8: 10
		}))
	}
	this.show = function() {
		aL2.show(), this.resize()
	}, this.qo = function() {
		aL2.qo()
	}, this.resize = function() {
		aL2.resize(), aNq.resize()
	}, this.a0v = function(et) {
		2 === et && aL2.tW[0].pp()
	}, aNr = [new v(L(286), function() {
		aNs(1)
	}, 0, 0, 1), new v(L(287), function() {
		aNs(2)
	}, 0, 0, 1), new v(L(288), function() {
		aNs(3)
	}, 0, 0, 1), new v(L(289), function() {
		aNs(0)
	}, 0, 0, 1), new v(L(290), function() {
		aNs(9)
	}, 0, 0, 1), new v(L(291), function() {
		aNs(10)
	}, 0, 0, 1)], tQ = [new v("⬅️ " + L(35), function() {
		s.a0B()
	})], aL2 = new tP(L(292), tQ), aNq = new q6(aNr, aL2.tV)
}

function aB0(title, pK, aNt) {
	var aL2, aN2;
	this.show = function() {
		aL2.show(), this.resize()
	}, this.qo = function() {
		aL2.qo()
	}, this.resize = function() {
		aL2.resize(), aN2.resize()
	}, this.a0v = function(et) {
		2 === et && aL2.tW[0].pp()
	}, aNt = aNt || [new v("⬅️ " + L(35), function() {
		s.a0B()
	}, b9.nJ)], aL2 = new tP(title, aNt), aN2 = new r1(aL2.tV, pK), b8.pX.textAlign(aL2.tV.style, 1)
}

function aNK(data) {
	var aL2, aNu, et, rc;

	function aNv(hh) {
		var eY = data.data.length;
		if (eY) {
			for (var s7, max = min = parseInt(data.data[0][0]), aA = 1; aA < eY; aA++) var aCj = parseInt(data.data[aA][0]),
				min = Math.min(aCj, min),
				max = Math.max(aCj, max);
			s7 = hh < 0 ? min + hh : max + 1, s.t(8, s.aDG().aKa, new rn(21, {
				s6: data.s6,
				s7: s7,
				s8: s7 + Math.abs(hh)
			}))
		}
	}
	this.show = function() {
			aL2.show(), this.resize()
		}, this.qo = function() {
			aL2.qo()
		}, this.resize = function() {
			aL2.resize(), aNu.resize()
		}, this.a0v = function(et) {
			2 === et && aL2.tW[0].pp()
		}, et = data.data.length ? 0 : 1, et = [new v("⬅️ " + L(35), function() {
			s.a0B()
		}), new v(L(293), function() {
			aNv(-10)
		}, et, 0, 1), new v(L(294), function() {
			aNv(10)
		}, et, 0, 1), new v(L(244), function() {
			s.t(11, 10, new aNw({
				s6: data.s6
			}))
		})], rc = [L(295), L(296), L(297), L(298), L(299), L(300), L(301), L(302), L(303), L(304), L(291)], aL2 = new tP(rc[data.s6], et),
		function() {
			var aA, eb = {
					rW: []
				},
				rW = eb.rW,
				aNy = data.data,
				eY = aNy.length;
			eY && 0 === aNy[0][0] && 0 <= (dx = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5][data.s6]) && (s.x.s9[dx] = aNy[0][1]);
			var mG = [.1, .001, .01, 1, 100, 1, 1, .1, 100, .01, .01][data.s6],
				a2r = [1, 3, 2, 0, 0, 0, 0, 1, 0, 2, 2][data.s6],
				dx = [
					[L(305), L(306) + " ↗", L(307)],
					[L(305), L(308), L(309), L(310) + " ↗"],
					[L(305), L(306) + " ↗", L(309)],
					[L(305), L(306) + " ↗", L(309)],
					[L(311), L(312), L(313) + " ↗", L(314) + " ↗", L(117)],
					[L(311), L(312), L(315) + " ↗", L(316) + " ↗", L(317)],
					[L(311), L(312), L(318) + " ↗", L(319) + " ↗", L(320)],
					[L(311), L(312), L(315) + " ↗", L(316) + " ↗", L(321)],
					[L(311), L(312), L(313) + " ↗", L(314) + " ↗", L(117)],
					[L(305), L(306) + " ↗", L(309)],
					[L(305), L(306) + " ↗", L(322)]
				];
			if (eb.rc = dx[data.s6], eb.rh = [
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
				][data.s6], 0 === data.s6 || 2 === data.s6 || 3 === data.s6 || 9 === data.s6 || 10 === data.s6)
				for (aA = 0; aA < eY; aA++) rW.push([{
					f0: aNy[aA][0] + 1 + ".",
					di: 0
				}, {
					f0: aNy[aA][1],
					di: 1,
					rk: aNy[aA][4],
					rl: aNy[aA][3]
				}, {
					f0: (mG * aNy[aA][2]).toFixed(a2r),
					di: 0
				}]);
			else if (1 === data.s6)
				for (aA = 0; aA < eY; aA++) rW.push([{
					f0: aNy[aA][0] + 1 + ".",
					di: 0
				}, {
					f0: aNy[aA][1],
					di: 0
				}, {
					f0: (mG * aNy[aA][2]).toFixed(a2r),
					di: 0
				}, {
					f0: aNy[aA][3],
					di: 1,
					rk: aNy[aA][5],
					rl: aNy[aA][4]
				}]);
			else if (4 === data.s6 || 5 === data.s6 || 6 === data.s6 || 7 === data.s6 || 8 === data.s6)
				for (aA = 0; aA < eY; aA++) {
					var aO1 = aNy[aA][5];
					4 === data.s6 || 8 === data.s6 ? "100%" === (aO1 = (aO1 % 64 * 100 / (aO1 >> 6)).toFixed(0) + "%") && (4 === data.s6 ? aO1 += " (" + L(323) + ")" : aO1 += " (" + L(324) + ")") : 5 === data.s6 ? 32768 <= aO1 && (aO1 = -(aO1 -
						32768)) : aO1 = (mG * aO1).toFixed(a2r), rW.push([{
						f0: "" + aNy[aA][0],
						di: 0
					}, {
						f0: "" + aNy[aA][6],
						di: 0
					}, {
						f0: aNy[aA][7],
						di: 1,
						rk: aNy[aA][1],
						rl: aNy[aA][2]
					}, {
						f0: aNy[aA][8],
						di: 1,
						rk: aNy[aA][3],
						rl: aNy[aA][4]
					}, {
						f0: "" + aO1,
						di: 0
					}])
				}
			aNu = new rV(aL2.tV, eb)
		}()
}

function aNw(a2j) {
	var aL2, aL3, pS;
	this.show = function() {
		aL2.show(), this.resize()
	}, this.qo = function() {
		aL2.qo()
	}, this.resize = function() {
		aL2.resize(), aL3.resize()
	}, this.a0v = function(et) {
		2 === et && aL2.tW[0].pp()
	}, aL2 = new tP(L(325), [new v("⬅️ " + L(35), function() {
		s.aL0(10)
	})]), aL3 = new pQ(aL2.tV, ((pS = []).push(function() {
		var aLU, aLL = new pA,
			aMm = new qM(bh.km.data[132], 1, function() {
				aLU.button.click()
			}),
			aMn = new qM(bh.km.data[131], 1, function() {
				aMm.e.focus()
			});
		aLL.pD(L(249)), aLL.pO(aMn), aMn.e.style.marginBottom = "0.8em", aLL.pD(L(250)), aLL.pO(aMm);
		return aLU = new v(L(248), function() {
			s7 = Math.floor(aMn.e.value), s8 = Math.floor(aMm.e.value);
			var s8, s7 = {
				a1Q: Math.min(s7, s8),
				aKB: Math.max(s7, s8)
			};
			s.t(8, s.aCG(10).aKa, new rn(21, {
				s6: a2j.s6,
				s7: s7.a1Q,
				s8: s7.aKB
			}))
		}, 0, 0, 1), aLL.pO(new r2([aLU.button])), aLL
	}()), pS.push(function() {
		var aLU, aLL = new pA,
			aMm = new qM(bh.km.data[134], 1, function() {
				aLU.button.click()
			}),
			aMn = new qM(bh.km.data[133], 0, function() {
				aMm.e.focus()
			});
		return aLL.pD(1 === a2j.s6 ? L(326) : L(327)), aLL.pO(aMn), aMn.e.style.marginBottom = "0.8em", aLL.pD(L(328)), aLL.pO(aMm), aLU = new v(L(248), function() {
			var aNC = aMn.e.value.slice(0, 20),
				aND = Math.abs(Math.floor(aMm.e.value));
			s.t(8, s.aCG(10).aKa, new rn(22, {
				s6: a2j.s6,
				aNC: aNC,
				aND: aND
			}))
		}, 0, 0, 1), aLL.pO(new r2([aLU.button])), aLL
	}()), pS.push(function() {
		var aLU, aLL = new pA,
			aMm = new qM(bh.km.data[152], 1, function() {
				aLU.button.click()
			}),
			aMn = new qM(bh.km.data[151], 0, function() {
				aMm.e.focus()
			});
		return aLL.pD(L(329)), aLL.pO(aMn), aMn.e.style.marginBottom = "0.8em", aLL.pD(L(328)), aLL.pO(aMm), aLU = new v(L(248), function() {
			var aNC = aMn.e.value.slice(0, 5),
				aND = Math.abs(Math.floor(aMm.e.value));
			s.t(8, s.aCG(10).aKa, new rn(28, {
				s6: a2j.s6,
				aNC: aNC,
				aND: aND
			}))
		}, 0, 0, 1), aLL.pO(new r2([aLU.button])), aLL
	}()), pS))
}

function aKz() {
	var aO5, sI, aO8, sH, sK, aO6 = [new Array(4), [], new Array(2), new Array(2)],
		aO7 = new Array(4),
		aO9 = new Array(2),
		aOA = [L(59), L(290), L(330), L(331)];

	function aCU() {
		var a5d = aO5.sV.qL.e.value.trim().slice(0, 127);
		a5d.length < 1 || (aO5.sV.qL.e.value = "", bl.aB3.yr(a5d))
	}

	function aOD(aOF) {
		bl.x.qa[3] = 1 - bl.x.qa[3], aOE(3, 1, bl.x.qa[3]), aOF && ay.aCf.aCg(4), bl.x.qa[3] && bh.qz.r0(158, bl.x.qa[0])
	}

	function aOB(er, es) {
		bl.x.qa[er] !== es && (0 === er && bl.x.qa[3] && aOD(0), aOE(er, bl.x.qa[er], 0), aOE(er, es, 1), bl.x.qa[er] = es, 0 === er ? (ay.aCf.aCg(2, es), bl.x.qa[2] ? (aO5.sW.lP(), aO5.sV.qX(1)) : aO5.sV.qX(0), s.aDG().aCJ(), s.aDG().aCI()) : 2 ===
			er && (0 === es ? (ay.aCf.aCg(0), aO5.sV.lP(), aO5.se()) : (ay.aCf.aCg(1), aO5.sW.lP(), aO5.sf())))
	}

	function aOE(er, es, color) {
		aO5.sY[er].q7[es].ps(color ? b9.n3 : b9.nn)
	}

	function aOI(aBb) {
		return aBb < 7 ? aBb + 2 + " " + L(338) : 7 === aBb || 10 === aBb ? L(290) + " (Full-Sending: " + L(7 === aBb ? 339 : 340) + ")" : 8 === aBb ? "1v1" : L(341)
	}

	function aOJ(f0) {
		var a5g = bJ.dj(f0, 60),
			f0 = f0 % 60;
		return (a5g < 10 ? "0" : "") + a5g + ":" + (f0 < 10 ? "0" : "") + f0
	}
	this.aCr = function() {
		return aO5.sV
	}, this.aB3 = function(rk) {
		aOB(2, 0);
		var pE = aO5.sV.qL.e.value,
			rk = "@" + rk + " ";
		pE.length && !b8.zS.a2D(pE, " ") && (rk = " " + rk), aO5.sV.qL.e.value = pE += rk, aO5.sV.qL.e.focus()
	}, this.aCH = function() {
		aO5.sW.lP()
	}, this.aCJ = function() {
		var aOH = bl.x.qa[0],
			aOH = bl.x.qc[aOH];
		bQ.a6(aOH.eE, aOH.mapSeed), sI.q7[0].button.textContent = L(268) + ": " + bQ.vI.vJ[aOH.eE].name, sI.q7[1].button.textContent = L(270, 0, "Mode") + ": " + aOI(aOH.aBb), sI.q7[2].button.textContent = L(335) + ": " + bQ.vI.vJ[aOH.aDH].name,
			sI.q7[3].button.textContent = L(336, 0, "Next Mode") + ": " + aOI(aOH.aDI), sI.q7[4].button.textContent = L(337) + ": " + aOJ(aOH.aCL), sI.resize()
	}, this.aCI = function() {
		var aOH = bl.x.qa[0],
			qb = bl.x.qc[aOH];
		aO5.sc(qb.sd);
		for (var aA = 0; aA < bl.ss.st.length; aA++) aO6[0][aA].qW.textContent = "" + bl.ss.st[aA].length;
		var ss = bl.ss.st[aOH],
			aOK = ss.length,
			aOL = bl.ss.su[aOH];
		aO6[2][1].qW.textContent = "" + aOK, aO6[3][1].qW.textContent = "" + aOL, sI.q7[4].button.textContent = L(337) + ": " + aOJ(qb.aCL);
		for (aA = 0; aA < 4; aA++) {
			var aOM = bl.x.qc[aA];
			aO7[aA] ? 0 === aOM.sd && (aO7[aA].qW.textContent = bQ.vI.vJ[aOM.eE].name) : aO7[aA] = new qV(bQ.vI.vJ[aOM.eE].name, sH.q7[aA].button, 1, 1), b8.zS.startsWith(aOA[aA], "🏆 ") ? aOM.aBh || (aOA[aA] = aOA[aA].substring(3), sH.q7[aA]
				.button.textContent = aOA[aA], sH.q7[aA].button.appendChild(aO6[0][aA].qW), sH.q7[aA].button.appendChild(aO7[aA].qW)) : aOM.aBh && (aOA[aA] = "🏆 " + aOA[aA], sH.q7[aA].button.textContent = aOA[aA], sH.q7[aA].button
				.appendChild(aO6[0][aA].qW), sH.q7[aA].button.appendChild(aO7[aA].qW))
		}
		var qb = "",
			aOO = "";
		0 === aOH && (qb = bl.qh.aBv(ss, 0, aOK), aOO = bl.qh.aBv(ss, 0, aOL)), aO8[0].qW.textContent = qb, aO8[1].qW.textContent = aOO, aO9[1].qW.textContent = "MP: " + bl.x.aC9[0] + "   SP: " + bl.x.aC9[1] + "   Lobby: " + b8.pg.a1d(bl.ss.st)
	}, this.aCN = function() {
		aO5.sV.lP()
	}, this.show = function() {
		aO5.show(), this.resize(), bl.message.show()
	}, this.qo = function() {
		aO5.qo(), bl.tE.qo(), bl.sq.qo(), bl.message.qo()
	}, this.resize = function() {
		aO5.resize(1 - bl.x.qa[2]), bl.message.resize()
	}, this.a0v = function(et) {
		2 === et ? bl.x.qa[3] ? aOD(1) : aO5.sY[3].q7[0].pp() : et < 2 && aOD(1)
	}, sH = new r5([new v(aOA[0], function() {
		return aOB(0, 0), 2
	}), new v(aOA[1], function() {
		return aOB(0, 1), 2
	}), new v(aOA[2], function() {
		return aOB(0, 2), 2
	}), new v(aOA[3], function() {
		return aOB(0, 3), 2
	})], b9.nn), sI = new r5([new v("", 0, 2), new v("", 0, 2), new v("", 0, 2), new v("", 0, 2), new v("", 0, 2)], b9.no, 1);
	var aOC = new r5([new v(L(332), function() {
		return aOB(2, 0), 2
	}), new v(L(113), function() {
		return aOB(2, 1), 2
	})], b9.nn);
	sK = new r5([new v(L(333), (__fx.customLobby.setLeaveFunction(() => {
			s.w(), bl.t8(), ay.x.a0D(3240), __fx.customLobby.setActive(false), s.t(5, 5)
		}),
		function() {
			s.w(), bl.t8(), ay.x.a0D(3240), __fx.customLobby.setActive(false), s.t(5, 5)
		})), new v(L(334), function() {
		return aOD(1), 2
	})], b9.nn), aO5 = new sG(sH, sI, aOC, sK, aCU, bl.tE.aD0);
	for (var aA = 0; aA < 4; aA++) aO6[0][aA] = new qV("0", sH.q7[aA].button);
	aO6[2][1] = new qV("0", aOC.q7[1].button), aO6[3][1] = new qV("0", sK.q7[1].button), aO8 = [new qV("", aOC.q7[1].button, 1, 1), new qV("", sK.q7[1].button, 1, 1)], aOE(0, bl.x.qa[0], 1), aOE(2, bl.x.qa[2], 1), (aO9 = [new qV(L(242), aO5.sg(), 1,
		0), new qV("", aO5.sg(), 1, 1)])[0].qW.style.fontSize = "0.4em", aO9[1].qW.style.fontSize = "0.4em"
}

function aKg() {
	var aL2, aL3, pS;
	this.show = function() {
		aL2.show(), this.resize()
	}, this.qo = function() {
		aL2.qo()
	}, this.resize = function() {
		aL2.resize(), aL3.resize()
	}, this.a0v = function(et) {
		2 === et && aL2.tW[0].pp()
	}, aL2 = new tP(L(342), [new v("⬅️ " + L(35), function() {
		s.t(7, s.aCG(7).aKa)
	}), new v(L(193), function() {
		bh.qz.r0(105, bE.rp.v2(aL3.pU[0].pB[0].e.value, 5)), bh.qz.r0(106, bE.rp.v2(aL3.pU[1].pB[0].e.value, 8)), s.t(8, s.aCG(7).aKa, new rn(18))
	})]), aL3 = new pQ(aL2.tV, ((pS = []).push(function() {
		var aLL = new pA;
		return aLL.pD(L(174)), aLL.pO(new qM({
			value: "",
			dx: -1
		})), aLL
	}()), pS.push(function() {
		var aLL = new pA,
			aLV = (aLL.pD(L(176)), new qM({
				value: "",
				dx: -1
			}));
		return aLV.e.type = "password", aLL.pO(aLV), aLL.pO(new r2([new v(L(177), function(e) {
			return e.textContent === L(177) ? (e.textContent = L(178), aLV.e.type = "text") : (e.textContent = L(177), aLV.e.type = "password"), !0
		}).button])), aLL
	}()), pS))
}

function aKn() {
	var aL2, aNq, aNr, tQ;

	function aNs(aA) {
		s.t(8, s.rm, new rn(21, {
			s6: aA,
			s7: 0,
			s8: 10
		}))
	}
	this.show = function() {
		aL2.show(), this.resize()
	}, this.qo = function() {
		aL2.qo()
	}, this.resize = function() {
		aL2.resize(), aNq.resize()
	}, this.a0v = function(et) {
		2 === et && aL2.tW[0].pp()
	}, aNr = [new v(L(300), function() {
		aNs(5)
	}, 0, 0, 1), new v(L(301), function() {
		aNs(6)
	}, 0, 0, 1), new v(L(302), function() {
		aNs(7)
	}, 0, 0, 1)], tQ = [new v("⬅️ " + L(35), function() {
		s.a0B()
	})], aL2 = new tP(L(343), tQ), aNq = new q6(aNr, aL2.tV)
}

function aKW() {
	this.km = {}, this.s9 = new Array(6), this.aKl = null, this.aKi = null, this.rT = 0, this.aG6 = [0], this.y = function() {
		s.t(5, 5)
	}, this.a3e = function() {
		s.w(), aY.dU()
	}, __fx.customLobby.setJoinFunction(() => {
		s.w(), aY.dU()
	}), this.aAc = function() {
		s.t(0 === aZ.a01() ? 5 : 0)
	}, this.aMl = function() {
		if (1 === bh.km.data[130].value) s.t(8, s.aDG().aKa, new rn(24, {
			aMH: bh.km.data[125].value,
			s7: bh.km.data[128].value,
			s8: bh.km.data[129].value
		}));
		else {
			for (var g = (g = bh.km.data[126].value.split(",")).slice(0, 10), aA = 0; aA < g.length; aA++) g[aA] = g[aA].trim().slice(0, 7).toUpperCase();
			1 === g.length && 0 === g[0].length && (g = []), s.t(8, s.aDG().aKa, new rn(23, {
				aMH: bh.km.data[125].value,
				zV: g
			}))
		}
	}, this.aNk = function(aKa, target) {
		s.t(4, aKa, new u("Data Usage Information",
			"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: <a href='" + bI.aOQ +
			"' target='_blank'>" + bI.aOQ + "</a>", !1, [new v("⬅️ " + L(35), function() {
				s.t(aKa)
			}), new v("✅ Accept", function() {
				bh.qz.r0(140, 1), 0 === target ? s.t(2, aKa) : s.t(8, aKa, new rn(target))
			})]))
	}, this.aOR = function() {
		for (var aA = 0; aA < 6; aA++) this.s9[aA] = bE.ut.ux(bF.oY(5));
		this.s9[1] = "[" + this.s9[1] + "]", 5 === s.rm && (s.aDG().aEm.r0(this.s9), s.aDG().resize())
	}
}

function aKq() {
	var aLo, aLp, aOS, pS;

	function aLr() {
		b4.t8(), s.aL1()[19] = null, s.a0B()
	}

	function aOZ() {
		aOc(), aOa()
	}

	function aOc() {
		aOS.pC.lastChild && aOS.pC.removeChild(aOS.pC.lastChild)
	}

	function aOa() {
		var aOd = bQ.a3k(aC.data);
		aC.data.canvas = bQ.aIf(aOd, aC.data.mapSeed).vS, aOb()
	}

	function aOb() {
		var a1i = aC.data.canvas;
		a1i.style.width = "100%", aOS.pC.appendChild(a1i)
	}
	this.aFq = function(a1i) {
		aC.data.canvas && aOc(), aC.data.canvas = a1i, aOb()
	}, this.show = function() {
		aLo.show(), this.resize()
	}, this.qo = function() {
		aLo.qo()
	}, this.resize = function() {
		aLo.resize(), aLp.resize()
	}, this.a0v = function(et) {
		2 === et && aLo.tW[0].pp()
	}, aLo = new tP(L(268), [new v("⬅️ " + L(35), aLr)]), 2 === aC.data.mapType && b4.dU(), aLp = new pQ(aLo.tV, (function(pS) {
		var aLL = new pA;
		aLL.pD(L(236)), aLL.pL(new tK({
			tO: [L(344), L(345), L(346)],
			value: aC.data.mapType
		}, function(dx) {
			2 === (aC.data.mapType = dx) ? (b4.dU(), aC.data.canvas = null) : (aC.data.passableWater = aC.data.passableMountains = 1, b4.t8()), s.t(20)
		})), 2 <= aC.data.mapType && (aLL.pO(new rC), aLL.pO(new qw({
			value: aC.data.passableWater
		}, L(347), function(value) {
			aC.data.passableWater = value
		})), aLL.pO(new qw({
			value: aC.data.passableMountains
		}, L(348), function(value) {
			aC.data.passableMountains = value
		})));
		pS.push(aLL)
	}(pS = []), function(pS) {
		if (0 === aC.data.mapType) {
			for (var aLL = new pA, tO = (aLL.pD(L(268)), []), aA = 0; aA < bQ.vI.aJX.length; aA++) tO.push(bQ.vI.vJ[bQ.vI.aJX[aA]].name);
			aLL.pL(new tK({
				tO: tO,
				value: aC.data.mapProceduralIndex
			}, function(dx) {
				aC.data.mapProceduralIndex = dx, aOZ()
			})), pS.push(aLL)
		}
	}(pS), function(pS) {
		if (1 === aC.data.mapType) {
			for (var aLL = new pA, tO = (aLL.pD(L(268)), []), aA = 0; aA < bQ.vI.aJY.length; aA++) tO.push(bQ.vI.vJ[bQ.vI.aJY[aA]].name);
			aLL.pL(new tK({
				tO: tO,
				value: aC.data.mapRealisticIndex
			}, function(dx) {
				aC.data.mapRealisticIndex = dx, aOZ()
			})), pS.push(aLL)
		}
	}(pS), function(pS) {
		var aLL;
		2 === aC.data.mapType && ((aLL = new pA).pD(L(268)), aLL.pO(new r2([new v(L(349), function() {
			return b4.aFj(), !0
		}).button])), pS.push(aLL))
	}(pS), function(pS) {
		(aOS = new pA).pD(L(350)), 2 !== aC.data.mapType ? aOa() : aC.data.canvas && aOb();
		pS.push(aOS)
	}(pS), function(pS) {
		var aLL, qL, aLU;
		0 === aC.data.mapType && ((aLL = new pA).pD("Seed"), qL = new qM({
			dx: -1,
			value: aC.data.mapSeed
		}, 1, 0, function(e) {
			e = Math.abs(Math.floor(e.target.value)) % 16384;
			aC.data.mapSeed !== e && (aC.data.mapSeed = e, aOZ())
		}), aLU = new v(L(261), function(e) {
			var aIa = Math.floor(16384 * Math.random());
			if (aC.data.mapSeed !== aIa) return qL.e.value = aC.data.mapSeed = aIa, aOZ(), !0
		}), aLL.pO(qL), aLL.pO(new r2([aLU.button])), pS.push(aLL))
	}(pS), function(pS) {
		var aLL, qL;
		2 === aC.data.mapType && ((aLL = new pA).pD(L(351)), qL = new qM({
			dx: -1,
			value: aC.data.mapName
		}, 0, 0, function(e) {
			aC.data.mapName = e.target.value = e.target.value.slice(0, 20)
		}), aLL.pO(qL), pS.push(aLL))
	}(pS), pS))
}

function u(title, pK, aOe, aNt) {
	var aL2, aN2;
	this.show = function() {
		aL2.show(), this.resize()
	}, this.qo = function() {
		aL2.qo()
	}, this.resize = function() {
		aL2.resize(), aN2.resize()
	}, this.a0v = function(et) {
		2 === et && aL2.tW[0].pp()
	}, aNt = aNt || [new v("⬅️ " + L(35), function() {
		s.a0B()
	})], aL2 = new tP(title, aNt), aN2 = new r1(aL2.tV, pK), aOe && b8.pX.textAlign(aL2.tV.style, 1)
}

function aKt() {
	var aLo, aLp, aLq, pS;

	function aLr() {
		aLt(), 2 === aC.data.playerNamesType && 1 === b8.pg.a1M(aC.data.playerNamesData).length && (aC.data.playerNamesType = 0), 2 !== aC.data.playerNamesType && (aC.data.playerNamesData = null), s.aL1()[19] = null, s.a0B()
	}

	function aLt() {
		2 === aC.data.playerNamesType && b8.pg.a1a(aLq.tw(), aC.data.playerNamesData, 20)
	}
	this.show = function() {
		aLo.show(), this.resize()
	}, this.qo = function() {
		aLo.qo()
	}, this.resize = function() {
		aLo.resize(), aLp.resize()
	}, this.a0v = function(et) {
		2 === et && aLo.tW[0].pp()
	}, aLo = new tP(L(272), [new v("⬅️ " + L(35), aLr)]), aLp = new pQ(aLo.tV, (function(pS) {
		var aLL = new pA;
		aLL.pD(L(236)), aLL.pL(new tK({
			tO: [L(273), L(274), L(239)],
			value: aC.data.playerNamesType
		}, function(dx) {
			aLt(), aC.data.playerNamesType = dx, s.t(23)
		})), aLL.pO(new rC), aLL.pO(new qw({
			value: aC.data.selectableName
		}, L(352), function(value) {
			aC.data.selectableName = value
		})), pS.push(aLL)
	}(pS = []), function(pS) {
		var aLL;
		2 === aC.data.playerNamesType && ((aLL = new pA).pD("Data"), aLq = new tn(0, 1, 0, 1), aC.data.playerNamesData && aC.data.playerNamesData.length === aC.eV || (aC.data.playerNamesData = new Array(aC.eV), aC.data.playerNamesData
			.fill("")), aLq.tu(b8.zS.a34(aC.data.playerNamesData, 1, '"')), aLL.pO(aLq), pS.push(aLL))
	}(pS), pS))
}

function aKe() {
	var aLo, ts;

	function aOf() {
		s.w();
		var pE = b7.aOj(ts.tw());
		(aC.yn && 0 < pE.length && pE === b7.on.a3a || b7.aGG.vD(pE)) && b7.aOk()
	}
	this.show = function(aOg) {
		this.aOh(aOg), aLo.show(), this.resize()
	}, this.aOh = function(aOg) {
		0 === aC.yn ? aOg ? ts.tu(aOg) : b7.on.a3a.length && ts.tu(b7.on.a3a) : (aC.gh || (b7.on.a3a = b7.a3b.yG()), ts.tu(b7.aOi(b7.on.a3a)))
	}, this.qo = function() {
		aLo.qo()
	}, this.resize = function() {
		aLo.resize(), ts.resize()
	}, this.a0v = function(et) {
		2 === et ? aLo.tW[0].pp() : aOf()
	}, aLo = new tP(L(353), [new v("⬅️ " + L(35), function() {
		s.aL0(1)
	}), new v(L(354), function() {
		ts.tx()
	}), new v(L(355), function() {
		ts.ty()
	}), new v(L(356), function() {
		ts.clear()
	}), new v(L(357), function() {
		aOf()
	})]), ts = new tn(L(358)), aLo.tV.appendChild(ts.e)
}

function aKd() {
	var aL2, aL3, pS, aAY, aLL;

	function aOl() {
		var e7;
		aAY !== bh.km.data[12].value ? (b5.dU(), b5.aAX(), e7 = bd.e7, s.t(4, 1, new u(L(361), L(362), !1, [new v("⬅️ " + L(35), function() {
			s.t(1)
		}), new v("🔄 Reload", function() {
			bd.e7 < e7 + 1500 || z.a0.a1()
		}, b9.n1)]))) : s.t(1)
	}
	this.show = function() {
			aAY = bh.km.data[12].value, aL2.show(), this.resize()
		}, this.qo = function() {
			aL2.qo()
		}, this.resize = function() {
			aL2.resize(), aL3.resize()
		}, this.a0v = function(et) {
			2 === et && aL2.tW[0].pp()
		}, aL2 = new tP(L(359), [new v("⬅️ " + L(35), aOl), new v(L(360), function() {
			s.w(), bh.qz.ua(), s.t(2)
		})]), pS = [], (aLL = new pA).pD(L(363)), aLL.pF(L(364)), pS.push(aLL),
		function(pS) {
			var aLL = new pA,
				g = (aLL.pD(L(385)), b5.data.aAg());
			aLL.pL(new tK({
				tO: g,
				value: b5.data.aAk(g)
			}, function(dx) {
				return bh.qz.r0(12, g[dx].split(":")[0]), !0
			})), pS.push(aLL)
		}(pS),
		function(pS) {
			var aLL = new pA,
				aOo = (aLL.pD(L(383)), []);
			aLL.pO(new r2([new v(L(384), function(e) {
				bV.aOp();
				for (var aA = 0; aA < aOo.length; aA++) aOo[aA].e.value = bV.a9y[aA];
				return b8.pX.a2C(e), !0
			}).button]));
			for (var aA = 0; aA < bV.aOq.length; aA++) {
				aLL.pF(bV.aOq[aA]);
				for (var er = 0; er < 2; er++) {
					var dx = 2 * aA + er,
						qL = new qM({
							value: bV.a9y[dx],
							dx: -1
						});
					qL.e.aOr = dx, aOo.push(qL), qL.e.addEventListener("keydown", function(e) {
						e.preventDefault();
						var code = e.code;
						e.target.value = code, bV.aOs(e.target.aOr, code)
					}), er && (qL.e.style.marginLeft = "4%"), qL.e.style.width = "48%", aLL.pO(qL)
				}
			}
			pS.push(aLL)
		}(pS), (aLL = new pA).pD(L(22)), aLL.pL(new tK({
			tO: ["1", "2"],
			value: aY.aDy - 1
		}, function(aA) {
			aY.aDy = aA + 1
		})), pS.push(aLL), (aLL = new pA).pD(L(365)), bh.km.data[1].tO = [L(366), L(367), L(368), L(369)], aLL.pL(new tK(bh.km.data[1])), pS.push(aLL), (aLL = new pA).pD(L(370)), bh.km.data[9].tO = [L(367), L(371), L(372)], aLL.pL(new tK(bh.km.data[
			9])), pS.push(aLL), (aLL = new pA).pD(L(373)), bh.km.data[11].tO = [L(374), L(9), L(375)], aLL.pL(new tK(bh.km.data[11])), pS.push(aLL), (aLL = new pA).pD(L(376)), aLL.pO(new qw(bh.km.data[2])), pS.push(aLL), (aLL = new pA).pD(L(377)),
		aLL.pO(new qw(bh.km.data[7])), pS.push(aLL), (aLL = new pA).pD(L(378)), aLL.pO(new qw(bh.km.data[8])), pS.push(aLL), (aLL = new pA).pD(L(379)), aLL.pO(new qM(bh.km.data[5])), pS.push(aLL), (aLL = new pA).pD(L(380)), aLL.pO(new qw(bh.km.data[
			13], L(381))), aLL.pO(new qw(bh.km.data[14], L(382))), pS.push(aLL), aL3 = new pQ(aL2.tV, pS)
}

function aKu() {
	var aLo, aLp, aLq, pS;

	function aLr() {
		aLt(), 2 !== aC.data.spawningType || b8.pg.a1M(aC.data.spawningData) || (aC.data.spawningType = 0), 2 !== aC.data.spawningType && (aC.data.spawningData = null), s.aL1()[19] = null, s.a0B()
	}

	function aLt() {
		2 === aC.data.spawningType && b8.pg.a1Y(aLq.tw(), aC.data.spawningData, bQ.aFs - 1)
	}
	this.show = function() {
		aLo.show(), this.resize()
	}, this.qo = function() {
		aLo.qo()
	}, this.resize = function() {
		aLo.resize(), aLp.resize()
	}, this.a0v = function(et) {
		2 === et && aLo.tW[0].pp()
	}, aLo = new tP(L(386), [new v("⬅️ " + L(35), aLr)]), aLp = new pQ(aLo.tV, (function(pS) {
		var aLL = new pA,
			tO = (aLL.pD(L(236)), [L(261), L(271), L(239)]),
			value = aC.data.spawningType;
		0 === aC.data.gameMode && (tO.splice(1, 1), 0 < value) && (value = 1);
		aLL.pL(new tK({
			tO: tO,
			value: value
		}, function(dx) {
			aLt(), aC.data.spawningType = dx, 0 === aC.data.gameMode && 1 === dx && (aC.data.spawningType = 2), 2 !== aC.data.spawningType || aC.data.spawningData || (aC.data.spawningData = new Uint16Array(2 * aC.eV)), s.t(24)
		})), aLL.pO(new rC), aLL.pO(new qw({
			value: aC.data.selectableSpawn
		}, L(387), function(value) {
			aC.data.selectableSpawn = value
		})), pS.push(aLL)
	}(pS = []), function(pS) {
		var aLL = new pA;
		aLL.pD("Seed"), aLL.pO(new qM({
			dx: -1,
			value: aC.data.spawningSeed
		}, 1, 0, function(e) {
			var value = Math.abs(Math.floor(e.target.value)) % 16384;
			e.target.value = aC.data.spawningSeed = value
		})), pS.push(aLL)
	}(pS), function(pS) {
		var aLL;
		2 === aC.data.spawningType && ((aLL = new pA).pD("Data"), (aLq = new tn(0, 1, 0, 1)).tu(b8.zS.a34(aC.data.spawningData, 2)), aLL.pO(aLq), pS.push(aLL))
	}(pS), pS))
}

function aKc() {
	var aL2, aNq, aNr, tQ;

	function aOt(id) {
		0 !== z.id || bh.km.data[140].value ? 0 === id ? s.t(8, 1, new rn(16)) : s.t(2) : s.x.aNk(s.rm, 0 === id ? 16 : 0)
	}
	this.show = function() {
		z.a0.setState(12), aL2.show(), this.resize(), this.ih()
	}, this.qo = function() {
		aL2.qo()
	}, this.resize = function() {
		aL2.resize(), aNq.resize()
	}, this.ih = function() {
		8 === aZ.a01() && (2 <= bb.aOy ? aNr[2].pq === b9.mq && aNr[2].ps(0) : aNr[2].pq !== b9.mq && aNr[2].ps(b9.mq), !aC.gh && aL.p8(aC.eI) ? aNr[1].pq === b9.mq && aNr[1].ps(0) : aNr[1].pq !== b9.mq && aNr[1].ps(b9.mq), !aC.gh && au.hI(aC
			.eI) ? aNr[0].pq === b9.mq && aNr[0].ps(0) : aNr[0].pq !== b9.mq && aNr[0].ps(b9.mq))
	}, this.a0v = function(et) {
		2 === et && aL2.tW[0].pp()
	}, aNr = [new v(L(388), function() {
		aOt(0)
	}), new v(L(292), function() {
		s.t(16)
	}), new v(L(343), function() {
		s.t(17)
	}), new v(L(389), function() {
		s.x.aMl()
	}, 0, 0, 1), new v(L(353), function() {
		s.t(3, 1)
	}), new v(L(390), function() {
		s.t(18)
	}), new v(L(359), function() {
		aOt(1)
	}), new v(L(391), function() {
		s.t(4, 1, new u(L(391), b8.pX.a27([L(400), L(401), "Discord", L(402), L(286), L(403), L(113), L(404), L(405), L(406)], [bI.aAx, bI.zw, bI.aAy, bI.aOz, bI.aP0, bI.zd, bI.aP1, bI.aP2, bI.aP3, bI.aOQ]), !1, [new v("⬅️ " + L(35),
			function() {
				s.t(1)
			})]))
	}), new v(L(392), function() {
		s.t(4, 1, new u(L(392), l.dk + "<br><a href='" + bI.aOz + "' target='_blank'>" + bI.aOz + "</a>" +
			"<br><br><b>" + "FX Client v" + __fx.version + "<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a>" +
			"<br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></b>", !0, [new v("⬅️ " + L(35), function() {
				s.t(1)
			})]))
	}), new v(L(393), function() {
		s.t(4, 1, new u(L(393), L(407) + "<br>" + L(408), !1, [new v("⬅️ " + L(35), function() {
			s.t(1)
		}), new v(L(409), function() {
			z.a0.zq(), s.t(1)
		})]))
	}), new v(L(394), function() {
		z.a0.zr(), s.t(4, 1, new u(L(410), L(411) + " <a href='" + bI.aOQ + "' target='_blank'>" + bI.aOQ + "</a>", !1, [new v("⬅️ " + L(35), function() {
			s.t(1)
		})]))
	})], tQ = [new v("⬅️ " + L(35), function() {
		s.x.aAc()
	})], 8 === aZ.a01() && (aNr.unshift(new v(L(397), function() {
		2 <= bb.aOy && (s.w(), bc.a0y(), bd.dc = !0)
	}, 0, 1)), aNr.unshift(new v(L(398), function() {
		!aC.gh && aL.p8(aC.eI) && (b6.gu.oF(), s.w(), aL.gi) && aL.a0y()
	}, 0, 1)), aNr.unshift(new v(L(399), function() {
		!aC.gh && au.hI(aC.eI) && (bT.a46(2), b6.gu.hE(), s.w(), aL.gi) && aL.a0y()
	}, 0, 1))), 1 === z.id && 5 <= z.dk && aNr.push(new v(L(395), function() {
		z.a0.zs()
	})), aL2 = new tP(L(396), tQ), aNq = new q6(aNr, aL2.tV)
}

function aKy() {
	var aLo, aLp, aLq, pS;

	function aLr() {
		aLt(), 2 !== aC.data.sResourcesType && (aC.data.sResourcesData = null), s.aL1()[19] = null, s.a0B()
	}

	function aLt() {
		2 === aC.data.sResourcesType && b8.pg.a1Y(aLq.tw(), aC.data.sResourcesData, 2047)
	}
	this.show = function() {
		aLo.show(), this.resize()
	}, this.qo = function() {
		aLo.qo()
	}, this.resize = function() {
		aLo.resize(), aLp.resize()
	}, this.a0v = function(et) {
		2 === et && aLo.tW[0].pp()
	}, aLo = new tP(L(277), [new v("⬅️ " + L(35), aLr)]), aLp = new pQ(aLo.tV, (function(pS) {
		var aLL = new pA;
		aLL.pD(L(236)), aLL.pL(new tK({
			tO: [L(237), L(238), L(239)],
			value: aC.data.sResourcesType
		}, function(dx) {
			aLt(), 2 !== dx || aC.data.sResourcesData || (aC.data.sResourcesData = new Uint16Array(aC.eV)), aC.data.sResourcesType = dx, s.t(28)
		})), pS.push(aLL)
	}(pS = []), function(pS) {
		var aLL;
		1 === aC.data.sResourcesType && ((aLL = new pA).pD("Value"), aLL.pO(new qM({
			dx: -1,
			value: aC.data.sResourcesValue
		}, 1, 0, function(e) {
			var value = bJ.p5(Math.floor(e.target.value), 0, 2047);
			e.target.value = aC.data.sResourcesValue = value
		})), pS.push(aLL))
	}(pS), function(pS) {
		var aLL;
		2 === aC.data.sResourcesType && ((aLL = new pA).pD("Data"), (aLq = new tn(0, 1, 0, 1)).tu(b8.zS.a34(aC.data.sResourcesData, 2)), aLL.pO(aLq), pS.push(aLL))
	}(pS), pS))
}

function aKw() {
	var aLo, aLp, aLq, pS;

	function aLr() {
		aLt(), 2 !== aC.data.tIncomeType && (aC.data.tIncomeData = null), s.aL1()[19] = null, s.a0B()
	}

	function aLt() {
		2 === aC.data.tIncomeType && b8.pg.a1Y(aLq.tw(), aC.data.tIncomeData, 255)
	}
	this.show = function() {
		aLo.show(), this.resize()
	}, this.qo = function() {
		aLo.qo()
	}, this.resize = function() {
		aLo.resize(), aLp.resize()
	}, this.a0v = function(et) {
		2 === et && aLo.tW[0].pp()
	}, aLo = new tP(L(275), [new v("⬅️ " + L(35), aLr)]), aLp = new pQ(aLo.tV, (function(pS) {
		var aLL = new pA;
		aLL.pD(L(236)), aLL.pL(new tK({
			tO: [L(237), L(238), L(239)],
			value: aC.data.tIncomeType
		}, function(dx) {
			aLt(), 2 !== dx || aC.data.tIncomeData || (aC.data.tIncomeData = new Uint8Array(aC.eV), aC.data.tIncomeData.fill(32)), aC.data.tIncomeType = dx, s.t(26)
		})), pS.push(aLL)
	}(pS = []), function(pS) {
		var aLL;
		1 === aC.data.tIncomeType && ((aLL = new pA).pD("Value"), aLL.pO(new qM({
			dx: -1,
			value: aC.data.tIncomeValue
		}, 1, 0, function(e) {
			var value = bJ.p5(Math.floor(e.target.value), 0, 255);
			e.target.value = aC.data.tIncomeValue = value
		})), pS.push(aLL))
	}(pS), function(pS) {
		var aLL;
		2 === aC.data.tIncomeType && ((aLL = new pA).pD("Data"), (aLq = new tn(0, 1, 0, 1)).tu(b8.zS.a34(aC.data.tIncomeData, 4)), aLL.pO(aLq), pS.push(aLL))
	}(pS), pS))
}

function aKo() {
	var aL2, aL3, pS;
	this.show = function() {
		aL2.show(), this.resize()
	}, this.qo = function() {
		aL2.qo()
	}, this.resize = function() {
		aL2.resize(), aL3.resize()
	}, this.a0v = function(et) {
		2 === et && aL2.tW[0].pp()
	}, aL2 = new tP(L(390), [new v("⬅️ " + L(35), function() {
		s.a0B()
	})]), aL3 = new pQ(aL2.tV, ((pS = []).push(function() {
		function aLR() {
			aP8.button.textContent = L(170), aP6.e.readOnly = !1, aP7.e.readOnly = !1, aLP.ps(1), aLP.button.style.color = b9.me
		}
		var aLL = new pA,
			aP5 = (aLL.pD(L(412)), new qM({
				value: bh.km.data[105].value,
				dx: -1
			})),
			aP6 = (aP5.e.readOnly = !0, aLL.pO(aP5), aLL.pD(L(316), "0.8em"), new qM(bh.km.data[148])),
			aP6 = new qM(bh.km.data[148], 0, void 0, function(e) {
				aLO(bh.km.data[149].value, e.target.value)
			}),
			aP7 = (aLL.pO(aP6), aLL.pD(L(320), "0.8em"), new qM(bh.km.data[149], 1, void 0, function(e) {
				aLO(e.target.value, bh.km.data[148].value)
			})),
			aP8 = (aLL.pO(aP7), new v(L(170), function(e) {
				return e.textContent === L(170) ? (e.textContent = L(171), aP6.e.readOnly = !0, aP7.e.readOnly = !0, aLP.ps(0), aLP.button.style.color = b9.na, bh.qz.r0(149, aP7.e.value), aLO(bh.km.data[149].value, bh.km.data[
					148].value)) : aLR(), !0
			})),
			aLP = (aLL.pO(new r2([aP8.button])), new v(L(14), function(e) {
				return aP6.e.readOnly && ay.x.aLQ(0) && (b8.pX.a2C(e), aLR(), ay.aLS.aLT({
					ro: 0,
					rk: bh.km.data[148].value,
					value: parseInt(bh.km.data[149].value, 10)
				})), !0
			}, 1)),
			pG = aLL.pF(),
			aLO = (aLL.pF(L(172)).style.fontWeight = "bold", function(f0, pE) {
				f0 = b8.ft.a2g(f0, 2, 1e6), pG.textContent = L(173, [f0, bh.km.data[105].value, pE, f0 - 1])
			});
		return aLL.pO(new r2([aLP.button])), aLO(bh.km.data[149].value, bh.km.data[148].value), aLL
	}()), pS))
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
	var a7p, aPA, aPB, aPC, aP9 = !1;

	function aPD() {
		aP9 = !0, a7p = -1, aPA = new Array(4);
		for (var aA = 3; 0 <= aA; aA--) aPA[aA] = !1;
		var wJ = Math.floor(1 + .02 * h.min);
		aPB = new Array(4), (aPC = new Array(4))[1] = aPC[3] = aPB[0] = aPB[2] = 0, aPC[0] = aPB[3] = -wJ, aPB[1] = aPC[2] = wJ
	}

	function aPE() {
		if (-1 !== a7p)
			if (0 !== aC.yn && aG.mM()) {
				for (var aPF = !1, aA = 3; 0 <= aA; aA--) aPA[aA] && (aPF = !0, i8 += aPB[aA], iA += aPC[aA], ae.a0N(aPB[aA], aPC[aA]), aR.a7X());
				aPF ? bd.dc = !0 : ap.mC()
			} else ap.mC()
	}
	this.a0t = function(dx) {
		0 !== aC.yn && aG.mM() && (aP9 || aPD(), aPA[dx] = !0, -1 === a7p) && (a7p = setInterval(aPE, 20), aPE())
	}, this.a0w = function(dx) {
		if (0 !== aC.yn && (aP9 || aPD(), aPA[dx] = !1, -1 !== a7p)) {
			for (var aPF = !1, aA = 3; 0 <= aA; aA--) aPF = aPF || aPA[aA];
			aPF || this.mC()
		}
	}, this.mC = function() {
		if (aP9 && -1 !== a7p) {
			for (var aA = 3; 0 <= aA; aA--) aPA[aA] = !1;
			clearInterval(a7p), a7p = -1
		}
	}
}

function cd() {
	this.x = new aPG, this.lK = new aPH, this.nw = new aPI, this.aCf = new aPJ, this.aAZ = new aPK, this.aLS = new aPL, this.oX = new aPM, this.aN9 = new aPN, this.a5J = new aPO, this.aPP = new aPQ, this.aPR = new aPS, this.aPT = new aPU, this.aPV =
		new aPW, this.dU = function() {
			this.x.dU()
		}
}

function aPG() {
	var aPX, aPZ;
	this.aE1 = 5, this.aPY = null;

	function aPg(aA) {
		return aPZ[aA].aP9 && aPX[aA].aPg()
	}

	function aPi(zy) {
		aPZ[zy].e7 = bd.e7, aPZ[zy].aPb = !1
	}
	this.a07 = 0, this.a06 = 0, this.dU = function() {
		this.aPY = new Array(this.aE1);
		this.aPY[0] = "territorial.io";
		var aIa = aw.aIv(0);
		aw.a3Q(0);
		for (var aA = 1; aA < this.aE1; aA++) this.aPY[aA] = aJ.yM() + ".territorial.io";
		for (aw.a3Q(aIa), aPX = new Array(this.aE1), aPZ = new Array(this.aE1), aA = this.aE1 - 1; 0 <= aA; aA--) aPZ[aA] = {
			aP9: !1,
			e7: 0,
			aPb: !1
		};
		this.aE2(0, 0)
	}, this.aPc = function(aA) {
		return aPX[aA]
	}, this.ih = function() {
		for (var aA = this.aE1 - 1; 0 <= aA; aA--) this.aLQ(aA) && bd.e7 > aPZ[aA].e7 + 15e3 && ay.nw.aPd(aA, aPZ[aA].aPb);
		!this.aLQ(0) && bd.e7 > aPZ[0].e7 + 8e3 && (aPZ[0].e7 = bd.e7, this.aE2(0, 0))
	}, this.aN5 = function(id) {
		return this.aE2(0, id) && this.aPe(0)
	}, this.aE2 = function(zy, aKa) {
		if (aPZ[zy].aP9) {
			if (aPX[zy].aPg()) return aPX[zy].aPh(aKa), aPX[zy].aLQ();
			aPX[zy].qo()
		}
		return this.aPf(zy, aKa), !1
	}, this.aPf = function(zy, aKa) {
		aPZ[zy].aP9 = !0, aPi(zy), aPX[zy] = new aPj, aPX[zy].dU(zy, aKa)
	}, this.aPh = function(zy, aKa) {
		aPg(zy) && aPX[zy].aPh(aKa)
	}, this.aPk = function(zy, aKa) {
		ay.aAZ.aPl(zy)
	}, this.aPe = function(aA) {
		return this.aLQ(aA) && aPX[aA].aPe()
	}, this.aPm = function(aA) {
		aPX[aA].aPm()
	}, this.aLQ = function(aA) {
		return aPZ[aA].aP9 && aPX[aA].aLQ()
	}, this.send = function(zy, aB) {
		aPi(zy), aPX[zy].send(aB)
	}, __fx.customLobby.setSendFunction(this.send), this.a0e = function(zy) {
		8 === aZ.a01() && (aPZ[zy].aPb = !0, ay.lK.aPn = !0)
	}, this.close = function(zy, aPo) {
		aPg(zy) && aPX[zy].close(aPo)
	}, this.aPp = function(zy, aPo) {
		q.a0C(aPo), aPg(zy) && aPX[zy].close(aPo)
	}, this.a0D = function(aPo) {
		for (var aA = this.aE1 - 1; 0 <= aA; aA--) this.close(aA, aPo)
	}, this.aPq = function(zy, aPo) {
		for (var aA = this.aE1 - 1; 0 <= aA; aA--) aA !== zy && this.close(aA, aPo)
	}, this.a3c = function() {
		this.close(this.a07, 3246)
	}, this.aPr = function(zy, e) {
		aPX[zy].qo(), q.zx(zy, e.code)
	}
}

function aPH() {
	this.aPn = !1, this.ih = function() {
		bd.jk() % 250 != 249 || aC.gh || (ay.aAZ.aPs(+(this.aPn && af.lc[aC.eI]), ak.jo + bL.x.ol), this.aPn = !1)
	}
}

function aPO() {
	function aQJ(aQK) {
		var eb = aC.data,
			aQK = (eb.selectedPlayer = bF.oY(aQK), eb.spawningSeed = bF.oY(14), bF.oY(4)),
			aQK = (aQK < 7 ? (eb.gameMode = 1, eb.numberTeams = aQK + 2) : 9 === aQK ? (eb.gameMode = eb.isZombieMode = 1, eb.numberTeams = 2) : (eb.gameMode = 0, eb.battleRoyaleMode = 7 === aQK ? 0 : 10 === aQK ? 1 : 2), eb.isContest = bF.oY(1), bF
				.oY(6));
		return eb.mapType = bQ.aBi(aQK) ? 0 : 1, bQ.aBj(eb, aQK), eb.mapSeed = bF.oY(14), aQK
	}
	this.aPu = function(zy, aB) {
		bF.dU(aB), 0 === bF.size ? ay.x.aPp(zy, 3205) : __fx.customLobby.isCustomMessage(aB) || ((0 === bF.oY(1) ? function(zy) {
			var aPy = bF.oY(6);
			0 === aPy ? function(zy) {
					if (0 === zy && 8 !== aZ.a01()) {
						s.x.aOR();
						for (var aQB = bF.oY(12), aQC = bF.oY(6), g = new Array(aQB), aA = 0; aA < aQB; aA++) g[aA] = bF.oY(aQC);
						aS.a7w(g)
					}
				}(zy) : 2 === aPy ? ay.aPP.aQ0(zy) : 3 === aPy || 4 === aPy ? av.dU() : 9 === aPy ? ay.aPR.aQ1(zy) : 10 === aPy ? ay.aPT.aQ2() : 11 === aPy ? ay.aPR.aQ3(zy) : 12 === aPy ? ay.aPT.aQ4() : 13 === aPy ? ay.aPV.aQ5() :
				14 === aPy ? ay.aPV.aQ6() : 15 === aPy ? ay.aPR.aQ7() : 16 === aPy ? ay.aPP.aQ8(zy) : 17 === aPy ? ay.aPP.aQ9(zy) : 19 === aPy && ay.aPP.aQA(zy)
		} : function(zy) {
			if (8 !== aZ.a01() && !av.aEX()) return;
			if (zy !== ay.x.a07) ay.x.aPp(zy, 3244);
			else if (0 === bF.oY(1)) bd.yw.aQL(bF.aB);
			else {
				var aA, zy = bF.oY(2);
				if (0 === zy) {
					var oA, nw = bF.oY(9);
					0 !== af.lc[nw] && 0 !== af.lc[aC.eI] && (oA = bF.oY(10), aM.o9(nw, aC.eI, oA), ae.p6(nw, 1, oA))
				} else if (1 === zy) ! function() {
					var nw = bF.oY(9);
					0 !== af.lc[nw] && 0 !== af.lc[aC.eI] && b3.aIK(0, [nw], !0) && aM.oQ(nw, 1)
				}();
				else if (2 === zy) ! function() {
					var nw = bF.oY(9),
						target = bF.oY(9);
					0 !== af.lc[nw] && 0 !== af.lc[target] && 0 !== af.lc[aC.eI] && b3.aIK(1, [nw], !0) && (ae.p6(nw, 3, 96), ae.p6(target, 4, 96), aM.a5Q(nw, target))
				}();
				else if (l.a8 && !l.a9) {
					var eY = 540;
					for (bB.a6(17287), bB.a7(1, 0), bB.a7(6, 10), eY = Math.min(b6.nt.oa.length, 540), aA = 0; aA < eY; aA++) bB.aQR(32, b6.nt.oa[aA]);
					ay.x.send(ay.x.a07, bB.aB)
				}
			}
		})(zy), bd.aPx())
	}, this.aQD = function(aB) {
		if (bF.dU(aB), bF.dx = 1, 3 === bF.oY(6)) {
			bF.dx += 20;
			var eb = aC.data = new a3K,
				aB = aQJ(9),
				aBk = eb.humanCount = bF.oY(9) + 1;
			eb.selectableSpawn = 1 === eb.gameMode || aBk < 100, eb.colorsData = new Uint32Array(aBk), eb.playerNamesData = new Array(aBk);
			for (var aA = 0; aA < aBk; aA++) bF.dx++, eb.colorsData[aA] = bF.oY(18), eb.playerNamesData[aA] = bE.ut.ux(bF.oY(5));
			aZ.aED(), bQ.a6(aB, eb.mapSeed), aC.a3O()
		} else ! function() {
			bF.dx += 20;
			var eb = aC.data = new a3K,
				aQI = aQJ(1);
			eb.humanCount = 2;
			eb.selectableSpawn = 1, eb.elo = new Uint16Array(2), eb.colorsData = new Uint32Array(2), eb.playerNamesData = new Array(2);
			for (var aA = 0; aA < 2; aA++) bF.dx++, eb.colorsData[aA] = bF.oY(18), eb.elo[aA] = bF.oY(14), eb.playerNamesData[aA] = bE.ut.ux(bF.oY(5));
			aZ.aED(), bQ.a6(aQI, eb.mapSeed), aC.a3O()
		}()
	}, this.aQG = function() {
		bF.dx = 1;
		var aPy = bF.oY(6),
			aQH = bF.oY(10);
		return ay.x.a06 === aQH ? (ay.x.a07 = aQH, !1) : (ay.x.close(ay.x.a06, 3247), ay.x.a07 = aQH, av.aBf = bF.oY(10), av.aEL = bF.oY(3 === aPy ? 9 : 1), ay.x.aE2(aQH, 5) && ay.nw.aES(), !0)
	}
}

function aPU() {
	this.aQ2 = function() {
		bh.x.uR(), bh.qz.r0(105, bD.rp.rq(bD.rp.rr(5))), bh.qz.r0(106, bD.rp.rq(bD.rp.rr(8))), bh.qz.r0(109, bF.oY(30)), bh.qz.r0(108, bh.km.data[109].value), bh.qz.r0(111, bh.km.data[109].value + 1), bh.qz.r0(107, 0), bh.qz.r0(110, "")
	}, this.aQ4 = function() {
		var aQU, aQV, aQW, aQX, aQT;
		bF.size < bB.aQS(29) ? ay.x.aPp(0, 3254) : (aQT = bF.oY(5), aQU = bF.oY(3), aQV = bF.oY(3), aQW = bF.oY(3), aQX = bF.oY(8), bF.aQY(197 + 16 * (aQT + aQU + aQV + aQW + aQX) + 32 + 32 + 30 + 128 + 32 + 30 + 32 + 2 + 10 + 5 + 30 + 30 + 32) ?
			(aQT = {
				rl: bF.oY(30),
				ue: bF.oY(16),
				uf: bF.oY(30),
				ug: bF.oY(30),
				uh: bF.oY(30),
				ui: bF.aQZ(32),
				username: bE.ut.ux(aQT),
				uj: bE.ut.ux(aQU),
				uk: bE.ut.ux(aQV),
				ul: bF.aQZ(32),
				um: bF.aQZ(32),
				un: bF.oY(30),
				uo: bF.aQZ(32),
				up: bF.aQZ(32),
				uq: bF.aQZ(32),
				ur: bF.aQZ(32),
				aLZ: bF.aQZ(32),
				aLa: bF.aQZ(30),
				aLl: bF.aQZ(32),
				aLm: bE.ut.ux(aQW),
				aLe: bF.aQZ(2),
				aLf: bF.aQZ(10),
				aLc: bE.ut.ux(aQX),
				aLg: bF.aQZ(5),
				aLN: bF.oY(30),
				aLY: bF.oY(30),
				zF: bF.aQZ(32)
			}, 8 === s.rm && (25 === s.aDG().aN4 ? (aQT.aL4 = !0, s.x.aKl = aQT, s.aDG().aNJ(25, !1)) : (aQT.aL4 = !1, aQT.rk = bh.km.data[105].value, s.x.aKi = aQT, bh.qz.ud(aQT), s.aDG().aNJ(16, !0)))) : ay.x.aPp(0, 3267))
	}
}

function aPW() {
	this.aQ5 = function() {
		var aA;
		if (bF.size < bB.aQS(39)) ay.x.aPp(0, 3259);
		else {
			var s6 = bF.oY(6),
				eY = bF.oY(10),
				data = [];
			if (9 === s6 || 10 === s6) {
				for (aA = 0; aA < eY; aA++) data.push([bF.oY(30), bE.uv.vD(5), bF.aQZ(32), 0, bF.oY(30)]);
				8 === s.rm && s.aDG().aNJ(21, !0, {
					s6: s6,
					data: data
				})
			} else {
				var hQ = bF.oY(16);
				if (bF.aQY(39 + 16 * hQ + eY * (0 === s6 ? 111 : 1 === s6 ? 101 : 2 === s6 || 3 === s6 ? 127 : 212))) {
					if (0 === s6)
						for (aA = 0; aA < eY; aA++) data.push([bF.oY(30), bE.ut.ux(bF.oY(5)), bF.oY(16), bF.oY(30), bF.oY(30)]);
					else if (1 === s6)
						for (aA = 0; aA < eY; aA++) data.push([bF.oY(16), bE.ut.ux(bF.oY(3)), bF.oY(16), bE.ut.ux(bF.oY(5)), bF.oY(31), bF.oY(30)]);
					else if (2 === s6 || 3 === s6)
						for (aA = 0; aA < eY; aA++) data.push([bF.oY(30), bE.ut.ux(bF.oY(5)), bF.aQZ(32), bF.oY(30), bF.oY(30)]);
					else
						for (aA = 0; aA < eY; aA++) data.push([bF.oY(20), bF.oY(30), bF.oY(30), bF.oY(30), bF.oY(30), bF.aQZ(32), bF.oY(30), bE.ut.ux(bF.oY(5)), bE.ut.ux(bF.oY(5))]);
					8 === s.rm && s.aDG().aNJ(21, !0, {
						s6: s6,
						data: data
					})
				} else ay.x.aPp(0, 3260)
			}
		}
	}, this.aQ6 = function() {
		if (bF.size < bB.aQS(29)) ay.x.aPp(0, 3265);
		else {
			var aQa = bF.oY(4),
				aQb = bF.oY(7),
				aQc = bF.oY(11);
			if (bF.aQY(29 + 16 * aQb + 16 * aQc + 11 * aQa)) {
				for (var data = [], aA = 0; aA < aQa; aA++) {
					for (var zW = bE.ut.ux(bF.oY(3)), aQd = bF.oY(8), aMI = [], er = 0; er < aQd; er++) aMI.push(bF.oY(16));
					data.push({
						name: "[" + zW + "]",
						aMI: aMI
					})
				}
				8 === s.rm && s.aDG().aNJ(23, !0, data)
			} else ay.x.aPp(0, 3266)
		}
	}
}

function aPQ() {
	function aQf() {
		var id = bF.oY(3);
		return 0 === id ? {
			id: id,
			rk: bF.oY(30),
			p: bl.aB3.aCl(bE.uv.vD(7))
		} : 1 === id ? {
			id: id,
			rk: bF.oY(30),
			aBq: bF.oY(3),
			value: bF.oY(30),
			target: bF.oY(30)
		} : 2 === id ? {
			id: id,
			rk: bF.oY(30),
			aBq: bF.oY(3)
		} : 3 === id ? {
			id: id,
			rk: bF.oY(30),
			aBq: bF.oY(3),
			value: bF.oY(4),
			target: bF.oY(30)
		} : 4 === id ? {
			id: id,
			rk: bF.oY(30),
			aBq: bF.oY(3),
			target: bF.oY(30)
		} : 5 === id ? {
			id: id,
			aBq: bF.oY(3)
		} : 6 === id ? {
			id: id,
			value: bF.oY(17)
		} : null
	}
	this.aQ0 = function(zy) {
		if (zy !== ay.x.a06) ay.x.close(zy, 3239);
		else if (6 !== aZ.a01()) ay.x.close(zy, 3271);
		else {
			bl.dU();
			for (var aA = 0; aA < 4; aA++) {
				var qb = bl.x.qc[aA],
					playerCount = (qb.sd = bF.oY(10), qb.eE = bF.oY(6), qb.mapSeed = bF.oY(14), qb.aBb = bF.oY(4), qb.aDH = bF.oY(6), qb.aDI = bF.oY(4), qb.aBh = bF.oY(1), qb.aCL = bF.oY(12), qb.spawningSeed = bF.oY(14), bF.oY(16));
				bl.ss.su[aA] = bF.oY(16);
				for (var er = 0; er < playerCount; er++) bl.ss.aBE(aA, bF.oY(30), bE.uv.vD(5), bF.oY(4), bF.oY(30), bF.oY(7), bF.oY(16), bF.oY(18), bF.oY(11), bF.oY(12))
			}
			s.t(29), bl.x.aCB(!0)
		}
	}, this.aQ8 = function(zy) {
		if (zy !== ay.x.a06) ay.x.close(zy, 3239);
		else if (bl.a05) {
			bl.x.aC9[0] = bF.oY(20), bl.x.aC9[1] = bF.oY(20);
			for (var aQe = bF.oY(16), er = 0; er < aQe; er++) {
				var id = bF.oY(3);
				0 === id ? bl.ss.aBE(bF.oY(2), bF.oY(30), bE.uv.vD(5), 0, 1234566, 127, 0, bF.oY(18), 0, bF.oY(12)) : 1 === id ? bl.ss.aBV(bF.oY(16), bF.oY(2)) : 2 === id ? bl.ss.aBR(bF.oY(16), bF.oY(2), bF.oY(2)) : 3 === id ? bl.ss.aBU(bF.oY(
					16), bF.oY(2)) : 4 === id ? bl.ss.aBK(bF.oY(16), bF.oY(2), bF.oY(4), bF.oY(30), bF.oY(7), bF.oY(16), bF.oY(11)) : 5 === id && bl.ss.aBL(bF.oY(16), bF.oY(2), bF.oY(1))
			}
			for (var aA = 0; aA < 4; aA++) {
				var qb = bl.x.qc[aA];
				if (qb.sd = bF.oY(10), 0 === qb.sd) {
					if (qb.a07 = bF.oY(10), qb.aBf = bF.oY(10), bl.aB4.dd(aA)) return;
					qb.eE = bF.oY(6), qb.mapSeed = bF.oY(14), qb.aBb = bF.oY(4), qb.aDH = bF.oY(6), qb.aDI = bF.oY(4), qb.aBh = bF.oY(1), qb.aCL = bF.oY(12), qb.spawningSeed = bF.oY(14), qb.aDJ.push(qb.aDJ[0]), qb.aDJ.shift()
				}
			}
			bl.x.aCD()
		} else ay.x.close(zy, 3251)
	}, this.aQ9 = function(zy) {
		if (zy !== ay.x.a06) ay.x.close(zy, 3272);
		else if (bl.a05) {
			for (var qZ = bF.oY(4), qb = bl.x.qc[qZ], qd = qb.qd, t7 = (qb.qe = bF.oY(20), bF.oY(6)), aA = 0; aA < t7; aA++) qd.push(aQf());
			bl.x.aCM(qZ)
		} else ay.x.close(zy, 3273)
	}, this.aQA = function(zy) {
		zy !== ay.x.a06 ? ay.x.close(zy, 3276) : bl.a05 ? bl.message.aCh(aQf()) : ay.x.close(zy, 3277)
	}
}

function aPS() {
	this.aQ1 = function(zy) {
		var aQN, q4;
		bF.aQY(70) ? (aQN = bF.oY(3), q4 = bg.aQg.ih(bF.oY(30), bF.oY(30)), ay.aAZ.aQh(zy, q4, aQN), 0 < aQN || (0 === zy && 0 === bh.km.data[105].value.length ? ay.aAZ.aN8(0) : ay.aLS.aQi(zy), 4 === ay.x.aPc(zy).aQj() ? 6 === aZ.a01() && ay.aCf
			.aE3(zy) : 5 !== ay.x.aPc(zy).aQj() || 8 !== aZ.a01() && 10 !== aZ.a01() || ay.nw.aES())) : ay.x.aPp(zy, 3269)
	}, this.aQ3 = function(zy) {
		var id = bF.oY(6);
		0 === id ? (ay.x.aPm(zy), aS.a7s || ay.aAZ.aN8(1), b5.aAX(), 8 === s.rm && s.aDG().aNI()) : 21 === id ? 8 === s.rm && s.aDG().aNJ(17) : 22 === id && (bh.qz.r0(106, bh.km.data[110].value), bh.qz.r0(110, ""), 8 === s.rm) && s.aDG().aNJ(16)
	}, this.aQ7 = function() {
		var eY = bF.oY(16),
			aQk = bF.oY(16);
		if (bF.aQY(55 + 10 * eY + 16 * aQk)) {
			for (var g = [], aA = 0; aA < eY; aA++) g.push(bE.ut.ux(bF.oY(10)));
			b5.aAb(g)
		} else ay.x.aPp(0, 3270)
	}
}

function aPI() {
	this.aPd = function(zy, aPb) {
		bB.a6(8), bB.a7(1, 0), bB.a7(6, 4), bB.a7(1, aPb ? 1 : 0), ay.x.send(zy, bB.aB)
	}, this.aES = function() {
		bB.a6(58), bB.a7(1, 0), bB.a7(6, 5), bB.a7(8, ay.x.a06), bB.a7(10, av.aBf), bB.a7(9, av.aEL), bB.a7(10, l.dm), bB.a7(14, l.dg), ay.x.send(ay.x.a07, bB.aB)
	}, this.nx = function(eK) {
		bB.a6(27), bB.a7(1, 1), bB.a7(4, 0), bB.a7(22, eK), ay.x.send(ay.x.a07, bB.aB)
	}, this.ny = function(i7, iy) {
		bB.a6(25), bB.a7(1, 1), bB.a7(4, 1), bB.a7(10, i7), bB.a7(10, iy), ay.x.send(ay.x.a07, bB.aB)
	}, this.o2 = function(i7, o0) {
		bB.a6(24), bB.a7(1, 1), bB.a7(4, 2), bB.a7(10, i7), bB.a7(9, o0), ay.x.send(ay.x.a07, bB.aB)
	}, this.o3 = function(i7, eK) {
		bB.a6(37), bB.a7(1, 1), bB.a7(4, 3), bB.a7(10, i7), bB.a7(22, eK), ay.x.send(ay.x.a07, bB.aB)
	}, this.o6 = function(m0, eK) {
		bB.a6(37), bB.a7(1, 1), bB.a7(4, 4), bB.a7(10, m0), bB.a7(22, eK), ay.x.send(ay.x.a07, bB.aB)
	}, this.o8 = function(iy) {
		bB.a6(15), bB.a7(1, 1), bB.a7(4, 5), bB.a7(10, iy), ay.x.send(ay.x.a07, bB.aB)
	}, this.oC = function(dx) {
		bB.a6(15), bB.a7(1, 1), bB.a7(4, 6), bB.a7(10, dx), ay.x.send(ay.x.a07, bB.aB)
	}, this.oE = function(oD) {
		bB.a6(6), bB.a7(1, 1), bB.a7(4, 7), bB.a7(1, oD), ay.x.send(ay.x.a07, bB.aB)
	}, this.oG = function() {
		bB.a6(5), bB.a7(1, 1), bB.a7(4, 8), ay.x.send(ay.x.a07, bB.aB)
	}, this.oH = function(i7, eK, iy) {
		bB.a6(47), bB.a7(1, 1), bB.a7(4, 10), bB.a7(10, i7), bB.a7(10, iy), bB.a7(22, eK), ay.x.send(ay.x.a07, bB.aB)
	}, this.oO = function(aQl, aQm) {
		bB.a6(24), bB.a7(1, 1), bB.a7(4, 15), bB.a7(9, aQm), bB.a7(10, aQl), ay.x.send(ay.x.a07, bB.aB)
	}, this.oR = function(a5J) {
		bB.a6(14), bB.a7(1, 1), bB.a7(4, 14), bB.a7(9, a5J), ay.x.send(ay.x.a07, bB.aB)
	}, this.oV = function(aQn, target) {
		var aA, eY = aQn.length;
		for (bB.a6(14 + 9 * eY), bB.a7(1, 1), bB.a7(4, 13), bB.a7(9, target), aA = 0; aA < eY; aA++) bB.a7(9, aQn[aA]);
		ay.x.send(ay.x.a07, bB.aB)
	}
}

function aPL() {
	this.aQo = function() {
		bB.a6(39), bB.a7(1, 0), bB.a7(6, 16), ay.aAZ.aQp(), ay.x.send(0, bB.aB)
	}, this.aQi = function(zy) {
		bB.a6(115), bB.a7(1, 0), bB.a7(6, 17), bE.rp.v9(bh.km.data[105].value, 5), bE.rp.v9(bh.km.data[106].value, 8), bB.a7(30, bh.km.data[109].value), ay.x.send(zy, bB.aB)
	}, this.aNL = function() {
		bB.a6(55), bB.a7(1, 0), bB.a7(6, 18), bE.rp.v8(bh.km.data[110].value), ay.x.send(0, bB.aB)
	}, this.aNH = function(a2j) {
		var eY = a2j.pE.length;
		bB.a6(21 + 16 * eY), bB.a7(1, 0), bB.a7(6, 29), bB.a7(6, a2j.ro), bB.a7(8, eY), bD.ut.v8(a2j.pE), ay.x.send(0, bB.aB)
	}, this.aLh = function(data) {
		bB.a6(43), bB.a7(1, 0), bB.a7(6, 25), bB.a7(6, data.ro), bE.rp.v9(data.rk, 5), ay.x.send(0, bB.aB)
	}, this.aLT = function(data) {
		bB.a6(75), bB.a7(1, 0), bB.a7(6, 27), bB.a7(6, data.ro), bE.rp.v9(data.rk, 5), bB.aQR(32, data.value), ay.x.send(0, bB.aB)
	}
}

function aPM() {
	this.oW = function() {
		for (var eY = aC.jn, yc = bP.result.yc, kV = yc.length, zN = (bB.a6(17 + 16 * eY + 33 * kV), bB.a7(1, 1), bB.a7(4, 12), bB.a7(10, kV), bB.a7(1, +(2 === aC.yk)), bB.a7(1, aC.z4 % 2), af.zN), aA = 0; aA < eY; aA++) bB.a7(16, zN[aA]);
		for (var gL = af.gL, aA = 0; aA < kV; aA++) {
			var g5 = yc[aA];
			bB.a7(9, g5), bB.a7(24, gL[g5])
		}
		ay.x.send(ay.x.a07, bB.aB)
	}
}

function aPN() {
	this.aNA = function(s6, s7, s8) {
		bB.a6(75), bB.a7(1, 0), bB.a7(6, 21), bB.a7(6, s6), bB.a7(1, +(s7 < 0)), bB.a7(1, +(s8 < 0)), bB.a7(30, Math.abs(s7)), bB.a7(30, Math.abs(s8)), ay.x.send(0, bB.aB)
	}, this.aNB = function(s6, aNC, aND) {
		bB.a6(18 + 16 * aNC.length + 30), bB.a7(1, 0), bB.a7(6, 22), bB.a7(6, s6), ay.aAZ.aQr(aNC), bB.a7(30, aND), ay.x.send(0, bB.aB)
	}, this.aNG = function(s6, aNC, aND) {
		bB.a6(73), bB.a7(1, 0), bB.a7(6, 28), bB.a7(6, s6), bE.rp.v9(aNC, 5), bB.a7(30, aND), ay.x.send(0, bB.aB)
	}, this.aNE = function(aMH, zV) {
		for (var eY = zV.length, hQ = 0, aA = 0; aA < eY; aA++) hQ += zV[aA].length;
		for (bB.a6(21 + 3 * eY + 16 * hQ), bB.a7(1, 0), bB.a7(6, 23), bB.a7(3, aMH), bB.a7(4, eY), bB.a7(7, hQ), aA = 0; aA < eY; aA++) bB.a7(3, zV[aA].length), bD.ut.v8(zV[aA]);
		ay.x.send(0, bB.aB)
	}, this.aNF = function(aMH, s7, s8) {
		bB.a6(52), bB.a7(1, 0), bB.a7(6, 24), bB.a7(3, aMH), bB.a7(1, +(s7 < 0)), bB.a7(1, +(s8 < 0)), bB.a7(20, Math.abs(s7)), bB.a7(20, Math.abs(s8)), ay.x.send(0, bB.aB)
	}
}

function aPJ() {
	this.aE3 = function(zy) {
		var username = bh.km.data[122].value.slice(0, 20),
			username = (bB.a6(24 + 16 * username.length + 18 + 18), bB.a7(1, 0), bB.a7(6, 1), bB.a7(10, l.dm), bB.a7(2, bh.km.data[158].value), ay.aAZ.aQr(username), b8.color.a1n(bh.x.uY())),
			username = (bB.a7(6, username[0]), bB.a7(6, username[1]), bB.a7(6, username[2]), b5.aAd());
		bB.a7(9, username[0]), bB.a7(9, username[1]), ay.x.a06 = zy, ay.x.send(zy, bB.aB)
	}, this.aCg = function(aQu, a2j) {
		bC.dU(), bC.a7(1, 0), bC.a7(6, 2), bC.a7(3, aQu), 2 === aQu ? bC.a7(2, a2j) : 3 === aQu ? bD.uv.yG(a2j, 7, bC) : 5 === aQu && (bC.a7(3, a2j.id), bC.a7(3, a2j.value), bC.a7(30, a2j.rk)), ay.x.send(ay.x.a06, bC.aQv())
	}
}

function aPK() {
	this.aPl = function(zy) {
		bB.a6(39), bB.a7(1, 0), bB.a7(6, 13), bB.a7(14, l.dg), bB.a7(4, z.id), bB.a7(7, z.dk), bB.a7(1, +l.a8), bB.a7(1, +l.a9), bB.a7(5, (new Date).getHours() % 24), ay.x.send(zy, bB.aB)
	}, this.aQh = function(zy, q4, aQN) {
		bB.a6(70), bB.a7(1, 0), bB.a7(6, 14), bB.a7(3, aQN), bB.a7(30, q4[0]), bB.a7(30, q4[1]), ay.x.send(zy, bB.aB)
	}, this.aN8 = function(id) {
		bB.a6(13), bB.a7(1, 0), bB.a7(6, 15), bB.a7(6, id), ay.x.send(0, bB.aB)
	}, this.aAa = function(id, pE) {
		var eY = Math.min(pE.length, 63);
		bB.a6(19 + 16 * eY), bB.a7(1, 0), bB.a7(6, 26), bB.a7(6, id), bB.a7(6, eY), bD.ut.v8(pE), ay.x.send(0, bB.aB)
	}, this.aQx = function(aQH, pP) {
		bB.a6(7 + 26 * pP.length), bB.a7(1, 0), bB.a7(6, 9);
		for (var aA = 0; aA < pP.length; aA++) bB.a7(16, pP[aA][0]), bB.a7(10, pP[aA][1]);
		ay.x.send(aQH, bB.aB)
	}, this.aPs = function(aQy, aQz) {
		bB.a6(20), bB.a7(1, 0), bB.a7(6, 19), bB.a7(1, aQy), bB.a7(12, aQz), ay.x.send(ay.x.a07, bB.aB)
	}, this.aQr = function(username) {
		bB.a7(5, username.length), bD.ut.v8(username)
	}
}

function aPj() {
	var zy, aKa, aR0, aR1 = ["wss://", "/s50/", "/s51/", "/s52/"],
		aR2 = 0;

	function aPk() {
		ay.x.aPk(zy, aKa)
	}

	function aR7(e) {
		ay.a5J.aPu(zy, new Uint8Array(e.data))
	}

	function aR8() {}

	function aPr(e) {
		ay.x.aPr(zy, e)
	}
	this.dU = function(dx, aR3) {
		zy = dx, aKa = aR3, dx = aR1[0] + ay.x.aPY[zy] + aR1[1 + l.dh], (aR0 = new WebSocket(__fx.customLobby.isActive() && 1 === zy ? __fx.customLobby.getSocketURL() : dx)).binaryType = "arraybuffer", aR0.onopen = aPk, aR0.onmessage = aR7, aR0
			.onclose = aPr, aR0.onerror = aR8
	}, this.aR5 = function() {
		return aR0.readyState === aR0.CONNECTING
	}, this.aLQ = function() {
		return aR0.readyState === aR0.OPEN
	}, this.aPe = function() {
		return aR2
	}, this.aPm = function() {
		aR2 = 1
	}, this.aPg = function() {
		return this.aR5() || this.aLQ()
	}, this.aPh = function(aR3) {
		aKa = aR3
	}, this.aQj = function() {
		return aKa
	}, this.send = function(aB) {
		this.aLQ() && aR0.send(aB)
	}, this.close = function(aPo) {
		this.aPg() && (aR0.close(aPo), this.qo())
	}, this.qo = function() {
		aR0.onopen = null, aR0.onmessage = null, aR0.onclose = null, aR0.onerror = null
	}
}

function dE() {
	var aR9 = !1,
		a5e = 0,
		i = 0,
		rt = 0,
		gap = 0,
		canvas = null,
		x4 = null,
		a1N = null;

	function aRB() {
		for (var aRH, aRF = 0, eY = 0, et = Math.floor(i / 2), dw = Math.floor(rt / 2), aRG = 1.5 * Math.PI, aA = aC.w8; 0 <= aA; aA--) eY += a1N[aA], 0 === a1N[aA] && aRF++;
		if (aR9 = !1, x4.clearRect(0, 0, i, i), x4.fillStyle = b9.mb, x4.fillRect(0, 0, i, i), x4.fillStyle = b9.me, x4.fillRect(0, 0, i, gap), x4.fillRect(0, 0, gap, i), x4.fillRect(i - gap, 0, gap, i), x4.fillRect(0, i - gap, i, gap), 0 < eY)
			if (aRF === aC.w8) {
				for (aA = aC.w8; 0 <= aA; aA--)
					if (0 < a1N[aA]) {
						! function(aA, et, dw) {
							x4.fillStyle = be.aRO[be.k9[aA]], x4.beginPath(), x4.arc(et, et, dw, 0, 2 * Math.PI), x4.fill()
						}(aA, et, dw);
						break
					}!
				function(et) {
					var fontSize = et / 3;
					x4.font = b8.pX.rM(1, fontSize), x4.fillStyle = b9.me, x4.fillText("100%", et, et + .1 * fontSize)
				}(et)
			} else {
				for (aA = 0; aA <= aC.w8; aA++) 0 < a1N[aA] && (! function(aA, et, dw, aRG, aRH) {
					x4.fillStyle = be.aRO[be.k9[aA]], x4.beginPath(), x4.arc(et, et, dw, aRG, aRH), x4.lineTo(et, et), x4.fill()
				}(aA, et, dw, aRG, aRH = aRG + 2 * Math.PI * a1N[aA] / eY), function(et, dw, aRG, aRH) {
					var f0 = (aRH - aRG) / (2 * Math.PI),
						fontSize = (__fx.settings.detailedTeamPercentage ? 0.75 : 1) * dw * Math.min(f0, .37);
					fontSize < 8 || (aRG = (aRG + aRH) / 2, aRH = (__fx.settings.detailedTeamPercentage ? (100 * f0).toFixed(2) : Math.floor(100 * f0 + .5)) + "%", dw *= .525 - Math.max(.6 * (f0 - .7), 0), x4.font = b8.pX.rM(1, fontSize), x4
						.fillStyle = b9.me, x4.fillText(aRH, et + Math.cos(aRG) * dw, et + Math.cos(aRG + 1.5 * Math.PI) * dw))
				}(et, dw, aRG, aRH), 0 !== aA && aRM(et, dw, aRG), aRG = aRH);
				aRM(et, dw, 1.5 * Math.PI)
			}!
		function(et, dw) {
			x4.beginPath(), x4.arc(et, et, dw, 0, 2 * Math.PI), x4.stroke()
		}(et, dw)
	}

	function aRM(et, dw, aRP) {
		x4.beginPath(), x4.moveTo(et, et), x4.lineTo(et + Math.cos(aRP) * dw, et + Math.cos(aRP + 1.5 * Math.PI) * dw), x4.stroke()
	}
	this.dU = function() {
		if (aC.hN) {
			a5e = 0, a1N = new Uint32Array(aC.w8 + 1);
			for (var aA = aC.w8; 0 <= aA; aA--) a1N[aA] = 0;
			for (aA = ak.jo - 1; 0 <= aA; aA--) a1N[be.eW[ak.jp[aA]]] += 1;
			this.resize()
		} else a1N = x4 = canvas = null
	}, this.a6S = function() {
		return i
	}, this.resize = function() {
		aC.hN && (i = Math.floor(z.a0.qv() && !aC.m7 ? .18 * h.min : .13 * h.pZ), i = (i *= 1 + (.5 + .2 * z.a0.qv()) * aC.m7) + i % 2, rt = Math.floor(7 * i / 8), (canvas = canvas || document.createElement("canvas")).width = i, canvas.height =
			i, x4 = canvas.getContext("2d", {
				alpha: !0
			}), gap = Math.max(1, .015 * i), x4.lineWidth = gap, x4.strokeStyle = b9.me, b8.pX.textAlign(x4, 1), b8.pX.textBaseline(x4, 1), aRB())
	}, this.a2f = function() {
		var di, kz = this.l0();
		return be.k9[kz] || (kz = function() {
			for (var kz = -1, aA = aC.w8; 1 <= aA; aA--)(-1 === kz || a1N[aA] > a1N[kz]) && (kz = aA);
			return kz
		}(), di = af.gL[l3[0]], -1 !== kz && a1N[kz] > di) ? a1N[kz] : di
	}, this.zl = function() {
		return a5e = 31, this.ih(), this.l0()
	}, this.l0 = function() {
		for (var kz = 0, aA = aC.w8; 0 < aA; aA--) a1N[aA] > a1N[kz] && (kz = aA);
		return kz
	}, this.l1 = function(aRD) {
		for (var g0 = 0, jp = ak.jp, eW = be.eW, eY = ak.jo, fB = bM.fB, aA = 0; aA < eY; aA++) {
			var g5 = jp[aA];
			eW[g5] === aRD && (fB[g0++] = g5)
		}
		bM.f3[0] = g0
	}, this.a2H = function() {
		for (var g0 = 0, aA = aC.w8; 0 <= aA; aA--) g0 += 0 < a1N[aA];
		return g0
	}, this.ih = function() {
		if (aC.hN && 32 <= ++a5e) {
			a5e = 0;
			for (var aA = aC.w8; 0 <= aA; aA--) a1N[aA] = 0;
			for (aA = ak.jo - 1; 0 <= aA; aA--) a1N[be.eW[ak.jp[aA]]] += af.gL[ak.jp[aA]];
			aR9 = !0
		}
	}, this.lP = function() {
		aC.hN && aR9 && aRB()
	}, this.te = function() {
		aC.hN && (aC.m7 ? tf.drawImage(canvas, ba.gap, ba.gap) : tf.drawImage(canvas, ba.gap, a6T + 2 * ba.gap))
	}
}

function cx() {
	function aRR(key) {
		var aOg;
		return "undefined" == typeof URLSearchParams || (aOg = window.location.search, "string" != typeof(aOg = new URLSearchParams(aOg).get(key))) || aOg.length < 1 ? null : aOg
	}
	this.dd = function() {
		if (0 !== z.id) return !1;
		if (! function() {
				var value = aRR("account");
				if (!value && !(value = aRR("a"))) return void bG.clear();
				return bG.clear(), s.t(8, s.rm, new rn(1e3, {
					ro: 0,
					rk: value,
					rl: 0
				})), 1
			}()) {
			var value = aRR("replay");
			if (!this.clear()) return !1;
			if (!value) return !1;
			s.t(3, 0, value)
		}
		return !0
	}, this.clear = function() {
		var zv = new URL(window.location.href);
		zv.search = "";
		try {
			return history.replaceState(null, "", zv.toString()), !0
		} catch (e) {
			console.log("error 352: " + e)
		}
		return !1
	}, this.aLn = function(key, value) {
		if (0 === z.id) try {
			var zv = new URL(window.location.href),
				g5 = zv.searchParams;
			g5.set(key, value), zv.search = g5.toString(), history.replaceState(null, "", zv.toString())
		} catch (e) {
			console.log("error 358: " + e)
		}
	}
}

function ce() {
	var aRT, g;
	this.dU = function() {
		for (var aA = (g = new Uint16Array(101)).length - 1; 0 <= aA; aA--) g[aA] = bJ.dj(32768 * aA, 100);
		this.a3Q(0)
	}, this.value = function(g5) {
		return g[g5]
	}, this.aIv = function() {
		return bJ.dj(aRT - 1, 2)
	}, this.a3Q = function(aIa) {
		aRT = 2 * aIa % 32768 + 1
	}, this.random = function() {
		return aRT = 167 * aRT % 32768
	}, this.j5 = function(lX) {
		return bJ.dj(lX * this.random(), 32768)
	}, this.jf = function(g5) {
		return 0 !== g5 && this.random() < this.value(g5)
	}, this.iR = function(er, es) {
		return er + this.j5(es - er)
	}
}

function ct() {
	this.on = new aRU, this.a3b = new aRV, this.aGG = new aRW, this.dU = function() {
		aC.gh || this.on.dU()
	}, this.ih = function() {
		aC.gh || (this.on.ih(), 3 !== s.rm) || bd.jk() % 15 != 5 && 2 !== aC.yn || s.aDG().aOh()
	}, this.aOk = function() {
		0 === aC.yn && aZ.aED(), aC.a3L.a3j(), aC.data.canvas = null, ay.x.close(ay.x.a07, 3257), ay.x.a07 = 0, aC.data.isReplay = 1, aC.a3O()
	}, this.aOj = function(pE) {
		var aA = pE.indexOf("=");
		return 0 <= aA ? pE.substring(aA + 1) : pE
	}, this.aOi = function(pE) {
		return "https://territorial.io/?replay=" + pE
	}
}

function aRU() {
	this.aRY = null, this.aRZ = null, this.aRa = null, this.aRb = null, this.aRc = null, this.aRd = null, this.a3a = "";
	var aRe = 0;
	this.dU = function() {
		this.aRY = [], this.aRZ = [], this.aRa = [], this.aRb = [], this.aRc = [0], this.aRd = [0], aRe = 0, this.a3a = ""
	}, this.oo = function(id, fF, fH, fJ) {
		aC.gh || 2 === aC.yn || (0 === this.aRc[aRe] && (this.aRd[aRe] ? (this.aRc.push(1), this.aRd.push(0), aRe++) : this.aRc[aRe] = 1), this.aRY.push(id), this.aRZ.push(fF), this.aRa.push(void 0 === fH ? 0 : fH), this.aRb.push(void 0 === fJ ?
			0 : fJ), this.aRd[aRe]++)
	}, this.ih = function() {
		0 === this.aRc[aRe] ? this.aRd[aRe]++ : (this.aRc.push(0), this.aRd.push(0), aRe++)
	}
}

function aRW() {
	var aRf = 0;

	function aRj(pE, id) {
		aRf || (id ? 1 === id ? aM.a4l = L(414) + ": " + pE : s.t(4, 3, new u(L(415), pE, 1)) : s.t(4, 3, new u("⚠️ " + L(413), pE, 1)))
	}
	this.vD = function(pE, aRg) {
		var pP;
		return aRf = aRg, bE.rp.v5(bE.rp.v3(bE.rp.v1(pE))), aM.a4l = "", !(! function() {
			if (bF.size < 10) aRj("File Too Small");
			else {
				var aRl = bF.oY(12),
					aQz = (aRl !== l.rVersion && aRj("Incompatible Version " + aRl + " " + l.rVersion, 1), bF.oY(12)),
					aRm = bF.oY(31);
				if (aRm !== bF.size) aRj("Size Error: " + aRm + " " + bF.size);
				else if (function(j, aRl) {
						for (var g5 = bF.aB, eY = bF.size, aQz = aRl, aA = 3; aA < eY; aA++) aQz = aQz + g5[aA] & 4095;
						return aQz === j || (aRj("Hash Error: " + aQz + " " + j + " " + eY), !1)
					}(aQz, aRl)) return 1
			}
			return
		}() || (aRg = bF, (pP = aC.data = new a3K).mapType = aRg.oY(2), pP.mapProceduralIndex = aRg.oY(8), pP.mapRealisticIndex = aRg.oY(8), pP.mapSeed = aRg.oY(14), pP.mapName = aRg.aRo(5), 2 === pP.mapType && aRg.aRp(), pP
			.passableWater = aRg.oY(1), pP.passableMountains = aRg.oY(1), pP.playerCount = aRg.oY(10), pP.humanCount = aRg.oY(10), pP.selectedPlayer = aRg.oY(9), pP.gameMode = aRg.oY(1), pP.playerMode = aRg.oY(2), pP.battleRoyaleMode =
			aRg.oY(2), pP.numberTeams = aRg.oY(4), pP.isZombieMode = aRg.oY(1), pP.isContest = aRg.oY(1), pP.isReplay = aRg.oY(1), pP.elo = aRg.aRq(2, 14, 2), pP.colorsType = aRg.oY(1), pP.colorsPersonalized = aRg.oY(1), pP.colorsData =
			aRg.aRq(10, 18, 512), pP.selectableColor = aRg.oY(1), pP.teamPlayerCount = aRg.aRq(4, 10, 9), pP.neutralBots = aRg.oY(1), pP.botDifficultyType = aRg.oY(2), pP.botDifficultyValue = aRg.oY(4), pP.botDifficultyTeam = aRg.aRq(4,
				4, 9), pP.botDifficultyData = aRg.aRq(10, 4, 512), pP.spawningType = aRg.oY(2), pP.spawningSeed = aRg.oY(14), pP.spawningData = aRg.aRq(11, 12, 1024), pP.selectableSpawn = aRg.oY(1), pP.playerNamesType = aRg.oY(2), pP
			.playerNamesData = aRg.aRr(10, 5, 512), pP.selectableName = aRg.oY(1), pP.aIncomeType = aRg.oY(2), pP.aIncomeValue = aRg.oY(8), pP.aIncomeData = aRg.aRq(10, 8, 512), pP.tIncomeType = aRg.oY(2), pP.tIncomeValue = aRg.oY(8), pP
			.tIncomeData = aRg.aRq(10, 8, 512), pP.iIncomeType = aRg.oY(2), pP.iIncomeValue = aRg.oY(8), pP.iIncomeData = aRg.aRq(10, 8, 512), pP.sResourcesType = aRg.oY(2), pP.sResourcesValue = aRg.oY(11), pP.sResourcesData = aRg.aRq(10,
				11, 512), ! function() {
				var hs = bF,
					vE = hs.oY(5),
					aRs = hs.oY(30),
					aRt = hs.oY(30);
				if (aRs + aRt > 8 * hs.size) return void aRj("Corrupted File");
				return function(eY) {
						var aRw = new Uint8Array(eY),
							aRx = new Uint16Array(eY),
							aRy = new Uint32Array(eY),
							aRz = new Uint32Array(eY);
						b7.on.aRY = aRw, b7.on.aRZ = aRx, b7.on.aRa = aRy, b7.on.aRb = aRz;
						for (var aA = 0; aA < eY; aA++) {
							var id = bF.oY(4);
							aRw[aA] = id, aRx[aA] = bF.oY(9), 0 === id ? aRy[aA] = bF.oY(22) : 1 === id ? (aRy[aA] = bF.oY(10), aRz[aA] = bF.oY(10)) : 2 === id ? (aRy[aA] = bF.oY(10), aRz[aA] = bF.oY(9)) : 3 === id || 4 === id ? (aRy[
								aA] = bF.oY(10), aRz[aA] = bF.oY(22)) : 5 === id || 6 === id ? aRy[aA] = bF.oY(10) : 7 === id ? aRy[aA] = bF.oY(1) : 10 === id && (aRy[aA] = bF.oY(20), aRz[aA] = bF.oY(22))
						}
					}(aRs),
					function(eY, vE) {
						var aRc = new Uint8Array(eY),
							aRd = new Array(eY);
						aRd.fill(0), b7.on.aRc = aRc, b7.on.aRd = aRd;
						for (var aA = 0; aA < eY; aA++) aRc[aA] = bF.oY(1), aRd[aA] = bF.oY(vE)
					}(aRt, vE), 1
			}()) || (bF.dx < 8 * bF.size - 13 || bF.dx > 8 * bF.size ? (aRj("Out Of Bounds Error: " + bF.dx + " " + 8 * bF.size), 1) : (b7.on.a3a = pE, 2 === aC.data.mapType && (aRj("Load base64 image...", 2), 1))))
	}, this.aGH = function(aFr, aRk) {
		var a1i = document.createElement("canvas"),
			hV = a1i.getContext("2d");
		if (a1i.width = aFr.width, a1i.height = aFr.height, hV.drawImage(aFr, 0, 0), aRf || aRk) return aC.yn ? void 0 : (aC.data.canvas = a1i, aC.data.mapType = 2, s.w(), void s.t(19));
		b7.aOk()
	}
}

function aRV() {
	this.yG = function() {
		var vE = function() {
				for (var aRd = b7.on.aRd, eY = aRd.length, max = 0, aA = 0; aA < eY; aA++) max = Math.max(max, aRd[aA]);
				return vL(Math.max(max, 1))
			}(),
			i = (pP = aC.data, (i = bC).dU(), i.a7(12, l.rVersion), i.dx += 43, i.a7(2, pP.mapType), i.a7(8, pP.mapProceduralIndex), i.a7(8, pP.mapRealisticIndex), i.a7(14, pP.mapSeed), i.aS6(pP.mapName, 5), 2 === pP.mapType && i.aS7(pP.canvas),
				i.a7(1, pP.passableWater), i.a7(1, pP.passableMountains), i.a7(10, pP.playerCount), i.a7(10, pP.humanCount), i.a7(9, pP.selectedPlayer), i.a7(1, pP.gameMode), i.a7(2, pP.playerMode), i.a7(2, pP.battleRoyaleMode), i.a7(4, pP
					.numberTeams), i.a7(1, pP.isZombieMode), i.a7(1, pP.isContest), i.a7(1, pP.isReplay), i.db(pP.elo, 2, 14), i.a7(1, pP.colorsType), i.a7(1, pP.colorsPersonalized), i.db(pP.colorsData, 10, 18), i.a7(1, pP.selectableColor), i.db(
					pP.teamPlayerCount, 4, 10), i.a7(1, pP.neutralBots), i.a7(2, pP.botDifficultyType), i.a7(4, pP.botDifficultyValue), i.db(pP.botDifficultyTeam, 4, 4), i.db(pP.botDifficultyData, 10, 4), i.a7(2, pP.spawningType), i.a7(14, pP
					.spawningSeed), i.db(pP.spawningData, 11, 12), i.a7(1, pP.selectableSpawn), i.a7(2, pP.playerNamesType), i.aS8(pP.playerNamesData, 10, 5), i.a7(1, pP.selectableName), i.a7(2, pP.aIncomeType), i.a7(8, pP.aIncomeValue), i.db(pP
					.aIncomeData, 10, 8), i.a7(2, pP.tIncomeType), i.a7(8, pP.tIncomeValue), i.db(pP.tIncomeData, 10, 8), i.a7(2, pP.iIncomeType), i.a7(8, pP.iIncomeValue), i.db(pP.iIncomeData, 10, 8), i.a7(2, pP.sResourcesType), i.a7(11, pP
					.sResourcesValue), i.db(pP.sResourcesData, 10, 11), ! function(vE) {
					var i = bC,
						aRY = b7.on.aRY,
						fF = b7.on.aRZ,
						fH = b7.on.aRa,
						fJ = b7.on.aRb,
						eY = aRY.length;
					i.a7(5, vE), i.a7(30, eY), i.a7(30, b7.on.aRd.length);
					for (var aA = 0; aA < eY; aA++) {
						var et = aRY[aA];
						i.a7(4, et), i.a7(9, fF[aA]), 0 === et ? i.a7(22, fH[aA]) : 1 === et ? (i.a7(10, fH[aA]), i.a7(10, fJ[aA])) : 2 === et ? (i.a7(10, fH[aA]), i.a7(9, fJ[aA])) : 3 === et || 4 === et ? (i.a7(10, fH[aA]), i.a7(22, fJ[aA])) :
							5 === et || 6 === et ? i.a7(10, fH[aA]) : 7 === et ? i.a7(1, fH[aA]) : 10 === et && (i.a7(20, fH[aA]), i.a7(22, fJ[aA]))
					}
				}(vE), ! function(vE) {
					for (var i = bC, aRc = b7.on.aRc, aRd = b7.on.aRd, eY = aRc.length, aA = 0; aA < eY; aA++) i.a7(1, aRc[aA]), i.a7(vE, aRd[aA])
				}(vE), bC.dx),
			pP = bJ.dj(i - 1, 6) + 1,
			vE = (bB.aQS(6 * pP) !== bC.g.length && bC.g.push(0), ! function() {
				var i = bC;
				i.dx = 24, i.a7(31, i.g.length), i.dx = 12, i.a7(12, function() {
					for (var g = bC.g, eY = g.length, aQz = l.rVersion, aA = 3; aA < eY; aA++) aQz = aQz + g[aA] & 4095;
					return aQz
				}())
			}(), bF.dU(bC.g), bD.rp.rq(bD.rp.rr(pP)));
		return bF.t8(), bC.dU(), vE
	}
}

function cj() {
	var et, bp = !1,
		aSA = !1,
		aSB = -1e4,
		aSC = -1,
		aSD = 0;

	function resize(aSH) {
		et = 0, aa.sE() && (aSF(aSH) || bp) && (bp = !1, ba.resize(), bU.aAA.resize(), aX.dU(), bW.dU(), aY.resize(), aS.resize(), aN.resize(), s.resize(), 1 <= aC.yn ? (aU.resize(!1), aT.resize(), aV.resize(), aR.resize(), aQ.resize(), aM.resize(),
			aL.resize(), bA.resize(), au.resize(), aO.resize(), aP.resize(), aK.resize(), bc.resize(), ae.resize(), aW.resize(), bf.resize(), aR.a7X()) : (aZ.aEF(), aZ.aEG()), bd.dc = !0)
	}

	function aSE(f0) {
		return f0 && 128 < f0 ? Math.floor(f0) : 128
	}

	function aSF(aSH) {
		var i, j, aSJ, rt, a6w;
		if (!(0 < h.rU)) return rt = aSE(document.documentElement.clientWidth), a6w = aSE(window.visualViewport && 2 !== z.id ? window.visualViewport.height : document.documentElement.clientHeight), i = rt, j = a6w, aSJ = 0 !== z.id || i < j ? 700 :
			1200, aSJ = Math.min(aSJ / ((i + j) / 2), 1), aSJ = 0 === bh.km.data[1].value ? 2 * aSJ / 3 : Math.min(aSJ + (bh.km.data[1].value - 1) * (1 - aSJ) / 2, 1), h.k = (window.devicePixelRatio || 1) * aSJ, __fx.hoveringTooltip
			.canvasPixelScale = h.k, aSH && !aSA ? (aSA = !0, document.body.removeChild(a0M)) : aSA && (aSA = !1, document.body.appendChild(a0M)), i = Math.floor(.5 + rt * h.k), j = Math.floor(.5 + a6w * h.k), i !== h.i || j !== h.j ? (h.i = i, h
				.j = j, h.min = a9m(i, j), h.max = a50(i, j), h.pZ = bJ.dj(i + j, 2), h.tb = i / j, a0M.width = i, a0M.height = j, a0M.style.width = rt + "px", a0M.style.height = a6w + "px", aSC = bd.e7 + 1e3, 1) : void 0
	}
	this.i = 0, this.j = 0, this.min = 0, this.max = 0, this.pZ = 0, this.tb = 1, this.k = 1, this.rU = 0, this.dV = function() {
		this.i = aSE(document.documentElement.clientWidth) + 2, this.j = aSE(document.documentElement.clientHeight) + 2
	}, this.dU = function() {
		et = 1, a0M = document.getElementById("canvasA"), (tf = a0M.getContext("2d", {
			alpha: __fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aSF(0)
	}, this.ih = function() {
		50 <= ++et && resize(0), -1 === aSC || bd.e7 < aSC || (aSC = -1, 2e3 * ++aSD >= bd.e7 + 8e3 ? console.log("error 3748") : z.a0.setState(15))
	}, this.df = function(hh) {
		bp = !0, resize(hh)
	}, this.a12 = function() {
		aSB + 1e3 > bd.e7 || (aSB = bd.e7, resize(0))
	}
}

function dB() {
	this.aQg = new aSL, this.zg = new aSM
}

function aSM() {
	this.zh = function() {
		for (var g5, eY = ak.jo, yb = ak.jp, zN = af.zN, a6l = this.aFa(), aA = 0; aA < eY; aA++) g5 = yb[aA], b8.ft.jB(g5) || (zN[g5] = a6l);
		var ot = af.ot,
			iq = af.iq,
			ir = af.ir,
			zL = af.zL,
			eY = aC.jn;
		for (aA = 0; aA < eY; aA++)(0 === zL[aA] || ir[aA] < 1 || 2 * ot[aA] > 3 * (iq[aA] + ir[aA])) && (zN[aA] = 0);
		var ze = 0;
		for (aA = 0; aA < eY; aA++) ze += 0 < zN[aA];
		return ze
	}, this.aFa = function() {
		return Math.min(65535, bd.jk())
	}
}

function aSL() {
	function aSQ(g, f0, hL) {
		for (var aA = 0; aA < 256; aA++) g[aA] = (g[aA] + (f0 >> (aA + hL) % 30 & 1)) % 256
	}
	this.ih = function(aSN, aSO) {
		var g = new Uint8Array(256);
		return function(g, aSN, aSO) {
				var aA, aSS = 3 + (4 + aSN) % 32768,
					aST = 12 + aSO % 32768,
					aSU = 17 + ((aSN & aSO) + (aSN | aSO) + aSN) % 32768;
				for (aA = 0; aA < 256; aA++) aSS = 1 + aSS * aST % aSU, g[aA] = aSS % 256
			}(g, aSN, aSO), aSQ(g, aSN, 2), aSQ(g, aSO, 7),
			function(g) {
				var aA, f0, dx = 0;
				for (aA = 0; aA < 3e4; aA++) f0 = g[dx], g[dx] = (f0 + aA + g[(dx + aA) % 256]) % 256, dx = (f0 + aA + dx + (f0 & dx)) % 256
			}(g),
			function(g) {
				var aA, a6w = 1,
					sb = 1;
				for (aA = 0; aA < 256; aA += 2) a6w = (1 + a6w) * (g[aA] + 1) % 1073741824, sb = (1 + sb) * (g[aA + 1] + 1) % 1073741824;
				return [a6w, sb]
			}(g)
	}
}

function cg() {
	var aSV, aSW, h0, aSX;
	this.dU = function() {
		var aA, ef, eh, aQs, aSY, i, j, x4, hS, vV, f0, g5, eo, er, a4A;
		if (function() {
				if (h0 = !0, aSX = "rgb(" + bQ.vT[0] + "," + bQ.vT[1] + "," + bQ.vT[2] + ")", bQ.aIi(bQ.eE)) return 1;
				return h0 = !1, 0
			}()) aSW = null;
		else {
			for (aSV = bJ.dj(96, 4), aSY = 1 === bQ.eE ? (aQs = 0, 160) : (aQs = 128, 32), aSX = "rgb(" + aQs + "," + aQs + "," + aQs + ")", aSW = new Array(4), aA = 3; 0 <= aA; aA--) {
				if (aSW[aA] = document.createElement("canvas"), i = aA % 2 == 0 ? bQ.ej : aSV, j = aA % 2 == 0 ? aSV : bQ.ek + 2 * aSV, aSW[aA].width = i, aSW[aA].height = j, vV = (hS = (x4 = aSW[aA].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, i, j)).data, aA % 2 == 0)
					for (eh = aSV - 1; 0 <= eh; eh--)
						for (f0 = aSY + Math.floor((eh + 1) * (aQs - aSY) / (aSV + 1)), ef = i - 1; 0 <= ef; ef--) vV[g5 = 4 * ((0 === aA ? aSV - eh - 1 : eh) * i + ef)] = f0, vV[g5 + 1] = f0, vV[g5 + 2] = f0, vV[g5 + 3] = 255;
				else {
					for (ef = aSV - 1; 0 <= ef; ef--)
						for (f0 = aSY + Math.floor((ef + 1) * (aQs - aSY) / (aSV + 1)), eh = j - 1 - aSV; aSV <= eh; eh--) vV[g5 = 4 * (eh * i + (3 === aA ? aSV - ef - 1 : ef))] = f0, vV[g5 + 1] = f0, vV[g5 + 2] = f0, vV[g5 + 3] = 255;
					for (er = 1; 0 <= er; er--)
						for (ef = aSV - 1; 0 <= ef; ef--)
							for (eh = aSV - 1; 0 <= eh; eh--) eo = (Math.pow(ef * ef + eh * eh, .5) + 1) / (aSV + 1), f0 = aSY + Math.floor((1 < eo ? 1 : eo) * (aQs - aSY)), vV[g5 = 4 * ((0 === er ? aSV - eh - 1 : eh + er * (j - aSV)) * i + (
								1 === aA ? ef : aSV - ef - 1))] = f0, vV[g5 + 1] = f0, vV[g5 + 2] = f0, vV[g5 + 3] = 255
				}
				x4.putImageData(hS, 0, 0)
			}
			a4A = aSY, bQ.vO.fillStyle = "rgb(" + a4A + "," + a4A + "," + a4A + ")", bQ.vO.fillRect(0, 0, bQ.ej, 1), bQ.vO.fillRect(0, bQ.ek - 1, bQ.ej, 1), bQ.vO.fillRect(0, 0, 1, bQ.ek), bQ.vO.fillRect(bQ.ej - 1, 0, 1, bQ.ek)
		}
	}, this.wy = function() {
		var er = h0 ? 0 : -aSV;
		aKJ(er, er, bQ.ej - 2 * er, bQ.ek - 2 * er, bY.aSb, bY.aSc, bY.aSd, bY.aSe) || (tf.fillStyle = aSX, tf.fillRect(0, 0, h.i, h.j))
	}, this.te = function() {
		h0 || (aKI(0, -aSV, bQ.ej, aSV, bY.aSb, bY.aSc, bY.aSd, bY.aSe) && tf.drawImage(aSW[0], bY.aSf, bY.aSg - aSV), aKI(bQ.ej, -aSV, aSV, bQ.ek + 2 * aSV, bY.aSb, bY.aSc, bY.aSd, bY.aSe) && tf.drawImage(aSW[1], bY.aSf + bQ.ej, bY.aSg - aSV),
			aKI(0, bQ.ek, bQ.ej, aSV, bY.aSb, bY.aSc, bY.aSd, bY.aSe) && tf.drawImage(aSW[2], bY.aSf, bY.aSg + bQ.ek), aKI(-aSV, -aSV, aSV, bQ.ek + 2 * aSV, bY.aSb, bY.aSc, bY.aSd, bY.aSe) && tf.drawImage(aSW[3], bY.aSf - aSV, bY.aSg - aSV))
	}
}

function d0() {
	this.h1 = new aSh, this.aFY = new aSi, this.x1 = new aSj, this.x = new aSk, this.iH = new aSl, this.a4A = new aSm, this.aSn = new aSo, this.jb = new aSp, this.kP = new aSq, this.aSr = new aSs, this.dU = function() {
		this.x1.dU(), this.x.dU(), this.iH.dU(), this.a4A.dU(), this.aSr.dU()
	}, this.te = function() {
		this.aSr.te(), this.x1.te()
	}
}

function aSp() {
	this.ih = function(player) {
		var ok;
		return !!aC.data.passableWater && 0 !== af.gE[player].length && bL.x.ol !== bL.x.k1 && !((ok = bL.x.ok[player]) >= Math.max(3 * am.performance.kq, aD.k1[aD.hC[player]]) || ok === bL.x.ox || !b8.ft.or(player, aD.jz[aD.hC[player]], 32,
			0) || !am.iU.ih(player) && !am.iW.ih(player) || ! function(a2K) {
				var aSv = bM.f9[1] + bK.hX[bM.f9[2] - 1] << 2;
				if (ab.eP(aSv)) return 1;
				return aSv = ab.eQ(aSv), a2K !== aSv && !!eR(a2K, aSv)
			}(player)) && function(player) {
			return b8.ft.ou(player), bL.x.p0(player), !0
		}(player)
	}
}

function aSh() {
	function aT3(aA, kr, ks) {
		var aT5, aT4;
		if (!(aA < 0)) return aT4 = bL.x.m3[aA], aT5 = bK.hv(aT4), aT4 = bK.hy(aT4), aA = 20 * (.9 + .1 * Math.log10(bL.x.a5I[aA])), aA = Math.max(aA, bK.iB(b8.pX.sC(.02, 1.7))), bJ.aKQ(bK.hu(kr), bK.hx(ks), aT5, aT4, aA)
	}

	function aSx(aSw) {
		var aT8 = 4 + .03 * (1 + 1.5 * z.a0.qv()) * h.pZ / i9;
		return bK.hz(aSw, bM.f9[1]) < aT8
	}
	this.h2 = function(player, aSw) {
		return !!(aC.data.passableWater && bK.iC(aSw) && bL.x.ol !== bL.x.k1 && bL.x.ok[player] !== bL.x.ox && 0 !== af.gE[player].length && bL.kP.kQ(player, aSw) && aSx(aSw))
	}, this.o5 = function(player, m0, aSw) {
		return !!(bK.iC(aSw) && this.p1(player, m0) && bL.kP.p2(aSw) && aSx(aSw))
	}, this.p1 = function(player, id) {
		for (var aSy, s7 = player << 3, s8 = s7 + bL.x.ok[player], aSz = bL.x.aSz, aT0 = bL.x.aT0, aA = s7; aA < s8; aA++)
			if (id === aT0[aSy = aSz[aA]]) return bM.f9[3] = aSy, !0;
		return !1
	}, this.o4 = function(eK) {
		var a4B = bL.a4A.a4B;
		return !!this.p1(aC.eI, a4B) && (b6.gu.o4(a4B, eK), !0)
	}, this.a4D = function(kr, ks) {
		var player = aC.eI,
			eY = bL.x.ok[player];
		if (0 === eY) return !1;
		for (var aSz = bL.x.aSz, m3 = bL.x.m3, s7 = player << 3, aT1 = 80, aMY = -1, aA = s7 + eY - 1; s7 <= aA; aA--) {
			var aT2 = aSz[aA],
				eo = bK.hp(kr, ks, m3[aT2]);
			eo < aT1 && (aT1 = eo, aMY = aT2)
		}
		return !!aT3(aMY, kr, ks) && (bL.a4A.a4B = bL.x.aT0[aMY], bj.oz.a4D(), !0)
	}, this.a4K = function(kr, ks) {
		var eY = bL.x.ol;
		if (eY < 1) return -1;
		for (var m3 = bL.x.m3, aT1 = 80, aMY = -1, aA = 0; aA < eY; aA++) {
			var eo = bK.hp(kr, ks, m3[aA]);
			eo < aT1 && (aT1 = eo, aMY = aA)
		}
		return aT3(aMY, kr, ks) ? aMY : -1
	}, this.m2 = function(player, id) {
		for (var s7 = player << 3, s8 = s7 + bL.x.ok[player], aT0 = bL.x.aT0, aSz = bL.x.aSz, aA = s7; aA < s8; aA++) {
			var aT2 = aSz[aA];
			if (aT0[aT2] === id) return aT2
		}
		return -1
	}, this.aFV = function(player) {
		for (var s7 = player << 3, s8 = s7 + bL.x.ok[player], aSz = bL.x.aSz, a5I = bL.x.a5I, hC = 0, aA = s7; aA < s8; aA++) hC += a5I[aSz[aA]];
		return hC
	}, this.m8 = function(player) {
		return 0 === bL.x.ok[player] ? -1 : bL.x.aSz[player << 3]
	}
}

function aSi() {
	this.aFZ = function(player) {
		for (var aSz = bL.x.aSz, s7 = player << 3, aA = s7 + bL.x.ok[player] - 1; s7 <= aA; aA--) this.aT9(aSz[aA])
	}, this.aT9 = function(aTA) {
		var x = bL.x,
			aTB = x.ol - 1,
			aTC = x.a5H[aTA],
			aTD = x.aTE[aTA],
			aTF = x.m3[aTA];
		x.ol = aTB, x.a5H[aTA] = x.a5H[aTB], x.aTG[aTA] = x.aTG[aTB], x.aTH[aTA] = x.aTH[aTB], x.m3[aTA] = x.m3[aTB], x.aTI[aTA] = x.aTI[aTB], x.a5I[aTA] = x.a5I[aTB], x.aTE[aTA] = x.aTE[aTB], x.aT0[aTA] = x.aT0[aTB], x.aTJ[aTA] = x.aTJ[aTB], x
			.aTK[aTA] = x.aTK[aTB], x.aSz[x.a5H[aTA]] = aTA,
			function(aRP) {
				var player = aRP >> 3,
					x = bL.x,
					eY = x.ok[player] - 1,
					aTN = (player << 3) + eY;
				x.ok[player] = eY, aTN !== aRP && (x.aSz[aRP] = x.aSz[aTN], x.a5H[x.aSz[aRP]] = aRP)
			}(aTC), bL.iH.iH[bK.iG(x.m3[aTA])][x.aTE[aTA]] = aTA, aTB = bK.iG(aTF), aTC = aTD, aTB = bL.iH.iH[aTB], x = aTB.pop(), aTC !== aTB.length && (aTB[aTC] = x, bL.x.aTE[x] = aTC)
	}
}

function aSj() {
	var aTP, xQ = 8,
		aTQ = new Array(2);

	function aTR(dx) {
		var hP = xQ + 4,
			a1i = b8.pX.vK(hP, hP),
			hV = b8.pX.getContext(a1i, !0),
			hS = b8.pX.getImageData(hV, hP, hP),
			vV = hS.data;
		return aTS(vV, hP + 1, dx), aTS(vV, hP + 2, dx), aTS(vV, 2 * hP + 1, dx), aTS(vV, 2 * hP - 3, dx), aTS(vV, 2 * hP - 2, dx), aTS(vV, 3 * hP - 2, dx), aTS(vV, hP * (hP - 3) + 1, dx), aTS(vV, hP * (hP - 2) + 1, dx), aTS(vV, hP * (hP - 2) + 2,
			dx), aTS(vV, hP * (hP - 2) - 2, dx), aTS(vV, hP * (hP - 1) - 3, dx), aTS(vV, hP * (hP - 1) - 2, dx), hV.putImageData(hS, 0, 0), a1i
	}

	function aTS(vV, eK, dx) {
		eK *= 4;
		vV[eK] = 255, vV[1 + eK] = 255, vV[2 + eK] = dx, vV[3 + eK] = 255
	}

	function vK(player) {
		var a1i = b8.pX.vK(xQ, xQ);
		return function(hV, player) {
			var ef, eh, ht, eK, aTU, aTV, hP = xQ,
				hS = b8.pX.getImageData(hV, hP, hP),
				vV = hS.data,
				kV = (hP >> 1) - .5,
				aSX = ab.a5s(player),
				aTX = b8.pg.a1G(aSX, .5);
			b8.pg.a1I(aSX, aTX, 300) || b8.pg.a1K(aSX, 100);
			for (eh = 0; eh < hP; eh++)
				for (ef = 0; ef < hP; ef++) aTV = (hP - 1.5) * (hP - 1.5) / 4, aTU = (ht = (ht = ef - kV) * ht + (ht = eh - kV) * ht) <= (hP - 4.5) * (hP - 4.5) / 4 ? aTX : aSX, vV[eK = 4 * (eh * hP + ef)] = aTU[0], vV[1 + eK] = aTU[1], vV[2 +
					eK] = aTU[2], vV[3 + eK] = aTV < ht ? 0 : 255;
			hV.putImageData(hS, 0, 0)
		}(b8.pX.getContext(a1i, !0), player), a1i
	}
	this.dU = function() {
		aTP = new Array(aC.eV), aTQ[0] = aTR(255), aTQ[1] = aTR(0)
	}, this.te = function() {
		var aA, player, aTY, aKR, hC, hs, aTa, aTc, aTd, m3 = bL.x.m3,
			a5H = bL.x.a5H,
			a5I = bL.x.a5I,
			aTK = bL.x.aTK,
			aTe = aTP,
			aTf = aC.eI,
			aTg = -1,
			eY = bL.x.ol,
			aTh = h.i,
			aTi = h.j,
			aTj = bQ.ej << 4,
			eN = i9,
			eC = eN / xQ,
			m4 = i8 / eN,
			m5 = iA / eN,
			ht = (aTh + i8) / eN - m4,
			hw = (aTi + iA) / eN - m5,
			hV = tf;
		for (bL.h1.p1(aC.eI, bL.a4A.a4B) && (aTg = bM.f9[3]), hV.imageSmoothingEnabled = eN < 9, b8.pX.textAlign(hV, 1), b8.pX.textBaseline(hV, 1), aA = 0; aA < eY; aA++) player = a5H[aA] >> 3, hC = a5I[aA], aTY = .9 + .1 * Math.log10(hC), aKR =
			(hs = m3[aA]) % aTj / 16 - aTY, hs = aTi * (Math.floor(hs / aTj) / 16 - aTY - m5) / hw, aTa = -2 * (aTd = eN * aTY) * (1 + (aTc = +(player === aTf)) / 8), aTc = aTc * aTd / 4, (aTd = aTh * (aKR - m4) / ht) < aTa || hs < aTa || aTh +
			aTc < aTd || aTi + aTc < hs || (aKR = 2 * aTY * eC, aTa = aTY * eN, void 0 === (aTc = aTe[player]) && (aTe[player] = aTc = vK(player)), player === aTf && (hV.setTransform(aKR, 0, 0, aKR, aTd - 2 * aKR, hs - 2 * aKR), hV.drawImage(aTQ[
				+(aA === aTg)], 0, 0)), hV.setTransform(aKR, 0, 0, aKR, aTd, hs), hV.drawImage(aTc, 0, 0), (aTY = Math.floor(function(hC) {
				if (hC < 1e3) return .42;
				if (hC < 1e4) return .34;
				if (hC < 1e6) return .26;
				if (hC < 1e8) return .19;
				return .15
			}(hC) * aTa)) < 6) || (hV.setTransform(1, 0, 0, 1, 0, 0), hV.fillStyle = aTK[aA] ? b9.nC : b9.me, hV.font = b8.pX.rM(1, aTY), hV.fillText(b8.zS.y5(hC), aTd + aTa, hs + aTa + .1 * aTY));
		hV.imageSmoothingEnabled = !1, hV.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aSs() {
	var a1i;
	this.dU = function() {
		a1i = a1i || bN.x.aTm(20, be.aTn[7])
	}, this.te = function() {
		var mO = i9;
		if (!(5 <= mO)) {
			var aTh = h.i,
				aTi = h.j,
				m4 = i8 / mO,
				m5 = iA / mO,
				mH = (aTh + i8) / mO,
				mI = (aTi + iA) / mO,
				g6 = -20 * mO,
				aTo = .5 * g6,
				aTj = bQ.ej << 4,
				eY = bL.x.ol,
				m3 = bL.x.m3,
				aTp = a1i,
				hV = tf;
			3 < mO && (hV.globalAlpha = .5 * (5 - mO));
			for (var aA = 0; aA < eY; aA++) {
				var hs = m3[aA],
					ef = aTh * (hs % aTj / 16 - m4) / (mH - m4) + aTo,
					hs = aTi * (Math.floor(hs / aTj) / 16 - m5) / (mI - m5) + aTo;
				aTh < ef || aTi < hs || ef < g6 || hs < g6 || (hV.setTransform(mO, 0, 0, mO, ef, hs), hV.drawImage(aTp, 0, 0))
			}
			hV.globalAlpha = 1, hV.setTransform(mO, 0, 0, mO, 0, 0)
		}
	}
}

function aSo() {
	this.ih = function() {
		for (var aT4, aSn, aTJ = bL.x.aTJ, m3 = bL.x.m3, aTH = bL.x.aTH, aA = bL.x.ol - 1; 0 <= aA; aA--) aT4 = m3[aA], 0 !== (aSn = aTJ[aA]) && aT4 === aTH[aA] && (! function(aA, aTt, hK) {
			var iy, player = bL.x.a5H[aA] >> 3,
				hK = aTt + bK.hX[hK] << 2,
				aA = bL.x.a5I[aA];
			if (bb.aTu(player), ab.eP(hK)) iy = aC.eV;
			else {
				if ((iy = ab.eQ(hK)) === player) return hK = b8.ft.fw(player, aA), bb.fx(player, aA - hK, 12);
				if (!eR(player, iy)) return b6.jq.oJ(player, iy, aA)
			}
			ac.j9(player, iy) || ac.jR(player) ? (af.fz[player].push(aTt << 2), ac.iv(player, aA, iy), aE.iw(player, !0)) : bb.fx(player, aA, 12)
		}(aA, bK.iF(aT4), aSn - 1), bL.aFY.aT9(aA))
	}, this.aTv = function(player, eK, hK, m0) {
		if (0 !== hK) {
			var aTf = aC.eI;
			if (b8.ft.gk(aTf) && eR(player, aTf) && player !== aTf && 0 !== af.gE[aTf].length) {
				var aSv = eK + bK.hX[--hK] << 2;
				if (ab.eP(aSv) || eR(player, ab.eQ(aSv))) {
					for (var em = !1, aA = 0; aA < 4; aA++)
						if (aSv = eK + bK.hX[aA] << 2, ab.eT(aSv) && !ab.eP(aSv) && ab.eQ(aSv) === aTf) {
							em = !0;
							break
						} em && (aM.a4C(719, 0), aM.zB(180, L(416, [af.zO[player]]), 719, player, b9.nB, b9.mb, -1, !0, void 0, {
						es: 1,
						m0: m0
					}))
				}
			}
		}
	}
}

function aSk() {
	this.aTw = null, this.k1 = 512, this.ox = 8, this.ol = 0, this.aTx = 0, this.a5H = new Uint16Array(this.k1), this.aTG = new Uint32Array(this.k1), this.aTH = new Uint32Array(this.k1), this.m3 = new Uint32Array(this.k1), this.aTI = new Uint16Array(
			this.k1), this.a5I = new Uint32Array(this.k1), this.aTE = new Uint16Array(this.k1), this.aT0 = new Uint16Array(this.k1), this.aTJ = new Uint8Array(this.k1), this.aTK = new Uint8Array(this.k1), this.ok = new Uint8Array(aC.eV), this.aSz =
		new Uint16Array(this.ox * aC.eV), this.dU = function() {
			this.aTx = 0, this.ol = 0, this.aTw = new Uint8Array(bQ.ej + bQ.ek), this.ok.fill(0)
		}, this.p0 = function(player) {
			var eY = this.ol,
				aTy = bK.iE(bM.f9[0]),
				aTz = this.ok[player],
				aU0 = (player << 3) + aTz,
				hC = (this.a5H[eY] = aU0, this.aTG[eY] = aTy, this.m3[eY] = aTy, this.aTH[eY] = bK.iE(bM.f9[1]), this.aTI[eY] = 0, bM.f5[0]);
			hC < 60 ? (b8.ft.fu(player, 60 - hC), this.a5I[eY] = 60) : this.a5I[eY] = hC, this.aTE[eY] = bL.iH.p0(eY, bK.iG(aTy)), this.aT0[eY] = this.aTx, this.aTJ[eY] = bM.f9[2], this.aTK[eY] = 0, this.aTx = this.aTx + 1 & 1023, this.aSz[aU0] = eY,
				this.ok[player] = aTz + 1, this.ol++, bL.aSn.aTv(player, bM.f9[1], bM.f9[2], this.aT0[eY])
		}, this.o4 = function() {
			var aSy = bM.f9[3];
			this.aTG[aSy] = this.m3[aSy], this.aTH[aSy] = bK.iE(bM.f9[1]), this.aTI[aSy] = 0, this.aTJ[aSy] = bM.f9[2], bL.aSn.aTv(this.a5H[aSy] >> 3, bM.f9[1], bM.f9[2], this.aT0[aSy])
		}, this.ih = function() {
			bL.aSn.ih();
			var aA, g5 = aC.eI,
				di = bL.h1.aFV(g5),
				r9 = (! function(r9) {
					var aA, aU5, aU6, aU7, aU8, aTy, aUC, aUD, eb, g6, aTG = r9.aTG,
						aTH = r9.aTH,
						m3 = r9.m3,
						a5I = r9.a5I,
						aTK = r9.aTK,
						aTI = r9.aTI,
						aTE = r9.aTE,
						r9 = r9.ol,
						aTj = bQ.ej << 4;
					for (aA = r9 - 1; 0 <= aA; aA--) aU6 = m3[aA], aU5 = aTH[aA], aU6 !== aU5 && (aTy = aTG[aA], aUC = aU5 % aTj - (aU8 = aTy % aTj), aUD = ~~((aU5 + .5) / aTj) - (aTy = ~~((aTy + .5) / aTj)), eb = ~~Math.sqrt(aUC * aUC + aUD *
						aUD + .5), g6 = 15e4 + 25e3 * bJ.log10(a5I[aA]), aTK[aA] && (g6 = bJ.dj(g6, 5)), 65535 <= (g6 = aTI[aA] + Math.max(~~((g6 + .5) / eb), 1)) ? m3[aA] = aU7 = aU5 : (aTI[aA] = g6, m3[aA] = aU7 = aU8 + bJ.dj(g6 * aUC,
						65536) + aTj * (aTy + bJ.dj(g6 * aUD, 65536))), aTE[aA] = bL.iH.aUF(aTE[aA], aU6, aU7))
				}(this), ! function(r9) {
					if (bd.jk() % 2 == 1) {
						var aA, hL, kV, es, et, aUG, xl, aUH, gx, m4, m5, aTy, aUI, hb, aUK, vd, eY = r9.ol,
							m3 = r9.m3,
							a5H = r9.a5H,
							a5I = r9.a5I,
							aTK = r9.aTK,
							iH = bL.iH.iH,
							aUM = iH.length,
							aUN = bL.iH.aUN,
							aTj = bQ.ej << 4,
							aUO = aC.hN,
							aRD = be.eW,
							g6 = (eY - 1) * (bJ.dj(bd.jk(), 2) % 2);
						for (aA = 0; aA < eY; aA++)
							for (hL = Math.abs(aA - g6), aTy = m3[hL], kV = bK.iG(aTy), gx = a5H[hL] >> 3, m4 = aTy % aTj, m5 = ~~((aTy + .5) / aTj), aUK = a5I[hL], es = 0; es < 9; es++)
								if (!((aUG = kV + aUN[es]) < 0 || aUM <= aUG))
									for (aUH = iH[aUG], xl = aUH.length, et = 0; et < xl; et++) aUI = aUH[et], vd = a5H[aUI] >> 3, gx == vd || aUO && aRD[gx] === aRD[vd] && aRD[gx] || (vd = m3[aUI], (hb = m4 - vd % aTj) * hb + (hb = m5 - ~~((vd +
										.5) / aTj)) * hb < 14400 && (vd = a5I[aUI], hb = vd <= aUK ? Math.max(1, bJ.dj(vd + bJ.dj(aUK - vd, 10), 10)) : Math.max(1, bJ.dj(aUK, 10)), a5I[aUI] = Math.max(vd - hb, 0), aTK[aUI] = 4))
					}
				}(this), ! function(r9) {
					if (bd.jk() % 5 == 3) {
						var aA, hC, a5I = r9.a5I,
							eY = r9.ol;
						for (aA = 0; aA < eY; aA++) hC = a5I[aA], a5I[aA] = Math.max(hC - Math.max(1, hC >> 7), 0)
					}
				}(this), this),
				a5I = r9.a5I,
				aTK = r9.aTK;
			for (aA = r9.ol - 1; 0 <= aA; aA--) aTK[aA] = aTK[aA] >> 1, 0 === a5I[aA] && bL.aFY.aT9(aA);
			bb.fx(g5, di - bL.h1.aFV(g5), 15)
		}
}

function aSl() {
	this.aUP = 32, this.ef = 0, this.eh = 0, this.iI = 0, this.aUQ = 0, this.aUR = 4, this.iH = null, this.aUN = new Int16Array(9), this.dU = function() {
		this.iI = 1 + bJ.dj(bQ.ej - 1, this.aUP), this.aUQ = 1 + bJ.dj(bQ.ek - 1, this.aUP), this.iH = new Array(this.iI * this.aUQ), b8.pg.a1F(this.iH);
		var ef, eh, aUN = this.aUN,
			i = this.iI;
		for (ef = -1; ef <= 1; ef++)
			for (eh = -1; eh <= 1; eh++) aUN[3 * (1 + eh) + 1 + ef] = eh * i + ef
	}, this.p0 = function(aUT, aA) {
		return this.iH[aA].push(aUT), this.iH[aA].length - 1
	}, this.aUF = function(aUU, aTy, aU5) {
		var aUV, aUW, aTy = bK.iG(aTy),
			aU5 = bK.iG(aU5);
		return aTy === aU5 ? aUU : (aUV = this.iH[aTy].pop(), this.iH[aTy].length === aUU ? this.p0(aUV, aU5) : (aUW = this.iH[aTy][aUU], this.iH[aTy][aUU] = aUV, bL.x.aTE[aUV] = aUU, this.p0(aUW, aU5)))
	}
}

function aSq() {
	function a0A(aU5, aUX) {
		if (! function(aU5, aSw) {
				var ha = bK.iF(aU5),
					aUb = Math.abs(bK.eg(aSw) - bK.eg(ha)),
					ha = Math.abs(bK.ei(aSw) - bK.ei(ha));
				return 0 !== Math.max(aUb, ha) && (function(aTy, aU5, aUb, aUc) {
					var aUe = bK.hv(aTy),
						aTy = bK.hy(aTy),
						aUg = bK.hv(aU5),
						aU5 = bK.hy(aU5),
						aUg = aUg - aUe,
						aU5 = aU5 - aTy,
						aUk = Math.abs(aUg),
						aUl = Math.abs(aU5),
						aUg = 0 < aUg ? 1 : 3,
						aU5 = 0 < aU5 ? 2 : 0;
					aUl < aUk ? aUo(aUe, aTy, aUe + aUk, aTy + aUl, aUg, aU5, aUb) : aUo(aTy, aUe, aTy + aUl, aUe + aUk, aU5, aUg, aUc)
				}(aU5, bK.iE(aSw), aUb, ha), !0)
			}(aU5, aUX)) return !1;
		if (0 === bM.f2[0]) return !!ab.h0(aUX << 2);
		if (! function(aSw) {
				if (ab.h0(aSw << 2)) return 1;
				return function(aSw) {
					var aA, hK, aTw = bL.x.aTw,
						aUs = bK,
						eY = bM.f2[0],
						aUt = 4 * aSw;
					for (aA = eY - 1; 0 <= aA; aA--) {
						hK = aTw[aA];
						var aUu = aUt;
						if (aUt = aUs.iK(aUt, hK + 2 & 3), ab.h0(aUt)) return bM.f2[0] = aA, bM.f9[1] = aUt >> 2, bM.f9[2] = 1 + hK, bM.f9[4] = aUu, 1
					}
					return
				}(aSw)
			}(aUX)) return !1;
		if (bM.f9[2] && ab.ed(bM.f9[4])) return !1;
		var aA, aUX = bK.iF(aU5),
			vV = aAI,
			aTw = bL.x.aTw,
			eY = bM.f2[0] - 1,
			aUt = 4 * aUX,
			hY = bK.hY;
		for (aA = 0; aA < eY; aA++)
			if (aUt += hY[aTw[aA]], 0 !== vV[aUt + 3] || 2 !== vV[aUt + 2]) return !!void 0;
		return !!1
	}

	function aUo(aUe, aUf, aUg, aUh, aUm, aUn, aUb) {
		for (var eh, aTw = bL.x.aTw, g6 = 0, aUp = 0, j = aUh - aUf, i = aUg - aUe, aUq = aUe % 16, aA = 1; aA <= aUb; aA++) aTw[g6++] = aUm, aTw[g6] = aUn, g6 += (eh = (j * (aUq + (aA << 4)) + .5) / i >> 4) - aUp, aUp = eh;
		bM.fE(bM.f2, g6)
	}
	this.kQ = function(player, aUX) {
		var hK, ha, gw = bK.hi(player, aUX);
		return gw !== aUX && (hK = bK.hZ(gw, aUX), ha = bK.iJ(gw, hK), !(!ab.h0(ha << 2) && (hK = bK.hg(gw, aUX, hK), ha = bK.iJ(gw, hK), !ab.h0(ha << 2)) || (bM.f9[0] = ha, bM.f9[1] = aUX, bM.f9[2] = 0, ha !== aUX && (!a0A(bK.iE(ha), aUX) ||
			0 !== bM.f9[2] && bK.ho(player, bM.f9[1] + bK.hX[bM.f9[2] - 1] << 2)))))
	}, this.p2 = function(aUX) {
		var aTy = bL.x.m3[bM.f9[3]];
		return bM.f9[1] = aUX, bM.f9[2] = 0, a0A(aTy, aUX)
	}
}

function aSm() {
	var xQ = 32,
		xP = new Array(2);

	function vK(et) {
		var ef, eh, eK, hw, ht, hP = xQ,
			a1i = b8.pX.vK(hP, hP),
			hV = b8.pX.getContext(a1i, !0),
			hS = b8.pX.getImageData(hV, hP, hP),
			vV = hS.data,
			kV = (hP >> 1) - .5,
			kW = Math.sqrt(kV * kV);
		for (vV.fill(255), eh = 0; eh < hP; eh++)
			for (ef = 0; ef < hP; ef++) ht = ef - kV, hw = eh - kV, eK = 4 * (eh * hP + ef), ht = 714 * (kW - Math.sqrt(ht * ht + hw * hw)) / kW, vV[2 + eK] = et, vV[3 + eK] = 255 < ht ? 0 : ht;
		return hV.putImageData(hS, 0, 0), a1i
	}
	this.a4B = -1, this.dU = function() {
		this.a4B = -1, xP[0] || (xP[0] = vK(255), xP[1] = vK(0))
	}, this.aUw = function(hV, eC, ef, eh, dw, aA) {
		b8.ft.gk(aC.eI) && (hV.setTransform(eC *= 4 / 3 * .625, 0, 0, eC, ef - (dw *= 4 / 3), eh - dw), hV.drawImage(xP[+(bL.x.aT0[aA] === this.a4B)], 0, 0))
	}
}

function dX() {
	this.aOq = [L(417), L(418), L(419), L(420), L(421), L(422), L(423), L(424), L(425), L(426), L(427), L(428), L(429), L(430), L(431)];
	var aUx = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", ""];
	this.a9y = new Array(aUx.length), this.dU = function() {
		var g = bh.km.data[155].value.split(";"),
			kV = g.length;
		if (function() {
				for (var eY = aUx.length, aA = 0; aA < eY; aA++) bV.a9y[aA] = aUx[aA]
			}(), !(kV > aUx.length))
			for (var aA = 0; aA < kV; aA++) g[aA].length && (this.a9y[aA] = g[aA])
	}, this.aOs = function(dx, code) {
		for (var a9y = this.a9y, aUz = aUx, pE = (a9y[dx] = code, ""), eY = a9y.length, aV0 = [], aA = 0; aA < eY; aA++) aV0.push(a9y[aA] === aUz[aA] ? "" : a9y[aA]);
		eY--;
		for (aA = 0; aA < eY; aA++) pE += aV0[aA] + ";";
		bh.qz.r0(155, pE += aV0[eY])
	}, this.aOp = function() {
		bh.qz.r0(155, ""), this.dU()
	}, this.et = function(code, dx) {
		return code === this.a9y[dx] || code === this.a9y[dx + 1]
	}
}

function dS() {
	var aV2 = new Array(1),
		aV3 = new Array(1),
		aV4 = 20,
		e6 = 0,
		aV5 = !1;

	function aV7() {
		aV4++, bn.play()
	}
	this.dU = function() {
		if (!window.document.documentMode) {
			for (var aA = 0; 0 <= aA; aA--) ! function(aA, src) {
				aV3[aA] = 0, aV2[aA] = document.createElement("audio"), aV2[aA].src = src, aV2[aA].setAttribute("preload", "auto"), aV2[aA].setAttribute("controls", "none"), aV2[aA].style.display = "none", aV2[aA].onpause = function() {
					aV3[aA] = 1
				}, aV2[aA].oncanplaythrough = function() {
					aV3[aA] = 0 === aV3[aA] ? 1 : aV3[aA]
				}, document.body.appendChild(aV2[aA])
			}(aA,
				"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
				);
			aV5 = !0
		}
	}, this.t8 = function() {
		if (aV5) {
			aV5 = !1;
			for (var aA = 0; 0 <= aA; aA--) aV2[aA].onpause = null, aV2[aA].oncanplaythrough = null, document.body.removeChild(aV2[aA]), aV2[aA] = null
		}
	}, this.play = function() {
		if (aV5) {
			var di = performance.now();
			if (e6 + 66 < di)
				for (var aA = 0; 0 <= aA; aA--)
					if (1 === aV3[aA]) return e6 = di, aV3[aA] = 2, void aV2[aA].play();
			0 < aV4 && (aV4--, setTimeout(aV7, 66))
		}
	}
}

function cU() {
	this.a6j = function() {
		var aVA;
		return !(ak.jo < 3 || af.gL[l3[0]] >= aC.jX >> 1) && (aC.hN ? (aVA = ad.aGb(), !(2 * ad.aGc(bf.l0()) >= aVA)) : function() {
			var aVA = ad.aGb();
			if (2 * af.gZ[l3[0]] >= aVA) return !1;
			return !0
		}())
	}
}

function c5() {
	this.dU = function() {
		if (0 === aC.data.sResourcesType) {
			for (var aTz = aC.jn, gZ = af.gZ, aA = 0; aA < aTz; aA++) gZ[aA] = 512;
			var aU0 = aC.w1,
				k0 = aD.k0,
				hC = aD.hC;
			for (aA = aTz; aA < aU0; aA++) gZ[aA] = k0[hC[aA]]
		} else(1 === aC.data.sResourcesType ? function() {
			for (var eY = aC.w1, gZ = af.gZ, sResourcesValue = aC.data.sResourcesValue, aA = 0; aA < eY; aA++) gZ[aA] = sResourcesValue
		} : function() {
			for (var eY = aC.w1, gZ = af.gZ, sResourcesData = aC.data.sResourcesData, aA = 0; aA < eY; aA++) gZ[aA] = sResourcesData[aA]
		})();
		bb.lY[8] = af.gZ[aC.eI]
	}
}

function dJ() {
	var aVF = 501,
		aVH = (this.aVG = new Uint32Array(aVF), this.a2O = new Uint32Array(aVF), this.a9d = new Uint16Array(aVF), this.aOy = 0, 1),
		aVI = 0;

	function aVL(self) {
		self.max.fill(0)
	}

	function aVN(self, aA) {
		self.max[0] = Math.max(self.aVG[aA], self.max[0]), self.max[1] = Math.max(self.a2O[aA], self.max[1]), self.max[2] = Math.max(self.a9d[aA], self.max[2])
	}
	this.max = [0, 0, 0], this.aVJ = 0, this.lY = new Array(21), this.aVK = null, this.dV = function() {
		this.aVK = [L(432), L(433), L(434), L(435), L(436), L(437), L(438), L(439), L(275), L(276), L(440), L(441), L(442), L(443), "", L(444), L(445), L(446), L(235), L(447), L(448)]
	}, this.dU = function() {
		this.aOy = 0, aVH = 1, this.aVJ = 0, aVI = 0, aVL(this), this.lY.fill(0)
	}, this.ov = function(player, i7) {
		b8.ft.a2J(player) && (this.lY[0] += i7 + 1, this.lY[1]++, this.lY[12] += bM.f5[1])
	}, this.oL = function(player, o0) {
		__fx.donationsTracker.logDonation(player, o0, bM.f5[0]);
		player === aC.eI && (aM.oL(bM.f5[0], bM.f5[1], o0), this.lY[12] += bM.f5[1], this.lY[16] += bM.f5[0]), o0 === aC.eI && (aM.a5V(bM.f5[0], player), this.lY[10] += bM.f5[0])
	}, this.oy = function(player) {
		b8.ft.a2J(player) && (this.lY[2]++, this.lY[12] += bM.f5[1])
	}, this.p9 = function(player) {
		b8.ft.a2J(player) && (this.lY[19]++, this.lY[12] += bM.f5[1])
	}, this.aTu = function(player) {
		b8.ft.a2J(player) && this.lY[20]++
	}, this.fx = function(player, a32, dx) {
		b8.ft.a2J(player) && (this.lY[dx] += a32)
	}, this.ih = function() {
		var self;
		this.aVJ || 0 < aVI-- || ((self = this).aVG[self.aOy] = af.gL[aC.eI], self.a2O[self.aOy] = af.gZ[aC.eI], self.a9d[self.aOy] = ad.a9e(aC.eI), aVN(self, self.aOy), self.aOy++, self.aOy === aVF && function(self) {
			aVL(self), aVN(self, 0), self.aOy = 1 + bJ.dj(aVF, 2);
			for (var aA = 1; aA < self.aOy; aA++) self.aVG[aA] = self.aVG[2 * aA], self.a2O[aA] = self.a2O[2 * aA], self.a9d[aA] = self.a9d[2 * aA], aVN(self, aA);
			aVH *= 2
		}(self), aVI = aVH - 1, bc.lP(), 0 === af.lc[aC.eI] && (self.aVJ = bd.jk()))
	}
}

function dK() {
	this.i = 0, this.j = 0, this.rt = 0, this.ru = 0, this.aVP = 0, this.aVQ = 0, this.a6w = 0, this.sb = 0;
	var aVS = this.aVR = 0;
	this.aVT = 0, this.aVU = 0, this.aVV = 0, this.a6I = 0, this.dx = 0, this.a9G = null, this.hF = !1, this.aVW = -1, this.aVX = !1, this.aVY = [0, 0], this.dV = function() {
		this.a9G = [L(449), L(119, 0, "Balance"), L(118, 0, "Interest"), L(450)]
	}, this.dU = function() {
		this.hF = !1, this.aVW = -1, this.aVX = !1, this.resize()
	}, this.resize = function() {
		this.i = h.i < 1.369 * h.j ? h.i : 1.369 * h.j;
		var eb = z.a0.qv() && h.i < h.j ? 1 : z.a0.qv() ? .8 : h.i < h.j ? .65 : .59;
		this.i = Math.floor(eb * this.i), this.i -= z.a0.qv() && h.i < h.j ? 2 * ba.gap + 2 : 0, this.j = Math.floor(this.i / 1.369), this.a6I = Math.floor(this.j / 150), this.a6I = Math.max(this.a6I, 1.5), this.rt = Math.floor(1 + .02 * this.i),
			this.ru = Math.floor(1 + .04 * this.i), this.a6w = this.ru, aVS = Math.floor(.75 * this.a6w), this.sb = Math.floor(1 + .075 * this.i), this.aVT = Math.floor(1 + .1125 * this.i), this.aVU = Math.floor(this.i * (z.a0.qv() ? .03 :
			.029)), this.aVU = Math.max(this.aVU, 4), this.aVV = Math.floor(.035 * this.i), this.aVV = Math.max(this.aVV, 4), this.aVR = this.j - 2 * this.a6w - this.sb - this.aVT, this.hF && this.aVZ()
	}, this.gl = function(kr, ks) {
		var w4, w3;
		return !!this.hF && (w3 = kr, w4 = ks, kr -= bJ.dj(h.i - this.i, 2), ks -= bJ.dj(h.j - this.j, 2), kr < 0 || ks < 0 || kr >= this.i || ks >= this.j || kr >= this.i - this.aVT && ks < this.aVT ? -1 !== aL.gl(w3, w4) || bA.gl(w3, w4) ||
			this.qo() : ks < this.aVT || (ks < this.j - this.sb ? (this.aVX = !0, this.aVW = (kr - 2 * this.rt - this.aVP) / this.aVQ, 3 !== this.dx && (bd.dc = !0)) : (w3 = (w3 = Math.floor(kr / (this.i / this.a9G.length))) < 0 ? 0 : w3 >=
				this.a9G.length ? this.a9G.length - 1 : w3) !== this.dx && (this.dx = w3, this.aVZ(), bd.dc = !0)), !0)
	}, this.a0N = function(kr, ks) {
		return this.aVY[0] = kr, this.aVY[1] = ks, !(!this.hF || !this.aVX || (kr -= bJ.dj(h.i - this.i, 2), ks = this.aVW, this.aVW = (kr - 2 * this.rt - this.aVP) / this.aVQ, (0 <= this.aVW && this.aVW <= 1 || 0 <= ks && ks <= 1) && (bd.dc = !
			0), 0))
	}, this.a0m = function() {
		this.aVX && (this.aVX = !1)
	}, this.a0y = function() {
		this.hF ? this.qo() : this.show()
	}, this.show = function() {
		bb.aOy < 2 || (this.hF = !0, this.aVZ())
	}, this.qo = function() {
		this.hF = !1, this.aVW = -1, bd.dc = !0
	}, this.aVZ = function() {
		this.dx < 2 ? this.aVP = aP.measureText(b8.zS.y5(bb.max[this.dx]), b8.pX.rM(0, this.aVU)) : 2 === this.dx && (this.aVP = aP.measureText(b8.zS.a2v(6, 2), b8.pX.rM(0, this.aVU))), this.aVQ = this.i - 2 * this.rt - this.aVP - this.ru
	}, this.lP = function() {
		this.hF && this.aVZ()
	}, this.te = function() {
		this.hF && this.a7D()
	}, this.a7D = function() {
		var ef = bJ.dj(h.i - this.i, 2),
			eh = bJ.dj(h.j - this.j, 2);
		tf.setTransform(1, 0, 0, 1, ef, eh), tf.fillStyle = b9.mb, tf.fillRect(0, this.aVT, this.i, this.j - this.aVT), this.aVa(), this.aNo(), tf.strokeRect(0, 0, this.i, this.j), b8.pX.textAlign(tf, 2), tf.font = b8.pX.rM(0, this.aVU), 0 ===
			this.dx ? this.aVb(bb.aVG, ef, eh) : 1 === this.dx ? this.aVb(bb.a2O, ef, eh) : 2 === this.dx ? this.aVc(ef, eh) : 3 === this.dx && (this.aVd(ef, eh), this.aVe(ef, eh)), aL.a4b(Math.floor(ef + this.i - .725 * this.aVT), Math.floor(
				eh + .275 * this.aVT), Math.floor(.45 * this.aVT)), tf.setTransform(1, 0, 0, 1, 0, 0)
	}, this.aVa = function() {
		var aA, di;
		for (tf.lineWidth = this.a6I, b8.pX.textBaseline(tf, 1), b8.pX.textAlign(tf, 1), tf.strokeStyle = b9.me, tf.font = b8.pX.rM(1, this.aVV), di = this.i / this.a9G.length, tf.fillStyle = b9.n0, tf.fillRect(this.dx * di, this.j - this.sb, di,
				this.sb), tf.fillStyle = b9.me, tf.fillRect(0, this.j - this.sb - .5 * this.a6I, this.i, this.a6I), aA = 1; aA <= 3; aA++) tf.fillRect(aA * di, this.j - this.sb, this.a6I, this.sb);
		for (aA = this.a9G.length - 1; 0 <= aA; aA--) tf.fillText(b8.x4.a1u(this.a9G[aA], 0, .9 * di), (aA + .5) * di, this.j - .46 * this.sb)
	}, this.aNo = function() {
		tf.fillStyle = b9.nQ, tf.fillRect(0, 0, this.i, this.aVT), tf.fillStyle = b9.me, tf.fillRect(0, this.aVT - .5 * this.a6I, this.i, this.a6I), tf.font = b8.pX.rM(1, .39 * this.aVT), tf.fillText(b8.x4.a1u(L(451), 0, .8 * this.i), Math.floor(
			this.i / 2), Math.floor(.55 * this.aVT))
	}, this.aVb = function(g, ef, eh) {
		var kV = bb.max[this.dx],
			a1H = (tf.setTransform(1, 0, 0, 1, ef + 2 * this.rt + this.aVP, eh + this.a6w + this.aVT), tf.lineWidth = 2, this.aVR / Math.sqrt(kV));
		tf.beginPath(), tf.moveTo(this.aVQ, this.aVR - a1H * Math.sqrt(g[bb.aOy - 1]));
		for (var aA = bb.aOy - 2; 0 <= aA; aA--) tf.lineTo(aA * this.aVQ / (bb.aOy - 1), this.aVR - a1H * Math.sqrt(g[aA]));
		tf.stroke();
		ef = this.a4b(g, a1H, .5);
		ef < .95 && tf.fillText(b8.zS.y5(kV), -this.rt, 0), .05 < Math.abs(ef - .5) && tf.fillText(b8.zS.y5(Math.floor(kV / 4)), -this.rt, Math.floor(this.aVR / 2)), .05 < ef && tf.fillText("0", -this.rt, this.aVR)
	}, this.aVc = function(ef, eh) {
		tf.setTransform(1, 0, 0, 1, ef + 2 * this.rt + this.aVP, eh + this.a6w + this.aVT), tf.lineWidth = 2;
		var a1H = this.aVR / Math.max(bb.max[this.dx], 1);
		tf.beginPath(), tf.moveTo(this.aVQ, this.aVR - a1H * bb.a9d[bb.aOy - 1]);
		for (var aA = bb.aOy - 2; 0 <= aA; aA--) tf.lineTo(aA * this.aVQ / (bb.aOy - 1), this.aVR - a1H * bb.a9d[aA]);
		tf.stroke();
		ef = this.a4b(bb.a9d, a1H, 1), eh = bb.max[this.dx] / 100;
		ef < .95 && tf.fillText(b8.zS.a2v(eh, 2), -this.rt, 0), .05 < Math.abs(ef - .5) && tf.fillText(b8.zS.a2v(eh / 2, 2), -this.rt, Math.floor(this.aVR / 2)), .05 < ef && tf.fillText(b8.zS.a2v(0, 2), -this.rt, this.aVR)
	}, this.aVd = function(ef, eh) {
		tf.setTransform(1, 0, 0, 1, ef + .34 * this.i, eh + 2 * aVS + this.aVT), b8.pX.textAlign(tf, 2);
		for (var a91 = this.j - 4 * aVS - this.sb - this.aVT, g = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], aA = 9; 0 <= aA; aA--) tf.fillText(b8.x4.a1u(bb.aVK[g[aA]], 0, .31 * this.i), 0, aA * a91 / 9);
		var f0 = bb.lY;
		for (tf.setTransform(1, 0, 0, 1, ef + .39 * this.i, eh + 2 * aVS + this.aVT), b8.pX.textAlign(tf, 0), tf.fillText(b8.zS.a2v(100 * f0[0] / (1024 * Math.max(f0[1], 1)), 1), 0, 0), aA = 8; 1 <= aA; aA--) tf.fillText(f0[g[aA]].toString(), 0,
			aA * a91 / 9);
		tf.fillText(b8.zS.a2v(100 * (1 - af.gL[aC.eI] / f0[7]), 0), 0, a91)
	}, this.aVe = function(ef, eh) {
		tf.setTransform(1, 0, 0, 1, ef + .79 * this.i, eh + 2 * aVS + this.aVT), b8.pX.textAlign(tf, 2);
		var aA, a91 = this.j - 4 * aVS - this.sb - this.aVT;
		for (tf.fillStyle = b9.mv, aA = 2; 0 <= aA; aA--) tf.fillText(b8.x4.a1u(bb.aVK[aA + 8], 0, .31 * this.i), 0, aA * a91 / 9);
		tf.fillText(b8.x4.a1u(bb.aVK[18], 0, .31 * this.i), 0, 3 * a91 / 9), tf.fillStyle = b9.mu, tf.fillText(b8.x4.a1u(bb.aVK[11], 0, .31 * this.i), 0, 4 * a91 / 9), tf.fillStyle = b9.nD, tf.fillText(b8.x4.a1u(bb.aVK[13], 0, .31 * this.i), 0,
				5 * a91 / 9), tf.fillText(b8.x4.a1u(bb.aVK[15], 0, .31 * this.i), 0, 6 * a91 / 9), tf.fillText(b8.x4.a1u(bb.aVK[16], 0, .31 * this.i), 0, 7 * a91 / 9), tf.fillText(b8.x4.a1u(bb.aVK[12], 0, .31 * this.i), 0, 8 * a91 / 9), tf
			.fillStyle = b9.nC, tf.fillText(b8.x4.a1u(bb.aVK[17], 0, .31 * this.i), 0, a91), tf.fillStyle = b9.mv;
		var f0 = bb.lY,
			aCj = f0[8] + f0[9] + f0[10] + f0[18],
			aCj = b8.zS.y5(aCj),
			aMd = tf.measureText(aCj).width,
			ef = (tf.setTransform(1, 0, 0, 1, ef + .83 * this.i + aMd, eh + 2 * aVS + this.aVT), tf.fillText(b8.zS.y5(f0[8]), 0, 0), tf.fillText(b8.zS.y5(f0[9]), 0, a91 / 9), tf.fillText(b8.zS.y5(f0[10]), 0, 2 * a91 / 9), tf.fillText(b8.zS.y5(f0[
				18]), 0, 3 * a91 / 9), tf.fillStyle = b9.mu, tf.fillText(aCj, 0, 4 * a91 / 9), tf.fillStyle = b9.nD, tf.fillText(b8.zS.y5(f0[13]), 0, 5 * a91 / 9), tf.fillText(b8.zS.y5(f0[15]), 0, 6 * a91 / 9), tf.fillText(b8.zS.y5(f0[16]),
				0, 7 * a91 / 9), tf.fillText(b8.zS.y5(f0[12]), 0, 8 * a91 / 9), f0[12] + f0[13] + f0[15] + f0[16]);
		tf.fillStyle = b9.nC, tf.fillText(b8.zS.y5(ef), 0, a91), tf.fillStyle = b9.me
	}, this.a4b = function(g, a1H, a7o) {
		var aA, e, fF;
		return this.aVW < 0 || 1 < this.aVW ? .25 : (aA = this.aVW * (bb.aOy - 1), fF = g[e = Math.floor(aA)], fF += (aA - e) * (g[e < bb.aOy - 1 ? e + 1 : e] - fF), tf.strokeStyle = b9.mh, .04 < this.aVW && this.aVg(0, this.aVR - a1H * Math.pow(
				fF, a7o), aA * this.aVQ / (bb.aOy - 1), this.aVR - a1H * Math.pow(fF, a7o)), .04 < fF / bb.max[this.dx] && this.aVg(aA * this.aVQ / (bb.aOy - 1), this.aVR, aA * this.aVQ / (bb.aOy - 1), this.aVR - a1H * Math.pow(fF, a7o)), tf
			.fillStyle = b9.nF, tf.beginPath(), tf.arc(aA * this.aVQ / (bb.aOy - 1), this.aVR - a1H * Math.pow(fF, a7o), Math.max(2, .014 * this.j), 0, 2 * Math.PI), tf.fill(), g = this.aVW * bd.a9f, g = 0 === af.lc[aC.eI] ? Math.floor(g * bb
				.aVJ) : Math.floor(g * bd.jk()), tf.fillStyle = b9.me, tf.fillText(1 === a7o ? b8.zS.a2v(fF / 100, 2) : b8.zS.y5(Math.floor(fF)), -this.rt, this.aVR - a1H * Math.pow(fF, a7o)), b8.pX.textAlign(tf, 1), tf.fillText(aV.a9U(g),
				aA * this.aVQ / (bb.aOy - 1), this.aVR + this.aVU - (z.a0.qv() ? 2 : 0) - this.a6I), b8.pX.textAlign(tf, 2), a1H * Math.pow(fF, a7o) / this.aVR)
	}, this.aVg = function(m4, m5, mH, mI) {
		tf.beginPath(), tf.moveTo(m4, m5), tf.lineTo(mH, mI), tf.stroke()
	}
}

function bt() {
	this.aVh = "https://", this.aVi = this.aVh + "territorial.io/", this.aOz = this.aVi + "changelog", this.aP3 = this.aVi + "terms", this.aVj = this.aVi + "cookie_policy", this.aOQ = this.aVi + "privacy", this.aP2 = this.aVi + "tutorial", this.aP1 =
		this.aVi + "players", this.aP0 = this.aVi + "clans", this.zd = this.aVi + "clan-results", this.aVk = "https://patreon.com/c/territorial", this.aAx = this.aVh + "play.google.com/store/apps/details?id=territorial.io", this.zw = this.aVh +
		"apps.apple.com/app/id1581110913", this.aVl = this.aVh + "www.youtube.com/watch?v=toZTQ8aRdFc", this.aAy = this.aVh + "discord.gg/pthqvpTXmh", this.aAz = this.aVh + "www.instagram.com/davidtschacher/", this.xf =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function d2() {
	this.x = new aVm, this.x1 = new aVn, this.dU = function() {
		this.x.dU()
	}, this.ih = function() {
		0 !== this.x.a5e && this.x.a5e--
	}
}

function aVn() {
	this.te = function() {
		if (0 !== bN.x.a5e && (tf.globalAlpha = Math.min(bN.x.a5e / 580, 1), tf.drawImage(bN.x.aVq, 1 + aR.wz(), 1 + aR.x0()), tf.globalAlpha = 1, aC.gt)) {
			for (var m4 = i8 / i9, m5 = iA / i9, mH = (h.i + i8) / i9, mI = (h.j + iA) / i9, g6 = bN.x.aVr * i9, aVs = bN.x.aVs, aA = aC.jn - 1; 0 <= aA; aA--) ! function(aA, g6, m4, m5, mH, mI, aVs) {
				var highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aA];
				if (highlight) g6 *= 2;
				0 === af.lc[aA] || 0 === af.gL[aA] || (mH = h.i * ((af.iM[aA] + af.iN[aA] + 1) / 2 - m4) / (mH - m4) - .5 * g6, m4 = h.j * ((af.iO[aA] + af.iP[aA] + 1) / 2 - m5) / (mI - m5) - .5 * g6, mH > h.i) || m4 > h.j || mH < -g6 || m4 <
					-g6 || (tf.setTransform(highlight ? i9 * 2 : i9, 0, 0, highlight ? i9 * 2 : i9, mH, m4), tf.drawImage(aVs[aC.hN ? be.eW[aA] : 1], 0, 0))
			}(aA, g6, m4, m5, mH, mI, aVs);
			tf.setTransform(i9, 0, 0, i9, 0, 0)
		}
	}
}

function aVm() {
	this.aVr = 28, this.a5e = 0, this.aVq = null;
	var aVu = this.aVs = null;

	function aVx(hP, aVy) {
		var ef, eh, eK, ht, a1i = b8.pX.vK(hP, hP),
			hV = b8.pX.getContext(a1i, !0),
			hS = b8.pX.getImageData(hV, hP, hP),
			vV = hS.data,
			kV = (hP >> 1) - .5,
			aVz = .5 + kV;
		for (aVz *= aVz, eh = 0; eh < hP; eh++)
			for (ef = 0; ef < hP; ef++) ht = (ht = ef - kV) * ht + (ht = eh - kV) * ht, vV[eK = 4 * (eh * hP + ef)] = aVy[0], vV[1 + eK] = aVy[1], vV[2 + eK] = aVy[2], vV[3 + eK] = (aVz - ht) * aVy[3] / aVz;
		return hV.putImageData(hS, 0, 0), a1i
	}

	function aUw(aA, hV, a1i, hP) {
		var highlight, ef, eh;
		0 !== af.lc[aA] && 0 !== af.gL[aA] && ((highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aA]) && (hP *= 2), ef = af.iM[aA] + af.iN[aA] + 1 - hP - 2 >> 1, eh = af.iO[aA] + af.iP[aA] + 1 - hP - 2 >> 1, highlight ? hV
			.drawImage(a1i[aC.hN ? 9 === aC.k4 && 5 === aD.hC[aA] ? 3 : be.eW[aA] : aA < aC.jn ? 1 : 0], ef, eh, hP, hP) : hV.drawImage(a1i[aC.hN ? 9 === aC.k4 && 5 === aD.hC[aA] ? 3 : be.eW[aA] : aA < aC.jn ? 1 : 0], ef, eh))
	}
	this.dU = function() {
		var r9;
		this.a5e = 700,
			function(r9) {
				var hP = r9.aVr;
				if (r9.aVs = [], aVu = [], aC.hN) {
					for (var aA = 0; aA <= aC.w8; aA++) r9.aVs.push(aVx(hP, be.aTn[be.k9[aA]])), aVu.push(aVx(hP >> 1, be.aTn[be.k9[aA]]));
					9 === aC.k4 && aVu.push(aVx(hP, be.aTn[1]))
				} else r9.aVs.push(aVx(hP, be.aTn[7])), r9.aVs.push(aVx(hP, be.aTn[4])), aVu.push(aVx(hP >> 1, be.aTn[7]))
			}(this),
			function(r9, aW0) {
				var aA, aVq = r9.aVq,
					hV = b8.pX.getContext(aVq, !0),
					eY = aC.eV,
					hP = r9.aVr >> 1;
				hV.imageSmoothingEnabled = !1, hV.setTransform(1, 0, 0, 1, 0, 0), aW0 && hV.clearRect(0, 0, aVq.width, aVq.height);
				if (9 === aC.k4) {
					hP <<= 1;
					r9 = ax.kD[5];
					for (aA = eY - r9; aA < eY; aA++) aUw(aA, hV, aVu, hP);
					eY -= r9, hP >>= 1
				}
				for (aA = aC.jn; aA < eY; aA++) aUw(aA, hV, aVu, hP)
			}(this, null !== (r9 = this).aVq && r9.aVq.width === bQ.ej - 2 && r9.aVq.height === bQ.ek - 2 || (r9.aVq = b8.pX.vK(bQ.ej - 2, bQ.ek - 2), !1)), aC.gt || this.a3D()
	}, this.aTm = aVx, this.a3D = function() {
		for (var eY = aC.jn, hP = this.aVr, aVs = this.aVs, hV = b8.pX.getContext(this.aVq, !0), aA = 0; aA < eY; aA++) aUw(aA, hV, aVs, hP)
	}
}

function d3() {
	function aW3() {
		8 === aC.k4 && 1 === aC.yn && bP.yQ.ym()
	}

	function aW2(player) {
		aC.gt ? (aj.aFP(player), ak.aIO(), aC.k6 && aC.op.ih()) : b1.aBE(player)
	}
	this.oF = function(player) {
		aM.yz(player, player === aC.eI ? 21 : 22), aW2(player), aW3()
	}, this.om = function(player) {
		1 === aC.yn && 0 !== af.lc[player] && 2 !== af.a2F[player] && aW2(player), aC.yq--, aC.yp--, aM.yz(player, 4), b8.ft.gj(2) && aV.lO(!0), aW3()
	}
}

function dD() {
	this.aRO = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.a8z = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", b9.me, "rgb(170,170,170)"
	], this.aW4 = [b9.me, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", b9.me, b9.mV], this.aW5 = [b9.mV, b9.me, b9.me, b9.me, b9.mV, b9.mV, b9.mV, b9.mV, b9.me];
	var aW6 = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"],
		aW7 = (this.aHq = ["rgba(" + aW6[0] + ",", "rgba(" + aW6[1] + ",", "rgba(" + aW6[2] + ",", "rgba(" + aW6[3] + ",", "rgba(" + aW6[4] + ",", "rgba(" + aW6[5] + ",", "rgba(" + aW6[6] + ",", "rgba(" + aW6[7] + ",", "rgba(" + aW6[8] + ",",
			"rgba(" + aW6[9] + ","
		], this.aHr = ["rgb(" + aW6[0] + ")", "rgb(" + aW6[1] + ")", "rgb(" + aW6[2] + ")", "rgb(" + aW6[3] + ")", "rgb(" + aW6[4] + ")", "rgb(" + aW6[5] + ")", "rgb(" + aW6[6] + ")", "rgb(" + aW6[7] + ")", "rgb(" + aW6[8] + ")", "rgb(" + aW6[
			9] + ")"
		], this.z9 = null, this.aTn = [
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
	this.k9 = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.eW = new Uint8Array(aC.eV), this.wE = new Uint16Array(aC.eV), this.wF = new Uint16Array(this.k9.length + 1), this.wG = new Uint16Array(this.k9.length), this.dV = function() {
		this.z9 = [L(452), L(453), L(454), L(455), L(456), L(457), L(458), L(459), L(460)]
	}, this.dU = function() {
		if (this.eW.fill(0), this.aW8(), aC.hN) {
			9 === aC.k4 ? this.aW9() : aC.k6 ? function() {
				var colorsData = aC.data.colorsData;
				if (!aC.data.selectableColor)
					for (var aA = aC.jn - 1; 0 <= aA; aA--) colorsData[aA] = aw.j5(262144);
				var aWI = 0,
					eo = 768,
					aQs = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
					teamPlayerCount = aC.data.teamPlayerCount;
				for (aA = 0; aA < 9; aA++)
					if (teamPlayerCount[aA]) {
						for (var eb = 0, es = 0; es < 3; es++) eb += Math.abs(aW7[aA][es] - aQs[es]);
						eb < eo && (aWI = aA, eo = eb)
					} var aWJ = new Uint16Array(9);
				for (aA = 0; aA < 9; aA++) aWJ[aA] = teamPlayerCount[aA];
				var k9 = be.k9,
					aWK = new Uint8Array(9),
					g0 = (k9[0] = 0, 1);
				for (aA = 1; aA < 9; aA++) aWJ[aA] && (aWK[aA] = g0, k9[g0++] = aA);
				var j4 = aC.jn,
					eW = be.eW;
				aWJ[aWI] ? (aWJ[aWI]--, eW[0] = aWK[aWI]) : j4 = 0;
				var et = 0;
				for (aA = j4; aA < aC.w1; aA++) {
					var hL = k9[et];
					if (aWJ[hL]) aWJ[hL]--, eW[aA] = aWK[hL];
					else if (aA--, 9 <= ++et) return console.log("error 325")
				}
			}() : this.ih();
			for (var eY = aC.eV, wE = be.wE, wF = be.wF, wG = be.wG, eW = be.eW, k9 = be.k9, w7 = k9.length, km = new Array(w7), aA = 0; aA < w7; aA++) km[aA] = [];
			for (aA = 0; aA < eY; aA++) km[k9[eW[aA]]].push(aA);
			for (aA = 1; aA <= w7; aA++) wF[aA] = wF[aA - 1] + km[aA - 1].length;
			for (aA = 0; aA < w7; aA++)
				for (var g0 = km[aA].length, kV = wF[aA], hL = 0; hL < g0; hL++) wE[hL + kV] = km[aA][hL];
			var jn = aC.jn;
			for (aA = 0; aA < w7; aA++)
				for (g0 = km[aA].length, kV = wF[aA], hL = 0; hL < g0; hL++)
					if (wE[hL + kV] >= jn) {
						wG[aA] = hL;
						break
					}
		}
	}, this.aW8 = function() {
		for (var aA = this.k9.length - 1; 0 <= aA; aA--) this.k9[aA] = aA
	}, this.aW9 = function() {
		for (var aA = aC.data.teamPlayerCount[7] - 1; 0 <= aA; aA--) this.eW[aA] = 1;
		for (aA = aC.data.teamPlayerCount[7]; aA < aC.eV; aA++) this.eW[aA] = 2;
		this.k9[1] = 7, this.k9[2] = 8
	}, this.ih = function() {
		var hd = new Uint8Array(aC.jn),
			he = new Uint8Array(aC.jn),
			aWC = new Uint16Array(8),
			aWD = new Uint16Array(this.k9.length);
		this.aWE(hd, he, aWC, 1), this.aF2(aWC), this.aWF(aWD, hd, he), this.aWG(hd, he, aWD), this.aWH()
	}, this.aWE = function(hd, he, aWJ, aWL) {
		for (var es, e, aWM, eY = this.k9.length - aWL, g = new Uint16Array(eY), colorsData = aC.data.colorsData, aA = aC.jn - 1; 0 <= aA; aA--) {
			for (es = eY; aWL <= es; es--) g[es - 1] = Math.abs(4 * (colorsData[aA] >> 12) - aW7[es][0]) + Math.abs(4 * (colorsData[aA] >> 6 & 63) - aW7[es][1]) + Math.abs(4 * (63 & colorsData[aA]) - aW7[es][2]);
			for (aWM = 768, es = eY - 1; 0 <= es; es--) g[e = (es + aA) % eY] < aWM && (aWM = g[e], hd[aA] = e);
			for (aWJ[hd[aA]] += 4, aWM = 768, es = eY - 1; 0 <= es; es--) g[e = (es + aA) % eY] < aWM && e !== hd[aA] && (aWM = g[e], he[aA] = e);
			aWJ[he[aA]]++
		}
	}, this.aF2 = function(aWJ) {
		for (var es, kX, eY = this.k9.length - 1, aA = eY; 0 <= aA; aA--) this.k9[aA] = aA;
		for (aA = eY - 1; 0 <= aA; aA--) aWJ[aA]++;
		for (aA = 1; aA <= eY; aA++) {
			for (kX = 0, es = 1; es < eY; es++) aWJ[es] > aWJ[kX] && (kX = es);
			aWJ[kX] = 0, this.k9[aA] = kX + 1
		}
	}, this.aWF = function(aWD, hd, he) {
		var es, zW, et, eb, e, mG, sB, aWN = this.k9.length - 1,
			q1 = new Uint16Array(aWN),
			aWO = [],
			aWP = 0,
			zV = [],
			aWQ = [];
		loop: for (var aA = 0; aA < aC.jn; aA++)
			if (null !== (zW = b8.zS.zX(af.zU[aA]))) {
				for (es = zV.length - 1; 0 <= es; es--)
					if (zW === zV[es]) {
						aWQ[es].push(aA), aWP = Math.max(aWP, aWQ[es].length);
						continue loop
					} zV.push(zW), aWO.push(!1), aWQ.push([aA]), aWP = Math.max(aWP, 1)
			}
		for (; 2 < aC.w8 && aWP > bJ.dj(aC.jn, aC.w8);) aC.w8--, aC.k4--;
		for (es = zV.length - 1; 0 <= es; es--) {
			for (eb = -1, et = zV.length - 1; 0 <= et; et--) !aWO[et] && (-1 === eb || aWQ[et].length > aWQ[eb].length) && (eb = et);
			for (et = aWN - 1; 0 <= et; et--) q1[et] = 1;
			for (et = aWQ[eb].length - 1; 0 <= et; et--) q1[hd[aWQ[eb][et]]] += 3, q1[he[aWQ[eb][et]]]++;
			for (aA = aWN - 1; 0 <= aA; aA--) {
				for (e = eb % aWN, et = aWN - 1; 0 <= et; et--) q1[et] > q1[e] && (e = et);
				for (mG = -1, et = aC.w8; 0 < et; et--)
					if (this.k9[et] === e + 1) {
						mG = et;
						break
					} if (q1[e] = 0, -1 !== mG) {
					for (sB = 0, et = aC.w8; 0 < et; et--) aWD[mG] > aWD[et] && sB++;
					if (sB !== aC.w8 - 1) {
						for (et = aWQ[eb].length - 1; 0 <= et; et--) aWD[mG]++, this.eW[aWQ[eb][et]] = mG;
						break
					}
				}
			}
			aWO[eb] = !0
		}
	}, this.aWG = function(hd, he, aWD) {
		for (var aA, hs, eY = this.k9.length - 1, border = bJ.dj(aC.jn, aC.w8), aWR = (0 < aC.jn % aC.w8 && border++, new Uint8Array(1 + eY)), es = eY; 1 <= es; es--) aWR[this.k9[es]] = es;
		for (aA = 0; aA < aC.jn; aA++) hs = aWR[hd[aA] + 1], 0 === this.eW[aA] && hs <= aC.w8 && aWD[hs] < border && (aWD[hs]++, this.eW[aA] = hs);
		for (aA = 0; aA < aC.jn; aA++) hs = aWR[he[aA] + 1], 0 === this.eW[aA] && hs <= aC.w8 && aWD[hs] < border && (aWD[hs]++, this.eW[aA] = hs);
		for (es = aC.w8; 1 <= es; es--)
			for (aA = aC.jn - 1; 0 <= aA && !(aWD[es] >= border); aA--) 0 === this.eW[aA] && (aWD[es]++, this.eW[aA] = es)
	}, this.aWH = function() {
		for (var aA = aC.jn; aA < aC.eV; aA++) this.eW[aA] = 1 + aA % aC.w8
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
		for (var aWS = !1, aWT = !1, eb = 3; 0 <= eb; eb--) {
			var g5 = gD[player][aA] + ea[eb];
			if (ab.aFC(g5, player)) continue loop;
			aWS = aWS || ab.h0(g5), aWT = aWT || ab.aFB(g5)
		}
		aWS ? gE[player].push(gD[player][aA]) : aWT ? ey[player].push(gD[player][aA]) : ab.wa(gD[player][aA], player), gD[player][aA] = gD[player][eY - 1], gD[player].pop(), eY--
	}
}

function gB() {
	af.gL[fR] -= fS
}

function gC(border) {
	for (var eY = border.length, aA = eY - 1; 0 <= aA; aA--) ab.wu(fR, border[aA]) || (border[aA] = border[eY - 1], border.pop(), eY--)
}

function gF(border) {
	for (var eY = border.length, aA = eY - 1; 0 <= aA; aA--) !ab.wu(fR, border[aA]) && ab.eT(border[aA]) && (border[aA] = border[eY - 1], border.pop(), eY--)
}

function gG(border) {
	for (var eb, g5, eY = border.length, ea = ab.ea, aA = eY - 1; 0 <= aA; aA--)
		for (eb = 3; 0 <= eb; eb--)
			if (g5 = border[aA] + ea[eb], ab.aFC(g5, fR)) {
				af.gD[fR].push(border[aA]), border[aA] = border[eY - 1], border.pop(), eY--;
				break
			}
}

function gH() {
	for (var eb, g5, ea = ab.ea, aA = fS - 1; 0 <= aA; aA--)
		for (eb = 3; 0 <= eb; eb--) g5 = fU[aA] + ea[eb], ab.aFD(fR, g5) && ab.aFE(g5) && (af.gD[fR].push(g5), ab.g2(g5, fR))
}

function gI() {
	var ef, eh;
	loop: for (; af.iO[fR] < af.iP[fR];) {
		for (ef = af.iN[fR]; ef >= af.iM[fR]; ef--)
			if (ab.wu(fR, 4 * (af.iO[fR] * bQ.ej + ef))) break loop;
		af.iO[fR]++
	}
	loop: for (; af.iO[fR] < af.iP[fR];) {
		for (ef = af.iN[fR]; ef >= af.iM[fR]; ef--)
			if (ab.wu(fR, 4 * (af.iP[fR] * bQ.ej + ef))) break loop;
		af.iP[fR]--
	}
	loop: for (; af.iM[fR] < af.iN[fR];) {
		for (eh = af.iP[fR]; eh >= af.iO[fR]; eh--)
			if (ab.wu(fR, 4 * (eh * bQ.ej + af.iM[fR]))) break loop;
		af.iM[fR]++
	}
	loop: for (; af.iM[fR] < af.iN[fR];) {
		for (eh = af.iP[fR]; eh >= af.iO[fR]; eh--)
			if (ab.wu(fR, 4 * (eh * bQ.ej + af.iN[fR]))) break loop;
		af.iN[fR]--
	}
}

function eR(player, iy) {
	return 0 === be.eW[player] || be.eW[player] !== be.eW[iy]
}

function h6(player, iy) {
	for (var e, aWU = ac.fd(player), aA = 0; aA < aWU; aA++)
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

function aFL(player) {
	for (var aA, g6, eY = af.gD[player].length, ea = ab.ea, eb = 3; 0 <= eb; eb--)
		for (g6 = ea[eb], aA = 0; aA < eY; aA++)
			if (ab.j0(af.gD[player][aA]) && ab.eP(af.gD[player][aA] + g6)) return !0;
	return !1
}

function h8(a2K, a2L) {
	for (var aA, di, g6, g5, aTz = af.gD[a2K].length, aU0 = af.gD[a2L].length, ea = (aU0 < aTz && (di = a2K, a2K = a2L, a2L = di, di = aTz, aTz = aU0, 0), ab.ea), eb = 3; 0 <= eb; eb--)
		for (g6 = ea[eb], aA = 0; aA < aTz; aA++)
			if (g5 = af.gD[a2K][aA] + g6, ab.g7(g5) && ab.eQ(g5) === a2L) return !0;
	return !1
}

function aFM(a2K, a2L) {
	for (var aA, g6, g5, aTz = af.gD[a2K].length, ea = ab.ea, eb = 3; 0 <= eb; eb--)
		for (g6 = ea[eb], aA = 0; aA < aTz; aA++)
			if (ab.j0(af.gD[a2K][aA]) && (g5 = af.gD[a2K][aA] + g6, ab.g7(g5)) && ab.eQ(g5) === a2L) return !0;
	return !1
}

function dP() {
	this.oz = new aWV
}

function aWV() {
	this.h3 = function(player) {
		b8.ft.a2G(player) && aM.zB(80, L(461), 637, 0, b9.nT, b9.mb, -1, !1)
	}, this.a4D = function() {
		aM.zB(80, L(462), 637, 0, b9.nT, b9.mb, -1, !1)
	}, this.o4 = function(player) {
		b8.ft.a2G(player) && aM.zB(80, L(463), 637, 0, b9.nT, b9.mb, -1, !1)
	}
}

function aWW() {
	this.aWX = 0, this.ih = function() {
		aN.ih(), aY.ih(), h.ih(), ay.x.ih(), av.aEY(), bd.dc && (bd.dc = !1, aZ.te())
	}
}

function aWY() {
	this.e7 = bd.e7, this.dx = 0, this.aWX = 0, this.aEW = 0, this.aWZ = null, this.aWa = 7, this.a5f = 0, this.dU = function() {
		this.aEW = 0, this.aWZ = [], this.dx = 0, this.aWX = 0
	}, this.aQL = function(aB) {
		if (aC.gt) this.a9g(aB);
		else if (this.aWZ.push(aB), 2 === aC.yn) {
			for (var aA = 0; aA < this.aWZ.length; aA++) b6.nt.ih(this.aWZ[aA]);
			this.aWZ = []
		}
	}, this.a9g = function(aB) {
		2 !== aC.yn && (b6.nt.ih(aB), b7.ih(), aV.a9g(this.aEW), this.aEW === aC.a3J ? (aC.op.ih(), this.aEW = 0, this.dx = 0, this.aWX = 0, this.e7 = bd.e7) : (this.aEW++, ae.a3C(), ae.lO(!0), bZ.aAG()))
	}, this.ih = function() {
		h.ih(), aC.gt ? (bd.dc = aV.a9g(-1) || bd.dc, lQ()) : (0 !== this.dx || bd.e7 >= this.e7 && (this.e7 += bd.a9f * Math.floor(1 + (bd.e7 - this.e7) / bd.a9f), 2 === aC.yn ? lF() : this.aWb(), this.dx++, 27 < bd.e7 - this.a5f)) && this
		.aWc(), lL(), bd.dc && (bd.dc = !1, wx()), this.a5f = bd.e7
	}, this.aWc = function() {
		bd.dc = !0, lN(), this.dx = 0
	}, this.aWb = function() {
		var uM, aA;
		if (this.aWX !== 7 * this.aEW) lH(), bZ.aAG();
		else {
			uM = !1;
			loop: for (; this.aWd() && (uM = !0, lH(), 2 !== aC.yn) && 0 < this.aWZ.length;)
				for (aA = this.aWa - 2; 0 <= aA; aA--)
					if (lH(), 2 === aC.yn) break loop;
			uM ? bZ.aAG() : (lF(), bZ.a3F())
		}
	}, this.aWd = function() {
		return 0 < this.aWZ.length && (this.aEW++, b6.nt.ih(this.aWZ[0]), this.aWZ.shift(), !0)
	}
}

function aWe() {
	var aWf, aWg, aWh, aEW, aWi, dx = 0,
		e7 = bd.e7;

	function aWl() {
		! function() {
			if (!aC.gt) return;
			if (aC.k6) return;
			if (2 !== aC.yn)
				if (aWi % 7 != 0) aWi++;
				else if (aEW === aC.a3J) {
				if (!aWo()) return;
				aV.a9g(aEW), aC.op.ih()
			} else {
				if (!aWo()) return;
				aWi++, aEW++, ae.a3C(), ae.lO(!0)
			}
			return 1
		}() && aWo() && lH()
	}

	function aWm() {
		dx = 0, (aC.gt ? (bd.dc = aV.a9g(aEW - (aWi % 7 == 0 ? 0 : 1) + aWi % 7 / 7) || bd.dc, lQ) : aL.gi || !bA.a3g ? lQ : (bd.dc = !0, lN))()
	}

	function aWo() {
		var aA, eY, aWp = b7.on.aRY,
			fF = b7.on.aRZ,
			fH = b7.on.aRa,
			fJ = b7.on.aRb,
			aWq = b7.on.aRc,
			aWr = b7.on.aRd;
		if (!(aWf >= aWr.length)) {
			if (aWr = aWr[aWf], aWq[aWf]) {
				for (eY = aWg + aWr, aA = aWg; aA < eY; aA++) b6.nt.oZ(aWp[aA], fF[aA], fH[aA], fJ[aA]);
				aWg += aWr, aWf++
			} else ++aWh >= aWr && (aWf++, aWh = 0);
			return 1
		}
		aM.a08("Replay file smaller than expected."), bA.a0z(!1), aC.yn = 2
	}
	this.aWX = 0, this.dU = function() {
		aWi = aEW = aWh = aWg = aWf = 0
	}, this.ih = function() {
		var aUM;
		h.ih(), bA.a78() < 1.7 ? 0 === dx ? bd.e7 >= e7 && (aUM = bd.a9f / bA.a78(), e7 += aUM * Math.floor(1 + (bd.e7 - e7) / aUM), 2 === aC.yn || aL.gi || !bA.a3g ? lF() : (aWl(), bZ.aAG()), dx++) : aWm() : function() {
			var aUM;
			if (bd.e7 >= e7)
				if (2 === aC.yn || aL.gi || !bA.a3g) lF(), e7 = bd.e7;
				else {
					for (aUM = bd.a9f / bA.a78(), 16 < (bd.e7 - e7) / aUM && (e7 = bd.e7 - 16 * aUM); bd.e7 >= e7 && 2 !== aC.yn;) e7 += aUM, aWl();
					bZ.aAG()
				} aWm()
		}(), lL(), bd.dc && (bd.dc = !1, wx())
	}, this.yx = function() {
		b7.on.aRd.length - aWf <= 2 || aM.a08("Replay file larger than expected.")
	}
}

function aWs() {
	var dx = 0,
		e7 = bd.e7;
	this.aWX = 0, this.ih = function() {
		h.ih(), aC.gt ? lQ() : 0 === dx ? bd.e7 >= e7 && (e7 += bd.a9f * Math.floor(1 + (bd.e7 - e7) / bd.a9f), 2 === aC.yn || aL.gi ? lF() : (lH(), bZ.aAG()), dx++) : ((aL.gi ? lQ : (bd.dc = !0, lN))(), dx = 0), lL(), bd.dc && (bd.dc = !1, wx())
	}
}

function dL() {
	this.yw = null, this.dc = !1, this.e7 = 0, this.a9f = 56;
	var aWt = 0;

	function aWu() {
		bd.e7 = aWt = performance.now(), bd.yw.ih(), window.requestAnimationFrame(aWu)
	}
	this.dU = function() {
		this.a3d(), window.requestAnimationFrame(aWu), this.e7 = performance.now()
	}, this.a3U = function() {
		aC.gh ? (this.yw = new aWe, this.yw.dU()) : aC.k6 ? this.yw = new aWs : (this.yw = new aWY, this.yw.dU())
	}, this.a3d = function() {
		this.yw = new aWW, this.dc = !0
	}, this.ih = function() {
		this.yw.aWX++
	}, this.jk = function() {
		return this.yw.aWX
	}, this.aPx = function() {
		var di = performance.now();
		di < aWt + 1e3 || (this.e7 = di, this.yw.ih())
	}
}

function cn() {
	var aDv = 0,
		aWv = !0;

	function aWw(id) {
		id = [L(464), L(465), L(466), L(467)][id];
		aM.a5M(id)
	}
	this.ih = function() {
		var di, a5h;
		bd.e7 < aDv || (aDv = bd.e7 + 5e3, aC.gh) || aC.k6 || b8.ft.gk(aC.eI) || (di = new Date, a5h = di.getUTCSeconds(), aWv ? a5h < 50 && (aWv = !1) : a5h < 50 || (aWv = !0, (a5h = (di.getUTCMinutes() + 1) % 60) % 5 == 0 && (0 == a5h || 20 ==
			a5h || 40 == a5h ? aC.k4 < 7 && aWw(0) : 10 == a5h || 30 == a5h || 50 == a5h ? 7 !== aC.k4 && 10 !== aC.k4 || aWw(1) : 5 == a5h || 25 == a5h || 45 == a5h ? 8 === aC.k4 && aWw(2) : 35 == a5h && 9 === aC.k4 && aWw(3))))
	}
}

function ch() {
	var m4, m5, mH, mI, aWx = 0,
		aWy = 0;

	function aX0() {
		return Math.pow(Math.pow(mH - m4, 2) + Math.pow(mI - m5, 2), .5)
	}

	function aWz(e) {
		m4 = h.k * e.touches[0].clientX, m5 = h.k * e.touches[0].clientY, mH = h.k * e.touches[1].clientX, mI = h.k * e.touches[1].clientY
	}
	this.a0R = function(e) {
		return 1 < e.touches.length ? (aWy = bd.e7, aWx = 3, aWz(e), aK.qo(), !0) : (aWx = 0, !1)
	}, this.a0S = function(e) {
		var aJB, hq, hr;
		return 0 !== aC.yn && 1 < e.touches.length && (aWx = Math.max(aWx - 1, 0), aG.mM() && (aJB = aX0(), aWz(e), e = aX0(), hq = Math.floor((m4 + mH) / 2), hr = Math.floor((m5 + mI) / 2), aR.a7Y(hq, hr, Math.max(.125, e) / Math.max(.125,
			aJB)), bd.dc = !0), !0)
	}, this.a0p = function() {
		var ef, eh;
		return !!(aWx && (aWx = 0, bd.e7 < aWy + 500)) && (ef = (m4 + mH) / 2, eh = (m5 + mI) / 2, aK.a0j(ef, eh), aK.click(ef, eh, !0) && (bd.dc = !0), !0)
	}
}

function cw() {
	this.size = 0, this.dx = 0, this.aB = null, this.dU = function(aB) {
		this.dx = 0, this.aB = aB, this.size = aB.length
	}, this.t8 = function() {
		this.aB = null
	}, this.oY = function(size) {
		for (var f0 = 0, aB = this.aB, mM = this.dx + size - 1, aA = this.dx; aA <= mM; aA++) f0 |= (aB[aA >> 3] >> 7 - (7 & aA) & 1) << mM - aA;
		return this.dx += size, this.dx > 8 * this.size && console.error("Unwrapper Overflow"), f0
	}, this.aQZ = function(size) {
		var es = size >> 1;
		return (1 << es) * this.oY(size - es) + this.oY(es)
	}, this.aQY = function(aX1) {
		return this.size === bB.aQS(aX1)
	}, this.aRq = function(vn, aX2, aX3) {
		var g0 = this.oY(vn);
		if (!g0) return null;
		for (var vn = Math.max(g0, aX3), g = new(aX2 <= 8 ? Uint8Array : aX2 <= 16 ? Uint16Array : Uint32Array)(vn), aA = 0; aA < g0; aA++) g[aA] = this.oY(aX2);
		aX3 = g[g0 - 1];
		return aX3 && g.fill(aX3, g0), g
	}, this.aRr = function(vn, aX4, aX3) {
		var g0 = this.oY(vn);
		if (!g0) return null;
		for (var vn = Math.max(g0, aX3), g = new Array(vn), aA = 0; aA < g0; aA++) g[aA] = this.aRo(aX4);
		return g.fill(g[g0 - 1], g0), g
	}, this.aRo = function(vn) {
		return bE.ut.ux(this.oY(vn))
	}, this.aRp = function() {
		var pE = bD.rp.rq(bD.rp.rr(this.oY(30))),
			pE = b8.zS.a37(pE, "_", "/");
		pE = b8.zS.a37(pE, "-", "+");
		for (var aX5 = "";
			(pE.length + aX5.length) % 4;) aX5 += "=";
		pE = "data:image/png;base64," + pE + aX5;
		var aFr = new Image;
		aFr.onload = function() {
			b7.aGG.aGH(aFr), aFr.onload = null, aFr = null
		}, aFr.src = pE
	}
}

function dF() {
	this.aSf = 0, this.aSg = 0, this.aSb = 0, this.aSc = 0, this.aSd = 0, this.aSe = 0, this.aAH = [0, 0, 0, 0], this.mL = function() {
		this.aSf = aR.wz(), this.aSg = aR.x0(), this.aSb = -this.aSf, this.aSc = -this.aSg, this.aSd = h.i / i9, this.aSe = h.j / i9, this.aAH[0] = Math.floor(this.aSb), this.aAH[1] = Math.floor(this.aSc), this.aAH[2] = Math.floor(this.aAH[0] +
			this.aSd + 1), this.aAH[3] = Math.floor(this.aAH[1] + this.aSe + 1), bZ.aAE = !0
	}
}

function ci() {
	var a6E, lp;
	this.dU = function() {
		a6E = 1, lp = 0
	}, this.ih = function() {
		0 < a6E && (lp = 0 === lp ? bd.e7 + 16 : lp, a6E = (a6E -= .001 * (bd.e7 - lp)) < 0 ? 0 : a6E, lp = bd.e7, bd.dc = !0)
	}, this.te = function() {
		0 < a6E && (tf.fillStyle = "rgba(0,0,0," + a6E + ")", tf.fillRect(0, 0, h.i, h.j))
	}
}

function a5() {
	this.size = 0, this.dx = 0, this.aB = null, this.dU = function(aB) {
		this.dx = 0, this.aB = aB, this.size = aB.length
	}, this.a6 = function(aX1) {
		return this.dU(new Uint8Array(this.aQS(aX1))), this.aB
	}, this.t8 = function() {
		this.aB = null
	}, this.a7 = function(size, a5l) {
		for (var aB = this.aB, mM = this.dx + size - 1, aA = this.dx; aA <= mM; aA++) aB[aA >> 3] |= (a5l >> mM - aA & 1) << 7 - (7 & aA);
		this.dx += size, this.dx > 8 * this.size && console.error("Wrapper Overflow")
	}, this.aQR = function(size, a5l) {
		var es = size >> 1,
			eb = 1 << es;
		this.a7(size - es, bJ.dj(a5l, eb)), this.a7(es, a5l % eb)
	}, this.aX8 = function(size) {
		for (var aB = this.aB, mM = this.dx + size, aA = this.dx; aA < mM; aA++) aB[aA >> 3] &= 255 ^ 128 >>> (7 & aA)
	}, this.aQS = function(aX1) {
		return aX1 + 7 >> 3
	}, this.aX9 = function(g, j4, mM, aXA) {
		for (var aA = j4; aA < mM; aA++) this.a7(aXA, g[aA])
	}
}

function cv() {
	this.dU = function() {
		this.g = [], this.dx = 0
	}, this.aQv = function() {
		return new Uint8Array(this.g)
	}, this.a7 = function(aXB, value) {
		for (var g = this.g, mM = this.dx + aXB - 1, aXC = 1 + (mM >> 3); g.length < aXC;) g.push(0);
		for (var aA = this.dx; aA <= mM; aA++) g[aA >> 3] |= (value >> mM - aA & 1) << 7 - (7 & aA);
		this.dx += aXB
	}, this.db = function(g, vn, aX2) {
		var aXD = b8.pg.a1c(g);
		this.a7(vn, aXD);
		for (var aA = 0; aA < aXD; aA++) this.a7(aX2, g[aA])
	}, this.aS8 = function(g, vn, aX4) {
		var aXD = b8.pg.a1c(g);
		this.a7(vn, aXD);
		for (var aA = 0; aA < aXD; aA++) this.aS6(g[aA], aX4)
	}, this.aS6 = function(pE, vn) {
		var eY = pE.length;
		this.a7(vn, eY);
		for (var aA = 0; aA < eY; aA++) this.a7(16, pE.charCodeAt(aA))
	}, this.aS7 = function(a1i) {
		var aXE = (a1i = a1i.toDataURL()).split(",");
		if (aXE.length < 2) console.log("error 266");
		else {
			a1i = b8.zS.a37(a1i = aXE[aXE.length - 1], "/", "_"), a1i = b8.zS.a37(a1i, "\\+", "-");
			var a1i = b8.zS.a37(a1i, "=", ""),
				v6 = bE.rp.v3(a1i),
				eY = v6.length;
			this.a7(30, eY);
			for (var aA = 0; aA < eY; aA++) this.a7(6, v6[aA])
		}
	}
}
a(), self.aiCommand746 = function(f0) {
	0 === f0 ? bo() : 1 !== f0 || !z || 1 !== z.id || z.dk < 14 || bH.f1()
}, setTimeout(bo, 1e4), window.onload = function() {
	bo()
};