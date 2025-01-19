var h, a9, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, at, au, av, aw, ax, ay, az, b0, b1, b2, b3, b4, b5, b6, b7, b8,
	b9, bA, bB, bC, bD, bE, bF, bG, bH, bI, bJ, bK, bL, bM, bN, bO, bP, n, bQ, bR, bS, bT, bU, bV, bW, bX, bY, bZ, ba, bb, bc, bd, u, be, bf, bg, l, bh, bi, bj, bk, bl, bm, dg, dh, a5, di, a6, fN, fO, fP, fQ, fR, fS, fT, fU, fV, fW, fX, fY, fZ, hw,
	hv, hx, a5u, kw, jP, zx, tN, wh, a9e, a2y, a2z, S = ["100%", "div", "⬅️ ", "canvas", "absolute", "inherit", "rgb(", "rgba(", "auto", "none", "   ", "hidden", "center", "Data", "<br>", "1em", "flex", "0.8em", "territorial.io", "input",
		"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==", "click", "0.5em", "' target='_blank'>", "undefined",
		"span", "</a>", "pointer", "password", "nowrap", "function", "Value", "Enter", "1 Minute", "1 Hour", "0.6em", "text", "string", "rgba(0,0,0,0.8)", "number", "mouseleave", "focus", "break-word", "blur", "Player ", "NoStack", "Escape", "50%",
		"20 Seconds", "1.2em", "0.0em 0.9em", ". Duration: x", " voted with ", " / ", "🔄 Reload", "underline", "top", "tls7", "Trebuchet MS", "rgba(140,10,10,0.75)", "rgba(100,0,0,0.8)", "rgba(10,140,10,0.75)", "rgba(0,100,0,0.8)", "rgba(0,",
		"rgb(10,220,10)", "pre", "placeholder", "mouseover", "mouseout", "middle", "long", "logo", "loading", "keydown", "italic ", "inline-block", "file", "error", "en-US", "data:image/png;base64,", "break-all", "bold", "blur(4px)", "arena",
		"account", "accept", "_blank", "Space", "Seed", "Reload", "Interest", "Censored", "Bot ", "Back", "<a href='", "1v1", "1.4em", "1 Day", "0px", "000", "0.75em", "0.4em 0em", "0.2em", ",0,0.85)", " solid white;}", " Rank: ", " / 160", " -> "
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
	this.dj = 1082, this.j = 2022, this.rVersion = 4, this.dU = function() {
		dg = 2;
		var dk = bH.dl(this.j, 10) % 100;
		dh = "18 Jan 2025 [" + bH.dl(this.j, 1e3) + "." + (dk < 10 ? "0" : "") + dk + "." + this.j % 10 + "]", a5 = true, a6 = function() {
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
			[2, 3, 2, 1, 2],
			[2, 4, 2, 2, 3],
			[3, 4, 3, 3, 4],
			[3, 5, 3, 3, 5]
		],
		dv = [" kicked ", " muted ", " censored the username of ", " deducted x from ", " seized x from ", " reported "],
		dw = [". Duration: x", ". Duration: x", ". Duration: x", ".", ".", ". Reason: x"];
	this.dx = [
		["20 Seconds", "1 Minute", "1 Hour"],
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
		a9.gi || aI.gj || (b6.fu.gk(0) || b6.fu.gk(1)) && b6.fu.gl(a9.eI) && (aN.gm(gd, ge) ? aN.gn = !1 : function(gh) {
			var gp = bI.gq(gd),
				gr = bI.gs(ge),
				eK = bI.ew(gp, gr),
				eC = bI.eO(eK);
			bI.gt(gp, gr) && (a9.gu ? aY.eT(eC) && b4.gv.gw(eK) : aY.ed(eC) ? gh || (gp = ai.e9.eB(eC)) && (gr = bI.eO(gp), gr = aY.eP(gr) ? a9.eV : aY.eQ(gr), b4.gv.gz(aN.h0(), gp, gr)) : aY.h1(eC) || gh ? bJ.h2.h3(a9.eI, eK) && b4.gv
				.h4(aN.h0(), eK) : aY.eP(eC) ? h5(a9.eI) ? b4.gv.h6(aN.h0(), a9.eV) : h7(a9.eI, a9.eV) ? ax.h8(a9.eV, aN.h0()) : bJ.h2.h3(a9.eI, eK) && b4.gv.h4(aN.h0(), eK) : (gp = aY.eQ(eC)) !== a9.eI && (eR(gp, a9.eI) ? h9(a9.eI,
					gp) ? b4.gv.h6(aN.h0(), gp) : h7(a9.eI, gp) ? ax.h8(gp, aN.h0()) : bJ.h2.h3(a9.eI, eK) && b4.gv.h4(aN.h0(), eK) : bJ.h2.h3(a9.eI, eK) && b4.gv.h4(aN.h0(), eK)))
		}(gh))
	}
}

function hA(hB, size, hC, hD, font) {
	var a7, hG = .2,
		canvas = document.createElement("canvas"),
		hH = canvas.getContext("2d", {
			alpha: !1
		});
	for (canvas.width = hB, canvas.height = hB, hH.font = size + font, hH.textAlign = "center", hH.textBaseline = "middle", hH.fillStyle = "red", a7 = 0; a7 < hC.length; a7++) hH.fillText(hC[a7], .5 * hB, .5 * hB);
	return -1 < (canvas = function(hE) {
		var a7, dz, eb = hE.data;
		for (a7 = eb.length - 4; 0 <= a7; a7 -= 4)
			if (dz = eb[a7], hD <= dz) return Math.floor(a7 / (4 * hB));
		return -1
	}(hH.getImageData(0, 0, hB, hB))) && (hG = (canvas - .5 * hB + .1 * size) / size), Math.max(hG, 0)
}

function cy() {
	this.hJ = new Int16Array(4), this.hK = new Int16Array(4), this.dU = function() {
		var a7;
		for (this.hJ[0] = -bO.ej, this.hJ[1] = 1, this.hJ[2] = bO.ej, this.hJ[3] = -1, a7 = 0; a7 < 4; a7++) this.hK[a7] = 4 * this.hJ[a7]
	}, this.hL = function(gx, hM) {
		var hN = this.eg(hM) - this.eg(gx),
			hM = this.ei(hM) - this.ei(gx),
			gx = hN >>> 31 << 1;
		return 5 + gx + (1 - gx) * (1 - (hM >>> 31 << 1)) * (Math.abs(hN) - Math.abs(hM) >>> 31) & 3
	}, this.hS = function(gx, hM, hT) {
		return hT % 2 == 0 ? hT + (1 - hT) * (1 - (this.eg(hM) - this.eg(gx) >>> 31 << 1)) + 4 & 3 : hT + (2 - hT) * (1 - (this.ei(hM) - this.ei(gx) >>> 31 << 1)) + 4 & 3
	}, this.hV = function(g6, eK) {
		for (var hM, hW, hY = ac.gF[g6], eY = hY.length, a1 = bO.ej, hZ = this.eg(eK), ha = this.ei(eK), ee = hY[0] >> 2, min = this.eq(hZ, ha, ee), a7 = 1; a7 < eY; a7++)(hW = (hW = hZ - (hM = hY[a7] >> 2) % a1) * hW + (hW = ha - ~~((.5 + hM) /
			a1)) * hW) < min && (min = hW, ee = hM);
		return ee
	}, this.hb = function(player, eC) {
		return !aY.eP(eC) && player === aY.eQ(eC)
	}, this.eq = function(gp, gr, eK) {
		return (gp -= this.eg(eK)) * gp + (gr -= this.ei(eK)) * gr
	}, this.hc = function(hd, he, hf) {
		hd = this.hh(hd) - this.hi(hf), he = this.hk(he) - this.hl(hf);
		return Math.sqrt(hd * hd + he * he)
	}, this.hm = function(gx, hM) {
		var hg = this.eg(gx) - this.eg(hM),
			gx = this.ei(gx) - this.ei(hM);
		return Math.sqrt(hg * hg + gx * gx)
	}, this.hn = function(gx, hM) {
		var hg = this.eg(gx) - this.eg(hM),
			gx = this.ei(gx) - this.ei(hM);
		return hg * hg + gx * gx
	}, this.ho = function(hp, hq, hr, hs) {
		return (hp -= hr) * hp + (hq -= hs) * hq
	}, this.ht = function(g6, hu) {
		return bH.dl(hu * ac.ga[g6], 1e3)
	}, this.hh = function(hd) {
		return 16 * (hd + hv) / hw
	}, this.hk = function(he) {
		return 16 * (he + hx) / hw
	}, this.hy = function(eb) {
		return 16 * eb / hw
	}, this.gq = function(hd) {
		return Math.floor((hd + hv) / hw)
	}, this.gs = function(he) {
		return Math.floor((he + hx) / hw)
	}, this.gt = function(gp, gr) {
		return 1 <= gp && 1 <= gr && gp < bO.ej - 1 && gr < bO.ek - 1
	}, this.eg = function(eK) {
		return eK % bO.ej
	}, this.ei = function(eK) {
		return bH.dl(eK, bO.ej)
	}, this.ew = function(gp, gr) {
		return gr * bO.ej + gp
	}, this.hz = function(eK) {
		return this.ev(this.eg(eK), this.ei(eK))
	}, this.ev = function(gp, gr) {
		return 0 < gp && gp < bO.ej - 1 && 0 < gr && gr < bO.ek - 1
	}, this.eO = function(eK) {
		return eK << 2
	}, this.eM = function(eC) {
		return eC >> 2
	}, this.i0 = function(eK) {
		return bO.ej * this.ei(eK) * 256 + (this.eg(eK) << 4)
	}, this.i1 = function(eK) {
		return this.i0(eK) + 8 + (bO.ej << 7)
	}, this.i2 = function(hf) {
		return bO.ej * (this.hl(hf) >> 4) + (this.hi(hf) >> 4)
	}, this.i3 = function(hf) {
		hf = this.i2(hf);
		return (this.eg(hf) >> 5) + bJ.i4.i5 * (this.ei(hf) >> 5)
	}, this.hi = function(hf) {
		return hf % (bO.ej << 4)
	}, this.hl = function(hf) {
		return bH.dl(hf, bO.ej << 4)
	}, this.i6 = function(eK, hT) {
		return eK + this.hJ[hT]
	}, this.i7 = function(eC, hT) {
		return eC + this.hK[hT]
	}, this.i8 = function(player) {
		return this.ew(ac.i9[player] + ac.iA[player] >> 1, ac.iB[player] + ac.iC[player] >> 1)
	}, this.iD = function(player) {
		return this.ew(au.iE(ac.i9[player], ac.iA[player]), au.iE(ac.iB[player], ac.iC[player]))
	}
}

function ce() {
	this.iF = new iG, this.iH = new iI, this.iJ = new iK, this.performance = new iL, this.iM = new iN, this.iO = new iP, this.iQ = new iR, this.dU = function() {
		this.iF.dU(), this.iJ.dU(), this.performance.dU(), this.iM.dU(), this.iO.dU()
	}, this.iS = function() {
		this.performance.iS(), this.iF.iS()
	}
}

function iN() {
	var iT, iV = new Uint16Array(8);

	function ih(size, player) {
		for (var a7 = ac.g0[player].length - 1; size <= a7; a7--) aY.iq(ac.g0[player][a7], player)
	}
	this.dU = function() {
		iT = 0
	}, this.iW = function(player, iX) {
		return bK.eU[1] = ac.g0[player].length, bK.eU[0] === a9.eV ? aj.iM.iY(player) : this.iZ(player, bK.eU[0]), (0 !== bK.eU[1] || 0 !== ac.g0[player].length) && !(!iX && bK.eU[1] === ac.g0[player].length || (bK.eU[0] === a9.eV ? ac.ia[
			player]++ : ac.ib[player]++, 0))
	}, this.ic = function(player) {
		a9.ie && (aj.iO.ig[player] = 1), ih(bK.eU[1], player), aZ.ii(player, bK.f6[0], bK.eU[0]), aB.ij(player, !1)
	}, this.ik = function(player, il, eY, im) {
		var io = bH.dl(12 * ac.ga[player], 1024);
		im -= im >= bH.dl(ac.ga[player], 2) ? io : 0, ih(eY, player), aZ.ii(player, im, il), ac.ga[player] -= im + io, aB.ij(player, !1)
	}, this.iZ = function(player, il) {
		for (var hT, ea = aY.ea, a7 = ac.gE[player].length - 1; 0 <= a7; a7--)
			if (aY.ip(ac.gE[player][a7]))
				for (hT = 3; 0 <= hT; hT--)
					if (aY.g8(ac.gE[player][a7] + ea[hT]) && aY.eQ(ac.gE[player][a7] + ea[hT]) === il) {
						ac.g0[player].push(ac.gE[player][a7]);
						break
					}
	}, this.iY = function(player) {
		for (var ea = aY.ea, a7 = ac.gE[player].length - 1; 0 <= a7; a7--)
			if (aY.ip(ac.gE[player][a7]))
				for (var hT = 3; 0 <= hT; hT--)
					if (aY.eP(ac.gE[player][a7] + ea[hT])) {
						ac.g0[player].push(ac.gE[player][a7]);
						break
					}
	}, this.ir = function(player, is) {
		var a7, er, hT, it, eY = ac.gE[player].length,
			hU = 256 <= eY ? 12 : 32 <= eY ? 6 : 1,
			iu = eY - 1 - au.iv(hU),
			ea = aY.ea;
		iT = 0;
		loop: for (a7 = iu; 0 <= a7; a7 -= hU)
			for (hT = 3; 0 <= hT; hT--)
				if ((it = aY.eP(ac.gE[player][a7] + ea[hT]) ? a9.eV : aY.eQ(ac.gE[player][a7] + ea[hT])) === a9.eV || aY.g8(ac.gE[player][a7] + ea[hT]) && it !== player && (is || eR(player, it))) {
					for (er = iT - 1; 0 <= er; er--)
						if (iV[er] === it) continue loop;
					if (iV[iT] = it, 8 <= ++iT) return !0
				}
		return 0 < iT
	}, this.iw = function(player, is) {
		var a7, hT, it, ea = aY.ea;
		for (iT = 0, a7 = ac.gE[player].length - 1; 0 <= a7; a7--)
			for (hT = 3; 0 <= hT; hT--)
				if ((it = aY.eP(ac.gE[player][a7] + ea[hT]) ? a9.eV : aY.eQ(ac.gE[player][a7] + ea[hT])) === a9.eV || aY.g8(ac.gE[player][a7] + ea[hT]) && it !== player && (is || eR(player, it))) return iV[iT++] = it, !0;
		return !1
	}, this.ix = function() {
		for (var es, a7 = iT - 1; 0 <= a7; a7--)
			if (iV[a7] === a9.eV) {
				for (iT--, es = a7; es < iT; es++) iV[es] = iV[es + 1];
				return !0
			} return !1
	}, this.iy = function(player) {
		for (var es, a7 = iT - 1; 0 <= a7; a7--)
			if (aZ.iz(player, iV[a7]))
				for (iT--, es = a7; es < iT; es++) iV[es] = iV[es + 1];
		return 0 === iT
	}, this.j0 = function() {
		for (var a7 = iT - 1; 0 <= a7; a7--)
			if (b6.fu.j1(iV[a7])) return !0;
		return !1
	}, this.j2 = function() {
		for (var a7 = iT - 1; 0 <= a7; a7--) b6.fu.j1(iV[a7]) || (iV[a7] = iV[--iT]);
		return 0 < iT
	}, this.j3 = function(player) {
		for (var es, j4 = iV[0], j5 = ac.ga[j4] + aZ.gb(j4, player), a7 = iT - 1; 1 <= a7; a7--)(es = ac.ga[iV[a7]] + aZ.gb(iV[a7], player)) < j5 && (j4 = iV[a7], j5 = es);
		return j4
	}, this.j6 = function(player) {
		var j7, j8 = iV[0];
		if (1 !== iT)
			for (var j9 = bH.dl(ac.iA[player] + ac.i9[player], 2), jA = bH.dl(ac.iC[player] + ac.iB[player], 2), eo = jB(j9 - bH.dl(ac.iA[j8] + ac.i9[j8], 2)) + jB(jA - bH.dl(ac.iC[j8] + ac.iB[j8], 2)), a7 = iT - 1; 1 <= a7; a7--)(j7 = jB(j9 - bH
				.dl(ac.iA[iV[a7]] + ac.i9[iV[a7]], 2)) + jB(jA - bH.dl(ac.iC[iV[a7]] + ac.iB[iV[a7]], 2))) < eo && (eo = j7, j8 = iV[a7]);
		return j8
	}, this.jC = function() {
		for (var jD = iV, jE = jD[0], ga = ac.ga, jF = ga[jE], a7 = iT - 1; 1 <= a7; a7--) {
			var g6 = jD[a7],
				es = ga[g6];
			jF < es && (jE = g6, jF = es)
		}
		return jE
	}, this.jG = function() {
		return iV[au.iv(iT)]
	}
}

function iP() {
	function jV(player, il, jL) {
		3 <= jL && 2142 < bb.jb() && (il === a9.eV || ac.ga[il] < bH.dl(ac.ga[player], 20)) && aA.jQ(player, 20)
	}

	function jY(player, im, il, jL) {
		3 <= jL && jL < 6 && bH.dl(ac.ga[player], 8) > ac.ga[il] && (im = Math.max(bH.dl(11 * ac.ga[il], 5), bH.dl(ac.ga[player], 10)));
		jL = ac.g0[player].length;
		aj.iM.iZ(player, il), aj.iM.ik(player, il, jL, im)
	}

	function jU(player, im) {
		var il = a9.eV,
			eY = ac.g0[player].length;
		aj.iM.iY(player), ac.g0[player].length !== eY && aj.iM.ik(player, il, eY, im)
	}
	this.ig = new Uint8Array(a9.eV), this.dU = function() {
		this.ig.fill(0)
	}, this.jH = function(player, im) {
		var jJ, jL, jM, jN;
		a9.ie && (this.ig[player] = 0), aZ.jI(player) && (jJ = aa.jK(player), 3 <= (jL = aA.im[player]) && jL < 6 && (im = Math.max(ac.ga[player] - jJ, im)), jM = ac.gF[player].length, jN = ac.gE[player].length, 30 * ac.gM[player] > a9.jO && jP[
			player] < 10 && 100 * jN <= jM && aA.jQ(player, 10), a9.ie ? function(player, im, jL, jJ) {
			var il;
			if (aj.iM.ir(player, !1) || aj.iM.iw(player, !1)) {
				if (aj.iO.ig[player] = 1, !aj.iM.iy(player))
					if (aj.iM.ix()) jU(player, im), jV(player, a9.eV, jL);
					else {
						if (au.jW(aA.jX[jL])) il = aj.iM.j3(player);
						else {
							if (aj.iM.j0() && au.jW(aA.jZ[jL]) && aj.iM.j2(), 6 === jL) return jY(player, im, aj.iM.jG(), jL);
							il = aj.iM.j6(player)
						}
						jY(player, im, il, jL), jV(player, il, jL)
					}
			} else bJ.jS.iS(player) || aj.iQ.iS(player) || ! function(player, im, jL, jJ) {
				var a7, es, et, eW = bc.eW,
					jc = eW[player];
				if (0 !== jc) {
					var ga = ac.ga,
						jd = ga[player],
						gM = ac.gM;
					if (player < a9.je && (im = jd), !(jd < gM[player] || 5 === jL && jd < jJ || 4 === jL && jd < bH.dl(jJ, 2))) {
						var eY = ah.jf,
							jg = ah.jh,
							ji = (a7 = au.iv(eY), aj.iO.ig);
						for (es = 0; es < eY; es++)
							if (et = jg[(es + a7) % eY], 1 === ji[et] && eW[et] === jc) return b4.jj.jk(player, et, im);
						var jl = a9.jl,
							gF = ac.gF;
						for (es = 0; es < eY; es++)
							if (et = jg[(es + a7) % eY], ga[et] < jl * gM[et] && gF[et].length && eW[et] === jc && et !== player) return b4.jj.jk(player, et, im)
					}
				}
			}(player, im, jL, jJ)
		}(player, im, jL, jJ) : (!jN || jM && (jM < jN && !au.iv(10) || 100 * jN <= jM && au.iv(3) || !au.iv(8))) && bJ.jS.iS(player) || function(player, im, jL) {
			aj.iM.ir(player, !0) || aj.iM.iw(player, !0) ? aj.iM.iy(player) || (aj.iM.ix() ? jU(player, im) : au.jW(aA.jX[jL]) ? jY(player, im, aj.iM.j3(player), jL) : 5 === jL ? jY(player, im, aj.iM.jC(), jL) : (aj.iM.j0() && au.jW(aA
				.jZ[jL]) && aj.iM.j2(), jY(player, im, 6 === jL ? aj.iM.jG() : aj.iM.j6(player), jL))) : aj.iQ.iS(player)
		}(player, im, jL))
	}
}

function bz() {
	var jm = new Uint8Array(a9.eV),
		jn = new Uint16Array(a9.eV),
		jo = new Uint16Array(a9.eV),
		jp = new Uint8Array(a9.eV),
		jq = (this.im = new Uint8Array(a9.eV), new Uint16Array(a9.eV)),
		jr = new Uint16Array(a9.eV);

	function k6(a7) {
		jm[a7] = 1 + bH.dl(jq[a7] * au.random(), 10 * au.value(100))
	}
	this.js = null, this.jZ = [97, 94, 70, 40, 20, 0, 100], this.jt = [500, 450, 400, 300, 80, 50, 100], this.jX = [0, 0, 5, 25, 50, 100, 0], this.ju = [60, 74, 112, 200, 256, 512, 512], this.jv = [1, 2, 3, 4, 6, 8, 1], this.jw = [500, 450, 400, 300,
		80, 50, 100
	], this.dV = function() {
		this.js = [L(7), L(8), L(9), L(10), L(11), L(12), "H Bot"]
	}, this.dU = function() {
		jm.fill(0), jn.fill(0), jo.fill(0), jp.fill(0), this.im.fill(0), jq.fill(0), jr.fill(0);
		var jx = a9.je;
		if (9 === a9.jy) this.jz();
		else if (__fx.customLobby.isActive())
			for (a7 = a9.k2 - 1; 0 <= a7; a7--) this.im[a7 + jx] = __fx.customLobby.gameInfo.difficulty;
		else if (a9.k0)
			if (3 === a9.data.botDifficultyType)
				for (a7 = a9.k2 - 1; 0 <= a7; a7--) {
					var k3 = a7 + jx;
					this.im[k3] = a9.data.botDifficultyData[k3]
				} else if (2 === a9.data.botDifficultyType)
					for (a7 = a9.k2 - 1; 0 <= a7; a7--) this.im[k3 = a7 + jx] = a9.data.botDifficultyTeam[bc.k4[bc.eW[k3]]];
				else if (1 === a9.data.botDifficultyType) {
			var k5 = this.js.length;
			for (a7 = a9.k2 - 1; 0 <= a7; a7--) this.im[a7 + jx] = a7 % k5
		} else
			for (k5 = a9.data.botDifficultyValue, a7 = a9.k2 - 1; 0 <= a7; a7--) this.im[a7 + jx] = k5;
		else
			for (var k1 = 8 === a9.jy ? 1 : 0, a7 = a9.k2 - 1; 0 <= a7; a7--) this.im[a7 + jx] = k1;
		for (a7 = 0; a7 < jx; a7++) this.im[a7] = 6;
		var eY = a9.eV;
		for (a7 = 0; a7 < eY; a7++) this.im[a7] <= 2 ? (jp[a7] = 5, jq[a7] = jr[a7] = 1040, 0 === this.im[a7] ? (jn[a7] = 980, jo[a7] = 980) : 1 === this.im[a7] ? (jn[a7] = 980, jo[a7] = 920, jq[a7] = jr[a7] = 1100) : (jn[a7] = 825, jo[a7] =
			750)) : this.im[a7] <= 4 ? (jp[a7] = 1 + au.iv(20), 3 === this.im[a7] ? (jn[a7] = jo[a7] = 500, jq[a7] = jr[a7] = 1e3) : (jr[a7] = 250 + au.iv(1501), jq[a7] = 500 + au.iv(501), jn[a7] = 300 + au.iv(201), jo[a7] = 100 + au.iv(
			201))) : this.im[a7] <= 5 ? (jq[a7] = 1e3, jr[a7] = 1e3, jp[a7] = 35 + au.iv(16), jn[a7] = 300 + au.iv(201), jo[a7] = 50 + au.iv(101)) : (jq[a7] = jr[a7] = 800, jp[a7] = 5, jn[a7] = 10, jo[a7] = 250), k6(a7)
	}, this.jz = function() {
		for (var eC = av.k7, jx = a9.je, a7 = eC - 1; 0 <= a7; a7--) this.im[a7 + jx] = 0;
		for (var es = 0; es < 6; es++) {
			for (a7 = eC + av.k8[es] - 1; eC <= a7; a7--) this.im[a7 + jx] = es;
			eC += av.k8[es]
		}
	}, this.jQ = function(g6, value) {
		jm[g6] = Math.min(value, jm[g6])
	}, this.iS = function(g6) {
		0 == --jm[g6] && ! function(g6) {
			(function(g6) {
				jq[g6] !== jr[g6] && (jq[g6] += jq[g6] < jr[g6] ? 3 : -3);
				jn[g6] !== jo[g6] && (jn[g6] += jn[g6] < jo[g6] ? jp[g6] : -jp[g6], jn[g6] = (Math.abs(jn[g6] - jo[g6]) <= jp[g6] ? jo : jn)[g6]);
				jm[g6] = bH.dl(jq[g6], 10)
			})(g6), aj.iO.jH(g6, bH.dl(jn[g6] * ac.ga[g6], 1e3))
		}(g6)
	}, this.kB = function(g6, g1) {
		jq[g6] = jr[g6] = g1
	}
}

function iK() {
	var kC = new Uint16Array(a9.eV);

	function kH(player, kF) {
		for (var eY = bK.f4[0], fB = bK.fB, kQ = -1, kR = a9.eV, a7 = 0; a7 < eY; a7++) {
			var eo, g6 = fB[a7];
			eR(player, g6) && (eo = bI.hn(kF, bI.i8(g6)), -1 === kQ || eo < kQ) && (kQ = eo, kR = g6)
		}
		return kR
	}

	function kJ(kG, kF) {
		if (kG === a9.eV) return 0;
		for (var gF = ac.gF[kG], kP = gF.length, eY = Math.min(kP, 10), kR = 0, kQ = bI.hn(gF[kR] >> 2, kF), a7 = 0; a7 < eY; a7++) {
			var k3 = au.iv(kP),
				eo = bI.hn(gF[k3] >> 2, kF);
			eo < kQ && (kQ = eo, kR = k3)
		}
		return gF[kR] >> 2
	}

	function kM(player, kF, il, kU) {
		var kV;
		(kU === a9.eV || (kV = bI.i8(il), kU = bI.i8(kU), bI.hn(kF, kV) < bI.hn(kF, kU))) && (kC[player] = il)
	}
	this.dU = function() {
		kC.fill(a9.eV)
	}, this.iS = function(player) {
		var kF, kI, kG, il = function(player) {
			var il = kC[player];
			if (il !== a9.eV) {
				if (b6.fu.kT(il)) return il;
				kC[player] = a9.eV
			}
			return a9.eV
		}(player);
		return function(player) {
			for (var jg = ah.jh, kP = ah.jf, eY = Math.min(kP, kP < 17 && 5 === au.iv(20) ? 1 : 16), g7 = au.iv(kP), fB = bK.fB, gF = ac.gF, g1 = 0, a7 = 0; a7 < eY; a7++) {
				var g6 = jg[(a7 + g7) % kP];
				g6 !== player && gF[g6].length && (fB[g1++] = g6)
			}
			bK.f4[0] = g1
		}(player), 0 !== bK.f4[0] && (0 < (kI = kJ(kG = kH(player, kF = bI.iD(player)), kF)) && bJ.kK.kL(player, kI) ? (kM(player, kF, kG, il), !0) : 0 < (kG = function(player, kF) {
			for (var eY = bK.f4[0], fB = bK.fB, kS = kC, g7 = 0, a7 = 0; a7 < eY; a7++) {
				var g6 = fB[a7],
					g6 = kS[g6];
				g6 !== a9.eV && b6.fu.kT(g6) && player !== g6 && eR(player, g6) && (fB[g7++] = g6)
			}
			return 0 !== (bK.f4[0] = g7) ? kJ(kH(player, kF), kF) : 0
		}(player, kF)) && bJ.kK.kL(player, kG) ? (kM(player, kF, aY.eQ(kG << 2), il), !0) : !!(0 < (kI = kJ(il, kF)) && bJ.kK.kL(player, kI)))
	}
}

function iR() {
	function kZ(player) {
		for (var ey = ac.ey[player], eY = ey.length, ez = Math.max(bH.dl(eY, 12), 1), ea = aY.ea, dz = au.iv(eY), a7 = 0; a7 < eY; a7 += ez)
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

	function ke(player, kg) {
		var im = b6.fu.kh(player, aA.jw[aA.im[player]]);
		ac.g0[player].push(kg.eC), aZ.ii(player, im, kg.g6), aB.ij(player, !0)
	}
	this.iS = function(player) {
		return !!bO.eD(bO.eE) && !!a9.data.passableMountains && 0 !== ac.ey[player].length && function(player) {
			var kY = kZ(player);
			if (null === kY) return !1;
			! function(player) {
				for (var jh = ah.jh, jf = ah.jf, eY = Math.min(jf, 12), g7 = au.iv(jf), fB = bK.fB, ey = ac.ey, g1 = 0, a7 = 0; a7 < eY; a7++) {
					var g6 = jh[(a7 + g7) % jf];
					g6 !== player && ey[g6].length && eR(player, g6) && (fB[g1++] = g6)
				}
				bK.f4[0] = g1
			}(player);
			var kb = function(eF) {
				for (var eY = bK.f4[0], fB = bK.fB, a7 = 0; a7 < eY; a7++) {
					var kg = kZ(fB[a7]);
					if (null !== kg && kg.id === eF) return kg
				}
				return null
			}(kY.id);
			return null !== kb ? (ke(player, kb), !0) : function(player, eF) {
				var eY = aj.iF.kf;
				if (0 !== eY)
					for (var eC = aj.iF.dp[au.iv(eY)] << 2, ea = aY.ea, eb = au.iv(4);;) {
						if (eC += ea[eb], aY.ed(eC)) {
							if (aY.eG(eC) === eF) return ke(player, {
								eC: eC,
								g6: a9.eV
							}), !0;
							break
						}
						if (!aY.eP(eC)) break
					}
				return !1
			}(player, kY.id)
		}(player)
	}
}

function iI() {
	this.iS = function(player) {
		var eK = function(player) {
			var eY = aj.iF.kf;
			if (0 === eY) return -1;
			for (var kP = Math.min(eY, aj.performance.kj ? eY : 10), dp = aj.iF.dp, iu = bH.dl(au.random() * eY, au.value(100)), e = iu + kP, kk = au.iE(ac.i9[player], ac.iA[player]), kl = au.iE(ac.iB[player], ac.iC[player]), kR = -1, eo = bI
					.ho(0, 0, bO.ej, bO.ek), a7 = iu; a7 < e; a7++) {
				var g7 = a7 % eY,
					km = bI.eq(kk, kl, dp[g7]);
				km < eo && (eo = km, kR = g7)
			}
			return -1 !== kR ? dp[kR] : -1
		}(player);
		return -1 !== eK && bJ.kK.kL(player, eK)
	}
}

function iL() {
	this.kj = 0, this.dU = function() {
		this.kj = 0
	}, this.iS = function() {
		if (!this.kj && bb.jb() % 30 == 7 && b6.fu.kp(80) && (aj.performance.kj = 1)) {
			if (a9.ie) {
				var ks = bd.kt();
				if (bc.k4[ks]) {
					bd.ku(ks);
					var g = bK.fC,
						eY = bK.f4[0];
					if (0 !== eY)
						for (var kv = Math.min(100 + 10 * (eY - 1), 400), a7 = 0; a7 < eY; a7++) aA.kB(g[a7], kv)
				}
			}
			aA.kB(kw[0], 100)
		}
	}
}

function iG() {
	var kx, ky, kz = 300,
		l0 = 300,
		l1 = (this.kf = 0, this.dp = new Uint32Array(512), !1);
	this.dU = function() {
		l1 = !1, ky = kx = 0, this.kf = 0
	}, this.iS = function() {
		if (function() {
				var eY = aj.iF.kf;
				if (0 === eY) return 1;
				var dp = aj.iF.dp;
				if (bb.jb() % 35 == 6) {
					for (var a7 = eY - 1; 0 <= a7; a7--) aY.eP(dp[a7] << 2) || (eY--, dp[a7] = dp[eY]);
					aj.iF.kf = eY
				}
				return eY < dp.length
			}() && !(kz <= kx)) {
			var a7, a1 = bO.ej,
				l5 = a1 - 2,
				eY = l5 * (bO.ek - 2),
				l6 = kz,
				dp = aj.iF.dp,
				kP = aj.iF.kf,
				l7 = dp.length,
				g7 = Math.min(ky + l6 * ((1 + 19 * aj.performance.kj) * l0), eY);
			for (a7 = ky; a7 < g7; a7 += l6) {
				var eC = 4 * (a7 % l5 + (bH.dl(a7, l5) + 1) * a1 + 1);
				if (aY.eP(eC) && (dp[kP] = eC >> 2, ++kP === l7)) {
					a7 += l6;
					break
				}
			}(ky = a7) >= eY && (ky = ++kx), aj.iF.kf = kP
		}
	}, this.l4 = function() {
		l1 || (this.dU(), l1 = !0)
	}
}

function l8() {
	aJ.iS(), ab.iS(), aS.l9(), aw.s.iS()
}

function lA() {
	ax.iS(), aC.iS(), aa.iS(), b0.iS(), aB.iS(), aj.iS(), bJ.s.iS(), ah.lB(), aR.iS(), av.iS(), bR.iS(), ab.iS(), ab.lC(), aS.iS(), bL.iS(), aQ.iS(), aL.iS(), aJ.iS(), b1.iS(), aN.iS(), aq.iS(), bZ.iS(), bd.iS(), aw.s.iS(), aw.lD.iS(), n.iS(), b5
	.iS(), bb.iS()
}

function lE() {
	aD.iS(), aT.iS(), aM.iS(), ap.iS(), b8.iS(), ar.lF()
}

function lG() {
	aR.lH(!1), aL.lH(), aS.lH(!1), aQ.lH(), aN.lH(), aq.lH(), ab.lH(!1), bd.lI()
}

function lJ() {
	ab.lH(!1) && (bb.dc = !0), aw.s.iS()
}

function c0() {
	var lK, lL, lM;

	function lO(lQ) {
		for (var a7 = lK - 1; 0 <= a7; a7--) 0 === lM[lL[a7]] && ac.gM[lL[a7]] >= lQ && fb(lL[a7])
	}

	function lN(player) {
		var dk;
		64 === lM[player] ? lM[player] = 6 : (dk = ac.gM[player], lM[player] = dk < 1e3 ? 3 : dk < 1e4 ? 2 : dk < 6e4 ? 1 : 0)
	}
	this.dU = function() {
		lK = 0, lL = new Uint16Array(a9.eV), lM = new Uint8Array(a9.eV)
	}, this.iS = function() {
		for (var a7 = lK - 1; 0 <= a7; a7--) 64 === lM[lL[a7]] ? lN(lL[a7]) : 0 == lM[lL[a7]]-- && (lN(lL[a7]), fb(lL[a7]));
		16e4 <= ac.gM[kw[0]] && (lO(16e4), 3e5 <= ac.gM[kw[0]]) && lO(3e5), b6.fu.kT(a9.eI) && (bZ.lR[7] = Math.max(ac.gM[a9.eI], bZ.lR[7]))
	}, this.fw = function(player) {
		for (var er, a7 = lK - 1; 0 <= a7; a7--)
			if (player === lL[a7]) {
				for (lK--, er = a7; er < lK; er++) lL[er] = lL[er + 1];
				return
			}
	}, this.ij = function(player, lS) {
		for (var a7 = lK - 1; 0 <= a7; a7--)
			if (player === lL[a7]) return;
		lL[lK++] = player, lM[player] = lS ? 2 : 64
	}
}

function c1() {
	var size, jS;
	this.dU = function() {
		size = a9.k2, jS = new Uint16Array(a9.eV);
		for (var je = a9.je, a7 = a9.k2 - 1; 0 <= a7; a7--) jS[a7] = je + a7
	}, this.iS = function() {
		for (var a7 = size - 1; 0 <= a7; a7--)
			if (0 === ac.lV[jS[a7]]) {
				er = void 0;
				var er = a7;
				size--, jS[er] = jS[size]
			} else aA.iS(jS[a7])
	}, this.lU = function(g6) {
		jS[size++] = g6
	}
}

function c2() {
	var lX, lY, lZ, la, lb, lc, ld, le, lf, lg, lh, li, lj, lk = !1,
		ll = !1;

	function lm(ln) {
		li = bb.lo, lZ = la = lY = 0, lb = (lj = 33) / ln, lX = 1 / (ln / lj / 4), lc = (at.a1 / 2 + hv) / hw, ld = (at.j7 / 2 + hx) / hw, le = hw
	}

	function lv(a7) {
		var ly; - 1 !== a7 && (a7 = bI.i2(bJ.s.lx[a7]), ly = bI.eg(a7) - 10, a7 = bI.ei(a7) - 10, aD.lr(ly, a7, 19 + ly, 19 + a7))
	}

	function m9(e4) {
		Math.abs(Math.log(lh / le)) < .125 && (lh = e4 * le)
	}

	function m8(ly, lz, mB, mC) {
		lf = (ly + mB + 1) / 2, lg = (lz + mC + 1) / 2;
		mB = at.a1 / (mB - ly + 1), ly = at.j7 / (mC - lz + 1);
		lh = .9 * (mB < ly ? mB : ly)
	}
	this.lp = function() {
		return lk
	}, this.lq = function() {
		lm(1), this.lr(0, 0, bO.ej - 1, bO.ek - 1), a9.gu || a9.gi || this.ls(a9.eI, 3e3, !0, .3)
	}, this.lt = function(player, lu) {
		lv(bJ.h2.lw(player, lu))
	}, this.ls = function(player, ln, m0, zoom) {
		a9.m1 || lk && !m0 && ll || (0 === ac.gM[player] ? lv(bJ.h2.m2(player)) : (aO.m3 = !1, ll = m0, lm(ln), function(player) {
			lf = (ac.i9[player] + ac.iA[player] + 1) / 2, lg = (ac.iB[player] + ac.iC[player] + 1) / 2
		}(player), function(zoom, player) {
			var hg = ac.iA[player] - ac.i9[player] + 1,
				player = ac.iC[player] - ac.iB[player] + 1,
				er = at.a1 / hg,
				es = at.j7 / player,
				er = (lh = er < es ? er : es, 0 !== zoom ? zoom : hg < 20 && player < 20 ? .5 : .9);
			lh *= er, m9(7 / 8)
		}(zoom, player), lk = !0, am.m6()))
	}, this.m7 = function(ln) {
		a9.gi || a9.m1 || (aO.m3 = !1, ll = !1, lm(ln), m8(0, 0, bO.ej - 1, bO.ek - 1), m9(7 / 8), lk = !0, am.m6())
	}, this.lr = function(ly, lz, mB, mC) {
		m8(ly, lz, mB, mC), hw = lh, aO.mD(lf, at.a1 / 2), aO.mE(lg, at.j7 / 2), bW.mF(), bb.dc = !0
	}, this.mG = function() {
		return !(lk && ll || (lk = !1))
	}, this.iS = function() {
		var mJ, mK, eb, mN;
		lk && (lY < .5 ? la < lb && (la += lb * lX, lZ = lY) : 1 - lZ < lY && (la = (la -= lb * lX) < lb * lX ? lb * lX : la), li = li >= bb.lo ? bb.lo - 1 : li, eb = bb.lo - li, lY = 1e3 < eb || 1 < (lY += la * eb / lj) ? 1 : lY, li = bb.lo,
			eb = hw, mJ = hv, mK = hx, eb = (hw = le * Math.pow(lh / le, lY)) / eb, mN = 1 - (le * Math.pow(lh / le, 1 - lY) - le) / (lh - le), aO.mD(lc + mN * (lf - lc), at.a1 / 2), aO.mE(ld + mN * (lg - ld), at.j7 / 2), ab.zoom(eb, (mJ *
				eb - hv) / (1 - eb), (mK * eb - hx) / (1 - eb)), bW.mF(), 1 <= lY && (lk = !1, bX.mO = !0), bb.dc = !0)
	}
}

function bu() {
	var et = b6.color;
	this.mP = et.mQ(0, 0, 0), this.mR = et.mS(0, 0, 0, .7), this.mT = et.mS(0, 0, 0, .5), this.mU = et.mS(0, 0, 0, .85), this.mV = et.mS(0, 0, 0, .75), this.mW = et.mS(0, 0, 0, .6), this.mX = et.mS(0, 0, 0, .35), this.mY = et.mQ(255, 255, 255), this
		.mZ = et.mS(255, 255, 255, .3), this.ma = et.mS(255, 255, 255, .6), this.mb = et.mS(255, 255, 255, .4), this.mc = et.mS(255, 255, 255, .25), this.md = et.mS(255, 255, 255, .85), this.me = et.mS(255, 255, 255, .75), this.mf = et.mS(255, 255,
			255, .15), this.mg = et.mS(255, 255, 255, .11), this.mh = et.mQ(128, 128, 128), this.mi = et.mS(64, 64, 64, .75), this.mj = et.mS(88, 88, 88, .83), this.mk = et.mS(60, 60, 60, .85), this.ml = et.mS(80, 60, 60, .85), this.mm = et.mQ(170,
			170, 170), this.mn = et.mQ(230, 250, 250), this.mo = et.mQ(30, 255, 30), this.mp = et.mQ(0, 200, 0), this.mq = et.mQ(128, 255, 128), this.mr = et.mS(10, 65, 10, .75), this.ms = et.mS(0, 255, 0, .6), this.mt = et.mS(0, 255, 0, .5), this
		.mu = et.mS(0, 200, 0, .5), this.mv = et.mS(0, 100, 0, .75), this.mw = et.mS(0, 60, 0, .8), this.mx = et.mS(0, 255, 0, .3), this.my = et.mS(0, 180, 0, .6), this.mz = et.mS(0, 120, 0, .85), this.n0 = et.mQ(0, 120, 0), this.n1 = et.mS(0, 70, 0,
			.85), this.n2 = et.mQ(190, 230, 190), this.n3 = et.mQ(255, 120, 120), this.n4 = et.mQ(255, 160, 160), this.n5 = et.mQ(255, 70, 70), this.n6 = et.mQ(230, 0, 0), this.n7 = et.mS(220, 0, 0, .6), this.n8 = et.mS(255, 100, 100, .8), this.n9 =
		et.mS(100, 0, 0, .85), this.nA = et.mS(60, 0, 0, .85), this.nB = et.mS(200, 0, 0, .6), this.nC = et.mS(120, 0, 0, .85), this.nD = et.mQ(255, 70, 10), this.nE = et.mQ(230, 190, 190), this.nF = et.mQ(255, 0, 255), this.nG = et.mS(0, 60, 60,
			.85), this.nH = et.mS(10, 60, 60, .9), this.nI = et.mS(0, 96, 96, .75), this.nJ = et.mQ(0, 255, 255), this.nK = et.mQ(160, 160, 255), this.nL = et.mS(0, 40, 90, .75), this.nM = et.mS(0, 0, 255, .6), this.nN = et.mQ(200, 200, 255), this
		.nO = et.mQ(255, 120, 100), this.nP = et.mS(255, 255, 0, .5), this.nQ = et.mS(255, 255, 150, .2), this.nR = et.mQ(255, 255, 0), this.nS = et.mQ(255, 255, 200), this.nT = et.mS(200, 200, 0, .6), this.nU = et.mS(140, 120, 0, .75), this.nV = et
		.mS(180, 160, 40, .75), this.nW = et.mS(70, 50, 20, .85), this.nX = et.mS(30, 30, 0, .85), this.nY = et.mQ(255, 255, 50), this.nZ = et.mS(60, 60, 0, .85), this.na = et.mS(255, 140, 0, .75), this.nb = et.mS(0, 0, 0, 0), this.nc = et.mS(255,
			255, 255, 0), this.nd = et.mS(254, 254, 254, 0)
}

function cr() {
	this.gv = new ne, this.fu = new nf, this.ng = new nh, this.ni = new nj, this.jj = new nk
}

function ne() {
	this.gw = function(eK) {
		a9.k0 ? b4.ng.gw(a9.eI, eK) : aw.nl.nm(eK)
	}, this.h6 = function(hu, il) {
		a9.k0 ? b4.ng.h6(a9.eI, hu, il) : aw.nl.nn(hu, il)
	}, this.no = function(hu, np) {
		a9.k0 ? b4.ng.nq(a9.eI, hu, np) : aw.nl.nr(hu, np)
	}, this.h4 = function(hu, eK) {
		a9.k0 ? b4.ng.h4(a9.eI, hu, eK) : bJ.h2.h3(a9.eI, eK) && aw.nl.ns(hu, eK)
	}, this.nt = function(lu, eK) {
		a9.k0 ? b4.ng.nt(a9.eI, lu, eK) : bJ.h2.nu(a9.eI, lu, eK) && aw.nl.nv(lu, eK)
	}, this.nw = function(il) {
		a9.k0 ? b4.ng.nw(a9.eI, il) : aw.nl.nx(il)
	}, this.ny = function(nz) {
		a9.k0 ? b4.ng.o0(a9.eI, nz) : aw.nl.o1(nz)
	}, this.o2 = function(o3) {
		a9.k0 ? b4.ng.o2(a9.eI, o3) : aw.nl.o4(o3)
	}, this.o5 = function() {
		a9.k0 ? b4.ng.o5(a9.eI) : aw.nl.o6()
	}, this.o7 = function() {
		a9.k0 ? b4.ng.o7(a9.eI) : aw.nl.ns(1, 0)
	}, this.gz = function(hu, eK, il) {
		a9.k0 ? b4.ng.gz(a9.eI, hu, eK, il) : aw.nl.o8(hu, eK, il)
	}
}

function nk() {
	this.jk = function(player, np, im) {
		b6.fu.o9(player, im, np) && (aa.no(player, np), np < a9.je) && au.random() < au.value(10) && (aj.iO.ig[np] = 0)
	}, this.oA = function(player, np, im) {
		b6.fu.oB(im, np) ? (b6.fu.fx(np, bK.f6[0]), bZ.oC(player, np), ab.oD(np, bK.f6[0])) : bZ.fy(player, im, 12)
	}
}

function nf() {
	this.oE = function(nz, player) {
		aJ.ny(a9.eI, player, nz), aw.nl.oF(nz, player)
	}, this.oG = function(player) {
		aJ.oH(player, 0), aw.nl.oI(player)
	}, this.oJ = function(oK, player) {
		aJ.oL(oK, player), aw.nl.oM(oK, player)
	}, this.oN = function() {
		a9.k0 || a9.gi || aw.oO.oN()
	}
}

function nj() {
	this.iS = function(a8) {
		var id, fG, mG;
		for (bD.dU(a8), bD.e0 += 2, mG = 8 * bD.size; bD.e0 + 8 <= mG;) id = bD.oP(4), fG = bD.oP(9), 0 === id ? this.oQ(id, fG, bD.oP(22)) : 1 === id ? this.oQ(id, fG, bD.oP(10), bD.oP(10)) : 2 === id ? this.oQ(id, fG, bD.oP(10), bD.oP(9)) :
			3 === id || 4 === id ? this.oQ(id, fG, bD.oP(10), bD.oP(22)) : 5 === id || 6 === id ? this.oQ(id, fG, bD.oP(10)) : 7 === id ? this.oQ(id, fG, bD.oP(1)) : 10 === id ? this.oQ(id, fG, bD.oP(20), bD.oP(22)) : this.oQ(id, fG)
	}, this.oR = [], this.oS = function() {
		for (var oU = 0, oV = 0, oW = 0, oX = 0, oY = 0, oZ = 0, a7 = 0; a7 < 512; a7++) oU += ac.lV[a7], oV += ac.gM[a7], oW += ac.ga[a7], oX += bJ.s.oa[a7];
		oY += bJ.s.ob, oZ += ah.jf, this.oR.push(oW % 1073741824 * 4 + (oU + oV + oX + oY + oZ) % 4)
	}, this.oQ = function(id, fG, fI, fK) {
		0 === id ? b4.ng.gw(fG, fI) : 1 === id ? b4.ng.h6(fG, fI, fK) : 2 === id ? b4.ng.nq(fG, fI, fK) : 3 === id ? b4.ng.h4(fG, fI, fK) : 4 === id ? b4.ng.nt(fG, fI, fK) : 5 === id ? b4.ng.nw(fG, fI) : 6 === id ? b4.ng.o0(fG, fI) : 7 === id ?
			b4.ng.o2(fG, fI) : 8 === id ? b4.ng.o5(fG) : 9 === id ? b4.ng.oc(fG) : 10 === id && b4.ng.gz(fG, fI >> 10, fK, fI % 1024)
	}
}

function nh() {
	this.gw = function(player, eK) {
		b6.fu.gk(0) && b6.fu.gl(player) && bI.hz(eK) && (b5.od.oe(0, player, eK), a9.og.ii(player, eK))
	}, this.h6 = function(player, hu, il) {
		b6.fu.gk(1) && b6.fu.gl(player) && b6.fu.oh(player, il) && b6.fu.oi(player, hu, 12, 0) && b6.fu.oj(player, il) && ((il = aZ.iz(player, bK.eU[0])) || aZ.jI(player)) && (ac.ok[player]++, b5.od.oe(1, player, hu, bK.eU[0]), aj.iM.iW(player,
			il)) && (b6.fu.ol(player), bZ.om(player, hu), aj.iM.ic(player))
	}, this.nq = function(player, hu, np) {
		b6.fu.gk(1) && b6.fu.gl(player) && a9.ie && b6.fu.oh(player, np) && b6.fu.on(player, np) && b6.fu.o9(player, b6.fu.ht(player, hu), np) && (b5.od.oe(2, player, hu, np), aa.no(player, np))
	}, this.h4 = function(player, hu, eK) {
		b6.fu.gk(1) && b6.fu.gl(player) && (0 === eK && 1 === hu ? this.o7(player) : bI.hz(eK) && bJ.s.ob !== bJ.s.jv && bJ.s.oa[player] !== bJ.s.oo && 0 !== ac.gF[player].length && b6.fu.oi(player, hu, 32, 0) && bJ.kK.kL(player, eK) && (bZ.op(
			player), b5.od.oe(3, player, hu, eK), b6.fu.ol(player), bi.oq.h4(player), bJ.s.or(player)))
	}, this.nt = function(player, lu, eK) {
		b6.fu.gk(1) && b6.fu.gl(player) && bI.hz(eK) && bJ.h2.os(player, lu) && bJ.kK.ot(eK) && (b5.od.oe(4, player, lu, eK), b6.fu.ou(player, 8), bZ.fy(player, bK.f6[1], 12), bi.oq.nt(player), bJ.s.nt())
	}, this.nw = function(player, il) {
		b6.fu.gk(1) && b6.fu.gl(player) && (il = Math.min(il, a9.eV), aZ.iz(player, il)) && (b5.od.oe(5, player, il), aZ.ov(player, il))
	}, this.o0 = function(player, nz) {
		(b6.fu.gk(1) || b6.fu.gk(2)) && b6.fu.gl(player) && (nz = bH.ow(nz, 0, 1023), b5.od.oe(6, player, nz), ab.ox(player, 0, nz))
	}, this.o2 = function(player, o3) {
		b6.fu.gk(1) && b6.fu.gl(player) && (b5.od.oe(7, player, o3), aq.oy(player, o3))
	}, this.o5 = function(player) {
		(b6.fu.gk(0) || b6.fu.gk(1)) && b6.fu.gl(player) && aI.oz(player) && (b5.od.oe(8, player), bM.o5(player))
	}, this.oc = function(player) {
		b5.od.oe(9, player), bM.oc(player)
	}, this.o7 = function(player) {
		aq.p0(player) && (b5.od.oe(3, player, 1, 0), aq.o7(player))
	}, this.gz = function(player, hu, eK, il) {
		b6.fu.gk(1) && b6.fu.gl(player) && b6.fu.oh(player, il) && b6.fu.oj(player, il) && bI.hz(eK) && ai.e9.eS(player, eK) && (aZ.iz(player, bK.eU[0]) || aZ.jI(player)) && (b5.od.oe(10, player, (hu << 10) + bK.eU[0], eK), il = b6.fu.kh(player,
			hu), ac.g0[player].push(bK.eZ[0]), aZ.ii(player, il, bK.eU[0]), aB.ij(player, !0), bZ.p1(player))
	}
}

function p2() {
	var p4;
	this.p3 = [], this.p4 = document.createElement("div"), this.p5 = function(p6, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = p6, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.4em", title.style.overflowWrap = "break-word", this.p4.appendChild(
			title), title
	}, this.p7 = function(p6, marginBottom) {
		var p8 = document.createElement("p");
		return p8.textContent = p6, p8.style.fontSize = "0.75em", p8.style.lineHeight = "1.2em", p8.style.marginBottom = marginBottom || "0", this.p4.appendChild(p8), p8
	}, this.p9 = function(p6) {
		var pA = document.createElement("p");
		return pA.textContent = p6, pA.style.fontSize = "1em", pA.style.marginBottom = "0", pA.style.whiteSpace = "pre-wrap", pA.style.overflowWrap = "break-word", this.p4.appendChild(pA), pA
	}, this.pB = function(pC, fontSize) {
		var p4 = document.createElement("div");
		return p4.innerHTML = pC, p4.style.fontSize = fontSize || "1em", p4.style.lineHeight = "1.2em", this.p4.appendChild(p4), p4
	}, this.pD = function(pE) {
		for (var pF = pE.pF, eY = pF.length, a7 = 0; a7 < eY; a7++) this.p4.appendChild(pF[a7])
	}, this.pG = function(pH) {
		return this.p3.push(pH), this.p4.appendChild(pH.e), pH
	}, this.resize = function() {
		for (var eY = this.p3.length, a7 = 0; a7 < eY; a7++) this.p3[a7].resize && this.p3[a7].resize()
	}, (p4 = this.p4).style.position = "absolute", p4.style.height = "auto", p4.style.padding = "0.5em"
}

function pI(pJ, pK) {
	var p4 = document.createElement("div");

	function pT() {
		var a7, pU, j7, g7, eb, pO = at.pV * p4.offsetWidth,
			pW = new Float64Array(function(pO) {
				var a1 = .25 * b6.pP.pQ(.6) * at.pR;
				return Math.max(Math.floor(pO / a1), 1)
			}(pO)),
			pX = bY.pX,
			pY = (pO - (pW.length + 1) * bY.gap) / (pW.length * at.pV);
		for (pW.fill(pX), a7 = 0; a7 < pK.length; a7++) pU = (eb = pK[a7].p4).style, j7 = b6.pZ.min(pW), g7 = pW.indexOf(j7), pU.top = b6.pP.pa(j7), pU.left = b6.pP.pa(pX + g7 * (pY + pX)), pU.width = b6.pP.pa(pY), b6.pP.pb(eb, 5), pW[g7] += eb
			.offsetHeight + 3 * pX;
		p4.style.height = b6.pP.pa(b6.pZ.max(pW) - 2 * pX)
	}
	this.pL = p4, this.pM = pK, this.resize = function() {
		var a7;
		for (a7 = 0; a7 < pK.length; a7++) pK[a7].resize();
		pT(), pT()
	}, p4.style.width = "100%", p4.style.maxWidth = "100%", pJ.style.lineHeight = "1.5em", pJ.style.overflowX = "hidden", pJ.style.overflowY = "auto";
	for (var a7 = 0; a7 < pK.length; a7++) p4.appendChild(pK[a7].p4);
	pJ.appendChild(p4)
}

function q(pc, pd, pe, pf, pg) {
	var self, ph = document.createElement("button");

	function po() {
		var pu;
		bF.pt() || (pu = b6.color.pv(pe), !1 !== pf && 0 < pu[0] && pu[0] < 255 && pu[0] === pu[1] && pu[0] === pu[2]) || (ph.style.backgroundColor = b6.color.pw(pe, pu[3] && pu[3] < 120 ? 150 : 50))
	}

	function pn() {
		if (pf) {
			var pu = b6.color.pv(pe);
			if (pu[0] === pu[1] && pu[0] === pu[2]) return
		}
		pd && ((pu = pd(this)) ? 2 === pu && po() : py(this))
	}

	function pq() {
		this.style.backgroundColor = pe
	}

	function pp() {
		py(this)
	}

	function py(eb) {
		eb.style.backgroundColor = pe, eb.blur()
	}
	this.button = ph, this.pi = pd, this.pj = pe, this.pm = function(pr) {
		pr = 1.1 - Math.min(.01 * pc.length, .6) + .2 * pr;
		ph.style.fontSize = pr.toFixed(1) + "em"
	}, this.pl = function(et) {
		et ? 1 === et ? et = b7.mk : 2 === et && (pf = 1, et = b7.mk) : (pf = 0, et = b7.mU), this.pj = pe = et, ph.style.backgroundColor = et
	}, self = this, ph.innerHTML = pc, ph.style.color = pg ? b7.nR : b7.mY, ph.style.userSelect = "none", ph.style.outline = "none", ph.style.overflowWrap = "break-word", self.pl(pe), ph.style.border = "none", ph.style.font = "inherit", self.pm(
		0), ph.style.padding = "0em 0.3em", ph.onclick = pn, ph.addEventListener("mouseover", po), ph.addEventListener("mouseout", pp), ph.addEventListener("focus", po), ph.addEventListener("blur", pq)
}

function pz(q0, pJ) {
	var p4;
	this.resize = function() {
		for (var a7 = 0; a7 < q0.length; a7++) b6.pP.pb(q0[a7].button);
		p4.style.gap = p4.style.padding = b6.pP.pa(bY.pX)
	}, (p4 = document.createElement("div")).style.display = "grid", p4.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", p4.style.overflowY = "auto", p4.style.gridAutoRows = "5.3em", p4.style.maxHeight = "100%";
	for (var a7 = 0; a7 < q0.length; a7++) q0[a7].pm(1), p4.appendChild(q0[a7].button);
	pJ.appendChild(p4)
}

function q2(q3, q4, q5) {
	this.ef = 0, this.eh = 0, this.a1 = 0, this.j7 = 0, this.resize = function() {
		this.j7 = Math.min(b6.pP.pQ(q5 || .5) * q3[1] * at.pR, at.j7 - 2 * bY.gap), this.a1 = Math.min(this.j7 * (q3[0] / q3[1]), at.a1 - 2 * bY.gap), this.j7 = q3[1] * this.a1 / q3[0], this.ef = bY.gap + q4[0] * (at.a1 - this.a1 - 2 * bY.gap),
			this.eh = bY.gap + q4[1] * (at.j7 - this.j7 - 2 * bY.gap)
	}, this.q6 = function() {
		return this.ef + .5 * this.a1
	}
}

function q7(q8, q9) {
	var qI, self, qA = document.createElement("div"),
		qB = document.createElement("div"),
		qC = document.createElement("div"),
		qD = null,
		qJ = (this.qE = new qF({
			value: "",
			e0: -1
		}, 0, qG, function(e) {
			qD.qQ.textContent = 127 - e.target.value.length
		}), 0),
		qK = 1,
		qL = 0,
		qM = 1048575,
		qN = [];

	function qG() {
		q8(), qD.qQ.textContent = 127
	}

	function qf(bo) {
		qK ? qA.scrollTop = qA.scrollHeight : bo && (qA.scrollTop = qL)
	}

	function qb(qa, pH) {
		var qg, p4;
		pH && (qg = 0 < pH.id, (p4 = document.createElement("div")).style.margin = "0.6em 0.6em", qg && (p4.style.paddingLeft = "0.7em"), p4.style.font = "inherit", p4.style.marginLeft = p4.style.marginRight = "inherit", p4.style.fontSize = pH
			.fontSize.toFixed(2) + "em", qg && (p4.style.fontStyle = "italic"), 0 < pH.qh.length && pH.qh[0] && p4.appendChild(qi(pH.qh[0], 14 === pH.id)), p4.appendChild(qj(pH.qk[0])), 2 === pH.qh.length && p4.appendChild(qi(pH.qh[1], 1)), 2 ===
			pH.qk.length && p4.appendChild(qj(pH.qk[1])), qa.appendChild(p4))
	}

	function qi(qh, ql) {
		if (qh.qm) {
			for (var a7 = qN.length - 1; 0 <= a7; a7--)
				if (qh.qn === qN[a7].qn) {
					qh = qN[a7], a7 < 40 && qN.push(qh);
					break
				}
		} else qN.push(qh), 50 < qN.length && qN.shift();
		var qQ = document.createElement("span");
		return qQ.textContent = bk.qc.qo(qh, bk.s.qU[0], ql), qQ.style.display = "inline-block", qQ.style.color = bk.qc.qp(qh.qq), qQ.style.cursor = "pointer", qQ.style.margin = "0", qQ.style.font = "inherit", qQ.style.minWidth = qQ.style.minHeight =
			"1em", bk.qc.qr(qh) && (qQ.style.textDecoration = "underline"), bk.qc.qs(qh.qq, qh.qt) && (qQ.style.fontWeight = "bold"), qQ.onclick = function(e) {
				q9(e, qh)
			}, bF.pt() || (qQ.onmouseover = function(e) {
				bk.qu.qv(e, qh)
			}), qQ
	}

	function qj(qk) {
		var qQ = document.createElement("span");
		return qQ.textContent = qk.p6, qQ.style.color = qk.color, qQ.style.margin = "0", qQ.style.font = "inherit", qk.qw && (qQ.style.fontWeight = "bold"), qQ
	}
	this.qR = function(qS) {
			qM = 1048575, qB.textContent = "", qS || this.lI()
		}, this.lI = function() {
			var qT = bk.s.qU[0],
				qV = bk.s.qW[qT],
				qX = qV.qX,
				eY = qX.length,
				iu = 1048575 === qM ? 0 : eY - (qV.qY - qM + 1048575) % 1048575,
				kP = (qM = qV.qY, iu = Math.max(iu, 0), bk.s.qZ.length);
			if (!(eY <= iu && 0 === kP)) {
				for (var qa = document.createDocumentFragment(), a7 = 0; a7 < kP; a7++) qb(qa, bk.qc.qd(bk.s.qZ[a7]));
				for (bk.s.qZ = [], a7 = iu; a7 < eY; a7++) qb(qa, bk.qc.qe(qT, qX[a7]));
				qB.appendChild(qa), qf()
			}
		}, this.show = function(pJ) {
			pJ.appendChild(qA), pJ.appendChild(qC), this.resize(pJ)
		}, this.qx = function(pJ) {
			pJ.removeChild(qA), pJ.removeChild(qC)
		}, this.resize = function(pJ) {
			qJ = pJ ? pJ.offsetHeight : qJ;
			var pJ = b6.pP.qz(.04, .75),
				r0 = Math.max(pJ, qJ - pJ),
				r1 = at.a1 / at.pV,
				r2 = .7 * r1,
				r0 = (qC.style.top = b6.pP.pa(qJ - pJ), qC.style.height = b6.pP.pa(pJ), qA.style.top = b6.pP.pa(qJ - pJ - r0), qA.style.height = b6.pP.pa(r0), b6.pP.pb(qA, 2), this.qE.e.style.width = b6.pP.pa(r2), this.qE.e.style.fontSize = qI.button
					.style.fontSize = b6.pP.pa(.5 * pJ), b6.pP.pb(this.qE.e, 6), qI.button.style.left = b6.pP.pa(r2), qI.button.style.width = b6.pP.pa(r1 - r2), .385 * pJ);
			u.v.r4() && (r0 *= .8 - .12 * (at.a1 > at.j7)), qB.style.marginLeft = qB.style.marginRight = b6.pP.pa(.5 * r0), qB.style.fontSize = b6.pP.pa(r0), qf(1)
		}, (self = this).qE.e.qO = 127, qA.style.position = "absolute", qA.style.top = "0", qA.style.left = "0", qA.style.width = "100%", qA.style.overflowX = "hidden", qA.style.overflowY = "auto", qA.style.font = "inherit", qA.style
		.backgroundColor = b7.mW, qA.addEventListener("scroll", function() {
			qL = qA.scrollTop, qK = qL < qA.scrollHeight - qA.clientHeight - 2 ? 0 : 1
		}), qB.style.font = "inherit", qC.style.position = "absolute", qC.style.left = "0", qC.style.width = "100%", self.qE.e.setAttribute("placeholder", L(13)), self.qE.e.style.position = "absolute", self.qE.e.style.top = "0", self.qE.e.style
		.left = "0", self.qE.e.style.height = "100%", self.qE.e.style.backgroundColor = b7.mT, self.qE.e.style.textAlign = "center", (qI = new q(L(14), qG)).button.top = "0", qI.button.style.position = "absolute", qI.button.style.height = "100%", qI
		.pl(b7.nc), qD = new qP("127", qI.button, 1, 1), qA.appendChild(qB), qC.appendChild(self.qE.e), qC.appendChild(qI.button)
}

function r5(r6, pc, r7) {
	function click() {
		var value = 1 - r6.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + pc, void 0 !== r6.e0 ? bf.r8.r9(r6.e0, value) : r6.value = value, r7 && r7(value)
	}
	var e;
	pc = pc || L(15), this.e = document.createElement("p"), (e = this.e).textContent = (r6.value ? "🟩 " : "⬜ ") + pc, e.style.margin = "0", e.style.marginBottom = "0.5em", e.style.cursor = "pointer", e.addEventListener("click", click)
}

function rA(pJ, pC) {
	var p4 = document.createElement("div");
	this.pL = p4, this.resize = function() {
		p4.style.padding = b6.pP.pa(bY.pX), p4.style.lineHeight = b6.pP.pa(b6.pP.qz(.035))
	}, pJ.style.overflowX = "hidden", pJ.style.overflowY = "auto", p4.innerHTML = pC, pJ.appendChild(p4)
}

function rB(rC) {
	var p4 = document.createElement("div");
	this.e = p4, this.rD = rC, this.resize = function() {
		for (var eY = rC.length, a7 = 1; a7 < eY; a7++) b6.pP.pb(rC[a7], 4)
	};
	var a7, eY = rC.length;
	for (p4.style.width = "100%", p4.style.height = "2.7em", p4.style.marginTop = "0.6em", p4.style.border = "inherit", a7 = 0; a7 < eY; a7++) rC[a7].style.verticalAlign = "top", rC[a7].style.width = (100 / eY).toFixed(2) + "%", rC[a7].style.height =
		"100%", rC[a7].style.fontSize = "0.75em", p4.appendChild(rC[a7])
}

function rE(rF, pe, rG) {
	this.p4 = document.createElement("div"), this.q0 = rF;
	var rH = 0;
	this.resize = function(pJ, rJ) {
		var eY = rF.length;
		if (!rG)
			for (var a7 = 1; a7 < eY; a7++) b6.pP.pb(rF[a7].button, 4);
		for (var rK = 0, a7 = 0; a7 < eY; a7++) rK += rF[a7].button.offsetWidth;
		if (pJ && (rH = pJ.offsetWidth), rJ && rK < rH)
			for (a7 = 0; a7 < eY; a7++) rF[a7].button.style.width = (100 * rF[a7].button.offsetWidth / rK).toFixed(2) + "%";
		else
			for (a7 = 0; a7 < eY; a7++) rF[a7].button.style.width = "auto";
		rJ || this.resize(pJ, 1)
	};
	var rI = this;
	rI.p4.style.height = rI.p4.style.maxHeight = "100%";
	for (var a7 = 0; a7 < rF.length; a7++) rF[a7].pl(pe), rF[a7].button.style.height = "100%", rF[a7].button.style.padding = "0.0em 0.9em", rI.p4.appendChild(rF[a7].button)
}

function rL() {
	var e;
	this.e = document.createElement("hr"), this.resize = function() {
		b6.pP.pb(this.e, 8, b7.mh)
	}, (e = this.e).style.marginBottom = e.style.marginTop = "0.65em", e.style.marginLeft = e.style.marginRight = "-4%", e.style.border = "none"
}

function rM() {
	var rN = document.createElement("div"),
		rO = 0,
		rP = 0;
	this.show = function(ef, eh, p6, rQ) {
		if (rO) {
			if (!rQ) return;
			this.qx()
		}
		rP = rQ, rO = 1, rN.textContent = p6, b6.pP.pb(rN, 5), rN.style.font = b6.pP.rR(0, b6.pP.qz(.015)), rN.style.padding = "0.3em 0.6em", rN.style.left = ef + "px", rN.style.top = eh - b6.pP.qz(.036) + "px", document.body.appendChild(rN), rN
			.style.top = eh - rN.offsetHeight + rP * bY.rS + "px";
		rQ = ef + rN.offsetWidth - at.a1 / at.pV;
		0 < rQ && (rN.style.left = ef - rQ + "px")
	}, this.qx = function(rT) {
		!rO || rT && rP || (rO = 0, document.body.removeChild(rN))
	}, rN.style.position = "absolute", rN.style.backgroundColor = b7.mU, rN.style.color = b7.mY, rN.style.whiteSpace = "pre", rN.style.pointerEvents = "none"
}

function qF(rU, type, rV, rW) {
	var e;
	this.e = document.createElement("input"), (e = this.e).type = type ? "number" : "text", e.id = "input" + n.s.rX++, e.value = rU.value, e.style.width = "100%", e.style.userSelect = "none", e.style.outline = "none", e.style.resize = "none", e.style
		.border = "inherit", e.style.font = "inherit", e.style.color = b7.mY, e.style.backgroundColor = b7.mR, e.style.fontSize = "1em", e.style.padding = "0.1em 0.2em", e.addEventListener("focus", function() {
			at.rY++
		}), e.addEventListener("blur", function() {
			at.rY--, -1 !== rU.e0 && bf.r8.r9(rU.e0, e.value)
		}), e.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== rU.e0 && bf.r8.r9(rU.e0, e.value), rV ? rV() : e.blur())
		}), rW && e.addEventListener("input", function(pH) {
			rW(pH)
		})
}

function rZ(pJ, data) {
	var eY = data.ra.length,
		rb = document.createElement("div"),
		rc = document.createElement("div"),
		rd = document.createElement("div"),
		re = new Array(eY),
		pK = new Array(eY),
		rf = new Array(data.rg.length),
		rh = b6.color.mS(70, 70, 0, .35);

	function pw() {
		this.style.backgroundColor = b6.color.pw(rh, 160)
	}

	function rl() {
		this.style.backgroundColor = rh
	}

	function pT() {
		var er;
		for (pJ.style.font = b6.pP.rR(0, b6.pP.ru(.026, .5, .03)), a7 = 1; a7 < rf.length; a7++) b6.pP.pb(rf[a7], 4);
		if (b6.pP.pb(rb, 2), eY) {
			for (var gy, rv = rb.offsetWidth, rw = rd.offsetWidth, a7 = 0; a7 < rf.length; a7++) gy = .01 * data.rk[a7] * rw, rf[a7].style.width = (100 * gy / rv).toFixed(2) + "%";
			var kP = data.ra[0].length;
			for (a7 = 0; a7 < eY; a7++)
				for (b6.pP.pb(re[a7], 2), er = 1; er < kP; er++) b6.pP.pb(pK[a7][er], 4)
		}
	}
	this.resize = function() {
			pT(), pT()
		}, pJ.style.display = "flex", pJ.style.flexDirection = "column", rc.style.overflowX = "hidden", rc.style.overflowY = "auto",
		function() {
			var eb, a7, ra = data.ra,
				kP = eY ? ra[0].length : 0;
			for (a7 = 0; a7 < eY; a7++) {
				re[a7] = document.createElement("div"), re[a7].style.backgroundColor = function(a7) {
					return a7 % 2 == 1 ? b6.color.mS(130, 130, 130, .35) : b7.mX
				}(a7), re[a7].style.width = "100%", re[a7].style.display = "flex", pK[a7] = new Array(kP);
				for (var er = 0; er < kP; er++) pK[a7][er] = eb = document.createElement("div"), eb.style.display = "flex", eb.style.justifyContent = "center", eb.style.wordBreak = "break-all", eb.style.padding = "0.4em 0em", eb.style.width = data
					.rk[er] + "%", eb.innerHTML = ra[a7][er].f0, 1 === ra[a7][er].dk && (eb.name = "" + a7, eb.style.color = b7.nR, eb.style.backgroundColor = rh, eb.addEventListener("mouseover", pw), eb.addEventListener("mouseout", rl), function(eb,
						qn, rn) {
						2147483647 !== rn && eb.addEventListener("click", function() {
							b9.a3(30), b9.a4(30, qn), bD.dU(b9.a8), this.style.backgroundColor = rh, n.o(8, n.ro, new rp(25, {
								rq: 0,
								qn: bB.rr.rs(bB.rr.rt(5)),
								rn: rn
							}))
						})
					}(eb, ra[a7][er].qn, ra[a7][er].rn)), re[a7].appendChild(eb)
			}
			for (rb.style.display = "flex", rb.style.backgroundColor = b6.color.mS(0, 120, 0, .35), a7 = 0; a7 < rf.length; a7++) rf[a7] = eb = document.createElement("div"), eb.style.display = "flex", eb.style.justifyContent = "center", eb.style
				.wordBreak = "break-all", eb.style.padding = "0.4em 0em", eb.style.width = data.rk[a7] + "%", eb.innerHTML = data.rg[a7], rb.appendChild(eb)
		}();
	for (var a7 = 0; a7 < eY; a7++) rd.appendChild(re[a7]);
	rc.appendChild(rd), pJ.appendChild(rb), pJ.appendChild(rc)
}

function rx() {
	var s1, a7, ry = document.createElement("div"),
		rz = document.createElement("div"),
		s0 = document.createElement("div"),
		rd = document.createElement("div"),
		q0 = [],
		rg = ["Best 1v1 Player", "Top Clan", "Leading Clan Member"],
		s2 = [1, 0, 2];

	function s3(a7) {
		n.o(8, 0, new rp(21, {
			s4: s2[a7],
			s5: 0,
			s6: 10
		}))
	}
	for (this.show = function() {
			this.r9(n.s.s7), document.body.appendChild(ry)
		}, this.qx = function() {
			document.body.removeChild(ry)
		}, this.r9 = function(s7) {
			for (var a7 = 0; a7 < q0.length; a7++) q0[s2[a7]].button.innerHTML = rg[a7] + "<br>" + s7[a7]
		}, this.resize = function() {
			var a7, s8 = bY.gap,
				j7 = b6.pP.s9(.085),
				a1 = Math.min(4 * j7, at.a1 - 2 * s8),
				eY = q0.length;
			for (b6.pP.sA(ry, s8, at.j7 - s8 - j7, a1, j7), b6.pP.pb(ry), b6.pP.pb(rz, 6), a7 = 0; a7 < eY - 1; a7++) b6.pP.pb(q0[a7].button, 6);
			for (a7 = 0; a7 < eY; a7++) q0[a7].button.style.fontSize = b6.pP.sB(.22 * j7);
			if (!s1) {
				if (!aX.sC()) return;
				(s1 = aX.get(14)).style.width = "24%", s1.style.position = "absolute", rz.appendChild(s1)
			}
			s1.style.left = b6.pP.pa(0), s1.style.top = "7%"
		}, ry.style.position = "absolute", rz.style.width = "25%", rz.style.height = "100%", rz.style.backgroundColor = b7.mU, s0.style.position = "absolute", s0.style.width = "75%", s0.style.height = "100%", s0.style.backgroundColor = b7.mU, s0
		.style.top = s0.style.right = b6.pP.pa(0), s0.style.overflowX = "auto", s0.style.overflowY = "hidden", s0.style.whiteSpace = "nowrap", rd.style.height = rd.style.maxHeight = "100%", q0.push(new q("", function() {
			s3(0)
		}, b7.nA)), q0.push(new q("", function() {
			s3(1)
		}, b7.mw)), q0.push(new q("", function() {
			s3(2)
		}, b7.nG)), a7 = 0; a7 < q0.length; a7++) q0[a7].button.style.height = "100%", rd.appendChild(q0[a7].button);
	s0.appendChild(rd), ry.appendChild(rz), ry.appendChild(s0)
}

function sD(sE, sF, sG, sH, q8, q9) {
	var sI = document.createElement("div"),
		sJ = document.createElement("div"),
		sK = document.createElement("div"),
		sL = document.createElement("div"),
		sM = document.createElement("div"),
		sN = document.createElement("div"),
		sO = document.createElement("div"),
		sP = document.createElement("div"),
		sQ = document.createElement("span"),
		sR = document.createElement("div");
	this.sS = new q7(q8, q9), this.sT = new sU(q9), this.sV = [sE, sF, sG, sH], this.sZ = function(sa) {
		sa = (sa / 10).toFixed(1) + "%";
		sP.style.width = sa, sQ.innerHTML = sa
	}, this.sb = function() {
		this.sT.qx(sN), this.sS.show(sN)
	}, this.sc = function() {
		this.sS.qx(sN), this.sT.show(sN)
	}, this.show = function() {
		document.body.appendChild(sI)
	}, this.qx = function() {
		document.body.removeChild(sI)
	}, this.resize = function(sd) {
		var se = 1 - .4 * u.v.r4() * (at.a1 > 1.6 * at.j7),
			sf = b6.pP.qz(.05 * se),
			sg = at.j7 > at.a1,
			sh = b6.pP.qz(.07 * se + .03 * sg),
			si = b6.pP.qz(.04 + .02 * sg),
			sg = b6.pP.qz(.02 * se + .01 * sg),
			sk = b6.pP.qz(.025);
		sI.style.font = b6.pP.rR(0, sk), se < 1 && (sk = b6.pP.rR(0, se * sk), sJ.style.font = sk, sK.style.font = sk, sM.style.font = sk, sR.style.font = sk, sO.style.font = sk, sL.style.font = sk), sJ.style.height = b6.pP.pa(sf), b6.pP.pb(sJ,
				2), sK.style.top = b6.pP.pa(sf), sK.style.height = b6.pP.pa(sh), b6.pP.pb(sK, 2), sL.style.font = b6.pP.rR(0, se * b6.pP.qz(.02)), sL.style.top = b6.pP.pa(sf + sh), sL.style.height = b6.pP.pa(si), b6.pP.pb(sL, 2), sM.style.top =
			b6.pP.pa(sf + sh + si), sM.style.height = b6.pP.pa(sh), b6.pP.pb(sM, 2), sN.style.top = b6.pP.pa(sf + sh + si + sh), sN.style.height = b6.pP.pa(at.j7 / at.pV - sf - 3 * sh - si - sg), sO.style.top = b6.pP.pa(at.j7 / at.pV - sh - sg),
			sO.style.height = b6.pP.pa(sg), b6.pP.pb(sO, 8), sQ.style.font = b6.pP.rR(0, .8 * sg), sR.style.top = b6.pP.pa(at.j7 / at.pV - sh), sR.style.height = b6.pP.pa(sh), b6.pP.pb(sR, 8), sE.resize(sK), sF.resize(sK), sG.resize(sK), sH
			.resize(sK), sd ? this.sS.resize(sN) : this.sT.resize()
	};
	q8 = this;
	sI.style.position = "absolute", sI.style.top = "0", sI.style.left = "0", sI.style.width = "100%", sI.style.height = "100%", sI.style.backgroundColor = b7.mX, bF.pt() || (sI.style.backdropFilter = "blur(4px)", sI.style.webkitBackdropFilter =
		"blur(4px)"), sJ.style.position = "absolute", sJ.style.top = "0", sJ.style.left = "0", sJ.style.width = "100%", sJ.style.display = "flex";
	for (var g = [sK, sL, sM, sR], a7 = 0; a7 < g.length; a7++) g[a7].style.position = "absolute", g[a7].style.left = "0", g[a7].style.width = "100%", g[a7].style.overflowX = "auto", g[a7].style.overflowY = "hidden", g[a7].style.whiteSpace =
	"nowrap";
	sN.style.position = "absolute", sN.style.left = "0", sN.style.width = "100%", sN.style.font = "inherit", sO.style.position = "absolute", sO.style.left = "0", sO.style.width = "100%", sP.style.position = "absolute", sP.style.top = "0", sP.style
		.left = "0", sP.style.height = "100%", sP.style.width = "50%", sP.style.backgroundColor = b7.mu, sQ.innerHTML = "", sQ.style.position = "absolute", sQ.style.top = "50%", sQ.style.left = "50%", sQ.style.transform = "translate(-50%, -50%)", sJ
		.appendChild(function() {
			var sY = document.createElement("h1");
			return sY.textContent = "Lobby", sY.style.margin = "auto", sY.style.fontFamily = "inherit", sY.style.fontSize = "inherit", sY.style.fontWeight = "inherit", sY
		}()), sK.appendChild(sE.p4), sL.appendChild(sF.p4), sM.appendChild(sG.p4), sO.appendChild(sP), sO.appendChild(sQ), sR.appendChild(sH.p4), sI.appendChild(sJ), sI.appendChild(sK), sI.appendChild(sL), sI.appendChild(sM), sI.appendChild(sN), sI
		.appendChild(sO), sI.appendChild(sR), q8.sT.show(sN)
}

function sU(q9) {
	var sI = document.createElement("div"),
		sN = document.createElement("div");
	this.lI = function() {
			sN.textContent = "", bk.qu.qx(1);
			for (var qa = document.createDocumentFragment(), sm = bk.s.qU[0], sn = bk.sn.so[sm], sp = bk.sn.sp[sm], a7 = 0; a7 < sn.length; a7++) ! function(qa, pH, sr, sm) {
				var qQ = document.createElement("span");
				qQ.textContent = (sr ? "🟢 " : "⚪ ") + bk.qc.qo(pH, sm), qQ.style.color = bk.qc.qp(pH.qq), qQ.style.cursor = "pointer", qQ.style.margin = "0.2em 0.2em 0.2em 0.2em", qQ.style.width = qQ.style.maxWidth = 2 === sm ? "10em" : "9em",
					qQ.style.height = qQ.style.maxHeight = "1.4em", qQ.style.whiteSpace = "nowrap", qQ.style.overflow = "hidden", qQ.style.textOverflow = "ellipsis", qQ.style.font = "inherit", qQ.style.display = "inline-block", bk.qc.qr(pH) && (
						qQ.style.textDecoration = "underline"), qQ.onclick = function(e) {
						q9(e, pH)
					}, bF.pt() || (qQ.onmouseover = function(e) {
						bk.qu.qv(e, pH)
					}), qa.appendChild(qQ)
			}(qa, sn[a7], a7 < sp, sm);
			sN.appendChild(qa)
		}, this.show = function(pJ) {
			pJ.appendChild(sI)
		}, this.qx = function(pJ) {
			pJ.removeChild(sI)
		}, this.resize = function() {
			sN.style.fontSize = b6.pP.pa(b6.pP.qz(.02, .3))
		}, sI.style.top = "0", sI.style.left = "0", sI.style.width = sI.style.height = "100%", sI.style.overflowX = "hidden", sI.style.overflowY = "auto", sI.style.font = "inherit", sN.style.font = "inherit", sN.style.margin = "0.4em", sI
		.appendChild(sN)
}

function ss(rF) {
	var sI = document.createElement("div"),
		st = document.createElement("div"),
		rO = (this.ef = 0, this.eh = 0);

	function sv() {
		bk.sw.qx()
	}
	this.q0 = rF, this.show = function(ef, eh, sy) {
		if (rO) return [0, 0];
		rO = 1, this.ef = ef, this.eh = eh,
			function(self, sy) {
				var a1 = b6.pP.qz(.16, .7),
					j7 = rF.length * a1 / 3,
					t0 = at.a1 / at.pV,
					t1 = at.j7 / at.pV,
					mA = Math.min(1, Math.min(t0 / a1, t1 / j7));
				a1 *= mA, j7 *= mA, sy && (self.ef += b6.pP.qz(.03, .5)), self.ef = bH.ow(self.ef, 0, t0 - a1), self.eh = bH.ow(self.eh, 0, t1 - j7), st.style.left = self.ef + "px", st.style.top = self.eh + "px", st.style.width = a1 + "px", st
					.style.height = j7 + "px", st.style.font = b6.pP.rR(0, .34 * j7 / rF.length), b6.pP.pb(st, 5);
				for (var a7 = 1; a7 < rF.length; a7++) b6.pP.pb(rF[a7].button, 8)
			}(this, sy), document.body.appendChild(sI)
	}, this.qx = function() {
		rO && (rO = 0, sI.removeEventListener("click", sv), document.body.removeChild(sI))
	};
	for (var a7 = 0; a7 < rF.length; a7++) new qP("" + (1 + a7), rF[a7].button, 0, 1);
	sI.style.position = "fixed", sI.style.top = "0", sI.style.left = "0", sI.style.width = "100%", sI.style.height = "100%", sI.style.zIndex = "5", st.style.position = "absolute",
		function() {
			for (var sx = (100 / rF.length).toFixed(2) + "%", a7 = 0; a7 < rF.length; a7++) rF[a7].button.style.width = "100%", rF[a7].button.style.height = rF[a7].button.style.maxHeight = sx, rF[a7].button.style.padding = "0.0em 0.9em", st
				.appendChild(rF[a7].button)
		}(), sI.appendChild(st), sI.addEventListener("click", sv)
}

function t2(rU, t3) {
	this.pF = [];
	var t4 = this.pF;

	function click() {
		for (var a7 = 0; a7 < t4.length; a7++) t4[a7].textContent = t4[a7].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var e0 = parseInt(this.name);
		void 0 !== rU.e0 && bf.r8.r9(rU.e0, e0), t3 && t3(e0)
	}
	for (var t5, eY = rU.t6.length, a7 = 0; a7 < eY; a7++)(t5 = document.createElement("p")).textContent = "⚪ " + rU.t6[a7], t5.style.margin = "0", t5.name = "" + a7, t5.style.cursor = "pointer", t5.style.fontSize = "1em", t5.addEventListener(
		"click", click), t4.push(t5);
	t4[rU.value].textContent = t4[rU.value].textContent.replace("⚪", "🟢")
}

function t7(title, t8, t9) {
	var ry = document.createElement("div"),
		tA = document.createElement("div"),
		rd = document.createElement("div"),
		tB = document.createElement("div"),
		tC = document.createElement("div");
	this.tD = rd, this.tE = t8, this.show = function() {
			!1 !== t9 ? document.body.appendChild(ry) : (document.body.appendChild(tA), document.body.appendChild(tB))
		}, this.qx = function() {
			!1 !== t9 ? document.body.removeChild(ry) : (document.body.removeChild(tA), document.body.removeChild(tB))
		}, this.tI = function() {
			var r0 = b6.pP.qz(.1),
				qy = b6.pP.qz(.08 + .04 * (at.tJ < 1));
			return {
				r0: r0,
				qy: qy,
				tK: at.j7 / at.pV - r0 - qy
			}
		}, this.resize = function(rJ) {
			var eY = t8.length,
				tL = this.tI(),
				r0 = tL.r0,
				qy = tL.qy;
			for (tA.style.height = b6.pP.pa(r0), b6.pP.pb(tA, 2), tB.style.top = b6.pP.pa(at.j7 / at.pV - qy), tB.style.height = b6.pP.pa(qy), b6.pP.pb(tB, 8), rd.style.top = b6.pP.pa(r0), rd.style.height = rd.style.maxHeight = b6.pP.pa(tL.tK), tA
				.style.font = b6.pP.rR(0, b6.pP.qz(.02, .3)), tB.style.font = b6.pP.rR(0, b6.pP.qz(.02, .7)), rd.style.font = b6.pP.rR(0, b6.pP.qz(.02, .7)), a7 = 1; a7 < eY; a7++) b6.pP.pb(t8[a7].button, 4);
			for (var rK = 0, a7 = 0; a7 < eY; a7++) rK += t8[a7].button.offsetWidth;
			if (rJ && rK < tB.offsetWidth)
				for (a7 = 0; a7 < eY; a7++) t8[a7].button.style.width = (100 * t8[a7].button.offsetWidth / rK).toFixed(2) + "%";
			else
				for (a7 = 0; a7 < eY; a7++) t8[a7].button.style.width = "auto";
			rJ || this.resize(!0)
		}, this.tM = function() {
			var tL = this.tI(),
				et = at.pV;
			tN.fillStyle = b7.mU, tN.fillRect(0, et * tL.r0, at.a1, et * tL.tK)
		}, ry.style.position = "absolute", ry.style.top = "0", ry.style.left = "0", ry.style.width = "100%", ry.style.height = "100%", tA.style.position = "absolute", tA.style.top = "0", tA.style.left = "0", tA.style.width = "100%", tA.style
		.display = "flex", tA.style.backgroundColor = b7.mU, tB.style.position = "absolute", tB.style.left = "0", tB.style.width = "100%", tB.style.overflowX = "auto", tB.style.overflowY = "hidden", tB.style.whiteSpace = "nowrap", tC.style.height =
		tC.style.maxHeight = "100%", rd.style.position = "absolute", rd.style.width = "100%", rd.style.backgroundColor = b7.mU,
		function() {
			for (var a7 = 0; a7 < t8.length; a7++) t8[a7].button.style.height = "100%", t8[a7].button.style.padding = "0.0em 0.9em"
		}();
	for (var a7 = 0; a7 < t8.length; a7++) tC.appendChild(t8[a7].button);
	tA.appendChild(function() {
		var tH = document.createElement("h1");
		return tH.textContent = title, tH.style.margin = "auto", tH.style.fontSize = 20 < title.length && at.j7 > at.a1 ? "1.8em" : "2.3em", tH
	}()), tB.appendChild(tC), !1 !== t9 && (ry.appendChild(rd), ry.appendChild(tA), ry.appendChild(tB))
}

function qP(tO, tP, tQ, tR) {
	var self;
	this.qQ = document.createElement("span"), (self = this).qQ.textContent = tO, self.qQ.style.color = b7.mY, self.qQ.style.position = "absolute", self.qQ.style.font = "inherit", tR ? self.qQ.style.bottom = "0.06em" : self.qQ.style.top = "0.12em",
		tQ ? self.qQ.style.left = "0.2em" : self.qQ.style.right = "0.2em", self.qQ.style.fontSize = "0.6em", self.qQ.style.pointerEvents = "none", self.qQ.style.whiteSpace = "pre", tP.style.position = "relative", tP.style.overflow = "hidden", tP
		.appendChild(self.qQ)
}

function tS(tT, tU, tV, tW) {
	var tX = document.createElement("textarea"),
		tY = (this.e = tX, !0);

	function td() {
		tX.select(), document.execCommand("copy")
	}
	this.resize = function() {
			tU && b6.pP.pb(tX, 5)
		}, this.tZ = function(qk) {
			tX.value = qk
		}, this.ta = function() {
			return tX.value
		}, this.tb = function() {
			tX.select()
		}, this.clear = function() {
			tX.value = ""
		}, this.tc = function() {
			tY && navigator.clipboard ? (tX.select(), navigator.clipboard.writeText(tX.value).catch(function() {
				tY = !1, td()
			})) : td()
		}, tX.setAttribute("id", "textArea" + n.s.rX++), tX.setAttribute("autocomplete", "off"), tT && tX.setAttribute("placeholder", tT), tX.style.top = "0", tX.style.left = "0", tX.style.width = "100%", tX.style.height = "100%", tX.style
		.userSelect = "none", tX.style.outline = "none", tX.style.resize = "none", tX.style.border = "none", tX.style.color = b7.mY, tX.style.backgroundColor = b7.mR, tW ? (tX.style.fontSize = "1em", tX.rows = 6, tX.style.padding = "0.25em") : (tX
			.style.padding = "0.45em", tX.style.fontSize = "1.2em"), tV && tX.addEventListener("input", function(e) {
			tV(e)
		}), tX.addEventListener("focus", function() {
			at.rY++
		}), tX.addEventListener("blur", function() {
			at.rY--
		})
}

function dB() {
	this.pi = new te, this.dp = new tf, this.r8 = new tg, this.s = new th, this.dU = function() {
		this.dp.dU(), (new ti).dU()
	}
}

function tf() {
	function tj(a7, type, tp, f1) {
		bf.dp.data.push({
			e0: a7,
			type: type || 0,
			value: tp || 0,
			tp: tp || 0,
			f1: f1 || 0
		})
	}

	function tk(a7, type, tp, f1) {
		bf.dp.data.push({
			e0: a7,
			type: type,
			value: tp || "",
			tp: tp || "",
			f1: f1 || 0
		})
	}

	function tl(mG) {
		for (var a7 = bf.dp.data.length; a7 < mG; a7++) bf.dp.data.push(null)
	}
	this.data = [], this.dU = function() {
		tj(0, 1, 0, 5), tj(1, 1, 1), tj(2, 0), tk(3, 2), tj(4, 1), tk(5, 2, "Trebuchet MS", 1), tj(6, 0), tj(7, 0, 0), tj(8, 0), tj(9, 1, 1), tj(10, 1), tj(11, 1, 1), tk(12, 2, navigator.language), tl(100), tk(100, 2), tk(101, 2), tk(102, 2), tk(
				103, 2), tk(104, 2), tk(105, 2), tk(106, 2), tj(107), tj(108), tj(109), tk(110, 2), tj(111), tj(112), tj(113), tk(114, 2), tj(115), tk(116, 2), tj(117, 1), tk(118, 2, "", 2), tj(119, 1, 0, 1), tk(120, 2), tj(121, 1, ~~(262144 *
				Math.random())), tk(122, 2, "Player " + Math.floor(1e3 * Math.random())), tj(123), tk(124), tj(125, 1), tk(126, 2), tj(127, 0, 1), tj(128), tj(129), tj(130), tj(131), tj(132), tk(133, 2), tj(134, 0, 5), tk(135, 2), tk(136, 2), tj(
				137), tj(138), tj(139), tj(140), tj(141), tj(142), tj(143), tj(144), tk(145, 2), tj(146), tj(147), tk(148, 2), tj(149), tj(150, 0, 1), tk(151, 2), tj(152, 0, 5), tj(153, 1), tj(154, 1), tk(155, 2), tk(156, 2), tj(157), tl(180),
			tj(180, 0), tj(181, 0)
	}, this.r9 = function(e0, value) {
		this.data[e0].value = value
	}, this.dq = function(e0, value) {
		this.r9(e0, value), bf.pi.save(e0, String(value)), bf.pi.save(e0, String(this.data[e0].f1), !0)
	}, this.tm = function() {
		for (var a7 = 0; a7 < this.data.length; a7++) this.data[a7] && (bf.pi.save(a7, String(this.data[a7].value)), bf.pi.save(a7, String(this.data[a7].f1), !0))
	}, this.tn = function(e0) {
		return Number(this.data[e0].value)
	}, this.to = function(e0) {
		return String(this.data[e0].value)
	}
}

function te() {
	this.tq = function(e0, f1) {
		return Number(this.tr(e0, f1))
	}, this.tr = function(e0, f1) {
		var f0 = null;
		return 0 === u.id ? u.ts && (f0 = u.ts.getItem((f1 ? "v" : "d") + e0)) : 1 === u.id ? f0 = u.tt.loadString((f1 ? 1e3 : 2e3) + e0) : 2 === u.id && (f0 = u.tu[(f1 ? "v" : "d") + e0]), f0 && 0 !== f0.length ? f0 : null
	}, this.tv = function(eY, tw) {
		var g = [],
			tx = tw ? "e" : "l";
		if (0 === u.id) {
			if (u.ts)
				for (a7 = 0; a7 < eY; a7++) g.push(u.ts.getItem(tx + a7))
		} else if (1 === u.id)
			for (var ty = tw ? 5e3 : 3e3, a7 = 0; a7 < eY; a7++) g.push(u.tt.loadString(ty + a7));
		else if (2 === u.id)
			for (a7 = 0; a7 < eY; a7++) g.push(u.tu[tx + a7]);
		return g
	}, this.save = function(e0, value, f1) {
		var tz = (f1 ? "v" : "d") + e0;
		if (0 === u.id) {
			if (u.ts && bf.dp.data[140].value) try {
				u.ts.setItem(tz, value)
			} catch (e) {
				console.log(e)
			}
		} else 1 === u.id ? u.tt.saveString((f1 ? 1e3 : 2e3) + e0, value) : 2 === u.id && (u.tu[tz] = value, u.u0.postMessage(tz + " " + value))
	}, this.u1 = function(g, tw) {
		var eY = g.length,
			tx = tw ? "e" : "l";
		if (0 === u.id) {
			if (u.ts && bf.dp.data[140].value) try {
				for (a7 = 0; a7 < eY; a7++) u.ts.setItem(tx + a7, g[a7])
			} catch (e) {
				console.log(e)
			}
		} else if (1 === u.id)
			for (var ty = tw ? 5e3 : 3e3, a7 = 0; a7 < eY; a7++) u.tt.saveString(ty + a7, g[a7]);
		else if (2 === u.id)
			for (a7 = 0; a7 < eY; a7++) u.tu[tx + a7] = g[a7], u.u0.postMessage(tx + a7 + " " + g[a7])
	}
}

function ti() {
	this.dU = function() {
		! function() {
			var data = bf.dp.data;
			0 === data[2].f1 && (at.j7 > at.a1 || 0 !== u.id) && (data[2].value = data[2].tp = 1);
			0 === data[100].f1 && (data[100].value = data[100].tp = (0 === u.id ? "Player " : 1 === u.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var a7, f0, data = bf.dp.data,
			eY = data.length;
		for (a7 = 0; a7 < eY; a7++) data[a7] && data[a7].f1 === bf.pi.tq(a7, !0) && (f0 = bf.pi.tr(a7), data[a7].value = null === f0 ? data[a7].tp : 2 === data[a7].type ? f0 : Number(f0));
		bf.dp.data[10].value = bf.dp.data[10].tp
	}
}

function th() {
	function u7(g) {
		if (0 === g.length) bf.r8.r9(116, "");
		else {
			for (var uA = g[0], a7 = 1; a7 < g.length; a7++) uA += ";" + g[a7];
			bf.r8.r9(116, uA)
		}
	}
	this.u4 = function() {
		bf.dp.data[110].value.length && (bf.dp.data[106].value = bf.dp.data[110], bf.r8.r9(110, ""), this.u5())
	}, this.u5 = function() {
		var g = bf.dp.data[116].value.split(";");
		for (g.length % 2 == 1 && g.pop(), g.unshift(bf.dp.data[106].value), g.unshift(bf.dp.data[105].value), a7 = 2; a7 < g.length; a7 += 2)
			if (g[a7] === g[0]) {
				g.splice(a7, 2);
				break
			} for (var u6 = [], a7 = 0; a7 < g.length; a7 += 2) u6.push(g[a7]);
		u7(g), bf.dp.data[117].value = 0, bf.dp.data[117].t6 = u6
	}, this.u8 = function(e0) {
		bf.dp.data[117].t6.splice(e0, 1), bf.dp.data[117].value = Math.min(e0, bf.dp.data[117].t6.length - 1);
		var g = bf.dp.data[116].value.split(";");
		g.splice(2 * e0, 2), u7(g)
	}, this.u9 = function(e0) {
		var g = bf.dp.data[116].value.split(";");
		return {
			qn: g[2 * e0],
			password: g[2 * e0 + 1]
		}
	}, this.uB = function() {
		var f0 = bH.ow(bf.dp.data[121].value, -1, 262143);
		return f0 = -1 === f0 ? ~~(262144 * Math.random()) : f0
	}
}

function tg() {
	this.r9 = function(e0, value) {
		bf.dp.data[e0].value !== value && (bf.dp.dq(e0, value), 0 === e0 ? (n.r(), b3.dU(), n.o(2)) : 1 === e0 ? at.df(1) : 2 === e0 ? at.df(0) : 5 === e0 && (b6.pP.uC(), at.df(0)))
	}, this.uD = function() {
		for (var data = bf.dp.data, a7 = 0; a7 < 100; a7++) data[a7] && bf.dp.dq(a7, data[a7].tp);
		b6.pP.uC(), at.df(1), b3.dU()
	}, this.uE = function() {
		for (var data = bf.dp.data, a7 = 0; a7 < data.length; a7++) data[a7] && bf.dp.r9(a7, data[a7].tp)
	}, this.uF = function() {
		for (var es = bf.dp, a7 = 128; a7 < 135; a7++) es.dq(a7, es.data[a7].tp)
	}, this.uG = function(data) {
		bf.r8.r9(109, data.rn), bf.r8.r9(107, data.uH), bf.r8.r9(108, data.uI), bf.r8.r9(112, data.uJ), bf.r8.r9(111, data.uK), bf.r8.r9(113, data.uL), bf.r8.r9(135, data.uM), bf.r8.r9(136, data.uN), bf.r8.r9(137, data.uO), bf.r8.r9(138, data
			.uP), bf.r8.r9(139, data.uQ), bf.r8.r9(141, data.uR), bf.r8.r9(142, data.uS), bf.r8.r9(143, data.uT), bf.r8.r9(144, data.uU)
	}
}

function by() {
	this.rr = new uV, this.uW = new uX, this.uY = new uZ, this.dU = function() {
		this.rr.dU()
	}
}

function uX() {
	this.ua = function(size) {
		for (var ub = bD, g = [], a7 = 0; a7 < size; a7++) g.push(String.fromCharCode(ub.oP(16)));
		return g.join("")
	}, this.uc = function(p6) {
		return 20 < (p6 = p6.trim()).length ? p6.substring(0, 20) : p6
	}
}

function uV() {
	var ud = new Uint8Array(78);
	this.dU = function() {
		var a7;
		for (ud[50] = 37, a7 = 0; a7 < 10; a7++) ud[a7 + 3] = a7 + 1;
		for (a7 = 0; a7 < 26; a7++) ud[a7 + 20] = a7 + 11, ud[a7 + 52] = a7 + 38
	}, this.ue = function(p6) {
		return p6.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.uf = function(p6, size) {
		if ((p6 = this.ue(p6)).length > size) return p6.substring(0, size);
		for (; p6.length < size;) p6 = "-" + p6;
		return p6
	}, this.ug = function(p6) {
		for (var uh = ud, eY = p6.length, g = new Uint8Array(eY), a7 = 0; a7 < eY; a7++) g[a7] = uh[p6.charCodeAt(a7) - 45];
		return g
	}, this.ui = function(uj) {
		b9.a3(6 * uj.length), this.uk(uj), bD.dU(b9.a8)
	}, this.uk = function(uj) {
		for (var eY = uj.length, a1 = b9, a7 = 0; a7 < eY; a7++) a1.a4(6, uj[a7])
	}, this.ul = function(p6) {
		this.uk(this.ug(p6))
	}, this.um = function(p6, size) {
		this.uk(this.ug(this.uf(p6, size)))
	}, this.un = function(p6, size) {
		for (var g = this.ug(this.uf(p6, size)), f0 = 0, mA = 1, a7 = g.length - 1; 0 <= a7; a7--) f0 += mA * g[a7], mA *= 64;
		return f0
	}
}

function uo() {
	var a1, j7, up;

	function vF(gy, eb, vD, uu, v8) {
		eb = vE(gy, eb + 1 + 2 * uu & 3);
		! function(gy, vG) {
			return 1 < Math.abs(gy % a1 - vG % a1) || 1 < Math.abs(vJ(gy) - vJ(vG))
		}(gy, eb) && 0 === v8[eb << 2] && (v8[eb << 2] = vD)
	}

	function vJ(g6) {
		return Math.floor((g6 + .5) / a1) % j7
	}

	function vE(g6, eb) {
		return g6 + up[eb]
	}
	this.uq = function(p6) {
		var a7, ur, eY, us, ub = bD;
		for (bC.rr.ui(bC.rr.ug(p6)), bO.uv.uw[bO.eE].a1 = bO.ej = a1 = ub.oP(12), bO.uv.uw[bO.eE].j7 = bO.ek = j7 = ub.oP(12), up = [-a1, -1, a1, 1], bO.v5 = document.createElement("canvas"), bO.v5.width = bO.ej, bO.v5.height = bO.ek, bO.v1 = bO
			.v5.getContext("2d", {
				alpha: !1
			}), bO.v2 = bO.v6 = null, bO.v2 = bO.v1.getImageData(0, 0, bO.ej, bO.ek), bO.v6 = bO.v2.data, b6.pZ.v7(bO.v6), eY = ub.oP(12), ur = ub.oP(5), us = uy(a1 * j7 - 1), a7 = 0; a7 < eY; a7++) ! function(kP, g6, ut, uu) {
			var a7, eb, ub = bD,
				v8 = bO.v6,
				v9 = g6,
				vA = g6,
				vB = 0,
				vC = 1 + ut,
				vD = 2 - ut;
			for (v8[g6 << 2] = vC, a7 = 0; a7 < kP; a7++) eb = ub.oP(2), g6 = vE(g6, eb), v8[g6 << 2] === vC ? vB % 2 == 1 && vF(vA, vB + 2 * uu + 3, vD, uu, v8) : v8[g6 << 2] = vC, vF(g6, eb, vD, uu, v8), vF(vA, eb, vD, uu, v8), vA = g6,
				vB = eb;
			vE(g6, 0) === v9 ? (vF(g6, 0, vD, uu, v8), vF(v9, 0, vD, uu, v8)) : vE(g6, 1) === v9 && (vF(g6, 0, vD, uu, v8), vF(v9, 2, vD, uu, v8));
			0 === kP && (vF(v9, 0, vD, uu, v8), vF(v9, 2, vD, uu, v8))
		}(ub.oP(ur), ub.oP(us), 1 === ub.oP(1), 1 === ub.oP(1));
		var ef, eh, k3, vK, vL, vM, v8 = bO.v6,
			vN = !0,
			vO = bO.uv.uw[bO.eE].vO,
			vP = bO.uv.uw[bO.eE].vP;
		for (eh = 0; eh < j7; eh++)
			for (vK = !0, vL = vN, ef = vM = 0; ef < a1; ef++) k3 = 4 * eh * a1 + 4 * ef, vM <= ef && 0 < v8[k3] && (vL = 2 === v8[k3], vK) && (vK = !1, vL !== vN) ? (vN = vL, vM = ef + 1, ef = -1) : (vL ? (v8[k3] = vP[0], v8[1 + k3] = vP[1], v8[
				2 + k3] = vP[2]) : (v8[k3] = vO[0], v8[1 + k3] = vO[1], v8[2 + k3] = vO[2]), v8[3 + k3] = 255);
		bO.v1.putImageData(bO.v2, 0, 0), bO.v3 = !0, bO.v4.dU(), bb.dc = !0
	}
}

function uZ() {
	this.uq = function(vQ) {
		for (var ub = bD, size = ub.oP(vQ), vR = 7 + 9 * ub.oP(1), g = [], a7 = 0; a7 < size; a7++) g.push(String.fromCharCode(ub.oP(vR)));
		return g.join("")
	}
}

function c3() {
	var vS, vT, vU, vV, vW, vX, vY, vZ, va, vb;

	function vd() {
		var vg = a9.vg;
		for (va = vg; va < a9.eV; va++) vc();
		for (va = a9.gu ? a9.je : 0; va < vg; va++) {
			if (!vh()) {
				for (var es = a9.vl = va; es < vg; es++) va = es, vc();
				return
			}
			vk(vX + vS * vW + bH.dl(vW, 2), vY + vT * vW + bH.dl(vW, 2))
		}
	}

	function wD(player) {
		for (var i9 = ac.i9, iB = ac.iB, iA = ac.iA, iC = ac.iC, eh = iB[player]; eh <= iC[player]; eh++)
			for (var ef = i9[player]; ef <= iA[player]; ef++) {
				var eC = aY.wE(ef, eh);
				aY.g8(eC) && (aY.ip(eC) ? aY.g3(eC, player) : aY.wF(eC, player))
			}
	}

	function wC(g, s5, s6) {
		var dk = g[s5];
		g[s5] = g[s6], g[s6] = dk
	}

	function vh() {
		return function() {
			var a7;
			for (a7 = 0; a7 < 8; a7++)
				if (vS = bH.dl(vU * au.random(), au.value(100)), vT = bH.dl(vV * au.random(), au.value(100)), wK()) return 1;
			return
		}() || function() {
			var hg, hj, er, vj, es, vi;
			for (hg = bH.dl(vU * au.random(), au.value(100)), hj = bH.dl(vV * au.random(), au.value(100)), er = 40; 1 <= er; er--)
				for (vj = vV - er; 0 <= vj; vj -= 40)
					for (vT = (vj + hj) % vV, es = 40; 1 <= es; es--)
						for (vi = vU - es; 0 <= vi; vi -= 40)
							if (vS = (vi + hg) % vU, wK()) return 1;
			return
		}()
	}

	function wK() {
		for (var g6, wM, gap = bH.dl(vW - vZ, 2), wN = vY + vT * vW + gap, wO = vX + vS * vW + gap, wL = wN + vZ - 1; wN <= wL; wL--)
			for (wM = wO + vZ - 1; wO <= wM; wM--)
				if (g6 = aY.wE(wM, wL), !aY.eT(g6) || aY.ip(g6)) return;
		return 1
	}

	function vk(vi, vj) {
		vc(), wP(vi - 2, vj - 2)
	}

	function vc() {
		ac.lV[va] = 0, ac.gM[va] = ac.wA[va] = 0, ac.g0[va] = [], ac.gE[va] = [], ac.gF[va] = [], ac.ey[va] = [], ac.i9[va] = ac.iB[va] = ac.iA[va] = ac.iC[va] = 0
	}

	function wP(vi, vj) {
		var g6, a7, wQ, wR;
		for (ac.lV[va] = 1, ac.i9[va] = vi + 10, ac.iB[va] = vj + 10, ac.iC[va] = ac.iA[va] = 0, wQ = vi; wQ < vi + 4; wQ++)
			for (wR = vj; wR < vj + 4; wR++)(vi < wQ && wQ < vi + 3 || vj < wR && wR < vj + 3) && (g6 = aY.wE(wQ, wR), aY.eT(g6)) && (ac.i9[va] = Math.min(wQ, ac.i9[va]), ac.iA[va] = Math.max(wQ, ac.iA[va]), ac.iB[va] = Math.min(wR, ac.iB[va]), ac
				.iC[va] = Math.max(wR, ac.iC[va]), vb[ac.gM[va]] = g6, ac.gM[va]++, aY.wF(g6, va));
		for (ac.wA[va] = ac.gM[va], a7 = ac.gM[va] - 1; 0 <= a7; a7--) aY.wS(vb[a7], va) ? (aY.g3(vb[a7], va), ac.gE[va].push(vb[a7])) : aY.wT(vb[a7]) ? (aY.g3(vb[a7], va), ac.gF[va].push(vb[a7])) : aY.wU(vb[a7]) && (aY.g3(vb[a7], va), ac.ey[va]
			.push(vb[a7]))
	}

	function wJ(vi, vj) {
		for (var g6, wM, wL = vj; vj - 6 < wL; wL--)
			for (wM = vi; vi - 6 < wM; wM--)
				if (g6 = aY.wE(wM, wL), aY.ip(g6)) return;
		return 1
	}
	this.dU = function() {
		if (vb = new Array(12), vZ = 6, vW = 10, vU = bH.dl(bO.ej, vW), vV = bH.dl(bO.ek, vW), vX = bH.dl(bO.ej - vW * vU, 2), vY = bH.dl(bO.ek - vW * vV, 2), a9.gu)
			for (var a7 = 0; a7 < a9.je; a7++) va = a7, vc(), ac.lV[va] = 1;
		(0 === a9.data.spawningType ? vd : 1 === a9.data.spawningType ? (vd(), function() {
			var vm = a9.vn;
			a9.vo || vm++;
			if (!(vm < 3)) {
				for (var data = a9.data, iu = (a9.gu ? a9.je : 0) + data.teamPlayerCount[0], mG = a9.vl, vp = new Uint32Array(vm), vq = new Uint32Array(vm), vr = new Uint16Array(vm), vs = new Uint16Array(vm), eW = bc.eW, i9 = ac.i9, iB =
						ac.iB, iA = ac.iA, iC = ac.iC, fD = bK.fD, fE = bK.fE, a7 = iu; a7 < mG; a7++) fD[a7] = i9[a7] + iA[a7] >> 1, fE[a7] = iB[a7] + iC[a7] >> 1;
				for (a7 = iu; a7 < mG; a7++) {
					var id = eW[a7];
					vp[id] += fD[a7], vq[id] += fE[a7]
				}
				var k4 = bc.k4;
				for (a7 = 1; a7 < vm; a7++) {
					var g1 = Math.max(data.teamPlayerCount[k4[a7]], 1);
					vr[a7] = bH.dl(vp[a7], g1), vs[a7] = bH.dl(vq[a7], g1)
				}
				var vt = bc.vt,
					vu = bc.vu,
					vv = bc.vv,
					fC = bK.fC;
				for (a7 = 0; a7 < 512; a7++) fC[a7] = a7;
				for (var dz = 0; dz < 2 + (4 <= vm); dz++)
					for (a7 = iu; a7 < mG; a7++) {
						for (var gy = a7, vw = fC[gy], vx = 1, eo = bH.vy(fD[vw] - vr[1], fE[vw] - vs[1]), er = 2; er < vm; er++) {
							var vz = bH.vy(fD[vw] - vr[er], fE[vw] - vs[er]);
							vz < eo && (eo = vz, vx = er)
						}
						var w0 = eW[gy];
						if (vx !== w0) {
							if (2 === dz && 4 <= vm) {
								var w1 = Math.max((vx + 1) % vm, 1),
									w2 = bH.vy(fD[vw] - vr[w1], fE[vw] - vs[w1]);
								for (er = 1; er < vm; er++) vz = bH.vy(fD[vw] - vr[er], fE[vw] - vs[er]), eo < vz && vz < w2 && (w2 = vz, w1 = er);
								w1 !== w0 && bH.vy(vr[w0] - vr[w1], vs[w0] - vs[w1]) < bH.vy(vr[w0] - vr[vx], vs[w0] - vs[vx]) && (vx = w1)
							}
							var w3 = k4[vx],
								w4 = vu[w3] + (a9.gu ? 0 : vv[w3]),
								vG = vt[w4],
								w5 = fC[vG],
								w6 = vu[w3 + 1];
							eo = bH.vy(fD[w5] - vr[w0], fE[w5] - vs[w0]);
							for (var et = w4 + 1; et < w6; et++) {
								var w7 = vt[et],
									w8 = fC[w7];
								(vz = bH.vy(fD[w8] - vr[w0], fE[w8] - vs[w0])) < eo && (eo = vz, vG = w7)
							}
							vG < iu || mG <= vG || (w5 = fC[vG], vp[w0] += fD[w5] - fD[vw], vq[w0] += fE[w5] - fE[vw], vp[vx] += fD[vw] - fD[w5], vq[vx] += fE[vw] - fE[w5], g1 = data.teamPlayerCount[k4[w0]], vr[w0] = bH.dl(vp[w0], g1),
								vs[w0] = bH.dl(vq[w0], g1), g1 = data.teamPlayerCount[w3], vr[vx] = bH.dl(vp[vx], g1), vs[vx] = bH.dl(vq[vx], g1), fC[gy] = w5, fC[vG] = vw)
						}
					}! function() {
						for (var fC = bK.fC, i9 = ac.i9, iB = ac.iB, iA = ac.iA, iC = ac.iC, gM = ac.gM, wA = ac.wA, gE = ac.gE, gF = ac.gF, ey = ac.ey, a7 = 0; a7 < 512; a7++) {
							var wB = fC[a7];
							if (wB !== a7) {
								wC(i9, a7, wB), wC(iB, a7, wB), wC(iA, a7, wB), wC(iC, a7, wB), wC(gM, a7, wB), wC(wA, a7, wB), wC(gE, a7, wB), wC(gF, a7, wB), wC(ey, a7, wB), wD(a7), wD(wB), fC[a7] = a7;
								for (var j7 = wB, g7 = fC[j7]; g7 !== a7;) g7 = fC[j7 = g7];
								fC[j7] = wB
							}
						}
					}()
			}
		}) : function() {
			var vg = a9.vg;
			for (va = vg; va < a9.eV; va++) vc();
			for (va = a9.gu ? a9.je : 0; va < vg; va++)
				if (! function() {
						var spawningData = a9.data.spawningData,
							vi = spawningData[2 * va] + 1,
							spawningData = spawningData[2 * va + 1] + 1;
						if (3 < vi && vi < bO.ej - 5 && 3 < spawningData && spawningData < bO.ek - 5 && aY.eT(aY.wE(vi, spawningData)) && wJ(vi + 3, spawningData + 3)) return vk(vi + 1, spawningData + 1), 1;
						return
					}()) {
					if (!vh()) {
						for (var es = a9.vl = va; es < vg; es++) va = es, vc();
						return
					}
					var vi = vX + vS * vW + bH.dl(vW, 2),
						vj = vY + vT * vW + bH.dl(vW, 2);
					vk(vi, vj)
				}
		})(), bZ.lR[7] = ac.gM[a9.eI]
	}, this.wV = function(il, wW, wX) {
		var a7, vi, vj, g6, vS, vT;
		for (va = il, a7 = 0; a7 < 20; a7++)
			for (vi = wW + a7; wW - a7 <= vi; vi--)
				for (vj = wX + a7; wX - a7 <= vj; vj--)
					if ((vi === wW + a7 || vi === wW - a7 || vj === wX + a7 || vj === wX - a7) && 3 < vi && vi < bO.ej - 5 && 3 < vj && vj < bO.ek - 5 && aY.eT(aY.wE(vi, vj)) && wJ(vi + 3, vj + 3)) {
						if (0 < ac.gM[va]) {
							for (vT = vS = g6 = void 0, vS = ac.iA[va]; vS >= ac.i9[va]; vS--)
								for (vT = ac.iC[va]; vT >= ac.iB[va]; vT--) g6 = 4 * (vT * bO.ej + vS), aY.wZ(va, g6) && (aY.wa(g6), ac.gM[va]--);
							vc()
						}
						return wP(vi - 1, vj - 1), !0
					} return !1
	}, this.wb = function(il) {
		va = il, vh() ? vk(vX + vS * vW + bH.dl(vW, 2), vY + vT * vW + bH.dl(vW, 2)) : vc()
	}
}

function wc() {
	an.wd(), tN.setTransform(hw, 0, 0, hw, 0, 0), tN.imageSmoothingEnabled = hw < 3, tN.drawImage(bO.v5, aO.we(), aO.wf()), bL.wg.tM(), tN.drawImage(wh, aO.we(), aO.wf()), an.tM(), bJ.tM(), ab.tM(), (a9.m1 ? (bd.tM(), b8) : (aJ.tM(), aR.tM(), aN
	.tM(), b8.tM(), aq.tM(), aS.tM(), aO.tM(), aM.tM(), bd.tM(), aQ.tM(), aL.tM(), aI.tM(), aH.tM(), aT.tM(), ba.tM(), ap)).tM(), n.tM()
}

function wi(wj, a1, j7) {
	wj.clearRect(0, 0, a1, j7), wj.fillStyle = b7.mV, wj.fillRect(0, 0, a1, j7)
}

function wk(wj, a1, j7, wl) {
	wj.fillStyle = b7.mY, wj.fillRect(0, 0, a1, wl), wj.fillRect(0, 0, wl, j7), wj.fillRect(a1 - wl, 0, wl, j7), wj.fillRect(0, j7 - wl, a1, wl)
}

function wm(wj, ef, eh, hB, wl, g6, wn) {
	wj.fillStyle = b7.mY;
	var g6 = Math.floor(hB * g6),
		rw = (g6 += (g6 - wl) % 2, Math.floor((g6 - wl) / 2)),
		hB = Math.floor((hB - g6) / 2);
	wj.fillRect(ef + hB, eh + hB + rw, g6, wl), wn && wj.fillRect(ef + hB + rw, eh + hB, wl, g6)
}

function wp() {
	this.dU = function() {
		8 === a9.jy && aJ.wq()
	}, this.wr = function(ws) {
		var elo = a9.data.elo,
			hU = (elo[ws] - elo[1 - ws]) / 10,
			hU = 8 / (1 + Math.pow(2, hU / 32)),
			hU = Math.floor(10 * hU + .5),
			wu = this.wv(elo[ws] + (1 + a9.ww) * hU + 1),
			elo = this.wv(elo[1 - ws] - hU);
		0 === ws ? aJ.wy(wu, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : aJ.wy(elo, wu, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"])
	}, this.wv = function(elo) {
		return 16e3 === (elo = bH.ow(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function cY() {
	this.wz = new x0, this.v8 = new x1
}

function x1() {
	this.x2 = !1;
	this.x6 = [], this.x7 = 100;
	var ly, lz, gap, hB, x3, x5, x8 = 0,
		x9 = new Array(9),
		xA = [],
		xB = [],
		xC = 0,
		xD = 0,
		xE = 0,
		xF = 0;

	function xQ() {
		x9.sort(function(er, es) {
			return es.jm - er.jm
		});
		for (var p6 = "" + x9[0].nz, a7 = 1; a7 < 9; a7++) p6 += "," + x9[a7].nz;
		for (a7 = 0; a7 < 9; a7++) p6 += "," + x9[a7].jm;
		bf.dp.dq(120, p6)
	}
	this.dU = function() {
		for (var s2 = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], a7 = 0; a7 < s2.length; a7++) {
			var color = 6 === s2[a7] ? b7.my : b7.mW;
			this.x6.push(b6.canvas.xG(aX.get(3), s2[a7], color))
		}
		for (a7 = 0; a7 < af.wz.xH; a7++) xB.push(af.wz.xI - af.wz.xH + a7);
		for (a7 = 0; a7 < af.wz.xJ; a7++) xB.push(af.wz.xK + a7);
		var xL = af.wz.xM(bG.xL);
		for (a7 = 0; a7 < xL.length; a7++) xB.push(xL[a7]);
		! function() {
			var a7, g = bf.dp.data[120].value.split(",");
			if (18 !== g.length)
				for (a7 = 0; a7 < 9; a7++) x9[a7] = {
					nz: 1015 + a7,
					jm: 0
				};
			else
				for (a7 = 0; a7 < 9; a7++) {
					var f0 = parseInt(g[a7]),
						et = (f0 = 0 <= f0 && f0 < af.wz.xI ? f0 : 0, parseInt(g[a7 + 9]));
					et = 0 <= et && et < 1e3 ? et : 0, x9[a7] = {
						nz: f0,
						jm: et
					}
				}
		}()
	}, this.show = function(kk, kl, xR) {
		var a7;
		if (xC = kk, xD = kl, x8 = xR || 0, this.x2 = !0, xA = [], 0 === x8)
			for (a7 = 0; a7 < 9; a7++) xA.push(x9[a7].nz);
		else {
			var es = 49 * x8,
				xR = es - 49;
			for (xR >= xB.length && (x8 = 1, xR = 0, es = 49), a7 = xR = (es = Math.min(es, xB.length)) - 49; a7 < es; a7++) xA.push(xB[a7])
		}
		xA.push(1024);
		xR = xA.length, hB = Math.floor((u.v.r4() ? .075 : .0468) * at.pR), gap = Math.floor(hB / 3), (xE = 10 * (x3 = hB + gap)) > at.a1 && (xE = at.a1, gap = (x3 = xE / 10) - (hB = 3 * x3 / 4)), x5 = bH.dl(xR, 10) + !!(xR % 10), (xF = x5 *
			x3) > at.j7 && (xF = at.j7, gap = (x3 = xF / x5) - (hB = 3 * x3 / 4)), xR = .5 * gap;
		ly = Math.min(Math.max(kk - .5 * xE + xR, xR), at.a1 - xE + xR), lz = Math.min(Math.max(kl - .5 * xF + xR, xR), at.j7 - xF + xR)
	}, this.gm = function(kk, kl, player) {
		if (!this.x2) return !1;
		if (this.xT(kk, kl)) {
			kk = bH.ow(bH.dl(kk - ly + .5 * gap, x3), 0, 9);
			if ((kk += 10 * bH.ow(bH.dl(kl - lz + .5 * gap, x3), 0, 9)) >= xA.length) return aH.qx(), !0;
			kl = xA[kk];
			if (1024 === kl) return this.show(xC, xD, x8 + 1), !0;
			! function(nz) {
				for (var a7 = 0; a7 < 9; a7++) x9[a7].jm = Math.floor(.99 * x9[a7].jm);
				for (a7 = 0; a7 < 9; a7++)
					if (nz === x9[a7].nz) return x9[a7].jm = Math.min(x9[a7].jm + 30, 999), xQ();
				x9.splice(5, 0, {
					nz: nz,
					jm: Math.max(x9[4].jm, 30)
				}), x9.pop(), xQ()
			}(kl), player === a9.eI ? b4.gv.ny(kl) : b4.fu.oE(kl, player)
		}
		return aH.qx(), !0
	}, this.xT = function(kk, kl) {
		return !(kk < ly - .5 * gap || kl < lz - .5 * gap || ly + xE - .5 * gap <= kk || lz + xF - .5 * gap <= kl)
	}, this.tM = function() {
		tN.fillStyle = b7.mV, tN.fillRect(ly - .5 * gap, lz - .5 * gap, xE, xF);
		for (var k3 = .5 * bY.xU, eY = (tN.lineWidth = bY.xU, tN.strokeStyle = tN.fillStyle = b7.mY, tN.strokeRect(ly - .5 * gap + k3, lz - .5 * gap + k3, xE - 2 * k3, xF - 2 * k3), tN.imageSmoothingEnabled = !0, xA.length), a7 = 0; a7 <
			eY; a7++) this.xV(xA[a7], tN, ly + a7 % 10 * x3, lz + bH.dl(a7, 10) * x3, hB);
		tN.imageSmoothingEnabled = !1
	}, this.xV = function(nz, hH, ef, eh, hB) {
		var eC;
		nz >= 1024 - af.wz.xH ? (eC = hB / this.x7, hH.setTransform(eC, 0, 0, eC, ef, eh), hH.drawImage(this.x6[nz - 1024 + af.wz.xH], 0, 0), hH.setTransform(1, 0, 0, 1, 0, 0)) : (b6.pP.textAlign(hH, 1), b6.pP.textBaseline(hH, 1), hH.font = b6.pP
			.rR(0, .89 * hB), hH.fillText(af.wz.xW(nz), ef + .5 * hB, eh + (.35 - b6.pP.xX + .56) * hB))
	}
}

function x0() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.xH = 13, this.xJ = this.emojis.length, this.xK = 676, this.xI = 1024, this.xY = this.emojis.indexOf("💀"), this.xZ = this.xY + 1, this.xa = this.emojis.indexOf("🥇"), this.xb = this.emojis.indexOf("😊"), this.xW = function(f0) {
		return f0 < this.xK ? String.fromCharCode(55356, 56806 + bH.dl(f0, 26), 55356, 56806 + f0 % 26) : this.emojis[Math.min(f0 - this.xK, this.xJ - 1)]
	}, this.xM = function(p6) {
		for (var eY = p6.length - 2, g = [], a7 = 0; a7 < eY; a7++) {
			var hP = p6.charCodeAt(a7) - 56806,
				hQ = p6.charCodeAt(a7 + 2) - 56806;
			0 <= hP && hP < 26 && 0 <= hQ && hQ < 26 && (g.push(26 * hP + hQ), a7 += 3)
		}
		return g
	}, this.xc = function(f0) {
		return f0 < this.xK
	}, this.xd = function(f0) {
		return f0 >= 1024 - this.xH
	}, this.xe = function(f0) {
		return f0 >= this.xK && f0 < this.xK + this.xZ
	}
}

function bx() {
	this.rr = new xf, this.uW = new xg, this.uY = new xh, this.dU = function() {
		this.rr.dU()
	}
}

function xg() {
	this.ul = function(p6) {
		for (var eY = p6.length, a1 = b9, a7 = 0; a7 < eY; a7++) a1.a4(16, p6.charCodeAt(a7))
	}
}

function xf() {
	var xi = new Uint8Array(64);
	this.dU = function() {
		var a7;
		for (xi[0] = 45, xi[37] = 95, a7 = 0; a7 < 10; a7++) xi[a7 + 1] = 48 + a7;
		for (a7 = 0; a7 < 26; a7++) xi[a7 + 11] = 65 + a7, xi[a7 + 38] = 97 + a7
	}, this.rt = function(xj) {
		for (var ub = bD, uj = new Uint8Array(xj), a7 = 0; a7 < xj; a7++) uj[a7] = ub.oP(6);
		return uj
	}, this.rs = function(uj) {
		for (var eY = uj.length, xk = xi, g = [], a7 = 0; a7 < eY; a7++) g.push(String.fromCharCode(xk[uj[a7]]));
		return g.join("")
	}, this.xl = function(value, xm) {
		for (var xk = xi, g = [], a7 = 0; a7 < xm; a7++) g.push(String.fromCharCode(xk[value >> 6 * (xm - 1 - a7) & 63]));
		return g.join("")
	}
}

function c5() {
	var xn, xo, xp;
	xn = [32, 65, 191, 913, 931], xo = [64, 127, 688, 930, 1155], xp = new Array(xn.length + 1);
	for (var a7 = 0; a7 < xp.length; a7++) {
		xp[a7] = 0;
		for (var er = a7 - 1; 0 <= er; er--) xp[a7] += xo[er] - xn[er]
	}

	function xv(et) {
		for (var a7 = xn.length - 1; 0 <= a7; a7--)
			if (et >= xn[a7] && et < xo[a7]) return a7;
		return -1
	}
	this.uc = function(p6) {
		return 0 !== (p6 = p6.trim()).indexOf("Bot ") && 0 !== p6.indexOf("[Bot] ") && function(p6, xs, xt) {
			var eY = (p6 = p6.trim()).length;
			if (eY < xs || xt < eY) return !1;
			for (var et, xu = 0, a7 = 0; a7 < eY; a7++)
				if (et = p6.charCodeAt(a7), xu += 65 <= et && et <= 90 || 1040 <= et && et <= 1071 ? 1 : 0, -1 === xv(et)) return !1;
			if (3 < xu && xu > Math.floor(eY / 2)) return !1;
			return !0
		}(p6, 3, 20)
	}, this.xw = function(p6) {
		for (var eY = (p6 = p6.trim()).length, g = [], a7 = 0; a7 < eY; a7++) {
			var et, g6 = xv(et = p6.charCodeAt(a7));
			g.push(xp[g6] + et - xn[g6])
		}
		return g
	}, this.uq = function(g) {
		for (var et, es, p6 = "", eY = g.length, a7 = 0; a7 < eY; a7++)
			for (es = 1; es < xp.length; es++)
				if (g[a7] < xp[es]) {
					et = xn[es - 1] + g[a7] - xp[es - 1], p6 += String.fromCharCode(et);
					break
				} return p6
	}, this.xx = function(p6) {
		for (var g = this.xw(p6), result = "", a7 = 0; a7 < g.length; a7++) result = (result += g[a7] < 10 ? "00" : g[a7] < 100 ? "0" : "") + g[a7].toString(10);
		return result
	}, this.xy = function(p6) {
		for (var g = new Array(Math.floor(p6.length / 3)), a7 = 0; a7 < p6.length; a7 += 3) g[Math.floor(a7 / 3)] = parseInt(p6.substring(a7, a7 + 3));
		return this.uq(g)
	}, this.xz = function(p6) {
		for (var f0, g = [p6.length], a7 = 0; a7 < p6.length; a7++) g[a7] = p6.charCodeAt(a7) - 48;
		var result = "";
		for (a7 = 0; a7 < p6.length; a7++) a7 === p6.length - 1 || 51 < 10 * g[a7] + g[a7 + 1] ? result += g[a7].toString() : (f0 = 10 * g[a7] + g[a7 + 1], result += String.fromCharCode(f0 + (f0 < 26 ? 65 : 71)), a7++);
		return result
	}, this.y0 = function(p6) {
		for (var et, result = "", a7 = 0; a7 < p6.length; a7++) 48 <= (et = p6.charCodeAt(a7)) && et < 58 ? result += String.fromCharCode(et) : 65 <= et && et < 75 ? result += "0" + (et - 65).toString() : 75 <= et && et < 91 ? result += (et - 65)
			.toString() : 97 <= et && et < 123 && (result += (et - 71).toString());
		return result
	}, this.y1 = function(p6) {
		for (var eY = p6.length, g = [], a7 = 0; a7 < eY; a7++)(et = p6.charCodeAt(a7)) < 58 ? g.push(p6[a7]) : (et -= et < 91 ? 65 : 71, g.push(String(bH.dl(et, 10))), g.push(String(et - 10 * bH.dl(et, 10))));
		var eY = g.length - 2,
			et = 0,
			uj = [];
		for (a7 = 0; a7 < eY; a7 += 3) uj[et++] = parseInt(g[a7] + g[a7 + 1] + g[a7 + 2]);
		return uj
	}, this.y2 = function() {
		for (var dz, y3 = "", a7 = 0; a7 < 6; a7++) dz = 48 + au.random() % 36, dz += 58 <= dz ? 39 : 0, y3 += String.fromCharCode(dz);
		return y3
	}
}

function xh() {
	this.xw = function(p6, vQ, y4) {
		for (var y5 = [], eY = p6.length, max = 0, a7 = 0; a7 < eY; a7++) {
			var f0 = p6.charCodeAt(a7);
			y5.push(f0), max = Math.max(max, f0)
		}
		var vR = max < 128 ? 7 : 16;
		for (y4.a4(vQ, eY), y4.a4(1, +(16 == vR)), a7 = 0; a7 < eY; a7++) y4.a4(vR, y5[a7])
	}
}

function d3() {
	this.y6 = new y7, this.result = new y8, this.h2 = new y9, this.yA = new yB, this.yC = new yD, this.yE = new yF, this.dU = function() {
		this.result.dU()
	}
}

function y9() {
	this.yG = function() {
		for (var eY = ah.jf, yH = ah.jh, yI = [], a7 = 0; a7 < eY; a7++) {
			var g6 = yH[a7];
			b6.fu.yJ(g6) && yI.push(g6)
		}
		return yI
	}, this.yK = function() {
		if (0 === bc.k4[a9.yL]) return this.yM();
		bd.ku(a9.yL);
		for (var yI = [], eY = bK.f4[0], fC = bK.fC, a7 = 0; a7 < eY; a7++) {
			var g6 = fC[a7];
			b6.fu.yJ(g6) && yI.push(g6)
		}
		return yI
	}, this.yM = function() {
		var g6 = kw[0];
		return b6.fu.yJ(g6) ? [g6] : []
	}, this.yN = function(yI) {
		for (var eY = yI.length, dk = 0, gM = ac.gM, a7 = 0; a7 < eY; a7++) dk += gM[yI[a7]];
		return dk
	}
}

function y7() {
	function yP() {
		if (2 === a9.yT) return 1;
		aq.yU(), a9.yT = 2, a9.yV = a9.yW
	}

	function yR() {
		bN.yC.yX(), aT.show(1 === a9.yY, !1, 2 === a9.yY), bN.result.yX(), bN.yE.iS(), bN.yA.iS(), aJ.yZ(!0), aJ.ya(247), aJ.ya(956), aJ.ya(957), aR.lH(!0), aS.lH(!0), aq.lH(), b8.yb(), a9.gi && bb.yc.yd(), bb.dc = !0, bX.ye(), u.v.setState(0)
	}
	this.yO = function() {
		yP() || (a9.yQ = 2, yR())
	}, this.yS = function() {
		yP() || (a9.yQ = 1, yR())
	}
}

function yB() {
	this.iS = function() {
		var yn;
		2 === a9.yQ ? (aJ.yf(0, 59), aD.m7(2700)) : a9.jy < 7 ? (yn = bc.k4[a9.yL], yn = bc.yp[yn], aM.yq(L(16, [yn]), 2, 1, 12), aJ.yr(0, L(17, [yn]), 40, 0, b7.mY, b7.mV, -1, !1), aD.m7(2700)) : 8 === a9.jy ? (a9.yY ? aJ.yf(a9.yk, 2) : aJ.yf(
			1 - a9.eI, 3), a9.yl.wr(a9.yk), aJ.ym(a9.yk), aD.ls(a9.yk, 2700, !1, 0)) : 9 === a9.jy ? (aJ.ys(), aD.m7(2700)) : (aJ.ym(a9.yk), aD.ls(a9.yk, 2700, !1, 0))
	}
}

function yF() {
	function yt() {
		var s8 = Math.floor(ac.z0[a9.eI] / 50);
		0 !== s8 && (s8 = Math.min(s8, 200), aJ.yr(0, L(18, [(s8 / 100).toFixed(2)]), 40, 0, b7.mq, b7.mV, -1, !1))
	}
	this.iS = function() {
		if (b6.fu.gl(a9.eI) || yt(), 0 !== bN.result.yu && (function() {
				aJ.yr(0, L(19), 40, 0, b7.mY, b7.mV, -1, !1);
				for (var yI = bN.result.yI, eY = yI.length, gM = ac.gM, g = [], a7 = 0; a7 < eY; a7++) {
					var g6 = yI[a7];
					g.push({
						g6: g6,
						dk: gM[g6]
					})
				}
				g.sort((er, es) => es.dk - er.dk);
				var yp = ac.z1,
					dk = bN.result.z2,
					s8 = bN.result.yu,
					p6 = "";
				for (a7 = 0; a7 < eY; a7++) p6 += yp[g[a7].g6] + ": " + (g[a7].dk * s8 / (100 * dk)).toFixed(2) + "   ";
				aJ.yr(0, b6.z3.z4(p6), 40, 0, b7.mq, b7.mV, -1, !1)
			}(), !(2 === a9.yQ || 7 <= a9.jy))) {
			var yI = bN.result.yI,
				eY = yI.length,
				yp = ac.z1,
				gM = ac.gM,
				z5 = [];
			loop: for (var a7 = 0; a7 < eY; a7++) {
				var g6 = yI[a7],
					z6 = b6.z3.z7(yp[g6]);
				if (null !== z6) {
					for (var z8 = gM[g6], es = z5.length - 1; 0 <= es; es--)
						if (z6 === z5[es].name) {
							z5[es].dk += z8, z5[es].g.push({
								g6: g6,
								dk: z8
							});
							continue loop
						} z5.push({
						name: z6,
						dk: z8,
						g: [{
							g6: g6,
							dk: z8
						}]
					})
				}
			}
			if (0 !== z5.length) {
				z5.sort((er, es) => es.dk - er.dk);
				var g = z5[0].g,
					z9 = (g.sort((er, es) => es.dk - er.dk), "[" + z5[0].name + "]"),
					s8 = bN.result.yu,
					zA = 64 * s8 / 26214400,
					p6 = (aJ.yr(0, L(20, [z9, zA.toFixed(4)]), 40, 0, b7.mY, b7.mV, -1, !1), aJ.yr(0, L(21), 40, 0, b7.mY, b7.mV, -1, !1), ""),
					kP = g.length,
					dk = bN.result.z2,
					uh = z5[0].dk,
					zB = 65536 * zA;
				for (a7 = 0; a7 < kP; a7++) p6 += yp[g[a7].g6] + ": " + (g[a7].dk * s8 / (200 * dk)).toFixed(2) + " | " + (zB * g[a7].dk / uh).toFixed(1) + "   ";
				aJ.yr(0, b6.z3.z4(p6), 40, 0, b7.mq, b7.mV, -1, !1);
				zA = (uh * s8 / (1e3 * dk)).toFixed(2);
				aJ.yr(0, L(22, [zA, z9]), 40, 0, b7.mY, b7.mV, -1, !1)
			}
		}
	}, this.yx = function() {
		var yy, v9;
		a9.k0 || (yy = ac, v9 = a9.eI, 0 === yy.yz[v9]) || yy.ib[v9] < 1 || 2 * yy.ok[v9] > 3 * (yy.ia[v9] + yy.ib[v9]) || yt()
	}
}

function y8() {
	this.dU = function() {
		this.zD = 0, this.yI = null, this.z2 = 0, this.yu = 0
	}, this.yX = function() {
		var rI, qt;
		a9.k0 || (rI = this, 2 === a9.yQ ? rI.yI = bN.h2.yG() : a9.ie ? rI.yI = bN.h2.yK() : rI.yI = bN.h2.yM(), rI.zD = be.zF.zG(), rI.z2 = Math.max(1, bN.h2.yN(rI.yI)), b4.fu.oN(), 8 === a9.jy ? (bN.result.yu = 0, 1 !== a9.yY || 0 === bf.dp
			.data[107].value || 100 <= (qt = bf.dp.data[108].value) || (bN.result.yu = (1 + a9.ww) * (100 - qt) * 10)) : (rI.yu = 100 * bN.result.zD * (1 + a9.ww), 9 === a9.jy && (rI.yu = rI.yu >> 1)))
	}
}

function yD() {
	this.yX = function() {
		if (2 === a9.yQ) a9.yY = 2;
		else {
			if (8 === a9.jy) aY.zJ(0) && 0 !== ac.lV[0] ? aY.zJ(1) && 0 !== ac.lV[1] ? a9.yk = +(ac.gM[1] > ac.gM[0]) : a9.yk = 0 : a9.yk = 1;
			else {
				if (a9.ie) {
					var ks = bd.zK();
					if (a9.yL = ks, bc.k4[ks]) return void(a9.yY = +(bc.eW[a9.eI] === ks))
				}
				a9.yk = kw[0]
			}
			a9.yY = +(a9.yk === a9.eI)
		}
	}
}

function d8() {
	this.id = 0, this.f1 = 0, this.ts = null, this.tt = null, this.tu = null, this.u0 = null, this.v = new zL, this.dU = function() {
		var self, f1;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (f1 = Android.getVersion()) < 12 || (self.f1 = f1, self.id = 1, self.tt = Android),
			function(self) {
				var f1;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.tu = mwIOSdataX, self.u0 = window.webkit.messageHandlers.iosCommandA, f1 = self
					.tu.version, self.f1 = f1 ? Number(f1) : 0)
			}(this),
			function(self) {
				var ts;
				if (0 === self.id) {
					try {
						if (!(ts = window.localStorage)) return;
						ts.setItem("tls7", "1"), ts.removeItem("tls7")
					} catch (error) {
						return
					}
					self.ts = ts
				}
			}(this)
	}
}

function zL() {
	this.zP = function() {
		bf.r8.uD(), bf.r8.uE(), aw.s.close(0, 3255), 0 === u.id ? u.ts && u.ts.clear() : 1 === u.id ? u.tt.saveString(199, "") : 2 === u.id && u.u0.postMessage("clear")
	}, this.zQ = function() {
		2 === u.id ? u.u0.postMessage("showConsentForm") : 1 === u.id && u.tt.setState(7)
	}, this.zR = function() {
		this.setState(14)
	}, this.r4 = function() {
		return 1 === bf.dp.tn(2)
	}, this.zS = function() {
		bf.dp.dq(102, "")
	}, this.setState = function(zT) {
		1 === u.id && 5 <= u.f1 && u.tt.setState(zT)
	}, this.w = function() {
		var zU;
		1 === u.id && 7 <= u.f1 ? u.tt.setState(5) : ((zU = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = zU.toString())
	}, this.dZ = function() {
		1 !== u.id || u.f1 < 17 || u.tt.saveString(23, document.documentElement.outerHTML)
	}, this.e8 = function() {
		0 !== u.id && (1 === u.id ? u.tt.prepareAd("1688441405") : 2 === u.id && (0 === u.f1 ? u.u0.postMessage("prepare ad 4500876070") : u.u0.postMessage("loadAds 4500876070")))
	}, this.zV = function(dk) {
		return 0 !== u.id && (1 === u.id ? 12 <= u.f1 && (u.tt.presentAd(dk), !0) : 2 === u.id && (0 === u.f1 ? u.u0.postMessage("show ad " + dk) : u.u0.postMessage("showAd"), !0))
	}, this.de = function() {
		2 === u.id && u.f1 < 23 && n.o(4, 1, new p("App Update Required", "A new iOS app version with bug fixes has been published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + bG.zW + "' target='_blank'>" + bG
			.zW + "</a>", !0, [new q("⬅️ " + L(23), function() {
				n.o(0)
			}, b7.nC)]))
	}
}

function dN() {
	function zZ(e) {
		zk(e), n.o(4, 5, new p("🚀 New Game Update", "The game has been updated! Please reload the game." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new q("⬅️ " + L(23), function() {
				n.zl()
			}), new q("🔄 Reload", function() {
				u.v.w()
			}, b7.mv)]))
	}

	function zj(e) {
		zk(e), n.o(4, 5, new p(L(24), {
			"3249": "No servers found",
			"4705": "Lobby not found",
			"4730": "Kicked from lobby"
		} [e] ?? zd(e), !0))
	}

	function zd(e) {
		var p6 = " [" + e + "]";
		return 3249 === e || 1006 === e ? "No Internet / No Server Response" + p6 : 4527 === e ? "Player already in lobby" + p6 : 4530 === e ? "Lobby Timeout" + p6 : 4528 === e ? "Lobby Kick: Another login detected." + p6 : 4540 <= e && e < 4542 ?
			"You have been kicked. Duration: " + ["20 Seconds", "1 Minute", "1 Hour"][e - 4540] + p6 : "Unknown error" + p6
	}

	function zk(e) {
		zc(e), n.s.t()
	}

	function zc(e) {
		var zT = aW.zb();
		6 === zT ? aw.s.zn(e) : bk.zf ? (n.r(), bk.zo(), aw.s.close(aw.s.zg, 3256)) : 8 === zT && a9.zp(!0)
	}
	this.zX = function(zY, e) {
		zY === 1 && __fx.customLobby.isActive() && aW.zb() !== 6 && __fx.customLobby.setActive(false);
		if (8 === n.ro && 0 === zY)
			if (4211 === e) zZ(e);
			else {
				if (4480 === e) return bf.r8.uF(), void n.o(4, 0, new p(L(26), L(27), !0));
				8 !== aW.zb() && zc(), n.o(4, 0, new p(L(24), zd(e), !0))
			}
		else {
			var zT = aW.zb();
			if (6 === zT) {
				if (4211 === e) return void zZ(e);
				if (4215 !== e && 4516 !== e && 4527 !== e && 4533 !== e) return void aV.ze(zY)
			} else {
				if (!bk.zf) return 8 === zT ? void(zY !== aw.s.zh || a9.k0 || 1 !== a9.yT || a9.gi || aJ.zi(L(25, [e]))) : void 0;
				if (zY !== aw.s.zg) return
			}
			zj(e)
		}
	}, this.zm = function(e) {
		8 === aW.zb() ? a9.k0 || 1 !== a9.yT || aJ.zi(L(25, [e])) : zj(e)
	}, this.m = function() {
		zk(3268)
	}
}

function cx() {
	var zq, zr, zs = -15e3,
		zt = !1;

	function gm(e) {
		a0D() || (zt = !0, a0E(e, 1), aw.s.a0F(aw.s.zh), a0G(Math.floor(at.pV * e.clientX), Math.floor(at.pV * e.clientY)))
	}

	function a02(e) {
		zs = bb.lo, a0E(e, 1), aw.s.a0F(aw.s.zh), 0 < e.touches.length && (zq = Math.floor(at.pV * e.touches[0].clientX), zr = Math.floor(at.pV * e.touches[0].clientY), ao.a02(e) || a0G(zq, zr))
	}

	function a0G(ef, eh) {
		n.gm(ef, eh), 0 === a9.yT ? aW.gm(ef, eh) : b8.a0H(ef, eh) || ba.gm(ef, eh) || aT.gm(ef, eh) || aH.a0I(ef, eh) || aL.gm(ef, eh) || 0 <= aI.gm(ef, eh) || bF.a0J(ef, eh) || aq.gm(ef, eh) || aH.a0K(ef, eh)
	}

	function zy(e) {
		a0D() || (zt = !0, a0E(e, 1), a0L(Math.floor(at.pV * e.clientX), Math.floor(at.pV * e.clientY)))
	}

	function a03(e) {
		zs = bb.lo, a0E(e, 1), 0 < e.touches.length && (zq = Math.floor(at.pV * e.touches[0].clientX), zr = Math.floor(at.pV * e.touches[0].clientY), ao.a03(e) || a0L(zq, zr))
	}

	function a0L(ef, eh) {
		n.zy(ef, eh), 0 === a9.yT ? aW.zy(ef, eh) : (bP.gf(ef, eh), ba.zy(ef, eh) || (aI.zy(ef, eh), aH.x2() ? aH.zy(ef, eh) : aN.gn ? aN.zy(ef) && (bb.dc = !0) : (aR.zy(ef, eh), aO.m3 && aO.zy(ef, eh) && (bb.dc = !0))))
	}

	function a00(e) {
		a0D() || (a0E(e, 1), a0M(), 0 === a9.yT ? (aW.click(-1024, -1024), aP.qR()) : (aR.a0N(-1024, -1024), aI.zy(-1024, -1024), aN.a0O(), aO.m3 = !1))
	}

	function zz(e) {
		a0D() || (a0E(e, 1), a0P(Math.floor(at.pV * e.clientX), Math.floor(at.pV * e.clientY), 2 === e.button), bF.zw && (bF.zw = !1, e.preventDefault()))
	}

	function click(e) {
		a0D() || a0E(e, 1)
	}

	function a04(e) {
		zs = bb.lo, a0E(e, 1), e && e.touches && 0 < e.touches.length && 0 !== a9.yT ? aO.m3 = !1 : ao.a0Q() || (a0P(zq, zr, !1), bF.zw && (bF.zw = !1, e.preventDefault()))
	}

	function a05(e) {
		zs = bb.lo, a0E(e, 1), a0P(zq, zr, !1), bF.zw && (bF.zw = !1, e.preventDefault())
	}

	function a06(e) {}

	function a07(e) {}

	function a08(e) {
		a0D() || a0E(e, 0)
	}

	function a0P(ef, eh, a0R) {
		a0M(), 0 === a9.yT ? aW.click(ef, eh) : (aR.a0N(ef, eh), ba.a0N(), aN.a0O(), aO.m3 = !1, aH.click(ef, eh, a0R) ? bb.dc = !0 : aI.zz(ef, eh))
	}

	function a0M() {
		n.a0M()
	}

	function a01(e) {
		var ef, eh, deltaY;
		a0D() || (a0E(e, 1), aw.s.a0F(aw.s.zh), ef = Math.floor(at.pV * e.clientX), eh = Math.floor(at.pV * e.clientY), deltaY = e.deltaY, 1 === e.deltaMode && (deltaY *= 16), n.a01(ef, eh, deltaY), 0 === a9.yT ? aW.a01(ef, eh, deltaY) : aR.a01(ef,
			eh, deltaY) || (aN.a0S(ef, eh) ? aN.a01(deltaY) && (bb.dc = !0) : aO.a01(ef, eh, deltaY)))
	}

	function a09(e) {
		a0E(e, 0)
	}

	function a0E(e, id) {
		0 === id && n.x2() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== aW.zb() && e.preventDefault()
	}

	function a0A(e) {
		if (__fx.keybindHandler(e.key)) return;
		a0D() || (e = e.code) && e.length && (bT.et(e, 18) ? am.a0U(3) : bT.et(e, 22) ? am.a0U(0) : bT.et(e, 20) ? am.a0U(1) : bT.et(e, 24) ? am.a0U(2) : bT.et(e, 10) ? aN.a0V(31 / 32) : bT.et(e, 8) ? aN.a0V(32 / 31) : bT.et(e, 6) ? aN.a0V(7 / 8) :
			bT.et(e, 4) ? aN.a0V(8 / 7) : bT.et(e, 14) ? 0 !== a9.yT && aO.a01(Math.floor(at.a1 / 2), Math.floor(at.j7 / 2), -200) : bT.et(e, 16) ? 0 !== a9.yT && aO.a01(Math.floor(at.a1 / 2), Math.floor(at.j7 / 2), 200) : bT.et(e, 0) ? a9.yT &&
			bP.gg(!1) : bT.et(e, 2) && a9.yT && bP.gg(!0))
	}

	function a0B(e) {
		var code;
		a0D() || bb.lo < 400 || (code = e.code) && code.length && ("Enter" === code && n.a0W(1) || bk.zf && bk.sw.a0W(code) || (8 !== aW.zb() && aW.a0W(e) ? bb.dc = !0 : "Escape" === code ? bF.f2() : bT.et(code, 18) ? am.a0X(3) : bT.et(code, 22) ? am
			.a0X(0) : bT.et(code, 20) ? am.a0X(1) : bT.et(code, 24) ? am.a0X(2) : bT.et(code, 12) ? b8.a0Y(!a9.m1) : "Space" === code && a9.yT && (aI.gj && aI.a0Z(), a9.gi) && b8.a0a(!1)))
	}

	function a0C() {
		"hidden" === document.visibilityState ? 1 === a9.yT && (a9.gi ? b8.a0b() : !a9.k0 || aI.gj || a9.gu || aI.a0Z()) : bb.dc = !0
	}

	function a0D() {
		return zs + 15e3 > bb.lo
	}

	function resize() {
		at.a0d()
	}
	this.zu = 0, this.zv = "", this.zw = !1, this.dU = function() {
		zx.addEventListener("mousedown", gm, {
			passive: !1
		}), zx.addEventListener("mousemove", zy, {
			passive: !1
		}), zx.addEventListener("mouseup", zz, {
			passive: !1
		}), zx.addEventListener("click", click, {
			passive: !1
		}), zx.addEventListener("mouseleave", a00, {
			passive: !1
		}), zx.addEventListener("wheel", a01, {
			passive: !1
		}), zx.addEventListener("touchstart", a02, {
			passive: !1
		}), zx.addEventListener("touchmove", a03, {
			passive: !1
		}), zx.addEventListener("touchend", a04, {
			passive: !1
		}), zx.addEventListener("touchcancel", a05, {
			passive: !1
		}), zx.addEventListener("dragover", a06), zx.addEventListener("drop", a07), zx.addEventListener("dblclick", a08), document.addEventListener("contextmenu", a09), document.addEventListener("keydown", a0A), document.addEventListener(
			"keyup", a0B), document.addEventListener("visibilitychange", a0C), window.addEventListener("resize", resize)
	}, this.a0J = function(ef, eh) {
		return !!b8.gm(ef, eh) || !!(aR.gm(ef, eh) || aO.gm(ef, eh) || aN.gm(ef, eh) || aJ.gm(ef, eh))
	}, this.a0c = a0D, this.pt = function() {
		return !zt || 0 < zs
	}, this.f2 = function() {
		if (!n.x2()) return 8 === aW.zb() ? a9.m1 ? void b8.a0Y(!1) : ba.x2 ? void ba.a0Z() : void aI.a0Z() : void(7 !== aW.zb() && 6 === aW.zb() && aV.a0e());
		n.a0W(2)
	}
}

function bt() {
	this.pP = new a0f, this.pZ = new a0g, this.fu = new a0h, this.z3 = new a0i, this.wj = new a0j, this.a0k = new a0l, this.canvas = new a0m, this.color = new a0n, this.a0o = new a0p, this.dU = function() {
		this.pP.uC()
	}
}

function a0g() {
	this.v7 = function(g) {
		g.fill(0)
	}, this.a0q = function(g) {
		for (var eY = g.length, a7 = 0; a7 < eY; a7++) g[a7] = []
	}, this.a0r = function(hP, a0s) {
		for (var hQ = bK.f9, a7 = 0; a7 < 3; a7++) hQ[a7] = a0s * hP[a7];
		return hQ
	}, this.a0t = function(hP, hQ, a0u) {
		for (var hU = 0, a7 = 0; a7 < 3; a7++) hU += Math.abs(hP[a7] - hQ[a7]);
		return a0u <= hU
	}, this.a0v = function(hP, a0w) {
		for (var a7 = 0; a7 < 3; a7++) hP[a7] = bH.ow(hP[a7] + a0w, 0, 255);
		return hP
	}, this.a0x = function(g, s5, s6) {
		s6 = s6 || g.length - 1;
		for (var a0y = 0, a7 = s5 = s5 || 0; a7 <= s6; a7++) a0y += g[a7];
		return a0y
	}, this.a0z = function(g, a10) {
		for (var a7, a11, eY = g.length, a12 = [], er = eY - 1; 0 <= er; er--) {
			for (a7 = a11 = 0; a7 < eY; a7++) a10(g[a7]) < a10(g[a11]) && (a11 = a7);
			eY--, a12.push(g[a11]), g[a11] = g[eY], g.pop()
		}
		return a12
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
	}, this.a13 = function(g, f0) {
		for (var eY = g.length, g1 = 0, a7 = 0; a7 < eY; a7++) g1 += g[a7] > f0;
		return g1
	}, this.a14 = function(a15, a16, min) {
		for (var eY = a16[0], a7 = eY - 1; 0 <= a7; a7--) a15[a7] < min && (a15[a7] = a15[--eY]);
		a16[0] = eY
	}, this.a17 = function(g, eY, value) {
		for (var a7 = 0; a7 < eY; a7++) g[a7] -= value
	}, this.a18 = function(g) {
		for (var eY = g.length, a7 = 0; a7 < eY; a7++)
			if ("string" != typeof g[a7]) return !1;
		return !0
	}, this.a19 = function(p6, g, a1A) {
		g.fill(0);
		for (var s8 = p6.split(","), eY = Math.min(s8.length, g.length), a7 = 0; a7 < eY; a7++) g[a7] = Math.min(parseInt(s8[a7]), a1A)
	}, this.a1B = function(p6, g, qO) {
		g.fill("");
		for (var s8 = p6.split('"'), eY = Math.min(s8.length, 2 * g.length), k3 = 0, a7 = 1; a7 < eY; a7 += 2) g[k3++] = s8[a7].slice(0, qO)
	}, this.a1C = function(g, g1) {
		if (0 === g1) g.fill(0);
		else {
			var a0y = this.a0x(g),
				eY = g.length;
			if (0 === a0y) g.fill(bH.dl(g1, eY));
			else
				for (var a7 = 0; a7 < eY; a7++) g[a7] = bH.dl(g1 * g[a7], a0y);
			if (0 === (a0y = this.a0x(g))) g[1] = g1;
			else
				for (var k3 = 0; a0y++ < g1;) g[k3 = (k3 + 1) % eY] && g[k3]++
		}
	}, this.a1D = function(g) {
		if (!g) return 0;
		var eY = g.length;
		if (0 === eY) return 0;
		for (var f0 = g[eY - 1], a7 = eY - 2; 0 <= a7; a7--)
			if (g[a7] !== f0) return a7 + 2;
		return 1
	}
}

function a0m() {
	this.xG = function(a1E, e0, a1F) {
		var hB = a1E.height,
			a1G = b6.pP.ux(hB, hB),
			hH = b6.pP.getContext(a1G);
		return function(a1, hH, a1F) {
			hH.fillStyle = a1F, hH.beginPath(), hH.arc(a1 / 2, a1 / 2, .47 * a1, 0, 2 * Math.PI), hH.fill()
		}(hB, hH, a1F), hH.drawImage(a1E, -e0 * hB, 0), a1G
	}, this.a1I = function(a1J) {
		var hH, hE, hB = a1J.height;
		return a1J.width === hB && (hE = (hH = b6.pP.getContext(a1J, !0)).getImageData(0, 0, hB, hB), b6.a0k.a1K(hE.data, hB, hB, .9), hH.putImageData(hE, 0, 0)), a1J
	}
}

function a0n() {
	this.a1L = function(f0) {
		return [f0 >> 12 & 63, f0 >> 6 & 63, 63 & f0]
	}, this.a1M = function(f0) {
		for (var g = this.a1L(f0), a7 = 0; a7 < 3; a7++) g[a7] = ~~(4.05 * g[a7]);
		return g
	}, this.a1N = function(f0) {
		f0 = this.a1M(f0);
		return b6.color.mQ(f0[0], f0[1], f0[2])
	}, this.a1O = function(g) {
		for (var a7 = 0; a7 < 3; a7++) g[a7] = ~~(g[a7] / 4.04);
		return (g[0] << 12) + (g[1] << 6) + g[2]
	}, this.mQ = function(dz, s8, es) {
		return "rgb(" + dz + "," + s8 + "," + es + ")"
	}, this.mS = function(dz, s8, es, er) {
		return "rgba(" + dz + "," + s8 + "," + es + "," + er.toFixed(3) + ")"
	}, this.pv = function(et) {
		for (var g = et.split("(")[1].split(","), f8 = bK.f8, a7 = 0; a7 < 3; a7++) f8[a7] = parseInt(g[a7]);
		return 4 === g.length ? f8[3] = 255 * parseFloat(g[3].slice(0, -1)) : f8[3] = 255, f8
	}, this.pw = function(a1P, eb) {
		for (var g = a1P.slice(a1P.indexOf("(") + 1, a1P.indexOf(")")).split(","), f8 = bK.f8, a7 = 0; a7 < 3; a7++) f8[a7] = bH.ow(parseInt(g[a7].trim(), 10) + eb, 0, 255);
		return 3 === g.length ? this.mQ(f8[0], f8[1], f8[2]) : (a1P = parseFloat(g[3].trim()), this.mS(f8[0], f8[1], f8[2], a1P = 0 === a1P ? .3 : a1P))
	}, this.a1Q = function(g) {
		for (var p6 = "#", a7 = 0; a7 < 3; a7++) {
			var dz = g[a7].toString(16);
			p6 += 1 === dz.length ? "0" + dz : dz
		}
		return p6
	}, this.a1R = function(p6) {
		var dz, s8;
		return p6.length < 7 ? b7.mP : (dz = parseInt(p6.slice(1, 3), 16), s8 = parseInt(p6.slice(3, 5), 16), p6 = parseInt(p6.slice(5, 7), 16), this.mQ(dz, s8, p6))
	}
}

function a0j() {
	this.a1S = function(p6, font, maxWidth) {
		if (font && (tN.font = font), tN.measureText(p6).width <= maxWidth) return p6;
		for (var a7 = p6.length - 1; 1 <= a7; a7--)
			if (p6 = p6.substring(0, a7), tN.measureText(p6 + "...").width <= maxWidth) return p6 + "...";
		return "..."
	}
}

function a0p() {
	var a1U = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.a1V = function(lo) {
		var a1X, p6 = new Date(lo.getTime() - 6e4 * lo.getTimezoneOffset()).toUTCString();
		return p6.length < 12 || (p6 = p6.substring(5, p6.length), 0 === (lo = lo.getTimezoneOffset())) ? p6 : (a1X = (lo < 0 ? "+" : "-") + bH.dl(Math.abs(lo), 60), 0 == (lo = Math.abs(lo) % 60) ? p6 + a1X : p6 + a1X + ":" + (lo < 10 ? "0" :
			"") + lo)
	}, this.a1Y = function(lo) {
		var p6 = lo.toUTCString();
		return p6.length < 12 ? p6 : function(lo) {
			return a1U[lo.getUTCDay()]
		}(lo) + ", " + p6.substring(5, p6.length - 4)
	}
}

function a0f() {
	var a1a = null;
	this.xX = 0, this.uC = function() {
		var f0 = bf.dp.data[5].value;
		a1a = "px " + f0, "Trebuchet MS" !== f0 && (a1a += ", Trebuchet MS"), this.xX = hA(32, 32, ["a", "b", "m"], 200, a1a)
	}, this.ux = function(a1, j7) {
		var et = document.createElement("canvas");
		return et.width = a1, et.height = j7, et
	}, this.getContext = function(canvas, alpha) {
		return canvas.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(wj, a1, j7) {
		return wj.getImageData(0, 0, a1, j7)
	}, this.rR = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + a1a : 1 === type ? "bold " + size + a1a : 2 === type ? "lighter " + size + a1a : 3 === type ? "italic " + size + a1a : 4 === type ? "oblique " + size + a1a : 5 === type ? "small-caps " +
			size + a1a : "small-caps bold " + size + a1a
	}, this.textAlign = function(hH, id) {
		hH.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(hH, id) {
		hH.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.pb = function(e, code, color) {
		color = this.pa(bY.rS) + " solid " + (color || b7.mY);
		5 === (code = code || 5) ? e.style.border = color : 4 === code ? e.style.borderLeft = color : 2 === code ? e.style.borderBottom = color : 6 === code ? e.style.borderRight = color : e.style.borderTop = color
	}, this.sA = function(e, ef, eh, a1, j7) {
		e = e.style;
		e.left = this.sB(ef), e.top = this.sB(eh), e.width = this.sB(a1), e.height = this.sB(j7)
	}, this.pQ = function(f0) {
		return 1 + f0 * u.v.r4()
	}, this.qz = function(mA, g7) {
		return mA * this.pQ(void 0 === g7 ? .5 : g7) * at.pR / at.pV
	}, this.s9 = function(mA, g7) {
		return mA * this.pQ(void 0 === g7 ? .5 : g7) * at.pR
	}, this.ru = function(mA, g7, a1b) {
		return this.pQ(g7) * Math.min(mA * at.pR, a1b * at.a1) / at.pV
	}, this.pa = function(f0) {
		return f0.toFixed(1) + "px"
	}, this.sB = function(f0) {
		return this.a1d(f0).toFixed(1) + "px"
	}, this.a1d = function(f0) {
		return f0 / at.pV
	}, this.a1e = function(rg, a1f) {
		for (var p6 = "<ul>", eY = rg.length, a7 = 0; a7 < eY; a7++) p6 += "<li>" + rg[a7] + ": <a href='" + a1f[a7] + "' target='_blank'>" + a1f[a7] + "</a></li>";
		return p6 += "</ul>"
	}, this.a1g = function(a1h) {
		return "<a href='" + a1h + "' target='_blank'>" + a1h + "</a>"
	}, this.a1i = function(e) {
		navigator.clipboard && navigator.clipboard.writeText(e.value)
	}, this.a1j = function(e) {
		var dk = e.textContent;
		b6.z3.a1k(dk, "✔") || (1 === dk.length ? e.textContent = "✔" : e.textContent = dk + " ✔", setTimeout(function() {
			e.textContent = dk
		}, 500))
	}, this.measureText = function(p6) {
		return tN.measureText(p6).width
	}
}

function a0h() {
	this.gk = function(zT) {
		return 0 === zT ? 1 === a9.yT && a9.gu : 1 === zT ? 1 === a9.yT && !a9.gu : 2 === a9.yT
	}, this.gl = function(player) {
		return 0 !== ac.lV[player] && 2 !== ac.a1l[player]
	}, this.a1m = function(player) {
		return player === a9.eI && 2 !== ac.a1l[player]
	}, this.a1n = function(player) {
		return player === a9.eI
	}, this.j1 = function(player) {
		return player >= a9.je || 2 === ac.a1l[player]
	}, this.kT = function(player) {
		return 0 !== ac.lV[player]
	}, this.yJ = function(player) {
		return player < a9.je
	}, this.oh = function(a1o, a1p) {
		return a1o !== a1p
	}, this.fx = function(player, f0) {
		var min;
		return f0 = this.a1q(player, f0), ac.ga[player] += f0, ac.a1r[player] && (min = Math.min(ac.a1r[player], ac.ga[player]), ac.a1r[player] -= min, ac.ga[player] -= min), f0
	}, this.a1q = function(player, f0) {
		var a1s = ac.ga[player];
		return f0 = Math.min(f0, ac.gM[player] * a9.jl - a1s), f0 = Math.min(f0, a9.a1t - a1s), Math.max(f0, 0)
	}, this.oi = function(player, hu, a1u, a1v) {
		var a1s = ac.ga[player],
			hu = bH.dl(a1s * (hu + 1), 1024),
			a1u = bH.dl(a1u * a1s, 1024),
			hu = Math.min(hu, a1s - a1u);
		return 10 === a9.jy && (hu = b0.a1x(player, hu)), bK.f6[0] = hu, bK.f6[1] = a1u, a1v <= hu
	}, this.o9 = function(player, nq, np) {
		var player = ac.ga[player],
			a1w = bH.dl(64 * player, 1024),
			player = (nq = Math.min(nq, player - a1w), this.a1z(nq));
		return a1w += player, nq = this.a1q(np, nq -= player), bK.f6[0] = nq, bK.f6[1] = a1w, 1 <= nq
	}, this.oB = function(nq, np) {
		var a1y = this.a1z(nq);
		return nq = this.a1q(np, nq -= a1y), bK.f6[0] = nq, bK.f6[1] = a1y, 1 <= nq
	}, this.ht = function(player, a20) {
		return bH.dl(ac.ga[player] * (a20 + 1), 1024)
	}, this.a1z = function(a21) {
		return bH.dl(Math.max(2142 - bb.jb(), 0) * a21, 2142)
	}, this.ou = function(player, a1u) {
		a1u = bH.dl(a1u * ac.ga[player], 1024);
		bK.f6[1] = a1u, ac.ga[player] -= a1u
	}, this.fv = function(player, a22) {
		var fI, fK, es = ac.ga[player];
		return a22 <= es ? ac.ga[player] -= a22 : (ac.ga[player] = 0, fK = ac.a1r[player] + (fI = 5 * ((es = a22 - es) >> 2)), bZ.fy(player, fI - es, 12), fK <= a9.a23 ? ac.a1r[player] = fK : (ac.a1r[player] = a9.a23, bZ.fy(player, fK - a9.a23,
			18))), a22
	}, this.kh = function(player, hu) {
		var ga = ac.ga,
			a1s = ga[player],
			hu = bH.dl(a1s * (hu + 1), 1024),
			a1w = Math.max(bH.dl(a1s, 10), 1e3);
		return (hu = Math.min(hu, a1s - a1w)) < 0 ? (ga[player] = 0, a1w = Math.min(1e3, a1s + a9.a23 - ac.a1r[player]), bK.f6[1] = a1w, ac.a1r[player] += a1w - a1s, 0) : (bK.f6[1] = a1w, 10 === a9.jy && (hu = b0.a1x(player, hu)), ga[player] -=
			a1w + hu, hu)
	}, this.ol = function(player) {
		ac.ga[player] -= bK.f6[0] + bK.f6[1]
	}, this.oj = function(player, il) {
		return (il = Math.min(il, a9.eV)) < a9.eV && 0 === ac.lV[il] && (il = a9.eV), (bK.eU[0] = il) === a9.eV || eR(player, il)
	}, this.on = function(player, np) {
		return 0 !== ac.lV[np] && !eR(player, np)
	}, this.a24 = function(player, a25) {
		for (var g6, eY = ah.jf, qt = 0, a26 = kw, a7 = 0; a7 < eY; a7++)
			if (g6 = a26[a7], aY.zJ(g6)) {
				if (player === g6) return !0;
				if (++qt > a25) return !1
			} return !1
	}, this.kp = function(g6) {
		var a27 = a9.ie ? bd.a28() : ac.gM[kw[0]];
		return a27 >= bH.dl(g6 * a9.jO, 100)
	}
}

function a0l() {
	this.a29 = function(canvas, a2A, a2B) {
		var a1 = canvas.width,
			j7 = canvas.height,
			et = b6.pP.ux(a1, j7),
			hH = b6.pP.getContext(et, !0),
			canvas = (hH.drawImage(canvas, 0, 0), hH.getImageData(0, 0, a1, j7));
		return a2A(canvas.data, a1, j7, a2B), hH.putImageData(canvas, 0, 0), et
	}, this.a2C = function(v8, a1, j7) {
		for (var ef = a1 - 1; 0 <= ef; ef--)
			for (var eh = j7 - 1; 0 <= eh; eh--) {
				var a7 = 4 * (ef + eh * a1);
				v8[3 + a7] = v8[a7], v8[a7] = v8[1 + a7] = v8[2 + a7] = 255
			}
	}, this.a2D = function(v8, a1, j7) {
		for (var ef = a1 - 1; 0 <= ef; ef--)
			for (var eh = j7 - 1; 0 <= eh; eh--) {
				var a7 = 4 * (ef + eh * a1);
				v8[1 + a7] > v8[2 + a7] + 10 && (v8[3 + a7] = v8[a7], v8[1 + a7] = v8[2 + a7])
			}
	}, this.a2E = function(v8, a1, j7, a2B) {
		for (var gap = Math.floor(Math.min(a1, j7) * a2B), ef = 0; ef < a1; ef++)
			for (var a7, eh = 0; eh < j7; eh++)(ef < gap || eh < gap || a1 - gap <= ef || j7 - gap <= eh) && (v8[3 + (a7 = 4 * (ef + eh * a1))] = 255 - 255 * (v8[1 + a7] - v8[a7]) / (255 - v8[a7]))
	}, this.a2F = function(v8, a1, j7, a2B) {
		for (var ef = a1 - 1; 0 <= ef; ef--)
			for (var eh = j7 - 1; 0 <= eh; eh--) {
				var a7 = 4 * (ef + eh * a1);
				v8[a7] = a2B[0], v8[1 + a7] = a2B[1], v8[2 + a7] = a2B[2]
			}
	}, this.a2G = function(v8, a1, j7, a2B) {
		for (var gap = Math.floor(a1 * a2B), ef = 0; ef < a1; ef++)
			for (var a7, eh = 0; eh < j7; eh++)(ef < gap || eh < gap || a1 - gap <= ef || j7 - gap <= eh) && (v8[a7 = 4 * (ef + eh * a1)] = v8[1 + a7] = v8[2 + a7] = 0)
	}, this.a2H = function(v8, a1, j7) {
		for (var eh, a7, ef = a1 - 1; 0 <= ef; ef--)
			for (eh = j7 - 1; 0 <= eh; eh--) 200 < v8[1 + (a7 = 4 * (ef + eh * a1))] && v8[1 + a7] - 20 > v8[a7] && v8[1 + a7] - 20 > v8[2 + a7] ? v8[a7] + v8[2 + a7] < 40 ? v8[3 + a7] = 0 : (v8[3 + a7] = v8[a7], v8[a7] = 255, v8[1 + a7] = 255,
				v8[2 + a7] = 255) : v8[a7] < 50 && v8[1 + a7] < 50 && v8[2 + a7] < 50 && (v8[a7] + v8[1 + a7] + v8[2 + a7] < 50 ? v8[3 + a7] = 180 : v8[3 + a7] = 180 + Math.floor(75 * (v8[a7] + v8[1 + a7] + v8[2 + a7] - 50) / 100))
	}, this.a2I = function(v8, a1, j7) {
		for (var eh, a7, ef = a1 - 1; 0 <= ef; ef--)
			for (eh = j7 - 1; 0 <= eh; eh--) v8[1 + (a7 = 4 * (ef + eh * a1))] > v8[a7] + 20 && v8[1 + a7] > v8[2 + a7] + 20 && v8[a7] + v8[2] < 40 && (v8[3 + a7] = 255 - v8[1 + a7], v8[a7] = v8[1 + a7] = v8[2 + a7] = v8[a7])
	}, this.a1K = function(v8, a1, j7, a2B) {
		for (var dz = a1 >> 1, ef = 0; ef < a1; ef++)
			for (var eh = 0; eh < j7; eh++) Math.sqrt((ef - dz) * (ef - dz) + (eh - dz) * (eh - dz)) > a2B * dz && (v8[4 * (ef + eh * a1) + 3] = 0)
	}
}

function a0i() {
	this.xl = function(f0) {
		var a7, a2J, a2K, a2L, a2M;
		if (f0 < 0) return "-" + this.xl(Math.abs(f0));
		if (f0 < 1e3) return f0.toString();
		for (a2J = Math.floor(Math.log(f0 + .5) / Math.log(10)) + 1, a2K = Math.floor((a2J - 1) / 3), a2M = (a2L = f0.toString()).substring(a2J - 3, a2J), a7 = 1; a7 < a2K; a7++) a2M = a2L.substring(a2J - 3 * (a7 + 1), a2J - 3 * a7) + " " + a2M;
		return a2L.substring(0, a2J - 3 * a2K) + " " + a2M
	}, this.a2N = function(g6, a2J) {
		return g6.toFixed(a2J) + "%"
	}, this.a2O = function(f0, a2P) {
		return f0.toFixed(bH.ow(Math.floor((void 0 === a2P ? 3 : a2P) - Math.log10(Math.max(f0, 1))), 0, 8))
	}, this.a2Q = function(f0, mA, a2J) {
		return (f0 * mA).toFixed(a2J)
	}, this.z7 = function(username) {
		var ec, eN = username.indexOf("[");
		return !(eN < 0) && 1 < (ec = username.indexOf("]")) - eN && ec - eN <= 8 ? username.substring(eN + 1, ec).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.z7;
	this.a2R = function(p6) {
		for (var er = Math.floor(.5 * p6.length + .5), mG = Math.floor(.5 * (er - 1)), a7 = 0; a7 < mG; a7++)
			for (var es = -1; es < 2; es += 2) {
				var et = er + es * a7;
				if (" " === p6[et]) return [this.z4(p6.substring(0, et)), this.a2S(p6.substring(et))]
			}
		return [p6.substring(0, er), p6.substring(er)]
	}, this.a2S = function(p6) {
		for (var eY = p6.length, a7 = 0; a7 < eY; a7++)
			if (" " !== p6[a7]) return p6.substring(a7);
		return p6
	}, this.z4 = function(p6) {
		for (var a7 = p6.length - 1; 0 <= a7; a7--)
			if (" " !== p6[a7]) return p6.substring(0, a7 + 1);
		return p6
	}, this.a2T = function(p6, a2U) {
		return p6.split("(")[0] + "(🧈 " + a2U.toFixed(2) + ")"
	}, this.startsWith = function(p6, a2V) {
		return p6.substring(0, a2V.length) === a2V
	}, this.a1k = function(p6, a2V) {
		var eY = p6.length;
		return p6.substring(eY - a2V.length, eY) === a2V
	}, this.a2W = function(g, a2X, a2Y) {
		var p6 = "",
			eY = g.length - 1;
		a2Y = a2Y || "";
		for (var a7 = 0; a7 < eY; a7++) p6 += a2Y + g[a7] + a2Y + ",", (a7 + 1) % a2X == 0 && (p6 += "\n");
		return p6 += a2Y + g[eY] + a2Y
	}, this.a2Z = function(p6, hP, hQ) {
		return p6.replace(new RegExp(hP, "g"), hQ)
	}
}

function a2a() {
	this.ii = function(player, eK) {
		aE.wV(player, bI.eg(eK), bI.ei(eK)) && (bb.dc = !0), a9.k0 && this.iS()
	}, this.iS = function() {
		a9.gu = !1;
		for (var a7 = 0; a7 < a9.je; a7++) 0 !== ac.lV[a7] && 0 === ac.gM[a7] && aE.wb(a7);
		0 !== ac.lV[a9.eI] ? (bZ.lR[7] = ac.gM[a9.eI], bZ.lR[8] = ac.ga[a9.eI], aN.a2b(), aS.a2c(), a9.gi || aD.lr(ac.i9[a9.eI] - 5, ac.iB[a9.eI] - 5, ac.iA[a9.eI] + 5, ac.iC[a9.eI] + 5), ap.dU()) : aT.show(!1, !1, !1, !0), aJ.a2d(18), ab.a2e(),
			ab.lH(!0), bL.s.a2f(), aH.qx(), a9.og = null, bX.a2g = !0, bX.a2h(), a9.k0 && u.v.setState(1)
	}
}

function bv() {
	this.eV = 512, this.a1t = 15e8, this.a2i = 1e9, this.a23 = 5e4, this.a2j = 512, this.fs = 2, this.eI = 0, this.je = 0, this.yW = 0, this.k2 = 0, this.yV = 0, this.vg = 512, this.vl = 512, this.jl = 150, this.k0 = !0, this.gi = 0, this.yT = 0,
		this.jO = 0, this.m1 = !1, this.gu = 0, this.a2k = 0, this.ie = !1, this.vn = 0, this.vo = 0, this.jy = 0, this.ww = 0, this.og = null, this.yl = new wp, this.a2l = 30, this.yQ = 0, this.yY = 0, this.yk = 0, this.yL = 0, this.data = new a2m,
		this.a2n = new a2o, this.a2p = 0, this.a2q = function() {
			bN.dU(), this.yW = this.je = this.data.humanCount, this.k0 = 1 === this.yW && !__fx.customLobby.isActive(), this.m1 = !1, this.gi = this.data.isReplay, this.jy = 0 === this.data.gameMode ? [7, 10, 8][this.data.battleRoyaleMode] : this
				.data.isZombieMode ? 9 : this.data.numberTeams - 2, this.ww = this.data.isContest, this.ie = this.jy < 7 || 9 === this.jy, this.jy = 10 === this.jy && this.k0 ? 7 : this.jy, this.jy = 8 === this.jy && 2 !== this.je ? 7 : this.jy, av
				.dU(), this.vn = this.data.numberTeams, this.data.teamPlayerCount ? this.vo = +(0 < this.data.teamPlayerCount[0]) : (this.vo = 0, this.ie && this.k0 && (this.data.teamPlayerCount = new Uint16Array(9), this.data.teamPlayerCount.fill(1,
					1, this.vn + 1), a9.a2n.a2r())), this.a2l = this.je <= 2 ? 30 : this.je <= 50 ? 40 : 50, this.a2k = this.gu = __fx.customLobby.isActive() ? __fx.customLobby.gameInfo.spawnSelection : this.data.selectableSpawn, this.og = this.gu ?
				new a2a : null, this.vg = __fx.customLobby.isActive() ? Math.max(Math.min(__fx.customLobby.gameInfo.botCount, this.data.playerCount), this.je) : 1 === dg ? this.je : this.data.playerCount,
				this.vl = this.vg, this.k2 = this.vg - this.je, this.yV = 0, this.eI = this.data.selectedPlayer, this.yQ = 0, this.yY = 0, this.yk = 0, this.yL = 0, au.a2s(this.data.spawningSeed), aa.dU(), ac.dU(), ae.a2t(), b4.ni.oR = [], bc.dU(),
				this.yT = 1,
				__fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), bZ.dU(), a2u(), aY.dV(), ak.a2v(), bX.dU(), aY.dU(), an.dU(), bI.dU(), bJ.dU(), aj.dU(), bR.a2w(), aA.dU(),
				ae.a3(), aE.dU(), aF.dU(), ah.a2x(), b5.dU(), bd.dU(), bL.dU(), ba.dU(), a2y.putImageData(a2z, 0, 0), aR.dU(), aO.dU(), aN.dU(), b8.dU(), aq.dU(), aQ.dU(), aS.dU(), aI.dU(), aM.dU(), aJ.dU(), aL.dU(), aH.dU(), aT.dU(), aB.dU(), aC
				.dU(), fa(), aZ.dU(), ab.dU(), b0.dU(), b1.dU(), ax.dU(), this.yl.dU(), bb.a2w(), aD.lq(), 0 === ac.lV[a9.eI] && aT.show(!1, !0), ab.lH(!0), ap.dU(), bb.dc = !0, this.gi || this.k0 && this.gu || u.v.setState(1), this.a2p = 0
		}, this.zp = function(a31) {
			a9.gi || b5.od.a32.length || (b5.od.a32 = b5.a33.xw()),
				__fx.customLobby.isActive() === false && aw.s.a34(),
				this.yT = 0, bb.a35(), u.v.setState(0), a31 || bQ.e6.show(), aW.setState(0);
			if (__fx.customLobby.isActive()) __fx.customLobby.rejoinLobby();
			else this.a2p ? n.o(19) : n.o(5, 5)
		}, this.a36 = function() {
			return this.gi ? aI.gj || !b8.a37 : this.k0 && (aI.gj || this.gu)
		}, this.a38 = function() {
			return 1 === this.yT && !this.gu
		}
}

function a2m() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.elo = null, this.colorsType = 0, this.colorsPersonalized = 1,
		this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData = null, this.spawningType = 0,
		this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this.aIncomeData = null, this
		.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null
}

function a2o() {
	this.a2r = function() {
		var a39 = a9.data;
		b6.pZ.a1C(a39.teamPlayerCount, a39.playerCount), a39.numberTeams = b6.pZ.a13(a39.teamPlayerCount, 0), a39.teamPlayerCount[0] && a39.teamPlayerCount[7] && (a39.teamPlayerCount[7] = 0, this.a2r())
	}, this.a3A = function() {
		var a39 = a9.data;
		a39.mapType < 2 ? bO.a3(bO.a3B(a39), a39.mapSeed) : bO.a3C(a39.canvas)
	}, this.a3D = function() {
		var a39 = a9.data;
		a39.colorsData || (a39.colorsData = new Uint32Array(1)), a39.selectableColor && (a39.colorsData[0] = bf.s.uB()), a39.selectableName && (a39.playerNamesData || (a39.playerNamesData = new Array(1)), a39.playerNamesData[0] = bf.dp.data[122]
			.value)
	}, this.a3E = function() {
		a9.data = new a2m, a9.data.aIncomeType = 2, a9.data.aIncomeData = new Uint8Array(a9.eV), a9.data.aIncomeData[0] = 64
	}
}

function dM() {
	this.xU = 0, this.gap = 0, this.rS = 0, this.pX = 0, this.dU = function() {
		this.resize()
	}, this.resize = function() {
		this.xU = .0022 * b6.pP.pQ(.5) * at.pR, this.rS = this.xU / at.pV, this.gap = Math.max(Math.floor((u.v.r4() ? .0114 : .01296) * at.pR), 2), this.pX = this.gap / at.pV
	}
}

function dL() {
	this.a3F = function() {
		return u.v.r4() ? 2 : 1
	}
}

function c6() {
	var q0, ef, eh, a3G, a3H, a3I, lo, player, a3J, gap, zoom, oK, a3K;

	function a3U(player) {
		for (var a7 = oK.length - 1; 0 <= a7; a7--)
			if (oK[a7] === player) return 1
	}

	function a3S(a3P) {
		var a7, eY;
		if (-1 !== a3P)
			for (eY = q0.length, a7 = 0; a7 < eY; a7++)
				if (q0[a7].x2 && q0[a7].ef + 1 === a3P % 4 && q0[a7].eh + 1 === a3P >> 2) return a7;
		return -1
	}

	function a3Q(kk, kl) {
		var s8 = gap / 2;
		return kk < ef - a3G - 3 * s8 || ef + 3 * a3G + 5 * s8 < kk || kl < eh - a3G - 3 * s8 || eh + 2 * a3G + 3 * s8 < kl ? -1 : 4 * (kl < eh - s8 ? 0 : kl < eh + a3G + s8 ? 1 : 2) + (kk < ef - s8 ? 0 : kk < ef + a3G + s8 ? 1 : kk < ef + 2 * a3G +
			3 * s8 ? 2 : 3)
	}
	this.a3L = function() {
		var a7, es, a3O = [b7.my, b7.nB, b7.mW, b7.nT, b7.nM];
		for (q0 = new Array(9), a7 = 0; a7 < 9; a7++) q0[a7] = {
			id: a7,
			x2: !1,
			kR: 0,
			canvas: [],
			ef: 0,
			eh: 0
		};
		for (q0[0].colors = [0, 1, 2, 3], q0[0].ef = 0, q0[0].eh = 0, q0[1].colors = [0, 1, 4], q0[1].ef = 1, q0[1].eh = 0, q0[2].colors = [0, 2], q0[2].ef = -1, q0[2].eh = 0, q0[3].colors = [0], q0[3].ef = 0, q0[3].eh = 0, q0[4].colors = [0, 2],
			q0[4].ef = 1, q0[4].eh = 1, q0[5].colors = [3], q0[5].ef = 0, q0[5].eh = -1, q0[6].id = 20, q0[6].colors = [0], q0[6].ef = 1, q0[6].eh = -1, q0[7].id = 21, q0[7].colors = [0], q0[7].ef = 0, q0[7].eh = 1, q0[8].id = 16, q0[8]
			.colors = [0], q0[8].ef = 0, q0[8].eh = 0, a7 = 0; a7 < 9; a7++)
			for (es = 0; es < q0[a7].colors.length; es++) q0[a7].canvas.push(function(id, a1F) {
				if (id < 20) return b6.canvas.xG(aX.get(3), id, a1F);
				var a1F = aX.get(3).height,
					a1G = b6.pP.ux(a1F, a1F),
					hH = b6.pP.getContext(a1G);
				20 === id ? hH.drawImage(aX.get(18), 0, 0) : 21 === id && af.v8.xV(af.wz.xK + af.wz.xb, hH, 0, 0, a1F);
				return a1G
			}(q0[a7].id, a3O[q0[a7].colors[es]]))
	}, this.a3N = function() {
		return q0
	}, this.dU = function() {
		oK = [], ef = eh = lo = 0, a3H = a3I = -1e3, this.resize()
	}, this.resize = function() {
		a3G = Math.floor((u.v.r4() ? .075 : .0468) * at.pR), zoom = a3G / aX.get(3).height, gap = Math.floor(a3G / 3)
	}, this.a0I = function(kk, kl) {
		return !!this.x2() && (bb.dc = !0, !!af.v8.gm(kk, kl, player) || (kk = function(kk, kl) {
			a3I = a3H = -1e3;
			var a3R = a3S(a3Q(kk, kl));
			if (-1 === a3R) return 0;
			if (1 !== q0[a3R].colors[q0[a3R].kR])
				if (5 === a3R) {
					if (! function() {
							var dk = performance.now();
							a3K + 4e3 < dk && (oK = []);
							a3K = dk
						}(), a3U(player)) return 1;
					oK.push(player), 16 < oK.length && oK.shift()
				} else if (6 === a3R) {
				for (var a7 = oK.length - 1; 0 <= a7; a7--) 0 === ac.lV[oK[a7]] && oK.splice(a7, 1);
				0 < oK.length && (b1.a3V(1, oK, !0) && b4.fu.oJ(oK, player), oK = [])
			} else if (2 === a3R) b4.gv.no(aN.h0(), player);
			else if (3 === a3R) a9.gu && b4.gv.gw(a3J);
			else if (0 === a3R)
				if (0 === q0[0].kR) {
					if (a9.a2k && aS.a3W() < 350) return 1;
					b4.gv.h6(aN.h0(), player)
				} else ax.h8(player, aN.h0());
			else if (1 === a3R) bR.a3X(), b4.gv.h4(aN.h0(), a3J);
			else {
				if (7 === a3R) return bR.a3Y(), af.v8.show(kk, kl), 2;
				if (4 === a3R) b1.a3V(0, [player], !0) && b4.fu.oG(player);
				else {
					if (8 !== a3R) return 0;
					b4.gv.gz(aN.h0(), a3J, player)
				}
			}
			return 1
		}(kk, kl), this.qx(), 2 === kk && (af.v8.x2 = !0), 0 < kk))
	}, this.a0K = function(kk, kl) {
		this.x2() || (a3H = kk, a3I = kl, lo = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = bI.gq(mouseX),
			coordY = bI.gs(mouseY),
			coord = bI.ew(coordX, coordY),
			point = bI.eO(coord);
		if (coordX < 0 || coordY < 0) return;
		(function(kk, kl, eC) {
			aY.eT(eC) || -1 === (kk = bJ.h2.a3m(kk, kl)) ? aJ.a3l(eC) : aJ.a3n(kk)
		}(mouseX, mouseY, point))
	}
	this.click = function(kk, kl, a0R) {
		var gp = bI.gq(kk),
			gr = bI.gs(kl),
			eK = bI.ew(gp, gr),
			eC = bI.eO(eK);
		if (!bI.gt(gp, gr)) return !1;
		gp = (u.v.r4() ? .025 : .0144) * at.pR, gr = performance.now();
		if (Math.abs(kk - a3H) > gp || Math.abs(kl - a3I) > gp || lo + 500 < gr) return !1;
		if (lo = gr, a0R && ! function(kk, kl, eC) {
				aY.eT(eC) || -1 === (kk = bJ.h2.a3m(kk, kl)) ? aJ.a3l(eC) : aJ.a3n(kk)
			}(kk, kl, eC), aI.gj || this.x2() || !b6.fu.gl(a9.eI) || a9.gi) return this.qx(), !1;
		if (a9.gu) {
			if (!a0R) {
				if (!aY.eT(eC)) return !1;
				a3J = eK, q0[3].x2 = !0
			}
		} else if (bJ.h2.nt(eK)) a0R ? aJ.a3e(55, 0) : bJ.a3c.a3d = -1;
		else {
			if (a0R) return !1;
			bJ.h2.a3f(kk, kl) || (2 === a9.yT ? aY.g8(eC) && (player = aY.eQ(eC), aY.zJ(player)) && (q0[0].x2 = !0, q0[0].kR = 1, q0[7].x2 = !0) : aY.ed(eC) ? (a3J = ai.e9.eB(eC)) && (gp = bI.eO(a3J), q0[8].x2 = !0, player = aY.eP(gp) ? a9.eV :
				aY.eQ(gp)) : (a3J = eK, bJ.h2.h3(a9.eI, eK) && (q0[0].x2 = !0, q0[0].kR = 1, q0[1].x2 = !0, q0[1].kR = bK.fA[2] ? 0 : 2), aY.h1(eC) || (aY.eP(eC) ? (player = a9.eV, h5(a9.eI) ? (q0[0].x2 = !0, q0[0].kR = 0) : h7(a9.eI,
				player) && (q0[0].x2 = !0, q0[0].kR = 3)) : (player = aY.eQ(eC)) === a9.eI ? (q0[0].x2 = !0, q0[0].kR = 1, q0[7].x2 = !0) : (q0[0].kR = 1, q0[5].x2 = function(player) {
				return aY.zJ(player) && !a3U(player) && b1.a3V(1, [player], !1)
			}(player), q0[7].x2 = aY.zJ(player), eR(player, a9.eI) ? (q0[4].x2 = aY.zJ(player) && !ab.a3h(player) && b1.a3V(0, [player], !1), q0[6].x2 = function(player) {
				if (0 === oK.length) return !1;
				if (performance.now() > a3K + 4e3) return !(oK = []);
				return !a3U(player) && ! function(player) {
					var a7;
					if (a9.ie)
						for (a7 = oK.length - 1; 0 <= a7; a7--)
							if (!eR(player, oK[a7])) return 1;
					return
				}(player)
			}(player), h9(a9.eI, player) ? (q0[0].kR = 0, q0[0].x2 = !0) : h7(a9.eI, player) && (q0[0].kR = 3, q0[0].x2 = !0), q0[0].x2 = this.a3j()) : (q0[2].x2 = !0, q0[0].x2 = !0)))))
		}
		return this.a3b(kk, kl)
	}, this.a3b = function(kk, kl) {
		return ef = kk - Math.floor(a3G / 2), eh = kl - Math.floor(a3G / 2), !!this.x2()
	}, this.zy = function(kk, kl) {
		return !!this.x2() && (af.v8.x2 ? !af.v8.xT(kk, kl) && (af.v8.x2 = !1, bb.dc = !0) : function(rI, kk, kl) {
			kk = a3Q(kk, kl);
			if (0 <= a3S(kk)) return !1;
			if ((1 === kk || 6 === kk) && 0 <= a3S(2)) return !1;
			if ((6 === kk || 9 === kk) && 0 <= a3S(10)) return !1;
			return rI.qx(), bb.dc = !0
		}(this, kk, kl))
	}, this.qx = function() {
		for (var a7 = q0.length - 1; 0 <= a7; a7--) q0[a7].x2 = !1, q0[a7].kR = 0;
		af.v8.x2 = !1
	}, this.x2 = function() {
		return this.a3j() || af.v8.x2
	}, this.a3j = function() {
		for (var eY = q0.length, a7 = 0; a7 < eY; a7++)
			if (q0[a7].x2) return !0;
		return !1
	}, this.tM = function() {
		if (this.x2())
			if (af.v8.x2) af.v8.tM();
			else {
				var a7, hH = tN,
					es = q0,
					eY = es.length,
					a3r = (a3G + gap) / zoom;
				for (hH.imageSmoothingEnabled = !0, hH.setTransform(zoom, 0, 0, zoom, ef, eh), a7 = 0; a7 < eY; a7++) es[a7].x2 && tN.drawImage(es[a7].canvas[es[a7].kR], es[a7].ef * a3r, es[a7].eh * a3r);
				hH.imageSmoothingEnabled = !1, hH.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function c7() {
	var j7, canvas, a3s, a3t, a3u, a3v = -1;

	function a3w() {
		var a3x, wj = canvas.getContext("2d", {
			alpha: !0
		});
		wj.clearRect(0, 0, j7, j7), wj.fillStyle = b7.mU, wj.fillRect(0, 0, j7, j7), 0 === a3t && (wj.fillStyle = b7.mZ, wj.fillRect(0, 0, j7, j7)), wj.fillStyle = b7.mY, wj.fillRect(0, 0, j7, 1), wj.fillRect(0, 0, 1, j7), wj.fillRect(0, j7 - 1, j7,
				1), wj.fillRect(j7 - 1, 0, 1, j7), a3x = .9 * j7 / aX.get(0).width, wj.imageSmoothingEnabled = !0, wj.setTransform(a3x, 0, 0, a3x, Math.floor((j7 - a3x * aX.get(0).width) / 2), Math.floor((j7 - a3x * aX.get(0).height) / 2)), wj
			.drawImage(aX.get(0), 0, 0), wj.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a3z(kk, kl) {
		if (!aI.gj) return kk <= j7 + bY.gap && kl >= aN.eh ? 9 : -1;
		if (kk <= 4 * j7 + bY.gap) {
			if (kl >= aN.eh) return 0;
			if (kl >= aN.eh - j7 - a3u * bY.gap) return 2
		} else if (kk <= 7 * j7 + bY.gap && kl >= aN.eh - j7 - a3u * bY.gap) return 1;
		return -1
	}
	this.gj = !1, this.dU = function() {
		a3t = -1, this.gj = !1, a3u = u.v.r4() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		j7 = aN.j7, (canvas = document.createElement("canvas")).width = j7, canvas.height = j7, a3s = b6.pP.rR(1, (u.v.r4() ? .5 : .45) * j7), a3w()
	}, this.a0Z = function() {
		this.gj = !this.gj, this.gj ? (b8.a0Y(!1), a9.gi && b8.a37 && b8.a0a(!0), this.a3y()) : (a3t = -1, a3w(), !a9.k0 || 1 !== a9.yT || a9.gu || a9.gi || u.v.setState(1)), bb.dc = !0
	}, this.a3y = function() {
		(a9.k0 || a9.gi) && 1 === a9.yT && (aR.lH(!0), a9.gu || setTimeout(function() {
			bX.ye()
		}, 0), u.v.setState(0))
	}, this.gm = function(kk, kl) {
		return 0 <= (a3v = a3z(kk, kl)) || !aI.gj || a9.k0 || a9.gi || ba.x2 || aI.a0Z(), a3v
	}, this.zy = function(kk, kl) {
		kk = a3z(kk, kl);
		kk !== a3t && (a3t = kk, this.gj || a3w(), bb.dc = !0)
	}, this.zz = function(kk, kl) {
		kk = a3z(kk, kl);
		return -1 !== kk && a3v === kk && (this.gj ? a9.m1 ? (0 <= kk && b8.a0Y(!1), !a9.gi) : (0 === kk ? a9.zp() : 1 === kk ? this.a0Z() : 2 === kk && n.o(1, 0), !0) : 9 === kk && (this.a0Z(), !0))
	}, this.tM = function() {
		var a1;
		this.gj ? (a1 = Math.floor(5.5 * j7), tN.setTransform(1, 0, 0, 1, bY.gap, aN.eh), tN.fillStyle = b7.mU, tN.fillRect(0, 0, a1, j7), 0 === a3t ? (tN.fillStyle = b7.mZ, tN.fillRect(0, 0, 4 * j7, j7)) : 1 === a3t && (tN.fillStyle = b7.mZ, tN
				.fillRect(4 * j7, 0, Math.floor(1.5 * j7), j7)), tN.fillStyle = b7.mY, tN.fillRect(0, 0, a1, 1), tN.fillRect(0, 0, 1, j7), tN.fillRect(4 * j7, 0, 1, j7), tN.fillRect(0, j7 - 1, a1, 1), tN.fillRect(a1 - 1, 0, 1, j7), tN.font =
			a3s, b6.pP.textBaseline(tN, 1), b6.pP.textAlign(tN, 1), tN.fillText(L(28), 2 * j7, .54 * j7), a1 = .4 * j7, aI.a43(bY.gap + 4 * j7 + (1.5 * j7 - a1) / 2, aN.eh + .3 * j7, a1), a1 = 1, tN.setTransform(1, 0, 0, 1, bY.gap, aN.eh -
				a1 * a3u * bY.gap - a1 * j7), tN.fillStyle = b7.mU, tN.fillRect(0, 0, 4 * j7, j7), a3t === a1 + 1 && (tN.fillStyle = b7.mZ, tN.fillRect(0, 0, 4 * j7, j7)), tN.fillStyle = b7.mY, tN.fillRect(0, 0, 4 * j7, 1), tN.fillRect(0, 0,
				1, j7), tN.fillRect(4 * j7, 0, 1, j7), tN.fillRect(0, j7 - 1, 4 * j7, 1), tN.fillText(L(0 === a1 ? 28 : 29), 2 * j7, .54 * j7), tN.setTransform(1, 0, 0, 1, 0, 0)) : tN.drawImage(canvas, bY.gap, aN.eh)
	}, this.oz = function(player) {
		return 0 !== ac.lV[player] && 2 !== a9.yT && aY.zJ(player)
	}, this.a43 = function(ef, eh, eY) {
		tN.setTransform(1, 0, 0, 1, ef, eh), tN.lineWidth = bY.xU, tN.strokeStyle = b7.mY, tN.beginPath(), tN.moveTo(0, 0), tN.lineTo(eY, eY), tN.moveTo(0, eY), tN.lineTo(eY, 0), tN.stroke()
	}
}

function c8() {
	var a45, j7, a46, a47, a48, a49, a4A, a4B, a4C;

	function wf() {
		return aN.a4U(aJ.a4Q()) ? aq.x2 ? aN.eh - aN.j7 - 2 * a46 : aN.eh - a46 : b8.a4U(aJ.a4T()) ? aq.x2 ? b8.wf() - aN.j7 - 2 * a46 : b8.wf() - a46 : aq.x2 ? at.j7 - aN.j7 - (bg.a3F() + 1) * a46 : at.j7 - bg.a3F() * bY.gap
	}

	function a4H(dk, p6, id, g6, a4K, a4L, vG, a4M, a4N, a4O) {
		var a7, wj, a1G, pH, g, a4Z = void 0 !== a4N,
			a1 = Math.floor(aM.measureText(p6, aJ.a3s) + 1.5 * a47 + (a4Z ? j7 : 1.5 * a47));
		if (bb.dc = !0, a1 + a46 > at.a1 && !a4Z && 50 !== id && 20 < p6.length) a4H(dk, (g = b6.z3.a2R(p6))[0], id, g6, a4K, a4L, vG, a4M, a4N, a4O), a4H(dk, g[1], id, g6, a4K, a4L, vG, a4M, a4N, a4O);
		else if (g = a1 + (50 === id ? a48 : 0), (a1G = document.createElement("canvas")).width = a1, a1G.height = j7, (wj = a1G.getContext("2d", {
				alpha: !0
			})).font = aJ.a3s, b6.pP.textBaseline(wj, 1), b6.pP.textAlign(wj, 0), wj.clearRect(0, 0, a1, j7), wj.fillStyle = a4L, wj.fillRect(0, 0, a1, j7), wj.fillStyle = a4K, wj.fillText(p6, Math.floor(1.5 * a47), Math.floor(j7 / 2)), a4Z && (wj
				.imageSmoothingEnabled = !0, af.v8.xV(a4N, wj, a1 - j7, 0, j7)), 0 === (pH = {
				lo: dk,
				p6: p6,
				id: id,
				player: g6,
				canvas: a1G,
				a4K: a4K,
				a4L: a4L,
				a1: a1,
				a4R: g,
				vG: vG,
				a4M: a4M,
				a4N: a4N,
				a4O: a4O
			}).lo || 0 < a45.length && 0 < a45[0].lo) a45.unshift(pH);
		else {
			for (a7 = 1; a7 < a45.length; a7++)
				if (0 < a45[a7].lo) return void a45.splice(a7, 0, pH);
			a45.push(pH)
		}
	}

	function a4I(dz, s8, es) {
		return "rgb(" + dz + "," + s8 + "," + es + ")"
	}

	function a4a(id, g1) {
		for (var eY = a45.length, a7 = 0; a7 < eY; a7++) a45[a7].id === id && g1-- <= 0 && (a45.splice(a7, 1), a7--, eY--)
	}

	function a4b(id, player) {
		for (var em = !1, a7 = a45.length - 1; 0 <= a7; a7--) a45[a7].id !== id || player !== a9.eV && a45[a7].player !== player || (a45.splice(a7, 1), em = !0);
		return em
	}

	function a4z(p6) {
		a4H(340, p6, 6, 0, a4I(215, 245, 255), b7.mV, -1, !1)
	}
	this.a4D = "", this.dU = function() {
		var self;
		a4B = 0, a4A = u.v.r4() ? 7 : 12, a49 = {
			yH: [0, 0, 0],
			a4E: [0, 0, 0],
			ln: [220, 180, 180],
			tL: [0, 0, 0],
			et: [0, 0, 0]
		}, a45 = [], this.resize(), a9.gu && this.yf(0, 18), bO.uv.uw[bO.eE].name.length && a4z(L(76, [bO.uv.uw[bO.eE].name])), a4z(L(77, [bO.ej - 2 + "x" + (bO.ek - 2)])), a4z(L(78, [ak.a50])), ak.a50 !== ak.a51 && a4z(L(79, [ak.a51 + " (" +
			b6.z3.a2N(100 * ak.a51 / ak.a50, 1) + ")"
		])), 0 < ak.a52 && a4z(L(52, [ak.a52 + " (" + b6.z3.a2N(100 * ak.a52 / ak.a50, 1) + ")"])), 0 < ak.a53 && a4z(L(80, [ak.a53 + " (" + b6.z3.a2N(100 * ak.a53 / ak.a50, 1) + ")"])), 10 === a9.jy && a4H(120, L(81), 6, 0, a4I(235, 255,
			120), b7.mV, -1, !1), 0 !== (self = this).a4D.length && (a4H(200, self.a4D, 0, 0, b7.mY, b7.mV, -1, !1), self.a4D = ""), a9.ww && a4H(340, L(30), 6, 0, a4I(255, 200, 0), b7.mV, -1, !1)
	}, this.resize = function() {
		var a4J, a7;
		if (j7 = (j7 = Math.floor((u.v.r4() ? .031 : .0249) * at.pR)) < 10 ? 10 : j7, this.fontSize = Math.floor(2 * j7 / 3), this.a3s = b6.pP.rR(1, this.fontSize), a46 = bY.gap, a47 = Math.floor(j7 / 5), 0 < a45.length)
			for (a4J = a45, a45 = [], a7 = a4J.length - 1; 0 <= a7; a7--) a4H(a4J[a7].lo, a4J[a7].p6, a4J[a7].id, a4J[a7].player, a4J[a7].a4K, a4J[a7].a4L, a4J[a7].vG, a4J[a7].a4M, a4J[a7].a4N, a4J[a7].a4O);
		this.a4P()
	}, this.a4P = function() {
		a4C = document.createElement("canvas");
		var p6 = L(31),
			wj = (a48 = aM.measureText(p6, this.a3s) + 5 * a47, a4C.height = j7, a4C.width = a48, a4C.getContext("2d", {
				alpha: !0
			}));
		wj.font = this.a3s, b6.pP.textBaseline(wj, 1), b6.pP.textAlign(wj, 1), wj.clearRect(0, 0, a48, j7), wj.fillStyle = b7.mv, wj.fillRect(0, 0, a48, j7), wj.fillStyle = b7.mY, wj.fillText(p6, Math.floor(a48 / 2), Math.floor(j7 / 2))
	}, this.a4Q = function() {
		var eY;
		return aq.x2 ? aq.a1 : 0 === (eY = a45.length) ? 0 : 1 === eY ? a45[0].a4R : a4S(a45[0].a4R, a45[1].a4R)
	}, this.a4T = function() {
		var eY = a45.length;
		return aq.x2 ? eY ? a4S(aq.a1, a45[0].a4R) : aq.a1 : 0 === eY ? 0 : 1 === eY ? a45[0].a4R : 2 === eY ? a4S(a45[0].a4R, a45[1].a4R) : a4S(a4S(a45[0].a4R, a45[1].a4R), a45[2].a4R)
	}, this.gm = function(ef, eh) {
		for (var ly, a4V, a4W = wf(), a7 = a45.length - 1; 0 <= a7; a7--)
			if ((a4V = a4W - (a7 + 1) * j7) <= eh && eh < a4V + j7) return 50 === a45[a7].id ? ef >= at.a1 - a48 - a46 - a45[a7].a1 && (ef >= at.a1 - a48 - a46 ? b4.fu.oG(a45[a7].player) : aD.ls(a45[a7].player, 800, !1, 0), !0) : ef >= at.a1 -
				a45[a7].a1 - a46 && (736 === a45[a7].id ? (a4V = a45[a7].p6.split(" "), window.open(a4V[a4V.length - 1], "_blank")) : a45[a7].a4M && (a45[a7].a4O && a45[a7].a4O.er ? (a4V = a45[a7].a4O.eK, ly = bI.eg(a4V) - 10, a4V = bI.ei(
					a4V) - 10, aD.lr(ly, a4V, 19 + ly, 19 + a4V)) : a45[a7].a4O && a45[a7].a4O.es ? aD.lt(a45[a7].player, a45[a7].a4O.lu) : (aD.ls(a45[a7].player, 800, !1, 0), 0 <= a45[a7].vG && (ly = a45[a7].vG, a45[a7].vG = a45[a7]
					.player, a45[a7].player = ly))), !0);
		return !1
	}, this.yr = function(dk, p6, id, g6, a4K, a4L, vG, a4M, a4N, a4O) {
		a4H(dk, p6, id, g6, a4K, a4L, vG, a4M, a4N, a4O)
	}, this.a4Y = function(k) {
		a4H(300, k, 252, 0, b7.mY, b7.mV, -1, !1)
	}, this.a2d = function(id) {
		for (var a7 = a45.length - 1; 0 <= a7; a7--) a45[a7].id === id && (a45[a7].lo = 1)
	}, this.yf = function(player, id) {
		0 === id ? (aM.ii(player, 0), a4a(423, 0), a4H(160, L(32, [ac.z1[player]]), 423, player, "rgb(10,220,10)", b7.mV, -1, !1)) : 1 === id ? (a4b(50, a9.eV), aM.ii(player, 1), a4H(360, L(33, [ac.z1[player]]), 0, player, b7.nD, b7.mV, -1, !0),
			aD.ls(player, 2700, !1, 0)) : 2 === id ? (aM.ii(player, 2), a4H(0, L(34), 0, player, "rgb(10,255,255)", b7.mV, -1, !0), aD.ls(player, 2700, !1, 0)) : 3 === id ? (aM.ii(player, 2), a4H(0, L(35, [ac.z1[player]]), 0, player, b7.mY,
			b7.mV, -1, !0), aD.ls(player, 2700, !1, 0)) : 4 === id ? this.a4c(1, player, player) : 5 === id ? 2 !== ac.a1l[player] && aY.zJ(a9.eI) && (function(id, lQ) {
			var a7, a4o = 0,
				eY = a45.length;
			for (a7 = 0; a7 < eY; a7++)
				if (a45[a7].id === id && lQ <= ++a4o) return a45.splice(a7, 1)
		}(1, 5), ab.a4e(player) ? a4H(180, L(36, [ac.z1[player]]), 1, player, a4I(255, 200, 180), b7.mV, -1, !0) : (a4a(573, 0), a4H(180, L(37, [ac.z1[player]]), 573, player, b7.nD, b7.mV, -1, !0))) : 18 === id ? a4H(255, L(38), 18, 0, b7.mY,
			b7.mV, -1, !1) : 21 === id ? a4H(220, L(39), id, 0, b7.mY, b7.mV, -1, !1) : 22 === id ? this.a4c(2, player, player) : 59 === id && a4H(0, L(40), id, 0, b7.nS, b7.mV, 0, !1)
	}, this.zi = function(k) {
		a4H(200, L(41, [k]), 94, 0, b7.mY, b7.n9, -1, !1)
	}, this.ym = function(a4f) {
		if (a9.eI === a4f && !a9.k0)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			a4H(0, "Your Win Count is now " + __fx.wins.count, 3, a4f, b7.mY, b7.mV, -1, !0);
		ac.gM[a4f] && (aM.ii(a4f, 2), a9.je < 100 ? a4H(0, L(35, [ac.z1[a4f]]), 3, a4f, b7.mY, b7.mV, -1, !0) : a4H(0, L(42, [ac.z1[a4f]]), 3, a4f, b7.mY, b7.mV, -1, !0))
	}, this.a3l = function(eC) {
		var a4i, p6, a4g = "(" + bI.eg(eC >> 2) + ", " + bI.ei(eC >> 2) + ")",
			a4M = !1,
			player = 0;
		aY.eT(eC) ? aY.eP(eC) ? a4g = L(43, [a4g]) : (player = aY.eQ(eC), p6 = L(44, [b6.wj.a1S(ac.a4h[player], b6.pP.rR(0, 10), 150)]) + "   ", p6 = (p6 += L(45, [b6.z3.xl(ac.ga[player])]) + "   ") + L(46, [b6.z3.xl(ac.gM[player])]) + "   ", a9
				.ie && (a4i = bc.yp[bc.k4[bc.eW[player]]], p6 += L(47) + ": " + a4i + "   "), b6.fu.j1(player) && (p6 += L(48) + ": " + aA.js[aA.im[player]] + "   "), a4g = p6 = (p6 += L(49, [player]) + "   ") + L(50, [a4g]), a4M = !0) : a4g = aY
			.ed(eC) ? L(51, [a4g]) + "   #" + aY.eG(eC) : L(52, [a4g]), bb.dc = !0, a4a(55, 0), a4H(220, a4g, 55, player, b7.mY, b7.mV, -1, a4M)
	}, this.a3n = function(a4j) {
		var kP = bJ.s,
			player = kP.a4k[a4j] >> 3,
			p6 = (bb.dc = !0, a4a(55, 0), L(53, [ac.z1[player]]) + "   ");
		a4H(220, p6 += L(45, [kP.a4l[a4j]]), 55, player, b7.mY, b7.mV, -1, !0)
	}, this.ny = function(nl, a4m, nz) {
		nl === a9.eI ? a4H(175, " " + L(54, [ac.z1[a4m]]) + ": ", 1001, a4m, a4I(200, 255, 210), b7.mV, -1, !0, nz) : this.a4n(nl, nz)
	}, this.a4n = function(nl, nz) {
		a4a(1e3, 0), a4H(175, ac.z1[nl] + ": ", 1e3, nl, b7.mY, "rgba(5,60,25,0.9)", -1, !0, nz)
	}, this.ys = function() {
		var k;
		a9.yY ? (k = L(55), aM.yq(L(56), 2, 1, 12), a4H(0, k, 40, 0, "rgb(10,220,10)", b7.mV, -1, !1)) : (k = L(57), aM.yq(L(58), 2, 0, 16), a4H(0, k, 41, 0, b7.mY, b7.mV, -1, !1))
	}, this.wq = function() {
		var g1 = ac.z1,
			eb = a9.data;
		a4H(300, g1[0] + " [" + a9.yl.wv(eb.elo[0]) + "] vs " + g1[1] + " [" + a9.yl.wv(eb.elo[1]) + "]", 65, 0, b7.mP, "rgba(100,255,255,0.75)", -1, !1)
	}, this.a4p = function(k) {
		a4H(200, k, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.a4q = function(a4r) {
		a4H(0, L(a4r ? 59 : 60), 247, 0, b7.nR, b7.mV, -1, !1)
	}, this.wy = function(wu, wx, a4s) {
		var eb = a9.data,
			g1 = ac.z1;
		a4H(0, g1[0] + ": " + a9.yl.wv(eb.elo[0]) + " -> " + wu, 66, 0, b7.mY, a4s[0], -1, !1), a4H(0, g1[1] + ": " + a9.yl.wv(eb.elo[1]) + " -> " + wx, 66, 1, b7.mY, a4s[1], -1, !1)
	}, this.oH = function(player, id) {
		0 === id ? a4b(50, player) ? (a4H(128, L(61, [ac.z1[player]]), 52, player, a4I(180, 255, 180), b7.mV, -1, !0), ab.ox(player, 2, 255)) : a4H(384, L(62, [ac.z1[player]]), 51, player, a4I(210, 210, 255), b7.mV, -1, !0) : a4b(51, player) ? (
			a4H(128, L(63, [ac.z1[player]]), 52, player, b7.mY, "rgba(60,120,10,0.9)", -1, !0), ab.ox(player, 2, 255)) : (a4H(384, L(64, [ac.z1[player]]), 50, player, b7.mY, "rgba(90,90,90,0.9)", -1, !0), ab.ox(player, 2, 96))
	}, this.oL = function(yH, target) {
		var color = a4I(210, 255, 210);
		1 < yH.length ? a4H(230, L(65, [yH.length, ac.z1[target]]), 66, target, color, b7.mV, -1, !0) : a4H(230, L(66, [ac.z1[yH[0]], ac.z1[target]]), 66, yH[0], color, b7.mV, target, !0)
	}, this.a4t = function(player, target) {
		a4H(230, L(67, [ac.z1[player], ac.z1[target]]), 66, player, b7.mY, "rgba(75,65,5,0.9)", target, !0)
	}, this.a3e = function(id, g1) {
		a4a(id, g1)
	}, this.ya = function(id, player) {
		a4b(id, void 0 === player ? a9.eV : player)
	}, this.a4u = function(id) {
		for (var a7 = a45.length - 1; 0 <= a7; a7--)
			if (a45[a7].id === id) return a45[a7];
		return null
	}, this.oC = function(a4v, a4w, player) {
		2 !== ac.a1l[a9.eI] && (a4H(200, 1 === a4v ? L(68, [ac.z1[player]]) : L(69, [a4v, ac.z1[player]]), 30, player, "rgb(190,255,190)", b7.mV, -1, !0), a4w) && a4H(30, 1 === a4w ? L(70) : L(71, [a4w]), 30, 0, b7.mY, b7.mV, -1, !1)
	}, this.a4y = function(a4v, player) {
		2 !== ac.a1l[a9.eI] && (a4a(31, 0), 2 === ac.a1l[player] || player >= a9.je ? a4H(150, 1 === a4v ? L(72, [ac.z1[player]]) : L(73, [ac.z1[player], a4v]), 31, player, b7.mP, "rgba(205,205,205,0.9)", -1, !0) : a4H(150, 1 === a4v ? L(74, [ac
			.z1[player]
		]) : L(75, [ac.z1[player], a4v]), 31, player, b7.mP, "rgba(205,255,205,0.9)", -1, !0))
	}, this.yZ = function(bo) {
		for (var et = bb.jb(), a7 = 2; 0 <= a7; a7--) 0 < a49.tL[a7] && (bo || a49.et[a7] < et - 220) && this.a54(a7)
	}, this.a54 = function(id) {
		var p6, eY = a49.tL[id],
			player = a49.yH[id];
		a49.tL[id] = 0, 1 === eY ? (0 === id ? p6 = L(82, [ac.z1[player], ac.z1[a49.a4E[0]]]) : 1 === id ? p6 = L(83, [ac.z1[player]]) : 2 === id ? p6 = L(84, [ac.z1[player]]) : 3 === id && (p6 = L(85, [ac.z1[player]])), a4a(7, 0), a4H(a49.ln[
			id], p6, 7, a49.a4E[id], b7.mY, b7.mV, -1, !0)) : (p6 = L(0 === id ? 86 : 1 === id ? 87 : 88, [eY]), a4a(7, 0), a4H(a49.ln[id], p6, 7, player, b7.mY, b7.mV, -1, !1))
	}, this.a4c = function(id, gy, vG) {
		var et = bb.jb(),
			eY = a49.tL[id] + 1;
		a49.tL[id]++, a49.yH[id] = gy, a49.a4E[id] = vG, 1 === eY && (a49.et[id] = et), (1 === eY && (a9.yW < 32 || 2 === a9.yT) || 1 < eY && (a49.et[id] < et - 140 || 2 === a9.yT)) && this.a54(id)
	}, this.iS = function() {
		for (var hU = (hU = a45.length - a4A) <= 1 ? 1 : hU * hU, a7 = a45.length - 1; 0 <= a7; a7--) 0 < a45[a7].lo && (a45[a7].lo -= hU, a45[a7].lo <= 0) && (bb.dc = !0, a45.splice(a7, 1));
		! function() {
			var g1, a7;
			if (128 !== a4B && !(++a4B < 128))
				for (g1 = 5, a7 = ah.jf - 1; 0 <= a7; a7--) 1 === ac.a1l[ah.jh[a7]] && 0 < g1-- && a4H(240, L(85, [ac.z1[ah.jh[a7]]]), 1, ah.jh[a7], b7.mP, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.yZ(!1)
	}, this.tM = function() {
		for (var vj, eh = wf(), a7 = a45.length - 1; 0 <= a7; a7--) vj = eh - (a7 + 1) * j7, 50 === a45[a7].id ? (tN.drawImage(a45[a7].canvas, at.a1 - a45[a7].a1 - a48 - a46, vj), tN.drawImage(a4C, at.a1 - a48 - a46, vj)) : tN.drawImage(a45[a7]
			.canvas, at.a1 - a45[a7].a1 - a46, vj)
	}
}

function c9() {
	var a56, a57, a58, a1, j7, font, p6;

	function a5B(a5C) {
		return a5C < 10 ? "0" + a5C : String(a5C)
	}
	this.dU = function() {
		p6 = L(89)
	}, this.resize = function() {
		a1 = Math.floor((u.v.r4() ? .53 : .36) * at.pR), j7 = Math.floor(.065 * a1), font = b6.pP.rR(1, Math.floor(.9 * j7)), a58--, this.setTime()
	}, this.iS = function() {
		this.setTime() && (bb.dc = !0)
	}, this.setTime = function() {
		var dk = new Date,
			a59 = dk.getUTCMinutes(),
			dk = dk.getUTCSeconds();
		return a57 = 3600 - 60 * a59 - dk, a57 %= 900, a56 = p6 + a5B(Math.floor(a57 / 60)) + ":" + a5B(a57 % 60), a58 !== (a58 = 60 * a59 + dk) && (a1 = aM.measureText(a56, font), a1 += Math.floor(.4 * j7), !0)
	}, this.tM = function() {
		tN.lineWidth = 1 + Math.floor(j7 / 15), tN.translate(at.a1 - j7, Math.floor(.5 * (at.j7 + a1))), tN.rotate(-Math.PI / 2), tN.fillStyle = b7.mY, tN.fillRect(0, 0, a1, j7), tN.strokeStyle = b7.mP, tN.strokeRect(0, 0, a1, j7 + 10), tN
			.fillStyle = b7.mP, tN.font = font, b6.pP.textBaseline(tN, 1), b6.pP.textAlign(tN, 1), tN.fillText(a56, Math.floor(a1 / 2), Math.floor(.59 * j7)), tN.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function cA() {
	var a45, a5D, a3s, j7, a5E;

	function a5G(a7) {
		var a5I = !0,
			hP = b7.mY,
			a1 = (a45[a7].il === a9.eV ? a45[a7].wj.fillStyle = b7.mj : (aY.a5J(a45[a7].il), a45[a7].wj.fillStyle = b6.color.mS(bK.f8[0], bK.f8[1], bK.f8[2], .87), 400 < b6.pZ.a0x(bK.f8, 0, 2) && (a5I = !1, hP = b7.mP)), a45[a7].canvas.width),
			rv = (a45[a7].wj.clearRect(0, 0, a1, j7), a45[a7].wj.fillRect(0, 0, a1, j7), a45[a7].wj.fillStyle = hP, ! function(wj, a1, j7) {
				wj.fillRect(0, 0, a1, 1), wj.fillRect(0, j7 - 1, a1, 1), wj.fillRect(0, 0, 1, j7), wj.fillRect(a1 - 1, 0, 1, j7)
			}(a45[a7].wj, a1, j7), a5D + 2 * j7 < a1 && (a45[a7].wj.fillRect(a1 - a5D - j7, 0, 1, j7), a45[a7].wj.fillText(ac.z1[a45[a7].il], Math.floor((a1 - a5D) / 2), Math.floor(.57 * j7))), 0 !== a45[a7].id ? 0 : j7);
		a45[a7].wj.fillText(b6.z3.xl(a45[a7].im), Math.floor(a1 - a5D / 2 - rv), Math.floor(.57 * j7)),
			function(a7, a1, rv, a5I) {
				a45[a7].wj.fillStyle = a5I ? b7.ma : b7.mW;
				a5I = Math.floor(a5D * a45[a7].im / a45[a7].a5P);
				a45[a7].wj.fillRect(Math.floor(a1 - a5D - rv), j7 - a5E, a5I, a5E)
			}(a7, a1, rv, a5I), 0 === a45[a7].id ? (a5M(a7, a1, a5I, hP), function(a7, a1, a5I) {
				a45[a7].wj.strokeStyle = a5I ? b7.mq : b7.n0, a45[a7].wj.fillRect(j7, 0, 1, j7);
				a5I = a1 - j7;
				a45[a7].wj.beginPath(), a45[a7].wj.moveTo(Math.floor(.3 * j7 + a5I), Math.floor(j7 / 2)), a45[a7].wj.lineTo(Math.floor(j7 - .3 * j7 + 0 + a5I), Math.floor(j7 / 2)), a45[a7].wj.stroke(), a45[a7].wj.beginPath(), a45[a7].wj.moveTo(
					Math.floor(j7 / 2 + a5I), Math.floor(.3 * j7)), a45[a7].wj.lineTo(Math.floor(j7 / 2 + a5I), Math.floor(j7 - .3 * j7 + 0)), a45[a7].wj.stroke()
			}(a7, a1, a5I)) : a5M(a7, 2 * j7, a5I, hP)
	}

	function a5M(a7, a1, a5I, hP) {
		a45[a7].wj.strokeStyle = a45[a7].a5Q ? b7.mh : a5I ? b7.n5 : b7.n6, a45[a7].wj.fillStyle = hP, a45[a7].wj.fillRect(a1 - j7, 0, 1, j7), a45[a7].wj.lineWidth = Math.max(Math.floor(j7 / 12), 3), a45[a7].wj.lineCap = "round";
		a5I = .35;
		a1 = j7 + 1, a45[a7].wj.beginPath(), a45[a7].wj.moveTo(Math.floor(a1 - a5I * j7 + 0), Math.floor(a5I * j7)), a45[a7].wj.lineTo(Math.floor(a1 - j7 + a5I * j7), Math.floor(j7 - a5I * j7 + 0)), a45[a7].wj.stroke(), a45[a7].wj.beginPath(), a45[
			a7].wj.moveTo(Math.floor(a1 - j7 + a5I * j7), Math.floor(a5I * j7)), a45[a7].wj.lineTo(Math.floor(a1 - a5I * j7 + 0), Math.floor(j7 - a5I * j7 + 0)), a45[a7].wj.stroke()
	}

	function a5a(eY) {
		for (var im, a7 = eY - 1; 0 <= a7; a7--) im = aZ.fl(a9.eI, a7), a45[a7].im !== im && (a45[a7].im = im, a45[a7].a5P = im > a45[a7].a5P ? im : a45[a7].a5P, a45[a7].a5H = !0)
	}

	function a5F(a5c) {
		a5c.canvas = document.createElement("canvas"), bO.v1.font = a3s;
		var a1 = a5D;
		a5c.il < a9.eV && 0 === a5c.id && (a1 += Math.floor(bO.v1.measureText(ac.z1[a5c.il] + "000").width)), a1 += j7, 0 === a5c.id && (a1 += j7), a5c.canvas.width = a1, a5c.canvas.height = j7, a5c.wj = a5c.canvas.getContext("2d", {
			alpha: !0
		}), a5c.wj.font = a3s, b6.pP.textBaseline(a5c.wj, 1), b6.pP.textAlign(a5c.wj, 1)
	}

	function a5W(a7) {
		return aQ.a5e() ? at.a1 - a45[a7].canvas.width - bY.gap : aQ.ef
	}

	function a5X(a7) {
		return Math.floor(2 * bY.gap + (aQ.a5e() ? aS.j7 + bY.gap : 0) + aQ.j7 + a7 * (1.3 * j7))
	}
	this.dU = function() {
		a45 = [], this.resize()
	}, this.resize = function() {
		a3s = aJ.a3s, j7 = aJ.fontSize + 5, j7 = Math.floor(1.25 * j7), u.v.r4() && (j7 = Math.floor(1.25 * j7)), a5E = Math.floor(.15 * j7), bO.v1.font = a3s, a5D = Math.floor(bO.v1.measureText("02 000 000 0000").width);
		for (var a7 = a45.length - 1; 0 <= a7; a7--) a5F(a45[a7]), a5G(a7)
	}, this.lH = function() {
		for (var a7 = a45.length - 1; 0 <= a7; a7--) a45[a7].a5H && (a45[a7].a5H = !1, a5G(a7))
	}, this.gm = function(kk, eh) {
		if (2 !== a9.yT && 0 !== ac.lV[a9.eI] && !a9.gi && aY.zJ(a9.eI))
			for (var a5R, a5S, a5T, a5U = u.v.r4() ? j7 : 0, a5V = u.v.r4() ? Math.floor(.15 * j7) : 0, a7 = a45.length - 1; 0 <= a7; a7--)
				if (a5R = a5W(a7), a5S = a5X(a7), a5T = a45[a7].canvas.width, a5S - a5V <= eh && eh <= a5S + j7 + a5V) {
					if (a5R - a5U <= kk && kk <= a5R + j7 + a5U) return a45[a7].a5Q || (a45[a7].a5H = !0, a45[a7].a5Q = !0, 0 === a45[a7].id && b4.gv.nw(a45[a7].il)), !0;
					if (0 === a45[a7].id && a5R + a5T - j7 - a5U <= kk && kk <= a5R + a5T + a5U) return b4.gv.h6(aN.h0(), a45[a7].il), !0
				} return !1
	}, this.iS = function() {
		var eY;
		0 !== ac.lV[a9.eI] && (aY.zJ(a9.eI) || a9.gi) && (function(eY) {
			if (a45.length !== eY) return 1;
			for (var a7 = eY - 1; 0 <= a7; a7--)
				if (a45[a7].id !== aZ.ff(a9.eI, a7) || a45[a7].il !== aZ.fk(a9.eI, a7)) return 1;
			return
		}(eY = aZ.fe(a9.eI)) && function(eY) {
			var a7, id, il, es, im, a4J = [];
			loop: for (a7 = 0; a7 < eY; a7++) {
				for (id = aZ.ff(a9.eI, a7), il = aZ.fk(a9.eI, a7), es = 0; es < a45.length; es++)
					if (a45[es].id === id && a45[es].il === il) {
						a4J.push(a45.splice(es, 1)[0]);
						continue loop
					} im = aZ.fl(a9.eI, a7), a5F(im = {
					il: il,
					im: im,
					a5P: im,
					id: id,
					a5H: !0,
					a5Q: !1,
					canvas: null,
					wj: null
				}), a4J.push(im)
			}
			a45 = a4J
		}(eY), a5a(eY))
	}, this.a5d = function(g6) {
		for (var eY = Math.min(a45.length, aZ.fe(a9.eI)), a7 = 0; a7 < eY; a7++)
			if (a45[a7].il === g6) return void(a45 = [])
	}, this.tM = function() {
		if (0 !== ac.lV[a9.eI] && (aY.zJ(a9.eI) || a9.gi))
			for (var a7 = a45.length - 1; 0 <= a7; a7--) tN.drawImage(a45[a7].canvas, a5W(a7), a5X(a7))
	}
}

function cB() {
	var a45, jm, a5f, a5g, j7, a3s, fontSize, a5h, a5i, a5j, a5k, canvas, wj, li, a5l;

	function ta(a7) {
		return L(0 === a7 ? 90 : 1 === a7 ? 91 : 2 === a7 ? 92 : 93)
	}

	function a5s() {
		tN.drawImage(canvas, bY.gap + (a9.ie ? bY.gap + bd.a5t() : 0), a5u + 2 * bY.gap)
	}

	function a5m() {
		canvas.width = a45[0].width + a5j, canvas.height = j7 + a5j, (wj = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, a45[0].width + a5j, j7 + a5j), wj.translate(Math.floor(a5j / 2), Math.floor(a5j / 2)), wj.lineWidth = a5j, wj.fillStyle = 1 === a45[0].a5r ? b7.md : b7.mV, a5v(), wj.fill(), wj.strokeStyle = 1 === a45[0].a5r ? b7.mP :
			b7.mY, a5v(), wj.stroke(), b6.pP.textAlign(wj, 1), b6.pP.textBaseline(wj, 1), wj.fillStyle = 1 === a45[0].a5r ? b7.mP : b7.mY, wj.font = a3s[0], wj.fillText(ta(a45[0].a5q), Math.floor(a45[0].width / 2), Math.floor(.72 * a5h[0] * j7)), wj
			.font = a3s[1], wj.fillText(a45[0].p6, Math.floor(a45[0].width / 2), Math.floor((a5h[0] + .48 * a5h[1]) * j7))
	}

	function a5v() {
		wj.beginPath(), wj.moveTo(a5k, 0), wj.lineTo(a45[0].width - a5k, 0), wj.lineTo(a45[0].width, a5k), wj.lineTo(a45[0].width, j7 - a5k), wj.lineTo(a45[0].width - a5k, j7), wj.lineTo(a5k, j7), wj.lineTo(0, j7 - a5k), wj.lineTo(0, a5k), wj
			.closePath()
	}
	this.dU = function() {
		jm = 4, a5f = a5g = li = 0, a45 = [], a3s = new Array(2), fontSize = new Array(2), (a5h = new Array(2))[0] = .3, a5h[1] = .7, a5i = new Array(4), canvas = document.createElement("canvas"), a5l = bb.lo + 2e3, this.resize()
	}, this.resize = function() {
		var a7, a1;
		for (j7 = Math.floor((u.v.r4() ? .0725 : .058) * at.pR), fontSize[0] = Math.floor(.85 * a5h[0] * j7), fontSize[1] = Math.floor(.85 * a5h[1] * j7), a3s[0] = b6.pP.rR(1, fontSize[0]), a3s[1] = b6.pP.rR(1, fontSize[1]), a7 = a5i.length -
			1; 0 <= a7; a7--) a5i[a7] = this.measureText(ta(a7) + "000", a3s[0]);
		if (a5j = Math.floor(1 + .05 * j7), a5k = Math.floor(.2 * j7), 0 < a45.length) {
			for (a7 = a45.length - 1; 0 <= a7; a7--) a1 = this.measureText(a45[a7].p6 + "00", a3s[1]), a45[a7].width = a1 < a5i[a7] ? a5i[a7] : a1;
			a5m()
		}
	}, this.iS = function() {
		0 !== jm && (4 === jm ? bb.lo > a5l && (jm = 0, 1 === a9.yT) && aM.yq(bO.uv.uw[bO.eE].name, 3, 1, 9) : (1 === jm ? (0 === a5f && (a5m(), a5f = 1e-4), 1 <= (a5f += .002 * (bb.lo - li)) && (a5g = 0, jm = 2, a5f = 1), bb.dc = !0) : 2 ===
			jm ? ((a5g += (bb.lo - li) / 1e3) > a45[0].ln || 1 < a5g && 1 < a45.length) && (jm = 3) : 3 === jm && ((a5f -= .002 * (bb.lo - li)) <= 0 && (a5f = 0, a45.shift(), jm = 0 < a45.length ? 1 : 0), bb.dc = !0), li = bb.lo))
	}, this.measureText = function(p6, a3s) {
		return tN.font = a3s, Math.floor(tN.measureText(p6).width)
	}, this.ii = function(a5p, a7) {
		this.yq(ac.z1[a5p], a7, 1, 0 === a7 ? 3 : 7)
	}, this.yq = function(p6, a5q, a5r, ln) {
		var a1;
		p6.length && (a1 = (a1 = this.measureText(p6 + "00", a3s[1])) < a5i[a5q] ? a5i[a5q] : a1, a45.push({
			p6: p6,
			width: a1,
			a5q: a5q,
			a5r: a5r,
			ln: ln
		}), 0 === jm) && (a5f = 0, jm = 1, li = bb.lo)
	}, this.tM = function() {
		0 !== jm && 0 !== a5f && (a5f < 1 ? (tN.globalAlpha = a5f, a5s(), tN.globalAlpha = 1) : a5s())
	}
}

function cj() {
	var j7, canvas, wj, a5w, a5x, a5y, a5z, a5H, a60, a61, a62, a63, a4r = !1,
		a1G = (this.x2 = !1, this.a1 = 0, new Array(2));

	function lI() {
		var a1 = aq.a1,
			kP = (a5H = !1, wi(wj, a1, j7), Math.floor(a1 / 2));
		1 === a5w ? (wj.fillStyle = b7.ms, wj.fillRect(kP, 0, kP, j7)) : -1 === a5w && (wj.fillStyle = b7.n7, wj.fillRect(0, 0, kP, j7)), wk(wj, a1, j7, 2);
		var kP = (kP = Math.floor(.25 * j7)) < 2 ? 2 : kP,
			a50 = (wj.fillStyle = b7.me, Math.floor((j7 - 4) * a5x[1] / a5y[1]));
		0 < a50 && wj.fillRect(2, j7 - 2 - a50, kP, a50), 0 < (a50 = Math.floor((j7 - 4) * a5x[0] / a5y[0])) && wj.fillRect(a1 - 2 - kP, j7 - 2 - a50, kP, a50);
		kP = (kP = Math.floor(j7 / 8)) < 2 ? 2 : kP, wm(wj, Math.floor(.4 * j7), 0, j7, kP, .5, !1), wm(wj, Math.floor(a1 - 1.4 * j7), 0, j7, kP, .5, !0), a50 = 1.1 * j7 / a1G[0].width;
		wj.imageSmoothingEnabled = !0, wj.setTransform(a50, 0, 0, a50, (a1 - a50 * a1G[0].width) / 2, -.05 * j7), wj.drawImage(a1G[+a4r], 0, 0), wj.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a64() {
		a62 = bb.jb(), a5H = !0, a60 = a5w = 0, a5z = [], aq.x2 = !1, aJ.ya(247), a5x[0] = a5x[1] = 0, aJ.a2d(673)
	}

	function wf() {
		return aN.a4U(aJ.a4Q()) ? aN.eh - j7 - bY.gap : b8.a4U(aJ.a4T()) ? b8.wf() - j7 - bY.gap : at.j7 - j7 - bg.a3F() * bY.gap
	}
	this.dV = function() {
		for (var a7 = 0; a7 < 2; a7++) a1G[a7] = b6.canvas.xG(aX.get(3), 8 - a7, b7.nb), a1G[a7] = b6.canvas.a1I(a1G[a7])
	}, this.dU = function() {
		a62 = -140, a61 = 0, a63 = -1, this.x2 = !1, a5H = a4r = !1, a5x = [a5w = a60 = 0, 0], a5y = [1, 1], a5z = [], this.resize()
	}, this.resize = function() {
		j7 = aN.j7, this.a1 = 4 * j7, (canvas = document.createElement("canvas")).width = this.a1, canvas.height = j7, wj = canvas.getContext("2d", {
			alpha: !0
		}), lI()
	}, this.lH = function() {
		a5H && lI()
	}, this.gm = function(ef, eh) {
		var lz;
		return !!this.x2 && !(ef < at.a1 - this.a1 - bY.gap || eh < (lz = wf()) || lz + j7 < eh || (a9.gi || b4.gv.o2(ef > at.a1 - bY.gap - this.a1 / 2 ? 1 : 0), 0))
	}, this.iS = function() {
		if (0 < a61) 0 === --a61 && a64();
		else if (this.x2) 180 == --a60 && 3 * a5x[0] < a5y[0] ? a64() : a5x[0] >= a5y[0] ? a4r ? bN.y6.yO() : bN.y6.yS() : a5x[1] >= a5y[1] ? a61 = 4 : a60 <= 0 && a64();
		else if (function() {
				if (0 <= a63) return 1;
				return
			}()) {
			a4r = ad.a67(), aJ.yr(250, L(94, [ac.z1[a63]]), 673, a63, b7.mY, b7.mV, -1, !0), a63 = -1, aJ.a2d(257), aJ.a4q(a4r), this.x2 = !0, a5H = !0, a60 = 360;
			for (var f0, dk = 0, a7 = ah.jf - 1; 0 <= a7; a7--) aY.zJ(ah.jh[a7]) && (dk += ac.gM[ah.jh[a7]]);
			a4r ? a5y[0] = Math.max(bH.dl(3 * dk, 4), 1) : a9.ie ? 9 === a9.jy && 8 === bc.k4[bd.kt()] ? a5y[0] = Math.max(dk, 1) : (f0 = bH.dl(100 * bd.a28(), a9.jO), f0 = bH.ow(200 - 2 * f0, 50, 100), f0 = bH.dl(f0 * dk, 100), a5y[0] = Math
				.max(f0, 1)) : a5y[0] = Math.max(bH.dl(3 * dk, 5), 1), a5y[1] = Math.max(dk - a5y[0], 1)
		}
	}, this.yU = function() {
		this.x2 && a5x[0] < a5y[0] && a64()
	}, this.oy = function(player, a6A) {
		var a7;
		if (this.x2) {
			for (a7 = a5z.length - 1; 0 <= a7; a7--)
				if (a5z[a7] === player) return;
			var a6B = L(a6A ? 95 : 96, [ac.z1[player]]);
			aJ.yr(450, a6B, 257, player, a6A ? b7.mq : b7.n4, b7.mV, -1, !0), a5z.push(player), a5H = !0, a6B = a9.k0 ? a5y[0] : ac.gM[player], a6A ? a5x[0] += a6B : a5x[1] += a6B, player === a9.eI && (a5w = a6A ? 1 : -1)
		}
	}, this.tM = function() {
		var eh;
		this.x2 && (eh = wf(), tN.drawImage(canvas, at.a1 - this.a1 - bY.gap, eh))
	}, this.p0 = function(player) {
		if (!a9.k0) {
			if (bb.jb() < a62 + 140) return !1;
			if (bb.jb() < 535) return !1
		}
		return 0 === a60 && !!b6.fu.gk(1) && !(!b6.fu.gl(player) || 10 <= jP[player] && !b6.fu.a24(player, 9))
	}, this.o7 = function(player) {
		a63 = player
	}
}

function cC() {
	var a1, ef, a6C, canvas, wj, x2, hu, a2U, a3s, a5H, a6D = 11 / 12;

	function a6F() {
		var a5O = Math.floor(hu * (a1 - 2 * a6C)),
			a6I = 1 + Math.floor(.0625 * aN.j7),
			a6J = 1 + Math.floor(.3 * aN.j7),
			a6K = Math.floor(.55 * aN.j7);
		wj.clearRect(0, 0, a1, aN.j7), wj.fillStyle = b7.mU, wj.fillRect(0, 0, a6C, aN.j7), wj.fillRect(a6C + a5O, 0, a1 - a6C - a5O, aN.j7), wj.fillStyle = hu < 1 / 3 ? "rgba(" + Math.floor(3 * hu * 130) + ",130,0,0.85)" : hu < 2 / 3 ? "rgba(130," +
			(130 - Math.floor(3 * (hu - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (hu - 2 / 3) * 130) + ",0.85)", wj.fillRect(a6C, 0, a5O, aN.j7), wj.fillStyle = b7.mY, wj.fillRect(0, 0, a1, 1), wj.fillRect(0, aN.j7 - 1, a1, 1), wj
			.fillRect(0, 0, 1, aN.j7), wj.fillRect(a6C, 0, 1, aN.j7), wj.fillRect(a6C + a5O, 0, 1, aN.j7), wj.fillRect(a1 - a6C, 0, 1, aN.j7), wj.fillRect(a1 - 1, 0, 1, aN.j7), wj.fillRect(Math.floor(.25 * aN.j7) + a6J, Math.floor((aN.j7 - a6I) / 2),
				aN.j7 - 2 * a6J, a6I), wj.fillRect(Math.floor(a1 - 1.25 * aN.j7) + a6J, Math.floor((aN.j7 - a6I) / 2), aN.j7 - 2 * a6J - a6J % 2, a6I), wj.fillRect(Math.floor(a1 - 1.25 * aN.j7) + Math.floor((aN.j7 - a6I) / 2), a6J, a6I, aN.j7 - 2 *
				a6J - a6J % 2), a2U = b6.fu.ht(a9.eI, aN.h0()), wj.fillText(b6.z3.xl(a2U) + " (" + b6.z3.a2N(100 * hu, +(hu < .1)) + ")", Math.floor(.5 * a1), a6K)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		hu = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => aN.a0V(arg1);

	function a6P(a0s) {
		return !(1 < a0s && 1 === hu || (1 < a0s && a0s * hu - hu < 1 / 1024 ? a0s = (hu + 1 / 1024) / hu : a0s < 1 && hu - a0s * hu < 1 / 1024 && (a0s = (hu - 1 / 1024) / hu), hu = bH.ow(hu * a0s, 1 / 1024, 1), a6F(), 0))
	}

	function a6Q(kk) {
		return hu !== (hu = bH.ow((kk - ef - a6C) / (a1 - 2 * a6C), 1 / 1024, 1)) && (a6F(), !0)
	}
	this.eh = 0, this.gn = !1, this.dU = function() {
		x2 = !a9.gu && !a9.gi, a5H = !1, hu = .5, a2U = 0, this.gn = !1, this.resize()
	}, this.resize = function() {
		u.v.r4() && at.a1 < .8 * at.j7 ? (this.j7 = Math.floor(.066 * at.pR), a1 = at.a1 - 4 * bY.gap - this.j7) : (a1 = Math.floor((u.v.r4() ? .65 : .389) * at.pR), a1 += 12 - a1 % 12, this.j7 = Math.floor(a1 / 12)), a6C = Math.floor(3 * this
			.j7 / 2), a3s = b6.pP.rR(1, Math.floor(.5 * this.j7)), (canvas = document.createElement("canvas")).width = a1, canvas.height = this.j7, (wj = canvas.getContext("2d", {
			alpha: !0
		})).font = a3s, b6.pP.textBaseline(wj, 1), b6.pP.textAlign(wj, 1), this.a6E(), a6F()
	}, this.a6E = function() {
		ef = u.v.r4() && at.a1 < .8 * at.j7 ? this.j7 + 3 * bY.gap : Math.floor((at.a1 - a1) / 2), this.eh = at.j7 - this.j7 - bg.a3F() * bY.gap
	}, this.lH = function() {
		a5H && (a5H = !1, a6F())
	}, this.x2 = function() {
		return !(!x2 || aI.gj && ef < Math.floor(bY.gap + 5.5 * this.j7))
	}, this.a4U = function(a6L) {
		return !!this.x2() && ef + a1 > at.a1 - a6L - bY.gap
	}, this.a2b = function() {
		x2 = !a9.gi
	}, this.a64 = function() {
		x2 = !1
	}, this.h0 = function() {
		return bH.ow(Math.floor(1024 * hu + .5) - 1, 0, 1023)
	}, this.a0S = function(kk, kl) {
		return this.x2() && ef < kk && kk < ef + a1 && kl > this.eh
	}, this.gm = function(kk, kl) {
		return !!this.x2() && !!aN.a0S(kk, kl) && (aO.m3 = !1, function(rI, kk, kl) {
			if (function(kk, kl) {
					return ef < kk && kk < ef + a6C && kl > aN.eh
				}(kk, kl)) return a6P(a6D);
			if (function(kk, kl) {
					return ef + a1 - a6C < kk && kk < ef + a1 && kl > aN.eh
				}(kk, kl)) return a6P(1 / a6D);
			return rI.gn = !0, a6Q(kk)
		}(this, kk, kl) && (bb.dc = !0), !0)
	}, this.a0V = function(mA) {
		0 !== a9.yT && this.x2() && a6P(mA) && (bb.dc = !0)
	}, this.a01 = function(deltaY) {
		var mA;
		return !(0 === deltaY || !this.x2()) && a6P(mA = 0 < deltaY ? (mA = 400 / (400 + deltaY)) < a6D ? a6D : mA : 1 / a6D < (mA = (400 - deltaY) / 400) ? 1 / a6D : mA)
	}, this.zy = function(kk) {
		return !!this.gn && a6Q(kk)
	}, this.a0O = function() {
		this.gn = !1
	}, this.iS = function() {
		this.x2() && a2U !== b6.fu.ht(a9.eI, this.h0()) && (a5H = !0)
	}, this.tM = function() {
		this.x2() && tN.drawImage(canvas, ef, this.eh)
	}
}

function ct() {
	var canvas, wj, a6R, font, a6S = 0,
		a6T = !1,
		a6U = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		a6V = 5;

	function a6b() {
		if (a6T) {
			var a7, eY = a6U.length,
				a6K = Math.floor(.5 * a6R.j7),
				j7 = eY * a6K,
				ef = Math.floor(Math.floor(a6R.ef) + .3 * a6R.a1 - .5),
				eh = Math.floor(Math.floor(a6R.eh) - j7),
				a1 = Math.floor(.4 * a6R.a1 + 2.5);
			for (tN.fillStyle = b7.mU, tN.fillRect(ef, eh, a1, j7), tN.fillStyle = b7.mx, tN.fillRect(ef, eh + a6V * a6K, a1, a6K), tN.fillStyle = b7.mY, tN.fillRect(ef, eh, 2, j7), tN.fillRect(ef, eh, a1, 2), tN.fillRect(ef + a1 - 2, eh, 2, j7),
				a7 = 1; a7 < eY; a7++) tN.fillRect(ef, eh + a7 * a6K, a1, 2);
			for (tN.fillStyle = b7.mY, b6.pP.textAlign(tN, 1), b6.pP.textBaseline(tN, 1), tN.font = b6.pP.rR(0, .6 * a6K), ef += .5 * a1, a7 = 0; a7 < eY; a7++) tN.fillText(a6j(a7), ef, eh + (a7 + .6) * a6K)
		}
		tN.drawImage(canvas, Math.floor(a6R.ef), Math.floor(a6R.eh))
	}

	function lI(rI) {
		var ef, ly, lz, a6K;
		wj.clearRect(0, 0, Math.floor(a6R.a1), Math.floor(a6R.j7)), wj.fillStyle = b7.mU, wj.fillRect(0, 0, Math.floor(a6R.a1), Math.floor(a6R.j7)), a9.m1 && (wj.fillStyle = b7.mx, wj.fillRect(0, 0, Math.floor(.3 * a6R.a1), Math.floor(a6R.j7))), wj
			.fillStyle = b7.mY, wj.fillText("Hide UI", .15 * a6R.a1, .5 * a6R.j7), wj.fillRect(Math.floor(.3 * a6R.a1 - .5), 0, 2, Math.floor(a6R.j7)), ef = .5 * a6R.a1, wj.fillText("Replay Speed", ef, .31 * a6R.j7), wj.fillText(a6j(a6V), ef, .69 *
				a6R.j7), wj.fillRect(Math.floor(.7 * a6R.a1 - .5), 0, 2, Math.floor(a6R.j7)), rI.a37 ? (ef = Math.floor(.02 * a6R.a1), rI = Math.floor(.025 * a6R.a1), ly = Math.floor(.85 * a6R.a1 - ef - .5 * rI), lz = Math.floor(.25 * a6R.j7), a6K =
				Math.floor(a6R.j7) - 2 * lz, wj.fillRect(ly, lz, ef, a6K), wj.fillRect(ly + ef + rI, lz, ef, a6K)) : function() {
				var a1 = Math.floor(.46 * a6R.j7),
					j7 = Math.floor(.23 * a6R.j7),
					ef = Math.floor(.85 * a6R.a1 - .5 * a1 + a1 / 12),
					eh = Math.floor(.5 * a6R.j7 - j7);
				wj.beginPath(), wj.moveTo(ef, eh), wj.lineTo(ef + a1, eh + j7), wj.lineTo(ef, eh + (j7 << 1)), wj.fill()
			}(), wj.fillRect(0, 0, Math.floor(a6R.a1), 2), wj.fillRect(0, 0, 2, Math.floor(a6R.j7)), wj.fillRect(0, Math.floor(a6R.j7) - 2, Math.floor(a6R.a1), 2), wj.fillRect(Math.floor(a6R.a1 - 2), 0, 2, Math.floor(a6R.j7))
	}

	function a6j(a7) {
		return 5 === a7 ? "Normal" : "" + a6U[a7]
	}
	this.a37 = !1, this.dU = function() {
		a9.gi && (a6V = 5, this.a37 = !1, a6T = !1, a6R = new q2([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.a6W = function() {
		return a6U[a6V]
	}, this.wf = function() {
		return a6R.eh
	}, this.a4U = function(a6L) {
		return !!a9.gi && a6R.ef + a6R.a1 > at.a1 - a6L - bY.gap
	}, this.resize = function() {
		a9.gi && (a6R.resize(), a6R.eh -= (bg.a3F() - 1) * bY.gap, font = b6.pP.rR(0, .3 * a6R.j7), (canvas = document.createElement("canvas")).width = Math.floor(a6R.a1), canvas.height = Math.floor(a6R.j7), (wj = canvas.getContext("2d", {
			alpha: !0
		})).font = font, b6.pP.textAlign(wj, 1), b6.pP.textBaseline(wj, 1), lI(this))
	}, this.a0Y = function(a6X) {
		0 === a9.yT || n.x2() || a6X !== a9.m1 && (a9.m1 = a6X, bd.resize(), bb.dc = !0, a9.gi) && (a6S = bb.lo + 2e3, lI(this))
	}, this.gm = function(ef, eh) {
		if (!a9.gi) return !1;
		if (ef < a6R.ef || eh < a6R.eh || ef > a6R.ef + a6R.a1) return a6T && function(rI, ef, eh) {
			var eY = a6U.length,
				a6K = Math.floor(.5 * a6R.j7),
				j7 = eY * a6K,
				ly = Math.floor(Math.floor(a6R.ef) + .3 * a6R.a1 - .5),
				j7 = Math.floor(Math.floor(a6R.eh) - j7),
				a1 = Math.floor(.4 * a6R.a1 + 2.5);
			return a6T = !1, bb.dc = !0, ef < ly || ly + a1 < ef || eh < j7 || (a6V = a6a(0, Math.floor((eh - j7) / a6K), eY - 1), lI(rI)), !0
		}(this, ef, eh);
		if ((ef -= a6R.ef) < .3 * a6R.a1) a6T = !1, this.a0Y(!a9.m1);
		else {
			if (ef < .7 * a6R.a1) return a6T = !a6T, bb.dc = !0;
			this.a0a(!1)
		}
		return !0
	}, this.a0a = function(a6Z) {
		2 === a9.yT ? (this.a0Y(!1), n.o(3)) : (a6T = !1, this.a37 = !this.a37, this.a37 ? (aI.gj && aI.a0Z(), u.v.setState(1)) : a6Z || aI.a3y(), bb.dc = !0, lI(this))
	}, this.a0b = function() {
		this.a37 = !1, aI.a3y(), bb.dc = !0, lI(this)
	}, this.a0H = function(ef, eh) {
		return !!a9.m1 && (0 <= aI.gm(ef, eh) || (a9.gi ? ((bb.lo > a6S || !this.gm(ef, eh)) && aO.gm(ef, eh), bb.dc = !0, a6S = bb.lo + 2e3) : aO.gm(ef, eh)), !0)
	}, this.iS = function() {
		a9.gi && a9.m1 && bb.lo > a6S - 1e3 && bb.lo < a6S && (bb.dc = !0)
	}, this.yb = function() {
		a9.gi && (this.a37 = !1, bb.dc = !0, lI(this))
	}, this.tM = function() {
		if (a9.gi) {
			if (a9.m1) {
				if (bb.lo > a6S) return;
				if (bb.lo > a6S - 1e3) return tN.globalAlpha = a6a(0, (1e3 - (bb.lo - (a6S - 1e3))) / 1e3, 1), a6b(), void(tN.globalAlpha = 1)
			}
			a6b()
		}
	}
}

function cD() {
	var a6k, a6l, a1, ef, eh, a6m, a6n;
	this.dU = function() {
		a6k = new Array(2), a6l = new Array(2), this.m3 = !1, a6n = a6m = hx = hv = 0, hw = 1, this.resize()
	}, this.resize = function() {
		a1 = (a1 = Math.floor((u.v.r4() ? .072 : .0502) * at.pR)) < 8 ? 8 : a1;
		for (var a7 = 1; 0 <= a7; a7--) a6k[a7] = document.createElement("canvas"), a6k[a7].width = a1, a6k[a7].height = a1, a6l[a7] = a6k[a7].getContext("2d", {
			alpha: !0
		});
		this.a6E(),
			function() {
				for (var a72 = Math.floor(1 + a1 / 20), a7 = 1; 0 <= a7; a7--) a6l[a7].clearRect(0, 0, a1, a1), a6l[a7].fillStyle = b7.mR, a6l[a7].beginPath(), a6l[a7].arc(a1 / 2, a1 / 2, a1 / 2 - a72, 0, 2 * Math.PI), a6l[a7].fill(), a6l[a7]
					.lineWidth = a72, a6l[a7].fillStyle = b7.mY, a6l[a7].strokeStyle = b7.mY, a6l[a7].beginPath(), a6l[a7].arc(a1 / 2, a1 / 2, a1 / 2 - a72, 0, 2 * Math.PI), a6l[a7].stroke(), wm(a6l[a7], 0, 0, a1, a72, .3, 0 === a7)
			}()
	}, this.we = function() {
		return -hv / hw
	}, this.wf = function() {
		return -hx / hw
	}, this.mD = function(a6r, hd) {
		hv = hw * a6r - hd
	}, this.mE = function(a6s, he) {
		hx = hw * a6s - he
	}, this.gm = function(a6q, a4V) {
		return a9.m1 || ! function(a6q, a4V) {
			return Math.pow(a6q - (ef + a1 / 2), 2) + Math.pow(a4V - (eh + a1 / 2), 2) < a1 * a1 / 4 || Math.pow(a6q - (ef + a1 / 2), 2) + Math.pow(a4V - (eh + 2 * a1), 2) < a1 * a1 / 4
		}(a6q, a4V) || bf.dp.data[8].value ? (aD.mG() && (this.m3 = !0, a6m = a6q, a6n = a4V), !1) : a4V < eh + 1.25 * a1 ? this.a01(Math.floor(at.a1 / 2), Math.floor(at.j7 / 2), -200) : this.a01(Math.floor(at.a1 / 2), Math.floor(at.j7 / 2),
			200)
	}, this.zy = function(a6q, a4V) {
		var a6t, a6u, hg, hj;
		return !aD.mG() || (a6t = hv, a6u = hx, hv += hg = a6m - a6q, hx += hj = a6n - a4V, ab.zy(hg, hj), this.a6v(), a6m = a6q, a6n = a4V, a6t !== hv) || a6u !== hx
	}, this.a01 = function(kk, kl, deltaY) {
		var mA;
		if (aD.mG()) {
			if (0 < deltaY) mA = (mA = 500 / (500 + deltaY)) < .5 ? .5 : mA;
			else {
				if (!(deltaY < 0)) return !1;
				mA = 2 < (mA = (500 - deltaY) / 500) ? 2 : mA
			}
			this.a6w(kk, kl, mA), bb.dc = !0
		}
		return !0
	}, this.a6w = function(ef, eh, eC) {
		var a0s;
		eC = a0s = (a0s = 1024 < (a0s = eC) * hw ? 1024 / hw : a0s) * hw < .125 ? .125 / hw : a0s, ab.zoom(eC, ef, eh),
			function(a0s, kk, kl) {
				hw *= a0s, hv = (hv + kk) * a0s - kk, hx = (hx + kl) * a0s - kl, aO.a6v()
			}(eC, ef, eh)
	}, this.a6v = function() {
		var a6z = at.a1 / 16,
			hN = 0,
			a70 = at.j7 / 16,
			hO = 0;
		hv < -at.a1 + a6z && (hN = -at.a1 + a6z - hv), hv > hw * bO.ej - a6z && (hN = hw * bO.ej - a6z - hv), hx < -at.j7 + a70 && (hO = -at.j7 + a70 - hx), hx > hw * bO.ek - a70 && (hO = hw * bO.ek - a70 - hx), hv += hN, hx += hO, bW.mF(), ab
			.a71(hN, hO)
	}, this.a6E = function() {
		ef = at.a1 - a1 - bY.gap, eh = Math.floor(at.j7 / 2 - 1.25 * a1)
	}, this.tM = function() {
		bf.dp.data[8].value || (tN.drawImage(a6k[0], ef, eh), tN.drawImage(a6k[1], ef, Math.floor(eh + 3 * a1 / 2)))
	}
}

function cE() {
	var g, a73, a74, a75, gap, a76, a77, a78, a79, a7A, a3s, a7B, gd, a7C, a5O, a7D, a7E, a7F;

	function a7J() {
		a75 = Math.floor(.2 * (u.v.r4() ? .07 : .035) * at.pR), a75 = a4S(u.v.r4() ? 3 : 1, a75);
		var a7M = at.a1 / (g.length + gap);
		a75 = a75 < a7M ? a7M : a75, a5O = Math.floor((1 - gap) * a75), a73 = 0, a7N()
	}

	function a7N() {
		a73 = (a73 = a73 < -20 ? -20 : a73) > (g.length - 15) * a75 ? (g.length - 15) * a75 : a73, a77 = Math.floor(a73 / a75), a78 = (a78 = a77 + Math.floor(at.a1 / a75)) > g.length - 1 ? g.length - 1 : a78, a77 = (a77 = a78 < a77 ? a78 : a77) < 0 ?
			0 : a77;
		var kP = a78;
		a76 = a74 / g[kP];
		for (var a7 = a78 - 1; a77 <= a7; a7--) g[a7] > g[kP] && (kP = a7, a76 = a74 / Math.pow(g[a7], a7C))
	}

	function a7Q(ef) {
		ef = Math.floor((a73 + at.a1 - ef - gap * a75) / a75);
		return (ef = ef < -1 ? -1 : -1 === ef ? 0 : ef > g.length - 1 ? -1 : ef) !== a79 && (a79 = ef, -1 === a7D && 0 === a79 && aP.a7G && (a7D = setInterval(a7R, 100)), 1)
	}

	function a7S(a7) {
		var a5E = Math.floor(a76 * Math.pow(g[a7], a7C));
		tN.fillRect(a73 + at.a1 - (a7 + 1) * a75, at.j7 - a5E, a5O, a5E)
	}

	function a7R() {
		var g6;
		0 !== (a79 = 8 === aW.zb() ? -1 : a79) ? (a7E = (new Date).getTime(), clearInterval(a7D), a7D = -1) : (g6 = g[1] / 864e3, -1 !== a7E && (g6 += ((new Date).getTime() - a7E) * g[1] / 864e5, a7E = -1), 0 < g6 && (g[0] += Math.floor(g6), bb
			.dc = !0))
	}
	this.a7G = !1, this.dU = function() {
		a7E = a7D = -1, a79 = -(a7C = 1), this.a7H = !1, gd = 0, a7B = new Date, a73 = 0, gap = .3, (a7F = []).push({
			g1: "Plateau A",
			eY: 0,
			e: 57
		}), a7F.push({
			g1: "Max A",
			eY: 1,
			e: 1
		}), a7F.push({
			g1: "Black Friday",
			eY: 15,
			e: 15
		}), a7F.push({
			g1: "Max B",
			eY: 19,
			e: 19
		}), a7F.push({
			g1: "Max C",
			eY: 44,
			e: 44
		}), a7F.push({
			g1: "First Android Version",
			eY: 58,
			e: 58
		}), a7F.push({
			g1: "Max D",
			eY: 67,
			e: 67
		}), a7F.push({
			g1: "The iFrame Explosion",
			eY: 98,
			e: 99
		}), a7F.push({
			g1: "The 155-Day Uptrend",
			eY: 58,
			e: 213
		}), a7F.push({
			g1: "Max E",
			eY: 213,
			e: 213
		}), a7F.push({
			g1: "Plateau B",
			eY: 214,
			e: 259
		}), a7F.push({
			g1: "Turbulent Times",
			eY: 260,
			e: 344
		}), a7F.push({
			g1: "Max F",
			eY: 262,
			e: 262
		}), a7F.push({
			g1: "Max G",
			eY: 282,
			e: 282
		}), a7F.push({
			g1: "Max H",
			eY: 333,
			e: 333
		}), a7F.push({
			g1: "The 19-Day Downtrend",
			eY: 283,
			e: 301
		}), a7F.push({
			g1: "Plateau C",
			eY: 345,
			e: 385
		}), a7F.push({
			g1: "The Alliance Ascent",
			eY: 386,
			e: 395
		}), a7F.push({
			g1: "Max I",
			eY: 395,
			e: 395
		}), a7F.push({
			g1: "First iOS Version",
			eY: 411,
			e: 411
		}), a7F.push({
			g1: "Plateau D",
			eY: 396,
			e: 453
		}), a7F.push({
			g1: "The TikTok Revolution",
			eY: 454,
			e: 470
		}), a7F.push({
			g1: "Max J",
			eY: 456,
			e: 456
		}), a7F.push({
			g1: "Max K",
			eY: 472,
			e: 472
		}), a7F.push({
			g1: "Max L",
			eY: 478,
			e: 478
		}), a7F.push({
			g1: "YT Drew",
			eY: 471,
			e: 485
		}), a7F.push({
			g1: "Plateau E",
			eY: 485,
			e: 600
		}), a7F.push({
			g1: "Uptrend A",
			eY: 600,
			e: 613
		}), a7F.push({
			g1: "Max M",
			eY: 613,
			e: 613
		}), a7F.push({
			g1: "Downtrend A",
			eY: 614,
			e: 635
		}), a7F.push({
			g1: "Plateau F",
			eY: 636,
			e: 737
		}), a7F.push({
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
		a74 = Math.floor(.15 * at.j7), a7A = (a7A = Math.floor((u.v.r4() ? .018 : .0137) * at.pR)) < 2 ? 2 : a7A, a3s = b6.pP.rR(1, a7A), a7J()
	}, this.a7K = function(a7L) {
		var a7;
		for (this.a7G = !0, a7 = 0; a7 < a7L.length; a7++) g.unshift(a7L[a7]);
		a7J(), bb.dc = !0
	}, this.a7O = function() {
		a7N()
	}, this.zy = function(ef, eh) {
		eh > at.j7 - .6 * a74 ? this.a7H ? ef !== gd && (a73 += ef - gd, gd = ef, a7N(), a7Q(ef), this.a7H = -1 !== a79, bb.dc = !0) : a7Q(ef) && (bb.dc = !0) : this.qR()
	}, this.qR = function() {
		-1 !== a79 && (this.a7H = !1, a79 = -1, bb.dc = !0)
	}, this.a01 = function(ef, deltaY) {
		-1 !== a79 && (a73 += Math.floor(deltaY), a7N(), a7Q(ef), bb.dc = !0)
	}, this.gm = function(ef, eh) {
		this.zy(ef, eh), -1 !== a79 && (gd = ef, this.a7H = !0)
	}, this.a0N = function() {
		-1 !== a79 && (this.a7H = !1)
	}, this.tM = function() {
		tN.fillStyle = b7.mb;
		for (var a7U, month, dk, rw, a7X, a7Y, lz, a7Z, a7a, a7 = a78; a77 <= a7; a7--) a7S(a7);
		this.a7G && 0 === a77 && (tN.fillStyle = b7.n7, a7S(0)), -1 !== a79 && (tN.fillStyle = b7.ma, a7S(a79)), -1 !== a79 && (tN.font = a3s, b6.pP.textBaseline(tN, 2), (dk = new Date).setTime(a7B.getTime() - 1e3 * a79 * 60 * 60 * 24), month =
			"month", a7U = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(dk), a7U = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(dk)), a7U = a7U + ", " + dk.getUTCDate() + " " + month + " " + dk.getFullYear(), month = 1 === g[a79] ? L(97) : L(98), month = b6.z3.xl(g[a79]) + " " + month, dk = Math.floor(tN.measureText(a7U).width), rw = Math.floor(
				tN.measureText(month).width), a7X = Math.floor(.5 * (dk + a7A)), a7Y = (a7Y = a73 + at.a1 - (a79 + 1) * a75) < a7X ? a7X : a7Y > at.a1 - a7X ? at.a1 - a7X : a7Y, lz = at.j7 - Math.floor(a76 * Math.pow(g[a79], a7C)), a7Z = Math
			.floor(1.1 * a7A), a7a = lz > at.j7 - a7Z ? at.j7 - a7Z : lz, tN.fillStyle = b7.mV, tN.fillRect(at.a1 - rw - a7A, a7a - a7Z, rw + a7A, a7Z), tN.fillRect(a7Y - a7X, at.j7 - a7Z, dk + a7A, a7Z), tN.fillStyle = b7.mY, b6.pP
			.textAlign(tN, 2), tN.fillText(month, Math.floor(at.a1 - .5 * a7A), a7a),
			function(lz, a7Z) {
				for (var rv, kR = -1, e0 = g.length - a79 - 1, a7 = a7F.length - 1; 0 <= a7; a7--) e0 >= a7F[a7].eY && e0 <= a7F[a7].e && (-1 === kR || a7F[a7].e - a7F[a7].eY < a7F[kR].e - a7F[kR].eY) && (kR = a7); - 1 !== kR && (rv = Math
					.floor(tN.measureText(a7F[kR].g1).width), tN.fillStyle = b7.mV, tN.fillRect(at.a1 - rv - a7A, lz, rv + a7A, a7Z), tN.fillStyle = b7.mY, tN.fillText(a7F[kR].g1, Math.floor(at.a1 - .5 * a7A), lz + a7Z))
			}(a7a - 2 * a7Z, a7Z), b6.pP.textAlign(tN, 1), tN.fillText(a7U, a7Y, at.j7), tN.strokeStyle = b7.mc, tN.lineWidth = 1, tN.beginPath(), tN.moveTo(0, lz), tN.lineTo(at.a1, lz), tN.closePath(), tN.stroke())
	}
}

function cF() {
	var a3s, a1, eh, a7c, a7d, canvas, wj, a5H, a1s, a7e, a7f, a7g, a7h;
	this.ef = 0, this.j7 = 0, this.dU = function() {
		a7d = a9.a2j, a7f = "rgba(0,100,0,0.8)", a7g = "rgba(150,0,0,0.8)", a5H = !(a7e = !0), a1s = ac.ga[a9.eI], this.resize()
	}, this.resize = function() {
		a1 = Math.floor((u.v.r4() ? .305 : .24) * at.pR), this.j7 = Math.floor(.5 + .13 * a1), a1 = Math.floor(6 * this.j7), a3s = b6.pP.rR(1, Math.floor(.8 * this.j7)), a7h = Math.floor(.5 * this.j7), bO.v1.font = a3s, eh = bY.gap, a7c = Math
			.floor(1 + .13 * this.j7), (canvas = document.createElement("canvas")).width = a1, canvas.height = this.j7, (wj = canvas.getContext("2d", {
				alpha: !0
			})).font = a3s, b6.pP.textBaseline(wj, 1), b6.pP.textAlign(wj, 1), this.a7i()
	}, this.a5e = function() {
		return u.v.r4() && at.a1 < 1.2 * at.j7
	}, this.a6E = function() {
		this.a5e() ? this.ef = at.a1 - a1 - bY.gap : this.ef = Math.floor(aR.a7j() + (at.a1 - aR.a7j() - aS.a1 - a1) / 2 - .5 * bY.gap)
	}, this.lH = function() {
		a5H && (a5H = !1, this.a7i())
	}, this.a7i = function() {
		wj.clearRect(0, 0, a1, this.j7), wj.fillStyle = a7e ? a7f : a7g, wj.fillRect(0, 0, a1, this.j7), wj.fillStyle = b7.ma, this.a7k(), this.a7l(), wj.fillStyle = ac.ga[a9.eI] >= aa.jK(a9.eI) ? b7.n4 : b7.mY, wj.fillText(b6.z3.xl(a1s), Math
			.floor(a1 / 2), a7h), wj.fillStyle = b7.mY, wj.fillRect(0, 0, a1, 1), wj.fillRect(0, 0, 1, this.j7), wj.fillRect(0, this.j7 - 1, a1, 1), wj.fillRect(a1 - 1, 0, 1, this.j7)
	}, this.a7k = function() {
		var et = bb.jb() % 100,
			et = (et = 9 - bH.dl(et -= et % 10, 10), Math.floor(et * (this.j7 - a7c) / 9));
		wj.fillRect(0, et, a7c, this.j7 - et), wj.fillRect(a1 - a7c, et, a7c, this.j7 - et)
	}, this.a7l = function() {
		wj.fillRect(a7c, this.j7 - a7c, Math.floor((a1 - 2 * a7c) * ac.ga[a9.eI] / a7d), a7c)
	}, this.iS = function() {
		var g6 = a9.eI;
		b6.fu.gl(g6) && (g6 = ac.ga[g6] - ac.a1r[g6], a1s !== g6 ? (a7d = a4S(g6, a7d), a7e = a1s < g6 && 10 <= g6, a1s = g6, a5H = !0) : bb.jb() % 10 == 9 && (a5H = !0))
	}, this.tM = function() {
		0 === ac.lV[a9.eI] || a9.gu || 2 === ac.a1l[a9.eI] || tN.drawImage(canvas, this.ef, eh)
	}
}

function cG() {
	var a7m, a7n, a7o, a7p, a7q, a7r, a7s, a7t, a7u, a7v, a7w, a7x, a7y, a7z, a80, a81, a82, a83, a84, a85, a86, a87, position, a88, a89, a8A, a8B, a8C = 1,
		a8D = 1,
		a8E = "";
	var leaderboardHasChanged = true;
	this.playerPos = a9.eI;
	__fx.leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		__fx.leaderboardFilter.filteredLeaderboard = __fx.leaderboardFilter.playersToInclude
			.map(id => jP[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = __fx.leaderboardFilter.filteredLeaderboard.indexOf(jP[a9.eI]);
	}

	function a8G() {
		a7s.clearRect(0, 0, a7m, a5u),
			a7s.fillStyle = b7.nL,
			a7s.fillRect(0, 0, a7m, a7x),
			a7s.fillStyle = b7.mU,
			a7s.fillRect(0, a7x, a7m, a5u - a7x);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			jP[a9.eI]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) a87 = -1;
		if (__fx.leaderboardFilter.enabled && a87 >= __fx.leaderboardFilter.filteredLeaderboard.length) a87 = -1;
		playerPos >= position && a8I(playerPos - position, b7.mx),
			0 !== jP[a9.eI] && 0 === position && a8I(0, b7.nQ),
			-1 !== a87 && a8I(a87, b7.mZ),
			a7s.fillStyle = b7.mU,
			//console.log("drawing", a87),
			a7s.clearRect(0, a5u - __fx.leaderboardFilter.tabBarOffset, a7m, __fx.leaderboardFilter.tabBarOffset);
		a7s.fillRect(0, a5u - __fx.leaderboardFilter.tabBarOffset, a7m, __fx.leaderboardFilter.tabBarOffset);
		a7s.fillStyle = b7.mY,
			a7s.fillRect(0, a7x, a7m, 1),
			a7s.fillRect(0, a5u - __fx.leaderboardFilter.tabBarOffset, a7m, 1),
			__fx.leaderboardFilter.drawTabs(a7s, a7m, a5u - __fx.leaderboardFilter.tabBarOffset, b7.mx),
			a7s.fillRect(0, 0, a7m, bY.xU),
			a7s.fillRect(0, 0, bY.xU, a5u),
			a7s.fillRect(a7m - bY.xU, 0, bY.xU, a5u),
			a7s.fillRect(0, a5u - bY.xU, a7m, bY.xU), a7s.font = a7n, b6.pP.textBaseline(a7s, 1), b6.pP.textAlign(a7s, 1), a7s.fillText(a8E, Math.floor((a7m + a7x - 22) / 2), Math.floor(a7v + a7o / 2));
		__fx.playerList.drawButton(a7s, 12, 12, a7x - 22);
		var er, g7 = playerPos < position + a7q - 1 ? 1 : 2;

		if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - a7q)
				position = (result.length > a7q ? result.length : a7q) - a7q;
			//if (position >= result.length) position = result.length - 1;
			for (a7s.font = a7p, b6.pP.textAlign(a7s, 0), er = a7q - g7; 0 <= er; er--) {
				const pos = result[er + position];
				if (pos !== undefined)
					a8J(kw[pos]), a8K(er, pos, kw[pos]);
			}
			for (b6.pP.textAlign(a7s, 2), er = a7q - g7; 0 <= er; er--) {
				const pos = result[er + position];
				if (pos !== undefined)
					a8J(kw[pos]), a8L(er, kw[pos]);
			}
		} else {
			for (a7s.font = a7p, b6.pP.textAlign(a7s, 0), er = a7q - g7; 0 <= er; er--)
				a8J(kw[er + position]), a8K(er, er + position, kw[er + position]);
			for (b6.pP.textAlign(a7s, 2), er = a7q - g7; 0 <= er; er--)
				a8J(kw[er + position]), a8L(er, kw[er + position]);
		}
		2 == g7 && (a8J(a9.eI), b6.pP.textAlign(a7s, 0), a8K(a7q - 1, jP[a9.eI], a9.eI), b6.pP.textAlign(a7s, 2), a8L(a7q - 1, a9.eI)), 0 === position && (g7 = .7 * a7y / aX.get(4).height, a7s.setTransform(g7, 0, 0, g7, Math.floor(a7z + .58 * a7y +
			.5 * g7 * aX.get(4).width), Math.floor(a7v + a7o + .4 * a7y)), a7s.imageSmoothingEnabled = !0, a7s.drawImage(aX.get(4), -Math.floor(aX.get(4).width / 2), -Math.floor(aX.get(4).height / 2)), a7s.setTransform(1, 0, 0, 1, 0, 0))
	}

	function a8J(player) {
		a9.ie && (a7s.fillStyle = bc.a8N[bc.k4[bc.eW[player]]])
	}

	function a8I(a7, a8O) {
		a7s.fillStyle = a8O, a7 = a7q - 1 < a7 ? a7q - 1 : a7;
		a8O = Math.floor((a7 === a7q - 1 ? 2 : 0 === a7 ? 1.15 : 1) * a7y), a8O = a7 === a7q - 2 ? Math.floor(a7x + 9.15 * a7y) - Math.floor(a7x + 8.15 * a7y) : a8O;
		a7s.fillRect(0, Math.floor(a7x + (a7 + (0 === a7 ? 0 : .15)) * a7y), a7m, a8O)
	}

	function a8K(a8Q, qt, a7) {
		a7s.fillText(a83[qt], a7z, Math.floor(a7v + a7o + (a8Q + .5) * a7y)), 1 === ac.a1l[a7] && (a7s.font = "italic " + a7p);
		qt = Math.floor(a7v + a7o + (a8Q + .5) * a7y);
		a7s.fillText(ac.z1[a7], a80, qt), 0 !== ac.a1l[a7] && (a7s.font = a7p), a7 < a9.je && 2 !== ac.a1l[a7] || a7s.fillRect(a80, qt + .35 * a8C, a82[a7], Math.max(1, .1 * a8C))
	}

	function a8L(a8Q, a7) {
		a7s.fillText(ac.gM[a7], a81, Math.floor(a7v + a7o + (a8Q + .5) * a7y))
	}

	function a8Z(eh) {
		return (eh -= bY.gap + a7x) < 0 ? Math.floor(eh / a7y) - 1 : eh < (a7q - 1) * a7y ? Math.floor(eh / a7y) : eh < a5u - a7x ? a7q - 1 : (eh -= a5u - a7x, a7q + Math.floor(eh / a7y))
	}

	function xT(ef, eh) {
		return ef >= bY.gap && ef < bY.gap + a7m && eh >= bY.gap && eh < bY.gap + a5u
	}
	this.dU = function() {
			var a7;
			for (a89 = !1, a8B = a8A = a88 = 0, a87 = -1, a7q = u.v.r4() ? 6 : 10, a8D = (position = 0) === (a8D = bf.dp.data[11].value) ? 10 : 1 === a8D ? 5 : 1, a86 = !1, a84 = new Uint16Array(a7q + 1), a85 = new Uint32Array(a7q + 1), a7u = a9.eV,
				kw = new Uint16Array(a7u), jP = new Uint16Array(a7u), a7 = a7u - 1; 0 <= a7; a7--) kw[a7] = a7, jP[a7] = a7;
			this.resize(!0), a82 = new Uint16Array(a9.eV);
			var a8F = Math.floor(a7m - a80 - a7z - a7t);
			for (a83 = new Array(a9.eV), a7s.font = a7p, a7 = a9.eV - 1; 0 <= a7; a7--) a83[a7] = a7 + 1 + ".", ac.z1[a7] = b6.wj.a1S(ac.a4h[a7], a7p, a8F), a82[a7] = Math.floor(a7s.measureText(ac.z1[a7]).width);
			a8G()
		}, this.resize = function(dU) {
			if (a5u = u.v.r4() ? (a7m = Math.floor(.335 * at.pR), Math.floor(a7q * a7m / 8)) : (a7m = Math.floor(.27 * at.pR), Math.floor(a7q * a7m / 10)), a7m = Math.floor(.97 * a7m), (a7r = document.createElement("canvas")).width = a7m, a7r
				.height = a5u, a7s = a7r.getContext("2d", {
					alpha: !0
				}), a7v = .025 * a7m, a7o = .16 * a7m, a7w = 0 * a7m, a7x = Math.floor(.45 * a7v + a7o), a7y = (a5u - a7o - 2 * a7v - a7w) / a7q,
				a7r.height = a5u += a7y, __fx.leaderboardFilter.tabBarOffset = Math.floor(a7y * 1.3), __fx.leaderboardFilter.verticalClickThreshold = a5u - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = a7m,
				a7n = b6.pP.rR(1, Math.floor(.55 * a7o)), a8C = Math.floor((u.v.r4() ? .67 : .72) * a7y), a7p = b6.pP.rR(0, a8C), a7s.font = a7p, a7z = Math.floor(.04 * a7m), a80 = Math.floor((u.v.r4() ? .195 : .18) * a7m), a7t = Math.floor(a7s
					.measureText("00920600").width), a7s.font = a7n, a81 = a7m - a7z, !dU) {
				a7s.font = a7p;
				for (var a7 = a9.eV - 1; 0 <= a7; a7--) a82[a7] = Math.floor(a7s.measureText(ac.z1[a7]).width);
				a8G()
			}
			a8E = b6.wj.a1S(L(99), a7n, .96 * a7m)
		}, this.a7j = function() {
			return a7m
		}, this.lH = function(bo, a8H) {
			(a8H || a86 && (bo || bb.jb() % a8D == 0)) && (a86 = !1, a8G())
		}, this.iS = function() {
			! function() {
				for (var er = a7u - 1; 0 <= er; er--) 0 === ac.lV[kw[er]] && ! function(er) {
					var a8X = kw[er];
					a7u--;
					for (var a7 = er; a7 < a7u; a7++) kw[a7] = kw[a7 + 1], jP[kw[a7]] = a7;
					kw[a7u] = a8X, jP[kw[a7u]] = a7u
				}(er)
			}();
			for (var a8V, mG = a7u - 1, er = 0; er < mG; er++) ac.gM[kw[er]] < ac.gM[kw[er + 1]] && (a8V = kw[er], kw[er] = kw[er + 1], kw[er + 1] = a8V, jP[kw[er]] = er, jP[kw[er + 1]] = er + 1);
			! function() {
				for (var dk = a86, g7 = (a86 = !0, jP[a9.eI] >= a7q - 1 ? a7q - 2 : a7q - 1), a7 = g7; 0 <= a7; a7--)
					if (a84[a7] !== kw[a7] || a85[a7] !== ac.gM[kw[a7]]) return;
				(g7 != a7q - 2 || a84[a7q] === jP[a9.eI] && a85[a7q] === ac.gM[a9.eI]) && (a86 = dk)
			}();
			for (var a7 = a7q - 1; 0 <= a7; a7--) a84[a7] = kw[a7], a85[a7] = ac.gM[kw[a7]];
			a84[a7q] = jP[a9.eI], a85[a7q] = ac.gM[a9.eI];
			leaderboardHasChanged = true;
		}, __fx.leaderboardFilter.scrollToTop = function() {
			position = 0;
		}, this.gm = function(ef, eh) {
			return !!xT(ef, eh) && ((__fx.utils.isPointInRectangle(ef, eh, bY.gap + 12, bY.gap + 12, a7x - 22, a7x - 22) && __fx.playerList.display(ac.a4h), true) &&
				!(eh - bY.gap > __fx.leaderboardFilter.verticalClickThreshold && __fx.leaderboardFilter.handleMouseDown(ef - bY.gap)) && (a88 = bb.lo, a89 = !0, a8A = a8B = a8Z(eh), bF.a0c() && (ef = a6a(-1, a8B, a7q), a87 !== (ef = ef === a7q ?
					-1 : ef)) && (a87 = ef, a8G(), bb.dc = !0)), !0)
		}, __fx.leaderboardFilter.repaintLeaderboard = function() {
			a8G(), bb.dc = !0;
		},
		this.zy = function(ef, eh) {
			if (__fx.utils.isPointInRectangle(ef, eh, bY.gap + 12, bY.gap + 12, a7x - 22, a7x - 22)) {
				__fx.playerList.hoveringOverButton === false && (__fx.playerList.hoveringOverButton = true, a8G(), bb.dc = !0);
			} else {
				__fx.playerList.hoveringOverButton === true && (__fx.playerList.hoveringOverButton = false, a8G(), bb.dc = !0);
			}
			if (__fx.leaderboardFilter.setHovering(
					__fx.utils.isPointInRectangle(ef, eh, bY.gap, bY.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth, __fx.leaderboardFilter.tabBarOffset), ef - bY.gap
				)) return;
			var dk, a8Y = a8Z(eh);
			return a89 ? (dk = position, (position = a6a(0, position += a8A - a8Y, a9.eV - a7q)) !== dk && (a8Y = (a8Y = a6a(-1, a8A = a8Y, a7q)) !== a7q && xT(ef, eh) ? a8Y : -1, a87 = a8Y, a8G(), bb.dc = !0), !0) : (a8Y = (a8Y = a6a(-1, a8Y,
				a7q)) === a7q || !xT(ef, eh) || bF.a0c() ? -1 : a8Y, a87 !== a8Y && (a87 = a8Y, a8G(), bb.dc = !0))
		}, this.a0N = function(ef, eh) {
			if (!a89) return !1;
			a89 = !1;
			var a8Y = a8Z(eh);
			var isEmptySpace = false;
			return bF.a0c() && -1 !== a87 && (a87 = -1, a8G(), bb.dc = !0), bb.lo - a88 < 350 && a8B === a8Y && -1 !== (a8Y = (a8Y = a6a(-1, a8Y, a7q)) !== a7q && xT(ef, eh) ? a8Y : -1) && (ef = (__fx.leaderboardFilter.enabled ? (updateFilteredLb(),
					kw[__fx.leaderboardFilter.filteredLeaderboard[a8Y + position] ?? (isEmptySpace = true, jP[a9.eI])]) : kw[a8Y + position]), a8Y === a7q - 1 && (__fx.leaderboardFilter.enabled ? this.playerPos : jP[a9.eI]) >=
				position + a7q - 1 && (ef = a9.eI), !isEmptySpace && a9.ie && __fx.donationsTracker.displayHistory(ef, ac.a4h, a9.k0), 0 !== ac.lV[ef] && !isEmptySpace) && aD.ls(ef, 800, !1, 0), !0
		}, this.a01 = function(ef, eh, deltaY) {
			var a8a;
			return !(a89 || a9.m1 || (a8a = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !xT(ef, eh)) || (ef = (ef = a6a(-1, a8Z(eh), a7q)) === a7q || bF.a0c() ? -1 : ef, 0 < deltaY ? position < a9.eV - a7q && (position += Math.min(a9.eV - a7q -
				position, a8a), a87 = ef, a8G(), bb.dc = !0) : 0 < position && (position -= Math.min(position, a8a), a87 = ef, a8G(), bb.dc = !0), 0))
		}, this.tM = function() {
			tN.drawImage(a7r, bY.gap, bY.gap)
		}
}

function cH() {
	var canvas, wj, ef, eh, a5E, a8b, gap, a8c, fontSize, a8d, a8e, a8f, a8g, a8h, a8i, a8j, a8k, a8l;

	function a8p() {
		wj.clearRect(0, 0, aS.a1, aS.j7), wj.fillStyle = b7.mV, wj.fillRect(0, 0, aS.a1, aS.j7), wj.fillStyle = b7.ms, eC = 0 < a8j ? a8j : Math.sqrt(a8g[4] / 1e4), wj.fillRect(0, aS.j7 - a5E - 1, Math.floor(eC * aS.a1), a5E), wj.fillStyle = b7.mY,
			wj.fillRect(0, 0, aS.a1, 1), wj.fillRect(0, 0, 1, aS.j7), wj.fillRect(aS.a1 - 1, 0, 1, aS.j7), wj.fillRect(0, aS.j7 - 1, aS.a1, 1), wj.fillRect(0, aS.j7 - a5E - 1, aS.a1, 1);
		for (var eC, a8r, dk = 0, a7 = 0; a7 < a8f.length; a7++) a8h[a7] ? (b6.pP.textAlign(wj, 0), a8r = Math.floor((a8b - a5E + 2 * a8c) * (a7 - dk + 1) / (a8f.length + 1) - .7 * a8c), wj.fillText(a8f[a7], gap, a8r), b6.pP.textAlign(wj, 2), 5 ===
			a7 && 0 !== ac.lV[a9.eI] && ac.ga[a9.eI] >= aa.jK(a9.eI) ? (wj.fillStyle = b7.nO, wj.fillText(a8n(a7), aS.a1 - gap, a8r), wj.fillStyle = b7.mY) : wj.fillText(a8n(a7), aS.a1 - gap, a8r)) : dk++
	}

	function a8n(a7) {
		return a7 < 3 ? a8g[a7].toString() : 3 === a7 || 4 === a7 || 5 === a7 ? b6.z3.a2N(a8g[a7] / 100, 2) : a7 < 7 ? b6.z3.xl(a8g[a7]) : a7 === 7 ? aS.a8s(a8g[7]) : a7 === 8 ? __fx.utils.getMaxTroops(ac.gM, a9.eI) : __fx.utils.getDensity(a9.eI)
	}

	function a8m() {
		ac.gM[a9.eI] !== a8g[6] && (a8g[6] = ac.gM[a9.eI], a8d++)
	}
	this.dU = function() {
		a8j = a8k = 0, (a8e = new Array(8))[0] = L(100), a8e[1] = a9.k0 ? L(101) : L(102), a8e[2] = L(103), a8e[3] = L(104), a8e[4] = L(105), a8e[5] = L(106, 0, "Interest"), a8e[6] = L(107), a8e[7] = L(108),
			a8e.push("Max Troops", "Density"), // add a8e
			(a8f = new Array(a8e.length)).fill(""), (a8g = new Array(a8e.length))[0] = a9.k0 ? 0 : a9.je, a8g[1] = a9.k0 ? ah.jf : a9.k2, a8g[2] = a9.yV, a8g[3] = 0, a8g[4] = bH.dl(1e4 * ac.gM[0], Math.max(a9.jO, 1)), a8g[5] = 0 === a9.data
			.iIncomeType ? 700 : 1 === a9.data.iIncomeType ? bH.dl(700 * a9.data.iIncomeValue, 64) : bH.dl(700 * a9.data.iIncomeData[a9.eI], 64), a8g[6] = 0, a8m(), a8g[7] = 0, a8i = a8n(6), a8h = new Array(a8e.length);
		for (var a7 = a8e.length - 1; 0 <= a7; a7--) a8h[a7] = !0;
		a8l = 0, a8l = a9.k0 ? (a8h[0] = !1, a8h[2] = !1, a8h[3] = !1, 3) : (a8h[3] = !1, 1), a8d = 0, this.resize()
	}, this.resize = function() {
		this.a1 = Math.floor((u.v.r4() ? .1646 : .126) * 1.25 * at.pR), this.j7 = Math.floor(1.18 * this.a1), a5E = Math.floor(.04 * this.a1), gap = Math.floor(.035 * this.a1), a8c = .04 * this.a1, a8b = this.j7, this.j7 -= Math.floor(a8l * (this
			.j7 - 2 * a5E) / a8e.length), fontSize = Math.floor(.7 * (a8b - a5E) / a8e.length);
		var a3s = b6.pP.rR(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.a1, canvas.height = this.j7,
			function(a3s, a1) {
				for (var a7 = 0; a7 < a8f.length; a7++) a8f[a7] = b6.wj.a1S(a8e[a7], a3s, a1)
			}((wj = canvas.getContext("2d", {
				alpha: !0
			})).font = a3s, .575 * this.a1), b6.pP.textBaseline(wj, 1), wj.lineWidth = 1, this.a2c(), this.a6E(), aQ.a6E(), a8p()
	}, this.a6E = function() {
		ef = at.a1 - this.a1 - bY.gap
	}, this.a8q = function() {
		eh = bY.gap
	}, this.a2c = function() {
		eh = bY.gap + (aQ.a5e() && 0 !== ac.lV[a9.eI] && !a9.gu ? aQ.j7 + bY.gap : 0)
	}, this.lH = function(bo) {
		(bo || 100 <= a8d) && (a8d = 0, a8p())
	}, this.a3W = function() {
		return a8g[7]
	}, this.a8s = function(value) {
		var kP = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * kP) / 1e3);
		return value < 10 ? kP + ":0" + value : kP + ":" + value
	}, this.iS = function() {
		var a91, per;
		a8h[0] && a9.yW - a9.yV !== a8g[0] && (a8g[0] = a9.yW - a9.yV, a8d++), ah.jf - a8g[0] !== a8g[1] && (a8g[1] = ah.jf - a8g[0], a8d++), this.l9(), (a91 = aa.a92(a9.eI)) !== a8g[5] && (a8g[5] = a91, a8d++), a8m(), a8g[7] += bb.a93, a91 =
			a8n(7), a8i !== a91 && (a8i = a91, a8d += 100), a91 = a9.ie ? bd.a28() : ac.gM[kw[0]], per = bH.dl(1e4 * a91, Math.max(a9.jO, 1)), a8g[3] = a91, a8g[4] !== per && (a8d++, a8g[4] = per), 8 === a9.jy && function() {
				for (var a7 = 0; a7 < 2; a7++)
					if (!b6.fu.gl(a7)) return bN.y6.yS(), 1;
				return
			}() || a8g[3] < a9.jO || ! function() {
				for (var a7 = ah.jf - 1; 0 <= a7; a7--)
					if (0 < ac.g0[ah.jh[a7]].length) return;
				return 1
			}() || bN.y6.yS()
	}, this.l9 = function() {
		a8h[2] && a9.yV !== a8g[2] && (a8g[2] = a9.yV, a8d++)
	}, this.a94 = function(a7) {
		var s8, a95, dk;
		return 2 !== a9.yT && (a7 % 2 == 1 && (aR.lH(1, 1), bb.dc = !0), a7 === a9.a2l ? (a8j = 0, a8p(), !1) : (-1 !== a7 || 0 !== a8k) && (a95 = a8j, a8j = a9.gi ? a7 / a9.a2l : (dk = performance.now(), 0 <= a7 && (s8 = dk - 392 * a7, a8k =
			0 === a7 || s8 < a8k ? s8 : a8k), 1 < (a8j = (dk - a8k) / (392 * a9.a2l)) ? 1 : a8j), a8p(), a8j !== a95))
	}, this.tM = function() {
		tN.drawImage(canvas, ef, eh)
	}
}

function cI() {
	var x2, a96, a1, j7, a6K, a97, a98, a5f, canvas, li, a99;

	function wf() {
		return Math.floor((at.a1 - a1) / 2) < aN.j7 + 2 * bY.gap ? at.j7 - j7 - 4 * bY.gap - aN.j7 : at.j7 - j7 - 2 * bY.gap
	}
	this.dU = function() {
		a99 = x2 = !1, a6K = .61, a97 = .07, a98 = .09, li = a5f = j7 = 0
	}, this.resize = function() {
		var wj, ly, et, a9E, a9F, a3x;
		x2 && (a1 = a9A(a1 = u.v.r4() ? Math.floor(.69 * at.pR) : Math.floor(.5 * at.pR), a4S(at.a1 - 2 * bY.gap, 10)), a1 = a9A(a1, Math.floor(3.57 * a4S(at.j7 - 2 * bY.gap, 3))), j7 = Math.floor(.28 * a1), (canvas = document.createElement(
			"canvas")).width = a1, canvas.height = j7, wj = canvas.getContext("2d", {
			alpha: !0
		}), ly = Math.floor(1 + j7 / 40), wj.clearRect(0, 0, a1, j7), wj.fillStyle = b7.mV, wj.fillRect(ly, ly, a1 - 2 * ly, j7 - 2 * ly), wj.lineJoin = "bevel", wj.lineWidth = 2 * ly, wj.strokeStyle = b7.mY, wj.strokeRect(ly, ly, a1 -
			2 * ly, j7 - 2 * ly), wj.imageSmoothingEnabled = !1, et = aX.get(a96), a9E = et.width, a3x = (1 === a96 ? .85 : 21 === a96 ? .666 : .9) * a6K * j7 / (a9F = et.height), wj.setTransform(a3x, 0, 0, a3x, Math.floor((a1 - a3x *
			a9E) / 2), Math.floor((j7 - a3x * a9F) / 2)), wj.drawImage(et, 0, 0), wj.setTransform(1, 0, 0, 1, Math.floor(a1 - a98 * j7 - a97 * j7 - ly), Math.floor(ly + a97 * j7)), function(wj, eY) {
			wj.lineWidth = Math.floor(1 + j7 / 80), wj.strokeStyle = b7.mY, wj.beginPath(), wj.moveTo(0, 0), wj.lineTo(eY, eY), wj.moveTo(0, eY), wj.lineTo(eY, 0), wj.stroke()
		}(wj, Math.floor(a98 * j7)), wj.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(f0, a9C, a67, a9D) {
		x2 || a9D && a99 || (a96 = a67 ? 21 : f0 ? 1 : 2, x2 = a99 = !0, this.resize(), aH.qx(), aN.a64(), li = bb.lo, a5f = a9C ? 1 : 0)
	}, this.iS = function() {
		!x2 || 1 <= a5f || (a5f = 1 < (a5f += 5e-4 * (bb.lo - li)) ? 1 : a5f, li = bb.lo, bb.dc = !0)
	}, this.gm = function(ef, eh) {
		return !(!x2 || a5f <= 0 || (ef -= Math.floor((at.a1 - a1) / 2), eh -= wf(), ef < 0) || eh < 0 || a1 < ef || j7 < eh || (a1 - j7 / 3 < ef && eh < j7 / 3 && (x2 = !1, bb.dc = !0), 0))
	}, this.tM = function() {
		!x2 || a5f <= 0 || (tN.globalAlpha = a5f, tN.drawImage(canvas, Math.floor((at.a1 - a1) / 2), wf()), tN.globalAlpha = 1)
	}
}

function dG() {
	var a9H = [0, 0],
		a9I = [0, 0];

	function a9L(e0) {
		return 3 !== a9H[e0] && 1 !== a9I[e0] && (a9I[e0] = 1, a9H[e0]++, bf.r8.r9(119, (a9H[0] << 2) + a9H[1]), 1)
	}
	this.a9J = new a9K, this.dU = function() {
		var f0 = bf.dp.data[119].value;
		a9H[0] = f0 >> 2, a9H[1] = 3 & f0
	}, this.a2w = function() {
		this.a9J.dU()
	}, this.iS = function() {
		this.a9J.iS()
	}, this.a3X = function() {
		a9L(0) && aJ.a4Y(L(109))
	}, this.a3Y = function() {
		a9L(1) && aJ.a4Y(L(110))
	}
}

function a9K() {
	var a9M;
	this.dU = function() {
		a9M = !1
	}, this.iS = function() {
		var g6;
		if (function() {
				if (!a9M) {
					if (bb.jb() % 30 != 9) return;
					if (!b6.fu.kp(90)) return;
					a9M = !0
				}
				return 1
			}() && (! function() {
				var pH = aJ.a4u(956);
				if (pH) {
					if (b6.fu.kT(pH.player)) return 1;
					aJ.a3e(956, 0)
				}
				return
			}() && (-1 === (g6 = (a9.ie ? function() {
				var id = bd.kt(),
					eY = ah.jf;
				if (bc.k4[id])
					for (var yH = ah.jh, eW = bc.eW, a7 = 0; a7 < eY; a7++) {
						var g6 = yH[a7];
						if (eW[g6] !== id) return g6
					} else if (1 < eY) return kw[eY - 1];
				return -1
			} : function() {
				for (var a9U = ah.jf, jg = ah.jh, a9V = jP, a7 = 0; a7 < a9U; a7++) {
					var g6 = jg[a7];
					if (0 !== a9V[g6]) return g6
				}
				return -1
			})()) ? ! function() {
				var pH = aJ.a4u(957);
				if (pH && pH.a4O) {
					if (aY.eP(pH.a4O.eK << 2)) return 1;
					aJ.a3e(957, 0)
				}
				return
			}() : (aJ.yr(0, L(111, [ac.z1[g6]]), 956, g6, b7.mY, b7.mV, -1, !0), 0)))) {
			var eY = aj.iF.kf;
			if (0 === eY) aj.iF.l4();
			else
				for (var dp = aj.iF.dp, a7 = 0; a7 < eY; a7++) {
					var eK = dp[a7];
					if (aY.eP(eK << 2)) return void aJ.yr(0, L(112, [bI.eg(eK), bI.ei(eK)]), 957, 0, b7.mY, b7.mV, -1, !0, void 0, {
						er: 1,
						eK: eK
					})
				}
		}
	}
}

function dH() {
	this.a9W = new a9X, this.dU = function() {
		this.a9W.resize()
	}
}

function a9X() {
	this.resize = function() {
		var a7, a9Y = document.head.querySelector("style#ss");
		if (a9Y)
			for (a7 = a9Y.sheet.cssRules.length - 1; 0 <= a7; a7--) a9Y.sheet.deleteRule(0);
		else(a9Y = document.createElement("style")).id = "ss", document.head.appendChild(a9Y);
		var a6S = "::-webkit-scrollbar",
			a9Z = b6.pP.pa(bY.rS),
			hB = b6.pP.pa(Math.max(b6.pP.qz(.012), 8));
		try {
			a9Y.sheet.insertRule(a6S + "{width:" + hB + ";height:" + hB + ";}", a9Y.sheet.cssRules.length), a9Y.sheet.insertRule(a6S + "-thumb{background-color:white;}", a9Y.sheet.cssRules.length), a9Y.sheet.insertRule(a6S +
				"-track{background:" + b7.mU + ";}", a9Y.sheet.cssRules.length), a9Y.sheet.insertRule(a6S + "-track:horizontal{border-top:" + a9Z + " solid white;}", a9Y.sheet.cssRules.length), a9Y.sheet.insertRule(a6S +
				"-track:vertical{border-left:" + a9Z + " solid white;}", a9Y.sheet.cssRules.length), a9Y.sheet.insertRule(a6S + "-button{display:none;}", a9Y.sheet.cssRules.length)
		} catch (e) {
			for (console.log("error 3425: " + e), a7 = a9Y.sheet.cssRules.length - 1; 0 <= a7; a7--) a9Y.sheet.deleteRule(0)
		}
	}
}

function dF() {
	this.a9a = !1, this.mO = !1, this.a2g = !1, this.a9b = [0, 0, 0, 0], this.a9c = function() {
		var ly, lz, mB, mC;
		this.a2g = this.a2g || this.mO, (this.mO || this.a9a && this.a2g) && (ly = bW.a9d[0], lz = bW.a9d[1], mB = bW.a9d[2], mC = bW.a9d[3], ly = ly < this.a9b[0] ? this.a9b[0] : ly, lz = lz < this.a9b[1] ? this.a9b[1] : lz, mB = mB > this.a9b[
				2] ? this.a9b[2] : mB, mC = mC > this.a9b[3] ? this.a9b[3] : mC, this.mO = !1, this.a9a = !1, ly === this.a9b[0] && lz === this.a9b[1] && mB === this.a9b[2] && mC === this.a9b[3] ? this.a2h() : ly <= mB && lz <= mC && a2y
			.putImageData(a2z, 0, 0, ly, lz, mB - ly + 1, mC - lz + 1))
	}, this.a2h = function() {
		this.a2g && this.a9b[2] >= this.a9b[0] && this.a9b[3] >= this.a9b[1] && a2y.putImageData(a2z, 0, 0, this.a9b[0], this.a9b[1], this.a9b[2] - this.a9b[0] + 1, this.a9b[3] - this.a9b[1] + 1), this.a2g = !1
	}, this.ye = function() {
		this.a9b[2] >= this.a9b[0] && this.a9b[3] >= this.a9b[1] && a2y.putImageData(a2z, 0, 0, this.a9b[0], this.a9b[1], this.a9b[2] - this.a9b[0] + 1, this.a9b[3] - this.a9b[1] + 1), this.a2g = !1
	}, this.dU = function() {
		var ef, eh;
		this.a9a = !1, this.mO = !1, this.a2g = !1, this.a9b[0] = bO.ej, this.a9b[1] = bO.ek, this.a9b[2] = this.a9b[3] = 0;
		loop: for (ef = 1; ef < bO.ej - 1; ef++)
			for (eh = bO.ek - 2; 1 < eh; eh--)
				if (1 === a9e[aY.wE(ef, eh) + 2]) {
					this.a9b[0] = ef;
					break loop
				} loop: for (eh = 1; eh < bO.ek - 1; eh++)
			for (ef = bO.ej - 2; 1 < ef; ef--)
				if (1 === a9e[aY.wE(ef, eh) + 2]) {
					this.a9b[1] = eh;
					break loop
				} loop: for (ef = bO.ej - 2; 0 < ef; ef--)
			for (eh = bO.ek - 2; 1 < eh; eh--)
				if (1 === a9e[aY.wE(ef, eh) + 2]) {
					this.a9b[2] = ef;
					break loop
				} loop: for (eh = bO.ek - 2; 0 < eh; eh--)
			for (ef = bO.ej - 2; 1 < ef; ef--)
				if (1 === a9e[aY.wE(ef, eh) + 2]) {
					this.a9b[3] = eh;
					break loop
				}
	}
}

function L(value, a9f, tp) {
	var p6 = "number" == typeof value ? b3.a9g[value] : value;
	if (tp && b3.a9h() && (p6 = tp), a9f)
		for (var eY = a9f.length, a7 = 0; a7 < eY; a7++)
			for (var er = 0; er < 3; er++) p6 = p6.replace("{" + (10 * er + a7) + "}", a9f[a7]);
	return p6
}

function bw() {
	this.data = new a9i;
	var a9j = (new a9k).L84,
		a9l = (this.a9g = a9j, !1);
	this.dU = function() {
		var eY, g;
		a9l = !1, "en" !== bf.dp.data[12].value.split("-")[0].toLowerCase() ? bf.dp.data[12].value === bf.dp.data[145].value && 0 < bf.dp.data[146].value && (eY = bf.dp.data[146].value, (g = bf.pi.tv(eY, !1)).length === eY) && !!b6.pZ.a18(g) &&
			function(g) {
				var eY = g.length,
					a9r = bf.pi.tv(eY, !0);
				if (eY !== a9r.length) return !1;
				if (!b6.pZ.a18(a9r)) return !1;
				for (var kP = a9j.length, a7L = new Array(kP), a9s = kP === eY, g1 = Math.min(eY, kP), a7 = 0; a7 < kP; a7++)
					if (a7L[a7] = a9j[a7], a7 < eY && a9r[a7] === a7L[a7]) a7L[a7] = g[a7];
					else {
						a9s = !1;
						for (var es = 0; es < g1; es++)
							if (a9r[es] === a7L[a7]) {
								a7L[a7] = g[es];
								break
							}
					} return b3.a9g = a7L, a9s
			}(g) || (a9l = !0) : b3.a9g = a9j
	}, this.dW = function() {
		bc.dV(), aA.dV(), ba.dV(), bZ.dV(), aK.dU(), bl = new dr
	}, this.a9h = function() {
		return this.a9g === a9j || !a9j.length
	}, this.a9t = function() {
		var a9u;
		a9l && (a9l = !1, 0 !== a9j.length) && (a9u = bf.dp.data[12].value, aw.a9v.a9w(0, a9u.slice(0, 20)))
	}, this.a9x = function(g) {
		g.length === a9j.length && (this.a9g = g, bf.r8.r9(145, bf.dp.data[12].value), bf.r8.r9(146, g.length), bf.pi.u1(g, !1), bf.pi.u1(a9j, !0), 0 === aW.zb()) && 5 === n.ro && n.s.a9y()
	}
}

function a9i() {
	var g = ["aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts", "btx",
		"bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "en", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fil", "fj",
		"fo", "fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac",
		"kek", "kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk",
		"ml", "mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "nb", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu",
		"rn", "ro", "rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "sh", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl",
		"tn", "to", "tpi", "tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu"
	];
	this.a9z = function() {
		for (var aA0 = [], eY = g.length, a7 = 0; a7 < eY; a7++) aA0.push(g[a7]);
		for (eY++, aA0.unshift(bf.dp.data[12].tp), a7 = 1; a7 < eY; a7++)
			if (aA0[a7] === aA0[0]) {
				aA0.splice(a7, 1), eY--;
				break
			} try {
			if ("undefined" == typeof Intl) return aA0;
			for (a7 = 0; a7 < eY; a7++) {
				var p6 = new Intl.DisplayNames([aA0[a7]], {
					type: "language"
				}).of(aA0[a7]);
				p6 !== aA0[a7] && (aA0[a7] = aA0[a7] + ": " + p6)
			}
		} catch (e) {
			console.log("error 3646: " + e)
		}
		return aA0
	}, this.aA2 = function(aA3) {
		for (var p6 = bf.dp.data[12].value, eY = aA3.length, a7 = 0; a7 < eY; a7++)
			if (p6 === aA3[a7].split(":")[0]) return a7;
		return 0
	}
}

function a9k() {
	this.L84 = ["No Admin", "Helper", "Junior Moderator", "Moderator", "Senior Moderator", "Lead Moderator", "Head Admin", "Very Easy", "Easy", "Normal", "Hard", "Very Hard", "Impossible", "Type your message here...", "Send", "Activated", "Team {0}",
		"Team {0} has won the game!", "You have earned a participation reward of {10} gold.", "The prize money has been distributed as follows:", "Clan {0} has gained up to {11} points.",
		"The following clan members have earned these additional amounts of gold and points:", "These clan members have collectively paid a tribute of {10} gold to the clan leader of {1}.", "Back", "Error", "Error {10}", "Not Enough Gold!",
		"You need more gold to perform this action.", "Quit Game", "More", "This is a contest!", "Accept", "You have conquered {0}.", "You have been conquered by {0}.", "Congratulations! You have won the game.", "{0} has won the game.",
		"{0} has broken the non-aggression pact.", "{0} is attacking you!", "Choose your start position!", "You have surrendered!", "The game has ended in a stalemate!", "Error: {10}", "{0} has been immortalized!", "Neutral Land: {0}",
		"Player: {0}", "Strength: {10}", "Territory: {10}", "Team", "Bot Difficulty", "Index: {10}", "Coordinates: {10}", "Mountain: {10}", "Water: {10}", "Ship Owner: {0}", "Message to {0}",
		"Humanity triumphs! The undead have been beaten back.", "The Resistance", "Mankind's era ends, overrun by the relentless tide of the undead.", "The Virus", "If peace is agreed upon, the game ends in a stalemate.",
		"If peace is agreed upon, the largest territory holder wins the game.", "You have signed a non-aggression pact with {0}.", "You have asked {0} to sign a non-aggression pact.", "{0} has accepted the non-aggression pact.",
		"{0} requests a non-aggression pact.", "You have asked {10} players to attack {1}.", "You have asked {0} to attack {1}.", "{0} suggests you attack {1}.", "You have exported 1 resource to {0}.", "You have exported {10} resources to {1}.",
		"A tax of 1 unit has been deducted.", "A tax of {10} units has been deducted.", "A bot ({0}) has supported you with 1 resource.", "A bot ({0}) has supported you with {11} resources.", "{0} has supported you with 1 resource.",
		"{0} has supported you with {11} resources.", "Map: {10}", "Dimension: {10}", "Overall Pixels: {10}", "Land: {10}", "Mountains: {10}", "Full sending is disabled.", "{0} has been conquered by {1}.", "{0} has left the game.",
		"{0} has surrendered.", "{0} has joined the game.", "{10} players have been conquered.", "{10} players have left the game.", "{10} players have surrendered.", "Next Contest: ", "YOU HAVE CONQUERED", "YOU HAVE BEEN CONQUERED BY",
		"THE GAME HAS BEEN WON BY", "MAP:", "{0} has called the peace vote.", "{0} has voted for peace.", "{0} has rejected peace.", "second played", "seconds played", "LEADERBOARD", "Humans", "Players", "Bots", "Spectators", "Threshold",
		"Percentage", "Growth", "Income", "Time", "Hint: Click on a boat to send it to a new location.", "Hint: The top 9 emojis are ordered by usage.", "{0} still needs to be conquered!",
		"A neutral pixel at position ({10}, {11}) still needs to be conquered!", "code3123", "Show Account", "Moderation Actions", "Report User", "Loading", "White Arena", "Black Arena", "Island", "Mountains", "Desert", "Swamp", "White Plains",
		"Cliffs", "Pond", "Halo", "Europe", "World", "Caucasia", "Africa", "Middle East", "Scandinavia", "North America", "South America", "Asia", "Australia", "Island Kingdom", "Refresh", "Public Profile", "🧈 Gold", "Account Balance: ",
		"Play more multiplayer games to earn gold. Accounts without gold will be deleted after some days of grace. Each day, you will lose 0.50 gold or 0.01% of your balance, whichever amount is higher.",
		"Buttons with yellow font color use a small amount of gold, which is then redirected based on the specific action taken.", "Gold is the fuel that keeps your account running! Keep the balance up!", "Gold Transfer", "Confirm", "Cancel",
		"You are about to send {10} gold from the Source Account {1}. The transaction fee is {12} gold. The Target Account ({3}) will receive {14} gold.", "Account Name", "Copy", "Password", "Show", "Hide", "Request New Password", "Security Tip",
		"To safeguard your account, never disclose your password to anyone. We will never ask for your password, as we do not require it for any service.",
		"If you have accessed your account through unofficial webpages or apps, your security may be compromised. We recommend changing your password.",
		"If you lose your password or account name, you may lose access to your account. In such a case, we are unable to recover it. Please ensure that you store your account name and password in a safe place.", "Account Options",
		"Log in to a Different Account", "Create New Account", "Delete Account: ", "🗑️ Account Deletion", "Accounts without gold will be deleted automatically after 8 days. To initiate this process, deplete all your gold.", "Saved Accounts",
		"Listed accounts may have been removed in the meantime due to insufficient funds.", "🗑️ Remove From List", "➡️ Login", "1v1 Rating", "Elo: ", "Rank: ", "Played Games: ", "Admin Statistics", "Votes: ", "Status: ",
		"You are about to purchase {10} votes for {11} Gold with your Account {2}.", "Username", "Please choose a respectful username.", "Bio", "Upload Bio", "The monthly fee is currently {10} gold.", "Enable Auto Renew", "Disable Auto Renew",
		"Auto Renew is off. The subscription will end in {10} day(s).", "Auto Renew is on. The subscription will renew in {10} day(s).", "Report Player", "Primary Clan Stats", "Clan: ", "Monthly Points: ", "Total Points: ", "Won Games: ",
		"Avg. Points per Game: ", "Secondary Clan Stats", "Clan Leader Statistics", "Points: ", "Clan Leader of {0}", "No Clan Leader", "Elect",
		"You are allowed to elect up to one clan leader each week. Your voting power is based on your monthly clan points.", "You can only elect members of the same clan you have won points for.", "Additional Income", "Options", "Default",
		"Uniform", "Customized", "Mixed", "Team dependent", "Player Count", "Clan Chart", "🛠️ Options", "🛠️ Chart Options", "Search Terms", "Separate search terms with a comma.", "Load Data", "Start Index", "End Index", "Timeframe",
		"More Options", "Y-Axis Compression", "Choose Your Nation's Color!", "National Color", "Red: ", "Green: ", "Blue: ", "Adjust", "Colors", "Random", "Selectable Color", "⏳ Connecting...", "Find Server...", "New Connection...",
		"Custom Scenario", "⚔️ Play", "Map", "Settings", "Game Mode", "Clustered", "Player Names", "Kingdom Names", "Simple Names", "Territorial Income", "Interest Income", "Starting Resources", "More Settings", "Reset Scenario", "Open File...",
		"Save As File...", "Multiplayer", "My Account", "Game Menu", "Your Kingdom's Name", "Clans", "Clan Members", "1v1 Players", "Admins", "🏆 Leaderboards", "Previous 10", "Next 10", "1v1 Player Ranking", "Clan Ranking",
		"Clan Member Ranking", "Admin Ranking", "1v1 Reports", "Admin Election", "Blockchain", "Clan Leader Election", "Bio Reports", "Ranking", "Player", "Elo", "Clan", "Points", "Leader", "Index", "Seconds Ago", "Accuser", "Accused", "Voter",
		"Target Account", "Votes", "Sender", "Receiver", "Amount", "Number", "Elo Deducted", "Bio Removed", "🛠️ List Options", "Clan Name Search", "Username Search", "Quantity", "Account Name Search", "Battle Royale", "1v1", "Zombie", "Chat",
		"Close", "Ready", "Next Map", "Next Game Mode", "Next Contest", "Teams", "ON", "OFF", "Zombies", "Login", "📜 Logs", "Procedural Map", "Realistic Map", "Custom Map", "Passable Water", "Passable Mountains", "Select File", "Preview",
		"Map Name", "Selectable Name", "▶️ Replay", "🔲 Select All", "📋 Copy", "🗑️ Clear", "▶️ Launch", "Insert the replay link here!", "⚙️ Settings", "🔄 Reset", "Reload Required", "A game reload is required to apply the new configuration.",
		"Information", "Increasing resolution, shrinking minimum font size, and speeding up text rendering can strain your system and hinder gameplay responsiveness.", "Resolution", "Low", "Medium", "High", "Very High", "Minimum Font Size",
		"Small", "Very Small", "Text Rendering Speed", "Slow", "Fast", "Large UI", "Place Balance Above", "Hide Zoom Buttons", "Font", "Shortcut Keys", "Reset", "Language", "Spawning", "Selectable Spawn", "🔑 My Account", "📈 Charts",
		"🧈 Gold Transfer", "🔗 Links", "ℹ️ Game Version", "🗑️ Delete Data", "Privacy Settings", "Force Restart Game", "☰ Game Menu", "📊 Game Statistics", "🏳️ Surrender", "🕊️ Call Peace Vote", "Android App", "iOS App", "Changelog",
		"Clan Results", "Tutorial", "Terms", "Privacy", "Do you want to delete all locally stored data, like usernames, account data and setting data?", "Accounts without gold will be deleted after some days of grace.", "🗑️ Delete",
		"User Privacy", "Check out our Privacy Policy at:", "Source Account", "Replay Error", "Warning", "Loading...", "An enemy ship belonging to {0} is heading towards your shore.", "Initiate Land Attack At Mouse Pointer",
		"Launch Ship Towards Mouse Pointer", "Increase Percentage Bar", "Decrease Percentage Bar", "Slightly Increase Percentage Bar", "Slightly Decrease Percentage Bar", "Switch UI Visibility", "Zoom In", "Zoom Out", "Camera Left",
		"Camera Right", "Camera Up", "Camera Down", "Avg. Attack Strength", "Land Attacks", "Ships launched", "Bots conquered", "Humans conquered", "Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Received Support",
		"Overall Income", "Additional Costs", "Land War Losses", "Naval Losses", "Transmitted Support", "Overall Expenses", "Mountain Attacks", "Ships landed", "Territory", "Numbers", "Statistics", "Neutral", "Red", "Green", "Blue", "Yellow",
		"Magenta", "Cyan", "White", "Black", "Ship launched!", "Ship selected!", "Ship on the way!"
	]
}

function da() {
	var ef, eh, j7, sf, aA4, aA5, aA6, aA7, aA8, a1, a1h, aA9;
	this.x2 = !1, this.dU = function(p6, aAA) {
		if (1 === u.id && 13 <= u.f1 && u.f1 < 18) return aAA ? void(a1h = p6) : a1h !== p6 ? void 0 : void u.tt.saveString(200, p6);
		aAA && (a1h = p6, (aA9 = document.createElement("a")).appendChild(document.createTextNode(a1h)), this.x2 = !0, aA9.title = a1h, aA9.target = "_blank", aA9.href = a1h, aA9.style.textAlign = "center", aA9.style.color = b7.mY, aA9.style
			.position = "absolute", aA9.style.padding = "0px", aA9.style.margin = "0px", this.resize(), document.body.appendChild(aA9), bb.dc = !0)
	}, this.qx = function() {
		return !(!this.x2 || (document.body.removeChild(aA9), this.x2 = !1))
	}, this.gm = function(hd, he) {
		return !!this.x2 && ((hd < ef || he < eh || ef + a1 < hd || eh + j7 < he || ef + a1 - sf < hd && he < eh + sf) && (bb.dc = !0, this.x2 = !1, document.body.removeChild(aA9)), !0)
	}, this.resize = function() {
		var a3s, aAB;
		this.x2 && (aA7 = Math.floor(.8 * (u.v.r4() ? at.a1 > at.j7 ? .6 : .55 : .4) * at.pR), sf = Math.floor(.15 * aA7), aA4 = Math.floor(.35 * sf), aA5 = Math.floor(.5 * sf), aA6 = Math.floor(2.5 * aA5), j7 = sf + aA4 + 3 * aA5, a3s = b6.pP
			.rR(1, aA4 / at.pV), aA8 = Math.floor(at.pV * aM.measureText(a1h, a3s)), aAB = a1 = (aA7 < aA8 ? aA8 : aA7) + 2 * aA6, a1 = Math.min(a1, at.a1 - 2 * (u.v.r4() ? 2 : 1) * bY.gap), a3s = b6.pP.rR(1, a1 / aAB * aA4 / at.pV), aA8 =
			Math.floor(at.pV * aM.measureText(a1h, a3s)), ef = Math.floor((at.a1 - a1) / 2), eh = Math.floor((at.j7 - j7) / 2), aA9.style.font = a3s, aA9.style.top = Math.floor((eh + 1.4 * aA5 + sf) / at.pV) + "px", aA9.style.left = Math
			.floor((ef + (a1 - aA8) / 2) / at.pV) + "px")
	}, this.tM = function() {
		this.x2 && (tN.fillStyle = b7.mV, tN.fillRect(ef, eh + sf, a1, j7 - sf), tN.fillStyle = b7.na, tN.fillRect(ef, eh, a1, sf), tN.fillStyle = b7.mY, tN.lineWidth = bY.xU, tN.strokeStyle = b7.mY, tN.strokeRect(ef, eh, a1, j7), tN.fillRect(ef,
			eh + sf, a1, bY.xU), tN.font = b6.pP.rR(1, .48 * sf), b6.pP.textAlign(tN, 1), b6.pP.textBaseline(tN, 1), tN.fillText("You are leaving Territorial.io!", Math.floor(ef + (a1 - .5 * sf) / 2), Math.floor(eh + .55 * sf)), aI.a43(
			Math.floor(ef + a1 - .8 * sf), Math.floor(eh + .25 * sf), Math.floor(.5 * sf)), tN.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function dY() {
	var gap, a8e, ef = [0, 0, 0, 0, 0],
		eh = [0, 0, 0, 0, 0],
		mA = [1, 1, 1, 1, 1],
		f0 = [!0, !0, !0, !1, !1],
		et = (this.fK = [!0, !0, !0, !1, !1], null);
	this.aAC = function(a1G, aAD) {
		et = a1G, f0 = aAD, a8e = [bG.aAE, bG.zW, bG.aAF, bG.aAF, bG.aAG], this.dU()
	}, this.dU = function() {
		if (aX.sC()) {
			var a7, rv = Math.floor((u.v.r4() ? .261 : .195) * at.pR),
				rw = Math.floor(.9 * rv),
				a6K = Math.floor(.17 * rw);
			if (gap = u.v.r4() ? 2 * bY.gap : bY.gap, mA[0] = rv / et[0].width, mA[1] = rw / et[1].width, mA[2] = a6K / et[2].height, mA[3] = a6K / et[3].height, mA[4] = a6K / et[4].height, mA[2] *= 1.7, mA[3] *= 1.07, ef[0] = gap, ef[1] = gap,
				ef[2] = gap, ef[3] = gap, ef[4] = Math.floor(2 * gap + mA[3] * et[3].width), eh[0] = gap, eh[1] = eh[0] + gap + mA[0] * et[0].height, eh[2] = eh[1] + gap + mA[1] * et[1].height, eh[3] = eh[2] + gap + mA[2] * et[2].height, eh[4] =
				eh[3], !f0[0])
				for (a7 = 0; a7 < 5; a7++) eh[a7] -= mA[0] * et[0].height + gap;
			if (!f0[1])
				for (a7 = 2; a7 < 5; a7++) eh[a7] -= mA[1] * et[1].height + gap
		}
	}, this.x2 = function() {
		return !(7 === aW.zb() && u.v.r4())
	}, this.gm = function(hd, he) {
		if (et && this.x2())
			for (var a7 = f0.length - 1; 0 <= a7; a7--)
				if (f0[a7] && this.fK[a7] && ef[a7] < hd && eh[a7] < he && hd < ef[a7] + mA[a7] * et[a7].width && he < eh[a7] + mA[a7] * et[a7].height) return n.o(9, n.ro, new aAH("You are leaving Territorial.io.", b6.pP.a1g(a8e[a7]))), !0;
		return !1
	}, this.tM = function() {
		if (et && this.x2()) {
			var a7;
			for (tN.imageSmoothingEnabled = !0, a7 = 0; a7 < 5; a7++) f0[a7] && this.fK[a7] && (tN.setTransform(mA[a7], 0, 0, mA[a7], ef[a7], eh[a7]), tN.drawImage(et[a7], 0, 0));
			tN.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function dR() {
	this.aAI = 0, this.aAJ = null, this.sn = null, this.qc = null, this.s = null, this.sw = null, this.qu = null, this.aAK = new aAL, this.zf = 0, this.dU = function() {
		this.aAI = bC.rr.un(bf.dp.data[105].value), this.sn = new aAM, this.qc = new aAN, this.s = new aAO, this.sw = new aAP, this.qu = new aAQ, this.s.dU(), this.zf = 1, aW.setState(0)
	}, this.zo = function() {
		this.aAJ = null, this.sn = null, this.qc = null, this.s = null, this.sw = null, this.qu = null, this.zf = 0, Math.random() < .001 && console.log(L(113))
	}
}

function aAM() {
	function aAe(g, s5, s6) {
		var aAf = g[s5];
		g[s5] = g[s6], g[s6] = aAf
	}
	this.so = [
		[],
		[],
		[],
		[]
	], this.sp = [0, 0, 0, 0], this.aAR = function(aAS, qn, username, qq, qt, aAT, elo, color) {
		this.so[aAS].push(this.aAU(qn, username, qq, qt, aAT, elo, color)), bk.aAI === qn && (bk.aAJ = this.so[aAS][this.so[aAS].length - 1]), bk.s.aAV += 29 === n.ro && bk.s.qU[0] === aAS && 1 === bk.s.qU[2]
	}, this.aAU = function(qn, username, qq, qt, aAT, elo, color) {
		return {
			qn: qn,
			username: username,
			qq: qq,
			qt: qt,
			aAT: aAT,
			elo: elo,
			color: color
		}
	}, this.aAW = function(e0, aAS, username, qq, qt, aAT, elo) {
		e0 = this.so[aAS][e0];
		!b6.z3.startsWith(e0.username, "Censored") && b6.z3.startsWith(username, "Censored") && (e0.aAX = e0.username), e0.username = username, e0.qq = qq, e0.qt = qt, e0.aAT = aAT, e0.elo = elo, bk.s.aAV += 29 === n.ro && bk.s.qU[0] === aAS &&
			1 === bk.s.qU[2]
	}, this.aAY = function(e0, aAZ, aAa) {
		var player = this.so[aAZ][e0];
		this.aAb(e0, aAZ), this.so[aAa].push(player), bk.s.aAV += 29 === n.ro && bk.s.qU[0] === aAa && 1 === bk.s.qU[2]
	}, this.aAb = function(e0, aAZ) {
		var sn = this.so[aAZ];
		e0 >= this.sp[aAZ] ? sn[e0] = sn[sn.length - 1] : (this.sp[aAZ]--, 2 === aAZ ? (sn.splice(this.sp[aAZ] + 1, 0, sn[sn.length - 1]), sn.splice(e0, 1)) : (sn[e0] = sn[this.sp[aAZ]], sn[this.sp[aAZ]] = sn[sn.length - 1])), sn.pop(), bk.s
			.aAV += 29 === n.ro && bk.s.qU[0] === aAZ && 1 === bk.s.qU[2]
	}, this.aAc = function(e0, qT) {
		bk.s.aAV += 29 === n.ro && bk.s.qU[0] === qT && 1 === bk.s.qU[2];
		var sn = this.so[qT],
			pH = sn[e0];
		if (2 === qT)
			if (e0 >= this.sp[qT]) {
				for (var aAd = this.sp[qT], elo = pH.elo; aAd && elo > sn[aAd - 1].elo;) aAd--;
				sn[e0] = sn[this.sp[qT]], sn.splice(this.sp[qT]++, 1), sn.splice(aAd, 0, pH)
			} else sn.splice(this.sp[qT]--, 0, pH), sn.splice(e0, 1);
		else e0 >= this.sp[qT] ? aAe(sn, this.sp[qT]++, e0) : aAe(sn, --this.sp[qT], e0)
	}
}

function aAL() {
	this.dd = function(e0) {
		if ((sp = bk.sn.sp[e0]) < 2) return !1;
		var qV = bk.s.qW[e0],
			aAg = 9 === qV.aAh ? 333 : 512,
			sp = Math.min(sp, aAg);
		8 === qV.aAh && (sp -= sp % 2);
		aAg = bk.sn.so[e0].splice(0, sp), bk.sn.sp[e0] -= sp, sp = function(aAi) {
			if (bk.aAJ)
				for (var eY = aAi.length, qn = bk.aAJ.qn, a7 = 0; a7 < eY; a7++)
					if (aAi[a7].qn === qn) return a7;
			return -1
		}(aAg);
		return -1 === sp ? (bk.s.aAV += 29 === n.ro && bk.s.qU[0] === e0 && 1 === bk.s.qU[2], !1) : (8 === qV.aAh && (qV.aAl = (qV.aAl + (sp >> 1)) % 1024, e0 = sp - sp % 2, sp %= 2, aAg = aAg.slice(e0, 2 + e0)), ar.dU(qV, aAg, sp), !0)
	}, this.aAm = function(qV, aAi, aAj) {
		var eb = a9.data = new a2m,
			aAq = (eb.spawningSeed = qV.spawningSeed, qV.aAh < 7 ? (eb.gameMode = 1, eb.numberTeams = qV.aAh + 2) : 9 === qV.aAh ? (eb.gameMode = eb.isZombieMode = 1, eb.numberTeams = 2) : (eb.gameMode = 0, eb.battleRoyaleMode = 7 === qV.aAh ?
				0 : 10 === qV.aAh ? 1 : 2), eb.selectedPlayer = aAj, eb.isContest = qV.aAn, eb.mapType = bO.aAo(qV.eE) ? 0 : 1, bO.aAp(eb, qV.eE), eb.mapSeed = qV.mapSeed, eb.humanCount = aAi.length);
		eb.selectableSpawn = 1 === eb.gameMode || aAq < 100, eb.colorsData = new Uint32Array(aAq), eb.playerNamesData = new Array(aAq);
		for (var a7 = 0; a7 < aAq; a7++) eb.colorsData[a7] = aAi[a7].color, eb.playerNamesData[a7] = aAi[a7].username;
		if (2 === eb.battleRoyaleMode)
			for (eb.elo = new Uint16Array(aAq), a7 = 0; a7 < aAq; a7++) eb.elo[a7] = aAi[a7].elo;
		aW.setState(8), bO.a3(qV.eE, eb.mapSeed), a9.a2q()
	}
}

function aAN() {
	var ds = ["", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "", "", ""],
		aAr = [b7.mm, b7.mn, b7.nY, b7.nF, b7.mo, b7.nJ, b7.n5, b7.mm, b7.mm, b7.mm],
		aAs = [
			[1],
			[1.2],
			[1.4, 1.2],
			[1.7, 1.4, 1.2],
			[1.4, 1.2],
			[1.4, 1.2],
			[1.2],
			[1],
			[1],
			[1]
		],
		aAt = [0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
		aAu = ["Your account is too new!", "The server couldn't process your request.", "Spam detected!", "You are muted!", "Player couldn't be found.", "You don't have permission for this operation!"],
		aAv = [
			["", " was muted. Duration: 1 Hour"],
			["The username of ", " was censored. Duration: 1 Minute"]
		];
	this.qd = function(code) {
		return {
			id: 13,
			fontSize: this.aAw(0),
			qh: [],
			qk: [{
				p6: "[Private Message] " + aAu[code],
				color: b7.nE,
				qw: 0
			}]
		}
	}, this.qe = function(qT, aAy) {
		var j7 = this,
			a1o = j7.aAz(qT, aAy.qn);
		return a1o || ((a1o = bk.sn.aAU(aAy.qn, bB.rr.xl(aAy.qn, 5), 1, 1e6, 1e6, 0, 0)).qm = 1), 0 === aAy.id ? {
			id: aAy.id,
			fontSize: j7.aAw(a1o.qq, a1o.qt),
			qh: [a1o],
			qk: [{
				p6: ": " + aAy.k,
				color: b7.mY,
				qw: j7.qs(a1o.qq, a1o.qt)
			}]
		} : 14 === aAy.id ? {
			id: aAy.id,
			fontSize: j7.aAw(0, 0),
			qh: [null, a1o],
			qk: [{
				p6: aAv[aAy.aB0][0],
				color: b7.nE,
				qw: 0
			}, {
				p6: aAv[aAy.aB0][1],
				color: b7.nE,
				qw: 0
			}]
		} : ((qT = j7.aAz(qT, aAy.target)) || ((qT = bk.sn.aAU(aAy.target, bB.rr.xl(aAy.target, 5), 1, 1e6, 1e6, 0, 0)).qm = 1), {
			id: aAy.id,
			fontSize: j7.aAw(0, 0),
			qh: [a1o, qT],
			qk: [{
				p6: function(aAy) {
					if (aAy.id < 15) return bl.e3(aAy.id - 1, bl.dx[aAy.id - 1][aAy.value]);
					return 0 === aAy.aB0 ? 32768 <= aAy.value ? " voted with " + (aAy.value - 32768 + 1) + " gold against " : " voted with " + (aAy.value + 1) + " gold for " : 1 === aAy.aB0 ? " sent " + (aAy.value / 100)
						.toFixed(2) + " Gold to " : " voted with " + aAy.value + " points for "
				}(aAy),
				color: b7.nE
			}, {
				p6: 15 === aAy.id ? function(aAy) {
					return 0 === aAy.aB0 ? 32768 <= aAy.value ? " to weaken the latter's admin position." : " to strengthen the latter's admin position." : 1 === aAy.aB0 ? "." : " to acknowledge the latter as clan leader."
				}(aAy) : bl.e5(aAy.id - 1, bl.dx[aAy.id - 1][aAy.value]),
				color: b7.nE
			}]
		})
	}, this.qo = function(player, qT, ql) {
		return (2 === qT ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username + (ql && player.aAX ? " (" + player.aAX + ")" : "")
	}, this.qp = function(qq) {
		return aAr[qq]
	}, this.aAw = function(qq, qt) {
		return qq < 2 || 5 < qq ? aAs[qq][0] : 3 === qq ? aAs[qq][qt < 1 ? 0 : qt < 8 ? 1 : 2] : aAs[qq][qt < 10 ? 0 : 1]
	}, this.qs = function(qq, qt) {
		return 0 === qt && aAt[qq]
	}, this.aAz = function(qT, qn) {
		for (var so = bk.sn.so, sn = so[qT], eY = sn.length, a7 = 0; a7 < eY; a7++)
			if (qn === sn[a7].qn) return sn[a7];
		for (var es = 0; es < so.length; es++)
			if (qT !== es)
				for (eY = (sn = so[es]).length, a7 = 0; a7 < eY; a7++)
					if (qn === sn[a7].qn) return sn[a7];
		return null
	}, this.qr = function(pH) {
		return !!bk.aAJ && pH.qn === bk.aAJ.qn
	}, this.aB3 = function(sn, aB4, aB5) {
		var z5 = [];
		loop: for (var a7 = aB4; a7 < aB5; a7++) {
			var z6 = b6.z3.z7(sn[a7].username);
			if (z6) {
				for (var es = z5.length - 1; 0 <= es; es--)
					if (z6 === z5[es].name) {
						z5[es].g1++;
						continue loop
					} z5.push({
					name: z6,
					g1: 1
				})
			}
		}
		if (z5.sort(function(er, es) {
				return es.g1 - er.g1
			}), 0 === z5.length) return "";
		for (var p6 = z5[0].name + ": " + z5[0].g1, a7 = 1; a7 < z5.length; a7++) p6 += "   " + z5[a7].name + ": " + z5[a7].g1;
		return p6
	}, this.aB6 = function(qq, qt, aAT) {
		return 0 === ds[qq].length ? "Rank: " + (qt + 1) : ds[qq] + " Rank: " + (qt + 1) + (2 !== qq && aAT < 100 ? "   " + ds[2] + " Rank: " + (aAT + 1) : "")
	}
}

function aAQ() {
	var aB7 = null;
	this.qv = function(e, pH) {
		var a6R = e.target.getBoundingClientRect();
		this.show(a6R.left, a6R.top, pH), e.target.addEventListener("mouseleave", function remove() {
			e.target.removeEventListener("mouseleave", remove), bk.qu && bk.qu.qx(1)
		})
	}, this.show = function(ef, eh, pH, rQ) {
		(aB7 = aB7 || new rM).show(ef, eh, function(pH) {
			return pH.username + "   " + bk.qc.aB6(pH.qq, pH.qt, pH.aAT) + (0 < pH.elo ? "   Elo: " + (pH.elo / 10).toFixed(1) : "")
		}(pH), rQ)
	}, this.qx = function(rT) {
		aB7 && aB7.qx(rT)
	}
}

function aAO() {
	function aBC(aBF) {
		bk.s.aAV && 1 === bk.s.qU[2] && n.aBG(29).aBH(), bk.s.aAV = 0, n.aBG(29).aBI(), 0 !== bk.s.qW[bk.s.qU[0]].sa && !aBF || n.aBG(29).aBJ()
	}
	this.qW = new Array(4), this.qU = [0, 0, 1, 0], this.aAV = 0, this.aB9 = [0, 0], this.qZ = [], this.dU = function() {
		for (var a7 = 0; a7 < this.qW.length; a7++) this.qW[a7] = new aBA
	}, this.aBB = function() {
		aBC(!0)
	}, this.aBD = function() {
		for (var a7 = 0; a7 < bk.s.qW.length; a7++) {
			var qV = bk.s.qW[a7];
			0 === qV.sa ? qV.aBK = 0 : (qV.aBL = Math.max(qV.aBL - qV.aBK % 2, 0), qV.aBK++)
		}
		aBC(!1)
	}, this.aBM = function(qT) {
		this.qU[0] !== qT || this.qU[2] || n.aBG(29).aBN()
	}
}

function aAP() {
	var aBO = null,
		aBP = null,
		aBQ = 0,
		aBR = 0,
		aBS = null;

	function aBU() {
		6 < aBP.qq || (bk.sw.qx(), n.o(8, 29, new rp(25, {
			rq: 0,
			qn: bB.rr.xl(aBP.qn, 5),
			rn: 0
		}, 29)))
	}

	function aBV() {
		var ef = aBO.ef,
			eh = aBO.eh;
		bk.sw.qx(), aBO = new ss([new q("Kick User", aBa, aBg(0)), new q("Block Chat", aBb, aBg(1)), new q("Censor Username", aBc, aBg(2)), new q("Elo Deduction", aBd, aBg(3)), new q("Gold Seizure", aBe, aBg(4))]), aBZ(ef, eh), aBQ = 2, aBR = 1
	}

	function aBg(id) {
		return !bk.aAJ || bk.qc.qr(aBP) || bk.aAJ.aAT >= aBP.qt || 0 === id && aBP.qt < 200 ? 1 : 1 - bl.dy(id, bk.aAJ.aAT, 0)
	}

	function aBY() {
		return !bk.aAJ || bk.qc.qr(aBP) ? 1 : 0
	}

	function aBh(id, e0) {
		return bk.aAJ ? bk.qc.qr(aBP) ? 0 : bk.aAJ.aAT >= aBP.qt ? 1 : 1 - bl.dy(id, bk.aAJ.aAT, e0) : 1
	}

	function aBX() {
		var ef = aBO.ef,
			eh = aBO.eh,
			aBi = (bk.sw.qx(), aBY());
		aBO = new ss([new q(bl.dx[5][0], function() {
			aBf(5, 0)
		}, aBi), new q(bl.dx[5][1], function() {
			aBf(5, 1)
		}, aBi), new q(bl.dx[5][2], function() {
			aBf(5, 2)
		}, aBi), new q(bl.dx[5][3], function() {
			aBf(5, 3)
		}, aBi)]), aBZ(ef, eh), aBR = aBQ = 2
	}

	function aBf(id, value) {
		aw.aBj.aBk(5, {
			id: id,
			value: value,
			qn: aBP.qn
		})
	}

	function aBa() {
		var ef = aBO.ef,
			eh = aBO.eh;
		bk.sw.qx(), aBO = new ss([new q(bl.dx[0][0], function() {
			aBf(0, 0)
		}, aBh(0, 0)), new q(bl.dx[0][1], function() {
			aBf(0, 1)
		}, aBh(0, 1)), new q(bl.dx[0][2], function() {
			aBf(0, 2)
		}, aBh(0, 2))]), aBZ(ef, eh), aBQ = 3, aBR = 0
	}

	function aBb() {
		var ef = aBO.ef,
			eh = aBO.eh;
		bk.sw.qx(), aBO = new ss([new q(bl.dx[1][0], function() {
			aBf(1, 0)
		}, aBh(1, 0)), new q(bl.dx[1][1], function() {
			aBf(1, 1)
		}, aBh(1, 1)), new q(bl.dx[1][2], function() {
			aBf(1, 2)
		}, aBh(1, 2)), new q(bl.dx[1][3], function() {
			aBf(1, 3)
		}, aBh(1, 3)), new q(bl.dx[1][4], function() {
			aBf(1, 4)
		}, aBh(1, 4))]), aBZ(ef, eh), aBQ = 3, aBR = 1
	}

	function aBc() {
		var ef = aBO.ef,
			eh = aBO.eh;
		bk.sw.qx(), aBO = new ss([new q(bl.dx[2][0], function() {
			aBf(2, 0)
		}, aBh(2, 0)), new q(bl.dx[2][1], function() {
			aBf(2, 1)
		}, aBh(2, 1)), new q(bl.dx[2][2], function() {
			aBf(2, 2)
		}, aBh(2, 2))]), aBZ(ef, eh), aBQ = 3, aBR = 2
	}

	function aBd() {
		var ef = aBO.ef,
			eh = aBO.eh;
		bk.sw.qx(), aBO = new ss([new q(bl.dx[3][0], function() {
			aBf(3, 0)
		}, aBh(3, 0)), new q(bl.dx[3][1], function() {
			aBf(3, 1)
		}, aBh(3, 1)), new q(bl.dx[3][2], function() {
			aBf(3, 2)
		}, aBh(3, 2))]), aBZ(ef, eh), aBR = aBQ = 3
	}

	function aBe() {
		var ef = aBO.ef,
			eh = aBO.eh;
		bk.sw.qx(), aBO = new ss([new q(bl.dx[4][0], function() {
			aBf(4, 0)
		}, aBh(4, 0)), new q(bl.dx[4][1], function() {
			aBf(4, 1)
		}, aBh(4, 1)), new q(bl.dx[4][2], function() {
			aBf(4, 2)
		}, aBh(4, 2)), new q(bl.dx[4][3], function() {
			aBf(4, 3)
		}, aBh(4, 3)), new q(bl.dx[4][4], function() {
			aBf(4, 4)
		}, aBh(4, 4))]), aBZ(ef, eh), aBQ = 3, aBR = 4
	}

	function aBZ(ef, eh, sy) {
		aBO.show(ef, eh, sy), bk.qu.show(aBO.ef, aBO.eh, aBP, 1)
	}
	this.aBT = function(e, pH) {
		aBQ = 1, aBP = pH, aBO = new ss([new q(L(114), aBU, 6 < aBP.qq ? 1 : 0), new q(L(115), aBV, function() {
			if (!bk.aAJ) return 1;
			if (bk.qc.qr(aBP)) return 1;
			if (100 <= bk.aAJ.aAT) return 1;
			if (bk.aAJ.aAT >= aBP.qt) return 1;
			return 0
		}()), new q(L(116), aBX, aBY())]), aBZ((aBS = {
			clientX: e.clientX,
			clientY: e.clientY
		}).clientX, aBS.clientY, 1)
	}, this.a0W = function(code) {
		return 29 === n.ro && (0 < at.rY || !aBP || code.length < 1 || ("Escape" === code ? bk.sw.qx() : (b6.z3.startsWith(code, "Numpad") || b6.z3.startsWith(code, "Digit")) && (code = parseInt(code[code.length - 1], 10), isNaN(code) || (0 ===
			aBQ ? this.aBT(aBS, aBP) : 1 === aBQ ? (code <= 1 ? aBU : 2 === code ? aBV : aBX)() : 2 === aBQ ? 1 === aBR ? (code <= 1 ? aBa : 2 === code ? aBb : 3 === code ? aBc : 4 === code ? aBd : aBe)() : (aBf(5, bH.ow(code - 1,
				0, 3)), bk.sw.qx()) : (aBf(aBR, bH.ow(code - 1, 0, bl.dx[aBR].length - 1)), bk.sw.qx())))), !0)
	}, this.qx = function() {
		aBQ = 0, aBO && aBO.qx(), aBO = null, bk.qu.qx()
	}
}

function aBA() {
	this.sa = 0, this.eE = 0, this.mapSeed = 0, this.aAh = 0, this.aBl = 0, this.aBm = 0, this.aAn = 0, this.aBL = 0, this.spawningSeed = 0, this.zh = 0, this.aAl = 0, this.qX = [], this.qY = 1048575, this.aBK = 0
}

function cJ() {
	var aBn, aBo, aBp;

	function aBu(a7) {
		var button = aU.q0[a7],
			ef = button.ef,
			eh = button.eh,
			a1 = button.a1,
			j7 = button.j7;
		tN.fillStyle = button.aBs, tN.fillRect(ef, eh, a1, j7), a7 === aBn && (tN.fillStyle = aBp, tN.fillRect(ef, eh, a1, j7)), tN.lineWidth = bY.xU, tN.strokeStyle = aBo, tN.strokeRect(ef, eh, a1, j7),
			function(button) {
				var ef = button.ef,
					eh = button.eh,
					a1 = button.a1,
					j7 = button.j7;
				b6.pP.textAlign(tN, 1), b6.pP.textBaseline(tN, 1), tN.font = button.font, tN.fillStyle = aBo, tN.fillText(button.a56, Math.floor(ef + a1 / 2), Math.floor(eh + j7 / 2 + .1 * button.fontSize))
			}(button)
	}
	this.a1 = 0, this.j7 = 0, this.eh = 0, this.gap = 0, this.dU = function() {
		aBn = -1, aBo = b7.mY, aBp = "rgba(255,255,255,0.16)", this.q0 = new Array(7), this.j7 = Math.floor((u.v.r4() ? .123 : .093) * at.pR), this.a1 = Math.floor((u.v.r4() ? 3.96 : 4.2) * this.j7), this.gap = Math.floor(.025 * this.a1);
		var aBq = Math.floor(.26 * this.j7),
			aBr = b6.pP.rR(1, aBq);
		this.q0[0] = {
			ef: 0,
			eh: 0,
			a1: Math.floor(.6 * this.a1 - this.gap / 2),
			j7: this.j7,
			a56: "Multiplayer",
			font: aBr,
			aBs: "rgba(22,88,22,0.8)",
			fontSize: aBq
		}, aBq = Math.floor(.18 * this.j7), aBr = b6.pP.rR(1, aBq), this.q0[1] = {
			ef: 0,
			eh: 0,
			a1: this.a1 - this.q0[0].a1 - this.gap,
			j7: this.j7,
			a56: "Single Player",
			font: aBr,
			aBs: "rgba(22,88,88,0.8)",
			fontSize: aBq
		}, this.q0[2] = {
			ef: 0,
			eh: 0,
			a1: this.a1,
			j7: Math.floor(.3 * this.j7),
			a56: "",
			font: this.q0[1].font,
			aBs: "rgba(100,0,0,0.8)",
			fontSize: this.q0[1].fontSize
		}, this.q0[3] = {
			ef: 0,
			eh: 0,
			a1: this.a1,
			j7: this.j7,
			a56: "Back",
			font: this.q0[0].font,
			aBs: "rgba(0,0,0,0.8)",
			fontSize: this.q0[0].fontSize
		}, this.q0[4] = {
			ef: 0,
			eh: 0,
			a1: this.a1,
			j7: Math.floor(.3 * this.j7),
			a56: "The game was updated!",
			font: this.q0[1].font,
			aBs: "rgba(100,0,0,0.8)",
			fontSize: this.q0[1].fontSize
		}, this.q0[5] = {
			ef: 0,
			eh: 0,
			a1: this.q0[0].a1,
			j7: Math.floor(.8 * this.j7),
			a56: "Reload",
			font: this.q0[0].font,
			aBs: "rgba(0,100,0,0.8)",
			fontSize: this.q0[0].fontSize
		}, this.q0[6] = {
			ef: 0,
			eh: 0,
			a1: this.q0[1].a1,
			j7: this.q0[5].j7,
			a56: "Back",
			font: this.q0[0].font,
			aBs: "rgba(0,0,0,0.8)",
			fontSize: this.q0[0].fontSize
		}, this.a7O()
	}, this.a7O = function() {
		this.eh = Math.floor(.54 * at.j7), this.q0[0].ef = Math.floor(.5 * at.a1 - .5 * this.a1), this.q0[1].ef = this.q0[0].ef + this.q0[0].a1 + this.gap, this.q0[2].ef = this.q0[3].ef = this.q0[0].ef, this.q0[4].ef = this.q0[5].ef = this.q0[0]
			.ef, this.q0[6].ef = this.q0[1].ef, this.q0[0].eh = Math.floor(.54 * at.j7), this.q0[1].eh = this.q0[0].eh, this.q0[2].eh = Math.floor((at.j7 - this.q0[2].j7 - this.q0[3].j7 - this.gap) / 2), this.q0[3].eh = this.q0[2].eh + this.q0[2]
			.j7 + this.gap, this.q0[4].eh = Math.floor((at.j7 - this.q0[4].j7 - this.q0[5].j7 - this.gap) / 2), this.q0[5].eh = this.q0[6].eh = this.q0[4].eh + this.q0[4].j7 + this.gap
	}, this.aBt = function() {
		aBu(0), aBu(1)
	}, this.aBv = function() {
		aBu(2), aBu(3)
	}, this.aBw = function() {
		aBu(4), aBu(5), aBu(6)
	}, this.zy = function(ef, eh, lH) {
		var a7 = -1;
		return 0 === aW.zb() ? a7 = this.a0S(ef, eh, 0, 2) : 3 === aW.zb() ? a7 = this.a0S(ef, eh, 3, 1) : 5 === aW.zb() && (a7 = this.a0S(ef, eh, 5, 2)), aBn !== a7 && (aBn = a7, lH) && (bb.dc = !0), -1 !== a7 && (aP.qR(), !0)
	}, this.a0S = function(ef, eh, aBx, size) {
		for (var a7 = aBx; a7 < aBx + size; a7++)
			if (ef >= this.q0[a7].ef && eh >= this.q0[a7].eh && ef <= this.q0[a7].ef + this.q0[a7].a1 && eh <= this.q0[a7].eh + this.q0[a7].j7) return a7;
		return -1
	}
}

function cK() {
	var aBz, aC0, a5E, a5O, a6C, aC1, aC2, aC3, aC4, a3s, fontSize, li, aC5, aC7, aC6 = 0;

	function aCA() {
		return aw.s.aCB[(aC5 + aC6) % aw.s.aCC]
	}

	function aCF() {
		__fx.customLobby.isActive() ? (l.zm(3249), __fx.customLobby.setActive(false)) : l.zm(3249)
	}

	function aCL(eh, a75, sa) {
		var ly = Math.floor((at.a1 - a5O) / 2) + aC2,
			mB = ly + Math.floor(sa * (a5O - 2 * aC2));
		tN.lineWidth = a75, tN.beginPath(), tN.moveTo(ly, eh), tN.lineTo(mB, eh), tN.lineTo(Math.floor(ly - aC2 + sa * a5O), eh + a5E), tN.lineTo(ly - aC2, eh + a5E), tN.closePath()
	}
	this.dU = function() {
		aW.setState(6), aBz = 0, aC0 = 1, aC3 = "rgba(0,220,120,0.4)", aC4 = "rgba(0,0,0,0.8)", this.resize(), bb.dc = !0, aC5 = 0, aC7 = !1, aC5++, li = bb.lo, aw.s.aCD(aCA(), 4) && (aC7 = !0, aw.aBj.aCE(aCA()))
	}, this.resize = function() {
		a5O = Math.floor((u.v.r4() ? .5 : .25) * at.pR), a6C = a5O + 12, a5E = Math.floor(.125 * a5O), aC2 = 3 * a5E, aC1 = Math.floor(.225 * a5O), fontSize = Math.floor(.3 * a5E), a3s = b6.pP.rR(0, fontSize)
	}, this.aC9 = function(er) {
		aC6 = er
	}, this.ze = function(zY) {
		zY === aCA() && (aC7 = !1, aCF())
	}, this.aCG = function(zY) {
		6 !== aW.zb() || aC7 || (li = bb.lo, aC7 = !0)
	}, this.gm = function(ef, eh) {
		var ly = Math.floor((at.a1 - a6C) / 2),
			lz = Math.floor(.5 * (at.j7 - bY.gap - a5E - aC1)) + a5E + bY.gap;
		return ly < ef && ef < ly + a6C && lz < eh && eh < lz + aC1 && (this.a0e(), aU.zy(ef, eh, !1), !0)
	}, this.a0e = function() {
		aw.s.zn(3260), __fx.customLobby.setActive(false), n.s.t()
	}, this.iS = function() {
		6 === aW.zb() && (aC7 ? bb.lo > li + 12e3 && l.zm(3250) : bb.lo > li + 12e3 && aCF(), 100 < (aBz += .07 * aC0 * (aBz < 16 ? 5 + aBz : 84 < aBz ? 105 - aBz : 17)) ? (aBz = 100, aC0 = -1) : aBz < 0 && (aBz = 0, aC0 = 1), aC3 = "rgba(0," +
			Math.floor(190 - 1.9 * aBz) + "," + Math.floor(120 - 1.2 * aBz) + "," + (.4 + .004 * aBz) + ")", aC4 = "rgba(0," + Math.floor(1.9 * aBz) + "," + Math.floor(1.2 * aBz) + "," + (.8 - .004 * aBz) + ")", bb.dc = !0)
	}, this.tM = function() {
		var ef = Math.floor((at.a1 - a6C) / 2),
			eh = Math.floor(.5 * (at.j7 - bY.gap - a5E - aC1));
		! function(title, eh, a75, sa) {
			tN.fillStyle = aC4, aCL(eh, a75, 1), tN.fill(), tN.fillStyle = aC3, aCL(eh, a75, sa), tN.fill(), tN.strokeStyle = b7.mY, aCL(eh, a75, 1), tN.stroke(),
				function(aCN, eh) {
					b6.pP.textAlign(tN, 1), b6.pP.textBaseline(tN, 1), tN.font = a3s, tN.fillStyle = b7.mY, tN.fillText(aCN, Math.floor(.5 * at.a1), Math.floor(eh + .58 * a5E))
				}(title, eh)
		}(L(117), eh, 3, aBz / 100),
		function(ef, eh, a1, j7, a56) {
			tN.fillStyle = b7.mT, tN.fillRect(ef, eh, a1, j7), tN.lineWidth = 3, tN.strokeStyle = b7.mY, tN.strokeRect(ef, eh, a1, j7);
			var eY = Math.floor(.3 * j7);
			b6.pP.textAlign(tN, 1), b6.pP.textBaseline(tN, 1), tN.font = b6.pP.rR(0, eY), tN.fillStyle = b7.mY, tN.fillText(a56, Math.floor(ef + a1 / 2), Math.floor(eh + j7 / 2 + .1 * eY))
		}(ef, eh + a5E + bY.gap, a6C, aC1, L(23))
	}
}

function cL() {
	var zT = 0;
	this.dU = function() {
		aU.dU(), zT = 0
	}, this.setState = function(aCO) {
		zT = aCO
	}, this.zb = function() {
		return zT
	}, this.aCP = function() {
		this.setState(8), n.r()
	}, this.a0W = function(e) {
		if (!bO.v3) return !1;
		if (!(bb.lo < 400)) {
			if ("Enter" === e.key || "Escape" === e.key) {
				if (this.aCQ()) return !0;
				if ("Enter" === e.key) {
					if (0 === zT) return !0;
					if (7 === zT) return !0
				}
			}
			return !1
		}
	}, this.aCR = function() {
		bV.resize()
	}, this.aCQ = function() {
		return !!bV.qx()
	}, this.gm = function(ef, eh) {
		!bO.v3 || bV.gm(ef, eh) || 6 === zT && aV.gm(ef, eh) || bU.gm(ef, eh) || aP.gm(ef, eh)
	}, this.zy = function(ef, eh) {
		!aP.a7H && aU.zy(ef, eh, !0) || aP.zy(ef, eh)
	}, this.click = function(ef, eh) {
		aP.a0N()
	}, this.a01 = function(ef, eh, deltaY) {}, this.aCS = function() {
		aU.a7O(), bb.dc = !0
	}, this.tM = function() {
		8 !== zT && 10 !== zT && (tN.imageSmoothingEnabled = !0, this.wd(), 0 !== zT && (aP.tM(), aK.tM(), this.aCT(), bU.tM()), 0 !== zT && 6 === zT && aV.tM(), bV.tM(), n.tM())
	}, this.wd = function() {
		var aCV, aCU;
		if (__fx.makeMainMenuTransparent) tN.clearRect(0, 0, at.a1, at.j7);
		else bO.v3 ? (aCU = at.a1 / bO.ej, aCV = at.j7 / bO.ek, tN.setTransform(aCU = aCV < aCU ? aCU : aCV, 0, 0, aCU, Math.floor((at.a1 - aCU * bO.ej) / 2), Math.floor((at.j7 - aCU * bO.ek) / 2)), tN.drawImage(bO.v5, 0, 0), tN.setTransform(1,
			0, 0, 1, 0, 0), tN.fillStyle = b7.mT) : tN.fillStyle = b7.mP, tN.fillRect(0, 0, at.a1, at.j7)
	}, this.aCT = function() {
		var eh = Math.floor(.3 * at.j7),
			canvas = aX.aCW("territorial.io"),
			hG = (hG = 1.75 * at.j7 / canvas.width) * canvas.width < .98 * at.a1 ? .98 * at.a1 / canvas.width : hG,
			ef = (tN.globalAlpha = .15, tN.imageSmoothingEnabled = !1, Math.floor(.5 * (at.a1 - hG * canvas.width))),
			ef = Math.floor(ef / hG),
			eh = Math.floor(eh - .5 * canvas.height * hG),
			eh = Math.floor(eh / hG);
		tN.setTransform(hG, 0, 0, hG, ef, eh), tN.drawImage(canvas, ef, eh), tN.setTransform(1, 0, 0, 1, 0, 0), tN.globalAlpha = 1, tN.imageSmoothingEnabled = !0
	}
}

function ck() {
	this.aAl = 0;
	var aCY, aCZ, aCa, aCb, aCc, aCd = this.aCX = 0;

	function aCh() {
		aCb = aCc = null, aCd = 0
	}
	this.dU = function(qV, aAi, aAj) {
		n.r(), bk.zo(), aW.setState(10), aCb = qV, aCc = aAi, aCd = aAj, this.aAl = qV.aAl, this.aCX = aAj, aCY = 0, aCZ = bb.lo + 4500, aw.s.zg > aw.s.aCe && (qV.zh += aw.s.aCe), aw.s.zh = qV.zh, aw.s.zg === qV.zh ? (console.log("direct pass"),
			aCa = 0) : (console.log("delayed pass"), aw.s.close(aw.s.zg, 3247), aCa = 2, aw.s.aCD(qV.zh, 5) && aw.nl.aCf()), tN.imageSmoothingEnabled = !0, aW.wd();
		aAi = aX.aCW("loading"), aAj = (u.v.r4() ? .396 : .25) * at.pR / aAi.width;
		tN.setTransform(aAj, 0, 0, aAj, Math.floor((at.a1 - aAj * aAi.width) / 2), Math.floor((at.j7 - aAj * aAi.height) / 2)), tN.imageSmoothingEnabled = !1, tN.drawImage(aAi, 0, 0), tN.setTransform(1, 0, 0, 1, 0, 0)
	}, this.lF = function() {
		0 < aCa && bb.lo > aCZ && (aCa--, aCZ += 4500, 0 === bb.aCj) && 0 === bb.jb() && (0 === aCa && aw.s.zh < aw.s.aCk && (aw.s.zh += aw.s.aCe), aw.s.aCD(aw.s.zh, 5))
	}, this.aCl = function() {
		return 10 === aW.zb() && (bk.aAK.aAm(aCb, aCc, aCd), aCh(), !0)
	}, this.aCm = function() {
		10 === aW.zb() && 2 <= ++aCY && (bk.aAK.aAm(aCb, aCc, aCd), aCh())
	}
}

function cM() {
	var aCo, canvas, yp, aCp;

	function aCv(e0, name, aCw, p6) {
		yp[e0] = name, canvas[e0] = new Image, canvas[e0].onload = function() {
			! function(e0, aCw) {
				var a2A, a2B = null;
				7 === aCw ? a2A = b6.a0k.a2D : 8 === aCw ? (a2A = b6.a0k.a2G, a2B = .1) : 3 === aCw ? (a2A = b6.a0k.a2E, a2B = .06) : 5 === aCw ? a2A = b6.a0k.a2H : 6 === aCw ? a2A = b6.a0k.a2C : 4 === aCw && (a2A = b6.a0k.a2I);
				canvas[e0] = b6.a0k.a29(canvas[e0], a2A, a2B)
			}(e0, aCw), aCy()
		}, canvas[e0].onerror = function(e) {
			console.error("Error loading image at index", e0, "Error:", e), aCy()
		}, canvas[e0].src = "data:image/png;base64," + p6
	}

	function aCy() {
		aCo--, aCs()
	}

	function aCs() {
		0 === aCo && (aCo = -1, aCu(), bb.dc = !0, canvas[7] = aCp, canvas[8] = aCp, canvas[9] = aCp, canvas[10] = aCp, 5 === n.ro) && n.aD0().aD1.resize()
	}

	function aCu() {
		aH.a3L(), bU.aAC([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== u.id, 1 !== u.id, !0, !0, !0]), af.v8 = new x1, af.v8.dU(), aq.dV()
	}
	this.dU = function() {
		if (void 0 === canvas) {
			aCo = 23, canvas = new Array(aCo), yp = new Array(aCo), (aCp = document.createElement("canvas")).width = 1;
			for (var a7 = aCo - (aCp.height = 1); 0 <= a7; a7--) canvas[a7] = aCp;
			aCu(), aCv(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aCv(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aCv(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aCv(3, "orders", 6,
					"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"
					), aCv(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), aCv(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aCv(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAptRLHQAAAAAAAAAAAAAAAAAA5K4OHTpE165dY++9947dd989SktLo3nz5tGoUaNo2LBhlJSUxA477BCFhYX/8X2ffvppfPbZZ/Hxxx/HunXr4sMPP4z3338/3nnnnVi1alW88sorsWjRoli7dm2iRwYAAAAAAAAAAAAAQJYZ7gEAAAAAAAAAAAAAAAAAIiKie/fucfTRR0eXLl2ibdu2seeee0aTJk1q7f4qKyvjrbfeipUrV8ayZcvimWeeiTlz5sTbb79da/cJAAAAAAAAAAAAAAAREQURsTF1BAAAAAAAAAAAAAAAAACw/bVp0yYGDBgQvXr1iq5du0azZs1SJ0VlZWUsX748nn322ViwYEHcfvvtUVFRkToLAAAAAAAAAAAAAIA6xnAPAAAAAAAAAAAAAAAAAGRIq1atYtiwYXHEEUdEly5dol69eqmTNmvNmjWxePHiuP/+++Pmm2+OysrK1EkAAAAAAAAAAAAAANQBhnsAAAAAAAAAAAAAAAAAIANOOeWUOOOMM6Jnz55RXFycOqdG3nnnnZg3b15cd911sXTp0tQ5AAAAAAAAAAAAAADkMcM9AAAAAAAAAAAAAAAAAFBHFRYWxqhRo+KMM86Idu3apc7ZZj7//PN4+umn48c//nE89NBDqXMAAAAAAAAAAAAAAMhDhnsAAAAAAAAAAAAAAAAAoA668MILY+jQodG6devUKbVm48aNsXDhwpg8eXLMnTs3dQ4AAAAAAAAAAAAAAHnEcA8AAAAAAAAAAAAAAAAA1CEnnXRSjB8/Pjp27Jg6ZbuprKyMefPmRVlZWbz00kupcwAAAAAAAAAAAAAAyAOGewAAAAAAAAAAAAAAAID/csUVV0T79u1TZ2TO9OnTY8GCBakzyFOtWrWK6dOnx7HHHhsFBQWpc5JYt25dzJgxI8rLy6OysjJ1DgAAAAAAAAAAAAAAOcxwDwAAAAAAAAAAAAAAAPBfFi9eHN/4xjdSZ2TO0KFDY9asWakzyENnnXVWTJ48OZo1a5Y6JSe88MILcc4558SSJUtSpwAAAAAAAAAAAAAAkKMKUwcAAAAAAAAAAAAAAAAAADVTv379uOOOO2LWrFlGe/5Nly5d4rHHHosRI0akTgEAAAAAAAAAAAAAIEcZ7gEAAAAAAAAAAAAAAACAPNSuXbtYvHhxnHLKKVFQUJA6J+c0btw4rr766rj99tujsNDHKQEAAAAAAAAAAAAA+E+uNAcAAAAAAAAAAAAAAACAPHPIIYfE448/HgcccEDqlJx36qmnxtNPPx1NmzZNnQIAAAAAAAAAAAAAQA4x3AMAAAAAAAAAAAAAAAAAeaR///7xwAMPRMuWLVOn5I2DDz44fv/730ebNm1SpwAAAAAAAAAAAAAAkCMM9wAAAAAAAAAAAAAAAABAnujfv3/Mnj07mjZtmjol73To0CHmzZtnvAcAAAAAAAAAAAAAgIgw3AMAAAAAAAAAAAAAAAAAeaFPnz4xe/bs2HHHHVOn5K22bdvGI488Ei1atEidAgAAAAAAAAAAAABAYoZ7AAAAAAAAAAAAAAAAACDHde/e3WjPNtKuXbt46KGHoqSkJHUKAAAAAAAAAAAAAAAJGe4BAAAAAAAAAAAAAAAAgBxWWload9xxRzRr1ix1Sp3RtWvXuPvuu1NnAAAAAAAAAAAAAACQkOEeAAAAAAAAAAAAAAAAAMhh9957b+y1116pM+qcY489NiZPnpw6AwAAAAAAAAAAAACARAz3AAAAAAAAAAAAAAAAAECOuvzyy+PQQw9NnVFnDR8+PPr27Zs6AwAAAAAAAAAAAACABAz3AAAAAAAAAAAAAAAAAEAOOuyww+L8889PnVGnNWjQIKZNmxaNGjVKnQIAAAAAAAAAAAAAwHZmuAcAAAAAAAAAAAAAAAAAckxhYWFMnTo1SkpKUqfUea1bt44ZM2akzgAAAAAAAAAAAAAAYDsz3AMAAAAAAAAAAAAAAAAAOWbixImx7777ps7IjFNOOSWOOeaY1BkAAAAAAAAAAAAAAGxH9VIHAAAAAAAAAAAAAABAXVFaWhr77LNPtGjRInbZZZfYeeedo2nTptGkSZNo0qRJ1KtXL3bYYYcoKSmJevXqRaNGjaKgoOBf319YWBgNGzaMDRs2xKeffvqv2ysqKuKTTz6JTz/9NDZs2BAfffRRfPzxx7F27dr48MMP48MPP4z33nsv/va3v8Vrr70Wb7/9doqHDwBsI61atYpzzz03dUam1KtXLyZOnBjz589PnQIAAAAAAAAAAAAAwHZiuAcAAAAAAAAAAAAAALagsLAwDjzwwGjfvn20bt06WrZsGbvttls0a9YsSktLo0mTJtG0adMoKSlJnRoREZ999lmsWbMmPvjgg3jvvffi7bffjrfffjtWrVoVy5Yti8WLF8e7776bOhMA2IQpU6ZE06ZNU2dkTrdu3WLYsGExY8aM1CkAAAAAAAAAAAAAAGwHhnsAAAAAAAAAAAAAAOCfOnToED179ox99tnnXwM9LVu2jBYtWkT9+vVT51VZgwYNYtddd41dd911k1/zj3/8I956661YtWpV/OUvf4lly5bFkiVL4plnntmOpQDAF7Vt2zb69++fOiOzfvjDHxruAQAAAAAAAAAAAADICMM9AAAAAAAAAAAAAABkTv369aN3795x0EEHRadOnaJ169axxx57RNOmTVOnbTc777xz7LzzztGxY8f/uH3dunXx17/+NZYvXx5//vOfY+HChTF//vyorKxMVAoA2TJhwoRo2LBh6ozM2nvvveO8886LadOmpU4BAAAAAAAAAAAAAKCWFUTExtQRAAAAAAAAAAAAAABQmw477LA49NBDo2vXrtGuXbto3bp11K9fP3VW3vjkk0/i9ddfjz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoVqWfQCz344IOxYcOG1DM4DwUFBbFs2TLhHgD+o7Zs2RJbtmyJ8ePHx/e///247rrrorS0NPUsuqHKysr4zW9+Ew8++GA0NzenngMAAPy3V155JV555ZUoKCiIxYsXx/XXXx9XXHFFFBUVpZ7GJ1RVVRUvvPBCbNiwIf7yl7+kngMAABdcR0dHbN26NbZu3fpPn581a1aUl5dHaWlpjB49OsaMGRPFxcUxatSoGD58eIwYMSKGDBkSAwcO/JSXfzLnzp2L1tbWaGxsjMbGxmhqaor6+vo4efJkHD9+PGpqauLtt9+O3bt3R2NjY+q5AAAAAAAAAN1Gn4joSj0CAAAAAAAAAAAAAIC8XX/99bF48eJYsGBBDB06NPUcEjp58mS89NJLsX79+vjTn/6Ueg5kbdy4cTF48ODUM7JTW1sbbW1tqWeQ2JAhQ6KkpCT1jOycPXs2ampqUs+AHqt///7xne98J6655pqYO3duXHTRRakn8T+0t7fH/v3749VXX41nnnkmtm3blnoSdGuux9JoamqKEydOpJ6RpYKCAnH1RA4fPhwdHR2pZwDnobCwMMrKymLs2LExevToGDFiRAwbNiyGDx8effv2jaFDh8aAAQOisLAwBg0aFP369YuIiH79+kVhYeG/fO2urq5obW398HFLS0u0t7dHa2trtLW1xdmzZ6O5uTlaWlqioaEh6uvr4/jx43H48GExHgAAAAAAAIB/k3APAAAAAAAAAAAAAADdRlFRUSxZsiS++tWvxuzZs6N///6pJ/EpaGtri+3bt8fmzZtjzZo1blQJAAA9XEFBQdx0002xaNGiuOyyy2LixInRp0+f1LOy09DQEK+//nq8/PLLsWHDhjh69GjqSQAAAAAAAAAAAADdinAPAAAAAAAAAAAAAADd0oQJE+L222+PRYsWxfTp06Nv376pJ/EfdO7cudi9e3e88MIL8fjjj8exY8dSTwIAAC6QGTNmxI033hhz5syJGTNmxMiRI1NP6pU++OCDqKys/DDWs3nz5tSTAAAAAAAAAAAAALo14R4AAAAAAAAAAAAAALq9yZMnx7e+9a1YsGBBzJo1KwYMGJB6Ev+Gtra22Lt3b7z44ovxi1/8Impra1NPAgAAEvjKV74SCxcujM9//vNRXl4eY8eOTT2pR6qrq4uDBw/Gnj174s9//nM899xz0dnZmXoWAAAAAAAAAAAAQI8h3AMAAAAAAAAAAAAAQI8yevTouPXWW2P+/Pkxe/bsGDlyZOpJ/Av19fWxc+fOePHFF+Ppp5+OxsbG1JMAAIBuZsaMGbFw4cKoqKiI8vLymDRpUgwbNiz1rG6lqakpqqqq4m9/+1u88cYb8cc//jHeeuut1LMAAAAAAAAAAAAAejThHgAAAAAAAAAAAAAAerTrrrsuFi1aFJdddllMmTIlBgwYkHpS1trb22Pfvn3x2muvxZYtW+L5559PPQkAAOiB5s6dG3PmzIlp06ZFWVlZfOYzn4lx48b1+u98H3zwQdTW1sa7774bb7/9duzbty927doVe/bsST0NAAAAAAAAAAAAoNcR7gEAAAAAAAAAAAAAoNcoKiqKG2+8Mb785S/HzJkzY/LkydGvX7/Us3q1jo6OqK6ujt27d8fWrVvj17/+ddTX16eeBQAA9FJz586NioqKmDRpUowfPz5KSkri4osvjjFjxkRRUVH06dMn9cR/qb29Perq6uL48eNx/PjxOHLkSNTU1MShQ4di7969UVlZmXoiAAAAAAAAAAAAQDaEewAAAAAAAAAAAAAA6LWKioria1/7WsybNy+mT58e06ZNi+Li4tSzerSWlpY4cOBAvPnmm7Fjx4743e9+FydOnEg9CwAAIAoLC2P69OkxZcqUKCkpidGjR8dFF10UxcXFMXz48Bg2bFgMHjw4Bg0aFIMHD47+/fvH4MGDo6CgIAoLCz/xeU6fPh1dXV1x9uzZaGtri9OnT8fp06ejpaUlTp8+Ha2trdHU1BQnTpyIurq6eP/99+PIkSNRXV0d1dXVF/AdAAAAAAAAAAAAAOB8CPcAAAAAAAAAAAAAAJCVWbNmxfz582PGjBlRXl4eEyZMiFGjRqWe1S21tLTE4cOH48CBA/HWW2/Fq6++Gi+//HLqWQAAABdM3759Y+LEiR85VldXF42NjWkGAQAAAAAAAAAAAHDBCPcAAAAAAAAAAAAAAJC9srKy+NKXvhTTpk2Lz372szFhwoQYN25cjBw5Mvr06ZN63gXX2toaR44ciffeey8OHToU+/bti+3bt8frr7+eehoAAAAAAAAAAAAAAAAAXBDCPQAAAAAAAAAAAAAA8DGKi4vj8ssvj0svvTRKS0ujpKQkxowZE6NHj45Ro0ZFcXFx6omfyLlz56K+vj4aGhri/fffj6NHj0ZNTU0cPnw4du3aFZWVlaknAgAAAAAAAAAAAAAAAMCnSrgHAAAAAAAAAAAAAAD+TUVFRVFeXh4TJkz4SNSnqKgohg0bFkOHDo2hQ4fGkCFDorCwMAYNGhT9+/eP/v37x6BBg6JPnz6f+FxdXV1x+vTp6OjoiDNnzkRbW1u0trbGqVOnorW1NVpaWqKpqSnq6uqioaEh6urqoqamJg4ePBgHDhy4gO8CAAAAAAAAAAAAAAAAAPQ8wj0AAAAAAAAAAAAAAJBYWVnZxz7X0tISx44d+xTXAAAAAAAAAAAAAAAAAEDvJ9wDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFYKUg8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgE+TcA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWRHuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArwj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZEW4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICsCPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkBXhHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyItwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFaEewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIinAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFkR7gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK8I9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRFuAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArAj3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAV4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsiLcAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBWhHsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyIpwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZEe4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICvCPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkRbgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKwI9wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQFeEeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALIi3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAVoR7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMiKcA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWRHuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArwj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZEW4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICsCPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkBXhHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyItwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFaEewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIinAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFkR7gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK8I9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRFuAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArAj3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAV4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsiLcAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBWhHsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyIpwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZEe4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICvCPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkRbgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKwI9wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQFeEeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALIi3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAVoR7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMiKcA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWRHuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArwj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZEW4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICsCPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkBXhHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyItwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFaEewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIinAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFkR7gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK8I9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRFuAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArAj3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAV4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsiLcAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBWhHsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyIpwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZEe4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICvCPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkRbgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKwI9wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQFeEeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALIi3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAVoR7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMiKcA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWRHuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArwj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZEW4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICsCPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkBXhHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyItwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFaEewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIinAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFkR7gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK8I9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRFuAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArAj3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAV4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsiLcAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBWhHsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyIpwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZEe4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICvCPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkRbgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKwI9wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQFeEeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALIi3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAVoR7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMiKcA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWRHuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArwj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZEW4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICsCPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkBXhHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyItwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFaEewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIinAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFkR7gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK8I9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRFuAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArAj3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAV4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsiLcAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBWhHsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyIpwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZEe4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICvCPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkRbgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKwI9wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQFeEeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALIi3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAVoR7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMiKcA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWRHuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArwj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZEW4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICsCPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkBXhHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyItwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFaEewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIinAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFkR7gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK8I9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRFuAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArAj3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAV4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsiLcAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBW/guPa8fbi/a0LQAAAABJRU5ErkJggg=="
					), aCv(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aCv(8,
					"googleplay", 3,
					"iVBORw0KGgoAAAANSUhEUgAAAQ4AAABQCAMAAADfnGukAAAASFBMVEUAAABZFxMoKidGSEWjLiQeaDJwVQAuZLfsQTFkZ2TMTltEhfM3krZ/gX4yqFSNj4ykpqOQw44D/hN02Xr2uwC+wL3e4N3///8++cywAAAGlElEQVR42u2ci3biKhSGEVqnOIOhpwHe/00Plw1sEshVm66avdaMVgnKl335IRHyH9jXaxtQIIGFfHn7zDg+pewYfWFj3AL5AhwWBiWvbsw7CHG+wclphDr/IDZvdCcL4GFxSHmSiPHySb7OUElmPeNTnmk0Gnc4Tgw5Wk4cJ44Tx4njsTjonopDpTZGiZCvVTBC4YkKuo/ax/ieStWeK2M0VLsOWtpjj8VB3+/W3rcS4dpo5cbF7B/CBCMMnpgwOmYf43tGwJH2IKU0/G3/cB0Qe+yhOOgd7H1bt0bzcHaJxyHyWyoMMOIYDlYZ7xgWJw849E/Acc+2BYjOY16HQ8BLhBpDPRx/7ME43u/3PUC4KfpcgUObGJ7SuYcy1L9yMI5/95LHyhTih4JxSGaNzuOgITbSmxYHd48H4/gz4LHSQcKQIXGmVCrmccRXMg7m/x2N4++QxyogwTt8WQ04lLDGtngHc2nZPh6MY8zjTrfkDje+PbnDNu5MdzyOCo/lDpIqi3Bg9lQW5nvTx+Oo8FgMJOoOYTTdqjtEasyN+QE4ajyWAkmqlGJVugDHUJUyeO0H4KjyWJhCqnOWIFRTB7Q6IwlzFoYb04PnLICjzuOd/FqbwVHn8XuBzOFo8LhfXxRHnUff9/Q1cdR49M6ur4ljzKMHu74kjiGPPtv1FXGUPHps1+kUQpmdunH2y3BgHv3AJhzECapgci8RlmbENegiWzw97vnTcGQe/djaOh2Z2leJBFpcrsyQkGkGwn+LsF+KI/Ko0Gj4hzSlafY9OExYXHgyjsCjr1p9QcwzkM5pFbqY8A04PI9n43A86jRq7uEJaJHmcztpzONQzFuIUPYNOP7+6xfjEMN0wXdOSedx4BOhvgPH7WMpDro7OLbjYAHE03HcPj4aPGgtjWp6DA6ifbQ8G4ejUecxjhUz9eWfjUN9B45Ao8qjnunJnDxT6NIU7bTJa2ChkXexjnCvpzIO5pbZTHF739g7aMYRPkz7+4ixTmM1obYUR6RR4VE/le3MwZI8S/HUlZrBLwfGNjpduRKFnFENHG6dWafckfrxa9m6vFPAyI04Mo0hj2tDc4iaghbwdZOxkWILw6KFokU41LDlEAcHqIAD98MjqpTt2TYcmEbBoy5ICxysHD4NQxE+OoJ/BN+QwkdBGBc4OAi4jKOD1z3ADn+E9rg7FXsNh0ncjw50eHJIvS13lDQyj9bsbQqHSnqdw+Bp1igSTplIuThEVsRBUzz5XmlDlfKsSuF6TeiHozDOYNbiGNKIPJqVVOKwLHFgH+VhSBKdJwhoFOMc4+jiaJjEiYZVJkcplVqHdDcPcN+eRoq86hxLcIxpeB7X6aqoR7nD6wGBSSl/hvB58l/X/69xoYg4Qg1Nc+UajjgxiDgoRKUMJCUEmaoX7nkcNRofH5PLYIUnFwXQfx1eiomiKntmHDPrEA7fb0gxUDqHc5ZC+hRlLEemJtlL1uKo0nibUTO6UsRC+lc4n1dwqOhCAjfCTWFkbd2BcZRhpJJHilqVXYCjRuPtskRDDquY8m6qZrxDjbyjhmPwo4I2Dp+4nfJiECw+aSgQ8qtx1GhcFohdPZq0QN5s5A5W5A6Gc4ca5A64N2AZjhwTqY1P0y2dOI3jtg0GOCn+3rES4LTCcmVRqJkqqiAbVpbIqWPzONAbKj7lqBqvw3FbnTQIKWS3YnjZVJd+47OcggHLDI1DsPEsT8e6w70gV3iHNIXiqFbZGRy39UljvFQa7g/LMxQGEhQEJyVZOnZZlYZnQsiGKvVVuyi07dxhPyz0DG06055wT+C4bYuT+kJ6TiV8qB+LiQictSVzlnLFZ2llgfxk1k7wb1vjhKAF0mxdhVNaXJejISYezRktKpRtHBk+L9OIXInjthNGUIQqqgRKhosbeWE5ie5iFQPigYbKwtNvGmJTVCdp+g0Equtwt1FobpNYbqPrEmwKx21PnJSXJVntoxkbN6TVRmrs2ZStWngc/BCFT6zGNHC8PQjGZuMSeb1+aNctCTaBg+yNk50wdEr9XTvQN17tneLbwnE5EAYkwC5VxYfeAaBaEmwKR+RxIYcYXMZ8wNXMVc4x+Vu4y+UgGK010UeYLIr+GhyHmhzLi0dYa6Hjp+MgVDjpIB59gyJjU1X6/B3tiePEsQbHuX8HEsPn7i6onslz7x8cK59uZyhxkggrNG5nKOseZ7iQtG+Y43H6R95Vzu85yF96z0HKurAJ47kjZdyR0u/R+T/YMVr2IqN1wwAAAABJRU5ErkJggg=="
					), aCv(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aCv(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aCv(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aCv(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aCv(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aCv(14, "bestPlayer", 5,
					"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"
					), aCv(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aCv(16, "apple", 3,
					"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"
					), aCv(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aCv(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aCv(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aCv(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aCv(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aCv(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MmU1NGFlZTktNWQ3YS1kNzQ4LWE0Y2EtMjg0NTZkNWVhZWQ2IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MmU1NGFlZTktNWQ3YS1kNzQ4LWE0Y2EtMjg0NTZkNWVhZWQ2IiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHN0RXZ0OndoZW49IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4XsEKJAAAL9ElEQVR4Xu1cCXBV1Rn+zn15L/tCAlmQhCCGsJWAEQEdGJVaR7Fqq+MWnY5aSpWxq05nnLZaday1jmPdZpw61akiVK2OraNDq8VKQBbZEZBVCMRANhIS8vbb7z/3XnzKk4KxeSf1fTN33r3n3vdyz/f+5fv/e15UfFGdjVQgFgZ8WYjX/Rw7e0uwfmcPtmxai2WNjYjForAsy73QbKSGQDsOO9wD6+K/IlgwERkZfmT4gJaWFtx43dWIRgcPgQN/lza/L7G+2gbYvgACmX74SJ5g8Vtvoq2tddCQJ0jNnSoyVjAaqngCjTEOxaHGpe/hqSceR35+ATlOTVT5MkgBgXEgUADkj9RHPtfaRo8ejUvmzEFmZha6ug4jHKaVDgIMfAzULhyEXXsjrPq7eAef/Q6bmvZhz57dePTh32Pf3r0oKCyEUmKjZmLgLVC4sDKA5kbYnyx3xlyI61ZWVmHWrPPw8mt/w7UNN6C3t8dol06BC5NBxkDVdwj2hkdI4gogfARCkURDjyoh7ftz52FMTS1CoZA7ah58d19Vfo+7P3AQl6SUUb37YXdshH1gCVSkF1ZuGUJRCxl+v87EWdnZqKmtpTZcilAwaGR2Tt0dCYn+PKie/RSA7yP+zvcQX/sgSctx4qSLvNxcdLS1GSttUn9XMbpndhms6zbDOvt+DpC8hKSxfNkyRKIRYxNJagkMdcHOPQ3WrCehhoynvMnj4KdE7d37MX57/2+0NjQVKSPQ7muDPeICWOc9DZROcXhzXVcSyBOPPYqbbmzA0GGlRsuY1NTCtDyMuhyYcgdU3ggyFuOdOPXctq1b8dSTj2HVihUU1Zmskyl5DMbAW2A8SrcdDjXxVpc8iXkOeQsXvIDrr7kKa1atQk5OjvHkCQaewCiTxulXcIclncB1z0ULF+Deu3+FQlYeIl9MdttEDLAL80/F44jbUfiu3+qOOagaXqqrkKysLHdkcGCALZBWFemmXLkXdvN77piDTVt3oLKqCt3dzMwJOtB0DLwL+wthr7gLyp8PO9rnDkK77qKXX0V9/VR0tLfTUF0XNxypycIUz3agCGrm41D5VUBOqXsC6Ovrw4rly3H7/HkoKixCpuEunRod6MuECnXCXnIz7K6ddOuj7gkWJUwg58+ejTUbPkTVyGocbGkx2qVTQ6AgI4vmT0nzr1tgb3/BGXN5Er5EA7740iu474HfoaurC1GWcyYidQQKfAFKQD/slb9EfMlc2OEOPewpmGCwD9+58ko8+/wCTWrroUPGxcbUxMDjwFuIRbSrqpl/AMqmQQUKddIWCGnSjVm9eiXmz5vLfR9yc3OdkylGavqBx4FMKQvKJomta4He/VAV0+kfAeesa5JlZeU4a+rZ6KZLf7xnT9JKRazB5X1AkFoXToSQlMEKJEQ3/ujPiL1+EeyDq1i5BHX5JxDCJk85E9c13EC92K3HPo+BJE9gDoEerAyorBJYJNJefDXsD5+GffQT9yRdxufDuPETkMFXE7KzeQR6kAQTKIC97iHYH7/hjLmEBQIB+P1mNBrMJVBAt1Z0a3Rshd2+0XFzQizvaF/wWGxMJcwmkETZvlyoSbdDlUxyB2UJyFvwG9LqMptAJg9VOJKvMXcACIcjeOC+e1A4pMgdSS0Mt0BWKnkjoQqcZSCCQMCPkmHDHL1iAIwm0A51QY27RT949+qP1StXUgPu1tnYBJhLoE3Kcsphd+/W3Rq50RgrksbG93S73xQYTCDFc04FrNHfdQeobFjOvbRoIQk0o4wTmEugNFuHTdbPUGyxRqKzs1NXICatUjCTQFkCzKJMnXEt67fMY3qv+UATAn6/3jcFZhIY6QXqfgqV6a1IcAi85+5fI7/ArFUKhrowCTuyV8dADzt2bMeHmzayhEtb4Ikh1Uc8DDXqMt2d0dmY+OfixcjLlbUzZsFACyRh2RTKuZXOobsEeP26NbrNbwqkyasbve6xWZBGavOSY8VGLBbDtm3b4Psf1r9Chvw+RTZZzCmL3OXvekSFwyG9+L1p3z60t7XpVbOyGejCTspQov9YA0sHS6qOurrJX+mDJSElFArqB1atra0Icn8oS8QhQ4px7sxZGFM7Fv5AQJMUjUQxcVIdfjDvNnywYTMW/OUVLF+1Rm+GPBNJgCz99QWwq/IOVJx5DbKZM0TG3PbDudi4fn1SN46T6Hjc1qRYvFYqFrEeeZ98GTJBST7SBpNNnj1LT3HKlHpMmzEDw08bjpqaWoysrtZaMysrE9nZOQge7UPXkS74rQwUDxuq/5Z8lv5tiyutDCSQCjB6BHtmr0V1eRFv1Bm+de4t2Lx5k56451o9R1gj8/ri4mKUlJRoidPZ0YmKigpUkQw5LxMVC/5g9SoUFhXp910851JMmzYdtWPH6c+WzxOIQPeISQr5AviSeI2hFujD9gnPoGZ8vasAgcsuuQi7du1EJBzhxMdq1543fz6GlgxFLd0tm/WxPJTXT/YSJth84AAt7DT36FNEGOPERROhyXF2/zuOdlNmFZhIILdgK9QVbyNWMJb1rzOl9evWoaOjHWfUnIHhwytJVPyEmlCs6pQ6NhJfM/h5Wz4gu7JPcjO55Q8BykYAB/cD7/8DePdNYM1SoOkQz9FijSOQkOW/6pyHoU6/XGvBz1vVZ3BKZpMED/4Y2LaDFtXO17X88qLOZ8pqkzLq0AlTgV2bgMOdPMcx+VsShuW74XVGEiilnF35LYrpK6CqLnQHT4DDbUCAs9rOicoE9+8GhpQDWSRgxxaguAQYMwkopyuvfhdobwFe/RP3lwF5+UAn3VEIEZUk7/e+ENHw8kRVzoleSTznwkwCpfpQGbCrv00SuZWe5XRnpDLx0E2LeON54O8LgZYDQEczr3HXWkf4Ko+NvQkLAbLIS0jIIkvdZMWzIjnfDzFnJoECeZje2wy7YiasC55xqhNmUKZK4JmHgbl3AgxNkNagEOBZiMAjzoPMMHGWidf1E2YRKKk1HoEdYjwKMHhXXwrrnId0T1CWxGnyomFgHPc9i0oxDLgFF1J1xPpgF42BuuA5WA3bYJ1LS5OlHX66rtdEbTjXiU2G3PnAWqBYmO6uOJamh6JMd7JOUDLt+U9DDaP2k58/6JO8zsu+IcbALRuBa6fTOnk8aAiUCdtiHZxwjNYgv/WViVk+zo1RWI71dTJZmRVfZV9DWlOMZXotNMcyGLACzHoy+7KzNXFq1KX6WFXPkTckR28X8BKz5i9+xvfx2BDyBF9MoJAgckL8pWA0ZcEYgAFddVAWZJcCPU3OIvG29XKxM9bLbJiRQ5cjSSRYQ57rVs5mzGItGexgXLvk5GO3ZNo/0o0b36DkoPUVc+wrCPxfJZITSPJ0U3PEbKhp9zHlM6CLJXnWdjLwMmYyyEoDj+BkCNKtLxwF7KTal2QhkkPc1jDyBMlnGKbLjJyjf44Fn6u9jpGX3GA/dVsXmjyO6fHPn0sgL/F9Eufuuhmop6u3kDwqF8gjECHQQPIEx1ugZEP5CcKZd9ICv0l3dH8AfaIuxakgRksWC9tKl2zaDixlbZlTBPz7deAQKwrJMZ7IHQRQ8YXfkCYZSSJxdFv0NENNfwBq8k/cSxzYW95iIH8WKpeuVcoyacb5nDDVf1UN0MrXiUwKO1hKjZvCWNgDdFHLFbGEeofESCzbsBpYsdipErpo4Yf5oWLcnmGLiwpp8j0Zam3JoGILxtuymBHyC8ryGQzyLJ2G1tFS5H9byayI156jfLjJUf5iIdI+k8I6sRnSy01WXIg6EZuW62STSkGIkY8SyxKId7sePpjISgYVD3baCLj/m0Wkio+seEHec936QhLG4jJZDvk/IKE/sFSmdH1dBoQ8DTe3yPiPGuiqX0Ce4GtMniB5FpYm5kfUdzczzr38oqO/0kgKZYdDNsIs1jsoct9+ha8twLOPAH0MYGJd5iyEMhLKnlrIYoMEtkvRzhH5n1+JLaI0Tghlj2caEEvzyPqax7RThaWTwyDUX6Yg7aT9RJrAfiJNYD+RJvAkcdBpoB+HNIEnibLEuj8BaQL7CSsizYA0vjSsWJrAfsHKSjtxv5Cmr59IE9hPpAnsF4D/AAvuaRahtsL8AAAAAElFTkSuQmCC"
					)
		}
	}, this.get = function(e0) {
		return canvas[e0]
	}, this.aCW = function(name) {
		for (var a7 = yp.length - 1; 0 <= a7; a7--)
			if (yp[a7] === name) return canvas[a7];
		return aCp
	}, this.sC = function() {
		return aCo <= 0
	}, this.aCr = function() {
		aCo = 0, aCs()
	}
}

function cN() {
	var aD4, aD5, aD6, aD7, aD8, aD9, aDA, aDB, aDC, aDD, aD2 = [
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
		aD3 = [
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

	function aDJ(iu, mG) {
		for (var a7 = iu; a7 < mG; a7++) aD4[a7] = 4 * bH.dl(64 * au.random(), au.value(100)), aD5[a7] = 4 * bH.dl(64 * au.random(), au.value(100)), aD6[a7] = 4 * bH.dl(64 * au.random(), au.value(100))
	}

	function aDI(iu, mG) {
		for (var colorsData = a9.data.colorsData, a7 = iu; a7 < mG; a7++) {
			var f0 = colorsData[a7];
			aD4[a7] = 4 * (f0 >> 12), aD5[a7] = 4 * (f0 >> 6 & 63), aD6[a7] = 4 * (63 & f0)
		}
	}

	function aDU(eC, aDW) {
		a9e[eC] = 0, a9e[eC + 1] = 0, a9e[eC + 2] = aDW, a9e[eC + 3] = 0, aDX(eC)
	}

	function aDX(eC) {
		var ef;
		bX.mO || (ef = aY.we(eC), eC = aY.wf(eC), bX.mO = ef >= bW.a9d[0] && ef <= bW.a9d[2] && eC >= bW.a9d[1] && eC <= bW.a9d[3])
	}
	this.ea = new Int32Array(4), this.dV = function() {
		var ea = this.ea;
		ea[0] = -4 * bO.ej, ea[1] = 4, ea[2] = -ea[0], ea[3] = -ea[1]
	}, this.dU = function() {
		if (aD4 = new Uint8Array(a9.eV), aD5 = new Uint8Array(a9.eV), aD6 = new Uint8Array(a9.eV), aD7 = new Uint8Array(a9.eV), aD8 = new Uint8Array(a9.eV), aD9 = new Uint8Array(a9.eV), aDA = new Uint8Array(a9.eV), aDB = new Uint8Array(a9.eV),
			aDC = new Uint8Array(a9.eV), aDD = new Uint8Array(a9.eV), this.a6H = new Uint8Array(a9.eV), a9.ie)
			for (var a7 = a9.eV - 1; 0 <= a7; a7--) {
				var et = bc.k4[bc.eW[a7]],
					kP = bH.dl((aD3[et][3] + 1) * au.random(), au.value(100));
				aD4[a7] = aD2[et][0] + kP * aD3[et][0], aD5[a7] = aD2[et][1] + kP * aD3[et][1], aD6[a7] = aD2[et][2] + kP * aD3[et][2]
			} else 0 === a9.data.colorsType ? a9.data.selectableColor ? (aDI(0, a9.je), aDJ(a9.je, a9.eV)) : aDJ(0, a9.eV) : aDI(0, a9.eV);
		! function() {
			var a7, eb;
			for (a7 = a9.eV - 1; 0 <= a7; a7--) eb = bH.dl(aD4[a7] + aD5[a7] + aD6[a7], 3), aD4[a7] += aDP(eb - aD4[a7], 2), aD5[a7] += aDP(eb - aD5[a7], 2), aD6[a7] += aDP(eb - aD6[a7], 2), aD4[a7] -= aD4[a7] % 4, aD5[a7] -= aD5[a7] % 4, aD6[
				a7] -= aD6[a7] % 4
		}(),
		function() {
			for (var a7 = a9.eV - 1; 0 <= a7; a7--) aD4[a7] += bH.dl(a7, 128), aD5[a7] += bH.dl(a7 % 128, 32), aD6[a7] += bH.dl(a7 % 32, 8), aD7[a7] = a7 % 8
		}(), this.aDM(),
			function() {
				for (var a7 = a9.eV - 1; 0 <= a7; a7--) aD8[a7] = aD4[a7] < 32 ? aD4[a7] + 32 : aD4[a7] - 32, aD9[a7] = aD5[a7] < 32 ? aD5[a7] + 32 : aD5[a7] - 32, aDA[a7] = aD6[a7] < 32 ? aD6[a7] + 32 : aD6[a7] - 32
			}(),
			function() {
				for (var a7 = a9.eV - 1; 0 <= a7; a7--) aDB[a7] = 235 < aD4[a7] ? aD4[a7] - 20 : aD4[a7] + 20, aDC[a7] = 235 < aD5[a7] ? aD5[a7] - 20 : aD5[a7] + 20, aDD[a7] = 235 < aD6[a7] ? aD6[a7] - 20 : aD6[a7] + 20
			}()
	}, this.a5J = function(player) {
		var g = bK.f8;
		return g[0] = aD4[player], g[1] = aD5[player], g[2] = aD6[player], g
	}, this.aDM = function() {
		for (var a7 = a9.eV - 1; 0 <= a7; a7--) this.a6H[a7] = aD4[a7] + aD5[a7] + aD6[a7] < 280 ? 0 : 1
	}, this.we = function(eC) {
		return bH.dl(eC, 4) % bO.ej
	}, this.wf = function(eC) {
		return bH.dl(eC, 4 * bO.ej)
	}, this.wE = function(ef, eh) {
		return Math.floor(4 * (eh * bO.ej + ef))
	}, this.wU = function(eC) {
		var ea = this.ea;
		return this.aDQ(eC + ea[0]) || this.aDQ(eC + ea[1]) || this.aDQ(eC + ea[2]) || this.aDQ(eC + ea[3])
	}, this.ex = function(eC) {
		var ea = this.ea;
		return this.ed(eC + ea[0]) || this.ed(eC + ea[1]) || this.ed(eC + ea[2]) || this.ed(eC + ea[3])
	}, this.wS = function(eC, player) {
		var ea = this.ea;
		return this.aDR(eC + ea[0], player) || this.aDR(eC + ea[1], player) || this.aDR(eC + ea[2], player) || this.aDR(eC + ea[3], player)
	}, this.zJ = function(player) {
		return player < a9.je && 2 !== ac.a1l[player]
	}, this.g8 = function(eC) {
		return 208 <= a9e[eC + 3]
	}, this.wZ = function(player, eC) {
		return this.g8(eC) && this.aDS(player, eC)
	}, this.aDS = function(player, eC) {
		return player === this.eQ(eC)
	}, this.aDT = function(eC) {
		return 208 <= a9e[eC + 3] && a9e[eC + 3] < 224
	}, this.ip = function(eC) {
		return 224 <= a9e[eC + 3] && a9e[eC + 3] < 248
	}, this.wT = function(eC) {
		for (var ea = this.ea, a7 = 3; 0 <= a7; a7--)
			if (this.h1(eC + ea[a7])) return !0;
		return !1
	}, this.eT = function(eC) {
		return this.g8(eC) || this.eP(eC)
	}, this.h1 = function(eC) {
		return 0 === a9e[eC + 3] && 2 === a9e[eC + 2]
	}, this.eP = function(eC) {
		return 0 === a9e[eC + 3] && 1 === a9e[eC + 2]
	}, this.vH = function(eC) {
		return 0 === a9e[eC + 3] && 3 === a9e[eC + 2]
	}, this.ed = function(eC) {
		return 0 === a9e[eC + 3] && 5 <= a9e[eC + 2]
	}, this.aDQ = function(eC) {
		return 0 === a9e[eC + 3] && 3 <= a9e[eC + 2]
	}, this.eG = function(eC) {
		return a9e[eC + 2] - 5
	}, this.aDR = function(eC, player) {
		return this.eP(eC) || this.g8(eC) && player !== this.eQ(eC)
	}, this.eQ = function(eC) {
		return a9e[eC] % 4 * 128 + a9e[eC + 1] % 4 * 32 + a9e[eC + 2] % 4 * 8 + a9e[eC + 3] % 8
	}, this.wa = function(eC) {
		aDU(eC, 1)
	}, this.aDV = function(eC) {
		aDU(eC, 2)
	}, this.wF = function(eC, player) {
		a9e[eC] = aD4[player], a9e[eC + 1] = aD5[player], a9e[eC + 2] = aD6[player], a9e[eC + 3] = 208 + aD7[player], aDX(eC)
	}, this.g3 = function(eC, player) {
		a9e[eC] = aD8[player], a9e[eC + 1] = aD9[player], a9e[eC + 2] = aDA[player], a9e[eC + 3] = 224 + aD7[player], aDX(eC)
	}, this.iq = function(eC, player) {
		a9e[eC] = aDB[player], a9e[eC + 1] = aDC[player], a9e[eC + 2] = aDD[player], a9e[eC + 3] = 248 + aD7[player], aDX(eC)
	}
}

function cl() {
	var e0 = 0,
		aDY = new Uint16Array(32);

	function remove(a3P) {
		var a7;
		for (e0 -= 2, a7 = a3P; a7 < e0; a7 += 2) aDY[a7] = aDY[a7 + 2], aDY[a7 + 1] = aDY[a7 + 3]
	}
	this.dU = function() {
		e0 = 0
	}, this.iS = function() {
		var a7, il, hu;
		if (0 !== e0)
			if (0 === ac.lV[a9.eI] || aZ.aDZ(a9.eI) === aZ.fe(a9.eI)) e0 = 0;
			else
				for (a7 = e0 - 2; 0 <= a7; a7 -= 2)(il = aDY[a7]) < a9.eV && 0 === ac.lV[il] ? remove(a7) : (hu = aDY[a7 + 1], (il >= a9.eV && aDa(a9.eI) || il < a9.eV && aDb(a9.eI, il)) && (b4.gv.h6(hu, il), remove(a7)))
	}, this.h8 = function(il, hu) {
		! function(il, hu) {
			var a7;
			for (a7 = 0; a7 < e0; a7 += 2)
				if (aDY[a7] === il) return aDY[a7 + 1] = Math.min(aDY[a7 + 1] + hu, 1023), 1;
			return
		}(il, hu) && 32 !== e0 && (aDY[e0] = il, aDY[e0 + 1] = hu, e0 += 2)
	}
}

function cO() {
	function aDi(player) {
		var dk;
		b6.fu.a1n(player) && (dk = ac.ga[player] - ac.a1r[player] + aZ.aDk(player), bZ.fy(player, Math.abs(dk), dk < 0 ? 18 : 12)), ac.ga[player] = 0, ac.a1r[player] = 0
	}

	function aDr() {
		aT.show(!1, !1, !1, !0), aS.a8q(), bN.yE.yx()
	}

	function aDf(player, aDq) {
		for (var a7 = aDq.length - 1; 0 <= a7; a7--) aZ.aDt(aDq[a7], player)
	}

	function aDh(player) {
		for (var i9 = ac.i9, iA = ac.iA, iB = ac.iB, iC = ac.iC, ly = i9[player], lz = iB[player], ej = bO.ej, gM = ac.gM, ef = iA[player]; ly <= ef; ef--)
			for (var eh = iC[player]; lz <= eh; eh--) {
				var g6 = 4 * (eh * ej + ef);
				aY.wZ(player, g6) && (aY.wa(g6), gM[player]--)
			}
		i9[player] = iA[player] = 0, iB[player] = iC[player] = 0
	}
	this.dd = function(g6) {
		var player, dk = ac.gM[g6];
		bJ.s.oa[g6] ? dk && (aDf(player = g6, aZ.aDg(player)), aDh(player), aB.fw(player), aZ.clear(player), aDi(player), function(player) {
			ac.wA[player] = 0, ac.g0[player] = [], ac.gE[player] = [], ac.gF[player] = [], ac.ey[player] = []
		}(player)) : !dk && ac.g0[g6].length || this.aDe(g6)
	}, this.aDe = function(player) {
		! function(player) {
			aY.zJ(player) && (ac.z0[player] = be.zF.aDp(), a9.yV++);
			var aDq = aZ.aDg(player);
			0 === aDq.length ? b6.fu.a1m(player) && aDr() : (aDf(player, aDq), function(player, aDq) {
				var aDv = aDq[function(aDq) {
					var a7, e0 = 0;
					for (a7 = aDq.length - 1; 1 <= a7; a7--) ac.gM[aDq[a7]] > ac.gM[aDq[e0]] && (e0 = a7);
					return e0
				}(aDq)];
				9 === a9.jy && 1 === bc.eW[player] && au.jW(8) && av.aDw(aDv);
				if (b6.fu.a1m(player)) aDr(), aJ.yf(aDv, 1);
				else {
					for (var a7 = aDq.length - 1; 0 <= a7; a7--)
						if (b6.fu.a1n(aDq[a7]) && (bZ.lR[4 - b6.fu.j1(player)]++, b6.fu.a1m(aDq[a7]))) return aJ.yf(player, 0);
					b6.fu.j1(player) || aJ.a4c(0, player, aDv)
				}
			}(player, aDq))
		}(player), aDh(player), aDi(player),
			function(player) {
				ac.lV[player] = 0, ac.g0[player] = null, ac.gE[player] = null, ac.gF[player] = null, ac.ey[player] = null
			}(player), aB.fw(player), aZ.clear(player), bJ.aDn.aDo(player)
	}
}

function cq() {
	var input;

	function aDx(e) {
		(e = e.target.files) && 0 < e.length && b2.aE0(e[0])
	}

	function aE4(e) {
		var et = new Image;
		et.onload = aE5, et.src = e.target.result
	}

	function aE5(e) {
		var e = e.target,
			canvas = document.createElement("canvas");
		canvas.width = e.width, canvas.height = e.height;
		canvas.getContext("2d").drawImage(e, 0, 0);
		var e = canvas.width,
			j7 = canvas.height;
		e > bO.aE7 || j7 > bO.aE7 || e < 10 || j7 < 10 ? (e = "Image dimensions must be between 10 and " + bO.aE7 + ".", u.tt ? u.tt.showToast(e) : alert(e)) : 20 === n.ro && n.aD0().aE5(canvas)
	}
	this.dU = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = aDx
	}, this.zo = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.aDy = function() {
		input.click()
	}, this.aE0 = function(aE1) {
		var g = aE1.name.split("."),
			g = g[g.length - 1].toLowerCase();
		"gif" !== g && "jpg" !== g && "jpeg" !== g && "png" !== g || ((g = new FileReader).onload = aE4, g.readAsDataURL(aE1))
	}
}

function co() {
	this.aE9 = null, this.dU = function() {
		10 !== a9.jy ? this.aE9 = null : this.aE9 = new Uint32Array(a9.eV)
	}, this.iS = function() {
		10 === a9.jy && this.qc()
	}, this.qc = function() {
		for (var g6, target, a91, aE9 = this.aE9, yH = ah.jh, a1s = ac.ga, a7 = ah.jf - 1; 0 <= a7; a7--)(g6 = yH[a7]) >= a9.je || (target = Math.max(bH.dl(a1s[g6], 4), 2048), a91 = Math.max(aa.a92(g6), 100), aE9[g6] += bH.dl(a91 * target, 1e4),
			aE9[g6] > target && (aE9[g6] = target))
	}, this.a1x = function(player, im) {
		return im > this.aE9[player] ? (im = this.aE9[player], this.aE9[player] = 0) : this.aE9[player] -= im, im
	}
}

function dQ() {
	function aEB(e) {
		var g, e = e.target.files;
		e && 0 < e.length && (e = e[0], "json" === (g = e.name.split("."))[g.length - 1].toLowerCase()) && ((g = new FileReader).onload = aEJ, g.readAsText(e))
	}

	function aEJ(e) {
		var aEN;
		a9.yT || (e = JSON.parse(e.target.result), aEN = a9.data = new a2m, aEO(e, aEN, "mapType", 0, 2), aEO(e, aEN, "mapProceduralIndex", 0, 255), aEO(e, aEN, "mapRealisticIndex", 0, 255), aEO(e, aEN, "mapSeed", 0, 16383), function(aEM, aEN, g7,
				max) {
				aEM = aEM[g7];
				aEN[g7] = aEU(aEM) ? aEM.slice(0, max) : aEN[g7]
			}(e, aEN, "mapName", 20), function(aEM, aEN, g7) {
				var aE6;
				2 === aEN.mapType && (!aEU(aEM = aEM[g7]) || aEM.length <= 20 ? aEN.mapType = 0 : ((aE6 = new Image).onload = function() {
					b5.aEV.aEW(aE6, 1), aE6.onload = null, aE6 = null
				}, aE6.src = aEM))
			}(e, aEN, "canvas"), aEO(e, aEN, "passableWater", 0, 1), aEO(e, aEN, "passableMountains", 0, 1), aEO(e, aEN, "playerCount", 1, 512), aEO(e, aEN, "humanCount", 1, 1), aEO(e, aEN, "selectedPlayer", 0, 0), aEO(e, aEN, "gameMode", 0, 1),
			aEO(e, aEN, "playerMode", 0, 0), aEO(e, aEN, "battleRoyaleMode", 0, 0), aEO(e, aEN, "numberTeams", 0, 8), aEO(e, aEN, "isZombieMode", 0, 0), aEO(e, aEN, "isContest", 0, 0), aEO(e, aEN, "isReplay", 0, 0), aER(e, aEN, "elo", 16, 2,
				16383), aEO(e, aEN, "colorsType", 0, 1), aEO(e, aEN, "colorsPersonalized", 0, 1), aER(e, aEN, "colorsData", 32, 512, 262143), aEO(e, aEN, "selectableColor", 0, 1), aER(e, aEN, "teamPlayerCount", 16, 9, 512), aEO(e, aEN,
				"neutralBots", 0, 1), aEO(e, aEN, "botDifficultyType", 0, 3), aEO(e, aEN, "botDifficultyValue", 0, 15), aER(e, aEN, "botDifficultyTeam", 8, 9, 15), aER(e, aEN, "botDifficultyData", 8, 512, 15), aEO(e, aEN, "spawningType", 0, 2),
			aEO(e, aEN, "spawningSeed", 0, 16383), aER(e, aEN, "spawningData", 16, 1024, 4095), aEO(e, aEN, "selectableSpawn", 0, 1), aEO(e, aEN, "playerNamesType", 0, 2),
			function(aEM, aEN, g7, size, max) {
				var a15 = aEM[g7];
				if (Array.isArray(a15)) {
					for (var a16 = new Array(size), eY = Math.min(a15.length, size), a7 = 0; a7 < eY; a7++) a16[a7] = aEU(a15[a7]) ? a15[a7].slice(0, max) : "";
					aEN[g7] = a16
				}
			}(e, aEN, "playerNamesData", 512, 20), aEO(e, aEN, "selectableName", 0, 1), aEO(e, aEN, "aIncomeType", 0, 2), aEO(e, aEN, "aIncomeValue", 0, 255), aER(e, aEN, "aIncomeData", 8, 512, 255), aEO(e, aEN, "tIncomeType", 0, 2), aEO(e, aEN,
				"tIncomeValue", 0, 255), aER(e, aEN, "tIncomeData", 8, 512, 255), aEO(e, aEN, "iIncomeType", 0, 2), aEO(e, aEN, "iIncomeValue", 0, 255), aER(e, aEN, "iIncomeData", 8, 512, 255), aEO(e, aEN, "sResourcesType", 0, 2), aEO(e, aEN,
				"sResourcesValue", 0, 2047), aER(e, aEN, "sResourcesData", 16, 512, 2047), n.r(), n.s.aEL[0] = 0, n.o(19))
	}

	function aEO(aEM, aEN, g7, min, max) {
		aEM = aEM[g7];
		aEN[g7] = "number" == typeof aEM && min <= aEM && aEM <= max ? Math.floor(aEM) : aEN[g7]
	}

	function aEU(p6) {
		return "string" == typeof p6
	}

	function aER(aEM, aEN, g7, aEX, size, max) {
		var a15 = aEM[g7];
		if (Array.isArray(a15)) {
			for (var a16 = new(8 === aEX ? Uint8Array : 16 === aEX ? Uint16Array : Uint32Array)(size), eY = Math.min(a15.length, size), a7 = 0; a7 < eY; a7++) a16[a7] = bH.ow(a15[a7], 0, max);
			aEN[g7] = a16
		}
	}
	this.aEA = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aEB, input.click()
	}, this.aEC = function() {
		for (var aEF, aA9, a5c = a9.data, keys = Object.keys(a5c), aED = {}, a7 = 0; a7 < keys.length; a7++) {
			var key = keys[a7];
			a5c[key] instanceof Uint8Array || a5c[key] instanceof Uint16Array || a5c[key] instanceof Uint32Array ? aED[key] = Array.from(a5c[key]) : aED[key] = a5c[key]
		}
		aED.canvas = 2 === aED.mapType && aED.canvas ? aED.canvas.toDataURL() : null, aEF = aED, aEF = JSON.stringify(aEF, null, 2), aEF = new Blob([aEF], {
			type: "application/json"
		}), (aA9 = document.createElement("a")).href = URL.createObjectURL(aEF), aA9.download = "tt_scenario.json", aA9.click()
	}
}

function cR() {
	var aEY, aEZ, size, il, im, id, aEa;

	function aEb(player) {
		return player < a9.je ? aEY * player : aEY * a9.je + aEZ * (player - a9.je)
	}
	this.dU = function() {
		aEY = a9.je < 16 ? 12 : 8, aEZ = 4;
		var eY = aEb(a9.eV);
		size = new Uint8Array(a9.eV), il = new Uint16Array(eY), im = new Uint32Array(eY), id = new Uint16Array(eY), aEa = new Uint8Array(eY)
	}, this.ov = function(a5p, aEc) {
		var aEd = this.gb(a5p, aEc),
			aEc = (this.gZ(a5p, aEc, 0), b6.fu.fx(a5p, aEd));
		bZ.fy(a5p, aEd - aEc, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.aDt = function(player, aEc) {
		var aEg, aEc = function(player, aEc) {
			var a7, kP = aEb(player);
			for (a7 = size[player] - 1; 0 <= a7; a7--)
				if (0 === id[kP + a7] && il[kP + a7] === aEc) return a7;
			return size[player]
		}(player, aEc);
		aEc !== size[player] && (aEg = im[aEb(player) + aEc], this.fz(player, aEc), this.ii(player, aEg, a9.eV))
	}, this.iz = function(player, aEc) {
		for (var kP = aEb(player), a7 = size[player] - 1; 0 <= a7; a7--)
			if (0 === id[kP + a7] && il[kP + a7] === aEc) return !0;
		return !1
	}, this.jI = function(player) {
		return player < a9.je ? size[player] < aEY : size[player] < aEZ
	}, this.fe = function(player) {
		return size[player]
	}, this.fk = function(player, a7) {
		return il[aEb(player) + a7]
	}, this.ff = function(player, a7) {
		return id[aEb(player) + a7]
	}, this.aEh = function(player, aEi) {
		for (var kP = aEb(player), a7 = size[player] - 1; 0 <= a7; a7--)
			if (id[kP + a7] === aEi) return a7;
		return -1
	}, this.fl = function(player, a7) {
		return im[aEb(player) + a7]
	}, this.gb = function(player, aEc) {
		for (var kP = aEb(player), a7 = size[player] - 1; 0 <= a7; a7--)
			if (0 === id[kP + a7] && il[kP + a7] === aEc) return im[kP + a7];
		return 0
	}, this.aDk = function(player) {
		for (var kP = aEb(player), f0 = 0, a7 = size[player] - 1; 0 <= a7; a7--) f0 += im[kP + a7];
		return f0
	}, this.aEj = function(player) {
		for (var kP = aEb(player), f0 = 0, a7 = size[player] - 1; 0 <= a7; a7--) 0 === id[kP + a7] && (f0 += im[kP + a7]);
		return f0
	}, this.aDZ = function(player) {
		for (var kP = aEb(player), g1 = 0, a7 = size[player] - 1; 0 <= a7; a7--) 0 < id[kP + a7] && g1++;
		return g1
	}, this.gZ = function(player, aEc, aEg) {
		for (var kP = aEb(player), a7 = size[player] - 1; 0 <= a7; a7--) 0 === id[kP + a7] && il[kP + a7] === aEc && (im[kP + a7] = aEg)
	}, this.gK = function(player, a7, aEg) {
		im[aEb(player) + a7] = Math.max(aEg, 0)
	}, this.gL = function(player, a7) {
		aEa[aEb(player) + a7] = 0
	}, this.fm = function(player, a7) {
		return aEa[aEb(player) + a7]
	}, this.ii = function(player, aEg, aEc) {
		b6.fu.a1n(aEc) && bZ.lR[6 - b6.fu.j1(player)]++;
		for (var kP = aEb(player), a7 = size[player] - 1; 0 <= a7; a7--)
			if (0 === id[kP + a7] && il[kP + a7] === aEc) return im[kP + a7] += aEg, void(im[kP + a7] = im[kP + a7] > a9.a1t ? a9.a1t : im[kP + a7]);
		il[kP + size[player]] = aEc, im[kP + size[player]] = aEg, id[kP + size[player]] = 0, aEa[kP + size[player]] = 1, size[player]++, player < a9.je && (aEc === a9.eI ? aJ.yf(player, 5) : player === a9.eI && ab.a4e(aEc))
	}, this.aEk = function(player, aEg, aEi) {
		var kP = aEb(player);
		il[kP + size[player]] = 0, im[kP + size[player]] = aEg, id[kP + size[player]] = aEi, aEa[kP + size[player]] = 0, size[player]++
	}, this.fz = function(player, e0) {
		var er, kP;
		if (0 !== size[player])
			for (kP = aEb(player), size[player]--, er = e0; er < size[player]; er++) il[kP + er] = il[kP + er + 1], im[kP + er] = im[kP + er + 1], id[kP + er] = id[kP + er + 1], aEa[kP + er] = aEa[kP + er + 1]
	}, this.aDg = function(player) {
		for (var er, kP, aDq = [], a7 = ah.jf - 1; 0 <= a7; a7--)
			for (kP = aEb(ah.jh[a7]), er = size[ah.jh[a7]] - 1; 0 <= er; er--)
				if (0 === id[kP + er] && il[kP + er] === player) {
					aDq.push(ah.jh[a7]);
					break
				} return aDq
	}
}

function cS() {
	var aEl;

	function aEn(player) {
		var dz, jJ;
		return b6.fu.j1(player) && player < a9.je ? 0 : (dz = aEl[bH.dl((a9.eV - 1) * ac.gM[player], a9.jO)], bb.jb() < 1920 && (dz = Math.max(bH.dl(100 * (13440 - 6 * bb.jb()), 1920), dz)), jJ = aa.jK(player), ac.ga[player] > jJ && (dz -= bH.dl(2 *
			dz * (ac.ga[player] - jJ), jJ)), Math.min(Math.max(dz, 0), 700))
	}

	function aEz(mA) {
		for (var gM = ac.gM, jh = ah.jh, a7 = ah.jf - 1; 0 <= a7; a7--) {
			var g6 = jh[a7];
			b6.fu.fx(g6, bH.dl(mA * gM[g6], 32))
		}
	}

	function aEw() {
		var v9 = a9.eI;
		bK.f5[0] = ac.ga[v9] - ac.a1r[v9]
	}

	function aEy(e0) {
		var v9 = a9.eI;
		bZ.lR[e0] += ac.ga[v9] - ac.a1r[v9] - bK.f5[0]
	}
	this.db = function() {
		for (var eY = a9.eV, a7 = (aEl = new Uint16Array(eY), 0); a7 < eY; a7++) aEl[a7] = 100 + aEm(bH.dl(25600 * a7, eY - 4), 9)
	}, this.dU = function() {
		0 === a9.data.iIncomeType ? this.a92 = aEn : 1 === a9.data.iIncomeType ? this.a92 = function(player) {
			return bH.dl(a9.data.iIncomeValue * aEn(player), 64)
		} : this.a92 = function(player) {
			return bH.dl(a9.data.iIncomeData[player] * aEn(player), 64)
		}
	}, this.iS = function() {
		if (bb.jb() % 10 == 9 && (function() {
				aEw();
				for (var jh = ah.jh, ga = ac.ga, a7 = ah.jf - 1; 0 <= a7; a7--) {
					var g6 = jh[a7],
						aEx = bH.dl(aa.a92(g6) * ga[g6], 1e4);
					b6.fu.fx(g6, Math.max(aEx, 1))
				}
				aEy(9)
			}(), function() {
				if (0 !== a9.data.aIncomeType) {
					if (aEw(), 1 === a9.data.aIncomeType)
						for (var gM = ac.gM, jh = ah.jh, mA = a9.data.aIncomeValue, a7 = ah.jf - 1; 0 <= a7; a7--) {
							var g6 = jh[a7];
							b6.fu.fx(g6, bH.dl(mA * gM[g6], 128))
						} else 2 === a9.data.aIncomeType && function() {
							for (var gM = ac.gM, jh = ah.jh, mA = a9.data.aIncomeData, a7 = ah.jf - 1; 0 <= a7; a7--) {
								var g6 = jh[a7];
								b6.fu.fx(g6, bH.dl(mA[g6] * gM[g6], 128))
							}
						}();
					aEy(18)
				}
			}(), bb.jb() % 100 == 99)) {
			if (aEw(), 0 === a9.data.tIncomeType) aEz(32);
			else if (1 === a9.data.tIncomeType) aEz(a9.data.tIncomeValue);
			else
				for (var gM = ac.gM, jh = ah.jh, mA = a9.data.tIncomeData, a7 = ah.jf - 1; 0 <= a7; a7--) {
					var g6 = jh[a7];
					b6.fu.fx(g6, bH.dl(mA[g6] * gM[g6], 32))
				}
			aEy(8)
		}
	}, this.jK = function(player) {
		return Math.min(100 * ac.gM[player], a9.a2i)
	}, this.no = function(player, np) {
		b6.fu.fx(np, bK.f6[0]), bZ.oC(player, np), ab.aEp(player, bK.f6[0] + bK.f6[1]), ab.oD(np, bK.f6[0]), b6.fu.ol(player)
	}, this.aEq = function() {
		for (var eY = ah.jf, yH = ah.jh, kP = 0, a1s = ac.ga, a7 = 0; a7 < eY; a7++) kP += a1s[yH[a7]];
		return kP
	}, this.aEr = function(aEs) {
		for (var g6, eY = ah.jf, yH = ah.jh, kP = 0, a1s = ac.ga, eW = bc.eW, a7 = 0; a7 < eY; a7++) eW[g6 = yH[a7]] === aEs && (kP += a1s[g6]);
		return kP
	}
}

function cU() {
	var aF3, aF4, aF5, aF6, aF7, aF8, aF9, aFA, aFB, aFC, aFD, aFE, aFF, aFG, aFH, aFI, aFJ, aFK, aFM, aFN, aA3, aFO, aFP, aFW, aFX, aFL = null,
		aFR = 0,
		aFS = !1,
		aFT = new Float32Array(4),
		aFU = 0,
		aFV = !0,
		a8D = 400;

	function pT() {
		aFB = Math.floor(+at.pR), aFC = Math.floor(.5 * aFB)
	}

	function aFY() {
		var a7, aFd;
		for (tN.font = b6.pP.rR(1, 100 * aFD), aFd = 80 / Math.floor(tN.measureText(b6.z3.xl(a9.a1t)).width), tN.font = b6.pP.rR(1, 100), a7 = a9.eV - 1; 0 <= a7; a7--) aFA[a7] = 100 / Math.floor(tN.measureText(ac.z1[a7]).width), aF9[a7] = Math.min(
			aFd, aFA[a7])
	}

	function aFe(a7) {
		return !bf.dp.data[7].value || (a7 = ac.ga[a7]) < 1e6 ? 1 : a7 < 1e7 ? aFT[0] : aFT[Math.min(Math.floor(Math.log10(a7)) - 6, 3)]
	}

	function aFc(hH) {
		aFK = !1, aFJ = 1, aFH = aFI = 0, aFV && (b6.pP.textAlign(hH, 1), b6.pP.textBaseline(hH, 1));
		for (var aFk, aFl, a7, aFm, fontSize, aFn, ly = hv / hw, lz = hx / hw, mB = (at.a1 + hv) / hw, mC = (at.j7 + hx) / hw, aFo = 0 !== ac.lV[a9.eI] && aY.zJ(a9.eI), er = ah.jf - 1; 0 <= er; er--) a7 = ah.jh[er], (fontSize = Math.floor(aFG * hw *
			aFe(a7) * aF9[a7] * aF7[a7])) < aFF || aFB <= fontSize || aF5[a7] + aF7[a7] > ly && aF5[a7] < mB && aF6[a7] + aF8[a7] > lz && aF6[a7] < mC && (aFk = Math.floor(at.a1 * (aF5[a7] + aF7[a7] / 2 - ly) / (mB - ly)), aFl = Math.floor(at
			.j7 * (aF6[a7] + aF8[a7] / 2 - lz) / (mC - lz) - .1 * fontSize), aFm = aY.a6H[a7], hH.font = b6.pP.rR(1 === ac.a1l[a7] ? 4 : 1, fontSize), hH.fillStyle = aFp(fontSize, aFm % 2), bf.dp.data[7].value ? aFq(hH, a7, fontSize, aFk,
			aFl, aFm) : aFr(a7, fontSize, aFk, aFl, hH), aFK = !0, 0 < aA3[a7] ? function(aFk, aFl, fontSize, a7, hH) {
			0 === jP[a7] ? af.wz.xc(aFN[a7]) ? (function(aFk, aFl, fontSize, player, nz, hH) {
				for (var vj = aFl, hG = (hH.globalAlpha = aFz(fontSize), aFe(player) * (bf.dp.data[7].value ? aFU : aFA[player])), vi = aFk - .5 * fontSize / hG - .9 * fontSize, es = 0; es < 2; es++) hH.fillText(af.wz.xW(nz), vi, vj),
					vi = aFk + .5 * fontSize / hG + .9 * fontSize;
				hH.globalAlpha = 1
			}(aFk, aFl, fontSize, a7, aFN[a7], hH), aFt(aFk, aFl, fontSize, 0, 0, hH)) : af.wz.xe(aFN[a7]) ? (aG2(aFk, aFl, fontSize, aFN[a7], 0, hH), aFt(aFk, aFl, fontSize, 0, 1, hH)) : (aG2(aFk, aFl, fontSize, aFN[a7], 1, hH), aFt(aFk,
				aFl, fontSize, 1, 0, hH)) : aG2(aFk, aFl, fontSize, aFN[a7], 0, hH)
		}(aFk, aFl, fontSize, a7, hH) : 0 === jP[a7] && aFt(aFk, aFl, fontSize, 0, 0, hH), aFo && (0 < aA3[a7 + a9.eV] || 0 < aA3[a7 + 2 * a9.eV] || 0 < aA3[a7 + 3 * a9.eV] || 0 < aA3[a7 + 4 * a9.eV]) && function(aFk, aFl, fontSize, a7, hH) {
			var et, g1 = -1;
			for (et = 4; 1 <= et; et--) 0 < aA3[a7 + et * a9.eV] && g1++;
			for (et = 1; et < 5; et++) 0 < aA3[a7 + et * a9.eV] && (! function(aFk, aFl, fontSize, et, a7, aFx, dk, hH) {
				var a1G;
				if (1 === et) {
					a7 = aFN[a7 + a9.eV];
					if (!af.wz.xd(a7)) return function(aFk, aFl, fontSize, nz, aFx, hH) {
						hH.globalAlpha = aFz(fontSize);
						aFk -= .534 * aFx * fontSize, aFx = aFl + 1.59 * fontSize;
						hH.font = b6.pP.rR(0, .785 * fontSize), hH.fillText(af.wz.xW(nz), aFk, aFx), hH.globalAlpha = 1
					}(aFk, aFl, fontSize, a7, aFx, hH);
					a1G = af.v8.x6[a7 - 1024 + af.wz.xH]
				} else a1G = 2 === et ? aH.a3N()[4].canvas[+(dk < 255)] : (3 === et ? aH.a3N()[5] : aH.a3N()[6]).canvas[0];
				a7 = af.v8.x7, dk = .8 * fontSize / a7, et = aFk - .5 * dk * a7 - .534 * aFx * fontSize, aFk = aFl + 1.4 * dk * a7;
				hH.setTransform(dk, 0, 0, dk, et, aFk), hH.globalAlpha = aFz(fontSize), hH.drawImage(a1G, 0, 0), hH.globalAlpha = 1, hH.setTransform(1, 0, 0, 1, 0, 0)
			}(aFk, aFl, fontSize, et, a7, g1, aA3[a7 + et * a9.eV], hH), g1 -= 2)
		}(aFk, aFl, fontSize, a7, hH), (aFn = aFD * fontSize) < aFF || (hH.font = b6.pP.rR(1, aFn), aFl += Math.floor(.78 * fontSize), bf.dp.data[7].value ? aFr(a7, aFn, aFk, aFl, hH) : aFq(hH, a7, aFn, aFk, aFl, aFm)))
	}

	function aFr(a7, fontSize, ef, eh, hH) {
		var ___id = a7;
		var showName = a7 < a9.je || !__fx.settings.hideBotNames;
		if (showName) hH.fillText(ac.z1[a7], ef, eh), a7 < a9.je && 2 !== ac.a1l[a7] || (a7 = fontSize / aFA[a7], hH.fillRect(ef - .5 * a7, eh + b6.pP.xX * fontSize, a7, Math.max(1, .1 * fontSize)));
		bf.dp.data[7].value && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (hH.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			hH.fillText(__fx.utils.getDensity(___id), ef, showName ? eh + fontSize : eh)
		);
	}

	function aFq(hH, a7, fontSize, aFk, aFl, aFm) {
		var ___id = a7;
		a7 = b6.z3.xl(ac.ga[a7]);
		aFm >> 1 & 1 ? (hH.lineWidth = .05 * fontSize, hH.strokeStyle = aFp(fontSize, aFm % 2), hH.strokeText(a7, aFk, aFl)) : (1 < aFm && (hH.lineWidth = .12 * fontSize, hH.strokeStyle = aFp(fontSize, aFm), hH.strokeText(a7, aFk, aFl)), hH.fillText(
			a7, aFk, aFl));
		bf.dp.data[7].value || __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (hH.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)), hH.fillText(__fx.utils.getDensity(___id), aFk, aFl + fontSize))
	}

	function aFt(aFk, aFl, fontSize, aFx, aFy, hH) {
		var a3x = .95 * fontSize / aFP,
			aFk = aFk - .5 * a3x * aFO + .8 * aFx * fontSize,
			aFx = aFl - 1.76 * a3x * aFP - (.35 - b6.pP.xX + .7) * aFy * fontSize;
		hH.setTransform(a3x, 0, 0, a3x, aFk, aFx), hH.globalAlpha = aFz(fontSize), hH.drawImage(aX.get(4), 0, 0), hH.globalAlpha = 1, hH.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aG2(aFk, aFl, fontSize, nz, aFx, hH) {
		var hB, vi, a3x;
		hH.globalAlpha = aFz(fontSize), af.wz.xd(nz) ? (hB = af.v8.x7, hH.setTransform(a3x = 1.1 * fontSize / hB, 0, 0, a3x, vi = aFk - .5 * a3x * hB - .8 * aFx * fontSize, a3x = aFl - 1.55 * a3x * hB), hH.drawImage(af.v8.x6[nz - 1024 + af.wz.xH], 0,
			0), hH.setTransform(1, 0, 0, 1, 0, 0)) : (vi = aFk - .8 * aFx * fontSize, a3x = aFl - (.35 - b6.pP.xX + 1) * fontSize, hH.fillText(af.wz.xW(nz), vi, a3x)), hH.globalAlpha = 1
	}

	function aFp(fontSize, aFm) {
		return aFC <= fontSize && fontSize < aFB ? bc.aG4[aFm] + aFz(fontSize).toFixed(3) + ")" : bc.aG5[aFm]
	}

	function aFz(fontSize) {
		return aFC <= fontSize && fontSize < aFB ? 1 - (fontSize - aFC) / (aFB - aFC) : 1
	}

	function aGE(hG, a1) {
		return 1 + Math.floor(aFE * hG * a1)
	}

	function aGB(a7) {
		for (var left = aF5[a7], er = aF5[a7] - ac.i9[a7] - 1; 0 <= er; er--)
			if (!aGF(a7, --left, aF6[a7], aF8[a7])) {
				left++;
				break
			} var right = aF5[a7];
		for (er = ac.iA[a7] - aF5[a7] - aF7[a7]; 0 <= er; er--)
			if (!aGF(a7, ++right + aF7[a7] - 1, aF6[a7], aF8[a7])) {
				right--;
				break
			} var ef = Math.floor((left + right) / 2),
			top = aF6[a7];
		for (er = aF6[a7] - ac.iB[a7] - 1; 0 <= er; er--)
			if (!aGG(a7, ef, --top, aF7[a7])) {
				top++;
				break
			} var bottom = aF6[a7];
		for (er = ac.iC[a7] - aF6[a7] - aF8[a7]; 0 <= er; er--)
			if (!aGG(a7, ef, ++bottom + aF8[a7] - 1, aF7[a7])) {
				bottom--;
				break
			} var eh = Math.floor((top + bottom) / 2);
		aG8(a7, ef, eh, aF7[a7], aF8[a7]) && (aF5[a7] = ef, aF6[a7] = eh)
	}

	function aG8(player, ef, eh, a1, j7) {
		eb = Math.floor(.2 * a1);
		for (var eb, et = ef + a1 - 1; ef <= et; et--)
			if (!aGF(player, et, eh, j7)) return;
		for (et = eh + j7 - 1 - (eb = (eb = Math.floor(.25 * j7)) < 1 ? 1 : eb); eh + eb <= et; et--)
			if (!aGG(player, ef, et, a1)) return;
		return 1
	}

	function aGF(player, ef, eh, j7) {
		return aY.wZ(player, 4 * (eh * bO.ej + ef)) && aY.wZ(player, 4 * ((eh + j7 - 1) * bO.ej + ef))
	}

	function aGG(player, ef, eh, a1) {
		return aY.wZ(player, 4 * (eh * bO.ej + ef)) && aY.wZ(player, 4 * (eh * bO.ej + ef + a1 - 1))
	}
	this.dU = function() {
		if (a8D = 0 === (a8D = bf.dp.data[11].value) ? 280 : 1 === a8D ? 187 : 112, aFK = !1, aFG = .88, aFD = .5, aFE = 1.8, aFF = 12 - 3 * bf.dp.data[9].value, aF4 = aF3 = 0, aF5 = new Uint16Array(a9.eV), aF6 = new Uint16Array(a9.eV), aF7 =
			new Uint16Array(a9.eV), aF8 = new Uint16Array(a9.eV), aF9 = new Float32Array(a9.eV), aFA = new Float32Array(a9.eV), aFN = new Uint16Array(2 * a9.eV), aA3 = new Uint8Array(5 * a9.eV), aFW = new Uint8Array(a9.eV), aFX = new Uint8Array(
				a9.eV), aFV || (aFL = aFL || document.createElement("canvas")), pT(), aFI = aFH = 0, aFJ = 1, bf.dp.data[7].value) {
			var a7, aFd;
			for (aFY(), tN.font = b6.pP.rR(1, 100), aFd = 100 / Math.floor(tN.measureText("900 000").width), a7 = a9.eV - 1; 0 <= a7; a7--) aF9[a7] = Math.min(aFd, 2 * aFA[a7]);
			aFU = aFd, aFT[0] = 100 / (aFd * Math.floor(tN.measureText("5 000 000").width)), aFT[1] = 100 / (aFd * Math.floor(tN.measureText("50 000 000").width)), aFT[2] = 100 / (aFd * Math.floor(tN.measureText("500 000 000").width)), aFT[3] =
				100 / (aFd * Math.floor(tN.measureText("1 000 000 000").width))
		} else aFY();
		! function() {
			var a7;
			for (a7 = a9.eV - 1; 0 <= a7; a7--) ac.gM[a7] < 12 ? (aF5[a7] = ac.i9[a7] + 1, aF6[a7] = ac.iB[a7] + 1, aF7[a7] = 1, aF8[a7] = 1) : (aF5[a7] = ac.i9[a7], aF6[a7] = ac.iB[a7] + 1, aF7[a7] = 4, aF8[a7] = 2);
			if (a9.gu)
				for (a7 = 0; a7 < a9.je; a7++) aF7[a7] = 0;
			aFO = aX.get(4).width, aFP = aX.get(4).height
		}()
	}, this.aEp = function(g6, a4v) {
		a4v > 18 * ac.gM[g6] ? (aFX[g6] = 6, aY.a6H[g6] = 2 + aY.a6H[g6] % 2) : (aFW[g6] = 4, (aY.a6H[g6] < 2 || 3 < aY.a6H[g6]) && (aY.a6H[g6] = 6 + aY.a6H[g6] % 2))
	}, this.oD = function(g6, a4v) {
		a4v > 6 * ac.gM[g6] ? (aFX[g6] = 6, aY.a6H[g6] = 4 + aY.a6H[g6] % 2) : (aFW[g6] = 4, (aY.a6H[g6] < 4 || 5 < aY.a6H[g6]) && (aY.a6H[g6] = 8 + aY.a6H[g6] % 2))
	}, this.resize = function() {
		pT(), aFV || aFc(aFM)
	}, this.a2e = function() {
		for (var a7 = 0; a7 < a9.je; a7++) ac.iA[a7] - ac.i9[a7] != 3 || ac.iC[a7] - ac.iB[a7] != 3 ? (aF5[a7] = ac.i9[a7] + (ac.iA[a7] !== ac.i9[a7] ? 1 : 0), aF6[a7] = ac.iB[a7], aF7[a7] = 1, aF8[a7] = 1) : (aF5[a7] = ac.i9[a7], aF6[a7] = ac
			.iB[a7] + 1, aF7[a7] = 4, aF8[a7] = 2)
	}, this.ox = function(player, e0, aFf) {
		! function(player, e0, aFf) {
			player += e0 * a9.eV;
			0 === e0 ? aFN[player] === aFf && 0 < aA3[player] ? aA3[player] = 0 : (aFN[player] = aFf, aA3[player] = af.wz.xc(aFf) ? 255 : 64) : 1 === e0 ? (aA3[player] = 64, aFN[player] = aFf) : aA3[player] = aFf
		}(player, e0, aFf), 2 === a9.yT && this.lH(!0)
	}, this.tM = function() {
		aFV ? aFc(tN) : aFK && (1 !== aFJ ? (tN.imageSmoothingEnabled = !0, tN.setTransform(aFJ, 0, 0, aFJ, 0, 0), tN.drawImage(aFL, -aFH / aFJ, -aFI / aFJ), tN.setTransform(1, 0, 0, 1, 0, 0), tN.imageSmoothingEnabled = !1) : tN.drawImage(aFL, -
			aFH, -aFI))
	}, this.a71 = function(hg, hj) {
		aFH += hg, aFI += hj
	}, this.zy = function(hg, hj) {
		ab.a71(hg, hj)
	}, this.zoom = function(a0s, kk, kl) {
		aFJ *= a0s, aFH = (aFH + kk) * a0s - kk, aFI = (aFI + kl) * a0s - kl
	}, this.lH = function(bo) {
		return !aFV && !(!aFS && !bo && bb.lo < aFR + (1 === aFJ && 0 === aFH && 0 === aFI && (a9.a36() || a9.gu || 2 === a9.yT) ? 1e3 : a8D) || (aFS = !1, aFR = bb.lo, aFc(aFM), 0))
	}, this.aFi = function(a7) {
		return aFe(a7) * aF9[a7]
	}, this.aFj = function(player) {
		return aF9[player]
	}, this.iS = function() {
		bb.jb() % 10 == 9 && (aFS = a9.a38() && !a9.a36()), !a9.a36() && 4 <= ++aF4 && function() {
			var a7, er, es;
			for (aF4 = 0, es = 4; 1 <= es; es--)
				for (er = ah.jf - 1; 0 <= er; er--) a7 = ah.jh[er] + es * a9.eV, 0 < aA3[a7] && aA3[a7] < 255 && aA3[a7]--;
			if (2 !== a9.yT)
				for (er = ah.jf - 1; 0 <= er; er--) a7 = ah.jh[er], 0 < aA3[a7] && aA3[a7] < 255 && aA3[a7]--
		}();
		var a7, er, eY = Math.floor(.1 * ah.jf);
		for (eY = (eY = eY < 8 ? 8 : eY) > ah.jf ? ah.jf : eY, a7 = aF3 + eY - 1; aF3 <= a7; a7--) er = a7 % ah.jf, ! function(a7) {
			var hG = aFe(a7) * aF9[a7];
			0 < aF7[a7] && aG8(a7, aF5[a7], aF6[a7], aF7[a7], aF8[a7]) ? ! function(a7) {
				for (var ef, eh, a1, j7, eC = !1, es = 0; es < 8; es++) {
					if (a1 = aF7[a7] + 2, j7 = aF8[a7] + 2, a1 > ac.iA[a7] - ac.i9[a7] + 1 || j7 > ac.iC[a7] - ac.iB[a7] + 1) return eC;
					if (ef = aF5[a7] - 1, eh = aF6[a7] - 1, !aG8(a7, ef, eh, a1, j7)) return eC;
					aF5[a7] = ef, aF6[a7] = eh, aF7[a7] = a1, aF8[a7] = j7, eC = !0
				}
				return eC
			}(a7) && function(a7, hG) {
				for (var ef, eh, a1, j7, eC = !1, aAB = aF7[a7], mA = 1 + Math.floor(.02 * aAB), es = 1; es < 5; es++) {
					if ((a1 = aAB + es * mA) > ac.iA[a7] - ac.i9[a7] + 1) return eC;
					if ((j7 = aGE(hG, a1)) > ac.iC[a7] - ac.iB[a7] + 1) return eC;
					ef = ac.i9[a7] + Math.floor(Math.random() * (ac.iA[a7] - ac.i9[a7] + 2 - a1)), eh = ac.iB[a7] + Math.floor(Math.random() * (ac.iC[a7] - ac.iB[a7] + 2 - j7)), aG8(a7, ef, eh, a1, j7) && (aF5[a7] = ef, aF6[a7] = eh, aF7[
						a7] = a1, aF8[a7] = j7, eC = !0)
				}
				return eC
			}(a7, hG) && aGB(a7) : ! function(a7, hG) {
				var j7, ef = aF5[a7] + 1,
					eh = aF6[a7] + 1,
					a1 = aF7[a7] - 2;
				for (;;) {
					if (a1 < 1) {
						aF7[a7] = 0;
						break
					}
					if (j7 = aGE(hG, a1), aG8(a7, ef, eh, a1, j7)) return aF5[a7] = ef, aF6[a7] = eh, aF7[a7] = a1, aF8[a7] = j7, 1;
					ef++, eh++, a1 -= 2
				}
				return
			}(a7, hG) ? function(a7, hG) {
				var ef, eh, a1, j7, es, mG, iu = ac.iA[a7] - ac.i9[a7] + 1,
					kz = Math.floor(.02 * iu);
				for (mG = -6 * (kz = kz < 1 ? 1 : kz), es = iu; mG <= es; es -= kz)
					if (j7 = aGE(hG, a1 = 0 < es ? es : 1), ef = ac.i9[a7] + Math.floor(Math.random() * (ac.iA[a7] - ac.i9[a7] + 2 - a1)), eh = ac.iB[a7] + Math.floor(Math.random() * (ac.iC[a7] - ac.iB[a7] + 2 - j7)), aG8(a7, ef, eh, a1,
							j7)) return aF5[a7] = ef, aF6[a7] = eh, aF7[a7] = a1, aF8[a7] = j7
			}(a7, hG) : aGB(a7)
		}(ah.jh[er]);
		aF3 = (aF3 += eY) % ah.jf
	}, this.lC = function() {
		var a7, g6, hP, hQ;
		if (bb.jb() % 4 == 1)
			for (a7 = ah.jf - 1; 0 <= a7; a7--) g6 = ah.jh[a7], aY.a6H[g6] < 2 || ((hP = Math.max(aFW[g6] - 1, 0)) === (hQ = Math.max(aFX[g6] - 1, 0)) ? 0 === hP && (aY.a6H[g6] %= 2) : 0 === hQ && aY.a6H[g6] < 6 && (aY.a6H[g6] += 4), aFW[g6] =
				hP, aFX[g6] = hQ)
	}, this.a4e = function(player) {
		var a7 = player + 2 * a9.eV,
			dk = aA3[a7];
		return 0 < dk && (aJ.ya(50, player), aA3[a7] = 0, 255 === dk)
	}, this.a3h = function(player) {
		return 255 === aA3[player + 2 * a9.eV]
	}
}

function cW() {
	var aGH, aGI;
	this.dU = function() {
		aGH =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), aGI =
			"Pestilent Dominion;Wretched Realm;Damned Province;Corrupt Zone;Cursed Territory;Blight Nation;Haunted Expanse;Malevolent State;Ruined Empire;Contaminated Land;Epidemic Domain;Forsaken District;Abandoned Wasteland;Necrotic Enclave;Tainted Domain;Decayed Principality;Infested Region;Malignant Territory;Toxic Dominion;Ravaged Sector;Ghostly Realm;Plagued Commonwealth;Afflicted State;Desolate Nation;Apocalyptic Zone;Radiated Province;Deathly District;Pestilence Haven;Doom Territory;Malefic Expanse;Abandoned State;Cursed Haven;Corroded Zone;Hauntland;Noxious Nation;Infected Enclave;Ruinous Domain;Wasteland Woe;Rotten Principality;Voided Land;Vile Dominion;Catastrophic Region;Eerie Expanse;Desolation State;Forsaken Outpost;Contagion District;Damaged Province;Abhorrent Sector;Accursed Nation;Doomstruck Land;Radiant Ruin;Deathly Enclave;Malefic Dominion;Plague District;Infected Haven;Corrupt State;Pestilent Territory;Razed Realm;Haunted Wasteland;Toxic Sector;Cursed Dominion;Decaying Province;Forsaken Enclave;Ruinous Region;Malignant Haven;Infested State;Ghostly Nation;Tainted Territory;Damned District;Radiated Dominion;Desolate Expanse;Apocalyptic Land;Death Zone;Wretched State;Malevolent Haven;Plagued Nation;Noxious Domain;Voided Territory;Eerie Sector;Accursed Province;Necrotic District;Doom Haven;Haunt Realm;Rotten Nation;Forsaken Territory;Infected State;Abhorrent Expanse;Malignant Land;Toxic Dominion;Ruined District;Ghostland;Cursed Sector;Radiant Nation"
			.split(";");
		for (var a4x = ["K ", " Y", "E ", " Z", " z", " s", "S "], aGJ = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], a7 = aGH.length - 1; 0 <= a7; a7--)
			for (var er = a4x.length - 1; 0 <= er; er--) aGH[a7] = aGH[a7].replace(a4x[er], aGJ[er]);
		if (__fx.settings.realisticNames) aGH = realisticNames;
	}, this.a2t = function() {
		var eY = a9.je,
			z1 = ac.z1,
			a4h = ac.a4h,
			playerNamesData = a9.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < eY)
			for (var a7 = 0; a7 < eY; a7++) z1[a7] = a4h[a7] = "Player " + au.iv(1e3);
		else
			for (a7 = 0; a7 < eY; a7++) z1[a7] = a4h[a7] = playerNamesData[a7]
	}, this.a3 = function() {
		if (9 === a9.jy) {
			for (var dz = au.random(), aGP = aGH, aGQ = aGI, eY = aGP.length, kP = a9.data.teamPlayerCount[7], z1 = ac.z1, a4h = ac.a4h, a7 = kP - 1; a7 >= a9.je; a7--) z1[a7] = a4h[a7] = aGP[(a7 + dz) % eY];
			for (eY = aGQ.length, a7 = kP; a7 < a9.eV; a7++) z1[a7] = a4h[a7] = aGQ[a7 % eY]
		} else(2 === a9.data.playerNamesType ? function() {
			for (var eY = a9.eV, z1 = ac.z1, a4h = ac.a4h, playerNamesData = a9.data.playerNamesData, a7 = a9.je; a7 < eY; a7++) z1[a7] = a4h[a7] = playerNamesData[a7]
		} : 1 === a9.data.playerNamesType ? function() {
			for (var z1 = ac.z1, a4h = ac.a4h, a7 = a9.je; a7 < a9.eV; a7++) z1[a7] = a4h[a7] = "Bot " + au.iv(1e3)
		} : function() {
			for (var aGP = aGH, eY = aGP.length, dz = au.random(), z1 = ac.z1, a4h = ac.a4h, a7 = a9.je; a7 < a9.eV; a7++) z1[a7] = a4h[a7] = aGP[(a7 + dz) % eY]
		})()
	}
}

function cp() {
	this.aGR = [], this.aGS = [], this.dU = function() {
		this.aGR = [], this.aGS = []
	}, this.iS = function() {
		0 <= this.aGR.length && this.aGT(this.aGR), 0 <= this.aGS.length && this.aGT(this.aGS)
	}, this.aGT = function(g) {
		for (var es = -1, a7 = g.length - 1; 0 <= a7; a7--)
			if (g[a7].lo--, g[a7].lo <= 0) {
				es = a7;
				break
			} for (a7 = es; 0 <= a7; a7--) g.shift()
	}, this.a3V = function(id, yH, aGU) {
		return this.eu(this.aGR, id, yH, aGU)
	}, this.aGV = function(id, yH, aGU) {
		return this.eu(this.aGS, id, yH, aGU)
	}, this.eu = function(g, id, yH, aGU) {
		return ! function(g, id, yH) {
			var a7, k3;
			for (a7 = yH.length - 1; 0 <= a7; a7--)
				for (k3 = g.length - 1; 0 <= k3; k3--)
					if (g[k3].player === yH[a7] && id === g[k3].id) return 1;
			return
		}(g, id, yH) && (aGU && function(g, id, yH) {
			var a7;
			for (a7 = yH.length - 1; 0 <= a7; a7--) g.push({
				player: yH[a7],
				id: id,
				lo: 384
			})
		}(g, id, yH), !0)
	}
}

function cV() {
	this.a4h = new Array(a9.eV), this.z1 = new Array(a9.eV), this.a1l = new Uint8Array(a9.eV), this.lV = new Uint8Array(a9.eV), this.i9 = new Uint16Array(a9.eV), this.iB = new Uint16Array(a9.eV), this.iA = new Uint16Array(a9.eV), this.iC =
		new Uint16Array(a9.eV), this.gM = new Uint32Array(a9.eV), this.wA = new Uint32Array(a9.eV), this.ga = new Uint32Array(a9.eV), this.g0 = null, this.gE = null, this.gF = null, this.ey = null, this.ok = new Uint16Array(a9.eV), this.ia =
		new Uint16Array(a9.eV), this.ib = new Uint16Array(a9.eV), this.z0 = new Uint16Array(a9.eV), this.yz = new Uint8Array(a9.eV), this.a1r = new Uint16Array(a9.eV), this.dU = function() {
			this.a4h.fill(""), this.z1.fill(""), this.a1l.fill(0), this.lV.fill(0), this.i9.fill(0), this.iB.fill(0), this.iA.fill(0), this.iC.fill(0), this.gM.fill(0), this.wA.fill(0), this.ga.fill(0), this.g0 = new Array(a9.eV), this.gE =
				new Array(a9.eV), this.gF = new Array(a9.eV), this.ey = new Array(a9.eV), this.ok.fill(0), this.ia.fill(0), this.ib.fill(0), this.z0.fill(0), this.yz.fill(0), this.a1r.fill(0)
		}
}

function cn() {
	this.aAR = function(player) {
		aC.lU(player), a9.yV++, ac.a1l[player] = 2, ac.z0[player] = be.zF.aDp(), player === a9.eI && (aT.show(!1, !1), aS.a8q(), bN.yE.yx()), ab.a4e(player)
	}
}

function cP() {
	this.jh = null, this.jf = 0, this.a2x = function() {
		for (this.jf = 0, a7 = a9.eV - 1; 0 <= a7; a7--) 0 !== ac.lV[a7] && this.jf++;
		this.jh = new Uint16Array(this.jf);
		for (var eY = 0, a7 = 0; a7 < a9.eV; a7++) 0 !== ac.lV[a7] && (this.jh[eY++] = a7)
	}, this.lB = function() {
		for (var gM = ac.gM, wA = ac.wA, yz = ac.yz, jh = ah.jh, a7 = ah.jf - 1; 0 <= a7; a7--) {
			var dk, g6 = jh[a7];
			gM[g6] <= bH.dl(wA[g6], 4) ? ag.dd(g6) : gM[g6] >= wA[g6] ? (dk = gM[g6], 250 <= (wA[g6] = dk) && (yz[g6] = 1)) : wA[g6] -= Math.max(1, bH.dl(wA[g6] - gM[g6], 1e3))
		}
		this.aGZ()
	}, this.aGZ = function() {
		for (var lV = ac.lV, jg = this.jh, a9U = this.jf, a7 = a9U - 1; 0 <= a7; a7--) 0 === lV[jg[a7]] && (jg[a7] = jg[--a9U]);
		this.jf = a9U
	}
}

function cX() {
	var aGa;
	this.k8 = null, this.k7 = 0, this.dU = function() {
		aGa = [], 9 === a9.jy && this.aGb()
	}, this.aGb = function() {
		var aGc = [60, 85, 105, 150, 190, 333];
		if (this.k8 = [0, 0, 0, 0, 0, 0], this.k7 = 0, a9.je <= aGc[0]) this.k7 = 256 - bH.dl(256 * bH.sqrt(1e3 * a9.je), bH.sqrt(1e3 * aGc[0])), this.k8[0] = a9.eV - a9.je - this.k7;
		else
			for (var a7 = 1; a7 < 6; a7++)
				if (a9.je <= aGc[a7]) {
					this.k8[a7 - 1] = 512 - aGc[a7 - 1] - bH.dl((512 - aGc[a7 - 1]) * (a9.je - aGc[a7 - 1]), aGc[a7] - aGc[a7 - 1]), this.k8[a7] = 512 - a9.je - this.k8[a7 - 1];
					break
				} a9.k2 = a9.eV - a9.je, a9.data.numberTeams = (0 < a9.je) + (0 < a9.k2), a9.data.playerCount = a9.vg = a9.je + a9.k2, a9.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, a9.je + this.k7, a9.k2 - this.k7]), a9.a2n
		.a2r()
	}, this.aDw = function(player) {
		aGa.push({
			player: player,
			g1: 14 + au.iv(20)
		})
	}, this.iS = function() {
		if (9 === a9.jy)
			for (var a7 = aGa.length - 1; 0 <= a7; a7--) --aGa[a7].g1 <= 0 && (ab.ox(aGa[a7].player, 0, af.wz.xK + af.wz.xY), aGa.splice(a7))
	}
}

function d4() {
	function aGr() {
		return {
			ej: bO.ej,
			ek: bO.ek,
			v5: bO.v5,
			v1: bO.v1,
			v2: bO.v2,
			v6: bO.v6,
			eE: bO.eE,
			mapSeed: bO.mapSeed
		}
	}

	function aGj(a7) {
		return 1 !== a7 && bO.aAo(a7) && a7 !== bO.aGs()
	}
	this.aGe = 22, this.aE7 = 4096, this.ej = 0, this.ek = 0, this.v5 = null, this.v1 = null, this.v2 = null, this.v6 = null, this.eE = 0, this.mapSeed = 0, this.v3 = !1, this.v4 = new aGf, this.uv = new aGg, this.a53 = new aGh, this.dU =
function() {
		this.uv.dU()
	}, this.a3 = function(map, aGi) {
		((map %= this.aGe) !== this.eE || aGj(this.eE) && aGi !== this.mapSeed) && (this.v3 = !1, this.v4.aGk(), au.a2s(map), this.eE = map, this.mapSeed = aGi, aGj(map) && (bO.uv.uw[map].aGl = aGi), this.aAo(this.eE) ? (map = bO.uv.uw[this.eE],
			this.ej = map.a1, this.ek = map.j7, au.a2s(map.aGl), al.a3([this.ej, this.ek, map.la, map.lX]), aGn(), ak.aGo(), al.aGp()) : aGm())
	}, this.aGq = function(map, aGi) {
		var fG = aGr(),
			map = (this.a3(map, aGi), this.v4.aGk(), aGr());
		return this.ej = fG.ej, this.ek = fG.ek, this.v5 = fG.v5, this.v1 = fG.v1, this.v2 = fG.v2, this.v6 = fG.v6, this.eE = fG.eE, this.mapSeed = fG.mapSeed, map
	}, this.a3C = function(canvas) {
		canvas && this.v5 !== canvas && (this.ej = canvas.width, this.ek = canvas.height, this.v5 = canvas, this.v1 = this.v5.getContext("2d", {
			alpha: !1
		}), this.hE = this.v1.getImageData(0, 0, this.ej, this.ek), this.v6 = this.hE.data, this.eE = this.aGs(), this.mapSeed = 0, bO.uv.uw[this.eE].name = a9.data.mapName)
	}, this.eD = function(a7) {
		return 3 === a7 || 7 === a7 || 9 === a7 || 21 === a7 || a7 === this.aGs()
	}, this.aGt = function(a7) {
		return 2 === a7 || 7 === a7 || 9 === a7 || 20 === a7
	}, this.aGu = function(a7) {
		return 1 === a7
	}, this.aGs = function() {
		return this.aGe
	}, this.aAo = function(a7) {
		return void 0 === this.uv.uw[a7].aGv
	}, this.a3B = function(pH) {
		return 0 === pH.mapType ? pH.mapProceduralIndex < 10 ? pH.mapProceduralIndex : 10 + pH.mapProceduralIndex : 1 === pH.mapType ? pH.mapRealisticIndex + 10 : void 0
	}, this.aAp = function(pH, aGw) {
		0 === pH.mapType ? pH.mapProceduralIndex = aGw < 10 ? aGw : aGw - 10 : 1 === pH.mapType && (pH.mapRealisticIndex = aGw - 10)
	}
}

function aGf() {
	function aH5() {
		bO.v4.iS()
	}

	function aHB(g6, aHA) {
		0 < aHA && (bO.v6[g6] += aHA, bO.v6[g6 + 1] += aHA, bO.v6[g6 + 2] += aHA)
	}

	function h1(g6) {
		return bO.v6[g6 + 2] > bO.v6[g6] && bO.v6[g6 + 2] > bO.v6[g6 + 1]
	}
	this.a7D = -1, this.zT = 0, this.aGx = 0, this.aGy = 8, this.aGz = 32, this.aH0 = 8, this.aH1 = 32, this.aH2 = [0, 0], this.a6H = [0, 0, 0, 0], this.i4 = null, this.aH3 = !0, this.aH4 = !1, this.aGk = function() {
		-1 !== this.a7D && clearTimeout(this.a7D), this.a7D = -1, this.i4 = null, al.aGp()
	}, this.dU = function() {
		7 === aW.zb() || this.aH4 || (this.aH3 = !0, this.zT = 0, this.aGx = 1, this.aH2 = [bO.uv.uw[bO.eE].vO[0], bO.uv.uw[bO.eE].vP[0]], this.a6H = [bO.uv.uw[bO.eE].aGv[3], bO.uv.uw[bO.eE].aGv[4], bO.uv.uw[bO.eE].aGv[5], bO.uv.uw[bO.eE].aGv[
			6]], this.aGy = bO.uv.uw[bO.eE].aGv[7], this.aGz = bO.uv.uw[bO.eE].aGv[8], this.aH0 = bO.uv.uw[bO.eE].aGv[9], this.aH1 = bO.uv.uw[bO.eE].aGv[10], this.aH3 ? this.a7D = setTimeout(aH5, 16) : this.iS())
	}, this.iS = function() {
		if (8 === aW.zb() && aD.lp()) this.a7D = setTimeout(aH5, 16);
		else {
			if (0 === this.zT) {
				var aGl = au.aH6();
				if (au.a2s(bO.uv.uw[bO.eE].aGv[2]), al.a3([bO.ej, bO.ek, bO.uv.uw[bO.eE].aGv[0], bO.uv.uw[bO.eE].aGv[1]]), au.a2s(aGl), this.i4 = al.aH7(), this.zT++, this.aH3) return void(this.a7D = setTimeout(aH5, 16))
			}
			for (var g6, eK, aGl = this.aH3 ? 10 : 1e6, aGl = bO.ek - this.aGx - 1 < aGl ? bO.ek - this.aGx - 1 : aGl, wN = this.aGx + aGl, eh = this.aGx; eh < wN; eh++)
				for (var ef = 1; ef < bO.ej - 1; ef++) h1(g6 = 4 * (eK = ef + eh * bO.ej)) ? this.aH8(g6, eK, 1) : (this.aH8(g6, eK, 0), function(ef, eh, g6) {
					return 1 < ef && h1(g6 - 4) || ef < bO.ej - 2 && h1(g6 + 4) || 1 < eh && h1(g6 - 4 * bO.ej) || eh < bO.ek - 2 && h1(g6 + 4 * bO.ej)
				}(ef, eh, g6) && this.aH9(ef, eh));
			this.aGx = wN, this.aGx >= bO.ek - 1 ? (bO.v1.putImageData(bO.v2, 0, 0, 1, 1, bO.ej - 2, bO.ek - 2), bb.dc = !0, this.aGk()) : this.aH3 && (this.a7D = setTimeout(aH5, 16))
		}
	}, this.aH8 = function(g6, eK, e0) {
		aHB(g6, Math.floor(this.aH2[e0] + this.a6H[e0] * this.i4[eK] / 1e4) - bO.v6[g6])
	}, this.aHC = function(g6, dz, aHD, e0, a6H) {
		aHB(g6, Math.floor(this.aH2[e0] + (1 - dz / aHD) * a6H) - bO.v6[g6])
	}, this.aH9 = function(kk, kl) {
		for (var g6, dz, aHD, a73 = kk - this.aGz, aHE = kl - this.aGz, wO = kk + this.aGz, wN = kl + this.aGz, a73 = a73 < 1 ? 1 : a73, wO = wO > bO.ej - 2 ? bO.ej - 2 : wO, wN = wN > bO.ek - 2 ? bO.ek - 2 : wN, eh = aHE < 1 ? 1 : aHE; eh <=
			wN; eh++)
			for (var ef = a73; ef <= wO; ef++) h1(g6 = 4 * (ef + eh * bO.ej)) ? (aHD = this.aGy + (this.aGz - this.aGy) * this.i4[ef + bO.ej * eh] / 1e4, Math.abs(kk - ef) > aHD || Math.abs(kl - eh) > aHD || aHD <= (dz = Math.sqrt((kk - ef) * (
				kk - ef) + (kl - eh) * (kl - eh))) || this.aHC(g6, dz, aHD, 1, this.a6H[3])) : (aHD = this.aH0 + (this.aH1 - this.aH0) * this.i4[ef + bO.ej * eh] / 1e4, Math.abs(kk - ef) > aHD || Math.abs(kl - eh) > aHD || aHD <= (dz = Math
				.sqrt((kk - ef) * (kk - ef) + (kl - eh) * (kl - eh))) || this.aHC(g6, dz, aHD, 0, this.a6H[2]))
	}
}

function aGn() {
	2 === bO.eE ? aHF([256], [256], [0, 205, 256], [500, 500, 0], [0, 0, 0]) : 7 === bO.eE ? aHF([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0]) : 8 === bO.eE ? aHF([410], [410], [0, 120, 210], [0, 80, 640], [0, 0, 0]) : 9 === bO.eE ? aHF([
		512], [512], [0, 70, 180, 200, 290, 420, 512], [500, 500, 0, 0, 500, 500, 0], [0, 0, 0, 0, 0, 0, 0]) : 20 === bO.eE && aHF([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0])
}

function aHF(aHG, aHH, aHI, aHJ, aHK) {
	for (var ef, eh, aHM, aHN, a0s, aHO, hf = aHG.length - 1, aHL = bO.ej + bO.ek, eY = (aHL *= aHL, aHI.length), a7 = eY - 1; 0 <= a7; a7--) aHI[a7] *= aHI[a7];
	var aHP = new Array(eY),
		aHQ = new Array(eY),
		aHR = new Array(eY),
		f0 = al.aH7();
	if (void 0 === aHK)
		for (aHK = new Array(eY), a7 = eY - 1; 0 <= a7; a7--) aHK[a7] = 0;
	for (a7 = 1; a7 < eY; a7++) aHP[a7] = aHI[a7] - aHI[a7 - 1], aHQ[a7] = aHJ[a7] - aHJ[a7 - 1], aHR[a7] = aHK[a7] - aHK[a7 - 1];
	for (ef = bO.ej - 1; 0 <= ef; ef--)
		for (eh = bO.ek - 1; 0 <= eh; eh--) {
			for (aHM = aHL, a7 = hf; 0 <= a7; a7--) aHM = (aHN = (ef - aHG[a7]) * (ef - aHG[a7]) + (eh - aHH[a7]) * (eh - aHH[a7])) < aHM ? aHN : aHM;
			for (a0s = aHJ[eY - 1], aHO = aHK[eY - 1], a7 = 1; a7 < eY; a7++)
				if (aHM < aHI[a7]) {
					a0s = aHJ[a7 - 1] + aDP((aHM - aHI[a7 - 1]) * aHQ[a7], aHP[a7]), aHO = aHK[a7 - 1] + aDP((aHM - aHI[a7 - 1]) * aHR[a7], aHP[a7]);
					break
				} aHS(bO.ej * eh + ef, a0s, aHO, f0)
		}
}

function aHS(e0, a0s, aHO, f0) {
	a0s < 500 ? f0[e0] = bH.dl(f0[e0] * a0s * 2, 1e3) : 500 < a0s && (f0[e0] += bH.dl(2 * (1e4 - f0[e0]) * (a0s - 500), 1e3)), f0[e0] += bH.dl(aHO * (10 * a0s - f0[e0]), 1e3)
}

function cZ() {
	var aHT;

	function aHd(a1G, hG, ef, eh, globalAlpha) {
		bO.v1.save(), bO.v1.globalAlpha = globalAlpha, bO.v1.imageSmoothingEnabled = !1, bO.v1.scale(hG, hG), bO.v1.drawImage(a1G, Math.floor(ef * (bO.ej / hG - a1G.width)), Math.floor(eh * (bO.ek / hG - a1G.height))), bO.v1.restore()
	}
	this.a50 = 0, this.a51 = 0, this.a52 = 0, this.a53 = 0, this.dU = function() {
		(aHT = new Array(bO.aGe))[0] = {
			a1: [0, 5e3, 8e3, 1e4],
			dz: [220, 250, 255, 220],
			s8: [190, 220, 0, 0],
			es: [170, 200, 0, 0]
		}, aHT[1] = {
			a1: [0, 4e3, 5e3, 6e3, 1e4],
			dz: [25, 0, 100, 0, 25],
			s8: [25, 0, 0, 0, 25],
			es: [25, 0, 0, 0, 25]
		}, aHT[2] = {
			a1: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			dz: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			s8: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			es: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aHT[3] = {
			a1: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			dz: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			s8: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			es: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, aHT[4] = {
			a1: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			dz: [10, 10, 20, 10, 10, 170, 212],
			s8: [20, 20, 60, 100, 100, 110, 170],
			es: [70, 70, 160, 30, 30, 60, 120]
		}, aHT[5] = {
			a1: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			dz: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			s8: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			es: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aHT[6] = {
			a1: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			dz: [10, 10, 60, 255, 255, 200, 200],
			s8: [10, 10, 60, 255, 255, 200, 200],
			es: [80, 80, 255, 255, 255, 200, 200]
		}, aHT[7] = {
			a1: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			dz: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			s8: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			es: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aHT[8] = {
			a1: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			dz: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			s8: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			es: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aHT[9] = {
			a1: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			dz: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			s8: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			es: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aHT[20] = {
			a1: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			dz: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			s8: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			es: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, aHT[21] = {
			a1: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			dz: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			s8: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			es: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.aGo = function() {
		var aHc, a7, er, fG, hE = function() {
				var hE;
				return bO.v5 = document.createElement("canvas"), bO.v5.width = bO.ej, bO.v5.height = bO.ek, bO.v1 = bO.v5.getContext("2d", {
					alpha: !1
				}), hE = bO.v1.getImageData(0, 0, bO.ej, bO.ek), bO.v6 = hE.data, hE
			}(),
			a1 = aHT[bO.eE].a1,
			dz = aHT[bO.eE].dz,
			s8 = aHT[bO.eE].s8,
			es = aHT[bO.eE].es,
			f0 = al.aH7(),
			eY = a1.length - 2,
			aHX = new Array(1 + eY),
			aHY = new Array(1 + eY),
			aHZ = new Array(1 + eY),
			aHa = new Array(1 + eY);
		for (er = eY; 0 <= er; er--) aHX[er] = a1[er + 1] - a1[er], aHY[er] = dz[er + 1] - dz[er], aHZ[er] = s8[er + 1] - s8[er], aHa[er] = es[er + 1] - es[er];
		for (a7 = bO.ej * bO.ek - 1; 0 <= a7; a7--)
			for (er = eY; 0 <= er; er--)
				if (f0[a7] >= a1[er]) {
					fG = f0[a7] - a1[er], bO.v6[4 * a7] = dz[er] + aDP(aHY[er] * fG, aHX[er]), bO.v6[4 * a7 + 1] = s8[er] + aDP(aHZ[er] * fG, aHX[er]), bO.v6[4 * a7 + 2] = es[er] + aDP(aHa[er] * fG, aHX[er]), bO.v6[4 * a7 + 3] = 255;
					break
				} bO.v1.putImageData(hE, 0, 0), bO.aGu(bO.eE) && aX.sC() && bO.aGu(bO.eE) && (hE = aX.aCW("arena"), aHc = aX.aCW("territorial.io"), aHd(hE, 5, .5, .5, .1), aHd(aHc, 2, .5, .45, .1)), bO.v3 = !0, bb.dc = !0
	}, this.a2v = function() {
		for (var g6, ef, eh, aHe, aHf, fI, a51 = 0, a1 = bO.ej, j7 = bO.ek, fG = a1 * j7 * 4, aHg = a9e, aHh = bO.v6, a7 = a1 - 1; 0 <= a7; a7--) aHg[(g6 = a7 << 2) + 2] = aHg[fG - g6 - 2] = 3;
		for (fG = 4 * a1, a7 = j7 - 1; 0 <= a7; a7--) aHg[(g6 = a7 * fG) + 2] = aHg[g6 + fG - 2] = 3;
		for (aHe = a1 - 1, aHf = j7 - 1, eh = 1; eh < aHf; eh++)
			for (fG = eh * a1, ef = 1; ef < aHe; ef++) fI = 1 - (aHh[(g6 = fG + ef << 2) + 2] > aHh[g6 + 1] && aHh[g6 + 2] > aHh[g6]), aHg[g6 + 2] = 2 - fI, a51 += fI;
		this.a50 = (a1 - 2) * (j7 - 2), this.a53 = 0, bO.eD(bO.eE) && (bO.a53.aHi(), bO.a53.aHj()), this.a51 = a9.jO = a51 - this.a53, this.a52 = this.a50 - this.a51 - this.a53
	}
}

function aGm() {
	var p6;
	10 === bO.eE ? p6 =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === bO.eE ? p6 =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === bO.eE ? p6 =
		"JJAf2uP6y-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeu0-F-n5a_GG4KJGGG3G3G3FFJFmKGJ4JGGGG3GJJFJG3G3G323G--kLPeduaKGFGGGG443JJJJJJG--B-C0FJK__443-BJ-66wmpBnJopCMJpCCCIIIJoopKKICKCBnCKJgooopMIDOzzSzUzbzzUSyTUxxrrrrrP1XcXXX9Hcn9cceemece7cPIoeX0sWWaOWVNTOcTNNcN0V0V5-N0aOa-0V--N50a5Obyc-M0z3TPOdgBnBF0NOpxpMV7-M2mMiLbinz03F0sTx8mfrNT-2l6QEdMwwp-5XX7UMTP1V1GIuvaNn-5Xfxrpw5XV1GNTEfn4-_XvzjAAA9mfA9ed9fpzyTUzyUaUyOX3n59NTKLLKHPPPO_LK4iidea_O_QeideeaLOLLJG3-0eeddOaPO_OKLKzEznzjgnnzBykknByEYnByug-3332ElJ222-2wBko2BnBnBwwzwx-9Y6j6rrrkccc-E5ctEizpJF-aDYgSMGz-X10G6VyjiyuuPeiuzjivh3G3K3G--k-9JGFAPEIZSKBghKSMIpKpCJnI9gcXeccehHccoeXBeoppKIJoghIHnCJnJmemmecmfA9jyTUzzzbbxbV0WaTT-OtWWWV0zxtyUN6yUzSxrSqTUztaN71190V7-5V15VUy--V-lxHEg--33oL-67Dhyu0--3FoL--7ahw-LGYowfzu-0HFMIfF-aHWWwxxxcXX-E8ZrUdfVl--TIJLzSr17V0wcDLvivjysGK3G4XaJb1zppIJpBccccge7fUxx9eocX7cXX6y7Y99Heggen9nJdAHp9Xnp9IIJfICIBdCKKIIMMJme19eXxxp9X9VVfEMMMSBpooe7XCSBomccxxpHcrKKCMHmXXmcxoeX1mpJe70BrMJmVV--gxExIpJcX71nKCJmhCKKCIJoopCKKKHX8KHd9nKrKBj6xrSrKpz6xSMMSrKppwObaP-UzSCAICIKCIKKKCMMKKCpCMMSrrrKpKprUSprMUSMrSprKrSpSrUrUSxpxprSrMrMprSSSppMKprSprrSrxKSUSqUGbqUbbrxrSxrSrKHXXeggeYBnBgmnBnKCrJnKpIKpBnKCMMrSS9chKKIBeX77EIAE5OxIIKKKIIEKSKSKKSKKMKpKpKKSMSSSSrSzxxxzlzzUzzzzzUxrMMMMSxxxrrxrrxxxxzUzOzrbxzrxzzzw6w6yOtttttyUbbyTTTTTTTTTUtzIrzbzbzbba-71-VVV77V--7711-V1-1---51--1-1-V0cN-N5VN1e-ee7-1mc71Xe9fIBcVV0WbyOzxX-VV7VNN5TUzUu1ce9menBecmf9gxHc7c7V-777---50VP-V-N-0WxppSJpr6zyObzttV6rMKpUyObttbryUbzWaP0sNNOX757X97X7ce9XXXXXVc7-V-X7VX5-V7eeA9menA9fBnCBnIIJoorMIRObpIKMJpppSSSMSoeX71-V7777X97c5V-ccWV0VX77--NN55-N--7U5111cXXenBcc7fABgcX117X7c-gf9emV---1--XXXVX7X17579VVV117Xed9XecXX--WV5Uzz6zyUzrSrUUaNUlxtzXXXee1777X1e-5NOy--WV5OttttaTUzyUrxxtzzzlzMUrzzxaUttbbxWzxpSonBmpCCJpCKCIJpJooeACHpprSxaOV577U6sOWV-NNN70WVOWzwTTT5NUxryUba5NNOba1cc79cXX199X-91X99mhIHfJmXgxxxpHe9XccX997c7X0zV--V-N7P6k49V711-111X-77cX79mmeHeccV1mdbn_Uno-DKNVSo1-O9kaiKKzzEzpK-8_SLEzzzeeeV1Hinzjh3-8_UsM9mjtyTVBHk8AfiyvivizpG43G3GG--0OIzV2mnjMaLEBxn29mc4SSpprSSSUprrKprSSpppKMMSrMrxrKIKHhKHfIKKpIBpCIIJpIJnIKpSKJo1AKKpppxprSprpMKphIKhMUSrCKMRpMKrrSMMMMSKUVUxxUxSJe19efAKKUbKnMxKKUKIKUStaSrUMTUrzbzxxrSzzUy5SSKtbqprTprzSxxSrBXe9ghSrMMUyUzzbySKrUKpUSpSUMtV---D--0aN-X9997977VVe9XD-19XX1-9XcXXXXYxzUttzbV-7VX78by0rUSppKMbs5-V77V77X-X71--17-X-7V-0WWVN-6byTOrJepKpSrpxrUSSIKSKSzrrrs797c1711ObUSxxpSSSSSSy5--7997VV6z_rrSrxpSprs-7VX17XeXVXN-11-TUUSxztyTT5ObzrSSrzbtbbtUKzrxrSxzUrzUzShKhMKrxzzzxyMtzqnAA9mgfAAACKICBnKzbbWWbaOtbaOaTUbtyUyTTTOaOa556zyMxrUtaTUzrxrrrzSzxzbta5N0s-ee997cX97cX7cX7X771-V-aT--V17V7X1--V7Xea6ty5T5Mts5--5-550aT55NU_ySxxta5OVD--0VN5NND-N--8a6a5OsN1og55OVVOta-75OTSqhCMrBmhMbbtzzzzta--NN5-8Us0V-N1eD-XN0VOKppraT18zs0SyOUaOa5OaN1-VcX7X5OSpSxpMSra5NNObV5-N19cVc-W_KMSrrxxztzsND--MJpKMrzb_pyTMzUa5-0a5-X-VOIMMMSBnKKSMrMzprzaQBen1ceeXcccempprtzUUSv9mmfMrxzUMxpUUUrzbztrxyOzUxrrMzbWbJppSvC7gmenA9mgggfABgnBf9nBppUrttbzUzCKrSSxzbaUxPfMSKpKnJhRpIAIIKrSzUMMzxztyTObaTOWWaTTTUbzzrza5ObaTOWbbbUrSrStzyUUzbyN--s5T2rs-1XeXeefBn97VfBnIBemf97cXcX7bWV1111c1eiN7f-ABa6s19n77X7g97cceX7f11UzUppry-N0MMAIKzV4UW_rJoppza55-TMSsNObztaOa6KzV-77N-SKKSUzbaOaOyUtzzzyTUbtzxrsOaObtttSraOWaObzzzzz_ptaUbyMzzyUtbVUyUrUzzzzzUzzxyQMzzUzzzeeeeXee9Xeee9eeeefKMIKcf9ggnABemefCCKzrLf99X1fABgeeXAKSSMKxxzUSrSraMRpSxrQA7X7X9oopBo1N9gnIKCIJmmmnKIKJomn7emfMBc51997cenKMUzPmegmfMMSzzyNA9OzzUUIKMUKrKpSSrUrxza6SrMSrrMSrUUxzrxxxrUSSzSSxSUSxSrSSrSrpUrMMUSprrUUUUSpKrySzSrxzzxpzSppprrzUrSpSSCSRprSMKKpMKrMKKCIIIBohIBonAAABnABmgemhBmmmeenBnA9X9ecceeXX7Xemmcemgef9nA7en9kecee9eXeX1-enBkeX7XeXce92VXX99ceACBn9XX77XVVV--X7XemmgeeXXX997VVc75OVeX9hAAA7eeme9eXe9Xeeee9e9ceemmmmf9meegfHenBmfBnA9mgggemnBggfBnIHmmekeeceX9e9cXXXmoeceeXce9Xce99eXnBpCBpSrSrSrMSxzzxyeeeeemkeemgf9pprUzUHmeXXem99e9eceef1dbs17ecepKrMgg9XeXccX-Xeen7cXeenBmnBghCBgnBACCCMCKJohCCMrzzzyUzzzzqognBmnCKprMSMACKpz_wmoogepCKrMSMStUZkeeeeAH15-11-X9hCKMSRomcgpKzprpprs0z_rKppzrSrzSpIKIBgXmprrUKIKKrttpKzSUBomm97ghJpSyUzSzzzUbzzUtrzfAI9epnHceceemegghUUzxzWbzzrbTopMSta5OVOrzzUSKUUxrsOrpxQCSrIIKSxSrSzSrzUrUUtttztUtbzxxMaOV-sOWV5--NNOUzUzxzxzUUrSxrrUSrrSzrrSxSprSppprSpxrrrUUrbbtzrbbrztzzrbbyTT6bSyOa0aTOaOy5T6aTOzbzpxxxxpzUSxs7XESrKyOUrtaOa17zyUaTOaOSxprKCKgnIAAABnBnKppppppJnHnCMJnCCKMSrSSKKICCKKKKppKo-2AYFDB--MPns--j8uk-0TwQV7mzO6ievyyvFGK3F--qNX0zxzxrXce9c-3mKUw-DOJuzw9-lBkNyuuuviyzjJK43G000-OaPJEprzSKMrrkccc-1997-2C8pDo-uPOqwf9mnbbtyTV-2Jzv--5gXT-CCmSUvvGG--5xsy-0D-rE-4b-qzSqX7--sMmk-0lNEV-IZ0nk-tm6EnFN-Rt3BvgF-5ReOUc-otNAvisG30DRoZzUzzzrwP9eeecc-3uJps0eSSKRrMGzrzrrM-V-eXXeX--2fpn--6MiT-0DoXD--6ULD--E2lg--TGhs--wrkk-0uNAV-npyzx-0bkCEF-6EeL6jG-5bpJQAEbaV0nuubvp-0dya3mhrk--BzMKzF28zMOzrMUP779c-gziXufkG-2byBQrcV-J-IhV490elopIKKJzlX70V---2FCPyV-HVlaxpX7-x0_hzvvGGF-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--1u44Wxxxr17cc-CFkqTusBG-2cO5jMcV3oE3YuuiB3FF0P7tWrre9-4GLRUh--19rRV-JN8nk-1B7iV-3OQA--cpNzV8oQxrjjizyyw4KKG44-1d-ezGV-_77wzvGF0eJQZmxL0V-C9jlvF09OI0rTX--JoI0k-PTDyyV-40oK--e5AbV7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL--1qoP6bvVF-qtlNxCKCUa0V7V0xqOguudaNznk-G3-Lvq2RrOc-2N7SOfvlG-2g3LFmnKUrla-7X--Vg031A1AJgoxMSporMSSr-XV--10aNXeV-y7CVQfz0GF0RIcNptae02XdsiLTezvzyyyzjzGGGGGGGGG3--GRVT-QXt0TTyyzwK4GJ-r5K0genCxtwT-V-yBnotTvg-F-RR4WyVBNuCtdejvYyi-knBLOFJJF3BSAjnMSzUbsX9XeV3t0vf_fzv-GF0wZ8bxrOe9--8AQA--HN1m-CZlGTLRwx-cmONzIxrprppKprUyUts-XccX1e97cXc--_7pw029QbgoonJUROV5-V-iJrguik4--mdjY-0tQAdaRk-BiCss-aMQLTjJ--3jUaV4tUqAvjzx5KGF-YB7rwfzwOeVuOXlO_O__Kbj2vizuviyuuvfeveTiviynvYziefiiefvfiYvjB-444G3F-0-2-kJ304K3GGG3JG34--F3GJ-IBbGxS--3yOw8PPd_GaaiC-Eueibvyvx-304--C-2IBzcggmeenCMSrwOaOzKHmnrUSxzTOu--V7VVV9c-yPFVPuf0-F0gt0ZpKs17-aTPhOiBFxRy2ZmgnJeeXAICBnBenJzSrKKrrSSrKpMKJnBnCKMSMIKMrxSOV0V0zzUKSpppSKSEKIESOV-Oa0sOzUrMKSppSUMMkP77V-0a1--VP-17--71--7-UxSrrrrSJpqOtzzOX770hBcX7V5--XXV11cc717X7X9XX999777X7e-_chDLLiiivYEl33G3-Vock29fSpSKonCMU5OaNV-NNX7c2DaQYtPjzvjfiywGK33G3G-0xDlzpUyX9V5PSx2jyuzVGGK-0CFZWnwNV1uXF0_fBo1IJJoSSJnACCCKppSxyUV-117-N711-6evlav4-JpSyQKUSSSpaX517c-c-yg6luPzk3F0CNJQpy9-iumBnaLKKeudOKG_KLKLLLueLOaQEEjEjyinEyzejjnskBnwC043F2-nn2zE2EEoKGKFASOdporHX8CBhzxraUqUzSlzSX77eeeXBc0V-LhikvW--KmlL-EfebDLTskk-YMe-RrMTV7V2uyCCaPEBC-5q1sjK6a7V-A2Ih-Aq892rMUNP7cc-TlB1tv--ANsVBjV2v6d6aOwnp-7qIGAIJlaNV1imQQOPszivwzE8GGGGJ0vODuRhCrppCBpULN5N7NX90WX-6gppqPk-GqSXfBnqOxtaUemec-5nnTs-YPD2wz6re9-3QGmz__bnno-2PJQD-KhKnTaaTn-nF-0Pg_N-aphUzj4FKhhRbmhUrKHohIzMpxrpKKKSMKSKxrU5N5OaUL--X11777Hf9VX-N7--5P-XHXe-0hhca-WqtqMCppppSJp6ltz5NVXV-X17eV0QUJbjJ-nREfwnBwOtbae-IiGGaLPvEk0-Er7eI9nCKpUa0V--1v_ZSfcl--0T7Zc0TwsLPNzgz8K4--MdCP-8jMTqMno-QTv6BfDUs-CjSgLdjBG--rknYV0vttlfW-0CxT2mcUV6Qv4daeffkn3J3B-EUOXBja1CjifiOvd_LdKKaaOaK--nBw8aOFFeeKbfivzjix3En-2Ennz-n-3-2UYTi-bkAQ5LLKaRzgwnznGJ-MWJCRr5NV0wBylcwF0D6jaola--BJZx--NfgX-6lRkav3--sx_2V7RUnUaK_aLLQjzzz-atBrI9mgmnICCpCKLTOaOzs0aNOWV9c-E9stskaiM_-pIJnKoxxzxzrUrrxzUxzSrUSzSpISxzxbxzzzzrzzrzxbzrzUta-0YBe7mf9eeV--P9eee7XXcecVXeXceA9eeeXX-c7T9Bee997n9X-0wqC2ylF4iQ5frxSUzJzqNX9cX97V1wr6EuslF-YbY3xSUaeX--x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === bO.eE ? p6 =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === bO.eE ? p6 =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === bO.eE ? p6 =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === bO.eE ? p6 =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === bO.eE ? p6 =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === bO.eE ? p6 =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === bO.eE && (p6 =
			"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV"
			), (new uo).uq(p6)
}

function aGg() {
	this.uw = null, this.aHk = null, this.aHl = null, this.dU = function() {
		var aHm = [120, 105, 92],
			cos = [12, 12, 60],
			aHn = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aHo = [140, 130, 120],
			aHp = [12, 12, 76],
			aHq = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aHr = [130, 117, 106],
			aHs = [12, 12, 68],
			aHt = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.uw = new Array(bO.aGe + 1), __fx.customLobby.setMapInfo(this.uw), this.uw[0] = {
			name: L(118),
			a1: 230,
			j7: 230,
			la: 1e3,
			lX: 2e3,
			aGl: 173
		}, this.uw[1] = {
			name: L(119),
			a1: 800,
			j7: 800,
			la: 100,
			lX: 50,
			aGl: 43
		}, this.uw[2] = {
			name: L(120),
			a1: 512,
			j7: 512,
			la: 128,
			lX: 32,
			aGl: 0
		}, this.uw[3] = {
			name: L(121) + " 1",
			a1: 960,
			j7: 960,
			la: 60,
			lX: 8,
			aGl: 0
		}, this.uw[4] = {
			name: L(122),
			a1: 900,
			j7: 900,
			la: 100,
			lX: 5,
			aGl: 0
		}, this.uw[5] = {
			name: L(123),
			a1: 1e3,
			j7: 1e3,
			la: 100,
			lX: 40,
			aGl: 0
		}, this.uw[6] = {
			name: L(124),
			a1: 1e3,
			j7: 1e3,
			la: 100,
			lX: 20,
			aGl: 0
		}, this.uw[7] = {
			name: L(125),
			a1: 1024,
			j7: 1024,
			la: 128,
			lX: 32,
			aGl: 0
		}, this.uw[8] = {
			name: L(126),
			a1: 820,
			j7: 820,
			la: 200,
			lX: 100,
			aGl: 0
		}, this.uw[9] = {
			name: L(127),
			a1: 1024,
			j7: 1024,
			la: 128,
			lX: 32,
			aGl: 0
		}, this.uw[10] = {
			name: L(128),
			vO: aHo,
			vP: aHp,
			aGv: aHq
		}, this.uw[11] = {
			name: L(129),
			vO: aHr,
			vP: aHs,
			aGv: aHt
		}, this.uw[12] = {
			name: L(130),
			vO: aHr,
			vP: aHs,
			aGv: aHt
		}, this.uw[13] = {
			name: L(131),
			vO: aHm,
			vP: cos,
			aGv: aHn
		}, this.uw[14] = {
			name: L(132),
			vO: aHm,
			vP: cos,
			aGv: aHn
		}, this.uw[15] = {
			name: L(133),
			vO: aHo,
			vP: aHp,
			aGv: aHq
		}, this.uw[16] = {
			name: L(134),
			vO: aHo,
			vP: aHp,
			aGv: aHq
		}, this.uw[17] = {
			name: L(135),
			vO: aHm,
			vP: cos,
			aGv: aHn
		}, this.uw[18] = {
			name: L(136),
			vO: aHr,
			vP: aHs,
			aGv: aHt
		}, this.uw[19] = {
			name: L(137),
			vO: aHm,
			vP: cos,
			aGv: aHn
		}, this.uw[20] = {
			name: L(138),
			a1: 1024,
			j7: 1024,
			la: 128,
			lX: 32,
			aGl: 0
		}, this.uw[21] = {
			name: L(121) + " 2",
			a1: 940,
			j7: 940,
			la: 80,
			lX: 8,
			aGl: 0
		}, this.uw[bO.aGe] = {
			name: ""
		}, this.aHk = new Uint8Array(12);
		for (var a7 = 0; a7 < 10; a7++) this.aHk[a7] = a7;
		for (this.aHk[10] = 20, this.aHk[11] = 21, this.aHl = new Uint8Array(10), a7 = 0; a7 < 10; a7++) this.aHl[a7] = 10 + a7
	}
}

function aGh() {
	this.aHi = function() {
		for (var g6, ef, fG, aHg = a9e, aHh = bO.v6, a1 = bO.ej, aHe = a1 - 1, aHf = bO.ek - 1, g1 = 0, eh = 1; eh < aHf; eh++)
			for (fG = eh * a1, ef = 1; ef < aHe; ef++) aHh[g6 = fG + ef << 2] === aHh[1 + g6] && aHh[g6] === aHh[2 + g6] && (g1++, aHg[2 + g6] = 4);
		ak.a53 = g1
	}, this.aHj = function() {
		for (var aHg = a9e, a1 = bO.ej, aHe = a1 - 1, aHf = bO.ek - 1, id = 5, eh = 1; eh < aHf; eh++)
			for (var fG = eh * a1, ef = 1; ef < aHe; ef++) {
				var eC = 2 + (fG + ef << 2);
				4 === aHg[eC] && (! function(eC, id) {
					var eY = 1,
						aHg = a9e,
						ea = aY.ea,
						a15 = [eC];
					aHg[eC] = id;
					for (; eY;) {
						for (var a16 = [], a7 = 0; a7 < eY; a7++)
							for (var eN = a15[a7], eb = 3; 0 <= eb; eb--) {
								var ec = eN + ea[eb];
								4 === aHg[ec] && (aHg[ec] = id, a16.push(ec))
							}
						eY = (a15 = a16).length
					}
				}(eC, id), id = Math.max((id + 1) % 256, 5))
			}
	}
}

function a2u() {
	(wh = void 0 === wh ? document.createElement("canvas") : wh).width = bO.ej, wh.height = bO.ek, a2y = wh.getContext("2d", {
		alpha: !0
	}), a2z = a9e = null, a2z = a2y.getImageData(0, 0, bO.ej, bO.ek), a9e = a2z.data, b6.pZ.v7(a9e)
}

function ca() {
	var f0, a1, j7, max, aHv, lX, aHx, aHy, aHz, aI0, aI1, aI2, aI3, aI4, aHw = 1e4;

	function aIB(aIA, la, eY) {
		var a7;
		for (aHx[0] = aIA, a7 = 1; a7 < eY; a7++) aHx[a7] = aHx[a7 - 1] + la, la = aHx[a7] >= aHw ? (aHx[a7] = aHw - 1, -la) : aHx[a7] < 0 ? (aHx[a7] = 0, -la) : (la += 16384 <= au.random() ? lX : -lX) < -aHv ? -aHv : aHv < la ? aHv : la
	}

	function aID(ef, eh, aIE, eY) {
		(aIE ? function(ef, eh, eY) {
			var a7;
			for (a7 = 0; a7 < eY; a7++) f0[eh * a1 + ef + a7] = aHx[a7]
		} : function(ef, eh, eY) {
			var a7;
			for (a7 = 0; a7 < eY; a7++) f0[eh * a1 + ef + a7 * a1] = aHx[a7]
		})(ef, eh, eY)
	}

	function aIH(value, eY) {
		var a7, kz, eC, hU = value - aHx[eY - 1];
		if (0 != hU) {
			for (kz = 1 + bH.dl(Math.abs(hU), eY - 1), kz = hU < 0 ? -kz : kz, aHx[eY - 1] = value, eC = (eC = eY - 1 - bH.dl(Math.abs(hU), Math.abs(kz))) < 1 ? 1 : eY - 2 < eC ? eY - 2 : eC, a7 = eY - 2; eC <= a7; a7--) aHx[a7] += hU - (eY - 1 -
				a7) * kz;
			(hU < 0 ? function(eY) {
				var a7;
				for (a7 = eY - 2; 1 <= a7; a7--) aHx[a7] < 0 && (aHx[a7] = -aHx[a7] - 1)
			} : function(eY) {
				var a7;
				for (a7 = eY - 2; 1 <= a7; a7--) aHx[a7] >= aHw && (aHx[a7] = 2 * aHw - aHx[a7] - 1)
			})(eY)
		}
	}

	function aIK(a15, a16, eY) {
		for (var a7 = 0; a7 < eY; a7++) a15[a7] = a16[a7]
	}

	function aIL(g) {
		for (var a7 = 0; a7 < g.length - 1; a7++) g[a7] = g[a7 + 1] - g[a7];
		g[g.length - 1] = g[g.length - 3]
	}

	function aIM(a3P, gap, hT) {
		aHy.push(a3P), aHz.push(gap), aI0.push(hT)
	}
	this.a3 = function(a2B) {
		! function(a2B) {
			var a7;
			for (a1 = a2B[0], j7 = a2B[1], aHv = a2B[2], lX = a2B[3], f0 = new Int16Array(a1 * j7), max = j7 < a1 ? a1 : j7, aHx = new Int16Array(max), aHy = [], aHz = [], aI0 = [], aI1 = new Array(a1), aI2 = new Array(j7), a7 = a1 - 1; 0 <=
				a7; a7--) aI1[a7] = !1;
			for (a7 = j7 - 1; 0 <= a7; a7--) aI2[a7] = !1;
			aI3 = new Int16Array(a1), aI4 = new Int16Array(j7)
		}(a2B),
		function(eY) {
			var aIA = au.random() % aHw,
				la = au.random() % (2 * aHv + 1) - aHv;
			aIB(aIA, la, eY)
		}(max), aIK(aI4, aHx, j7), aID(0, 0, !0, a1);
		var ef, eh, a2B = f0[0],
			eY = max,
			la = au.random() % (2 * aHv + 1) - aHv;
		for (aIB(a2B, la, eY), aIK(aI3, aHx, a1), aID(0, 0, !1, j7), aIL(aI3), aIL(aI4), aIB(f0[a1 - 1], aI3[a1 - 1], j7), aID(a1 - 1, 0, !1, j7), aIB(f0[a1 * (j7 - 1)], aI4[j7 - 1], a1), aIH(f0[a1 * j7 - 1], a1), aID(0, j7 - 1, !0, a1), aI1[a1 -
				1] = aI1[0] = !0, aI2[j7 - 1] = aI2[0] = !0, aIM(0, a1, !0), aIM(0, j7, !1), ! function() {
				var aIO, a3P;
				for (;;) {
					if (aIO = function() {
							var a7, aIO = aHy.length - 1;
							for (a7 = aIO - 1; 0 <= a7; a7--) aHz[a7] > aHz[aIO] && (aIO = a7);
							return aIO
						}(), aHz[aIO] < 5) return;
					a3P = aHy[aIO] + bH.dl(aHz[aIO], 2), (aI0[aIO] ? function(ef) {
						var eY, aIR, a7, aBx = 0,
							aIS = 0;
						for (; aIS < j7 - 1;) {
							for (a7 = aBx + 1; a7 < j7; a7++)
								if (aI2[a7]) {
									aIS = a7;
									break
								} eY = aIS - aBx + 1, aIB(f0[ef + a1 * aBx], 0 === aBx ? aI3[ef] : aHx[aIR - 1] - aHx[aIR - 2], eY), aIH(f0[aIS * a1 + ef], eY), aID(ef, aBx, !1, eY), aIR = eY, aBx = aIS
						}
						aI1[ef] = !0
					} : function(eh) {
						var eY, aIR, a7, aBx = 0,
							aIS = 0;
						for (; aIS < a1 - 1;) {
							for (a7 = aBx + 1; a7 < a1; a7++)
								if (aI1[a7]) {
									aIS = a7;
									break
								} eY = aIS - aBx + 1, aIB(f0[eh * a1 + aBx], 0 === aBx ? aI4[eh] : aHx[aIR - 1] - aHx[aIR - 2], eY), aIH(f0[eh * a1 + aIS], eY), aID(aBx, eh, !0, eY), aIR = eY, aBx = aIS
						}
						aI2[eh] = !0
					})(a3P), aIM(a3P, aHy[aIO] + aHz[aIO] - a3P, aI0[aIO]), aHz[aIO] = a3P - aHy[aIO] + 1
				}
			}(), ef = 0; ef < a1; ef++)
			if (!aI1[ef])
				for (eh = 0; eh < j7; eh++) aI2[eh] || ! function(ef, eh) {
					var value = f0[eh * a1 + ef - 1] + f0[(eh - 1) * a1 + ef],
						a5C = 2;
					aI1[ef + 1] && (a5C++, value += f0[eh * a1 + ef + 1]);
					aI2[eh + 1] && (a5C++, value += f0[(eh + 1) * a1 + ef]);
					f0[eh * a1 + ef] = bH.dl(value, a5C)
				}(ef, eh)
	}, this.aH7 = function() {
		return f0
	}, this.aGp = function() {
		f0 = null
	}
}

function aDP(er, es) {
	return 0 <= er ? bH.dl(er, es) : -bH.dl(-er, es)
}

function jB(f0) {
	return f0 * f0
}

function a4S(er, es) {
	return es < er ? er : es
}

function a9A(er, es) {
	return er < es ? er : es
}

function a6a(er, f0, es) {
	return f0 < er ? er : es < f0 ? es : f0
}

function aIU(f0, eY) {
	for (var et = bH.dl(f0 + 1, 2), a7 = 0; a7 < eY; a7++) et = bH.dl(et + bH.dl(f0, et), 2);
	return et
}

function aEm(f0, eY) {
	return f0 < 1 ? 0 : aIU(f0, eY)
}

function aIV(ly, lz, rv, a6K, mB, mC, rw, sY) {
	return !(ly + rv <= mB || lz + a6K <= mC || mB + rw <= ly || mC + sY <= lz)
}

function aIW(ly, lz, rv, a6K, mB, mC, rw, sY) {
	return ly <= mB && lz <= mC && mB + rw <= ly + rv && mC + sY <= lz + a6K
}

function uy(f0) {
	return Math.floor(!!f0 * (1 + Math.log2(f0 + .5)))
}

function br() {
	this.dl = function(er, es) {
		return Math.floor((er + .5) / es)
	}, this.aIX = function(er, es) {
		return Math.floor(er * (es + .5))
	}, this.sqrt = function(f0) {
		return ~~Math.sqrt(f0 + .5)
	}, this.pow = function(e) {
		return Math.floor(Math.pow(2, e) + .5)
	}, this.ow = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aIY = function(fG, fI, fK) {
		return Math.max(Math.min(fG, fI), fK)
	}, this.aIZ = function(aIa, aIb, ef, eh) {
		ef -= aIa, aIa = eh - aIb, eh = 0;
		return 0 == ef ? eh = 0 <= aIa ? Math.PI : 0 : (eh = Math.atan(aIa / ef), eh += 0 < ef ? .5 * Math.PI : 1.5 * Math.PI), eh
	}, this.log2 = function(f0) {
		return Math.floor(!!f0 * (1 + Math.log2(f0 + .5)))
	}, this.log10 = function(f0) {
		return Math.floor(Math.log10(f0 + .5))
	}, this.aId = function(aIe, aIf, aIg, aIh, aIi) {
		return aIg - aIi < aIe && aIe < aIg + aIi && aIh - aIi < aIf && aIf < aIh + aIi
	}, this.vy = function(hN, hO) {
		return hN * hN + hO * hO
	}
}

function d6() {
	this.s = new aIj, this.ro = 0;
	var aIk = new Array(30);

	function aIo() {
		for (var eY = aIk.length, a7 = 0; a7 < eY; a7++) aIk[a7] = null
	}
	this.dU = function() {
		for (var aIl, aIm = document.body.firstChild; aIm;) {
			if (aIl = aIm.nextSibling, document.body.contains(aIm) && ("DIV" === aIm.tagName || "INPUT" === aIm.tagName || "BUTTON" === aIm.tagName)) try {
				document.body.removeChild(aIm)
			} catch (e) {
				console.log("error 2623: " + e)
			}
			aIm = aIl
		}
	}, this.o = function(e0, aIn, a2B) {
		void 0 === aIn && (aIn = this.ro), bb.dc = !0, 0 === e0 && (0 === aW.zb() ? e0 = 5 : u.v.setState(13)), this.qx(), this.ro === e0 && (aIn = aIk[e0].aIn, aIk[e0] = null), this.ro = e0;
		var kP = aIk[e0];
		if (!kP || 4 === e0 || 7 === e0 || 8 === e0 || 9 === e0 || 10 === e0 || 11 === e0 || 13 === e0 || 15 === e0 || 18 === e0 || 20 <= e0 && e0 <= 28) {
			if (0 === e0) return void aIo();
			1 === e0 ? kP = new aIp : 2 === e0 ? kP = new aIq : 3 === e0 ? kP = new aIr : 4 === e0 || 9 === e0 || 10 === e0 || 11 === e0 || 13 === e0 ? kP = a2B : 5 === e0 ? kP = new aIs : 6 === e0 ? kP = new aIt : 7 === e0 ? kP = new aIu(n.s
					.aIv) : 8 === e0 ? kP = a2B : 12 === e0 ? kP = new aIw : 14 === e0 ? kP = new aIx : 15 === e0 ? kP = new aIu(n.s.aIy) : 16 === e0 ? kP = new aIz : 17 === e0 ? kP = new aJ0 : 18 === e0 ? kP = new aJ1 : 19 === e0 ? kP =
				new aJ2 : 20 === e0 ? kP = new aJ3 : 21 === e0 ? kP = new aJ4 : 22 === e0 ? kP = new aJ5 : 23 === e0 ? kP = new aJ6 : 24 === e0 ? kP = new aJ7 : 25 === e0 ? kP = new aJ8 : 26 === e0 ? kP = new aJ9 : 27 === e0 ? kP = new aJA :
				28 === e0 ? kP = new aJB : 29 === e0 && (kP = new aJC), kP.aIn = aIn, aIk[e0] = kP
		}
		kP.show(a2B)
	}, this.zl = function() {
		this.x2() && this.aJD(this.aD0().aIn)
	}, this.aJD = function(e0) {
		this.x2() && (aIk[e0] ? (this.qx(), bb.dc = !0, this.ro = e0, aIk[e0].show()) : this.o(e0))
	}, this.qx = function() {
		this.x2() && aIk[this.ro].qx()
	}, this.r = function() {
		this.x2() && (aIk[this.ro].qx(), aIo(), this.ro = 0, u.v.setState(13))
	}, this.tM = function() {
		var kP;
		this.x2() && (kP = aIk[this.ro]).tM && kP.tM()
	}, this.resize = function() {
		if (!this.x2()) return !1;
		aIk[this.ro].resize()
	}, this.gm = function(ef, eh) {
		var kP;
		this.x2() && (kP = aIk[this.ro]).gm && kP.gm(ef, eh)
	}, this.zy = function(ef, eh) {
		var kP;
		this.x2() && (kP = aIk[this.ro]).zy && kP.zy(ef, eh)
	}, this.a0M = function() {
		var kP;
		this.x2() && (kP = aIk[this.ro]).a0M && kP.a0M()
	}, this.a01 = function(kk, kl, deltaY) {
		var kP;
		this.x2() && (kP = aIk[this.ro]).a01 && kP.a01(kk, kl, deltaY)
	}, this.a0W = function(code) {
		var kP;
		return !!this.x2() && ((kP = aIk[this.ro]).a0W && kP.a0W(code), !0)
	}, this.iS = function() {
		var kP;
		this.x2() && (kP = aIk[this.ro]) && kP.iS && kP.iS()
	}, this.x2 = function() {
		return 0 < this.ro
	}, this.aD0 = function() {
		return aIk[this.ro]
	}, this.aBG = function(e0) {
		return aIk[e0]
	}, this.aJE = function() {
		return aIk
	}
}

function aIu(data) {
	var aJF, aJG;
	this.show = function() {
		data.aJH && bE.aJv("account", data.qn), aJF.show(), this.resize()
	}, this.qx = function() {
		aJF.qx()
	}, this.resize = function() {
		aJF.resize(), aJG.resize()
	}, this.a0W = function(et) {
		2 === et && aJF.tE[0].pi()
	}, aJF = new t7(data.username, [new q("⬅️ " + L(23), function() {
		bE.clear(), n.zl()
	}), new q(data.aJH ? "🔄 " + L(139) : L(140), function() {
		n.o(8, n.aD0().aIn, new rp(25, {
			rq: 0,
			qn: data.qn,
			rn: data.rn
		}))
	}, 0, 0, 1)]), aJG = new pI(aJF.tD, function() {
		var pK = [];
		pK.push(function() {
				var aJW = new p2,
					qE = (aJW.p5(L(178)), new qF({
						value: data.username,
						e0: -1
					}));
				qE.e.readOnly = !0, aJW.pG(qE), aJW.pG(new rB([new q(L(151), function(e) {
					return b6.pP.a1i(qE.e), b6.pP.a1j(e), !0
				}).button])), data.aJH || aJW.p7(L(179));
				return aJW
			}()),
			function(pK) {
				var aJW, p8, a9s, aJn, aJc;
				data.aJH || ((aJW = new p2).p5(L(180)), (p8 = aJW.p7(data.aJm.length + " / 160")).style.textAlign = "center", a9s = !0, (aJn = new tS(0, 1, function(e) {
					e = e.target.value.length;
					p8.textContent = e + " / 160", 160 < e ? a9s && (a9s = !1, aJc.pl(1), aJc.button.style.color = b7.mY) : a9s || (a9s = !0, aJc.pl(0), aJc.button.style.color = b7.nR)
				})).e.rows = 6, aJn.e.style.fontSize = "1em", aJn.tZ(data.aJm), aJW.pG(aJn), aJc = new q(L(181), function() {
					if (!a9s) return !0;
					n.o(8, n.aD0().aIn, new rp(29, {
						rq: 1,
						p6: aJn.ta().substring(0, 160)
					}))
				}, 0, 0, 1), aJW.pG(new rB([aJc.button])), 0 !== data.aJo && (aJW.pG(new rB([new q(L(1 === data.aJo ? 183 : 184), function() {
					n.o(8, n.aD0().aIn, new rp(29, {
						rq: 0,
						p6: ""
					}))
				}, 0, 0, 1).button])), aJW.p7(1 === data.aJo ? L(185, [data.aJq - 1]) : L(186, [data.aJq - 1]))), aJW.p7(L(182, [data.aJp])), pK.push(aJW))
			}(pK),
			function(pK) {
				var aJW;
				data.aJH && 0 !== data.aJo && ((aJW = new p2).p5(L(180)), aJW.p9(data.aJm), aJW.pG(new rB([new q(L(187), function(e) {
					return aw.s.aC7(0) && (b6.pP.a1j(e), aw.aJa.aJl({
						rq: 5,
						qn: data.qn,
						rn: data.rn
					})), !0
				}, 0, 0, 1).button])), pK.push(aJW))
			}(pK), pK.push(function() {
				var aJW = new p2;
				aJW.p5(L(141)), aJW.pB(L(142) + b6.z3.a2Q(data.uL, .01, 2)), data.aJH || (aJW.p7(L(143)), aJW.p7(L(144)), aJW.p7(L(145)));
				return aJW
			}()), data.aJH && pK.push(function() {
				var aJW = new p2,
					qE = (aJW.p5(L(146)), new qF(bf.dp.data[147], 1, void 0, function(e) {
						aJX(e.target.value)
					})),
					aJY = (aJW.pG(qE), new q(L(14), function(e) {
						return qE.e.readOnly && aw.s.aC7(0) && (b6.pP.a1j(e), aJZ(), aw.aJa.aJb({
							rq: 0,
							qn: data.qn,
							rn: data.rn,
							value: bH.ow(Math.floor(100 * bf.dp.data[147].value), 0, 4294967295)
						})), !0
					}, 1)),
					aJc = new q(L(147), function(e) {
						return e.textContent === L(147) ? (e.textContent = L(148), qE.e.readOnly = !0, aJY.pl(0), aJY.button.style.color = b7.nR, bf.r8.r9(147, qE.e.value), aJX(bf.dp.data[147].value)) : aJZ(), !0
					}),
					p8 = (aJW.pG(new rB([aJc.button])), aJW.p7()),
					aJX = function(f0) {
						f0 = isNaN(f0) ? 0 : Number(f0);
						var f0 = Math.max(f0, (data.aJd + 1) / 100),
							aJe = Math.floor(100 * Math.max(1e-4 * f0, data.aJd / 100)) / 100;
						p8.textContent = L(149, [f0.toFixed(2), bf.dp.data[105].value, aJe.toFixed(2), data.qn, (f0 - aJe).toFixed(2)])
					},
					aJZ = function() {
						aJc.button.textContent = L(147), qE.e.readOnly = !1, aJY.pl(1), aJY.button.style.color = b7.mY
					};
				return aJX(bf.dp.data[147].value), aJW.pG(new rB([aJY.button])), aJW
			}());
		pK.push(function() {
			var aJW = new p2,
				qE = (aJW.p5(L(150)), new qF({
					value: data.qn,
					e0: -1
				}));
			return qE.e.readOnly = !0, aJW.pG(qE), aJW.pG(new rB([new q(L(151), function(e) {
				return b6.pP.a1i(qE.e), b6.pP.a1j(e), !0
			}).button])), aJW
		}()), data.aJH || (pK.push(function() {
			var aJW = new p2,
				aJf = (aJW.p5(L(152)), new qF(bf.dp.data[106]));
			return aJf.e.readOnly = !0, aJf.e.type = "password", aJW.pG(aJf), aJW.pG(new rB([new q(L(153), function(e) {
				return e.textContent === L(153) ? (e.textContent = L(154), aJf.e.type = "text") : (e.textContent = L(153), aJf.e.type = "password"), !0
			}).button, new q(L(151), function(e) {
				return b6.pP.a1i(aJf.e), b6.pP.a1j(e), !0
			}).button])), aJW.pG(new rB([new q(L(155), function() {
				n.o(8, n.aD0().aIn, new rp(15))
			}).button])), aJW.p5(L(156), "0.8em"), aJW.p7(L(157)), aJW.p7(L(158)), aJW.p7(L(159)), aJW
		}()), pK.push(function() {
			var aJW = new p2;
			return aJW.p5(L(160)), aJW.pG(new rB([new q(L(161), function() {
				n.o(6, n.aD0().aIn)
			}).button])), aJW.pG(new rB([new q(L(162), function() {
				bf.r8.r9(105, ""), n.o(8, n.aD0().aIn, new rp(18))
			}).button])), aJW.pG(new rB([new q(L(163) + bf.dp.data[105].value, function() {
				n.o(4, 0, new p(L(164), L(165), !0, [new q("⬅️ " + L(23), function() {
					n.o(7, n.aBG(7).aIn)
				})]))
			}, b7.nC).button])), aJW
		}()), pK.push(function() {
			function aJh(e0) {
				for (var a7 = 0; a7 < 2; a7++) aJg[a7].pl(0 === e0 ? b7.mk : 0 === a7 ? b7.nC : b7.mv)
			}
			var pE, aJg, aJW = new p2;
			aJW.p5(L(166)), aJW.p7(L(167)), bf.s.u5();
			return aJg = [new q(L(168), function() {
				var e0 = Math.min(bf.dp.data[117].value, pE.pF.length - 1);
				if (!(e0 < 1)) {
					pE.pF[e0].remove(), pE.pF.splice(e0, 1);
					for (var a7 = e0; a7 < pE.pF.length; a7++) pE.pF[a7].name = "" + a7;
					bf.s.u8(e0), e0 = bf.dp.data[117].value, pE.pF[e0].textContent = pE.pF[e0].textContent.replace("⚪", "🟢"), aJh(e0)
				}
			}, b7.mk), new q(L(169), function() {
				var e0 = Math.min(bf.dp.data[117].value, pE.pF.length - 1);
				e0 < 1 || (e0 = bf.s.u9(e0), bf.r8.r9(105, e0.qn), bf.r8.r9(106, e0.password), n.o(8, n.aD0().aIn, new rp(18)))
			}, b7.mk)], (pE = new t2(bf.dp.data[117], aJh)).pF[0].style.marginTop = "0.5em", aJW.pD(pE), aJW.pG(new rB([aJg[1].button])), aJW.pG(new rB([aJg[0].button])), aJW
		}()));
		return pK.push(function() {
				var aJW = new p2;
				return aJW.p5(L(170)), aJW.pB(L(171) + b6.z3.a2Q(data.uH, .1, 1) + "<br>" + L(172) + (data.uI + 1) + " / " + data.uK + "<br>" + L(173) + data.uJ), aJW
			}()),
			function(pK) {
				var aJW = new p2,
					zA = data.uO,
					aJr = (aJW.p5(L(188)), aJW.pB(L(189) + (zA ? "[" + data.uM + "]" : "-")), aJW.pB(L(190) + b6.z3.a2Q(zA, .001, 2)), aJW.pB(L(172) + (data.uQ + 1) + " / " + data.uK), data.uR),
					aJs = (aJW.pB(L(191) + b6.z3.a2Q(aJr, .01, 2)), data.uT);
				aJW.pB(L(192) + aJs), aJW.pB(L(193) + b6.z3.a2Q(aJr / Math.max(aJs, 1), .01, 2)), zA = data.uP, aJW.p5(L(194), "0.8em"), aJW.pB("Clan: " + (zA ? "[" + data.uN + "]" : "-")), aJW.pB(L(190) + b6.z3.a2Q(zA, .001, 2)), aJr = data
					.uS, aJW.pB(L(191) + b6.z3.a2Q(aJr, .01, 2)), aJs = data.uU, aJW.pB(L(192) + aJs), aJW.pB(L(193) + b6.z3.a2Q(aJr / Math.max(aJs, 1), .01, 2)), pK.push(aJW)
			}(pK),
			function(pK) {
				var aJW = new p2;
				aJW.p5(L(195)), aJW.pB(L(196) + data.aJt + "<br>" + L(176) + (data.aJu.length ? L(197, [data.aJu]) : L(198))), data.aJH && (aJW.pG(new rB([new q(L(199), function(e) {
					return aw.s.aC7(0) && (b6.pP.a1j(e), aw.aJa.aJl({
						rq: 4,
						qn: data.qn,
						rn: data.rn
					})), !0
				}, 0, 0, 1).button])), aJW.p7(L(200)), aJW.p7(L(201)));
				pK.push(aJW)
			}(pK), pK.push(function() {
				var aJW = new p2;
				if (aJW.p5(L(174)), aJW.pB(L(175) + data.aJi + "<br>" + L(172) + (data.aJj + 1) + " / " + data.uK + "<br>" + L(176) + bl.e2(data.aJj)), data.aJH) {
					var qE = new qF(bf.dp.data[157], 1, void 0, function(e) {
							aJX(e.target.value)
						}),
						aJc = (qE.e.style.marginTop = "0.6em", aJW.pG(qE), new q(L(147), function(e) {
							return e.textContent === L(147) ? (e.textContent = L(148), qE.e.readOnly = !0, aJk[0].pl(0), aJk[1].pl(0), aJk[0].button.style.color = b7.nR, aJk[1].button.style.color = b7.nR, bf.r8.r9(157, qE.e
								.value), aJX(bf.dp.data[157].value)) : aJZ(), !0
						})),
						aJk = (aJW.pG(new rB([aJc.button])), [new q("−", function(e) {
							return qE.e.readOnly && aw.s.aC7(0) && (b6.pP.a1j(e), aJZ(), aw.aJa.aJl({
								rq: 7,
								qn: data.qn,
								rn: bH.ow(bf.dp.data[157].value, 2, 32767)
							})), !0
						}, 1), new q("+", function(e) {
							return qE.e.readOnly && aw.s.aC7(0) && (b6.pP.a1j(e), aJZ(), aw.aJa.aJl({
								rq: 6,
								qn: data.qn,
								rn: bH.ow(bf.dp.data[157].value, 2, 32767)
							})), !0
						}, 1)]),
						p8 = aJW.p7(),
						aJX = function(f0) {
							f0 = isNaN(f0) ? 0 : Number(f0), f0 = Math.floor(bH.ow(f0, 3, 32767)), p8.textContent = L(177, [f0 - 1, f0, bf.dp.data[105].value])
						};
					aJW.pG(new rB([aJk[0].button, aJk[1].button]));
					for (var a7 = 0; a7 < 2; a7++) aJk[a7].button.style.fontSize = "1.6em";
					var aJZ = function() {
						aJc.button.textContent = L(147), qE.e.readOnly = !1, aJk[0].pl(1), aJk[1].pl(1), aJk[0].button.style.color = b7.mY, aJk[1].button.style.color = b7.mY
					};
					aJX(bf.dp.data[157].value)
				}
				return aJW
			}()), pK
	}())
}

function aJ5() {
	var aJw, aJx, aJy, pK;

	function aJz() {
		aK1(), 2 !== a9.data.aIncomeType && (a9.data.aIncomeData = null), n.aJE()[19] = null, n.zl()
	}

	function aK1() {
		2 === a9.data.aIncomeType ? (b6.pZ.a19(aJy.ta(), a9.data.aIncomeData, 255), b6.pZ.max(a9.data.aIncomeData) || (a9.data.aIncomeType = 0)) : 1 !== a9.data.aIncomeType || a9.data.aIncomeValue || (a9.data.aIncomeType = 0)
	}
	this.show = function() {
		aJw.show(), this.resize()
	}, this.qx = function() {
		aJw.qx()
	}, this.resize = function() {
		aJw.resize(), aJx.resize()
	}, this.a0W = function(et) {
		2 === et && aJw.tE[0].pi()
	}, aJw = new t7(L(202), [new q("⬅️ " + L(23), aJz)]), aJx = new pI(aJw.tD, (function(pK) {
		var aJW = new p2;
		aJW.p5(L(203)), aJW.pD(new t2({
			t6: [L(204), L(205), L(206)],
			value: a9.data.aIncomeType
		}, function(e0) {
			aK1(), 2 !== e0 || a9.data.aIncomeData || (a9.data.aIncomeData = new Uint8Array(a9.eV)), a9.data.aIncomeType = e0, n.o(22)
		})), pK.push(aJW)
	}(pK = []), function(pK) {
		var aJW;
		1 === a9.data.aIncomeType && ((aJW = new p2).p5("Value"), aJW.pG(new qF({
			e0: -1,
			value: a9.data.aIncomeValue
		}, 1, 0, function(e) {
			var value = bH.ow(Math.floor(e.target.value), 0, 255);
			e.target.value = a9.data.aIncomeValue = value
		})), pK.push(aJW))
	}(pK), function(pK) {
		var aJW;
		2 === a9.data.aIncomeType && ((aJW = new p2).p5("Data"), (aJy = new tS(0, 1, 0, 1)).tZ(b6.z3.a2W(a9.data.aIncomeData, 4)), aJW.pG(aJy), pK.push(aJW))
	}(pK), pK))
}

function aJ8() {
	var aJw, aJx, aJy;

	function aJz() {
		aK1(), 3 !== a9.data.botDifficultyType || b6.pZ.a0x(a9.data.botDifficultyData) || (a9.data.botDifficultyType = 0), 3 !== a9.data.botDifficultyType && (a9.data.botDifficultyData = null), n.aJE()[19] = null, n.zl()
	}

	function aK1() {
		3 === a9.data.botDifficultyType && b6.pZ.a19(aJy.ta(), a9.data.botDifficultyData, aA.js.length - 1)
	}

	function aK6(pK, e0) {
		var aJW = new p2,
			value = (aJW.p5(e0 < 0 ? L(48) : L(47) + " " + bc.yp[e0 % 9]), 0 <= e0 && (aJW.pB(L(209) + ": " + a9.data.teamPlayerCount[e0]).style.marginBottom = "1em"), e0 < 0 ? a9.data.botDifficultyValue : a9.data.botDifficultyTeam[e0]);
		aJW.pD(new t2({
			t6: aA.js,
			value: value
		}, function(k3) {
			e0 < 0 ? a9.data.botDifficultyValue = k3 : a9.data.botDifficultyTeam[e0] = k3
		})), pK.push(aJW)
	}
	this.show = function() {
		aJw.show(), this.resize()
	}, this.qx = function() {
		aJw.qx()
	}, this.resize = function() {
		aJw.resize(), aJx.resize()
	}, this.a0W = function(et) {
		2 === et && aJw.tE[0].pi()
	}, aJw = new t7(L(48), [new q("⬅️ " + L(23), aJz)]), aJx = new pI(aJw.tD, function() {
		var pK = [];
		if (function(pK) {
				var aJW = new p2,
					t6 = (aJW.p5(L(203)), [L(205), L(207), L(208), L(206)]),
					value = a9.data.botDifficultyType;
				0 === a9.data.gameMode && (value = Math.min(value, 2), t6.splice(2, 1));
				aJW.pD(new t2({
					t6: t6,
					value: value
				}, function(e0) {
					aK1(), a9.data.botDifficultyType = e0, 0 === a9.data.gameMode && 2 === e0 && (a9.data.botDifficultyType = 3), 3 !== a9.data.botDifficultyType || a9.data.botDifficultyData || (a9.data.botDifficultyData =
						new Uint8Array(a9.eV)), 2 !== a9.data.botDifficultyType || a9.data.botDifficultyTeam || (a9.data.botDifficultyTeam = new Uint8Array(9)), n.o(25)
				})), pK.push(aJW)
			}(pK), 0 === a9.data.botDifficultyType) aK6(pK, -1);
		else if (2 === a9.data.botDifficultyType)
			for (var a7 = 0; a7 < a9.data.teamPlayerCount.length; a7++) a9.data.teamPlayerCount[a7] && aK6(pK, a7);
		else 3 === a9.data.botDifficultyType && ! function(pK) {
			var aJW = new p2;
			aJW.p5("Data"), (aJy = new tS(0, 1, 0, 1)).tZ(b6.z3.a2W(a9.data.botDifficultyData, 8)), aJW.pG(aJy), pK.push(aJW)
		}(pK);
		return pK
	}())
}

function aK7(data) {
	var aJF, aK8, aK9, aKA, aKB, aKC, aKD, colors, aKE, aKF, aKG = 0,
		aKH = 0,
		aKI = !1,
		aKJ = !1,
		aKK = [1, 5, 60, 240, 1440, 10080, 43200];

	function aKm(kk, kl) {
		! function(kk, kl) {
			return aK8 < kk && kk < aK8 + aKA && aK9 < kl && kl < aK9 + aKB
		}(aKG = kk, aKH = kl) ? (aKI && (bb.dc = !0), aKI = !1) : (aKI = !0, bb.dc = !0)
	}
	this.show = function() {
		aKJ = bf.dp.data[127].value, aJF.show(), this.resize()
	}, this.qx = function() {
		aJF.qx()
	}, this.resize = function() {
		aJF.resize();
		var et = at.pV,
			tL = aJF.tI(),
			aKT = et * tL.tK,
			et = et * tL.r0;
		aKC = b6.pP.s9(.06), aKD = b6.pP.s9(.04), aK8 = b6.pP.s9(.06), aK9 = et + aKC, aKA = at.a1 - aK8 - aKD, aKB = aKT + et - aK9 - aKD
	}, this.tM = function() {
		aJF.tM(),
			function() {
				var a7, aKQ, g1, ef, er, g = data.data,
					aKX = 1,
					aKY = .125,
					aKZ = aKJ ? 65536 : 0;
				for (a7 = 0; a7 < g.length; a7++)
					for (aKQ = g[a7].aKQ, g1 = aKQ.length, aKX = Math.max(g1, aKX), er = 0; er < g1; er++) aKY = Math.max(aKQ[er], aKY), aKZ = Math.min(aKQ[er], aKZ);
				var lz = aK9 + aKB,
					wX = aKB / (aKY - aKZ),
					wW = 1 / (aKX - 1);
				for (tN.lineWidth = bY.xU, a7 = 0; a7 < g.length; a7++) {
					for (aKQ = g[a7].aKQ, g1 = aKQ.length, ef = aK8, tN.beginPath(), tN.moveTo(ef + aKA, lz - wX * (aKQ[g1 - 1] - aKZ)), er = g1 - 2; 0 <= er; er--) tN.lineTo(ef + wW * er * aKA, lz - wX * (aKQ[er] - aKZ));
					tN.strokeStyle = colors[a7], tN.stroke()
				}(function(aKZ, aKY, lz, wX) {
					tN.font = b6.pP.rR(0, .25 * aK8), b6.pP.textBaseline(tN, 1), b6.pP.textAlign(tN, 2), tN.fillStyle = colors[0];
					for (var ef = .92 * aK8, a7 = 0; a7 < 3; a7++) {
						var f0 = aKZ + a7 * (aKY - aKZ) / 2;
						tN.fillText((f0 / 1e3).toFixed(3), ef, lz - wX * (f0 - aKZ))
					}
				})(aKZ, aKY, lz, wX),
				function(aKX) {
					var eh = aK9 + aKB + .15 * aKD;
					tN.font = b6.pP.rR(0, Math.min(.4 * aKD, .028 * at.a1)), b6.pP.textBaseline(tN, 0), b6.pP.textAlign(tN, 2), tN.fillStyle = colors[0], tN.fillText(b6.a0o.a1Y(aKE), aK8 + aKA, eh), b6.pP.textAlign(tN, 0), tN.fillText(b6.a0o.a1Y(
						new Date(aKF.getTime() - 6e4 * (aKX - 1) * aKK[data.aKP])), aK8, eh)
				}(aKX),
				function(aKX, aKZ, aKY) {
					if (aKI && !(aKX < 2)) {
						for (var a6S, e0 = (aKG - aK8) / aKA * (aKX - 1), kx = Math.floor(e0), ky = Math.floor(1 + e0), aKc = e0 - kx, aKd = 1e5, aKe = -1, aKf = -1, aKg = aKY - (aKY - aKZ) * (aKH - aK9) / aKB, g = data.data, a7 = 0; a7 < g
							.length; a7++) {
							var aHQ, aKQ = g[a7].aKQ;
							aKQ.length <= ky || (aKQ = aKQ[kx] + aKc * (aKQ[ky] - aKQ[kx]), (aHQ = Math.abs(aKg - aKQ)) < aKd && (aKd = aHQ, aKe = a7, aKf = aKQ))
						} - 1 !== aKe && (aKY = aK9 + aKB - (aKf - aKZ) / (aKY - aKZ) * aKB, tN.lineWidth = .5 * bY.xU, tN.strokeStyle = colors[aKe], tN.beginPath(), tN.moveTo(aK8, aKY), tN.lineTo(aKG, aKY), tN.lineTo(aKG, aK9 + aKB), tN
						.stroke(), tN.beginPath(), tN.arc(aKG, aKY, .1 * aK8, 0, 2 * Math.PI), tN.fillStyle = colors[aKe], tN.fill(), aKZ = aK9 + aKB + .15 * aKD, b6.pP.textAlign(tN, 1), a6S = aKX - 2 < e0 ? (a6S = aKF.getTime() - 6e4 * aKK[
								data.aKP], new Date(a6S + (e0 - (aKX - 2)) * (aKE.getTime() - a6S))) : new Date(aKF.getTime() - 6e4 * (aKX - e0 - 1) * aKK[data.aKP]), aKX = b6.a0o.a1Y(a6S), e0 = b6.pP.measureText(aKX), a6S = bH.ow(aKG, aK8 +
								.5 * e0, aK8 + aKA - .5 * e0), tN.fillStyle = b6.color.mQ(70, 50, 20), tN.fillRect(a6S - .52 * e0, aK9 + aKB, 1.04 * e0, .55 * aKD), tN.fillStyle = colors[0], tN.fillText(aKX, a6S, aKZ), tN.font = b6.pP.rR(0,
								.25 * aK8), b6.pP.textBaseline(tN, 1), b6.pP.textAlign(tN, 2), a6S = .92 * aK8, aKX = (aKf / 1e3).toFixed(3), e0 = b6.pP.measureText(aKX), aKZ = a6S - 1.04 * e0, tN.fillStyle = b6.color.mQ(70, 50, 20), tN
							.fillRect(aKZ, aKY - .1625 * aK8, aK8 - aKZ, .275 * aK8), tN.fillStyle = colors[aKe], tN.fillText(aKX, a6S, aKY))
					}
				}(aKX, aKZ, aKY)
			}(), tN.lineWidth = bY.xU, tN.strokeStyle = b7.mY, tN.beginPath(), tN.moveTo(aK8, aK9), tN.lineTo(aK8, aK9 + aKB), tN.lineTo(aK8 + aKA, aK9 + aKB), tN.stroke();
		var a7, fontSize = .5 * aKC,
			g = (tN.font = b6.pP.rR(0, fontSize), b6.pP.textBaseline(tN, 1), b6.pP.textAlign(tN, 0), data.data),
			eY = g.length,
			eh = aK9 - .5 * aKC,
			p6 = "";
		for (a7 = 0; a7 < eY; a7++) p6 += g[a7].name + "  ";
		p6 = p6.trim();
		var aKj = b6.pP.measureText(p6),
			ef = .5 * (at.a1 - aKj);
		for (aKj > at.a1 && (ef = 0, tN.font = b6.pP.rR(0, at.a1 / aKj * fontSize)), a7 = 0; a7 < eY; a7++) tN.fillStyle = colors[a7], tN.fillText(g[a7].name, ef, eh), ef += b6.pP.measureText(g[a7].name + "  ")
	}, this.gm = function(kk, kl) {
		aKm(kk, kl)
	}, this.zy = function(kk, kl) {
		aKm(kk, kl)
	}, this.a0W = function(et) {
		2 === et && aJF.tE[0].pi()
	};
	var a7, dk, a1W, k3, eb = data.data,
		eY = eb.length,
		max = 1;
	for (a7 = 0; a7 < eY; a7++) max = Math.max(max, eb[a7].aKQ.length);
	for (a7 = 0; a7 < eY; a7++)
		for (; eb[a7].aKQ.length < max;) eb[a7].aKQ.unshift(0);
	dk = new Date, a1W = 6e4 * dk.getTimezoneOffset(), k3 = dk.getTime() - a1W, aKE = new Date(k3), 6 === data.aKP ? function(dk, a1W) {
		var aKS = dk.getUTCFullYear(),
			dk = dk.getUTCMonth() + 1;
		aKF = dk < 12 ? new Date(Date.UTC(aKS, dk) - a1W) : new Date(Date.UTC(aKS + 1, 0) - a1W)
	}(dk, a1W) : (a1W = 6e4 * aKK[data.aKP], aKF = data.aKP <= 4 ? new Date(k3 + a1W - dk.getTime() % a1W) : new Date(k3 + a1W - (dk.getTime() + 2592e5) % a1W)), k3 = b6.color, colors = [b7.mY, k3.mQ(255, 0, 0), k3.mQ(0, 200, 0), k3.mQ(80, 80,
		255), k3.mQ(255, 255, 0), k3.mQ(255, 0, 255), k3.mQ(0, 255, 255), k3.mQ(255, 140, 0), k3.mQ(128, 128, 128), k3.mQ(0, 255, 140)], aJF = new t7(L(210) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.aKP] + ", " + b6.a0o.a1V(aKE), [
		new q("⬅️ " + L(23), function() {
			n.s.a9y()
		}), new q(L(211), function() {
			n.o(14)
		})
	], !1)
}

function aIx() {
	var aJF, aJG, pK;
	this.show = function() {
		aJF.show(), this.resize()
	}, this.qx = function() {
		aJF.qx()
	}, this.resize = function() {
		aJF.resize(), aJG.resize()
	}, this.a0W = function(et) {
		2 === et && aJF.tE[0].pi()
	}, aJF = new t7(L(212), [new q("⬅️ " + L(23), function() {
		n.aJD(13)
	})]), aJG = new pI(aJF.tD, ((pK = []).push(function() {
		var aJW = new p2,
			aJc = (aJW.p5(L(213)), aJW.p7(L(214)), new q(L(215), function() {
				bf.r8.r9(130, 0), n.s.aKr()
			}, 0, 0, 1)),
			qE = new qF(bf.dp.data[126], 0, function() {
				aJc.button.click()
			});
		return aJW.pG(qE), qE.e.placeholder = "a,b,c", qE.e.style.marginTop = "0.5em", aJW.pG(new rB([aJc.button])), aJW
	}()), pK.push(function() {
		var aJW = new p2,
			aJc = new q(L(215), function() {
				bf.r8.r9(130, 1), n.s.aKr()
			}, 0, 0, 1),
			aKs = new qF(bf.dp.data[129], 1, function() {
				aKs.e.focus()
			}),
			aKt = new qF(bf.dp.data[128], 1, function() {
				aJc.button.click()
			});
		return aJW.p5(L(216)), aJW.pG(aKt), aKt.e.style.marginBottom = "0.5em", aJW.p5(L(217)), aJW.pG(aKs), aJW.pG(new rB([aJc.button])), aJW
	}()), pK.push(function() {
		var aJW = new p2;
		return aJW.p5(L(218)), bf.dp.data[125].t6 = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], aJW.pD(new t2(bf.dp.data[125])), aJW
	}()), pK.push(function() {
		var aJW = new p2;
		return aJW.p5(L(219)), aJW.pG(new r5(bf.dp.data[127], L(220))), aJW
	}()), pK))
}

function aIw() {
	var aJF, aKu, aKA, aKv, aKw, aKx, colors = [0, 0, 0],
		aKy = -1;

	function aL1(a7) {
		var aL2 = aKu.eh + a7 * (bY.gap + aKx);
		tN.fillStyle = "rgb(" + (0 === a7 ? 150 : 2 === a7 ? 30 : 0) + "," + (1 === a7 ? 130 : 2 === a7 ? 30 : 0) + "," + (2 === a7 ? 220 : 0) + ")", tN.fillRect(aKv, aL2, colors[a7] * aKw, aKx), tN.strokeStyle = b7.mY, tN.strokeRect(aKv, aL2, aKw,
			aKx), tN.fillStyle = b7.mY, tN.font = b6.pP.rR(0, .32 * aKx), b6.pP.textBaseline(tN, 1), b6.pP.textAlign(tN, 0), tN.fillText(L(0 === a7 ? 223 : 1 === a7 ? 224 : 225) + aKz(a7), aKv + bY.gap, aL2 + .53 * aKx)
	}

	function aKz(a7, aL3) {
		return aL3 = aL3 || 256, bH.ow(Math.floor(aL3 * colors[a7]), 0, aL3 - 1)
	}

	function a0S(kk, kl) {
		return !(kk < aKv || kl < aKu.eh || kk > aKu.ef + aKu.a1 || kl > aKu.eh + aKu.j7)
	}
	this.show = function() {
		var f0 = bf.dp.data[121].value;
		colors[0] = (f0 >> 12) / 63, colors[1] = (f0 >> 6 & 63) / 63, colors[2] = (63 & f0) / 63, aJF.show(), this.resize()
	}, this.qx = function() {
		bf.r8.r9(121, (aKz(0, 64) << 12) + (aKz(1, 64) << 6) + aKz(2, 64)), aJF.qx()
	}, this.resize = function() {
		aJF.resize(), aKu.resize();
		var et = at.pV,
			tL = aJF.tI(),
			aL0 = (aKu.eh = Math.max(aKu.eh, et * tL.r0 + bY.gap), et * tL.tK - 2 * bY.gap);
		aKu.j7 = Math.min(aKu.j7, aL0), aKu.a1 = 2 * aKu.j7, aKu.eh = et * tL.r0 + .5 * (et * tL.tK - aKu.j7), aKu.ef = .5 * (at.a1 - aKu.a1), aKA = .25 * aKu.a1, aKv = aKu.ef + aKA + bY.gap, aKw = aKu.a1 - aKA - bY.gap, aKx = (aKu.j7 - 2 * bY
			.gap) / 3
	}, this.tM = function() {
		var dz, s8, es;
		aJF.tM(), tN.lineWidth = bY.xU, dz = aKz(0), s8 = aKz(1), es = aKz(2), tN.fillStyle = "rgb(" + dz + "," + s8 + "," + es + ")", tN.fillRect(aKu.ef, aKu.eh, aKA, aKu.j7), tN.strokeStyle = b7.mY, tN.strokeRect(aKu.ef, aKu.eh, aKA, aKu.j7),
			tN.fillStyle = dz + s8 + es < 306 && s8 < 150 ? b7.mY : b7.mP, b6.pP.textBaseline(tN, 1), b6.pP.textAlign(tN, 1), tN.font = b6.pP.rR(0, .1 * aKu.j7), tN.rotate(-Math.PI / 2), tN.fillText(L(222), -aKu.eh - .5 * aKu.j7, aKu.ef + .5 *
				aKA), tN.setTransform(1, 0, 0, 1, 0, 0), aL1(0), aL1(1), aL1(2)
	}, this.gm = function(kk, kl) {
		a0S(kk, kl) && (aKy = bH.ow(Math.floor((kl - aKu.eh) / (aKx + .75 * bY.gap)), 0, 2), colors[aKy] = bH.ow((kk - aKv) / aKw, 0, 1), bb.dc = !0)
	}, this.zy = function(kk) {
		-1 !== aKy && (colors[aKy] = bH.ow((kk - aKv) / aKw, 0, 1), bb.dc = !0)
	}, this.a01 = function(kk, kl, deltaY) {
		a0S(kk, kl) && (kk = bH.ow(Math.floor((kl - aKu.eh) / (aKx + .75 * bY.gap)), 0, 2), colors[kk] = bH.ow(colors[kk] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), bb.dc = !0)
	}, this.a0M = function() {
		0 <= aKy && (aKy = -1, bb.dc = !0)
	}, this.a0W = function(et) {
		2 === et && aJF.tE[0].pi()
	}, aJF = new t7(L(221), [new q("⬅️ " + L(23), function() {
		n.s.a9y()
	})], !1), aKu = new q2([.5, .25], [.5, .5], 1)
}

function aJ4() {
	var aJw, aJx, aJy, q0;

	function aJz() {
		aK1(), 1 !== a9.data.colorsType && (a9.data.colorsData = null), n.aJE()[19] = null, n.zl()
	}

	function aL4() {
		aK1(), n.o(21)
	}

	function aK1() {
		1 === a9.data.gameMode ? a9.a2n.a2r() : 0 === a9.data.gameMode && 1 === a9.data.colorsType && b6.pZ.a19(aJy.ta(), a9.data.colorsData, 262143)
	}
	this.show = function() {
		aJw.show(), this.resize()
	}, this.qx = function() {
		aJw.qx()
	}, this.resize = function() {
		aJw.resize(), aJx.resize()
	}, this.a0W = function(et) {
		2 === et && aJw.tE[0].pi()
	}, q0 = [new q("⬅️ " + L(23), aJz)], 1 === a9.data.gameMode && q0.push(new q(L(226), aL4, 1, 1)), aJw = new t7(L(227), q0), aJx = new pI(aJw.tD, (function(pK) {
		var aJW = new p2;
		aJW.p5(L(203)), 0 === a9.data.gameMode && (aJW.pD(new t2({
			t6: [L(228), L(206)],
			value: a9.data.colorsType
		}, function(e0) {
			aK1(), a9.data.colorsType = e0, 1 !== a9.data.colorsType || a9.data.colorsData && a9.data.colorsData.length === a9.eV || (a9.data.colorsData = new Uint32Array(a9.eV)), n.o(21)
		})), aJW.pG(new rL));
		aJW.pG(new r5({
			value: a9.data.selectableColor
		}, L(229), function(value) {
			a9.data.selectableColor = value
		})), pK.push(aJW)
	}(q0 = []), 0 === a9.data.gameMode ? 1 === a9.data.colorsType && function(pK) {
		var aJW = new p2;
		aJW.p5("Data"), (aJy = new tS(0, 1, 0, 1)).tZ(b6.z3.a2W(a9.data.colorsData, 1)), aJW.pG(aJy), pK.push(aJW)
	}(q0) : (a9.a2n.a2r(), q0.push(function() {
		var aJW = new p2;
		aJW.p5(L(209));
		for (var a7 = 0; a7 < bc.yp.length; a7++) {
			var k3 = (a7 + 1) % bc.yp.length,
				e = aJW.pB((0 == k3 ? "" : "Team ") + bc.yp[k3]);
			a7 && (e.style.marginTop = "0.5em"), aJW.pG(new qF({
				e0: -1,
				value: a9.data.teamPlayerCount[k3]
			}, 1, 0, function(e) {
				aJw.tE[1].pl(0);
				var playerCount = bH.ow(Math.floor(e.target.value), 0, 512);
				e.target.value = playerCount, a9.data.teamPlayerCount[e.target.aL6] = playerCount
			})).e.aL6 = k3
		}
		return aJW
	}())), q0))
}

function rp(id, a2B, aL7) {
	var aJF, aL8;

	function aLC() {
		aL8.pL.innerHTML += "<br>" + L(232)
	}

	function aLB() {
		b9.a3(48), b9.a4(24, Math.floor(bH.pow(24) * Math.random())), b9.a4(24, Math.floor(bH.pow(24) * Math.random())), bD.dU(b9.a8), bf.r8.r9(110, bB.rr.rs(bB.rr.rt(8))), aw.aJa.aLQ()
	}
	this.aL9 = !0, this.aLA = id, this.show = function() {
		aJF.show(), this.resize(), 15 === id ? (aw.s.aCD(0, id) ? aLB : aLC)() : 16 === id ? aw.s.aCD(0, id) ? aw.a9v.aLD(2) : aLC() : 17 === id ? aw.s.aCD(0, id) ? aw.a9v.aLD(3) : aLC() : 18 === id ? (aw.s.close(0, 3253), aw.s.aCD(0, id),
		aLC()) : 21 === id ? aw.s.aCD(0, id) ? aw.aLE.aLF(a2B.s4, a2B.s5, a2B.s6) : aLC() : 22 === id ? aw.s.aCD(0, id) ? aw.aLE.aLG(a2B.s4, a2B.aLH, a2B.aLI) : aLC() : 23 === id ? aw.s.aCD(0, id) ? aw.aLE.aLJ(a2B.aKP, a2B.z5) : aLC() : 24 ===
			id ? aw.s.aCD(0, id) ? aw.aLE.aLK(a2B.aKP, a2B.s5, a2B.s6) : aLC() : 25 === id ? aw.s.aCD(0, id) ? aw.aJa.aJl(a2B) : aLC() : 28 === id ? aw.s.aCD(0, id) ? aw.aLE.aLL(a2B.s4, a2B.aLH, a2B.aLI) : aLC() : 29 === id && (aw.s.aCD(0, id) ?
				aw.aJa.aLM(a2B) : aLC())
	}, this.aLN = function() {
		15 === id ? aLB() : 16 === id ? aw.a9v.aLD(2) : 17 === id ? aw.a9v.aLD(3) : 18 === id ? n.o(8, this.aIn, new rp(16)) : 21 === id ? aw.aLE.aLF(a2B.s4, a2B.s5, a2B.s6) : 22 === id ? aw.aLE.aLG(a2B.s4, a2B.aLH, a2B.aLI) : 23 === id ? aw.aLE
			.aLJ(a2B.aKP, a2B.z5) : 24 === id ? aw.aLE.aLK(a2B.aKP, a2B.s5, a2B.s6) : 25 === id ? aw.aJa.aJl(a2B) : 28 === id ? aw.aLE.aLL(a2B.s4, a2B.aLH, a2B.aLI) : 29 === id ? aw.aJa.aLM(a2B) : 1e3 === id && (this.aLA = id = 25, aw.aJa.aJl(
				a2B))
	}, this.aLO = function(code, bo, data) {
		!bo && code !== id || (16 === code ? n.o(7, this.aIn) : 17 === code ? (aw.s.close(0, 3252), bf.s.u8(0), bf.dp.data[117].t6 && 0 < bf.dp.data[117].t6.length ? (bo = bf.s.u9(0), bf.r8.r9(105, bo.qn), bf.r8.r9(106, bo.password), n.o(8, this
			.aIn, new rp(16))) : (bf.r8.r9(105, ""), n.s.a9y())) : 21 === code ? n.o(10, this.aIn, new aLP(data)) : 23 === code ? n.o(13, 0, new aK7({
			data: data,
			aKP: a2B.aKP
		})) : 25 === code && (n.s.aIy.qn = a2B.qn, n.o(15, this.aIn)))
	}, this.qx = function() {
		aJF.qx()
	}, this.resize = function() {
		aJF.resize(), aL8.resize()
	}, this.a0W = function(et) {
		2 === et && aJF.tE[0].pi()
	}, aJF = new t7(L(230), [new q("⬅️ " + L(23), function() {
		aL7 ? n.o(29) : n.s.a9y()
	})]), aL8 = new rA(aJF.tD, L(231))
}

function aJ2() {
	var aJw, aJx, pK;

	function aLT() {
		var g1;
		1 === a9.data.gameMode ? (a9.data.teamPlayerCount || (a9.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), a9.a2n.a2r()), g1 = b6.pZ.a13(a9.data.teamPlayerCount, 0), a9.data.numberTeams = g1) : (2 === a9.data
			.botDifficultyType && (a9.data.botDifficultyType = 0), 1 === a9.data.spawningType && (a9.data.spawningType = 0))
	}

	function aJz() {
		1 !== a9.data.gameMode && (a9.data.teamPlayerCount = null), aLV(), a9.data.canvas = null, n.o(5, 5)
	}

	function aLV() {
		b5.od.dU(), bf.r8.r9(156, b5.a33.xw())
	}

	function aLR() {
		a9.data.isReplay = 0, aLV(), a9.a2n.a3D(), aW.aCP(), a9.a2n.a3A(), a9.data.canvas = 2 === a9.data.mapType ? bO.v5 : null, a9.a2q(), a9.a2p = 1
	}

	function aLj() {
		aLT();
		for (var g = [aLY(), aLZ(), aLa()], a7 = 3; a7 < 6; a7++) aJx.pL.removeChild(aJx.pM[a7].p4), aJx.pM[a7] = g[a7 - 3], aJx.pL.appendChild(aJx.pM[a7].p4);
		aJx.resize()
	}

	function aLY() {
		var aLk, aJW = new p2;
		return aJW.p5(L(227)), aLk = 0 === a9.data.gameMode ? [L(228), L(206)][a9.data.colorsType] : a9.data.numberTeams + " Team" + (1 === a9.data.numberTeams ? "" : "s"), aJW.pB(aLk), aJW.pG(new rB([new q(L(236), function() {
			n.o(21)
		}).button])), aJW
	}

	function aLZ() {
		var aJW = new p2,
			g = (aJW.p5(L(48)), [L(205) + ": " + aA.js[a9.data.botDifficultyValue], L(207), L(208), L(206)]);
		return aJW.pB(g[a9.data.botDifficultyType]), aJW.pG(new rB([new q(L(236), function() {
			n.o(25)
		}).button])), aJW
	}

	function aLa() {
		var aJW = new p2,
			g = (aJW.p5("Spawning"), [L(228), L(238), L(206)]);
		return aJW.pB(g[a9.data.spawningType]), aJW.pG(new rB([new q(L(236), function() {
			n.o(24)
		}).button])), aJW
	}
	this.show = function() {
		aJw.show(), this.resize(), aJw.tD.scrollTop = n.s.aEL[0]
	}, this.qx = function() {
		n.s.aEL[0] = aJw.tD.scrollTop, aJw.qx()
	}, this.resize = function() {
		aJw.resize(), aJx.resize()
	}, this.a0W = function(et) {
		2 === et && aJw.tE[0].pi()
	}, aJw = new t7("🔧 " + L(233), [new q("⬅️ " + L(23), aJz), new q(L(234), aLR)]), aLT(), a9.data.canvas || (2 === a9.data.mapType ? a9.data.canvas = bO.v5 : 1 === a9.data.mapType ? a9.data.canvas = bO.aGq(bO.a3B(a9.data), 0).v5 : (a9.data
		.mapType = 0, a9.data.passableWater = a9.data.passableMountains = 1, a9.data.canvas = bO.aGq(bO.a3B(a9.data), a9.data.mapSeed).v5)), aJx = new pI(aJw.tD, (function(pK) {
		var aJW = new p2,
			a1G = (aJW.p5(L(235)), a9.data.canvas);
		a1G.style.width = "100%", aJW.pG({
			e: a1G
		}), aJW.pG(new rB([new q(L(236), function() {
			n.o(20)
		}).button])), pK.push(aJW)
	}(pK = []), function(pK) {
		var aJW = new p2;
		aJW.p5(L(209)), aJW.pG(new qF({
			e0: -1,
			value: a9.data.playerCount
		}, 1, 0, function(e) {
			var playerCount = bH.ow(Math.floor(e.target.value), 1, 512);
			e.target.value = a9.data.playerCount = playerCount, 1 === a9.data.gameMode && (e = b6.pZ.a13(a9.data.teamPlayerCount, 0), a9.a2n.a2r(), b6.pZ.a13(a9.data.teamPlayerCount, 0) !== e) && aLj()
		})), pK.push(aJW)
	}(pK), function(pK) {
		var aJW = new p2;
		aJW.p5(L(237)), aJW.pD(new t2({
			t6: ["Battle Royale", "Teams"],
			value: a9.data.gameMode
		}, function(e0) {
			a9.data.gameMode !== e0 && (a9.data.gameMode = e0, aLj())
		})), pK.push(aJW)
	}(pK), pK.push(aLY()), pK.push(aLZ()), pK.push(aLa()), function(pK) {
		var aJW = new p2,
			g = (aJW.p5(L(239)), [L(240), L(241), L(206)]);
		aJW.pB(g[a9.data.playerNamesType]), aJW.pG(new rB([new q(L(236), function() {
			n.o(23)
		}).button])), pK.push(aJW)
	}(pK), function(pK) {
		var aJW = new p2,
			g = (aJW.p5(L(202)), [L(204), L(205) + ": " + a9.data.aIncomeValue, L(206)]);
		aJW.pB(g[a9.data.aIncomeType]), aJW.pG(new rB([new q(L(236), function() {
			n.o(22)
		}).button])), pK.push(aJW)
	}(pK), function(pK) {
		var aJW = new p2,
			g = (aJW.p5(L(242)), [L(204), L(205) + ": " + a9.data.tIncomeValue, L(206)]);
		aJW.pB(g[a9.data.tIncomeType]), aJW.pG(new rB([new q(L(236), function() {
			n.o(26)
		}).button])), pK.push(aJW)
	}(pK), function(pK) {
		var aJW = new p2,
			g = (aJW.p5(L(243)), [L(204), L(205) + ": " + a9.data.iIncomeValue, L(206)]);
		aJW.pB(g[a9.data.iIncomeType]), aJW.pG(new rB([new q(L(236), function() {
			n.o(27)
		}).button])), pK.push(aJW)
	}(pK), function(pK) {
		var aJW = new p2,
			g = (aJW.p5(L(244)), [L(204), L(205) + ": " + a9.data.sResourcesValue, L(206)]);
		aJW.pB(g[a9.data.sResourcesType]), aJW.pG(new rB([new q(L(236), function() {
			n.o(28)
		}).button])), pK.push(aJW)
	}(pK), function(pK) {
		var aJW = new p2;
		aJW.p5(L(245)), aJW.pG(new rB([new q(L(246), function() {
			n.r(), a9.a2n.a3E(), n.s.aEL[0] = 0, n.o(19)
		}).button])), aJW.pG(new rB([new q(L(247), function() {
			bj.aEA()
		}).button])), aJW.pG(new rB([new q(L(248), function() {
			return bj.aEC(), !0
		}).button])), pK.push(aJW)
	}(pK), pK))
}

function aJA() {
	var aJw, aJx, aJy, pK;

	function aJz() {
		aK1(), 2 !== a9.data.iIncomeType && (a9.data.iIncomeData = null), n.aJE()[19] = null, n.zl()
	}

	function aK1() {
		2 === a9.data.iIncomeType && b6.pZ.a19(aJy.ta(), a9.data.iIncomeData, 255)
	}
	this.show = function() {
		aJw.show(), this.resize()
	}, this.qx = function() {
		aJw.qx()
	}, this.resize = function() {
		aJw.resize(), aJx.resize()
	}, this.a0W = function(et) {
		2 === et && aJw.tE[0].pi()
	}, aJw = new t7(L(243), [new q("⬅️ " + L(23), aJz)]), aJx = new pI(aJw.tD, (function(pK) {
		var aJW = new p2;
		aJW.p5(L(203)), aJW.pD(new t2({
			t6: [L(204), L(205), L(206)],
			value: a9.data.iIncomeType
		}, function(e0) {
			aK1(), 2 !== e0 || a9.data.iIncomeData || (a9.data.iIncomeData = new Uint8Array(a9.eV), a9.data.iIncomeData.fill(32)), a9.data.iIncomeType = e0, n.o(27)
		})), pK.push(aJW)
	}(pK = []), function(pK) {
		var aJW;
		1 === a9.data.iIncomeType && ((aJW = new p2).p5("Value"), aJW.pG(new qF({
			e0: -1,
			value: a9.data.iIncomeValue
		}, 1, 0, function(e) {
			var value = bH.ow(Math.floor(e.target.value), 0, 255);
			e.target.value = a9.data.iIncomeValue = value
		})), pK.push(aJW))
	}(pK), function(pK) {
		var aJW;
		2 === a9.data.iIncomeType && ((aJW = new p2).p5("Data"), (aJy = new tS(0, 1, 0, 1)).tZ(b6.z3.a2W(a9.data.iIncomeData, 4)), aJW.pG(aJy), pK.push(aJW))
	}(pK), pK))
}

function aIs() {
	var aLl, aLm, aKu, qE, aLn;
	this.aD1 = new rx, aKu = new q2([.45, .27], [.5, .5], 2 / 3), aLm = [new q("⚔️<br>" + L(249), function() {
			aLo(0)
		}, b7.n1), new q("🗡️<br>" + L(233), function() {
			aLo(1)
		}, b7.nG), new q("🔑<br>" + L(250), function() {
			aLo(2)
		}, b7.nW), new q("☰<br>" + L(251), function() {
			aLo(3)
		}, b7.ml), new q("", function() {
			n.o(12)
		}, b7.mU, !1),
		new q("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new q("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], qE = new qF(bf.dp.data[122]);
	for (var a7 = 0; a7 < aLm.length; a7++) aLm[a7].button.style.position = "absolute";

	function aLo(e0) {
		u.v.setState(10), aX.sC() || aX.aCr(), 0 === e0 ? n.s.aLp() : 1 === e0 ? (b5.aEV.uq(bf.dp.data[156].value, 1) || a9.a2n.a3E(), n.o(19)) : 2 === e0 ? 0 !== u.id || bf.dp.data[140].value ? n.o(8, n.ro, new rp(16)) : n.s.aLq(n.ro, 16) : 3 ===
			e0 && n.o(1)
	}
	qE.e.style.position = "absolute", qE.e.style.textAlign = "center", qE.e.placeholder = L(252), this.show = function() {
		aW.setState(0), u.v.setState(12), this.aD1.show(), aLm[4].pl(b6.color.a1N(bf.dp.data[121].value)), this.resize(), document.body.appendChild(qE.e);
		for (var a7 = 0; a7 < aLm.length; a7++) document.body.appendChild(aLm[a7].button);
		1 !== u.id || u.f1 < 5 || (aLn && bb.lo > aLn + 144e5 ? u.tt.setState(14) : aLn = bb.lo)
	}, this.qx = function() {
		this.aD1.qx(), document.body.removeChild(qE.e);
		for (var a7 = 0; a7 < aLm.length; a7++) document.body.removeChild(aLm[a7].button)
	}, this.resize = function() {
		this.aD1.resize(), aKu.resize();
		var gap = .5 * bY.gap,
			sf = 10 / 99 * .84 * aKu.a1,
			aLt = .16 * aKu.j7,
			a6z = .19 * aKu.a1,
			ef = aKu.ef + a6z,
			sf = aKu.eh + sf + 3 * gap,
			a1 = .5 * (aKu.a1 - gap) - a6z,
			a6z = aKu.a1 - 2 * a6z - aLt - gap,
			a6z = (b6.pP.sA(qE.e, ef, sf, a6z, aLt), b6.pP.sA(aLm[4].button, ef + a6z + gap, sf, aLt, aLt), .5 * (aKu.eh + aKu.j7 - (sf += aLt + gap) - gap));
		b6.pP.sA(aLm[0].button, ef, sf, a1, a6z), b6.pP.sA(aLm[1].button, ef + a1 + gap, sf, a1, a6z), b6.pP.sA(aLm[2].button, ef, sf + a6z + gap, a1, a6z), b6.pP.sA(aLm[3].button, ef + a1 + gap, sf + a6z + gap, a1, a6z);
		b6.pP.sA(aLm[5].button, ef, sf + a6z * 2 + gap * 2, a1 * 2 + gap, a6z / 3);
		b6.pP.sA(aLm[6].button, ef, sf + a6z * 2.33 + gap * 3, a1 * 2 + gap, a6z / 3);
		for (var a7 = 0; a7 < aLm.length; a7++) aLm[a7].button.style.font = b6.pP.rR(0, b6.pP.a1d(.065 * aKu.j7)), b6.pP.pb(aLm[a7].button, 5);
		qE.e.style.font = b6.pP.rR(0, b6.pP.a1d(.08 * aKu.j7)), b6.pP.pb(qE.e, 5)
	}, this.tM = function() {
		if (aW.aCT(), aP.tM(), aK.tM(), bU.tM(), aX.sC()) {
			if (__fx.settings.displayWinCounter) {
				const size = Math.floor(aKu.a1 * 0.03);
				tN.font = b6.pP.rR(1, size);
				tN.fillStyle = "#ffffff";
				const text = "Win count: " + __fx.wins.count;
				const textLength = tN.measureText(text).width;
				tN.textAlign = "left";
				tN.textBaseline = "middle";
				tN.fillText(text, tN.canvas.width - textLength - size / 2, size);
			};
			tN.imageSmoothingEnabled = !1;
			var et = aX.aCW("territorial.io"),
				mA = .84 * aKu.a1 / et.width;
			tN.setTransform(mA, 0, 0, mA, aKu.ef + .08 * aKu.a1, aKu.eh), aLl = aLl || b6.a0k.a29(et, b6.a0k.a2F, [0, 0, 0]);
			for (var ef = -1; ef <= 1; ef += 2)
				for (var eh = -1; eh <= 1; eh += 2) tN.drawImage(aLl, ef, eh);
			tN.drawImage(et, 0, 0), tN.imageSmoothingEnabled = !0;
			var hQ = aX.aCW("logo"),
				aLv = .6666 * mA * et.height / hQ.height,
				mB = .5 * at.a1,
				mC = aKu.eh + .5 * mA * et.height - .5 * aLv * hQ.height;
			tN.setTransform(aLv, 0, 0, aLv, mB - .6 * mA * et.width, mC), tN.drawImage(hQ, 0, 0), tN.setTransform(aLv, 0, 0, aLv, mB + .6 * mA * et.width - aLv * hQ.width, mC), tN.drawImage(hQ, 0, 0), tN.setTransform(1, 0, 0, 1, 0, 0), tN
				.imageSmoothingEnabled = !0
		}
	}
}

function aIz() {
	var aJF, aLw, aLx, t8;

	function s3(a7) {
		n.o(8, n.ro, new rp(21, {
			s4: a7,
			s5: 0,
			s6: 10
		}))
	}
	this.show = function() {
		aJF.show(), this.resize()
	}, this.qx = function() {
		aJF.qx()
	}, this.resize = function() {
		aJF.resize(), aLw.resize()
	}, this.a0W = function(et) {
		2 === et && aJF.tE[0].pi()
	}, aLx = [new q(L(253), function() {
		s3(1)
	}, 0, 0, 1), new q(L(254), function() {
		s3(2)
	}, 0, 0, 1), new q(L(255), function() {
		s3(0)
	}, 0, 0, 1), new q(L(256), function() {
		s3(3)
	}, 0, 0, 1)], t8 = [new q("⬅️ " + L(23), function() {
		n.zl()
	})], aJF = new t7(L(257), t8), aLw = new pz(aLx, aJF.tD)
}

function aAH(title, pC, aLy) {
	var aJF, aL8;
	this.show = function() {
		aJF.show(), this.resize()
	}, this.qx = function() {
		aJF.qx()
	}, this.resize = function() {
		aJF.resize(), aL8.resize()
	}, this.a0W = function(et) {
		2 === et && aJF.tE[0].pi()
	}, aLy = aLy || [new q("⬅️ " + L(23), function() {
		n.zl()
	}, b7.nC)], aJF = new t7(title, aLy), aL8 = new rA(aJF.tD, pC), b6.pP.textAlign(aJF.tD.style, 1)
}

function aLP(data) {
	var aJF, aLz, et, rg;

	function aM0(hU) {
		var eY = data.data.length;
		if (eY) {
			for (var s5, max = min = parseInt(data.data[0][0]), a7 = 1; a7 < eY; a7++) var aM7 = parseInt(data.data[a7][0]),
				min = Math.min(aM7, min),
				max = Math.max(aM7, max);
			s5 = hU < 0 ? min + hU : max + 1, n.o(8, n.aD0().aIn, new rp(21, {
				s4: data.s4,
				s5: s5,
				s6: s5 + Math.abs(hU)
			}))
		}
	}
	this.show = function() {
			aJF.show(), this.resize()
		}, this.qx = function() {
			aJF.qx()
		}, this.resize = function() {
			aJF.resize(), aLz.resize()
		}, this.a0W = function(et) {
			2 === et && aJF.tE[0].pi()
		}, et = data.data.length ? 0 : 1, et = [new q("⬅️ " + L(23), function() {
			n.zl()
		}), new q(L(258), function() {
			aM0(-10)
		}, et, 0, 1), new q(L(259), function() {
			aM0(10)
		}, et, 0, 1), new q(L(211), function() {
			n.o(11, 10, new aM1({
				s4: data.s4
			}))
		})], rg = [L(260), L(261), L(262), L(263), L(264), L(265), L(266), L(267), L(268)], aJF = new t7(rg[data.s4], et),
		function() {
			var a7, eb = {
					ra: []
				},
				ra = eb.ra,
				aM3 = data.data,
				eY = aM3.length,
				mA = [.1, .001, .001, 1, 100, 1, .01, 1, 100][data.s4],
				a2J = [1, 3, 3, 0, 0, 0, 2, 0, 0][data.s4],
				rg = [
					[L(269), L(270) + " ↗", L(271)],
					[L(269), L(272), L(273), L(274) + " ↗"],
					[L(269), L(270) + " ↗", L(273)],
					[L(269), L(270) + " ↗", L(273)],
					[L(275), L(276), L(277) + " ↗", L(278) + " ↗", L(105)],
					[L(275), L(276), L(279) + " ↗", L(280) + " ↗", L(281)],
					[L(275), L(276), L(282) + " ↗", L(283) + " ↗", L(284)],
					[L(275), L(276), L(279) + " ↗", L(280) + " ↗", L(285)],
					[L(275), L(276), L(277) + " ↗", L(278) + " ↗", L(105)]
				];
			if (eb.rg = rg[data.s4], eb.rk = [
					[25, 40, 35],
					[15, 25, 25, 35],
					[25, 40, 35],
					[25, 40, 35],
					[12, 16, 30, 30, 12],
					[12, 16, 30, 30, 12],
					[12, 16, 30, 30, 12],
					[12, 16, 30, 30, 12],
					[12, 16, 30, 30, 12]
				][data.s4], 0 === data.s4)
				for (a7 = 0; a7 < eY; a7++) ra.push([{
					f0: aM3[a7][0] + 1 + ".",
					dk: 0
				}, {
					f0: aM3[a7][1],
					dk: 1,
					qn: aM3[a7][4],
					rn: aM3[a7][3]
				}, {
					f0: (mA * aM3[a7][2]).toFixed(a2J),
					dk: 0
				}]);
			else if (1 === data.s4)
				for (a7 = 0; a7 < eY; a7++) ra.push([{
					f0: aM3[a7][0] + 1 + ".",
					dk: 0
				}, {
					f0: aM3[a7][1],
					dk: 0
				}, {
					f0: (mA * aM3[a7][2]).toFixed(a2J),
					dk: 0
				}, {
					f0: aM3[a7][3],
					dk: 1,
					qn: aM3[a7][5],
					rn: aM3[a7][4]
				}]);
			else if (2 === data.s4 || 3 === data.s4)
				for (a7 = 0; a7 < eY; a7++) ra.push([{
					f0: aM3[a7][0] + 1 + ".",
					dk: 0
				}, {
					f0: aM3[a7][1],
					dk: 1,
					qn: aM3[a7][4],
					rn: aM3[a7][3]
				}, {
					f0: (mA * aM3[a7][2]).toFixed(a2J),
					dk: 0
				}]);
			else if (4 === data.s4 || 5 === data.s4 || 6 === data.s4 || 7 === data.s4 || 8 === data.s4)
				for (a7 = 0; a7 < eY; a7++) {
					var aM6 = aM3[a7][5];
					4 === data.s4 || 8 === data.s4 ? "100%" === (aM6 = (aM6 % 64 * 100 / (aM6 >> 6)).toFixed(0) + "%") && (4 === data.s4 ? aM6 += " (" + L(286) + ")" : aM6 += " (" + L(287) + ")") : 5 === data.s4 ? 32768 <= aM6 && (aM6 = -(aM6 -
						32768)) : aM6 = (mA * aM6).toFixed(a2J), ra.push([{
						f0: "" + aM3[a7][0],
						dk: 0
					}, {
						f0: "" + aM3[a7][6],
						dk: 0
					}, {
						f0: aM3[a7][7],
						dk: 1,
						qn: aM3[a7][1],
						rn: aM3[a7][2]
					}, {
						f0: aM3[a7][8],
						dk: 1,
						qn: aM3[a7][3],
						rn: aM3[a7][4]
					}, {
						f0: "" + aM6,
						dk: 0
					}])
				}
			aLz = new rZ(aJF.tD, eb)
		}()
}

function aM1(a2B) {
	var aJF, aJG, pK;
	this.show = function() {
		aJF.show(), this.resize()
	}, this.qx = function() {
		aJF.qx()
	}, this.resize = function() {
		aJF.resize(), aJG.resize()
	}, this.a0W = function(et) {
		2 === et && aJF.tE[0].pi()
	}, aJF = new t7(L(288), [new q("⬅️ " + L(23), function() {
		n.aJD(10)
	})]), aJG = new pI(aJF.tD, ((pK = []).push(function() {
		var aJc, aJW = new p2,
			aKs = new qF(bf.dp.data[132], 1, function() {
				aJc.button.click()
			}),
			aKt = new qF(bf.dp.data[131], 1, function() {
				aKs.e.focus()
			});
		aJW.p5(L(216)), aJW.pG(aKt), aKt.e.style.marginBottom = "0.8em", aJW.p5(L(217)), aJW.pG(aKs);
		return aJc = new q(L(215), function() {
			s5 = Math.floor(aKt.e.value), s6 = Math.floor(aKs.e.value);
			var s6, s5 = {
				a11: Math.min(s5, s6),
				aIO: Math.max(s5, s6)
			};
			n.o(8, n.aBG(10).aIn, new rp(21, {
				s4: a2B.s4,
				s5: s5.a11,
				s6: s5.aIO
			}))
		}, 0, 0, 1), aJW.pG(new rB([aJc.button])), aJW
	}()), pK.push(function() {
		var aJc, aJW = new p2,
			aKs = new qF(bf.dp.data[134], 1, function() {
				aJc.button.click()
			}),
			aKt = new qF(bf.dp.data[133], 0, function() {
				aKs.e.focus()
			});
		return aJW.p5(1 === a2B.s4 ? L(289) : L(290)), aJW.pG(aKt), aKt.e.style.marginBottom = "0.8em", aJW.p5(L(291)), aJW.pG(aKs), aJc = new q(L(215), function() {
			var aLH = aKt.e.value.slice(0, 20),
				aLI = Math.abs(Math.floor(aKs.e.value));
			n.o(8, n.aBG(10).aIn, new rp(22, {
				s4: a2B.s4,
				aLH: aLH,
				aLI: aLI
			}))
		}, 0, 0, 1), aJW.pG(new rB([aJc.button])), aJW
	}()), pK.push(function() {
		var aJc, aJW = new p2,
			aKs = new qF(bf.dp.data[152], 1, function() {
				aJc.button.click()
			}),
			aKt = new qF(bf.dp.data[151], 0, function() {
				aKs.e.focus()
			});
		return aJW.p5(L(292)), aJW.pG(aKt), aKt.e.style.marginBottom = "0.8em", aJW.p5(L(291)), aJW.pG(aKs), aJc = new q(L(215), function() {
			var aLH = aKt.e.value.slice(0, 5),
				aLI = Math.abs(Math.floor(aKs.e.value));
			n.o(8, n.aBG(10).aIn, new rp(28, {
				s4: a2B.s4,
				aLH: aLH,
				aLI: aLI
			}))
		}, 0, 0, 1), aJW.pG(new rB([aJc.button])), aJW
	}()), pK))
}

function aJC() {
	var aMB, sF, aME, sE, sH, aMC = [new Array(4), [], new Array(2), new Array(2)],
		aMD = new Array(4),
		aMF = [L(47), L(293), L(294), L(295)];

	function aMJ() {
		var a56 = aMB.sS.qE.e.value.slice(0, 127);
		return a56.length < 1 || (aMB.sS.qE.e.value = "", aw.aBj.aBk(3, a56)), 1
	}

	function aMI(aML) {
		bk.s.qU[3] = 1 - bk.s.qU[3], aMK(3, 1, bk.s.qU[3]), aML && aw.aBj.aBk(4)
	}

	function aMG(er, es) {
		bk.s.qU[er] !== es && (0 === er && bk.s.qU[3] && aMI(0), aMK(er, bk.s.qU[er], 0), aMK(er, es, 1), bk.s.qU[er] = es, 0 === er ? (aw.aBj.aBk(2, es), bk.s.qU[2] ? (aMB.sT.lI(), aMB.sS.qR(1)) : aMB.sS.qR(0), n.aD0().aBJ(), n.aD0().aBI()) : 2 ===
			er && (0 === es ? (aw.aBj.aBk(0), aMB.sS.lI(), aMB.sb()) : (aw.aBj.aBk(1), aMB.sT.lI(), aMB.sc())))
	}

	function aMK(er, es, color) {
		aMB.sV[er].q0[es].pl(color ? b7.mx : b7.nc)
	}

	function aMN(aAh) {
		return aAh < 7 ? aAh + 2 + " " + L(302) : 7 === aAh || 10 === aAh ? L(293) + " (Full-Sending: " + L(7 === aAh ? 303 : 304) + ")" : 8 === aAh ? "1v1" : L(305)
	}

	function aMO(f0) {
		var a59 = bH.dl(f0, 60),
			f0 = f0 % 60;
		return (a59 < 10 ? "0" : "") + a59 + ":" + (f0 < 10 ? "0" : "") + f0
	}
	this.aBH = function() {
		aMB.sT.lI()
	}, this.aBJ = function() {
		var aMM = bk.s.qU[0],
			aMM = bk.s.qW[aMM];
		bO.a3(aMM.eE, aMM.mapSeed), sF.q0[0].button.textContent = L(235) + ": " + bO.uv.uw[aMM.eE].name, sF.q0[1].button.textContent = L(237, 0, "Mode") + ": " + aMN(aMM.aAh), sF.q0[2].button.textContent = L(299) + ": " + bO.uv.uw[aMM.aBl].name,
			sF.q0[3].button.textContent = L(300, 0, "Next Mode") + ": " + aMN(aMM.aBm), sF.q0[4].button.textContent = L(301) + ": " + aMO(aMM.aBL), sF.resize()
	}, this.aBI = function() {
		var aMM = bk.s.qU[0],
			qV = bk.s.qW[aMM];
		aMB.sZ(qV.sa);
		for (var a7 = 0; a7 < bk.sn.so.length; a7++) aMC[0][a7].qQ.textContent = "" + bk.sn.so[a7].length;
		var sn = bk.sn.so[aMM],
			aMP = sn.length,
			aMQ = bk.sn.sp[aMM];
		aMC[2][1].qQ.textContent = "" + aMP, aMC[3][1].qQ.textContent = "" + aMQ, sF.q0[4].button.textContent = L(301) + ": " + aMO(qV.aBL);
		for (a7 = 0; a7 < 4; a7++) {
			var aMR = bk.s.qW[a7];
			aMD[a7] ? 0 === aMR.sa && (aMD[a7].qQ.textContent = bO.uv.uw[aMR.eE].name) : aMD[a7] = new qP(bO.uv.uw[aMR.eE].name, sE.q0[a7].button, 1, 1), b6.z3.startsWith(aMF[a7], "🏆 ") ? aMR.aAn || (aMF[a7] = aMF[a7].substring(3), sE.q0[a7]
				.button.textContent = aMF[a7], sE.q0[a7].button.appendChild(aMC[0][a7].qQ), sE.q0[a7].button.appendChild(aMD[a7].qQ)) : aMR.aAn && (aMF[a7] = "🏆 " + aMF[a7], sE.q0[a7].button.textContent = aMF[a7], sE.q0[a7].button
				.appendChild(aMC[0][a7].qQ), sE.q0[a7].button.appendChild(aMD[a7].qQ))
		}
		var qV = "",
			aMT = "";
		0 === aMM && (qV = bk.qc.aB3(sn, 0, aMP), aMT = bk.qc.aB3(sn, 0, aMQ)), aME[0].qQ.textContent = qV, aME[1].qQ.textContent = aMT, sF.q0[5].button.textContent = L(209) + " (MP): " + bk.s.aB9[0], sF.q0[6].button.textContent = L(209) +
			" (SP): " + bk.s.aB9[1]
	}, this.aBN = function() {
		aMB.sS.lI()
	}, this.show = function() {
		aMB.show(), this.resize()
	}, this.qx = function() {
		aMB.qx(), bk.sw.qx(), bk.qu.qx()
	}, this.resize = function() {
		aMB.resize(1 - bk.s.qU[2])
	}, this.a0W = function(et) {
		2 === et && aMB.sV[3].q0[0].pi()
	}, sE = new rE([new q(aMF[0], function() {
		return aMG(0, 0), 2
	}), new q(aMF[1], function() {
		return aMG(0, 1), 2
	}), new q(aMF[2], function() {
		return aMG(0, 2), 2
	}), new q(aMF[3], function() {
		return aMG(0, 3), 2
	})], b7.nc), sF = new rE([new q("", 0, 2), new q("", 0, 2), new q("", 0, 2), new q("", 0, 2), new q("", 0, 2), new q("", 0, 2), new q("", 0, 2)], b7.nd, 1);
	var aMH = new rE([new q(L(296), function() {
		return aMG(2, 0), 2
	}), new q(L(101), function() {
		return aMG(2, 1), 2
	})], b7.nc);
	sH = new rE([new q(L(297), (__fx.customLobby.setLeaveFunction(() => {
			n.r(), bk.zo(), aw.s.zn(3240), __fx.customLobby.setActive(false), n.o(5, 5)
		}),
		function() {
			n.r(), bk.zo(), aw.s.zn(3240), __fx.customLobby.setActive(false), n.o(5, 5)
		})), new q(L(298), function() {
		return aMI(1), 2
	})], b7.nc), aMB = new sD(sE, sF, aMH, sH, aMJ, bk.sw.aBT);
	for (var a7 = 0; a7 < 4; a7++) aMC[0][a7] = new qP("0", sE.q0[a7].button);
	aMC[2][1] = new qP("0", aMH.q0[1].button), aMC[3][1] = new qP("0", sH.q0[1].button), aME = [new qP("", aMH.q0[1].button, 1, 1), new qP("", sH.q0[1].button, 1, 1)], aMK(0, bk.s.qU[0], 1), aMK(2, bk.s.qU[2], 1)
}

function aIt() {
	var aJF, aJG, pK;
	this.show = function() {
		aJF.show(), this.resize()
	}, this.qx = function() {
		aJF.qx()
	}, this.resize = function() {
		aJF.resize(), aJG.resize()
	}, this.a0W = function(et) {
		2 === et && aJF.tE[0].pi()
	}, aJF = new t7(L(306), [new q("⬅️ " + L(23), function() {
		n.o(7, n.aBG(7).aIn)
	}), new q(L(169), function() {
		bf.r8.r9(105, bC.rr.uf(aJG.pM[0].p3[0].e.value, 5)), bf.r8.r9(106, bC.rr.uf(aJG.pM[1].p3[0].e.value, 8)), n.o(8, n.aBG(7).aIn, new rp(18))
	})]), aJG = new pI(aJF.tD, ((pK = []).push(function() {
		var aJW = new p2;
		return aJW.p5(L(150)), aJW.pG(new qF({
			value: "",
			e0: -1
		})), aJW
	}()), pK.push(function() {
		var aJW = new p2,
			aJf = (aJW.p5(L(152)), new qF({
				value: "",
				e0: -1
			}));
		return aJf.e.type = "password", aJW.pG(aJf), aJW.pG(new rB([new q(L(153), function(e) {
			return e.textContent === L(153) ? (e.textContent = L(154), aJf.e.type = "text") : (e.textContent = L(153), aJf.e.type = "password"), !0
		}).button])), aJW
	}()), pK))
}

function aJ0() {
	var aJF, aLw, aLx, t8;

	function s3(a7) {
		n.o(8, n.ro, new rp(21, {
			s4: a7,
			s5: 0,
			s6: 10
		}))
	}
	this.show = function() {
		aJF.show(), this.resize()
	}, this.qx = function() {
		aJF.qx()
	}, this.resize = function() {
		aJF.resize(), aLw.resize()
	}, this.a0W = function(et) {
		2 === et && aJF.tE[0].pi()
	}, aLx = [new q(L(265), function() {
		s3(5)
	}, 0, 0, 1), new q(L(266), function() {
		s3(6)
	}, 0, 0, 1), new q(L(267), function() {
		s3(7)
	}, 0, 0, 1), new q(L(268), function() {
		s3(8)
	}, 0, 0, 1)], t8 = [new q("⬅️ " + L(23), function() {
		n.zl()
	})], aJF = new t7(L(307), t8), aLw = new pz(aLx, aJF.tD)
}

function aIj() {
	this.dp = {}, this.s7 = ["", "", ""], this.aIy = null, this.aIv = null, this.rX = 0, this.aEL = [0], this.t = function() {
			n.o(5, 5)
		}, this.aLp = function() {
			n.r(), aV.aC9(0), aV.dU()
		},
		__fx.customLobby.setJoinFunction(() => {
			n.r();
			aV.aC9(0);
			aV.dU();
		}), this.a9y = function() {
			n.o(0 === aW.zb() ? 5 : 0)
		}, this.aKr = function() {
			if (1 === bf.dp.data[130].value) n.o(8, n.aD0().aIn, new rp(24, {
				aKP: bf.dp.data[125].value,
				s5: bf.dp.data[128].value,
				s6: bf.dp.data[129].value
			}));
			else {
				for (var g = (g = bf.dp.data[126].value.split(",")).slice(0, 10), a7 = 0; a7 < g.length; a7++) g[a7] = g[a7].trim().slice(0, 7).toUpperCase();
				1 === g.length && 0 === g[0].length && (g = []), n.o(8, n.aD0().aIn, new rp(23, {
					aKP: bf.dp.data[125].value,
					z5: g
				}))
			}
		}, this.aLq = function(aIn, target) {
			n.o(4, aIn, new p("Data Usage Information",
				"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: <a href='" + bG.aMV +
				"' target='_blank'>" + bG.aMV + "</a>", !1, [new q("⬅️ " + L(23), function() {
					n.o(aIn)
				}), new q("✅ Accept", function() {
					bf.r8.r9(140, 1), 0 === target ? n.o(2, aIn) : n.o(8, aIn, new rp(target))
				})]))
		}, this.aMW = function() {
			for (var a7 = 0; a7 < 3; a7++) this.s7[a7] = bC.uW.ua(bD.oP(5));
			this.s7[1] = "[" + this.s7[1] + "]", 5 === n.ro && n.aD0().aD1.r9(this.s7)
		}
}

function aJ3() {
	var aJw, aJx, aMX, pK;

	function aJz() {
		b2.zo(), n.aJE()[19] = null, n.zl()
	}

	function aMe() {
		aMh(), aMf()
	}

	function aMh() {
		aMX.p4.lastChild && aMX.p4.removeChild(aMX.p4.lastChild)
	}

	function aMf() {
		var aMi = bO.a3B(a9.data);
		a9.data.canvas = bO.aGq(aMi, a9.data.mapSeed).v5, aMg()
	}

	function aMg() {
		var a1G = a9.data.canvas;
		a1G.style.width = "100%", aMX.p4.appendChild(a1G)
	}
	this.aE5 = function(a1G) {
		a9.data.canvas && aMh(), a9.data.canvas = a1G, aMg()
	}, this.show = function() {
		aJw.show(), this.resize()
	}, this.qx = function() {
		aJw.qx()
	}, this.resize = function() {
		aJw.resize(), aJx.resize()
	}, this.a0W = function(et) {
		2 === et && aJw.tE[0].pi()
	}, aJw = new t7(L(235), [new q("⬅️ " + L(23), aJz)]), 2 === a9.data.mapType && b2.dU(), aJx = new pI(aJw.tD, (function(pK) {
		var aJW = new p2;
		aJW.p5(L(203)), aJW.pD(new t2({
			t6: [L(308), L(309), L(310)],
			value: a9.data.mapType
		}, function(e0) {
			2 === (a9.data.mapType = e0) ? (b2.dU(), a9.data.canvas = null) : (a9.data.passableWater = a9.data.passableMountains = 1, b2.zo()), n.o(20)
		})), 2 <= a9.data.mapType && (aJW.pG(new rL), aJW.pG(new r5({
			value: a9.data.passableWater
		}, L(311), function(value) {
			a9.data.passableWater = value
		})), aJW.pG(new r5({
			value: a9.data.passableMountains
		}, L(312), function(value) {
			a9.data.passableMountains = value
		})));
		pK.push(aJW)
	}(pK = []), function(pK) {
		if (0 === a9.data.mapType) {
			for (var aJW = new p2, t6 = (aJW.p5(L(235)), []), a7 = 0; a7 < bO.uv.aHk.length; a7++) t6.push(bO.uv.uw[bO.uv.aHk[a7]].name);
			aJW.pD(new t2({
				t6: t6,
				value: a9.data.mapProceduralIndex
			}, function(e0) {
				a9.data.mapProceduralIndex = e0, aMe()
			})), pK.push(aJW)
		}
	}(pK), function(pK) {
		if (1 === a9.data.mapType) {
			for (var aJW = new p2, t6 = (aJW.p5(L(235)), []), a7 = 0; a7 < bO.uv.aHl.length; a7++) t6.push(bO.uv.uw[bO.uv.aHl[a7]].name);
			aJW.pD(new t2({
				t6: t6,
				value: a9.data.mapRealisticIndex
			}, function(e0) {
				a9.data.mapRealisticIndex = e0, aMe()
			})), pK.push(aJW)
		}
	}(pK), function(pK) {
		var aJW;
		2 === a9.data.mapType && ((aJW = new p2).p5(L(235)), aJW.pG(new rB([new q(L(313), function() {
			return b2.aDy(), !0
		}).button])), pK.push(aJW))
	}(pK), function(pK) {
		(aMX = new p2).p5(L(314)), 2 !== a9.data.mapType ? aMf() : a9.data.canvas && aMg();
		pK.push(aMX)
	}(pK), function(pK) {
		var aJW, qE, aJc;
		0 === a9.data.mapType && ((aJW = new p2).p5("Seed"), qE = new qF({
			e0: -1,
			value: a9.data.mapSeed
		}, 1, 0, function(e) {
			e = Math.abs(Math.floor(e.target.value)) % 16384;
			a9.data.mapSeed !== e && (a9.data.mapSeed = e, aMe())
		}), aJc = new q(L(228), function(e) {
			var aGl = Math.floor(16384 * Math.random());
			if (a9.data.mapSeed !== aGl) return qE.e.value = a9.data.mapSeed = aGl, aMe(), !0
		}), aJW.pG(qE), aJW.pG(new rB([aJc.button])), pK.push(aJW))
	}(pK), function(pK) {
		var aJW, qE;
		2 === a9.data.mapType && ((aJW = new p2).p5(L(315)), qE = new qF({
			e0: -1,
			value: a9.data.mapName
		}, 0, 0, function(e) {
			a9.data.mapName = e.target.value = e.target.value.slice(0, 20)
		}), aJW.pG(qE), pK.push(aJW))
	}(pK), pK))
}

function p(title, pC, aMj, aLy) {
	var aJF, aL8;
	this.show = function() {
		aJF.show(), this.resize()
	}, this.qx = function() {
		aJF.qx()
	}, this.resize = function() {
		aJF.resize(), aL8.resize()
	}, this.a0W = function(et) {
		2 === et && aJF.tE[0].pi()
	}, aLy = aLy || [new q("⬅️ " + L(23), function() {
		n.zl()
	})], aJF = new t7(title, aLy), aL8 = new rA(aJF.tD, pC), aMj && b6.pP.textAlign(aJF.tD.style, 1)
}

function aJ6() {
	var aJw, aJx, aJy, pK;

	function aJz() {
		aK1(), 2 === a9.data.playerNamesType && 1 === b6.pZ.a0x(a9.data.playerNamesData).length && (a9.data.playerNamesType = 0), 2 !== a9.data.playerNamesType && (a9.data.playerNamesData = null), n.aJE()[19] = null, n.zl()
	}

	function aK1() {
		2 === a9.data.playerNamesType && b6.pZ.a1B(aJy.ta(), a9.data.playerNamesData, 20)
	}
	this.show = function() {
		aJw.show(), this.resize()
	}, this.qx = function() {
		aJw.qx()
	}, this.resize = function() {
		aJw.resize(), aJx.resize()
	}, this.a0W = function(et) {
		2 === et && aJw.tE[0].pi()
	}, aJw = new t7(L(239), [new q("⬅️ " + L(23), aJz)]), aJx = new pI(aJw.tD, (function(pK) {
		var aJW = new p2;
		aJW.p5(L(203)), aJW.pD(new t2({
			t6: [L(240), L(241), L(206)],
			value: a9.data.playerNamesType
		}, function(e0) {
			aK1(), a9.data.playerNamesType = e0, n.o(23)
		})), aJW.pG(new rL), aJW.pG(new r5({
			value: a9.data.selectableName
		}, L(316), function(value) {
			a9.data.selectableName = value
		})), pK.push(aJW)
	}(pK = []), function(pK) {
		var aJW;
		2 === a9.data.playerNamesType && ((aJW = new p2).p5("Data"), aJy = new tS(0, 1, 0, 1), a9.data.playerNamesData && a9.data.playerNamesData.length === a9.eV || (a9.data.playerNamesData = new Array(a9.eV), a9.data.playerNamesData
			.fill("")), aJy.tZ(b6.z3.a2W(a9.data.playerNamesData, 1, '"')), aJW.pG(aJy), pK.push(aJW))
	}(pK), pK))
}

function aIr() {
	var aJw, tX;

	function aMk() {
		n.r();
		var p6 = b5.aMo(tX.ta());
		(a9.yT && 0 < p6.length && p6 === b5.od.a32 || b5.aEV.uq(p6)) && b5.aMp()
	}
	this.show = function(aMl) {
		this.aMm(aMl), aJw.show(), this.resize()
	}, this.aMm = function(aMl) {
		0 === a9.yT ? aMl ? tX.tZ(aMl) : b5.od.a32.length && tX.tZ(b5.od.a32) : (a9.gi || (b5.od.a32 = b5.a33.xw()), tX.tZ(b5.aMn(b5.od.a32)))
	}, this.qx = function() {
		aJw.qx()
	}, this.resize = function() {
		aJw.resize(), tX.resize()
	}, this.a0W = function(et) {
		2 === et ? aJw.tE[0].pi() : aMk()
	}, aJw = new t7(L(317), [new q("⬅️ " + L(23), function() {
		n.aJD(1)
	}), new q(L(318), function() {
		tX.tb()
	}), new q(L(319), function() {
		tX.tc()
	}), new q(L(320), function() {
		tX.clear()
	}), new q(L(321), function() {
		aMk()
	})]), tX = new tS(L(322)), aJw.tD.appendChild(tX.e)
}

function aIq() {
	var aJF, aJG, pK, a9u, aJW;

	function aMq() {
		var lo;
		a9u !== bf.dp.data[12].value ? (b3.dU(), b3.a9t(), lo = bb.lo, n.o(4, 1, new p(L(325), L(326), !1, [new q("⬅️ " + L(23), function() {
			n.o(1)
		}), new q("🔄 Reload", function() {
			bb.lo < lo + 1500 || u.v.w()
		}, b7.mv)]))) : n.o(1)
	}
	this.show = function() {
			a9u = bf.dp.data[12].value, aJF.show(), this.resize()
		}, this.qx = function() {
			aJF.qx()
		}, this.resize = function() {
			aJF.resize(), aJG.resize()
		}, this.a0W = function(et) {
			2 === et && aJF.tE[0].pi()
		}, aJF = new t7(L(323), [new q("⬅️ " + L(23), aMq), new q(L(324), function() {
			n.r(), bf.r8.uD(), n.o(2)
		})]), pK = [], (aJW = new p2).p5(L(327)), aJW.p7(L(328)), pK.push(aJW),
		function(pK) {
			var aJW = new p2,
				g = (aJW.p5(L(346)), b3.data.a9z());
			aJW.pD(new t2({
				t6: g,
				value: b3.data.aA2(g)
			}, function(e0) {
				return bf.r8.r9(12, g[e0].split(":")[0]), !0
			})), pK.push(aJW)
		}(pK),
		function(pK) {
			var aJW = new p2,
				aMt = (aJW.p5(L(344)), []);
			aJW.pG(new rB([new q(L(345), function(e) {
				bT.aMu();
				for (var a7 = 0; a7 < aMt.length; a7++) aMt[a7].e.value = bT.aMv[a7];
				return b6.pP.a1j(e), !0
			}).button]));
			for (var a7 = 0; a7 < bT.aMw.length; a7++) {
				aJW.p7(bT.aMw[a7]);
				for (var er = 0; er < 2; er++) {
					var e0 = 2 * a7 + er,
						qE = new qF({
							value: bT.aMv[e0],
							e0: -1
						});
					qE.e.aMx = e0, aMt.push(qE), qE.e.addEventListener("keydown", function(e) {
						e.preventDefault();
						var code = e.code;
						e.target.value = code, bT.aMy(e.target.aMx, code)
					}), er && (qE.e.style.marginLeft = "4%"), qE.e.style.width = "48%", aJW.pG(qE)
				}
			}
			pK.push(aJW)
		}(pK), (aJW = new p2).p5(L(329)), bf.dp.data[1].t6 = [L(330), L(331), L(332), L(333)], aJW.pD(new t2(bf.dp.data[1])), pK.push(aJW), (aJW = new p2).p5(L(334)), bf.dp.data[9].t6 = [L(331), L(335), L(336)], aJW.pD(new t2(bf.dp.data[9])), pK
		.push(aJW), (aJW = new p2).p5(L(337)), bf.dp.data[11].t6 = [L(338), L(9), L(339)], aJW.pD(new t2(bf.dp.data[11])), pK.push(aJW), (aJW = new p2).p5(L(340)), aJW.pG(new r5(bf.dp.data[2])), pK.push(aJW), (aJW = new p2).p5(L(341)), aJW.pG(new r5(
			bf.dp.data[7])), pK.push(aJW), (aJW = new p2).p5(L(342)), aJW.pG(new r5(bf.dp.data[8])), pK.push(aJW), (aJW = new p2).p5(L(343)), aJW.pG(new qF(bf.dp.data[5])), pK.push(aJW), aJG = new pI(aJF.tD, pK)
}

function aJ7() {
	var aJw, aJx, aJy, pK;

	function aJz() {
		aK1(), 2 !== a9.data.spawningType || b6.pZ.a0x(a9.data.spawningData) || (a9.data.spawningType = 0), 2 !== a9.data.spawningType && (a9.data.spawningData = null), n.aJE()[19] = null, n.zl()
	}

	function aK1() {
		2 === a9.data.spawningType && b6.pZ.a19(aJy.ta(), a9.data.spawningData, bO.aE7 - 1)
	}
	this.show = function() {
		aJw.show(), this.resize()
	}, this.qx = function() {
		aJw.qx()
	}, this.resize = function() {
		aJw.resize(), aJx.resize()
	}, this.a0W = function(et) {
		2 === et && aJw.tE[0].pi()
	}, aJw = new t7(L(347), [new q("⬅️ " + L(23), aJz)]), aJx = new pI(aJw.tD, (function(pK) {
		var aJW = new p2,
			t6 = (aJW.p5(L(203)), [L(228), L(238), L(206)]),
			value = a9.data.spawningType;
		0 === a9.data.gameMode && (t6.splice(1, 1), 0 < value) && (value = 1);
		aJW.pD(new t2({
			t6: t6,
			value: value
		}, function(e0) {
			aK1(), a9.data.spawningType = e0, 0 === a9.data.gameMode && 1 === e0 && (a9.data.spawningType = 2), 2 !== a9.data.spawningType || a9.data.spawningData || (a9.data.spawningData = new Uint16Array(2 * a9.eV)), n.o(24)
		})), aJW.pG(new rL), aJW.pG(new r5({
			value: a9.data.selectableSpawn
		}, L(348), function(value) {
			a9.data.selectableSpawn = value
		})), pK.push(aJW)
	}(pK = []), function(pK) {
		var aJW = new p2;
		aJW.p5("Seed"), aJW.pG(new qF({
			e0: -1,
			value: a9.data.spawningSeed
		}, 1, 0, function(e) {
			var value = Math.abs(Math.floor(e.target.value)) % 16384;
			e.target.value = a9.data.spawningSeed = value
		})), pK.push(aJW)
	}(pK), function(pK) {
		var aJW;
		2 === a9.data.spawningType && ((aJW = new p2).p5("Data"), (aJy = new tS(0, 1, 0, 1)).tZ(b6.z3.a2W(a9.data.spawningData, 2)), aJW.pG(aJy), pK.push(aJW))
	}(pK), pK))
}

function aIp() {
	var aJF, aLw, aLx, t8;

	function aMz(id) {
		0 !== u.id || bf.dp.data[140].value ? 0 === id ? n.o(8, 1, new rp(16)) : n.o(2) : n.s.aLq(n.ro, 0 === id ? 16 : 0)
	}
	this.show = function() {
		u.v.setState(12), aJF.show(), this.resize(), this.iS()
	}, this.qx = function() {
		aJF.qx()
	}, this.resize = function() {
		aJF.resize(), aLw.resize()
	}, this.iS = function() {
		8 === aW.zb() && (2 <= bZ.aN4 ? aLx[2].pj === b7.mk && aLx[2].pl(0) : aLx[2].pj !== b7.mk && aLx[2].pl(b7.mk), !a9.gi && aI.oz(a9.eI) ? aLx[1].pj === b7.mk && aLx[1].pl(0) : aLx[1].pj !== b7.mk && aLx[1].pl(b7.mk), !a9.gi && aq.p0(a9
			.eI) ? aLx[0].pj === b7.mk && aLx[0].pl(0) : aLx[0].pj !== b7.mk && aLx[0].pl(b7.mk))
	}, this.a0W = function(et) {
		2 === et && aJF.tE[0].pi()
	}, aLx = [new q(L(349), function() {
		aMz(0)
	}), new q(L(257), function() {
		n.o(16)
	}), new q(L(307), function() {
		n.o(17)
	}), new q(L(350), function() {
		n.s.aKr()
	}, 0, 0, 1), new q(L(317), function() {
		n.o(3, 1)
	}), new q(L(351), function() {
		n.o(18)
	}), new q(L(323), function() {
		aMz(1)
	}), new q(L(352), function() {
		n.o(4, 1, new p(L(352), b6.pP.a1e([L(361), L(362), "Discord", L(363), L(253), L(364), L(101), L(365), L(366), L(367)], [bG.aAE, bG.zW, bG.aAF, bG.aN5, bG.aN6, bG.aN7, bG.aN8, bG.aN9, bG.aNA, bG.aMV]), !1, [new q("⬅️ " + L(23),
			function() {
				n.o(1)
			})]))
	}), new q(L(353), function() {
		n.o(4, 1, new p(L(353), dh + "<br><a href='" + bG.aN5 + "' target='_blank'>" + bG.aN5 + "</a>" +
			"<br><br><b>" + "FX Client v" + __fx.version + "<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a>" +
			"<br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></b>", !0, [new q("⬅️ " + L(23), function() {
				n.o(1)
			})]))
	}), new q(L(354), function() {
		n.o(4, 1, new p(L(354), L(368) + "<br>" + L(369), !1, [new q("⬅️ " + L(23), function() {
			n.o(1)
		}), new q(L(370), function() {
			u.v.zP(), n.o(1)
		})]))
	}), new q(L(355), function() {
		u.v.zQ(), n.o(4, 1, new p(L(371), L(372) + "<a href='" + bG.aMV + "' target='_blank'>" + bG.aMV + "</a>", !1, [new q("⬅️ " + L(23), function() {
			n.o(1)
		})]))
	})], t8 = [new q("⬅️ " + L(23), function() {
		n.s.a9y()
	})], 8 === aW.zb() && (aLx.unshift(new q(L(358), function() {
		2 <= bZ.aN4 && (n.r(), ba.a0Z(), bb.dc = !0)
	}, 0, 1)), aLx.unshift(new q(L(359), function() {
		!a9.gi && aI.oz(a9.eI) && (b4.gv.o5(), n.r(), aI.gj) && aI.a0Z()
	}, 0, 1)), aLx.unshift(new q(L(360), function() {
		!a9.gi && aq.p0(a9.eI) && (b4.gv.o7(), n.r(), aI.gj) && aI.a0Z()
	}, 0, 1))), 1 === u.id && 5 <= u.f1 && aLx.push(new q(L(356), function() {
		u.v.zR()
	})), aJF = new t7(L(357), t8), aLw = new pz(aLx, aJF.tD)
}

function aJB() {
	var aJw, aJx, aJy, pK;

	function aJz() {
		aK1(), 2 !== a9.data.sResourcesType && (a9.data.sResourcesData = null), n.aJE()[19] = null, n.zl()
	}

	function aK1() {
		2 === a9.data.sResourcesType && b6.pZ.a19(aJy.ta(), a9.data.sResourcesData, 2047)
	}
	this.show = function() {
		aJw.show(), this.resize()
	}, this.qx = function() {
		aJw.qx()
	}, this.resize = function() {
		aJw.resize(), aJx.resize()
	}, this.a0W = function(et) {
		2 === et && aJw.tE[0].pi()
	}, aJw = new t7(L(244), [new q("⬅️ " + L(23), aJz)]), aJx = new pI(aJw.tD, (function(pK) {
		var aJW = new p2;
		aJW.p5(L(203)), aJW.pD(new t2({
			t6: [L(204), L(205), L(206)],
			value: a9.data.sResourcesType
		}, function(e0) {
			aK1(), 2 !== e0 || a9.data.sResourcesData || (a9.data.sResourcesData = new Uint16Array(a9.eV)), a9.data.sResourcesType = e0, n.o(28)
		})), pK.push(aJW)
	}(pK = []), function(pK) {
		var aJW;
		1 === a9.data.sResourcesType && ((aJW = new p2).p5("Value"), aJW.pG(new qF({
			e0: -1,
			value: a9.data.sResourcesValue
		}, 1, 0, function(e) {
			var value = bH.ow(Math.floor(e.target.value), 0, 2047);
			e.target.value = a9.data.sResourcesValue = value
		})), pK.push(aJW))
	}(pK), function(pK) {
		var aJW;
		2 === a9.data.sResourcesType && ((aJW = new p2).p5("Data"), (aJy = new tS(0, 1, 0, 1)).tZ(b6.z3.a2W(a9.data.sResourcesData, 2)), aJW.pG(aJy), pK.push(aJW))
	}(pK), pK))
}

function aJ9() {
	var aJw, aJx, aJy, pK;

	function aJz() {
		aK1(), 2 !== a9.data.tIncomeType && (a9.data.tIncomeData = null), n.aJE()[19] = null, n.zl()
	}

	function aK1() {
		2 === a9.data.tIncomeType && b6.pZ.a19(aJy.ta(), a9.data.tIncomeData, 255)
	}
	this.show = function() {
		aJw.show(), this.resize()
	}, this.qx = function() {
		aJw.qx()
	}, this.resize = function() {
		aJw.resize(), aJx.resize()
	}, this.a0W = function(et) {
		2 === et && aJw.tE[0].pi()
	}, aJw = new t7(L(242), [new q("⬅️ " + L(23), aJz)]), aJx = new pI(aJw.tD, (function(pK) {
		var aJW = new p2;
		aJW.p5(L(203)), aJW.pD(new t2({
			t6: [L(204), L(205), L(206)],
			value: a9.data.tIncomeType
		}, function(e0) {
			aK1(), 2 !== e0 || a9.data.tIncomeData || (a9.data.tIncomeData = new Uint8Array(a9.eV), a9.data.tIncomeData.fill(32)), a9.data.tIncomeType = e0, n.o(26)
		})), pK.push(aJW)
	}(pK = []), function(pK) {
		var aJW;
		1 === a9.data.tIncomeType && ((aJW = new p2).p5("Value"), aJW.pG(new qF({
			e0: -1,
			value: a9.data.tIncomeValue
		}, 1, 0, function(e) {
			var value = bH.ow(Math.floor(e.target.value), 0, 255);
			e.target.value = a9.data.tIncomeValue = value
		})), pK.push(aJW))
	}(pK), function(pK) {
		var aJW;
		2 === a9.data.tIncomeType && ((aJW = new p2).p5("Data"), (aJy = new tS(0, 1, 0, 1)).tZ(b6.z3.a2W(a9.data.tIncomeData, 4)), aJW.pG(aJy), pK.push(aJW))
	}(pK), pK))
}

function aJ1() {
	var aJF, aJG, pK;
	this.show = function() {
		aJF.show(), this.resize()
	}, this.qx = function() {
		aJF.qx()
	}, this.resize = function() {
		aJF.resize(), aJG.resize()
	}, this.a0W = function(et) {
		2 === et && aJF.tE[0].pi()
	}, aJF = new t7(L(351), [new q("⬅️ " + L(23), function() {
		n.zl()
	})]), aJG = new pI(aJF.tD, ((pK = []).push(function() {
		function aJZ() {
			aNF.button.textContent = L(147), aND.e.readOnly = !1, aNE.e.readOnly = !1, aJY.pl(1), aJY.button.style.color = b7.mY
		}
		var aJW = new p2,
			aNC = (aJW.p5(L(373)), new qF({
				value: bf.dp.data[105].value,
				e0: -1
			})),
			aND = (aNC.e.readOnly = !0, aJW.pG(aNC), aJW.p5(L(280), "0.8em"), new qF(bf.dp.data[148])),
			aND = new qF(bf.dp.data[148], 0, void 0, function(e) {
				aJX(bf.dp.data[149].value, e.target.value)
			}),
			aNE = (aJW.pG(aND), aJW.p5(L(284), "0.8em"), new qF(bf.dp.data[149], 1, void 0, function(e) {
				aJX(e.target.value, bf.dp.data[148].value)
			})),
			aNF = (aJW.pG(aNE), new q(L(147), function(e) {
				return e.textContent === L(147) ? (e.textContent = L(148), aND.e.readOnly = !0, aNE.e.readOnly = !0, aJY.pl(0), aJY.button.style.color = b7.nR, bf.r8.r9(149, aNE.e.value), aJX(bf.dp.data[149].value, bf.dp.data[
					148].value)) : aJZ(), !0
			})),
			aJY = (aJW.pG(new rB([aNF.button])), new q(L(14), function(e) {
				return aND.e.readOnly && aw.s.aC7(0) && (b6.pP.a1j(e), aJZ(), aw.aJa.aJb({
					rq: 0,
					qn: bf.dp.data[148].value,
					rn: 0,
					value: bH.ow(Math.floor(100 * bf.dp.data[149].value), 0, 4294967295)
				})), !0
			}, 1)),
			p8 = (aJW.pG(new rB([aJY.button])), aJW.p7()),
			aJX = function(f0, p6) {
				f0 = isNaN(f0) ? 0 : Number(f0);
				var f0 = Math.max(f0, (bf.dp.data[150].value + 1) / 100),
					aJe = Math.floor(100 * Math.max(1e-4 * f0, bf.dp.data[150].value / 100)) / 100;
				p8.textContent = L(149, [f0.toFixed(2), bf.dp.data[105].value, aJe.toFixed(2), p6, (f0 - aJe).toFixed(2)])
			};
		return aJX(bf.dp.data[149].value, bf.dp.data[148].value), aJW
	}()), pK))
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
	var a7D, aNH, aNI, aNJ, aNG = !1;

	function aNK() {
		aNG = !0, a7D = -1, aNH = new Array(4);
		for (var a7 = 3; 0 <= a7; a7--) aNH[a7] = !1;
		var vy = Math.floor(1 + .02 * at.min);
		aNI = new Array(4), (aNJ = new Array(4))[1] = aNJ[3] = aNI[0] = aNI[2] = 0, aNJ[0] = aNI[3] = -vy, aNI[1] = aNJ[2] = vy
	}

	function aNL() {
		if (-1 !== a7D)
			if (0 !== a9.yT && aD.mG()) {
				for (var aNM = !1, a7 = 3; 0 <= a7; a7--) aNH[a7] && (aNM = !0, hv += aNI[a7], hx += aNJ[a7], ab.zy(aNI[a7], aNJ[a7]), aO.a6v());
				aNM ? bb.dc = !0 : am.m6()
			} else am.m6()
	}
	this.a0U = function(e0) {
		0 !== a9.yT && aD.mG() && (aNG || aNK(), aNH[e0] = !0, -1 === a7D) && (a7D = setInterval(aNL, 20), aNL())
	}, this.a0X = function(e0) {
		if (0 !== a9.yT && (aNG || aNK(), aNH[e0] = !1, -1 !== a7D)) {
			for (var aNM = !1, a7 = 3; 0 <= a7; a7--) aNM = aNM || aNH[a7];
			aNM || this.m6()
		}
	}, this.m6 = function() {
		if (aNG && -1 !== a7D) {
			for (var a7 = 3; 0 <= a7; a7--) aNH[a7] = !1;
			clearInterval(a7D), a7D = -1
		}
	}
}

function cc() {
	this.s = new aNN, this.lD = new aNO, this.nl = new aNP, this.aBj = new aNQ, this.a9v = new aNR, this.aJa = new aNS, this.oO = new aNT, this.aLE = new aNU, this.a4m = new aNV, this.aNW = new aNX, this.aNY = new aNZ, this.aNa = new aNb, this.aNc =
		new aNd, this.dU = function() {
			this.s.dU()
		}
}

function aNN() {
	var aNe, aNg;
	this.aCk = 5, this.aCe = this.aCk - 1, this.aCC = this.aCk + this.aCe, this.aCB = [0, 1, 5, 2, 6, 3, 7, 4, 8], this.aNf = null;

	function aNn(a7) {
		return aNg[a7].aNG && aNe[a7].aNn()
	}

	function aNp(zY) {
		aNg[zY].lo = bb.lo, aNg[zY].aNi = !1
	}
	this.zh = 0, this.zg = 0, this.dU = function() {
		this.aNf = new Array(this.aCk);
		this.aNf[0] = "territorial.io";
		var a7, aGl = au.aH6(0);
		for (au.a2s(0), a7 = 1; a7 < this.aCk; a7++) this.aNf[a7] = aG.y2() + ".territorial.io";
		for (au.a2s(aGl), aNe = new Array(this.aCC), aNg = new Array(this.aCC), a7 = this.aCC - 1; 0 <= a7; a7--) aNg[a7] = {
			aNG: !1,
			lo: 0,
			aNi: !1
		};
		this.aCD(0, 0)
	}, this.aNj = function(a7) {
		return aNe[a7]
	}, this.aNk = function() {
		return this.zg < this.aCk ? this.zg : this.zg - this.aCe
	}, this.iS = function() {
		for (var a7 = this.aCC - 1; 0 <= a7; a7--) this.aC7(a7) && bb.lo > aNg[a7].lo + 15e3 && aw.nl.aNl(a7, aNg[a7].aNi);
		!this.aC7(0) && bb.lo > aNg[0].lo + 8e3 && (aNg[0].lo = bb.lo, this.aCD(0, 0))
	}, this.aCD = function(zY, aIn) {
		if (aNg[zY].aNG) {
			if (aNe[zY].aNn()) return aNe[zY].aNo(aIn), aNe[zY].aC7();
			aNe[zY].qx()
		}
		return this.aNm(zY, aIn), !1
	}, this.aNm = function(zY, aIn) {
		aNg[zY].aNG = !0, aNp(zY), aNe[zY] = new aNq, aNe[zY].dU(zY, aIn)
	}, this.aNo = function(zY, aIn) {
		aNn(zY) && aNe[zY].aNo(aIn)
	}, this.aNr = function(zY, aIn) {
		aw.a9v.aNs(zY)
	}, this.aC7 = function(a7) {
		return aNg[a7].aNG && aNe[a7].aC7()
	}, this.send = function(zY, a8) {
		aNp(zY), aNe[zY].send(a8)
	}, __fx.customLobby.setSendFunction(this.send), this.a0F = function(zY) {
		8 === aW.zb() && (aNg[zY].aNi = !0, aw.lD.aNt = !0)
	}, this.close = function(zY, aNu) {
		aNn(zY) && aNe[zY].close(aNu)
	}, this.aNv = function(zY, aNu) {
		l.zm(aNu), aNn(zY) && aNe[zY].close(aNu)
	}, this.zn = function(aNu) {
		for (var a7 = this.aCC - 1; 0 <= a7; a7--) this.close(a7, aNu)
	}, this.aNw = function(zY, aNu) {
		for (var a7 = this.aCC - 1; 0 <= a7; a7--) a7 !== zY && this.close(a7, aNu)
	}, this.a34 = function() {
		this.close(this.zh, 3246)
	}, this.aNx = function(zY, e) {
		aNe[zY].qx(), l.zX(zY, e.code)
	}
}

function aNO() {
	this.aNt = !1, this.iS = function() {
		bb.jb() % 250 != 249 || a9.gi || (aw.a9v.aNy(+(this.aNt && ac.lV[a9.eI]), ah.jf + bJ.s.ob), this.aNt = !1)
	}
}

function aNV() {
	function aOP(aOQ) {
		var eb = a9.data,
			aOQ = (eb.selectedPlayer = bD.oP(aOQ), eb.spawningSeed = bD.oP(14), bD.oP(4)),
			aOQ = (aOQ < 7 ? (eb.gameMode = 1, eb.numberTeams = aOQ + 2) : 9 === aOQ ? (eb.gameMode = eb.isZombieMode = 1, eb.numberTeams = 2) : (eb.gameMode = 0, eb.battleRoyaleMode = 7 === aOQ ? 0 : 10 === aOQ ? 1 : 2), eb.isContest = bD.oP(1), bD
				.oP(6));
		return eb.mapType = bO.aAo(aOQ) ? 0 : 1, bO.aAp(eb, aOQ), eb.mapSeed = bD.oP(14), aOQ
	}
	this.aO0 = function(zY, a8) {
		bD.dU(a8), 0 === bD.size ? aw.s.aNv(zY, 3205) : __fx.customLobby.isCustomMessage(a8) || ((0 === bD.oP(1) ? function(zY) {
			var aO4 = bD.oP(6);
			0 === aO4 ? function(zY) {
					if (0 === zY && 8 !== aW.zb()) {
						n.s.aMW();
						for (var aOH = bD.oP(12), aOI = bD.oP(6), g = new Array(aOH), a7 = 0; a7 < aOH; a7++) g[a7] = bD.oP(aOI);
						aP.a7K(g)
					}
				}(zY) : 2 === aO4 ? aw.aNW.aO6(zY) : 3 === aO4 || 4 === aO4 ? ar.dU() : 9 === aO4 ? aw.aNY.aO7(zY) : 10 === aO4 ? aw.aNa.aO8() : 11 === aO4 ? aw.aNY.aO9() : 12 === aO4 ? aw.aNa.aOA() : 13 === aO4 ? aw.aNc.aOB() :
				14 === aO4 ? aw.aNc.aOC() : 15 === aO4 ? aw.aNY.aOD() : 16 === aO4 ? aw.aNW.aOE(zY) : 17 === aO4 ? aw.aNW.aOF(zY) : 18 === aO4 && aw.aNW.aOG(zY)
		} : function(zY) {
			if (8 !== aW.zb() && !ar.aCl()) return;
			if (zY !== aw.s.zh) aw.s.aNv(zY, 3244);
			else if (0 === bD.oP(1)) bb.yc.aOR(bD.a8);
			else {
				var a7, zY = bD.oP(2);
				if (0 === zY) {
					var nz, nl = bD.oP(9);
					0 !== ac.lV[nl] && 0 !== ac.lV[a9.eI] && (nz = bD.oP(10), aJ.ny(nl, a9.eI, nz), ab.ox(nl, 1, nz))
				} else if (1 === zY) ! function() {
					var nl = bD.oP(9);
					0 !== ac.lV[nl] && 0 !== ac.lV[a9.eI] && b1.aGV(0, [nl], !0) && aJ.oH(nl, 1)
				}();
				else if (2 === zY) ! function() {
					var nl = bD.oP(9),
						target = bD.oP(9);
					0 !== ac.lV[nl] && 0 !== ac.lV[target] && 0 !== ac.lV[a9.eI] && b1.aGV(1, [nl], !0) && (ab.ox(nl, 3, 96), ab.ox(target, 4, 96), aJ.a4t(nl, target))
				}();
				else if (a5 && !a6) {
					var eY = 540;
					for (b9.a3(17287), b9.a4(1, 0), b9.a4(6, 10), eY = Math.min(b4.ni.oR.length, 540), a7 = 0; a7 < eY; a7++) b9.aOX(32, b4.ni.oR[a7]);
					aw.s.send(aw.s.zh, b9.a8)
				}
			}
		})(zY), bb.aO3())
	}, this.aOJ = function(a8) {
		if (bD.dU(a8), bD.e0 = 1, 3 === bD.oP(6)) {
			bD.e0 += 20;
			var eb = a9.data = new a2m,
				a8 = aOP(9),
				aAq = eb.humanCount = bD.oP(9) + 1;
			eb.selectableSpawn = 1 === eb.gameMode || aAq < 100, eb.colorsData = new Uint32Array(aAq), eb.playerNamesData = new Array(aAq);
			for (var a7 = 0; a7 < aAq; a7++) bD.e0++, eb.colorsData[a7] = bD.oP(18), eb.playerNamesData[a7] = bC.uW.ua(bD.oP(5));
			aW.aCP(), bO.a3(a8, eb.mapSeed), a9.a2q()
		} else ! function() {
			bD.e0 += 20;
			var eb = a9.data = new a2m,
				aOO = aOP(1);
			eb.humanCount = 2;
			eb.selectableSpawn = 1, eb.elo = new Uint16Array(2), eb.colorsData = new Uint32Array(2), eb.playerNamesData = new Array(2);
			for (var a7 = 0; a7 < 2; a7++) bD.e0++, eb.colorsData[a7] = bD.oP(18), eb.elo[a7] = bD.oP(14), eb.playerNamesData[a7] = bC.uW.ua(bD.oP(5));
			aW.aCP(), bO.a3(aOO, eb.mapSeed), a9.a2q()
		}()
	}, this.aOM = function() {
		bD.e0 = 1;
		var aO4 = bD.oP(6),
			aON = bD.oP(10);
		return aw.s.zg > aw.s.aCe && (aON += aw.s.aCe), aw.s.zg === aON ? (aw.s.zh = aON, !1) : (aw.s.close(aw.s.zg, 3247), aw.s.zh = aON, ar.aAl = bD.oP(10), ar.aCX = bD.oP(3 === aO4 ? 9 : 1), aw.s.aCD(aON, 5) && aw.nl.aCf(), !0)
	}
}

function aNb() {
	this.aO8 = function() {
		bf.s.u4(), bf.r8.r9(105, bB.rr.rs(bB.rr.rt(5))), bf.r8.r9(106, bB.rr.rs(bB.rr.rt(8))), bf.r8.r9(109, bD.oP(30)), bf.r8.r9(108, bf.dp.data[109].value), bf.r8.r9(111, bf.dp.data[109].value + 1), bf.r8.r9(107, 0), bf.r8.r9(110, "")
	}, this.aOA = function() {
		var aOa, aOb, aOc, aOd, aOZ;
		bD.size < b9.aOY(29) ? aw.s.aNv(0, 3254) : (aOZ = bD.oP(5), aOa = bD.oP(3), aOb = bD.oP(3), aOc = bD.oP(3), aOd = bD.oP(8), bD.aOe(197 + 16 * (aOZ + aOa + aOb + aOc + aOd) + 32 + 32 + 30 + 128 + 32 + 30 + 10 + 32 + 2 + 10 + 5) ? (aOZ = {
			rn: bD.oP(30),
			uH: bD.oP(16),
			uI: bD.oP(30),
			uJ: bD.oP(30),
			uK: bD.oP(30),
			uL: bD.aOf(32),
			username: bC.uW.ua(aOZ),
			uM: bC.uW.ua(aOa),
			uN: bC.uW.ua(aOb),
			uO: bD.aOf(32),
			uP: bD.aOf(32),
			uQ: bD.oP(30),
			uR: bD.aOf(32),
			uS: bD.aOf(32),
			uT: bD.aOf(32),
			uU: bD.aOf(32),
			aJi: bD.aOf(32),
			aJj: bD.aOf(30),
			aJd: bD.aOf(10),
			aJt: bD.aOf(32),
			aJu: bC.uW.ua(aOc),
			aJo: bD.aOf(2),
			aJp: bD.aOf(10),
			aJm: bC.uW.ua(aOd),
			aJq: bD.aOf(5)
		}, bf.r8.r9(150, aOZ.aJd), 8 === n.ro && (25 === n.aD0().aLA ? (aOZ.aJH = !0, n.s.aIy = aOZ, n.aD0().aLO(25, !1)) : (aOZ.aJH = !1, aOZ.qn = bf.dp.data[105].value, n.s.aIv = aOZ, bf.r8.uG(aOZ), n.aD0().aLO(16, !0)))) : aw.s.aNv(0,
			3267))
	}
}

function aNd() {
	this.aOB = function() {
		var a7;
		if (bD.size < b9.aOY(39)) aw.s.aNv(0, 3259);
		else {
			var s4 = bD.oP(6),
				eY = bD.oP(10),
				hC = bD.oP(16);
			if (bD.aOe(39 + 16 * hC + eY * (0 === s4 ? 111 : 1 === s4 ? 101 : 2 === s4 || 3 === s4 ? 127 : 212))) {
				var data = [];
				if (0 === s4)
					for (a7 = 0; a7 < eY; a7++) data.push([bD.oP(30), bC.uW.ua(bD.oP(5)), bD.oP(16), bD.oP(30), bD.oP(30)]);
				else if (1 === s4)
					for (a7 = 0; a7 < eY; a7++) data.push([bD.oP(16), bC.uW.ua(bD.oP(3)), bD.oP(16), bC.uW.ua(bD.oP(5)), bD.oP(31), bD.oP(30)]);
				else if (2 === s4 || 3 === s4)
					for (a7 = 0; a7 < eY; a7++) data.push([bD.oP(30), bC.uW.ua(bD.oP(5)), bD.aOf(32), bD.oP(30), bD.oP(30)]);
				else
					for (a7 = 0; a7 < eY; a7++) data.push([bD.oP(20), bD.oP(30), bD.oP(30), bD.oP(30), bD.oP(30), bD.aOf(32), bD.oP(30), bC.uW.ua(bD.oP(5)), bC.uW.ua(bD.oP(5))]);
				8 === n.ro && n.aD0().aLO(21, !0, {
					s4: s4,
					data: data
				})
			} else aw.s.aNv(0, 3260)
		}
	}, this.aOC = function() {
		if (bD.size < b9.aOY(29)) aw.s.aNv(0, 3265);
		else {
			var aOg = bD.oP(4),
				aOh = bD.oP(7),
				aOi = bD.oP(11);
			if (bD.aOe(29 + 16 * aOh + 16 * aOi + 11 * aOg)) {
				for (var data = [], a7 = 0; a7 < aOg; a7++) {
					for (var z6 = bC.uW.ua(bD.oP(3)), aOj = bD.oP(8), aKQ = [], er = 0; er < aOj; er++) aKQ.push(bD.oP(16));
					data.push({
						name: "[" + z6 + "]",
						aKQ: aKQ
					})
				}
				8 === n.ro && n.aD0().aLO(23, !0, data)
			} else aw.s.aNv(0, 3266)
		}
	}
}

function aNX() {
	this.aO6 = function(zY) {
		if (zY !== aw.s.zg) aw.s.close(zY, 3239);
		else if (6 !== aW.zb()) aw.s.close(zY, 3271);
		else {
			bk.dU();
			for (var a7 = 0; a7 < 4; a7++) {
				var qV = bk.s.qW[a7],
					playerCount = (qV.sa = bD.oP(10), qV.eE = bD.oP(6), qV.mapSeed = bD.oP(14), qV.aAh = bD.oP(4), qV.aBl = bD.oP(6), qV.aBm = bD.oP(4), qV.aAn = bD.oP(1), qV.aBL = bD.oP(12), qV.spawningSeed = bD.oP(14), bD.oP(16));
				bk.sn.sp[a7] = bD.oP(16);
				for (var er = 0; er < playerCount; er++) bk.sn.aAR(a7, bD.oP(30), bC.uY.uq(5), bD.oP(4), bD.oP(30), bD.oP(7), bD.oP(16), bD.oP(18))
			}
			n.o(29), bk.s.aBB(!0)
		}
	}, this.aOE = function(zY) {
		if (zY !== aw.s.zg) aw.s.close(zY, 3239);
		else if (bk.zf) {
			bk.s.aB9[0] = bD.oP(20), bk.s.aB9[1] = bD.oP(20);
			for (var aOk = bD.oP(16), er = 0; er < aOk; er++) {
				var id = bD.oP(3);
				0 === id ? bk.sn.aAR(0, bD.oP(30), bC.uY.uq(5), 9, 1e6, 127, 0, bD.oP(18)) : 1 === id ? bk.sn.aAc(bD.oP(16), bD.oP(2)) : 2 === id ? bk.sn.aAY(bD.oP(16), bD.oP(2), bD.oP(2)) : 3 === id ? bk.sn.aAb(bD.oP(16), bD.oP(2)) : 4 === id &&
					bk.sn.aAW(bD.oP(16), bD.oP(2), bC.uY.uq(5), bD.oP(4), bD.oP(30), bD.oP(7), bD.oP(16))
			}
			for (var a7 = 0; a7 < 4; a7++) {
				var qV = bk.s.qW[a7];
				if (qV.sa = bD.oP(10), 0 === qV.sa) {
					if (qV.zh = bD.oP(10), qV.aAl = bD.oP(10), bk.aAK.dd(a7)) return;
					qV.eE = bD.oP(6), qV.mapSeed = bD.oP(14), qV.aAh = bD.oP(4), qV.aBl = bD.oP(6), qV.aBm = bD.oP(4), qV.aAn = bD.oP(1), qV.aBL = bD.oP(12), qV.spawningSeed = bD.oP(14)
				}
			}
			bk.s.aBD()
		} else aw.s.close(zY, 3251)
	}, this.aOF = function(zY) {
		if (zY !== aw.s.zg) aw.s.close(zY, 3272);
		else if (bk.zf) {
			for (var qT = bD.oP(4), qV = bk.s.qW[qT], qX = qV.qX, aOl = (qV.qY = bD.oP(20), bD.oP(6)), a7 = 0; a7 < aOl; a7++) {
				var aB0, target, qn = bD.oP(30),
					id = bD.oP(4);
				0 === id ? qX.push({
					id: id,
					qn: qn,
					k: bC.uY.uq(7)
				}) : 15 === id ? (aB0 = bD.oP(3), target = bD.oP(30), qX.push({
					id: id,
					qn: qn,
					aB0: aB0,
					target: target,
					value: bD.oP(30)
				})) : 14 === id ? qX.push({
					id: id,
					qn: qn,
					aB0: bD.oP(3)
				}) : (target = bD.oP(30), qX.push({
					id: id,
					qn: qn,
					target: target,
					value: bD.oP(4)
				}))
			}
			bk.s.aBM(qT)
		} else aw.s.close(zY, 3273)
	}, this.aOG = function(zY) {
		zY !== aw.s.zg ? aw.s.close(zY, 3274) : bk.zf ? (bk.s.qZ.push(bD.oP(6)), bk.s.aBM(bk.s.qU[0])) : aw.s.close(zY, 3275)
	}
}

function aNZ() {
	this.aO7 = function(zY) {
		var aOT, px;
		bD.aOe(70) ? (aOT = bD.oP(3), px = be.aOm.iS(bD.oP(30), bD.oP(30)), aw.a9v.aOn(zY, px, aOT), 0 < aOT || (0 === zY && 0 === bf.dp.data[105].value.length ? aw.a9v.aLD(0) : aw.aJa.aOo(zY), 4 === aw.s.aNj(zY).aOp() ? 6 === aW.zb() && aw.aBj
			.aCE(zY) : 5 !== aw.s.aNj(zY).aOp() || 8 !== aW.zb() && 10 !== aW.zb() || aw.nl.aCf())) : aw.s.aNv(zY, 3269)
	}, this.aO9 = function() {
		var id = bD.oP(6);
		0 === id ? (aP.a7G || aw.a9v.aLD(1), b3.a9t(), 8 === n.ro && n.aD0().aLN()) : 21 === id ? 8 === n.ro && n.aD0().aLO(17) : 22 === id && (bf.r8.r9(106, bf.dp.data[110].value), bf.r8.r9(110, ""), 8 === n.ro) && n.aD0().aLO(16)
	}, this.aOD = function() {
		var eY = bD.oP(16),
			aOq = bD.oP(16);
		if (bD.aOe(55 + 10 * eY + 16 * aOq)) {
			for (var g = [], a7 = 0; a7 < eY; a7++) g.push(bC.uW.ua(bD.oP(10)));
			b3.a9x(g)
		} else aw.s.aNv(0, 3270)
	}
}

function aNP() {
	this.aNl = function(zY, aNi) {
		b9.a3(8), b9.a4(1, 0), b9.a4(6, 4), b9.a4(1, aNi ? 1 : 0), aw.s.send(zY, b9.a8)
	}, this.aCf = function() {
		b9.a3(58), b9.a4(1, 0), b9.a4(6, 5), b9.a4(8, aw.s.aNk()), b9.a4(10, ar.aAl), b9.a4(9, ar.aCX), b9.a4(10, di), b9.a4(14, h.dj), aw.s.send(aw.s.zh, b9.a8)
	}, this.nm = function(eK) {
		b9.a3(27), b9.a4(1, 1), b9.a4(4, 0), b9.a4(22, eK), aw.s.send(aw.s.zh, b9.a8)
	}, this.nn = function(hu, il) {
		b9.a3(25), b9.a4(1, 1), b9.a4(4, 1), b9.a4(10, hu), b9.a4(10, il), aw.s.send(aw.s.zh, b9.a8)
	}, this.nr = function(hu, np) {
		b9.a3(24), b9.a4(1, 1), b9.a4(4, 2), b9.a4(10, hu), b9.a4(9, np), aw.s.send(aw.s.zh, b9.a8)
	}, this.ns = function(hu, eK) {
		b9.a3(37), b9.a4(1, 1), b9.a4(4, 3), b9.a4(10, hu), b9.a4(22, eK), aw.s.send(aw.s.zh, b9.a8)
	}, this.nv = function(lu, eK) {
		b9.a3(37), b9.a4(1, 1), b9.a4(4, 4), b9.a4(10, lu), b9.a4(22, eK), aw.s.send(aw.s.zh, b9.a8)
	}, this.nx = function(il) {
		b9.a3(15), b9.a4(1, 1), b9.a4(4, 5), b9.a4(10, il), aw.s.send(aw.s.zh, b9.a8)
	}, this.o1 = function(e0) {
		b9.a3(15), b9.a4(1, 1), b9.a4(4, 6), b9.a4(10, e0), aw.s.send(aw.s.zh, b9.a8)
	}, this.o4 = function(o3) {
		b9.a3(6), b9.a4(1, 1), b9.a4(4, 7), b9.a4(1, o3), aw.s.send(aw.s.zh, b9.a8)
	}, this.o6 = function() {
		b9.a3(5), b9.a4(1, 1), b9.a4(4, 8), aw.s.send(aw.s.zh, b9.a8)
	}, this.o8 = function(hu, eK, il) {
		b9.a3(47), b9.a4(1, 1), b9.a4(4, 10), b9.a4(10, hu), b9.a4(10, il), b9.a4(22, eK), aw.s.send(aw.s.zh, b9.a8)
	}, this.oF = function(aOr, aOs) {
		b9.a3(24), b9.a4(1, 1), b9.a4(4, 15), b9.a4(9, aOs), b9.a4(10, aOr), aw.s.send(aw.s.zh, b9.a8)
	}, this.oI = function(a4m) {
		b9.a3(14), b9.a4(1, 1), b9.a4(4, 14), b9.a4(9, a4m), aw.s.send(aw.s.zh, b9.a8)
	}, this.oM = function(aOt, target) {
		var a7, eY = aOt.length;
		for (b9.a3(14 + 9 * eY), b9.a4(1, 1), b9.a4(4, 13), b9.a4(9, target), a7 = 0; a7 < eY; a7++) b9.a4(9, aOt[a7]);
		aw.s.send(aw.s.zh, b9.a8)
	}
}

function aNS() {
	this.aOu = function() {
		b9.a3(39), b9.a4(1, 0), b9.a4(6, 16), aw.a9v.aOv(), aw.s.send(0, b9.a8)
	}, this.aOo = function(zY) {
		b9.a3(115), b9.a4(1, 0), b9.a4(6, 17), bC.rr.um(bf.dp.data[105].value, 5), bC.rr.um(bf.dp.data[106].value, 8), b9.a4(30, bf.dp.data[109].value), aw.s.send(zY, b9.a8)
	}, this.aLQ = function() {
		b9.a3(55), b9.a4(1, 0), b9.a4(6, 18), bC.rr.ul(bf.dp.data[110].value), aw.s.send(0, b9.a8)
	}, this.aLM = function(a2B) {
		var eY = a2B.p6.length;
		b9.a3(21 + 16 * eY), b9.a4(1, 0), b9.a4(6, 29), b9.a4(6, a2B.rq), b9.a4(8, eY), bB.uW.ul(a2B.p6), aw.s.send(0, b9.a8)
	}, this.aJl = function(data) {
		b9.a3(73), b9.a4(1, 0), b9.a4(6, 25), b9.a4(6, data.rq), bC.rr.um(data.qn, 5), b9.a4(30, data.rn), aw.s.send(0, b9.a8)
	}, this.aJb = function(data) {
		b9.a3(105), b9.a4(1, 0), b9.a4(6, 27), b9.a4(6, data.rq), bC.rr.um(data.qn, 5), b9.a4(30, data.rn), b9.aOX(32, data.value), aw.s.send(0, b9.a8)
	}
}

function aNT() {
	this.oN = function() {
		for (var eY = a9.je, yI = bN.result.yI, kP = yI.length, z0 = (b9.a3(17 + 16 * eY + 33 * kP), b9.a4(1, 1), b9.a4(4, 12), b9.a4(10, kP), b9.a4(1, +(2 === a9.yQ)), b9.a4(1, a9.yk % 2), ac.z0), a7 = 0; a7 < eY; a7++) b9.a4(16, z0[a7]);
		for (var gM = ac.gM, a7 = 0; a7 < kP; a7++) {
			var g6 = yI[a7];
			b9.a4(9, g6), b9.a4(24, gM[g6])
		}
		aw.s.send(aw.s.zh, b9.a8)
	}
}

function aNU() {
	this.aLF = function(s4, s5, s6) {
		b9.a3(75), b9.a4(1, 0), b9.a4(6, 21), b9.a4(6, s4), b9.a4(1, +(s5 < 0)), b9.a4(1, +(s6 < 0)), b9.a4(30, Math.abs(s5)), b9.a4(30, Math.abs(s6)), aw.s.send(0, b9.a8)
	}, this.aLG = function(s4, aLH, aLI) {
		b9.a3(18 + 16 * aLH.length + 30), b9.a4(1, 0), b9.a4(6, 22), b9.a4(6, s4), aw.a9v.aOx(aLH), b9.a4(30, aLI), aw.s.send(0, b9.a8)
	}, this.aLL = function(s4, aLH, aLI) {
		b9.a3(73), b9.a4(1, 0), b9.a4(6, 28), b9.a4(6, s4), bC.rr.um(aLH, 5), b9.a4(30, aLI), aw.s.send(0, b9.a8)
	}, this.aLJ = function(aKP, z5) {
		for (var eY = z5.length, hC = 0, a7 = 0; a7 < eY; a7++) hC += z5[a7].length;
		for (b9.a3(21 + 3 * eY + 16 * hC), b9.a4(1, 0), b9.a4(6, 23), b9.a4(3, aKP), b9.a4(4, eY), b9.a4(7, hC), a7 = 0; a7 < eY; a7++) b9.a4(3, z5[a7].length), bB.uW.ul(z5[a7]);
		aw.s.send(0, b9.a8)
	}, this.aLK = function(aKP, s5, s6) {
		b9.a3(52), b9.a4(1, 0), b9.a4(6, 24), b9.a4(3, aKP), b9.a4(1, +(s5 < 0)), b9.a4(1, +(s6 < 0)), b9.a4(20, Math.abs(s5)), b9.a4(20, Math.abs(s6)), aw.s.send(0, b9.a8)
	}
}

function aNQ() {
	this.aCE = function(zY) {
		var username = bf.dp.data[122].value.slice(0, 20),
			username = (b9.a3(22 + 16 * username.length + 18), b9.a4(1, 0), b9.a4(6, 1), b9.a4(10, di), aw.a9v.aOx(username), b6.color.a1L(bf.s.uB()));
		b9.a4(6, username[0]), b9.a4(6, username[1]), b9.a4(6, username[2]), aw.s.zg = zY, aw.s.send(zY, b9.a8)
	}, this.aBk = function(aOz, a2B) {
		bA.dU(), bA.a4(1, 0), bA.a4(6, 2), bA.a4(3, aOz), 2 === aOz ? bA.a4(2, a2B) : 3 === aOz ? bB.uY.xw(a2B, 7, bA) : 5 === aOz && (bA.a4(3, a2B.id), bA.a4(3, a2B.value), bA.a4(30, a2B.qn)), aw.s.send(aw.s.zg, bA.aP0())
	}
}

function aNR() {
	this.aNs = function(zY) {
		b9.a3(39), b9.a4(1, 0), b9.a4(6, 13), b9.a4(14, h.dj), b9.a4(4, u.id), b9.a4(7, u.f1), b9.a4(1, +a5), b9.a4(1, +a6), b9.a4(5, (new Date).getHours() % 24), aw.s.send(zY, b9.a8)
	}, this.aOn = function(zY, px, aOT) {
		b9.a3(70), b9.a4(1, 0), b9.a4(6, 14), b9.a4(3, aOT), b9.a4(30, px[0]), b9.a4(30, px[1]), aw.s.send(zY, b9.a8)
	}, this.aLD = function(id) {
		b9.a3(13), b9.a4(1, 0), b9.a4(6, 15), b9.a4(6, id), aw.s.send(0, b9.a8)
	}, this.a9w = function(id, p6) {
		var eY = Math.min(p6.length, 63);
		b9.a3(19 + 16 * eY), b9.a4(1, 0), b9.a4(6, 26), b9.a4(6, id), b9.a4(6, eY), bB.uW.ul(p6), aw.s.send(0, b9.a8)
	}, this.aP1 = function(aON, pH) {
		b9.a3(7 + 26 * pH.length), b9.a4(1, 0), b9.a4(6, 9);
		for (var a7 = 0; a7 < pH.length; a7++) b9.a4(16, pH[a7][0]), b9.a4(10, pH[a7][1]);
		aw.s.send(aON, b9.a8)
	}, this.aNy = function(aP2, aP3) {
		b9.a3(20), b9.a4(1, 0), b9.a4(6, 19), b9.a4(1, aP2), b9.a4(12, aP3), aw.s.send(aw.s.zh, b9.a8)
	}, this.aOx = function(username) {
		b9.a4(5, username.length), bB.uW.ul(username)
	}
}

function aNq() {
	var zY, aIn, aP4, aP5 = ["wss://", "/s50/", "/s51/", "/s52/"];

	function aNr() {
		aw.s.aNr(zY, aIn)
	}

	function aPA(e) {
		aw.a4m.aO0(zY, new Uint8Array(e.data))
	}

	function aPB() {}

	function aNx(e) {
		aw.s.aNx(zY, e)
	}
	this.dU = function(e0, aP6) {
		zY = e0, aIn = aP6;
		e0 = aP5[0];
		zY < aw.s.aCk ? e0 += aw.s.aNf[zY] + aP5[1 + dg] : e0 += aw.s.aNf[0] + "/i" + (1 + dg) + (zY - aw.s.aCe) + "/", (aP4 = new WebSocket(__fx.customLobby.isActive() && zY === 1 ? __fx.customLobby.getSocketURL() : e0)).binaryType =
			"arraybuffer", aP4.onopen = aNr, aP4.onmessage = aPA, aP4.onclose = aNx, aP4.onerror = aPB
	}, this.aP8 = function() {
		return aP4.readyState === aP4.CONNECTING
	}, this.aC7 = function() {
		return aP4.readyState === aP4.OPEN
	}, this.aNn = function() {
		return this.aP8() || this.aC7()
	}, this.aNo = function(aP6) {
		aIn = aP6
	}, this.aOp = function() {
		return aIn
	}, this.send = function(a8) {
		this.aC7() && aP4.send(a8)
	}, this.close = function(aNu) {
		this.aNn() && (aP4.close(aNu), this.qx())
	}, this.qx = function() {
		aP4.onopen = null, aP4.onmessage = null, aP4.onclose = null, aP4.onerror = null
	}
}

function dD() {
	var aPC = !1,
		a57 = 0,
		a1 = 0,
		rv = 0,
		gap = 0,
		canvas = null,
		wj = null,
		a0y = null;

	function aPE() {
		for (var aPK, aPI = 0, eY = 0, et = Math.floor(a1 / 2), dz = Math.floor(rv / 2), aPJ = 1.5 * Math.PI, a7 = a9.vn; 0 <= a7; a7--) eY += a0y[a7], 0 === a0y[a7] && aPI++;
		if (aPC = !1, wj.clearRect(0, 0, a1, a1), wj.fillStyle = b7.mV, wj.fillRect(0, 0, a1, a1), wj.fillStyle = b7.mY, wj.fillRect(0, 0, a1, gap), wj.fillRect(0, 0, gap, a1), wj.fillRect(a1 - gap, 0, gap, a1), wj.fillRect(0, a1 - gap, a1, gap), 0 <
			eY)
			if (aPI === a9.vn) {
				for (a7 = a9.vn; 0 <= a7; a7--)
					if (0 < a0y[a7]) {
						! function(a7, et, dz) {
							wj.fillStyle = bc.aPR[bc.k4[a7]], wj.beginPath(), wj.arc(et, et, dz, 0, 2 * Math.PI), wj.fill()
						}(a7, et, dz);
						break
					}!
				function(et) {
					var fontSize = et / 3;
					wj.font = b6.pP.rR(1, fontSize), wj.fillStyle = b7.mY, wj.fillText("100%", et, et + .1 * fontSize)
				}(et)
			} else {
				for (a7 = 0; a7 <= a9.vn; a7++) 0 < a0y[a7] && (! function(a7, et, dz, aPJ, aPK) {
					wj.fillStyle = bc.aPR[bc.k4[a7]], wj.beginPath(), wj.arc(et, et, dz, aPJ, aPK), wj.lineTo(et, et), wj.fill()
				}(a7, et, dz, aPJ, aPK = aPJ + 2 * Math.PI * a0y[a7] / eY), function(et, dz, aPJ, aPK) {
					var f0 = (aPK - aPJ) / (2 * Math.PI),
						fontSize = +dz * Math.min(f0, .37);
					fontSize < 8 || (aPJ = (aPJ + aPK) / 2, aPK = Math.floor(100 * f0 + .5) + "%", dz *= .525 - Math.max(.6 * (f0 - .7), 0), wj.font = b6.pP.rR(1, fontSize), wj.fillStyle = b7.mY, wj.fillText(aPK, et + Math.cos(aPJ) * dz, et +
						Math.cos(aPJ + 1.5 * Math.PI) * dz))
				}(et, dz, aPJ, aPK), 0 !== a7 && aPP(et, dz, aPJ), aPJ = aPK);
				aPP(et, dz, 1.5 * Math.PI)
			}!
		function(et, dz) {
			wj.beginPath(), wj.arc(et, et, dz, 0, 2 * Math.PI), wj.stroke()
		}(et, dz)
	}

	function aPP(et, dz, aPS) {
		wj.beginPath(), wj.moveTo(et, et), wj.lineTo(et + Math.cos(aPS) * dz, et + Math.cos(aPS + 1.5 * Math.PI) * dz), wj.stroke()
	}
	this.dU = function() {
		if (a9.ie) {
			a57 = 0, a0y = new Uint32Array(a9.vn + 1);
			for (var a7 = a9.vn; 0 <= a7; a7--) a0y[a7] = 0;
			for (a7 = ah.jf - 1; 0 <= a7; a7--) a0y[bc.eW[ah.jh[a7]]] += 1;
			this.resize()
		} else a0y = wj = canvas = null
	}, this.a5t = function() {
		return a1
	}, this.resize = function() {
		a9.ie && (a1 = Math.floor(u.v.r4() && !a9.m1 ? .18 * at.min : .13 * at.pR), a1 = (a1 *= 1 + (.5 + .2 * u.v.r4()) * a9.m1) + a1 % 2, rv = Math.floor(7 * a1 / 8), (canvas = canvas || document.createElement("canvas")).width = a1, canvas
			.height = a1, wj = canvas.getContext("2d", {
				alpha: !0
			}), gap = Math.max(1, .015 * a1), wj.lineWidth = gap, wj.strokeStyle = b7.mY, b6.pP.textAlign(wj, 1), b6.pP.textBaseline(wj, 1), aPE())
	}, this.a28 = function() {
		var dk, ks = this.kt();
		return bc.k4[ks] || (ks = function() {
			for (var ks = -1, a7 = a9.vn; 1 <= a7; a7--)(-1 === ks || a0y[a7] > a0y[ks]) && (ks = a7);
			return ks
		}(), dk = ac.gM[kw[0]], -1 !== ks && a0y[ks] > dk) ? a0y[ks] : dk
	}, this.zK = function() {
		return a57 = 31, this.iS(), this.kt()
	}, this.kt = function() {
		for (var ks = 0, a7 = a9.vn; 0 < a7; a7--) a0y[a7] > a0y[ks] && (ks = a7);
		return ks
	}, this.ku = function(aPG) {
		for (var g1 = 0, jh = ah.jh, eW = bc.eW, eY = ah.jf, fC = bK.fC, a7 = 0; a7 < eY; a7++) {
			var g6 = jh[a7];
			eW[g6] === aPG && (fC[g1++] = g6)
		}
		bK.f4[0] = g1
	}, this.iS = function() {
		if (a9.ie && 32 <= ++a57) {
			a57 = 0;
			for (var a7 = a9.vn; 0 <= a7; a7--) a0y[a7] = 0;
			for (a7 = ah.jf - 1; 0 <= a7; a7--) a0y[bc.eW[ah.jh[a7]]] += ac.gM[ah.jh[a7]];
			aPC = !0
		}
	}, this.lI = function() {
		a9.ie && aPC && aPE()
	}, this.tM = function() {
		a9.ie && (a9.m1 ? tN.drawImage(canvas, bY.gap, bY.gap) : tN.drawImage(canvas, bY.gap, a5u + 2 * bY.gap))
	}
}

function cw() {
	function aPU(key) {
		var aMl;
		return "undefined" == typeof URLSearchParams || (aMl = window.location.search, "string" != typeof(aMl = new URLSearchParams(aMl).get(key))) || aMl.length < 1 ? null : aMl
	}
	this.dd = function() {
		if (0 !== u.id) return !1;
		if (! function() {
				var value = aPU("account");
				if (!value && !(value = aPU("a"))) return void bE.clear();
				return bE.clear(), n.o(8, n.ro, new rp(1e3, {
					rq: 0,
					qn: value,
					rn: 0
				})), 1
			}()) {
			var value = aPU("replay");
			if (!this.clear()) return !1;
			if (!value) return !1;
			n.o(3, 0, value)
		}
		return !0
	}, this.clear = function() {
		var zU = new URL(window.location.href);
		zU.search = "";
		try {
			return history.replaceState(null, "", zU.toString()), !0
		} catch (e) {
			console.log("error 352: " + e)
		}
		return !1
	}, this.aJv = function(key, value) {
		if (0 === u.id) try {
			var zU = new URL(window.location.href),
				g6 = zU.searchParams;
			g6.set(key, value), zU.search = g6.toString(), history.replaceState(null, "", zU.toString())
		} catch (e) {
			console.log("error 358: " + e)
		}
	}
}

function cd() {
	var aPW, g;
	this.dU = function() {
		for (var a7 = (g = new Uint16Array(101)).length - 1; 0 <= a7; a7--) g[a7] = bH.dl(32768 * a7, 100);
		this.a2s(0)
	}, this.value = function(g6) {
		return g[g6]
	}, this.aH6 = function() {
		return bH.dl(aPW - 1, 2)
	}, this.a2s = function(aGl) {
		aPW = 2 * aGl % 32768 + 1
	}, this.random = function() {
		return aPW = 167 * aPW % 32768
	}, this.iv = function(lQ) {
		return bH.dl(lQ * this.random(), 32768)
	}, this.jW = function(g6) {
		return 0 !== g6 && this.random() < this.value(g6)
	}, this.iE = function(er, es) {
		return er + this.iv(es - er)
	}
}

function cs() {
	this.od = new aPX, this.a33 = new aPY, this.aEV = new aPZ, this.dU = function() {
		a9.gi || this.od.dU()
	}, this.iS = function() {
		a9.gi || (this.od.iS(), 3 !== n.ro) || bb.jb() % 15 != 5 && 2 !== a9.yT || n.aD0().aMm()
	}, this.aMp = function() {
		0 === a9.yT && aW.aCP(), a9.a2n.a3A(), a9.data.canvas = null, aw.s.close(aw.s.zh, 3257), aw.s.zh = 0, a9.data.isReplay = 1, a9.a2q()
	}, this.aMo = function(p6) {
		var a7 = p6.indexOf("=");
		return 0 <= a7 ? p6.substring(a7 + 1) : p6
	}, this.aMn = function(p6) {
		return "https://territorial.io/?replay=" + p6
	}
}

function aPX() {
	this.aPb = null, this.aPc = null, this.aPd = null, this.aPe = null, this.aPf = null, this.aPg = null, this.a32 = "";
	var aPh = 0;
	this.dU = function() {
		this.aPb = [], this.aPc = [], this.aPd = [], this.aPe = [], this.aPf = [0], this.aPg = [0], aPh = 0, this.a32 = ""
	}, this.oe = function(id, fG, fI, fK) {
		a9.gi || 2 === a9.yT || (0 === this.aPf[aPh] && (this.aPg[aPh] ? (this.aPf.push(1), this.aPg.push(0), aPh++) : this.aPf[aPh] = 1), this.aPb.push(id), this.aPc.push(fG), this.aPd.push(void 0 === fI ? 0 : fI), this.aPe.push(void 0 === fK ?
			0 : fK), this.aPg[aPh]++)
	}, this.iS = function() {
		0 === this.aPf[aPh] ? this.aPg[aPh]++ : (this.aPf.push(0), this.aPg.push(0), aPh++)
	}
}

function aPZ() {
	var aPi = 0;

	function aPm(p6, id) {
		aPi || (id ? 1 === id ? aJ.a4D = L(375) + ": " + p6 : n.o(4, 3, new p(L(376), p6, 1)) : n.o(4, 3, new p("⚠️ " + L(374), p6, 1)))
	}
	this.uq = function(p6, aPj) {
		var pH;
		return aPi = aPj, bC.rr.ui(bC.rr.ug(bC.rr.ue(p6))), aJ.a4D = "", !(! function() {
			if (bD.size < 10) aPm("File Too Small");
			else {
				var aPo = bD.oP(12),
					aP3 = (aPo !== h.rVersion && aPm("Incompatible Version " + aPo + " " + h.rVersion, 1), bD.oP(12)),
					aPp = bD.oP(31);
				if (aPp !== bD.size) aPm("Size Error: " + aPp + " " + bD.size);
				else if (function(j7, aPo) {
						for (var g6 = bD.a8, eY = bD.size, aP3 = aPo, a7 = 3; a7 < eY; a7++) aP3 = aP3 + g6[a7] & 4095;
						return aP3 === j7 || (aPm("Hash Error: " + aP3 + " " + j7 + " " + eY), !1)
					}(aP3, aPo)) return 1
			}
			return
		}() || (aPj = bD, (pH = a9.data = new a2m).mapType = aPj.oP(2), pH.mapProceduralIndex = aPj.oP(8), pH.mapRealisticIndex = aPj.oP(8), pH.mapSeed = aPj.oP(14), pH.mapName = aPj.aPr(5), 2 === pH.mapType && aPj.aPs(), pH
			.passableWater = aPj.oP(1), pH.passableMountains = aPj.oP(1), pH.playerCount = aPj.oP(10), pH.humanCount = aPj.oP(10), pH.selectedPlayer = aPj.oP(9), pH.gameMode = aPj.oP(1), pH.playerMode = aPj.oP(2), pH.battleRoyaleMode =
			aPj.oP(2), pH.numberTeams = aPj.oP(4), pH.isZombieMode = aPj.oP(1), pH.isContest = aPj.oP(1), pH.isReplay = aPj.oP(1), pH.elo = aPj.aPt(2, 14, 2), pH.colorsType = aPj.oP(1), pH.colorsPersonalized = aPj.oP(1), pH.colorsData =
			aPj.aPt(10, 18, 512), pH.selectableColor = aPj.oP(1), pH.teamPlayerCount = aPj.aPt(4, 10, 9), pH.neutralBots = aPj.oP(1), pH.botDifficultyType = aPj.oP(2), pH.botDifficultyValue = aPj.oP(4), pH.botDifficultyTeam = aPj.aPt(4,
				4, 9), pH.botDifficultyData = aPj.aPt(10, 4, 512), pH.spawningType = aPj.oP(2), pH.spawningSeed = aPj.oP(14), pH.spawningData = aPj.aPt(11, 12, 1024), pH.selectableSpawn = aPj.oP(1), pH.playerNamesType = aPj.oP(2), pH
			.playerNamesData = aPj.aPu(10, 5, 512), pH.selectableName = aPj.oP(1), pH.aIncomeType = aPj.oP(2), pH.aIncomeValue = aPj.oP(8), pH.aIncomeData = aPj.aPt(10, 8, 512), pH.tIncomeType = aPj.oP(2), pH.tIncomeValue = aPj.oP(8), pH
			.tIncomeData = aPj.aPt(10, 8, 512), pH.iIncomeType = aPj.oP(2), pH.iIncomeValue = aPj.oP(8), pH.iIncomeData = aPj.aPt(10, 8, 512), pH.sResourcesType = aPj.oP(2), pH.sResourcesValue = aPj.oP(11), pH.sResourcesData = aPj.aPt(10,
				11, 512), ! function() {
				var hf = bD,
					ur = hf.oP(5),
					aPv = hf.oP(30),
					aPw = hf.oP(30);
				if (aPv + aPw > 8 * hf.size) return void aPm("Corrupted File");
				return function(eY) {
						var aPz = new Uint8Array(eY),
							aQ0 = new Uint16Array(eY),
							aQ1 = new Uint32Array(eY),
							aQ2 = new Uint32Array(eY);
						b5.od.aPb = aPz, b5.od.aPc = aQ0, b5.od.aPd = aQ1, b5.od.aPe = aQ2;
						for (var a7 = 0; a7 < eY; a7++) {
							var id = bD.oP(4);
							aPz[a7] = id, aQ0[a7] = bD.oP(9), 0 === id ? aQ1[a7] = bD.oP(22) : 1 === id ? (aQ1[a7] = bD.oP(10), aQ2[a7] = bD.oP(10)) : 2 === id ? (aQ1[a7] = bD.oP(10), aQ2[a7] = bD.oP(9)) : 3 === id || 4 === id ? (aQ1[
								a7] = bD.oP(10), aQ2[a7] = bD.oP(22)) : 5 === id || 6 === id ? aQ1[a7] = bD.oP(10) : 7 === id ? aQ1[a7] = bD.oP(1) : 10 === id && (aQ1[a7] = bD.oP(20), aQ2[a7] = bD.oP(22))
						}
					}(aPv),
					function(eY, ur) {
						var aPf = new Uint8Array(eY),
							aPg = new Array(eY);
						aPg.fill(0), b5.od.aPf = aPf, b5.od.aPg = aPg;
						for (var a7 = 0; a7 < eY; a7++) aPf[a7] = bD.oP(1), aPg[a7] = bD.oP(ur)
					}(aPw, ur), 1
			}()) || (bD.e0 < 8 * bD.size - 13 || bD.e0 > 8 * bD.size ? (aPm("Out Of Bounds Error: " + bD.e0 + " " + 8 * bD.size), 1) : (b5.od.a32 = p6, 2 === a9.data.mapType && (aPm("Load base64 image...", 2), 1))))
	}, this.aEW = function(aE6, aPn) {
		var a1G = document.createElement("canvas"),
			hH = a1G.getContext("2d");
		if (a1G.width = aE6.width, a1G.height = aE6.height, hH.drawImage(aE6, 0, 0), aPi || aPn) return a9.yT ? void 0 : (a9.data.canvas = a1G, a9.data.mapType = 2, n.r(), void n.o(19));
		b5.aMp()
	}
}

function aPY() {
	this.xw = function() {
		var ur = function() {
				for (var aPg = b5.od.aPg, eY = aPg.length, max = 0, a7 = 0; a7 < eY; a7++) max = Math.max(max, aPg[a7]);
				return uy(Math.max(max, 1))
			}(),
			a1 = (pH = a9.data, (a1 = bA).dU(), a1.a4(12, h.rVersion), a1.e0 += 43, a1.a4(2, pH.mapType), a1.a4(8, pH.mapProceduralIndex), a1.a4(8, pH.mapRealisticIndex), a1.a4(14, pH.mapSeed), a1.aQ9(pH.mapName, 5), 2 === pH.mapType && a1.aQA(pH
				.canvas), a1.a4(1, pH.passableWater), a1.a4(1, pH.passableMountains), a1.a4(10, pH.playerCount), a1.a4(10, pH.humanCount), a1.a4(9, pH.selectedPlayer), a1.a4(1, pH.gameMode), a1.a4(2, pH.playerMode), a1.a4(2, pH
				.battleRoyaleMode), a1.a4(4, pH.numberTeams), a1.a4(1, pH.isZombieMode), a1.a4(1, pH.isContest), a1.a4(1, pH.isReplay), a1.db(pH.elo, 2, 14), a1.a4(1, pH.colorsType), a1.a4(1, pH.colorsPersonalized), a1.db(pH.colorsData, 10,
				18), a1.a4(1, pH.selectableColor), a1.db(pH.teamPlayerCount, 4, 10), a1.a4(1, pH.neutralBots), a1.a4(2, pH.botDifficultyType), a1.a4(4, pH.botDifficultyValue), a1.db(pH.botDifficultyTeam, 4, 4), a1.db(pH.botDifficultyData, 10,
				4), a1.a4(2, pH.spawningType), a1.a4(14, pH.spawningSeed), a1.db(pH.spawningData, 11, 12), a1.a4(1, pH.selectableSpawn), a1.a4(2, pH.playerNamesType), a1.aQB(pH.playerNamesData, 10, 5), a1.a4(1, pH.selectableName), a1.a4(2, pH
				.aIncomeType), a1.a4(8, pH.aIncomeValue), a1.db(pH.aIncomeData, 10, 8), a1.a4(2, pH.tIncomeType), a1.a4(8, pH.tIncomeValue), a1.db(pH.tIncomeData, 10, 8), a1.a4(2, pH.iIncomeType), a1.a4(8, pH.iIncomeValue), a1.db(pH
				.iIncomeData, 10, 8), a1.a4(2, pH.sResourcesType), a1.a4(11, pH.sResourcesValue), a1.db(pH.sResourcesData, 10, 11), ! function(ur) {
				var a1 = bA,
					aPb = b5.od.aPb,
					fG = b5.od.aPc,
					fI = b5.od.aPd,
					fK = b5.od.aPe,
					eY = aPb.length;
				a1.a4(5, ur), a1.a4(30, eY), a1.a4(30, b5.od.aPg.length);
				for (var a7 = 0; a7 < eY; a7++) {
					var et = aPb[a7];
					a1.a4(4, et), a1.a4(9, fG[a7]), 0 === et ? a1.a4(22, fI[a7]) : 1 === et ? (a1.a4(10, fI[a7]), a1.a4(10, fK[a7])) : 2 === et ? (a1.a4(10, fI[a7]), a1.a4(9, fK[a7])) : 3 === et || 4 === et ? (a1.a4(10, fI[a7]), a1.a4(22, fK[
						a7])) : 5 === et || 6 === et ? a1.a4(10, fI[a7]) : 7 === et ? a1.a4(1, fI[a7]) : 10 === et && (a1.a4(20, fI[a7]), a1.a4(22, fK[a7]))
				}
			}(ur), ! function(ur) {
				for (var a1 = bA, aPf = b5.od.aPf, aPg = b5.od.aPg, eY = aPf.length, a7 = 0; a7 < eY; a7++) a1.a4(1, aPf[a7]), a1.a4(ur, aPg[a7])
			}(ur), bA.e0),
			pH = bH.dl(a1 - 1, 6) + 1,
			ur = (b9.aOY(6 * pH) !== bA.g.length && bA.g.push(0), ! function() {
				var a1 = bA;
				a1.e0 = 24, a1.a4(31, a1.g.length), a1.e0 = 12, a1.a4(12, function() {
					for (var g = bA.g, eY = g.length, aP3 = h.rVersion, a7 = 3; a7 < eY; a7++) aP3 = aP3 + g[a7] & 4095;
					return aP3
				}())
			}(), bD.dU(bA.g), bB.rr.rs(bB.rr.rt(pH)));
		return bD.zo(), bA.dU(), ur
	}
}

function ci() {
	var et, bo = !1,
		aQD = !1,
		aQE = -1e4,
		aQF = -1,
		aQG = 0;

	function resize(aQK) {
		et = 0, aX.sC() && (aQI(aQK) || bo) && (bo = !1, bY.resize(), bS.a9W.resize(), aU.dU(), bU.dU(), aV.resize(), aP.resize(), aK.resize(), n.resize(), 1 <= a9.yT ? (aR.resize(!1), aQ.resize(), aS.resize(), aO.resize(), aN.resize(), aJ.resize(),
			aI.resize(), b8.resize(), aq.resize(), aL.resize(), aM.resize(), aH.resize(), ba.resize(), ab.resize(), aT.resize(), bd.resize(), aO.a6v()) : (aW.aCR(), aW.aCS()), bb.dc = !0)
	}

	function aQH(f0) {
		return f0 && 128 < f0 ? Math.floor(f0) : 128
	}

	function aQI(aQK) {
		var a1, j7, aQM, rv, a6K;
		if (!(0 < at.rY)) return rv = aQH(document.documentElement.clientWidth), a6K = aQH(window.visualViewport && 2 !== u.id ? window.visualViewport.height : document.documentElement.clientHeight), a1 = rv, j7 = a6K, aQM = 0 !== u.id || a1 < j7 ?
			700 : 1200, aQM = Math.min(aQM / ((a1 + j7) / 2), 1), aQM = 0 === bf.dp.data[1].value ? 2 * aQM / 3 : Math.min(aQM + (bf.dp.data[1].value - 1) * (1 - aQM) / 2, 1), at.pV = (window.devicePixelRatio || 1) * aQM, __fx.hoveringTooltip
			.canvasPixelScale = at.pV, aQK && !aQD ? (aQD = !0, document.body.removeChild(zx)) : aQD && (aQD = !1, document.body.appendChild(zx)), a1 = Math.floor(.5 + rv * at.pV), j7 = Math.floor(.5 + a6K * at.pV), a1 !== at.a1 || j7 !== at.j7 ?
			(at.a1 = a1, at.j7 = j7, at.min = a9A(a1, j7), at.max = a4S(a1, j7), at.pR = bH.dl(a1 + j7, 2), at.tJ = a1 / j7, zx.width = a1, zx.height = j7, zx.style.width = rv + "px", zx.style.height = a6K + "px", aQF = bb.lo + 1e3, 1) : void 0
	}
	this.a1 = 0, this.j7 = 0, this.min = 0, this.max = 0, this.pR = 0, this.tJ = 1, this.pV = 1, this.rY = 0, this.dV = function() {
		this.a1 = aQH(document.documentElement.clientWidth) + 2, this.j7 = aQH(document.documentElement.clientHeight) + 2
	}, this.dU = function() {
		et = 1, zx = document.getElementById("canvasA"), (tN = zx.getContext("2d", {
			alpha: __fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aQI(0)
	}, this.iS = function() {
		ay.iS(), 50 <= ++et && resize(0), -1 === aQF || bb.lo < aQF || (aQF = -1, 2e3 * ++aQG >= bb.lo + 8e3 ? console.log("error 3748") : u.v.setState(15))
	}, this.df = function(hU) {
		bo = !0, resize(hU)
	}, this.a0d = function() {
		aQE + 1e3 > bb.lo || (aQE = bb.lo, resize(0))
	}
}

function dA() {
	this.aOm = new aQO, this.zF = new aQP
}

function aQP() {
	this.zG = function() {
		for (var g6, eY = ah.jf, yH = ah.jh, z0 = ac.z0, aQQ = this.aDp(), a7 = 0; a7 < eY; a7++) g6 = yH[a7], aY.zJ(g6) && (z0[g6] = aQQ);
		var ok = ac.ok,
			ia = ac.ia,
			ib = ac.ib,
			yz = ac.yz,
			eY = a9.je;
		for (a7 = 0; a7 < eY; a7++)(0 === yz[a7] || ib[a7] < 1 || 2 * ok[a7] > 3 * (ia[a7] + ib[a7])) && (z0[a7] = 0);
		var zD = 0;
		for (a7 = 0; a7 < eY; a7++) zD += 0 < z0[a7];
		return zD
	}, this.aDp = function() {
		return Math.min(65535, bb.jb())
	}
}

function aQO() {
	function aQU(g, f0, k3) {
		for (var a7 = 0; a7 < 256; a7++) g[a7] = (g[a7] + (f0 >> (a7 + k3) % 30 & 1)) % 256
	}
	this.iS = function(aQR, aQS) {
		var g = new Uint8Array(256);
		return function(g, aQR, aQS) {
				var a7, aQW = 3 + (4 + aQR) % 32768,
					aQX = 12 + aQS % 32768,
					aQY = 17 + ((aQR & aQS) + (aQR | aQS) + aQR) % 32768;
				for (a7 = 0; a7 < 256; a7++) aQW = 1 + aQW * aQX % aQY, g[a7] = aQW % 256
			}(g, aQR, aQS), aQU(g, aQR, 2), aQU(g, aQS, 7),
			function(g) {
				var a7, f0, e0 = 0;
				for (a7 = 0; a7 < 3e4; a7++) f0 = g[e0], g[e0] = (f0 + a7 + g[(e0 + a7) % 256]) % 256, e0 = (f0 + a7 + e0 + (f0 & e0)) % 256
			}(g),
			function(g) {
				var a7, a6K = 1,
					sY = 1;
				for (a7 = 0; a7 < 256; a7 += 2) a6K = (1 + a6K) * (g[a7] + 1) % 1073741824, sY = (1 + sY) * (g[a7 + 1] + 1) % 1073741824;
				return [a6K, sY]
			}(g)
	}
}

function cf() {
	var aQZ, aQa, h1, aQb;
	this.dU = function() {
		var a7, ef, eh, aOy, aQc, a1, j7, wj, hE, v8, f0, g6, eo, er, a3c;
		if (function() {
				if (h1 = !0, aQb = "rgb(" + bO.v6[0] + "," + bO.v6[1] + "," + bO.v6[2] + ")", bO.aGt(bO.eE)) return 1;
				return h1 = !1, 0
			}()) aQa = null;
		else {
			for (aQZ = bH.dl(96, 4), aQc = 1 === bO.eE ? (aOy = 0, 160) : (aOy = 128, 32), aQb = "rgb(" + aOy + "," + aOy + "," + aOy + ")", aQa = new Array(4), a7 = 3; 0 <= a7; a7--) {
				if (aQa[a7] = document.createElement("canvas"), a1 = a7 % 2 == 0 ? bO.ej : aQZ, j7 = a7 % 2 == 0 ? aQZ : bO.ek + 2 * aQZ, aQa[a7].width = a1, aQa[a7].height = j7, v8 = (hE = (wj = aQa[a7].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, a1, j7)).data, a7 % 2 == 0)
					for (eh = aQZ - 1; 0 <= eh; eh--)
						for (f0 = aQc + Math.floor((eh + 1) * (aOy - aQc) / (aQZ + 1)), ef = a1 - 1; 0 <= ef; ef--) v8[g6 = 4 * ((0 === a7 ? aQZ - eh - 1 : eh) * a1 + ef)] = f0, v8[g6 + 1] = f0, v8[g6 + 2] = f0, v8[g6 + 3] = 255;
				else {
					for (ef = aQZ - 1; 0 <= ef; ef--)
						for (f0 = aQc + Math.floor((ef + 1) * (aOy - aQc) / (aQZ + 1)), eh = j7 - 1 - aQZ; aQZ <= eh; eh--) v8[g6 = 4 * (eh * a1 + (3 === a7 ? aQZ - ef - 1 : ef))] = f0, v8[g6 + 1] = f0, v8[g6 + 2] = f0, v8[g6 + 3] = 255;
					for (er = 1; 0 <= er; er--)
						for (ef = aQZ - 1; 0 <= ef; ef--)
							for (eh = aQZ - 1; 0 <= eh; eh--) eo = (Math.pow(ef * ef + eh * eh, .5) + 1) / (aQZ + 1), f0 = aQc + Math.floor((1 < eo ? 1 : eo) * (aOy - aQc)), v8[g6 = 4 * ((0 === er ? aQZ - eh - 1 : eh + er * (j7 - aQZ)) * a1 + (
								1 === a7 ? ef : aQZ - ef - 1))] = f0, v8[g6 + 1] = f0, v8[g6 + 2] = f0, v8[g6 + 3] = 255
				}
				wj.putImageData(hE, 0, 0)
			}
			a3c = aQc, bO.v1.fillStyle = "rgb(" + a3c + "," + a3c + "," + a3c + ")", bO.v1.fillRect(0, 0, bO.ej, 1), bO.v1.fillRect(0, bO.ek - 1, bO.ej, 1), bO.v1.fillRect(0, 0, 1, bO.ek), bO.v1.fillRect(bO.ej - 1, 0, 1, bO.ek)
		}
	}, this.wd = function() {
		var er = h1 ? 0 : -aQZ;
		aIW(er, er, bO.ej - 2 * er, bO.ek - 2 * er, bW.aQf, bW.aQg, bW.aQh, bW.aQi) || (tN.fillStyle = aQb, tN.fillRect(0, 0, at.a1, at.j7))
	}, this.tM = function() {
		h1 || (aIV(0, -aQZ, bO.ej, aQZ, bW.aQf, bW.aQg, bW.aQh, bW.aQi) && tN.drawImage(aQa[0], bW.aQj, bW.aQk - aQZ), aIV(bO.ej, -aQZ, aQZ, bO.ek + 2 * aQZ, bW.aQf, bW.aQg, bW.aQh, bW.aQi) && tN.drawImage(aQa[1], bW.aQj + bO.ej, bW.aQk - aQZ),
			aIV(0, bO.ek, bO.ej, aQZ, bW.aQf, bW.aQg, bW.aQh, bW.aQi) && tN.drawImage(aQa[2], bW.aQj, bW.aQk + bO.ek), aIV(-aQZ, -aQZ, aQZ, bO.ek + 2 * aQZ, bW.aQf, bW.aQg, bW.aQh, bW.aQi) && tN.drawImage(aQa[3], bW.aQj - aQZ, bW.aQk - aQZ))
	}
}

function cz() {
	this.h2 = new aQl, this.aDn = new aQm, this.wg = new aQn, this.s = new aQo, this.i4 = new aQp, this.a3c = new aQq, this.aQr = new aQs, this.jS = new aQt, this.kK = new aQu, this.aQv = new aQw, this.dU = function() {
		this.wg.dU(), this.s.dU(), this.i4.dU(), this.a3c.dU(), this.aQv.dU()
	}, this.tM = function() {
		this.aQv.tM(), this.wg.tM()
	}
}

function aQt() {
	this.iS = function(player) {
		var oa;
		return !!a9.data.passableWater && 0 !== ac.gF[player].length && bJ.s.ob !== bJ.s.jv && !((oa = bJ.s.oa[player]) >= aA.jv[aA.im[player]] || oa === bJ.s.oo || !b6.fu.oi(player, aA.jt[aA.im[player]], 32, 0) || !aj.iH.iS(player) && !aj.iJ.iS(
			player) || ! function(a1o) {
			var aQz = bK.fA[1] + bI.hJ[bK.fA[2] - 1] << 2;
			if (aY.eP(aQz)) return 1;
			return aQz = aY.eQ(aQz), a1o !== aQz && !!eR(a1o, aQz)
		}(player)) && function(player) {
			return b6.fu.ol(player), bJ.s.or(player), !0
		}(player)
	}
}

function aQl() {
	function aR7(a7, kk, kl) {
		var aR9, aR8;
		if (!(a7 < 0)) return aR8 = bJ.s.lx[a7], aR9 = bI.hi(aR8), aR8 = bI.hl(aR8), a7 = 20 * (.9 + .1 * Math.log10(bJ.s.a4l[a7])), a7 = Math.max(a7, bI.hy(b6.pP.s9(.02, 1.7))), bH.aId(bI.hh(kk), bI.hk(kl), aR9, aR8, a7)
	}

	function aR1(aR0) {
		var aRC = 4 + .03 * (1 + 1.5 * u.v.r4()) * at.pR / hw;
		return bI.hm(aR0, bK.fA[1]) < aRC
	}
	this.h3 = function(player, aR0) {
		return !!(a9.data.passableWater && bI.hz(aR0) && bJ.s.ob !== bJ.s.jv && bJ.s.oa[player] !== bJ.s.oo && 0 !== ac.gF[player].length && bJ.kK.kL(player, aR0) && aR1(aR0))
	}, this.nu = function(player, lu, aR0) {
		return !!(bI.hz(aR0) && this.os(player, lu) && bJ.kK.ot(aR0) && aR1(aR0))
	}, this.os = function(player, id) {
		for (var aR2, s5 = player << 3, s6 = s5 + bJ.s.oa[player], aR3 = bJ.s.aR3, aR4 = bJ.s.aR4, a7 = s5; a7 < s6; a7++)
			if (id === aR4[aR2 = aR3[a7]]) return bK.fA[3] = aR2, !0;
		return !1
	}, this.nt = function(eK) {
		var a3d = bJ.a3c.a3d;
		return !!this.os(a9.eI, a3d) && (b4.gv.nt(a3d, eK), !0)
	}, this.a3f = function(kk, kl) {
		var player = a9.eI,
			eY = bJ.s.oa[player];
		if (0 === eY) return !1;
		for (var aR3 = bJ.s.aR3, lx = bJ.s.lx, s5 = player << 3, aR5 = 80, aKe = -1, a7 = s5 + eY - 1; s5 <= a7; a7--) {
			var aR6 = aR3[a7],
				eo = bI.hc(kk, kl, lx[aR6]);
			eo < aR5 && (aR5 = eo, aKe = aR6)
		}
		return !!aR7(aKe, kk, kl) && (bJ.a3c.a3d = bJ.s.aR4[aKe], bi.oq.a3f(), !0)
	}, this.a3m = function(kk, kl) {
		var eY = bJ.s.ob;
		if (eY < 1) return -1;
		for (var lx = bJ.s.lx, aR5 = 80, aKe = -1, a7 = 0; a7 < eY; a7++) {
			var eo = bI.hc(kk, kl, lx[a7]);
			eo < aR5 && (aR5 = eo, aKe = a7)
		}
		return aR7(aKe, kk, kl) ? aKe : -1
	}, this.lw = function(player, id) {
		for (var s5 = player << 3, s6 = s5 + bJ.s.oa[player], aR4 = bJ.s.aR4, aR3 = bJ.s.aR3, a7 = s5; a7 < s6; a7++) {
			var aR6 = aR3[a7];
			if (aR4[aR6] === id) return aR6
		}
		return -1
	}, this.aDk = function(player) {
		for (var s5 = player << 3, s6 = s5 + bJ.s.oa[player], aR3 = bJ.s.aR3, a4l = bJ.s.a4l, im = 0, a7 = s5; a7 < s6; a7++) im += a4l[aR3[a7]];
		return im
	}, this.m2 = function(player) {
		return 0 === bJ.s.oa[player] ? -1 : bJ.s.aR3[player << 3]
	}
}

function aQm() {
	this.aDo = function(player) {
		for (var aR3 = bJ.s.aR3, s5 = player << 3, a7 = s5 + bJ.s.oa[player] - 1; s5 <= a7; a7--) this.aRD(aR3[a7])
	}, this.aRD = function(aRE) {
		var s = bJ.s,
			aRF = s.ob - 1,
			aRG = s.a4k[aRE],
			aRH = s.aRI[aRE],
			aRJ = s.lx[aRE];
		s.ob = aRF, s.a4k[aRE] = s.a4k[aRF], s.aRK[aRE] = s.aRK[aRF], s.aRL[aRE] = s.aRL[aRF], s.lx[aRE] = s.lx[aRF], s.aRM[aRE] = s.aRM[aRF], s.a4l[aRE] = s.a4l[aRF], s.aRI[aRE] = s.aRI[aRF], s.aR4[aRE] = s.aR4[aRF], s.aRN[aRE] = s.aRN[aRF], s
			.aRO[aRE] = s.aRO[aRF], s.aRP[aRE] = s.aRP[aRF], s.aR3[s.a4k[aRE]] = aRE,
			function(aPS) {
				var player = aPS >> 3,
					s = bJ.s,
					eY = s.oa[player] - 1,
					aRS = (player << 3) + eY;
				s.oa[player] = eY, aRS !== aPS && (s.aR3[aPS] = s.aR3[aRS], s.a4k[s.aR3[aPS]] = aPS)
			}(aRG), bJ.i4.i4[bI.i3(s.lx[aRE])][s.aRI[aRE]] = aRE, aRF = bI.i3(aRJ), aRG = aRH, aRF = bJ.i4.i4[aRF], s = aRF.pop(), aRG !== aRF.length && (aRF[aRG] = s, bJ.s.aRI[s] = aRG)
	}
}

function aQn() {
	var aRU, x7 = 8,
		aRV = new Array(2);

	function aRW(e0) {
		var hB = x7 + 4,
			a1G = b6.pP.ux(hB, hB),
			hH = b6.pP.getContext(a1G, !0),
			hE = b6.pP.getImageData(hH, hB, hB),
			v8 = hE.data;
		return aRX(v8, hB + 1, e0), aRX(v8, hB + 2, e0), aRX(v8, 2 * hB + 1, e0), aRX(v8, 2 * hB - 3, e0), aRX(v8, 2 * hB - 2, e0), aRX(v8, 3 * hB - 2, e0), aRX(v8, hB * (hB - 3) + 1, e0), aRX(v8, hB * (hB - 2) + 1, e0), aRX(v8, hB * (hB - 2) + 2,
			e0), aRX(v8, hB * (hB - 2) - 2, e0), aRX(v8, hB * (hB - 1) - 3, e0), aRX(v8, hB * (hB - 1) - 2, e0), hH.putImageData(hE, 0, 0), a1G
	}

	function aRX(v8, eK, e0) {
		eK *= 4;
		v8[eK] = 255, v8[1 + eK] = 255, v8[2 + eK] = e0, v8[3 + eK] = 255
	}

	function ux(player) {
		var a1G = b6.pP.ux(x7, x7);
		return function(hH, player) {
			var ef, eh, hg, eK, aRZ, aRa, hB = x7,
				hE = b6.pP.getImageData(hH, hB, hB),
				v8 = hE.data,
				kP = (hB >> 1) - .5,
				aQb = aY.a5J(player),
				aRc = b6.pZ.a0r(aQb, .5);
			b6.pZ.a0t(aQb, aRc, 300) || b6.pZ.a0v(aQb, 100);
			for (eh = 0; eh < hB; eh++)
				for (ef = 0; ef < hB; ef++) aRa = (hB - 1.5) * (hB - 1.5) / 4, aRZ = (hg = (hg = ef - kP) * hg + (hg = eh - kP) * hg) <= (hB - 4.5) * (hB - 4.5) / 4 ? aRc : aQb, v8[eK = 4 * (eh * hB + ef)] = aRZ[0], v8[1 + eK] = aRZ[1], v8[2 +
					eK] = aRZ[2], v8[3 + eK] = aRa < hg ? 0 : 255;
			hH.putImageData(hE, 0, 0)
		}(b6.pP.getContext(a1G, !0), player), a1G
	}
	this.dU = function() {
		aRU = new Array(a9.eV), aRV[0] = aRW(255), aRV[1] = aRW(0)
	}, this.tM = function() {
		var a7, player, aRd, aIe, im, hf, aRf, aRh, aRi, lx = bJ.s.lx,
			a4k = bJ.s.a4k,
			a4l = bJ.s.a4l,
			aRO = bJ.s.aRO,
			aRj = aRU,
			aRk = a9.eI,
			aRl = -1,
			eY = bJ.s.ob,
			aRm = at.a1,
			aRn = at.j7,
			aRo = bO.ej << 4,
			eN = hw,
			eC = eN / x7,
			ly = hv / eN,
			lz = hx / eN,
			hg = (aRm + hv) / eN - ly,
			hj = (aRn + hx) / eN - lz,
			hH = tN;
		for (bJ.h2.os(a9.eI, bJ.a3c.a3d) && (aRl = bK.fA[3]), hH.imageSmoothingEnabled = eN < 9, b6.pP.textAlign(hH, 1), b6.pP.textBaseline(hH, 1), a7 = 0; a7 < eY; a7++) player = a4k[a7] >> 3, im = a4l[a7], aRd = .9 + .1 * Math.log10(im), aIe =
			(hf = lx[a7]) % aRo / 16 - aRd, hf = aRn * (Math.floor(hf / aRo) / 16 - aRd - lz) / hj, aRf = -2 * (aRi = eN * aRd) * (1 + (aRh = +(player === aRk)) / 8), aRh = aRh * aRi / 4, (aRi = aRm * (aIe - ly) / hg) < aRf || hf < aRf || aRm +
			aRh < aRi || aRn + aRh < hf || (aIe = 2 * aRd * eC, aRf = aRd * eN, void 0 === (aRh = aRj[player]) && (aRj[player] = aRh = ux(player)), player === aRk && (hH.setTransform(aIe, 0, 0, aIe, aRi - 2 * aIe, hf - 2 * aIe), hH.drawImage(aRV[
				+(a7 === aRl)], 0, 0)), hH.setTransform(aIe, 0, 0, aIe, aRi, hf), hH.drawImage(aRh, 0, 0), (aRd = Math.floor(function(im) {
				if (im < 1e3) return .42;
				if (im < 1e4) return .34;
				if (im < 1e6) return .26;
				if (im < 1e8) return .19;
				return .15
			}(im) * aRf)) < 6) || (hH.setTransform(1, 0, 0, 1, 0, 0), hH.fillStyle = aRO[a7] ? b7.n5 : b7.mY, hH.font = b6.pP.rR(1, aRd), hH.fillText(b6.z3.xl(im), aRi + aRf, hf + aRf + .1 * aRd));
		hH.imageSmoothingEnabled = !1, hH.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aQw() {
	var a1G;
	this.dU = function() {
		a1G = a1G || bL.s.aRr(20, bc.aRs[7])
	}, this.tM = function() {
		var mI = hw;
		if (!(5 <= mI)) {
			var aRm = at.a1,
				aRn = at.j7,
				ly = hv / mI,
				lz = hx / mI,
				mB = (aRm + hv) / mI,
				mC = (aRn + hx) / mI,
				g7 = -20 * mI,
				aRt = .5 * g7,
				aRo = bO.ej << 4,
				eY = bJ.s.ob,
				lx = bJ.s.lx,
				aRu = a1G,
				hH = tN;
			3 < mI && (hH.globalAlpha = .5 * (5 - mI));
			for (var a7 = 0; a7 < eY; a7++) {
				var hf = lx[a7],
					ef = aRm * (hf % aRo / 16 - ly) / (mB - ly) + aRt,
					hf = aRn * (Math.floor(hf / aRo) / 16 - lz) / (mC - lz) + aRt;
				aRm < ef || aRn < hf || ef < g7 || hf < g7 || (hH.setTransform(mI, 0, 0, mI, ef, hf), hH.drawImage(aRu, 0, 0))
			}
			hH.globalAlpha = 1, hH.setTransform(mI, 0, 0, mI, 0, 0)
		}
	}
}

function aQs() {
	this.iS = function() {
		for (var aR8, aQr, aRN = bJ.s.aRN, lx = bJ.s.lx, aRL = bJ.s.aRL, a7 = bJ.s.ob - 1; 0 <= a7; a7--) aR8 = lx[a7], 0 !== (aQr = aRN[a7]) && aR8 === aRL[a7] && (! function(a7, aRy, hT) {
			var il, player = bJ.s.a4k[a7] >> 3,
				hT = aRy + bI.hJ[hT] << 2,
				a7 = bJ.s.a4l[a7];
			if (bZ.aRz(player), aY.eP(hT)) il = a9.eV;
			else {
				if ((il = aY.eQ(hT)) === player) return hT = b6.fu.fx(player, a7), bZ.fy(player, a7 - hT, 12);
				if (!eR(player, il)) return b4.jj.oA(player, il, a7)
			}
			aZ.iz(player, il) || aZ.jI(player) ? (ac.g0[player].push(aRy << 2), aZ.ii(player, a7, il), aB.ij(player, !0)) : bZ.fy(player, a7, 12)
		}(a7, bI.i2(aR8), aQr - 1), bJ.aDn.aRD(a7))
	}, this.aS0 = function(player, eK, hT, lu) {
		if (0 !== hT) {
			var aRk = a9.eI;
			if (b6.fu.gl(aRk) && eR(player, aRk) && player !== aRk && 0 !== ac.gF[aRk].length) {
				var aQz = eK + bI.hJ[--hT] << 2;
				if (aY.eP(aQz) || eR(player, aY.eQ(aQz))) {
					for (var em = !1, a7 = 0; a7 < 4; a7++)
						if (aQz = eK + bI.hJ[a7] << 2, aY.eT(aQz) && !aY.eP(aQz) && aY.eQ(aQz) === aRk) {
							em = !0;
							break
						} em && (aJ.a3e(719, 0), aJ.yr(180, L(377, [ac.z1[player]]), 719, player, b7.n4, b7.mV, -1, !0, void 0, {
						es: 1,
						lu: lu
					}))
				}
			}
		}
	}
}

function aQo() {
	this.aS1 = null, this.jv = 512, this.oo = 8, this.ob = 0, this.aS2 = 0, this.a4k = new Uint16Array(this.jv), this.aRK = new Uint32Array(this.jv), this.aRL = new Uint32Array(this.jv), this.lx = new Uint32Array(this.jv), this.aRM = new Uint16Array(
			this.jv), this.a4l = new Uint32Array(this.jv), this.aRI = new Uint16Array(this.jv), this.aR4 = new Uint16Array(this.jv), this.aRN = new Uint8Array(this.jv), this.aRO = new Uint8Array(this.jv), this.aRP = new Uint32Array(this.jv), this
		.oa = new Uint8Array(a9.eV), this.aR3 = new Uint16Array(this.oo * a9.eV), this.dU = function() {
			this.aS2 = 0, this.ob = 0, this.aS1 = new Uint8Array(bO.ej + bO.ek), this.oa.fill(0)
		}, this.or = function(player) {
			var eY = this.ob,
				aS3 = bI.i1(bK.fA[0]),
				aS4 = this.oa[player],
				aS5 = (player << 3) + aS4,
				im = (this.a4k[eY] = aS5, this.aRK[eY] = aS3, this.lx[eY] = aS3, this.aRL[eY] = bI.i1(bK.fA[1]), this.aRM[eY] = 0, bK.f6[0]);
			im < 60 ? (b6.fu.fv(player, 60 - im), this.a4l[eY] = 60) : this.a4l[eY] = im, this.aRI[eY] = bJ.i4.or(eY, bI.i3(aS3)), this.aR4[eY] = this.aS2, this.aRN[eY] = bK.fA[2], this.aRO[eY] = 0, this.aRP[eY] = 0, this.aS2 = this.aS2 + 1 & 1023,
				this.aR3[aS5] = eY, this.oa[player] = aS4 + 1, this.ob++, bJ.aQr.aS0(player, bK.fA[1], bK.fA[2], this.aR4[eY])
		}, this.nt = function() {
			var aR2 = bK.fA[3];
			this.aRK[aR2] = this.lx[aR2], this.aRL[aR2] = bI.i1(bK.fA[1]), this.aRM[aR2] = 0, this.aRN[aR2] = bK.fA[2], bJ.aQr.aS0(this.a4k[aR2] >> 3, bK.fA[1], bK.fA[2], this.aR4[aR2])
		}, this.iS = function() {
			bJ.aQr.iS();
			var a7, g6 = a9.eI,
				dk = bJ.h2.aDk(g6),
				rI = (! function(rI) {
					var a7, aSA, aSB, aSC, aSD, aS3, aSH, aSI, eb, g7, aRK = rI.aRK,
						aRL = rI.aRL,
						lx = rI.lx,
						a4l = rI.a4l,
						aRO = rI.aRO,
						aRM = rI.aRM,
						aRI = rI.aRI,
						gM = ac.gM,
						a4k = rI.a4k,
						rI = rI.ob,
						aRo = bO.ej << 4;
					for (a7 = rI - 1; 0 <= a7; a7--) aSB = lx[a7], aSA = aRL[a7], aSB !== aSA && (aS3 = aRK[a7], aSH = aSA % aRo - (aSD = aS3 % aRo), aSI = ~~((aSA + .5) / aRo) - (aS3 = ~~((aS3 + .5) / aRo)), eb = ~~Math.sqrt(aSH * aSH + aSI *
						aSI + .5), g7 = 15e4 + 25e3 * bH.log10(a4l[a7]), g7 += 5e4 * !gM[a4k[a7] >> 3], aRO[a7] && (g7 = bH.dl(g7, 5)), 65535 <= (g7 = aRM[a7] + Math.max(~~((g7 + .5) / eb), 1)) ? lx[a7] = aSC = aSA : (aRM[a7] = g7, lx[
						a7] = aSC = aSD + bH.dl(g7 * aSH, 65536) + aRo * (aS3 + bH.dl(g7 * aSI, 65536))), aRI[a7] = bJ.i4.aSK(aRI[a7], aSB, aSC))
				}(this), ! function(rI) {
					if (bb.jb() % 2 == 1) {
						var a7, k3, kP, es, et, aSL, xR, aSM, gy, hN, ly, lz, aS3, aSN, aSO, aSP, vG, eY = rI.ob,
							lx = rI.lx,
							a4k = rI.a4k,
							a4l = rI.a4l,
							aRP = rI.aRP,
							aRO = rI.aRO,
							i4 = bJ.i4.i4,
							aSR = i4.length,
							aSS = bJ.i4.aSS,
							aRo = bO.ej << 4,
							aST = a9.ie,
							aPG = bc.eW,
							g7 = (eY - 1) * (bH.dl(bb.jb(), 2) % 2);
						for (a7 = 0; a7 < eY; a7++)
							for (k3 = Math.abs(a7 - g7), aS3 = lx[k3], kP = bI.i3(aS3), gy = a4k[k3] >> 3, ly = aS3 % aRo, lz = ~~((aS3 + .5) / aRo), aSP = a4l[k3], es = 0; es < 9; es++)
								if (!((aSL = kP + aSS[es]) < 0 || aSR <= aSL))
									for (aSM = i4[aSL], xR = aSM.length, et = 0; et < xR; et++) aSN = aSM[et], vG = a4k[aSN] >> 3, gy == vG || aST && aPG[gy] === aPG[vG] && aPG[gy] || (vG = lx[aSN], (hN = ly - vG % aRo) * hN + (hN = lz - ~~((vG +
										.5) / aRo)) * hN < 14400 && ((vG = a4l[aSN]) <= aSP ? aSO = Math.max(1, bH.dl(vG + bH.dl(aSP - vG, 10), 10)) : (aSO = Math.max(1, bH.dl(aSP, 10)), aRP[aSN] = Math.min(aRP[aSN] + aSO, 4294967295)),
										a4l[aSN] = Math.max(vG - aSO, 0), aRO[aSN] = 4))
					}
				}(this), ! function(rI) {
					if (bb.jb() % 5 == 3) {
						var a7, im, a4l = rI.a4l,
							gM = ac.gM,
							a4k = rI.a4k,
							aRP = rI.aRP,
							aRO = rI.aRO,
							eY = rI.ob;
						for (a7 = 0; a7 < eY; a7++) im = a4l[a7], gM[a4k[a7] >> 3] ? a4l[a7] = Math.max(im - Math.max(1, im >> 7), 0) : (a4l[a7] = Math.max(im - Math.max(1, im >> 11), 0), aRO[a7] || (im = aRP[a7]) && (im = Math.max(im >> 3, 1),
							a4l[a7] = Math.min(a4l[a7] + (im << 1), 4294967295), aRP[a7] -= im))
					}
				}(this), this),
				a4l = rI.a4l,
				aRO = rI.aRO;
			for (a7 = rI.ob - 1; 0 <= a7; a7--) aRO[a7] = aRO[a7] >> 1, 0 === a4l[a7] && bJ.aDn.aRD(a7);
			bZ.fy(g6, dk - bJ.h2.aDk(g6), 15)
		}
}

function aQp() {
	this.aSU = 32, this.ef = 0, this.eh = 0, this.i5 = 0, this.aSV = 0, this.aSW = 4, this.i4 = null, this.aSS = new Int16Array(9), this.dU = function() {
		this.i5 = 1 + bH.dl(bO.ej - 1, this.aSU), this.aSV = 1 + bH.dl(bO.ek - 1, this.aSU), this.i4 = new Array(this.i5 * this.aSV), b6.pZ.a0q(this.i4);
		var ef, eh, aSS = this.aSS,
			a1 = this.i5;
		for (ef = -1; ef <= 1; ef++)
			for (eh = -1; eh <= 1; eh++) aSS[3 * (1 + eh) + 1 + ef] = eh * a1 + ef
	}, this.or = function(aSY, a7) {
		return this.i4[a7].push(aSY), this.i4[a7].length - 1
	}, this.aSK = function(aSZ, aS3, aSA) {
		var aSa, aSb, aS3 = bI.i3(aS3),
			aSA = bI.i3(aSA);
		return aS3 === aSA ? aSZ : (aSa = this.i4[aS3].pop(), this.i4[aS3].length === aSZ ? this.or(aSa, aSA) : (aSb = this.i4[aS3][aSZ], this.i4[aS3][aSZ] = aSa, bJ.s.aRI[aSa] = aSZ, this.or(aSb, aSA)))
	}
}

function aQu() {
	function zk(aSA, aSc) {
		if (! function(aSA, aR0) {
				var hM = bI.i2(aSA),
					aSg = Math.abs(bI.eg(aR0) - bI.eg(hM)),
					hM = Math.abs(bI.ei(aR0) - bI.ei(hM));
				return 0 !== Math.max(aSg, hM) && (function(aS3, aSA, aSg, aSh) {
					var aSj = bI.hi(aS3),
						aS3 = bI.hl(aS3),
						aSl = bI.hi(aSA),
						aSA = bI.hl(aSA),
						aSl = aSl - aSj,
						aSA = aSA - aS3,
						aSp = Math.abs(aSl),
						aSq = Math.abs(aSA),
						aSl = 0 < aSl ? 1 : 3,
						aSA = 0 < aSA ? 2 : 0;
					aSq < aSp ? aSt(aSj, aS3, aSj + aSp, aS3 + aSq, aSl, aSA, aSg) : aSt(aS3, aSj, aS3 + aSq, aSj + aSp, aSA, aSl, aSh)
				}(aSA, bI.i1(aR0), aSg, hM), !0)
			}(aSA, aSc)) return !1;
		if (0 === bK.f3[0]) return !!aY.h1(aSc << 2);
		if (! function(aR0) {
				if (aY.h1(aR0 << 2)) return 1;
				return function(aR0) {
					var a7, hT, aS1 = bJ.s.aS1,
						aSx = bI,
						eY = bK.f3[0],
						aSy = 4 * aR0;
					for (a7 = eY - 1; 0 <= a7; a7--) {
						hT = aS1[a7];
						var aSz = aSy;
						if (aSy = aSx.i7(aSy, hT + 2 & 3), aY.h1(aSy)) return bK.f3[0] = a7, bK.fA[1] = aSy >> 2, bK.fA[2] = 1 + hT, bK.fA[4] = aSz, 1
					}
					return
				}(aR0)
			}(aSc)) return !1;
		if (bK.fA[2] && aY.ed(bK.fA[4])) return !1;
		var a7, aSc = bI.i2(aSA),
			v8 = a9e,
			aS1 = bJ.s.aS1,
			eY = bK.f3[0] - 1,
			aSy = 4 * aSc,
			hK = bI.hK;
		for (a7 = 0; a7 < eY; a7++)
			if (aSy += hK[aS1[a7]], 0 !== v8[aSy + 3] || 2 !== v8[aSy + 2]) return !!void 0;
		return !!1
	}

	function aSt(aSj, aSk, aSl, aSm, aSr, aSs, aSg) {
		for (var eh, aS1 = bJ.s.aS1, g7 = 0, aSu = 0, j7 = aSm - aSk, a1 = aSl - aSj, aSv = aSj % 16, a7 = 1; a7 <= aSg; a7++) aS1[g7++] = aSr, aS1[g7] = aSs, g7 += (eh = (j7 * (aSv + (a7 << 4)) + .5) / a1 >> 4) - aSu, aSu = eh;
		bK.fF(bK.f3, g7)
	}
	this.kL = function(player, aSc) {
		var hT, hM, gx = bI.hV(player, aSc);
		return gx !== aSc && (hT = bI.hL(gx, aSc), hM = bI.i6(gx, hT), !(!aY.h1(hM << 2) && (hT = bI.hS(gx, aSc, hT), hM = bI.i6(gx, hT), !aY.h1(hM << 2)) || (bK.fA[0] = hM, bK.fA[1] = aSc, bK.fA[2] = 0, hM !== aSc && (!zk(bI.i1(hM), aSc) ||
			0 !== bK.fA[2] && bI.hb(player, bK.fA[1] + bI.hJ[bK.fA[2] - 1] << 2)))))
	}, this.ot = function(aSc) {
		var aS3 = bJ.s.lx[bK.fA[3]];
		return bK.fA[1] = aSc, bK.fA[2] = 0, zk(aS3, aSc)
	}
}

function aQq() {
	var x7 = 32,
		x6 = new Array(2);

	function ux(et) {
		var ef, eh, eK, hj, hg, hB = x7,
			a1G = b6.pP.ux(hB, hB),
			hH = b6.pP.getContext(a1G, !0),
			hE = b6.pP.getImageData(hH, hB, hB),
			v8 = hE.data,
			kP = (hB >> 1) - .5,
			kQ = Math.sqrt(kP * kP);
		for (v8.fill(255), eh = 0; eh < hB; eh++)
			for (ef = 0; ef < hB; ef++) hg = ef - kP, hj = eh - kP, eK = 4 * (eh * hB + ef), hg = 714 * (kQ - Math.sqrt(hg * hg + hj * hj)) / kQ, v8[2 + eK] = et, v8[3 + eK] = 255 < hg ? 0 : hg;
		return hH.putImageData(hE, 0, 0), a1G
	}
	this.a3d = -1, this.dU = function() {
		this.a3d = -1, x6[0] || (x6[0] = ux(255), x6[1] = ux(0))
	}, this.aT1 = function(hH, eC, ef, eh, dz, a7) {
		b6.fu.gl(a9.eI) && (hH.setTransform(eC *= 4 / 3 * .625, 0, 0, eC, ef - (dz *= 4 / 3), eh - dz), hH.drawImage(x6[+(bJ.s.aR4[a7] === this.a3d)], 0, 0))
	}
}

function dX() {
	this.aMw = [L(378), L(379), L(380), L(381), L(382), L(383), L(384), L(385), L(386), L(387), L(388), L(389), L(390)];
	var aT2 = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", ""];
	this.aMv = new Array(aT2.length), this.dU = function() {
		var g = bf.dp.data[155].value.split(";"),
			kP = g.length;
		if (function() {
				for (var eY = aT2.length, a7 = 0; a7 < eY; a7++) bT.aMv[a7] = aT2[a7]
			}(), !(kP > aT2.length))
			for (var a7 = 0; a7 < kP; a7++) g[a7].length && (this.aMv[a7] = g[a7])
	}, this.aMy = function(e0, code) {
		for (var aMv = this.aMv, aT4 = aT2, p6 = (aMv[e0] = code, ""), eY = aMv.length, aT5 = [], a7 = 0; a7 < eY; a7++) aT5.push(aMv[a7] === aT4[a7] ? "" : aMv[a7]);
		eY--;
		for (a7 = 0; a7 < eY; a7++) p6 += aT5[a7] + ";";
		bf.r8.r9(155, p6 += aT5[eY])
	}, this.aMu = function() {
		bf.r8.r9(155, ""), this.dU()
	}, this.et = function(code, e0) {
		return code === this.aMv[e0] || code === this.aMv[e0 + 1]
	}
}

function dS() {
	var aT6 = new Audio(
		"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
		);
	this.aT7 = function() {
		aT6 && aT6.play()
	}
}

function cT() {
	this.a67 = function() {
		var aTA;
		return !(ah.jf < 3 || ac.gM[kw[0]] >= a9.jO >> 1) && (a9.ie ? (aTA = aa.aEq(), !(2 * aa.aEr(bd.kt()) >= aTA)) : function() {
			var aTA = aa.aEq();
			if (2 * ac.ga[kw[0]] >= aTA) return !1;
			return !0
		}())
	}
}

function c4() {
	this.dU = function() {
		if (0 === a9.data.sResourcesType) {
			for (var aS4 = a9.je, ga = ac.ga, a7 = 0; a7 < aS4; a7++) ga[a7] = 512;
			var aS5 = a9.vg,
				ju = aA.ju,
				im = aA.im;
			for (a7 = aS4; a7 < aS5; a7++) ga[a7] = ju[im[a7]]
		} else(1 === a9.data.sResourcesType ? function() {
			for (var eY = a9.vg, ga = ac.ga, sResourcesValue = a9.data.sResourcesValue, a7 = 0; a7 < eY; a7++) ga[a7] = sResourcesValue
		} : function() {
			for (var eY = a9.vg, ga = ac.ga, sResourcesData = a9.data.sResourcesData, a7 = 0; a7 < eY; a7++) ga[a7] = sResourcesData[a7]
		})();
		bZ.lR[8] = ac.ga[a9.eI]
	}
}

function dI() {
	var aTF = 501,
		aTH = (this.aTG = new Uint32Array(aTF), this.a1s = new Uint32Array(aTF), this.a91 = new Uint16Array(aTF), this.aN4 = 0, 1),
		aTI = 0;

	function aTL(self) {
		self.max.fill(0)
	}

	function aTN(self, a7) {
		self.max[0] = Math.max(self.aTG[a7], self.max[0]), self.max[1] = Math.max(self.a1s[a7], self.max[1]), self.max[2] = Math.max(self.a91[a7], self.max[2])
	}
	this.max = [0, 0, 0], this.aTJ = 0, this.lR = new Array(21), this.aTK = null, this.dV = function() {
		this.aTK = [L(391), L(392), L(393), L(394), L(395), L(396), L(397), L(398), L(242), L(243), L(399), L(400), L(401), L(402), "", L(403), L(404), L(405), L(202), L(406), L(407)]
	}, this.dU = function() {
		this.aN4 = 0, aTH = 1, this.aTJ = 0, aTI = 0, aTL(this), this.lR.fill(0)
	}, this.om = function(player, hu) {
		b6.fu.a1n(player) && (this.lR[0] += hu + 1, this.lR[1]++, this.lR[12] += bK.f6[1])
	}, this.oC = function(player, np) {
		__fx.donationsTracker.logDonation(player, np, bK.f6[0]);
		player === a9.eI && (aJ.oC(bK.f6[0], bK.f6[1], np), this.lR[12] += bK.f6[1], this.lR[16] += bK.f6[0]), np === a9.eI && (aJ.a4y(bK.f6[0], player), this.lR[10] += bK.f6[0])
	}, this.op = function(player) {
		b6.fu.a1n(player) && (this.lR[2]++, this.lR[12] += bK.f6[1])
	}, this.p1 = function(player) {
		b6.fu.a1n(player) && (this.lR[19]++, this.lR[12] += bK.f6[1])
	}, this.aRz = function(player) {
		b6.fu.a1n(player) && this.lR[20]++
	}, this.fy = function(player, a2U, e0) {
		b6.fu.a1n(player) && (this.lR[e0] += a2U)
	}, this.iS = function() {
		var self;
		this.aTJ || 0 < aTI-- || ((self = this).aTG[self.aN4] = ac.gM[a9.eI], self.a1s[self.aN4] = ac.ga[a9.eI], self.a91[self.aN4] = aa.a92(a9.eI), aTN(self, self.aN4), self.aN4++, self.aN4 === aTF && function(self) {
			aTL(self), aTN(self, 0), self.aN4 = 1 + bH.dl(aTF, 2);
			for (var a7 = 1; a7 < self.aN4; a7++) self.aTG[a7] = self.aTG[2 * a7], self.a1s[a7] = self.a1s[2 * a7], self.a91[a7] = self.a91[2 * a7], aTN(self, a7);
			aTH *= 2
		}(self), aTI = aTH - 1, ba.lI(), 0 === ac.lV[a9.eI] && (self.aTJ = bb.jb()))
	}
}

function dJ() {
	this.a1 = 0, this.j7 = 0, this.rv = 0, this.rw = 0, this.aTP = 0, this.aTQ = 0, this.a6K = 0, this.sY = 0;
	var aTS = this.aTR = 0;
	this.aTT = 0, this.aTU = 0, this.aTV = 0, this.a5j = 0, this.e0 = 0, this.a8e = null, this.x2 = !1, this.aTW = -1, this.aTX = !1, this.aTY = [0, 0], this.dV = function() {
		this.a8e = [L(408), L(107, 0, "Balance"), L(106, 0, "Interest"), L(409)]
	}, this.dU = function() {
		this.x2 = !1, this.aTW = -1, this.aTX = !1, this.resize()
	}, this.resize = function() {
		this.a1 = at.a1 < 1.369 * at.j7 ? at.a1 : 1.369 * at.j7;
		var eb = u.v.r4() && at.a1 < at.j7 ? 1 : u.v.r4() ? .8 : at.a1 < at.j7 ? .65 : .59;
		this.a1 = Math.floor(eb * this.a1), this.a1 -= u.v.r4() && at.a1 < at.j7 ? 2 * bY.gap + 2 : 0, this.j7 = Math.floor(this.a1 / 1.369), this.a5j = Math.floor(this.j7 / 150), this.a5j = Math.max(this.a5j, 1.5), this.rv = Math.floor(1 + .02 *
			this.a1), this.rw = Math.floor(1 + .04 * this.a1), this.a6K = this.rw, aTS = Math.floor(.75 * this.a6K), this.sY = Math.floor(1 + .075 * this.a1), this.aTT = Math.floor(1 + .1125 * this.a1), this.aTU = Math.floor(this.a1 * (u.v
			.r4() ? .03 : .029)), this.aTU = Math.max(this.aTU, 4), this.aTV = Math.floor(.035 * this.a1), this.aTV = Math.max(this.aTV, 4), this.aTR = this.j7 - 2 * this.a6K - this.sY - this.aTT, this.x2 && this.aTZ()
	}, this.gm = function(kk, kl) {
		var vj, vi;
		return !!this.x2 && (vi = kk, vj = kl, kk -= bH.dl(at.a1 - this.a1, 2), kl -= bH.dl(at.j7 - this.j7, 2), kk < 0 || kl < 0 || kk >= this.a1 || kl >= this.j7 || kk >= this.a1 - this.aTT && kl < this.aTT ? -1 !== aI.gm(vi, vj) || b8.gm(vi,
			vj) || this.qx() : kl < this.aTT || (kl < this.j7 - this.sY ? (this.aTX = !0, this.aTW = (kk - 2 * this.rv - this.aTP) / this.aTQ, 3 !== this.e0 && (bb.dc = !0)) : (vi = (vi = Math.floor(kk / (this.a1 / this.a8e.length))) <
			0 ? 0 : vi >= this.a8e.length ? this.a8e.length - 1 : vi) !== this.e0 && (this.e0 = vi, this.aTZ(), bb.dc = !0)), !0)
	}, this.zy = function(kk, kl) {
		return this.aTY[0] = kk, this.aTY[1] = kl, !(!this.x2 || !this.aTX || (kk -= bH.dl(at.a1 - this.a1, 2), kl = this.aTW, this.aTW = (kk - 2 * this.rv - this.aTP) / this.aTQ, (0 <= this.aTW && this.aTW <= 1 || 0 <= kl && kl <= 1) && (bb
			.dc = !0), 0))
	}, this.a0N = function() {
		this.aTX && (this.aTX = !1)
	}, this.a0Z = function() {
		this.x2 ? this.qx() : this.show()
	}, this.show = function() {
		bZ.aN4 < 2 || (this.x2 = !0, this.aTZ())
	}, this.qx = function() {
		this.x2 = !1, this.aTW = -1, bb.dc = !0
	}, this.aTZ = function() {
		this.e0 < 2 ? this.aTP = aM.measureText(b6.z3.xl(bZ.max[this.e0]), b6.pP.rR(0, this.aTU)) : 2 === this.e0 && (this.aTP = aM.measureText(b6.z3.a2N(6, 2), b6.pP.rR(0, this.aTU))), this.aTQ = this.a1 - 2 * this.rv - this.aTP - this.rw
	}, this.lI = function() {
		this.x2 && this.aTZ()
	}, this.tM = function() {
		this.x2 && this.a6b()
	}, this.a6b = function() {
		var ef = bH.dl(at.a1 - this.a1, 2),
			eh = bH.dl(at.j7 - this.j7, 2);
		tN.setTransform(1, 0, 0, 1, ef, eh), tN.fillStyle = b7.mV, tN.fillRect(0, this.aTT, this.a1, this.j7 - this.aTT), this.aTa(), this.aLu(), tN.strokeRect(0, 0, this.a1, this.j7), b6.pP.textAlign(tN, 2), tN.font = b6.pP.rR(0, this.aTU),
			0 === this.e0 ? this.aTb(bZ.aTG, ef, eh) : 1 === this.e0 ? this.aTb(bZ.a1s, ef, eh) : 2 === this.e0 ? this.aTc(ef, eh) : 3 === this.e0 && (this.aTd(ef, eh), this.aTe(ef, eh)), aI.a43(Math.floor(ef + this.a1 - .725 * this.aTT), Math
				.floor(eh + .275 * this.aTT), Math.floor(.45 * this.aTT)), tN.setTransform(1, 0, 0, 1, 0, 0)
	}, this.aTa = function() {
		var a7, dk;
		for (tN.lineWidth = this.a5j, b6.pP.textBaseline(tN, 1), b6.pP.textAlign(tN, 1), tN.strokeStyle = b7.mY, tN.font = b6.pP.rR(1, this.aTV), dk = this.a1 / this.a8e.length, tN.fillStyle = b7.mu, tN.fillRect(this.e0 * dk, this.j7 - this.sY,
				dk, this.sY), tN.fillStyle = b7.mY, tN.fillRect(0, this.j7 - this.sY - .5 * this.a5j, this.a1, this.a5j), a7 = 1; a7 <= 3; a7++) tN.fillRect(a7 * dk, this.j7 - this.sY, this.a5j, this.sY);
		for (a7 = this.a8e.length - 1; 0 <= a7; a7--) tN.fillText(b6.wj.a1S(this.a8e[a7], 0, .9 * dk), (a7 + .5) * dk, this.j7 - .46 * this.sY)
	}, this.aLu = function() {
		tN.fillStyle = b7.nH, tN.fillRect(0, 0, this.a1, this.aTT), tN.fillStyle = b7.mY, tN.fillRect(0, this.aTT - .5 * this.a5j, this.a1, this.a5j), tN.font = b6.pP.rR(1, .39 * this.aTT), tN.fillText(b6.wj.a1S(L(410), 0, .8 * this.a1), Math
			.floor(this.a1 / 2), Math.floor(.55 * this.aTT))
	}, this.aTb = function(g, ef, eh) {
		var kP = bZ.max[this.e0],
			a0s = (tN.setTransform(1, 0, 0, 1, ef + 2 * this.rv + this.aTP, eh + this.a6K + this.aTT), tN.lineWidth = 2, this.aTR / Math.sqrt(kP));
		tN.beginPath(), tN.moveTo(this.aTQ, this.aTR - a0s * Math.sqrt(g[bZ.aN4 - 1]));
		for (var a7 = bZ.aN4 - 2; 0 <= a7; a7--) tN.lineTo(a7 * this.aTQ / (bZ.aN4 - 1), this.aTR - a0s * Math.sqrt(g[a7]));
		tN.stroke();
		ef = this.a43(g, a0s, .5);
		ef < .95 && tN.fillText(b6.z3.xl(kP), -this.rv, 0), .05 < Math.abs(ef - .5) && tN.fillText(b6.z3.xl(Math.floor(kP / 4)), -this.rv, Math.floor(this.aTR / 2)), .05 < ef && tN.fillText("0", -this.rv, this.aTR)
	}, this.aTc = function(ef, eh) {
		tN.setTransform(1, 0, 0, 1, ef + 2 * this.rv + this.aTP, eh + this.a6K + this.aTT), tN.lineWidth = 2;
		var a0s = this.aTR / Math.max(bZ.max[this.e0], 1);
		tN.beginPath(), tN.moveTo(this.aTQ, this.aTR - a0s * bZ.a91[bZ.aN4 - 1]);
		for (var a7 = bZ.aN4 - 2; 0 <= a7; a7--) tN.lineTo(a7 * this.aTQ / (bZ.aN4 - 1), this.aTR - a0s * bZ.a91[a7]);
		tN.stroke();
		ef = this.a43(bZ.a91, a0s, 1), eh = bZ.max[this.e0] / 100;
		ef < .95 && tN.fillText(b6.z3.a2N(eh, 2), -this.rv, 0), .05 < Math.abs(ef - .5) && tN.fillText(b6.z3.a2N(eh / 2, 2), -this.rv, Math.floor(this.aTR / 2)), .05 < ef && tN.fillText(b6.z3.a2N(0, 2), -this.rv, this.aTR)
	}, this.aTd = function(ef, eh) {
		tN.setTransform(1, 0, 0, 1, ef + .34 * this.a1, eh + 2 * aTS + this.aTT), b6.pP.textAlign(tN, 2);
		for (var a8P = this.j7 - 4 * aTS - this.sY - this.aTT, g = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], a7 = 9; 0 <= a7; a7--) tN.fillText(b6.wj.a1S(bZ.aTK[g[a7]], 0, .31 * this.a1), 0, a7 * a8P / 9);
		var f0 = bZ.lR;
		for (tN.setTransform(1, 0, 0, 1, ef + .39 * this.a1, eh + 2 * aTS + this.aTT), b6.pP.textAlign(tN, 0), tN.fillText(b6.z3.a2N(100 * f0[0] / (1024 * Math.max(f0[1], 1)), 1), 0, 0), a7 = 8; 1 <= a7; a7--) tN.fillText(f0[g[a7]].toString(), 0,
			a7 * a8P / 9);
		tN.fillText(b6.z3.a2N(100 * (1 - ac.gM[a9.eI] / f0[7]), 0), 0, a8P)
	}, this.aTe = function(ef, eh) {
		tN.setTransform(1, 0, 0, 1, ef + .79 * this.a1, eh + 2 * aTS + this.aTT), b6.pP.textAlign(tN, 2);
		var a7, a8P = this.j7 - 4 * aTS - this.sY - this.aTT;
		for (tN.fillStyle = b7.mp, a7 = 2; 0 <= a7; a7--) tN.fillText(b6.wj.a1S(bZ.aTK[a7 + 8], 0, .31 * this.a1), 0, a7 * a8P / 9);
		tN.fillText(b6.wj.a1S(bZ.aTK[18], 0, .31 * this.a1), 0, 3 * a8P / 9), tN.fillStyle = b7.mo, tN.fillText(b6.wj.a1S(bZ.aTK[11], 0, .31 * this.a1), 0, 4 * a8P / 9), tN.fillStyle = b7.n6, tN.fillText(b6.wj.a1S(bZ.aTK[13], 0, .31 * this.a1),
				0, 5 * a8P / 9), tN.fillText(b6.wj.a1S(bZ.aTK[15], 0, .31 * this.a1), 0, 6 * a8P / 9), tN.fillText(b6.wj.a1S(bZ.aTK[16], 0, .31 * this.a1), 0, 7 * a8P / 9), tN.fillText(b6.wj.a1S(bZ.aTK[12], 0, .31 * this.a1), 0, 8 * a8P / 9), tN
			.fillStyle = b7.n5, tN.fillText(b6.wj.a1S(bZ.aTK[17], 0, .31 * this.a1), 0, a8P), tN.fillStyle = b7.mp;
		var f0 = bZ.lR,
			aM7 = f0[8] + f0[9] + f0[10] + f0[18],
			aM7 = b6.z3.xl(aM7),
			aKj = tN.measureText(aM7).width,
			ef = (tN.setTransform(1, 0, 0, 1, ef + .83 * this.a1 + aKj, eh + 2 * aTS + this.aTT), tN.fillText(b6.z3.xl(f0[8]), 0, 0), tN.fillText(b6.z3.xl(f0[9]), 0, a8P / 9), tN.fillText(b6.z3.xl(f0[10]), 0, 2 * a8P / 9), tN.fillText(b6.z3.xl(
				f0[18]), 0, 3 * a8P / 9), tN.fillStyle = b7.mo, tN.fillText(aM7, 0, 4 * a8P / 9), tN.fillStyle = b7.n6, tN.fillText(b6.z3.xl(f0[13]), 0, 5 * a8P / 9), tN.fillText(b6.z3.xl(f0[15]), 0, 6 * a8P / 9), tN.fillText(b6.z3.xl(f0[
				16]), 0, 7 * a8P / 9), tN.fillText(b6.z3.xl(f0[12]), 0, 8 * a8P / 9), f0[12] + f0[13] + f0[15] + f0[16]);
		tN.fillStyle = b7.n5, tN.fillText(b6.z3.xl(ef), 0, a8P), tN.fillStyle = b7.mY
	}, this.a43 = function(g, a0s, a7C) {
		var a7, e, fG;
		return this.aTW < 0 || 1 < this.aTW ? .25 : (a7 = this.aTW * (bZ.aN4 - 1), fG = g[e = Math.floor(a7)], fG += (a7 - e) * (g[e < bZ.aN4 - 1 ? e + 1 : e] - fG), tN.strokeStyle = b7.mb, .04 < this.aTW && this.aTg(0, this.aTR - a0s * Math.pow(
				fG, a7C), a7 * this.aTQ / (bZ.aN4 - 1), this.aTR - a0s * Math.pow(fG, a7C)), .04 < fG / bZ.max[this.e0] && this.aTg(a7 * this.aTQ / (bZ.aN4 - 1), this.aTR, a7 * this.aTQ / (bZ.aN4 - 1), this.aTR - a0s * Math.pow(fG, a7C)), tN
			.fillStyle = b7.n8, tN.beginPath(), tN.arc(a7 * this.aTQ / (bZ.aN4 - 1), this.aTR - a0s * Math.pow(fG, a7C), Math.max(2, .014 * this.j7), 0, 2 * Math.PI), tN.fill(), g = this.aTW * bb.a93, g = 0 === ac.lV[a9.eI] ? Math.floor(g *
				bZ.aTJ) : Math.floor(g * bb.jb()), tN.fillStyle = b7.mY, tN.fillText(1 === a7C ? b6.z3.a2N(fG / 100, 2) : b6.z3.xl(Math.floor(fG)), -this.rv, this.aTR - a0s * Math.pow(fG, a7C)), b6.pP.textAlign(tN, 1), tN.fillText(aS.a8s(g),
				a7 * this.aTQ / (bZ.aN4 - 1), this.aTR + this.aTU - (u.v.r4() ? 2 : 0) - this.a5j), b6.pP.textAlign(tN, 2), a0s * Math.pow(fG, a7C) / this.aTR)
	}, this.aTg = function(ly, lz, mB, mC) {
		tN.beginPath(), tN.moveTo(ly, lz), tN.lineTo(mB, mC), tN.stroke()
	}
}

function bs() {
	this.aTh = "https://", this.aTi = this.aTh + "territorial.io/", this.aN5 = this.aTi + "changelog", this.aNA = this.aTi + "terms", this.aTj = this.aTi + "cookie_policy", this.aMV = this.aTi + "privacy", this.aN9 = this.aTi + "tutorial", this.aN8 =
		this.aTi + "players", this.aN6 = this.aTi + "clans", this.aN7 = this.aTi + "clan-results", this.aAE = this.aTh + "play.google.com/store/apps/details?id=territorial.io", this.zW = this.aTh + "apps.apple.com/app/id1581110913", this.aTk = this
		.aTh + "www.youtube.com/watch?v=toZTQ8aRdFc", this.aAF = this.aTh + "discord.gg/pthqvpTXmh", this.aAG = this.aTh + "www.instagram.com/davidtschacher/", this.xL =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function d1() {
	this.s = new aTl, this.wg = new aTm, this.dU = function() {
		this.s.dU()
	}, this.iS = function() {
		0 !== this.s.a57 && this.s.a57--
	}
}

function aTm() {
	this.tM = function() {
		if (0 !== bL.s.a57 && (tN.globalAlpha = Math.min(bL.s.a57 / 580, 1), tN.drawImage(bL.s.aTp, 1 + aO.we(), 1 + aO.wf()), tN.globalAlpha = 1, a9.gu)) {
			for (var ly = hv / hw, lz = hx / hw, mB = (at.a1 + hv) / hw, mC = (at.j7 + hx) / hw, g7 = bL.s.aTq * hw, aTr = bL.s.aTr, a7 = a9.je - 1; 0 <= a7; a7--) ! function(a7, g7, ly, lz, mB, mC, aTr) {
				var highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[a7];
				if (highlight) g7 *= 2;
				0 === ac.lV[a7] || 0 === ac.gM[a7] || (mB = at.a1 * ((ac.i9[a7] + ac.iA[a7] + 1) / 2 - ly) / (mB - ly) - .5 * g7, ly = at.j7 * ((ac.iB[a7] + ac.iC[a7] + 1) / 2 - lz) / (mC - lz) - .5 * g7, mB > at.a1) || ly > at.j7 || mB < -
					g7 || ly < -g7 || (tN.setTransform(highlight ? hw * 2 : hw, 0, 0, highlight ? hw * 2 : hw, mB, ly), tN.drawImage(aTr[a9.ie ? bc.eW[a7] : 1], 0, 0))
			}(a7, g7, ly, lz, mB, mC, aTr);
			tN.setTransform(hw, 0, 0, hw, 0, 0)
		}
	}
}

function aTl() {
	this.aTq = 28, this.a57 = 0, this.aTp = null;
	var aTt = this.aTr = null;

	function aTw(hB, aTx) {
		var ef, eh, eK, hg, a1G = b6.pP.ux(hB, hB),
			hH = b6.pP.getContext(a1G, !0),
			hE = b6.pP.getImageData(hH, hB, hB),
			v8 = hE.data,
			kP = (hB >> 1) - .5,
			aTy = .5 + kP;
		for (aTy *= aTy, eh = 0; eh < hB; eh++)
			for (ef = 0; ef < hB; ef++) hg = (hg = ef - kP) * hg + (hg = eh - kP) * hg, v8[eK = 4 * (eh * hB + ef)] = aTx[0], v8[1 + eK] = aTx[1], v8[2 + eK] = aTx[2], v8[3 + eK] = (aTy - hg) * aTx[3] / aTy;
		return hH.putImageData(hE, 0, 0), a1G
	}

	function aT1(a7, hH, a1G, hB) {
		var ef, y, highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[a7];
		if (highlight) hB *= 2;
		0 !== ac.lV[a7] && 0 !== ac.gM[a7] && (ef = ac.i9[a7] + ac.iA[a7] + 1 - hB - 2 >> 1, y = ac.iB[a7] + ac.iC[a7] + 1 - hB - 2 >> 1,
			highlight ? hH.drawImage(a1G[a9.ie ? bc.eW[a7] : a7 < a9.je ? 1 : 0], ef, y, hB, hB) :
			hH.drawImage(a1G[a9.ie ? bc.eW[a7] : a7 < a9.je ? 1 : 0], ef, y))
	}
	this.dU = function() {
		var rI;
		this.a57 = 700,
			function(rI) {
				var hB = rI.aTq;
				if (rI.aTr = [], aTt = [], a9.ie)
					for (var a7 = 0; a7 <= a9.vn; a7++) rI.aTr.push(aTw(hB, bc.aRs[bc.k4[a7]])), aTt.push(aTw(hB >> 1, bc.aRs[bc.k4[a7]]));
				else rI.aTr.push(aTw(hB, bc.aRs[7])), rI.aTr.push(aTw(hB, bc.aRs[4])), aTt.push(aTw(hB >> 1, bc.aRs[7]))
			}(this),
			function(rI, aTz) {
				var a7, aTp = rI.aTp,
					hH = b6.pP.getContext(aTp, !0),
					eY = a9.eV,
					hB = rI.aTq >> 1;
				hH.imageSmoothingEnabled = !1, hH.setTransform(1, 0, 0, 1, 0, 0), aTz && hH.clearRect(0, 0, aTp.width, aTp.height);
				for (a7 = a9.je; a7 < eY; a7++) aT1(a7, hH, aTt, hB)
			}(this, null !== (rI = this).aTp && rI.aTp.width === bO.ej - 2 && rI.aTp.height === bO.ek - 2 || (rI.aTp = b6.pP.ux(bO.ej - 2, bO.ek - 2), !1)), a9.gu || this.a2f()
	}, this.aRr = aTw, this.a2f = function() {
		for (var eY = a9.je, hB = this.aTq, aTr = this.aTr, hH = b6.pP.getContext(this.aTp, !0), a7 = 0; a7 < eY; a7++) aT1(a7, hH, aTr, hB)
	}
}

function d2() {
	function aU1() {
		8 === a9.jy && 1 === a9.yT && bN.y6.yS()
	}

	function aU0(player) {
		a9.gu ? (ag.aDe(player), ah.aGZ(), a9.k0 && a9.og.iS()) : az.aAR(player)
	}
	this.o5 = function(player) {
		aJ.yf(player, player === a9.eI ? 21 : 22), aU0(player), aU1()
	}, this.oc = function(player) {
		1 === a9.yT && 0 !== ac.lV[player] && 2 !== ac.a1l[player] && aU0(player), a9.yW--, a9.yV--, aJ.yf(player, 4), b6.fu.gk(2) && aS.lH(!0), aU1()
	}
}

function dC() {
	this.aPR = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.a8N = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", b7.mY, "rgb(170,170,170)"
	], this.aU2 = [b7.mY, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", b7.mY, b7.mP], this.aU3 = [b7.mP, b7.mY, b7.mY, b7.mY, b7.mP, b7.mP, b7.mP, b7.mP, b7.mY];
	var aU4 = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"],
		aU5 = (this.aG4 = ["rgba(" + aU4[0] + ",", "rgba(" + aU4[1] + ",", "rgba(" + aU4[2] + ",", "rgba(" + aU4[3] + ",", "rgba(" + aU4[4] + ",", "rgba(" + aU4[5] + ",", "rgba(" + aU4[6] + ",", "rgba(" + aU4[7] + ",", "rgba(" + aU4[8] + ",",
			"rgba(" + aU4[9] + ","
		], this.aG5 = ["rgb(" + aU4[0] + ")", "rgb(" + aU4[1] + ")", "rgb(" + aU4[2] + ")", "rgb(" + aU4[3] + ")", "rgb(" + aU4[4] + ")", "rgb(" + aU4[5] + ")", "rgb(" + aU4[6] + ")", "rgb(" + aU4[7] + ")", "rgb(" + aU4[8] + ")", "rgb(" + aU4[
			9] + ")"
		], this.yp = null, this.aRs = [
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
	this.k4 = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.eW = new Uint8Array(a9.eV), this.vt = new Uint16Array(a9.eV), this.vu = new Uint16Array(this.k4.length + 1), this.vv = new Uint16Array(this.k4.length), this.dV = function() {
		this.yp = [L(411), L(412), L(413), L(414), L(415), L(416), L(417), L(418), L(419)]
	}, this.dU = function() {
		if (this.eW.fill(0), this.aU6(), a9.ie) {
			9 === a9.jy ? this.aU7() : a9.k0 ? function() {
				var colorsData = a9.data.colorsData;
				if (!a9.data.selectableColor)
					for (var a7 = a9.je - 1; 0 <= a7; a7--) colorsData[a7] = au.iv(262144);
				var aUG = 0,
					eo = 768,
					aOy = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
					teamPlayerCount = a9.data.teamPlayerCount;
				for (a7 = 0; a7 < 9; a7++)
					if (teamPlayerCount[a7]) {
						for (var eb = 0, es = 0; es < 3; es++) eb += Math.abs(aU5[a7][es] - aOy[es]);
						eb < eo && (aUG = a7, eo = eb)
					} var aUH = new Uint16Array(9);
				for (a7 = 0; a7 < 9; a7++) aUH[a7] = teamPlayerCount[a7];
				var k4 = bc.k4,
					aUI = new Uint8Array(9),
					g1 = (k4[0] = 0, 1);
				for (a7 = 1; a7 < 9; a7++) aUH[a7] && (aUI[a7] = g1, k4[g1++] = a7);
				var iu = a9.je,
					eW = bc.eW;
				aUH[aUG] ? (aUH[aUG]--, eW[0] = aUI[aUG]) : iu = 0;
				var et = 0;
				for (a7 = iu; a7 < a9.vg; a7++) {
					var k3 = k4[et];
					if (aUH[k3]) aUH[k3]--, eW[a7] = aUI[k3];
					else if (a7--, 9 <= ++et) return console.log("error 325")
				}
			}() : this.iS();
			for (var eY = a9.eV, vt = bc.vt, vu = bc.vu, vv = bc.vv, eW = bc.eW, k4 = bc.k4, vm = k4.length, dp = new Array(vm), a7 = 0; a7 < vm; a7++) dp[a7] = [];
			for (a7 = 0; a7 < eY; a7++) dp[k4[eW[a7]]].push(a7);
			for (a7 = 1; a7 <= vm; a7++) vu[a7] = vu[a7 - 1] + dp[a7 - 1].length;
			for (a7 = 0; a7 < vm; a7++)
				for (var g1 = dp[a7].length, kP = vu[a7], k3 = 0; k3 < g1; k3++) vt[k3 + kP] = dp[a7][k3];
			var je = a9.je;
			for (a7 = 0; a7 < vm; a7++)
				for (g1 = dp[a7].length, kP = vu[a7], k3 = 0; k3 < g1; k3++)
					if (vt[k3 + kP] >= je) {
						vv[a7] = k3;
						break
					}
		}
	}, this.aU6 = function() {
		for (var a7 = this.k4.length - 1; 0 <= a7; a7--) this.k4[a7] = a7
	}, this.aU7 = function() {
		for (var a7 = a9.data.teamPlayerCount[7] - 1; 0 <= a7; a7--) this.eW[a7] = 1;
		for (a7 = a9.data.teamPlayerCount[7]; a7 < a9.eV; a7++) this.eW[a7] = 2;
		this.k4[1] = 7, this.k4[2] = 8
	}, this.iS = function() {
		var hP = new Uint8Array(a9.je),
			hQ = new Uint8Array(a9.je),
			aUA = new Uint16Array(8),
			aUB = new Uint16Array(this.k4.length);
		this.aUC(hP, hQ, aUA, 1), this.aDH(aUA), this.aUD(aUB, hP, hQ), this.aUE(hP, hQ, aUB), this.aUF()
	}, this.aUC = function(hP, hQ, aUH, aUJ) {
		for (var es, e, aUK, eY = this.k4.length - aUJ, g = new Uint16Array(eY), colorsData = a9.data.colorsData, a7 = a9.je - 1; 0 <= a7; a7--) {
			for (es = eY; aUJ <= es; es--) g[es - 1] = Math.abs(4 * (colorsData[a7] >> 12) - aU5[es][0]) + Math.abs(4 * (colorsData[a7] >> 6 & 63) - aU5[es][1]) + Math.abs(4 * (63 & colorsData[a7]) - aU5[es][2]);
			for (aUK = 768, es = eY - 1; 0 <= es; es--) g[e = (es + a7) % eY] < aUK && (aUK = g[e], hP[a7] = e);
			for (aUH[hP[a7]] += 4, aUK = 768, es = eY - 1; 0 <= es; es--) g[e = (es + a7) % eY] < aUK && e !== hP[a7] && (aUK = g[e], hQ[a7] = e);
			aUH[hQ[a7]]++
		}
	}, this.aDH = function(aUH) {
		for (var es, kR, eY = this.k4.length - 1, a7 = eY; 0 <= a7; a7--) this.k4[a7] = a7;
		for (a7 = eY - 1; 0 <= a7; a7--) aUH[a7]++;
		for (a7 = 1; a7 <= eY; a7++) {
			for (kR = 0, es = 1; es < eY; es++) aUH[es] > aUH[kR] && (kR = es);
			aUH[kR] = 0, this.k4[a7] = kR + 1
		}
	}, this.aUD = function(aUB, hP, hQ) {
		var es, z6, et, eb, e, mA, s8, aUL = this.k4.length - 1,
			pu = new Uint16Array(aUL),
			aUM = [],
			aUN = 0,
			z5 = [],
			aUO = [];
		loop: for (var a7 = 0; a7 < a9.je; a7++)
			if (null !== (z6 = b6.z3.z7(ac.a4h[a7]))) {
				for (es = z5.length - 1; 0 <= es; es--)
					if (z6 === z5[es]) {
						aUO[es].push(a7), aUN = Math.max(aUN, aUO[es].length);
						continue loop
					} z5.push(z6), aUM.push(!1), aUO.push([a7]), aUN = Math.max(aUN, 1)
			}
		for (; 2 < a9.vn && aUN > bH.dl(a9.je, a9.vn);) a9.vn--, a9.jy--;
		for (es = z5.length - 1; 0 <= es; es--) {
			for (eb = -1, et = z5.length - 1; 0 <= et; et--) !aUM[et] && (-1 === eb || aUO[et].length > aUO[eb].length) && (eb = et);
			for (et = aUL - 1; 0 <= et; et--) pu[et] = 1;
			for (et = aUO[eb].length - 1; 0 <= et; et--) pu[hP[aUO[eb][et]]] += 3, pu[hQ[aUO[eb][et]]]++;
			for (a7 = aUL - 1; 0 <= a7; a7--) {
				for (e = eb % aUL, et = aUL - 1; 0 <= et; et--) pu[et] > pu[e] && (e = et);
				for (mA = -1, et = a9.vn; 0 < et; et--)
					if (this.k4[et] === e + 1) {
						mA = et;
						break
					} if (pu[e] = 0, -1 !== mA) {
					for (s8 = 0, et = a9.vn; 0 < et; et--) aUB[mA] > aUB[et] && s8++;
					if (s8 !== a9.vn - 1) {
						for (et = aUO[eb].length - 1; 0 <= et; et--) aUB[mA]++, this.eW[aUO[eb][et]] = mA;
						break
					}
				}
			}
			aUM[eb] = !0
		}
	}, this.aUE = function(hP, hQ, aUB) {
		for (var a7, hf, eY = this.k4.length - 1, border = bH.dl(a9.je, a9.vn), aUP = (0 < a9.je % a9.vn && border++, new Uint8Array(1 + eY)), es = eY; 1 <= es; es--) aUP[this.k4[es]] = es;
		for (a7 = 0; a7 < a9.je; a7++) hf = aUP[hP[a7] + 1], 0 === this.eW[a7] && hf <= a9.vn && aUB[hf] < border && (aUB[hf]++, this.eW[a7] = hf);
		for (a7 = 0; a7 < a9.je; a7++) hf = aUP[hQ[a7] + 1], 0 === this.eW[a7] && hf <= a9.vn && aUB[hf] < border && (aUB[hf]++, this.eW[a7] = hf);
		for (es = a9.vn; 1 <= es; es--)
			for (a7 = a9.je - 1; 0 <= a7 && !(aUB[es] >= border); a7--) 0 === this.eW[a7] && (aUB[es]++, this.eW[a7] = es)
	}, this.aUF = function() {
		for (var a7 = a9.je; a7 < a9.eV; a7++) this.eW[a7] = 1 + a7 % a9.vn
	}
}

function gN() {
	for (var ef, eh, a7 = fT - 1; 0 <= a7; a7--) ef = bH.dl(fV[a7], 4) % bO.ej, eh = bH.dl(fV[a7], 4 * bO.ej), ac.i9[fO] = ac.i9[fO] > ef ? ef : ac.i9[fO], ac.iB[fO] = ac.iB[fO] > eh ? eh : ac.iB[fO], ac.iA[fO] = ac.iA[fO] < ef ? ef : ac.iA[fO], ac
		.iC[fO] = ac.iC[fO] < eh ? eh : ac.iC[fO]
}

function fi() {
	var eb, g6, a7, eY = ac.g0[fO].length,
		ea = aY.ea;
	loop: for (a7 = eY - 1; 0 <= a7; a7--) {
		for (eb = 3; 0 <= eb; eb--)
			if (g6 = ac.g0[fO][a7] + ea[eb], aY.eP(g6) || aY.g8(g6) && aY.eQ(g6) !== fO) {
				aY.iq(ac.g0[fO][a7], fO);
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
		for (var aUQ = !1, aUR = !1, eb = 3; 0 <= eb; eb--) {
			var g6 = gE[player][a7] + ea[eb];
			if (aY.aDR(g6, player)) continue loop;
			aUQ = aUQ || aY.h1(g6), aUR = aUR || aY.aDQ(g6)
		}
		aUQ ? gF[player].push(gE[player][a7]) : aUR ? ey[player].push(gE[player][a7]) : aY.wF(gE[player][a7], player), gE[player][a7] = gE[player][eY - 1], gE[player].pop(), eY--
	}
}

function gC() {
	ac.gM[fS] -= fT
}

function gD(border) {
	for (var eY = border.length, a7 = eY - 1; 0 <= a7; a7--) aY.wZ(fS, border[a7]) || (border[a7] = border[eY - 1], border.pop(), eY--)
}

function gG(border) {
	for (var eY = border.length, a7 = eY - 1; 0 <= a7; a7--) !aY.wZ(fS, border[a7]) && aY.eT(border[a7]) && (border[a7] = border[eY - 1], border.pop(), eY--)
}

function gH(border) {
	for (var eb, g6, eY = border.length, ea = aY.ea, a7 = eY - 1; 0 <= a7; a7--)
		for (eb = 3; 0 <= eb; eb--)
			if (g6 = border[a7] + ea[eb], aY.aDR(g6, fS)) {
				ac.gE[fS].push(border[a7]), border[a7] = border[eY - 1], border.pop(), eY--;
				break
			}
}

function gI() {
	for (var eb, g6, ea = aY.ea, a7 = fT - 1; 0 <= a7; a7--)
		for (eb = 3; 0 <= eb; eb--) g6 = fV[a7] + ea[eb], aY.aDS(fS, g6) && aY.aDT(g6) && (ac.gE[fS].push(g6), aY.g3(g6, fS))
}

function gJ() {
	var ef, eh;
	loop: for (; ac.iB[fS] < ac.iC[fS];) {
		for (ef = ac.iA[fS]; ef >= ac.i9[fS]; ef--)
			if (aY.wZ(fS, 4 * (ac.iB[fS] * bO.ej + ef))) break loop;
		ac.iB[fS]++
	}
	loop: for (; ac.iB[fS] < ac.iC[fS];) {
		for (ef = ac.iA[fS]; ef >= ac.i9[fS]; ef--)
			if (aY.wZ(fS, 4 * (ac.iC[fS] * bO.ej + ef))) break loop;
		ac.iC[fS]--
	}
	loop: for (; ac.i9[fS] < ac.iA[fS];) {
		for (eh = ac.iC[fS]; eh >= ac.iB[fS]; eh--)
			if (aY.wZ(fS, 4 * (eh * bO.ej + ac.i9[fS]))) break loop;
		ac.i9[fS]++
	}
	loop: for (; ac.i9[fS] < ac.iA[fS];) {
		for (eh = ac.iC[fS]; eh >= ac.iB[fS]; eh--)
			if (aY.wZ(fS, 4 * (eh * bO.ej + ac.iA[fS]))) break loop;
		ac.iA[fS]--
	}
}

function eR(player, il) {
	return 0 === bc.eW[player] || bc.eW[player] !== bc.eW[il]
}

function h7(player, il) {
	for (var e, aUS = aZ.fe(player), a7 = 0; a7 < aUS; a7++)
		if (0 === aZ.ff(player, a7))
			if ((e = aZ.fk(player, a7)) === a9.eV) {
				if (il === a9.eV) return !1;
				if (h5(il)) return !0
			} else if (b6.fu.kT(e))
		if (il === a9.eV) {
			if (h5(e)) return !0
		} else if (h9(il, e)) return !0;
	return !1
}

function h5(player) {
	for (var a7, g7, eY = ac.gE[player].length, ea = aY.ea, eb = 3; 0 <= eb; eb--)
		for (g7 = ea[eb], a7 = 0; a7 < eY; a7++)
			if (aY.eP(ac.gE[player][a7] + g7)) return !0;
	return !1
}

function aDa(player) {
	for (var a7, g7, eY = ac.gE[player].length, ea = aY.ea, eb = 3; 0 <= eb; eb--)
		for (g7 = ea[eb], a7 = 0; a7 < eY; a7++)
			if (aY.ip(ac.gE[player][a7]) && aY.eP(ac.gE[player][a7] + g7)) return !0;
	return !1
}

function h9(a1o, a1p) {
	for (var a7, dk, g7, g6, aS4 = ac.gE[a1o].length, aS5 = ac.gE[a1p].length, ea = (aS5 < aS4 && (dk = a1o, a1o = a1p, a1p = dk, dk = aS4, aS4 = aS5, 0), aY.ea), eb = 3; 0 <= eb; eb--)
		for (g7 = ea[eb], a7 = 0; a7 < aS4; a7++)
			if (g6 = ac.gE[a1o][a7] + g7, aY.g8(g6) && aY.eQ(g6) === a1p) return !0;
	return !1
}

function aDb(a1o, a1p) {
	for (var a7, g7, g6, aS4 = ac.gE[a1o].length, ea = aY.ea, eb = 3; 0 <= eb; eb--)
		for (g7 = ea[eb], a7 = 0; a7 < aS4; a7++)
			if (aY.ip(ac.gE[a1o][a7]) && (g6 = ac.gE[a1o][a7] + g7, aY.g8(g6)) && aY.eQ(g6) === a1p) return !0;
	return !1
}

function dP() {
	this.oq = new aUT
}

function aUT() {
	this.h4 = function(player) {
		b6.fu.a1m(player) && aJ.yr(80, L(420), 637, 0, b7.nK, b7.mV, -1, !1)
	}, this.a3f = function() {
		aJ.yr(80, L(421), 637, 0, b7.nK, b7.mV, -1, !1)
	}, this.nt = function(player) {
		b6.fu.a1m(player) && aJ.yr(80, L(422), 637, 0, b7.nK, b7.mV, -1, !1)
	}
}

function aUU() {
	this.aUV = 0, this.iS = function() {
		aK.iS(), aV.iS(), at.iS(), aw.s.iS(), ar.aCm(), bb.dc && (bb.dc = !1, aW.tM())
	}
}

function aUW() {
	this.lo = bb.lo, this.e0 = 0, this.aUV = 0, this.aCj = 0, this.aUX = null, this.aUY = 7, this.a58 = 0, this.dU = function() {
		this.aCj = 0, this.aUX = [], this.e0 = 0, this.aUV = 0
	}, this.aOR = function(a8) {
		if (a9.gu) this.a94(a8);
		else if (this.aUX.push(a8), 2 === a9.yT) {
			for (var a7 = 0; a7 < this.aUX.length; a7++) b4.ni.iS(this.aUX[a7]);
			this.aUX = []
		}
	}, this.a94 = function(a8) {
		2 !== a9.yT && (b4.ni.iS(a8), b5.iS(), aS.a94(this.aCj), this.aCj === a9.a2l ? (a9.og.iS(), this.aCj = 0, this.e0 = 0, this.aUV = 0, this.lo = bb.lo) : (this.aCj++, ab.a2e(), ab.lH(!0), bX.a9c()))
	}, this.iS = function() {
		at.iS(), a9.gu ? (bb.dc = aS.a94(-1) || bb.dc, lJ()) : (0 !== this.e0 || bb.lo >= this.lo && (this.lo += bb.a93 * Math.floor(1 + (bb.lo - this.lo) / bb.a93), 2 === a9.yT ? l8() : this.aUZ(), this.e0++, 27 < bb.lo - this.a58)) && this
		.aUa(), lE(), bb.dc && (bb.dc = !1, wc()), this.a58 = bb.lo
	}, this.aUa = function() {
		bb.dc = !0, lG(), this.e0 = 0
	}, this.aUZ = function() {
		var tz, a7;
		if (this.aUV !== 7 * this.aCj) lA(), bX.a9c();
		else {
			tz = !1;
			loop: for (; this.aUb() && (tz = !0, lA(), 2 !== a9.yT) && 0 < this.aUX.length;)
				for (a7 = this.aUY - 2; 0 <= a7; a7--)
					if (lA(), 2 === a9.yT) break loop;
			tz ? bX.a9c() : (l8(), bX.a2h())
		}
	}, this.aUb = function() {
		return 0 < this.aUX.length && (this.aCj++, b4.ni.iS(this.aUX[0]), this.aUX.shift(), !0)
	}
}

function aUc() {
	var aUd, aUe, aUf, aCj, aUg, e0 = 0,
		lo = bb.lo;

	function aUj() {
		! function() {
			if (!a9.gu) return;
			if (a9.k0) return;
			if (2 !== a9.yT)
				if (aUg % 7 != 0) aUg++;
				else if (aCj === a9.a2l) {
				if (!aUm()) return;
				aS.a94(aCj), a9.og.iS()
			} else {
				if (!aUm()) return;
				aUg++, aCj++, ab.a2e(), ab.lH(!0)
			}
			return 1
		}() && aUm() && lA()
	}

	function aUk() {
		e0 = 0, (a9.gu ? (bb.dc = aS.a94(aCj - (aUg % 7 == 0 ? 0 : 1) + aUg % 7 / 7) || bb.dc, lJ) : aI.gj || !b8.a37 ? lJ : (bb.dc = !0, lG))()
	}

	function aUm() {
		var a7, eY, aUn = b5.od.aPb,
			fG = b5.od.aPc,
			fI = b5.od.aPd,
			fK = b5.od.aPe,
			aUo = b5.od.aPf,
			aUp = b5.od.aPg;
		if (!(aUd >= aUp.length)) {
			if (aUp = aUp[aUd], aUo[aUd]) {
				for (eY = aUe + aUp, a7 = aUe; a7 < eY; a7++) b4.ni.oQ(aUn[a7], fG[a7], fI[a7], fK[a7]);
				aUe += aUp, aUd++
			} else ++aUf >= aUp && (aUd++, aUf = 0);
			return 1
		}
		aJ.zi("Replay file smaller than expected."), b8.a0a(!1), a9.yT = 2
	}
	this.aUV = 0, this.dU = function() {
		aUg = aCj = aUf = aUe = aUd = 0
	}, this.iS = function() {
		var aSR;
		at.iS(), b8.a6W() < 1.7 ? 0 === e0 ? bb.lo >= lo && (aSR = bb.a93 / b8.a6W(), lo += aSR * Math.floor(1 + (bb.lo - lo) / aSR), 2 === a9.yT || aI.gj || !b8.a37 ? l8() : (aUj(), bX.a9c()), e0++) : aUk() : function() {
			var aSR;
			if (bb.lo >= lo)
				if (2 === a9.yT || aI.gj || !b8.a37) l8(), lo = bb.lo;
				else {
					for (aSR = bb.a93 / b8.a6W(), 16 < (bb.lo - lo) / aSR && (lo = bb.lo - 16 * aSR); bb.lo >= lo && 2 !== a9.yT;) lo += aSR, aUj();
					bX.a9c()
				} aUk()
		}(), lE(), bb.dc && (bb.dc = !1, wc())
	}, this.yd = function() {
		b5.od.aPg.length - aUd <= 2 || aJ.zi("Replay file larger than expected.")
	}
}

function aUq() {
	var e0 = 0,
		lo = bb.lo;
	this.aUV = 0, this.iS = function() {
		at.iS(), a9.gu ? lJ() : 0 === e0 ? bb.lo >= lo && (lo += bb.a93 * Math.floor(1 + (bb.lo - lo) / bb.a93), 2 === a9.yT || aI.gj ? l8() : (lA(), bX.a9c()), e0++) : ((aI.gj ? lJ : (bb.dc = !0, lG))(), e0 = 0), lE(), bb.dc && (bb.dc = !1,
		wc())
	}
}

function dK() {
	this.yc = null, this.dc = !1, this.lo = 0, this.a93 = 56;
	var aUr = 0;

	function aUs() {
		bb.lo = aUr = performance.now(), bb.yc.iS(), window.requestAnimationFrame(aUs)
	}
	this.dU = function() {
		this.a35(), window.requestAnimationFrame(aUs), this.lo = performance.now()
	}, this.a2w = function() {
		a9.gi ? (this.yc = new aUc, this.yc.dU()) : a9.k0 ? this.yc = new aUq : (this.yc = new aUW, this.yc.dU())
	}, this.a35 = function() {
		this.yc = new aUU, this.dc = !0
	}, this.iS = function() {
		this.yc.aUV++
	}, this.jb = function() {
		return this.yc.aUV
	}, this.aO3 = function() {
		var dk = performance.now();
		dk < aUr + 1e3 || (this.lo = dk, this.yc.iS())
	}
}

function cm() {
	var li = 0,
		aUt = !0;

	function aUv(p6) {
		8 !== aW.zb() || 2 !== ac.a1l[a9.eI] && (0 !== ac.lV[a9.eI] || a9.gu) || aJ.a4p(p6)
	}
	this.iS = function() {
		var dk, a5A;
		bb.lo > li && (li = bb.lo + 2500, dk = new Date, a5A = dk.getUTCSeconds(), aUt ? a5A < 45 && (aUt = !1) : a5A < 45 || (aUt = !0, (a5A = dk.getUTCMinutes() + 1) % 15 == 0 && aUv(30 === a5A ? "Upcoming Battle Royale Contest!" :
			"Upcoming Alliance Contest!")))
	}
}

function cg() {
	var ly, lz, mB, mC, aUw = 0,
		aUx = 0;

	function aUz() {
		return Math.pow(Math.pow(mB - ly, 2) + Math.pow(mC - lz, 2), .5)
	}

	function aUy(e) {
		ly = at.pV * e.touches[0].clientX, lz = at.pV * e.touches[0].clientY, mB = at.pV * e.touches[1].clientX, mC = at.pV * e.touches[1].clientY
	}
	this.a02 = function(e) {
		return 1 < e.touches.length ? (aUx = bb.lo, aUw = 3, aUy(e), aH.qx(), !0) : (aUw = 0, !1)
	}, this.a03 = function(e) {
		var aHM, hd, he;
		return 0 !== a9.yT && 1 < e.touches.length && (aUw = Math.max(aUw - 1, 0), aD.mG() && (aHM = aUz(), aUy(e), e = aUz(), hd = Math.floor((ly + mB) / 2), he = Math.floor((lz + mC) / 2), aO.a6w(hd, he, Math.max(.125, e) / Math.max(.125,
			aHM)), bb.dc = !0), !0)
	}, this.a0Q = function() {
		var ef, eh;
		return !!(aUw && (aUw = 0, bb.lo < aUx + 500)) && (ef = (ly + mB) / 2, eh = (lz + mC) / 2, aH.a0K(ef, eh), aH.click(ef, eh, !0) && (bb.dc = !0), !0)
	}
}

function cv() {
	this.size = 0, this.e0 = 0, this.a8 = null, this.dU = function(a8) {
		this.e0 = 0, this.a8 = a8, this.size = a8.length
	}, this.zo = function() {
		this.a8 = null
	}, this.oP = function(size) {
		for (var f0 = 0, a8 = this.a8, mG = this.e0 + size - 1, a7 = this.e0; a7 <= mG; a7++) f0 |= (a8[a7 >> 3] >> 7 - (7 & a7) & 1) << mG - a7;
		return this.e0 += size, this.e0 > 8 * this.size && console.error("Unwrapper Overflow"), f0
	}, this.aOf = function(size) {
		var es = size >> 1;
		return (1 << es) * this.oP(size - es) + this.oP(es)
	}, this.aOe = function(aV0) {
		return this.size === b9.aOY(aV0)
	}, this.aPt = function(vQ, aV1, aV2) {
		var g1 = this.oP(vQ);
		if (!g1) return null;
		for (var vQ = Math.max(g1, aV2), g = new(aV1 <= 8 ? Uint8Array : aV1 <= 16 ? Uint16Array : Uint32Array)(vQ), a7 = 0; a7 < g1; a7++) g[a7] = this.oP(aV1);
		aV2 = g[g1 - 1];
		return aV2 && g.fill(aV2, g1), g
	}, this.aPu = function(vQ, aV3, aV2) {
		var g1 = this.oP(vQ);
		if (!g1) return null;
		for (var vQ = Math.max(g1, aV2), g = new Array(vQ), a7 = 0; a7 < g1; a7++) g[a7] = this.aPr(aV3);
		return g.fill(g[g1 - 1], g1), g
	}, this.aPr = function(vQ) {
		return bC.uW.ua(this.oP(vQ))
	}, this.aPs = function() {
		var p6 = bB.rr.rs(bB.rr.rt(this.oP(30))),
			p6 = b6.z3.a2Z(p6, "_", "/");
		p6 = b6.z3.a2Z(p6, "-", "+");
		for (var aV4 = "";
			(p6.length + aV4.length) % 4;) aV4 += "=";
		p6 = "data:image/png;base64," + p6 + aV4;
		var aE6 = new Image;
		aE6.onload = function() {
			b5.aEV.aEW(aE6), aE6.onload = null, aE6 = null
		}, aE6.src = p6
	}
}

function dE() {
	this.aQj = 0, this.aQk = 0, this.aQf = 0, this.aQg = 0, this.aQh = 0, this.aQi = 0, this.a9d = [0, 0, 0, 0], this.mF = function() {
		this.aQj = aO.we(), this.aQk = aO.wf(), this.aQf = -this.aQj, this.aQg = -this.aQk, this.aQh = at.a1 / hw, this.aQi = at.j7 / hw, this.a9d[0] = Math.floor(this.aQf), this.a9d[1] = Math.floor(this.aQg), this.a9d[2] = Math.floor(this.a9d[
			0] + this.aQh + 1), this.a9d[3] = Math.floor(this.a9d[1] + this.aQi + 1), bX.a9a = !0
	}
}

function ch() {
	var a5f, li;
	this.dU = function() {
		a5f = 1, li = 0
	}, this.iS = function() {
		0 < a5f && (li = 0 === li ? bb.lo + 16 : li, a5f = (a5f -= .001 * (bb.lo - li)) < 0 ? 0 : a5f, li = bb.lo, bb.dc = !0)
	}, this.tM = function() {
		0 < a5f && (tN.fillStyle = "rgba(0,0,0," + a5f + ")", tN.fillRect(0, 0, at.a1, at.j7))
	}
}

function a2() {
	this.size = 0, this.e0 = 0, this.a8 = null, this.dU = function(a8) {
		this.e0 = 0, this.a8 = a8, this.size = a8.length
	}, this.a3 = function(aV0) {
		return this.dU(new Uint8Array(this.aOY(aV0))), this.a8
	}, this.zo = function() {
		this.a8 = null
	}, this.a4 = function(size, a5C) {
		for (var a8 = this.a8, mG = this.e0 + size - 1, a7 = this.e0; a7 <= mG; a7++) a8[a7 >> 3] |= (a5C >> mG - a7 & 1) << 7 - (7 & a7);
		this.e0 += size, this.e0 > 8 * this.size && console.error("Wrapper Overflow")
	}, this.aOX = function(size, a5C) {
		var es = size >> 1,
			eb = 1 << es;
		this.a4(size - es, bH.dl(a5C, eb)), this.a4(es, a5C % eb)
	}, this.aV7 = function(size) {
		for (var a8 = this.a8, mG = this.e0 + size, a7 = this.e0; a7 < mG; a7++) a8[a7 >> 3] &= 255 ^ 128 >>> (7 & a7)
	}, this.aOY = function(aV0) {
		return aV0 + 7 >> 3
	}, this.aV8 = function(g, iu, mG, aV9) {
		for (var a7 = iu; a7 < mG; a7++) this.a4(aV9, g[a7])
	}
}

function cu() {
	this.dU = function() {
		this.g = [], this.e0 = 0
	}, this.aP0 = function() {
		return new Uint8Array(this.g)
	}, this.a4 = function(aVA, value) {
		for (var g = this.g, mG = this.e0 + aVA - 1, aVB = 1 + (mG >> 3); g.length < aVB;) g.push(0);
		for (var a7 = this.e0; a7 <= mG; a7++) g[a7 >> 3] |= (value >> mG - a7 & 1) << 7 - (7 & a7);
		this.e0 += aVA
	}, this.db = function(g, vQ, aV1) {
		var aVC = b6.pZ.a1D(g);
		this.a4(vQ, aVC);
		for (var a7 = 0; a7 < aVC; a7++) this.a4(aV1, g[a7])
	}, this.aQB = function(g, vQ, aV3) {
		var aVC = b6.pZ.a1D(g);
		this.a4(vQ, aVC);
		for (var a7 = 0; a7 < aVC; a7++) this.aQ9(g[a7], aV3)
	}, this.aQ9 = function(p6, vQ) {
		var eY = p6.length;
		this.a4(vQ, eY);
		for (var a7 = 0; a7 < eY; a7++) this.a4(16, p6.charCodeAt(a7))
	}, this.aQA = function(a1G) {
		var aVD = (a1G = a1G.toDataURL()).split(",");
		if (aVD.length < 2) console.log("error 266");
		else {
			a1G = b6.z3.a2Z(a1G = aVD[aVD.length - 1], "/", "_"), a1G = b6.z3.a2Z(a1G, "\\+", "-");
			var a1G = b6.z3.a2Z(a1G, "=", ""),
				uj = bC.rr.ug(a1G),
				eY = uj.length;
			this.a4(30, eY);
			for (var a7 = 0; a7 < eY; a7++) this.a4(6, uj[a7])
		}
	}
}
a(), self.aiCommand746 = function(f0) {
	0 === f0 ? bn() : 1 !== f0 || !u || 1 !== u.id || u.f1 < 14 || bF.f2()
}, setTimeout(bn, 1e4), window.onload = function() {
	bn()
};