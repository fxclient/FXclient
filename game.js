var h, a9, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, at, au, av, aw, ax, ay, az, b0, b1, b2, b3, b4, b5, b6, b7, b8,
	b9, bA, bB, bC, bD, bE, bF, bG, bH, bI, bJ, bK, bL, bM, bN, bO, bP, n, bQ, bR, bS, bT, bU, bV, bW, bX, bY, bZ, ba, bb, bc, bd, u, be, bf, bg, l, bh, bi, bj, bk, bl, bm, dg, dh, a5, di, a6, fN, fO, fP, fQ, fR, fS, fT, fU, fV, fW, fX, fY, fZ, i7,
	i6, i8, a6I, l1, jX, a0G, tb, wy, aA5, a3L, a3M, S = ["100%", "div", "⬅️ ", "absolute", "canvas", "inherit", "rgb(", "rgba(", "none", "   ", "auto", "<br>", "hidden", "center", "Data", "1em", "flex", "0.8em", "territorial.io", "span", "input",
		"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==", "click", "0.5em", "' target='_blank'>", "undefined",
		"</a>", " / ", "pointer", "password", "function", "Value", "Escape", "Enter", "0.6em", "text", "string", "scroll", "rgba(0,0,0,0.8)", "number", "nowrap", "mouseleave", "focus", "break-word", "bold", "blur", "Space", "Player ", "NoStack",
		"50%", "1.2em", "0.4em", "0.0em 0.9em", " voted with ", "   Gold: ", "🔄 Reload", "wheel", "underline", "top", "tls7", "Trebuchet MS", "rgba(140,10,10,0.75)", "rgba(100,0,0,0.8)", "rgba(10,140,10,0.75)", "rgba(0,100,0,0.8)", "rgba(0,",
		"rgb(10,220,10)", "pre", "placeholder", "mouseover", "mouseout", "middle", "long", "logo", "loading", "keydown", "italic ", "inline-block", "file", "error", "en-US", "data:image/png;base64,", "break-all", "blur(4px)", "arena", "account",
		"accept", "_blank", "Seed", "Reload", "Interest", "Censored", "Bot ", "Battle Royale", "Back", "Arial Black, Trebuchet MS", "1v1", "1.4em", "1 Minute", "1 Hour", "1 Day", "0px", "000", "0.75em", "0.4em 0em", "0.2em", "0.02em brown",
		". Duration: x", ",0,0.85)", " solid white;}", " Rank: ", " / 160", " -> "
	];

function a() {
	var b, c;

	function x() {
		if (b && b.readyState === b.OPEN) {
			var a1 = new a2;
			a1.a3(1612), a1.a4(1, 0), a1.a4(6, 7), a1.a4(2, u ? u.id : 3), a1.a4(1, a5 ? 1 : 0), a1.a4(1, a6 ? 1 : 0), a1.a4(1, h ? h.i : 0);
			for (var a7 = 0; a7 < c.length && a7 < 100; a7++) a1.a4(16, c.charCodeAt(a7));
			b.send(a1.a8), y()
		}
	}

	function y() {
		b && (b.onclose = null, b.onopen = null, b = null)
	}
	window.addEventListener("error", function d(e) {
		window.removeEventListener("error", d);
		return alert("Error:\n" + e.filename + " " + e.lineno + " " + e.colno + " " + e.message);
		c = "";
		try {
			var g, k;
			window.removeEventListener("error", d), c = e.lineno + " " + e.colno + "|" + function(e) {
				if (!e.error) return "NoStack";
				var stack = e.error.stack;
				if (!stack || !stack.length) return "NoStack";
				for (var a0, z = new RegExp(":([0-9]+):([0-9]+)", "g"), result = []; null !== (a0 = z.exec(stack));) result.push(parseInt(a0[1], 10)), result.push(parseInt(a0[2], 10));
				return result.length ? result.join(" ") : "NoStack"
			}(e), performance.memory && ((g = []).push(Math.floor(performance.memory.jsHeapSizeLimit / 1e5)), g.push(Math.floor(performance.memory.totalJSHeapSize / 1e5)), g.push(Math.floor(performance.memory.usedJSHeapSize / 1e5)), c =
				c + "|" + g.join(" ")), c = c + "|" + e.message, h && 1 === h.i && (c = h.j + "|" + c, k = "What happened? Please send us a detailed email to davidtschacher@gmail.com so we can fix this error!", 0 === e.lineno && 0 === e
				.colno && (k += "<br>This error might be fixed by disabling browser extensions."), k += "<br>Error Message: " + c, l.m(), n.o(4, 5, new p("🤖 Beep Boop! An error occurred.", k, !0, [new q("Close", function() {
					n.r(), n.s.t()
				}), new q("Reload", function() {
					u.v.w()
				})])))
		} catch (e) {
			c = "SE|" + c + "|" + e, console.log(c), alert(c)
		}(b = new WebSocket("wss://territorial.io/s52/")).onopen = x, b.onclose = function() {
			y()
		}
	})
}

function bn(bo) {
	h && !bo || (bq(), bH = new br, bG = new bs, b6 = new bt, b7 = new bu, a9 = new bv, b3 = new bw, bB = new bx, bC = new by, aA = new bz, aB = new c0, aC = new c1, aD = new c2, aE = new c3, aF = new c4, aG = new c5, aH = new c6, aI = new c7, aJ =
		new c8, aK = new c9, aL = new cA, aM = new cB, aN = new cC, aO = new cD, aP = new cE, aQ = new cF, aR = new cG, aS = new cH, aT = new cI, aU = new cJ, aV = new cK, aW = new cL, aX = new cM, aY = new cN, ag = new cO, ah = new cP, ai =
		new cQ, aZ = new cR, aa = new cS, ad = new cT, ab = new cU, ac = new cV, ae = new cW, av = new cX, af = new cY, ak = new cZ, al = new ca, am = new cb, aw = new cc, au = new cd, aj = new ce, an = new cf, ao = new cg, ap = new ch, at =
		new ci, aq = new cj, ar = new ck, ax = new cl, ay = new cm, az = new cn, b0 = new co, b1 = new cp, b2 = new cq, b4 = new cr, b5 = new cs, b8 = new ct, b9 = new a2, bA = new cu, bD = new cv, bE = new cw, bF = new cx, bI = new cy, bJ =
		new cz, bK = new d0, bL = new d1, bM = new d2, bN = new d3, bO = new d4, bP = new d5, n = new d6, bQ = new d7, u = new d8, h = new d9, be = new dA, bf = new dB, bc = new dC, bd = new dD, bW = new dE, bX = new dF, bR = new dG, bS = new dH,
		bZ = new dI, ba = new dJ, bb = new dK, bg = new dL, bY = new dM, l = new dN, bh = new dO, bi = new dP, bj = new dQ, bk = new dR, bm = new dS, h.dU(), u.dU(), at.dV(), bf.dU(), b3.dU(), b3.dW(), (bT = new dX).dU(), bh.dU(), b6.dU(), bR
		.dU(), aw.dU(), bB.dU(), bC.dU(), bO.dU(), n.dU(), bU = new dY, at.dU(), u.v.dZ(), bb.dU(), bY.dU(), bS.dU(), bV = new da, au.dU(), aa.db(), bQ.dU(), ak.dU(), aW.dU(), aP.dU(), ae.dU(), bF.dU(), aX.dU(), bb.dc = !0, setTimeout(
	function() {
			bO.a3(2, 14071)
		}, 0), n.o(5, 5), bE.dd() || u.v.de(), at.df(), h.i = 1)
}

function d9() {
	this.dj = 1088, this.j = 2031, this.rVersion = 6, this.dU = function() {
		dg = 2;
		var dk = bH.dl(this.j, 10) % 100;
		dh = "31 Jan 2025 [" + bH.dl(this.j, 1e3) + "." + (dk < 10 ? "0" : "") + dk + "." + this.j % 10 + "]", a5 = true, a6 = function() {
			try {
				return window.self !== window.top
			} catch (e) {
				return !0
			}
		}(), di = (new Date).getTime() % 1024
	}, this.i = 0
}

function dO() {
	this.id = new dn, this.dU = function() {
		this.id.dU()
	}
}

function dn() {
	this.dU = function() {
		0 === bf.dp.data[181].value && (bf.dp.dq(180, Math.floor(Math.random() * bH.pow(30))), bf.dp.dq(181, Math.floor((new Date).getTime() / 36e5)))
	}
}

function dr() {
	var ds = [L(0), L(1), L(2), L(3), L(4), L(5), L(6)],
		dt = [100, 60, 30, 15, 6, 1],
		du = [
			[0, 0, 0, 0, 0],
			[0, 1, 1, 1, 1],
			[1, 2, 1, 1, 1],
			[1, 3, 2, 1, 2],
			[1, 4, 2, 2, 3],
			[1, 4, 3, 3, 4],
			[1, 5, 3, 3, 5]
		],
		dv = [" kicked ", " muted ", " censored the username of ", " deducted x from ", " seized x from ", " reported "],
		dw = [".", ". Duration: x", ". Duration: x", ".", ".", ". Reason: x"];
	this.dx = [
		["", "", ""],
		["20 Seconds", "1 Minute", "5 Minutes", "1 Hour", "1 Day"],
		["1 Minute", "1 Hour", "1 Day"],
		["1 Elo Point", "2 Elo Points", "4 Elo Points"],
		["0.5 Gold", "1 Gold", "2 Gold", "5 Gold", "10 Gold"],
		["Bad Username", "Cheating or Exploiting", "Inappropriate Content", "Bullying or Harassment"]
	], this.dy = function(id, dz, e0) {
		dz = this.e1(dz);
		return +(du[dz][id] > e0)
	}, this.e1 = function(dz) {
		for (var a7 = 0; a7 < dt.length; a7++)
			if (dt[a7] <= dz) return a7;
		return dt.length
	}, this.e2 = function(dz) {
		return ds[this.e1(dz)]
	}, this.e3 = function(id, e4) {
		return dv[id].replace(new RegExp("x", "g"), e4)
	}, this.e5 = function(id, e4) {
		return dw[id].replace(new RegExp("x", "g"), e4)
	}
}

function d7() {
	this.e6 = new e7, this.dU = function() {
		u.v.e8()
	}
}

function e7() {
	this.show = function() {
		return !1
	}
}

function cQ() {
	this.e9 = new eA
}

function eA() {
	this.eB = function(eC) {
		var eF;
		return bO.eD(bO.eE) && a9.data.passableMountains && (eF = aY.eG(eC), this.eH(a9.eI, eF) || this.eJ(a9.eI, eF)) && 0 !== (eF = function(ee) {
			for (var ef = bI.eg(ee), eh = bI.ei(ee), max = Math.max(bO.ej, bO.ek) - 2, el = max * max, em = !1, en = 0, eo = 0; eo < max; eo++) {
				var ep, eK = function(ef, eh, eo) {
					for (var a7 = 0; a7 <= eo; a7++)
						for (var er = -1; er < 2; er += 2)
							for (var es = -1; es < 2; es += 2)
								for (var et = 0; et < 2; et++) {
									var eC = function(ef, eh) {
										if (bI.ev(ef, eh)) {
											ef = bI.ew(ef, eh), eh = bI.eO(ef);
											if (aY.eT(eh) && aY.ex(eh)) return ef
										}
										return 0
									}(ef + et * er * a7 + (1 - et) * es * eo, eh + et * es * eo + (1 - et) * er * a7);
									if (eC) return eC
								}
					return 0
				}(ef, eh, eo);
				eK && (ep = bI.eq(ef, eh, eK)) < el && (en = eK, el = ep, em || (em = !0, max = Math.floor(Math.sqrt(ep)) + 1))
			}
			return en
		}(bI.eM(eC))) && (eC = bI.eO(eF), aY.eP(eC) || (eC = aY.eQ(eC)) !== a9.eI && eR(eC, a9.eI)) ? eF : 0
	}, this.eS = function(player, eK) {
		eK = bI.eO(eK);
		if (aY.eT(eK)) {
			if (aY.eP(eK)) bK.eU[0] = a9.eV;
			else if (aY.eQ(eK) !== bK.eU[0]) return !1;
			for (var eW = function(eC) {
					var ea = aY.ea,
						eW = [];
					loop: for (var eb = 3; 0 <= eb; eb--) {
						var ec = eC + ea[eb];
						if (aY.ed(ec)) {
							for (var id = aY.eG(ec), a7 = 0; a7 < eW.length; a7++)
								if (id === eW[a7]) continue loop;
							bK.eZ[eW.length] = ec, eW.push(id)
						}
					}
					return eW
				}(eK), eY = eW.length, a7 = 0; a7 < eY; a7++)
				if (this.eH(player, eW[a7]) || this.eJ(player, eW[a7])) return bK.eZ[0] = bK.eZ[a7], !0
		}
		return !1
	}, this.eH = function(player, eF) {
		for (var ey = ac.ey[player], eY = ey.length, ez = Math.max(bH.dl(eY, 12), 1), ea = aY.ea, a7 = 0; a7 < eY; a7 += ez)
			for (var eN = ey[a7], eb = 3; 0 <= eb; eb--) {
				var ec = eN + ea[eb];
				if (aY.ed(ec) && eF === aY.eG(ec)) return !0
			}
		return !1
	}, this.eJ = function(player, eF) {
		for (var ey = ac.ey[player], eY = ey.length, ea = aY.ea, a7 = 0; a7 < eY; a7++)
			for (var eN = ey[a7], eb = 3; 0 <= eb; eb--) {
				var ec = eN + ea[eb];
				if (aY.ed(ec) && eF === aY.eG(ec)) return !0
			}
		return !1
	}
}

function d0() {
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
	fT = 0, fU = 2048, fV = new Uint32Array(4 * fU), fW = 0, fX = new Uint32Array(fU), fY = new Uint8Array(bO.ej * bO.ek)
}

function fb(player) {
	fO = player, fZ = !1, fc(), fd();
	for (var a7 = aZ.fe(fO) - 1; 0 <= a7; a7--) 0 === aZ.ff(fO, a7) && (fN = a7, fg());
	fZ && fh()
}

function fh() {
	fi(), fj()
}

function fg() {
	fS = aZ.fk(fO, fN), fP = aZ.fl(fO, fN), fQ = aZ.fm(fO, fN), fn(), (0 !== fT && (fp(), fq()) ? fr : fo)()
}

function fq() {
	if (!((fR = bH.dl(fP, fT)) > a9.fs)) {
		if (!fQ) return !1;
		var ft = fT * (1 + a9.fs);
		fP += b6.fu.fv(fO, ft - fP), fR = bH.dl(fP, fT)
	}
	return !0
}

function fp() {
	for (var a7 = fT - 1; 0 <= a7; a7--) fY[bH.dl(fV[a7], 4)] = 0
}

function fo() {
	1 === aZ.fe(fO) && aB.fw(fO);
	var dk = b6.fu.fx(fO, fP);
	bZ.fy(fO, fP - dk, 12), aZ.fz(fO, fN)
}

function fc() {
	for (var player = fO, g0 = ac.g0, eY = Math.min(g0[player].length, fU), g1 = 0, g2 = fX, a7 = eY - 1; 0 <= a7; a7--) g2[g1++] = g0[player][a7];
	fW = g1
}

function fd() {
	for (var a7 = ac.g0[fO].length - 1; 0 <= a7; a7--) aY.eT(ac.g0[fO][a7]) && aY.g3(ac.g0[fO][a7], fO);
	ac.g0[fO] = []
}

function fn() {
	fT = 0, (fS === a9.eV ? g4 : g5)()
}

function g5() {
	for (var g6, g7, a7, ea = aY.ea, eb = 3; 0 <= eb; eb--)
		for (a7 = fW - 1; 0 <= a7; a7--) g6 = fX[a7] + ea[eb], g7 = bH.dl(g6, 4), 0 === fY[g7] && aY.g8(g6) && aY.eQ(g6) === fS && (fY[g7] = 1, fV[fT++] = g6)
}

function g4() {
	for (var g6, g7, a7, ea = aY.ea, eb = 3; 0 <= eb; eb--)
		for (a7 = fW - 1; 0 <= a7; a7--) g6 = fX[a7] + ea[eb], g7 = bH.dl(g6, 4), 0 === fY[g7] && aY.eP(g6) && (fY[g7] = 1, fV[fT++] = g6)
}

function fr() {
	g9() ? (gA(), fS !== a9.eV && gB()) : fo()
}

function gB() {
	gC(), gD(ac.gE[fS]), gD(ac.gF[fS]), bO.eD(bO.eE) && gD(ac.ey[fS]), gG(ac.g0[fS]), gH(ac.gF[fS]), gH(ac.ey[fS]), gI(), gJ()
}

function gA() {
	fZ = !0, aZ.gK(fO, fN, fP), aZ.gL(fO, fN), ac.gM[fO] += fT, gN(), gO()
}

function g9() {
	return (fS === a9.eV ? gP : gQ)()
}

function gQ() {
	var gR = fT * a9.fs,
		gS = gT(),
		gU = gV(),
		gS = gR + 2 * gS + gU,
		gX = fR * fT;
	return gS < gX ? (fP -= gS, bZ.fy(fO, gS, 13), gY(gS - gR, gU), !0) : fQ && 0 === gU ? (fP -= gX, gX += b6.fu.fv(fO, gS - gX + 1), bZ.fy(fO, gX, 13), gY(gX - gR, 0), !0) : (fP -= gX, bZ.fy(fO, gX, 13), gY(gX - gR, gU), !1)
}

function gY(gX, gU) {
	if (0 < gU) {
		if (gX <= gU) return bZ.fy(fS, gX, 13), void aZ.gZ(fS, fO, gU - gX);
		aZ.gZ(fS, fO, 0), gX -= gU
	}
	gX = bH.dl(gX, 2), gX = Math.min(ac.ga[fS], gX), bZ.fy(fS, gX, 13), ac.ga[fS] -= gX
}

function gV() {
	return aZ.gb(fS, fO)
}

function gT() {
	return bH.dl(fT * ac.ga[fS], 1 + bH.dl(10 * ac.gM[fS], 16))
}

function gP() {
	var gc = fT * a9.fs;
	return fP -= gc, bZ.fy(fO, gc, 13), !0
}

function gO() {
	for (var a7 = fT - 1; 0 <= a7; a7--) ac.g0[fO].push(fV[a7]), ac.gE[fO].push(fV[a7]), aY.g3(fV[a7], fO)
}

function d5() {
	var gd = 0,
		ge = 0;
	this.gf = function(ef, eh) {
		gd = ef, ge = eh
	}, this.gg = function(gh) {
		a9.gi || aI.gj || (b6.fu.gk(0) || b6.fu.gk(1)) && b6.fu.gl(a9.eI) && (aN.gm(gd, ge) ? aN.gn = !1 : aL.gm(gd, ge) || function(gh) {
			var gp = bI.gq(gd),
				gr = bI.gs(ge),
				eK = bI.ew(gp, gr),
				eC = bI.eO(eK);
			bI.gt(gp, gr) && (a9.gu ? aY.eT(eC) && b4.gv.gw(eK) : aY.ed(eC) ? gh || (gp = ai.e9.eB(eC)) && (gr = bI.eO(gp), gr = aY.eP(gr) ? a9.eV : aY.eQ(gr), b4.gv.gz(aN.h0(), gp, gr)) : aY.h1(eC) || gh ? bJ.h2.h3(a9.eI, eK) && b4.gv
				.h4(aN.h0(), eK) : aY.eP(eC) ? h5(a9.eI) ? b4.gv.h6(aN.h0(), a9.eV) : h7(a9.eI, a9.eV) ? ax.h8(a9.eV, aN.h0()) : bJ.h2.h3(a9.eI, eK) && b4.gv.h4(aN.h0(), eK) : (gp = aY.eQ(eC)) !== a9.eI && (eR(gp, a9.eI) ? h9(a9.eI,
					gp) ? b4.gv.h6(aN.h0(), gp) : h7(a9.eI, gp) ? ax.h8(gp, aN.h0()) : bJ.h2.h3(a9.eI, eK) && b4.gv.h4(aN.h0(), eK) : bJ.h2.h3(a9.eI, eK) && b4.gv.h4(aN.h0(), eK)))
		}(gh))
	}, this.hA = function() {
		if (!a9.gi && !aI.gj && b6.fu.gk(1)) {
			var g6 = a9.eI;
			if (b6.fu.gl(g6)) {
				var eY = aZ.fe(g6);
				if (eY < 1) ! function() {
					var g6 = a9.eI;
					if (h5(g6)) b4.gv.h6(aN.h0(), a9.eV);
					else
						for (var ea = aY.ea, gE = ac.gE, eY = gE[g6].length, hH = Math.floor(Math.random() * eY), a7 = 0; a7 < eY; a7++)
							for (var hI = 3; 0 <= hI; hI--) {
								var hJ = gE[g6][(a7 + hH) % eY] + ea[hI];
								if (aY.g8(hJ)) {
									hJ = aY.eQ(hJ);
									if (hJ !== g6 && (!a9.hL || eR(g6, hJ))) return b4.gv.h6(aN.h0(), hJ)
								}
							}
				}();
				else {
					for (var hC = 0, hD = aZ.fl(g6, 0), a7 = 1; a7 < eY; a7++) {
						var hE = aZ.fl(g6, a7);
						hE < hD && (hD = hE, hC = a7)
					}
					b4.gv.h6(aN.h0(), aZ.fk(g6, hC))
				}
			}
		}
	}, this.hF = function() {
		a9.gi || aI.gj || b6.fu.gk(1) && aq.hG(a9.eI) && b4.gv.hF()
	}
}

function hM(hN, size, hO, hP, font) {
	var a7, hS = .2,
		canvas = document.createElement("canvas"),
		hT = canvas.getContext("2d", {
			alpha: !1
		});
	for (canvas.width = hN, canvas.height = hN, hT.font = size + font, hT.textAlign = "center", hT.textBaseline = "middle", hT.fillStyle = "red", a7 = 0; a7 < hO.length; a7++) hT.fillText(hO[a7], .5 * hN, .5 * hN);
	return -1 < (canvas = function(hQ) {
		var a7, dz, eb = hQ.data;
		for (a7 = eb.length - 4; 0 <= a7; a7 -= 4)
			if (dz = eb[a7], hP <= dz) return Math.floor(a7 / (4 * hN));
		return -1
	}(hT.getImageData(0, 0, hN, hN))) && (hS = (canvas - .5 * hN + .1 * size) / size), Math.max(hS, 0)
}

function cy() {
	this.hV = new Int16Array(4), this.hW = new Int16Array(4), this.dU = function() {
		var a7;
		for (this.hV[0] = -bO.ej, this.hV[1] = 1, this.hV[2] = bO.ej, this.hV[3] = -1, a7 = 0; a7 < 4; a7++) this.hW[a7] = 4 * this.hV[a7]
	}, this.hX = function(gx, hY) {
		var hZ = this.eg(hY) - this.eg(gx),
			hY = this.ei(hY) - this.ei(gx),
			gx = hZ >>> 31 << 1;
		return 5 + gx + (1 - gx) * (1 - (hY >>> 31 << 1)) * (Math.abs(hZ) - Math.abs(hY) >>> 31) & 3
	}, this.he = function(gx, hY, hI) {
		return hI % 2 == 0 ? hI + (1 - hI) * (1 - (this.eg(hY) - this.eg(gx) >>> 31 << 1)) + 4 & 3 : hI + (2 - hI) * (1 - (this.ei(hY) - this.ei(gx) >>> 31 << 1)) + 4 & 3
	}, this.hg = function(g6, eK) {
		for (var hY, hh, hj = ac.gF[g6], eY = hj.length, a1 = bO.ej, hk = this.eg(eK), hl = this.ei(eK), ee = hj[0] >> 2, min = this.eq(hk, hl, ee), a7 = 1; a7 < eY; a7++)(hh = (hh = hk - (hY = hj[a7] >> 2) % a1) * hh + (hh = hl - ~~((.5 + hY) /
			a1)) * hh) < min && (min = hh, ee = hY);
		return ee
	}, this.hm = function(player, eC) {
		return !aY.eP(eC) && player === aY.eQ(eC)
	}, this.eq = function(gp, gr, eK) {
		return (gp -= this.eg(eK)) * gp + (gr -= this.ei(eK)) * gr
	}, this.hn = function(ho, hp, hq) {
		ho = this.hs(ho) - this.ht(hq), hp = this.hv(hp) - this.hw(hq);
		return Math.sqrt(ho * ho + hp * hp)
	}, this.hx = function(gx, hY) {
		var hr = this.eg(gx) - this.eg(hY),
			gx = this.ei(gx) - this.ei(hY);
		return Math.sqrt(hr * hr + gx * gx)
	}, this.hy = function(gx, hY) {
		var hr = this.eg(gx) - this.eg(hY),
			gx = this.ei(gx) - this.ei(hY);
		return hr * hr + gx * gx
	}, this.hz = function(i0, i1, i2, i3) {
		return (i0 -= i2) * i0 + (i1 -= i3) * i1
	}, this.i4 = function(g6, i5) {
		return bH.dl(i5 * ac.ga[g6], 1e3)
	}, this.hs = function(ho) {
		return 16 * (ho + i6) / i7
	}, this.hv = function(hp) {
		return 16 * (hp + i8) / i7
	}, this.i9 = function(eb) {
		return 16 * eb / i7
	}, this.gq = function(ho) {
		return Math.floor((ho + i6) / i7)
	}, this.gs = function(hp) {
		return Math.floor((hp + i8) / i7)
	}, this.gt = function(gp, gr) {
		return 1 <= gp && 1 <= gr && gp < bO.ej - 1 && gr < bO.ek - 1
	}, this.eg = function(eK) {
		return eK % bO.ej
	}, this.ei = function(eK) {
		return bH.dl(eK, bO.ej)
	}, this.ew = function(gp, gr) {
		return gr * bO.ej + gp
	}, this.iA = function(eK) {
		return this.ev(this.eg(eK), this.ei(eK))
	}, this.ev = function(gp, gr) {
		return 0 < gp && gp < bO.ej - 1 && 0 < gr && gr < bO.ek - 1
	}, this.eO = function(eK) {
		return eK << 2
	}, this.eM = function(eC) {
		return eC >> 2
	}, this.iB = function(eK) {
		return bO.ej * this.ei(eK) * 256 + (this.eg(eK) << 4)
	}, this.iC = function(eK) {
		return this.iB(eK) + 8 + (bO.ej << 7)
	}, this.iD = function(hq) {
		return bO.ej * (this.hw(hq) >> 4) + (this.ht(hq) >> 4)
	}, this.iE = function(hq) {
		hq = this.iD(hq);
		return (this.eg(hq) >> 5) + bJ.iF.iG * (this.ei(hq) >> 5)
	}, this.ht = function(hq) {
		return hq % (bO.ej << 4)
	}, this.hw = function(hq) {
		return bH.dl(hq, bO.ej << 4)
	}, this.iH = function(eK, hI) {
		return eK + this.hV[hI]
	}, this.iI = function(eC, hI) {
		return eC + this.hW[hI]
	}, this.iJ = function(player) {
		return this.ew(ac.iK[player] + ac.iL[player] >> 1, ac.iM[player] + ac.iN[player] >> 1)
	}, this.iO = function(player) {
		return this.ew(au.iP(ac.iK[player], ac.iL[player]), au.iP(ac.iM[player], ac.iN[player]))
	}
}

function ce() {
	this.iQ = new iR, this.iS = new iT, this.iU = new iV, this.performance = new iW, this.iX = new iY, this.iZ = new ia, this.ib = new ic, this.dU = function() {
		this.iQ.dU(), this.iU.dU(), this.performance.dU(), this.iX.dU(), this.iZ.dU()
	}, this.ie = function() {
		this.performance.ie(), this.iQ.ie()
	}
}

function iY() {
	var ig, ii = new Uint16Array(8);

	function is(size, player) {
		for (var a7 = ac.g0[player].length - 1; size <= a7; a7--) aY.iz(ac.g0[player][a7], player)
	}
	this.dU = function() {
		ig = 0
	}, this.ij = function(player, ik) {
		return bK.eU[1] = ac.g0[player].length, bK.eU[0] === a9.eV ? aj.iX.il(player) : this.im(player, bK.eU[0]), (0 !== bK.eU[1] || 0 !== ac.g0[player].length) && !(!ik && bK.eU[1] === ac.g0[player].length || (bK.eU[0] === a9.eV ? ac.io[
			player]++ : ac.ip[player]++, 0))
	}, this.iq = function(player) {
		a9.hL && (aj.iZ.ir[player] = 1), is(bK.eU[1], player), aZ.it(player, bK.f6[0], bK.eU[0]), aB.iu(player, !1)
	}, this.iv = function(player, iw, eY, hD) {
		var ix = bH.dl(12 * ac.ga[player], 1024);
		hD -= hD >= bH.dl(ac.ga[player], 2) ? ix : 0, is(eY, player), aZ.it(player, hD, iw), ac.ga[player] -= hD + ix, aB.iu(player, !1)
	}, this.im = function(player, iw) {
		for (var hI, ea = aY.ea, a7 = ac.gE[player].length - 1; 0 <= a7; a7--)
			if (aY.iy(ac.gE[player][a7]))
				for (hI = 3; 0 <= hI; hI--)
					if (aY.g8(ac.gE[player][a7] + ea[hI]) && aY.eQ(ac.gE[player][a7] + ea[hI]) === iw) {
						ac.g0[player].push(ac.gE[player][a7]);
						break
					}
	}, this.il = function(player) {
		for (var ea = aY.ea, a7 = ac.gE[player].length - 1; 0 <= a7; a7--)
			if (aY.iy(ac.gE[player][a7]))
				for (var hI = 3; 0 <= hI; hI--)
					if (aY.eP(ac.gE[player][a7] + ea[hI])) {
						ac.g0[player].push(ac.gE[player][a7]);
						break
					}
	}, this.j0 = function(player, j1) {
		var a7, er, hI, hK, eY = ac.gE[player].length,
			hf = 256 <= eY ? 12 : 32 <= eY ? 6 : 1,
			j2 = eY - 1 - au.j3(hf),
			ea = aY.ea;
		ig = 0;
		loop: for (a7 = j2; 0 <= a7; a7 -= hf)
			for (hI = 3; 0 <= hI; hI--)
				if ((hK = aY.eP(ac.gE[player][a7] + ea[hI]) ? a9.eV : aY.eQ(ac.gE[player][a7] + ea[hI])) === a9.eV || aY.g8(ac.gE[player][a7] + ea[hI]) && hK !== player && (j1 || eR(player, hK))) {
					for (er = ig - 1; 0 <= er; er--)
						if (ii[er] === hK) continue loop;
					if (ii[ig] = hK, 8 <= ++ig) return !0
				}
		return 0 < ig
	}, this.j4 = function(player, j1) {
		var a7, hI, hK, ea = aY.ea;
		for (ig = 0, a7 = ac.gE[player].length - 1; 0 <= a7; a7--)
			for (hI = 3; 0 <= hI; hI--)
				if ((hK = aY.eP(ac.gE[player][a7] + ea[hI]) ? a9.eV : aY.eQ(ac.gE[player][a7] + ea[hI])) === a9.eV || aY.g8(ac.gE[player][a7] + ea[hI]) && hK !== player && (j1 || eR(player, hK))) return ii[ig++] = hK, !0;
		return !1
	}, this.j5 = function() {
		for (var es, a7 = ig - 1; 0 <= a7; a7--)
			if (ii[a7] === a9.eV) {
				for (ig--, es = a7; es < ig; es++) ii[es] = ii[es + 1];
				return !0
			} return !1
	}, this.j6 = function(player) {
		for (var es, a7 = ig - 1; 0 <= a7; a7--)
			if (aZ.j7(player, ii[a7]))
				for (ig--, es = a7; es < ig; es++) ii[es] = ii[es + 1];
		return 0 === ig
	}, this.j8 = function() {
		for (var a7 = ig - 1; 0 <= a7; a7--)
			if (b6.fu.j9(ii[a7])) return !0;
		return !1
	}, this.jA = function() {
		for (var a7 = ig - 1; 0 <= a7; a7--) b6.fu.j9(ii[a7]) || (ii[a7] = ii[--ig]);
		return 0 < ig
	}, this.jB = function(player) {
		for (var es, jC = ii[0], jD = ac.ga[jC] + aZ.gb(jC, player), a7 = ig - 1; 1 <= a7; a7--)(es = ac.ga[ii[a7]] + aZ.gb(ii[a7], player)) < jD && (jC = ii[a7], jD = es);
		return jC
	}, this.jE = function(player) {
		var jF, jG = ii[0];
		if (1 !== ig)
			for (var jH = bH.dl(ac.iL[player] + ac.iK[player], 2), jI = bH.dl(ac.iN[player] + ac.iM[player], 2), eo = jJ(jH - bH.dl(ac.iL[jG] + ac.iK[jG], 2)) + jJ(jI - bH.dl(ac.iN[jG] + ac.iM[jG], 2)), a7 = ig - 1; 1 <= a7; a7--)(jF = jJ(jH - bH
				.dl(ac.iL[ii[a7]] + ac.iK[ii[a7]], 2)) + jJ(jI - bH.dl(ac.iN[ii[a7]] + ac.iM[ii[a7]], 2))) < eo && (eo = jF, jG = ii[a7]);
		return jG
	}, this.jK = function() {
		for (var jL = ii, jM = jL[0], ga = ac.ga, jN = ga[jM], a7 = ig - 1; 1 <= a7; a7--) {
			var g6 = jL[a7],
				es = ga[g6];
			jN < es && (jM = g6, jN = es)
		}
		return jM
	}, this.jO = function() {
		return ii[au.j3(ig)]
	}
}

function ia() {
	function jd(player, iw, jT) {
		3 <= jT && 2142 < bb.jj() && (iw === a9.eV || ac.ga[iw] < bH.dl(ac.ga[player], 20)) && aA.jY(player, 20)
	}

	function jg(player, hD, iw, jT) {
		3 <= jT && jT < 6 && bH.dl(ac.ga[player], 8) > ac.ga[iw] && (hD = Math.max(bH.dl(11 * ac.ga[iw], 5), bH.dl(ac.ga[player], 10)));
		jT = ac.g0[player].length;
		aj.iX.im(player, iw), aj.iX.iv(player, iw, jT, hD)
	}

	function jc(player, hD) {
		var iw = a9.eV,
			eY = ac.g0[player].length;
		aj.iX.il(player), ac.g0[player].length !== eY && aj.iX.iv(player, iw, eY, hD)
	}
	this.ir = new Uint8Array(a9.eV), this.dU = function() {
		this.ir.fill(0)
	}, this.jP = function(player, hD) {
		var jR, jT, jU, jV;
		aZ.jQ(player) && (jR = aa.jS(player), 3 <= (jT = aA.hD[player]) && jT < 6 && (hD = Math.max(ac.ga[player] - jR, hD)), jU = ac.gF[player].length, jV = ac.gE[player].length, 30 * ac.gM[player] > a9.jW && jX[player] < 10 && 100 * jV <= jU &&
			aA.jY(player, 10), a9.hL ? function(player, hD, jT, jR) {
				var iw;
				if (aj.iZ.ir[player] = 1, aj.iX.j0(player, !1) || aj.iX.j4(player, !1)) {
					if (!aj.iX.j6(player))
						if (aj.iX.j5()) jc(player, hD), jd(player, a9.eV, jT);
						else {
							if (au.je(aA.jf[jT])) iw = aj.iX.jB(player);
							else {
								if (aj.iX.j8() && au.je(aA.jh[jT]) && aj.iX.jA(), 6 === jT) return jg(player, hD, aj.iX.jO(), jT);
								iw = aj.iX.jE(player)
							}
							jg(player, hD, iw, jT), jd(player, iw, jT)
						}
				} else bJ.ja.ie(player) || aj.ib.ie(player) || (aj.iZ.ir[player] = 0, function(player, hD, jT, jR) {
					var a7, es, et, eW = bc.eW,
						jk = eW[player];
					if (0 !== jk) {
						var jl = ac.ga[player],
							gM = ac.gM;
						if (player < a9.jm && (hD = jl), !(jl < gM[player] || 5 === jT && jl < jR || 4 === jT && jl < bH.dl(jR, 2))) {
							var eY = ah.jn,
								jo = ah.jo,
								ir = (a7 = au.j3(eY), aj.iZ.ir);
							for (es = 0; es < eY; es++)
								if (et = jo[(es + a7) % eY], 1 === ir[et] && eW[et] === jk) return b4.jp.jq(player, et, hD)
						}
					}
				}(player, hD, jT, jR))
			}(player, hD, jT, jR) : (!jV || jU && (jU < jV && !au.j3(10) || 100 * jV <= jU && au.j3(3) || !au.j3(8))) && bJ.ja.ie(player) || function(player, hD, jT) {
				aj.iX.j0(player, !0) || aj.iX.j4(player, !0) ? aj.iX.j6(player) || (aj.iX.j5() ? jc(player, hD) : au.je(aA.jf[jT]) ? jg(player, hD, aj.iX.jB(player), jT) : 5 === jT ? jg(player, hD, aj.iX.jK(), jT) : (aj.iX.j8() && au.je(aA
					.jh[jT]) && aj.iX.jA(), jg(player, hD, 6 === jT ? aj.iX.jO() : aj.iX.jE(player), jT))) : aj.ib.ie(player)
			}(player, hD, jT))
	}
}

function bz() {
	var jr = new Uint8Array(a9.eV),
		js = new Uint16Array(a9.eV),
		jt = new Uint16Array(a9.eV),
		ju = new Uint8Array(a9.eV),
		jv = (this.hD = new Uint8Array(a9.eV), new Uint16Array(a9.eV)),
		jw = new Uint16Array(a9.eV);

	function kA(a7) {
		jr[a7] = 1 + bH.dl(jv[a7] * au.random(), 10 * au.value(100))
	}
	this.jx = null, this.jh = [97, 94, 70, 40, 20, 0, 100], this.jy = [500, 450, 400, 300, 80, 50, 100], this.jf = [0, 0, 5, 25, 50, 100, 0], this.jz = [60, 74, 112, 200, 256, 512, 512], this.k0 = [1, 2, 3, 4, 6, 8, 1], this.k1 = [500, 450, 400, 300,
		80, 50, 100
	], this.dV = function() {
		this.jx = [L(7), L(8), L(9), L(10), L(11), L(12), "H Bot"]
	}, this.dU = function() {
		jr.fill(0), js.fill(0), jt.fill(0), ju.fill(0), this.hD.fill(0), jv.fill(0), jw.fill(0);
		var k2 = a9.jm;
		if (9 === a9.k3) this.k4();
		else if (__fx.customLobby.isActive())
			for (a7 = a9.k7 - 1; 0 <= a7; a7--) this.hD[a7 + k2] = __fx.customLobby.gameInfo.difficulty;
		else if (a9.k5)
			if (3 === a9.data.botDifficultyType)
				for (a7 = a9.k7 - 1; 0 <= a7; a7--) {
					var hJ = a7 + k2;
					this.hD[hJ] = a9.data.botDifficultyData[hJ]
				} else if (2 === a9.data.botDifficultyType)
					for (a7 = a9.k7 - 1; 0 <= a7; a7--) this.hD[hJ = a7 + k2] = a9.data.botDifficultyTeam[bc.k8[bc.eW[hJ]]];
				else if (1 === a9.data.botDifficultyType) {
			var k9 = this.jx.length;
			for (a7 = a9.k7 - 1; 0 <= a7; a7--) this.hD[a7 + k2] = a7 % k9
		} else
			for (k9 = a9.data.botDifficultyValue, a7 = a9.k7 - 1; 0 <= a7; a7--) this.hD[a7 + k2] = k9;
		else
			for (var k6 = 8 === a9.k3 ? 1 : 0, a7 = a9.k7 - 1; 0 <= a7; a7--) this.hD[a7 + k2] = k6;
		for (a7 = 0; a7 < k2; a7++) this.hD[a7] = 6;
		var eY = a9.eV;
		for (a7 = 0; a7 < eY; a7++) this.hD[a7] <= 2 ? (ju[a7] = 5, jv[a7] = jw[a7] = 1040, 0 === this.hD[a7] ? (js[a7] = 980, jt[a7] = 980) : 1 === this.hD[a7] ? (js[a7] = 980, jt[a7] = 920, jv[a7] = jw[a7] = 1100) : (js[a7] = 825, jt[a7] =
			750)) : this.hD[a7] <= 4 ? (ju[a7] = 1 + au.j3(20), 3 === this.hD[a7] ? (js[a7] = jt[a7] = 500, jv[a7] = jw[a7] = 1e3) : (jw[a7] = 250 + au.j3(1501), jv[a7] = 500 + au.j3(501), js[a7] = 300 + au.j3(201), jt[a7] = 100 + au.j3(
			201))) : this.hD[a7] <= 5 ? (jv[a7] = 1e3, jw[a7] = 1e3, ju[a7] = 35 + au.j3(16), js[a7] = 300 + au.j3(201), jt[a7] = 50 + au.j3(101)) : (jv[a7] = jw[a7] = 800, ju[a7] = 5, js[a7] = 10, jt[a7] = 250), kA(a7)
	}, this.k4 = function() {
		for (var eC = av.kB, k2 = a9.jm, a7 = eC - 1; 0 <= a7; a7--) this.hD[a7 + k2] = 0;
		for (var es = 0; es < 6; es++) {
			for (a7 = eC + av.kC[es] - 1; eC <= a7; a7--) this.hD[a7 + k2] = es;
			eC += av.kC[es]
		}
	}, this.jY = function(g6, value) {
		jr[g6] = Math.min(value, jr[g6])
	}, this.ie = function(g6) {
		0 == --jr[g6] && ! function(g6) {
			(function(g6) {
				jv[g6] !== jw[g6] && (jv[g6] += jv[g6] < jw[g6] ? 3 : -3);
				js[g6] !== jt[g6] && (js[g6] += js[g6] < jt[g6] ? ju[g6] : -ju[g6], js[g6] = (Math.abs(js[g6] - jt[g6]) <= ju[g6] ? jt : js)[g6]);
				jr[g6] = bH.dl(jv[g6], 10)
			})(g6), aj.iZ.jP(g6, bH.dl(js[g6] * ac.ga[g6], 1e3))
		}(g6)
	}, this.kF = function(g6, g1) {
		jv[g6] = jw[g6] = g1
	}
}

function iV() {
	var kG = new Uint16Array(a9.eV);

	function kL(player, kJ) {
		for (var eY = bK.f4[0], fB = bK.fB, kV = -1, kW = a9.eV, a7 = 0; a7 < eY; a7++) {
			var eo, g6 = fB[a7];
			eR(player, g6) && (eo = bI.hy(kJ, bI.iJ(g6)), -1 === kV || eo < kV) && (kV = eo, kW = g6)
		}
		return kW
	}

	function kN(kK, kJ) {
		if (kK === a9.eV) return 0;
		for (var gF = ac.gF[kK], kU = gF.length, eY = Math.min(kU, 10), kW = 0, kV = bI.hy(gF[kW] >> 2, kJ), a7 = 0; a7 < eY; a7++) {
			var hJ = au.j3(kU),
				eo = bI.hy(gF[hJ] >> 2, kJ);
			eo < kV && (kV = eo, kW = hJ)
		}
		return gF[kW] >> 2
	}

	function kQ(player, kJ, iw, kZ) {
		var ka;
		(kZ === a9.eV || (ka = bI.iJ(iw), kZ = bI.iJ(kZ), bI.hy(kJ, ka) < bI.hy(kJ, kZ))) && (kG[player] = iw)
	}
	this.dU = function() {
		kG.fill(a9.eV)
	}, this.ie = function(player) {
		var kJ, kM, kK, iw = function(player) {
			var iw = kG[player];
			if (iw !== a9.eV) {
				if (b6.fu.kY(iw)) return iw;
				kG[player] = a9.eV
			}
			return a9.eV
		}(player);
		return function(player) {
			for (var kT = ah.jo, kU = ah.jn, eY = Math.min(kU, kU < 17 && 5 === au.j3(20) ? 1 : 16), g7 = au.j3(kU), fB = bK.fB, gF = ac.gF, g1 = 0, a7 = 0; a7 < eY; a7++) {
				var g6 = kT[(a7 + g7) % kU];
				g6 !== player && gF[g6].length && (fB[g1++] = g6)
			}
			bK.f4[0] = g1
		}(player), 0 !== bK.f4[0] && (0 < (kM = kN(kK = kL(player, kJ = bI.iO(player)), kJ)) && bJ.kO.kP(player, kM) ? (kQ(player, kJ, kK, iw), !0) : 0 < (kK = function(player, kJ) {
			for (var eY = bK.f4[0], fB = bK.fB, kX = kG, g7 = 0, a7 = 0; a7 < eY; a7++) {
				var g6 = fB[a7],
					g6 = kX[g6];
				g6 !== a9.eV && b6.fu.kY(g6) && player !== g6 && eR(player, g6) && (fB[g7++] = g6)
			}
			return 0 !== (bK.f4[0] = g7) ? kN(kL(player, kJ), kJ) : 0
		}(player, kJ)) && bJ.kO.kP(player, kK) ? (kQ(player, kJ, aY.eQ(kK << 2), iw), !0) : !!(0 < (kM = kN(iw, kJ)) && bJ.kO.kP(player, kM)))
	}
}

function ic() {
	function ke(player) {
		for (var ey = ac.ey[player], eY = ey.length, ez = Math.max(bH.dl(eY, 12), 1), ea = aY.ea, dz = au.j3(eY), a7 = 0; a7 < eY; a7 += ez)
			for (var eN = ey[(a7 + dz) % eY], eb = 3; 0 <= eb; eb--) {
				var ec = eN + ea[eb];
				if (aY.ed(ec)) return {
					eC: ec,
					id: aY.eG(ec),
					g6: player
				}
			}
		return null
	}

	function kj(player, kl) {
		var hD = b6.fu.km(player, aA.k1[aA.hD[player]]);
		ac.g0[player].push(kl.eC), aZ.it(player, hD, kl.g6), aB.iu(player, !0)
	}
	this.ie = function(player) {
		return !!bO.eD(bO.eE) && !!a9.data.passableMountains && 0 !== ac.ey[player].length && function(player) {
			var kd = ke(player);
			if (null === kd) return !1;
			! function(player) {
				for (var jo = ah.jo, jn = ah.jn, eY = Math.min(jn, 12), g7 = au.j3(jn), fB = bK.fB, ey = ac.ey, g1 = 0, a7 = 0; a7 < eY; a7++) {
					var g6 = jo[(a7 + g7) % jn];
					g6 !== player && ey[g6].length && eR(player, g6) && (fB[g1++] = g6)
				}
				bK.f4[0] = g1
			}(player);
			var kg = function(eF) {
				for (var eY = bK.f4[0], fB = bK.fB, a7 = 0; a7 < eY; a7++) {
					var kl = ke(fB[a7]);
					if (null !== kl && kl.id === eF) return kl
				}
				return null
			}(kd.id);
			return null !== kg ? (kj(player, kg), !0) : function(player, eF) {
				var eY = aj.iQ.kk;
				if (0 !== eY)
					for (var eC = aj.iQ.dp[au.j3(eY)] << 2, ea = aY.ea, eb = au.j3(4);;) {
						if (eC += ea[eb], aY.ed(eC)) {
							if (aY.eG(eC) === eF) return kj(player, {
								eC: eC,
								g6: a9.eV
							}), !0;
							break
						}
						if (!aY.eP(eC)) break
					}
				return !1
			}(player, kd.id)
		}(player)
	}
}

function iT() {
	this.ie = function(player) {
		var eK = function(player) {
			var eY = aj.iQ.kk;
			if (0 === eY) return -1;
			for (var kU = Math.min(eY, aj.performance.ko ? eY : 10), dp = aj.iQ.dp, j2 = bH.dl(au.random() * eY, au.value(100)), e = j2 + kU, kp = au.iP(ac.iK[player], ac.iL[player]), kq = au.iP(ac.iM[player], ac.iN[player]), kW = -1, eo = bI
					.hz(0, 0, bO.ej, bO.ek), a7 = j2; a7 < e; a7++) {
				var g7 = a7 % eY,
					kr = bI.eq(kp, kq, dp[g7]);
				kr < eo && (eo = kr, kW = g7)
			}
			return -1 !== kW ? dp[kW] : -1
		}(player);
		return -1 !== eK && bJ.kO.kP(player, eK)
	}
}

function iW() {
	this.ko = 0, this.dU = function() {
		this.ko = 0
	}, this.ie = function() {
		if (!this.ko && bb.jj() % 30 == 7 && b6.fu.ku(80) && (aj.performance.ko = 1)) {
			if (a9.hL) {
				var kx = bd.ky();
				if (bc.k8[kx]) {
					bd.kz(kx);
					var g = bK.fC,
						eY = bK.f4[0];
					if (0 !== eY)
						for (var l0 = Math.min(100 + 10 * (eY - 1), 400), a7 = 0; a7 < eY; a7++) aA.kF(g[a7], l0)
				}
			}
			aA.kF(l1[0], 100)
		}
	}
}

function iR() {
	var l2, l3, l4 = 300,
		l5 = 300,
		l6 = (this.kk = 0, this.dp = new Uint32Array(512), !1);
	this.dU = function() {
		l6 = !1, l3 = l2 = 0, this.kk = 0
	}, this.ie = function() {
		if (function() {
				var eY = aj.iQ.kk;
				if (0 === eY) return 1;
				var dp = aj.iQ.dp;
				if (bb.jj() % 35 == 6) {
					for (var a7 = eY - 1; 0 <= a7; a7--) aY.eP(dp[a7] << 2) || (eY--, dp[a7] = dp[eY]);
					aj.iQ.kk = eY
				}
				return eY < dp.length
			}() && !(l4 <= l2)) {
			var a7, a1 = bO.ej,
				lA = a1 - 2,
				eY = lA * (bO.ek - 2),
				lB = l4,
				dp = aj.iQ.dp,
				kU = aj.iQ.kk,
				lC = dp.length,
				g7 = Math.min(l3 + lB * ((1 + 19 * aj.performance.ko) * l5), eY);
			for (a7 = l3; a7 < g7; a7 += lB) {
				var eC = 4 * (a7 % lA + (bH.dl(a7, lA) + 1) * a1 + 1);
				if (aY.eP(eC) && (dp[kU] = eC >> 2, ++kU === lC)) {
					a7 += lB;
					break
				}
			}(l3 = a7) >= eY && (l3 = ++l2), aj.iQ.kk = kU
		}
	}, this.l9 = function() {
		l6 || (this.dU(), l6 = !0)
	}
}

function lD() {
	aJ.ie(), ab.ie(), aS.lE(), aw.s.ie()
}

function lF() {
	ax.ie(), aC.ie(), aa.ie(), b0.ie(), aB.ie(), aj.ie(), bJ.s.ie(), ah.lG(), aR.ie(), av.ie(), bR.ie(), ab.ie(), ab.lH(), aS.ie(), bL.ie(), aQ.ie(), aL.ie(), aJ.ie(), b1.ie(), aN.ie(), aq.ie(), bZ.ie(), bd.ie(), aw.s.ie(), aw.lI.ie(), n.ie(), b5
	.ie(), bb.ie()
}

function lJ() {
	aD.ie(), aT.ie(), aM.ie(), ap.ie(), b8.ie(), ar.lK()
}

function lL() {
	aR.lM(!1), aL.lM(), aS.lM(!1), aQ.lM(), aN.lM(), aq.lM(), ab.lM(!1), bd.lN()
}

function lO() {
	ab.lM(!1) && (bb.dc = !0), aw.s.ie()
}

function c0() {
	var lP, lQ, lR;

	function lT(lV) {
		for (var a7 = lP - 1; 0 <= a7; a7--) 0 === lR[lQ[a7]] && ac.gM[lQ[a7]] >= lV && fb(lQ[a7])
	}

	function lS(player) {
		var dk;
		64 === lR[player] ? lR[player] = 6 : (dk = ac.gM[player], lR[player] = dk < 1e3 ? 3 : dk < 1e4 ? 2 : dk < 6e4 ? 1 : 0)
	}
	this.dU = function() {
		lP = 0, lQ = new Uint16Array(a9.eV), lR = new Uint8Array(a9.eV)
	}, this.ie = function() {
		for (var a7 = lP - 1; 0 <= a7; a7--) 64 === lR[lQ[a7]] ? lS(lQ[a7]) : 0 == lR[lQ[a7]]-- && (lS(lQ[a7]), fb(lQ[a7]));
		16e4 <= ac.gM[l1[0]] && (lT(16e4), 3e5 <= ac.gM[l1[0]]) && lT(3e5), b6.fu.kY(a9.eI) && (bZ.lW[7] = Math.max(ac.gM[a9.eI], bZ.lW[7]))
	}, this.fw = function(player) {
		for (var er, a7 = lP - 1; 0 <= a7; a7--)
			if (player === lQ[a7]) {
				for (lP--, er = a7; er < lP; er++) lQ[er] = lQ[er + 1];
				return
			}
	}, this.iu = function(player, lX) {
		for (var a7 = lP - 1; 0 <= a7; a7--)
			if (player === lQ[a7]) return;
		lQ[lP++] = player, lR[player] = lX ? 2 : 64
	}
}

function c1() {
	var size, ja;
	this.dU = function() {
		size = a9.k7, ja = new Uint16Array(a9.eV);
		for (var jm = a9.jm, a7 = a9.k7 - 1; 0 <= a7; a7--) ja[a7] = jm + a7
	}, this.ie = function() {
		for (var a7 = size - 1; 0 <= a7; a7--)
			if (0 === ac.la[ja[a7]]) {
				er = void 0;
				var er = a7;
				size--, ja[er] = ja[size]
			} else aA.ie(ja[a7])
	}, this.lZ = function(g6) {
		ja[size++] = g6
	}
}

function c2() {
	var lc, ld, le, lf, lg, lh, li, lj, lk, ll, lm, ln, lo, lp = !1,
		lq = !1;

	function lr(ls) {
		ln = bb.lt, le = lf = ld = 0, lg = (lo = 33) / ls, lc = 1 / (ls / lo / 4), lh = (at.a1 / 2 + i6) / i7, li = (at.jF / 2 + i8) / i7, lj = i7
	}

	function m0(a7) {
		var m3; - 1 !== a7 && (a7 = bI.iD(bJ.s.m2[a7]), m3 = bI.eg(a7) - 10, a7 = bI.ei(a7) - 10, aD.lw(m3, a7, 19 + m3, 19 + a7))
	}

	function mE(e4) {
		Math.abs(Math.log(lm / lj)) < .125 && (lm = e4 * lj)
	}

	function mD(m3, m4, mG, mH) {
		lk = (m3 + mG + 1) / 2, ll = (m4 + mH + 1) / 2;
		mG = at.a1 / (mG - m3 + 1), m3 = at.jF / (mH - m4 + 1);
		lm = .9 * (mG < m3 ? mG : m3)
	}
	this.lu = function() {
		return lp
	}, this.lv = function() {
		lr(1), this.lw(0, 0, bO.ej - 1, bO.ek - 1), a9.gu || a9.gi || this.lx(a9.eI, 3e3, !0, .3)
	}, this.ly = function(player, lz) {
		m0(bJ.h2.m1(player, lz))
	}, this.lx = function(player, ls, m5, zoom) {
		a9.m6 || lp && !m5 && lq || (0 === ac.gM[player] ? m0(bJ.h2.m7(player)) : (aO.m8 = !1, lq = m5, lr(ls), function(player) {
			lk = (ac.iK[player] + ac.iL[player] + 1) / 2, ll = (ac.iM[player] + ac.iN[player] + 1) / 2
		}(player), function(zoom, player) {
			var hr = ac.iL[player] - ac.iK[player] + 1,
				player = ac.iN[player] - ac.iM[player] + 1,
				er = at.a1 / hr,
				es = at.jF / player,
				er = (lm = er < es ? er : es, 0 !== zoom ? zoom : hr < 20 && player < 20 ? .5 : .9);
			lm *= er, mE(7 / 8)
		}(zoom, player), lp = !0, am.mB()))
	}, this.mC = function(ls) {
		a9.gi || a9.m6 || (aO.m8 = !1, lq = !1, lr(ls), mD(0, 0, bO.ej - 1, bO.ek - 1), mE(7 / 8), lp = !0, am.mB())
	}, this.lw = function(m3, m4, mG, mH) {
		mD(m3, m4, mG, mH), i7 = lm, aO.mI(lk, at.a1 / 2), aO.mJ(ll, at.jF / 2), bW.mK(), bb.dc = !0
	}, this.mL = function() {
		return !(lp && lq || (lp = !1))
	}, this.ie = function() {
		var mO, mP, eb, mS;
		lp && (ld < .5 ? lf < lg && (lf += lg * lc, le = ld) : 1 - le < ld && (lf = (lf -= lg * lc) < lg * lc ? lg * lc : lf), ln = ln >= bb.lt ? bb.lt - 1 : ln, eb = bb.lt - ln, ld = 1e3 < eb || 1 < (ld += lf * eb / lo) ? 1 : ld, ln = bb.lt,
			eb = i7, mO = i6, mP = i8, eb = (i7 = lj * Math.pow(lm / lj, ld)) / eb, mS = 1 - (lj * Math.pow(lm / lj, 1 - ld) - lj) / (lm - lj), aO.mI(lh + mS * (lk - lh), at.a1 / 2), aO.mJ(li + mS * (ll - li), at.jF / 2), ab.zoom(eb, (mO *
				eb - i6) / (1 - eb), (mP * eb - i8) / (1 - eb)), bW.mK(), 1 <= ld && (lp = !1, bX.mT = !0), bb.dc = !0)
	}
}

function bu() {
	var et = b6.color;
	this.mU = et.mV(0, 0, 0), this.mW = et.mX(0, 0, 0, .7), this.mY = et.mX(0, 0, 0, .5), this.mZ = et.mX(0, 0, 0, .85), this.ma = et.mX(0, 0, 0, .75), this.mb = et.mX(0, 0, 0, .6), this.mc = et.mX(0, 0, 0, .35), this.md = et.mV(255, 255, 255), this
		.me = et.mX(255, 255, 255, .3), this.mf = et.mX(255, 255, 255, .6), this.mg = et.mX(255, 255, 255, .4), this.mh = et.mX(255, 255, 255, .25), this.mi = et.mX(255, 255, 255, .85), this.mj = et.mX(255, 255, 255, .75), this.mk = et.mX(255, 255,
			255, .15), this.ml = et.mX(255, 255, 255, .11), this.mm = et.mV(128, 128, 128), this.mn = et.mX(64, 64, 64, .75), this.mo = et.mX(88, 88, 88, .83), this.mp = et.mX(60, 60, 60, .85), this.mq = et.mX(80, 60, 60, .85), this.mr = et.mV(170,
			170, 170), this.ms = et.mV(200, 235, 245), this.mt = et.mV(30, 255, 30), this.mu = et.mV(0, 200, 0), this.mv = et.mV(128, 255, 128), this.mw = et.mX(10, 65, 10, .75), this.mx = et.mX(0, 255, 0, .6), this.my = et.mX(0, 255, 0, .5), this
		.mz = et.mX(0, 200, 0, .5), this.n0 = et.mX(0, 100, 0, .75), this.n1 = et.mX(0, 60, 0, .8), this.n2 = et.mX(0, 255, 0, .3), this.n3 = et.mX(0, 180, 0, .6), this.n4 = et.mX(0, 120, 0, .85), this.n5 = et.mV(0, 120, 0), this.n6 = et.mX(0, 70, 0,
			.85), this.n7 = et.mV(190, 230, 190), this.n8 = et.mV(0, 255, 0), this.n9 = et.mV(255, 120, 120), this.nA = et.mV(255, 160, 160), this.nB = et.mV(255, 70, 70), this.nC = et.mV(230, 0, 0), this.nD = et.mX(220, 0, 0, .6), this.nE = et.mX(
			255, 100, 100, .8), this.nF = et.mX(100, 0, 0, .85), this.nG = et.mX(60, 0, 0, .85), this.nH = et.mX(200, 0, 0, .6), this.nI = et.mX(120, 0, 0, .85), this.nJ = et.mV(255, 70, 10), this.nK = et.mV(230, 190, 190), this.nL = et.mV(255, 0,
		0), this.nM = et.mV(255, 0, 255), this.nN = et.mX(60, 0, 60, .85), this.nO = et.mX(0, 60, 60, .85), this.nP = et.mX(10, 60, 60, .9), this.nQ = et.mX(0, 96, 96, .75), this.nR = et.mV(0, 255, 255), this.nS = et.mV(160, 160, 255), this.nT = et
		.mX(0, 40, 90, .75), this.nU = et.mX(0, 0, 255, .6), this.nV = et.mV(200, 200, 255), this.nW = et.mV(255, 120, 100), this.nX = et.mX(255, 255, 0, .5), this.nY = et.mX(255, 255, 150, .2), this.nZ = et.mV(255, 255, 0), this.na = et.mV(255, 255,
			200), this.nb = et.mX(200, 200, 0, .6), this.nc = et.mX(140, 120, 0, .75), this.nd = et.mX(180, 160, 40, .75), this.ne = et.mX(70, 50, 20, .85), this.nf = et.mX(30, 30, 0, .85), this.ng = et.mX(60, 60, 0, .85), this.nh = et.mX(255, 140,
			0, .75), this.ni = et.mX(70, 40, 0, .85), this.nj = et.mV(255, 150, 0), this.nk = et.mX(0, 0, 0, 0), this.nl = et.mX(255, 255, 255, 0), this.nm = et.mX(254, 254, 254, 0)
}

function cr() {
	this.gv = new nn, this.fu = new no, this.np = new nq, this.nr = new ns, this.jp = new nt
}

function nn() {
	this.gw = function(eK) {
		a9.k5 ? b4.np.gw(a9.eI, eK) : aw.nu.nv(eK)
	}, this.h6 = function(i5, iw) {
		a9.k5 ? b4.np.h6(a9.eI, i5, iw) : aw.nu.nw(i5, iw)
	}, this.nx = function(i5, ny) {
		a9.k5 ? b4.np.nz(a9.eI, i5, ny) : aw.nu.o0(i5, ny)
	}, this.h4 = function(i5, eK) {
		a9.k5 ? b4.np.h4(a9.eI, i5, eK) : bJ.h2.h3(a9.eI, eK) && aw.nu.o1(i5, eK)
	}, this.o2 = function(lz, eK) {
		a9.k5 ? b4.np.o2(a9.eI, lz, eK) : bJ.h2.o3(a9.eI, lz, eK) && aw.nu.o4(lz, eK)
	}, this.o5 = function(iw) {
		a9.k5 ? b4.np.o5(a9.eI, iw) : aw.nu.o6(iw)
	}, this.o7 = function(o8) {
		a9.k5 ? b4.np.o9(a9.eI, o8) : aw.nu.oA(o8)
	}, this.oB = function(oC) {
		a9.k5 ? b4.np.oB(a9.eI, oC) : aw.nu.oD(oC)
	}, this.oE = function() {
		a9.k5 ? b4.np.oE(a9.eI) : aw.nu.oF()
	}, this.hF = function() {
		a9.k5 ? b4.np.hF(a9.eI) : aw.nu.o1(1, 0)
	}, this.gz = function(i5, eK, iw) {
		a9.k5 ? b4.np.gz(a9.eI, i5, eK, iw) : aw.nu.oG(i5, eK, iw)
	}
}

function nt() {
	this.jq = function(player, ny, hD) {
		b6.fu.oH(player, hD, ny) && (aa.nx(player, ny), ny < a9.jm) && au.random() < au.value(10) && (aj.iZ.ir[ny] = 0)
	}, this.oI = function(player, ny, hD) {
		b6.fu.oJ(hD, ny) ? (b6.fu.fx(ny, bK.f6[0]), bZ.oK(player, ny), ab.oL(ny, bK.f6[0])) : bZ.fy(player, hD, 12)
	}
}

function no() {
	this.oM = function(o8, player) {
		aJ.o7(a9.eI, player, o8), aw.nu.oN(o8, player)
	}, this.oO = function(player) {
		aJ.oP(player, 0), aw.nu.oQ(player)
	}, this.oR = function(oS, player) {
		aJ.oT(oS, player), aw.nu.oU(oS, player)
	}, this.oV = function() {
		a9.k5 || a9.gi || aw.oW.oV()
	}
}

function ns() {
	this.ie = function(a8) {
		var id, fG, mL;
		for (bD.dU(a8), bD.e0 += 2, mL = 8 * bD.size; bD.e0 + 8 <= mL;) id = bD.oX(4), fG = bD.oX(9), 0 === id ? this.oY(id, fG, bD.oX(22)) : 1 === id ? this.oY(id, fG, bD.oX(10), bD.oX(10)) : 2 === id ? this.oY(id, fG, bD.oX(10), bD.oX(9)) :
			3 === id || 4 === id ? this.oY(id, fG, bD.oX(10), bD.oX(22)) : 5 === id || 6 === id ? this.oY(id, fG, bD.oX(10)) : 7 === id ? this.oY(id, fG, bD.oX(1)) : 10 === id ? this.oY(id, fG, bD.oX(20), bD.oX(22)) : this.oY(id, fG)
	}, this.oZ = [], this.oa = function() {
		for (var oc = 0, od = 0, oe = 0, og = 0, oh = 0, oi = 0, a7 = 0; a7 < 512; a7++) oc += ac.la[a7], od += ac.gM[a7], oe += ac.ga[a7], og += bJ.s.oj[a7];
		oh += bJ.s.ok, oi += ah.jn, this.oZ.push(oe % 1073741824 * 4 + (oc + od + og + oh + oi) % 4)
	}, this.oY = function(id, fG, fI, fK) {
		0 === id ? b4.np.gw(fG, fI) : 1 === id ? b4.np.h6(fG, fI, fK) : 2 === id ? b4.np.nz(fG, fI, fK) : 3 === id ? b4.np.h4(fG, fI, fK) : 4 === id ? b4.np.o2(fG, fI, fK) : 5 === id ? b4.np.o5(fG, fI) : 6 === id ? b4.np.o9(fG, fI) : 7 === id ?
			b4.np.oB(fG, fI) : 8 === id ? b4.np.oE(fG) : 9 === id ? b4.np.ol(fG) : 10 === id && b4.np.gz(fG, fI >> 10, fK, fI % 1024)
	}
}

function nq() {
	this.gw = function(player, eK) {
		b6.fu.gk(0) && b6.fu.gl(player) && bI.iA(eK) && (b5.om.on(0, player, eK), a9.oo.it(player, eK))
	}, this.h6 = function(player, i5, iw) {
		b6.fu.gk(1) && b6.fu.gl(player) && b6.fu.op(player, iw) && b6.fu.oq(player, i5, 12, 0) && b6.fu.or(player, iw) && ((iw = aZ.j7(player, bK.eU[0])) || aZ.jQ(player)) && (ac.os[player]++, b5.om.on(1, player, i5, bK.eU[0]), aj.iX.ij(player,
			iw)) && (b6.fu.ot(player), bZ.ou(player, i5), aj.iX.iq(player))
	}, this.nz = function(player, i5, ny) {
		b6.fu.gk(1) && b6.fu.gl(player) && a9.hL && b6.fu.op(player, ny) && b6.fu.ov(player, ny) && b6.fu.oH(player, b6.fu.i4(player, i5), ny) && (b5.om.on(2, player, i5, ny), aa.nx(player, ny))
	}, this.h4 = function(player, i5, eK) {
		b6.fu.gk(1) && b6.fu.gl(player) && (0 === eK && 1 === i5 ? this.hF(player) : bI.iA(eK) && bJ.s.ok !== bJ.s.k0 && bJ.s.oj[player] !== bJ.s.ow && 0 !== ac.gF[player].length && b6.fu.oq(player, i5, 32, 0) && bJ.kO.kP(player, eK) && (bZ.ox(
			player), b5.om.on(3, player, i5, eK), b6.fu.ot(player), bi.oy.h4(player), bJ.s.oz(player)))
	}, this.o2 = function(player, lz, eK) {
		b6.fu.gk(1) && b6.fu.gl(player) && bI.iA(eK) && bJ.h2.p0(player, lz) && bJ.kO.p1(eK) && (b5.om.on(4, player, lz, eK), b6.fu.p2(player, 8), bZ.fy(player, bK.f6[1], 12), bi.oy.o2(player), bJ.s.o2())
	}, this.o5 = function(player, iw) {
		b6.fu.gk(1) && b6.fu.gl(player) && (iw = Math.min(iw, a9.eV), aZ.j7(player, iw)) && (b5.om.on(5, player, iw), aZ.p3(player, iw))
	}, this.o9 = function(player, o8) {
		(b6.fu.gk(1) || b6.fu.gk(2)) && b6.fu.gl(player) && (o8 = bH.p4(o8, 0, 1023), b5.om.on(6, player, o8), ab.p5(player, 0, o8))
	}, this.oB = function(player, oC) {
		b6.fu.gk(1) && b6.fu.gl(player) && (b5.om.on(7, player, oC), aq.p6(player, oC))
	}, this.oE = function(player) {
		(b6.fu.gk(0) || b6.fu.gk(1)) && b6.fu.gl(player) && aI.p7(player) && (b5.om.on(8, player), bM.oE(player))
	}, this.ol = function(player) {
		b5.om.on(9, player), bM.ol(player)
	}, this.hF = function(player) {
		aq.hG(player) && (b5.om.on(3, player, 1, 0), aq.hF(player))
	}, this.gz = function(player, i5, eK, iw) {
		b6.fu.gk(1) && b6.fu.gl(player) && b6.fu.op(player, iw) && b6.fu.or(player, iw) && bI.iA(eK) && ai.e9.eS(player, eK) && (aZ.j7(player, bK.eU[0]) || aZ.jQ(player)) && (b5.om.on(10, player, (i5 << 10) + bK.eU[0], eK), iw = b6.fu.km(player,
			i5), ac.g0[player].push(bK.eZ[0]), aZ.it(player, iw, bK.eU[0]), aB.iu(player, !0), bZ.p8(player))
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
		for (var pM = pL.pM, eY = pM.length, a7 = 0; a7 < eY; a7++) this.pB.appendChild(pM[a7])
	}, this.pN = function(pO) {
		return this.pA.push(pO), this.pB.appendChild(pO.e), pO
	}, this.resize = function() {
		for (var eY = this.pA.length, a7 = 0; a7 < eY; a7++) this.pA[a7].resize && this.pA[a7].resize()
	}, (pB = this.pB).style.position = "absolute", pB.style.height = "auto", pB.style.padding = "0.5em"
}

function pP(pQ, pR) {
	var pB = document.createElement("div");

	function pa() {
		var a7, pb, jF, g7, eb, pV = at.pc * pB.offsetWidth,
			pd = new Float64Array(function(pV) {
				var a1 = .25 * b6.pW.pX(.6) * at.pY;
				return Math.max(Math.floor(pV / a1), 1)
			}(pV)),
			pe = bY.pe,
			pf = (pV - (pd.length + 1) * bY.gap) / (pd.length * at.pc);
		for (pd.fill(pe), a7 = 0; a7 < pR.length; a7++) pb = (eb = pR[a7].pB).style, jF = b6.pg.min(pd), g7 = pd.indexOf(jF), pb.top = b6.pW.ph(jF), pb.left = b6.pW.ph(pe + g7 * (pf + pe)), pb.width = b6.pW.ph(pf), b6.pW.pi(eb, 5), pd[g7] += eb
			.offsetHeight + 3 * pe;
		pB.style.height = b6.pW.ph(b6.pg.max(pd) - 2 * pe)
	}
	this.pS = pB, this.pT = pR, this.resize = function() {
		var a7;
		for (a7 = 0; a7 < pR.length; a7++) pR[a7].resize();
		pa(), pa()
	}, pB.style.width = "100%", pB.style.maxWidth = "100%", pQ.style.lineHeight = "1.5em", pQ.style.overflowX = "hidden", pQ.style.overflowY = "auto";
	for (var a7 = 0; a7 < pR.length; a7++) pB.appendChild(pR[a7].pB);
	pQ.appendChild(pB)
}

function q(pj, pk, pl, pm, pn) {
	var self, po = document.createElement("button");

	function pv() {
		var q1;
		bF.q0() || (q1 = b6.color.q2(pl), !1 !== pm && 0 < q1[0] && q1[0] < 255 && q1[0] === q1[1] && q1[0] === q1[2]) || (po.style.backgroundColor = b6.color.q3(pl, q1[3] && q1[3] < 120 ? 150 : 50))
	}

	function pu() {
		if (pm) {
			var q1 = b6.color.q2(pl);
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
		et ? 1 === et ? et = b7.mp : 2 === et && (pm = 1, et = b7.mp) : (pm = 0, et = b7.mZ), this.pq = pl = et, po.style.backgroundColor = et
	}, self = this, po.innerHTML = pj, po.style.color = pn ? b7.nZ : b7.md, po.style.userSelect = "none", po.style.outline = "none", po.style.overflowWrap = "break-word", self.ps(pl), po.style.border = "none", po.style.font = "inherit", self.pt(
		0), po.style.padding = "0em 0.3em", po.onclick = pu, po.addEventListener("mouseover", pv), po.addEventListener("mouseout", pw), po.addEventListener("focus", pv), po.addEventListener("blur", px)
}

function q6(q7, pQ) {
	var pB;
	this.resize = function() {
		for (var a7 = 0; a7 < q7.length; a7++) b6.pW.pi(q7[a7].button);
		pB.style.gap = pB.style.padding = b6.pW.ph(bY.pe)
	}, (pB = document.createElement("div")).style.display = "grid", pB.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", pB.style.overflowY = "auto", pB.style.gridAutoRows = "5.3em", pB.style.maxHeight = "100%";
	for (var a7 = 0; a7 < q7.length; a7++) q7[a7].pt(1), pB.appendChild(q7[a7].button);
	pQ.appendChild(pB)
}

function q9(qA, qB, qC) {
	this.ef = 0, this.eh = 0, this.a1 = 0, this.jF = 0, this.resize = function() {
		this.jF = Math.min(b6.pW.pX(qC || .5) * qA[1] * at.pY, at.jF - 2 * bY.gap), this.a1 = Math.min(this.jF * (qA[0] / qA[1]), at.a1 - 2 * bY.gap), this.jF = qA[1] * this.a1 / qA[0], this.ef = bY.gap + qB[0] * (at.a1 - this.a1 - 2 * bY.gap),
			this.eh = bY.gap + qB[1] * (at.jF - this.jF - 2 * bY.gap)
	}, this.qD = function() {
		return this.ef + .5 * this.a1
	}
}

function qE(qF, qG) {
	var qP, self, qH = document.createElement("div"),
		qI = document.createElement("div"),
		qJ = document.createElement("div"),
		qK = null,
		qQ = (this.qL = new qM({
			value: "",
			e0: -1
		}, 0, qN, function(e) {
			qK.qX.textContent = 127 - e.target.value.length
		}), 0),
		qR = 1,
		qS = 0,
		qT = 1048575,
		qU = [];

	function qN() {
		qF(), qK.qX.textContent = 127
	}

	function qm(bo) {
		qR ? qH.scrollTop = qH.scrollHeight : bo && (qH.scrollTop = qS)
	}

	function qi(qh, pO) {
		var qn, pB;
		pO && (qn = 0 < pO.id, (pB = document.createElement("div")).style.margin = "0.6em 0.6em", qn && (pB.style.paddingLeft = "0.7em"), pB.style.font = "inherit", pB.style.marginLeft = pB.style.marginRight = "inherit", pB.style.fontSize = pO
			.fontSize.toFixed(2) + "em", qn && (pB.style.fontStyle = "italic"), 0 < pO.qo.length && pO.qo[0] && pB.appendChild(qp(pO.qo[0], 14 === pO.id)), pB.appendChild(qq(pO.qr[0])), 2 === pO.qo.length && pB.appendChild(qp(pO.qo[1], 1)), 2 ===
			pO.qr.length && pB.appendChild(qq(pO.qr[1])), qh.appendChild(pB))
	}

	function qp(qo, qs) {
		if (qo.qt) {
			for (var a7 = qU.length - 1; 0 <= a7; a7--)
				if (qo.qu === qU[a7].qu) {
					qo = qU[a7], a7 < 40 && qU.push(qo);
					break
				}
		} else qU.push(qo), 50 < qU.length && qU.shift();
		var qX = document.createElement("span");
		return qX.textContent = bk.qj.qv(qo, bk.s.qb[0], qs), qX.style.display = "inline-block", qX.style.color = bk.qj.qw(qo.qx), qX.style.cursor = "pointer", qX.style.margin = "0", qX.style.font = "inherit", qX.style.minWidth = qX.style.minHeight =
			"1em", bk.qj.qy(qo) && (qX.style.textDecoration = "underline"), bk.qj.qz(qo.r0) && (qX.style.fontWeight = "bold"), qX.onclick = function(e) {
				qG(e, qo)
			}, bF.q0() || (qX.onmouseover = function(e) {
				bk.r1.r2(e, qo)
			}), qX
	}

	function qq(qr) {
		var qX = document.createElement("span");
		return qX.textContent = qr.pD, qX.style.color = qr.color, qX.style.margin = "0", qX.style.font = "inherit", qr.r3 && (qX.style.fontWeight = "bold"), qX
	}
	this.qY = function(qZ) {
			qT = 1048575, qI.textContent = "", qZ || this.lN()
		}, this.lN = function() {
			var qa = bk.s.qb[0],
				qc = bk.s.qd[qa],
				qe = qc.qe,
				eY = qe.length,
				j2 = 1048575 === qT ? 0 : eY - (qc.qf - qT + 1048575) % 1048575,
				kU = (qT = qc.qf, j2 = Math.max(j2, 0), bk.s.qg.length);
			if (!(eY <= j2 && 0 === kU)) {
				for (var qh = document.createDocumentFragment(), a7 = 0; a7 < kU; a7++) qi(qh, bk.qj.qk(bk.s.qg[a7]));
				for (bk.s.qg = [], a7 = j2; a7 < eY; a7++) qi(qh, bk.qj.ql(qa, qe[a7]));
				qI.appendChild(qh), qm()
			}
		}, this.show = function(pQ) {
			pQ.appendChild(qH), pQ.appendChild(qJ), this.resize(pQ)
		}, this.r4 = function(pQ) {
			pQ.removeChild(qH), pQ.removeChild(qJ)
		}, this.resize = function(pQ) {
			qQ = pQ ? pQ.offsetHeight : qQ;
			var pQ = b6.pW.r6(.04, .75),
				r7 = Math.max(pQ, qQ - pQ),
				r8 = at.a1 / at.pc,
				r9 = .7 * r8,
				r7 = (qJ.style.top = b6.pW.ph(qQ - pQ), qJ.style.height = b6.pW.ph(pQ), qH.style.top = b6.pW.ph(qQ - pQ - r7), qH.style.height = b6.pW.ph(r7), b6.pW.pi(qH, 2), this.qL.e.style.width = b6.pW.ph(r9), this.qL.e.style.fontSize = qP.button
					.style.fontSize = b6.pW.ph(.5 * pQ), b6.pW.pi(this.qL.e, 6), qP.button.style.left = b6.pW.ph(r9), qP.button.style.width = b6.pW.ph(r8 - r9), .385 * pQ);
			u.v.rB() && (r7 *= .8 - .12 * (at.a1 > at.jF)), qI.style.marginLeft = qI.style.marginRight = b6.pW.ph(.5 * r7), qI.style.fontSize = b6.pW.ph(r7), qm(1)
		}, (self = this).qL.e.qV = 127, qH.style.position = "absolute", qH.style.top = "0", qH.style.left = "0", qH.style.width = "100%", qH.style.overflowX = "hidden", qH.style.overflowY = "auto", qH.style.font = "inherit", qH.style
		.backgroundColor = b7.mb, qH.addEventListener("scroll", function() {
			qS = qH.scrollTop, qR = qS < qH.scrollHeight - qH.clientHeight - 2 ? 0 : 1
		}), qI.style.font = "inherit", qJ.style.position = "absolute", qJ.style.left = "0", qJ.style.width = "100%", self.qL.e.setAttribute("placeholder", L(13)), self.qL.e.style.position = "absolute", self.qL.e.style.top = "0", self.qL.e.style
		.left = "0", self.qL.e.style.height = "100%", self.qL.e.style.backgroundColor = b7.mY, self.qL.e.style.textAlign = "center", (qP = new q(L(14), qN)).button.top = "0", qP.button.style.position = "absolute", qP.button.style.height = "100%", qP
		.ps(b7.nl), qK = new qW("127", qP.button, 1, 1), qH.appendChild(qI), qJ.appendChild(self.qL.e), qJ.appendChild(qP.button)
}

function rC(rD, pj, rE) {
	function click() {
		var value = 1 - rD.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + pj, void 0 !== rD.e0 ? bf.rF.rG(rD.e0, value) : rD.value = value, rE && rE(value)
	}
	var e;
	pj = pj || L(15), this.e = document.createElement("p"), (e = this.e).textContent = (rD.value ? "🟩 " : "⬜ ") + pj, e.style.margin = "0", e.style.marginBottom = "0.5em", e.style.cursor = "pointer", e.addEventListener("click", click)
}

function rH(pQ, pJ) {
	var pB = document.createElement("div");
	this.pS = pB, this.resize = function() {
		pB.style.padding = b6.pW.ph(bY.pe), pB.style.lineHeight = b6.pW.ph(b6.pW.r6(.035))
	}, pQ.style.overflowX = "hidden", pQ.style.overflowY = "auto", pB.innerHTML = pJ, pQ.appendChild(pB)
}

function rI(rJ) {
	var pB = document.createElement("div");
	this.e = pB, this.rK = rJ, this.resize = function() {
		for (var eY = rJ.length, a7 = 1; a7 < eY; a7++) b6.pW.pi(rJ[a7], 4)
	};
	var a7, eY = rJ.length;
	for (pB.style.width = "100%", pB.style.height = "2.7em", pB.style.marginTop = "0.6em", pB.style.border = "inherit", a7 = 0; a7 < eY; a7++) rJ[a7].style.verticalAlign = "top", rJ[a7].style.width = (100 / eY).toFixed(2) + "%", rJ[a7].style.height =
		"100%", rJ[a7].style.fontSize = "0.75em", pB.appendChild(rJ[a7])
}

function rL(rM, pl, rN) {
	this.pB = document.createElement("div"), this.q7 = rM;
	var rO = 0;
	this.resize = function(pQ, rQ) {
		var eY = rM.length;
		if (!rN)
			for (var a7 = 1; a7 < eY; a7++) b6.pW.pi(rM[a7].button, 4);
		for (var rR = 0, a7 = 0; a7 < eY; a7++) rR += rM[a7].button.offsetWidth;
		if (pQ && (rO = pQ.offsetWidth), rQ && rR < rO)
			for (a7 = 0; a7 < eY; a7++) rM[a7].button.style.width = (100 * rM[a7].button.offsetWidth / rR).toFixed(2) + "%";
		else
			for (a7 = 0; a7 < eY; a7++) rM[a7].button.style.width = "auto";
		rQ || this.resize(pQ, 1)
	};
	var rP = this;
	rP.pB.style.height = rP.pB.style.maxHeight = "100%";
	for (var a7 = 0; a7 < rM.length; a7++) rM[a7].ps(pl), rM[a7].button.style.height = "100%", rM[a7].button.style.padding = "0.0em 0.9em", rP.pB.appendChild(rM[a7].button)
}

function rS() {
	var e;
	this.e = document.createElement("hr"), this.resize = function() {
		b6.pW.pi(this.e, 8, b7.mm)
	}, (e = this.e).style.marginBottom = e.style.marginTop = "0.65em", e.style.marginLeft = e.style.marginRight = "-4%", e.style.border = "none"
}

function rT() {
	var rU = document.createElement("div"),
		rV = 0,
		rW = 0;
	this.show = function(ef, eh, pD, rX) {
		if (rV) {
			if (!rX) return;
			this.r4()
		}
		rW = rX, rV = 1, rU.textContent = pD, b6.pW.pi(rU, 5), rU.style.font = b6.pW.rY(0, b6.pW.r6(.015)), rU.style.padding = "0.3em 0.6em", rU.style.left = ef + "px", rU.style.top = eh - b6.pW.r6(.036) + "px", document.body.appendChild(rU), rU
			.style.top = eh - rU.offsetHeight + rW * bY.rZ + "px";
		rX = ef + rU.offsetWidth - at.a1 / at.pc;
		0 < rX && (rU.style.left = ef - rX + "px")
	}, this.r4 = function(ra) {
		!rV || ra && rW || (rV = 0, document.body.removeChild(rU))
	}, rU.style.position = "absolute", rU.style.backgroundColor = b7.mZ, rU.style.color = b7.md, rU.style.whiteSpace = "pre", rU.style.pointerEvents = "none"
}

function qM(rb, type, rc, rd) {
	var e;
	this.e = document.createElement("input"), (e = this.e).type = type ? "number" : "text", e.id = "input" + n.s.re++, e.value = rb.value, e.style.width = "100%", e.style.userSelect = "none", e.style.outline = "none", e.style.resize = "none", e.style
		.border = "inherit", e.style.font = "inherit", e.style.color = b7.md, e.style.backgroundColor = b7.mW, e.style.fontSize = "1em", e.style.padding = "0.1em 0.2em", e.addEventListener("focus", function() {
			at.rf++
		}), e.addEventListener("blur", function() {
			at.rf--, -1 !== rb.e0 && bf.rF.rG(rb.e0, e.value)
		}), e.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== rb.e0 && bf.rF.rG(rb.e0, e.value), rc ? rc() : e.blur())
		}), rd && e.addEventListener("input", function(pO) {
			rd(pO)
		})
}

function rg(pQ, data) {
	var eY = data.rh.length,
		ri = document.createElement("div"),
		rj = document.createElement("div"),
		rk = document.createElement("div"),
		rl = new Array(eY),
		pR = new Array(eY),
		rm = new Array(data.rn.length),
		ro = b6.color.mX(70, 70, 0, .35);

	function q3() {
		this.style.backgroundColor = b6.color.q3(ro, 160)
	}

	function rt() {
		this.style.backgroundColor = ro
	}

	function pa() {
		var er;
		for (pQ.style.font = b6.pW.rY(0, b6.pW.s2(.026, .5, .03)), a7 = 1; a7 < rm.length; a7++) b6.pW.pi(rm[a7], 4);
		if (b6.pW.pi(ri, 2), eY) {
			for (var gy, s3 = ri.offsetWidth, s4 = rk.offsetWidth, a7 = 0; a7 < rm.length; a7++) gy = .01 * data.rs[a7] * s4, rm[a7].style.width = (100 * gy / s3).toFixed(2) + "%";
			var kU = data.rh[0].length;
			for (a7 = 0; a7 < eY; a7++)
				for (b6.pW.pi(rl[a7], 2), er = 1; er < kU; er++) b6.pW.pi(pR[a7][er], 4);
			rj.rp && (rj.scrollTop = rj.rp)
		}
	}
	this.resize = function() {
			pa(), pa()
		}, pQ.style.display = "flex", pQ.style.flexDirection = "column", rj.style.overflowX = "hidden", rj.style.overflowY = "auto", rj.addEventListener("scroll", function() {
			this.rp = this.scrollTop
		}),
		function() {
			var eb, a7, rh = data.rh,
				kU = eY ? rh[0].length : 0;
			for (a7 = 0; a7 < eY; a7++) {
				rl[a7] = document.createElement("div"), rl[a7].style.backgroundColor = function(a7) {
					return a7 % 2 == 1 ? b6.color.mX(130, 130, 130, .35) : b7.mc
				}(a7), rl[a7].style.width = "100%", rl[a7].style.display = "flex", pR[a7] = new Array(kU);
				for (var er = 0; er < kU; er++) pR[a7][er] = eb = document.createElement("div"), eb.style.display = "flex", eb.style.justifyContent = "center", eb.style.wordBreak = "break-all", eb.style.padding = "0.4em 0em", eb.style.width = data
					.rs[er] + "%", eb.innerHTML = rh[a7][er].f0, 1 === rh[a7][er].dk && (eb.name = "" + a7, eb.style.color = b7.nZ, eb.style.backgroundColor = ro, eb.addEventListener("mouseover", q3), eb.addEventListener("mouseout", rt), function(eb,
						qu, rv) {
						2147483647 !== rv && eb.addEventListener("click", function() {
							b9.a3(30), b9.a4(30, qu), bD.dU(b9.a8), this.style.backgroundColor = ro, n.o(8, n.rw, new rx(25, {
								ry: 0,
								qu: bB.rz.s0(bB.rz.s1(5)),
								rv: rv
							}))
						})
					}(eb, rh[a7][er].qu, rh[a7][er].rv)), rl[a7].appendChild(eb)
			}
			for (ri.style.display = "flex", ri.style.backgroundColor = b6.color.mX(0, 120, 0, .35), a7 = 0; a7 < rm.length; a7++) rm[a7] = eb = document.createElement("div"), eb.style.display = "flex", eb.style.justifyContent = "center", eb.style
				.wordBreak = "break-all", eb.style.padding = "0.4em 0em", eb.style.width = data.rs[a7] + "%", eb.innerHTML = data.rn[a7], ri.appendChild(eb)
		}();
	for (var a7 = 0; a7 < eY; a7++) rk.appendChild(rl[a7]);
	rj.appendChild(rk), pQ.appendChild(ri), pQ.appendChild(rj)
}

function s5() {
	var s9, sA, s6 = document.createElement("div"),
		s7 = document.createElement("div"),
		s8 = document.createElement("div"),
		rk = document.createElement("div"),
		q7 = [],
		sB = [L(16), L(17), L(18), L(19), L(20), L(21)],
		sC = [1, 2, 3, 0, 9, 10];

	function sE(a7) {
		n.o(8, 0, new rx(21, {
			sG: sC[a7],
			sH: 0,
			sI: 10
		}))
	}
	this.show = function() {
			this.rG(n.s.sJ), document.body.appendChild(s6)
		}, this.r4 = function() {
			document.body.removeChild(s6)
		}, this.rG = function(sJ) {
			for (var sK = [3, 0, 1, 2, 4, 5], a7 = 0; a7 < q7.length; a7++) {
				var a1 = sJ[a7];
				s9[sK[a7]][1].qX.textContent = a1 || ""
			}
		}, this.resize = function() {
			var a7, sL = bY.gap,
				jF = b6.pW.sM(.085),
				a1 = Math.min(4 * jF, at.a1 - 2 * sL),
				eY = q7.length;
			for (b6.pW.sN(s6, sL, at.jF - sL - jF, a1, jF), b6.pW.pi(s6), b6.pW.pi(s7, 6), a7 = 0; a7 < eY - 1; a7++) b6.pW.pi(q7[a7].button, 6);
			for (a7 = 0; a7 < eY; a7++) s9[a7][0].resize();
			for (q7[0].ef = 0, q7[0].button.style.left = b6.pW.ph(q7[0].ef), q7[0].button.style.width = b6.pW.ph(100), a7 = 1; a7 < eY; a7++) q7[a7].ef = q7[a7 - 1].ef + q7[a7 - 1].button.offsetWidth, q7[a7].button.style.left = b6.pW.ph(q7[a7].ef);
			if (!sA) {
				if (!aX.sO()) return;
				(sA = aX.get(14)).style.width = "24%", sA.style.position = "absolute", s7.appendChild(sA)
			}
			sA.style.left = b6.pW.ph(0), sA.style.top = "7%", s8.sP && (s8.scrollLeft = s8.sP)
		}, s6.style.position = "absolute", s7.style.width = "25%", s7.style.height = "100%", s7.style.backgroundColor = b7.mZ, s8.style.position = "absolute", s8.style.width = "75%", s8.style.height = "100%", s8.style.backgroundColor = b7.mZ, s8
		.style.top = s8.style.right = b6.pW.ph(0), b6.pW.sD(s8), rk.style.height = rk.style.maxHeight = "100%", q7.push(new q("", function() {
			sE(0)
		}, b7.nN)), q7.push(new q("", function() {
			sE(1)
		}, b7.nO)), q7.push(new q("", function() {
			sE(2)
		}, b7.nG)), q7.push(new q("", function() {
			sE(3)
		}, b7.n1)), q7.push(new q("", function() {
			sE(4)
		}, b7.ni)), q7.push(new q("", function() {
			sE(5)
		}, b7.ng)), s9 = new Array(q7.length);
	for (var a7 = 0; a7 < q7.length; a7++) q7[a7].button.style.position = "absolute", s9[a7] = [new sF(sB[a7], q7[a7].button, .25, .45), new sF("", q7[a7].button, .53, .84, 1)], q7[a7].button.style.height = q7[a7].button.style.maxHeight = "100%", q7[
		a7].button.top = b6.pW.ph(0), rk.appendChild(q7[a7].button);
	s8.appendChild(rk), s6.appendChild(s7), s6.appendChild(s8)
}

function sQ(sR, sS, sT, sU, qF, qG) {
	var sV = document.createElement("div"),
		sW = document.createElement("div"),
		sX = document.createElement("div"),
		sY = document.createElement("div"),
		sZ = document.createElement("div"),
		sa = document.createElement("div"),
		sb = document.createElement("div"),
		sc = document.createElement("div"),
		sd = document.createElement("span"),
		se = document.createElement("div");
	this.sf = new qE(qF, qG), this.sg = new sh(qG), this.si = [sR, sS, sT, sU], this.sm = function(sn) {
		sn = (sn / 10).toFixed(1) + "%";
		sc.style.width = sn, sd.innerHTML = sn
	}, this.so = function() {
		this.sg.r4(sa), this.sf.show(sa)
	}, this.sp = function() {
		this.sf.r4(sa), this.sg.show(sa)
	}, this.sq = function() {
		return sW
	}, this.show = function() {
		document.body.appendChild(sV)
	}, this.r4 = function() {
		document.body.removeChild(sV)
	}, this.resize = function(sr) {
		var ss = 1 - .4 * u.v.rB() * (at.a1 > 1.6 * at.jF),
			st = b6.pW.r6(.05 * ss),
			su = at.jF > at.a1,
			sv = b6.pW.r6(.07 * ss + .03 * su),
			sw = b6.pW.r6(.04 + .02 * su),
			su = b6.pW.r6(.02 * ss + .01 * su),
			sy = b6.pW.r6(.025);
		sV.style.font = b6.pW.rY(0, sy), ss < 1 && (sy = b6.pW.rY(0, ss * sy), sX.style.font = sy, sZ.style.font = sy, se.style.font = sy, sb.style.font = sy, sY.style.font = sy), sW.style.height = b6.pW.ph(st), sW.style.font = b6.pW.rY(0, .72 *
				st), b6.pW.pi(sW, 2), sX.style.top = b6.pW.ph(st), sX.style.height = b6.pW.ph(sv), b6.pW.pi(sX, 2), sY.style.font = b6.pW.rY(0, ss * b6.pW.r6(.02)), sY.style.top = b6.pW.ph(st + sv), sY.style.height = b6.pW.ph(sw), b6.pW.pi(sY,
			2), sZ.style.top = b6.pW.ph(st + sv + sw), sZ.style.height = b6.pW.ph(sv), b6.pW.pi(sZ, 2), sa.style.top = b6.pW.ph(st + sv + sw + sv), sa.style.height = b6.pW.ph(at.jF / at.pc - st - 3 * sv - sw - su), sb.style.top = b6.pW.ph(at.jF /
				at.pc - sv - su), sb.style.height = b6.pW.ph(su), b6.pW.pi(sb, 8), sd.style.font = b6.pW.rY(0, .8 * su), se.style.top = b6.pW.ph(at.jF / at.pc - sv), se.style.height = b6.pW.ph(sv), b6.pW.pi(se, 8), sR.resize(sX), sS.resize(sX),
			sT.resize(sX), sU.resize(sX), sr ? this.sf.resize(sa) : this.sg.resize()
	};
	qF = this;
	sV.style.position = "absolute", sV.style.top = "0", sV.style.left = "0", sV.style.width = "100%", sV.style.height = "100%", sV.style.backgroundColor = b7.mc, bF.q0() || (sV.style.backdropFilter = "blur(4px)", sV.style.webkitBackdropFilter =
		"blur(4px)"), sW.style.position = "absolute", sW.style.top = "0", sW.style.left = "0", sW.style.width = "100%", sW.style.display = "flex", sW.style.alignItems = "center";
	for (var g = [sX, sY, sZ, se], a7 = 0; a7 < g.length; a7++) g[a7].style.position = "absolute", g[a7].style.left = "0", g[a7].style.width = "100%", b6.pW.sD(g[a7]);
	sa.style.position = "absolute", sa.style.left = "0", sa.style.width = "100%", sa.style.font = "inherit", sb.style.position = "absolute", sb.style.left = "0", sb.style.width = "100%", sc.style.position = "absolute", sc.style.top = "0", sc.style
		.left = "0", sc.style.height = "100%", sc.style.width = "50%", sc.style.backgroundColor = b7.mz, sd.innerHTML = "", sd.style.position = "absolute", sd.style.top = "50%", sd.style.left = "50%", sd.style.transform = "translate(-50%, -50%)", sW
		.appendChild(function() {
			var sl = document.createElement("h1");
			return sl.textContent = L(22), sl.style.margin = "0 auto 0.15em auto", sl.style.webkitTextStroke = "0.02em brown", sl.style.fontFamily = "Arial Black, Trebuchet MS", sl.style.fontSize = "inherit", sl.style.fontWeight = "inherit", sl
		}()), sX.appendChild(sR.pB), sY.appendChild(sS.pB), sZ.appendChild(sT.pB), sb.appendChild(sc), sb.appendChild(sd), se.appendChild(sU.pB), sV.appendChild(sW), sV.appendChild(sX), sV.appendChild(sY), sV.appendChild(sZ), sV.appendChild(sa), sV
		.appendChild(sb), sV.appendChild(se), qF.sg.show(sa)
}

function sh(qG) {
	var sV = document.createElement("div"),
		sa = document.createElement("div");
	this.lN = function() {
			sa.textContent = "", bk.r1.r4(1);
			for (var qh = document.createDocumentFragment(), t0 = bk.s.qb[0], t1 = bk.t1.t2[t0], t3 = bk.t1.t3[t0], a7 = 0; a7 < t1.length; a7++) ! function(qh, pO, t5, t0) {
				var qX = document.createElement("span");
				qX.textContent = (t5 ? "🟢 " : "⚪ ") + bk.qj.qv(pO, t0), qX.style.color = bk.qj.qw(pO.qx), qX.style.cursor = "pointer", qX.style.margin = "0.2em 0.2em 0.2em 0.2em", qX.style.width = qX.style.maxWidth = 2 === t0 ? "10em" : "9em",
					qX.style.height = qX.style.maxHeight = "1.4em", qX.style.whiteSpace = "nowrap", qX.style.overflow = "hidden", qX.style.textOverflow = "ellipsis", qX.style.font = "inherit", qX.style.display = "inline-block", bk.qj.qy(pO) && (
						qX.style.textDecoration = "underline"), qX.onclick = function(e) {
						qG(e, pO)
					}, bF.q0() || (qX.onmouseover = function(e) {
						bk.r1.r2(e, pO)
					}), qh.appendChild(qX)
			}(qh, t1[a7], a7 < t3, t0);
			sa.appendChild(qh)
		}, this.show = function(pQ) {
			pQ.appendChild(sV)
		}, this.r4 = function(pQ) {
			pQ.removeChild(sV)
		}, this.resize = function() {
			sa.style.fontSize = b6.pW.ph(b6.pW.r6(.02, .3))
		}, sV.style.top = "0", sV.style.left = "0", sV.style.width = sV.style.height = "100%", sV.style.overflowX = "hidden", sV.style.overflowY = "auto", sV.style.font = "inherit", sa.style.font = "inherit", sa.style.margin = "0.4em", sV
		.appendChild(sa)
}

function t6(rM) {
	var sV = document.createElement("div"),
		t7 = document.createElement("div"),
		rV = (this.ef = 0, this.eh = 0);

	function t9() {
		bk.tA.r4()
	}
	this.q7 = rM, this.show = function(ef, eh, tC) {
		if (rV) return [0, 0];
		rV = 1, this.ef = ef, this.eh = eh,
			function(self, tC) {
				var a1 = b6.pW.r6(.16, .7),
					jF = rM.length * a1 / 3,
					tE = at.a1 / at.pc,
					tF = at.jF / at.pc,
					mF = Math.min(1, Math.min(tE / a1, tF / jF));
				a1 *= mF, jF *= mF, tC && (self.ef += b6.pW.r6(.03, .5)), self.ef = bH.p4(self.ef, 0, tE - a1), self.eh = bH.p4(self.eh, 0, tF - jF), t7.style.left = self.ef + "px", t7.style.top = self.eh + "px", t7.style.width = a1 + "px", t7
					.style.height = jF + "px", t7.style.font = b6.pW.rY(0, .34 * jF / rM.length), b6.pW.pi(t7, 5);
				for (var a7 = 1; a7 < rM.length; a7++) b6.pW.pi(rM[a7].button, 8)
			}(this, tC), document.body.appendChild(sV)
	}, this.r4 = function() {
		rV && (rV = 0, sV.removeEventListener("click", t9), document.body.removeChild(sV))
	};
	for (var a7 = 0; a7 < rM.length; a7++) new qW("" + (1 + a7), rM[a7].button, 0, 1);
	sV.style.position = "fixed", sV.style.top = "0", sV.style.left = "0", sV.style.width = "100%", sV.style.height = "100%", sV.style.zIndex = "5", t7.style.position = "absolute",
		function() {
			for (var tB = (100 / rM.length).toFixed(2) + "%", a7 = 0; a7 < rM.length; a7++) rM[a7].button.style.width = "100%", rM[a7].button.style.height = rM[a7].button.style.maxHeight = tB, rM[a7].button.style.padding = "0.0em 0.9em", t7
				.appendChild(rM[a7].button)
		}(), sV.appendChild(t7), sV.addEventListener("click", t9)
}

function tG(rb, tH) {
	this.pM = [];
	var tI = this.pM;

	function click() {
		for (var a7 = 0; a7 < tI.length; a7++) tI[a7].textContent = tI[a7].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var e0 = parseInt(this.name);
		void 0 !== rb.e0 && bf.rF.rG(rb.e0, e0), tH && tH(e0)
	}
	for (var tJ, eY = rb.tK.length, a7 = 0; a7 < eY; a7++)(tJ = document.createElement("p")).textContent = "⚪ " + rb.tK[a7], tJ.style.margin = "0", tJ.name = "" + a7, tJ.style.cursor = "pointer", tJ.style.fontSize = "1em", tJ.addEventListener(
		"click", click), tI.push(tJ);
	tI[rb.value].textContent = tI[rb.value].textContent.replace("⚪", "🟢")
}

function tL(title, tM, tN) {
	var s6 = document.createElement("div"),
		tO = document.createElement("div"),
		rk = document.createElement("div"),
		tP = document.createElement("div"),
		tQ = document.createElement("div");
	this.tR = rk, this.tS = tM, this.show = function() {
			!1 !== tN ? document.body.appendChild(s6) : (document.body.appendChild(tO), document.body.appendChild(tP))
		}, this.r4 = function() {
			!1 !== tN ? document.body.removeChild(s6) : (document.body.removeChild(tO), document.body.removeChild(tP))
		}, this.tW = function() {
			var r7 = b6.pW.r6(.1),
				r5 = b6.pW.r6(.08 + .04 * (at.tX < 1));
			return {
				r7: r7,
				r5: r5,
				tY: at.jF / at.pc - r7 - r5
			}
		}, this.resize = function(rQ) {
			var eY = tM.length,
				tZ = this.tW(),
				r7 = tZ.r7,
				r5 = tZ.r5;
			for (tO.style.height = b6.pW.ph(r7), b6.pW.pi(tO, 2), tP.style.top = b6.pW.ph(at.jF / at.pc - r5), tP.style.height = b6.pW.ph(r5), b6.pW.pi(tP, 8), rk.style.top = b6.pW.ph(r7), rk.style.height = rk.style.maxHeight = b6.pW.ph(tZ.tY), tO
				.style.font = b6.pW.rY(0, b6.pW.r6(.02, .3)), tP.style.font = b6.pW.rY(0, b6.pW.r6(.02, .7)), rk.style.font = b6.pW.rY(0, b6.pW.r6(.02, .7)), a7 = 1; a7 < eY; a7++) b6.pW.pi(tM[a7].button, 4);
			for (var rR = 0, a7 = 0; a7 < eY; a7++) rR += tM[a7].button.offsetWidth;
			if (rQ && rR < tP.offsetWidth)
				for (a7 = 0; a7 < eY; a7++) tM[a7].button.style.width = (100 * tM[a7].button.offsetWidth / rR).toFixed(2) + "%";
			else
				for (a7 = 0; a7 < eY; a7++) tM[a7].button.style.width = "auto";
			tP.sP && (tP.scrollLeft = tP.sP), rQ || this.resize(!0)
		}, this.ta = function() {
			var tZ = this.tW(),
				et = at.pc;
			tb.fillStyle = b7.mZ, tb.fillRect(0, et * tZ.r7, at.a1, et * tZ.tY)
		}, s6.style.position = "absolute", s6.style.top = "0", s6.style.left = "0", s6.style.width = "100%", s6.style.height = "100%", tO.style.position = "absolute", tO.style.top = "0", tO.style.left = "0", tO.style.width = "100%", tO.style
		.display = "flex", tO.style.backgroundColor = b7.mZ, tP.style.position = "absolute", tP.style.left = "0", tP.style.width = "100%", b6.pW.sD(tP), tQ.style.height = tQ.style.maxHeight = "100%", rk.style.position = "absolute", rk.style.width =
		"100%", rk.style.backgroundColor = b7.mZ,
		function() {
			for (var a7 = 0; a7 < tM.length; a7++) tM[a7].button.style.height = "100%", tM[a7].button.style.padding = "0.0em 0.9em"
		}();
	for (var a7 = 0; a7 < tM.length; a7++) tQ.appendChild(tM[a7].button);
	tO.appendChild(function() {
		var tV = document.createElement("h1");
		return tV.textContent = title, tV.style.margin = "auto", tV.style.fontSize = 20 < title.length && at.jF > at.a1 ? "1.8em" : "2.3em", tV.style.webkitTextStroke = "0.02em brown", tV.style.fontFamily = "Arial Black, Trebuchet MS", tV
	}()), tP.appendChild(tQ), !1 !== tN && (s6.appendChild(rk), s6.appendChild(tO), s6.appendChild(tP))
}

function qW(tc, td, te, tf) {
	var self;
	this.qX = document.createElement("span"), (self = this).qX.textContent = tc, self.qX.style.color = b7.md, self.qX.style.position = "absolute", self.qX.style.font = "inherit", tf ? self.qX.style.bottom = "0.06em" : self.qX.style.top = "0.12em",
		te ? self.qX.style.left = "0.2em" : self.qX.style.right = "0.2em", self.qX.style.fontSize = "0.6em", self.qX.style.pointerEvents = "none", self.qX.style.whiteSpace = "pre", td.style.position = "relative", td.style.overflow = "hidden", td
		.appendChild(self.qX)
}

function sF(tc, td, tg, th, ti) {
	var self;
	this.qX = document.createElement("span"), this.resize = function() {
			this.qX.style.fontSize = ((th - tg) * td.offsetHeight).toFixed(1) + "px"
		}, (self = this).qX.textContent = tc, self.qX.style.color = b7.md, self.qX.style.font = "inherit", self.qX.style.margin = "0.1em 0.6em", self.qX.style.pointerEvents = "none", ti && (self.qX.style.fontWeight = "bold"), self.qX.style
		.whiteSpace = "nowrap", self.qX.style.display = "block", td.appendChild(self.qX)
}

function tj(tk, tl, tm, tn) {
	var to = document.createElement("textarea"),
		tp = (this.e = to, !0);

	function tu() {
		to.select(), document.execCommand("copy")
	}
	this.resize = function() {
			tl && b6.pW.pi(to, 5)
		}, this.tq = function(qr) {
			to.value = qr
		}, this.tr = function() {
			return to.value
		}, this.ts = function() {
			to.select()
		}, this.clear = function() {
			to.value = ""
		}, this.tt = function() {
			tp && navigator.clipboard ? (to.select(), navigator.clipboard.writeText(to.value).catch(function() {
				tp = !1, tu()
			})) : tu()
		}, to.setAttribute("id", "textArea" + n.s.re++), to.setAttribute("autocomplete", "off"), tk && to.setAttribute("placeholder", tk), to.style.top = "0", to.style.left = "0", to.style.width = "100%", to.style.height = "100%", to.style
		.userSelect = "none", to.style.outline = "none", to.style.resize = "none", to.style.border = "none", to.style.color = b7.md, to.style.backgroundColor = b7.mW, tn ? (to.style.fontSize = "1em", to.rows = 6, to.style.padding = "0.25em") : (to
			.style.padding = "0.45em", to.style.fontSize = "1.2em"), tm && to.addEventListener("input", function(e) {
			tm(e)
		}), to.addEventListener("focus", function() {
			at.rf++
		}), to.addEventListener("blur", function() {
			at.rf--
		})
}

function dB() {
	this.pp = new tv, this.dp = new tw, this.rF = new tx, this.s = new ty, this.dU = function() {
		this.dp.dU(), (new tz).dU()
	}
}

function tw() {
	function u0(a7, type, u6, f1) {
		bf.dp.data.push({
			e0: a7,
			type: type || 0,
			value: u6 || 0,
			u6: u6 || 0,
			f1: f1 || 0
		})
	}

	function u1(a7, type, u6, f1) {
		bf.dp.data.push({
			e0: a7,
			type: type,
			value: u6 || "",
			u6: u6 || "",
			f1: f1 || 0
		})
	}

	function u2(mL) {
		for (var a7 = bf.dp.data.length; a7 < mL; a7++) bf.dp.data.push(null)
	}
	this.data = [], this.dU = function() {
		u0(0, 1, 0, 5), u0(1, 1, 1), u0(2, 0), u1(3, 2), u0(4, 1), u1(5, 2, "Trebuchet MS", 1), u0(6, 0), u0(7, 0, 0), u0(8, 0), u0(9, 1, 1), u0(10, 1), u0(11, 1, 1), u1(12, 2, navigator.language), u2(100), u1(100, 2), u1(101, 2), u1(102, 2), u1(
				103, 2), u1(104, 2), u1(105, 2), u1(106, 2), u0(107), u0(108), u0(109), u1(110, 2), u0(111), u0(112), u0(113), u1(114, 2), u0(115), u1(116, 2), u0(117, 1), u1(118, 2, "", 2), u0(119, 1, 0, 1), u1(120, 2), u0(121, 1, ~~(262144 *
				Math.random())), u1(122, 2, "Player " + Math.floor(1e3 * Math.random())), u0(123), u1(124), u0(125, 1), u1(126, 2), u0(127, 0, 1), u0(128), u0(129), u0(130), u0(131), u0(132), u1(133, 2), u0(134, 0, 5), u1(135, 2), u1(136, 2), u0(
				137), u0(138), u0(139), u0(140), u0(141), u0(142), u0(143), u0(144), u1(145, 2), u0(146), u0(147), u1(148, 2), u0(149), u0(150, 0, 1), u1(151, 2), u0(152, 0, 5), u0(153, 1), u0(154, 1), u1(155, 2), u1(156, 2), u0(157), u0(158),
			u2(180), u0(180, 0), u0(181, 0)
	}, this.rG = function(e0, value) {
		this.data[e0].value = value
	}, this.dq = function(e0, value) {
		this.rG(e0, value), bf.pp.save(e0, String(value)), bf.pp.save(e0, String(this.data[e0].f1), !0)
	}, this.u3 = function() {
		for (var a7 = 0; a7 < this.data.length; a7++) this.data[a7] && (bf.pp.save(a7, String(this.data[a7].value)), bf.pp.save(a7, String(this.data[a7].f1), !0))
	}, this.u4 = function(e0) {
		return Number(this.data[e0].value)
	}, this.u5 = function(e0) {
		return String(this.data[e0].value)
	}
}

function tv() {
	this.u7 = function(e0, f1) {
		return Number(this.u8(e0, f1))
	}, this.u8 = function(e0, f1) {
		var f0 = null;
		return 0 === u.id ? u.u9 && (f0 = u.u9.getItem((f1 ? "v" : "d") + e0)) : 1 === u.id ? f0 = u.uA.loadString((f1 ? 1e3 : 2e3) + e0) : 2 === u.id && (f0 = u.uB[(f1 ? "v" : "d") + e0]), f0 && 0 !== f0.length ? f0 : null
	}, this.uC = function(eY, uD) {
		var g = [],
			uE = uD ? "e" : "l";
		if (0 === u.id) {
			if (u.u9)
				for (a7 = 0; a7 < eY; a7++) g.push(u.u9.getItem(uE + a7))
		} else if (1 === u.id)
			for (var uF = uD ? 5e3 : 3e3, a7 = 0; a7 < eY; a7++) g.push(u.uA.loadString(uF + a7));
		else if (2 === u.id)
			for (a7 = 0; a7 < eY; a7++) g.push(u.uB[uE + a7]);
		return g
	}, this.save = function(e0, value, f1) {
		var uG = (f1 ? "v" : "d") + e0;
		if (0 === u.id) {
			if (u.u9 && bf.dp.data[140].value) try {
				u.u9.setItem(uG, value)
			} catch (e) {
				console.log(e)
			}
		} else 1 === u.id ? u.uA.saveString((f1 ? 1e3 : 2e3) + e0, value) : 2 === u.id && (u.uB[uG] = value, u.uH.postMessage(uG + " " + value))
	}, this.uI = function(g, uD) {
		var eY = g.length,
			uE = uD ? "e" : "l";
		if (0 === u.id) {
			if (u.u9 && bf.dp.data[140].value) try {
				for (a7 = 0; a7 < eY; a7++) u.u9.setItem(uE + a7, g[a7])
			} catch (e) {
				console.log(e)
			}
		} else if (1 === u.id)
			for (var uF = uD ? 5e3 : 3e3, a7 = 0; a7 < eY; a7++) u.uA.saveString(uF + a7, g[a7]);
		else if (2 === u.id)
			for (a7 = 0; a7 < eY; a7++) u.uB[uE + a7] = g[a7], u.uH.postMessage(uE + a7 + " " + g[a7])
	}
}

function tz() {
	this.dU = function() {
		! function() {
			var data = bf.dp.data;
			0 === data[2].f1 && (at.jF > at.a1 || 0 !== u.id) && (data[2].value = data[2].u6 = 1);
			0 === data[100].f1 && (data[100].value = data[100].u6 = (0 === u.id ? "Player " : 1 === u.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var a7, f0, data = bf.dp.data,
			eY = data.length;
		for (a7 = 0; a7 < eY; a7++) data[a7] && data[a7].f1 === bf.pp.u7(a7, !0) && (f0 = bf.pp.u8(a7), data[a7].value = null === f0 ? data[a7].u6 : 2 === data[a7].type ? f0 : Number(f0));
		bf.dp.data[10].value = bf.dp.data[10].u6
	}
}

function ty() {
	function uO(g) {
		if (0 === g.length) bf.rF.rG(116, "");
		else {
			for (var uR = g[0], a7 = 1; a7 < g.length; a7++) uR += ";" + g[a7];
			bf.rF.rG(116, uR)
		}
	}
	this.uL = function() {
		bf.dp.data[110].value.length && (bf.dp.data[106].value = bf.dp.data[110], bf.rF.rG(110, ""), this.uM())
	}, this.uM = function() {
		var g = bf.dp.data[116].value.split(";");
		for (g.length % 2 == 1 && g.pop(), g.unshift(bf.dp.data[106].value), g.unshift(bf.dp.data[105].value), a7 = 2; a7 < g.length; a7 += 2)
			if (g[a7] === g[0]) {
				g.splice(a7, 2);
				break
			} for (var uN = [], a7 = 0; a7 < g.length; a7 += 2) uN.push(g[a7]);
		uO(g), bf.dp.data[117].value = 0, bf.dp.data[117].tK = uN
	}, this.uP = function(e0) {
		bf.dp.data[117].tK.splice(e0, 1), bf.dp.data[117].value = Math.min(e0, bf.dp.data[117].tK.length - 1);
		var g = bf.dp.data[116].value.split(";");
		g.splice(2 * e0, 2), uO(g)
	}, this.uQ = function(e0) {
		var g = bf.dp.data[116].value.split(";");
		return {
			qu: g[2 * e0],
			password: g[2 * e0 + 1]
		}
	}, this.uS = function() {
		var f0 = bH.p4(bf.dp.data[121].value, -1, 262143);
		return f0 = -1 === f0 ? ~~(262144 * Math.random()) : f0
	}
}

function tx() {
	this.rG = function(e0, value) {
		bf.dp.data[e0].value !== value && (bf.dp.dq(e0, value), 0 === e0 ? (n.r(), b3.dU(), n.o(2)) : 1 === e0 ? at.df(1) : 2 === e0 ? at.df(0) : 5 === e0 && (b6.pW.uT(), at.df(0)))
	}, this.uU = function() {
		for (var data = bf.dp.data, a7 = 0; a7 < 100; a7++) data[a7] && bf.dp.dq(a7, data[a7].u6);
		b6.pW.uT(), at.df(1), b3.dU()
	}, this.uV = function() {
		for (var data = bf.dp.data, a7 = 0; a7 < data.length; a7++) data[a7] && bf.dp.rG(a7, data[a7].u6)
	}, this.uW = function() {
		for (var es = bf.dp, a7 = 128; a7 < 135; a7++) es.dq(a7, es.data[a7].u6)
	}, this.uX = function(data) {
		bf.rF.rG(109, data.rv), bf.rF.rG(107, data.uY), bf.rF.rG(108, data.uZ), bf.rF.rG(112, data.ua), bf.rF.rG(111, data.ub), bf.rF.rG(113, data.uc), bf.rF.rG(135, data.ud), bf.rF.rG(136, data.ue), bf.rF.rG(137, data.uf), bf.rF.rG(138, data
			.ug), bf.rF.rG(139, data.uh), bf.rF.rG(141, data.ui), bf.rF.rG(142, data.uj), bf.rF.rG(143, data.uk), bf.rF.rG(144, data.ul)
	}
}

function by() {
	this.rz = new um, this.un = new uo, this.up = new uq, this.dU = function() {
		this.rz.dU()
	}
}

function uo() {
	this.ur = function(size) {
		for (var us = bD, g = [], a7 = 0; a7 < size; a7++) g.push(String.fromCharCode(us.oX(16)));
		return g.join("")
	}, this.ut = function(pD) {
		return 20 < (pD = pD.trim()).length ? pD.substring(0, 20) : pD
	}
}

function um() {
	var uu = new Uint8Array(78);
	this.dU = function() {
		var a7;
		for (uu[50] = 37, a7 = 0; a7 < 10; a7++) uu[a7 + 3] = a7 + 1;
		for (a7 = 0; a7 < 26; a7++) uu[a7 + 20] = a7 + 11, uu[a7 + 52] = a7 + 38
	}, this.uv = function(pD) {
		return pD.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.uw = function(pD, size) {
		if ((pD = this.uv(pD)).length > size) return pD.substring(0, size);
		for (; pD.length < size;) pD = "-" + pD;
		return pD
	}, this.ux = function(pD) {
		for (var uy = uu, eY = pD.length, g = new Uint8Array(eY), a7 = 0; a7 < eY; a7++) g[a7] = uy[pD.charCodeAt(a7) - 45];
		return g
	}, this.uz = function(v0) {
		b9.a3(6 * v0.length), this.v1(v0), bD.dU(b9.a8)
	}, this.v1 = function(v0) {
		for (var eY = v0.length, a1 = b9, a7 = 0; a7 < eY; a7++) a1.a4(6, v0[a7])
	}, this.v2 = function(pD) {
		this.v1(this.ux(pD))
	}, this.v3 = function(pD, size) {
		this.v1(this.ux(this.uw(pD, size)))
	}, this.v4 = function(pD, size) {
		for (var g = this.ux(this.uw(pD, size)), f0 = 0, mF = 1, a7 = g.length - 1; 0 <= a7; a7--) f0 += mF * g[a7], mF *= 64;
		return f0
	}
}

function v5() {
	var a1, jF, v6;

	function vW(gy, eb, vU, vB, vP) {
		eb = vV(gy, eb + 1 + 2 * vB & 3);
		! function(gy, vX) {
			return 1 < Math.abs(gy % a1 - vX % a1) || 1 < Math.abs(va(gy) - va(vX))
		}(gy, eb) && 0 === vP[eb << 2] && (vP[eb << 2] = vU)
	}

	function va(g6) {
		return Math.floor((g6 + .5) / a1) % jF
	}

	function vV(g6, eb) {
		return g6 + v6[eb]
	}
	this.v7 = function(pD) {
		var a7, v8, eY, v9, us = bD;
		for (bC.rz.uz(bC.rz.ux(pD)), bO.vC.vD[bO.eE].a1 = bO.ej = a1 = us.oX(12), bO.vC.vD[bO.eE].jF = bO.ek = jF = us.oX(12), v6 = [-a1, -1, a1, 1], bO.vM = document.createElement("canvas"), bO.vM.width = bO.ej, bO.vM.height = bO.ek, bO.vI = bO
			.vM.getContext("2d", {
				alpha: !1
			}), bO.vJ = bO.vN = null, bO.vJ = bO.vI.getImageData(0, 0, bO.ej, bO.ek), bO.vN = bO.vJ.data, b6.pg.vO(bO.vN), eY = us.oX(12), v8 = us.oX(5), v9 = vF(a1 * jF - 1), a7 = 0; a7 < eY; a7++) ! function(kU, g6, vA, vB) {
			var a7, eb, us = bD,
				vP = bO.vN,
				vQ = g6,
				vR = g6,
				vS = 0,
				vT = 1 + vA,
				vU = 2 - vA;
			for (vP[g6 << 2] = vT, a7 = 0; a7 < kU; a7++) eb = us.oX(2), g6 = vV(g6, eb), vP[g6 << 2] === vT ? vS % 2 == 1 && vW(vR, vS + 2 * vB + 3, vU, vB, vP) : vP[g6 << 2] = vT, vW(g6, eb, vU, vB, vP), vW(vR, eb, vU, vB, vP), vR = g6,
				vS = eb;
			vV(g6, 0) === vQ ? (vW(g6, 0, vU, vB, vP), vW(vQ, 0, vU, vB, vP)) : vV(g6, 1) === vQ && (vW(g6, 0, vU, vB, vP), vW(vQ, 2, vU, vB, vP));
			0 === kU && (vW(vQ, 0, vU, vB, vP), vW(vQ, 2, vU, vB, vP))
		}(us.oX(v8), us.oX(v9), 1 === us.oX(1), 1 === us.oX(1));
		var ef, eh, hJ, vb, vc, vd, vP = bO.vN,
			ve = !0,
			vf = bO.vC.vD[bO.eE].vf,
			vg = bO.vC.vD[bO.eE].vg;
		for (eh = 0; eh < jF; eh++)
			for (vb = !0, vc = ve, ef = vd = 0; ef < a1; ef++) hJ = 4 * eh * a1 + 4 * ef, vd <= ef && 0 < vP[hJ] && (vc = 2 === vP[hJ], vb) && (vb = !1, vc !== ve) ? (ve = vc, vd = ef + 1, ef = -1) : (vc ? (vP[hJ] = vg[0], vP[1 + hJ] = vg[1], vP[
				2 + hJ] = vg[2]) : (vP[hJ] = vf[0], vP[1 + hJ] = vf[1], vP[2 + hJ] = vf[2]), vP[3 + hJ] = 255);
		bO.vI.putImageData(bO.vJ, 0, 0), bO.vK = !0, bO.vL.dU(), bb.dc = !0
	}
}

function uq() {
	this.v7 = function(vh) {
		for (var us = bD, size = us.oX(vh), vi = 7 + 9 * us.oX(1), g = [], a7 = 0; a7 < size; a7++) g.push(String.fromCharCode(us.oX(vi)));
		return g.join("")
	}
}

function c3() {
	var vj, vk, vl, vm, vn, vo, vp, vq, vr, vs;

	function vu() {
		var vx = a9.vx;
		for (vr = vx; vr < a9.eV; vr++) vt();
		for (vr = a9.gu ? a9.jm : 0; vr < vx; vr++) {
			if (!vy()) {
				for (var es = a9.w2 = vr; es < vx; es++) vr = es, vt();
				return
			}
			w1(vo + vj * vn + bH.dl(vn, 2), vp + vk * vn + bH.dl(vn, 2))
		}
	}

	function wU(player) {
		for (var iK = ac.iK, iM = ac.iM, iL = ac.iL, iN = ac.iN, eh = iM[player]; eh <= iN[player]; eh++)
			for (var ef = iK[player]; ef <= iL[player]; ef++) {
				var eC = aY.wV(ef, eh);
				aY.g8(eC) && (aY.iy(eC) ? aY.g3(eC, player) : aY.wW(eC, player))
			}
	}

	function wT(g, sH, sI) {
		var dk = g[sH];
		g[sH] = g[sI], g[sI] = dk
	}

	function vy() {
		return function() {
			var a7;
			for (a7 = 0; a7 < 8; a7++)
				if (vj = bH.dl(vl * au.random(), au.value(100)), vk = bH.dl(vm * au.random(), au.value(100)), wb()) return 1;
			return
		}() || function() {
			var hr, hu, er, w0, es, vz;
			for (hr = bH.dl(vl * au.random(), au.value(100)), hu = bH.dl(vm * au.random(), au.value(100)), er = 40; 1 <= er; er--)
				for (w0 = vm - er; 0 <= w0; w0 -= 40)
					for (vk = (w0 + hu) % vm, es = 40; 1 <= es; es--)
						for (vz = vl - es; 0 <= vz; vz -= 40)
							if (vj = (vz + hr) % vl, wb()) return 1;
			return
		}()
	}

	function wb() {
		for (var g6, wd, gap = bH.dl(vn - vq, 2), we = vp + vk * vn + gap, wf = vo + vj * vn + gap, wc = we + vq - 1; we <= wc; wc--)
			for (wd = wf + vq - 1; wf <= wd; wd--)
				if (g6 = aY.wV(wd, wc), !aY.eT(g6) || aY.iy(g6)) return;
		return 1
	}

	function w1(vz, w0) {
		vt(), wg(vz - 2, w0 - 2)
	}

	function vt() {
		ac.la[vr] = 0, ac.gM[vr] = ac.wR[vr] = 0, ac.g0[vr] = [], ac.gE[vr] = [], ac.gF[vr] = [], ac.ey[vr] = [], ac.iK[vr] = ac.iM[vr] = ac.iL[vr] = ac.iN[vr] = 0
	}

	function wg(vz, w0) {
		var g6, a7, wh, wi;
		for (ac.la[vr] = 1, ac.iK[vr] = vz + 10, ac.iM[vr] = w0 + 10, ac.iN[vr] = ac.iL[vr] = 0, wh = vz; wh < vz + 4; wh++)
			for (wi = w0; wi < w0 + 4; wi++)(vz < wh && wh < vz + 3 || w0 < wi && wi < w0 + 3) && (g6 = aY.wV(wh, wi), aY.eT(g6)) && (ac.iK[vr] = Math.min(wh, ac.iK[vr]), ac.iL[vr] = Math.max(wh, ac.iL[vr]), ac.iM[vr] = Math.min(wi, ac.iM[vr]), ac
				.iN[vr] = Math.max(wi, ac.iN[vr]), vs[ac.gM[vr]] = g6, ac.gM[vr]++, aY.wW(g6, vr));
		for (ac.wR[vr] = ac.gM[vr], a7 = ac.gM[vr] - 1; 0 <= a7; a7--) aY.wj(vs[a7], vr) ? (aY.g3(vs[a7], vr), ac.gE[vr].push(vs[a7])) : aY.wk(vs[a7]) ? (aY.g3(vs[a7], vr), ac.gF[vr].push(vs[a7])) : aY.wl(vs[a7]) && (aY.g3(vs[a7], vr), ac.ey[vr]
			.push(vs[a7]))
	}

	function wa(vz, w0) {
		for (var g6, wd, wc = w0; w0 - 6 < wc; wc--)
			for (wd = vz; vz - 6 < wd; wd--)
				if (g6 = aY.wV(wd, wc), aY.iy(g6)) return;
		return 1
	}
	this.dU = function() {
		if (vs = new Array(12), vq = 6, vn = 10, vl = bH.dl(bO.ej, vn), vm = bH.dl(bO.ek, vn), vo = bH.dl(bO.ej - vn * vl, 2), vp = bH.dl(bO.ek - vn * vm, 2), a9.gu)
			for (var a7 = 0; a7 < a9.jm; a7++) vr = a7, vt(), ac.la[vr] = 1;
		(0 === a9.data.spawningType ? vu : 1 === a9.data.spawningType ? (vu(), function() {
			var w3 = a9.w4;
			a9.w5 || w3++;
			if (!(w3 < 3)) {
				for (var data = a9.data, j2 = (a9.gu ? a9.jm : 0) + data.teamPlayerCount[0], mL = a9.w2, w6 = new Uint32Array(w3), w7 = new Uint32Array(w3), w8 = new Uint16Array(w3), w9 = new Uint16Array(w3), eW = bc.eW, iK = ac.iK, iM =
						ac.iM, iL = ac.iL, iN = ac.iN, fD = bK.fD, fE = bK.fE, a7 = j2; a7 < mL; a7++) fD[a7] = iK[a7] + iL[a7] >> 1, fE[a7] = iM[a7] + iN[a7] >> 1;
				for (a7 = j2; a7 < mL; a7++) {
					var id = eW[a7];
					w6[id] += fD[a7], w7[id] += fE[a7]
				}
				var k8 = bc.k8;
				for (a7 = 1; a7 < w3; a7++) {
					var g1 = Math.max(data.teamPlayerCount[k8[a7]], 1);
					w8[a7] = bH.dl(w6[a7], g1), w9[a7] = bH.dl(w7[a7], g1)
				}
				var wA = bc.wA,
					wB = bc.wB,
					wC = bc.wC,
					fC = bK.fC;
				for (a7 = 0; a7 < 512; a7++) fC[a7] = a7;
				for (var dz = 0; dz < 2 + (4 <= w3); dz++)
					for (a7 = j2; a7 < mL; a7++) {
						for (var gy = a7, wD = fC[gy], wE = 1, eo = bH.wF(fD[wD] - w8[1], fE[wD] - w9[1]), er = 2; er < w3; er++) {
							var wG = bH.wF(fD[wD] - w8[er], fE[wD] - w9[er]);
							wG < eo && (eo = wG, wE = er)
						}
						var wH = eW[gy];
						if (wE !== wH) {
							if (2 === dz && 4 <= w3) {
								var wI = Math.max((wE + 1) % w3, 1),
									wJ = bH.wF(fD[wD] - w8[wI], fE[wD] - w9[wI]);
								for (er = 1; er < w3; er++) wG = bH.wF(fD[wD] - w8[er], fE[wD] - w9[er]), eo < wG && wG < wJ && (wJ = wG, wI = er);
								wI !== wH && bH.wF(w8[wH] - w8[wI], w9[wH] - w9[wI]) < bH.wF(w8[wH] - w8[wE], w9[wH] - w9[wE]) && (wE = wI)
							}
							var wK = k8[wE],
								wL = wB[wK] + (a9.gu ? 0 : wC[wK]),
								vX = wA[wL],
								wM = fC[vX],
								wN = wB[wK + 1];
							eo = bH.wF(fD[wM] - w8[wH], fE[wM] - w9[wH]);
							for (var et = wL + 1; et < wN; et++) {
								var wO = wA[et],
									wP = fC[wO];
								(wG = bH.wF(fD[wP] - w8[wH], fE[wP] - w9[wH])) < eo && (eo = wG, vX = wO)
							}
							vX < j2 || mL <= vX || (wM = fC[vX], w6[wH] += fD[wM] - fD[wD], w7[wH] += fE[wM] - fE[wD], w6[wE] += fD[wD] - fD[wM], w7[wE] += fE[wD] - fE[wM], g1 = data.teamPlayerCount[k8[wH]], w8[wH] = bH.dl(w6[wH], g1),
								w9[wH] = bH.dl(w7[wH], g1), g1 = data.teamPlayerCount[wK], w8[wE] = bH.dl(w6[wE], g1), w9[wE] = bH.dl(w7[wE], g1), fC[gy] = wM, fC[vX] = wD)
						}
					}! function() {
						for (var fC = bK.fC, iK = ac.iK, iM = ac.iM, iL = ac.iL, iN = ac.iN, gM = ac.gM, wR = ac.wR, gE = ac.gE, gF = ac.gF, ey = ac.ey, a7 = 0; a7 < 512; a7++) {
							var wS = fC[a7];
							if (wS !== a7) {
								wT(iK, a7, wS), wT(iM, a7, wS), wT(iL, a7, wS), wT(iN, a7, wS), wT(gM, a7, wS), wT(wR, a7, wS), wT(gE, a7, wS), wT(gF, a7, wS), wT(ey, a7, wS), wU(a7), wU(wS), fC[a7] = a7;
								for (var jF = wS, g7 = fC[jF]; g7 !== a7;) g7 = fC[jF = g7];
								fC[jF] = wS
							}
						}
					}()
			}
		}) : function() {
			var vx = a9.vx;
			for (vr = vx; vr < a9.eV; vr++) vt();
			for (vr = a9.gu ? a9.jm : 0; vr < vx; vr++)
				if (! function() {
						var spawningData = a9.data.spawningData,
							vz = spawningData[2 * vr] + 1,
							spawningData = spawningData[2 * vr + 1] + 1;
						if (3 < vz && vz < bO.ej - 5 && 3 < spawningData && spawningData < bO.ek - 5 && aY.eT(aY.wV(vz, spawningData)) && wa(vz + 3, spawningData + 3)) return w1(vz + 1, spawningData + 1), 1;
						return
					}()) {
					if (!vy()) {
						for (var es = a9.w2 = vr; es < vx; es++) vr = es, vt();
						return
					}
					var vz = vo + vj * vn + bH.dl(vn, 2),
						w0 = vp + vk * vn + bH.dl(vn, 2);
					w1(vz, w0)
				}
		})(), bZ.lW[7] = ac.gM[a9.eI]
	}, this.wm = function(iw, wn, wo) {
		var a7, vz, w0, g6, vj, vk;
		for (vr = iw, a7 = 0; a7 < 20; a7++)
			for (vz = wn + a7; wn - a7 <= vz; vz--)
				for (w0 = wo + a7; wo - a7 <= w0; w0--)
					if ((vz === wn + a7 || vz === wn - a7 || w0 === wo + a7 || w0 === wo - a7) && 3 < vz && vz < bO.ej - 5 && 3 < w0 && w0 < bO.ek - 5 && aY.eT(aY.wV(vz, w0)) && wa(vz + 3, w0 + 3)) {
						if (0 < ac.gM[vr]) {
							for (vk = vj = g6 = void 0, vj = ac.iL[vr]; vj >= ac.iK[vr]; vj--)
								for (vk = ac.iN[vr]; vk >= ac.iM[vr]; vk--) g6 = 4 * (vk * bO.ej + vj), aY.wq(vr, g6) && (aY.wr(g6), ac.gM[vr]--);
							vt()
						}
						return wg(vz - 1, w0 - 1), !0
					} return !1
	}, this.ws = function(iw) {
		vr = iw, vy() ? w1(vo + vj * vn + bH.dl(vn, 2), vp + vk * vn + bH.dl(vn, 2)) : vt()
	}
}

function wt() {
	an.wu(), tb.setTransform(i7, 0, 0, i7, 0, 0), tb.imageSmoothingEnabled = i7 < 3, tb.drawImage(bO.vM, aO.wv(), aO.ww()), bL.wx.ta(), tb.drawImage(wy, aO.wv(), aO.ww()), an.ta(), bJ.ta(), ab.ta(), (a9.m6 ? (bd.ta(), b8) : (aJ.ta(), aR.ta(), aN
	.ta(), b8.ta(), aq.ta(), aS.ta(), aO.ta(), aM.ta(), bd.ta(), aQ.ta(), aL.ta(), aI.ta(), aH.ta(), aT.ta(), ba.ta(), ap)).ta(), n.ta()
}

function wz(x0, a1, jF) {
	x0.clearRect(0, 0, a1, jF), x0.fillStyle = b7.ma, x0.fillRect(0, 0, a1, jF)
}

function x1(x0, a1, jF, x2) {
	x0.fillStyle = b7.md, x0.fillRect(0, 0, a1, x2), x0.fillRect(0, 0, x2, jF), x0.fillRect(a1 - x2, 0, x2, jF), x0.fillRect(0, jF - x2, a1, x2)
}

function x3(x0, ef, eh, hN, x2, g6, x4) {
	x0.fillStyle = b7.md;
	var g6 = Math.floor(hN * g6),
		s4 = (g6 += (g6 - x2) % 2, Math.floor((g6 - x2) / 2)),
		hN = Math.floor((hN - g6) / 2);
	x0.fillRect(ef + hN, eh + hN + s4, g6, x2), x4 && x0.fillRect(ef + hN + s4, eh + hN, x2, g6)
}

function x6() {
	this.dU = function() {
		8 === a9.k3 && aJ.x7()
	}, this.x8 = function(x9) {
		var elo = a9.data.elo,
			hf = (elo[x9] - elo[1 - x9]) / 10,
			hf = 8 / (1 + Math.pow(2, hf / 32)),
			hf = Math.floor(10 * hf + .5),
			xB = this.xC(elo[x9] + (1 + a9.xD) * hf + 1),
			elo = this.xC(elo[1 - x9] - hf);
		0 === x9 ? aJ.xF(xB, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : aJ.xF(elo, xB, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"])
	}, this.xC = function(elo) {
		return 16e3 === (elo = bH.p4(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function cY() {
	this.xG = new xH, this.vP = new xI
}

function xI() {
	this.xJ = !1;
	this.xN = [], this.xO = 100;
	var m3, m4, gap, hN, xK, xM, xP = 0,
		xQ = new Array(9),
		xR = [],
		xS = [],
		xT = 0,
		xU = 0,
		xV = 0,
		xW = 0;

	function xi() {
		xQ.sort(function(er, es) {
			return es.jr - er.jr
		});
		for (var pD = "" + xQ[0].o8, a7 = 1; a7 < 9; a7++) pD += "," + xQ[a7].o8;
		for (a7 = 0; a7 < 9; a7++) pD += "," + xQ[a7].jr;
		bf.dp.dq(120, pD)
	}
	this.dU = function() {
		for (var xX = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], a7 = 0; a7 < xX.length; a7++) {
			var color = 6 === xX[a7] ? b7.n3 : b7.mb;
			this.xN.push(b6.canvas.xY(aX.get(3), xX[a7], color))
		}
		for (a7 = 0; a7 < af.xG.xZ; a7++) xS.push(af.xG.xa - af.xG.xZ + a7);
		for (a7 = 0; a7 < af.xG.xb; a7++) xS.push(af.xG.xc + a7);
		var xd = af.xG.xe(bG.xd);
		for (a7 = 0; a7 < xd.length; a7++) xS.push(xd[a7]);
		! function() {
			var a7, g = bf.dp.data[120].value.split(",");
			if (18 !== g.length)
				for (a7 = 0; a7 < 9; a7++) xQ[a7] = {
					o8: 1015 + a7,
					jr: 0
				};
			else
				for (a7 = 0; a7 < 9; a7++) {
					var f0 = parseInt(g[a7]),
						et = (f0 = 0 <= f0 && f0 < af.xG.xa ? f0 : 0, parseInt(g[a7 + 9]));
					et = 0 <= et && et < 1e3 ? et : 0, xQ[a7] = {
						o8: f0,
						jr: et
					}
				}
		}()
	}, this.show = function(kp, kq, xj) {
		var a7;
		if (xT = kp, xU = kq, xP = xj || 0, this.xJ = !0, xR = [], 0 === xP)
			for (a7 = 0; a7 < 9; a7++) xR.push(xQ[a7].o8);
		else {
			var es = 49 * xP,
				xj = es - 49;
			for (xj >= xS.length && (xP = 1, xj = 0, es = 49), a7 = xj = (es = Math.min(es, xS.length)) - 49; a7 < es; a7++) xR.push(xS[a7])
		}
		xR.push(1024);
		xj = xR.length, hN = Math.floor((u.v.rB() ? .075 : .0468) * at.pY), gap = Math.floor(hN / 3), (xV = 10 * (xK = hN + gap)) > at.a1 && (xV = at.a1, gap = (xK = xV / 10) - (hN = 3 * xK / 4)), xM = bH.dl(xj, 10) + !!(xj % 10), (xW = xM *
			xK) > at.jF && (xW = at.jF, gap = (xK = xW / xM) - (hN = 3 * xK / 4)), xj = .5 * gap;
		m3 = Math.min(Math.max(kp - .5 * xV + xj, xj), at.a1 - xV + xj), m4 = Math.min(Math.max(kq - .5 * xW + xj, xj), at.jF - xW + xj)
	}, this.gm = function(kp, kq, player) {
		if (!this.xJ) return !1;
		if (this.xl(kp, kq)) {
			kp = bH.p4(bH.dl(kp - m3 + .5 * gap, xK), 0, 9);
			if ((kp += 10 * bH.p4(bH.dl(kq - m4 + .5 * gap, xK), 0, 9)) >= xR.length) return aH.r4(), !0;
			kq = xR[kp];
			if (1024 === kq) return this.show(xT, xU, xP + 1), !0;
			! function(o8) {
				for (var a7 = 0; a7 < 9; a7++) xQ[a7].jr = Math.floor(.99 * xQ[a7].jr);
				for (a7 = 0; a7 < 9; a7++)
					if (o8 === xQ[a7].o8) return xQ[a7].jr = Math.min(xQ[a7].jr + 30, 999), xi();
				xQ.splice(5, 0, {
					o8: o8,
					jr: Math.max(xQ[4].jr, 30)
				}), xQ.pop(), xi()
			}(kq), player === a9.eI ? b4.gv.o7(kq) : b4.fu.oM(kq, player)
		}
		return aH.r4(), !0
	}, this.xl = function(kp, kq) {
		return !(kp < m3 - .5 * gap || kq < m4 - .5 * gap || m3 + xV - .5 * gap <= kp || m4 + xW - .5 * gap <= kq)
	}, this.ta = function() {
		tb.fillStyle = b7.ma, tb.fillRect(m3 - .5 * gap, m4 - .5 * gap, xV, xW);
		for (var hJ = .5 * bY.xm, eY = (tb.lineWidth = bY.xm, tb.strokeStyle = tb.fillStyle = b7.md, tb.strokeRect(m3 - .5 * gap + hJ, m4 - .5 * gap + hJ, xV - 2 * hJ, xW - 2 * hJ), tb.imageSmoothingEnabled = !0, xR.length), a7 = 0; a7 <
			eY; a7++) this.xn(xR[a7], tb, m3 + a7 % 10 * xK, m4 + bH.dl(a7, 10) * xK, hN);
		tb.imageSmoothingEnabled = !1
	}, this.xn = function(o8, hT, ef, eh, hN) {
		var eC;
		o8 >= 1024 - af.xG.xZ ? (eC = hN / this.xO, hT.setTransform(eC, 0, 0, eC, ef, eh), hT.drawImage(this.xN[o8 - 1024 + af.xG.xZ], 0, 0), hT.setTransform(1, 0, 0, 1, 0, 0)) : (b6.pW.textAlign(hT, 1), b6.pW.textBaseline(hT, 1), hT.font = b6.pW
			.rY(0, .89 * hN), hT.fillText(af.xG.xo(o8), ef + .5 * hN, eh + (.35 - b6.pW.xp + .56) * hN))
	}
}

function xH() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.xZ = 13, this.xb = this.emojis.length, this.xc = 676, this.xa = 1024, this.xq = this.emojis.indexOf("💀"), this.xr = this.xq + 1, this.xs = this.emojis.indexOf("🥇"), this.xt = this.emojis.indexOf("😊"), this.xo = function(f0) {
		return f0 < this.xc ? String.fromCharCode(55356, 56806 + bH.dl(f0, 26), 55356, 56806 + f0 % 26) : this.emojis[Math.min(f0 - this.xc, this.xb - 1)]
	}, this.xe = function(pD) {
		for (var eY = pD.length - 2, g = [], a7 = 0; a7 < eY; a7++) {
			var hb = pD.charCodeAt(a7) - 56806,
				hc = pD.charCodeAt(a7 + 2) - 56806;
			0 <= hb && hb < 26 && 0 <= hc && hc < 26 && (g.push(26 * hb + hc), a7 += 3)
		}
		return g
	}, this.xu = function(f0) {
		return f0 < this.xc
	}, this.xv = function(f0) {
		return f0 >= 1024 - this.xZ
	}, this.xw = function(f0) {
		return f0 >= this.xc && f0 < this.xc + this.xr
	}
}

function bx() {
	this.rz = new xx, this.un = new xy, this.up = new xz, this.dU = function() {
		this.rz.dU()
	}
}

function xy() {
	this.v2 = function(pD) {
		for (var eY = pD.length, a1 = b9, a7 = 0; a7 < eY; a7++) a1.a4(16, pD.charCodeAt(a7))
	}
}

function xx() {
	var y0 = new Uint8Array(64);
	this.dU = function() {
		var a7;
		for (y0[0] = 45, y0[37] = 95, a7 = 0; a7 < 10; a7++) y0[a7 + 1] = 48 + a7;
		for (a7 = 0; a7 < 26; a7++) y0[a7 + 11] = 65 + a7, y0[a7 + 38] = 97 + a7
	}, this.s1 = function(y1) {
		for (var us = bD, v0 = new Uint8Array(y1), a7 = 0; a7 < y1; a7++) v0[a7] = us.oX(6);
		return v0
	}, this.s0 = function(v0) {
		for (var eY = v0.length, y2 = y0, g = [], a7 = 0; a7 < eY; a7++) g.push(String.fromCharCode(y2[v0[a7]]));
		return g.join("")
	}, this.y3 = function(value, y4) {
		for (var y2 = y0, g = [], a7 = 0; a7 < y4; a7++) g.push(String.fromCharCode(y2[value >> 6 * (y4 - 1 - a7) & 63]));
		return g.join("")
	}
}

function c5() {
	var y5, y6, y7;
	y5 = [32, 65, 191, 913, 931], y6 = [64, 127, 688, 930, 1155], y7 = new Array(y5.length + 1);
	for (var a7 = 0; a7 < y7.length; a7++) {
		y7[a7] = 0;
		for (var er = a7 - 1; 0 <= er; er--) y7[a7] += y6[er] - y5[er]
	}

	function yD(et) {
		for (var a7 = y5.length - 1; 0 <= a7; a7--)
			if (et >= y5[a7] && et < y6[a7]) return a7;
		return -1
	}
	this.ut = function(pD) {
		return 0 !== (pD = pD.trim()).indexOf("Bot ") && 0 !== pD.indexOf("[Bot] ") && function(pD, yA, yB) {
			var eY = (pD = pD.trim()).length;
			if (eY < yA || yB < eY) return !1;
			for (var et, yC = 0, a7 = 0; a7 < eY; a7++)
				if (et = pD.charCodeAt(a7), yC += 65 <= et && et <= 90 || 1040 <= et && et <= 1071 ? 1 : 0, -1 === yD(et)) return !1;
			if (3 < yC && yC > Math.floor(eY / 2)) return !1;
			return !0
		}(pD, 3, 20)
	}, this.yE = function(pD) {
		for (var eY = (pD = pD.trim()).length, g = [], a7 = 0; a7 < eY; a7++) {
			var et, g6 = yD(et = pD.charCodeAt(a7));
			g.push(y7[g6] + et - y5[g6])
		}
		return g
	}, this.v7 = function(g) {
		for (var et, es, pD = "", eY = g.length, a7 = 0; a7 < eY; a7++)
			for (es = 1; es < y7.length; es++)
				if (g[a7] < y7[es]) {
					et = y5[es - 1] + g[a7] - y7[es - 1], pD += String.fromCharCode(et);
					break
				} return pD
	}, this.yF = function(pD) {
		for (var g = this.yE(pD), result = "", a7 = 0; a7 < g.length; a7++) result = (result += g[a7] < 10 ? "00" : g[a7] < 100 ? "0" : "") + g[a7].toString(10);
		return result
	}, this.yG = function(pD) {
		for (var g = new Array(Math.floor(pD.length / 3)), a7 = 0; a7 < pD.length; a7 += 3) g[Math.floor(a7 / 3)] = parseInt(pD.substring(a7, a7 + 3));
		return this.v7(g)
	}, this.yH = function(pD) {
		for (var f0, g = [pD.length], a7 = 0; a7 < pD.length; a7++) g[a7] = pD.charCodeAt(a7) - 48;
		var result = "";
		for (a7 = 0; a7 < pD.length; a7++) a7 === pD.length - 1 || 51 < 10 * g[a7] + g[a7 + 1] ? result += g[a7].toString() : (f0 = 10 * g[a7] + g[a7 + 1], result += String.fromCharCode(f0 + (f0 < 26 ? 65 : 71)), a7++);
		return result
	}, this.yI = function(pD) {
		for (var et, result = "", a7 = 0; a7 < pD.length; a7++) 48 <= (et = pD.charCodeAt(a7)) && et < 58 ? result += String.fromCharCode(et) : 65 <= et && et < 75 ? result += "0" + (et - 65).toString() : 75 <= et && et < 91 ? result += (et - 65)
			.toString() : 97 <= et && et < 123 && (result += (et - 71).toString());
		return result
	}, this.yJ = function(pD) {
		for (var eY = pD.length, g = [], a7 = 0; a7 < eY; a7++)(et = pD.charCodeAt(a7)) < 58 ? g.push(pD[a7]) : (et -= et < 91 ? 65 : 71, g.push(String(bH.dl(et, 10))), g.push(String(et - 10 * bH.dl(et, 10))));
		var eY = g.length - 2,
			et = 0,
			v0 = [];
		for (a7 = 0; a7 < eY; a7 += 3) v0[et++] = parseInt(g[a7] + g[a7 + 1] + g[a7 + 2]);
		return v0
	}, this.yK = function() {
		for (var dz, yL = "", a7 = 0; a7 < 6; a7++) dz = 48 + au.random() % 36, dz += 58 <= dz ? 39 : 0, yL += String.fromCharCode(dz);
		return yL
	}
}

function xz() {
	this.yE = function(pD, vh, yM) {
		for (var yN = [], eY = pD.length, max = 0, a7 = 0; a7 < eY; a7++) {
			var f0 = pD.charCodeAt(a7);
			yN.push(f0), max = Math.max(max, f0)
		}
		var vi = max < 128 ? 7 : 16;
		for (yM.a4(vh, eY), yM.a4(1, +(16 == vi)), a7 = 0; a7 < eY; a7++) yM.a4(vi, yN[a7])
	}
}

function d3() {
	this.yO = new yP, this.result = new yQ, this.h2 = new yR, this.yS = new yT, this.yU = new yV, this.yW = new yX, this.dU = function() {
		this.result.dU()
	}
}

function yR() {
	this.yY = function() {
		for (var eY = ah.jn, yZ = ah.jo, ya = [], a7 = 0; a7 < eY; a7++) {
			var g6 = yZ[a7];
			b6.fu.yb(g6) && ya.push(g6)
		}
		return ya
	}, this.yc = function() {
		if (0 === bc.k8[a9.yd]) return this.ye();
		bd.kz(a9.yd);
		for (var ya = [], eY = bK.f4[0], fC = bK.fC, a7 = 0; a7 < eY; a7++) {
			var g6 = fC[a7];
			b6.fu.yb(g6) && ya.push(g6)
		}
		return ya
	}, this.ye = function() {
		var g6 = l1[0];
		return b6.fu.yb(g6) ? [g6] : []
	}, this.yf = function(ya) {
		for (var eY = ya.length, dk = 0, gM = ac.gM, a7 = 0; a7 < eY; a7++) dk += gM[ya[a7]];
		return dk
	}
}

function yP() {
	function yh() {
		if (2 === a9.yl) return 1;
		aq.ym(), a9.yl = 2, a9.yn = a9.yo
	}

	function yj() {
		bN.yU.yp(), aT.show(1 === a9.yq, !1, 2 === a9.yq), bN.result.yp(), bN.yW.ie(), bN.yS.ie(), aJ.yr(!0), aJ.ys(247), aJ.ys(956), aJ.ys(957), aR.lM(!0), aS.lM(!0), aq.lM(), b8.yt(), a9.gi && bb.yu.yv(), bb.dc = !0, bX.yw(), u.v.setState(0)
	}
	this.yg = function() {
		yh() || (a9.yi = 2, yj())
	}, this.yk = function() {
		yh() || (a9.yi = 1, yj())
	}
}

function yT() {
	this.ie = function() {
		var z5;
		2 === a9.yi ? (aJ.yx(0, 59), aD.mC(2700)) : a9.k3 < 7 ? (z5 = bc.k8[a9.yd], z5 = bc.z7[z5], aM.z8(L(23, [z5]), 2, 1, 12), aJ.z9(0, L(24, [z5]), 40, 0, b7.md, b7.ma, -1, !1), aD.mC(2700)) : 8 === a9.k3 ? (a9.yq ? aJ.yx(a9.z2, 2) : aJ.yx(
			1 - a9.eI, 3), a9.z3.x8(a9.z2), aJ.z4(a9.z2), aD.lx(a9.z2, 2700, !1, 0)) : 9 === a9.k3 ? (aJ.zA(), aD.mC(2700)) : (aJ.z4(a9.z2), aD.lx(a9.z2, 2700, !1, 0))
	}
}

function yX() {
	function zB() {
		var sL = Math.floor(ac.zJ[a9.eI] / 50);
		0 !== sL && (sL = Math.min(sL, 400), aJ.z9(440, L(25, [(sL / 100).toFixed(2)]), 40, 0, b7.mv, b7.ma, -1, !1))
	}
	this.ie = function() {
		if (b6.fu.gl(a9.eI) && zB(), 0 !== bN.result.zC && 0 !== bN.result.ya.length && (function() {
				aJ.z9(520, L(26), 40, 0, b7.md, b7.ma, -1, !1);
				for (var ya = bN.result.ya, eY = ya.length, gM = ac.gM, g = [], a7 = 0; a7 < eY; a7++) {
					var g6 = ya[a7];
					g.push({
						g6: g6,
						dk: gM[g6]
					})
				}
				g.sort((er, es) => es.dk - er.dk);
				var z7 = ac.zK,
					dk = bN.result.zL,
					sL = bN.result.zC,
					pD = "";
				for (a7 = 0; a7 < eY; a7++) pD += z7[g[a7].g6] + ": " + (g[a7].dk * sL / (100 * dk)).toFixed(2) + "   ";
				aJ.z9(560, b6.zM.zN(pD), 40, 0, b7.mv, b7.ma, -1, !1)
			}(), 7 !== a9.k3 && 10 !== a9.k3 || 0 !== a9.yq && aJ.z9(600, L(27), 40, 0, b7.md, b7.ma, -1, !1), !(2 === a9.yi || 7 <= a9.k3))) {
			var ya = bN.result.ya,
				eY = ya.length,
				z7 = ac.zK,
				gM = ac.gM,
				zO = [];
			loop: for (var a7 = 0; a7 < eY; a7++) {
				var g6 = ya[a7],
					zP = b6.zM.zQ(z7[g6]);
				if (null !== zP) {
					for (var zR = gM[g6], es = zO.length - 1; 0 <= es; es--)
						if (zP === zO[es].name) {
							zO[es].dk += zR, zO[es].g.push({
								g6: g6,
								dk: zR
							});
							continue loop
						} zO.push({
						name: zP,
						dk: zR,
						g: [{
							g6: g6,
							dk: zR
						}]
					})
				}
			}
			if (0 !== zO.length) {
				zO.sort((er, es) => es.dk - er.dk);
				var g = zO[0].g,
					zS = (g.sort((er, es) => es.dk - er.dk), "[" + zO[0].name + "]"),
					sL = bN.result.zC,
					zT = 512 * sL / 26214400,
					pD = (aJ.z9(0, L(28, [zS, zT.toFixed(4)]), 40, 0, b7.md, b7.ma, -1, !1), aJ.z9(600, L(29), 40, 0, b7.md, b7.ma, -1, !1), ""),
					kU = g.length,
					dk = bN.result.zL,
					uy = zO[0].dk,
					zU = 8192 * zT;
				for (a7 = 0; a7 < kU; a7++) pD += z7[g[a7].g6] + ": " + (g[a7].dk * sL / (200 * dk)).toFixed(2) + " | " + (zU * g[a7].dk / uy).toFixed(1) + "   ";
				aJ.z9(640, b6.zM.zN(pD), 40, 0, b7.mv, b7.ma, -1, !1);
				zT = (uy * sL / (1e3 * dk)).toFixed(2);
				aJ.z9(680, L(30, [zT, zS]), 40, 0, b7.md, b7.ma, -1, !1), a9.gi || aJ.z9(720, L(31) + bG.zW, 736, 0, b7.md, b7.n1, -1, !1)
			}
		}
	}, this.zG = function() {
		var zH, vQ;
		a9.k5 || (zH = ac, vQ = a9.eI, 0 === zH.zI[vQ]) || zH.ip[vQ] < 1 || 2 * zH.os[vQ] > 3 * (zH.io[vQ] + zH.ip[vQ]) || zB()
	}
}

function yQ() {
	this.dU = function() {
		this.zX = 0, this.ya = [], this.zL = 0, this.zC = 0
	}, this.yp = function() {
		var rP, r0;
		a9.k5 || (rP = this, 2 === a9.yi ? rP.ya = bN.h2.yY() : a9.hL ? rP.ya = bN.h2.yc() : rP.ya = bN.h2.ye(), rP.zX = be.zZ.za(), rP.zL = Math.max(1, bN.h2.yf(rP.ya)), b4.fu.oV(), 8 === a9.k3 ? (bN.result.zC = 0, 1 !== a9.yq || 0 === bf.dp
			.data[107].value || 100 <= (r0 = bf.dp.data[108].value) || (bN.result.zC = (1 + a9.xD) * (100 - r0) * 10)) : (rP.zC = 100 * bN.result.zX * (1 + a9.xD), 9 === a9.k3 && (rP.zC = rP.zC >> 1)))
	}
}

function yV() {
	this.yp = function() {
		if (2 === a9.yi) a9.yq = 2;
		else {
			if (8 === a9.k3) b6.fu.j9(0) || 0 === ac.la[0] ? a9.z2 = 1 : b6.fu.j9(1) || 0 === ac.la[1] ? a9.z2 = 0 : a9.z2 = +(ac.gM[1] > ac.gM[0]);
			else {
				if (a9.hL) {
					var kx = bd.zd();
					if (a9.yd = kx, bc.k8[kx]) return void(a9.yq = +(bc.eW[a9.eI] === kx))
				}
				a9.z2 = l1[0]
			}
			a9.yq = +(a9.z2 === a9.eI)
		}
	}
}

function d8() {
	this.id = 0, this.f1 = 0, this.u9 = null, this.uA = null, this.uB = null, this.uH = null, this.v = new ze, this.dU = function() {
		var self, f1;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (f1 = Android.getVersion()) < 12 || (self.f1 = f1, self.id = 1, self.uA = Android),
			function(self) {
				var f1;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.uB = mwIOSdataX, self.uH = window.webkit.messageHandlers.iosCommandA, f1 = self
					.uB.version, self.f1 = f1 ? Number(f1) : 0)
			}(this),
			function(self) {
				var u9;
				if (0 === self.id) {
					try {
						if (!(u9 = window.localStorage)) return;
						u9.setItem("tls7", "1"), u9.removeItem("tls7")
					} catch (error) {
						return
					}
					self.u9 = u9
				}
			}(this)
	}
}

function ze() {
	this.zi = function() {
		bf.rF.uU(), bf.rF.uV(), aw.s.close(0, 3255), 0 === u.id ? u.u9 && u.u9.clear() : 1 === u.id ? u.uA.saveString(199, "") : 2 === u.id && u.uH.postMessage("clear")
	}, this.zj = function() {
		2 === u.id ? u.uH.postMessage("showConsentForm") : 1 === u.id && u.uA.setState(7)
	}, this.zk = function() {
		this.setState(14)
	}, this.rB = function() {
		return 1 === bf.dp.u4(2)
	}, this.zl = function() {
		bf.dp.dq(102, "")
	}, this.setState = function(zm) {
		1 === u.id && 5 <= u.f1 && u.uA.setState(zm)
	}, this.w = function() {
		var zn;
		1 === u.id && 7 <= u.f1 ? u.uA.setState(5) : ((zn = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = zn.toString())
	}, this.dZ = function() {
		1 !== u.id || u.f1 < 17 || u.uA.saveString(23, document.documentElement.outerHTML)
	}, this.e8 = function() {
		0 !== u.id && (1 === u.id ? u.uA.prepareAd("1688441405") : 2 === u.id && (0 === u.f1 ? u.uH.postMessage("prepare ad 4500876070") : u.uH.postMessage("loadAds 4500876070")))
	}, this.zo = function(dk) {
		return 0 !== u.id && (1 === u.id ? 12 <= u.f1 && (u.uA.presentAd(dk), !0) : 2 === u.id && (0 === u.f1 ? u.uH.postMessage("show ad " + dk) : u.uH.postMessage("showAd"), !0))
	}, this.de = function() {
		2 === u.id && u.f1 < 23 && n.o(4, 1, new p("App Update Required", "A new iOS app version with bug fixes has been published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + bG.zp + "' target='_blank'>" + bG
			.zp + "</a>", !0, [new q("⬅️ " + L(32), function() {
				n.o(0)
			}, b7.nI)]))
	}
}

function dN() {
	function zs(e) {
		a03(e), n.o(4, 5, new p("🚀 New Game Update", "The game has been updated! Please reload the game." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new q("⬅️ " + L(32), function() {
				n.a04()
			}), new q("🔄 Reload", function() {
				u.v.w()
			}, b7.n0)]))
	}

	function a02(e) {
		a03(e), n.o(4, 5, new p(L(33), {
			"3249": "No servers found",
			"4705": "Lobby not found",
			"4730": "Kicked from lobby"
		} [e] ?? zw(e), !0))
	}

	function zw(e) {
		var pD = " [" + e + "]";
		return 3249 === e || 1006 === e ? "No Internet / No Server Response" + pD : 4527 === e ? "Player already in lobby" + pD : 4530 === e ? "Lobby Timeout" + pD : 4528 === e ? "Lobby Kick: Another login detected." + pD : 4540 === e ?
			"You have been kicked." + pD : "Unknown error" + pD
	}

	function a03(e) {
		zv(e), n.s.t()
	}

	function zv(e) {
		var zm = aW.zu();
		6 === zm ? aw.s.a06(e) : bk.zy ? (n.r(), bk.a07(), aw.s.close(aw.s.zz, 3256)) : 8 === zm && a9.a08(!0)
	}
	this.zq = function(zr, e) {
		zr === 1 && __fx.customLobby.isActive() && aW.zu() !== 6 && __fx.customLobby.setActive(false);
		if (8 === n.rw && 0 === zr)
			if (4211 === e) zs(e);
			else {
				if (4480 === e) return bf.rF.uW(), void n.o(4, 0, new p(L(35), L(36), !0));
				8 !== aW.zu() && zv(), n.o(4, 0, new p(L(33), zw(e), !0))
			}
		else {
			var zm = aW.zu();
			if (6 === zm) {
				if (4211 === e) return void zs(e);
				if (4215 !== e && 4516 !== e && 4527 !== e && 4533 !== e) return void aV.zx(zr)
			} else {
				if (!bk.zy) return 8 === zm ? void(zr !== aw.s.a00 || a9.k5 || 1 !== a9.yl || a9.gi || aJ.a01(L(34, [e]))) : void 0;
				if (zr !== aw.s.zz) return
			}
			a02(e)
		}
	}, this.a05 = function(e) {
		8 === aW.zu() ? a9.k5 || 1 !== a9.yl || aJ.a01(L(34, [e])) : a02(e)
	}, this.m = function() {
		a03(3268)
	}
}

function cx() {
	var a09, a0A, a0B = -15e3,
		a0C = !1;

	function gm(e) {
		a0W() || (a0C = !0, a0X(e, 1), aw.s.a0Y(aw.s.a00), a0Z(Math.floor(at.pc * e.clientX), Math.floor(at.pc * e.clientY)))
	}

	function a0L(e) {
		a0B = bb.lt, a0X(e, 1), aw.s.a0Y(aw.s.a00), 0 < e.touches.length && (a09 = Math.floor(at.pc * e.touches[0].clientX), a0A = Math.floor(at.pc * e.touches[0].clientY), ao.a0L(e) || a0Z(a09, a0A))
	}

	function a0Z(ef, eh) {
		n.gm(ef, eh), 0 === a9.yl ? aW.gm(ef, eh) : b8.a0a(ef, eh) || ba.gm(ef, eh) || aT.gm(ef, eh) || aH.a0b(ef, eh) || aL.gm(ef, eh) || 0 <= aI.gm(ef, eh) || bF.a0c(ef, eh) || aq.gm(ef, eh) || aH.a0d(ef, eh)
	}

	function a0H(e) {
		a0W() || (a0C = !0, a0X(e, 1), a0e(Math.floor(at.pc * e.clientX), Math.floor(at.pc * e.clientY)))
	}

	function a0M(e) {
		a0B = bb.lt, a0X(e, 1), 0 < e.touches.length && (a09 = Math.floor(at.pc * e.touches[0].clientX), a0A = Math.floor(at.pc * e.touches[0].clientY), ao.a0M(e) || a0e(a09, a0A))
	}

	function a0e(ef, eh) {
		n.a0H(ef, eh), 0 === a9.yl ? aW.a0H(ef, eh) : (bP.gf(ef, eh), ba.a0H(ef, eh) || (aI.a0H(ef, eh), aH.xJ() ? aH.a0H(ef, eh) : aN.gn ? aN.a0H(ef) && (bb.dc = !0) : (aR.a0H(ef, eh), aO.m8 && aO.a0H(ef, eh) && (bb.dc = !0))))
	}

	function a0J(e) {
		a0W() || (a0X(e, 1), a0f(), 0 === a9.yl ? (aW.click(-1024, -1024), aP.qY()) : (aR.a0g(-1024, -1024), aI.a0H(-1024, -1024), aN.a0h(), aO.m8 = !1))
	}

	function a0I(e) {
		a0W() || (a0X(e, 1), a0i(Math.floor(at.pc * e.clientX), Math.floor(at.pc * e.clientY), 2 === e.button), bF.a0F && (bF.a0F = !1, e.preventDefault()))
	}

	function click(e) {
		a0W() || a0X(e, 1)
	}

	function a0N(e) {
		a0B = bb.lt, a0X(e, 1), e && e.touches && 0 < e.touches.length && 0 !== a9.yl ? aO.m8 = !1 : ao.a0j() || (a0i(a09, a0A, !1), bF.a0F && (bF.a0F = !1, e.preventDefault()))
	}

	function a0O(e) {
		a0B = bb.lt, a0X(e, 1), a0i(a09, a0A, !1), bF.a0F && (bF.a0F = !1, e.preventDefault())
	}

	function a0P(e) {}

	function a0Q(e) {}

	function a0R(e) {
		a0W() || a0X(e, 0)
	}

	function a0i(ef, eh, a0k) {
		a0f(), 0 === a9.yl ? aW.click(ef, eh) : (aR.a0g(ef, eh), ba.a0g(), aN.a0h(), aO.m8 = !1, aH.click(ef, eh, a0k) ? bb.dc = !0 : aI.a0I(ef, eh))
	}

	function a0f() {
		n.a0f()
	}

	function a0K(e) {
		var ef, eh, deltaY;
		a0W() || (a0X(e, 1), aw.s.a0Y(aw.s.a00), ef = Math.floor(at.pc * e.clientX), eh = Math.floor(at.pc * e.clientY), deltaY = e.deltaY, 1 === e.deltaMode && (deltaY *= 16), n.a0K(ef, eh, deltaY), 0 === a9.yl ? aW.a0K(ef, eh, deltaY) : aR.a0K(ef,
			eh, deltaY) || (aN.a0l(ef, eh) ? aN.a0K(deltaY) && (bb.dc = !0) : aO.a0K(ef, eh, deltaY)))
	}

	function a0S(e) {
		a0X(e, 0)
	}

	function a0X(e, id) {
		0 === id && n.xJ() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== aW.zu() && e.preventDefault()
	}

	function a0T(e) {
		if (__fx.keybindHandler(e.key)) return;
		a0W() || 0 < at.rf || (e = e.code) && e.length && (bT.et(e, 18) ? am.a0n(3) : bT.et(e, 22) ? am.a0n(0) : bT.et(e, 20) ? am.a0n(1) : bT.et(e, 24) ? am.a0n(2) : bT.et(e, 10) ? aN.a0o(31 / 32) : bT.et(e, 8) ? aN.a0o(32 / 31) : bT.et(e, 6) ? aN
			.a0o(7 / 8) : bT.et(e, 4) ? aN.a0o(8 / 7) : bT.et(e, 14) ? 0 !== a9.yl && aO.a0K(Math.floor(at.a1 / 2), Math.floor(at.jF / 2), -200) : bT.et(e, 16) ? 0 !== a9.yl && aO.a0K(Math.floor(at.a1 / 2), Math.floor(at.jF / 2), 200) : bT.et(e,
				0) ? a9.yl && bP.gg(!1) : bT.et(e, 2) ? a9.yl && bP.gg(!0) : bT.et(e, 26) ? a9.yl && bP.hA() : bT.et(e, 28) && a9.yl && bP.hF())
	}

	function a0U(e) {
		if (!a0W() && !(0 < at.rf || bb.lt < 400)) {
			var code = e.code;
			if (code && code.length && !("Enter" === code && n.a0p(1) || "Space" === code && n.a0p(0))) return bk.zy ? bk.tA.a0p(code) ? void 0 : void("Escape" === code && bF.f2()) : void(8 !== aW.zu() && aW.a0p(e) ? bb.dc = !0 : "Escape" === code ?
				bF.f2() : bT.et(code, 18) ? am.a0q(3) : bT.et(code, 22) ? am.a0q(0) : bT.et(code, 20) ? am.a0q(1) : bT.et(code, 24) ? am.a0q(2) : bT.et(code, 12) ? b8.a0r(!a9.m6) : "Space" === code && a9.yl && (aI.gj && aI.a0s(), a9.gi) && b8
				.a0t(!1))
		}
	}

	function a0V() {
		"hidden" === document.visibilityState ? 1 === a9.yl && (a9.gi ? b8.a0u() : !a9.k5 || aI.gj || a9.gu || aI.a0s()) : bb.dc = !0
	}

	function a0W() {
		return a0B + 15e3 > bb.lt
	}

	function resize() {
		at.a0w()
	}
	this.a0D = 0, this.a0E = "", this.a0F = !1, this.dU = function() {
		a0G.addEventListener("mousedown", gm, {
			passive: !1
		}), a0G.addEventListener("mousemove", a0H, {
			passive: !1
		}), a0G.addEventListener("mouseup", a0I, {
			passive: !1
		}), a0G.addEventListener("click", click, {
			passive: !1
		}), a0G.addEventListener("mouseleave", a0J, {
			passive: !1
		}), a0G.addEventListener("wheel", a0K, {
			passive: !1
		}), a0G.addEventListener("touchstart", a0L, {
			passive: !1
		}), a0G.addEventListener("touchmove", a0M, {
			passive: !1
		}), a0G.addEventListener("touchend", a0N, {
			passive: !1
		}), a0G.addEventListener("touchcancel", a0O, {
			passive: !1
		}), a0G.addEventListener("dragover", a0P), a0G.addEventListener("drop", a0Q), a0G.addEventListener("dblclick", a0R), document.addEventListener("contextmenu", a0S), document.addEventListener("keydown", a0T), document.addEventListener(
			"keyup", a0U), document.addEventListener("visibilitychange", a0V), window.addEventListener("resize", resize)
	}, this.a0c = function(ef, eh) {
		return !!b8.gm(ef, eh) || !!(aR.gm(ef, eh) || aO.gm(ef, eh) || aN.gm(ef, eh) || aJ.gm(ef, eh))
	}, this.a0v = a0W, this.q0 = function() {
		return !a0C || 0 < a0B
	}, this.f2 = function() {
		if (!n.xJ()) return 8 === aW.zu() ? a9.m6 ? void b8.a0r(!1) : ba.xJ ? void ba.a0s() : void aI.a0s() : void(7 !== aW.zu() && 6 === aW.zu() && aV.a0x());
		n.a0p(2)
	}
}

function bt() {
	this.pW = new a0y, this.pg = new a0z, this.fu = new a10, this.zM = new a11, this.x0 = new a12, this.a13 = new a14, this.canvas = new a15, this.color = new a16, this.a17 = new a18, this.dU = function() {
		this.pW.uT()
	}
}

function a0z() {
	this.vO = function(g) {
		g.fill(0)
	}, this.a19 = function(g) {
		for (var eY = g.length, a7 = 0; a7 < eY; a7++) g[a7] = []
	}, this.a1A = function(hb, a1B) {
		for (var hc = bK.f9, a7 = 0; a7 < 3; a7++) hc[a7] = a1B * hb[a7];
		return hc
	}, this.a1C = function(hb, hc, a1D) {
		for (var hf = 0, a7 = 0; a7 < 3; a7++) hf += Math.abs(hb[a7] - hc[a7]);
		return a1D <= hf
	}, this.a1E = function(hb, a1F) {
		for (var a7 = 0; a7 < 3; a7++) hb[a7] = bH.p4(hb[a7] + a1F, 0, 255);
		return hb
	}, this.a1G = function(g, sH, sI) {
		sI = sI || g.length - 1;
		for (var a1H = 0, a7 = sH = sH || 0; a7 <= sI; a7++) a1H += g[a7];
		return a1H
	}, this.a1I = function(g, a1J) {
		for (var a7, a1K, eY = g.length, a1L = [], er = eY - 1; 0 <= er; er--) {
			for (a7 = a1K = 0; a7 < eY; a7++) a1J(g[a7]) < a1J(g[a1K]) && (a1K = a7);
			eY--, a1L.push(g[a1K]), g[a1K] = g[eY], g.pop()
		}
		return a1L
	}, this.min = function(g) {
		var a7, f0, eY = g.length;
		if (0 === eY) return 0;
		for (f0 = g[0], a7 = 1; a7 < eY; a7++) f0 = Math.min(f0, g[a7]);
		return f0
	}, this.max = function(g) {
		var eY = g.length;
		if (0 === eY) return 0;
		for (var f0 = g[0], a7 = 1; a7 < eY; a7++) f0 = Math.max(f0, g[a7]);
		return f0
	}, this.a1M = function(g, f0) {
		for (var eY = g.length, g1 = 0, a7 = 0; a7 < eY; a7++) g1 += g[a7] > f0;
		return g1
	}, this.a1N = function(a1O, a1P, min) {
		for (var eY = a1P[0], a7 = eY - 1; 0 <= a7; a7--) a1O[a7] < min && (a1O[a7] = a1O[--eY]);
		a1P[0] = eY
	}, this.a1Q = function(g, eY, value) {
		for (var a7 = 0; a7 < eY; a7++) g[a7] -= value
	}, this.a1R = function(g) {
		for (var eY = g.length, a7 = 0; a7 < eY; a7++)
			if ("string" != typeof g[a7]) return !1;
		return !0
	}, this.a1S = function(pD, g, a1T) {
		g.fill(0);
		for (var sL = pD.split(","), eY = Math.min(sL.length, g.length), a7 = 0; a7 < eY; a7++) g[a7] = Math.min(parseInt(sL[a7]), a1T)
	}, this.a1U = function(pD, g, qV) {
		g.fill("");
		for (var sL = pD.split('"'), eY = Math.min(sL.length, 2 * g.length), hJ = 0, a7 = 1; a7 < eY; a7 += 2) g[hJ++] = sL[a7].slice(0, qV)
	}, this.a1V = function(g, g1) {
		if (0 === g1) g.fill(0);
		else {
			var a1H = this.a1G(g),
				eY = g.length;
			if (0 === a1H) g.fill(bH.dl(g1, eY));
			else
				for (var a7 = 0; a7 < eY; a7++) g[a7] = bH.dl(g1 * g[a7], a1H);
			if (0 === (a1H = this.a1G(g))) g[1] = g1;
			else
				for (var hJ = 0; a1H++ < g1;) g[hJ = (hJ + 1) % eY] && g[hJ]++
		}
	}, this.a1W = function(g) {
		if (!g) return 0;
		var eY = g.length;
		if (0 === eY) return 0;
		for (var f0 = g[eY - 1], a7 = eY - 2; 0 <= a7; a7--)
			if (g[a7] !== f0) return a7 + 2;
		return 1
	}, this.a1X = function(g) {
		for (var a1H = 0, a7 = 0; a7 < g.length; a7++) a1H += g[a7].length;
		return a1H
	}
}

function a15() {
	this.xY = function(a1Y, e0, a1Z) {
		var hN = a1Y.height,
			a1a = b6.pW.vE(hN, hN),
			hT = b6.pW.getContext(a1a);
		return function(a1, hT, a1Z) {
			hT.fillStyle = a1Z, hT.beginPath(), hT.arc(a1 / 2, a1 / 2, .47 * a1, 0, 2 * Math.PI), hT.fill()
		}(hN, hT, a1Z), hT.drawImage(a1Y, -e0 * hN, 0), a1a
	}, this.a1c = function(a1d) {
		var hT, hQ, hN = a1d.height;
		return a1d.width === hN && (hQ = (hT = b6.pW.getContext(a1d, !0)).getImageData(0, 0, hN, hN), b6.a13.a1e(hQ.data, hN, hN, .9), hT.putImageData(hQ, 0, 0)), a1d
	}
}

function a16() {
	this.a1f = function(f0) {
		return [f0 >> 12 & 63, f0 >> 6 & 63, 63 & f0]
	}, this.a1g = function(f0) {
		for (var g = this.a1f(f0), a7 = 0; a7 < 3; a7++) g[a7] = ~~(4.05 * g[a7]);
		return g
	}, this.a1h = function(f0) {
		f0 = this.a1g(f0);
		return b6.color.mV(f0[0], f0[1], f0[2])
	}, this.a1i = function(g) {
		for (var a7 = 0; a7 < 3; a7++) g[a7] = ~~(g[a7] / 4.04);
		return (g[0] << 12) + (g[1] << 6) + g[2]
	}, this.mV = function(dz, sL, es) {
		return "rgb(" + dz + "," + sL + "," + es + ")"
	}, this.mX = function(dz, sL, es, er) {
		return "rgba(" + dz + "," + sL + "," + es + "," + er.toFixed(3) + ")"
	}, this.q2 = function(et) {
		for (var g = et.split("(")[1].split(","), f8 = bK.f8, a7 = 0; a7 < 3; a7++) f8[a7] = parseInt(g[a7]);
		return 4 === g.length ? f8[3] = 255 * parseFloat(g[3].slice(0, -1)) : f8[3] = 255, f8
	}, this.q3 = function(a1j, eb) {
		for (var g = a1j.slice(a1j.indexOf("(") + 1, a1j.indexOf(")")).split(","), f8 = bK.f8, a7 = 0; a7 < 3; a7++) f8[a7] = bH.p4(parseInt(g[a7].trim(), 10) + eb, 0, 255);
		return 3 === g.length ? this.mV(f8[0], f8[1], f8[2]) : (a1j = parseFloat(g[3].trim()), this.mX(f8[0], f8[1], f8[2], a1j = 0 === a1j ? .3 : a1j))
	}, this.a1k = function(g) {
		for (var pD = "#", a7 = 0; a7 < 3; a7++) {
			var dz = g[a7].toString(16);
			pD += 1 === dz.length ? "0" + dz : dz
		}
		return pD
	}, this.a1l = function(pD) {
		var dz, sL;
		return pD.length < 7 ? b7.mU : (dz = parseInt(pD.slice(1, 3), 16), sL = parseInt(pD.slice(3, 5), 16), pD = parseInt(pD.slice(5, 7), 16), this.mV(dz, sL, pD))
	}
}

function a12() {
	this.a1m = function(pD, font, maxWidth) {
		if (font && (tb.font = font), tb.measureText(pD).width <= maxWidth) return pD;
		for (var a7 = pD.length - 1; 1 <= a7; a7--)
			if (pD = pD.substring(0, a7), tb.measureText(pD + "...").width <= maxWidth) return pD + "...";
		return "..."
	}
}

function a18() {
	var a1o = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.a1p = function(lt) {
		var a1r, pD = new Date(lt.getTime() - 6e4 * lt.getTimezoneOffset()).toUTCString();
		return pD.length < 12 || (pD = pD.substring(5, pD.length), 0 === (lt = lt.getTimezoneOffset())) ? pD : (a1r = (lt < 0 ? "+" : "-") + bH.dl(Math.abs(lt), 60), 0 == (lt = Math.abs(lt) % 60) ? pD + a1r : pD + a1r + ":" + (lt < 10 ? "0" :
			"") + lt)
	}, this.a1s = function(lt) {
		var pD = lt.toUTCString();
		return pD.length < 12 ? pD : function(lt) {
			return a1o[lt.getUTCDay()]
		}(lt) + ", " + pD.substring(5, pD.length - 4)
	}
}

function a0y() {
	var a1u = null;
	this.xp = 0, this.uT = function() {
		var f0 = bf.dp.data[5].value;
		a1u = "px " + f0, "Trebuchet MS" !== f0 && (a1u += ", Trebuchet MS"), this.xp = hM(32, 32, ["a", "b", "m"], 200, a1u)
	}, this.vE = function(a1, jF) {
		var et = document.createElement("canvas");
		return et.width = a1, et.height = jF, et
	}, this.getContext = function(canvas, alpha) {
		return canvas.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(x0, a1, jF) {
		return x0.getImageData(0, 0, a1, jF)
	}, this.rY = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + a1u : 1 === type ? "bold " + size + a1u : 2 === type ? "lighter " + size + a1u : 3 === type ? "italic " + size + a1u : 4 === type ? "oblique " + size + a1u : 5 === type ? "small-caps " +
			size + a1u : "small-caps bold " + size + a1u
	}, this.textAlign = function(hT, id) {
		hT.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(hT, id) {
		hT.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.pi = function(e, code, color) {
		color = this.ph(bY.rZ) + " solid " + (color || b7.md);
		5 === (code = code || 5) ? e.style.border = color : 4 === code ? e.style.borderLeft = color : 2 === code ? e.style.borderBottom = color : 6 === code ? e.style.borderRight = color : e.style.borderTop = color
	}, this.sN = function(e, ef, eh, a1, jF) {
		e = e.style;
		e.left = this.a1v(ef), e.top = this.a1v(eh), e.width = this.a1v(a1), e.height = this.a1v(jF)
	}, this.pX = function(f0) {
		return 1 + f0 * u.v.rB()
	}, this.r6 = function(mF, g7) {
		return mF * this.pX(void 0 === g7 ? .5 : g7) * at.pY / at.pc
	}, this.sM = function(mF, g7) {
		return mF * this.pX(void 0 === g7 ? .5 : g7) * at.pY
	}, this.s2 = function(mF, g7, a1w) {
		return this.pX(g7) * Math.min(mF * at.pY, a1w * at.a1) / at.pc
	}, this.ph = function(f0) {
		return f0.toFixed(1) + "px"
	}, this.a1v = function(f0) {
		return this.a1y(f0).toFixed(1) + "px"
	}, this.a1y = function(f0) {
		return f0 / at.pc
	}, this.a1z = function(rn, a20) {
		for (var pD = "<ul>", eY = rn.length, a7 = 0; a7 < eY; a7++) pD += "<li>" + rn[a7] + ": <a href='" + a20[a7] + "' target='_blank'>" + a20[a7] + "</a></li>";
		return pD += "</ul>"
	}, this.a21 = function(a22) {
		return "<a href='" + a22 + "' target='_blank'>" + a22 + "</a>"
	}, this.a23 = function(e) {
		navigator.clipboard && navigator.clipboard.writeText(e.value)
	}, this.a24 = function(e) {
		var dk = e.textContent;
		b6.zM.a25(dk, "✔") || (1 === dk.length ? e.textContent = "✔" : e.textContent = dk + " ✔", setTimeout(function() {
			e.textContent = dk
		}, 500))
	}, this.measureText = function(pD) {
		return tb.measureText(pD).width
	}, this.sD = function(a26) {
		a26.style.overflowX = "auto", a26.style.overflowY = "hidden", a26.style.whiteSpace = "nowrap", a26.addEventListener("wheel", function(e) {
			Math.abs(e.deltaY) < Math.abs(e.deltaX) || (this.scrollLeft += e.deltaY, this.sP = this.scrollLeft, e.preventDefault())
		}), a26.addEventListener("scroll", function() {
			this.sP = this.scrollLeft
		})
	}
}

function a10() {
	this.gk = function(zm) {
		return 0 === zm ? 1 === a9.yl && a9.gu : 1 === zm ? 1 === a9.yl && !a9.gu : 2 === a9.yl
	}, this.gl = function(player) {
		return 0 !== ac.la[player] && 2 !== ac.a27[player]
	}, this.a28 = function(player) {
		return player === a9.eI && 2 !== ac.a27[player]
	}, this.a29 = function(player) {
		return player === a9.eI
	}, this.j9 = function(player) {
		return player >= a9.jm || 2 === ac.a27[player]
	}, this.kY = function(player) {
		return 0 !== ac.la[player]
	}, this.yb = function(player) {
		return player < a9.jm
	}, this.op = function(a2A, a2B) {
		return a2A !== a2B
	}, this.fx = function(player, f0) {
		var min;
		return f0 = this.a2C(player, f0), ac.ga[player] += f0, ac.a2D[player] && (min = Math.min(ac.a2D[player], ac.ga[player]), ac.a2D[player] -= min, ac.ga[player] -= min), f0
	}, this.a2C = function(player, f0) {
		var a2E = ac.ga[player];
		return f0 = Math.min(f0, ac.gM[player] * a9.a2F - a2E), f0 = Math.min(f0, a9.a2G - a2E), Math.max(f0, 0)
	}, this.oq = function(player, i5, a2H, a2I) {
		var a2E = ac.ga[player],
			i5 = bH.dl(a2E * (i5 + 1), 1024),
			a2H = bH.dl(a2H * a2E, 1024),
			i5 = Math.min(i5, a2E - a2H);
		return 10 === a9.k3 && (i5 = b0.a2K(player, i5)), bK.f6[0] = i5, bK.f6[1] = a2H, a2I <= i5
	}, this.oH = function(player, nz, ny) {
		var player = ac.ga[player],
			a2J = bH.dl(64 * player, 1024),
			player = (nz = Math.min(nz, player - a2J), this.a2M(nz));
		return a2J += player, nz = this.a2C(ny, nz -= player), bK.f6[0] = nz, bK.f6[1] = a2J, 1 <= nz
	}, this.oJ = function(nz, ny) {
		var a2L = this.a2M(nz);
		return nz = this.a2C(ny, nz -= a2L), bK.f6[0] = nz, bK.f6[1] = a2L, 1 <= nz
	}, this.i4 = function(player, a2N) {
		return bH.dl(ac.ga[player] * (a2N + 1), 1024)
	}, this.a2M = function(a2O) {
		return bH.dl(Math.max(2142 - bb.jj(), 0) * a2O, 2142)
	}, this.p2 = function(player, a2H) {
		a2H = bH.dl(a2H * ac.ga[player], 1024);
		bK.f6[1] = a2H, ac.ga[player] -= a2H
	}, this.fv = function(player, a2P) {
		var fI, fK, es = ac.ga[player];
		return a2P <= es ? ac.ga[player] -= a2P : (ac.ga[player] = 0, fK = ac.a2D[player] + (fI = 5 * ((es = a2P - es) >> 2)), bZ.fy(player, fI - es, 12), fK <= a9.a2Q ? ac.a2D[player] = fK : (ac.a2D[player] = a9.a2Q, bZ.fy(player, fK - a9.a2Q,
			18))), a2P
	}, this.km = function(player, i5) {
		var ga = ac.ga,
			a2E = ga[player],
			i5 = bH.dl(a2E * (i5 + 1), 1024),
			a2J = Math.max(bH.dl(a2E, 10), 1e3);
		return (i5 = Math.min(i5, a2E - a2J)) < 0 ? (ga[player] = 0, a2J = Math.min(1e3, a2E + a9.a2Q - ac.a2D[player]), bK.f6[1] = a2J, ac.a2D[player] += a2J - a2E, 0) : (bK.f6[1] = a2J, 10 === a9.k3 && (i5 = b0.a2K(player, i5)), ga[player] -=
			a2J + i5, i5)
	}, this.ot = function(player) {
		ac.ga[player] -= bK.f6[0] + bK.f6[1]
	}, this.or = function(player, iw) {
		return (iw = Math.min(iw, a9.eV)) < a9.eV && 0 === ac.la[iw] && (iw = a9.eV), (bK.eU[0] = iw) === a9.eV || eR(player, iw)
	}, this.ov = function(player, ny) {
		return 0 !== ac.la[ny] && !eR(player, ny)
	}, this.a2R = function(player, a2S) {
		for (var g6, eY = ah.jn, r0 = 0, a2T = l1, a7 = 0; a7 < eY; a7++)
			if (g6 = a2T[a7], !this.j9(g6)) {
				if (player === g6) return !0;
				if (++r0 > a2S) return !1
			} return !1
	}, this.ku = function(g6) {
		var a2U = a9.hL ? bd.a2V() : ac.gM[l1[0]];
		return a2U >= bH.dl(g6 * a9.jW, 100)
	}
}

function a14() {
	this.a2W = function(canvas, a2X, a2Y) {
		var a1 = canvas.width,
			jF = canvas.height,
			et = b6.pW.vE(a1, jF),
			hT = b6.pW.getContext(et, !0),
			canvas = (hT.drawImage(canvas, 0, 0), hT.getImageData(0, 0, a1, jF));
		return a2X(canvas.data, a1, jF, a2Y), hT.putImageData(canvas, 0, 0), et
	}, this.a2Z = function(vP, a1, jF) {
		for (var ef = a1 - 1; 0 <= ef; ef--)
			for (var eh = jF - 1; 0 <= eh; eh--) {
				var a7 = 4 * (ef + eh * a1);
				vP[3 + a7] = vP[a7], vP[a7] = vP[1 + a7] = vP[2 + a7] = 255
			}
	}, this.a2a = function(vP, a1, jF) {
		for (var ef = a1 - 1; 0 <= ef; ef--)
			for (var eh = jF - 1; 0 <= eh; eh--) {
				var a7 = 4 * (ef + eh * a1);
				vP[1 + a7] > vP[2 + a7] + 10 && (vP[3 + a7] = vP[a7], vP[1 + a7] = vP[2 + a7])
			}
	}, this.a2b = function(vP, a1, jF, a2Y) {
		for (var gap = Math.floor(Math.min(a1, jF) * a2Y), ef = 0; ef < a1; ef++)
			for (var a7, eh = 0; eh < jF; eh++)(ef < gap || eh < gap || a1 - gap <= ef || jF - gap <= eh) && (vP[3 + (a7 = 4 * (ef + eh * a1))] = 255 - 255 * (vP[1 + a7] - vP[a7]) / (255 - vP[a7]))
	}, this.a2c = function(vP, a1, jF, a2Y) {
		for (var ef = a1 - 1; 0 <= ef; ef--)
			for (var eh = jF - 1; 0 <= eh; eh--) {
				var a7 = 4 * (ef + eh * a1);
				vP[a7] = a2Y[0], vP[1 + a7] = a2Y[1], vP[2 + a7] = a2Y[2]
			}
	}, this.a2d = function(vP, a1, jF, a2Y) {
		for (var gap = Math.floor(a1 * a2Y), ef = 0; ef < a1; ef++)
			for (var a7, eh = 0; eh < jF; eh++)(ef < gap || eh < gap || a1 - gap <= ef || jF - gap <= eh) && (vP[a7 = 4 * (ef + eh * a1)] = vP[1 + a7] = vP[2 + a7] = 0)
	}, this.a2e = function(vP, a1, jF) {
		for (var eh, a7, ef = a1 - 1; 0 <= ef; ef--)
			for (eh = jF - 1; 0 <= eh; eh--) 200 < vP[1 + (a7 = 4 * (ef + eh * a1))] && vP[1 + a7] - 20 > vP[a7] && vP[1 + a7] - 20 > vP[2 + a7] ? vP[a7] + vP[2 + a7] < 40 ? vP[3 + a7] = 0 : (vP[3 + a7] = vP[a7], vP[a7] = 255, vP[1 + a7] = 255,
				vP[2 + a7] = 255) : vP[a7] < 50 && vP[1 + a7] < 50 && vP[2 + a7] < 50 && (vP[a7] + vP[1 + a7] + vP[2 + a7] < 50 ? vP[3 + a7] = 180 : vP[3 + a7] = 180 + Math.floor(75 * (vP[a7] + vP[1 + a7] + vP[2 + a7] - 50) / 100))
	}, this.a2f = function(vP, a1, jF) {
		for (var eh, a7, ef = a1 - 1; 0 <= ef; ef--)
			for (eh = jF - 1; 0 <= eh; eh--) vP[1 + (a7 = 4 * (ef + eh * a1))] > vP[a7] + 20 && vP[1 + a7] > vP[2 + a7] + 20 && vP[a7] + vP[2] < 40 && (vP[3 + a7] = 255 - vP[1 + a7], vP[a7] = vP[1 + a7] = vP[2 + a7] = vP[a7])
	}, this.a1e = function(vP, a1, jF, a2Y) {
		for (var dz = a1 >> 1, ef = 0; ef < a1; ef++)
			for (var eh = 0; eh < jF; eh++) Math.sqrt((ef - dz) * (ef - dz) + (eh - dz) * (eh - dz)) > a2Y * dz && (vP[4 * (ef + eh * a1) + 3] = 0)
	}
}

function a11() {
	this.y3 = function(f0) {
		var a7, a2g, a2h, a2i, a2j;
		if (f0 < 0) return "-" + this.y3(Math.abs(f0));
		if (f0 < 1e3) return f0.toString();
		for (a2g = Math.floor(Math.log(f0 + .5) / Math.log(10)) + 1, a2h = Math.floor((a2g - 1) / 3), a2j = (a2i = f0.toString()).substring(a2g - 3, a2g), a7 = 1; a7 < a2h; a7++) a2j = a2i.substring(a2g - 3 * (a7 + 1), a2g - 3 * a7) + " " + a2j;
		return a2i.substring(0, a2g - 3 * a2h) + " " + a2j
	}, this.a2k = function(g6, a2g) {
		return g6.toFixed(a2g) + "%"
	}, this.a2l = function(f0, a2m) {
		return f0.toFixed(bH.p4(Math.floor((void 0 === a2m ? 3 : a2m) - Math.log10(Math.max(f0, 1))), 0, 8))
	}, this.a2n = function(f0, mF, a2g) {
		return (f0 * mF).toFixed(a2g)
	}, this.zQ = function(username) {
		var ec, eN = username.indexOf("[");
		return !(eN < 0) && 1 < (ec = username.indexOf("]")) - eN && ec - eN <= 8 ? username.substring(eN + 1, ec).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.zQ;
	this.a2o = function(pD) {
		for (var er = Math.floor(.5 * pD.length + .5), mL = Math.floor(.5 * (er - 1)), a7 = 0; a7 < mL; a7++)
			for (var es = -1; es < 2; es += 2) {
				var et = er + es * a7;
				if (" " === pD[et]) return [this.zN(pD.substring(0, et)), this.a2p(pD.substring(et))]
			}
		return [pD.substring(0, er), pD.substring(er)]
	}, this.a2p = function(pD) {
		for (var eY = pD.length, a7 = 0; a7 < eY; a7++)
			if (" " !== pD[a7]) return pD.substring(a7);
		return pD
	}, this.zN = function(pD) {
		for (var a7 = pD.length - 1; 0 <= a7; a7--)
			if (" " !== pD[a7]) return pD.substring(0, a7 + 1);
		return pD
	}, this.a2q = function(pD, a2r) {
		return pD.split("(")[0] + "(🧈 " + a2r.toFixed(2) + ")"
	}, this.startsWith = function(pD, a2s) {
		return pD.substring(0, a2s.length) === a2s
	}, this.a25 = function(pD, a2s) {
		var eY = pD.length;
		return pD.substring(eY - a2s.length, eY) === a2s
	}, this.a2t = function(g, a2u, a2v) {
		var pD = "",
			eY = g.length - 1;
		a2v = a2v || "";
		for (var a7 = 0; a7 < eY; a7++) pD += a2v + g[a7] + a2v + ",", (a7 + 1) % a2u == 0 && (pD += "\n");
		return pD += a2v + g[eY] + a2v
	}, this.a2w = function(pD, hb, hc) {
		return pD.replace(new RegExp(hb, "g"), hc)
	}
}

function a2x() {
	this.it = function(player, eK) {
		aE.wm(player, bI.eg(eK), bI.ei(eK)) && (bb.dc = !0), a9.k5 && this.ie()
	}, this.ie = function() {
		a9.gu = !1;
		for (var a7 = 0; a7 < a9.jm; a7++) 0 !== ac.la[a7] && 0 === ac.gM[a7] && aE.ws(a7);
		0 !== ac.la[a9.eI] ? (bZ.lW[7] = ac.gM[a9.eI], bZ.lW[8] = ac.ga[a9.eI], aN.a2y(), aS.a2z(), a9.gi || aD.lw(ac.iK[a9.eI] - 5, ac.iM[a9.eI] - 5, ac.iL[a9.eI] + 5, ac.iN[a9.eI] + 5), ap.dU()) : aT.show(!1, !1, !1, !0), aJ.a30(18), ab.a31(),
			ab.lM(!0), bL.s.a32(), aH.r4(), a9.oo = null, bX.a33 = !0, bX.a34(), a9.k5 && u.v.setState(1)
	}
}

function bv() {
	this.eV = 512, this.a2G = 15e8, this.a35 = 1e9, this.a2Q = 5e4, this.a36 = 512, this.fs = 2, this.eI = 0, this.jm = 0, this.yo = 0, this.k7 = 0, this.yn = 0, this.vx = 512, this.w2 = 512, this.a2F = 150, this.k5 = !0, this.gi = 0, this.yl = 0,
		this.jW = 0, this.m6 = !1, this.gu = 0, this.a37 = 0, this.hL = !1, this.w4 = 0, this.w5 = 0, this.k3 = 0, this.xD = 0, this.oo = null, this.z3 = new x6, this.a38 = 30, this.yi = 0, this.yq = 0, this.z2 = 0, this.yd = 0, this.data = new a39,
		this.a3A = new a3B, this.a3C = 0, this.a3D = function() {
			bN.dU(), this.yo = this.jm = this.data.humanCount, this.k5 = 1 === this.yo && !__fx.customLobby.isActive(), this.m6 = !1, this.gi = this.data.isReplay, this.k3 = 0 === this.data.gameMode ? [7, 10, 8][this.data.battleRoyaleMode] : this
				.data.isZombieMode ? 9 : this.data.numberTeams - 2, this.xD = this.data.isContest, this.hL = this.k3 < 7 || 9 === this.k3, this.k3 = 10 === this.k3 && this.k5 ? 7 : this.k3, this.k3 = 8 === this.k3 && 2 !== this.jm ? 7 : this.k3, av
				.dU(), this.w4 = this.data.numberTeams, this.data.teamPlayerCount ? this.w5 = +(0 < this.data.teamPlayerCount[0]) : (this.w5 = 0, this.hL && this.k5 && (this.data.teamPlayerCount = new Uint16Array(9), this.data.teamPlayerCount.fill(1,
					1, this.w4 + 1), a9.a3A.a3E())), this.a38 = this.jm <= 2 ? 30 : this.jm <= 50 ? 40 : 50, this.a37 = this.gu = __fx.customLobby.isActive() ? __fx.customLobby.gameInfo.spawnSelection : this.data.selectableSpawn, this.oo = this.gu ?
				new a2x : null, this.vx = __fx.customLobby.isActive() ? Math.max(Math.min(__fx.customLobby.gameInfo.botCount, this.data.playerCount), this.jm) : 1 === dg ? this.jm : this.data.playerCount,
				this.w2 = this.vx, this.k7 = this.vx - this.jm, this.yn = 0, this.eI = this.data.selectedPlayer, this.yi = 0, this.yq = 0, this.z2 = 0, this.yd = 0, au.a3F(this.data.spawningSeed), aa.dU(), ac.dU(), ae.a3G(), b4.nr.oZ = [], bc.dU(),
				this.yl = 1,
				__fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), bZ.dU(), a3H(), aY.dV(), ak.a3I(), bX.dU(), aY.dU(), an.dU(), bI.dU(), bJ.dU(), aj.dU(), bR.a3J(), aA.dU(),
				ae.a3(), aE.dU(), aF.dU(), ah.a3K(), b5.dU(), bd.dU(), bL.dU(), ba.dU(), a3L.putImageData(a3M, 0, 0), aR.dU(), aO.dU(), aN.dU(), b8.dU(), aq.dU(), aQ.dU(), aS.dU(), aI.dU(), aM.dU(), aJ.dU(), aL.dU(), aH.dU(), aT.dU(), aB.dU(), aC
				.dU(), fa(), aZ.dU(), ab.dU(), b0.dU(), b1.dU(), ax.dU(), this.z3.dU(), bb.a3J(), aD.lv(), 0 === ac.la[a9.eI] && aT.show(!1, !0), ab.lM(!0), ap.dU(), bb.dc = !0, this.gi || this.k5 && this.gu || u.v.setState(1), this.a3C = 0
		}, this.a08 = function(a3O) {
			a9.gi || b5.om.a3P.length || (b5.om.a3P = b5.a3Q.yE()), aw.s.a3R(), this.yl = 0, bb.a3S(), u.v.setState(0), a3O || bQ.e6.show(), aW.setState(0), 2 === this.a3C ? n.s.a3T() : 1 === this.a3C ? n.o(19) : n.o(5, 5)
		}, this.a3U = function() {
			return this.gi ? aI.gj || !b8.a3V : this.k5 && (aI.gj || this.gu)
		}, this.a3W = function() {
			return 1 === this.yl && !this.gu
		}
}

function a39() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.elo = null, this.colorsType = 0, this.colorsPersonalized = 1,
		this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData = null, this.spawningType = 0,
		this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this.aIncomeData = null, this
		.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null
}

function a3B() {
	this.a3E = function() {
		var a3X = a9.data;
		b6.pg.a1V(a3X.teamPlayerCount, a3X.playerCount), a3X.numberTeams = b6.pg.a1M(a3X.teamPlayerCount, 0), a3X.teamPlayerCount[0] && a3X.teamPlayerCount[7] && (a3X.teamPlayerCount[7] = 0, this.a3E())
	}, this.a3Y = function() {
		var a3X = a9.data;
		a3X.mapType < 2 ? bO.a3(bO.a3Z(a3X), a3X.mapSeed) : bO.a3a(a3X.canvas)
	}, this.a3b = function() {
		var a3X = a9.data;
		a3X.colorsData || (a3X.colorsData = new Uint32Array(1)), a3X.selectableColor && (a3X.colorsData[0] = bf.s.uS()), a3X.selectableName && (a3X.playerNamesData || (a3X.playerNamesData = new Array(1)), a3X.playerNamesData[0] = bf.dp.data[122]
			.value)
	}, this.a3c = function() {
		a9.data = new a39, a9.data.aIncomeType = 2, a9.data.aIncomeData = new Uint8Array(a9.eV), a9.data.aIncomeData[0] = 64
	}
}

function dM() {
	this.xm = 0, this.gap = 0, this.rZ = 0, this.pe = 0, this.dU = function() {
		this.resize()
	}, this.resize = function() {
		this.xm = .0022 * b6.pW.pX(.5) * at.pY, this.rZ = this.xm / at.pc, this.gap = Math.max(Math.floor((u.v.rB() ? .0114 : .01296) * at.pY), 2), this.pe = this.gap / at.pc
	}
}

function dL() {
	this.a3d = function() {
		return u.v.rB() ? 2 : 1
	}
}

function c6() {
	var q7, ef, eh, a3e, a3f, a3g, lt, player, a3h, gap, zoom, oS, a3i;

	function a3s(player) {
		for (var a7 = oS.length - 1; 0 <= a7; a7--)
			if (oS[a7] === player) return 1
	}

	function a3q(a3n) {
		var a7, eY;
		if (-1 !== a3n)
			for (eY = q7.length, a7 = 0; a7 < eY; a7++)
				if (q7[a7].xJ && q7[a7].ef + 1 === a3n % 4 && q7[a7].eh + 1 === a3n >> 2) return a7;
		return -1
	}

	function a3o(kp, kq) {
		var sL = gap / 2;
		return kp < ef - a3e - 3 * sL || ef + 3 * a3e + 5 * sL < kp || kq < eh - a3e - 3 * sL || eh + 2 * a3e + 3 * sL < kq ? -1 : 4 * (kq < eh - sL ? 0 : kq < eh + a3e + sL ? 1 : 2) + (kp < ef - sL ? 0 : kp < ef + a3e + sL ? 1 : kp < ef + 2 * a3e +
			3 * sL ? 2 : 3)
	}
	this.a3j = function() {
		var a7, es, a3m = [b7.n3, b7.nH, b7.mb, b7.nb, b7.nU];
		for (q7 = new Array(9), a7 = 0; a7 < 9; a7++) q7[a7] = {
			id: a7,
			xJ: !1,
			kW: 0,
			canvas: [],
			ef: 0,
			eh: 0
		};
		for (q7[0].colors = [0, 1, 2, 3], q7[0].ef = 0, q7[0].eh = 0, q7[1].colors = [0, 1, 4], q7[1].ef = 1, q7[1].eh = 0, q7[2].colors = [0, 2], q7[2].ef = -1, q7[2].eh = 0, q7[3].colors = [0], q7[3].ef = 0, q7[3].eh = 0, q7[4].colors = [0, 2],
			q7[4].ef = 1, q7[4].eh = 1, q7[5].colors = [3], q7[5].ef = 0, q7[5].eh = -1, q7[6].id = 20, q7[6].colors = [0], q7[6].ef = 1, q7[6].eh = -1, q7[7].id = 21, q7[7].colors = [0], q7[7].ef = 0, q7[7].eh = 1, q7[8].id = 16, q7[8]
			.colors = [0], q7[8].ef = 0, q7[8].eh = 0, a7 = 0; a7 < 9; a7++)
			for (es = 0; es < q7[a7].colors.length; es++) q7[a7].canvas.push(function(id, a1Z) {
				if (id < 20) return b6.canvas.xY(aX.get(3), id, a1Z);
				var a1Z = aX.get(3).height,
					a1a = b6.pW.vE(a1Z, a1Z),
					hT = b6.pW.getContext(a1a);
				20 === id ? hT.drawImage(aX.get(18), 0, 0) : 21 === id && af.vP.xn(af.xG.xc + af.xG.xt, hT, 0, 0, a1Z);
				return a1a
			}(q7[a7].id, a3m[q7[a7].colors[es]]))
	}, this.a3l = function() {
		return q7
	}, this.dU = function() {
		oS = [], ef = eh = lt = 0, a3f = a3g = -1e3, this.resize()
	}, this.resize = function() {
		a3e = Math.floor((u.v.rB() ? .075 : .0468) * at.pY), zoom = a3e / aX.get(3).height, gap = Math.floor(a3e / 3)
	}, this.a0b = function(kp, kq) {
		return !!this.xJ() && (bb.dc = !0, !!af.vP.gm(kp, kq, player) || (kp = function(kp, kq) {
			a3g = a3f = -1e3;
			var a3p = a3q(a3o(kp, kq));
			if (-1 === a3p) return 0;
			if (1 !== q7[a3p].colors[q7[a3p].kW])
				if (5 === a3p) {
					if (! function() {
							var dk = performance.now();
							a3i + 4e3 < dk && (oS = []);
							a3i = dk
						}(), a3s(player)) return 1;
					oS.push(player), 16 < oS.length && oS.shift()
				} else if (6 === a3p) {
				for (var a7 = oS.length - 1; 0 <= a7; a7--) 0 === ac.la[oS[a7]] && oS.splice(a7, 1);
				0 < oS.length && (b1.a3t(1, oS, !0) && b4.fu.oR(oS, player), oS = [])
			} else if (2 === a3p) b4.gv.nx(aN.h0(), player);
			else if (3 === a3p) a9.gu && b4.gv.gw(a3h);
			else if (0 === a3p)
				if (0 === q7[0].kW) {
					if (a9.a37 && aS.a3u() < 350) return 1;
					b4.gv.h6(aN.h0(), player)
				} else ax.h8(player, aN.h0());
			else if (1 === a3p) bR.a3v(), b4.gv.h4(aN.h0(), a3h);
			else {
				if (7 === a3p) return bR.a3w(), af.vP.show(kp, kq), 2;
				if (4 === a3p) b1.a3t(0, [player], !0) && b4.fu.oO(player);
				else {
					if (8 !== a3p) return 0;
					b4.gv.gz(aN.h0(), a3h, player)
				}
			}
			return 1
		}(kp, kq), this.r4(), 2 === kp && (af.vP.xJ = !0), 0 < kp))
	}, this.a0d = function(kp, kq) {
		this.xJ() || (a3f = kp, a3g = kq, lt = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = bI.gq(mouseX),
			coordY = bI.gs(mouseY),
			coord = bI.ew(coordX, coordY),
			point = bI.eO(coord);
		if (coordX < 0 || coordY < 0) return;
		(function(kp, kq, eC) {
			aY.eT(eC) || -1 === (kp = bJ.h2.a4A(kp, kq)) ? aJ.a49(eC) : aJ.a4B(kp)
		}(mouseX, mouseY, point))
	}
	this.click = function(kp, kq, a0k) {
		var gp = bI.gq(kp),
			gr = bI.gs(kq),
			eK = bI.ew(gp, gr),
			eC = bI.eO(eK);
		if (!bI.gt(gp, gr)) return !1;
		gp = (u.v.rB() ? .025 : .0144) * at.pY, gr = performance.now();
		if (Math.abs(kp - a3f) > gp || Math.abs(kq - a3g) > gp || lt + 500 < gr) return !1;
		if (lt = gr, a0k && ! function(kp, kq, eC) {
				aY.eT(eC) || -1 === (kp = bJ.h2.a4A(kp, kq)) ? aJ.a49(eC) : aJ.a4B(kp)
			}(kp, kq, eC), aI.gj || this.xJ() || !b6.fu.gl(a9.eI) || a9.gi) return this.r4(), !1;
		if (a9.gu) {
			if (!a0k) {
				if (!aY.eT(eC)) return !1;
				a3h = eK, q7[3].xJ = !0
			}
		} else if (bJ.h2.o2(eK)) a0k ? aJ.a42(55, 0) : bJ.a40.a41 = -1;
		else {
			if (a0k) return !1;
			bJ.h2.a43(kp, kq) || (2 === a9.yl ? aY.g8(eC) && (player = aY.eQ(eC), b6.fu.j9(player) || (q7[0].xJ = !0, q7[0].kW = 1, q7[7].xJ = !0)) : aY.ed(eC) ? (a3h = ai.e9.eB(eC)) && (gp = bI.eO(a3h), q7[8].xJ = !0, player = aY.eP(gp) ? a9
				.eV : aY.eQ(gp)) : (a3h = eK, bJ.h2.h3(a9.eI, eK) && (q7[0].xJ = !0, q7[0].kW = 1, q7[1].xJ = !0, q7[1].kW = bK.fA[2] ? 0 : 2), aY.h1(eC) || (aY.eP(eC) ? (player = a9.eV, h5(a9.eI) ? (q7[0].xJ = !0, q7[0].kW = 0) : h7(a9
				.eI, player) && (q7[0].xJ = !0, q7[0].kW = 3)) : (player = aY.eQ(eC)) === a9.eI ? (q7[0].xJ = !0, q7[0].kW = 1, q7[7].xJ = !0) : (q7[0].kW = 1, q7[5].xJ = function(player) {
				return !b6.fu.j9(player) && !a3s(player) && b1.a3t(1, [player], !1)
			}(player), q7[7].xJ = !b6.fu.j9(player), eR(player, a9.eI) ? (q7[4].xJ = !b6.fu.j9(player) && !ab.a45(player) && b1.a3t(0, [player], !1), q7[6].xJ = function(player) {
				if (0 === oS.length) return !1;
				if (performance.now() > a3i + 4e3) return !(oS = []);
				return !a3s(player) && ! function(player) {
					var a7;
					if (a9.hL)
						for (a7 = oS.length - 1; 0 <= a7; a7--)
							if (!eR(player, oS[a7])) return 1;
					return
				}(player)
			}(player), h9(a9.eI, player) ? (q7[0].kW = 0, q7[0].xJ = !0) : h7(a9.eI, player) && (q7[0].kW = 3, q7[0].xJ = !0), q7[0].xJ = this.a47()) : (q7[2].xJ = !0, q7[0].xJ = !0)))))
		}
		return this.a3z(kp, kq)
	}, this.a3z = function(kp, kq) {
		return ef = kp - Math.floor(a3e / 2), eh = kq - Math.floor(a3e / 2), !!this.xJ()
	}, this.a0H = function(kp, kq) {
		return !!this.xJ() && (af.vP.xJ ? !af.vP.xl(kp, kq) && (af.vP.xJ = !1, bb.dc = !0) : function(rP, kp, kq) {
			kp = a3o(kp, kq);
			if (0 <= a3q(kp)) return !1;
			if ((1 === kp || 6 === kp) && 0 <= a3q(2)) return !1;
			if ((6 === kp || 9 === kp) && 0 <= a3q(10)) return !1;
			return rP.r4(), bb.dc = !0
		}(this, kp, kq))
	}, this.r4 = function() {
		for (var a7 = q7.length - 1; 0 <= a7; a7--) q7[a7].xJ = !1, q7[a7].kW = 0;
		af.vP.xJ = !1
	}, this.xJ = function() {
		return this.a47() || af.vP.xJ
	}, this.a47 = function() {
		for (var eY = q7.length, a7 = 0; a7 < eY; a7++)
			if (q7[a7].xJ) return !0;
		return !1
	}, this.ta = function() {
		if (this.xJ())
			if (af.vP.xJ) af.vP.ta();
			else {
				var a7, hT = tb,
					es = q7,
					eY = es.length,
					a4F = (a3e + gap) / zoom;
				for (hT.imageSmoothingEnabled = !0, hT.setTransform(zoom, 0, 0, zoom, ef, eh), a7 = 0; a7 < eY; a7++) es[a7].xJ && tb.drawImage(es[a7].canvas[es[a7].kW], es[a7].ef * a4F, es[a7].eh * a4F);
				hT.imageSmoothingEnabled = !1, hT.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function c7() {
	var jF, canvas, a4G, a4H, a4I, a4J = -1;

	function a4K() {
		var a4L, x0 = canvas.getContext("2d", {
			alpha: !0
		});
		x0.clearRect(0, 0, jF, jF), x0.fillStyle = b7.mZ, x0.fillRect(0, 0, jF, jF), 0 === a4H && (x0.fillStyle = b7.me, x0.fillRect(0, 0, jF, jF)), x0.fillStyle = b7.md, x0.fillRect(0, 0, jF, 1), x0.fillRect(0, 0, 1, jF), x0.fillRect(0, jF - 1, jF,
				1), x0.fillRect(jF - 1, 0, 1, jF), a4L = .9 * jF / aX.get(0).width, x0.imageSmoothingEnabled = !0, x0.setTransform(a4L, 0, 0, a4L, Math.floor((jF - a4L * aX.get(0).width) / 2), Math.floor((jF - a4L * aX.get(0).height) / 2)), x0
			.drawImage(aX.get(0), 0, 0), x0.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a4N(kp, kq) {
		if (!aI.gj) return kp <= jF + bY.gap && kq >= aN.eh ? 9 : -1;
		if (kp <= 4 * jF + bY.gap) {
			if (kq >= aN.eh) return 0;
			if (kq >= aN.eh - jF - a4I * bY.gap) return 2
		} else if (kp <= 7 * jF + bY.gap && kq >= aN.eh - jF - a4I * bY.gap) return 1;
		return -1
	}
	this.gj = !1, this.dU = function() {
		a4H = -1, this.gj = !1, a4I = u.v.rB() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		jF = aN.jF, (canvas = document.createElement("canvas")).width = jF, canvas.height = jF, a4G = b6.pW.rY(1, (u.v.rB() ? .5 : .45) * jF), a4K()
	}, this.a0s = function() {
		this.gj = !this.gj, this.gj ? (b8.a0r(!1), a9.gi && b8.a3V && b8.a0t(!0), this.a4M()) : (a4H = -1, a4K(), !a9.k5 || 1 !== a9.yl || a9.gu || a9.gi || u.v.setState(1)), bb.dc = !0
	}, this.a4M = function() {
		(a9.k5 || a9.gi) && 1 === a9.yl && (aR.lM(!0), a9.gu || setTimeout(function() {
			bX.yw()
		}, 0), u.v.setState(0))
	}, this.gm = function(kp, kq) {
		return 0 <= (a4J = a4N(kp, kq)) || !aI.gj || a9.k5 || a9.gi || ba.xJ || aI.a0s(), a4J
	}, this.a0H = function(kp, kq) {
		kp = a4N(kp, kq);
		kp !== a4H && (a4H = kp, this.gj || a4K(), bb.dc = !0)
	}, this.a0I = function(kp, kq) {
		kp = a4N(kp, kq);
		return -1 !== kp && a4J === kp && (this.gj ? a9.m6 ? (0 <= kp && b8.a0r(!1), !a9.gi) : (0 === kp ? a9.a08() : 1 === kp ? this.a0s() : 2 === kp && n.o(1, 0), !0) : 9 === kp && (this.a0s(), !0))
	}, this.ta = function() {
		var a1;
		this.gj ? (a1 = Math.floor(5.5 * jF), tb.setTransform(1, 0, 0, 1, bY.gap, aN.eh), tb.fillStyle = b7.mZ, tb.fillRect(0, 0, a1, jF), 0 === a4H ? (tb.fillStyle = b7.me, tb.fillRect(0, 0, 4 * jF, jF)) : 1 === a4H && (tb.fillStyle = b7.me, tb
				.fillRect(4 * jF, 0, Math.floor(1.5 * jF), jF)), tb.fillStyle = b7.md, tb.fillRect(0, 0, a1, 1), tb.fillRect(0, 0, 1, jF), tb.fillRect(4 * jF, 0, 1, jF), tb.fillRect(0, jF - 1, a1, 1), tb.fillRect(a1 - 1, 0, 1, jF), tb.font =
			a4G, b6.pW.textBaseline(tb, 1), b6.pW.textAlign(tb, 1), tb.fillText(L(37), 2 * jF, .54 * jF), a1 = .4 * jF, aI.a4R(bY.gap + 4 * jF + (1.5 * jF - a1) / 2, aN.eh + .3 * jF, a1), a1 = 1, tb.setTransform(1, 0, 0, 1, bY.gap, aN.eh -
				a1 * a4I * bY.gap - a1 * jF), tb.fillStyle = b7.mZ, tb.fillRect(0, 0, 4 * jF, jF), a4H === a1 + 1 && (tb.fillStyle = b7.me, tb.fillRect(0, 0, 4 * jF, jF)), tb.fillStyle = b7.md, tb.fillRect(0, 0, 4 * jF, 1), tb.fillRect(0, 0,
				1, jF), tb.fillRect(4 * jF, 0, 1, jF), tb.fillRect(0, jF - 1, 4 * jF, 1), tb.fillText(L(0 === a1 ? 37 : 38), 2 * jF, .54 * jF), tb.setTransform(1, 0, 0, 1, 0, 0)) : tb.drawImage(canvas, bY.gap, aN.eh)
	}, this.p7 = function(player) {
		return 0 !== ac.la[player] && 2 !== a9.yl && !b6.fu.j9(player)
	}, this.a4R = function(ef, eh, eY) {
		tb.setTransform(1, 0, 0, 1, ef, eh), tb.lineWidth = bY.xm, tb.strokeStyle = b7.md, tb.beginPath(), tb.moveTo(0, 0), tb.lineTo(eY, eY), tb.moveTo(0, eY), tb.lineTo(eY, 0), tb.stroke()
	}
}

function c8() {
	var a4T, jF, a4U, a4V, a4W, a4X, a4Y, a4Z, a4a;

	function ww() {
		return aN.a4s(aJ.a4o()) ? aq.xJ ? aN.eh - aN.jF - 2 * a4U : aN.eh - a4U : b8.a4s(aJ.a4r()) ? aq.xJ ? b8.ww() - aN.jF - 2 * a4U : b8.ww() - a4U : aq.xJ ? at.jF - aN.jF - (bg.a3d() + 1) * a4U : at.jF - bg.a3d() * bY.gap
	}

	function a4f(dk, pD, id, g6, a4i, a4j, vX, a4k, a4l, a4m) {
		var a7, x0, a1a, pO, g, a4x = void 0 !== a4l,
			a1 = Math.floor(aM.measureText(pD, aJ.a4G) + 1.5 * a4V + (a4x ? jF : 1.5 * a4V));
		if (bb.dc = !0, a1 + a4U > at.a1 && !a4x && 50 !== id && 20 < pD.length) a4f(dk, (g = b6.zM.a2o(pD))[0], id, g6, a4i, a4j, vX, a4k, a4l, a4m), a4f(dk, g[1], id, g6, a4i, a4j, vX, a4k, a4l, a4m);
		else if (g = a1 + (50 === id ? a4W : 0), (a1a = document.createElement("canvas")).width = a1, a1a.height = jF, (x0 = a1a.getContext("2d", {
				alpha: !0
			})).font = aJ.a4G, b6.pW.textBaseline(x0, 1), b6.pW.textAlign(x0, 0), x0.clearRect(0, 0, a1, jF), x0.fillStyle = a4j, x0.fillRect(0, 0, a1, jF), x0.fillStyle = a4i, x0.fillText(pD, Math.floor(1.5 * a4V), Math.floor(jF / 2)), a4x && (x0
				.imageSmoothingEnabled = !0, af.vP.xn(a4l, x0, a1 - jF, 0, jF)), 0 === (pO = {
				lt: dk,
				pD: pD,
				id: id,
				player: g6,
				canvas: a1a,
				a4i: a4i,
				a4j: a4j,
				a1: a1,
				a4p: g,
				vX: vX,
				a4k: a4k,
				a4l: a4l,
				a4m: a4m
			}).lt || 0 < a4T.length && 0 < a4T[0].lt) a4T.unshift(pO);
		else {
			for (a7 = 1; a7 < a4T.length; a7++)
				if (0 < a4T[a7].lt) return void a4T.splice(a7, 0, pO);
			a4T.push(pO)
		}
	}

	function a4g(dz, sL, es) {
		return "rgb(" + dz + "," + sL + "," + es + ")"
	}

	function a4y(id, g1) {
		for (var eY = a4T.length, a7 = 0; a7 < eY; a7++) a4T[a7].id === id && g1-- <= 0 && (a4T.splice(a7, 1), a7--, eY--)
	}

	function a4z(id, player) {
		for (var em = !1, a7 = a4T.length - 1; 0 <= a7; a7--) a4T[a7].id !== id || player !== a9.eV && a4T[a7].player !== player || (a4T.splice(a7, 1), em = !0);
		return em
	}

	function a5N(pD) {
		a4f(340, pD, 6, 0, a4g(215, 245, 255), b7.ma, -1, !1)
	}
	this.a4b = "", this.dU = function() {
		var self;
		a4Z = 0, a4Y = u.v.rB() ? 7 : 12, a4X = {
			yZ: [0, 0, 0],
			a4c: [0, 0, 0],
			ls: [220, 180, 180],
			tZ: [0, 0, 0],
			et: [0, 0, 0]
		}, a4T = [], this.resize(), a9.gu && this.yx(0, 18), bO.vC.vD[bO.eE].name.length && a5N(L(85, [bO.vC.vD[bO.eE].name])), a5N(L(86, [bO.ej - 2 + "x" + (bO.ek - 2)])), a5N(L(87, [ak.a5O])), ak.a5O !== ak.a5P && a5N(L(88, [ak.a5P + " (" +
			b6.zM.a2k(100 * ak.a5P / ak.a5O, 1) + ")"
		])), 0 < ak.a5Q && a5N(L(61, [ak.a5Q + " (" + b6.zM.a2k(100 * ak.a5Q / ak.a5O, 1) + ")"])), 0 < ak.a5R && a5N(L(89, [ak.a5R + " (" + b6.zM.a2k(100 * ak.a5R / ak.a5O, 1) + ")"])), 10 === a9.k3 && a4f(120, L(90), 6, 0, a4g(235, 255,
			120), b7.ma, -1, !1), 0 !== (self = this).a4b.length && (a4f(200, self.a4b, 0, 0, b7.md, b7.ma, -1, !1), self.a4b = ""), a9.xD && a4f(340, L(39), 6, 0, a4g(255, 200, 0), b7.ma, -1, !1)
	}, this.resize = function() {
		var a4h, a7;
		if (jF = (jF = Math.floor((u.v.rB() ? .031 : .0249) * at.pY)) < 10 ? 10 : jF, this.fontSize = Math.floor(2 * jF / 3), this.a4G = b6.pW.rY(1, this.fontSize), a4U = bY.gap, a4V = Math.floor(jF / 5), 0 < a4T.length)
			for (a4h = a4T, a4T = [], a7 = a4h.length - 1; 0 <= a7; a7--) a4f(a4h[a7].lt, a4h[a7].pD, a4h[a7].id, a4h[a7].player, a4h[a7].a4i, a4h[a7].a4j, a4h[a7].vX, a4h[a7].a4k, a4h[a7].a4l, a4h[a7].a4m);
		this.a4n()
	}, this.a4n = function() {
		a4a = document.createElement("canvas");
		var pD = L(40),
			x0 = (a4W = aM.measureText(pD, this.a4G) + 5 * a4V, a4a.height = jF, a4a.width = a4W, a4a.getContext("2d", {
				alpha: !0
			}));
		x0.font = this.a4G, b6.pW.textBaseline(x0, 1), b6.pW.textAlign(x0, 1), x0.clearRect(0, 0, a4W, jF), x0.fillStyle = b7.n0, x0.fillRect(0, 0, a4W, jF), x0.fillStyle = b7.md, x0.fillText(pD, Math.floor(a4W / 2), Math.floor(jF / 2))
	}, this.a4o = function() {
		var eY;
		return aq.xJ ? aq.a1 : 0 === (eY = a4T.length) ? 0 : 1 === eY ? a4T[0].a4p : a4q(a4T[0].a4p, a4T[1].a4p)
	}, this.a4r = function() {
		var eY = a4T.length;
		return aq.xJ ? eY ? a4q(aq.a1, a4T[0].a4p) : aq.a1 : 0 === eY ? 0 : 1 === eY ? a4T[0].a4p : 2 === eY ? a4q(a4T[0].a4p, a4T[1].a4p) : a4q(a4q(a4T[0].a4p, a4T[1].a4p), a4T[2].a4p)
	}, this.gm = function(ef, eh) {
		for (var m3, a4t, a4u = ww(), a7 = a4T.length - 1; 0 <= a7; a7--)
			if ((a4t = a4u - (a7 + 1) * jF) <= eh && eh < a4t + jF) return 50 === a4T[a7].id ? ef >= at.a1 - a4W - a4U - a4T[a7].a1 && (ef >= at.a1 - a4W - a4U ? b4.fu.oO(a4T[a7].player) : aD.lx(a4T[a7].player, 800, !1, 0), !0) : ef >= at.a1 -
				a4T[a7].a1 - a4U && (736 === a4T[a7].id ? (a4t = a4T[a7].pD.split(" "), window.open(a4t[a4t.length - 1], "_blank")) : a4T[a7].a4k && (a4T[a7].a4m && a4T[a7].a4m.er ? (a4t = a4T[a7].a4m.eK, m3 = bI.eg(a4t) - 10, a4t = bI.ei(
					a4t) - 10, aD.lw(m3, a4t, 19 + m3, 19 + a4t)) : a4T[a7].a4m && a4T[a7].a4m.es ? aD.ly(a4T[a7].player, a4T[a7].a4m.lz) : (aD.lx(a4T[a7].player, 800, !1, 0), 0 <= a4T[a7].vX && (m3 = a4T[a7].vX, a4T[a7].vX = a4T[a7]
					.player, a4T[a7].player = m3))), !0);
		return !1
	}, this.z9 = function(dk, pD, id, g6, a4i, a4j, vX, a4k, a4l, a4m) {
		a4f(dk, pD, id, g6, a4i, a4j, vX, a4k, a4l, a4m)
	}, this.a4w = function(k) {
		a4f(300, k, 252, 0, b7.md, b7.ma, -1, !1)
	}, this.a30 = function(id) {
		for (var a7 = a4T.length - 1; 0 <= a7; a7--) a4T[a7].id === id && (a4T[a7].lt = 1)
	}, this.yx = function(player, id) {
		0 === id ? (aM.it(player, 0), a4y(423, 0), a4f(160, L(41, [ac.zK[player]]), 423, player, "rgb(10,220,10)", b7.ma, -1, !1)) : 1 === id ? (a4z(50, a9.eV), aM.it(player, 1), a4f(360, L(42, [ac.zK[player]]), 0, player, b7.nJ, b7.ma, -1, !0),
			aD.lx(player, 2700, !1, 0)) : 2 === id ? (aM.it(player, 2), a4f(0, L(43), 0, player, "rgb(10,255,255)", b7.ma, -1, !0), aD.lx(player, 2700, !1, 0)) : 3 === id ? (aM.it(player, 2), a4f(0, L(44, [ac.zK[player]]), 0, player, b7.md,
			b7.ma, -1, !0), aD.lx(player, 2700, !1, 0)) : 4 === id ? this.a50(1, player, player) : 5 === id ? 2 === ac.a27[player] || b6.fu.j9(a9.eI) || (function(id, lV) {
			var a7, a5C = 0,
				eY = a4T.length;
			for (a7 = 0; a7 < eY; a7++)
				if (a4T[a7].id === id && lV <= ++a5C) return a4T.splice(a7, 1)
		}(1, 5), ab.a52(player) ? a4f(180, L(45, [ac.zK[player]]), 1, player, a4g(255, 200, 180), b7.ma, -1, !0) : (a4y(573, 0), a4f(180, L(46, [ac.zK[player]]), 573, player, b7.nJ, b7.ma, -1, !0))) : 18 === id ? a4f(255, L(47), 18, 0, b7.md,
			b7.ma, -1, !1) : 21 === id ? a4f(220, L(48), id, 0, b7.md, b7.ma, -1, !1) : 22 === id ? this.a50(2, player, player) : 59 === id && a4f(0, L(49), id, 0, b7.na, b7.ma, 0, !1)
	}, this.a01 = function(k) {
		a4f(200, L(50, [k]), 94, 0, b7.md, b7.nF, -1, !1)
	}, this.z4 = function(a53) {
		if (a9.eI === a53 && !a9.k5)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			a4f(0, "Your Win Count is now " + __fx.wins.count, 3, a53, b7.md, b7.ma, -1, !0);
		ac.gM[a53] && (aM.it(a53, 2), a9.jm < 100 ? a4f(0, L(44, [ac.zK[a53]]), 3, a53, b7.md, b7.ma, -1, !0) : a4f(0, L(51, [ac.zK[a53]]), 3, a53, b7.md, b7.ma, -1, !0))
	}, this.a49 = function(eC) {
		var a56, pD, a54 = "(" + bI.eg(eC >> 2) + ", " + bI.ei(eC >> 2) + ")",
			a4k = !1,
			player = 0;
		aY.eT(eC) ? aY.eP(eC) ? a54 = L(52, [a54]) : (player = aY.eQ(eC), pD = L(53, [b6.x0.a1m(ac.a55[player], b6.pW.rY(0, 10), 150)]) + "   ", pD = (pD += L(54, [b6.zM.y3(ac.ga[player])]) + "   ") + L(55, [b6.zM.y3(ac.gM[player])]) + "   ", a9
				.hL && (a56 = bc.z7[bc.k8[bc.eW[player]]], pD += L(56) + ": " + a56 + "   "), b6.fu.j9(player) && (pD += L(57) + ": " + aA.jx[aA.hD[player]] + "   "), a54 = pD = (pD += L(58, [player]) + "   ") + L(59, [a54]), a4k = !0) : a54 = aY
			.ed(eC) ? L(60, [a54]) + "   #" + aY.eG(eC) : L(61, [a54]), bb.dc = !0, a4y(55, 0), a4f(220, a54, 55, player, b7.md, b7.ma, -1, a4k)
	}, this.a4B = function(a57) {
		var kU = bJ.s,
			player = kU.a58[a57] >> 3,
			pD = (bb.dc = !0, a4y(55, 0), L(62, [ac.zK[player]]) + "   ");
		a4f(220, pD += L(54, [kU.a59[a57]]), 55, player, b7.md, b7.ma, -1, !0)
	}, this.o7 = function(nu, a5A, o8) {
		nu === a9.eI ? a4f(175, " " + L(63, [ac.zK[a5A]]) + ": ", 1001, a5A, a4g(200, 255, 210), b7.ma, -1, !0, o8) : this.a5B(nu, o8)
	}, this.a5B = function(nu, o8) {
		a4y(1e3, 0), a4f(175, ac.zK[nu] + ": ", 1e3, nu, b7.md, "rgba(5,60,25,0.9)", -1, !0, o8)
	}, this.zA = function() {
		var k;
		a9.yq ? (k = L(64), aM.z8(L(65), 2, 1, 12), a4f(0, k, 40, 0, "rgb(10,220,10)", b7.ma, -1, !1)) : (k = L(66), aM.z8(L(67), 2, 0, 16), a4f(0, k, 41, 0, b7.md, b7.ma, -1, !1))
	}, this.x7 = function() {
		var g1 = ac.zK,
			eb = a9.data;
		a4f(300, g1[0] + " [" + a9.z3.xC(eb.elo[0]) + "] vs " + g1[1] + " [" + a9.z3.xC(eb.elo[1]) + "]", 65, 0, b7.mU, "rgba(100,255,255,0.75)", -1, !1)
	}, this.a5D = function(k) {
		a4f(200, k, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.a5E = function(a5F) {
		a4f(0, L(a5F ? 68 : 69), 247, 0, b7.nZ, b7.ma, -1, !1)
	}, this.xF = function(xB, xE, a5G) {
		var eb = a9.data,
			g1 = ac.zK;
		a4f(0, g1[0] + ": " + a9.z3.xC(eb.elo[0]) + " -> " + xB, 66, 0, b7.md, a5G[0], -1, !1), a4f(0, g1[1] + ": " + a9.z3.xC(eb.elo[1]) + " -> " + xE, 66, 1, b7.md, a5G[1], -1, !1)
	}, this.oP = function(player, id) {
		0 === id ? a4z(50, player) ? (a4f(128, L(70, [ac.zK[player]]), 52, player, a4g(180, 255, 180), b7.ma, -1, !0), ab.p5(player, 2, 255)) : a4f(384, L(71, [ac.zK[player]]), 51, player, a4g(210, 210, 255), b7.ma, -1, !0) : a4z(51, player) ? (
			a4f(128, L(72, [ac.zK[player]]), 52, player, b7.md, "rgba(60,120,10,0.9)", -1, !0), ab.p5(player, 2, 255)) : (a4f(384, L(73, [ac.zK[player]]), 50, player, b7.md, "rgba(90,90,90,0.9)", -1, !0), ab.p5(player, 2, 96))
	}, this.oT = function(yZ, target) {
		var color = a4g(210, 255, 210);
		1 < yZ.length ? a4f(230, L(74, [yZ.length, ac.zK[target]]), 66, target, color, b7.ma, -1, !0) : a4f(230, L(75, [ac.zK[yZ[0]], ac.zK[target]]), 66, yZ[0], color, b7.ma, target, !0)
	}, this.a5H = function(player, target) {
		a4f(230, L(76, [ac.zK[player], ac.zK[target]]), 66, player, b7.md, "rgba(75,65,5,0.9)", target, !0)
	}, this.a42 = function(id, g1) {
		a4y(id, g1)
	}, this.ys = function(id, player) {
		a4z(id, void 0 === player ? a9.eV : player)
	}, this.a5I = function(id) {
		for (var a7 = a4T.length - 1; 0 <= a7; a7--)
			if (a4T[a7].id === id) return a4T[a7];
		return null
	}, this.oK = function(a5J, a5K, player) {
		2 !== ac.a27[a9.eI] && (a4f(200, 1 === a5J ? L(77, [ac.zK[player]]) : L(78, [a5J, ac.zK[player]]), 30, player, "rgb(190,255,190)", b7.ma, -1, !0), a5K) && a4f(30, 1 === a5K ? L(79) : L(80, [a5K]), 30, 0, b7.md, b7.ma, -1, !1)
	}, this.a5M = function(a5J, player) {
		2 !== ac.a27[a9.eI] && (a4y(31, 0), 2 === ac.a27[player] || player >= a9.jm ? a4f(150, 1 === a5J ? L(81, [ac.zK[player]]) : L(82, [ac.zK[player], a5J]), 31, player, b7.mU, "rgba(205,205,205,0.9)", -1, !0) : a4f(150, 1 === a5J ? L(83, [ac
			.zK[player]
		]) : L(84, [ac.zK[player], a5J]), 31, player, b7.mU, "rgba(205,255,205,0.9)", -1, !0))
	}, this.yr = function(bo) {
		for (var et = bb.jj(), a7 = 2; 0 <= a7; a7--) 0 < a4X.tZ[a7] && (bo || a4X.et[a7] < et - 220) && this.a5S(a7)
	}, this.a5S = function(id) {
		var pD, eY = a4X.tZ[id],
			player = a4X.yZ[id];
		a4X.tZ[id] = 0, 1 === eY ? (0 === id ? pD = L(91, [ac.zK[player], ac.zK[a4X.a4c[0]]]) : 1 === id ? pD = L(92, [ac.zK[player]]) : 2 === id ? pD = L(93, [ac.zK[player]]) : 3 === id && (pD = L(94, [ac.zK[player]])), a4y(7, 0), a4f(a4X.ls[
			id], pD, 7, a4X.a4c[id], b7.md, b7.ma, -1, !0)) : (pD = L(0 === id ? 95 : 1 === id ? 96 : 97, [eY]), a4y(7, 0), a4f(a4X.ls[id], pD, 7, player, b7.md, b7.ma, -1, !1))
	}, this.a50 = function(id, gy, vX) {
		var et = bb.jj(),
			eY = a4X.tZ[id] + 1;
		a4X.tZ[id]++, a4X.yZ[id] = gy, a4X.a4c[id] = vX, 1 === eY && (a4X.et[id] = et), (1 === eY && (a9.yo < 32 || 2 === a9.yl) || 1 < eY && (a4X.et[id] < et - 140 || 2 === a9.yl)) && this.a5S(id)
	}, this.ie = function() {
		for (var hf = (hf = a4T.length - a4Y) <= 1 ? 1 : hf * hf, a7 = a4T.length - 1; 0 <= a7; a7--) 0 < a4T[a7].lt && (a4T[a7].lt -= hf, a4T[a7].lt <= 0) && (bb.dc = !0, a4T.splice(a7, 1));
		! function() {
			var g1, a7;
			if (128 !== a4Z && !(++a4Z < 128))
				for (g1 = 5, a7 = ah.jn - 1; 0 <= a7; a7--) 1 === ac.a27[ah.jo[a7]] && 0 < g1-- && a4f(240, L(94, [ac.zK[ah.jo[a7]]]), 1, ah.jo[a7], b7.mU, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.yr(!1)
	}, this.ta = function() {
		for (var w0, eh = ww(), a7 = a4T.length - 1; 0 <= a7; a7--) w0 = eh - (a7 + 1) * jF, 50 === a4T[a7].id ? (tb.drawImage(a4T[a7].canvas, at.a1 - a4T[a7].a1 - a4W - a4U, w0), tb.drawImage(a4a, at.a1 - a4W - a4U, w0)) : tb.drawImage(a4T[a7]
			.canvas, at.a1 - a4T[a7].a1 - a4U, w0)
	}
}

function c9() {
	var a5U, a5V, a5W, a1, jF, font, pD;

	function a5Z(a5a) {
		return a5a < 10 ? "0" + a5a : String(a5a)
	}
	this.dU = function() {
		pD = L(98)
	}, this.resize = function() {
		a1 = Math.floor((u.v.rB() ? .53 : .36) * at.pY), jF = Math.floor(.065 * a1), font = b6.pW.rY(1, Math.floor(.9 * jF)), a5W--, this.setTime()
	}, this.ie = function() {
		this.setTime() && (bb.dc = !0)
	}, this.setTime = function() {
		var dk = new Date,
			a5X = dk.getUTCMinutes(),
			dk = dk.getUTCSeconds();
		return a5V = 3600 - 60 * a5X - dk, a5V %= 900, a5U = pD + a5Z(Math.floor(a5V / 60)) + ":" + a5Z(a5V % 60), a5W !== (a5W = 60 * a5X + dk) && (a1 = aM.measureText(a5U, font), a1 += Math.floor(.4 * jF), !0)
	}, this.ta = function() {
		tb.lineWidth = 1 + Math.floor(jF / 15), tb.translate(at.a1 - jF, Math.floor(.5 * (at.jF + a1))), tb.rotate(-Math.PI / 2), tb.fillStyle = b7.md, tb.fillRect(0, 0, a1, jF), tb.strokeStyle = b7.mU, tb.strokeRect(0, 0, a1, jF + 10), tb
			.fillStyle = b7.mU, tb.font = font, b6.pW.textBaseline(tb, 1), b6.pW.textAlign(tb, 1), tb.fillText(a5U, Math.floor(a1 / 2), Math.floor(.59 * jF)), tb.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function cA() {
	var a4T, a5b, a4G, jF, a5c;

	function a5e(a7) {
		var a5g = !0,
			hb = b7.md,
			a1 = (a4T[a7].iw === a9.eV ? a4T[a7].x0.fillStyle = b7.mo : (aY.a5h(a4T[a7].iw), a4T[a7].x0.fillStyle = b6.color.mX(bK.f8[0], bK.f8[1], bK.f8[2], .87), 400 < b6.pg.a1G(bK.f8, 0, 2) && (a5g = !1, hb = b7.mU)), a4T[a7].canvas.width),
			s3 = (a4T[a7].x0.clearRect(0, 0, a1, jF), a4T[a7].x0.fillRect(0, 0, a1, jF), a4T[a7].x0.fillStyle = hb, ! function(x0, a1, jF) {
				x0.fillRect(0, 0, a1, 1), x0.fillRect(0, jF - 1, a1, 1), x0.fillRect(0, 0, 1, jF), x0.fillRect(a1 - 1, 0, 1, jF)
			}(a4T[a7].x0, a1, jF), a5b + 2 * jF < a1 && (a4T[a7].x0.fillRect(a1 - a5b - jF, 0, 1, jF), a4T[a7].x0.fillText(ac.zK[a4T[a7].iw], Math.floor((a1 - a5b) / 2), Math.floor(.57 * jF))), 0 !== a4T[a7].id ? 0 : jF);
		a4T[a7].x0.fillText(b6.zM.y3(a4T[a7].hD), Math.floor(a1 - a5b / 2 - s3), Math.floor(.57 * jF)),
			function(a7, a1, s3, a5g) {
				a4T[a7].x0.fillStyle = a5g ? b7.mf : b7.mb;
				a5g = Math.floor(a5b * a4T[a7].hD / a4T[a7].a5n);
				a4T[a7].x0.fillRect(Math.floor(a1 - a5b - s3), jF - a5c, a5g, a5c)
			}(a7, a1, s3, a5g), 0 === a4T[a7].id ? (a5k(a7, a1, a5g, hb), function(a7, a1, a5g) {
				a4T[a7].x0.strokeStyle = a5g ? b7.mv : b7.n5, a4T[a7].x0.fillRect(jF, 0, 1, jF);
				a5g = a1 - jF;
				a4T[a7].x0.beginPath(), a4T[a7].x0.moveTo(Math.floor(.3 * jF + a5g), Math.floor(jF / 2)), a4T[a7].x0.lineTo(Math.floor(jF - .3 * jF + 0 + a5g), Math.floor(jF / 2)), a4T[a7].x0.stroke(), a4T[a7].x0.beginPath(), a4T[a7].x0.moveTo(
					Math.floor(jF / 2 + a5g), Math.floor(.3 * jF)), a4T[a7].x0.lineTo(Math.floor(jF / 2 + a5g), Math.floor(jF - .3 * jF + 0)), a4T[a7].x0.stroke()
			}(a7, a1, a5g)) : a5k(a7, 2 * jF, a5g, hb)
	}

	function a5k(a7, a1, a5g, hb) {
		a4T[a7].x0.strokeStyle = a4T[a7].a5o ? b7.mm : a5g ? b7.nB : b7.nC, a4T[a7].x0.fillStyle = hb, a4T[a7].x0.fillRect(a1 - jF, 0, 1, jF), a4T[a7].x0.lineWidth = Math.max(Math.floor(jF / 12), 3), a4T[a7].x0.lineCap = "round";
		a5g = .35;
		a1 = jF + 1, a4T[a7].x0.beginPath(), a4T[a7].x0.moveTo(Math.floor(a1 - a5g * jF + 0), Math.floor(a5g * jF)), a4T[a7].x0.lineTo(Math.floor(a1 - jF + a5g * jF), Math.floor(jF - a5g * jF + 0)), a4T[a7].x0.stroke(), a4T[a7].x0.beginPath(), a4T[
			a7].x0.moveTo(Math.floor(a1 - jF + a5g * jF), Math.floor(a5g * jF)), a4T[a7].x0.lineTo(Math.floor(a1 - a5g * jF + 0), Math.floor(jF - a5g * jF + 0)), a4T[a7].x0.stroke()
	}

	function a5y(eY) {
		for (var hD, a7 = eY - 1; 0 <= a7; a7--) hD = aZ.fl(a9.eI, a7), a4T[a7].hD !== hD && (a4T[a7].hD = hD, a4T[a7].a5n = hD > a4T[a7].a5n ? hD : a4T[a7].a5n, a4T[a7].a5f = !0)
	}

	function a5d(a60) {
		a60.canvas = document.createElement("canvas"), bO.vI.font = a4G;
		var a1 = a5b;
		a60.iw < a9.eV && 0 === a60.id && (a1 += Math.floor(bO.vI.measureText(ac.zK[a60.iw] + "000").width)), a1 += jF, 0 === a60.id && (a1 += jF), a60.canvas.width = a1, a60.canvas.height = jF, a60.x0 = a60.canvas.getContext("2d", {
			alpha: !0
		}), a60.x0.font = a4G, b6.pW.textBaseline(a60.x0, 1), b6.pW.textAlign(a60.x0, 1)
	}

	function a5u(a7) {
		return aQ.a62() ? at.a1 - a4T[a7].canvas.width - bY.gap : aQ.ef
	}

	function a5v(a7) {
		return Math.floor(2 * bY.gap + (aQ.a62() ? aS.jF + bY.gap : 0) + aQ.jF + a7 * (1.3 * jF))
	}
	this.dU = function() {
		a4T = [], this.resize()
	}, this.resize = function() {
		a4G = aJ.a4G, jF = aJ.fontSize + 5, jF = Math.floor(1.25 * jF), u.v.rB() && (jF = Math.floor(1.25 * jF)), a5c = Math.floor(.15 * jF), bO.vI.font = a4G, a5b = Math.floor(bO.vI.measureText("02 000 000 0000").width);
		for (var a7 = a4T.length - 1; 0 <= a7; a7--) a5d(a4T[a7]), a5e(a7)
	}, this.lM = function() {
		for (var a7 = a4T.length - 1; 0 <= a7; a7--) a4T[a7].a5f && (a4T[a7].a5f = !1, a5e(a7))
	}, this.gm = function(kp, kq) {
		if (2 !== a9.yl && 0 !== ac.la[a9.eI] && !a9.gi && !b6.fu.j9(a9.eI))
			for (var a5p, a5q, a5r, a5s = u.v.rB() ? jF : 0, a5t = u.v.rB() ? Math.floor(.15 * jF) : 0, a7 = a4T.length - 1; 0 <= a7; a7--)
				if (a5p = a5u(a7), a5q = a5v(a7), a5r = a4T[a7].canvas.width, a5q - a5t <= kq && kq <= a5q + jF + a5t) {
					if (a5p - a5s <= kp && kp <= a5p + jF + a5s) return a4T[a7].a5o || (a4T[a7].a5f = !0, a4T[a7].a5o = !0, 0 === a4T[a7].id && b4.gv.o5(a4T[a7].iw)), !0;
					if (0 === a4T[a7].id && a5p + a5r - jF - a5s <= kp && kp <= a5p + a5r + a5s) return b4.gv.h6(aN.h0(), a4T[a7].iw), !0
				} return !1
	}, this.ie = function() {
		var eY;
		0 === ac.la[a9.eI] || b6.fu.j9(a9.eI) && !a9.gi || (function(eY) {
			if (a4T.length !== eY) return 1;
			for (var a7 = eY - 1; 0 <= a7; a7--)
				if (a4T[a7].id !== aZ.ff(a9.eI, a7) || a4T[a7].iw !== aZ.fk(a9.eI, a7)) return 1;
			return
		}(eY = aZ.fe(a9.eI)) && function(eY) {
			var a7, id, iw, es, hD, a4h = [];
			loop: for (a7 = 0; a7 < eY; a7++) {
				for (id = aZ.ff(a9.eI, a7), iw = aZ.fk(a9.eI, a7), es = 0; es < a4T.length; es++)
					if (a4T[es].id === id && a4T[es].iw === iw) {
						a4h.push(a4T.splice(es, 1)[0]);
						continue loop
					} hD = aZ.fl(a9.eI, a7), a5d(hD = {
					iw: iw,
					hD: hD,
					a5n: hD,
					id: id,
					a5f: !0,
					a5o: !1,
					canvas: null,
					x0: null
				}), a4h.push(hD)
			}
			a4T = a4h
		}(eY), a5y(eY))
	}, this.a61 = function(g6) {
		for (var eY = Math.min(a4T.length, aZ.fe(a9.eI)), a7 = 0; a7 < eY; a7++)
			if (a4T[a7].iw === g6) return void(a4T = [])
	}, this.ta = function() {
		if (0 !== ac.la[a9.eI] && (!b6.fu.j9(a9.eI) || a9.gi))
			for (var a7 = a4T.length - 1; 0 <= a7; a7--) tb.drawImage(a4T[a7].canvas, a5u(a7), a5v(a7))
	}
}

function cB() {
	var a4T, jr, a63, a64, jF, a4G, fontSize, a65, a66, a67, a68, canvas, x0, ln, a69;

	function tr(a7) {
		return L(0 === a7 ? 99 : 1 === a7 ? 100 : 2 === a7 ? 101 : 102)
	}

	function a6G() {
		tb.drawImage(canvas, bY.gap + (a9.hL ? bY.gap + bd.a6H() : 0), a6I + 2 * bY.gap)
	}

	function a6A() {
		canvas.width = a4T[0].width + a67, canvas.height = jF + a67, (x0 = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, a4T[0].width + a67, jF + a67), x0.translate(Math.floor(a67 / 2), Math.floor(a67 / 2)), x0.lineWidth = a67, x0.fillStyle = 1 === a4T[0].a6F ? b7.mi : b7.ma, a6J(), x0.fill(), x0.strokeStyle = 1 === a4T[0].a6F ? b7.mU :
			b7.md, a6J(), x0.stroke(), b6.pW.textAlign(x0, 1), b6.pW.textBaseline(x0, 1), x0.fillStyle = 1 === a4T[0].a6F ? b7.mU : b7.md, x0.font = a4G[0], x0.fillText(tr(a4T[0].a6E), Math.floor(a4T[0].width / 2), Math.floor(.72 * a65[0] * jF)), x0
			.font = a4G[1], x0.fillText(a4T[0].pD, Math.floor(a4T[0].width / 2), Math.floor((a65[0] + .48 * a65[1]) * jF))
	}

	function a6J() {
		x0.beginPath(), x0.moveTo(a68, 0), x0.lineTo(a4T[0].width - a68, 0), x0.lineTo(a4T[0].width, a68), x0.lineTo(a4T[0].width, jF - a68), x0.lineTo(a4T[0].width - a68, jF), x0.lineTo(a68, jF), x0.lineTo(0, jF - a68), x0.lineTo(0, a68), x0
			.closePath()
	}
	this.dU = function() {
		jr = 4, a63 = a64 = ln = 0, a4T = [], a4G = new Array(2), fontSize = new Array(2), (a65 = new Array(2))[0] = .3, a65[1] = .7, a66 = new Array(4), canvas = document.createElement("canvas"), a69 = bb.lt + 2e3, this.resize()
	}, this.resize = function() {
		var a7, a1;
		for (jF = Math.floor((u.v.rB() ? .0725 : .058) * at.pY), fontSize[0] = Math.floor(.85 * a65[0] * jF), fontSize[1] = Math.floor(.85 * a65[1] * jF), a4G[0] = b6.pW.rY(1, fontSize[0]), a4G[1] = b6.pW.rY(1, fontSize[1]), a7 = a66.length -
			1; 0 <= a7; a7--) a66[a7] = this.measureText(tr(a7) + "000", a4G[0]);
		if (a67 = Math.floor(1 + .05 * jF), a68 = Math.floor(.2 * jF), 0 < a4T.length) {
			for (a7 = a4T.length - 1; 0 <= a7; a7--) a1 = this.measureText(a4T[a7].pD + "00", a4G[1]), a4T[a7].width = a1 < a66[a7] ? a66[a7] : a1;
			a6A()
		}
	}, this.ie = function() {
		0 !== jr && (4 === jr ? bb.lt > a69 && (jr = 0, 1 === a9.yl) && aM.z8(bO.vC.vD[bO.eE].name, 3, 1, 9) : (1 === jr ? (0 === a63 && (a6A(), a63 = 1e-4), 1 <= (a63 += .002 * (bb.lt - ln)) && (a64 = 0, jr = 2, a63 = 1), bb.dc = !0) : 2 ===
			jr ? ((a64 += (bb.lt - ln) / 1e3) > a4T[0].ls || 1 < a64 && 1 < a4T.length) && (jr = 3) : 3 === jr && ((a63 -= .002 * (bb.lt - ln)) <= 0 && (a63 = 0, a4T.shift(), jr = 0 < a4T.length ? 1 : 0), bb.dc = !0), ln = bb.lt))
	}, this.measureText = function(pD, a4G) {
		return tb.font = a4G, Math.floor(tb.measureText(pD).width)
	}, this.it = function(a6D, a7) {
		this.z8(ac.zK[a6D], a7, 1, 0 === a7 ? 3 : 7)
	}, this.z8 = function(pD, a6E, a6F, ls) {
		var a1;
		pD.length && (a1 = (a1 = this.measureText(pD + "00", a4G[1])) < a66[a6E] ? a66[a6E] : a1, a4T.push({
			pD: pD,
			width: a1,
			a6E: a6E,
			a6F: a6F,
			ls: ls
		}), 0 === jr) && (a63 = 0, jr = 1, ln = bb.lt)
	}, this.ta = function() {
		0 !== jr && 0 !== a63 && (a63 < 1 ? (tb.globalAlpha = a63, a6G(), tb.globalAlpha = 1) : a6G())
	}
}

function cj() {
	var jF, canvas, x0, a6K, a6L, a6M, a6N, a5f, a6O, a6P, a6Q, a6R, a5F = !1,
		a1a = (this.xJ = !1, this.a1 = 0, new Array(2)),
		a6S = 0;

	function lN() {
		var a1 = aq.a1,
			kU = (a5f = !1, wz(x0, a1, jF), Math.floor(a1 / 2));
		1 === a6K ? (x0.fillStyle = b7.mx, x0.fillRect(kU, 0, kU, jF)) : -1 === a6K && (x0.fillStyle = b7.nD, x0.fillRect(0, 0, kU, jF)), x1(x0, a1, jF, 2);
		var kU = (kU = Math.floor(.25 * jF)) < 2 ? 2 : kU,
			a5O = (x0.fillStyle = b7.mj, Math.floor((jF - 4) * a6L[1] / a6M[1]));
		0 < a5O && x0.fillRect(2, jF - 2 - a5O, kU, a5O), 0 < (a5O = Math.floor((jF - 4) * a6L[0] / a6M[0])) && x0.fillRect(a1 - 2 - kU, jF - 2 - a5O, kU, a5O);
		kU = (kU = Math.floor(jF / 8)) < 2 ? 2 : kU, x3(x0, Math.floor(.4 * jF), 0, jF, kU, .5, !1), x3(x0, Math.floor(a1 - 1.4 * jF), 0, jF, kU, .5, !0), a5O = 1.1 * jF / a1a[0].width;
		x0.imageSmoothingEnabled = !0, x0.setTransform(a5O, 0, 0, a5O, (a1 - a5O * a1a[0].width) / 2, -.05 * jF), x0.drawImage(a1a[+a5F], 0, 0), x0.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a6Y() {
		a5F = ad.a6Z(), aJ.a30(257), aJ.a5E(a5F), aq.xJ = !0, a5f = !0, a6O = 360;
		for (var f0, dk = 0, a7 = ah.jn - 1; 0 <= a7; a7--) b6.fu.j9(ah.jo[a7]) || (dk += ac.gM[ah.jo[a7]]);
		a5F ? a6M[0] = Math.max(bH.dl(3 * dk, 4), 1) : a9.hL ? 9 === a9.k3 && 8 === bc.k8[bd.ky()] ? a6M[0] = Math.max(dk, 1) : (f0 = bH.dl(100 * bd.a2V(), a9.jW), f0 = bH.p4(200 - 2 * f0, 40, 100), f0 = bH.dl(f0 * dk, 100), a6M[0] = Math.max(f0,
			1)) : a6M[0] = Math.max(bH.dl(3 * dk, 5), 1), a6M[1] = Math.max(dk - a6M[0], 1)
	}

	function a6T() {
		a6Q = bb.jj(), a5f = !0, a6O = a6K = 0, a6N = [], aq.xJ = !1, aJ.ys(247), a6L[0] = a6L[1] = 0, aJ.a30(673)
	}

	function ww() {
		return aN.a4s(aJ.a4o()) ? aN.eh - jF - bY.gap : b8.a4s(aJ.a4r()) ? b8.ww() - jF - bY.gap : at.jF - jF - bg.a3d() * bY.gap
	}
	this.dV = function() {
		for (var a7 = 0; a7 < 2; a7++) a1a[a7] = b6.canvas.xY(aX.get(3), 8 - a7, b7.nk), a1a[a7] = b6.canvas.a1c(a1a[a7])
	}, this.dU = function() {
		a6Q = -140, a6P = a6S = 0, a6R = -1, this.xJ = !1, a5f = a5F = !1, a6L = [a6K = a6O = 0, 0], a6M = [1, 1], a6N = [], this.resize()
	}, this.resize = function() {
		jF = aN.jF, this.a1 = 4 * jF, (canvas = document.createElement("canvas")).width = this.a1, canvas.height = jF, x0 = canvas.getContext("2d", {
			alpha: !0
		}), lN()
	}, this.lM = function() {
		a5f && lN()
	}, this.gm = function(ef, eh) {
		return !!this.xJ && !(ef < at.a1 - this.a1 - bY.gap || eh < ww() || (a9.gi || b4.gv.oB(ef > at.a1 - bY.gap - this.a1 / 2 ? 1 : 0), 0))
	}, this.ie = function() {
		0 < a6P ? 0 === --a6P && a6T() : this.xJ ? 180 == --a6O && 3 * a6L[0] < a6M[0] ? a6T() : a6L[0] >= a6M[0] ? a5F ? bN.yO.yg() : bN.yO.yk() : a6L[1] >= a6M[1] ? a6P = 4 : a6O <= 0 && a6T() : ! function() {
			if (a6S) {
				if (bb.jj() < a6Q + 1600) return
			} else {
				if (bb.jj() % 40 != 14) return;
				if ((a9.hL ? bd.a2V() : ac.gM[l1[0]]) >= bH.dl(39 * a9.jW, 40)) {
					if (9 === a9.k3 && 8 === bc.k8[bd.ky()]) return
				} else if (1 !== ah.jn || b6.fu.j9(ah.jo[0])) return;
				a6S = 1
			}
			return a6Y(), 1
		}() && function() {
			if (0 <= a6R) return 1;
			return
		}() && (aJ.z9(250, L(103, [ac.zK[a6R]]), 673, a6R, b7.md, b7.ma, -1, !0), a6R = -1, a6Y())
	}, this.ym = function() {
		this.xJ && a6L[0] < a6M[0] && a6T()
	}, this.p6 = function(player, a6b) {
		var a7;
		if (this.xJ) {
			for (a7 = a6N.length - 1; 0 <= a7; a7--)
				if (a6N[a7] === player) return;
			var a6c = L(a6b ? 104 : 105, [ac.zK[player]]);
			aJ.z9(450, a6c, 257, player, a6b ? b7.mv : b7.nA, b7.ma, -1, !0), a6N.push(player), a5f = !0, a6c = a9.k5 ? a6M[0] : ac.gM[player], a6b ? a6L[0] += a6c : a6L[1] += a6c, player === a9.eI && (a6K = a6b ? 1 : -1)
		}
	}, this.ta = function() {
		var eh;
		this.xJ && (eh = ww(), tb.drawImage(canvas, at.a1 - this.a1 - bY.gap, eh))
	}, this.hG = function(player) {
		if (!a9.k5) {
			if (bb.jj() < a6Q + 140) return !1;
			if (bb.jj() < 535) return !1
		}
		return 0 === a6O && !!b6.fu.gk(1) && !(!b6.fu.gl(player) || 10 <= jX[player] && !b6.fu.a2R(player, 9))
	}, this.hF = function(player) {
		a6R = player
	}
}

function cC() {
	var a1, ef, a6d, canvas, x0, xJ, i5, a2r, a4G, a5f, a6e = 11 / 12;

	function a6g() {
		var a5m = Math.floor(i5 * (a1 - 2 * a6d)),
			a6j = 1 + Math.floor(.0625 * aN.jF),
			a6k = 1 + Math.floor(.3 * aN.jF),
			a6l = Math.floor(.55 * aN.jF);
		x0.clearRect(0, 0, a1, aN.jF), x0.fillStyle = b7.mZ, x0.fillRect(0, 0, a6d, aN.jF), x0.fillRect(a6d + a5m, 0, a1 - a6d - a5m, aN.jF), x0.fillStyle = i5 < 1 / 3 ? "rgba(" + Math.floor(3 * i5 * 130) + ",130,0,0.85)" : i5 < 2 / 3 ? "rgba(130," +
			(130 - Math.floor(3 * (i5 - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (i5 - 2 / 3) * 130) + ",0.85)", x0.fillRect(a6d, 0, a5m, aN.jF), x0.fillStyle = b7.md, x0.fillRect(0, 0, a1, 1), x0.fillRect(0, aN.jF - 1, a1, 1), x0
			.fillRect(0, 0, 1, aN.jF), x0.fillRect(a6d, 0, 1, aN.jF), x0.fillRect(a6d + a5m, 0, 1, aN.jF), x0.fillRect(a1 - a6d, 0, 1, aN.jF), x0.fillRect(a1 - 1, 0, 1, aN.jF), x0.fillRect(Math.floor(.25 * aN.jF) + a6k, Math.floor((aN.jF - a6j) / 2),
				aN.jF - 2 * a6k, a6j), x0.fillRect(Math.floor(a1 - 1.25 * aN.jF) + a6k, Math.floor((aN.jF - a6j) / 2), aN.jF - 2 * a6k - a6k % 2, a6j), x0.fillRect(Math.floor(a1 - 1.25 * aN.jF) + Math.floor((aN.jF - a6j) / 2), a6k, a6j, aN.jF - 2 *
				a6k - a6k % 2), a2r = b6.fu.i4(a9.eI, aN.h0()), x0.fillText(b6.zM.y3(a2r) + " (" + b6.zM.a2k(100 * i5, +(i5 < .1)) + ")", Math.floor(.5 * a1), a6l)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		i5 = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => aN.a0o(arg1);

	function a6q(a1B) {
		return !(1 < a1B && 1 === i5 || (1 < a1B && a1B * i5 - i5 < 1 / 1024 ? a1B = (i5 + 1 / 1024) / i5 : a1B < 1 && i5 - a1B * i5 < 1 / 1024 && (a1B = (i5 - 1 / 1024) / i5), i5 = bH.p4(i5 * a1B, 1 / 1024, 1), a6g(), 0))
	}

	function a6r(kp) {
		return i5 !== (i5 = bH.p4((kp - ef - a6d) / (a1 - 2 * a6d), 1 / 1024, 1)) && (a6g(), !0)
	}
	this.eh = 0, this.gn = !1, this.dU = function() {
		xJ = !a9.gu && !a9.gi, a5f = !1, i5 = .5, a2r = 0, this.gn = !1, this.resize()
	}, this.resize = function() {
		u.v.rB() && at.a1 < .8 * at.jF ? (this.jF = Math.floor(.066 * at.pY), a1 = at.a1 - 4 * bY.gap - this.jF) : (a1 = Math.floor((u.v.rB() ? .65 : .389) * at.pY), a1 += 12 - a1 % 12, this.jF = Math.floor(a1 / 12)), a6d = Math.floor(3 * this
			.jF / 2), a4G = b6.pW.rY(1, Math.floor(.5 * this.jF)), (canvas = document.createElement("canvas")).width = a1, canvas.height = this.jF, (x0 = canvas.getContext("2d", {
			alpha: !0
		})).font = a4G, b6.pW.textBaseline(x0, 1), b6.pW.textAlign(x0, 1), this.a6f(), a6g()
	}, this.a6f = function() {
		ef = u.v.rB() && at.a1 < .8 * at.jF ? this.jF + 3 * bY.gap : Math.floor((at.a1 - a1) / 2), this.eh = at.jF - this.jF - bg.a3d() * bY.gap
	}, this.lM = function() {
		a5f && (a5f = !1, a6g())
	}, this.xJ = function() {
		return !(!xJ || aI.gj && ef < Math.floor(bY.gap + 5.5 * this.jF))
	}, this.a4s = function(a6m) {
		return !!this.xJ() && ef + a1 > at.a1 - a6m - bY.gap
	}, this.a2y = function() {
		xJ = !a9.gi
	}, this.a6T = function() {
		xJ = !1
	}, this.h0 = function() {
		return bH.p4(Math.floor(1024 * i5 + .5) - 1, 0, 1023)
	}, this.a0l = function(kp, kq) {
		return this.xJ() && ef < kp && kp < ef + a1 && kq > this.eh
	}, this.gm = function(kp, kq) {
		return !!this.xJ() && !!aN.a0l(kp, kq) && (aO.m8 = !1, function(rP, kp, kq) {
			if (function(kp, kq) {
					return ef < kp && kp < ef + a6d && kq > aN.eh
				}(kp, kq)) return a6q(a6e);
			if (function(kp, kq) {
					return ef + a1 - a6d < kp && kp < ef + a1 && kq > aN.eh
				}(kp, kq)) return a6q(1 / a6e);
			return rP.gn = !0, a6r(kp)
		}(this, kp, kq) && (bb.dc = !0), !0)
	}, this.a0o = function(mF) {
		0 !== a9.yl && this.xJ() && a6q(mF) && (bb.dc = !0)
	}, this.a0K = function(deltaY) {
		var mF;
		return !(0 === deltaY || !this.xJ()) && a6q(mF = 0 < deltaY ? (mF = 400 / (400 + deltaY)) < a6e ? a6e : mF : 1 / a6e < (mF = (400 - deltaY) / 400) ? 1 / a6e : mF)
	}, this.a0H = function(kp) {
		return !!this.gn && a6r(kp)
	}, this.a0h = function() {
		this.gn = !1
	}, this.ie = function() {
		this.xJ() && a2r !== b6.fu.i4(a9.eI, this.h0()) && (a5f = !0)
	}, this.ta = function() {
		this.xJ() && tb.drawImage(canvas, ef, this.eh)
	}
}

function ct() {
	var canvas, x0, a6s, font, a6t = 0,
		a6u = !1,
		a6v = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		a6w = 5;

	function a72() {
		if (a6u) {
			var a7, eY = a6v.length,
				a6l = Math.floor(.5 * a6s.jF),
				jF = eY * a6l,
				ef = Math.floor(Math.floor(a6s.ef) + .3 * a6s.a1 - .5),
				eh = Math.floor(Math.floor(a6s.eh) - jF),
				a1 = Math.floor(.4 * a6s.a1 + 2.5);
			for (tb.fillStyle = b7.mZ, tb.fillRect(ef, eh, a1, jF), tb.fillStyle = b7.n2, tb.fillRect(ef, eh + a6w * a6l, a1, a6l), tb.fillStyle = b7.md, tb.fillRect(ef, eh, 2, jF), tb.fillRect(ef, eh, a1, 2), tb.fillRect(ef + a1 - 2, eh, 2, jF),
				a7 = 1; a7 < eY; a7++) tb.fillRect(ef, eh + a7 * a6l, a1, 2);
			for (tb.fillStyle = b7.md, b6.pW.textAlign(tb, 1), b6.pW.textBaseline(tb, 1), tb.font = b6.pW.rY(0, .6 * a6l), ef += .5 * a1, a7 = 0; a7 < eY; a7++) tb.fillText(a7A(a7), ef, eh + (a7 + .6) * a6l)
		}
		tb.drawImage(canvas, Math.floor(a6s.ef), Math.floor(a6s.eh))
	}

	function lN(rP) {
		var ef, m3, m4, a6l;
		x0.clearRect(0, 0, Math.floor(a6s.a1), Math.floor(a6s.jF)), x0.fillStyle = b7.mZ, x0.fillRect(0, 0, Math.floor(a6s.a1), Math.floor(a6s.jF)), a9.m6 && (x0.fillStyle = b7.n2, x0.fillRect(0, 0, Math.floor(.3 * a6s.a1), Math.floor(a6s.jF))), x0
			.fillStyle = b7.md, x0.fillText("Hide UI", .15 * a6s.a1, .5 * a6s.jF), x0.fillRect(Math.floor(.3 * a6s.a1 - .5), 0, 2, Math.floor(a6s.jF)), ef = .5 * a6s.a1, x0.fillText("Replay Speed", ef, .31 * a6s.jF), x0.fillText(a7A(a6w), ef, .69 *
				a6s.jF), x0.fillRect(Math.floor(.7 * a6s.a1 - .5), 0, 2, Math.floor(a6s.jF)), rP.a3V ? (ef = Math.floor(.02 * a6s.a1), rP = Math.floor(.025 * a6s.a1), m3 = Math.floor(.85 * a6s.a1 - ef - .5 * rP), m4 = Math.floor(.25 * a6s.jF), a6l =
				Math.floor(a6s.jF) - 2 * m4, x0.fillRect(m3, m4, ef, a6l), x0.fillRect(m3 + ef + rP, m4, ef, a6l)) : function() {
				var a1 = Math.floor(.46 * a6s.jF),
					jF = Math.floor(.23 * a6s.jF),
					ef = Math.floor(.85 * a6s.a1 - .5 * a1 + a1 / 12),
					eh = Math.floor(.5 * a6s.jF - jF);
				x0.beginPath(), x0.moveTo(ef, eh), x0.lineTo(ef + a1, eh + jF), x0.lineTo(ef, eh + (jF << 1)), x0.fill()
			}(), x0.fillRect(0, 0, Math.floor(a6s.a1), 2), x0.fillRect(0, 0, 2, Math.floor(a6s.jF)), x0.fillRect(0, Math.floor(a6s.jF) - 2, Math.floor(a6s.a1), 2), x0.fillRect(Math.floor(a6s.a1 - 2), 0, 2, Math.floor(a6s.jF))
	}

	function a7A(a7) {
		return 5 === a7 ? "Normal" : "" + a6v[a7]
	}
	this.a3V = !1, this.dU = function() {
		a9.gi && (a6w = 5, this.a3V = !1, a6u = !1, a6s = new q9([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.a6x = function() {
		return a6v[a6w]
	}, this.ww = function() {
		return a6s.eh
	}, this.a4s = function(a6m) {
		return !!a9.gi && a6s.ef + a6s.a1 > at.a1 - a6m - bY.gap
	}, this.resize = function() {
		a9.gi && (a6s.resize(), a6s.eh -= (bg.a3d() - 1) * bY.gap, font = b6.pW.rY(0, .3 * a6s.jF), (canvas = document.createElement("canvas")).width = Math.floor(a6s.a1), canvas.height = Math.floor(a6s.jF), (x0 = canvas.getContext("2d", {
			alpha: !0
		})).font = font, b6.pW.textAlign(x0, 1), b6.pW.textBaseline(x0, 1), lN(this))
	}, this.a0r = function(a6y) {
		0 === a9.yl || n.xJ() || a6y !== a9.m6 && (a9.m6 = a6y, bd.resize(), bb.dc = !0, a9.gi) && (a6t = bb.lt + 2e3, lN(this))
	}, this.gm = function(ef, eh) {
		if (!a9.gi) return !1;
		if (ef < a6s.ef || eh < a6s.eh || ef > a6s.ef + a6s.a1) return a6u && function(rP, ef, eh) {
			var eY = a6v.length,
				a6l = Math.floor(.5 * a6s.jF),
				jF = eY * a6l,
				m3 = Math.floor(Math.floor(a6s.ef) + .3 * a6s.a1 - .5),
				jF = Math.floor(Math.floor(a6s.eh) - jF),
				a1 = Math.floor(.4 * a6s.a1 + 2.5);
			return a6u = !1, bb.dc = !0, ef < m3 || m3 + a1 < ef || eh < jF || (a6w = a71(0, Math.floor((eh - jF) / a6l), eY - 1), lN(rP)), !0
		}(this, ef, eh);
		if ((ef -= a6s.ef) < .3 * a6s.a1) a6u = !1, this.a0r(!a9.m6);
		else {
			if (ef < .7 * a6s.a1) return a6u = !a6u, bb.dc = !0;
			this.a0t(!1)
		}
		return !0
	}, this.a0t = function(a70) {
		2 === a9.yl ? (this.a0r(!1), n.o(3)) : (a6u = !1, this.a3V = !this.a3V, this.a3V ? (aI.gj && aI.a0s(), u.v.setState(1)) : a70 || aI.a4M(), bb.dc = !0, lN(this))
	}, this.a0u = function() {
		this.a3V = !1, aI.a4M(), bb.dc = !0, lN(this)
	}, this.a0a = function(ef, eh) {
		return !!a9.m6 && (0 <= aI.gm(ef, eh) || (a9.gi ? ((bb.lt > a6t || !this.gm(ef, eh)) && aO.gm(ef, eh), bb.dc = !0, a6t = bb.lt + 2e3) : aO.gm(ef, eh)), !0)
	}, this.ie = function() {
		a9.gi && a9.m6 && bb.lt > a6t - 1e3 && bb.lt < a6t && (bb.dc = !0)
	}, this.yt = function() {
		a9.gi && (this.a3V = !1, bb.dc = !0, lN(this))
	}, this.ta = function() {
		if (a9.gi) {
			if (a9.m6) {
				if (bb.lt > a6t) return;
				if (bb.lt > a6t - 1e3) return tb.globalAlpha = a71(0, (1e3 - (bb.lt - (a6t - 1e3))) / 1e3, 1), a72(), void(tb.globalAlpha = 1)
			}
			a72()
		}
	}
}

function cD() {
	var a7B, a7C, a1, ef, eh, a7D, a7E;
	this.dU = function() {
		a7B = new Array(2), a7C = new Array(2), this.m8 = !1, a7E = a7D = i8 = i6 = 0, i7 = 1, this.resize()
	}, this.resize = function() {
		a1 = (a1 = Math.floor((u.v.rB() ? .072 : .0502) * at.pY)) < 8 ? 8 : a1;
		for (var a7 = 1; 0 <= a7; a7--) a7B[a7] = document.createElement("canvas"), a7B[a7].width = a1, a7B[a7].height = a1, a7C[a7] = a7B[a7].getContext("2d", {
			alpha: !0
		});
		this.a6f(),
			function() {
				for (var a7T = Math.floor(1 + a1 / 20), a7 = 1; 0 <= a7; a7--) a7C[a7].clearRect(0, 0, a1, a1), a7C[a7].fillStyle = b7.mW, a7C[a7].beginPath(), a7C[a7].arc(a1 / 2, a1 / 2, a1 / 2 - a7T, 0, 2 * Math.PI), a7C[a7].fill(), a7C[a7]
					.lineWidth = a7T, a7C[a7].fillStyle = b7.md, a7C[a7].strokeStyle = b7.md, a7C[a7].beginPath(), a7C[a7].arc(a1 / 2, a1 / 2, a1 / 2 - a7T, 0, 2 * Math.PI), a7C[a7].stroke(), x3(a7C[a7], 0, 0, a1, a7T, .3, 0 === a7)
			}()
	}, this.wv = function() {
		return -i6 / i7
	}, this.ww = function() {
		return -i8 / i7
	}, this.mI = function(a7I, ho) {
		i6 = i7 * a7I - ho
	}, this.mJ = function(a7J, hp) {
		i8 = i7 * a7J - hp
	}, this.gm = function(a7H, a4t) {
		return a9.m6 || ! function(a7H, a4t) {
			return Math.pow(a7H - (ef + a1 / 2), 2) + Math.pow(a4t - (eh + a1 / 2), 2) < a1 * a1 / 4 || Math.pow(a7H - (ef + a1 / 2), 2) + Math.pow(a4t - (eh + 2 * a1), 2) < a1 * a1 / 4
		}(a7H, a4t) || bf.dp.data[8].value ? (aD.mL() && (this.m8 = !0, a7D = a7H, a7E = a4t), !1) : a4t < eh + 1.25 * a1 ? this.a0K(Math.floor(at.a1 / 2), Math.floor(at.jF / 2), -200) : this.a0K(Math.floor(at.a1 / 2), Math.floor(at.jF / 2),
			200)
	}, this.a0H = function(a7H, a4t) {
		var a7K, a7L, hr, hu;
		return !aD.mL() || (a7K = i6, a7L = i8, i6 += hr = a7D - a7H, i8 += hu = a7E - a4t, ab.a0H(hr, hu), this.a7M(), a7D = a7H, a7E = a4t, a7K !== i6) || a7L !== i8
	}, this.a0K = function(kp, kq, deltaY) {
		var mF;
		if (aD.mL()) {
			if (0 < deltaY) mF = (mF = 500 / (500 + deltaY)) < .5 ? .5 : mF;
			else {
				if (!(deltaY < 0)) return !1;
				mF = 2 < (mF = (500 - deltaY) / 500) ? 2 : mF
			}
			this.a7N(kp, kq, mF), bb.dc = !0
		}
		return !0
	}, this.a7N = function(ef, eh, eC) {
		var a1B;
		eC = a1B = (a1B = 1024 < (a1B = eC) * i7 ? 1024 / i7 : a1B) * i7 < .125 ? .125 / i7 : a1B, ab.zoom(eC, ef, eh),
			function(a1B, kp, kq) {
				i7 *= a1B, i6 = (i6 + kp) * a1B - kp, i8 = (i8 + kq) * a1B - kq, aO.a7M()
			}(eC, ef, eh)
	}, this.a7M = function() {
		var a7Q = at.a1 / 16,
			hZ = 0,
			a7R = at.jF / 16,
			ha = 0;
		i6 < -at.a1 + a7Q && (hZ = -at.a1 + a7Q - i6), i6 > i7 * bO.ej - a7Q && (hZ = i7 * bO.ej - a7Q - i6), i8 < -at.jF + a7R && (ha = -at.jF + a7R - i8), i8 > i7 * bO.ek - a7R && (ha = i7 * bO.ek - a7R - i8), i6 += hZ, i8 += ha, bW.mK(), ab
			.a7S(hZ, ha)
	}, this.a6f = function() {
		ef = at.a1 - a1 - bY.gap, eh = Math.floor(at.jF / 2 - 1.25 * a1)
	}, this.ta = function() {
		bf.dp.data[8].value || (tb.drawImage(a7B[0], ef, eh), tb.drawImage(a7B[1], ef, Math.floor(eh + 3 * a1 / 2)))
	}
}

function cE() {
	var g, a7U, a7V, a7W, gap, a7X, a7Y, a7Z, a7a, a7b, a4G, a7c, gd, a7d, a5m, a7e, a7f, a7g;

	function a7k() {
		a7W = Math.floor(.2 * (u.v.rB() ? .07 : .035) * at.pY), a7W = a4q(u.v.rB() ? 3 : 1, a7W);
		var a7n = at.a1 / (g.length + gap);
		a7W = a7W < a7n ? a7n : a7W, a5m = Math.floor((1 - gap) * a7W), a7U = 0, a7o()
	}

	function a7o() {
		a7U = (a7U = a7U < -20 ? -20 : a7U) > (g.length - 15) * a7W ? (g.length - 15) * a7W : a7U, a7Y = Math.floor(a7U / a7W), a7Z = (a7Z = a7Y + Math.floor(at.a1 / a7W)) > g.length - 1 ? g.length - 1 : a7Z, a7Y = (a7Y = a7Z < a7Y ? a7Z : a7Y) < 0 ?
			0 : a7Y;
		var kU = a7Z;
		a7X = a7V / g[kU];
		for (var a7 = a7Z - 1; a7Y <= a7; a7--) g[a7] > g[kU] && (kU = a7, a7X = a7V / Math.pow(g[a7], a7d))
	}

	function a7r(ef) {
		ef = Math.floor((a7U + at.a1 - ef - gap * a7W) / a7W);
		return (ef = ef < -1 ? -1 : -1 === ef ? 0 : ef > g.length - 1 ? -1 : ef) !== a7a && (a7a = ef, -1 === a7e && 0 === a7a && aP.a7h && (a7e = setInterval(a7s, 100)), 1)
	}

	function a7t(a7) {
		var a5c = Math.floor(a7X * Math.pow(g[a7], a7d));
		tb.fillRect(a7U + at.a1 - (a7 + 1) * a7W, at.jF - a5c, a5m, a5c)
	}

	function a7s() {
		var g6;
		0 !== (a7a = 8 === aW.zu() ? -1 : a7a) ? (a7f = (new Date).getTime(), clearInterval(a7e), a7e = -1) : (g6 = g[1] / 864e3, -1 !== a7f && (g6 += ((new Date).getTime() - a7f) * g[1] / 864e5, a7f = -1), 0 < g6 && (g[0] += Math.floor(g6), bb
			.dc = !0))
	}
	this.a7h = !1, this.dU = function() {
		a7f = a7e = -1, a7a = -(a7d = 1), this.a7i = !1, gd = 0, a7c = new Date, a7U = 0, gap = .3, (a7g = []).push({
			g1: "Plateau A",
			eY: 0,
			e: 57
		}), a7g.push({
			g1: "Max A",
			eY: 1,
			e: 1
		}), a7g.push({
			g1: "Black Friday",
			eY: 15,
			e: 15
		}), a7g.push({
			g1: "Max B",
			eY: 19,
			e: 19
		}), a7g.push({
			g1: "Max C",
			eY: 44,
			e: 44
		}), a7g.push({
			g1: "First Android Version",
			eY: 58,
			e: 58
		}), a7g.push({
			g1: "Max D",
			eY: 67,
			e: 67
		}), a7g.push({
			g1: "The iFrame Explosion",
			eY: 98,
			e: 99
		}), a7g.push({
			g1: "The 155-Day Uptrend",
			eY: 58,
			e: 213
		}), a7g.push({
			g1: "Max E",
			eY: 213,
			e: 213
		}), a7g.push({
			g1: "Plateau B",
			eY: 214,
			e: 259
		}), a7g.push({
			g1: "Turbulent Times",
			eY: 260,
			e: 344
		}), a7g.push({
			g1: "Max F",
			eY: 262,
			e: 262
		}), a7g.push({
			g1: "Max G",
			eY: 282,
			e: 282
		}), a7g.push({
			g1: "Max H",
			eY: 333,
			e: 333
		}), a7g.push({
			g1: "The 19-Day Downtrend",
			eY: 283,
			e: 301
		}), a7g.push({
			g1: "Plateau C",
			eY: 345,
			e: 385
		}), a7g.push({
			g1: "The Alliance Ascent",
			eY: 386,
			e: 395
		}), a7g.push({
			g1: "Max I",
			eY: 395,
			e: 395
		}), a7g.push({
			g1: "First iOS Version",
			eY: 411,
			e: 411
		}), a7g.push({
			g1: "Plateau D",
			eY: 396,
			e: 453
		}), a7g.push({
			g1: "The TikTok Revolution",
			eY: 454,
			e: 470
		}), a7g.push({
			g1: "Max J",
			eY: 456,
			e: 456
		}), a7g.push({
			g1: "Max K",
			eY: 472,
			e: 472
		}), a7g.push({
			g1: "Max L",
			eY: 478,
			e: 478
		}), a7g.push({
			g1: "YT Drew",
			eY: 471,
			e: 485
		}), a7g.push({
			g1: "Plateau E",
			eY: 485,
			e: 600
		}), a7g.push({
			g1: "Uptrend A",
			eY: 600,
			e: 613
		}), a7g.push({
			g1: "Max M",
			eY: 613,
			e: 613
		}), a7g.push({
			g1: "Downtrend A",
			eY: 614,
			e: 635
		}), a7g.push({
			g1: "Plateau F",
			eY: 636,
			e: 737
		}), a7g.push({
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
		a7V = Math.floor(.15 * at.jF), a7b = (a7b = Math.floor((u.v.rB() ? .018 : .0137) * at.pY)) < 2 ? 2 : a7b, a4G = b6.pW.rY(1, a7b), a7k()
	}, this.a7l = function(a7m) {
		var a7;
		for (this.a7h = !0, a7 = 0; a7 < a7m.length; a7++) g.unshift(a7m[a7]);
		a7k(), bb.dc = !0
	}, this.a7p = function() {
		a7o()
	}, this.a0H = function(ef, eh) {
		eh > at.jF - .6 * a7V ? this.a7i ? ef !== gd && (a7U += ef - gd, gd = ef, a7o(), a7r(ef), this.a7i = -1 !== a7a, bb.dc = !0) : a7r(ef) && (bb.dc = !0) : this.qY()
	}, this.qY = function() {
		-1 !== a7a && (this.a7i = !1, a7a = -1, bb.dc = !0)
	}, this.a0K = function(ef, deltaY) {
		-1 !== a7a && (a7U += Math.floor(deltaY), a7o(), a7r(ef), bb.dc = !0)
	}, this.gm = function(ef, eh) {
		this.a0H(ef, eh), -1 !== a7a && (gd = ef, this.a7i = !0)
	}, this.a0g = function() {
		-1 !== a7a && (this.a7i = !1)
	}, this.ta = function() {
		tb.fillStyle = b7.mg;
		for (var a7v, month, dk, s4, a7y, a7z, m4, a80, a81, a7 = a7Z; a7Y <= a7; a7--) a7t(a7);
		this.a7h && 0 === a7Y && (tb.fillStyle = b7.nD, a7t(0)), -1 !== a7a && (tb.fillStyle = b7.mf, a7t(a7a)), -1 !== a7a && (tb.font = a4G, b6.pW.textBaseline(tb, 2), (dk = new Date).setTime(a7c.getTime() - 1e3 * a7a * 60 * 60 * 24), month =
			"month", a7v = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(dk), a7v = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(dk)), a7v = a7v + ", " + dk.getUTCDate() + " " + month + " " + dk.getFullYear(), month = 1 === g[a7a] ? L(106) : L(107), month = b6.zM.y3(g[a7a]) + " " + month, dk = Math.floor(tb.measureText(a7v).width), s4 = Math
			.floor(tb.measureText(month).width), a7y = Math.floor(.5 * (dk + a7b)), a7z = (a7z = a7U + at.a1 - (a7a + 1) * a7W) < a7y ? a7y : a7z > at.a1 - a7y ? at.a1 - a7y : a7z, m4 = at.jF - Math.floor(a7X * Math.pow(g[a7a], a7d)), a80 =
			Math.floor(1.1 * a7b), a81 = m4 > at.jF - a80 ? at.jF - a80 : m4, tb.fillStyle = b7.ma, tb.fillRect(at.a1 - s4 - a7b, a81 - a80, s4 + a7b, a80), tb.fillRect(a7z - a7y, at.jF - a80, dk + a7b, a80), tb.fillStyle = b7.md, b6.pW
			.textAlign(tb, 2), tb.fillText(month, Math.floor(at.a1 - .5 * a7b), a81),
			function(m4, a80) {
				for (var s3, kW = -1, e0 = g.length - a7a - 1, a7 = a7g.length - 1; 0 <= a7; a7--) e0 >= a7g[a7].eY && e0 <= a7g[a7].e && (-1 === kW || a7g[a7].e - a7g[a7].eY < a7g[kW].e - a7g[kW].eY) && (kW = a7); - 1 !== kW && (s3 = Math
					.floor(tb.measureText(a7g[kW].g1).width), tb.fillStyle = b7.ma, tb.fillRect(at.a1 - s3 - a7b, m4, s3 + a7b, a80), tb.fillStyle = b7.md, tb.fillText(a7g[kW].g1, Math.floor(at.a1 - .5 * a7b), m4 + a80))
			}(a81 - 2 * a80, a80), b6.pW.textAlign(tb, 1), tb.fillText(a7v, a7z, at.jF), tb.strokeStyle = b7.mh, tb.lineWidth = 1, tb.beginPath(), tb.moveTo(0, m4), tb.lineTo(at.a1, m4), tb.closePath(), tb.stroke())
	}
}

function cF() {
	var a4G, a1, eh, a83, a84, canvas, x0, a5f, a2E, a85, a86, a87, a88;
	this.ef = 0, this.jF = 0, this.dU = function() {
		a84 = a9.a36, a86 = "rgba(0,100,0,0.8)", a87 = "rgba(150,0,0,0.8)", a5f = a85 = !0, a2E = ac.ga[a9.eI], this.resize()
	}, this.resize = function() {
		a1 = Math.floor((u.v.rB() ? .305 : .24) * at.pY), this.jF = Math.floor(.5 + .13 * a1), a1 = Math.floor(6 * this.jF), a4G = b6.pW.rY(1, Math.floor(.8 * this.jF)), a88 = Math.floor(.5 * this.jF), bO.vI.font = a4G, eh = bY.gap, a83 = Math
			.floor(1 + .13 * this.jF), (canvas = document.createElement("canvas")).width = a1, canvas.height = this.jF, (x0 = canvas.getContext("2d", {
				alpha: !0
			})).font = a4G, b6.pW.textBaseline(x0, 1), b6.pW.textAlign(x0, 1), this.a89()
	}, this.a62 = function() {
		return u.v.rB() && at.a1 < 1.2 * at.jF
	}, this.a6f = function() {
		this.a62() ? this.ef = at.a1 - a1 - bY.gap : this.ef = Math.floor(aR.a8A() + (at.a1 - aR.a8A() - aS.a1 - a1) / 2 - .5 * bY.gap)
	}, this.lM = function() {
		a5f && (a5f = !1, this.a89())
	}, this.a89 = function() {
		x0.clearRect(0, 0, a1, this.jF), x0.fillStyle = a85 ? a86 : a87, x0.fillRect(0, 0, a1, this.jF), x0.fillStyle = b7.mf, this.a8B(), this.a8C(), x0.fillStyle = ac.ga[a9.eI] >= aa.jS(a9.eI) ? b7.nA : b7.md, x0.fillText(b6.zM.y3(a2E), Math
			.floor(a1 / 2), a88), x0.fillStyle = b7.md, x0.fillRect(0, 0, a1, 1), x0.fillRect(0, 0, 1, this.jF), x0.fillRect(0, this.jF - 1, a1, 1), x0.fillRect(a1 - 1, 0, 1, this.jF)
	}, this.a8B = function() {
		var et = bb.jj() % 100,
			et = (et = 9 - bH.dl(et -= et % 10, 10), Math.floor(et * (this.jF - a83) / 9));
		x0.fillRect(0, et, a83, this.jF - et), x0.fillRect(a1 - a83, et, a83, this.jF - et)
	}, this.a8C = function() {
		x0.fillRect(a83, this.jF - a83, Math.floor((a1 - 2 * a83) * ac.ga[a9.eI] / a84), a83)
	}, this.ie = function() {
		var g6 = a9.eI;
		b6.fu.gl(g6) && (g6 = ac.ga[g6] - ac.a2D[g6], a2E !== g6 ? (a84 = a4q(g6, a84), a85 = a2E < g6 && 10 <= g6, a2E = g6, a5f = !0) : bb.jj() % 10 == 9 && (a5f = !0))
	}, this.ta = function() {
		0 === ac.la[a9.eI] || a9.gu || 2 === ac.a27[a9.eI] || tb.drawImage(canvas, this.ef, eh)
	}
}

function cG() {
	var a8D, a8E, a8F, a8G, a8H, a8I, a8J, a8K, a8L, a8M, a8N, a8O, a8P, a8Q, a8R, a8S, a8T, a8U, a8V, a8W, a8X, a8Y, position, a8Z, a8a, a8b, a8c, a8d = 1,
		a8e = 1,
		a8f = "";
	var leaderboardHasChanged = true;
	this.playerPos = a9.eI;
	__fx.leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		__fx.leaderboardFilter.filteredLeaderboard = __fx.leaderboardFilter.playersToInclude
			.map(id => jX[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = __fx.leaderboardFilter.filteredLeaderboard.indexOf(jX[a9.eI]);
	}

	function a8h() {
		a8J.clearRect(0, 0, a8D, a6I),
			a8J.fillStyle = b7.nT,
			a8J.fillRect(0, 0, a8D, a8O),
			a8J.fillStyle = b7.mZ,
			a8J.fillRect(0, a8O, a8D, a6I - a8O);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			jX[a9.eI]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) a8Y = -1;
		if (__fx.leaderboardFilter.enabled && a8Y >= __fx.leaderboardFilter.filteredLeaderboard.length) a8Y = -1;
		playerPos >= position && a8j(playerPos - position, b7.n2),
			0 !== jX[a9.eI] && 0 === position && a8j(0, b7.nY),
			-1 !== a8Y && a8j(a8Y, b7.me),
			a8J.fillStyle = b7.mZ,
			//console.log("drawing", a8Y),
			a8J.clearRect(0, a6I - __fx.leaderboardFilter.tabBarOffset, a8D, __fx.leaderboardFilter.tabBarOffset);
		a8J.fillRect(0, a6I - __fx.leaderboardFilter.tabBarOffset, a8D, __fx.leaderboardFilter.tabBarOffset);
		a8J.fillStyle = b7.md,
			a8J.fillRect(0, a8O, a8D, 1),
			a8J.fillRect(0, a6I - __fx.leaderboardFilter.tabBarOffset, a8D, 1),
			__fx.leaderboardFilter.drawTabs(a8J, a8D, a6I - __fx.leaderboardFilter.tabBarOffset, b7.n2),
			a8J.fillRect(0, 0, a8D, bY.xm),
			a8J.fillRect(0, 0, bY.xm, a6I),
			a8J.fillRect(a8D - bY.xm, 0, bY.xm, a6I),
			a8J.fillRect(0, a6I - bY.xm, a8D, bY.xm), a8J.font = a8E, b6.pW.textBaseline(a8J, 1), b6.pW.textAlign(a8J, 1), a8J.fillText(a8f, Math.floor((a8D + a8O - 22) / 2), Math.floor(a8M + a8F / 2));
		__fx.playerList.drawButton(a8J, 12, 12, a8O - 22);
		var er, g7 = playerPos < position + a8H - 1 ? 1 : 2;

		if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - a8H)
				position = (result.length > a8H ? result.length : a8H) - a8H;
			//if (position >= result.length) position = result.length - 1;
			for (a8J.font = a8G, b6.pW.textAlign(a8J, 0), er = a8H - g7; 0 <= er; er--) {
				const pos = result[er + position];
				if (pos !== undefined)
					a8k(l1[pos]), a8l(er, pos, l1[pos]);
			}
			for (b6.pW.textAlign(a8J, 2), er = a8H - g7; 0 <= er; er--) {
				const pos = result[er + position];
				if (pos !== undefined)
					a8k(l1[pos]), a8m(er, l1[pos]);
			}
		} else {
			for (a8J.font = a8G, b6.pW.textAlign(a8J, 0), er = a8H - g7; 0 <= er; er--)
				a8k(l1[er + position]), a8l(er, er + position, l1[er + position]);
			for (b6.pW.textAlign(a8J, 2), er = a8H - g7; 0 <= er; er--)
				a8k(l1[er + position]), a8m(er, l1[er + position]);
		}
		2 == g7 && (a8k(a9.eI), b6.pW.textAlign(a8J, 0), a8l(a8H - 1, jX[a9.eI], a9.eI), b6.pW.textAlign(a8J, 2), a8m(a8H - 1, a9.eI)), 0 === position && (g7 = .7 * a8P / aX.get(4).height, a8J.setTransform(g7, 0, 0, g7, Math.floor(a8Q + .58 * a8P +
			.5 * g7 * aX.get(4).width), Math.floor(a8M + a8F + .4 * a8P)), a8J.imageSmoothingEnabled = !0, a8J.drawImage(aX.get(4), -Math.floor(aX.get(4).width / 2), -Math.floor(aX.get(4).height / 2)), a8J.setTransform(1, 0, 0, 1, 0, 0))
	}

	function a8k(player) {
		a9.hL && (a8J.fillStyle = bc.a8o[bc.k8[bc.eW[player]]])
	}

	function a8j(a7, a8p) {
		a8J.fillStyle = a8p, a7 = a8H - 1 < a7 ? a8H - 1 : a7;
		a8p = Math.floor((a7 === a8H - 1 ? 2 : 0 === a7 ? 1.15 : 1) * a8P), a8p = a7 === a8H - 2 ? Math.floor(a8O + 9.15 * a8P) - Math.floor(a8O + 8.15 * a8P) : a8p;
		a8J.fillRect(0, Math.floor(a8O + (a7 + (0 === a7 ? 0 : .15)) * a8P), a8D, a8p)
	}

	function a8l(a8r, r0, a7) {
		a8J.fillText(a8U[r0], a8Q, Math.floor(a8M + a8F + (a8r + .5) * a8P)), 1 === ac.a27[a7] && (a8J.font = "italic " + a8G);
		r0 = Math.floor(a8M + a8F + (a8r + .5) * a8P);
		a8J.fillText(ac.zK[a7], a8R, r0), 0 !== ac.a27[a7] && (a8J.font = a8G), a7 < a9.jm && 2 !== ac.a27[a7] || a8J.fillRect(a8R, r0 + .35 * a8d, a8T[a7], Math.max(1, .1 * a8d))
	}

	function a8m(a8r, a7) {
		a8J.fillText(ac.gM[a7], a8S, Math.floor(a8M + a8F + (a8r + .5) * a8P))
	}

	function a90(eh) {
		return (eh -= bY.gap + a8O) < 0 ? Math.floor(eh / a8P) - 1 : eh < (a8H - 1) * a8P ? Math.floor(eh / a8P) : eh < a6I - a8O ? a8H - 1 : (eh -= a6I - a8O, a8H + Math.floor(eh / a8P))
	}

	function xl(ef, eh) {
		return ef >= bY.gap && ef < bY.gap + a8D && eh >= bY.gap && eh < bY.gap + a6I
	}
	this.dU = function() {
			var a7;
			for (a8a = !1, a8c = a8b = a8Z = 0, a8Y = -1, a8H = u.v.rB() ? 6 : 10, a8e = (position = 0) === (a8e = bf.dp.data[11].value) ? 10 : 1 === a8e ? 5 : 1, a8X = !1, a8V = new Uint16Array(a8H + 1), a8W = new Uint32Array(a8H + 1), a8L = a9.eV,
				l1 = new Uint16Array(a8L), jX = new Uint16Array(a8L), a7 = a8L - 1; 0 <= a7; a7--) l1[a7] = a7, jX[a7] = a7;
			this.resize(!0), a8T = new Uint16Array(a9.eV);
			var a8g = Math.floor(a8D - a8R - a8Q - a8K);
			for (a8U = new Array(a9.eV), a8J.font = a8G, a7 = a9.eV - 1; 0 <= a7; a7--) a8U[a7] = a7 + 1 + ".", ac.zK[a7] = b6.x0.a1m(ac.a55[a7], a8G, a8g), a8T[a7] = Math.floor(a8J.measureText(ac.zK[a7]).width);
			a8h()
		}, this.resize = function(dU) {
			if (a6I = u.v.rB() ? (a8D = Math.floor(.335 * at.pY), Math.floor(a8H * a8D / 8)) : (a8D = Math.floor(.27 * at.pY), Math.floor(a8H * a8D / 10)), a8D = Math.floor(.97 * a8D), (a8I = document.createElement("canvas")).width = a8D, a8I
				.height = a6I, a8J = a8I.getContext("2d", {
					alpha: !0
				}), a8M = .025 * a8D, a8F = .16 * a8D, a8N = 0 * a8D, a8O = Math.floor(.45 * a8M + a8F), a8P = (a6I - a8F - 2 * a8M - a8N) / a8H,
				a8I.height = a6I += a8P, __fx.leaderboardFilter.tabBarOffset = Math.floor(a8P * 1.3), __fx.leaderboardFilter.verticalClickThreshold = a6I - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = a8D,
				a8E = b6.pW.rY(1, Math.floor(.55 * a8F)), a8d = Math.floor((u.v.rB() ? .67 : .72) * a8P), a8G = b6.pW.rY(0, a8d), a8J.font = a8G, a8Q = Math.floor(.04 * a8D), a8R = Math.floor((u.v.rB() ? .195 : .18) * a8D), a8K = Math.floor(a8J
					.measureText("00920600").width), a8J.font = a8E, a8S = a8D - a8Q, !dU) {
				a8J.font = a8G;
				for (var a7 = a9.eV - 1; 0 <= a7; a7--) a8T[a7] = Math.floor(a8J.measureText(ac.zK[a7]).width);
				a8h()
			}
			a8f = b6.x0.a1m(L(108), a8E, .96 * a8D)
		}, this.a8A = function() {
			return a8D
		}, this.lM = function(bo, a8i) {
			(a8i || a8X && (bo || bb.jj() % a8e == 0)) && (a8X = !1, a8h())
		}, this.ie = function() {
			! function() {
				for (var er = a8L - 1; 0 <= er; er--) 0 === ac.la[l1[er]] && ! function(er) {
					var a8y = l1[er];
					a8L--;
					for (var a7 = er; a7 < a8L; a7++) l1[a7] = l1[a7 + 1], jX[l1[a7]] = a7;
					l1[a8L] = a8y, jX[l1[a8L]] = a8L
				}(er)
			}();
			for (var a8w, mL = a8L - 1, er = 0; er < mL; er++) ac.gM[l1[er]] < ac.gM[l1[er + 1]] && (a8w = l1[er], l1[er] = l1[er + 1], l1[er + 1] = a8w, jX[l1[er]] = er, jX[l1[er + 1]] = er + 1);
			! function() {
				for (var dk = a8X, g7 = (a8X = !0, jX[a9.eI] >= a8H - 1 ? a8H - 2 : a8H - 1), a7 = g7; 0 <= a7; a7--)
					if (a8V[a7] !== l1[a7] || a8W[a7] !== ac.gM[l1[a7]]) return;
				(g7 != a8H - 2 || a8V[a8H] === jX[a9.eI] && a8W[a8H] === ac.gM[a9.eI]) && (a8X = dk)
			}();
			for (var a7 = a8H - 1; 0 <= a7; a7--) a8V[a7] = l1[a7], a8W[a7] = ac.gM[l1[a7]];
			a8V[a8H] = jX[a9.eI], a8W[a8H] = ac.gM[a9.eI];
			leaderboardHasChanged = true;
		}, __fx.leaderboardFilter.scrollToTop = function() {
			position = 0;
		}, this.gm = function(ef, eh) {
			return !!xl(ef, eh) && ((__fx.utils.isPointInRectangle(ef, eh, bY.gap + 12, bY.gap + 12, a8O - 22, a8O - 22) && __fx.playerList.display(ac.a55), true) &&
				!(eh - bY.gap > __fx.leaderboardFilter.verticalClickThreshold && __fx.leaderboardFilter.handleMouseDown(ef - bY.gap)) && (a8Z = bb.lt, a8a = !0, a8b = a8c = a90(eh), bF.a0v() && (ef = a71(-1, a8c, a8H), a8Y !== (ef = ef === a8H ?
					-1 : ef)) && (a8Y = ef, a8h(), bb.dc = !0)), !0)
		}, __fx.leaderboardFilter.repaintLeaderboard = function() {
			a8h(), bb.dc = !0;
		},
		this.a0H = function(ef, eh) {
			if (__fx.utils.isPointInRectangle(ef, eh, bY.gap + 12, bY.gap + 12, a8O - 22, a8O - 22)) {
				__fx.playerList.hoveringOverButton === false && (__fx.playerList.hoveringOverButton = true, a8h(), bb.dc = !0);
			} else {
				__fx.playerList.hoveringOverButton === true && (__fx.playerList.hoveringOverButton = false, a8h(), bb.dc = !0);
			}
			if (__fx.leaderboardFilter.setHovering(
					__fx.utils.isPointInRectangle(ef, eh, bY.gap, bY.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth, __fx.leaderboardFilter.tabBarOffset), ef - bY.gap
				)) return;
			var dk, a8z = a90(eh);
			return a8a ? (dk = position, (position = a71(0, position += a8b - a8z, a9.eV - a8H)) !== dk && (a8z = (a8z = a71(-1, a8b = a8z, a8H)) !== a8H && xl(ef, eh) ? a8z : -1, a8Y = a8z, a8h(), bb.dc = !0), !0) : (a8z = (a8z = a71(-1, a8z,
				a8H)) === a8H || !xl(ef, eh) || bF.a0v() ? -1 : a8z, a8Y !== a8z && (a8Y = a8z, a8h(), bb.dc = !0))
		}, this.a0g = function(ef, eh) {
			if (!a8a) return !1;
			a8a = !1;
			var a8z = a90(eh);
			var isEmptySpace = false;
			return bF.a0v() && -1 !== a8Y && (a8Y = -1, a8h(), bb.dc = !0), bb.lt - a8Z < 350 && a8c === a8z && -1 !== (a8z = (a8z = a71(-1, a8z, a8H)) !== a8H && xl(ef, eh) ? a8z : -1) && (ef = (__fx.leaderboardFilter.enabled ? (updateFilteredLb(),
					l1[__fx.leaderboardFilter.filteredLeaderboard[a8z + position] ?? (isEmptySpace = true, jX[a9.eI])]) : l1[a8z + position]), a8z === a8H - 1 && (__fx.leaderboardFilter.enabled ? this.playerPos : jX[a9.eI]) >=
				position + a8H - 1 && (ef = a9.eI), !isEmptySpace && a9.hL && __fx.donationsTracker.displayHistory(ef, ac.a55, a9.k5), 0 !== ac.la[ef] && !isEmptySpace) && aD.lx(ef, 800, !1, 0), !0
		}, this.a0K = function(ef, eh, deltaY) {
			var a91;
			return !(a8a || a9.m6 || (a91 = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !xl(ef, eh)) || (ef = (ef = a71(-1, a90(eh), a8H)) === a8H || bF.a0v() ? -1 : ef, 0 < deltaY ? position < a9.eV - a8H && (position += Math.min(a9.eV - a8H -
				position, a91), a8Y = ef, a8h(), bb.dc = !0) : 0 < position && (position -= Math.min(position, a91), a8Y = ef, a8h(), bb.dc = !0), 0))
		}, this.ta = function() {
			tb.drawImage(a8I, bY.gap, bY.gap)
		}
}

function cH() {
	var canvas, x0, ef, eh, a5c, a92, gap, a93, fontSize, a94, a95, a96, a97, a98, a99, a9A, a9B, a9C;

	function a9G() {
		x0.clearRect(0, 0, aS.a1, aS.jF), x0.fillStyle = b7.ma, x0.fillRect(0, 0, aS.a1, aS.jF), x0.fillStyle = b7.mx, eC = 0 < a9A ? a9A : Math.sqrt(a97[4] / 1e4), x0.fillRect(0, aS.jF - a5c - 1, Math.floor(eC * aS.a1), a5c), x0.fillStyle = b7.md,
			x0.fillRect(0, 0, aS.a1, 1), x0.fillRect(0, 0, 1, aS.jF), x0.fillRect(aS.a1 - 1, 0, 1, aS.jF), x0.fillRect(0, aS.jF - 1, aS.a1, 1), x0.fillRect(0, aS.jF - a5c - 1, aS.a1, 1);
		for (var eC, a9I, dk = 0, a7 = 0; a7 < a96.length; a7++) a98[a7] ? (b6.pW.textAlign(x0, 0), a9I = Math.floor((a92 - a5c + 2 * a93) * (a7 - dk + 1) / (a96.length + 1) - .7 * a93), x0.fillText(a96[a7], gap, a9I), b6.pW.textAlign(x0, 2), 5 ===
			a7 && 0 !== ac.la[a9.eI] && ac.ga[a9.eI] >= aa.jS(a9.eI) ? (x0.fillStyle = b7.nW, x0.fillText(a9E(a7), aS.a1 - gap, a9I), x0.fillStyle = b7.md) : x0.fillText(a9E(a7), aS.a1 - gap, a9I)) : dk++
	}

	function a9E(a7) {
		return a7 < 3 ? a97[a7].toString() : 3 === a7 || 4 === a7 || 5 === a7 ? b6.zM.a2k(a97[a7] / 100, 2) : a7 < 7 ? b6.zM.y3(a97[a7]) : a7 === 7 ? aS.a9J(a97[7]) : a7 === 8 ? __fx.utils.getMaxTroops(ac.gM, a9.eI) : __fx.utils.getDensity(a9.eI)
	}

	function a9D() {
		ac.gM[a9.eI] !== a97[6] && (a97[6] = ac.gM[a9.eI], a94++)
	}
	this.dU = function() {
		a9A = a9B = 0, (a95 = new Array(8))[0] = L(109), a95[1] = a9.k5 ? L(110) : L(111), a95[2] = L(112), a95[3] = L(113), a95[4] = L(114), a95[5] = L(115, 0, "Interest"), a95[6] = L(116), a95[7] = L(117),
			a95.push("Max Troops", "Density"), // add a95
			(a96 = new Array(a95.length)).fill(""), (a97 = new Array(a95.length))[0] = a9.k5 ? 0 : a9.jm, a97[1] = a9.k5 ? ah.jn : a9.k7, a97[2] = a9.yn, a97[3] = 0, a97[4] = bH.dl(1e4 * ac.gM[0], Math.max(a9.jW, 1)), a97[5] = 0 === a9.data
			.iIncomeType ? 700 : 1 === a9.data.iIncomeType ? bH.dl(700 * a9.data.iIncomeValue, 64) : bH.dl(700 * a9.data.iIncomeData[a9.eI], 64), a97[6] = 0, a9D(), a97[7] = 0, a99 = a9E(6), a98 = new Array(a95.length);
		for (var a7 = a95.length - 1; 0 <= a7; a7--) a98[a7] = !0;
		a9C = 0, a9C = a9.k5 ? (a98[0] = !1, a98[2] = !1, a98[3] = !1, 3) : (a98[3] = !1, 1), a94 = 0, this.resize()
	}, this.resize = function() {
		this.a1 = Math.floor((u.v.rB() ? .1646 : .126) * 1.25 * at.pY), this.jF = Math.floor(1.18 * this.a1), a5c = Math.floor(.04 * this.a1), gap = Math.floor(.035 * this.a1), a93 = .04 * this.a1, a92 = this.jF, this.jF -= Math.floor(a9C * (this
			.jF - 2 * a5c) / a95.length), fontSize = Math.floor(.7 * (a92 - a5c) / a95.length);
		var a4G = b6.pW.rY(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.a1, canvas.height = this.jF,
			function(a4G, a1) {
				for (var a7 = 0; a7 < a96.length; a7++) a96[a7] = b6.x0.a1m(a95[a7], a4G, a1)
			}((x0 = canvas.getContext("2d", {
				alpha: !0
			})).font = a4G, .575 * this.a1), b6.pW.textBaseline(x0, 1), x0.lineWidth = 1, this.a2z(), this.a6f(), aQ.a6f(), a9G()
	}, this.a6f = function() {
		ef = at.a1 - this.a1 - bY.gap
	}, this.a9H = function() {
		eh = bY.gap
	}, this.a2z = function() {
		eh = bY.gap + (aQ.a62() && 0 !== ac.la[a9.eI] && !a9.gu ? aQ.jF + bY.gap : 0)
	}, this.lM = function(bo) {
		(bo || 100 <= a94) && (a94 = 0, a9G())
	}, this.a3u = function() {
		return a97[7]
	}, this.a9J = function(value) {
		var kU = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * kU) / 1e3);
		return value < 10 ? kU + ":0" + value : kU + ":" + value
	}, this.ie = function() {
		var a9S, per;
		a98[0] && a9.yo - a9.yn !== a97[0] && (a97[0] = a9.yo - a9.yn, a94++), ah.jn - a97[0] !== a97[1] && (a97[1] = ah.jn - a97[0], a94++), this.lE(), (a9S = aa.a9T(a9.eI)) !== a97[5] && (a97[5] = a9S, a94++), a9D(), a97[7] += bb.a9U, a9S =
			a9E(7), a99 !== a9S && (a99 = a9S, a94 += 100), a9S = a9.hL ? bd.a2V() : ac.gM[l1[0]], per = bH.dl(1e4 * a9S, Math.max(a9.jW, 1)), a97[3] = a9S, a97[4] !== per && (a94++, a97[4] = per), 8 === a9.k3 && function() {
				for (var a7 = 0; a7 < 2; a7++)
					if (!b6.fu.gl(a7)) return bN.yO.yk(), 1;
				return
			}() || a97[3] < a9.jW || ! function() {
				for (var a7 = ah.jn - 1; 0 <= a7; a7--)
					if (0 < ac.g0[ah.jo[a7]].length) return;
				return 1
			}() || bN.yO.yk()
	}, this.lE = function() {
		a98[2] && a9.yn !== a97[2] && (a97[2] = a9.yn, a94++)
	}, this.a9V = function(a7) {
		var sL, a9W, dk;
		return 2 !== a9.yl && (a7 % 2 == 1 && (aR.lM(1, 1), bb.dc = !0), a7 === a9.a38 ? (a9A = 0, a9G(), !1) : (-1 !== a7 || 0 !== a9B) && (a9W = a9A, a9A = a9.gi ? a7 / a9.a38 : (dk = performance.now(), 0 <= a7 && (sL = dk - 392 * a7, a9B =
			0 === a7 || sL < a9B ? sL : a9B), 1 < (a9A = (dk - a9B) / (392 * a9.a38)) ? 1 : a9A), a9G(), a9A !== a9W))
	}, this.ta = function() {
		tb.drawImage(canvas, ef, eh)
	}
}

function cI() {
	var xJ, a9X, a1, jF, a6l, a9Y, a9Z, a63, canvas, ln, a9a;

	function ww() {
		return Math.floor((at.a1 - a1) / 2) < aN.jF + 2 * bY.gap ? at.jF - jF - 4 * bY.gap - aN.jF : at.jF - jF - 2 * bY.gap
	}
	this.dU = function() {
		a9a = xJ = !1, a6l = .61, a9Y = .07, a9Z = .09, ln = a63 = jF = 0
	}, this.resize = function() {
		var x0, m3, et, a9f, a9g, a4L;
		xJ && (a1 = a9b(a1 = u.v.rB() ? Math.floor(.69 * at.pY) : Math.floor(.5 * at.pY), a4q(at.a1 - 2 * bY.gap, 10)), a1 = a9b(a1, Math.floor(3.57 * a4q(at.jF - 2 * bY.gap, 3))), jF = Math.floor(.28 * a1), (canvas = document.createElement(
			"canvas")).width = a1, canvas.height = jF, x0 = canvas.getContext("2d", {
			alpha: !0
		}), m3 = Math.floor(1 + jF / 40), x0.clearRect(0, 0, a1, jF), x0.fillStyle = b7.ma, x0.fillRect(m3, m3, a1 - 2 * m3, jF - 2 * m3), x0.lineJoin = "bevel", x0.lineWidth = 2 * m3, x0.strokeStyle = b7.md, x0.strokeRect(m3, m3, a1 -
			2 * m3, jF - 2 * m3), x0.imageSmoothingEnabled = !1, et = aX.get(a9X), a9f = et.width, a4L = (1 === a9X ? .85 : 21 === a9X ? .666 : .9) * a6l * jF / (a9g = et.height), x0.setTransform(a4L, 0, 0, a4L, Math.floor((a1 - a4L *
			a9f) / 2), Math.floor((jF - a4L * a9g) / 2)), x0.drawImage(et, 0, 0), x0.setTransform(1, 0, 0, 1, Math.floor(a1 - a9Z * jF - a9Y * jF - m3), Math.floor(m3 + a9Y * jF)), function(x0, eY) {
			x0.lineWidth = Math.floor(1 + jF / 80), x0.strokeStyle = b7.md, x0.beginPath(), x0.moveTo(0, 0), x0.lineTo(eY, eY), x0.moveTo(0, eY), x0.lineTo(eY, 0), x0.stroke()
		}(x0, Math.floor(a9Z * jF)), x0.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(f0, a9d, a6Z, a9e) {
		xJ || a9e && a9a || (a9X = a6Z ? 21 : f0 ? 1 : 2, xJ = a9a = !0, this.resize(), aH.r4(), aN.a6T(), ln = bb.lt, a63 = a9d ? 1 : 0)
	}, this.ie = function() {
		!xJ || 1 <= a63 || (a63 = 1 < (a63 += 5e-4 * (bb.lt - ln)) ? 1 : a63, ln = bb.lt, bb.dc = !0)
	}, this.gm = function(ef, eh) {
		return !(!xJ || a63 <= 0 || (ef -= Math.floor((at.a1 - a1) / 2), eh -= ww(), ef < 0) || eh < 0 || a1 < ef || jF < eh || (a1 - jF / 3 < ef && eh < jF / 3 && (xJ = !1, bb.dc = !0), 0))
	}, this.ta = function() {
		!xJ || a63 <= 0 || (tb.globalAlpha = a63, tb.drawImage(canvas, Math.floor((at.a1 - a1) / 2), ww()), tb.globalAlpha = 1)
	}
}

function dG() {
	var a9i = [0, 0],
		a9j = [0, 0];

	function a9m(e0) {
		return 3 !== a9i[e0] && 1 !== a9j[e0] && (a9j[e0] = 1, a9i[e0]++, bf.rF.rG(119, (a9i[0] << 2) + a9i[1]), 1)
	}
	this.a9k = new a9l, this.dU = function() {
		var f0 = bf.dp.data[119].value;
		a9i[0] = f0 >> 2, a9i[1] = 3 & f0
	}, this.a3J = function() {
		this.a9k.dU()
	}, this.ie = function() {
		this.a9k.ie()
	}, this.a3v = function() {
		a9m(0) && aJ.a4w(L(118))
	}, this.a3w = function() {
		a9m(1) && aJ.a4w(L(119))
	}
}

function a9l() {
	var a9n;
	this.dU = function() {
		a9n = !1
	}, this.ie = function() {
		var g6;
		if (function() {
				if (!a9n) {
					if (bb.jj() % 30 != 9) return;
					if (!b6.fu.ku(90)) return;
					a9n = !0
				}
				return 1
			}() && (! function() {
				var pO = aJ.a5I(956);
				if (pO) {
					if (b6.fu.kY(pO.player)) return 1;
					aJ.a42(956, 0)
				}
				return
			}() && (-1 === (g6 = (a9.hL ? function() {
				var id = bd.ky(),
					eY = ah.jn;
				if (bc.k8[id])
					for (var yZ = ah.jo, eW = bc.eW, a7 = 0; a7 < eY; a7++) {
						var g6 = yZ[a7];
						if (eW[g6] !== id) return g6
					} else if (1 < eY) return l1[eY - 1];
				return -1
			} : function() {
				for (var a9v = ah.jn, kT = ah.jo, a9w = jX, a7 = 0; a7 < a9v; a7++) {
					var g6 = kT[a7];
					if (0 !== a9w[g6]) return g6
				}
				return -1
			})()) ? ! function() {
				var pO = aJ.a5I(957);
				if (pO && pO.a4m) {
					if (aY.eP(pO.a4m.eK << 2)) return 1;
					aJ.a42(957, 0)
				}
				return
			}() : (aJ.z9(0, L(120, [ac.zK[g6]]), 956, g6, b7.md, b7.ma, -1, !0), 0)))) {
			var eY = aj.iQ.kk;
			if (0 === eY) aj.iQ.l9();
			else
				for (var dp = aj.iQ.dp, a7 = 0; a7 < eY; a7++) {
					var eK = dp[a7];
					if (aY.eP(eK << 2)) return void aJ.z9(0, L(121, [bI.eg(eK), bI.ei(eK)]), 957, 0, b7.md, b7.ma, -1, !0, void 0, {
						er: 1,
						eK: eK
					})
				}
		}
	}
}

function dH() {
	this.a9x = new a9y, this.dU = function() {
		this.a9x.resize()
	}
}

function a9y() {
	this.resize = function() {
		var a7, a9z = document.head.querySelector("style#ss");
		if (a9z)
			for (a7 = a9z.sheet.cssRules.length - 1; 0 <= a7; a7--) a9z.sheet.deleteRule(0);
		else(a9z = document.createElement("style")).id = "ss", document.head.appendChild(a9z);
		var a6t = "::-webkit-scrollbar",
			aA0 = b6.pW.ph(bY.rZ),
			hN = b6.pW.ph(Math.max(b6.pW.r6(.012), 8));
		try {
			a9z.sheet.insertRule(a6t + "{width:" + hN + ";height:" + hN + ";}", a9z.sheet.cssRules.length), a9z.sheet.insertRule(a6t + "-thumb{background-color:white;}", a9z.sheet.cssRules.length), a9z.sheet.insertRule(a6t +
				"-track{background:" + b7.mZ + ";}", a9z.sheet.cssRules.length), a9z.sheet.insertRule(a6t + "-track:horizontal{border-top:" + aA0 + " solid white;}", a9z.sheet.cssRules.length), a9z.sheet.insertRule(a6t +
				"-track:vertical{border-left:" + aA0 + " solid white;}", a9z.sheet.cssRules.length), a9z.sheet.insertRule(a6t + "-button{display:none;}", a9z.sheet.cssRules.length)
		} catch (e) {
			for (console.log("error 3425: " + e), a7 = a9z.sheet.cssRules.length - 1; 0 <= a7; a7--) a9z.sheet.deleteRule(0)
		}
	}
}

function dF() {
	this.aA1 = !1, this.mT = !1, this.a33 = !1, this.aA2 = [0, 0, 0, 0], this.aA3 = function() {
		var m3, m4, mG, mH;
		this.a33 = this.a33 || this.mT, (this.mT || this.aA1 && this.a33) && (m3 = bW.aA4[0], m4 = bW.aA4[1], mG = bW.aA4[2], mH = bW.aA4[3], m3 = m3 < this.aA2[0] ? this.aA2[0] : m3, m4 = m4 < this.aA2[1] ? this.aA2[1] : m4, mG = mG > this.aA2[
				2] ? this.aA2[2] : mG, mH = mH > this.aA2[3] ? this.aA2[3] : mH, this.mT = !1, this.aA1 = !1, m3 === this.aA2[0] && m4 === this.aA2[1] && mG === this.aA2[2] && mH === this.aA2[3] ? this.a34() : m3 <= mG && m4 <= mH && a3L
			.putImageData(a3M, 0, 0, m3, m4, mG - m3 + 1, mH - m4 + 1))
	}, this.a34 = function() {
		this.a33 && this.aA2[2] >= this.aA2[0] && this.aA2[3] >= this.aA2[1] && a3L.putImageData(a3M, 0, 0, this.aA2[0], this.aA2[1], this.aA2[2] - this.aA2[0] + 1, this.aA2[3] - this.aA2[1] + 1), this.a33 = !1
	}, this.yw = function() {
		this.aA2[2] >= this.aA2[0] && this.aA2[3] >= this.aA2[1] && a3L.putImageData(a3M, 0, 0, this.aA2[0], this.aA2[1], this.aA2[2] - this.aA2[0] + 1, this.aA2[3] - this.aA2[1] + 1), this.a33 = !1
	}, this.dU = function() {
		var ef, eh;
		this.aA1 = !1, this.mT = !1, this.a33 = !1, this.aA2[0] = bO.ej, this.aA2[1] = bO.ek, this.aA2[2] = this.aA2[3] = 0;
		loop: for (ef = 1; ef < bO.ej - 1; ef++)
			for (eh = bO.ek - 2; 1 < eh; eh--)
				if (1 === aA5[aY.wV(ef, eh) + 2]) {
					this.aA2[0] = ef;
					break loop
				} loop: for (eh = 1; eh < bO.ek - 1; eh++)
			for (ef = bO.ej - 2; 1 < ef; ef--)
				if (1 === aA5[aY.wV(ef, eh) + 2]) {
					this.aA2[1] = eh;
					break loop
				} loop: for (ef = bO.ej - 2; 0 < ef; ef--)
			for (eh = bO.ek - 2; 1 < eh; eh--)
				if (1 === aA5[aY.wV(ef, eh) + 2]) {
					this.aA2[2] = ef;
					break loop
				} loop: for (eh = bO.ek - 2; 0 < eh; eh--)
			for (ef = bO.ej - 2; 1 < ef; ef--)
				if (1 === aA5[aY.wV(ef, eh) + 2]) {
					this.aA2[3] = eh;
					break loop
				}
	}
}

function L(value, aA6, u6) {
	var pD = "number" == typeof value ? b3.aA7[value] : value;
	if (u6 && b3.aA8() && (pD = u6), aA6)
		for (var eY = aA6.length, a7 = 0; a7 < eY; a7++)
			for (var er = 0; er < 3; er++) pD = pD.replace("{" + (10 * er + a7) + "}", aA6[a7]);
	return pD
}

function bw() {
	this.data = new aA9;
	var aAA = (new aAB).L84,
		aAC = (this.aA7 = aAA, !1);
	this.dU = function() {
		var eY, g;
		aAC = !1, "en" !== bf.dp.data[12].value.split("-")[0].toLowerCase() ? bf.dp.data[12].value === bf.dp.data[145].value && 0 < bf.dp.data[146].value && (eY = bf.dp.data[146].value, (g = bf.pp.uC(eY, !1)).length === eY) && !!b6.pg.a1R(g) &&
			function(g) {
				var eY = g.length,
					aAI = bf.pp.uC(eY, !0);
				if (eY !== aAI.length) return !1;
				if (!b6.pg.a1R(aAI)) return !1;
				for (var kU = aAA.length, a7m = new Array(kU), aAJ = kU === eY, g1 = Math.min(eY, kU), a7 = 0; a7 < kU; a7++)
					if (a7m[a7] = aAA[a7], a7 < eY && aAI[a7] === a7m[a7]) a7m[a7] = g[a7];
					else {
						aAJ = !1;
						for (var es = 0; es < g1; es++)
							if (aAI[es] === a7m[a7]) {
								a7m[a7] = g[es];
								break
							}
					} return b3.aA7 = a7m, aAJ
			}(g) || (aAC = !0) : b3.aA7 = aAA
	}, this.dW = function() {
		bc.dV(), aA.dV(), ba.dV(), bZ.dV(), aK.dU(), bl = new dr
	}, this.aA8 = function() {
		return this.aA7 === aAA || !aAA.length
	}, this.aAK = function() {
		var aAL;
		aAC && (aAC = !1, 0 !== aAA.length) && (aAL = bf.dp.data[12].value, aw.aAM.aAN(0, aAL.slice(0, 20)))
	}, this.aAO = function(g) {
		g.length === aAA.length && (this.aA7 = g, bf.rF.rG(145, bf.dp.data[12].value), bf.rF.rG(146, g.length), bf.pp.uI(g, !1), bf.pp.uI(aAA, !0), 0 === aW.zu()) && 5 === n.rw && n.s.aAP()
	}
}

function aA9() {
	var g = ["aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts", "btx",
		"bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "en", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fil", "fj",
		"fo", "fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac",
		"kek", "kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk",
		"ml", "mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "nb", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu",
		"rn", "ro", "rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "sh", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl",
		"tn", "to", "tpi", "tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu"
	];
	this.aAQ = function() {
		for (var aAR = [], eY = g.length, a7 = 0; a7 < eY; a7++) aAR.push(g[a7]);
		for (eY++, aAR.unshift(bf.dp.data[12].u6), a7 = 1; a7 < eY; a7++)
			if (aAR[a7] === aAR[0]) {
				aAR.splice(a7, 1), eY--;
				break
			} try {
			if ("undefined" == typeof Intl) return aAR;
			for (a7 = 0; a7 < eY; a7++) {
				var pD = new Intl.DisplayNames([aAR[a7]], {
					type: "language"
				}).of(aAR[a7]);
				pD !== aAR[a7] && (aAR[a7] = aAR[a7] + ": " + pD)
			}
		} catch (e) {
			console.log("error 3646: " + e)
		}
		return aAR
	}, this.aAT = function(aAU) {
		for (var pD = bf.dp.data[12].value, eY = aAU.length, a7 = 0; a7 < eY; a7++)
			if (pD === aAU[a7].split(":")[0]) return a7;
		return 0
	}
}

function aAB() {
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
		"A bot ({0}) has supported you with 1 resource.", "A bot ({0}) has supported you with {11} resources.", "{0} has supported you with 1 resource.", "{0} has supported you with {11} resources.", "Map: {10}", "Dimension: {10}",
		"Overall Pixels: {10}", "Land: {10}", "Mountains: {10}", "Full sending is disabled.", "{0} has been conquered by {1}.", "{0} has left the game.", "{0} has surrendered.", "{0} has joined the game.", "{10} players have been conquered.",
		"{10} players have left the game.", "{10} players have surrendered.", "Next Contest: ", "YOU HAVE CONQUERED", "YOU HAVE BEEN CONQUERED BY", "THE GAME HAS BEEN WON BY", "MAP:", "{0} has called the peace vote.", "{0} has voted for peace.",
		"{0} has rejected peace.", "second played", "seconds played", "LEADERBOARD", "Humans", "Players", "Bots", "Spectators", "Threshold", "Percentage", "Growth", "Income", "Time", "Hint: Click on a boat to send it to a new location.",
		"Hint: The top 9 emojis are ordered by usage.", "{0} still needs to be conquered!", "A neutral pixel at position ({10}, {11}) still needs to be conquered!", "code3123", "Show Account", "Moderation Actions", "Report User", "Loading",
		"White Arena", "Black Arena", "Island", "Mountains", "Desert", "Swamp", "White Plains", "Cliffs", "Pond", "Halo", "Europe", "World", "Caucasia", "Africa", "Middle East", "Scandinavia", "North America", "South America", "Asia",
		"Australia", "Island Kingdom", "Refresh", "Public Profile", "🧈 Gold", "Monopolist", "Banker", "Miner", "Saver", "Starter", "Account Balance: ", "Rank: ", "Status: ",
		"Play multiplayer games to earn gold. Accounts without gold will be deleted! Each day, you will lose 0.50 gold or 0.01% of your balance, whichever amount is higher.",
		"Buttons with yellow font color use a small amount of gold, which is then redirected based on the specific action taken.", "Gold is the fuel that keeps your account running! Keep the balance up!", "Gold Transfer", "Confirm", "Cancel",
		"You are about to send {10} gold from the Source Account {1}. The transaction fee is {12} gold. The Target Account ({3}) will receive {14} gold.", "Account Name", "Copy", "Password", "Show", "Hide", "Request New Password", "Security Tip",
		"To safeguard your account, never disclose your password to anyone. We will never ask for your password, as we do not require it for any service.",
		"If you have accessed your account through unofficial webpages or apps, your security may be compromised. We recommend changing your password.",
		"If you lose your password or account name, you may lose access to your account. In such a case, we are unable to recover it. Please ensure that you store your account name and password in a safe place.", "Account Options",
		"Log in to a Different Account", "Create New Account", "Delete Account: ", "🗑️ Account Deletion", "Accounts without gold will be deleted automatically after 8 days. To initiate this process, deplete all your gold.", "Saved Accounts",
		"Listed accounts may have been removed in the meantime due to insufficient funds.", "🗑️ Remove From List", "➡️ Login", "1v1 Rating", "Elo: ", "Played Games: ", "Battle Royale Rating", "Commander", "Strategist", "Soldier", "Recruit",
		"Rating: ", "Admin Statistics", "Votes: ", "You are about to purchase {10} votes for {11} Gold with your Account {2}.", "Username", "Please choose a respectful username.", "Bio", "Upload Bio", "The monthly fee is currently {10} gold.",
		"Enable Auto Renew", "Disable Auto Renew", "Auto Renew is off. The subscription will end in {10} day(s).", "Auto Renew is on. The subscription will renew in {10} day(s).", "Report Player", "Primary Clan Stats", "Clan: ",
		"Monthly Points: ", "Total Points: ", "Won Games: ", "Avg. Points per Game: ", "Secondary Clan Stats", "Clan Leader Statistics", "Clan Leader of {0}", "No Clan Leader", "Elect",
		"You are allowed to elect up to one clan leader each week. Your voting power is based on your monthly clan points.", "You can only elect members of the same clan you have won points for.", "Additional Income", "Options", "Default",
		"Uniform", "Customized", "Mixed", "Team dependent", "Player Count", "Clan Chart", "🛠️ Options", "🛠️ Chart Options", "Search Terms", "Separate search terms with a comma.", "Load Data", "Start Index", "End Index", "Timeframe",
		"More Options", "Y-Axis Compression", "Choose Your Nation's Color!", "National Color", "Red: ", "Green: ", "Blue: ", "Adjust", "Colors", "Random", "Selectable Color", "⏳ Connecting...", "Find Server...", "New Connection...",
		"Custom Scenario", "⚔️ Play", "Map", "Settings", "Game Mode", "Clustered", "Player Names", "Kingdom Names", "Simple Names", "Territorial Income", "Interest Income", "Starting Resources", "More Settings", "Reset Scenario", "Open File...",
		"Save As File...", "Multiplayer", "My Account", "Game Menu", "Your Kingdom's Name", "Clans", "Clan Members", "Admins", "1v1 Players", "Battle Royale", "Richest Players", "🏆 Leaderboards", "Previous 10", "Next 10", "1v1 Player Ranking",
		"Clan Ranking", "Clan Member Ranking", "Admin Ranking", "1v1 Reports", "Admin Election", "Blockchain", "Clan Leader Election", "Bio Reports", "Battle Royale Players", "Ranking", "Player", "Elo", "Clan", "Rating", "Leader", "Index",
		"Seconds Ago", "Accuser", "Accused", "Voter", "Target Account", "Votes", "Sender", "Receiver", "Amount", "Number", "Gold", "Elo Deducted", "Bio Removed", "🛠️ List Options", "Clan Name Search", "Username Search", "Quantity",
		"Account Name Search", "1v1", "Zombie", "Chat", "Close", "Ready", "Next Map", "Next Game Mode", "Next Contest", "Teams", "ON", "OFF", "Zombies", "Login", "📜 Logs", "Procedural Map", "Realistic Map", "Custom Map", "Passable Water",
		"Passable Mountains", "Select File", "Preview", "Map Name", "Selectable Name", "▶️ Replay", "🔲 Select All", "📋 Copy", "🗑️ Clear", "▶️ Launch", "Insert the replay string here!", "⚙️ Settings", "🔄 Reset", "Reload Required",
		"A game reload is required to apply the new configuration.", "Information", "Increasing resolution, shrinking minimum font size, and speeding up text rendering can strain your system and hinder gameplay responsiveness.", "Resolution",
		"Low", "Medium", "High", "Very High", "Minimum Font Size", "Small", "Very Small", "Text Rendering Speed", "Slow", "Fast", "Large UI", "Place Balance Above", "Hide Zoom Buttons", "Font", "Shortcut Keys", "Reset", "Language", "Spawning",
		"Selectable Spawn", "🔑 My Account", "📈 Charts", "🧈 Gold Transfer", "🔗 Links", "ℹ️ Game Version", "🗑️ Delete Data", "Privacy Settings", "Force Restart Game", "☰ Game Menu", "📊 Game Statistics", "🏳️ Surrender", "🕊️ Call Peace Vote",
		"Android App", "iOS App", "Changelog", "Clan Results", "Tutorial", "Terms", "Privacy", "Do you want to delete all locally stored data, like usernames, account data and setting data?",
		"Accounts without gold will be deleted after some days of grace.", "🗑️ Delete", "User Privacy", "Check out our Privacy Policy at:", "Source Account", "Replay Error", "Warning", "Loading...",
		"An enemy ship belonging to {0} is heading towards your shore.", "Initiate Land Attack At Mouse Pointer", "Launch Ship Towards Mouse Pointer", "Increase Percentage Bar", "Decrease Percentage Bar", "Slightly Increase Percentage Bar",
		"Slightly Decrease Percentage Bar", "Switch UI Visibility", "Zoom In", "Zoom Out", "Camera Left", "Camera Right", "Camera Up", "Camera Down", "Add To Weakest Attack", "Call Peace Vote", "Avg. Attack Strength", "Land Attacks",
		"Ships launched", "Bots conquered", "Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Received Support", "Overall Income", "Additional Costs", "Land War Losses", "Naval Losses", "Transmitted Support",
		"Overall Expenses", "Mountain Attacks", "Ships landed", "Territory", "Numbers", "Statistics", "Neutral", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black", "Ship launched!", "Ship selected!", "Ship on the way!"
	]
}

function da() {
	var ef, eh, jF, st, aAV, aAW, aAX, aAY, aAZ, a1, a22, aAa;
	this.xJ = !1, this.dU = function(pD, aAb) {
		if (1 === u.id && 13 <= u.f1 && u.f1 < 18) return aAb ? void(a22 = pD) : a22 !== pD ? void 0 : void u.uA.saveString(200, pD);
		aAb && (a22 = pD, (aAa = document.createElement("a")).appendChild(document.createTextNode(a22)), this.xJ = !0, aAa.title = a22, aAa.target = "_blank", aAa.href = a22, aAa.style.textAlign = "center", aAa.style.color = b7.md, aAa.style
			.position = "absolute", aAa.style.padding = "0px", aAa.style.margin = "0px", this.resize(), document.body.appendChild(aAa), bb.dc = !0)
	}, this.r4 = function() {
		return !(!this.xJ || (document.body.removeChild(aAa), this.xJ = !1))
	}, this.gm = function(ho, hp) {
		return !!this.xJ && ((ho < ef || hp < eh || ef + a1 < ho || eh + jF < hp || ef + a1 - st < ho && hp < eh + st) && (bb.dc = !0, this.xJ = !1, document.body.removeChild(aAa)), !0)
	}, this.resize = function() {
		var a4G, aAc;
		this.xJ && (aAY = Math.floor(.8 * (u.v.rB() ? at.a1 > at.jF ? .6 : .55 : .4) * at.pY), st = Math.floor(.15 * aAY), aAV = Math.floor(.35 * st), aAW = Math.floor(.5 * st), aAX = Math.floor(2.5 * aAW), jF = st + aAV + 3 * aAW, a4G = b6.pW
			.rY(1, aAV / at.pc), aAZ = Math.floor(at.pc * aM.measureText(a22, a4G)), aAc = a1 = (aAY < aAZ ? aAZ : aAY) + 2 * aAX, a1 = Math.min(a1, at.a1 - 2 * (u.v.rB() ? 2 : 1) * bY.gap), a4G = b6.pW.rY(1, a1 / aAc * aAV / at.pc), aAZ =
			Math.floor(at.pc * aM.measureText(a22, a4G)), ef = Math.floor((at.a1 - a1) / 2), eh = Math.floor((at.jF - jF) / 2), aAa.style.font = a4G, aAa.style.top = Math.floor((eh + 1.4 * aAW + st) / at.pc) + "px", aAa.style.left = Math
			.floor((ef + (a1 - aAZ) / 2) / at.pc) + "px")
	}, this.ta = function() {
		this.xJ && (tb.fillStyle = b7.ma, tb.fillRect(ef, eh + st, a1, jF - st), tb.fillStyle = b7.nh, tb.fillRect(ef, eh, a1, st), tb.fillStyle = b7.md, tb.lineWidth = bY.xm, tb.strokeStyle = b7.md, tb.strokeRect(ef, eh, a1, jF), tb.fillRect(ef,
			eh + st, a1, bY.xm), tb.font = b6.pW.rY(1, .48 * st), b6.pW.textAlign(tb, 1), b6.pW.textBaseline(tb, 1), tb.fillText("You are leaving Territorial.io!", Math.floor(ef + (a1 - .5 * st) / 2), Math.floor(eh + .55 * st)), aI.a4R(
			Math.floor(ef + a1 - .8 * st), Math.floor(eh + .25 * st), Math.floor(.5 * st)), tb.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function dY() {
	var gap, a95, ef = [0, 0, 0, 0, 0],
		eh = [0, 0, 0, 0, 0],
		mF = [1, 1, 1, 1, 1],
		f0 = [!0, !0, !0, !1, !1],
		et = (this.fK = [!0, !0, !0, !1, !1], null);
	this.aAd = function(a1a, aAe) {
		et = a1a, f0 = aAe, a95 = [bG.aAf, bG.zp, bG.aAg, bG.aAg, bG.aAh], this.dU()
	}, this.dU = function() {
		if (aX.sO()) {
			var a7, s3 = Math.floor((u.v.rB() ? .261 : .195) * at.pY),
				s4 = Math.floor(.9 * s3),
				a6l = Math.floor(.17 * s4);
			if (gap = u.v.rB() ? 2 * bY.gap : bY.gap, mF[0] = s3 / et[0].width, mF[1] = s4 / et[1].width, mF[2] = a6l / et[2].height, mF[3] = a6l / et[3].height, mF[4] = a6l / et[4].height, mF[2] *= 1.7, mF[3] *= 1.07, ef[0] = gap, ef[1] = gap,
				ef[2] = gap, ef[3] = gap, ef[4] = Math.floor(2 * gap + mF[3] * et[3].width), eh[0] = gap, eh[1] = eh[0] + gap + mF[0] * et[0].height, eh[2] = eh[1] + gap + mF[1] * et[1].height, eh[3] = eh[2] + gap + mF[2] * et[2].height, eh[4] =
				eh[3], !f0[0])
				for (a7 = 0; a7 < 5; a7++) eh[a7] -= mF[0] * et[0].height + gap;
			if (!f0[1])
				for (a7 = 2; a7 < 5; a7++) eh[a7] -= mF[1] * et[1].height + gap
		}
	}, this.xJ = function() {
		return !(7 === aW.zu() && u.v.rB())
	}, this.gm = function(ho, hp) {
		if (et && this.xJ())
			for (var a7 = f0.length - 1; 0 <= a7; a7--)
				if (f0[a7] && this.fK[a7] && ef[a7] < ho && eh[a7] < hp && ho < ef[a7] + mF[a7] * et[a7].width && hp < eh[a7] + mF[a7] * et[a7].height) return n.o(9, n.rw, new aAi("You are leaving Territorial.io.", b6.pW.a21(a95[a7]))), !0;
		return !1
	}, this.ta = function() {
		if (et && this.xJ()) {
			var a7;
			for (tb.imageSmoothingEnabled = !0, a7 = 0; a7 < 5; a7++) f0[a7] && this.fK[a7] && (tb.setTransform(mF[a7], 0, 0, mF[a7], ef[a7], eh[a7]), tb.drawImage(et[a7], 0, 0));
			tb.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function dR() {
	this.aAj = 0, this.aAk = null, this.t1 = null, this.qj = null, this.s = null, this.tA = null, this.r1 = null, this.aAl = new aAm, this.zy = 0, this.dU = function() {
		this.aAj = bC.rz.v4(bf.dp.data[105].value), this.t1 = new aAn, this.qj = new aAo, this.s = new aAp, this.tA = new aAq, this.r1 = new aAr, this.s.dU(), this.zy = 1, u.v.setState(1), aW.setState(0)
	}, this.a07 = function() {
		this.aAk = null, this.t1 = null, this.qj = null, this.s = null, this.tA = null, this.r1 = null, this.zy = 0, Math.random() < .001 && console.log(L(122)), u.v.setState(0)
	}
}

function aAn() {
	function aB9(g, sH, sI) {
		var aBA = g[sH];
		g[sH] = g[sI], g[sI] = aBA
	}
	this.t2 = [
		[],
		[],
		[],
		[]
	], this.t3 = [0, 0, 0, 0], this.aAs = function(aAt, qu, username, qx, r0, aAu, elo, color, uc) {
		this.t2[aAt].push(this.aAv(qu, username, qx, r0, aAu, elo, color, uc)), bk.aAj === qu && (bk.aAk = this.t2[aAt][this.t2[aAt].length - 1]), bk.s.aAw += 29 === n.rw && bk.s.qb[0] === aAt && 1 === bk.s.qb[2]
	}, this.aAv = function(qu, username, qx, r0, aAu, elo, color, uc) {
		return {
			qu: qu,
			username: username,
			qx: qx,
			r0: r0,
			aAu: aAu,
			elo: elo,
			color: color,
			uc: uc
		}
	}, this.aAx = function(e0, aAt, qx, r0, aAu, elo, uc) {
		e0 = this.t2[aAt][e0];
		e0.qx = qx, e0.r0 = r0, e0.aAu = aAu, e0.elo = elo, e0.uc = uc, bk.s.aAw += 29 === n.rw && bk.s.qb[0] === aAt && 1 === bk.s.qb[2]
	}, this.aAy = function(e0, aAt, aAz) {
		var e0 = this.t2[aAt][e0],
			aB0 = e0.username,
			aB1 = "Censored" + e0.qu % 1e3;
		e0.username = aAz ? "[" + b6.zM.zQ(aB0) + "] " + aB1 : aB1, aB0.indexOf("Censored") < 0 && (e0.aB2 = aB0), bk.s.aAw += 29 === n.rw && bk.s.qb[0] === aAt && 1 === bk.s.qb[2]
	}, this.aB3 = function(e0, aB4, aB5) {
		var player = this.t2[aB4][e0];
		this.aB6(e0, aB4), this.t2[aB5].push(player), bk.s.aAw += 29 === n.rw && bk.s.qb[0] === aB5 && 1 === bk.s.qb[2]
	}, this.aB6 = function(e0, aB4) {
		var t1 = this.t2[aB4];
		e0 >= this.t3[aB4] ? t1[e0] = t1[t1.length - 1] : (this.t3[aB4]--, 2 === aB4 ? (t1.splice(this.t3[aB4] + 1, 0, t1[t1.length - 1]), t1.splice(e0, 1)) : (t1[e0] = t1[this.t3[aB4]], t1[this.t3[aB4]] = t1[t1.length - 1])), t1.pop(), bk.s
			.aAw += 29 === n.rw && bk.s.qb[0] === aB4 && 1 === bk.s.qb[2]
	}, this.aB7 = function(e0, qa) {
		bk.s.aAw += 29 === n.rw && bk.s.qb[0] === qa && 1 === bk.s.qb[2];
		var t1 = this.t2[qa],
			pO = t1[e0];
		if (2 === qa)
			if (e0 >= this.t3[qa]) {
				for (var aB8 = this.t3[qa], elo = pO.elo; aB8 && elo > t1[aB8 - 1].elo;) aB8--;
				t1[e0] = t1[this.t3[qa]], t1.splice(this.t3[qa]++, 1), t1.splice(aB8, 0, pO)
			} else t1.splice(this.t3[qa]--, 0, pO), t1.splice(e0, 1);
		else e0 >= this.t3[qa] ? aB9(t1, this.t3[qa]++, e0) : aB9(t1, --this.t3[qa], e0)
	}
}

function aAm() {
	this.dd = function(e0) {
		if ((t3 = bk.t1.t3[e0]) < 2) return !1;
		var qc = bk.s.qd[e0],
			aBB = 9 === qc.aBC ? 333 : 512,
			t3 = Math.min(t3, aBB);
		8 === qc.aBC && (t3 -= t3 % 2);
		aBB = bk.t1.t2[e0].splice(0, t3), bk.t1.t3[e0] -= t3, t3 = function(aBD) {
			if (bk.aAk)
				for (var eY = aBD.length, qu = bk.aAk.qu, a7 = 0; a7 < eY; a7++)
					if (aBD[a7].qu === qu) return a7;
			return -1
		}(aBB);
		return -1 === t3 ? (bk.s.aAw += 29 === n.rw && bk.s.qb[0] === e0 && 1 === bk.s.qb[2], !1) : (8 === qc.aBC && (qc.aBG = (qc.aBG + (t3 >> 1)) % 1024, e0 = t3 - t3 % 2, t3 %= 2, aBB = aBB.slice(e0, 2 + e0)), ar.dU(qc, aBB, t3), !0)
	}, this.aBH = function(qc, aBD, aBE) {
		var eb = a9.data = new a39,
			aBL = (eb.spawningSeed = qc.spawningSeed, qc.aBC < 7 ? (eb.gameMode = 1, eb.numberTeams = qc.aBC + 2) : 9 === qc.aBC ? (eb.gameMode = eb.isZombieMode = 1, eb.numberTeams = 2) : (eb.gameMode = 0, eb.battleRoyaleMode = 7 === qc.aBC ?
				0 : 10 === qc.aBC ? 1 : 2), eb.selectedPlayer = aBE, eb.isContest = qc.aBI, eb.mapType = bO.aBJ(qc.eE) ? 0 : 1, bO.aBK(eb, qc.eE), eb.mapSeed = qc.mapSeed, eb.humanCount = aBD.length);
		eb.selectableSpawn = 1 === eb.gameMode || aBL < 100, eb.colorsData = new Uint32Array(aBL), eb.playerNamesData = new Array(aBL);
		for (var a7 = 0; a7 < aBL; a7++) eb.colorsData[a7] = aBD[a7].color, eb.playerNamesData[a7] = aBD[a7].username;
		if (2 === eb.battleRoyaleMode)
			for (eb.elo = new Uint16Array(aBL), a7 = 0; a7 < aBL; a7++) eb.elo[a7] = aBD[a7].elo;
		aW.setState(8), bO.a3(qc.eE, eb.mapSeed), a9.a3D(), a9.a3C = 2
	}
}

function aAo() {
	var ds = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player"],
		aBM = [b7.mr, b7.mr, b7.ms, b7.nL, b7.nM, b7.n8, b7.nR, b7.ms, b7.nj, b7.nZ],
		aBN = [
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
		aBO = ["Your account is too new!", "The server couldn't process your request.", "Spam detected!", "You are muted!", "Player couldn't be found.", "You don't have permission for this operation!"],
		aBP = [
			["", " was muted. Duration: 1 Hour"],
			["The username of ", " was censored. Duration: 1 Day"]
		];
	this.qk = function(code) {
		return {
			id: 13,
			fontSize: this.aBQ(0),
			qo: [],
			qr: [{
				pD: "[Private Message] " + aBO[code],
				color: b7.nK,
				r3: 0
			}]
		}
	}, this.ql = function(qa, aBS) {
		var jF = this,
			a2A = jF.aBT(qa, aBS.qu);
		return a2A || ((a2A = bk.t1.aAv(aBS.qu, bB.rz.y3(aBS.qu, 5), 1, 1e6, 1e6, 0, 0, 0)).qt = 1), 0 === aBS.id ? {
			id: aBS.id,
			fontSize: jF.aBQ(a2A.qx, a2A.r0),
			qo: [a2A],
			qr: [{
				pD: ": " + aBS.k,
				color: b7.md,
				r3: jF.qz(a2A.r0)
			}]
		} : 14 === aBS.id ? {
			id: aBS.id,
			fontSize: jF.aBQ(0, 0),
			qo: [null, a2A],
			qr: [{
				pD: aBP[aBS.aBU][0],
				color: b7.nK,
				r3: 0
			}, {
				pD: aBP[aBS.aBU][1],
				color: b7.nK,
				r3: 0
			}]
		} : ((qa = jF.aBT(qa, aBS.target)) || ((qa = bk.t1.aAv(aBS.target, bB.rz.y3(aBS.target, 5), 1, 1e6, 1e6, 0, 0, 0)).qt = 1), {
			id: aBS.id,
			fontSize: jF.aBQ(0, 0),
			qo: [a2A, qa],
			qr: [{
				pD: function(aBS) {
					if (aBS.id < 15) return bl.e3(aBS.id - 1, bl.dx[aBS.id - 1][aBS.value]);
					return 0 === aBS.aBU ? 32768 <= aBS.value ? " voted with " + (aBS.value - 32768 + 1) + " gold against " : " voted with " + (aBS.value + 1) + " gold for " : 1 === aBS.aBU ? " sent " + (aBS.value / 100)
						.toFixed(2) + " Gold to " : " voted with " + aBS.value + " points for "
				}(aBS),
				color: b7.nK
			}, {
				pD: 15 === aBS.id ? function(aBS) {
					return 0 === aBS.aBU ? 32768 <= aBS.value ? " to weaken the latter's admin position." : " to strengthen the latter's admin position." : 1 === aBS.aBU ? "." : " to acknowledge the latter as clan leader."
				}(aBS) : bl.e5(aBS.id - 1, bl.dx[aBS.id - 1][aBS.value]),
				color: b7.nK
			}]
		})
	}, this.qv = function(player, qa, aBX) {
		return (2 === qa ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username + (aBX && player.aB2 ? " (" + player.aB2 + ")" : "")
	}, this.qw = function(qx) {
		return aBM[qx]
	}, this.aBQ = function(qx, r0) {
		return qx < 3 || 7 === qx ? aBN[qx][0] : 4 === qx ? aBN[qx][r0 < 1 ? 0 : r0 < 10 ? 1 : 2] : aBN[qx][r0 < 10 ? 0 : 1]
	}, this.qz = function(r0) {
		return 0 === r0
	}, this.aBT = function(qa, qu) {
		for (var t2 = bk.t1.t2, t1 = t2[qa], eY = t1.length, a7 = 0; a7 < eY; a7++)
			if (qu === t1[a7].qu) return t1[a7];
		for (var es = 0; es < t2.length; es++)
			if (qa !== es)
				for (eY = (t1 = t2[es]).length, a7 = 0; a7 < eY; a7++)
					if (qu === t1[a7].qu) return t1[a7];
		return null
	}, this.qy = function(pO) {
		return !!bk.aAk && pO.qu === bk.aAk.qu
	}, this.aBY = function(t1, aBZ, aBa) {
		var zO = [];
		loop: for (var a7 = aBZ; a7 < aBa; a7++) {
			var zP = b6.zM.zQ(t1[a7].username);
			if (zP) {
				for (var es = zO.length - 1; 0 <= es; es--)
					if (zP === zO[es].name) {
						zO[es].g1++;
						continue loop
					} zO.push({
					name: zP,
					g1: 1
				})
			}
		}
		if (zO.sort(function(er, es) {
				return es.g1 - er.g1
			}), 0 === zO.length) return "";
		for (var pD = zO[0].name + ": " + zO[0].g1, a7 = 1; a7 < zO.length; a7++) pD += "   " + zO[a7].name + ": " + zO[a7].g1;
		return pD
	}, this.aBb = function(qx, r0, aAu) {
		return 0 === ds[qx].length ? "Rank: " + (r0 + 1) : ds[qx] + " Rank: " + (r0 + 1) + (3 !== qx && aAu < 100 ? "   " + ds[3] + " Rank: " + (aAu + 1) : "")
	}
}

function aAr() {
	var aBc = null;
	this.r2 = function(e, pO) {
		var a6s = e.target.getBoundingClientRect();
		this.show(a6s.left, a6s.top, pO), e.target.addEventListener("mouseleave", function remove() {
			e.target.removeEventListener("mouseleave", remove), bk.r1 && bk.r1.r4(1)
		})
	}, this.show = function(ef, eh, pO, rX) {
		(aBc = aBc || new rT).show(ef, eh, function(pO) {
			return pO.username + "   " + bk.qj.aBb(pO.qx, pO.r0, pO.aAu) + function(pO) {
				pO = pO.uc;
				if (pO < 1e3) return "   Gold: " + pO;
				if ((pO %= 1024) < 1e3) return "   Gold: " + pO + "k";
				return "   Gold: " + (pO - 999) + "M"
			}(pO) + (2 === bk.s.qb[0] ? "   Elo: " + (pO.elo / 10).toFixed(1) : "")
		}(pO), rX)
	}, this.r4 = function(ra) {
		aBc && aBc.r4(ra)
	}
}

function aAp() {
	function aBi(aBl) {
		bk.s.aAw && 1 === bk.s.qb[2] && n.aBm(29).aBn(), bk.s.aAw = 0, n.aBm(29).aBo(), 0 !== bk.s.qd[bk.s.qb[0]].sn && !aBl || n.aBm(29).aBp()
	}
	this.qd = new Array(4), this.qb = [0, 0, 1, 0], this.aAw = 0, this.aBf = [0, 0], this.qg = [], this.dU = function() {
		for (var a7 = 0; a7 < this.qd.length; a7++) this.qd[a7] = new aBg;
		this.qb[0] = bf.dp.data[158].value
	}, this.aBh = function() {
		aBi(!0)
	}, this.aBj = function() {
		for (var a7 = 0; a7 < bk.s.qd.length; a7++) {
			var qc = bk.s.qd[a7];
			0 === qc.sn ? qc.aBq = 0 : (qc.aBr = Math.max(qc.aBr - qc.aBq % 2, 0), qc.aBq++)
		}
		aBi(!1)
	}, this.aBs = function(qa) {
		this.qb[0] !== qa || this.qb[2] || n.aBm(29).aBt()
	}
}

function aAq() {
	var aBu = null,
		aBv = null,
		aBw = 0,
		aBx = 0,
		aBy = null;

	function aC0() {
		0 !== aBv.qx && (bk.tA.r4(), n.o(8, 29, new rx(25, {
			ry: 0,
			qu: bB.rz.y3(aBv.qu, 5),
			rv: 0
		}, 29)))
	}

	function aC1() {
		var ef = aBu.ef,
			eh = aBu.eh;
		bk.tA.r4(), aBu = new t6([new q("Kick User", function() {
			aC6(0, 0)
		}, aCB(0, 0)), new q("Block Chat", aC7, aCC(1)), new q("Censor Username", aC8, aCC(2)), new q("Elo Deduction", aC9, aCC(3)), new q("Gold Seizure", aCA, aCC(4))]), aC5(ef, eh), aBw = 2, aBx = 1
	}

	function aCC(id) {
		return !bk.aAk || bk.qj.qy(aBv) ? 1 : 4 === id && 9 === bk.aAk.qx && bk.aAk.r0 < aBv.r0 ? 0 : bk.aAk.aAu >= aBv.r0 || 0 === id && aBv.r0 < 200 ? 1 : 1 - bl.dy(id, bk.aAk.aAu, 0)
	}

	function aC4() {
		return !bk.aAk || bk.qj.qy(aBv) ? 1 : 0
	}

	function aCB(id, e0) {
		if (!bk.aAk) return 1;
		if (bk.qj.qy(aBv)) return 1;
		let r0 = bk.aAk.aAu;
		return (r0 = 4 === id && 9 === bk.aAk.qx ? Math.min(bk.aAk.r0, r0) : r0) >= aBv.r0 ? 1 : 1 - bl.dy(id, r0, e0)
	}

	function aC3() {
		var ef = aBu.ef,
			eh = aBu.eh,
			aCD = (bk.tA.r4(), aC4());
		aBu = new t6([new q(bl.dx[5][0], function() {
			aC6(5, 0)
		}, aCD), new q(bl.dx[5][1], function() {
			aC6(5, 1)
		}, aCD), new q(bl.dx[5][2], function() {
			aC6(5, 2)
		}, aCD), new q(bl.dx[5][3], function() {
			aC6(5, 3)
		}, aCD)]), aC5(ef, eh), aBx = aBw = 2
	}

	function aC6(id, value) {
		aw.aCE.aCF(5, {
			id: id,
			value: value,
			qu: aBv.qu
		})
	}

	function aC7() {
		var ef = aBu.ef,
			eh = aBu.eh;
		bk.tA.r4(), aBu = new t6([new q(bl.dx[1][0], function() {
			aC6(1, 0)
		}, aCB(1, 0)), new q(bl.dx[1][1], function() {
			aC6(1, 1)
		}, aCB(1, 1)), new q(bl.dx[1][2], function() {
			aC6(1, 2)
		}, aCB(1, 2)), new q(bl.dx[1][3], function() {
			aC6(1, 3)
		}, aCB(1, 3)), new q(bl.dx[1][4], function() {
			aC6(1, 4)
		}, aCB(1, 4))]), aC5(ef, eh), aBw = 3, aBx = 1
	}

	function aC8() {
		var ef = aBu.ef,
			eh = aBu.eh;
		bk.tA.r4(), aBu = new t6([new q(bl.dx[2][0], function() {
			aC6(2, 0)
		}, aCB(2, 0)), new q(bl.dx[2][1], function() {
			aC6(2, 1)
		}, aCB(2, 1)), new q(bl.dx[2][2], function() {
			aC6(2, 2)
		}, aCB(2, 2))]), aC5(ef, eh), aBw = 3, aBx = 2
	}

	function aC9() {
		var ef = aBu.ef,
			eh = aBu.eh;
		bk.tA.r4(), aBu = new t6([new q(bl.dx[3][0], function() {
			aC6(3, 0)
		}, aCB(3, 0)), new q(bl.dx[3][1], function() {
			aC6(3, 1)
		}, aCB(3, 1)), new q(bl.dx[3][2], function() {
			aC6(3, 2)
		}, aCB(3, 2))]), aC5(ef, eh), aBx = aBw = 3
	}

	function aCA() {
		var ef = aBu.ef,
			eh = aBu.eh;
		bk.tA.r4(), aBu = new t6([new q(bl.dx[4][0], function() {
			aC6(4, 0)
		}, aCB(4, 0)), new q(bl.dx[4][1], function() {
			aC6(4, 1)
		}, aCB(4, 1)), new q(bl.dx[4][2], function() {
			aC6(4, 2)
		}, aCB(4, 2)), new q(bl.dx[4][3], function() {
			aC6(4, 3)
		}, aCB(4, 3)), new q(bl.dx[4][4], function() {
			aC6(4, 4)
		}, aCB(4, 4))]), aC5(ef, eh), aBw = 3, aBx = 4
	}

	function aC5(ef, eh, tC) {
		aBu.show(ef, eh, tC), bk.r1.show(aBu.ef, aBu.eh, aBv, 1)
	}
	this.aBz = function(e, pO) {
		aBw = 1, aBv = pO, aBu = new t6([new q(L(123), aC0, 0 === aBv.qx ? 1 : 0), new q(L(124), aC1, function() {
			if (!bk.aAk) return 1;
			if (bk.qj.qy(aBv)) return 1;
			if (!(9 === bk.aAk.qx && bk.aAk.r0 < aBv.r0)) {
				if (100 <= bk.aAk.aAu) return 1;
				if (bk.aAk.aAu >= aBv.r0) return 1
			}
			return 0
		}()), new q(L(125), aC3, aC4())]), aC5((aBy = {
			clientX: e.clientX,
			clientY: e.clientY
		}).clientX, aBy.clientY, 1)
	}, this.a0p = function(code) {
		if (29 !== n.rw) return !1;
		if (!aBv) return !1;
		if (!(code.length < 1))
			if ("Escape" === code) bk.tA.r4();
			else if (b6.zM.startsWith(code, "Numpad") || b6.zM.startsWith(code, "Digit")) {
			code = parseInt(code[code.length - 1], 10);
			if (!isNaN(code))
				if (0 === aBw) this.aBz(aBy, aBv);
				else {
					if (!aBu) return !1;
					1 === aBw ? (code <= 1 ? aC0 : 2 === code ? aC1 : aC3)() : 2 === aBw ? 1 === aBx ? code <= 1 ? (aC6(0, 0), bk.tA.r4()) : (2 === code ? aC7 : 3 === code ? aC8 : 4 === code ? aC9 : aCA)() : (aC6(5, bH.p4(code - 1, 0, 3)), bk.tA
						.r4()) : (aC6(aBx, bH.p4(code - 1, 0, bl.dx[aBx].length - 1)), bk.tA.r4())
				}
		}
		return !0
	}, this.r4 = function() {
		aBw = 0, aBu && aBu.r4(), aBu = null, bk.r1.r4()
	}
}

function aBg() {
	this.sn = 0, this.eE = 0, this.mapSeed = 0, this.aBC = 0, this.aCG = 0, this.aCH = 0, this.aBI = 0, this.aBr = 0, this.spawningSeed = 0, this.a00 = 0, this.aBG = 0, this.qe = [], this.qf = 1048575, this.aBq = 0
}

function cJ() {
	var aCI, aCJ, aCK;

	function aCP(a7) {
		var button = aU.q7[a7],
			ef = button.ef,
			eh = button.eh,
			a1 = button.a1,
			jF = button.jF;
		tb.fillStyle = button.aCN, tb.fillRect(ef, eh, a1, jF), a7 === aCI && (tb.fillStyle = aCK, tb.fillRect(ef, eh, a1, jF)), tb.lineWidth = bY.xm, tb.strokeStyle = aCJ, tb.strokeRect(ef, eh, a1, jF),
			function(button) {
				var ef = button.ef,
					eh = button.eh,
					a1 = button.a1,
					jF = button.jF;
				b6.pW.textAlign(tb, 1), b6.pW.textBaseline(tb, 1), tb.font = button.font, tb.fillStyle = aCJ, tb.fillText(button.a5U, Math.floor(ef + a1 / 2), Math.floor(eh + jF / 2 + .1 * button.fontSize))
			}(button)
	}
	this.a1 = 0, this.jF = 0, this.eh = 0, this.gap = 0, this.dU = function() {
		aCI = -1, aCJ = b7.md, aCK = "rgba(255,255,255,0.16)", this.q7 = new Array(7), this.jF = Math.floor((u.v.rB() ? .123 : .093) * at.pY), this.a1 = Math.floor((u.v.rB() ? 3.96 : 4.2) * this.jF), this.gap = Math.floor(.025 * this.a1);
		var aCL = Math.floor(.26 * this.jF),
			aCM = b6.pW.rY(1, aCL);
		this.q7[0] = {
			ef: 0,
			eh: 0,
			a1: Math.floor(.6 * this.a1 - this.gap / 2),
			jF: this.jF,
			a5U: "Multiplayer",
			font: aCM,
			aCN: "rgba(22,88,22,0.8)",
			fontSize: aCL
		}, aCL = Math.floor(.18 * this.jF), aCM = b6.pW.rY(1, aCL), this.q7[1] = {
			ef: 0,
			eh: 0,
			a1: this.a1 - this.q7[0].a1 - this.gap,
			jF: this.jF,
			a5U: "Single Player",
			font: aCM,
			aCN: "rgba(22,88,88,0.8)",
			fontSize: aCL
		}, this.q7[2] = {
			ef: 0,
			eh: 0,
			a1: this.a1,
			jF: Math.floor(.3 * this.jF),
			a5U: "",
			font: this.q7[1].font,
			aCN: "rgba(100,0,0,0.8)",
			fontSize: this.q7[1].fontSize
		}, this.q7[3] = {
			ef: 0,
			eh: 0,
			a1: this.a1,
			jF: this.jF,
			a5U: "Back",
			font: this.q7[0].font,
			aCN: "rgba(0,0,0,0.8)",
			fontSize: this.q7[0].fontSize
		}, this.q7[4] = {
			ef: 0,
			eh: 0,
			a1: this.a1,
			jF: Math.floor(.3 * this.jF),
			a5U: "The game was updated!",
			font: this.q7[1].font,
			aCN: "rgba(100,0,0,0.8)",
			fontSize: this.q7[1].fontSize
		}, this.q7[5] = {
			ef: 0,
			eh: 0,
			a1: this.q7[0].a1,
			jF: Math.floor(.8 * this.jF),
			a5U: "Reload",
			font: this.q7[0].font,
			aCN: "rgba(0,100,0,0.8)",
			fontSize: this.q7[0].fontSize
		}, this.q7[6] = {
			ef: 0,
			eh: 0,
			a1: this.q7[1].a1,
			jF: this.q7[5].jF,
			a5U: "Back",
			font: this.q7[0].font,
			aCN: "rgba(0,0,0,0.8)",
			fontSize: this.q7[0].fontSize
		}, this.a7p()
	}, this.a7p = function() {
		this.eh = Math.floor(.54 * at.jF), this.q7[0].ef = Math.floor(.5 * at.a1 - .5 * this.a1), this.q7[1].ef = this.q7[0].ef + this.q7[0].a1 + this.gap, this.q7[2].ef = this.q7[3].ef = this.q7[0].ef, this.q7[4].ef = this.q7[5].ef = this.q7[0]
			.ef, this.q7[6].ef = this.q7[1].ef, this.q7[0].eh = Math.floor(.54 * at.jF), this.q7[1].eh = this.q7[0].eh, this.q7[2].eh = Math.floor((at.jF - this.q7[2].jF - this.q7[3].jF - this.gap) / 2), this.q7[3].eh = this.q7[2].eh + this.q7[2]
			.jF + this.gap, this.q7[4].eh = Math.floor((at.jF - this.q7[4].jF - this.q7[5].jF - this.gap) / 2), this.q7[5].eh = this.q7[6].eh = this.q7[4].eh + this.q7[4].jF + this.gap
	}, this.aCO = function() {
		aCP(0), aCP(1)
	}, this.aCQ = function() {
		aCP(2), aCP(3)
	}, this.aCR = function() {
		aCP(4), aCP(5), aCP(6)
	}, this.a0H = function(ef, eh, lM) {
		var a7 = -1;
		return 0 === aW.zu() ? a7 = this.a0l(ef, eh, 0, 2) : 3 === aW.zu() ? a7 = this.a0l(ef, eh, 3, 1) : 5 === aW.zu() && (a7 = this.a0l(ef, eh, 5, 2)), aCI !== a7 && (aCI = a7, lM) && (bb.dc = !0), -1 !== a7 && (aP.qY(), !0)
	}, this.a0l = function(ef, eh, aCS, size) {
		for (var a7 = aCS; a7 < aCS + size; a7++)
			if (ef >= this.q7[a7].ef && eh >= this.q7[a7].eh && ef <= this.q7[a7].ef + this.q7[a7].a1 && eh <= this.q7[a7].eh + this.q7[a7].jF) return a7;
		return -1
	}
}

function cK() {
	var aCU, aCV, a5c, a5m, a6d, aCW, aCX, aCY, aCZ, a4G, fontSize, ln, aCa, aCc, aCb = 0;

	function aCf() {
		return aw.s.aCg[(aCa + aCb) % aw.s.aCh]
	}

	function aCk() {
		__fx.customLobby.isActive() ? (l.a05(3249), __fx.customLobby.setActive(false)) : l.a05(3249)
	}

	function aCq(eh, a7W, sn) {
		var m3 = Math.floor((at.a1 - a5m) / 2) + aCX,
			mG = m3 + Math.floor(sn * (a5m - 2 * aCX));
		tb.lineWidth = a7W, tb.beginPath(), tb.moveTo(m3, eh), tb.lineTo(mG, eh), tb.lineTo(Math.floor(m3 - aCX + sn * a5m), eh + a5c), tb.lineTo(m3 - aCX, eh + a5c), tb.closePath()
	}
	this.dU = function() {
		aW.setState(6), aCU = 0, aCV = 1, aCY = "rgba(0,220,120,0.4)", aCZ = "rgba(0,0,0,0.8)", this.resize(), bb.dc = !0, aCa = 0, aCc = !1, aCa++, ln = bb.lt, aw.s.aCi(aCf(), 4) && (aCc = !0, aw.aCE.aCj(aCf()))
	}, this.resize = function() {
		a5m = Math.floor((u.v.rB() ? .5 : .25) * at.pY), a6d = a5m + 12, a5c = Math.floor(.125 * a5m), aCX = 3 * a5c, aCW = Math.floor(.225 * a5m), fontSize = Math.floor(.3 * a5c), a4G = b6.pW.rY(0, fontSize)
	}, this.aCe = function(er) {
		aCb = er
	}, this.zx = function(zr) {
		zr === aCf() && (aCc = !1, aCk())
	}, this.aCl = function(zr) {
		6 !== aW.zu() || aCc || (ln = bb.lt, aCc = !0)
	}, this.gm = function(ef, eh) {
		var m3 = Math.floor((at.a1 - a6d) / 2),
			m4 = Math.floor(.5 * (at.jF - bY.gap - a5c - aCW)) + a5c + bY.gap;
		return m3 < ef && ef < m3 + a6d && m4 < eh && eh < m4 + aCW && (this.a0x(), aU.a0H(ef, eh, !1), !0)
	}, this.a0x = function() {
		aw.s.a06(3260), __fx.customLobby.setActive(false), n.s.t()
	}, this.ie = function() {
		6 === aW.zu() && (aCc ? bb.lt > ln + 12e3 && l.a05(3250) : bb.lt > ln + 12e3 && aCk(), 100 < (aCU += .07 * aCV * (aCU < 16 ? 5 + aCU : 84 < aCU ? 105 - aCU : 17)) ? (aCU = 100, aCV = -1) : aCU < 0 && (aCU = 0, aCV = 1), aCY = "rgba(0," +
			Math.floor(190 - 1.9 * aCU) + "," + Math.floor(120 - 1.2 * aCU) + "," + (.4 + .004 * aCU) + ")", aCZ = "rgba(0," + Math.floor(1.9 * aCU) + "," + Math.floor(1.2 * aCU) + "," + (.8 - .004 * aCU) + ")", bb.dc = !0)
	}, this.ta = function() {
		var ef = Math.floor((at.a1 - a6d) / 2),
			eh = Math.floor(.5 * (at.jF - bY.gap - a5c - aCW));
		! function(title, eh, a7W, sn) {
			tb.fillStyle = aCZ, aCq(eh, a7W, 1), tb.fill(), tb.fillStyle = aCY, aCq(eh, a7W, sn), tb.fill(), tb.strokeStyle = b7.md, aCq(eh, a7W, 1), tb.stroke(),
				function(aCs, eh) {
					b6.pW.textAlign(tb, 1), b6.pW.textBaseline(tb, 1), tb.font = a4G, tb.fillStyle = b7.md, tb.fillText(aCs, Math.floor(.5 * at.a1), Math.floor(eh + .58 * a5c))
				}(title, eh)
		}(L(126), eh, 3, aCU / 100),
		function(ef, eh, a1, jF, a5U) {
			tb.fillStyle = b7.mY, tb.fillRect(ef, eh, a1, jF), tb.lineWidth = 3, tb.strokeStyle = b7.md, tb.strokeRect(ef, eh, a1, jF);
			var eY = Math.floor(.3 * jF);
			b6.pW.textAlign(tb, 1), b6.pW.textBaseline(tb, 1), tb.font = b6.pW.rY(0, eY), tb.fillStyle = b7.md, tb.fillText(a5U, Math.floor(ef + a1 / 2), Math.floor(eh + jF / 2 + .1 * eY))
		}(ef, eh + a5c + bY.gap, a6d, aCW, L(32))
	}
}

function cL() {
	var zm = 0;
	this.dU = function() {
		aU.dU(), zm = 0
	}, this.setState = function(aCt) {
		zm = aCt
	}, this.zu = function() {
		return zm
	}, this.aCu = function() {
		this.setState(8), n.r()
	}, this.a0p = function(e) {
		if (!bO.vK) return !1;
		if (!(bb.lt < 400)) {
			if ("Enter" === e.key || "Escape" === e.key) {
				if (this.aCv()) return !0;
				if ("Enter" === e.key) {
					if (0 === zm) return !0;
					if (7 === zm) return !0
				}
			}
			return !1
		}
	}, this.aCw = function() {
		bV.resize()
	}, this.aCv = function() {
		return !!bV.r4()
	}, this.gm = function(ef, eh) {
		!bO.vK || bV.gm(ef, eh) || 6 === zm && aV.gm(ef, eh) || bU.gm(ef, eh) || aP.gm(ef, eh)
	}, this.a0H = function(ef, eh) {
		!aP.a7i && aU.a0H(ef, eh, !0) || aP.a0H(ef, eh)
	}, this.click = function(ef, eh) {
		aP.a0g()
	}, this.a0K = function(ef, eh, deltaY) {}, this.aCx = function() {
		aU.a7p(), bb.dc = !0
	}, this.ta = function() {
		8 !== zm && 10 !== zm && (tb.imageSmoothingEnabled = !0, this.wu(), 0 !== zm && (aP.ta(), aK.ta(), this.aCy(), bU.ta()), 0 !== zm && 6 === zm && aV.ta(), bV.ta(), n.ta())
	}, this.wu = function() {
		var aD0, aCz;
		if (__fx.makeMainMenuTransparent) tb.clearRect(0, 0, at.a1, at.jF);
		else bO.vK ? (aCz = at.a1 / bO.ej, aD0 = at.jF / bO.ek, tb.setTransform(aCz = aD0 < aCz ? aCz : aD0, 0, 0, aCz, Math.floor((at.a1 - aCz * bO.ej) / 2), Math.floor((at.jF - aCz * bO.ek) / 2)), tb.drawImage(bO.vM, 0, 0), tb.setTransform(1,
			0, 0, 1, 0, 0), tb.fillStyle = b7.mY) : tb.fillStyle = b7.mU, tb.fillRect(0, 0, at.a1, at.jF)
	}, this.aCy = function() {
		var eh = Math.floor(.3 * at.jF),
			canvas = aX.aD1("territorial.io"),
			hS = (hS = 1.75 * at.jF / canvas.width) * canvas.width < .98 * at.a1 ? .98 * at.a1 / canvas.width : hS,
			ef = (tb.globalAlpha = .15, tb.imageSmoothingEnabled = !1, Math.floor(.5 * (at.a1 - hS * canvas.width))),
			ef = Math.floor(ef / hS),
			eh = Math.floor(eh - .5 * canvas.height * hS),
			eh = Math.floor(eh / hS);
		tb.setTransform(hS, 0, 0, hS, ef, eh), tb.drawImage(canvas, ef, eh), tb.setTransform(1, 0, 0, 1, 0, 0), tb.globalAlpha = 1, tb.imageSmoothingEnabled = !0
	}
}

function ck() {
	this.aBG = 0;
	var aD3, aD4, aD5, aD6, aD7, aD8 = this.aD2 = 0;

	function aDC() {
		aD6 = aD7 = null, aD8 = 0
	}
	this.dU = function(qc, aBD, aBE) {
		n.r(), bk.a07(), aW.setState(10), aD6 = qc, aD7 = aBD, aD8 = aBE, this.aBG = qc.aBG, this.aD2 = aBE, aD3 = 0, aD4 = bb.lt + 4500, aw.s.zz > aw.s.aD9 && (qc.a00 += aw.s.aD9), aw.s.a00 = qc.a00, aw.s.zz === qc.a00 ? (console.log(
			"direct pass"), aD5 = 0) : (console.log("delayed pass"), aw.s.close(aw.s.zz, 3247), aD5 = 2, aw.s.aCi(qc.a00, 5) && aw.nu.aDA()), tb.imageSmoothingEnabled = !0, aW.wu();
		aBD = aX.aD1("loading"), aBE = (u.v.rB() ? .396 : .25) * at.pY / aBD.width;
		tb.setTransform(aBE, 0, 0, aBE, Math.floor((at.a1 - aBE * aBD.width) / 2), Math.floor((at.jF - aBE * aBD.height) / 2)), tb.imageSmoothingEnabled = !1, tb.drawImage(aBD, 0, 0), tb.setTransform(1, 0, 0, 1, 0, 0)
	}, this.lK = function() {
		0 < aD5 && bb.lt > aD4 && (aD5--, aD4 += 4500, 0 === bb.aDE) && 0 === bb.jj() && (0 === aD5 && aw.s.a00 < aw.s.aDF && (aw.s.a00 += aw.s.aD9), aw.s.aCi(aw.s.a00, 5))
	}, this.aDG = function() {
		return 10 === aW.zu() && (bk.aAl.aBH(aD6, aD7, aD8), aDC(), !0)
	}, this.aDH = function() {
		10 === aW.zu() && 2 <= ++aD3 && (bk.aAl.aBH(aD6, aD7, aD8), aDC())
	}
}

function cM() {
	var aDJ, canvas, z7, aDK;

	function aDQ(e0, name, aDR, pD) {
		z7[e0] = name, canvas[e0] = new Image, canvas[e0].onload = function() {
			! function(e0, aDR) {
				var a2X, a2Y = null;
				7 === aDR ? a2X = b6.a13.a2a : 8 === aDR ? (a2X = b6.a13.a2d, a2Y = .1) : 3 === aDR ? (a2X = b6.a13.a2b, a2Y = .06) : 5 === aDR ? a2X = b6.a13.a2e : 6 === aDR ? a2X = b6.a13.a2Z : 4 === aDR && (a2X = b6.a13.a2f);
				canvas[e0] = b6.a13.a2W(canvas[e0], a2X, a2Y)
			}(e0, aDR), aDT()
		}, canvas[e0].onerror = function(e) {
			console.error("Error loading image at index", e0, "Error:", e), aDT()
		}, canvas[e0].src = "data:image/png;base64," + pD
	}

	function aDT() {
		aDJ--, aDN()
	}

	function aDN() {
		0 === aDJ && (aDJ = -1, aDP(), bb.dc = !0, canvas[7] = aDK, canvas[8] = aDK, canvas[9] = aDK, canvas[10] = aDK, 5 === n.rw) && n.aDV().aDW.resize()
	}

	function aDP() {
		aH.a3j(), bU.aAd([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== u.id, 1 !== u.id, !0, !0, !0]), af.vP = new xI, af.vP.dU(), aq.dV()
	}
	this.dU = function() {
		if (void 0 === canvas) {
			aDJ = 23, canvas = new Array(aDJ), z7 = new Array(aDJ), (aDK = document.createElement("canvas")).width = 1;
			for (var a7 = aDJ - (aDK.height = 1); 0 <= a7; a7--) canvas[a7] = aDK;
			aDP(), aDQ(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aDQ(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aDQ(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aDQ(3, "orders", 6,
					"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"
					), aDQ(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), aDQ(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aDQ(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), aDQ(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aDQ(8,
					"googleplay", 3,
					"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"
					), aDQ(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aDQ(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aDQ(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aDQ(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aDQ(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aDQ(14, "bestPlayer", 5,
					"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"
					), aDQ(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aDQ(16, "apple", 3,
					"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"
					), aDQ(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aDQ(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aDQ(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aDQ(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aDQ(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aDQ(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(e0) {
		return canvas[e0]
	}, this.aD1 = function(name) {
		for (var a7 = z7.length - 1; 0 <= a7; a7--)
			if (z7[a7] === name) return canvas[a7];
		return aDK
	}, this.sO = function() {
		return aDJ <= 0
	}, this.aDM = function() {
		aDJ = 0, aDN()
	}
}

function cN() {
	var aDZ, aDa, aDb, aDc, aDd, aDe, aDf, aDg, aDh, aDi, aDX = [
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
		aDY = [
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

	function aDo(j2, mL) {
		for (var a7 = j2; a7 < mL; a7++) aDZ[a7] = 4 * bH.dl(64 * au.random(), au.value(100)), aDa[a7] = 4 * bH.dl(64 * au.random(), au.value(100)), aDb[a7] = 4 * bH.dl(64 * au.random(), au.value(100))
	}

	function aDn(j2, mL) {
		for (var colorsData = a9.data.colorsData, a7 = j2; a7 < mL; a7++) {
			var f0 = colorsData[a7];
			aDZ[a7] = 4 * (f0 >> 12), aDa[a7] = 4 * (f0 >> 6 & 63), aDb[a7] = 4 * (63 & f0)
		}
	}

	function aDz(eC, aE1) {
		aA5[eC] = 0, aA5[eC + 1] = 0, aA5[eC + 2] = aE1, aA5[eC + 3] = 0, aE2(eC)
	}

	function aE2(eC) {
		var ef;
		bX.mT || (ef = aY.wv(eC), eC = aY.ww(eC), bX.mT = ef >= bW.aA4[0] && ef <= bW.aA4[2] && eC >= bW.aA4[1] && eC <= bW.aA4[3])
	}
	this.ea = new Int32Array(4), this.dV = function() {
		var ea = this.ea;
		ea[0] = -4 * bO.ej, ea[1] = 4, ea[2] = -ea[0], ea[3] = -ea[1]
	}, this.dU = function() {
		if (aDZ = new Uint8Array(a9.eV), aDa = new Uint8Array(a9.eV), aDb = new Uint8Array(a9.eV), aDc = new Uint8Array(a9.eV), aDd = new Uint8Array(a9.eV), aDe = new Uint8Array(a9.eV), aDf = new Uint8Array(a9.eV), aDg = new Uint8Array(a9.eV),
			aDh = new Uint8Array(a9.eV), aDi = new Uint8Array(a9.eV), this.a6i = new Uint8Array(a9.eV), a9.hL)
			for (var a7 = a9.eV - 1; 0 <= a7; a7--) {
				var et = bc.k8[bc.eW[a7]],
					kU = bH.dl((aDY[et][3] + 1) * au.random(), au.value(100));
				aDZ[a7] = aDX[et][0] + kU * aDY[et][0], aDa[a7] = aDX[et][1] + kU * aDY[et][1], aDb[a7] = aDX[et][2] + kU * aDY[et][2]
			} else 0 === a9.data.colorsType ? a9.data.selectableColor ? (aDn(0, a9.jm), aDo(a9.jm, a9.eV)) : aDo(0, a9.eV) : aDn(0, a9.eV);
		! function() {
			var a7, eb;
			for (a7 = a9.eV - 1; 0 <= a7; a7--) eb = bH.dl(aDZ[a7] + aDa[a7] + aDb[a7], 3), aDZ[a7] += aDu(eb - aDZ[a7], 2), aDa[a7] += aDu(eb - aDa[a7], 2), aDb[a7] += aDu(eb - aDb[a7], 2), aDZ[a7] -= aDZ[a7] % 4, aDa[a7] -= aDa[a7] % 4, aDb[
				a7] -= aDb[a7] % 4
		}(),
		function() {
			for (var a7 = a9.eV - 1; 0 <= a7; a7--) aDZ[a7] += bH.dl(a7, 128), aDa[a7] += bH.dl(a7 % 128, 32), aDb[a7] += bH.dl(a7 % 32, 8), aDc[a7] = a7 % 8
		}(), this.aDr(),
			function() {
				for (var a7 = a9.eV - 1; 0 <= a7; a7--) aDd[a7] = aDZ[a7] < 32 ? aDZ[a7] + 32 : aDZ[a7] - 32, aDe[a7] = aDa[a7] < 32 ? aDa[a7] + 32 : aDa[a7] - 32, aDf[a7] = aDb[a7] < 32 ? aDb[a7] + 32 : aDb[a7] - 32
			}(),
			function() {
				for (var a7 = a9.eV - 1; 0 <= a7; a7--) aDg[a7] = 235 < aDZ[a7] ? aDZ[a7] - 20 : aDZ[a7] + 20, aDh[a7] = 235 < aDa[a7] ? aDa[a7] - 20 : aDa[a7] + 20, aDi[a7] = 235 < aDb[a7] ? aDb[a7] - 20 : aDb[a7] + 20
			}()
	}, this.a5h = function(player) {
		var g = bK.f8;
		return g[0] = aDZ[player], g[1] = aDa[player], g[2] = aDb[player], g
	}, this.aDr = function() {
		for (var a7 = a9.eV - 1; 0 <= a7; a7--) this.a6i[a7] = aDZ[a7] + aDa[a7] + aDb[a7] < 280 ? 0 : 1
	}, this.wv = function(eC) {
		return bH.dl(eC, 4) % bO.ej
	}, this.ww = function(eC) {
		return bH.dl(eC, 4 * bO.ej)
	}, this.wV = function(ef, eh) {
		return Math.floor(4 * (eh * bO.ej + ef))
	}, this.wl = function(eC) {
		var ea = this.ea;
		return this.aDv(eC + ea[0]) || this.aDv(eC + ea[1]) || this.aDv(eC + ea[2]) || this.aDv(eC + ea[3])
	}, this.ex = function(eC) {
		var ea = this.ea;
		return this.ed(eC + ea[0]) || this.ed(eC + ea[1]) || this.ed(eC + ea[2]) || this.ed(eC + ea[3])
	}, this.wj = function(eC, player) {
		var ea = this.ea;
		return this.aDw(eC + ea[0], player) || this.aDw(eC + ea[1], player) || this.aDw(eC + ea[2], player) || this.aDw(eC + ea[3], player)
	}, this.g8 = function(eC) {
		return 208 <= aA5[eC + 3]
	}, this.wq = function(player, eC) {
		return this.g8(eC) && this.aDx(player, eC)
	}, this.aDx = function(player, eC) {
		return player === this.eQ(eC)
	}, this.aDy = function(eC) {
		return 208 <= aA5[eC + 3] && aA5[eC + 3] < 224
	}, this.iy = function(eC) {
		return 224 <= aA5[eC + 3] && aA5[eC + 3] < 248
	}, this.wk = function(eC) {
		for (var ea = this.ea, a7 = 3; 0 <= a7; a7--)
			if (this.h1(eC + ea[a7])) return !0;
		return !1
	}, this.eT = function(eC) {
		return this.g8(eC) || this.eP(eC)
	}, this.h1 = function(eC) {
		return 0 === aA5[eC + 3] && 2 === aA5[eC + 2]
	}, this.eP = function(eC) {
		return 0 === aA5[eC + 3] && 1 === aA5[eC + 2]
	}, this.vY = function(eC) {
		return 0 === aA5[eC + 3] && 3 === aA5[eC + 2]
	}, this.ed = function(eC) {
		return 0 === aA5[eC + 3] && 5 <= aA5[eC + 2]
	}, this.aDv = function(eC) {
		return 0 === aA5[eC + 3] && 3 <= aA5[eC + 2]
	}, this.eG = function(eC) {
		return aA5[eC + 2] - 5
	}, this.aDw = function(eC, player) {
		return this.eP(eC) || this.g8(eC) && player !== this.eQ(eC)
	}, this.eQ = function(eC) {
		return aA5[eC] % 4 * 128 + aA5[eC + 1] % 4 * 32 + aA5[eC + 2] % 4 * 8 + aA5[eC + 3] % 8
	}, this.wr = function(eC) {
		aDz(eC, 1)
	}, this.aE0 = function(eC) {
		aDz(eC, 2)
	}, this.wW = function(eC, player) {
		aA5[eC] = aDZ[player], aA5[eC + 1] = aDa[player], aA5[eC + 2] = aDb[player], aA5[eC + 3] = 208 + aDc[player], aE2(eC)
	}, this.g3 = function(eC, player) {
		aA5[eC] = aDd[player], aA5[eC + 1] = aDe[player], aA5[eC + 2] = aDf[player], aA5[eC + 3] = 224 + aDc[player], aE2(eC)
	}, this.iz = function(eC, player) {
		aA5[eC] = aDg[player], aA5[eC + 1] = aDh[player], aA5[eC + 2] = aDi[player], aA5[eC + 3] = 248 + aDc[player], aE2(eC)
	}
}

function cl() {
	var e0 = 0,
		aE3 = new Uint16Array(32);

	function remove(a3n) {
		var a7;
		for (e0 -= 2, a7 = a3n; a7 < e0; a7 += 2) aE3[a7] = aE3[a7 + 2], aE3[a7 + 1] = aE3[a7 + 3]
	}
	this.dU = function() {
		e0 = 0
	}, this.ie = function() {
		var a7, iw, i5;
		if (0 !== e0)
			if (0 === ac.la[a9.eI] || aZ.aE4(a9.eI) === aZ.fe(a9.eI)) e0 = 0;
			else
				for (a7 = e0 - 2; 0 <= a7; a7 -= 2)(iw = aE3[a7]) < a9.eV && 0 === ac.la[iw] ? remove(a7) : (i5 = aE3[a7 + 1], (iw >= a9.eV && aE5(a9.eI) || iw < a9.eV && aE6(a9.eI, iw)) && (b4.gv.h6(i5, iw), remove(a7)))
	}, this.h8 = function(iw, i5) {
		! function(iw, i5) {
			var a7;
			for (a7 = 0; a7 < e0; a7 += 2)
				if (aE3[a7] === iw) return aE3[a7 + 1] = Math.min(aE3[a7 + 1] + i5, 1023), 1;
			return
		}(iw, i5) && 32 !== e0 && (aE3[e0] = iw, aE3[e0 + 1] = i5, e0 += 2)
	}
}

function cO() {
	function aED(player) {
		var dk;
		b6.fu.a29(player) && (dk = ac.ga[player] - ac.a2D[player] + aZ.aEF(player), bZ.fy(player, Math.abs(dk), dk < 0 ? 18 : 12)), ac.ga[player] = 0, ac.a2D[player] = 0
	}

	function aEM() {
		aT.show(!1, !1, !1, !0), aS.a9H(), bN.yW.zG()
	}

	function aEA(player, aEL) {
		for (var a7 = aEL.length - 1; 0 <= a7; a7--) aZ.aEO(aEL[a7], player)
	}

	function aEC(player) {
		for (var iK = ac.iK, iL = ac.iL, iM = ac.iM, iN = ac.iN, m3 = iK[player], m4 = iM[player], ej = bO.ej, gM = ac.gM, ef = iL[player]; m3 <= ef; ef--)
			for (var eh = iN[player]; m4 <= eh; eh--) {
				var g6 = 4 * (eh * ej + ef);
				aY.wq(player, g6) && (aY.wr(g6), gM[player]--)
			}
		iL[player] = iN[player] = 0, iK[player] = iM[player] = Math.max(ej, bO.ek)
	}
	this.dd = function(g6) {
		var player, dk = ac.gM[g6];
		bJ.s.oj[g6] ? dk && (aEA(player = g6, aZ.aEB(player)), aEC(player), aB.fw(player), aZ.clear(player), aED(player), function(player) {
			ac.wR[player] = 0, ac.g0[player] = [], ac.gE[player] = [], ac.gF[player] = [], ac.ey[player] = []
		}(player)) : !dk && ac.g0[g6].length || this.aE9(g6)
	}, this.aE9 = function(player) {
		! function(player) {
			b6.fu.j9(player) || (ac.zJ[player] = be.zZ.aEK(), a9.yn++);
			var aEL = aZ.aEB(player);
			0 === aEL.length ? b6.fu.a28(player) && aEM() : (aEA(player, aEL), function(player, aEL) {
				var aEQ = aEL[function(aEL) {
					var a7, e0 = 0;
					for (a7 = aEL.length - 1; 1 <= a7; a7--) ac.gM[aEL[a7]] > ac.gM[aEL[e0]] && (e0 = a7);
					return e0
				}(aEL)];
				9 === a9.k3 && 1 === bc.eW[player] && au.je(8) && av.aER(aEQ);
				if (b6.fu.a28(player)) aEM(), aJ.yx(aEQ, 1);
				else {
					for (var a7 = aEL.length - 1; 0 <= a7; a7--)
						if (b6.fu.a29(aEL[a7]) && (bZ.lW[4 - b6.fu.j9(player)]++, b6.fu.a28(aEL[a7]))) return aJ.yx(player, 0);
					b6.fu.j9(player) || aJ.a50(0, player, aEQ)
				}
			}(player, aEL))
		}(player), aEC(player), aED(player),
			function(player) {
				ac.la[player] = 0, ac.g0[player] = null, ac.gE[player] = null, ac.gF[player] = null, ac.ey[player] = null
			}(player), aB.fw(player), aZ.clear(player), bJ.aEI.aEJ(player)
	}
}

function cq() {
	var input;

	function aES(e) {
		(e = e.target.files) && 0 < e.length && b2.aEV(e[0])
	}

	function aEZ(e) {
		var et = new Image;
		et.onload = aEa, et.src = e.target.result
	}

	function aEa(e) {
		var e = e.target,
			canvas = document.createElement("canvas");
		canvas.width = e.width, canvas.height = e.height;
		canvas.getContext("2d").drawImage(e, 0, 0);
		var e = canvas.width,
			jF = canvas.height;
		e > bO.aEc || jF > bO.aEc || e < 10 || jF < 10 ? (e = "Image dimensions must be between 10 and " + bO.aEc + ".", u.uA ? u.uA.showToast(e) : alert(e)) : 20 === n.rw && n.aDV().aEa(canvas)
	}
	this.dU = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = aES
	}, this.a07 = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.aET = function() {
		input.click()
	}, this.aEV = function(aEW) {
		var g = aEW.name.split("."),
			g = g[g.length - 1].toLowerCase();
		"gif" !== g && "jpg" !== g && "jpeg" !== g && "png" !== g || ((g = new FileReader).onload = aEZ, g.readAsDataURL(aEW))
	}
}

function co() {
	this.aEe = null, this.dU = function() {
		10 !== a9.k3 ? this.aEe = null : this.aEe = new Uint32Array(a9.eV)
	}, this.ie = function() {
		10 === a9.k3 && this.qj()
	}, this.qj = function() {
		for (var g6, target, a9S, aEe = this.aEe, yZ = ah.jo, a2E = ac.ga, a7 = ah.jn - 1; 0 <= a7; a7--)(g6 = yZ[a7]) >= a9.jm || (target = Math.max(bH.dl(a2E[g6], 4), 2048), a9S = Math.max(aa.a9T(g6), 100), aEe[g6] += bH.dl(a9S * target, 1e4),
			aEe[g6] > target && (aEe[g6] = target))
	}, this.a2K = function(player, hD) {
		return hD > this.aEe[player] ? (hD = this.aEe[player], this.aEe[player] = 0) : this.aEe[player] -= hD, hD
	}
}

function dQ() {
	function aEg(e) {
		var g, e = e.target.files;
		e && 0 < e.length && (e = e[0], "json" === (g = e.name.split("."))[g.length - 1].toLowerCase()) && ((g = new FileReader).onload = aEo, g.readAsText(e))
	}

	function aEo(e) {
		var aEs;
		a9.yl || (e = JSON.parse(e.target.result), aEs = a9.data = new a39, aEt(e, aEs, "mapType", 0, 2), aEt(e, aEs, "mapProceduralIndex", 0, 255), aEt(e, aEs, "mapRealisticIndex", 0, 255), aEt(e, aEs, "mapSeed", 0, 16383), function(aEr, aEs, g7,
				max) {
				aEr = aEr[g7];
				aEs[g7] = aEz(aEr) ? aEr.slice(0, max) : aEs[g7]
			}(e, aEs, "mapName", 20), function(aEr, aEs, g7) {
				var aEb;
				2 === aEs.mapType && (!aEz(aEr = aEr[g7]) || aEr.length <= 20 ? aEs.mapType = 0 : ((aEb = new Image).onload = function() {
					b5.aF0.aF1(aEb, 1), aEb.onload = null, aEb = null
				}, aEb.src = aEr))
			}(e, aEs, "canvas"), aEt(e, aEs, "passableWater", 0, 1), aEt(e, aEs, "passableMountains", 0, 1), aEt(e, aEs, "playerCount", 1, 512), aEt(e, aEs, "humanCount", 1, 1), aEt(e, aEs, "selectedPlayer", 0, 0), aEt(e, aEs, "gameMode", 0, 1),
			aEt(e, aEs, "playerMode", 0, 0), aEt(e, aEs, "battleRoyaleMode", 0, 0), aEt(e, aEs, "numberTeams", 0, 8), aEt(e, aEs, "isZombieMode", 0, 0), aEt(e, aEs, "isContest", 0, 0), aEt(e, aEs, "isReplay", 0, 0), aEw(e, aEs, "elo", 16, 2,
				16383), aEt(e, aEs, "colorsType", 0, 1), aEt(e, aEs, "colorsPersonalized", 0, 1), aEw(e, aEs, "colorsData", 32, 512, 262143), aEt(e, aEs, "selectableColor", 0, 1), aEw(e, aEs, "teamPlayerCount", 16, 9, 512), aEt(e, aEs,
				"neutralBots", 0, 1), aEt(e, aEs, "botDifficultyType", 0, 3), aEt(e, aEs, "botDifficultyValue", 0, 15), aEw(e, aEs, "botDifficultyTeam", 8, 9, 15), aEw(e, aEs, "botDifficultyData", 8, 512, 15), aEt(e, aEs, "spawningType", 0, 2),
			aEt(e, aEs, "spawningSeed", 0, 16383), aEw(e, aEs, "spawningData", 16, 1024, 4095), aEt(e, aEs, "selectableSpawn", 0, 1), aEt(e, aEs, "playerNamesType", 0, 2),
			function(aEr, aEs, g7, size, max) {
				var a1O = aEr[g7];
				if (Array.isArray(a1O)) {
					for (var a1P = new Array(size), eY = Math.min(a1O.length, size), a7 = 0; a7 < eY; a7++) a1P[a7] = aEz(a1O[a7]) ? a1O[a7].slice(0, max) : "";
					aEs[g7] = a1P
				}
			}(e, aEs, "playerNamesData", 512, 20), aEt(e, aEs, "selectableName", 0, 1), aEt(e, aEs, "aIncomeType", 0, 2), aEt(e, aEs, "aIncomeValue", 0, 255), aEw(e, aEs, "aIncomeData", 8, 512, 255), aEt(e, aEs, "tIncomeType", 0, 2), aEt(e, aEs,
				"tIncomeValue", 0, 255), aEw(e, aEs, "tIncomeData", 8, 512, 255), aEt(e, aEs, "iIncomeType", 0, 2), aEt(e, aEs, "iIncomeValue", 0, 255), aEw(e, aEs, "iIncomeData", 8, 512, 255), aEt(e, aEs, "sResourcesType", 0, 2), aEt(e, aEs,
				"sResourcesValue", 0, 2047), aEw(e, aEs, "sResourcesData", 16, 512, 2047), n.r(), n.s.aEq[0] = 0, n.o(19))
	}

	function aEt(aEr, aEs, g7, min, max) {
		aEr = aEr[g7];
		aEs[g7] = "number" == typeof aEr && min <= aEr && aEr <= max ? Math.floor(aEr) : aEs[g7]
	}

	function aEz(pD) {
		return "string" == typeof pD
	}

	function aEw(aEr, aEs, g7, aF2, size, max) {
		var a1O = aEr[g7];
		if (Array.isArray(a1O)) {
			for (var a1P = new(8 === aF2 ? Uint8Array : 16 === aF2 ? Uint16Array : Uint32Array)(size), eY = Math.min(a1O.length, size), a7 = 0; a7 < eY; a7++) a1P[a7] = bH.p4(a1O[a7], 0, max);
			aEs[g7] = a1P
		}
	}
	this.aEf = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aEg, input.click()
	}, this.aEh = function() {
		for (var aEk, aAa, a60 = a9.data, keys = Object.keys(a60), aEi = {}, a7 = 0; a7 < keys.length; a7++) {
			var key = keys[a7];
			a60[key] instanceof Uint8Array || a60[key] instanceof Uint16Array || a60[key] instanceof Uint32Array ? aEi[key] = Array.from(a60[key]) : aEi[key] = a60[key]
		}
		aEi.canvas = 2 === aEi.mapType && aEi.canvas ? aEi.canvas.toDataURL() : null, aEk = aEi, aEk = JSON.stringify(aEk, null, 2), aEk = new Blob([aEk], {
			type: "application/json"
		}), (aAa = document.createElement("a")).href = URL.createObjectURL(aEk), aAa.download = "tt_scenario.json", aAa.click()
	}
}

function cR() {
	var aF3, aF4, size, iw, hD, id, aF5;

	function aF6(player) {
		return player < a9.jm ? aF3 * player : aF3 * a9.jm + aF4 * (player - a9.jm)
	}
	this.dU = function() {
		aF3 = a9.jm < 16 ? 12 : 8, aF4 = 4;
		var eY = aF6(a9.eV);
		size = new Uint8Array(a9.eV), iw = new Uint16Array(eY), hD = new Uint32Array(eY), id = new Uint16Array(eY), aF5 = new Uint8Array(eY)
	}, this.p3 = function(a6D, aF7) {
		var aF8 = this.gb(a6D, aF7),
			aF7 = (this.gZ(a6D, aF7, 0), b6.fu.fx(a6D, aF8));
		bZ.fy(a6D, aF8 - aF7, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.aEO = function(player, aF7) {
		var aFB, aF7 = function(player, aF7) {
			var a7, kU = aF6(player);
			for (a7 = size[player] - 1; 0 <= a7; a7--)
				if (0 === id[kU + a7] && iw[kU + a7] === aF7) return a7;
			return size[player]
		}(player, aF7);
		aF7 !== size[player] && (aFB = hD[aF6(player) + aF7], this.fz(player, aF7), this.it(player, aFB, a9.eV))
	}, this.j7 = function(player, aF7) {
		for (var kU = aF6(player), a7 = size[player] - 1; 0 <= a7; a7--)
			if (0 === id[kU + a7] && iw[kU + a7] === aF7) return !0;
		return !1
	}, this.jQ = function(player) {
		return player < a9.jm ? size[player] < aF3 : size[player] < aF4
	}, this.fe = function(player) {
		return size[player]
	}, this.fk = function(player, a7) {
		return iw[aF6(player) + a7]
	}, this.ff = function(player, a7) {
		return id[aF6(player) + a7]
	}, this.aFC = function(player, aFD) {
		for (var kU = aF6(player), a7 = size[player] - 1; 0 <= a7; a7--)
			if (id[kU + a7] === aFD) return a7;
		return -1
	}, this.fl = function(player, a7) {
		return hD[aF6(player) + a7]
	}, this.gb = function(player, aF7) {
		for (var kU = aF6(player), a7 = size[player] - 1; 0 <= a7; a7--)
			if (0 === id[kU + a7] && iw[kU + a7] === aF7) return hD[kU + a7];
		return 0
	}, this.aEF = function(player) {
		for (var kU = aF6(player), f0 = 0, a7 = size[player] - 1; 0 <= a7; a7--) f0 += hD[kU + a7];
		return f0
	}, this.aFE = function(player) {
		for (var kU = aF6(player), f0 = 0, a7 = size[player] - 1; 0 <= a7; a7--) 0 === id[kU + a7] && (f0 += hD[kU + a7]);
		return f0
	}, this.aE4 = function(player) {
		for (var kU = aF6(player), g1 = 0, a7 = size[player] - 1; 0 <= a7; a7--) 0 < id[kU + a7] && g1++;
		return g1
	}, this.gZ = function(player, aF7, aFB) {
		for (var kU = aF6(player), a7 = size[player] - 1; 0 <= a7; a7--) 0 === id[kU + a7] && iw[kU + a7] === aF7 && (hD[kU + a7] = aFB)
	}, this.gK = function(player, a7, aFB) {
		hD[aF6(player) + a7] = Math.max(aFB, 0)
	}, this.gL = function(player, a7) {
		aF5[aF6(player) + a7] = 0
	}, this.fm = function(player, a7) {
		return aF5[aF6(player) + a7]
	}, this.it = function(player, aFB, aF7) {
		b6.fu.a29(aF7) && bZ.lW[6 - b6.fu.j9(player)]++;
		for (var kU = aF6(player), a7 = size[player] - 1; 0 <= a7; a7--)
			if (0 === id[kU + a7] && iw[kU + a7] === aF7) return hD[kU + a7] += aFB, void(hD[kU + a7] = hD[kU + a7] > a9.a2G ? a9.a2G : hD[kU + a7]);
		iw[kU + size[player]] = aF7, hD[kU + size[player]] = aFB, id[kU + size[player]] = 0, aF5[kU + size[player]] = 1, size[player]++, player < a9.jm && (aF7 === a9.eI ? aJ.yx(player, 5) : player === a9.eI && ab.a52(aF7))
	}, this.aFF = function(player, aFB, aFD) {
		var kU = aF6(player);
		iw[kU + size[player]] = 0, hD[kU + size[player]] = aFB, id[kU + size[player]] = aFD, aF5[kU + size[player]] = 0, size[player]++
	}, this.fz = function(player, e0) {
		var er, kU;
		if (0 !== size[player])
			for (kU = aF6(player), size[player]--, er = e0; er < size[player]; er++) iw[kU + er] = iw[kU + er + 1], hD[kU + er] = hD[kU + er + 1], id[kU + er] = id[kU + er + 1], aF5[kU + er] = aF5[kU + er + 1]
	}, this.aEB = function(player) {
		for (var er, kU, aEL = [], a7 = ah.jn - 1; 0 <= a7; a7--)
			for (kU = aF6(ah.jo[a7]), er = size[ah.jo[a7]] - 1; 0 <= er; er--)
				if (0 === id[kU + er] && iw[kU + er] === player) {
					aEL.push(ah.jo[a7]);
					break
				} return aEL
	}
}

function cS() {
	var aFG;

	function aFI(player) {
		var dz, jR;
		return b6.fu.j9(player) && player < a9.jm ? 0 : (dz = aFG[bH.dl((a9.eV - 1) * ac.gM[player], a9.jW)], bb.jj() < 1920 && (dz = Math.max(bH.dl(100 * (13440 - 6 * bb.jj()), 1920), dz)), jR = aa.jS(player), ac.ga[player] > jR && (dz -= bH.dl(2 *
			dz * (ac.ga[player] - jR), jR)), Math.min(Math.max(dz, 0), 700))
	}

	function aFU(mF) {
		for (var gM = ac.gM, jo = ah.jo, a7 = ah.jn - 1; 0 <= a7; a7--) {
			var g6 = jo[a7];
			b6.fu.fx(g6, bH.dl(mF * gM[g6], 32))
		}
	}

	function aFR() {
		var vQ = a9.eI;
		bK.f5[0] = ac.ga[vQ] - ac.a2D[vQ]
	}

	function aFT(e0) {
		var vQ = a9.eI;
		bZ.lW[e0] += ac.ga[vQ] - ac.a2D[vQ] - bK.f5[0]
	}
	this.db = function() {
		for (var eY = a9.eV, a7 = (aFG = new Uint16Array(eY), 0); a7 < eY; a7++) aFG[a7] = 100 + aFH(bH.dl(25600 * a7, eY - 4), 9)
	}, this.dU = function() {
		0 === a9.data.iIncomeType ? this.a9T = aFI : 1 === a9.data.iIncomeType ? this.a9T = function(player) {
			return bH.dl(a9.data.iIncomeValue * aFI(player), 64)
		} : this.a9T = function(player) {
			return bH.dl(a9.data.iIncomeData[player] * aFI(player), 64)
		}
	}, this.ie = function() {
		if (bb.jj() % 10 == 9 && (function() {
				aFR();
				for (var jo = ah.jo, ga = ac.ga, a7 = ah.jn - 1; 0 <= a7; a7--) {
					var g6 = jo[a7],
						aFS = bH.dl(aa.a9T(g6) * ga[g6], 1e4);
					b6.fu.fx(g6, Math.max(aFS, 1))
				}
				aFT(9)
			}(), function() {
				if (0 !== a9.data.aIncomeType) {
					if (aFR(), 1 === a9.data.aIncomeType)
						for (var gM = ac.gM, jo = ah.jo, mF = a9.data.aIncomeValue, a7 = ah.jn - 1; 0 <= a7; a7--) {
							var g6 = jo[a7];
							b6.fu.fx(g6, bH.dl(mF * gM[g6], 128))
						} else 2 === a9.data.aIncomeType && function() {
							for (var gM = ac.gM, jo = ah.jo, mF = a9.data.aIncomeData, a7 = ah.jn - 1; 0 <= a7; a7--) {
								var g6 = jo[a7];
								b6.fu.fx(g6, bH.dl(mF[g6] * gM[g6], 128))
							}
						}();
					aFT(18)
				}
			}(), bb.jj() % 100 == 99)) {
			if (aFR(), 0 === a9.data.tIncomeType) aFU(32);
			else if (1 === a9.data.tIncomeType) aFU(a9.data.tIncomeValue);
			else
				for (var gM = ac.gM, jo = ah.jo, mF = a9.data.tIncomeData, a7 = ah.jn - 1; 0 <= a7; a7--) {
					var g6 = jo[a7];
					b6.fu.fx(g6, bH.dl(mF[g6] * gM[g6], 32))
				}
			aFT(8)
		}
	}, this.jS = function(player) {
		return Math.min(100 * ac.gM[player], a9.a35)
	}, this.nx = function(player, ny) {
		b6.fu.fx(ny, bK.f6[0]), bZ.oK(player, ny), ab.aFK(player, bK.f6[0] + bK.f6[1]), ab.oL(ny, bK.f6[0]), b6.fu.ot(player)
	}, this.aFL = function() {
		for (var eY = ah.jn, yZ = ah.jo, kU = 0, a2E = ac.ga, a7 = 0; a7 < eY; a7++) kU += a2E[yZ[a7]];
		return kU
	}, this.aFM = function(aFN) {
		for (var g6, eY = ah.jn, yZ = ah.jo, kU = 0, a2E = ac.ga, eW = bc.eW, a7 = 0; a7 < eY; a7++) eW[g6 = yZ[a7]] === aFN && (kU += a2E[g6]);
		return kU
	}
}

function cU() {
	var aFY, aFZ, aFa, aFb, aFc, aFd, aFe, aFf, aFg, aFh, aFi, aFj, aFk, aFl, aFm, aFn, aFo, aFp, aFr, aFs, aAU, aFt, aFu, aG1, aG2, aFq = null,
		aFw = 0,
		aFx = !1,
		aFy = new Float32Array(4),
		aFz = 0,
		aG0 = !0,
		a8e = 400,
		aG3 = 0;

	function pa() {
		aFg = Math.floor(+at.pY), aFh = Math.floor(.5 * aFg)
	}

	function aG4() {
		var a7, aG9;
		for (tb.font = b6.pW.rY(1, 100 * aFi), aG9 = 80 / Math.floor(tb.measureText(b6.zM.y3(a9.a2G)).width), tb.font = b6.pW.rY(1, 100), a7 = a9.eV - 1; 0 <= a7; a7--) aFf[a7] = 100 / Math.floor(tb.measureText(ac.zK[a7]).width), aFe[a7] = Math.min(
			aG9, aFf[a7])
	}

	function aGA(a7) {
		return !aG3 || (a7 = ac.ga[a7]) < 1e6 ? 1 : a7 < 1e7 ? aFy[0] : aFy[Math.min(Math.floor(Math.log10(a7)) - 6, 3)]
	}

	function aG8(hT) {
		aFp = !1, aFo = 1, aFm = aFn = 0, aG0 && (b6.pW.textAlign(hT, 1), b6.pW.textBaseline(hT, 1));
		for (var aGG, aGH, a7, aGI, fontSize, aGJ, m3 = i6 / i7, m4 = i8 / i7, mG = (at.a1 + i6) / i7, mH = (at.jF + i8) / i7, aGK = 0 !== ac.la[a9.eI] && !b6.fu.j9(a9.eI), er = ah.jn - 1; 0 <= er; er--) a7 = ah.jo[er], (fontSize = Math.floor(aFl *
			i7 * aGA(a7) * aFe[a7] * aFc[a7])) < aFk || aFg <= fontSize || aFa[a7] + aFc[a7] > m3 && aFa[a7] < mG && aFb[a7] + aFd[a7] > m4 && aFb[a7] < mH && (aGG = Math.floor(at.a1 * (aFa[a7] + aFc[a7] / 2 - m3) / (mG - m3)), aGH = Math.floor(
			at.jF * (aFb[a7] + aFd[a7] / 2 - m4) / (mH - m4) - .1 * fontSize), aGI = aY.a6i[a7], hT.font = b6.pW.rY(1 === ac.a27[a7] ? 4 : 1, fontSize), hT.fillStyle = aGL(fontSize, aGI % 2), aG3 ? aGM(hT, a7, fontSize, aGG, aGH, aGI) : aGN(
			a7, fontSize, aGG, aGH, hT), aFp = !0, 0 < aAU[a7] ? function(aGG, aGH, fontSize, a7, hT) {
			0 === jX[a7] ? af.xG.xu(aFs[a7]) ? (function(aGG, aGH, fontSize, player, o8, hT) {
				for (var w0 = aGH, hS = (hT.globalAlpha = aGV(fontSize), aGA(player) * (aG3 ? aFz : aFf[player])), vz = aGG - .5 * fontSize / hS - .9 * fontSize, es = 0; es < 2; es++) hT.fillText(af.xG.xo(o8), vz, w0), vz = aGG + .5 *
					fontSize / hS + .9 * fontSize;
				hT.globalAlpha = 1
			}(aGG, aGH, fontSize, a7, aFs[a7], hT), aGP(aGG, aGH, fontSize, 0, 0, hT)) : af.xG.xw(aFs[a7]) ? (aGY(aGG, aGH, fontSize, aFs[a7], 0, hT), aGP(aGG, aGH, fontSize, 0, 1, hT)) : (aGY(aGG, aGH, fontSize, aFs[a7], 1, hT), aGP(aGG,
				aGH, fontSize, 1, 0, hT)) : aGY(aGG, aGH, fontSize, aFs[a7], 0, hT)
		}(aGG, aGH, fontSize, a7, hT) : 0 === jX[a7] && aGP(aGG, aGH, fontSize, 0, 0, hT), aGK && (0 < aAU[a7 + a9.eV] || 0 < aAU[a7 + 2 * a9.eV] || 0 < aAU[a7 + 3 * a9.eV] || 0 < aAU[a7 + 4 * a9.eV]) && function(aGG, aGH, fontSize, a7, hT) {
			var et, g1 = -1;
			for (et = 4; 1 <= et; et--) 0 < aAU[a7 + et * a9.eV] && g1++;
			for (et = 1; et < 5; et++) 0 < aAU[a7 + et * a9.eV] && (! function(aGG, aGH, fontSize, et, a7, aGT, dk, hT) {
				var a1a;
				if (1 === et) {
					a7 = aFs[a7 + a9.eV];
					if (!af.xG.xv(a7)) return function(aGG, aGH, fontSize, o8, aGT, hT) {
						hT.globalAlpha = aGV(fontSize);
						aGG -= .534 * aGT * fontSize, aGT = aGH + 1.59 * fontSize;
						hT.font = b6.pW.rY(0, .785 * fontSize), hT.fillText(af.xG.xo(o8), aGG, aGT), hT.globalAlpha = 1
					}(aGG, aGH, fontSize, a7, aGT, hT);
					a1a = af.vP.xN[a7 - 1024 + af.xG.xZ]
				} else a1a = 2 === et ? aH.a3l()[4].canvas[+(dk < 255)] : (3 === et ? aH.a3l()[5] : aH.a3l()[6]).canvas[0];
				a7 = af.vP.xO, dk = .8 * fontSize / a7, et = aGG - .5 * dk * a7 - .534 * aGT * fontSize, aGG = aGH + 1.4 * dk * a7;
				hT.setTransform(dk, 0, 0, dk, et, aGG), hT.globalAlpha = aGV(fontSize), hT.drawImage(a1a, 0, 0), hT.globalAlpha = 1, hT.setTransform(1, 0, 0, 1, 0, 0)
			}(aGG, aGH, fontSize, et, a7, g1, aAU[a7 + et * a9.eV], hT), g1 -= 2)
		}(aGG, aGH, fontSize, a7, hT), (aGJ = aFi * fontSize) < aFk || (hT.font = b6.pW.rY(1, aGJ), aGH += Math.floor(.78 * fontSize), aG3 ? aGN(a7, aGJ, aGG, aGH, hT) : aGM(hT, a7, aGJ, aGG, aGH, aGI)))
	}

	function aGN(a7, fontSize, ef, eh, hT) {
		var ___id = a7;
		var showName = a7 < a9.jm || !__fx.settings.hideBotNames;
		if (showName) hT.fillText(ac.zK[a7], ef, eh), a7 < a9.jm && 2 !== ac.a27[a7] || (a7 = fontSize / aFf[a7], hT.fillRect(ef - .5 * a7, eh + b6.pW.xp * fontSize, a7, Math.max(1, .1 * fontSize)));
		aG3 && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (hT.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			hT.fillText(__fx.utils.getDensity(___id), ef, showName ? eh + fontSize : eh)
		);
	}

	function aGM(hT, a7, fontSize, aGG, aGH, aGI) {
		var ___id = a7;
		a7 = b6.zM.y3(ac.ga[a7]);
		aGI >> 1 & 1 ? (hT.lineWidth = .05 * fontSize, hT.strokeStyle = aGL(fontSize, aGI % 2), hT.strokeText(a7, aGG, aGH)) : (1 < aGI && (hT.lineWidth = .12 * fontSize, hT.strokeStyle = aGL(fontSize, aGI), hT.strokeText(a7, aGG, aGH)), hT.fillText(
			a7, aGG, aGH));
		aG3 || __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (hT.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)), hT.fillText(__fx.utils.getDensity(___id), aGG, aGH + fontSize))
	}

	function aGP(aGG, aGH, fontSize, aGT, aGU, hT) {
		var a4L = .95 * fontSize / aFu,
			aGG = aGG - .5 * a4L * aFt + .8 * aGT * fontSize,
			aGT = aGH - 1.76 * a4L * aFu - (.35 - b6.pW.xp + .7) * aGU * fontSize;
		hT.setTransform(a4L, 0, 0, a4L, aGG, aGT), hT.globalAlpha = aGV(fontSize), hT.drawImage(aX.get(4), 0, 0), hT.globalAlpha = 1, hT.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aGY(aGG, aGH, fontSize, o8, aGT, hT) {
		var hN, vz, a4L;
		hT.globalAlpha = aGV(fontSize), af.xG.xv(o8) ? (hN = af.vP.xO, hT.setTransform(a4L = 1.1 * fontSize / hN, 0, 0, a4L, vz = aGG - .5 * a4L * hN - .8 * aGT * fontSize, a4L = aGH - 1.55 * a4L * hN), hT.drawImage(af.vP.xN[o8 - 1024 + af.xG.xZ], 0,
			0), hT.setTransform(1, 0, 0, 1, 0, 0)) : (vz = aGG - .8 * aGT * fontSize, a4L = aGH - (.35 - b6.pW.xp + 1) * fontSize, hT.fillText(af.xG.xo(o8), vz, a4L)), hT.globalAlpha = 1
	}

	function aGL(fontSize, aGI) {
		return aFh <= fontSize && fontSize < aFg ? bc.aGa[aGI] + aGV(fontSize).toFixed(3) + ")" : bc.aGb[aGI]
	}

	function aGV(fontSize) {
		return aFh <= fontSize && fontSize < aFg ? 1 - (fontSize - aFh) / (aFg - aFh) : 1
	}

	function aGk(hS, a1) {
		return 1 + Math.floor(aFj * hS * a1)
	}

	function aGh(a7) {
		for (var left = aFa[a7], er = aFa[a7] - ac.iK[a7] - 1; 0 <= er; er--)
			if (!aGl(a7, --left, aFb[a7], aFd[a7])) {
				left++;
				break
			} var right = aFa[a7];
		for (er = ac.iL[a7] - aFa[a7] - aFc[a7]; 0 <= er; er--)
			if (!aGl(a7, ++right + aFc[a7] - 1, aFb[a7], aFd[a7])) {
				right--;
				break
			} var ef = Math.floor((left + right) / 2),
			top = aFb[a7];
		for (er = aFb[a7] - ac.iM[a7] - 1; 0 <= er; er--)
			if (!aGm(a7, ef, --top, aFc[a7])) {
				top++;
				break
			} var bottom = aFb[a7];
		for (er = ac.iN[a7] - aFb[a7] - aFd[a7]; 0 <= er; er--)
			if (!aGm(a7, ef, ++bottom + aFd[a7] - 1, aFc[a7])) {
				bottom--;
				break
			} var eh = Math.floor((top + bottom) / 2);
		aGe(a7, ef, eh, aFc[a7], aFd[a7]) && (aFa[a7] = ef, aFb[a7] = eh)
	}

	function aGe(player, ef, eh, a1, jF) {
		eb = Math.floor(.2 * a1);
		for (var eb, et = ef + a1 - 1; ef <= et; et--)
			if (!aGl(player, et, eh, jF)) return;
		for (et = eh + jF - 1 - (eb = (eb = Math.floor(.25 * jF)) < 1 ? 1 : eb); eh + eb <= et; et--)
			if (!aGm(player, ef, et, a1)) return;
		return 1
	}

	function aGl(player, ef, eh, jF) {
		return aY.wq(player, 4 * (eh * bO.ej + ef)) && aY.wq(player, 4 * ((eh + jF - 1) * bO.ej + ef))
	}

	function aGm(player, ef, eh, a1) {
		return aY.wq(player, 4 * (eh * bO.ej + ef)) && aY.wq(player, 4 * (eh * bO.ej + ef + a1 - 1))
	}
	this.dU = function() {
		if (aG3 = bf.dp.data[7].value || 8 === a9.k3, a8e = 0 === (a8e = bf.dp.data[11].value) ? 280 : 1 === a8e ? 187 : 112, aFp = !1, aFl = .88, aFi = .5, aFj = 1.8, aFk = 12 - 3 * bf.dp.data[9].value, aFZ = aFY = 0, aFa = new Uint16Array(a9
				.eV), aFb = new Uint16Array(a9.eV), aFc = new Uint16Array(a9.eV), aFd = new Uint16Array(a9.eV), aFe = new Float32Array(a9.eV), aFf = new Float32Array(a9.eV), aFs = new Uint16Array(2 * a9.eV), aAU = new Uint8Array(5 * a9.eV), aG1 =
			new Uint8Array(a9.eV), aG2 = new Uint8Array(a9.eV), aG0 || (aFq = aFq || document.createElement("canvas")), pa(), aFn = aFm = 0, aFo = 1, aG3) {
			var a7, aG9;
			for (aG4(), tb.font = b6.pW.rY(1, 100), aG9 = 100 / Math.floor(tb.measureText("900 000").width), a7 = a9.eV - 1; 0 <= a7; a7--) aFe[a7] = Math.min(aG9, 2 * aFf[a7]);
			aFz = aG9, aFy[0] = 100 / (aG9 * Math.floor(tb.measureText("5 000 000").width)), aFy[1] = 100 / (aG9 * Math.floor(tb.measureText("50 000 000").width)), aFy[2] = 100 / (aG9 * Math.floor(tb.measureText("500 000 000").width)), aFy[3] =
				100 / (aG9 * Math.floor(tb.measureText("1 000 000 000").width))
		} else aG4();
		! function() {
			var a7;
			for (a7 = a9.eV - 1; 0 <= a7; a7--) ac.gM[a7] < 12 ? (aFa[a7] = ac.iK[a7] + 1, aFb[a7] = ac.iM[a7] + 1, aFc[a7] = 1, aFd[a7] = 1) : (aFa[a7] = ac.iK[a7], aFb[a7] = ac.iM[a7] + 1, aFc[a7] = 4, aFd[a7] = 2);
			if (a9.gu)
				for (a7 = 0; a7 < a9.jm; a7++) aFc[a7] = 0;
			aFt = aX.get(4).width, aFu = aX.get(4).height
		}()
	}, this.aFK = function(g6, a5J) {
		a5J > 18 * ac.gM[g6] ? (aG2[g6] = 6, aY.a6i[g6] = 2 + aY.a6i[g6] % 2) : (aG1[g6] = 4, (aY.a6i[g6] < 2 || 3 < aY.a6i[g6]) && (aY.a6i[g6] = 6 + aY.a6i[g6] % 2))
	}, this.oL = function(g6, a5J) {
		a5J > 6 * ac.gM[g6] ? (aG2[g6] = 6, aY.a6i[g6] = 4 + aY.a6i[g6] % 2) : (aG1[g6] = 4, (aY.a6i[g6] < 4 || 5 < aY.a6i[g6]) && (aY.a6i[g6] = 8 + aY.a6i[g6] % 2))
	}, this.resize = function() {
		pa(), aG0 || aG8(aFr)
	}, this.a31 = function() {
		for (var a7 = 0; a7 < a9.jm; a7++) ac.iL[a7] - ac.iK[a7] != 3 || ac.iN[a7] - ac.iM[a7] != 3 ? (aFa[a7] = ac.iK[a7] + (ac.iL[a7] !== ac.iK[a7] ? 1 : 0), aFb[a7] = ac.iM[a7], aFc[a7] = 1, aFd[a7] = 1) : (aFa[a7] = ac.iK[a7], aFb[a7] = ac
			.iM[a7] + 1, aFc[a7] = 4, aFd[a7] = 2)
	}, this.p5 = function(player, e0, aGB) {
		! function(player, e0, aGB) {
			player += e0 * a9.eV;
			0 === e0 ? aFs[player] === aGB && 0 < aAU[player] ? aAU[player] = 0 : (aFs[player] = aGB, aAU[player] = af.xG.xu(aGB) ? 255 : 64) : 1 === e0 ? (aAU[player] = 64, aFs[player] = aGB) : aAU[player] = aGB
		}(player, e0, aGB), 2 === a9.yl && this.lM(!0)
	}, this.ta = function() {
		aG0 ? aG8(tb) : aFp && (1 !== aFo ? (tb.imageSmoothingEnabled = !0, tb.setTransform(aFo, 0, 0, aFo, 0, 0), tb.drawImage(aFq, -aFm / aFo, -aFn / aFo), tb.setTransform(1, 0, 0, 1, 0, 0), tb.imageSmoothingEnabled = !1) : tb.drawImage(aFq, -
			aFm, -aFn))
	}, this.a7S = function(hr, hu) {
		aFm += hr, aFn += hu
	}, this.a0H = function(hr, hu) {
		ab.a7S(hr, hu)
	}, this.zoom = function(a1B, kp, kq) {
		aFo *= a1B, aFm = (aFm + kp) * a1B - kp, aFn = (aFn + kq) * a1B - kq
	}, this.lM = function(bo) {
		return !aG0 && !(!aFx && !bo && bb.lt < aFw + (1 === aFo && 0 === aFm && 0 === aFn && (a9.a3U() || a9.gu || 2 === a9.yl) ? 1e3 : a8e) || (aFx = !1, aFw = bb.lt, aG8(aFr), 0))
	}, this.aGE = function(a7) {
		return aGA(a7) * aFe[a7]
	}, this.aGF = function(player) {
		return aFe[player]
	}, this.ie = function() {
		bb.jj() % 10 == 9 && (aFx = a9.a3W() && !a9.a3U()), !a9.a3U() && 4 <= ++aFZ && function() {
			var a7, er, es;
			for (aFZ = 0, es = 4; 1 <= es; es--)
				for (er = ah.jn - 1; 0 <= er; er--) a7 = ah.jo[er] + es * a9.eV, 0 < aAU[a7] && aAU[a7] < 255 && aAU[a7]--;
			if (2 !== a9.yl)
				for (er = ah.jn - 1; 0 <= er; er--) a7 = ah.jo[er], 0 < aAU[a7] && aAU[a7] < 255 && aAU[a7]--
		}();
		var a7, er, eY = Math.floor(.1 * ah.jn);
		for (eY = (eY = eY < 8 ? 8 : eY) > ah.jn ? ah.jn : eY, a7 = aFY + eY - 1; aFY <= a7; a7--) er = a7 % ah.jn, ! function(a7) {
			var hS = aGA(a7) * aFe[a7];
			0 < aFc[a7] && aGe(a7, aFa[a7], aFb[a7], aFc[a7], aFd[a7]) ? ! function(a7) {
				for (var ef, eh, a1, jF, eC = !1, es = 0; es < 8; es++) {
					if (a1 = aFc[a7] + 2, jF = aFd[a7] + 2, a1 > ac.iL[a7] - ac.iK[a7] + 1 || jF > ac.iN[a7] - ac.iM[a7] + 1) return eC;
					if (ef = aFa[a7] - 1, eh = aFb[a7] - 1, !aGe(a7, ef, eh, a1, jF)) return eC;
					aFa[a7] = ef, aFb[a7] = eh, aFc[a7] = a1, aFd[a7] = jF, eC = !0
				}
				return eC
			}(a7) && function(a7, hS) {
				for (var ef, eh, a1, jF, eC = !1, aAc = aFc[a7], mF = 1 + Math.floor(.02 * aAc), es = 1; es < 5; es++) {
					if ((a1 = aAc + es * mF) > ac.iL[a7] - ac.iK[a7] + 1) return eC;
					if ((jF = aGk(hS, a1)) > ac.iN[a7] - ac.iM[a7] + 1) return eC;
					ef = ac.iK[a7] + Math.floor(Math.random() * (ac.iL[a7] - ac.iK[a7] + 2 - a1)), eh = ac.iM[a7] + Math.floor(Math.random() * (ac.iN[a7] - ac.iM[a7] + 2 - jF)), aGe(a7, ef, eh, a1, jF) && (aFa[a7] = ef, aFb[a7] = eh, aFc[
						a7] = a1, aFd[a7] = jF, eC = !0)
				}
				return eC
			}(a7, hS) && aGh(a7) : ! function(a7, hS) {
				var jF, ef = aFa[a7] + 1,
					eh = aFb[a7] + 1,
					a1 = aFc[a7] - 2;
				for (;;) {
					if (a1 < 1) {
						aFc[a7] = 0;
						break
					}
					if (jF = aGk(hS, a1), aGe(a7, ef, eh, a1, jF)) return aFa[a7] = ef, aFb[a7] = eh, aFc[a7] = a1, aFd[a7] = jF, 1;
					ef++, eh++, a1 -= 2
				}
				return
			}(a7, hS) ? function(a7, hS) {
				var ef, eh, a1, jF, es, mL, j2 = ac.iL[a7] - ac.iK[a7] + 1,
					l4 = Math.floor(.02 * j2);
				for (mL = -6 * (l4 = l4 < 1 ? 1 : l4), es = j2; mL <= es; es -= l4)
					if (jF = aGk(hS, a1 = 0 < es ? es : 1), ef = ac.iK[a7] + Math.floor(Math.random() * (ac.iL[a7] - ac.iK[a7] + 2 - a1)), eh = ac.iM[a7] + Math.floor(Math.random() * (ac.iN[a7] - ac.iM[a7] + 2 - jF)), aGe(a7, ef, eh, a1,
							jF)) return aFa[a7] = ef, aFb[a7] = eh, aFc[a7] = a1, aFd[a7] = jF
			}(a7, hS) : aGh(a7)
		}(ah.jo[er]);
		aFY = (aFY += eY) % ah.jn
	}, this.lH = function() {
		var a7, g6, hb, hc;
		if (bb.jj() % 4 == 1)
			for (a7 = ah.jn - 1; 0 <= a7; a7--) g6 = ah.jo[a7], aY.a6i[g6] < 2 || ((hb = Math.max(aG1[g6] - 1, 0)) === (hc = Math.max(aG2[g6] - 1, 0)) ? 0 === hb && (aY.a6i[g6] %= 2) : 0 === hc && aY.a6i[g6] < 6 && (aY.a6i[g6] += 4), aG1[g6] =
				hb, aG2[g6] = hc)
	}, this.a52 = function(player) {
		var a7 = player + 2 * a9.eV,
			dk = aAU[a7];
		return 0 < dk && (aJ.ys(50, player), aAU[a7] = 0, 255 === dk)
	}, this.a45 = function(player) {
		return 255 === aAU[player + 2 * a9.eV]
	}
}

function cW() {
	var aGn, aGo;
	this.dU = function() {
		aGn =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), aGo =
			"Pestilent Dominion;Wretched Realm;Damned Province;Corrupt Zone;Cursed Territory;Blight Nation;Haunted Expanse;Malevolent State;Ruined Empire;Contaminated Land;Epidemic Domain;Forsaken District;Abandoned Wasteland;Necrotic Enclave;Tainted Domain;Decayed Principality;Infested Region;Malignant Territory;Toxic Dominion;Ravaged Sector;Ghostly Realm;Plagued Commonwealth;Afflicted State;Desolate Nation;Apocalyptic Zone;Radiated Province;Deathly District;Pestilence Haven;Doom Territory;Malefic Expanse;Abandoned State;Cursed Haven;Corroded Zone;Hauntland;Noxious Nation;Infected Enclave;Ruinous Domain;Wasteland Woe;Rotten Principality;Voided Land;Vile Dominion;Catastrophic Region;Eerie Expanse;Desolation State;Forsaken Outpost;Contagion District;Damaged Province;Abhorrent Sector;Accursed Nation;Doomstruck Land;Radiant Ruin;Deathly Enclave;Malefic Dominion;Plague District;Infected Haven;Corrupt State;Pestilent Territory;Razed Realm;Haunted Wasteland;Toxic Sector;Cursed Dominion;Decaying Province;Forsaken Enclave;Ruinous Region;Malignant Haven;Infested State;Ghostly Nation;Tainted Territory;Damned District;Radiated Dominion;Desolate Expanse;Apocalyptic Land;Death Zone;Wretched State;Malevolent Haven;Plagued Nation;Noxious Domain;Voided Territory;Eerie Sector;Accursed Province;Necrotic District;Doom Haven;Haunt Realm;Rotten Nation;Forsaken Territory;Infected State;Abhorrent Expanse;Malignant Land;Toxic Dominion;Ruined District;Ghostland;Cursed Sector;Radiant Nation"
			.split(";");
		for (var a5L = ["K ", " Y", "E ", " Z", " z", " s", "S "], aGp = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], a7 = aGn.length - 1; 0 <= a7; a7--)
			for (var er = a5L.length - 1; 0 <= er; er--) aGn[a7] = aGn[a7].replace(a5L[er], aGp[er]);
		if (__fx.settings.realisticNames) aGn = realisticNames;
	}, this.a3G = function() {
		var eY = a9.jm,
			zK = ac.zK,
			a55 = ac.a55,
			playerNamesData = a9.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < eY)
			for (var a7 = 0; a7 < eY; a7++) zK[a7] = a55[a7] = "Player " + au.j3(1e3);
		else
			for (a7 = 0; a7 < eY; a7++) zK[a7] = a55[a7] = playerNamesData[a7]
	}, this.a3 = function() {
		if (9 === a9.k3) {
			for (var dz = au.random(), aGv = aGn, aGw = aGo, eY = aGv.length, kU = a9.data.teamPlayerCount[7], zK = ac.zK, a55 = ac.a55, a7 = kU - 1; a7 >= a9.jm; a7--) zK[a7] = a55[a7] = aGv[(a7 + dz) % eY];
			for (eY = aGw.length, a7 = kU; a7 < a9.eV; a7++) zK[a7] = a55[a7] = aGw[a7 % eY]
		} else(2 === a9.data.playerNamesType ? function() {
			for (var eY = a9.eV, zK = ac.zK, a55 = ac.a55, playerNamesData = a9.data.playerNamesData, a7 = a9.jm; a7 < eY; a7++) zK[a7] = a55[a7] = playerNamesData[a7]
		} : 1 === a9.data.playerNamesType ? function() {
			for (var zK = ac.zK, a55 = ac.a55, a7 = a9.jm; a7 < a9.eV; a7++) zK[a7] = a55[a7] = "Bot " + au.j3(1e3)
		} : function() {
			for (var aGv = aGn, eY = aGv.length, dz = au.random(), zK = ac.zK, a55 = ac.a55, a7 = a9.jm; a7 < a9.eV; a7++) zK[a7] = a55[a7] = aGv[(a7 + dz) % eY]
		})()
	}
}

function cp() {
	this.aGx = [], this.aGy = [], this.dU = function() {
		this.aGx = [], this.aGy = []
	}, this.ie = function() {
		0 <= this.aGx.length && this.aGz(this.aGx), 0 <= this.aGy.length && this.aGz(this.aGy)
	}, this.aGz = function(g) {
		for (var es = -1, a7 = g.length - 1; 0 <= a7; a7--)
			if (g[a7].lt--, g[a7].lt <= 0) {
				es = a7;
				break
			} for (a7 = es; 0 <= a7; a7--) g.shift()
	}, this.a3t = function(id, yZ, aH0) {
		return this.eu(this.aGx, id, yZ, aH0)
	}, this.aH1 = function(id, yZ, aH0) {
		return this.eu(this.aGy, id, yZ, aH0)
	}, this.eu = function(g, id, yZ, aH0) {
		return ! function(g, id, yZ) {
			var a7, hJ;
			for (a7 = yZ.length - 1; 0 <= a7; a7--)
				for (hJ = g.length - 1; 0 <= hJ; hJ--)
					if (g[hJ].player === yZ[a7] && id === g[hJ].id) return 1;
			return
		}(g, id, yZ) && (aH0 && function(g, id, yZ) {
			var a7;
			for (a7 = yZ.length - 1; 0 <= a7; a7--) g.push({
				player: yZ[a7],
				id: id,
				lt: 384
			})
		}(g, id, yZ), !0)
	}
}

function cV() {
	this.a55 = new Array(a9.eV), this.zK = new Array(a9.eV), this.a27 = new Uint8Array(a9.eV), this.la = new Uint8Array(a9.eV), this.iK = new Uint16Array(a9.eV), this.iM = new Uint16Array(a9.eV), this.iL = new Uint16Array(a9.eV), this.iN =
		new Uint16Array(a9.eV), this.gM = new Uint32Array(a9.eV), this.wR = new Uint32Array(a9.eV), this.ga = new Uint32Array(a9.eV), this.g0 = null, this.gE = null, this.gF = null, this.ey = null, this.os = new Uint16Array(a9.eV), this.io =
		new Uint16Array(a9.eV), this.ip = new Uint16Array(a9.eV), this.zJ = new Uint16Array(a9.eV), this.zI = new Uint8Array(a9.eV), this.a2D = new Uint16Array(a9.eV), this.dU = function() {
			this.a55.fill(""), this.zK.fill(""), this.a27.fill(0), this.la.fill(0), this.iK.fill(0), this.iM.fill(0), this.iL.fill(0), this.iN.fill(0), this.gM.fill(0), this.wR.fill(0), this.ga.fill(0), this.g0 = new Array(a9.eV), this.gE =
				new Array(a9.eV), this.gF = new Array(a9.eV), this.ey = new Array(a9.eV), this.os.fill(0), this.io.fill(0), this.ip.fill(0), this.zJ.fill(0), this.zI.fill(0), this.a2D.fill(0)
		}
}

function cn() {
	this.aAs = function(player) {
		aC.lZ(player), a9.yn++, ac.a27[player] = 2, ac.zJ[player] = be.zZ.aEK(), player === a9.eI && (aT.show(!1, !1), aS.a9H(), bN.yW.zG()), ab.a52(player)
	}
}

function cP() {
	this.jo = null, this.jn = 0, this.a3K = function() {
		for (this.jn = 0, a7 = a9.eV - 1; 0 <= a7; a7--) 0 !== ac.la[a7] && this.jn++;
		this.jo = new Uint16Array(this.jn);
		for (var eY = 0, a7 = 0; a7 < a9.eV; a7++) 0 !== ac.la[a7] && (this.jo[eY++] = a7)
	}, this.lG = function() {
		for (var gM = ac.gM, wR = ac.wR, zI = ac.zI, jo = ah.jo, a7 = ah.jn - 1; 0 <= a7; a7--) {
			var dk, g6 = jo[a7];
			gM[g6] <= bH.dl(wR[g6], 4) ? ag.dd(g6) : gM[g6] >= wR[g6] ? (dk = gM[g6], 250 <= (wR[g6] = dk) && (zI[g6] = 1)) : wR[g6] -= Math.max(1, bH.dl(wR[g6] - gM[g6], 1e3))
		}
		this.aH5()
	}, this.aH5 = function() {
		for (var la = ac.la, kT = this.jo, a9v = this.jn, a7 = a9v - 1; 0 <= a7; a7--) 0 === la[kT[a7]] && (kT[a7] = kT[--a9v]);
		this.jn = a9v
	}
}

function cX() {
	var aH6;
	this.kC = null, this.kB = 0, this.dU = function() {
		aH6 = [], 9 === a9.k3 && this.aH7()
	}, this.aH7 = function() {
		var aH8 = [58, 83, 105, 150, 190, 333];
		if (this.kC = [0, 0, 0, 0, 0, 0], this.kB = 0, a9.jm <= aH8[0]) this.kB = 256 - bH.dl(256 * a9.jm, aH8[0]), this.kC[0] = a9.eV - a9.jm - this.kB;
		else
			for (var a7 = 1; a7 < 6; a7++)
				if (a9.jm <= aH8[a7]) {
					this.kC[a7 - 1] = 512 - aH8[a7 - 1] - bH.dl((512 - aH8[a7 - 1]) * (a9.jm - aH8[a7 - 1]), aH8[a7] - aH8[a7 - 1]), this.kC[a7] = 512 - a9.jm - this.kC[a7 - 1];
					break
				} a9.k7 = a9.eV - a9.jm, a9.data.numberTeams = (0 < a9.jm) + (0 < a9.k7), a9.data.playerCount = a9.vx = a9.jm + a9.k7, a9.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, a9.jm + this.kB, a9.k7 - this.kB]), a9.a3A
		.a3E()
	}, this.aER = function(player) {
		aH6.push({
			player: player,
			g1: 14 + au.j3(20)
		})
	}, this.ie = function() {
		if (9 === a9.k3)
			for (var a7 = aH6.length - 1; 0 <= a7; a7--) --aH6[a7].g1 <= 0 && (ab.p5(aH6[a7].player, 0, af.xG.xc + af.xG.xq), aH6.splice(a7))
	}
}

function d4() {
	function aHN() {
		return {
			ej: bO.ej,
			ek: bO.ek,
			vM: bO.vM,
			vI: bO.vI,
			vJ: bO.vJ,
			vN: bO.vN,
			eE: bO.eE,
			mapSeed: bO.mapSeed
		}
	}

	function aHF(a7) {
		return 1 !== a7 && bO.aBJ(a7) && a7 !== bO.aHO()
	}
	this.aHA = 22, this.aEc = 4096, this.ej = 0, this.ek = 0, this.vM = null, this.vI = null, this.vJ = null, this.vN = null, this.eE = 0, this.mapSeed = 0, this.vK = !1, this.vL = new aHB, this.vC = new aHC, this.a5R = new aHD, this.dU =
function() {
		this.vC.dU()
	}, this.a3 = function(map, aHE) {
		((map %= this.aHA) !== this.eE || aHF(this.eE) && aHE !== this.mapSeed) && (this.vK = !1, this.vL.aHG(), au.a3F(map), this.eE = map, this.mapSeed = aHE, aHF(map) && (bO.vC.vD[map].aHH = aHE), this.aBJ(this.eE) ? (map = bO.vC.vD[this.eE],
			this.ej = map.a1, this.ek = map.jF, au.a3F(map.aHH), al.a3([this.ej, this.ek, map.lf, map.lc]), aHJ(), ak.aHK(), al.aHL()) : aHI())
	}, this.aHM = function(map, aHE) {
		var fG = aHN(),
			map = (this.a3(map, aHE), this.vL.aHG(), aHN());
		return this.ej = fG.ej, this.ek = fG.ek, this.vM = fG.vM, this.vI = fG.vI, this.vJ = fG.vJ, this.vN = fG.vN, this.eE = fG.eE, this.mapSeed = fG.mapSeed, map
	}, this.a3a = function(canvas) {
		canvas && this.vM !== canvas && (this.ej = canvas.width, this.ek = canvas.height, this.vM = canvas, this.vI = this.vM.getContext("2d", {
			alpha: !1
		}), this.hQ = this.vI.getImageData(0, 0, this.ej, this.ek), this.vN = this.hQ.data, this.eE = this.aHO(), this.mapSeed = 0, bO.vC.vD[this.eE].name = a9.data.mapName)
	}, this.eD = function(a7) {
		return 3 === a7 || 7 === a7 || 9 === a7 || 21 === a7 || a7 === this.aHO()
	}, this.aHP = function(a7) {
		return 2 === a7 || 7 === a7 || 9 === a7 || 20 === a7
	}, this.aHQ = function(a7) {
		return 1 === a7
	}, this.aHO = function() {
		return this.aHA
	}, this.aBJ = function(a7) {
		return void 0 === this.vC.vD[a7].aHR
	}, this.a3Z = function(pO) {
		return 0 === pO.mapType ? pO.mapProceduralIndex < 10 ? pO.mapProceduralIndex : 10 + pO.mapProceduralIndex : 1 === pO.mapType ? pO.mapRealisticIndex + 10 : void 0
	}, this.aBK = function(pO, aHS) {
		0 === pO.mapType ? pO.mapProceduralIndex = aHS < 10 ? aHS : aHS - 10 : 1 === pO.mapType && (pO.mapRealisticIndex = aHS - 10)
	}
}

function aHB() {
	function aHb() {
		bO.vL.ie()
	}

	function aHh(g6, aHg) {
		0 < aHg && (bO.vN[g6] += aHg, bO.vN[g6 + 1] += aHg, bO.vN[g6 + 2] += aHg)
	}

	function h1(g6) {
		return bO.vN[g6 + 2] > bO.vN[g6] && bO.vN[g6 + 2] > bO.vN[g6 + 1]
	}
	this.a7e = -1, this.zm = 0, this.aHT = 0, this.aHU = 8, this.aHV = 32, this.aHW = 8, this.aHX = 32, this.aHY = [0, 0], this.a6i = [0, 0, 0, 0], this.iF = null, this.aHZ = !0, this.aHa = !1, this.aHG = function() {
		-1 !== this.a7e && clearTimeout(this.a7e), this.a7e = -1, this.iF = null, al.aHL()
	}, this.dU = function() {
		7 === aW.zu() || this.aHa || (this.aHZ = !0, this.zm = 0, this.aHT = 1, this.aHY = [bO.vC.vD[bO.eE].vf[0], bO.vC.vD[bO.eE].vg[0]], this.a6i = [bO.vC.vD[bO.eE].aHR[3], bO.vC.vD[bO.eE].aHR[4], bO.vC.vD[bO.eE].aHR[5], bO.vC.vD[bO.eE].aHR[
			6]], this.aHU = bO.vC.vD[bO.eE].aHR[7], this.aHV = bO.vC.vD[bO.eE].aHR[8], this.aHW = bO.vC.vD[bO.eE].aHR[9], this.aHX = bO.vC.vD[bO.eE].aHR[10], this.aHZ ? this.a7e = setTimeout(aHb, 16) : this.ie())
	}, this.ie = function() {
		if (8 === aW.zu() && aD.lu()) this.a7e = setTimeout(aHb, 16);
		else {
			if (0 === this.zm) {
				var aHH = au.aHc();
				if (au.a3F(bO.vC.vD[bO.eE].aHR[2]), al.a3([bO.ej, bO.ek, bO.vC.vD[bO.eE].aHR[0], bO.vC.vD[bO.eE].aHR[1]]), au.a3F(aHH), this.iF = al.aHd(), this.zm++, this.aHZ) return void(this.a7e = setTimeout(aHb, 16))
			}
			for (var g6, eK, aHH = this.aHZ ? 10 : 1e6, aHH = bO.ek - this.aHT - 1 < aHH ? bO.ek - this.aHT - 1 : aHH, we = this.aHT + aHH, eh = this.aHT; eh < we; eh++)
				for (var ef = 1; ef < bO.ej - 1; ef++) h1(g6 = 4 * (eK = ef + eh * bO.ej)) ? this.aHe(g6, eK, 1) : (this.aHe(g6, eK, 0), function(ef, eh, g6) {
					return 1 < ef && h1(g6 - 4) || ef < bO.ej - 2 && h1(g6 + 4) || 1 < eh && h1(g6 - 4 * bO.ej) || eh < bO.ek - 2 && h1(g6 + 4 * bO.ej)
				}(ef, eh, g6) && this.aHf(ef, eh));
			this.aHT = we, this.aHT >= bO.ek - 1 ? (bO.vI.putImageData(bO.vJ, 0, 0, 1, 1, bO.ej - 2, bO.ek - 2), bb.dc = !0, this.aHG()) : this.aHZ && (this.a7e = setTimeout(aHb, 16))
		}
	}, this.aHe = function(g6, eK, e0) {
		aHh(g6, Math.floor(this.aHY[e0] + this.a6i[e0] * this.iF[eK] / 1e4) - bO.vN[g6])
	}, this.aHi = function(g6, dz, aHj, e0, a6i) {
		aHh(g6, Math.floor(this.aHY[e0] + (1 - dz / aHj) * a6i) - bO.vN[g6])
	}, this.aHf = function(kp, kq) {
		for (var g6, dz, aHj, a7U = kp - this.aHV, aHk = kq - this.aHV, wf = kp + this.aHV, we = kq + this.aHV, a7U = a7U < 1 ? 1 : a7U, wf = wf > bO.ej - 2 ? bO.ej - 2 : wf, we = we > bO.ek - 2 ? bO.ek - 2 : we, eh = aHk < 1 ? 1 : aHk; eh <=
			we; eh++)
			for (var ef = a7U; ef <= wf; ef++) h1(g6 = 4 * (ef + eh * bO.ej)) ? (aHj = this.aHU + (this.aHV - this.aHU) * this.iF[ef + bO.ej * eh] / 1e4, Math.abs(kp - ef) > aHj || Math.abs(kq - eh) > aHj || aHj <= (dz = Math.sqrt((kp - ef) * (
				kp - ef) + (kq - eh) * (kq - eh))) || this.aHi(g6, dz, aHj, 1, this.a6i[3])) : (aHj = this.aHW + (this.aHX - this.aHW) * this.iF[ef + bO.ej * eh] / 1e4, Math.abs(kp - ef) > aHj || Math.abs(kq - eh) > aHj || aHj <= (dz = Math
				.sqrt((kp - ef) * (kp - ef) + (kq - eh) * (kq - eh))) || this.aHi(g6, dz, aHj, 0, this.a6i[2]))
	}
}

function aHJ() {
	2 === bO.eE ? aHl([256], [256], [0, 205, 256], [500, 500, 0], [0, 0, 0]) : 7 === bO.eE ? aHl([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0]) : 8 === bO.eE ? aHl([410], [410], [0, 120, 210], [0, 80, 640], [0, 0, 0]) : 9 === bO.eE ? aHl([
		512], [512], [0, 70, 180, 200, 290, 420, 512], [500, 500, 0, 0, 500, 500, 0], [0, 0, 0, 0, 0, 0, 0]) : 20 === bO.eE && aHl([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0])
}

function aHl(aHm, aHn, aHo, aHp, aHq) {
	for (var ef, eh, aHs, aHt, a1B, aHu, hq = aHm.length - 1, aHr = bO.ej + bO.ek, eY = (aHr *= aHr, aHo.length), a7 = eY - 1; 0 <= a7; a7--) aHo[a7] *= aHo[a7];
	var aHv = new Array(eY),
		aHw = new Array(eY),
		aHx = new Array(eY),
		f0 = al.aHd();
	if (void 0 === aHq)
		for (aHq = new Array(eY), a7 = eY - 1; 0 <= a7; a7--) aHq[a7] = 0;
	for (a7 = 1; a7 < eY; a7++) aHv[a7] = aHo[a7] - aHo[a7 - 1], aHw[a7] = aHp[a7] - aHp[a7 - 1], aHx[a7] = aHq[a7] - aHq[a7 - 1];
	for (ef = bO.ej - 1; 0 <= ef; ef--)
		for (eh = bO.ek - 1; 0 <= eh; eh--) {
			for (aHs = aHr, a7 = hq; 0 <= a7; a7--) aHs = (aHt = (ef - aHm[a7]) * (ef - aHm[a7]) + (eh - aHn[a7]) * (eh - aHn[a7])) < aHs ? aHt : aHs;
			for (a1B = aHp[eY - 1], aHu = aHq[eY - 1], a7 = 1; a7 < eY; a7++)
				if (aHs < aHo[a7]) {
					a1B = aHp[a7 - 1] + aDu((aHs - aHo[a7 - 1]) * aHw[a7], aHv[a7]), aHu = aHq[a7 - 1] + aDu((aHs - aHo[a7 - 1]) * aHx[a7], aHv[a7]);
					break
				} aHy(bO.ej * eh + ef, a1B, aHu, f0)
		}
}

function aHy(e0, a1B, aHu, f0) {
	a1B < 500 ? f0[e0] = bH.dl(f0[e0] * a1B * 2, 1e3) : 500 < a1B && (f0[e0] += bH.dl(2 * (1e4 - f0[e0]) * (a1B - 500), 1e3)), f0[e0] += bH.dl(aHu * (10 * a1B - f0[e0]), 1e3)
}

function cZ() {
	var aHz;

	function aI9(a1a, hS, ef, eh, globalAlpha) {
		bO.vI.save(), bO.vI.globalAlpha = globalAlpha, bO.vI.imageSmoothingEnabled = !1, bO.vI.scale(hS, hS), bO.vI.drawImage(a1a, Math.floor(ef * (bO.ej / hS - a1a.width)), Math.floor(eh * (bO.ek / hS - a1a.height))), bO.vI.restore()
	}
	this.a5O = 0, this.a5P = 0, this.a5Q = 0, this.a5R = 0, this.dU = function() {
		(aHz = new Array(bO.aHA))[0] = {
			a1: [0, 5e3, 8e3, 1e4],
			dz: [220, 250, 255, 220],
			sL: [190, 220, 0, 0],
			es: [170, 200, 0, 0]
		}, aHz[1] = {
			a1: [0, 4e3, 5e3, 6e3, 1e4],
			dz: [25, 0, 100, 0, 25],
			sL: [25, 0, 0, 0, 25],
			es: [25, 0, 0, 0, 25]
		}, aHz[2] = {
			a1: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			dz: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			sL: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			es: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aHz[3] = {
			a1: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			dz: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			sL: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			es: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, aHz[4] = {
			a1: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			dz: [10, 10, 20, 10, 10, 170, 212],
			sL: [20, 20, 60, 100, 100, 110, 170],
			es: [70, 70, 160, 30, 30, 60, 120]
		}, aHz[5] = {
			a1: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			dz: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			sL: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			es: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aHz[6] = {
			a1: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			dz: [10, 10, 60, 255, 255, 200, 200],
			sL: [10, 10, 60, 255, 255, 200, 200],
			es: [80, 80, 255, 255, 255, 200, 200]
		}, aHz[7] = {
			a1: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			dz: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			sL: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			es: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aHz[8] = {
			a1: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			dz: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			sL: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			es: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aHz[9] = {
			a1: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			dz: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			sL: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			es: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aHz[20] = {
			a1: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			dz: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			sL: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			es: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, aHz[21] = {
			a1: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			dz: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			sL: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			es: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.aHK = function() {
		var aI8, a7, er, fG, hQ = function() {
				var hQ;
				return bO.vM = document.createElement("canvas"), bO.vM.width = bO.ej, bO.vM.height = bO.ek, bO.vI = bO.vM.getContext("2d", {
					alpha: !1
				}), hQ = bO.vI.getImageData(0, 0, bO.ej, bO.ek), bO.vN = hQ.data, hQ
			}(),
			a1 = aHz[bO.eE].a1,
			dz = aHz[bO.eE].dz,
			sL = aHz[bO.eE].sL,
			es = aHz[bO.eE].es,
			f0 = al.aHd(),
			eY = a1.length - 2,
			aI3 = new Array(1 + eY),
			aI4 = new Array(1 + eY),
			aI5 = new Array(1 + eY),
			aI6 = new Array(1 + eY);
		for (er = eY; 0 <= er; er--) aI3[er] = a1[er + 1] - a1[er], aI4[er] = dz[er + 1] - dz[er], aI5[er] = sL[er + 1] - sL[er], aI6[er] = es[er + 1] - es[er];
		for (a7 = bO.ej * bO.ek - 1; 0 <= a7; a7--)
			for (er = eY; 0 <= er; er--)
				if (f0[a7] >= a1[er]) {
					fG = f0[a7] - a1[er], bO.vN[4 * a7] = dz[er] + aDu(aI4[er] * fG, aI3[er]), bO.vN[4 * a7 + 1] = sL[er] + aDu(aI5[er] * fG, aI3[er]), bO.vN[4 * a7 + 2] = es[er] + aDu(aI6[er] * fG, aI3[er]), bO.vN[4 * a7 + 3] = 255;
					break
				} bO.vI.putImageData(hQ, 0, 0), bO.aHQ(bO.eE) && aX.sO() && bO.aHQ(bO.eE) && (hQ = aX.aD1("arena"), aI8 = aX.aD1("territorial.io"), aI9(hQ, 5, .5, .5, .1), aI9(aI8, 2, .5, .45, .1)), bO.vK = !0, bb.dc = !0
	}, this.a3I = function() {
		for (var g6, ef, eh, aIA, hH, fI, a5P = 0, a1 = bO.ej, jF = bO.ek, fG = a1 * jF * 4, aIB = aA5, aIC = bO.vN, a7 = a1 - 1; 0 <= a7; a7--) aIB[(g6 = a7 << 2) + 2] = aIB[fG - g6 - 2] = 3;
		for (fG = 4 * a1, a7 = jF - 1; 0 <= a7; a7--) aIB[(g6 = a7 * fG) + 2] = aIB[g6 + fG - 2] = 3;
		for (aIA = a1 - 1, hH = jF - 1, eh = 1; eh < hH; eh++)
			for (fG = eh * a1, ef = 1; ef < aIA; ef++) fI = 1 - (aIC[(g6 = fG + ef << 2) + 2] > aIC[g6 + 1] && aIC[g6 + 2] > aIC[g6]), aIB[g6 + 2] = 2 - fI, a5P += fI;
		this.a5O = (a1 - 2) * (jF - 2), this.a5R = 0, bO.eD(bO.eE) && (bO.a5R.aID(), bO.a5R.aIE()), this.a5P = a9.jW = a5P - this.a5R, this.a5Q = this.a5O - this.a5P - this.a5R
	}
}

function aHI() {
	var pD;
	10 === bO.eE ? pD =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === bO.eE ? pD =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === bO.eE ? pD =
		"JJAf2uP6y-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeu0-F-n5a_GG4KJGGG3G3G3FFJFmKGJ4JGGGG3GJJFJG3G3G323G--kLPeduaKGFGGGG443JJJJJJG--B-C0FJK__443-BJ-66wmpBnJopCMJpCCCIIIJoopKKICKCBnCKJgooopMIDOzzSzUzbzzUSyTUxxrrrrrP1XcXXX9Hcn9cceemece7cPIoeX0sWWaOWVNTOcTNNcN0V0V5-N0aOa-0V--N50a5Obyc-M0z3TPOdgBnBF0NOpxpMV7-M2mMiLbinz03F0sTx8mfrNT-2l6QEdMwwp-5XX7UMTP1V1GIuvaNn-5Xfxrpw5XV1GNTEfn4-_XvzjAAA9mfA9ed9fpzyTUzyUaUyOX3n59NTKLLKHPPPO_LK4iidea_O_QeideeaLOLLJG3-0eeddOaPO_OKLKzEznzjgnnzBykknByEYnByug-3332ElJ222-2wBko2BnBnBwwzwx-9Y6j6rrrkccc-E5ctEizpJF-aDYgSMGz-X10G6VyjiyuuPeiuzjivh3G3K3G--k-9JGFAPEIZSKBghKSMIpKpCJnI9gcXeccehHccoeXBeoppKIJoghIHnCJnJmemmecmfA9jyTUzzzbbxbV0WaTT-OtWWWV0zxtyUN6yUzSxrSqTUztaN71190V7-5V15VUy--V-lxHEg--33oL-67Dhyu0--3FoL--7ahw-LGYowfzu-0HFMIfF-aHWWwxxxcXX-E8ZrUdfVl--TIJLzSr17V0wcDLvivjysGK3G4XaJb1zppIJpBccccge7fUxx9eocX7cXX6y7Y99Heggen9nJdAHp9Xnp9IIJfICIBdCKKIIMMJme19eXxxp9X9VVfEMMMSBpooe7XCSBomccxxpHcrKKCMHmXXmcxoeX1mpJe70BrMJmVV--gxExIpJcX71nKCJmhCKKCIJoopCKKKHX8KHd9nKrKBj6xrSrKpz6xSMMSrKppwObaP-UzSCAICIKCIKKKCMMKKCpCMMSrrrKpKprUSprMUSMrSprKrSpSrUrUSxpxprSrMrMprSSSppMKprSprrSrxKSUSqUGbqUbbrxrSxrSrKHXXeggeYBnBgmnBnKCrJnKpIKpBnKCMMrSS9chKKIBeX77EIAE5OxIIKKKIIEKSKSKKSKKMKpKpKKSMSSSSrSzxxxzlzzUzzzzzUxrMMMMSxxxrrxrrxxxxzUzOzrbxzrxzzzw6w6yOtttttyUbbyTTTTTTTTTUtzIrzbzbzbba-71-VVV77V--7711-V1-1---51--1-1-V0cN-N5VN1e-ee7-1mc71Xe9fIBcVV0WbyOzxX-VV7VNN5TUzUu1ce9menBecmf9gxHc7c7V-777---50VP-V-N-0WxppSJpr6zyObzttV6rMKpUyObttbryUbzWaP0sNNOX757X97X7ce9XXXXXVc7-V-X7VX5-V7eeA9menA9fBnCBnIIJoorMIRObpIKMJpppSSSMSoeX71-V7777X97c5V-ccWV0VX77--NN55-N--7U5111cXXenBcc7fABgcX117X7c-gf9emV---1--XXXVX7X17579VVV117Xed9XecXX--WV5Uzz6zyUzrSrUUaNUlxtzXXXee1777X1e-5NOy--WV5OttttaTUzyUrxxtzzzlzMUrzzxaUttbbxWzxpSonBmpCCJpCKCIJpJooeACHpprSxaOV577U6sOWV-NNN70WVOWzwTTT5NUxryUba5NNOba1cc79cXX199X-91X99mhIHfJmXgxxxpHe9XccX997c7X0zV--V-N7P6k49V711-111X-77cX79mmeHeccV1mdbn_Uno-DKNVSo1-O9kaiKKzzEzpK-8_SLEzzzeeeV1Hinzjh3-8_UsM9mjtyTVBHk8AfiyvivizpG43G3GG--0OIzV2mnjMaLEBxn29mc4SSpprSSSUprrKprSSpppKMMSrMrxrKIKHhKHfIKKpIBpCIIJpIJnIKpSKJo1AKKpppxprSprpMKphIKhMUSrCKMRpMKrrSMMMMSKUVUxxUxSJe19efAKKUbKnMxKKUKIKUStaSrUMTUrzbzxxrSzzUy5SSKtbqprTprzSxxSrBXe9ghSrMMUyUzzbySKrUKpUSpSUMtV---D--0aN-X9997977VVe9XD-19XX1-9XcXXXXYxzUttzbV-7VX78by0rUSppKMbs5-V77V77X-X71--17-X-7V-0WWVN-6byTOrJepKpSrpxrUSSIKSKSzrrrs797c1711ObUSxxpSSSSSSy5--7997VV6z_rrSrxpSprs-7VX17XeXVXN-11-TUUSxztyTT5ObzrSSrzbtbbtUKzrxrSxzUrzUzShKhMKrxzzzxyMtzqnAA9mgfAAACKICBnKzbbWWbaOtbaOaTUbtyUyTTTOaOa556zyMxrUtaTUzrxrrrzSzxzbta5N0s-ee997cX97cX7cX7X771-V-aT--V17V7X1--V7Xea6ty5T5Mts5--5-550aT55NU_ySxxta5OVD--0VN5NND-N--8a6a5OsN1og55OVVOta-75OTSqhCMrBmhMbbtzzzzta--NN5-8Us0V-N1eD-XN0VOKppraT18zs0SyOUaOa5OaN1-VcX7X5OSpSxpMSra5NNObV5-N19cVc-W_KMSrrxxztzsND--MJpKMrzb_pyTMzUa5-0a5-X-VOIMMMSBnKKSMrMzprzaQBen1ceeXcccempprtzUUSv9mmfMrxzUMxpUUUrzbztrxyOzUxrrMzbWbJppSvC7gmenA9mgggfABgnBf9nBppUrttbzUzCKrSSxzbaUxPfMSKpKnJhRpIAIIKrSzUMMzxztyTObaTOWWaTTTUbzzrza5ObaTOWbbbUrSrStzyUUzbyN--s5T2rs-1XeXeefBn97VfBnIBemf97cXcX7bWV1111c1eiN7f-ABa6s19n77X7g97cceX7f11UzUppry-N0MMAIKzV4UW_rJoppza55-TMSsNObztaOa6KzV-77N-SKKSUzbaOaOyUtzzzyTUbtzxrsOaObtttSraOWaObzzzzz_ptaUbyMzzyUtbVUyUrUzzzzzUzzxyQMzzUzzzeeeeXee9Xeee9eeeefKMIKcf9ggnABemefCCKzrLf99X1fABgeeXAKSSMKxxzUSrSraMRpSxrQA7X7X9oopBo1N9gnIKCIJmmmnKIKJomn7emfMBc51997cenKMUzPmegmfMMSzzyNA9OzzUUIKMUKrKpSSrUrxza6SrMSrrMSrUUxzrxxxrUSSzSSxSUSxSrSSrSrpUrMMUSprrUUUUSpKrySzSrxzzxpzSppprrzUrSpSSCSRprSMKKpMKrMKKCIIIBohIBonAAABnABmgemhBmmmeenBnA9X9ecceeXX7Xemmcemgef9nA7en9kecee9eXeX1-enBkeX7XeXce92VXX99ceACBn9XX77XVVV--X7XemmgeeXXX997VVc75OVeX9hAAA7eeme9eXe9Xeeee9e9ceemmmmf9meegfHenBmfBnA9mgggemnBggfBnIHmmekeeceX9e9cXXXmoeceeXce9Xce99eXnBpCBpSrSrSrMSxzzxyeeeeemkeemgf9pprUzUHmeXXem99e9eceef1dbs17ecepKrMgg9XeXccX-Xeen7cXeenBmnBghCBgnBACCCMCKJohCCMrzzzyUzzzzqognBmnCKprMSMACKpz_wmoogepCKrMSMStUZkeeeeAH15-11-X9hCKMSRomcgpKzprpprs0z_rKppzrSrzSpIKIBgXmprrUKIKKrttpKzSUBomm97ghJpSyUzSzzzUbzzUtrzfAI9epnHceceemegghUUzxzWbzzrbTopMSta5OVOrzzUSKUUxrsOrpxQCSrIIKSxSrSzSrzUrUUtttztUtbzxxMaOV-sOWV5--NNOUzUzxzxzUUrSxrrUSrrSzrrSxSprSppprSpxrrrUUrbbtzrbbrztzzrbbyTT6bSyOa0aTOaOy5T6aTOzbzpxxxxpzUSxs7XESrKyOUrtaOa17zyUaTOaOSxprKCKgnIAAABnBnKppppppJnHnCMJnCCKMSrSSKKICCKKKKppKo-2AYFDB--MPns--j8uk-0TwQV7mzO6ievyyvFGK3F--qNX0zxzxrXce9c-3mKUw-DOJuzw9-lBkNyuuuviyzjJK43G000-OaPJEprzSKMrrkccc-1997-2C8pDo-uPOqwf9mnbbtyTV-2Jzv--5gXT-CCmSUvvGG--5xsy-0D-rE-4b-qzSqX7--sMmk-0lNEV-IZ0nk-tm6EnFN-Rt3BvgF-5ReOUc-otNAvisG30DRoZzUzzzrwP9eeecc-3uJps0eSSKRrMGzrzrrM-V-eXXeX--2fpn--6MiT-0DoXD--6ULD--E2lg--TGhs--wrkk-0uNAV-npyzx-0bkCEF-6EeL6jG-5bpJQAEbaV0nuubvp-0dya3mhrk--BzMKzF28zMOzrMUP779c-gziXufkG-2byBQrcV-J-IhV490elopIKKJzlX70V---2FCPyV-HVlaxpX7-x0_hzvvGGF-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--1u44Wxxxr17cc-CFkqTusBG-2cO5jMcV3oE3YuuiB3FF0P7tWrre9-4GLRUh--19rRV-JN8nk-1B7iV-3OQA--cpNzV8oQxrjjizyyw4KKG44-1d-ezGV-_77wzvGF0eJQZmxL0V-C9jlvF09OI0rTX--JoI0k-PTDyyV-40oK--e5AbV7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL--1qoP6bvVF-qtlNxCKCUa0V7V0xqOguudaNznk-G3-Lvq2RrOc-2N7SOfvlG-2g3LFmnKUrla-7X--Vg031A1AJgoxMSporMSSr-XV--10aNXeV-y7CVQfz0GF0RIcNptae02XdsiLTezvzyyyzjzGGGGGGGGG3--GRVT-QXt0TTyyzwK4GJ-r5K0genCxtwT-V-yBnotTvg-F-RR4WyVBNuCtdejvYyi-knBLOFJJF3BSAjnMSzUbsX9XeV3t0vf_fzv-GF0wZ8bxrOe9--8AQA--HN1m-CZlGTLRwx-cmONzIxrprppKprUyUts-XccX1e97cXc--_7pw029QbgoonJUROV5-V-iJrguik4--mdjY-0tQAdaRk-BiCss-aMQLTjJ--3jUaV4tUqAvjzx5KGF-YB7rwfzwOeVuOXlO_O__Kbj2vizuviyuuvfeveTiviynvYziefiiefvfiYvjB-444G3F-0-2-kJ304K3GGG3JG34--F3GJ-IBbGxS--3yOw8PPd_GaaiC-Eueibvyvx-304--C-2IBzcggmeenCMSrwOaOzKHmnrUSxzTOu--V7VVV9c-yPFVPuf0-F0gt0ZpKs17-aTPhOiBFxRy2ZmgnJeeXAICBnBenJzSrKKrrSSrKpMKJnBnCKMSMIKMrxSOV0V0zzUKSpppSKSEKIESOV-Oa0sOzUrMKSppSUMMkP77V-0a1--VP-17--71--7-UxSrrrrSJpqOtzzOX770hBcX7V5--XXV11cc717X7X9XX999777X7e-_chDLLiiivYEl33G3-Vock29fSpSKonCMU5OaNV-NNX7c2DaQYtPjzvjfiywGK33G3G-0xDlzpUyX9V5PSx2jyuzVGGK-0CFZWnwNV1uXF0_fBo1IJJoSSJnACCCKppSxyUV-117-N711-6evlav4-JpSyQKUSSSpaX517c-c-yg6luPzk3F0CNJQpy9-iumBnaLKKeudOKG_KLKLLLueLOaQEEjEjyinEyzejjnskBnwC043F2-nn2zE2EEoKGKFASOdporHX8CBhzxraUqUzSlzSX77eeeXBc0V-LhikvW--KmlL-EfebDLTskk-YMe-RrMTV7V2uyCCaPEBC-5q1sjK6a7V-A2Ih-Aq892rMUNP7cc-TlB1tv--ANsVBjV2v6d6aOwnp-7qIGAIJlaNV1imQQOPszivwzE8GGGGJ0vODuRhCrppCBpULN5N7NX90WX-6gppqPk-GqSXfBnqOxtaUemec-5nnTs-YPD2wz6re9-3QGmz__bnno-2PJQD-KhKnTaaTn-nF-0Pg_N-aphUzj4FKhhRbmhUrKHohIzMpxrpKKKSMKSKxrU5N5OaUL--X11777Hf9VX-N7--5P-XHXe-0hhca-WqtqMCppppSJp6ltz5NVXV-X17eV0QUJbjJ-nREfwnBwOtbae-IiGGaLPvEk0-Er7eI9nCKpUa0V--1v_ZSfcl--0T7Zc0TwsLPNzgz8K4--MdCP-8jMTqMno-QTv6BfDUs-CjSgLdjBG--rknYV0vttlfW-0CxT2mcUV6Qv4daeffkn3J3B-EUOXBja1CjifiOvd_LdKKaaOaK--nBw8aOFFeeKbfivzjix3En-2Ennz-n-3-2UYTi-bkAQ5LLKaRzgwnznGJ-MWJCRr5NV0wBylcwF0D6jaola--BJZx--NfgX-6lRkav3--sx_2V7RUnUaK_aLLQjzzz-atBrI9mgmnICCpCKLTOaOzs0aNOWV9c-E9stskaiM_-pIJnKoxxzxzrUrrxzUxzSrUSzSpISxzxbxzzzzrzzrzxbzrzUta-0YBe7mf9eeV--P9eee7XXcecVXeXceA9eeeXX-c7T9Bee997n9X-0wqC2ylF4iQ5frxSUzJzqNX9cX97V1wr6EuslF-YbY3xSUaeX--x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === bO.eE ? pD =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === bO.eE ? pD =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === bO.eE ? pD =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === bO.eE ? pD =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === bO.eE ? pD =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === bO.eE ? pD =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === bO.eE && (pD =
			"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV"
			), (new v5).v7(pD)
}

function aHC() {
	this.vD = null, this.aIF = null, this.aIG = null, this.dU = function() {
		var aIH = [120, 105, 92],
			cos = [12, 12, 60],
			aII = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aIJ = [140, 130, 120],
			aIK = [12, 12, 76],
			aIL = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aIM = [130, 117, 106],
			aIN = [12, 12, 68],
			aIO = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.vD = new Array(bO.aHA + 1), __fx.customLobby.setMapInfo(this.vD), this.vD[0] = {
			name: L(127),
			a1: 230,
			jF: 230,
			lf: 1e3,
			lc: 2e3,
			aHH: 173
		}, this.vD[1] = {
			name: L(128),
			a1: 800,
			jF: 800,
			lf: 100,
			lc: 50,
			aHH: 43
		}, this.vD[2] = {
			name: L(129),
			a1: 512,
			jF: 512,
			lf: 128,
			lc: 32,
			aHH: 0
		}, this.vD[3] = {
			name: L(130) + " 1",
			a1: 960,
			jF: 960,
			lf: 60,
			lc: 8,
			aHH: 0
		}, this.vD[4] = {
			name: L(131),
			a1: 900,
			jF: 900,
			lf: 100,
			lc: 5,
			aHH: 0
		}, this.vD[5] = {
			name: L(132),
			a1: 1e3,
			jF: 1e3,
			lf: 100,
			lc: 40,
			aHH: 0
		}, this.vD[6] = {
			name: L(133),
			a1: 1e3,
			jF: 1e3,
			lf: 100,
			lc: 20,
			aHH: 0
		}, this.vD[7] = {
			name: L(134),
			a1: 1024,
			jF: 1024,
			lf: 128,
			lc: 32,
			aHH: 0
		}, this.vD[8] = {
			name: L(135),
			a1: 820,
			jF: 820,
			lf: 200,
			lc: 100,
			aHH: 0
		}, this.vD[9] = {
			name: L(136),
			a1: 1024,
			jF: 1024,
			lf: 128,
			lc: 32,
			aHH: 0
		}, this.vD[10] = {
			name: L(137),
			vf: aIJ,
			vg: aIK,
			aHR: aIL
		}, this.vD[11] = {
			name: L(138),
			vf: aIM,
			vg: aIN,
			aHR: aIO
		}, this.vD[12] = {
			name: L(139),
			vf: aIM,
			vg: aIN,
			aHR: aIO
		}, this.vD[13] = {
			name: L(140),
			vf: aIH,
			vg: cos,
			aHR: aII
		}, this.vD[14] = {
			name: L(141),
			vf: aIH,
			vg: cos,
			aHR: aII
		}, this.vD[15] = {
			name: L(142),
			vf: aIJ,
			vg: aIK,
			aHR: aIL
		}, this.vD[16] = {
			name: L(143),
			vf: aIJ,
			vg: aIK,
			aHR: aIL
		}, this.vD[17] = {
			name: L(144),
			vf: aIH,
			vg: cos,
			aHR: aII
		}, this.vD[18] = {
			name: L(145),
			vf: aIM,
			vg: aIN,
			aHR: aIO
		}, this.vD[19] = {
			name: L(146),
			vf: aIH,
			vg: cos,
			aHR: aII
		}, this.vD[20] = {
			name: L(147),
			a1: 1024,
			jF: 1024,
			lf: 128,
			lc: 32,
			aHH: 0
		}, this.vD[21] = {
			name: L(130) + " 2",
			a1: 940,
			jF: 940,
			lf: 80,
			lc: 8,
			aHH: 0
		}, this.vD[bO.aHA] = {
			name: ""
		}, this.aIF = new Uint8Array(12);
		for (var a7 = 0; a7 < 10; a7++) this.aIF[a7] = a7;
		for (this.aIF[10] = 20, this.aIF[11] = 21, this.aIG = new Uint8Array(10), a7 = 0; a7 < 10; a7++) this.aIG[a7] = 10 + a7
	}
}

function aHD() {
	this.aID = function() {
		for (var g6, ef, fG, aIB = aA5, aIC = bO.vN, a1 = bO.ej, aIA = a1 - 1, hH = bO.ek - 1, g1 = 0, eh = 1; eh < hH; eh++)
			for (fG = eh * a1, ef = 1; ef < aIA; ef++) aIC[g6 = fG + ef << 2] === aIC[1 + g6] && aIC[g6] === aIC[2 + g6] && (g1++, aIB[2 + g6] = 4);
		ak.a5R = g1
	}, this.aIE = function() {
		for (var aIB = aA5, a1 = bO.ej, aIA = a1 - 1, hH = bO.ek - 1, id = 5, eh = 1; eh < hH; eh++)
			for (var fG = eh * a1, ef = 1; ef < aIA; ef++) {
				var eC = 2 + (fG + ef << 2);
				4 === aIB[eC] && (! function(eC, id) {
					var eY = 1,
						aIB = aA5,
						ea = aY.ea,
						a1O = [eC];
					aIB[eC] = id;
					for (; eY;) {
						for (var a1P = [], a7 = 0; a7 < eY; a7++)
							for (var eN = a1O[a7], eb = 3; 0 <= eb; eb--) {
								var ec = eN + ea[eb];
								4 === aIB[ec] && (aIB[ec] = id, a1P.push(ec))
							}
						eY = (a1O = a1P).length
					}
				}(eC, id), id = Math.max((id + 1) % 256, 5))
			}
	}
}

function a3H() {
	(wy = void 0 === wy ? document.createElement("canvas") : wy).width = bO.ej, wy.height = bO.ek, a3L = wy.getContext("2d", {
		alpha: !0
	}), a3M = aA5 = null, a3M = a3L.getImageData(0, 0, bO.ej, bO.ek), aA5 = a3M.data, b6.pg.vO(aA5)
}

function ca() {
	var f0, a1, jF, max, aIQ, lc, aIS, aIT, aIU, aIV, aIW, aIX, aIY, aIZ, aIR = 1e4;

	function aIg(aIf, lf, eY) {
		var a7;
		for (aIS[0] = aIf, a7 = 1; a7 < eY; a7++) aIS[a7] = aIS[a7 - 1] + lf, lf = aIS[a7] >= aIR ? (aIS[a7] = aIR - 1, -lf) : aIS[a7] < 0 ? (aIS[a7] = 0, -lf) : (lf += 16384 <= au.random() ? lc : -lc) < -aIQ ? -aIQ : aIQ < lf ? aIQ : lf
	}

	function aIi(ef, eh, aIj, eY) {
		(aIj ? function(ef, eh, eY) {
			var a7;
			for (a7 = 0; a7 < eY; a7++) f0[eh * a1 + ef + a7] = aIS[a7]
		} : function(ef, eh, eY) {
			var a7;
			for (a7 = 0; a7 < eY; a7++) f0[eh * a1 + ef + a7 * a1] = aIS[a7]
		})(ef, eh, eY)
	}

	function aIm(value, eY) {
		var a7, l4, eC, hf = value - aIS[eY - 1];
		if (0 != hf) {
			for (l4 = 1 + bH.dl(Math.abs(hf), eY - 1), l4 = hf < 0 ? -l4 : l4, aIS[eY - 1] = value, eC = (eC = eY - 1 - bH.dl(Math.abs(hf), Math.abs(l4))) < 1 ? 1 : eY - 2 < eC ? eY - 2 : eC, a7 = eY - 2; eC <= a7; a7--) aIS[a7] += hf - (eY - 1 -
				a7) * l4;
			(hf < 0 ? function(eY) {
				var a7;
				for (a7 = eY - 2; 1 <= a7; a7--) aIS[a7] < 0 && (aIS[a7] = -aIS[a7] - 1)
			} : function(eY) {
				var a7;
				for (a7 = eY - 2; 1 <= a7; a7--) aIS[a7] >= aIR && (aIS[a7] = 2 * aIR - aIS[a7] - 1)
			})(eY)
		}
	}

	function aIp(a1O, a1P, eY) {
		for (var a7 = 0; a7 < eY; a7++) a1O[a7] = a1P[a7]
	}

	function aIq(g) {
		for (var a7 = 0; a7 < g.length - 1; a7++) g[a7] = g[a7 + 1] - g[a7];
		g[g.length - 1] = g[g.length - 3]
	}

	function aIr(a3n, gap, hI) {
		aIT.push(a3n), aIU.push(gap), aIV.push(hI)
	}
	this.a3 = function(a2Y) {
		! function(a2Y) {
			var a7;
			for (a1 = a2Y[0], jF = a2Y[1], aIQ = a2Y[2], lc = a2Y[3], f0 = new Int16Array(a1 * jF), max = jF < a1 ? a1 : jF, aIS = new Int16Array(max), aIT = [], aIU = [], aIV = [], aIW = new Array(a1), aIX = new Array(jF), a7 = a1 - 1; 0 <=
				a7; a7--) aIW[a7] = !1;
			for (a7 = jF - 1; 0 <= a7; a7--) aIX[a7] = !1;
			aIY = new Int16Array(a1), aIZ = new Int16Array(jF)
		}(a2Y),
		function(eY) {
			var aIf = au.random() % aIR,
				lf = au.random() % (2 * aIQ + 1) - aIQ;
			aIg(aIf, lf, eY)
		}(max), aIp(aIZ, aIS, jF), aIi(0, 0, !0, a1);
		var ef, eh, a2Y = f0[0],
			eY = max,
			lf = au.random() % (2 * aIQ + 1) - aIQ;
		for (aIg(a2Y, lf, eY), aIp(aIY, aIS, a1), aIi(0, 0, !1, jF), aIq(aIY), aIq(aIZ), aIg(f0[a1 - 1], aIY[a1 - 1], jF), aIi(a1 - 1, 0, !1, jF), aIg(f0[a1 * (jF - 1)], aIZ[jF - 1], a1), aIm(f0[a1 * jF - 1], a1), aIi(0, jF - 1, !0, a1), aIW[a1 -
				1] = aIW[0] = !0, aIX[jF - 1] = aIX[0] = !0, aIr(0, a1, !0), aIr(0, jF, !1), ! function() {
				var aIt, a3n;
				for (;;) {
					if (aIt = function() {
							var a7, aIt = aIT.length - 1;
							for (a7 = aIt - 1; 0 <= a7; a7--) aIU[a7] > aIU[aIt] && (aIt = a7);
							return aIt
						}(), aIU[aIt] < 5) return;
					a3n = aIT[aIt] + bH.dl(aIU[aIt], 2), (aIV[aIt] ? function(ef) {
						var eY, aIw, a7, aCS = 0,
							aIx = 0;
						for (; aIx < jF - 1;) {
							for (a7 = aCS + 1; a7 < jF; a7++)
								if (aIX[a7]) {
									aIx = a7;
									break
								} eY = aIx - aCS + 1, aIg(f0[ef + a1 * aCS], 0 === aCS ? aIY[ef] : aIS[aIw - 1] - aIS[aIw - 2], eY), aIm(f0[aIx * a1 + ef], eY), aIi(ef, aCS, !1, eY), aIw = eY, aCS = aIx
						}
						aIW[ef] = !0
					} : function(eh) {
						var eY, aIw, a7, aCS = 0,
							aIx = 0;
						for (; aIx < a1 - 1;) {
							for (a7 = aCS + 1; a7 < a1; a7++)
								if (aIW[a7]) {
									aIx = a7;
									break
								} eY = aIx - aCS + 1, aIg(f0[eh * a1 + aCS], 0 === aCS ? aIZ[eh] : aIS[aIw - 1] - aIS[aIw - 2], eY), aIm(f0[eh * a1 + aIx], eY), aIi(aCS, eh, !0, eY), aIw = eY, aCS = aIx
						}
						aIX[eh] = !0
					})(a3n), aIr(a3n, aIT[aIt] + aIU[aIt] - a3n, aIV[aIt]), aIU[aIt] = a3n - aIT[aIt] + 1
				}
			}(), ef = 0; ef < a1; ef++)
			if (!aIW[ef])
				for (eh = 0; eh < jF; eh++) aIX[eh] || ! function(ef, eh) {
					var value = f0[eh * a1 + ef - 1] + f0[(eh - 1) * a1 + ef],
						a5a = 2;
					aIW[ef + 1] && (a5a++, value += f0[eh * a1 + ef + 1]);
					aIX[eh + 1] && (a5a++, value += f0[(eh + 1) * a1 + ef]);
					f0[eh * a1 + ef] = bH.dl(value, a5a)
				}(ef, eh)
	}, this.aHd = function() {
		return f0
	}, this.aHL = function() {
		f0 = null
	}
}

function aDu(er, es) {
	return 0 <= er ? bH.dl(er, es) : -bH.dl(-er, es)
}

function jJ(f0) {
	return f0 * f0
}

function a4q(er, es) {
	return es < er ? er : es
}

function a9b(er, es) {
	return er < es ? er : es
}

function a71(er, f0, es) {
	return f0 < er ? er : es < f0 ? es : f0
}

function aIz(f0, eY) {
	for (var et = bH.dl(f0 + 1, 2), a7 = 0; a7 < eY; a7++) et = bH.dl(et + bH.dl(f0, et), 2);
	return et
}

function aFH(f0, eY) {
	return f0 < 1 ? 0 : aIz(f0, eY)
}

function aJ0(m3, m4, s3, a6l, mG, mH, s4, sl) {
	return !(m3 + s3 <= mG || m4 + a6l <= mH || mG + s4 <= m3 || mH + sl <= m4)
}

function aJ1(m3, m4, s3, a6l, mG, mH, s4, sl) {
	return m3 <= mG && m4 <= mH && mG + s4 <= m3 + s3 && mH + sl <= m4 + a6l
}

function vF(f0) {
	return Math.floor(!!f0 * (1 + Math.log2(f0 + .5)))
}

function br() {
	this.dl = function(er, es) {
		return Math.floor((er + .5) / es)
	}, this.aJ2 = function(er, es) {
		return Math.floor(er * (es + .5))
	}, this.sqrt = function(f0) {
		return ~~Math.sqrt(f0 + .5)
	}, this.pow = function(e) {
		return Math.floor(Math.pow(2, e) + .5)
	}, this.p4 = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aJ3 = function(fG, fI, fK) {
		return Math.max(Math.min(fG, fI), fK)
	}, this.aJ4 = function(aJ5, aJ6, ef, eh) {
		ef -= aJ5, aJ5 = eh - aJ6, eh = 0;
		return 0 == ef ? eh = 0 <= aJ5 ? Math.PI : 0 : (eh = Math.atan(aJ5 / ef), eh += 0 < ef ? .5 * Math.PI : 1.5 * Math.PI), eh
	}, this.log2 = function(f0) {
		return Math.floor(!!f0 * (1 + Math.log2(f0 + .5)))
	}, this.log10 = function(f0) {
		return Math.floor(Math.log10(f0 + .5))
	}, this.aJ8 = function(aJ9, aJA, aJB, aJC, aJD) {
		return aJB - aJD < aJ9 && aJ9 < aJB + aJD && aJC - aJD < aJA && aJA < aJC + aJD
	}, this.wF = function(hZ, ha) {
		return hZ * hZ + ha * ha
	}
}

function d6() {
	this.s = new aJE, this.rw = 0;
	var aJF = new Array(30);

	function aJJ() {
		for (var eY = aJF.length, a7 = 0; a7 < eY; a7++) aJF[a7] = null
	}
	this.dU = function() {
		for (var aJG, aJH = document.body.firstChild; aJH;) {
			if (aJG = aJH.nextSibling, document.body.contains(aJH) && ("DIV" === aJH.tagName || "INPUT" === aJH.tagName || "BUTTON" === aJH.tagName)) try {
				document.body.removeChild(aJH)
			} catch (e) {
				console.log("error 2623: " + e)
			}
			aJH = aJG
		}
	}, this.o = function(e0, aJI, a2Y) {
		void 0 === aJI && (aJI = this.rw), bb.dc = !0, 0 === e0 && (0 === aW.zu() ? e0 = 5 : u.v.setState(13)), this.r4(), this.rw === e0 && (aJI = aJF[e0].aJI, aJF[e0] = null), this.rw = e0;
		var kU = aJF[e0];
		if (!kU || 4 === e0 || 7 === e0 || 8 === e0 || 9 === e0 || 10 === e0 || 11 === e0 || 13 === e0 || 15 === e0 || 18 === e0 || 20 <= e0 && e0 <= 28) {
			if (0 === e0) return void aJJ();
			1 === e0 ? kU = new aJK : 2 === e0 ? kU = new aJL : 3 === e0 ? kU = new aJM : 4 === e0 || 9 === e0 || 10 === e0 || 11 === e0 || 13 === e0 ? kU = a2Y : 5 === e0 ? kU = new aJN : 6 === e0 ? kU = new aJO : 7 === e0 ? kU = new aJP(n.s
					.aJQ) : 8 === e0 ? kU = a2Y : 12 === e0 ? kU = new aJR : 14 === e0 ? kU = new aJS : 15 === e0 ? kU = new aJP(n.s.aJT) : 16 === e0 ? kU = new aJU : 17 === e0 ? kU = new aJV : 18 === e0 ? kU = new aJW : 19 === e0 ? kU =
				new aJX : 20 === e0 ? kU = new aJY : 21 === e0 ? kU = new aJZ : 22 === e0 ? kU = new aJa : 23 === e0 ? kU = new aJb : 24 === e0 ? kU = new aJc : 25 === e0 ? kU = new aJd : 26 === e0 ? kU = new aJe : 27 === e0 ? kU = new aJf :
				28 === e0 ? kU = new aJg : 29 === e0 && (kU = new aJh), kU.aJI = aJI, aJF[e0] = kU
		}
		kU.show(a2Y)
	}, this.a04 = function() {
		this.xJ() && this.aJi(this.aDV().aJI)
	}, this.aJi = function(e0) {
		this.xJ() && (aJF[e0] ? (this.r4(), bb.dc = !0, this.rw = e0, aJF[e0].show()) : this.o(e0))
	}, this.r4 = function() {
		this.xJ() && aJF[this.rw].r4()
	}, this.r = function() {
		this.xJ() && (aJF[this.rw].r4(), aJJ(), this.rw = 0, u.v.setState(13))
	}, this.ta = function() {
		var kU;
		this.xJ() && (kU = aJF[this.rw]).ta && kU.ta()
	}, this.resize = function() {
		if (!this.xJ()) return !1;
		aJF[this.rw].resize()
	}, this.gm = function(ef, eh) {
		var kU;
		this.xJ() && (kU = aJF[this.rw]).gm && kU.gm(ef, eh)
	}, this.a0H = function(ef, eh) {
		var kU;
		this.xJ() && (kU = aJF[this.rw]).a0H && kU.a0H(ef, eh)
	}, this.a0f = function() {
		var kU;
		this.xJ() && (kU = aJF[this.rw]).a0f && kU.a0f()
	}, this.a0K = function(kp, kq, deltaY) {
		var kU;
		this.xJ() && (kU = aJF[this.rw]).a0K && kU.a0K(kp, kq, deltaY)
	}, this.a0p = function(code) {
		var kU;
		return !!this.xJ() && ((kU = aJF[this.rw]).a0p && kU.a0p(code), !0)
	}, this.ie = function() {
		var kU;
		this.xJ() && (kU = aJF[this.rw]) && kU.ie && kU.ie()
	}, this.xJ = function() {
		return 0 < this.rw
	}, this.aDV = function() {
		return aJF[this.rw]
	}, this.aBm = function(e0) {
		return aJF[e0]
	}, this.aJj = function() {
		return aJF
	}
}

function aJP(data) {
	var aJk, aJl;
	this.show = function() {
		data.aJm && bE.aKV("account", data.qu), aJk.show(), this.resize()
	}, this.r4 = function() {
		aJk.r4()
	}, this.resize = function() {
		aJk.resize(), aJl.resize()
	}, this.a0p = function(et) {
		2 === et && aJk.tS[0].pp()
	}, aJk = new tL(data.username, [new q("⬅️ " + L(32), function() {
		bE.clear(), n.a04()
	}), new q(data.aJm ? "🔄 " + L(148) : L(149), function() {
		n.o(8, n.aDV().aJI, new rx(25, {
			ry: 0,
			qu: data.qu,
			rv: data.rv
		}))
	}, 0, 0, 1)]), aJl = new pP(aJk.tR, function() {
		var pR = [];
		pR.push(function() {
				var aK2 = new p9,
					qL = (aK2.pC(L(198)), new qM({
						value: data.username,
						e0: -1
					}));
				qL.e.readOnly = !0, aK2.pN(qL), aK2.pN(new rI([new q(L(167), function(e) {
					return b6.pW.a23(qL.e), b6.pW.a24(e), !0
				}).button])), data.aJm || aK2.pE(L(199));
				return aK2
			}()),
			function(pR) {
				var aK2, pF, aAJ, aKN, aKA;
				data.aJm || ((aK2 = new p9).pC(L(200)), (pF = aK2.pE(data.aKM.length + " / 160")).style.textAlign = "center", aAJ = !0, (aKN = new tj(0, 1, function(e) {
					e = e.target.value.length;
					pF.textContent = e + " / 160", 160 < e ? aAJ && (aAJ = !1, aKA.ps(1), aKA.button.style.color = b7.md) : aAJ || (aAJ = !0, aKA.ps(0), aKA.button.style.color = b7.nZ)
				})).e.rows = 6, aKN.e.style.fontSize = "1em", aKN.tq(data.aKM), aK2.pN(aKN), aKA = new q(L(201), function() {
					if (!aAJ) return !0;
					n.o(8, n.aDV().aJI, new rx(29, {
						ry: 1,
						pD: aKN.tr().substring(0, 160)
					}))
				}, 0, 0, 1), aK2.pN(new rI([aKA.button])), 0 !== data.aKO && (aK2.pN(new rI([new q(L(1 === data.aKO ? 203 : 204), function() {
					n.o(8, n.aDV().aJI, new rx(29, {
						ry: 0,
						pD: ""
					}))
				}, 0, 0, 1).button])), aK2.pE(1 === data.aKO ? L(205, [data.aKQ - 1]) : L(206, [data.aKQ - 1]))), aK2.pE(L(202, [data.aKP])), pR.push(aK2))
			}(pR),
			function(pR) {
				var aK2;
				data.aJm && 0 !== data.aKO && ((aK2 = new p9).pC(L(200)), aK2.pG(data.aKM), aK2.pN(new rI([new q(L(207), function(e) {
					return aw.s.aCc(0) && (b6.pW.a24(e), aw.aK8.aKL({
						ry: 5,
						qu: data.qu,
						rv: data.rv
					})), !0
				}, 0, 0, 1).button])), pR.push(aK2))
			}(pR), pR.push(function() {
				var aK2 = new p9,
					aK3 = (aK2.pC(L(150)), [L(151), L(152), L(153), L(154), L(155)]),
					dz = data.aK4;
				aK2.pI(L(156) + b6.zM.a2n(data.uc, .01, 2) + "<br>" + L(157) + (dz + 1) + " / " + data.ub + "<br>" + L(158) + aK3[dz < 10 ? 0 : dz < 50 ? 1 : dz < 200 ? 2 : dz < 1e3 ? 3 : 4]), data.aJm || (aK2.pE(L(159)), aK2.pE(L(160)),
					aK2.pE(L(161)));
				return aK2
			}()), data.aJm && pR.push(function() {
				var aK2 = new p9,
					qL = (aK2.pC(L(162)), new qM(bf.dp.data[147], 1, void 0, function(e) {
						aK5(e.target.value)
					})),
					aK6 = (aK2.pN(qL), new q(L(14), function(e) {
						return qL.e.readOnly && aw.s.aCc(0) && (b6.pW.a24(e), aK7(), aw.aK8.aK9({
							ry: 0,
							qu: data.qu,
							rv: data.rv,
							value: bH.p4(Math.floor(100 * bf.dp.data[147].value), 0, 4294967295)
						})), !0
					}, 1)),
					aKA = new q(L(163), function(e) {
						return e.textContent === L(163) ? (e.textContent = L(164), qL.e.readOnly = !0, aK6.ps(0), aK6.button.style.color = b7.nZ, bf.rF.rG(147, qL.e.value), aK5(bf.dp.data[147].value)) : aK7(), !0
					}),
					pF = (aK2.pN(new rI([aKA.button])), aK2.pE()),
					aK5 = function(f0) {
						f0 = isNaN(f0) ? 0 : Number(f0);
						var f0 = Math.max(f0, (data.aKB + 1) / 100),
							aKC = Math.floor(100 * Math.max(1e-4 * f0, data.aKB / 100)) / 100;
						pF.textContent = L(165, [f0.toFixed(2), bf.dp.data[105].value, aKC.toFixed(2), data.qu, (f0 - aKC).toFixed(2)])
					},
					aK7 = function() {
						aKA.button.textContent = L(163), qL.e.readOnly = !1, aK6.ps(1), aK6.button.style.color = b7.md
					};
				return aK5(bf.dp.data[147].value), aK2.pN(new rI([aK6.button])), aK2
			}());
		pR.push(function() {
			var aK2 = new p9,
				qL = (aK2.pC(L(166)), new qM({
					value: data.qu,
					e0: -1
				}));
			return qL.e.readOnly = !0, aK2.pN(qL), aK2.pN(new rI([new q(L(167), function(e) {
				return b6.pW.a23(qL.e), b6.pW.a24(e), !0
			}).button])), aK2
		}()), data.aJm || (pR.push(function() {
			var aK2 = new p9,
				aKD = (aK2.pC(L(168)), new qM(bf.dp.data[106]));
			return aKD.e.readOnly = !0, aKD.e.type = "password", aK2.pN(aKD), aK2.pN(new rI([new q(L(169), function(e) {
				return e.textContent === L(169) ? (e.textContent = L(170), aKD.e.type = "text") : (e.textContent = L(169), aKD.e.type = "password"), !0
			}).button, new q(L(167), function(e) {
				return b6.pW.a23(aKD.e), b6.pW.a24(e), !0
			}).button])), aK2.pN(new rI([new q(L(171), function() {
				n.o(8, n.aDV().aJI, new rx(15))
			}).button])), aK2.pC(L(172), "0.8em"), aK2.pE(L(173)), aK2.pE(L(174)), aK2.pE(L(175)), aK2
		}()), pR.push(function() {
			var aK2 = new p9;
			return aK2.pC(L(176)), aK2.pN(new rI([new q(L(177), function() {
				n.o(6, n.aDV().aJI)
			}).button])), aK2.pN(new rI([new q(L(178), function() {
				bf.rF.rG(105, ""), n.o(8, n.aDV().aJI, new rx(18))
			}).button])), aK2.pN(new rI([new q(L(179) + bf.dp.data[105].value, function() {
				n.o(4, 0, new p(L(180), L(181), !0, [new q("⬅️ " + L(32), function() {
					n.o(7, n.aBm(7).aJI)
				})]))
			}, b7.nI).button])), aK2
		}()), pR.push(function() {
			function aKF(e0) {
				for (var a7 = 0; a7 < 2; a7++) aKE[a7].ps(0 === e0 ? b7.mp : 0 === a7 ? b7.nI : b7.n0)
			}
			var pL, aKE, aK2 = new p9;
			aK2.pC(L(182)), aK2.pE(L(183)), bf.s.uM();
			return aKE = [new q(L(184), function() {
				var e0 = Math.min(bf.dp.data[117].value, pL.pM.length - 1);
				if (!(e0 < 1)) {
					pL.pM[e0].remove(), pL.pM.splice(e0, 1);
					for (var a7 = e0; a7 < pL.pM.length; a7++) pL.pM[a7].name = "" + a7;
					bf.s.uP(e0), e0 = bf.dp.data[117].value, pL.pM[e0].textContent = pL.pM[e0].textContent.replace("⚪", "🟢"), aKF(e0)
				}
			}, b7.mp), new q(L(185), function() {
				var e0 = Math.min(bf.dp.data[117].value, pL.pM.length - 1);
				e0 < 1 || (e0 = bf.s.uQ(e0), bf.rF.rG(105, e0.qu), bf.rF.rG(106, e0.password), n.o(8, n.aDV().aJI, new rx(18)))
			}, b7.mp)], (pL = new tG(bf.dp.data[117], aKF)).pM[0].style.marginTop = "0.5em", aK2.pK(pL), aK2.pN(new rI([aKE[1].button])), aK2.pN(new rI([aKE[0].button])), aK2
		}()));
		return pR.push(function() {
				var aK2 = new p9,
					aK3 = (aK2.pC(L(189)), [L(190), L(191), L(192), L(193)]),
					dz = data.aKG;
				return aK2.pI(L(194) + (data.aKH / 100).toFixed(2) + "<br>" + L(157) + (dz + 1) + " / " + data.ub + "<br>" + L(158) + aK3[dz < 10 ? 0 : dz < 50 ? 1 : dz < 200 ? 2 : 3]), aK2
			}()), pR.push(function() {
				var aK2 = new p9;
				return aK2.pC(L(186)), aK2.pI(L(187) + b6.zM.a2n(data.uY, .1, 1) + "<br>" + L(157) + (data.uZ + 1) + " / " + data.ub + "<br>" + L(188) + data.ua), aK2
			}()),
			function(pR) {
				var aK2 = new p9,
					zT = data.uf,
					aKR = (aK2.pC(L(208)), aK2.pI(L(209) + (zT ? "[" + data.ud + "]" : "-")), aK2.pI(L(210) + b6.zM.a2n(zT, .001, 2)), aK2.pI(L(157) + (data.uh + 1) + " / " + data.ub), data.ui),
					aKS = (aK2.pI(L(211) + b6.zM.a2n(aKR, .01, 2)), data.uk);
				aK2.pI(L(212) + aKS), aK2.pI(L(213) + b6.zM.a2n(aKR / Math.max(aKS, 1), .01, 2)), zT = data.ug, aK2.pC(L(214), "0.8em"), aK2.pI("Clan: " + (zT ? "[" + data.ue + "]" : "-")), aK2.pI(L(210) + b6.zM.a2n(zT, .001, 2)), aKR = data
					.uj, aK2.pI(L(211) + b6.zM.a2n(aKR, .01, 2)), aKS = data.ul, aK2.pI(L(212) + aKS), aK2.pI(L(213) + b6.zM.a2n(aKR / Math.max(aKS, 1), .01, 2)), pR.push(aK2)
			}(pR),
			function(pR) {
				var aK2 = new p9;
				aK2.pC(L(215)), aK2.pI(L(194) + data.aKT + "<br>" + L(158) + (data.aKU.length ? L(216, [data.aKU]) : L(217))), data.aJm && (aK2.pN(new rI([new q(L(218), function(e) {
					return aw.s.aCc(0) && (b6.pW.a24(e), aw.aK8.aKL({
						ry: 4,
						qu: data.qu,
						rv: data.rv
					})), !0
				}, 0, 0, 1).button])), aK2.pE(L(219)), aK2.pE(L(220)));
				pR.push(aK2)
			}(pR), pR.push(function() {
				var aK2 = new p9;
				if (aK2.pC(L(195)), aK2.pI(L(196) + data.aKI + "<br>" + L(157) + (data.aKJ + 1) + " / " + data.ub + "<br>" + L(158) + bl.e2(data.aKJ)), data.aJm) {
					var qL = new qM(bf.dp.data[157], 1, void 0, function(e) {
							aK5(e.target.value)
						}),
						aKA = (qL.e.style.marginTop = "0.6em", aK2.pN(qL), new q(L(163), function(e) {
							return e.textContent === L(163) ? (e.textContent = L(164), qL.e.readOnly = !0, aKK[0].ps(0), aKK[1].ps(0), aKK[0].button.style.color = b7.nZ, aKK[1].button.style.color = b7.nZ, bf.rF.rG(157, qL.e
								.value), aK5(bf.dp.data[157].value)) : aK7(), !0
						})),
						aKK = (aK2.pN(new rI([aKA.button])), [new q("−", function(e) {
							return qL.e.readOnly && aw.s.aCc(0) && (b6.pW.a24(e), aK7(), aw.aK8.aKL({
								ry: 7,
								qu: data.qu,
								rv: bH.p4(bf.dp.data[157].value, 2, 32767)
							})), !0
						}, 1), new q("+", function(e) {
							return qL.e.readOnly && aw.s.aCc(0) && (b6.pW.a24(e), aK7(), aw.aK8.aKL({
								ry: 6,
								qu: data.qu,
								rv: bH.p4(bf.dp.data[157].value, 2, 32767)
							})), !0
						}, 1)]),
						pF = aK2.pE(),
						aK5 = function(f0) {
							f0 = isNaN(f0) ? 0 : Number(f0), f0 = Math.floor(bH.p4(f0, 3, 32767)), pF.textContent = L(197, [f0 - 1, f0, bf.dp.data[105].value])
						};
					aK2.pN(new rI([aKK[0].button, aKK[1].button]));
					for (var a7 = 0; a7 < 2; a7++) aKK[a7].button.style.fontSize = "1.6em";
					var aK7 = function() {
						aKA.button.textContent = L(163), qL.e.readOnly = !1, aKK[0].ps(1), aKK[1].ps(1), aKK[0].button.style.color = b7.md, aKK[1].button.style.color = b7.md
					};
					aK5(bf.dp.data[157].value)
				}
				return aK2
			}()), pR
	}())
}

function aJa() {
	var aKW, aKX, aKY, pR;

	function aKZ() {
		aKb(), 2 !== a9.data.aIncomeType && (a9.data.aIncomeData = null), n.aJj()[19] = null, n.a04()
	}

	function aKb() {
		2 === a9.data.aIncomeType ? (b6.pg.a1S(aKY.tr(), a9.data.aIncomeData, 255), b6.pg.max(a9.data.aIncomeData) || (a9.data.aIncomeType = 0)) : 1 !== a9.data.aIncomeType || a9.data.aIncomeValue || (a9.data.aIncomeType = 0)
	}
	this.show = function() {
		aKW.show(), this.resize()
	}, this.r4 = function() {
		aKW.r4()
	}, this.resize = function() {
		aKW.resize(), aKX.resize()
	}, this.a0p = function(et) {
		2 === et && aKW.tS[0].pp()
	}, aKW = new tL(L(221), [new q("⬅️ " + L(32), aKZ)]), aKX = new pP(aKW.tR, (function(pR) {
		var aK2 = new p9;
		aK2.pC(L(222)), aK2.pK(new tG({
			tK: [L(223), L(224), L(225)],
			value: a9.data.aIncomeType
		}, function(e0) {
			aKb(), 2 !== e0 || a9.data.aIncomeData || (a9.data.aIncomeData = new Uint8Array(a9.eV)), a9.data.aIncomeType = e0, n.o(22)
		})), pR.push(aK2)
	}(pR = []), function(pR) {
		var aK2;
		1 === a9.data.aIncomeType && ((aK2 = new p9).pC("Value"), aK2.pN(new qM({
			e0: -1,
			value: a9.data.aIncomeValue
		}, 1, 0, function(e) {
			var value = bH.p4(Math.floor(e.target.value), 0, 255);
			e.target.value = a9.data.aIncomeValue = value
		})), pR.push(aK2))
	}(pR), function(pR) {
		var aK2;
		2 === a9.data.aIncomeType && ((aK2 = new p9).pC("Data"), (aKY = new tj(0, 1, 0, 1)).tq(b6.zM.a2t(a9.data.aIncomeData, 4)), aK2.pN(aKY), pR.push(aK2))
	}(pR), pR))
}

function aJd() {
	var aKW, aKX, aKY;

	function aKZ() {
		aKb(), 3 !== a9.data.botDifficultyType || b6.pg.a1G(a9.data.botDifficultyData) || (a9.data.botDifficultyType = 0), 3 !== a9.data.botDifficultyType && (a9.data.botDifficultyData = null), n.aJj()[19] = null, n.a04()
	}

	function aKb() {
		3 === a9.data.botDifficultyType && b6.pg.a1S(aKY.tr(), a9.data.botDifficultyData, aA.jx.length - 1)
	}

	function aKg(pR, e0) {
		var aK2 = new p9,
			value = (aK2.pC(e0 < 0 ? L(57) : L(56) + " " + bc.z7[e0 % 9]), 0 <= e0 && (aK2.pI(L(228) + ": " + a9.data.teamPlayerCount[e0]).style.marginBottom = "1em"), e0 < 0 ? a9.data.botDifficultyValue : a9.data.botDifficultyTeam[e0]);
		aK2.pK(new tG({
			tK: aA.jx,
			value: value
		}, function(hJ) {
			e0 < 0 ? a9.data.botDifficultyValue = hJ : a9.data.botDifficultyTeam[e0] = hJ
		})), pR.push(aK2)
	}
	this.show = function() {
		aKW.show(), this.resize()
	}, this.r4 = function() {
		aKW.r4()
	}, this.resize = function() {
		aKW.resize(), aKX.resize()
	}, this.a0p = function(et) {
		2 === et && aKW.tS[0].pp()
	}, aKW = new tL(L(57), [new q("⬅️ " + L(32), aKZ)]), aKX = new pP(aKW.tR, function() {
		var pR = [];
		if (function(pR) {
				var aK2 = new p9,
					tK = (aK2.pC(L(222)), [L(224), L(226), L(227), L(225)]),
					value = a9.data.botDifficultyType;
				0 === a9.data.gameMode && (value = Math.min(value, 2), tK.splice(2, 1));
				aK2.pK(new tG({
					tK: tK,
					value: value
				}, function(e0) {
					aKb(), a9.data.botDifficultyType = e0, 0 === a9.data.gameMode && 2 === e0 && (a9.data.botDifficultyType = 3), 3 !== a9.data.botDifficultyType || a9.data.botDifficultyData || (a9.data.botDifficultyData =
						new Uint8Array(a9.eV)), 2 !== a9.data.botDifficultyType || a9.data.botDifficultyTeam || (a9.data.botDifficultyTeam = new Uint8Array(9)), n.o(25)
				})), pR.push(aK2)
			}(pR), 0 === a9.data.botDifficultyType) aKg(pR, -1);
		else if (2 === a9.data.botDifficultyType)
			for (var a7 = 0; a7 < a9.data.teamPlayerCount.length; a7++) a9.data.teamPlayerCount[a7] && aKg(pR, a7);
		else 3 === a9.data.botDifficultyType && ! function(pR) {
			var aK2 = new p9;
			aK2.pC("Data"), (aKY = new tj(0, 1, 0, 1)).tq(b6.zM.a2t(a9.data.botDifficultyData, 8)), aK2.pN(aKY), pR.push(aK2)
		}(pR);
		return pR
	}())
}

function aKh(data) {
	var aJk, aKi, aKj, aKk, aKl, aKm, aKn, colors, aKo, aKp, aKq = 0,
		aKr = 0,
		aKs = !1,
		aKt = !1,
		aKu = [1, 5, 60, 240, 1440, 10080, 43200];

	function aLM(kp, kq) {
		! function(kp, kq) {
			return aKi < kp && kp < aKi + aKk && aKj < kq && kq < aKj + aKl
		}(aKq = kp, aKr = kq) ? (aKs && (bb.dc = !0), aKs = !1) : (aKs = !0, bb.dc = !0)
	}
	this.show = function() {
		aKt = bf.dp.data[127].value, aJk.show(), this.resize()
	}, this.r4 = function() {
		aJk.r4()
	}, this.resize = function() {
		aJk.resize();
		var et = at.pc,
			tZ = aJk.tW(),
			aL3 = et * tZ.tY,
			et = et * tZ.r7;
		aKm = b6.pW.sM(.06), aKn = b6.pW.sM(.04), aKi = b6.pW.sM(.06), aKj = et + aKm, aKk = at.a1 - aKi - aKn, aKl = aL3 + et - aKj - aKn
	}, this.ta = function() {
		aJk.ta(),
			function() {
				var a7, aL0, g1, ef, er, g = data.data,
					aL7 = 1,
					aL8 = .125,
					aL9 = aKt ? 65536 : 0;
				for (a7 = 0; a7 < g.length; a7++)
					for (aL0 = g[a7].aL0, g1 = aL0.length, aL7 = Math.max(g1, aL7), er = 0; er < g1; er++) aL8 = Math.max(aL0[er], aL8), aL9 = Math.min(aL0[er], aL9);
				var m4 = aKj + aKl,
					wo = aKl / (aL8 - aL9),
					wn = 1 / (aL7 - 1);
				for (tb.lineWidth = bY.xm, a7 = 0; a7 < g.length; a7++) {
					for (aL0 = g[a7].aL0, g1 = aL0.length, ef = aKi, tb.beginPath(), tb.moveTo(ef + aKk, m4 - wo * (aL0[g1 - 1] - aL9)), er = g1 - 2; 0 <= er; er--) tb.lineTo(ef + wn * er * aKk, m4 - wo * (aL0[er] - aL9));
					tb.strokeStyle = colors[a7], tb.stroke()
				}(function(aL9, aL8, m4, wo) {
					tb.font = b6.pW.rY(0, .25 * aKi), b6.pW.textBaseline(tb, 1), b6.pW.textAlign(tb, 2), tb.fillStyle = colors[0];
					for (var ef = .92 * aKi, a7 = 0; a7 < 3; a7++) {
						var f0 = aL9 + a7 * (aL8 - aL9) / 2;
						tb.fillText((f0 / 1e3).toFixed(3), ef, m4 - wo * (f0 - aL9))
					}
				})(aL9, aL8, m4, wo),
				function(aL7) {
					var eh = aKj + aKl + .15 * aKn;
					tb.font = b6.pW.rY(0, Math.min(.4 * aKn, .028 * at.a1)), b6.pW.textBaseline(tb, 0), b6.pW.textAlign(tb, 2), tb.fillStyle = colors[0], tb.fillText(b6.a17.a1s(aKo), aKi + aKk, eh), b6.pW.textAlign(tb, 0), tb.fillText(b6.a17.a1s(
						new Date(aKp.getTime() - 6e4 * (aL7 - 1) * aKu[data.aKz])), aKi, eh)
				}(aL7),
				function(aL7, aL9, aL8) {
					if (aKs && !(aL7 < 2)) {
						for (var a6t, e0 = (aKq - aKi) / aKk * (aL7 - 1), l2 = Math.floor(e0), l3 = Math.floor(1 + e0), aLC = e0 - l2, aLD = 1e5, aLE = -1, aLF = -1, aLG = aL8 - (aL8 - aL9) * (aKr - aKj) / aKl, g = data.data, a7 = 0; a7 < g
							.length; a7++) {
							var aHw, aL0 = g[a7].aL0;
							aL0.length <= l3 || (aL0 = aL0[l2] + aLC * (aL0[l3] - aL0[l2]), (aHw = Math.abs(aLG - aL0)) < aLD && (aLD = aHw, aLE = a7, aLF = aL0))
						} - 1 !== aLE && (aL8 = aKj + aKl - (aLF - aL9) / (aL8 - aL9) * aKl, tb.lineWidth = .5 * bY.xm, tb.strokeStyle = colors[aLE], tb.beginPath(), tb.moveTo(aKi, aL8), tb.lineTo(aKq, aL8), tb.lineTo(aKq, aKj + aKl), tb
						.stroke(), tb.beginPath(), tb.arc(aKq, aL8, .1 * aKi, 0, 2 * Math.PI), tb.fillStyle = colors[aLE], tb.fill(), aL9 = aKj + aKl + .15 * aKn, b6.pW.textAlign(tb, 1), a6t = aL7 - 2 < e0 ? (a6t = aKp.getTime() - 6e4 * aKu[
								data.aKz], new Date(a6t + (e0 - (aL7 - 2)) * (aKo.getTime() - a6t))) : new Date(aKp.getTime() - 6e4 * (aL7 - e0 - 1) * aKu[data.aKz]), aL7 = b6.a17.a1s(a6t), e0 = b6.pW.measureText(aL7), a6t = bH.p4(aKq, aKi +
								.5 * e0, aKi + aKk - .5 * e0), tb.fillStyle = b6.color.mV(70, 50, 20), tb.fillRect(a6t - .52 * e0, aKj + aKl, 1.04 * e0, .55 * aKn), tb.fillStyle = colors[0], tb.fillText(aL7, a6t, aL9), tb.font = b6.pW.rY(0,
								.25 * aKi), b6.pW.textBaseline(tb, 1), b6.pW.textAlign(tb, 2), a6t = .92 * aKi, aL7 = (aLF / 1e3).toFixed(3), e0 = b6.pW.measureText(aL7), aL9 = a6t - 1.04 * e0, tb.fillStyle = b6.color.mV(70, 50, 20), tb
							.fillRect(aL9, aL8 - .1625 * aKi, aKi - aL9, .275 * aKi), tb.fillStyle = colors[aLE], tb.fillText(aL7, a6t, aL8))
					}
				}(aL7, aL9, aL8)
			}(), tb.lineWidth = bY.xm, tb.strokeStyle = b7.md, tb.beginPath(), tb.moveTo(aKi, aKj), tb.lineTo(aKi, aKj + aKl), tb.lineTo(aKi + aKk, aKj + aKl), tb.stroke();
		var a7, fontSize = .5 * aKm,
			g = (tb.font = b6.pW.rY(0, fontSize), b6.pW.textBaseline(tb, 1), b6.pW.textAlign(tb, 0), data.data),
			eY = g.length,
			eh = aKj - .5 * aKm,
			pD = "";
		for (a7 = 0; a7 < eY; a7++) pD += g[a7].name + "  ";
		pD = pD.trim();
		var aLJ = b6.pW.measureText(pD),
			ef = .5 * (at.a1 - aLJ);
		for (aLJ > at.a1 && (ef = 0, tb.font = b6.pW.rY(0, at.a1 / aLJ * fontSize)), a7 = 0; a7 < eY; a7++) tb.fillStyle = colors[a7], tb.fillText(g[a7].name, ef, eh), ef += b6.pW.measureText(g[a7].name + "  ")
	}, this.gm = function(kp, kq) {
		aLM(kp, kq)
	}, this.a0H = function(kp, kq) {
		aLM(kp, kq)
	}, this.a0p = function(et) {
		2 === et && aJk.tS[0].pp()
	};
	var a7, dk, a1q, hJ, eb = data.data,
		eY = eb.length,
		max = 1;
	for (a7 = 0; a7 < eY; a7++) max = Math.max(max, eb[a7].aL0.length);
	for (a7 = 0; a7 < eY; a7++)
		for (; eb[a7].aL0.length < max;) eb[a7].aL0.unshift(0);
	dk = new Date, a1q = 6e4 * dk.getTimezoneOffset(), hJ = dk.getTime() - a1q, aKo = new Date(hJ), 6 === data.aKz ? function(dk, a1q) {
		var aL2 = dk.getUTCFullYear(),
			dk = dk.getUTCMonth() + 1;
		aKp = dk < 12 ? new Date(Date.UTC(aL2, dk) - a1q) : new Date(Date.UTC(aL2 + 1, 0) - a1q)
	}(dk, a1q) : (a1q = 6e4 * aKu[data.aKz], aKp = data.aKz <= 4 ? new Date(hJ + a1q - dk.getTime() % a1q) : new Date(hJ + a1q - (dk.getTime() + 2592e5) % a1q)), hJ = b6.color, colors = [b7.md, hJ.mV(255, 0, 0), hJ.mV(0, 200, 0), hJ.mV(80, 80,
		255), hJ.mV(255, 255, 0), hJ.mV(255, 0, 255), hJ.mV(0, 255, 255), hJ.mV(255, 140, 0), hJ.mV(128, 128, 128), hJ.mV(0, 255, 140)], aJk = new tL(L(229) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.aKz] + ", " + b6.a17.a1p(aKo), [
		new q("⬅️ " + L(32), function() {
			n.s.aAP()
		}), new q(L(230), function() {
			n.o(14)
		})
	], !1)
}

function aJS() {
	var aJk, aJl, pR;
	this.show = function() {
		aJk.show(), this.resize()
	}, this.r4 = function() {
		aJk.r4()
	}, this.resize = function() {
		aJk.resize(), aJl.resize()
	}, this.a0p = function(et) {
		2 === et && aJk.tS[0].pp()
	}, aJk = new tL(L(231), [new q("⬅️ " + L(32), function() {
		n.aJi(13)
	})]), aJl = new pP(aJk.tR, ((pR = []).push(function() {
		var aK2 = new p9,
			aKA = (aK2.pC(L(232)), aK2.pE(L(233)), new q(L(234), function() {
				bf.rF.rG(130, 0), n.s.aLR()
			}, 0, 0, 1)),
			qL = new qM(bf.dp.data[126], 0, function() {
				aKA.button.click()
			});
		return aK2.pN(qL), qL.e.placeholder = "a,b,c", qL.e.style.marginTop = "0.5em", aK2.pN(new rI([aKA.button])), aK2
	}()), pR.push(function() {
		var aK2 = new p9,
			aKA = new q(L(234), function() {
				bf.rF.rG(130, 1), n.s.aLR()
			}, 0, 0, 1),
			aLS = new qM(bf.dp.data[129], 1, function() {
				aLS.e.focus()
			}),
			aLT = new qM(bf.dp.data[128], 1, function() {
				aKA.button.click()
			});
		return aK2.pC(L(235)), aK2.pN(aLT), aLT.e.style.marginBottom = "0.5em", aK2.pC(L(236)), aK2.pN(aLS), aK2.pN(new rI([aKA.button])), aK2
	}()), pR.push(function() {
		var aK2 = new p9;
		return aK2.pC(L(237)), bf.dp.data[125].tK = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], aK2.pK(new tG(bf.dp.data[125])), aK2
	}()), pR.push(function() {
		var aK2 = new p9;
		return aK2.pC(L(238)), aK2.pN(new rC(bf.dp.data[127], L(239))), aK2
	}()), pR))
}

function aJR() {
	var aJk, aLU, aKk, aLV, aLW, aLX, colors = [0, 0, 0],
		aLY = -1;

	function aLb(a7) {
		var aLc = aLU.eh + a7 * (bY.gap + aLX);
		tb.fillStyle = "rgb(" + (0 === a7 ? 150 : 2 === a7 ? 30 : 0) + "," + (1 === a7 ? 130 : 2 === a7 ? 30 : 0) + "," + (2 === a7 ? 220 : 0) + ")", tb.fillRect(aLV, aLc, colors[a7] * aLW, aLX), tb.strokeStyle = b7.md, tb.strokeRect(aLV, aLc, aLW,
			aLX), tb.fillStyle = b7.md, tb.font = b6.pW.rY(0, .32 * aLX), b6.pW.textBaseline(tb, 1), b6.pW.textAlign(tb, 0), tb.fillText(L(0 === a7 ? 242 : 1 === a7 ? 243 : 244) + aLZ(a7), aLV + bY.gap, aLc + .53 * aLX)
	}

	function aLZ(a7, aLd) {
		return aLd = aLd || 256, bH.p4(Math.floor(aLd * colors[a7]), 0, aLd - 1)
	}

	function a0l(kp, kq) {
		return !(kp < aLV || kq < aLU.eh || kp > aLU.ef + aLU.a1 || kq > aLU.eh + aLU.jF)
	}
	this.show = function() {
		var f0 = bf.dp.data[121].value;
		colors[0] = (f0 >> 12) / 63, colors[1] = (f0 >> 6 & 63) / 63, colors[2] = (63 & f0) / 63, aJk.show(), this.resize()
	}, this.r4 = function() {
		bf.rF.rG(121, (aLZ(0, 64) << 12) + (aLZ(1, 64) << 6) + aLZ(2, 64)), aJk.r4()
	}, this.resize = function() {
		aJk.resize(), aLU.resize();
		var et = at.pc,
			tZ = aJk.tW(),
			aLa = (aLU.eh = Math.max(aLU.eh, et * tZ.r7 + bY.gap), et * tZ.tY - 2 * bY.gap);
		aLU.jF = Math.min(aLU.jF, aLa), aLU.a1 = 2 * aLU.jF, aLU.eh = et * tZ.r7 + .5 * (et * tZ.tY - aLU.jF), aLU.ef = .5 * (at.a1 - aLU.a1), aKk = .25 * aLU.a1, aLV = aLU.ef + aKk + bY.gap, aLW = aLU.a1 - aKk - bY.gap, aLX = (aLU.jF - 2 * bY
			.gap) / 3
	}, this.ta = function() {
		var dz, sL, es;
		aJk.ta(), tb.lineWidth = bY.xm, dz = aLZ(0), sL = aLZ(1), es = aLZ(2), tb.fillStyle = "rgb(" + dz + "," + sL + "," + es + ")", tb.fillRect(aLU.ef, aLU.eh, aKk, aLU.jF), tb.strokeStyle = b7.md, tb.strokeRect(aLU.ef, aLU.eh, aKk, aLU.jF),
			tb.fillStyle = dz + sL + es < 306 && sL < 150 ? b7.md : b7.mU, b6.pW.textBaseline(tb, 1), b6.pW.textAlign(tb, 1), tb.font = b6.pW.rY(0, .1 * aLU.jF), tb.rotate(-Math.PI / 2), tb.fillText(L(241), -aLU.eh - .5 * aLU.jF, aLU.ef + .5 *
				aKk), tb.setTransform(1, 0, 0, 1, 0, 0), aLb(0), aLb(1), aLb(2)
	}, this.gm = function(kp, kq) {
		a0l(kp, kq) && (aLY = bH.p4(Math.floor((kq - aLU.eh) / (aLX + .75 * bY.gap)), 0, 2), colors[aLY] = bH.p4((kp - aLV) / aLW, 0, 1), bb.dc = !0)
	}, this.a0H = function(kp) {
		-1 !== aLY && (colors[aLY] = bH.p4((kp - aLV) / aLW, 0, 1), bb.dc = !0)
	}, this.a0K = function(kp, kq, deltaY) {
		a0l(kp, kq) && (kp = bH.p4(Math.floor((kq - aLU.eh) / (aLX + .75 * bY.gap)), 0, 2), colors[kp] = bH.p4(colors[kp] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), bb.dc = !0)
	}, this.a0f = function() {
		0 <= aLY && (aLY = -1, bb.dc = !0)
	}, this.a0p = function(et) {
		2 === et && aJk.tS[0].pp()
	}, aJk = new tL(L(240), [new q("⬅️ " + L(32), function() {
		n.s.aAP()
	})], !1), aLU = new q9([.5, .25], [.5, .5], 1)
}

function aJZ() {
	var aKW, aKX, aKY, q7;

	function aKZ() {
		aKb(), 1 !== a9.data.colorsType && (a9.data.colorsData = null), n.aJj()[19] = null, n.a04()
	}

	function aLe() {
		aKb(), n.o(21)
	}

	function aKb() {
		1 === a9.data.gameMode ? a9.a3A.a3E() : 0 === a9.data.gameMode && 1 === a9.data.colorsType && b6.pg.a1S(aKY.tr(), a9.data.colorsData, 262143)
	}
	this.show = function() {
		aKW.show(), this.resize()
	}, this.r4 = function() {
		aKW.r4()
	}, this.resize = function() {
		aKW.resize(), aKX.resize()
	}, this.a0p = function(et) {
		2 === et && aKW.tS[0].pp()
	}, q7 = [new q("⬅️ " + L(32), aKZ)], 1 === a9.data.gameMode && q7.push(new q(L(245), aLe, 1, 1)), aKW = new tL(L(246), q7), aKX = new pP(aKW.tR, (function(pR) {
		var aK2 = new p9;
		aK2.pC(L(222)), 0 === a9.data.gameMode && (aK2.pK(new tG({
			tK: [L(247), L(225)],
			value: a9.data.colorsType
		}, function(e0) {
			aKb(), a9.data.colorsType = e0, 1 !== a9.data.colorsType || a9.data.colorsData && a9.data.colorsData.length === a9.eV || (a9.data.colorsData = new Uint32Array(a9.eV)), n.o(21)
		})), aK2.pN(new rS));
		aK2.pN(new rC({
			value: a9.data.selectableColor
		}, L(248), function(value) {
			a9.data.selectableColor = value
		})), pR.push(aK2)
	}(q7 = []), 0 === a9.data.gameMode ? 1 === a9.data.colorsType && function(pR) {
		var aK2 = new p9;
		aK2.pC("Data"), (aKY = new tj(0, 1, 0, 1)).tq(b6.zM.a2t(a9.data.colorsData, 1)), aK2.pN(aKY), pR.push(aK2)
	}(q7) : (a9.a3A.a3E(), q7.push(function() {
		var aK2 = new p9;
		aK2.pC(L(228));
		for (var a7 = 0; a7 < bc.z7.length; a7++) {
			var hJ = (a7 + 1) % bc.z7.length,
				e = aK2.pI((0 == hJ ? "" : "Team ") + bc.z7[hJ]);
			a7 && (e.style.marginTop = "0.5em"), aK2.pN(new qM({
				e0: -1,
				value: a9.data.teamPlayerCount[hJ]
			}, 1, 0, function(e) {
				aKW.tS[1].ps(0);
				var playerCount = bH.p4(Math.floor(e.target.value), 0, 512);
				e.target.value = playerCount, a9.data.teamPlayerCount[e.target.aLg] = playerCount
			})).e.aLg = hJ
		}
		return aK2
	}())), q7))
}

function rx(id, a2Y, aLh) {
	var aJk, aLi;

	function aLn() {
		aLi.pS.innerHTML += "<br>" + L(251)
	}

	function aLm() {
		b9.a3(48), b9.a4(24, Math.floor(bH.pow(24) * Math.random())), b9.a4(24, Math.floor(bH.pow(24) * Math.random())), bD.dU(b9.a8), bf.rF.rG(110, bB.rz.s0(bB.rz.s1(8))), aw.aK8.aM1()
	}
	this.aLj = !0, this.aLk = id, this.show = function() {
		aJk.show(), this.resize(), 15 === id ? (aw.s.aLl(id) ? aLm : aLn)() : 16 === id ? aw.s.aLl(id) ? aw.aAM.aLo(2) : aLn() : 17 === id ? aw.s.aLl(id) ? aw.aAM.aLo(3) : aLn() : 18 === id ? (aw.s.close(0, 3253), aw.s.aCi(0, id), aLn()) : 21 ===
			id ? aw.s.aLl(id) ? aw.aLp.aLq(a2Y.sG, a2Y.sH, a2Y.sI) : aLn() : 22 === id ? aw.s.aLl(id) ? aw.aLp.aLr(a2Y.sG, a2Y.aLs, a2Y.aLt) : aLn() : 23 === id ? aw.s.aLl(id) ? aw.aLp.aLu(a2Y.aKz, a2Y.zO) : aLn() : 24 === id ? aw.s.aLl(id) ? aw
			.aLp.aLv(a2Y.aKz, a2Y.sH, a2Y.sI) : aLn() : 25 === id ? aw.s.aLl(id) ? aw.aK8.aKL(a2Y) : aLn() : 28 === id ? aw.s.aLl(id) ? aw.aLp.aLw(a2Y.sG, a2Y.aLs, a2Y.aLt) : aLn() : 29 === id && (aw.s.aLl(id) ? aw.aK8.aLx(a2Y) : aLn())
	}, this.aLy = function() {
		15 === id ? aLm() : 16 === id ? aw.aAM.aLo(2) : 17 === id ? aw.aAM.aLo(3) : 18 === id ? n.o(8, this.aJI, new rx(16)) : 21 === id ? aw.aLp.aLq(a2Y.sG, a2Y.sH, a2Y.sI) : 22 === id ? aw.aLp.aLr(a2Y.sG, a2Y.aLs, a2Y.aLt) : 23 === id ? aw.aLp
			.aLu(a2Y.aKz, a2Y.zO) : 24 === id ? aw.aLp.aLv(a2Y.aKz, a2Y.sH, a2Y.sI) : 25 === id ? aw.aK8.aKL(a2Y) : 28 === id ? aw.aLp.aLw(a2Y.sG, a2Y.aLs, a2Y.aLt) : 29 === id ? aw.aK8.aLx(a2Y) : 1e3 === id && (this.aLk = id = 25, aw.aK8.aKL(
				a2Y))
	}, this.aLz = function(code, bo, data) {
		!bo && code !== id || (16 === code ? n.o(7, this.aJI) : 17 === code ? (aw.s.close(0, 3252), bf.s.uP(0), bf.dp.data[117].tK && 0 < bf.dp.data[117].tK.length ? (bo = bf.s.uQ(0), bf.rF.rG(105, bo.qu), bf.rF.rG(106, bo.password), n.o(8, this
			.aJI, new rx(16))) : (bf.rF.rG(105, ""), n.s.aAP())) : 21 === code ? n.o(10, this.aJI, new aM0(data)) : 23 === code ? n.o(13, 0, new aKh({
			data: data,
			aKz: a2Y.aKz
		})) : 25 === code && (n.s.aJT.qu = a2Y.qu, n.o(15, this.aJI)))
	}, this.r4 = function() {
		aJk.r4()
	}, this.resize = function() {
		aJk.resize(), aLi.resize()
	}, this.a0p = function(et) {
		2 === et && aJk.tS[0].pp()
	}, aJk = new tL(L(249), [new q("⬅️ " + L(32), function() {
		aLh ? n.o(29) : n.s.aAP()
	})]), aLi = new rH(aJk.tR, L(250))
}

function aJX() {
	var aKW, aKX, pR;

	function aM4() {
		var g1;
		1 === a9.data.gameMode ? (a9.data.teamPlayerCount || (a9.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), a9.a3A.a3E()), g1 = b6.pg.a1M(a9.data.teamPlayerCount, 0), a9.data.numberTeams = g1) : (2 === a9.data
			.botDifficultyType && (a9.data.botDifficultyType = 0), 1 === a9.data.spawningType && (a9.data.spawningType = 0))
	}

	function aKZ() {
		1 !== a9.data.gameMode && (a9.data.teamPlayerCount = null), aM6(), a9.data.canvas = null, n.o(5, 5)
	}

	function aM6() {
		b5.om.dU(), bf.rF.rG(156, b5.a3Q.yE())
	}

	function aM2() {
		a9.data.isReplay = 0, aM6(), a9.a3A.a3b(), aW.aCu(), a9.a3A.a3Y(), a9.data.canvas = 2 === a9.data.mapType ? bO.vM : null, a9.a3D(), a9.a3C = 1
	}

	function aMK() {
		aM4();
		for (var g = [aM9(), aMA(), aMB()], a7 = 3; a7 < 6; a7++) aKX.pS.removeChild(aKX.pT[a7].pB), aKX.pT[a7] = g[a7 - 3], aKX.pS.appendChild(aKX.pT[a7].pB);
		aKX.resize()
	}

	function aM9() {
		var aML, aK2 = new p9;
		return aK2.pC(L(246)), aML = 0 === a9.data.gameMode ? [L(247), L(225)][a9.data.colorsType] : a9.data.numberTeams + " Team" + (1 === a9.data.numberTeams ? "" : "s"), aK2.pI(aML), aK2.pN(new rI([new q(L(255), function() {
			n.o(21)
		}).button])), aK2
	}

	function aMA() {
		var aK2 = new p9,
			g = (aK2.pC(L(57)), [L(224) + ": " + aA.jx[a9.data.botDifficultyValue], L(226), L(227), L(225)]);
		return aK2.pI(g[a9.data.botDifficultyType]), aK2.pN(new rI([new q(L(255), function() {
			n.o(25)
		}).button])), aK2
	}

	function aMB() {
		var aK2 = new p9,
			g = (aK2.pC("Spawning"), [L(247), L(257), L(225)]);
		return aK2.pI(g[a9.data.spawningType]), aK2.pN(new rI([new q(L(255), function() {
			n.o(24)
		}).button])), aK2
	}
	this.show = function() {
		aKW.show(), this.resize(), aKW.tR.scrollTop = n.s.aEq[0]
	}, this.r4 = function() {
		n.s.aEq[0] = aKW.tR.scrollTop, aKW.r4()
	}, this.resize = function() {
		aKW.resize(), aKX.resize()
	}, this.a0p = function(et) {
		2 === et && aKW.tS[0].pp()
	}, aKW = new tL("🔧 " + L(252), [new q("⬅️ " + L(32), aKZ), new q(L(253), aM2)]), aM4(), a9.data.canvas || (2 === a9.data.mapType ? a9.data.canvas = bO.vM : 1 === a9.data.mapType ? a9.data.canvas = bO.aHM(bO.a3Z(a9.data), 0).vM : (a9.data
		.mapType = 0, a9.data.passableWater = a9.data.passableMountains = 1, a9.data.canvas = bO.aHM(bO.a3Z(a9.data), a9.data.mapSeed).vM)), aKX = new pP(aKW.tR, (function(pR) {
		var aK2 = new p9,
			a1a = (aK2.pC(L(254)), a9.data.canvas);
		a1a.style.width = "100%", aK2.pN({
			e: a1a
		}), aK2.pN(new rI([new q(L(255), function() {
			n.o(20)
		}).button])), pR.push(aK2)
	}(pR = []), function(pR) {
		var aK2 = new p9;
		aK2.pC(L(228)), aK2.pN(new qM({
			e0: -1,
			value: a9.data.playerCount
		}, 1, 0, function(e) {
			var playerCount = bH.p4(Math.floor(e.target.value), 1, 512);
			e.target.value = a9.data.playerCount = playerCount, 1 === a9.data.gameMode && (e = b6.pg.a1M(a9.data.teamPlayerCount, 0), a9.a3A.a3E(), b6.pg.a1M(a9.data.teamPlayerCount, 0) !== e) && aMK()
		})), pR.push(aK2)
	}(pR), function(pR) {
		var aK2 = new p9;
		aK2.pC(L(256)), aK2.pK(new tG({
			tK: ["Battle Royale", "Teams"],
			value: a9.data.gameMode
		}, function(e0) {
			a9.data.gameMode !== e0 && (a9.data.gameMode = e0, aMK())
		})), pR.push(aK2)
	}(pR), pR.push(aM9()), pR.push(aMA()), pR.push(aMB()), function(pR) {
		var aK2 = new p9,
			g = (aK2.pC(L(258)), [L(259), L(260), L(225)]);
		aK2.pI(g[a9.data.playerNamesType]), aK2.pN(new rI([new q(L(255), function() {
			n.o(23)
		}).button])), pR.push(aK2)
	}(pR), function(pR) {
		var aK2 = new p9,
			g = (aK2.pC(L(221)), [L(223), L(224) + ": " + a9.data.aIncomeValue, L(225)]);
		aK2.pI(g[a9.data.aIncomeType]), aK2.pN(new rI([new q(L(255), function() {
			n.o(22)
		}).button])), pR.push(aK2)
	}(pR), function(pR) {
		var aK2 = new p9,
			g = (aK2.pC(L(261)), [L(223), L(224) + ": " + a9.data.tIncomeValue, L(225)]);
		aK2.pI(g[a9.data.tIncomeType]), aK2.pN(new rI([new q(L(255), function() {
			n.o(26)
		}).button])), pR.push(aK2)
	}(pR), function(pR) {
		var aK2 = new p9,
			g = (aK2.pC(L(262)), [L(223), L(224) + ": " + a9.data.iIncomeValue, L(225)]);
		aK2.pI(g[a9.data.iIncomeType]), aK2.pN(new rI([new q(L(255), function() {
			n.o(27)
		}).button])), pR.push(aK2)
	}(pR), function(pR) {
		var aK2 = new p9,
			g = (aK2.pC(L(263)), [L(223), L(224) + ": " + a9.data.sResourcesValue, L(225)]);
		aK2.pI(g[a9.data.sResourcesType]), aK2.pN(new rI([new q(L(255), function() {
			n.o(28)
		}).button])), pR.push(aK2)
	}(pR), function(pR) {
		var aK2 = new p9;
		aK2.pC(L(264)), aK2.pN(new rI([new q(L(265), function() {
			n.r(), a9.a3A.a3c(), n.s.aEq[0] = 0, n.o(19)
		}).button])), aK2.pN(new rI([new q(L(266), function() {
			bj.aEf()
		}).button])), aK2.pN(new rI([new q(L(267), function() {
			return bj.aEh(), !0
		}).button])), pR.push(aK2)
	}(pR), pR))
}

function aJf() {
	var aKW, aKX, aKY, pR;

	function aKZ() {
		aKb(), 2 !== a9.data.iIncomeType && (a9.data.iIncomeData = null), n.aJj()[19] = null, n.a04()
	}

	function aKb() {
		2 === a9.data.iIncomeType && b6.pg.a1S(aKY.tr(), a9.data.iIncomeData, 255)
	}
	this.show = function() {
		aKW.show(), this.resize()
	}, this.r4 = function() {
		aKW.r4()
	}, this.resize = function() {
		aKW.resize(), aKX.resize()
	}, this.a0p = function(et) {
		2 === et && aKW.tS[0].pp()
	}, aKW = new tL(L(262), [new q("⬅️ " + L(32), aKZ)]), aKX = new pP(aKW.tR, (function(pR) {
		var aK2 = new p9;
		aK2.pC(L(222)), aK2.pK(new tG({
			tK: [L(223), L(224), L(225)],
			value: a9.data.iIncomeType
		}, function(e0) {
			aKb(), 2 !== e0 || a9.data.iIncomeData || (a9.data.iIncomeData = new Uint8Array(a9.eV), a9.data.iIncomeData.fill(32)), a9.data.iIncomeType = e0, n.o(27)
		})), pR.push(aK2)
	}(pR = []), function(pR) {
		var aK2;
		1 === a9.data.iIncomeType && ((aK2 = new p9).pC("Value"), aK2.pN(new qM({
			e0: -1,
			value: a9.data.iIncomeValue
		}, 1, 0, function(e) {
			var value = bH.p4(Math.floor(e.target.value), 0, 255);
			e.target.value = a9.data.iIncomeValue = value
		})), pR.push(aK2))
	}(pR), function(pR) {
		var aK2;
		2 === a9.data.iIncomeType && ((aK2 = new p9).pC("Data"), (aKY = new tj(0, 1, 0, 1)).tq(b6.zM.a2t(a9.data.iIncomeData, 4)), aK2.pN(aKY), pR.push(aK2))
	}(pR), pR))
}

function aJN() {
	var aMM, aMN, aLU, qL, aMO;
	this.aDW = new s5, aLU = new q9([.45, .27], [.5, .5], 2 / 3), aMN = [new q("⚔️<br>" + L(268), function() {
			aMP(0)
		}, b7.n6), new q("🗡️<br>" + L(252), function() {
			aMP(1)
		}, b7.nO), new q("🔑<br>" + L(269), function() {
			aMP(2)
		}, b7.ne), new q("☰<br>" + L(270), function() {
			aMP(3)
		}, b7.mq), new q("", function() {
			n.o(12)
		}, b7.mZ, !1),
		new q("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new q("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], qL = new qM(bf.dp.data[122]);
	for (var a7 = 0; a7 < aMN.length; a7++) aMN[a7].button.style.position = "absolute";

	function aMP(e0) {
		u.v.setState(10), aX.sO() || aX.aDM(), 0 === e0 ? n.s.a3T() : 1 === e0 ? (b5.aF0.v7(bf.dp.data[156].value, 1) || a9.a3A.a3c(), n.o(19)) : 2 === e0 ? 0 !== u.id || bf.dp.data[140].value ? n.o(8, n.rw, new rx(16)) : n.s.aMQ(n.rw, 16) : 3 ===
			e0 && n.o(1)
	}
	qL.e.style.position = "absolute", qL.e.style.textAlign = "center", qL.e.placeholder = L(271), this.show = function() {
		aW.setState(0), u.v.setState(12), this.aDW.show(), aMN[4].ps(b6.color.a1h(bf.dp.data[121].value)), this.resize(), document.body.appendChild(qL.e);
		for (var a7 = 0; a7 < aMN.length; a7++) document.body.appendChild(aMN[a7].button);
		1 !== u.id || u.f1 < 5 || (aMO && bb.lt > aMO + 144e5 ? u.uA.setState(14) : aMO = bb.lt)
	}, this.r4 = function() {
		this.aDW.r4(), document.body.removeChild(qL.e);
		for (var a7 = 0; a7 < aMN.length; a7++) document.body.removeChild(aMN[a7].button)
	}, this.resize = function() {
		this.aDW.resize(), this.aDW.resize(), aLU.resize();
		var gap = .5 * bY.gap,
			st = 10 / 99 * .84 * aLU.a1,
			aMT = .16 * aLU.jF,
			a7Q = .19 * aLU.a1,
			ef = aLU.ef + a7Q,
			st = aLU.eh + st + 3 * gap,
			a1 = .5 * (aLU.a1 - gap) - a7Q,
			a7Q = aLU.a1 - 2 * a7Q - aMT - gap,
			a7Q = (b6.pW.sN(qL.e, ef, st, a7Q, aMT), b6.pW.sN(aMN[4].button, ef + a7Q + gap, st, aMT, aMT), .5 * (aLU.eh + aLU.jF - (st += aMT + gap) - gap));
		b6.pW.sN(aMN[0].button, ef, st, a1, a7Q), b6.pW.sN(aMN[1].button, ef + a1 + gap, st, a1, a7Q), b6.pW.sN(aMN[2].button, ef, st + a7Q + gap, a1, a7Q), b6.pW.sN(aMN[3].button, ef + a1 + gap, st + a7Q + gap, a1, a7Q);
		b6.pW.sN(aMN[5].button, ef, st + a7Q * 2 + gap * 2, a1 * 2 + gap, a7Q / 3);
		b6.pW.sN(aMN[6].button, ef, st + a7Q * 2.33 + gap * 3, a1 * 2 + gap, a7Q / 3);
		for (var a7 = 0; a7 < aMN.length; a7++) aMN[a7].button.style.font = b6.pW.rY(0, b6.pW.a1y(.065 * aLU.jF)), b6.pW.pi(aMN[a7].button, 5);
		qL.e.style.font = b6.pW.rY(0, b6.pW.a1y(.08 * aLU.jF)), b6.pW.pi(qL.e, 5)
	}, this.ta = function() {
		if (aW.aCy(), aP.ta(), aK.ta(), bU.ta(), aX.sO()) {
			if (__fx.settings.displayWinCounter) {
				const size = Math.floor(aLU.a1 * 0.03);
				tb.font = b6.pW.rY(1, size);
				tb.fillStyle = "#ffffff";
				const text = "Win count: " + __fx.wins.count;
				const textLength = tb.measureText(text).width;
				tb.textAlign = "left";
				tb.textBaseline = "middle";
				tb.fillText(text, tb.canvas.width - textLength - size / 2, size);
			};
			tb.imageSmoothingEnabled = !1;
			var et = aX.aD1("territorial.io"),
				mF = .84 * aLU.a1 / et.width;
			tb.setTransform(mF, 0, 0, mF, aLU.ef + .08 * aLU.a1, aLU.eh), aMM = aMM || b6.a13.a2W(et, b6.a13.a2c, [0, 0, 0]);
			for (var ef = -1; ef <= 1; ef += 2)
				for (var eh = -1; eh <= 1; eh += 2) tb.drawImage(aMM, ef, eh);
			tb.drawImage(et, 0, 0), tb.imageSmoothingEnabled = !0;
			var hc = aX.aD1("logo"),
				aMV = .6666 * mF * et.height / hc.height,
				mG = .5 * at.a1,
				mH = aLU.eh + .5 * mF * et.height - .5 * aMV * hc.height;
			tb.setTransform(aMV, 0, 0, aMV, mG - .6 * mF * et.width, mH), tb.drawImage(hc, 0, 0), tb.setTransform(aMV, 0, 0, aMV, mG + .6 * mF * et.width - aMV * hc.width, mH), tb.drawImage(hc, 0, 0), tb.setTransform(1, 0, 0, 1, 0, 0), tb
				.imageSmoothingEnabled = !0
		}
	}
}

function aJU() {
	var aJk, aMW, aMX, tM;

	function aMY(a7) {
		n.o(8, n.rw, new rx(21, {
			sG: a7,
			sH: 0,
			sI: 10
		}))
	}
	this.show = function() {
		aJk.show(), this.resize()
	}, this.r4 = function() {
		aJk.r4()
	}, this.resize = function() {
		aJk.resize(), aMW.resize()
	}, this.a0p = function(et) {
		2 === et && aJk.tS[0].pp()
	}, aMX = [new q(L(272), function() {
		aMY(1)
	}, 0, 0, 1), new q(L(273), function() {
		aMY(2)
	}, 0, 0, 1), new q(L(274), function() {
		aMY(3)
	}, 0, 0, 1), new q(L(275), function() {
		aMY(0)
	}, 0, 0, 1), new q(L(276), function() {
		aMY(9)
	}, 0, 0, 1), new q(L(277), function() {
		aMY(10)
	}, 0, 0, 1)], tM = [new q("⬅️ " + L(32), function() {
		n.a04()
	})], aJk = new tL(L(278), tM), aMW = new q6(aMX, aJk.tR)
}

function aAi(title, pJ, aMZ) {
	var aJk, aLi;
	this.show = function() {
		aJk.show(), this.resize()
	}, this.r4 = function() {
		aJk.r4()
	}, this.resize = function() {
		aJk.resize(), aLi.resize()
	}, this.a0p = function(et) {
		2 === et && aJk.tS[0].pp()
	}, aMZ = aMZ || [new q("⬅️ " + L(32), function() {
		n.a04()
	}, b7.nI)], aJk = new tL(title, aMZ), aLi = new rH(aJk.tR, pJ), b6.pW.textAlign(aJk.tR.style, 1)
}

function aM0(data) {
	var aJk, aMa, et, rn;

	function aMb(hf) {
		var eY = data.data.length;
		if (eY) {
			for (var sH, max = min = parseInt(data.data[0][0]), a7 = 1; a7 < eY; a7++) var aMi = parseInt(data.data[a7][0]),
				min = Math.min(aMi, min),
				max = Math.max(aMi, max);
			sH = hf < 0 ? min + hf : max + 1, n.o(8, n.aDV().aJI, new rx(21, {
				sG: data.sG,
				sH: sH,
				sI: sH + Math.abs(hf)
			}))
		}
	}
	this.show = function() {
			aJk.show(), this.resize()
		}, this.r4 = function() {
			aJk.r4()
		}, this.resize = function() {
			aJk.resize(), aMa.resize()
		}, this.a0p = function(et) {
			2 === et && aJk.tS[0].pp()
		}, et = data.data.length ? 0 : 1, et = [new q("⬅️ " + L(32), function() {
			n.a04()
		}), new q(L(279), function() {
			aMb(-10)
		}, et, 0, 1), new q(L(280), function() {
			aMb(10)
		}, et, 0, 1), new q(L(230), function() {
			n.o(11, 10, new aMc({
				sG: data.sG
			}))
		})], rn = [L(281), L(282), L(283), L(284), L(285), L(286), L(287), L(288), L(289), L(290), L(277)], aJk = new tL(rn[data.sG], et),
		function() {
			var a7, eb = {
					rh: []
				},
				rh = eb.rh,
				aMe = data.data,
				eY = aMe.length;
			eY && 0 === aMe[0][0] && 0 <= (e0 = [0, 1, 2, 3, -1, -1, -1, -1, -1, 4, 5][data.sG]) && (n.s.sJ[e0] = aMe[0][1]);
			var mF = [.1, .001, .001, 1, 100, 1, .01, 1, 100, .01, .01][data.sG],
				a2g = [1, 3, 3, 0, 0, 0, 2, 0, 0, 2, 2][data.sG],
				e0 = [
					[L(291), L(292) + " ↗", L(293)],
					[L(291), L(294), L(295), L(296) + " ↗"],
					[L(291), L(292) + " ↗", L(295)],
					[L(291), L(292) + " ↗", L(295)],
					[L(297), L(298), L(299) + " ↗", L(300) + " ↗", L(114)],
					[L(297), L(298), L(301) + " ↗", L(302) + " ↗", L(303)],
					[L(297), L(298), L(304) + " ↗", L(305) + " ↗", L(306)],
					[L(297), L(298), L(301) + " ↗", L(302) + " ↗", L(307)],
					[L(297), L(298), L(299) + " ↗", L(300) + " ↗", L(114)],
					[L(291), L(292) + " ↗", L(295)],
					[L(291), L(292) + " ↗", L(308)]
				];
			if (eb.rn = e0[data.sG], eb.rs = [
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
				][data.sG], 0 === data.sG || 2 === data.sG || 3 === data.sG || 9 === data.sG || 10 === data.sG)
				for (a7 = 0; a7 < eY; a7++) rh.push([{
					f0: aMe[a7][0] + 1 + ".",
					dk: 0
				}, {
					f0: aMe[a7][1],
					dk: 1,
					qu: aMe[a7][4],
					rv: aMe[a7][3]
				}, {
					f0: (mF * aMe[a7][2]).toFixed(a2g),
					dk: 0
				}]);
			else if (1 === data.sG)
				for (a7 = 0; a7 < eY; a7++) rh.push([{
					f0: aMe[a7][0] + 1 + ".",
					dk: 0
				}, {
					f0: aMe[a7][1],
					dk: 0
				}, {
					f0: (mF * aMe[a7][2]).toFixed(a2g),
					dk: 0
				}, {
					f0: aMe[a7][3],
					dk: 1,
					qu: aMe[a7][5],
					rv: aMe[a7][4]
				}]);
			else if (4 === data.sG || 5 === data.sG || 6 === data.sG || 7 === data.sG || 8 === data.sG)
				for (a7 = 0; a7 < eY; a7++) {
					var aMh = aMe[a7][5];
					4 === data.sG || 8 === data.sG ? "100%" === (aMh = (aMh % 64 * 100 / (aMh >> 6)).toFixed(0) + "%") && (4 === data.sG ? aMh += " (" + L(309) + ")" : aMh += " (" + L(310) + ")") : 5 === data.sG ? 32768 <= aMh && (aMh = -(aMh -
						32768)) : aMh = (mF * aMh).toFixed(a2g), rh.push([{
						f0: "" + aMe[a7][0],
						dk: 0
					}, {
						f0: "" + aMe[a7][6],
						dk: 0
					}, {
						f0: aMe[a7][7],
						dk: 1,
						qu: aMe[a7][1],
						rv: aMe[a7][2]
					}, {
						f0: aMe[a7][8],
						dk: 1,
						qu: aMe[a7][3],
						rv: aMe[a7][4]
					}, {
						f0: "" + aMh,
						dk: 0
					}])
				}
			aMa = new rg(aJk.tR, eb)
		}()
}

function aMc(a2Y) {
	var aJk, aJl, pR;
	this.show = function() {
		aJk.show(), this.resize()
	}, this.r4 = function() {
		aJk.r4()
	}, this.resize = function() {
		aJk.resize(), aJl.resize()
	}, this.a0p = function(et) {
		2 === et && aJk.tS[0].pp()
	}, aJk = new tL(L(311), [new q("⬅️ " + L(32), function() {
		n.aJi(10)
	})]), aJl = new pP(aJk.tR, ((pR = []).push(function() {
		var aKA, aK2 = new p9,
			aLS = new qM(bf.dp.data[132], 1, function() {
				aKA.button.click()
			}),
			aLT = new qM(bf.dp.data[131], 1, function() {
				aLS.e.focus()
			});
		aK2.pC(L(235)), aK2.pN(aLT), aLT.e.style.marginBottom = "0.8em", aK2.pC(L(236)), aK2.pN(aLS);
		return aKA = new q(L(234), function() {
			sH = Math.floor(aLT.e.value), sI = Math.floor(aLS.e.value);
			var sI, sH = {
				a1K: Math.min(sH, sI),
				aIt: Math.max(sH, sI)
			};
			n.o(8, n.aBm(10).aJI, new rx(21, {
				sG: a2Y.sG,
				sH: sH.a1K,
				sI: sH.aIt
			}))
		}, 0, 0, 1), aK2.pN(new rI([aKA.button])), aK2
	}()), pR.push(function() {
		var aKA, aK2 = new p9,
			aLS = new qM(bf.dp.data[134], 1, function() {
				aKA.button.click()
			}),
			aLT = new qM(bf.dp.data[133], 0, function() {
				aLS.e.focus()
			});
		return aK2.pC(1 === a2Y.sG ? L(312) : L(313)), aK2.pN(aLT), aLT.e.style.marginBottom = "0.8em", aK2.pC(L(314)), aK2.pN(aLS), aKA = new q(L(234), function() {
			var aLs = aLT.e.value.slice(0, 20),
				aLt = Math.abs(Math.floor(aLS.e.value));
			n.o(8, n.aBm(10).aJI, new rx(22, {
				sG: a2Y.sG,
				aLs: aLs,
				aLt: aLt
			}))
		}, 0, 0, 1), aK2.pN(new rI([aKA.button])), aK2
	}()), pR.push(function() {
		var aKA, aK2 = new p9,
			aLS = new qM(bf.dp.data[152], 1, function() {
				aKA.button.click()
			}),
			aLT = new qM(bf.dp.data[151], 0, function() {
				aLS.e.focus()
			});
		return aK2.pC(L(315)), aK2.pN(aLT), aLT.e.style.marginBottom = "0.8em", aK2.pC(L(314)), aK2.pN(aLS), aKA = new q(L(234), function() {
			var aLs = aLT.e.value.slice(0, 5),
				aLt = Math.abs(Math.floor(aLS.e.value));
			n.o(8, n.aBm(10).aJI, new rx(28, {
				sG: a2Y.sG,
				aLs: aLs,
				aLt: aLt
			}))
		}, 0, 0, 1), aK2.pN(new rI([aKA.button])), aK2
	}()), pR))
}

function aJh() {
	var aMm, sS, aMp, sR, sU, aMn = [new Array(4), [], new Array(2), new Array(2)],
		aMo = new Array(4),
		aMq = new Array(2),
		aMr = [L(56), L(276), L(316), L(317)];

	function aMv() {
		var a5U = aMm.sf.qL.e.value.slice(0, 127);
		return a5U.length < 1 || (aMm.sf.qL.e.value = "", aw.aCE.aCF(3, a5U)), 1
	}

	function aMu(aMx) {
		bk.s.qb[3] = 1 - bk.s.qb[3], aMw(3, 1, bk.s.qb[3]), aMx && aw.aCE.aCF(4), bk.s.qb[3] && bf.rF.rG(158, bk.s.qb[0])
	}

	function aMs(er, es) {
		bk.s.qb[er] !== es && (0 === er && bk.s.qb[3] && aMu(0), aMw(er, bk.s.qb[er], 0), aMw(er, es, 1), bk.s.qb[er] = es, 0 === er ? (aw.aCE.aCF(2, es), bk.s.qb[2] ? (aMm.sg.lN(), aMm.sf.qY(1)) : aMm.sf.qY(0), n.aDV().aBp(), n.aDV().aBo()) : 2 ===
			er && (0 === es ? (aw.aCE.aCF(0), aMm.sf.lN(), aMm.so()) : (aw.aCE.aCF(1), aMm.sg.lN(), aMm.sp())))
	}

	function aMw(er, es, color) {
		aMm.si[er].q7[es].ps(color ? b7.n2 : b7.nl)
	}

	function aMz(aBC) {
		return aBC < 7 ? aBC + 2 + " " + L(324) : 7 === aBC || 10 === aBC ? L(276) + " (Full-Sending: " + L(7 === aBC ? 325 : 326) + ")" : 8 === aBC ? "1v1" : L(327)
	}

	function aN0(f0) {
		var a5X = bH.dl(f0, 60),
			f0 = f0 % 60;
		return (a5X < 10 ? "0" : "") + a5X + ":" + (f0 < 10 ? "0" : "") + f0
	}
	this.aBn = function() {
		aMm.sg.lN()
	}, this.aBp = function() {
		var aMy = bk.s.qb[0],
			aMy = bk.s.qd[aMy];
		bO.a3(aMy.eE, aMy.mapSeed), sS.q7[0].button.textContent = L(254) + ": " + bO.vC.vD[aMy.eE].name, sS.q7[1].button.textContent = L(256, 0, "Mode") + ": " + aMz(aMy.aBC), sS.q7[2].button.textContent = L(321) + ": " + bO.vC.vD[aMy.aCG].name,
			sS.q7[3].button.textContent = L(322, 0, "Next Mode") + ": " + aMz(aMy.aCH), sS.q7[4].button.textContent = L(323) + ": " + aN0(aMy.aBr), sS.resize()
	}, this.aBo = function() {
		var aMy = bk.s.qb[0],
			qc = bk.s.qd[aMy];
		aMm.sm(qc.sn);
		for (var a7 = 0; a7 < bk.t1.t2.length; a7++) aMn[0][a7].qX.textContent = "" + bk.t1.t2[a7].length;
		var t1 = bk.t1.t2[aMy],
			aN1 = t1.length,
			aN2 = bk.t1.t3[aMy];
		aMn[2][1].qX.textContent = "" + aN1, aMn[3][1].qX.textContent = "" + aN2, sS.q7[4].button.textContent = L(323) + ": " + aN0(qc.aBr);
		for (a7 = 0; a7 < 4; a7++) {
			var aN3 = bk.s.qd[a7];
			aMo[a7] ? 0 === aN3.sn && (aMo[a7].qX.textContent = bO.vC.vD[aN3.eE].name) : aMo[a7] = new qW(bO.vC.vD[aN3.eE].name, sR.q7[a7].button, 1, 1), b6.zM.startsWith(aMr[a7], "🏆 ") ? aN3.aBI || (aMr[a7] = aMr[a7].substring(3), sR.q7[a7]
				.button.textContent = aMr[a7], sR.q7[a7].button.appendChild(aMn[0][a7].qX), sR.q7[a7].button.appendChild(aMo[a7].qX)) : aN3.aBI && (aMr[a7] = "🏆 " + aMr[a7], sR.q7[a7].button.textContent = aMr[a7], sR.q7[a7].button
				.appendChild(aMn[0][a7].qX), sR.q7[a7].button.appendChild(aMo[a7].qX))
		}
		var qc = "",
			aN5 = "";
		0 === aMy && (qc = bk.qj.aBY(t1, 0, aN1), aN5 = bk.qj.aBY(t1, 0, aN2)), aMp[0].qX.textContent = qc, aMp[1].qX.textContent = aN5, aMq[1].qX.textContent = "MP: " + bk.s.aBf[0] + "   SP: " + bk.s.aBf[1] + "   Lobby: " + b6.pg.a1X(bk.t1.t2)
	}, this.aBt = function() {
		aMm.sf.lN()
	}, this.show = function() {
		aMm.show(), this.resize()
	}, this.r4 = function() {
		aMm.r4(), bk.tA.r4(), bk.r1.r4()
	}, this.resize = function() {
		aMm.resize(1 - bk.s.qb[2])
	}, this.a0p = function(et) {
		2 === et ? bk.s.qb[3] ? aMu(1) : aMm.si[3].q7[0].pp() : et < 2 && aMu(1)
	}, sR = new rL([new q(aMr[0], function() {
		return aMs(0, 0), 2
	}), new q(aMr[1], function() {
		return aMs(0, 1), 2
	}), new q(aMr[2], function() {
		return aMs(0, 2), 2
	}), new q(aMr[3], function() {
		return aMs(0, 3), 2
	})], b7.nl), sS = new rL([new q("", 0, 2), new q("", 0, 2), new q("", 0, 2), new q("", 0, 2), new q("", 0, 2)], b7.nm, 1);
	var aMt = new rL([new q(L(318), function() {
		return aMs(2, 0), 2
	}), new q(L(110), function() {
		return aMs(2, 1), 2
	})], b7.nl);
	sU = new rL([new q(L(319), (__fx.customLobby.setLeaveFunction(() => {
			n.r(), bk.a07(), aw.s.a06(3240), __fx.customLobby.setActive(false), n.o(5, 5)
		}),
		function() {
			n.r(), bk.a07(), aw.s.a06(3240), __fx.customLobby.setActive(false), n.o(5, 5)
		})), new q(L(320), function() {
		return aMu(1), 2
	})], b7.nl), aMm = new sQ(sR, sS, aMt, sU, aMv, bk.tA.aBz);
	for (var a7 = 0; a7 < 4; a7++) aMn[0][a7] = new qW("0", sR.q7[a7].button);
	aMn[2][1] = new qW("0", aMt.q7[1].button), aMn[3][1] = new qW("0", sU.q7[1].button), aMp = [new qW("", aMt.q7[1].button, 1, 1), new qW("", sU.q7[1].button, 1, 1)], aMw(0, bk.s.qb[0], 1), aMw(2, bk.s.qb[2], 1), (aMq = [new qW(L(228), aMm.sq(), 1,
		0), new qW("", aMm.sq(), 1, 1)])[0].qX.style.fontSize = "0.4em", aMq[1].qX.style.fontSize = "0.4em"
}

function aJO() {
	var aJk, aJl, pR;
	this.show = function() {
		aJk.show(), this.resize()
	}, this.r4 = function() {
		aJk.r4()
	}, this.resize = function() {
		aJk.resize(), aJl.resize()
	}, this.a0p = function(et) {
		2 === et && aJk.tS[0].pp()
	}, aJk = new tL(L(328), [new q("⬅️ " + L(32), function() {
		n.o(7, n.aBm(7).aJI)
	}), new q(L(185), function() {
		bf.rF.rG(105, bC.rz.uw(aJl.pT[0].pA[0].e.value, 5)), bf.rF.rG(106, bC.rz.uw(aJl.pT[1].pA[0].e.value, 8)), n.o(8, n.aBm(7).aJI, new rx(18))
	})]), aJl = new pP(aJk.tR, ((pR = []).push(function() {
		var aK2 = new p9;
		return aK2.pC(L(166)), aK2.pN(new qM({
			value: "",
			e0: -1
		})), aK2
	}()), pR.push(function() {
		var aK2 = new p9,
			aKD = (aK2.pC(L(168)), new qM({
				value: "",
				e0: -1
			}));
		return aKD.e.type = "password", aK2.pN(aKD), aK2.pN(new rI([new q(L(169), function(e) {
			return e.textContent === L(169) ? (e.textContent = L(170), aKD.e.type = "text") : (e.textContent = L(169), aKD.e.type = "password"), !0
		}).button])), aK2
	}()), pR))
}

function aJV() {
	var aJk, aMW, aMX, tM;

	function aMY(a7) {
		n.o(8, n.rw, new rx(21, {
			sG: a7,
			sH: 0,
			sI: 10
		}))
	}
	this.show = function() {
		aJk.show(), this.resize()
	}, this.r4 = function() {
		aJk.r4()
	}, this.resize = function() {
		aJk.resize(), aMW.resize()
	}, this.a0p = function(et) {
		2 === et && aJk.tS[0].pp()
	}, aMX = [new q(L(286), function() {
		aMY(5)
	}, 0, 0, 1), new q(L(287), function() {
		aMY(6)
	}, 0, 0, 1), new q(L(288), function() {
		aMY(7)
	}, 0, 0, 1)], tM = [new q("⬅️ " + L(32), function() {
		n.a04()
	})], aJk = new tL(L(329), tM), aMW = new q6(aMX, aJk.tR)
}

function aJE() {
	this.dp = {}, this.sJ = new Array(6), this.aJT = null, this.aJQ = null, this.re = 0, this.aEq = [0], this.t = function() {
			n.o(5, 5)
		}, this.a3T = function() {
			n.r(), aV.aCe(0), aV.dU()
		},
		__fx.customLobby.setJoinFunction(() => {
			n.r();
			aV.aCe(0);
			aV.dU();
		}), this.aAP = function() {
			n.o(0 === aW.zu() ? 5 : 0)
		}, this.aLR = function() {
			if (1 === bf.dp.data[130].value) n.o(8, n.aDV().aJI, new rx(24, {
				aKz: bf.dp.data[125].value,
				sH: bf.dp.data[128].value,
				sI: bf.dp.data[129].value
			}));
			else {
				for (var g = (g = bf.dp.data[126].value.split(",")).slice(0, 10), a7 = 0; a7 < g.length; a7++) g[a7] = g[a7].trim().slice(0, 7).toUpperCase();
				1 === g.length && 0 === g[0].length && (g = []), n.o(8, n.aDV().aJI, new rx(23, {
					aKz: bf.dp.data[125].value,
					zO: g
				}))
			}
		}, this.aMQ = function(aJI, target) {
			n.o(4, aJI, new p("Data Usage Information",
				"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: <a href='" + bG.aN7 +
				"' target='_blank'>" + bG.aN7 + "</a>", !1, [new q("⬅️ " + L(32), function() {
					n.o(aJI)
				}), new q("✅ Accept", function() {
					bf.rF.rG(140, 1), 0 === target ? n.o(2, aJI) : n.o(8, aJI, new rx(target))
				})]))
		}, this.aN8 = function() {
			for (var a7 = 0; a7 < 6; a7++) this.sJ[a7] = bC.un.ur(bD.oX(5));
			this.sJ[1] = "[" + this.sJ[1] + "]", 5 === n.rw && (n.aDV().aDW.rG(this.sJ), n.aDV().resize())
		}
}

function aJY() {
	var aKW, aKX, aN9, pR;

	function aKZ() {
		b2.a07(), n.aJj()[19] = null, n.a04()
	}

	function aNG() {
		aNJ(), aNH()
	}

	function aNJ() {
		aN9.pB.lastChild && aN9.pB.removeChild(aN9.pB.lastChild)
	}

	function aNH() {
		var aNK = bO.a3Z(a9.data);
		a9.data.canvas = bO.aHM(aNK, a9.data.mapSeed).vM, aNI()
	}

	function aNI() {
		var a1a = a9.data.canvas;
		a1a.style.width = "100%", aN9.pB.appendChild(a1a)
	}
	this.aEa = function(a1a) {
		a9.data.canvas && aNJ(), a9.data.canvas = a1a, aNI()
	}, this.show = function() {
		aKW.show(), this.resize()
	}, this.r4 = function() {
		aKW.r4()
	}, this.resize = function() {
		aKW.resize(), aKX.resize()
	}, this.a0p = function(et) {
		2 === et && aKW.tS[0].pp()
	}, aKW = new tL(L(254), [new q("⬅️ " + L(32), aKZ)]), 2 === a9.data.mapType && b2.dU(), aKX = new pP(aKW.tR, (function(pR) {
		var aK2 = new p9;
		aK2.pC(L(222)), aK2.pK(new tG({
			tK: [L(330), L(331), L(332)],
			value: a9.data.mapType
		}, function(e0) {
			2 === (a9.data.mapType = e0) ? (b2.dU(), a9.data.canvas = null) : (a9.data.passableWater = a9.data.passableMountains = 1, b2.a07()), n.o(20)
		})), 2 <= a9.data.mapType && (aK2.pN(new rS), aK2.pN(new rC({
			value: a9.data.passableWater
		}, L(333), function(value) {
			a9.data.passableWater = value
		})), aK2.pN(new rC({
			value: a9.data.passableMountains
		}, L(334), function(value) {
			a9.data.passableMountains = value
		})));
		pR.push(aK2)
	}(pR = []), function(pR) {
		if (0 === a9.data.mapType) {
			for (var aK2 = new p9, tK = (aK2.pC(L(254)), []), a7 = 0; a7 < bO.vC.aIF.length; a7++) tK.push(bO.vC.vD[bO.vC.aIF[a7]].name);
			aK2.pK(new tG({
				tK: tK,
				value: a9.data.mapProceduralIndex
			}, function(e0) {
				a9.data.mapProceduralIndex = e0, aNG()
			})), pR.push(aK2)
		}
	}(pR), function(pR) {
		if (1 === a9.data.mapType) {
			for (var aK2 = new p9, tK = (aK2.pC(L(254)), []), a7 = 0; a7 < bO.vC.aIG.length; a7++) tK.push(bO.vC.vD[bO.vC.aIG[a7]].name);
			aK2.pK(new tG({
				tK: tK,
				value: a9.data.mapRealisticIndex
			}, function(e0) {
				a9.data.mapRealisticIndex = e0, aNG()
			})), pR.push(aK2)
		}
	}(pR), function(pR) {
		var aK2;
		2 === a9.data.mapType && ((aK2 = new p9).pC(L(254)), aK2.pN(new rI([new q(L(335), function() {
			return b2.aET(), !0
		}).button])), pR.push(aK2))
	}(pR), function(pR) {
		(aN9 = new p9).pC(L(336)), 2 !== a9.data.mapType ? aNH() : a9.data.canvas && aNI();
		pR.push(aN9)
	}(pR), function(pR) {
		var aK2, qL, aKA;
		0 === a9.data.mapType && ((aK2 = new p9).pC("Seed"), qL = new qM({
			e0: -1,
			value: a9.data.mapSeed
		}, 1, 0, function(e) {
			e = Math.abs(Math.floor(e.target.value)) % 16384;
			a9.data.mapSeed !== e && (a9.data.mapSeed = e, aNG())
		}), aKA = new q(L(247), function(e) {
			var aHH = Math.floor(16384 * Math.random());
			if (a9.data.mapSeed !== aHH) return qL.e.value = a9.data.mapSeed = aHH, aNG(), !0
		}), aK2.pN(qL), aK2.pN(new rI([aKA.button])), pR.push(aK2))
	}(pR), function(pR) {
		var aK2, qL;
		2 === a9.data.mapType && ((aK2 = new p9).pC(L(337)), qL = new qM({
			e0: -1,
			value: a9.data.mapName
		}, 0, 0, function(e) {
			a9.data.mapName = e.target.value = e.target.value.slice(0, 20)
		}), aK2.pN(qL), pR.push(aK2))
	}(pR), pR))
}

function p(title, pJ, aNL, aMZ) {
	var aJk, aLi;
	this.show = function() {
		aJk.show(), this.resize()
	}, this.r4 = function() {
		aJk.r4()
	}, this.resize = function() {
		aJk.resize(), aLi.resize()
	}, this.a0p = function(et) {
		2 === et && aJk.tS[0].pp()
	}, aMZ = aMZ || [new q("⬅️ " + L(32), function() {
		n.a04()
	})], aJk = new tL(title, aMZ), aLi = new rH(aJk.tR, pJ), aNL && b6.pW.textAlign(aJk.tR.style, 1)
}

function aJb() {
	var aKW, aKX, aKY, pR;

	function aKZ() {
		aKb(), 2 === a9.data.playerNamesType && 1 === b6.pg.a1G(a9.data.playerNamesData).length && (a9.data.playerNamesType = 0), 2 !== a9.data.playerNamesType && (a9.data.playerNamesData = null), n.aJj()[19] = null, n.a04()
	}

	function aKb() {
		2 === a9.data.playerNamesType && b6.pg.a1U(aKY.tr(), a9.data.playerNamesData, 20)
	}
	this.show = function() {
		aKW.show(), this.resize()
	}, this.r4 = function() {
		aKW.r4()
	}, this.resize = function() {
		aKW.resize(), aKX.resize()
	}, this.a0p = function(et) {
		2 === et && aKW.tS[0].pp()
	}, aKW = new tL(L(258), [new q("⬅️ " + L(32), aKZ)]), aKX = new pP(aKW.tR, (function(pR) {
		var aK2 = new p9;
		aK2.pC(L(222)), aK2.pK(new tG({
			tK: [L(259), L(260), L(225)],
			value: a9.data.playerNamesType
		}, function(e0) {
			aKb(), a9.data.playerNamesType = e0, n.o(23)
		})), aK2.pN(new rS), aK2.pN(new rC({
			value: a9.data.selectableName
		}, L(338), function(value) {
			a9.data.selectableName = value
		})), pR.push(aK2)
	}(pR = []), function(pR) {
		var aK2;
		2 === a9.data.playerNamesType && ((aK2 = new p9).pC("Data"), aKY = new tj(0, 1, 0, 1), a9.data.playerNamesData && a9.data.playerNamesData.length === a9.eV || (a9.data.playerNamesData = new Array(a9.eV), a9.data.playerNamesData
			.fill("")), aKY.tq(b6.zM.a2t(a9.data.playerNamesData, 1, '"')), aK2.pN(aKY), pR.push(aK2))
	}(pR), pR))
}

function aJM() {
	var aKW, to;

	function aNM() {
		n.r();
		var pD = b5.aNQ(to.tr());
		(a9.yl && 0 < pD.length && pD === b5.om.a3P || b5.aF0.v7(pD)) && b5.aNR()
	}
	this.show = function(aNN) {
		this.aNO(aNN), aKW.show(), this.resize()
	}, this.aNO = function(aNN) {
		0 === a9.yl ? aNN ? to.tq(aNN) : b5.om.a3P.length && to.tq(b5.om.a3P) : (a9.gi || (b5.om.a3P = b5.a3Q.yE()), to.tq(b5.aNP(b5.om.a3P)))
	}, this.r4 = function() {
		aKW.r4()
	}, this.resize = function() {
		aKW.resize(), to.resize()
	}, this.a0p = function(et) {
		2 === et ? aKW.tS[0].pp() : aNM()
	}, aKW = new tL(L(339), [new q("⬅️ " + L(32), function() {
		n.aJi(1)
	}), new q(L(340), function() {
		to.ts()
	}), new q(L(341), function() {
		to.tt()
	}), new q(L(342), function() {
		to.clear()
	}), new q(L(343), function() {
		aNM()
	})]), to = new tj(L(344)), aKW.tR.appendChild(to.e)
}

function aJL() {
	var aJk, aJl, pR, aAL, aK2;

	function aNS() {
		var lt;
		aAL !== bf.dp.data[12].value ? (b3.dU(), b3.aAK(), lt = bb.lt, n.o(4, 1, new p(L(347), L(348), !1, [new q("⬅️ " + L(32), function() {
			n.o(1)
		}), new q("🔄 Reload", function() {
			bb.lt < lt + 1500 || u.v.w()
		}, b7.n0)]))) : n.o(1)
	}
	this.show = function() {
			aAL = bf.dp.data[12].value, aJk.show(), this.resize()
		}, this.r4 = function() {
			aJk.r4()
		}, this.resize = function() {
			aJk.resize(), aJl.resize()
		}, this.a0p = function(et) {
			2 === et && aJk.tS[0].pp()
		}, aJk = new tL(L(345), [new q("⬅️ " + L(32), aNS), new q(L(346), function() {
			n.r(), bf.rF.uU(), n.o(2)
		})]), pR = [], (aK2 = new p9).pC(L(349)), aK2.pE(L(350)), pR.push(aK2),
		function(pR) {
			var aK2 = new p9,
				g = (aK2.pC(L(368)), b3.data.aAQ());
			aK2.pK(new tG({
				tK: g,
				value: b3.data.aAT(g)
			}, function(e0) {
				return bf.rF.rG(12, g[e0].split(":")[0]), !0
			})), pR.push(aK2)
		}(pR),
		function(pR) {
			var aK2 = new p9,
				aNV = (aK2.pC(L(366)), []);
			aK2.pN(new rI([new q(L(367), function(e) {
				bT.aNW();
				for (var a7 = 0; a7 < aNV.length; a7++) aNV[a7].e.value = bT.aNX[a7];
				return b6.pW.a24(e), !0
			}).button]));
			for (var a7 = 0; a7 < bT.aNY.length; a7++) {
				aK2.pE(bT.aNY[a7]);
				for (var er = 0; er < 2; er++) {
					var e0 = 2 * a7 + er,
						qL = new qM({
							value: bT.aNX[e0],
							e0: -1
						});
					qL.e.aNZ = e0, aNV.push(qL), qL.e.addEventListener("keydown", function(e) {
						e.preventDefault();
						var code = e.code;
						e.target.value = code, bT.aNa(e.target.aNZ, code)
					}), er && (qL.e.style.marginLeft = "4%"), qL.e.style.width = "48%", aK2.pN(qL)
				}
			}
			pR.push(aK2)
		}(pR), (aK2 = new p9).pC(L(351)), bf.dp.data[1].tK = [L(352), L(353), L(354), L(355)], aK2.pK(new tG(bf.dp.data[1])), pR.push(aK2), (aK2 = new p9).pC(L(356)), bf.dp.data[9].tK = [L(353), L(357), L(358)], aK2.pK(new tG(bf.dp.data[9])), pR
		.push(aK2), (aK2 = new p9).pC(L(359)), bf.dp.data[11].tK = [L(360), L(9), L(361)], aK2.pK(new tG(bf.dp.data[11])), pR.push(aK2), (aK2 = new p9).pC(L(362)), aK2.pN(new rC(bf.dp.data[2])), pR.push(aK2), (aK2 = new p9).pC(L(363)), aK2.pN(new rC(
			bf.dp.data[7])), pR.push(aK2), (aK2 = new p9).pC(L(364)), aK2.pN(new rC(bf.dp.data[8])), pR.push(aK2), (aK2 = new p9).pC(L(365)), aK2.pN(new qM(bf.dp.data[5])), pR.push(aK2), aJl = new pP(aJk.tR, pR)
}

function aJc() {
	var aKW, aKX, aKY, pR;

	function aKZ() {
		aKb(), 2 !== a9.data.spawningType || b6.pg.a1G(a9.data.spawningData) || (a9.data.spawningType = 0), 2 !== a9.data.spawningType && (a9.data.spawningData = null), n.aJj()[19] = null, n.a04()
	}

	function aKb() {
		2 === a9.data.spawningType && b6.pg.a1S(aKY.tr(), a9.data.spawningData, bO.aEc - 1)
	}
	this.show = function() {
		aKW.show(), this.resize()
	}, this.r4 = function() {
		aKW.r4()
	}, this.resize = function() {
		aKW.resize(), aKX.resize()
	}, this.a0p = function(et) {
		2 === et && aKW.tS[0].pp()
	}, aKW = new tL(L(369), [new q("⬅️ " + L(32), aKZ)]), aKX = new pP(aKW.tR, (function(pR) {
		var aK2 = new p9,
			tK = (aK2.pC(L(222)), [L(247), L(257), L(225)]),
			value = a9.data.spawningType;
		0 === a9.data.gameMode && (tK.splice(1, 1), 0 < value) && (value = 1);
		aK2.pK(new tG({
			tK: tK,
			value: value
		}, function(e0) {
			aKb(), a9.data.spawningType = e0, 0 === a9.data.gameMode && 1 === e0 && (a9.data.spawningType = 2), 2 !== a9.data.spawningType || a9.data.spawningData || (a9.data.spawningData = new Uint16Array(2 * a9.eV)), n.o(24)
		})), aK2.pN(new rS), aK2.pN(new rC({
			value: a9.data.selectableSpawn
		}, L(370), function(value) {
			a9.data.selectableSpawn = value
		})), pR.push(aK2)
	}(pR = []), function(pR) {
		var aK2 = new p9;
		aK2.pC("Seed"), aK2.pN(new qM({
			e0: -1,
			value: a9.data.spawningSeed
		}, 1, 0, function(e) {
			var value = Math.abs(Math.floor(e.target.value)) % 16384;
			e.target.value = a9.data.spawningSeed = value
		})), pR.push(aK2)
	}(pR), function(pR) {
		var aK2;
		2 === a9.data.spawningType && ((aK2 = new p9).pC("Data"), (aKY = new tj(0, 1, 0, 1)).tq(b6.zM.a2t(a9.data.spawningData, 2)), aK2.pN(aKY), pR.push(aK2))
	}(pR), pR))
}

function aJK() {
	var aJk, aMW, aMX, tM;

	function aNb(id) {
		0 !== u.id || bf.dp.data[140].value ? 0 === id ? n.o(8, 1, new rx(16)) : n.o(2) : n.s.aMQ(n.rw, 0 === id ? 16 : 0)
	}
	this.show = function() {
		u.v.setState(12), aJk.show(), this.resize(), this.ie()
	}, this.r4 = function() {
		aJk.r4()
	}, this.resize = function() {
		aJk.resize(), aMW.resize()
	}, this.ie = function() {
		8 === aW.zu() && (2 <= bZ.aNg ? aMX[2].pq === b7.mp && aMX[2].ps(0) : aMX[2].pq !== b7.mp && aMX[2].ps(b7.mp), !a9.gi && aI.p7(a9.eI) ? aMX[1].pq === b7.mp && aMX[1].ps(0) : aMX[1].pq !== b7.mp && aMX[1].ps(b7.mp), !a9.gi && aq.hG(a9
			.eI) ? aMX[0].pq === b7.mp && aMX[0].ps(0) : aMX[0].pq !== b7.mp && aMX[0].ps(b7.mp))
	}, this.a0p = function(et) {
		2 === et && aJk.tS[0].pp()
	}, aMX = [new q(L(371), function() {
		aNb(0)
	}), new q(L(278), function() {
		n.o(16)
	}), new q(L(329), function() {
		n.o(17)
	}), new q(L(372), function() {
		n.s.aLR()
	}, 0, 0, 1), new q(L(339), function() {
		n.o(3, 1)
	}), new q(L(373), function() {
		n.o(18)
	}), new q(L(345), function() {
		aNb(1)
	}), new q(L(374), function() {
		n.o(4, 1, new p(L(374), b6.pW.a1z([L(383), L(384), "Discord", L(385), L(272), L(386), L(110), L(387), L(388), L(389)], [bG.aAf, bG.zp, bG.aAg, bG.aNh, bG.aNi, bG.zW, bG.aNj, bG.aNk, bG.aNl, bG.aN7]), !1, [new q("⬅️ " + L(32),
			function() {
				n.o(1)
			})]))
	}), new q(L(375), function() {
		n.o(4, 1, new p(L(375), dh + "<br><a href='" + bG.aNh + "' target='_blank'>" + bG.aNh + "</a>" +
			"<br><br><b>" + "FX Client v" + __fx.version + "<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a>" +
			"<br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></b>", !0, [new q("⬅️ " + L(32), function() {
				n.o(1)
			})]))
	}), new q(L(376), function() {
		n.o(4, 1, new p(L(376), L(390) + "<br>" + L(391), !1, [new q("⬅️ " + L(32), function() {
			n.o(1)
		}), new q(L(392), function() {
			u.v.zi(), n.o(1)
		})]))
	}), new q(L(377), function() {
		u.v.zj(), n.o(4, 1, new p(L(393), L(394) + " <a href='" + bG.aN7 + "' target='_blank'>" + bG.aN7 + "</a>", !1, [new q("⬅️ " + L(32), function() {
			n.o(1)
		})]))
	})], tM = [new q("⬅️ " + L(32), function() {
		n.s.aAP()
	})], 8 === aW.zu() && (aMX.unshift(new q(L(380), function() {
		2 <= bZ.aNg && (n.r(), ba.a0s(), bb.dc = !0)
	}, 0, 1)), aMX.unshift(new q(L(381), function() {
		!a9.gi && aI.p7(a9.eI) && (b4.gv.oE(), n.r(), aI.gj) && aI.a0s()
	}, 0, 1)), aMX.unshift(new q(L(382), function() {
		!a9.gi && aq.hG(a9.eI) && (b4.gv.hF(), n.r(), aI.gj) && aI.a0s()
	}, 0, 1))), 1 === u.id && 5 <= u.f1 && aMX.push(new q(L(378), function() {
		u.v.zk()
	})), aJk = new tL(L(379), tM), aMW = new q6(aMX, aJk.tR)
}

function aJg() {
	var aKW, aKX, aKY, pR;

	function aKZ() {
		aKb(), 2 !== a9.data.sResourcesType && (a9.data.sResourcesData = null), n.aJj()[19] = null, n.a04()
	}

	function aKb() {
		2 === a9.data.sResourcesType && b6.pg.a1S(aKY.tr(), a9.data.sResourcesData, 2047)
	}
	this.show = function() {
		aKW.show(), this.resize()
	}, this.r4 = function() {
		aKW.r4()
	}, this.resize = function() {
		aKW.resize(), aKX.resize()
	}, this.a0p = function(et) {
		2 === et && aKW.tS[0].pp()
	}, aKW = new tL(L(263), [new q("⬅️ " + L(32), aKZ)]), aKX = new pP(aKW.tR, (function(pR) {
		var aK2 = new p9;
		aK2.pC(L(222)), aK2.pK(new tG({
			tK: [L(223), L(224), L(225)],
			value: a9.data.sResourcesType
		}, function(e0) {
			aKb(), 2 !== e0 || a9.data.sResourcesData || (a9.data.sResourcesData = new Uint16Array(a9.eV)), a9.data.sResourcesType = e0, n.o(28)
		})), pR.push(aK2)
	}(pR = []), function(pR) {
		var aK2;
		1 === a9.data.sResourcesType && ((aK2 = new p9).pC("Value"), aK2.pN(new qM({
			e0: -1,
			value: a9.data.sResourcesValue
		}, 1, 0, function(e) {
			var value = bH.p4(Math.floor(e.target.value), 0, 2047);
			e.target.value = a9.data.sResourcesValue = value
		})), pR.push(aK2))
	}(pR), function(pR) {
		var aK2;
		2 === a9.data.sResourcesType && ((aK2 = new p9).pC("Data"), (aKY = new tj(0, 1, 0, 1)).tq(b6.zM.a2t(a9.data.sResourcesData, 2)), aK2.pN(aKY), pR.push(aK2))
	}(pR), pR))
}

function aJe() {
	var aKW, aKX, aKY, pR;

	function aKZ() {
		aKb(), 2 !== a9.data.tIncomeType && (a9.data.tIncomeData = null), n.aJj()[19] = null, n.a04()
	}

	function aKb() {
		2 === a9.data.tIncomeType && b6.pg.a1S(aKY.tr(), a9.data.tIncomeData, 255)
	}
	this.show = function() {
		aKW.show(), this.resize()
	}, this.r4 = function() {
		aKW.r4()
	}, this.resize = function() {
		aKW.resize(), aKX.resize()
	}, this.a0p = function(et) {
		2 === et && aKW.tS[0].pp()
	}, aKW = new tL(L(261), [new q("⬅️ " + L(32), aKZ)]), aKX = new pP(aKW.tR, (function(pR) {
		var aK2 = new p9;
		aK2.pC(L(222)), aK2.pK(new tG({
			tK: [L(223), L(224), L(225)],
			value: a9.data.tIncomeType
		}, function(e0) {
			aKb(), 2 !== e0 || a9.data.tIncomeData || (a9.data.tIncomeData = new Uint8Array(a9.eV), a9.data.tIncomeData.fill(32)), a9.data.tIncomeType = e0, n.o(26)
		})), pR.push(aK2)
	}(pR = []), function(pR) {
		var aK2;
		1 === a9.data.tIncomeType && ((aK2 = new p9).pC("Value"), aK2.pN(new qM({
			e0: -1,
			value: a9.data.tIncomeValue
		}, 1, 0, function(e) {
			var value = bH.p4(Math.floor(e.target.value), 0, 255);
			e.target.value = a9.data.tIncomeValue = value
		})), pR.push(aK2))
	}(pR), function(pR) {
		var aK2;
		2 === a9.data.tIncomeType && ((aK2 = new p9).pC("Data"), (aKY = new tj(0, 1, 0, 1)).tq(b6.zM.a2t(a9.data.tIncomeData, 4)), aK2.pN(aKY), pR.push(aK2))
	}(pR), pR))
}

function aJW() {
	var aJk, aJl, pR;
	this.show = function() {
		aJk.show(), this.resize()
	}, this.r4 = function() {
		aJk.r4()
	}, this.resize = function() {
		aJk.resize(), aJl.resize()
	}, this.a0p = function(et) {
		2 === et && aJk.tS[0].pp()
	}, aJk = new tL(L(373), [new q("⬅️ " + L(32), function() {
		n.a04()
	})]), aJl = new pP(aJk.tR, ((pR = []).push(function() {
		function aK7() {
			aNq.button.textContent = L(163), aNo.e.readOnly = !1, aNp.e.readOnly = !1, aK6.ps(1), aK6.button.style.color = b7.md
		}
		var aK2 = new p9,
			aNn = (aK2.pC(L(395)), new qM({
				value: bf.dp.data[105].value,
				e0: -1
			})),
			aNo = (aNn.e.readOnly = !0, aK2.pN(aNn), aK2.pC(L(302), "0.8em"), new qM(bf.dp.data[148])),
			aNo = new qM(bf.dp.data[148], 0, void 0, function(e) {
				aK5(bf.dp.data[149].value, e.target.value)
			}),
			aNp = (aK2.pN(aNo), aK2.pC(L(306), "0.8em"), new qM(bf.dp.data[149], 1, void 0, function(e) {
				aK5(e.target.value, bf.dp.data[148].value)
			})),
			aNq = (aK2.pN(aNp), new q(L(163), function(e) {
				return e.textContent === L(163) ? (e.textContent = L(164), aNo.e.readOnly = !0, aNp.e.readOnly = !0, aK6.ps(0), aK6.button.style.color = b7.nZ, bf.rF.rG(149, aNp.e.value), aK5(bf.dp.data[149].value, bf.dp.data[
					148].value)) : aK7(), !0
			})),
			aK6 = (aK2.pN(new rI([aNq.button])), new q(L(14), function(e) {
				return aNo.e.readOnly && aw.s.aCc(0) && (b6.pW.a24(e), aK7(), aw.aK8.aK9({
					ry: 0,
					qu: bf.dp.data[148].value,
					rv: 0,
					value: bH.p4(Math.floor(100 * bf.dp.data[149].value), 0, 4294967295)
				})), !0
			}, 1)),
			pF = (aK2.pN(new rI([aK6.button])), aK2.pE()),
			aK5 = function(f0, pD) {
				f0 = isNaN(f0) ? 0 : Number(f0);
				var f0 = Math.max(f0, (bf.dp.data[150].value + 1) / 100),
					aKC = Math.floor(100 * Math.max(1e-4 * f0, bf.dp.data[150].value / 100)) / 100;
				pF.textContent = L(165, [f0.toFixed(2), bf.dp.data[105].value, aKC.toFixed(2), pD, (f0 - aKC).toFixed(2)])
			};
		return aK5(bf.dp.data[149].value, bf.dp.data[148].value), aK2
	}()), pR))
}

function bq() {
	"function" != typeof Math.log2 && (Math.log2 = function(ef) {
		return Math.log(ef) / Math.log(2)
	}), "function" != typeof Math.log10 && (Math.log10 = function(ef) {
		return Math.log(ef) / Math.log(10)
	}), "function" != typeof Math.sign && (Math.sign = function(ef) {
		return 0 < ef ? 1 : ef < 0 ? -1 : 0
	})
}

function cb() {
	var a7e, aNs, aNt, aNu, aNr = !1;

	function aNv() {
		aNr = !0, a7e = -1, aNs = new Array(4);
		for (var a7 = 3; 0 <= a7; a7--) aNs[a7] = !1;
		var wF = Math.floor(1 + .02 * at.min);
		aNt = new Array(4), (aNu = new Array(4))[1] = aNu[3] = aNt[0] = aNt[2] = 0, aNu[0] = aNt[3] = -wF, aNt[1] = aNu[2] = wF
	}

	function aNw() {
		if (-1 !== a7e)
			if (0 !== a9.yl && aD.mL()) {
				for (var aNx = !1, a7 = 3; 0 <= a7; a7--) aNs[a7] && (aNx = !0, i6 += aNt[a7], i8 += aNu[a7], ab.a0H(aNt[a7], aNu[a7]), aO.a7M());
				aNx ? bb.dc = !0 : am.mB()
			} else am.mB()
	}
	this.a0n = function(e0) {
		0 !== a9.yl && aD.mL() && (aNr || aNv(), aNs[e0] = !0, -1 === a7e) && (a7e = setInterval(aNw, 20), aNw())
	}, this.a0q = function(e0) {
		if (0 !== a9.yl && (aNr || aNv(), aNs[e0] = !1, -1 !== a7e)) {
			for (var aNx = !1, a7 = 3; 0 <= a7; a7--) aNx = aNx || aNs[a7];
			aNx || this.mB()
		}
	}, this.mB = function() {
		if (aNr && -1 !== a7e) {
			for (var a7 = 3; 0 <= a7; a7--) aNs[a7] = !1;
			clearInterval(a7e), a7e = -1
		}
	}
}

function cc() {
	this.s = new aNy, this.lI = new aNz, this.nu = new aO0, this.aCE = new aO1, this.aAM = new aO2, this.aK8 = new aO3, this.oW = new aO4, this.aLp = new aO5, this.a5A = new aO6, this.aO7 = new aO8, this.aO9 = new aOA, this.aOB = new aOC, this.aOD =
		new aOE, this.dU = function() {
			this.s.dU()
		}
}

function aNy() {
	var aOF, aOH;
	this.aDF = 5, this.aD9 = this.aDF - 1, this.aCh = this.aDF + this.aD9, this.aCg = [0, 1, 5, 2, 6, 3, 7, 4, 8], this.aOG = null;

	function aOP(a7) {
		return aOH[a7].aNr && aOF[a7].aOP()
	}

	function aOR(zr) {
		aOH[zr].lt = bb.lt, aOH[zr].aOJ = !1
	}
	this.a00 = 0, this.zz = 0, this.dU = function() {
		this.aOG = new Array(this.aDF);
		this.aOG[0] = "territorial.io";
		var a7, aHH = au.aHc(0);
		for (au.a3F(0), a7 = 1; a7 < this.aDF; a7++) this.aOG[a7] = aG.yK() + ".territorial.io";
		for (au.a3F(aHH), aOF = new Array(this.aCh), aOH = new Array(this.aCh), a7 = this.aCh - 1; 0 <= a7; a7--) aOH[a7] = {
			aNr: !1,
			lt: 0,
			aOJ: !1
		};
		this.aCi(0, 0)
	}, this.aOK = function(a7) {
		return aOF[a7]
	}, this.aOL = function() {
		return this.zz < this.aDF ? this.zz : this.zz - this.aD9
	}, this.ie = function() {
		for (var a7 = this.aCh - 1; 0 <= a7; a7--) this.aCc(a7) && bb.lt > aOH[a7].lt + 15e3 && aw.nu.aOM(a7, aOH[a7].aOJ);
		!this.aCc(0) && bb.lt > aOH[0].lt + 8e3 && (aOH[0].lt = bb.lt, this.aCi(0, 0))
	}, this.aLl = function(id) {
		return this.aCi(0, id) && this.aON(0)
	}, this.aCi = function(zr, aJI) {
		if (aOH[zr].aNr) {
			if (aOF[zr].aOP()) return aOF[zr].aOQ(aJI), aOF[zr].aCc();
			aOF[zr].r4()
		}
		return this.aOO(zr, aJI), !1
	}, this.aOO = function(zr, aJI) {
		aOH[zr].aNr = !0, aOR(zr), aOF[zr] = new aOS, aOF[zr].dU(zr, aJI)
	}, this.aOQ = function(zr, aJI) {
		aOP(zr) && aOF[zr].aOQ(aJI)
	}, this.aOT = function(zr, aJI) {
		aw.aAM.aOU(zr)
	}, this.aON = function(a7) {
		return this.aCc(a7) && aOF[a7].aON()
	}, this.aOV = function(a7) {
		aOF[a7].aOV()
	}, this.aCc = function(a7) {
		return aOH[a7].aNr && aOF[a7].aCc()
	}, this.send = function(zr, a8) {
		aOR(zr), aOF[zr].send(a8)
	}, __fx.customLobby.setSendFunction(this.send), this.a0Y = function(zr) {
		8 === aW.zu() && (aOH[zr].aOJ = !0, aw.lI.aOW = !0)
	}, this.close = function(zr, aOX) {
		aOP(zr) && aOF[zr].close(aOX)
	}, this.aOY = function(zr, aOX) {
		l.a05(aOX), aOP(zr) && aOF[zr].close(aOX)
	}, this.a06 = function(aOX) {
		for (var a7 = this.aCh - 1; 0 <= a7; a7--) this.close(a7, aOX)
	}, this.aOZ = function(zr, aOX) {
		for (var a7 = this.aCh - 1; 0 <= a7; a7--) a7 !== zr && this.close(a7, aOX)
	}, this.a3R = function() {
		this.close(this.a00, 3246)
	}, this.aOa = function(zr, e) {
		aOF[zr].r4(), l.zq(zr, e.code)
	}
}

function aNz() {
	this.aOW = !1, this.ie = function() {
		bb.jj() % 250 != 249 || a9.gi || (aw.aAM.aOb(+(this.aOW && ac.la[a9.eI]), ah.jn + bJ.s.ok), this.aOW = !1)
	}
}

function aO6() {
	function aP2(aP3) {
		var eb = a9.data,
			aP3 = (eb.selectedPlayer = bD.oX(aP3), eb.spawningSeed = bD.oX(14), bD.oX(4)),
			aP3 = (aP3 < 7 ? (eb.gameMode = 1, eb.numberTeams = aP3 + 2) : 9 === aP3 ? (eb.gameMode = eb.isZombieMode = 1, eb.numberTeams = 2) : (eb.gameMode = 0, eb.battleRoyaleMode = 7 === aP3 ? 0 : 10 === aP3 ? 1 : 2), eb.isContest = bD.oX(1), bD
				.oX(6));
		return eb.mapType = bO.aBJ(aP3) ? 0 : 1, bO.aBK(eb, aP3), eb.mapSeed = bD.oX(14), aP3
	}
	this.aOd = function(zr, a8) {
		bD.dU(a8), 0 === bD.size ? aw.s.aOY(zr, 3205) : __fx.customLobby.isCustomMessage(a8) || ((0 === bD.oX(1) ? function(zr) {
			var aOh = bD.oX(6);
			0 === aOh ? function(zr) {
					if (0 === zr && 8 !== aW.zu()) {
						n.s.aN8();
						for (var aOu = bD.oX(12), aOv = bD.oX(6), g = new Array(aOu), a7 = 0; a7 < aOu; a7++) g[a7] = bD.oX(aOv);
						aP.a7l(g)
					}
				}(zr) : 2 === aOh ? aw.aO7.aOj(zr) : 3 === aOh || 4 === aOh ? ar.dU() : 9 === aOh ? aw.aO9.aOk(zr) : 10 === aOh ? aw.aOB.aOl() : 11 === aOh ? aw.aO9.aOm(zr) : 12 === aOh ? aw.aOB.aOn() : 13 === aOh ? aw.aOD.aOo() :
				14 === aOh ? aw.aOD.aOp() : 15 === aOh ? aw.aO9.aOq() : 16 === aOh ? aw.aO7.aOr(zr) : 17 === aOh ? aw.aO7.aOs(zr) : 18 === aOh && aw.aO7.aOt(zr)
		} : function(zr) {
			if (8 !== aW.zu() && !ar.aDG()) return;
			if (zr !== aw.s.a00) aw.s.aOY(zr, 3244);
			else if (0 === bD.oX(1)) bb.yu.aP4(bD.a8);
			else {
				var a7, zr = bD.oX(2);
				if (0 === zr) {
					var o8, nu = bD.oX(9);
					0 !== ac.la[nu] && 0 !== ac.la[a9.eI] && (o8 = bD.oX(10), aJ.o7(nu, a9.eI, o8), ab.p5(nu, 1, o8))
				} else if (1 === zr) ! function() {
					var nu = bD.oX(9);
					0 !== ac.la[nu] && 0 !== ac.la[a9.eI] && b1.aH1(0, [nu], !0) && aJ.oP(nu, 1)
				}();
				else if (2 === zr) ! function() {
					var nu = bD.oX(9),
						target = bD.oX(9);
					0 !== ac.la[nu] && 0 !== ac.la[target] && 0 !== ac.la[a9.eI] && b1.aH1(1, [nu], !0) && (ab.p5(nu, 3, 96), ab.p5(target, 4, 96), aJ.a5H(nu, target))
				}();
				else if (a5 && !a6) {
					var eY = 540;
					for (b9.a3(17287), b9.a4(1, 0), b9.a4(6, 10), eY = Math.min(b4.nr.oZ.length, 540), a7 = 0; a7 < eY; a7++) b9.aPA(32, b4.nr.oZ[a7]);
					aw.s.send(aw.s.a00, b9.a8)
				}
			}
		})(zr), bb.aOg())
	}, this.aOw = function(a8) {
		if (bD.dU(a8), bD.e0 = 1, 3 === bD.oX(6)) {
			bD.e0 += 20;
			var eb = a9.data = new a39,
				a8 = aP2(9),
				aBL = eb.humanCount = bD.oX(9) + 1;
			eb.selectableSpawn = 1 === eb.gameMode || aBL < 100, eb.colorsData = new Uint32Array(aBL), eb.playerNamesData = new Array(aBL);
			for (var a7 = 0; a7 < aBL; a7++) bD.e0++, eb.colorsData[a7] = bD.oX(18), eb.playerNamesData[a7] = bC.un.ur(bD.oX(5));
			aW.aCu(), bO.a3(a8, eb.mapSeed), a9.a3D()
		} else ! function() {
			bD.e0 += 20;
			var eb = a9.data = new a39,
				aP1 = aP2(1);
			eb.humanCount = 2;
			eb.selectableSpawn = 1, eb.elo = new Uint16Array(2), eb.colorsData = new Uint32Array(2), eb.playerNamesData = new Array(2);
			for (var a7 = 0; a7 < 2; a7++) bD.e0++, eb.colorsData[a7] = bD.oX(18), eb.elo[a7] = bD.oX(14), eb.playerNamesData[a7] = bC.un.ur(bD.oX(5));
			aW.aCu(), bO.a3(aP1, eb.mapSeed), a9.a3D()
		}()
	}, this.aOz = function() {
		bD.e0 = 1;
		var aOh = bD.oX(6),
			aP0 = bD.oX(10);
		return aw.s.zz > aw.s.aD9 && (aP0 += aw.s.aD9), aw.s.zz === aP0 ? (aw.s.a00 = aP0, !1) : (aw.s.close(aw.s.zz, 3247), aw.s.a00 = aP0, ar.aBG = bD.oX(10), ar.aD2 = bD.oX(3 === aOh ? 9 : 1), aw.s.aCi(aP0, 5) && aw.nu.aDA(), !0)
	}
}

function aOC() {
	this.aOl = function() {
		bf.s.uL(), bf.rF.rG(105, bB.rz.s0(bB.rz.s1(5))), bf.rF.rG(106, bB.rz.s0(bB.rz.s1(8))), bf.rF.rG(109, bD.oX(30)), bf.rF.rG(108, bf.dp.data[109].value), bf.rF.rG(111, bf.dp.data[109].value + 1), bf.rF.rG(107, 0), bf.rF.rG(110, "")
	}, this.aOn = function() {
		var aPD, aPE, aPF, aPG, aPC;
		bD.size < b9.aPB(29) ? aw.s.aOY(0, 3254) : (aPC = bD.oX(5), aPD = bD.oX(3), aPE = bD.oX(3), aPF = bD.oX(3), aPG = bD.oX(8), bD.aPH(197 + 16 * (aPC + aPD + aPE + aPF + aPG) + 32 + 32 + 30 + 128 + 32 + 30 + 10 + 32 + 2 + 10 + 5 + 30 + 30 +
			32) ? (aPC = {
			rv: bD.oX(30),
			uY: bD.oX(16),
			uZ: bD.oX(30),
			ua: bD.oX(30),
			ub: bD.oX(30),
			uc: bD.aPI(32),
			username: bC.un.ur(aPC),
			ud: bC.un.ur(aPD),
			ue: bC.un.ur(aPE),
			uf: bD.aPI(32),
			ug: bD.aPI(32),
			uh: bD.oX(30),
			ui: bD.aPI(32),
			uj: bD.aPI(32),
			uk: bD.aPI(32),
			ul: bD.aPI(32),
			aKI: bD.aPI(32),
			aKJ: bD.aPI(30),
			aKB: bD.aPI(10),
			aKT: bD.aPI(32),
			aKU: bC.un.ur(aPF),
			aKO: bD.aPI(2),
			aKP: bD.aPI(10),
			aKM: bC.un.ur(aPG),
			aKQ: bD.aPI(5),
			aK4: bD.oX(30),
			aKG: bD.oX(30),
			aKH: bD.aPI(32)
		}, bf.rF.rG(150, aPC.aKB), 8 === n.rw && (25 === n.aDV().aLk ? (aPC.aJm = !0, n.s.aJT = aPC, n.aDV().aLz(25, !1)) : (aPC.aJm = !1, aPC.qu = bf.dp.data[105].value, n.s.aJQ = aPC, bf.rF.uX(aPC), n.aDV().aLz(16, !0)))) : aw.s.aOY(0,
			3267))
	}
}

function aOE() {
	this.aOo = function() {
		var a7;
		if (bD.size < b9.aPB(39)) aw.s.aOY(0, 3259);
		else {
			var sG = bD.oX(6),
				eY = bD.oX(10),
				data = [];
			if (9 === sG || 10 === sG) {
				for (a7 = 0; a7 < eY; a7++) data.push([bD.oX(30), bC.up.v7(5), bD.aPI(32), 0, bD.oX(30)]);
				8 === n.rw && n.aDV().aLz(21, !0, {
					sG: sG,
					data: data
				})
			} else {
				var hO = bD.oX(16);
				if (bD.aPH(39 + 16 * hO + eY * (0 === sG ? 111 : 1 === sG ? 101 : 2 === sG || 3 === sG ? 127 : 212))) {
					if (0 === sG)
						for (a7 = 0; a7 < eY; a7++) data.push([bD.oX(30), bC.un.ur(bD.oX(5)), bD.oX(16), bD.oX(30), bD.oX(30)]);
					else if (1 === sG)
						for (a7 = 0; a7 < eY; a7++) data.push([bD.oX(16), bC.un.ur(bD.oX(3)), bD.oX(16), bC.un.ur(bD.oX(5)), bD.oX(31), bD.oX(30)]);
					else if (2 === sG || 3 === sG)
						for (a7 = 0; a7 < eY; a7++) data.push([bD.oX(30), bC.un.ur(bD.oX(5)), bD.aPI(32), bD.oX(30), bD.oX(30)]);
					else
						for (a7 = 0; a7 < eY; a7++) data.push([bD.oX(20), bD.oX(30), bD.oX(30), bD.oX(30), bD.oX(30), bD.aPI(32), bD.oX(30), bC.un.ur(bD.oX(5)), bC.un.ur(bD.oX(5))]);
					8 === n.rw && n.aDV().aLz(21, !0, {
						sG: sG,
						data: data
					})
				} else aw.s.aOY(0, 3260)
			}
		}
	}, this.aOp = function() {
		if (bD.size < b9.aPB(29)) aw.s.aOY(0, 3265);
		else {
			var aPJ = bD.oX(4),
				aPK = bD.oX(7),
				aPL = bD.oX(11);
			if (bD.aPH(29 + 16 * aPK + 16 * aPL + 11 * aPJ)) {
				for (var data = [], a7 = 0; a7 < aPJ; a7++) {
					for (var zP = bC.un.ur(bD.oX(3)), aPM = bD.oX(8), aL0 = [], er = 0; er < aPM; er++) aL0.push(bD.oX(16));
					data.push({
						name: "[" + zP + "]",
						aL0: aL0
					})
				}
				8 === n.rw && n.aDV().aLz(23, !0, data)
			} else aw.s.aOY(0, 3266)
		}
	}
}

function aO8() {
	this.aOj = function(zr) {
		if (zr !== aw.s.zz) aw.s.close(zr, 3239);
		else if (6 !== aW.zu()) aw.s.close(zr, 3271);
		else {
			bk.dU();
			for (var a7 = 0; a7 < 4; a7++) {
				var qc = bk.s.qd[a7],
					playerCount = (qc.sn = bD.oX(10), qc.eE = bD.oX(6), qc.mapSeed = bD.oX(14), qc.aBC = bD.oX(4), qc.aCG = bD.oX(6), qc.aCH = bD.oX(4), qc.aBI = bD.oX(1), qc.aBr = bD.oX(12), qc.spawningSeed = bD.oX(14), bD.oX(16));
				bk.t1.t3[a7] = bD.oX(16);
				for (var er = 0; er < playerCount; er++) bk.t1.aAs(a7, bD.oX(30), bC.up.v7(5), bD.oX(4), bD.oX(30), bD.oX(7), bD.oX(16), bD.oX(18), bD.oX(11))
			}
			n.o(29), bk.s.aBh(!0)
		}
	}, this.aOr = function(zr) {
		if (zr !== aw.s.zz) aw.s.close(zr, 3239);
		else if (bk.zy) {
			bk.s.aBf[0] = bD.oX(20), bk.s.aBf[1] = bD.oX(20);
			for (var aPN = bD.oX(16), er = 0; er < aPN; er++) {
				var id = bD.oX(3);
				0 === id ? bk.t1.aAs(bD.oX(2), bD.oX(30), bC.up.v7(5), 0, 1234566, 127, 0, bD.oX(18)) : 1 === id ? bk.t1.aB7(bD.oX(16), bD.oX(2)) : 2 === id ? bk.t1.aB3(bD.oX(16), bD.oX(2), bD.oX(2)) : 3 === id ? bk.t1.aB6(bD.oX(16), bD.oX(2)) :
					4 === id ? bk.t1.aAx(bD.oX(16), bD.oX(2), bD.oX(4), bD.oX(30), bD.oX(7), bD.oX(16), bD.oX(11)) : 5 === id && bk.t1.aAy(bD.oX(16), bD.oX(2), bD.oX(1))
			}
			for (var a7 = 0; a7 < 4; a7++) {
				var qc = bk.s.qd[a7];
				if (qc.sn = bD.oX(10), 0 === qc.sn) {
					if (qc.a00 = bD.oX(10), qc.aBG = bD.oX(10), bk.aAl.dd(a7)) return;
					qc.eE = bD.oX(6), qc.mapSeed = bD.oX(14), qc.aBC = bD.oX(4), qc.aCG = bD.oX(6), qc.aCH = bD.oX(4), qc.aBI = bD.oX(1), qc.aBr = bD.oX(12), qc.spawningSeed = bD.oX(14)
				}
			}
			bk.s.aBj()
		} else aw.s.close(zr, 3251)
	}, this.aOs = function(zr) {
		if (zr !== aw.s.zz) aw.s.close(zr, 3272);
		else if (bk.zy) {
			for (var qa = bD.oX(4), qc = bk.s.qd[qa], qe = qc.qe, aPO = (qc.qf = bD.oX(20), bD.oX(6)), a7 = 0; a7 < aPO; a7++) {
				var aBU, target, qu = bD.oX(30),
					id = bD.oX(4);
				0 === id ? qe.push({
					id: id,
					qu: qu,
					k: bC.up.v7(7)
				}) : 15 === id ? (aBU = bD.oX(3), target = bD.oX(30), qe.push({
					id: id,
					qu: qu,
					aBU: aBU,
					target: target,
					value: bD.oX(30)
				})) : 14 === id ? qe.push({
					id: id,
					qu: qu,
					aBU: bD.oX(3)
				}) : (target = bD.oX(30), qe.push({
					id: id,
					qu: qu,
					target: target,
					value: bD.oX(4)
				}))
			}
			bk.s.aBs(qa)
		} else aw.s.close(zr, 3273)
	}, this.aOt = function(zr) {
		zr !== aw.s.zz ? aw.s.close(zr, 3274) : bk.zy ? (bk.s.qg.push(bD.oX(6)), bk.s.aBs(bk.s.qb[0])) : aw.s.close(zr, 3275)
	}
}

function aOA() {
	this.aOk = function(zr) {
		var aP6, q4;
		bD.aPH(70) ? (aP6 = bD.oX(3), q4 = be.aPP.ie(bD.oX(30), bD.oX(30)), aw.aAM.aPQ(zr, q4, aP6), 0 < aP6 || (0 === zr && 0 === bf.dp.data[105].value.length ? aw.aAM.aLo(0) : aw.aK8.aPR(zr), 4 === aw.s.aOK(zr).aPS() ? 6 === aW.zu() && aw.aCE
			.aCj(zr) : 5 !== aw.s.aOK(zr).aPS() || 8 !== aW.zu() && 10 !== aW.zu() || aw.nu.aDA())) : aw.s.aOY(zr, 3269)
	}, this.aOm = function(zr) {
		var id = bD.oX(6);
		0 === id ? (aw.s.aOV(zr), aP.a7h || aw.aAM.aLo(1), b3.aAK(), 8 === n.rw && n.aDV().aLy()) : 21 === id ? 8 === n.rw && n.aDV().aLz(17) : 22 === id && (bf.rF.rG(106, bf.dp.data[110].value), bf.rF.rG(110, ""), 8 === n.rw) && n.aDV().aLz(16)
	}, this.aOq = function() {
		var eY = bD.oX(16),
			aPT = bD.oX(16);
		if (bD.aPH(55 + 10 * eY + 16 * aPT)) {
			for (var g = [], a7 = 0; a7 < eY; a7++) g.push(bC.un.ur(bD.oX(10)));
			b3.aAO(g)
		} else aw.s.aOY(0, 3270)
	}
}

function aO0() {
	this.aOM = function(zr, aOJ) {
		b9.a3(8), b9.a4(1, 0), b9.a4(6, 4), b9.a4(1, aOJ ? 1 : 0), aw.s.send(zr, b9.a8)
	}, this.aDA = function() {
		b9.a3(58), b9.a4(1, 0), b9.a4(6, 5), b9.a4(8, aw.s.aOL()), b9.a4(10, ar.aBG), b9.a4(9, ar.aD2), b9.a4(10, di), b9.a4(14, h.dj), aw.s.send(aw.s.a00, b9.a8)
	}, this.nv = function(eK) {
		b9.a3(27), b9.a4(1, 1), b9.a4(4, 0), b9.a4(22, eK), aw.s.send(aw.s.a00, b9.a8)
	}, this.nw = function(i5, iw) {
		b9.a3(25), b9.a4(1, 1), b9.a4(4, 1), b9.a4(10, i5), b9.a4(10, iw), aw.s.send(aw.s.a00, b9.a8)
	}, this.o0 = function(i5, ny) {
		b9.a3(24), b9.a4(1, 1), b9.a4(4, 2), b9.a4(10, i5), b9.a4(9, ny), aw.s.send(aw.s.a00, b9.a8)
	}, this.o1 = function(i5, eK) {
		b9.a3(37), b9.a4(1, 1), b9.a4(4, 3), b9.a4(10, i5), b9.a4(22, eK), aw.s.send(aw.s.a00, b9.a8)
	}, this.o4 = function(lz, eK) {
		b9.a3(37), b9.a4(1, 1), b9.a4(4, 4), b9.a4(10, lz), b9.a4(22, eK), aw.s.send(aw.s.a00, b9.a8)
	}, this.o6 = function(iw) {
		b9.a3(15), b9.a4(1, 1), b9.a4(4, 5), b9.a4(10, iw), aw.s.send(aw.s.a00, b9.a8)
	}, this.oA = function(e0) {
		b9.a3(15), b9.a4(1, 1), b9.a4(4, 6), b9.a4(10, e0), aw.s.send(aw.s.a00, b9.a8)
	}, this.oD = function(oC) {
		b9.a3(6), b9.a4(1, 1), b9.a4(4, 7), b9.a4(1, oC), aw.s.send(aw.s.a00, b9.a8)
	}, this.oF = function() {
		b9.a3(5), b9.a4(1, 1), b9.a4(4, 8), aw.s.send(aw.s.a00, b9.a8)
	}, this.oG = function(i5, eK, iw) {
		b9.a3(47), b9.a4(1, 1), b9.a4(4, 10), b9.a4(10, i5), b9.a4(10, iw), b9.a4(22, eK), aw.s.send(aw.s.a00, b9.a8)
	}, this.oN = function(aPU, aPV) {
		b9.a3(24), b9.a4(1, 1), b9.a4(4, 15), b9.a4(9, aPV), b9.a4(10, aPU), aw.s.send(aw.s.a00, b9.a8)
	}, this.oQ = function(a5A) {
		b9.a3(14), b9.a4(1, 1), b9.a4(4, 14), b9.a4(9, a5A), aw.s.send(aw.s.a00, b9.a8)
	}, this.oU = function(aPW, target) {
		var a7, eY = aPW.length;
		for (b9.a3(14 + 9 * eY), b9.a4(1, 1), b9.a4(4, 13), b9.a4(9, target), a7 = 0; a7 < eY; a7++) b9.a4(9, aPW[a7]);
		aw.s.send(aw.s.a00, b9.a8)
	}
}

function aO3() {
	this.aPX = function() {
		b9.a3(39), b9.a4(1, 0), b9.a4(6, 16), aw.aAM.aPY(), aw.s.send(0, b9.a8)
	}, this.aPR = function(zr) {
		b9.a3(115), b9.a4(1, 0), b9.a4(6, 17), bC.rz.v3(bf.dp.data[105].value, 5), bC.rz.v3(bf.dp.data[106].value, 8), b9.a4(30, bf.dp.data[109].value), aw.s.send(zr, b9.a8)
	}, this.aM1 = function() {
		b9.a3(55), b9.a4(1, 0), b9.a4(6, 18), bC.rz.v2(bf.dp.data[110].value), aw.s.send(0, b9.a8)
	}, this.aLx = function(a2Y) {
		var eY = a2Y.pD.length;
		b9.a3(21 + 16 * eY), b9.a4(1, 0), b9.a4(6, 29), b9.a4(6, a2Y.ry), b9.a4(8, eY), bB.un.v2(a2Y.pD), aw.s.send(0, b9.a8)
	}, this.aKL = function(data) {
		b9.a3(73), b9.a4(1, 0), b9.a4(6, 25), b9.a4(6, data.ry), bC.rz.v3(data.qu, 5), b9.a4(30, data.rv), aw.s.send(0, b9.a8)
	}, this.aK9 = function(data) {
		b9.a3(105), b9.a4(1, 0), b9.a4(6, 27), b9.a4(6, data.ry), bC.rz.v3(data.qu, 5), b9.a4(30, data.rv), b9.aPA(32, data.value), aw.s.send(0, b9.a8)
	}
}

function aO4() {
	this.oV = function() {
		for (var eY = a9.jm, ya = bN.result.ya, kU = ya.length, zJ = (b9.a3(17 + 16 * eY + 33 * kU), b9.a4(1, 1), b9.a4(4, 12), b9.a4(10, kU), b9.a4(1, +(2 === a9.yi)), b9.a4(1, a9.z2 % 2), ac.zJ), a7 = 0; a7 < eY; a7++) b9.a4(16, zJ[a7]);
		for (var gM = ac.gM, a7 = 0; a7 < kU; a7++) {
			var g6 = ya[a7];
			b9.a4(9, g6), b9.a4(24, gM[g6])
		}
		aw.s.send(aw.s.a00, b9.a8)
	}
}

function aO5() {
	this.aLq = function(sG, sH, sI) {
		b9.a3(75), b9.a4(1, 0), b9.a4(6, 21), b9.a4(6, sG), b9.a4(1, +(sH < 0)), b9.a4(1, +(sI < 0)), b9.a4(30, Math.abs(sH)), b9.a4(30, Math.abs(sI)), aw.s.send(0, b9.a8)
	}, this.aLr = function(sG, aLs, aLt) {
		b9.a3(18 + 16 * aLs.length + 30), b9.a4(1, 0), b9.a4(6, 22), b9.a4(6, sG), aw.aAM.aPa(aLs), b9.a4(30, aLt), aw.s.send(0, b9.a8)
	}, this.aLw = function(sG, aLs, aLt) {
		b9.a3(73), b9.a4(1, 0), b9.a4(6, 28), b9.a4(6, sG), bC.rz.v3(aLs, 5), b9.a4(30, aLt), aw.s.send(0, b9.a8)
	}, this.aLu = function(aKz, zO) {
		for (var eY = zO.length, hO = 0, a7 = 0; a7 < eY; a7++) hO += zO[a7].length;
		for (b9.a3(21 + 3 * eY + 16 * hO), b9.a4(1, 0), b9.a4(6, 23), b9.a4(3, aKz), b9.a4(4, eY), b9.a4(7, hO), a7 = 0; a7 < eY; a7++) b9.a4(3, zO[a7].length), bB.un.v2(zO[a7]);
		aw.s.send(0, b9.a8)
	}, this.aLv = function(aKz, sH, sI) {
		b9.a3(52), b9.a4(1, 0), b9.a4(6, 24), b9.a4(3, aKz), b9.a4(1, +(sH < 0)), b9.a4(1, +(sI < 0)), b9.a4(20, Math.abs(sH)), b9.a4(20, Math.abs(sI)), aw.s.send(0, b9.a8)
	}
}

function aO1() {
	this.aCj = function(zr) {
		var username = bf.dp.data[122].value.slice(0, 20),
			username = (b9.a3(24 + 16 * username.length + 18), b9.a4(1, 0), b9.a4(6, 1), b9.a4(10, di), b9.a4(2, bf.dp.data[158].value), aw.aAM.aPa(username), b6.color.a1f(bf.s.uS()));
		b9.a4(6, username[0]), b9.a4(6, username[1]), b9.a4(6, username[2]), aw.s.zz = zr, aw.s.send(zr, b9.a8)
	}, this.aCF = function(aPc, a2Y) {
		bA.dU(), bA.a4(1, 0), bA.a4(6, 2), bA.a4(3, aPc), 2 === aPc ? bA.a4(2, a2Y) : 3 === aPc ? bB.up.yE(a2Y, 7, bA) : 5 === aPc && (bA.a4(3, a2Y.id), bA.a4(3, a2Y.value), bA.a4(30, a2Y.qu)), aw.s.send(aw.s.zz, bA.aPd())
	}
}

function aO2() {
	this.aOU = function(zr) {
		b9.a3(39), b9.a4(1, 0), b9.a4(6, 13), b9.a4(14, h.dj), b9.a4(4, u.id), b9.a4(7, u.f1), b9.a4(1, +a5), b9.a4(1, +a6), b9.a4(5, (new Date).getHours() % 24), aw.s.send(zr, b9.a8)
	}, this.aPQ = function(zr, q4, aP6) {
		b9.a3(70), b9.a4(1, 0), b9.a4(6, 14), b9.a4(3, aP6), b9.a4(30, q4[0]), b9.a4(30, q4[1]), aw.s.send(zr, b9.a8)
	}, this.aLo = function(id) {
		b9.a3(13), b9.a4(1, 0), b9.a4(6, 15), b9.a4(6, id), aw.s.send(0, b9.a8)
	}, this.aAN = function(id, pD) {
		var eY = Math.min(pD.length, 63);
		b9.a3(19 + 16 * eY), b9.a4(1, 0), b9.a4(6, 26), b9.a4(6, id), b9.a4(6, eY), bB.un.v2(pD), aw.s.send(0, b9.a8)
	}, this.aPe = function(aP0, pO) {
		b9.a3(7 + 26 * pO.length), b9.a4(1, 0), b9.a4(6, 9);
		for (var a7 = 0; a7 < pO.length; a7++) b9.a4(16, pO[a7][0]), b9.a4(10, pO[a7][1]);
		aw.s.send(aP0, b9.a8)
	}, this.aOb = function(aPf, aPg) {
		b9.a3(20), b9.a4(1, 0), b9.a4(6, 19), b9.a4(1, aPf), b9.a4(12, aPg), aw.s.send(aw.s.a00, b9.a8)
	}, this.aPa = function(username) {
		b9.a4(5, username.length), bB.un.v2(username)
	}
}

function aOS() {
	var zr, aJI, aPh, aPi = ["wss://", "/s50/", "/s51/", "/s52/"],
		aPj = 0;

	function aOT() {
		aw.s.aOT(zr, aJI)
	}

	function aPo(e) {
		aw.a5A.aOd(zr, new Uint8Array(e.data))
	}

	function aPp() {}

	function aOa(e) {
		aw.s.aOa(zr, e)
	}
	this.dU = function(e0, aPk) {
		zr = e0, aJI = aPk;
		e0 = aPi[0];
		zr < aw.s.aDF ? e0 += aw.s.aOG[zr] + aPi[1 + dg] : e0 += aw.s.aOG[0] + "/i" + (1 + dg) + (zr - aw.s.aD9) + "/", (aPh = new WebSocket(__fx.customLobby.isActive() && zr === 1 ? __fx.customLobby.getSocketURL() : e0)).binaryType =
			"arraybuffer", aPh.onopen = aOT, aPh.onmessage = aPo, aPh.onclose = aOa, aPh.onerror = aPp
	}, this.aPm = function() {
		return aPh.readyState === aPh.CONNECTING
	}, this.aCc = function() {
		return aPh.readyState === aPh.OPEN
	}, this.aON = function() {
		return aPj
	}, this.aOV = function() {
		aPj = 1
	}, this.aOP = function() {
		return this.aPm() || this.aCc()
	}, this.aOQ = function(aPk) {
		aJI = aPk
	}, this.aPS = function() {
		return aJI
	}, this.send = function(a8) {
		this.aCc() && aPh.send(a8)
	}, this.close = function(aOX) {
		this.aOP() && (aPh.close(aOX), this.r4())
	}, this.r4 = function() {
		aPh.onopen = null, aPh.onmessage = null, aPh.onclose = null, aPh.onerror = null
	}
}

function dD() {
	var aPq = !1,
		a5V = 0,
		a1 = 0,
		s3 = 0,
		gap = 0,
		canvas = null,
		x0 = null,
		a1H = null;

	function aPs() {
		for (var aPy, aPw = 0, eY = 0, et = Math.floor(a1 / 2), dz = Math.floor(s3 / 2), aPx = 1.5 * Math.PI, a7 = a9.w4; 0 <= a7; a7--) eY += a1H[a7], 0 === a1H[a7] && aPw++;
		if (aPq = !1, x0.clearRect(0, 0, a1, a1), x0.fillStyle = b7.ma, x0.fillRect(0, 0, a1, a1), x0.fillStyle = b7.md, x0.fillRect(0, 0, a1, gap), x0.fillRect(0, 0, gap, a1), x0.fillRect(a1 - gap, 0, gap, a1), x0.fillRect(0, a1 - gap, a1, gap), 0 <
			eY)
			if (aPw === a9.w4) {
				for (a7 = a9.w4; 0 <= a7; a7--)
					if (0 < a1H[a7]) {
						! function(a7, et, dz) {
							x0.fillStyle = bc.aQ5[bc.k8[a7]], x0.beginPath(), x0.arc(et, et, dz, 0, 2 * Math.PI), x0.fill()
						}(a7, et, dz);
						break
					}!
				function(et) {
					var fontSize = et / 3;
					x0.font = b6.pW.rY(1, fontSize), x0.fillStyle = b7.md, x0.fillText("100%", et, et + .1 * fontSize)
				}(et)
			} else {
				for (a7 = 0; a7 <= a9.w4; a7++) 0 < a1H[a7] && (! function(a7, et, dz, aPx, aPy) {
					x0.fillStyle = bc.aQ5[bc.k8[a7]], x0.beginPath(), x0.arc(et, et, dz, aPx, aPy), x0.lineTo(et, et), x0.fill()
				}(a7, et, dz, aPx, aPy = aPx + 2 * Math.PI * a1H[a7] / eY), function(et, dz, aPx, aPy) {
					var f0 = (aPy - aPx) / (2 * Math.PI),
						fontSize = +dz * Math.min(f0, .37);
					fontSize < 8 || (aPx = (aPx + aPy) / 2, aPy = Math.floor(100 * f0 + .5) + "%", dz *= .525 - Math.max(.6 * (f0 - .7), 0), x0.font = b6.pW.rY(1, fontSize), x0.fillStyle = b7.md, x0.fillText(aPy, et + Math.cos(aPx) * dz, et +
						Math.cos(aPx + 1.5 * Math.PI) * dz))
				}(et, dz, aPx, aPy), 0 !== a7 && aQ3(et, dz, aPx), aPx = aPy);
				aQ3(et, dz, 1.5 * Math.PI)
			}!
		function(et, dz) {
			x0.beginPath(), x0.arc(et, et, dz, 0, 2 * Math.PI), x0.stroke()
		}(et, dz)
	}

	function aQ3(et, dz, aQ6) {
		x0.beginPath(), x0.moveTo(et, et), x0.lineTo(et + Math.cos(aQ6) * dz, et + Math.cos(aQ6 + 1.5 * Math.PI) * dz), x0.stroke()
	}
	this.dU = function() {
		if (a9.hL) {
			a5V = 0, a1H = new Uint32Array(a9.w4 + 1);
			for (var a7 = a9.w4; 0 <= a7; a7--) a1H[a7] = 0;
			for (a7 = ah.jn - 1; 0 <= a7; a7--) a1H[bc.eW[ah.jo[a7]]] += 1;
			this.resize()
		} else a1H = x0 = canvas = null
	}, this.a6H = function() {
		return a1
	}, this.resize = function() {
		a9.hL && (a1 = Math.floor(u.v.rB() && !a9.m6 ? .18 * at.min : .13 * at.pY), a1 = (a1 *= 1 + (.5 + .2 * u.v.rB()) * a9.m6) + a1 % 2, s3 = Math.floor(7 * a1 / 8), (canvas = canvas || document.createElement("canvas")).width = a1, canvas
			.height = a1, x0 = canvas.getContext("2d", {
				alpha: !0
			}), gap = Math.max(1, .015 * a1), x0.lineWidth = gap, x0.strokeStyle = b7.md, b6.pW.textAlign(x0, 1), b6.pW.textBaseline(x0, 1), aPs())
	}, this.a2V = function() {
		var dk, kx = this.ky();
		return bc.k8[kx] || (kx = function() {
			for (var kx = -1, a7 = a9.w4; 1 <= a7; a7--)(-1 === kx || a1H[a7] > a1H[kx]) && (kx = a7);
			return kx
		}(), dk = ac.gM[l1[0]], -1 !== kx && a1H[kx] > dk) ? a1H[kx] : dk
	}, this.zd = function() {
		return a5V = 31, this.ie(), this.ky()
	}, this.ky = function() {
		for (var kx = 0, a7 = a9.w4; 0 < a7; a7--) a1H[a7] > a1H[kx] && (kx = a7);
		return kx
	}, this.kz = function(aPu) {
		for (var g1 = 0, jo = ah.jo, eW = bc.eW, eY = ah.jn, fC = bK.fC, a7 = 0; a7 < eY; a7++) {
			var g6 = jo[a7];
			eW[g6] === aPu && (fC[g1++] = g6)
		}
		bK.f4[0] = g1
	}, this.ie = function() {
		if (a9.hL && 32 <= ++a5V) {
			a5V = 0;
			for (var a7 = a9.w4; 0 <= a7; a7--) a1H[a7] = 0;
			for (a7 = ah.jn - 1; 0 <= a7; a7--) a1H[bc.eW[ah.jo[a7]]] += ac.gM[ah.jo[a7]];
			aPq = !0
		}
	}, this.lN = function() {
		a9.hL && aPq && aPs()
	}, this.ta = function() {
		a9.hL && (a9.m6 ? tb.drawImage(canvas, bY.gap, bY.gap) : tb.drawImage(canvas, bY.gap, a6I + 2 * bY.gap))
	}
}

function cw() {
	function aQ8(key) {
		var aNN;
		return "undefined" == typeof URLSearchParams || (aNN = window.location.search, "string" != typeof(aNN = new URLSearchParams(aNN).get(key))) || aNN.length < 1 ? null : aNN
	}
	this.dd = function() {
		if (0 !== u.id) return !1;
		if (! function() {
				var value = aQ8("account");
				if (!value && !(value = aQ8("a"))) return void bE.clear();
				return bE.clear(), n.o(8, n.rw, new rx(1e3, {
					ry: 0,
					qu: value,
					rv: 0
				})), 1
			}()) {
			var value = aQ8("replay");
			if (!this.clear()) return !1;
			if (!value) return !1;
			n.o(3, 0, value)
		}
		return !0
	}, this.clear = function() {
		var zn = new URL(window.location.href);
		zn.search = "";
		try {
			return history.replaceState(null, "", zn.toString()), !0
		} catch (e) {
			console.log("error 352: " + e)
		}
		return !1
	}, this.aKV = function(key, value) {
		if (0 === u.id) try {
			var zn = new URL(window.location.href),
				g6 = zn.searchParams;
			g6.set(key, value), zn.search = g6.toString(), history.replaceState(null, "", zn.toString())
		} catch (e) {
			console.log("error 358: " + e)
		}
	}
}

function cd() {
	var aQA, g;
	this.dU = function() {
		for (var a7 = (g = new Uint16Array(101)).length - 1; 0 <= a7; a7--) g[a7] = bH.dl(32768 * a7, 100);
		this.a3F(0)
	}, this.value = function(g6) {
		return g[g6]
	}, this.aHc = function() {
		return bH.dl(aQA - 1, 2)
	}, this.a3F = function(aHH) {
		aQA = 2 * aHH % 32768 + 1
	}, this.random = function() {
		return aQA = 167 * aQA % 32768
	}, this.j3 = function(lV) {
		return bH.dl(lV * this.random(), 32768)
	}, this.je = function(g6) {
		return 0 !== g6 && this.random() < this.value(g6)
	}, this.iP = function(er, es) {
		return er + this.j3(es - er)
	}
}

function cs() {
	this.om = new aQB, this.a3Q = new aQC, this.aF0 = new aQD, this.dU = function() {
		a9.gi || this.om.dU()
	}, this.ie = function() {
		a9.gi || (this.om.ie(), 3 !== n.rw) || bb.jj() % 15 != 5 && 2 !== a9.yl || n.aDV().aNO()
	}, this.aNR = function() {
		0 === a9.yl && aW.aCu(), a9.a3A.a3Y(), a9.data.canvas = null, aw.s.close(aw.s.a00, 3257), aw.s.a00 = 0, a9.data.isReplay = 1, a9.a3D()
	}, this.aNQ = function(pD) {
		var a7 = pD.indexOf("=");
		return 0 <= a7 ? pD.substring(a7 + 1) : pD
	}, this.aNP = function(pD) {
		return "https://territorial.io/?replay=" + pD
	}
}

function aQB() {
	this.aQF = null, this.aQG = null, this.aQH = null, this.aQI = null, this.aQJ = null, this.aQK = null, this.a3P = "";
	var aQL = 0;
	this.dU = function() {
		this.aQF = [], this.aQG = [], this.aQH = [], this.aQI = [], this.aQJ = [0], this.aQK = [0], aQL = 0, this.a3P = ""
	}, this.on = function(id, fG, fI, fK) {
		a9.gi || 2 === a9.yl || (0 === this.aQJ[aQL] && (this.aQK[aQL] ? (this.aQJ.push(1), this.aQK.push(0), aQL++) : this.aQJ[aQL] = 1), this.aQF.push(id), this.aQG.push(fG), this.aQH.push(void 0 === fI ? 0 : fI), this.aQI.push(void 0 === fK ?
			0 : fK), this.aQK[aQL]++)
	}, this.ie = function() {
		0 === this.aQJ[aQL] ? this.aQK[aQL]++ : (this.aQJ.push(0), this.aQK.push(0), aQL++)
	}
}

function aQD() {
	var aQM = 0;

	function aQQ(pD, id) {
		aQM || (id ? 1 === id ? aJ.a4b = L(397) + ": " + pD : n.o(4, 3, new p(L(398), pD, 1)) : n.o(4, 3, new p("⚠️ " + L(396), pD, 1)))
	}
	this.v7 = function(pD, aQN) {
		var pO;
		return aQM = aQN, bC.rz.uz(bC.rz.ux(bC.rz.uv(pD))), aJ.a4b = "", !(! function() {
			if (bD.size < 10) aQQ("File Too Small");
			else {
				var aQS = bD.oX(12),
					aPg = (aQS !== h.rVersion && aQQ("Incompatible Version " + aQS + " " + h.rVersion, 1), bD.oX(12)),
					aQT = bD.oX(31);
				if (aQT !== bD.size) aQQ("Size Error: " + aQT + " " + bD.size);
				else if (function(jF, aQS) {
						for (var g6 = bD.a8, eY = bD.size, aPg = aQS, a7 = 3; a7 < eY; a7++) aPg = aPg + g6[a7] & 4095;
						return aPg === jF || (aQQ("Hash Error: " + aPg + " " + jF + " " + eY), !1)
					}(aPg, aQS)) return 1
			}
			return
		}() || (aQN = bD, (pO = a9.data = new a39).mapType = aQN.oX(2), pO.mapProceduralIndex = aQN.oX(8), pO.mapRealisticIndex = aQN.oX(8), pO.mapSeed = aQN.oX(14), pO.mapName = aQN.aQV(5), 2 === pO.mapType && aQN.aQW(), pO
			.passableWater = aQN.oX(1), pO.passableMountains = aQN.oX(1), pO.playerCount = aQN.oX(10), pO.humanCount = aQN.oX(10), pO.selectedPlayer = aQN.oX(9), pO.gameMode = aQN.oX(1), pO.playerMode = aQN.oX(2), pO.battleRoyaleMode =
			aQN.oX(2), pO.numberTeams = aQN.oX(4), pO.isZombieMode = aQN.oX(1), pO.isContest = aQN.oX(1), pO.isReplay = aQN.oX(1), pO.elo = aQN.aQX(2, 14, 2), pO.colorsType = aQN.oX(1), pO.colorsPersonalized = aQN.oX(1), pO.colorsData =
			aQN.aQX(10, 18, 512), pO.selectableColor = aQN.oX(1), pO.teamPlayerCount = aQN.aQX(4, 10, 9), pO.neutralBots = aQN.oX(1), pO.botDifficultyType = aQN.oX(2), pO.botDifficultyValue = aQN.oX(4), pO.botDifficultyTeam = aQN.aQX(4,
				4, 9), pO.botDifficultyData = aQN.aQX(10, 4, 512), pO.spawningType = aQN.oX(2), pO.spawningSeed = aQN.oX(14), pO.spawningData = aQN.aQX(11, 12, 1024), pO.selectableSpawn = aQN.oX(1), pO.playerNamesType = aQN.oX(2), pO
			.playerNamesData = aQN.aQY(10, 5, 512), pO.selectableName = aQN.oX(1), pO.aIncomeType = aQN.oX(2), pO.aIncomeValue = aQN.oX(8), pO.aIncomeData = aQN.aQX(10, 8, 512), pO.tIncomeType = aQN.oX(2), pO.tIncomeValue = aQN.oX(8), pO
			.tIncomeData = aQN.aQX(10, 8, 512), pO.iIncomeType = aQN.oX(2), pO.iIncomeValue = aQN.oX(8), pO.iIncomeData = aQN.aQX(10, 8, 512), pO.sResourcesType = aQN.oX(2), pO.sResourcesValue = aQN.oX(11), pO.sResourcesData = aQN.aQX(10,
				11, 512), ! function() {
				var hq = bD,
					v8 = hq.oX(5),
					aQZ = hq.oX(30),
					aQa = hq.oX(30);
				if (aQZ + aQa > 8 * hq.size) return void aQQ("Corrupted File");
				return function(eY) {
						var aQd = new Uint8Array(eY),
							aQe = new Uint16Array(eY),
							aQf = new Uint32Array(eY),
							aQg = new Uint32Array(eY);
						b5.om.aQF = aQd, b5.om.aQG = aQe, b5.om.aQH = aQf, b5.om.aQI = aQg;
						for (var a7 = 0; a7 < eY; a7++) {
							var id = bD.oX(4);
							aQd[a7] = id, aQe[a7] = bD.oX(9), 0 === id ? aQf[a7] = bD.oX(22) : 1 === id ? (aQf[a7] = bD.oX(10), aQg[a7] = bD.oX(10)) : 2 === id ? (aQf[a7] = bD.oX(10), aQg[a7] = bD.oX(9)) : 3 === id || 4 === id ? (aQf[
								a7] = bD.oX(10), aQg[a7] = bD.oX(22)) : 5 === id || 6 === id ? aQf[a7] = bD.oX(10) : 7 === id ? aQf[a7] = bD.oX(1) : 10 === id && (aQf[a7] = bD.oX(20), aQg[a7] = bD.oX(22))
						}
					}(aQZ),
					function(eY, v8) {
						var aQJ = new Uint8Array(eY),
							aQK = new Array(eY);
						aQK.fill(0), b5.om.aQJ = aQJ, b5.om.aQK = aQK;
						for (var a7 = 0; a7 < eY; a7++) aQJ[a7] = bD.oX(1), aQK[a7] = bD.oX(v8)
					}(aQa, v8), 1
			}()) || (bD.e0 < 8 * bD.size - 13 || bD.e0 > 8 * bD.size ? (aQQ("Out Of Bounds Error: " + bD.e0 + " " + 8 * bD.size), 1) : (b5.om.a3P = pD, 2 === a9.data.mapType && (aQQ("Load base64 image...", 2), 1))))
	}, this.aF1 = function(aEb, aQR) {
		var a1a = document.createElement("canvas"),
			hT = a1a.getContext("2d");
		if (a1a.width = aEb.width, a1a.height = aEb.height, hT.drawImage(aEb, 0, 0), aQM || aQR) return a9.yl ? void 0 : (a9.data.canvas = a1a, a9.data.mapType = 2, n.r(), void n.o(19));
		b5.aNR()
	}
}

function aQC() {
	this.yE = function() {
		var v8 = function() {
				for (var aQK = b5.om.aQK, eY = aQK.length, max = 0, a7 = 0; a7 < eY; a7++) max = Math.max(max, aQK[a7]);
				return vF(Math.max(max, 1))
			}(),
			a1 = (pO = a9.data, (a1 = bA).dU(), a1.a4(12, h.rVersion), a1.e0 += 43, a1.a4(2, pO.mapType), a1.a4(8, pO.mapProceduralIndex), a1.a4(8, pO.mapRealisticIndex), a1.a4(14, pO.mapSeed), a1.aQn(pO.mapName, 5), 2 === pO.mapType && a1.aQo(pO
				.canvas), a1.a4(1, pO.passableWater), a1.a4(1, pO.passableMountains), a1.a4(10, pO.playerCount), a1.a4(10, pO.humanCount), a1.a4(9, pO.selectedPlayer), a1.a4(1, pO.gameMode), a1.a4(2, pO.playerMode), a1.a4(2, pO
				.battleRoyaleMode), a1.a4(4, pO.numberTeams), a1.a4(1, pO.isZombieMode), a1.a4(1, pO.isContest), a1.a4(1, pO.isReplay), a1.db(pO.elo, 2, 14), a1.a4(1, pO.colorsType), a1.a4(1, pO.colorsPersonalized), a1.db(pO.colorsData, 10,
				18), a1.a4(1, pO.selectableColor), a1.db(pO.teamPlayerCount, 4, 10), a1.a4(1, pO.neutralBots), a1.a4(2, pO.botDifficultyType), a1.a4(4, pO.botDifficultyValue), a1.db(pO.botDifficultyTeam, 4, 4), a1.db(pO.botDifficultyData, 10,
				4), a1.a4(2, pO.spawningType), a1.a4(14, pO.spawningSeed), a1.db(pO.spawningData, 11, 12), a1.a4(1, pO.selectableSpawn), a1.a4(2, pO.playerNamesType), a1.aQp(pO.playerNamesData, 10, 5), a1.a4(1, pO.selectableName), a1.a4(2, pO
				.aIncomeType), a1.a4(8, pO.aIncomeValue), a1.db(pO.aIncomeData, 10, 8), a1.a4(2, pO.tIncomeType), a1.a4(8, pO.tIncomeValue), a1.db(pO.tIncomeData, 10, 8), a1.a4(2, pO.iIncomeType), a1.a4(8, pO.iIncomeValue), a1.db(pO
				.iIncomeData, 10, 8), a1.a4(2, pO.sResourcesType), a1.a4(11, pO.sResourcesValue), a1.db(pO.sResourcesData, 10, 11), ! function(v8) {
				var a1 = bA,
					aQF = b5.om.aQF,
					fG = b5.om.aQG,
					fI = b5.om.aQH,
					fK = b5.om.aQI,
					eY = aQF.length;
				a1.a4(5, v8), a1.a4(30, eY), a1.a4(30, b5.om.aQK.length);
				for (var a7 = 0; a7 < eY; a7++) {
					var et = aQF[a7];
					a1.a4(4, et), a1.a4(9, fG[a7]), 0 === et ? a1.a4(22, fI[a7]) : 1 === et ? (a1.a4(10, fI[a7]), a1.a4(10, fK[a7])) : 2 === et ? (a1.a4(10, fI[a7]), a1.a4(9, fK[a7])) : 3 === et || 4 === et ? (a1.a4(10, fI[a7]), a1.a4(22, fK[
						a7])) : 5 === et || 6 === et ? a1.a4(10, fI[a7]) : 7 === et ? a1.a4(1, fI[a7]) : 10 === et && (a1.a4(20, fI[a7]), a1.a4(22, fK[a7]))
				}
			}(v8), ! function(v8) {
				for (var a1 = bA, aQJ = b5.om.aQJ, aQK = b5.om.aQK, eY = aQJ.length, a7 = 0; a7 < eY; a7++) a1.a4(1, aQJ[a7]), a1.a4(v8, aQK[a7])
			}(v8), bA.e0),
			pO = bH.dl(a1 - 1, 6) + 1,
			v8 = (b9.aPB(6 * pO) !== bA.g.length && bA.g.push(0), ! function() {
				var a1 = bA;
				a1.e0 = 24, a1.a4(31, a1.g.length), a1.e0 = 12, a1.a4(12, function() {
					for (var g = bA.g, eY = g.length, aPg = h.rVersion, a7 = 3; a7 < eY; a7++) aPg = aPg + g[a7] & 4095;
					return aPg
				}())
			}(), bD.dU(bA.g), bB.rz.s0(bB.rz.s1(pO)));
		return bD.a07(), bA.dU(), v8
	}
}

function ci() {
	var et, bo = !1,
		aQr = !1,
		aQs = -1e4,
		aQt = -1,
		aQu = 0;

	function resize(aQy) {
		et = 0, aX.sO() && (aQw(aQy) || bo) && (bo = !1, bY.resize(), bS.a9x.resize(), aU.dU(), bU.dU(), aV.resize(), aP.resize(), aK.resize(), n.resize(), 1 <= a9.yl ? (aR.resize(!1), aQ.resize(), aS.resize(), aO.resize(), aN.resize(), aJ.resize(),
			aI.resize(), b8.resize(), aq.resize(), aL.resize(), aM.resize(), aH.resize(), ba.resize(), ab.resize(), aT.resize(), bd.resize(), aO.a7M()) : (aW.aCw(), aW.aCx()), bb.dc = !0)
	}

	function aQv(f0) {
		return f0 && 128 < f0 ? Math.floor(f0) : 128
	}

	function aQw(aQy) {
		var a1, jF, aR0, s3, a6l;
		if (!(0 < at.rf)) return s3 = aQv(document.documentElement.clientWidth), a6l = aQv(window.visualViewport && 2 !== u.id ? window.visualViewport.height : document.documentElement.clientHeight), a1 = s3, jF = a6l, aR0 = 0 !== u.id || a1 < jF ?
			700 : 1200, aR0 = Math.min(aR0 / ((a1 + jF) / 2), 1), aR0 = 0 === bf.dp.data[1].value ? 2 * aR0 / 3 : Math.min(aR0 + (bf.dp.data[1].value - 1) * (1 - aR0) / 2, 1), at.pc = (window.devicePixelRatio || 1) * aR0, __fx.hoveringTooltip
			.canvasPixelScale = at.pc, aQy && !aQr ? (aQr = !0, document.body.removeChild(a0G)) : aQr && (aQr = !1, document.body.appendChild(a0G)), a1 = Math.floor(.5 + s3 * at.pc), jF = Math.floor(.5 + a6l * at.pc), a1 !== at.a1 || jF !== at
			.jF ? (at.a1 = a1, at.jF = jF, at.min = a9b(a1, jF), at.max = a4q(a1, jF), at.pY = bH.dl(a1 + jF, 2), at.tX = a1 / jF, a0G.width = a1, a0G.height = jF, a0G.style.width = s3 + "px", a0G.style.height = a6l + "px", aQt = bb.lt + 1e3,
			1) : void 0
	}
	this.a1 = 0, this.jF = 0, this.min = 0, this.max = 0, this.pY = 0, this.tX = 1, this.pc = 1, this.rf = 0, this.dV = function() {
		this.a1 = aQv(document.documentElement.clientWidth) + 2, this.jF = aQv(document.documentElement.clientHeight) + 2
	}, this.dU = function() {
		et = 1, a0G = document.getElementById("canvasA"), (tb = a0G.getContext("2d", {
			alpha: __fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aQw(0)
	}, this.ie = function() {
		ay.ie(), 50 <= ++et && resize(0), -1 === aQt || bb.lt < aQt || (aQt = -1, 2e3 * ++aQu >= bb.lt + 8e3 ? console.log("error 3748") : u.v.setState(15))
	}, this.df = function(hf) {
		bo = !0, resize(hf)
	}, this.a0w = function() {
		aQs + 1e3 > bb.lt || (aQs = bb.lt, resize(0))
	}
}

function dA() {
	this.aPP = new aR2, this.zZ = new aR3
}

function aR3() {
	this.za = function() {
		for (var g6, eY = ah.jn, yZ = ah.jo, zJ = ac.zJ, aR4 = this.aEK(), a7 = 0; a7 < eY; a7++) g6 = yZ[a7], b6.fu.j9(g6) || (zJ[g6] = aR4);
		var os = ac.os,
			io = ac.io,
			ip = ac.ip,
			zI = ac.zI,
			eY = a9.jm;
		for (a7 = 0; a7 < eY; a7++)(0 === zI[a7] || ip[a7] < 1 || 2 * os[a7] > 3 * (io[a7] + ip[a7])) && (zJ[a7] = 0);
		var zX = 0;
		for (a7 = 0; a7 < eY; a7++) zX += 0 < zJ[a7];
		return zX
	}, this.aEK = function() {
		return Math.min(65535, bb.jj())
	}
}

function aR2() {
	function aR8(g, f0, hJ) {
		for (var a7 = 0; a7 < 256; a7++) g[a7] = (g[a7] + (f0 >> (a7 + hJ) % 30 & 1)) % 256
	}
	this.ie = function(aR5, aR6) {
		var g = new Uint8Array(256);
		return function(g, aR5, aR6) {
				var a7, aRA = 3 + (4 + aR5) % 32768,
					aRB = 12 + aR6 % 32768,
					aRC = 17 + ((aR5 & aR6) + (aR5 | aR6) + aR5) % 32768;
				for (a7 = 0; a7 < 256; a7++) aRA = 1 + aRA * aRB % aRC, g[a7] = aRA % 256
			}(g, aR5, aR6), aR8(g, aR5, 2), aR8(g, aR6, 7),
			function(g) {
				var a7, f0, e0 = 0;
				for (a7 = 0; a7 < 3e4; a7++) f0 = g[e0], g[e0] = (f0 + a7 + g[(e0 + a7) % 256]) % 256, e0 = (f0 + a7 + e0 + (f0 & e0)) % 256
			}(g),
			function(g) {
				var a7, a6l = 1,
					sl = 1;
				for (a7 = 0; a7 < 256; a7 += 2) a6l = (1 + a6l) * (g[a7] + 1) % 1073741824, sl = (1 + sl) * (g[a7 + 1] + 1) % 1073741824;
				return [a6l, sl]
			}(g)
	}
}

function cf() {
	var aRD, aRE, h1, aRF;
	this.dU = function() {
		var a7, ef, eh, aPb, aRG, a1, jF, x0, hQ, vP, f0, g6, eo, er, a40;
		if (function() {
				if (h1 = !0, aRF = "rgb(" + bO.vN[0] + "," + bO.vN[1] + "," + bO.vN[2] + ")", bO.aHP(bO.eE)) return 1;
				return h1 = !1, 0
			}()) aRE = null;
		else {
			for (aRD = bH.dl(96, 4), aRG = 1 === bO.eE ? (aPb = 0, 160) : (aPb = 128, 32), aRF = "rgb(" + aPb + "," + aPb + "," + aPb + ")", aRE = new Array(4), a7 = 3; 0 <= a7; a7--) {
				if (aRE[a7] = document.createElement("canvas"), a1 = a7 % 2 == 0 ? bO.ej : aRD, jF = a7 % 2 == 0 ? aRD : bO.ek + 2 * aRD, aRE[a7].width = a1, aRE[a7].height = jF, vP = (hQ = (x0 = aRE[a7].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, a1, jF)).data, a7 % 2 == 0)
					for (eh = aRD - 1; 0 <= eh; eh--)
						for (f0 = aRG + Math.floor((eh + 1) * (aPb - aRG) / (aRD + 1)), ef = a1 - 1; 0 <= ef; ef--) vP[g6 = 4 * ((0 === a7 ? aRD - eh - 1 : eh) * a1 + ef)] = f0, vP[g6 + 1] = f0, vP[g6 + 2] = f0, vP[g6 + 3] = 255;
				else {
					for (ef = aRD - 1; 0 <= ef; ef--)
						for (f0 = aRG + Math.floor((ef + 1) * (aPb - aRG) / (aRD + 1)), eh = jF - 1 - aRD; aRD <= eh; eh--) vP[g6 = 4 * (eh * a1 + (3 === a7 ? aRD - ef - 1 : ef))] = f0, vP[g6 + 1] = f0, vP[g6 + 2] = f0, vP[g6 + 3] = 255;
					for (er = 1; 0 <= er; er--)
						for (ef = aRD - 1; 0 <= ef; ef--)
							for (eh = aRD - 1; 0 <= eh; eh--) eo = (Math.pow(ef * ef + eh * eh, .5) + 1) / (aRD + 1), f0 = aRG + Math.floor((1 < eo ? 1 : eo) * (aPb - aRG)), vP[g6 = 4 * ((0 === er ? aRD - eh - 1 : eh + er * (jF - aRD)) * a1 + (
								1 === a7 ? ef : aRD - ef - 1))] = f0, vP[g6 + 1] = f0, vP[g6 + 2] = f0, vP[g6 + 3] = 255
				}
				x0.putImageData(hQ, 0, 0)
			}
			a40 = aRG, bO.vI.fillStyle = "rgb(" + a40 + "," + a40 + "," + a40 + ")", bO.vI.fillRect(0, 0, bO.ej, 1), bO.vI.fillRect(0, bO.ek - 1, bO.ej, 1), bO.vI.fillRect(0, 0, 1, bO.ek), bO.vI.fillRect(bO.ej - 1, 0, 1, bO.ek)
		}
	}, this.wu = function() {
		var er = h1 ? 0 : -aRD;
		aJ1(er, er, bO.ej - 2 * er, bO.ek - 2 * er, bW.aRJ, bW.aRK, bW.aRL, bW.aRM) || (tb.fillStyle = aRF, tb.fillRect(0, 0, at.a1, at.jF))
	}, this.ta = function() {
		h1 || (aJ0(0, -aRD, bO.ej, aRD, bW.aRJ, bW.aRK, bW.aRL, bW.aRM) && tb.drawImage(aRE[0], bW.aRN, bW.aRO - aRD), aJ0(bO.ej, -aRD, aRD, bO.ek + 2 * aRD, bW.aRJ, bW.aRK, bW.aRL, bW.aRM) && tb.drawImage(aRE[1], bW.aRN + bO.ej, bW.aRO - aRD),
			aJ0(0, bO.ek, bO.ej, aRD, bW.aRJ, bW.aRK, bW.aRL, bW.aRM) && tb.drawImage(aRE[2], bW.aRN, bW.aRO + bO.ek), aJ0(-aRD, -aRD, aRD, bO.ek + 2 * aRD, bW.aRJ, bW.aRK, bW.aRL, bW.aRM) && tb.drawImage(aRE[3], bW.aRN - aRD, bW.aRO - aRD))
	}
}

function cz() {
	this.h2 = new aRP, this.aEI = new aRQ, this.wx = new aRR, this.s = new aRS, this.iF = new aRT, this.a40 = new aRU, this.aRV = new aRW, this.ja = new aRX, this.kO = new aRY, this.aRZ = new aRa, this.dU = function() {
		this.wx.dU(), this.s.dU(), this.iF.dU(), this.a40.dU(), this.aRZ.dU()
	}, this.ta = function() {
		this.aRZ.ta(), this.wx.ta()
	}
}

function aRX() {
	this.ie = function(player) {
		var oj;
		return !!a9.data.passableWater && 0 !== ac.gF[player].length && bJ.s.ok !== bJ.s.k0 && !((oj = bJ.s.oj[player]) >= aA.k0[aA.hD[player]] || oj === bJ.s.ow || !b6.fu.oq(player, aA.jy[aA.hD[player]], 32, 0) || !aj.iS.ie(player) && !aj.iU.ie(
			player) || ! function(a2A) {
			var aRd = bK.fA[1] + bI.hV[bK.fA[2] - 1] << 2;
			if (aY.eP(aRd)) return 1;
			return aRd = aY.eQ(aRd), a2A !== aRd && !!eR(a2A, aRd)
		}(player)) && function(player) {
			return b6.fu.ot(player), bJ.s.oz(player), !0
		}(player)
	}
}

function aRP() {
	function aRl(a7, kp, kq) {
		var aRn, aRm;
		if (!(a7 < 0)) return aRm = bJ.s.m2[a7], aRn = bI.ht(aRm), aRm = bI.hw(aRm), a7 = 20 * (.9 + .1 * Math.log10(bJ.s.a59[a7])), a7 = Math.max(a7, bI.i9(b6.pW.sM(.02, 1.7))), bH.aJ8(bI.hs(kp), bI.hv(kq), aRn, aRm, a7)
	}

	function aRf(aRe) {
		var aRq = 4 + .03 * (1 + 1.5 * u.v.rB()) * at.pY / i7;
		return bI.hx(aRe, bK.fA[1]) < aRq
	}
	this.h3 = function(player, aRe) {
		return !!(a9.data.passableWater && bI.iA(aRe) && bJ.s.ok !== bJ.s.k0 && bJ.s.oj[player] !== bJ.s.ow && 0 !== ac.gF[player].length && bJ.kO.kP(player, aRe) && aRf(aRe))
	}, this.o3 = function(player, lz, aRe) {
		return !!(bI.iA(aRe) && this.p0(player, lz) && bJ.kO.p1(aRe) && aRf(aRe))
	}, this.p0 = function(player, id) {
		for (var aRg, sH = player << 3, sI = sH + bJ.s.oj[player], aRh = bJ.s.aRh, aRi = bJ.s.aRi, a7 = sH; a7 < sI; a7++)
			if (id === aRi[aRg = aRh[a7]]) return bK.fA[3] = aRg, !0;
		return !1
	}, this.o2 = function(eK) {
		var a41 = bJ.a40.a41;
		return !!this.p0(a9.eI, a41) && (b4.gv.o2(a41, eK), !0)
	}, this.a43 = function(kp, kq) {
		var player = a9.eI,
			eY = bJ.s.oj[player];
		if (0 === eY) return !1;
		for (var aRh = bJ.s.aRh, m2 = bJ.s.m2, sH = player << 3, aRj = 80, aLE = -1, a7 = sH + eY - 1; sH <= a7; a7--) {
			var aRk = aRh[a7],
				eo = bI.hn(kp, kq, m2[aRk]);
			eo < aRj && (aRj = eo, aLE = aRk)
		}
		return !!aRl(aLE, kp, kq) && (bJ.a40.a41 = bJ.s.aRi[aLE], bi.oy.a43(), !0)
	}, this.a4A = function(kp, kq) {
		var eY = bJ.s.ok;
		if (eY < 1) return -1;
		for (var m2 = bJ.s.m2, aRj = 80, aLE = -1, a7 = 0; a7 < eY; a7++) {
			var eo = bI.hn(kp, kq, m2[a7]);
			eo < aRj && (aRj = eo, aLE = a7)
		}
		return aRl(aLE, kp, kq) ? aLE : -1
	}, this.m1 = function(player, id) {
		for (var sH = player << 3, sI = sH + bJ.s.oj[player], aRi = bJ.s.aRi, aRh = bJ.s.aRh, a7 = sH; a7 < sI; a7++) {
			var aRk = aRh[a7];
			if (aRi[aRk] === id) return aRk
		}
		return -1
	}, this.aEF = function(player) {
		for (var sH = player << 3, sI = sH + bJ.s.oj[player], aRh = bJ.s.aRh, a59 = bJ.s.a59, hD = 0, a7 = sH; a7 < sI; a7++) hD += a59[aRh[a7]];
		return hD
	}, this.m7 = function(player) {
		return 0 === bJ.s.oj[player] ? -1 : bJ.s.aRh[player << 3]
	}
}

function aRQ() {
	this.aEJ = function(player) {
		for (var aRh = bJ.s.aRh, sH = player << 3, a7 = sH + bJ.s.oj[player] - 1; sH <= a7; a7--) this.aRr(aRh[a7])
	}, this.aRr = function(aRs) {
		var s = bJ.s,
			aRt = s.ok - 1,
			aRu = s.a58[aRs],
			aRv = s.aRw[aRs],
			aRx = s.m2[aRs];
		s.ok = aRt, s.a58[aRs] = s.a58[aRt], s.aRy[aRs] = s.aRy[aRt], s.aRz[aRs] = s.aRz[aRt], s.m2[aRs] = s.m2[aRt], s.aS0[aRs] = s.aS0[aRt], s.a59[aRs] = s.a59[aRt], s.aRw[aRs] = s.aRw[aRt], s.aRi[aRs] = s.aRi[aRt], s.aS1[aRs] = s.aS1[aRt], s
			.aS2[aRs] = s.aS2[aRt], s.aRh[s.a58[aRs]] = aRs,
			function(aQ6) {
				var player = aQ6 >> 3,
					s = bJ.s,
					eY = s.oj[player] - 1,
					aS5 = (player << 3) + eY;
				s.oj[player] = eY, aS5 !== aQ6 && (s.aRh[aQ6] = s.aRh[aS5], s.a58[s.aRh[aQ6]] = aQ6)
			}(aRu), bJ.iF.iF[bI.iE(s.m2[aRs])][s.aRw[aRs]] = aRs, aRt = bI.iE(aRx), aRu = aRv, aRt = bJ.iF.iF[aRt], s = aRt.pop(), aRu !== aRt.length && (aRt[aRu] = s, bJ.s.aRw[s] = aRu)
	}
}

function aRR() {
	var aS7, xO = 8,
		aS8 = new Array(2);

	function aS9(e0) {
		var hN = xO + 4,
			a1a = b6.pW.vE(hN, hN),
			hT = b6.pW.getContext(a1a, !0),
			hQ = b6.pW.getImageData(hT, hN, hN),
			vP = hQ.data;
		return aSA(vP, hN + 1, e0), aSA(vP, hN + 2, e0), aSA(vP, 2 * hN + 1, e0), aSA(vP, 2 * hN - 3, e0), aSA(vP, 2 * hN - 2, e0), aSA(vP, 3 * hN - 2, e0), aSA(vP, hN * (hN - 3) + 1, e0), aSA(vP, hN * (hN - 2) + 1, e0), aSA(vP, hN * (hN - 2) + 2,
			e0), aSA(vP, hN * (hN - 2) - 2, e0), aSA(vP, hN * (hN - 1) - 3, e0), aSA(vP, hN * (hN - 1) - 2, e0), hT.putImageData(hQ, 0, 0), a1a
	}

	function aSA(vP, eK, e0) {
		eK *= 4;
		vP[eK] = 255, vP[1 + eK] = 255, vP[2 + eK] = e0, vP[3 + eK] = 255
	}

	function vE(player) {
		var a1a = b6.pW.vE(xO, xO);
		return function(hT, player) {
			var ef, eh, hr, eK, aSC, aSD, hN = xO,
				hQ = b6.pW.getImageData(hT, hN, hN),
				vP = hQ.data,
				kU = (hN >> 1) - .5,
				aRF = aY.a5h(player),
				aSF = b6.pg.a1A(aRF, .5);
			b6.pg.a1C(aRF, aSF, 300) || b6.pg.a1E(aRF, 100);
			for (eh = 0; eh < hN; eh++)
				for (ef = 0; ef < hN; ef++) aSD = (hN - 1.5) * (hN - 1.5) / 4, aSC = (hr = (hr = ef - kU) * hr + (hr = eh - kU) * hr) <= (hN - 4.5) * (hN - 4.5) / 4 ? aSF : aRF, vP[eK = 4 * (eh * hN + ef)] = aSC[0], vP[1 + eK] = aSC[1], vP[2 +
					eK] = aSC[2], vP[3 + eK] = aSD < hr ? 0 : 255;
			hT.putImageData(hQ, 0, 0)
		}(b6.pW.getContext(a1a, !0), player), a1a
	}
	this.dU = function() {
		aS7 = new Array(a9.eV), aS8[0] = aS9(255), aS8[1] = aS9(0)
	}, this.ta = function() {
		var a7, player, aSG, aJ9, hD, hq, aSI, aSK, aSL, m2 = bJ.s.m2,
			a58 = bJ.s.a58,
			a59 = bJ.s.a59,
			aS2 = bJ.s.aS2,
			aSM = aS7,
			aSN = a9.eI,
			aSO = -1,
			eY = bJ.s.ok,
			aSP = at.a1,
			aSQ = at.jF,
			aSR = bO.ej << 4,
			eN = i7,
			eC = eN / xO,
			m3 = i6 / eN,
			m4 = i8 / eN,
			hr = (aSP + i6) / eN - m3,
			hu = (aSQ + i8) / eN - m4,
			hT = tb;
		for (bJ.h2.p0(a9.eI, bJ.a40.a41) && (aSO = bK.fA[3]), hT.imageSmoothingEnabled = eN < 9, b6.pW.textAlign(hT, 1), b6.pW.textBaseline(hT, 1), a7 = 0; a7 < eY; a7++) player = a58[a7] >> 3, hD = a59[a7], aSG = .9 + .1 * Math.log10(hD), aJ9 =
			(hq = m2[a7]) % aSR / 16 - aSG, hq = aSQ * (Math.floor(hq / aSR) / 16 - aSG - m4) / hu, aSI = -2 * (aSL = eN * aSG) * (1 + (aSK = +(player === aSN)) / 8), aSK = aSK * aSL / 4, (aSL = aSP * (aJ9 - m3) / hr) < aSI || hq < aSI || aSP +
			aSK < aSL || aSQ + aSK < hq || (aJ9 = 2 * aSG * eC, aSI = aSG * eN, void 0 === (aSK = aSM[player]) && (aSM[player] = aSK = vE(player)), player === aSN && (hT.setTransform(aJ9, 0, 0, aJ9, aSL - 2 * aJ9, hq - 2 * aJ9), hT.drawImage(aS8[
				+(a7 === aSO)], 0, 0)), hT.setTransform(aJ9, 0, 0, aJ9, aSL, hq), hT.drawImage(aSK, 0, 0), (aSG = Math.floor(function(hD) {
				if (hD < 1e3) return .42;
				if (hD < 1e4) return .34;
				if (hD < 1e6) return .26;
				if (hD < 1e8) return .19;
				return .15
			}(hD) * aSI)) < 6) || (hT.setTransform(1, 0, 0, 1, 0, 0), hT.fillStyle = aS2[a7] ? b7.nB : b7.md, hT.font = b6.pW.rY(1, aSG), hT.fillText(b6.zM.y3(hD), aSL + aSI, hq + aSI + .1 * aSG));
		hT.imageSmoothingEnabled = !1, hT.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aRa() {
	var a1a;
	this.dU = function() {
		a1a = a1a || bL.s.aSU(20, bc.aSV[7])
	}, this.ta = function() {
		var mN = i7;
		if (!(5 <= mN)) {
			var aSP = at.a1,
				aSQ = at.jF,
				m3 = i6 / mN,
				m4 = i8 / mN,
				mG = (aSP + i6) / mN,
				mH = (aSQ + i8) / mN,
				g7 = -20 * mN,
				aSW = .5 * g7,
				aSR = bO.ej << 4,
				eY = bJ.s.ok,
				m2 = bJ.s.m2,
				aSX = a1a,
				hT = tb;
			3 < mN && (hT.globalAlpha = .5 * (5 - mN));
			for (var a7 = 0; a7 < eY; a7++) {
				var hq = m2[a7],
					ef = aSP * (hq % aSR / 16 - m3) / (mG - m3) + aSW,
					hq = aSQ * (Math.floor(hq / aSR) / 16 - m4) / (mH - m4) + aSW;
				aSP < ef || aSQ < hq || ef < g7 || hq < g7 || (hT.setTransform(mN, 0, 0, mN, ef, hq), hT.drawImage(aSX, 0, 0))
			}
			hT.globalAlpha = 1, hT.setTransform(mN, 0, 0, mN, 0, 0)
		}
	}
}

function aRW() {
	this.ie = function() {
		for (var aRm, aRV, aS1 = bJ.s.aS1, m2 = bJ.s.m2, aRz = bJ.s.aRz, a7 = bJ.s.ok - 1; 0 <= a7; a7--) aRm = m2[a7], 0 !== (aRV = aS1[a7]) && aRm === aRz[a7] && (! function(a7, aSb, hI) {
			var iw, player = bJ.s.a58[a7] >> 3,
				hI = aSb + bI.hV[hI] << 2,
				a7 = bJ.s.a59[a7];
			if (bZ.aSc(player), aY.eP(hI)) iw = a9.eV;
			else {
				if ((iw = aY.eQ(hI)) === player) return hI = b6.fu.fx(player, a7), bZ.fy(player, a7 - hI, 12);
				if (!eR(player, iw)) return b4.jp.oI(player, iw, a7)
			}
			aZ.j7(player, iw) || aZ.jQ(player) ? (ac.g0[player].push(aSb << 2), aZ.it(player, a7, iw), aB.iu(player, !0)) : bZ.fy(player, a7, 12)
		}(a7, bI.iD(aRm), aRV - 1), bJ.aEI.aRr(a7))
	}, this.aSd = function(player, eK, hI, lz) {
		if (0 !== hI) {
			var aSN = a9.eI;
			if (b6.fu.gl(aSN) && eR(player, aSN) && player !== aSN && 0 !== ac.gF[aSN].length) {
				var aRd = eK + bI.hV[--hI] << 2;
				if (aY.eP(aRd) || eR(player, aY.eQ(aRd))) {
					for (var em = !1, a7 = 0; a7 < 4; a7++)
						if (aRd = eK + bI.hV[a7] << 2, aY.eT(aRd) && !aY.eP(aRd) && aY.eQ(aRd) === aSN) {
							em = !0;
							break
						} em && (aJ.a42(719, 0), aJ.z9(180, L(399, [ac.zK[player]]), 719, player, b7.nA, b7.ma, -1, !0, void 0, {
						es: 1,
						lz: lz
					}))
				}
			}
		}
	}
}

function aRS() {
	this.aSe = null, this.k0 = 512, this.ow = 8, this.ok = 0, this.aSf = 0, this.a58 = new Uint16Array(this.k0), this.aRy = new Uint32Array(this.k0), this.aRz = new Uint32Array(this.k0), this.m2 = new Uint32Array(this.k0), this.aS0 = new Uint16Array(
			this.k0), this.a59 = new Uint32Array(this.k0), this.aRw = new Uint16Array(this.k0), this.aRi = new Uint16Array(this.k0), this.aS1 = new Uint8Array(this.k0), this.aS2 = new Uint8Array(this.k0), this.oj = new Uint8Array(a9.eV), this.aRh =
		new Uint16Array(this.ow * a9.eV), this.dU = function() {
			this.aSf = 0, this.ok = 0, this.aSe = new Uint8Array(bO.ej + bO.ek), this.oj.fill(0)
		}, this.oz = function(player) {
			var eY = this.ok,
				aSg = bI.iC(bK.fA[0]),
				aSh = this.oj[player],
				aSi = (player << 3) + aSh,
				hD = (this.a58[eY] = aSi, this.aRy[eY] = aSg, this.m2[eY] = aSg, this.aRz[eY] = bI.iC(bK.fA[1]), this.aS0[eY] = 0, bK.f6[0]);
			hD < 60 ? (b6.fu.fv(player, 60 - hD), this.a59[eY] = 60) : this.a59[eY] = hD, this.aRw[eY] = bJ.iF.oz(eY, bI.iE(aSg)), this.aRi[eY] = this.aSf, this.aS1[eY] = bK.fA[2], this.aS2[eY] = 0, this.aSf = this.aSf + 1 & 1023, this.aRh[aSi] = eY,
				this.oj[player] = aSh + 1, this.ok++, bJ.aRV.aSd(player, bK.fA[1], bK.fA[2], this.aRi[eY])
		}, this.o2 = function() {
			var aRg = bK.fA[3];
			this.aRy[aRg] = this.m2[aRg], this.aRz[aRg] = bI.iC(bK.fA[1]), this.aS0[aRg] = 0, this.aS1[aRg] = bK.fA[2], bJ.aRV.aSd(this.a58[aRg] >> 3, bK.fA[1], bK.fA[2], this.aRi[aRg])
		}, this.ie = function() {
			bJ.aRV.ie();
			var a7, g6 = a9.eI,
				dk = bJ.h2.aEF(g6),
				rP = (! function(rP) {
					var a7, aSn, aSo, aSp, aSq, aSg, aSu, aSv, eb, g7, aRy = rP.aRy,
						aRz = rP.aRz,
						m2 = rP.m2,
						a59 = rP.a59,
						aS2 = rP.aS2,
						aS0 = rP.aS0,
						aRw = rP.aRw,
						rP = rP.ok,
						aSR = bO.ej << 4;
					for (a7 = rP - 1; 0 <= a7; a7--) aSo = m2[a7], aSn = aRz[a7], aSo !== aSn && (aSg = aRy[a7], aSu = aSn % aSR - (aSq = aSg % aSR), aSv = ~~((aSn + .5) / aSR) - (aSg = ~~((aSg + .5) / aSR)), eb = ~~Math.sqrt(aSu * aSu + aSv *
						aSv + .5), g7 = 15e4 + 25e3 * bH.log10(a59[a7]), aS2[a7] && (g7 = bH.dl(g7, 5)), 65535 <= (g7 = aS0[a7] + Math.max(~~((g7 + .5) / eb), 1)) ? m2[a7] = aSp = aSn : (aS0[a7] = g7, m2[a7] = aSp = aSq + bH.dl(g7 * aSu,
						65536) + aSR * (aSg + bH.dl(g7 * aSv, 65536))), aRw[a7] = bJ.iF.aSx(aRw[a7], aSo, aSp))
				}(this), ! function(rP) {
					if (bb.jj() % 2 == 1) {
						var a7, hJ, kU, es, et, aSy, xj, aSz, gy, m3, m4, aSg, aT0, hZ, aT2, vX, eY = rP.ok,
							m2 = rP.m2,
							a58 = rP.a58,
							a59 = rP.a59,
							aS2 = rP.aS2,
							iF = bJ.iF.iF,
							aT4 = iF.length,
							aT5 = bJ.iF.aT5,
							aSR = bO.ej << 4,
							aT6 = a9.hL,
							aPu = bc.eW,
							g7 = (eY - 1) * (bH.dl(bb.jj(), 2) % 2);
						for (a7 = 0; a7 < eY; a7++)
							for (hJ = Math.abs(a7 - g7), aSg = m2[hJ], kU = bI.iE(aSg), gy = a58[hJ] >> 3, m3 = aSg % aSR, m4 = ~~((aSg + .5) / aSR), aT2 = a59[hJ], es = 0; es < 9; es++)
								if (!((aSy = kU + aT5[es]) < 0 || aT4 <= aSy))
									for (aSz = iF[aSy], xj = aSz.length, et = 0; et < xj; et++) aT0 = aSz[et], vX = a58[aT0] >> 3, gy == vX || aT6 && aPu[gy] === aPu[vX] && aPu[gy] || (vX = m2[aT0], (hZ = m3 - vX % aSR) * hZ + (hZ = m4 - ~~((vX +
										.5) / aSR)) * hZ < 14400 && (vX = a59[aT0], hZ = vX <= aT2 ? Math.max(1, bH.dl(vX + bH.dl(aT2 - vX, 10), 10)) : Math.max(1, bH.dl(aT2, 10)), a59[aT0] = Math.max(vX - hZ, 0), aS2[aT0] = 4))
					}
				}(this), ! function(rP) {
					if (bb.jj() % 5 == 3) {
						var a7, hD, a59 = rP.a59,
							eY = rP.ok;
						for (a7 = 0; a7 < eY; a7++) hD = a59[a7], a59[a7] = Math.max(hD - Math.max(1, hD >> 7), 0)
					}
				}(this), this),
				a59 = rP.a59,
				aS2 = rP.aS2;
			for (a7 = rP.ok - 1; 0 <= a7; a7--) aS2[a7] = aS2[a7] >> 1, 0 === a59[a7] && bJ.aEI.aRr(a7);
			bZ.fy(g6, dk - bJ.h2.aEF(g6), 15)
		}
}

function aRT() {
	this.aT7 = 32, this.ef = 0, this.eh = 0, this.iG = 0, this.aT8 = 0, this.aT9 = 4, this.iF = null, this.aT5 = new Int16Array(9), this.dU = function() {
		this.iG = 1 + bH.dl(bO.ej - 1, this.aT7), this.aT8 = 1 + bH.dl(bO.ek - 1, this.aT7), this.iF = new Array(this.iG * this.aT8), b6.pg.a19(this.iF);
		var ef, eh, aT5 = this.aT5,
			a1 = this.iG;
		for (ef = -1; ef <= 1; ef++)
			for (eh = -1; eh <= 1; eh++) aT5[3 * (1 + eh) + 1 + ef] = eh * a1 + ef
	}, this.oz = function(aTB, a7) {
		return this.iF[a7].push(aTB), this.iF[a7].length - 1
	}, this.aSx = function(aTC, aSg, aSn) {
		var aTD, aTE, aSg = bI.iE(aSg),
			aSn = bI.iE(aSn);
		return aSg === aSn ? aTC : (aTD = this.iF[aSg].pop(), this.iF[aSg].length === aTC ? this.oz(aTD, aSn) : (aTE = this.iF[aSg][aTC], this.iF[aSg][aTC] = aTD, bJ.s.aRw[aTD] = aTC, this.oz(aTE, aSn)))
	}
}

function aRY() {
	function a03(aSn, aTF) {
		if (! function(aSn, aRe) {
				var hY = bI.iD(aSn),
					aTJ = Math.abs(bI.eg(aRe) - bI.eg(hY)),
					hY = Math.abs(bI.ei(aRe) - bI.ei(hY));
				return 0 !== Math.max(aTJ, hY) && (function(aSg, aSn, aTJ, aTK) {
					var aTM = bI.ht(aSg),
						aSg = bI.hw(aSg),
						aTO = bI.ht(aSn),
						aSn = bI.hw(aSn),
						aTO = aTO - aTM,
						aSn = aSn - aSg,
						aTS = Math.abs(aTO),
						aTT = Math.abs(aSn),
						aTO = 0 < aTO ? 1 : 3,
						aSn = 0 < aSn ? 2 : 0;
					aTT < aTS ? aTW(aTM, aSg, aTM + aTS, aSg + aTT, aTO, aSn, aTJ) : aTW(aSg, aTM, aSg + aTT, aTM + aTS, aSn, aTO, aTK)
				}(aSn, bI.iC(aRe), aTJ, hY), !0)
			}(aSn, aTF)) return !1;
		if (0 === bK.f3[0]) return !!aY.h1(aTF << 2);
		if (! function(aRe) {
				if (aY.h1(aRe << 2)) return 1;
				return function(aRe) {
					var a7, hI, aSe = bJ.s.aSe,
						aTa = bI,
						eY = bK.f3[0],
						aTb = 4 * aRe;
					for (a7 = eY - 1; 0 <= a7; a7--) {
						hI = aSe[a7];
						var aTc = aTb;
						if (aTb = aTa.iI(aTb, hI + 2 & 3), aY.h1(aTb)) return bK.f3[0] = a7, bK.fA[1] = aTb >> 2, bK.fA[2] = 1 + hI, bK.fA[4] = aTc, 1
					}
					return
				}(aRe)
			}(aTF)) return !1;
		if (bK.fA[2] && aY.ed(bK.fA[4])) return !1;
		var a7, aTF = bI.iD(aSn),
			vP = aA5,
			aSe = bJ.s.aSe,
			eY = bK.f3[0] - 1,
			aTb = 4 * aTF,
			hW = bI.hW;
		for (a7 = 0; a7 < eY; a7++)
			if (aTb += hW[aSe[a7]], 0 !== vP[aTb + 3] || 2 !== vP[aTb + 2]) return !!void 0;
		return !!1
	}

	function aTW(aTM, aTN, aTO, aTP, aTU, aTV, aTJ) {
		for (var eh, aSe = bJ.s.aSe, g7 = 0, aTX = 0, jF = aTP - aTN, a1 = aTO - aTM, aTY = aTM % 16, a7 = 1; a7 <= aTJ; a7++) aSe[g7++] = aTU, aSe[g7] = aTV, g7 += (eh = (jF * (aTY + (a7 << 4)) + .5) / a1 >> 4) - aTX, aTX = eh;
		bK.fF(bK.f3, g7)
	}
	this.kP = function(player, aTF) {
		var hI, hY, gx = bI.hg(player, aTF);
		return gx !== aTF && (hI = bI.hX(gx, aTF), hY = bI.iH(gx, hI), !(!aY.h1(hY << 2) && (hI = bI.he(gx, aTF, hI), hY = bI.iH(gx, hI), !aY.h1(hY << 2)) || (bK.fA[0] = hY, bK.fA[1] = aTF, bK.fA[2] = 0, hY !== aTF && (!a03(bI.iC(hY), aTF) ||
			0 !== bK.fA[2] && bI.hm(player, bK.fA[1] + bI.hV[bK.fA[2] - 1] << 2)))))
	}, this.p1 = function(aTF) {
		var aSg = bJ.s.m2[bK.fA[3]];
		return bK.fA[1] = aTF, bK.fA[2] = 0, a03(aSg, aTF)
	}
}

function aRU() {
	var xO = 32,
		xN = new Array(2);

	function vE(et) {
		var ef, eh, eK, hu, hr, hN = xO,
			a1a = b6.pW.vE(hN, hN),
			hT = b6.pW.getContext(a1a, !0),
			hQ = b6.pW.getImageData(hT, hN, hN),
			vP = hQ.data,
			kU = (hN >> 1) - .5,
			kV = Math.sqrt(kU * kU);
		for (vP.fill(255), eh = 0; eh < hN; eh++)
			for (ef = 0; ef < hN; ef++) hr = ef - kU, hu = eh - kU, eK = 4 * (eh * hN + ef), hr = 714 * (kV - Math.sqrt(hr * hr + hu * hu)) / kV, vP[2 + eK] = et, vP[3 + eK] = 255 < hr ? 0 : hr;
		return hT.putImageData(hQ, 0, 0), a1a
	}
	this.a41 = -1, this.dU = function() {
		this.a41 = -1, xN[0] || (xN[0] = vE(255), xN[1] = vE(0))
	}, this.aTe = function(hT, eC, ef, eh, dz, a7) {
		b6.fu.gl(a9.eI) && (hT.setTransform(eC *= 4 / 3 * .625, 0, 0, eC, ef - (dz *= 4 / 3), eh - dz), hT.drawImage(xN[+(bJ.s.aRi[a7] === this.a41)], 0, 0))
	}
}

function dX() {
	this.aNY = [L(400), L(401), L(402), L(403), L(404), L(405), L(406), L(407), L(408), L(409), L(410), L(411), L(412), L(413), L(414)];
	var aTf = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", "", "KeyM", "", "KeyP", ""];
	this.aNX = new Array(aTf.length), this.dU = function() {
		var g = bf.dp.data[155].value.split(";"),
			kU = g.length;
		if (function() {
				for (var eY = aTf.length, a7 = 0; a7 < eY; a7++) bT.aNX[a7] = aTf[a7]
			}(), !(kU > aTf.length))
			for (var a7 = 0; a7 < kU; a7++) g[a7].length && (this.aNX[a7] = g[a7])
	}, this.aNa = function(e0, code) {
		for (var aNX = this.aNX, aTh = aTf, pD = (aNX[e0] = code, ""), eY = aNX.length, aTi = [], a7 = 0; a7 < eY; a7++) aTi.push(aNX[a7] === aTh[a7] ? "" : aNX[a7]);
		eY--;
		for (a7 = 0; a7 < eY; a7++) pD += aTi[a7] + ";";
		bf.rF.rG(155, pD += aTi[eY])
	}, this.aNW = function() {
		bf.rF.rG(155, ""), this.dU()
	}, this.et = function(code, e0) {
		return code === this.aNX[e0] || code === this.aNX[e0 + 1]
	}
}

function dS() {
	var aTj = new Audio(
		"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
		);
	this.aTk = function() {
		aTj && aTj.play()
	}
}

function cT() {
	this.a6Z = function() {
		var aTn;
		return !(ah.jn < 3 || ac.gM[l1[0]] >= a9.jW >> 1) && (a9.hL ? (aTn = aa.aFL(), !(2 * aa.aFM(bd.ky()) >= aTn)) : function() {
			var aTn = aa.aFL();
			if (2 * ac.ga[l1[0]] >= aTn) return !1;
			return !0
		}())
	}
}

function c4() {
	this.dU = function() {
		if (0 === a9.data.sResourcesType) {
			for (var aSh = a9.jm, ga = ac.ga, a7 = 0; a7 < aSh; a7++) ga[a7] = 512;
			var aSi = a9.vx,
				jz = aA.jz,
				hD = aA.hD;
			for (a7 = aSh; a7 < aSi; a7++) ga[a7] = jz[hD[a7]]
		} else(1 === a9.data.sResourcesType ? function() {
			for (var eY = a9.vx, ga = ac.ga, sResourcesValue = a9.data.sResourcesValue, a7 = 0; a7 < eY; a7++) ga[a7] = sResourcesValue
		} : function() {
			for (var eY = a9.vx, ga = ac.ga, sResourcesData = a9.data.sResourcesData, a7 = 0; a7 < eY; a7++) ga[a7] = sResourcesData[a7]
		})();
		bZ.lW[8] = ac.ga[a9.eI]
	}
}

function dI() {
	var aTs = 501,
		aTu = (this.aTt = new Uint32Array(aTs), this.a2E = new Uint32Array(aTs), this.a9S = new Uint16Array(aTs), this.aNg = 0, 1),
		aTv = 0;

	function aTy(self) {
		self.max.fill(0)
	}

	function aU0(self, a7) {
		self.max[0] = Math.max(self.aTt[a7], self.max[0]), self.max[1] = Math.max(self.a2E[a7], self.max[1]), self.max[2] = Math.max(self.a9S[a7], self.max[2])
	}
	this.max = [0, 0, 0], this.aTw = 0, this.lW = new Array(21), this.aTx = null, this.dV = function() {
		this.aTx = [L(415), L(416), L(417), L(418), L(419), L(420), L(421), L(422), L(261), L(262), L(423), L(424), L(425), L(426), "", L(427), L(428), L(429), L(221), L(430), L(431)]
	}, this.dU = function() {
		this.aNg = 0, aTu = 1, this.aTw = 0, aTv = 0, aTy(this), this.lW.fill(0)
	}, this.ou = function(player, i5) {
		b6.fu.a29(player) && (this.lW[0] += i5 + 1, this.lW[1]++, this.lW[12] += bK.f6[1])
	}, this.oK = function(player, ny) {
		__fx.donationsTracker.logDonation(player, ny, bK.f6[0]);
		player === a9.eI && (aJ.oK(bK.f6[0], bK.f6[1], ny), this.lW[12] += bK.f6[1], this.lW[16] += bK.f6[0]), ny === a9.eI && (aJ.a5M(bK.f6[0], player), this.lW[10] += bK.f6[0])
	}, this.ox = function(player) {
		b6.fu.a29(player) && (this.lW[2]++, this.lW[12] += bK.f6[1])
	}, this.p8 = function(player) {
		b6.fu.a29(player) && (this.lW[19]++, this.lW[12] += bK.f6[1])
	}, this.aSc = function(player) {
		b6.fu.a29(player) && this.lW[20]++
	}, this.fy = function(player, a2r, e0) {
		b6.fu.a29(player) && (this.lW[e0] += a2r)
	}, this.ie = function() {
		var self;
		this.aTw || 0 < aTv-- || ((self = this).aTt[self.aNg] = ac.gM[a9.eI], self.a2E[self.aNg] = ac.ga[a9.eI], self.a9S[self.aNg] = aa.a9T(a9.eI), aU0(self, self.aNg), self.aNg++, self.aNg === aTs && function(self) {
			aTy(self), aU0(self, 0), self.aNg = 1 + bH.dl(aTs, 2);
			for (var a7 = 1; a7 < self.aNg; a7++) self.aTt[a7] = self.aTt[2 * a7], self.a2E[a7] = self.a2E[2 * a7], self.a9S[a7] = self.a9S[2 * a7], aU0(self, a7);
			aTu *= 2
		}(self), aTv = aTu - 1, ba.lN(), 0 === ac.la[a9.eI] && (self.aTw = bb.jj()))
	}
}

function dJ() {
	this.a1 = 0, this.jF = 0, this.s3 = 0, this.s4 = 0, this.aU2 = 0, this.aU3 = 0, this.a6l = 0, this.sl = 0;
	var aU5 = this.aU4 = 0;
	this.aU6 = 0, this.aU7 = 0, this.aU8 = 0, this.a67 = 0, this.e0 = 0, this.a95 = null, this.xJ = !1, this.aU9 = -1, this.aUA = !1, this.aUB = [0, 0], this.dV = function() {
		this.a95 = [L(432), L(116, 0, "Balance"), L(115, 0, "Interest"), L(433)]
	}, this.dU = function() {
		this.xJ = !1, this.aU9 = -1, this.aUA = !1, this.resize()
	}, this.resize = function() {
		this.a1 = at.a1 < 1.369 * at.jF ? at.a1 : 1.369 * at.jF;
		var eb = u.v.rB() && at.a1 < at.jF ? 1 : u.v.rB() ? .8 : at.a1 < at.jF ? .65 : .59;
		this.a1 = Math.floor(eb * this.a1), this.a1 -= u.v.rB() && at.a1 < at.jF ? 2 * bY.gap + 2 : 0, this.jF = Math.floor(this.a1 / 1.369), this.a67 = Math.floor(this.jF / 150), this.a67 = Math.max(this.a67, 1.5), this.s3 = Math.floor(1 + .02 *
			this.a1), this.s4 = Math.floor(1 + .04 * this.a1), this.a6l = this.s4, aU5 = Math.floor(.75 * this.a6l), this.sl = Math.floor(1 + .075 * this.a1), this.aU6 = Math.floor(1 + .1125 * this.a1), this.aU7 = Math.floor(this.a1 * (u.v
			.rB() ? .03 : .029)), this.aU7 = Math.max(this.aU7, 4), this.aU8 = Math.floor(.035 * this.a1), this.aU8 = Math.max(this.aU8, 4), this.aU4 = this.jF - 2 * this.a6l - this.sl - this.aU6, this.xJ && this.aUC()
	}, this.gm = function(kp, kq) {
		var w0, vz;
		return !!this.xJ && (vz = kp, w0 = kq, kp -= bH.dl(at.a1 - this.a1, 2), kq -= bH.dl(at.jF - this.jF, 2), kp < 0 || kq < 0 || kp >= this.a1 || kq >= this.jF || kp >= this.a1 - this.aU6 && kq < this.aU6 ? -1 !== aI.gm(vz, w0) || b8.gm(vz,
			w0) || this.r4() : kq < this.aU6 || (kq < this.jF - this.sl ? (this.aUA = !0, this.aU9 = (kp - 2 * this.s3 - this.aU2) / this.aU3, 3 !== this.e0 && (bb.dc = !0)) : (vz = (vz = Math.floor(kp / (this.a1 / this.a95.length))) <
			0 ? 0 : vz >= this.a95.length ? this.a95.length - 1 : vz) !== this.e0 && (this.e0 = vz, this.aUC(), bb.dc = !0)), !0)
	}, this.a0H = function(kp, kq) {
		return this.aUB[0] = kp, this.aUB[1] = kq, !(!this.xJ || !this.aUA || (kp -= bH.dl(at.a1 - this.a1, 2), kq = this.aU9, this.aU9 = (kp - 2 * this.s3 - this.aU2) / this.aU3, (0 <= this.aU9 && this.aU9 <= 1 || 0 <= kq && kq <= 1) && (bb
			.dc = !0), 0))
	}, this.a0g = function() {
		this.aUA && (this.aUA = !1)
	}, this.a0s = function() {
		this.xJ ? this.r4() : this.show()
	}, this.show = function() {
		bZ.aNg < 2 || (this.xJ = !0, this.aUC())
	}, this.r4 = function() {
		this.xJ = !1, this.aU9 = -1, bb.dc = !0
	}, this.aUC = function() {
		this.e0 < 2 ? this.aU2 = aM.measureText(b6.zM.y3(bZ.max[this.e0]), b6.pW.rY(0, this.aU7)) : 2 === this.e0 && (this.aU2 = aM.measureText(b6.zM.a2k(6, 2), b6.pW.rY(0, this.aU7))), this.aU3 = this.a1 - 2 * this.s3 - this.aU2 - this.s4
	}, this.lN = function() {
		this.xJ && this.aUC()
	}, this.ta = function() {
		this.xJ && this.a72()
	}, this.a72 = function() {
		var ef = bH.dl(at.a1 - this.a1, 2),
			eh = bH.dl(at.jF - this.jF, 2);
		tb.setTransform(1, 0, 0, 1, ef, eh), tb.fillStyle = b7.ma, tb.fillRect(0, this.aU6, this.a1, this.jF - this.aU6), this.aUD(), this.aMU(), tb.strokeRect(0, 0, this.a1, this.jF), b6.pW.textAlign(tb, 2), tb.font = b6.pW.rY(0, this.aU7),
			0 === this.e0 ? this.aUE(bZ.aTt, ef, eh) : 1 === this.e0 ? this.aUE(bZ.a2E, ef, eh) : 2 === this.e0 ? this.aUF(ef, eh) : 3 === this.e0 && (this.aUG(ef, eh), this.aUH(ef, eh)), aI.a4R(Math.floor(ef + this.a1 - .725 * this.aU6), Math
				.floor(eh + .275 * this.aU6), Math.floor(.45 * this.aU6)), tb.setTransform(1, 0, 0, 1, 0, 0)
	}, this.aUD = function() {
		var a7, dk;
		for (tb.lineWidth = this.a67, b6.pW.textBaseline(tb, 1), b6.pW.textAlign(tb, 1), tb.strokeStyle = b7.md, tb.font = b6.pW.rY(1, this.aU8), dk = this.a1 / this.a95.length, tb.fillStyle = b7.mz, tb.fillRect(this.e0 * dk, this.jF - this.sl,
				dk, this.sl), tb.fillStyle = b7.md, tb.fillRect(0, this.jF - this.sl - .5 * this.a67, this.a1, this.a67), a7 = 1; a7 <= 3; a7++) tb.fillRect(a7 * dk, this.jF - this.sl, this.a67, this.sl);
		for (a7 = this.a95.length - 1; 0 <= a7; a7--) tb.fillText(b6.x0.a1m(this.a95[a7], 0, .9 * dk), (a7 + .5) * dk, this.jF - .46 * this.sl)
	}, this.aMU = function() {
		tb.fillStyle = b7.nP, tb.fillRect(0, 0, this.a1, this.aU6), tb.fillStyle = b7.md, tb.fillRect(0, this.aU6 - .5 * this.a67, this.a1, this.a67), tb.font = b6.pW.rY(1, .39 * this.aU6), tb.fillText(b6.x0.a1m(L(434), 0, .8 * this.a1), Math
			.floor(this.a1 / 2), Math.floor(.55 * this.aU6))
	}, this.aUE = function(g, ef, eh) {
		var kU = bZ.max[this.e0],
			a1B = (tb.setTransform(1, 0, 0, 1, ef + 2 * this.s3 + this.aU2, eh + this.a6l + this.aU6), tb.lineWidth = 2, this.aU4 / Math.sqrt(kU));
		tb.beginPath(), tb.moveTo(this.aU3, this.aU4 - a1B * Math.sqrt(g[bZ.aNg - 1]));
		for (var a7 = bZ.aNg - 2; 0 <= a7; a7--) tb.lineTo(a7 * this.aU3 / (bZ.aNg - 1), this.aU4 - a1B * Math.sqrt(g[a7]));
		tb.stroke();
		ef = this.a4R(g, a1B, .5);
		ef < .95 && tb.fillText(b6.zM.y3(kU), -this.s3, 0), .05 < Math.abs(ef - .5) && tb.fillText(b6.zM.y3(Math.floor(kU / 4)), -this.s3, Math.floor(this.aU4 / 2)), .05 < ef && tb.fillText("0", -this.s3, this.aU4)
	}, this.aUF = function(ef, eh) {
		tb.setTransform(1, 0, 0, 1, ef + 2 * this.s3 + this.aU2, eh + this.a6l + this.aU6), tb.lineWidth = 2;
		var a1B = this.aU4 / Math.max(bZ.max[this.e0], 1);
		tb.beginPath(), tb.moveTo(this.aU3, this.aU4 - a1B * bZ.a9S[bZ.aNg - 1]);
		for (var a7 = bZ.aNg - 2; 0 <= a7; a7--) tb.lineTo(a7 * this.aU3 / (bZ.aNg - 1), this.aU4 - a1B * bZ.a9S[a7]);
		tb.stroke();
		ef = this.a4R(bZ.a9S, a1B, 1), eh = bZ.max[this.e0] / 100;
		ef < .95 && tb.fillText(b6.zM.a2k(eh, 2), -this.s3, 0), .05 < Math.abs(ef - .5) && tb.fillText(b6.zM.a2k(eh / 2, 2), -this.s3, Math.floor(this.aU4 / 2)), .05 < ef && tb.fillText(b6.zM.a2k(0, 2), -this.s3, this.aU4)
	}, this.aUG = function(ef, eh) {
		tb.setTransform(1, 0, 0, 1, ef + .34 * this.a1, eh + 2 * aU5 + this.aU6), b6.pW.textAlign(tb, 2);
		for (var a8q = this.jF - 4 * aU5 - this.sl - this.aU6, g = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], a7 = 9; 0 <= a7; a7--) tb.fillText(b6.x0.a1m(bZ.aTx[g[a7]], 0, .31 * this.a1), 0, a7 * a8q / 9);
		var f0 = bZ.lW;
		for (tb.setTransform(1, 0, 0, 1, ef + .39 * this.a1, eh + 2 * aU5 + this.aU6), b6.pW.textAlign(tb, 0), tb.fillText(b6.zM.a2k(100 * f0[0] / (1024 * Math.max(f0[1], 1)), 1), 0, 0), a7 = 8; 1 <= a7; a7--) tb.fillText(f0[g[a7]].toString(), 0,
			a7 * a8q / 9);
		tb.fillText(b6.zM.a2k(100 * (1 - ac.gM[a9.eI] / f0[7]), 0), 0, a8q)
	}, this.aUH = function(ef, eh) {
		tb.setTransform(1, 0, 0, 1, ef + .79 * this.a1, eh + 2 * aU5 + this.aU6), b6.pW.textAlign(tb, 2);
		var a7, a8q = this.jF - 4 * aU5 - this.sl - this.aU6;
		for (tb.fillStyle = b7.mu, a7 = 2; 0 <= a7; a7--) tb.fillText(b6.x0.a1m(bZ.aTx[a7 + 8], 0, .31 * this.a1), 0, a7 * a8q / 9);
		tb.fillText(b6.x0.a1m(bZ.aTx[18], 0, .31 * this.a1), 0, 3 * a8q / 9), tb.fillStyle = b7.mt, tb.fillText(b6.x0.a1m(bZ.aTx[11], 0, .31 * this.a1), 0, 4 * a8q / 9), tb.fillStyle = b7.nC, tb.fillText(b6.x0.a1m(bZ.aTx[13], 0, .31 * this.a1),
				0, 5 * a8q / 9), tb.fillText(b6.x0.a1m(bZ.aTx[15], 0, .31 * this.a1), 0, 6 * a8q / 9), tb.fillText(b6.x0.a1m(bZ.aTx[16], 0, .31 * this.a1), 0, 7 * a8q / 9), tb.fillText(b6.x0.a1m(bZ.aTx[12], 0, .31 * this.a1), 0, 8 * a8q / 9), tb
			.fillStyle = b7.nB, tb.fillText(b6.x0.a1m(bZ.aTx[17], 0, .31 * this.a1), 0, a8q), tb.fillStyle = b7.mu;
		var f0 = bZ.lW,
			aMi = f0[8] + f0[9] + f0[10] + f0[18],
			aMi = b6.zM.y3(aMi),
			aLJ = tb.measureText(aMi).width,
			ef = (tb.setTransform(1, 0, 0, 1, ef + .83 * this.a1 + aLJ, eh + 2 * aU5 + this.aU6), tb.fillText(b6.zM.y3(f0[8]), 0, 0), tb.fillText(b6.zM.y3(f0[9]), 0, a8q / 9), tb.fillText(b6.zM.y3(f0[10]), 0, 2 * a8q / 9), tb.fillText(b6.zM.y3(
				f0[18]), 0, 3 * a8q / 9), tb.fillStyle = b7.mt, tb.fillText(aMi, 0, 4 * a8q / 9), tb.fillStyle = b7.nC, tb.fillText(b6.zM.y3(f0[13]), 0, 5 * a8q / 9), tb.fillText(b6.zM.y3(f0[15]), 0, 6 * a8q / 9), tb.fillText(b6.zM.y3(f0[
				16]), 0, 7 * a8q / 9), tb.fillText(b6.zM.y3(f0[12]), 0, 8 * a8q / 9), f0[12] + f0[13] + f0[15] + f0[16]);
		tb.fillStyle = b7.nB, tb.fillText(b6.zM.y3(ef), 0, a8q), tb.fillStyle = b7.md
	}, this.a4R = function(g, a1B, a7d) {
		var a7, e, fG;
		return this.aU9 < 0 || 1 < this.aU9 ? .25 : (a7 = this.aU9 * (bZ.aNg - 1), fG = g[e = Math.floor(a7)], fG += (a7 - e) * (g[e < bZ.aNg - 1 ? e + 1 : e] - fG), tb.strokeStyle = b7.mg, .04 < this.aU9 && this.aUJ(0, this.aU4 - a1B * Math.pow(
				fG, a7d), a7 * this.aU3 / (bZ.aNg - 1), this.aU4 - a1B * Math.pow(fG, a7d)), .04 < fG / bZ.max[this.e0] && this.aUJ(a7 * this.aU3 / (bZ.aNg - 1), this.aU4, a7 * this.aU3 / (bZ.aNg - 1), this.aU4 - a1B * Math.pow(fG, a7d)), tb
			.fillStyle = b7.nE, tb.beginPath(), tb.arc(a7 * this.aU3 / (bZ.aNg - 1), this.aU4 - a1B * Math.pow(fG, a7d), Math.max(2, .014 * this.jF), 0, 2 * Math.PI), tb.fill(), g = this.aU9 * bb.a9U, g = 0 === ac.la[a9.eI] ? Math.floor(g *
				bZ.aTw) : Math.floor(g * bb.jj()), tb.fillStyle = b7.md, tb.fillText(1 === a7d ? b6.zM.a2k(fG / 100, 2) : b6.zM.y3(Math.floor(fG)), -this.s3, this.aU4 - a1B * Math.pow(fG, a7d)), b6.pW.textAlign(tb, 1), tb.fillText(aS.a9J(g),
				a7 * this.aU3 / (bZ.aNg - 1), this.aU4 + this.aU7 - (u.v.rB() ? 2 : 0) - this.a67), b6.pW.textAlign(tb, 2), a1B * Math.pow(fG, a7d) / this.aU4)
	}, this.aUJ = function(m3, m4, mG, mH) {
		tb.beginPath(), tb.moveTo(m3, m4), tb.lineTo(mG, mH), tb.stroke()
	}
}

function bs() {
	this.aUK = "https://", this.aUL = this.aUK + "territorial.io/", this.aNh = this.aUL + "changelog", this.aNl = this.aUL + "terms", this.aUM = this.aUL + "cookie_policy", this.aN7 = this.aUL + "privacy", this.aNk = this.aUL + "tutorial", this.aNj =
		this.aUL + "players", this.aNi = this.aUL + "clans", this.zW = this.aUL + "clan-results", this.aAf = this.aUK + "play.google.com/store/apps/details?id=territorial.io", this.zp = this.aUK + "apps.apple.com/app/id1581110913", this.aUN = this
		.aUK + "www.youtube.com/watch?v=toZTQ8aRdFc", this.aAg = this.aUK + "discord.gg/pthqvpTXmh", this.aAh = this.aUK + "www.instagram.com/davidtschacher/", this.xd =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function d1() {
	this.s = new aUO, this.wx = new aUP, this.dU = function() {
		this.s.dU()
	}, this.ie = function() {
		0 !== this.s.a5V && this.s.a5V--
	}
}

function aUP() {
	this.ta = function() {
		if (0 !== bL.s.a5V && (tb.globalAlpha = Math.min(bL.s.a5V / 580, 1), tb.drawImage(bL.s.aUS, 1 + aO.wv(), 1 + aO.ww()), tb.globalAlpha = 1, a9.gu)) {
			for (var m3 = i6 / i7, m4 = i8 / i7, mG = (at.a1 + i6) / i7, mH = (at.jF + i8) / i7, g7 = bL.s.aUT * i7, aUU = bL.s.aUU, a7 = a9.jm - 1; 0 <= a7; a7--) ! function(a7, g7, m3, m4, mG, mH, aUU) {
				var highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[a7];
				if (highlight) g7 *= 2;
				0 === ac.la[a7] || 0 === ac.gM[a7] || (mG = at.a1 * ((ac.iK[a7] + ac.iL[a7] + 1) / 2 - m3) / (mG - m3) - .5 * g7, m3 = at.jF * ((ac.iM[a7] + ac.iN[a7] + 1) / 2 - m4) / (mH - m4) - .5 * g7, mG > at.a1) || m3 > at.jF || mG < -
					g7 || m3 < -g7 || (tb.setTransform(highlight ? i7 * 2 : i7, 0, 0, highlight ? i7 * 2 : i7, mG, m3), tb.drawImage(aUU[a9.hL ? bc.eW[a7] : 1], 0, 0))
			}(a7, g7, m3, m4, mG, mH, aUU);
			tb.setTransform(i7, 0, 0, i7, 0, 0)
		}
	}
}

function aUO() {
	this.aUT = 28, this.a5V = 0, this.aUS = null;
	var aUW = this.aUU = null;

	function aUZ(hN, aUa) {
		var ef, eh, eK, hr, a1a = b6.pW.vE(hN, hN),
			hT = b6.pW.getContext(a1a, !0),
			hQ = b6.pW.getImageData(hT, hN, hN),
			vP = hQ.data,
			kU = (hN >> 1) - .5,
			aUb = .5 + kU;
		for (aUb *= aUb, eh = 0; eh < hN; eh++)
			for (ef = 0; ef < hN; ef++) hr = (hr = ef - kU) * hr + (hr = eh - kU) * hr, vP[eK = 4 * (eh * hN + ef)] = aUa[0], vP[1 + eK] = aUa[1], vP[2 + eK] = aUa[2], vP[3 + eK] = (aUb - hr) * aUa[3] / aUb;
		return hT.putImageData(hQ, 0, 0), a1a
	}

	function aTe(a7, hT, a1a, hN) {
		var ef, y, highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[a7];
		if (highlight) hN *= 2;
		0 !== ac.la[a7] && 0 !== ac.gM[a7] && (ef = ac.iK[a7] + ac.iL[a7] + 1 - hN - 2 >> 1, y = ac.iM[a7] + ac.iN[a7] + 1 - hN - 2 >> 1,
			highlight ? hT.drawImage(a1a[a9.hL ? bc.eW[a7] : a7 < a9.jm ? 1 : 0], ef, y, hN, hN) :
			hT.drawImage(a1a[a9.hL ? bc.eW[a7] : a7 < a9.jm ? 1 : 0], ef, y))
	}
	this.dU = function() {
		var rP;
		this.a5V = 700,
			function(rP) {
				var hN = rP.aUT;
				if (rP.aUU = [], aUW = [], a9.hL)
					for (var a7 = 0; a7 <= a9.w4; a7++) rP.aUU.push(aUZ(hN, bc.aSV[bc.k8[a7]])), aUW.push(aUZ(hN >> 1, bc.aSV[bc.k8[a7]]));
				else rP.aUU.push(aUZ(hN, bc.aSV[7])), rP.aUU.push(aUZ(hN, bc.aSV[4])), aUW.push(aUZ(hN >> 1, bc.aSV[7]))
			}(this),
			function(rP, aUc) {
				var a7, aUS = rP.aUS,
					hT = b6.pW.getContext(aUS, !0),
					eY = a9.eV,
					hN = rP.aUT >> 1;
				hT.imageSmoothingEnabled = !1, hT.setTransform(1, 0, 0, 1, 0, 0), aUc && hT.clearRect(0, 0, aUS.width, aUS.height);
				for (a7 = a9.jm; a7 < eY; a7++) aTe(a7, hT, aUW, hN)
			}(this, null !== (rP = this).aUS && rP.aUS.width === bO.ej - 2 && rP.aUS.height === bO.ek - 2 || (rP.aUS = b6.pW.vE(bO.ej - 2, bO.ek - 2), !1)), a9.gu || this.a32()
	}, this.aSU = aUZ, this.a32 = function() {
		for (var eY = a9.jm, hN = this.aUT, aUU = this.aUU, hT = b6.pW.getContext(this.aUS, !0), a7 = 0; a7 < eY; a7++) aTe(a7, hT, aUU, hN)
	}
}

function d2() {
	function aUe() {
		8 === a9.k3 && 1 === a9.yl && bN.yO.yk()
	}

	function aUd(player) {
		a9.gu ? (ag.aE9(player), ah.aH5(), a9.k5 && a9.oo.ie()) : az.aAs(player)
	}
	this.oE = function(player) {
		aJ.yx(player, player === a9.eI ? 21 : 22), aUd(player), aUe()
	}, this.ol = function(player) {
		1 === a9.yl && 0 !== ac.la[player] && 2 !== ac.a27[player] && aUd(player), a9.yo--, a9.yn--, aJ.yx(player, 4), b6.fu.gk(2) && aS.lM(!0), aUe()
	}
}

function dC() {
	this.aQ5 = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.a8o = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", b7.md, "rgb(170,170,170)"
	], this.aUf = [b7.md, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", b7.md, b7.mU], this.aUg = [b7.mU, b7.md, b7.md, b7.md, b7.mU, b7.mU, b7.mU, b7.mU, b7.md];
	var aUh = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"],
		aUi = (this.aGa = ["rgba(" + aUh[0] + ",", "rgba(" + aUh[1] + ",", "rgba(" + aUh[2] + ",", "rgba(" + aUh[3] + ",", "rgba(" + aUh[4] + ",", "rgba(" + aUh[5] + ",", "rgba(" + aUh[6] + ",", "rgba(" + aUh[7] + ",", "rgba(" + aUh[8] + ",",
			"rgba(" + aUh[9] + ","
		], this.aGb = ["rgb(" + aUh[0] + ")", "rgb(" + aUh[1] + ")", "rgb(" + aUh[2] + ")", "rgb(" + aUh[3] + ")", "rgb(" + aUh[4] + ")", "rgb(" + aUh[5] + ")", "rgb(" + aUh[6] + ")", "rgb(" + aUh[7] + ")", "rgb(" + aUh[8] + ")", "rgb(" + aUh[
			9] + ")"
		], this.z7 = null, this.aSV = [
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
	this.k8 = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.eW = new Uint8Array(a9.eV), this.wA = new Uint16Array(a9.eV), this.wB = new Uint16Array(this.k8.length + 1), this.wC = new Uint16Array(this.k8.length), this.dV = function() {
		this.z7 = [L(435), L(436), L(437), L(438), L(439), L(440), L(441), L(442), L(443)]
	}, this.dU = function() {
		if (this.eW.fill(0), this.aUj(), a9.hL) {
			9 === a9.k3 ? this.aUk() : a9.k5 ? function() {
				var colorsData = a9.data.colorsData;
				if (!a9.data.selectableColor)
					for (var a7 = a9.jm - 1; 0 <= a7; a7--) colorsData[a7] = au.j3(262144);
				var aUt = 0,
					eo = 768,
					aPb = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
					teamPlayerCount = a9.data.teamPlayerCount;
				for (a7 = 0; a7 < 9; a7++)
					if (teamPlayerCount[a7]) {
						for (var eb = 0, es = 0; es < 3; es++) eb += Math.abs(aUi[a7][es] - aPb[es]);
						eb < eo && (aUt = a7, eo = eb)
					} var aUu = new Uint16Array(9);
				for (a7 = 0; a7 < 9; a7++) aUu[a7] = teamPlayerCount[a7];
				var k8 = bc.k8,
					aUv = new Uint8Array(9),
					g1 = (k8[0] = 0, 1);
				for (a7 = 1; a7 < 9; a7++) aUu[a7] && (aUv[a7] = g1, k8[g1++] = a7);
				var j2 = a9.jm,
					eW = bc.eW;
				aUu[aUt] ? (aUu[aUt]--, eW[0] = aUv[aUt]) : j2 = 0;
				var et = 0;
				for (a7 = j2; a7 < a9.vx; a7++) {
					var hJ = k8[et];
					if (aUu[hJ]) aUu[hJ]--, eW[a7] = aUv[hJ];
					else if (a7--, 9 <= ++et) return console.log("error 325")
				}
			}() : this.ie();
			for (var eY = a9.eV, wA = bc.wA, wB = bc.wB, wC = bc.wC, eW = bc.eW, k8 = bc.k8, w3 = k8.length, dp = new Array(w3), a7 = 0; a7 < w3; a7++) dp[a7] = [];
			for (a7 = 0; a7 < eY; a7++) dp[k8[eW[a7]]].push(a7);
			for (a7 = 1; a7 <= w3; a7++) wB[a7] = wB[a7 - 1] + dp[a7 - 1].length;
			for (a7 = 0; a7 < w3; a7++)
				for (var g1 = dp[a7].length, kU = wB[a7], hJ = 0; hJ < g1; hJ++) wA[hJ + kU] = dp[a7][hJ];
			var jm = a9.jm;
			for (a7 = 0; a7 < w3; a7++)
				for (g1 = dp[a7].length, kU = wB[a7], hJ = 0; hJ < g1; hJ++)
					if (wA[hJ + kU] >= jm) {
						wC[a7] = hJ;
						break
					}
		}
	}, this.aUj = function() {
		for (var a7 = this.k8.length - 1; 0 <= a7; a7--) this.k8[a7] = a7
	}, this.aUk = function() {
		for (var a7 = a9.data.teamPlayerCount[7] - 1; 0 <= a7; a7--) this.eW[a7] = 1;
		for (a7 = a9.data.teamPlayerCount[7]; a7 < a9.eV; a7++) this.eW[a7] = 2;
		this.k8[1] = 7, this.k8[2] = 8
	}, this.ie = function() {
		var hb = new Uint8Array(a9.jm),
			hc = new Uint8Array(a9.jm),
			aUn = new Uint16Array(8),
			aUo = new Uint16Array(this.k8.length);
		this.aUp(hb, hc, aUn, 1), this.aDm(aUn), this.aUq(aUo, hb, hc), this.aUr(hb, hc, aUo), this.aUs()
	}, this.aUp = function(hb, hc, aUu, aUw) {
		for (var es, e, aUx, eY = this.k8.length - aUw, g = new Uint16Array(eY), colorsData = a9.data.colorsData, a7 = a9.jm - 1; 0 <= a7; a7--) {
			for (es = eY; aUw <= es; es--) g[es - 1] = Math.abs(4 * (colorsData[a7] >> 12) - aUi[es][0]) + Math.abs(4 * (colorsData[a7] >> 6 & 63) - aUi[es][1]) + Math.abs(4 * (63 & colorsData[a7]) - aUi[es][2]);
			for (aUx = 768, es = eY - 1; 0 <= es; es--) g[e = (es + a7) % eY] < aUx && (aUx = g[e], hb[a7] = e);
			for (aUu[hb[a7]] += 4, aUx = 768, es = eY - 1; 0 <= es; es--) g[e = (es + a7) % eY] < aUx && e !== hb[a7] && (aUx = g[e], hc[a7] = e);
			aUu[hc[a7]]++
		}
	}, this.aDm = function(aUu) {
		for (var es, kW, eY = this.k8.length - 1, a7 = eY; 0 <= a7; a7--) this.k8[a7] = a7;
		for (a7 = eY - 1; 0 <= a7; a7--) aUu[a7]++;
		for (a7 = 1; a7 <= eY; a7++) {
			for (kW = 0, es = 1; es < eY; es++) aUu[es] > aUu[kW] && (kW = es);
			aUu[kW] = 0, this.k8[a7] = kW + 1
		}
	}, this.aUq = function(aUo, hb, hc) {
		var es, zP, et, eb, e, mF, sL, aUy = this.k8.length - 1,
			q1 = new Uint16Array(aUy),
			aUz = [],
			aV0 = 0,
			zO = [],
			aV1 = [];
		loop: for (var a7 = 0; a7 < a9.jm; a7++)
			if (null !== (zP = b6.zM.zQ(ac.a55[a7]))) {
				for (es = zO.length - 1; 0 <= es; es--)
					if (zP === zO[es]) {
						aV1[es].push(a7), aV0 = Math.max(aV0, aV1[es].length);
						continue loop
					} zO.push(zP), aUz.push(!1), aV1.push([a7]), aV0 = Math.max(aV0, 1)
			}
		for (; 2 < a9.w4 && aV0 > bH.dl(a9.jm, a9.w4);) a9.w4--, a9.k3--;
		for (es = zO.length - 1; 0 <= es; es--) {
			for (eb = -1, et = zO.length - 1; 0 <= et; et--) !aUz[et] && (-1 === eb || aV1[et].length > aV1[eb].length) && (eb = et);
			for (et = aUy - 1; 0 <= et; et--) q1[et] = 1;
			for (et = aV1[eb].length - 1; 0 <= et; et--) q1[hb[aV1[eb][et]]] += 3, q1[hc[aV1[eb][et]]]++;
			for (a7 = aUy - 1; 0 <= a7; a7--) {
				for (e = eb % aUy, et = aUy - 1; 0 <= et; et--) q1[et] > q1[e] && (e = et);
				for (mF = -1, et = a9.w4; 0 < et; et--)
					if (this.k8[et] === e + 1) {
						mF = et;
						break
					} if (q1[e] = 0, -1 !== mF) {
					for (sL = 0, et = a9.w4; 0 < et; et--) aUo[mF] > aUo[et] && sL++;
					if (sL !== a9.w4 - 1) {
						for (et = aV1[eb].length - 1; 0 <= et; et--) aUo[mF]++, this.eW[aV1[eb][et]] = mF;
						break
					}
				}
			}
			aUz[eb] = !0
		}
	}, this.aUr = function(hb, hc, aUo) {
		for (var a7, hq, eY = this.k8.length - 1, border = bH.dl(a9.jm, a9.w4), aV2 = (0 < a9.jm % a9.w4 && border++, new Uint8Array(1 + eY)), es = eY; 1 <= es; es--) aV2[this.k8[es]] = es;
		for (a7 = 0; a7 < a9.jm; a7++) hq = aV2[hb[a7] + 1], 0 === this.eW[a7] && hq <= a9.w4 && aUo[hq] < border && (aUo[hq]++, this.eW[a7] = hq);
		for (a7 = 0; a7 < a9.jm; a7++) hq = aV2[hc[a7] + 1], 0 === this.eW[a7] && hq <= a9.w4 && aUo[hq] < border && (aUo[hq]++, this.eW[a7] = hq);
		for (es = a9.w4; 1 <= es; es--)
			for (a7 = a9.jm - 1; 0 <= a7 && !(aUo[es] >= border); a7--) 0 === this.eW[a7] && (aUo[es]++, this.eW[a7] = es)
	}, this.aUs = function() {
		for (var a7 = a9.jm; a7 < a9.eV; a7++) this.eW[a7] = 1 + a7 % a9.w4
	}
}

function gN() {
	for (var ef, eh, a7 = fT - 1; 0 <= a7; a7--) ef = bH.dl(fV[a7], 4) % bO.ej, eh = bH.dl(fV[a7], 4 * bO.ej), ac.iK[fO] = Math.min(ef, ac.iK[fO]), ac.iM[fO] = Math.min(eh, ac.iM[fO]), ac.iL[fO] = Math.max(ef, ac.iL[fO]), ac.iN[fO] = Math.max(eh, ac
		.iN[fO])
}

function fi() {
	var eb, g6, a7, eY = ac.g0[fO].length,
		ea = aY.ea;
	loop: for (a7 = eY - 1; 0 <= a7; a7--) {
		for (eb = 3; 0 <= eb; eb--)
			if (g6 = ac.g0[fO][a7] + ea[eb], aY.eP(g6) || aY.g8(g6) && aY.eQ(g6) !== fO) {
				aY.iz(ac.g0[fO][a7], fO);
				continue loop
			} ac.g0[fO][a7] = ac.g0[fO][eY - 1], ac.g0[fO].pop(), eY--
	}
}

function fj() {
	var player = fO,
		gE = ac.gE,
		gF = ac.gF,
		ey = ac.ey,
		eY = gE[player].length,
		ea = aY.ea;
	loop: for (var a7 = eY - 1; 0 <= a7; a7--) {
		for (var aV3 = !1, aV4 = !1, eb = 3; 0 <= eb; eb--) {
			var g6 = gE[player][a7] + ea[eb];
			if (aY.aDw(g6, player)) continue loop;
			aV3 = aV3 || aY.h1(g6), aV4 = aV4 || aY.aDv(g6)
		}
		aV3 ? gF[player].push(gE[player][a7]) : aV4 ? ey[player].push(gE[player][a7]) : aY.wW(gE[player][a7], player), gE[player][a7] = gE[player][eY - 1], gE[player].pop(), eY--
	}
}

function gC() {
	ac.gM[fS] -= fT
}

function gD(border) {
	for (var eY = border.length, a7 = eY - 1; 0 <= a7; a7--) aY.wq(fS, border[a7]) || (border[a7] = border[eY - 1], border.pop(), eY--)
}

function gG(border) {
	for (var eY = border.length, a7 = eY - 1; 0 <= a7; a7--) !aY.wq(fS, border[a7]) && aY.eT(border[a7]) && (border[a7] = border[eY - 1], border.pop(), eY--)
}

function gH(border) {
	for (var eb, g6, eY = border.length, ea = aY.ea, a7 = eY - 1; 0 <= a7; a7--)
		for (eb = 3; 0 <= eb; eb--)
			if (g6 = border[a7] + ea[eb], aY.aDw(g6, fS)) {
				ac.gE[fS].push(border[a7]), border[a7] = border[eY - 1], border.pop(), eY--;
				break
			}
}

function gI() {
	for (var eb, g6, ea = aY.ea, a7 = fT - 1; 0 <= a7; a7--)
		for (eb = 3; 0 <= eb; eb--) g6 = fV[a7] + ea[eb], aY.aDx(fS, g6) && aY.aDy(g6) && (ac.gE[fS].push(g6), aY.g3(g6, fS))
}

function gJ() {
	var ef, eh;
	loop: for (; ac.iM[fS] < ac.iN[fS];) {
		for (ef = ac.iL[fS]; ef >= ac.iK[fS]; ef--)
			if (aY.wq(fS, 4 * (ac.iM[fS] * bO.ej + ef))) break loop;
		ac.iM[fS]++
	}
	loop: for (; ac.iM[fS] < ac.iN[fS];) {
		for (ef = ac.iL[fS]; ef >= ac.iK[fS]; ef--)
			if (aY.wq(fS, 4 * (ac.iN[fS] * bO.ej + ef))) break loop;
		ac.iN[fS]--
	}
	loop: for (; ac.iK[fS] < ac.iL[fS];) {
		for (eh = ac.iN[fS]; eh >= ac.iM[fS]; eh--)
			if (aY.wq(fS, 4 * (eh * bO.ej + ac.iK[fS]))) break loop;
		ac.iK[fS]++
	}
	loop: for (; ac.iK[fS] < ac.iL[fS];) {
		for (eh = ac.iN[fS]; eh >= ac.iM[fS]; eh--)
			if (aY.wq(fS, 4 * (eh * bO.ej + ac.iL[fS]))) break loop;
		ac.iL[fS]--
	}
}

function eR(player, iw) {
	return 0 === bc.eW[player] || bc.eW[player] !== bc.eW[iw]
}

function h7(player, iw) {
	for (var e, aV5 = aZ.fe(player), a7 = 0; a7 < aV5; a7++)
		if (0 === aZ.ff(player, a7))
			if ((e = aZ.fk(player, a7)) === a9.eV) {
				if (iw === a9.eV) return !1;
				if (h5(iw)) return !0
			} else if (b6.fu.kY(e))
		if (iw === a9.eV) {
			if (h5(e)) return !0
		} else if (h9(iw, e)) return !0;
	return !1
}

function h5(player) {
	for (var a7, g7, eY = ac.gE[player].length, ea = aY.ea, eb = 3; 0 <= eb; eb--)
		for (g7 = ea[eb], a7 = 0; a7 < eY; a7++)
			if (aY.eP(ac.gE[player][a7] + g7)) return !0;
	return !1
}

function aE5(player) {
	for (var a7, g7, eY = ac.gE[player].length, ea = aY.ea, eb = 3; 0 <= eb; eb--)
		for (g7 = ea[eb], a7 = 0; a7 < eY; a7++)
			if (aY.iy(ac.gE[player][a7]) && aY.eP(ac.gE[player][a7] + g7)) return !0;
	return !1
}

function h9(a2A, a2B) {
	for (var a7, dk, g7, g6, aSh = ac.gE[a2A].length, aSi = ac.gE[a2B].length, ea = (aSi < aSh && (dk = a2A, a2A = a2B, a2B = dk, dk = aSh, aSh = aSi, 0), aY.ea), eb = 3; 0 <= eb; eb--)
		for (g7 = ea[eb], a7 = 0; a7 < aSh; a7++)
			if (g6 = ac.gE[a2A][a7] + g7, aY.g8(g6) && aY.eQ(g6) === a2B) return !0;
	return !1
}

function aE6(a2A, a2B) {
	for (var a7, g7, g6, aSh = ac.gE[a2A].length, ea = aY.ea, eb = 3; 0 <= eb; eb--)
		for (g7 = ea[eb], a7 = 0; a7 < aSh; a7++)
			if (aY.iy(ac.gE[a2A][a7]) && (g6 = ac.gE[a2A][a7] + g7, aY.g8(g6)) && aY.eQ(g6) === a2B) return !0;
	return !1
}

function dP() {
	this.oy = new aV6
}

function aV6() {
	this.h4 = function(player) {
		b6.fu.a28(player) && aJ.z9(80, L(444), 637, 0, b7.nS, b7.ma, -1, !1)
	}, this.a43 = function() {
		aJ.z9(80, L(445), 637, 0, b7.nS, b7.ma, -1, !1)
	}, this.o2 = function(player) {
		b6.fu.a28(player) && aJ.z9(80, L(446), 637, 0, b7.nS, b7.ma, -1, !1)
	}
}

function aV7() {
	this.aV8 = 0, this.ie = function() {
		aK.ie(), aV.ie(), at.ie(), aw.s.ie(), ar.aDH(), bb.dc && (bb.dc = !1, aW.ta())
	}
}

function aV9() {
	this.lt = bb.lt, this.e0 = 0, this.aV8 = 0, this.aDE = 0, this.aVA = null, this.aVB = 7, this.a5W = 0, this.dU = function() {
		this.aDE = 0, this.aVA = [], this.e0 = 0, this.aV8 = 0
	}, this.aP4 = function(a8) {
		if (a9.gu) this.a9V(a8);
		else if (this.aVA.push(a8), 2 === a9.yl) {
			for (var a7 = 0; a7 < this.aVA.length; a7++) b4.nr.ie(this.aVA[a7]);
			this.aVA = []
		}
	}, this.a9V = function(a8) {
		2 !== a9.yl && (b4.nr.ie(a8), b5.ie(), aS.a9V(this.aDE), this.aDE === a9.a38 ? (a9.oo.ie(), this.aDE = 0, this.e0 = 0, this.aV8 = 0, this.lt = bb.lt) : (this.aDE++, ab.a31(), ab.lM(!0), bX.aA3()))
	}, this.ie = function() {
		at.ie(), a9.gu ? (bb.dc = aS.a9V(-1) || bb.dc, lO()) : (0 !== this.e0 || bb.lt >= this.lt && (this.lt += bb.a9U * Math.floor(1 + (bb.lt - this.lt) / bb.a9U), 2 === a9.yl ? lD() : this.aVC(), this.e0++, 27 < bb.lt - this.a5W)) && this
		.aVD(), lJ(), bb.dc && (bb.dc = !1, wt()), this.a5W = bb.lt
	}, this.aVD = function() {
		bb.dc = !0, lL(), this.e0 = 0
	}, this.aVC = function() {
		var uG, a7;
		if (this.aV8 !== 7 * this.aDE) lF(), bX.aA3();
		else {
			uG = !1;
			loop: for (; this.aVE() && (uG = !0, lF(), 2 !== a9.yl) && 0 < this.aVA.length;)
				for (a7 = this.aVB - 2; 0 <= a7; a7--)
					if (lF(), 2 === a9.yl) break loop;
			uG ? bX.aA3() : (lD(), bX.a34())
		}
	}, this.aVE = function() {
		return 0 < this.aVA.length && (this.aDE++, b4.nr.ie(this.aVA[0]), this.aVA.shift(), !0)
	}
}

function aVF() {
	var aVG, aVH, aVI, aDE, aVJ, e0 = 0,
		lt = bb.lt;

	function aVM() {
		! function() {
			if (!a9.gu) return;
			if (a9.k5) return;
			if (2 !== a9.yl)
				if (aVJ % 7 != 0) aVJ++;
				else if (aDE === a9.a38) {
				if (!aVP()) return;
				aS.a9V(aDE), a9.oo.ie()
			} else {
				if (!aVP()) return;
				aVJ++, aDE++, ab.a31(), ab.lM(!0)
			}
			return 1
		}() && aVP() && lF()
	}

	function aVN() {
		e0 = 0, (a9.gu ? (bb.dc = aS.a9V(aDE - (aVJ % 7 == 0 ? 0 : 1) + aVJ % 7 / 7) || bb.dc, lO) : aI.gj || !b8.a3V ? lO : (bb.dc = !0, lL))()
	}

	function aVP() {
		var a7, eY, aVQ = b5.om.aQF,
			fG = b5.om.aQG,
			fI = b5.om.aQH,
			fK = b5.om.aQI,
			aVR = b5.om.aQJ,
			aVS = b5.om.aQK;
		if (!(aVG >= aVS.length)) {
			if (aVS = aVS[aVG], aVR[aVG]) {
				for (eY = aVH + aVS, a7 = aVH; a7 < eY; a7++) b4.nr.oY(aVQ[a7], fG[a7], fI[a7], fK[a7]);
				aVH += aVS, aVG++
			} else ++aVI >= aVS && (aVG++, aVI = 0);
			return 1
		}
		aJ.a01("Replay file smaller than expected."), b8.a0t(!1), a9.yl = 2
	}
	this.aV8 = 0, this.dU = function() {
		aVJ = aDE = aVI = aVH = aVG = 0
	}, this.ie = function() {
		var aT4;
		at.ie(), b8.a6x() < 1.7 ? 0 === e0 ? bb.lt >= lt && (aT4 = bb.a9U / b8.a6x(), lt += aT4 * Math.floor(1 + (bb.lt - lt) / aT4), 2 === a9.yl || aI.gj || !b8.a3V ? lD() : (aVM(), bX.aA3()), e0++) : aVN() : function() {
			var aT4;
			if (bb.lt >= lt)
				if (2 === a9.yl || aI.gj || !b8.a3V) lD(), lt = bb.lt;
				else {
					for (aT4 = bb.a9U / b8.a6x(), 16 < (bb.lt - lt) / aT4 && (lt = bb.lt - 16 * aT4); bb.lt >= lt && 2 !== a9.yl;) lt += aT4, aVM();
					bX.aA3()
				} aVN()
		}(), lJ(), bb.dc && (bb.dc = !1, wt())
	}, this.yv = function() {
		b5.om.aQK.length - aVG <= 2 || aJ.a01("Replay file larger than expected.")
	}
}

function aVT() {
	var e0 = 0,
		lt = bb.lt;
	this.aV8 = 0, this.ie = function() {
		at.ie(), a9.gu ? lO() : 0 === e0 ? bb.lt >= lt && (lt += bb.a9U * Math.floor(1 + (bb.lt - lt) / bb.a9U), 2 === a9.yl || aI.gj ? lD() : (lF(), bX.aA3()), e0++) : ((aI.gj ? lO : (bb.dc = !0, lL))(), e0 = 0), lJ(), bb.dc && (bb.dc = !1,
		wt())
	}
}

function dK() {
	this.yu = null, this.dc = !1, this.lt = 0, this.a9U = 56;
	var aVU = 0;

	function aVV() {
		bb.lt = aVU = performance.now(), bb.yu.ie(), window.requestAnimationFrame(aVV)
	}
	this.dU = function() {
		this.a3S(), window.requestAnimationFrame(aVV), this.lt = performance.now()
	}, this.a3J = function() {
		a9.gi ? (this.yu = new aVF, this.yu.dU()) : a9.k5 ? this.yu = new aVT : (this.yu = new aV9, this.yu.dU())
	}, this.a3S = function() {
		this.yu = new aV7, this.dc = !0
	}, this.ie = function() {
		this.yu.aV8++
	}, this.jj = function() {
		return this.yu.aV8
	}, this.aOg = function() {
		var dk = performance.now();
		dk < aVU + 1e3 || (this.lt = dk, this.yu.ie())
	}
}

function cm() {
	var ln = 0,
		aVW = !0;

	function aVY(pD) {
		8 !== aW.zu() || 2 !== ac.a27[a9.eI] && (0 !== ac.la[a9.eI] || a9.gu) || aJ.a5D(pD)
	}
	this.ie = function() {
		var dk, a5Y;
		bb.lt > ln && (ln = bb.lt + 2500, dk = new Date, a5Y = dk.getUTCSeconds(), aVW ? a5Y < 45 && (aVW = !1) : a5Y < 45 || (aVW = !0, (a5Y = dk.getUTCMinutes() + 1) % 15 == 0 && aVY(30 === a5Y ? "Upcoming Battle Royale Contest!" :
			"Upcoming Alliance Contest!")))
	}
}

function cg() {
	var m3, m4, mG, mH, aVZ = 0,
		aVa = 0;

	function aVc() {
		return Math.pow(Math.pow(mG - m3, 2) + Math.pow(mH - m4, 2), .5)
	}

	function aVb(e) {
		m3 = at.pc * e.touches[0].clientX, m4 = at.pc * e.touches[0].clientY, mG = at.pc * e.touches[1].clientX, mH = at.pc * e.touches[1].clientY
	}
	this.a0L = function(e) {
		return 1 < e.touches.length ? (aVa = bb.lt, aVZ = 3, aVb(e), aH.r4(), !0) : (aVZ = 0, !1)
	}, this.a0M = function(e) {
		var aHs, ho, hp;
		return 0 !== a9.yl && 1 < e.touches.length && (aVZ = Math.max(aVZ - 1, 0), aD.mL() && (aHs = aVc(), aVb(e), e = aVc(), ho = Math.floor((m3 + mG) / 2), hp = Math.floor((m4 + mH) / 2), aO.a7N(ho, hp, Math.max(.125, e) / Math.max(.125,
			aHs)), bb.dc = !0), !0)
	}, this.a0j = function() {
		var ef, eh;
		return !!(aVZ && (aVZ = 0, bb.lt < aVa + 500)) && (ef = (m3 + mG) / 2, eh = (m4 + mH) / 2, aH.a0d(ef, eh), aH.click(ef, eh, !0) && (bb.dc = !0), !0)
	}
}

function cv() {
	this.size = 0, this.e0 = 0, this.a8 = null, this.dU = function(a8) {
		this.e0 = 0, this.a8 = a8, this.size = a8.length
	}, this.a07 = function() {
		this.a8 = null
	}, this.oX = function(size) {
		for (var f0 = 0, a8 = this.a8, mL = this.e0 + size - 1, a7 = this.e0; a7 <= mL; a7++) f0 |= (a8[a7 >> 3] >> 7 - (7 & a7) & 1) << mL - a7;
		return this.e0 += size, this.e0 > 8 * this.size && console.error("Unwrapper Overflow"), f0
	}, this.aPI = function(size) {
		var es = size >> 1;
		return (1 << es) * this.oX(size - es) + this.oX(es)
	}, this.aPH = function(aVd) {
		return this.size === b9.aPB(aVd)
	}, this.aQX = function(vh, aVe, aVf) {
		var g1 = this.oX(vh);
		if (!g1) return null;
		for (var vh = Math.max(g1, aVf), g = new(aVe <= 8 ? Uint8Array : aVe <= 16 ? Uint16Array : Uint32Array)(vh), a7 = 0; a7 < g1; a7++) g[a7] = this.oX(aVe);
		aVf = g[g1 - 1];
		return aVf && g.fill(aVf, g1), g
	}, this.aQY = function(vh, aVg, aVf) {
		var g1 = this.oX(vh);
		if (!g1) return null;
		for (var vh = Math.max(g1, aVf), g = new Array(vh), a7 = 0; a7 < g1; a7++) g[a7] = this.aQV(aVg);
		return g.fill(g[g1 - 1], g1), g
	}, this.aQV = function(vh) {
		return bC.un.ur(this.oX(vh))
	}, this.aQW = function() {
		var pD = bB.rz.s0(bB.rz.s1(this.oX(30))),
			pD = b6.zM.a2w(pD, "_", "/");
		pD = b6.zM.a2w(pD, "-", "+");
		for (var aVh = "";
			(pD.length + aVh.length) % 4;) aVh += "=";
		pD = "data:image/png;base64," + pD + aVh;
		var aEb = new Image;
		aEb.onload = function() {
			b5.aF0.aF1(aEb), aEb.onload = null, aEb = null
		}, aEb.src = pD
	}
}

function dE() {
	this.aRN = 0, this.aRO = 0, this.aRJ = 0, this.aRK = 0, this.aRL = 0, this.aRM = 0, this.aA4 = [0, 0, 0, 0], this.mK = function() {
		this.aRN = aO.wv(), this.aRO = aO.ww(), this.aRJ = -this.aRN, this.aRK = -this.aRO, this.aRL = at.a1 / i7, this.aRM = at.jF / i7, this.aA4[0] = Math.floor(this.aRJ), this.aA4[1] = Math.floor(this.aRK), this.aA4[2] = Math.floor(this.aA4[
			0] + this.aRL + 1), this.aA4[3] = Math.floor(this.aA4[1] + this.aRM + 1), bX.aA1 = !0
	}
}

function ch() {
	var a63, ln;
	this.dU = function() {
		a63 = 1, ln = 0
	}, this.ie = function() {
		0 < a63 && (ln = 0 === ln ? bb.lt + 16 : ln, a63 = (a63 -= .001 * (bb.lt - ln)) < 0 ? 0 : a63, ln = bb.lt, bb.dc = !0)
	}, this.ta = function() {
		0 < a63 && (tb.fillStyle = "rgba(0,0,0," + a63 + ")", tb.fillRect(0, 0, at.a1, at.jF))
	}
}

function a2() {
	this.size = 0, this.e0 = 0, this.a8 = null, this.dU = function(a8) {
		this.e0 = 0, this.a8 = a8, this.size = a8.length
	}, this.a3 = function(aVd) {
		return this.dU(new Uint8Array(this.aPB(aVd))), this.a8
	}, this.a07 = function() {
		this.a8 = null
	}, this.a4 = function(size, a5a) {
		for (var a8 = this.a8, mL = this.e0 + size - 1, a7 = this.e0; a7 <= mL; a7++) a8[a7 >> 3] |= (a5a >> mL - a7 & 1) << 7 - (7 & a7);
		this.e0 += size, this.e0 > 8 * this.size && console.error("Wrapper Overflow")
	}, this.aPA = function(size, a5a) {
		var es = size >> 1,
			eb = 1 << es;
		this.a4(size - es, bH.dl(a5a, eb)), this.a4(es, a5a % eb)
	}, this.aVk = function(size) {
		for (var a8 = this.a8, mL = this.e0 + size, a7 = this.e0; a7 < mL; a7++) a8[a7 >> 3] &= 255 ^ 128 >>> (7 & a7)
	}, this.aPB = function(aVd) {
		return aVd + 7 >> 3
	}, this.aVl = function(g, j2, mL, aVm) {
		for (var a7 = j2; a7 < mL; a7++) this.a4(aVm, g[a7])
	}
}

function cu() {
	this.dU = function() {
		this.g = [], this.e0 = 0
	}, this.aPd = function() {
		return new Uint8Array(this.g)
	}, this.a4 = function(aVn, value) {
		for (var g = this.g, mL = this.e0 + aVn - 1, aVo = 1 + (mL >> 3); g.length < aVo;) g.push(0);
		for (var a7 = this.e0; a7 <= mL; a7++) g[a7 >> 3] |= (value >> mL - a7 & 1) << 7 - (7 & a7);
		this.e0 += aVn
	}, this.db = function(g, vh, aVe) {
		var aVp = b6.pg.a1W(g);
		this.a4(vh, aVp);
		for (var a7 = 0; a7 < aVp; a7++) this.a4(aVe, g[a7])
	}, this.aQp = function(g, vh, aVg) {
		var aVp = b6.pg.a1W(g);
		this.a4(vh, aVp);
		for (var a7 = 0; a7 < aVp; a7++) this.aQn(g[a7], aVg)
	}, this.aQn = function(pD, vh) {
		var eY = pD.length;
		this.a4(vh, eY);
		for (var a7 = 0; a7 < eY; a7++) this.a4(16, pD.charCodeAt(a7))
	}, this.aQo = function(a1a) {
		var aVq = (a1a = a1a.toDataURL()).split(",");
		if (aVq.length < 2) console.log("error 266");
		else {
			a1a = b6.zM.a2w(a1a = aVq[aVq.length - 1], "/", "_"), a1a = b6.zM.a2w(a1a, "\\+", "-");
			var a1a = b6.zM.a2w(a1a, "=", ""),
				v0 = bC.rz.ux(a1a),
				eY = v0.length;
			this.a4(30, eY);
			for (var a7 = 0; a7 < eY; a7++) this.a4(6, v0[a7])
		}
	}
}
a(), self.aiCommand746 = function(f0) {
	0 === f0 ? bn() : 1 !== f0 || !u || 1 !== u.id || u.f1 < 14 || bF.f2()
}, setTimeout(bn, 1e4), window.onload = function() {
	bn()
};