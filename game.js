var l, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, at, au, av, h, aw, ax, ay, az, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, bA,
	bB, bC, bD, bE, bF, bG, bH, bI, bJ, bK, bL, bM, bN, bO, bP, bQ, bR, s, bS, bT, bU, bV, bW, bX, bY, bZ, ba, bb, bc, bd, be, bf, z, bg, bh, bi, q, bj, bk, bl, bm, bn, dg, dh, a8, di, a9, fN, fO, fP, fQ, fR, fS, fT, fU, fV, fW, fX, fY, fZ, iA, i9,
	iB, a6P, l4, jZ, a0I, tf, x2, aAE, a3S, a3T, S = ["div", "100%", "⬅️ ", "absolute", "canvas", "none", "inherit", "rgb(", "rgba(", "center", "auto", "   ", "<br>", "hidden", "flex", "Data", "1em", "0.8em", "territorial.io", "span", "input",
		"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==", "click", "0.5em", "' target='_blank'>", " / ",
		"undefined", "</a>", "pointer", "password", "function", "break-word", "Value", "Escape", "Enter", "0.6em", "text", "string", "scroll", "rgba(0,0,0,0.8)", "number", "nowrap", "mouseleave", "focus", "bold", "blur", "Space", "Player ",
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
			i.a6(1608), i.a7(1, 0), i.a7(6, 7), i.a7(2, z ? z.id : 3), i.a7(1, a8 ? 1 : 0), i.a7(1, a9 ? 1 : 0), i.a7(1, l ? l.m : 0);
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
	this.dj = 1092, this.n = 2044, this.rVersion = 7, this.dU = function() {
		dg = 2;
		var dk = bJ.dl(this.n, 10) % 100;
		dh = "27 Feb 2025 [" + bJ.dl(this.n, 1e3) + "." + (dk < 10 ? "0" : "") + dk + "." + this.n % 10 + "]", a8 = true, a9 = function() {
			try {
				return window.self !== window.top
			} catch (e) {
				return !0
			}
		}(), di = (new Date).getTime() % 1024
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
		e6 = bd.e7 + 135e4, 2 === dg && z.a0.e8(Math.floor(135e4))
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
		for (var ey = af.ey[player], eY = ey.length, ez = Math.max(bJ.dl(eY, 12), 1), ea = ab.ea, aA = 0; aA < eY; aA += ez)
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
	this.f3 = new Uint16Array(2), this.f4 = new Uint16Array(2), this.f5 = new Uint32Array(2), this.f6 = new Uint32Array(2), this.f7 = new Uint32Array(2), this.f8 = new Uint8Array(4), this.f9 = new Uint8Array(4), this.eZ = new Uint32Array(4), this
		.fA = new Uint32Array(5), this.eU = new Uint32Array(8), this.fB = new Uint16Array(16), this.fC = new Uint16Array(512), this.fD = new Uint16Array(512), this.fE = new Uint16Array(512), this.fF = function(g, fG) {
			return g[0] = fG, g
		}, this.fH = function(g, fG, fI) {
			return g[0] = fG, g[1] = fI, g
		}, this.fJ = function(g, fG, fI, fK) {
			return g[0] = fG, g[1] = fI, g[2] = fK, g
		}, this.fL = function(g, fG, fI, fK, fM) {
			return g[0] = fG, g[1] = fI, g[2] = fK, g[3] = fM, g
		}
}

function fa() {
	fT = 0, fU = 2048, fV = new Uint32Array(4 * fU), fW = 0, fX = new Uint32Array(fU), fY = new Uint8Array(bQ.ej * bQ.ek)
}

function fb(player) {
	fO = player, fZ = !1, fc(), fd();
	for (var aA = ac.fe(fO) - 1; 0 <= aA; aA--) 0 === ac.ff(fO, aA) && (fN = aA, fg());
	fZ && fh()
}

function fh() {
	fi(), fj()
}

function fg() {
	fS = ac.fk(fO, fN), fP = ac.fl(fO, fN), fQ = ac.fm(fO, fN), fn(), (0 !== fT && (fp(), fq()) ? fr : fo)()
}

function fq() {
	if (!((fR = bJ.dl(fP, fT)) > aC.fs)) {
		if (!fQ) return !1;
		var ft = fT * (1 + aC.fs);
		fP += b8.fu.fv(fO, ft - fP), fR = bJ.dl(fP, fT)
	}
	return !0
}

function fp() {
	for (var aA = fT - 1; 0 <= aA; aA--) fY[bJ.dl(fV[aA], 4)] = 0
}

function fo() {
	1 === ac.fe(fO) && aE.fw(fO);
	var dk = b8.fu.fx(fO, fP);
	bb.fy(fO, fP - dk, 12), ac.fz(fO, fN)
}

function fc() {
	for (var player = fO, g0 = af.g0, eY = Math.min(g0[player].length, fU), g1 = 0, g2 = fX, aA = eY - 1; 0 <= aA; aA--) g2[g1++] = g0[player][aA];
	fW = g1
}

function fd() {
	for (var aA = af.g0[fO].length - 1; 0 <= aA; aA--) ab.eT(af.g0[fO][aA]) && ab.g3(af.g0[fO][aA], fO);
	af.g0[fO] = []
}

function fn() {
	fT = 0, (fS === aC.eV ? g4 : g5)()
}

function g5() {
	for (var g6, g7, aA, ea = ab.ea, eb = 3; 0 <= eb; eb--)
		for (aA = fW - 1; 0 <= aA; aA--) g6 = fX[aA] + ea[eb], g7 = bJ.dl(g6, 4), 0 === fY[g7] && ab.g8(g6) && ab.eQ(g6) === fS && (fY[g7] = 1, fV[fT++] = g6)
}

function g4() {
	for (var g6, g7, aA, ea = ab.ea, eb = 3; 0 <= eb; eb--)
		for (aA = fW - 1; 0 <= aA; aA--) g6 = fX[aA] + ea[eb], g7 = bJ.dl(g6, 4), 0 === fY[g7] && ab.eP(g6) && (fY[g7] = 1, fV[fT++] = g6)
}

function fr() {
	g9() ? (gA(), fS !== aC.eV && gB()) : fo()
}

function gB() {
	gC(), gD(af.gE[fS]), gD(af.gF[fS]), bQ.eD(bQ.eE) && gD(af.ey[fS]), gG(af.g0[fS]), gH(af.gF[fS]), gH(af.ey[fS]), gI(), gJ()
}

function gA() {
	fZ = !0, ac.gK(fO, fN, fP), ac.gL(fO, fN), af.gM[fO] += fT, gN(), gO()
}

function g9() {
	return (fS === aC.eV ? gP : gQ)()
}

function gQ() {
	var gR = fT * aC.fs,
		gS = gT(),
		gU = gV(),
		gS = gR + 2 * gS + gU,
		gX = fR * fT;
	return gS < gX ? (fP -= gS, bb.fy(fO, gS, 13), gY(gS - gR, gU), !0) : fQ && 0 === gU ? (fP -= gX, gX += b8.fu.fv(fO, gS - gX + 1), bb.fy(fO, gX, 13), gY(gX - gR, 0), !0) : (fP -= gX, bb.fy(fO, gX, 13), gY(gX - gR, gU), !1)
}

function gY(gX, gU) {
	if (0 < gU) {
		if (gX <= gU) return bb.fy(fS, gX, 13), void ac.gZ(fS, fO, gU - gX);
		ac.gZ(fS, fO, 0), gX -= gU
	}
	gX = bJ.dl(gX, 2), gX = Math.min(af.ga[fS], gX), bb.fy(fS, gX, 13), af.ga[fS] -= gX
}

function gV() {
	return ac.gb(fS, fO)
}

function gT() {
	return bJ.dl(fT * af.ga[fS], 1 + bJ.dl(10 * af.gM[fS], 16))
}

function gP() {
	var gc = fT * aC.fs;
	return fP -= gc, bb.fy(fO, gc, 13), !0
}

function gO() {
	for (var aA = fT - 1; 0 <= aA; aA--) af.g0[fO].push(fV[aA]), af.gE[fO].push(fV[aA]), ab.g3(fV[aA], fO)
}

function d6() {
	var gd = 0,
		ge = 0;
	this.gf = function(ef, eh) {
		gd = ef, ge = eh
	}, this.gg = function(gh) {
		aC.gi || aL.gj || (b8.fu.gk(0) || b8.fu.gk(1)) && b8.fu.gl(aC.eI) && (aQ.gm(gd, ge) ? aQ.gn = !1 : aO.gm(gd, ge) || function(gh) {
			var gp = bK.gq(gd),
				gr = bK.gs(ge),
				eK = bK.ew(gp, gr),
				eC = bK.eO(eK);
			bK.gt(gp, gr) && (aC.gu ? ab.eT(eC) && b6.gv.gw(eK) : ab.ed(eC) ? gh || (gp = al.e9.eB(eC)) && (gr = bK.eO(gp), gr = ab.eP(gr) ? aC.eV : ab.eQ(gr), b6.gv.gz(aQ.h0(), gp, gr)) : ab.h1(eC) || gh ? bL.h2.h3(aC.eI, eK) && b6.gv
				.h4(aQ.h0(), eK) : ab.eP(eC) ? h5(aC.eI) ? b6.gv.h6(aQ.h0(), aC.eV) : h7(aC.eI, aC.eV) ? az.h8(aC.eV, aQ.h0()) : bL.h2.h3(aC.eI, eK) && b6.gv.h4(aQ.h0(), eK) : (gp = ab.eQ(eC)) !== aC.eI && (eR(gp, aC.eI) ? h9(aC.eI,
					gp) ? b6.gv.h6(aQ.h0(), gp) : h7(aC.eI, gp) ? az.h8(gp, aQ.h0()) : bL.h2.h3(aC.eI, eK) && b6.gv.h4(aQ.h0(), eK) : bL.h2.h3(aC.eI, eK) && b6.gv.h4(aQ.h0(), eK)))
		}(gh))
	}, this.hA = function() {
		if (!aC.gi && !aL.gj && b8.fu.gk(1)) {
			var g6 = aC.eI;
			if (b8.fu.gl(g6)) {
				var eY = ac.fe(g6);
				if (eY < 1) ! function() {
					var g6 = aC.eI;
					if (h5(g6)) b6.gv.h6(aQ.h0(), aC.eV);
					else
						for (var ea = ab.ea, gE = af.gE, eY = gE[g6].length, hK = Math.floor(Math.random() * eY), aA = 0; aA < eY; aA++)
							for (var hL = 3; 0 <= hL; hL--) {
								var hM = gE[g6][(aA + hK) % eY] + ea[hL];
								if (ab.g8(hM)) {
									hM = ab.eQ(hM);
									if (hM !== g6 && (!aC.hO || eR(g6, hM))) return b6.gv.h6(aQ.h0(), hM)
								}
							}
				}();
				else {
					for (var hC = 0, hD = ac.fl(g6, 0), aA = 1; aA < eY; aA++) {
						var hE = ac.fl(g6, aA);
						hE < hD && (hD = hE, hC = aA)
					}
					b6.gv.h6(aQ.h0(), ac.fk(g6, hC))
				}
			}
		}
	}, this.hF = function() {
		if (!aC.gi && !aL.gj && b8.fu.gl(aC.eI) && b8.fu.gk(1)) return au.hG ? au.hH(aC.eI) ? void b6.gv.hI(1) : void 0 : void(au.hJ(aC.eI) && b6.gv.hF())
	}
}

function hP(hQ, size, hR, hS, font) {
	var aA, hV = .2,
		canvas = document.createElement("canvas"),
		hW = canvas.getContext("2d", {
			alpha: !1
		});
	for (canvas.width = hQ, canvas.height = hQ, hW.font = size + font, hW.textAlign = "center", hW.textBaseline = "middle", hW.fillStyle = "red", aA = 0; aA < hR.length; aA++) hW.fillText(hR[aA], .5 * hQ, .5 * hQ);
	return -1 < (canvas = function(hT) {
		var aA, dw, eb = hT.data;
		for (aA = eb.length - 4; 0 <= aA; aA -= 4)
			if (dw = eb[aA], hS <= dw) return Math.floor(aA / (4 * hQ));
		return -1
	}(hW.getImageData(0, 0, hQ, hQ))) && (hV = (canvas - .5 * hQ + .1 * size) / size), Math.max(hV, 0)
}

function cz() {
	this.hY = new Int16Array(4), this.hZ = new Int16Array(4), this.dU = function() {
		var aA;
		for (this.hY[0] = -bQ.ej, this.hY[1] = 1, this.hY[2] = bQ.ej, this.hY[3] = -1, aA = 0; aA < 4; aA++) this.hZ[aA] = 4 * this.hY[aA]
	}, this.ha = function(gx, hb) {
		var hc = this.eg(hb) - this.eg(gx),
			hb = this.ei(hb) - this.ei(gx),
			gx = hc >>> 31 << 1;
		return 5 + gx + (1 - gx) * (1 - (hb >>> 31 << 1)) * (Math.abs(hc) - Math.abs(hb) >>> 31) & 3
	}, this.hh = function(gx, hb, hL) {
		return hL % 2 == 0 ? hL + (1 - hL) * (1 - (this.eg(hb) - this.eg(gx) >>> 31 << 1)) + 4 & 3 : hL + (2 - hL) * (1 - (this.ei(hb) - this.ei(gx) >>> 31 << 1)) + 4 & 3
	}, this.hj = function(g6, eK) {
		for (var hb, hk, hm = af.gF[g6], eY = hm.length, i = bQ.ej, hn = this.eg(eK), ho = this.ei(eK), ee = hm[0] >> 2, min = this.eq(hn, ho, ee), aA = 1; aA < eY; aA++)(hk = (hk = hn - (hb = hm[aA] >> 2) % i) * hk + (hk = ho - ~~((.5 + hb) /
			i)) * hk) < min && (min = hk, ee = hb);
		return ee
	}, this.hp = function(player, eC) {
		return !ab.eP(eC) && player === ab.eQ(eC)
	}, this.eq = function(gp, gr, eK) {
		return (gp -= this.eg(eK)) * gp + (gr -= this.ei(eK)) * gr
	}, this.hq = function(hr, hs, ht) {
		hr = this.hv(hr) - this.hw(ht), hs = this.hy(hs) - this.hz(ht);
		return Math.sqrt(hr * hr + hs * hs)
	}, this.i0 = function(gx, hb) {
		var hu = this.eg(gx) - this.eg(hb),
			gx = this.ei(gx) - this.ei(hb);
		return Math.sqrt(hu * hu + gx * gx)
	}, this.i1 = function(gx, hb) {
		var hu = this.eg(gx) - this.eg(hb),
			gx = this.ei(gx) - this.ei(hb);
		return hu * hu + gx * gx
	}, this.i2 = function(i3, i4, i5, i6) {
		return (i3 -= i5) * i3 + (i4 -= i6) * i4
	}, this.i7 = function(g6, i8) {
		return bJ.dl(i8 * af.ga[g6], 1e3)
	}, this.hv = function(hr) {
		return 16 * (hr + i9) / iA
	}, this.hy = function(hs) {
		return 16 * (hs + iB) / iA
	}, this.iC = function(eb) {
		return 16 * eb / iA
	}, this.gq = function(hr) {
		return Math.floor((hr + i9) / iA)
	}, this.gs = function(hs) {
		return Math.floor((hs + iB) / iA)
	}, this.gt = function(gp, gr) {
		return 1 <= gp && 1 <= gr && gp < bQ.ej - 1 && gr < bQ.ek - 1
	}, this.eg = function(eK) {
		return eK % bQ.ej
	}, this.ei = function(eK) {
		return bJ.dl(eK, bQ.ej)
	}, this.ew = function(gp, gr) {
		return gr * bQ.ej + gp
	}, this.iD = function(eK) {
		return this.ev(this.eg(eK), this.ei(eK))
	}, this.ev = function(gp, gr) {
		return 0 < gp && gp < bQ.ej - 1 && 0 < gr && gr < bQ.ek - 1
	}, this.eO = function(eK) {
		return eK << 2
	}, this.eM = function(eC) {
		return eC >> 2
	}, this.iE = function(eK) {
		return bQ.ej * this.ei(eK) * 256 + (this.eg(eK) << 4)
	}, this.iF = function(eK) {
		return this.iE(eK) + 8 + (bQ.ej << 7)
	}, this.iG = function(ht) {
		return bQ.ej * (this.hz(ht) >> 4) + (this.hw(ht) >> 4)
	}, this.iH = function(ht) {
		ht = this.iG(ht);
		return (this.eg(ht) >> 5) + bL.iI.iJ * (this.ei(ht) >> 5)
	}, this.hw = function(ht) {
		return ht % (bQ.ej << 4)
	}, this.hz = function(ht) {
		return bJ.dl(ht, bQ.ej << 4)
	}, this.iK = function(eK, hL) {
		return eK + this.hY[hL]
	}, this.iL = function(eC, hL) {
		return eC + this.hZ[hL]
	}, this.iM = function(player) {
		return this.ew(af.iN[player] + af.iO[player] >> 1, af.iP[player] + af.iQ[player] >> 1)
	}, this.iR = function(player) {
		return this.ew(aw.iS(af.iN[player], af.iO[player]), aw.iS(af.iP[player], af.iQ[player]))
	}
}

function cf() {
	this.iT = new iU, this.iV = new iW, this.iX = new iY, this.performance = new iZ, this.ia = new ib, this.ic = new ie, this.ig = new ih, this.dU = function() {
		this.iT.dU(), this.iX.dU(), this.performance.dU(), this.ia.dU(), this.ic.dU()
	}, this.ii = function() {
		this.performance.ii(), this.iT.ii()
	}
}

function ib() {
	var ij, il = new Uint16Array(8);

	function iv(size, player) {
		for (var aA = af.g0[player].length - 1; size <= aA; aA--) ab.j2(af.g0[player][aA], player)
	}
	this.dU = function() {
		ij = 0
	}, this.im = function(player, io) {
		return bM.eU[1] = af.g0[player].length, bM.eU[0] === aC.eV ? am.ia.ip(player) : this.iq(player, bM.eU[0]), (0 !== bM.eU[1] || 0 !== af.g0[player].length) && !(!io && bM.eU[1] === af.g0[player].length || (bM.eU[0] === aC.eV ? af.ir[
			player]++ : af.is[player]++, 0))
	}, this.it = function(player) {
		aC.hO && (am.ic.iu[player] = 1), iv(bM.eU[1], player), ac.iw(player, bM.f6[0], bM.eU[0]), aE.ix(player, !1)
	}, this.iy = function(player, iz, eY, hD) {
		var j0 = bJ.dl(12 * af.ga[player], 1024);
		hD -= hD >= bJ.dl(af.ga[player], 2) ? j0 : 0, iv(eY, player), ac.iw(player, hD, iz), af.ga[player] -= hD + j0, aE.ix(player, !1)
	}, this.iq = function(player, iz) {
		for (var hL, ea = ab.ea, aA = af.gE[player].length - 1; 0 <= aA; aA--)
			if (ab.j1(af.gE[player][aA]))
				for (hL = 3; 0 <= hL; hL--)
					if (ab.g8(af.gE[player][aA] + ea[hL]) && ab.eQ(af.gE[player][aA] + ea[hL]) === iz) {
						af.g0[player].push(af.gE[player][aA]);
						break
					}
	}, this.ip = function(player) {
		for (var ea = ab.ea, aA = af.gE[player].length - 1; 0 <= aA; aA--)
			if (ab.j1(af.gE[player][aA]))
				for (var hL = 3; 0 <= hL; hL--)
					if (ab.eP(af.gE[player][aA] + ea[hL])) {
						af.g0[player].push(af.gE[player][aA]);
						break
					}
	}, this.j3 = function(player, j4) {
		var aA, er, hL, hN, eY = af.gE[player].length,
			hi = 256 <= eY ? 12 : 32 <= eY ? 6 : 1,
			j5 = eY - 1 - aw.j6(hi),
			ea = ab.ea;
		ij = 0;
		loop: for (aA = j5; 0 <= aA; aA -= hi)
			for (hL = 3; 0 <= hL; hL--)
				if ((hN = ab.eP(af.gE[player][aA] + ea[hL]) ? aC.eV : ab.eQ(af.gE[player][aA] + ea[hL])) === aC.eV || ab.g8(af.gE[player][aA] + ea[hL]) && hN !== player && (j4 || eR(player, hN))) {
					for (er = ij - 1; 0 <= er; er--)
						if (il[er] === hN) continue loop;
					if (il[ij] = hN, 8 <= ++ij) return !0
				}
		return 0 < ij
	}, this.j7 = function(player, j4) {
		var aA, hL, hN, ea = ab.ea;
		for (ij = 0, aA = af.gE[player].length - 1; 0 <= aA; aA--)
			for (hL = 3; 0 <= hL; hL--)
				if ((hN = ab.eP(af.gE[player][aA] + ea[hL]) ? aC.eV : ab.eQ(af.gE[player][aA] + ea[hL])) === aC.eV || ab.g8(af.gE[player][aA] + ea[hL]) && hN !== player && (j4 || eR(player, hN))) return il[ij++] = hN, !0;
		return !1
	}, this.j8 = function() {
		for (var es, aA = ij - 1; 0 <= aA; aA--)
			if (il[aA] === aC.eV) {
				for (ij--, es = aA; es < ij; es++) il[es] = il[es + 1];
				return !0
			} return !1
	}, this.j9 = function(player) {
		for (var es, aA = ij - 1; 0 <= aA; aA--)
			if (ac.jA(player, il[aA]))
				for (ij--, es = aA; es < ij; es++) il[es] = il[es + 1];
		return 0 === ij
	}, this.jB = function() {
		for (var aA = ij - 1; 0 <= aA; aA--)
			if (b8.fu.jC(il[aA])) return !0;
		return !1
	}, this.jD = function() {
		for (var aA = ij - 1; 0 <= aA; aA--) b8.fu.jC(il[aA]) || (il[aA] = il[--ij]);
		return 0 < ij
	}, this.jE = function(player) {
		for (var es, jF = il[0], jG = af.ga[jF] + ac.gb(jF, player), aA = ij - 1; 1 <= aA; aA--)(es = af.ga[il[aA]] + ac.gb(il[aA], player)) < jG && (jF = il[aA], jG = es);
		return jF
	}, this.jH = function(player) {
		var j, jI = il[0];
		if (1 !== ij)
			for (var jJ = bJ.dl(af.iO[player] + af.iN[player], 2), jK = bJ.dl(af.iQ[player] + af.iP[player], 2), eo = jL(jJ - bJ.dl(af.iO[jI] + af.iN[jI], 2)) + jL(jK - bJ.dl(af.iQ[jI] + af.iP[jI], 2)), aA = ij - 1; 1 <= aA; aA--)(j = jL(jJ - bJ
				.dl(af.iO[il[aA]] + af.iN[il[aA]], 2)) + jL(jK - bJ.dl(af.iQ[il[aA]] + af.iP[il[aA]], 2))) < eo && (eo = j, jI = il[aA]);
		return jI
	}, this.jM = function() {
		for (var jN = il, jO = jN[0], ga = af.ga, jP = ga[jO], aA = ij - 1; 1 <= aA; aA--) {
			var g6 = jN[aA],
				es = ga[g6];
			jP < es && (jO = g6, jP = es)
		}
		return jO
	}, this.jQ = function() {
		return il[aw.j6(ij)]
	}
}

function ie() {
	function jf(player, iz, jV) {
		3 <= jV && 2142 < bd.jl() && (iz === aC.eV || af.ga[iz] < bJ.dl(af.ga[player], 20)) && aD.ja(player, 20)
	}

	function ji(player, hD, iz, jV) {
		3 <= jV && jV < 6 && bJ.dl(af.ga[player], 8) > af.ga[iz] && (hD = Math.max(bJ.dl(11 * af.ga[iz], 5), bJ.dl(af.ga[player], 10)));
		jV = af.g0[player].length;
		am.ia.iq(player, iz), am.ia.iy(player, iz, jV, hD)
	}

	function je(player, hD) {
		var iz = aC.eV,
			eY = af.g0[player].length;
		am.ia.ip(player), af.g0[player].length !== eY && am.ia.iy(player, iz, eY, hD)
	}
	this.iu = new Uint8Array(aC.eV), this.dU = function() {
		this.iu.fill(0)
	}, this.jR = function(player, hD) {
		var jT, jV, jW, jX;
		ac.jS(player) && (jT = ad.jU(player), 3 <= (jV = aD.hD[player]) && jV < 6 && (hD = Math.max(af.ga[player] - jT, hD)), jW = af.gF[player].length, jX = af.gE[player].length, 30 * af.gM[player] > aC.jY && jZ[player] < 10 && 100 * jX <= jW &&
			aD.ja(player, 10), aC.hO ? function(player, hD, jV, jT) {
				var iz;
				if (am.ic.iu[player] = 1, am.ia.j3(player, !1) || am.ia.j7(player, !1)) {
					if (!am.ia.j9(player))
						if (am.ia.j8()) je(player, hD), jf(player, aC.eV, jV);
						else {
							if (aw.jg(aD.jh[jV])) iz = am.ia.jE(player);
							else {
								if (am.ia.jB() && aw.jg(aD.jj[jV]) && am.ia.jD(), 6 === jV) return ji(player, hD, am.ia.jQ(), jV);
								iz = am.ia.jH(player)
							}
							ji(player, hD, iz, jV), jf(player, iz, jV)
						}
				} else bL.jc.ii(player) || am.ig.ii(player) || (am.ic.iu[player] = 0, function(player, hD, jV, jT) {
					var aA, es, et, eW = be.eW,
						jm = eW[player];
					if (0 !== jm) {
						var jn = af.ga[player],
							gM = af.gM;
						if (player < aC.jo && (hD = jn), !(jn < gM[player] || 5 === jV && jn < jT || 4 === jV && jn < bJ.dl(jT, 2))) {
							var eY = ak.jp,
								jq = ak.jq,
								iu = (aA = aw.j6(eY), am.ic.iu);
							for (es = 0; es < eY; es++)
								if (et = jq[(es + aA) % eY], 1 === iu[et] && eW[et] === jm) return b6.jr.js(player, et, hD)
						}
					}
				}(player, hD, jV, jT))
			}(player, hD, jV, jT) : (!jX || jW && (jW < jX && !aw.j6(10) || 100 * jX <= jW && aw.j6(3) || !aw.j6(8))) && bL.jc.ii(player) || function(player, hD, jV) {
				am.ia.j3(player, !0) || am.ia.j7(player, !0) ? am.ia.j9(player) || (am.ia.j8() ? je(player, hD) : aw.jg(aD.jh[jV]) ? ji(player, hD, am.ia.jE(player), jV) : 5 === jV ? ji(player, hD, am.ia.jM(), jV) : (am.ia.jB() && aw.jg(aD
					.jj[jV]) && am.ia.jD(), ji(player, hD, 6 === jV ? am.ia.jQ() : am.ia.jH(player), jV))) : am.ig.ii(player)
			}(player, hD, jV))
	}
}

function c0() {
	var jt = new Uint8Array(aC.eV),
		ju = new Uint16Array(aC.eV),
		jv = new Uint16Array(aC.eV),
		jw = new Uint8Array(aC.eV),
		jx = (this.hD = new Uint8Array(aC.eV), new Uint16Array(aC.eV)),
		jy = new Uint16Array(aC.eV);

	function kC(aA) {
		jt[aA] = 1 + bJ.dl(jx[aA] * aw.random(), 10 * aw.value(100))
	}
	this.jz = null, this.jj = [97, 94, 70, 40, 20, 0, 100], this.k0 = [500, 450, 400, 300, 80, 50, 100], this.jh = [0, 0, 5, 25, 50, 100, 0], this.k1 = [60, 74, 112, 200, 256, 512, 512], this.k2 = [1, 2, 3, 4, 6, 8, 1], this.k3 = [500, 450, 400, 300,
		80, 50, 100
	], this.dV = function() {
		this.jz = [L(7), L(8), L(9), L(10), L(11), L(12), "H Bot"]
	}, this.dU = function() {
		jt.fill(0), ju.fill(0), jv.fill(0), jw.fill(0), this.hD.fill(0), jx.fill(0), jy.fill(0);
		var k4 = aC.jo;
		if (9 === aC.k5) this.k6();
		else if (__fx.customLobby.isActive())
			for (aA = aC.k9 - 1; 0 <= aA; aA--) this.hD[aA + k4] = __fx.customLobby.gameInfo.difficulty;
		else if (aC.k7)
			if (3 === aC.data.botDifficultyType)
				for (aA = aC.k9 - 1; 0 <= aA; aA--) {
					var hM = aA + k4;
					this.hD[hM] = aC.data.botDifficultyData[hM]
				} else if (2 === aC.data.botDifficultyType)
					for (aA = aC.k9 - 1; 0 <= aA; aA--) this.hD[hM = aA + k4] = aC.data.botDifficultyTeam[be.kA[be.eW[hM]]];
				else if (1 === aC.data.botDifficultyType) {
			var kB = this.jz.length;
			for (aA = aC.k9 - 1; 0 <= aA; aA--) this.hD[aA + k4] = aA % kB
		} else
			for (kB = aC.data.botDifficultyValue, aA = aC.k9 - 1; 0 <= aA; aA--) this.hD[aA + k4] = kB;
		else
			for (var k8 = 8 === aC.k5 ? 1 : 0, aA = aC.k9 - 1; 0 <= aA; aA--) this.hD[aA + k4] = k8;
		for (aA = 0; aA < k4; aA++) this.hD[aA] = 6;
		var eY = aC.eV;
		for (aA = 0; aA < eY; aA++) this.hD[aA] <= 2 ? (jw[aA] = 5, jx[aA] = jy[aA] = 1040, 0 === this.hD[aA] ? (ju[aA] = 980, jv[aA] = 980) : 1 === this.hD[aA] ? (ju[aA] = 980, jv[aA] = 920, jx[aA] = jy[aA] = 1100) : (ju[aA] = 825, jv[aA] =
			750)) : this.hD[aA] <= 4 ? (jw[aA] = 1 + aw.j6(20), 3 === this.hD[aA] ? (ju[aA] = jv[aA] = 500, jx[aA] = jy[aA] = 1e3) : (jy[aA] = 250 + aw.j6(1501), jx[aA] = 500 + aw.j6(501), ju[aA] = 300 + aw.j6(201), jv[aA] = 100 + aw.j6(
			201))) : this.hD[aA] <= 5 ? (jx[aA] = 1e3, jy[aA] = 1e3, jw[aA] = 35 + aw.j6(16), ju[aA] = 300 + aw.j6(201), jv[aA] = 50 + aw.j6(101)) : (jx[aA] = jy[aA] = 800, jw[aA] = 5, ju[aA] = 10, jv[aA] = 250), kC(aA)
	}, this.k6 = function() {
		for (var eC = ax.kD, k4 = aC.jo, aA = eC - 1; 0 <= aA; aA--) this.hD[aA + k4] = 0;
		for (var es = 0; es < 6; es++) {
			for (aA = eC + ax.kE[es] - 1; eC <= aA; aA--) this.hD[aA + k4] = es;
			eC += ax.kE[es]
		}
	}, this.ja = function(g6, value) {
		jt[g6] = Math.min(value, jt[g6])
	}, this.ii = function(g6) {
		0 == --jt[g6] && ! function(g6) {
			(function(g6) {
				jx[g6] !== jy[g6] && (jx[g6] += jx[g6] < jy[g6] ? 3 : -3);
				ju[g6] !== jv[g6] && (ju[g6] += ju[g6] < jv[g6] ? jw[g6] : -jw[g6], ju[g6] = (Math.abs(ju[g6] - jv[g6]) <= jw[g6] ? jv : ju)[g6]);
				jt[g6] = bJ.dl(jx[g6], 10)
			})(g6), am.ic.jR(g6, bJ.dl(ju[g6] * af.ga[g6], 1e3))
		}(g6)
	}, this.kH = function(g6, g1) {
		jx[g6] = jy[g6] = g1
	}
}

function iY() {
	var kI = new Uint16Array(aC.eV);

	function kN(player, kL) {
		for (var eY = bM.f4[0], fB = bM.fB, kX = -1, kY = aC.eV, aA = 0; aA < eY; aA++) {
			var eo, g6 = fB[aA];
			eR(player, g6) && (eo = bK.i1(kL, bK.iM(g6)), -1 === kX || eo < kX) && (kX = eo, kY = g6)
		}
		return kY
	}

	function kP(kM, kL) {
		if (kM === aC.eV) return 0;
		for (var gF = af.gF[kM], kW = gF.length, eY = Math.min(kW, 10), kY = 0, kX = bK.i1(gF[kY] >> 2, kL), aA = 0; aA < eY; aA++) {
			var hM = aw.j6(kW),
				eo = bK.i1(gF[hM] >> 2, kL);
			eo < kX && (kX = eo, kY = hM)
		}
		return gF[kY] >> 2
	}

	function kS(player, kL, iz, kb) {
		var kc;
		(kb === aC.eV || (kc = bK.iM(iz), kb = bK.iM(kb), bK.i1(kL, kc) < bK.i1(kL, kb))) && (kI[player] = iz)
	}
	this.dU = function() {
		kI.fill(aC.eV)
	}, this.ii = function(player) {
		var kL, kO, kM, iz = function(player) {
			var iz = kI[player];
			if (iz !== aC.eV) {
				if (b8.fu.ka(iz)) return iz;
				kI[player] = aC.eV
			}
			return aC.eV
		}(player);
		return function(player) {
			for (var kV = ak.jq, kW = ak.jp, eY = Math.min(kW, kW < 17 && 5 === aw.j6(20) ? 1 : 16), g7 = aw.j6(kW), fB = bM.fB, gF = af.gF, g1 = 0, aA = 0; aA < eY; aA++) {
				var g6 = kV[(aA + g7) % kW];
				g6 !== player && gF[g6].length && (fB[g1++] = g6)
			}
			bM.f4[0] = g1
		}(player), 0 !== bM.f4[0] && (0 < (kO = kP(kM = kN(player, kL = bK.iR(player)), kL)) && bL.kQ.kR(player, kO) ? (kS(player, kL, kM, iz), !0) : 0 < (kM = function(player, kL) {
			for (var eY = bM.f4[0], fB = bM.fB, kZ = kI, g7 = 0, aA = 0; aA < eY; aA++) {
				var g6 = fB[aA],
					g6 = kZ[g6];
				g6 !== aC.eV && b8.fu.ka(g6) && player !== g6 && eR(player, g6) && (fB[g7++] = g6)
			}
			return 0 !== (bM.f4[0] = g7) ? kP(kN(player, kL), kL) : 0
		}(player, kL)) && bL.kQ.kR(player, kM) ? (kS(player, kL, ab.eQ(kM << 2), iz), !0) : !!(0 < (kO = kP(iz, kL)) && bL.kQ.kR(player, kO)))
	}
}

function ih() {
	function kg(player) {
		for (var ey = af.ey[player], eY = ey.length, ez = Math.max(bJ.dl(eY, 12), 1), ea = ab.ea, dw = aw.j6(eY), aA = 0; aA < eY; aA += ez)
			for (var eN = ey[(aA + dw) % eY], eb = 3; 0 <= eb; eb--) {
				var ec = eN + ea[eb];
				if (ab.ed(ec)) return {
					eC: ec,
					id: ab.eG(ec),
					g6: player
				}
			}
		return null
	}

	function kl(player, ko) {
		var hD = b8.fu.kp(player, aD.k3[aD.hD[player]]);
		af.g0[player].push(ko.eC), ac.iw(player, hD, ko.g6), aE.ix(player, !0)
	}
	this.ii = function(player) {
		return !!bQ.eD(bQ.eE) && !!aC.data.passableMountains && 0 !== af.ey[player].length && function(player) {
			var kf = kg(player);
			if (null === kf) return !1;
			! function(player) {
				for (var jq = ak.jq, jp = ak.jp, eY = Math.min(jp, 12), g7 = aw.j6(jp), fB = bM.fB, ey = af.ey, g1 = 0, aA = 0; aA < eY; aA++) {
					var g6 = jq[(aA + g7) % jp];
					g6 !== player && ey[g6].length && eR(player, g6) && (fB[g1++] = g6)
				}
				bM.f4[0] = g1
			}(player);
			var ki = function(eF) {
				for (var eY = bM.f4[0], fB = bM.fB, aA = 0; aA < eY; aA++) {
					var ko = kg(fB[aA]);
					if (null !== ko && ko.id === eF) return ko
				}
				return null
			}(kf.id);
			return null !== ki ? (kl(player, ki), !0) : function(player, eF) {
				var eY = am.iT.km;
				if (0 !== eY)
					for (var eC = am.iT.kn[aw.j6(eY)] << 2, ea = ab.ea, eb = aw.j6(4);;) {
						if (eC += ea[eb], ab.ed(eC)) {
							if (ab.eG(eC) === eF) return kl(player, {
								eC: eC,
								g6: aC.eV
							}), !0;
							break
						}
						if (!ab.eP(eC)) break
					}
				return !1
			}(player, kf.id)
		}(player)
	}
}

function iW() {
	this.ii = function(player) {
		var eK = function(player) {
			var eY = am.iT.km;
			if (0 === eY) return -1;
			for (var kW = Math.min(eY, am.performance.kr ? eY : 10), kn = am.iT.kn, j5 = bJ.dl(aw.random() * eY, aw.value(100)), e = j5 + kW, ks = aw.iS(af.iN[player], af.iO[player]), kt = aw.iS(af.iP[player], af.iQ[player]), kY = -1, eo = bK
					.i2(0, 0, bQ.ej, bQ.ek), aA = j5; aA < e; aA++) {
				var g7 = aA % eY,
					ku = bK.eq(ks, kt, kn[g7]);
				ku < eo && (eo = ku, kY = g7)
			}
			return -1 !== kY ? kn[kY] : -1
		}(player);
		return -1 !== eK && bL.kQ.kR(player, eK)
	}
}

function iZ() {
	this.kr = 0, this.dU = function() {
		this.kr = 0
	}, this.ii = function() {
		if (!this.kr && bd.jl() % 30 == 7 && b8.fu.kx(80) && (am.performance.kr = 1)) {
			if (aC.hO) {
				var l0 = bf.l1();
				if (be.kA[l0]) {
					bf.l2(l0);
					var g = bM.fC,
						eY = bM.f4[0];
					if (0 !== eY)
						for (var l3 = Math.min(100 + 10 * (eY - 1), 400), aA = 0; aA < eY; aA++) aD.kH(g[aA], l3)
				}
			}
			aD.kH(l4[0], 100)
		}
	}
}

function iU() {
	var l5 = 0,
		l6 = 0,
		l7 = 300,
		l8 = 300;
	this.km = 0, this.kn = new Uint32Array(512), this.dU = function() {
		l6 = l5 = 0, this.km = 0
	}, this.ii = function() {
		if (function() {
				var eY = am.iT.km;
				if (0 === eY) return 1;
				var kn = am.iT.kn;
				if (bd.jl() % 35 == 6) {
					for (var aA = eY - 1; 0 <= aA; aA--) ab.eP(kn[aA] << 2) || (eY--, kn[aA] = kn[eY]);
					am.iT.km = eY
				}
				return eY < kn.length
			}())
			if (l7 <= l5) am.iT.km || bd.jl() % 12 != 8 || b8.fu.lC() || am.iT.dU();
			else {
				var aA, i = bQ.ej,
					lD = i - 2,
					eY = lD * (bQ.ek - 2),
					lE = l7,
					kn = am.iT.kn,
					kW = am.iT.km,
					lF = kn.length,
					g7 = Math.min(l6 + lE * ((1 + 19 * am.performance.kr) * l8), eY);
				for (aA = l6; aA < g7; aA += lE) {
					var eC = 4 * (aA % lD + (bJ.dl(aA, lD) + 1) * i + 1);
					if (ab.eP(eC) && (kn[kW] = eC >> 2, ++kW === lF)) {
						aA += lE;
						break
					}
				}(l6 = aA) >= eY && (l6 = ++l5), am.iT.km = kW
			}
	}
}

function lG() {
	aM.ii(), ae.ii(), aV.lH(), ay.x.ii()
}

function lI() {
	az.ii(), aF.ii(), ad.ii(), b2.ii(), aE.ii(), am.ii(), bL.x.ii(), ak.lJ(), aU.ii(), ax.ii(), bT.ii(), ae.ii(), ae.lK(), aV.ii(), bN.ii(), aT.ii(), aO.ii(), aM.ii(), b3.ii(), aQ.ii(), au.ii(), bb.ii(), bf.ii(), ay.x.ii(), ay.lL.ii(), s.ii(), b7
	.ii(), bd.ii()
}

function lM() {
	aG.ii(), aW.ii(), aP.ii(), at.ii(), bA.ii(), av.lN()
}

function lO() {
	aU.lP(!1), aO.lP(), aV.lP(!1), aT.lP(), aQ.lP(), au.lP(), ae.lP(!1), bf.lQ()
}

function lR() {
	ae.lP(!1) && (bd.dc = !0), ay.x.ii()
}

function c1() {
	var lS, lT, lU;

	function lW(lY) {
		for (var aA = lS - 1; 0 <= aA; aA--) 0 === lU[lT[aA]] && af.gM[lT[aA]] >= lY && fb(lT[aA])
	}

	function lV(player) {
		var dk;
		64 === lU[player] ? lU[player] = 6 : (dk = af.gM[player], lU[player] = dk < 1e3 ? 3 : dk < 1e4 ? 2 : dk < 6e4 ? 1 : 0)
	}
	this.dU = function() {
		lS = 0, lT = new Uint16Array(aC.eV), lU = new Uint8Array(aC.eV)
	}, this.ii = function() {
		for (var aA = lS - 1; 0 <= aA; aA--) 64 === lU[lT[aA]] ? lV(lT[aA]) : 0 == lU[lT[aA]]-- && (lV(lT[aA]), fb(lT[aA]));
		16e4 <= af.gM[l4[0]] && (lW(16e4), 3e5 <= af.gM[l4[0]]) && lW(3e5), b8.fu.ka(aC.eI) && (bb.lZ[7] = Math.max(af.gM[aC.eI], bb.lZ[7]))
	}, this.fw = function(player) {
		for (var er, aA = lS - 1; 0 <= aA; aA--)
			if (player === lT[aA]) {
				for (lS--, er = aA; er < lS; er++) lT[er] = lT[er + 1];
				return
			}
	}, this.ix = function(player, la) {
		for (var aA = lS - 1; 0 <= aA; aA--)
			if (player === lT[aA]) return;
		lT[lS++] = player, lU[player] = la ? 2 : 64
	}
}

function c2() {
	var size, jc;
	this.dU = function() {
		size = aC.k9, jc = new Uint16Array(aC.eV);
		for (var jo = aC.jo, aA = aC.k9 - 1; 0 <= aA; aA--) jc[aA] = jo + aA
	}, this.ii = function() {
		for (var aA = size - 1; 0 <= aA; aA--)
			if (0 === af.ld[jc[aA]]) {
				er = void 0;
				var er = aA;
				size--, jc[er] = jc[size]
			} else aD.ii(jc[aA])
	}, this.lc = function(g6) {
		jc[size++] = g6
	}
}

function c3() {
	var lf, lg, lh, li, lj, lk, ll, lm, ln, lo, lp, lq, lr, ls = !1,
		lt = !1;

	function lu(lv) {
		lq = bd.e7, lh = li = lg = 0, lj = (lr = 33) / lv, lf = 1 / (lv / lr / 4), lk = (h.i / 2 + i9) / iA, ll = (h.j / 2 + iB) / iA, lm = iA
	}

	function m2(aA) {
		var m5; - 1 !== aA && (aA = bK.iG(bL.x.m4[aA]), m5 = bK.eg(aA) - 10, aA = bK.ei(aA) - 10, aG.ly(m5, aA, 19 + m5, 19 + aA))
	}

	function mG(e1) {
		Math.abs(Math.log(lp / lm)) < .125 && (lp = e1 * lm)
	}

	function mF(m5, m6, mI, mJ) {
		ln = (m5 + mI + 1) / 2, lo = (m6 + mJ + 1) / 2;
		mI = h.i / (mI - m5 + 1), m5 = h.j / (mJ - m6 + 1);
		lp = .9 * (mI < m5 ? mI : m5)
	}
	this.lw = function() {
		return ls
	}, this.lx = function() {
		lu(1), this.ly(0, 0, bQ.ej - 1, bQ.ek - 1), aC.gu || aC.gi || this.lz(aC.eI, 3e3, !0, .3)
	}, this.m0 = function(player, m1) {
		m2(bL.h2.m3(player, m1))
	}, this.lz = function(player, lv, m7, zoom) {
		aC.m8 || ls && !m7 && lt || (0 === af.gM[player] ? m2(bL.h2.m9(player)) : (aR.mA = !1, lt = m7, lu(lv), function(player) {
			ln = (af.iN[player] + af.iO[player] + 1) / 2, lo = (af.iP[player] + af.iQ[player] + 1) / 2
		}(player), function(zoom, player) {
			var hu = af.iO[player] - af.iN[player] + 1,
				player = af.iQ[player] - af.iP[player] + 1,
				er = h.i / hu,
				es = h.j / player,
				er = (lp = er < es ? er : es, 0 !== zoom ? zoom : hu < 20 && player < 20 ? .5 : .9);
			lp *= er, mG(7 / 8)
		}(zoom, player), ls = !0, ap.mD()))
	}, this.mE = function(lv) {
		aC.gi || aC.m8 || (aR.mA = !1, lt = !1, lu(lv), mF(0, 0, bQ.ej - 1, bQ.ek - 1), mG(7 / 8), ls = !0, ap.mD())
	}, this.ly = function(m5, m6, mI, mJ) {
		mF(m5, m6, mI, mJ), iA = lp, aR.mK(ln, h.i / 2), aR.mL(lo, h.j / 2), bY.mM(), bd.dc = !0
	}, this.mN = function() {
		return !(ls && lt || (ls = !1))
	}, this.ii = function() {
		var mQ, mR, eb, mU;
		ls && (lg < .5 ? li < lj && (li += lj * lf, lh = lg) : 1 - lh < lg && (li = (li -= lj * lf) < lj * lf ? lj * lf : li), lq = lq >= bd.e7 ? bd.e7 - 1 : lq, eb = bd.e7 - lq, lg = 1e3 < eb || 1 < (lg += li * eb / lr) ? 1 : lg, lq = bd.e7,
			eb = iA, mQ = i9, mR = iB, eb = (iA = lm * Math.pow(lp / lm, lg)) / eb, mU = 1 - (lm * Math.pow(lp / lm, 1 - lg) - lm) / (lp - lm), aR.mK(lk + mU * (ln - lk), h.i / 2), aR.mL(ll + mU * (lo - ll), h.j / 2), ae.zoom(eb, (mQ * eb -
				i9) / (1 - eb), (mR * eb - iB) / (1 - eb)), bY.mM(), 1 <= lg && (ls = !1, bZ.mV = !0), bd.dc = !0)
	}
}

function bv() {
	var et = b8.color;
	this.mW = et.mX(0, 0, 0), this.mY = et.mZ(0, 0, 0, .7), this.ma = et.mZ(0, 0, 0, .5), this.mb = et.mZ(0, 0, 0, .85), this.mc = et.mZ(0, 0, 0, .75), this.md = et.mZ(0, 0, 0, .6), this.me = et.mZ(0, 0, 0, .35), this.mf = et.mX(255, 255, 255), this
		.mg = et.mZ(255, 255, 255, .3), this.mh = et.mZ(255, 255, 255, .6), this.mi = et.mZ(255, 255, 255, .4), this.mj = et.mZ(255, 255, 255, .25), this.mk = et.mZ(255, 255, 255, .85), this.ml = et.mZ(255, 255, 255, .75), this.mm = et.mZ(255, 255,
			255, .15), this.mn = et.mZ(255, 255, 255, .11), this.mo = et.mX(128, 128, 128), this.mp = et.mZ(64, 64, 64, .75), this.mq = et.mZ(88, 88, 88, .83), this.mr = et.mZ(60, 60, 60, .85), this.ms = et.mZ(80, 60, 60, .85), this.mt = et.mX(170,
			170, 170), this.mu = et.mX(200, 235, 245), this.mv = et.mX(30, 255, 30), this.mw = et.mX(0, 200, 0), this.mx = et.mX(128, 255, 128), this.my = et.mZ(10, 65, 10, .75), this.mz = et.mZ(0, 255, 0, .6), this.n0 = et.mZ(0, 255, 0, .5), this
		.n1 = et.mZ(0, 200, 0, .5), this.n2 = et.mZ(0, 100, 0, .75), this.n3 = et.mZ(0, 60, 0, .8), this.n4 = et.mZ(0, 255, 0, .3), this.n5 = et.mZ(0, 180, 0, .6), this.n6 = et.mZ(0, 120, 0, .85), this.n7 = et.mX(0, 120, 0), this.n8 = et.mZ(0, 70, 0,
			.85), this.n9 = et.mX(190, 230, 190), this.nA = et.mX(0, 255, 0), this.nB = et.mX(255, 120, 120), this.nC = et.mX(255, 160, 160), this.nD = et.mX(255, 70, 70), this.nE = et.mX(230, 0, 0), this.nF = et.mZ(220, 0, 0, .6), this.nG = et.mZ(
			255, 100, 100, .8), this.nH = et.mZ(100, 0, 0, .85), this.nI = et.mZ(60, 0, 0, .85), this.nJ = et.mZ(200, 0, 0, .6), this.nK = et.mZ(120, 0, 0, .85), this.nL = et.mX(255, 70, 10), this.nM = et.mX(230, 190, 190), this.nN = et.mX(255, 0,
		0), this.nO = et.mX(255, 0, 255), this.nP = et.mZ(60, 0, 60, .85), this.nQ = et.mZ(0, 60, 60, .85), this.nR = et.mZ(10, 60, 60, .9), this.nS = et.mZ(0, 96, 96, .75), this.nT = et.mX(0, 255, 255), this.nU = et.mX(160, 160, 255), this.nV = et
		.mZ(0, 40, 90, .75), this.nW = et.mZ(0, 0, 255, .6), this.nX = et.mX(200, 200, 255), this.nY = et.mX(255, 120, 100), this.nZ = et.mZ(255, 255, 0, .5), this.na = et.mZ(255, 255, 150, .2), this.nb = et.mX(255, 255, 0), this.nc = et.mX(255, 255,
			200), this.nd = et.mZ(200, 200, 0, .6), this.ne = et.mZ(140, 120, 0, .75), this.nf = et.mZ(180, 160, 40, .75), this.ng = et.mZ(70, 50, 20, .85), this.nh = et.mZ(30, 30, 0, .85), this.ni = et.mZ(60, 60, 0, .85), this.nj = et.mZ(255, 140,
			0, .75), this.nk = et.mZ(70, 40, 0, .85), this.nl = et.mX(255, 150, 0), this.nm = et.mZ(0, 0, 0, 0), this.nn = et.mZ(255, 255, 255, 0), this.no = et.mZ(254, 254, 254, 0)
}

function cs() {
	this.gv = new np, this.fu = new nq, this.nr = new ns, this.nt = new nu, this.jr = new nv
}

function np() {
	this.gw = function(eK) {
		aC.k7 ? b6.nr.gw(aC.eI, eK) : ay.nw.nx(eK)
	}, this.h6 = function(i8, iz) {
		aC.k7 ? b6.nr.h6(aC.eI, i8, iz) : ay.nw.ny(i8, iz)
	}, this.nz = function(i8, o0) {
		aC.k7 ? b6.nr.o1(aC.eI, i8, o0) : ay.nw.o2(i8, o0)
	}, this.h4 = function(i8, eK) {
		aC.k7 ? b6.nr.h4(aC.eI, i8, eK) : bL.h2.h3(aC.eI, eK) && ay.nw.o3(i8, eK)
	}, this.o4 = function(m1, eK) {
		aC.k7 ? b6.nr.o4(aC.eI, m1, eK) : bL.h2.o5(aC.eI, m1, eK) && ay.nw.o6(m1, eK)
	}, this.o7 = function(iz) {
		aC.k7 ? b6.nr.o7(aC.eI, iz) : ay.nw.o8(iz)
	}, this.o9 = function(oA) {
		aC.k7 ? b6.nr.oB(aC.eI, oA) : ay.nw.oC(oA)
	}, this.hI = function(oD) {
		aC.k7 ? b6.nr.hI(aC.eI, oD) : ay.nw.oE(oD)
	}, this.oF = function() {
		aC.k7 ? b6.nr.oF(aC.eI) : ay.nw.oG()
	}, this.hF = function() {
		aC.k7 ? b6.nr.hF(aC.eI) : ay.nw.o3(1, 0)
	}, this.gz = function(i8, eK, iz) {
		aC.k7 ? b6.nr.gz(aC.eI, i8, eK, iz) : ay.nw.oH(i8, eK, iz)
	}
}

function nv() {
	this.js = function(player, o0, hD) {
		b8.fu.oI(player, hD, o0) && (ad.nz(player, o0), o0 < aC.jo) && aw.random() < aw.value(10) && (am.ic.iu[o0] = 0)
	}, this.oJ = function(player, o0, hD) {
		b8.fu.oK(hD, o0) ? (b8.fu.fx(o0, bM.f6[0]), bb.oL(player, o0), ae.oM(o0, bM.f6[0])) : bb.fy(player, hD, 12)
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
		aC.k7 || aC.gi || ay.oX.oW()
	}
}

function nu() {
	this.ii = function(aB) {
		var id, fG, mN;
		for (bF.dU(aB), bF.dx += 2, mN = 8 * bF.size; bF.dx + 8 <= mN;) id = bF.oY(4), fG = bF.oY(9), 0 === id ? this.oZ(id, fG, bF.oY(22)) : 1 === id ? this.oZ(id, fG, bF.oY(10), bF.oY(10)) : 2 === id ? this.oZ(id, fG, bF.oY(10), bF.oY(9)) :
			3 === id || 4 === id ? this.oZ(id, fG, bF.oY(10), bF.oY(22)) : 5 === id || 6 === id ? this.oZ(id, fG, bF.oY(10)) : 7 === id ? this.oZ(id, fG, bF.oY(1)) : 10 === id ? this.oZ(id, fG, bF.oY(20), bF.oY(22)) : this.oZ(id, fG)
	}, this.oa = [], this.ob = function() {
		for (var od = 0, oe = 0, og = 0, oh = 0, oi = 0, oj = 0, aA = 0; aA < 512; aA++) od += af.ld[aA], oe += af.gM[aA], og += af.ga[aA], oh += bL.x.ok[aA];
		oi += bL.x.ol, oj += ak.jp, this.oa.push(og % 1073741824 * 4 + (od + oe + oh + oi + oj) % 4)
	}, this.oZ = function(id, fG, fI, fK) {
		0 === id ? b6.nr.gw(fG, fI) : 1 === id ? b6.nr.h6(fG, fI, fK) : 2 === id ? b6.nr.o1(fG, fI, fK) : 3 === id ? b6.nr.h4(fG, fI, fK) : 4 === id ? b6.nr.o4(fG, fI, fK) : 5 === id ? b6.nr.o7(fG, fI) : 6 === id ? b6.nr.oB(fG, fI) : 7 === id ?
			b6.nr.hI(fG, fI) : 8 === id ? b6.nr.oF(fG) : 9 === id ? b6.nr.om(fG) : 10 === id && b6.nr.gz(fG, fI >> 10, fK, fI % 1024)
	}
}

function ns() {
	this.gw = function(player, eK) {
		b8.fu.gk(0) && b8.fu.gl(player) && bK.iD(eK) && (b7.on.oo(0, player, eK), aC.op.iw(player, eK))
	}, this.h6 = function(player, i8, iz) {
		b8.fu.gk(1) && b8.fu.gl(player) && b8.fu.oq(player, iz) && b8.fu.or(player, i8, 12, 0) && b8.fu.os(player, iz) && ((iz = ac.jA(player, bM.eU[0])) || ac.jS(player)) && (af.ot[player]++, b7.on.oo(1, player, i8, bM.eU[0]), am.ia.im(player,
			iz)) && (b8.fu.ou(player), bb.ov(player, i8), am.ia.it(player))
	}, this.o1 = function(player, i8, o0) {
		b8.fu.gk(1) && b8.fu.gl(player) && aC.hO && b8.fu.oq(player, o0) && b8.fu.ow(player, o0) && b8.fu.oI(player, b8.fu.i7(player, i8), o0) && (b7.on.oo(2, player, i8, o0), ad.nz(player, o0))
	}, this.h4 = function(player, i8, eK) {
		b8.fu.gk(1) && b8.fu.gl(player) && (0 === eK && 1 === i8 ? this.hF(player) : bK.iD(eK) && bL.x.ol !== bL.x.k2 && bL.x.ok[player] !== bL.x.ox && 0 !== af.gF[player].length && b8.fu.or(player, i8, 32, 0) && bL.kQ.kR(player, eK) && (bb.oy(
			player), b7.on.oo(3, player, i8, eK), b8.fu.ou(player), bj.oz.h4(player), bL.x.p0(player)))
	}, this.o4 = function(player, m1, eK) {
		b8.fu.gk(1) && b8.fu.gl(player) && bK.iD(eK) && bL.h2.p1(player, m1) && bL.kQ.p2(eK) && (b7.on.oo(4, player, m1, eK), b8.fu.p3(player, 8), bb.fy(player, bM.f6[1], 12), bj.oz.o4(player), bL.x.o4())
	}, this.o7 = function(player, iz) {
		b8.fu.gk(1) && b8.fu.gl(player) && (iz = Math.min(iz, aC.eV), ac.jA(player, iz)) && (b7.on.oo(5, player, iz), ac.p4(player, iz))
	}, this.oB = function(player, oA) {
		(b8.fu.gk(1) || b8.fu.gk(2)) && b8.fu.gl(player) && (oA = bJ.p5(oA, 0, 1023), b7.on.oo(6, player, oA), ae.p6(player, 0, oA))
	}, this.hI = function(player, oD) {
		au.hH(player) && (b7.on.oo(7, player, oD), au.p7(player, oD))
	}, this.oF = function(player) {
		(b8.fu.gk(0) || b8.fu.gk(1)) && b8.fu.gl(player) && aL.p8(player) && (b7.on.oo(8, player), bO.oF(player))
	}, this.om = function(player) {
		b7.on.oo(9, player), bO.om(player)
	}, this.hF = function(player) {
		au.hJ(player) && (b7.on.oo(3, player, 1, 0), au.hF(player))
	}, this.gz = function(player, i8, eK, iz) {
		b8.fu.gk(1) && b8.fu.gl(player) && b8.fu.oq(player, iz) && b8.fu.os(player, iz) && bK.iD(eK) && al.e9.eS(player, eK) && (ac.jA(player, bM.eU[0]) || ac.jS(player)) && (b7.on.oo(10, player, (i8 << 10) + bM.eU[0], eK), iz = b8.fu.kp(player,
			i8), af.g0[player].push(bM.eZ[0]), ac.iw(player, iz, bM.eU[0]), aE.ix(player, !0), bb.p9(player))
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
		var aA, pc, j, g7, eb, pW = h.k * pC.offsetWidth,
			pd = new Float64Array(function(pW) {
				var i = .25 * b8.pX.pY(.6) * h.pZ;
				return Math.max(Math.floor(pW / i), 1)
			}(pW)),
			pe = ba.pe,
			pf = (pW - (pd.length + 1) * ba.gap) / (pd.length * h.k);
		for (pd.fill(pe), aA = 0; aA < pS.length; aA++) pc = (eb = pS[aA].pC).style, j = b8.pg.min(pd), g7 = pd.indexOf(j), pc.top = b8.pX.ph(j), pc.left = b8.pX.ph(pe + g7 * (pf + pe)), pc.width = b8.pX.ph(pf), b8.pX.pi(eb, 5), pd[g7] += eb
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
		et ? 1 === et ? et = b9.mr : 2 === et && (pm = 1, et = b9.mr) : (pm = 0, et = b9.mb), this.pq = pl = et, po.style.backgroundColor = et
	}, self = this, po.innerHTML = pj, po.style.color = pn ? b9.nb : b9.mf, po.style.userSelect = "none", po.style.outline = "none", po.style.overflowWrap = "break-word", self.ps(pl), po.style.border = "none", po.style.font = "inherit", self.pt(
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
			qT = 1048575, qI.textContent = "", qY || this.lQ()
		}, this.lQ = function() {
			var qZ = bl.x.qa[0],
				qZ = bl.x.qc[qZ],
				qd = qZ.qd,
				eY = qd.length,
				j5 = 1048575 === qT ? 0 : eY - (qZ.qe - qT + 1048575) % 1048575;
			if (qT = qZ.qe, !(eY <= (j5 = Math.max(j5, 0)))) {
				for (var qf = document.createDocumentFragment(), aA = j5; aA < eY; aA++) qg(qf, bl.qh.qi(qd[aA], bl.qh.qj(qd[aA])));
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
		.backgroundColor = b9.md, qH.addEventListener("scroll", function() {
			qS = qH.scrollTop, qR = qS < qH.scrollHeight - qH.clientHeight - 2 ? 0 : 1
		}), qI.style.font = "inherit", qJ.style.position = "absolute", qJ.style.left = "0", qJ.style.width = "100%", self.qL.e.setAttribute("placeholder", L(13)), self.qL.e.style.position = "absolute", self.qL.e.style.top = "0", self.qL.e.style
		.left = "0", self.qL.e.style.height = "100%", self.qL.e.style.backgroundColor = b9.ma, self.qL.e.style.textAlign = "center", (qP = new v(L(14), qN)).button.top = "0", qP.button.style.position = "absolute", qP.button.style.height = "100%", qP
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
		b8.pX.pi(this.e, 8, b9.mo)
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
	}, rE.style.position = "absolute", rE.style.backgroundColor = b9.mb, rE.style.color = b9.mf, rE.style.pointerEvents = "none", rE.style.zIndex = "5", rE.style.maxWidth = "100%"
}

function qM(rQ, type, rR, rS) {
	var e;
	this.e = document.createElement("input"), (e = this.e).type = type ? "number" : "text", e.id = "input" + s.x.rT++, e.value = rQ.value, e.style.width = "100%", e.style.userSelect = "none", e.style.outline = "none", e.style.resize = "none", e.style
		.border = "inherit", e.style.font = "inherit", e.style.color = b9.mf, e.style.backgroundColor = b9.mY, e.style.fontSize = "1em", e.style.padding = "0.1em 0.2em", e.addEventListener("focus", function() {
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
		rd = b8.color.mZ(70, 70, 0, .35);

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
			for (var gy, rt = rX.offsetWidth, ru = rZ.offsetWidth, aA = 0; aA < rb.length; aA++) gy = .01 * data.rh[aA] * ru, rb[aA].style.width = (100 * gy / rt).toFixed(2) + "%";
			var kW = data.rW[0].length;
			for (aA = 0; aA < eY; aA++)
				for (b8.pX.pi(ra[aA], 2), er = 1; er < kW; er++) b8.pX.pi(pS[aA][er], 4);
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
				kW = eY ? rW[0].length : 0;
			for (aA = 0; aA < eY; aA++) {
				ra[aA] = document.createElement("div"), ra[aA].style.backgroundColor = function(aA) {
					return aA % 2 == 1 ? b8.color.mZ(130, 130, 130, .35) : b9.me
				}(aA), ra[aA].style.width = "100%", ra[aA].style.display = "flex", pS[aA] = new Array(kW);
				for (var er = 0; er < kW; er++) pS[aA][er] = eb = document.createElement("div"), eb.style.display = "flex", eb.style.justifyContent = "center", eb.style.wordBreak = "break-all", eb.style.padding = "0.4em 0em", eb.style.width = data
					.rh[er] + "%", eb.innerHTML = rW[aA][er].f0, 1 === rW[aA][er].dk && (eb.name = "" + aA, eb.style.color = b9.nb, eb.style.backgroundColor = rd, eb.addEventListener("mouseover", q3), eb.addEventListener("mouseout", ri), function(eb,
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
			for (rX.style.display = "flex", rX.style.backgroundColor = b8.color.mZ(0, 120, 0, .35), aA = 0; aA < rb.length; aA++) rb[aA] = eb = document.createElement("div"), eb.style.display = "flex", eb.style.justifyContent = "center", eb.style
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
		}, rw.style.position = "absolute", rx.style.width = "25%", rx.style.height = "100%", rx.style.backgroundColor = b9.mb, ry.style.position = "absolute", ry.style.width = "75%", ry.style.height = "100%", ry.style.backgroundColor = b9.mb, ry
		.style.top = ry.style.right = b8.pX.ph(0), b8.pX.s3(ry), rZ.style.height = rZ.style.maxHeight = "100%", q7.push(new v("", function() {
			s4(0)
		}, b9.nP)), q7.push(new v("", function() {
			s4(1)
		}, b9.nQ)), q7.push(new v("", function() {
			s4(2)
		}, b9.nI)), q7.push(new v("", function() {
			s4(3)
		}, b9.n3)), q7.push(new v("", function() {
			s4(4)
		}, b9.nk)), q7.push(new v("", function() {
			s4(5)
		}, b9.ni)), rz = new Array(q7.length);
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
	sL.style.position = "absolute", sL.style.top = "0", sL.style.left = "0", sL.style.width = "100%", sL.style.height = "100%", sL.style.backgroundColor = b9.me, bH.q0() || (sL.style.backdropFilter = "blur(4px)", sL.style.webkitBackdropFilter =
			"blur(4px)"),
		__fx.customLobby.isActive() && (sL.style.display = "none"), sM.style.position = "absolute", sM.style.top = "0", sM.style.left = "0", sM.style.width = "100%", sM.style.display = "flex", sM.style.alignItems = "center";
	for (var g = [sN, sO, sP, sU], aA = 0; aA < g.length; aA++) g[aA].style.position = "absolute", g[aA].style.left = "0", g[aA].style.width = "100%", b8.pX.s3(g[aA]);
	sQ.style.position = "absolute", sQ.style.left = "0", sQ.style.width = "100%", sQ.style.font = "inherit", sR.style.position = "absolute", sR.style.left = "0", sR.style.width = "100%", sS.style.position = "absolute", sS.style.top = "0", sS.style
		.left = "0", sS.style.height = "100%", sS.style.width = "50%", sS.style.backgroundColor = b9.n1, sT.innerHTML = "", sT.style.position = "absolute", sT.style.top = "50%", sT.style.left = "50%", sT.style.transform = "translate(-50%, -50%)", sM
		.appendChild(function() {
			var sb = document.createElement("h1");
			return sb.textContent = L(22), sb.style.margin = "0 auto 0.15em auto", sb.style.webkitTextStroke = "0.02em brown", sb.style.fontFamily = "Arial Black, Trebuchet MS", sb.style.fontSize = "inherit", sb.style.fontWeight = "inherit", sb
		}()), sN.appendChild(sH.pC), sO.appendChild(sI.pC), sP.appendChild(sJ.pC), sR.appendChild(sS), sR.appendChild(sT), sU.appendChild(sK.pC), sL.appendChild(sM), sL.appendChild(sN), sL.appendChild(sO), sL.appendChild(sP), sL.appendChild(sQ), sL
		.appendChild(sR), sL.appendChild(sU), qF.sW.show(sQ)
}

function sX(qG) {
	var sL = document.createElement("div"),
		sQ = document.createElement("div");
	this.lQ = function() {
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
		bH.q0() || (this.style.backgroundColor = b8.color.q3(b9.mb, 50))
	}

	function pw() {
		this.style.backgroundColor = b9.mb
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
		}, sL.style.position = "absolute", sL.style.color = b9.mf, sL.style.zIndex = "3", sL.style.right = "0", sL.style.top = "0", qJ.style.position = "absolute", qJ.style.height = "auto", qJ.style.color = b9.mf, qJ.style.backgroundColor = b9.mb, qJ
		.style.left = "0", qJ.style.width = "100%", qJ.style.overflowWrap = "break-word", sL.appendChild(qJ);
	for (var aA = 0; aA < 4; aA++) t4[aA] = document.createElement("div"), t4[aA].style.position = "absolute", t4[aA].style.backgroundColor = b9.mb, t4[aA].style.color = b9.mf, t4[aA].style.top = "0", t4[aA].style.display = "flex", t4[aA].style
		.justifyContent = "center", t4[aA].style.alignItems = "center", t4[aA].style.userSelect = "none", t4[aA].style.outline = "none", t4[aA].style.font = "inherit", 2 !== (t4[aA].t5 = aA) && (t4[aA].onclick = t3, t4[aA].onmouseover = pv, t4[aA]
			.onmouseout = pw), sL.appendChild(t4[aA]);
	t4[0].textContent = "⮜", t4[1].textContent = "⮞", t4[3].textContent = "✖"
}

function t9(t3) {
	var rE = document.createElement("div");

	function pv() {
		bH.q0() || (rE.style.backgroundColor = b8.color.q3(b9.mb, 50))
	}

	function pw() {
		rE.style.backgroundColor = b9.mb
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
		}, rE.style.position = "absolute", pw(), rE.style.color = b9.mf, rE.style.zIndex = "3", rE.style.right = "0", rE.style.top = "0", rE.style.display = "flex", rE.style.justifyContent = "center", rE.style.alignItems = "center", rE.style
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
					mH = Math.min(1, Math.min(tI / i, tJ / j));
				i *= mH, j *= mH, tG && (self.ef += b8.pX.qq(.03, .5)), self.ef = bJ.p5(self.ef, 0, tI - i), self.eh = bJ.p5(self.eh, 0, tJ - j), tB.style.left = self.ef + "px", tB.style.top = self.eh + "px", tB.style.width = i + "px", tB.style
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
			tf.fillStyle = b9.mb, tf.fillRect(0, et * td.qr, h.i, et * td.tc)
		}, rw.style.position = "absolute", rw.style.top = "0", rw.style.left = "0", rw.style.width = "100%", rw.style.height = "100%", tS.style.position = "absolute", tS.style.top = "0", tS.style.left = "0", tS.style.width = "100%", tS.style
		.display = "flex", tS.style.backgroundColor = b9.mb, tT.style.position = "absolute", tT.style.left = "0", tT.style.width = "100%", b8.pX.s3(tT), tU.style.height = tU.style.maxHeight = "100%", rZ.style.position = "absolute", rZ.style.width =
		"100%", rZ.style.backgroundColor = b9.mb,
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
	this.qW = document.createElement("span"), (self = this).qW.textContent = tg, self.qW.style.color = b9.mf, self.qW.style.position = "absolute", self.qW.style.font = "inherit", tj ? self.qW.style.bottom = "0.06em" : self.qW.style.top = "0.12em",
		ti ? self.qW.style.left = "0.2em" : self.qW.style.right = "0.2em", self.qW.style.fontSize = "0.6em", self.qW.style.pointerEvents = "none", self.qW.style.whiteSpace = "pre", th.style.position = "relative", th.style.overflow = "hidden", th
		.appendChild(self.qW)
}

function s5(tg, th, tk, tl, tm) {
	var self;
	this.qW = document.createElement("span"), this.resize = function() {
			this.qW.style.fontSize = ((tl - tk) * th.offsetHeight).toFixed(1) + "px"
		}, (self = this).qW.textContent = tg, self.qW.style.color = b9.mf, self.qW.style.font = "inherit", self.qW.style.margin = "0.1em 0.6em", self.qW.style.pointerEvents = "none", tm && (self.qW.style.fontWeight = "bold"), self.qW.style
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
		.userSelect = "none", ts.style.outline = "none", ts.style.resize = "none", ts.style.border = "none", ts.style.color = b9.mf, ts.style.backgroundColor = b9.mY, tr ? (ts.style.fontSize = "1em", ts.rows = 6, ts.style.padding = "0.25em") : (ts
			.style.padding = "0.45em", ts.style.fontSize = "1.2em"), tq && ts.addEventListener("input", function(e) {
			tq(e)
		}), ts.addEventListener("focus", function() {
			h.rU++
		}), ts.addEventListener("blur", function() {
			h.rU--
		})
}

function dC() {
	this.pp = new u0, this.kn = new u1, this.qz = new u2, this.x = new u3, this.dU = function() {
		this.kn.dU(), (new u4).dU()
	}
}

function u1() {
	function u5(aA, type, uC, f1) {
		bh.kn.data.push({
			dx: aA,
			type: type || 0,
			value: uC || 0,
			uC: uC || 0,
			f1: f1 || 0
		})
	}

	function u6(aA, type, uC, f1) {
		bh.kn.data.push({
			dx: aA,
			type: type,
			value: uC || "",
			uC: uC || "",
			f1: f1 || 0
		})
	}

	function u7(mN) {
		for (var aA = bh.kn.data.length; aA < mN; aA++) bh.kn.data.push(null)
	}
	this.data = [], this.dU = function() {
		u5(0, 1, 0, 5), u5(1, 1, 1), u5(2, 0), u6(3, 2), u5(4, 1), u6(5, 2, "Trebuchet MS", 1), u5(6, 0), u5(7, 0, 0), u5(8, 0), u5(9, 1, 1), u5(10, 1), u5(11, 1, 1), u6(12, 2, navigator.language), u7(100), u6(100, 2), u6(101, 2), u6(102, 2), u6(
				103, 2), u6(104, 2), u6(105, 2), u6(106, 2), u5(107), u5(108), u5(109), u6(110, 2), u5(111), u5(112), u5(113), u6(114, 2), u5(115), u6(116, 2), u5(117, 1), u6(118, 2, "", 2), u5(119, 1, 0, 1), u6(120, 2), u5(121, 1, ~~(262144 *
				Math.random())), u6(122, 2, "Player " + Math.floor(1e3 * Math.random())), u5(123), u6(124), u5(125, 1), u6(126, 2), u5(127, 0, 1), u5(128), u5(129), u5(130), u5(131), u5(132), u6(133, 2), u5(134, 0, 5), u6(135, 2), u6(136, 2), u5(
				137), u5(138), u5(139), u5(140), u5(141), u5(142), u5(143), u5(144), u6(145, 2), u5(146), u5(147), u6(148, 2), u5(149), u5(150, 0, 1), u6(151, 2), u5(152, 0, 5), u5(153, 1), u5(154, 1), u6(155, 2), u6(156, 2), u5(157), u5(158),
			u5(159), u7(180), u5(180, 0), u5(181, 0)
	}, this.r0 = function(dx, value) {
		this.data[dx].value = value
	}, this.u8 = function(dx, value) {
		this.r0(dx, value), bh.pp.save(dx, String(value)), bh.pp.save(dx, String(this.data[dx].f1), !0)
	}, this.u9 = function() {
		for (var aA = 0; aA < this.data.length; aA++) this.data[aA] && (bh.pp.save(aA, String(this.data[aA].value)), bh.pp.save(aA, String(this.data[aA].f1), !0))
	}, this.uA = function(dx) {
		return Number(this.data[dx].value)
	}, this.uB = function(dx) {
		return String(this.data[dx].value)
	}
}

function u0() {
	this.uD = function(dx, f1) {
		return Number(this.uE(dx, f1))
	}, this.uE = function(dx, f1) {
		var f0 = null;
		return 0 === z.id ? z.uF && (f0 = z.uF.getItem((f1 ? "v" : "d") + dx)) : 1 === z.id ? f0 = z.uG.loadString((f1 ? 1e3 : 2e3) + dx) : 2 === z.id && (f0 = z.uH[(f1 ? "v" : "d") + dx]), f0 && 0 !== f0.length ? f0 : null
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
	}, this.save = function(dx, value, f1) {
		var uM = (f1 ? "v" : "d") + dx;
		if (0 === z.id) {
			if (z.uF && bh.kn.data[140].value) try {
				z.uF.setItem(uM, value)
			} catch (e) {
				console.log(e)
			}
		} else 1 === z.id ? z.uG.saveString((f1 ? 1e3 : 2e3) + dx, value) : 2 === z.id && (z.uH[uM] = value, z.uN.postMessage(uM + " " + value))
	}, this.uO = function(g, uJ) {
		var eY = g.length,
			uK = uJ ? "e" : "l";
		if (0 === z.id) {
			if (z.uF && bh.kn.data[140].value) try {
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
			var data = bh.kn.data;
			0 === data[2].f1 && (h.j > h.i || 0 !== z.id) && (data[2].value = data[2].uC = 1);
			0 === data[100].f1 && (data[100].value = data[100].uC = (0 === z.id ? "Player " : 1 === z.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var aA, f0, data = bh.kn.data,
			eY = data.length;
		for (aA = 0; aA < eY; aA++) data[aA] && data[aA].f1 === bh.pp.uD(aA, !0) && (f0 = bh.pp.uE(aA), data[aA].value = null === f0 ? data[aA].uC : 2 === data[aA].type ? f0 : Number(f0));
		bh.kn.data[10].value = bh.kn.data[10].uC
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
		bh.kn.data[110].value.length && (bh.kn.data[106].value = bh.kn.data[110], bh.qz.r0(110, ""), this.uS())
	}, this.uS = function() {
		var g = bh.kn.data[116].value.split(";");
		for (g.length % 2 == 1 && g.pop(), g.unshift(bh.kn.data[106].value), g.unshift(bh.kn.data[105].value), aA = 2; aA < g.length; aA += 2)
			if (g[aA] === g[0]) {
				g.splice(aA, 2);
				break
			} for (var uT = [], aA = 0; aA < g.length; aA += 2) uT.push(g[aA]);
		uU(g), bh.kn.data[117].value = 0, bh.kn.data[117].tO = uT
	}, this.uV = function(dx) {
		bh.kn.data[117].tO.splice(dx, 1), bh.kn.data[117].value = Math.min(dx, bh.kn.data[117].tO.length - 1);
		var g = bh.kn.data[116].value.split(";");
		g.splice(2 * dx, 2), uU(g)
	}, this.uW = function(dx) {
		var g = bh.kn.data[116].value.split(";");
		return {
			rk: g[2 * dx],
			password: g[2 * dx + 1]
		}
	}, this.uY = function() {
		var f0 = bJ.p5(bh.kn.data[121].value, -1, 262143);
		return f0 = -1 === f0 ? ~~(262144 * Math.random()) : f0
	}
}

function u2() {
	this.r0 = function(dx, value) {
		bh.kn.data[dx].value !== value && (bh.kn.u8(dx, value), 0 === dx ? (s.w(), b5.dU(), s.t(2)) : 1 === dx ? h.df(1) : 2 === dx ? h.df(0) : 5 === dx && (b8.pX.uZ(), h.df(0)))
	}, this.ua = function() {
		for (var data = bh.kn.data, aA = 0; aA < 100; aA++) data[aA] && bh.kn.u8(aA, data[aA].uC);
		b8.pX.uZ(), h.df(1), b5.dU()
	}, this.ub = function() {
		for (var data = bh.kn.data, aA = 0; aA < data.length; aA++) data[aA] && bh.kn.r0(aA, data[aA].uC)
	}, this.uc = function() {
		for (var es = bh.kn, aA = 128; aA < 135; aA++) es.u8(aA, es.data[aA].uC)
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
		for (var g = this.v3(this.v2(pE, size)), f0 = 0, mH = 1, aA = g.length - 1; 0 <= aA; aA--) f0 += mH * g[aA], mH *= 64;
		return f0
	}
}

function vB() {
	var i, j, vC;

	function vc(gy, eb, va, vH, vV) {
		eb = vb(gy, eb + 1 + 2 * vH & 3);
		! function(gy, vd) {
			return 1 < Math.abs(gy % i - vd % i) || 1 < Math.abs(vg(gy) - vg(vd))
		}(gy, eb) && 0 === vV[eb << 2] && (vV[eb << 2] = va)
	}

	function vg(g6) {
		return Math.floor((g6 + .5) / i) % j
	}

	function vb(g6, eb) {
		return g6 + vC[eb]
	}
	this.vD = function(pE) {
		var aA, vE, eY, vF, uy = bF;
		for (bE.rp.v5(bE.rp.v3(pE)), bQ.vI.vJ[bQ.eE].i = bQ.ej = i = uy.oY(12), bQ.vI.vJ[bQ.eE].j = bQ.ek = j = uy.oY(12), vC = [-i, -1, i, 1], bQ.vS = document.createElement("canvas"), bQ.vS.width = bQ.ej, bQ.vS.height = bQ.ek, bQ.vO = bQ.vS
			.getContext("2d", {
				alpha: !1
			}), bQ.vP = bQ.vT = null, bQ.vP = bQ.vO.getImageData(0, 0, bQ.ej, bQ.ek), bQ.vT = bQ.vP.data, b8.pg.vU(bQ.vT), eY = uy.oY(12), vE = uy.oY(5), vF = vL(i * j - 1), aA = 0; aA < eY; aA++) ! function(kW, g6, vG, vH) {
			var aA, eb, uy = bF,
				vV = bQ.vT,
				vW = g6,
				vX = g6,
				vY = 0,
				vZ = 1 + vG,
				va = 2 - vG;
			for (vV[g6 << 2] = vZ, aA = 0; aA < kW; aA++) eb = uy.oY(2), g6 = vb(g6, eb), vV[g6 << 2] === vZ ? vY % 2 == 1 && vc(vX, vY + 2 * vH + 3, va, vH, vV) : vV[g6 << 2] = vZ, vc(g6, eb, va, vH, vV), vc(vX, eb, va, vH, vV), vX = g6,
				vY = eb;
			vb(g6, 0) === vW ? (vc(g6, 0, va, vH, vV), vc(vW, 0, va, vH, vV)) : vb(g6, 1) === vW && (vc(g6, 0, va, vH, vV), vc(vW, 2, va, vH, vV));
			0 === kW && (vc(vW, 0, va, vH, vV), vc(vW, 2, va, vH, vV))
		}(uy.oY(vE), uy.oY(vF), 1 === uy.oY(1), 1 === uy.oY(1));
		var ef, eh, hM, vh, vi, vj, vV = bQ.vT,
			vk = !0,
			vl = bQ.vI.vJ[bQ.eE].vl,
			vm = bQ.vI.vJ[bQ.eE].vm;
		for (eh = 0; eh < j; eh++)
			for (vh = !0, vi = vk, ef = vj = 0; ef < i; ef++) hM = 4 * eh * i + 4 * ef, vj <= ef && 0 < vV[hM] && (vi = 2 === vV[hM], vh) && (vh = !1, vi !== vk) ? (vk = vi, vj = ef + 1, ef = -1) : (vi ? (vV[hM] = vm[0], vV[1 + hM] = vm[1], vV[
				2 + hM] = vm[2]) : (vV[hM] = vl[0], vV[1 + hM] = vl[1], vV[2 + hM] = vl[2]), vV[3 + hM] = 255);
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
		for (vv = aC.gu ? aC.jo : 0; vv < w1; vv++) {
			if (!w2()) {
				for (var es = aC.w6 = vv; es < w1; es++) vv = es, vx();
				return
			}
			w5(vs + rH * vr + bJ.dl(vr, 2), vt + rI * vr + bJ.dl(vr, 2))
		}
	}

	function wY(player) {
		for (var iN = af.iN, iP = af.iP, iO = af.iO, iQ = af.iQ, eh = iP[player]; eh <= iQ[player]; eh++)
			for (var ef = iN[player]; ef <= iO[player]; ef++) {
				var eC = ab.wZ(ef, eh);
				ab.g8(eC) && (ab.j1(eC) ? ab.g3(eC, player) : ab.wa(eC, player))
			}
	}

	function wX(g, s7, s8) {
		var dk = g[s7];
		g[s7] = g[s8], g[s8] = dk
	}

	function w2() {
		return function() {
			var aA;
			for (aA = 0; aA < 8; aA++)
				if (rH = bJ.dl(vp * aw.random(), aw.value(100)), rI = bJ.dl(vq * aw.random(), aw.value(100)), wf()) return 1;
			return
		}() || function() {
			var hu, hx, er, w4, es, w3;
			for (hu = bJ.dl(vp * aw.random(), aw.value(100)), hx = bJ.dl(vq * aw.random(), aw.value(100)), er = 40; 1 <= er; er--)
				for (w4 = vq - er; 0 <= w4; w4 -= 40)
					for (rI = (w4 + hx) % vq, es = 40; 1 <= es; es--)
						for (w3 = vp - es; 0 <= w3; w3 -= 40)
							if (rH = (w3 + hu) % vp, wf()) return 1;
			return
		}()
	}

	function wf() {
		for (var g6, wh, gap = bJ.dl(vr - vu, 2), wi = vt + rI * vr + gap, wj = vs + rH * vr + gap, wg = wi + vu - 1; wi <= wg; wg--)
			for (wh = wj + vu - 1; wj <= wh; wh--)
				if (g6 = ab.wZ(wh, wg), !ab.eT(g6) || ab.j1(g6)) return;
		return 1
	}

	function w5(w3, w4) {
		vx(), wk(w3 - 2, w4 - 2)
	}

	function vx() {
		af.ld[vv] = 0, af.gM[vv] = af.wV[vv] = 0, af.g0[vv] = [], af.gE[vv] = [], af.gF[vv] = [], af.ey[vv] = [], af.iN[vv] = af.iP[vv] = af.iO[vv] = af.iQ[vv] = 0
	}

	function wk(w3, w4) {
		var g6, aA, wl, wm;
		for (af.ld[vv] = 1, af.iN[vv] = w3 + 10, af.iP[vv] = w4 + 10, af.iQ[vv] = af.iO[vv] = 0, wl = w3; wl < w3 + 4; wl++)
			for (wm = w4; wm < w4 + 4; wm++)(w3 < wl && wl < w3 + 3 || w4 < wm && wm < w4 + 3) && (g6 = ab.wZ(wl, wm), ab.eT(g6)) && (af.iN[vv] = Math.min(wl, af.iN[vv]), af.iO[vv] = Math.max(wl, af.iO[vv]), af.iP[vv] = Math.min(wm, af.iP[vv]), af
				.iQ[vv] = Math.max(wm, af.iQ[vv]), vw[af.gM[vv]] = g6, af.gM[vv]++, ab.wa(g6, vv));
		for (af.wV[vv] = af.gM[vv], aA = af.gM[vv] - 1; 0 <= aA; aA--) ab.wn(vw[aA], vv) ? (ab.g3(vw[aA], vv), af.gE[vv].push(vw[aA])) : ab.wo(vw[aA]) ? (ab.g3(vw[aA], vv), af.gF[vv].push(vw[aA])) : ab.wp(vw[aA]) && (ab.g3(vw[aA], vv), af.ey[vv]
			.push(vw[aA]))
	}

	function we(w3, w4) {
		for (var g6, wh, wg = w4; w4 - 6 < wg; wg--)
			for (wh = w3; w3 - 6 < wh; wh--)
				if (g6 = ab.wZ(wh, wg), ab.j1(g6)) return;
		return 1
	}
	this.dU = function() {
		if (vw = new Array(12), vu = 6, vr = 10, vp = bJ.dl(bQ.ej, vr), vq = bJ.dl(bQ.ek, vr), vs = bJ.dl(bQ.ej - vr * vp, 2), vt = bJ.dl(bQ.ek - vr * vq, 2), aC.gu)
			for (var aA = 0; aA < aC.jo; aA++) vv = aA, vx(), af.ld[vv] = 1;
		(0 === aC.data.spawningType ? vy : 1 === aC.data.spawningType ? (vy(), function() {
			var w7 = aC.w8;
			aC.w9 || w7++;
			if (!(w7 < 3)) {
				for (var data = aC.data, j5 = (aC.gu ? aC.jo : 0) + data.teamPlayerCount[0], mN = aC.w6, wA = new Uint32Array(w7), wB = new Uint32Array(w7), wC = new Uint16Array(w7), wD = new Uint16Array(w7), eW = be.eW, iN = af.iN, iP =
						af.iP, iO = af.iO, iQ = af.iQ, fD = bM.fD, fE = bM.fE, aA = j5; aA < mN; aA++) fD[aA] = iN[aA] + iO[aA] >> 1, fE[aA] = iP[aA] + iQ[aA] >> 1;
				for (aA = j5; aA < mN; aA++) {
					var id = eW[aA];
					wA[id] += fD[aA], wB[id] += fE[aA]
				}
				var kA = be.kA;
				for (aA = 1; aA < w7; aA++) {
					var g1 = Math.max(data.teamPlayerCount[kA[aA]], 1);
					wC[aA] = bJ.dl(wA[aA], g1), wD[aA] = bJ.dl(wB[aA], g1)
				}
				var wE = be.wE,
					wF = be.wF,
					wG = be.wG,
					fC = bM.fC;
				for (aA = 0; aA < 512; aA++) fC[aA] = aA;
				for (var dw = 0; dw < 2 + (4 <= w7); dw++)
					for (aA = j5; aA < mN; aA++) {
						for (var gy = aA, wH = fC[gy], wI = 1, eo = bJ.wJ(fD[wH] - wC[1], fE[wH] - wD[1]), er = 2; er < w7; er++) {
							var wK = bJ.wJ(fD[wH] - wC[er], fE[wH] - wD[er]);
							wK < eo && (eo = wK, wI = er)
						}
						var wL = eW[gy];
						if (wI !== wL) {
							if (2 === dw && 4 <= w7) {
								var wM = Math.max((wI + 1) % w7, 1),
									wN = bJ.wJ(fD[wH] - wC[wM], fE[wH] - wD[wM]);
								for (er = 1; er < w7; er++) wK = bJ.wJ(fD[wH] - wC[er], fE[wH] - wD[er]), eo < wK && wK < wN && (wN = wK, wM = er);
								wM !== wL && bJ.wJ(wC[wL] - wC[wM], wD[wL] - wD[wM]) < bJ.wJ(wC[wL] - wC[wI], wD[wL] - wD[wI]) && (wI = wM)
							}
							var wO = kA[wI],
								wP = wF[wO] + (aC.gu ? 0 : wG[wO]),
								vd = wE[wP],
								wQ = fC[vd],
								wR = wF[wO + 1];
							eo = bJ.wJ(fD[wQ] - wC[wL], fE[wQ] - wD[wL]);
							for (var et = wP + 1; et < wR; et++) {
								var wS = wE[et],
									wT = fC[wS];
								(wK = bJ.wJ(fD[wT] - wC[wL], fE[wT] - wD[wL])) < eo && (eo = wK, vd = wS)
							}
							vd < j5 || mN <= vd || (wQ = fC[vd], wA[wL] += fD[wQ] - fD[wH], wB[wL] += fE[wQ] - fE[wH], wA[wI] += fD[wH] - fD[wQ], wB[wI] += fE[wH] - fE[wQ], g1 = data.teamPlayerCount[kA[wL]], wC[wL] = bJ.dl(wA[wL], g1),
								wD[wL] = bJ.dl(wB[wL], g1), g1 = data.teamPlayerCount[wO], wC[wI] = bJ.dl(wA[wI], g1), wD[wI] = bJ.dl(wB[wI], g1), fC[gy] = wQ, fC[vd] = wH)
						}
					}! function() {
						for (var fC = bM.fC, iN = af.iN, iP = af.iP, iO = af.iO, iQ = af.iQ, gM = af.gM, wV = af.wV, gE = af.gE, gF = af.gF, ey = af.ey, aA = 0; aA < 512; aA++) {
							var wW = fC[aA];
							if (wW !== aA) {
								wX(iN, aA, wW), wX(iP, aA, wW), wX(iO, aA, wW), wX(iQ, aA, wW), wX(gM, aA, wW), wX(wV, aA, wW), wX(gE, aA, wW), wX(gF, aA, wW), wX(ey, aA, wW), wY(aA), wY(wW), fC[aA] = aA;
								for (var j = wW, g7 = fC[j]; g7 !== aA;) g7 = fC[j = g7];
								fC[j] = wW
							}
						}
					}()
			}
		}) : function() {
			var w1 = aC.w1;
			for (vv = w1; vv < aC.eV; vv++) vx();
			for (vv = aC.gu ? aC.jo : 0; vv < w1; vv++)
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
					var w3 = vs + rH * vr + bJ.dl(vr, 2),
						w4 = vt + rI * vr + bJ.dl(vr, 2);
					w5(w3, w4)
				}
		})(), bb.lZ[7] = af.gM[aC.eI]
	}, this.wq = function(iz, wr, ws) {
		var aA, w3, w4, g6, rH, rI;
		for (vv = iz, aA = 0; aA < 20; aA++)
			for (w3 = wr + aA; wr - aA <= w3; w3--)
				for (w4 = ws + aA; ws - aA <= w4; w4--)
					if ((w3 === wr + aA || w3 === wr - aA || w4 === ws + aA || w4 === ws - aA) && 3 < w3 && w3 < bQ.ej - 5 && 3 < w4 && w4 < bQ.ek - 5 && ab.eT(ab.wZ(w3, w4)) && we(w3 + 3, w4 + 3)) {
						if (0 < af.gM[vv]) {
							for (rI = rH = g6 = void 0, rH = af.iO[vv]; rH >= af.iN[vv]; rH--)
								for (rI = af.iQ[vv]; rI >= af.iP[vv]; rI--) g6 = 4 * (rI * bQ.ej + rH), ab.wu(vv, g6) && (ab.wv(g6), af.gM[vv]--);
							vx()
						}
						return wk(w3 - 1, w4 - 1), !0
					} return !1
	}, this.ww = function(iz) {
		vv = iz, w2() ? w5(vs + rH * vr + bJ.dl(vr, 2), vt + rI * vr + bJ.dl(vr, 2)) : vx()
	}
}

function wx() {
	aq.wy(), tf.setTransform(iA, 0, 0, iA, 0, 0), tf.imageSmoothingEnabled = iA < 3, tf.drawImage(bQ.vS, aR.wz(), aR.x0()), bN.x1.te(), tf.drawImage(x2, aR.wz(), aR.x0()), aq.te(), bL.te(), ae.te(), (aC.m8 ? (bf.te(), bA) : (aM.te(), aU.te(), aQ
	.te(), bA.te(), au.te(), aV.te(), aR.te(), aP.te(), bf.te(), aT.te(), aO.te(), aL.te(), aK.te(), aW.te(), bc.te(), at)).te(), s.te()
}

function x3(x4, i, j) {
	x4.clearRect(0, 0, i, j), x4.fillStyle = b9.mc, x4.fillRect(0, 0, i, j)
}

function x5(x4, i, j, x6) {
	x4.fillStyle = b9.mf, x4.fillRect(0, 0, i, x6), x4.fillRect(0, 0, x6, j), x4.fillRect(i - x6, 0, x6, j), x4.fillRect(0, j - x6, i, x6)
}

function x7(x4, ef, eh, hQ, x6, g6, x8) {
	x4.fillStyle = b9.mf;
	var g6 = Math.floor(hQ * g6),
		ru = (g6 += (g6 - x6) % 2, Math.floor((g6 - x6) / 2)),
		hQ = Math.floor((hQ - g6) / 2);
	x4.fillRect(ef + hQ, eh + hQ + ru, g6, x6), x8 && x4.fillRect(ef + hQ + ru, eh + hQ, x6, g6)
}

function xA() {
	this.dU = function() {
		8 === aC.k5 && aM.xB()
	}, this.xC = function(xD) {
		var elo = aC.data.elo,
			hi = (elo[xD] - elo[1 - xD]) / 10,
			hi = 8 / (1 + Math.pow(2, hi / 32)),
			hi = Math.floor(10 * hi + .5),
			xF = this.xG(elo[xD] + (1 + aC.xH) * hi + 1),
			elo = this.xG(elo[1 - xD] - hi);
		0 === xD ? aM.xJ(xF, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : aM.xJ(elo, xF, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"])
	}, this.xG = function(elo) {
		return 16e3 === (elo = bJ.p5(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function cZ() {
	this.qn = new xK, this.vV = new xL
}

function xL() {
	this.hG = !1;
	this.xP = [], this.xQ = 100;
	var m5, m6, gap, hQ, xM, xO, xR = 0,
		xS = new Array(9),
		xT = [],
		xU = [],
		xV = 0,
		xW = 0,
		xX = 0,
		xY = 0;

	function xk() {
		xS.sort(function(er, es) {
			return es.jt - er.jt
		});
		for (var pE = "" + xS[0].oA, aA = 1; aA < 9; aA++) pE += "," + xS[aA].oA;
		for (aA = 0; aA < 9; aA++) pE += "," + xS[aA].jt;
		bh.kn.u8(120, pE)
	}
	this.dU = function() {
		for (var xZ = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], aA = 0; aA < xZ.length; aA++) {
			var color = 6 === xZ[aA] ? b9.n5 : b9.md;
			this.xP.push(b8.canvas.xa(aa.get(3), xZ[aA], color))
		}
		for (aA = 0; aA < ai.qn.xb; aA++) xU.push(ai.qn.xc - ai.qn.xb + aA);
		for (aA = 0; aA < ai.qn.xd; aA++) xU.push(ai.qn.xe + aA);
		var xf = ai.qn.xg(bI.xf);
		for (aA = 0; aA < xf.length; aA++) xU.push(xf[aA]);
		! function() {
			var aA, g = bh.kn.data[120].value.split(",");
			if (18 !== g.length)
				for (aA = 0; aA < 9; aA++) xS[aA] = {
					oA: 1015 + aA,
					jt: 0
				};
			else
				for (aA = 0; aA < 9; aA++) {
					var f0 = parseInt(g[aA]),
						et = (f0 = 0 <= f0 && f0 < ai.qn.xc ? f0 : 0, parseInt(g[aA + 9]));
					et = 0 <= et && et < 1e3 ? et : 0, xS[aA] = {
						oA: f0,
						jt: et
					}
				}
		}()
	}, this.show = function(ks, kt, xl) {
		var aA;
		if (xV = ks, xW = kt, xR = xl || 0, this.hG = !0, xT = [], 0 === xR)
			for (aA = 0; aA < 9; aA++) xT.push(xS[aA].oA);
		else {
			var es = 49 * xR,
				xl = es - 49;
			for (xl >= xU.length && (xR = 1, xl = 0, es = 49), aA = xl = (es = Math.min(es, xU.length)) - 49; aA < es; aA++) xT.push(xU[aA])
		}
		xT.push(1024);
		xl = xT.length, hQ = Math.floor((z.a0.qv() ? .075 : .0468) * h.pZ), gap = Math.floor(hQ / 3), (xX = 10 * (xM = hQ + gap)) > h.i && (xX = h.i, gap = (xM = xX / 10) - (hQ = 3 * xM / 4)), xO = bJ.dl(xl, 10) + !!(xl % 10), (xY = xO * xM) > h
			.j && (xY = h.j, gap = (xM = xY / xO) - (hQ = 3 * xM / 4)), xl = .5 * gap;
		m5 = Math.min(Math.max(ks - .5 * xX + xl, xl), h.i - xX + xl), m6 = Math.min(Math.max(kt - .5 * xY + xl, xl), h.j - xY + xl)
	}, this.gm = function(ks, kt, player) {
		if (!this.hG) return !1;
		if (this.xn(ks, kt)) {
			ks = bJ.p5(bJ.dl(ks - m5 + .5 * gap, xM), 0, 9);
			if ((ks += 10 * bJ.p5(bJ.dl(kt - m6 + .5 * gap, xM), 0, 9)) >= xT.length) return aK.qo(), !0;
			kt = xT[ks];
			if (1024 === kt) return this.show(xV, xW, xR + 1), !0;
			! function(oA) {
				for (var aA = 0; aA < 9; aA++) xS[aA].jt = Math.floor(.99 * xS[aA].jt);
				for (aA = 0; aA < 9; aA++)
					if (oA === xS[aA].oA) return xS[aA].jt = Math.min(xS[aA].jt + 30, 999), xk();
				xS.splice(5, 0, {
					oA: oA,
					jt: Math.max(xS[4].jt, 30)
				}), xS.pop(), xk()
			}(kt), player === aC.eI ? b6.gv.o9(kt) : b6.fu.oN(kt, player)
		}
		return aK.qo(), !0
	}, this.xn = function(ks, kt) {
		return !(ks < m5 - .5 * gap || kt < m6 - .5 * gap || m5 + xX - .5 * gap <= ks || m6 + xY - .5 * gap <= kt)
	}, this.te = function() {
		tf.fillStyle = b9.mc, tf.fillRect(m5 - .5 * gap, m6 - .5 * gap, xX, xY);
		for (var hM = .5 * ba.xo, eY = (tf.lineWidth = ba.xo, tf.strokeStyle = tf.fillStyle = b9.mf, tf.strokeRect(m5 - .5 * gap + hM, m6 - .5 * gap + hM, xX - 2 * hM, xY - 2 * hM), tf.imageSmoothingEnabled = !0, xT.length), aA = 0; aA <
			eY; aA++) this.xp(xT[aA], tf, m5 + aA % 10 * xM, m6 + bJ.dl(aA, 10) * xM, hQ);
		tf.imageSmoothingEnabled = !1
	}, this.xp = function(oA, hW, ef, eh, hQ) {
		var eC;
		oA >= 1024 - ai.qn.xb ? (eC = hQ / this.xQ, hW.setTransform(eC, 0, 0, eC, ef, eh), hW.drawImage(this.xP[oA - 1024 + ai.qn.xb], 0, 0), hW.setTransform(1, 0, 0, 1, 0, 0)) : (b8.pX.textAlign(hW, 1), b8.pX.textBaseline(hW, 1), hW.font = b8.pX
			.rM(0, .89 * hQ), hW.fillText(ai.qn.xq(oA), ef + .5 * hQ, eh + (.35 - b8.pX.xr + .56) * hQ))
	}
}

function xK() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.xb = 13, this.xd = this.emojis.length, this.xe = 676, this.xc = 1024, this.xs = this.emojis.indexOf("💀"), this.xt = this.xs + 1, this.xu = this.emojis.indexOf("🥇"), this.xv = this.emojis.indexOf("😊"), this.xq = function(f0) {
		return f0 < this.xe ? String.fromCharCode(55356, 56806 + bJ.dl(f0, 26), 55356, 56806 + f0 % 26) : this.emojis[Math.min(f0 - this.xe, this.xd - 1)]
	}, this.xg = function(pE) {
		for (var eY = pE.length - 2, g = [], aA = 0; aA < eY; aA++) {
			var he = pE.charCodeAt(aA) - 56806,
				hf = pE.charCodeAt(aA + 2) - 56806;
			0 <= he && he < 26 && 0 <= hf && hf < 26 && (g.push(26 * he + hf), aA += 3)
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
			var et, g6 = yF(et = pE.charCodeAt(aA));
			g.push(y9[g6] + et - y7[g6])
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
		for (var eY = pE.length, g = [], aA = 0; aA < eY; aA++)(et = pE.charCodeAt(aA)) < 58 ? g.push(pE[aA]) : (et -= et < 91 ? 65 : 71, g.push(String(bJ.dl(et, 10))), g.push(String(et - 10 * bJ.dl(et, 10))));
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
	this.yQ = new yR, this.result = new yS, this.h2 = new yT, this.yU = new yV, this.yW = new yX, this.yY = new yZ, this.dU = function() {
		this.result.dU()
	}
}

function yT() {
	this.ya = function() {
		for (var eY = ak.jp, yb = ak.jq, yc = [], aA = 0; aA < eY; aA++) {
			var g6 = yb[aA];
			b8.fu.yd(g6) && yc.push(g6)
		}
		return yc
	}, this.ye = function() {
		if (0 === be.kA[aC.yf]) return this.yg();
		bf.l2(aC.yf);
		for (var yc = [], eY = bM.f4[0], fC = bM.fC, aA = 0; aA < eY; aA++) {
			var g6 = fC[aA];
			b8.fu.yd(g6) && yc.push(g6)
		}
		return yc
	}, this.yg = function() {
		var g6 = l4[0];
		return b8.fu.yd(g6) ? [g6] : []
	}, this.yh = function(yc) {
		for (var eY = yc.length, dk = 0, gM = af.gM, aA = 0; aA < eY; aA++) dk += gM[yc[aA]];
		return dk
	}
}

function yR() {
	function yj() {
		if (2 === aC.yn) return 1;
		au.yo(), aC.yn = 2, aC.yp = aC.yq
	}

	function yl() {
		bP.yW.yr(), aW.show(1 === aC.ys, !1, 2 === aC.ys), bP.result.yr(), bP.yY.ii(), bP.yU.ii(), aM.yt(!0), aM.yu(247), aM.yu(956), aM.yu(957), aU.lP(!0), aV.lP(!0), au.lP(), bA.yv(), aC.gi && bd.yw.yx(), bd.dc = !0, bZ.yy(), z.a0.setState(0)
	}
	this.yi = function() {
		yj() || (aC.yk = 2, yl())
	}, this.ym = function() {
		yj() || (aC.yk = 1, yl())
	}
}

function yV() {
	this.ii = function() {
		var z7;
		2 === aC.yk ? (aM.yz(0, 59), aG.mE(2700)) : aC.k5 < 7 ? (z7 = be.kA[aC.yf], z7 = be.z9[z7], aP.zA(L(23, [z7]), 2, 1, 12), aM.zB(0, L(24, [z7]), 40, 0, b9.mf, b9.mc, -1, !1), aG.mE(2700)) : 8 === aC.k5 ? (aC.ys ? aM.yz(aC.z4, 2) : aM.yz(
			1 - aC.eI, 3), aC.z5.xC(aC.z4), aM.z6(aC.z4), aG.lz(aC.z4, 2700, !1, 0)) : 9 === aC.k5 ? (aM.zC(), aG.mE(2700)) : (aM.z6(aC.z4), aG.lz(aC.z4, 2700, !1, 0))
	}
}

function yZ() {
	function zD() {
		var sB = Math.floor(af.zL[aC.eI] / 50);
		0 !== sB && (sB = Math.min(sB, 400), aM.zB(440, L(25, [(sB / 100).toFixed(2)]), 40, 0, b9.mx, b9.mc, -1, !1))
	}
	this.ii = function() {
		if (b8.fu.gl(aC.eI) && zD(), 0 !== bP.result.zE && 0 !== bP.result.yc.length && (function() {
				aM.zB(520, L(26), 40, 0, b9.mf, b9.mc, -1, !1);
				for (var yc = bP.result.yc, eY = yc.length, gM = af.gM, g = [], aA = 0; aA < eY; aA++) {
					var g6 = yc[aA];
					g.push({
						g6: g6,
						dk: gM[g6]
					})
				}
				g.sort((er, es) => es.dk - er.dk);
				var z9 = af.zM,
					dk = bP.result.zN,
					sB = bP.result.zE,
					pE = "";
				for (aA = 0; aA < eY; aA++) pE += z9[g[aA].g6] + ": " + (g[aA].dk * sB / (100 * dk)).toFixed(2) + "   ";
				aM.zB(560, b8.zO.zP(pE), 40, 0, b9.mx, b9.mc, -1, !1)
			}(), 7 !== aC.k5 && 10 !== aC.k5 || 0 !== aC.ys && aM.zB(600, L(27), 40, 0, b9.mf, b9.mc, -1, !1), !(2 === aC.yk || 7 <= aC.k5))) {
			var yc = bP.result.yc,
				eY = yc.length,
				zQ = af.zQ,
				zM = af.zM,
				gM = af.gM,
				zR = [];
			loop: for (var aA = 0; aA < eY; aA++) {
				var g6 = yc[aA],
					zS = b8.zO.zT(zQ[g6]);
				if (null !== zS) {
					for (var zU = gM[g6], es = zR.length - 1; 0 <= es; es--)
						if (zS === zR[es].name) {
							zR[es].dk += zU, zR[es].g.push({
								g6: g6,
								dk: zU
							});
							continue loop
						} zR.push({
						name: zS,
						dk: zU,
						g: [{
							g6: g6,
							dk: zU
						}]
					})
				}
			}
			if (0 !== zR.length) {
				zR.sort((er, es) => es.dk - er.dk);
				var g = zR[0].g,
					zV = (g.sort((er, es) => es.dk - er.dk), "[" + zR[0].name + "]"),
					sB = bP.result.zE,
					zW = 512 * sB / 26214400,
					pE = (aM.zB(0, L(28, [zV, zW.toFixed(4)]), 40, 0, b9.mf, b9.mc, -1, !1), aM.zB(600, L(29), 40, 0, b9.mf, b9.mc, -1, !1), ""),
					kW = g.length,
					dk = bP.result.zN,
					v4 = zR[0].dk,
					zX = 1e4 * zW;
				for (aA = 0; aA < kW; aA++) pE += zM[g[aA].g6] + ": " + (g[aA].dk * sB / (200 * dk)).toFixed(2) + " | " + (zX * g[aA].dk / (10 * v4)).toFixed(2) + "   ";
				aM.zB(640, b8.zO.zP(pE), 40, 0, b9.mx, b9.mc, -1, !1);
				zW = (v4 * sB / (1e3 * dk)).toFixed(2);
				aM.zB(680, L(30, [zW, zV]), 40, 0, b9.mf, b9.mc, -1, !1), aC.gi || aM.zB(720, L(31) + bI.zZ, 736, 0, b9.mf, b9.n3, -1, !1)
			}
		}
	}, this.zI = function() {
		var zJ, vW;
		aC.k7 || (zJ = af, vW = aC.eI, 0 === zJ.zK[vW]) || zJ.is[vW] < 1 || 2 * zJ.ot[vW] > 3 * (zJ.ir[vW] + zJ.is[vW]) || zD()
	}
}

function yS() {
	this.dU = function() {
		this.za = 0, this.yc = [], this.zN = 0, this.zE = 0
	}, this.yr = function() {
		var r9, zf;
		aC.k7 || (r9 = this, 2 === aC.yk ? r9.yc = bP.h2.ya() : aC.hO ? r9.yc = bP.h2.ye() : r9.yc = bP.h2.yg(), r9.za = bg.zc.zd(), r9.zN = Math.max(1, bP.h2.yh(r9.yc)), b6.fu.oW(), 8 === aC.k5 ? (bP.result.zE = 0, 1 !== aC.ys || 0 === bh.kn
			.data[107].value || 100 <= (zf = bh.kn.data[108].value) || (bP.result.zE = (1 + aC.xH) * (100 - zf) * 10)) : r9.zE = 100 * bP.result.za * (1 + aC.xH))
	}
}

function yX() {
	this.yr = function() {
		if (2 === aC.yk) aC.ys = 2;
		else {
			if (8 === aC.k5) b8.fu.jC(0) || 0 === af.ld[0] ? aC.z4 = 1 : b8.fu.jC(1) || 0 === af.ld[1] ? aC.z4 = 0 : aC.z4 = +(af.gM[1] > af.gM[0]);
			else {
				if (aC.hO) {
					var l0 = bf.zh();
					if (aC.yf = l0, be.kA[l0]) return void(aC.ys = +(be.eW[aC.eI] === l0))
				}
				aC.z4 = l4[0]
			}
			aC.ys = +(aC.z4 === aC.eI)
		}
	}
}

function d9() {
	this.id = 0, this.f1 = 0, this.uF = null, this.uG = null, this.uH = null, this.uN = null, this.a0 = new zi, this.dU = function() {
		var self, f1;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (f1 = Android.getVersion()) < 12 || (self.f1 = f1, self.id = 1, self.uG = Android),
			function(self) {
				var f1;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.uH = mwIOSdataX, self.uN = window.webkit.messageHandlers.iosCommandA, f1 = self
					.uH.version, self.f1 = f1 ? Number(f1) : 0)
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

function zi() {
	this.zm = function() {
		bh.qz.ua(), bh.qz.ub(), ay.x.close(0, 3255), 0 === z.id ? z.uF && z.uF.clear() : 1 === z.id ? z.uG.saveString(199, "") : 2 === z.id && z.uN.postMessage("clear")
	}, this.zn = function() {
		2 === z.id ? z.uN.postMessage("showConsentForm") : 1 === z.id && z.uG.setState(7)
	}, this.zo = function() {
		this.setState(14)
	}, this.qv = function() {
		return 1 === bh.kn.uA(2)
	}, this.zp = function() {
		bh.kn.u8(102, "")
	}, this.setState = function(zq) {
		1 === z.id && 5 <= z.f1 && z.uG.setState(zq)
	}, this.a1 = function() {
		var zr;
		1 === z.id && 7 <= z.f1 ? z.uG.setState(5) : ((zr = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = zr.toString())
	}, this.dZ = function() {
		1 !== z.id || z.f1 < 17 || z.uG.saveString(23, document.documentElement.outerHTML)
	}, this.e5 = function() {
		0 !== z.id && (1 === z.id ? z.uG.prepareAd("1688441405") : 2 === z.id && (0 === z.f1 ? z.uN.postMessage("prepare ad 1770251391") : z.uN.postMessage("loadAds 1770251391")))
	}, this.e8 = function(dk) {
		return 0 !== z.id && 1 !== z.id && 2 === z.id && (0 === z.f1 ? z.uN.postMessage("show ad " + dk) : z.uN.postMessage("showAd"), !0)
	}, this.de = function() {
		2 === z.id && z.f1 < 23 && s.t(4, 1, new u("App Update Required", "A new iOS app version with bug fixes has been published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + bI.zs + "' target='_blank'>" + bI
			.zs + "</a>", !0, [new v("⬅️ " + L(32), function() {
				s.t(0)
			}, b9.nK)]))
	}
}

function dO() {
	function zv(e) {
		a06(e), s.t(4, 5, new u("🚀 New Game Update", "The game has been updated! Please reload the game." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new v("⬅️ " + L(32), function() {
				s.a07()
			}), new v("🔄 Reload", function() {
				z.a0.a1()
			}, b9.n2)]))
	}

	function a05(e) {
		a06(e), s.t(4, 5, new u(L(33), {
			"3249": "No servers found",
			"4705": "Lobby not found",
			"4730": "Kicked from lobby"
		} [e] ?? zz(e), !0))
	}

	function zz(e) {
		var pE = " [" + e + "]";
		return 3249 === e || 1006 === e ? "No Internet / No Server Response" + pE : 4527 === e ? "Player already in lobby" + pE : 4530 === e ? "Lobby Timeout" + pE : 4528 === e ? "Lobby Kick: Another login detected." + pE : 4540 === e ?
			"You have been kicked." + pE : "Unknown error" + pE
	}

	function a06(e) {
		zy(e), s.x.y()
	}

	function zy(e) {
		var zq = aZ.zx();
		6 === zq ? ay.x.a09(e) : bl.a01 ? (s.w(), bl.t8(), ay.x.close(ay.x.a02, 3256)) : 8 === zq && aC.a0A(!0)
	}
	this.zt = function(zu, e) {
		zu === 1 && __fx.customLobby.isActive() && aZ.zx() !== 6 && __fx.customLobby.setActive(false);
		if (8 === s.rm && 0 === zu)
			if (4211 === e) zv(e);
			else {
				if (4480 === e) return bh.qz.uc(), void s.t(4, 0, new u(L(35), L(36), !0));
				8 !== aZ.zx() && zy(), s.t(4, 0, new u(L(33), zz(e), !0))
			}
		else {
			var zq = aZ.zx();
			if (6 === zq) {
				if (4211 === e) return void zv(e);
				if (4215 !== e && 4516 !== e && 4527 !== e && 4533 !== e) return void aY.a00(zu)
			} else {
				if (!bl.a01) return 8 === zq ? void(zu !== ay.x.a03 || aC.k7 || 1 !== aC.yn || aC.gi || aM.a04(L(34, [e]))) : void 0;
				if (zu !== ay.x.a02) return
			}
			a05(e)
		}
	}, this.a08 = function(e) {
		8 === aZ.zx() ? aC.k7 || 1 !== aC.yn || aM.a04(L(34, [e])) : a05(e)
	}, this.r = function() {
		a06(3268)
	}
}

function cy() {
	var a0B, a0C, a0D = -15e3,
		a0E = !1;

	function gm(e) {
		a0Y() || (a0E = !0, a0Z(e, 1), ay.x.a0a(ay.x.a03), a0b(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY)))
	}

	function a0N(e) {
		a0D = bd.e7, a0Z(e, 1), ay.x.a0a(ay.x.a03), 0 < e.touches.length && (a0B = Math.floor(h.k * e.touches[0].clientX), a0C = Math.floor(h.k * e.touches[0].clientY), ar.a0N(e) || a0b(a0B, a0C))
	}

	function a0b(ef, eh) {
		s.gm(ef, eh), 0 === aC.yn ? aZ.gm(ef, eh) : bA.a0c(ef, eh) || bc.gm(ef, eh) || aW.gm(ef, eh) || aK.a0d(ef, eh) || aO.gm(ef, eh) || 0 <= aL.gm(ef, eh) || au.gm(ef, eh) || bH.a0e(ef, eh) || aK.a0f(ef, eh)
	}

	function a0J(e) {
		a0Y() || (a0E = !0, a0Z(e, 1), a0g(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY)))
	}

	function a0O(e) {
		a0D = bd.e7, a0Z(e, 1), 0 < e.touches.length && (a0B = Math.floor(h.k * e.touches[0].clientX), a0C = Math.floor(h.k * e.touches[0].clientY), ar.a0O(e) || a0g(a0B, a0C))
	}

	function a0g(ef, eh) {
		s.a0J(ef, eh), 0 === aC.yn ? aZ.a0J(ef, eh) : (bR.gf(ef, eh), bc.a0J(ef, eh) || (aL.a0J(ef, eh), aK.hG() ? aK.a0J(ef, eh) : aQ.gn ? aQ.a0J(ef) && (bd.dc = !0) : (aU.a0J(ef, eh), aR.mA && aR.a0J(ef, eh) && (bd.dc = !0))))
	}

	function a0L(e) {
		a0Y() || (a0Z(e, 1), a0h(), 0 === aC.yn ? (aZ.click(-1024, -1024), aS.qX()) : (aU.a0i(-1024, -1024), aL.a0J(-1024, -1024), aQ.a0j(), aR.mA = !1))
	}

	function a0K(e) {
		a0Y() || (a0Z(e, 1), a0k(Math.floor(h.k * e.clientX), Math.floor(h.k * e.clientY), 2 === e.button), bH.a0H && (bH.a0H = !1, e.preventDefault()))
	}

	function click(e) {
		a0Y() || a0Z(e, 1)
	}

	function a0P(e) {
		a0D = bd.e7, a0Z(e, 1), e && e.touches && 0 < e.touches.length && 0 !== aC.yn ? aR.mA = !1 : ar.a0l() || (a0k(a0B, a0C, !1), bH.a0H && (bH.a0H = !1, e.preventDefault()))
	}

	function a0Q(e) {
		a0D = bd.e7, a0Z(e, 1), a0k(a0B, a0C, !1), bH.a0H && (bH.a0H = !1, e.preventDefault())
	}

	function a0R(e) {}

	function a0S(e) {}

	function a0T(e) {
		a0Y() || a0Z(e, 0)
	}

	function a0k(ef, eh, a0m) {
		a0h(), 0 === aC.yn ? aZ.click(ef, eh) : (aU.a0i(ef, eh), bc.a0i(), aQ.a0j(), aR.mA = !1, aK.click(ef, eh, a0m) ? bd.dc = !0 : aL.a0K(ef, eh))
	}

	function a0h() {
		s.a0h()
	}

	function a0M(e) {
		var ef, eh, deltaY;
		a0Y() || (a0Z(e, 1), ay.x.a0a(ay.x.a03), ef = Math.floor(h.k * e.clientX), eh = Math.floor(h.k * e.clientY), deltaY = e.deltaY, 1 === e.deltaMode && (deltaY *= 16), s.a0M(ef, eh, deltaY), 0 === aC.yn ? aZ.a0M(ef, eh, deltaY) : aU.a0M(ef, eh,
			deltaY) || (aQ.a0n(ef, eh) ? aQ.a0M(deltaY) && (bd.dc = !0) : aR.a0M(ef, eh, deltaY)))
	}

	function a0U(e) {
		a0Z(e, 0)
	}

	function a0Z(e, id) {
		0 === id && s.hG() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== aZ.zx() && e.preventDefault()
	}

	function a0V(e) {
		if (__fx.keybindHandler(e.key)) return;
		a0Y() || 0 < h.rU || (e = e.code) && e.length && (bV.et(e, 18) ? ap.a0p(3) : bV.et(e, 22) ? ap.a0p(0) : bV.et(e, 20) ? ap.a0p(1) : bV.et(e, 24) ? ap.a0p(2) : bV.et(e, 10) ? aQ.a0q(31 / 32) : bV.et(e, 8) ? aQ.a0q(32 / 31) : bV.et(e, 6) ? aQ
			.a0q(7 / 8) : bV.et(e, 4) ? aQ.a0q(8 / 7) : bV.et(e, 14) ? 0 !== aC.yn && aR.a0M(Math.floor(h.i / 2), Math.floor(h.j / 2), -200) : bV.et(e, 16) ? 0 !== aC.yn && aR.a0M(Math.floor(h.i / 2), Math.floor(h.j / 2), 200) : bV.et(e, 0) ? aC
			.yn && bR.gg(!1) : bV.et(e, 2) ? aC.yn && bR.gg(!0) : bV.et(e, 26) ? aC.yn && bR.hA() : bV.et(e, 28) && aC.yn && bR.hF())
	}

	function a0W(e) {
		if (!a0Y() && !(0 < h.rU || bd.e7 < 400)) {
			var code = e.code;
			if (code && code.length && !("Enter" === code && s.a0r(1) || "Space" === code && s.a0r(0))) return bl.a01 ? bl.tE.a0r(code) ? void 0 : void("Escape" === code && bH.f2()) : void(8 !== aZ.zx() && aZ.a0r(e) ? bd.dc = !0 : "Escape" === code ?
				bH.f2() : bV.et(code, 18) ? ap.a0s(3) : bV.et(code, 22) ? ap.a0s(0) : bV.et(code, 20) ? ap.a0s(1) : bV.et(code, 24) ? ap.a0s(2) : bV.et(code, 12) ? bA.a0t(!aC.m8) : "Space" === code && aC.yn && (aL.gj && aL.a0u(), aC.gi) && bA
				.a0v(!1))
		}
	}

	function a0X() {
		"hidden" === document.visibilityState ? 1 === aC.yn && (aC.gi ? bA.a0w() : !aC.k7 || aL.gj || aC.gu || aL.a0u()) : bd.dc = !0
	}

	function a0Y() {
		return a0D + 15e3 > bd.e7
	}

	function resize() {
		h.a0y()
	}
	this.a0F = 0, this.a0G = "", this.a0H = !1, this.dU = function() {
		a0I.addEventListener("mousedown", gm, {
			passive: !1
		}), a0I.addEventListener("mousemove", a0J, {
			passive: !1
		}), a0I.addEventListener("mouseup", a0K, {
			passive: !1
		}), a0I.addEventListener("click", click, {
			passive: !1
		}), a0I.addEventListener("mouseleave", a0L, {
			passive: !1
		}), a0I.addEventListener("wheel", a0M, {
			passive: !1
		}), a0I.addEventListener("touchstart", a0N, {
			passive: !1
		}), a0I.addEventListener("touchmove", a0O, {
			passive: !1
		}), a0I.addEventListener("touchend", a0P, {
			passive: !1
		}), a0I.addEventListener("touchcancel", a0Q, {
			passive: !1
		}), a0I.addEventListener("dragover", a0R), a0I.addEventListener("drop", a0S), a0I.addEventListener("dblclick", a0T), document.addEventListener("contextmenu", a0U), document.addEventListener("keydown", a0V), document.addEventListener(
			"keyup", a0W), document.addEventListener("visibilitychange", a0X), window.addEventListener("resize", resize)
	}, this.a0e = function(ef, eh) {
		return !!bA.gm(ef, eh) || !!(aU.gm(ef, eh) || aR.gm(ef, eh) || aQ.gm(ef, eh) || aM.gm(ef, eh))
	}, this.a0x = a0Y, this.q0 = function() {
		return !a0E || 0 < a0D
	}, this.f2 = function() {
		if (!s.hG()) return 8 === aZ.zx() ? aC.m8 ? void bA.a0t(!1) : bc.hG ? void bc.a0u() : void aL.a0u() : void(7 !== aZ.zx() && 6 === aZ.zx() && aY.a0z());
		s.a0r(2)
	}
}

function bu() {
	this.pX = new a10, this.pg = new a11, this.fu = new a12, this.zO = new a13, this.x4 = new a14, this.a15 = new a16, this.canvas = new a17, this.color = new a18, this.a19 = new a1A, this.dU = function() {
		this.pX.uZ()
	}
}

function a11() {
	this.vU = function(g) {
		g.fill(0)
	}, this.a1B = function(g) {
		for (var eY = g.length, aA = 0; aA < eY; aA++) g[aA] = []
	}, this.a1C = function(he, a1D) {
		for (var hf = bM.f9, aA = 0; aA < 3; aA++) hf[aA] = a1D * he[aA];
		return hf
	}, this.a1E = function(he, hf, a1F) {
		for (var hi = 0, aA = 0; aA < 3; aA++) hi += Math.abs(he[aA] - hf[aA]);
		return a1F <= hi
	}, this.a1G = function(he, a1H) {
		for (var aA = 0; aA < 3; aA++) he[aA] = bJ.p5(he[aA] + a1H, 0, 255);
		return he
	}, this.a1I = function(g, s7, s8) {
		s8 = s8 || g.length - 1;
		for (var a1J = 0, aA = s7 = s7 || 0; aA <= s8; aA++) a1J += g[aA];
		return a1J
	}, this.a1K = function(g, a1L) {
		for (var aA, a1M, eY = g.length, a1N = [], er = eY - 1; 0 <= er; er--) {
			for (aA = a1M = 0; aA < eY; aA++) a1L(g[aA]) < a1L(g[a1M]) && (a1M = aA);
			eY--, a1N.push(g[a1M]), g[a1M] = g[eY], g.pop()
		}
		return a1N
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
	}, this.a1O = function(g, f0) {
		for (var eY = g.length, g1 = 0, aA = 0; aA < eY; aA++) g1 += g[aA] > f0;
		return g1
	}, this.a1P = function(a1Q, a1R, min) {
		for (var eY = a1R[0], aA = eY - 1; 0 <= aA; aA--) a1Q[aA] < min && (a1Q[aA] = a1Q[--eY]);
		a1R[0] = eY
	}, this.a1S = function(g, eY, value) {
		for (var aA = 0; aA < eY; aA++) g[aA] -= value
	}, this.a1T = function(g) {
		for (var eY = g.length, aA = 0; aA < eY; aA++)
			if ("string" != typeof g[aA]) return !1;
		return !0
	}, this.a1U = function(pE, g, a1V) {
		g.fill(0);
		for (var sB = pE.split(","), eY = Math.min(sB.length, g.length), aA = 0; aA < eY; aA++) g[aA] = Math.min(parseInt(sB[aA]), a1V)
	}, this.a1W = function(pE, g, qU) {
		g.fill("");
		for (var sB = pE.split('"'), eY = Math.min(sB.length, 2 * g.length), hM = 0, aA = 1; aA < eY; aA += 2) g[hM++] = sB[aA].slice(0, qU)
	}, this.a1X = function(g, g1) {
		if (0 === g1) g.fill(0);
		else {
			var a1J = this.a1I(g),
				eY = g.length;
			if (0 === a1J) g.fill(bJ.dl(g1, eY));
			else
				for (var aA = 0; aA < eY; aA++) g[aA] = bJ.dl(g1 * g[aA], a1J);
			if (0 === (a1J = this.a1I(g))) g[1] = g1;
			else
				for (var hM = 0; a1J++ < g1;) g[hM = (hM + 1) % eY] && g[hM]++
		}
	}, this.a1Y = function(g) {
		if (!g) return 0;
		var eY = g.length;
		if (0 === eY) return 0;
		for (var f0 = g[eY - 1], aA = eY - 2; 0 <= aA; aA--)
			if (g[aA] !== f0) return aA + 2;
		return 1
	}, this.a1Z = function(g) {
		for (var a1J = 0, aA = 0; aA < g.length; aA++) a1J += g[aA].length;
		return a1J
	}, this.a1a = function(a1b) {
		for (var g = [], aA = 0; aA < a1b.length; aA++) g = g.concat(a1b[aA]);
		return g
	}
}

function a17() {
	this.xa = function(a1c, dx, a1d) {
		var hQ = a1c.height,
			a1e = b8.pX.vK(hQ, hQ),
			hW = b8.pX.getContext(a1e);
		return function(i, hW, a1d) {
			hW.fillStyle = a1d, hW.beginPath(), hW.arc(i / 2, i / 2, .47 * i, 0, 2 * Math.PI), hW.fill()
		}(hQ, hW, a1d), hW.drawImage(a1c, -dx * hQ, 0), a1e
	}, this.a1g = function(a1h) {
		var hW, hT, hQ = a1h.height;
		return a1h.width === hQ && (hT = (hW = b8.pX.getContext(a1h, !0)).getImageData(0, 0, hQ, hQ), b8.a15.a1i(hT.data, hQ, hQ, .9), hW.putImageData(hT, 0, 0)), a1h
	}
}

function a18() {
	this.a1j = function(f0) {
		return [f0 >> 12 & 63, f0 >> 6 & 63, 63 & f0]
	}, this.a1k = function(f0) {
		for (var g = this.a1j(f0), aA = 0; aA < 3; aA++) g[aA] = ~~(4.05 * g[aA]);
		return g
	}, this.a1l = function(f0) {
		f0 = this.a1k(f0);
		return b8.color.mX(f0[0], f0[1], f0[2])
	}, this.a1m = function(g) {
		for (var aA = 0; aA < 3; aA++) g[aA] = ~~(g[aA] / 4.04);
		return (g[0] << 12) + (g[1] << 6) + g[2]
	}, this.mX = function(dw, sB, es) {
		return "rgb(" + dw + "," + sB + "," + es + ")"
	}, this.mZ = function(dw, sB, es, er) {
		return "rgba(" + dw + "," + sB + "," + es + "," + er.toFixed(3) + ")"
	}, this.q2 = function(et) {
		for (var g = et.split("(")[1].split(","), f8 = bM.f8, aA = 0; aA < 3; aA++) f8[aA] = parseInt(g[aA]);
		return 4 === g.length ? f8[3] = 255 * parseFloat(g[3].slice(0, -1)) : f8[3] = 255, f8
	}, this.q3 = function(a1n, eb) {
		for (var g = a1n.slice(a1n.indexOf("(") + 1, a1n.indexOf(")")).split(","), f8 = bM.f8, aA = 0; aA < 3; aA++) f8[aA] = bJ.p5(parseInt(g[aA].trim(), 10) + eb, 0, 255);
		return 3 === g.length ? this.mX(f8[0], f8[1], f8[2]) : (a1n = parseFloat(g[3].trim()), this.mZ(f8[0], f8[1], f8[2], a1n = 0 === a1n ? .3 : a1n))
	}, this.a1o = function(g) {
		for (var pE = "#", aA = 0; aA < 3; aA++) {
			var dw = g[aA].toString(16);
			pE += 1 === dw.length ? "0" + dw : dw
		}
		return pE
	}, this.a1p = function(pE) {
		var dw, sB;
		return pE.length < 7 ? b9.mW : (dw = parseInt(pE.slice(1, 3), 16), sB = parseInt(pE.slice(3, 5), 16), pE = parseInt(pE.slice(5, 7), 16), this.mX(dw, sB, pE))
	}
}

function a14() {
	this.a1q = function(pE, font, maxWidth) {
		if (font && (tf.font = font), tf.measureText(pE).width <= maxWidth) return pE;
		for (var aA = pE.length - 1; 1 <= aA; aA--)
			if (pE = pE.substring(0, aA), tf.measureText(pE + "...").width <= maxWidth) return pE + "...";
		return "..."
	}
}

function a1A() {
	var a1s = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.a1t = function(e7) {
		var a1v, pE = new Date(e7.getTime() - 6e4 * e7.getTimezoneOffset()).toUTCString();
		return pE.length < 12 || (pE = pE.substring(5, pE.length), 0 === (e7 = e7.getTimezoneOffset())) ? pE : (a1v = (e7 < 0 ? "+" : "-") + bJ.dl(Math.abs(e7), 60), 0 == (e7 = Math.abs(e7) % 60) ? pE + a1v : pE + a1v + ":" + (e7 < 10 ? "0" :
			"") + e7)
	}, this.a1w = function(e7) {
		var pE = e7.toUTCString();
		return pE.length < 12 ? pE : function(e7) {
			return a1s[e7.getUTCDay()]
		}(e7) + ", " + pE.substring(5, pE.length - 4)
	}
}

function a10() {
	var a1y = null;
	this.xr = 0, this.uZ = function() {
		var f0 = bh.kn.data[5].value;
		a1y = "px " + f0, "Trebuchet MS" !== f0 && (a1y += ", Trebuchet MS"), this.xr = hP(32, 32, ["a", "b", "m"], 200, a1y)
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
		return size = size.toFixed(2), 0 === type ? size + a1y : 1 === type ? "bold " + size + a1y : 2 === type ? "lighter " + size + a1y : 3 === type ? "italic " + size + a1y : 4 === type ? "oblique " + size + a1y : 5 === type ? "small-caps " +
			size + a1y : "small-caps bold " + size + a1y
	}, this.textAlign = function(hW, id) {
		hW.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(hW, id) {
		hW.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.pi = function(e, code, color) {
		color = this.ph(ba.rO) + " solid " + (color || b9.mf);
		5 === (code = code || 5) ? e.style.border = color : 4 === code ? e.style.borderLeft = color : 2 === code ? e.style.borderBottom = color : 6 === code ? e.style.borderRight = color : e.style.borderTop = color
	}, this.sD = function(e, ef, eh, i, j) {
		e = e.style;
		e.left = this.a1z(ef), e.top = this.a1z(eh), e.width = this.a1z(i), e.height = this.a1z(j)
	}, this.pY = function(f0) {
		return 1 + f0 * z.a0.qv()
	}, this.qq = function(mH, g7) {
		return mH * this.pY(void 0 === g7 ? .5 : g7) * h.pZ / h.k
	}, this.sC = function(mH, g7) {
		return mH * this.pY(void 0 === g7 ? .5 : g7) * h.pZ
	}, this.rs = function(mH, g7, a20) {
		return this.pY(g7) * Math.min(mH * h.pZ, a20 * h.i) / h.k
	}, this.ph = function(f0) {
		return f0.toFixed(1) + "px"
	}, this.a1z = function(f0) {
		return this.a22(f0).toFixed(1) + "px"
	}, this.a22 = function(f0) {
		return f0 / h.k
	}, this.a23 = function(rc, a24) {
		for (var pE = "<ul>", eY = rc.length, aA = 0; aA < eY; aA++) pE += "<li>" + rc[aA] + ": <a href='" + a24[aA] + "' target='_blank'>" + a24[aA] + "</a></li>";
		return pE += "</ul>"
	}, this.a25 = function(a26) {
		return "<a href='" + a26 + "' target='_blank'>" + a26 + "</a>"
	}, this.a27 = function(e) {
		navigator.clipboard && navigator.clipboard.writeText(e.value)
	}, this.a28 = function(e) {
		var dk = e.textContent;
		b8.zO.a29(dk, "✔") || (1 === dk.length ? e.textContent = "✔" : e.textContent = dk + " ✔", setTimeout(function() {
			e.textContent = dk
		}, 500))
	}, this.measureText = function(pE) {
		return tf.measureText(pE).width
	}, this.s3 = function(a2A) {
		a2A.style.overflowX = "auto", a2A.style.overflowY = "hidden", a2A.style.whiteSpace = "nowrap", a2A.addEventListener("wheel", function(e) {
			Math.abs(e.deltaY) < Math.abs(e.deltaX) || (this.scrollLeft += e.deltaY, this.sF = this.scrollLeft, e.preventDefault())
		}), a2A.addEventListener("scroll", function() {
			this.sF = this.scrollLeft
		})
	}
}

function a12() {
	this.gk = function(zq) {
		return 0 === zq ? 1 === aC.yn && aC.gu : 1 === zq ? 1 === aC.yn && !aC.gu : 2 === aC.yn
	}, this.gl = function(player) {
		return 0 !== af.ld[player] && 2 !== af.a2B[player]
	}, this.a2C = function(player) {
		return player === aC.eI && 2 !== af.a2B[player]
	}, this.lC = function() {
		return ak.jp < 2 ? 0 : aC.hO ? 1 < bf.a2D() : af.gM[l4[1]]
	}, this.a2E = function() {
		var jp = ak.jp;
		if (0 !== jp) {
			if (!aC.hO) return !this.jC(l4[0]);
			for (var eW = be.eW, l0 = bf.l1(), jq = ak.jq, aA = jp - 1; 0 <= aA; aA--) {
				var g6 = jq[aA];
				if (eW[g6] === l0 && !this.jC(g6)) return 1
			}
		}
		return 0
	}, this.a2F = function(player) {
		return player === aC.eI
	}, this.jC = function(player) {
		return player >= aC.jo || 2 === af.a2B[player]
	}, this.ka = function(player) {
		return 0 !== af.ld[player]
	}, this.yd = function(player) {
		return player < aC.jo
	}, this.oq = function(a2G, a2H) {
		return a2G !== a2H
	}, this.fx = function(player, f0) {
		var min;
		return f0 = this.a2I(player, f0), af.ga[player] += f0, af.a2J[player] && (min = Math.min(af.a2J[player], af.ga[player]), af.a2J[player] -= min, af.ga[player] -= min), f0
	}, this.a2I = function(player, f0) {
		var a2K = af.ga[player];
		return f0 = Math.min(f0, af.gM[player] * aC.a2L - a2K), f0 = Math.min(f0, aC.a2M - a2K), Math.max(f0, 0)
	}, this.or = function(player, i8, a2N, a2O) {
		var a2K = af.ga[player],
			i8 = bJ.dl(a2K * (i8 + 1), 1024),
			a2N = bJ.dl(a2N * a2K, 1024),
			i8 = Math.min(i8, a2K - a2N);
		return 10 === aC.k5 && (i8 = b2.a2Q(player, i8)), bM.f6[0] = i8, bM.f6[1] = a2N, a2O <= i8
	}, this.oI = function(player, o1, o0) {
		var player = af.ga[player],
			a2P = bJ.dl(64 * player, 1024),
			player = (o1 = Math.min(o1, player - a2P), this.a2S(o1));
		return a2P += player, o1 = this.a2I(o0, o1 -= player), bM.f6[0] = o1, bM.f6[1] = a2P, 1 <= o1
	}, this.oK = function(o1, o0) {
		var a2R = this.a2S(o1);
		return o1 = this.a2I(o0, o1 -= a2R), bM.f6[0] = o1, bM.f6[1] = a2R, 1 <= o1
	}, this.i7 = function(player, a2T) {
		return bJ.dl(af.ga[player] * (a2T + 1), 1024)
	}, this.a2S = function(a2U) {
		return bJ.dl(Math.max(2142 - bd.jl(), 0) * a2U, 2142)
	}, this.p3 = function(player, a2N) {
		a2N = bJ.dl(a2N * af.ga[player], 1024);
		bM.f6[1] = a2N, af.ga[player] -= a2N
	}, this.fv = function(player, a2V) {
		var fI, fK, es = af.ga[player];
		return a2V <= es ? af.ga[player] -= a2V : (af.ga[player] = 0, fK = af.a2J[player] + (fI = 5 * ((es = a2V - es) >> 2)), bb.fy(player, fI - es, 12), fK <= aC.a2W ? af.a2J[player] = fK : (af.a2J[player] = aC.a2W, bb.fy(player, fK - aC.a2W,
			18))), a2V
	}, this.kp = function(player, i8) {
		var ga = af.ga,
			a2K = ga[player],
			i8 = bJ.dl(a2K * (i8 + 1), 1024),
			a2P = Math.max(bJ.dl(a2K, 10), 1e3);
		return (i8 = Math.min(i8, a2K - a2P)) < 0 ? (ga[player] = 0, a2P = Math.min(1e3, a2K + aC.a2W - af.a2J[player]), bM.f6[1] = a2P, af.a2J[player] += a2P - a2K, 0) : (bM.f6[1] = a2P, 10 === aC.k5 && (i8 = b2.a2Q(player, i8)), ga[player] -=
			a2P + i8, i8)
	}, this.ou = function(player) {
		af.ga[player] -= bM.f6[0] + bM.f6[1]
	}, this.os = function(player, iz) {
		return (iz = Math.min(iz, aC.eV)) < aC.eV && 0 === af.ld[iz] && (iz = aC.eV), (bM.eU[0] = iz) === aC.eV || eR(player, iz)
	}, this.ow = function(player, o0) {
		return 0 !== af.ld[o0] && !eR(player, o0)
	}, this.a2X = function(player, a2Y) {
		for (var g6, eY = ak.jp, zf = 0, a2Z = l4, aA = 0; aA < eY; aA++)
			if (g6 = a2Z[aA], !this.jC(g6)) {
				if (player === g6) return !0;
				if (++zf > a2Y) return !1
			} return !1
	}, this.kx = function(g6) {
		var a2a = aC.hO ? bf.a2b() : af.gM[l4[0]];
		return a2a >= bJ.dl(g6 * aC.jY, 100)
	}, this.a2c = function(f0, min, max) {
		return Math.floor(bJ.p5(isNaN(f0) ? 0 : Number(f0), min, max))
	}
}

function a16() {
	this.a2d = function(canvas, a2e, a2f) {
		var i = canvas.width,
			j = canvas.height,
			et = b8.pX.vK(i, j),
			hW = b8.pX.getContext(et, !0),
			canvas = (hW.drawImage(canvas, 0, 0), hW.getImageData(0, 0, i, j));
		return a2e(canvas.data, i, j, a2f), hW.putImageData(canvas, 0, 0), et
	}, this.a2g = function(vV, i, j) {
		for (var ef = i - 1; 0 <= ef; ef--)
			for (var eh = j - 1; 0 <= eh; eh--) {
				var aA = 4 * (ef + eh * i);
				vV[3 + aA] = vV[aA], vV[aA] = vV[1 + aA] = vV[2 + aA] = 255
			}
	}, this.a2h = function(vV, i, j) {
		for (var ef = i - 1; 0 <= ef; ef--)
			for (var eh = j - 1; 0 <= eh; eh--) {
				var aA = 4 * (ef + eh * i);
				vV[1 + aA] > vV[2 + aA] + 10 && (vV[3 + aA] = vV[aA], vV[1 + aA] = vV[2 + aA])
			}
	}, this.a2i = function(vV, i, j, a2f) {
		for (var gap = Math.floor(Math.min(i, j) * a2f), ef = 0; ef < i; ef++)
			for (var aA, eh = 0; eh < j; eh++)(ef < gap || eh < gap || i - gap <= ef || j - gap <= eh) && (vV[3 + (aA = 4 * (ef + eh * i))] = 255 - 255 * (vV[1 + aA] - vV[aA]) / (255 - vV[aA]))
	}, this.a2j = function(vV, i, j, a2f) {
		for (var ef = i - 1; 0 <= ef; ef--)
			for (var eh = j - 1; 0 <= eh; eh--) {
				var aA = 4 * (ef + eh * i);
				vV[aA] = a2f[0], vV[1 + aA] = a2f[1], vV[2 + aA] = a2f[2]
			}
	}, this.a2k = function(vV, i, j, a2f) {
		for (var gap = Math.floor(i * a2f), ef = 0; ef < i; ef++)
			for (var aA, eh = 0; eh < j; eh++)(ef < gap || eh < gap || i - gap <= ef || j - gap <= eh) && (vV[aA = 4 * (ef + eh * i)] = vV[1 + aA] = vV[2 + aA] = 0)
	}, this.a2l = function(vV, i, j) {
		for (var eh, aA, ef = i - 1; 0 <= ef; ef--)
			for (eh = j - 1; 0 <= eh; eh--) 200 < vV[1 + (aA = 4 * (ef + eh * i))] && vV[1 + aA] - 20 > vV[aA] && vV[1 + aA] - 20 > vV[2 + aA] ? vV[aA] + vV[2 + aA] < 40 ? vV[3 + aA] = 0 : (vV[3 + aA] = vV[aA], vV[aA] = 255, vV[1 + aA] = 255, vV[
				2 + aA] = 255) : vV[aA] < 50 && vV[1 + aA] < 50 && vV[2 + aA] < 50 && (vV[aA] + vV[1 + aA] + vV[2 + aA] < 50 ? vV[3 + aA] = 180 : vV[3 + aA] = 180 + Math.floor(75 * (vV[aA] + vV[1 + aA] + vV[2 + aA] - 50) / 100))
	}, this.a2m = function(vV, i, j) {
		for (var eh, aA, ef = i - 1; 0 <= ef; ef--)
			for (eh = j - 1; 0 <= eh; eh--) vV[1 + (aA = 4 * (ef + eh * i))] > vV[aA] + 20 && vV[1 + aA] > vV[2 + aA] + 20 && vV[aA] + vV[2] < 40 && (vV[3 + aA] = 255 - vV[1 + aA], vV[aA] = vV[1 + aA] = vV[2 + aA] = vV[aA])
	}, this.a1i = function(vV, i, j, a2f) {
		for (var dw = i >> 1, ef = 0; ef < i; ef++)
			for (var eh = 0; eh < j; eh++) Math.sqrt((ef - dw) * (ef - dw) + (eh - dw) * (eh - dw)) > a2f * dw && (vV[4 * (ef + eh * i) + 3] = 0)
	}
}

function a13() {
	this.y5 = function(f0) {
		var aA, a2n, a2o, a2p, a2q;
		if (f0 < 0) return "-" + this.y5(Math.abs(f0));
		if (f0 < 1e3) return f0.toString();
		for (a2n = Math.floor(Math.log(f0 + .5) / Math.log(10)) + 1, a2o = Math.floor((a2n - 1) / 3), a2q = (a2p = f0.toString()).substring(a2n - 3, a2n), aA = 1; aA < a2o; aA++) a2q = a2p.substring(a2n - 3 * (aA + 1), a2n - 3 * aA) + " " + a2q;
		return a2p.substring(0, a2n - 3 * a2o) + " " + a2q
	}, this.a2r = function(g6, a2n) {
		return g6.toFixed(a2n) + "%"
	}, this.a2s = function(f0, a2t) {
		return f0.toFixed(bJ.p5(Math.floor((void 0 === a2t ? 3 : a2t) - Math.log10(Math.max(f0, 1))), 0, 8))
	}, this.a2u = function(f0, mH, a2n) {
		return (f0 * mH).toFixed(a2n)
	}, this.zT = function(username) {
		var ec, eN = username.indexOf("[");
		return !(eN < 0) && 1 < (ec = username.indexOf("]")) - eN && ec - eN <= 8 ? username.substring(eN + 1, ec).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.zT;
	this.a2v = function(pE) {
		for (var er = Math.floor(.5 * pE.length + .5), mN = Math.floor(.5 * (er - 1)), aA = 0; aA < mN; aA++)
			for (var es = -1; es < 2; es += 2) {
				var et = er + es * aA;
				if (" " === pE[et]) return [this.zP(pE.substring(0, et)), this.a2w(pE.substring(et))]
			}
		return [pE.substring(0, er), pE.substring(er)]
	}, this.a2w = function(pE) {
		for (var eY = pE.length, aA = 0; aA < eY; aA++)
			if (" " !== pE[aA]) return pE.substring(aA);
		return pE
	}, this.zP = function(pE) {
		for (var aA = pE.length - 1; 0 <= aA; aA--)
			if (" " !== pE[aA]) return pE.substring(0, aA + 1);
		return pE
	}, this.a2x = function(pE, a2y) {
		return pE.split("(")[0] + "(🧈 " + a2y.toFixed(2) + ")"
	}, this.startsWith = function(pE, a2z) {
		return pE.substring(0, a2z.length) === a2z
	}, this.a29 = function(pE, a2z) {
		var eY = pE.length;
		return pE.substring(eY - a2z.length, eY) === a2z
	}, this.a30 = function(g, a31, a32) {
		var pE = "",
			eY = g.length - 1;
		a32 = a32 || "";
		for (var aA = 0; aA < eY; aA++) pE += a32 + g[aA] + a32 + ",", (aA + 1) % a31 == 0 && (pE += "\n");
		return pE += a32 + g[eY] + a32
	}, this.a33 = function(pE, he, hf) {
		return pE.replace(new RegExp(he, "g"), hf)
	}
}

function a34() {
	this.iw = function(player, eK) {
		aH.wq(player, bK.eg(eK), bK.ei(eK)) && (bd.dc = !0), aC.k7 && this.ii()
	}, this.ii = function() {
		aC.gu = !1;
		for (var aA = 0; aA < aC.jo; aA++) 0 !== af.ld[aA] && 0 === af.gM[aA] && aH.ww(aA);
		0 !== af.ld[aC.eI] ? (bb.lZ[7] = af.gM[aC.eI], bb.lZ[8] = af.ga[aC.eI], aQ.a35(), aV.a36(), aC.gi || aG.ly(af.iN[aC.eI] - 5, af.iP[aC.eI] - 5, af.iO[aC.eI] + 5, af.iQ[aC.eI] + 5), at.dU()) : aW.show(!1, !1, !1, !0), aM.a37(18), ae.a38(),
			ae.lP(!0), bN.x.a39(), aK.qo(), aC.op = null, bZ.a3A = !0, bZ.a3B(), aC.k7 && z.a0.setState(1)
	}
}

function bw() {
	this.eV = 512, this.a2M = 15e8, this.a3C = 1e9, this.a2W = 5e4, this.a3D = 512, this.fs = 2, this.eI = 0, this.jo = 0, this.yq = 0, this.k9 = 0, this.yp = 0, this.w1 = 512, this.w6 = 512, this.a2L = 150, this.k7 = !0, this.gi = 0, this.yn = 0,
		this.jY = 0, this.m8 = !1, this.gu = 0, this.a3E = 0, this.hO = !1, this.w8 = 0, this.w9 = 0, this.k5 = 0, this.xH = 0, this.op = null, this.z5 = new xA, this.a3F = 30, this.yk = 0, this.ys = 0, this.z4 = 0, this.yf = 0, this.data = new a3G,
		this.a3H = new a3I, this.a3J = 0, this.a3K = function() {
			bP.dU(), this.yq = this.jo = this.data.humanCount, this.k7 = 1 === this.yq && !__fx.customLobby.isActive(), this.m8 = !1, this.gi = this.data.isReplay, this.k5 = 0 === this.data.gameMode ? [7, 10, 8][this.data.battleRoyaleMode] : this
				.data.isZombieMode ? 9 : this.data.numberTeams - 2, this.xH = this.data.isContest, this.hO = this.k5 < 7 || 9 === this.k5, this.k5 = 10 === this.k5 && this.k7 ? 7 : this.k5, this.k5 = 8 === this.k5 && 2 !== this.jo ? 7 : this.k5, ax
				.dU(), this.w8 = this.data.numberTeams, this.data.teamPlayerCount ? this.w9 = +(0 < this.data.teamPlayerCount[0]) : (this.w9 = 0, this.hO && this.k7 && (this.data.teamPlayerCount = new Uint16Array(9), this.data.teamPlayerCount.fill(1,
					1, this.w8 + 1), aC.a3H.a3L())), this.a3F = this.jo <= 2 ? 30 : this.jo <= 50 ? 40 : 50, this.a3E = this.gu = __fx.customLobby.isActive() ? __fx.customLobby.gameInfo.spawnSelection : this.data.selectableSpawn, this.op = this.gu ?
				new a34 : null, this.w1 = __fx.customLobby.isActive() ? Math.max(Math.min(__fx.customLobby.gameInfo.botCount, this.data.playerCount), this.jo) : 1 === dg ? this.jo : this.data.playerCount,
				this.w6 = this.w1, this.k9 = this.w1 - this.jo, this.yp = 0, this.eI = this.data.selectedPlayer, this.yk = 0, this.ys = 0, this.z4 = 0, this.yf = 0, aw.a3M(this.data.spawningSeed), ad.dU(), af.dU(), ah.a3N(), b6.nt.oa = [], be.dU(),
				this.yn = 1,
				__fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), bb.dU(), a3O(), ab.dV(), an.a3P(), bZ.dU(), ab.dU(), aq.dU(), bK.dU(), bL.dU(), am.dU(), bT.a3Q(), aD.dU(),
				ah.a6(), aH.dU(), aI.dU(), ak.a3R(), b7.dU(), bf.dU(), bN.dU(), bc.dU(), a3S.putImageData(a3T, 0, 0), aU.dU(), aR.dU(), aQ.dU(), bA.dU(), au.dU(), aT.dU(), aV.dU(), aL.dU(), aP.dU(), aM.dU(), aO.dU(), aK.dU(), aW.dU(), aE.dU(), aF
				.dU(), fa(), ac.dU(), ae.dU(), b2.dU(), b3.dU(), az.dU(), this.z5.dU(), bd.a3Q(), aG.lx(), 0 === af.ld[aC.eI] && aW.show(!1, !0), ae.lP(!0), at.dU(), bd.dc = !0, this.gi || this.k7 && this.gu || z.a0.setState(1), this.a3J = 0
		}, this.a0A = function(a3V) {
			aC.gi || b7.on.a3W.length || (b7.on.a3W = b7.a3X.yG()),
				__fx.customLobby.isActive() === false && ay.x.a3Y(),
				this.yn = 0, bd.a3Z(), z.a0.setState(0), aZ.setState(0), a3V || bS.e3.show();
			if (__fx.customLobby.isActive()) __fx.customLobby.rejoinLobby();
			else 2 === this.a3J ? s.x.a3a() : 1 === this.a3J ? s.t(19) : s.t(5, 5)
		}, this.a3b = function() {
			return this.gi ? aL.gj || !bA.a3c : this.k7 && (aL.gj || this.gu)
		}, this.a3d = function() {
			return 1 === this.yn && !this.gu
		}
}

function a3G() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.elo = null, this.colorsType = 0, this.colorsPersonalized = 1,
		this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData = null, this.spawningType = 0,
		this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this.aIncomeData = null, this
		.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null
}

function a3I() {
	this.a3L = function() {
		var a3e = aC.data;
		b8.pg.a1X(a3e.teamPlayerCount, a3e.playerCount), a3e.numberTeams = b8.pg.a1O(a3e.teamPlayerCount, 0), a3e.teamPlayerCount[0] && a3e.teamPlayerCount[7] && (a3e.teamPlayerCount[7] = 0, this.a3L())
	}, this.a3f = function() {
		var a3e = aC.data;
		a3e.mapType < 2 ? bQ.a6(bQ.a3g(a3e), a3e.mapSeed) : bQ.a3h(a3e.canvas)
	}, this.a3i = function() {
		var a3e = aC.data;
		a3e.colorsData || (a3e.colorsData = new Uint32Array(1)), a3e.selectableColor && (a3e.colorsData[0] = bh.x.uY()), a3e.selectableName && (a3e.playerNamesData || (a3e.playerNamesData = new Array(1)), a3e.playerNamesData[0] = bh.kn.data[122]
			.value)
	}, this.a3j = function() {
		aC.data = new a3G, aC.data.aIncomeType = 2, aC.data.aIncomeData = new Uint8Array(aC.eV), aC.data.aIncomeData[0] = 64
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
	this.a3k = function() {
		return z.a0.qv() ? 2 : 1
	}
}

function c7() {
	var q7, ef, eh, a3l, a3m, a3n, e7, player, a3o, gap, zoom, oT, a3p;

	function a3z(player) {
		for (var aA = oT.length - 1; 0 <= aA; aA--)
			if (oT[aA] === player) return 1
	}

	function a3x(a3u) {
		var aA, eY;
		if (-1 !== a3u)
			for (eY = q7.length, aA = 0; aA < eY; aA++)
				if (q7[aA].hG && q7[aA].ef + 1 === a3u % 4 && q7[aA].eh + 1 === a3u >> 2) return aA;
		return -1
	}

	function a3v(ks, kt) {
		var sB = gap / 2;
		return ks < ef - a3l - 3 * sB || ef + 3 * a3l + 5 * sB < ks || kt < eh - a3l - 3 * sB || eh + 2 * a3l + 3 * sB < kt ? -1 : 4 * (kt < eh - sB ? 0 : kt < eh + a3l + sB ? 1 : 2) + (ks < ef - sB ? 0 : ks < ef + a3l + sB ? 1 : ks < ef + 2 * a3l +
			3 * sB ? 2 : 3)
	}
	this.a3q = function() {
		var aA, es, a3t = [b9.n5, b9.nJ, b9.md, b9.nd, b9.nW];
		for (q7 = new Array(9), aA = 0; aA < 9; aA++) q7[aA] = {
			id: aA,
			hG: !1,
			kY: 0,
			canvas: [],
			ef: 0,
			eh: 0
		};
		for (q7[0].colors = [0, 1, 2, 3], q7[0].ef = 0, q7[0].eh = 0, q7[1].colors = [0, 1, 4], q7[1].ef = 1, q7[1].eh = 0, q7[2].colors = [0, 2], q7[2].ef = -1, q7[2].eh = 0, q7[3].colors = [0], q7[3].ef = 0, q7[3].eh = 0, q7[4].colors = [0, 2],
			q7[4].ef = 1, q7[4].eh = 1, q7[5].colors = [3], q7[5].ef = 0, q7[5].eh = -1, q7[6].id = 20, q7[6].colors = [0], q7[6].ef = 1, q7[6].eh = -1, q7[7].id = 21, q7[7].colors = [0], q7[7].ef = 0, q7[7].eh = 1, q7[8].id = 16, q7[8]
			.colors = [0], q7[8].ef = 0, q7[8].eh = 0, aA = 0; aA < 9; aA++)
			for (es = 0; es < q7[aA].colors.length; es++) q7[aA].canvas.push(function(id, a1d) {
				if (id < 20) return b8.canvas.xa(aa.get(3), id, a1d);
				var a1d = aa.get(3).height,
					a1e = b8.pX.vK(a1d, a1d),
					hW = b8.pX.getContext(a1e);
				20 === id ? hW.drawImage(aa.get(18), 0, 0) : 21 === id && ai.vV.xp(ai.qn.xe + ai.qn.xv, hW, 0, 0, a1d);
				return a1e
			}(q7[aA].id, a3t[q7[aA].colors[es]]))
	}, this.a3s = function() {
		return q7
	}, this.dU = function() {
		oT = [], ef = eh = e7 = 0, a3m = a3n = -1e3, this.resize()
	}, this.resize = function() {
		a3l = Math.floor((z.a0.qv() ? .075 : .0468) * h.pZ), zoom = a3l / aa.get(3).height, gap = Math.floor(a3l / 3)
	}, this.a0d = function(ks, kt) {
		return !!this.hG() && (bd.dc = !0, !!ai.vV.gm(ks, kt, player) || (ks = function(ks, kt) {
			a3n = a3m = -1e3;
			var a3w = a3x(a3v(ks, kt));
			if (-1 === a3w) return 0;
			if (1 !== q7[a3w].colors[q7[a3w].kY])
				if (5 === a3w) {
					if (! function() {
							var dk = performance.now();
							a3p + 4e3 < dk && (oT = []);
							a3p = dk
						}(), a3z(player)) return 1;
					oT.push(player), 16 < oT.length && oT.shift()
				} else if (6 === a3w) {
				for (var aA = oT.length - 1; 0 <= aA; aA--) 0 === af.ld[oT[aA]] && oT.splice(aA, 1);
				0 < oT.length && (b3.a40(1, oT, !0) && b6.fu.oS(oT, player), oT = [])
			} else if (2 === a3w) b6.gv.nz(aQ.h0(), player);
			else if (3 === a3w) aC.gu && b6.gv.gw(a3o);
			else if (0 === a3w)
				if (0 === q7[0].kY) {
					if (aC.a3E && aV.a41() < 350) return 1;
					bT.a42(4), b6.gv.h6(aQ.h0(), player)
				} else az.h8(player, aQ.h0());
			else if (1 === a3w) bT.a42(1), b6.gv.h4(aQ.h0(), a3o);
			else {
				if (7 === a3w) return bT.a42(0), ai.vV.show(ks, kt), 2;
				if (4 === a3w) b3.a40(0, [player], !0) && b6.fu.oP(player);
				else {
					if (8 !== a3w) return 0;
					b6.gv.gz(aQ.h0(), a3o, player)
				}
			}
			return 1
		}(ks, kt), this.qo(), 2 === ks && (ai.vV.hG = !0), 0 < ks))
	}, this.a0f = function(ks, kt) {
		this.hG() || (a3m = ks, a3n = kt, e7 = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = bK.gq(mouseX),
			coordY = bK.gs(mouseY),
			coord = bK.ew(coordX, coordY),
			point = bK.eO(coord);
		if (coordX < 0 || coordY < 0) return;
		(function(ks, kt, eC) {
			ab.eT(eC) || -1 === (ks = bL.h2.a4G(ks, kt)) ? aM.a4F(eC) : aM.a4H(ks)
		}(mouseX, mouseY, point))
	}
	this.click = function(ks, kt, a0m) {
		var gp = bK.gq(ks),
			gr = bK.gs(kt),
			eK = bK.ew(gp, gr),
			eC = bK.eO(eK);
		if (!bK.gt(gp, gr)) return !1;
		gp = (z.a0.qv() ? .025 : .0144) * h.pZ, gr = performance.now();
		if (Math.abs(ks - a3m) > gp || Math.abs(kt - a3n) > gp || e7 + 500 < gr) return !1;
		if (e7 = gr, a0m && ! function(ks, kt, eC) {
				ab.eT(eC) || -1 === (ks = bL.h2.a4G(ks, kt)) ? aM.a4F(eC) : aM.a4H(ks)
			}(ks, kt, eC), aL.gj || this.hG() || !b8.fu.gl(aC.eI) || aC.gi) return this.qo(), !1;
		if (aC.gu) {
			if (!a0m) {
				if (!ab.eT(eC)) return !1;
				a3o = eK, q7[3].hG = !0
			}
		} else if (bL.h2.o4(eK)) a0m ? aM.a48(55, 0) : bL.a46.a47 = -1;
		else {
			if (a0m) return !1;
			bL.h2.a49(ks, kt) || (2 === aC.yn ? ab.g8(eC) && (player = ab.eQ(eC), b8.fu.jC(player) || (q7[0].hG = !0, q7[0].kY = 1, q7[7].hG = !0)) : ab.ed(eC) ? (a3o = al.e9.eB(eC)) && (gp = bK.eO(a3o), q7[8].hG = !0, player = ab.eP(gp) ? aC
				.eV : ab.eQ(gp)) : (a3o = eK, bL.h2.h3(aC.eI, eK) && (q7[0].hG = !0, q7[0].kY = 1, q7[1].hG = !0, q7[1].kY = bM.fA[2] ? 0 : 2), ab.h1(eC) || (ab.eP(eC) ? (player = aC.eV, h5(aC.eI) ? (q7[0].hG = !0, q7[0].kY = 0) : h7(aC
				.eI, player) && (q7[0].hG = !0, q7[0].kY = 3)) : (player = ab.eQ(eC)) === aC.eI ? (q7[0].hG = !0, q7[0].kY = 1, q7[7].hG = !0) : (q7[0].kY = 1, q7[5].hG = function(player) {
				return !b8.fu.jC(player) && !a3z(player) && b3.a40(1, [player], !1)
			}(player), q7[7].hG = !b8.fu.jC(player), eR(player, aC.eI) ? (q7[4].hG = !b8.fu.jC(player) && !ae.a4B(player) && b3.a40(0, [player], !1), q7[6].hG = function(player) {
				if (0 === oT.length) return !1;
				if (performance.now() > a3p + 4e3) return !(oT = []);
				return !a3z(player) && ! function(player) {
					var aA;
					if (aC.hO)
						for (aA = oT.length - 1; 0 <= aA; aA--)
							if (!eR(player, oT[aA])) return 1;
					return
				}(player)
			}(player), h9(aC.eI, player) ? (q7[0].kY = 0, q7[0].hG = !0) : h7(aC.eI, player) && (q7[0].kY = 3, q7[0].hG = !0), q7[0].hG = this.a4D()) : (q7[2].hG = !0, q7[0].hG = !0)))))
		}
		return this.a45(ks, kt)
	}, this.a45 = function(ks, kt) {
		return ef = ks - Math.floor(a3l / 2), eh = kt - Math.floor(a3l / 2), !!this.hG()
	}, this.a0J = function(ks, kt) {
		return !!this.hG() && (ai.vV.hG ? !ai.vV.xn(ks, kt) && (ai.vV.hG = !1, bd.dc = !0) : function(r9, ks, kt) {
			ks = a3v(ks, kt);
			if (0 <= a3x(ks)) return !1;
			if ((1 === ks || 6 === ks) && 0 <= a3x(2)) return !1;
			if ((6 === ks || 9 === ks) && 0 <= a3x(10)) return !1;
			return r9.qo(), bd.dc = !0
		}(this, ks, kt))
	}, this.qo = function() {
		for (var aA = q7.length - 1; 0 <= aA; aA--) q7[aA].hG = !1, q7[aA].kY = 0;
		ai.vV.hG = !1
	}, this.hG = function() {
		return this.a4D() || ai.vV.hG
	}, this.a4D = function() {
		for (var eY = q7.length, aA = 0; aA < eY; aA++)
			if (q7[aA].hG) return !0;
		return !1
	}, this.te = function() {
		if (this.hG())
			if (ai.vV.hG) ai.vV.te();
			else {
				var aA, hW = tf,
					es = q7,
					eY = es.length,
					a4L = (a3l + gap) / zoom;
				for (hW.imageSmoothingEnabled = !0, hW.setTransform(zoom, 0, 0, zoom, ef, eh), aA = 0; aA < eY; aA++) es[aA].hG && tf.drawImage(es[aA].canvas[es[aA].kY], es[aA].ef * a4L, es[aA].eh * a4L);
				hW.imageSmoothingEnabled = !1, hW.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function c8() {
	var j, canvas, a4M, a4N, a4O, a4P = -1;

	function a4Q() {
		var a4R, x4 = canvas.getContext("2d", {
			alpha: !0
		});
		x4.clearRect(0, 0, j, j), x4.fillStyle = b9.mb, x4.fillRect(0, 0, j, j), 0 === a4N && (x4.fillStyle = b9.mg, x4.fillRect(0, 0, j, j)), x4.fillStyle = b9.mf, x4.fillRect(0, 0, j, 1), x4.fillRect(0, 0, 1, j), x4.fillRect(0, j - 1, j, 1), x4
			.fillRect(j - 1, 0, 1, j), a4R = .9 * j / aa.get(0).width, x4.imageSmoothingEnabled = !0, x4.setTransform(a4R, 0, 0, a4R, Math.floor((j - a4R * aa.get(0).width) / 2), Math.floor((j - a4R * aa.get(0).height) / 2)), x4.drawImage(aa.get(0),
				0, 0), x4.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a4T(ks, kt) {
		if (!aL.gj) return ks <= j + ba.gap && kt >= aQ.eh ? 9 : -1;
		if (ks <= 4 * j + ba.gap) {
			if (kt >= aQ.eh) return 0;
			if (kt >= aQ.eh - j - a4O * ba.gap) return 2
		} else if (ks <= 7 * j + ba.gap && kt >= aQ.eh - j - a4O * ba.gap) return 1;
		return -1
	}
	this.gj = !1, this.dU = function() {
		a4N = -1, this.gj = !1, a4O = z.a0.qv() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		j = aQ.j, (canvas = document.createElement("canvas")).width = j, canvas.height = j, a4M = b8.pX.rM(1, (z.a0.qv() ? .5 : .45) * j), a4Q()
	}, this.a0u = function() {
		this.gj = !this.gj, this.gj ? (bA.a0t(!1), aC.gi && bA.a3c && bA.a0v(!0), this.a4S()) : (a4N = -1, a4Q(), !aC.k7 || 1 !== aC.yn || aC.gu || aC.gi || z.a0.setState(1)), bd.dc = !0
	}, this.a4S = function() {
		(aC.k7 || aC.gi) && 1 === aC.yn && (aU.lP(!0), aC.gu || setTimeout(function() {
			bZ.yy()
		}, 0), z.a0.setState(0))
	}, this.gm = function(ks, kt) {
		return 0 <= (a4P = a4T(ks, kt)) || !aL.gj || aC.k7 || aC.gi || bc.hG || aL.a0u(), a4P
	}, this.a0J = function(ks, kt) {
		ks = a4T(ks, kt);
		ks !== a4N && (a4N = ks, this.gj || a4Q(), bd.dc = !0)
	}, this.a0K = function(ks, kt) {
		ks = a4T(ks, kt);
		return -1 !== ks && a4P === ks && (this.gj ? aC.m8 ? (0 <= ks && bA.a0t(!1), !aC.gi) : (0 === ks ? aC.a0A() : 1 === ks ? this.a0u() : 2 === ks && s.t(1, 0), !0) : 9 === ks && (this.a0u(), !0))
	}, this.te = function() {
		var i;
		this.gj ? (i = Math.floor(5.5 * j), tf.setTransform(1, 0, 0, 1, ba.gap, aQ.eh), tf.fillStyle = b9.mb, tf.fillRect(0, 0, i, j), 0 === a4N ? (tf.fillStyle = b9.mg, tf.fillRect(0, 0, 4 * j, j)) : 1 === a4N && (tf.fillStyle = b9.mg, tf
				.fillRect(4 * j, 0, Math.floor(1.5 * j), j)), tf.fillStyle = b9.mf, tf.fillRect(0, 0, i, 1), tf.fillRect(0, 0, 1, j), tf.fillRect(4 * j, 0, 1, j), tf.fillRect(0, j - 1, i, 1), tf.fillRect(i - 1, 0, 1, j), tf.font = a4M, b8.pX
			.textBaseline(tf, 1), b8.pX.textAlign(tf, 1), tf.fillText(L(37), 2 * j, .54 * j), i = .4 * j, aL.a4X(ba.gap + 4 * j + (1.5 * j - i) / 2, aQ.eh + .3 * j, i), i = 1, tf.setTransform(1, 0, 0, 1, ba.gap, aQ.eh - i * a4O * ba.gap - i *
				j), tf.fillStyle = b9.mb, tf.fillRect(0, 0, 4 * j, j), a4N === i + 1 && (tf.fillStyle = b9.mg, tf.fillRect(0, 0, 4 * j, j)), tf.fillStyle = b9.mf, tf.fillRect(0, 0, 4 * j, 1), tf.fillRect(0, 0, 1, j), tf.fillRect(4 * j, 0, 1,
				j), tf.fillRect(0, j - 1, 4 * j, 1), tf.fillText(L(0 === i ? 37 : 38), 2 * j, .54 * j), tf.setTransform(1, 0, 0, 1, 0, 0)) : tf.drawImage(canvas, ba.gap, aQ.eh)
	}, this.p8 = function(player) {
		return 0 !== af.ld[player] && 2 !== aC.yn && !b8.fu.jC(player)
	}, this.a4X = function(ef, eh, eY) {
		tf.setTransform(1, 0, 0, 1, ef, eh), tf.lineWidth = ba.xo, tf.strokeStyle = b9.mf, tf.beginPath(), tf.moveTo(0, 0), tf.lineTo(eY, eY), tf.moveTo(0, eY), tf.lineTo(eY, 0), tf.stroke()
	}
}

function c9() {
	var a4Z, j, a4a, a4b, a4c, a4d, a4e, a4f, a4g;

	function x0() {
		return aQ.a4y(aM.a4u()) ? au.hG ? __fx.settings.keybindButtons ? aQ.eh - 2 * aQ.j - 3 * a4a : aQ.eh - aQ.j - 2 * a4a : __fx.settings.keybindButtons ? aQ.eh - aQ.j - 2 * a4a : aQ.eh - a4a : bA.a4y(aM.a4x()) ? au.hG ? bA.x0() - aQ.j - 2 * a4a :
			bA.x0() - a4a : au.hG ? h.j - aQ.j - (bi.a3k() + 1) * a4a : h.j - bi.a3k() * ba.gap
	}

	function a4l(dk, pE, id, g6, a4o, a4p, vd, a4q, a4r, a4s) {
		var aA, x4, a1e, pP, g, a53 = void 0 !== a4r,
			i = Math.floor(aP.measureText(pE, aM.a4M) + 1.5 * a4b + (a53 ? j : 1.5 * a4b));
		if (bd.dc = !0, i + 2 * a4a + aQ.j > h.i && !a53 && 50 !== id && 20 < pE.length) a4l(dk, (g = b8.zO.a2v(pE))[0], id, g6, a4o, a4p, vd, a4q, a4r, a4s), a4l(dk, g[1], id, g6, a4o, a4p, vd, a4q, a4r, a4s);
		else if (g = i + (50 === id ? a4c : 0), (a1e = document.createElement("canvas")).width = i, a1e.height = j, (x4 = a1e.getContext("2d", {
				alpha: !0
			})).font = aM.a4M, b8.pX.textBaseline(x4, 1), b8.pX.textAlign(x4, 0), x4.clearRect(0, 0, i, j), x4.fillStyle = a4p, x4.fillRect(0, 0, i, j), x4.fillStyle = a4o, x4.fillText(pE, Math.floor(1.5 * a4b), Math.floor(j / 2)), a53 && (x4
				.imageSmoothingEnabled = !0, ai.vV.xp(a4r, x4, i - j, 0, j)), 0 === (pP = {
				e7: dk,
				pE: pE,
				id: id,
				player: g6,
				canvas: a1e,
				a4o: a4o,
				a4p: a4p,
				i: i,
				a4v: g,
				vd: vd,
				a4q: a4q,
				a4r: a4r,
				a4s: a4s
			}).e7 || 0 < a4Z.length && 0 < a4Z[0].e7) a4Z.unshift(pP);
		else {
			for (aA = 1; aA < a4Z.length; aA++)
				if (0 < a4Z[aA].e7) return void a4Z.splice(aA, 0, pP);
			a4Z.push(pP)
		}
	}

	function a4m(dw, sB, es) {
		return "rgb(" + dw + "," + sB + "," + es + ")"
	}

	function a54(id, g1) {
		for (var eY = a4Z.length, aA = 0; aA < eY; aA++) a4Z[aA].id === id && g1-- <= 0 && (a4Z.splice(aA, 1), aA--, eY--)
	}

	function a55(id, player) {
		for (var em = !1, aA = a4Z.length - 1; 0 <= aA; aA--) a4Z[aA].id !== id || player !== aC.eV && a4Z[aA].player !== player || (a4Z.splice(aA, 1), em = !0);
		return em
	}

	function a5S(pE) {
		a4l(340, pE, 6, 0, a4m(215, 245, 255), b9.mc, -1, !1)
	}
	this.a4h = "", this.dU = function() {
		var self;
		a4f = 0, a4e = z.a0.qv() ? 7 : 12, a4d = {
			yb: [0, 0, 0],
			a4i: [0, 0, 0],
			lv: [220, 180, 180],
			td: [0, 0, 0],
			et: [0, 0, 0]
		}, a4Z = [], this.resize(), aC.gu && this.yz(0, 18), bQ.vI.vJ[bQ.eE].name.length && a5S(L(85, [bQ.vI.vJ[bQ.eE].name])), a5S(L(86, [bQ.ej - 2 + "x" + (bQ.ek - 2)])), a5S(L(87, [an.a5T])), an.a5T !== an.a5U && a5S(L(88, [an.a5U + " (" +
			b8.zO.a2r(100 * an.a5U / an.a5T, 1) + ")"
		])), 0 < an.a5V && a5S(L(61, [an.a5V + " (" + b8.zO.a2r(100 * an.a5V / an.a5T, 1) + ")"])), 0 < an.a5W && a5S(L(89, [an.a5W + " (" + b8.zO.a2r(100 * an.a5W / an.a5T, 1) + ")"])), 10 === aC.k5 && a4l(120, L(90), 6, 0, a4m(235, 255,
			120), b9.mc, -1, !1), 0 !== (self = this).a4h.length && (a4l(200, self.a4h, 0, 0, b9.mf, b9.mc, -1, !1), self.a4h = ""), aC.xH && a4l(340, L(39), 6, 0, a4m(255, 200, 0), b9.mc, -1, !1)
	}, this.resize = function() {
		var a4n, aA;
		if (j = (j = Math.floor((z.a0.qv() ? .031 : .0249) * h.pZ)) < 10 ? 10 : j, this.fontSize = Math.floor(2 * j / 3), this.a4M = b8.pX.rM(1, this.fontSize), a4a = ba.gap, a4b = Math.floor(j / 5), 0 < a4Z.length)
			for (a4n = a4Z, a4Z = [], aA = a4n.length - 1; 0 <= aA; aA--) a4l(a4n[aA].e7, a4n[aA].pE, a4n[aA].id, a4n[aA].player, a4n[aA].a4o, a4n[aA].a4p, a4n[aA].vd, a4n[aA].a4q, a4n[aA].a4r, a4n[aA].a4s);
		this.a4t()
	}, this.a4t = function() {
		a4g = document.createElement("canvas");
		var pE = L(40),
			x4 = (a4c = aP.measureText(pE, this.a4M) + 5 * a4b, a4g.height = j, a4g.width = a4c, a4g.getContext("2d", {
				alpha: !0
			}));
		x4.font = this.a4M, b8.pX.textBaseline(x4, 1), b8.pX.textAlign(x4, 1), x4.clearRect(0, 0, a4c, j), x4.fillStyle = b9.n2, x4.fillRect(0, 0, a4c, j), x4.fillStyle = b9.mf, x4.fillText(pE, Math.floor(a4c / 2), Math.floor(j / 2))
	}, this.a4u = function() {
		var eY;
		return au.hG ? au.i : 0 === (eY = a4Z.length) ? 0 : 1 === eY ? a4Z[0].a4v : a4w(a4Z[0].a4v, a4Z[1].a4v)
	}, this.a4x = function() {
		var eY = a4Z.length;
		return au.hG ? eY ? a4w(au.i, a4Z[0].a4v) : au.i : 0 === eY ? 0 : 1 === eY ? a4Z[0].a4v : 2 === eY ? a4w(a4Z[0].a4v, a4Z[1].a4v) : a4w(a4w(a4Z[0].a4v, a4Z[1].a4v), a4Z[2].a4v)
	}, this.gm = function(ef, eh) {
		for (var m5, a4z, a50 = x0(), aA = a4Z.length - 1; 0 <= aA; aA--)
			if ((a4z = a50 - (aA + 1) * j) <= eh && eh < a4z + j) return 50 === a4Z[aA].id ? ef >= h.i - a4c - a4a - a4Z[aA].i && (ef >= h.i - a4c - a4a ? b6.fu.oP(a4Z[aA].player) : aG.lz(a4Z[aA].player, 800, !1, 0), !0) : ef >= h.i - a4Z[aA].i -
				a4a && (736 === a4Z[aA].id ? (a4z = a4Z[aA].pE.split(" "), window.open(a4z[a4z.length - 1], "_blank")) : a4Z[aA].a4q && (a4Z[aA].a4s && a4Z[aA].a4s.er ? (a4z = a4Z[aA].a4s.eK, m5 = bK.eg(a4z) - 10, a4z = bK.ei(a4z) - 10, aG
					.ly(m5, a4z, 19 + m5, 19 + a4z)) : a4Z[aA].a4s && a4Z[aA].a4s.es ? aG.m0(a4Z[aA].player, a4Z[aA].a4s.m1) : (aG.lz(a4Z[aA].player, 800, !1, 0), 0 <= a4Z[aA].vd && (m5 = a4Z[aA].vd, a4Z[aA].vd = a4Z[aA].player, a4Z[
					aA].player = m5))), !0);
		return !1
	}, this.zB = function(dk, pE, id, g6, a4o, a4p, vd, a4q, a4r, a4s) {
		a4l(dk, pE, id, g6, a4o, a4p, vd, a4q, a4r, a4s)
	}, this.a52 = function(p) {
		a4l(300, p, 252, 0, b9.mf, b9.mc, -1, !1)
	}, this.a37 = function(id) {
		for (var aA = a4Z.length - 1; 0 <= aA; aA--) a4Z[aA].id === id && (a4Z[aA].e7 = 1)
	}, this.yz = function(player, id) {
		0 === id ? (aP.iw(player, 0), a54(423, 0), a4l(160, L(41, [af.zM[player]]), 423, player, "rgb(10,220,10)", b9.mc, -1, !1)) : 1 === id ? (a55(50, aC.eV), aP.iw(player, 1), a4l(360, L(42, [af.zM[player]]), 0, player, b9.nL, b9.mc, -1, !0),
			aG.lz(player, 2700, !1, 0)) : 2 === id ? (aP.iw(player, 2), a4l(0, L(43), 0, player, "rgb(10,255,255)", b9.mc, -1, !0), aG.lz(player, 2700, !1, 0)) : 3 === id ? (aP.iw(player, 2), a4l(0, L(44, [af.zM[player]]), 0, player, b9.mf,
			b9.mc, -1, !0), aG.lz(player, 2700, !1, 0)) : 4 === id ? this.a56(1, player, player) : 5 === id ? 2 === af.a2B[player] || b8.fu.jC(aC.eI) || (function(id, lY) {
			var aA, a5H = 0,
				eY = a4Z.length;
			for (aA = 0; aA < eY; aA++)
				if (a4Z[aA].id === id && lY <= ++a5H) return a4Z.splice(aA, 1)
		}(1, 5), ae.a58(player) ? a4l(180, L(45, [af.zM[player]]), 1, player, a4m(255, 200, 180), b9.mc, -1, !0) : (a54(573, 0), a4l(180, L(46, [af.zM[player]]), 573, player, b9.nL, b9.mc, -1, !0))) : 18 === id ? a4l(255, L(47), 18, 0, b9.mf,
			b9.mc, -1, !1) : 21 === id ? a4l(220, L(48), id, 0, b9.mf, b9.mc, -1, !1) : 22 === id ? this.a56(2, player, player) : 59 === id && a4l(0, L(49), id, 0, b9.nc, b9.mc, 0, !1)
	}, this.a04 = function(p) {
		a4l(200, L(50, [p]), 94, 0, b9.mf, b9.nH, -1, !1)
	}, this.z6 = function(a59) {
		if (aC.eI === a59 && !aC.k7)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			a4l(0, "Your Win Count is now " + __fx.wins.count, 3, a59, b9.mf, b9.mc, -1, !0);
		af.gM[a59] && (aP.iw(a59, 2), aC.jo < 100 ? a4l(0, L(44, [af.zM[a59]]), 3, a59, b9.mf, b9.mc, -1, !0) : a4l(0, L(51, [af.zM[a59]]), 3, a59, b9.mf, b9.mc, -1, !0))
	}, this.a4F = function(eC) {
		var a5B, pE, a5A = "(" + bK.eg(eC >> 2) + ", " + bK.ei(eC >> 2) + ")",
			a4q = !1,
			player = 0;
		ab.eT(eC) ? ab.eP(eC) ? a5A = L(52, [a5A]) : (player = ab.eQ(eC), pE = L(53, [b8.x4.a1q(af.zQ[player], b8.pX.rM(0, 10), 150)]) + "   ", pE = (pE += L(54, [b8.zO.y5(af.ga[player])]) + "   ") + L(55, [b8.zO.y5(af.gM[player])]) + "   ", aC
				.hO && (a5B = be.z9[be.kA[be.eW[player]]], pE += L(56) + ": " + a5B + "   "), b8.fu.jC(player) && (pE += L(57) + ": " + aD.jz[aD.hD[player]] + "   "), a5A = pE = (pE += L(58, [player]) + "   ") + L(59, [a5A]), a4q = !0) : a5A = ab
			.ed(eC) ? L(60, [a5A]) + "   #" + ab.eG(eC) : L(61, [a5A]), bd.dc = !0, a54(55, 0), a4l(220, a5A, 55, player, b9.mf, b9.mc, -1, a4q)
	}, this.a4H = function(a5C) {
		var kW = bL.x,
			player = kW.a5D[a5C] >> 3,
			pE = (bd.dc = !0, a54(55, 0), L(62, [af.zM[player]]) + "   ");
		a4l(220, pE += L(54, [kW.a5E[a5C]]), 55, player, b9.mf, b9.mc, -1, !0)
	}, this.o9 = function(nw, a5F, oA) {
		nw === aC.eI ? a4l(175, " " + L(63, [af.zM[a5F]]) + ": ", 1001, a5F, a4m(200, 255, 210), b9.mc, -1, !0, oA) : this.a5G(nw, oA)
	}, this.a5G = function(nw, oA) {
		a54(1e3, 0), a4l(175, af.zM[nw] + ": ", 1e3, nw, b9.mf, "rgba(5,60,25,0.9)", -1, !0, oA)
	}, this.zC = function() {
		var p;
		aC.ys ? (p = L(64), aP.zA(L(65), 2, 1, 12), a4l(0, p, 40, 0, "rgb(10,220,10)", b9.mc, -1, !1)) : (p = L(66), aP.zA(L(67), 2, 0, 16), a4l(0, p, 41, 0, b9.mf, b9.mc, -1, !1))
	}, this.xB = function() {
		var g1 = af.zM,
			eb = aC.data;
		a4l(300, g1[0] + " [" + aC.z5.xG(eb.elo[0]) + "] vs " + g1[1] + " [" + aC.z5.xG(eb.elo[1]) + "]", 65, 0, b9.mW, "rgba(100,255,255,0.75)", -1, !1)
	}, this.a5I = function(p) {
		a4l(350, p, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.a5J = function(a5K) {
		a4l(0, L(a5K ? 68 : 69), 247, 0, b9.nb, b9.mc, -1, !1)
	}, this.xJ = function(xF, xI, a5L) {
		var eb = aC.data,
			g1 = af.zM;
		a4l(0, g1[0] + ": " + aC.z5.xG(eb.elo[0]) + " -> " + xF, 66, 0, b9.mf, a5L[0], -1, !1), a4l(0, g1[1] + ": " + aC.z5.xG(eb.elo[1]) + " -> " + xI, 66, 1, b9.mf, a5L[1], -1, !1)
	}, this.oQ = function(player, id) {
		0 === id ? a55(50, player) ? (a4l(128, L(70, [af.zM[player]]), 52, player, a4m(180, 255, 180), b9.mc, -1, !0), ae.p6(player, 2, 255)) : a4l(384, L(71, [af.zM[player]]), 51, player, a4m(210, 210, 255), b9.mc, -1, !0) : a55(51, player) ? (
			a4l(128, L(72, [af.zM[player]]), 52, player, b9.mf, "rgba(60,120,10,0.9)", -1, !0), ae.p6(player, 2, 255)) : (a4l(384, L(73, [af.zM[player]]), 50, player, b9.mf, "rgba(90,90,90,0.9)", -1, !0), ae.p6(player, 2, 96))
	}, this.oU = function(yb, target) {
		var color = a4m(210, 255, 210);
		1 < yb.length ? a4l(230, L(74, [yb.length, af.zM[target]]), 66, target, color, b9.mc, -1, !0) : a4l(230, L(75, [af.zM[yb[0]], af.zM[target]]), 66, yb[0], color, b9.mc, target, !0)
	}, this.a5M = function(player, target) {
		a4l(230, L(76, [af.zM[player], af.zM[target]]), 66, player, b9.mf, "rgba(75,65,5,0.9)", target, !0)
	}, this.a48 = function(id, g1) {
		a54(id, g1)
	}, this.yu = function(id, player) {
		a55(id, void 0 === player ? aC.eV : player)
	}, this.a5N = function(id) {
		for (var aA = a4Z.length - 1; 0 <= aA; aA--)
			if (a4Z[aA].id === id) return a4Z[aA];
		return null
	}, this.oL = function(a5O, a5P, player) {
		2 !== af.a2B[aC.eI] && (a4l(200, 1 === a5O ? L(77, [af.zM[player]]) : L(78, [a5O, af.zM[player]]), 30, player, "rgb(190,255,190)", b9.mc, -1, !0), a5P) && a4l(30, 1 === a5P ? L(79) : L(80, [a5P]), 30, 0, b9.mf, b9.mc, -1, !1)
	}, this.a5R = function(a5O, player) {
		2 !== af.a2B[aC.eI] && (a54(31, 0), 2 === af.a2B[player] || player >= aC.jo ? a4l(150, 1 === a5O ? L(81, [af.zM[player]]) : L(82, [af.zM[player], a5O]), 31, player, b9.mW, "rgba(205,205,205,0.9)", -1, !0) : a4l(150, 1 === a5O ? L(83, [af
			.zM[player]
		]) : L(84, [af.zM[player], a5O]), 31, player, b9.mW, "rgba(205,255,205,0.9)", -1, !0))
	}, this.yt = function(bp) {
		for (var et = bd.jl(), aA = 2; 0 <= aA; aA--) 0 < a4d.td[aA] && (bp || a4d.et[aA] < et - 220) && this.a5X(aA)
	}, this.a5X = function(id) {
		var pE, eY = a4d.td[id],
			player = a4d.yb[id];
		a4d.td[id] = 0, 1 === eY ? (0 === id ? pE = L(91, [af.zM[player], af.zM[a4d.a4i[0]]]) : 1 === id ? pE = L(92, [af.zM[player]]) : 2 === id ? pE = L(93, [af.zM[player]]) : 3 === id && (pE = L(94, [af.zM[player]])), a54(7, 0), a4l(a4d.lv[
			id], pE, 7, a4d.a4i[id], b9.mf, b9.mc, -1, !0)) : (pE = L(0 === id ? 95 : 1 === id ? 96 : 97, [eY]), a54(7, 0), a4l(a4d.lv[id], pE, 7, player, b9.mf, b9.mc, -1, !1))
	}, this.a56 = function(id, gy, vd) {
		var et = bd.jl(),
			eY = a4d.td[id] + 1;
		a4d.td[id]++, a4d.yb[id] = gy, a4d.a4i[id] = vd, 1 === eY && (a4d.et[id] = et), (1 === eY && (aC.yq < 32 || 2 === aC.yn) || 1 < eY && (a4d.et[id] < et - 140 || 2 === aC.yn)) && this.a5X(id)
	}, this.ii = function() {
		b0.ii();
		for (var hi = (hi = a4Z.length - a4e) <= 1 ? 1 : hi * hi, aA = a4Z.length - 1; 0 <= aA; aA--) 0 < a4Z[aA].e7 && (a4Z[aA].e7 -= hi, a4Z[aA].e7 <= 0) && (bd.dc = !0, a4Z.splice(aA, 1));
		! function() {
			var g1, aA;
			if (128 !== a4f && !(++a4f < 128))
				for (g1 = 5, aA = ak.jp - 1; 0 <= aA; aA--) 1 === af.a2B[ak.jq[aA]] && 0 < g1-- && a4l(240, L(94, [af.zM[ak.jq[aA]]]), 1, ak.jq[aA], b9.mW, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.yt(!1)
	}, this.te = function() {
		for (var w4, eh = x0(), aA = a4Z.length - 1; 0 <= aA; aA--) w4 = eh - (aA + 1) * j, 50 === a4Z[aA].id ? (tf.drawImage(a4Z[aA].canvas, h.i - a4Z[aA].i - a4c - a4a, w4), tf.drawImage(a4g, h.i - a4c - a4a, w4)) : tf.drawImage(a4Z[aA].canvas,
			h.i - a4Z[aA].i - a4a, w4)
	}
}

function cA() {
	var a5Z, a5a, a5b, i, j, font, pE;

	function a5g(a5h) {
		return a5h < 10 ? "0" + a5h : String(a5h)
	}
	this.dU = function() {
		pE = L(98)
	}, this.resize = function() {
		i = Math.floor((z.a0.qv() ? .53 : .36) * h.pZ), j = Math.floor(.065 * i), font = b8.pX.rM(1, Math.floor(.9 * j)), a5b--, this.setTime()
	}, this.ii = function() {
		this.setTime() && (bd.dc = !0)
	}, this.setTime = function() {
		for (var dk = new Date, a5c = dk.getUTCMinutes(), a5d = dk.getUTCSeconds(), a5e = [0, 10, 20, 25, 30, 35, 40, 45, 50], a5f = (a5a = 3600 - 60 * a5c - a5d, a5a %= 300, 300), aA = 0; aA < a5e.length; aA++)
			if ((60 * a5c + a5d + a5a) % 3600 == 60 * a5e[aA]) {
				a5f = 0;
				break
			} return a5a += a5f, a5Z = pE + a5g(Math.floor(a5a / 60)) + ":" + a5g(a5a % 60), a5b !== (a5b = 60 * a5c + a5d) && (i = aP.measureText(a5Z, font), i += Math.floor(.4 * j), !0)
	}, this.te = function() {
		tf.lineWidth = 1 + Math.floor(j / 15), tf.translate(h.i - j, Math.floor(.5 * (h.j + i))), tf.rotate(-Math.PI / 2), tf.fillStyle = b9.mf, tf.fillRect(0, 0, i, j), tf.strokeStyle = b9.mW, tf.strokeRect(0, 0, i, j + 10), tf.fillStyle = b9
			.mW, tf.font = font, b8.pX.textBaseline(tf, 1), b8.pX.textAlign(tf, 1), tf.fillText(a5Z, Math.floor(i / 2), Math.floor(.59 * j)), tf.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function cB() {
	var a4Z, a5i, a4M, j, a5j;

	function a5l(aA) {
		var a5n = !0,
			he = b9.mf,
			i = (a4Z[aA].iz === aC.eV ? a4Z[aA].x4.fillStyle = b9.mq : (ab.a5o(a4Z[aA].iz), a4Z[aA].x4.fillStyle = b8.color.mZ(bM.f8[0], bM.f8[1], bM.f8[2], .87), 400 < b8.pg.a1I(bM.f8, 0, 2) && (a5n = !1, he = b9.mW)), a4Z[aA].canvas.width),
			rt = (a4Z[aA].x4.clearRect(0, 0, i, j), a4Z[aA].x4.fillRect(0, 0, i, j), a4Z[aA].x4.fillStyle = he, ! function(x4, i, j) {
				x4.fillRect(0, 0, i, 1), x4.fillRect(0, j - 1, i, 1), x4.fillRect(0, 0, 1, j), x4.fillRect(i - 1, 0, 1, j)
			}(a4Z[aA].x4, i, j), a5i + 2 * j < i && (a4Z[aA].x4.fillRect(i - a5i - j, 0, 1, j), a4Z[aA].x4.fillText(af.zM[a4Z[aA].iz], Math.floor((i - a5i) / 2), Math.floor(.57 * j))), 0 !== a4Z[aA].id ? 0 : j);
		a4Z[aA].x4.fillText(b8.zO.y5(a4Z[aA].hD), Math.floor(i - a5i / 2 - rt), Math.floor(.57 * j)),
			function(aA, i, rt, a5n) {
				a4Z[aA].x4.fillStyle = a5n ? b9.mh : b9.md;
				a5n = Math.floor(a5i * a4Z[aA].hD / a4Z[aA].a5u);
				a4Z[aA].x4.fillRect(Math.floor(i - a5i - rt), j - a5j, a5n, a5j)
			}(aA, i, rt, a5n), 0 === a4Z[aA].id ? (a5r(aA, i, a5n, he), function(aA, i, a5n) {
				a4Z[aA].x4.strokeStyle = a5n ? b9.mx : b9.n7, a4Z[aA].x4.fillRect(j, 0, 1, j);
				a5n = i - j;
				a4Z[aA].x4.beginPath(), a4Z[aA].x4.moveTo(Math.floor(.3 * j + a5n), Math.floor(j / 2)), a4Z[aA].x4.lineTo(Math.floor(j - .3 * j + 0 + a5n), Math.floor(j / 2)), a4Z[aA].x4.stroke(), a4Z[aA].x4.beginPath(), a4Z[aA].x4.moveTo(Math
					.floor(j / 2 + a5n), Math.floor(.3 * j)), a4Z[aA].x4.lineTo(Math.floor(j / 2 + a5n), Math.floor(j - .3 * j + 0)), a4Z[aA].x4.stroke()
			}(aA, i, a5n)) : a5r(aA, 2 * j, a5n, he)
	}

	function a5r(aA, i, a5n, he) {
		a4Z[aA].x4.strokeStyle = a4Z[aA].a5v ? b9.mo : a5n ? b9.nD : b9.nE, a4Z[aA].x4.fillStyle = he, a4Z[aA].x4.fillRect(i - j, 0, 1, j), a4Z[aA].x4.lineWidth = Math.max(Math.floor(j / 12), 3), a4Z[aA].x4.lineCap = "round";
		a5n = .35;
		i = j + 1, a4Z[aA].x4.beginPath(), a4Z[aA].x4.moveTo(Math.floor(i - a5n * j + 0), Math.floor(a5n * j)), a4Z[aA].x4.lineTo(Math.floor(i - j + a5n * j), Math.floor(j - a5n * j + 0)), a4Z[aA].x4.stroke(), a4Z[aA].x4.beginPath(), a4Z[aA].x4
			.moveTo(Math.floor(i - j + a5n * j), Math.floor(a5n * j)), a4Z[aA].x4.lineTo(Math.floor(i - a5n * j + 0), Math.floor(j - a5n * j + 0)), a4Z[aA].x4.stroke()
	}

	function a65(eY) {
		for (var hD, aA = eY - 1; 0 <= aA; aA--) hD = ac.fl(aC.eI, aA), a4Z[aA].hD !== hD && (a4Z[aA].hD = hD, a4Z[aA].a5u = hD > a4Z[aA].a5u ? hD : a4Z[aA].a5u, a4Z[aA].a5m = !0)
	}

	function a5k(a67) {
		a67.canvas = document.createElement("canvas"), bQ.vO.font = a4M;
		var i = a5i;
		a67.iz < aC.eV && 0 === a67.id && (i += Math.floor(bQ.vO.measureText(af.zM[a67.iz] + "000").width)), i += j, 0 === a67.id && (i += j), a67.canvas.width = i, a67.canvas.height = j, a67.x4 = a67.canvas.getContext("2d", {
			alpha: !0
		}), a67.x4.font = a4M, b8.pX.textBaseline(a67.x4, 1), b8.pX.textAlign(a67.x4, 1)
	}

	function a61(aA) {
		return aT.a69() ? h.i - a4Z[aA].canvas.width - ba.gap : aT.ef
	}

	function a62(aA) {
		return Math.floor(2 * ba.gap + (aT.a69() ? aV.j + ba.gap : 0) + aT.j + aA * (1.3 * j))
	}
	this.dU = function() {
		a4Z = [], this.resize()
	}, this.resize = function() {
		a4M = aM.a4M, j = aM.fontSize + 5, j = Math.floor(1.25 * j), z.a0.qv() && (j = Math.floor(1.25 * j)), a5j = Math.floor(.15 * j), bQ.vO.font = a4M, a5i = Math.floor(bQ.vO.measureText("02 000 000 0000").width);
		for (var aA = a4Z.length - 1; 0 <= aA; aA--) a5k(a4Z[aA]), a5l(aA)
	}, this.lP = function() {
		for (var aA = a4Z.length - 1; 0 <= aA; aA--) a4Z[aA].a5m && (a4Z[aA].a5m = !1, a5l(aA))
	}, this.gm = function(ks, kt) {
		if (2 !== aC.yn && 0 !== af.ld[aC.eI] && !aC.gi && !b8.fu.jC(aC.eI))
			for (var a5w, a5x, a5y, a5z = z.a0.qv() ? j : 0, a60 = z.a0.qv() ? Math.floor(.15 * j) : 0, aA = a4Z.length - 1; 0 <= aA; aA--)
				if (a5w = a61(aA), a5x = a62(aA), a5y = a4Z[aA].canvas.width, a5x - a60 <= kt && kt <= a5x + j + a60) {
					if (a5w - a5z <= ks && ks <= a5w + j + a5z) return a4Z[aA].a5v || (a4Z[aA].a5m = !0, a4Z[aA].a5v = !0, 0 === a4Z[aA].id && b6.gv.o7(a4Z[aA].iz)), !0;
					if (0 === a4Z[aA].id && a5w + a5y - j - a5z <= ks && ks <= a5w + a5y + a5z) return bT.a42(3), b6.gv.h6(aQ.h0(), a4Z[aA].iz), !0
				} return !1
	}, this.ii = function() {
		var eY;
		0 === af.ld[aC.eI] || b8.fu.jC(aC.eI) && !aC.gi || (function(eY) {
			if (a4Z.length !== eY) return 1;
			for (var aA = eY - 1; 0 <= aA; aA--)
				if (a4Z[aA].id !== ac.ff(aC.eI, aA) || a4Z[aA].iz !== ac.fk(aC.eI, aA)) return 1;
			return
		}(eY = ac.fe(aC.eI)) && function(eY) {
			var aA, id, iz, es, hD, a4n = [];
			loop: for (aA = 0; aA < eY; aA++) {
				for (id = ac.ff(aC.eI, aA), iz = ac.fk(aC.eI, aA), es = 0; es < a4Z.length; es++)
					if (a4Z[es].id === id && a4Z[es].iz === iz) {
						a4n.push(a4Z.splice(es, 1)[0]);
						continue loop
					} hD = ac.fl(aC.eI, aA), a5k(hD = {
					iz: iz,
					hD: hD,
					a5u: hD,
					id: id,
					a5m: !0,
					a5v: !1,
					canvas: null,
					x4: null
				}), a4n.push(hD)
			}
			a4Z = a4n
		}(eY), a65(eY))
	}, this.a68 = function(g6) {
		for (var eY = Math.min(a4Z.length, ac.fe(aC.eI)), aA = 0; aA < eY; aA++)
			if (a4Z[aA].iz === g6) return void(a4Z = [])
	}, this.te = function() {
		if (0 !== af.ld[aC.eI] && (!b8.fu.jC(aC.eI) || aC.gi))
			for (var aA = a4Z.length - 1; 0 <= aA; aA--) tf.drawImage(a4Z[aA].canvas, a61(aA), a62(aA))
	}
}

function cC() {
	var a4Z, jt, a6A, a6B, j, a4M, fontSize, a6C, a6D, a6E, a6F, canvas, x4, lq, a6G;

	function tw(aA) {
		return L(0 === aA ? 99 : 1 === aA ? 100 : 2 === aA ? 101 : 102)
	}

	function a6N() {
		tf.drawImage(canvas, ba.gap + (aC.hO ? ba.gap + bf.a6O() : 0), a6P + 2 * ba.gap)
	}

	function a6H() {
		canvas.width = a4Z[0].width + a6E, canvas.height = j + a6E, (x4 = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, a4Z[0].width + a6E, j + a6E), x4.translate(Math.floor(a6E / 2), Math.floor(a6E / 2)), x4.lineWidth = a6E, x4.fillStyle = 1 === a4Z[0].a6M ? b9.mk : b9.mc, a6Q(), x4.fill(), x4.strokeStyle = 1 === a4Z[0].a6M ? b9.mW :
			b9.mf, a6Q(), x4.stroke(), b8.pX.textAlign(x4, 1), b8.pX.textBaseline(x4, 1), x4.fillStyle = 1 === a4Z[0].a6M ? b9.mW : b9.mf, x4.font = a4M[0], x4.fillText(tw(a4Z[0].a6L), Math.floor(a4Z[0].width / 2), Math.floor(.72 * a6C[0] * j)), x4
			.font = a4M[1], x4.fillText(a4Z[0].pE, Math.floor(a4Z[0].width / 2), Math.floor((a6C[0] + .48 * a6C[1]) * j))
	}

	function a6Q() {
		x4.beginPath(), x4.moveTo(a6F, 0), x4.lineTo(a4Z[0].width - a6F, 0), x4.lineTo(a4Z[0].width, a6F), x4.lineTo(a4Z[0].width, j - a6F), x4.lineTo(a4Z[0].width - a6F, j), x4.lineTo(a6F, j), x4.lineTo(0, j - a6F), x4.lineTo(0, a6F), x4.closePath()
	}
	this.dU = function() {
		jt = 4, a6A = a6B = lq = 0, a4Z = [], a4M = new Array(2), fontSize = new Array(2), (a6C = new Array(2))[0] = .3, a6C[1] = .7, a6D = new Array(4), canvas = document.createElement("canvas"), a6G = bd.e7 + 2e3, this.resize()
	}, this.resize = function() {
		var aA, i;
		for (j = Math.floor((z.a0.qv() ? .0725 : .058) * h.pZ), fontSize[0] = Math.floor(.85 * a6C[0] * j), fontSize[1] = Math.floor(.85 * a6C[1] * j), a4M[0] = b8.pX.rM(1, fontSize[0]), a4M[1] = b8.pX.rM(1, fontSize[1]), aA = a6D.length -
			1; 0 <= aA; aA--) a6D[aA] = this.measureText(tw(aA) + "000", a4M[0]);
		if (a6E = Math.floor(1 + .05 * j), a6F = Math.floor(.2 * j), 0 < a4Z.length) {
			for (aA = a4Z.length - 1; 0 <= aA; aA--) i = this.measureText(a4Z[aA].pE + "00", a4M[1]), a4Z[aA].width = i < a6D[aA] ? a6D[aA] : i;
			a6H()
		}
	}, this.ii = function() {
		0 !== jt && (4 === jt ? bd.e7 > a6G && (jt = 0, 1 === aC.yn) && aP.zA(bQ.vI.vJ[bQ.eE].name, 3, 1, 9) : (1 === jt ? (0 === a6A && (a6H(), a6A = 1e-4), 1 <= (a6A += .002 * (bd.e7 - lq)) && (a6B = 0, jt = 2, a6A = 1), bd.dc = !0) : 2 ===
			jt ? ((a6B += (bd.e7 - lq) / 1e3) > a4Z[0].lv || 1 < a6B && 1 < a4Z.length) && (jt = 3) : 3 === jt && ((a6A -= .002 * (bd.e7 - lq)) <= 0 && (a6A = 0, a4Z.shift(), jt = 0 < a4Z.length ? 1 : 0), bd.dc = !0), lq = bd.e7))
	}, this.measureText = function(pE, a4M) {
		return tf.font = a4M, Math.floor(tf.measureText(pE).width)
	}, this.iw = function(a6K, aA) {
		this.zA(af.zM[a6K], aA, 1, 0 === aA ? 3 : 7)
	}, this.zA = function(pE, a6L, a6M, lv) {
		var i;
		pE.length && (i = (i = this.measureText(pE + "00", a4M[1])) < a6D[a6L] ? a6D[a6L] : i, a4Z.push({
			pE: pE,
			width: i,
			a6L: a6L,
			a6M: a6M,
			lv: lv
		}), 0 === jt) && (a6A = 0, jt = 1, lq = bd.e7)
	}, this.te = function() {
		0 !== jt && 0 !== a6A && (a6A < 1 ? (tf.globalAlpha = a6A, a6N(), tf.globalAlpha = 1) : a6N())
	}
}

function ck() {
	var j, canvas, x4, a6R, a6S, a6T, a6U, a5m, a6V, a6W, a6X, a6Y, a5K = !1,
		a1e = (this.hG = !1, this.i = 0, new Array(2)),
		a6Z = 0;

	function lQ() {
		var i = au.i,
			kW = (a5m = !1, x3(x4, i, j), Math.floor(i / 2));
		1 === a6R ? (x4.fillStyle = b9.mz, x4.fillRect(kW, 0, kW, j)) : -1 === a6R && (x4.fillStyle = b9.nF, x4.fillRect(0, 0, kW, j)), x5(x4, i, j, 2);
		var kW = (kW = Math.floor(.25 * j)) < 2 ? 2 : kW,
			a5T = (x4.fillStyle = b9.ml, Math.floor((j - 4) * a6S[1] / a6T[1]));
		0 < a5T && x4.fillRect(2, j - 2 - a5T, kW, a5T), 0 < (a5T = Math.floor((j - 4) * a6S[0] / a6T[0])) && x4.fillRect(i - 2 - kW, j - 2 - a5T, kW, a5T);
		kW = (kW = Math.floor(j / 8)) < 2 ? 2 : kW, x7(x4, Math.floor(.4 * j), 0, j, kW, .5, !1), x7(x4, Math.floor(i - 1.4 * j), 0, j, kW, .5, !0), a5T = 1.1 * j / a1e[0].width;
		x4.imageSmoothingEnabled = !0, x4.setTransform(a5T, 0, 0, a5T, (i - a5T * a1e[0].width) / 2, -.05 * j), x4.drawImage(a1e[+a5K], 0, 0), x4.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a6e() {
		a6Y = -1, a5K = ag.a6f(), aM.a37(257), aM.a5J(a5K), au.hG = !0, a5m = !0, a6V = 360;
		for (var f0, dk = 0, aA = ak.jp - 1; 0 <= aA; aA--) b8.fu.jC(ak.jq[aA]) || (dk += af.gM[ak.jq[aA]]);
		a5K ? a6T[0] = Math.max(bJ.dl(3 * dk, 4), 1) : aC.hO ? 9 === aC.k5 && 8 === be.kA[bf.l1()] ? a6T[0] = Math.max(dk, 1) : (f0 = bJ.dl(100 * bf.a2b(), aC.jY), f0 = bJ.p5(200 - 2 * f0, 40, 100), f0 = bJ.dl(f0 * dk, 100), a6T[0] = Math.max(f0,
			1)) : a6T[0] = Math.max(bJ.dl(3 * dk, 5), 1), a6T[1] = Math.max(dk - a6T[0], 1)
	}

	function a6a() {
		a6X = bd.jl(), a5m = !0, a6V = a6R = 0, a6U = [], au.hG = !1, aM.yu(247), a6S[0] = a6S[1] = 0, aM.a37(673)
	}

	function x0() {
		return aQ.a4y(aM.a4u()) ? __fx.settings.keybindButtons ? aQ.eh - 2 * (j + ba.gap) : aQ.eh - j - ba.gap : bA.a4y(aM.a4x()) ? bA.x0() - j - ba.gap : h.j - j - bi.a3k() * ba.gap
	}
	this.dV = function() {
		for (var aA = 0; aA < 2; aA++) a1e[aA] = b8.canvas.xa(aa.get(3), 8 - aA, b9.nm), a1e[aA] = b8.canvas.a1g(a1e[aA])
	}, this.dU = function() {
		a6X = -1e4, a6W = a6Z = 0, a6Y = -1, this.hG = !1, a5m = a5K = !1, a6S = [a6R = a6V = 0, 0], a6T = [1, 1], a6U = [], this.resize()
	}, this.resize = function() {
		j = aQ.j, this.i = 4 * j, (canvas = document.createElement("canvas")).width = this.i, canvas.height = j, x4 = canvas.getContext("2d", {
			alpha: !0
		}), lQ()
	}, this.lP = function() {
		a5m && lQ()
	}, this.gm = function(ef, eh) {
		return !!this.hG && !(ef < h.i - this.i - ba.gap || eh < x0() || (aC.gi || this.hH(aC.eI) && (aL.gj && aL.a0u(), b6.gv.hI(ef > h.i - ba.gap - this.i / 2 ? 1 : 0)), 0))
	}, this.ii = function() {
		0 < a6W ? 0 === --a6W && a6a() : this.hG ? 180 == --a6V && 3 * a6S[0] < a6T[0] ? a6a() : a6S[0] >= a6T[0] ? a5K ? bP.yQ.yi() : bP.yQ.ym() : a6S[1] >= a6T[1] ? a6W = 4 : a6V <= 0 && a6a() : ! function() {
			var a6h = bd.jl();
			if (a6h % 40 == 14) {
				if (a6Z) return !(a6h < a6Z) && !(a6h < a6X + 535) && (a6Z = a6h + 1071, b8.fu.a2E()) ? (a6e(), 1) : 0;
				1 === ak.jp ? a6Z = a6h + 535 : (aC.hO ? bf.a2b() : af.gM[l4[0]]) >= bJ.dl(96 * aC.jY, 100) && (a6Z = a6h + 1071)
			}
			return
		}() && 0 <= a6Y && (aM.zB(250, L(103, [af.zM[a6Y]]), 673, a6Y, b9.mf, b9.mc, -1, !0), a6e())
	}, this.yo = function() {
		this.hG && a6S[0] < a6T[0] && a6a()
	}, this.p7 = function(player, a6i) {
		var a6j = L(a6i ? 104 : 105, [af.zM[player]]),
			a6j = (aM.zB(450, a6j, 257, player, a6i ? b9.mx : b9.nC, b9.mc, -1, !0), a6U.push(player), a5m = !0, aC.k7 ? Math.max(a6T[0], a6T[1]) : af.gM[player]),
			a6j = Math.max(a6j, 1);
		a6i ? a6S[0] += a6j : a6S[1] += a6j, player === aC.eI && (a6R = a6i ? 1 : -1)
	}, this.te = function() {
		var eh;
		this.hG && (eh = x0(), tf.drawImage(canvas, h.i - this.i - ba.gap, eh))
	}, this.hJ = function(player) {
		if (!aC.k7) {
			if (bd.jl() < a6X + 140) return !1;
			if (bd.jl() < 535) return !1
		}
		return 0 === a6V && !!b8.fu.gk(1) && !(!b8.fu.gl(player) || 10 <= jZ[player] && !b8.fu.a2X(player, 9))
	}, this.hH = function(g6) {
		if (!b8.fu.gk(1)) return !1;
		if (!b8.fu.gl(g6)) return !1;
		if (!this.hG) return !1;
		for (var aA = a6U.length - 1; 0 <= aA; aA--)
			if (a6U[aA] === g6) return !1;
		return !0
	}, this.hF = function(player) {
		a6Y = player
	}
}

function cD() {
	var i, ef, a6k, canvas, x4, hG, i8, a2y, a4M, a5m, a6l = 11 / 12;

	function a6n() {
		var a5t = Math.floor(i8 * (i - 2 * a6k)),
			a6q = 1 + Math.floor(.0625 * aQ.j),
			a6r = 1 + Math.floor(.3 * aQ.j),
			a6s = Math.floor(.55 * aQ.j);
		x4.clearRect(0, 0, i, aQ.j), x4.fillStyle = b9.mb, x4.fillRect(0, 0, a6k, aQ.j), x4.fillRect(a6k + a5t, 0, i - a6k - a5t, aQ.j), x4.fillStyle = i8 < 1 / 3 ? "rgba(" + Math.floor(3 * i8 * 130) + ",130,0,0.85)" : i8 < 2 / 3 ? "rgba(130," + (
				130 - Math.floor(3 * (i8 - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (i8 - 2 / 3) * 130) + ",0.85)", x4.fillRect(a6k, 0, a5t, aQ.j), x4.fillStyle = b9.mf, x4.fillRect(0, 0, i, 1), x4.fillRect(0, aQ.j - 1, i, 1), x4
			.fillRect(0, 0, 1, aQ.j), x4.fillRect(a6k, 0, 1, aQ.j), x4.fillRect(a6k + a5t, 0, 1, aQ.j), x4.fillRect(i - a6k, 0, 1, aQ.j), x4.fillRect(i - 1, 0, 1, aQ.j), x4.fillRect(Math.floor(.25 * aQ.j) + a6r, Math.floor((aQ.j - a6q) / 2), aQ.j -
				2 * a6r, a6q), x4.fillRect(Math.floor(i - 1.25 * aQ.j) + a6r, Math.floor((aQ.j - a6q) / 2), aQ.j - 2 * a6r - a6r % 2, a6q), x4.fillRect(Math.floor(i - 1.25 * aQ.j) + Math.floor((aQ.j - a6q) / 2), a6r, a6q, aQ.j - 2 * a6r - a6r % 2),
			a2y = b8.fu.i7(aC.eI, aQ.h0()), x4.fillText(b8.zO.y5(a2y) + " (" + b8.zO.a2r(100 * i8, +(i8 < .1)) + ")", Math.floor(.5 * i), a6s)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		i8 = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => aQ.a0q(arg1);

	function a6x(a1D) {
		return !(1 < a1D && 1 === i8 || (1 < a1D && a1D * i8 - i8 < 1 / 1024 ? a1D = (i8 + 1 / 1024) / i8 : a1D < 1 && i8 - a1D * i8 < 1 / 1024 && (a1D = (i8 - 1 / 1024) / i8), i8 = bJ.p5(i8 * a1D, 1 / 1024, 1), a6n(), 0))
	}

	function a6y(ks) {
		return i8 !== (i8 = bJ.p5((ks - ef - a6k) / (i - 2 * a6k), 1 / 1024, 1)) && (a6n(), !0)
	}
	__fx.keybindFunctions.repaintAttackPercentageBar = function() {
		a6n(), bd.dc = !0
	}, this.eh = 0, this.gn = !1, this.dU = function() {
		hG = !aC.gu && !aC.gi, a5m = !1, i8 = .5, a2y = 0, this.gn = !1, this.resize()
	}, this.resize = function() {
		z.a0.qv() && h.i < .8 * h.j ? (this.j = Math.floor(.066 * h.pZ), i = h.i - 4 * ba.gap - this.j) : (i = Math.floor((z.a0.qv() ? .65 : .389) * h.pZ), i += 12 - i % 12, this.j = Math.floor(i / 12)), a6k = Math.floor(3 * this.j / 2), a4M = b8
			.pX.rM(1, Math.floor(.5 * this.j)), (canvas = document.createElement("canvas")).width = i, __fx.mobileKeybinds.setSize(i, this.j, tf), canvas.height = this.j, (x4 = canvas.getContext("2d", {
				alpha: !0
			})).font = a4M, b8.pX.textBaseline(x4, 1), b8.pX.textAlign(x4, 1), this.a6m(), a6n()
	}, this.a6m = function() {
		ef = z.a0.qv() && h.i < .8 * h.j ? this.j + 3 * ba.gap : Math.floor((h.i - i) / 2), this.eh = h.j - this.j - bi.a3k() * ba.gap
	}, this.lP = function() {
		a5m && (a5m = !1, a6n())
	}, this.hG = function() {
		return !(!hG || aL.gj && ef < Math.floor(ba.gap + 5.5 * this.j))
	}, this.a4y = function(a6t) {
		return !!this.hG() && ef + i > h.i - a6t - ba.gap
	}, this.a35 = function() {
		hG = !aC.gi
	}, this.a6a = function() {
		hG = !1
	}, this.h0 = function() {
		return bJ.p5(Math.floor(1024 * i8 + .5) - 1, 0, 1023)
	}, this.a0n = function(ks, kt) {
		return this.hG() && ef < ks && ks < ef + i && kt > this.eh
	}, this.gm = function(ks, kt) {
		if (!this.hG()) return !1;
		if (!(__fx.settings.keybindButtons && kt > this.eh - Math.floor(ba.gap / 4) - this.j && kt < this.eh - Math.floor(ba.gap / 4) && __fx.mobileKeybinds.click(ks - ef))) {
			if (!aQ.a0n(ks, kt)) return !1;
			aR.mA = !1, ! function(r9, ks, kt) {
				if (function(ks, kt) {
						return ef < ks && ks < ef + a6k && kt > aQ.eh
					}(ks, kt)) return a6x(a6l);
				if (function(ks, kt) {
						return ef + i - a6k < ks && ks < ef + i && kt > aQ.eh
					}(ks, kt)) return a6x(1 / a6l);
				return r9.gn = !0, a6y(ks)
			}(this, ks, kt) || (bd.dc = !0)
		}
		return !0
	}, this.a0q = function(mH) {
		0 !== aC.yn && this.hG() && a6x(mH) && (bd.dc = !0)
	}, this.a0M = function(deltaY) {
		var mH;
		return !(0 === deltaY || !this.hG()) && a6x(mH = 0 < deltaY ? (mH = 400 / (400 + deltaY)) < a6l ? a6l : mH : 1 / a6l < (mH = (400 - deltaY) / 400) ? 1 / a6l : mH)
	}, this.a0J = function(ks) {
		return !!this.gn && a6y(ks)
	}, this.a0j = function() {
		this.gn = !1
	}, this.ii = function() {
		this.hG() && a2y !== b8.fu.i7(aC.eI, this.h0()) && (a5m = !0)
	}, this.te = function() {
		this.hG() && (tf.drawImage(canvas, ef, this.eh), __fx.settings.keybindButtons) && __fx.mobileKeybinds.draw(tf, ef, this.eh)
	}
}

function cu() {
	var canvas, x4, a6z, font, a70 = 0,
		a71 = !1,
		a72 = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		a73 = 5;

	function a79() {
		if (a71) {
			var aA, eY = a72.length,
				a6s = Math.floor(.5 * a6z.j),
				j = eY * a6s,
				ef = Math.floor(Math.floor(a6z.ef) + .3 * a6z.i - .5),
				eh = Math.floor(Math.floor(a6z.eh) - j),
				i = Math.floor(.4 * a6z.i + 2.5);
			for (tf.fillStyle = b9.mb, tf.fillRect(ef, eh, i, j), tf.fillStyle = b9.n4, tf.fillRect(ef, eh + a73 * a6s, i, a6s), tf.fillStyle = b9.mf, tf.fillRect(ef, eh, 2, j), tf.fillRect(ef, eh, i, 2), tf.fillRect(ef + i - 2, eh, 2, j), aA =
				1; aA < eY; aA++) tf.fillRect(ef, eh + aA * a6s, i, 2);
			for (tf.fillStyle = b9.mf, b8.pX.textAlign(tf, 1), b8.pX.textBaseline(tf, 1), tf.font = b8.pX.rM(0, .6 * a6s), ef += .5 * i, aA = 0; aA < eY; aA++) tf.fillText(a7H(aA), ef, eh + (aA + .6) * a6s)
		}
		tf.drawImage(canvas, Math.floor(a6z.ef), Math.floor(a6z.eh))
	}

	function lQ(r9) {
		var ef, m5, m6, a6s;
		x4.clearRect(0, 0, Math.floor(a6z.i), Math.floor(a6z.j)), x4.fillStyle = b9.mb, x4.fillRect(0, 0, Math.floor(a6z.i), Math.floor(a6z.j)), aC.m8 && (x4.fillStyle = b9.n4, x4.fillRect(0, 0, Math.floor(.3 * a6z.i), Math.floor(a6z.j))), x4
			.fillStyle = b9.mf, x4.fillText("Hide UI", .15 * a6z.i, .5 * a6z.j), x4.fillRect(Math.floor(.3 * a6z.i - .5), 0, 2, Math.floor(a6z.j)), ef = .5 * a6z.i, x4.fillText("Replay Speed", ef, .31 * a6z.j), x4.fillText(a7H(a73), ef, .69 * a6z.j),
			x4.fillRect(Math.floor(.7 * a6z.i - .5), 0, 2, Math.floor(a6z.j)), r9.a3c ? (ef = Math.floor(.02 * a6z.i), r9 = Math.floor(.025 * a6z.i), m5 = Math.floor(.85 * a6z.i - ef - .5 * r9), m6 = Math.floor(.25 * a6z.j), a6s = Math.floor(a6z.j) -
				2 * m6, x4.fillRect(m5, m6, ef, a6s), x4.fillRect(m5 + ef + r9, m6, ef, a6s)) : function() {
				var i = Math.floor(.46 * a6z.j),
					j = Math.floor(.23 * a6z.j),
					ef = Math.floor(.85 * a6z.i - .5 * i + i / 12),
					eh = Math.floor(.5 * a6z.j - j);
				x4.beginPath(), x4.moveTo(ef, eh), x4.lineTo(ef + i, eh + j), x4.lineTo(ef, eh + (j << 1)), x4.fill()
			}(), x4.fillRect(0, 0, Math.floor(a6z.i), 2), x4.fillRect(0, 0, 2, Math.floor(a6z.j)), x4.fillRect(0, Math.floor(a6z.j) - 2, Math.floor(a6z.i), 2), x4.fillRect(Math.floor(a6z.i - 2), 0, 2, Math.floor(a6z.j))
	}

	function a7H(aA) {
		return 5 === aA ? "Normal" : "" + a72[aA]
	}
	this.a3c = !1, this.dU = function() {
		aC.gi && (a73 = 5, this.a3c = !1, a71 = !1, a6z = new q9([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.a74 = function() {
		return a72[a73]
	}, this.x0 = function() {
		return a6z.eh
	}, this.a4y = function(a6t) {
		return !!aC.gi && a6z.ef + a6z.i > h.i - a6t - ba.gap
	}, this.resize = function() {
		aC.gi && (a6z.resize(), a6z.eh -= (bi.a3k() - 1) * ba.gap, font = b8.pX.rM(0, .3 * a6z.j), (canvas = document.createElement("canvas")).width = Math.floor(a6z.i), canvas.height = Math.floor(a6z.j), (x4 = canvas.getContext("2d", {
			alpha: !0
		})).font = font, b8.pX.textAlign(x4, 1), b8.pX.textBaseline(x4, 1), lQ(this))
	}, this.a0t = function(a75) {
		0 === aC.yn || s.hG() || a75 !== aC.m8 && (aC.m8 = a75, bf.resize(), bd.dc = !0, aC.gi) && (a70 = bd.e7 + 2e3, lQ(this))
	}, this.gm = function(ef, eh) {
		if (!aC.gi) return !1;
		if (ef < a6z.ef || eh < a6z.eh || ef > a6z.ef + a6z.i) return a71 && function(r9, ef, eh) {
			var eY = a72.length,
				a6s = Math.floor(.5 * a6z.j),
				j = eY * a6s,
				m5 = Math.floor(Math.floor(a6z.ef) + .3 * a6z.i - .5),
				j = Math.floor(Math.floor(a6z.eh) - j),
				i = Math.floor(.4 * a6z.i + 2.5);
			return a71 = !1, bd.dc = !0, ef < m5 || m5 + i < ef || eh < j || (a73 = a78(0, Math.floor((eh - j) / a6s), eY - 1), lQ(r9)), !0
		}(this, ef, eh);
		if ((ef -= a6z.ef) < .3 * a6z.i) a71 = !1, this.a0t(!aC.m8);
		else {
			if (ef < .7 * a6z.i) return a71 = !a71, bd.dc = !0;
			this.a0v(!1)
		}
		return !0
	}, this.a0v = function(a77) {
		2 === aC.yn ? (this.a0t(!1), s.t(3)) : (a71 = !1, this.a3c = !this.a3c, this.a3c ? (aL.gj && aL.a0u(), z.a0.setState(1)) : a77 || aL.a4S(), bd.dc = !0, lQ(this))
	}, this.a0w = function() {
		this.a3c = !1, aL.a4S(), bd.dc = !0, lQ(this)
	}, this.a0c = function(ef, eh) {
		return !!aC.m8 && (0 <= aL.gm(ef, eh) || (aC.gi ? ((bd.e7 > a70 || !this.gm(ef, eh)) && aR.gm(ef, eh), bd.dc = !0, a70 = bd.e7 + 2e3) : aR.gm(ef, eh)), !0)
	}, this.ii = function() {
		aC.gi && aC.m8 && bd.e7 > a70 - 1e3 && bd.e7 < a70 && (bd.dc = !0)
	}, this.yv = function() {
		aC.gi && (this.a3c = !1, bd.dc = !0, lQ(this))
	}, this.te = function() {
		if (aC.gi) {
			if (aC.m8) {
				if (bd.e7 > a70) return;
				if (bd.e7 > a70 - 1e3) return tf.globalAlpha = a78(0, (1e3 - (bd.e7 - (a70 - 1e3))) / 1e3, 1), a79(), void(tf.globalAlpha = 1)
			}
			a79()
		}
	}
}

function cE() {
	var a7I, a7J, i, ef, eh, a7K, a7L;
	this.dU = function() {
		a7I = new Array(2), a7J = new Array(2), this.mA = !1, a7L = a7K = iB = i9 = 0, iA = 1, this.resize()
	}, this.resize = function() {
		i = (i = Math.floor((z.a0.qv() ? .072 : .0502) * h.pZ)) < 8 ? 8 : i;
		for (var aA = 1; 0 <= aA; aA--) a7I[aA] = document.createElement("canvas"), a7I[aA].width = i, a7I[aA].height = i, a7J[aA] = a7I[aA].getContext("2d", {
			alpha: !0
		});
		this.a6m(),
			function() {
				for (var a7a = Math.floor(1 + i / 20), aA = 1; 0 <= aA; aA--) a7J[aA].clearRect(0, 0, i, i), a7J[aA].fillStyle = b9.mY, a7J[aA].beginPath(), a7J[aA].arc(i / 2, i / 2, i / 2 - a7a, 0, 2 * Math.PI), a7J[aA].fill(), a7J[aA]
					.lineWidth = a7a, a7J[aA].fillStyle = b9.mf, a7J[aA].strokeStyle = b9.mf, a7J[aA].beginPath(), a7J[aA].arc(i / 2, i / 2, i / 2 - a7a, 0, 2 * Math.PI), a7J[aA].stroke(), x7(a7J[aA], 0, 0, i, a7a, .3, 0 === aA)
			}()
	}, this.wz = function() {
		return -i9 / iA
	}, this.x0 = function() {
		return -iB / iA
	}, this.mK = function(a7P, hr) {
		i9 = iA * a7P - hr
	}, this.mL = function(a7Q, hs) {
		iB = iA * a7Q - hs
	}, this.gm = function(a7O, a4z) {
		return aC.m8 || ! function(a7O, a4z) {
			return Math.pow(a7O - (ef + i / 2), 2) + Math.pow(a4z - (eh + i / 2), 2) < i * i / 4 || Math.pow(a7O - (ef + i / 2), 2) + Math.pow(a4z - (eh + 2 * i), 2) < i * i / 4
		}(a7O, a4z) || bh.kn.data[8].value ? (aG.mN() && (this.mA = !0, a7K = a7O, a7L = a4z), !1) : a4z < eh + 1.25 * i ? this.a0M(Math.floor(h.i / 2), Math.floor(h.j / 2), -200) : this.a0M(Math.floor(h.i / 2), Math.floor(h.j / 2), 200)
	}, this.a0J = function(a7O, a4z) {
		var a7R, a7S, hu, hx;
		return !aG.mN() || (a7R = i9, a7S = iB, i9 += hu = a7K - a7O, iB += hx = a7L - a4z, ae.a0J(hu, hx), this.a7T(), a7K = a7O, a7L = a4z, a7R !== i9) || a7S !== iB
	}, this.a0M = function(ks, kt, deltaY) {
		var mH;
		if (aG.mN()) {
			if (0 < deltaY) mH = (mH = 500 / (500 + deltaY)) < .5 ? .5 : mH;
			else {
				if (!(deltaY < 0)) return !1;
				mH = 2 < (mH = (500 - deltaY) / 500) ? 2 : mH
			}
			this.a7U(ks, kt, mH), bd.dc = !0
		}
		return !0
	}, this.a7U = function(ef, eh, eC) {
		var a1D;
		eC = a1D = (a1D = 1024 < (a1D = eC) * iA ? 1024 / iA : a1D) * iA < .125 ? .125 / iA : a1D, ae.zoom(eC, ef, eh),
			function(a1D, ks, kt) {
				iA *= a1D, i9 = (i9 + ks) * a1D - ks, iB = (iB + kt) * a1D - kt, aR.a7T()
			}(eC, ef, eh)
	}, this.a7T = function() {
		var a7X = h.i / 16,
			hc = 0,
			a7Y = h.j / 16,
			hd = 0;
		i9 < -h.i + a7X && (hc = -h.i + a7X - i9), i9 > iA * bQ.ej - a7X && (hc = iA * bQ.ej - a7X - i9), iB < -h.j + a7Y && (hd = -h.j + a7Y - iB), iB > iA * bQ.ek - a7Y && (hd = iA * bQ.ek - a7Y - iB), i9 += hc, iB += hd, bY.mM(), ae.a7Z(hc,
			hd)
	}, this.a6m = function() {
		ef = h.i - i - ba.gap, eh = Math.floor(h.j / 2 - 1.25 * i)
	}, this.te = function() {
		bh.kn.data[8].value || (tf.drawImage(a7I[0], ef, eh), tf.drawImage(a7I[1], ef, Math.floor(eh + 3 * i / 2)))
	}
}

function cF() {
	var g, a7b, a7c, a7d, gap, a7e, a7f, a7g, a7h, a7i, a4M, a7j, gd, a7k, a5t, a7l, a7m, a7n;

	function a7r() {
		a7d = Math.floor(.2 * (z.a0.qv() ? .07 : .035) * h.pZ), a7d = a4w(z.a0.qv() ? 3 : 1, a7d);
		var a7u = h.i / (g.length + gap);
		a7d = a7d < a7u ? a7u : a7d, a5t = Math.floor((1 - gap) * a7d), a7b = 0, a7v()
	}

	function a7v() {
		a7b = (a7b = a7b < -20 ? -20 : a7b) > (g.length - 15) * a7d ? (g.length - 15) * a7d : a7b, a7f = Math.floor(a7b / a7d), a7g = (a7g = a7f + Math.floor(h.i / a7d)) > g.length - 1 ? g.length - 1 : a7g, a7f = (a7f = a7g < a7f ? a7g : a7f) < 0 ?
			0 : a7f;
		var kW = a7g;
		a7e = a7c / g[kW];
		for (var aA = a7g - 1; a7f <= aA; aA--) g[aA] > g[kW] && (kW = aA, a7e = a7c / Math.pow(g[aA], a7k))
	}

	function a7y(ef) {
		ef = Math.floor((a7b + h.i - ef - gap * a7d) / a7d);
		return (ef = ef < -1 ? -1 : -1 === ef ? 0 : ef > g.length - 1 ? -1 : ef) !== a7h && (a7h = ef, -1 === a7l && 0 === a7h && aS.a7o && (a7l = setInterval(a7z, 100)), 1)
	}

	function a80(aA) {
		var a5j = Math.floor(a7e * Math.pow(g[aA], a7k));
		tf.fillRect(a7b + h.i - (aA + 1) * a7d, h.j - a5j, a5t, a5j)
	}

	function a7z() {
		var g6;
		0 !== (a7h = 8 === aZ.zx() ? -1 : a7h) ? (a7m = (new Date).getTime(), clearInterval(a7l), a7l = -1) : (g6 = g[1] / 864e3, -1 !== a7m && (g6 += ((new Date).getTime() - a7m) * g[1] / 864e5, a7m = -1), 0 < g6 && (g[0] += Math.floor(g6), bd
			.dc = !0))
	}
	this.a7o = !1, this.dU = function() {
		a7m = a7l = -1, a7h = -(a7k = 1), this.a7p = !1, gd = 0, a7j = new Date, a7b = 0, gap = .3, (a7n = []).push({
			g1: "Plateau A",
			eY: 0,
			e: 57
		}), a7n.push({
			g1: "Max A",
			eY: 1,
			e: 1
		}), a7n.push({
			g1: "Black Friday",
			eY: 15,
			e: 15
		}), a7n.push({
			g1: "Max B",
			eY: 19,
			e: 19
		}), a7n.push({
			g1: "Max C",
			eY: 44,
			e: 44
		}), a7n.push({
			g1: "First Android Version",
			eY: 58,
			e: 58
		}), a7n.push({
			g1: "Max D",
			eY: 67,
			e: 67
		}), a7n.push({
			g1: "The iFrame Explosion",
			eY: 98,
			e: 99
		}), a7n.push({
			g1: "The 155-Day Uptrend",
			eY: 58,
			e: 213
		}), a7n.push({
			g1: "Max E",
			eY: 213,
			e: 213
		}), a7n.push({
			g1: "Plateau B",
			eY: 214,
			e: 259
		}), a7n.push({
			g1: "Turbulent Times",
			eY: 260,
			e: 344
		}), a7n.push({
			g1: "Max F",
			eY: 262,
			e: 262
		}), a7n.push({
			g1: "Max G",
			eY: 282,
			e: 282
		}), a7n.push({
			g1: "Max H",
			eY: 333,
			e: 333
		}), a7n.push({
			g1: "The 19-Day Downtrend",
			eY: 283,
			e: 301
		}), a7n.push({
			g1: "Plateau C",
			eY: 345,
			e: 385
		}), a7n.push({
			g1: "The Alliance Ascent",
			eY: 386,
			e: 395
		}), a7n.push({
			g1: "Max I",
			eY: 395,
			e: 395
		}), a7n.push({
			g1: "First iOS Version",
			eY: 411,
			e: 411
		}), a7n.push({
			g1: "Plateau D",
			eY: 396,
			e: 453
		}), a7n.push({
			g1: "The TikTok Revolution",
			eY: 454,
			e: 470
		}), a7n.push({
			g1: "Max J",
			eY: 456,
			e: 456
		}), a7n.push({
			g1: "Max K",
			eY: 472,
			e: 472
		}), a7n.push({
			g1: "Max L",
			eY: 478,
			e: 478
		}), a7n.push({
			g1: "YT Drew",
			eY: 471,
			e: 485
		}), a7n.push({
			g1: "Plateau E",
			eY: 485,
			e: 600
		}), a7n.push({
			g1: "Uptrend A",
			eY: 600,
			e: 613
		}), a7n.push({
			g1: "Max M",
			eY: 613,
			e: 613
		}), a7n.push({
			g1: "Downtrend A",
			eY: 614,
			e: 635
		}), a7n.push({
			g1: "Plateau F",
			eY: 636,
			e: 737
		}), a7n.push({
			g1: "End of Record",
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
		a7c = Math.floor(.15 * h.j), a7i = (a7i = Math.floor((z.a0.qv() ? .018 : .0137) * h.pZ)) < 2 ? 2 : a7i, a4M = b8.pX.rM(1, a7i), a7r()
	}, this.a7s = function(a7t) {
		var aA;
		for (this.a7o = !0, aA = 0; aA < a7t.length; aA++) g.unshift(a7t[aA]);
		a7r(), bd.dc = !0
	}, this.a7w = function() {
		a7v()
	}, this.a0J = function(ef, eh) {
		eh > h.j - .6 * a7c ? this.a7p ? ef !== gd && (a7b += ef - gd, gd = ef, a7v(), a7y(ef), this.a7p = -1 !== a7h, bd.dc = !0) : a7y(ef) && (bd.dc = !0) : this.qX()
	}, this.qX = function() {
		-1 !== a7h && (this.a7p = !1, a7h = -1, bd.dc = !0)
	}, this.a0M = function(ef, deltaY) {
		-1 !== a7h && (a7b += Math.floor(deltaY), a7v(), a7y(ef), bd.dc = !0)
	}, this.gm = function(ef, eh) {
		this.a0J(ef, eh), -1 !== a7h && (gd = ef, this.a7p = !0)
	}, this.a0i = function() {
		-1 !== a7h && (this.a7p = !1)
	}, this.te = function() {
		tf.fillStyle = b9.mi;
		for (var a82, month, dk, ru, a85, a86, m6, a87, a88, aA = a7g; a7f <= aA; aA--) a80(aA);
		this.a7o && 0 === a7f && (tf.fillStyle = b9.nF, a80(0)), -1 !== a7h && (tf.fillStyle = b9.mh, a80(a7h)), -1 !== a7h && (tf.font = a4M, b8.pX.textBaseline(tf, 2), (dk = new Date).setTime(a7j.getTime() - 1e3 * a7h * 60 * 60 * 24), month =
			"month", a82 = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(dk), a82 = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(dk)), a82 = a82 + ", " + dk.getUTCDate() + " " + month + " " + dk.getFullYear(), month = 1 === g[a7h] ? L(106) : L(107), month = b8.zO.y5(g[a7h]) + " " + month, dk = Math.floor(tf.measureText(a82).width), ru = Math
			.floor(tf.measureText(month).width), a85 = Math.floor(.5 * (dk + a7i)), a86 = (a86 = a7b + h.i - (a7h + 1) * a7d) < a85 ? a85 : a86 > h.i - a85 ? h.i - a85 : a86, m6 = h.j - Math.floor(a7e * Math.pow(g[a7h], a7k)), a87 = Math
			.floor(1.1 * a7i), a88 = m6 > h.j - a87 ? h.j - a87 : m6, tf.fillStyle = b9.mc, tf.fillRect(h.i - ru - a7i, a88 - a87, ru + a7i, a87), tf.fillRect(a86 - a85, h.j - a87, dk + a7i, a87), tf.fillStyle = b9.mf, b8.pX.textAlign(tf, 2),
			tf.fillText(month, Math.floor(h.i - .5 * a7i), a88),
			function(m6, a87) {
				for (var rt, kY = -1, dx = g.length - a7h - 1, aA = a7n.length - 1; 0 <= aA; aA--) dx >= a7n[aA].eY && dx <= a7n[aA].e && (-1 === kY || a7n[aA].e - a7n[aA].eY < a7n[kY].e - a7n[kY].eY) && (kY = aA); - 1 !== kY && (rt = Math
					.floor(tf.measureText(a7n[kY].g1).width), tf.fillStyle = b9.mc, tf.fillRect(h.i - rt - a7i, m6, rt + a7i, a87), tf.fillStyle = b9.mf, tf.fillText(a7n[kY].g1, Math.floor(h.i - .5 * a7i), m6 + a87))
			}(a88 - 2 * a87, a87), b8.pX.textAlign(tf, 1), tf.fillText(a82, a86, h.j), tf.strokeStyle = b9.mj, tf.lineWidth = 1, tf.beginPath(), tf.moveTo(0, m6), tf.lineTo(h.i, m6), tf.closePath(), tf.stroke())
	}
}

function cG() {
	var a4M, i, eh, a8A, a8B, canvas, x4, a5m, a2K, a8C, a8D, a8E, a8F;
	this.ef = 0, this.j = 0, this.dU = function() {
		a8B = aC.a3D, a8D = "rgba(0,100,0,0.8)", a8E = "rgba(150,0,0,0.8)", a5m = a8C = !0, a2K = af.ga[aC.eI], this.resize()
	}, this.resize = function() {
		i = Math.floor((z.a0.qv() ? .305 : .24) * h.pZ), this.j = Math.floor(.5 + .13 * i), i = Math.floor(6 * this.j), a4M = b8.pX.rM(1, Math.floor(.8 * this.j)), a8F = Math.floor(.5 * this.j), bQ.vO.font = a4M, eh = ba.gap, a8A = Math.floor(1 +
			.13 * this.j), (canvas = document.createElement("canvas")).width = i, canvas.height = this.j, (x4 = canvas.getContext("2d", {
			alpha: !0
		})).font = a4M, b8.pX.textBaseline(x4, 1), b8.pX.textAlign(x4, 1), this.a8G()
	}, this.a69 = function() {
		return z.a0.qv() && h.i < 1.2 * h.j
	}, this.a6m = function() {
		this.a69() ? this.ef = h.i - i - ba.gap : this.ef = Math.floor(aU.a8H() + (h.i - aU.a8H() - aV.i - i) / 2 - .5 * ba.gap)
	}, this.lP = function() {
		a5m && (a5m = !1, this.a8G())
	}, this.a8G = function() {
		x4.clearRect(0, 0, i, this.j), x4.fillStyle = a8C ? a8D : a8E, x4.fillRect(0, 0, i, this.j), x4.fillStyle = b9.mh, this.a8I(), this.a8J(), x4.fillStyle = af.ga[aC.eI] >= ad.jU(aC.eI) ? b9.nC : b9.mf, x4.fillText(b8.zO.y5(a2K), Math.floor(
			i / 2), a8F), x4.fillStyle = b9.mf, x4.fillRect(0, 0, i, 1), x4.fillRect(0, 0, 1, this.j), x4.fillRect(0, this.j - 1, i, 1), x4.fillRect(i - 1, 0, 1, this.j)
	}, this.a8I = function() {
		var et = bd.jl() % 100,
			et = (et = 9 - bJ.dl(et -= et % 10, 10), Math.floor(et * (this.j - a8A) / 9));
		x4.fillRect(0, et, a8A, this.j - et), x4.fillRect(i - a8A, et, a8A, this.j - et)
	}, this.a8J = function() {
		x4.fillRect(a8A, this.j - a8A, Math.floor((i - 2 * a8A) * af.ga[aC.eI] / a8B), a8A)
	}, this.ii = function() {
		var g6 = aC.eI;
		b8.fu.gl(g6) && (g6 = af.ga[g6] - af.a2J[g6], a2K !== g6 ? (a8B = a4w(g6, a8B), a8C = a2K < g6 && 10 <= g6, a2K = g6, a5m = !0) : bd.jl() % 10 == 9 && (a5m = !0))
	}, this.te = function() {
		0 === af.ld[aC.eI] || aC.gu || 2 === af.a2B[aC.eI] || tf.drawImage(canvas, this.ef, eh)
	}
}

function cH() {
	var a8K, a8L, a8M, a8N, a8O, a8P, a8Q, a8R, a8S, a8T, a8U, a8V, a8W, a8X, a8Y, a8Z, a8a, a8b, a8c, a8d, a8e, a8f, position, a8g, a8h, a8i, a8j, a8k = 1,
		a8l = 1,
		a8m = "";
	var leaderboardHasChanged = true;
	this.playerPos = aC.eI;
	__fx.leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		__fx.leaderboardFilter.filteredLeaderboard = __fx.leaderboardFilter.playersToInclude
			.map(id => jZ[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = __fx.leaderboardFilter.filteredLeaderboard.indexOf(jZ[aC.eI]);
	}

	function a8o() {
		a8Q.clearRect(0, 0, a8K, a6P),
			a8Q.fillStyle = b9.nV,
			a8Q.fillRect(0, 0, a8K, a8V),
			a8Q.fillStyle = b9.mb,
			a8Q.fillRect(0, a8V, a8K, a6P - a8V);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			jZ[aC.eI]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) a8f = -1;
		if (__fx.leaderboardFilter.enabled && a8f >= __fx.leaderboardFilter.filteredLeaderboard.length) a8f = -1;
		playerPos >= position && a8q(playerPos - position, b9.n4),
			0 !== jZ[aC.eI] && 0 === position && a8q(0, b9.na),
			-1 !== a8f && a8q(a8f, b9.mg),
			a8Q.fillStyle = b9.mb,
			//console.log("drawing", a8f),
			a8Q.clearRect(0, a6P - __fx.leaderboardFilter.tabBarOffset, a8K, __fx.leaderboardFilter.tabBarOffset);
		a8Q.fillRect(0, a6P - __fx.leaderboardFilter.tabBarOffset, a8K, __fx.leaderboardFilter.tabBarOffset);
		a8Q.fillStyle = b9.mf,
			a8Q.fillRect(0, a8V, a8K, 1),
			a8Q.fillRect(0, a6P - __fx.leaderboardFilter.tabBarOffset, a8K, 1),
			__fx.leaderboardFilter.drawTabs(a8Q, a8K, a6P - __fx.leaderboardFilter.tabBarOffset, b9.n4),
			a8Q.fillRect(0, 0, a8K, ba.xo),
			a8Q.fillRect(0, 0, ba.xo, a6P),
			a8Q.fillRect(a8K - ba.xo, 0, ba.xo, a6P),
			a8Q.fillRect(0, a6P - ba.xo, a8K, ba.xo), a8Q.font = a8L, b8.pX.textBaseline(a8Q, 1), b8.pX.textAlign(a8Q, 1), a8Q.fillText(a8m, Math.floor((a8K + a8V - 22) / 2), Math.floor(a8T + a8M / 2));
		__fx.playerList.drawButton(a8Q, 12, 12, a8V - 22);
		var er, g7 = playerPos < position + a8O - 1 ? 1 : 2;

		if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - a8O)
				position = (result.length > a8O ? result.length : a8O) - a8O;
			//if (position >= result.length) position = result.length - 1;
			for (a8Q.font = a8N, b8.pX.textAlign(a8Q, 0), er = a8O - g7; 0 <= er; er--) {
				const pos = result[er + position];
				if (pos !== undefined)
					a8r(l4[pos]), a8s(er, pos, l4[pos]);
			}
			for (b8.pX.textAlign(a8Q, 2), er = a8O - g7; 0 <= er; er--) {
				const pos = result[er + position];
				if (pos !== undefined)
					a8r(l4[pos]), a8t(er, l4[pos]);
			}
		} else {
			for (a8Q.font = a8N, b8.pX.textAlign(a8Q, 0), er = a8O - g7; 0 <= er; er--)
				a8r(l4[er + position]), a8s(er, er + position, l4[er + position]);
			for (b8.pX.textAlign(a8Q, 2), er = a8O - g7; 0 <= er; er--)
				a8r(l4[er + position]), a8t(er, l4[er + position]);
		}
		2 == g7 && (a8r(aC.eI), b8.pX.textAlign(a8Q, 0), a8s(a8O - 1, jZ[aC.eI], aC.eI), b8.pX.textAlign(a8Q, 2), a8t(a8O - 1, aC.eI)), 0 === position && (g7 = .7 * a8W / aa.get(4).height, a8Q.setTransform(g7, 0, 0, g7, Math.floor(a8X + .58 * a8W +
			.5 * g7 * aa.get(4).width), Math.floor(a8T + a8M + .4 * a8W)), a8Q.imageSmoothingEnabled = !0, a8Q.drawImage(aa.get(4), -Math.floor(aa.get(4).width / 2), -Math.floor(aa.get(4).height / 2)), a8Q.setTransform(1, 0, 0, 1, 0, 0))
	}

	function a8r(player) {
		aC.hO && (a8Q.fillStyle = be.a8v[be.kA[be.eW[player]]])
	}

	function a8q(aA, a8w) {
		a8Q.fillStyle = a8w, aA = a8O - 1 < aA ? a8O - 1 : aA;
		a8w = Math.floor((aA === a8O - 1 ? 2 : 0 === aA ? 1.15 : 1) * a8W), a8w = aA === a8O - 2 ? Math.floor(a8V + 9.15 * a8W) - Math.floor(a8V + 8.15 * a8W) : a8w;
		a8Q.fillRect(0, Math.floor(a8V + (aA + (0 === aA ? 0 : .15)) * a8W), a8K, a8w)
	}

	function a8s(a8y, zf, aA) {
		a8Q.fillText(a8b[zf], a8X, Math.floor(a8T + a8M + (a8y + .5) * a8W)), 1 === af.a2B[aA] && (a8Q.font = "italic " + a8N);
		zf = Math.floor(a8T + a8M + (a8y + .5) * a8W);
		a8Q.fillText(af.zM[aA], a8Y, zf), 0 !== af.a2B[aA] && (a8Q.font = a8N), aA < aC.jo && 2 !== af.a2B[aA] || a8Q.fillRect(a8Y, zf + .35 * a8k, a8a[aA], Math.max(1, .1 * a8k))
	}

	function a8t(a8y, aA) {
		a8Q.fillText(af.gM[aA], a8Z, Math.floor(a8T + a8M + (a8y + .5) * a8W))
	}

	function a97(eh) {
		return (eh -= ba.gap + a8V) < 0 ? Math.floor(eh / a8W) - 1 : eh < (a8O - 1) * a8W ? Math.floor(eh / a8W) : eh < a6P - a8V ? a8O - 1 : (eh -= a6P - a8V, a8O + Math.floor(eh / a8W))
	}

	function xn(ef, eh) {
		return ef >= ba.gap && ef < ba.gap + a8K && eh >= ba.gap && eh < ba.gap + a6P
	}
	this.dU = function() {
			var aA;
			for (a8h = !1, a8j = a8i = a8g = 0, a8f = -1, a8O = z.a0.qv() ? 6 : 10, a8l = (position = 0) === (a8l = bh.kn.data[11].value) ? 10 : 1 === a8l ? 5 : 1, a8e = !1, a8c = new Uint16Array(a8O + 1), a8d = new Uint32Array(a8O + 1), a8S = aC.eV,
				l4 = new Uint16Array(a8S), jZ = new Uint16Array(a8S), aA = a8S - 1; 0 <= aA; aA--) l4[aA] = aA, jZ[aA] = aA;
			this.resize(!0), a8a = new Uint16Array(aC.eV);
			var a8n = Math.floor(a8K - a8Y - a8X - a8R);
			for (a8b = new Array(aC.eV), a8Q.font = a8N, aA = aC.eV - 1; 0 <= aA; aA--) a8b[aA] = aA + 1 + ".", af.zM[aA] = b8.x4.a1q(af.zQ[aA], a8N, a8n), a8a[aA] = Math.floor(a8Q.measureText(af.zM[aA]).width);
			a8o()
		}, this.resize = function(dU) {
			if (a6P = z.a0.qv() ? (a8K = Math.floor(.335 * h.pZ), Math.floor(a8O * a8K / 8)) : (a8K = Math.floor(.27 * h.pZ), Math.floor(a8O * a8K / 10)), a8K = Math.floor(.97 * a8K), (a8P = document.createElement("canvas")).width = a8K, a8P.height =
				a6P, a8Q = a8P.getContext("2d", {
					alpha: !0
				}), a8T = .025 * a8K, a8M = .16 * a8K, a8U = 0 * a8K, a8V = Math.floor(.45 * a8T + a8M), a8W = (a6P - a8M - 2 * a8T - a8U) / a8O,
				a8P.height = a6P += a8W, __fx.leaderboardFilter.tabBarOffset = Math.floor(a8W * 1.3), __fx.leaderboardFilter.verticalClickThreshold = a6P - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = a8K,
				a8L = b8.pX.rM(1, Math.floor(.55 * a8M)), a8k = Math.floor((z.a0.qv() ? .67 : .72) * a8W), a8N = b8.pX.rM(0, a8k), a8Q.font = a8N, a8X = Math.floor(.04 * a8K), a8Y = Math.floor((z.a0.qv() ? .195 : .18) * a8K), a8R = Math.floor(a8Q
					.measureText("00920600").width), a8Q.font = a8L, a8Z = a8K - a8X, !dU) {
				a8Q.font = a8N;
				for (var aA = aC.eV - 1; 0 <= aA; aA--) a8a[aA] = Math.floor(a8Q.measureText(af.zM[aA]).width);
				a8o()
			}
			a8m = b8.x4.a1q(L(108), a8L, .96 * a8K)
		}, this.a8H = function() {
			return a8K
		}, this.lP = function(bp, a8p) {
			(a8p || a8e && (bp || bd.jl() % a8l == 0)) && (a8e = !1, a8o())
		}, this.ii = function() {
			! function() {
				for (var er = a8S - 1; 0 <= er; er--) 0 === af.ld[l4[er]] && ! function(er) {
					var a95 = l4[er];
					a8S--;
					for (var aA = er; aA < a8S; aA++) l4[aA] = l4[aA + 1], jZ[l4[aA]] = aA;
					l4[a8S] = a95, jZ[l4[a8S]] = a8S
				}(er)
			}();
			for (var a93, mN = a8S - 1, er = 0; er < mN; er++) af.gM[l4[er]] < af.gM[l4[er + 1]] && (a93 = l4[er], l4[er] = l4[er + 1], l4[er + 1] = a93, jZ[l4[er]] = er, jZ[l4[er + 1]] = er + 1);
			! function() {
				for (var dk = a8e, g7 = (a8e = !0, jZ[aC.eI] >= a8O - 1 ? a8O - 2 : a8O - 1), aA = g7; 0 <= aA; aA--)
					if (a8c[aA] !== l4[aA] || a8d[aA] !== af.gM[l4[aA]]) return;
				(g7 != a8O - 2 || a8c[a8O] === jZ[aC.eI] && a8d[a8O] === af.gM[aC.eI]) && (a8e = dk)
			}();
			for (var aA = a8O - 1; 0 <= aA; aA--) a8c[aA] = l4[aA], a8d[aA] = af.gM[l4[aA]];
			a8c[a8O] = jZ[aC.eI], a8d[a8O] = af.gM[aC.eI];
			leaderboardHasChanged = true;
		}, __fx.leaderboardFilter.scrollToTop = function() {
			position = 0;
		}, this.gm = function(ef, eh) {
			return !!xn(ef, eh) && ((__fx.utils.isPointInRectangle(ef, eh, ba.gap + 12, ba.gap + 12, a8V - 22, a8V - 22) && __fx.playerList.display(af.zQ), true) &&
				!(eh - ba.gap > __fx.leaderboardFilter.verticalClickThreshold && __fx.leaderboardFilter.handleMouseDown(ef - ba.gap)) && (a8g = bd.e7, a8h = !0, a8i = a8j = a97(eh), bH.a0x() && (ef = a78(-1, a8j, a8O), a8f !== (ef = ef === a8O ?
					-1 : ef)) && (a8f = ef, a8o(), bd.dc = !0)), !0)
		}, __fx.leaderboardFilter.repaintLeaderboard = function() {
			a8o(), bd.dc = !0;
		},
		this.a0J = function(ef, eh) {
			if (__fx.utils.isPointInRectangle(ef, eh, ba.gap + 12, ba.gap + 12, a8V - 22, a8V - 22)) {
				__fx.playerList.hoveringOverButton === false && (__fx.playerList.hoveringOverButton = true, a8o(), bd.dc = !0);
			} else {
				__fx.playerList.hoveringOverButton === true && (__fx.playerList.hoveringOverButton = false, a8o(), bd.dc = !0);
			}
			if (__fx.leaderboardFilter.setHovering(
					__fx.utils.isPointInRectangle(ef, eh, ba.gap, ba.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth, __fx.leaderboardFilter.tabBarOffset), ef - ba.gap
				)) return;
			var dk, a96 = a97(eh);
			return a8h ? (dk = position, (position = a78(0, position += a8i - a96, aC.eV - a8O)) !== dk && (a96 = (a96 = a78(-1, a8i = a96, a8O)) !== a8O && xn(ef, eh) ? a96 : -1, a8f = a96, a8o(), bd.dc = !0), !0) : (a96 = (a96 = a78(-1, a96,
				a8O)) === a8O || !xn(ef, eh) || bH.a0x() ? -1 : a96, a8f !== a96 && (a8f = a96, a8o(), bd.dc = !0))
		}, this.a0i = function(ef, eh) {
			if (!a8h) return !1;
			a8h = !1;
			var a96 = a97(eh);
			var isEmptySpace = false;
			return bH.a0x() && -1 !== a8f && (a8f = -1, a8o(), bd.dc = !0), bd.e7 - a8g < 350 && a8j === a96 && -1 !== (a96 = (a96 = a78(-1, a96, a8O)) !== a8O && xn(ef, eh) ? a96 : -1) && (ef = (__fx.leaderboardFilter.enabled ? (updateFilteredLb(),
					l4[__fx.leaderboardFilter.filteredLeaderboard[a96 + position] ?? (isEmptySpace = true, jZ[aC.eI])]) : l4[a96 + position]), a96 === a8O - 1 && (__fx.leaderboardFilter.enabled ? this.playerPos : jZ[aC.eI]) >=
				position + a8O - 1 && (ef = aC.eI), !isEmptySpace && aC.hO && __fx.donationsTracker.displayHistory(ef, af.zQ, aC.k7), 0 !== af.ld[ef] && !isEmptySpace) && aG.lz(ef, 800, !1, 0), !0
		}, this.a0M = function(ef, eh, deltaY) {
			var a98;
			return !(a8h || aC.m8 || (a98 = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !xn(ef, eh)) || (ef = (ef = a78(-1, a97(eh), a8O)) === a8O || bH.a0x() ? -1 : ef, 0 < deltaY ? position < aC.eV - a8O && (position += Math.min(aC.eV - a8O -
				position, a98), a8f = ef, a8o(), bd.dc = !0) : 0 < position && (position -= Math.min(position, a98), a8f = ef, a8o(), bd.dc = !0), 0))
		}, this.te = function() {
			tf.drawImage(a8P, ba.gap, ba.gap)
		}
}

function cI() {
	var canvas, x4, ef, eh, a5j, a99, gap, a9A, fontSize, a9B, a9C, a9D, a9E, a9F, a9G, a9H, a9I, a9J;

	function a9N() {
		x4.clearRect(0, 0, aV.i, aV.j), x4.fillStyle = b9.mc, x4.fillRect(0, 0, aV.i, aV.j), x4.fillStyle = b9.mz, eC = 0 < a9H ? a9H : Math.sqrt(a9E[4] / 1e4), x4.fillRect(0, aV.j - a5j - 1, Math.floor(eC * aV.i), a5j), x4.fillStyle = b9.mf, x4
			.fillRect(0, 0, aV.i, 1), x4.fillRect(0, 0, 1, aV.j), x4.fillRect(aV.i - 1, 0, 1, aV.j), x4.fillRect(0, aV.j - 1, aV.i, 1), x4.fillRect(0, aV.j - a5j - 1, aV.i, 1);
		for (var eC, a9P, dk = 0, aA = 0; aA < a9D.length; aA++) a9F[aA] ? (b8.pX.textAlign(x4, 0), a9P = Math.floor((a99 - a5j + 2 * a9A) * (aA - dk + 1) / (a9D.length + 1) - .7 * a9A), x4.fillText(a9D[aA], gap, a9P), b8.pX.textAlign(x4, 2), 5 ===
			aA && 0 !== af.ld[aC.eI] && af.ga[aC.eI] >= ad.jU(aC.eI) ? (x4.fillStyle = b9.nY, x4.fillText(a9L(aA), aV.i - gap, a9P), x4.fillStyle = b9.mf) : x4.fillText(a9L(aA), aV.i - gap, a9P)) : dk++
	}

	function a9L(aA) {
		return aA < 3 ? a9E[aA].toString() : 3 === aA || 4 === aA || 5 === aA ? b8.zO.a2r(a9E[aA] / 100, 2) : aA < 7 ? b8.zO.y5(a9E[aA]) : aA === 7 ? aV.a9Q(a9E[7]) : aA === 8 ? __fx.utils.getMaxTroops(af.gM, aC.eI) : __fx.utils.getDensity(aC.eI)
	}

	function a9K() {
		af.gM[aC.eI] !== a9E[6] && (a9E[6] = af.gM[aC.eI], a9B++)
	}
	this.dU = function() {
		a9H = a9I = 0, (a9C = new Array(8))[0] = L(109), a9C[1] = aC.k7 ? L(110) : L(111), a9C[2] = L(112), a9C[3] = L(113), a9C[4] = L(114), a9C[5] = L(115, 0, "Interest"), a9C[6] = L(116), a9C[7] = L(117),
			a9C.push("Max Troops", "Density"), // add a9C
			(a9D = new Array(a9C.length)).fill(""), (a9E = new Array(a9C.length))[0] = aC.k7 ? 0 : aC.jo, a9E[1] = aC.k7 ? ak.jp : aC.k9, a9E[2] = aC.yp, a9E[3] = 0, a9E[4] = bJ.dl(1e4 * af.gM[0], Math.max(aC.jY, 1)), a9E[5] = 0 === aC.data
			.iIncomeType ? 700 : 1 === aC.data.iIncomeType ? bJ.dl(700 * aC.data.iIncomeValue, 64) : bJ.dl(700 * aC.data.iIncomeData[aC.eI], 64), a9E[6] = 0, a9K(), a9E[7] = 0, a9G = a9L(6), a9F = new Array(a9C.length);
		for (var aA = a9C.length - 1; 0 <= aA; aA--) a9F[aA] = !0;
		a9J = 0, a9J = aC.k7 ? (a9F[0] = !1, a9F[2] = !1, a9F[3] = !1, 3) : (a9F[3] = !1, 1), a9B = 0, this.resize()
	}, this.resize = function() {
		this.i = Math.floor((z.a0.qv() ? .1646 : .126) * 1.25 * h.pZ), this.j = Math.floor(1.18 * this.i), a5j = Math.floor(.04 * this.i), gap = Math.floor(.035 * this.i), a9A = .04 * this.i, a99 = this.j, this.j -= Math.floor(a9J * (this.j - 2 *
			a5j) / a9C.length), fontSize = Math.floor(.7 * (a99 - a5j) / a9C.length);
		var a4M = b8.pX.rM(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.i, canvas.height = this.j,
			function(a4M, i) {
				for (var aA = 0; aA < a9D.length; aA++) a9D[aA] = b8.x4.a1q(a9C[aA], a4M, i)
			}((x4 = canvas.getContext("2d", {
				alpha: !0
			})).font = a4M, .575 * this.i), b8.pX.textBaseline(x4, 1), x4.lineWidth = 1, this.a36(), this.a6m(), aT.a6m(), a9N()
	}, this.a6m = function() {
		ef = h.i - this.i - ba.gap
	}, this.a9O = function() {
		eh = ba.gap
	}, this.a36 = function() {
		eh = ba.gap + (aT.a69() && 0 !== af.ld[aC.eI] && !aC.gu ? aT.j + ba.gap : 0)
	}, this.lP = function(bp) {
		(bp || 100 <= a9B) && (a9B = 0, a9N())
	}, this.a41 = function() {
		return a9E[7]
	}, this.a9Q = function(value) {
		var kW = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * kW) / 1e3);
		return value < 10 ? kW + ":0" + value : kW + ":" + value
	}, this.ii = function() {
		var a9Z, per;
		a9F[0] && aC.yq - aC.yp !== a9E[0] && (a9E[0] = aC.yq - aC.yp, a9B++), ak.jp - a9E[0] !== a9E[1] && (a9E[1] = ak.jp - a9E[0], a9B++), this.lH(), (a9Z = ad.a9a(aC.eI)) !== a9E[5] && (a9E[5] = a9Z, a9B++), a9K(), a9E[7] += bd.a9b, a9Z =
			a9L(7), a9G !== a9Z && (a9G = a9Z, a9B += 100), a9Z = aC.hO ? bf.a2b() : af.gM[l4[0]], per = bJ.dl(1e4 * a9Z, Math.max(aC.jY, 1)), a9E[3] = a9Z, a9E[4] !== per && (a9B++, a9E[4] = per), 8 === aC.k5 && function() {
				for (var aA = 0; aA < 2; aA++)
					if (!b8.fu.gl(aA)) return bP.yQ.ym(), 1;
				return
			}() || a9E[3] < aC.jY || ! function() {
				for (var aA = ak.jp - 1; 0 <= aA; aA--)
					if (0 < af.g0[ak.jq[aA]].length) return;
				return 1
			}() || bP.yQ.ym()
	}, this.lH = function() {
		a9F[2] && aC.yp !== a9E[2] && (a9E[2] = aC.yp, a9B++)
	}, this.a9c = function(aA) {
		var sB, a9d, dk;
		return 2 !== aC.yn && (aA % 2 == 1 && (aU.lP(1, 1), bd.dc = !0), aA === aC.a3F ? (a9H = 0, a9N(), !1) : (-1 !== aA || 0 !== a9I) && (a9d = a9H, a9H = aC.gi ? aA / aC.a3F : (dk = performance.now(), 0 <= aA && (sB = dk - 392 * aA, a9I =
			0 === aA || sB < a9I ? sB : a9I), 1 < (a9H = (dk - a9I) / (392 * aC.a3F)) ? 1 : a9H), a9N(), a9H !== a9d))
	}, this.te = function() {
		tf.drawImage(canvas, ef, eh)
	}
}

function cJ() {
	var hG, a9e, i, j, a6s, a9f, a9g, a6A, canvas, lq, a9h;

	function x0() {
		return Math.floor((h.i - i) / 2) < aQ.j + 2 * ba.gap ? h.j - j - 4 * ba.gap - aQ.j : h.j - j - 2 * ba.gap
	}
	this.dU = function() {
		a9h = hG = !1, a6s = .61, a9f = .07, a9g = .09, lq = a6A = j = 0
	}, this.resize = function() {
		var x4, m5, et, a9m, a9n, a4R;
		hG && (i = a9i(i = z.a0.qv() ? Math.floor(.69 * h.pZ) : Math.floor(.5 * h.pZ), a4w(h.i - 2 * ba.gap, 10)), i = a9i(i, Math.floor(3.57 * a4w(h.j - 2 * ba.gap, 3))), j = Math.floor(.28 * i), (canvas = document.createElement("canvas"))
			.width = i, canvas.height = j, x4 = canvas.getContext("2d", {
				alpha: !0
			}), m5 = Math.floor(1 + j / 40), x4.clearRect(0, 0, i, j), x4.fillStyle = b9.mc, x4.fillRect(m5, m5, i - 2 * m5, j - 2 * m5), x4.lineJoin = "bevel", x4.lineWidth = 2 * m5, x4.strokeStyle = b9.mf, x4.strokeRect(m5, m5, i - 2 * m5,
				j - 2 * m5), x4.imageSmoothingEnabled = !1, et = aa.get(a9e), a9m = et.width, a4R = (1 === a9e ? .85 : 21 === a9e ? .666 : .9) * a6s * j / (a9n = et.height), x4.setTransform(a4R, 0, 0, a4R, Math.floor((i - a4R * a9m) / 2),
				Math.floor((j - a4R * a9n) / 2)), x4.drawImage(et, 0, 0), x4.setTransform(1, 0, 0, 1, Math.floor(i - a9g * j - a9f * j - m5), Math.floor(m5 + a9f * j)),
			function(x4, eY) {
				x4.lineWidth = Math.floor(1 + j / 80), x4.strokeStyle = b9.mf, x4.beginPath(), x4.moveTo(0, 0), x4.lineTo(eY, eY), x4.moveTo(0, eY), x4.lineTo(eY, 0), x4.stroke()
			}(x4, Math.floor(a9g * j)), x4.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(f0, a9k, a6f, a9l) {
		hG || a9l && a9h || (a9e = a6f ? 21 : f0 ? 1 : 2, hG = a9h = !0, this.resize(), aK.qo(), aQ.a6a(), lq = bd.e7, a6A = a9k ? 1 : 0)
	}, this.ii = function() {
		!hG || 1 <= a6A || (a6A = 1 < (a6A += 5e-4 * (bd.e7 - lq)) ? 1 : a6A, lq = bd.e7, bd.dc = !0)
	}, this.gm = function(ef, eh) {
		return !(!hG || a6A <= 0 || (ef -= Math.floor((h.i - i) / 2), eh -= x0(), ef < 0) || eh < 0 || i < ef || j < eh || (i - j / 3 < ef && eh < j / 3 && (hG = !1, bd.dc = !0), 0))
	}, this.te = function() {
		!hG || a6A <= 0 || (tf.globalAlpha = a6A, tf.drawImage(canvas, Math.floor((h.i - i) / 2), x0()), tf.globalAlpha = 1)
	}
}

function dH() {
	var a9p, a9q = new Uint8Array(5),
		a9r = new Uint8Array(5);
	this.a9s = new a9t, this.dU = function() {
		for (var f0 = bh.kn.data[119].value, aA = 0; aA < a9q.length; aA++) a9q[aA] = (f0 >> 2 * aA) % 4
	}, this.a3Q = function() {
		a9p = [L(118), L(119), L(120, [bV.a9u[28]]), L(121, [bV.a9u[26]]), L(122, [bV.a9u[0]])], this.a9s.dU()
	}, this.ii = function() {
		this.a9s.ii()
	}, this.a42 = function(id) {
		1 < id && bH.q0() || ! function(dx) {
			if (3 === a9q[dx] || 1 === a9r[dx]) return;
			if (a9r[dx] = 1, !(Math.random() < .6)) {
				a9q[dx]++;
				for (var f0 = 0, aA = 0; aA < a9q.length; aA++) f0 += a9q[aA] << 2 * aA;
				bh.qz.r0(119, f0)
			}
			return 1
		}(id) || aM.a52(a9p[id])
	}
}

function a9t() {
	var a9w;
	this.dU = function() {
		a9w = !1
	}, this.ii = function() {
		var g6;
		if (function() {
				if (!a9w) {
					if (bd.jl() % 30 != 9) return;
					if (!b8.fu.kx(90)) return;
					a9w = !0
				}
				return 1
			}() && (! function() {
				var pP = aM.a5N(956);
				if (pP) {
					if (b8.fu.ka(pP.player)) return 1;
					aM.a48(956, 0)
				}
				return
			}() && (-1 === (g6 = (aC.hO ? function() {
				var id = bf.l1(),
					eY = ak.jp;
				if (be.kA[id])
					for (var yb = ak.jq, eW = be.eW, aA = 0; aA < eY; aA++) {
						var g6 = yb[aA];
						if (eW[g6] !== id) return g6
					} else if (1 < eY) return l4[eY - 1];
				return -1
			} : function() {
				for (var aA4 = ak.jp, kV = ak.jq, aA5 = jZ, aA = 0; aA < aA4; aA++) {
					var g6 = kV[aA];
					if (0 !== aA5[g6]) return g6
				}
				return -1
			})()) ? ! function() {
				var pP = aM.a5N(957);
				if (pP && pP.a4s) {
					if (ab.eP(pP.a4s.eK << 2)) return 1;
					aM.a48(957, 0)
				}
				return
			}() : (aM.zB(0, L(123, [af.zM[g6]]), 956, g6, b9.mf, b9.mc, -1, !0), 0)))) {
			var eY = am.iT.km;
			if (0 !== eY)
				for (var kn = am.iT.kn, aA = 0; aA < eY; aA++) {
					var eK = kn[aA];
					if (ab.eP(eK << 2)) return void aM.zB(0, L(124, [bK.eg(eK), bK.ei(eK)]), 957, 0, b9.mf, b9.mc, -1, !0, void 0, {
						er: 1,
						eK: eK
					})
				}
		}
	}
}

function dI() {
	this.aA6 = new aA7, this.dU = function() {
		this.aA6.resize()
	}
}

function aA7() {
	this.resize = function() {
		var aA, aA8 = document.head.querySelector("style#ss");
		if (aA8)
			for (aA = aA8.sheet.cssRules.length - 1; 0 <= aA; aA--) aA8.sheet.deleteRule(0);
		else(aA8 = document.createElement("style")).id = "ss", document.head.appendChild(aA8);
		var a70 = "::-webkit-scrollbar",
			aA9 = b8.pX.ph(ba.rO),
			hQ = b8.pX.ph(Math.max(b8.pX.qq(.012), 8));
		try {
			aA8.sheet.insertRule(a70 + "{width:" + hQ + ";height:" + hQ + ";}", aA8.sheet.cssRules.length), aA8.sheet.insertRule(a70 + "-thumb{background-color:white;}", aA8.sheet.cssRules.length), aA8.sheet.insertRule(a70 +
				"-track{background:" + b9.mb + ";}", aA8.sheet.cssRules.length), aA8.sheet.insertRule(a70 + "-track:horizontal{border-top:" + aA9 + " solid white;}", aA8.sheet.cssRules.length), aA8.sheet.insertRule(a70 +
				"-track:vertical{border-left:" + aA9 + " solid white;}", aA8.sheet.cssRules.length), aA8.sheet.insertRule(a70 + "-button{display:none;}", aA8.sheet.cssRules.length)
		} catch (e) {
			for (console.log("error 3425: " + e), aA = aA8.sheet.cssRules.length - 1; 0 <= aA; aA--) aA8.sheet.deleteRule(0)
		}
	}
}

function dG() {
	this.aAA = !1, this.mV = !1, this.a3A = !1, this.aAB = [0, 0, 0, 0], this.aAC = function() {
		var m5, m6, mI, mJ;
		this.a3A = this.a3A || this.mV, (this.mV || this.aAA && this.a3A) && (m5 = bY.aAD[0], m6 = bY.aAD[1], mI = bY.aAD[2], mJ = bY.aAD[3], m5 = m5 < this.aAB[0] ? this.aAB[0] : m5, m6 = m6 < this.aAB[1] ? this.aAB[1] : m6, mI = mI > this.aAB[
				2] ? this.aAB[2] : mI, mJ = mJ > this.aAB[3] ? this.aAB[3] : mJ, this.mV = !1, this.aAA = !1, m5 === this.aAB[0] && m6 === this.aAB[1] && mI === this.aAB[2] && mJ === this.aAB[3] ? this.a3B() : m5 <= mI && m6 <= mJ && a3S
			.putImageData(a3T, 0, 0, m5, m6, mI - m5 + 1, mJ - m6 + 1))
	}, this.a3B = function() {
		this.a3A && this.aAB[2] >= this.aAB[0] && this.aAB[3] >= this.aAB[1] && a3S.putImageData(a3T, 0, 0, this.aAB[0], this.aAB[1], this.aAB[2] - this.aAB[0] + 1, this.aAB[3] - this.aAB[1] + 1), this.a3A = !1
	}, this.yy = function() {
		this.aAB[2] >= this.aAB[0] && this.aAB[3] >= this.aAB[1] && a3S.putImageData(a3T, 0, 0, this.aAB[0], this.aAB[1], this.aAB[2] - this.aAB[0] + 1, this.aAB[3] - this.aAB[1] + 1), this.a3A = !1
	}, this.dU = function() {
		var ef, eh;
		this.aAA = !1, this.mV = !1, this.a3A = !1, this.aAB[0] = bQ.ej, this.aAB[1] = bQ.ek, this.aAB[2] = this.aAB[3] = 0;
		loop: for (ef = 1; ef < bQ.ej - 1; ef++)
			for (eh = bQ.ek - 2; 1 < eh; eh--)
				if (1 === aAE[ab.wZ(ef, eh) + 2]) {
					this.aAB[0] = ef;
					break loop
				} loop: for (eh = 1; eh < bQ.ek - 1; eh++)
			for (ef = bQ.ej - 2; 1 < ef; ef--)
				if (1 === aAE[ab.wZ(ef, eh) + 2]) {
					this.aAB[1] = eh;
					break loop
				} loop: for (ef = bQ.ej - 2; 0 < ef; ef--)
			for (eh = bQ.ek - 2; 1 < eh; eh--)
				if (1 === aAE[ab.wZ(ef, eh) + 2]) {
					this.aAB[2] = ef;
					break loop
				} loop: for (eh = bQ.ek - 2; 0 < eh; eh--)
			for (ef = bQ.ej - 2; 1 < ef; ef--)
				if (1 === aAE[ab.wZ(ef, eh) + 2]) {
					this.aAB[3] = eh;
					break loop
				}
	}
}

function L(value, aAF, uC) {
	var pE = "number" == typeof value ? b5.aAG[value] : value;
	if (uC && b5.aAH() && (pE = uC), aAF)
		for (var eY = aAF.length, aA = 0; aA < eY; aA++)
			for (var er = 0; er < 3; er++) pE = pE.replace("{" + (10 * er + aA) + "}", aAF[aA]);
	return pE
}

function bx() {
	this.data = new aAI;
	var aAJ = (new aAK).L84,
		aAL = (this.aAG = aAJ, !1);
	this.dU = function() {
		var eY, g;
		aAL = !1, "en" !== bh.kn.data[12].value.split("-")[0].toLowerCase() ? bh.kn.data[12].value === bh.kn.data[145].value && 0 < bh.kn.data[146].value && (eY = bh.kn.data[146].value, (g = bh.pp.uI(eY, !1)).length === eY) && !!b8.pg.a1T(g) &&
			function(g) {
				for (var eY = g.length, j = 0; j < eY; j++) g[j] = g[j].replace("&#39;", "'");
				var aAR = bh.pp.uI(eY, !0);
				if (eY !== aAR.length) return !1;
				if (!b8.pg.a1T(aAR)) return !1;
				for (var kW = aAJ.length, a7t = new Array(kW), aAS = kW === eY, g1 = Math.min(eY, kW), aA = 0; aA < kW; aA++)
					if (a7t[aA] = aAJ[aA], aA < eY && aAR[aA] === a7t[aA]) a7t[aA] = g[aA];
					else {
						aAS = !1;
						for (var es = 0; es < g1; es++)
							if (aAR[es] === a7t[aA]) {
								a7t[aA] = g[es];
								break
							}
					} return b5.aAG = a7t, aAS
			}(g) || (aAL = !0) : b5.aAG = aAJ
	}, this.dW = function() {
		be.dV(), aD.dV(), bc.dV(), bb.dV(), aN.dU(), bm = new dn
	}, this.aAH = function() {
		return this.aAG === aAJ || !aAJ.length
	}, this.aAT = function() {
		var aAU;
		aAL && (aAL = !1, 0 !== aAJ.length) && (aAU = bh.kn.data[12].value, ay.aAV.aAW(0, aAU.slice(0, 20)))
	}, this.aAX = function(g) {
		g.length === aAJ.length && (this.aAG = g, bh.qz.r0(145, bh.kn.data[12].value), bh.qz.r0(146, g.length), bh.pp.uO(g, !1), bh.pp.uO(aAJ, !0), 0 === aZ.zx()) && 5 === s.rm && s.x.aAY()
	}, this.aAZ = function() {
		var aAa, g = navigator.languages;
		return g && g.length ? (aAa = Math.max(b5.data.aAb(g[0]), 0), 1 === g.length ? [aAa, aAa] : [aAa, Math.max(b5.data.aAb(g[1]), 0)]) : [0, 0]
	}
}

function aAI() {
	this.g = ["en", "aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts",
		"btx", "bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fj", "fo",
		"fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac", "kek",
		"kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk", "ml",
		"mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu", "rn", "ro",
		"rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl", "tn", "to", "tpi",
		"tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu", "nb", "fil", "sh"
	], this.aAc = function() {
		for (var aAd = [], g = this.g, eY = g.length, aA = 0; aA < eY; aA++) aAd.push(g[aA]);
		var aAe = bh.kn.data[12].uC;
		for (aA = 0; aA < eY; aA++)
			if (aAd[aA] === aAe) {
				aAd.splice(aA, 1), eY--;
				break
			} aAd.sort(), eY++, aAd.unshift(aAe);
		try {
			if ("undefined" == typeof Intl) return aAd;
			for (aA = 0; aA < eY; aA++) {
				var pE = new Intl.DisplayNames([aAd[aA]], {
					type: "language"
				}).of(aAd[aA]);
				pE !== aAd[aA] && (aAd[aA] = aAd[aA] + ": " + pE)
			}
		} catch (e) {
			console.log("error 3646: " + e)
		}
		return aAd
	}, this.aAg = function(aAh) {
		for (var pE = bh.kn.data[12].value, eY = aAh.length, aA = 0; aA < eY; aA++)
			if (pE === aAh[aA].split(":")[0]) return aA;
		return 0
	}, this.aAb = function(aAi) {
		if (!aAi || aAi.length < 2) return 0;
		aAi = aAi.split("-")[0].toLowerCase();
		for (var g = this.g, eY = g.length, aA = 0; aA < eY; aA++)
			if (aAi === g[aA]) return aA;
		return -1
	}
}

function aAK() {
	this.L84 = ["No Admin", "Helper", "Junior Moderator", "Moderator", "Senior Moderator", "Lead Moderator", "Head Admin", "Very Easy", "Easy", "Normal", "Hard", "Very Hard", "Impossible", "Type your message here...", "Send", "Activated", "Top Clan",
		"Best Clan Member", "Top Admin", "Best 1v1 Player", "Best Battle Royale Player", "Richest Player", "Lobby", "Team {0}", "Team {0} has won the game!", "You have earned a participation reward of {10} gold.",
		"The prize money has been distributed as follows:", "You have earned points based on the amount of prize money.", "Clan {0} has won {11} points.", "The following clan members have earned these additional amounts of gold and points:",
		"These clan members have collectively paid a tribute of {10} gold to the clan leader of {1}.", "Check clan results at this page: ", "Back", "Error", "Error {10}", "Not Enough Gold!", "You need more gold to perform this action.",
		"Quit Game", "More", "This is a contest!", "Accept", "You have conquered {0}.", "You have been conquered by {0}.", "Congratulations! You have won the game.", "{0} has won the game.", "{0} has broken the non-aggression pact.",
		"{0} is attacking you!", "Choose your start position!", "You have surrendered!", "The game has ended in a stalemate!", "Error: {10}", "{0} has been immortalized!", "Neutral Land: {0}", "Player: {0}", "Strength: {10}", "Territory: {10}",
		"Team", "Bot Difficulty", "Index: {10}", "Coordinates: {10}", "Mountain: {10}", "Water: {10}", "Ship Owner: {0}", "Message to {0}", "Humanity triumphs! The undead have been beaten back.", "The Resistance",
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
		"You are about to send {10} gold from the Source Account {1}. The transaction fee is 1 gold. The Target Account ({2}) will receive {13} gold.", "Account Name", "Copy", "Password", "Show", "Hide", "Request New Password", "Security Tip",
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
		"You and this clan member must have the same primary clan, which can be checked in the Primary Clan Stats.", "A clan leader earns gold whenever their clan wins points.", "Additional Income", "Options", "Default", "Uniform", "Customized",
		"Mixed", "Team dependent", "Player Count", "Clan Chart", "🛠️ Options", "🛠️ Chart Options", "Search Terms", "Separate search terms with a comma.", "Load Data", "Start Index", "End Index", "Timeframe", "More Options",
		"Y-Axis Compression", "Choose Your Nation's Color!", "National Color", "Red: ", "Green: ", "Blue: ", "Adjust", "Colors", "Random", "Selectable Color", "⏳ Connecting...", "Find Server...", "New Connection...", "Custom Scenario", "⚔️ Play",
		"Map", "Settings", "Game Mode", "Clustered", "Player Names", "Kingdom Names", "Simple Names", "Territorial Income", "Interest Income", "Starting Resources", "More Settings", "Reset Scenario", "Open File...", "Save As File...",
		"Multiplayer", "My Account", "Game Menu", "Your Kingdom's Name", "Clans", "Clan Members", "Admins", "1v1 Players", "Battle Royale", "Richest Players", "🏆 Leaderboards", "Previous 10", "Next 10", "1v1 Player Ranking", "Clan Ranking",
		"Clan Member Ranking", "Admin Ranking", "1v1 Reports", "Admin Election", "Blockchain", "Clan Leader Election", "Bio Reports", "Battle Royale Players", "Ranking", "Player", "Elo", "Clan", "Rating", "Leader", "Index", "Seconds Ago",
		"Accuser", "Accused", "Voter", "Target Account", "Votes", "Sender", "Receiver", "Amount", "Number", "Gold", "Elo Deducted", "Bio Removed", "🛠️ List Options", "Clan Name Search", "Username Search", "Quantity", "Account Name Search",
		"1v1", "Zombie", "Chat", "Close", "Ready", "Next Map", "Next Game Mode", "Next Contest", "Teams", "ON", "OFF", "Zombies", "Login", "📜 Logs", "Procedural Map", "Realistic Map", "Custom Map", "Passable Water", "Passable Mountains",
		"Select File", "Preview", "Map Name", "Selectable Name", "▶️ Replay", "🔲 Select All", "📋 Copy", "🗑️ Clear", "▶️ Launch", "Insert the replay string here!", "⚙️ Settings", "🔄 Reset", "Reload Required",
		"A game reload is required to apply the new configuration.", "Information", "Increasing resolution, shrinking minimum font size, and speeding up text rendering can strain your system and hinder gameplay responsiveness.", "Resolution",
		"Low", "Medium", "High", "Very High", "Minimum Font Size", "Small", "Very Small", "Text Rendering Speed", "Slow", "Fast", "Large UI", "Place Balance Above", "Hide Zoom Buttons", "Font", "Shortcut Keys", "Reset", "Language", "Spawning",
		"Selectable Spawn", "🔑 My Account", "📈 Charts", "🧈 Gold Transfer", "🔗 Links", "ℹ️ Game Version", "🗑️ Delete Data", "Privacy Settings", "Force Restart Game", "☰ Game Menu", "📊 Game Statistics", "🏳️ Surrender", "🕊️ Call Peace Vote",
		"Android App", "iOS App", "Changelog", "Clan Results", "Tutorial", "Terms", "Privacy", "Do you want to delete all locally stored data, like usernames, account data and setting data?",
		"Accounts without gold will be deleted after some days of grace.", "🗑️ Delete", "User Privacy", "Check out our Privacy Policy at:", "Source Account", "Replay Error", "Warning", "Loading...",
		"An enemy ship belonging to {0} is heading towards your shore.", "Initiate Land Attack At Mouse Pointer", "Launch Ship Towards Mouse Pointer", "Increase Percentage Bar", "Decrease Percentage Bar", "Slightly Increase Percentage Bar",
		"Slightly Decrease Percentage Bar", "Switch UI Visibility", "Zoom In", "Zoom Out", "Camera Left", "Camera Right", "Camera Up", "Camera Down", "Add To Weakest Attack", "Call Peace Vote", "Avg. Attack Strength", "Land Attacks",
		"Ships launched", "Bots conquered", "Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Received Support", "Overall Income", "Additional Costs", "Land War Losses", "Naval Losses", "Transmitted Support",
		"Overall Expenses", "Mountain Attacks", "Ships landed", "Territory", "Numbers", "Statistics", "Neutral", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black", "Ship launched!", "Ship selected!", "Ship on the way!",
		"Upcoming Alliance Contest!", "Upcoming Battle Royale Contest!", "Upcoming 1v1 Contest!", "Upcoming Zombie Contest!"
	]
}

function da() {
	var ef, eh, j, sj, aAj, aAk, aAl, aAm, aAn, i, a26, aAo;
	this.hG = !1, this.dU = function(pE, aAp) {
		if (1 === z.id && 13 <= z.f1 && z.f1 < 18) return aAp ? void(a26 = pE) : a26 !== pE ? void 0 : void z.uG.saveString(200, pE);
		aAp && (a26 = pE, (aAo = document.createElement("a")).appendChild(document.createTextNode(a26)), this.hG = !0, aAo.title = a26, aAo.target = "_blank", aAo.href = a26, aAo.style.textAlign = "center", aAo.style.color = b9.mf, aAo.style
			.position = "absolute", aAo.style.padding = "0px", aAo.style.margin = "0px", this.resize(), document.body.appendChild(aAo), bd.dc = !0)
	}, this.qo = function() {
		return !(!this.hG || (document.body.removeChild(aAo), this.hG = !1))
	}, this.gm = function(hr, hs) {
		return !!this.hG && ((hr < ef || hs < eh || ef + i < hr || eh + j < hs || ef + i - sj < hr && hs < eh + sj) && (bd.dc = !0, this.hG = !1, document.body.removeChild(aAo)), !0)
	}, this.resize = function() {
		var a4M, aAq;
		this.hG && (aAm = Math.floor(.8 * (z.a0.qv() ? h.i > h.j ? .6 : .55 : .4) * h.pZ), sj = Math.floor(.15 * aAm), aAj = Math.floor(.35 * sj), aAk = Math.floor(.5 * sj), aAl = Math.floor(2.5 * aAk), j = sj + aAj + 3 * aAk, a4M = b8.pX.rM(1,
			aAj / h.k), aAn = Math.floor(h.k * aP.measureText(a26, a4M)), aAq = i = (aAm < aAn ? aAn : aAm) + 2 * aAl, i = Math.min(i, h.i - 2 * (z.a0.qv() ? 2 : 1) * ba.gap), a4M = b8.pX.rM(1, i / aAq * aAj / h.k), aAn = Math.floor(h.k *
			aP.measureText(a26, a4M)), ef = Math.floor((h.i - i) / 2), eh = Math.floor((h.j - j) / 2), aAo.style.font = a4M, aAo.style.top = Math.floor((eh + 1.4 * aAk + sj) / h.k) + "px", aAo.style.left = Math.floor((ef + (i - aAn) /
			2) / h.k) + "px")
	}, this.te = function() {
		this.hG && (tf.fillStyle = b9.mc, tf.fillRect(ef, eh + sj, i, j - sj), tf.fillStyle = b9.nj, tf.fillRect(ef, eh, i, sj), tf.fillStyle = b9.mf, tf.lineWidth = ba.xo, tf.strokeStyle = b9.mf, tf.strokeRect(ef, eh, i, j), tf.fillRect(ef, eh +
			sj, i, ba.xo), tf.font = b8.pX.rM(1, .48 * sj), b8.pX.textAlign(tf, 1), b8.pX.textBaseline(tf, 1), tf.fillText("You are leaving Territorial.io!", Math.floor(ef + (i - .5 * sj) / 2), Math.floor(eh + .55 * sj)), aL.a4X(Math
			.floor(ef + i - .8 * sj), Math.floor(eh + .25 * sj), Math.floor(.5 * sj)), tf.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function dY() {
	var gap, a9C, ef = [0, 0, 0, 0, 0],
		eh = [0, 0, 0, 0, 0],
		mH = [1, 1, 1, 1, 1],
		f0 = [!0, !0, !0, !1, !1],
		et = (this.fK = [!0, !0, !0, !1, !1], null);
	this.aAr = function(a1e, aAs) {
		et = a1e, f0 = aAs, a9C = [bI.aAt, bI.zs, bI.aAu, bI.aAu, bI.aAv], this.dU()
	}, this.dU = function() {
		if (aa.sE()) {
			var aA, rt = Math.floor((z.a0.qv() ? .261 : .195) * h.pZ),
				ru = Math.floor(.9 * rt),
				a6s = Math.floor(.17 * ru);
			if (gap = z.a0.qv() ? 2 * ba.gap : ba.gap, mH[0] = rt / et[0].width, mH[1] = ru / et[1].width, mH[2] = a6s / et[2].height, mH[3] = a6s / et[3].height, mH[4] = a6s / et[4].height, mH[2] *= 1.7, mH[3] *= 1.07, ef[0] = gap, ef[1] = gap,
				ef[2] = gap, ef[3] = gap, ef[4] = Math.floor(2 * gap + mH[3] * et[3].width), eh[0] = gap, eh[1] = eh[0] + gap + mH[0] * et[0].height, eh[2] = eh[1] + gap + mH[1] * et[1].height, eh[3] = eh[2] + gap + mH[2] * et[2].height, eh[4] =
				eh[3], !f0[0])
				for (aA = 0; aA < 5; aA++) eh[aA] -= mH[0] * et[0].height + gap;
			if (!f0[1])
				for (aA = 2; aA < 5; aA++) eh[aA] -= mH[1] * et[1].height + gap
		}
	}, this.hG = function() {
		return !(7 === aZ.zx() && z.a0.qv())
	}, this.gm = function(hr, hs) {
		if (et && this.hG())
			for (var aA = f0.length - 1; 0 <= aA; aA--)
				if (f0[aA] && this.fK[aA] && ef[aA] < hr && eh[aA] < hs && hr < ef[aA] + mH[aA] * et[aA].width && hs < eh[aA] + mH[aA] * et[aA].height) return s.t(9, s.rm, new aAw("You are leaving Territorial.io.", b8.pX.a25(a9C[aA]))), !0;
		return !1
	}, this.te = function() {
		if (et && this.hG()) {
			var aA;
			for (tf.imageSmoothingEnabled = !0, aA = 0; aA < 5; aA++) f0[aA] && this.fK[aA] && (tf.setTransform(mH[aA], 0, 0, mH[aA], ef[aA], eh[aA]), tf.drawImage(et[aA], 0, 0));
			tf.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function dR() {
	this.aAx = 0, this.aAy = null, this.ss = null, this.qh = null, this.x = null, this.tE = null, this.sq = null, this.message = null, this.aAz = null, this.qn = null, this.aB0 = new aB1, this.a01 = 0, this.dU = function() {
		this.aAx = bE.rp.vA(bh.kn.data[105].value), this.ss = new aB2, this.qh = new aB3, this.x = new aB4, this.tE = new aB5, this.sq = new aB6, this.message = new aB7, this.aAz = new aB8, this.qn = new aB9, this.x.dU(), bn.dU(), this.a01 = 1, z
			.a0.setState(1), aZ.setState(0)
	}, this.t8 = function() {
		this.qn && this.qn.t8(), this.aAy = null, this.ss = null, this.qh = null, this.x = null, this.tE = null, this.sq = null, this.message = null, this.aAz = null, this.qn = null, this.a01 = 0, bn.t8(), z.a0.setState(0)
	}
}

function aB2() {
	function aBS(g, s7, s8) {
		var aBT = g[s7];
		g[s7] = g[s8], g[s8] = aBT
	}
	this.st = [
		[],
		[],
		[],
		[]
	], this.su = [0, 0, 0, 0], this.aBA = function(aBB, rk, username, sz, zf, aBC, elo, color, ui, aBD) {
		this.st[aBB].push(this.aBE(rk, username, sz, zf, aBC, elo, color, ui, aBD)), bl.aAx === rk && (bl.aAy = this.st[aBB][this.st[aBB].length - 1]), bl.x.aBF += 29 === s.rm && bl.x.qa[0] === aBB && 1 === bl.x.qa[2]
	}, this.aBE = function(rk, username, sz, zf, aBC, elo, color, ui, aBD) {
		return {
			rk: rk,
			username: username,
			sz: sz,
			zf: zf,
			aBC: aBC,
			elo: elo,
			color: color,
			ui: ui,
			aBD: aBD
		}
	}, this.aBG = function(dx, aBB, sz, zf, aBC, elo, ui) {
		dx = this.st[aBB][dx];
		dx.sz = sz, dx.zf = zf, dx.aBC = aBC, dx.elo = elo, dx.ui = ui, bl.x.aBF += 29 === s.rm && bl.x.qa[0] === aBB && 1 === bl.x.qa[2]
	}, this.aBH = function(dx, aBB, aBI) {
		var dx = this.st[aBB][dx],
			aBJ = dx.username,
			aBK = "Redacted " + bD.rp.y5(dx.rk, 2);
		dx.username = aBI ? "[" + b8.zO.zT(aBJ) + "] " + aBK : aBK, aBJ.indexOf("Redacted") < 0 && (dx.aBL = aBJ), bl.x.aBF += 29 === s.rm && bl.x.qa[0] === aBB && 1 === bl.x.qa[2]
	}, this.aBM = function(dx, aBN, aBO) {
		var player = this.st[aBN][dx];
		this.aBP(dx, aBN), this.st[aBO].push(player), bl.x.aBF += 29 === s.rm && bl.x.qa[0] === aBO && 1 === bl.x.qa[2]
	}, this.aBP = function(dx, aBN) {
		var ss = this.st[aBN];
		dx >= this.su[aBN] ? ss[dx] = ss[ss.length - 1] : (this.su[aBN]--, 2 === aBN ? (ss.splice(this.su[aBN] + 1, 0, ss[ss.length - 1]), ss.splice(dx, 1)) : (ss[dx] = ss[this.su[aBN]], ss[this.su[aBN]] = ss[ss.length - 1])), ss.pop(), bl.x
			.aBF += 29 === s.rm && bl.x.qa[0] === aBN && 1 === bl.x.qa[2]
	}, this.aBQ = function(dx, qZ) {
		bl.x.aBF += 29 === s.rm && bl.x.qa[0] === qZ && 1 === bl.x.qa[2];
		var ss = this.st[qZ],
			pP = ss[dx];
		if (2 === qZ)
			if (dx >= this.su[qZ]) {
				for (var aBR = this.su[qZ], elo = pP.elo; aBR && elo > ss[aBR - 1].elo;) aBR--;
				ss[dx] = ss[this.su[qZ]], ss.splice(this.su[qZ]++, 1), ss.splice(aBR, 0, pP)
			} else ss.splice(this.su[qZ]--, 0, pP), ss.splice(dx, 1);
		else dx >= this.su[qZ] ? aBS(ss, this.su[qZ]++, dx) : aBS(ss, --this.su[qZ], dx)
	}, this.aBU = function(rk) {
		for (var st = this.st, eY = st.length, aA = 0; aA < eY; aA++)
			for (var ss = st[aA], kW = ss.length, er = 0; er < kW; er++)
				if (rk === ss[er].rk) return ss[er];
		return null
	}
}

function aB1() {
	this.dd = function(dx) {
		if ((su = bl.ss.su[dx]) < 2 && !__fx.customLobby.isActive()) return !1;
		var qb = bl.x.qc[dx],
			aBV = 9 === qb.aBW ? 333 : 512,
			su = Math.min(su, aBV);
		8 === qb.aBW && (su -= su % 2);
		aBV = bl.ss.st[dx].splice(0, su), bl.ss.su[dx] -= su, su = function(aBX) {
			if (bl.aAy) {
				if (__fx.customLobby.isActive()) return __fx.customLobby.getPlayerId();
				for (var eY = aBX.length, rk = bl.aAy.rk, aA = 0; aA < eY; aA++)
					if (aBX[aA].rk === rk) return aA
			}
			return -1
		}(aBV);
		return -1 === su ? (bl.x.aBF += 29 === s.rm && bl.x.qa[0] === dx && 1 === bl.x.qa[2], !1) : (8 === qb.aBW && (qb.aBa = (qb.aBa + (su >> 1)) % 1024, dx = su - su % 2, su %= 2, aBV = aBV.slice(dx, 2 + dx)), av.dU(qb, aBV, su), !0)
	}, this.aBb = function(qb, aBX, aBY) {
		var eb = aC.data = new a3G,
			aBf = (eb.spawningSeed = qb.spawningSeed, qb.aBW < 7 ? (eb.gameMode = 1, eb.numberTeams = qb.aBW + 2) : 9 === qb.aBW ? (eb.gameMode = eb.isZombieMode = 1, eb.numberTeams = 2) : (eb.gameMode = 0, eb.battleRoyaleMode = 7 === qb.aBW ?
				0 : 10 === qb.aBW ? 1 : 2), eb.selectedPlayer = aBY, eb.isContest = qb.aBc, eb.mapType = bQ.aBd(qb.eE) ? 0 : 1, bQ.aBe(eb, qb.eE), eb.mapSeed = qb.mapSeed, eb.humanCount = aBX.length);
		eb.selectableSpawn = 1 === eb.gameMode || aBf < 100, eb.colorsData = new Uint32Array(aBf), eb.playerNamesData = new Array(aBf);
		for (var aA = 0; aA < aBf; aA++) eb.colorsData[aA] = aBX[aA].color, eb.playerNamesData[aA] = aBX[aA].username;
		if (2 === eb.battleRoyaleMode)
			for (eb.elo = new Uint16Array(aBf), aA = 0; aA < aBf; aA++) eb.elo[aA] = aBX[aA].elo;
		aZ.setState(8), bQ.a6(qb.eE, eb.mapSeed), aC.a3K(), aC.a3J = 2
	}
}

function aB3() {
	var dp = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player"],
		aBg = [b9.mt, b9.mt, b9.mu, b9.nN, b9.nO, b9.nA, b9.nT, b9.mu, b9.nl, b9.nb],
		aBh = [
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
		aBi = ["Your account is too new!", "The server couldn't process your request.", "Spam detected!", "You are muted!", "Player couldn't be found.", "You don't have permission for this operation!", "Not enough gold!", "Action cancelled!"];
	this.qj = function(aBj) {
		var aBk, zU;
		return aBj.id < 5 && (aBk = "@" + bD.rp.y5(aBj.rk, 5)), 0 === aBj.id ? aBk + ": " + aBj.p : 1 === aBj.id ? (zU = "@" + bD.rp.y5(aBj.target, 5), 0 === aBj.aBl ? 32768 <= aBj.value ? aBk + " voted with " + (aBj.value - 32768 + 1) +
				" gold against " + zU + " to weaken the latter's admin position." : aBk + " voted with " + (aBj.value + 1) + " gold for " + zU + " to strengthen the latter's admin position." : 1 === aBj.aBl ? aBk + " sent " + Math.floor(aBj
					.value / 100) + " Gold to " + zU + "." : aBk + " voted with " + aBj.value + " points for " + zU + " to acknowledge the latter as clan leader.") : 2 === aBj.id ? 0 === aBj.aBl ? aBk + " was muted. Duration: 1 Hour" : 1 === aBj
			.aBl ? "The username of " + aBk + " was redacted. Duration: 1 Day" : aBk + " was kicked." : 3 === aBj.id ? aBk + bm.e0(aBj.aBl, bm.du[aBj.aBl][aBj.value]) + "@" + bD.rp.y5(aBj.target, 5) + bm.e2(aBj.aBl, bm.du[aBj.aBl][aBj.value]) :
			4 === aBj.id ? aBk + bm.e0(5, bm.du[5][aBj.aBl]) + "@" + bD.rp.y5(aBj.target, 5) + bm.e2(5, bm.du[5][aBj.aBl]) : 5 === aBj.id ? aBi[aBj.aBl] : 6 === aBj.id ? "You are about to mention " + aBj.value + " player" + (1 === aBj.value ?
				"" : "s") + ". This action will cost " + (Math.max(20 * aBj.value, 20) / 100).toFixed(2) + " Gold. Proceed? (yes / no)" : void 0
	}, this.qi = function(aBj, a5Z) {
		return {
			id: aBj.id,
			p: a5Z,
			aBm: 0,
			fontSize: 1,
			qm: 0,
			aBn: aBj.id ? b9.nM : b9.mf
		}
	}, this.sx = function(player, qZ, aBo) {
		return (2 === qZ ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username + (aBo && player.aBL ? " (" + player.aBL + ")" : "")
	}, this.sy = function(sz) {
		return aBg[sz]
	}, this.aBp = function(sz, zf) {
		return sz < 3 || 7 === sz ? aBh[sz][0] : 4 === sz ? aBh[sz][zf < 1 ? 0 : zf < 10 ? 1 : 2] : aBh[sz][zf < 10 ? 0 : 1]
	}, this.aBq = function(zf) {
		return 0 === zf
	}, this.aBU = function(qZ, rk) {
		for (var st = bl.ss.st, ss = st[qZ], eY = ss.length, aA = 0; aA < eY; aA++)
			if (rk === ss[aA].rk) return ss[aA];
		for (var es = 0; es < st.length; es++)
			if (qZ !== es)
				for (eY = (ss = st[es]).length, aA = 0; aA < eY; aA++)
					if (rk === ss[aA].rk) return ss[aA];
		return null
	}, this.t0 = function(pP) {
		return !!bl.aAy && pP.rk === bl.aAy.rk
	}, this.aBr = function(ss, aBs, aBt) {
		var zR = [];
		loop: for (var aA = aBs; aA < aBt; aA++) {
			var zS = b8.zO.zT(ss[aA].username);
			if (zS) {
				for (var es = zR.length - 1; 0 <= es; es--)
					if (zS === zR[es].name) {
						zR[es].g1++;
						continue loop
					} zR.push({
					name: zS,
					g1: 1
				})
			}
		}
		if (zR.sort(function(er, es) {
				return es.g1 - er.g1
			}), 0 === zR.length) return "";
		for (var pE = zR[0].name + ": " + zR[0].g1, aA = 1; aA < zR.length; aA++) pE += "   " + zR[aA].name + ": " + zR[aA].g1;
		return pE
	}, this.aBu = function(sz, zf, aBC) {
		return 0 === dp[sz].length ? "Rank: " + (zf + 1) : dp[sz] + " Rank: " + (zf + 1) + (3 !== sz && aBC < 100 ? "   " + dp[3] + " Rank: " + (aBC + 1) : "")
	}
}

function aB6() {
	var rF = 0,
		aBv = 0,
		aBw = 0,
		aBx = null,
		aBy = null;

	function aC1(pP, aC2, aC3) {
		var pE = pP.username;
		return (pE += "   " + bl.qh.aBu(pP.sz, pP.zf, pP.aBC)) + function(pP) {
			pP = pP.ui;
			if (pP < 1e3) return "   Gold: " + pP;
			if ((pP %= 1024) < 1e3) return "   Gold: " + pP + "k";
			return "   Gold: " + (pP - 999) + "M"
		}(pP) + ("   IP: " + bD.rp.y5(pP.aBD, 2)) + ("   " + ["🟥 Offline", "🟩 Online"][aC3 ? aBv : aC0(pP, aC2)])
	}

	function aC0(pP, aC2) {
		return aBv = aC2 || bl.ss.aBU(pP.rk) ? 1 : 0
	}
	this.aBz = function() {
		!rF || aBv === aC0(aBy) && aBw === aBy.ui || (aBw = aBy.ui, aBx.show(-1, -1, aC1(aBy, 0, 1), 1, 1))
	}, this.t1 = function(e, pP, aC2) {
		var a6z = e.target.getBoundingClientRect();
		this.show(a6z.left, a6z.top, pP, 0, aC2), e.target.addEventListener("mouseleave", function remove() {
			e.target.removeEventListener("mouseleave", remove), bl.sq && bl.sq.qo(1)
		})
	}, this.show = function(ef, eh, pP, rJ, aC2) {
		aBx = aBx || new rD, aBw = (aBy = pP).ui, aBx.show(ef, eh, aC1(pP, aC2), rJ), rF = 1
	}, this.qo = function(rP) {
		aBx && aBx.qo(rP) && (rF = 0, aBy = null)
	}
}

function aB4() {
	function aC8(aCB) {
		bl.x.aBF && 1 === bl.x.qa[2] && s.aCC(29).aCD(), bl.x.aBF = 0, s.aCC(29).aCE(), 0 !== bl.x.qc[bl.x.qa[0]].sd && !aCB || s.aCC(29).aCF(), bl.sq.aBz()
	}
	this.qc = new Array(4), this.qa = [0, 0, 1, 0], this.aBF = 0, this.aC5 = [0, 0], this.dU = function() {
		for (var aA = 0; aA < this.qc.length; aA++) this.qc[aA] = new aC6;
		this.qa[0] = bh.kn.data[158].value
	}, this.aC7 = function() {
		aC8(!0)
	}, this.aC9 = function() {
		for (var aA = 0; aA < bl.x.qc.length; aA++) {
			var qb = bl.x.qc[aA];
			0 === qb.sd ? qb.aCG = 0 : (qb.aCH = Math.max(qb.aCH - qb.aCG % 2, 0), qb.aCG++)
		}
		aC8(!1)
	}, this.aCI = function(qZ) {
		this.qa[0] !== qZ || this.qa[2] || s.aCC(29).aCJ()
	}
}

function aB8() {
	var aCK = 0,
		aCL = "",
		aCM = 0,
		aCN = 0,
		aCO = 0;

	function aCQ(a5Z) {
		ay.aCb.aCc(3, a5Z)
	}

	function aCZ(g1) {
		aCK = 1, bl.message.aCd({
			id: 6,
			value: g1
		})
	}

	function aCT(p) {
		var aCg = new RegExp("\\B@[-\\w\\[\\]]+", "g");
		return p.match(aCg)
	}
	this.yr = function(p) {
		var aCP, g, aCV;
		if (aCK) return aCK = 0, "yes" === (aCP = p.toLowerCase()) || "y" === aCP ? void aCQ(aCL) : void bl.message.aCd({
			id: 5,
			aBl: 7
		});
		!(p.indexOf("@") < 0) && (aCP = aCT(p)) ? (aCL = p, g = function(aCS) {
			for (var eY = aCS.length, aCe = [0, 0, 0, 0], aA = 0; aA < eY; aA++)
				for (var i = aCS[aA], er = 0; er < 4; er++) i === "@room" + (er + 1) && (aCe[er] = 1);
			if ((aCN = b8.pg.a1I(aCe)) % 4 == 0) return b8.pg.a1a(bl.ss.st);
			for (er = 0; er < 4; er++) aCe[er] = aCe[er] ? bl.ss.st[er] : [];
			return b8.pg.a1a(aCe)
		}(aCP), function(aCS, aCV, p) {
			if (!aCM) return;
			for (var eY = aCV.length, aA = 0; aA < eY; aA++) 2 === aCV[aA].id && (p = p.replace(aCS[aCV[aA].dx], "@" + aCV[aA].f0));
			return aCK = 1, aCQ((aCL = p).slice(0, 126) + "|"), 1
		}(aCP, aCV = function(aCS) {
			for (var aCV = [], eY = (aCO = aCM = 0, aCS.length), aA = 0; aA < eY; aA++) {
				var i = aCS[aA],
					kW = i.length;
				b8.zO.startsWith(i, "@[") ? kW <= 9 && b8.zO.a29(i, "]") && aCV.push({
					id: 0,
					f0: i.substring(2, kW - 1).toUpperCase()
				}) : 6 === kW ? b8.zO.startsWith(i, "@room") || (aCO++, aCV.push({
					id: 1,
					f0: bE.rp.vA(i.substring(1))
				})) : 1 < kW && kW < 5 && 0 <= (kW = b5.data.aAb(i.substring(1))) && (aCV.push({
					id: 2,
					f0: kW,
					dx: aA
				}), aCM = 1)
			}
			return aCV
		}(aCP), p) || (0 === aCV.length ? aCN || function(aCS) {
			for (var eY = aCS.length, aA = 0; aA < eY; aA++) {
				var i = aCS[aA];
				if ("@all" === i || "@everyone" === i) return 1
			}
			return
		}(aCP) ? aCZ(g.length) : aCQ(p) : aCP.length === aCO ? aCQ(p) : (function(g, aCV) {
			var kW = aCV.length;
			if (0 === kW) return;
			var eY = g.length;
			loop: for (var aA = eY - 1; 0 <= aA; aA--) {
				for (var er = 0; er < kW; er++)
					if (0 === aCV[er].id) {
						if (aCV[er].f0 === b8.zO.zT(g[aA].username)) continue loop
					} else if (1 === aCV[er].id && aCV[er].f0 === g[aA].rk) continue loop;
				g[aA] = g[--eY], g.pop()
			}
		}(g, aCV), aCZ(g.length)))) : aCQ(p)
	}, this.aCh = function(p) {
		var aCS = aCT(p);
		if (aCS)
			for (var a4 = new RegExp("^[0-9]+$"), eY = aCS.length, aA = 0; aA < eY; aA++) {
				var i = aCS[aA].substring(1),
					kW = i.length;
				1 <= kW && kW <= 3 && a4.test(i) && (kW = parseInt(i, 10), !isNaN(kW)) && 0 <= kW && kW < b5.data.g.length && (p = p.replace("@" + i, "@" + b5.data.g[kW]))
			}
		return p
	}
}

function aB7() {
	var aCi, aCj = [],
		aCk = -1,
		aCl = 0,
		aCm = 0;

	function aCq() {
		aCl = bd.e7, (3 === this.t5 ? (aCm = 1, aCp) : (aCk = (aCj.length + aCk + 2 * this.t5 - 1) % aCj.length, aCo))()
	}

	function aCo() {
		0 !== aCj.length && (aCm = 0, aCi && aCi.t8(), (aCi = new t2(aCq)).r0(aCk, aCj.length), aCi.show(aCj[aCk]), bl.message.resize())
	}

	function aCp() {
		aCi && aCi.t8(), (aCi = new t9(aCo)).r0(aCj.length), aCi.show(), bl.message.resize()
	}
	this.aCd = function(aBj) {
		var es, aBj = bl.qh.qi(aBj, bl.qh.qj(aBj));
		5 === aBj.id || 6 === aBj.id ? s.aCC(29).aCn().ql(aBj) : (es = bd.e7 < aCl + 2e4, aCk !== aCj.length - 1 && es || (aCk = aCj.length), aCj.push(aBj), bn.play(), aCi && (aCm && es ? aCi.r0(aCj.length) : aCo()))
	}, this.show = function() {
		aCp()
	}, this.qo = function() {
		aCk = aCj.length - 1, aCi && aCi.t8(), aCi = null
	}, this.resize = function() {
		aCi && aCi.resize()
	}
}

function aB5() {
	var aCr = null,
		aCs = null,
		aCt = 0,
		aCu = 0,
		aCv = null;

	function aCx() {
		0 !== aCs.sz && (bl.tE.qo(), s.t(8, 29, new rn(25, {
			ro: 0,
			rk: bD.rp.y5(aCs.rk, 5),
			rl: 0
		}, 29)))
	}

	function aCy() {
		var ef = aCr.ef,
			eh = aCr.eh;
		bl.tE.qo(), aCr = new tA([new v("Kick User", function() {
			aD4(0, 0)
		}, aD9(0, 0)), new v("Block Chat", aD5, aDA(1)), new v("Censor Username", aD6, aDA(2)), new v("Elo Deduction", aD7, aDA(3)), new v("Gold Seizure", aD8, aDA(4))]), aD3(ef, eh), aCt = 2, aCu = 1
	}

	function aDA(id) {
		return !bl.aAy || bl.qh.t0(aCs) ? 1 : 4 === id && 9 === bl.aAy.sz && bl.aAy.zf < aCs.zf ? 0 : bl.aAy.aBC >= aCs.zf || 0 === id && aCs.zf < 200 ? 1 : 1 - bm.dv(id, bl.aAy.aBC, 0)
	}

	function aD1() {
		return !bl.aAy || bl.qh.t0(aCs) ? 1 : 0
	}

	function aD9(id, dx) {
		var zf;
		return !bl.aAy || bl.qh.t0(aCs) || (zf = bl.aAy.aBC, (zf = 4 === id && 9 === bl.aAy.sz ? Math.min(bl.aAy.zf, zf) : zf) >= aCs.zf) ? 1 : 1 - bm.dv(id, zf, dx)
	}

	function aD0() {
		var ef = aCr.ef,
			eh = aCr.eh,
			aDB = (bl.tE.qo(), aD1());
		aCr = new tA([new v(bm.du[5][0], function() {
			aD4(5, 0)
		}, aDB), new v(bm.du[5][1], function() {
			aD4(5, 1)
		}, aDB), new v(bm.du[5][2], function() {
			aD4(5, 2)
		}, aDB), new v(bm.du[5][3], function() {
			aD4(5, 3)
		}, aDB)]), aD3(ef, eh), aCu = aCt = 2
	}

	function aD2() {
		29 === s.rm && s.aDC().aAz(bD.rp.y5(aCs.rk, 5))
	}

	function aD4(id, value) {
		ay.aCb.aCc(5, {
			id: id,
			value: value,
			rk: aCs.rk
		})
	}

	function aD5() {
		var ef = aCr.ef,
			eh = aCr.eh;
		bl.tE.qo(), aCr = new tA([new v(bm.du[1][0], function() {
			aD4(1, 0)
		}, aD9(1, 0)), new v(bm.du[1][1], function() {
			aD4(1, 1)
		}, aD9(1, 1)), new v(bm.du[1][2], function() {
			aD4(1, 2)
		}, aD9(1, 2)), new v(bm.du[1][3], function() {
			aD4(1, 3)
		}, aD9(1, 3)), new v(bm.du[1][4], function() {
			aD4(1, 4)
		}, aD9(1, 4))]), aD3(ef, eh), aCt = 3, aCu = 1
	}

	function aD6() {
		var ef = aCr.ef,
			eh = aCr.eh;
		bl.tE.qo(), aCr = new tA([new v(bm.du[2][0], function() {
			aD4(2, 0)
		}, aD9(2, 0)), new v(bm.du[2][1], function() {
			aD4(2, 1)
		}, aD9(2, 1)), new v(bm.du[2][2], function() {
			aD4(2, 2)
		}, aD9(2, 2))]), aD3(ef, eh), aCt = 3, aCu = 2
	}

	function aD7() {
		var ef = aCr.ef,
			eh = aCr.eh;
		bl.tE.qo(), aCr = new tA([new v(bm.du[3][0], function() {
			aD4(3, 0)
		}, aD9(3, 0)), new v(bm.du[3][1], function() {
			aD4(3, 1)
		}, aD9(3, 1)), new v(bm.du[3][2], function() {
			aD4(3, 2)
		}, aD9(3, 2))]), aD3(ef, eh), aCu = aCt = 3
	}

	function aD8() {
		var ef = aCr.ef,
			eh = aCr.eh;
		bl.tE.qo(), aCr = new tA([new v(bm.du[4][0], function() {
			aD4(4, 0)
		}, aD9(4, 0)), new v(bm.du[4][1], function() {
			aD4(4, 1)
		}, aD9(4, 1)), new v(bm.du[4][2], function() {
			aD4(4, 2)
		}, aD9(4, 2)), new v(bm.du[4][3], function() {
			aD4(4, 3)
		}, aD9(4, 3)), new v(bm.du[4][4], function() {
			aD4(4, 4)
		}, aD9(4, 4))]), aD3(ef, eh), aCt = 3, aCu = 4
	}

	function aD3(ef, eh, tG) {
		aCr.show(ef, eh, tG), bl.sq.show(aCr.ef, aCr.eh, aCs, 1)
	}
	this.aCw = function(e, pP) {
		aCt = 1, aCs = pP, aCr = new tA([new v(L(125), aCx, 0 === aCs.sz ? 1 : 0), new v(L(126), aCy, function() {
			if (!bl.aAy) return 1;
			if (bl.qh.t0(aCs)) return 1;
			if (!(9 === bl.aAy.sz && bl.aAy.zf < aCs.zf)) {
				if (100 <= bl.aAy.aBC) return 1;
				if (bl.aAy.aBC >= aCs.zf) return 1
			}
			return 0
		}()), new v(L(127, 0, "Report"), aD0, aD1()), new v(L(128), aD2, 0)]), aD3((aCv = {
			clientX: e.clientX,
			clientY: e.clientY
		}).clientX, aCv.clientY, 1)
	}, this.a0r = function(code) {
		if (29 !== s.rm) return !1;
		if (!aCs) return !1;
		if (!(code.length < 1))
			if ("Escape" === code) this.qo();
			else if (b8.zO.startsWith(code, "Numpad") || b8.zO.startsWith(code, "Digit")) {
			code = parseInt(code[code.length - 1], 10);
			if (!isNaN(code))
				if (0 === aCt) this.aCw(aCv, aCs);
				else {
					if (!aCr) return !1;
					1 === aCt ? code <= 1 ? aCx() : 2 === code ? aCy() : 3 === code ? aD0() : (aD2(), this.qo()) : 2 === aCt ? 1 === aCu ? code <= 1 ? (aD4(0, 0), this.qo()) : (2 === code ? aD5 : 3 === code ? aD6 : 4 === code ? aD7 : aD8)() : (
						aD4(5, bJ.p5(code - 1, 0, 3)), this.qo()) : (aD4(aCu, bJ.p5(code - 1, 0, bm.du[aCu].length - 1)), this.qo())
				}
		}
		return !0
	}, this.qo = function() {
		aCt = 0, aCr && aCr.qo(), aCr = null, bl.sq.qo()
	}
}

function aC6() {
	this.sd = 0, this.eE = 0, this.mapSeed = 0, this.aBW = 0, this.aDD = 0, this.aDE = 0, this.aBc = 0, this.aCH = 0, this.spawningSeed = 0, this.a03 = 0, this.aBa = 0, this.qd = [], this.qe = 1048575, this.aCG = 0, this.aDF = [{
		eE: 0,
		mapSeed: 0,
		aBW: 0,
		e7: 100,
		aBc: 0
	}, {
		eE: 1,
		mapSeed: 0,
		aBW: 1,
		e7: 200,
		aBc: 0
	}, {
		eE: 2,
		mapSeed: 0,
		aBW: 2,
		e7: 300,
		aBc: 0
	}, {
		eE: 3,
		mapSeed: 0,
		aBW: 3,
		e7: 400,
		aBc: 0
	}, {
		eE: 0,
		mapSeed: 0,
		aBW: 9,
		e7: 500,
		aBc: 0
	}, {
		eE: 1,
		mapSeed: 0,
		aBW: 10,
		e7: 600,
		aBc: 0
	}, {
		eE: 2,
		mapSeed: 0,
		aBW: 8,
		e7: 700,
		aBc: 0
	}, {
		eE: 3,
		mapSeed: 0,
		aBW: 3,
		e7: 800,
		aBc: 0
	}]
}

function aB9() {
	var aDG = [],
		rz = [];

	function aDM(pE, pP) {
		var aDN = function(pE) {
				var rk = bE.rp.vA(pE),
					aDN = bl.ss.aBU(rk);
				if (aDN) {
					for (aDG.push(aDN); 50 < aDG.length;) aDG.shift();
					return aDN
				}
				for (var aA = aDG.length - 1; 0 <= aA; aA--)
					if (rk === aDG[aA].rk) return aDN = aDG[aA], aA < 40 && aDG.push(aDN), aDN;
				return bl.ss.aBE(rk, pE, 1, 999999, 999999, 0, 0, 0, 0)
			}(pE),
			pE = (pP && 0 === pP.id && pP.qm && (pP.fontSize = bl.qh.aBp(aDN.sz, aDN.zf), pP.aBm = bl.qh.aBq(aDN.zf)), document.createElement("span"));
		return pE.textContent = aDN.username, pE.style.display = "inline-block", pE.style.color = bl.qh.sy(aDN.sz), pE.style.cursor = "pointer", pE.style.margin = "0", pE.style.font = "inherit", pE.style.minWidth = pE.style.minHeight = "1em", bl.qh
			.t0(aDN) && (pE.style.textDecoration = "underline"), bl.qh.aBq(aDN.zf) && (pE.style.fontWeight = "bold"), pE.onclick = function(e) {
				bl.tE.aCw(e, aDN)
			}, bH.q0() || (pE.onmouseover = function(e) {
				bl.sq.t1(e, aDN)
			}), rz.push(pE), pE
	}

	function aDL(p, pP) {
		var qW = document.createElement("span");
		return qW.textContent = p, qW.style.color = pP.aBn, qW.style.margin = "0", qW.style.font = "inherit", qW
	}
	this.t8 = function() {
		for (var aA = 0; aA < rz.length; aA++) rz[aA].onclick = rz[aA].onmouseover = null;
		rz[aA] = null
	}, this.transform = function(pP) {
		for (var pC = document.createElement("div"), aDH = function(pP) {
				var p = pP.p,
					aDH = [];
				for (;;) {
					var et = function aDK(p, position) {
						position = p.indexOf("@", position);
						if (position < 0) return -1;
						var pE = p.substring(position + 1, position + 6);
						if (5 !== pE.length) return aDK(p, position + 1);
						if (b8.zO.startsWith(pE, "room")) return aDK(p, position + 1);
						var aDP = new RegExp("^[a-zA-Z0-9_-]+$");
						if (!aDP.test(pE)) return aDK(p, position + 1);
						aDP = p.substring(position + 6, position + 7);
						if (1 !== aDP.length) return position;
						pE = new RegExp("^[ :!.]+$");
						if (!pE.test(aDP)) return aDK(p, position + 1);
						return position
					}(p, 0);
					if (-1 === et) {
						aDH.push(aDL(p, pP));
						break
					}
					0 === et ? aDH.push(aDM(p.substring(1, 6), pP)) : (aDH.push(aDL(p.substring(0, et), pP)), aDH.push(aDM(p.substring(et + 1, et + 6)))), p = p.substring(et + 6)
				}
				return aDH
			}(pP), aA = 0; aA < aDH.length; aA++) pC.appendChild(aDH[aA]);
		pC.style.margin = "0.6em 0.6em", pP.qm && (pC.style.marginLeft = pC.style.marginRight = "inherit"), pC.style.font = "inherit";
		var aDJ = 0 < pP.id;
		return pP.aBm && (pC.style.fontWeight = "bold"), aDJ && (pC.style.paddingLeft = "0.7em"), aDJ && (pC.style.fontStyle = "italic"), pC.style.fontSize = pP.fontSize.toFixed(2) + "em", pC
	}
}

function cK() {
	var aDS, aDT, aDU;

	function aDZ(aA) {
		var button = aX.q7[aA],
			ef = button.ef,
			eh = button.eh,
			i = button.i,
			j = button.j;
		tf.fillStyle = button.aDX, tf.fillRect(ef, eh, i, j), aA === aDS && (tf.fillStyle = aDU, tf.fillRect(ef, eh, i, j)), tf.lineWidth = ba.xo, tf.strokeStyle = aDT, tf.strokeRect(ef, eh, i, j),
			function(button) {
				var ef = button.ef,
					eh = button.eh,
					i = button.i,
					j = button.j;
				b8.pX.textAlign(tf, 1), b8.pX.textBaseline(tf, 1), tf.font = button.font, tf.fillStyle = aDT, tf.fillText(button.a5Z, Math.floor(ef + i / 2), Math.floor(eh + j / 2 + .1 * button.fontSize))
			}(button)
	}
	this.i = 0, this.j = 0, this.eh = 0, this.gap = 0, this.dU = function() {
		aDS = -1, aDT = b9.mf, aDU = "rgba(255,255,255,0.16)", this.q7 = new Array(7), this.j = Math.floor((z.a0.qv() ? .123 : .093) * h.pZ), this.i = Math.floor((z.a0.qv() ? 3.96 : 4.2) * this.j), this.gap = Math.floor(.025 * this.i);
		var aDV = Math.floor(.26 * this.j),
			aDW = b8.pX.rM(1, aDV);
		this.q7[0] = {
			ef: 0,
			eh: 0,
			i: Math.floor(.6 * this.i - this.gap / 2),
			j: this.j,
			a5Z: "Multiplayer",
			font: aDW,
			aDX: "rgba(22,88,22,0.8)",
			fontSize: aDV
		}, aDV = Math.floor(.18 * this.j), aDW = b8.pX.rM(1, aDV), this.q7[1] = {
			ef: 0,
			eh: 0,
			i: this.i - this.q7[0].i - this.gap,
			j: this.j,
			a5Z: "Single Player",
			font: aDW,
			aDX: "rgba(22,88,88,0.8)",
			fontSize: aDV
		}, this.q7[2] = {
			ef: 0,
			eh: 0,
			i: this.i,
			j: Math.floor(.3 * this.j),
			a5Z: "",
			font: this.q7[1].font,
			aDX: "rgba(100,0,0,0.8)",
			fontSize: this.q7[1].fontSize
		}, this.q7[3] = {
			ef: 0,
			eh: 0,
			i: this.i,
			j: this.j,
			a5Z: "Back",
			font: this.q7[0].font,
			aDX: "rgba(0,0,0,0.8)",
			fontSize: this.q7[0].fontSize
		}, this.q7[4] = {
			ef: 0,
			eh: 0,
			i: this.i,
			j: Math.floor(.3 * this.j),
			a5Z: "The game was updated!",
			font: this.q7[1].font,
			aDX: "rgba(100,0,0,0.8)",
			fontSize: this.q7[1].fontSize
		}, this.q7[5] = {
			ef: 0,
			eh: 0,
			i: this.q7[0].i,
			j: Math.floor(.8 * this.j),
			a5Z: "Reload",
			font: this.q7[0].font,
			aDX: "rgba(0,100,0,0.8)",
			fontSize: this.q7[0].fontSize
		}, this.q7[6] = {
			ef: 0,
			eh: 0,
			i: this.q7[1].i,
			j: this.q7[5].j,
			a5Z: "Back",
			font: this.q7[0].font,
			aDX: "rgba(0,0,0,0.8)",
			fontSize: this.q7[0].fontSize
		}, this.a7w()
	}, this.a7w = function() {
		this.eh = Math.floor(.54 * h.j), this.q7[0].ef = Math.floor(.5 * h.i - .5 * this.i), this.q7[1].ef = this.q7[0].ef + this.q7[0].i + this.gap, this.q7[2].ef = this.q7[3].ef = this.q7[0].ef, this.q7[4].ef = this.q7[5].ef = this.q7[0].ef,
			this.q7[6].ef = this.q7[1].ef, this.q7[0].eh = Math.floor(.54 * h.j), this.q7[1].eh = this.q7[0].eh, this.q7[2].eh = Math.floor((h.j - this.q7[2].j - this.q7[3].j - this.gap) / 2), this.q7[3].eh = this.q7[2].eh + this.q7[2].j + this
			.gap, this.q7[4].eh = Math.floor((h.j - this.q7[4].j - this.q7[5].j - this.gap) / 2), this.q7[5].eh = this.q7[6].eh = this.q7[4].eh + this.q7[4].j + this.gap
	}, this.aDY = function() {
		aDZ(0), aDZ(1)
	}, this.aDa = function() {
		aDZ(2), aDZ(3)
	}, this.aDb = function() {
		aDZ(4), aDZ(5), aDZ(6)
	}, this.a0J = function(ef, eh, lP) {
		var aA = -1;
		return 0 === aZ.zx() ? aA = this.a0n(ef, eh, 0, 2) : 3 === aZ.zx() ? aA = this.a0n(ef, eh, 3, 1) : 5 === aZ.zx() && (aA = this.a0n(ef, eh, 5, 2)), aDS !== aA && (aDS = aA, lP) && (bd.dc = !0), -1 !== aA && (aS.qX(), !0)
	}, this.a0n = function(ef, eh, aDc, size) {
		for (var aA = aDc; aA < aDc + size; aA++)
			if (ef >= this.q7[aA].ef && eh >= this.q7[aA].eh && ef <= this.q7[aA].ef + this.q7[aA].i && eh <= this.q7[aA].eh + this.q7[aA].j) return aA;
		return -1
	}
}

function cL() {
	var aDe, aDf, a5j, a5t, a6k, aDg, aDh, aDi, aDj, a4M, fontSize, lq, aDk, aDm, aDl = 0;

	function aDp() {
		return ay.x.aDq[(aDk + aDl) % ay.x.aDr]
	}

	function aDu() {
		__fx.customLobby.isActive() ? (q.a08(3249), __fx.customLobby.setActive(false)) : q.a08(3249)
	}

	function aE0(eh, a7d, sd) {
		var m5 = Math.floor((h.i - a5t) / 2) + aDh,
			mI = m5 + Math.floor(sd * (a5t - 2 * aDh));
		tf.lineWidth = a7d, tf.beginPath(), tf.moveTo(m5, eh), tf.lineTo(mI, eh), tf.lineTo(Math.floor(m5 - aDh + sd * a5t), eh + a5j), tf.lineTo(m5 - aDh, eh + a5j), tf.closePath()
	}
	this.dU = function() {
		aZ.setState(6), aDe = 0, aDf = 1, aDi = "rgba(0,220,120,0.4)", aDj = "rgba(0,0,0,0.8)", this.resize(), bd.dc = !0, aDk = 0, aDm = !1, aDk++, lq = bd.e7, ay.x.aDs(aDp(), 4) && (aDm = !0, ay.aCb.aDt(aDp()))
	}, this.resize = function() {
		a5t = Math.floor((z.a0.qv() ? .5 : .25) * h.pZ), a6k = a5t + 12, a5j = Math.floor(.125 * a5t), aDh = 3 * a5j, aDg = Math.floor(.225 * a5t), fontSize = Math.floor(.3 * a5j), a4M = b8.pX.rM(0, fontSize)
	}, this.aDo = function(er) {
		aDl = er
	}, this.a00 = function(zu) {
		zu === aDp() && (aDm = !1, aDu())
	}, this.aDv = function(zu) {
		6 !== aZ.zx() || aDm || (lq = bd.e7, aDm = !0)
	}, this.gm = function(ef, eh) {
		var m5 = Math.floor((h.i - a6k) / 2),
			m6 = Math.floor(.5 * (h.j - ba.gap - a5j - aDg)) + a5j + ba.gap;
		return m5 < ef && ef < m5 + a6k && m6 < eh && eh < m6 + aDg && (this.a0z(), aX.a0J(ef, eh, !1), !0)
	}, this.a0z = function() {
		ay.x.a09(3260), __fx.customLobby.setActive(false), s.x.y()
	}, this.ii = function() {
		6 === aZ.zx() && (aDm ? bd.e7 > lq + 12e3 && q.a08(3250) : bd.e7 > lq + 12e3 && aDu(), 100 < (aDe += .07 * aDf * (aDe < 16 ? 5 + aDe : 84 < aDe ? 105 - aDe : 17)) ? (aDe = 100, aDf = -1) : aDe < 0 && (aDe = 0, aDf = 1), aDi = "rgba(0," +
			Math.floor(190 - 1.9 * aDe) + "," + Math.floor(120 - 1.2 * aDe) + "," + (.4 + .004 * aDe) + ")", aDj = "rgba(0," + Math.floor(1.9 * aDe) + "," + Math.floor(1.2 * aDe) + "," + (.8 - .004 * aDe) + ")", bd.dc = !0)
	}, this.te = function() {
		var ef = Math.floor((h.i - a6k) / 2),
			eh = Math.floor(.5 * (h.j - ba.gap - a5j - aDg));
		! function(title, eh, a7d, sd) {
			tf.fillStyle = aDj, aE0(eh, a7d, 1), tf.fill(), tf.fillStyle = aDi, aE0(eh, a7d, sd), tf.fill(), tf.strokeStyle = b9.mf, aE0(eh, a7d, 1), tf.stroke(),
				function(aE2, eh) {
					b8.pX.textAlign(tf, 1), b8.pX.textBaseline(tf, 1), tf.font = a4M, tf.fillStyle = b9.mf, tf.fillText(aE2, Math.floor(.5 * h.i), Math.floor(eh + .58 * a5j))
				}(title, eh)
		}(L(129), eh, 3, aDe / 100),
		function(ef, eh, i, j, a5Z) {
			tf.fillStyle = b9.ma, tf.fillRect(ef, eh, i, j), tf.lineWidth = 3, tf.strokeStyle = b9.mf, tf.strokeRect(ef, eh, i, j);
			var eY = Math.floor(.3 * j);
			b8.pX.textAlign(tf, 1), b8.pX.textBaseline(tf, 1), tf.font = b8.pX.rM(0, eY), tf.fillStyle = b9.mf, tf.fillText(a5Z, Math.floor(ef + i / 2), Math.floor(eh + j / 2 + .1 * eY))
		}(ef, eh + a5j + ba.gap, a6k, aDg, L(32))
	}
}

function cM() {
	var zq = 0;
	this.dU = function() {
		aX.dU(), zq = 0
	}, this.setState = function(aE3) {
		zq = aE3
	}, this.zx = function() {
		return zq
	}, this.aE4 = function() {
		this.setState(8), s.w()
	}, this.a0r = function(e) {
		if (!bQ.vQ) return !1;
		if (!(bd.e7 < 400)) {
			if ("Enter" === e.key || "Escape" === e.key) {
				if (this.aE5()) return !0;
				if ("Enter" === e.key) {
					if (0 === zq) return !0;
					if (7 === zq) return !0
				}
			}
			return !1
		}
	}, this.aE6 = function() {
		bX.resize()
	}, this.aE5 = function() {
		return !!bX.qo()
	}, this.gm = function(ef, eh) {
		!bQ.vQ || bX.gm(ef, eh) || 6 === zq && aY.gm(ef, eh) || bW.gm(ef, eh) || aS.gm(ef, eh)
	}, this.a0J = function(ef, eh) {
		!aS.a7p && aX.a0J(ef, eh, !0) || aS.a0J(ef, eh)
	}, this.click = function(ef, eh) {
		aS.a0i()
	}, this.a0M = function(ef, eh, deltaY) {}, this.aE7 = function() {
		aX.a7w(), bd.dc = !0
	}, this.te = function() {
		8 !== zq && 10 !== zq && (tf.imageSmoothingEnabled = !0, this.wy(), 0 !== zq && (aS.te(), aN.te(), this.aE8(), bW.te()), 0 !== zq && 6 === zq && aY.te(), bX.te(), s.te())
	}, this.wy = function() {
		var aEA, aE9;
		if (__fx.makeMainMenuTransparent) tf.clearRect(0, 0, h.i, h.j);
		else bQ.vQ ? (aE9 = h.i / bQ.ej, aEA = h.j / bQ.ek, tf.setTransform(aE9 = aEA < aE9 ? aE9 : aEA, 0, 0, aE9, Math.floor((h.i - aE9 * bQ.ej) / 2), Math.floor((h.j - aE9 * bQ.ek) / 2)), tf.drawImage(bQ.vS, 0, 0), tf.setTransform(1, 0, 0, 1,
			0, 0), tf.fillStyle = b9.ma) : tf.fillStyle = b9.mW, tf.fillRect(0, 0, h.i, h.j)
	}, this.aE8 = function() {
		var eh = Math.floor(.3 * h.j),
			canvas = aa.aEB("territorial.io"),
			hV = (hV = 1.75 * h.j / canvas.width) * canvas.width < .98 * h.i ? .98 * h.i / canvas.width : hV,
			ef = (tf.globalAlpha = .15, tf.imageSmoothingEnabled = !1, Math.floor(.5 * (h.i - hV * canvas.width))),
			ef = Math.floor(ef / hV),
			eh = Math.floor(eh - .5 * canvas.height * hV),
			eh = Math.floor(eh / hV);
		tf.setTransform(hV, 0, 0, hV, ef, eh), tf.drawImage(canvas, ef, eh), tf.setTransform(1, 0, 0, 1, 0, 0), tf.globalAlpha = 1, tf.imageSmoothingEnabled = !0
	}
}

function cl() {
	this.aBa = 0;
	var aED, aEE, aEF, aEG, aEH, aEI = this.aEC = 0;

	function aEM() {
		aEG = aEH = null, aEI = 0
	}
	this.dU = function(qb, aBX, aBY) {
		s.w(), bl.t8(), aZ.setState(10), aEG = qb, aEH = aBX, aEI = aBY, this.aBa = qb.aBa, this.aEC = aBY, aED = 0, aEE = bd.e7 + 4500, ay.x.a02 > ay.x.aEJ && (qb.a03 += ay.x.aEJ), ay.x.a03 = qb.a03, ay.x.a02 === qb.a03 ? (console.log(
			"direct pass"), aEF = 0) : (console.log("delayed pass"), ay.x.close(ay.x.a02, 3247), aEF = 2, ay.x.aDs(qb.a03, 5) && ay.nw.aEK()), tf.imageSmoothingEnabled = !0, aZ.wy();
		aBX = aa.aEB("loading"), aBY = (z.a0.qv() ? .396 : .25) * h.pZ / aBX.width;
		tf.setTransform(aBY, 0, 0, aBY, Math.floor((h.i - aBY * aBX.width) / 2), Math.floor((h.j - aBY * aBX.height) / 2)), tf.imageSmoothingEnabled = !1, tf.drawImage(aBX, 0, 0), tf.setTransform(1, 0, 0, 1, 0, 0)
	}, this.lN = function() {
		0 < aEF && bd.e7 > aEE && (aEF--, aEE += 4500, 0 === bd.aEO) && 0 === bd.jl() && (0 === aEF && ay.x.a03 < ay.x.aEP && (ay.x.a03 += ay.x.aEJ), ay.x.aDs(ay.x.a03, 5))
	}, this.aEQ = function() {
		return 10 === aZ.zx() && (bl.aB0.aBb(aEG, aEH, aEI), aEM(), !0)
	}, this.aER = function() {
		10 === aZ.zx() && 2 <= ++aED && (bl.aB0.aBb(aEG, aEH, aEI), aEM())
	}
}

function cN() {
	var aET, canvas, z9, aEU;

	function aEa(dx, name, aEb, pE) {
		z9[dx] = name, canvas[dx] = new Image, canvas[dx].onload = function() {
			! function(dx, aEb) {
				var a2e, a2f = null;
				7 === aEb ? a2e = b8.a15.a2h : 8 === aEb ? (a2e = b8.a15.a2k, a2f = .1) : 3 === aEb ? (a2e = b8.a15.a2i, a2f = .06) : 5 === aEb ? a2e = b8.a15.a2l : 6 === aEb ? a2e = b8.a15.a2g : 4 === aEb && (a2e = b8.a15.a2m);
				canvas[dx] = b8.a15.a2d(canvas[dx], a2e, a2f)
			}(dx, aEb), aEd()
		}, canvas[dx].onerror = function(e) {
			console.error("Error loading image at index", dx, "Error:", e), aEd()
		}, canvas[dx].src = "data:image/png;base64," + pE
	}

	function aEd() {
		aET--, aEX()
	}

	function aEX() {
		0 === aET && (aET = -1, aEZ(), bd.dc = !0, canvas[7] = aEU, canvas[8] = aEU, canvas[9] = aEU, canvas[10] = aEU, 5 === s.rm) && s.aDC().aEf.resize()
	}

	function aEZ() {
		aK.a3q(), bW.aAr([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== z.id, 1 !== z.id, !0, !0, !0]), ai.vV = new xL, ai.vV.dU(), au.dV()
	}
	this.dU = function() {
		if (void 0 === canvas) {
			aET = 23, canvas = new Array(aET), z9 = new Array(aET), (aEU = document.createElement("canvas")).width = 1;
			for (var aA = aET - (aEU.height = 1); 0 <= aA; aA--) canvas[aA] = aEU;
			aEZ(), aEa(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aEa(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aEa(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aEa(3, "orders", 6,
					"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"
					), aEa(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), aEa(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aEa(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9ydG5c+fsBAAAAAAAAAAAFjDcAwAAAAAAAAAAxJlnnhlff/11dgbEa6+9FldddVV2BgD1wKqrrpqdwEI+/fTT7AQAAIBlst9++2UnFL0LLrjAaM8PqKqqij322CNGjx6dnVK0dthhh+wEYDmZO3du3H///fGTn/wkNt988/jtb38bs2bNSuuZN29eXHHFFbH11ltHjx494rbbbouZM2em9bB8dOzYMTsBAAAAAAAAAIAFGmQHAAAAAAAAAAAA+caMGRP333+/gwlJNX/+/Dj77LOzMwCoJwz31C2GewAAgPqsXbt2scUWW2RnFLUbbrghBg0alJ1Rp82bNy/23HPPeO655xz2n6Br166x/vrrx5tvvpmdAtSQb775Jh588MEYNmxYjB8/Pjvne73++utx8MEHR7t27eKcc86JvffeO5o0aZKdRQ1o165ddgLV8Jvf/Cbuuuuu7Iwl9uijj0bjxo2zM4rO1ltvnZ1Qaz755JPsBAAAAAAAAIAaZbgHAAAAAAAAAACIiIihQ4fGLrvsEs2bN89OoUg9+eST8cADD2RnAFBPrLzyytkJLOTjjz/OTgAAAFhqRx99dDRq1Cg7o2g98sgjcdRRR2Vn1AuTJk2KQw45JB555JEoLy/PzikqZWVlcfjhh8eAAQOyU4Aa8OKLL8bAgQPj2WefzU6plokTJ8ahhx4al156afz2t7+Nn/3sZ9lJLKPVVlstO4FqmDBhQkyYMCE7Y4lVVVVlJxSl+vKYAgAAAAAAAMD/Ks0OAAAAAAAAAAAA6oZ333037rjjjuwMitTXX38dQ4YMyc4AoB5ZaaWVshNYyAcffJCdAAAAsNR22WWX7ISiNX78+Nh3332zM+qVF198MQYMGBDz58/PTik62223XXYCsIw+//zzOP300+MnP/lJvRxYeO2116JXr15x/PHHx+eff56dwzJo2bJllJWVZWcAAAAAAAAAABCGewAAAAAAAAAAgIUMGTIkpk2blp1BEbrnnnvilVdeyc4AoB5ZccUVsxNYyLvvvpudAAAAsFS6desW3bp1y84oSp9//nn06dMnZs2alZ1S71x77bUxcuTI7Iyi07Vr1+jUqVN2BrCUXn755fjJT34SF154YXbKMrvyyivjpz/9qedX67GysrLYYostsjMAAAAAAAAAAAjDPQAAAAAAAAAAwEKmTJkSf/jDH7IzKDJffPFFnH766dkZANQz5eXl2Qks5B//+Ed2AgAAwFI59NBDo6SkJDuj6MyfPz9OP/30eOONN7JT6q2+ffvG+++/n51RVMrKyuLggw/OzgCWUFVVVVx11VWx+eabx5tvvpmdU2PGjx8fW2yxRdx2223ZKSylzp07ZycAAAAAAAAAABCGewAAAAAAAABYDtZcc82oqqry4aPGPvbee+/s/62hqJxxxhnxySefZGdQRH7/+9/HxIkTszMAqGeaN2+encACc+bMialTp2ZnAAAALJVtt902O6Eo3XnnnXH99ddnZ9Rrs2bNipNOOikqKyuzU4pK7969sxOAJTBr1qw4/vjj47jjjstOWS6qqqri4IMPjnPOOcfjQT209tprZycAAAAAAAAAABCGewAAAAAAAAAAgO+YM2dOXHPNNdkZFImPP/44hgwZkp0BQD1kuKfumD59enYCAADAUunWrVtssMEG2RlF54MPPoijjjoqO6MgPPTQQ3HvvfdmZxSV7t27R3l5eXYGUA3Tpk2L/fffP66++urslOVu6NChMWDAgPjmm2+yU1gC7du3z04AAAAAAAAAACAM9wAAAAAAAAAAAN/jvPPOi/feey87gyJw6aWXxpw5c7IzAKhnWrRoEY0aNcrOYIEZM2ZkJwAAACyVQw89NEpKSrIzikplZWWceuqpMWvWrOyUgtG/f/+YMmVKdkbRaNy4cRxwwAHZGcBifPrpp7HHHnvEww8/nJ1Sa37729/G4MGDo7KyMjuFamrVqlV2AgAAAAAAAAAAYbgHAAAAAAAAAAD4HlVVVXHJJZdkZ1Dg/vnPf8bFF1+cnQFAPdShQ4fsBBYybdq07AQAAIClss0222QnFJ377rsv7rnnnuyMgjJ16tS46qqrsjOKSq9evbITgEWYPHly7LXXXvH8889np9S63/zmN3HeeedlZ1BNLVq0yE4AAAAAAAAAACAM9wAAAAAAAAAAAD/g6quvjjfeeCM7gwI2YsSI7AQA6qlVV101O4GFTJ8+PTsBAABgiXXo0CE22GCD7IyiMm3atDjppJOyMwrSiBEj4u23387OKBo9evTITgB+wPTp0+Oggw6KF198MTslzRlnnBG33XZbdgbVsMoqq2QnAAAAAAAAAAAQhnsAAAAAAAAAAIBFOP/887MTKFDPPPNM3HXXXdkZANRTK6+8cnYCC5k2bVp2AgAAwBI75JBDoqysLDujqFxxxRXxySefZGcUpKqqqvjtb3+bnVE01lprrejWrVt2BvAdX3/9dfTr1y+efPLJ7JR0hx56aIwePTo7g8WoqKjITgAAAAAAAAAAIAz3AAAAAAAAAAAAi3DHHXfEiy++mJ1Bgfnmm2/ijDPOyM4AoB5zmF3dMnXq1OwEAACAJbbNNttkJxSV9957L84+++zsjIJ23XXXxfjx47MzisY+++yTnQB8x9ChQ2PkyJHZGXVCVVVVHHroofHZZ59lp7AI5eXlUV5enp0BAAAAAAAAAFD0DPcAAAAAAAAAAACLdNZZZ0VVVVV2BgXkwQcfjOeeey47A4B6zEF2dcuMGTOyEwAAAJZI48aNo3v37tkZReXiiy/2XEMtuPrqq7MTisaWW26ZnQAs5K677orf/OY32Rl1yttvvx2nn356zJ8/PzuFRdhwww2zEwAAAAAAAAAAip7hHgAAAAAAAAAAYJEee+yxePLJJ7MzKBAzZ86MgQMHZmcAUM+ttNJK2QksZPr06dkJAAAAS+Sggw6Kpk2bZmcUjfHjx8fvfve77IyicPXVV8eECROyM4pC9+7do7TUW/WhLhg3blwccsgh2Rl10h/+8Id46KGHsjNYhLXXXjs7AQAAAAAAAACg6Hk1IAAAAAAAAAAAsFjDhg2LefPmZWdQAP74xz/Gu+++m50BQD234oorZiewkM8//zw7AQAAYIlsu+222QlF5fLLL89OKCq33XZbdkJRKC8vj7322is7A4re7Nmz4+ijj/Zc9iIce+yxMXXq1OwMfkDLli2zEwAAAAAAAAAAip7hHgAAAAAAAAAAYLFGjx4df/rTn7IzqOc+/fTTGDRoUHYGAAWgadOm2QksZNq0adkJAAAAS2SzzTbLTiga77zzTlx33XXZGUXlN7/5TcyYMSM7oyhsvfXW2QlQ9C655JJ48cUXszPqtIkTJ8YVV1yRncEPWHnllbMTAAAAAAAAAACKnuEeAAAAAAAAAACgWgYPHhyzZ8/OzqAeu/LKKx0WCECNaNiwYXYCC5k8eXJ2AgAAQLV179491lxzzeyMonHLLbdkJxSdGTNmxBNPPJGdURQ22mij7AQoaq+99loMHTo0O6NeGDFiRLz11lvZGXyPioqK7AQAAAAAAAAAgKJnuAcAAAAAAAAAAKiWt99+O0aOHJmdQT319ttvx3nnnZedAUCBWHHFFbMTWMjEiROzEwAAAKptzz33zE4oGlOnTo2LLrooO6Mo/f73v89OKAqdO3fOToCiNW/evDjllFOyM+qNqqqquOSSS7Iz+B4rr7xydgIAAAAAAAAAQNEz3AMAAAAAAAAAAFTboEGDYvr06dkZ1EMXXHBBVFVVZWcAUCAaNGiQncAC8+fPjw8//DA7AwAAoNo233zz7ISi8eCDD8acOXOyM4rSo48+Gu+88052RsGrqKiIXr16ZWdAUbrzzjvjqaeeys6oV6677roYP358dgbfUV5enp0AAAAAAAAAAFD0DPcAAAAAAAAAAADVNmnSpLj55puzM6hnXnrppbjxxhuzMwAoII0bN85OYIGvvvoqOwEAAGCJbLTRRtkJRaGqqiquvvrq7Iyi9vjjj2cnFIXevXtnJ0DRmT59egwcODA7o1668sorsxP4DsM9AAAAAAAAAAD5DPcAAAAAAAAAAABLZMiQIfHpp59mZ1BPVFZWxrBhw7IzACgwTZs2zU5ggXnz5mUnAAAAVNu2224bLVq0yM4oCmPHjo2xY8dmZxS1m2++OebPn5+dUfC6d++enQBF54YbbohPPvkkO6Ne+t3vfhcffPBBdgYLWXHFFbMTAAAAAAAAAACKnuEeAAAAAAAAAABgicyaNSuuvfba7AzqiUceeSSeeOKJ7AwACkxpqZdB1xWGewAAgPpk2223zU4oGg888EB2QtEbM2ZMvP3229kZBW+DDTbIToCi8umnn8YZZ5yRnVGv3XHHHdkJLGSFFVbITgAAAAAAAAAAKHresQoAAAAAAAAAACyxs846KyZMmJCdQR03e/bsGDRoUHYGAAWoefPm2Qks8NVXX2UnAAAAVFv37t2zE4rCV199FVdffXV2BhHx/PPPZycUvHbt2sW6666bnQFF44477og5c+ZkZ9Rrl19+ecyePTs7gwWaNWuWnQAAAAAAAAAAUPQM9wAAAAAAAAAAAEusqqoqLrvssuwM6rg77rgjxo0bl50BACxHlZWV2QkAAADV1rlz5+yEovDyyy/H9OnTszOIiAcffDA7oeCVlJTETjvtlJ0BReHzzz+PM888Mzuj3ps0aVI8/fTT2Rks0LBhw+wEAAAAAAAAAICiZ7gHAAAAAAAAAABYKpdddlmMHz8+O4M66rPPPotBgwZlZwBQoMrKyrITWGD27NnZCQAAANXSpUuXaNu2bXZGUXjkkUeyE1hg1KhRMW3atOyMgrfhhhtmJ0BRePDBB2PGjBnZGQXhzjvvzE5ggUaNGmUnAAAAAAAAAAAUPcM9AAAAAAAAAADAUrvggguyE6ijrrvuupgyZUp2BgAFqnHjxtkJLDBv3rzsBAAAgGrZaaedshOKwrx58+KPf/xjdgYL+fvf/56dUPDWW2+97AQoePPmzYvf/va32RkF49Zbb43JkydnZxARTZs2zU4AAAAAAAAAACh6hnsAAAAAAAAAAICldsstt8To0aOzM6hj/v3vf8ewYcOyMwCAWjB37tzsBAAAgGrp0aNHdkJReOONN2LSpEnZGSzE8zjLX4cOHbIToOD97W9/i3HjxmVnFJRnnnkmO4GIaNCgQXYCAAAAAAAAAEDRM9wDAAAAAAAAAAAsk3POOSfmz5+fnUEdcvHFF0dlZWV2BgAFrFGjRtkJAAAA1DNdu3bNTigKL7zwQnYC3/HYY49lJxS81q1bR/v27bMzoKDdcccd2QkFZ9SoUdkJhOc7AAAAAAAAAADqAsM9AAAAAAAAAADAMhk1alT89a9/zc6gjnj11Vfj6quvzs4AoMA1bNgwO4EFjPUBAAD1QUVFRXTs2DE7oyg88sgj2Ql8x7PPPhszZszIzihoJSUlsd1222VnQMH69NNP4/e//312RsG5/fbb48svv8zOICLWWmut7AQAAAAAAAAAgKJmuAcAAAAAAAAAAFhmw4cPj2+++SY7g2RVVVUxYsSI7AwAoBZ99dVX2QkAAACLtccee0SDBg2yMwreF198YbinjnrzzTezEwreRhttlJ0ABeuvf/1rVFVVZWcUnMrKynj11VezM4jwfSoAAAAAAAAAQDLDPQAAAAAAAAAAwDJ7/vnn4+GHH87OINmTTz4ZDz74YHYGAAAAAMC3bLzxxtkJReGNN97ITuAHjB8/Pjuh4K2//vrZCVCw7r777uyEgjV69OjsBAAAAAAAAAAASGe4BwAAAAAAAAAAqBFDhw6NOXPmZGeQZO7cuTFkyJDsDAAAAACA/2FQo3b8/e9/z07gBxhVWv46duyYnQAF6ZNPPokHHnggO6NgPfTQQ9kJAAAAAAAAAACQznAPAAAAAAAAAABQI8aNGxd33313dgZJ7r777hgzZkx2BgAAAADA/+jUqVN2QlEYPXp0dgI/4IUXXshOKHhrrLFGNGzYMDsDCo6/v5avF154ISZPnpydUfRWXHHF7AQAAAAAAAAAgKJmuAcAAAAAAAAAAKgxb731VnYCCaZPnx6DBg3KzgAAAAAA+B/NmjWLNdZYIzuj4H3zzTfx0EMPZWfwA0aPHh2zZs3KzihoZWVl0bNnz+wMKDiPP/54dkLBe/PNN7MTip7hHgAAAAAAAACAXIZ7AAAAAAAAAACAGlFWVhb9+vXLziDBCy+8EBMnTszOAKCINGnSJDuBBWbOnJmdAAAAsEjbb799NGjQIDuj4H300UcxY8aM7AwWwe/xl7+NNtooOwEKyuzZs+Pmm2/Ozih4b7zxRnYCAAAAAAAAAACkMtwDAAAAAAAAAADUiDPPPDPatWuXnUGC3r17R/fu3bMzAIAEK6ywQnYCAADAIvXo0SM7oSi8//772QkshuGe5a9Tp07ZCVBQxo0bF/PmzcvOKHgvv/xydgIAAAAAAAAAAKQy3AMAAAAAAAAAACyzZs2aRd++fbMzSLLCCivE2WefnZ0BQBH56quvshNYoGHDhtkJAAAAi9S5c+fshKLw9ttvZyewGB9++GF2QsFba621shOgoLz66qvZCUXhiSeeiPnz52dnAAAAAAAAAABAGsM9AAAAAAAAAADAMjv77LOjdevW2Rkk2mGHHWKHHXbIzgAAAAAA+JZOnTplJxSFf/3rX9kJLIbhnuWvffv22QlQUJ566qnshKIwadKk+PTTT7MzAAAAAAAAAAAgjeEeAAAAAAAAAABgmbRs2TIOO+yw7AySlZaWxrBhw7IzAAAAAAC+Ze21185OKAr/+Mc/shNYjA8++CA7oeCtttpq2QlQMObOnRsPPvhgdkbRmDBhQnYCAAAAAAAAAACkMdwDAAAAAAAAAAAskxEjRkRFRUV2BnXA5ptvbsQJAAAAAKgzevToEU2aNMnOKHjffPNN/O1vf8vOYDHeeuut7ISCt8oqq0T79u2zM6AgvPfeezFv3rzsjKLx73//OzsBAAAAAAAAAADSGO4BAAAAAAAAAACW2lprrRV9+vTJzqAOOe2007ITAIBa1KBBg+wEAACAH7TxxhtnJxSFTz/9NCorK7MzWIwxY8bE/PnzszMK3uabb56dAAXhX//6V3ZCUfnggw+yEwAAAAAAAAAAII3hHgAAAAAAAAAAYKmdffbZ0bx58+wM6pD1118/Tj311OwMAKCWNG7cODsBAADgB6233nrZCUVhypQp2QlUw7x58+LLL7/Mzih4/t6BmjF+/PjshKLyzjvvZCcAAAAAAAAAAEAawz0AAAAAAAAAAMBS6dKlS/ziF7/IzqAOOv744x3iD8ByNW/evOwEAAAA6oEOHTpkJxSFyZMnZydQTTNmzMhOKHjt2rXLToCCMHbs2OyEovL3v/89OwEAAAAAAAAAANIY7gEAAAAAAAAAAJbK8OHDjbPwvVZfffU466yzsjMAKGBff/11dgILlJZ6SToAAFB3GdCoHYZ76o/p06dnJxS8Nm3aZCdAvVdZWRlPPvlkdkZRee211+Kbb77JzgAAAAAAAAAAgBTeJQkAAAAAAAAAACyxzTbbLHbdddfsDOqwvn37OpwOAIpA06ZNsxMAAAB+0BprrJGdUBSmTJmSnUA1zZw5Mzuh4LVq1So7Aeq9//znPzFr1qzsjKIzderU7AQAAAAAAAAAAEhhuAcAAAAAAAAAAFhiw4YNi4YNG2ZnUIdVVFTEeeedl50BQIGaM2dOdgIL+J4QAACoq8rLy2PVVVfNzigK06ZNy06gmgxhLH/+3oFl95///Cc7oSgZ7gEAAAAAAAAAoFgZ7gEAAAAAAAAAAJbItttuG9tvv312BvXAvvvuG126dMnOAKAAVVZWZiewQKNGjbITAAAAvtdWW20VpaXeRlsbJk+enJ1ANRnuWf5atmyZnQD13sSJE7MTipIhPgAAAAAAAAAAilWD7AAAAAAAAAAAAKB+GTp0qMMOqZYmTZrEOeecE7vvvnt2CgCwnDRu3Dg7AQAA4HsZFa89PXv2jA4dOmRnUA1t27bNTih45eXlUVFREdOnT89OgXrro48+yk4oSv7eAgAAAAAAAACgWBnuAQAAAAAAAAAAqm3PPfeMnj17ZmdQj+y8887Rq1eveOqpp7JTACggM2fOzE5ggbKysuwEAACA77XWWmtlJxSNgw8+ODsB6pQePXrEE088kZ0B9dbEiROzE4rS1KlTsxMAAAAAAAAAACBFaXYAAAAAAAAAAABQf5x++ulRUlKSnUE9UlZWFsOHD8/OAKDAVFVVZSewQNOmTbMTAAAAvtdqq62WnQAUqY4dO2YnQL320UcfZScUpenTp2cnAAAAAAAAAABACsM9AAAAAAAAAABAtRx88MHRo0eP7AzqoZ49e0afPn2yMwAoILNnz85OYIEGDRpkJwAAAHyvVq1aZScARapdu3bZCVCvvf3229kJRWnGjBnZCQAAAAAAAAAAkMJwDwAAAAAAAAAAUC2nnXZadgL12MCBA7MTACggc+fOzU5ggUaNGkWzZs2yMwAAAP7Hqquump0AFKmWLVtmJ0C99o9//CM7oShNnz49OwEAAAAAAAAAAFIY7gEAAAAAAAAAABarf//+scEGG2RnUI916dIlTjzxxOwMAArEvHnzshNYSIcOHbITAAAA/ofhDCBLRUVFdgLUWzNnzozKysrsjKJkuAcAAAAAAAAAgGJluAcAAAAAAAAAAFik0tLSOOGEE7IzKAAnnnhilJWVZWcAUAC+/PLL7AQW0qZNm+wEAACAb6moqIjy8vLsDKBIGe6BpTdz5szshKLl9+4AAAAAAAAAABQrwz0AAAAAAAAAAMAinXrqqdGpU6fsDApA+/bt46yzzsrOAKAAzJs3LzuBhay66qrZCQAAAN/So0eP7ASgiK288srZCVBvGY8BAAAAAAAAAABqm+EeAAAAAAAAAADgB5WVlUX//v2zMyggRx11VLRs2TI7A4B6bvbs2dkJLGSVVVbJTgAAAPiWjh07ZicARay8vDw7AeqtuXPnZicULaNJAAAAAAAAAAAUK8M9AAAAAAAAAADADxo+fHi0a9cuO4MC0qJFixgxYkR2BgD1nAME65aKiorsBAAAgG9p3759dgJQxAz3wNIz2p7nq6++yk4AAAAAAAAAAIAUhnsAAAAAAAAAAIDvVV5eHkcccUR2BgXowAMPjHXXXTc7A4B67IsvvshOYCErrbRSdgIAAMC3rLbaatkJQBFbccUVsxOg3jIeAwAAAAAAAAAA1DbDPQAAAAAAAAAAwPc688wzo3Xr1tkZFKCmTZvGeeedl50BQD02Y8aM7AQWUlFRkZ0AAADwLS1btsxOAIpYs2bNonHjxtkZUC9VVlZmJxStyZMnZycAAAAAAAAAAEAKwz0AAAAAAAAAAMD/aNmyZRx22GHZGRSwXXfdNXr27JmdAUA9NX369OwEFrLKKqtkJwAAAHxLeXl5dgJQ5Dp37pydALBEvvnmm+wEAAAAAAAAAABIYbgHAAAAAAAAAAD4HyNGjIiKiorsDApYw4YN46yzzsrOAKCemjZtWnYCC2nRokV2AgAAwLestNJK2QlAkVtttdWyE6Bemj17dnYCAAAAAAAAAABQZAz3AAAAAAAAAAAA39KhQ4fo06dPdgZF4Gc/+1nstdde2RkA1ENTp07NTmAhBh8BAIC6xnAPkK158+bZCVAvVVVVZScAAAAAAAAAAABFxnAPAAAAAAAAAADwLcOHD3eYGLWipKQkBg8enJ0BQD30/vvvZyewEAdiAwAAdU15eXl2AlDk/L4EAAAAAAAAAAAA6gfDPQAAAAAAAAAAwH916dIl9t577+wMisjGG28cxxxzTHYGAPXM1KlT4+uvv87OYIGKiorsBAAAgG9ZccUVsxOAIme4BwAAAAAAAAAAAOoHwz0AAAAAAAAAAMB/nXXWWbHCCitkZ1Bkfv3rX0dpqZezAbBkZs6cmZ3AAg7EBgAA6pIOHTpEWVlZdgZQ5Jo1a5adAAAAAAAAAAAAAFSDkw4AAAAA+P/Y+/M4r+t6//9/zIwIIY64gOZCJJw0RUvDT0ckjiZW6DE1TUtTE7T0gFKoiArDNoC4JW65YLmhx31JIxWVECnREI6KuKMhgQgiAoIww++f8+trHkZnYGYe75n39Xq58M8s79dtvIwwy+v9vAMAAABARETsu+++ccghh2RnUIS++tWvRkVFRXYGAE2M4Z7CUVZWFl26dMnOAAAAiIiITp06ZScAROvWrbMTAAAAAAAAAAAAgFow3AMAAAAAAAAAAEREREVFRbRo0SI7gyJ16qmnRnl5eXYGAE3IsmXLshP4lK997WvZCQAAABER8eUvfzk7ASA222yz7AQAAAAAAAAAAACgFgz3AAAAAAAAAAAA0bNnzzjooIOyMyhi7du3j9GjR2dnANCEfPTRR9kJfMrOO++cnQAAABAREe3atctOAIg2bdpkJwAAAAAAAAAAAAC1YLgHAAAAAAAAAACIIUOGRGmp24nIdcIJJzj0H4Ba+/DDD7MT+JQdd9wxOwEAACAiItq2bZudABBf+tKXshMAAAAAAAAAAACAWnDSBgAAAAAAAAAAFLkjjjgiunfvnp0B0aZNmxg1alR2BgBNxAcffJCdwKd8+ctfzk4AAACIiIjWrVtnJwAY7gEAAAAAAAAAAIAmwnAPAAAAAAAAAAAUuUGDBkVJSUl2BkRExI9+9KPYZ599sjMAaAIWLVqUncCnbLfddtkJAAAAEWG4BygMhnsAAAAAAAAAAACgaTDcAwAAAAAAAAAARez44483kkJBadGiRVRWVmZnANAELF68ODuBT2nfvn12AgAAQEREtGnTJjsBAAAAAAAAAAAAAGgiDPcAAAAAAAAAAEARGzhwYHYC/B8HHnhgHHroodkZABS4+fPnZyfwKVtvvXV2AgAAQEREtG7dOjsBAAAAAAAAAAAAAGgiDPcAAAAAAAAAAECR6tu3b+y+++7ZGfB/lJaWxpAhQ7IzAChwhnsKy9Zbbx3l5eXZGQAAAPGlL30pOwEgNt100+wEAAAAAAAAAAAAoBYM9wAAAAAAAAAAQBEqLS2N/v37Z2dAjbp27Rp9+vTJzgCggL322mvZCXxKSUlJ7LffftkZAAAAhnuAgmC4BwAAAAAAAAAAAJoGwz0AAAAAAAAAAFCEzj777OjcuXN2BnyugQMHRmmp29wAWL/XX3891qxZk53Bp+y+++7ZCQAAAIZ7AAAAAAAAAAAAAIBac6IBAAAAAAAAAAAUmbKysujbt292Bnyhf/u3f4tBgwZlZwBQwBYvXpydwKd06tQpOwEAACBat26dnQAAAAAAAAAAAAAANBGGewAAAAAAAAAAoMgMHz48dtxxx+wMqJV+/fpFq1atsjMAKFBLlizJTuBTvvKVr2QnAAAARMuWLbMTAKJFixbZCQAAAAAAAAAAAEAtGO4BAAAAAAAAAIAiUl5eHn369MnOgFrbbrvt4oILLsjOAKBALV68ODuBTzEOCQAAFIJNN900OwHAiBgAAAAAAAAAAAA0EYZ7AAAAAAAAAACgiAwbNiy23Xbb7AyokxNPPNEQAADrtXDhwuwEPmW77bbLTgAAAAAAAAAAAAAAAAAAqDXDPQAAAAAAAAAAUCTatWsXP//5z7MzoM622GKLGDNmTHYGAAXovffey07gU7bZZhtjewAAQLpNNtkkOwEAAAAAAAAAAAAAaCIM9wAAAAAAAAAAQJGorKyMtm3bZmfABjnqqKNir732ys4AoMD8/e9/z07gMw444IDsBAAAoMi1bNkyOwEAAAAAAAAAAAAAaCIM9wAAAAAAAAAAQBHYeeed46c//Wl2Bmywli1bxsiRI7MzACgwb775ZnYCn7HnnntmJwAAAAAAAAAAAAAAAAAA1IrhHgAAAAAAAAAAKALDhw+PNm3aZGfARvnBD34Q3//+97MzACggL7zwQnYCn/G1r30tOwEAAAAAAAAAAAAAAAAAoFYM9wAAAAAAAAAAQDPXpUuXOOqoo7IzYKOVlpZGRUVFdgYABWTOnDmxatWq7Aw+pVOnTtkJAABAkSsrK8tOAAAAAAAAAAAAAACaCMM9AAAAAAAAAADQzI0YMSJatmyZnQH1Yt99943jjz8+OwOAAvLee+9lJ/ApHTp0yE4AAACKnJ+HAwAAAAAAAAAAAAC1ZbgHAAAAAAAAAACasX333TcOOeSQ7AyoV+eee252AgAFZNGiRdkJfEqbNm2ia9eu2RkAAAAAAAAAAAAAAAAAAF/IcA8AAAAAAAAAADRjFRUV0aJFi+wMqFe77rprnHXWWdkZABSI+fPnZyfwGT169MhOAAAAAAAAAAAAAAAAAAD4QoZ7AAAAAAAAAACgmerZs2ccdNBB2RnQIM4444xo1apVdgYABeDtt9/OTuAz9t577+wEAAAAAAAAAAAAAAAAAIAvZLgHAAAAAAAAAACaqSFDhkRpqVuEaJ523HHHGDFiRHYGAAXgzTffzE7gM77+9a9nJwAAAAAAAAAAAAAAAAAAfCGncgAAAAAAAAAAQDN0xBFHRPfu3bMzoEH16dMn2rVrl50BQLKXXnopO4HP6Ny5c3YCAAAAAAAAAAAAAAAAAMAX2iQ7AAAAAAAAAIDmp6qqKj744IPsDJqRVatWZSdAkzNo0KAoKSnJzoAGteWWW8aFF14YJ510UnYKAImmTZsW1dXVUVpamp3C/9p8883jgAMOiCeffDI7BQAAAAAAAAAAAAAAAACgRoZ7AAAAAAAAAKh38+bNi69+9avZGQBF6/jjj4999tknOwMaxY9//OO45JJL4sUXX8xOASDJihUr4v3334/27dtnp/ApPXr0MNwDAACkWL16dbRu3To7AwAAAAAAAAAAAABoAkqzAwAAAAAAAAAAgPo1cODA7ARoNK1bt47KysrsDACSvfvuu9kJfMaee+6ZnQAAABSpqqqq7AQAAAAAAAAAAAAAoIkw3AMAAAAAAAAAAM1I3759Y/fdd8/OgEZ1yCGHxAEHHJCdAUCit99+OzuBz/jGN76RnQAAAAAAAAAAAAAAAAAA8LkM9wAAAAAAAAAAQDNRWloa/fv3z86ARldWVhZDhw7NzgAg0euvv56dwGd89atfjQ4dOmRnAAAAAAAAAAAAAAAAAADUaJPsAAAAAAAAAAAAoH6cffbZ0blz5+wMSNGjR4845phj4o477shOASDBK6+8kp3AZ5SUlMQRRxwR48aNy06hyBx00EExYcKE7Iyic99998Uvf/nL7AwAgIiIWL16dXYCAAAAAAAAAAAAANBEGO4BAAAAAAAAAIBmoKysLPr27ZudAanOP/98wz0ARerpp5/OTmA9unXrZriHRrfHHnvENttsk51RdL70pS9lJwAA/NPatWuzEwAAAAAAAAAAAACAJqI0OwAAAAAAAAAAANh4w4cPjx133DE7A1J16dIlzjjjjOwMABLMmTMnPvroo+wMPmPPPffMTqAIdezYMTuhKPk7GAAAAAAAAAAAAAAAAGiKDPcAAAAAAAAAAEATV15eHn369MnOgIIwYMCAKCsry84AIMHf//737AQ+o3PnzrHddttlZ1Bkdtppp+yEorRq1arsBACAf/rkk0+yEwAAAAAAAAAAAACAJsJwDwAAAAAAAAAANHHDhg2LbbfdNjsDCkKHDh1ixIgR2RkAJHjjjTeyE/iMsrKy+MlPfpKdQZHZYYcdshOK0urVq7MTAAD+yaggAAAAAAAAAAAAAFBbhnsAAAAAAAAAAKAJa9euXfz85z/PzoCCcsopp8TWW2+dnQFAI3vllVeyE1iP/fffPzuBItOhQ4fshKK0dOnS7AQAgH/6+OOPsxMAAAAAAAAAAAAAgCbCcA8AAAAAAAAAADRhlZWV0bZt2+wMKCjbbLNNjB49OjsDgEY2a9as7ATWo2vXrtkJFJHtt98+2rVrl51RlD744IPsBACAf1q5cmV2AgAAAAAAAAAAAADQRBjuAQAAAAAAAACAJmrnnXeOn/70p9kZUJCOO+646Ny5c3YGAI3oySefjHXr1mVn8Bnbb7999OjRIzuDIrH//vtHSUlJdkZRev/997MTAAD+6eOPP85OAAAAAAAAAAAAAACaCMM9AAAAAAAAAADQRA0fPjzatGmTnQEFqXXr1nHBBRdkZwDQiObPnx/vvfdedgbrcfjhh2cnUCT22GOP7ISitWjRouwEAIB/WrVqVXYCAAAAAAAAAAAAANBEGO4BAAAAAAAAAIAmqEuXLnHUUUdlZ0BBO/TQQ6N79+7ZGQA0ojfffDM7gfXo1q1bdgJFokuXLtkJReudd97JTgAA+KeVK1dmJwAAAAAAAAAAAAAATYThHgAAAAAAAAAAaIJGjBgRLVu2zM6AgtaiRYsYPnx4dgYAjejll1/OTmA9vvGNb0S7du2yMygCu+yyS3ZCUVq7dq3hHgCgoCxfvjw7AQAAAAAAAAAAAABoIgz3AAAAAAAAAABAE7PvvvvGIYcckp0BTcL+++8fRxxxRHYGAI1k5syZ2QmsR8uWLeOkk07KzqCZKy8vj44dO2ZnFKWPPvooOwEA4F+sXLkyOwEAAAAAAAAAAAAAaCIM9wAAAAAAAAAAQBNTUVERLVq0yM6AJqGkpCQGDx6cnQFAI3niiSeyE6hBr169shNo5v7zP/8zNtlkk+yMovTBBx9kJwAA/IuPP/44OwEAAAAAAAAAAAAAaCIM9wAAAAAAAAAAQBPSs2fPOOigg7IzoEnZa6+94tRTT83OAKARzJ49OxYvXpydwXp07do1Nttss+wMmrH99tsvO6FoLVu2LDsBAOBfLFmyJDsBAAAAAAAAAAAAAGgiNskOAAAAAAAAAAAAam/IkCFRWlqanQFNzllnnRXXXXddVFdXZ6cA0MBef/312HrrrbMz+IzNNtssevfuHVdccUV2Cs3Ut771reyEovXBBx9kJwAA/ItFixZlJxSVN954Ix599NHsDCg48+fPz04AAAAAAAAAAAAAasFwDwAAAAAAAAAANBFHHHFEdO/ePTsDmqSdd945hgwZEsOHD89OAaCBvfjii/Htb387O4P16NWrl+EeGkRZWVnsvvvu2RlFy8H4AECh+cc//pGdUFTefvvt6Nu3b3YGAAAAAAAAAAAAAGyQ0uwAAAAAAAAAAACgdgYNGhQlJSXZGdBknXbaaVFeXp6dAUADe/bZZ7MTqEH37t1js802y86gGTriiCN8biVasGBBdgIAwL94/fXXsxMAAAAAAAAAAAAAgCbCcA8AAAAAAAAAADQBxx9/fOyzzz7ZGdCktW/fPkaNGpWdAUADe+ihh2LdunXZGaxHmzZtom/fvtkZNEPf/e53sxOK2vz587MTAAD+xdy5c6Oqqio7AwAAAAAAAAAAAABoAgz3AAAAAAAAAABAEzBw4MDsBGgWTjzxxOjYsWN2BgANaP78+fHOO+9kZ1CDww47LDuBZmi//fbLTihq8+bNy04AAPg/Pvroo+wEAAAAAAAAAAAAAKAJMNwDAAAAAAAAAAAFrl+/frH77rtnZ0Cz0KZNmxg9enR2BgANbM6cOdkJ1GCfffaJzp07Z2fQjHTo0CG+/vWvZ2cUtZdeeik7AQDg/1i2bFl2AgAAAAAAAAAAAADQBBjuAQAAAAAAAACAAlZaWhr9+/fPzqAGS5cujffff/9f/qxduzY7iy/wox/9KPbZZ5/sDAAa0MyZM7MTqMEmm2wSp556anYGzchPf/rT2GSTTbIzitbq1atj1qxZ2RkAAP/Hhx9+mJ0AAAAAAAAAAAAAADQBhnsAAAAAAAAAAKCAnX322dGpU6fsDNZj8eLFsfPOO0f79u3/5c/NN9+cncYX2HTTTWPkyJHZGQA0oMcffzw7gc9xyCGHZCfQjPTs2TM7oagtWrQoOwEAYL0M9zSeNm3aZCcAAAAAAAAAAAAAwAYz3AMAAAAAAAAAAAWqrKws+vXrl51BDW688cZYunTp/3l5RUXFel9OYenZs6fRAIBmbNKkSQ5pLmC77LJLHHbYYdkZNAObbbZZ/Pu//3t2RlFbsGBBdgIAwHotW7YsO6FolJZ6qjIAAAAAAAAAAAAATZe7YQEAAAAAAAAAoECNGDEidthhh+wM1mPhwoUxZMiQ9b5u/vz5cfvttzdyEXVVWloaQ4cOzc4AoAG99NJL2Ql8jpNPPjk7gWbg5JNPjs022yw7o6j94x//yE4AAFiv9957LzuhaLRu3To7AQAAAAAAAAAAAAA2mOEeAAAAAAAAAAAoQOXl5dGnT5/sDGpw/fXXx6pVq2p8fUVFRSxevLgRi9gQXbt2jd69e2dnANBAZsyYkZ3A5zjwwANjxx13zM6giTvkkEOyE4re3LlzsxMAANZr/vz52QlFY9NNN81OAAAAAAAAAAAAAIANZrgHAAAAAAAAAAAK0PDhw6N9+/bZGazHvHnzYvjw4Z/7NosXL45bbrmlkYrYGAMHDozSUrfSATRHU6ZMyU7gc7Rq1Sp+9atfZWfQhG299dbRrVu37Iyi9+qrr2YnAACs19tvv52dUDTatGmTnQAAAAAAAAAAAAAAG8xpAwAAAAAAAAAAUGDatWsXJ554YnYGNbjqqquiqqrqC99uyJAhsXDhwkYoYmN87Wtfi0GDBmVnANAAHnjggVixYkV2Bp/jyCOPzE6gCTv99NOjdevW2RlFb9asWdkJAADr9eabb2YnFA1flwMAAAAAAAAAAADQlBnuAQAAAAAAAACAAjNq1Kho27Ztdgbr8cYbb8RFF11Uq7ddsWJF3HjjjQ0bRL3o27dvtGrVKjsDgHq2Zs2aeOmll7Iz+Bxf+cpX4he/+EV2Bk3UYYcdlp1Q9D755JOYNm1adgYAwHo9++yz2QlFY7PNNstOAAAAAAAAAAAAAIANZrgHAAAAAAAAAAAKSOfOneMnP/lJdgY1uPLKK6O6urrWb19RURHvvvtuAxZRH7785S/HmDFjsjMAaADPPPNMdgJf4Je//GV2Ak1Q9+7dY88998zOKHrz58+v0/dHAACNadmyZfHhhx9mZxSFsrKy6NixY3YGAAAAAAAAAAAAAGwQwz0AAAAAAAAAAFBAhg0bFm3atMnOYD1mz54d48aNq9P7rFmzJsaPH99ARdSnE088MXbcccfsDADq2aRJk7IT+AJ77bVXHH744dkZNDGnnXZalJSUZGcUvbfeeis7AQDgc73//vvZCUXj61//enYCAAAAAAAAAAAAAGwQwz0AAAAAAAAAAFAgunTpEkceeWR2BjX4zW9+s0HvN3LkyJg7d279xlDv2rZtG6NGjcrOAKCe/eEPf4gPP/wwO4Mv0L9//+wEmpDy8vI45JBDsjOIiNdffz07AQDgcy1atCg7oWjstNNO2QkAAAAAAAAAAAAAsEEM9wAAAAAAAAAAQIEYOXJktGzZMjuD9Zg5c2bccMMNG/S+1dXVce2119ZzEQ3h6KOPjr322is7A4B6NmvWrOwEvkD37t2jW7du2Rk0EQMHDozy8vLsDCJi9uzZ2QkAAJ9r4cKF2QlFY/vtt89OAAAAAAAAAAAAAIANYrgHAAAAAAAAAAAKQLdu3eLggw/OzqAGF1xwwUa9/9ixY+O1116rpxoaSsuWLWPEiBHZGQDUs2nTpmUn8AXKyspi0KBB2Rk0Ecccc0x2Av/rr3/9a3YCAMDn+sc//pGdUDQM9wAAAAAAAAAAAADQVBnuAQAAAAAAAACAAlBRUREtWrTIzmA9nnnmmbjzzjs3+nGuuuqqeqihof3gBz+Igw46KDsDgHp09913ZydQC7169Yru3btnZ1DgTj311OjUqVN2BhHx4YcfxjPPPJOdAQDwud54443shKKxww47ZCcAAAAAAAAAAAAAwAYx3AMAAAAAAAAAAMl69uwZPXv2zM5gPdatWxejRo2ql8e6/PLLY/bs2fXyWDScsrKyGDZsWHYGAPVoxowZMXfu3OwMvkBZWVkMGTIkO4MC91//9V/ZCfyvt956KzsBAOALzZo1KzuhaGy//fbZCQAAAAAAAAAAAACwQQz3AAAAAAAAAABAsoqKiigtdStPIfrzn/8cDz30UL093rhx4+rtsWg4++67bxx33HHZGQDUo+nTp2cnUAsHHnigQUtqdPzxx0eXLl2yM/hfr7zySnYCAMAXmjp1alRVVWVnFIVtt902OwEAAAAAAAAAAAAANojTPgAAAAAAAAAAINGPfvSj2G+//bIzWI+qqqoYPXp0vT7m9ddfHzNnzqzXx6RhnHfeedkJANSjJ554IjuBWigtLY3BgwdnZ1Cg+vfvn53Ap/zP//xPdgIAwBdatWpVLFy4MDujKLRv3z7Ky8uzMwAAAAAAAAAAAACgzgz3AAAAAAAAAABAokGDBkVJSUl2Buvx2GOPxaRJk+r9cS+99NJ6f0zq39e//vU466yzsjMAqCcTJkyIlStXZmdQC9/5znfi6KOPzs6gwPTu3Tv23nvv7Aw+ZfLkydkJAAC1Mm/evOyEolBaWhoHHnhgdgYAAAAAAAAAAAAA1JnhHgAAAAAAAAAASHL88cdH165dszNYjzVr1sTIkSMb5LFvvfXWmD59eoM8NvXrjDPOiBYtWmRnAFAPVqxYETNmzMjOoBZKSkpi2LBhUVrqVnf+P2effXZ2Ap+yZMmS+Mtf/pKdAQBQK3//+9+zE4rGnnvumZ0AAAAAAAAAAAAAAHXm2YwAAAAAAAAAAJDknHPOyU6gBhMnTmzQg6gvvvjiWLduXYM9PvVjxx13jMrKyuwMAOrJk08+mZ1ALe26664xZMiQ7AwKxJlnnhm77LJLdgafMmfOnOwEAIBae+ONN7ITisbXvva17AQAAAAAAAAAAAAAqDPDPQAAAAAAAAAAkKBfv36x2267ZWewHqtXr47Bgwc36DXuvvvuePrppxv0GtSPk08+Odq1a5edAUA9mDBhQlRXV2dnUEv9+vWL7bbbLjuDZOXl5TFgwIDsDD7jpZdeyk4AAKi11157LTuhaBjcBAAAAAAAAAAAAKApMtwDAAAAAAAAAACNrLS0NPr375+dQQ3uu+++ePHFFxv8OmPHjjUe0ARsueWWccEFF2RnAFAPXn311Xj55ZezM6ilrbfeOi6++OLsDJJdfPHF8eUvfzk7g8+YOnVqdgIAQK0988wz2QlFo1OnTtkJAAAAAAAAAAAAAFBnhnsAAAAAAAAAAKCRnX322Q6wK1ArV66MioqKRrnWww8/HJMnT26Ua7FxjjnmmOjSpUt2BgD14KmnnspOoA6OPvroOOSQQ7IzSNK1a9f42c9+lp3BZ3zyySdx7733ZmcAANTaiy++GEuXLs3OKApbbLFFdO/ePTsDAAAAAAAAAAAAAOrEcA8AAAAAAAAAADSisrKy6NevX3YGNbjjjjvi9ddfb7TrjRkzJqqqqhrtemyY1q1bx4gRI7IzAKgHt912W3YCdbDJJpvEJZdcEmVlZdkpJPjNb34TrVq1ys7gM1555ZVYsWJFdgYAQJ289dZb2QlFY//9989OAAAAAAAAAAAAAIA6MdwDAAAAAAAAAACNaMSIEbHDDjtkZ7Aey5Yti6FDhzbqNR9//PF47LHHGvWabJhDDz3UoZMAzcDUqVMbdaSPjfe1r30tLrvssuwMGtk555wT++23X3YG6/H8889nJwAA1Nmrr76anVA0vv3tb2cnAAAAAAAAAAAAAECdGO4BAAAAAAAAAIBGUl5eHn369MnOoAYTJkyIefPmNfp1KysrY82aNY1+XeqmrKwshg0blp0BQD2YMmVKdgJ1dPLJJ8d3vvOd7AwaSefOnWPgwIHZGdRg2rRp2QkAAHX20ksvZScUjS5dumQnAAAApGjbtm12AgAAAAAAAAAbyHAPAAAAAAAAAAA0kuHDh0f79u2zM1iPxYsXR0VFRcq1p02bFhMnTky5NnXzne98J44++ujsDAA20u23356dQB21bNkyrrrqqigrK8tOoRH89re/jS233DI7g/X45JNP4r//+7+zMwAA6uyvf/1rdkLR6NChQ+y6667ZGQAAAI1um222yU4AAAAAAAAAYAMZ7gEAAAAAAAAAgEbQrl27OPHEE7MzqMFNN90UixcvTrv+iBEjYvXq1WnXp3ZKSkri/PPPz84AYCM9/vjj8dZbb2VnUEddunSJ6667LjuDBjZkyJA48MADszOowUsvvRTLli3LzgAAqLMnnngiVq1alZ1RFEpKSoyfAwAARalVq1bZCQAAAAAAAABsIMM9AAAAAAAAAADQCEaNGhVt27bNzmA9Fi5cGIMHD05tmDFjRjz44IOpDdTOHnvsEaeffnp2BgAb6cknn8xOYAOccMIJcfzxx2dn0EC6desW55xzTnYGn2P69OnZCQAAG6S6ujrmzp2bnVE0evTokZ0AAADQ6HbYYYfsBAAAAAAAAAA2kOEeAAAAAAAAAABoYJ07d46f/OQn2RnU4Prrr49Vq1ZlZ8Tw4cNj5cqV2RnUwoABA6KsrCw7A4CNcOONN2YnsAHKysrioosuio4dO2anUM9atWoV48ePj9atW2en8DkeeeSR7AQAgA322muvZScUjW9961tRWurpywAAQHHZfvvtsxMAAAAAAAAA2EDufAUAAAAAAAAAgAY2bNiwaNOmTXYG6zFv3rwYPnx4dkZERMyePTvuu+++7Axq4Stf+UrBfN4AsGGmTp0ar7zySnYGG6B9+/Zx6623OgS6mbn99ttj1113zc7gcyxZsiTuv//+7AwAgA02e/bs7ISiscUWW8Rxxx2XnQEAANCodthhh+wEAAAAAAAAADaQZysCAAAAAAAAAEAD6tKlSxx55JHZGdTgqquuiqqqquyMfxo6dGgsX748O4Na+MUvfhFt27bNzgBgIzzyyCPZCWygbt26xfXXX5+dQT0ZOnRoHHbYYdkZfIFnn302OwEAYKNMmTIlO6Go+BofAAAoNttss012AgAAAAAAAAAbyHAPAAAAAAAAAAA0oJEjR0bLli2zM1iPN954Iy666KLsjH/x5ptvxp133pmdQS1ss802ccEFF2RnALARfv/73xfUgB918/Of/zzOPPPM7Aw20tFHHx3nnntudga18MQTT2QnAABslEceecRoeiPq3r17dgIAAECj2nbbbbMTAAAAAAAAANhAhnsAAAAAAAAAAKCBdOvWLQ4++ODsDGpw5ZVXRnV1dXbG/1FRURFLly7NzqAWjjvuuOjcuXN2BgAbaNasWTFz5szsDDZQSUlJjBgxInr16pWdwgbq1q1bXHPNNbHppptmp/AF1q5dGxMmTMjOAADYKNXV1TFnzpzsjKLRvn37OO6447IzAAAAGk3Hjh2zEwAAAAAAAADYQIZ7AAAAAAAAAACggVRUVESLFi2yM1iP2bNnx7hx47Iz1mv+/Plx++23Z2dQC5tttlmMGTMmOwOAjXD//fdnJ7ARvvSlL8UNN9wQXbp0yU6hjjp27Bi33XZbtG3bNjuFWvif//mfmD9/fnYGAMBGmzVrVnZCUfnpT3+anQAAANBodtppp+wEAAAAAAAAADaQ4R4AAAAAAAAAAGgAPXv2jJ49e2ZnUIPLLrssO+FzVVRUxOLFi7MzqIUf/vCH0a1bt+wMADbQVVddFcuXL8/OYCNst912cffdd8d2222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), aEa(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aEa(8,
					"googleplay", 3,
					"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"
					), aEa(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aEa(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aEa(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aEa(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aEa(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aEa(14, "bestPlayer", 5,
					"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"
					), aEa(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aEa(16, "apple", 3,
					"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"
					), aEa(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aEa(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aEa(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aEa(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aEa(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aEa(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(dx) {
		return canvas[dx]
	}, this.aEB = function(name) {
		for (var aA = z9.length - 1; 0 <= aA; aA--)
			if (z9[aA] === name) return canvas[aA];
		return aEU
	}, this.sE = function() {
		return aET <= 0
	}, this.aEW = function() {
		aET = 0, aEX()
	}
}

function cO() {
	var aEi, aEj, aEk, aEl, aEm, aEn, aEo, aEp, aEq, aEr, aEg = [
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
		aEh = [
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

	function aEx(j5, mN) {
		for (var aA = j5; aA < mN; aA++) aEi[aA] = 4 * bJ.dl(64 * aw.random(), aw.value(100)), aEj[aA] = 4 * bJ.dl(64 * aw.random(), aw.value(100)), aEk[aA] = 4 * bJ.dl(64 * aw.random(), aw.value(100))
	}

	function aEw(j5, mN) {
		for (var colorsData = aC.data.colorsData, aA = j5; aA < mN; aA++) {
			var f0 = colorsData[aA];
			aEi[aA] = 4 * (f0 >> 12), aEj[aA] = 4 * (f0 >> 6 & 63), aEk[aA] = 4 * (63 & f0)
		}
	}

	function aF8(eC, aFA) {
		aAE[eC] = 0, aAE[eC + 1] = 0, aAE[eC + 2] = aFA, aAE[eC + 3] = 0, aFB(eC)
	}

	function aFB(eC) {
		var ef;
		bZ.mV || (ef = ab.wz(eC), eC = ab.x0(eC), bZ.mV = ef >= bY.aAD[0] && ef <= bY.aAD[2] && eC >= bY.aAD[1] && eC <= bY.aAD[3])
	}
	this.ea = new Int32Array(4), this.dV = function() {
		var ea = this.ea;
		ea[0] = -4 * bQ.ej, ea[1] = 4, ea[2] = -ea[0], ea[3] = -ea[1]
	}, this.dU = function() {
		if (aEi = new Uint8Array(aC.eV), aEj = new Uint8Array(aC.eV), aEk = new Uint8Array(aC.eV), aEl = new Uint8Array(aC.eV), aEm = new Uint8Array(aC.eV), aEn = new Uint8Array(aC.eV), aEo = new Uint8Array(aC.eV), aEp = new Uint8Array(aC.eV),
			aEq = new Uint8Array(aC.eV), aEr = new Uint8Array(aC.eV), this.a6p = new Uint8Array(aC.eV), aC.hO)
			for (var aA = aC.eV - 1; 0 <= aA; aA--) {
				var et = be.kA[be.eW[aA]],
					kW = bJ.dl((aEh[et][3] + 1) * aw.random(), aw.value(100));
				aEi[aA] = aEg[et][0] + kW * aEh[et][0], aEj[aA] = aEg[et][1] + kW * aEh[et][1], aEk[aA] = aEg[et][2] + kW * aEh[et][2]
			} else 0 === aC.data.colorsType ? aC.data.selectableColor ? (aEw(0, aC.jo), aEx(aC.jo, aC.eV)) : aEx(0, aC.eV) : aEw(0, aC.eV);
		! function() {
			var aA, eb;
			for (aA = aC.eV - 1; 0 <= aA; aA--) eb = bJ.dl(aEi[aA] + aEj[aA] + aEk[aA], 3), aEi[aA] += aF3(eb - aEi[aA], 2), aEj[aA] += aF3(eb - aEj[aA], 2), aEk[aA] += aF3(eb - aEk[aA], 2), aEi[aA] -= aEi[aA] % 4, aEj[aA] -= aEj[aA] % 4, aEk[
				aA] -= aEk[aA] % 4
		}(),
		function() {
			for (var aA = aC.eV - 1; 0 <= aA; aA--) aEi[aA] += bJ.dl(aA, 128), aEj[aA] += bJ.dl(aA % 128, 32), aEk[aA] += bJ.dl(aA % 32, 8), aEl[aA] = aA % 8
		}(), this.aF0(),
			function() {
				for (var aA = aC.eV - 1; 0 <= aA; aA--) aEm[aA] = aEi[aA] < 32 ? aEi[aA] + 32 : aEi[aA] - 32, aEn[aA] = aEj[aA] < 32 ? aEj[aA] + 32 : aEj[aA] - 32, aEo[aA] = aEk[aA] < 32 ? aEk[aA] + 32 : aEk[aA] - 32
			}(),
			function() {
				for (var aA = aC.eV - 1; 0 <= aA; aA--) aEp[aA] = 235 < aEi[aA] ? aEi[aA] - 20 : aEi[aA] + 20, aEq[aA] = 235 < aEj[aA] ? aEj[aA] - 20 : aEj[aA] + 20, aEr[aA] = 235 < aEk[aA] ? aEk[aA] - 20 : aEk[aA] + 20
			}()
	}, this.a5o = function(player) {
		var g = bM.f8;
		return g[0] = aEi[player], g[1] = aEj[player], g[2] = aEk[player], g
	}, this.aF0 = function() {
		for (var aA = aC.eV - 1; 0 <= aA; aA--) this.a6p[aA] = aEi[aA] + aEj[aA] + aEk[aA] < 280 ? 0 : 1
	}, this.wz = function(eC) {
		return bJ.dl(eC, 4) % bQ.ej
	}, this.x0 = function(eC) {
		return bJ.dl(eC, 4 * bQ.ej)
	}, this.wZ = function(ef, eh) {
		return Math.floor(4 * (eh * bQ.ej + ef))
	}, this.wp = function(eC) {
		var ea = this.ea;
		return this.aF4(eC + ea[0]) || this.aF4(eC + ea[1]) || this.aF4(eC + ea[2]) || this.aF4(eC + ea[3])
	}, this.ex = function(eC) {
		var ea = this.ea;
		return this.ed(eC + ea[0]) || this.ed(eC + ea[1]) || this.ed(eC + ea[2]) || this.ed(eC + ea[3])
	}, this.wn = function(eC, player) {
		var ea = this.ea;
		return this.aF5(eC + ea[0], player) || this.aF5(eC + ea[1], player) || this.aF5(eC + ea[2], player) || this.aF5(eC + ea[3], player)
	}, this.g8 = function(eC) {
		return 208 <= aAE[eC + 3]
	}, this.wu = function(player, eC) {
		return this.g8(eC) && this.aF6(player, eC)
	}, this.aF6 = function(player, eC) {
		return player === this.eQ(eC)
	}, this.aF7 = function(eC) {
		return 208 <= aAE[eC + 3] && aAE[eC + 3] < 224
	}, this.j1 = function(eC) {
		return 224 <= aAE[eC + 3] && aAE[eC + 3] < 248
	}, this.wo = function(eC) {
		for (var ea = this.ea, aA = 3; 0 <= aA; aA--)
			if (this.h1(eC + ea[aA])) return !0;
		return !1
	}, this.eT = function(eC) {
		return this.g8(eC) || this.eP(eC)
	}, this.h1 = function(eC) {
		return 0 === aAE[eC + 3] && 2 === aAE[eC + 2]
	}, this.eP = function(eC) {
		return 0 === aAE[eC + 3] && 1 === aAE[eC + 2]
	}, this.ve = function(eC) {
		return 0 === aAE[eC + 3] && 3 === aAE[eC + 2]
	}, this.ed = function(eC) {
		return 0 === aAE[eC + 3] && 5 <= aAE[eC + 2]
	}, this.aF4 = function(eC) {
		return 0 === aAE[eC + 3] && 3 <= aAE[eC + 2]
	}, this.eG = function(eC) {
		return aAE[eC + 2] - 5
	}, this.aF5 = function(eC, player) {
		return this.eP(eC) || this.g8(eC) && player !== this.eQ(eC)
	}, this.eQ = function(eC) {
		return aAE[eC] % 4 * 128 + aAE[eC + 1] % 4 * 32 + aAE[eC + 2] % 4 * 8 + aAE[eC + 3] % 8
	}, this.wv = function(eC) {
		aF8(eC, 1)
	}, this.aF9 = function(eC) {
		aF8(eC, 2)
	}, this.wa = function(eC, player) {
		aAE[eC] = aEi[player], aAE[eC + 1] = aEj[player], aAE[eC + 2] = aEk[player], aAE[eC + 3] = 208 + aEl[player], aFB(eC)
	}, this.g3 = function(eC, player) {
		aAE[eC] = aEm[player], aAE[eC + 1] = aEn[player], aAE[eC + 2] = aEo[player], aAE[eC + 3] = 224 + aEl[player], aFB(eC)
	}, this.j2 = function(eC, player) {
		aAE[eC] = aEp[player], aAE[eC + 1] = aEq[player], aAE[eC + 2] = aEr[player], aAE[eC + 3] = 248 + aEl[player], aFB(eC)
	}
}

function cm() {
	var dx = 0,
		aFC = new Uint16Array(32);

	function remove(a3u) {
		var aA;
		for (dx -= 2, aA = a3u; aA < dx; aA += 2) aFC[aA] = aFC[aA + 2], aFC[aA + 1] = aFC[aA + 3]
	}
	this.dU = function() {
		dx = 0
	}, this.ii = function() {
		var aA, iz, i8;
		if (0 !== dx)
			if (0 === af.ld[aC.eI] || ac.aFD(aC.eI) === ac.fe(aC.eI)) dx = 0;
			else
				for (aA = dx - 2; 0 <= aA; aA -= 2)(iz = aFC[aA]) < aC.eV && 0 === af.ld[iz] ? remove(aA) : (i8 = aFC[aA + 1], (iz >= aC.eV && aFE(aC.eI) || iz < aC.eV && aFF(aC.eI, iz)) && (b6.gv.h6(i8, iz), remove(aA)))
	}, this.h8 = function(iz, i8) {
		! function(iz, i8) {
			var aA;
			for (aA = 0; aA < dx; aA += 2)
				if (aFC[aA] === iz) return aFC[aA + 1] = Math.min(aFC[aA + 1] + i8, 1023), 1;
			return
		}(iz, i8) && 32 !== dx && (aFC[dx] = iz, aFC[dx + 1] = i8, dx += 2)
	}
}

function cP() {
	function aFM(player) {
		var dk;
		b8.fu.a2F(player) && (dk = af.ga[player] - af.a2J[player] + ac.aFO(player), bb.fy(player, Math.abs(dk), dk < 0 ? 18 : 12)), af.ga[player] = 0, af.a2J[player] = 0
	}

	function aFV() {
		aW.show(!1, !1, !1, !0), aV.a9O(), bP.yY.zI()
	}

	function aFJ(player, aFU) {
		for (var aA = aFU.length - 1; 0 <= aA; aA--) ac.aFX(aFU[aA], player)
	}

	function aFL(player) {
		for (var iN = af.iN, iO = af.iO, iP = af.iP, iQ = af.iQ, m5 = iN[player], m6 = iP[player], ej = bQ.ej, gM = af.gM, ef = iO[player]; m5 <= ef; ef--)
			for (var eh = iQ[player]; m6 <= eh; eh--) {
				var g6 = 4 * (eh * ej + ef);
				ab.wu(player, g6) && (ab.wv(g6), gM[player]--)
			}
		iO[player] = iQ[player] = 0, iN[player] = iP[player] = Math.max(ej, bQ.ek)
	}
	this.dd = function(g6) {
		var player, dk = af.gM[g6];
		bL.x.ok[g6] ? dk && (aFJ(player = g6, ac.aFK(player)), aFL(player), aE.fw(player), ac.clear(player), aFM(player), function(player) {
			af.wV[player] = 0, af.g0[player] = [], af.gE[player] = [], af.gF[player] = [], af.ey[player] = []
		}(player)) : !dk && af.g0[g6].length || this.aFI(g6)
	}, this.aFI = function(player) {
		! function(player) {
			b8.fu.jC(player) || (af.zL[player] = bg.zc.aFT(), aC.yp++);
			var aFU = ac.aFK(player);
			0 === aFU.length ? b8.fu.a2C(player) && aFV() : (aFJ(player, aFU), function(player, aFU) {
				var aFZ = aFU[function(aFU) {
					var aA, dx = 0;
					for (aA = aFU.length - 1; 1 <= aA; aA--) af.gM[aFU[aA]] > af.gM[aFU[dx]] && (dx = aA);
					return dx
				}(aFU)];
				9 === aC.k5 && 1 === be.eW[player] && aw.jg(8) && ax.aFa(aFZ);
				if (b8.fu.a2C(player)) aFV(), aM.yz(aFZ, 1);
				else {
					for (var aA = aFU.length - 1; 0 <= aA; aA--)
						if (b8.fu.a2F(aFU[aA]) && (bb.lZ[4 - b8.fu.jC(player)]++, b8.fu.a2C(aFU[aA]))) return aM.yz(player, 0);
					b8.fu.jC(player) || aM.a56(0, player, aFZ)
				}
			}(player, aFU))
		}(player), aFL(player), aFM(player),
			function(player) {
				af.ld[player] = 0, af.g0[player] = null, af.gE[player] = null, af.gF[player] = null, af.ey[player] = null
			}(player), aE.fw(player), ac.clear(player), bL.aFR.aFS(player)
	}
}

function cr() {
	var input;

	function aFb(e) {
		(e = e.target.files) && 0 < e.length && b4.aFe(e[0])
	}

	function aFi(e) {
		var et = new Image;
		et.onload = aFj, et.src = e.target.result
	}

	function aFj(e) {
		var e = e.target,
			canvas = document.createElement("canvas");
		canvas.width = e.width, canvas.height = e.height;
		canvas.getContext("2d").drawImage(e, 0, 0);
		var e = canvas.width,
			j = canvas.height;
		e > bQ.aFl || j > bQ.aFl || e < 10 || j < 10 ? (e = "Image dimensions must be between 10 and " + bQ.aFl + ".", z.uG ? z.uG.showToast(e) : alert(e)) : 20 === s.rm && s.aDC().aFj(canvas)
	}
	this.dU = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = aFb
	}, this.t8 = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.aFc = function() {
		input.click()
	}, this.aFe = function(aFf) {
		var g = aFf.name.split("."),
			g = g[g.length - 1].toLowerCase();
		"gif" !== g && "jpg" !== g && "jpeg" !== g && "png" !== g || ((g = new FileReader).onload = aFi, g.readAsDataURL(aFf))
	}
}

function cp() {
	this.aFn = null, this.dU = function() {
		10 !== aC.k5 ? this.aFn = null : this.aFn = new Uint32Array(aC.eV)
	}, this.ii = function() {
		10 === aC.k5 && this.qh()
	}, this.qh = function() {
		for (var g6, target, a9Z, aFn = this.aFn, yb = ak.jq, a2K = af.ga, aA = ak.jp - 1; 0 <= aA; aA--)(g6 = yb[aA]) >= aC.jo || (target = Math.max(bJ.dl(a2K[g6], 4), 2048), a9Z = Math.max(ad.a9a(g6), 100), aFn[g6] += bJ.dl(a9Z * target, 1e4),
			aFn[g6] > target && (aFn[g6] = target))
	}, this.a2Q = function(player, hD) {
		return hD > this.aFn[player] ? (hD = this.aFn[player], this.aFn[player] = 0) : this.aFn[player] -= hD, hD
	}
}

function dQ() {
	function aFp(e) {
		var g, e = e.target.files;
		e && 0 < e.length && (e = e[0], "json" === (g = e.name.split("."))[g.length - 1].toLowerCase()) && ((g = new FileReader).onload = aFx, g.readAsText(e))
	}

	function aFx(e) {
		var aG1;
		aC.yn || (e = JSON.parse(e.target.result), aG1 = aC.data = new a3G, aG2(e, aG1, "mapType", 0, 2), aG2(e, aG1, "mapProceduralIndex", 0, 255), aG2(e, aG1, "mapRealisticIndex", 0, 255), aG2(e, aG1, "mapSeed", 0, 16383), function(aG0, aG1, g7,
				max) {
				aG0 = aG0[g7];
				aG1[g7] = aG8(aG0) ? aG0.slice(0, max) : aG1[g7]
			}(e, aG1, "mapName", 20), function(aG0, aG1, g7) {
				var aFk;
				2 === aG1.mapType && (!aG8(aG0 = aG0[g7]) || aG0.length <= 20 ? aG1.mapType = 0 : ((aFk = new Image).onload = function() {
					b7.aG9.aGA(aFk, 1), aFk.onload = null, aFk = null
				}, aFk.src = aG0))
			}(e, aG1, "canvas"), aG2(e, aG1, "passableWater", 0, 1), aG2(e, aG1, "passableMountains", 0, 1), aG2(e, aG1, "playerCount", 1, 512), aG2(e, aG1, "humanCount", 1, 1), aG2(e, aG1, "selectedPlayer", 0, 0), aG2(e, aG1, "gameMode", 0, 1),
			aG2(e, aG1, "playerMode", 0, 0), aG2(e, aG1, "battleRoyaleMode", 0, 0), aG2(e, aG1, "numberTeams", 0, 8), aG2(e, aG1, "isZombieMode", 0, 0), aG2(e, aG1, "isContest", 0, 0), aG2(e, aG1, "isReplay", 0, 0), aG5(e, aG1, "elo", 16, 2,
				16383), aG2(e, aG1, "colorsType", 0, 1), aG2(e, aG1, "colorsPersonalized", 0, 1), aG5(e, aG1, "colorsData", 32, 512, 262143), aG2(e, aG1, "selectableColor", 0, 1), aG5(e, aG1, "teamPlayerCount", 16, 9, 512), aG2(e, aG1,
				"neutralBots", 0, 1), aG2(e, aG1, "botDifficultyType", 0, 3), aG2(e, aG1, "botDifficultyValue", 0, 15), aG5(e, aG1, "botDifficultyTeam", 8, 9, 15), aG5(e, aG1, "botDifficultyData", 8, 512, 15), aG2(e, aG1, "spawningType", 0, 2),
			aG2(e, aG1, "spawningSeed", 0, 16383), aG5(e, aG1, "spawningData", 16, 1024, 4095), aG2(e, aG1, "selectableSpawn", 0, 1), aG2(e, aG1, "playerNamesType", 0, 2),
			function(aG0, aG1, g7, size, max) {
				var a1Q = aG0[g7];
				if (Array.isArray(a1Q)) {
					for (var a1R = new Array(size), eY = Math.min(a1Q.length, size), aA = 0; aA < eY; aA++) a1R[aA] = aG8(a1Q[aA]) ? a1Q[aA].slice(0, max) : "";
					aG1[g7] = a1R
				}
			}(e, aG1, "playerNamesData", 512, 20), aG2(e, aG1, "selectableName", 0, 1), aG2(e, aG1, "aIncomeType", 0, 2), aG2(e, aG1, "aIncomeValue", 0, 255), aG5(e, aG1, "aIncomeData", 8, 512, 255), aG2(e, aG1, "tIncomeType", 0, 2), aG2(e, aG1,
				"tIncomeValue", 0, 255), aG5(e, aG1, "tIncomeData", 8, 512, 255), aG2(e, aG1, "iIncomeType", 0, 2), aG2(e, aG1, "iIncomeValue", 0, 255), aG5(e, aG1, "iIncomeData", 8, 512, 255), aG2(e, aG1, "sResourcesType", 0, 2), aG2(e, aG1,
				"sResourcesValue", 0, 2047), aG5(e, aG1, "sResourcesData", 16, 512, 2047), s.w(), s.x.aFz[0] = 0, s.t(19))
	}

	function aG2(aG0, aG1, g7, min, max) {
		aG0 = aG0[g7];
		aG1[g7] = "number" == typeof aG0 && min <= aG0 && aG0 <= max ? Math.floor(aG0) : aG1[g7]
	}

	function aG8(pE) {
		return "string" == typeof pE
	}

	function aG5(aG0, aG1, g7, aGB, size, max) {
		var a1Q = aG0[g7];
		if (Array.isArray(a1Q)) {
			for (var a1R = new(8 === aGB ? Uint8Array : 16 === aGB ? Uint16Array : Uint32Array)(size), eY = Math.min(a1Q.length, size), aA = 0; aA < eY; aA++) a1R[aA] = bJ.p5(a1Q[aA], 0, max);
			aG1[g7] = a1R
		}
	}
	this.aFo = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aFp, input.click()
	}, this.aFq = function() {
		for (var aFt, aAo, a67 = aC.data, keys = Object.keys(a67), aFr = {}, aA = 0; aA < keys.length; aA++) {
			var key = keys[aA];
			a67[key] instanceof Uint8Array || a67[key] instanceof Uint16Array || a67[key] instanceof Uint32Array ? aFr[key] = Array.from(a67[key]) : aFr[key] = a67[key]
		}
		aFr.canvas = 2 === aFr.mapType && aFr.canvas ? aFr.canvas.toDataURL() : null, aFt = aFr, aFt = JSON.stringify(aFt, null, 2), aFt = new Blob([aFt], {
			type: "application/json"
		}), (aAo = document.createElement("a")).href = URL.createObjectURL(aFt), aAo.download = "tt_scenario.json", aAo.click()
	}
}

function cS() {
	var aGC, aGD, size, iz, hD, id, aGE;

	function aGF(player) {
		return player < aC.jo ? aGC * player : aGC * aC.jo + aGD * (player - aC.jo)
	}
	this.dU = function() {
		aGC = aC.jo < 16 ? 12 : 8, aGD = 4;
		var eY = aGF(aC.eV);
		size = new Uint8Array(aC.eV), iz = new Uint16Array(eY), hD = new Uint32Array(eY), id = new Uint16Array(eY), aGE = new Uint8Array(eY)
	}, this.p4 = function(a6K, aGG) {
		var aGH = this.gb(a6K, aGG),
			aGG = (this.gZ(a6K, aGG, 0), b8.fu.fx(a6K, aGH));
		bb.fy(a6K, aGH - aGG, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.aFX = function(player, aGG) {
		var aGK, aGG = function(player, aGG) {
			var aA, kW = aGF(player);
			for (aA = size[player] - 1; 0 <= aA; aA--)
				if (0 === id[kW + aA] && iz[kW + aA] === aGG) return aA;
			return size[player]
		}(player, aGG);
		aGG !== size[player] && (aGK = hD[aGF(player) + aGG], this.fz(player, aGG), this.iw(player, aGK, aC.eV))
	}, this.jA = function(player, aGG) {
		for (var kW = aGF(player), aA = size[player] - 1; 0 <= aA; aA--)
			if (0 === id[kW + aA] && iz[kW + aA] === aGG) return !0;
		return !1
	}, this.jS = function(player) {
		return player < aC.jo ? size[player] < aGC : size[player] < aGD
	}, this.fe = function(player) {
		return size[player]
	}, this.fk = function(player, aA) {
		return iz[aGF(player) + aA]
	}, this.ff = function(player, aA) {
		return id[aGF(player) + aA]
	}, this.aGL = function(player, aGM) {
		for (var kW = aGF(player), aA = size[player] - 1; 0 <= aA; aA--)
			if (id[kW + aA] === aGM) return aA;
		return -1
	}, this.fl = function(player, aA) {
		return hD[aGF(player) + aA]
	}, this.gb = function(player, aGG) {
		for (var kW = aGF(player), aA = size[player] - 1; 0 <= aA; aA--)
			if (0 === id[kW + aA] && iz[kW + aA] === aGG) return hD[kW + aA];
		return 0
	}, this.aFO = function(player) {
		for (var kW = aGF(player), f0 = 0, aA = size[player] - 1; 0 <= aA; aA--) f0 += hD[kW + aA];
		return f0
	}, this.aGN = function(player) {
		for (var kW = aGF(player), f0 = 0, aA = size[player] - 1; 0 <= aA; aA--) 0 === id[kW + aA] && (f0 += hD[kW + aA]);
		return f0
	}, this.aFD = function(player) {
		for (var kW = aGF(player), g1 = 0, aA = size[player] - 1; 0 <= aA; aA--) 0 < id[kW + aA] && g1++;
		return g1
	}, this.gZ = function(player, aGG, aGK) {
		for (var kW = aGF(player), aA = size[player] - 1; 0 <= aA; aA--) 0 === id[kW + aA] && iz[kW + aA] === aGG && (hD[kW + aA] = aGK)
	}, this.gK = function(player, aA, aGK) {
		hD[aGF(player) + aA] = Math.max(aGK, 0)
	}, this.gL = function(player, aA) {
		aGE[aGF(player) + aA] = 0
	}, this.fm = function(player, aA) {
		return aGE[aGF(player) + aA]
	}, this.iw = function(player, aGK, aGG) {
		b8.fu.a2F(aGG) && bb.lZ[6 - b8.fu.jC(player)]++;
		for (var kW = aGF(player), aA = size[player] - 1; 0 <= aA; aA--)
			if (0 === id[kW + aA] && iz[kW + aA] === aGG) return hD[kW + aA] += aGK, void(hD[kW + aA] = hD[kW + aA] > aC.a2M ? aC.a2M : hD[kW + aA]);
		iz[kW + size[player]] = aGG, hD[kW + size[player]] = aGK, id[kW + size[player]] = 0, aGE[kW + size[player]] = 1, size[player]++, player < aC.jo && (aGG === aC.eI ? aM.yz(player, 5) : player === aC.eI && ae.a58(aGG))
	}, this.aGO = function(player, aGK, aGM) {
		var kW = aGF(player);
		iz[kW + size[player]] = 0, hD[kW + size[player]] = aGK, id[kW + size[player]] = aGM, aGE[kW + size[player]] = 0, size[player]++
	}, this.fz = function(player, dx) {
		var er, kW;
		if (0 !== size[player])
			for (kW = aGF(player), size[player]--, er = dx; er < size[player]; er++) iz[kW + er] = iz[kW + er + 1], hD[kW + er] = hD[kW + er + 1], id[kW + er] = id[kW + er + 1], aGE[kW + er] = aGE[kW + er + 1]
	}, this.aFK = function(player) {
		for (var er, kW, aFU = [], aA = ak.jp - 1; 0 <= aA; aA--)
			for (kW = aGF(ak.jq[aA]), er = size[ak.jq[aA]] - 1; 0 <= er; er--)
				if (0 === id[kW + er] && iz[kW + er] === player) {
					aFU.push(ak.jq[aA]);
					break
				} return aFU
	}
}

function cT() {
	var aGP;

	function aGR(player) {
		var dw, jT;
		return b8.fu.jC(player) && player < aC.jo ? 0 : (dw = aGP[bJ.dl((aC.eV - 1) * af.gM[player], aC.jY)], bd.jl() < 1920 && (dw = Math.max(bJ.dl(100 * (13440 - 6 * bd.jl()), 1920), dw)), jT = ad.jU(player), af.ga[player] > jT && (dw -= bJ.dl(2 *
			dw * (af.ga[player] - jT), jT)), Math.min(Math.max(dw, 0), 700))
	}

	function aGd(mH) {
		for (var gM = af.gM, jq = ak.jq, aA = ak.jp - 1; 0 <= aA; aA--) {
			var g6 = jq[aA];
			b8.fu.fx(g6, bJ.dl(mH * gM[g6], 32))
		}
	}

	function aGa() {
		var vW = aC.eI;
		bM.f5[0] = af.ga[vW] - af.a2J[vW]
	}

	function aGc(dx) {
		var vW = aC.eI;
		bb.lZ[dx] += af.ga[vW] - af.a2J[vW] - bM.f5[0]
	}
	this.db = function() {
		for (var eY = aC.eV, aA = (aGP = new Uint16Array(eY), 0); aA < eY; aA++) aGP[aA] = 100 + aGQ(bJ.dl(25600 * aA, eY - 4), 9)
	}, this.dU = function() {
		0 === aC.data.iIncomeType ? this.a9a = aGR : 1 === aC.data.iIncomeType ? this.a9a = function(player) {
			return bJ.dl(aC.data.iIncomeValue * aGR(player), 64)
		} : this.a9a = function(player) {
			return bJ.dl(aC.data.iIncomeData[player] * aGR(player), 64)
		}
	}, this.ii = function() {
		if (bd.jl() % 10 == 9 && (function() {
				aGa();
				for (var jq = ak.jq, ga = af.ga, aA = ak.jp - 1; 0 <= aA; aA--) {
					var g6 = jq[aA],
						aGb = bJ.dl(ad.a9a(g6) * ga[g6], 1e4);
					b8.fu.fx(g6, Math.max(aGb, 1))
				}
				aGc(9)
			}(), function() {
				if (0 !== aC.data.aIncomeType) {
					if (aGa(), 1 === aC.data.aIncomeType)
						for (var gM = af.gM, jq = ak.jq, mH = aC.data.aIncomeValue, aA = ak.jp - 1; 0 <= aA; aA--) {
							var g6 = jq[aA];
							b8.fu.fx(g6, bJ.dl(mH * gM[g6], 128))
						} else 2 === aC.data.aIncomeType && function() {
							for (var gM = af.gM, jq = ak.jq, mH = aC.data.aIncomeData, aA = ak.jp - 1; 0 <= aA; aA--) {
								var g6 = jq[aA];
								b8.fu.fx(g6, bJ.dl(mH[g6] * gM[g6], 128))
							}
						}();
					aGc(18)
				}
			}(), bd.jl() % 100 == 99)) {
			if (aGa(), 0 === aC.data.tIncomeType) aGd(32);
			else if (1 === aC.data.tIncomeType) aGd(aC.data.tIncomeValue);
			else
				for (var gM = af.gM, jq = ak.jq, mH = aC.data.tIncomeData, aA = ak.jp - 1; 0 <= aA; aA--) {
					var g6 = jq[aA];
					b8.fu.fx(g6, bJ.dl(mH[g6] * gM[g6], 32))
				}
			aGc(8)
		}
	}, this.jU = function(player) {
		return Math.min(100 * af.gM[player], aC.a3C)
	}, this.nz = function(player, o0) {
		b8.fu.fx(o0, bM.f6[0]), bb.oL(player, o0), ae.aGT(player, bM.f6[0] + bM.f6[1]), ae.oM(o0, bM.f6[0]), b8.fu.ou(player)
	}, this.aGU = function() {
		for (var eY = ak.jp, yb = ak.jq, kW = 0, a2K = af.ga, aA = 0; aA < eY; aA++) kW += a2K[yb[aA]];
		return kW
	}, this.aGV = function(aGW) {
		for (var g6, eY = ak.jp, yb = ak.jq, kW = 0, a2K = af.ga, eW = be.eW, aA = 0; aA < eY; aA++) eW[g6 = yb[aA]] === aGW && (kW += a2K[g6]);
		return kW
	}
}

function cV() {
	var aGh, aGi, aGj, aGk, aGl, aGm, aGn, aGo, aGp, aGq, aGr, aGs, aGt, aGu, aGv, aGw, aGx, aGy, aH0, aH1, aAh, aH2, aH3, aHA, aHB, aGz = null,
		aH5 = 0,
		aH6 = !1,
		aH7 = new Float32Array(4),
		aH8 = 0,
		aH9 = !0,
		a8l = 400,
		aHC = 0;

	function pb() {
		aGp = Math.floor(+h.pZ), aGq = Math.floor(.5 * aGp)
	}

	function aHD() {
		var aA, aHI;
		for (tf.font = b8.pX.rM(1, 100 * aGr), aHI = 80 / Math.floor(tf.measureText(b8.zO.y5(aC.a2M)).width), tf.font = b8.pX.rM(1, 100), aA = aC.eV - 1; 0 <= aA; aA--) aGo[aA] = 100 / Math.floor(tf.measureText(af.zM[aA]).width), aGn[aA] = Math.min(
			aHI, aGo[aA])
	}

	function aHJ(aA) {
		return !aHC || (aA = af.ga[aA]) < 1e6 ? 1 : aA < 1e7 ? aH7[0] : aH7[Math.min(Math.floor(Math.log10(aA)) - 6, 3)]
	}

	function aHH(hW) {
		aGy = !1, aGx = 1, aGv = aGw = 0, aH9 && (b8.pX.textAlign(hW, 1), b8.pX.textBaseline(hW, 1));
		for (var aHP, aHQ, aA, aHR, fontSize, aHS, m5 = i9 / iA, m6 = iB / iA, mI = (h.i + i9) / iA, mJ = (h.j + iB) / iA, aHT = 0 !== af.ld[aC.eI] && !b8.fu.jC(aC.eI), er = ak.jp - 1; 0 <= er; er--) aA = ak.jq[er], (fontSize = Math.floor(aGu * iA *
			aHJ(aA) * aGn[aA] * aGl[aA])) < aGt || aGp <= fontSize || aGj[aA] + aGl[aA] > m5 && aGj[aA] < mI && aGk[aA] + aGm[aA] > m6 && aGk[aA] < mJ && (aHP = Math.floor(h.i * (aGj[aA] + aGl[aA] / 2 - m5) / (mI - m5)), aHQ = Math.floor(h.j * (
			aGk[aA] + aGm[aA] / 2 - m6) / (mJ - m6) - .1 * fontSize), aHR = ab.a6p[aA], hW.font = b8.pX.rM(1 === af.a2B[aA] ? 4 : 1, fontSize), hW.fillStyle = aHU(fontSize, aHR % 2), aHC ? aHV(hW, aA, fontSize, aHP, aHQ, aHR) : aHW(aA,
			fontSize, aHP, aHQ, hW), aGy = !0, 0 < aAh[aA] ? function(aHP, aHQ, fontSize, aA, hW) {
			0 === jZ[aA] ? ai.qn.xw(aH1[aA]) ? (function(aHP, aHQ, fontSize, player, oA, hW) {
				for (var w4 = aHQ, hV = (hW.globalAlpha = aHe(fontSize), aHJ(player) * (aHC ? aH8 : aGo[player])), w3 = aHP - .5 * fontSize / hV - .9 * fontSize, es = 0; es < 2; es++) hW.fillText(ai.qn.xq(oA), w3, w4), w3 = aHP + .5 *
					fontSize / hV + .9 * fontSize;
				hW.globalAlpha = 1
			}(aHP, aHQ, fontSize, aA, aH1[aA], hW), aHY(aHP, aHQ, fontSize, 0, 0, hW)) : ai.qn.xy(aH1[aA]) ? (aHh(aHP, aHQ, fontSize, aH1[aA], 0, hW), aHY(aHP, aHQ, fontSize, 0, 1, hW)) : (aHh(aHP, aHQ, fontSize, aH1[aA], 1, hW), aHY(aHP,
				aHQ, fontSize, 1, 0, hW)) : aHh(aHP, aHQ, fontSize, aH1[aA], 0, hW)
		}(aHP, aHQ, fontSize, aA, hW) : 0 === jZ[aA] && aHY(aHP, aHQ, fontSize, 0, 0, hW), aHT && (0 < aAh[aA + aC.eV] || 0 < aAh[aA + 2 * aC.eV] || 0 < aAh[aA + 3 * aC.eV] || 0 < aAh[aA + 4 * aC.eV]) && function(aHP, aHQ, fontSize, aA, hW) {
			var et, g1 = -1;
			for (et = 4; 1 <= et; et--) 0 < aAh[aA + et * aC.eV] && g1++;
			for (et = 1; et < 5; et++) 0 < aAh[aA + et * aC.eV] && (! function(aHP, aHQ, fontSize, et, aA, aHc, dk, hW) {
				var a1e;
				if (1 === et) {
					aA = aH1[aA + aC.eV];
					if (!ai.qn.xx(aA)) return function(aHP, aHQ, fontSize, oA, aHc, hW) {
						hW.globalAlpha = aHe(fontSize);
						aHP -= .534 * aHc * fontSize, aHc = aHQ + 1.59 * fontSize;
						hW.font = b8.pX.rM(0, .785 * fontSize), hW.fillText(ai.qn.xq(oA), aHP, aHc), hW.globalAlpha = 1
					}(aHP, aHQ, fontSize, aA, aHc, hW);
					a1e = ai.vV.xP[aA - 1024 + ai.qn.xb]
				} else a1e = 2 === et ? aK.a3s()[4].canvas[+(dk < 255)] : (3 === et ? aK.a3s()[5] : aK.a3s()[6]).canvas[0];
				aA = ai.vV.xQ, dk = .8 * fontSize / aA, et = aHP - .5 * dk * aA - .534 * aHc * fontSize, aHP = aHQ + 1.4 * dk * aA;
				hW.setTransform(dk, 0, 0, dk, et, aHP), hW.globalAlpha = aHe(fontSize), hW.drawImage(a1e, 0, 0), hW.globalAlpha = 1, hW.setTransform(1, 0, 0, 1, 0, 0)
			}(aHP, aHQ, fontSize, et, aA, g1, aAh[aA + et * aC.eV], hW), g1 -= 2)
		}(aHP, aHQ, fontSize, aA, hW), (aHS = aGr * fontSize) < aGt || (hW.font = b8.pX.rM(1, aHS), aHQ += Math.floor(.78 * fontSize), aHC ? aHW(aA, aHS, aHP, aHQ, hW) : aHV(hW, aA, aHS, aHP, aHQ, aHR)))
	}

	function aHW(aA, fontSize, ef, eh, hW) {
		var ___id = aA;
		var showName = aA < aC.jo || !__fx.settings.hideBotNames;
		if (showName) hW.fillText(af.zM[aA], ef, eh), aA < aC.jo && 2 !== af.a2B[aA] || (aA = fontSize / aGo[aA], hW.fillRect(ef - .5 * aA, eh + b8.pX.xr * fontSize, aA, Math.max(1, .1 * fontSize)));
		aHC && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (hW.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			hW.fillText(__fx.utils.getDensity(___id), ef, showName ? eh + fontSize : eh)
		);
	}

	function aHV(hW, aA, fontSize, aHP, aHQ, aHR) {
		var ___id = aA;
		aA = b8.zO.y5(af.ga[aA]);
		aHR >> 1 & 1 ? (hW.lineWidth = .05 * fontSize, hW.strokeStyle = aHU(fontSize, aHR % 2), hW.strokeText(aA, aHP, aHQ)) : (1 < aHR && (hW.lineWidth = .12 * fontSize, hW.strokeStyle = aHU(fontSize, aHR), hW.strokeText(aA, aHP, aHQ)), hW.fillText(
			aA, aHP, aHQ));
		aHC || __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (hW.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)), hW.fillText(__fx.utils.getDensity(___id), aHP, aHQ + fontSize))
	}

	function aHY(aHP, aHQ, fontSize, aHc, aHd, hW) {
		var a4R = .95 * fontSize / aH3,
			aHP = aHP - .5 * a4R * aH2 + .8 * aHc * fontSize,
			aHc = aHQ - 1.76 * a4R * aH3 - (.35 - b8.pX.xr + .7) * aHd * fontSize;
		hW.setTransform(a4R, 0, 0, a4R, aHP, aHc), hW.globalAlpha = aHe(fontSize), hW.drawImage(aa.get(4), 0, 0), hW.globalAlpha = 1, hW.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aHh(aHP, aHQ, fontSize, oA, aHc, hW) {
		var hQ, w3, a4R;
		hW.globalAlpha = aHe(fontSize), ai.qn.xx(oA) ? (hQ = ai.vV.xQ, hW.setTransform(a4R = 1.1 * fontSize / hQ, 0, 0, a4R, w3 = aHP - .5 * a4R * hQ - .8 * aHc * fontSize, a4R = aHQ - 1.55 * a4R * hQ), hW.drawImage(ai.vV.xP[oA - 1024 + ai.qn.xb], 0,
			0), hW.setTransform(1, 0, 0, 1, 0, 0)) : (w3 = aHP - .8 * aHc * fontSize, a4R = aHQ - (.35 - b8.pX.xr + 1) * fontSize, hW.fillText(ai.qn.xq(oA), w3, a4R)), hW.globalAlpha = 1
	}

	function aHU(fontSize, aHR) {
		return aGq <= fontSize && fontSize < aGp ? be.aHj[aHR] + aHe(fontSize).toFixed(3) + ")" : be.aHk[aHR]
	}

	function aHe(fontSize) {
		return aGq <= fontSize && fontSize < aGp ? 1 - (fontSize - aGq) / (aGp - aGq) : 1
	}

	function aHt(hV, i) {
		return 1 + Math.floor(aGs * hV * i)
	}

	function aHq(aA) {
		for (var left = aGj[aA], er = aGj[aA] - af.iN[aA] - 1; 0 <= er; er--)
			if (!aHv(aA, --left, aGk[aA], aGm[aA])) {
				left++;
				break
			} var right = aGj[aA];
		for (er = af.iO[aA] - aGj[aA] - aGl[aA]; 0 <= er; er--)
			if (!aHv(aA, ++right + aGl[aA] - 1, aGk[aA], aGm[aA])) {
				right--;
				break
			} var ef = Math.floor((left + right) / 2),
			top = aGk[aA];
		for (er = aGk[aA] - af.iP[aA] - 1; 0 <= er; er--)
			if (!aHw(aA, ef, --top, aGl[aA])) {
				top++;
				break
			} var bottom = aGk[aA];
		for (er = af.iQ[aA] - aGk[aA] - aGm[aA]; 0 <= er; er--)
			if (!aHw(aA, ef, ++bottom + aGm[aA] - 1, aGl[aA])) {
				bottom--;
				break
			} var eh = Math.floor((top + bottom) / 2);
		aHn(aA, ef, eh, aGl[aA], aGm[aA]) && (aGj[aA] = ef, aGk[aA] = eh)
	}

	function aHn(player, ef, eh, i, j) {
		eb = Math.floor(.2 * i);
		for (var eb, et = ef + i - 1; ef <= et; et--)
			if (!aHv(player, et, eh, j)) return;
		for (et = eh + j - 1 - (eb = (eb = Math.floor(.25 * j)) < 1 ? 1 : eb); eh + eb <= et; et--)
			if (!aHw(player, ef, et, i)) return;
		return 1
	}

	function aHv(player, ef, eh, j) {
		return ab.wu(player, 4 * (eh * bQ.ej + ef)) && ab.wu(player, 4 * ((eh + j - 1) * bQ.ej + ef))
	}

	function aHw(player, ef, eh, i) {
		return ab.wu(player, 4 * (eh * bQ.ej + ef)) && ab.wu(player, 4 * (eh * bQ.ej + ef + i - 1))
	}
	this.dU = function() {
		if (aHC = bh.kn.data[7].value || 8 === aC.k5, a8l = 0 === (a8l = bh.kn.data[11].value) ? 280 : 1 === a8l ? 187 : 112, aGy = !1, aGu = .88, aGr = .5, aGs = 1.8, aGt = 12 - 3 * bh.kn.data[9].value, aGi = aGh = 0, aGj = new Uint16Array(aC
				.eV), aGk = new Uint16Array(aC.eV), aGl = new Uint16Array(aC.eV), aGm = new Uint16Array(aC.eV), aGn = new Float32Array(aC.eV), aGo = new Float32Array(aC.eV), aH1 = new Uint16Array(2 * aC.eV), aAh = new Uint8Array(5 * aC.eV), aHA =
			new Uint8Array(aC.eV), aHB = new Uint8Array(aC.eV), aH9 || (aGz = aGz || document.createElement("canvas")), pb(), aGw = aGv = 0, aGx = 1, aHC) {
			var aA, aHI;
			for (aHD(), tf.font = b8.pX.rM(1, 100), aHI = 100 / Math.floor(tf.measureText("900 000").width), aA = aC.eV - 1; 0 <= aA; aA--) aGn[aA] = Math.min(aHI, 2 * aGo[aA]);
			aH8 = aHI, aH7[0] = 100 / (aHI * Math.floor(tf.measureText("5 000 000").width)), aH7[1] = 100 / (aHI * Math.floor(tf.measureText("50 000 000").width)), aH7[2] = 100 / (aHI * Math.floor(tf.measureText("500 000 000").width)), aH7[3] =
				100 / (aHI * Math.floor(tf.measureText("1 000 000 000").width))
		} else aHD();
		! function() {
			var aA;
			for (aA = aC.eV - 1; 0 <= aA; aA--) af.gM[aA] < 12 ? (aGj[aA] = af.iN[aA] + 1, aGk[aA] = af.iP[aA] + 1, aGl[aA] = 1, aGm[aA] = 1) : (aGj[aA] = af.iN[aA], aGk[aA] = af.iP[aA] + 1, aGl[aA] = 4, aGm[aA] = 2);
			if (aC.gu)
				for (aA = 0; aA < aC.jo; aA++) aGl[aA] = 0;
			aH2 = aa.get(4).width, aH3 = aa.get(4).height
		}()
	}, this.aGT = function(g6, a5O) {
		a5O > 18 * af.gM[g6] ? (aHB[g6] = 6, ab.a6p[g6] = 2 + ab.a6p[g6] % 2) : (aHA[g6] = 4, (ab.a6p[g6] < 2 || 3 < ab.a6p[g6]) && (ab.a6p[g6] = 6 + ab.a6p[g6] % 2))
	}, this.oM = function(g6, a5O) {
		a5O > 6 * af.gM[g6] ? (aHB[g6] = 6, ab.a6p[g6] = 4 + ab.a6p[g6] % 2) : (aHA[g6] = 4, (ab.a6p[g6] < 4 || 5 < ab.a6p[g6]) && (ab.a6p[g6] = 8 + ab.a6p[g6] % 2))
	}, this.resize = function() {
		pb(), aH9 || aHH(aH0)
	}, this.a38 = function() {
		for (var aA = 0; aA < aC.jo; aA++) af.iO[aA] - af.iN[aA] != 3 || af.iQ[aA] - af.iP[aA] != 3 ? (aGj[aA] = af.iN[aA] + (af.iO[aA] !== af.iN[aA] ? 1 : 0), aGk[aA] = af.iP[aA], aGl[aA] = 1, aGm[aA] = 1) : (aGj[aA] = af.iN[aA], aGk[aA] = af
			.iP[aA] + 1, aGl[aA] = 4, aGm[aA] = 2)
	}, this.p6 = function(player, dx, aHK) {
		! function(player, dx, aHK) {
			player += dx * aC.eV;
			0 === dx ? aH1[player] === aHK && 0 < aAh[player] ? aAh[player] = 0 : (aH1[player] = aHK, aAh[player] = ai.qn.xw(aHK) ? 255 : 64) : 1 === dx ? (aAh[player] = 64, aH1[player] = aHK) : aAh[player] = aHK
		}(player, dx, aHK), 2 === aC.yn && this.lP(!0)
	}, this.te = function() {
		aH9 ? aHH(tf) : aGy && (1 !== aGx ? (tf.imageSmoothingEnabled = !0, tf.setTransform(aGx, 0, 0, aGx, 0, 0), tf.drawImage(aGz, -aGv / aGx, -aGw / aGx), tf.setTransform(1, 0, 0, 1, 0, 0), tf.imageSmoothingEnabled = !1) : tf.drawImage(aGz, -
			aGv, -aGw))
	}, this.a7Z = function(hu, hx) {
		aGv += hu, aGw += hx
	}, this.a0J = function(hu, hx) {
		ae.a7Z(hu, hx)
	}, this.zoom = function(a1D, ks, kt) {
		aGx *= a1D, aGv = (aGv + ks) * a1D - ks, aGw = (aGw + kt) * a1D - kt
	}, this.lP = function(bp) {
		return !aH9 && !(!aH6 && !bp && bd.e7 < aH5 + (1 === aGx && 0 === aGv && 0 === aGw && (aC.a3b() || aC.gu || 2 === aC.yn) ? 1e3 : a8l) || (aH6 = !1, aH5 = bd.e7, aHH(aH0), 0))
	}, this.aHN = function(aA) {
		return aHJ(aA) * aGn[aA]
	}, this.aHO = function(player) {
		return aGn[player]
	}, this.ii = function() {
		bd.jl() % 10 == 9 && (aH6 = aC.a3d() && !aC.a3b()), !aC.a3b() && 4 <= ++aGi && function() {
			var aA, er, es;
			for (aGi = 0, es = 4; 1 <= es; es--)
				for (er = ak.jp - 1; 0 <= er; er--) aA = ak.jq[er] + es * aC.eV, 0 < aAh[aA] && aAh[aA] < 255 && aAh[aA]--;
			if (2 !== aC.yn)
				for (er = ak.jp - 1; 0 <= er; er--) aA = ak.jq[er], 0 < aAh[aA] && aAh[aA] < 255 && aAh[aA]--
		}();
		var aA, er, eY = Math.floor(.1 * ak.jp);
		for (eY = (eY = eY < 8 ? 8 : eY) > ak.jp ? ak.jp : eY, aA = aGh + eY - 1; aGh <= aA; aA--) er = aA % ak.jp, ! function(aA) {
			var hV = aHJ(aA) * aGn[aA];
			0 < aGl[aA] && aHn(aA, aGj[aA], aGk[aA], aGl[aA], aGm[aA]) ? ! function(aA) {
				for (var ef, eh, i, j, eC = !1, es = 0; es < 8; es++) {
					if (i = aGl[aA] + 2, j = aGm[aA] + 2, i > af.iO[aA] - af.iN[aA] + 1 || j > af.iQ[aA] - af.iP[aA] + 1) return eC;
					if (ef = aGj[aA] - 1, eh = aGk[aA] - 1, !aHn(aA, ef, eh, i, j)) return eC;
					aGj[aA] = ef, aGk[aA] = eh, aGl[aA] = i, aGm[aA] = j, eC = !0
				}
				return eC
			}(aA) && function(aA, hV) {
				for (var ef, eh, i, j, eC = !1, aAq = aGl[aA], mH = 1 + Math.floor(.02 * aAq), es = 1; es < 5; es++) {
					if ((i = aAq + es * mH) > af.iO[aA] - af.iN[aA] + 1) return eC;
					if ((j = aHt(hV, i)) > af.iQ[aA] - af.iP[aA] + 1) return eC;
					ef = af.iN[aA] + Math.floor(Math.random() * (af.iO[aA] - af.iN[aA] + 2 - i)), eh = af.iP[aA] + Math.floor(Math.random() * (af.iQ[aA] - af.iP[aA] + 2 - j)), aHn(aA, ef, eh, i, j) && (aGj[aA] = ef, aGk[aA] = eh, aGl[
						aA] = i, aGm[aA] = j, eC = !0)
				}
				return eC
			}(aA, hV) && aHq(aA) : ! function(aA, hV) {
				var j, ef = aGj[aA] + 1,
					eh = aGk[aA] + 1,
					i = aGl[aA] - 2;
				for (;;) {
					if (i < 1) {
						aGl[aA] = 0;
						break
					}
					if (j = aHt(hV, i), aHn(aA, ef, eh, i, j)) return aGj[aA] = ef, aGk[aA] = eh, aGl[aA] = i, aGm[aA] = j, 1;
					ef++, eh++, i -= 2
				}
				return
			}(aA, hV) ? function(aA, hV) {
				var ef, eh, i, j, es, mN, j5 = af.iO[aA] - af.iN[aA] + 1,
					aHu = Math.floor(.02 * j5);
				for (mN = -6 * (aHu = aHu < 1 ? 1 : aHu), es = j5; mN <= es; es -= aHu)
					if (j = aHt(hV, i = 0 < es ? es : 1), ef = af.iN[aA] + Math.floor(Math.random() * (af.iO[aA] - af.iN[aA] + 2 - i)), eh = af.iP[aA] + Math.floor(Math.random() * (af.iQ[aA] - af.iP[aA] + 2 - j)), aHn(aA, ef, eh, i, j))
						return aGj[aA] = ef, aGk[aA] = eh, aGl[aA] = i, aGm[aA] = j
			}(aA, hV) : aHq(aA)
		}(ak.jq[er]);
		aGh = (aGh += eY) % ak.jp
	}, this.lK = function() {
		var aA, g6, he, hf;
		if (bd.jl() % 4 == 1)
			for (aA = ak.jp - 1; 0 <= aA; aA--) g6 = ak.jq[aA], ab.a6p[g6] < 2 || ((he = Math.max(aHA[g6] - 1, 0)) === (hf = Math.max(aHB[g6] - 1, 0)) ? 0 === he && (ab.a6p[g6] %= 2) : 0 === hf && ab.a6p[g6] < 6 && (ab.a6p[g6] += 4), aHA[g6] =
				he, aHB[g6] = hf)
	}, this.a58 = function(player) {
		var aA = player + 2 * aC.eV,
			dk = aAh[aA];
		return 0 < dk && (aM.yu(50, player), aAh[aA] = 0, 255 === dk)
	}, this.a4B = function(player) {
		return 255 === aAh[player + 2 * aC.eV]
	}
}

function cX() {
	var aHx, aHy;
	this.dU = function() {
		aHx =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), aHy =
			"Pestilent Dominion;Wretched Realm;Damned Province;Corrupt Zone;Cursed Territory;Blight Nation;Haunted Expanse;Malevolent State;Ruined Empire;Contaminated Land;Epidemic Domain;Forsaken District;Abandoned Wasteland;Necrotic Enclave;Tainted Domain;Decayed Principality;Infested Region;Malignant Territory;Toxic Dominion;Ravaged Sector;Ghostly Realm;Plagued Commonwealth;Afflicted State;Desolate Nation;Apocalyptic Zone;Radiated Province;Deathly District;Pestilence Haven;Doom Territory;Malefic Expanse;Abandoned State;Cursed Haven;Corroded Zone;Hauntland;Noxious Nation;Infected Enclave;Ruinous Domain;Wasteland Woe;Rotten Principality;Voided Land;Vile Dominion;Catastrophic Region;Eerie Expanse;Desolation State;Forsaken Outpost;Contagion District;Damaged Province;Abhorrent Sector;Accursed Nation;Doomstruck Land;Radiant Ruin;Deathly Enclave;Malefic Dominion;Plague District;Infected Haven;Corrupt State;Pestilent Territory;Razed Realm;Haunted Wasteland;Toxic Sector;Cursed Dominion;Decaying Province;Forsaken Enclave;Ruinous Region;Malignant Haven;Infested State;Ghostly Nation;Tainted Territory;Damned District;Radiated Dominion;Desolate Expanse;Apocalyptic Land;Death Zone;Wretched State;Malevolent Haven;Plagued Nation;Noxious Domain;Voided Territory;Eerie Sector;Accursed Province;Necrotic District;Doom Haven;Haunt Realm;Rotten Nation;Forsaken Territory;Infected State;Abhorrent Expanse;Malignant Land;Toxic Dominion;Ruined District;Ghostland;Cursed Sector;Radiant Nation;Necromancer"
			.split(";");
		for (var a5Q = ["K ", " Y", "E ", " Z", " z", " s", "S "], aHz = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], aA = aHx.length - 1; 0 <= aA; aA--)
			for (var er = a5Q.length - 1; 0 <= er; er--) aHx[aA] = aHx[aA].replace(a5Q[er], aHz[er]);
		if (__fx.settings.realisticNames) aHx = realisticNames;
	}, this.a3N = function() {
		var eY = aC.jo,
			zM = af.zM,
			zQ = af.zQ,
			playerNamesData = aC.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < eY)
			for (var aA = 0; aA < eY; aA++) zM[aA] = zQ[aA] = "Player " + aw.j6(1e3);
		else
			for (aA = 0; aA < eY; aA++) zM[aA] = zQ[aA] = playerNamesData[aA]
	}, this.a6 = function() {
		if (9 === aC.k5) {
			for (var dw = aw.random(), aI5 = aHx, aI6 = aHy, hD = aD.hD, eY = aI5.length, kW = aC.data.teamPlayerCount[7], zM = af.zM, zQ = af.zQ, aA = kW - 1; aA >= aC.jo; aA--) zM[aA] = zQ[aA] = aI5[(aA + dw) % eY];
			for (eY = aI6.length - 1, aA = kW; aA < aC.eV; aA++) zM[aA] = zQ[aA] = aI6[hD[aA] ? eY : aA % eY]
		} else(2 === aC.data.playerNamesType ? function() {
			for (var eY = aC.eV, zM = af.zM, zQ = af.zQ, playerNamesData = aC.data.playerNamesData, aA = aC.jo; aA < eY; aA++) zM[aA] = zQ[aA] = playerNamesData[aA]
		} : 1 === aC.data.playerNamesType ? function() {
			for (var zM = af.zM, zQ = af.zQ, aA = aC.jo; aA < aC.eV; aA++) zM[aA] = zQ[aA] = "Bot " + aw.j6(1e3)
		} : function() {
			for (var aI5 = aHx, eY = aI5.length, dw = aw.random(), zM = af.zM, zQ = af.zQ, aA = aC.jo; aA < aC.eV; aA++) zM[aA] = zQ[aA] = aI5[(aA + dw) % eY]
		})()
	}
}

function cq() {
	this.aI7 = [], this.aI8 = [], this.dU = function() {
		this.aI7 = [], this.aI8 = []
	}, this.ii = function() {
		0 <= this.aI7.length && this.aI9(this.aI7), 0 <= this.aI8.length && this.aI9(this.aI8)
	}, this.aI9 = function(g) {
		for (var es = -1, aA = g.length - 1; 0 <= aA; aA--)
			if (g[aA].e7--, g[aA].e7 <= 0) {
				es = aA;
				break
			} for (aA = es; 0 <= aA; aA--) g.shift()
	}, this.a40 = function(id, yb, aIA) {
		return this.eu(this.aI7, id, yb, aIA)
	}, this.aIB = function(id, yb, aIA) {
		return this.eu(this.aI8, id, yb, aIA)
	}, this.eu = function(g, id, yb, aIA) {
		return ! function(g, id, yb) {
			var aA, hM;
			for (aA = yb.length - 1; 0 <= aA; aA--)
				for (hM = g.length - 1; 0 <= hM; hM--)
					if (g[hM].player === yb[aA] && id === g[hM].id) return 1;
			return
		}(g, id, yb) && (aIA && function(g, id, yb) {
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
	this.zQ = new Array(aC.eV), this.zM = new Array(aC.eV), this.a2B = new Uint8Array(aC.eV), this.ld = new Uint8Array(aC.eV), this.iN = new Uint16Array(aC.eV), this.iP = new Uint16Array(aC.eV), this.iO = new Uint16Array(aC.eV), this.iQ =
		new Uint16Array(aC.eV), this.gM = new Uint32Array(aC.eV), this.wV = new Uint32Array(aC.eV), this.ga = new Uint32Array(aC.eV), this.g0 = null, this.gE = null, this.gF = null, this.ey = null, this.ot = new Uint16Array(aC.eV), this.ir =
		new Uint16Array(aC.eV), this.is = new Uint16Array(aC.eV), this.zL = new Uint16Array(aC.eV), this.zK = new Uint8Array(aC.eV), this.a2J = new Uint16Array(aC.eV), this.dU = function() {
			this.zQ.fill(""), this.zM.fill(""), this.a2B.fill(0), this.ld.fill(0), this.iN.fill(0), this.iP.fill(0), this.iO.fill(0), this.iQ.fill(0), this.gM.fill(0), this.wV.fill(0), this.ga.fill(0), this.g0 = new Array(aC.eV), this.gE = new Array(
				aC.eV), this.gF = new Array(aC.eV), this.ey = new Array(aC.eV), this.ot.fill(0), this.ir.fill(0), this.is.fill(0), this.zL.fill(0), this.zK.fill(0), this.a2J.fill(0)
		}
}

function co() {
	this.aBA = function(player) {
		aF.lc(player), aC.yp++, af.a2B[player] = 2, af.zL[player] = bg.zc.aFT(), player === aC.eI && (aW.show(!1, !1), aV.a9O(), bP.yY.zI()), ae.a58(player)
	}
}

function cQ() {
	this.jq = null, this.jp = 0, this.a3R = function() {
		for (this.jp = 0, aA = aC.eV - 1; 0 <= aA; aA--) 0 !== af.ld[aA] && this.jp++;
		this.jq = new Uint16Array(this.jp);
		for (var eY = 0, aA = 0; aA < aC.eV; aA++) 0 !== af.ld[aA] && (this.jq[eY++] = aA)
	}, this.lJ = function() {
		for (var gM = af.gM, wV = af.wV, zK = af.zK, jq = ak.jq, aA = ak.jp - 1; 0 <= aA; aA--) {
			var dk, g6 = jq[aA];
			gM[g6] <= bJ.dl(wV[g6], 4) ? aj.dd(g6) : gM[g6] >= wV[g6] ? (dk = gM[g6], 250 <= (wV[g6] = dk) && (zK[g6] = 1)) : wV[g6] -= Math.max(1, bJ.dl(wV[g6] - gM[g6], 1e3))
		}
		this.aIF()
	}, this.aIF = function() {
		for (var ld = af.ld, kV = this.jq, aA4 = this.jp, aA = aA4 - 1; 0 <= aA; aA--) 0 === ld[kV[aA]] && (kV[aA] = kV[--aA4]);
		this.jp = aA4
	}
}

function cY() {
	var aIG;
	this.kE = null, this.kD = 0, this.dU = function() {
		aIG = [], 9 === aC.k5 && this.aIH()
	}, this.aIH = function() {
		var aII = [60, 80, 105, 150, 190, 333];
		this.kE = [0, 0, 0, 0, 0, 0], this.kD = 0, aC.jo <= aII[0] ? (this.kD = 256 - bJ.dl(256 * aC.jo, aII[0]), this.kE[5] = bJ.p5(bJ.dl(aC.jo - 6, 6), 0, 7), this.kE[0] = aC.eV - aC.jo - this.kD - this.kE[5]) : (this.kE[5] = 7 + bJ.dl(100 * (
			aC.jo - 60), 158), this.kE[0] = 512 - aC.jo - this.kE[5]), aC.k9 = aC.eV - aC.jo, aC.data.numberTeams = (0 < aC.jo) + (0 < aC.k9), aC.data.playerCount = aC.w1 = aC.jo + aC.k9, aC.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0,
			0, 0, 0, aC.jo + this.kD, aC.k9 - this.kD
		]), aC.a3H.a3L()
	}, this.aFa = function(player) {
		aIG.push({
			player: player,
			g1: 14 + aw.j6(20)
		})
	}, this.ii = function() {
		if (9 === aC.k5)
			for (var aA = aIG.length - 1; 0 <= aA; aA--) --aIG[aA].g1 <= 0 && (ae.p6(aIG[aA].player, 0, ai.qn.xe + ai.qn.xs), aIG.splice(aA))
	}
}

function d5() {
	function aIX() {
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

	function aIP(aA) {
		return 1 !== aA && bQ.aBd(aA) && aA !== bQ.aIY()
	}
	this.aIK = 22, this.aFl = 4096, this.ej = 0, this.ek = 0, this.vS = null, this.vO = null, this.vP = null, this.vT = null, this.eE = 0, this.mapSeed = 0, this.vQ = !1, this.vR = new aIL, this.vI = new aIM, this.a5W = new aIN, this.dU =
function() {
		this.vI.dU()
	}, this.a6 = function(map, aIO) {
		((map %= this.aIK) !== this.eE || aIP(this.eE) && aIO !== this.mapSeed) && (this.vQ = !1, this.vR.aIQ(), aw.a3M(map), this.eE = map, this.mapSeed = aIO, aIP(map) && (bQ.vI.vJ[map].aIR = aIO), this.aBd(this.eE) ? (map = bQ.vI.vJ[this.eE],
			this.ej = map.i, this.ek = map.j, aw.a3M(map.aIR), ao.a6([this.ej, this.ek, map.li, map.lf]), aIT(), an.aIU(), ao.aIV()) : aIS())
	}, this.aIW = function(map, aIO) {
		var fG = aIX(),
			map = (this.a6(map, aIO), this.vR.aIQ(), aIX());
		return this.ej = fG.ej, this.ek = fG.ek, this.vS = fG.vS, this.vO = fG.vO, this.vP = fG.vP, this.vT = fG.vT, this.eE = fG.eE, this.mapSeed = fG.mapSeed, map
	}, this.a3h = function(canvas) {
		canvas && this.vS !== canvas && (this.ej = canvas.width, this.ek = canvas.height, this.vS = canvas, this.vO = this.vS.getContext("2d", {
			alpha: !1
		}), this.hT = this.vO.getImageData(0, 0, this.ej, this.ek), this.vT = this.hT.data, this.eE = this.aIY(), this.mapSeed = 0, bQ.vI.vJ[this.eE].name = aC.data.mapName)
	}, this.eD = function(aA) {
		return 3 === aA || 7 === aA || 9 === aA || 21 === aA || aA === this.aIY()
	}, this.aIZ = function(aA) {
		return 2 === aA || 7 === aA || 9 === aA || 20 === aA
	}, this.aIa = function(aA) {
		return 1 === aA
	}, this.aIY = function() {
		return this.aIK
	}, this.aBd = function(aA) {
		return void 0 === this.vI.vJ[aA].aIb
	}, this.a3g = function(pP) {
		return 0 === pP.mapType ? pP.mapProceduralIndex < 10 ? pP.mapProceduralIndex : 10 + pP.mapProceduralIndex : 1 === pP.mapType ? pP.mapRealisticIndex + 10 : void 0
	}, this.aBe = function(pP, aIc) {
		0 === pP.mapType ? pP.mapProceduralIndex = aIc < 10 ? aIc : aIc - 10 : 1 === pP.mapType && (pP.mapRealisticIndex = aIc - 10)
	}
}

function aIL() {
	function aIl() {
		bQ.vR.ii()
	}

	function aIr(g6, aIq) {
		0 < aIq && (bQ.vT[g6] += aIq, bQ.vT[g6 + 1] += aIq, bQ.vT[g6 + 2] += aIq)
	}

	function h1(g6) {
		return bQ.vT[g6 + 2] > bQ.vT[g6] && bQ.vT[g6 + 2] > bQ.vT[g6 + 1]
	}
	this.a7l = -1, this.zq = 0, this.aId = 0, this.aIe = 8, this.aIf = 32, this.aIg = 8, this.aIh = 32, this.aIi = [0, 0], this.a6p = [0, 0, 0, 0], this.iI = null, this.aIj = !0, this.aIk = !1, this.aIQ = function() {
		-1 !== this.a7l && clearTimeout(this.a7l), this.a7l = -1, this.iI = null, ao.aIV()
	}, this.dU = function() {
		7 === aZ.zx() || this.aIk || (this.aIj = !0, this.zq = 0, this.aId = 1, this.aIi = [bQ.vI.vJ[bQ.eE].vl[0], bQ.vI.vJ[bQ.eE].vm[0]], this.a6p = [bQ.vI.vJ[bQ.eE].aIb[3], bQ.vI.vJ[bQ.eE].aIb[4], bQ.vI.vJ[bQ.eE].aIb[5], bQ.vI.vJ[bQ.eE].aIb[
			6]], this.aIe = bQ.vI.vJ[bQ.eE].aIb[7], this.aIf = bQ.vI.vJ[bQ.eE].aIb[8], this.aIg = bQ.vI.vJ[bQ.eE].aIb[9], this.aIh = bQ.vI.vJ[bQ.eE].aIb[10], this.aIj ? this.a7l = setTimeout(aIl, 16) : this.ii())
	}, this.ii = function() {
		if (8 === aZ.zx() && aG.lw()) this.a7l = setTimeout(aIl, 16);
		else {
			if (0 === this.zq) {
				var aIR = aw.aIm();
				if (aw.a3M(bQ.vI.vJ[bQ.eE].aIb[2]), ao.a6([bQ.ej, bQ.ek, bQ.vI.vJ[bQ.eE].aIb[0], bQ.vI.vJ[bQ.eE].aIb[1]]), aw.a3M(aIR), this.iI = ao.aIn(), this.zq++, this.aIj) return void(this.a7l = setTimeout(aIl, 16))
			}
			for (var g6, eK, aIR = this.aIj ? 10 : 1e6, aIR = bQ.ek - this.aId - 1 < aIR ? bQ.ek - this.aId - 1 : aIR, wi = this.aId + aIR, eh = this.aId; eh < wi; eh++)
				for (var ef = 1; ef < bQ.ej - 1; ef++) h1(g6 = 4 * (eK = ef + eh * bQ.ej)) ? this.aIo(g6, eK, 1) : (this.aIo(g6, eK, 0), function(ef, eh, g6) {
					return 1 < ef && h1(g6 - 4) || ef < bQ.ej - 2 && h1(g6 + 4) || 1 < eh && h1(g6 - 4 * bQ.ej) || eh < bQ.ek - 2 && h1(g6 + 4 * bQ.ej)
				}(ef, eh, g6) && this.aIp(ef, eh));
			this.aId = wi, this.aId >= bQ.ek - 1 ? (bQ.vO.putImageData(bQ.vP, 0, 0, 1, 1, bQ.ej - 2, bQ.ek - 2), bd.dc = !0, this.aIQ()) : this.aIj && (this.a7l = setTimeout(aIl, 16))
		}
	}, this.aIo = function(g6, eK, dx) {
		aIr(g6, Math.floor(this.aIi[dx] + this.a6p[dx] * this.iI[eK] / 1e4) - bQ.vT[g6])
	}, this.aIs = function(g6, dw, aIt, dx, a6p) {
		aIr(g6, Math.floor(this.aIi[dx] + (1 - dw / aIt) * a6p) - bQ.vT[g6])
	}, this.aIp = function(ks, kt) {
		for (var g6, dw, aIt, a7b = ks - this.aIf, aIu = kt - this.aIf, wj = ks + this.aIf, wi = kt + this.aIf, a7b = a7b < 1 ? 1 : a7b, wj = wj > bQ.ej - 2 ? bQ.ej - 2 : wj, wi = wi > bQ.ek - 2 ? bQ.ek - 2 : wi, eh = aIu < 1 ? 1 : aIu; eh <=
			wi; eh++)
			for (var ef = a7b; ef <= wj; ef++) h1(g6 = 4 * (ef + eh * bQ.ej)) ? (aIt = this.aIe + (this.aIf - this.aIe) * this.iI[ef + bQ.ej * eh] / 1e4, Math.abs(ks - ef) > aIt || Math.abs(kt - eh) > aIt || aIt <= (dw = Math.sqrt((ks - ef) * (
				ks - ef) + (kt - eh) * (kt - eh))) || this.aIs(g6, dw, aIt, 1, this.a6p[3])) : (aIt = this.aIg + (this.aIh - this.aIg) * this.iI[ef + bQ.ej * eh] / 1e4, Math.abs(ks - ef) > aIt || Math.abs(kt - eh) > aIt || aIt <= (dw = Math
				.sqrt((ks - ef) * (ks - ef) + (kt - eh) * (kt - eh))) || this.aIs(g6, dw, aIt, 0, this.a6p[2]))
	}
}

function aIT() {
	2 === bQ.eE ? aIv([256], [256], [0, 205, 256], [500, 500, 0], [0, 0, 0]) : 7 === bQ.eE ? aIv([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0]) : 8 === bQ.eE ? aIv([410], [410], [0, 120, 210], [0, 80, 640], [0, 0, 0]) : 9 === bQ.eE ? aIv([
		512], [512], [0, 70, 180, 200, 290, 420, 512], [500, 500, 0, 0, 500, 500, 0], [0, 0, 0, 0, 0, 0, 0]) : 20 === bQ.eE && aIv([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0])
}

function aIv(aIw, aIx, aIy, aIz, aJ0) {
	for (var ef, eh, aJ2, aJ3, a1D, aJ4, ht = aIw.length - 1, aJ1 = bQ.ej + bQ.ek, eY = (aJ1 *= aJ1, aIy.length), aA = eY - 1; 0 <= aA; aA--) aIy[aA] *= aIy[aA];
	var aJ5 = new Array(eY),
		aAe = new Array(eY),
		aJ6 = new Array(eY),
		f0 = ao.aIn();
	if (void 0 === aJ0)
		for (aJ0 = new Array(eY), aA = eY - 1; 0 <= aA; aA--) aJ0[aA] = 0;
	for (aA = 1; aA < eY; aA++) aJ5[aA] = aIy[aA] - aIy[aA - 1], aAe[aA] = aIz[aA] - aIz[aA - 1], aJ6[aA] = aJ0[aA] - aJ0[aA - 1];
	for (ef = bQ.ej - 1; 0 <= ef; ef--)
		for (eh = bQ.ek - 1; 0 <= eh; eh--) {
			for (aJ2 = aJ1, aA = ht; 0 <= aA; aA--) aJ2 = (aJ3 = (ef - aIw[aA]) * (ef - aIw[aA]) + (eh - aIx[aA]) * (eh - aIx[aA])) < aJ2 ? aJ3 : aJ2;
			for (a1D = aIz[eY - 1], aJ4 = aJ0[eY - 1], aA = 1; aA < eY; aA++)
				if (aJ2 < aIy[aA]) {
					a1D = aIz[aA - 1] + aF3((aJ2 - aIy[aA - 1]) * aAe[aA], aJ5[aA]), aJ4 = aJ0[aA - 1] + aF3((aJ2 - aIy[aA - 1]) * aJ6[aA], aJ5[aA]);
					break
				} aJ7(bQ.ej * eh + ef, a1D, aJ4, f0)
		}
}

function aJ7(dx, a1D, aJ4, f0) {
	a1D < 500 ? f0[dx] = bJ.dl(f0[dx] * a1D * 2, 1e3) : 500 < a1D && (f0[dx] += bJ.dl(2 * (1e4 - f0[dx]) * (a1D - 500), 1e3)), f0[dx] += bJ.dl(aJ4 * (10 * a1D - f0[dx]), 1e3)
}

function ca() {
	var aJ8;

	function aJI(a1e, hV, ef, eh, globalAlpha) {
		bQ.vO.save(), bQ.vO.globalAlpha = globalAlpha, bQ.vO.imageSmoothingEnabled = !1, bQ.vO.scale(hV, hV), bQ.vO.drawImage(a1e, Math.floor(ef * (bQ.ej / hV - a1e.width)), Math.floor(eh * (bQ.ek / hV - a1e.height))), bQ.vO.restore()
	}
	this.a5T = 0, this.a5U = 0, this.a5V = 0, this.a5W = 0, this.dU = function() {
		(aJ8 = new Array(bQ.aIK))[0] = {
			i: [0, 5e3, 8e3, 1e4],
			dw: [220, 250, 255, 220],
			sB: [190, 220, 0, 0],
			es: [170, 200, 0, 0]
		}, aJ8[1] = {
			i: [0, 4e3, 5e3, 6e3, 1e4],
			dw: [25, 0, 100, 0, 25],
			sB: [25, 0, 0, 0, 25],
			es: [25, 0, 0, 0, 25]
		}, aJ8[2] = {
			i: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			dw: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			sB: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			es: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aJ8[3] = {
			i: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			dw: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			sB: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			es: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, aJ8[4] = {
			i: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			dw: [10, 10, 20, 10, 10, 170, 212],
			sB: [20, 20, 60, 100, 100, 110, 170],
			es: [70, 70, 160, 30, 30, 60, 120]
		}, aJ8[5] = {
			i: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			dw: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			sB: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			es: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aJ8[6] = {
			i: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			dw: [10, 10, 60, 255, 255, 200, 200],
			sB: [10, 10, 60, 255, 255, 200, 200],
			es: [80, 80, 255, 255, 255, 200, 200]
		}, aJ8[7] = {
			i: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			dw: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			sB: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			es: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aJ8[8] = {
			i: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			dw: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			sB: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			es: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aJ8[9] = {
			i: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			dw: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			sB: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			es: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aJ8[20] = {
			i: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			dw: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			sB: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			es: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, aJ8[21] = {
			i: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			dw: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			sB: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			es: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.aIU = function() {
		var aJH, aA, er, fG, hT = function() {
				var hT;
				return bQ.vS = document.createElement("canvas"), bQ.vS.width = bQ.ej, bQ.vS.height = bQ.ek, bQ.vO = bQ.vS.getContext("2d", {
					alpha: !1
				}), hT = bQ.vO.getImageData(0, 0, bQ.ej, bQ.ek), bQ.vT = hT.data, hT
			}(),
			i = aJ8[bQ.eE].i,
			dw = aJ8[bQ.eE].dw,
			sB = aJ8[bQ.eE].sB,
			es = aJ8[bQ.eE].es,
			f0 = ao.aIn(),
			eY = i.length - 2,
			aJC = new Array(1 + eY),
			aJD = new Array(1 + eY),
			aJE = new Array(1 + eY),
			aJF = new Array(1 + eY);
		for (er = eY; 0 <= er; er--) aJC[er] = i[er + 1] - i[er], aJD[er] = dw[er + 1] - dw[er], aJE[er] = sB[er + 1] - sB[er], aJF[er] = es[er + 1] - es[er];
		for (aA = bQ.ej * bQ.ek - 1; 0 <= aA; aA--)
			for (er = eY; 0 <= er; er--)
				if (f0[aA] >= i[er]) {
					fG = f0[aA] - i[er], bQ.vT[4 * aA] = dw[er] + aF3(aJD[er] * fG, aJC[er]), bQ.vT[4 * aA + 1] = sB[er] + aF3(aJE[er] * fG, aJC[er]), bQ.vT[4 * aA + 2] = es[er] + aF3(aJF[er] * fG, aJC[er]), bQ.vT[4 * aA + 3] = 255;
					break
				} bQ.vO.putImageData(hT, 0, 0), bQ.aIa(bQ.eE) && aa.sE() && bQ.aIa(bQ.eE) && (hT = aa.aEB("arena"), aJH = aa.aEB("territorial.io"), aJI(hT, 5, .5, .5, .1), aJI(aJH, 2, .5, .45, .1)), bQ.vQ = !0, bd.dc = !0
	}, this.a3P = function() {
		for (var g6, ef, eh, aJJ, hK, fI, a5U = 0, i = bQ.ej, j = bQ.ek, fG = i * j * 4, aJK = aAE, aJL = bQ.vT, aA = i - 1; 0 <= aA; aA--) aJK[(g6 = aA << 2) + 2] = aJK[fG - g6 - 2] = 3;
		for (fG = 4 * i, aA = j - 1; 0 <= aA; aA--) aJK[(g6 = aA * fG) + 2] = aJK[g6 + fG - 2] = 3;
		for (aJJ = i - 1, hK = j - 1, eh = 1; eh < hK; eh++)
			for (fG = eh * i, ef = 1; ef < aJJ; ef++) fI = 1 - (aJL[(g6 = fG + ef << 2) + 2] > aJL[g6 + 1] && aJL[g6 + 2] > aJL[g6]), aJK[g6 + 2] = 2 - fI, a5U += fI;
		this.a5T = (i - 2) * (j - 2), this.a5W = 0, bQ.eD(bQ.eE) && (bQ.a5W.aJM(), bQ.a5W.aJN()), this.a5U = aC.jY = a5U - this.a5W, this.a5V = this.a5T - this.a5U - this.a5W
	}
}

function aIS() {
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

function aIM() {
	this.vJ = null, this.aJO = null, this.aJP = null, this.dU = function() {
		var aJQ = [120, 105, 92],
			cos = [12, 12, 60],
			aJR = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aJS = [140, 130, 120],
			aJT = [12, 12, 76],
			aJU = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aJV = [130, 117, 106],
			aJW = [12, 12, 68],
			aJX = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.vJ = new Array(bQ.aIK + 1), __fx.customLobby.setMapInfo(this.vJ), this.vJ[0] = {
			name: L(130),
			i: 230,
			j: 230,
			li: 1e3,
			lf: 2e3,
			aIR: 173
		}, this.vJ[1] = {
			name: L(131),
			i: 800,
			j: 800,
			li: 100,
			lf: 50,
			aIR: 43
		}, this.vJ[2] = {
			name: L(132),
			i: 512,
			j: 512,
			li: 128,
			lf: 32,
			aIR: 0
		}, this.vJ[3] = {
			name: L(133) + " 1",
			i: 960,
			j: 960,
			li: 60,
			lf: 8,
			aIR: 0
		}, this.vJ[4] = {
			name: L(134),
			i: 900,
			j: 900,
			li: 100,
			lf: 5,
			aIR: 0
		}, this.vJ[5] = {
			name: L(135),
			i: 1e3,
			j: 1e3,
			li: 100,
			lf: 40,
			aIR: 0
		}, this.vJ[6] = {
			name: L(136),
			i: 1e3,
			j: 1e3,
			li: 100,
			lf: 20,
			aIR: 0
		}, this.vJ[7] = {
			name: L(137),
			i: 1024,
			j: 1024,
			li: 128,
			lf: 32,
			aIR: 0
		}, this.vJ[8] = {
			name: L(138),
			i: 820,
			j: 820,
			li: 200,
			lf: 100,
			aIR: 0
		}, this.vJ[9] = {
			name: L(139),
			i: 1024,
			j: 1024,
			li: 128,
			lf: 32,
			aIR: 0
		}, this.vJ[10] = {
			name: L(140),
			vl: aJS,
			vm: aJT,
			aIb: aJU
		}, this.vJ[11] = {
			name: L(141),
			vl: aJV,
			vm: aJW,
			aIb: aJX
		}, this.vJ[12] = {
			name: L(142),
			vl: aJV,
			vm: aJW,
			aIb: aJX
		}, this.vJ[13] = {
			name: L(143),
			vl: aJQ,
			vm: cos,
			aIb: aJR
		}, this.vJ[14] = {
			name: L(144),
			vl: aJQ,
			vm: cos,
			aIb: aJR
		}, this.vJ[15] = {
			name: L(145),
			vl: aJS,
			vm: aJT,
			aIb: aJU
		}, this.vJ[16] = {
			name: L(146),
			vl: aJS,
			vm: aJT,
			aIb: aJU
		}, this.vJ[17] = {
			name: L(147),
			vl: aJQ,
			vm: cos,
			aIb: aJR
		}, this.vJ[18] = {
			name: L(148),
			vl: aJV,
			vm: aJW,
			aIb: aJX
		}, this.vJ[19] = {
			name: L(149),
			vl: aJQ,
			vm: cos,
			aIb: aJR
		}, this.vJ[20] = {
			name: L(150),
			i: 1024,
			j: 1024,
			li: 128,
			lf: 32,
			aIR: 0
		}, this.vJ[21] = {
			name: L(133) + " 2",
			i: 940,
			j: 940,
			li: 80,
			lf: 8,
			aIR: 0
		}, this.vJ[bQ.aIK] = {
			name: ""
		}, this.aJO = new Uint8Array(12);
		for (var aA = 0; aA < 10; aA++) this.aJO[aA] = aA;
		for (this.aJO[10] = 20, this.aJO[11] = 21, this.aJP = new Uint8Array(10), aA = 0; aA < 10; aA++) this.aJP[aA] = 10 + aA
	}
}

function aIN() {
	this.aJM = function() {
		for (var g6, ef, fG, aJK = aAE, aJL = bQ.vT, i = bQ.ej, aJJ = i - 1, hK = bQ.ek - 1, g1 = 0, eh = 1; eh < hK; eh++)
			for (fG = eh * i, ef = 1; ef < aJJ; ef++) aJL[g6 = fG + ef << 2] === aJL[1 + g6] && aJL[g6] === aJL[2 + g6] && (g1++, aJK[2 + g6] = 4);
		an.a5W = g1
	}, this.aJN = function() {
		for (var aJK = aAE, i = bQ.ej, aJJ = i - 1, hK = bQ.ek - 1, id = 5, eh = 1; eh < hK; eh++)
			for (var fG = eh * i, ef = 1; ef < aJJ; ef++) {
				var eC = 2 + (fG + ef << 2);
				4 === aJK[eC] && (! function(eC, id) {
					var eY = 1,
						aJK = aAE,
						ea = ab.ea,
						a1Q = [eC];
					aJK[eC] = id;
					for (; eY;) {
						for (var a1R = [], aA = 0; aA < eY; aA++)
							for (var eN = a1Q[aA], eb = 3; 0 <= eb; eb--) {
								var ec = eN + ea[eb];
								4 === aJK[ec] && (aJK[ec] = id, a1R.push(ec))
							}
						eY = (a1Q = a1R).length
					}
				}(eC, id), id = Math.max((id + 1) % 256, 5))
			}
	}
}

function a3O() {
	(x2 = void 0 === x2 ? document.createElement("canvas") : x2).width = bQ.ej, x2.height = bQ.ek, a3S = x2.getContext("2d", {
		alpha: !0
	}), a3T = aAE = null, a3T = a3S.getImageData(0, 0, bQ.ej, bQ.ek), aAE = a3T.data, b8.pg.vU(aAE)
}

function cb() {
	var f0, i, j, max, aJZ, lf, aJb, aJc, aJd, aJe, aJf, aJg, aJh, aJi, aJa = 1e4;

	function aJp(aJo, li, eY) {
		var aA;
		for (aJb[0] = aJo, aA = 1; aA < eY; aA++) aJb[aA] = aJb[aA - 1] + li, li = aJb[aA] >= aJa ? (aJb[aA] = aJa - 1, -li) : aJb[aA] < 0 ? (aJb[aA] = 0, -li) : (li += 16384 <= aw.random() ? lf : -lf) < -aJZ ? -aJZ : aJZ < li ? aJZ : li
	}

	function aJr(ef, eh, aJs, eY) {
		(aJs ? function(ef, eh, eY) {
			var aA;
			for (aA = 0; aA < eY; aA++) f0[eh * i + ef + aA] = aJb[aA]
		} : function(ef, eh, eY) {
			var aA;
			for (aA = 0; aA < eY; aA++) f0[eh * i + ef + aA * i] = aJb[aA]
		})(ef, eh, eY)
	}

	function aJv(value, eY) {
		var aA, aHu, eC, hi = value - aJb[eY - 1];
		if (0 != hi) {
			for (aHu = 1 + bJ.dl(Math.abs(hi), eY - 1), aHu = hi < 0 ? -aHu : aHu, aJb[eY - 1] = value, eC = (eC = eY - 1 - bJ.dl(Math.abs(hi), Math.abs(aHu))) < 1 ? 1 : eY - 2 < eC ? eY - 2 : eC, aA = eY - 2; eC <= aA; aA--) aJb[aA] += hi - (eY -
				1 - aA) * aHu;
			(hi < 0 ? function(eY) {
				var aA;
				for (aA = eY - 2; 1 <= aA; aA--) aJb[aA] < 0 && (aJb[aA] = -aJb[aA] - 1)
			} : function(eY) {
				var aA;
				for (aA = eY - 2; 1 <= aA; aA--) aJb[aA] >= aJa && (aJb[aA] = 2 * aJa - aJb[aA] - 1)
			})(eY)
		}
	}

	function aJy(a1Q, a1R, eY) {
		for (var aA = 0; aA < eY; aA++) a1Q[aA] = a1R[aA]
	}

	function aJz(g) {
		for (var aA = 0; aA < g.length - 1; aA++) g[aA] = g[aA + 1] - g[aA];
		g[g.length - 1] = g[g.length - 3]
	}

	function aK0(a3u, gap, hL) {
		aJc.push(a3u), aJd.push(gap), aJe.push(hL)
	}
	this.a6 = function(a2f) {
		! function(a2f) {
			var aA;
			for (i = a2f[0], j = a2f[1], aJZ = a2f[2], lf = a2f[3], f0 = new Int16Array(i * j), max = j < i ? i : j, aJb = new Int16Array(max), aJc = [], aJd = [], aJe = [], aJf = new Array(i), aJg = new Array(j), aA = i - 1; 0 <= aA; aA--) aJf[
				aA] = !1;
			for (aA = j - 1; 0 <= aA; aA--) aJg[aA] = !1;
			aJh = new Int16Array(i), aJi = new Int16Array(j)
		}(a2f),
		function(eY) {
			var aJo = aw.random() % aJa,
				li = aw.random() % (2 * aJZ + 1) - aJZ;
			aJp(aJo, li, eY)
		}(max), aJy(aJi, aJb, j), aJr(0, 0, !0, i);
		var ef, eh, a2f = f0[0],
			eY = max,
			li = aw.random() % (2 * aJZ + 1) - aJZ;
		for (aJp(a2f, li, eY), aJy(aJh, aJb, i), aJr(0, 0, !1, j), aJz(aJh), aJz(aJi), aJp(f0[i - 1], aJh[i - 1], j), aJr(i - 1, 0, !1, j), aJp(f0[i * (j - 1)], aJi[j - 1], i), aJv(f0[i * j - 1], i), aJr(0, j - 1, !0, i), aJf[i - 1] = aJf[0] = !
			0, aJg[j - 1] = aJg[0] = !0, aK0(0, i, !0), aK0(0, j, !1), ! function() {
				var aK2, a3u;
				for (;;) {
					if (aK2 = function() {
							var aA, aK2 = aJc.length - 1;
							for (aA = aK2 - 1; 0 <= aA; aA--) aJd[aA] > aJd[aK2] && (aK2 = aA);
							return aK2
						}(), aJd[aK2] < 5) return;
					a3u = aJc[aK2] + bJ.dl(aJd[aK2], 2), (aJe[aK2] ? function(ef) {
						var eY, aK5, aA, aDc = 0,
							aK6 = 0;
						for (; aK6 < j - 1;) {
							for (aA = aDc + 1; aA < j; aA++)
								if (aJg[aA]) {
									aK6 = aA;
									break
								} eY = aK6 - aDc + 1, aJp(f0[ef + i * aDc], 0 === aDc ? aJh[ef] : aJb[aK5 - 1] - aJb[aK5 - 2], eY), aJv(f0[aK6 * i + ef], eY), aJr(ef, aDc, !1, eY), aK5 = eY, aDc = aK6
						}
						aJf[ef] = !0
					} : function(eh) {
						var eY, aK5, aA, aDc = 0,
							aK6 = 0;
						for (; aK6 < i - 1;) {
							for (aA = aDc + 1; aA < i; aA++)
								if (aJf[aA]) {
									aK6 = aA;
									break
								} eY = aK6 - aDc + 1, aJp(f0[eh * i + aDc], 0 === aDc ? aJi[eh] : aJb[aK5 - 1] - aJb[aK5 - 2], eY), aJv(f0[eh * i + aK6], eY), aJr(aDc, eh, !0, eY), aK5 = eY, aDc = aK6
						}
						aJg[eh] = !0
					})(a3u), aK0(a3u, aJc[aK2] + aJd[aK2] - a3u, aJe[aK2]), aJd[aK2] = a3u - aJc[aK2] + 1
				}
			}(), ef = 0; ef < i; ef++)
			if (!aJf[ef])
				for (eh = 0; eh < j; eh++) aJg[eh] || ! function(ef, eh) {
					var value = f0[eh * i + ef - 1] + f0[(eh - 1) * i + ef],
						a5h = 2;
					aJf[ef + 1] && (a5h++, value += f0[eh * i + ef + 1]);
					aJg[eh + 1] && (a5h++, value += f0[(eh + 1) * i + ef]);
					f0[eh * i + ef] = bJ.dl(value, a5h)
				}(ef, eh)
	}, this.aIn = function() {
		return f0
	}, this.aIV = function() {
		f0 = null
	}
}

function aF3(er, es) {
	return 0 <= er ? bJ.dl(er, es) : -bJ.dl(-er, es)
}

function jL(f0) {
	return f0 * f0
}

function a4w(er, es) {
	return es < er ? er : es
}

function a9i(er, es) {
	return er < es ? er : es
}

function a78(er, f0, es) {
	return f0 < er ? er : es < f0 ? es : f0
}

function aK8(f0, eY) {
	for (var et = bJ.dl(f0 + 1, 2), aA = 0; aA < eY; aA++) et = bJ.dl(et + bJ.dl(f0, et), 2);
	return et
}

function aGQ(f0, eY) {
	return f0 < 1 ? 0 : aK8(f0, eY)
}

function aK9(m5, m6, rt, a6s, mI, mJ, ru, sb) {
	return !(m5 + rt <= mI || m6 + a6s <= mJ || mI + ru <= m5 || mJ + sb <= m6)
}

function aKA(m5, m6, rt, a6s, mI, mJ, ru, sb) {
	return m5 <= mI && m6 <= mJ && mI + ru <= m5 + rt && mJ + sb <= m6 + a6s
}

function vL(f0) {
	return Math.floor(!!f0 * (1 + Math.log2(f0 + .5)))
}

function bs() {
	this.dl = function(er, es) {
		return Math.floor((er + .5) / es)
	}, this.aKB = function(er, es) {
		return Math.floor(er * (es + .5))
	}, this.sqrt = function(f0) {
		return ~~Math.sqrt(f0 + .5)
	}, this.pow = function(e) {
		return Math.floor(Math.pow(2, e) + .5)
	}, this.p5 = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aKC = function(fG, fI, fK) {
		return Math.max(Math.min(fG, fI), fK)
	}, this.aKD = function(aKE, aKF, ef, eh) {
		ef -= aKE, aKE = eh - aKF, eh = 0;
		return 0 == ef ? eh = 0 <= aKE ? Math.PI : 0 : (eh = Math.atan(aKE / ef), eh += 0 < ef ? .5 * Math.PI : 1.5 * Math.PI), eh
	}, this.log2 = function(f0) {
		return Math.floor(!!f0 * (1 + Math.log2(f0 + .5)))
	}, this.log10 = function(f0) {
		return Math.floor(Math.log10(f0 + .5))
	}, this.aKH = function(aKI, aKJ, aKK, aKL, aKM) {
		return aKK - aKM < aKI && aKI < aKK + aKM && aKL - aKM < aKJ && aKJ < aKL + aKM
	}, this.wJ = function(hc, hd) {
		return hc * hc + hd * hd
	}
}

function d7() {
	this.x = new aKN, this.rm = 0;
	var aKO = new Array(30);

	function aKS() {
		for (var eY = aKO.length, aA = 0; aA < eY; aA++) aKO[aA] = null
	}
	this.dU = function() {
		for (var aKP, aKQ = document.body.firstChild; aKQ;) {
			if (aKP = aKQ.nextSibling, document.body.contains(aKQ) && ("DIV" === aKQ.tagName || "INPUT" === aKQ.tagName || "BUTTON" === aKQ.tagName)) try {
				document.body.removeChild(aKQ)
			} catch (e) {
				console.log("error 2623: " + e)
			}
			aKQ = aKP
		}
	}, this.t = function(dx, aKR, a2f) {
		void 0 === aKR && (aKR = this.rm), bd.dc = !0, 0 === dx && (0 === aZ.zx() ? dx = 5 : z.a0.setState(13)), this.qo(), this.rm === dx && (aKR = aKO[dx].aKR, aKO[dx] = null), this.rm = dx;
		var kW = aKO[dx];
		if (!kW || 4 === dx || 7 === dx || 8 === dx || 9 === dx || 10 === dx || 11 === dx || 13 === dx || 15 === dx || 18 === dx || 20 <= dx && dx <= 28) {
			if (0 === dx) return void aKS();
			1 === dx ? kW = new aKT : 2 === dx ? kW = new aKU : 3 === dx ? kW = new aKV : 4 === dx || 9 === dx || 10 === dx || 11 === dx || 13 === dx ? kW = a2f : 5 === dx ? kW = new aKW : 6 === dx ? kW = new aKX : 7 === dx ? kW = new aKY(s.x
					.aKZ) : 8 === dx ? kW = a2f : 12 === dx ? kW = new aKa : 14 === dx ? kW = new aKb : 15 === dx ? kW = new aKY(s.x.aKc) : 16 === dx ? kW = new aKd : 17 === dx ? kW = new aKe : 18 === dx ? kW = new aKf : 19 === dx ? kW =
				new aKg : 20 === dx ? kW = new aKh : 21 === dx ? kW = new aKi : 22 === dx ? kW = new aKj : 23 === dx ? kW = new aKk : 24 === dx ? kW = new aKl : 25 === dx ? kW = new aKm : 26 === dx ? kW = new aKn : 27 === dx ? kW = new aKo :
				28 === dx ? kW = new aKp : 29 === dx && (kW = new aKq), kW.aKR = aKR, aKO[dx] = kW
		}
		kW.show(a2f)
	}, this.a07 = function() {
		this.hG() && this.aKr(this.aDC().aKR)
	}, this.aKr = function(dx) {
		this.hG() && (aKO[dx] ? (this.qo(), bd.dc = !0, this.rm = dx, aKO[dx].show()) : this.t(dx))
	}, this.qo = function() {
		this.hG() && aKO[this.rm].qo()
	}, this.w = function() {
		this.hG() && (aKO[this.rm].qo(), aKS(), this.rm = 0, z.a0.setState(13))
	}, this.te = function() {
		var kW;
		this.hG() && (kW = aKO[this.rm]).te && kW.te()
	}, this.resize = function() {
		if (!this.hG()) return !1;
		aKO[this.rm].resize()
	}, this.gm = function(ef, eh) {
		var kW;
		this.hG() && (kW = aKO[this.rm]).gm && kW.gm(ef, eh)
	}, this.a0J = function(ef, eh) {
		var kW;
		this.hG() && (kW = aKO[this.rm]).a0J && kW.a0J(ef, eh)
	}, this.a0h = function() {
		var kW;
		this.hG() && (kW = aKO[this.rm]).a0h && kW.a0h()
	}, this.a0M = function(ks, kt, deltaY) {
		var kW;
		this.hG() && (kW = aKO[this.rm]).a0M && kW.a0M(ks, kt, deltaY)
	}, this.a0r = function(code) {
		var kW;
		return !!this.hG() && ((kW = aKO[this.rm]).a0r && kW.a0r(code), !0)
	}, this.ii = function() {
		var kW;
		this.hG() && (kW = aKO[this.rm]) && kW.ii && kW.ii()
	}, this.hG = function() {
		return 0 < this.rm
	}, this.aDC = function() {
		return aKO[this.rm]
	}, this.aCC = function(dx) {
		return aKO[dx]
	}, this.aKs = function() {
		return aKO
	}
}

function aKY(data) {
	var aKt, aKu;
	this.show = function() {
		data.aKv && bG.aLd("account", data.rk), aKt.show(), this.resize()
	}, this.qo = function() {
		aKt.qo()
	}, this.resize = function() {
		aKt.resize(), aKu.resize()
	}, this.a0r = function(et) {
		2 === et && aKt.tW[0].pp()
	}, aKt = new tP(data.username, [new v("⬅️ " + L(32), function() {
		bG.clear(), s.a07()
	}), new v(data.aKv ? "🔄 " + L(151) : L(152), function() {
		s.t(8, s.aDC().aKR, new rn(25, {
			ro: 0,
			rk: data.rk,
			rl: data.rl
		}))
	}, 0, 0, 1)]), aKu = new pQ(aKt.tV, function() {
		var pS = [];
		pS.push(function() {
				var aLB = new pA,
					qL = (aLB.pD(L(201)), new qM({
						value: data.username,
						dx: -1
					}));
				qL.e.readOnly = !0, aLB.pO(qL), aLB.pO(new r2([new v(L(170), function(e) {
					return b8.pX.a27(qL.e), b8.pX.a28(e), !0
				}).button])), data.aKv || aLB.pF(L(202));
				return aLB
			}()),
			function(pS) {
				var aLB, pG, aAS, aLT, aLJ;
				data.aKv || ((aLB = new pA).pD(L(203)), (pG = aLB.pF(data.aLS.length + " / 160")).style.textAlign = "center", aAS = !0, (aLT = new tn(0, 1, function(e) {
					e = e.target.value.length;
					pG.textContent = e + " / 160", 160 < e ? aAS && (aAS = !1, aLJ.ps(1), aLJ.button.style.color = b9.mf) : aAS || (aAS = !0, aLJ.ps(0), aLJ.button.style.color = b9.nb)
				})).e.rows = 6, aLT.e.style.fontSize = "1em", aLT.tu(data.aLS), aLB.pO(aLT), aLJ = new v(L(204), function() {
					if (!aAS) return !0;
					s.t(8, s.aDC().aKR, new rn(29, {
						ro: 1,
						pE: aLT.tw().substring(0, 160)
					}))
				}, 0, 0, 1), aLB.pO(new r2([aLJ.button])), 0 !== data.aLU && (aLB.pO(new r2([new v(L(1 === data.aLU ? 206 : 207), function() {
					s.t(8, s.aDC().aKR, new rn(29, {
						ro: 0,
						pE: ""
					}))
				}, 0, 0, 1).button])), aLB.pF(1 === data.aLU ? L(208, [data.aLW - 1]) : L(209, [data.aLW - 1]))), aLB.pF(L(205, [data.aLV])), pS.push(aLB))
			}(pS),
			function(pS) {
				var aLB;
				data.aKv && 0 !== data.aLU && ((aLB = new pA).pD(L(210)), aLB.pH(data.aLS), aLB.pO(new r2([new v(L(211, 0, "Report"), function(e) {
					return ay.x.aDm(0) && (b8.pX.a28(e), ay.aLH.aLX({
						ro: 5,
						rk: data.rk
					})), !0
				}, 0, 0, 1).button])), pS.push(aLB))
			}(pS), pS.push(function() {
				var aLB = new pA,
					aLC = (aLB.pD(L(153)), [L(154), L(155), L(156), L(157), L(158)]),
					dw = data.aLD;
				aLB.pJ(L(159) + b8.zO.a2u(data.ui, .01, 2) + "<br>" + L(160) + (dw + 1) + " / " + data.uh + "<br>" + L(161) + aLC[dw < 10 ? 0 : dw < 50 ? 1 : dw < 200 ? 2 : dw < 1e3 ? 3 : 4]), data.aKv || (aLB.pF(L(162)), aLB.pF(L(163)),
					aLB.pF(L(164)));
				return aLB
			}()), data.aKv && pS.push(function() {
				var aLB = new pA,
					qL = (aLB.pD(L(165)), new qM({
						value: bh.kn.data[147].value,
						dx: -1
					}, 1, void 0, function(e) {
						bh.qz.r0(147, aLE(e.target.value))
					})),
					aLF = (aLB.pO(qL), new v(L(14), function(e) {
						return qL.e.readOnly && ay.x.aDm(0) && (b8.pX.a28(e), aLG(), ay.aLH.aLI({
							ro: 0,
							rk: data.rk,
							value: bh.kn.data[147].value
						})), !0
					}, 1)),
					aLJ = new v(L(166), function(e) {
						return e.textContent === L(166) ? (e.textContent = L(167), qL.e.readOnly = !0, aLF.ps(0), aLF.button.style.color = b9.nb, bh.qz.r0(147, qL.e.value), aLE(bh.kn.data[147].value)) : aLG(), !0
					}),
					pG = (aLB.pO(new r2([aLJ.button])), aLB.pF()),
					aLE = function(f0) {
						f0 = b8.fu.a2c(f0, 2, 1e6), pG.textContent = L(168, [f0, bh.kn.data[105].value, data.rk, f0 - 1])
					},
					aLG = function() {
						aLJ.button.textContent = L(166), qL.e.readOnly = !1, aLF.ps(1), aLF.button.style.color = b9.mf
					};
				return aLE(bh.kn.data[147].value), aLB.pO(new r2([aLF.button])), aLB
			}());
		pS.push(function() {
			var aLB = new pA,
				qL = (aLB.pD(L(169)), new qM({
					value: data.rk,
					dx: -1
				}));
			return qL.e.readOnly = !0, aLB.pO(qL), aLB.pO(new r2([new v(L(170), function(e) {
				return b8.pX.a27(qL.e), b8.pX.a28(e), !0
			}).button])), aLB
		}()), data.aKv || (pS.push(function() {
			var aLB = new pA,
				aLK = (aLB.pD(L(171)), new qM(bh.kn.data[106]));
			return aLK.e.readOnly = !0, aLK.e.type = "password", aLB.pO(aLK), aLB.pO(new r2([new v(L(172), function(e) {
				return e.textContent === L(172) ? (e.textContent = L(173), aLK.e.type = "text") : (e.textContent = L(172), aLK.e.type = "password"), !0
			}).button, new v(L(170), function(e) {
				return b8.pX.a27(aLK.e), b8.pX.a28(e), !0
			}).button])), aLB.pO(new r2([new v(L(174), function() {
				s.t(8, s.aDC().aKR, new rn(15))
			}).button])), aLB.pD(L(175), "0.8em"), aLB.pF(L(176)), aLB.pF(L(177)), aLB.pF(L(178)), aLB
		}()), pS.push(function() {
			var aLB = new pA;
			return aLB.pD(L(179)), aLB.pO(new r2([new v(L(180), function() {
				s.t(6, s.aDC().aKR)
			}).button])), aLB.pO(new r2([new v(L(181), function() {
				bh.qz.r0(105, ""), s.t(8, s.aDC().aKR, new rn(18))
			}).button])), aLB.pO(new r2([new v(L(182) + bh.kn.data[105].value, function() {
				s.t(4, 0, new u(L(183), L(184), !0, [new v("⬅️ " + L(32), function() {
					s.t(7, s.aCC(7).aKR)
				})]))
			}, b9.nK).button])), aLB
		}()), pS.push(function() {
			function aLM(dx) {
				for (var aA = 0; aA < 2; aA++) aLL[aA].ps(0 === dx ? b9.mr : 0 === aA ? b9.nK : b9.n2)
			}
			var pM, aLL, aLB = new pA;
			aLB.pD(L(185)), aLB.pF(L(186)), bh.x.uS();
			return aLL = [new v(L(187), function() {
				var dx = Math.min(bh.kn.data[117].value, pM.pN.length - 1);
				if (!(dx < 1)) {
					pM.pN[dx].remove(), pM.pN.splice(dx, 1);
					for (var aA = dx; aA < pM.pN.length; aA++) pM.pN[aA].name = "" + aA;
					bh.x.uV(dx), dx = bh.kn.data[117].value, pM.pN[dx].textContent = pM.pN[dx].textContent.replace("⚪", "🟢"), aLM(dx)
				}
			}, b9.mr), new v(L(188), function() {
				var dx = Math.min(bh.kn.data[117].value, pM.pN.length - 1);
				dx < 1 || (dx = bh.x.uW(dx), bh.qz.r0(105, dx.rk), bh.qz.r0(106, dx.password), s.t(8, s.aDC().aKR, new rn(18)))
			}, b9.mr)], (pM = new tK(bh.kn.data[117], aLM)).pN[0].style.marginTop = "0.5em", aLB.pL(pM), aLB.pO(new r2([aLL[1].button])), aLB.pO(new r2([aLL[0].button])), aLB
		}()));
		return pS.push(function() {
				var aLB = new pA,
					aLC = (aLB.pD(L(192)), [L(193), L(194), L(195), L(196)]),
					dw = data.aLN;
				return aLB.pJ(L(197) + (data.aLO / 100).toFixed(2) + "<br>" + L(160) + (dw + 1) + " / " + data.uh + "<br>" + L(161) + aLC[dw < 10 ? 0 : dw < 50 ? 1 : dw < 200 ? 2 : 3]), aLB
			}()), pS.push(function() {
				var aLB = new pA;
				return aLB.pD(L(189)), aLB.pJ(L(190) + b8.zO.a2u(data.ue, .1, 1) + "<br>" + L(160) + (data.uf + 1) + " / " + data.uh + "<br>" + L(191) + data.ug), aLB
			}()),
			function(pS) {
				var aLB = new pA,
					aLY = data.ul,
					aLZ = (aLB.pD(L(212)), aLB.pJ(L(213, [aLY ? "[" + data.uj + "]" : "-"])), aLB.pJ(L(214, [b8.zO.a2u(aLY, .01, 2)])), aLB.pJ(L(215, [data.un + 1 + " / " + data.uh])), data.uo),
					aLa = (aLB.pJ(L(216, [b8.zO.a2u(aLZ, .1, 1)])), data.uq);
				aLB.pJ(L(217, [aLa])), aLB.pJ(L(218, [b8.zO.a2u(aLZ / Math.max(aLa, 1), .1, 2)])), aLY = data.um, aLB.pD(L(219), "0.8em"), aLB.pJ(L(213, [aLY ? "[" + data.uk + "]" : "-"])), aLB.pJ(L(214, [b8.zO.a2u(aLY, .01, 2)])), aLZ = data
					.up, aLB.pJ(L(216, [b8.zO.a2u(aLZ, .1, 1)])), aLa = data.ur, aLB.pJ(L(217, [aLa])), aLB.pJ(L(218, [b8.zO.a2u(aLZ / Math.max(aLa, 1), .1, 2)])), data.aKv || (aLB.pF(L(220)), aLB.pF(L(221)));
				pS.push(aLB)
			}(pS),
			function(pS) {
				var aLB = new pA;
				aLB.pD(L(222)), aLB.pJ(L(197) + (data.aLb / 10).toFixed(1) + "<br>" + L(161) + (data.aLc.length ? L(223, [data.aLc]) : L(224))), data.aKv ? (aLB.pO(new r2([new v(L(225), function(e) {
					return ay.x.aDm(0) && (b8.pX.a28(e), ay.aLH.aLX({
						ro: 4,
						rk: data.rk
					})), !0
				}, 0, 0, 1).button])), aLB.pF(L(226)), aLB.pF(L(227))) : aLB.pF(L(228));
				pS.push(aLB)
			}(pS), pS.push(function() {
				var aLB = new pA;
				if (aLB.pD(L(198)), aLB.pJ(L(199) + data.aLP + "<br>" + L(160) + (data.aLQ + 1) + " / " + data.uh + "<br>" + L(161) + bm.dz(data.aLQ)), data.aKv) {
					var qL = new qM({
							value: bh.kn.data[157].value,
							dx: -1
						}, 1, void 0, function(e) {
							bh.qz.r0(157, aLE(e.target.value))
						}),
						aLJ = (qL.e.style.marginTop = "0.6em", aLB.pO(qL), new v(L(166), function(e) {
							return e.textContent === L(166) ? (e.textContent = L(167), qL.e.readOnly = !0, aLR[0].ps(0), aLR[1].ps(0), aLR[0].button.style.color = b9.nb, aLR[1].button.style.color = b9.nb, aLE(bh.kn.data[157]
								.value)) : aLG(), !0
						})),
						aLR = (aLB.pO(new r2([aLJ.button])), [new v("−", function(e) {
							return qL.e.readOnly && ay.x.aDm(0) && (b8.pX.a28(e), aLG(), ay.aLH.aLI({
								ro: 2,
								rk: data.rk,
								value: bJ.p5(bh.kn.data[157].value, 3, 32767)
							})), !0
						}, 1), new v("+", function(e) {
							return qL.e.readOnly && ay.x.aDm(0) && (b8.pX.a28(e), aLG(), ay.aLH.aLI({
								ro: 1,
								rk: data.rk,
								value: bJ.p5(bh.kn.data[157].value, 3, 32767)
							})), !0
						}, 1)]),
						pG = aLB.pF(),
						aLE = function(f0) {
							return f0 = b8.fu.a2c(f0, 3, 32767), pG.textContent = L(200, [f0 - 1, f0, bh.kn.data[105].value]), f0
						};
					aLB.pO(new r2([aLR[0].button, aLR[1].button]));
					for (var aA = 0; aA < 2; aA++) aLR[aA].button.style.fontSize = "1.6em";
					var aLG = function() {
						aLJ.button.textContent = L(166), qL.e.readOnly = !1, aLR[0].ps(1), aLR[1].ps(1), aLR[0].button.style.color = b9.mf, aLR[1].button.style.color = b9.mf
					};
					aLE(bh.kn.data[157].value)
				}
				return aLB
			}()), pS
	}())
}

function aKj() {
	var aLe, aLf, aLg, pS;

	function aLh() {
		aLj(), 2 !== aC.data.aIncomeType && (aC.data.aIncomeData = null), s.aKs()[19] = null, s.a07()
	}

	function aLj() {
		2 === aC.data.aIncomeType ? (b8.pg.a1U(aLg.tw(), aC.data.aIncomeData, 255), b8.pg.max(aC.data.aIncomeData) || (aC.data.aIncomeType = 0)) : 1 !== aC.data.aIncomeType || aC.data.aIncomeValue || (aC.data.aIncomeType = 0)
	}
	this.show = function() {
		aLe.show(), this.resize()
	}, this.qo = function() {
		aLe.qo()
	}, this.resize = function() {
		aLe.resize(), aLf.resize()
	}, this.a0r = function(et) {
		2 === et && aLe.tW[0].pp()
	}, aLe = new tP(L(229), [new v("⬅️ " + L(32), aLh)]), aLf = new pQ(aLe.tV, (function(pS) {
		var aLB = new pA;
		aLB.pD(L(230)), aLB.pL(new tK({
			tO: [L(231), L(232), L(233)],
			value: aC.data.aIncomeType
		}, function(dx) {
			aLj(), 2 !== dx || aC.data.aIncomeData || (aC.data.aIncomeData = new Uint8Array(aC.eV)), aC.data.aIncomeType = dx, s.t(22)
		})), pS.push(aLB)
	}(pS = []), function(pS) {
		var aLB;
		1 === aC.data.aIncomeType && ((aLB = new pA).pD("Value"), aLB.pO(new qM({
			dx: -1,
			value: aC.data.aIncomeValue
		}, 1, 0, function(e) {
			var value = bJ.p5(Math.floor(e.target.value), 0, 255);
			e.target.value = aC.data.aIncomeValue = value
		})), pS.push(aLB))
	}(pS), function(pS) {
		var aLB;
		2 === aC.data.aIncomeType && ((aLB = new pA).pD("Data"), (aLg = new tn(0, 1, 0, 1)).tu(b8.zO.a30(aC.data.aIncomeData, 4)), aLB.pO(aLg), pS.push(aLB))
	}(pS), pS))
}

function aKm() {
	var aLe, aLf, aLg;

	function aLh() {
		aLj(), 3 !== aC.data.botDifficultyType || b8.pg.a1I(aC.data.botDifficultyData) || (aC.data.botDifficultyType = 0), 3 !== aC.data.botDifficultyType && (aC.data.botDifficultyData = null), s.aKs()[19] = null, s.a07()
	}

	function aLj() {
		3 === aC.data.botDifficultyType && b8.pg.a1U(aLg.tw(), aC.data.botDifficultyData, aD.jz.length - 1)
	}

	function aLo(pS, dx) {
		var aLB = new pA,
			value = (aLB.pD(dx < 0 ? L(57) : L(56) + " " + be.z9[dx % 9]), 0 <= dx && (aLB.pJ(L(236) + ": " + aC.data.teamPlayerCount[dx]).style.marginBottom = "1em"), dx < 0 ? aC.data.botDifficultyValue : aC.data.botDifficultyTeam[dx]);
		aLB.pL(new tK({
			tO: aD.jz,
			value: value
		}, function(hM) {
			dx < 0 ? aC.data.botDifficultyValue = hM : aC.data.botDifficultyTeam[dx] = hM
		})), pS.push(aLB)
	}
	this.show = function() {
		aLe.show(), this.resize()
	}, this.qo = function() {
		aLe.qo()
	}, this.resize = function() {
		aLe.resize(), aLf.resize()
	}, this.a0r = function(et) {
		2 === et && aLe.tW[0].pp()
	}, aLe = new tP(L(57), [new v("⬅️ " + L(32), aLh)]), aLf = new pQ(aLe.tV, function() {
		var pS = [];
		if (function(pS) {
				var aLB = new pA,
					tO = (aLB.pD(L(230)), [L(232), L(234), L(235), L(233)]),
					value = aC.data.botDifficultyType;
				0 === aC.data.gameMode && (value = Math.min(value, 2), tO.splice(2, 1));
				aLB.pL(new tK({
					tO: tO,
					value: value
				}, function(dx) {
					aLj(), aC.data.botDifficultyType = dx, 0 === aC.data.gameMode && 2 === dx && (aC.data.botDifficultyType = 3), 3 !== aC.data.botDifficultyType || aC.data.botDifficultyData || (aC.data.botDifficultyData =
						new Uint8Array(aC.eV)), 2 !== aC.data.botDifficultyType || aC.data.botDifficultyTeam || (aC.data.botDifficultyTeam = new Uint8Array(9)), s.t(25)
				})), pS.push(aLB)
			}(pS), 0 === aC.data.botDifficultyType) aLo(pS, -1);
		else if (2 === aC.data.botDifficultyType)
			for (var aA = 0; aA < aC.data.teamPlayerCount.length; aA++) aC.data.teamPlayerCount[aA] && aLo(pS, aA);
		else 3 === aC.data.botDifficultyType && ! function(pS) {
			var aLB = new pA;
			aLB.pD("Data"), (aLg = new tn(0, 1, 0, 1)).tu(b8.zO.a30(aC.data.botDifficultyData, 8)), aLB.pO(aLg), pS.push(aLB)
		}(pS);
		return pS
	}())
}

function aLp(data) {
	var aKt, aLq, aLr, aLs, aLt, aLu, aLv, colors, aLw, aLx, aLy = 0,
		aLz = 0,
		aM0 = !1,
		aM1 = !1,
		aM2 = [1, 5, 60, 240, 1440, 10080, 43200];

	function aMW(ks, kt) {
		! function(ks, kt) {
			return aLq < ks && ks < aLq + aLs && aLr < kt && kt < aLr + aLt
		}(aLy = ks, aLz = kt) ? (aM0 && (bd.dc = !0), aM0 = !1) : (aM0 = !0, bd.dc = !0)
	}
	this.show = function() {
		aM1 = bh.kn.data[127].value, aKt.show(), this.resize()
	}, this.qo = function() {
		aKt.qo()
	}, this.resize = function() {
		aKt.resize();
		var et = h.k,
			td = aKt.ta(),
			aMB = et * td.tc,
			et = et * td.qr;
		aLu = b8.pX.sC(.06), aLv = b8.pX.sC(.04), aLq = b8.pX.sC(.06), aLr = et + aLu, aLs = h.i - aLq - aLv, aLt = aMB + et - aLr - aLv
	}, this.te = function() {
		aKt.te(),
			function() {
				var aA, aM8, g1, ef, er, g = data.data,
					aMF = 1,
					aMG = .125,
					aMH = aM1 ? 65536 : 0;
				for (aA = 0; aA < g.length; aA++)
					for (aM8 = g[aA].aM8, g1 = aM8.length, aMF = Math.max(g1, aMF), er = 0; er < g1; er++) aMG = Math.max(aM8[er], aMG), aMH = Math.min(aM8[er], aMH);
				var m6 = aLr + aLt,
					ws = aLt / (aMG - aMH),
					wr = 1 / (aMF - 1);
				for (tf.lineWidth = ba.xo, aA = 0; aA < g.length; aA++) {
					for (aM8 = g[aA].aM8, g1 = aM8.length, ef = aLq, tf.beginPath(), tf.moveTo(ef + aLs, m6 - ws * (aM8[g1 - 1] - aMH)), er = g1 - 2; 0 <= er; er--) tf.lineTo(ef + wr * er * aLs, m6 - ws * (aM8[er] - aMH));
					tf.strokeStyle = colors[aA], tf.stroke()
				}(function(aMH, aMG, m6, ws) {
					tf.font = b8.pX.rM(0, .25 * aLq), b8.pX.textBaseline(tf, 1), b8.pX.textAlign(tf, 2), tf.fillStyle = colors[0];
					for (var ef = .92 * aLq, aA = 0; aA < 3; aA++) {
						var f0 = aMH + aA * (aMG - aMH) / 2;
						tf.fillText((f0 / 1e3).toFixed(3), ef, m6 - ws * (f0 - aMH))
					}
				})(aMH, aMG, m6, ws),
				function(aMF) {
					var eh = aLr + aLt + .15 * aLv;
					tf.font = b8.pX.rM(0, Math.min(.4 * aLv, .028 * h.i)), b8.pX.textBaseline(tf, 0), b8.pX.textAlign(tf, 2), tf.fillStyle = colors[0], tf.fillText(b8.a19.a1w(aLw), aLq + aLs, eh), b8.pX.textAlign(tf, 0), tf.fillText(b8.a19.a1w(
						new Date(aLx.getTime() - 6e4 * (aMF - 1) * aM2[data.aM7])), aLq, eh)
				}(aMF),
				function(aMF, aMH, aMG) {
					if (aM0 && !(aMF < 2)) {
						for (var a70, dx = (aLy - aLq) / aLs * (aMF - 1), aMK = Math.floor(dx), aML = Math.floor(1 + dx), aMM = dx - aMK, aMN = 1e5, aMO = -1, aMP = -1, aMQ = aMG - (aMG - aMH) * (aLz - aLr) / aLt, g = data.data, aA = 0; aA < g
							.length; aA++) {
							var aAe, aM8 = g[aA].aM8;
							aM8.length <= aML || (aM8 = aM8[aMK] + aMM * (aM8[aML] - aM8[aMK]), (aAe = Math.abs(aMQ - aM8)) < aMN && (aMN = aAe, aMO = aA, aMP = aM8))
						} - 1 !== aMO && (aMG = aLr + aLt - (aMP - aMH) / (aMG - aMH) * aLt, tf.lineWidth = .5 * ba.xo, tf.strokeStyle = colors[aMO], tf.beginPath(), tf.moveTo(aLq, aMG), tf.lineTo(aLy, aMG), tf.lineTo(aLy, aLr + aLt), tf
						.stroke(), tf.beginPath(), tf.arc(aLy, aMG, .1 * aLq, 0, 2 * Math.PI), tf.fillStyle = colors[aMO], tf.fill(), aMH = aLr + aLt + .15 * aLv, b8.pX.textAlign(tf, 1), a70 = aMF - 2 < dx ? (a70 = aLx.getTime() - 6e4 * aM2[
								data.aM7], new Date(a70 + (dx - (aMF - 2)) * (aLw.getTime() - a70))) : new Date(aLx.getTime() - 6e4 * (aMF - dx - 1) * aM2[data.aM7]), aMF = b8.a19.a1w(a70), dx = b8.pX.measureText(aMF), a70 = bJ.p5(aLy, aLq +
								.5 * dx, aLq + aLs - .5 * dx), tf.fillStyle = b8.color.mX(70, 50, 20), tf.fillRect(a70 - .52 * dx, aLr + aLt, 1.04 * dx, .55 * aLv), tf.fillStyle = colors[0], tf.fillText(aMF, a70, aMH), tf.font = b8.pX.rM(0,
								.25 * aLq), b8.pX.textBaseline(tf, 1), b8.pX.textAlign(tf, 2), a70 = .92 * aLq, aMF = (aMP / 1e3).toFixed(3), dx = b8.pX.measureText(aMF), aMH = a70 - 1.04 * dx, tf.fillStyle = b8.color.mX(70, 50, 20), tf
							.fillRect(aMH, aMG - .1625 * aLq, aLq - aMH, .275 * aLq), tf.fillStyle = colors[aMO], tf.fillText(aMF, a70, aMG))
					}
				}(aMF, aMH, aMG)
			}(), tf.lineWidth = ba.xo, tf.strokeStyle = b9.mf, tf.beginPath(), tf.moveTo(aLq, aLr), tf.lineTo(aLq, aLr + aLt), tf.lineTo(aLq + aLs, aLr + aLt), tf.stroke();
		var aA, fontSize = .5 * aLu,
			g = (tf.font = b8.pX.rM(0, fontSize), b8.pX.textBaseline(tf, 1), b8.pX.textAlign(tf, 0), data.data),
			eY = g.length,
			eh = aLr - .5 * aLu,
			pE = "";
		for (aA = 0; aA < eY; aA++) pE += g[aA].name + "  ";
		pE = pE.trim();
		var aMT = b8.pX.measureText(pE),
			ef = .5 * (h.i - aMT);
		for (aMT > h.i && (ef = 0, tf.font = b8.pX.rM(0, h.i / aMT * fontSize)), aA = 0; aA < eY; aA++) tf.fillStyle = colors[aA], tf.fillText(g[aA].name, ef, eh), ef += b8.pX.measureText(g[aA].name + "  ")
	}, this.gm = function(ks, kt) {
		aMW(ks, kt)
	}, this.a0J = function(ks, kt) {
		aMW(ks, kt)
	}, this.a0r = function(et) {
		2 === et && aKt.tW[0].pp()
	};
	var aA, dk, a1u, hM, eb = data.data,
		eY = eb.length,
		max = 1;
	for (aA = 0; aA < eY; aA++) max = Math.max(max, eb[aA].aM8.length);
	for (aA = 0; aA < eY; aA++)
		for (; eb[aA].aM8.length < max;) eb[aA].aM8.unshift(0);
	dk = new Date, a1u = 6e4 * dk.getTimezoneOffset(), hM = dk.getTime() - a1u, aLw = new Date(hM), 6 === data.aM7 ? function(dk, a1u) {
		var aMA = dk.getUTCFullYear(),
			dk = dk.getUTCMonth() + 1;
		aLx = dk < 12 ? new Date(Date.UTC(aMA, dk) - a1u) : new Date(Date.UTC(aMA + 1, 0) - a1u)
	}(dk, a1u) : (a1u = 6e4 * aM2[data.aM7], aLx = data.aM7 <= 4 ? new Date(hM + a1u - dk.getTime() % a1u) : new Date(hM + a1u - (dk.getTime() + 2592e5) % a1u)), hM = b8.color, colors = [b9.mf, hM.mX(255, 0, 0), hM.mX(0, 200, 0), hM.mX(80, 80,
		255), hM.mX(255, 255, 0), hM.mX(255, 0, 255), hM.mX(0, 255, 255), hM.mX(255, 140, 0), hM.mX(128, 128, 128), hM.mX(0, 255, 140)], aKt = new tP(L(237) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.aM7] + ", " + b8.a19.a1t(aLw), [
		new v("⬅️ " + L(32), function() {
			s.x.aAY()
		}), new v(L(238), function() {
			s.t(14)
		})
	], !1)
}

function aKb() {
	var aKt, aKu, pS;
	this.show = function() {
		aKt.show(), this.resize()
	}, this.qo = function() {
		aKt.qo()
	}, this.resize = function() {
		aKt.resize(), aKu.resize()
	}, this.a0r = function(et) {
		2 === et && aKt.tW[0].pp()
	}, aKt = new tP(L(239), [new v("⬅️ " + L(32), function() {
		s.aKr(13)
	})]), aKu = new pQ(aKt.tV, ((pS = []).push(function() {
		var aLB = new pA,
			aLJ = (aLB.pD(L(240)), aLB.pF(L(241)), new v(L(242), function() {
				bh.qz.r0(130, 0), s.x.aMb()
			}, 0, 0, 1)),
			qL = new qM(bh.kn.data[126], 0, function() {
				aLJ.button.click()
			});
		return aLB.pO(qL), qL.e.placeholder = "a,b,c", qL.e.style.marginTop = "0.5em", aLB.pO(new r2([aLJ.button])), aLB
	}()), pS.push(function() {
		var aLB = new pA,
			aLJ = new v(L(242), function() {
				bh.qz.r0(130, 1), s.x.aMb()
			}, 0, 0, 1),
			aMc = new qM(bh.kn.data[129], 1, function() {
				aMc.e.focus()
			}),
			aMd = new qM(bh.kn.data[128], 1, function() {
				aLJ.button.click()
			});
		return aLB.pD(L(243)), aLB.pO(aMd), aMd.e.style.marginBottom = "0.5em", aLB.pD(L(244)), aLB.pO(aMc), aLB.pO(new r2([aLJ.button])), aLB
	}()), pS.push(function() {
		var aLB = new pA;
		return aLB.pD(L(245)), bh.kn.data[125].tO = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], aLB.pL(new tK(bh.kn.data[125])), aLB
	}()), pS.push(function() {
		var aLB = new pA;
		return aLB.pD(L(246)), aLB.pO(new qw(bh.kn.data[127], L(247))), aLB
	}()), pS))
}

function aKa() {
	var aKt, aMe, aLs, aMf, aMg, aMh, colors = [0, 0, 0],
		aMi = -1;

	function aMl(aA) {
		var aMm = aMe.eh + aA * (ba.gap + aMh);
		tf.fillStyle = "rgb(" + (0 === aA ? 150 : 2 === aA ? 30 : 0) + "," + (1 === aA ? 130 : 2 === aA ? 30 : 0) + "," + (2 === aA ? 220 : 0) + ")", tf.fillRect(aMf, aMm, colors[aA] * aMg, aMh), tf.strokeStyle = b9.mf, tf.strokeRect(aMf, aMm, aMg,
			aMh), tf.fillStyle = b9.mf, tf.font = b8.pX.rM(0, .32 * aMh), b8.pX.textBaseline(tf, 1), b8.pX.textAlign(tf, 0), tf.fillText(L(0 === aA ? 250 : 1 === aA ? 251 : 252) + aMj(aA), aMf + ba.gap, aMm + .53 * aMh)
	}

	function aMj(aA, aMn) {
		return aMn = aMn || 256, bJ.p5(Math.floor(aMn * colors[aA]), 0, aMn - 1)
	}

	function a0n(ks, kt) {
		return !(ks < aMf || kt < aMe.eh || ks > aMe.ef + aMe.i || kt > aMe.eh + aMe.j)
	}
	this.show = function() {
		var f0 = bh.kn.data[121].value;
		colors[0] = (f0 >> 12) / 63, colors[1] = (f0 >> 6 & 63) / 63, colors[2] = (63 & f0) / 63, aKt.show(), this.resize()
	}, this.qo = function() {
		bh.qz.r0(121, (aMj(0, 64) << 12) + (aMj(1, 64) << 6) + aMj(2, 64)), aKt.qo()
	}, this.resize = function() {
		aKt.resize(), aMe.resize();
		var et = h.k,
			td = aKt.ta(),
			aMk = (aMe.eh = Math.max(aMe.eh, et * td.qr + ba.gap), et * td.tc - 2 * ba.gap);
		aMe.j = Math.min(aMe.j, aMk), aMe.i = 2 * aMe.j, aMe.eh = et * td.qr + .5 * (et * td.tc - aMe.j), aMe.ef = .5 * (h.i - aMe.i), aLs = .25 * aMe.i, aMf = aMe.ef + aLs + ba.gap, aMg = aMe.i - aLs - ba.gap, aMh = (aMe.j - 2 * ba.gap) / 3
	}, this.te = function() {
		var dw, sB, es;
		aKt.te(), tf.lineWidth = ba.xo, dw = aMj(0), sB = aMj(1), es = aMj(2), tf.fillStyle = "rgb(" + dw + "," + sB + "," + es + ")", tf.fillRect(aMe.ef, aMe.eh, aLs, aMe.j), tf.strokeStyle = b9.mf, tf.strokeRect(aMe.ef, aMe.eh, aLs, aMe.j), tf
			.fillStyle = dw + sB + es < 306 && sB < 150 ? b9.mf : b9.mW, b8.pX.textBaseline(tf, 1), b8.pX.textAlign(tf, 1), tf.font = b8.pX.rM(0, .1 * aMe.j), tf.rotate(-Math.PI / 2), tf.fillText(L(249), -aMe.eh - .5 * aMe.j, aMe.ef + .5 * aLs),
			tf.setTransform(1, 0, 0, 1, 0, 0), aMl(0), aMl(1), aMl(2)
	}, this.gm = function(ks, kt) {
		a0n(ks, kt) && (aMi = bJ.p5(Math.floor((kt - aMe.eh) / (aMh + .75 * ba.gap)), 0, 2), colors[aMi] = bJ.p5((ks - aMf) / aMg, 0, 1), bd.dc = !0)
	}, this.a0J = function(ks) {
		-1 !== aMi && (colors[aMi] = bJ.p5((ks - aMf) / aMg, 0, 1), bd.dc = !0)
	}, this.a0M = function(ks, kt, deltaY) {
		a0n(ks, kt) && (ks = bJ.p5(Math.floor((kt - aMe.eh) / (aMh + .75 * ba.gap)), 0, 2), colors[ks] = bJ.p5(colors[ks] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), bd.dc = !0)
	}, this.a0h = function() {
		0 <= aMi && (aMi = -1, bd.dc = !0)
	}, this.a0r = function(et) {
		2 === et && aKt.tW[0].pp()
	}, aKt = new tP(L(248), [new v("⬅️ " + L(32), function() {
		s.x.aAY()
	})], !1), aMe = new q9([.5, .25], [.5, .5], 1)
}

function aKi() {
	var aLe, aLf, aLg, q7;

	function aLh() {
		aLj(), 1 !== aC.data.colorsType && (aC.data.colorsData = null), s.aKs()[19] = null, s.a07()
	}

	function aMo() {
		aLj(), s.t(21)
	}

	function aLj() {
		1 === aC.data.gameMode ? aC.a3H.a3L() : 0 === aC.data.gameMode && 1 === aC.data.colorsType && b8.pg.a1U(aLg.tw(), aC.data.colorsData, 262143)
	}
	this.show = function() {
		aLe.show(), this.resize()
	}, this.qo = function() {
		aLe.qo()
	}, this.resize = function() {
		aLe.resize(), aLf.resize()
	}, this.a0r = function(et) {
		2 === et && aLe.tW[0].pp()
	}, q7 = [new v("⬅️ " + L(32), aLh)], 1 === aC.data.gameMode && q7.push(new v(L(253), aMo, 1, 1)), aLe = new tP(L(254), q7), aLf = new pQ(aLe.tV, (function(pS) {
		var aLB = new pA;
		aLB.pD(L(230)), 0 === aC.data.gameMode && (aLB.pL(new tK({
			tO: [L(255), L(233)],
			value: aC.data.colorsType
		}, function(dx) {
			aLj(), aC.data.colorsType = dx, 1 !== aC.data.colorsType || aC.data.colorsData && aC.data.colorsData.length === aC.eV || (aC.data.colorsData = new Uint32Array(aC.eV)), s.t(21)
		})), aLB.pO(new rC));
		aLB.pO(new qw({
			value: aC.data.selectableColor
		}, L(256), function(value) {
			aC.data.selectableColor = value
		})), pS.push(aLB)
	}(q7 = []), 0 === aC.data.gameMode ? 1 === aC.data.colorsType && function(pS) {
		var aLB = new pA;
		aLB.pD("Data"), (aLg = new tn(0, 1, 0, 1)).tu(b8.zO.a30(aC.data.colorsData, 1)), aLB.pO(aLg), pS.push(aLB)
	}(q7) : (aC.a3H.a3L(), q7.push(function() {
		var aLB = new pA;
		aLB.pD(L(236));
		for (var aA = 0; aA < be.z9.length; aA++) {
			var hM = (aA + 1) % be.z9.length,
				e = aLB.pJ((0 == hM ? "" : "Team ") + be.z9[hM]);
			aA && (e.style.marginTop = "0.5em"), aLB.pO(new qM({
				dx: -1,
				value: aC.data.teamPlayerCount[hM]
			}, 1, 0, function(e) {
				aLe.tW[1].ps(0);
				var playerCount = bJ.p5(Math.floor(e.target.value), 0, 512);
				e.target.value = playerCount, aC.data.teamPlayerCount[e.target.aMq] = playerCount
			})).e.aMq = hM
		}
		return aLB
	}())), q7))
}

function rn(id, a2f, aMr) {
	var aKt, aMs;

	function aMx() {
		aMs.pT.innerHTML += "<br>" + L(259)
	}

	function aMw() {
		bB.a6(48), bB.a7(24, Math.floor(bJ.pow(24) * Math.random())), bB.a7(24, Math.floor(bJ.pow(24) * Math.random())), bF.dU(bB.aB), bh.qz.r0(110, bD.rp.rq(bD.rp.rr(8))), ay.aLH.aNB()
	}
	this.aMt = !0, this.aMu = id, this.show = function() {
		aKt.show(), this.resize(), 15 === id ? (ay.x.aMv(id) ? aMw : aMx)() : 16 === id ? ay.x.aMv(id) ? ay.aAV.aMy(2) : aMx() : 17 === id ? ay.x.aMv(id) ? ay.aAV.aMy(3) : aMx() : 18 === id ? (ay.x.close(0, 3253), ay.x.aDs(0, id), aMx()) : 21 ===
			id ? ay.x.aMv(id) ? ay.aMz.aN0(a2f.s6, a2f.s7, a2f.s8) : aMx() : 22 === id ? ay.x.aMv(id) ? ay.aMz.aN1(a2f.s6, a2f.aN2, a2f.aN3) : aMx() : 23 === id ? ay.x.aMv(id) ? ay.aMz.aN4(a2f.aM7, a2f.zR) : aMx() : 24 === id ? ay.x.aMv(id) ? ay
			.aMz.aN5(a2f.aM7, a2f.s7, a2f.s8) : aMx() : 25 === id ? ay.x.aMv(id) ? ay.aLH.aLX(a2f) : aMx() : 28 === id ? ay.x.aMv(id) ? ay.aMz.aN6(a2f.s6, a2f.aN2, a2f.aN3) : aMx() : 29 === id && (ay.x.aMv(id) ? ay.aLH.aN7(a2f) : aMx())
	}, this.aN8 = function() {
		15 === id ? aMw() : 16 === id ? ay.aAV.aMy(2) : 17 === id ? ay.aAV.aMy(3) : 18 === id ? s.t(8, this.aKR, new rn(16)) : 21 === id ? ay.aMz.aN0(a2f.s6, a2f.s7, a2f.s8) : 22 === id ? ay.aMz.aN1(a2f.s6, a2f.aN2, a2f.aN3) : 23 === id ? ay.aMz
			.aN4(a2f.aM7, a2f.zR) : 24 === id ? ay.aMz.aN5(a2f.aM7, a2f.s7, a2f.s8) : 25 === id ? ay.aLH.aLX(a2f) : 28 === id ? ay.aMz.aN6(a2f.s6, a2f.aN2, a2f.aN3) : 29 === id ? ay.aLH.aN7(a2f) : 1e3 === id && (this.aMu = id = 25, ay.aLH.aLX(
				a2f))
	}, this.aN9 = function(code, bp, data) {
		!bp && code !== id || (16 === code ? s.t(7, this.aKR) : 17 === code ? (ay.x.close(0, 3252), bh.x.uV(0), bh.kn.data[117].tO && 0 < bh.kn.data[117].tO.length ? (bp = bh.x.uW(0), bh.qz.r0(105, bp.rk), bh.qz.r0(106, bp.password), s.t(8, this
			.aKR, new rn(16))) : (bh.qz.r0(105, ""), s.x.aAY())) : 21 === code ? s.t(10, this.aKR, new aNA(data)) : 23 === code ? s.t(13, 0, new aLp({
			data: data,
			aM7: a2f.aM7
		})) : 25 === code && (s.x.aKc.rk = a2f.rk, s.t(15, this.aKR)))
	}, this.qo = function() {
		aKt.qo()
	}, this.resize = function() {
		aKt.resize(), aMs.resize()
	}, this.a0r = function(et) {
		2 === et && aKt.tW[0].pp()
	}, aKt = new tP(L(257), [new v("⬅️ " + L(32), function() {
		aMr ? s.t(29) : s.x.aAY()
	})]), aMs = new r1(aKt.tV, L(258))
}

function aKg() {
	var aLe, aLf, pS;

	function aNE() {
		var g1;
		1 === aC.data.gameMode ? (aC.data.teamPlayerCount || (aC.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), aC.a3H.a3L()), g1 = b8.pg.a1O(aC.data.teamPlayerCount, 0), aC.data.numberTeams = g1) : (2 === aC.data
			.botDifficultyType && (aC.data.botDifficultyType = 0), 1 === aC.data.spawningType && (aC.data.spawningType = 0))
	}

	function aLh() {
		1 !== aC.data.gameMode && (aC.data.teamPlayerCount = null), aNG(), aC.data.canvas = null, s.t(5, 5)
	}

	function aNG() {
		b7.on.dU(), bh.qz.r0(156, b7.a3X.yG())
	}

	function aNC() {
		aC.data.isReplay = 0, aNG(), aC.a3H.a3i(), aZ.aE4(), aC.a3H.a3f(), aC.data.canvas = 2 === aC.data.mapType ? bQ.vS : null, aC.a3K(), aC.a3J = 1
	}

	function aNU() {
		aNE();
		for (var g = [aNJ(), aNK(), aNL()], aA = 3; aA < 6; aA++) aLf.pT.removeChild(aLf.pU[aA].pC), aLf.pU[aA] = g[aA - 3], aLf.pT.appendChild(aLf.pU[aA].pC);
		aLf.resize()
	}

	function aNJ() {
		var aNV, aLB = new pA;
		return aLB.pD(L(254)), aNV = 0 === aC.data.gameMode ? [L(255), L(233)][aC.data.colorsType] : aC.data.numberTeams + " Team" + (1 === aC.data.numberTeams ? "" : "s"), aLB.pJ(aNV), aLB.pO(new r2([new v(L(263), function() {
			s.t(21)
		}).button])), aLB
	}

	function aNK() {
		var aLB = new pA,
			g = (aLB.pD(L(57)), [L(232) + ": " + aD.jz[aC.data.botDifficultyValue], L(234), L(235), L(233)]);
		return aLB.pJ(g[aC.data.botDifficultyType]), aLB.pO(new r2([new v(L(263), function() {
			s.t(25)
		}).button])), aLB
	}

	function aNL() {
		var aLB = new pA,
			g = (aLB.pD("Spawning"), [L(255), L(265), L(233)]);
		return aLB.pJ(g[aC.data.spawningType]), aLB.pO(new r2([new v(L(263), function() {
			s.t(24)
		}).button])), aLB
	}
	this.show = function() {
		aLe.show(), this.resize(), aLe.tV.scrollTop = s.x.aFz[0]
	}, this.qo = function() {
		s.x.aFz[0] = aLe.tV.scrollTop, aLe.qo()
	}, this.resize = function() {
		aLe.resize(), aLf.resize()
	}, this.a0r = function(et) {
		2 === et && aLe.tW[0].pp()
	}, aLe = new tP("🔧 " + L(260), [new v("⬅️ " + L(32), aLh), new v(L(261), aNC)]), aNE(), aC.data.canvas || (2 === aC.data.mapType ? aC.data.canvas = bQ.vS : 1 === aC.data.mapType ? aC.data.canvas = bQ.aIW(bQ.a3g(aC.data), 0).vS : (aC.data
		.mapType = 0, aC.data.passableWater = aC.data.passableMountains = 1, aC.data.canvas = bQ.aIW(bQ.a3g(aC.data), aC.data.mapSeed).vS)), aLf = new pQ(aLe.tV, (function(pS) {
		var aLB = new pA,
			a1e = (aLB.pD(L(262)), aC.data.canvas);
		a1e.style.width = "100%", aLB.pO({
			e: a1e
		}), aLB.pO(new r2([new v(L(263), function() {
			s.t(20)
		}).button])), pS.push(aLB)
	}(pS = []), function(pS) {
		var aLB = new pA;
		aLB.pD(L(236)), aLB.pO(new qM({
			dx: -1,
			value: aC.data.playerCount
		}, 1, 0, function(e) {
			var playerCount = bJ.p5(Math.floor(e.target.value), 1, 512);
			e.target.value = aC.data.playerCount = playerCount, 1 === aC.data.gameMode && (e = b8.pg.a1O(aC.data.teamPlayerCount, 0), aC.a3H.a3L(), b8.pg.a1O(aC.data.teamPlayerCount, 0) !== e) && aNU()
		})), pS.push(aLB)
	}(pS), function(pS) {
		var aLB = new pA;
		aLB.pD(L(264)), aLB.pL(new tK({
			tO: ["Battle Royale", "Teams"],
			value: aC.data.gameMode
		}, function(dx) {
			aC.data.gameMode !== dx && (aC.data.gameMode = dx, aNU())
		})), pS.push(aLB)
	}(pS), pS.push(aNJ()), pS.push(aNK()), pS.push(aNL()), function(pS) {
		var aLB = new pA,
			g = (aLB.pD(L(266)), [L(267), L(268), L(233)]);
		aLB.pJ(g[aC.data.playerNamesType]), aLB.pO(new r2([new v(L(263), function() {
			s.t(23)
		}).button])), pS.push(aLB)
	}(pS), function(pS) {
		var aLB = new pA,
			g = (aLB.pD(L(229)), [L(231), L(232) + ": " + aC.data.aIncomeValue, L(233)]);
		aLB.pJ(g[aC.data.aIncomeType]), aLB.pO(new r2([new v(L(263), function() {
			s.t(22)
		}).button])), pS.push(aLB)
	}(pS), function(pS) {
		var aLB = new pA,
			g = (aLB.pD(L(269)), [L(231), L(232) + ": " + aC.data.tIncomeValue, L(233)]);
		aLB.pJ(g[aC.data.tIncomeType]), aLB.pO(new r2([new v(L(263), function() {
			s.t(26)
		}).button])), pS.push(aLB)
	}(pS), function(pS) {
		var aLB = new pA,
			g = (aLB.pD(L(270)), [L(231), L(232) + ": " + aC.data.iIncomeValue, L(233)]);
		aLB.pJ(g[aC.data.iIncomeType]), aLB.pO(new r2([new v(L(263), function() {
			s.t(27)
		}).button])), pS.push(aLB)
	}(pS), function(pS) {
		var aLB = new pA,
			g = (aLB.pD(L(271)), [L(231), L(232) + ": " + aC.data.sResourcesValue, L(233)]);
		aLB.pJ(g[aC.data.sResourcesType]), aLB.pO(new r2([new v(L(263), function() {
			s.t(28)
		}).button])), pS.push(aLB)
	}(pS), function(pS) {
		var aLB = new pA;
		aLB.pD(L(272)), aLB.pO(new r2([new v(L(273), function() {
			s.w(), aC.a3H.a3j(), s.x.aFz[0] = 0, s.t(19)
		}).button])), aLB.pO(new r2([new v(L(274), function() {
			bk.aFo()
		}).button])), aLB.pO(new r2([new v(L(275), function() {
			return bk.aFq(), !0
		}).button])), pS.push(aLB)
	}(pS), pS))
}

function aKo() {
	var aLe, aLf, aLg, pS;

	function aLh() {
		aLj(), 2 !== aC.data.iIncomeType && (aC.data.iIncomeData = null), s.aKs()[19] = null, s.a07()
	}

	function aLj() {
		2 === aC.data.iIncomeType && b8.pg.a1U(aLg.tw(), aC.data.iIncomeData, 255)
	}
	this.show = function() {
		aLe.show(), this.resize()
	}, this.qo = function() {
		aLe.qo()
	}, this.resize = function() {
		aLe.resize(), aLf.resize()
	}, this.a0r = function(et) {
		2 === et && aLe.tW[0].pp()
	}, aLe = new tP(L(270), [new v("⬅️ " + L(32), aLh)]), aLf = new pQ(aLe.tV, (function(pS) {
		var aLB = new pA;
		aLB.pD(L(230)), aLB.pL(new tK({
			tO: [L(231), L(232), L(233)],
			value: aC.data.iIncomeType
		}, function(dx) {
			aLj(), 2 !== dx || aC.data.iIncomeData || (aC.data.iIncomeData = new Uint8Array(aC.eV), aC.data.iIncomeData.fill(32)), aC.data.iIncomeType = dx, s.t(27)
		})), pS.push(aLB)
	}(pS = []), function(pS) {
		var aLB;
		1 === aC.data.iIncomeType && ((aLB = new pA).pD("Value"), aLB.pO(new qM({
			dx: -1,
			value: aC.data.iIncomeValue
		}, 1, 0, function(e) {
			var value = bJ.p5(Math.floor(e.target.value), 0, 255);
			e.target.value = aC.data.iIncomeValue = value
		})), pS.push(aLB))
	}(pS), function(pS) {
		var aLB;
		2 === aC.data.iIncomeType && ((aLB = new pA).pD("Data"), (aLg = new tn(0, 1, 0, 1)).tu(b8.zO.a30(aC.data.iIncomeData, 4)), aLB.pO(aLg), pS.push(aLB))
	}(pS), pS))
}

function aKW() {
	var aNW, aNX, aMe, qL, aNY;
	this.aEf = new rv, aMe = new q9([.45, .27], [.5, .5], 2 / 3), aNX = [new v("⚔️<br>" + L(276), function() {
			aNZ(0)
		}, b9.n8), new v("🗡️<br>" + L(260), function() {
			aNZ(1)
		}, b9.nQ), new v("🔑<br>" + L(277), function() {
			aNZ(2)
		}, b9.ng), new v("☰<br>" + L(278), function() {
			aNZ(3)
		}, b9.ms), new v("", function() {
			s.t(12)
		}, b9.mb, !1),
		new v("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new v("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], qL = new qM(bh.kn.data[122]);
	for (var aA = 0; aA < aNX.length; aA++) aNX[aA].button.style.position = "absolute";

	function aNZ(dx) {
		z.a0.setState(10), aa.sE() || aa.aEW(), 0 === dx ? s.x.a3a() : 1 === dx ? (b7.aG9.vD(bh.kn.data[156].value, 1) || aC.a3H.a3j(), s.t(19)) : 2 === dx ? 0 !== z.id || bh.kn.data[140].value ? s.t(8, s.rm, new rn(16)) : s.x.aNa(s.rm, 16) : 3 ===
			dx && s.t(1)
	}
	qL.e.style.position = "absolute", qL.e.style.textAlign = "center", qL.e.placeholder = L(279), this.show = function() {
		aZ.setState(0), z.a0.setState(12), this.aEf.show(), aNX[4].ps(b8.color.a1l(bh.kn.data[121].value)), this.resize(), document.body.appendChild(qL.e);
		for (var aA = 0; aA < aNX.length; aA++) document.body.appendChild(aNX[aA].button);
		1 !== z.id || z.f1 < 5 || (aNY && bd.e7 > aNY + 144e5 ? z.uG.setState(14) : aNY = bd.e7)
	}, this.qo = function() {
		this.aEf.qo(), document.body.removeChild(qL.e);
		for (var aA = 0; aA < aNX.length; aA++) document.body.removeChild(aNX[aA].button)
	}, this.resize = function() {
		this.aEf.resize(), this.aEf.resize(), aMe.resize();
		var gap = .5 * ba.gap,
			sj = 10 / 99 * .84 * aMe.i,
			aNd = .16 * aMe.j,
			a7X = .19 * aMe.i,
			ef = aMe.ef + a7X,
			sj = aMe.eh + sj + 3 * gap,
			i = .5 * (aMe.i - gap) - a7X,
			a7X = aMe.i - 2 * a7X - aNd - gap,
			a7X = (b8.pX.sD(qL.e, ef, sj, a7X, aNd), b8.pX.sD(aNX[4].button, ef + a7X + gap, sj, aNd, aNd), .5 * (aMe.eh + aMe.j - (sj += aNd + gap) - gap));
		b8.pX.sD(aNX[0].button, ef, sj, i, a7X), b8.pX.sD(aNX[1].button, ef + i + gap, sj, i, a7X), b8.pX.sD(aNX[2].button, ef, sj + a7X + gap, i, a7X), b8.pX.sD(aNX[3].button, ef + i + gap, sj + a7X + gap, i, a7X);
		b8.pX.sD(aNX[5].button, ef, sj + a7X * 2 + gap * 2, i * 2 + gap, a7X / 3);
		b8.pX.sD(aNX[6].button, ef, sj + a7X * 2.33 + gap * 3, i * 2 + gap, a7X / 3);
		for (var aA = 0; aA < aNX.length; aA++) aNX[aA].button.style.font = b8.pX.rM(0, b8.pX.a22(.065 * aMe.j)), b8.pX.pi(aNX[aA].button, 5);
		qL.e.style.font = b8.pX.rM(0, b8.pX.a22(.08 * aMe.j)), b8.pX.pi(qL.e, 5)
	}, this.te = function() {
		if (aZ.aE8(), aS.te(), aN.te(), bW.te(), aa.sE()) {
			if (__fx.settings.displayWinCounter) {
				const size = Math.floor(aMe.i * 0.03);
				tf.font = b8.pX.rM(1, size);
				tf.fillStyle = "#ffffff";
				const text = "Win count: " + __fx.wins.count;
				const textLength = tf.measureText(text).width;
				tf.textAlign = "left";
				tf.textBaseline = "middle";
				tf.fillText(text, tf.canvas.width - textLength - size / 2, size);
			};
			tf.imageSmoothingEnabled = !1;
			var et = aa.aEB("territorial.io"),
				mH = .84 * aMe.i / et.width;
			tf.setTransform(mH, 0, 0, mH, aMe.ef + .08 * aMe.i, aMe.eh), aNW = aNW || b8.a15.a2d(et, b8.a15.a2j, [0, 0, 0]);
			for (var ef = -1; ef <= 1; ef += 2)
				for (var eh = -1; eh <= 1; eh += 2) tf.drawImage(aNW, ef, eh);
			tf.drawImage(et, 0, 0), tf.imageSmoothingEnabled = !0;
			var hf = aa.aEB("logo"),
				aNf = .6666 * mH * et.height / hf.height,
				mI = .5 * h.i,
				mJ = aMe.eh + .5 * mH * et.height - .5 * aNf * hf.height;
			tf.setTransform(aNf, 0, 0, aNf, mI - .6 * mH * et.width, mJ), tf.drawImage(hf, 0, 0), tf.setTransform(aNf, 0, 0, aNf, mI + .6 * mH * et.width - aNf * hf.width, mJ), tf.drawImage(hf, 0, 0), tf.setTransform(1, 0, 0, 1, 0, 0), tf
				.imageSmoothingEnabled = !0
		}
	}
}

function aKd() {
	var aKt, aNg, aNh, tQ;

	function aNi(aA) {
		s.t(8, s.rm, new rn(21, {
			s6: aA,
			s7: 0,
			s8: 10
		}))
	}
	this.show = function() {
		aKt.show(), this.resize()
	}, this.qo = function() {
		aKt.qo()
	}, this.resize = function() {
		aKt.resize(), aNg.resize()
	}, this.a0r = function(et) {
		2 === et && aKt.tW[0].pp()
	}, aNh = [new v(L(280), function() {
		aNi(1)
	}, 0, 0, 1), new v(L(281), function() {
		aNi(2)
	}, 0, 0, 1), new v(L(282), function() {
		aNi(3)
	}, 0, 0, 1), new v(L(283), function() {
		aNi(0)
	}, 0, 0, 1), new v(L(284), function() {
		aNi(9)
	}, 0, 0, 1), new v(L(285), function() {
		aNi(10)
	}, 0, 0, 1)], tQ = [new v("⬅️ " + L(32), function() {
		s.a07()
	})], aKt = new tP(L(286), tQ), aNg = new q6(aNh, aKt.tV)
}

function aAw(title, pK, aNj) {
	var aKt, aMs;
	this.show = function() {
		aKt.show(), this.resize()
	}, this.qo = function() {
		aKt.qo()
	}, this.resize = function() {
		aKt.resize(), aMs.resize()
	}, this.a0r = function(et) {
		2 === et && aKt.tW[0].pp()
	}, aNj = aNj || [new v("⬅️ " + L(32), function() {
		s.a07()
	}, b9.nK)], aKt = new tP(title, aNj), aMs = new r1(aKt.tV, pK), b8.pX.textAlign(aKt.tV.style, 1)
}

function aNA(data) {
	var aKt, aNk, et, rc;

	function aNl(hi) {
		var eY = data.data.length;
		if (eY) {
			for (var s7, max = min = parseInt(data.data[0][0]), aA = 1; aA < eY; aA++) var aCf = parseInt(data.data[aA][0]),
				min = Math.min(aCf, min),
				max = Math.max(aCf, max);
			s7 = hi < 0 ? min + hi : max + 1, s.t(8, s.aDC().aKR, new rn(21, {
				s6: data.s6,
				s7: s7,
				s8: s7 + Math.abs(hi)
			}))
		}
	}
	this.show = function() {
			aKt.show(), this.resize()
		}, this.qo = function() {
			aKt.qo()
		}, this.resize = function() {
			aKt.resize(), aNk.resize()
		}, this.a0r = function(et) {
			2 === et && aKt.tW[0].pp()
		}, et = data.data.length ? 0 : 1, et = [new v("⬅️ " + L(32), function() {
			s.a07()
		}), new v(L(287), function() {
			aNl(-10)
		}, et, 0, 1), new v(L(288), function() {
			aNl(10)
		}, et, 0, 1), new v(L(238), function() {
			s.t(11, 10, new aNm({
				s6: data.s6
			}))
		})], rc = [L(289), L(290), L(291), L(292), L(293), L(294), L(295), L(296), L(297), L(298), L(285)], aKt = new tP(rc[data.s6], et),
		function() {
			var aA, eb = {
					rW: []
				},
				rW = eb.rW,
				aNo = data.data,
				eY = aNo.length;
			eY && 0 === aNo[0][0] && 0 <= (dx = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5][data.s6]) && (s.x.s9[dx] = aNo[0][1]);
			var mH = [.1, .001, .01, 1, 100, 1, 1, .1, 100, .01, .01][data.s6],
				a2n = [1, 3, 2, 0, 0, 0, 0, 1, 0, 2, 2][data.s6],
				dx = [
					[L(299), L(300) + " ↗", L(301)],
					[L(299), L(302), L(303), L(304) + " ↗"],
					[L(299), L(300) + " ↗", L(303)],
					[L(299), L(300) + " ↗", L(303)],
					[L(305), L(306), L(307) + " ↗", L(308) + " ↗", L(114)],
					[L(305), L(306), L(309) + " ↗", L(310) + " ↗", L(311)],
					[L(305), L(306), L(312) + " ↗", L(313) + " ↗", L(314)],
					[L(305), L(306), L(309) + " ↗", L(310) + " ↗", L(315)],
					[L(305), L(306), L(307) + " ↗", L(308) + " ↗", L(114)],
					[L(299), L(300) + " ↗", L(303)],
					[L(299), L(300) + " ↗", L(316)]
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
					f0: aNo[aA][0] + 1 + ".",
					dk: 0
				}, {
					f0: aNo[aA][1],
					dk: 1,
					rk: aNo[aA][4],
					rl: aNo[aA][3]
				}, {
					f0: (mH * aNo[aA][2]).toFixed(a2n),
					dk: 0
				}]);
			else if (1 === data.s6)
				for (aA = 0; aA < eY; aA++) rW.push([{
					f0: aNo[aA][0] + 1 + ".",
					dk: 0
				}, {
					f0: aNo[aA][1],
					dk: 0
				}, {
					f0: (mH * aNo[aA][2]).toFixed(a2n),
					dk: 0
				}, {
					f0: aNo[aA][3],
					dk: 1,
					rk: aNo[aA][5],
					rl: aNo[aA][4]
				}]);
			else if (4 === data.s6 || 5 === data.s6 || 6 === data.s6 || 7 === data.s6 || 8 === data.s6)
				for (aA = 0; aA < eY; aA++) {
					var aNr = aNo[aA][5];
					4 === data.s6 || 8 === data.s6 ? "100%" === (aNr = (aNr % 64 * 100 / (aNr >> 6)).toFixed(0) + "%") && (4 === data.s6 ? aNr += " (" + L(317) + ")" : aNr += " (" + L(318) + ")") : 5 === data.s6 ? 32768 <= aNr && (aNr = -(aNr -
						32768)) : aNr = (mH * aNr).toFixed(a2n), rW.push([{
						f0: "" + aNo[aA][0],
						dk: 0
					}, {
						f0: "" + aNo[aA][6],
						dk: 0
					}, {
						f0: aNo[aA][7],
						dk: 1,
						rk: aNo[aA][1],
						rl: aNo[aA][2]
					}, {
						f0: aNo[aA][8],
						dk: 1,
						rk: aNo[aA][3],
						rl: aNo[aA][4]
					}, {
						f0: "" + aNr,
						dk: 0
					}])
				}
			aNk = new rV(aKt.tV, eb)
		}()
}

function aNm(a2f) {
	var aKt, aKu, pS;
	this.show = function() {
		aKt.show(), this.resize()
	}, this.qo = function() {
		aKt.qo()
	}, this.resize = function() {
		aKt.resize(), aKu.resize()
	}, this.a0r = function(et) {
		2 === et && aKt.tW[0].pp()
	}, aKt = new tP(L(319), [new v("⬅️ " + L(32), function() {
		s.aKr(10)
	})]), aKu = new pQ(aKt.tV, ((pS = []).push(function() {
		var aLJ, aLB = new pA,
			aMc = new qM(bh.kn.data[132], 1, function() {
				aLJ.button.click()
			}),
			aMd = new qM(bh.kn.data[131], 1, function() {
				aMc.e.focus()
			});
		aLB.pD(L(243)), aLB.pO(aMd), aMd.e.style.marginBottom = "0.8em", aLB.pD(L(244)), aLB.pO(aMc);
		return aLJ = new v(L(242), function() {
			s7 = Math.floor(aMd.e.value), s8 = Math.floor(aMc.e.value);
			var s8, s7 = {
				a1M: Math.min(s7, s8),
				aK2: Math.max(s7, s8)
			};
			s.t(8, s.aCC(10).aKR, new rn(21, {
				s6: a2f.s6,
				s7: s7.a1M,
				s8: s7.aK2
			}))
		}, 0, 0, 1), aLB.pO(new r2([aLJ.button])), aLB
	}()), pS.push(function() {
		var aLJ, aLB = new pA,
			aMc = new qM(bh.kn.data[134], 1, function() {
				aLJ.button.click()
			}),
			aMd = new qM(bh.kn.data[133], 0, function() {
				aMc.e.focus()
			});
		return aLB.pD(1 === a2f.s6 ? L(320) : L(321)), aLB.pO(aMd), aMd.e.style.marginBottom = "0.8em", aLB.pD(L(322)), aLB.pO(aMc), aLJ = new v(L(242), function() {
			var aN2 = aMd.e.value.slice(0, 20),
				aN3 = Math.abs(Math.floor(aMc.e.value));
			s.t(8, s.aCC(10).aKR, new rn(22, {
				s6: a2f.s6,
				aN2: aN2,
				aN3: aN3
			}))
		}, 0, 0, 1), aLB.pO(new r2([aLJ.button])), aLB
	}()), pS.push(function() {
		var aLJ, aLB = new pA,
			aMc = new qM(bh.kn.data[152], 1, function() {
				aLJ.button.click()
			}),
			aMd = new qM(bh.kn.data[151], 0, function() {
				aMc.e.focus()
			});
		return aLB.pD(L(323)), aLB.pO(aMd), aMd.e.style.marginBottom = "0.8em", aLB.pD(L(322)), aLB.pO(aMc), aLJ = new v(L(242), function() {
			var aN2 = aMd.e.value.slice(0, 5),
				aN3 = Math.abs(Math.floor(aMc.e.value));
			s.t(8, s.aCC(10).aKR, new rn(28, {
				s6: a2f.s6,
				aN2: aN2,
				aN3: aN3
			}))
		}, 0, 0, 1), aLB.pO(new r2([aLJ.button])), aLB
	}()), pS))
}

function aKq() {
	var aNv, sI, aNy, sH, sK, aNw = [new Array(4), [], new Array(2), new Array(2)],
		aNx = new Array(4),
		aNz = new Array(2),
		aO0 = [L(56), L(284), L(324), L(325)];

	function aCQ() {
		var a5Z = aNv.sV.qL.e.value.trim().slice(0, 127);
		a5Z.length < 1 || (aNv.sV.qL.e.value = "", bl.aAz.yr(a5Z))
	}

	function aO3(aO5) {
		bl.x.qa[3] = 1 - bl.x.qa[3], aO4(3, 1, bl.x.qa[3]), aO5 && ay.aCb.aCc(4), bl.x.qa[3] && bh.qz.r0(158, bl.x.qa[0])
	}

	function aO1(er, es) {
		bl.x.qa[er] !== es && (0 === er && bl.x.qa[3] && aO3(0), aO4(er, bl.x.qa[er], 0), aO4(er, es, 1), bl.x.qa[er] = es, 0 === er ? (ay.aCb.aCc(2, es), bl.x.qa[2] ? (aNv.sW.lQ(), aNv.sV.qX(1)) : aNv.sV.qX(0), s.aDC().aCF(), s.aDC().aCE()) : 2 ===
			er && (0 === es ? (ay.aCb.aCc(0), aNv.sV.lQ(), aNv.se()) : (ay.aCb.aCc(1), aNv.sW.lQ(), aNv.sf())))
	}

	function aO4(er, es, color) {
		aNv.sY[er].q7[es].ps(color ? b9.n4 : b9.nn)
	}

	function aO8(aBW) {
		return aBW < 7 ? aBW + 2 + " " + L(332) : 7 === aBW || 10 === aBW ? L(284) + " (Full-Sending: " + L(7 === aBW ? 333 : 334) + ")" : 8 === aBW ? "1v1" : L(335)
	}

	function aO9(f0) {
		var a5c = bJ.dl(f0, 60),
			f0 = f0 % 60;
		return (a5c < 10 ? "0" : "") + a5c + ":" + (f0 < 10 ? "0" : "") + f0
	}
	this.aCn = function() {
		return aNv.sV
	}, this.aAz = function(rk) {
		aO1(2, 0);
		var pE = aNv.sV.qL.e.value,
			rk = "@" + rk + " ";
		pE.length && !b8.zO.a29(pE, " ") && (rk = " " + rk), aNv.sV.qL.e.value = pE += rk, aNv.sV.qL.e.focus()
	}, this.aCD = function() {
		aNv.sW.lQ()
	}, this.aCF = function() {
		var aO7 = bl.x.qa[0],
			aO7 = bl.x.qc[aO7];
		bQ.a6(aO7.eE, aO7.mapSeed), sI.q7[0].button.textContent = L(262) + ": " + bQ.vI.vJ[aO7.eE].name, sI.q7[1].button.textContent = L(264, 0, "Mode") + ": " + aO8(aO7.aBW), sI.q7[2].button.textContent = L(329) + ": " + bQ.vI.vJ[aO7.aDD].name,
			sI.q7[3].button.textContent = L(330, 0, "Next Mode") + ": " + aO8(aO7.aDE), sI.q7[4].button.textContent = L(331) + ": " + aO9(aO7.aCH), sI.resize()
	}, this.aCE = function() {
		var aO7 = bl.x.qa[0],
			qb = bl.x.qc[aO7];
		aNv.sc(qb.sd);
		for (var aA = 0; aA < bl.ss.st.length; aA++) aNw[0][aA].qW.textContent = "" + bl.ss.st[aA].length;
		var ss = bl.ss.st[aO7],
			aOA = ss.length,
			aOB = bl.ss.su[aO7];
		aNw[2][1].qW.textContent = "" + aOA, aNw[3][1].qW.textContent = "" + aOB, sI.q7[4].button.textContent = L(331) + ": " + aO9(qb.aCH);
		for (aA = 0; aA < 4; aA++) {
			var aOC = bl.x.qc[aA];
			aNx[aA] ? 0 === aOC.sd && (aNx[aA].qW.textContent = bQ.vI.vJ[aOC.eE].name) : aNx[aA] = new qV(bQ.vI.vJ[aOC.eE].name, sH.q7[aA].button, 1, 1), b8.zO.startsWith(aO0[aA], "🏆 ") ? aOC.aBc || (aO0[aA] = aO0[aA].substring(3), sH.q7[aA]
				.button.textContent = aO0[aA], sH.q7[aA].button.appendChild(aNw[0][aA].qW), sH.q7[aA].button.appendChild(aNx[aA].qW)) : aOC.aBc && (aO0[aA] = "🏆 " + aO0[aA], sH.q7[aA].button.textContent = aO0[aA], sH.q7[aA].button
				.appendChild(aNw[0][aA].qW), sH.q7[aA].button.appendChild(aNx[aA].qW))
		}
		var qb = "",
			aOE = "";
		0 === aO7 && (qb = bl.qh.aBr(ss, 0, aOA), aOE = bl.qh.aBr(ss, 0, aOB)), aNy[0].qW.textContent = qb, aNy[1].qW.textContent = aOE, aNz[1].qW.textContent = "MP: " + bl.x.aC5[0] + "   SP: " + bl.x.aC5[1] + "   Lobby: " + b8.pg.a1Z(bl.ss.st)
	}, this.aCJ = function() {
		aNv.sV.lQ()
	}, this.show = function() {
		aNv.show(), this.resize(), bl.message.show()
	}, this.qo = function() {
		aNv.qo(), bl.tE.qo(), bl.sq.qo(), bl.message.qo()
	}, this.resize = function() {
		aNv.resize(1 - bl.x.qa[2]), bl.message.resize()
	}, this.a0r = function(et) {
		2 === et ? bl.x.qa[3] ? aO3(1) : aNv.sY[3].q7[0].pp() : et < 2 && aO3(1)
	}, sH = new r5([new v(aO0[0], function() {
		return aO1(0, 0), 2
	}), new v(aO0[1], function() {
		return aO1(0, 1), 2
	}), new v(aO0[2], function() {
		return aO1(0, 2), 2
	}), new v(aO0[3], function() {
		return aO1(0, 3), 2
	})], b9.nn), sI = new r5([new v("", 0, 2), new v("", 0, 2), new v("", 0, 2), new v("", 0, 2), new v("", 0, 2)], b9.no, 1);
	var aO2 = new r5([new v(L(326), function() {
		return aO1(2, 0), 2
	}), new v(L(110), function() {
		return aO1(2, 1), 2
	})], b9.nn);
	sK = new r5([new v(L(327), (__fx.customLobby.setLeaveFunction(() => {
			s.w(), bl.t8(), ay.x.a09(3240), __fx.customLobby.setActive(false), s.t(5, 5)
		}),
		function() {
			s.w(), bl.t8(), ay.x.a09(3240), __fx.customLobby.setActive(false), s.t(5, 5)
		})), new v(L(328), function() {
		return aO3(1), 2
	})], b9.nn), aNv = new sG(sH, sI, aO2, sK, aCQ, bl.tE.aCw);
	for (var aA = 0; aA < 4; aA++) aNw[0][aA] = new qV("0", sH.q7[aA].button);
	aNw[2][1] = new qV("0", aO2.q7[1].button), aNw[3][1] = new qV("0", sK.q7[1].button), aNy = [new qV("", aO2.q7[1].button, 1, 1), new qV("", sK.q7[1].button, 1, 1)], aO4(0, bl.x.qa[0], 1), aO4(2, bl.x.qa[2], 1), (aNz = [new qV(L(236), aNv.sg(), 1,
		0), new qV("", aNv.sg(), 1, 1)])[0].qW.style.fontSize = "0.4em", aNz[1].qW.style.fontSize = "0.4em"
}

function aKX() {
	var aKt, aKu, pS;
	this.show = function() {
		aKt.show(), this.resize()
	}, this.qo = function() {
		aKt.qo()
	}, this.resize = function() {
		aKt.resize(), aKu.resize()
	}, this.a0r = function(et) {
		2 === et && aKt.tW[0].pp()
	}, aKt = new tP(L(336), [new v("⬅️ " + L(32), function() {
		s.t(7, s.aCC(7).aKR)
	}), new v(L(188), function() {
		bh.qz.r0(105, bE.rp.v2(aKu.pU[0].pB[0].e.value, 5)), bh.qz.r0(106, bE.rp.v2(aKu.pU[1].pB[0].e.value, 8)), s.t(8, s.aCC(7).aKR, new rn(18))
	})]), aKu = new pQ(aKt.tV, ((pS = []).push(function() {
		var aLB = new pA;
		return aLB.pD(L(169)), aLB.pO(new qM({
			value: "",
			dx: -1
		})), aLB
	}()), pS.push(function() {
		var aLB = new pA,
			aLK = (aLB.pD(L(171)), new qM({
				value: "",
				dx: -1
			}));
		return aLK.e.type = "password", aLB.pO(aLK), aLB.pO(new r2([new v(L(172), function(e) {
			return e.textContent === L(172) ? (e.textContent = L(173), aLK.e.type = "text") : (e.textContent = L(172), aLK.e.type = "password"), !0
		}).button])), aLB
	}()), pS))
}

function aKe() {
	var aKt, aNg, aNh, tQ;

	function aNi(aA) {
		s.t(8, s.rm, new rn(21, {
			s6: aA,
			s7: 0,
			s8: 10
		}))
	}
	this.show = function() {
		aKt.show(), this.resize()
	}, this.qo = function() {
		aKt.qo()
	}, this.resize = function() {
		aKt.resize(), aNg.resize()
	}, this.a0r = function(et) {
		2 === et && aKt.tW[0].pp()
	}, aNh = [new v(L(294), function() {
		aNi(5)
	}, 0, 0, 1), new v(L(295), function() {
		aNi(6)
	}, 0, 0, 1), new v(L(296), function() {
		aNi(7)
	}, 0, 0, 1)], tQ = [new v("⬅️ " + L(32), function() {
		s.a07()
	})], aKt = new tP(L(337), tQ), aNg = new q6(aNh, aKt.tV)
}

function aKN() {
	this.kn = {}, this.s9 = new Array(6), this.aKc = null, this.aKZ = null, this.rT = 0, this.aFz = [0], this.y = function() {
			s.t(5, 5)
		}, this.a3a = function() {
			s.w(), aY.aDo(0), aY.dU()
		},
		__fx.customLobby.setJoinFunction(() => {
			s.w();
			aY.aDo(0);
			aY.dU();
		}), this.aAY = function() {
			s.t(0 === aZ.zx() ? 5 : 0)
		}, this.aMb = function() {
			if (1 === bh.kn.data[130].value) s.t(8, s.aDC().aKR, new rn(24, {
				aM7: bh.kn.data[125].value,
				s7: bh.kn.data[128].value,
				s8: bh.kn.data[129].value
			}));
			else {
				for (var g = (g = bh.kn.data[126].value.split(",")).slice(0, 10), aA = 0; aA < g.length; aA++) g[aA] = g[aA].trim().slice(0, 7).toUpperCase();
				1 === g.length && 0 === g[0].length && (g = []), s.t(8, s.aDC().aKR, new rn(23, {
					aM7: bh.kn.data[125].value,
					zR: g
				}))
			}
		}, this.aNa = function(aKR, target) {
			s.t(4, aKR, new u("Data Usage Information",
				"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: <a href='" + bI.aOG +
				"' target='_blank'>" + bI.aOG + "</a>", !1, [new v("⬅️ " + L(32), function() {
					s.t(aKR)
				}), new v("✅ Accept", function() {
					bh.qz.r0(140, 1), 0 === target ? s.t(2, aKR) : s.t(8, aKR, new rn(target))
				})]))
		}, this.aOH = function() {
			for (var aA = 0; aA < 6; aA++) this.s9[aA] = bE.ut.ux(bF.oY(5));
			this.s9[1] = "[" + this.s9[1] + "]", 5 === s.rm && (s.aDC().aEf.r0(this.s9), s.aDC().resize())
		}
}

function aKh() {
	var aLe, aLf, aOI, pS;

	function aLh() {
		b4.t8(), s.aKs()[19] = null, s.a07()
	}

	function aOP() {
		aOS(), aOQ()
	}

	function aOS() {
		aOI.pC.lastChild && aOI.pC.removeChild(aOI.pC.lastChild)
	}

	function aOQ() {
		var aOT = bQ.a3g(aC.data);
		aC.data.canvas = bQ.aIW(aOT, aC.data.mapSeed).vS, aOR()
	}

	function aOR() {
		var a1e = aC.data.canvas;
		a1e.style.width = "100%", aOI.pC.appendChild(a1e)
	}
	this.aFj = function(a1e) {
		aC.data.canvas && aOS(), aC.data.canvas = a1e, aOR()
	}, this.show = function() {
		aLe.show(), this.resize()
	}, this.qo = function() {
		aLe.qo()
	}, this.resize = function() {
		aLe.resize(), aLf.resize()
	}, this.a0r = function(et) {
		2 === et && aLe.tW[0].pp()
	}, aLe = new tP(L(262), [new v("⬅️ " + L(32), aLh)]), 2 === aC.data.mapType && b4.dU(), aLf = new pQ(aLe.tV, (function(pS) {
		var aLB = new pA;
		aLB.pD(L(230)), aLB.pL(new tK({
			tO: [L(338), L(339), L(340)],
			value: aC.data.mapType
		}, function(dx) {
			2 === (aC.data.mapType = dx) ? (b4.dU(), aC.data.canvas = null) : (aC.data.passableWater = aC.data.passableMountains = 1, b4.t8()), s.t(20)
		})), 2 <= aC.data.mapType && (aLB.pO(new rC), aLB.pO(new qw({
			value: aC.data.passableWater
		}, L(341), function(value) {
			aC.data.passableWater = value
		})), aLB.pO(new qw({
			value: aC.data.passableMountains
		}, L(342), function(value) {
			aC.data.passableMountains = value
		})));
		pS.push(aLB)
	}(pS = []), function(pS) {
		if (0 === aC.data.mapType) {
			for (var aLB = new pA, tO = (aLB.pD(L(262)), []), aA = 0; aA < bQ.vI.aJO.length; aA++) tO.push(bQ.vI.vJ[bQ.vI.aJO[aA]].name);
			aLB.pL(new tK({
				tO: tO,
				value: aC.data.mapProceduralIndex
			}, function(dx) {
				aC.data.mapProceduralIndex = dx, aOP()
			})), pS.push(aLB)
		}
	}(pS), function(pS) {
		if (1 === aC.data.mapType) {
			for (var aLB = new pA, tO = (aLB.pD(L(262)), []), aA = 0; aA < bQ.vI.aJP.length; aA++) tO.push(bQ.vI.vJ[bQ.vI.aJP[aA]].name);
			aLB.pL(new tK({
				tO: tO,
				value: aC.data.mapRealisticIndex
			}, function(dx) {
				aC.data.mapRealisticIndex = dx, aOP()
			})), pS.push(aLB)
		}
	}(pS), function(pS) {
		var aLB;
		2 === aC.data.mapType && ((aLB = new pA).pD(L(262)), aLB.pO(new r2([new v(L(343), function() {
			return b4.aFc(), !0
		}).button])), pS.push(aLB))
	}(pS), function(pS) {
		(aOI = new pA).pD(L(344)), 2 !== aC.data.mapType ? aOQ() : aC.data.canvas && aOR();
		pS.push(aOI)
	}(pS), function(pS) {
		var aLB, qL, aLJ;
		0 === aC.data.mapType && ((aLB = new pA).pD("Seed"), qL = new qM({
			dx: -1,
			value: aC.data.mapSeed
		}, 1, 0, function(e) {
			e = Math.abs(Math.floor(e.target.value)) % 16384;
			aC.data.mapSeed !== e && (aC.data.mapSeed = e, aOP())
		}), aLJ = new v(L(255), function(e) {
			var aIR = Math.floor(16384 * Math.random());
			if (aC.data.mapSeed !== aIR) return qL.e.value = aC.data.mapSeed = aIR, aOP(), !0
		}), aLB.pO(qL), aLB.pO(new r2([aLJ.button])), pS.push(aLB))
	}(pS), function(pS) {
		var aLB, qL;
		2 === aC.data.mapType && ((aLB = new pA).pD(L(345)), qL = new qM({
			dx: -1,
			value: aC.data.mapName
		}, 0, 0, function(e) {
			aC.data.mapName = e.target.value = e.target.value.slice(0, 20)
		}), aLB.pO(qL), pS.push(aLB))
	}(pS), pS))
}

function u(title, pK, aOU, aNj) {
	var aKt, aMs;
	this.show = function() {
		aKt.show(), this.resize()
	}, this.qo = function() {
		aKt.qo()
	}, this.resize = function() {
		aKt.resize(), aMs.resize()
	}, this.a0r = function(et) {
		2 === et && aKt.tW[0].pp()
	}, aNj = aNj || [new v("⬅️ " + L(32), function() {
		s.a07()
	})], aKt = new tP(title, aNj), aMs = new r1(aKt.tV, pK), aOU && b8.pX.textAlign(aKt.tV.style, 1)
}

function aKk() {
	var aLe, aLf, aLg, pS;

	function aLh() {
		aLj(), 2 === aC.data.playerNamesType && 1 === b8.pg.a1I(aC.data.playerNamesData).length && (aC.data.playerNamesType = 0), 2 !== aC.data.playerNamesType && (aC.data.playerNamesData = null), s.aKs()[19] = null, s.a07()
	}

	function aLj() {
		2 === aC.data.playerNamesType && b8.pg.a1W(aLg.tw(), aC.data.playerNamesData, 20)
	}
	this.show = function() {
		aLe.show(), this.resize()
	}, this.qo = function() {
		aLe.qo()
	}, this.resize = function() {
		aLe.resize(), aLf.resize()
	}, this.a0r = function(et) {
		2 === et && aLe.tW[0].pp()
	}, aLe = new tP(L(266), [new v("⬅️ " + L(32), aLh)]), aLf = new pQ(aLe.tV, (function(pS) {
		var aLB = new pA;
		aLB.pD(L(230)), aLB.pL(new tK({
			tO: [L(267), L(268), L(233)],
			value: aC.data.playerNamesType
		}, function(dx) {
			aLj(), aC.data.playerNamesType = dx, s.t(23)
		})), aLB.pO(new rC), aLB.pO(new qw({
			value: aC.data.selectableName
		}, L(346), function(value) {
			aC.data.selectableName = value
		})), pS.push(aLB)
	}(pS = []), function(pS) {
		var aLB;
		2 === aC.data.playerNamesType && ((aLB = new pA).pD("Data"), aLg = new tn(0, 1, 0, 1), aC.data.playerNamesData && aC.data.playerNamesData.length === aC.eV || (aC.data.playerNamesData = new Array(aC.eV), aC.data.playerNamesData
			.fill("")), aLg.tu(b8.zO.a30(aC.data.playerNamesData, 1, '"')), aLB.pO(aLg), pS.push(aLB))
	}(pS), pS))
}

function aKV() {
	var aLe, ts;

	function aOV() {
		s.w();
		var pE = b7.aOZ(ts.tw());
		(aC.yn && 0 < pE.length && pE === b7.on.a3W || b7.aG9.vD(pE)) && b7.aOa()
	}
	this.show = function(aOW) {
		this.aOX(aOW), aLe.show(), this.resize()
	}, this.aOX = function(aOW) {
		0 === aC.yn ? aOW ? ts.tu(aOW) : b7.on.a3W.length && ts.tu(b7.on.a3W) : (aC.gi || (b7.on.a3W = b7.a3X.yG()), ts.tu(b7.aOY(b7.on.a3W)))
	}, this.qo = function() {
		aLe.qo()
	}, this.resize = function() {
		aLe.resize(), ts.resize()
	}, this.a0r = function(et) {
		2 === et ? aLe.tW[0].pp() : aOV()
	}, aLe = new tP(L(347), [new v("⬅️ " + L(32), function() {
		s.aKr(1)
	}), new v(L(348), function() {
		ts.tx()
	}), new v(L(349), function() {
		ts.ty()
	}), new v(L(350), function() {
		ts.clear()
	}), new v(L(351), function() {
		aOV()
	})]), ts = new tn(L(352)), aLe.tV.appendChild(ts.e)
}

function aKU() {
	var aKt, aKu, pS, aAU, aLB;

	function aOb() {
		var e7;
		aAU !== bh.kn.data[12].value ? (b5.dU(), b5.aAT(), e7 = bd.e7, s.t(4, 1, new u(L(355), L(356), !1, [new v("⬅️ " + L(32), function() {
			s.t(1)
		}), new v("🔄 Reload", function() {
			bd.e7 < e7 + 1500 || z.a0.a1()
		}, b9.n2)]))) : s.t(1)
	}
	this.show = function() {
			aAU = bh.kn.data[12].value, aKt.show(), this.resize()
		}, this.qo = function() {
			aKt.qo()
		}, this.resize = function() {
			aKt.resize(), aKu.resize()
		}, this.a0r = function(et) {
			2 === et && aKt.tW[0].pp()
		}, aKt = new tP(L(353), [new v("⬅️ " + L(32), aOb), new v(L(354), function() {
			s.w(), bh.qz.ua(), s.t(2)
		})]), pS = [], (aLB = new pA).pD(L(357)), aLB.pF(L(358)), pS.push(aLB),
		function(pS) {
			var aLB = new pA,
				g = (aLB.pD(L(376)), b5.data.aAc());
			aLB.pL(new tK({
				tO: g,
				value: b5.data.aAg(g)
			}, function(dx) {
				return bh.qz.r0(12, g[dx].split(":")[0]), !0
			})), pS.push(aLB)
		}(pS),
		function(pS) {
			var aLB = new pA,
				aOe = (aLB.pD(L(374)), []);
			aLB.pO(new r2([new v(L(375), function(e) {
				bV.aOf();
				for (var aA = 0; aA < aOe.length; aA++) aOe[aA].e.value = bV.a9u[aA];
				return b8.pX.a28(e), !0
			}).button]));
			for (var aA = 0; aA < bV.aOg.length; aA++) {
				aLB.pF(bV.aOg[aA]);
				for (var er = 0; er < 2; er++) {
					var dx = 2 * aA + er,
						qL = new qM({
							value: bV.a9u[dx],
							dx: -1
						});
					qL.e.aOh = dx, aOe.push(qL), qL.e.addEventListener("keydown", function(e) {
						e.preventDefault();
						var code = e.code;
						e.target.value = code, bV.aOi(e.target.aOh, code)
					}), er && (qL.e.style.marginLeft = "4%"), qL.e.style.width = "48%", aLB.pO(qL)
				}
			}
			pS.push(aLB)
		}(pS), (aLB = new pA).pD(L(359)), bh.kn.data[1].tO = [L(360), L(361), L(362), L(363)], aLB.pL(new tK(bh.kn.data[1])), pS.push(aLB), (aLB = new pA).pD(L(364)), bh.kn.data[9].tO = [L(361), L(365), L(366)], aLB.pL(new tK(bh.kn.data[9])), pS
		.push(aLB), (aLB = new pA).pD(L(367)), bh.kn.data[11].tO = [L(368), L(9), L(369)], aLB.pL(new tK(bh.kn.data[11])), pS.push(aLB), (aLB = new pA).pD(L(370)), aLB.pO(new qw(bh.kn.data[2])), pS.push(aLB), (aLB = new pA).pD(L(371)), aLB.pO(new qw(
			bh.kn.data[7])), pS.push(aLB), (aLB = new pA).pD(L(372)), aLB.pO(new qw(bh.kn.data[8])), pS.push(aLB), (aLB = new pA).pD(L(373)), aLB.pO(new qM(bh.kn.data[5])), pS.push(aLB), aKu = new pQ(aKt.tV, pS)
}

function aKl() {
	var aLe, aLf, aLg, pS;

	function aLh() {
		aLj(), 2 !== aC.data.spawningType || b8.pg.a1I(aC.data.spawningData) || (aC.data.spawningType = 0), 2 !== aC.data.spawningType && (aC.data.spawningData = null), s.aKs()[19] = null, s.a07()
	}

	function aLj() {
		2 === aC.data.spawningType && b8.pg.a1U(aLg.tw(), aC.data.spawningData, bQ.aFl - 1)
	}
	this.show = function() {
		aLe.show(), this.resize()
	}, this.qo = function() {
		aLe.qo()
	}, this.resize = function() {
		aLe.resize(), aLf.resize()
	}, this.a0r = function(et) {
		2 === et && aLe.tW[0].pp()
	}, aLe = new tP(L(377), [new v("⬅️ " + L(32), aLh)]), aLf = new pQ(aLe.tV, (function(pS) {
		var aLB = new pA,
			tO = (aLB.pD(L(230)), [L(255), L(265), L(233)]),
			value = aC.data.spawningType;
		0 === aC.data.gameMode && (tO.splice(1, 1), 0 < value) && (value = 1);
		aLB.pL(new tK({
			tO: tO,
			value: value
		}, function(dx) {
			aLj(), aC.data.spawningType = dx, 0 === aC.data.gameMode && 1 === dx && (aC.data.spawningType = 2), 2 !== aC.data.spawningType || aC.data.spawningData || (aC.data.spawningData = new Uint16Array(2 * aC.eV)), s.t(24)
		})), aLB.pO(new rC), aLB.pO(new qw({
			value: aC.data.selectableSpawn
		}, L(378), function(value) {
			aC.data.selectableSpawn = value
		})), pS.push(aLB)
	}(pS = []), function(pS) {
		var aLB = new pA;
		aLB.pD("Seed"), aLB.pO(new qM({
			dx: -1,
			value: aC.data.spawningSeed
		}, 1, 0, function(e) {
			var value = Math.abs(Math.floor(e.target.value)) % 16384;
			e.target.value = aC.data.spawningSeed = value
		})), pS.push(aLB)
	}(pS), function(pS) {
		var aLB;
		2 === aC.data.spawningType && ((aLB = new pA).pD("Data"), (aLg = new tn(0, 1, 0, 1)).tu(b8.zO.a30(aC.data.spawningData, 2)), aLB.pO(aLg), pS.push(aLB))
	}(pS), pS))
}

function aKT() {
	var aKt, aNg, aNh, tQ;

	function aOj(id) {
		0 !== z.id || bh.kn.data[140].value ? 0 === id ? s.t(8, 1, new rn(16)) : s.t(2) : s.x.aNa(s.rm, 0 === id ? 16 : 0)
	}
	this.show = function() {
		z.a0.setState(12), aKt.show(), this.resize(), this.ii()
	}, this.qo = function() {
		aKt.qo()
	}, this.resize = function() {
		aKt.resize(), aNg.resize()
	}, this.ii = function() {
		8 === aZ.zx() && (2 <= bb.aOo ? aNh[2].pq === b9.mr && aNh[2].ps(0) : aNh[2].pq !== b9.mr && aNh[2].ps(b9.mr), !aC.gi && aL.p8(aC.eI) ? aNh[1].pq === b9.mr && aNh[1].ps(0) : aNh[1].pq !== b9.mr && aNh[1].ps(b9.mr), !aC.gi && au.hJ(aC
			.eI) ? aNh[0].pq === b9.mr && aNh[0].ps(0) : aNh[0].pq !== b9.mr && aNh[0].ps(b9.mr))
	}, this.a0r = function(et) {
		2 === et && aKt.tW[0].pp()
	}, aNh = [new v(L(379), function() {
		aOj(0)
	}), new v(L(286), function() {
		s.t(16)
	}), new v(L(337), function() {
		s.t(17)
	}), new v(L(380), function() {
		s.x.aMb()
	}, 0, 0, 1), new v(L(347), function() {
		s.t(3, 1)
	}), new v(L(381), function() {
		s.t(18)
	}), new v(L(353), function() {
		aOj(1)
	}), new v(L(382), function() {
		s.t(4, 1, new u(L(382), b8.pX.a23([L(391), L(392), "Discord", L(393), L(280), L(394), L(110), L(395), L(396), L(397)], [bI.aAt, bI.zs, bI.aAu, bI.aOp, bI.aOq, bI.zZ, bI.aOr, bI.aOs, bI.aOt, bI.aOG]), !1, [new v("⬅️ " + L(32),
			function() {
				s.t(1)
			})]))
	}), new v(L(383), function() {
		s.t(4, 1, new u(L(383), dh + "<br><a href='" + bI.aOp + "' target='_blank'>" + bI.aOp + "</a>" +
			"<br><br><b>" + "FX Client v" + __fx.version + "<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a>" +
			"<br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></b>", !0, [new v("⬅️ " + L(32), function() {
				s.t(1)
			})]))
	}), new v(L(384), function() {
		s.t(4, 1, new u(L(384), L(398) + "<br>" + L(399), !1, [new v("⬅️ " + L(32), function() {
			s.t(1)
		}), new v(L(400), function() {
			z.a0.zm(), s.t(1)
		})]))
	}), new v(L(385), function() {
		z.a0.zn(), s.t(4, 1, new u(L(401), L(402) + " <a href='" + bI.aOG + "' target='_blank'>" + bI.aOG + "</a>", !1, [new v("⬅️ " + L(32), function() {
			s.t(1)
		})]))
	})], tQ = [new v("⬅️ " + L(32), function() {
		s.x.aAY()
	})], 8 === aZ.zx() && (aNh.unshift(new v(L(388), function() {
		2 <= bb.aOo && (s.w(), bc.a0u(), bd.dc = !0)
	}, 0, 1)), aNh.unshift(new v(L(389), function() {
		!aC.gi && aL.p8(aC.eI) && (b6.gv.oF(), s.w(), aL.gj) && aL.a0u()
	}, 0, 1)), aNh.unshift(new v(L(390), function() {
		!aC.gi && au.hJ(aC.eI) && (bT.a42(2), b6.gv.hF(), s.w(), aL.gj) && aL.a0u()
	}, 0, 1))), 1 === z.id && 5 <= z.f1 && aNh.push(new v(L(386), function() {
		z.a0.zo()
	})), aKt = new tP(L(387), tQ), aNg = new q6(aNh, aKt.tV)
}

function aKp() {
	var aLe, aLf, aLg, pS;

	function aLh() {
		aLj(), 2 !== aC.data.sResourcesType && (aC.data.sResourcesData = null), s.aKs()[19] = null, s.a07()
	}

	function aLj() {
		2 === aC.data.sResourcesType && b8.pg.a1U(aLg.tw(), aC.data.sResourcesData, 2047)
	}
	this.show = function() {
		aLe.show(), this.resize()
	}, this.qo = function() {
		aLe.qo()
	}, this.resize = function() {
		aLe.resize(), aLf.resize()
	}, this.a0r = function(et) {
		2 === et && aLe.tW[0].pp()
	}, aLe = new tP(L(271), [new v("⬅️ " + L(32), aLh)]), aLf = new pQ(aLe.tV, (function(pS) {
		var aLB = new pA;
		aLB.pD(L(230)), aLB.pL(new tK({
			tO: [L(231), L(232), L(233)],
			value: aC.data.sResourcesType
		}, function(dx) {
			aLj(), 2 !== dx || aC.data.sResourcesData || (aC.data.sResourcesData = new Uint16Array(aC.eV)), aC.data.sResourcesType = dx, s.t(28)
		})), pS.push(aLB)
	}(pS = []), function(pS) {
		var aLB;
		1 === aC.data.sResourcesType && ((aLB = new pA).pD("Value"), aLB.pO(new qM({
			dx: -1,
			value: aC.data.sResourcesValue
		}, 1, 0, function(e) {
			var value = bJ.p5(Math.floor(e.target.value), 0, 2047);
			e.target.value = aC.data.sResourcesValue = value
		})), pS.push(aLB))
	}(pS), function(pS) {
		var aLB;
		2 === aC.data.sResourcesType && ((aLB = new pA).pD("Data"), (aLg = new tn(0, 1, 0, 1)).tu(b8.zO.a30(aC.data.sResourcesData, 2)), aLB.pO(aLg), pS.push(aLB))
	}(pS), pS))
}

function aKn() {
	var aLe, aLf, aLg, pS;

	function aLh() {
		aLj(), 2 !== aC.data.tIncomeType && (aC.data.tIncomeData = null), s.aKs()[19] = null, s.a07()
	}

	function aLj() {
		2 === aC.data.tIncomeType && b8.pg.a1U(aLg.tw(), aC.data.tIncomeData, 255)
	}
	this.show = function() {
		aLe.show(), this.resize()
	}, this.qo = function() {
		aLe.qo()
	}, this.resize = function() {
		aLe.resize(), aLf.resize()
	}, this.a0r = function(et) {
		2 === et && aLe.tW[0].pp()
	}, aLe = new tP(L(269), [new v("⬅️ " + L(32), aLh)]), aLf = new pQ(aLe.tV, (function(pS) {
		var aLB = new pA;
		aLB.pD(L(230)), aLB.pL(new tK({
			tO: [L(231), L(232), L(233)],
			value: aC.data.tIncomeType
		}, function(dx) {
			aLj(), 2 !== dx || aC.data.tIncomeData || (aC.data.tIncomeData = new Uint8Array(aC.eV), aC.data.tIncomeData.fill(32)), aC.data.tIncomeType = dx, s.t(26)
		})), pS.push(aLB)
	}(pS = []), function(pS) {
		var aLB;
		1 === aC.data.tIncomeType && ((aLB = new pA).pD("Value"), aLB.pO(new qM({
			dx: -1,
			value: aC.data.tIncomeValue
		}, 1, 0, function(e) {
			var value = bJ.p5(Math.floor(e.target.value), 0, 255);
			e.target.value = aC.data.tIncomeValue = value
		})), pS.push(aLB))
	}(pS), function(pS) {
		var aLB;
		2 === aC.data.tIncomeType && ((aLB = new pA).pD("Data"), (aLg = new tn(0, 1, 0, 1)).tu(b8.zO.a30(aC.data.tIncomeData, 4)), aLB.pO(aLg), pS.push(aLB))
	}(pS), pS))
}

function aKf() {
	var aKt, aKu, pS;
	this.show = function() {
		aKt.show(), this.resize()
	}, this.qo = function() {
		aKt.qo()
	}, this.resize = function() {
		aKt.resize(), aKu.resize()
	}, this.a0r = function(et) {
		2 === et && aKt.tW[0].pp()
	}, aKt = new tP(L(381), [new v("⬅️ " + L(32), function() {
		s.a07()
	})]), aKu = new pQ(aKt.tV, ((pS = []).push(function() {
		function aLG() {
			aOy.button.textContent = L(166), aOw.e.readOnly = !1, aOx.e.readOnly = !1, aLF.ps(1), aLF.button.style.color = b9.mf
		}
		var aLB = new pA,
			aOv = (aLB.pD(L(403)), new qM({
				value: bh.kn.data[105].value,
				dx: -1
			})),
			aOw = (aOv.e.readOnly = !0, aLB.pO(aOv), aLB.pD(L(310), "0.8em"), new qM(bh.kn.data[148])),
			aOw = new qM(bh.kn.data[148], 0, void 0, function(e) {
				aLE(bh.kn.data[149].value, e.target.value)
			}),
			aOx = (aLB.pO(aOw), aLB.pD(L(314), "0.8em"), new qM(bh.kn.data[149], 1, void 0, function(e) {
				aLE(e.target.value, bh.kn.data[148].value)
			})),
			aOy = (aLB.pO(aOx), new v(L(166), function(e) {
				return e.textContent === L(166) ? (e.textContent = L(167), aOw.e.readOnly = !0, aOx.e.readOnly = !0, aLF.ps(0), aLF.button.style.color = b9.nb, bh.qz.r0(149, aOx.e.value), aLE(bh.kn.data[149].value, bh.kn.data[
					148].value)) : aLG(), !0
			})),
			aLF = (aLB.pO(new r2([aOy.button])), new v(L(14), function(e) {
				return aOw.e.readOnly && ay.x.aDm(0) && (b8.pX.a28(e), aLG(), ay.aLH.aLI({
					ro: 0,
					rk: bh.kn.data[148].value,
					value: bh.kn.data[149].value
				})), !0
			}, 1)),
			pG = (aLB.pO(new r2([aLF.button])), aLB.pF()),
			aLE = function(f0, pE) {
				f0 = b8.fu.a2c(f0, 2, 1e6), pG.textContent = L(168, [f0, bh.kn.data[105].value, pE, f0 - 1])
			};
		return aLE(bh.kn.data[149].value, bh.kn.data[148].value), aLB
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
	var a7l, aP0, aP1, aP2, aOz = !1;

	function aP3() {
		aOz = !0, a7l = -1, aP0 = new Array(4);
		for (var aA = 3; 0 <= aA; aA--) aP0[aA] = !1;
		var wJ = Math.floor(1 + .02 * h.min);
		aP1 = new Array(4), (aP2 = new Array(4))[1] = aP2[3] = aP1[0] = aP1[2] = 0, aP2[0] = aP1[3] = -wJ, aP1[1] = aP2[2] = wJ
	}

	function aP4() {
		if (-1 !== a7l)
			if (0 !== aC.yn && aG.mN()) {
				for (var aP5 = !1, aA = 3; 0 <= aA; aA--) aP0[aA] && (aP5 = !0, i9 += aP1[aA], iB += aP2[aA], ae.a0J(aP1[aA], aP2[aA]), aR.a7T());
				aP5 ? bd.dc = !0 : ap.mD()
			} else ap.mD()
	}
	this.a0p = function(dx) {
		0 !== aC.yn && aG.mN() && (aOz || aP3(), aP0[dx] = !0, -1 === a7l) && (a7l = setInterval(aP4, 20), aP4())
	}, this.a0s = function(dx) {
		if (0 !== aC.yn && (aOz || aP3(), aP0[dx] = !1, -1 !== a7l)) {
			for (var aP5 = !1, aA = 3; 0 <= aA; aA--) aP5 = aP5 || aP0[aA];
			aP5 || this.mD()
		}
	}, this.mD = function() {
		if (aOz && -1 !== a7l) {
			for (var aA = 3; 0 <= aA; aA--) aP0[aA] = !1;
			clearInterval(a7l), a7l = -1
		}
	}
}

function cd() {
	this.x = new aP6, this.lL = new aP7, this.nw = new aP8, this.aCb = new aP9, this.aAV = new aPA, this.aLH = new aPB, this.oX = new aPC, this.aMz = new aPD, this.a5F = new aPE, this.aPF = new aPG, this.aPH = new aPI, this.aPJ = new aPK, this.aPL =
		new aPM, this.dU = function() {
			this.x.dU()
		}
}

function aP6() {
	var aPN, aPP;
	this.aEP = 5, this.aEJ = this.aEP - 1, this.aDr = this.aEP + this.aEJ, this.aDq = [0, 1, 5, 2, 6, 3, 7, 4, 8], this.aPO = null;

	function aPX(aA) {
		return aPP[aA].aOz && aPN[aA].aPX()
	}

	function aPZ(zu) {
		aPP[zu].e7 = bd.e7, aPP[zu].aPR = !1
	}
	this.a03 = 0, this.a02 = 0, this.dU = function() {
		this.aPO = new Array(this.aEP);
		this.aPO[0] = "territorial.io";
		var aA, aIR = aw.aIm(0);
		for (aw.a3M(0), aA = 1; aA < this.aEP; aA++) this.aPO[aA] = aJ.yM() + ".territorial.io";
		for (aw.a3M(aIR), aPN = new Array(this.aDr), aPP = new Array(this.aDr), aA = this.aDr - 1; 0 <= aA; aA--) aPP[aA] = {
			aOz: !1,
			e7: 0,
			aPR: !1
		};
		this.aDs(0, 0)
	}, this.aPS = function(aA) {
		return aPN[aA]
	}, this.aPT = function() {
		return this.a02 < this.aEP ? this.a02 : this.a02 - this.aEJ
	}, this.ii = function() {
		for (var aA = this.aDr - 1; 0 <= aA; aA--) this.aDm(aA) && bd.e7 > aPP[aA].e7 + 15e3 && ay.nw.aPU(aA, aPP[aA].aPR);
		!this.aDm(0) && bd.e7 > aPP[0].e7 + 8e3 && (aPP[0].e7 = bd.e7, this.aDs(0, 0))
	}, this.aMv = function(id) {
		return this.aDs(0, id) && this.aPV(0)
	}, this.aDs = function(zu, aKR) {
		if (aPP[zu].aOz) {
			if (aPN[zu].aPX()) return aPN[zu].aPY(aKR), aPN[zu].aDm();
			aPN[zu].qo()
		}
		return this.aPW(zu, aKR), !1
	}, this.aPW = function(zu, aKR) {
		aPP[zu].aOz = !0, aPZ(zu), aPN[zu] = new aPa, aPN[zu].dU(zu, aKR)
	}, this.aPY = function(zu, aKR) {
		aPX(zu) && aPN[zu].aPY(aKR)
	}, this.aPb = function(zu, aKR) {
		ay.aAV.aPc(zu)
	}, this.aPV = function(aA) {
		return this.aDm(aA) && aPN[aA].aPV()
	}, this.aPd = function(aA) {
		aPN[aA].aPd()
	}, this.aDm = function(aA) {
		return aPP[aA].aOz && aPN[aA].aDm()
	}, this.send = function(zu, aB) {
		aPZ(zu), aPN[zu].send(aB)
	}, __fx.customLobby.setSendFunction(this.send), this.a0a = function(zu) {
		8 === aZ.zx() && (aPP[zu].aPR = !0, ay.lL.aPe = !0)
	}, this.close = function(zu, aPf) {
		aPX(zu) && aPN[zu].close(aPf)
	}, this.aPg = function(zu, aPf) {
		q.a08(aPf), aPX(zu) && aPN[zu].close(aPf)
	}, this.a09 = function(aPf) {
		for (var aA = this.aDr - 1; 0 <= aA; aA--) this.close(aA, aPf)
	}, this.aPh = function(zu, aPf) {
		for (var aA = this.aDr - 1; 0 <= aA; aA--) aA !== zu && this.close(aA, aPf)
	}, this.a3Y = function() {
		this.close(this.a03, 3246)
	}, this.aPi = function(zu, e) {
		aPN[zu].qo(), q.zt(zu, e.code)
	}
}

function aP7() {
	this.aPe = !1, this.ii = function() {
		bd.jl() % 250 != 249 || aC.gi || (ay.aAV.aPj(+(this.aPe && af.ld[aC.eI]), ak.jp + bL.x.ol), this.aPe = !1)
	}
}

function aPE() {
	function aQA(aQB) {
		var eb = aC.data,
			aQB = (eb.selectedPlayer = bF.oY(aQB), eb.spawningSeed = bF.oY(14), bF.oY(4)),
			aQB = (aQB < 7 ? (eb.gameMode = 1, eb.numberTeams = aQB + 2) : 9 === aQB ? (eb.gameMode = eb.isZombieMode = 1, eb.numberTeams = 2) : (eb.gameMode = 0, eb.battleRoyaleMode = 7 === aQB ? 0 : 10 === aQB ? 1 : 2), eb.isContest = bF.oY(1), bF
				.oY(6));
		return eb.mapType = bQ.aBd(aQB) ? 0 : 1, bQ.aBe(eb, aQB), eb.mapSeed = bF.oY(14), aQB
	}
	this.aPl = function(zu, aB) {
		bF.dU(aB), 0 === bF.size ? ay.x.aPg(zu, 3205) : __fx.customLobby.isCustomMessage(aB) || ((0 === bF.oY(1) ? function(zu) {
			var aPp = bF.oY(6);
			0 === aPp ? function(zu) {
					if (0 === zu && 8 !== aZ.zx()) {
						s.x.aOH();
						for (var aQ2 = bF.oY(12), aQ3 = bF.oY(6), g = new Array(aQ2), aA = 0; aA < aQ2; aA++) g[aA] = bF.oY(aQ3);
						aS.a7s(g)
					}
				}(zu) : 2 === aPp ? ay.aPF.aPr(zu) : 3 === aPp || 4 === aPp ? av.dU() : 9 === aPp ? ay.aPH.aPs(zu) : 10 === aPp ? ay.aPJ.aPt() : 11 === aPp ? ay.aPH.aPu(zu) : 12 === aPp ? ay.aPJ.aPv() : 13 === aPp ? ay.aPL.aPw() :
				14 === aPp ? ay.aPL.aPx() : 15 === aPp ? ay.aPH.aPy() : 16 === aPp ? ay.aPF.aPz(zu) : 17 === aPp ? ay.aPF.aQ0(zu) : 19 === aPp && ay.aPF.aQ1(zu)
		} : function(zu) {
			if (8 !== aZ.zx() && !av.aEQ()) return;
			if (zu !== ay.x.a03) ay.x.aPg(zu, 3244);
			else if (0 === bF.oY(1)) bd.yw.aQC(bF.aB);
			else {
				var aA, zu = bF.oY(2);
				if (0 === zu) {
					var oA, nw = bF.oY(9);
					0 !== af.ld[nw] && 0 !== af.ld[aC.eI] && (oA = bF.oY(10), aM.o9(nw, aC.eI, oA), ae.p6(nw, 1, oA))
				} else if (1 === zu) ! function() {
					var nw = bF.oY(9);
					0 !== af.ld[nw] && 0 !== af.ld[aC.eI] && b3.aIB(0, [nw], !0) && aM.oQ(nw, 1)
				}();
				else if (2 === zu) ! function() {
					var nw = bF.oY(9),
						target = bF.oY(9);
					0 !== af.ld[nw] && 0 !== af.ld[target] && 0 !== af.ld[aC.eI] && b3.aIB(1, [nw], !0) && (ae.p6(nw, 3, 96), ae.p6(target, 4, 96), aM.a5M(nw, target))
				}();
				else if (a8 && !a9) {
					var eY = 540;
					for (bB.a6(17287), bB.a7(1, 0), bB.a7(6, 10), eY = Math.min(b6.nt.oa.length, 540), aA = 0; aA < eY; aA++) bB.aQI(32, b6.nt.oa[aA]);
					ay.x.send(ay.x.a03, bB.aB)
				}
			}
		})(zu), bd.aPo())
	}, this.aQ4 = function(aB) {
		if (bF.dU(aB), bF.dx = 1, 3 === bF.oY(6)) {
			bF.dx += 20;
			var eb = aC.data = new a3G,
				aB = aQA(9),
				aBf = eb.humanCount = bF.oY(9) + 1;
			eb.selectableSpawn = 1 === eb.gameMode || aBf < 100, eb.colorsData = new Uint32Array(aBf), eb.playerNamesData = new Array(aBf);
			for (var aA = 0; aA < aBf; aA++) bF.dx++, eb.colorsData[aA] = bF.oY(18), eb.playerNamesData[aA] = bE.ut.ux(bF.oY(5));
			aZ.aE4(), bQ.a6(aB, eb.mapSeed), aC.a3K()
		} else ! function() {
			bF.dx += 20;
			var eb = aC.data = new a3G,
				aQ9 = aQA(1);
			eb.humanCount = 2;
			eb.selectableSpawn = 1, eb.elo = new Uint16Array(2), eb.colorsData = new Uint32Array(2), eb.playerNamesData = new Array(2);
			for (var aA = 0; aA < 2; aA++) bF.dx++, eb.colorsData[aA] = bF.oY(18), eb.elo[aA] = bF.oY(14), eb.playerNamesData[aA] = bE.ut.ux(bF.oY(5));
			aZ.aE4(), bQ.a6(aQ9, eb.mapSeed), aC.a3K()
		}()
	}, this.aQ7 = function() {
		bF.dx = 1;
		var aPp = bF.oY(6),
			aQ8 = bF.oY(10);
		return ay.x.a02 > ay.x.aEJ && (aQ8 += ay.x.aEJ), ay.x.a02 === aQ8 ? (ay.x.a03 = aQ8, !1) : (ay.x.close(ay.x.a02, 3247), ay.x.a03 = aQ8, av.aBa = bF.oY(10), av.aEC = bF.oY(3 === aPp ? 9 : 1), ay.x.aDs(aQ8, 5) && ay.nw.aEK(), !0)
	}
}

function aPK() {
	this.aPt = function() {
		bh.x.uR(), bh.qz.r0(105, bD.rp.rq(bD.rp.rr(5))), bh.qz.r0(106, bD.rp.rq(bD.rp.rr(8))), bh.qz.r0(109, bF.oY(30)), bh.qz.r0(108, bh.kn.data[109].value), bh.qz.r0(111, bh.kn.data[109].value + 1), bh.qz.r0(107, 0), bh.qz.r0(110, "")
	}, this.aPv = function() {
		var aQL, aQM, aQN, aQO, aQK;
		bF.size < bB.aQJ(29) ? ay.x.aPg(0, 3254) : (aQK = bF.oY(5), aQL = bF.oY(3), aQM = bF.oY(3), aQN = bF.oY(3), aQO = bF.oY(8), bF.aQP(197 + 16 * (aQK + aQL + aQM + aQN + aQO) + 32 + 32 + 30 + 128 + 32 + 30 + 32 + 2 + 10 + 5 + 30 + 30 + 32) ?
			(aQK = {
				rl: bF.oY(30),
				ue: bF.oY(16),
				uf: bF.oY(30),
				ug: bF.oY(30),
				uh: bF.oY(30),
				ui: bF.aQQ(32),
				username: bE.ut.ux(aQK),
				uj: bE.ut.ux(aQL),
				uk: bE.ut.ux(aQM),
				ul: bF.aQQ(32),
				um: bF.aQQ(32),
				un: bF.oY(30),
				uo: bF.aQQ(32),
				up: bF.aQQ(32),
				uq: bF.aQQ(32),
				ur: bF.aQQ(32),
				aLP: bF.aQQ(32),
				aLQ: bF.aQQ(30),
				aLb: bF.aQQ(32),
				aLc: bE.ut.ux(aQN),
				aLU: bF.aQQ(2),
				aLV: bF.aQQ(10),
				aLS: bE.ut.ux(aQO),
				aLW: bF.aQQ(5),
				aLD: bF.oY(30),
				aLN: bF.oY(30),
				aLO: bF.aQQ(32)
			}, 8 === s.rm && (25 === s.aDC().aMu ? (aQK.aKv = !0, s.x.aKc = aQK, s.aDC().aN9(25, !1)) : (aQK.aKv = !1, aQK.rk = bh.kn.data[105].value, s.x.aKZ = aQK, bh.qz.ud(aQK), s.aDC().aN9(16, !0)))) : ay.x.aPg(0, 3267))
	}
}

function aPM() {
	this.aPw = function() {
		var aA;
		if (bF.size < bB.aQJ(39)) ay.x.aPg(0, 3259);
		else {
			var s6 = bF.oY(6),
				eY = bF.oY(10),
				data = [];
			if (9 === s6 || 10 === s6) {
				for (aA = 0; aA < eY; aA++) data.push([bF.oY(30), bE.uv.vD(5), bF.aQQ(32), 0, bF.oY(30)]);
				8 === s.rm && s.aDC().aN9(21, !0, {
					s6: s6,
					data: data
				})
			} else {
				var hR = bF.oY(16);
				if (bF.aQP(39 + 16 * hR + eY * (0 === s6 ? 111 : 1 === s6 ? 101 : 2 === s6 || 3 === s6 ? 127 : 212))) {
					if (0 === s6)
						for (aA = 0; aA < eY; aA++) data.push([bF.oY(30), bE.ut.ux(bF.oY(5)), bF.oY(16), bF.oY(30), bF.oY(30)]);
					else if (1 === s6)
						for (aA = 0; aA < eY; aA++) data.push([bF.oY(16), bE.ut.ux(bF.oY(3)), bF.oY(16), bE.ut.ux(bF.oY(5)), bF.oY(31), bF.oY(30)]);
					else if (2 === s6 || 3 === s6)
						for (aA = 0; aA < eY; aA++) data.push([bF.oY(30), bE.ut.ux(bF.oY(5)), bF.aQQ(32), bF.oY(30), bF.oY(30)]);
					else
						for (aA = 0; aA < eY; aA++) data.push([bF.oY(20), bF.oY(30), bF.oY(30), bF.oY(30), bF.oY(30), bF.aQQ(32), bF.oY(30), bE.ut.ux(bF.oY(5)), bE.ut.ux(bF.oY(5))]);
					8 === s.rm && s.aDC().aN9(21, !0, {
						s6: s6,
						data: data
					})
				} else ay.x.aPg(0, 3260)
			}
		}
	}, this.aPx = function() {
		if (bF.size < bB.aQJ(29)) ay.x.aPg(0, 3265);
		else {
			var aQR = bF.oY(4),
				aQS = bF.oY(7),
				aQT = bF.oY(11);
			if (bF.aQP(29 + 16 * aQS + 16 * aQT + 11 * aQR)) {
				for (var data = [], aA = 0; aA < aQR; aA++) {
					for (var zS = bE.ut.ux(bF.oY(3)), aQU = bF.oY(8), aM8 = [], er = 0; er < aQU; er++) aM8.push(bF.oY(16));
					data.push({
						name: "[" + zS + "]",
						aM8: aM8
					})
				}
				8 === s.rm && s.aDC().aN9(23, !0, data)
			} else ay.x.aPg(0, 3266)
		}
	}
}

function aPG() {
	function aQW() {
		var id = bF.oY(3);
		return 0 === id ? {
			id: id,
			rk: bF.oY(30),
			p: bl.aAz.aCh(bE.uv.vD(7))
		} : 1 === id ? {
			id: id,
			rk: bF.oY(30),
			aBl: bF.oY(3),
			value: bF.oY(30),
			target: bF.oY(30)
		} : 2 === id ? {
			id: id,
			rk: bF.oY(30),
			aBl: bF.oY(3)
		} : 3 === id ? {
			id: id,
			rk: bF.oY(30),
			aBl: bF.oY(3),
			value: bF.oY(4),
			target: bF.oY(30)
		} : 4 === id ? {
			id: id,
			rk: bF.oY(30),
			aBl: bF.oY(3),
			target: bF.oY(30)
		} : 5 === id ? {
			id: id,
			aBl: bF.oY(3)
		} : 6 === id ? {
			id: id,
			value: bF.oY(17)
		} : null
	}
	this.aPr = function(zu) {
		if (zu !== ay.x.a02) ay.x.close(zu, 3239);
		else if (6 !== aZ.zx()) ay.x.close(zu, 3271);
		else {
			bl.dU();
			for (var aA = 0; aA < 4; aA++) {
				var qb = bl.x.qc[aA],
					playerCount = (qb.sd = bF.oY(10), qb.eE = bF.oY(6), qb.mapSeed = bF.oY(14), qb.aBW = bF.oY(4), qb.aDD = bF.oY(6), qb.aDE = bF.oY(4), qb.aBc = bF.oY(1), qb.aCH = bF.oY(12), qb.spawningSeed = bF.oY(14), bF.oY(16));
				bl.ss.su[aA] = bF.oY(16);
				for (var er = 0; er < playerCount; er++) bl.ss.aBA(aA, bF.oY(30), bE.uv.vD(5), bF.oY(4), bF.oY(30), bF.oY(7), bF.oY(16), bF.oY(18), bF.oY(11), bF.oY(12))
			}
			s.t(29), bl.x.aC7(!0)
		}
	}, this.aPz = function(zu) {
		if (zu !== ay.x.a02) ay.x.close(zu, 3239);
		else if (bl.a01) {
			bl.x.aC5[0] = bF.oY(20), bl.x.aC5[1] = bF.oY(20);
			for (var aQV = bF.oY(16), er = 0; er < aQV; er++) {
				var id = bF.oY(3);
				0 === id ? bl.ss.aBA(bF.oY(2), bF.oY(30), bE.uv.vD(5), 0, 1234566, 127, 0, bF.oY(18), 0, bF.oY(12)) : 1 === id ? bl.ss.aBQ(bF.oY(16), bF.oY(2)) : 2 === id ? bl.ss.aBM(bF.oY(16), bF.oY(2), bF.oY(2)) : 3 === id ? bl.ss.aBP(bF.oY(
					16), bF.oY(2)) : 4 === id ? bl.ss.aBG(bF.oY(16), bF.oY(2), bF.oY(4), bF.oY(30), bF.oY(7), bF.oY(16), bF.oY(11)) : 5 === id && bl.ss.aBH(bF.oY(16), bF.oY(2), bF.oY(1))
			}
			for (var aA = 0; aA < 4; aA++) {
				var qb = bl.x.qc[aA];
				if (qb.sd = bF.oY(10), 0 === qb.sd) {
					if (qb.a03 = bF.oY(10), qb.aBa = bF.oY(10), bl.aB0.dd(aA)) return;
					qb.eE = bF.oY(6), qb.mapSeed = bF.oY(14), qb.aBW = bF.oY(4), qb.aDD = bF.oY(6), qb.aDE = bF.oY(4), qb.aBc = bF.oY(1), qb.aCH = bF.oY(12), qb.spawningSeed = bF.oY(14), qb.aDF.push(qb.aDF[0]), qb.aDF.shift()
				}
			}
			bl.x.aC9()
		} else ay.x.close(zu, 3251)
	}, this.aQ0 = function(zu) {
		if (zu !== ay.x.a02) ay.x.close(zu, 3272);
		else if (bl.a01) {
			for (var qZ = bF.oY(4), qb = bl.x.qc[qZ], qd = qb.qd, t7 = (qb.qe = bF.oY(20), bF.oY(6)), aA = 0; aA < t7; aA++) qd.push(aQW());
			bl.x.aCI(qZ)
		} else ay.x.close(zu, 3273)
	}, this.aQ1 = function(zu) {
		zu !== ay.x.a02 ? ay.x.close(zu, 3276) : bl.a01 ? bl.message.aCd(aQW()) : ay.x.close(zu, 3277)
	}
}

function aPI() {
	this.aPs = function(zu) {
		var aQE, q4;
		bF.aQP(70) ? (aQE = bF.oY(3), q4 = bg.aQX.ii(bF.oY(30), bF.oY(30)), ay.aAV.aQY(zu, q4, aQE), 0 < aQE || (0 === zu && 0 === bh.kn.data[105].value.length ? ay.aAV.aMy(0) : ay.aLH.aQZ(zu), 4 === ay.x.aPS(zu).aQa() ? 6 === aZ.zx() && ay.aCb
			.aDt(zu) : 5 !== ay.x.aPS(zu).aQa() || 8 !== aZ.zx() && 10 !== aZ.zx() || ay.nw.aEK())) : ay.x.aPg(zu, 3269)
	}, this.aPu = function(zu) {
		var id = bF.oY(6);
		0 === id ? (ay.x.aPd(zu), aS.a7o || ay.aAV.aMy(1), b5.aAT(), 8 === s.rm && s.aDC().aN8()) : 21 === id ? 8 === s.rm && s.aDC().aN9(17) : 22 === id && (bh.qz.r0(106, bh.kn.data[110].value), bh.qz.r0(110, ""), 8 === s.rm) && s.aDC().aN9(16)
	}, this.aPy = function() {
		var eY = bF.oY(16),
			aQb = bF.oY(16);
		if (bF.aQP(55 + 10 * eY + 16 * aQb)) {
			for (var g = [], aA = 0; aA < eY; aA++) g.push(bE.ut.ux(bF.oY(10)));
			b5.aAX(g)
		} else ay.x.aPg(0, 3270)
	}
}

function aP8() {
	this.aPU = function(zu, aPR) {
		bB.a6(8), bB.a7(1, 0), bB.a7(6, 4), bB.a7(1, aPR ? 1 : 0), ay.x.send(zu, bB.aB)
	}, this.aEK = function() {
		bB.a6(58), bB.a7(1, 0), bB.a7(6, 5), bB.a7(8, ay.x.aPT()), bB.a7(10, av.aBa), bB.a7(9, av.aEC), bB.a7(10, di), bB.a7(14, l.dj), ay.x.send(ay.x.a03, bB.aB)
	}, this.nx = function(eK) {
		bB.a6(27), bB.a7(1, 1), bB.a7(4, 0), bB.a7(22, eK), ay.x.send(ay.x.a03, bB.aB)
	}, this.ny = function(i8, iz) {
		bB.a6(25), bB.a7(1, 1), bB.a7(4, 1), bB.a7(10, i8), bB.a7(10, iz), ay.x.send(ay.x.a03, bB.aB)
	}, this.o2 = function(i8, o0) {
		bB.a6(24), bB.a7(1, 1), bB.a7(4, 2), bB.a7(10, i8), bB.a7(9, o0), ay.x.send(ay.x.a03, bB.aB)
	}, this.o3 = function(i8, eK) {
		bB.a6(37), bB.a7(1, 1), bB.a7(4, 3), bB.a7(10, i8), bB.a7(22, eK), ay.x.send(ay.x.a03, bB.aB)
	}, this.o6 = function(m1, eK) {
		bB.a6(37), bB.a7(1, 1), bB.a7(4, 4), bB.a7(10, m1), bB.a7(22, eK), ay.x.send(ay.x.a03, bB.aB)
	}, this.o8 = function(iz) {
		bB.a6(15), bB.a7(1, 1), bB.a7(4, 5), bB.a7(10, iz), ay.x.send(ay.x.a03, bB.aB)
	}, this.oC = function(dx) {
		bB.a6(15), bB.a7(1, 1), bB.a7(4, 6), bB.a7(10, dx), ay.x.send(ay.x.a03, bB.aB)
	}, this.oE = function(oD) {
		bB.a6(6), bB.a7(1, 1), bB.a7(4, 7), bB.a7(1, oD), ay.x.send(ay.x.a03, bB.aB)
	}, this.oG = function() {
		bB.a6(5), bB.a7(1, 1), bB.a7(4, 8), ay.x.send(ay.x.a03, bB.aB)
	}, this.oH = function(i8, eK, iz) {
		bB.a6(47), bB.a7(1, 1), bB.a7(4, 10), bB.a7(10, i8), bB.a7(10, iz), bB.a7(22, eK), ay.x.send(ay.x.a03, bB.aB)
	}, this.oO = function(aQc, aQd) {
		bB.a6(24), bB.a7(1, 1), bB.a7(4, 15), bB.a7(9, aQd), bB.a7(10, aQc), ay.x.send(ay.x.a03, bB.aB)
	}, this.oR = function(a5F) {
		bB.a6(14), bB.a7(1, 1), bB.a7(4, 14), bB.a7(9, a5F), ay.x.send(ay.x.a03, bB.aB)
	}, this.oV = function(aQe, target) {
		var aA, eY = aQe.length;
		for (bB.a6(14 + 9 * eY), bB.a7(1, 1), bB.a7(4, 13), bB.a7(9, target), aA = 0; aA < eY; aA++) bB.a7(9, aQe[aA]);
		ay.x.send(ay.x.a03, bB.aB)
	}
}

function aPB() {
	this.aQf = function() {
		bB.a6(39), bB.a7(1, 0), bB.a7(6, 16), ay.aAV.aQg(), ay.x.send(0, bB.aB)
	}, this.aQZ = function(zu) {
		bB.a6(115), bB.a7(1, 0), bB.a7(6, 17), bE.rp.v9(bh.kn.data[105].value, 5), bE.rp.v9(bh.kn.data[106].value, 8), bB.a7(30, bh.kn.data[109].value), ay.x.send(zu, bB.aB)
	}, this.aNB = function() {
		bB.a6(55), bB.a7(1, 0), bB.a7(6, 18), bE.rp.v8(bh.kn.data[110].value), ay.x.send(0, bB.aB)
	}, this.aN7 = function(a2f) {
		var eY = a2f.pE.length;
		bB.a6(21 + 16 * eY), bB.a7(1, 0), bB.a7(6, 29), bB.a7(6, a2f.ro), bB.a7(8, eY), bD.ut.v8(a2f.pE), ay.x.send(0, bB.aB)
	}, this.aLX = function(data) {
		bB.a6(43), bB.a7(1, 0), bB.a7(6, 25), bB.a7(6, data.ro), bE.rp.v9(data.rk, 5), ay.x.send(0, bB.aB)
	}, this.aLI = function(data) {
		bB.a6(75), bB.a7(1, 0), bB.a7(6, 27), bB.a7(6, data.ro), bE.rp.v9(data.rk, 5), bB.aQI(32, data.value), ay.x.send(0, bB.aB)
	}
}

function aPC() {
	this.oW = function() {
		for (var eY = aC.jo, yc = bP.result.yc, kW = yc.length, zL = (bB.a6(17 + 16 * eY + 33 * kW), bB.a7(1, 1), bB.a7(4, 12), bB.a7(10, kW), bB.a7(1, +(2 === aC.yk)), bB.a7(1, aC.z4 % 2), af.zL), aA = 0; aA < eY; aA++) bB.a7(16, zL[aA]);
		for (var gM = af.gM, aA = 0; aA < kW; aA++) {
			var g6 = yc[aA];
			bB.a7(9, g6), bB.a7(24, gM[g6])
		}
		ay.x.send(ay.x.a03, bB.aB)
	}
}

function aPD() {
	this.aN0 = function(s6, s7, s8) {
		bB.a6(75), bB.a7(1, 0), bB.a7(6, 21), bB.a7(6, s6), bB.a7(1, +(s7 < 0)), bB.a7(1, +(s8 < 0)), bB.a7(30, Math.abs(s7)), bB.a7(30, Math.abs(s8)), ay.x.send(0, bB.aB)
	}, this.aN1 = function(s6, aN2, aN3) {
		bB.a6(18 + 16 * aN2.length + 30), bB.a7(1, 0), bB.a7(6, 22), bB.a7(6, s6), ay.aAV.aQi(aN2), bB.a7(30, aN3), ay.x.send(0, bB.aB)
	}, this.aN6 = function(s6, aN2, aN3) {
		bB.a6(73), bB.a7(1, 0), bB.a7(6, 28), bB.a7(6, s6), bE.rp.v9(aN2, 5), bB.a7(30, aN3), ay.x.send(0, bB.aB)
	}, this.aN4 = function(aM7, zR) {
		for (var eY = zR.length, hR = 0, aA = 0; aA < eY; aA++) hR += zR[aA].length;
		for (bB.a6(21 + 3 * eY + 16 * hR), bB.a7(1, 0), bB.a7(6, 23), bB.a7(3, aM7), bB.a7(4, eY), bB.a7(7, hR), aA = 0; aA < eY; aA++) bB.a7(3, zR[aA].length), bD.ut.v8(zR[aA]);
		ay.x.send(0, bB.aB)
	}, this.aN5 = function(aM7, s7, s8) {
		bB.a6(52), bB.a7(1, 0), bB.a7(6, 24), bB.a7(3, aM7), bB.a7(1, +(s7 < 0)), bB.a7(1, +(s8 < 0)), bB.a7(20, Math.abs(s7)), bB.a7(20, Math.abs(s8)), ay.x.send(0, bB.aB)
	}
}

function aP9() {
	this.aDt = function(zu) {
		var username = bh.kn.data[122].value.slice(0, 20),
			username = (bB.a6(24 + 16 * username.length + 18 + 18), bB.a7(1, 0), bB.a7(6, 1), bB.a7(10, di), bB.a7(2, bh.kn.data[158].value), ay.aAV.aQi(username), b8.color.a1j(bh.x.uY())),
			username = (bB.a7(6, username[0]), bB.a7(6, username[1]), bB.a7(6, username[2]), b5.aAZ());
		bB.a7(9, username[0]), bB.a7(9, username[1]), ay.x.a02 = zu, ay.x.send(zu, bB.aB)
	}, this.aCc = function(aQl, a2f) {
		bC.dU(), bC.a7(1, 0), bC.a7(6, 2), bC.a7(3, aQl), 2 === aQl ? bC.a7(2, a2f) : 3 === aQl ? bD.uv.yG(a2f, 7, bC) : 5 === aQl && (bC.a7(3, a2f.id), bC.a7(3, a2f.value), bC.a7(30, a2f.rk)), ay.x.send(ay.x.a02, bC.aQm())
	}
}

function aPA() {
	this.aPc = function(zu) {
		bB.a6(39), bB.a7(1, 0), bB.a7(6, 13), bB.a7(14, l.dj), bB.a7(4, z.id), bB.a7(7, z.f1), bB.a7(1, +a8), bB.a7(1, +a9), bB.a7(5, (new Date).getHours() % 24), ay.x.send(zu, bB.aB)
	}, this.aQY = function(zu, q4, aQE) {
		bB.a6(70), bB.a7(1, 0), bB.a7(6, 14), bB.a7(3, aQE), bB.a7(30, q4[0]), bB.a7(30, q4[1]), ay.x.send(zu, bB.aB)
	}, this.aMy = function(id) {
		bB.a6(13), bB.a7(1, 0), bB.a7(6, 15), bB.a7(6, id), ay.x.send(0, bB.aB)
	}, this.aAW = function(id, pE) {
		var eY = Math.min(pE.length, 63);
		bB.a6(19 + 16 * eY), bB.a7(1, 0), bB.a7(6, 26), bB.a7(6, id), bB.a7(6, eY), bD.ut.v8(pE), ay.x.send(0, bB.aB)
	}, this.aQn = function(aQ8, pP) {
		bB.a6(7 + 26 * pP.length), bB.a7(1, 0), bB.a7(6, 9);
		for (var aA = 0; aA < pP.length; aA++) bB.a7(16, pP[aA][0]), bB.a7(10, pP[aA][1]);
		ay.x.send(aQ8, bB.aB)
	}, this.aPj = function(aQo, aQp) {
		bB.a6(20), bB.a7(1, 0), bB.a7(6, 19), bB.a7(1, aQo), bB.a7(12, aQp), ay.x.send(ay.x.a03, bB.aB)
	}, this.aQi = function(username) {
		bB.a7(5, username.length), bD.ut.v8(username)
	}
}

function aPa() {
	var zu, aKR, aQq, aQr = ["wss://", "/s50/", "/s51/", "/s52/"],
		aQs = 0;

	function aPb() {
		ay.x.aPb(zu, aKR)
	}

	function aQx(e) {
		ay.a5F.aPl(zu, new Uint8Array(e.data))
	}

	function aQy() {}

	function aPi(e) {
		ay.x.aPi(zu, e)
	}
	this.dU = function(dx, aQt) {
		zu = dx, aKR = aQt;
		dx = aQr[0];
		zu < ay.x.aEP ? dx += ay.x.aPO[zu] + aQr[1 + dg] : dx += ay.x.aPO[0] + "/i" + (1 + dg) + (zu - ay.x.aEJ) + "/", (aQq = new WebSocket(__fx.customLobby.isActive() && zu === 1 ? __fx.customLobby.getSocketURL() : dx)).binaryType =
			"arraybuffer", aQq.onopen = aPb, aQq.onmessage = aQx, aQq.onclose = aPi, aQq.onerror = aQy
	}, this.aQv = function() {
		return aQq.readyState === aQq.CONNECTING
	}, this.aDm = function() {
		return aQq.readyState === aQq.OPEN
	}, this.aPV = function() {
		return aQs
	}, this.aPd = function() {
		aQs = 1
	}, this.aPX = function() {
		return this.aQv() || this.aDm()
	}, this.aPY = function(aQt) {
		aKR = aQt
	}, this.aQa = function() {
		return aKR
	}, this.send = function(aB) {
		this.aDm() && aQq.send(aB)
	}, this.close = function(aPf) {
		this.aPX() && (aQq.close(aPf), this.qo())
	}, this.qo = function() {
		aQq.onopen = null, aQq.onmessage = null, aQq.onclose = null, aQq.onerror = null
	}
}

function dE() {
	var aQz = !1,
		a5a = 0,
		i = 0,
		rt = 0,
		gap = 0,
		canvas = null,
		x4 = null,
		a1J = null;

	function aR1() {
		for (var aR7, aR5 = 0, eY = 0, et = Math.floor(i / 2), dw = Math.floor(rt / 2), aR6 = 1.5 * Math.PI, aA = aC.w8; 0 <= aA; aA--) eY += a1J[aA], 0 === a1J[aA] && aR5++;
		if (aQz = !1, x4.clearRect(0, 0, i, i), x4.fillStyle = b9.mc, x4.fillRect(0, 0, i, i), x4.fillStyle = b9.mf, x4.fillRect(0, 0, i, gap), x4.fillRect(0, 0, gap, i), x4.fillRect(i - gap, 0, gap, i), x4.fillRect(0, i - gap, i, gap), 0 < eY)
			if (aR5 === aC.w8) {
				for (aA = aC.w8; 0 <= aA; aA--)
					if (0 < a1J[aA]) {
						! function(aA, et, dw) {
							x4.fillStyle = be.aRE[be.kA[aA]], x4.beginPath(), x4.arc(et, et, dw, 0, 2 * Math.PI), x4.fill()
						}(aA, et, dw);
						break
					}!
				function(et) {
					var fontSize = et / 3;
					x4.font = b8.pX.rM(1, fontSize), x4.fillStyle = b9.mf, x4.fillText("100%", et, et + .1 * fontSize)
				}(et)
			} else {
				for (aA = 0; aA <= aC.w8; aA++) 0 < a1J[aA] && (! function(aA, et, dw, aR6, aR7) {
					x4.fillStyle = be.aRE[be.kA[aA]], x4.beginPath(), x4.arc(et, et, dw, aR6, aR7), x4.lineTo(et, et), x4.fill()
				}(aA, et, dw, aR6, aR7 = aR6 + 2 * Math.PI * a1J[aA] / eY), function(et, dw, aR6, aR7) {
					var f0 = (aR7 - aR6) / (2 * Math.PI),
						fontSize = (__fx.settings.detailedTeamPercentage ? 0.75 : 1) * dw * Math.min(f0, .37);
					fontSize < 8 || (aR6 = (aR6 + aR7) / 2, aR7 = (__fx.settings.detailedTeamPercentage ? (100 * f0).toFixed(2) : Math.floor(100 * f0 + .5)) + "%", dw *= .525 - Math.max(.6 * (f0 - .7), 0), x4.font = b8.pX.rM(1, fontSize), x4
						.fillStyle = b9.mf, x4.fillText(aR7, et + Math.cos(aR6) * dw, et + Math.cos(aR6 + 1.5 * Math.PI) * dw))
				}(et, dw, aR6, aR7), 0 !== aA && aRC(et, dw, aR6), aR6 = aR7);
				aRC(et, dw, 1.5 * Math.PI)
			}!
		function(et, dw) {
			x4.beginPath(), x4.arc(et, et, dw, 0, 2 * Math.PI), x4.stroke()
		}(et, dw)
	}

	function aRC(et, dw, aRF) {
		x4.beginPath(), x4.moveTo(et, et), x4.lineTo(et + Math.cos(aRF) * dw, et + Math.cos(aRF + 1.5 * Math.PI) * dw), x4.stroke()
	}
	this.dU = function() {
		if (aC.hO) {
			a5a = 0, a1J = new Uint32Array(aC.w8 + 1);
			for (var aA = aC.w8; 0 <= aA; aA--) a1J[aA] = 0;
			for (aA = ak.jp - 1; 0 <= aA; aA--) a1J[be.eW[ak.jq[aA]]] += 1;
			this.resize()
		} else a1J = x4 = canvas = null
	}, this.a6O = function() {
		return i
	}, this.resize = function() {
		aC.hO && (i = Math.floor(z.a0.qv() && !aC.m8 ? .18 * h.min : .13 * h.pZ), i = (i *= 1 + (.5 + .2 * z.a0.qv()) * aC.m8) + i % 2, rt = Math.floor(7 * i / 8), (canvas = canvas || document.createElement("canvas")).width = i, canvas.height =
			i, x4 = canvas.getContext("2d", {
				alpha: !0
			}), gap = Math.max(1, .015 * i), x4.lineWidth = gap, x4.strokeStyle = b9.mf, b8.pX.textAlign(x4, 1), b8.pX.textBaseline(x4, 1), aR1())
	}, this.a2b = function() {
		var dk, l0 = this.l1();
		return be.kA[l0] || (l0 = function() {
			for (var l0 = -1, aA = aC.w8; 1 <= aA; aA--)(-1 === l0 || a1J[aA] > a1J[l0]) && (l0 = aA);
			return l0
		}(), dk = af.gM[l4[0]], -1 !== l0 && a1J[l0] > dk) ? a1J[l0] : dk
	}, this.zh = function() {
		return a5a = 31, this.ii(), this.l1()
	}, this.l1 = function() {
		for (var l0 = 0, aA = aC.w8; 0 < aA; aA--) a1J[aA] > a1J[l0] && (l0 = aA);
		return l0
	}, this.l2 = function(aR3) {
		for (var g1 = 0, jq = ak.jq, eW = be.eW, eY = ak.jp, fC = bM.fC, aA = 0; aA < eY; aA++) {
			var g6 = jq[aA];
			eW[g6] === aR3 && (fC[g1++] = g6)
		}
		bM.f4[0] = g1
	}, this.a2D = function() {
		for (var g1 = 0, aA = aC.w8; 0 <= aA; aA--) g1 += 0 < a1J[aA];
		return g1
	}, this.ii = function() {
		if (aC.hO && 32 <= ++a5a) {
			a5a = 0;
			for (var aA = aC.w8; 0 <= aA; aA--) a1J[aA] = 0;
			for (aA = ak.jp - 1; 0 <= aA; aA--) a1J[be.eW[ak.jq[aA]]] += af.gM[ak.jq[aA]];
			aQz = !0
		}
	}, this.lQ = function() {
		aC.hO && aQz && aR1()
	}, this.te = function() {
		aC.hO && (aC.m8 ? tf.drawImage(canvas, ba.gap, ba.gap) : tf.drawImage(canvas, ba.gap, a6P + 2 * ba.gap))
	}
}

function cx() {
	function aRH(key) {
		var aOW;
		return "undefined" == typeof URLSearchParams || (aOW = window.location.search, "string" != typeof(aOW = new URLSearchParams(aOW).get(key))) || aOW.length < 1 ? null : aOW
	}
	this.dd = function() {
		if (0 !== z.id) return !1;
		if (! function() {
				var value = aRH("account");
				if (!value && !(value = aRH("a"))) return void bG.clear();
				return bG.clear(), s.t(8, s.rm, new rn(1e3, {
					ro: 0,
					rk: value,
					rl: 0
				})), 1
			}()) {
			var value = aRH("replay");
			if (!this.clear()) return !1;
			if (!value) return !1;
			s.t(3, 0, value)
		}
		return !0
	}, this.clear = function() {
		var zr = new URL(window.location.href);
		zr.search = "";
		try {
			return history.replaceState(null, "", zr.toString()), !0
		} catch (e) {
			console.log("error 352: " + e)
		}
		return !1
	}, this.aLd = function(key, value) {
		if (0 === z.id) try {
			var zr = new URL(window.location.href),
				g6 = zr.searchParams;
			g6.set(key, value), zr.search = g6.toString(), history.replaceState(null, "", zr.toString())
		} catch (e) {
			console.log("error 358: " + e)
		}
	}
}

function ce() {
	var aRJ, g;
	this.dU = function() {
		for (var aA = (g = new Uint16Array(101)).length - 1; 0 <= aA; aA--) g[aA] = bJ.dl(32768 * aA, 100);
		this.a3M(0)
	}, this.value = function(g6) {
		return g[g6]
	}, this.aIm = function() {
		return bJ.dl(aRJ - 1, 2)
	}, this.a3M = function(aIR) {
		aRJ = 2 * aIR % 32768 + 1
	}, this.random = function() {
		return aRJ = 167 * aRJ % 32768
	}, this.j6 = function(lY) {
		return bJ.dl(lY * this.random(), 32768)
	}, this.jg = function(g6) {
		return 0 !== g6 && this.random() < this.value(g6)
	}, this.iS = function(er, es) {
		return er + this.j6(es - er)
	}
}

function ct() {
	this.on = new aRK, this.a3X = new aRL, this.aG9 = new aRM, this.dU = function() {
		aC.gi || this.on.dU()
	}, this.ii = function() {
		aC.gi || (this.on.ii(), 3 !== s.rm) || bd.jl() % 15 != 5 && 2 !== aC.yn || s.aDC().aOX()
	}, this.aOa = function() {
		0 === aC.yn && aZ.aE4(), aC.a3H.a3f(), aC.data.canvas = null, ay.x.close(ay.x.a03, 3257), ay.x.a03 = 0, aC.data.isReplay = 1, aC.a3K()
	}, this.aOZ = function(pE) {
		var aA = pE.indexOf("=");
		return 0 <= aA ? pE.substring(aA + 1) : pE
	}, this.aOY = function(pE) {
		return "https://territorial.io/?replay=" + pE
	}
}

function aRK() {
	this.aRO = null, this.aRP = null, this.aRQ = null, this.aRR = null, this.aRS = null, this.aRT = null, this.a3W = "";
	var aRU = 0;
	this.dU = function() {
		this.aRO = [], this.aRP = [], this.aRQ = [], this.aRR = [], this.aRS = [0], this.aRT = [0], aRU = 0, this.a3W = ""
	}, this.oo = function(id, fG, fI, fK) {
		aC.gi || 2 === aC.yn || (0 === this.aRS[aRU] && (this.aRT[aRU] ? (this.aRS.push(1), this.aRT.push(0), aRU++) : this.aRS[aRU] = 1), this.aRO.push(id), this.aRP.push(fG), this.aRQ.push(void 0 === fI ? 0 : fI), this.aRR.push(void 0 === fK ?
			0 : fK), this.aRT[aRU]++)
	}, this.ii = function() {
		0 === this.aRS[aRU] ? this.aRT[aRU]++ : (this.aRS.push(0), this.aRT.push(0), aRU++)
	}
}

function aRM() {
	var aRV = 0;

	function aRZ(pE, id) {
		aRV || (id ? 1 === id ? aM.a4h = L(405) + ": " + pE : s.t(4, 3, new u(L(406), pE, 1)) : s.t(4, 3, new u("⚠️ " + L(404), pE, 1)))
	}
	this.vD = function(pE, aRW) {
		var pP;
		return aRV = aRW, bE.rp.v5(bE.rp.v3(bE.rp.v1(pE))), aM.a4h = "", !(! function() {
			if (bF.size < 10) aRZ("File Too Small");
			else {
				var aRb = bF.oY(12),
					aQp = (aRb !== l.rVersion && aRZ("Incompatible Version " + aRb + " " + l.rVersion, 1), bF.oY(12)),
					aRc = bF.oY(31);
				if (aRc !== bF.size) aRZ("Size Error: " + aRc + " " + bF.size);
				else if (function(j, aRb) {
						for (var g6 = bF.aB, eY = bF.size, aQp = aRb, aA = 3; aA < eY; aA++) aQp = aQp + g6[aA] & 4095;
						return aQp === j || (aRZ("Hash Error: " + aQp + " " + j + " " + eY), !1)
					}(aQp, aRb)) return 1
			}
			return
		}() || (aRW = bF, (pP = aC.data = new a3G).mapType = aRW.oY(2), pP.mapProceduralIndex = aRW.oY(8), pP.mapRealisticIndex = aRW.oY(8), pP.mapSeed = aRW.oY(14), pP.mapName = aRW.aRe(5), 2 === pP.mapType && aRW.aRf(), pP
			.passableWater = aRW.oY(1), pP.passableMountains = aRW.oY(1), pP.playerCount = aRW.oY(10), pP.humanCount = aRW.oY(10), pP.selectedPlayer = aRW.oY(9), pP.gameMode = aRW.oY(1), pP.playerMode = aRW.oY(2), pP.battleRoyaleMode =
			aRW.oY(2), pP.numberTeams = aRW.oY(4), pP.isZombieMode = aRW.oY(1), pP.isContest = aRW.oY(1), pP.isReplay = aRW.oY(1), pP.elo = aRW.aRg(2, 14, 2), pP.colorsType = aRW.oY(1), pP.colorsPersonalized = aRW.oY(1), pP.colorsData =
			aRW.aRg(10, 18, 512), pP.selectableColor = aRW.oY(1), pP.teamPlayerCount = aRW.aRg(4, 10, 9), pP.neutralBots = aRW.oY(1), pP.botDifficultyType = aRW.oY(2), pP.botDifficultyValue = aRW.oY(4), pP.botDifficultyTeam = aRW.aRg(4,
				4, 9), pP.botDifficultyData = aRW.aRg(10, 4, 512), pP.spawningType = aRW.oY(2), pP.spawningSeed = aRW.oY(14), pP.spawningData = aRW.aRg(11, 12, 1024), pP.selectableSpawn = aRW.oY(1), pP.playerNamesType = aRW.oY(2), pP
			.playerNamesData = aRW.aRh(10, 5, 512), pP.selectableName = aRW.oY(1), pP.aIncomeType = aRW.oY(2), pP.aIncomeValue = aRW.oY(8), pP.aIncomeData = aRW.aRg(10, 8, 512), pP.tIncomeType = aRW.oY(2), pP.tIncomeValue = aRW.oY(8), pP
			.tIncomeData = aRW.aRg(10, 8, 512), pP.iIncomeType = aRW.oY(2), pP.iIncomeValue = aRW.oY(8), pP.iIncomeData = aRW.aRg(10, 8, 512), pP.sResourcesType = aRW.oY(2), pP.sResourcesValue = aRW.oY(11), pP.sResourcesData = aRW.aRg(10,
				11, 512), ! function() {
				var ht = bF,
					vE = ht.oY(5),
					aRi = ht.oY(30),
					aRj = ht.oY(30);
				if (aRi + aRj > 8 * ht.size) return void aRZ("Corrupted File");
				return function(eY) {
						var aRm = new Uint8Array(eY),
							aRn = new Uint16Array(eY),
							aRo = new Uint32Array(eY),
							aRp = new Uint32Array(eY);
						b7.on.aRO = aRm, b7.on.aRP = aRn, b7.on.aRQ = aRo, b7.on.aRR = aRp;
						for (var aA = 0; aA < eY; aA++) {
							var id = bF.oY(4);
							aRm[aA] = id, aRn[aA] = bF.oY(9), 0 === id ? aRo[aA] = bF.oY(22) : 1 === id ? (aRo[aA] = bF.oY(10), aRp[aA] = bF.oY(10)) : 2 === id ? (aRo[aA] = bF.oY(10), aRp[aA] = bF.oY(9)) : 3 === id || 4 === id ? (aRo[
								aA] = bF.oY(10), aRp[aA] = bF.oY(22)) : 5 === id || 6 === id ? aRo[aA] = bF.oY(10) : 7 === id ? aRo[aA] = bF.oY(1) : 10 === id && (aRo[aA] = bF.oY(20), aRp[aA] = bF.oY(22))
						}
					}(aRi),
					function(eY, vE) {
						var aRS = new Uint8Array(eY),
							aRT = new Array(eY);
						aRT.fill(0), b7.on.aRS = aRS, b7.on.aRT = aRT;
						for (var aA = 0; aA < eY; aA++) aRS[aA] = bF.oY(1), aRT[aA] = bF.oY(vE)
					}(aRj, vE), 1
			}()) || (bF.dx < 8 * bF.size - 13 || bF.dx > 8 * bF.size ? (aRZ("Out Of Bounds Error: " + bF.dx + " " + 8 * bF.size), 1) : (b7.on.a3W = pE, 2 === aC.data.mapType && (aRZ("Load base64 image...", 2), 1))))
	}, this.aGA = function(aFk, aRa) {
		var a1e = document.createElement("canvas"),
			hW = a1e.getContext("2d");
		if (a1e.width = aFk.width, a1e.height = aFk.height, hW.drawImage(aFk, 0, 0), aRV || aRa) return aC.yn ? void 0 : (aC.data.canvas = a1e, aC.data.mapType = 2, s.w(), void s.t(19));
		b7.aOa()
	}
}

function aRL() {
	this.yG = function() {
		var vE = function() {
				for (var aRT = b7.on.aRT, eY = aRT.length, max = 0, aA = 0; aA < eY; aA++) max = Math.max(max, aRT[aA]);
				return vL(Math.max(max, 1))
			}(),
			i = (pP = aC.data, (i = bC).dU(), i.a7(12, l.rVersion), i.dx += 43, i.a7(2, pP.mapType), i.a7(8, pP.mapProceduralIndex), i.a7(8, pP.mapRealisticIndex), i.a7(14, pP.mapSeed), i.aRw(pP.mapName, 5), 2 === pP.mapType && i.aRx(pP.canvas),
				i.a7(1, pP.passableWater), i.a7(1, pP.passableMountains), i.a7(10, pP.playerCount), i.a7(10, pP.humanCount), i.a7(9, pP.selectedPlayer), i.a7(1, pP.gameMode), i.a7(2, pP.playerMode), i.a7(2, pP.battleRoyaleMode), i.a7(4, pP
					.numberTeams), i.a7(1, pP.isZombieMode), i.a7(1, pP.isContest), i.a7(1, pP.isReplay), i.db(pP.elo, 2, 14), i.a7(1, pP.colorsType), i.a7(1, pP.colorsPersonalized), i.db(pP.colorsData, 10, 18), i.a7(1, pP.selectableColor), i.db(
					pP.teamPlayerCount, 4, 10), i.a7(1, pP.neutralBots), i.a7(2, pP.botDifficultyType), i.a7(4, pP.botDifficultyValue), i.db(pP.botDifficultyTeam, 4, 4), i.db(pP.botDifficultyData, 10, 4), i.a7(2, pP.spawningType), i.a7(14, pP
					.spawningSeed), i.db(pP.spawningData, 11, 12), i.a7(1, pP.selectableSpawn), i.a7(2, pP.playerNamesType), i.aRy(pP.playerNamesData, 10, 5), i.a7(1, pP.selectableName), i.a7(2, pP.aIncomeType), i.a7(8, pP.aIncomeValue), i.db(pP
					.aIncomeData, 10, 8), i.a7(2, pP.tIncomeType), i.a7(8, pP.tIncomeValue), i.db(pP.tIncomeData, 10, 8), i.a7(2, pP.iIncomeType), i.a7(8, pP.iIncomeValue), i.db(pP.iIncomeData, 10, 8), i.a7(2, pP.sResourcesType), i.a7(11, pP
					.sResourcesValue), i.db(pP.sResourcesData, 10, 11), ! function(vE) {
					var i = bC,
						aRO = b7.on.aRO,
						fG = b7.on.aRP,
						fI = b7.on.aRQ,
						fK = b7.on.aRR,
						eY = aRO.length;
					i.a7(5, vE), i.a7(30, eY), i.a7(30, b7.on.aRT.length);
					for (var aA = 0; aA < eY; aA++) {
						var et = aRO[aA];
						i.a7(4, et), i.a7(9, fG[aA]), 0 === et ? i.a7(22, fI[aA]) : 1 === et ? (i.a7(10, fI[aA]), i.a7(10, fK[aA])) : 2 === et ? (i.a7(10, fI[aA]), i.a7(9, fK[aA])) : 3 === et || 4 === et ? (i.a7(10, fI[aA]), i.a7(22, fK[aA])) :
							5 === et || 6 === et ? i.a7(10, fI[aA]) : 7 === et ? i.a7(1, fI[aA]) : 10 === et && (i.a7(20, fI[aA]), i.a7(22, fK[aA]))
					}
				}(vE), ! function(vE) {
					for (var i = bC, aRS = b7.on.aRS, aRT = b7.on.aRT, eY = aRS.length, aA = 0; aA < eY; aA++) i.a7(1, aRS[aA]), i.a7(vE, aRT[aA])
				}(vE), bC.dx),
			pP = bJ.dl(i - 1, 6) + 1,
			vE = (bB.aQJ(6 * pP) !== bC.g.length && bC.g.push(0), ! function() {
				var i = bC;
				i.dx = 24, i.a7(31, i.g.length), i.dx = 12, i.a7(12, function() {
					for (var g = bC.g, eY = g.length, aQp = l.rVersion, aA = 3; aA < eY; aA++) aQp = aQp + g[aA] & 4095;
					return aQp
				}())
			}(), bF.dU(bC.g), bD.rp.rq(bD.rp.rr(pP)));
		return bF.t8(), bC.dU(), vE
	}
}

function cj() {
	var et, bp = !1,
		aS0 = !1,
		aS1 = -1e4,
		aS2 = -1,
		aS3 = 0;

	function resize(aS7) {
		et = 0, aa.sE() && (aS5(aS7) || bp) && (bp = !1, ba.resize(), bU.aA6.resize(), aX.dU(), bW.dU(), aY.resize(), aS.resize(), aN.resize(), s.resize(), 1 <= aC.yn ? (aU.resize(!1), aT.resize(), aV.resize(), aR.resize(), aQ.resize(), aM.resize(),
			aL.resize(), bA.resize(), au.resize(), aO.resize(), aP.resize(), aK.resize(), bc.resize(), ae.resize(), aW.resize(), bf.resize(), aR.a7T()) : (aZ.aE6(), aZ.aE7()), bd.dc = !0)
	}

	function aS4(f0) {
		return f0 && 128 < f0 ? Math.floor(f0) : 128
	}

	function aS5(aS7) {
		var i, j, aS9, rt, a6s;
		if (!(0 < h.rU)) return rt = aS4(document.documentElement.clientWidth), a6s = aS4(window.visualViewport && 2 !== z.id ? window.visualViewport.height : document.documentElement.clientHeight), i = rt, j = a6s, aS9 = 0 !== z.id || i < j ? 700 :
			1200, aS9 = Math.min(aS9 / ((i + j) / 2), 1), aS9 = 0 === bh.kn.data[1].value ? 2 * aS9 / 3 : Math.min(aS9 + (bh.kn.data[1].value - 1) * (1 - aS9) / 2, 1), h.k = (window.devicePixelRatio || 1) * aS9, __fx.hoveringTooltip
			.canvasPixelScale = h.k, aS7 && !aS0 ? (aS0 = !0, document.body.removeChild(a0I)) : aS0 && (aS0 = !1, document.body.appendChild(a0I)), i = Math.floor(.5 + rt * h.k), j = Math.floor(.5 + a6s * h.k), i !== h.i || j !== h.j ? (h.i = i, h
				.j = j, h.min = a9i(i, j), h.max = a4w(i, j), h.pZ = bJ.dl(i + j, 2), h.tb = i / j, a0I.width = i, a0I.height = j, a0I.style.width = rt + "px", a0I.style.height = a6s + "px", aS2 = bd.e7 + 1e3, 1) : void 0
	}
	this.i = 0, this.j = 0, this.min = 0, this.max = 0, this.pZ = 0, this.tb = 1, this.k = 1, this.rU = 0, this.dV = function() {
		this.i = aS4(document.documentElement.clientWidth) + 2, this.j = aS4(document.documentElement.clientHeight) + 2
	}, this.dU = function() {
		et = 1, a0I = document.getElementById("canvasA"), (tf = a0I.getContext("2d", {
			alpha: __fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aS5(0)
	}, this.ii = function() {
		50 <= ++et && resize(0), -1 === aS2 || bd.e7 < aS2 || (aS2 = -1, 2e3 * ++aS3 >= bd.e7 + 8e3 ? console.log("error 3748") : z.a0.setState(15))
	}, this.df = function(hi) {
		bp = !0, resize(hi)
	}, this.a0y = function() {
		aS1 + 1e3 > bd.e7 || (aS1 = bd.e7, resize(0))
	}
}

function dB() {
	this.aQX = new aSB, this.zc = new aSC
}

function aSC() {
	this.zd = function() {
		for (var g6, eY = ak.jp, yb = ak.jq, zL = af.zL, a6h = this.aFT(), aA = 0; aA < eY; aA++) g6 = yb[aA], b8.fu.jC(g6) || (zL[g6] = a6h);
		var ot = af.ot,
			ir = af.ir,
			is = af.is,
			zK = af.zK,
			eY = aC.jo;
		for (aA = 0; aA < eY; aA++)(0 === zK[aA] || is[aA] < 1 || 2 * ot[aA] > 3 * (ir[aA] + is[aA])) && (zL[aA] = 0);
		var za = 0;
		for (aA = 0; aA < eY; aA++) za += 0 < zL[aA];
		return za
	}, this.aFT = function() {
		return Math.min(65535, bd.jl())
	}
}

function aSB() {
	function aSG(g, f0, hM) {
		for (var aA = 0; aA < 256; aA++) g[aA] = (g[aA] + (f0 >> (aA + hM) % 30 & 1)) % 256
	}
	this.ii = function(aSD, aSE) {
		var g = new Uint8Array(256);
		return function(g, aSD, aSE) {
				var aA, aSI = 3 + (4 + aSD) % 32768,
					aSJ = 12 + aSE % 32768,
					aSK = 17 + ((aSD & aSE) + (aSD | aSE) + aSD) % 32768;
				for (aA = 0; aA < 256; aA++) aSI = 1 + aSI * aSJ % aSK, g[aA] = aSI % 256
			}(g, aSD, aSE), aSG(g, aSD, 2), aSG(g, aSE, 7),
			function(g) {
				var aA, f0, dx = 0;
				for (aA = 0; aA < 3e4; aA++) f0 = g[dx], g[dx] = (f0 + aA + g[(dx + aA) % 256]) % 256, dx = (f0 + aA + dx + (f0 & dx)) % 256
			}(g),
			function(g) {
				var aA, a6s = 1,
					sb = 1;
				for (aA = 0; aA < 256; aA += 2) a6s = (1 + a6s) * (g[aA] + 1) % 1073741824, sb = (1 + sb) * (g[aA + 1] + 1) % 1073741824;
				return [a6s, sb]
			}(g)
	}
}

function cg() {
	var aSL, aSM, h1, aSN;
	this.dU = function() {
		var aA, ef, eh, aQj, aSO, i, j, x4, hT, vV, f0, g6, eo, er, a46;
		if (function() {
				if (h1 = !0, aSN = "rgb(" + bQ.vT[0] + "," + bQ.vT[1] + "," + bQ.vT[2] + ")", bQ.aIZ(bQ.eE)) return 1;
				return h1 = !1, 0
			}()) aSM = null;
		else {
			for (aSL = bJ.dl(96, 4), aSO = 1 === bQ.eE ? (aQj = 0, 160) : (aQj = 128, 32), aSN = "rgb(" + aQj + "," + aQj + "," + aQj + ")", aSM = new Array(4), aA = 3; 0 <= aA; aA--) {
				if (aSM[aA] = document.createElement("canvas"), i = aA % 2 == 0 ? bQ.ej : aSL, j = aA % 2 == 0 ? aSL : bQ.ek + 2 * aSL, aSM[aA].width = i, aSM[aA].height = j, vV = (hT = (x4 = aSM[aA].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, i, j)).data, aA % 2 == 0)
					for (eh = aSL - 1; 0 <= eh; eh--)
						for (f0 = aSO + Math.floor((eh + 1) * (aQj - aSO) / (aSL + 1)), ef = i - 1; 0 <= ef; ef--) vV[g6 = 4 * ((0 === aA ? aSL - eh - 1 : eh) * i + ef)] = f0, vV[g6 + 1] = f0, vV[g6 + 2] = f0, vV[g6 + 3] = 255;
				else {
					for (ef = aSL - 1; 0 <= ef; ef--)
						for (f0 = aSO + Math.floor((ef + 1) * (aQj - aSO) / (aSL + 1)), eh = j - 1 - aSL; aSL <= eh; eh--) vV[g6 = 4 * (eh * i + (3 === aA ? aSL - ef - 1 : ef))] = f0, vV[g6 + 1] = f0, vV[g6 + 2] = f0, vV[g6 + 3] = 255;
					for (er = 1; 0 <= er; er--)
						for (ef = aSL - 1; 0 <= ef; ef--)
							for (eh = aSL - 1; 0 <= eh; eh--) eo = (Math.pow(ef * ef + eh * eh, .5) + 1) / (aSL + 1), f0 = aSO + Math.floor((1 < eo ? 1 : eo) * (aQj - aSO)), vV[g6 = 4 * ((0 === er ? aSL - eh - 1 : eh + er * (j - aSL)) * i + (
								1 === aA ? ef : aSL - ef - 1))] = f0, vV[g6 + 1] = f0, vV[g6 + 2] = f0, vV[g6 + 3] = 255
				}
				x4.putImageData(hT, 0, 0)
			}
			a46 = aSO, bQ.vO.fillStyle = "rgb(" + a46 + "," + a46 + "," + a46 + ")", bQ.vO.fillRect(0, 0, bQ.ej, 1), bQ.vO.fillRect(0, bQ.ek - 1, bQ.ej, 1), bQ.vO.fillRect(0, 0, 1, bQ.ek), bQ.vO.fillRect(bQ.ej - 1, 0, 1, bQ.ek)
		}
	}, this.wy = function() {
		var er = h1 ? 0 : -aSL;
		aKA(er, er, bQ.ej - 2 * er, bQ.ek - 2 * er, bY.aSR, bY.aSS, bY.aST, bY.aSU) || (tf.fillStyle = aSN, tf.fillRect(0, 0, h.i, h.j))
	}, this.te = function() {
		h1 || (aK9(0, -aSL, bQ.ej, aSL, bY.aSR, bY.aSS, bY.aST, bY.aSU) && tf.drawImage(aSM[0], bY.aSV, bY.aSW - aSL), aK9(bQ.ej, -aSL, aSL, bQ.ek + 2 * aSL, bY.aSR, bY.aSS, bY.aST, bY.aSU) && tf.drawImage(aSM[1], bY.aSV + bQ.ej, bY.aSW - aSL),
			aK9(0, bQ.ek, bQ.ej, aSL, bY.aSR, bY.aSS, bY.aST, bY.aSU) && tf.drawImage(aSM[2], bY.aSV, bY.aSW + bQ.ek), aK9(-aSL, -aSL, aSL, bQ.ek + 2 * aSL, bY.aSR, bY.aSS, bY.aST, bY.aSU) && tf.drawImage(aSM[3], bY.aSV - aSL, bY.aSW - aSL))
	}
}

function d0() {
	this.h2 = new aSX, this.aFR = new aSY, this.x1 = new aSZ, this.x = new aSa, this.iI = new aSb, this.a46 = new aSc, this.aSd = new aSe, this.jc = new aSf, this.kQ = new aSg, this.aSh = new aSi, this.dU = function() {
		this.x1.dU(), this.x.dU(), this.iI.dU(), this.a46.dU(), this.aSh.dU()
	}, this.te = function() {
		this.aSh.te(), this.x1.te()
	}
}

function aSf() {
	this.ii = function(player) {
		var ok;
		return !!aC.data.passableWater && 0 !== af.gF[player].length && bL.x.ol !== bL.x.k2 && !((ok = bL.x.ok[player]) >= Math.max(3 * am.performance.kr, aD.k2[aD.hD[player]]) || ok === bL.x.ox || !b8.fu.or(player, aD.k0[aD.hD[player]], 32,
			0) || !am.iV.ii(player) && !am.iX.ii(player) || ! function(a2G) {
				var aSl = bM.fA[1] + bK.hY[bM.fA[2] - 1] << 2;
				if (ab.eP(aSl)) return 1;
				return aSl = ab.eQ(aSl), a2G !== aSl && !!eR(a2G, aSl)
			}(player)) && function(player) {
			return b8.fu.ou(player), bL.x.p0(player), !0
		}(player)
	}
}

function aSX() {
	function aSt(aA, ks, kt) {
		var aSv, aSu;
		if (!(aA < 0)) return aSu = bL.x.m4[aA], aSv = bK.hw(aSu), aSu = bK.hz(aSu), aA = 20 * (.9 + .1 * Math.log10(bL.x.a5E[aA])), aA = Math.max(aA, bK.iC(b8.pX.sC(.02, 1.7))), bJ.aKH(bK.hv(ks), bK.hy(kt), aSv, aSu, aA)
	}

	function aSn(aSm) {
		var aSy = 4 + .03 * (1 + 1.5 * z.a0.qv()) * h.pZ / iA;
		return bK.i0(aSm, bM.fA[1]) < aSy
	}
	this.h3 = function(player, aSm) {
		return !!(aC.data.passableWater && bK.iD(aSm) && bL.x.ol !== bL.x.k2 && bL.x.ok[player] !== bL.x.ox && 0 !== af.gF[player].length && bL.kQ.kR(player, aSm) && aSn(aSm))
	}, this.o5 = function(player, m1, aSm) {
		return !!(bK.iD(aSm) && this.p1(player, m1) && bL.kQ.p2(aSm) && aSn(aSm))
	}, this.p1 = function(player, id) {
		for (var aSo, s7 = player << 3, s8 = s7 + bL.x.ok[player], aSp = bL.x.aSp, aSq = bL.x.aSq, aA = s7; aA < s8; aA++)
			if (id === aSq[aSo = aSp[aA]]) return bM.fA[3] = aSo, !0;
		return !1
	}, this.o4 = function(eK) {
		var a47 = bL.a46.a47;
		return !!this.p1(aC.eI, a47) && (b6.gv.o4(a47, eK), !0)
	}, this.a49 = function(ks, kt) {
		var player = aC.eI,
			eY = bL.x.ok[player];
		if (0 === eY) return !1;
		for (var aSp = bL.x.aSp, m4 = bL.x.m4, s7 = player << 3, aSr = 80, aMO = -1, aA = s7 + eY - 1; s7 <= aA; aA--) {
			var aSs = aSp[aA],
				eo = bK.hq(ks, kt, m4[aSs]);
			eo < aSr && (aSr = eo, aMO = aSs)
		}
		return !!aSt(aMO, ks, kt) && (bL.a46.a47 = bL.x.aSq[aMO], bj.oz.a49(), !0)
	}, this.a4G = function(ks, kt) {
		var eY = bL.x.ol;
		if (eY < 1) return -1;
		for (var m4 = bL.x.m4, aSr = 80, aMO = -1, aA = 0; aA < eY; aA++) {
			var eo = bK.hq(ks, kt, m4[aA]);
			eo < aSr && (aSr = eo, aMO = aA)
		}
		return aSt(aMO, ks, kt) ? aMO : -1
	}, this.m3 = function(player, id) {
		for (var s7 = player << 3, s8 = s7 + bL.x.ok[player], aSq = bL.x.aSq, aSp = bL.x.aSp, aA = s7; aA < s8; aA++) {
			var aSs = aSp[aA];
			if (aSq[aSs] === id) return aSs
		}
		return -1
	}, this.aFO = function(player) {
		for (var s7 = player << 3, s8 = s7 + bL.x.ok[player], aSp = bL.x.aSp, a5E = bL.x.a5E, hD = 0, aA = s7; aA < s8; aA++) hD += a5E[aSp[aA]];
		return hD
	}, this.m9 = function(player) {
		return 0 === bL.x.ok[player] ? -1 : bL.x.aSp[player << 3]
	}
}

function aSY() {
	this.aFS = function(player) {
		for (var aSp = bL.x.aSp, s7 = player << 3, aA = s7 + bL.x.ok[player] - 1; s7 <= aA; aA--) this.aSz(aSp[aA])
	}, this.aSz = function(aT0) {
		var x = bL.x,
			aT1 = x.ol - 1,
			aT2 = x.a5D[aT0],
			aT3 = x.aT4[aT0],
			aT5 = x.m4[aT0];
		x.ol = aT1, x.a5D[aT0] = x.a5D[aT1], x.aT6[aT0] = x.aT6[aT1], x.aT7[aT0] = x.aT7[aT1], x.m4[aT0] = x.m4[aT1], x.aT8[aT0] = x.aT8[aT1], x.a5E[aT0] = x.a5E[aT1], x.aT4[aT0] = x.aT4[aT1], x.aSq[aT0] = x.aSq[aT1], x.aT9[aT0] = x.aT9[aT1], x
			.aTA[aT0] = x.aTA[aT1], x.aSp[x.a5D[aT0]] = aT0,
			function(aRF) {
				var player = aRF >> 3,
					x = bL.x,
					eY = x.ok[player] - 1,
					aTD = (player << 3) + eY;
				x.ok[player] = eY, aTD !== aRF && (x.aSp[aRF] = x.aSp[aTD], x.a5D[x.aSp[aRF]] = aRF)
			}(aT2), bL.iI.iI[bK.iH(x.m4[aT0])][x.aT4[aT0]] = aT0, aT1 = bK.iH(aT5), aT2 = aT3, aT1 = bL.iI.iI[aT1], x = aT1.pop(), aT2 !== aT1.length && (aT1[aT2] = x, bL.x.aT4[x] = aT2)
	}
}

function aSZ() {
	var aTF, xQ = 8,
		aTG = new Array(2);

	function aTH(dx) {
		var hQ = xQ + 4,
			a1e = b8.pX.vK(hQ, hQ),
			hW = b8.pX.getContext(a1e, !0),
			hT = b8.pX.getImageData(hW, hQ, hQ),
			vV = hT.data;
		return aTI(vV, hQ + 1, dx), aTI(vV, hQ + 2, dx), aTI(vV, 2 * hQ + 1, dx), aTI(vV, 2 * hQ - 3, dx), aTI(vV, 2 * hQ - 2, dx), aTI(vV, 3 * hQ - 2, dx), aTI(vV, hQ * (hQ - 3) + 1, dx), aTI(vV, hQ * (hQ - 2) + 1, dx), aTI(vV, hQ * (hQ - 2) + 2,
			dx), aTI(vV, hQ * (hQ - 2) - 2, dx), aTI(vV, hQ * (hQ - 1) - 3, dx), aTI(vV, hQ * (hQ - 1) - 2, dx), hW.putImageData(hT, 0, 0), a1e
	}

	function aTI(vV, eK, dx) {
		eK *= 4;
		vV[eK] = 255, vV[1 + eK] = 255, vV[2 + eK] = dx, vV[3 + eK] = 255
	}

	function vK(player) {
		var a1e = b8.pX.vK(xQ, xQ);
		return function(hW, player) {
			var ef, eh, hu, eK, aTK, aTL, hQ = xQ,
				hT = b8.pX.getImageData(hW, hQ, hQ),
				vV = hT.data,
				kW = (hQ >> 1) - .5,
				aSN = ab.a5o(player),
				aTN = b8.pg.a1C(aSN, .5);
			b8.pg.a1E(aSN, aTN, 300) || b8.pg.a1G(aSN, 100);
			for (eh = 0; eh < hQ; eh++)
				for (ef = 0; ef < hQ; ef++) aTL = (hQ - 1.5) * (hQ - 1.5) / 4, aTK = (hu = (hu = ef - kW) * hu + (hu = eh - kW) * hu) <= (hQ - 4.5) * (hQ - 4.5) / 4 ? aTN : aSN, vV[eK = 4 * (eh * hQ + ef)] = aTK[0], vV[1 + eK] = aTK[1], vV[2 +
					eK] = aTK[2], vV[3 + eK] = aTL < hu ? 0 : 255;
			hW.putImageData(hT, 0, 0)
		}(b8.pX.getContext(a1e, !0), player), a1e
	}
	this.dU = function() {
		aTF = new Array(aC.eV), aTG[0] = aTH(255), aTG[1] = aTH(0)
	}, this.te = function() {
		var aA, player, aTO, aKI, hD, ht, aTQ, aTS, aTT, m4 = bL.x.m4,
			a5D = bL.x.a5D,
			a5E = bL.x.a5E,
			aTA = bL.x.aTA,
			aTU = aTF,
			aTV = aC.eI,
			aTW = -1,
			eY = bL.x.ol,
			aTX = h.i,
			aTY = h.j,
			aTZ = bQ.ej << 4,
			eN = iA,
			eC = eN / xQ,
			m5 = i9 / eN,
			m6 = iB / eN,
			hu = (aTX + i9) / eN - m5,
			hx = (aTY + iB) / eN - m6,
			hW = tf;
		for (bL.h2.p1(aC.eI, bL.a46.a47) && (aTW = bM.fA[3]), hW.imageSmoothingEnabled = eN < 9, b8.pX.textAlign(hW, 1), b8.pX.textBaseline(hW, 1), aA = 0; aA < eY; aA++) player = a5D[aA] >> 3, hD = a5E[aA], aTO = .9 + .1 * Math.log10(hD), aKI =
			(ht = m4[aA]) % aTZ / 16 - aTO, ht = aTY * (Math.floor(ht / aTZ) / 16 - aTO - m6) / hx, aTQ = -2 * (aTT = eN * aTO) * (1 + (aTS = +(player === aTV)) / 8), aTS = aTS * aTT / 4, (aTT = aTX * (aKI - m5) / hu) < aTQ || ht < aTQ || aTX +
			aTS < aTT || aTY + aTS < ht || (aKI = 2 * aTO * eC, aTQ = aTO * eN, void 0 === (aTS = aTU[player]) && (aTU[player] = aTS = vK(player)), player === aTV && (hW.setTransform(aKI, 0, 0, aKI, aTT - 2 * aKI, ht - 2 * aKI), hW.drawImage(aTG[
				+(aA === aTW)], 0, 0)), hW.setTransform(aKI, 0, 0, aKI, aTT, ht), hW.drawImage(aTS, 0, 0), (aTO = Math.floor(function(hD) {
				if (hD < 1e3) return .42;
				if (hD < 1e4) return .34;
				if (hD < 1e6) return .26;
				if (hD < 1e8) return .19;
				return .15
			}(hD) * aTQ)) < 6) || (hW.setTransform(1, 0, 0, 1, 0, 0), hW.fillStyle = aTA[aA] ? b9.nD : b9.mf, hW.font = b8.pX.rM(1, aTO), hW.fillText(b8.zO.y5(hD), aTT + aTQ, ht + aTQ + .1 * aTO));
		hW.imageSmoothingEnabled = !1, hW.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aSi() {
	var a1e;
	this.dU = function() {
		a1e = a1e || bN.x.aTc(20, be.aTd[7])
	}, this.te = function() {
		var mP = iA;
		if (!(5 <= mP)) {
			var aTX = h.i,
				aTY = h.j,
				m5 = i9 / mP,
				m6 = iB / mP,
				mI = (aTX + i9) / mP,
				mJ = (aTY + iB) / mP,
				g7 = -20 * mP,
				aTe = .5 * g7,
				aTZ = bQ.ej << 4,
				eY = bL.x.ol,
				m4 = bL.x.m4,
				aTf = a1e,
				hW = tf;
			3 < mP && (hW.globalAlpha = .5 * (5 - mP));
			for (var aA = 0; aA < eY; aA++) {
				var ht = m4[aA],
					ef = aTX * (ht % aTZ / 16 - m5) / (mI - m5) + aTe,
					ht = aTY * (Math.floor(ht / aTZ) / 16 - m6) / (mJ - m6) + aTe;
				aTX < ef || aTY < ht || ef < g7 || ht < g7 || (hW.setTransform(mP, 0, 0, mP, ef, ht), hW.drawImage(aTf, 0, 0))
			}
			hW.globalAlpha = 1, hW.setTransform(mP, 0, 0, mP, 0, 0)
		}
	}
}

function aSe() {
	this.ii = function() {
		for (var aSu, aSd, aT9 = bL.x.aT9, m4 = bL.x.m4, aT7 = bL.x.aT7, aA = bL.x.ol - 1; 0 <= aA; aA--) aSu = m4[aA], 0 !== (aSd = aT9[aA]) && aSu === aT7[aA] && (! function(aA, aTj, hL) {
			var iz, player = bL.x.a5D[aA] >> 3,
				hL = aTj + bK.hY[hL] << 2,
				aA = bL.x.a5E[aA];
			if (bb.aTk(player), ab.eP(hL)) iz = aC.eV;
			else {
				if ((iz = ab.eQ(hL)) === player) return hL = b8.fu.fx(player, aA), bb.fy(player, aA - hL, 12);
				if (!eR(player, iz)) return b6.jr.oJ(player, iz, aA)
			}
			ac.jA(player, iz) || ac.jS(player) ? (af.g0[player].push(aTj << 2), ac.iw(player, aA, iz), aE.ix(player, !0)) : bb.fy(player, aA, 12)
		}(aA, bK.iG(aSu), aSd - 1), bL.aFR.aSz(aA))
	}, this.aTl = function(player, eK, hL, m1) {
		if (0 !== hL) {
			var aTV = aC.eI;
			if (b8.fu.gl(aTV) && eR(player, aTV) && player !== aTV && 0 !== af.gF[aTV].length) {
				var aSl = eK + bK.hY[--hL] << 2;
				if (ab.eP(aSl) || eR(player, ab.eQ(aSl))) {
					for (var em = !1, aA = 0; aA < 4; aA++)
						if (aSl = eK + bK.hY[aA] << 2, ab.eT(aSl) && !ab.eP(aSl) && ab.eQ(aSl) === aTV) {
							em = !0;
							break
						} em && (aM.a48(719, 0), aM.zB(180, L(407, [af.zM[player]]), 719, player, b9.nC, b9.mc, -1, !0, void 0, {
						es: 1,
						m1: m1
					}))
				}
			}
		}
	}
}

function aSa() {
	this.aTm = null, this.k2 = 512, this.ox = 8, this.ol = 0, this.aTn = 0, this.a5D = new Uint16Array(this.k2), this.aT6 = new Uint32Array(this.k2), this.aT7 = new Uint32Array(this.k2), this.m4 = new Uint32Array(this.k2), this.aT8 = new Uint16Array(
			this.k2), this.a5E = new Uint32Array(this.k2), this.aT4 = new Uint16Array(this.k2), this.aSq = new Uint16Array(this.k2), this.aT9 = new Uint8Array(this.k2), this.aTA = new Uint8Array(this.k2), this.ok = new Uint8Array(aC.eV), this.aSp =
		new Uint16Array(this.ox * aC.eV), this.dU = function() {
			this.aTn = 0, this.ol = 0, this.aTm = new Uint8Array(bQ.ej + bQ.ek), this.ok.fill(0)
		}, this.p0 = function(player) {
			var eY = this.ol,
				aTo = bK.iF(bM.fA[0]),
				aTp = this.ok[player],
				aTq = (player << 3) + aTp,
				hD = (this.a5D[eY] = aTq, this.aT6[eY] = aTo, this.m4[eY] = aTo, this.aT7[eY] = bK.iF(bM.fA[1]), this.aT8[eY] = 0, bM.f6[0]);
			hD < 60 ? (b8.fu.fv(player, 60 - hD), this.a5E[eY] = 60) : this.a5E[eY] = hD, this.aT4[eY] = bL.iI.p0(eY, bK.iH(aTo)), this.aSq[eY] = this.aTn, this.aT9[eY] = bM.fA[2], this.aTA[eY] = 0, this.aTn = this.aTn + 1 & 1023, this.aSp[aTq] = eY,
				this.ok[player] = aTp + 1, this.ol++, bL.aSd.aTl(player, bM.fA[1], bM.fA[2], this.aSq[eY])
		}, this.o4 = function() {
			var aSo = bM.fA[3];
			this.aT6[aSo] = this.m4[aSo], this.aT7[aSo] = bK.iF(bM.fA[1]), this.aT8[aSo] = 0, this.aT9[aSo] = bM.fA[2], bL.aSd.aTl(this.a5D[aSo] >> 3, bM.fA[1], bM.fA[2], this.aSq[aSo])
		}, this.ii = function() {
			bL.aSd.ii();
			var aA, g6 = aC.eI,
				dk = bL.h2.aFO(g6),
				r9 = (! function(r9) {
					var aA, aTv, aTw, aTx, aTy, aTo, aU2, aU3, eb, g7, aT6 = r9.aT6,
						aT7 = r9.aT7,
						m4 = r9.m4,
						a5E = r9.a5E,
						aTA = r9.aTA,
						aT8 = r9.aT8,
						aT4 = r9.aT4,
						r9 = r9.ol,
						aTZ = bQ.ej << 4;
					for (aA = r9 - 1; 0 <= aA; aA--) aTw = m4[aA], aTv = aT7[aA], aTw !== aTv && (aTo = aT6[aA], aU2 = aTv % aTZ - (aTy = aTo % aTZ), aU3 = ~~((aTv + .5) / aTZ) - (aTo = ~~((aTo + .5) / aTZ)), eb = ~~Math.sqrt(aU2 * aU2 + aU3 *
						aU3 + .5), g7 = 15e4 + 25e3 * bJ.log10(a5E[aA]), aTA[aA] && (g7 = bJ.dl(g7, 5)), 65535 <= (g7 = aT8[aA] + Math.max(~~((g7 + .5) / eb), 1)) ? m4[aA] = aTx = aTv : (aT8[aA] = g7, m4[aA] = aTx = aTy + bJ.dl(g7 * aU2,
						65536) + aTZ * (aTo + bJ.dl(g7 * aU3, 65536))), aT4[aA] = bL.iI.aU5(aT4[aA], aTw, aTx))
				}(this), ! function(r9) {
					if (bd.jl() % 2 == 1) {
						var aA, hM, kW, es, et, aU6, xl, aU7, gy, m5, m6, aTo, aU8, hc, aUA, vd, eY = r9.ol,
							m4 = r9.m4,
							a5D = r9.a5D,
							a5E = r9.a5E,
							aTA = r9.aTA,
							iI = bL.iI.iI,
							aUC = iI.length,
							aUD = bL.iI.aUD,
							aTZ = bQ.ej << 4,
							aUE = aC.hO,
							aR3 = be.eW,
							g7 = (eY - 1) * (bJ.dl(bd.jl(), 2) % 2);
						for (aA = 0; aA < eY; aA++)
							for (hM = Math.abs(aA - g7), aTo = m4[hM], kW = bK.iH(aTo), gy = a5D[hM] >> 3, m5 = aTo % aTZ, m6 = ~~((aTo + .5) / aTZ), aUA = a5E[hM], es = 0; es < 9; es++)
								if (!((aU6 = kW + aUD[es]) < 0 || aUC <= aU6))
									for (aU7 = iI[aU6], xl = aU7.length, et = 0; et < xl; et++) aU8 = aU7[et], vd = a5D[aU8] >> 3, gy == vd || aUE && aR3[gy] === aR3[vd] && aR3[gy] || (vd = m4[aU8], (hc = m5 - vd % aTZ) * hc + (hc = m6 - ~~((vd +
										.5) / aTZ)) * hc < 14400 && (vd = a5E[aU8], hc = vd <= aUA ? Math.max(1, bJ.dl(vd + bJ.dl(aUA - vd, 10), 10)) : Math.max(1, bJ.dl(aUA, 10)), a5E[aU8] = Math.max(vd - hc, 0), aTA[aU8] = 4))
					}
				}(this), ! function(r9) {
					if (bd.jl() % 5 == 3) {
						var aA, hD, a5E = r9.a5E,
							eY = r9.ol;
						for (aA = 0; aA < eY; aA++) hD = a5E[aA], a5E[aA] = Math.max(hD - Math.max(1, hD >> 7), 0)
					}
				}(this), this),
				a5E = r9.a5E,
				aTA = r9.aTA;
			for (aA = r9.ol - 1; 0 <= aA; aA--) aTA[aA] = aTA[aA] >> 1, 0 === a5E[aA] && bL.aFR.aSz(aA);
			bb.fy(g6, dk - bL.h2.aFO(g6), 15)
		}
}

function aSb() {
	this.aUF = 32, this.ef = 0, this.eh = 0, this.iJ = 0, this.aUG = 0, this.aUH = 4, this.iI = null, this.aUD = new Int16Array(9), this.dU = function() {
		this.iJ = 1 + bJ.dl(bQ.ej - 1, this.aUF), this.aUG = 1 + bJ.dl(bQ.ek - 1, this.aUF), this.iI = new Array(this.iJ * this.aUG), b8.pg.a1B(this.iI);
		var ef, eh, aUD = this.aUD,
			i = this.iJ;
		for (ef = -1; ef <= 1; ef++)
			for (eh = -1; eh <= 1; eh++) aUD[3 * (1 + eh) + 1 + ef] = eh * i + ef
	}, this.p0 = function(aUJ, aA) {
		return this.iI[aA].push(aUJ), this.iI[aA].length - 1
	}, this.aU5 = function(aUK, aTo, aTv) {
		var aUL, aUM, aTo = bK.iH(aTo),
			aTv = bK.iH(aTv);
		return aTo === aTv ? aUK : (aUL = this.iI[aTo].pop(), this.iI[aTo].length === aUK ? this.p0(aUL, aTv) : (aUM = this.iI[aTo][aUK], this.iI[aTo][aUK] = aUL, bL.x.aT4[aUL] = aUK, this.p0(aUM, aTv)))
	}
}

function aSg() {
	function a06(aTv, aUN) {
		if (! function(aTv, aSm) {
				var hb = bK.iG(aTv),
					aUR = Math.abs(bK.eg(aSm) - bK.eg(hb)),
					hb = Math.abs(bK.ei(aSm) - bK.ei(hb));
				return 0 !== Math.max(aUR, hb) && (function(aTo, aTv, aUR, aUS) {
					var aUU = bK.hw(aTo),
						aTo = bK.hz(aTo),
						aUW = bK.hw(aTv),
						aTv = bK.hz(aTv),
						aUW = aUW - aUU,
						aTv = aTv - aTo,
						aUa = Math.abs(aUW),
						aUb = Math.abs(aTv),
						aUW = 0 < aUW ? 1 : 3,
						aTv = 0 < aTv ? 2 : 0;
					aUb < aUa ? aUe(aUU, aTo, aUU + aUa, aTo + aUb, aUW, aTv, aUR) : aUe(aTo, aUU, aTo + aUb, aUU + aUa, aTv, aUW, aUS)
				}(aTv, bK.iF(aSm), aUR, hb), !0)
			}(aTv, aUN)) return !1;
		if (0 === bM.f3[0]) return !!ab.h1(aUN << 2);
		if (! function(aSm) {
				if (ab.h1(aSm << 2)) return 1;
				return function(aSm) {
					var aA, hL, aTm = bL.x.aTm,
						aUi = bK,
						eY = bM.f3[0],
						aUj = 4 * aSm;
					for (aA = eY - 1; 0 <= aA; aA--) {
						hL = aTm[aA];
						var aUk = aUj;
						if (aUj = aUi.iL(aUj, hL + 2 & 3), ab.h1(aUj)) return bM.f3[0] = aA, bM.fA[1] = aUj >> 2, bM.fA[2] = 1 + hL, bM.fA[4] = aUk, 1
					}
					return
				}(aSm)
			}(aUN)) return !1;
		if (bM.fA[2] && ab.ed(bM.fA[4])) return !1;
		var aA, aUN = bK.iG(aTv),
			vV = aAE,
			aTm = bL.x.aTm,
			eY = bM.f3[0] - 1,
			aUj = 4 * aUN,
			hZ = bK.hZ;
		for (aA = 0; aA < eY; aA++)
			if (aUj += hZ[aTm[aA]], 0 !== vV[aUj + 3] || 2 !== vV[aUj + 2]) return !!void 0;
		return !!1
	}

	function aUe(aUU, aUV, aUW, aUX, aUc, aUd, aUR) {
		for (var eh, aTm = bL.x.aTm, g7 = 0, aUf = 0, j = aUX - aUV, i = aUW - aUU, aUg = aUU % 16, aA = 1; aA <= aUR; aA++) aTm[g7++] = aUc, aTm[g7] = aUd, g7 += (eh = (j * (aUg + (aA << 4)) + .5) / i >> 4) - aUf, aUf = eh;
		bM.fF(bM.f3, g7)
	}
	this.kR = function(player, aUN) {
		var hL, hb, gx = bK.hj(player, aUN);
		return gx !== aUN && (hL = bK.ha(gx, aUN), hb = bK.iK(gx, hL), !(!ab.h1(hb << 2) && (hL = bK.hh(gx, aUN, hL), hb = bK.iK(gx, hL), !ab.h1(hb << 2)) || (bM.fA[0] = hb, bM.fA[1] = aUN, bM.fA[2] = 0, hb !== aUN && (!a06(bK.iF(hb), aUN) ||
			0 !== bM.fA[2] && bK.hp(player, bM.fA[1] + bK.hY[bM.fA[2] - 1] << 2)))))
	}, this.p2 = function(aUN) {
		var aTo = bL.x.m4[bM.fA[3]];
		return bM.fA[1] = aUN, bM.fA[2] = 0, a06(aTo, aUN)
	}
}

function aSc() {
	var xQ = 32,
		xP = new Array(2);

	function vK(et) {
		var ef, eh, eK, hx, hu, hQ = xQ,
			a1e = b8.pX.vK(hQ, hQ),
			hW = b8.pX.getContext(a1e, !0),
			hT = b8.pX.getImageData(hW, hQ, hQ),
			vV = hT.data,
			kW = (hQ >> 1) - .5,
			kX = Math.sqrt(kW * kW);
		for (vV.fill(255), eh = 0; eh < hQ; eh++)
			for (ef = 0; ef < hQ; ef++) hu = ef - kW, hx = eh - kW, eK = 4 * (eh * hQ + ef), hu = 714 * (kX - Math.sqrt(hu * hu + hx * hx)) / kX, vV[2 + eK] = et, vV[3 + eK] = 255 < hu ? 0 : hu;
		return hW.putImageData(hT, 0, 0), a1e
	}
	this.a47 = -1, this.dU = function() {
		this.a47 = -1, xP[0] || (xP[0] = vK(255), xP[1] = vK(0))
	}, this.aUm = function(hW, eC, ef, eh, dw, aA) {
		b8.fu.gl(aC.eI) && (hW.setTransform(eC *= 4 / 3 * .625, 0, 0, eC, ef - (dw *= 4 / 3), eh - dw), hW.drawImage(xP[+(bL.x.aSq[aA] === this.a47)], 0, 0))
	}
}

function dX() {
	this.aOg = [L(408), L(409), L(410), L(411), L(412), L(413), L(414), L(415), L(416), L(417), L(418), L(419), L(420), L(421), L(422)];
	var aUn = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", ""];
	this.a9u = new Array(aUn.length), this.dU = function() {
		var g = bh.kn.data[155].value.split(";"),
			kW = g.length;
		if (function() {
				for (var eY = aUn.length, aA = 0; aA < eY; aA++) bV.a9u[aA] = aUn[aA]
			}(), !(kW > aUn.length))
			for (var aA = 0; aA < kW; aA++) g[aA].length && (this.a9u[aA] = g[aA])
	}, this.aOi = function(dx, code) {
		for (var a9u = this.a9u, aUp = aUn, pE = (a9u[dx] = code, ""), eY = a9u.length, aUq = [], aA = 0; aA < eY; aA++) aUq.push(a9u[aA] === aUp[aA] ? "" : a9u[aA]);
		eY--;
		for (aA = 0; aA < eY; aA++) pE += aUq[aA] + ";";
		bh.qz.r0(155, pE += aUq[eY])
	}, this.aOf = function() {
		bh.qz.r0(155, ""), this.dU()
	}, this.et = function(code, dx) {
		return code === this.a9u[dx] || code === this.a9u[dx + 1]
	}
}

function dS() {
	var aUs = new Array(1),
		aUt = new Array(1),
		aUu = 20,
		e6 = 0,
		aUv = !1;

	function aUx() {
		aUu++, bn.play()
	}
	this.dU = function() {
		if (!window.document.documentMode) {
			for (var aA = 0; 0 <= aA; aA--) ! function(aA, src) {
				aUt[aA] = 0, aUs[aA] = document.createElement("audio"), aUs[aA].src = src, aUs[aA].setAttribute("preload", "auto"), aUs[aA].setAttribute("controls", "none"), aUs[aA].style.display = "none", aUs[aA].onpause = function() {
					aUt[aA] = 1
				}, aUs[aA].oncanplaythrough = function() {
					aUt[aA] = 0 === aUt[aA] ? 1 : aUt[aA]
				}, document.body.appendChild(aUs[aA])
			}(aA,
				"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
				);
			aUv = !0
		}
	}, this.t8 = function() {
		if (aUv) {
			aUv = !1;
			for (var aA = 0; 0 <= aA; aA--) aUs[aA].onpause = null, aUs[aA].oncanplaythrough = null, document.body.removeChild(aUs[aA]), aUs[aA] = null
		}
	}, this.play = function() {
		if (aUv) {
			var dk = performance.now();
			if (e6 + 66 < dk)
				for (var aA = 0; 0 <= aA; aA--)
					if (1 === aUt[aA]) return e6 = dk, aUt[aA] = 2, void aUs[aA].play();
			0 < aUu && (aUu--, setTimeout(aUx, 66))
		}
	}
}

function cU() {
	this.a6f = function() {
		var aV0;
		return !(ak.jp < 3 || af.gM[l4[0]] >= aC.jY >> 1) && (aC.hO ? (aV0 = ad.aGU(), !(2 * ad.aGV(bf.l1()) >= aV0)) : function() {
			var aV0 = ad.aGU();
			if (2 * af.ga[l4[0]] >= aV0) return !1;
			return !0
		}())
	}
}

function c5() {
	this.dU = function() {
		if (0 === aC.data.sResourcesType) {
			for (var aTp = aC.jo, ga = af.ga, aA = 0; aA < aTp; aA++) ga[aA] = 512;
			var aTq = aC.w1,
				k1 = aD.k1,
				hD = aD.hD;
			for (aA = aTp; aA < aTq; aA++) ga[aA] = k1[hD[aA]]
		} else(1 === aC.data.sResourcesType ? function() {
			for (var eY = aC.w1, ga = af.ga, sResourcesValue = aC.data.sResourcesValue, aA = 0; aA < eY; aA++) ga[aA] = sResourcesValue
		} : function() {
			for (var eY = aC.w1, ga = af.ga, sResourcesData = aC.data.sResourcesData, aA = 0; aA < eY; aA++) ga[aA] = sResourcesData[aA]
		})();
		bb.lZ[8] = af.ga[aC.eI]
	}
}

function dJ() {
	var aV5 = 501,
		aV7 = (this.aV6 = new Uint32Array(aV5), this.a2K = new Uint32Array(aV5), this.a9Z = new Uint16Array(aV5), this.aOo = 0, 1),
		aV8 = 0;

	function aVB(self) {
		self.max.fill(0)
	}

	function aVD(self, aA) {
		self.max[0] = Math.max(self.aV6[aA], self.max[0]), self.max[1] = Math.max(self.a2K[aA], self.max[1]), self.max[2] = Math.max(self.a9Z[aA], self.max[2])
	}
	this.max = [0, 0, 0], this.aV9 = 0, this.lZ = new Array(21), this.aVA = null, this.dV = function() {
		this.aVA = [L(423), L(424), L(425), L(426), L(427), L(428), L(429), L(430), L(269), L(270), L(431), L(432), L(433), L(434), "", L(435), L(436), L(437), L(229), L(438), L(439)]
	}, this.dU = function() {
		this.aOo = 0, aV7 = 1, this.aV9 = 0, aV8 = 0, aVB(this), this.lZ.fill(0)
	}, this.ov = function(player, i8) {
		b8.fu.a2F(player) && (this.lZ[0] += i8 + 1, this.lZ[1]++, this.lZ[12] += bM.f6[1])
	}, this.oL = function(player, o0) {
		__fx.donationsTracker.logDonation(player, o0, bM.f6[0]);
		player === aC.eI && (aM.oL(bM.f6[0], bM.f6[1], o0), this.lZ[12] += bM.f6[1], this.lZ[16] += bM.f6[0]), o0 === aC.eI && (aM.a5R(bM.f6[0], player), this.lZ[10] += bM.f6[0])
	}, this.oy = function(player) {
		b8.fu.a2F(player) && (this.lZ[2]++, this.lZ[12] += bM.f6[1])
	}, this.p9 = function(player) {
		b8.fu.a2F(player) && (this.lZ[19]++, this.lZ[12] += bM.f6[1])
	}, this.aTk = function(player) {
		b8.fu.a2F(player) && this.lZ[20]++
	}, this.fy = function(player, a2y, dx) {
		b8.fu.a2F(player) && (this.lZ[dx] += a2y)
	}, this.ii = function() {
		var self;
		this.aV9 || 0 < aV8-- || ((self = this).aV6[self.aOo] = af.gM[aC.eI], self.a2K[self.aOo] = af.ga[aC.eI], self.a9Z[self.aOo] = ad.a9a(aC.eI), aVD(self, self.aOo), self.aOo++, self.aOo === aV5 && function(self) {
			aVB(self), aVD(self, 0), self.aOo = 1 + bJ.dl(aV5, 2);
			for (var aA = 1; aA < self.aOo; aA++) self.aV6[aA] = self.aV6[2 * aA], self.a2K[aA] = self.a2K[2 * aA], self.a9Z[aA] = self.a9Z[2 * aA], aVD(self, aA);
			aV7 *= 2
		}(self), aV8 = aV7 - 1, bc.lQ(), 0 === af.ld[aC.eI] && (self.aV9 = bd.jl()))
	}
}

function dK() {
	this.i = 0, this.j = 0, this.rt = 0, this.ru = 0, this.aVF = 0, this.aVG = 0, this.a6s = 0, this.sb = 0;
	var aVI = this.aVH = 0;
	this.aVJ = 0, this.aVK = 0, this.aVL = 0, this.a6E = 0, this.dx = 0, this.a9C = null, this.hG = !1, this.aVM = -1, this.aVN = !1, this.aVO = [0, 0], this.dV = function() {
		this.a9C = [L(440), L(116, 0, "Balance"), L(115, 0, "Interest"), L(441)]
	}, this.dU = function() {
		this.hG = !1, this.aVM = -1, this.aVN = !1, this.resize()
	}, this.resize = function() {
		this.i = h.i < 1.369 * h.j ? h.i : 1.369 * h.j;
		var eb = z.a0.qv() && h.i < h.j ? 1 : z.a0.qv() ? .8 : h.i < h.j ? .65 : .59;
		this.i = Math.floor(eb * this.i), this.i -= z.a0.qv() && h.i < h.j ? 2 * ba.gap + 2 : 0, this.j = Math.floor(this.i / 1.369), this.a6E = Math.floor(this.j / 150), this.a6E = Math.max(this.a6E, 1.5), this.rt = Math.floor(1 + .02 * this.i),
			this.ru = Math.floor(1 + .04 * this.i), this.a6s = this.ru, aVI = Math.floor(.75 * this.a6s), this.sb = Math.floor(1 + .075 * this.i), this.aVJ = Math.floor(1 + .1125 * this.i), this.aVK = Math.floor(this.i * (z.a0.qv() ? .03 :
			.029)), this.aVK = Math.max(this.aVK, 4), this.aVL = Math.floor(.035 * this.i), this.aVL = Math.max(this.aVL, 4), this.aVH = this.j - 2 * this.a6s - this.sb - this.aVJ, this.hG && this.aVP()
	}, this.gm = function(ks, kt) {
		var w4, w3;
		return !!this.hG && (w3 = ks, w4 = kt, ks -= bJ.dl(h.i - this.i, 2), kt -= bJ.dl(h.j - this.j, 2), ks < 0 || kt < 0 || ks >= this.i || kt >= this.j || ks >= this.i - this.aVJ && kt < this.aVJ ? -1 !== aL.gm(w3, w4) || bA.gm(w3, w4) ||
			this.qo() : kt < this.aVJ || (kt < this.j - this.sb ? (this.aVN = !0, this.aVM = (ks - 2 * this.rt - this.aVF) / this.aVG, 3 !== this.dx && (bd.dc = !0)) : (w3 = (w3 = Math.floor(ks / (this.i / this.a9C.length))) < 0 ? 0 : w3 >=
				this.a9C.length ? this.a9C.length - 1 : w3) !== this.dx && (this.dx = w3, this.aVP(), bd.dc = !0)), !0)
	}, this.a0J = function(ks, kt) {
		return this.aVO[0] = ks, this.aVO[1] = kt, !(!this.hG || !this.aVN || (ks -= bJ.dl(h.i - this.i, 2), kt = this.aVM, this.aVM = (ks - 2 * this.rt - this.aVF) / this.aVG, (0 <= this.aVM && this.aVM <= 1 || 0 <= kt && kt <= 1) && (bd.dc = !
			0), 0))
	}, this.a0i = function() {
		this.aVN && (this.aVN = !1)
	}, this.a0u = function() {
		this.hG ? this.qo() : this.show()
	}, this.show = function() {
		bb.aOo < 2 || (this.hG = !0, this.aVP())
	}, this.qo = function() {
		this.hG = !1, this.aVM = -1, bd.dc = !0
	}, this.aVP = function() {
		this.dx < 2 ? this.aVF = aP.measureText(b8.zO.y5(bb.max[this.dx]), b8.pX.rM(0, this.aVK)) : 2 === this.dx && (this.aVF = aP.measureText(b8.zO.a2r(6, 2), b8.pX.rM(0, this.aVK))), this.aVG = this.i - 2 * this.rt - this.aVF - this.ru
	}, this.lQ = function() {
		this.hG && this.aVP()
	}, this.te = function() {
		this.hG && this.a79()
	}, this.a79 = function() {
		var ef = bJ.dl(h.i - this.i, 2),
			eh = bJ.dl(h.j - this.j, 2);
		tf.setTransform(1, 0, 0, 1, ef, eh), tf.fillStyle = b9.mc, tf.fillRect(0, this.aVJ, this.i, this.j - this.aVJ), this.aVQ(), this.aNe(), tf.strokeRect(0, 0, this.i, this.j), b8.pX.textAlign(tf, 2), tf.font = b8.pX.rM(0, this.aVK), 0 ===
			this.dx ? this.aVR(bb.aV6, ef, eh) : 1 === this.dx ? this.aVR(bb.a2K, ef, eh) : 2 === this.dx ? this.aVS(ef, eh) : 3 === this.dx && (this.aVT(ef, eh), this.aVU(ef, eh)), aL.a4X(Math.floor(ef + this.i - .725 * this.aVJ), Math.floor(
				eh + .275 * this.aVJ), Math.floor(.45 * this.aVJ)), tf.setTransform(1, 0, 0, 1, 0, 0)
	}, this.aVQ = function() {
		var aA, dk;
		for (tf.lineWidth = this.a6E, b8.pX.textBaseline(tf, 1), b8.pX.textAlign(tf, 1), tf.strokeStyle = b9.mf, tf.font = b8.pX.rM(1, this.aVL), dk = this.i / this.a9C.length, tf.fillStyle = b9.n1, tf.fillRect(this.dx * dk, this.j - this.sb, dk,
				this.sb), tf.fillStyle = b9.mf, tf.fillRect(0, this.j - this.sb - .5 * this.a6E, this.i, this.a6E), aA = 1; aA <= 3; aA++) tf.fillRect(aA * dk, this.j - this.sb, this.a6E, this.sb);
		for (aA = this.a9C.length - 1; 0 <= aA; aA--) tf.fillText(b8.x4.a1q(this.a9C[aA], 0, .9 * dk), (aA + .5) * dk, this.j - .46 * this.sb)
	}, this.aNe = function() {
		tf.fillStyle = b9.nR, tf.fillRect(0, 0, this.i, this.aVJ), tf.fillStyle = b9.mf, tf.fillRect(0, this.aVJ - .5 * this.a6E, this.i, this.a6E), tf.font = b8.pX.rM(1, .39 * this.aVJ), tf.fillText(b8.x4.a1q(L(442), 0, .8 * this.i), Math.floor(
			this.i / 2), Math.floor(.55 * this.aVJ))
	}, this.aVR = function(g, ef, eh) {
		var kW = bb.max[this.dx],
			a1D = (tf.setTransform(1, 0, 0, 1, ef + 2 * this.rt + this.aVF, eh + this.a6s + this.aVJ), tf.lineWidth = 2, this.aVH / Math.sqrt(kW));
		tf.beginPath(), tf.moveTo(this.aVG, this.aVH - a1D * Math.sqrt(g[bb.aOo - 1]));
		for (var aA = bb.aOo - 2; 0 <= aA; aA--) tf.lineTo(aA * this.aVG / (bb.aOo - 1), this.aVH - a1D * Math.sqrt(g[aA]));
		tf.stroke();
		ef = this.a4X(g, a1D, .5);
		ef < .95 && tf.fillText(b8.zO.y5(kW), -this.rt, 0), .05 < Math.abs(ef - .5) && tf.fillText(b8.zO.y5(Math.floor(kW / 4)), -this.rt, Math.floor(this.aVH / 2)), .05 < ef && tf.fillText("0", -this.rt, this.aVH)
	}, this.aVS = function(ef, eh) {
		tf.setTransform(1, 0, 0, 1, ef + 2 * this.rt + this.aVF, eh + this.a6s + this.aVJ), tf.lineWidth = 2;
		var a1D = this.aVH / Math.max(bb.max[this.dx], 1);
		tf.beginPath(), tf.moveTo(this.aVG, this.aVH - a1D * bb.a9Z[bb.aOo - 1]);
		for (var aA = bb.aOo - 2; 0 <= aA; aA--) tf.lineTo(aA * this.aVG / (bb.aOo - 1), this.aVH - a1D * bb.a9Z[aA]);
		tf.stroke();
		ef = this.a4X(bb.a9Z, a1D, 1), eh = bb.max[this.dx] / 100;
		ef < .95 && tf.fillText(b8.zO.a2r(eh, 2), -this.rt, 0), .05 < Math.abs(ef - .5) && tf.fillText(b8.zO.a2r(eh / 2, 2), -this.rt, Math.floor(this.aVH / 2)), .05 < ef && tf.fillText(b8.zO.a2r(0, 2), -this.rt, this.aVH)
	}, this.aVT = function(ef, eh) {
		tf.setTransform(1, 0, 0, 1, ef + .34 * this.i, eh + 2 * aVI + this.aVJ), b8.pX.textAlign(tf, 2);
		for (var a8x = this.j - 4 * aVI - this.sb - this.aVJ, g = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], aA = 9; 0 <= aA; aA--) tf.fillText(b8.x4.a1q(bb.aVA[g[aA]], 0, .31 * this.i), 0, aA * a8x / 9);
		var f0 = bb.lZ;
		for (tf.setTransform(1, 0, 0, 1, ef + .39 * this.i, eh + 2 * aVI + this.aVJ), b8.pX.textAlign(tf, 0), tf.fillText(b8.zO.a2r(100 * f0[0] / (1024 * Math.max(f0[1], 1)), 1), 0, 0), aA = 8; 1 <= aA; aA--) tf.fillText(f0[g[aA]].toString(), 0,
			aA * a8x / 9);
		tf.fillText(b8.zO.a2r(100 * (1 - af.gM[aC.eI] / f0[7]), 0), 0, a8x)
	}, this.aVU = function(ef, eh) {
		tf.setTransform(1, 0, 0, 1, ef + .79 * this.i, eh + 2 * aVI + this.aVJ), b8.pX.textAlign(tf, 2);
		var aA, a8x = this.j - 4 * aVI - this.sb - this.aVJ;
		for (tf.fillStyle = b9.mw, aA = 2; 0 <= aA; aA--) tf.fillText(b8.x4.a1q(bb.aVA[aA + 8], 0, .31 * this.i), 0, aA * a8x / 9);
		tf.fillText(b8.x4.a1q(bb.aVA[18], 0, .31 * this.i), 0, 3 * a8x / 9), tf.fillStyle = b9.mv, tf.fillText(b8.x4.a1q(bb.aVA[11], 0, .31 * this.i), 0, 4 * a8x / 9), tf.fillStyle = b9.nE, tf.fillText(b8.x4.a1q(bb.aVA[13], 0, .31 * this.i), 0,
				5 * a8x / 9), tf.fillText(b8.x4.a1q(bb.aVA[15], 0, .31 * this.i), 0, 6 * a8x / 9), tf.fillText(b8.x4.a1q(bb.aVA[16], 0, .31 * this.i), 0, 7 * a8x / 9), tf.fillText(b8.x4.a1q(bb.aVA[12], 0, .31 * this.i), 0, 8 * a8x / 9), tf
			.fillStyle = b9.nD, tf.fillText(b8.x4.a1q(bb.aVA[17], 0, .31 * this.i), 0, a8x), tf.fillStyle = b9.mw;
		var f0 = bb.lZ,
			aCf = f0[8] + f0[9] + f0[10] + f0[18],
			aCf = b8.zO.y5(aCf),
			aMT = tf.measureText(aCf).width,
			ef = (tf.setTransform(1, 0, 0, 1, ef + .83 * this.i + aMT, eh + 2 * aVI + this.aVJ), tf.fillText(b8.zO.y5(f0[8]), 0, 0), tf.fillText(b8.zO.y5(f0[9]), 0, a8x / 9), tf.fillText(b8.zO.y5(f0[10]), 0, 2 * a8x / 9), tf.fillText(b8.zO.y5(f0[
				18]), 0, 3 * a8x / 9), tf.fillStyle = b9.mv, tf.fillText(aCf, 0, 4 * a8x / 9), tf.fillStyle = b9.nE, tf.fillText(b8.zO.y5(f0[13]), 0, 5 * a8x / 9), tf.fillText(b8.zO.y5(f0[15]), 0, 6 * a8x / 9), tf.fillText(b8.zO.y5(f0[16]),
				0, 7 * a8x / 9), tf.fillText(b8.zO.y5(f0[12]), 0, 8 * a8x / 9), f0[12] + f0[13] + f0[15] + f0[16]);
		tf.fillStyle = b9.nD, tf.fillText(b8.zO.y5(ef), 0, a8x), tf.fillStyle = b9.mf
	}, this.a4X = function(g, a1D, a7k) {
		var aA, e, fG;
		return this.aVM < 0 || 1 < this.aVM ? .25 : (aA = this.aVM * (bb.aOo - 1), fG = g[e = Math.floor(aA)], fG += (aA - e) * (g[e < bb.aOo - 1 ? e + 1 : e] - fG), tf.strokeStyle = b9.mi, .04 < this.aVM && this.aVW(0, this.aVH - a1D * Math.pow(
				fG, a7k), aA * this.aVG / (bb.aOo - 1), this.aVH - a1D * Math.pow(fG, a7k)), .04 < fG / bb.max[this.dx] && this.aVW(aA * this.aVG / (bb.aOo - 1), this.aVH, aA * this.aVG / (bb.aOo - 1), this.aVH - a1D * Math.pow(fG, a7k)), tf
			.fillStyle = b9.nG, tf.beginPath(), tf.arc(aA * this.aVG / (bb.aOo - 1), this.aVH - a1D * Math.pow(fG, a7k), Math.max(2, .014 * this.j), 0, 2 * Math.PI), tf.fill(), g = this.aVM * bd.a9b, g = 0 === af.ld[aC.eI] ? Math.floor(g * bb
				.aV9) : Math.floor(g * bd.jl()), tf.fillStyle = b9.mf, tf.fillText(1 === a7k ? b8.zO.a2r(fG / 100, 2) : b8.zO.y5(Math.floor(fG)), -this.rt, this.aVH - a1D * Math.pow(fG, a7k)), b8.pX.textAlign(tf, 1), tf.fillText(aV.a9Q(g),
				aA * this.aVG / (bb.aOo - 1), this.aVH + this.aVK - (z.a0.qv() ? 2 : 0) - this.a6E), b8.pX.textAlign(tf, 2), a1D * Math.pow(fG, a7k) / this.aVH)
	}, this.aVW = function(m5, m6, mI, mJ) {
		tf.beginPath(), tf.moveTo(m5, m6), tf.lineTo(mI, mJ), tf.stroke()
	}
}

function bt() {
	this.aVX = "https://", this.aVY = this.aVX + "territorial.io/", this.aOp = this.aVY + "changelog", this.aOt = this.aVY + "terms", this.aVZ = this.aVY + "cookie_policy", this.aOG = this.aVY + "privacy", this.aOs = this.aVY + "tutorial", this.aOr =
		this.aVY + "players", this.aOq = this.aVY + "clans", this.zZ = this.aVY + "clan-results", this.aAt = this.aVX + "play.google.com/store/apps/details?id=territorial.io", this.zs = this.aVX + "apps.apple.com/app/id1581110913", this.aVa = this
		.aVX + "www.youtube.com/watch?v=toZTQ8aRdFc", this.aAu = this.aVX + "discord.gg/pthqvpTXmh", this.aAv = this.aVX + "www.instagram.com/davidtschacher/", this.xf =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function d2() {
	this.x = new aVb, this.x1 = new aVc, this.dU = function() {
		this.x.dU()
	}, this.ii = function() {
		0 !== this.x.a5a && this.x.a5a--
	}
}

function aVc() {
	this.te = function() {
		if (0 !== bN.x.a5a && (tf.globalAlpha = Math.min(bN.x.a5a / 580, 1), tf.drawImage(bN.x.aVf, 1 + aR.wz(), 1 + aR.x0()), tf.globalAlpha = 1, aC.gu)) {
			for (var m5 = i9 / iA, m6 = iB / iA, mI = (h.i + i9) / iA, mJ = (h.j + iB) / iA, g7 = bN.x.aVg * iA, aVh = bN.x.aVh, aA = aC.jo - 1; 0 <= aA; aA--) ! function(aA, g7, m5, m6, mI, mJ, aVh) {
				var highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aA];
				if (highlight) g7 *= 2;
				0 === af.ld[aA] || 0 === af.gM[aA] || (mI = h.i * ((af.iN[aA] + af.iO[aA] + 1) / 2 - m5) / (mI - m5) - .5 * g7, m5 = h.j * ((af.iP[aA] + af.iQ[aA] + 1) / 2 - m6) / (mJ - m6) - .5 * g7, mI > h.i) || m5 > h.j || mI < -g7 || m5 <
					-g7 || (tf.setTransform(highlight ? iA * 2 : iA, 0, 0, highlight ? iA * 2 : iA, mI, m5), tf.drawImage(aVh[aC.hO ? be.eW[aA] : 1], 0, 0))
			}(aA, g7, m5, m6, mI, mJ, aVh);
			tf.setTransform(iA, 0, 0, iA, 0, 0)
		}
	}
}

function aVb() {
	this.aVg = 28, this.a5a = 0, this.aVf = null;
	var aVj = this.aVh = null;

	function aVm(hQ, aVn) {
		var ef, eh, eK, hu, a1e = b8.pX.vK(hQ, hQ),
			hW = b8.pX.getContext(a1e, !0),
			hT = b8.pX.getImageData(hW, hQ, hQ),
			vV = hT.data,
			kW = (hQ >> 1) - .5,
			aVo = .5 + kW;
		for (aVo *= aVo, eh = 0; eh < hQ; eh++)
			for (ef = 0; ef < hQ; ef++) hu = (hu = ef - kW) * hu + (hu = eh - kW) * hu, vV[eK = 4 * (eh * hQ + ef)] = aVn[0], vV[1 + eK] = aVn[1], vV[2 + eK] = aVn[2], vV[3 + eK] = (aVo - hu) * aVn[3] / aVo;
		return hW.putImageData(hT, 0, 0), a1e
	}

	function aUm(aA, hW, a1e, hQ) {
		var ef, y, highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[aA];
		if (highlight) hQ *= 2;
		0 !== af.ld[aA] && 0 !== af.gM[aA] && (ef = af.iN[aA] + af.iO[aA] + 1 - hQ - 2 >> 1, y = af.iP[aA] + af.iQ[aA] + 1 - hQ - 2 >> 1,
			highlight ? hW.drawImage(a1e[aC.hO ? be.eW[aA] : aA < aC.jo ? 1 : 0], ef, y, hQ, hQ) :
			hW.drawImage(a1e[aC.hO ? be.eW[aA] : aA < aC.jo ? 1 : 0], ef, y))
	}
	this.dU = function() {
		var r9;
		this.a5a = 700,
			function(r9) {
				var hQ = r9.aVg;
				if (r9.aVh = [], aVj = [], aC.hO)
					for (var aA = 0; aA <= aC.w8; aA++) r9.aVh.push(aVm(hQ, be.aTd[be.kA[aA]])), aVj.push(aVm(hQ >> 1, be.aTd[be.kA[aA]]));
				else r9.aVh.push(aVm(hQ, be.aTd[7])), r9.aVh.push(aVm(hQ, be.aTd[4])), aVj.push(aVm(hQ >> 1, be.aTd[7]))
			}(this),
			function(r9, aVp) {
				var aA, aVf = r9.aVf,
					hW = b8.pX.getContext(aVf, !0),
					eY = aC.eV,
					hQ = r9.aVg >> 1;
				hW.imageSmoothingEnabled = !1, hW.setTransform(1, 0, 0, 1, 0, 0), aVp && hW.clearRect(0, 0, aVf.width, aVf.height);
				for (aA = aC.jo; aA < eY; aA++) aUm(aA, hW, aVj, hQ)
			}(this, null !== (r9 = this).aVf && r9.aVf.width === bQ.ej - 2 && r9.aVf.height === bQ.ek - 2 || (r9.aVf = b8.pX.vK(bQ.ej - 2, bQ.ek - 2), !1)), aC.gu || this.a39()
	}, this.aTc = aVm, this.a39 = function() {
		for (var eY = aC.jo, hQ = this.aVg, aVh = this.aVh, hW = b8.pX.getContext(this.aVf, !0), aA = 0; aA < eY; aA++) aUm(aA, hW, aVh, hQ)
	}
}

function d3() {
	function aVr() {
		8 === aC.k5 && 1 === aC.yn && bP.yQ.ym()
	}

	function aVq(player) {
		aC.gu ? (aj.aFI(player), ak.aIF(), aC.k7 && aC.op.ii()) : b1.aBA(player)
	}
	this.oF = function(player) {
		aM.yz(player, player === aC.eI ? 21 : 22), aVq(player), aVr()
	}, this.om = function(player) {
		1 === aC.yn && 0 !== af.ld[player] && 2 !== af.a2B[player] && aVq(player), aC.yq--, aC.yp--, aM.yz(player, 4), b8.fu.gk(2) && aV.lP(!0), aVr()
	}
}

function dD() {
	this.aRE = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.a8v = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", b9.mf, "rgb(170,170,170)"
	], this.aVs = [b9.mf, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", b9.mf, b9.mW], this.aVt = [b9.mW, b9.mf, b9.mf, b9.mf, b9.mW, b9.mW, b9.mW, b9.mW, b9.mf];
	var aVu = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"],
		aVv = (this.aHj = ["rgba(" + aVu[0] + ",", "rgba(" + aVu[1] + ",", "rgba(" + aVu[2] + ",", "rgba(" + aVu[3] + ",", "rgba(" + aVu[4] + ",", "rgba(" + aVu[5] + ",", "rgba(" + aVu[6] + ",", "rgba(" + aVu[7] + ",", "rgba(" + aVu[8] + ",",
			"rgba(" + aVu[9] + ","
		], this.aHk = ["rgb(" + aVu[0] + ")", "rgb(" + aVu[1] + ")", "rgb(" + aVu[2] + ")", "rgb(" + aVu[3] + ")", "rgb(" + aVu[4] + ")", "rgb(" + aVu[5] + ")", "rgb(" + aVu[6] + ")", "rgb(" + aVu[7] + ")", "rgb(" + aVu[8] + ")", "rgb(" + aVu[
			9] + ")"
		], this.z9 = null, this.aTd = [
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
	this.kA = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.eW = new Uint8Array(aC.eV), this.wE = new Uint16Array(aC.eV), this.wF = new Uint16Array(this.kA.length + 1), this.wG = new Uint16Array(this.kA.length), this.dV = function() {
		this.z9 = [L(443), L(444), L(445), L(446), L(447), L(448), L(449), L(450), L(451)]
	}, this.dU = function() {
		if (this.eW.fill(0), this.aVw(), aC.hO) {
			9 === aC.k5 ? this.aVx() : aC.k7 ? function() {
				var colorsData = aC.data.colorsData;
				if (!aC.data.selectableColor)
					for (var aA = aC.jo - 1; 0 <= aA; aA--) colorsData[aA] = aw.j6(262144);
				var aW6 = 0,
					eo = 768,
					aQj = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
					teamPlayerCount = aC.data.teamPlayerCount;
				for (aA = 0; aA < 9; aA++)
					if (teamPlayerCount[aA]) {
						for (var eb = 0, es = 0; es < 3; es++) eb += Math.abs(aVv[aA][es] - aQj[es]);
						eb < eo && (aW6 = aA, eo = eb)
					} var aW7 = new Uint16Array(9);
				for (aA = 0; aA < 9; aA++) aW7[aA] = teamPlayerCount[aA];
				var kA = be.kA,
					aW8 = new Uint8Array(9),
					g1 = (kA[0] = 0, 1);
				for (aA = 1; aA < 9; aA++) aW7[aA] && (aW8[aA] = g1, kA[g1++] = aA);
				var j5 = aC.jo,
					eW = be.eW;
				aW7[aW6] ? (aW7[aW6]--, eW[0] = aW8[aW6]) : j5 = 0;
				var et = 0;
				for (aA = j5; aA < aC.w1; aA++) {
					var hM = kA[et];
					if (aW7[hM]) aW7[hM]--, eW[aA] = aW8[hM];
					else if (aA--, 9 <= ++et) return console.log("error 325")
				}
			}() : this.ii();
			for (var eY = aC.eV, wE = be.wE, wF = be.wF, wG = be.wG, eW = be.eW, kA = be.kA, w7 = kA.length, kn = new Array(w7), aA = 0; aA < w7; aA++) kn[aA] = [];
			for (aA = 0; aA < eY; aA++) kn[kA[eW[aA]]].push(aA);
			for (aA = 1; aA <= w7; aA++) wF[aA] = wF[aA - 1] + kn[aA - 1].length;
			for (aA = 0; aA < w7; aA++)
				for (var g1 = kn[aA].length, kW = wF[aA], hM = 0; hM < g1; hM++) wE[hM + kW] = kn[aA][hM];
			var jo = aC.jo;
			for (aA = 0; aA < w7; aA++)
				for (g1 = kn[aA].length, kW = wF[aA], hM = 0; hM < g1; hM++)
					if (wE[hM + kW] >= jo) {
						wG[aA] = hM;
						break
					}
		}
	}, this.aVw = function() {
		for (var aA = this.kA.length - 1; 0 <= aA; aA--) this.kA[aA] = aA
	}, this.aVx = function() {
		for (var aA = aC.data.teamPlayerCount[7] - 1; 0 <= aA; aA--) this.eW[aA] = 1;
		for (aA = aC.data.teamPlayerCount[7]; aA < aC.eV; aA++) this.eW[aA] = 2;
		this.kA[1] = 7, this.kA[2] = 8
	}, this.ii = function() {
		var he = new Uint8Array(aC.jo),
			hf = new Uint8Array(aC.jo),
			aW0 = new Uint16Array(8),
			aW1 = new Uint16Array(this.kA.length);
		this.aW2(he, hf, aW0, 1), this.aEv(aW0), this.aW3(aW1, he, hf), this.aW4(he, hf, aW1), this.aW5()
	}, this.aW2 = function(he, hf, aW7, aW9) {
		for (var es, e, aWA, eY = this.kA.length - aW9, g = new Uint16Array(eY), colorsData = aC.data.colorsData, aA = aC.jo - 1; 0 <= aA; aA--) {
			for (es = eY; aW9 <= es; es--) g[es - 1] = Math.abs(4 * (colorsData[aA] >> 12) - aVv[es][0]) + Math.abs(4 * (colorsData[aA] >> 6 & 63) - aVv[es][1]) + Math.abs(4 * (63 & colorsData[aA]) - aVv[es][2]);
			for (aWA = 768, es = eY - 1; 0 <= es; es--) g[e = (es + aA) % eY] < aWA && (aWA = g[e], he[aA] = e);
			for (aW7[he[aA]] += 4, aWA = 768, es = eY - 1; 0 <= es; es--) g[e = (es + aA) % eY] < aWA && e !== he[aA] && (aWA = g[e], hf[aA] = e);
			aW7[hf[aA]]++
		}
	}, this.aEv = function(aW7) {
		for (var es, kY, eY = this.kA.length - 1, aA = eY; 0 <= aA; aA--) this.kA[aA] = aA;
		for (aA = eY - 1; 0 <= aA; aA--) aW7[aA]++;
		for (aA = 1; aA <= eY; aA++) {
			for (kY = 0, es = 1; es < eY; es++) aW7[es] > aW7[kY] && (kY = es);
			aW7[kY] = 0, this.kA[aA] = kY + 1
		}
	}, this.aW3 = function(aW1, he, hf) {
		var es, zS, et, eb, e, mH, sB, aWB = this.kA.length - 1,
			q1 = new Uint16Array(aWB),
			aWC = [],
			aWD = 0,
			zR = [],
			aWE = [];
		loop: for (var aA = 0; aA < aC.jo; aA++)
			if (null !== (zS = b8.zO.zT(af.zQ[aA]))) {
				for (es = zR.length - 1; 0 <= es; es--)
					if (zS === zR[es]) {
						aWE[es].push(aA), aWD = Math.max(aWD, aWE[es].length);
						continue loop
					} zR.push(zS), aWC.push(!1), aWE.push([aA]), aWD = Math.max(aWD, 1)
			}
		for (; 2 < aC.w8 && aWD > bJ.dl(aC.jo, aC.w8);) aC.w8--, aC.k5--;
		for (es = zR.length - 1; 0 <= es; es--) {
			for (eb = -1, et = zR.length - 1; 0 <= et; et--) !aWC[et] && (-1 === eb || aWE[et].length > aWE[eb].length) && (eb = et);
			for (et = aWB - 1; 0 <= et; et--) q1[et] = 1;
			for (et = aWE[eb].length - 1; 0 <= et; et--) q1[he[aWE[eb][et]]] += 3, q1[hf[aWE[eb][et]]]++;
			for (aA = aWB - 1; 0 <= aA; aA--) {
				for (e = eb % aWB, et = aWB - 1; 0 <= et; et--) q1[et] > q1[e] && (e = et);
				for (mH = -1, et = aC.w8; 0 < et; et--)
					if (this.kA[et] === e + 1) {
						mH = et;
						break
					} if (q1[e] = 0, -1 !== mH) {
					for (sB = 0, et = aC.w8; 0 < et; et--) aW1[mH] > aW1[et] && sB++;
					if (sB !== aC.w8 - 1) {
						for (et = aWE[eb].length - 1; 0 <= et; et--) aW1[mH]++, this.eW[aWE[eb][et]] = mH;
						break
					}
				}
			}
			aWC[eb] = !0
		}
	}, this.aW4 = function(he, hf, aW1) {
		for (var aA, ht, eY = this.kA.length - 1, border = bJ.dl(aC.jo, aC.w8), aWF = (0 < aC.jo % aC.w8 && border++, new Uint8Array(1 + eY)), es = eY; 1 <= es; es--) aWF[this.kA[es]] = es;
		for (aA = 0; aA < aC.jo; aA++) ht = aWF[he[aA] + 1], 0 === this.eW[aA] && ht <= aC.w8 && aW1[ht] < border && (aW1[ht]++, this.eW[aA] = ht);
		for (aA = 0; aA < aC.jo; aA++) ht = aWF[hf[aA] + 1], 0 === this.eW[aA] && ht <= aC.w8 && aW1[ht] < border && (aW1[ht]++, this.eW[aA] = ht);
		for (es = aC.w8; 1 <= es; es--)
			for (aA = aC.jo - 1; 0 <= aA && !(aW1[es] >= border); aA--) 0 === this.eW[aA] && (aW1[es]++, this.eW[aA] = es)
	}, this.aW5 = function() {
		for (var aA = aC.jo; aA < aC.eV; aA++) this.eW[aA] = 1 + aA % aC.w8
	}
}

function gN() {
	for (var ef, eh, aA = fT - 1; 0 <= aA; aA--) ef = bJ.dl(fV[aA], 4) % bQ.ej, eh = bJ.dl(fV[aA], 4 * bQ.ej), af.iN[fO] = Math.min(ef, af.iN[fO]), af.iP[fO] = Math.min(eh, af.iP[fO]), af.iO[fO] = Math.max(ef, af.iO[fO]), af.iQ[fO] = Math.max(eh, af
		.iQ[fO])
}

function fi() {
	var eb, g6, aA, eY = af.g0[fO].length,
		ea = ab.ea;
	loop: for (aA = eY - 1; 0 <= aA; aA--) {
		for (eb = 3; 0 <= eb; eb--)
			if (g6 = af.g0[fO][aA] + ea[eb], ab.eP(g6) || ab.g8(g6) && ab.eQ(g6) !== fO) {
				ab.j2(af.g0[fO][aA], fO);
				continue loop
			} af.g0[fO][aA] = af.g0[fO][eY - 1], af.g0[fO].pop(), eY--
	}
}

function fj() {
	var player = fO,
		gE = af.gE,
		gF = af.gF,
		ey = af.ey,
		eY = gE[player].length,
		ea = ab.ea;
	loop: for (var aA = eY - 1; 0 <= aA; aA--) {
		for (var aWG = !1, aWH = !1, eb = 3; 0 <= eb; eb--) {
			var g6 = gE[player][aA] + ea[eb];
			if (ab.aF5(g6, player)) continue loop;
			aWG = aWG || ab.h1(g6), aWH = aWH || ab.aF4(g6)
		}
		aWG ? gF[player].push(gE[player][aA]) : aWH ? ey[player].push(gE[player][aA]) : ab.wa(gE[player][aA], player), gE[player][aA] = gE[player][eY - 1], gE[player].pop(), eY--
	}
}

function gC() {
	af.gM[fS] -= fT
}

function gD(border) {
	for (var eY = border.length, aA = eY - 1; 0 <= aA; aA--) ab.wu(fS, border[aA]) || (border[aA] = border[eY - 1], border.pop(), eY--)
}

function gG(border) {
	for (var eY = border.length, aA = eY - 1; 0 <= aA; aA--) !ab.wu(fS, border[aA]) && ab.eT(border[aA]) && (border[aA] = border[eY - 1], border.pop(), eY--)
}

function gH(border) {
	for (var eb, g6, eY = border.length, ea = ab.ea, aA = eY - 1; 0 <= aA; aA--)
		for (eb = 3; 0 <= eb; eb--)
			if (g6 = border[aA] + ea[eb], ab.aF5(g6, fS)) {
				af.gE[fS].push(border[aA]), border[aA] = border[eY - 1], border.pop(), eY--;
				break
			}
}

function gI() {
	for (var eb, g6, ea = ab.ea, aA = fT - 1; 0 <= aA; aA--)
		for (eb = 3; 0 <= eb; eb--) g6 = fV[aA] + ea[eb], ab.aF6(fS, g6) && ab.aF7(g6) && (af.gE[fS].push(g6), ab.g3(g6, fS))
}

function gJ() {
	var ef, eh;
	loop: for (; af.iP[fS] < af.iQ[fS];) {
		for (ef = af.iO[fS]; ef >= af.iN[fS]; ef--)
			if (ab.wu(fS, 4 * (af.iP[fS] * bQ.ej + ef))) break loop;
		af.iP[fS]++
	}
	loop: for (; af.iP[fS] < af.iQ[fS];) {
		for (ef = af.iO[fS]; ef >= af.iN[fS]; ef--)
			if (ab.wu(fS, 4 * (af.iQ[fS] * bQ.ej + ef))) break loop;
		af.iQ[fS]--
	}
	loop: for (; af.iN[fS] < af.iO[fS];) {
		for (eh = af.iQ[fS]; eh >= af.iP[fS]; eh--)
			if (ab.wu(fS, 4 * (eh * bQ.ej + af.iN[fS]))) break loop;
		af.iN[fS]++
	}
	loop: for (; af.iN[fS] < af.iO[fS];) {
		for (eh = af.iQ[fS]; eh >= af.iP[fS]; eh--)
			if (ab.wu(fS, 4 * (eh * bQ.ej + af.iO[fS]))) break loop;
		af.iO[fS]--
	}
}

function eR(player, iz) {
	return 0 === be.eW[player] || be.eW[player] !== be.eW[iz]
}

function h7(player, iz) {
	for (var e, aWI = ac.fe(player), aA = 0; aA < aWI; aA++)
		if (0 === ac.ff(player, aA))
			if ((e = ac.fk(player, aA)) === aC.eV) {
				if (iz === aC.eV) return !1;
				if (h5(iz)) return !0
			} else if (b8.fu.ka(e))
		if (iz === aC.eV) {
			if (h5(e)) return !0
		} else if (h9(iz, e)) return !0;
	return !1
}

function h5(player) {
	for (var aA, g7, eY = af.gE[player].length, ea = ab.ea, eb = 3; 0 <= eb; eb--)
		for (g7 = ea[eb], aA = 0; aA < eY; aA++)
			if (ab.eP(af.gE[player][aA] + g7)) return !0;
	return !1
}

function aFE(player) {
	for (var aA, g7, eY = af.gE[player].length, ea = ab.ea, eb = 3; 0 <= eb; eb--)
		for (g7 = ea[eb], aA = 0; aA < eY; aA++)
			if (ab.j1(af.gE[player][aA]) && ab.eP(af.gE[player][aA] + g7)) return !0;
	return !1
}

function h9(a2G, a2H) {
	for (var aA, dk, g7, g6, aTp = af.gE[a2G].length, aTq = af.gE[a2H].length, ea = (aTq < aTp && (dk = a2G, a2G = a2H, a2H = dk, dk = aTp, aTp = aTq, 0), ab.ea), eb = 3; 0 <= eb; eb--)
		for (g7 = ea[eb], aA = 0; aA < aTp; aA++)
			if (g6 = af.gE[a2G][aA] + g7, ab.g8(g6) && ab.eQ(g6) === a2H) return !0;
	return !1
}

function aFF(a2G, a2H) {
	for (var aA, g7, g6, aTp = af.gE[a2G].length, ea = ab.ea, eb = 3; 0 <= eb; eb--)
		for (g7 = ea[eb], aA = 0; aA < aTp; aA++)
			if (ab.j1(af.gE[a2G][aA]) && (g6 = af.gE[a2G][aA] + g7, ab.g8(g6)) && ab.eQ(g6) === a2H) return !0;
	return !1
}

function dP() {
	this.oz = new aWJ
}

function aWJ() {
	this.h4 = function(player) {
		b8.fu.a2C(player) && aM.zB(80, L(452), 637, 0, b9.nU, b9.mc, -1, !1)
	}, this.a49 = function() {
		aM.zB(80, L(453), 637, 0, b9.nU, b9.mc, -1, !1)
	}, this.o4 = function(player) {
		b8.fu.a2C(player) && aM.zB(80, L(454), 637, 0, b9.nU, b9.mc, -1, !1)
	}
}

function aWK() {
	this.aWL = 0, this.ii = function() {
		aN.ii(), aY.ii(), h.ii(), ay.x.ii(), av.aER(), bd.dc && (bd.dc = !1, aZ.te())
	}
}

function aWM() {
	this.e7 = bd.e7, this.dx = 0, this.aWL = 0, this.aEO = 0, this.aWN = null, this.aWO = 7, this.a5b = 0, this.dU = function() {
		this.aEO = 0, this.aWN = [], this.dx = 0, this.aWL = 0
	}, this.aQC = function(aB) {
		if (aC.gu) this.a9c(aB);
		else if (this.aWN.push(aB), 2 === aC.yn) {
			for (var aA = 0; aA < this.aWN.length; aA++) b6.nt.ii(this.aWN[aA]);
			this.aWN = []
		}
	}, this.a9c = function(aB) {
		2 !== aC.yn && (b6.nt.ii(aB), b7.ii(), aV.a9c(this.aEO), this.aEO === aC.a3F ? (aC.op.ii(), this.aEO = 0, this.dx = 0, this.aWL = 0, this.e7 = bd.e7) : (this.aEO++, ae.a38(), ae.lP(!0), bZ.aAC()))
	}, this.ii = function() {
		h.ii(), aC.gu ? (bd.dc = aV.a9c(-1) || bd.dc, lR()) : (0 !== this.dx || bd.e7 >= this.e7 && (this.e7 += bd.a9b * Math.floor(1 + (bd.e7 - this.e7) / bd.a9b), 2 === aC.yn ? lG() : this.aWP(), this.dx++, 27 < bd.e7 - this.a5b)) && this
		.aWQ(), lM(), bd.dc && (bd.dc = !1, wx()), this.a5b = bd.e7
	}, this.aWQ = function() {
		bd.dc = !0, lO(), this.dx = 0
	}, this.aWP = function() {
		var uM, aA;
		if (this.aWL !== 7 * this.aEO) lI(), bZ.aAC();
		else {
			uM = !1;
			loop: for (; this.aWR() && (uM = !0, lI(), 2 !== aC.yn) && 0 < this.aWN.length;)
				for (aA = this.aWO - 2; 0 <= aA; aA--)
					if (lI(), 2 === aC.yn) break loop;
			uM ? bZ.aAC() : (lG(), bZ.a3B())
		}
	}, this.aWR = function() {
		return 0 < this.aWN.length && (this.aEO++, b6.nt.ii(this.aWN[0]), this.aWN.shift(), !0)
	}
}

function aWS() {
	var aWT, aWU, aWV, aEO, aWW, dx = 0,
		e7 = bd.e7;

	function aWZ() {
		! function() {
			if (!aC.gu) return;
			if (aC.k7) return;
			if (2 !== aC.yn)
				if (aWW % 7 != 0) aWW++;
				else if (aEO === aC.a3F) {
				if (!aWc()) return;
				aV.a9c(aEO), aC.op.ii()
			} else {
				if (!aWc()) return;
				aWW++, aEO++, ae.a38(), ae.lP(!0)
			}
			return 1
		}() && aWc() && lI()
	}

	function aWa() {
		dx = 0, (aC.gu ? (bd.dc = aV.a9c(aEO - (aWW % 7 == 0 ? 0 : 1) + aWW % 7 / 7) || bd.dc, lR) : aL.gj || !bA.a3c ? lR : (bd.dc = !0, lO))()
	}

	function aWc() {
		var aA, eY, aWd = b7.on.aRO,
			fG = b7.on.aRP,
			fI = b7.on.aRQ,
			fK = b7.on.aRR,
			aWe = b7.on.aRS,
			aWf = b7.on.aRT;
		if (!(aWT >= aWf.length)) {
			if (aWf = aWf[aWT], aWe[aWT]) {
				for (eY = aWU + aWf, aA = aWU; aA < eY; aA++) b6.nt.oZ(aWd[aA], fG[aA], fI[aA], fK[aA]);
				aWU += aWf, aWT++
			} else ++aWV >= aWf && (aWT++, aWV = 0);
			return 1
		}
		aM.a04("Replay file smaller than expected."), bA.a0v(!1), aC.yn = 2
	}
	this.aWL = 0, this.dU = function() {
		aWW = aEO = aWV = aWU = aWT = 0
	}, this.ii = function() {
		var aUC;
		h.ii(), bA.a74() < 1.7 ? 0 === dx ? bd.e7 >= e7 && (aUC = bd.a9b / bA.a74(), e7 += aUC * Math.floor(1 + (bd.e7 - e7) / aUC), 2 === aC.yn || aL.gj || !bA.a3c ? lG() : (aWZ(), bZ.aAC()), dx++) : aWa() : function() {
			var aUC;
			if (bd.e7 >= e7)
				if (2 === aC.yn || aL.gj || !bA.a3c) lG(), e7 = bd.e7;
				else {
					for (aUC = bd.a9b / bA.a74(), 16 < (bd.e7 - e7) / aUC && (e7 = bd.e7 - 16 * aUC); bd.e7 >= e7 && 2 !== aC.yn;) e7 += aUC, aWZ();
					bZ.aAC()
				} aWa()
		}(), lM(), bd.dc && (bd.dc = !1, wx())
	}, this.yx = function() {
		b7.on.aRT.length - aWT <= 2 || aM.a04("Replay file larger than expected.")
	}
}

function aWg() {
	var dx = 0,
		e7 = bd.e7;
	this.aWL = 0, this.ii = function() {
		h.ii(), aC.gu ? lR() : 0 === dx ? bd.e7 >= e7 && (e7 += bd.a9b * Math.floor(1 + (bd.e7 - e7) / bd.a9b), 2 === aC.yn || aL.gj ? lG() : (lI(), bZ.aAC()), dx++) : ((aL.gj ? lR : (bd.dc = !0, lO))(), dx = 0), lM(), bd.dc && (bd.dc = !1, wx())
	}
}

function dL() {
	this.yw = null, this.dc = !1, this.e7 = 0, this.a9b = 56;
	var aWh = 0;

	function aWi() {
		bd.e7 = aWh = performance.now(), bd.yw.ii(), window.requestAnimationFrame(aWi)
	}
	this.dU = function() {
		this.a3Z(), window.requestAnimationFrame(aWi), this.e7 = performance.now()
	}, this.a3Q = function() {
		aC.gi ? (this.yw = new aWS, this.yw.dU()) : aC.k7 ? this.yw = new aWg : (this.yw = new aWM, this.yw.dU())
	}, this.a3Z = function() {
		this.yw = new aWK, this.dc = !0
	}, this.ii = function() {
		this.yw.aWL++
	}, this.jl = function() {
		return this.yw.aWL
	}, this.aPo = function() {
		var dk = performance.now();
		dk < aWh + 1e3 || (this.e7 = dk, this.yw.ii())
	}
}

function cn() {
	var aWj = 0,
		aWk = !0;

	function aWl(id) {
		id = [L(455), L(456), L(457), L(458)][id];
		aM.a5I(id)
	}
	this.ii = function() {
		var dk, a5d;
		bd.e7 < aWj || (aWj = bd.e7 + 5e3, aC.gi) || aC.k7 || b8.fu.gl(aC.eI) || (dk = new Date, a5d = dk.getUTCSeconds(), aWk ? a5d < 50 && (aWk = !1) : a5d < 50 || (aWk = !0, (a5d = (dk.getUTCMinutes() + 1) % 60) % 5 == 0 && (0 == a5d || 20 ==
			a5d || 40 == a5d ? aC.k5 < 7 && aWl(0) : 10 == a5d || 30 == a5d || 50 == a5d ? 7 !== aC.k5 && 10 !== aC.k5 || aWl(1) : 5 == a5d || 25 == a5d || 45 == a5d ? 8 === aC.k5 && aWl(2) : 35 == a5d && 9 === aC.k5 && aWl(3))))
	}
}

function ch() {
	var m5, m6, mI, mJ, aWm = 0,
		aWn = 0;

	function aWp() {
		return Math.pow(Math.pow(mI - m5, 2) + Math.pow(mJ - m6, 2), .5)
	}

	function aWo(e) {
		m5 = h.k * e.touches[0].clientX, m6 = h.k * e.touches[0].clientY, mI = h.k * e.touches[1].clientX, mJ = h.k * e.touches[1].clientY
	}
	this.a0N = function(e) {
		return 1 < e.touches.length ? (aWn = bd.e7, aWm = 3, aWo(e), aK.qo(), !0) : (aWm = 0, !1)
	}, this.a0O = function(e) {
		var aJ2, hr, hs;
		return 0 !== aC.yn && 1 < e.touches.length && (aWm = Math.max(aWm - 1, 0), aG.mN() && (aJ2 = aWp(), aWo(e), e = aWp(), hr = Math.floor((m5 + mI) / 2), hs = Math.floor((m6 + mJ) / 2), aR.a7U(hr, hs, Math.max(.125, e) / Math.max(.125,
			aJ2)), bd.dc = !0), !0)
	}, this.a0l = function() {
		var ef, eh;
		return !!(aWm && (aWm = 0, bd.e7 < aWn + 500)) && (ef = (m5 + mI) / 2, eh = (m6 + mJ) / 2, aK.a0f(ef, eh), aK.click(ef, eh, !0) && (bd.dc = !0), !0)
	}
}

function cw() {
	this.size = 0, this.dx = 0, this.aB = null, this.dU = function(aB) {
		this.dx = 0, this.aB = aB, this.size = aB.length
	}, this.t8 = function() {
		this.aB = null
	}, this.oY = function(size) {
		for (var f0 = 0, aB = this.aB, mN = this.dx + size - 1, aA = this.dx; aA <= mN; aA++) f0 |= (aB[aA >> 3] >> 7 - (7 & aA) & 1) << mN - aA;
		return this.dx += size, this.dx > 8 * this.size && console.error("Unwrapper Overflow"), f0
	}, this.aQQ = function(size) {
		var es = size >> 1;
		return (1 << es) * this.oY(size - es) + this.oY(es)
	}, this.aQP = function(aWq) {
		return this.size === bB.aQJ(aWq)
	}, this.aRg = function(vn, aWr, aWs) {
		var g1 = this.oY(vn);
		if (!g1) return null;
		for (var vn = Math.max(g1, aWs), g = new(aWr <= 8 ? Uint8Array : aWr <= 16 ? Uint16Array : Uint32Array)(vn), aA = 0; aA < g1; aA++) g[aA] = this.oY(aWr);
		aWs = g[g1 - 1];
		return aWs && g.fill(aWs, g1), g
	}, this.aRh = function(vn, aWt, aWs) {
		var g1 = this.oY(vn);
		if (!g1) return null;
		for (var vn = Math.max(g1, aWs), g = new Array(vn), aA = 0; aA < g1; aA++) g[aA] = this.aRe(aWt);
		return g.fill(g[g1 - 1], g1), g
	}, this.aRe = function(vn) {
		return bE.ut.ux(this.oY(vn))
	}, this.aRf = function() {
		var pE = bD.rp.rq(bD.rp.rr(this.oY(30))),
			pE = b8.zO.a33(pE, "_", "/");
		pE = b8.zO.a33(pE, "-", "+");
		for (var aWu = "";
			(pE.length + aWu.length) % 4;) aWu += "=";
		pE = "data:image/png;base64," + pE + aWu;
		var aFk = new Image;
		aFk.onload = function() {
			b7.aG9.aGA(aFk), aFk.onload = null, aFk = null
		}, aFk.src = pE
	}
}

function dF() {
	this.aSV = 0, this.aSW = 0, this.aSR = 0, this.aSS = 0, this.aST = 0, this.aSU = 0, this.aAD = [0, 0, 0, 0], this.mM = function() {
		this.aSV = aR.wz(), this.aSW = aR.x0(), this.aSR = -this.aSV, this.aSS = -this.aSW, this.aST = h.i / iA, this.aSU = h.j / iA, this.aAD[0] = Math.floor(this.aSR), this.aAD[1] = Math.floor(this.aSS), this.aAD[2] = Math.floor(this.aAD[0] +
			this.aST + 1), this.aAD[3] = Math.floor(this.aAD[1] + this.aSU + 1), bZ.aAA = !0
	}
}

function ci() {
	var a6A, lq;
	this.dU = function() {
		a6A = 1, lq = 0
	}, this.ii = function() {
		0 < a6A && (lq = 0 === lq ? bd.e7 + 16 : lq, a6A = (a6A -= .001 * (bd.e7 - lq)) < 0 ? 0 : a6A, lq = bd.e7, bd.dc = !0)
	}, this.te = function() {
		0 < a6A && (tf.fillStyle = "rgba(0,0,0," + a6A + ")", tf.fillRect(0, 0, h.i, h.j))
	}
}

function a5() {
	this.size = 0, this.dx = 0, this.aB = null, this.dU = function(aB) {
		this.dx = 0, this.aB = aB, this.size = aB.length
	}, this.a6 = function(aWq) {
		return this.dU(new Uint8Array(this.aQJ(aWq))), this.aB
	}, this.t8 = function() {
		this.aB = null
	}, this.a7 = function(size, a5h) {
		for (var aB = this.aB, mN = this.dx + size - 1, aA = this.dx; aA <= mN; aA++) aB[aA >> 3] |= (a5h >> mN - aA & 1) << 7 - (7 & aA);
		this.dx += size, this.dx > 8 * this.size && console.error("Wrapper Overflow")
	}, this.aQI = function(size, a5h) {
		var es = size >> 1,
			eb = 1 << es;
		this.a7(size - es, bJ.dl(a5h, eb)), this.a7(es, a5h % eb)
	}, this.aWx = function(size) {
		for (var aB = this.aB, mN = this.dx + size, aA = this.dx; aA < mN; aA++) aB[aA >> 3] &= 255 ^ 128 >>> (7 & aA)
	}, this.aQJ = function(aWq) {
		return aWq + 7 >> 3
	}, this.aWy = function(g, j5, mN, aWz) {
		for (var aA = j5; aA < mN; aA++) this.a7(aWz, g[aA])
	}
}

function cv() {
	this.dU = function() {
		this.g = [], this.dx = 0
	}, this.aQm = function() {
		return new Uint8Array(this.g)
	}, this.a7 = function(aX0, value) {
		for (var g = this.g, mN = this.dx + aX0 - 1, aX1 = 1 + (mN >> 3); g.length < aX1;) g.push(0);
		for (var aA = this.dx; aA <= mN; aA++) g[aA >> 3] |= (value >> mN - aA & 1) << 7 - (7 & aA);
		this.dx += aX0
	}, this.db = function(g, vn, aWr) {
		var aX2 = b8.pg.a1Y(g);
		this.a7(vn, aX2);
		for (var aA = 0; aA < aX2; aA++) this.a7(aWr, g[aA])
	}, this.aRy = function(g, vn, aWt) {
		var aX2 = b8.pg.a1Y(g);
		this.a7(vn, aX2);
		for (var aA = 0; aA < aX2; aA++) this.aRw(g[aA], aWt)
	}, this.aRw = function(pE, vn) {
		var eY = pE.length;
		this.a7(vn, eY);
		for (var aA = 0; aA < eY; aA++) this.a7(16, pE.charCodeAt(aA))
	}, this.aRx = function(a1e) {
		var aX3 = (a1e = a1e.toDataURL()).split(",");
		if (aX3.length < 2) console.log("error 266");
		else {
			a1e = b8.zO.a33(a1e = aX3[aX3.length - 1], "/", "_"), a1e = b8.zO.a33(a1e, "\\+", "-");
			var a1e = b8.zO.a33(a1e, "=", ""),
				v6 = bE.rp.v3(a1e),
				eY = v6.length;
			this.a7(30, eY);
			for (var aA = 0; aA < eY; aA++) this.a7(6, v6[aA])
		}
	}
}
a(), self.aiCommand746 = function(f0) {
	0 === f0 ? bo() : 1 !== f0 || !z || 1 !== z.id || z.f1 < 14 || bH.f2()
}, setTimeout(bo, 1e4), window.onload = function() {
	bo()
};