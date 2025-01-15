var h, a9, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, at, au, av, aw, ax, ay, az, b0, b1, b2, b3, b4, b5, b6, b7, b8,
	b9, bA, bB, bC, bD, bE, bF, bG, bH, bI, bJ, bK, bL, bM, bN, bO, bP, n, bQ, bR, bS, bT, bU, bV, bW, bX, bY, bZ, ba, bb, bc, bd, u, be, bf, bg, l, bh, bi, bj, bk, bl, bm, dg, dh, a5, di, a6, fN, fO, fP, fQ, fR, fS, fT, fU, fV, fW, fX, fY, fZ, hw,
	hv, hx, a5x, kw, jP, zz, tK, we, a9h, a2z, a30, S = ["100%", "div", "⬅️ ", "canvas", "absolute", "inherit", "rgb(", "rgba(", "auto", "none", "hidden", "   ", "center", "Data", "<br>", "1em", "flex", "0.8em", "territorial.io", "input",
		"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==", "click", "0.5em", "' target='_blank'>", "undefined",
		"span", "</a>", "pointer", "password", "nowrap", "function", "Value", "Enter", "1 Minute", "1 Hour", "0.6em", "text", "string", "rgba(0,0,0,0.8)", "number", "mouseleave", "focus", "break-word", "blur", "Player ", "NoStack", "Escape", "50%",
		"20 Seconds", "1.2em", "0.0em 0.9em", ". Duration: x", " voted with ", " / ", "🔄 Reload", "underline", "top", "tls7", "Trebuchet MS", "rgba(140,10,10,0.75)", "rgba(100,0,0,0.8)", "rgba(10,140,10,0.75)", "rgba(0,100,0,0.8)", "rgba(0,",
		"rgb(10,220,10)", "pre", "placeholder", "mouseover", "mouseout", "middle", "long", "logo", "loading", "keydown", "italic ", "inline-block", "file", "error", "en-US", "data:image/png;base64,", "break-all", "bold", "blur(4px)", "arena",
		"account", "accept", "_blank", "Space", "Seed", "Reload", "Interest", "Censored", "Bot ", "Back", "<a href='", "1v1", "1 Day", "0px", "000", "0.75em", "0.4em 0em", "0.2em", ",0,0.85)", " solid white;}", " Rank: ", " / 160", " -> "
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
	this.dj = 1081, this.j = 2021, this.rVersion = 3, this.dU = function() {
		dg = 2;
		var dk = bH.dl(this.j, 10) % 100;
		dh = "15 Jan 2025 [" + bH.dl(this.j, 1e3) + "." + (dk < 10 ? "0" : "") + dk + "." + this.j % 10 + "]", a5 = true, a6 = function() {
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
		for (var eC = av.k7, jx = a9.je, a7 = eC - 1; 0 <= a7; a7--) this.im[a7 + jx] = 5;
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
	ax.iS(), aC.iS(), aa.iS(), b0.iS(), aB.iS(), aj.iS(), bJ.s.iS(), ah.lB(), aR.iS(), av.iS(), bN.iS(), bR.iS(), ab.iS(), ab.lC(), aS.iS(), bL.iS(), aQ.iS(), aL.iS(), aJ.iS(), b1.iS(), aN.iS(), aq.iS(), bZ.iS(), bd.iS(), aw.s.iS(), aw.lD.iS(), n
	.iS(), b5.iS(), bb.iS()
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
		(b6.fu.gk(0) || b6.fu.gk(1)) && b6.fu.gl(player) && bM.o5(player) && b5.od.oe(8, player)
	}, this.oc = function(player) {
		bM.oc(player), b5.od.oe(9, player)
	}, this.o7 = function(player) {
		aq.oz(player) && (b5.od.oe(3, player, 1, 0), aq.o7(player))
	}, this.gz = function(player, hu, eK, il) {
		b6.fu.gk(1) && b6.fu.gl(player) && b6.fu.oh(player, il) && b6.fu.oj(player, il) && bI.hz(eK) && ai.e9.eS(player, eK) && (aZ.iz(player, bK.eU[0]) || aZ.jI(player)) && (b5.od.oe(10, player, (hu << 10) + bK.eU[0], eK), il = b6.fu.kh(player,
			hu), ac.g0[player].push(bK.eZ[0]), aZ.ii(player, il, bK.eU[0]), aB.ij(player, !0), bZ.p0(player))
	}
}

function p1() {
	var p3;
	this.p2 = [], this.p3 = document.createElement("div"), this.p4 = function(p5, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = p5, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.4em", title.style.overflowWrap = "break-word", this.p3.appendChild(
			title), title
	}, this.p6 = function(p5, marginBottom) {
		var p7 = document.createElement("p");
		return p7.textContent = p5, p7.style.fontSize = "0.75em", p7.style.lineHeight = "1.2em", p7.style.marginBottom = marginBottom || "0", this.p3.appendChild(p7), p7
	}, this.p8 = function(p5) {
		var p9 = document.createElement("p");
		return p9.textContent = p5, p9.style.fontSize = "1em", p9.style.marginBottom = "0", p9.style.whiteSpace = "pre-wrap", p9.style.overflowWrap = "break-word", this.p3.appendChild(p9), p9
	}, this.pA = function(pB, fontSize) {
		var p3 = document.createElement("div");
		return p3.innerHTML = pB, p3.style.fontSize = fontSize || "1em", p3.style.lineHeight = "1.2em", this.p3.appendChild(p3), p3
	}, this.pC = function(pD) {
		for (var pE = pD.pE, eY = pE.length, a7 = 0; a7 < eY; a7++) this.p3.appendChild(pE[a7])
	}, this.pF = function(pG) {
		return this.p2.push(pG), this.p3.appendChild(pG.e), pG
	}, this.resize = function() {
		for (var eY = this.p2.length, a7 = 0; a7 < eY; a7++) this.p2[a7].resize && this.p2[a7].resize()
	}, (p3 = this.p3).style.position = "absolute", p3.style.height = "auto", p3.style.padding = "0.5em"
}

function pH(pI, pJ) {
	var p3 = document.createElement("div");

	function pS() {
		var a7, pT, j7, g7, eb, pN = at.pU * p3.offsetWidth,
			pV = new Float64Array(function(pN) {
				var a1 = .25 * b6.pO.pP(.6) * at.pQ;
				return Math.max(Math.floor(pN / a1), 1)
			}(pN)),
			pW = bY.pW,
			pX = (pN - (pV.length + 1) * bY.gap) / (pV.length * at.pU);
		for (pV.fill(pW), a7 = 0; a7 < pJ.length; a7++) pT = (eb = pJ[a7].p3).style, j7 = b6.pY.min(pV), g7 = pV.indexOf(j7), pT.top = b6.pO.pZ(j7), pT.left = b6.pO.pZ(pW + g7 * (pX + pW)), pT.width = b6.pO.pZ(pX), b6.pO.pa(eb, 5), pV[g7] += eb
			.offsetHeight + 3 * pW;
		p3.style.height = b6.pO.pZ(b6.pY.max(pV) - 2 * pW)
	}
	this.pK = p3, this.pL = pJ, this.resize = function() {
		var a7;
		for (a7 = 0; a7 < pJ.length; a7++) pJ[a7].resize();
		pS(), pS()
	}, p3.style.width = "100%", p3.style.maxWidth = "100%", pI.style.lineHeight = "1.5em", pI.style.overflowX = "hidden", pI.style.overflowY = "auto";
	for (var a7 = 0; a7 < pJ.length; a7++) p3.appendChild(pJ[a7].p3);
	pI.appendChild(p3)
}

function q(pb, pc, pd, pe, pf) {
	var self, pg = document.createElement("button");

	function pn() {
		var pt;
		bF.ps() || (pt = b6.color.pu(pd), !1 !== pe && 0 < pt[0] && pt[0] < 255 && pt[0] === pt[1] && pt[0] === pt[2]) || (pg.style.backgroundColor = b6.color.pv(pd, pt[3] && pt[3] < 120 ? 150 : 50))
	}

	function pm() {
		if (pe) {
			var pt = b6.color.pu(pd);
			if (pt[0] === pt[1] && pt[0] === pt[2]) return
		}
		pc && ((pt = pc(this)) ? 2 === pt && pn() : px(this))
	}

	function pp() {
		this.style.backgroundColor = pd
	}

	function po() {
		px(this)
	}

	function px(eb) {
		eb.style.backgroundColor = pd, eb.blur()
	}
	this.button = pg, this.ph = pc, this.pi = pd, this.pl = function(pq) {
		pq = 1.1 - Math.min(.01 * pb.length, .6) + .2 * pq;
		pg.style.fontSize = pq.toFixed(1) + "em"
	}, this.pk = function(et) {
		et ? 1 === et ? et = b7.mk : 2 === et && (pe = 1, et = b7.mk) : (pe = 0, et = b7.mU), this.pi = pd = et, pg.style.backgroundColor = et
	}, self = this, pg.innerHTML = pb, pg.style.color = pf ? b7.nR : b7.mY, pg.style.userSelect = "none", pg.style.outline = "none", pg.style.overflowWrap = "break-word", self.pk(pd), pg.style.border = "none", pg.style.font = "inherit", self.pl(
		0), pg.style.padding = "0em 0.3em", pg.onclick = pm, pg.addEventListener("mouseover", pn), pg.addEventListener("mouseout", po), pg.addEventListener("focus", pn), pg.addEventListener("blur", pp)
}

function py(pz, pI) {
	var p3;
	this.resize = function() {
		for (var a7 = 0; a7 < pz.length; a7++) b6.pO.pa(pz[a7].button);
		p3.style.gap = p3.style.padding = b6.pO.pZ(bY.pW)
	}, (p3 = document.createElement("div")).style.display = "grid", p3.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", p3.style.overflowY = "auto", p3.style.gridAutoRows = "5.3em", p3.style.maxHeight = "100%";
	for (var a7 = 0; a7 < pz.length; a7++) pz[a7].pl(1), p3.appendChild(pz[a7].button);
	pI.appendChild(p3)
}

function q1(q2, q3, q4) {
	this.ef = 0, this.eh = 0, this.a1 = 0, this.j7 = 0, this.resize = function() {
		this.j7 = Math.min(b6.pO.pP(q4 || .5) * q2[1] * at.pQ, at.j7 - 2 * bY.gap), this.a1 = Math.min(this.j7 * (q2[0] / q2[1]), at.a1 - 2 * bY.gap), this.j7 = q2[1] * this.a1 / q2[0], this.ef = bY.gap + q3[0] * (at.a1 - this.a1 - 2 * bY.gap),
			this.eh = bY.gap + q3[1] * (at.j7 - this.j7 - 2 * bY.gap)
	}, this.q5 = function() {
		return this.ef + .5 * this.a1
	}
}

function q6(q7, q8) {
	var qH, self, q9 = document.createElement("div"),
		qA = document.createElement("div"),
		qB = document.createElement("div"),
		qC = null,
		qI = (this.qD = new qE({
			value: "",
			e0: -1
		}, 0, qF, function(e) {
			qC.qP.textContent = 127 - e.target.value.length
		}), 0),
		qJ = 1,
		qK = 0,
		qL = 1048575,
		qM = [];

	function qF() {
		q7(), qC.qP.textContent = 127
	}

	function qe(bo) {
		qJ ? q9.scrollTop = q9.scrollHeight : bo && (q9.scrollTop = qK)
	}

	function qa(qZ, pG) {
		var qf, p3;
		pG && (qf = 0 < pG.id, (p3 = document.createElement("div")).style.margin = "0.6em 0.6em", qf && (p3.style.paddingLeft = "0.7em"), p3.style.font = "inherit", p3.style.marginLeft = p3.style.marginRight = "inherit", p3.style.fontSize = pG
			.fontSize.toFixed(2) + "em", qf && (p3.style.fontStyle = "italic"), 0 < pG.qg.length && pG.qg[0] && p3.appendChild(qh(pG.qg[0], 14 === pG.id)), p3.appendChild(qi(pG.qj[0])), 2 === pG.qg.length && p3.appendChild(qh(pG.qg[1], 1)), 2 ===
			pG.qj.length && p3.appendChild(qi(pG.qj[1])), qZ.appendChild(p3))
	}

	function qh(qg, qk) {
		if (qg.ql) {
			for (var a7 = qM.length - 1; 0 <= a7; a7--)
				if (qg.qm === qM[a7].qm) {
					qg = qM[a7], a7 < 40 && qM.push(qg);
					break
				}
		} else qM.push(qg), 50 < qM.length && qM.shift();
		var qP = document.createElement("span");
		return qP.textContent = bk.qb.qn(qg, bk.s.qT[0], qk), qP.style.display = "inline-block", qP.style.color = bk.qb.qo(qg.qp), qP.style.cursor = "pointer", qP.style.margin = "0", qP.style.font = "inherit", qP.style.minWidth = qP.style.minHeight =
			"1em", bk.qb.qq(qg) && (qP.style.textDecoration = "underline"), bk.qb.qr(qg.qp, qg.qs) && (qP.style.fontWeight = "bold"), qP.onclick = function(e) {
				q8(e, qg)
			}, bF.ps() || (qP.onmouseover = function(e) {
				bk.qt.qu(e, qg)
			}), qP
	}

	function qi(qj) {
		var qP = document.createElement("span");
		return qP.textContent = qj.p5, qP.style.color = qj.color, qP.style.margin = "0", qP.style.font = "inherit", qj.qv && (qP.style.fontWeight = "bold"), qP
	}
	this.qQ = function(qR) {
			qL = 1048575, qA.textContent = "", qR || this.lI()
		}, this.lI = function() {
			var qS = bk.s.qT[0],
				qU = bk.s.qV[qS],
				qW = qU.qW,
				eY = qW.length,
				iu = 1048575 === qL ? 0 : eY - (qU.qX - qL + 1048575) % 1048575,
				kP = (qL = qU.qX, iu = Math.max(iu, 0), bk.s.qY.length);
			if (!(eY <= iu && 0 === kP)) {
				for (var qZ = document.createDocumentFragment(), a7 = 0; a7 < kP; a7++) qa(qZ, bk.qb.qc(bk.s.qY[a7]));
				for (bk.s.qY = [], a7 = iu; a7 < eY; a7++) qa(qZ, bk.qb.qd(qS, qW[a7]));
				qA.appendChild(qZ), qe()
			}
		}, this.show = function(pI) {
			pI.appendChild(q9), pI.appendChild(qB), this.resize(pI)
		}, this.qw = function(pI) {
			pI.removeChild(q9), pI.removeChild(qB)
		}, this.resize = function(pI) {
			qI = pI ? pI.offsetHeight : qI;
			var pI = b6.pO.qy(.04, .75),
				qz = Math.max(pI, qI - pI),
				r0 = at.a1 / at.pU,
				r1 = .7 * r0,
				qz = (qB.style.top = b6.pO.pZ(qI - pI), qB.style.height = b6.pO.pZ(pI), q9.style.top = b6.pO.pZ(qI - pI - qz), q9.style.height = b6.pO.pZ(qz), b6.pO.pa(q9, 2), this.qD.e.style.width = b6.pO.pZ(r1), this.qD.e.style.fontSize = qH.button
					.style.fontSize = b6.pO.pZ(.5 * pI), b6.pO.pa(this.qD.e, 6), qH.button.style.left = b6.pO.pZ(r1), qH.button.style.width = b6.pO.pZ(r0 - r1), .385 * pI);
			qA.style.marginLeft = qA.style.marginRight = b6.pO.pZ(.5 * qz), qA.style.fontSize = b6.pO.pZ(qz), qe(1)
		}, (self = this).qD.e.qN = 127, q9.style.position = "absolute", q9.style.top = "0", q9.style.left = "0", q9.style.width = "100%", q9.style.overflowX = "hidden", q9.style.overflowY = "auto", q9.style.font = "inherit", q9.style
		.backgroundColor = b7.mW, q9.addEventListener("scroll", function() {
			qK = q9.scrollTop, qJ = qK < q9.scrollHeight - q9.clientHeight - 2 ? 0 : 1
		}), qA.style.font = "inherit", qB.style.position = "absolute", qB.style.left = "0", qB.style.width = "100%", self.qD.e.setAttribute("placeholder", L(13)), self.qD.e.style.position = "absolute", self.qD.e.style.top = "0", self.qD.e.style
		.left = "0", self.qD.e.style.height = "100%", self.qD.e.style.backgroundColor = b7.mT, self.qD.e.style.textAlign = "center", (qH = new q(L(14), qF)).button.top = "0", qH.button.style.position = "absolute", qH.button.style.height = "100%", qH
		.pk(b7.nc), qC = new qO("127", qH.button, 1, 1), q9.appendChild(qA), qB.appendChild(self.qD.e), qB.appendChild(qH.button)
}

function r3(r4, pb, r5) {
	function click() {
		var value = 1 - r4.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + pb, void 0 !== r4.e0 ? bf.r6.r7(r4.e0, value) : r4.value = value, r5 && r5(value)
	}
	var e;
	pb = pb || L(15), this.e = document.createElement("p"), (e = this.e).textContent = (r4.value ? "🟩 " : "⬜ ") + pb, e.style.margin = "0", e.style.marginBottom = "0.5em", e.style.cursor = "pointer", e.addEventListener("click", click)
}

function r8(pI, pB) {
	var p3 = document.createElement("div");
	this.pK = p3, this.resize = function() {
		p3.style.padding = b6.pO.pZ(bY.pW), p3.style.lineHeight = b6.pO.pZ(b6.pO.qy(.035))
	}, pI.style.overflowX = "hidden", pI.style.overflowY = "auto", p3.innerHTML = pB, pI.appendChild(p3)
}

function r9(rA) {
	var p3 = document.createElement("div");
	this.e = p3, this.rB = rA, this.resize = function() {
		for (var eY = rA.length, a7 = 1; a7 < eY; a7++) b6.pO.pa(rA[a7], 4)
	};
	var a7, eY = rA.length;
	for (p3.style.width = "100%", p3.style.height = "2.7em", p3.style.marginTop = "0.6em", p3.style.border = "inherit", a7 = 0; a7 < eY; a7++) rA[a7].style.verticalAlign = "top", rA[a7].style.width = (100 / eY).toFixed(2) + "%", rA[a7].style.height =
		"100%", rA[a7].style.fontSize = "0.75em", p3.appendChild(rA[a7])
}

function rC(rD, pd, rE) {
	this.p3 = document.createElement("div"), this.pz = rD;
	var rF = 0;
	this.resize = function(pI, rH) {
		var eY = rD.length;
		if (!rE)
			for (var a7 = 1; a7 < eY; a7++) b6.pO.pa(rD[a7].button, 4);
		for (var rI = 0, a7 = 0; a7 < eY; a7++) rI += rD[a7].button.offsetWidth;
		if (pI && (rF = pI.offsetWidth), rH && rI < rF)
			for (a7 = 0; a7 < eY; a7++) rD[a7].button.style.width = (100 * rD[a7].button.offsetWidth / rI).toFixed(2) + "%";
		else
			for (a7 = 0; a7 < eY; a7++) rD[a7].button.style.width = "auto";
		rH || this.resize(pI, 1)
	};
	var rG = this;
	rG.p3.style.height = rG.p3.style.maxHeight = "100%";
	for (var a7 = 0; a7 < rD.length; a7++) rD[a7].pk(pd), rD[a7].button.style.height = "100%", rD[a7].button.style.padding = "0.0em 0.9em", rG.p3.appendChild(rD[a7].button)
}

function rJ() {
	var e;
	this.e = document.createElement("hr"), this.resize = function() {
		b6.pO.pa(this.e, 8, b7.mh)
	}, (e = this.e).style.marginBottom = e.style.marginTop = "0.65em", e.style.marginLeft = e.style.marginRight = "-4%", e.style.border = "none"
}

function rK() {
	var rL = document.createElement("div"),
		rM = 0,
		rN = 0;
	this.show = function(ef, eh, p5, rO) {
		if (rM) {
			if (!rO) return;
			this.qw()
		}
		rN = rO, rM = 1, rL.textContent = p5, b6.pO.pa(rL, 5), rL.style.font = b6.pO.rP(0, b6.pO.qy(.015)), rL.style.padding = "0.3em 0.6em", rL.style.left = ef + "px", rL.style.top = eh - b6.pO.qy(.036) + "px", document.body.appendChild(rL), rL
			.style.top = eh - rL.offsetHeight + rN * bY.rQ + "px"
	}, this.qw = function(rR) {
		!rM || rR && rN || (rM = 0, document.body.removeChild(rL))
	}, rL.style.position = "absolute", rL.style.backgroundColor = b7.mU, rL.style.color = b7.mY, rL.style.whiteSpace = "pre", rL.style.pointerEvents = "none"
}

function qE(rS, type, rT, rU) {
	var e;
	this.e = document.createElement("input"), (e = this.e).type = type ? "number" : "text", e.id = "input" + n.s.rV++, e.value = rS.value, e.style.width = "100%", e.style.userSelect = "none", e.style.outline = "none", e.style.resize = "none", e.style
		.border = "inherit", e.style.font = "inherit", e.style.color = b7.mY, e.style.backgroundColor = b7.mR, e.style.fontSize = "1em", e.style.padding = "0.1em 0.2em", e.addEventListener("focus", function() {
			at.rW++
		}), e.addEventListener("blur", function() {
			at.rW--, -1 !== rS.e0 && bf.r6.r7(rS.e0, e.value)
		}), e.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== rS.e0 && bf.r6.r7(rS.e0, e.value), rT ? rT() : e.blur())
		}), rU && e.addEventListener("input", function(pG) {
			rU(pG)
		})
}

function rX(pI, data) {
	var eY = data.rY.length,
		rZ = document.createElement("div"),
		ra = document.createElement("div"),
		rb = document.createElement("div"),
		rc = new Array(eY),
		pJ = new Array(eY),
		rd = new Array(data.re.length),
		rf = b6.color.mS(70, 70, 0, .35);

	function pv() {
		this.style.backgroundColor = b6.color.pv(rf, 160)
	}

	function rj() {
		this.style.backgroundColor = rf
	}

	function pS() {
		var er;
		for (pI.style.font = b6.pO.rP(0, b6.pO.rs(.026, .5, .03)), a7 = 1; a7 < rd.length; a7++) b6.pO.pa(rd[a7], 4);
		if (b6.pO.pa(rZ, 2), eY) {
			for (var gy, rt = rZ.offsetWidth, ru = rb.offsetWidth, a7 = 0; a7 < rd.length; a7++) gy = .01 * data.ri[a7] * ru, rd[a7].style.width = (100 * gy / rt).toFixed(2) + "%";
			var kP = data.rY[0].length;
			for (a7 = 0; a7 < eY; a7++)
				for (b6.pO.pa(rc[a7], 2), er = 1; er < kP; er++) b6.pO.pa(pJ[a7][er], 4)
		}
	}
	this.resize = function() {
			pS(), pS()
		}, pI.style.display = "flex", pI.style.flexDirection = "column", ra.style.overflowX = "hidden", ra.style.overflowY = "auto",
		function() {
			var eb, a7, rY = data.rY,
				kP = eY ? rY[0].length : 0;
			for (a7 = 0; a7 < eY; a7++) {
				rc[a7] = document.createElement("div"), rc[a7].style.backgroundColor = function(a7) {
					return a7 % 2 == 1 ? b6.color.mS(130, 130, 130, .35) : b7.mX
				}(a7), rc[a7].style.width = "100%", rc[a7].style.display = "flex", pJ[a7] = new Array(kP);
				for (var er = 0; er < kP; er++) pJ[a7][er] = eb = document.createElement("div"), eb.style.display = "flex", eb.style.justifyContent = "center", eb.style.wordBreak = "break-all", eb.style.padding = "0.4em 0em", eb.style.width = data
					.ri[er] + "%", eb.innerHTML = rY[a7][er].f0, 1 === rY[a7][er].dk && (eb.name = "" + a7, eb.style.color = b7.nR, eb.style.backgroundColor = rf, eb.addEventListener("mouseover", pv), eb.addEventListener("mouseout", rj), function(eb,
						qm, rl) {
						2147483647 !== rl && eb.addEventListener("click", function() {
							b9.a3(30), b9.a4(30, qm), bD.dU(b9.a8), this.style.backgroundColor = rf, n.o(8, n.rm, new rn(25, {
								ro: 0,
								qm: bB.rp.rq(bB.rp.rr(5)),
								rl: rl
							}))
						})
					}(eb, rY[a7][er].qm, rY[a7][er].rl)), rc[a7].appendChild(eb)
			}
			for (rZ.style.display = "flex", rZ.style.backgroundColor = b6.color.mS(0, 120, 0, .35), a7 = 0; a7 < rd.length; a7++) rd[a7] = eb = document.createElement("div"), eb.style.display = "flex", eb.style.justifyContent = "center", eb.style
				.wordBreak = "break-all", eb.style.padding = "0.4em 0em", eb.style.width = data.ri[a7] + "%", eb.innerHTML = data.re[a7], rZ.appendChild(eb)
		}();
	for (var a7 = 0; a7 < eY; a7++) rb.appendChild(rc[a7]);
	ra.appendChild(rb), pI.appendChild(rZ), pI.appendChild(ra)
}

function rv() {
	var rz, a7, rw = document.createElement("div"),
		rx = document.createElement("div"),
		ry = document.createElement("div"),
		rb = document.createElement("div"),
		pz = [],
		re = ["Best 1v1 Player", "Top Clan", "Leading Clan Member"],
		s0 = [1, 0, 2];

	function s1(a7) {
		n.o(8, 0, new rn(21, {
			s2: s0[a7],
			s3: 0,
			s4: 10
		}))
	}
	for (this.show = function() {
			this.r7(n.s.s5), document.body.appendChild(rw)
		}, this.qw = function() {
			document.body.removeChild(rw)
		}, this.r7 = function(s5) {
			for (var a7 = 0; a7 < pz.length; a7++) pz[s0[a7]].button.innerHTML = re[a7] + "<br>" + s5[a7]
		}, this.resize = function() {
			var a7, s6 = bY.gap,
				j7 = b6.pO.s7(.085),
				a1 = Math.min(4 * j7, at.a1 - 2 * s6),
				eY = pz.length;
			for (b6.pO.s8(rw, s6, at.j7 - s6 - j7, a1, j7), b6.pO.pa(rw), b6.pO.pa(rx, 6), a7 = 0; a7 < eY - 1; a7++) b6.pO.pa(pz[a7].button, 6);
			for (a7 = 0; a7 < eY; a7++) pz[a7].button.style.fontSize = b6.pO.s9(.22 * j7);
			if (!rz) {
				if (!aX.sA()) return;
				(rz = aX.get(14)).style.width = "24%", rz.style.position = "absolute", rx.appendChild(rz)
			}
			rz.style.left = b6.pO.pZ(0), rz.style.top = "7%"
		}, rw.style.position = "absolute", rx.style.width = "25%", rx.style.height = "100%", rx.style.backgroundColor = b7.mU, ry.style.position = "absolute", ry.style.width = "75%", ry.style.height = "100%", ry.style.backgroundColor = b7.mU, ry
		.style.top = ry.style.right = b6.pO.pZ(0), ry.style.overflowX = "auto", ry.style.overflowY = "hidden", ry.style.whiteSpace = "nowrap", rb.style.height = rb.style.maxHeight = "100%", pz.push(new q("", function() {
			s1(0)
		}, b7.nA)), pz.push(new q("", function() {
			s1(1)
		}, b7.mw)), pz.push(new q("", function() {
			s1(2)
		}, b7.nG)), a7 = 0; a7 < pz.length; a7++) pz[a7].button.style.height = "100%", rb.appendChild(pz[a7].button);
	ry.appendChild(rb), rw.appendChild(rx), rw.appendChild(ry)
}

function sB(sC, sD, sE, sF, q7, q8) {
	var sG = document.createElement("div"),
		sH = document.createElement("div"),
		sI = document.createElement("div"),
		sJ = document.createElement("div"),
		sK = document.createElement("div"),
		sL = document.createElement("div"),
		sM = document.createElement("div"),
		sN = document.createElement("div"),
		sO = document.createElement("span"),
		sP = document.createElement("div");
	this.sQ = new q6(q7, q8), this.sR = new sS(q8), this.sT = [sC, sD, sE, sF], this.sX = function(sY) {
		sY = (sY / 10).toFixed(1) + "%";
		sN.style.width = sY, sO.innerHTML = sY
	}, this.sZ = function() {
		this.sR.qw(sL), this.sQ.show(sL)
	}, this.sa = function() {
		this.sQ.qw(sL), this.sR.show(sL)
	}, this.show = function() {
		document.body.appendChild(sG)
	}, this.qw = function() {
		document.body.removeChild(sG)
	}, this.resize = function(sb) {
		var sc = 1 - .4 * u.v.sd() * (at.a1 > 1.6 * at.j7),
			se = b6.pO.qy(.05 * sc),
			sf = at.j7 > at.a1,
			sg = b6.pO.qy(.07 * sc + .03 * sf),
			sh = b6.pO.qy(.04 + .02 * sf),
			sc = b6.pO.qy(.02 * sc + .01 * sf);
		sG.style.font = b6.pO.rP(0, b6.pO.qy(.025)), sH.style.height = b6.pO.pZ(se), b6.pO.pa(sH, 2), sI.style.top = b6.pO.pZ(se), sI.style.height = b6.pO.pZ(sg), b6.pO.pa(sI, 2), sJ.style.font = b6.pO.rP(0, b6.pO.qy(.02)), sJ.style.top = b6.pO
			.pZ(se + sg), sJ.style.height = b6.pO.pZ(sh), b6.pO.pa(sJ, 2), sK.style.top = b6.pO.pZ(se + sg + sh), sK.style.height = b6.pO.pZ(sg), b6.pO.pa(sK, 2), sL.style.top = b6.pO.pZ(se + sg + sh + sg), sL.style.height = b6.pO.pZ(at.j7 / at
				.pU - se - 3 * sg - sh - sc), sM.style.top = b6.pO.pZ(at.j7 / at.pU - sg - sc), sM.style.height = b6.pO.pZ(sc), b6.pO.pa(sM, 8), sO.style.font = b6.pO.rP(0, .8 * sc), sP.style.top = b6.pO.pZ(at.j7 / at.pU - sg), sP.style.height =
			b6.pO.pZ(sg), b6.pO.pa(sP, 8), sC.resize(sI), sD.resize(sI), sE.resize(sI), sF.resize(sI), sb ? this.sQ.resize(sL) : this.sR.resize()
	};
	q7 = this;
	sG.style.position = "absolute", sG.style.top = "0", sG.style.left = "0", sG.style.width = "100%", sG.style.height = "100%", sG.style.backgroundColor = b7.mX, bF.ps() || (sG.style.backdropFilter = "blur(4px)", sG.style.webkitBackdropFilter =
		"blur(4px)"), sH.style.position = "absolute", sH.style.top = "0", sH.style.left = "0", sH.style.width = "100%", sH.style.display = "flex";
	for (var g = [sI, sJ, sK, sP], a7 = 0; a7 < g.length; a7++) g[a7].style.position = "absolute", g[a7].style.left = "0", g[a7].style.width = "100%", g[a7].style.overflowX = "auto", g[a7].style.overflowY = "hidden", g[a7].style.whiteSpace =
	"nowrap";
	sL.style.position = "absolute", sL.style.left = "0", sL.style.width = "100%", sL.style.font = "inherit", sM.style.position = "absolute", sM.style.left = "0", sM.style.width = "100%", sN.style.position = "absolute", sN.style.top = "0", sN.style
		.left = "0", sN.style.height = "100%", sN.style.width = "50%", sN.style.backgroundColor = b7.mu, sO.innerHTML = "", sO.style.position = "absolute", sO.style.top = "50%", sO.style.left = "50%", sO.style.transform = "translate(-50%, -50%)", sH
		.appendChild(function() {
			var sW = document.createElement("h1");
			return sW.textContent = "Lobby", sW.style.margin = "auto", sW.style.fontFamily = "inherit", sW.style.fontSize = "inherit", sW.style.fontWeight = "inherit", sW
		}()), sI.appendChild(sC.p3), sJ.appendChild(sD.p3), sK.appendChild(sE.p3), sM.appendChild(sN), sM.appendChild(sO), sP.appendChild(sF.p3), sG.appendChild(sH), sG.appendChild(sI), sG.appendChild(sJ), sG.appendChild(sK), sG.appendChild(sL), sG
		.appendChild(sM), sG.appendChild(sP), q7.sR.show(sL)
}

function sS(q8) {
	var sG = document.createElement("div"),
		sL = document.createElement("div");
	this.lI = function() {
			sL.textContent = "", bk.qt.qw(1);
			for (var qZ = document.createDocumentFragment(), sj = bk.s.qT[0], sk = bk.sk.sl[sj], sm = bk.sk.sm[sj], a7 = 0; a7 < sk.length; a7++) ! function(qZ, pG, so, sj) {
				var qP = document.createElement("span");
				qP.textContent = (so ? "🟢 " : "⚪ ") + bk.qb.qn(pG, sj), qP.style.color = bk.qb.qo(pG.qp), qP.style.cursor = "pointer", qP.style.margin = "0.2em 0.2em 0.2em 0.2em", qP.style.width = qP.style.maxWidth = 2 === sj ? "10em" : "9em",
					qP.style.whiteSpace = "nowrap", qP.style.overflow = "hidden", qP.style.textOverflow = "ellipsis", qP.style.font = "inherit", qP.style.display = "inline-block", bk.qb.qq(pG) && (qP.style.textDecoration = "underline"), qP
					.onclick = function(e) {
						q8(e, pG)
					}, bF.ps() || (qP.onmouseover = function(e) {
						bk.qt.qu(e, pG)
					}), qZ.appendChild(qP)
			}(qZ, sk[a7], a7 < sm, sj);
			sL.appendChild(qZ)
		}, this.show = function(pI) {
			pI.appendChild(sG)
		}, this.qw = function(pI) {
			pI.removeChild(sG)
		}, this.resize = function() {
			sL.style.fontSize = b6.pO.pZ(b6.pO.qy(.02, .3))
		}, sG.style.top = "0", sG.style.left = "0", sG.style.width = sG.style.height = "100%", sG.style.overflowX = "hidden", sG.style.overflowY = "auto", sG.style.font = "inherit", sL.style.font = "inherit", sL.style.margin = "0.4em", sG
		.appendChild(sL)
}

function sp(rD) {
	var sG = document.createElement("div"),
		sq = document.createElement("div"),
		rM = (this.ef = 0, this.eh = 0);

	function ss() {
		bk.st.qw()
	}
	this.pz = rD, this.show = function(ef, eh, sv) {
		if (rM) return [0, 0];
		rM = 1, this.ef = ef, this.eh = eh,
			function(self, sv) {
				var a1 = b6.pO.qy(.16, .7),
					j7 = rD.length * a1 / 3,
					sx = at.a1 / at.pU,
					sy = at.j7 / at.pU,
					mA = Math.min(1, Math.min(sx / a1, sy / j7));
				a1 *= mA, j7 *= mA, sv && (self.ef += b6.pO.qy(.03, .5)), self.ef = bH.ow(self.ef, 0, sx - a1), self.eh = bH.ow(self.eh, 0, sy - j7), sq.style.left = self.ef + "px", sq.style.top = self.eh + "px", sq.style.width = a1 + "px", sq
					.style.height = j7 + "px", sq.style.font = b6.pO.rP(0, .34 * j7 / rD.length), b6.pO.pa(sq, 5);
				for (var a7 = 1; a7 < rD.length; a7++) b6.pO.pa(rD[a7].button, 8)
			}(this, sv), document.body.appendChild(sG)
	}, this.qw = function() {
		rM && (rM = 0, sG.removeEventListener("click", ss), document.body.removeChild(sG))
	};
	for (var a7 = 0; a7 < rD.length; a7++) new qO("" + (1 + a7), rD[a7].button, 0, 1);
	sG.style.position = "fixed", sG.style.top = "0", sG.style.left = "0", sG.style.width = "100%", sG.style.height = "100%", sG.style.zIndex = "5", sq.style.position = "absolute",
		function() {
			for (var su = (100 / rD.length).toFixed(2) + "%", a7 = 0; a7 < rD.length; a7++) rD[a7].button.style.width = "100%", rD[a7].button.style.height = rD[a7].button.style.maxHeight = su, rD[a7].button.style.padding = "0.0em 0.9em", sq
				.appendChild(rD[a7].button)
		}(), sG.appendChild(sq), sG.addEventListener("click", ss)
}

function sz(rS, t0) {
	this.pE = [];
	var t1 = this.pE;

	function click() {
		for (var a7 = 0; a7 < t1.length; a7++) t1[a7].textContent = t1[a7].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var e0 = parseInt(this.name);
		void 0 !== rS.e0 && bf.r6.r7(rS.e0, e0), t0 && t0(e0)
	}
	for (var t2, eY = rS.t3.length, a7 = 0; a7 < eY; a7++)(t2 = document.createElement("p")).textContent = "⚪ " + rS.t3[a7], t2.style.margin = "0", t2.name = "" + a7, t2.style.cursor = "pointer", t2.style.fontSize = "1em", t2.addEventListener(
		"click", click), t1.push(t2);
	t1[rS.value].textContent = t1[rS.value].textContent.replace("⚪", "🟢")
}

function t4(title, t5, t6) {
	var rw = document.createElement("div"),
		t7 = document.createElement("div"),
		rb = document.createElement("div"),
		t8 = document.createElement("div"),
		t9 = document.createElement("div");
	this.tA = rb, this.tB = t5, this.show = function() {
			!1 !== t6 ? document.body.appendChild(rw) : (document.body.appendChild(t7), document.body.appendChild(t8))
		}, this.qw = function() {
			!1 !== t6 ? document.body.removeChild(rw) : (document.body.removeChild(t7), document.body.removeChild(t8))
		}, this.tF = function() {
			var qz = b6.pO.qy(.1),
				qx = b6.pO.qy(.08 + .04 * (at.tG < 1));
			return {
				qz: qz,
				qx: qx,
				tH: at.j7 / at.pU - qz - qx
			}
		}, this.resize = function(rH) {
			var eY = t5.length,
				tI = this.tF(),
				qz = tI.qz,
				qx = tI.qx;
			for (t7.style.height = b6.pO.pZ(qz), b6.pO.pa(t7, 2), t8.style.top = b6.pO.pZ(at.j7 / at.pU - qx), t8.style.height = b6.pO.pZ(qx), b6.pO.pa(t8, 8), rb.style.top = b6.pO.pZ(qz), rb.style.height = rb.style.maxHeight = b6.pO.pZ(tI.tH), t7
				.style.font = b6.pO.rP(0, b6.pO.qy(.02, .3)), t8.style.font = b6.pO.rP(0, b6.pO.qy(.02, .7)), rb.style.font = b6.pO.rP(0, b6.pO.qy(.02, .7)), a7 = 1; a7 < eY; a7++) b6.pO.pa(t5[a7].button, 4);
			for (var rI = 0, a7 = 0; a7 < eY; a7++) rI += t5[a7].button.offsetWidth;
			if (rH && rI < t8.offsetWidth)
				for (a7 = 0; a7 < eY; a7++) t5[a7].button.style.width = (100 * t5[a7].button.offsetWidth / rI).toFixed(2) + "%";
			else
				for (a7 = 0; a7 < eY; a7++) t5[a7].button.style.width = "auto";
			rH || this.resize(!0)
		}, this.tJ = function() {
			var tI = this.tF(),
				et = at.pU;
			tK.fillStyle = b7.mU, tK.fillRect(0, et * tI.qz, at.a1, et * tI.tH)
		}, rw.style.position = "absolute", rw.style.top = "0", rw.style.left = "0", rw.style.width = "100%", rw.style.height = "100%", t7.style.position = "absolute", t7.style.top = "0", t7.style.left = "0", t7.style.width = "100%", t7.style
		.display = "flex", t7.style.backgroundColor = b7.mU, t8.style.position = "absolute", t8.style.left = "0", t8.style.width = "100%", t8.style.overflowX = "auto", t8.style.overflowY = "hidden", t8.style.whiteSpace = "nowrap", t9.style.height =
		t9.style.maxHeight = "100%", rb.style.position = "absolute", rb.style.width = "100%", rb.style.backgroundColor = b7.mU,
		function() {
			for (var a7 = 0; a7 < t5.length; a7++) t5[a7].button.style.height = "100%", t5[a7].button.style.padding = "0.0em 0.9em"
		}();
	for (var a7 = 0; a7 < t5.length; a7++) t9.appendChild(t5[a7].button);
	t7.appendChild(function() {
		var tE = document.createElement("h1");
		return tE.textContent = title, tE.style.margin = "auto", tE.style.fontSize = 20 < title.length && at.j7 > at.a1 ? "1.8em" : "2.3em", tE
	}()), t8.appendChild(t9), !1 !== t6 && (rw.appendChild(rb), rw.appendChild(t7), rw.appendChild(t8))
}

function qO(tL, tM, tN, tO) {
	var self;
	this.qP = document.createElement("span"), (self = this).qP.textContent = tL, self.qP.style.color = b7.mY, self.qP.style.position = "absolute", self.qP.style.font = "inherit", tO ? self.qP.style.bottom = "0.06em" : self.qP.style.top = "0.12em",
		tN ? self.qP.style.left = "0.2em" : self.qP.style.right = "0.2em", self.qP.style.fontSize = "0.6em", self.qP.style.pointerEvents = "none", self.qP.style.whiteSpace = "pre", tM.style.position = "relative", tM.style.overflow = "hidden", tM
		.appendChild(self.qP)
}

function tP(tQ, tR, tS, tT) {
	var tU = document.createElement("textarea"),
		tV = (this.e = tU, !0);

	function ta() {
		tU.select(), document.execCommand("copy")
	}
	this.resize = function() {
			tR && b6.pO.pa(tU, 5)
		}, this.tW = function(qj) {
			tU.value = qj
		}, this.tX = function() {
			return tU.value
		}, this.tY = function() {
			tU.select()
		}, this.clear = function() {
			tU.value = ""
		}, this.tZ = function() {
			tV && navigator.clipboard ? (tU.select(), navigator.clipboard.writeText(tU.value).catch(function() {
				tV = !1, ta()
			})) : ta()
		}, tU.setAttribute("id", "textArea" + n.s.rV++), tU.setAttribute("autocomplete", "off"), tQ && tU.setAttribute("placeholder", tQ), tU.style.top = "0", tU.style.left = "0", tU.style.width = "100%", tU.style.height = "100%", tU.style
		.userSelect = "none", tU.style.outline = "none", tU.style.resize = "none", tU.style.border = "none", tU.style.color = b7.mY, tU.style.backgroundColor = b7.mR, tT ? (tU.style.fontSize = "1em", tU.rows = 6, tU.style.padding = "0.25em") : (tU
			.style.padding = "0.45em", tU.style.fontSize = "1.2em"), tS && tU.addEventListener("input", function(e) {
			tS(e)
		}), tU.addEventListener("focus", function() {
			at.rW++
		}), tU.addEventListener("blur", function() {
			at.rW--
		})
}

function dB() {
	this.ph = new tb, this.dp = new tc, this.r6 = new td, this.s = new te, this.dU = function() {
		this.dp.dU(), (new tf).dU()
	}
}

function tc() {
	function tg(a7, type, tm, f1) {
		bf.dp.data.push({
			e0: a7,
			type: type || 0,
			value: tm || 0,
			tm: tm || 0,
			f1: f1 || 0
		})
	}

	function th(a7, type, tm, f1) {
		bf.dp.data.push({
			e0: a7,
			type: type,
			value: tm || "",
			tm: tm || "",
			f1: f1 || 0
		})
	}

	function ti(mG) {
		for (var a7 = bf.dp.data.length; a7 < mG; a7++) bf.dp.data.push(null)
	}
	this.data = [], this.dU = function() {
		tg(0, 1, 0, 5), tg(1, 1, 1), tg(2, 0), th(3, 2), tg(4, 1), th(5, 2, "Trebuchet MS", 1), tg(6, 0), tg(7, 0, 0), tg(8, 0), tg(9, 1, 1), tg(10, 1), tg(11, 1, 1), th(12, 2, navigator.language), ti(100), th(100, 2), th(101, 2), th(102, 2), th(
				103, 2), th(104, 2), th(105, 2), th(106, 2), tg(107), tg(108), tg(109), th(110, 2), tg(111), tg(112), tg(113), th(114, 2), tg(115), th(116, 2), tg(117, 1), th(118, 2, "", 2), tg(119, 1, 0, 1), th(120, 2), tg(121, 1, ~~(262144 *
				Math.random())), th(122, 2, "Player " + Math.floor(1e3 * Math.random())), tg(123), th(124), tg(125, 1), th(126, 2), tg(127, 0, 1), tg(128), tg(129), tg(130), tg(131), tg(132), th(133, 2), tg(134, 0, 5), th(135, 2), th(136, 2), tg(
				137), tg(138), tg(139), tg(140), tg(141), tg(142), tg(143), tg(144), th(145, 2), tg(146), tg(147), th(148, 2), tg(149), tg(150, 0, 1), th(151, 2), tg(152, 0, 5), tg(153, 1), tg(154, 1), th(155, 2), th(156, 2), tg(157), ti(180),
			tg(180, 0), tg(181, 0)
	}, this.r7 = function(e0, value) {
		this.data[e0].value = value
	}, this.dq = function(e0, value) {
		this.r7(e0, value), bf.ph.save(e0, String(value)), bf.ph.save(e0, String(this.data[e0].f1), !0)
	}, this.tj = function() {
		for (var a7 = 0; a7 < this.data.length; a7++) this.data[a7] && (bf.ph.save(a7, String(this.data[a7].value)), bf.ph.save(a7, String(this.data[a7].f1), !0))
	}, this.tk = function(e0) {
		return Number(this.data[e0].value)
	}, this.tl = function(e0) {
		return String(this.data[e0].value)
	}
}

function tb() {
	this.tn = function(e0, f1) {
		return Number(this.to(e0, f1))
	}, this.to = function(e0, f1) {
		var f0 = null;
		return 0 === u.id ? u.tp && (f0 = u.tp.getItem((f1 ? "v" : "d") + e0)) : 1 === u.id ? f0 = u.tq.loadString((f1 ? 1e3 : 2e3) + e0) : 2 === u.id && (f0 = u.tr[(f1 ? "v" : "d") + e0]), f0 && 0 !== f0.length ? f0 : null
	}, this.ts = function(eY, tt) {
		var g = [],
			tu = tt ? "e" : "l";
		if (0 === u.id) {
			if (u.tp)
				for (a7 = 0; a7 < eY; a7++) g.push(u.tp.getItem(tu + a7))
		} else if (1 === u.id)
			for (var tv = tt ? 5e3 : 3e3, a7 = 0; a7 < eY; a7++) g.push(u.tq.loadString(tv + a7));
		else if (2 === u.id)
			for (a7 = 0; a7 < eY; a7++) g.push(u.tr[tu + a7]);
		return g
	}, this.save = function(e0, value, f1) {
		var tw = (f1 ? "v" : "d") + e0;
		if (0 === u.id) {
			if (u.tp && bf.dp.data[140].value) try {
				u.tp.setItem(tw, value)
			} catch (e) {
				console.log(e)
			}
		} else 1 === u.id ? u.tq.saveString((f1 ? 1e3 : 2e3) + e0, value) : 2 === u.id && (u.tr[tw] = value, u.tx.postMessage(tw + " " + value))
	}, this.ty = function(g, tt) {
		var eY = g.length,
			tu = tt ? "e" : "l";
		if (0 === u.id) {
			if (u.tp && bf.dp.data[140].value) try {
				for (a7 = 0; a7 < eY; a7++) u.tp.setItem(tu + a7, g[a7])
			} catch (e) {
				console.log(e)
			}
		} else if (1 === u.id)
			for (var tv = tt ? 5e3 : 3e3, a7 = 0; a7 < eY; a7++) u.tq.saveString(tv + a7, g[a7]);
		else if (2 === u.id)
			for (a7 = 0; a7 < eY; a7++) u.tr[tu + a7] = g[a7], u.tx.postMessage(tu + a7 + " " + g[a7])
	}
}

function tf() {
	this.dU = function() {
		! function() {
			var data = bf.dp.data;
			0 === data[2].f1 && (at.j7 > at.a1 || 0 !== u.id) && (data[2].value = data[2].tm = 1);
			0 === data[100].f1 && (data[100].value = data[100].tm = (0 === u.id ? "Player " : 1 === u.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var a7, f0, data = bf.dp.data,
			eY = data.length;
		for (a7 = 0; a7 < eY; a7++) data[a7] && data[a7].f1 === bf.ph.tn(a7, !0) && (f0 = bf.ph.to(a7), data[a7].value = null === f0 ? data[a7].tm : 2 === data[a7].type ? f0 : Number(f0));
		bf.dp.data[10].value = bf.dp.data[10].tm
	}
}

function te() {
	function u4(g) {
		if (0 === g.length) bf.r6.r7(116, "");
		else {
			for (var u7 = g[0], a7 = 1; a7 < g.length; a7++) u7 += ";" + g[a7];
			bf.r6.r7(116, u7)
		}
	}
	this.u1 = function() {
		bf.dp.data[110].value.length && (bf.dp.data[106].value = bf.dp.data[110], bf.r6.r7(110, ""), this.u2())
	}, this.u2 = function() {
		var g = bf.dp.data[116].value.split(";");
		for (g.length % 2 == 1 && g.pop(), g.unshift(bf.dp.data[106].value), g.unshift(bf.dp.data[105].value), a7 = 2; a7 < g.length; a7 += 2)
			if (g[a7] === g[0]) {
				g.splice(a7, 2);
				break
			} for (var u3 = [], a7 = 0; a7 < g.length; a7 += 2) u3.push(g[a7]);
		u4(g), bf.dp.data[117].value = 0, bf.dp.data[117].t3 = u3
	}, this.u5 = function(e0) {
		bf.dp.data[117].t3.splice(e0, 1), bf.dp.data[117].value = Math.min(e0, bf.dp.data[117].t3.length - 1);
		var g = bf.dp.data[116].value.split(";");
		g.splice(2 * e0, 2), u4(g)
	}, this.u6 = function(e0) {
		var g = bf.dp.data[116].value.split(";");
		return {
			qm: g[2 * e0],
			password: g[2 * e0 + 1]
		}
	}, this.u8 = function() {
		var f0 = bH.ow(bf.dp.data[121].value, -1, 262143);
		return f0 = -1 === f0 ? ~~(262144 * Math.random()) : f0
	}
}

function td() {
	this.r7 = function(e0, value) {
		bf.dp.data[e0].value !== value && (bf.dp.dq(e0, value), 0 === e0 ? (n.r(), b3.dU(), n.o(2)) : 1 === e0 ? at.df(1) : 2 === e0 ? at.df(0) : 5 === e0 && (b6.pO.u9(), at.df(0)))
	}, this.uA = function() {
		for (var data = bf.dp.data, a7 = 0; a7 < 100; a7++) data[a7] && bf.dp.dq(a7, data[a7].tm);
		b6.pO.u9(), at.df(1), b3.dU()
	}, this.uB = function() {
		for (var data = bf.dp.data, a7 = 0; a7 < data.length; a7++) data[a7] && bf.dp.r7(a7, data[a7].tm)
	}, this.uC = function() {
		for (var es = bf.dp, a7 = 128; a7 < 135; a7++) es.dq(a7, es.data[a7].tm)
	}, this.uD = function(data) {
		bf.r6.r7(109, data.rl), bf.r6.r7(107, data.uE), bf.r6.r7(108, data.uF), bf.r6.r7(112, data.uG), bf.r6.r7(111, data.uH), bf.r6.r7(113, data.uI), bf.r6.r7(135, data.uJ), bf.r6.r7(136, data.uK), bf.r6.r7(137, data.uL), bf.r6.r7(138, data
			.uM), bf.r6.r7(139, data.uN), bf.r6.r7(141, data.uO), bf.r6.r7(142, data.uP), bf.r6.r7(143, data.uQ), bf.r6.r7(144, data.uR)
	}
}

function by() {
	this.rp = new uS, this.uT = new uU, this.uV = new uW, this.dU = function() {
		this.rp.dU()
	}
}

function uU() {
	this.uX = function(size) {
		for (var uY = bD, g = [], a7 = 0; a7 < size; a7++) g.push(String.fromCharCode(uY.oP(16)));
		return g.join("")
	}, this.uZ = function(p5) {
		return 20 < (p5 = p5.trim()).length ? p5.substring(0, 20) : p5
	}
}

function uS() {
	var ua = new Uint8Array(78);
	this.dU = function() {
		var a7;
		for (ua[50] = 37, a7 = 0; a7 < 10; a7++) ua[a7 + 3] = a7 + 1;
		for (a7 = 0; a7 < 26; a7++) ua[a7 + 20] = a7 + 11, ua[a7 + 52] = a7 + 38
	}, this.ub = function(p5) {
		return p5.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.uc = function(p5, size) {
		if ((p5 = this.ub(p5)).length > size) return p5.substring(0, size);
		for (; p5.length < size;) p5 = "-" + p5;
		return p5
	}, this.ud = function(p5) {
		for (var ue = ua, eY = p5.length, g = new Uint8Array(eY), a7 = 0; a7 < eY; a7++) g[a7] = ue[p5.charCodeAt(a7) - 45];
		return g
	}, this.uf = function(ug) {
		b9.a3(6 * ug.length), this.uh(ug), bD.dU(b9.a8)
	}, this.uh = function(ug) {
		for (var eY = ug.length, a1 = b9, a7 = 0; a7 < eY; a7++) a1.a4(6, ug[a7])
	}, this.ui = function(p5) {
		this.uh(this.ud(p5))
	}, this.uj = function(p5, size) {
		this.uh(this.ud(this.uc(p5, size)))
	}, this.uk = function(p5, size) {
		for (var g = this.ud(this.uc(p5, size)), f0 = 0, mA = 1, a7 = g.length - 1; 0 <= a7; a7--) f0 += mA * g[a7], mA *= 64;
		return f0
	}
}

function ul() {
	var a1, j7, um;

	function vC(gy, eb, vA, ur, v5) {
		eb = vB(gy, eb + 1 + 2 * ur & 3);
		! function(gy, vD) {
			return 1 < Math.abs(gy % a1 - vD % a1) || 1 < Math.abs(vG(gy) - vG(vD))
		}(gy, eb) && 0 === v5[eb << 2] && (v5[eb << 2] = vA)
	}

	function vG(g6) {
		return Math.floor((g6 + .5) / a1) % j7
	}

	function vB(g6, eb) {
		return g6 + um[eb]
	}
	this.un = function(p5) {
		var a7, uo, eY, up, uY = bD;
		for (bC.rp.uf(bC.rp.ud(p5)), bO.us.ut[bO.eE].a1 = bO.ej = a1 = uY.oP(12), bO.us.ut[bO.eE].j7 = bO.ek = j7 = uY.oP(12), um = [-a1, -1, a1, 1], bO.v2 = document.createElement("canvas"), bO.v2.width = bO.ej, bO.v2.height = bO.ek, bO.uy = bO
			.v2.getContext("2d", {
				alpha: !1
			}), bO.uz = bO.v3 = null, bO.uz = bO.uy.getImageData(0, 0, bO.ej, bO.ek), bO.v3 = bO.uz.data, b6.pY.v4(bO.v3), eY = uY.oP(12), uo = uY.oP(5), up = uv(a1 * j7 - 1), a7 = 0; a7 < eY; a7++) ! function(kP, g6, uq, ur) {
			var a7, eb, uY = bD,
				v5 = bO.v3,
				v6 = g6,
				v7 = g6,
				v8 = 0,
				v9 = 1 + uq,
				vA = 2 - uq;
			for (v5[g6 << 2] = v9, a7 = 0; a7 < kP; a7++) eb = uY.oP(2), g6 = vB(g6, eb), v5[g6 << 2] === v9 ? v8 % 2 == 1 && vC(v7, v8 + 2 * ur + 3, vA, ur, v5) : v5[g6 << 2] = v9, vC(g6, eb, vA, ur, v5), vC(v7, eb, vA, ur, v5), v7 = g6,
				v8 = eb;
			vB(g6, 0) === v6 ? (vC(g6, 0, vA, ur, v5), vC(v6, 0, vA, ur, v5)) : vB(g6, 1) === v6 && (vC(g6, 0, vA, ur, v5), vC(v6, 2, vA, ur, v5));
			0 === kP && (vC(v6, 0, vA, ur, v5), vC(v6, 2, vA, ur, v5))
		}(uY.oP(uo), uY.oP(up), 1 === uY.oP(1), 1 === uY.oP(1));
		var ef, eh, k3, vH, vI, vJ, v5 = bO.v3,
			vK = !0,
			vL = bO.us.ut[bO.eE].vL,
			vM = bO.us.ut[bO.eE].vM;
		for (eh = 0; eh < j7; eh++)
			for (vH = !0, vI = vK, ef = vJ = 0; ef < a1; ef++) k3 = 4 * eh * a1 + 4 * ef, vJ <= ef && 0 < v5[k3] && (vI = 2 === v5[k3], vH) && (vH = !1, vI !== vK) ? (vK = vI, vJ = ef + 1, ef = -1) : (vI ? (v5[k3] = vM[0], v5[1 + k3] = vM[1], v5[
				2 + k3] = vM[2]) : (v5[k3] = vL[0], v5[1 + k3] = vL[1], v5[2 + k3] = vL[2]), v5[3 + k3] = 255);
		bO.uy.putImageData(bO.uz, 0, 0), bO.v0 = !0, bO.v1.dU(), bb.dc = !0
	}
}

function uW() {
	this.un = function(vN) {
		for (var uY = bD, size = uY.oP(vN), vO = 7 + 9 * uY.oP(1), g = [], a7 = 0; a7 < size; a7++) g.push(String.fromCharCode(uY.oP(vO)));
		return g.join("")
	}
}

function c3() {
	var vP, vQ, vR, vS, vT, vU, vV, vW, vX, vY;

	function va() {
		var vd = a9.vd;
		for (vX = vd; vX < a9.eV; vX++) vZ();
		for (vX = a9.gu ? a9.je : 0; vX < vd; vX++) {
			if (!ve()) {
				for (var es = a9.vi = vX; es < vd; es++) vX = es, vZ();
				return
			}
			vh(vU + vP * vT + bH.dl(vT, 2), vV + vQ * vT + bH.dl(vT, 2))
		}
	}

	function wA(player) {
		for (var i9 = ac.i9, iB = ac.iB, iA = ac.iA, iC = ac.iC, eh = iB[player]; eh <= iC[player]; eh++)
			for (var ef = i9[player]; ef <= iA[player]; ef++) {
				var eC = aY.wB(ef, eh);
				aY.g8(eC) && (aY.ip(eC) ? aY.g3(eC, player) : aY.wC(eC, player))
			}
	}

	function w9(g, s3, s4) {
		var dk = g[s3];
		g[s3] = g[s4], g[s4] = dk
	}

	function ve() {
		return function() {
			var a7;
			for (a7 = 0; a7 < 8; a7++)
				if (vP = bH.dl(vR * au.random(), au.value(100)), vQ = bH.dl(vS * au.random(), au.value(100)), wH()) return 1;
			return
		}() || function() {
			var hg, hj, er, vg, es, vf;
			for (hg = bH.dl(vR * au.random(), au.value(100)), hj = bH.dl(vS * au.random(), au.value(100)), er = 40; 1 <= er; er--)
				for (vg = vS - er; 0 <= vg; vg -= 40)
					for (vQ = (vg + hj) % vS, es = 40; 1 <= es; es--)
						for (vf = vR - es; 0 <= vf; vf -= 40)
							if (vP = (vf + hg) % vR, wH()) return 1;
			return
		}()
	}

	function wH() {
		for (var g6, wJ, gap = bH.dl(vT - vW, 2), wK = vV + vQ * vT + gap, wL = vU + vP * vT + gap, wI = wK + vW - 1; wK <= wI; wI--)
			for (wJ = wL + vW - 1; wL <= wJ; wJ--)
				if (g6 = aY.wB(wJ, wI), !aY.eT(g6) || aY.ip(g6)) return;
		return 1
	}

	function vh(vf, vg) {
		vZ(), wM(vf - 2, vg - 2)
	}

	function vZ() {
		ac.lV[vX] = 0, ac.gM[vX] = ac.w7[vX] = 0, ac.g0[vX] = [], ac.gE[vX] = [], ac.gF[vX] = [], ac.ey[vX] = [], ac.i9[vX] = ac.iB[vX] = ac.iA[vX] = ac.iC[vX] = 0
	}

	function wM(vf, vg) {
		var g6, a7, wN, wO;
		for (ac.lV[vX] = 1, ac.i9[vX] = vf + 10, ac.iB[vX] = vg + 10, ac.iC[vX] = ac.iA[vX] = 0, wN = vf; wN < vf + 4; wN++)
			for (wO = vg; wO < vg + 4; wO++)(vf < wN && wN < vf + 3 || vg < wO && wO < vg + 3) && (g6 = aY.wB(wN, wO), aY.eT(g6)) && (ac.i9[vX] = Math.min(wN, ac.i9[vX]), ac.iA[vX] = Math.max(wN, ac.iA[vX]), ac.iB[vX] = Math.min(wO, ac.iB[vX]), ac
				.iC[vX] = Math.max(wO, ac.iC[vX]), vY[ac.gM[vX]] = g6, ac.gM[vX]++, aY.wC(g6, vX));
		for (ac.w7[vX] = ac.gM[vX], a7 = ac.gM[vX] - 1; 0 <= a7; a7--) aY.wP(vY[a7], vX) ? (aY.g3(vY[a7], vX), ac.gE[vX].push(vY[a7])) : aY.wQ(vY[a7]) ? (aY.g3(vY[a7], vX), ac.gF[vX].push(vY[a7])) : aY.wR(vY[a7]) && (aY.g3(vY[a7], vX), ac.ey[vX]
			.push(vY[a7]))
	}

	function wG(vf, vg) {
		for (var g6, wJ, wI = vg; vg - 6 < wI; wI--)
			for (wJ = vf; vf - 6 < wJ; wJ--)
				if (g6 = aY.wB(wJ, wI), aY.ip(g6)) return;
		return 1
	}
	this.dU = function() {
		if (vY = new Array(12), vW = 6, vT = 10, vR = bH.dl(bO.ej, vT), vS = bH.dl(bO.ek, vT), vU = bH.dl(bO.ej - vT * vR, 2), vV = bH.dl(bO.ek - vT * vS, 2), a9.gu)
			for (var a7 = 0; a7 < a9.je; a7++) vX = a7, vZ(), ac.lV[vX] = 1;
		(0 === a9.data.spawningType ? va : 1 === a9.data.spawningType ? (va(), function() {
			var vj = a9.vk;
			a9.vl || vj++;
			if (!(vj < 3)) {
				for (var data = a9.data, iu = (a9.gu ? a9.je : 0) + data.teamPlayerCount[0], mG = a9.vi, vm = new Uint32Array(vj), vn = new Uint32Array(vj), vo = new Uint16Array(vj), vp = new Uint16Array(vj), eW = bc.eW, i9 = ac.i9, iB =
						ac.iB, iA = ac.iA, iC = ac.iC, fD = bK.fD, fE = bK.fE, a7 = iu; a7 < mG; a7++) fD[a7] = i9[a7] + iA[a7] >> 1, fE[a7] = iB[a7] + iC[a7] >> 1;
				for (a7 = iu; a7 < mG; a7++) {
					var id = eW[a7];
					vm[id] += fD[a7], vn[id] += fE[a7]
				}
				var k4 = bc.k4;
				for (a7 = 1; a7 < vj; a7++) {
					var g1 = Math.max(data.teamPlayerCount[k4[a7]], 1);
					vo[a7] = bH.dl(vm[a7], g1), vp[a7] = bH.dl(vn[a7], g1)
				}
				var vq = bc.vq,
					vr = bc.vr,
					vs = bc.vs,
					fC = bK.fC;
				for (a7 = 0; a7 < 512; a7++) fC[a7] = a7;
				for (var dz = 0; dz < 2 + (4 <= vj); dz++)
					for (a7 = iu; a7 < mG; a7++) {
						for (var gy = a7, vt = fC[gy], vu = 1, eo = bH.vv(fD[vt] - vo[1], fE[vt] - vp[1]), er = 2; er < vj; er++) {
							var vw = bH.vv(fD[vt] - vo[er], fE[vt] - vp[er]);
							vw < eo && (eo = vw, vu = er)
						}
						var vx = eW[gy];
						if (vu !== vx) {
							if (2 === dz && 4 <= vj) {
								var vy = Math.max((vu + 1) % vj, 1),
									vz = bH.vv(fD[vt] - vo[vy], fE[vt] - vp[vy]);
								for (er = 1; er < vj; er++) vw = bH.vv(fD[vt] - vo[er], fE[vt] - vp[er]), eo < vw && vw < vz && (vz = vw, vy = er);
								vy !== vx && bH.vv(vo[vx] - vo[vy], vp[vx] - vp[vy]) < bH.vv(vo[vx] - vo[vu], vp[vx] - vp[vu]) && (vu = vy)
							}
							var w0 = k4[vu],
								w1 = vr[w0] + (a9.gu ? 0 : vs[w0]),
								vD = vq[w1],
								w2 = fC[vD],
								w3 = vr[w0 + 1];
							eo = bH.vv(fD[w2] - vo[vx], fE[w2] - vp[vx]);
							for (var et = w1 + 1; et < w3; et++) {
								var w4 = vq[et],
									w5 = fC[w4];
								(vw = bH.vv(fD[w5] - vo[vx], fE[w5] - vp[vx])) < eo && (eo = vw, vD = w4)
							}
							vD < iu || mG <= vD || (w2 = fC[vD], vm[vx] += fD[w2] - fD[vt], vn[vx] += fE[w2] - fE[vt], vm[vu] += fD[vt] - fD[w2], vn[vu] += fE[vt] - fE[w2], g1 = data.teamPlayerCount[k4[vx]], vo[vx] = bH.dl(vm[vx], g1),
								vp[vx] = bH.dl(vn[vx], g1), g1 = data.teamPlayerCount[w0], vo[vu] = bH.dl(vm[vu], g1), vp[vu] = bH.dl(vn[vu], g1), fC[gy] = w2, fC[vD] = vt)
						}
					}! function() {
						for (var fC = bK.fC, i9 = ac.i9, iB = ac.iB, iA = ac.iA, iC = ac.iC, gM = ac.gM, w7 = ac.w7, gE = ac.gE, gF = ac.gF, ey = ac.ey, a7 = 0; a7 < 512; a7++) {
							var w8 = fC[a7];
							if (w8 !== a7) {
								w9(i9, a7, w8), w9(iB, a7, w8), w9(iA, a7, w8), w9(iC, a7, w8), w9(gM, a7, w8), w9(w7, a7, w8), w9(gE, a7, w8), w9(gF, a7, w8), w9(ey, a7, w8), wA(a7), wA(w8), fC[a7] = a7;
								for (var j7 = w8, g7 = fC[j7]; g7 !== a7;) g7 = fC[j7 = g7];
								fC[j7] = w8
							}
						}
					}()
			}
		}) : function() {
			var vd = a9.vd;
			for (vX = vd; vX < a9.eV; vX++) vZ();
			for (vX = a9.gu ? a9.je : 0; vX < vd; vX++)
				if (! function() {
						var spawningData = a9.data.spawningData,
							vf = spawningData[2 * vX] + 1,
							spawningData = spawningData[2 * vX + 1] + 1;
						if (3 < vf && vf < bO.ej - 5 && 3 < spawningData && spawningData < bO.ek - 5 && aY.eT(aY.wB(vf, spawningData)) && wG(vf + 3, spawningData + 3)) return vh(vf + 1, spawningData + 1), 1;
						return
					}()) {
					if (!ve()) {
						for (var es = a9.vi = vX; es < vd; es++) vX = es, vZ();
						return
					}
					var vf = vU + vP * vT + bH.dl(vT, 2),
						vg = vV + vQ * vT + bH.dl(vT, 2);
					vh(vf, vg)
				}
		})(), bZ.lR[7] = ac.gM[a9.eI]
	}, this.wS = function(il, wT, wU) {
		var a7, vf, vg, g6, vP, vQ;
		for (vX = il, a7 = 0; a7 < 20; a7++)
			for (vf = wT + a7; wT - a7 <= vf; vf--)
				for (vg = wU + a7; wU - a7 <= vg; vg--)
					if ((vf === wT + a7 || vf === wT - a7 || vg === wU + a7 || vg === wU - a7) && 3 < vf && vf < bO.ej - 5 && 3 < vg && vg < bO.ek - 5 && aY.eT(aY.wB(vf, vg)) && wG(vf + 3, vg + 3)) {
						if (0 < ac.gM[vX]) {
							for (vQ = vP = g6 = void 0, vP = ac.iA[vX]; vP >= ac.i9[vX]; vP--)
								for (vQ = ac.iC[vX]; vQ >= ac.iB[vX]; vQ--) g6 = 4 * (vQ * bO.ej + vP), aY.wW(vX, g6) && (aY.wX(g6), ac.gM[vX]--);
							vZ()
						}
						return wM(vf - 1, vg - 1), !0
					} return !1
	}, this.wY = function(il) {
		vX = il, ve() ? vh(vU + vP * vT + bH.dl(vT, 2), vV + vQ * vT + bH.dl(vT, 2)) : vZ()
	}
}

function wZ() {
	an.wa(), tK.setTransform(hw, 0, 0, hw, 0, 0), tK.imageSmoothingEnabled = hw < 3, tK.drawImage(bO.v2, aO.wb(), aO.wc()), bL.wd.tJ(), tK.drawImage(we, aO.wb(), aO.wc()), an.tJ(), bJ.tJ(), ab.tJ(), (a9.m1 ? (bd.tJ(), b8) : (aJ.tJ(), aR.tJ(), aN
	.tJ(), b8.tJ(), aq.tJ(), aS.tJ(), aO.tJ(), aM.tJ(), bd.tJ(), aQ.tJ(), aL.tJ(), aI.tJ(), aH.tJ(), aT.tJ(), ba.tJ(), ap)).tJ(), n.tJ()
}

function wf(wg, a1, j7) {
	wg.clearRect(0, 0, a1, j7), wg.fillStyle = b7.mV, wg.fillRect(0, 0, a1, j7)
}

function wh(wg, a1, j7, wi) {
	wg.fillStyle = b7.mY, wg.fillRect(0, 0, a1, wi), wg.fillRect(0, 0, wi, j7), wg.fillRect(a1 - wi, 0, wi, j7), wg.fillRect(0, j7 - wi, a1, wi)
}

function wj(wg, ef, eh, hB, wi, g6, wk) {
	wg.fillStyle = b7.mY;
	var g6 = Math.floor(hB * g6),
		ru = (g6 += (g6 - wi) % 2, Math.floor((g6 - wi) / 2)),
		hB = Math.floor((hB - g6) / 2);
	wg.fillRect(ef + hB, eh + hB + ru, g6, wi), wk && wg.fillRect(ef + hB + ru, eh + hB, wi, g6)
}

function wm() {
	this.dU = function() {
		8 === a9.jy && aJ.wn()
	}, this.wo = function(wp) {
		var elo = a9.data.elo,
			hU = (elo[wp] - elo[1 - wp]) / 10,
			hU = 8 / (1 + Math.pow(2, hU / 32)),
			hU = Math.floor(10 * hU + .5),
			wr = this.ws(elo[wp] + (1 + a9.wt) * hU + 1),
			elo = this.ws(elo[1 - wp] - hU);
		0 === wp ? aJ.wv(wr, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : aJ.wv(elo, wr, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"])
	}, this.ws = function(elo) {
		return 16e3 === (elo = bH.ow(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function cY() {
	this.ww = new wx, this.v5 = new wy
}

function wy() {
	this.wz = !1;
	this.x3 = [], this.x4 = 100;
	var ly, lz, gap, hB, x0, x2, x5 = 0,
		x6 = new Array(9),
		x7 = [],
		x8 = [],
		x9 = 0,
		xA = 0,
		xB = 0,
		xC = 0;

	function xN() {
		x6.sort(function(er, es) {
			return es.jm - er.jm
		});
		for (var p5 = "" + x6[0].nz, a7 = 1; a7 < 9; a7++) p5 += "," + x6[a7].nz;
		for (a7 = 0; a7 < 9; a7++) p5 += "," + x6[a7].jm;
		bf.dp.dq(120, p5)
	}
	this.dU = function() {
		for (var s0 = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], a7 = 0; a7 < s0.length; a7++) {
			var color = 6 === s0[a7] ? b7.my : b7.mW;
			this.x3.push(b6.canvas.xD(aX.get(3), s0[a7], color))
		}
		for (a7 = 0; a7 < af.ww.xE; a7++) x8.push(af.ww.xF - af.ww.xE + a7);
		for (a7 = 0; a7 < af.ww.xG; a7++) x8.push(af.ww.xH + a7);
		var xI = af.ww.xJ(bG.xI);
		for (a7 = 0; a7 < xI.length; a7++) x8.push(xI[a7]);
		! function() {
			var a7, g = bf.dp.data[120].value.split(",");
			if (18 !== g.length)
				for (a7 = 0; a7 < 9; a7++) x6[a7] = {
					nz: 1015 + a7,
					jm: 0
				};
			else
				for (a7 = 0; a7 < 9; a7++) {
					var f0 = parseInt(g[a7]),
						et = (f0 = 0 <= f0 && f0 < af.ww.xF ? f0 : 0, parseInt(g[a7 + 9]));
					et = 0 <= et && et < 1e3 ? et : 0, x6[a7] = {
						nz: f0,
						jm: et
					}
				}
		}()
	}, this.show = function(kk, kl, xO) {
		var a7;
		if (x9 = kk, xA = kl, x5 = xO || 0, this.wz = !0, x7 = [], 0 === x5)
			for (a7 = 0; a7 < 9; a7++) x7.push(x6[a7].nz);
		else {
			var es = 49 * x5,
				xO = es - 49;
			for (xO >= x8.length && (x5 = 1, xO = 0, es = 49), a7 = xO = (es = Math.min(es, x8.length)) - 49; a7 < es; a7++) x7.push(x8[a7])
		}
		x7.push(1024);
		xO = x7.length, hB = Math.floor((u.v.sd() ? .075 : .0468) * at.pQ), gap = Math.floor(hB / 3), (xB = 10 * (x0 = hB + gap)) > at.a1 && (xB = at.a1, gap = (x0 = xB / 10) - (hB = 3 * x0 / 4)), x2 = bH.dl(xO, 10) + !!(xO % 10), (xC = x2 *
			x0) > at.j7 && (xC = at.j7, gap = (x0 = xC / x2) - (hB = 3 * x0 / 4)), xO = .5 * gap;
		ly = Math.min(Math.max(kk - .5 * xB + xO, xO), at.a1 - xB + xO), lz = Math.min(Math.max(kl - .5 * xC + xO, xO), at.j7 - xC + xO)
	}, this.gm = function(kk, kl, player) {
		if (!this.wz) return !1;
		if (this.xQ(kk, kl)) {
			kk = bH.ow(bH.dl(kk - ly + .5 * gap, x0), 0, 9);
			if ((kk += 10 * bH.ow(bH.dl(kl - lz + .5 * gap, x0), 0, 9)) >= x7.length) return aH.qw(), !0;
			kl = x7[kk];
			if (1024 === kl) return this.show(x9, xA, x5 + 1), !0;
			! function(nz) {
				for (var a7 = 0; a7 < 9; a7++) x6[a7].jm = Math.floor(.99 * x6[a7].jm);
				for (a7 = 0; a7 < 9; a7++)
					if (nz === x6[a7].nz) return x6[a7].jm = Math.min(x6[a7].jm + 30, 999), xN();
				x6.splice(5, 0, {
					nz: nz,
					jm: Math.max(x6[4].jm, 30)
				}), x6.pop(), xN()
			}(kl), player === a9.eI ? b4.gv.ny(kl) : b4.fu.oE(kl, player)
		}
		return aH.qw(), !0
	}, this.xQ = function(kk, kl) {
		return !(kk < ly - .5 * gap || kl < lz - .5 * gap || ly + xB - .5 * gap <= kk || lz + xC - .5 * gap <= kl)
	}, this.tJ = function() {
		tK.fillStyle = b7.mV, tK.fillRect(ly - .5 * gap, lz - .5 * gap, xB, xC);
		for (var k3 = .5 * bY.xR, eY = (tK.lineWidth = bY.xR, tK.strokeStyle = tK.fillStyle = b7.mY, tK.strokeRect(ly - .5 * gap + k3, lz - .5 * gap + k3, xB - 2 * k3, xC - 2 * k3), tK.imageSmoothingEnabled = !0, x7.length), a7 = 0; a7 <
			eY; a7++) this.xS(x7[a7], tK, ly + a7 % 10 * x0, lz + bH.dl(a7, 10) * x0, hB);
		tK.imageSmoothingEnabled = !1
	}, this.xS = function(nz, hH, ef, eh, hB) {
		var eC;
		nz >= 1024 - af.ww.xE ? (eC = hB / this.x4, hH.setTransform(eC, 0, 0, eC, ef, eh), hH.drawImage(this.x3[nz - 1024 + af.ww.xE], 0, 0), hH.setTransform(1, 0, 0, 1, 0, 0)) : (b6.pO.textAlign(hH, 1), b6.pO.textBaseline(hH, 1), hH.font = b6.pO
			.rP(0, .89 * hB), hH.fillText(af.ww.xT(nz), ef + .5 * hB, eh + (.35 - b6.pO.xU + .56) * hB))
	}
}

function wx() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.xE = 13, this.xG = this.emojis.length, this.xH = 676, this.xF = 1024, this.xV = this.emojis.indexOf("💀"), this.xW = this.xV + 1, this.xX = this.emojis.indexOf("🥇"), this.xY = this.emojis.indexOf("😊"), this.xT = function(f0) {
		return f0 < this.xH ? String.fromCharCode(55356, 56806 + bH.dl(f0, 26), 55356, 56806 + f0 % 26) : this.emojis[Math.min(f0 - this.xH, this.xG - 1)]
	}, this.xJ = function(p5) {
		for (var eY = p5.length - 2, g = [], a7 = 0; a7 < eY; a7++) {
			var hP = p5.charCodeAt(a7) - 56806,
				hQ = p5.charCodeAt(a7 + 2) - 56806;
			0 <= hP && hP < 26 && 0 <= hQ && hQ < 26 && (g.push(26 * hP + hQ), a7 += 3)
		}
		return g
	}, this.xZ = function(f0) {
		return f0 < this.xH
	}, this.xa = function(f0) {
		return f0 >= 1024 - this.xE
	}, this.xb = function(f0) {
		return f0 >= this.xH && f0 < this.xH + this.xW
	}
}

function bx() {
	this.rp = new xc, this.uT = new xd, this.uV = new xe, this.dU = function() {
		this.rp.dU()
	}
}

function xd() {
	this.ui = function(p5) {
		for (var eY = p5.length, a1 = b9, a7 = 0; a7 < eY; a7++) a1.a4(16, p5.charCodeAt(a7))
	}
}

function xc() {
	var xf = new Uint8Array(64);
	this.dU = function() {
		var a7;
		for (xf[0] = 45, xf[37] = 95, a7 = 0; a7 < 10; a7++) xf[a7 + 1] = 48 + a7;
		for (a7 = 0; a7 < 26; a7++) xf[a7 + 11] = 65 + a7, xf[a7 + 38] = 97 + a7
	}, this.rr = function(xg) {
		for (var uY = bD, ug = new Uint8Array(xg), a7 = 0; a7 < xg; a7++) ug[a7] = uY.oP(6);
		return ug
	}, this.rq = function(ug) {
		for (var eY = ug.length, xh = xf, g = [], a7 = 0; a7 < eY; a7++) g.push(String.fromCharCode(xh[ug[a7]]));
		return g.join("")
	}, this.xi = function(value, xj) {
		for (var xh = xf, g = [], a7 = 0; a7 < xj; a7++) g.push(String.fromCharCode(xh[value >> 6 * (xj - 1 - a7) & 63]));
		return g.join("")
	}
}

function c5() {
	var xk, xl, xm;
	xk = [32, 65, 191, 913, 931], xl = [64, 127, 688, 930, 1155], xm = new Array(xk.length + 1);
	for (var a7 = 0; a7 < xm.length; a7++) {
		xm[a7] = 0;
		for (var er = a7 - 1; 0 <= er; er--) xm[a7] += xl[er] - xk[er]
	}

	function xs(et) {
		for (var a7 = xk.length - 1; 0 <= a7; a7--)
			if (et >= xk[a7] && et < xl[a7]) return a7;
		return -1
	}
	this.uZ = function(p5) {
		return 0 !== (p5 = p5.trim()).indexOf("Bot ") && 0 !== p5.indexOf("[Bot] ") && function(p5, xp, xq) {
			var eY = (p5 = p5.trim()).length;
			if (eY < xp || xq < eY) return !1;
			for (var et, xr = 0, a7 = 0; a7 < eY; a7++)
				if (et = p5.charCodeAt(a7), xr += 65 <= et && et <= 90 || 1040 <= et && et <= 1071 ? 1 : 0, -1 === xs(et)) return !1;
			if (3 < xr && xr > Math.floor(eY / 2)) return !1;
			return !0
		}(p5, 3, 20)
	}, this.xt = function(p5) {
		for (var eY = (p5 = p5.trim()).length, g = [], a7 = 0; a7 < eY; a7++) {
			var et, g6 = xs(et = p5.charCodeAt(a7));
			g.push(xm[g6] + et - xk[g6])
		}
		return g
	}, this.un = function(g) {
		for (var et, es, p5 = "", eY = g.length, a7 = 0; a7 < eY; a7++)
			for (es = 1; es < xm.length; es++)
				if (g[a7] < xm[es]) {
					et = xk[es - 1] + g[a7] - xm[es - 1], p5 += String.fromCharCode(et);
					break
				} return p5
	}, this.xu = function(p5) {
		for (var g = this.xt(p5), result = "", a7 = 0; a7 < g.length; a7++) result = (result += g[a7] < 10 ? "00" : g[a7] < 100 ? "0" : "") + g[a7].toString(10);
		return result
	}, this.xv = function(p5) {
		for (var g = new Array(Math.floor(p5.length / 3)), a7 = 0; a7 < p5.length; a7 += 3) g[Math.floor(a7 / 3)] = parseInt(p5.substring(a7, a7 + 3));
		return this.un(g)
	}, this.xw = function(p5) {
		for (var f0, g = [p5.length], a7 = 0; a7 < p5.length; a7++) g[a7] = p5.charCodeAt(a7) - 48;
		var result = "";
		for (a7 = 0; a7 < p5.length; a7++) a7 === p5.length - 1 || 51 < 10 * g[a7] + g[a7 + 1] ? result += g[a7].toString() : (f0 = 10 * g[a7] + g[a7 + 1], result += String.fromCharCode(f0 + (f0 < 26 ? 65 : 71)), a7++);
		return result
	}, this.xx = function(p5) {
		for (var et, result = "", a7 = 0; a7 < p5.length; a7++) 48 <= (et = p5.charCodeAt(a7)) && et < 58 ? result += String.fromCharCode(et) : 65 <= et && et < 75 ? result += "0" + (et - 65).toString() : 75 <= et && et < 91 ? result += (et - 65)
			.toString() : 97 <= et && et < 123 && (result += (et - 71).toString());
		return result
	}, this.xy = function(p5) {
		for (var eY = p5.length, g = [], a7 = 0; a7 < eY; a7++)(et = p5.charCodeAt(a7)) < 58 ? g.push(p5[a7]) : (et -= et < 91 ? 65 : 71, g.push(String(bH.dl(et, 10))), g.push(String(et - 10 * bH.dl(et, 10))));
		var eY = g.length - 2,
			et = 0,
			ug = [];
		for (a7 = 0; a7 < eY; a7 += 3) ug[et++] = parseInt(g[a7] + g[a7 + 1] + g[a7 + 2]);
		return ug
	}, this.xz = function() {
		for (var dz, y0 = "", a7 = 0; a7 < 6; a7++) dz = 48 + au.random() % 36, dz += 58 <= dz ? 39 : 0, y0 += String.fromCharCode(dz);
		return y0
	}
}

function xe() {
	this.xt = function(p5, vN, y1) {
		for (var y2 = [], eY = p5.length, max = 0, a7 = 0; a7 < eY; a7++) {
			var f0 = p5.charCodeAt(a7);
			y2.push(f0), max = Math.max(max, f0)
		}
		var vO = max < 128 ? 7 : 16;
		for (y1.a4(vN, eY), y1.a4(1, +(16 == vO)), a7 = 0; a7 < eY; a7++) y1.a4(vO, y2[a7])
	}
}

function d3() {
	this.y3 = new y4, this.y5 = new y6, this.result = new y7, this.h2 = new y8, this.y9 = new yA, this.yB = new yC, this.yD = new yE, this.dU = function() {
		this.y9.dU()
	}, this.iS = function() {
		this.y9.iS()
	}
}

function y8() {
	this.yF = function() {
		for (var eY = ah.jf, yG = ah.jh, yH = [], a7 = 0; a7 < eY; a7++) {
			var g6 = yG[a7];
			aY.yI(g6) && yH.push(g6)
		}
		return yH
	}, this.yJ = function() {
		for (var eY = ah.jf, yG = ah.jh, dk = 0, gM = ac.gM, a7 = 0; a7 < eY; a7++) dk += gM[yG[a7]];
		return dk
	}
}

function y4() {
	function yL() {
		if (2 === a9.yP) return 1;
		aq.yQ(), a9.yP = 2, a9.yR = a9.yS
	}

	function yN() {
		bN.yD.yT(), aT.show(1 === a9.yU, !1, 2 === a9.yU), bN.result.yT(), bN.yB.iS(), aJ.yV(!0), aJ.yW(247), aJ.yW(956), aJ.yW(957), aR.lH(!0), aS.lH(!0), aq.lH(), b8.yX(), a9.gi && bb.yY.yZ(), bb.dc = !0, bX.ya(), u.v.setState(0)
	}
	this.yK = function() {
		yL() || (a9.yM = 2, yN())
	}, this.yO = function() {
		yL() || (a9.yM = 1, yN())
	}
}

function yC() {
	this.iS = function() {
		var yj;
		2 === a9.yM ? (aJ.yb(0, 59), aD.m7(2700)) : a9.jy < 7 ? (yj = bc.k4[bd.kt()], yj = bc.yl[yj], aM.ym(L(16, [yj]), 2, 1, 12), aJ.yn(0, L(17, [yj]), 40, 0, b7.mY, b7.mV, -1, !1), aD.m7(2700)) : 8 === a9.jy ? (a9.yU ? aJ.yb(a9.yg, 2) : aJ.yb(
			1 - a9.eI, 3), a9.yh.wo(a9.yg), aJ.yi(a9.yg), aD.ls(a9.yg, 2700, !1, 0)) : 9 === a9.jy ? (aJ.yo(), aD.m7(2700)) : (aJ.yi(a9.yg), aD.ls(a9.yg, 2700, !1, 0))
	}
}

function y7() {
	this.yp = 0, this.yH = null;
	var yr = this.yq = 0;
	this.ys = 0, this.yT = function() {
		var rG, g7, dk;
		bN.y9.yt || (bN.y9.yt = !0, a9.k0) || ((rG = this).yH = bN.h2.yF(), rG.yp = be.yw.yx(), a9.jy < 7 && 2 !== a9.yM ? rG.yq = bd.yy() : rG.yq = bN.h2.yJ(), 8 === a9.jy && 1 === a9.yM ? (g7 = 1 - a9.yg, dk = ac.gM[g7], ac.gM[g7] = 0, b4.fu
				.oN(), ac.gM[g7] = dk) : b4.fu.oN(), yr = .01 * ac.z2[a9.eI] / 50, rG.ys = 0, a9.jy < 7 ? bN.y5.yT(rG.yH) : 7 === a9.jy || 10 === a9.jy ? b6.fu.gl(a9.eI) && (g7 = bN.result.yp * (1 + a9.wt), 2 === a9.yM ? bN.result.ys += g7 *
				ac.gM[a9.eI] / bN.result.yq : kw[0] === a9.eI && (bN.result.ys += g7)) : 8 !== a9.jy || 1 !== a9.yU || 0 === bf.dp.data[107].value || 100 <= (dk = bf.dp.data[108].value) || (bN.result.ys += .01 * (1 + a9.wt) * (100 - dk) *
			10), this.yv())
	}, this.yv = function() {
		b6.fu.gl(a9.eI) && (.01 <= yr && aJ.yn(0, L(18, [yr.toFixed(2)]), 40, 0, b7.mq, b7.mV, -1, !1), .01 <= bN.result.ys) && aJ.yn(0, L(19, [bN.result.ys.toFixed(2)]), 40, 0, b7.mq, b7.mV, -1, !1)
	}, this.z4 = function() {
		var v6, z5;
		a9.k0 || bN.y9.yt || (z5 = ac, v6 = a9.eI, 0 === z5.z6[v6]) || z5.ib[v6] < 1 || 2 * z5.ok[v6] > 3 * (z5.ia[v6] + z5.ib[v6]) || (z5 = .01 * z5.z2[v6] / 50) < .01 || aJ.yn(0, L(18, [z5.toFixed(2)]), 40, 0, b7.mq, b7.mV, -1, !1)
	}
}

function yA() {
	this.yt = !1, this.dU = function() {
		this.yt = !1
	}, this.iS = function() {
		7 <= a9.jy || this.yt || bb.jb() % 20 == 11 && b6.fu.kp(90) && (a9.yM = 1, bN.yD.yT(), bN.result.yT())
	}
}

function y6() {
	function zA(z8) {
		for (var hU = (1 + a9.wt) * bN.result.yp / (1e5 * bN.result.yq), k = "", a7 = 0; a7 < z8.length; a7++) {
			var zF = z8[a7].zG * hU;
			k += "  " + z8[a7].name + ": " + b6.zC.zH(1e5 * zF)
		}
		k.length && (aJ.yn(0, L(20), 45, 0, b6.color.mQ(225, 240, 255), b7.mV, -1, !1), aJ.yn(0, k.trim(), 45, 0, b6.color.mQ(225, 240, 255), b7.mV, -1, !1), a9.gi || aJ.yn(700, L(21) + bG.zI, 736, 0, b7.mY, b7.mw, -1, !1))
	}
	this.yT = function(yH) {
		var yj = bc.k4[bd.kt()],
			yH = (a9.yU && b6.fu.gl(a9.eI) && (bN.result.ys += (b6.zC.zD(ac.zE[a9.eI]) ? 2 : 1) * bN.result.yp * (1 + a9.wt) * ac.gM[a9.eI] / bN.result.yq), function(yG) {
				var z8 = [],
					username = ac.zE,
					eY = yG.length;
				loop: for (var a7 = 0; a7 < eY; a7++) {
					var g6 = yG[a7],
						zJ = b6.zC.zD(username[g6]);
					if (zJ) {
						for (var er = z8.length - 1; 0 <= er; er--)
							if (z8[er].name === zJ) {
								z8[er].zG += ac.gM[g6];
								continue loop
							} z8.push({
							name: zJ,
							zG: ac.gM[g6],
							zK: bc.eW[g6]
						})
					}
				}
				return z8.sort(function(er, es) {
					return es.zG - er.zG
				}), z8
			}(yH));
		yH.length && (2 === a9.yM ? zA(yH) : zA(function(z8, yj) {
			for (var a7 = z8.length - 1; 0 <= a7; a7--) bc.k4[z8[a7].zK] !== yj && z8.splice(a7, 1);
			return z8
		}(yH, yj)))
	}
}

function yE() {
	this.yT = function() {
		if (2 === a9.yM) a9.yU = 2;
		else {
			if (8 === a9.jy) aY.yI(0) ? aY.yI(1) ? a9.yg = +(ac.gM[1] > ac.gM[0]) : a9.yg = 0 : a9.yg = 1;
			else {
				if (a9.ie) {
					var ks = bd.zM();
					if (bc.k4[ks]) return void(a9.yU = +(bc.eW[a9.eI] === ks))
				}
				a9.yg = kw[0]
			}
			a9.yU = +(a9.yg === a9.eI)
		}
	}
}

function d8() {
	this.id = 0, this.f1 = 0, this.tp = null, this.tq = null, this.tr = null, this.tx = null, this.v = new zN, this.dU = function() {
		var self, f1;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (f1 = Android.getVersion()) < 12 || (self.f1 = f1, self.id = 1, self.tq = Android),
			function(self) {
				var f1;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.tr = mwIOSdataX, self.tx = window.webkit.messageHandlers.iosCommandA, f1 = self
					.tr.version, self.f1 = f1 ? Number(f1) : 0)
			}(this),
			function(self) {
				var tp;
				if (0 === self.id) {
					try {
						if (!(tp = window.localStorage)) return;
						tp.setItem("tls7", "1"), tp.removeItem("tls7")
					} catch (error) {
						return
					}
					self.tp = tp
				}
			}(this)
	}
}

function zN() {
	this.zR = function() {
		bf.r6.uA(), bf.r6.uB(), aw.s.close(0, 3255), 0 === u.id ? u.tp && u.tp.clear() : 1 === u.id ? u.tq.saveString(199, "") : 2 === u.id && u.tx.postMessage("clear")
	}, this.zS = function() {
		2 === u.id ? u.tx.postMessage("showConsentForm") : 1 === u.id && u.tq.setState(7)
	}, this.zT = function() {
		this.setState(14)
	}, this.sd = function() {
		return 1 === bf.dp.tk(2)
	}, this.zU = function() {
		bf.dp.dq(102, "")
	}, this.setState = function(zV) {
		1 === u.id && 5 <= u.f1 && u.tq.setState(zV)
	}, this.w = function() {
		var zW;
		1 === u.id && 7 <= u.f1 ? u.tq.setState(5) : ((zW = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = zW.toString())
	}, this.dZ = function() {
		1 !== u.id || u.f1 < 17 || u.tq.saveString(23, document.documentElement.outerHTML)
	}, this.e8 = function() {
		0 !== u.id && (1 === u.id ? u.tq.prepareAd("1688441405") : 2 === u.id && (0 === u.f1 ? u.tx.postMessage("prepare ad 4500876070") : u.tx.postMessage("loadAds 4500876070")))
	}, this.zX = function(dk) {
		return 0 !== u.id && (1 === u.id ? 12 <= u.f1 && (u.tq.presentAd(dk), !0) : 2 === u.id && (0 === u.f1 ? u.tx.postMessage("show ad " + dk) : u.tx.postMessage("showAd"), !0))
	}, this.de = function() {
		2 === u.id && u.f1 < 23 && n.o(4, 1, new p("App Update Required", "A new iOS app version with bug fixes has been published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + bG.zY + "' target='_blank'>" + bG
			.zY + "</a>", !0, [new q("⬅️ " + L(22), function() {
				n.o(0)
			}, b7.nC)]))
	}
}

function dN() {
	function zb(e) {
		zm(e), n.o(4, 5, new p("🚀 New Game Update", "The game has been updated! Please reload the game." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new q("⬅️ " + L(22), function() {
				n.zn()
			}), new q("🔄 Reload", function() {
				u.v.w()
			}, b7.mv)]))
	}

	function zl(e) {
		zm(e), n.o(4, 5, new p(L(23), {
			"3249": "No servers found",
			"4705": "Lobby not found",
			"4730": "Kicked from lobby"
		} [e] ?? zf(e), !0))
	}

	function zf(e) {
		var p5 = " [" + e + "]";
		return 3249 === e || 1006 === e ? "No Internet / No Server Response" + p5 : 4527 === e ? "Player already in lobby" + p5 : 4530 === e ? "Lobby Timeout" + p5 : 4528 === e ? "Lobby Kick: Another login detected." + p5 : 4540 <= e && e < 4542 ?
			"You have been kicked. Duration: " + ["20 Seconds", "1 Minute", "1 Hour"][e - 4540] + p5 : "Unknown error" + p5
	}

	function zm(e) {
		ze(e), n.s.t()
	}

	function ze(e) {
		var zV = aW.zd();
		6 === zV ? aw.s.zp(e) : bk.zh ? (n.r(), bk.zq(), aw.s.close(aw.s.zi, 3256)) : 8 === zV && a9.zr(!0)
	}
	this.zZ = function(za, e) {
		za === 1 && __fx.customLobby.isActive() && aW.zd() !== 6 && __fx.customLobby.setActive(false);
		if (8 === n.rm && 0 === za)
			if (4211 === e) zb(e);
			else {
				if (4480 === e) return bf.r6.uC(), void n.o(4, 0, new p(L(25), L(26), !0));
				8 !== aW.zd() && ze(), n.o(4, 0, new p(L(23), zf(e), !0))
			}
		else {
			var zV = aW.zd();
			if (6 === zV) {
				if (4211 === e) return void zb(e);
				if (4215 !== e && 4516 !== e && 4527 !== e && 4533 !== e) return void aV.zg(za)
			} else {
				if (!bk.zh) return 8 === zV ? void(za !== aw.s.zj || a9.k0 || 1 !== a9.yP || a9.gi || aJ.zk(L(24, [e]))) : void 0;
				if (za !== aw.s.zi) return
			}
			zl(e)
		}
	}, this.zo = function(e) {
		8 === aW.zd() ? a9.k0 || 1 !== a9.yP || aJ.zk(L(24, [e])) : zl(e)
	}, this.m = function() {
		zm(3268)
	}
}

function cx() {
	var zs, zt, zu = -15e3,
		zv = !1;

	function gm(e) {
		a0F() || (zv = !0, a0G(e, 1), aw.s.a0H(aw.s.zj), a0I(Math.floor(at.pU * e.clientX), Math.floor(at.pU * e.clientY)))
	}

	function a04(e) {
		zu = bb.lo, a0G(e, 1), aw.s.a0H(aw.s.zj), 0 < e.touches.length && (zs = Math.floor(at.pU * e.touches[0].clientX), zt = Math.floor(at.pU * e.touches[0].clientY), ao.a04(e) || a0I(zs, zt))
	}

	function a0I(ef, eh) {
		n.gm(ef, eh), 0 === a9.yP ? aW.gm(ef, eh) : b8.a0J(ef, eh) || ba.gm(ef, eh) || aT.gm(ef, eh) || aH.a0K(ef, eh) || aL.gm(ef, eh) || 0 <= aI.gm(ef, eh) || bF.a0L(ef, eh) || aq.gm(ef, eh) || aH.a0M(ef, eh)
	}

	function a00(e) {
		a0F() || (zv = !0, a0G(e, 1), a0N(Math.floor(at.pU * e.clientX), Math.floor(at.pU * e.clientY)))
	}

	function a05(e) {
		zu = bb.lo, a0G(e, 1), 0 < e.touches.length && (zs = Math.floor(at.pU * e.touches[0].clientX), zt = Math.floor(at.pU * e.touches[0].clientY), ao.a05(e) || a0N(zs, zt))
	}

	function a0N(ef, eh) {
		n.a00(ef, eh), 0 === a9.yP ? aW.a00(ef, eh) : (bP.gf(ef, eh), ba.a00(ef, eh) || (aI.a00(ef, eh), aH.wz() ? aH.a00(ef, eh) : aN.gn ? aN.a00(ef) && (bb.dc = !0) : (aR.a00(ef, eh), aO.m3 && aO.a00(ef, eh) && (bb.dc = !0))))
	}

	function a02(e) {
		a0F() || (a0G(e, 1), a0O(), 0 === a9.yP ? (aW.click(-1024, -1024), aP.qQ()) : (aR.a0P(-1024, -1024), aI.a00(-1024, -1024), aN.a0Q(), aO.m3 = !1))
	}

	function a01(e) {
		a0F() || (a0G(e, 1), a0R(Math.floor(at.pU * e.clientX), Math.floor(at.pU * e.clientY), 2 === e.button), bF.zy && (bF.zy = !1, e.preventDefault()))
	}

	function click(e) {
		a0F() || a0G(e, 1)
	}

	function a06(e) {
		zu = bb.lo, a0G(e, 1), e && e.touches && 0 < e.touches.length && 0 !== a9.yP ? aO.m3 = !1 : ao.a0S() || (a0R(zs, zt, !1), bF.zy && (bF.zy = !1, e.preventDefault()))
	}

	function a07(e) {
		zu = bb.lo, a0G(e, 1), a0R(zs, zt, !1), bF.zy && (bF.zy = !1, e.preventDefault())
	}

	function a08(e) {}

	function a09(e) {}

	function a0A(e) {
		a0F() || a0G(e, 0)
	}

	function a0R(ef, eh, a0T) {
		a0O(), 0 === a9.yP ? aW.click(ef, eh) : (aR.a0P(ef, eh), ba.a0P(), aN.a0Q(), aO.m3 = !1, aH.click(ef, eh, a0T) ? bb.dc = !0 : aI.a01(ef, eh))
	}

	function a0O() {
		n.a0O()
	}

	function a03(e) {
		var ef, eh, deltaY;
		a0F() || (a0G(e, 1), aw.s.a0H(aw.s.zj), ef = Math.floor(at.pU * e.clientX), eh = Math.floor(at.pU * e.clientY), deltaY = e.deltaY, 1 === e.deltaMode && (deltaY *= 16), n.a03(ef, eh, deltaY), 0 === a9.yP ? aW.a03(ef, eh, deltaY) : aR.a03(ef,
			eh, deltaY) || (aN.a0U(ef, eh) ? aN.a03(deltaY) && (bb.dc = !0) : aO.a03(ef, eh, deltaY)))
	}

	function a0B(e) {
		a0G(e, 0)
	}

	function a0G(e, id) {
		0 === id && n.wz() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== aW.zd() && e.preventDefault()
	}

	function a0C(e) {
		if (__fx.keybindHandler(e.key)) return;
		a0F() || (e = e.code) && e.length && (bT.et(e, 18) ? am.a0W(3) : bT.et(e, 22) ? am.a0W(0) : bT.et(e, 20) ? am.a0W(1) : bT.et(e, 24) ? am.a0W(2) : bT.et(e, 10) ? aN.a0X(31 / 32) : bT.et(e, 8) ? aN.a0X(32 / 31) : bT.et(e, 6) ? aN.a0X(7 / 8) :
			bT.et(e, 4) ? aN.a0X(8 / 7) : bT.et(e, 14) ? 0 !== a9.yP && aO.a03(Math.floor(at.a1 / 2), Math.floor(at.j7 / 2), -200) : bT.et(e, 16) ? 0 !== a9.yP && aO.a03(Math.floor(at.a1 / 2), Math.floor(at.j7 / 2), 200) : bT.et(e, 0) ? a9.yP &&
			bP.gg(!1) : bT.et(e, 2) && a9.yP && bP.gg(!0))
	}

	function a0D(e) {
		var code;
		a0F() || bb.lo < 400 || (code = e.code) && code.length && ("Enter" === code && n.a0Y(1) || bk.zh && bk.st.a0Y(code) || (8 !== aW.zd() && aW.a0Y(e) ? bb.dc = !0 : "Escape" === code ? bF.f2() : bT.et(code, 18) ? am.a0Z(3) : bT.et(code, 22) ? am
			.a0Z(0) : bT.et(code, 20) ? am.a0Z(1) : bT.et(code, 24) ? am.a0Z(2) : bT.et(code, 12) ? b8.a0a(!a9.m1) : "Space" === code && a9.yP && (aI.gj && aI.a0b(), a9.gi) && b8.a0c(!1)))
	}

	function a0E() {
		"hidden" === document.visibilityState ? 1 === a9.yP && (a9.gi ? b8.a0d() : !a9.k0 || aI.gj || a9.gu || aI.a0b()) : bb.dc = !0
	}

	function a0F() {
		return zu + 15e3 > bb.lo
	}

	function resize() {
		at.a0f()
	}
	this.zw = 0, this.zx = "", this.zy = !1, this.dU = function() {
		zz.addEventListener("mousedown", gm, {
			passive: !1
		}), zz.addEventListener("mousemove", a00, {
			passive: !1
		}), zz.addEventListener("mouseup", a01, {
			passive: !1
		}), zz.addEventListener("click", click, {
			passive: !1
		}), zz.addEventListener("mouseleave", a02, {
			passive: !1
		}), zz.addEventListener("wheel", a03, {
			passive: !1
		}), zz.addEventListener("touchstart", a04, {
			passive: !1
		}), zz.addEventListener("touchmove", a05, {
			passive: !1
		}), zz.addEventListener("touchend", a06, {
			passive: !1
		}), zz.addEventListener("touchcancel", a07, {
			passive: !1
		}), zz.addEventListener("dragover", a08), zz.addEventListener("drop", a09), zz.addEventListener("dblclick", a0A), document.addEventListener("contextmenu", a0B), document.addEventListener("keydown", a0C), document.addEventListener(
			"keyup", a0D), document.addEventListener("visibilitychange", a0E), window.addEventListener("resize", resize)
	}, this.a0L = function(ef, eh) {
		return !!b8.gm(ef, eh) || !!(aR.gm(ef, eh) || aO.gm(ef, eh) || aN.gm(ef, eh) || aJ.gm(ef, eh))
	}, this.a0e = a0F, this.ps = function() {
		return !zv || 0 < zu
	}, this.f2 = function() {
		if (!n.wz()) return 8 === aW.zd() ? a9.m1 ? void b8.a0a(!1) : ba.wz ? void ba.a0b() : void aI.a0b() : void(7 !== aW.zd() && 6 === aW.zd() && aV.a0g());
		n.a0Y(2)
	}
}

function bt() {
	this.pO = new a0h, this.pY = new a0i, this.fu = new a0j, this.zC = new a0k, this.wg = new a0l, this.a0m = new a0n, this.canvas = new a0o, this.color = new a0p, this.a0q = new a0r, this.dU = function() {
		this.pO.u9()
	}
}

function a0i() {
	this.v4 = function(g) {
		g.fill(0)
	}, this.a0s = function(g) {
		for (var eY = g.length, a7 = 0; a7 < eY; a7++) g[a7] = []
	}, this.a0t = function(hP, a0u) {
		for (var hQ = bK.f9, a7 = 0; a7 < 3; a7++) hQ[a7] = a0u * hP[a7];
		return hQ
	}, this.a0v = function(hP, hQ, a0w) {
		for (var hU = 0, a7 = 0; a7 < 3; a7++) hU += Math.abs(hP[a7] - hQ[a7]);
		return a0w <= hU
	}, this.a0x = function(hP, a0y) {
		for (var a7 = 0; a7 < 3; a7++) hP[a7] = bH.ow(hP[a7] + a0y, 0, 255);
		return hP
	}, this.a0z = function(g, s3, s4) {
		s4 = s4 || g.length - 1;
		for (var a10 = 0, a7 = s3 = s3 || 0; a7 <= s4; a7++) a10 += g[a7];
		return a10
	}, this.a11 = function(g, a12) {
		for (var a7, a13, eY = g.length, a14 = [], er = eY - 1; 0 <= er; er--) {
			for (a7 = a13 = 0; a7 < eY; a7++) a12(g[a7]) < a12(g[a13]) && (a13 = a7);
			eY--, a14.push(g[a13]), g[a13] = g[eY], g.pop()
		}
		return a14
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
	}, this.a15 = function(g, f0) {
		for (var eY = g.length, g1 = 0, a7 = 0; a7 < eY; a7++) g1 += g[a7] > f0;
		return g1
	}, this.a16 = function(a17, a18, min) {
		for (var eY = a18[0], a7 = eY - 1; 0 <= a7; a7--) a17[a7] < min && (a17[a7] = a17[--eY]);
		a18[0] = eY
	}, this.a19 = function(g, eY, value) {
		for (var a7 = 0; a7 < eY; a7++) g[a7] -= value
	}, this.a1A = function(g) {
		for (var eY = g.length, a7 = 0; a7 < eY; a7++)
			if ("string" != typeof g[a7]) return !1;
		return !0
	}, this.a1B = function(p5, g, a1C) {
		g.fill(0);
		for (var s6 = p5.split(","), eY = Math.min(s6.length, g.length), a7 = 0; a7 < eY; a7++) g[a7] = Math.min(parseInt(s6[a7]), a1C)
	}, this.a1D = function(p5, g, qN) {
		g.fill("");
		for (var s6 = p5.split('"'), eY = Math.min(s6.length, 2 * g.length), k3 = 0, a7 = 1; a7 < eY; a7 += 2) g[k3++] = s6[a7].slice(0, qN)
	}, this.a1E = function(g, g1) {
		if (0 === g1) g.fill(0);
		else {
			var a10 = this.a0z(g),
				eY = g.length;
			if (0 === a10) g.fill(bH.dl(g1, eY));
			else
				for (var a7 = 0; a7 < eY; a7++) g[a7] = bH.dl(g1 * g[a7], a10);
			if (0 === (a10 = this.a0z(g))) g[1] = g1;
			else
				for (var k3 = 0; a10++ < g1;) g[k3 = (k3 + 1) % eY] && g[k3]++
		}
	}, this.a1F = function(g) {
		if (!g) return 0;
		var eY = g.length;
		if (0 === eY) return 0;
		for (var f0 = g[eY - 1], a7 = eY - 2; 0 <= a7; a7--)
			if (g[a7] !== f0) return a7 + 2;
		return 1
	}
}

function a0o() {
	this.xD = function(a1G, e0, a1H) {
		var hB = a1G.height,
			a1I = b6.pO.uu(hB, hB),
			hH = b6.pO.getContext(a1I);
		return function(a1, hH, a1H) {
			hH.fillStyle = a1H, hH.beginPath(), hH.arc(a1 / 2, a1 / 2, .47 * a1, 0, 2 * Math.PI), hH.fill()
		}(hB, hH, a1H), hH.drawImage(a1G, -e0 * hB, 0), a1I
	}, this.a1K = function(a1L) {
		var hH, hE, hB = a1L.height;
		return a1L.width === hB && (hE = (hH = b6.pO.getContext(a1L, !0)).getImageData(0, 0, hB, hB), b6.a0m.a1M(hE.data, hB, hB, .9), hH.putImageData(hE, 0, 0)), a1L
	}
}

function a0p() {
	this.a1N = function(f0) {
		return [f0 >> 12 & 63, f0 >> 6 & 63, 63 & f0]
	}, this.a1O = function(f0) {
		for (var g = this.a1N(f0), a7 = 0; a7 < 3; a7++) g[a7] = ~~(4.05 * g[a7]);
		return g
	}, this.a1P = function(f0) {
		f0 = this.a1O(f0);
		return b6.color.mQ(f0[0], f0[1], f0[2])
	}, this.a1Q = function(g) {
		for (var a7 = 0; a7 < 3; a7++) g[a7] = ~~(g[a7] / 4.04);
		return (g[0] << 12) + (g[1] << 6) + g[2]
	}, this.mQ = function(dz, s6, es) {
		return "rgb(" + dz + "," + s6 + "," + es + ")"
	}, this.mS = function(dz, s6, es, er) {
		return "rgba(" + dz + "," + s6 + "," + es + "," + er.toFixed(3) + ")"
	}, this.pu = function(et) {
		for (var g = et.split("(")[1].split(","), f8 = bK.f8, a7 = 0; a7 < 3; a7++) f8[a7] = parseInt(g[a7]);
		return 4 === g.length ? f8[3] = 255 * parseFloat(g[3].slice(0, -1)) : f8[3] = 255, f8
	}, this.pv = function(a1R, eb) {
		for (var g = a1R.slice(a1R.indexOf("(") + 1, a1R.indexOf(")")).split(","), f8 = bK.f8, a7 = 0; a7 < 3; a7++) f8[a7] = bH.ow(parseInt(g[a7].trim(), 10) + eb, 0, 255);
		return 3 === g.length ? this.mQ(f8[0], f8[1], f8[2]) : (a1R = parseFloat(g[3].trim()), this.mS(f8[0], f8[1], f8[2], a1R = 0 === a1R ? .3 : a1R))
	}, this.a1S = function(g) {
		for (var p5 = "#", a7 = 0; a7 < 3; a7++) {
			var dz = g[a7].toString(16);
			p5 += 1 === dz.length ? "0" + dz : dz
		}
		return p5
	}, this.a1T = function(p5) {
		var dz, s6;
		return p5.length < 7 ? b7.mP : (dz = parseInt(p5.slice(1, 3), 16), s6 = parseInt(p5.slice(3, 5), 16), p5 = parseInt(p5.slice(5, 7), 16), this.mQ(dz, s6, p5))
	}
}

function a0l() {
	this.a1U = function(p5, font, maxWidth) {
		if (font && (tK.font = font), tK.measureText(p5).width <= maxWidth) return p5;
		for (var a7 = p5.length - 1; 1 <= a7; a7--)
			if (p5 = p5.substring(0, a7), tK.measureText(p5 + "...").width <= maxWidth) return p5 + "...";
		return "..."
	}
}

function a0r() {
	var a1W = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.a1X = function(lo) {
		var a1Z, p5 = new Date(lo.getTime() - 6e4 * lo.getTimezoneOffset()).toUTCString();
		return p5.length < 12 || (p5 = p5.substring(5, p5.length), 0 === (lo = lo.getTimezoneOffset())) ? p5 : (a1Z = (lo < 0 ? "+" : "-") + bH.dl(Math.abs(lo), 60), 0 == (lo = Math.abs(lo) % 60) ? p5 + a1Z : p5 + a1Z + ":" + (lo < 10 ? "0" :
			"") + lo)
	}, this.a1a = function(lo) {
		var p5 = lo.toUTCString();
		return p5.length < 12 ? p5 : function(lo) {
			return a1W[lo.getUTCDay()]
		}(lo) + ", " + p5.substring(5, p5.length - 4)
	}
}

function a0h() {
	var a1c = null;
	this.xU = 0, this.u9 = function() {
		var f0 = bf.dp.data[5].value;
		a1c = "px " + f0, "Trebuchet MS" !== f0 && (a1c += ", Trebuchet MS"), this.xU = hA(32, 32, ["a", "b", "m"], 200, a1c)
	}, this.uu = function(a1, j7) {
		var et = document.createElement("canvas");
		return et.width = a1, et.height = j7, et
	}, this.getContext = function(canvas, alpha) {
		return canvas.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(wg, a1, j7) {
		return wg.getImageData(0, 0, a1, j7)
	}, this.rP = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + a1c : 1 === type ? "bold " + size + a1c : 2 === type ? "lighter " + size + a1c : 3 === type ? "italic " + size + a1c : 4 === type ? "oblique " + size + a1c : 5 === type ? "small-caps " +
			size + a1c : "small-caps bold " + size + a1c
	}, this.textAlign = function(hH, id) {
		hH.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(hH, id) {
		hH.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.pa = function(e, code, color) {
		color = this.pZ(bY.rQ) + " solid " + (color || b7.mY);
		5 === (code = code || 5) ? e.style.border = color : 4 === code ? e.style.borderLeft = color : 2 === code ? e.style.borderBottom = color : 6 === code ? e.style.borderRight = color : e.style.borderTop = color
	}, this.s8 = function(e, ef, eh, a1, j7) {
		e = e.style;
		e.left = this.s9(ef), e.top = this.s9(eh), e.width = this.s9(a1), e.height = this.s9(j7)
	}, this.pP = function(f0) {
		return 1 + f0 * u.v.sd()
	}, this.qy = function(mA, g7) {
		return mA * this.pP(void 0 === g7 ? .5 : g7) * at.pQ / at.pU
	}, this.s7 = function(mA, g7) {
		return mA * this.pP(void 0 === g7 ? .5 : g7) * at.pQ
	}, this.rs = function(mA, g7, a1d) {
		return this.pP(g7) * Math.min(mA * at.pQ, a1d * at.a1) / at.pU
	}, this.pZ = function(f0) {
		return f0.toFixed(1) + "px"
	}, this.s9 = function(f0) {
		return this.a1f(f0).toFixed(1) + "px"
	}, this.a1f = function(f0) {
		return f0 / at.pU
	}, this.a1g = function(re, a1h) {
		for (var p5 = "<ul>", eY = re.length, a7 = 0; a7 < eY; a7++) p5 += "<li>" + re[a7] + ": <a href='" + a1h[a7] + "' target='_blank'>" + a1h[a7] + "</a></li>";
		return p5 += "</ul>"
	}, this.a1i = function(a1j) {
		return "<a href='" + a1j + "' target='_blank'>" + a1j + "</a>"
	}, this.a1k = function(e) {
		navigator.clipboard && navigator.clipboard.writeText(e.value)
	}, this.a1l = function(e) {
		var dk = e.textContent;
		b6.zC.a1m(dk, "✔") || (1 === dk.length ? e.textContent = "✔" : e.textContent = dk + " ✔", setTimeout(function() {
			e.textContent = dk
		}, 500))
	}, this.measureText = function(p5) {
		return tK.measureText(p5).width
	}
}

function a0j() {
	this.gk = function(zV) {
		return 0 === zV ? 1 === a9.yP && a9.gu : 1 === zV ? 1 === a9.yP && !a9.gu : 2 === a9.yP
	}, this.gl = function(player) {
		return 0 !== ac.lV[player] && 2 !== ac.a1n[player]
	}, this.a1o = function(player) {
		return player === a9.eI && 2 !== ac.a1n[player]
	}, this.a1p = function(player) {
		return player === a9.eI
	}, this.j1 = function(player) {
		return player >= a9.je || 2 === ac.a1n[player]
	}, this.kT = function(player) {
		return 0 !== ac.lV[player]
	}, this.oh = function(a1q, a1r) {
		return a1q !== a1r
	}, this.fx = function(player, f0) {
		var min;
		return f0 = this.a1s(player, f0), ac.ga[player] += f0, ac.a1t[player] && (min = Math.min(ac.a1t[player], ac.ga[player]), ac.a1t[player] -= min, ac.ga[player] -= min), f0
	}, this.a1s = function(player, f0) {
		var a1u = ac.ga[player];
		return f0 = Math.min(f0, ac.gM[player] * a9.jl - a1u), f0 = Math.min(f0, a9.a1v - a1u), Math.max(f0, 0)
	}, this.oi = function(player, hu, a1w, a1x) {
		var a1u = ac.ga[player],
			hu = bH.dl(a1u * (hu + 1), 1024),
			a1w = bH.dl(a1w * a1u, 1024),
			hu = Math.min(hu, a1u - a1w);
		return 10 === a9.jy && (hu = b0.a1z(player, hu)), bK.f6[0] = hu, bK.f6[1] = a1w, a1x <= hu
	}, this.o9 = function(player, nq, np) {
		var player = ac.ga[player],
			a1y = bH.dl(64 * player, 1024),
			player = (nq = Math.min(nq, player - a1y), this.a21(nq));
		return a1y += player, nq = this.a1s(np, nq -= player), bK.f6[0] = nq, bK.f6[1] = a1y, 1 <= nq
	}, this.oB = function(nq, np) {
		var a20 = this.a21(nq);
		return nq = this.a1s(np, nq -= a20), bK.f6[0] = nq, bK.f6[1] = a20, 1 <= nq
	}, this.ht = function(player, a22) {
		return bH.dl(ac.ga[player] * (a22 + 1), 1024)
	}, this.a21 = function(a23) {
		return bH.dl(Math.max(2142 - bb.jb(), 0) * a23, 2142)
	}, this.ou = function(player, a1w) {
		a1w = bH.dl(a1w * ac.ga[player], 1024);
		bK.f6[1] = a1w, ac.ga[player] -= a1w
	}, this.fv = function(player, a24) {
		var fI, fK, es = ac.ga[player];
		return a24 <= es ? ac.ga[player] -= a24 : (ac.ga[player] = 0, fK = ac.a1t[player] + (fI = 5 * ((es = a24 - es) >> 2)), bZ.fy(player, fI - es, 12), fK <= a9.a25 ? ac.a1t[player] = fK : (ac.a1t[player] = a9.a25, bZ.fy(player, fK - a9.a25,
			18))), a24
	}, this.kh = function(player, hu) {
		var ga = ac.ga,
			a1u = ga[player],
			hu = bH.dl(a1u * (hu + 1), 1024),
			a1y = Math.max(bH.dl(a1u, 10), 1e3);
		return (hu = Math.min(hu, a1u - a1y)) < 0 ? (ga[player] = 0, a1y = Math.min(1e3, a1u + a9.a25 - ac.a1t[player]), bK.f6[1] = a1y, ac.a1t[player] += a1y - a1u, 0) : (bK.f6[1] = a1y, 10 === a9.jy && (hu = b0.a1z(player, hu)), ga[player] -=
			a1y + hu, hu)
	}, this.ol = function(player) {
		ac.ga[player] -= bK.f6[0] + bK.f6[1]
	}, this.oj = function(player, il) {
		return (il = Math.min(il, a9.eV)) < a9.eV && 0 === ac.lV[il] && (il = a9.eV), (bK.eU[0] = il) === a9.eV || eR(player, il)
	}, this.on = function(player, np) {
		return 0 !== ac.lV[np] && !eR(player, np)
	}, this.a26 = function(player, a27) {
		for (var g6, eY = ah.jf, qs = 0, a28 = kw, a7 = 0; a7 < eY; a7++)
			if (g6 = a28[a7], aY.yI(g6)) {
				if (player === g6) return !0;
				if (++qs > a27) return !1
			} return !1
	}, this.kp = function(g6) {
		var a29 = a9.ie ? bd.yy() : ac.gM[kw[0]];
		return a29 >= bH.dl(g6 * a9.jO, 100)
	}
}

function a0n() {
	this.a2A = function(canvas, a2B, a2C) {
		var a1 = canvas.width,
			j7 = canvas.height,
			et = b6.pO.uu(a1, j7),
			hH = b6.pO.getContext(et, !0),
			canvas = (hH.drawImage(canvas, 0, 0), hH.getImageData(0, 0, a1, j7));
		return a2B(canvas.data, a1, j7, a2C), hH.putImageData(canvas, 0, 0), et
	}, this.a2D = function(v5, a1, j7) {
		for (var ef = a1 - 1; 0 <= ef; ef--)
			for (var eh = j7 - 1; 0 <= eh; eh--) {
				var a7 = 4 * (ef + eh * a1);
				v5[3 + a7] = v5[a7], v5[a7] = v5[1 + a7] = v5[2 + a7] = 255
			}
	}, this.a2E = function(v5, a1, j7) {
		for (var ef = a1 - 1; 0 <= ef; ef--)
			for (var eh = j7 - 1; 0 <= eh; eh--) {
				var a7 = 4 * (ef + eh * a1);
				v5[1 + a7] > v5[2 + a7] + 10 && (v5[3 + a7] = v5[a7], v5[1 + a7] = v5[2 + a7])
			}
	}, this.a2F = function(v5, a1, j7, a2C) {
		for (var gap = Math.floor(Math.min(a1, j7) * a2C), ef = 0; ef < a1; ef++)
			for (var a7, eh = 0; eh < j7; eh++)(ef < gap || eh < gap || a1 - gap <= ef || j7 - gap <= eh) && (v5[3 + (a7 = 4 * (ef + eh * a1))] = 255 - 255 * (v5[1 + a7] - v5[a7]) / (255 - v5[a7]))
	}, this.a2G = function(v5, a1, j7, a2C) {
		for (var ef = a1 - 1; 0 <= ef; ef--)
			for (var eh = j7 - 1; 0 <= eh; eh--) {
				var a7 = 4 * (ef + eh * a1);
				v5[a7] = a2C[0], v5[1 + a7] = a2C[1], v5[2 + a7] = a2C[2]
			}
	}, this.a2H = function(v5, a1, j7, a2C) {
		for (var gap = Math.floor(a1 * a2C), ef = 0; ef < a1; ef++)
			for (var a7, eh = 0; eh < j7; eh++)(ef < gap || eh < gap || a1 - gap <= ef || j7 - gap <= eh) && (v5[a7 = 4 * (ef + eh * a1)] = v5[1 + a7] = v5[2 + a7] = 0)
	}, this.a2I = function(v5, a1, j7) {
		for (var eh, a7, ef = a1 - 1; 0 <= ef; ef--)
			for (eh = j7 - 1; 0 <= eh; eh--) 200 < v5[1 + (a7 = 4 * (ef + eh * a1))] && v5[1 + a7] - 20 > v5[a7] && v5[1 + a7] - 20 > v5[2 + a7] ? v5[a7] + v5[2 + a7] < 40 ? v5[3 + a7] = 0 : (v5[3 + a7] = v5[a7], v5[a7] = 255, v5[1 + a7] = 255,
				v5[2 + a7] = 255) : v5[a7] < 50 && v5[1 + a7] < 50 && v5[2 + a7] < 50 && (v5[a7] + v5[1 + a7] + v5[2 + a7] < 50 ? v5[3 + a7] = 180 : v5[3 + a7] = 180 + Math.floor(75 * (v5[a7] + v5[1 + a7] + v5[2 + a7] - 50) / 100))
	}, this.a2J = function(v5, a1, j7) {
		for (var eh, a7, ef = a1 - 1; 0 <= ef; ef--)
			for (eh = j7 - 1; 0 <= eh; eh--) v5[1 + (a7 = 4 * (ef + eh * a1))] > v5[a7] + 20 && v5[1 + a7] > v5[2 + a7] + 20 && v5[a7] + v5[2] < 40 && (v5[3 + a7] = 255 - v5[1 + a7], v5[a7] = v5[1 + a7] = v5[2 + a7] = v5[a7])
	}, this.a1M = function(v5, a1, j7, a2C) {
		for (var dz = a1 >> 1, ef = 0; ef < a1; ef++)
			for (var eh = 0; eh < j7; eh++) Math.sqrt((ef - dz) * (ef - dz) + (eh - dz) * (eh - dz)) > a2C * dz && (v5[4 * (ef + eh * a1) + 3] = 0)
	}
}

function a0k() {
	this.xi = function(f0) {
		var a7, a2K, a2L, a2M, a2N;
		if (f0 < 0) return "-" + this.xi(Math.abs(f0));
		if (f0 < 1e3) return f0.toString();
		for (a2K = Math.floor(Math.log(f0 + .5) / Math.log(10)) + 1, a2L = Math.floor((a2K - 1) / 3), a2N = (a2M = f0.toString()).substring(a2K - 3, a2K), a7 = 1; a7 < a2L; a7++) a2N = a2M.substring(a2K - 3 * (a7 + 1), a2K - 3 * a7) + " " + a2N;
		return a2M.substring(0, a2K - 3 * a2L) + " " + a2N
	}, this.a2O = function(g6, a2K) {
		return g6.toFixed(a2K) + "%"
	}, this.zH = function(f0, a2P) {
		return f0.toFixed(bH.ow(Math.floor((void 0 === a2P ? 3 : a2P) - Math.log10(Math.max(f0, 1))), 0, 8))
	}, this.a2Q = function(f0, mA, a2K) {
		return (f0 * mA).toFixed(a2K)
	}, this.zD = function(username) {
		var ec, eN = username.indexOf("[");
		return !(eN < 0) && 1 < (ec = username.indexOf("]")) - eN && ec - eN <= 8 ? username.substring(eN + 1, ec).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.zD;
	this.a2R = function(p5) {
		for (var er = Math.floor(.5 * p5.length + .5), mG = Math.floor(.5 * (er - 1)), a7 = 0; a7 < mG; a7++)
			for (var es = -1; es < 2; es += 2) {
				var et = er + es * a7;
				if (" " === p5[et]) return [this.a2S(p5.substring(0, et)), this.a2T(p5.substring(et))]
			}
		return [p5.substring(0, er), p5.substring(er)]
	}, this.a2T = function(p5) {
		for (var eY = p5.length, a7 = 0; a7 < eY; a7++)
			if (" " !== p5[a7]) return p5.substring(a7);
		return p5
	}, this.a2S = function(p5) {
		for (var a7 = p5.length - 1; 0 <= a7; a7--)
			if (" " !== p5[a7]) return p5.substring(0, a7 + 1);
		return p5
	}, this.a2U = function(p5, a2V) {
		return p5.split("(")[0] + "(🧈 " + a2V.toFixed(2) + ")"
	}, this.startsWith = function(p5, a2W) {
		return p5.substring(0, a2W.length) === a2W
	}, this.a1m = function(p5, a2W) {
		var eY = p5.length;
		return p5.substring(eY - a2W.length, eY) === a2W
	}, this.a2X = function(g, a2Y, a2Z) {
		var p5 = "",
			eY = g.length - 1;
		a2Z = a2Z || "";
		for (var a7 = 0; a7 < eY; a7++) p5 += a2Z + g[a7] + a2Z + ",", (a7 + 1) % a2Y == 0 && (p5 += "\n");
		return p5 += a2Z + g[eY] + a2Z
	}, this.a2a = function(p5, hP, hQ) {
		return p5.replace(new RegExp(hP, "g"), hQ)
	}
}

function a2b() {
	this.ii = function(player, eK) {
		aE.wS(player, bI.eg(eK), bI.ei(eK)) && (bb.dc = !0), a9.k0 && this.iS()
	}, this.iS = function() {
		a9.gu = !1;
		for (var a7 = 0; a7 < a9.je; a7++) 0 !== ac.lV[a7] && 0 === ac.gM[a7] && aE.wY(a7);
		0 !== ac.lV[a9.eI] ? (bZ.lR[7] = ac.gM[a9.eI], bZ.lR[8] = ac.ga[a9.eI], aN.a2c(), aS.a2d(), a9.gi || aD.lr(ac.i9[a9.eI] - 5, ac.iB[a9.eI] - 5, ac.iA[a9.eI] + 5, ac.iC[a9.eI] + 5), ap.dU()) : aT.show(!1, !1, !1, !0), aJ.a2e(18), ab.a2f(),
			ab.lH(!0), bL.s.a2g(), aH.qw(), a9.og = null, bX.a2h = !0, bX.a2i(), a9.k0 && u.v.setState(1)
	}
}

function bv() {
	this.eV = 512, this.a1v = 15e8, this.a2j = 1e9, this.a25 = 5e4, this.a2k = 512, this.fs = 2, this.eI = 0, this.je = 0, this.yS = 0, this.k2 = 0, this.yR = 0, this.vd = 512, this.vi = 512, this.jl = 150, this.k0 = !0, this.gi = 0, this.yP = 0,
		this.jO = 0, this.m1 = !1, this.gu = 0, this.a2l = 0, this.ie = !1, this.vk = 0, this.vl = 0, this.jy = 0, this.wt = 0, this.og = null, this.yh = new wm, this.a2m = 30, this.yM = 0, this.yU = 0, this.yg = 0, this.data = new a2n, this.a2o =
		new a2p, this.a2q = 0, this.a2r = function() {
			this.yS = this.je = this.data.humanCount, this.k0 = 1 === this.yS && !__fx.customLobby.isActive(), this.m1 = !1, this.gi = this.data.isReplay, this.jy = 0 === this.data.gameMode ? [7, 10, 8][this.data.battleRoyaleMode] : this.data
				.isZombieMode ? 9 : this.data.numberTeams - 2, this.wt = this.data.isContest, this.ie = this.jy < 7 || 9 === this.jy, this.jy = 10 === this.jy && this.k0 ? 7 : this.jy, this.jy = 8 === this.jy && 2 !== this.je ? 7 : this.jy, av.dU(),
				this.vk = this.data.numberTeams, this.data.teamPlayerCount ? this.vl = +(0 < this.data.teamPlayerCount[0]) : (this.vl = 0, this.ie && this.k0 && (this.data.teamPlayerCount = new Uint16Array(9), this.data.teamPlayerCount.fill(1, 1,
					this.vk + 1), a9.a2o.a2s())), this.a2m = this.je <= 2 ? 30 : this.je <= 50 ? 40 : 50, this.a2l = this.gu = __fx.customLobby.isActive() ? __fx.customLobby.gameInfo.spawnSelection : this.data.selectableSpawn, this.og = this.gu ?
				new a2b : null, this.vd = __fx.customLobby.isActive() ? Math.max(Math.min(__fx.customLobby.gameInfo.botCount, this.data.playerCount), this.je) : this.data.playerCount,
				this.vi = this.vd, this.k2 = this.vd - this.je, this.yR = 0, this.eI = this.data.selectedPlayer, this.yM = 0, this.yU = 0, this.yg = 0, au.a2t(this.data.spawningSeed), aa.dU(), ac.dU(), ae.a2u(), b4.ni.oR = [], bc.dU(), this.yP = 1,
				__fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), bZ.dU(), a2v(), aY.dV(), ak.a2w(), bX.dU(), aY.dU(), an.dU(), bI.dU(), bJ.dU(), aj.dU(), bN.dU(), bR.a2x(),
				aA.dU(), ae.a3(), aE.dU(), aF.dU(), ah.a2y(), b5.dU(), bd.dU(), bL.dU(), ba.dU(), a2z.putImageData(a30, 0, 0), aR.dU(), aO.dU(), aN.dU(), b8.dU(), aq.dU(), aQ.dU(), aS.dU(), aI.dU(), aM.dU(), aJ.dU(), aL.dU(), aH.dU(), aT.dU(), aB
				.dU(), aC.dU(), fa(), aZ.dU(), ab.dU(), b0.dU(), b1.dU(), ax.dU(), this.yh.dU(), bb.a2x(), aD.lq(), 0 === ac.lV[a9.eI] && aT.show(!1, !0), ab.lH(!0), ap.dU(), bb.dc = !0, this.gi || this.k0 && this.gu || u.v.setState(1), this.a2q = 0
		}, this.zr = function(a32) {
			a9.gi || b5.od.a33.length || (b5.od.a33 = b5.a34.xt()),
				__fx.customLobby.isActive() === false && aw.s.a35(),
				this.yP = 0, bb.a36(), u.v.setState(0), a32 || bQ.e6.show(), aW.setState(0);
			if (__fx.customLobby.isActive()) __fx.customLobby.rejoinLobby();
			else this.a2q ? n.o(19) : n.o(5, 5)
		}, this.a37 = function() {
			return this.gi ? aI.gj || !b8.a38 : this.k0 && (aI.gj || this.gu)
		}, this.a39 = function() {
			return 1 === this.yP && !this.gu
		}
}

function a2n() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.elo = null, this.colorsType = 0, this.colorsPersonalized = 1,
		this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData = null, this.spawningType = 0,
		this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this.aIncomeData = null, this
		.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null
}

function a2p() {
	this.a2s = function() {
		var a3A = a9.data;
		b6.pY.a1E(a3A.teamPlayerCount, a3A.playerCount), a3A.numberTeams = b6.pY.a15(a3A.teamPlayerCount, 0), a3A.teamPlayerCount[0] && a3A.teamPlayerCount[7] && (a3A.teamPlayerCount[7] = 0, this.a2s())
	}, this.a3B = function() {
		var a3A = a9.data;
		a3A.mapType < 2 ? bO.a3(bO.a3C(a3A), a3A.mapSeed) : bO.a3D(a3A.canvas)
	}, this.a3E = function() {
		var a3A = a9.data;
		a3A.colorsData || (a3A.colorsData = new Uint32Array(1)), a3A.selectableColor && (a3A.colorsData[0] = bf.s.u8()), a3A.selectableName && (a3A.playerNamesData || (a3A.playerNamesData = new Array(1)), a3A.playerNamesData[0] = bf.dp.data[122]
			.value)
	}, this.a3F = function() {
		a9.data = new a2n, a9.data.aIncomeType = 2, a9.data.aIncomeData = new Uint8Array(a9.eV), a9.data.aIncomeData[0] = 64
	}
}

function dM() {
	this.xR = 0, this.gap = 0, this.rQ = 0, this.pW = 0, this.dU = function() {
		this.resize()
	}, this.resize = function() {
		this.xR = .0022 * b6.pO.pP(.5) * at.pQ, this.rQ = this.xR / at.pU, this.gap = Math.max(Math.floor((u.v.sd() ? .0114 : .01296) * at.pQ), 2), this.pW = this.gap / at.pU
	}
}

function dL() {
	this.a3G = function() {
		return u.v.sd() ? 2 : 1
	}
}

function c6() {
	var pz, ef, eh, a3H, a3I, a3J, lo, player, a3K, gap, zoom, oK, a3L;

	function a3V(player) {
		for (var a7 = oK.length - 1; 0 <= a7; a7--)
			if (oK[a7] === player) return 1
	}

	function a3T(a3Q) {
		var a7, eY;
		if (-1 !== a3Q)
			for (eY = pz.length, a7 = 0; a7 < eY; a7++)
				if (pz[a7].wz && pz[a7].ef + 1 === a3Q % 4 && pz[a7].eh + 1 === a3Q >> 2) return a7;
		return -1
	}

	function a3R(kk, kl) {
		var s6 = gap / 2;
		return kk < ef - a3H - 3 * s6 || ef + 3 * a3H + 5 * s6 < kk || kl < eh - a3H - 3 * s6 || eh + 2 * a3H + 3 * s6 < kl ? -1 : 4 * (kl < eh - s6 ? 0 : kl < eh + a3H + s6 ? 1 : 2) + (kk < ef - s6 ? 0 : kk < ef + a3H + s6 ? 1 : kk < ef + 2 * a3H +
			3 * s6 ? 2 : 3)
	}
	this.a3M = function() {
		var a7, es, a3P = [b7.my, b7.nB, b7.mW, b7.nT, b7.nM];
		for (pz = new Array(9), a7 = 0; a7 < 9; a7++) pz[a7] = {
			id: a7,
			wz: !1,
			kR: 0,
			canvas: [],
			ef: 0,
			eh: 0
		};
		for (pz[0].colors = [0, 1, 2, 3], pz[0].ef = 0, pz[0].eh = 0, pz[1].colors = [0, 1, 4], pz[1].ef = 1, pz[1].eh = 0, pz[2].colors = [0, 2], pz[2].ef = -1, pz[2].eh = 0, pz[3].colors = [0], pz[3].ef = 0, pz[3].eh = 0, pz[4].colors = [0, 2],
			pz[4].ef = 1, pz[4].eh = 1, pz[5].colors = [3], pz[5].ef = 0, pz[5].eh = -1, pz[6].id = 20, pz[6].colors = [0], pz[6].ef = 1, pz[6].eh = -1, pz[7].id = 21, pz[7].colors = [0], pz[7].ef = 0, pz[7].eh = 1, pz[8].id = 16, pz[8]
			.colors = [0], pz[8].ef = 0, pz[8].eh = 0, a7 = 0; a7 < 9; a7++)
			for (es = 0; es < pz[a7].colors.length; es++) pz[a7].canvas.push(function(id, a1H) {
				if (id < 20) return b6.canvas.xD(aX.get(3), id, a1H);
				var a1H = aX.get(3).height,
					a1I = b6.pO.uu(a1H, a1H),
					hH = b6.pO.getContext(a1I);
				20 === id ? hH.drawImage(aX.get(18), 0, 0) : 21 === id && af.v5.xS(af.ww.xH + af.ww.xY, hH, 0, 0, a1H);
				return a1I
			}(pz[a7].id, a3P[pz[a7].colors[es]]))
	}, this.a3O = function() {
		return pz
	}, this.dU = function() {
		oK = [], ef = eh = lo = 0, a3I = a3J = -1e3, this.resize()
	}, this.resize = function() {
		a3H = Math.floor((u.v.sd() ? .075 : .0468) * at.pQ), zoom = a3H / aX.get(3).height, gap = Math.floor(a3H / 3)
	}, this.a0K = function(kk, kl) {
		return !!this.wz() && (bb.dc = !0, !!af.v5.gm(kk, kl, player) || (kk = function(kk, kl) {
			a3J = a3I = -1e3;
			var a3S = a3T(a3R(kk, kl));
			if (-1 === a3S) return 0;
			if (1 !== pz[a3S].colors[pz[a3S].kR])
				if (5 === a3S) {
					if (! function() {
							var dk = performance.now();
							a3L + 4e3 < dk && (oK = []);
							a3L = dk
						}(), a3V(player)) return 1;
					oK.push(player), 16 < oK.length && oK.shift()
				} else if (6 === a3S) {
				for (var a7 = oK.length - 1; 0 <= a7; a7--) 0 === ac.lV[oK[a7]] && oK.splice(a7, 1);
				0 < oK.length && (b1.a3W(1, oK, !0) && b4.fu.oJ(oK, player), oK = [])
			} else if (2 === a3S) b4.gv.no(aN.h0(), player);
			else if (3 === a3S) a9.gu && b4.gv.gw(a3K);
			else if (0 === a3S)
				if (0 === pz[0].kR) {
					if (a9.a2l && aS.a3X() < 350) return 1;
					b4.gv.h6(aN.h0(), player)
				} else ax.h8(player, aN.h0());
			else if (1 === a3S) bR.a3Y(), b4.gv.h4(aN.h0(), a3K);
			else {
				if (7 === a3S) return bR.a3Z(), af.v5.show(kk, kl), 2;
				if (4 === a3S) b1.a3W(0, [player], !0) && b4.fu.oG(player);
				else {
					if (8 !== a3S) return 0;
					b4.gv.gz(aN.h0(), a3K, player)
				}
			}
			return 1
		}(kk, kl), this.qw(), 2 === kk && (af.v5.wz = !0), 0 < kk))
	}, this.a0M = function(kk, kl) {
		this.wz() || (a3I = kk, a3J = kl, lo = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = bI.gq(mouseX),
			coordY = bI.gs(mouseY),
			coord = bI.ew(coordX, coordY),
			point = bI.eO(coord);
		if (coordX < 0 || coordY < 0) return;
		(function(kk, kl, eC) {
			aY.eT(eC) || -1 === (kk = bJ.h2.a3n(kk, kl)) ? aJ.a3m(eC) : aJ.a3o(kk)
		}(mouseX, mouseY, point))
	}
	this.click = function(kk, kl, a0T) {
		var gp = bI.gq(kk),
			gr = bI.gs(kl),
			eK = bI.ew(gp, gr),
			eC = bI.eO(eK);
		if (!bI.gt(gp, gr)) return !1;
		gp = (u.v.sd() ? .025 : .0144) * at.pQ, gr = performance.now();
		if (Math.abs(kk - a3I) > gp || Math.abs(kl - a3J) > gp || lo + 500 < gr) return !1;
		if (lo = gr, a0T && ! function(kk, kl, eC) {
				aY.eT(eC) || -1 === (kk = bJ.h2.a3n(kk, kl)) ? aJ.a3m(eC) : aJ.a3o(kk)
			}(kk, kl, eC), aI.gj || this.wz() || !b6.fu.gl(a9.eI) || a9.gi) return this.qw(), !1;
		if (a9.gu) {
			if (!a0T) {
				if (!aY.eT(eC)) return !1;
				a3K = eK, pz[3].wz = !0
			}
		} else if (bJ.h2.nt(eK)) a0T ? aJ.a3f(55, 0) : bJ.a3d.a3e = -1;
		else {
			if (a0T) return !1;
			bJ.h2.a3g(kk, kl) || (2 === a9.yP ? aY.g8(eC) && (player = aY.eQ(eC), aY.yI(player)) && (pz[0].wz = !0, pz[0].kR = 1, pz[7].wz = !0) : aY.ed(eC) ? (a3K = ai.e9.eB(eC)) && (gp = bI.eO(a3K), pz[8].wz = !0, player = aY.eP(gp) ? a9.eV :
				aY.eQ(gp)) : (a3K = eK, bJ.h2.h3(a9.eI, eK) && (pz[0].wz = !0, pz[0].kR = 1, pz[1].wz = !0, pz[1].kR = bK.fA[2] ? 0 : 2), aY.h1(eC) || (aY.eP(eC) ? (player = a9.eV, h5(a9.eI) ? (pz[0].wz = !0, pz[0].kR = 0) : h7(a9.eI,
				player) && (pz[0].wz = !0, pz[0].kR = 3)) : (player = aY.eQ(eC)) === a9.eI ? (pz[0].wz = !0, pz[0].kR = 1, pz[7].wz = !0) : (pz[0].kR = 1, pz[5].wz = function(player) {
				return aY.yI(player) && !a3V(player) && b1.a3W(1, [player], !1)
			}(player), pz[7].wz = aY.yI(player), eR(player, a9.eI) ? (pz[4].wz = aY.yI(player) && !ab.a3i(player) && b1.a3W(0, [player], !1), pz[6].wz = function(player) {
				if (0 === oK.length) return !1;
				if (performance.now() > a3L + 4e3) return !(oK = []);
				return !a3V(player) && ! function(player) {
					var a7;
					if (a9.ie)
						for (a7 = oK.length - 1; 0 <= a7; a7--)
							if (!eR(player, oK[a7])) return 1;
					return
				}(player)
			}(player), h9(a9.eI, player) ? (pz[0].kR = 0, pz[0].wz = !0) : h7(a9.eI, player) && (pz[0].kR = 3, pz[0].wz = !0), pz[0].wz = this.a3k()) : (pz[2].wz = !0, pz[0].wz = !0)))))
		}
		return this.a3c(kk, kl)
	}, this.a3c = function(kk, kl) {
		return ef = kk - Math.floor(a3H / 2), eh = kl - Math.floor(a3H / 2), !!this.wz()
	}, this.a00 = function(kk, kl) {
		return !!this.wz() && (af.v5.wz ? !af.v5.xQ(kk, kl) && (af.v5.wz = !1, bb.dc = !0) : function(rG, kk, kl) {
			kk = a3R(kk, kl);
			if (0 <= a3T(kk)) return !1;
			if ((1 === kk || 6 === kk) && 0 <= a3T(2)) return !1;
			if ((6 === kk || 9 === kk) && 0 <= a3T(10)) return !1;
			return rG.qw(), bb.dc = !0
		}(this, kk, kl))
	}, this.qw = function() {
		for (var a7 = pz.length - 1; 0 <= a7; a7--) pz[a7].wz = !1, pz[a7].kR = 0;
		af.v5.wz = !1
	}, this.wz = function() {
		return this.a3k() || af.v5.wz
	}, this.a3k = function() {
		for (var eY = pz.length, a7 = 0; a7 < eY; a7++)
			if (pz[a7].wz) return !0;
		return !1
	}, this.tJ = function() {
		if (this.wz())
			if (af.v5.wz) af.v5.tJ();
			else {
				var a7, hH = tK,
					es = pz,
					eY = es.length,
					a3s = (a3H + gap) / zoom;
				for (hH.imageSmoothingEnabled = !0, hH.setTransform(zoom, 0, 0, zoom, ef, eh), a7 = 0; a7 < eY; a7++) es[a7].wz && tK.drawImage(es[a7].canvas[es[a7].kR], es[a7].ef * a3s, es[a7].eh * a3s);
				hH.imageSmoothingEnabled = !1, hH.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function c7() {
	var j7, canvas, a3t, a3u, a3v, a3w = -1;

	function a3x() {
		var a3y, wg = canvas.getContext("2d", {
			alpha: !0
		});
		wg.clearRect(0, 0, j7, j7), wg.fillStyle = b7.mU, wg.fillRect(0, 0, j7, j7), 0 === a3u && (wg.fillStyle = b7.mZ, wg.fillRect(0, 0, j7, j7)), wg.fillStyle = b7.mY, wg.fillRect(0, 0, j7, 1), wg.fillRect(0, 0, 1, j7), wg.fillRect(0, j7 - 1, j7,
				1), wg.fillRect(j7 - 1, 0, 1, j7), a3y = .9 * j7 / aX.get(0).width, wg.imageSmoothingEnabled = !0, wg.setTransform(a3y, 0, 0, a3y, Math.floor((j7 - a3y * aX.get(0).width) / 2), Math.floor((j7 - a3y * aX.get(0).height) / 2)), wg
			.drawImage(aX.get(0), 0, 0), wg.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a40(kk, kl) {
		if (!aI.gj) return kk <= j7 + bY.gap && kl >= aN.eh ? 9 : -1;
		if (kk <= 4 * j7 + bY.gap) {
			if (kl >= aN.eh) return 0;
			if (kl >= aN.eh - j7 - a3v * bY.gap) return 2
		} else if (kk <= 7 * j7 + bY.gap && kl >= aN.eh - j7 - a3v * bY.gap) return 1;
		return -1
	}
	this.gj = !1, this.dU = function() {
		a3u = -1, this.gj = !1, a3v = u.v.sd() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		j7 = aN.j7, (canvas = document.createElement("canvas")).width = j7, canvas.height = j7, a3t = b6.pO.rP(1, (u.v.sd() ? .5 : .45) * j7), a3x()
	}, this.a0b = function() {
		this.gj = !this.gj, this.gj ? (b8.a0a(!1), a9.gi && b8.a38 && b8.a0c(!0), this.a3z()) : (a3u = -1, a3x(), !a9.k0 || 1 !== a9.yP || a9.gu || a9.gi || u.v.setState(1)), bb.dc = !0
	}, this.a3z = function() {
		(a9.k0 || a9.gi) && 1 === a9.yP && (aR.lH(!0), a9.gu || setTimeout(function() {
			bX.ya()
		}, 0), u.v.setState(0))
	}, this.gm = function(kk, kl) {
		return 0 <= (a3w = a40(kk, kl)) || !aI.gj || a9.k0 || a9.gi || ba.wz || aI.a0b(), a3w
	}, this.a00 = function(kk, kl) {
		kk = a40(kk, kl);
		kk !== a3u && (a3u = kk, this.gj || a3x(), bb.dc = !0)
	}, this.a01 = function(kk, kl) {
		kk = a40(kk, kl);
		return -1 !== kk && a3w === kk && (this.gj ? a9.m1 ? (0 <= kk && b8.a0a(!1), !a9.gi) : (0 === kk ? a9.zr() : 1 === kk ? this.a0b() : 2 === kk && n.o(1, 0), !0) : 9 === kk && (this.a0b(), !0))
	}, this.tJ = function() {
		var a1;
		this.gj ? (a1 = Math.floor(5.5 * j7), tK.setTransform(1, 0, 0, 1, bY.gap, aN.eh), tK.fillStyle = b7.mU, tK.fillRect(0, 0, a1, j7), 0 === a3u ? (tK.fillStyle = b7.mZ, tK.fillRect(0, 0, 4 * j7, j7)) : 1 === a3u && (tK.fillStyle = b7.mZ, tK
				.fillRect(4 * j7, 0, Math.floor(1.5 * j7), j7)), tK.fillStyle = b7.mY, tK.fillRect(0, 0, a1, 1), tK.fillRect(0, 0, 1, j7), tK.fillRect(4 * j7, 0, 1, j7), tK.fillRect(0, j7 - 1, a1, 1), tK.fillRect(a1 - 1, 0, 1, j7), tK.font =
			a3t, b6.pO.textBaseline(tK, 1), b6.pO.textAlign(tK, 1), tK.fillText(L(27), 2 * j7, .54 * j7), a1 = .4 * j7, aI.a45(bY.gap + 4 * j7 + (1.5 * j7 - a1) / 2, aN.eh + .3 * j7, a1), a1 = 1, tK.setTransform(1, 0, 0, 1, bY.gap, aN.eh -
				a1 * a3v * bY.gap - a1 * j7), tK.fillStyle = b7.mU, tK.fillRect(0, 0, 4 * j7, j7), a3u === a1 + 1 && (tK.fillStyle = b7.mZ, tK.fillRect(0, 0, 4 * j7, j7)), tK.fillStyle = b7.mY, tK.fillRect(0, 0, 4 * j7, 1), tK.fillRect(0, 0,
				1, j7), tK.fillRect(4 * j7, 0, 1, j7), tK.fillRect(0, j7 - 1, 4 * j7, 1), tK.fillText(L(0 === a1 ? 27 : 28), 2 * j7, .54 * j7), tK.setTransform(1, 0, 0, 1, 0, 0)) : tK.drawImage(canvas, bY.gap, aN.eh)
	}, this.a44 = function(player) {
		return 0 !== ac.lV[player] && 2 !== a9.yP && aY.yI(player)
	}, this.a45 = function(ef, eh, eY) {
		tK.setTransform(1, 0, 0, 1, ef, eh), tK.lineWidth = bY.xR, tK.strokeStyle = b7.mY, tK.beginPath(), tK.moveTo(0, 0), tK.lineTo(eY, eY), tK.moveTo(0, eY), tK.lineTo(eY, 0), tK.stroke()
	}
}

function c8() {
	var a47, j7, a48, a49, a4A, a4B, a4C, a4D, a4E;

	function wc() {
		return aN.a4W(aJ.a4S()) ? aq.wz ? aN.eh - aN.j7 - 2 * a48 : aN.eh - a48 : b8.a4W(aJ.a4V()) ? aq.wz ? b8.wc() - aN.j7 - 2 * a48 : b8.wc() - a48 : aq.wz ? at.j7 - aN.j7 - (bg.a3G() + 1) * a48 : at.j7 - bg.a3G() * bY.gap
	}

	function a4J(dk, p5, id, g6, a4M, a4N, vD, a4O, a4P, a4Q) {
		var a7, wg, a1I, pG, g, a4b = void 0 !== a4P,
			a1 = Math.floor(aM.measureText(p5, aJ.a3t) + 1.5 * a49 + (a4b ? j7 : 1.5 * a49));
		if (bb.dc = !0, a1 + a48 > at.a1 && !a4b && 50 !== id && 20 < p5.length) a4J(dk, (g = b6.zC.a2R(p5))[0], id, g6, a4M, a4N, vD, a4O, a4P, a4Q), a4J(dk, g[1], id, g6, a4M, a4N, vD, a4O, a4P, a4Q);
		else if (g = a1 + (50 === id ? a4A : 0), (a1I = document.createElement("canvas")).width = a1, a1I.height = j7, (wg = a1I.getContext("2d", {
				alpha: !0
			})).font = aJ.a3t, b6.pO.textBaseline(wg, 1), b6.pO.textAlign(wg, 0), wg.clearRect(0, 0, a1, j7), wg.fillStyle = a4N, wg.fillRect(0, 0, a1, j7), wg.fillStyle = a4M, wg.fillText(p5, Math.floor(1.5 * a49), Math.floor(j7 / 2)), a4b && (wg
				.imageSmoothingEnabled = !0, af.v5.xS(a4P, wg, a1 - j7, 0, j7)), 0 === (pG = {
				lo: dk,
				p5: p5,
				id: id,
				player: g6,
				canvas: a1I,
				a4M: a4M,
				a4N: a4N,
				a1: a1,
				a4T: g,
				vD: vD,
				a4O: a4O,
				a4P: a4P,
				a4Q: a4Q
			}).lo || 0 < a47.length && 0 < a47[0].lo) a47.unshift(pG);
		else {
			for (a7 = 1; a7 < a47.length; a7++)
				if (0 < a47[a7].lo) return void a47.splice(a7, 0, pG);
			a47.push(pG)
		}
	}

	function a4K(dz, s6, es) {
		return "rgb(" + dz + "," + s6 + "," + es + ")"
	}

	function a4c(id, g1) {
		for (var eY = a47.length, a7 = 0; a7 < eY; a7++) a47[a7].id === id && g1-- <= 0 && (a47.splice(a7, 1), a7--, eY--)
	}

	function a4e(id, player) {
		for (var em = !1, a7 = a47.length - 1; 0 <= a7; a7--) a47[a7].id !== id || player !== a9.eV && a47[a7].player !== player || (a47.splice(a7, 1), em = !0);
		return em
	}

	function a51(p5) {
		a4J(340, p5, 6, 0, a4K(215, 245, 255), b7.mV, -1, !1)
	}
	this.a4F = "", this.dU = function() {
		var self;
		a4D = 0, a4C = u.v.sd() ? 7 : 12, a4B = {
			yG: [0, 0, 0],
			a4G: [0, 0, 0],
			ln: [220, 180, 180],
			tI: [0, 0, 0],
			et: [0, 0, 0]
		}, a47 = [], this.resize(), a9.gu && this.yb(0, 18), bO.us.ut[bO.eE].name.length && a51(L(75, [bO.us.ut[bO.eE].name])), a51(L(76, [bO.ej - 2 + "x" + (bO.ek - 2)])), a51(L(77, [ak.a52])), ak.a52 !== ak.a53 && a51(L(78, [ak.a53 + " (" +
			b6.zC.a2O(100 * ak.a53 / ak.a52, 1) + ")"
		])), 0 < ak.a54 && a51(L(51, [ak.a54 + " (" + b6.zC.a2O(100 * ak.a54 / ak.a52, 1) + ")"])), 0 < ak.a55 && a51(L(79, [ak.a55 + " (" + b6.zC.a2O(100 * ak.a55 / ak.a52, 1) + ")"])), 10 === a9.jy && a4J(120, L(80), 6, 0, a4K(235, 255,
			120), b7.mV, -1, !1), 0 !== (self = this).a4F.length && (a4J(200, self.a4F, 0, 0, b7.mY, b7.mV, -1, !1), self.a4F = ""), a9.wt && a4J(340, L(29), 6, 0, a4K(255, 200, 0), b7.mV, -1, !1)
	}, this.resize = function() {
		var a4L, a7;
		if (j7 = (j7 = Math.floor((u.v.sd() ? .031 : .0249) * at.pQ)) < 10 ? 10 : j7, this.fontSize = Math.floor(2 * j7 / 3), this.a3t = b6.pO.rP(1, this.fontSize), a48 = bY.gap, a49 = Math.floor(j7 / 5), 0 < a47.length)
			for (a4L = a47, a47 = [], a7 = a4L.length - 1; 0 <= a7; a7--) a4J(a4L[a7].lo, a4L[a7].p5, a4L[a7].id, a4L[a7].player, a4L[a7].a4M, a4L[a7].a4N, a4L[a7].vD, a4L[a7].a4O, a4L[a7].a4P, a4L[a7].a4Q);
		this.a4R()
	}, this.a4R = function() {
		a4E = document.createElement("canvas");
		var p5 = L(30),
			wg = (a4A = aM.measureText(p5, this.a3t) + 5 * a49, a4E.height = j7, a4E.width = a4A, a4E.getContext("2d", {
				alpha: !0
			}));
		wg.font = this.a3t, b6.pO.textBaseline(wg, 1), b6.pO.textAlign(wg, 1), wg.clearRect(0, 0, a4A, j7), wg.fillStyle = b7.mv, wg.fillRect(0, 0, a4A, j7), wg.fillStyle = b7.mY, wg.fillText(p5, Math.floor(a4A / 2), Math.floor(j7 / 2))
	}, this.a4S = function() {
		var eY;
		return aq.wz ? aq.a1 : 0 === (eY = a47.length) ? 0 : 1 === eY ? a47[0].a4T : a4U(a47[0].a4T, a47[1].a4T)
	}, this.a4V = function() {
		var eY = a47.length;
		return aq.wz ? eY ? a4U(aq.a1, a47[0].a4T) : aq.a1 : 0 === eY ? 0 : 1 === eY ? a47[0].a4T : 2 === eY ? a4U(a47[0].a4T, a47[1].a4T) : a4U(a4U(a47[0].a4T, a47[1].a4T), a47[2].a4T)
	}, this.gm = function(ef, eh) {
		for (var ly, a4X, a4Y = wc(), a7 = a47.length - 1; 0 <= a7; a7--)
			if ((a4X = a4Y - (a7 + 1) * j7) <= eh && eh < a4X + j7) return 50 === a47[a7].id ? ef >= at.a1 - a4A - a48 - a47[a7].a1 && (ef >= at.a1 - a4A - a48 ? b4.fu.oG(a47[a7].player) : aD.ls(a47[a7].player, 800, !1, 0), !0) : ef >= at.a1 -
				a47[a7].a1 - a48 && (736 === a47[a7].id ? (a4X = a47[a7].p5.split(" "), window.open(a4X[a4X.length - 1], "_blank")) : a47[a7].a4O && (a47[a7].a4Q && a47[a7].a4Q.er ? (a4X = a47[a7].a4Q.eK, ly = bI.eg(a4X) - 10, a4X = bI.ei(
					a4X) - 10, aD.lr(ly, a4X, 19 + ly, 19 + a4X)) : a47[a7].a4Q && a47[a7].a4Q.es ? aD.lt(a47[a7].player, a47[a7].a4Q.lu) : (aD.ls(a47[a7].player, 800, !1, 0), 0 <= a47[a7].vD && (ly = a47[a7].vD, a47[a7].vD = a47[a7]
					.player, a47[a7].player = ly))), !0);
		return !1
	}, this.yn = function(dk, p5, id, g6, a4M, a4N, vD, a4O, a4P, a4Q) {
		a4J(dk, p5, id, g6, a4M, a4N, vD, a4O, a4P, a4Q)
	}, this.a4a = function(k) {
		a4J(300, k, 252, 0, b7.mY, b7.mV, -1, !1)
	}, this.a2e = function(id) {
		for (var a7 = a47.length - 1; 0 <= a7; a7--) a47[a7].id === id && (a47[a7].lo = 1)
	}, this.yb = function(player, id) {
		0 === id ? (aM.ii(player, 0), a4c(423, 0), a4J(160, L(31, [ac.a4d[player]]), 423, player, "rgb(10,220,10)", b7.mV, -1, !1)) : 1 === id ? (a4e(50, a9.eV), aM.ii(player, 1), a4J(360, L(32, [ac.a4d[player]]), 0, player, b7.nD, b7.mV, -1, !
			0), aD.ls(player, 2700, !1, 0)) : 2 === id ? (aM.ii(player, 2), a4J(0, L(33), 0, player, "rgb(10,255,255)", b7.mV, -1, !0), aD.ls(player, 2700, !1, 0)) : 3 === id ? (aM.ii(player, 2), a4J(0, L(34, [ac.a4d[player]]), 0, player, b7
			.mY, b7.mV, -1, !0), aD.ls(player, 2700, !1, 0)) : 4 === id ? this.a4f(1, player, player) : 5 === id ? 2 !== ac.a1n[player] && aY.yI(a9.eI) && (function(id, lQ) {
			var a7, a4q = 0,
				eY = a47.length;
			for (a7 = 0; a7 < eY; a7++)
				if (a47[a7].id === id && lQ <= ++a4q) return a47.splice(a7, 1)
		}(1, 5), ab.a4h(player) ? a4J(180, L(35, [ac.a4d[player]]), 1, player, a4K(255, 200, 180), b7.mV, -1, !0) : (a4c(573, 0), a4J(180, L(36, [ac.a4d[player]]), 573, player, b7.nD, b7.mV, -1, !0))) : 18 === id ? a4J(255, L(37), 18, 0, b7
			.mY, b7.mV, -1, !1) : 21 === id ? a4J(220, L(38), id, 0, b7.mY, b7.mV, -1, !1) : 22 === id ? this.a4f(2, player, player) : 59 === id && a4J(0, L(39), id, 0, b7.nS, b7.mV, 0, !1)
	}, this.zk = function(k) {
		a4J(200, L(40, [k]), 94, 0, b7.mY, b7.n9, -1, !1)
	}, this.yi = function(a4i) {
		if (a9.eI === a4i && !a9.k0)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			a4J(0, "Your Win Count is now " + __fx.wins.count, 3, a4i, b7.mY, b7.mV, -1, !0);
		ac.gM[a4i] && (aM.ii(a4i, 2), a9.je < 100 ? a4J(0, L(34, [ac.a4d[a4i]]), 3, a4i, b7.mY, b7.mV, -1, !0) : a4J(0, L(41, [ac.a4d[a4i]]), 3, a4i, b7.mY, b7.mV, -1, !0))
	}, this.a3m = function(eC) {
		var a4k, p5, a4j = "(" + bI.eg(eC >> 2) + ", " + bI.ei(eC >> 2) + ")",
			a4O = !1,
			player = 0;
		aY.eT(eC) ? aY.eP(eC) ? a4j = L(42, [a4j]) : (player = aY.eQ(eC), p5 = L(43, [b6.wg.a1U(ac.zE[player], b6.pO.rP(0, 10), 150)]) + "   ", p5 = (p5 += L(44, [b6.zC.xi(ac.ga[player])]) + "   ") + L(45, [b6.zC.xi(ac.gM[player])]) + "   ", a9
				.ie && (a4k = bc.yl[bc.k4[bc.eW[player]]], p5 += L(46) + ": " + a4k + "   "), b6.fu.j1(player) && (p5 += L(47) + ": " + aA.js[aA.im[player]] + "   "), a4j = p5 = (p5 += L(48, [player]) + "   ") + L(49, [a4j]), a4O = !0) : a4j = aY
			.ed(eC) ? L(50, [a4j]) + "   #" + aY.eG(eC) : L(51, [a4j]), bb.dc = !0, a4c(55, 0), a4J(220, a4j, 55, player, b7.mY, b7.mV, -1, a4O)
	}, this.a3o = function(a4l) {
		var kP = bJ.s,
			player = kP.a4m[a4l] >> 3,
			p5 = (bb.dc = !0, a4c(55, 0), L(52, [ac.a4d[player]]) + "   ");
		a4J(220, p5 += L(44, [kP.a4n[a4l]]), 55, player, b7.mY, b7.mV, -1, !0)
	}, this.ny = function(nl, a4o, nz) {
		nl === a9.eI ? a4J(175, " " + L(53, [ac.a4d[a4o]]) + ": ", 1001, a4o, a4K(200, 255, 210), b7.mV, -1, !0, nz) : this.a4p(nl, nz)
	}, this.a4p = function(nl, nz) {
		a4c(1e3, 0), a4J(175, ac.a4d[nl] + ": ", 1e3, nl, b7.mY, "rgba(5,60,25,0.9)", -1, !0, nz)
	}, this.yo = function() {
		var k;
		a9.yU ? (k = L(54), aM.ym(L(55), 2, 1, 12), a4J(0, k, 40, 0, "rgb(10,220,10)", b7.mV, -1, !1)) : (k = L(56), aM.ym(L(57), 2, 0, 16), a4J(0, k, 41, 0, b7.mY, b7.mV, -1, !1))
	}, this.wn = function() {
		var zE = ac.zE,
			eb = a9.data;
		a4J(300, zE[0] + " [" + a9.yh.ws(eb.elo[0]) + "] vs " + zE[1] + " [" + a9.yh.ws(eb.elo[1]) + "]", 65, 0, b7.mP, "rgba(100,255,255,0.75)", -1, !1)
	}, this.a4r = function(k) {
		a4J(200, k, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.a4s = function(a4t) {
		a4J(0, L(a4t ? 58 : 59), 247, 0, b7.nR, b7.mV, -1, !1)
	}, this.wv = function(wr, wu, a4u) {
		var eb = a9.data,
			zE = ac.zE;
		a4J(0, zE[0] + ": " + a9.yh.ws(eb.elo[0]) + " -> " + wr, 66, 0, b7.mY, a4u[0], -1, !1), a4J(0, zE[1] + ": " + a9.yh.ws(eb.elo[1]) + " -> " + wu, 66, 1, b7.mY, a4u[1], -1, !1)
	}, this.oH = function(player, id) {
		0 === id ? a4e(50, player) ? (a4J(128, L(60, [ac.a4d[player]]), 52, player, a4K(180, 255, 180), b7.mV, -1, !0), ab.ox(player, 2, 255)) : a4J(384, L(61, [ac.a4d[player]]), 51, player, a4K(210, 210, 255), b7.mV, -1, !0) : a4e(51, player) ?
			(a4J(128, L(62, [ac.a4d[player]]), 52, player, b7.mY, "rgba(60,120,10,0.9)", -1, !0), ab.ox(player, 2, 255)) : (a4J(384, L(63, [ac.a4d[player]]), 50, player, b7.mY, "rgba(90,90,90,0.9)", -1, !0), ab.ox(player, 2, 96))
	}, this.oL = function(yG, target) {
		var color = a4K(210, 255, 210);
		1 < yG.length ? a4J(230, L(64, [yG.length, ac.a4d[target]]), 66, target, color, b7.mV, -1, !0) : a4J(230, L(65, [ac.a4d[yG[0]], ac.a4d[target]]), 66, yG[0], color, b7.mV, target, !0)
	}, this.a4v = function(player, target) {
		a4J(230, L(66, [ac.a4d[player], ac.a4d[target]]), 66, player, b7.mY, "rgba(75,65,5,0.9)", target, !0)
	}, this.a3f = function(id, g1) {
		a4c(id, g1)
	}, this.yW = function(id, player) {
		a4e(id, void 0 === player ? a9.eV : player)
	}, this.a4w = function(id) {
		for (var a7 = a47.length - 1; 0 <= a7; a7--)
			if (a47[a7].id === id) return a47[a7];
		return null
	}, this.oC = function(a4x, a4y, player) {
		2 !== ac.a1n[a9.eI] && (a4J(200, 1 === a4x ? L(67, [ac.a4d[player]]) : L(68, [a4x, ac.a4d[player]]), 30, player, "rgb(190,255,190)", b7.mV, -1, !0), a4y) && a4J(30, 1 === a4y ? L(69) : L(70, [a4y]), 30, 0, b7.mY, b7.mV, -1, !1)
	}, this.a50 = function(a4x, player) {
		2 !== ac.a1n[a9.eI] && (a4c(31, 0), 2 === ac.a1n[player] || player >= a9.je ? a4J(150, 1 === a4x ? L(71, [ac.a4d[player]]) : L(72, [ac.a4d[player], a4x]), 31, player, b7.mP, "rgba(205,205,205,0.9)", -1, !0) : a4J(150, 1 === a4x ? L(73, [
			ac.a4d[player]
		]) : L(74, [ac.a4d[player], a4x]), 31, player, b7.mP, "rgba(205,255,205,0.9)", -1, !0))
	}, this.yV = function(bo) {
		for (var et = bb.jb(), a7 = 2; 0 <= a7; a7--) 0 < a4B.tI[a7] && (bo || a4B.et[a7] < et - 220) && this.a56(a7)
	}, this.a56 = function(id) {
		var p5, eY = a4B.tI[id],
			player = a4B.yG[id];
		a4B.tI[id] = 0, 1 === eY ? (0 === id ? p5 = L(81, [ac.a4d[player], ac.a4d[a4B.a4G[0]]]) : 1 === id ? p5 = L(82, [ac.a4d[player]]) : 2 === id ? p5 = L(83, [ac.a4d[player]]) : 3 === id && (p5 = L(84, [ac.a4d[player]])), a4c(7, 0), a4J(a4B
			.ln[id], p5, 7, a4B.a4G[id], b7.mY, b7.mV, -1, !0)) : (p5 = L(0 === id ? 85 : 1 === id ? 86 : 87, [eY]), a4c(7, 0), a4J(a4B.ln[id], p5, 7, player, b7.mY, b7.mV, -1, !1))
	}, this.a4f = function(id, gy, vD) {
		var et = bb.jb(),
			eY = a4B.tI[id] + 1;
		a4B.tI[id]++, a4B.yG[id] = gy, a4B.a4G[id] = vD, 1 === eY && (a4B.et[id] = et), (1 === eY && (a9.yS < 32 || 2 === a9.yP) || 1 < eY && (a4B.et[id] < et - 140 || 2 === a9.yP)) && this.a56(id)
	}, this.iS = function() {
		for (var hU = (hU = a47.length - a4C) <= 1 ? 1 : hU * hU, a7 = a47.length - 1; 0 <= a7; a7--) 0 < a47[a7].lo && (a47[a7].lo -= hU, a47[a7].lo <= 0) && (bb.dc = !0, a47.splice(a7, 1));
		! function() {
			var g1, a7;
			if (128 !== a4D && !(++a4D < 128))
				for (g1 = 5, a7 = ah.jf - 1; 0 <= a7; a7--) 1 === ac.a1n[ah.jh[a7]] && 0 < g1-- && a4J(240, L(84, [ac.a4d[ah.jh[a7]]]), 1, ah.jh[a7], b7.mP, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.yV(!1)
	}, this.tJ = function() {
		for (var vg, eh = wc(), a7 = a47.length - 1; 0 <= a7; a7--) vg = eh - (a7 + 1) * j7, 50 === a47[a7].id ? (tK.drawImage(a47[a7].canvas, at.a1 - a47[a7].a1 - a4A - a48, vg), tK.drawImage(a4E, at.a1 - a4A - a48, vg)) : tK.drawImage(a47[a7]
			.canvas, at.a1 - a47[a7].a1 - a48, vg)
	}
}

function c9() {
	var a58, a59, a5A, a1, j7, font, p5;

	function a5E(a5F) {
		return a5F < 10 ? "0" + a5F : String(a5F)
	}
	this.dU = function() {
		p5 = L(88)
	}, this.resize = function() {
		a1 = Math.floor((u.v.sd() ? .53 : .36) * at.pQ), j7 = Math.floor(.065 * a1), font = b6.pO.rP(1, Math.floor(.9 * j7)), a5A--, this.setTime()
	}, this.iS = function() {
		this.setTime() && (bb.dc = !0)
	}, this.setTime = function() {
		var dk = new Date,
			a5C = dk.getUTCMinutes(),
			dk = dk.getUTCSeconds();
		return a59 = 3600 - 60 * a5C - dk, a59 %= 900, a58 = p5 + a5E(Math.floor(a59 / 60)) + ":" + a5E(a59 % 60), a5A !== (a5A = 60 * a5C + dk) && (a1 = aM.measureText(a58, font), a1 += Math.floor(.4 * j7), !0)
	}, this.tJ = function() {
		tK.lineWidth = 1 + Math.floor(j7 / 15), tK.translate(at.a1 - j7, Math.floor(.5 * (at.j7 + a1))), tK.rotate(-Math.PI / 2), tK.fillStyle = b7.mY, tK.fillRect(0, 0, a1, j7), tK.strokeStyle = b7.mP, tK.strokeRect(0, 0, a1, j7 + 10), tK
			.fillStyle = b7.mP, tK.font = font, b6.pO.textBaseline(tK, 1), b6.pO.textAlign(tK, 1), tK.fillText(a58, Math.floor(a1 / 2), Math.floor(.59 * j7)), tK.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function cA() {
	var a47, a5G, a3t, j7, a5H;

	function a5J(a7) {
		var a5L = !0,
			hP = b7.mY,
			a1 = (a47[a7].il === a9.eV ? a47[a7].wg.fillStyle = b7.mj : (aY.a5M(a47[a7].il), a47[a7].wg.fillStyle = b6.color.mS(bK.f8[0], bK.f8[1], bK.f8[2], .87), 400 < b6.pY.a0z(bK.f8, 0, 2) && (a5L = !1, hP = b7.mP)), a47[a7].canvas.width),
			rt = (a47[a7].wg.clearRect(0, 0, a1, j7), a47[a7].wg.fillRect(0, 0, a1, j7), a47[a7].wg.fillStyle = hP, ! function(wg, a1, j7) {
				wg.fillRect(0, 0, a1, 1), wg.fillRect(0, j7 - 1, a1, 1), wg.fillRect(0, 0, 1, j7), wg.fillRect(a1 - 1, 0, 1, j7)
			}(a47[a7].wg, a1, j7), a5G + 2 * j7 < a1 && (a47[a7].wg.fillRect(a1 - a5G - j7, 0, 1, j7), a47[a7].wg.fillText(ac.a4d[a47[a7].il], Math.floor((a1 - a5G) / 2), Math.floor(.57 * j7))), 0 !== a47[a7].id ? 0 : j7);
		a47[a7].wg.fillText(b6.zC.xi(a47[a7].im), Math.floor(a1 - a5G / 2 - rt), Math.floor(.57 * j7)),
			function(a7, a1, rt, a5L) {
				a47[a7].wg.fillStyle = a5L ? b7.ma : b7.mW;
				a5L = Math.floor(a5G * a47[a7].im / a47[a7].a5S);
				a47[a7].wg.fillRect(Math.floor(a1 - a5G - rt), j7 - a5H, a5L, a5H)
			}(a7, a1, rt, a5L), 0 === a47[a7].id ? (a5P(a7, a1, a5L, hP), function(a7, a1, a5L) {
				a47[a7].wg.strokeStyle = a5L ? b7.mq : b7.n0, a47[a7].wg.fillRect(j7, 0, 1, j7);
				a5L = a1 - j7;
				a47[a7].wg.beginPath(), a47[a7].wg.moveTo(Math.floor(.3 * j7 + a5L), Math.floor(j7 / 2)), a47[a7].wg.lineTo(Math.floor(j7 - .3 * j7 + 0 + a5L), Math.floor(j7 / 2)), a47[a7].wg.stroke(), a47[a7].wg.beginPath(), a47[a7].wg.moveTo(
					Math.floor(j7 / 2 + a5L), Math.floor(.3 * j7)), a47[a7].wg.lineTo(Math.floor(j7 / 2 + a5L), Math.floor(j7 - .3 * j7 + 0)), a47[a7].wg.stroke()
			}(a7, a1, a5L)) : a5P(a7, 2 * j7, a5L, hP)
	}

	function a5P(a7, a1, a5L, hP) {
		a47[a7].wg.strokeStyle = a47[a7].a5T ? b7.mh : a5L ? b7.n5 : b7.n6, a47[a7].wg.fillStyle = hP, a47[a7].wg.fillRect(a1 - j7, 0, 1, j7), a47[a7].wg.lineWidth = Math.max(Math.floor(j7 / 12), 3), a47[a7].wg.lineCap = "round";
		a5L = .35;
		a1 = j7 + 1, a47[a7].wg.beginPath(), a47[a7].wg.moveTo(Math.floor(a1 - a5L * j7 + 0), Math.floor(a5L * j7)), a47[a7].wg.lineTo(Math.floor(a1 - j7 + a5L * j7), Math.floor(j7 - a5L * j7 + 0)), a47[a7].wg.stroke(), a47[a7].wg.beginPath(), a47[
			a7].wg.moveTo(Math.floor(a1 - j7 + a5L * j7), Math.floor(a5L * j7)), a47[a7].wg.lineTo(Math.floor(a1 - a5L * j7 + 0), Math.floor(j7 - a5L * j7 + 0)), a47[a7].wg.stroke()
	}

	function a5d(eY) {
		for (var im, a7 = eY - 1; 0 <= a7; a7--) im = aZ.fl(a9.eI, a7), a47[a7].im !== im && (a47[a7].im = im, a47[a7].a5S = im > a47[a7].a5S ? im : a47[a7].a5S, a47[a7].a5K = !0)
	}

	function a5I(a5f) {
		a5f.canvas = document.createElement("canvas"), bO.uy.font = a3t;
		var a1 = a5G;
		a5f.il < a9.eV && 0 === a5f.id && (a1 += Math.floor(bO.uy.measureText(ac.a4d[a5f.il] + "000").width)), a1 += j7, 0 === a5f.id && (a1 += j7), a5f.canvas.width = a1, a5f.canvas.height = j7, a5f.wg = a5f.canvas.getContext("2d", {
			alpha: !0
		}), a5f.wg.font = a3t, b6.pO.textBaseline(a5f.wg, 1), b6.pO.textAlign(a5f.wg, 1)
	}

	function a5Z(a7) {
		return aQ.a5h() ? at.a1 - a47[a7].canvas.width - bY.gap : aQ.ef
	}

	function a5a(a7) {
		return Math.floor(2 * bY.gap + (aQ.a5h() ? aS.j7 + bY.gap : 0) + aQ.j7 + a7 * (1.3 * j7))
	}
	this.dU = function() {
		a47 = [], this.resize()
	}, this.resize = function() {
		a3t = aJ.a3t, j7 = aJ.fontSize + 5, j7 = Math.floor(1.25 * j7), u.v.sd() && (j7 = Math.floor(1.25 * j7)), a5H = Math.floor(.15 * j7), bO.uy.font = a3t, a5G = Math.floor(bO.uy.measureText("02 000 000 0000").width);
		for (var a7 = a47.length - 1; 0 <= a7; a7--) a5I(a47[a7]), a5J(a7)
	}, this.lH = function() {
		for (var a7 = a47.length - 1; 0 <= a7; a7--) a47[a7].a5K && (a47[a7].a5K = !1, a5J(a7))
	}, this.gm = function(kk, eh) {
		if (2 !== a9.yP && 0 !== ac.lV[a9.eI] && !a9.gi && aY.yI(a9.eI))
			for (var a5U, a5V, a5W, a5X = u.v.sd() ? j7 : 0, a5Y = u.v.sd() ? Math.floor(.15 * j7) : 0, a7 = a47.length - 1; 0 <= a7; a7--)
				if (a5U = a5Z(a7), a5V = a5a(a7), a5W = a47[a7].canvas.width, a5V - a5Y <= eh && eh <= a5V + j7 + a5Y) {
					if (a5U - a5X <= kk && kk <= a5U + j7 + a5X) return a47[a7].a5T || (a47[a7].a5K = !0, a47[a7].a5T = !0, 0 === a47[a7].id && b4.gv.nw(a47[a7].il)), !0;
					if (0 === a47[a7].id && a5U + a5W - j7 - a5X <= kk && kk <= a5U + a5W + a5X) return b4.gv.h6(aN.h0(), a47[a7].il), !0
				} return !1
	}, this.iS = function() {
		var eY;
		0 !== ac.lV[a9.eI] && (aY.yI(a9.eI) || a9.gi) && (function(eY) {
			if (a47.length !== eY) return 1;
			for (var a7 = eY - 1; 0 <= a7; a7--)
				if (a47[a7].id !== aZ.ff(a9.eI, a7) || a47[a7].il !== aZ.fk(a9.eI, a7)) return 1;
			return
		}(eY = aZ.fe(a9.eI)) && function(eY) {
			var a7, id, il, es, im, a4L = [];
			loop: for (a7 = 0; a7 < eY; a7++) {
				for (id = aZ.ff(a9.eI, a7), il = aZ.fk(a9.eI, a7), es = 0; es < a47.length; es++)
					if (a47[es].id === id && a47[es].il === il) {
						a4L.push(a47.splice(es, 1)[0]);
						continue loop
					} im = aZ.fl(a9.eI, a7), a5I(im = {
					il: il,
					im: im,
					a5S: im,
					id: id,
					a5K: !0,
					a5T: !1,
					canvas: null,
					wg: null
				}), a4L.push(im)
			}
			a47 = a4L
		}(eY), a5d(eY))
	}, this.a5g = function(g6) {
		for (var eY = Math.min(a47.length, aZ.fe(a9.eI)), a7 = 0; a7 < eY; a7++)
			if (a47[a7].il === g6) return void(a47 = [])
	}, this.tJ = function() {
		if (0 !== ac.lV[a9.eI] && (aY.yI(a9.eI) || a9.gi))
			for (var a7 = a47.length - 1; 0 <= a7; a7--) tK.drawImage(a47[a7].canvas, a5Z(a7), a5a(a7))
	}
}

function cB() {
	var a47, jm, a5i, a5j, j7, a3t, fontSize, a5k, a5l, a5m, a5n, canvas, wg, li, a5o;

	function tX(a7) {
		return L(0 === a7 ? 89 : 1 === a7 ? 90 : 2 === a7 ? 91 : 92)
	}

	function a5v() {
		tK.drawImage(canvas, bY.gap + (a9.ie ? bY.gap + bd.a5w() : 0), a5x + 2 * bY.gap)
	}

	function a5p() {
		canvas.width = a47[0].width + a5m, canvas.height = j7 + a5m, (wg = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, a47[0].width + a5m, j7 + a5m), wg.translate(Math.floor(a5m / 2), Math.floor(a5m / 2)), wg.lineWidth = a5m, wg.fillStyle = 1 === a47[0].a5u ? b7.md : b7.mV, a5y(), wg.fill(), wg.strokeStyle = 1 === a47[0].a5u ? b7.mP :
			b7.mY, a5y(), wg.stroke(), b6.pO.textAlign(wg, 1), b6.pO.textBaseline(wg, 1), wg.fillStyle = 1 === a47[0].a5u ? b7.mP : b7.mY, wg.font = a3t[0], wg.fillText(tX(a47[0].a5t), Math.floor(a47[0].width / 2), Math.floor(.72 * a5k[0] * j7)), wg
			.font = a3t[1], wg.fillText(a47[0].p5, Math.floor(a47[0].width / 2), Math.floor((a5k[0] + .48 * a5k[1]) * j7))
	}

	function a5y() {
		wg.beginPath(), wg.moveTo(a5n, 0), wg.lineTo(a47[0].width - a5n, 0), wg.lineTo(a47[0].width, a5n), wg.lineTo(a47[0].width, j7 - a5n), wg.lineTo(a47[0].width - a5n, j7), wg.lineTo(a5n, j7), wg.lineTo(0, j7 - a5n), wg.lineTo(0, a5n), wg
			.closePath()
	}
	this.dU = function() {
		jm = 4, a5i = a5j = li = 0, a47 = [], a3t = new Array(2), fontSize = new Array(2), (a5k = new Array(2))[0] = .3, a5k[1] = .7, a5l = new Array(4), canvas = document.createElement("canvas"), a5o = bb.lo + 2e3, this.resize()
	}, this.resize = function() {
		var a7, a1;
		for (j7 = Math.floor((u.v.sd() ? .0725 : .058) * at.pQ), fontSize[0] = Math.floor(.85 * a5k[0] * j7), fontSize[1] = Math.floor(.85 * a5k[1] * j7), a3t[0] = b6.pO.rP(1, fontSize[0]), a3t[1] = b6.pO.rP(1, fontSize[1]), a7 = a5l.length -
			1; 0 <= a7; a7--) a5l[a7] = this.measureText(tX(a7) + "000", a3t[0]);
		if (a5m = Math.floor(1 + .05 * j7), a5n = Math.floor(.2 * j7), 0 < a47.length) {
			for (a7 = a47.length - 1; 0 <= a7; a7--) a1 = this.measureText(a47[a7].p5 + "00", a3t[1]), a47[a7].width = a1 < a5l[a7] ? a5l[a7] : a1;
			a5p()
		}
	}, this.iS = function() {
		0 !== jm && (4 === jm ? bb.lo > a5o && (jm = 0, 1 === a9.yP) && aM.ym(bO.us.ut[bO.eE].name, 3, 1, 9) : (1 === jm ? (0 === a5i && (a5p(), a5i = 1e-4), 1 <= (a5i += .002 * (bb.lo - li)) && (a5j = 0, jm = 2, a5i = 1), bb.dc = !0) : 2 ===
			jm ? ((a5j += (bb.lo - li) / 1e3) > a47[0].ln || 1 < a5j && 1 < a47.length) && (jm = 3) : 3 === jm && ((a5i -= .002 * (bb.lo - li)) <= 0 && (a5i = 0, a47.shift(), jm = 0 < a47.length ? 1 : 0), bb.dc = !0), li = bb.lo))
	}, this.measureText = function(p5, a3t) {
		return tK.font = a3t, Math.floor(tK.measureText(p5).width)
	}, this.ii = function(a5s, a7) {
		this.ym(ac.a4d[a5s], a7, 1, 0 === a7 ? 3 : 7)
	}, this.ym = function(p5, a5t, a5u, ln) {
		var a1;
		p5.length && (a1 = (a1 = this.measureText(p5 + "00", a3t[1])) < a5l[a5t] ? a5l[a5t] : a1, a47.push({
			p5: p5,
			width: a1,
			a5t: a5t,
			a5u: a5u,
			ln: ln
		}), 0 === jm) && (a5i = 0, jm = 1, li = bb.lo)
	}, this.tJ = function() {
		0 !== jm && 0 !== a5i && (a5i < 1 ? (tK.globalAlpha = a5i, a5v(), tK.globalAlpha = 1) : a5v())
	}
}

function cj() {
	var j7, canvas, wg, a5z, a60, a61, a62, a5K, a63, a64, a65, a66, a4t = !1,
		a1I = (this.wz = !1, this.a1 = 0, new Array(2));

	function lI() {
		var a1 = aq.a1,
			kP = (a5K = !1, wf(wg, a1, j7), Math.floor(a1 / 2));
		1 === a5z ? (wg.fillStyle = b7.ms, wg.fillRect(kP, 0, kP, j7)) : -1 === a5z && (wg.fillStyle = b7.n7, wg.fillRect(0, 0, kP, j7)), wh(wg, a1, j7, 2);
		var kP = (kP = Math.floor(.25 * j7)) < 2 ? 2 : kP,
			a52 = (wg.fillStyle = b7.me, Math.floor((j7 - 4) * a60[1] / a61[1]));
		0 < a52 && wg.fillRect(2, j7 - 2 - a52, kP, a52), 0 < (a52 = Math.floor((j7 - 4) * a60[0] / a61[0])) && wg.fillRect(a1 - 2 - kP, j7 - 2 - a52, kP, a52);
		kP = (kP = Math.floor(j7 / 8)) < 2 ? 2 : kP, wj(wg, Math.floor(.4 * j7), 0, j7, kP, .5, !1), wj(wg, Math.floor(a1 - 1.4 * j7), 0, j7, kP, .5, !0), a52 = 1.1 * j7 / a1I[0].width;
		wg.imageSmoothingEnabled = !0, wg.setTransform(a52, 0, 0, a52, (a1 - a52 * a1I[0].width) / 2, -.05 * j7), wg.drawImage(a1I[+a4t], 0, 0), wg.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a67() {
		a65 = bb.jb(), a5K = !0, a63 = a5z = 0, a62 = [], aq.wz = !1, aJ.yW(247), a60[0] = a60[1] = 0, aJ.a2e(673)
	}

	function wc() {
		return aN.a4W(aJ.a4S()) ? aN.eh - j7 - bY.gap : b8.a4W(aJ.a4V()) ? b8.wc() - j7 - bY.gap : at.j7 - j7 - bg.a3G() * bY.gap
	}
	this.dV = function() {
		for (var a7 = 0; a7 < 2; a7++) a1I[a7] = b6.canvas.xD(aX.get(3), 8 - a7, b7.nb), a1I[a7] = b6.canvas.a1K(a1I[a7])
	}, this.dU = function() {
		a65 = -140, a64 = 0, a66 = -1, this.wz = !1, a5K = a4t = !1, a60 = [a5z = a63 = 0, 0], a61 = [1, 1], a62 = [], this.resize()
	}, this.resize = function() {
		j7 = aN.j7, this.a1 = 4 * j7, (canvas = document.createElement("canvas")).width = this.a1, canvas.height = j7, wg = canvas.getContext("2d", {
			alpha: !0
		}), lI()
	}, this.lH = function() {
		a5K && lI()
	}, this.gm = function(ef, eh) {
		var lz;
		return !!this.wz && !(ef < at.a1 - this.a1 - bY.gap || eh < (lz = wc()) || lz + j7 < eh || (a9.gi || b4.gv.o2(ef > at.a1 - bY.gap - this.a1 / 2 ? 1 : 0), 0))
	}, this.iS = function() {
		if (0 < a64) 0 === --a64 && a67();
		else if (this.wz) 180 == --a63 && 3 * a60[0] < a61[0] ? a67() : a60[0] >= a61[0] ? a4t ? bN.y3.yK() : bN.y3.yO() : a60[1] >= a61[1] ? a64 = 4 : a63 <= 0 && a67();
		else if (function() {
				if (0 <= a66) return 1;
				return
			}()) {
			a4t = ad.a6A(), aJ.yn(250, L(93, [ac.a4d[a66]]), 673, a66, b7.mY, b7.mV, -1, !0), a66 = -1, aJ.a2e(257), aJ.a4s(a4t), this.wz = !0, a5K = !0, a63 = 360;
			for (var f0, dk = 0, a7 = ah.jf - 1; 0 <= a7; a7--) aY.yI(ah.jh[a7]) && (dk += ac.gM[ah.jh[a7]]);
			a4t ? a61[0] = Math.max(bH.dl(3 * dk, 4), 1) : a9.ie ? 9 === a9.jy && 8 === bc.k4[bd.kt()] ? a61[0] = Math.max(dk, 1) : (f0 = bH.dl(100 * bd.yy(), a9.jO), f0 = bH.ow(200 - 2 * f0, 50, 100), f0 = bH.dl(f0 * dk, 100), a61[0] = Math.max(
				f0, 1)) : a61[0] = Math.max(bH.dl(3 * dk, 5), 1), a61[1] = Math.max(dk - a61[0], 1)
		}
	}, this.yQ = function() {
		this.wz && a60[0] < a61[0] && a67()
	}, this.oy = function(player, a6D) {
		var a7;
		if (this.wz) {
			for (a7 = a62.length - 1; 0 <= a7; a7--)
				if (a62[a7] === player) return;
			var a6E = L(a6D ? 94 : 95, [ac.a4d[player]]);
			aJ.yn(450, a6E, 257, player, a6D ? b7.mq : b7.n4, b7.mV, -1, !0), a62.push(player), a5K = !0, a6E = a9.k0 ? a61[0] : ac.gM[player], a6D ? a60[0] += a6E : a60[1] += a6E, player === a9.eI && (a5z = a6D ? 1 : -1)
		}
	}, this.tJ = function() {
		var eh;
		this.wz && (eh = wc(), tK.drawImage(canvas, at.a1 - this.a1 - bY.gap, eh))
	}, this.oz = function(player) {
		if (!a9.k0) {
			if (bb.jb() < a65 + 140) return !1;
			if (bb.jb() < 535) return !1
		}
		return 0 === a63 && !!b6.fu.gk(1) && !(!b6.fu.gl(player) || 10 <= jP[player] && !b6.fu.a26(player, 9))
	}, this.o7 = function(player) {
		a66 = player
	}
}

function cC() {
	var a1, ef, a6F, canvas, wg, wz, hu, a2V, a3t, a5K, a6G = 11 / 12;

	function a6I() {
		var a5R = Math.floor(hu * (a1 - 2 * a6F)),
			a6L = 1 + Math.floor(.0625 * aN.j7),
			a6M = 1 + Math.floor(.3 * aN.j7),
			a6N = Math.floor(.55 * aN.j7);
		wg.clearRect(0, 0, a1, aN.j7), wg.fillStyle = b7.mU, wg.fillRect(0, 0, a6F, aN.j7), wg.fillRect(a6F + a5R, 0, a1 - a6F - a5R, aN.j7), wg.fillStyle = hu < 1 / 3 ? "rgba(" + Math.floor(3 * hu * 130) + ",130,0,0.85)" : hu < 2 / 3 ? "rgba(130," +
			(130 - Math.floor(3 * (hu - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (hu - 2 / 3) * 130) + ",0.85)", wg.fillRect(a6F, 0, a5R, aN.j7), wg.fillStyle = b7.mY, wg.fillRect(0, 0, a1, 1), wg.fillRect(0, aN.j7 - 1, a1, 1), wg
			.fillRect(0, 0, 1, aN.j7), wg.fillRect(a6F, 0, 1, aN.j7), wg.fillRect(a6F + a5R, 0, 1, aN.j7), wg.fillRect(a1 - a6F, 0, 1, aN.j7), wg.fillRect(a1 - 1, 0, 1, aN.j7), wg.fillRect(Math.floor(.25 * aN.j7) + a6M, Math.floor((aN.j7 - a6L) / 2),
				aN.j7 - 2 * a6M, a6L), wg.fillRect(Math.floor(a1 - 1.25 * aN.j7) + a6M, Math.floor((aN.j7 - a6L) / 2), aN.j7 - 2 * a6M - a6M % 2, a6L), wg.fillRect(Math.floor(a1 - 1.25 * aN.j7) + Math.floor((aN.j7 - a6L) / 2), a6M, a6L, aN.j7 - 2 *
				a6M - a6M % 2), a2V = b6.fu.ht(a9.eI, aN.h0()), wg.fillText(b6.zC.xi(a2V) + " (" + b6.zC.a2O(100 * hu, +(hu < .1)) + ")", Math.floor(.5 * a1), a6N)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		hu = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => aN.a0X(arg1);

	function a6S(a0u) {
		return !(1 < a0u && 1 === hu || (1 < a0u && a0u * hu - hu < 1 / 1024 ? a0u = (hu + 1 / 1024) / hu : a0u < 1 && hu - a0u * hu < 1 / 1024 && (a0u = (hu - 1 / 1024) / hu), hu = bH.ow(hu * a0u, 1 / 1024, 1), a6I(), 0))
	}

	function a6T(kk) {
		return hu !== (hu = bH.ow((kk - ef - a6F) / (a1 - 2 * a6F), 1 / 1024, 1)) && (a6I(), !0)
	}
	this.eh = 0, this.gn = !1, this.dU = function() {
		wz = !a9.gu && !a9.gi, a5K = !1, hu = .5, a2V = 0, this.gn = !1, this.resize()
	}, this.resize = function() {
		u.v.sd() && at.a1 < .8 * at.j7 ? (this.j7 = Math.floor(.066 * at.pQ), a1 = at.a1 - 4 * bY.gap - this.j7) : (a1 = Math.floor((u.v.sd() ? .65 : .389) * at.pQ), a1 += 12 - a1 % 12, this.j7 = Math.floor(a1 / 12)), a6F = Math.floor(3 * this
			.j7 / 2), a3t = b6.pO.rP(1, Math.floor(.5 * this.j7)), (canvas = document.createElement("canvas")).width = a1, canvas.height = this.j7, (wg = canvas.getContext("2d", {
			alpha: !0
		})).font = a3t, b6.pO.textBaseline(wg, 1), b6.pO.textAlign(wg, 1), this.a6H(), a6I()
	}, this.a6H = function() {
		ef = u.v.sd() && at.a1 < .8 * at.j7 ? this.j7 + 3 * bY.gap : Math.floor((at.a1 - a1) / 2), this.eh = at.j7 - this.j7 - bg.a3G() * bY.gap
	}, this.lH = function() {
		a5K && (a5K = !1, a6I())
	}, this.wz = function() {
		return !(!wz || aI.gj && ef < Math.floor(bY.gap + 5.5 * this.j7))
	}, this.a4W = function(a6O) {
		return !!this.wz() && ef + a1 > at.a1 - a6O - bY.gap
	}, this.a2c = function() {
		wz = !a9.gi
	}, this.a67 = function() {
		wz = !1
	}, this.h0 = function() {
		return bH.ow(Math.floor(1024 * hu + .5) - 1, 0, 1023)
	}, this.a0U = function(kk, kl) {
		return this.wz() && ef < kk && kk < ef + a1 && kl > this.eh
	}, this.gm = function(kk, kl) {
		return !!this.wz() && !!aN.a0U(kk, kl) && (aO.m3 = !1, function(rG, kk, kl) {
			if (function(kk, kl) {
					return ef < kk && kk < ef + a6F && kl > aN.eh
				}(kk, kl)) return a6S(a6G);
			if (function(kk, kl) {
					return ef + a1 - a6F < kk && kk < ef + a1 && kl > aN.eh
				}(kk, kl)) return a6S(1 / a6G);
			return rG.gn = !0, a6T(kk)
		}(this, kk, kl) && (bb.dc = !0), !0)
	}, this.a0X = function(mA) {
		0 !== a9.yP && this.wz() && a6S(mA) && (bb.dc = !0)
	}, this.a03 = function(deltaY) {
		var mA;
		return !(0 === deltaY || !this.wz()) && a6S(mA = 0 < deltaY ? (mA = 400 / (400 + deltaY)) < a6G ? a6G : mA : 1 / a6G < (mA = (400 - deltaY) / 400) ? 1 / a6G : mA)
	}, this.a00 = function(kk) {
		return !!this.gn && a6T(kk)
	}, this.a0Q = function() {
		this.gn = !1
	}, this.iS = function() {
		this.wz() && a2V !== b6.fu.ht(a9.eI, this.h0()) && (a5K = !0)
	}, this.tJ = function() {
		this.wz() && tK.drawImage(canvas, ef, this.eh)
	}
}

function ct() {
	var canvas, wg, a6U, font, a6V = 0,
		a6W = !1,
		a6X = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		a6Y = 5;

	function a6e() {
		if (a6W) {
			var a7, eY = a6X.length,
				a6N = Math.floor(.5 * a6U.j7),
				j7 = eY * a6N,
				ef = Math.floor(Math.floor(a6U.ef) + .3 * a6U.a1 - .5),
				eh = Math.floor(Math.floor(a6U.eh) - j7),
				a1 = Math.floor(.4 * a6U.a1 + 2.5);
			for (tK.fillStyle = b7.mU, tK.fillRect(ef, eh, a1, j7), tK.fillStyle = b7.mx, tK.fillRect(ef, eh + a6Y * a6N, a1, a6N), tK.fillStyle = b7.mY, tK.fillRect(ef, eh, 2, j7), tK.fillRect(ef, eh, a1, 2), tK.fillRect(ef + a1 - 2, eh, 2, j7),
				a7 = 1; a7 < eY; a7++) tK.fillRect(ef, eh + a7 * a6N, a1, 2);
			for (tK.fillStyle = b7.mY, b6.pO.textAlign(tK, 1), b6.pO.textBaseline(tK, 1), tK.font = b6.pO.rP(0, .6 * a6N), ef += .5 * a1, a7 = 0; a7 < eY; a7++) tK.fillText(a6m(a7), ef, eh + (a7 + .6) * a6N)
		}
		tK.drawImage(canvas, Math.floor(a6U.ef), Math.floor(a6U.eh))
	}

	function lI(rG) {
		var ef, ly, lz, a6N;
		wg.clearRect(0, 0, Math.floor(a6U.a1), Math.floor(a6U.j7)), wg.fillStyle = b7.mU, wg.fillRect(0, 0, Math.floor(a6U.a1), Math.floor(a6U.j7)), a9.m1 && (wg.fillStyle = b7.mx, wg.fillRect(0, 0, Math.floor(.3 * a6U.a1), Math.floor(a6U.j7))), wg
			.fillStyle = b7.mY, wg.fillText("Hide UI", .15 * a6U.a1, .5 * a6U.j7), wg.fillRect(Math.floor(.3 * a6U.a1 - .5), 0, 2, Math.floor(a6U.j7)), ef = .5 * a6U.a1, wg.fillText("Replay Speed", ef, .31 * a6U.j7), wg.fillText(a6m(a6Y), ef, .69 *
				a6U.j7), wg.fillRect(Math.floor(.7 * a6U.a1 - .5), 0, 2, Math.floor(a6U.j7)), rG.a38 ? (ef = Math.floor(.02 * a6U.a1), rG = Math.floor(.025 * a6U.a1), ly = Math.floor(.85 * a6U.a1 - ef - .5 * rG), lz = Math.floor(.25 * a6U.j7), a6N =
				Math.floor(a6U.j7) - 2 * lz, wg.fillRect(ly, lz, ef, a6N), wg.fillRect(ly + ef + rG, lz, ef, a6N)) : function() {
				var a1 = Math.floor(.46 * a6U.j7),
					j7 = Math.floor(.23 * a6U.j7),
					ef = Math.floor(.85 * a6U.a1 - .5 * a1 + a1 / 12),
					eh = Math.floor(.5 * a6U.j7 - j7);
				wg.beginPath(), wg.moveTo(ef, eh), wg.lineTo(ef + a1, eh + j7), wg.lineTo(ef, eh + (j7 << 1)), wg.fill()
			}(), wg.fillRect(0, 0, Math.floor(a6U.a1), 2), wg.fillRect(0, 0, 2, Math.floor(a6U.j7)), wg.fillRect(0, Math.floor(a6U.j7) - 2, Math.floor(a6U.a1), 2), wg.fillRect(Math.floor(a6U.a1 - 2), 0, 2, Math.floor(a6U.j7))
	}

	function a6m(a7) {
		return 5 === a7 ? "Normal" : "" + a6X[a7]
	}
	this.a38 = !1, this.dU = function() {
		a9.gi && (a6Y = 5, this.a38 = !1, a6W = !1, a6U = new q1([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.a6Z = function() {
		return a6X[a6Y]
	}, this.wc = function() {
		return a6U.eh
	}, this.a4W = function(a6O) {
		return !!a9.gi && a6U.ef + a6U.a1 > at.a1 - a6O - bY.gap
	}, this.resize = function() {
		a9.gi && (a6U.resize(), a6U.eh -= (bg.a3G() - 1) * bY.gap, font = b6.pO.rP(0, .3 * a6U.j7), (canvas = document.createElement("canvas")).width = Math.floor(a6U.a1), canvas.height = Math.floor(a6U.j7), (wg = canvas.getContext("2d", {
			alpha: !0
		})).font = font, b6.pO.textAlign(wg, 1), b6.pO.textBaseline(wg, 1), lI(this))
	}, this.a0a = function(a6a) {
		0 === a9.yP || n.wz() || a6a !== a9.m1 && (a9.m1 = a6a, bd.resize(), bb.dc = !0, a9.gi) && (a6V = bb.lo + 2e3, lI(this))
	}, this.gm = function(ef, eh) {
		if (!a9.gi) return !1;
		if (ef < a6U.ef || eh < a6U.eh || ef > a6U.ef + a6U.a1) return a6W && function(rG, ef, eh) {
			var eY = a6X.length,
				a6N = Math.floor(.5 * a6U.j7),
				j7 = eY * a6N,
				ly = Math.floor(Math.floor(a6U.ef) + .3 * a6U.a1 - .5),
				j7 = Math.floor(Math.floor(a6U.eh) - j7),
				a1 = Math.floor(.4 * a6U.a1 + 2.5);
			return a6W = !1, bb.dc = !0, ef < ly || ly + a1 < ef || eh < j7 || (a6Y = a6d(0, Math.floor((eh - j7) / a6N), eY - 1), lI(rG)), !0
		}(this, ef, eh);
		if ((ef -= a6U.ef) < .3 * a6U.a1) a6W = !1, this.a0a(!a9.m1);
		else {
			if (ef < .7 * a6U.a1) return a6W = !a6W, bb.dc = !0;
			this.a0c(!1)
		}
		return !0
	}, this.a0c = function(a6c) {
		2 === a9.yP ? (this.a0a(!1), n.o(3)) : (a6W = !1, this.a38 = !this.a38, this.a38 ? (aI.gj && aI.a0b(), u.v.setState(1)) : a6c || aI.a3z(), bb.dc = !0, lI(this))
	}, this.a0d = function() {
		this.a38 = !1, aI.a3z(), bb.dc = !0, lI(this)
	}, this.a0J = function(ef, eh) {
		return !!a9.m1 && (0 <= aI.gm(ef, eh) || (a9.gi ? ((bb.lo > a6V || !this.gm(ef, eh)) && aO.gm(ef, eh), bb.dc = !0, a6V = bb.lo + 2e3) : aO.gm(ef, eh)), !0)
	}, this.iS = function() {
		a9.gi && a9.m1 && bb.lo > a6V - 1e3 && bb.lo < a6V && (bb.dc = !0)
	}, this.yX = function() {
		a9.gi && (this.a38 = !1, bb.dc = !0, lI(this))
	}, this.tJ = function() {
		if (a9.gi) {
			if (a9.m1) {
				if (bb.lo > a6V) return;
				if (bb.lo > a6V - 1e3) return tK.globalAlpha = a6d(0, (1e3 - (bb.lo - (a6V - 1e3))) / 1e3, 1), a6e(), void(tK.globalAlpha = 1)
			}
			a6e()
		}
	}
}

function cD() {
	var a6n, a6o, a1, ef, eh, a6p, a6q;
	this.dU = function() {
		a6n = new Array(2), a6o = new Array(2), this.m3 = !1, a6q = a6p = hx = hv = 0, hw = 1, this.resize()
	}, this.resize = function() {
		a1 = (a1 = Math.floor((u.v.sd() ? .072 : .0502) * at.pQ)) < 8 ? 8 : a1;
		for (var a7 = 1; 0 <= a7; a7--) a6n[a7] = document.createElement("canvas"), a6n[a7].width = a1, a6n[a7].height = a1, a6o[a7] = a6n[a7].getContext("2d", {
			alpha: !0
		});
		this.a6H(),
			function() {
				for (var a75 = Math.floor(1 + a1 / 20), a7 = 1; 0 <= a7; a7--) a6o[a7].clearRect(0, 0, a1, a1), a6o[a7].fillStyle = b7.mR, a6o[a7].beginPath(), a6o[a7].arc(a1 / 2, a1 / 2, a1 / 2 - a75, 0, 2 * Math.PI), a6o[a7].fill(), a6o[a7]
					.lineWidth = a75, a6o[a7].fillStyle = b7.mY, a6o[a7].strokeStyle = b7.mY, a6o[a7].beginPath(), a6o[a7].arc(a1 / 2, a1 / 2, a1 / 2 - a75, 0, 2 * Math.PI), a6o[a7].stroke(), wj(a6o[a7], 0, 0, a1, a75, .3, 0 === a7)
			}()
	}, this.wb = function() {
		return -hv / hw
	}, this.wc = function() {
		return -hx / hw
	}, this.mD = function(a6u, hd) {
		hv = hw * a6u - hd
	}, this.mE = function(a6v, he) {
		hx = hw * a6v - he
	}, this.gm = function(a6t, a4X) {
		return a9.m1 || ! function(a6t, a4X) {
			return Math.pow(a6t - (ef + a1 / 2), 2) + Math.pow(a4X - (eh + a1 / 2), 2) < a1 * a1 / 4 || Math.pow(a6t - (ef + a1 / 2), 2) + Math.pow(a4X - (eh + 2 * a1), 2) < a1 * a1 / 4
		}(a6t, a4X) || bf.dp.data[8].value ? (aD.mG() && (this.m3 = !0, a6p = a6t, a6q = a4X), !1) : a4X < eh + 1.25 * a1 ? this.a03(Math.floor(at.a1 / 2), Math.floor(at.j7 / 2), -200) : this.a03(Math.floor(at.a1 / 2), Math.floor(at.j7 / 2),
			200)
	}, this.a00 = function(a6t, a4X) {
		var a6w, a6x, hg, hj;
		return !aD.mG() || (a6w = hv, a6x = hx, hv += hg = a6p - a6t, hx += hj = a6q - a4X, ab.a00(hg, hj), this.a6y(), a6p = a6t, a6q = a4X, a6w !== hv) || a6x !== hx
	}, this.a03 = function(kk, kl, deltaY) {
		var mA;
		if (aD.mG()) {
			if (0 < deltaY) mA = (mA = 500 / (500 + deltaY)) < .5 ? .5 : mA;
			else {
				if (!(deltaY < 0)) return !1;
				mA = 2 < (mA = (500 - deltaY) / 500) ? 2 : mA
			}
			this.a6z(kk, kl, mA), bb.dc = !0
		}
		return !0
	}, this.a6z = function(ef, eh, eC) {
		var a0u;
		eC = a0u = (a0u = 1024 < (a0u = eC) * hw ? 1024 / hw : a0u) * hw < .125 ? .125 / hw : a0u, ab.zoom(eC, ef, eh),
			function(a0u, kk, kl) {
				hw *= a0u, hv = (hv + kk) * a0u - kk, hx = (hx + kl) * a0u - kl, aO.a6y()
			}(eC, ef, eh)
	}, this.a6y = function() {
		var a72 = at.a1 / 16,
			hN = 0,
			a73 = at.j7 / 16,
			hO = 0;
		hv < -at.a1 + a72 && (hN = -at.a1 + a72 - hv), hv > hw * bO.ej - a72 && (hN = hw * bO.ej - a72 - hv), hx < -at.j7 + a73 && (hO = -at.j7 + a73 - hx), hx > hw * bO.ek - a73 && (hO = hw * bO.ek - a73 - hx), hv += hN, hx += hO, bW.mF(), ab
			.a74(hN, hO)
	}, this.a6H = function() {
		ef = at.a1 - a1 - bY.gap, eh = Math.floor(at.j7 / 2 - 1.25 * a1)
	}, this.tJ = function() {
		bf.dp.data[8].value || (tK.drawImage(a6n[0], ef, eh), tK.drawImage(a6n[1], ef, Math.floor(eh + 3 * a1 / 2)))
	}
}

function cE() {
	var g, a76, a77, a78, gap, a79, a7A, a7B, a7C, a7D, a3t, a7E, gd, a7F, a5R, a7G, a7H, a7I;

	function a7M() {
		a78 = Math.floor(.2 * (u.v.sd() ? .07 : .035) * at.pQ), a78 = a4U(u.v.sd() ? 3 : 1, a78);
		var a7P = at.a1 / (g.length + gap);
		a78 = a78 < a7P ? a7P : a78, a5R = Math.floor((1 - gap) * a78), a76 = 0, a7Q()
	}

	function a7Q() {
		a76 = (a76 = a76 < -20 ? -20 : a76) > (g.length - 15) * a78 ? (g.length - 15) * a78 : a76, a7A = Math.floor(a76 / a78), a7B = (a7B = a7A + Math.floor(at.a1 / a78)) > g.length - 1 ? g.length - 1 : a7B, a7A = (a7A = a7B < a7A ? a7B : a7A) < 0 ?
			0 : a7A;
		var kP = a7B;
		a79 = a77 / g[kP];
		for (var a7 = a7B - 1; a7A <= a7; a7--) g[a7] > g[kP] && (kP = a7, a79 = a77 / Math.pow(g[a7], a7F))
	}

	function a7T(ef) {
		ef = Math.floor((a76 + at.a1 - ef - gap * a78) / a78);
		return (ef = ef < -1 ? -1 : -1 === ef ? 0 : ef > g.length - 1 ? -1 : ef) !== a7C && (a7C = ef, -1 === a7G && 0 === a7C && aP.a7J && (a7G = setInterval(a7U, 100)), 1)
	}

	function a7V(a7) {
		var a5H = Math.floor(a79 * Math.pow(g[a7], a7F));
		tK.fillRect(a76 + at.a1 - (a7 + 1) * a78, at.j7 - a5H, a5R, a5H)
	}

	function a7U() {
		var g6;
		0 !== (a7C = 8 === aW.zd() ? -1 : a7C) ? (a7H = (new Date).getTime(), clearInterval(a7G), a7G = -1) : (g6 = g[1] / 864e3, -1 !== a7H && (g6 += ((new Date).getTime() - a7H) * g[1] / 864e5, a7H = -1), 0 < g6 && (g[0] += Math.floor(g6), bb
			.dc = !0))
	}
	this.a7J = !1, this.dU = function() {
		a7H = a7G = -1, a7C = -(a7F = 1), this.a7K = !1, gd = 0, a7E = new Date, a76 = 0, gap = .3, (a7I = []).push({
			g1: "Plateau A",
			eY: 0,
			e: 57
		}), a7I.push({
			g1: "Max A",
			eY: 1,
			e: 1
		}), a7I.push({
			g1: "Black Friday",
			eY: 15,
			e: 15
		}), a7I.push({
			g1: "Max B",
			eY: 19,
			e: 19
		}), a7I.push({
			g1: "Max C",
			eY: 44,
			e: 44
		}), a7I.push({
			g1: "First Android Version",
			eY: 58,
			e: 58
		}), a7I.push({
			g1: "Max D",
			eY: 67,
			e: 67
		}), a7I.push({
			g1: "The iFrame Explosion",
			eY: 98,
			e: 99
		}), a7I.push({
			g1: "The 155-Day Uptrend",
			eY: 58,
			e: 213
		}), a7I.push({
			g1: "Max E",
			eY: 213,
			e: 213
		}), a7I.push({
			g1: "Plateau B",
			eY: 214,
			e: 259
		}), a7I.push({
			g1: "Turbulent Times",
			eY: 260,
			e: 344
		}), a7I.push({
			g1: "Max F",
			eY: 262,
			e: 262
		}), a7I.push({
			g1: "Max G",
			eY: 282,
			e: 282
		}), a7I.push({
			g1: "Max H",
			eY: 333,
			e: 333
		}), a7I.push({
			g1: "The 19-Day Downtrend",
			eY: 283,
			e: 301
		}), a7I.push({
			g1: "Plateau C",
			eY: 345,
			e: 385
		}), a7I.push({
			g1: "The Alliance Ascent",
			eY: 386,
			e: 395
		}), a7I.push({
			g1: "Max I",
			eY: 395,
			e: 395
		}), a7I.push({
			g1: "First iOS Version",
			eY: 411,
			e: 411
		}), a7I.push({
			g1: "Plateau D",
			eY: 396,
			e: 453
		}), a7I.push({
			g1: "The TikTok Revolution",
			eY: 454,
			e: 470
		}), a7I.push({
			g1: "Max J",
			eY: 456,
			e: 456
		}), a7I.push({
			g1: "Max K",
			eY: 472,
			e: 472
		}), a7I.push({
			g1: "Max L",
			eY: 478,
			e: 478
		}), a7I.push({
			g1: "YT Drew",
			eY: 471,
			e: 485
		}), a7I.push({
			g1: "Plateau E",
			eY: 485,
			e: 600
		}), a7I.push({
			g1: "Uptrend A",
			eY: 600,
			e: 613
		}), a7I.push({
			g1: "Max M",
			eY: 613,
			e: 613
		}), a7I.push({
			g1: "Downtrend A",
			eY: 614,
			e: 635
		}), a7I.push({
			g1: "Plateau F",
			eY: 636,
			e: 737
		}), a7I.push({
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
		a77 = Math.floor(.15 * at.j7), a7D = (a7D = Math.floor((u.v.sd() ? .018 : .0137) * at.pQ)) < 2 ? 2 : a7D, a3t = b6.pO.rP(1, a7D), a7M()
	}, this.a7N = function(a7O) {
		var a7;
		for (this.a7J = !0, a7 = 0; a7 < a7O.length; a7++) g.unshift(a7O[a7]);
		a7M(), bb.dc = !0
	}, this.a7R = function() {
		a7Q()
	}, this.a00 = function(ef, eh) {
		eh > at.j7 - .6 * a77 ? this.a7K ? ef !== gd && (a76 += ef - gd, gd = ef, a7Q(), a7T(ef), this.a7K = -1 !== a7C, bb.dc = !0) : a7T(ef) && (bb.dc = !0) : this.qQ()
	}, this.qQ = function() {
		-1 !== a7C && (this.a7K = !1, a7C = -1, bb.dc = !0)
	}, this.a03 = function(ef, deltaY) {
		-1 !== a7C && (a76 += Math.floor(deltaY), a7Q(), a7T(ef), bb.dc = !0)
	}, this.gm = function(ef, eh) {
		this.a00(ef, eh), -1 !== a7C && (gd = ef, this.a7K = !0)
	}, this.a0P = function() {
		-1 !== a7C && (this.a7K = !1)
	}, this.tJ = function() {
		tK.fillStyle = b7.mb;
		for (var a7X, month, dk, ru, a7a, a7b, lz, a7c, a7d, a7 = a7B; a7A <= a7; a7--) a7V(a7);
		this.a7J && 0 === a7A && (tK.fillStyle = b7.n7, a7V(0)), -1 !== a7C && (tK.fillStyle = b7.ma, a7V(a7C)), -1 !== a7C && (tK.font = a3t, b6.pO.textBaseline(tK, 2), (dk = new Date).setTime(a7E.getTime() - 1e3 * a7C * 60 * 60 * 24), month =
			"month", a7X = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(dk), a7X = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(dk)), a7X = a7X + ", " + dk.getUTCDate() + " " + month + " " + dk.getFullYear(), month = 1 === g[a7C] ? L(96) : L(97), month = b6.zC.xi(g[a7C]) + " " + month, dk = Math.floor(tK.measureText(a7X).width), ru = Math.floor(
				tK.measureText(month).width), a7a = Math.floor(.5 * (dk + a7D)), a7b = (a7b = a76 + at.a1 - (a7C + 1) * a78) < a7a ? a7a : a7b > at.a1 - a7a ? at.a1 - a7a : a7b, lz = at.j7 - Math.floor(a79 * Math.pow(g[a7C], a7F)), a7c = Math
			.floor(1.1 * a7D), a7d = lz > at.j7 - a7c ? at.j7 - a7c : lz, tK.fillStyle = b7.mV, tK.fillRect(at.a1 - ru - a7D, a7d - a7c, ru + a7D, a7c), tK.fillRect(a7b - a7a, at.j7 - a7c, dk + a7D, a7c), tK.fillStyle = b7.mY, b6.pO
			.textAlign(tK, 2), tK.fillText(month, Math.floor(at.a1 - .5 * a7D), a7d),
			function(lz, a7c) {
				for (var rt, kR = -1, e0 = g.length - a7C - 1, a7 = a7I.length - 1; 0 <= a7; a7--) e0 >= a7I[a7].eY && e0 <= a7I[a7].e && (-1 === kR || a7I[a7].e - a7I[a7].eY < a7I[kR].e - a7I[kR].eY) && (kR = a7); - 1 !== kR && (rt = Math
					.floor(tK.measureText(a7I[kR].g1).width), tK.fillStyle = b7.mV, tK.fillRect(at.a1 - rt - a7D, lz, rt + a7D, a7c), tK.fillStyle = b7.mY, tK.fillText(a7I[kR].g1, Math.floor(at.a1 - .5 * a7D), lz + a7c))
			}(a7d - 2 * a7c, a7c), b6.pO.textAlign(tK, 1), tK.fillText(a7X, a7b, at.j7), tK.strokeStyle = b7.mc, tK.lineWidth = 1, tK.beginPath(), tK.moveTo(0, lz), tK.lineTo(at.a1, lz), tK.closePath(), tK.stroke())
	}
}

function cF() {
	var a3t, a1, eh, a7f, a7g, canvas, wg, a5K, a1u, a7h, a7i, a7j, a7k;
	this.ef = 0, this.j7 = 0, this.dU = function() {
		a7g = a9.a2k, a7i = "rgba(0,100,0,0.8)", a7j = "rgba(150,0,0,0.8)", a5K = !(a7h = !0), a1u = ac.ga[a9.eI], this.resize()
	}, this.resize = function() {
		a1 = Math.floor((u.v.sd() ? .305 : .24) * at.pQ), this.j7 = Math.floor(.5 + .13 * a1), a1 = Math.floor(6 * this.j7), a3t = b6.pO.rP(1, Math.floor(.8 * this.j7)), a7k = Math.floor(.5 * this.j7), bO.uy.font = a3t, eh = bY.gap, a7f = Math
			.floor(1 + .13 * this.j7), (canvas = document.createElement("canvas")).width = a1, canvas.height = this.j7, (wg = canvas.getContext("2d", {
				alpha: !0
			})).font = a3t, b6.pO.textBaseline(wg, 1), b6.pO.textAlign(wg, 1), this.a7l()
	}, this.a5h = function() {
		return u.v.sd() && at.a1 < 1.2 * at.j7
	}, this.a6H = function() {
		this.a5h() ? this.ef = at.a1 - a1 - bY.gap : this.ef = Math.floor(aR.a7m() + (at.a1 - aR.a7m() - aS.a1 - a1) / 2 - .5 * bY.gap)
	}, this.lH = function() {
		a5K && (a5K = !1, this.a7l())
	}, this.a7l = function() {
		wg.clearRect(0, 0, a1, this.j7), wg.fillStyle = a7h ? a7i : a7j, wg.fillRect(0, 0, a1, this.j7), wg.fillStyle = b7.ma, this.a7n(), this.a7o(), wg.fillStyle = ac.ga[a9.eI] >= aa.jK(a9.eI) ? b7.n4 : b7.mY, wg.fillText(b6.zC.xi(a1u), Math
			.floor(a1 / 2), a7k), wg.fillStyle = b7.mY, wg.fillRect(0, 0, a1, 1), wg.fillRect(0, 0, 1, this.j7), wg.fillRect(0, this.j7 - 1, a1, 1), wg.fillRect(a1 - 1, 0, 1, this.j7)
	}, this.a7n = function() {
		var et = bb.jb() % 100,
			et = (et = 9 - bH.dl(et -= et % 10, 10), Math.floor(et * (this.j7 - a7f) / 9));
		wg.fillRect(0, et, a7f, this.j7 - et), wg.fillRect(a1 - a7f, et, a7f, this.j7 - et)
	}, this.a7o = function() {
		wg.fillRect(a7f, this.j7 - a7f, Math.floor((a1 - 2 * a7f) * ac.ga[a9.eI] / a7g), a7f)
	}, this.iS = function() {
		var g6 = a9.eI;
		b6.fu.gl(g6) && (g6 = ac.ga[g6] - ac.a1t[g6], a1u !== g6 ? (a7g = a4U(g6, a7g), a7h = a1u < g6 && 10 <= g6, a1u = g6, a5K = !0) : bb.jb() % 10 == 9 && (a5K = !0))
	}, this.tJ = function() {
		0 === ac.lV[a9.eI] || a9.gu || 2 === ac.a1n[a9.eI] || tK.drawImage(canvas, this.ef, eh)
	}
}

function cG() {
	var a7p, a7q, a7r, a7s, a7t, a7u, a7v, a7w, a7x, a7y, a7z, a80, a81, a82, a83, a84, a85, a86, a87, a88, a89, a8A, position, a8B, a8C, a8D, a8E, a8F = 1,
		a8G = 1,
		a8H = "";
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

	function a8J() {
		a7v.clearRect(0, 0, a7p, a5x),
			a7v.fillStyle = b7.nL,
			a7v.fillRect(0, 0, a7p, a80),
			a7v.fillStyle = b7.mU,
			a7v.fillRect(0, a80, a7p, a5x - a80);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			jP[a9.eI]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) a8A = -1;
		if (__fx.leaderboardFilter.enabled && a8A >= __fx.leaderboardFilter.filteredLeaderboard.length) a8A = -1;
		playerPos >= position && a8L(playerPos - position, b7.mx),
			0 !== jP[a9.eI] && 0 === position && a8L(0, b7.nQ),
			-1 !== a8A && a8L(a8A, b7.mZ),
			a7v.fillStyle = b7.mU,
			//console.log("drawing", a8A),
			a7v.clearRect(0, a5x - __fx.leaderboardFilter.tabBarOffset, a7p, __fx.leaderboardFilter.tabBarOffset);
		a7v.fillRect(0, a5x - __fx.leaderboardFilter.tabBarOffset, a7p, __fx.leaderboardFilter.tabBarOffset);
		a7v.fillStyle = b7.mY,
			a7v.fillRect(0, a80, a7p, 1),
			a7v.fillRect(0, a5x - __fx.leaderboardFilter.tabBarOffset, a7p, 1),
			__fx.leaderboardFilter.drawTabs(a7v, a7p, a5x - __fx.leaderboardFilter.tabBarOffset, b7.mx),
			a7v.fillRect(0, 0, a7p, bY.xR),
			a7v.fillRect(0, 0, bY.xR, a5x),
			a7v.fillRect(a7p - bY.xR, 0, bY.xR, a5x),
			a7v.fillRect(0, a5x - bY.xR, a7p, bY.xR), a7v.font = a7q, b6.pO.textBaseline(a7v, 1), b6.pO.textAlign(a7v, 1), a7v.fillText(a8H, Math.floor((a7p + a80 - 22) / 2), Math.floor(a7y + a7r / 2));
		__fx.playerList.drawButton(a7v, 12, 12, a80 - 22);
		var er, g7 = playerPos < position + a7t - 1 ? 1 : 2;

		if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - a7t)
				position = (result.length > a7t ? result.length : a7t) - a7t;
			//if (position >= result.length) position = result.length - 1;
			for (a7v.font = a7s, b6.pO.textAlign(a7v, 0), er = a7t - g7; 0 <= er; er--) {
				const pos = result[er + position];
				if (pos !== undefined)
					a8M(kw[pos]), a8N(er, pos, kw[pos]);
			}
			for (b6.pO.textAlign(a7v, 2), er = a7t - g7; 0 <= er; er--) {
				const pos = result[er + position];
				if (pos !== undefined)
					a8M(kw[pos]), a8O(er, kw[pos]);
			}
		} else {
			for (a7v.font = a7s, b6.pO.textAlign(a7v, 0), er = a7t - g7; 0 <= er; er--)
				a8M(kw[er + position]), a8N(er, er + position, kw[er + position]);
			for (b6.pO.textAlign(a7v, 2), er = a7t - g7; 0 <= er; er--)
				a8M(kw[er + position]), a8O(er, kw[er + position]);
		}
		2 == g7 && (a8M(a9.eI), b6.pO.textAlign(a7v, 0), a8N(a7t - 1, jP[a9.eI], a9.eI), b6.pO.textAlign(a7v, 2), a8O(a7t - 1, a9.eI)), 0 === position && (g7 = .7 * a81 / aX.get(4).height, a7v.setTransform(g7, 0, 0, g7, Math.floor(a82 + .58 * a81 +
			.5 * g7 * aX.get(4).width), Math.floor(a7y + a7r + .4 * a81)), a7v.imageSmoothingEnabled = !0, a7v.drawImage(aX.get(4), -Math.floor(aX.get(4).width / 2), -Math.floor(aX.get(4).height / 2)), a7v.setTransform(1, 0, 0, 1, 0, 0))
	}

	function a8M(player) {
		a9.ie && (a7v.fillStyle = bc.a8Q[bc.k4[bc.eW[player]]])
	}

	function a8L(a7, a8R) {
		a7v.fillStyle = a8R, a7 = a7t - 1 < a7 ? a7t - 1 : a7;
		a8R = Math.floor((a7 === a7t - 1 ? 2 : 0 === a7 ? 1.15 : 1) * a81), a8R = a7 === a7t - 2 ? Math.floor(a80 + 9.15 * a81) - Math.floor(a80 + 8.15 * a81) : a8R;
		a7v.fillRect(0, Math.floor(a80 + (a7 + (0 === a7 ? 0 : .15)) * a81), a7p, a8R)
	}

	function a8N(a8T, qs, a7) {
		a7v.fillText(a86[qs], a82, Math.floor(a7y + a7r + (a8T + .5) * a81)), 1 === ac.a1n[a7] && (a7v.font = "italic " + a7s);
		qs = Math.floor(a7y + a7r + (a8T + .5) * a81);
		a7v.fillText(ac.a4d[a7], a83, qs), 0 !== ac.a1n[a7] && (a7v.font = a7s), a7 < a9.je && 2 !== ac.a1n[a7] || a7v.fillRect(a83, qs + .35 * a8F, a85[a7], Math.max(1, .1 * a8F))
	}

	function a8O(a8T, a7) {
		a7v.fillText(ac.gM[a7], a84, Math.floor(a7y + a7r + (a8T + .5) * a81))
	}

	function a8c(eh) {
		return (eh -= bY.gap + a80) < 0 ? Math.floor(eh / a81) - 1 : eh < (a7t - 1) * a81 ? Math.floor(eh / a81) : eh < a5x - a80 ? a7t - 1 : (eh -= a5x - a80, a7t + Math.floor(eh / a81))
	}

	function xQ(ef, eh) {
		return ef >= bY.gap && ef < bY.gap + a7p && eh >= bY.gap && eh < bY.gap + a5x
	}
	this.dU = function() {
			var a7;
			for (a8C = !1, a8E = a8D = a8B = 0, a8A = -1, a7t = u.v.sd() ? 6 : 10, a8G = (position = 0) === (a8G = bf.dp.data[11].value) ? 10 : 1 === a8G ? 5 : 1, a89 = !1, a87 = new Uint16Array(a7t + 1), a88 = new Uint32Array(a7t + 1), a7x = a9.eV,
				kw = new Uint16Array(a7x), jP = new Uint16Array(a7x), a7 = a7x - 1; 0 <= a7; a7--) kw[a7] = a7, jP[a7] = a7;
			this.resize(!0), a85 = new Uint16Array(a9.eV);
			var a8I = Math.floor(a7p - a83 - a82 - a7w);
			for (a86 = new Array(a9.eV), a7v.font = a7s, a7 = a9.eV - 1; 0 <= a7; a7--) a86[a7] = a7 + 1 + ".", ac.a4d[a7] = b6.wg.a1U(ac.zE[a7], a7s, a8I), a85[a7] = Math.floor(a7v.measureText(ac.a4d[a7]).width);
			a8J()
		}, this.resize = function(dU) {
			if (a5x = u.v.sd() ? (a7p = Math.floor(.335 * at.pQ), Math.floor(a7t * a7p / 8)) : (a7p = Math.floor(.27 * at.pQ), Math.floor(a7t * a7p / 10)), a7p = Math.floor(.97 * a7p), (a7u = document.createElement("canvas")).width = a7p, a7u
				.height = a5x, a7v = a7u.getContext("2d", {
					alpha: !0
				}), a7y = .025 * a7p, a7r = .16 * a7p, a7z = 0 * a7p, a80 = Math.floor(.45 * a7y + a7r), a81 = (a5x - a7r - 2 * a7y - a7z) / a7t,
				a7u.height = a5x += a81, __fx.leaderboardFilter.tabBarOffset = Math.floor(a81 * 1.3), __fx.leaderboardFilter.verticalClickThreshold = a5x - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = a7p,
				a7q = b6.pO.rP(1, Math.floor(.55 * a7r)), a8F = Math.floor((u.v.sd() ? .67 : .72) * a81), a7s = b6.pO.rP(0, a8F), a7v.font = a7s, a82 = Math.floor(.04 * a7p), a83 = Math.floor((u.v.sd() ? .195 : .18) * a7p), a7w = Math.floor(a7v
					.measureText("00920600").width), a7v.font = a7q, a84 = a7p - a82, !dU) {
				a7v.font = a7s;
				for (var a7 = a9.eV - 1; 0 <= a7; a7--) a85[a7] = Math.floor(a7v.measureText(ac.a4d[a7]).width);
				a8J()
			}
			a8H = b6.wg.a1U(L(98), a7q, .96 * a7p)
		}, this.a7m = function() {
			return a7p
		}, this.lH = function(bo, a8K) {
			(a8K || a89 && (bo || bb.jb() % a8G == 0)) && (a89 = !1, a8J())
		}, this.iS = function() {
			! function() {
				for (var er = a7x - 1; 0 <= er; er--) 0 === ac.lV[kw[er]] && ! function(er) {
					var a8a = kw[er];
					a7x--;
					for (var a7 = er; a7 < a7x; a7++) kw[a7] = kw[a7 + 1], jP[kw[a7]] = a7;
					kw[a7x] = a8a, jP[kw[a7x]] = a7x
				}(er)
			}();
			for (var a8Y, mG = a7x - 1, er = 0; er < mG; er++) ac.gM[kw[er]] < ac.gM[kw[er + 1]] && (a8Y = kw[er], kw[er] = kw[er + 1], kw[er + 1] = a8Y, jP[kw[er]] = er, jP[kw[er + 1]] = er + 1);
			! function() {
				for (var dk = a89, g7 = (a89 = !0, jP[a9.eI] >= a7t - 1 ? a7t - 2 : a7t - 1), a7 = g7; 0 <= a7; a7--)
					if (a87[a7] !== kw[a7] || a88[a7] !== ac.gM[kw[a7]]) return;
				(g7 != a7t - 2 || a87[a7t] === jP[a9.eI] && a88[a7t] === ac.gM[a9.eI]) && (a89 = dk)
			}();
			for (var a7 = a7t - 1; 0 <= a7; a7--) a87[a7] = kw[a7], a88[a7] = ac.gM[kw[a7]];
			a87[a7t] = jP[a9.eI], a88[a7t] = ac.gM[a9.eI];
			leaderboardHasChanged = true;
		}, __fx.leaderboardFilter.scrollToTop = function() {
			position = 0;
		}, this.gm = function(ef, eh) {
			return !!xQ(ef, eh) && ((__fx.utils.isPointInRectangle(ef, eh, bY.gap + 12, bY.gap + 12, a80 - 22, a80 - 22) && __fx.playerList.display(ac.zE), true) &&
				!(eh - bY.gap > __fx.leaderboardFilter.verticalClickThreshold && __fx.leaderboardFilter.handleMouseDown(ef - bY.gap)) && (a8B = bb.lo, a8C = !0, a8D = a8E = a8c(eh), bF.a0e() && (ef = a6d(-1, a8E, a7t), a8A !== (ef = ef === a7t ?
					-1 : ef)) && (a8A = ef, a8J(), bb.dc = !0)), !0)
		}, __fx.leaderboardFilter.repaintLeaderboard = function() {
			a8J(), bb.dc = !0;
		},
		this.a00 = function(ef, eh) {
			if (__fx.utils.isPointInRectangle(ef, eh, bY.gap + 12, bY.gap + 12, a80 - 22, a80 - 22)) {
				__fx.playerList.hoveringOverButton === false && (__fx.playerList.hoveringOverButton = true, a8J(), bb.dc = !0);
			} else {
				__fx.playerList.hoveringOverButton === true && (__fx.playerList.hoveringOverButton = false, a8J(), bb.dc = !0);
			}
			if (__fx.leaderboardFilter.setHovering(
					__fx.utils.isPointInRectangle(ef, eh, bY.gap, bY.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth, __fx.leaderboardFilter.tabBarOffset), ef - bY.gap
				)) return;
			var dk, a8b = a8c(eh);
			return a8C ? (dk = position, (position = a6d(0, position += a8D - a8b, a9.eV - a7t)) !== dk && (a8b = (a8b = a6d(-1, a8D = a8b, a7t)) !== a7t && xQ(ef, eh) ? a8b : -1, a8A = a8b, a8J(), bb.dc = !0), !0) : (a8b = (a8b = a6d(-1, a8b,
				a7t)) === a7t || !xQ(ef, eh) || bF.a0e() ? -1 : a8b, a8A !== a8b && (a8A = a8b, a8J(), bb.dc = !0))
		}, this.a0P = function(ef, eh) {
			if (!a8C) return !1;
			a8C = !1;
			var a8b = a8c(eh);
			var isEmptySpace = false;
			return bF.a0e() && -1 !== a8A && (a8A = -1, a8J(), bb.dc = !0), bb.lo - a8B < 350 && a8E === a8b && -1 !== (a8b = (a8b = a6d(-1, a8b, a7t)) !== a7t && xQ(ef, eh) ? a8b : -1) && (ef = (__fx.leaderboardFilter.enabled ? (updateFilteredLb(),
					kw[__fx.leaderboardFilter.filteredLeaderboard[a8b + position] ?? (isEmptySpace = true, jP[a9.eI])]) : kw[a8b + position]), a8b === a7t - 1 && (__fx.leaderboardFilter.enabled ? this.playerPos : jP[a9.eI]) >=
				position + a7t - 1 && (ef = a9.eI), !isEmptySpace && a9.ie && __fx.donationsTracker.displayHistory(ef, ac.zE, a9.k0), 0 !== ac.lV[ef] && !isEmptySpace) && aD.ls(ef, 800, !1, 0), !0
		}, this.a03 = function(ef, eh, deltaY) {
			var a8d;
			return !(a8C || a9.m1 || (a8d = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !xQ(ef, eh)) || (ef = (ef = a6d(-1, a8c(eh), a7t)) === a7t || bF.a0e() ? -1 : ef, 0 < deltaY ? position < a9.eV - a7t && (position += Math.min(a9.eV - a7t -
				position, a8d), a8A = ef, a8J(), bb.dc = !0) : 0 < position && (position -= Math.min(position, a8d), a8A = ef, a8J(), bb.dc = !0), 0))
		}, this.tJ = function() {
			tK.drawImage(a7u, bY.gap, bY.gap)
		}
}

function cH() {
	var canvas, wg, ef, eh, a5H, a8e, gap, a8f, fontSize, a8g, a8h, a8i, a8j, a8k, a8l, a8m, a8n, a8o;

	function a8s() {
		wg.clearRect(0, 0, aS.a1, aS.j7), wg.fillStyle = b7.mV, wg.fillRect(0, 0, aS.a1, aS.j7), wg.fillStyle = b7.ms, eC = 0 < a8m ? a8m : Math.sqrt(a8j[4] / 1e4), wg.fillRect(0, aS.j7 - a5H - 1, Math.floor(eC * aS.a1), a5H), wg.fillStyle = b7.mY,
			wg.fillRect(0, 0, aS.a1, 1), wg.fillRect(0, 0, 1, aS.j7), wg.fillRect(aS.a1 - 1, 0, 1, aS.j7), wg.fillRect(0, aS.j7 - 1, aS.a1, 1), wg.fillRect(0, aS.j7 - a5H - 1, aS.a1, 1);
		for (var eC, a8u, dk = 0, a7 = 0; a7 < a8i.length; a7++) a8k[a7] ? (b6.pO.textAlign(wg, 0), a8u = Math.floor((a8e - a5H + 2 * a8f) * (a7 - dk + 1) / (a8i.length + 1) - .7 * a8f), wg.fillText(a8i[a7], gap, a8u), b6.pO.textAlign(wg, 2), 5 ===
			a7 && 0 !== ac.lV[a9.eI] && ac.ga[a9.eI] >= aa.jK(a9.eI) ? (wg.fillStyle = b7.nO, wg.fillText(a8q(a7), aS.a1 - gap, a8u), wg.fillStyle = b7.mY) : wg.fillText(a8q(a7), aS.a1 - gap, a8u)) : dk++
	}

	function a8q(a7) {
		return a7 < 3 ? a8j[a7].toString() : 3 === a7 || 4 === a7 || 5 === a7 ? b6.zC.a2O(a8j[a7] / 100, 2) : a7 < 7 ? b6.zC.xi(a8j[a7]) : a7 === 7 ? aS.a8v(a8j[7]) : a7 === 8 ? __fx.utils.getMaxTroops(ac.gM, a9.eI) : __fx.utils.getDensity(a9.eI)
	}

	function a8p() {
		ac.gM[a9.eI] !== a8j[6] && (a8j[6] = ac.gM[a9.eI], a8g++)
	}
	this.dU = function() {
		a8m = a8n = 0, (a8h = new Array(8))[0] = L(99), a8h[1] = a9.k0 ? L(100) : L(101), a8h[2] = L(102), a8h[3] = L(103), a8h[4] = L(104), a8h[5] = L(105, 0, "Interest"), a8h[6] = L(106), a8h[7] = L(107),
			a8h.push("Max Troops", "Density"), // add a8h
			(a8i = new Array(a8h.length)).fill(""), (a8j = new Array(a8h.length))[0] = a9.k0 ? 0 : a9.je, a8j[1] = a9.k0 ? ah.jf : a9.k2, a8j[2] = a9.yR, a8j[3] = 0, a8j[4] = bH.dl(1e4 * ac.gM[0], Math.max(a9.jO, 1)), a8j[5] = 0 === a9.data
			.iIncomeType ? 700 : 1 === a9.data.iIncomeType ? bH.dl(700 * a9.data.iIncomeValue, 64) : bH.dl(700 * a9.data.iIncomeData[a9.eI], 64), a8j[6] = 0, a8p(), a8j[7] = 0, a8l = a8q(6), a8k = new Array(a8h.length);
		for (var a7 = a8h.length - 1; 0 <= a7; a7--) a8k[a7] = !0;
		a8o = 0, a8o = a9.k0 ? (a8k[0] = !1, a8k[2] = !1, a8k[3] = !1, 3) : (a8k[3] = !1, 1), a8g = 0, this.resize()
	}, this.resize = function() {
		this.a1 = Math.floor((u.v.sd() ? .1646 : .126) * 1.25 * at.pQ), this.j7 = Math.floor(1.18 * this.a1), a5H = Math.floor(.04 * this.a1), gap = Math.floor(.035 * this.a1), a8f = .04 * this.a1, a8e = this.j7, this.j7 -= Math.floor(a8o * (this
			.j7 - 2 * a5H) / a8h.length), fontSize = Math.floor(.7 * (a8e - a5H) / a8h.length);
		var a3t = b6.pO.rP(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.a1, canvas.height = this.j7,
			function(a3t, a1) {
				for (var a7 = 0; a7 < a8i.length; a7++) a8i[a7] = b6.wg.a1U(a8h[a7], a3t, a1)
			}((wg = canvas.getContext("2d", {
				alpha: !0
			})).font = a3t, .575 * this.a1), b6.pO.textBaseline(wg, 1), wg.lineWidth = 1, this.a2d(), this.a6H(), aQ.a6H(), a8s()
	}, this.a6H = function() {
		ef = at.a1 - this.a1 - bY.gap
	}, this.a8t = function() {
		eh = bY.gap
	}, this.a2d = function() {
		eh = bY.gap + (aQ.a5h() && 0 !== ac.lV[a9.eI] && !a9.gu ? aQ.j7 + bY.gap : 0)
	}, this.lH = function(bo) {
		(bo || 100 <= a8g) && (a8g = 0, a8s())
	}, this.a3X = function() {
		return a8j[7]
	}, this.a8v = function(value) {
		var kP = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * kP) / 1e3);
		return value < 10 ? kP + ":0" + value : kP + ":" + value
	}, this.iS = function() {
		var a94, per;
		a8k[0] && a9.yS - a9.yR !== a8j[0] && (a8j[0] = a9.yS - a9.yR, a8g++), ah.jf - a8j[0] !== a8j[1] && (a8j[1] = ah.jf - a8j[0], a8g++), this.l9(), (a94 = aa.a95(a9.eI)) !== a8j[5] && (a8j[5] = a94, a8g++), a8p(), a8j[7] += bb.a96, a94 =
			a8q(7), a8l !== a94 && (a8l = a94, a8g += 100), a94 = a9.ie ? bd.yy() : ac.gM[kw[0]], per = bH.dl(1e4 * a94, Math.max(a9.jO, 1)), a8j[3] = a94, a8j[4] !== per && (a8g++, a8j[4] = per), 8 === a9.jy && function() {
				for (var a7 = 0; a7 < 2; a7++)
					if (!b6.fu.gl(a7)) return bN.y3.yO(), 1;
				return
			}() || a8j[3] < a9.jO || ! function() {
				for (var a7 = ah.jf - 1; 0 <= a7; a7--)
					if (0 < ac.g0[ah.jh[a7]].length) return;
				return 1
			}() || bN.y3.yO()
	}, this.l9 = function() {
		a8k[2] && a9.yR !== a8j[2] && (a8j[2] = a9.yR, a8g++)
	}, this.a97 = function(a7) {
		var s6, a98, dk;
		return 2 !== a9.yP && (a7 % 2 == 1 && (aR.lH(1, 1), bb.dc = !0), a7 === a9.a2m ? (a8m = 0, a8s(), !1) : (-1 !== a7 || 0 !== a8n) && (a98 = a8m, a8m = a9.gi ? a7 / a9.a2m : (dk = performance.now(), 0 <= a7 && (s6 = dk - 392 * a7, a8n =
			0 === a7 || s6 < a8n ? s6 : a8n), 1 < (a8m = (dk - a8n) / (392 * a9.a2m)) ? 1 : a8m), a8s(), a8m !== a98))
	}, this.tJ = function() {
		tK.drawImage(canvas, ef, eh)
	}
}

function cI() {
	var wz, a99, a1, j7, a6N, a9A, a9B, a5i, canvas, li, a9C;

	function wc() {
		return Math.floor((at.a1 - a1) / 2) < aN.j7 + 2 * bY.gap ? at.j7 - j7 - 4 * bY.gap - aN.j7 : at.j7 - j7 - 2 * bY.gap
	}
	this.dU = function() {
		a9C = wz = !1, a6N = .61, a9A = .07, a9B = .09, li = a5i = j7 = 0
	}, this.resize = function() {
		var wg, ly, et, a9H, a9I, a3y;
		wz && (a1 = a9D(a1 = u.v.sd() ? Math.floor(.69 * at.pQ) : Math.floor(.5 * at.pQ), a4U(at.a1 - 2 * bY.gap, 10)), a1 = a9D(a1, Math.floor(3.57 * a4U(at.j7 - 2 * bY.gap, 3))), j7 = Math.floor(.28 * a1), (canvas = document.createElement(
			"canvas")).width = a1, canvas.height = j7, wg = canvas.getContext("2d", {
			alpha: !0
		}), ly = Math.floor(1 + j7 / 40), wg.clearRect(0, 0, a1, j7), wg.fillStyle = b7.mV, wg.fillRect(ly, ly, a1 - 2 * ly, j7 - 2 * ly), wg.lineJoin = "bevel", wg.lineWidth = 2 * ly, wg.strokeStyle = b7.mY, wg.strokeRect(ly, ly, a1 -
			2 * ly, j7 - 2 * ly), wg.imageSmoothingEnabled = !1, et = aX.get(a99), a9H = et.width, a3y = (1 === a99 ? .85 : 21 === a99 ? .666 : .9) * a6N * j7 / (a9I = et.height), wg.setTransform(a3y, 0, 0, a3y, Math.floor((a1 - a3y *
			a9H) / 2), Math.floor((j7 - a3y * a9I) / 2)), wg.drawImage(et, 0, 0), wg.setTransform(1, 0, 0, 1, Math.floor(a1 - a9B * j7 - a9A * j7 - ly), Math.floor(ly + a9A * j7)), function(wg, eY) {
			wg.lineWidth = Math.floor(1 + j7 / 80), wg.strokeStyle = b7.mY, wg.beginPath(), wg.moveTo(0, 0), wg.lineTo(eY, eY), wg.moveTo(0, eY), wg.lineTo(eY, 0), wg.stroke()
		}(wg, Math.floor(a9B * j7)), wg.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(f0, a9F, a6A, a9G) {
		wz || a9G && a9C || (a99 = a6A ? 21 : f0 ? 1 : 2, wz = a9C = !0, this.resize(), aH.qw(), aN.a67(), li = bb.lo, a5i = a9F ? 1 : 0)
	}, this.iS = function() {
		!wz || 1 <= a5i || (a5i = 1 < (a5i += 5e-4 * (bb.lo - li)) ? 1 : a5i, li = bb.lo, bb.dc = !0)
	}, this.gm = function(ef, eh) {
		return !(!wz || a5i <= 0 || (ef -= Math.floor((at.a1 - a1) / 2), eh -= wc(), ef < 0) || eh < 0 || a1 < ef || j7 < eh || (a1 - j7 / 3 < ef && eh < j7 / 3 && (wz = !1, bb.dc = !0), 0))
	}, this.tJ = function() {
		!wz || a5i <= 0 || (tK.globalAlpha = a5i, tK.drawImage(canvas, Math.floor((at.a1 - a1) / 2), wc()), tK.globalAlpha = 1)
	}
}

function dG() {
	var a9K = [0, 0],
		a9L = [0, 0];

	function a9O(e0) {
		return 3 !== a9K[e0] && 1 !== a9L[e0] && (a9L[e0] = 1, a9K[e0]++, bf.r6.r7(119, (a9K[0] << 2) + a9K[1]), 1)
	}
	this.a9M = new a9N, this.dU = function() {
		var f0 = bf.dp.data[119].value;
		a9K[0] = f0 >> 2, a9K[1] = 3 & f0
	}, this.a2x = function() {
		this.a9M.dU()
	}, this.iS = function() {
		this.a9M.iS()
	}, this.a3Y = function() {
		a9O(0) && aJ.a4a(L(108))
	}, this.a3Z = function() {
		a9O(1) && aJ.a4a(L(109))
	}
}

function a9N() {
	var a9P;
	this.dU = function() {
		a9P = !1
	}, this.iS = function() {
		var g6;
		if (function() {
				if (!a9P) {
					if (bb.jb() % 30 != 9) return;
					if (!b6.fu.kp(90)) return;
					a9P = !0
				}
				return 1
			}() && (! function() {
				var pG = aJ.a4w(956);
				if (pG) {
					if (b6.fu.kT(pG.player)) return 1;
					aJ.a3f(956, 0)
				}
				return
			}() && (-1 === (g6 = (a9.ie ? function() {
				var id = bd.kt(),
					eY = ah.jf;
				if (bc.k4[id])
					for (var yG = ah.jh, eW = bc.eW, a7 = 0; a7 < eY; a7++) {
						var g6 = yG[a7];
						if (eW[g6] !== id) return g6
					} else if (1 < eY) return kw[eY - 1];
				return -1
			} : function() {
				for (var a9X = ah.jf, jg = ah.jh, a9Y = jP, a7 = 0; a7 < a9X; a7++) {
					var g6 = jg[a7];
					if (0 !== a9Y[g6]) return g6
				}
				return -1
			})()) ? ! function() {
				var pG = aJ.a4w(957);
				if (pG && pG.a4Q) {
					if (aY.eP(pG.a4Q.eK << 2)) return 1;
					aJ.a3f(957, 0)
				}
				return
			}() : (aJ.yn(0, L(110, [ac.a4d[g6]]), 956, g6, b7.mY, b7.mV, -1, !0), 0)))) {
			var eY = aj.iF.kf;
			if (0 === eY) aj.iF.l4();
			else
				for (var dp = aj.iF.dp, a7 = 0; a7 < eY; a7++) {
					var eK = dp[a7];
					if (aY.eP(eK << 2)) return void aJ.yn(0, L(111, [bI.eg(eK), bI.ei(eK)]), 957, 0, b7.mY, b7.mV, -1, !0, void 0, {
						er: 1,
						eK: eK
					})
				}
		}
	}
}

function dH() {
	this.a9Z = new a9a, this.dU = function() {
		this.a9Z.resize()
	}
}

function a9a() {
	this.resize = function() {
		var a7, a9b = document.head.querySelector("style#ss");
		if (a9b)
			for (a7 = a9b.sheet.cssRules.length - 1; 0 <= a7; a7--) a9b.sheet.deleteRule(0);
		else(a9b = document.createElement("style")).id = "ss", document.head.appendChild(a9b);
		var a6V = "::-webkit-scrollbar",
			a9c = b6.pO.pZ(bY.rQ),
			hB = b6.pO.pZ(Math.max(b6.pO.qy(.012), 8));
		try {
			a9b.sheet.insertRule(a6V + "{width:" + hB + ";height:" + hB + ";}", a9b.sheet.cssRules.length), a9b.sheet.insertRule(a6V + "-thumb{background-color:white;}", a9b.sheet.cssRules.length), a9b.sheet.insertRule(a6V +
				"-track{background:" + b7.mU + ";}", a9b.sheet.cssRules.length), a9b.sheet.insertRule(a6V + "-track:horizontal{border-top:" + a9c + " solid white;}", a9b.sheet.cssRules.length), a9b.sheet.insertRule(a6V +
				"-track:vertical{border-left:" + a9c + " solid white;}", a9b.sheet.cssRules.length), a9b.sheet.insertRule(a6V + "-button{display:none;}", a9b.sheet.cssRules.length)
		} catch (e) {
			for (console.log("error 3425: " + e), a7 = a9b.sheet.cssRules.length - 1; 0 <= a7; a7--) a9b.sheet.deleteRule(0)
		}
	}
}

function dF() {
	this.a9d = !1, this.mO = !1, this.a2h = !1, this.a9e = [0, 0, 0, 0], this.a9f = function() {
		var ly, lz, mB, mC;
		this.a2h = this.a2h || this.mO, (this.mO || this.a9d && this.a2h) && (ly = bW.a9g[0], lz = bW.a9g[1], mB = bW.a9g[2], mC = bW.a9g[3], ly = ly < this.a9e[0] ? this.a9e[0] : ly, lz = lz < this.a9e[1] ? this.a9e[1] : lz, mB = mB > this.a9e[
				2] ? this.a9e[2] : mB, mC = mC > this.a9e[3] ? this.a9e[3] : mC, this.mO = !1, this.a9d = !1, ly === this.a9e[0] && lz === this.a9e[1] && mB === this.a9e[2] && mC === this.a9e[3] ? this.a2i() : ly <= mB && lz <= mC && a2z
			.putImageData(a30, 0, 0, ly, lz, mB - ly + 1, mC - lz + 1))
	}, this.a2i = function() {
		this.a2h && this.a9e[2] >= this.a9e[0] && this.a9e[3] >= this.a9e[1] && a2z.putImageData(a30, 0, 0, this.a9e[0], this.a9e[1], this.a9e[2] - this.a9e[0] + 1, this.a9e[3] - this.a9e[1] + 1), this.a2h = !1
	}, this.ya = function() {
		this.a9e[2] >= this.a9e[0] && this.a9e[3] >= this.a9e[1] && a2z.putImageData(a30, 0, 0, this.a9e[0], this.a9e[1], this.a9e[2] - this.a9e[0] + 1, this.a9e[3] - this.a9e[1] + 1), this.a2h = !1
	}, this.dU = function() {
		var ef, eh;
		this.a9d = !1, this.mO = !1, this.a2h = !1, this.a9e[0] = bO.ej, this.a9e[1] = bO.ek, this.a9e[2] = this.a9e[3] = 0;
		loop: for (ef = 1; ef < bO.ej - 1; ef++)
			for (eh = bO.ek - 2; 1 < eh; eh--)
				if (1 === a9h[aY.wB(ef, eh) + 2]) {
					this.a9e[0] = ef;
					break loop
				} loop: for (eh = 1; eh < bO.ek - 1; eh++)
			for (ef = bO.ej - 2; 1 < ef; ef--)
				if (1 === a9h[aY.wB(ef, eh) + 2]) {
					this.a9e[1] = eh;
					break loop
				} loop: for (ef = bO.ej - 2; 0 < ef; ef--)
			for (eh = bO.ek - 2; 1 < eh; eh--)
				if (1 === a9h[aY.wB(ef, eh) + 2]) {
					this.a9e[2] = ef;
					break loop
				} loop: for (eh = bO.ek - 2; 0 < eh; eh--)
			for (ef = bO.ej - 2; 1 < ef; ef--)
				if (1 === a9h[aY.wB(ef, eh) + 2]) {
					this.a9e[3] = eh;
					break loop
				}
	}
}

function L(value, a9i, tm) {
	var p5 = "number" == typeof value ? b3.a9j[value] : value;
	if (tm && b3.a9k() && (p5 = tm), a9i)
		for (var eY = a9i.length, a7 = 0; a7 < eY; a7++)
			for (var er = 0; er < 3; er++) p5 = p5.replace("{" + (10 * er + a7) + "}", a9i[a7]);
	return p5
}

function bw() {
	this.data = new a9l;
	var a9m = (new a9n).L84,
		a9o = (this.a9j = a9m, !1);
	this.dU = function() {
		var eY, g;
		a9o = !1, "en" !== bf.dp.data[12].value.split("-")[0].toLowerCase() ? bf.dp.data[12].value === bf.dp.data[145].value && 0 < bf.dp.data[146].value && (eY = bf.dp.data[146].value, (g = bf.ph.ts(eY, !1)).length === eY) && !!b6.pY.a1A(g) &&
			function(g) {
				var eY = g.length,
					a9u = bf.ph.ts(eY, !0);
				if (eY !== a9u.length) return !1;
				if (!b6.pY.a1A(a9u)) return !1;
				for (var kP = a9m.length, a7O = new Array(kP), a9v = kP === eY, g1 = Math.min(eY, kP), a7 = 0; a7 < kP; a7++)
					if (a7O[a7] = a9m[a7], a7 < eY && a9u[a7] === a7O[a7]) a7O[a7] = g[a7];
					else {
						a9v = !1;
						for (var es = 0; es < g1; es++)
							if (a9u[es] === a7O[a7]) {
								a7O[a7] = g[es];
								break
							}
					} return b3.a9j = a7O, a9v
			}(g) || (a9o = !0) : b3.a9j = a9m
	}, this.dW = function() {
		bc.dV(), aA.dV(), ba.dV(), bZ.dV(), aK.dU(), bl = new dr
	}, this.a9k = function() {
		return this.a9j === a9m || !a9m.length
	}, this.a9w = function() {
		var a9x;
		a9o && (a9o = !1, 0 !== a9m.length) && (a9x = bf.dp.data[12].value, aw.a9y.a9z(0, a9x.slice(0, 20)))
	}, this.aA0 = function(g) {
		g.length === a9m.length && (this.a9j = g, bf.r6.r7(145, bf.dp.data[12].value), bf.r6.r7(146, g.length), bf.ph.ty(g, !1), bf.ph.ty(a9m, !0), 0 === aW.zd()) && 5 === n.rm && n.s.aA1()
	}
}

function a9l() {
	var g = ["aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts", "btx",
		"bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "en", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fil", "fj",
		"fo", "fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac",
		"kek", "kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk",
		"ml", "mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "nb", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu",
		"rn", "ro", "rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "sh", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl",
		"tn", "to", "tpi", "tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu"
	];
	this.aA2 = function() {
		for (var aA3 = [], eY = g.length, a7 = 0; a7 < eY; a7++) aA3.push(g[a7]);
		for (eY++, aA3.unshift(bf.dp.data[12].tm), a7 = 1; a7 < eY; a7++)
			if (aA3[a7] === aA3[0]) {
				aA3.splice(a7, 1), eY--;
				break
			} try {
			if ("undefined" == typeof Intl) return aA3;
			for (a7 = 0; a7 < eY; a7++) {
				var p5 = new Intl.DisplayNames([aA3[a7]], {
					type: "language"
				}).of(aA3[a7]);
				p5 !== aA3[a7] && (aA3[a7] = aA3[a7] + ": " + p5)
			}
		} catch (e) {
			console.log("error 3646: " + e)
		}
		return aA3
	}, this.aA5 = function(aA6) {
		for (var p5 = bf.dp.data[12].value, eY = aA6.length, a7 = 0; a7 < eY; a7++)
			if (p5 === aA6[a7].split(":")[0]) return a7;
		return 0
	}
}

function a9n() {
	this.L84 = ["No Admin", "Helper", "Junior Moderator", "Moderator", "Senior Moderator", "Lead Moderator", "Head Admin", "Very Easy", "Easy", "Normal", "Hard", "Very Hard", "Impossible", "Type your message here...", "Send", "Activated", "Team {0}",
		"Team {0} has won the game!", "You have earned a participation reward of {10} gold.", "You have earned prize money of {10} gold.", "The following clans have won these glorious points:", "Validate the clan results by clicking here: ",
		"Back", "Error", "Error {10}", "Not Enough Gold!", "You need more gold to perform this action.", "Quit Game", "More", "This is a contest!", "Accept", "You have conquered {0}.", "You have been conquered by {0}.",
		"Congratulations! You have won the game.", "{0} has won the game.", "{0} has broken the non-aggression pact.", "{0} is attacking you!", "Choose your start position!", "You have surrendered!", "The game has ended in a stalemate!",
		"Error: {10}", "{0} has been immortalized!", "Neutral Land: {0}", "Player: {0}", "Strength: {10}", "Territory: {10}", "Team", "Bot Difficulty", "Index: {10}", "Coordinates: {10}", "Mountain: {10}", "Water: {10}", "Ship Owner: {0}",
		"Message to {0}", "Humanity triumphs! The undead have been beaten back.", "The Resistance", "Mankind's era ends, overrun by the relentless tide of the undead.", "The Virus", "If peace is agreed upon, the game ends in a stalemate.",
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
	var ef, eh, j7, se, aA7, aA8, aA9, aAA, aAB, a1, a1j, aAC;
	this.wz = !1, this.dU = function(p5, aAD) {
		if (1 === u.id && 13 <= u.f1 && u.f1 < 18) return aAD ? void(a1j = p5) : a1j !== p5 ? void 0 : void u.tq.saveString(200, p5);
		aAD && (a1j = p5, (aAC = document.createElement("a")).appendChild(document.createTextNode(a1j)), this.wz = !0, aAC.title = a1j, aAC.target = "_blank", aAC.href = a1j, aAC.style.textAlign = "center", aAC.style.color = b7.mY, aAC.style
			.position = "absolute", aAC.style.padding = "0px", aAC.style.margin = "0px", this.resize(), document.body.appendChild(aAC), bb.dc = !0)
	}, this.qw = function() {
		return !(!this.wz || (document.body.removeChild(aAC), this.wz = !1))
	}, this.gm = function(hd, he) {
		return !!this.wz && ((hd < ef || he < eh || ef + a1 < hd || eh + j7 < he || ef + a1 - se < hd && he < eh + se) && (bb.dc = !0, this.wz = !1, document.body.removeChild(aAC)), !0)
	}, this.resize = function() {
		var a3t, aAE;
		this.wz && (aAA = Math.floor(.8 * (u.v.sd() ? at.a1 > at.j7 ? .6 : .55 : .4) * at.pQ), se = Math.floor(.15 * aAA), aA7 = Math.floor(.35 * se), aA8 = Math.floor(.5 * se), aA9 = Math.floor(2.5 * aA8), j7 = se + aA7 + 3 * aA8, a3t = b6.pO
			.rP(1, aA7 / at.pU), aAB = Math.floor(at.pU * aM.measureText(a1j, a3t)), aAE = a1 = (aAA < aAB ? aAB : aAA) + 2 * aA9, a1 = Math.min(a1, at.a1 - 2 * (u.v.sd() ? 2 : 1) * bY.gap), a3t = b6.pO.rP(1, a1 / aAE * aA7 / at.pU), aAB =
			Math.floor(at.pU * aM.measureText(a1j, a3t)), ef = Math.floor((at.a1 - a1) / 2), eh = Math.floor((at.j7 - j7) / 2), aAC.style.font = a3t, aAC.style.top = Math.floor((eh + 1.4 * aA8 + se) / at.pU) + "px", aAC.style.left = Math
			.floor((ef + (a1 - aAB) / 2) / at.pU) + "px")
	}, this.tJ = function() {
		this.wz && (tK.fillStyle = b7.mV, tK.fillRect(ef, eh + se, a1, j7 - se), tK.fillStyle = b7.na, tK.fillRect(ef, eh, a1, se), tK.fillStyle = b7.mY, tK.lineWidth = bY.xR, tK.strokeStyle = b7.mY, tK.strokeRect(ef, eh, a1, j7), tK.fillRect(ef,
			eh + se, a1, bY.xR), tK.font = b6.pO.rP(1, .48 * se), b6.pO.textAlign(tK, 1), b6.pO.textBaseline(tK, 1), tK.fillText("You are leaving Territorial.io!", Math.floor(ef + (a1 - .5 * se) / 2), Math.floor(eh + .55 * se)), aI.a45(
			Math.floor(ef + a1 - .8 * se), Math.floor(eh + .25 * se), Math.floor(.5 * se)), tK.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function dY() {
	var gap, a8h, ef = [0, 0, 0, 0, 0],
		eh = [0, 0, 0, 0, 0],
		mA = [1, 1, 1, 1, 1],
		f0 = [!0, !0, !0, !1, !1],
		et = (this.fK = [!0, !0, !0, !1, !1], null);
	this.aAF = function(a1I, aAG) {
		et = a1I, f0 = aAG, a8h = [bG.aAH, bG.zY, bG.aAI, bG.aAI, bG.aAJ], this.dU()
	}, this.dU = function() {
		if (aX.sA()) {
			var a7, rt = Math.floor((u.v.sd() ? .261 : .195) * at.pQ),
				ru = Math.floor(.9 * rt),
				a6N = Math.floor(.17 * ru);
			if (gap = u.v.sd() ? 2 * bY.gap : bY.gap, mA[0] = rt / et[0].width, mA[1] = ru / et[1].width, mA[2] = a6N / et[2].height, mA[3] = a6N / et[3].height, mA[4] = a6N / et[4].height, mA[2] *= 1.7, mA[3] *= 1.07, ef[0] = gap, ef[1] = gap,
				ef[2] = gap, ef[3] = gap, ef[4] = Math.floor(2 * gap + mA[3] * et[3].width), eh[0] = gap, eh[1] = eh[0] + gap + mA[0] * et[0].height, eh[2] = eh[1] + gap + mA[1] * et[1].height, eh[3] = eh[2] + gap + mA[2] * et[2].height, eh[4] =
				eh[3], !f0[0])
				for (a7 = 0; a7 < 5; a7++) eh[a7] -= mA[0] * et[0].height + gap;
			if (!f0[1])
				for (a7 = 2; a7 < 5; a7++) eh[a7] -= mA[1] * et[1].height + gap
		}
	}, this.wz = function() {
		return !(7 === aW.zd() && u.v.sd())
	}, this.gm = function(hd, he) {
		if (et && this.wz())
			for (var a7 = f0.length - 1; 0 <= a7; a7--)
				if (f0[a7] && this.fK[a7] && ef[a7] < hd && eh[a7] < he && hd < ef[a7] + mA[a7] * et[a7].width && he < eh[a7] + mA[a7] * et[a7].height) return n.o(9, n.rm, new aAK("You are leaving Territorial.io.", b6.pO.a1i(a8h[a7]))), !0;
		return !1
	}, this.tJ = function() {
		if (et && this.wz()) {
			var a7;
			for (tK.imageSmoothingEnabled = !0, a7 = 0; a7 < 5; a7++) f0[a7] && this.fK[a7] && (tK.setTransform(mA[a7], 0, 0, mA[a7], ef[a7], eh[a7]), tK.drawImage(et[a7], 0, 0));
			tK.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function dR() {
	this.aAL = 0, this.aAM = null, this.sk = null, this.qb = null, this.s = null, this.st = null, this.qt = null, this.aAN = new aAO, this.zh = 0, this.dU = function() {
		this.aAL = bC.rp.uk(bf.dp.data[105].value), this.sk = new aAP, this.qb = new aAQ, this.s = new aAR, this.st = new aAS, this.qt = new aAT, this.s.dU(), this.zh = 1, aW.setState(0)
	}, this.zq = function() {
		this.aAM = null, this.sk = null, this.qb = null, this.s = null, this.st = null, this.qt = null, this.zh = 0, Math.random() < .001 && console.log(L(112))
	}
}

function aAP() {
	function aAh(g, s3, s4) {
		var aAi = g[s3];
		g[s3] = g[s4], g[s4] = aAi
	}
	this.sl = [
		[],
		[],
		[],
		[]
	], this.sm = [0, 0, 0, 0], this.aAU = function(aAV, qm, username, qp, qs, aAW, elo, color) {
		this.sl[aAV].push(this.aAX(qm, username, qp, qs, aAW, elo, color)), bk.aAL === qm && (bk.aAM = this.sl[aAV][this.sl[aAV].length - 1]), bk.s.aAY += 29 === n.rm && bk.s.qT[0] === aAV && 1 === bk.s.qT[2]
	}, this.aAX = function(qm, username, qp, qs, aAW, elo, color) {
		return {
			qm: qm,
			username: username,
			qp: qp,
			qs: qs,
			aAW: aAW,
			elo: elo,
			color: color
		}
	}, this.aAZ = function(e0, aAV, username, qp, qs, aAW, elo) {
		e0 = this.sl[aAV][e0];
		!b6.zC.startsWith(e0.username, "Censored") && b6.zC.startsWith(username, "Censored") && (e0.aAa = e0.username), e0.username = username, e0.qp = qp, e0.qs = qs, e0.aAW = aAW, e0.elo = elo, bk.s.aAY += 29 === n.rm && bk.s.qT[0] === aAV &&
			1 === bk.s.qT[2]
	}, this.aAb = function(e0, aAc, aAd) {
		var player = this.sl[aAc][e0];
		this.aAe(e0, aAc), this.sl[aAd].push(player), bk.s.aAY += 29 === n.rm && bk.s.qT[0] === aAd && 1 === bk.s.qT[2]
	}, this.aAe = function(e0, aAc) {
		var sk = this.sl[aAc];
		e0 >= this.sm[aAc] ? sk[e0] = sk[sk.length - 1] : (this.sm[aAc]--, 2 === aAc ? (sk.splice(this.sm[aAc] + 1, 0, sk[sk.length - 1]), sk.splice(e0, 1)) : (sk[e0] = sk[this.sm[aAc]], sk[this.sm[aAc]] = sk[sk.length - 1])), sk.pop(), bk.s
			.aAY += 29 === n.rm && bk.s.qT[0] === aAc && 1 === bk.s.qT[2]
	}, this.aAf = function(e0, qS) {
		bk.s.aAY += 29 === n.rm && bk.s.qT[0] === qS && 1 === bk.s.qT[2];
		var sk = this.sl[qS],
			pG = sk[e0];
		if (2 === qS) {
			if (e0 >= this.sm[qS]) {
				for (var aAg = this.sm[qS], elo = pG.elo; aAg && elo > sk[aAg - 1].elo;) aAg--;
				return aAg === this.sm[qS] ? void aAh(sk, this.sm[qS]++, e0) : (this.sm[qS]++, sk.splice(e0, 1), sk.splice(aAg, 0, pG), void(this.sm[qS] < e0 && aAh(sk, this.sm[qS], e0)))
			}
			sk.splice(this.sm[qS]--, 0, pG), sk.splice(e0, 1)
		} else e0 >= this.sm[qS] ? aAh(sk, this.sm[qS]++, e0) : aAh(sk, --this.sm[qS], e0)
	}
}

function aAO() {
	this.dd = function(e0) {
		if ((sm = bk.sk.sm[e0]) < 2) return !1;
		var qU = bk.s.qV[e0],
			aAj = 9 === qU.aAk ? 333 : 512,
			sm = Math.min(sm, aAj);
		8 === qU.aAk && (sm -= sm % 2);
		aAj = bk.sk.sl[e0].splice(0, sm), bk.sk.sm[e0] -= sm, sm = function(aAl) {
			if (bk.aAM)
				for (var eY = aAl.length, qm = bk.aAM.qm, a7 = 0; a7 < eY; a7++)
					if (aAl[a7].qm === qm) return a7;
			return -1
		}(aAj);
		return -1 === sm ? (bk.s.aAY += 29 === n.rm && bk.s.qT[0] === e0 && 1 === bk.s.qT[2], !1) : (8 === qU.aAk && (qU.aAo = (qU.aAo + (sm >> 1)) % 1024, e0 = sm - sm % 2, sm %= 2, aAj = aAj.slice(e0, 2 + e0)), ar.dU(qU, aAj, sm), !0)
	}, this.aAp = function(qU, aAl, aAm) {
		var eb = a9.data = new a2n,
			aAt = (eb.spawningSeed = qU.spawningSeed, qU.aAk < 7 ? (eb.gameMode = 1, eb.numberTeams = qU.aAk + 2) : 9 === qU.aAk ? (eb.gameMode = eb.isZombieMode = 1, eb.numberTeams = 2) : (eb.gameMode = 0, eb.battleRoyaleMode = 7 === qU.aAk ?
				0 : 10 === qU.aAk ? 1 : 2), eb.selectedPlayer = aAm, eb.isContest = qU.aAq, eb.mapType = bO.aAr(qU.eE) ? 0 : 1, bO.aAs(eb, qU.eE), eb.mapSeed = qU.mapSeed, eb.humanCount = aAl.length);
		eb.selectableSpawn = 1 === eb.gameMode || aAt < 100, eb.colorsData = new Uint32Array(aAt), eb.playerNamesData = new Array(aAt);
		for (var a7 = 0; a7 < aAt; a7++) eb.colorsData[a7] = aAl[a7].color, eb.playerNamesData[a7] = aAl[a7].username;
		if (2 === eb.battleRoyaleMode)
			for (eb.elo = new Uint16Array(aAt), a7 = 0; a7 < aAt; a7++) eb.elo[a7] = aAl[a7].elo;
		aW.setState(8), bO.a3(qU.eE, eb.mapSeed), a9.a2r()
	}
}

function aAQ() {
	var ds = ["", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "", "", ""],
		aAu = [b7.mm, b7.mn, b7.nY, b7.nF, b7.mo, b7.nJ, b7.n5, b7.mm, b7.mm, b7.mm],
		aAv = [
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
		aAw = [0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
		aAx = ["Your account is too new!", "The server couldn't process your request.", "Spam detected!", "You are muted!", "Player couldn't be found.", "You don't have permission for this operation!"],
		aAy = [
			["", " was muted. Duration: 1 Hour"],
			["The username of ", " was censored. Duration: 1 Minute"]
		];
	this.qc = function(code) {
		return {
			id: 13,
			fontSize: this.aAz(0),
			qg: [],
			qj: [{
				p5: "[Private Message] " + aAx[code],
				color: b7.nE,
				qv: 0
			}]
		}
	}, this.qd = function(qS, aB1) {
		var j7 = this,
			a1q = j7.aB2(qS, aB1.qm);
		return a1q || ((a1q = bk.sk.aAX(aB1.qm, bB.rp.xi(aB1.qm, 5), 1, 1e6, 1e6, 0, 0)).ql = 1), 0 === aB1.id ? {
			id: aB1.id,
			fontSize: j7.aAz(a1q.qp, a1q.qs),
			qg: [a1q],
			qj: [{
				p5: ": " + aB1.k,
				color: b7.mY,
				qv: j7.qr(a1q.qp, a1q.qs)
			}]
		} : 14 === aB1.id ? {
			id: aB1.id,
			fontSize: j7.aAz(0, 0),
			qg: [null, a1q],
			qj: [{
				p5: aAy[aB1.aB3][0],
				color: b7.nE,
				qv: 0
			}, {
				p5: aAy[aB1.aB3][1],
				color: b7.nE,
				qv: 0
			}]
		} : ((qS = j7.aB2(qS, aB1.target)) || ((qS = bk.sk.aAX(aB1.target, bB.rp.xi(aB1.target, 5), 1, 1e6, 1e6, 0, 0)).ql = 1), {
			id: aB1.id,
			fontSize: j7.aAz(0, 0),
			qg: [a1q, qS],
			qj: [{
				p5: function(aB1) {
					if (aB1.id < 15) return bl.e3(aB1.id - 1, bl.dx[aB1.id - 1][aB1.value]);
					return 0 === aB1.aB3 ? 32768 <= aB1.value ? " voted with " + (aB1.value - 32768 + 1) + " gold against " : " voted with " + (aB1.value + 1) + " gold for " : 1 === aB1.aB3 ? " sent " + (aB1.value / 100)
						.toFixed(2) + " Gold to " : " voted with " + aB1.value + " points for "
				}(aB1),
				color: b7.nE
			}, {
				p5: 15 === aB1.id ? function(aB1) {
					return 0 === aB1.aB3 ? 32768 <= aB1.value ? " to weaken the latter's admin position." : " to strengthen the latter's admin position." : 1 === aB1.aB3 ? "." : " to acknowledge the latter as clan leader."
				}(aB1) : bl.e5(aB1.id - 1, bl.dx[aB1.id - 1][aB1.value]),
				color: b7.nE
			}]
		})
	}, this.qn = function(player, qS, qk) {
		return player.username + (qk && player.aAa ? " (" + player.aAa + ")" : "") + (2 === qS ? " (" + (player.elo / 10).toFixed(1) + ")" : "")
	}, this.qo = function(qp) {
		return aAu[qp]
	}, this.aAz = function(qp, qs) {
		return qp < 2 || 5 < qp ? aAv[qp][0] : 3 === qp ? aAv[qp][qs < 1 ? 0 : qs < 8 ? 1 : 2] : aAv[qp][qs < 10 ? 0 : 1]
	}, this.qr = function(qp, qs) {
		return 0 === qs && aAw[qp]
	}, this.aB2 = function(qS, qm) {
		for (var sl = bk.sk.sl, sk = sl[qS], eY = sk.length, a7 = 0; a7 < eY; a7++)
			if (qm === sk[a7].qm) return sk[a7];
		for (var es = 0; es < sl.length; es++)
			if (qS !== es)
				for (eY = (sk = sl[es]).length, a7 = 0; a7 < eY; a7++)
					if (qm === sk[a7].qm) return sk[a7];
		return null
	}, this.qq = function(pG) {
		return !!bk.aAM && pG.qm === bk.aAM.qm
	}, this.aB6 = function(sk, aB7, aB8) {
		var z8 = [];
		loop: for (var a7 = aB7; a7 < aB8; a7++) {
			var aB9 = b6.zC.zD(sk[a7].username);
			if (aB9) {
				for (var es = z8.length - 1; 0 <= es; es--)
					if (aB9 === z8[es].name) {
						z8[es].g1++;
						continue loop
					} z8.push({
					name: aB9,
					g1: 1
				})
			}
		}
		if (z8.sort(function(er, es) {
				return es.g1 - er.g1
			}), 0 === z8.length) return "";
		for (var p5 = z8[0].name + ": " + z8[0].g1, a7 = 1; a7 < z8.length; a7++) p5 += "   " + z8[a7].name + ": " + z8[a7].g1;
		return p5
	}, this.aBA = function(qp, qs, aAW) {
		return 0 === ds[qp].length ? "Rank: " + (qs + 1) : ds[qp] + " Rank: " + (qs + 1) + (2 !== qp && aAW < 100 ? "   " + ds[2] + " Rank: " + (aAW + 1) : "")
	}
}

function aAT() {
	var aBB = null;
	this.qu = function(e, pG) {
		var a6U = e.target.getBoundingClientRect();
		this.show(a6U.left, a6U.top, pG), e.target.addEventListener("mouseleave", function remove() {
			e.target.removeEventListener("mouseleave", remove), bk.qt && bk.qt.qw(1)
		})
	}, this.show = function(ef, eh, pG, rO) {
		(aBB = aBB || new rK).show(ef, eh, function(pG, rO) {
			return (rO ? pG.username + "   " : "") + bk.qb.aBA(pG.qp, pG.qs, pG.aAW) + (0 < pG.elo ? "   Elo: " + (pG.elo / 10).toFixed(1) : "")
		}(pG, rO), rO)
	}, this.qw = function(rR) {
		aBB && aBB.qw(rR)
	}
}

function aAR() {
	function aBG(aBJ) {
		bk.s.aAY && 1 === bk.s.qT[2] && n.aBK(29).aBL(), bk.s.aAY = 0, n.aBK(29).aBM(), 0 !== bk.s.qV[bk.s.qT[0]].sY && !aBJ || n.aBK(29).aBN()
	}
	this.qV = new Array(4), this.qT = [0, 0, 1, 0], this.aAY = 0, this.aBD = [0, 0], this.qY = [], this.dU = function() {
		for (var a7 = 0; a7 < this.qV.length; a7++) this.qV[a7] = new aBE
	}, this.aBF = function() {
		aBG(!0)
	}, this.aBH = function() {
		for (var a7 = 0; a7 < bk.s.qV.length; a7++) {
			var qU = bk.s.qV[a7];
			0 === qU.sY ? qU.aBO = 0 : (qU.aBP = Math.max(qU.aBP - qU.aBO % 2, 0), qU.aBO++)
		}
		aBG(!1)
	}, this.aBQ = function(qS) {
		this.qT[0] !== qS || this.qT[2] || n.aBK(29).aBR()
	}
}

function aAS() {
	var aBS = null,
		aBT = null,
		aBU = 0,
		aBV = 0,
		aBW = null;

	function aBY() {
		6 < aBT.qp || (bk.st.qw(), n.o(8, 29, new rn(25, {
			ro: 0,
			qm: bB.rp.xi(aBT.qm, 5),
			rl: 0
		}, 29)))
	}

	function aBZ() {
		var ef = aBS.ef,
			eh = aBS.eh;
		bk.st.qw(), aBS = new sp([new q("Kick User", aBe, aBk(0)), new q("Block Chat", aBf, aBk(1)), new q("Censor Username", aBg, aBk(2)), new q("Elo Deduction", aBh, aBk(3)), new q("Gold Seizure", aBi, aBk(4))]), aBd(ef, eh), aBU = 2, aBV = 1
	}

	function aBk(id) {
		return !bk.aAM || bk.qb.qq(aBT) || bk.aAM.aAW >= aBT.qs || 0 === id && aBT.qs < 200 ? 1 : 1 - bl.dy(id, bk.aAM.aAW, 0)
	}

	function aBc() {
		return !bk.aAM || bk.qb.qq(aBT) ? 1 : 0
	}

	function aBl(id, e0) {
		return bk.aAM ? bk.qb.qq(aBT) ? 0 : bk.aAM.aAW >= aBT.qs ? 1 : 1 - bl.dy(id, bk.aAM.aAW, e0) : 1
	}

	function aBb() {
		var ef = aBS.ef,
			eh = aBS.eh,
			aBm = (bk.st.qw(), aBc());
		aBS = new sp([new q(bl.dx[5][0], function() {
			aBj(5, 0)
		}, aBm), new q(bl.dx[5][1], function() {
			aBj(5, 1)
		}, aBm), new q(bl.dx[5][2], function() {
			aBj(5, 2)
		}, aBm), new q(bl.dx[5][3], function() {
			aBj(5, 3)
		}, aBm)]), aBd(ef, eh), aBV = aBU = 2
	}

	function aBj(id, value) {
		aw.aBn.aBo(5, {
			id: id,
			value: value,
			qm: aBT.qm
		})
	}

	function aBe() {
		var ef = aBS.ef,
			eh = aBS.eh;
		bk.st.qw(), aBS = new sp([new q(bl.dx[0][0], function() {
			aBj(0, 0)
		}, aBl(0, 0)), new q(bl.dx[0][1], function() {
			aBj(0, 1)
		}, aBl(0, 1)), new q(bl.dx[0][2], function() {
			aBj(0, 2)
		}, aBl(0, 2))]), aBd(ef, eh), aBU = 3, aBV = 0
	}

	function aBf() {
		var ef = aBS.ef,
			eh = aBS.eh;
		bk.st.qw(), aBS = new sp([new q(bl.dx[1][0], function() {
			aBj(1, 0)
		}, aBl(1, 0)), new q(bl.dx[1][1], function() {
			aBj(1, 1)
		}, aBl(1, 1)), new q(bl.dx[1][2], function() {
			aBj(1, 2)
		}, aBl(1, 2)), new q(bl.dx[1][3], function() {
			aBj(1, 3)
		}, aBl(1, 3)), new q(bl.dx[1][4], function() {
			aBj(1, 4)
		}, aBl(1, 4))]), aBd(ef, eh), aBU = 3, aBV = 1
	}

	function aBg() {
		var ef = aBS.ef,
			eh = aBS.eh;
		bk.st.qw(), aBS = new sp([new q(bl.dx[2][0], function() {
			aBj(2, 0)
		}, aBl(2, 0)), new q(bl.dx[2][1], function() {
			aBj(2, 1)
		}, aBl(2, 1)), new q(bl.dx[2][2], function() {
			aBj(2, 2)
		}, aBl(2, 2))]), aBd(ef, eh), aBU = 3, aBV = 2
	}

	function aBh() {
		var ef = aBS.ef,
			eh = aBS.eh;
		bk.st.qw(), aBS = new sp([new q(bl.dx[3][0], function() {
			aBj(3, 0)
		}, aBl(3, 0)), new q(bl.dx[3][1], function() {
			aBj(3, 1)
		}, aBl(3, 1)), new q(bl.dx[3][2], function() {
			aBj(3, 2)
		}, aBl(3, 2))]), aBd(ef, eh), aBV = aBU = 3
	}

	function aBi() {
		var ef = aBS.ef,
			eh = aBS.eh;
		bk.st.qw(), aBS = new sp([new q(bl.dx[4][0], function() {
			aBj(4, 0)
		}, aBl(4, 0)), new q(bl.dx[4][1], function() {
			aBj(4, 1)
		}, aBl(4, 1)), new q(bl.dx[4][2], function() {
			aBj(4, 2)
		}, aBl(4, 2)), new q(bl.dx[4][3], function() {
			aBj(4, 3)
		}, aBl(4, 3)), new q(bl.dx[4][4], function() {
			aBj(4, 4)
		}, aBl(4, 4))]), aBd(ef, eh), aBU = 3, aBV = 4
	}

	function aBd(ef, eh, sv) {
		aBS.show(ef, eh, sv), bk.qt.show(aBS.ef, aBS.eh, aBT, 1)
	}
	this.aBX = function(e, pG) {
		aBU = 1, aBT = pG, aBS = new sp([new q(L(113), aBY, 6 < aBT.qp ? 1 : 0), new q(L(114), aBZ, function() {
			if (!bk.aAM) return 1;
			if (bk.qb.qq(aBT)) return 1;
			if (100 <= bk.aAM.aAW) return 1;
			if (bk.aAM.aAW >= aBT.qs) return 1;
			return 0
		}()), new q(L(115), aBb, aBc())]), aBd((aBW = {
			clientX: e.clientX,
			clientY: e.clientY
		}).clientX, aBW.clientY, 1)
	}, this.a0Y = function(code) {
		return 29 === n.rm && (0 < at.rW || !aBT || code.length < 1 || ("Escape" === code ? bk.st.qw() : (b6.zC.startsWith(code, "Numpad") || b6.zC.startsWith(code, "Digit")) && (code = parseInt(code[code.length - 1], 10), isNaN(code) || (0 ===
			aBU ? this.aBX(aBW, aBT) : 1 === aBU ? (code <= 1 ? aBY : 2 === code ? aBZ : aBb)() : 2 === aBU ? 1 === aBV ? (code <= 1 ? aBe : 2 === code ? aBf : 3 === code ? aBg : 4 === code ? aBh : aBi)() : (aBj(5, bH.ow(code - 1,
				0, 3)), bk.st.qw()) : (aBj(aBV, bH.ow(code - 1, 0, bl.dx[aBV].length - 1)), bk.st.qw())))), !0)
	}, this.qw = function() {
		aBU = 0, aBS && aBS.qw(), aBS = null, bk.qt.qw()
	}
}

function aBE() {
	this.sY = 0, this.eE = 0, this.mapSeed = 0, this.aAk = 0, this.aBp = 0, this.aBq = 0, this.aAq = 0, this.aBP = 0, this.spawningSeed = 0, this.zj = 0, this.aAo = 0, this.qW = [], this.qX = 1048575, this.aBO = 0
}

function cJ() {
	var aBr, aBs, aBt;

	function aBy(a7) {
		var button = aU.pz[a7],
			ef = button.ef,
			eh = button.eh,
			a1 = button.a1,
			j7 = button.j7;
		tK.fillStyle = button.aBw, tK.fillRect(ef, eh, a1, j7), a7 === aBr && (tK.fillStyle = aBt, tK.fillRect(ef, eh, a1, j7)), tK.lineWidth = bY.xR, tK.strokeStyle = aBs, tK.strokeRect(ef, eh, a1, j7),
			function(button) {
				var ef = button.ef,
					eh = button.eh,
					a1 = button.a1,
					j7 = button.j7;
				b6.pO.textAlign(tK, 1), b6.pO.textBaseline(tK, 1), tK.font = button.font, tK.fillStyle = aBs, tK.fillText(button.a58, Math.floor(ef + a1 / 2), Math.floor(eh + j7 / 2 + .1 * button.fontSize))
			}(button)
	}
	this.a1 = 0, this.j7 = 0, this.eh = 0, this.gap = 0, this.dU = function() {
		aBr = -1, aBs = b7.mY, aBt = "rgba(255,255,255,0.16)", this.pz = new Array(7), this.j7 = Math.floor((u.v.sd() ? .123 : .093) * at.pQ), this.a1 = Math.floor((u.v.sd() ? 3.96 : 4.2) * this.j7), this.gap = Math.floor(.025 * this.a1);
		var aBu = Math.floor(.26 * this.j7),
			aBv = b6.pO.rP(1, aBu);
		this.pz[0] = {
			ef: 0,
			eh: 0,
			a1: Math.floor(.6 * this.a1 - this.gap / 2),
			j7: this.j7,
			a58: "Multiplayer",
			font: aBv,
			aBw: "rgba(22,88,22,0.8)",
			fontSize: aBu
		}, aBu = Math.floor(.18 * this.j7), aBv = b6.pO.rP(1, aBu), this.pz[1] = {
			ef: 0,
			eh: 0,
			a1: this.a1 - this.pz[0].a1 - this.gap,
			j7: this.j7,
			a58: "Single Player",
			font: aBv,
			aBw: "rgba(22,88,88,0.8)",
			fontSize: aBu
		}, this.pz[2] = {
			ef: 0,
			eh: 0,
			a1: this.a1,
			j7: Math.floor(.3 * this.j7),
			a58: "",
			font: this.pz[1].font,
			aBw: "rgba(100,0,0,0.8)",
			fontSize: this.pz[1].fontSize
		}, this.pz[3] = {
			ef: 0,
			eh: 0,
			a1: this.a1,
			j7: this.j7,
			a58: "Back",
			font: this.pz[0].font,
			aBw: "rgba(0,0,0,0.8)",
			fontSize: this.pz[0].fontSize
		}, this.pz[4] = {
			ef: 0,
			eh: 0,
			a1: this.a1,
			j7: Math.floor(.3 * this.j7),
			a58: "The game was updated!",
			font: this.pz[1].font,
			aBw: "rgba(100,0,0,0.8)",
			fontSize: this.pz[1].fontSize
		}, this.pz[5] = {
			ef: 0,
			eh: 0,
			a1: this.pz[0].a1,
			j7: Math.floor(.8 * this.j7),
			a58: "Reload",
			font: this.pz[0].font,
			aBw: "rgba(0,100,0,0.8)",
			fontSize: this.pz[0].fontSize
		}, this.pz[6] = {
			ef: 0,
			eh: 0,
			a1: this.pz[1].a1,
			j7: this.pz[5].j7,
			a58: "Back",
			font: this.pz[0].font,
			aBw: "rgba(0,0,0,0.8)",
			fontSize: this.pz[0].fontSize
		}, this.a7R()
	}, this.a7R = function() {
		this.eh = Math.floor(.54 * at.j7), this.pz[0].ef = Math.floor(.5 * at.a1 - .5 * this.a1), this.pz[1].ef = this.pz[0].ef + this.pz[0].a1 + this.gap, this.pz[2].ef = this.pz[3].ef = this.pz[0].ef, this.pz[4].ef = this.pz[5].ef = this.pz[0]
			.ef, this.pz[6].ef = this.pz[1].ef, this.pz[0].eh = Math.floor(.54 * at.j7), this.pz[1].eh = this.pz[0].eh, this.pz[2].eh = Math.floor((at.j7 - this.pz[2].j7 - this.pz[3].j7 - this.gap) / 2), this.pz[3].eh = this.pz[2].eh + this.pz[2]
			.j7 + this.gap, this.pz[4].eh = Math.floor((at.j7 - this.pz[4].j7 - this.pz[5].j7 - this.gap) / 2), this.pz[5].eh = this.pz[6].eh = this.pz[4].eh + this.pz[4].j7 + this.gap
	}, this.aBx = function() {
		aBy(0), aBy(1)
	}, this.aBz = function() {
		aBy(2), aBy(3)
	}, this.aC0 = function() {
		aBy(4), aBy(5), aBy(6)
	}, this.a00 = function(ef, eh, lH) {
		var a7 = -1;
		return 0 === aW.zd() ? a7 = this.a0U(ef, eh, 0, 2) : 3 === aW.zd() ? a7 = this.a0U(ef, eh, 3, 1) : 5 === aW.zd() && (a7 = this.a0U(ef, eh, 5, 2)), aBr !== a7 && (aBr = a7, lH) && (bb.dc = !0), -1 !== a7 && (aP.qQ(), !0)
	}, this.a0U = function(ef, eh, aC1, size) {
		for (var a7 = aC1; a7 < aC1 + size; a7++)
			if (ef >= this.pz[a7].ef && eh >= this.pz[a7].eh && ef <= this.pz[a7].ef + this.pz[a7].a1 && eh <= this.pz[a7].eh + this.pz[a7].j7) return a7;
		return -1
	}
}

function cK() {
	var aC3, aC4, a5H, a5R, a6F, aC5, aC6, aC7, aC8, a3t, fontSize, li, aC9, aCB, aCA = 0;

	function aCE() {
		return aw.s.aCF[(aC9 + aCA) % aw.s.aCG]
	}

	function aCJ() {
		__fx.customLobby.isActive() ? (l.zo(3249), __fx.customLobby.setActive(false)) : l.zo(3249)
	}

	function aCP(eh, a78, sY) {
		var ly = Math.floor((at.a1 - a5R) / 2) + aC6,
			mB = ly + Math.floor(sY * (a5R - 2 * aC6));
		tK.lineWidth = a78, tK.beginPath(), tK.moveTo(ly, eh), tK.lineTo(mB, eh), tK.lineTo(Math.floor(ly - aC6 + sY * a5R), eh + a5H), tK.lineTo(ly - aC6, eh + a5H), tK.closePath()
	}
	this.dU = function() {
		aW.setState(6), aC3 = 0, aC4 = 1, aC7 = "rgba(0,220,120,0.4)", aC8 = "rgba(0,0,0,0.8)", this.resize(), bb.dc = !0, aC9 = 0, aCB = !1, aC9++, li = bb.lo, aw.s.aCH(aCE(), 4) && (aCB = !0, aw.aBn.aCI(aCE()))
	}, this.resize = function() {
		a5R = Math.floor((u.v.sd() ? .5 : .25) * at.pQ), a6F = a5R + 12, a5H = Math.floor(.125 * a5R), aC6 = 3 * a5H, aC5 = Math.floor(.225 * a5R), fontSize = Math.floor(.3 * a5H), a3t = b6.pO.rP(0, fontSize)
	}, this.aCD = function(er) {
		aCA = er
	}, this.zg = function(za) {
		za === aCE() && (aCB = !1, aCJ())
	}, this.aCK = function(za) {
		6 !== aW.zd() || aCB || (li = bb.lo, aCB = !0)
	}, this.gm = function(ef, eh) {
		var ly = Math.floor((at.a1 - a6F) / 2),
			lz = Math.floor(.5 * (at.j7 - bY.gap - a5H - aC5)) + a5H + bY.gap;
		return ly < ef && ef < ly + a6F && lz < eh && eh < lz + aC5 && (this.a0g(), aU.a00(ef, eh, !1), !0)
	}, this.a0g = function() {
		aw.s.zp(3260), __fx.customLobby.setActive(false), n.s.t()
	}, this.iS = function() {
		6 === aW.zd() && (aCB ? bb.lo > li + 12e3 && l.zo(3250) : bb.lo > li + 12e3 && aCJ(), 100 < (aC3 += .07 * aC4 * (aC3 < 16 ? 5 + aC3 : 84 < aC3 ? 105 - aC3 : 17)) ? (aC3 = 100, aC4 = -1) : aC3 < 0 && (aC3 = 0, aC4 = 1), aC7 = "rgba(0," +
			Math.floor(190 - 1.9 * aC3) + "," + Math.floor(120 - 1.2 * aC3) + "," + (.4 + .004 * aC3) + ")", aC8 = "rgba(0," + Math.floor(1.9 * aC3) + "," + Math.floor(1.2 * aC3) + "," + (.8 - .004 * aC3) + ")", bb.dc = !0)
	}, this.tJ = function() {
		var ef = Math.floor((at.a1 - a6F) / 2),
			eh = Math.floor(.5 * (at.j7 - bY.gap - a5H - aC5));
		! function(title, eh, a78, sY) {
			tK.fillStyle = aC8, aCP(eh, a78, 1), tK.fill(), tK.fillStyle = aC7, aCP(eh, a78, sY), tK.fill(), tK.strokeStyle = b7.mY, aCP(eh, a78, 1), tK.stroke(),
				function(aCR, eh) {
					b6.pO.textAlign(tK, 1), b6.pO.textBaseline(tK, 1), tK.font = a3t, tK.fillStyle = b7.mY, tK.fillText(aCR, Math.floor(.5 * at.a1), Math.floor(eh + .58 * a5H))
				}(title, eh)
		}(L(116), eh, 3, aC3 / 100),
		function(ef, eh, a1, j7, a58) {
			tK.fillStyle = b7.mT, tK.fillRect(ef, eh, a1, j7), tK.lineWidth = 3, tK.strokeStyle = b7.mY, tK.strokeRect(ef, eh, a1, j7);
			var eY = Math.floor(.3 * j7);
			b6.pO.textAlign(tK, 1), b6.pO.textBaseline(tK, 1), tK.font = b6.pO.rP(0, eY), tK.fillStyle = b7.mY, tK.fillText(a58, Math.floor(ef + a1 / 2), Math.floor(eh + j7 / 2 + .1 * eY))
		}(ef, eh + a5H + bY.gap, a6F, aC5, L(22))
	}
}

function cL() {
	var zV = 0;
	this.dU = function() {
		aU.dU(), zV = 0
	}, this.setState = function(aCS) {
		zV = aCS
	}, this.zd = function() {
		return zV
	}, this.aCT = function() {
		this.setState(8), n.r()
	}, this.a0Y = function(e) {
		if (!bO.v0) return !1;
		if (!(bb.lo < 400)) {
			if ("Enter" === e.key || "Escape" === e.key) {
				if (this.aCU()) return !0;
				if ("Enter" === e.key) {
					if (0 === zV) return !0;
					if (7 === zV) return !0
				}
			}
			return !1
		}
	}, this.aCV = function() {
		bV.resize()
	}, this.aCU = function() {
		return !!bV.qw()
	}, this.gm = function(ef, eh) {
		!bO.v0 || bV.gm(ef, eh) || 6 === zV && aV.gm(ef, eh) || bU.gm(ef, eh) || aP.gm(ef, eh)
	}, this.a00 = function(ef, eh) {
		!aP.a7K && aU.a00(ef, eh, !0) || aP.a00(ef, eh)
	}, this.click = function(ef, eh) {
		aP.a0P()
	}, this.a03 = function(ef, eh, deltaY) {}, this.aCW = function() {
		aU.a7R(), bb.dc = !0
	}, this.tJ = function() {
		8 !== zV && 10 !== zV && (tK.imageSmoothingEnabled = !0, this.wa(), 0 !== zV && (aP.tJ(), aK.tJ(), this.aCX(), bU.tJ()), 0 !== zV && 6 === zV && aV.tJ(), bV.tJ(), n.tJ())
	}, this.wa = function() {
		var aCZ, aCY;
		if (__fx.makeMainMenuTransparent) tK.clearRect(0, 0, at.a1, at.j7);
		else bO.v0 ? (aCY = at.a1 / bO.ej, aCZ = at.j7 / bO.ek, tK.setTransform(aCY = aCZ < aCY ? aCY : aCZ, 0, 0, aCY, Math.floor((at.a1 - aCY * bO.ej) / 2), Math.floor((at.j7 - aCY * bO.ek) / 2)), tK.drawImage(bO.v2, 0, 0), tK.setTransform(1,
			0, 0, 1, 0, 0), tK.fillStyle = b7.mT) : tK.fillStyle = b7.mP, tK.fillRect(0, 0, at.a1, at.j7)
	}, this.aCX = function() {
		var eh = Math.floor(.3 * at.j7),
			canvas = aX.aCa("territorial.io"),
			hG = (hG = 1.75 * at.j7 / canvas.width) * canvas.width < .98 * at.a1 ? .98 * at.a1 / canvas.width : hG,
			ef = (tK.globalAlpha = .15, tK.imageSmoothingEnabled = !1, Math.floor(.5 * (at.a1 - hG * canvas.width))),
			ef = Math.floor(ef / hG),
			eh = Math.floor(eh - .5 * canvas.height * hG),
			eh = Math.floor(eh / hG);
		tK.setTransform(hG, 0, 0, hG, ef, eh), tK.drawImage(canvas, ef, eh), tK.setTransform(1, 0, 0, 1, 0, 0), tK.globalAlpha = 1, tK.imageSmoothingEnabled = !0
	}
}

function ck() {
	this.aAo = 0;
	var aCc, aCd, aCe, aCf, aCg, aCh = this.aCb = 0;

	function aCl() {
		aCf = aCg = null, aCh = 0
	}
	this.dU = function(qU, aAl, aAm) {
		n.r(), bk.zq(), aW.setState(10), aCf = qU, aCg = aAl, aCh = aAm, this.aAo = qU.aAo, this.aCb = aAm, aCc = 0, aCd = bb.lo + 4500, aw.s.zi > aw.s.aCi && (qU.zj += aw.s.aCi), aw.s.zj = qU.zj, aw.s.zi === qU.zj ? (console.log("direct pass"),
			aCe = 0) : (console.log("delayed pass"), aw.s.close(aw.s.zi, 3247), aCe = 2, aw.s.aCH(qU.zj, 5) && aw.nl.aCj()), tK.imageSmoothingEnabled = !0, aW.wa();
		aAl = aX.aCa("loading"), aAm = (u.v.sd() ? .396 : .25) * at.pQ / aAl.width;
		tK.setTransform(aAm, 0, 0, aAm, Math.floor((at.a1 - aAm * aAl.width) / 2), Math.floor((at.j7 - aAm * aAl.height) / 2)), tK.imageSmoothingEnabled = !1, tK.drawImage(aAl, 0, 0), tK.setTransform(1, 0, 0, 1, 0, 0)
	}, this.lF = function() {
		0 < aCe && bb.lo > aCd && (aCe--, aCd += 4500, 0 === bb.aCn) && 0 === bb.jb() && (0 === aCe && aw.s.zj < aw.s.aCo && (aw.s.zj += aw.s.aCi), aw.s.aCH(aw.s.zj, 5))
	}, this.aCp = function() {
		return 10 === aW.zd() && (bk.aAN.aAp(aCf, aCg, aCh), aCl(), !0)
	}, this.aCq = function() {
		10 === aW.zd() && 2 <= ++aCc && (bk.aAN.aAp(aCf, aCg, aCh), aCl())
	}
}

function cM() {
	var aCs, canvas, yl, aCt;

	function aCz(e0, name, aD0, p5) {
		yl[e0] = name, canvas[e0] = new Image, canvas[e0].onload = function() {
			! function(e0, aD0) {
				var a2B, a2C = null;
				7 === aD0 ? a2B = b6.a0m.a2E : 8 === aD0 ? (a2B = b6.a0m.a2H, a2C = .1) : 3 === aD0 ? (a2B = b6.a0m.a2F, a2C = .06) : 5 === aD0 ? a2B = b6.a0m.a2I : 6 === aD0 ? a2B = b6.a0m.a2D : 4 === aD0 && (a2B = b6.a0m.a2J);
				canvas[e0] = b6.a0m.a2A(canvas[e0], a2B, a2C)
			}(e0, aD0), aD2()
		}, canvas[e0].onerror = function(e) {
			console.error("Error loading image at index", e0, "Error:", e), aD2()
		}, canvas[e0].src = "data:image/png;base64," + p5
	}

	function aD2() {
		aCs--, aCw()
	}

	function aCw() {
		0 === aCs && (aCs = -1, aCy(), bb.dc = !0, canvas[7] = aCt, canvas[8] = aCt, canvas[9] = aCt, canvas[10] = aCt, 5 === n.rm) && n.aD4().aD5.resize()
	}

	function aCy() {
		aH.a3M(), bU.aAF([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== u.id, 1 !== u.id, !0, !0, !0]), af.v5 = new wy, af.v5.dU(), aq.dV()
	}
	this.dU = function() {
		if (void 0 === canvas) {
			aCs = 23, canvas = new Array(aCs), yl = new Array(aCs), (aCt = document.createElement("canvas")).width = 1;
			for (var a7 = aCs - (aCt.height = 1); 0 <= a7; a7--) canvas[a7] = aCt;
			aCy(), aCz(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aCz(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aCz(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aCz(3, "orders", 6,
					"iVBORw0KGgoAAAANSUhEUgAABqQAAABkBAMAAAASxkyFAAAAGFBMVEUAAAAsLixKS0lkZmOFh4SqrKnMzsv///8J7h1xAAAgAElEQVR42u1dS3fbNrCm+NJWaRN7q9vW8la3Sayt0trmVkltcyu/xK0Ti+Tfv8SLmAEGIBTL5yateHrSWNHnwevDDAYzwyging83Vds9zePfUeBzQBwQB4Tz+ci/L57mnwPigDggXoRIAYCDlgfEAXFAfD/iY2s9/xwQB8QB8b2IS8G8x6s/J6PfL4TJ2D4cEAfEAfECRHM1UT+PLqoBzAFxQBwQbsQZ+/fHKfwovmGf3R8QB8QBsTsiIy1Dbj2uQhDxzojogDgg/sUI5stoiH/LKpdfw0D8sTMiOiAOiH8vIipdbGPsrAMQV7shRmU92VlG9JqIk8q4afghWnVA/KyIWfcPn2n99a77p7tBRLbdDZG37XpXGbu3agfEWWs5cF6pVWnVfP6Ren5AvAaCqbUHj6fDVm0m4my7G6LE3A6SEU12RgT34526aLh/PRm6683klWW8KiLdPPyArfpeRL56DRns09rtCyyJ32cg4mq7G4Kt3s78+zANlxFFqx1bFd6PWF+LL19LhnyStr6BNsQeZaTGQnh8lX6MurG6/a5V0q/P5tVGd3dE0Ux2QFxuZITfJz8i4zyLp5HbdbGiEPDn7U6IlC/eUdk+h8uIkvWOrQrvx6m+D69fS0b/43JUrQMRyaanRXSy+TyAKHHDyu2r9CNnS+q7Volcw62k5GuM7s6IuG2/7YDQW68mFYFgNOvsndxJ9jNrIygNd3yBKTWIKPjihdbfsIwo/bpjq4L7EcMYk+XryNCnyOht9TUQUegjZ9LN69SLiKt15Njm9tmP07Zp2/n3rBK9KpvXGt2dEUfGjA8gfr3RpHqYOBGZMO6LtnboqZFJwwwdB7jdtA1G3Gw2la0TBmV0i3G7W6vC+5HzbWcZ8wvy59eRoX+eVu1TGGIERoi1ce1FGKZCAbbfgH4s7gL7UbTzBeX9Ch0rvW+9wujujGCuvJ3WlVgkKGrWQrCtcCX+59JTWWvOliV0G4rIUNjht2AZ0ei4nuzUqvB+FGpcz0yjZn8y9FlqjbydPkQKmrPo/v7kReRorYwQcQf7kVTNPKwfRTs5JgchcKz4vK9faXR3RfATSLvbutLx6Mp1ayK6b9RiUDtOTVynPGiwKgQUug1F5IhS62AZ7zZWhsoAIrwfbb8PlaYdsDcZ+t/XvQU3hEiFF6dv2ZMXsUBTn7VIFw61qrDO2C7Eon2oOsMv6UygZvsd88Hn/em1RndHBD9Eb3eUMdKK6jOFYD73Va+/tk6q3xGIfoezgU4E1lLTUBkn9r3RACK8H2zlftWtW7+GDP2M14RKpxEJ6/JcH0HWXkSBjNYcU2qgVZkdWeNCCPfEpbUlBo6VOLduX2t0d0OMKtGJzWQ3GWdq/ZL9iKretmAa7ZFuVwXtocrw+OQE050I5ApoQmVk1L2Rv1Xh/cj1wmUr9zl6BRng3Lm2fFROBFjoiFIk4giN5xhTyt8qsbQM5elAsAn8Utr+0b/DxipBuH2P7o4IafelO8/5u96X9Zv9pQzcMsTWggKOkRWFiNBRJAgBMyO3gTJG9L2Rt1Xh/RiDtbgwT5R7kgH+dW2Nlnes1ha7HIgMfePUoJS3Vey60rrOdCG631zYe+JsGzZWGcLZiNmGPbAl76/5R9d/7n8+UrEITw0XZoCME7l+483URHR8AOfSxHVNnACfHkKofWcbjFgASj0Fyjii7418raIfElEAN0luXrrsR8blZtUb6mvtQTrZ3HtlaEoleDshECnbEHslfr4IH11ux6yOTBvAhRgDSrV6iW3DxipHlLIQsblzguT0xz3OOfjta8s0CZFxJlo5E0iIiLD/O2sdxC/0SjM95kckpZyInPZO+GSMKse9kadVjodClPiU0gb3PFgG88Nei6farNvHVv0gt0eXjLI/5WUtbpiNyJcg1Cl+MCnl6ceZOKSWrXXbSCLGhJY6EysgYKwWWLuZCLU6vlqeANW6/cw558GKc2GamssqSMYlV1LEDGaEG+ALra9XNIJPBSHXhUjBGK3CZCCXxnNYq9yHVQsBKZVYlNqHjNN207f/cj1b9z9shGSXjEU/smbMgo0Yr4/0iGbbY0ypvy3Ee9XjG3mMYiaKTrJ772yVraV4Lt42bKwqTCkTMdaUiq+vN0aph+ne5lyMbrfSR1c8KBYv4BAZo5IrKbkgwfcW5uErcwTdVmotm4hEnYqySRBiBIZoHiajQC6NSUirPIdVC1GCYYstSu1DRlEnffvP1vm66vtSfvXJGPeWbm4mEViI/CHVKyPfjvudnj+dyY8RcbthSd9vebq38Jdk/K9X3aQkF5vW2SpEqTv25apfk4NjlZpnMAMBKFXa1VNWe5tzye5bh04IkZE+yNjQOUIQeq3TU42pp96utGYzEbOeUiuHvjUQYKiiMASu9bT0IJZeo9ohY4BSzp4PWxoKUdTa0XnRlGu9PZTffDK0bjpurQtIA5FtpmXvtcvrHH0/ac0Z5A2ScSzqylLeVGw2cm7oViFKGa6mwbGamSdiA6EpFRMy1nuaD237PKhj0ep75nxG2KMpodeYg/AT/ODNWdeXTK5lC1H1lLKvW0jEqZNSDkTauq6HTUTSLn3H1CUtAxp+aXCr/JYGRkDDb102J6bh55KR9ZQqDJPXRsSbdd6fhPMGUyq1ZhCsWMaobJUvRR4mmBu6VT5KDY5VZVrvBkJTKm8dWmoP8wFOdQ/S4RmltzvPuUpgmAIEa/eEchCCLDleYXPF7LU1hUj7Ac0MO86FyOlrKTfCGNxnNyI371awdnyiZRTg2JEHt8rzWAjmnngvnqr+ZVr0P6h5cMhI+3CZ0vSPmohkefnIpljaiU2KDMW0A2OEptRmybabVc48W8C/5myVj1JDY5Vh74ON0JSiZCz3NB/Q58UiW9nSOEXhXEEyZuAoohAsVjaiL7KUnvq1lH0plWqvqV/LKfXZXMMkInVSyoE4xuNauxFF69bTKl7YlrEAqHFwq3yPhbjsx+ao3dz04ma9i42WoV3nleUfNRDZbb5ZnsmdPM3av9BA8XwShOgoJe53WYmDuGxXOV9cspRWI3Q12SofpYbGakEFokGEphRxlGon+5oP6PPqduG80wYVcnUHyZBr/xYiut+zRicNpZg6QZ96d5DoSy7WWmXNrKZUbV5BkAh9NGrsSwsKsTDK5roRhDGJpE5JGZBGJUFKVz/cj4XIeouUGwvL/ntLvwxwJjdNEAOR1XHFHRRMiZ/92q7hhX6+KlcxRnSUis/Pz/9S15Edpdqamxl/nJ///YsYR7JVXkr5xyohzsMY4aeUcKPsYT6Qz6uZ5LVpngTJEIaf1G4SkYB5Ku4niH/MhPoIVnHGXRuJHYSuKWWcZGgE6MwzYRfYiDfmBL5xIbLWo6VO5eZoywBhB4lpX/n64TXeMSJHBN7qNq39MpRyiq2rExPRsfNss5QOiptltS3BEhk3l39VGBGDa1rOV+4K+aS9NM5WeSnlH6ucju0ECD+lRJf2MB+A3bzva74o17vN+USoqTuhjQSC/Q+IQMUk2NSkaO3zX58ZauAYUQonSNIIbbAT5x4KYY+tC3FqWUcG+el+xNqaPCUr4Tj64XlMxEJvH5BSpR4xWoY6QqXGOrQReXufVLW8qt+sy2YBflfOrE2M6CklDZGVWO6Pc0gpslVeSvnHqqIMDYQYoJQyRl46H/iAvsomVgjQsIzRI1dT3SpeLHtE14Eashbenc/ugDp56o/3Y2zdjUpEqXpiOwTGtjnKEgPa5mHicCGMzeOSj1IQYaRmnPPgsKupJk5Dy6j63G1i5Xr6EfldIQABEgTGj3rqwMe0DOXoywgzGSOybm4v2zvhoGjrGfMxzvV20lQNRjDSxO8/XNz0O7Vc7Y/n5+/nilJUq/yU8o1VRponCDFEqef9zIdcVdL1uhoJfXO705wfdRSacSUliC7cXwXoXFphTk1BkZO12Gm3GAEHaUtdElMIxUXOp9g+vtoIP6UAIobrLr7RLq2/Ikg4W8apTH3h6rOmDtXOfjgeAzECN9Tjq55SKYrXpWScyrVKFXzAiO533SVVc8M72TYfmYdhCY3+GiMYaTJk/MAfFKWoVvkp5RurkgxEQ4ghStV7mQ8VcCCVxlzqz+kucz5i+2FcMSUl+i7+VxnmY7udIBqi+wB+/jLOa2cGpbb2qdA64Y20r700QxIpxIdz83Egcr6LZUvz9qtbjZvqiduoT6QMYeBuBAnra/T84+zH4HkYeif0+gaUypGngpIxllQaE1w3EFWnps4Ykdr7brbvsT/jjC9jiAijFNUqP6U8Y5XQgWgIMUSpJtrHfCi7b5VJ/0ImUsxBtMKgjCO+NczueFUQ7Z/AnXtn5PhVOHCIG5YYofWYpBSmCIFAKdl2CTQSMXTyVAhxwlyIO7XK2t5SuSxtGSet53l4YavENVHb11oBlDoFH9MylHai8mcMRPeV+0TmPc3apoTKIEmqxwlGhFGKapWfUp6xWtBX/AgRRCmNKPkvq/jnpaJrH2Jc9vduVqtKKeVs83itPGbLqHwOX4miLE08593qHROJcXBgbdF+v8ywtLphnhuIrDUohQtvEgjusOWvFBnJlzQuhxD+ByCEm1xUr86syZgqN7ol46z1PrcvaxVfTHXbzxagVNl9/NXb80zeYJQtDtkjELw0lrgpWXeDvIGIxapYGogwSlGt8lPKPVYJfbOIEUGGn0aEUIotMbNVCS59EosOpOD4OTTnmbJgE6V2GYKdWu073gfbcV8rXq4yVzyrolRtMNlEKH9Goy+n5n7E0NMjsl4XdWNYEL4i5Sc1ZLzzM0oYAAIhoiQztYKSjQzdFp1hiqCS7hwso3poF7VNqepaf0z3XOUdVJQvEyFS9p36t0pMQoEzPIv68u9rjBj5KLVMlCYhWuWnlHsGF8AOF490L0JEkHtCI8Io9Wy1Spxp/hGEeSN+XLIWfgtdiaWyYMf94bBDdGZFTXDv3nLcf1O/ZY0RII9JUao1SsIaCCrMpPYicqf6NxHHfCbE6YOfPh9/r9Bk5HJKsIykGqBU1yWFqPTi2yqzt45g5JqiFJIRt1ftRxXZoimVdh/mjXus1Pa5Ele+a3tWASLjOYQPR2KXyvDILprypsaIQEoRrRqgFEb8zuKurIsgM+JCI4YotcSIMEo1Vj+q3vj6/WJzx79Y8xY2kXc+DE7WateTjsh1137rYvSk59TMClQt2qexlbBoUspIYnMjWpgg4EaMhyjVI0q5+tmKzsUpDdKl6T2CWEYxxKhuvBQCU+q0H52qD5hRlEIysvaP9r3abDSl8iZr097UsHreh0+szZxeCpFtedcfRIESWUxC70vCXQ8RXWvdlEoVlmjVAKUQotDUJikyNxFDV71Te86HKdXNi9EPXRworRoBWAs1uoy884GVyUpJkeFwT93v+Gp9+W0lXk0FM2nX6lr3GSMKglIonclEgNrjXyMyXcOSMUgpheAbugozULnvkFNL5UZHMhJ5G3NNPzw/r0eI9TqWHa76rle9PlOUQjJYEOtcOSI0pRZ11ka9f8Lqeb+dPvGd0H49BEJk7TITse28SYWZ6MfxEFG183SYUkSrBigFEan28GXum1uIGNJSWyxjmFJf3/JJN/qhDCRG6RXnUiNWfO1eiXYYSN0rrEYiunEnfISMU3eo3IMuN7VFCEAQTSl0NWUigGcbUmrrRkQZGxe+sh+vuYu7kqGeJkLUacp7fdRxB4dWr7n4J0PGKarFS58AegT/ZU+SUgk8aykRilJIRvHcUap4NilVfu0o1fsnrJ73Jvszdz1Eb6+seQWItJvgS73l5DDu5+RNpeqZa0TFiOOg1LynFNGqAUpBRO5NKFQxBBAxRClhPvcIk1JPvSmkY094uL/RD9UBkRkoyrQf4aRYej6Q4biKUHxAh+DGn/10q/AO20NzJaQuzddC2ZTCKXQIoc3p5moa/XpJ3FOYMsQRSYbhqaE2AmcFYtEr729sKmtxXARx77V6vxaSUfniAuWATRQCUYpHOJXKl/jlRM2fpBSUse4opU5NmlJVd/6NFrWz51HvPe/68zWpTEWFEN0e+1nvccsYqv/y7p2oKgoRPkpNMk0pq1WDlNIITZCsdXsbaETpOthCRCClVmY/clQjhvnM5nzq7iPPSjTPLzVYQiuBEGuO0FObKU77A2EtEFGQlIIePANxangkUttDYcoYppRCVK0al7WouSvPUxnY4MSfUEZKxxri08wUymifZIlS9vvXp3zhVrJ1fP6ezH7E7Splv2OCKZUy32HU+yfsnqsha3gh2aPWrmkAEayUT2qoy2WUsLvqss5uLUTFXeU0pXRWAdGqAUpBhD/7SectUggHpfDoBlPK6AdMwPzCklueieoeTeW6liqRIlj0AdmNi1LRG5xQsaWFJC1JKbiXYsTIKh9xZKmp76aUqB8unc58+ytlNsBMCylac3jHvkhbmlLfCk2p6JcASmWsCM80UZeZilI5OxdHvX+CnsKxPB81cvW4KcUKDU/f9b5HPoHzuBLdnn25nhiIUjSZolSjfcH7olS5L0pt90IpRPF7HtFj1u72UOoI64FcCmaUQr8jmdLucW1fGsWZjhyUauxrFUPbrq0AjS2NCKGUROTK4uOH68feWzLVw/csvwRlFEOvfshEOVJ9PcRf4tNTSry1waYUlJEzqk+VI6Kn1ILZjt0+s3L1HI7ZNrZzwQzEGYsjP4GHqYZvJ3Wn6qoNt/YhouxPfiSlts5WDVAKIgYJ8rwzYosQwZRKrSwtGCAzIcLp6Pkw3X1Kt3wTiAiVKDqu5xFJl1ukluZ0OCugFKzgiBAlTs5Ecqa0jABKSYR2oXfy51parfeHRt48GKXGnwcCLjvxCQyurKsASkEZxTOnlPRP9JQqWTmI7n+3rp6rYGa+CxGx6BiR8Piuf2QoCC9OV3etay6Zkm37/DjdqiBKEa0aoBREDBJkvTNiixDBlDL7EZtXowszB4GeD/skFfV5qwmn1BQ6MUBqBuiPfutUjKJ109ZFqW1EIoiTk/5sTcoIoZRAcKNSmpYrdK221VLEUWsOZCS23ZdaTvS6b1WlAz9MSnH3xLqnFOxHp56YeXfUIEqNuDnClZWj59wCj0Tc1nxhp2xiRP55dKOLHvE23bF8m5y9dlGa4xDhoVTdDfo3Z6sGKAURgwSZ74z4hhBlC29z5cGfopTVj9KOAL2N0qVrdN0nqaiv+h1zSgGb5wawhy5fOUIaZuaklD7uI8QxVba5Mmg2st73M0SpkXRRKSecGPUTdJM8g270NZCRU8UE7VlUCLYdsmDvyqYUupdawX7E3O5g4V8TSCmmuBillH/C7jkzzpmT96Li514Wencxt3ref7lZgdqsa15KjfGQHQhOZclLiDjmMR4kpbbdInlytmqAUhARFl60C0K0q0cMU0reS1n9yK1wtW4JlnPX6PqUlEqyH3FKwT0PvLNtQdcjQuZ85aQU2PchAmXLZF+je/ThnJIRQimBOO0Z0z1X5zdGEEvZasf3FsgY09aU5beVCE6p1kmpGlxYaBmMSoxS0j+hKMWolLWgsJR9WGKtZu+EHV3ciVpJhZkPCxAJ499HfTjNJQ/Z38tPNiLnF5MkpeCNpd0qRalmQ1IKIsIubndByFOFFR/hpJRaXGY/YjN4oNNQR61zdN0nqUjnvZmU4t55oafAHS4KaoVC0tZNqZpCxEjvFV8jplV/tbLSvpNSi96uI2ItJiqKgn8ZUsouqZSSoRqaUjX7a0lSqlmSlGLc4X494Z9QlFpsBaV6/4TVc+khfVzKTZXX11w5J71sm4epqr/TRPHNZ+mh2fzRRBSltnDrhJR6AjeWLkoxqicvpZRBkN1JGEgpqh+FdapLPRuW090nv6ophRRbr6eO6Pg7pApPPZTqVQ5E5IhSZUep+4vKGivS8GuGDT92ECcjM+Xvzns3ejMFMiqrektKJHdAw2/L/lrQWqqJKMOPuSU4pYR/QlGqXAtKKU+g3fN+QB+X4u4jxyc/AzHjgVVXFzpn5kxsivHlHYFgV085Tam1vl5xGX7/WJbK9xh+hhm3u6kYRqma6kdubZyFXWh84g+cAOZEb/jh41dc8lDCUUlHiaMDW+mj1BcCcYoodQQDkoDr3T4Uxm/evIlG3R+TSP3xhmhVUtEFSpXEQkU1LIGM2K7ekhIpiNA98cz+urApdfsOnaVAP6q1pFReA0qNROAbo9zW0fNTYCvwBOAFppSBwCH1d8rYuIvSzZxApH3YkkUp1o25zz1xubQXwep73BPfXujQCKPULdWPkel8zPByd7gnMkJJsZnq3RPG0TzmlaoyMqAVuxWz1kcpddUDESU+an2KqLHyuC5dj0KkSzelGllIYx7FKygj64WdqNeEMUqZifLQif7koBR3elBO9FiERc0j6Z+QlJKfRL1/wu45oMg3no1tFPMzEe8gpzor9FKmE5b3FCLBoeiQUiy3Y+Jzos/tffVz9D1O9O0L3e7DTnS5KRL9KFw60OdEH1FKii2F3oluXmXF1T2Ude+8Wjz1Uoq6vjS0fRRRY+W5YPMF4UlE7MzPEKbfs4lQ3omTCt4iNk4ZklLNmKCU66o3Y1tdKqrCrTSlcpE1qb5A9DxBOryTmBj7poVIb2Ayy0ZFlevzMEJUnDoUpaYgs5G86p1Yq/IL2aodL253vxwOuZdy9SN32KHR8NU7kWYor3qJgIt4CoNbp64AmFHlp9TWQiTWXnCCf8dXKwzk47X/mVqIxeO5NRON0v2lWo4aIS4U3lbgUpukFAhIeqqCKKVljH5Tf0S/AC0V/4/+twkZAJMjSlXiKFV7Qma6uRt9uN4YL2ViBgGJqID3H1EKxCM5ApLMgDJYQv+HC0hy9SN2xOT6ApJoJSXLHrpj/GZ23IQlJGv9lJIbI41QSxa/4m5rdaQcSA20ZPCyn2WzTEoo7EzuDunK6keFXxHRBFKqHqMYPz+lrKi9Kzry3UIUBqXmRkFUm1Kb6/P35zeVM7UMI3BEEqBUrYMnBiglXcOP0+g7KfX0wkDbl1CKkDAfotQRqaRYCySl6OB1XfVo4kwmOBuglHoni0bk1GZwZs09DKkPo5QZhM8KR4FbgDoSZ4ot1Q91JwoaRlIKJHc8MQe6ptSRCps1KKUQ8QY/S0GpDH/6SCUTVOh2Xx6llpEn/eBsIFsTI07RxRSgFPv4a+RL7ugXxuji+vpq4kw52TFVY/d0kGBKUakaefhY+dx9QpJM7jBSrEZGFtTSmfJm2X0WpWozjevY+keDNY2V+BVKKZgq9r/WUW8uf9HK7kei+AAcUA5K9SmIT90qfB7byR0WpQQitdYQp5SZq0ykvAnk5z+4HXeXtnepPelGklzSB0w1lWOZAESOvOiAUmuw19IpiL5A4xckFEY7Jy3uQCk7oTB2BYA4EblDSUVF09/0oUTgS6wO702cTh3O2iFKCT6CZGOYLaJ/dWZmZcH05DfMxnrDFu0bpgw+v2GL/g27l3rDCPopshDdOuzkJp/h762l0tIB5z0iUxPCjJdL8V2SUiBR/qnryNexisT41qcgakrx0VCIET7ZbOZKS6Hd8TGyE7NztSd/ZEUv8+4/c9LtVO50026u2GtXLulrECO1vqEpxQzZpVPGEKVekPYe7ZxaH0wpMu3dtPy++kfXdZJiX24EIjJLrdzDexk7MU8XuLgcptRXjDCa/zi3rRurtAe/WaWjJ8YwPQMg+CAsZLKh5m+Cinb1iFze8IkIhQX/iaQUKOfCcnqfxjBRXsypQSndqpKbdlpliLNU2upPhTFjlg/JtaHwYaoWyJqeD/icsKT4it55ESIRlepsSrEo9olbxgClXlCcRa+T0AIwwZQixyr3eCcohOskJf23hcjmxpydA5PpM2EwyjJMtt1nU6qeRKhwU2nHJNgWmlHqKYhSCMGW56jFyXVMVAaHokeM+YfZ5vFT1OssklKg6Bij03psl3MxKKVbVUga/PrhZlNr90QlltPo/flGhE+YRa5EwlN6ztt2JS8d5uR8QNvvpur2q5lj58UI5PLTlGrUq5IcMgYo9YISYvzZqUyZSSk+B5kOq+opRZYQG9nmt2903UpK3OKX/O2tDb4GqfXBvqb8FqAI5RCluGRQXrCklWxujC8qSBhEKYjI2NLO2VcvjZmbta1dhPIYXe6N3JQCpTGf8p5SqOiYQSndqvz5kimkSqkjSaly3X+qvI+4FCMfzguuZdNO8dyl7XDh0e55ez6HNWywXsOIsttsSptS265jW4+MAUq9oNAllaumLtnoYprBlKJlFO6jFIFwnqS6VVPLLQoXqOV1Yo4of2J/mpMlbS831sMqh+NPrnARXJtSm2lkRWrgsrkhlEKIjP2l5D/J6ZhfSpf+GazWKxELdLnnplSPkJRaje3SmJhSoFVpg1/XICk12xYo1sQqGAzCjNn2+KxyR4n5MFoLQydxCXuMYMw5sikFvROOAs4eSr2kHDMZGEOsY28BZ5JSDhk5EWzg7LlHSUWje1nAGZdR57mfpcs38dJi+zal+B6VYkphGSGUMhD8iLPtV6Q8KjEr9NxuVYEo5Tb8egSjVNZTChVwxpSCraruK8idPiDpwrhqMUe30OuJX0lX9gsoifkYldRxhUTkMh7ZoBTLWFx5ZPgp9ZKXBnjUlENGKKUcMhLnrRSBcJ+kYAgFetkHPCFR9Rhe9goS6C7fXP3JKNVgSs0tGSGUwoh0zr6/YvcBhfLSlq1ZCU0hCrQzud0TL+v5rPe/4Uj0usSXM6YMvYUuc3FlXQ+3KkaZYk1VexCJoI9BqUboercMP6X2+mqbwdfnhFLKISNpyasdEuFTUhphvJLqiAiCRFvGS16UVWCTtbIpNbVkhFDKahV/7XN5J6dT2Wd3VKsgpUYeJ/rLeh5XfbgdpFTeSo9f7ZChLb+nlHf/A3pFOdmqt9hn/4hL/5mISr57AVGKGYO1T4afUvt9AVtJGmUaEY06JB8AAAlbSURBVEoph4zUaffZiHxASclXto3tcHbioNZ37yWvc1wY4ygNP+ONO1hGCKXMVqX81Vv6yuVOuNC3VKsApcT5w3HV+8IXWc6QMa3LuRhuL0tGoadDDtuNS8bl49X53/otoUoJXJpvfcAyClmeF1GKHaWefT33U2q/rwkNeBXp7vNB/Ho7N8pEDCop+WLRzHxJZ58YQDwve+nwMeZOfBtt5si6aWwZIZQyW3Us3mrS9G4vEWT0RLWqUFN1UXkDkl76uuXLPscAUkrmN31xysj1JsTLdZ/fuF4b7ci9vK8abz9ykLbZv6t3GoPQNsfrryeBPX/5y6yHX5j9HfNBU8qPGDpJqYNXYuXQW6m8ULx+bX3y28AzNRE5fQw8RZRCiCBKGQhGqZr57mqdktd9LwOBnQBxLI7vHyt/2KwlI8QvgxCXla7jrsNm2R3S5otbRgyDZq0ZhYiUXLCPR3gmLRlJX6dNU4rrramv515KYcTQVe/w6ObwWLC3+SA9fl7EsJLK5MLGJ7YjcEvrOH1JRHKz8T9zE5HRRiu+5keIIEoZCCaH30yt+b89lGb5DITg2RLA5exI7rBkhHknEEInIo9vgBU68cooTEo9O2RIVbNBV/CPv1W467aMsuNcjinFTle1t1VeSmGEn1LNcnh0EyLgdB/zge/NbEqZiGElpe7HC/Stig6XVcO/BYiBtzJtLURCulZSfPeLZYRQykAwI443bsp3eVnFeeLoR0oclglK2TKGTXc3YkweVUlEjgw/YzNCCP7vD/B+u3mYXBpXIbaMGSv7UkFKNayKx623VV5KYYSfUpOQ0V3Y+/D+5mPsiZ3AiEElpRBs0ibmDNIFjUeyVxKR+Sm1shEVlX5fIN1lIAIoZSKUwbSN4m6HLqUT4JurHyizvE+Ub7w9D3i8CJJSNCKG7gnDZMYINihfZuCa4noenRlhmoSMTBWK7ynFi1wvva3yUcpA+LOfliGjm1mBVXucj4WLUiZi0N3XI9gCWllG2K2ja0uI8GZeNBMbURBqKsUXbQiRcB9zw40Z/kez6dO/xYebldUqvVByNo93kXmfixEgwlC9YiolXpBByBgy3Z2IC7b6rwMRBXCi20cpgHi3uZqwLGk+Ovzt4vElewv4kIxKvPRZU2oJ6wTRrfJRykBoSuWuZKnB0bVs3j3OR+GiFL3aVwEyxJjaDibi6Ue66m/73c8XApEbVYciXNOnNhHH7eCztVolWdGID8a8IZebpasfvTX6MAUsb/w9H358CNq2diByfdVr2n0W4kSlSXXqefThupKvI/PLmDFNVmpK8SG587fKRykDoSkVu/x9g6M7MxflHufDSSkTUQ0pKbATLcBrz525h+JfnxEi9q31KYFAAP7KNhSLtjYRQZQyWyXNWv52Dm5tfPH348haqzalaBm+x41QeVKb+yBEjF4Q33gQMT9HsTf1doziLszNp4BW8UrgmabUiq3gpb9VPkoZiLE3oXAVNLqp6UXf43xULkqZiGpISWmEMJLgjuh4K6D+nvrb5YBzwkIszBg/01TEiGQz+KzsVgHnvHg3752/Hyc8GtxHKbcMjw3gQpRksq0bwcdslVDFRjCC/+KGZcrfxdPR+fXVX2GtKtnIl4pSW0bieqBVHkqZCECp+Pp6Q2y8AaNb4QHb53y4KGUhqiEllRnWNHC814l9kYz1mkKkfueEjcClGw1K3ZIygjW6hSj70q/TIUThp9Q+WxXpi7swBFcg84UuI+lCcPPonr0ta3qxS6v4fQO7FV+Jl0bOUKom2SoPpUxEjn0LuH7PfeDoLjCl9jkfLkpZiHJIScFKtYW8t8lVcN8ZddebgLZIxMjpoGgciHduSm1pxMDjQSz4dc2NGVJPIfyU2mOrUnSZ97gMkMH3rY1dZM5C8MIUfzIXaXr7bh3eqk4rdWrqTFDqTv7oRbwtQVL2gIzYPEmATK7H0NHNEaX2ukocCYg24mhASUEE2wdvgZISf7PIf4Te/Sl8gicuSt25EDMXpfjlMoXwPx6ErDcZTYYRfkrtsVVnVorZoIzUUbfRRnQL/Y6dDNdnX6rlDq2asfnqtseOUt0szMB2SiLUawwewno+M3oaRe+v+UfXfwaPboYotddV4qCUjRjdbFahMmTktnLgfRbKZGnbs431g8tB0cxdCF2EEj8PThlDx859IPyU+v9qlZ9SNiLv1AuvUV1dNrvIYHqJ5QGvcv4/cJdFIbSWqSev23MzgKJ+BRmJg1IvlME2pj5KTJaJ2BIbxZ2JMP0NlnOCQETRx43FwMd55EN4j4T7QHgptcdW3VgxeMMyHJSiEDdLnkOatuV2p7Ga8YZkq1w4OW59iLhqPdkKrzSDMa5fvEcZGU2pl8rgbyJX7RZpUm8tJVWi4PRUeoVSuq7y0o3gI3R+o2oudAeKqz/9MnzPnhBeSu2vVamrEKFPhoNSNIIdbuu8tWprDcxH1a+HGQydoRCFZd9HrzJWxFXe0yvIcFDqpTL4OEkvbO0m4dZGDND2p0GkHkrtsVWZq0CQTwZNKRrBj/HfjlsqmtQn40gFsGYVPkP8KDMIrg73KyMnKfVyGeyDbm86duTyStfFykZ4np8LUTgptc9WETp9PiiDpJQDwc85a3IB+PtRivMvwz/8iDMIAgL3K4Ok1B5k8CG99+m3M0t/lWS9l58SccfWrYtS/+/9gCXV10MIdv2xKqngF3+r2IVhMxV//ogzWPUOvz3LICm1DxmchssovXEoqdQmYebK/P35EPw05aDUT9bz0Q1z+BHlu4ZkvFOV1Fc/ZM8LFcq9bxljglJ7kcFji2rf2cu+hfj3IiClfrZ+xGWd0MVyB2ScmQ6HH6rnaaXLq+5VBornud1nP7AVTfw+m6P/XgSg1M/Xj9E0I7zbATIu8fXtf2XOdYk2VUlhTzJEWIPD7HtH16L41yI0pX7KfqQ3m+V3yGA248N/cc6Tc+YnOp/vW4YnLDBz+db/rYiOUpv/YM9HNw//3Tl/DQRXbQ2BYVcV9NHs34pIz8//oz0/IPaJkBeR/5iffvRkXh0QB8QB4Uv6OLPeYywPb/cHxAFxQOyOkE6f5gq82bhyRvEfEAfEATGEUJnvzePVn5PR7xc3VXtAHBAHxAsQ0jLEzz8HxAFxQHwvAqUxe143cEAcEAdEGCICFfcZ4J/ogDggDogXIbrngzASm8e/owPigDggdkL8H8xj7XrcjeVgAAAAAElFTkSuQmCC"
					), aCz(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), aCz(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aCz(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), aCz(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aCz(8,
					"googleplay", 3,
					"iVBORw0KGgoAAAANSUhEUgAAAQ4AAABQCAMAAADfnGukAAAASFBMVEUAAABZFxMoKidGSEWjLiQeaDJwVQAuZLfsQTFkZ2TMTltEhfM3krZ/gX4yqFSNj4ykpqOQw44D/hN02Xr2uwC+wL3e4N3///8++cywAAAGlElEQVR42u2ci3biKhSGEVqnOIOhpwHe/00Plw1sEshVm66avdaMVgnKl335IRHyH9jXaxtQIIGFfHn7zDg+pewYfWFj3AL5AhwWBiWvbsw7CHG+wclphDr/IDZvdCcL4GFxSHmSiPHySb7OUElmPeNTnmk0Gnc4Tgw5Wk4cJ44Tx4njsTjonopDpTZGiZCvVTBC4YkKuo/ax/ieStWeK2M0VLsOWtpjj8VB3+/W3rcS4dpo5cbF7B/CBCMMnpgwOmYf43tGwJH2IKU0/G3/cB0Qe+yhOOgd7H1bt0bzcHaJxyHyWyoMMOIYDlYZ7xgWJw849E/Acc+2BYjOY16HQ8BLhBpDPRx/7ME43u/3PUC4KfpcgUObGJ7SuYcy1L9yMI5/95LHyhTih4JxSGaNzuOgITbSmxYHd48H4/gz4LHSQcKQIXGmVCrmccRXMg7m/x2N4++QxyogwTt8WQ04lLDGtngHc2nZPh6MY8zjTrfkDje+PbnDNu5MdzyOCo/lDpIqi3Bg9lQW5nvTx+Oo8FgMJOoOYTTdqjtEasyN+QE4ajyWAkmqlGJVugDHUJUyeO0H4KjyWJhCqnOWIFRTB7Q6IwlzFoYb04PnLICjzuOd/FqbwVHn8XuBzOFo8LhfXxRHnUff9/Q1cdR49M6ur4ljzKMHu74kjiGPPtv1FXGUPHps1+kUQpmdunH2y3BgHv3AJhzECapgci8RlmbENegiWzw97vnTcGQe/djaOh2Z2leJBFpcrsyQkGkGwn+LsF+KI/Ko0Gj4hzSlafY9OExYXHgyjsCjr1p9QcwzkM5pFbqY8A04PI9n43A86jRq7uEJaJHmcztpzONQzFuIUPYNOP7+6xfjEMN0wXdOSedx4BOhvgPH7WMpDro7OLbjYAHE03HcPj4aPGgtjWp6DA6ifbQ8G4ejUecxjhUz9eWfjUN9B45Ao8qjnunJnDxT6NIU7bTJa2ChkXexjnCvpzIO5pbZTHF739g7aMYRPkz7+4ixTmM1obYUR6RR4VE/le3MwZI8S/HUlZrBLwfGNjpduRKFnFENHG6dWafckfrxa9m6vFPAyI04Mo0hj2tDc4iaghbwdZOxkWILw6KFokU41LDlEAcHqIAD98MjqpTt2TYcmEbBoy5ICxysHD4NQxE+OoJ/BN+QwkdBGBc4OAi4jKOD1z3ADn+E9rg7FXsNh0ncjw50eHJIvS13lDQyj9bsbQqHSnqdw+Bp1igSTplIuThEVsRBUzz5XmlDlfKsSuF6TeiHozDOYNbiGNKIPJqVVOKwLHFgH+VhSBKdJwhoFOMc4+jiaJjEiYZVJkcplVqHdDcPcN+eRoq86hxLcIxpeB7X6aqoR7nD6wGBSSl/hvB58l/X/69xoYg4Qg1Nc+UajjgxiDgoRKUMJCUEmaoX7nkcNRofH5PLYIUnFwXQfx1eiomiKntmHDPrEA7fb0gxUDqHc5ZC+hRlLEemJtlL1uKo0nibUTO6UsRC+lc4n1dwqOhCAjfCTWFkbd2BcZRhpJJHilqVXYCjRuPtskRDDquY8m6qZrxDjbyjhmPwo4I2Dp+4nfJiECw+aSgQ8qtx1GhcFohdPZq0QN5s5A5W5A6Gc4ca5A64N2AZjhwTqY1P0y2dOI3jtg0GOCn+3rES4LTCcmVRqJkqqiAbVpbIqWPzONAbKj7lqBqvw3FbnTQIKWS3YnjZVJd+47OcggHLDI1DsPEsT8e6w70gV3iHNIXiqFbZGRy39UljvFQa7g/LMxQGEhQEJyVZOnZZlYZnQsiGKvVVuyi07dxhPyz0DG06055wT+C4bYuT+kJ6TiV8qB+LiQictSVzlnLFZ2llgfxk1k7wb1vjhKAF0mxdhVNaXJejISYezRktKpRtHBk+L9OIXInjthNGUIQqqgRKhosbeWE5ie5iFQPigYbKwtNvGmJTVCdp+g0Equtwt1FobpNYbqPrEmwKx21PnJSXJVntoxkbN6TVRmrs2ZStWngc/BCFT6zGNHC8PQjGZuMSeb1+aNctCTaBg+yNk50wdEr9XTvQN17tneLbwnE5EAYkwC5VxYfeAaBaEmwKR+RxIYcYXMZ8wNXMVc4x+Vu4y+UgGK010UeYLIr+GhyHmhzLi0dYa6Hjp+MgVDjpIB59gyJjU1X6/B3tiePEsQbHuX8HEsPn7i6onslz7x8cK59uZyhxkggrNG5nKOseZ7iQtG+Y43H6R95Vzu85yF96z0HKurAJ47kjZdyR0u/R+T/YMVr2IqN1wwAAAABJRU5ErkJggg=="
					), aCz(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aCz(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aCz(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aCz(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aCz(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aCz(14, "bestPlayer", 5,
					"iVBORw0KGgoAAAANSUhEUgAAAHcAAABkCAMAAACLpV+NAAADAFBMVEUAAAAAAi8EBE8ZBQgUBwgbBwIQA24IBXsTBGIgCAYZDAUkCQonCAsdDAcSEAciDQsrCwgZDxwQESwnDQcYEwMvCxcfEgUxDAtOAzEbFwtPAzlpAAJlABVoAAtcADhfADBhACpjACMhEkUyEgtcAUAuEyRaBUYeHQkuFS1NC0EuGRcaF4MpFHRVDisyGDwgHnAlJg8aIIEoHmY9HFlmFhBgGB1ZGU0sLRI1KTYxLR8rJ4Q2LCxJJUg0Kl5QJVEzNBhYJys3L0pUJk1GK0dKLTAfM48tNGS+EANJLlVXMB86Ohk0NHssN4q8HQBWOiVNPSNDQyFLQC9kNGVRPGJMP1VlN15cO1thOl4+RV89RHhtN21ERldWQF1KSSFPRUI5TiwAYDQCXzq8KQ5KRWlBRYtGSzQ3UTZNRn8wTZkjWjJjR1jBLisZYEdSUSggXzw9T5A8VGZWTGgAbD4AbTMHakNkTFMtXz5aTmN+QX1FUodPUmQ+XDRLU3RdUz9PVGwHcDC5PBdbWCsAdUVGX3EAezkqbF9iYTJEYaRTZzlZYHhXYIe3TBq3SypsYEpeYXJYYn9QY5eRUJAAhTlzW4kAigpoaDJLa4G/TT6LWIR0Y1peamCdUp2FXngAkQ+AZGnCUk1yaWq0WyFYcH5nb1QBkyFibYVucDm0WzI8fHp0cEQAlT9XcqRQc7JicZJrcH8CmDJVd41+b1rFXFh3dzwCniKnYKIwkDGxaS2xajt1c8UApjIApT5xe5tff65/f0FNiZGccYx0ecOQfEFqgKFjhJR0gpNFmEiteT5ygcN+g4GIhFVgiqOPgWSHhkmVf3GAh2yJiENwhsCkgUORhVxikYR5ioZrkXeigIZXm17Id3FdlaVtj76Qjkq9g2Vslrt4l6JqoWhnm7tjnbNDr1uYlk+Fl6yKlceenFGWlM9ls3N6rHynpVeNp8SJrbqPtJexr1umsJCorNTYqKWgzqbVwbG3y9i30LnJyuPlzMrG29Dq5evW7tji6ujk+Or79vf///99szH1AAAb+0lEQVRo3oWaDVwUZf7A9+RFXtwFj01dRF4SGAiU0ZRRQDZBLhs4G0hRkCUQUrRmCRIFQu5WvSEoF/Bcg0M5zmQKlRVvei8nCqwsl7a8ope5q7v/XnvnnnqZqanp//fMzL4h/f8/ceEDs/Pd3/vveeZR+Pj4iv9k8fOWwEklWBT5h7Cw4BBZ4DfO97luoJR/8PX19Qvy9UOMoKAgXwX6wVf88vHz4Eq3CPx5bkJHR1Nc8LQwkGARHCxzpUs874JEvLVIELk+Ch8PQX/xUNNvEqCTm9By7NjRNokbJqofIv/RgwvflU6s8wW9TuT6+Exi3eAQt2mRdYPRz3ENLS0nWzoqQt3c4Du4gYEhgX53iMz1Rfb189L3TiWDJ8i0oqqqk39vaelYHhZ2j4vr9S50l5DASbiI4QNcX8kGfi7vTh5FXrKsKqf6ww8/rKxuiLvnHlnhsOCJbwyZTF0n10NR6afA/5+bUJmT9+Ho6OhgbnWRk4te7sBOyvWT9HW7VeZ7vXFSbm5O8uDo0NDQaENudcU9YZKTwySFXXQI8J/Hgr6+E9PWFU8h7iR1+nXatOBpwcty/NuGDoEMDVXmVi8JBZGjK9DtZzG8Pe6qnMD1dcVx4CRY9GYRKEGnTQudNm1+XlIlYHft2rV/6FRK5aY4ERwa6v540ocN8agigUploCfWT+GRQPAnV7EQ89EloaESEwDTEvKSUvqB2tjYaNw11Lagsgj9OtTJDXN9Vo/qhRJZ6ZlJPp5cz2rhhQ0W7yzdflpukn97v7Gxcf3q9Y2Nuw61pVU+FCqZOli0dpho7juiLNCtsI8rnifJoOA7uJIsW+DfANjVJdnZ2SXbm1tP5aZVLpfAYBdnEQnzyqoQb65nHv08d5oHd2bo/DT/3P7WxtVZqeHhiVnZNc39/Sm5lU4Xy2p7J1WInBeeDvZTuHJZBod4c5Flpzm5M2cmpE1N6e9vLMmKn5VeOis2NQuBk/M2ue0RKpvbg+rkehhajCs32V2PZXCo28IzkSxMSgbnAnaefufOrSsiU9fWtJqbkisr3NzgMNHkro8/CRdoCle3cHJD3NkT7KGGiL03CTkXsFEbd9bW7tTPk8BFyZXZoV4SHOy22SRc5N87SkbIZOEErp05c37yVHBuzZr4yPyttUg2RkemFgJ4YZqUxW5be4oT7FU3JjR775DyVveuZP+U9tbta+Mj79u6tRxk69b8qNjUkhpzX0DKsrvgChdX7hTSdxc30Is7ScudwJ0pyRT/gKbWmsLUyGg9YDdv3gzk+xC42bzOP2XlTAk8VyqbwcGu1hwSPDGg/Zzx7E1GyDAI42APXe+6617/gKLWmhLAbtxavvmpp9inniwv3xYTFZ9Z0my8OyBl/vz5cXfNnDvXFV2h7llkIhbieZJe70ogqI13Jdx778KFKcn+/v4BywCbFRuVv7V820cD77zDsU/qyx+JiYzPAvD2Kf7JSWlpebm5y5bNTxBNFeYqI4F3csWyNZmd4xKWL1uYkpaWlpQ0FUGn3H1383aEvQ+0vHDlv5988sk7CLwKwJklNca+mpSAqVOnJi1Iy8mrzKusLEL8OM9BxG8yO7upwFuWm5snAaf6L9xU1GQ0gxhrwLexUTHbEPbGjcvvvYfA5frFYOrUwpKa1tb2tra2hk2bUtKSkgGeV1VVXd3Q0FCx3AMc+DP+DS5qaanKy1mQNDU5paiprc18ytzfD1+trTU1JZBAUTGPlOv/cuXGTz/9+J4M3rYoJio2PgvIgG7tBzG3t7c1NOTm5eXkVcHceazJiXXrPVHfX7VUVeXlVTa09Q+OnjrV346Irc3ALFmblRobGR2xqlz/u69//AnkshO8cVFEdGRsfOqawhJg1zS3SngYSIZGjh49evLYsYQ7+pJiQjNqqDp2/vzXMDsd2r9/PxBFZCEwU+NjQdk5q/T63711/h/nbyLwqxJYv+2BOTHRUQidmrVmrUhvbm7dtX//0BBMf/9sObZ8Uq6nvm1VeedhZEPzBPRYSc3UeGBGRkXHzFlE6R974a0v//63v/2ANP7rKwjMPbW5HMgRCB0ZGxuP6IUl26E570Lgrztajio95zXR0IoJYdXYktPxtYiFxl6SIaoZGQXMmIjFqx4GZV946x+A/erbH27f/unyn1555T0xrIH8yKoHFsfEABzRw7OyYSxA4NHTVS3tUtHy7IcKH+/0DRnMSfp6FLCPr1+dnRiOkPPuW5X/yMZtUBdFZQH71Vcff/zdzdu3L/8JgZHKQNajyqnftvGR/PwV982LTMxAYOA2VB9Nv7NMKySqnxpTS/D11VOLRkV1sxNnrQCeXqrFAAVdQVkJ++1V4F57XgYj8lNPyuytW2t3bt04KxE0Bm5/Xkuru0y7piyJ64dpSQITvRDcv2AqMvP61Rnh6Tuh24lIYAL0yy9FGyPsD4C9dfn5p592kQHNPvUUYpdBi9xZGp6BuKO5VR3pTq4Sw3EsyMUNDMS0tIEmMT9UqpDCnyJu1qxtgC2DvJGZoCtSFrDvX70Ncu3Sb38rgV9BKYXYSO/NInjjrKzVMPaZ06qandOeEid1lBZzcgMDg3AdTbAGLSaOvf1J/sjOq7MigVtWhswrM/8mUT9+/7vrCPvFsxs2ANhFltV+anNZWe3O/Mis1c27DuXlIHXF4dYPIw0GmiZULq6aoE0Yw9HEDGSP0oapC0cPIW4+cMt/98KX/xCZLur7onNvX3p0A4ik8p+ef+XVV1+VyAPP6ctq9fNiM2paD7UuqGoU2zF4UKM1cCTFaDVObhBG0DyF8yZKVDjYnBZgNBu3QwvYVlumf0GMJcSUqW+/fxWpe/2PG379axn89NPPg4jkT9754DPg5keFFza3nk4BdWVsEEFzrMLEkKKHgavCtST6lcFi0GpQ6y1tm7rstLEROu2KreV6OWFFqIh9G6UQ8u6G+0WwRH5GIr/33jsfAXdbTCSMA4faF1Q3hsodCSNNVoLgGVIMLeBiJG1gWCuG8SyFK2EZFAoKVxwChcUO/7u35IxFUKAC9/otCOZrf9xwvwv826efeeYZkfvJfy98Vl4OY0hWDaib1ubswGrCwJtANwaFllKp8FMRNGXgOEGnoEFhDHHT26ZOOWXcXhgftbi8/DEn930ZC2DEvXQ/Ehf4GQRG3CsXtpVvFNU1tyZVNcprlxkYxVpxBc+bTDStVQcq/NRag0HNWQWW0rKsDp8B3FBjXoDxtBEMjbreC186uW/LgrLIi7vBzT3738/0+sXRsZmgbnJa2z3yuANBZaEJ3MbzBg24OFDhoyIMnJaw2gUtR4L1MTSiIIXNMDnGRi3WI0ODfz24r/0LwNf/fP8d4OfBvcjMVAREVY25IrmyUZ4vZ+A6liUYg93GqWiIX6XCB5IXgoqyOyhBZxJzCTQ25gZUmEWF82VDu7mvvYYUvvXFholc8O97l8HM+kXIzMbTAQva5spcjGR4kqetDiuO8ZBKSjGuGCupoi9yJoHgTGAD0Piedv8pYipFL9I7De3mvgYOvnXtWZn7axcXsDeufKZ/cA7MmDWnfzW1cr08Xc6AHGIou9Zh1ypMPE0EoXgOwiGLtLTJTjloGhRWI4UbcwOWn4ZUioIBAxnam/sv4N6SDb1hwx///CwKrOf/+tcffwJu+eyIqMRCY19AUtvcuSIYqcvhAm+6SJFaK6imDFQEBkoK8zRL2gScRcUDXdrqP6VPNPQivcz9+H0n9rXXrgL30qMy9tplKJnPPnv5MgwhNy5s2zgbmblvmX/l+pkz5zrVpemLOqvBpEPqqgKVwA2cgTxM2SkV6zBQHBQPNKuXFk35pRlSOGb2RpeD3dzXroOhvwDwhi8uId2vXbt07TZMIN9/f07/CHAza2oCklvnStwwnDKxmGDHaJNVa0GeDAxUhKD2hLxutROkzYKbTBQehlYIxoBfrIaIjp7zsORgby6y9KU/3n//o9du3XYKaPv9vz/f/PDsmNjMinsXNpTCXZCd1agwM3ZOQV+kTJyOUIdI3BlQsVgT6bBoBiyMVlQY3rGi4hfztxfGRv0M9zpK4Ucf/cKNvQ3Y/zmyt0zm5jbPFblzwyCHGNwiUKSD16JMDZL0VeJaHW3iSdY2cOLE2aUMFI974A133ft/cd+G3nDr0rOXAH/zypUrP928efOnG+f+/cYbTu7K3E0rkNnmhqKgIvacPZtvsWshUdGAAfU5JESjpWmW5VnCcqa7d2zPUg4+0tyZc+/1n9It2fmxSbivQZG+haiAPXfh3QtXfvzxyveAlbiRqQ/15VZXiCtECCqWXnpmrPuMwJAWljGAoUUutGNcZxUEcs9Y3ZLhsXyUSzNmzkzxXz5WkxUbM3vbYy94xpXT0GLvv33r5pXP392372Ukx48D98gTeuAmPmQ0VjYsAW4YRjGc5sR43dKxD3DWynMUTcHIoUANimFUlGDnl46NL9kyPoZBimOhdycF9JnFPHIXShH77Xffvv2vf0GtlDx75ZvP9yE5fPi4zC17ICIqfmXN6cqGCkldjiodO6CqG9tD2WxWLc7ocNQHxQ5lUJCCgz4xvsX3wHgphRROgR7cjOrGgx5149vvvvvu6vXr169evXpdDqgL7+6TuYcl7u6yh+dEx6ZWmM3VHQkzIYcGBjRjw0vSh8c0FgePqVCF8JPqFWWyaHWURVg6NuybPjyePjBALc8JOG2uyYqPivCok+9fv+6M3VvSy80fz+3b56UvOLj8AWToptObOipC0XBDdI9vUWwZ7zY4TLiCgbqhluZJGK84TmulGQrcgC6AXCpKKjK3OvuCHFbvf4fC6OZNJxYFshuLuJKhyzdGoAKNFF4CJcmQPj7sq0LqGhhGZ4WBI0jm4iRY2uBgNOljB3yWHBhPZ/bk+febawqRurJ7v/32u6ti0ly48OPNH69AAN+8ee7c5/vu5O5GCsemgsJFLU2QQ1jveLovaENoeQHnWTGcEVeNEySUTZJzcKre4SVr0sd7lzal5Z5uLcmMjc4X+/5/zv/nhx/kpHn35W+++fzld18+9825l/e5xcV9Y2+tuOuxUlR4B0eXjtdlxw2PB2kFB+SvQZ6vYHiG+cpg4FjcahuoG16zprh0fHVeUpu5GZl5G1L3/A8/iKPczZ+ufPPuvsnk4EE398ju8vJV0fGpoofNA9PHexPqs4e3LBUcjI6H8QoKB9IXygb0eygcBtJyZryrM6Ezu/dADtofg6haVS5y0aITyuCV7899fnhy7EFXXImGhnlSVji/bjy9M6O+q/eMjQMrM4xJLBwKSF8DiTFWEHLPmdI1PQX1nUuqk9r6ZXXRHCsudqH6vnv8+OGDByejHjzswQVDb82HyKpoP72ppWm8tKAz46WXesfOYiYLB/MVjlZECnGM1ym0rGCzLB3rVsUlJLz0+7xccyuKqlVbyx+Tud//+9z/HD98+MWDXuCD6N/Bgy++ePh1CSpzy/ViKpnNDR29CS+tySqIWzqWb7AJAqtVGaAOK5F/IX1pFUnxDq50vDeuuLizckHbITBzbLS+tgwtecHON1Dtff311w+/iMgH3ViR+iL85Q0PLiyQ8iMTV9aAwh1N4LqMOAhW0mbnSYUKzXBqNG+oCR1rpWleRwt09/iBhM7OvLT+/cjM+bAchGnjrfM3bkCLk8CvS2CRuG8S7JEje3eXlaEFUnhmRfMhc0dHZ09PwYrxsXRB0FEMxqJOCHMOLH41BKSRzgCfhlSOAbhyQdOh1sbCxFl6tAyF9eBfoEB8/+8jLrBT5YNe2CMge/fu3v0EwtbuTEfcXacbOn7fmQXtppSGuBUIhMWhASvQYl8C03Y7i6f3dhVXpfT3G2G5P28rWoeWwUL/M5DPdx85clwky2AvKlJz9xO16PpyaeEN3OXrdg31d3RkZHeN71AQnEPATTJWKa73gzAtAutsNsuO3q5NOQ1D+8VtBj1a75ch0YOU1f5m797j3mAZC9AnEFCSWoTVz0sE7uP7TyGFu3o1BpuDx8WyoUbbCiIXI7QUTBzQGiwneruqFgwO7XoccdNBYXHFX77tyYdBNpc9sfsIUtkJdmLBo5sppzwiyrxZiRnAFRXu6eo9YbGxCEsRmNq5zwDaQsVmeStNfTBWWlQF6gJ3eUb4rHn3zYuJiIiYAzIbZNGDm8t+I6osgUXsG8f3PlH28KLZs+dERMSgjaToqKioyFnhCAvc/aMNR9uy6k5YBnCWNxloSmwLUh/U0QxnsQo2O0Od6a3OGxG5q5dnJIbPQptXSKLhjhFzZi96uOyJvUck8IuStgj74OzZ0rZZZCzaOItPTEzMzEZYxB08enRJ95kBnBcsPMeZwNLyuhsWohoV9CTWaqPzzVUNo4j7+Pr1q7MzsuAOcJ/w8Fi4ZxQiP7C5zA2Wsatmz4mRtglTM5GsXJldsnqdhN0/NNpx8s2xE1qbw27lTDRJomWKs+/DGKtSaGHWm95SPfIhcEUwoFeXICksLMzKSg1HZBEsRpcob4jaRkRHxqPNQbQtinZGRXkcPblEO4UjJ0f2+FIMhSsUCkwH5Vkl+RfSiOGsPEPQVvtHxzo+/HBoaD+QAd3Y3Ii+QLZvX11SmBUeGR0x+8GyWhcYhdRmWA9FxmeUbK8xGtFGdSu8Hjpkhv+ffjo6+vXXX58/9nEpw1tYrYZmeYhoTI4rJTR+8LDVyurIwWMjcOWnkpxG0tdn7Dv90bq7715SV5KRGBsVMftJ8LGYyGLvgTFOfJqzfWX2+sZGuLqpubmvuampqehXTe0NDR0dR08eO/mBjaO0JquVY2jXvoq4gQXrQc5iswtvHjvW0lBdmZubsjAFvuAlIMAfSUDywsK67StTAfxAWdlvjsiluKzsSRG7fSx7ukLxiylT0OVTRUlKWlBVXV2NNr4H8wnGIojuJaQNO4mrRFHFQ0Q7PjoJ4Kq8nJwFSUnym3Ny8vIqK6urG4oqKipWIo2p8jIoXggL1QKGuPjCmr4+hWJ9Y3N7e/sgyJuynDp16p9InrNdvGi3WXkTLW/XufTVURiG4fD/1H/+809ZRkAGIQs6OtoaAPqrhramRgCDj/UA3ntExD4MM1xWjbFm4S/XGftEMR84cKCrq7Tzpa7h3rEzZ/PT05cyJhCGMdAGCg/y2BeFkDYwENQmhtb9oe8PIM+d6O7uPrAlfcmSJdn19cUFmRkZCcs62oyNFZnxkTEPQA1+QuoAi6PR1o1x05RfNiYkZGRkFhQX109PyKyfDiPG2NgZi4BWARDIKjVURchYT64U0qzV7rgI4rDo4DIMW7pny9rM+p6Mzp76jIL6YiAXDfb3NT2UGh8Vs7FcLNtltY/ERIYXNhuNuVOas+dnZBYXFxR09hRn1mcmZB/o1qhUQKR5we5wOLzs7OPcb9cQJG2ikR00JMQdXGizDNStrQdmfUbC9PpOUKSgYHCw3yiCF+slrH4xsnKzsS1gWU1BJlzRU6xIKO6Z39NTv6ZugOMtUJFhsWniBZvVwjE6rayu+3mKGkwNRZ0kcEJnMLE81LSBHXVr6uOmZ9R3ZvRkTi8Ac1eMDJqbUWxF56OGUVubL1m5PTegaXp9fX2morgnobMgIS4DsDs40POiww6zjQKJmtHJweznfi6JugO0JFSkQQSOVKhJnttTV5hdD3bLAENn9HTOn942MtjXhFw8bxvqdjBFhWfXtBo3JS8rUGT19CQUZxSDXzrXTF9bt2NgANNADUaBw3E8x0JllrGynaVHDKgJQ1NCvhBMOoMVLM0NDPSi2EzwXfNSZ0JPZnFG/cib7WBpAK+AHlu7AoaZ1WDltOTf12dmFvfEdXZmK7I6u7rW1p0YEByoWHB2CBm7wKPcdRrZTzxH4bI0xBaY16TDFDoWohDHcZNl4MSJ7t70A8PDXXGZmUAWLQ3gxFkrNm5cMSscPQs1b0oreqgYvFqwpGt4eEv6gd7u7gGLFqcZi01gSdIE33gWQkft+TzU9dwZBnhUsxXoOytYaYzmDDgncPndY2NjdcNb4jp7sqYXDyJLrwNw+KxZgM1e12puy035/ZrpBT31ii3DdWPj3XV7LBZGx4FbGVgNSd0AklRHBE3gSmjggaVNEA2QSxyhwEidGtZMOP7B2bNLl471FnbVw6R0YGSwv6l53cqMRLHJrmtubd2Ut+lAV1xWfdeW3jHVjrNnBxS0zU6pCBLDWLiVjWcoAldpxfWnh52dXBVENAoBiyAwuIIw2S4ynMNAYZzDosWYsye667YUggnNYOnW5nXLV86fD60dJsa2ylxjd++WtVvqek+cJVW0YKc0WquDtNjgNiqTHSLaCu6T+p/3uRHJ1NCWKAqSiNIQBt7muGhCi0Qr5bBqeYoXBvIHdnSfGNDsAUsbd61btxxk3bpdZuOm3JodS890QwDvsAioGDoE0kqabKT9op3TqVU0yzIGA61zlmaP81c+zpDGIHtpysRbLIKdwSlKcOgEgeDthM1GEZDRFoua/OjNkf5Dux5fJw0UoG7lRxghfDAwwCkYO69z0LSD4R0MaSAEuyBYYKIw6LQEgWv8JuPK7CBpyIOiaVBgJpg9DVZIBZ5ysFqtTSDhE2Dc6ZHBJjQJgez61Lwpt4/BKAdjEKwqXLDjNhtN27V2B69VENDSQVDPVQcF+XmdC/L19T5NGIQRJEkZOIMCbCsIWoZgrQJjEiiBdPBqg0PLUbZTI4MNInjXofa2yiaB4KiLWsxmIy2Ug+QFK8yJjN0mGBQEz9I69EAhaMIJOzfX9VxUqcZwrUGnYaBSCoyKgFIjUCbSatc6dBxpIx2U9bmRkTZxEtr/aX9D5UeswUYLUHPspAPca7LyFgOutlp5K4sT0Alcz+a8zgX5+vp6HVBFwzxUEJqBJTLLqQmeN7FWDGftoJXOYTIQDp4iW0cG22EG27+/v62yiCbsNoq22Amestt0hM5qQk6irKyJ40hah6uDvE6aSecHEdd34plNJQbrBx1FsyTEkoE2sQraarHiOG+3agi7nVQPQEyjx+iftjVUlioMDquKsNkNBAUJg+E8Q5sAzKD2ZhCj2OOcio98VlPk+vp6c0OUGhz1JRpnWQNJmXQ4z7I8ToLpKEywmgi2FCw9OjT6ZkdlkwnjBF7BQIqqdDwsCRQmaH2w6MEZSqvVoqes3lyfCVyPs1BoTzpIjR6Soo6ppSGnaYMJA9OzsIA1wWpD2w4z0IcjRzuq88VBRQXthqNIFiosWIogYHyhocdrNOpAr7O5kr5Bvr4/x4WLUWTD5wU+pLQWPVSjKZrRoR0ZLTZ95G8njx49Wl2Bag3NwD9AGdBqgNaRmAbXUiiKvQ+M+MingRFQ4cLKB2b8lDIWFTBMg9aqUExwiHE0E2gpHUyimCYkeN1XX311sqMhDj1Lht9ShIjCcYJApoUKhAHWb8I5M5Hr6+vU1/NQrtLjXKvr6EOQX6BSg0HyayAp1ErxMfHgV1993CEeRUFoXDMDxlGNUjlDHeQ+JCIenXQdvRYxIlXi+ngGtNLjOO0kR66VSvGhOOBCmgfbl8hnHpXKkGB0MmOCTDj8LYayB9cJFrFKj0PLgT8n6BT0xHNEIYE/g/WgBgFW4v4vtt0gxYBWEv8AAAAASUVORK5CYII="
					), aCz(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aCz(16, "apple", 3,
					"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"
					), aCz(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aCz(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aCz(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aCz(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aCz(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aCz(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(e0) {
		return canvas[e0]
	}, this.aCa = function(name) {
		for (var a7 = yl.length - 1; 0 <= a7; a7--)
			if (yl[a7] === name) return canvas[a7];
		return aCt
	}, this.sA = function() {
		return aCs <= 0
	}, this.aCv = function() {
		aCs = 0, aCw()
	}
}

function cN() {
	var aD8, aD9, aDA, aDB, aDC, aDD, aDE, aDF, aDG, aDH, aD6 = [
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
		aD7 = [
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

	function aDN(iu, mG) {
		for (var a7 = iu; a7 < mG; a7++) aD8[a7] = 4 * bH.dl(64 * au.random(), au.value(100)), aD9[a7] = 4 * bH.dl(64 * au.random(), au.value(100)), aDA[a7] = 4 * bH.dl(64 * au.random(), au.value(100))
	}

	function aDM(iu, mG) {
		for (var colorsData = a9.data.colorsData, a7 = iu; a7 < mG; a7++) {
			var f0 = colorsData[a7];
			aD8[a7] = 4 * (f0 >> 12), aD9[a7] = 4 * (f0 >> 6 & 63), aDA[a7] = 4 * (63 & f0)
		}
	}

	function aDY(eC, aDa) {
		a9h[eC] = 0, a9h[eC + 1] = 0, a9h[eC + 2] = aDa, a9h[eC + 3] = 0, aDb(eC)
	}

	function aDb(eC) {
		var ef;
		bX.mO || (ef = aY.wb(eC), eC = aY.wc(eC), bX.mO = ef >= bW.a9g[0] && ef <= bW.a9g[2] && eC >= bW.a9g[1] && eC <= bW.a9g[3])
	}
	this.ea = new Int32Array(4), this.dV = function() {
		var ea = this.ea;
		ea[0] = -4 * bO.ej, ea[1] = 4, ea[2] = -ea[0], ea[3] = -ea[1]
	}, this.dU = function() {
		if (aD8 = new Uint8Array(a9.eV), aD9 = new Uint8Array(a9.eV), aDA = new Uint8Array(a9.eV), aDB = new Uint8Array(a9.eV), aDC = new Uint8Array(a9.eV), aDD = new Uint8Array(a9.eV), aDE = new Uint8Array(a9.eV), aDF = new Uint8Array(a9.eV),
			aDG = new Uint8Array(a9.eV), aDH = new Uint8Array(a9.eV), this.a6K = new Uint8Array(a9.eV), a9.ie)
			for (var a7 = a9.eV - 1; 0 <= a7; a7--) {
				var et = bc.k4[bc.eW[a7]],
					kP = bH.dl((aD7[et][3] + 1) * au.random(), au.value(100));
				aD8[a7] = aD6[et][0] + kP * aD7[et][0], aD9[a7] = aD6[et][1] + kP * aD7[et][1], aDA[a7] = aD6[et][2] + kP * aD7[et][2]
			} else 0 === a9.data.colorsType ? a9.data.selectableColor ? (aDM(0, a9.je), aDN(a9.je, a9.eV)) : aDN(0, a9.eV) : aDM(0, a9.eV);
		! function() {
			var a7, eb;
			for (a7 = a9.eV - 1; 0 <= a7; a7--) eb = bH.dl(aD8[a7] + aD9[a7] + aDA[a7], 3), aD8[a7] += aDT(eb - aD8[a7], 2), aD9[a7] += aDT(eb - aD9[a7], 2), aDA[a7] += aDT(eb - aDA[a7], 2), aD8[a7] -= aD8[a7] % 4, aD9[a7] -= aD9[a7] % 4, aDA[
				a7] -= aDA[a7] % 4
		}(),
		function() {
			for (var a7 = a9.eV - 1; 0 <= a7; a7--) aD8[a7] += bH.dl(a7, 128), aD9[a7] += bH.dl(a7 % 128, 32), aDA[a7] += bH.dl(a7 % 32, 8), aDB[a7] = a7 % 8
		}(), this.aDQ(),
			function() {
				for (var a7 = a9.eV - 1; 0 <= a7; a7--) aDC[a7] = aD8[a7] < 32 ? aD8[a7] + 32 : aD8[a7] - 32, aDD[a7] = aD9[a7] < 32 ? aD9[a7] + 32 : aD9[a7] - 32, aDE[a7] = aDA[a7] < 32 ? aDA[a7] + 32 : aDA[a7] - 32
			}(),
			function() {
				for (var a7 = a9.eV - 1; 0 <= a7; a7--) aDF[a7] = 235 < aD8[a7] ? aD8[a7] - 20 : aD8[a7] + 20, aDG[a7] = 235 < aD9[a7] ? aD9[a7] - 20 : aD9[a7] + 20, aDH[a7] = 235 < aDA[a7] ? aDA[a7] - 20 : aDA[a7] + 20
			}()
	}, this.a5M = function(player) {
		var g = bK.f8;
		return g[0] = aD8[player], g[1] = aD9[player], g[2] = aDA[player], g
	}, this.aDQ = function() {
		for (var a7 = a9.eV - 1; 0 <= a7; a7--) this.a6K[a7] = aD8[a7] + aD9[a7] + aDA[a7] < 280 ? 0 : 1
	}, this.wb = function(eC) {
		return bH.dl(eC, 4) % bO.ej
	}, this.wc = function(eC) {
		return bH.dl(eC, 4 * bO.ej)
	}, this.wB = function(ef, eh) {
		return Math.floor(4 * (eh * bO.ej + ef))
	}, this.wR = function(eC) {
		var ea = this.ea;
		return this.aDU(eC + ea[0]) || this.aDU(eC + ea[1]) || this.aDU(eC + ea[2]) || this.aDU(eC + ea[3])
	}, this.ex = function(eC) {
		var ea = this.ea;
		return this.ed(eC + ea[0]) || this.ed(eC + ea[1]) || this.ed(eC + ea[2]) || this.ed(eC + ea[3])
	}, this.wP = function(eC, player) {
		var ea = this.ea;
		return this.aDV(eC + ea[0], player) || this.aDV(eC + ea[1], player) || this.aDV(eC + ea[2], player) || this.aDV(eC + ea[3], player)
	}, this.yI = function(player) {
		return player < a9.je && 2 !== ac.a1n[player]
	}, this.g8 = function(eC) {
		return 208 <= a9h[eC + 3]
	}, this.wW = function(player, eC) {
		return this.g8(eC) && this.aDW(player, eC)
	}, this.aDW = function(player, eC) {
		return player === this.eQ(eC)
	}, this.aDX = function(eC) {
		return 208 <= a9h[eC + 3] && a9h[eC + 3] < 224
	}, this.ip = function(eC) {
		return 224 <= a9h[eC + 3] && a9h[eC + 3] < 248
	}, this.wQ = function(eC) {
		for (var ea = this.ea, a7 = 3; 0 <= a7; a7--)
			if (this.h1(eC + ea[a7])) return !0;
		return !1
	}, this.eT = function(eC) {
		return this.g8(eC) || this.eP(eC)
	}, this.h1 = function(eC) {
		return 0 === a9h[eC + 3] && 2 === a9h[eC + 2]
	}, this.eP = function(eC) {
		return 0 === a9h[eC + 3] && 1 === a9h[eC + 2]
	}, this.vE = function(eC) {
		return 0 === a9h[eC + 3] && 3 === a9h[eC + 2]
	}, this.ed = function(eC) {
		return 0 === a9h[eC + 3] && 5 <= a9h[eC + 2]
	}, this.aDU = function(eC) {
		return 0 === a9h[eC + 3] && 3 <= a9h[eC + 2]
	}, this.eG = function(eC) {
		return a9h[eC + 2] - 5
	}, this.aDV = function(eC, player) {
		return this.eP(eC) || this.g8(eC) && player !== this.eQ(eC)
	}, this.eQ = function(eC) {
		return a9h[eC] % 4 * 128 + a9h[eC + 1] % 4 * 32 + a9h[eC + 2] % 4 * 8 + a9h[eC + 3] % 8
	}, this.wX = function(eC) {
		aDY(eC, 1)
	}, this.aDZ = function(eC) {
		aDY(eC, 2)
	}, this.wC = function(eC, player) {
		a9h[eC] = aD8[player], a9h[eC + 1] = aD9[player], a9h[eC + 2] = aDA[player], a9h[eC + 3] = 208 + aDB[player], aDb(eC)
	}, this.g3 = function(eC, player) {
		a9h[eC] = aDC[player], a9h[eC + 1] = aDD[player], a9h[eC + 2] = aDE[player], a9h[eC + 3] = 224 + aDB[player], aDb(eC)
	}, this.iq = function(eC, player) {
		a9h[eC] = aDF[player], a9h[eC + 1] = aDG[player], a9h[eC + 2] = aDH[player], a9h[eC + 3] = 248 + aDB[player], aDb(eC)
	}
}

function cl() {
	var e0 = 0,
		aDc = new Uint16Array(32);

	function remove(a3Q) {
		var a7;
		for (e0 -= 2, a7 = a3Q; a7 < e0; a7 += 2) aDc[a7] = aDc[a7 + 2], aDc[a7 + 1] = aDc[a7 + 3]
	}
	this.dU = function() {
		e0 = 0
	}, this.iS = function() {
		var a7, il, hu;
		if (0 !== e0)
			if (0 === ac.lV[a9.eI] || aZ.aDd(a9.eI) === aZ.fe(a9.eI)) e0 = 0;
			else
				for (a7 = e0 - 2; 0 <= a7; a7 -= 2)(il = aDc[a7]) < a9.eV && 0 === ac.lV[il] ? remove(a7) : (hu = aDc[a7 + 1], (il >= a9.eV && aDe(a9.eI) || il < a9.eV && aDf(a9.eI, il)) && (b4.gv.h6(hu, il), remove(a7)))
	}, this.h8 = function(il, hu) {
		! function(il, hu) {
			var a7;
			for (a7 = 0; a7 < e0; a7 += 2)
				if (aDc[a7] === il) return aDc[a7 + 1] = Math.min(aDc[a7 + 1] + hu, 1023), 1;
			return
		}(il, hu) && 32 !== e0 && (aDc[e0] = il, aDc[e0 + 1] = hu, e0 += 2)
	}
}

function cO() {
	function aDm(player) {
		var dk;
		b6.fu.a1p(player) && (dk = ac.ga[player] - ac.a1t[player] + aZ.aDo(player), bZ.fy(player, Math.abs(dk), dk < 0 ? 18 : 12)), ac.ga[player] = 0, ac.a1t[player] = 0
	}

	function aDv() {
		aT.show(!1, !1, !1, !0), aS.a8t(), bN.result.z4()
	}

	function aDj(player, aDu) {
		for (var a7 = aDu.length - 1; 0 <= a7; a7--) aZ.aDx(aDu[a7], player)
	}

	function aDl(player) {
		for (var i9 = ac.i9, iA = ac.iA, iB = ac.iB, iC = ac.iC, ly = i9[player], lz = iB[player], ej = bO.ej, gM = ac.gM, ef = iA[player]; ly <= ef; ef--)
			for (var eh = iC[player]; lz <= eh; eh--) {
				var g6 = 4 * (eh * ej + ef);
				aY.wW(player, g6) && (aY.wX(g6), gM[player]--)
			}
		i9[player] = iA[player] = 0, iB[player] = iC[player] = 0
	}
	this.dd = function(g6) {
		var player, dk = ac.gM[g6];
		bJ.s.oa[g6] ? dk && (aDj(player = g6, aZ.aDk(player)), aDl(player), aB.fw(player), aZ.clear(player), aDm(player), function(player) {
			ac.w7[player] = 0, ac.g0[player] = [], ac.gE[player] = [], ac.gF[player] = [], ac.ey[player] = []
		}(player)) : !dk && ac.g0[g6].length || this.aDi(g6)
	}, this.aDi = function(player) {
		! function(player) {
			aY.yI(player) && (ac.z2[player] = be.yw.aDt(), a9.yR++);
			var aDu = aZ.aDk(player);
			0 === aDu.length ? b6.fu.a1o(player) && aDv() : (aDj(player, aDu), function(player, aDu) {
				var aDz = aDu[function(aDu) {
					var a7, e0 = 0;
					for (a7 = aDu.length - 1; 1 <= a7; a7--) ac.gM[aDu[a7]] > ac.gM[aDu[e0]] && (e0 = a7);
					return e0
				}(aDu)];
				9 === a9.jy && 1 === bc.eW[player] && au.jW(8) && av.aE0(aDz);
				if (b6.fu.a1o(player)) aDv(), aJ.yb(aDz, 1);
				else {
					for (var a7 = aDu.length - 1; 0 <= a7; a7--)
						if (b6.fu.a1p(aDu[a7]) && (bZ.lR[4 - b6.fu.j1(player)]++, b6.fu.a1o(aDu[a7]))) return aJ.yb(player, 0);
					b6.fu.j1(player) || aJ.a4f(0, player, aDz)
				}
			}(player, aDu))
		}(player), aDl(player), aDm(player),
			function(player) {
				ac.lV[player] = 0, ac.g0[player] = null, ac.gE[player] = null, ac.gF[player] = null, ac.ey[player] = null
			}(player), aB.fw(player), aZ.clear(player), bJ.aDr.aDs(player)
	}
}

function cq() {
	var input;

	function aE1(e) {
		(e = e.target.files) && 0 < e.length && b2.aE4(e[0])
	}

	function aE8(e) {
		var et = new Image;
		et.onload = aE9, et.src = e.target.result
	}

	function aE9(e) {
		var e = e.target,
			canvas = document.createElement("canvas");
		canvas.width = e.width, canvas.height = e.height;
		canvas.getContext("2d").drawImage(e, 0, 0);
		var e = canvas.width,
			j7 = canvas.height;
		e > bO.aEB || j7 > bO.aEB || e < 10 || j7 < 10 ? (e = "Image dimensions must be between 10 and " + bO.aEB + ".", u.tq ? u.tq.showToast(e) : alert(e)) : 20 === n.rm && n.aD4().aE9(canvas)
	}
	this.dU = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = aE1
	}, this.zq = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.aE2 = function() {
		input.click()
	}, this.aE4 = function(aE5) {
		var g = aE5.name.split("."),
			g = g[g.length - 1].toLowerCase();
		"gif" !== g && "jpg" !== g && "jpeg" !== g && "png" !== g || ((g = new FileReader).onload = aE8, g.readAsDataURL(aE5))
	}
}

function co() {
	this.aED = null, this.dU = function() {
		10 !== a9.jy ? this.aED = null : this.aED = new Uint32Array(a9.eV)
	}, this.iS = function() {
		10 === a9.jy && this.qb()
	}, this.qb = function() {
		for (var g6, target, a94, aED = this.aED, yG = ah.jh, a1u = ac.ga, a7 = ah.jf - 1; 0 <= a7; a7--)(g6 = yG[a7]) >= a9.je || (target = Math.max(bH.dl(a1u[g6], 4), 2048), a94 = Math.max(aa.a95(g6), 100), aED[g6] += bH.dl(a94 * target, 1e4),
			aED[g6] > target && (aED[g6] = target))
	}, this.a1z = function(player, im) {
		return im > this.aED[player] ? (im = this.aED[player], this.aED[player] = 0) : this.aED[player] -= im, im
	}
}

function dQ() {
	function aEF(e) {
		var g, e = e.target.files;
		e && 0 < e.length && (e = e[0], "json" === (g = e.name.split("."))[g.length - 1].toLowerCase()) && ((g = new FileReader).onload = aEN, g.readAsText(e))
	}

	function aEN(e) {
		var aER;
		a9.yP || (e = JSON.parse(e.target.result), aER = a9.data = new a2n, aES(e, aER, "mapType", 0, 2), aES(e, aER, "mapProceduralIndex", 0, 255), aES(e, aER, "mapRealisticIndex", 0, 255), aES(e, aER, "mapSeed", 0, 16383), function(aEQ, aER, g7,
				max) {
				aEQ = aEQ[g7];
				aER[g7] = aEY(aEQ) ? aEQ.slice(0, max) : aER[g7]
			}(e, aER, "mapName", 20), function(aEQ, aER, g7) {
				var aEA;
				2 === aER.mapType && (!aEY(aEQ = aEQ[g7]) || aEQ.length <= 20 ? aER.mapType = 0 : ((aEA = new Image).onload = function() {
					b5.aEZ.aEa(aEA, 1), aEA.onload = null, aEA = null
				}, aEA.src = aEQ))
			}(e, aER, "canvas"), aES(e, aER, "passableWater", 0, 1), aES(e, aER, "passableMountains", 0, 1), aES(e, aER, "playerCount", 1, 512), aES(e, aER, "humanCount", 1, 1), aES(e, aER, "selectedPlayer", 0, 0), aES(e, aER, "gameMode", 0, 1),
			aES(e, aER, "playerMode", 0, 0), aES(e, aER, "battleRoyaleMode", 0, 0), aES(e, aER, "numberTeams", 0, 8), aES(e, aER, "isZombieMode", 0, 0), aES(e, aER, "isContest", 0, 0), aES(e, aER, "isReplay", 0, 0), aEV(e, aER, "elo", 16, 2,
				16383), aES(e, aER, "colorsType", 0, 1), aES(e, aER, "colorsPersonalized", 0, 1), aEV(e, aER, "colorsData", 32, 512, 262143), aES(e, aER, "selectableColor", 0, 1), aEV(e, aER, "teamPlayerCount", 16, 9, 512), aES(e, aER,
				"neutralBots", 0, 1), aES(e, aER, "botDifficultyType", 0, 3), aES(e, aER, "botDifficultyValue", 0, 15), aEV(e, aER, "botDifficultyTeam", 8, 9, 15), aEV(e, aER, "botDifficultyData", 8, 512, 15), aES(e, aER, "spawningType", 0, 2),
			aES(e, aER, "spawningSeed", 0, 16383), aEV(e, aER, "spawningData", 16, 1024, 4095), aES(e, aER, "selectableSpawn", 0, 1), aES(e, aER, "playerNamesType", 0, 2),
			function(aEQ, aER, g7, size, max) {
				var a17 = aEQ[g7];
				if (Array.isArray(a17)) {
					for (var a18 = new Array(size), eY = Math.min(a17.length, size), a7 = 0; a7 < eY; a7++) a18[a7] = aEY(a17[a7]) ? a17[a7].slice(0, max) : "";
					aER[g7] = a18
				}
			}(e, aER, "playerNamesData", 512, 20), aES(e, aER, "selectableName", 0, 1), aES(e, aER, "aIncomeType", 0, 2), aES(e, aER, "aIncomeValue", 0, 255), aEV(e, aER, "aIncomeData", 8, 512, 255), aES(e, aER, "tIncomeType", 0, 2), aES(e, aER,
				"tIncomeValue", 0, 255), aEV(e, aER, "tIncomeData", 8, 512, 255), aES(e, aER, "iIncomeType", 0, 2), aES(e, aER, "iIncomeValue", 0, 255), aEV(e, aER, "iIncomeData", 8, 512, 255), aES(e, aER, "sResourcesType", 0, 2), aES(e, aER,
				"sResourcesValue", 0, 2047), aEV(e, aER, "sResourcesData", 16, 512, 2047), n.r(), n.s.aEP[0] = 0, n.o(19))
	}

	function aES(aEQ, aER, g7, min, max) {
		aEQ = aEQ[g7];
		aER[g7] = "number" == typeof aEQ && min <= aEQ && aEQ <= max ? Math.floor(aEQ) : aER[g7]
	}

	function aEY(p5) {
		return "string" == typeof p5
	}

	function aEV(aEQ, aER, g7, aEb, size, max) {
		var a17 = aEQ[g7];
		if (Array.isArray(a17)) {
			for (var a18 = new(8 === aEb ? Uint8Array : 16 === aEb ? Uint16Array : Uint32Array)(size), eY = Math.min(a17.length, size), a7 = 0; a7 < eY; a7++) a18[a7] = bH.ow(a17[a7], 0, max);
			aER[g7] = a18
		}
	}
	this.aEE = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aEF, input.click()
	}, this.aEG = function() {
		for (var aEJ, aAC, a5f = a9.data, keys = Object.keys(a5f), aEH = {}, a7 = 0; a7 < keys.length; a7++) {
			var key = keys[a7];
			a5f[key] instanceof Uint8Array || a5f[key] instanceof Uint16Array || a5f[key] instanceof Uint32Array ? aEH[key] = Array.from(a5f[key]) : aEH[key] = a5f[key]
		}
		aEH.canvas = 2 === aEH.mapType && aEH.canvas ? aEH.canvas.toDataURL() : null, aEJ = aEH, aEJ = JSON.stringify(aEJ, null, 2), aEJ = new Blob([aEJ], {
			type: "application/json"
		}), (aAC = document.createElement("a")).href = URL.createObjectURL(aEJ), aAC.download = "tt_scenario.json", aAC.click()
	}
}

function cR() {
	var aEc, aEd, size, il, im, id, aEe;

	function aEf(player) {
		return player < a9.je ? aEc * player : aEc * a9.je + aEd * (player - a9.je)
	}
	this.dU = function() {
		aEc = a9.je < 16 ? 12 : 8, aEd = 4;
		var eY = aEf(a9.eV);
		size = new Uint8Array(a9.eV), il = new Uint16Array(eY), im = new Uint32Array(eY), id = new Uint16Array(eY), aEe = new Uint8Array(eY)
	}, this.ov = function(a5s, aEg) {
		var aEh = this.gb(a5s, aEg),
			aEg = (this.gZ(a5s, aEg, 0), b6.fu.fx(a5s, aEh));
		bZ.fy(a5s, aEh - aEg, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.aDx = function(player, aEg) {
		var aEk, aEg = function(player, aEg) {
			var a7, kP = aEf(player);
			for (a7 = size[player] - 1; 0 <= a7; a7--)
				if (0 === id[kP + a7] && il[kP + a7] === aEg) return a7;
			return size[player]
		}(player, aEg);
		aEg !== size[player] && (aEk = im[aEf(player) + aEg], this.fz(player, aEg), this.ii(player, aEk, a9.eV))
	}, this.iz = function(player, aEg) {
		for (var kP = aEf(player), a7 = size[player] - 1; 0 <= a7; a7--)
			if (0 === id[kP + a7] && il[kP + a7] === aEg) return !0;
		return !1
	}, this.jI = function(player) {
		return player < a9.je ? size[player] < aEc : size[player] < aEd
	}, this.fe = function(player) {
		return size[player]
	}, this.fk = function(player, a7) {
		return il[aEf(player) + a7]
	}, this.ff = function(player, a7) {
		return id[aEf(player) + a7]
	}, this.aEl = function(player, aEm) {
		for (var kP = aEf(player), a7 = size[player] - 1; 0 <= a7; a7--)
			if (id[kP + a7] === aEm) return a7;
		return -1
	}, this.fl = function(player, a7) {
		return im[aEf(player) + a7]
	}, this.gb = function(player, aEg) {
		for (var kP = aEf(player), a7 = size[player] - 1; 0 <= a7; a7--)
			if (0 === id[kP + a7] && il[kP + a7] === aEg) return im[kP + a7];
		return 0
	}, this.aDo = function(player) {
		for (var kP = aEf(player), f0 = 0, a7 = size[player] - 1; 0 <= a7; a7--) f0 += im[kP + a7];
		return f0
	}, this.aEn = function(player) {
		for (var kP = aEf(player), f0 = 0, a7 = size[player] - 1; 0 <= a7; a7--) 0 === id[kP + a7] && (f0 += im[kP + a7]);
		return f0
	}, this.aDd = function(player) {
		for (var kP = aEf(player), g1 = 0, a7 = size[player] - 1; 0 <= a7; a7--) 0 < id[kP + a7] && g1++;
		return g1
	}, this.gZ = function(player, aEg, aEk) {
		for (var kP = aEf(player), a7 = size[player] - 1; 0 <= a7; a7--) 0 === id[kP + a7] && il[kP + a7] === aEg && (im[kP + a7] = aEk)
	}, this.gK = function(player, a7, aEk) {
		im[aEf(player) + a7] = Math.max(aEk, 0)
	}, this.gL = function(player, a7) {
		aEe[aEf(player) + a7] = 0
	}, this.fm = function(player, a7) {
		return aEe[aEf(player) + a7]
	}, this.ii = function(player, aEk, aEg) {
		b6.fu.a1p(aEg) && bZ.lR[6 - b6.fu.j1(player)]++;
		for (var kP = aEf(player), a7 = size[player] - 1; 0 <= a7; a7--)
			if (0 === id[kP + a7] && il[kP + a7] === aEg) return im[kP + a7] += aEk, void(im[kP + a7] = im[kP + a7] > a9.a1v ? a9.a1v : im[kP + a7]);
		il[kP + size[player]] = aEg, im[kP + size[player]] = aEk, id[kP + size[player]] = 0, aEe[kP + size[player]] = 1, size[player]++, player < a9.je && (aEg === a9.eI ? aJ.yb(player, 5) : player === a9.eI && ab.a4h(aEg))
	}, this.aEo = function(player, aEk, aEm) {
		var kP = aEf(player);
		il[kP + size[player]] = 0, im[kP + size[player]] = aEk, id[kP + size[player]] = aEm, aEe[kP + size[player]] = 0, size[player]++
	}, this.fz = function(player, e0) {
		var er, kP;
		if (0 !== size[player])
			for (kP = aEf(player), size[player]--, er = e0; er < size[player]; er++) il[kP + er] = il[kP + er + 1], im[kP + er] = im[kP + er + 1], id[kP + er] = id[kP + er + 1], aEe[kP + er] = aEe[kP + er + 1]
	}, this.aDk = function(player) {
		for (var er, kP, aDu = [], a7 = ah.jf - 1; 0 <= a7; a7--)
			for (kP = aEf(ah.jh[a7]), er = size[ah.jh[a7]] - 1; 0 <= er; er--)
				if (0 === id[kP + er] && il[kP + er] === player) {
					aDu.push(ah.jh[a7]);
					break
				} return aDu
	}
}

function cS() {
	var aEp;

	function aEr(player) {
		var dz, jJ;
		return b6.fu.j1(player) && player < a9.je ? 0 : (dz = aEp[bH.dl((a9.eV - 1) * ac.gM[player], a9.jO)], bb.jb() < 1920 && (dz = Math.max(bH.dl(100 * (13440 - 6 * bb.jb()), 1920), dz)), jJ = aa.jK(player), ac.ga[player] > jJ && (dz -= bH.dl(2 *
			dz * (ac.ga[player] - jJ), jJ)), Math.min(Math.max(dz, 0), 700))
	}

	function aF2(mA) {
		for (var gM = ac.gM, jh = ah.jh, a7 = ah.jf - 1; 0 <= a7; a7--) {
			var g6 = jh[a7];
			b6.fu.fx(g6, bH.dl(mA * gM[g6], 32))
		}
	}

	function aEz() {
		var v6 = a9.eI;
		bK.f5[0] = ac.ga[v6] - ac.a1t[v6]
	}

	function aF1(e0) {
		var v6 = a9.eI;
		bZ.lR[e0] += ac.ga[v6] - ac.a1t[v6] - bK.f5[0]
	}
	this.db = function() {
		for (var eY = a9.eV, a7 = (aEp = new Uint16Array(eY), 0); a7 < eY; a7++) aEp[a7] = 100 + aEq(bH.dl(25600 * a7, eY - 4), 9)
	}, this.dU = function() {
		0 === a9.data.iIncomeType ? this.a95 = aEr : 1 === a9.data.iIncomeType ? this.a95 = function(player) {
			return bH.dl(a9.data.iIncomeValue * aEr(player), 64)
		} : this.a95 = function(player) {
			return bH.dl(a9.data.iIncomeData[player] * aEr(player), 64)
		}
	}, this.iS = function() {
		if (bb.jb() % 10 == 9 && (function() {
				aEz();
				for (var jh = ah.jh, ga = ac.ga, a7 = ah.jf - 1; 0 <= a7; a7--) {
					var g6 = jh[a7],
						aF0 = bH.dl(aa.a95(g6) * ga[g6], 1e4);
					b6.fu.fx(g6, Math.max(aF0, 1))
				}
				aF1(9)
			}(), function() {
				if (0 !== a9.data.aIncomeType) {
					if (aEz(), 1 === a9.data.aIncomeType)
						for (var gM = ac.gM, jh = ah.jh, mA = a9.data.aIncomeValue, a7 = ah.jf - 1; 0 <= a7; a7--) {
							var g6 = jh[a7];
							b6.fu.fx(g6, bH.dl(mA * gM[g6], 128))
						} else 2 === a9.data.aIncomeType && function() {
							for (var gM = ac.gM, jh = ah.jh, mA = a9.data.aIncomeData, a7 = ah.jf - 1; 0 <= a7; a7--) {
								var g6 = jh[a7];
								b6.fu.fx(g6, bH.dl(mA[g6] * gM[g6], 128))
							}
						}();
					aF1(18)
				}
			}(), bb.jb() % 100 == 99)) {
			if (aEz(), 0 === a9.data.tIncomeType) aF2(32);
			else if (1 === a9.data.tIncomeType) aF2(a9.data.tIncomeValue);
			else
				for (var gM = ac.gM, jh = ah.jh, mA = a9.data.tIncomeData, a7 = ah.jf - 1; 0 <= a7; a7--) {
					var g6 = jh[a7];
					b6.fu.fx(g6, bH.dl(mA[g6] * gM[g6], 32))
				}
			aF1(8)
		}
	}, this.jK = function(player) {
		return Math.min(100 * ac.gM[player], a9.a2j)
	}, this.no = function(player, np) {
		b6.fu.fx(np, bK.f6[0]), bZ.oC(player, np), ab.aEt(player, bK.f6[0] + bK.f6[1]), ab.oD(np, bK.f6[0]), b6.fu.ol(player)
	}, this.aEu = function() {
		for (var eY = ah.jf, yG = ah.jh, kP = 0, a1u = ac.ga, a7 = 0; a7 < eY; a7++) kP += a1u[yG[a7]];
		return kP
	}, this.aEv = function(zK) {
		for (var g6, eY = ah.jf, yG = ah.jh, kP = 0, a1u = ac.ga, eW = bc.eW, a7 = 0; a7 < eY; a7++) eW[g6 = yG[a7]] === zK && (kP += a1u[g6]);
		return kP
	}
}

function cU() {
	var aF6, aF7, aF8, aF9, aFA, aFB, aFC, aFD, aFE, aFF, aFG, aFH, aFI, aFJ, aFK, aFL, aFM, aFN, aFP, aFQ, aA6, aFR, aFS, aFZ, aFa, aFO = null,
		aFU = 0,
		aFV = !1,
		aFW = new Float32Array(4),
		aFX = 0,
		aFY = !0,
		a8G = 400;

	function pS() {
		aFE = Math.floor(+at.pQ), aFF = Math.floor(.5 * aFE)
	}

	function aFb() {
		var a7, aFg;
		for (tK.font = b6.pO.rP(1, 100 * aFG), aFg = 80 / Math.floor(tK.measureText(b6.zC.xi(a9.a1v)).width), tK.font = b6.pO.rP(1, 100), a7 = a9.eV - 1; 0 <= a7; a7--) aFD[a7] = 100 / Math.floor(tK.measureText(ac.a4d[a7]).width), aFC[a7] = Math.min(
			aFg, aFD[a7])
	}

	function aFh(a7) {
		return !bf.dp.data[7].value || (a7 = ac.ga[a7]) < 1e6 ? 1 : a7 < 1e7 ? aFW[0] : aFW[Math.min(Math.floor(Math.log10(a7)) - 6, 3)]
	}

	function aFf(hH) {
		aFN = !1, aFM = 1, aFK = aFL = 0, aFY && (b6.pO.textAlign(hH, 1), b6.pO.textBaseline(hH, 1));
		for (var aFn, aFo, a7, aFp, fontSize, aFq, ly = hv / hw, lz = hx / hw, mB = (at.a1 + hv) / hw, mC = (at.j7 + hx) / hw, aFr = 0 !== ac.lV[a9.eI] && aY.yI(a9.eI), er = ah.jf - 1; 0 <= er; er--) a7 = ah.jh[er], (fontSize = Math.floor(aFJ * hw *
			aFh(a7) * aFC[a7] * aFA[a7])) < aFI || aFE <= fontSize || aF8[a7] + aFA[a7] > ly && aF8[a7] < mB && aF9[a7] + aFB[a7] > lz && aF9[a7] < mC && (aFn = Math.floor(at.a1 * (aF8[a7] + aFA[a7] / 2 - ly) / (mB - ly)), aFo = Math.floor(at
			.j7 * (aF9[a7] + aFB[a7] / 2 - lz) / (mC - lz) - .1 * fontSize), aFp = aY.a6K[a7], hH.font = b6.pO.rP(1 === ac.a1n[a7] ? 4 : 1, fontSize), hH.fillStyle = aFs(fontSize, aFp % 2), bf.dp.data[7].value ? aFt(hH, a7, fontSize, aFn,
			aFo, aFp) : aFu(a7, fontSize, aFn, aFo, hH), aFN = !0, 0 < aA6[a7] ? function(aFn, aFo, fontSize, a7, hH) {
			0 === jP[a7] ? af.ww.xZ(aFQ[a7]) ? (function(aFn, aFo, fontSize, player, nz, hH) {
				for (var vg = aFo, hG = (hH.globalAlpha = aG2(fontSize), aFh(player) * (bf.dp.data[7].value ? aFX : aFD[player])), vf = aFn - .5 * fontSize / hG - .9 * fontSize, es = 0; es < 2; es++) hH.fillText(af.ww.xT(nz), vf, vg),
					vf = aFn + .5 * fontSize / hG + .9 * fontSize;
				hH.globalAlpha = 1
			}(aFn, aFo, fontSize, a7, aFQ[a7], hH), aFw(aFn, aFo, fontSize, 0, 0, hH)) : af.ww.xb(aFQ[a7]) ? (aG5(aFn, aFo, fontSize, aFQ[a7], 0, hH), aFw(aFn, aFo, fontSize, 0, 1, hH)) : (aG5(aFn, aFo, fontSize, aFQ[a7], 1, hH), aFw(aFn,
				aFo, fontSize, 1, 0, hH)) : aG5(aFn, aFo, fontSize, aFQ[a7], 0, hH)
		}(aFn, aFo, fontSize, a7, hH) : 0 === jP[a7] && aFw(aFn, aFo, fontSize, 0, 0, hH), aFr && (0 < aA6[a7 + a9.eV] || 0 < aA6[a7 + 2 * a9.eV] || 0 < aA6[a7 + 3 * a9.eV] || 0 < aA6[a7 + 4 * a9.eV]) && function(aFn, aFo, fontSize, a7, hH) {
			var et, g1 = -1;
			for (et = 4; 1 <= et; et--) 0 < aA6[a7 + et * a9.eV] && g1++;
			for (et = 1; et < 5; et++) 0 < aA6[a7 + et * a9.eV] && (! function(aFn, aFo, fontSize, et, a7, aG0, dk, hH) {
				var a1I;
				if (1 === et) {
					a7 = aFQ[a7 + a9.eV];
					if (!af.ww.xa(a7)) return function(aFn, aFo, fontSize, nz, aG0, hH) {
						hH.globalAlpha = aG2(fontSize);
						aFn -= .534 * aG0 * fontSize, aG0 = aFo + 1.59 * fontSize;
						hH.font = b6.pO.rP(0, .785 * fontSize), hH.fillText(af.ww.xT(nz), aFn, aG0), hH.globalAlpha = 1
					}(aFn, aFo, fontSize, a7, aG0, hH);
					a1I = af.v5.x3[a7 - 1024 + af.ww.xE]
				} else a1I = 2 === et ? aH.a3O()[4].canvas[+(dk < 255)] : (3 === et ? aH.a3O()[5] : aH.a3O()[6]).canvas[0];
				a7 = af.v5.x4, dk = .8 * fontSize / a7, et = aFn - .5 * dk * a7 - .534 * aG0 * fontSize, aFn = aFo + 1.4 * dk * a7;
				hH.setTransform(dk, 0, 0, dk, et, aFn), hH.globalAlpha = aG2(fontSize), hH.drawImage(a1I, 0, 0), hH.globalAlpha = 1, hH.setTransform(1, 0, 0, 1, 0, 0)
			}(aFn, aFo, fontSize, et, a7, g1, aA6[a7 + et * a9.eV], hH), g1 -= 2)
		}(aFn, aFo, fontSize, a7, hH), (aFq = aFG * fontSize) < aFI || (hH.font = b6.pO.rP(1, aFq), aFo += Math.floor(.78 * fontSize), bf.dp.data[7].value ? aFu(a7, aFq, aFn, aFo, hH) : aFt(hH, a7, aFq, aFn, aFo, aFp)))
	}

	function aFu(a7, fontSize, ef, eh, hH) {
		var ___id = a7;
		var showName = a7 < a9.je || !__fx.settings.hideBotNames;
		if (showName) hH.fillText(ac.a4d[a7], ef, eh), a7 < a9.je && 2 !== ac.a1n[a7] || (a7 = fontSize / aFD[a7], hH.fillRect(ef - .5 * a7, eh + b6.pO.xU * fontSize, a7, Math.max(1, .1 * fontSize)));
		bf.dp.data[7].value && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (hH.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			hH.fillText(__fx.utils.getDensity(___id), ef, showName ? eh + fontSize : eh)
		);
	}

	function aFt(hH, a7, fontSize, aFn, aFo, aFp) {
		var ___id = a7;
		a7 = b6.zC.xi(ac.ga[a7]);
		aFp >> 1 & 1 ? (hH.lineWidth = .05 * fontSize, hH.strokeStyle = aFs(fontSize, aFp % 2), hH.strokeText(a7, aFn, aFo)) : (1 < aFp && (hH.lineWidth = .12 * fontSize, hH.strokeStyle = aFs(fontSize, aFp), hH.strokeText(a7, aFn, aFo)), hH.fillText(
			a7, aFn, aFo));
		bf.dp.data[7].value || __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (hH.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)), hH.fillText(__fx.utils.getDensity(___id), aFn, aFo + fontSize))
	}

	function aFw(aFn, aFo, fontSize, aG0, aG1, hH) {
		var a3y = .95 * fontSize / aFS,
			aFn = aFn - .5 * a3y * aFR + .8 * aG0 * fontSize,
			aG0 = aFo - 1.76 * a3y * aFS - (.35 - b6.pO.xU + .7) * aG1 * fontSize;
		hH.setTransform(a3y, 0, 0, a3y, aFn, aG0), hH.globalAlpha = aG2(fontSize), hH.drawImage(aX.get(4), 0, 0), hH.globalAlpha = 1, hH.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aG5(aFn, aFo, fontSize, nz, aG0, hH) {
		var hB, vf, a3y;
		hH.globalAlpha = aG2(fontSize), af.ww.xa(nz) ? (hB = af.v5.x4, hH.setTransform(a3y = 1.1 * fontSize / hB, 0, 0, a3y, vf = aFn - .5 * a3y * hB - .8 * aG0 * fontSize, a3y = aFo - 1.55 * a3y * hB), hH.drawImage(af.v5.x3[nz - 1024 + af.ww.xE], 0,
			0), hH.setTransform(1, 0, 0, 1, 0, 0)) : (vf = aFn - .8 * aG0 * fontSize, a3y = aFo - (.35 - b6.pO.xU + 1) * fontSize, hH.fillText(af.ww.xT(nz), vf, a3y)), hH.globalAlpha = 1
	}

	function aFs(fontSize, aFp) {
		return aFF <= fontSize && fontSize < aFE ? bc.aG7[aFp] + aG2(fontSize).toFixed(3) + ")" : bc.aG8[aFp]
	}

	function aG2(fontSize) {
		return aFF <= fontSize && fontSize < aFE ? 1 - (fontSize - aFF) / (aFE - aFF) : 1
	}

	function aGH(hG, a1) {
		return 1 + Math.floor(aFH * hG * a1)
	}

	function aGE(a7) {
		for (var left = aF8[a7], er = aF8[a7] - ac.i9[a7] - 1; 0 <= er; er--)
			if (!aGI(a7, --left, aF9[a7], aFB[a7])) {
				left++;
				break
			} var right = aF8[a7];
		for (er = ac.iA[a7] - aF8[a7] - aFA[a7]; 0 <= er; er--)
			if (!aGI(a7, ++right + aFA[a7] - 1, aF9[a7], aFB[a7])) {
				right--;
				break
			} var ef = Math.floor((left + right) / 2),
			top = aF9[a7];
		for (er = aF9[a7] - ac.iB[a7] - 1; 0 <= er; er--)
			if (!aGJ(a7, ef, --top, aFA[a7])) {
				top++;
				break
			} var bottom = aF9[a7];
		for (er = ac.iC[a7] - aF9[a7] - aFB[a7]; 0 <= er; er--)
			if (!aGJ(a7, ef, ++bottom + aFB[a7] - 1, aFA[a7])) {
				bottom--;
				break
			} var eh = Math.floor((top + bottom) / 2);
		aGB(a7, ef, eh, aFA[a7], aFB[a7]) && (aF8[a7] = ef, aF9[a7] = eh)
	}

	function aGB(player, ef, eh, a1, j7) {
		eb = Math.floor(.2 * a1);
		for (var eb, et = ef + a1 - 1; ef <= et; et--)
			if (!aGI(player, et, eh, j7)) return;
		for (et = eh + j7 - 1 - (eb = (eb = Math.floor(.25 * j7)) < 1 ? 1 : eb); eh + eb <= et; et--)
			if (!aGJ(player, ef, et, a1)) return;
		return 1
	}

	function aGI(player, ef, eh, j7) {
		return aY.wW(player, 4 * (eh * bO.ej + ef)) && aY.wW(player, 4 * ((eh + j7 - 1) * bO.ej + ef))
	}

	function aGJ(player, ef, eh, a1) {
		return aY.wW(player, 4 * (eh * bO.ej + ef)) && aY.wW(player, 4 * (eh * bO.ej + ef + a1 - 1))
	}
	this.dU = function() {
		if (a8G = 0 === (a8G = bf.dp.data[11].value) ? 280 : 1 === a8G ? 187 : 112, aFN = !1, aFJ = .88, aFG = .5, aFH = 1.8, aFI = 12 - 3 * bf.dp.data[9].value, aF7 = aF6 = 0, aF8 = new Uint16Array(a9.eV), aF9 = new Uint16Array(a9.eV), aFA =
			new Uint16Array(a9.eV), aFB = new Uint16Array(a9.eV), aFC = new Float32Array(a9.eV), aFD = new Float32Array(a9.eV), aFQ = new Uint16Array(2 * a9.eV), aA6 = new Uint8Array(5 * a9.eV), aFZ = new Uint8Array(a9.eV), aFa = new Uint8Array(
				a9.eV), aFY || (aFO = aFO || document.createElement("canvas")), pS(), aFL = aFK = 0, aFM = 1, bf.dp.data[7].value) {
			var a7, aFg;
			for (aFb(), tK.font = b6.pO.rP(1, 100), aFg = 100 / Math.floor(tK.measureText("900 000").width), a7 = a9.eV - 1; 0 <= a7; a7--) aFC[a7] = Math.min(aFg, 2 * aFD[a7]);
			aFX = aFg, aFW[0] = 100 / (aFg * Math.floor(tK.measureText("5 000 000").width)), aFW[1] = 100 / (aFg * Math.floor(tK.measureText("50 000 000").width)), aFW[2] = 100 / (aFg * Math.floor(tK.measureText("500 000 000").width)), aFW[3] =
				100 / (aFg * Math.floor(tK.measureText("1 000 000 000").width))
		} else aFb();
		! function() {
			var a7;
			for (a7 = a9.eV - 1; 0 <= a7; a7--) ac.gM[a7] < 12 ? (aF8[a7] = ac.i9[a7] + 1, aF9[a7] = ac.iB[a7] + 1, aFA[a7] = 1, aFB[a7] = 1) : (aF8[a7] = ac.i9[a7], aF9[a7] = ac.iB[a7] + 1, aFA[a7] = 4, aFB[a7] = 2);
			if (a9.gu)
				for (a7 = 0; a7 < a9.je; a7++) aFA[a7] = 0;
			aFR = aX.get(4).width, aFS = aX.get(4).height
		}()
	}, this.aEt = function(g6, a4x) {
		a4x > 18 * ac.gM[g6] ? (aFa[g6] = 6, aY.a6K[g6] = 2 + aY.a6K[g6] % 2) : (aFZ[g6] = 4, (aY.a6K[g6] < 2 || 3 < aY.a6K[g6]) && (aY.a6K[g6] = 6 + aY.a6K[g6] % 2))
	}, this.oD = function(g6, a4x) {
		a4x > 6 * ac.gM[g6] ? (aFa[g6] = 6, aY.a6K[g6] = 4 + aY.a6K[g6] % 2) : (aFZ[g6] = 4, (aY.a6K[g6] < 4 || 5 < aY.a6K[g6]) && (aY.a6K[g6] = 8 + aY.a6K[g6] % 2))
	}, this.resize = function() {
		pS(), aFY || aFf(aFP)
	}, this.a2f = function() {
		for (var a7 = 0; a7 < a9.je; a7++) ac.iA[a7] - ac.i9[a7] != 3 || ac.iC[a7] - ac.iB[a7] != 3 ? (aF8[a7] = ac.i9[a7] + (ac.iA[a7] !== ac.i9[a7] ? 1 : 0), aF9[a7] = ac.iB[a7], aFA[a7] = 1, aFB[a7] = 1) : (aF8[a7] = ac.i9[a7], aF9[a7] = ac
			.iB[a7] + 1, aFA[a7] = 4, aFB[a7] = 2)
	}, this.ox = function(player, e0, aFi) {
		! function(player, e0, aFi) {
			player += e0 * a9.eV;
			0 === e0 ? aFQ[player] === aFi && 0 < aA6[player] ? aA6[player] = 0 : (aFQ[player] = aFi, aA6[player] = af.ww.xZ(aFi) ? 255 : 64) : 1 === e0 ? (aA6[player] = 64, aFQ[player] = aFi) : aA6[player] = aFi
		}(player, e0, aFi), 2 === a9.yP && this.lH(!0)
	}, this.tJ = function() {
		aFY ? aFf(tK) : aFN && (1 !== aFM ? (tK.imageSmoothingEnabled = !0, tK.setTransform(aFM, 0, 0, aFM, 0, 0), tK.drawImage(aFO, -aFK / aFM, -aFL / aFM), tK.setTransform(1, 0, 0, 1, 0, 0), tK.imageSmoothingEnabled = !1) : tK.drawImage(aFO, -
			aFK, -aFL))
	}, this.a74 = function(hg, hj) {
		aFK += hg, aFL += hj
	}, this.a00 = function(hg, hj) {
		ab.a74(hg, hj)
	}, this.zoom = function(a0u, kk, kl) {
		aFM *= a0u, aFK = (aFK + kk) * a0u - kk, aFL = (aFL + kl) * a0u - kl
	}, this.lH = function(bo) {
		return !aFY && !(!aFV && !bo && bb.lo < aFU + (1 === aFM && 0 === aFK && 0 === aFL && (a9.a37() || a9.gu || 2 === a9.yP) ? 1e3 : a8G) || (aFV = !1, aFU = bb.lo, aFf(aFP), 0))
	}, this.aFl = function(a7) {
		return aFh(a7) * aFC[a7]
	}, this.aFm = function(player) {
		return aFC[player]
	}, this.iS = function() {
		bb.jb() % 10 == 9 && (aFV = a9.a39() && !a9.a37()), !a9.a37() && 4 <= ++aF7 && function() {
			var a7, er, es;
			for (aF7 = 0, es = 4; 1 <= es; es--)
				for (er = ah.jf - 1; 0 <= er; er--) a7 = ah.jh[er] + es * a9.eV, 0 < aA6[a7] && aA6[a7] < 255 && aA6[a7]--;
			if (2 !== a9.yP)
				for (er = ah.jf - 1; 0 <= er; er--) a7 = ah.jh[er], 0 < aA6[a7] && aA6[a7] < 255 && aA6[a7]--
		}();
		var a7, er, eY = Math.floor(.1 * ah.jf);
		for (eY = (eY = eY < 8 ? 8 : eY) > ah.jf ? ah.jf : eY, a7 = aF6 + eY - 1; aF6 <= a7; a7--) er = a7 % ah.jf, ! function(a7) {
			var hG = aFh(a7) * aFC[a7];
			0 < aFA[a7] && aGB(a7, aF8[a7], aF9[a7], aFA[a7], aFB[a7]) ? ! function(a7) {
				for (var ef, eh, a1, j7, eC = !1, es = 0; es < 8; es++) {
					if (a1 = aFA[a7] + 2, j7 = aFB[a7] + 2, a1 > ac.iA[a7] - ac.i9[a7] + 1 || j7 > ac.iC[a7] - ac.iB[a7] + 1) return eC;
					if (ef = aF8[a7] - 1, eh = aF9[a7] - 1, !aGB(a7, ef, eh, a1, j7)) return eC;
					aF8[a7] = ef, aF9[a7] = eh, aFA[a7] = a1, aFB[a7] = j7, eC = !0
				}
				return eC
			}(a7) && function(a7, hG) {
				for (var ef, eh, a1, j7, eC = !1, aAE = aFA[a7], mA = 1 + Math.floor(.02 * aAE), es = 1; es < 5; es++) {
					if ((a1 = aAE + es * mA) > ac.iA[a7] - ac.i9[a7] + 1) return eC;
					if ((j7 = aGH(hG, a1)) > ac.iC[a7] - ac.iB[a7] + 1) return eC;
					ef = ac.i9[a7] + Math.floor(Math.random() * (ac.iA[a7] - ac.i9[a7] + 2 - a1)), eh = ac.iB[a7] + Math.floor(Math.random() * (ac.iC[a7] - ac.iB[a7] + 2 - j7)), aGB(a7, ef, eh, a1, j7) && (aF8[a7] = ef, aF9[a7] = eh, aFA[
						a7] = a1, aFB[a7] = j7, eC = !0)
				}
				return eC
			}(a7, hG) && aGE(a7) : ! function(a7, hG) {
				var j7, ef = aF8[a7] + 1,
					eh = aF9[a7] + 1,
					a1 = aFA[a7] - 2;
				for (;;) {
					if (a1 < 1) {
						aFA[a7] = 0;
						break
					}
					if (j7 = aGH(hG, a1), aGB(a7, ef, eh, a1, j7)) return aF8[a7] = ef, aF9[a7] = eh, aFA[a7] = a1, aFB[a7] = j7, 1;
					ef++, eh++, a1 -= 2
				}
				return
			}(a7, hG) ? function(a7, hG) {
				var ef, eh, a1, j7, es, mG, iu = ac.iA[a7] - ac.i9[a7] + 1,
					kz = Math.floor(.02 * iu);
				for (mG = -6 * (kz = kz < 1 ? 1 : kz), es = iu; mG <= es; es -= kz)
					if (j7 = aGH(hG, a1 = 0 < es ? es : 1), ef = ac.i9[a7] + Math.floor(Math.random() * (ac.iA[a7] - ac.i9[a7] + 2 - a1)), eh = ac.iB[a7] + Math.floor(Math.random() * (ac.iC[a7] - ac.iB[a7] + 2 - j7)), aGB(a7, ef, eh, a1,
							j7)) return aF8[a7] = ef, aF9[a7] = eh, aFA[a7] = a1, aFB[a7] = j7
			}(a7, hG) : aGE(a7)
		}(ah.jh[er]);
		aF6 = (aF6 += eY) % ah.jf
	}, this.lC = function() {
		var a7, g6, hP, hQ;
		if (bb.jb() % 4 == 1)
			for (a7 = ah.jf - 1; 0 <= a7; a7--) g6 = ah.jh[a7], aY.a6K[g6] < 2 || ((hP = Math.max(aFZ[g6] - 1, 0)) === (hQ = Math.max(aFa[g6] - 1, 0)) ? 0 === hP && (aY.a6K[g6] %= 2) : 0 === hQ && aY.a6K[g6] < 6 && (aY.a6K[g6] += 4), aFZ[g6] =
				hP, aFa[g6] = hQ)
	}, this.a4h = function(player) {
		var a7 = player + 2 * a9.eV,
			dk = aA6[a7];
		return 0 < dk && (aJ.yW(50, player), aA6[a7] = 0, 255 === dk)
	}, this.a3i = function(player) {
		return 255 === aA6[player + 2 * a9.eV]
	}
}

function cW() {
	var aGK, aGL;
	this.dU = function() {
		aGK =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), aGL =
			"Pestilent Dominion;Wretched Realm;Damned Province;Corrupt Zone;Cursed Territory;Blight Nation;Haunted Expanse;Malevolent State;Ruined Empire;Contaminated Land;Epidemic Domain;Forsaken District;Abandoned Wasteland;Necrotic Enclave;Tainted Domain;Decayed Principality;Infested Region;Malignant Territory;Toxic Dominion;Ravaged Sector;Ghostly Realm;Plagued Commonwealth;Afflicted State;Desolate Nation;Apocalyptic Zone;Radiated Province;Deathly District;Pestilence Haven;Doom Territory;Malefic Expanse;Abandoned State;Cursed Haven;Corroded Zone;Hauntland;Noxious Nation;Infected Enclave;Ruinous Domain;Wasteland Woe;Rotten Principality;Voided Land;Vile Dominion;Catastrophic Region;Eerie Expanse;Desolation State;Forsaken Outpost;Contagion District;Damaged Province;Abhorrent Sector;Accursed Nation;Doomstruck Land;Radiant Ruin;Deathly Enclave;Malefic Dominion;Plague District;Infected Haven;Corrupt State;Pestilent Territory;Razed Realm;Haunted Wasteland;Toxic Sector;Cursed Dominion;Decaying Province;Forsaken Enclave;Ruinous Region;Malignant Haven;Infested State;Ghostly Nation;Tainted Territory;Damned District;Radiated Dominion;Desolate Expanse;Apocalyptic Land;Death Zone;Wretched State;Malevolent Haven;Plagued Nation;Noxious Domain;Voided Territory;Eerie Sector;Accursed Province;Necrotic District;Doom Haven;Haunt Realm;Rotten Nation;Forsaken Territory;Infected State;Abhorrent Expanse;Malignant Land;Toxic Dominion;Ruined District;Ghostland;Cursed Sector;Radiant Nation"
			.split(";");
		for (var a4z = ["K ", " Y", "E ", " Z", " z", " s", "S "], aGM = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], a7 = aGK.length - 1; 0 <= a7; a7--)
			for (var er = a4z.length - 1; 0 <= er; er--) aGK[a7] = aGK[a7].replace(a4z[er], aGM[er]);
		if (__fx.settings.realisticNames) aGK = realisticNames;
	}, this.a2u = function() {
		var eY = a9.je,
			a4d = ac.a4d,
			zE = ac.zE,
			playerNamesData = a9.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < eY)
			for (var a7 = 0; a7 < eY; a7++) a4d[a7] = zE[a7] = "Player " + au.iv(1e3);
		else
			for (a7 = 0; a7 < eY; a7++) a4d[a7] = zE[a7] = playerNamesData[a7]
	}, this.a3 = function() {
		if (9 === a9.jy) {
			for (var dz = au.random(), aGS = aGK, aGT = aGL, eY = aGS.length, kP = a9.data.teamPlayerCount[7], a4d = ac.a4d, zE = ac.zE, a7 = kP - 1; a7 >= a9.je; a7--) a4d[a7] = zE[a7] = aGS[(a7 + dz) % eY];
			for (eY = aGT.length, a7 = kP; a7 < a9.eV; a7++) a4d[a7] = zE[a7] = aGT[a7 % eY]
		} else(2 === a9.data.playerNamesType ? function() {
			for (var eY = a9.eV, a4d = ac.a4d, zE = ac.zE, playerNamesData = a9.data.playerNamesData, a7 = a9.je; a7 < eY; a7++) a4d[a7] = zE[a7] = playerNamesData[a7]
		} : 1 === a9.data.playerNamesType ? function() {
			for (var a4d = ac.a4d, zE = ac.zE, a7 = a9.je; a7 < a9.eV; a7++) a4d[a7] = zE[a7] = "Bot " + au.iv(1e3)
		} : function() {
			for (var aGS = aGK, eY = aGS.length, dz = au.random(), a4d = ac.a4d, zE = ac.zE, a7 = a9.je; a7 < a9.eV; a7++) a4d[a7] = zE[a7] = aGS[(a7 + dz) % eY]
		})()
	}
}

function cp() {
	this.aGU = [], this.aGV = [], this.dU = function() {
		this.aGU = [], this.aGV = []
	}, this.iS = function() {
		0 <= this.aGU.length && this.aGW(this.aGU), 0 <= this.aGV.length && this.aGW(this.aGV)
	}, this.aGW = function(g) {
		for (var es = -1, a7 = g.length - 1; 0 <= a7; a7--)
			if (g[a7].lo--, g[a7].lo <= 0) {
				es = a7;
				break
			} for (a7 = es; 0 <= a7; a7--) g.shift()
	}, this.a3W = function(id, yG, aGX) {
		return this.eu(this.aGU, id, yG, aGX)
	}, this.aGY = function(id, yG, aGX) {
		return this.eu(this.aGV, id, yG, aGX)
	}, this.eu = function(g, id, yG, aGX) {
		return ! function(g, id, yG) {
			var a7, k3;
			for (a7 = yG.length - 1; 0 <= a7; a7--)
				for (k3 = g.length - 1; 0 <= k3; k3--)
					if (g[k3].player === yG[a7] && id === g[k3].id) return 1;
			return
		}(g, id, yG) && (aGX && function(g, id, yG) {
			var a7;
			for (a7 = yG.length - 1; 0 <= a7; a7--) g.push({
				player: yG[a7],
				id: id,
				lo: 384
			})
		}(g, id, yG), !0)
	}
}

function cV() {
	this.zE = new Array(a9.eV), this.a4d = new Array(a9.eV), this.a1n = new Uint8Array(a9.eV), this.lV = new Uint8Array(a9.eV), this.i9 = new Uint16Array(a9.eV), this.iB = new Uint16Array(a9.eV), this.iA = new Uint16Array(a9.eV), this.iC =
		new Uint16Array(a9.eV), this.gM = new Uint32Array(a9.eV), this.w7 = new Uint32Array(a9.eV), this.ga = new Uint32Array(a9.eV), this.g0 = null, this.gE = null, this.gF = null, this.ey = null, this.ok = new Uint16Array(a9.eV), this.ia =
		new Uint16Array(a9.eV), this.ib = new Uint16Array(a9.eV), this.z2 = new Uint16Array(a9.eV), this.z6 = new Uint8Array(a9.eV), this.a1t = new Uint16Array(a9.eV), this.dU = function() {
			this.zE.fill(""), this.a4d.fill(""), this.a1n.fill(0), this.lV.fill(0), this.i9.fill(0), this.iB.fill(0), this.iA.fill(0), this.iC.fill(0), this.gM.fill(0), this.w7.fill(0), this.ga.fill(0), this.g0 = new Array(a9.eV), this.gE =
				new Array(a9.eV), this.gF = new Array(a9.eV), this.ey = new Array(a9.eV), this.ok.fill(0), this.ia.fill(0), this.ib.fill(0), this.z2.fill(0), this.z6.fill(0), this.a1t.fill(0)
		}
}

function cn() {
	this.aAU = function(player) {
		aC.lU(player), a9.yR++, ac.a1n[player] = 2, ac.z2[player] = be.yw.aDt(), player === a9.eI && (aT.show(!1, !1), aS.a8t(), bN.result.z4()), ab.a4h(player)
	}
}

function cP() {
	this.jh = null, this.jf = 0, this.a2y = function() {
		for (this.jf = 0, a7 = a9.eV - 1; 0 <= a7; a7--) 0 !== ac.lV[a7] && this.jf++;
		this.jh = new Uint16Array(this.jf);
		for (var eY = 0, a7 = 0; a7 < a9.eV; a7++) 0 !== ac.lV[a7] && (this.jh[eY++] = a7)
	}, this.lB = function() {
		for (var gM = ac.gM, w7 = ac.w7, z6 = ac.z6, jh = ah.jh, a7 = ah.jf - 1; 0 <= a7; a7--) {
			var dk, g6 = jh[a7];
			gM[g6] <= bH.dl(w7[g6], 4) ? ag.dd(g6) : gM[g6] >= w7[g6] ? (dk = gM[g6], 250 <= (w7[g6] = dk) && (z6[g6] = 1)) : w7[g6] -= Math.max(1, bH.dl(w7[g6] - gM[g6], 1e3))
		}
		this.aGc()
	}, this.aGc = function() {
		for (var lV = ac.lV, jg = this.jh, a9X = this.jf, a7 = a9X - 1; 0 <= a7; a7--) 0 === lV[jg[a7]] && (jg[a7] = jg[--a9X]);
		this.jf = a9X
	}
}

function cX() {
	var aGd;
	this.k8 = null, this.k7 = 0, this.dU = function() {
		aGd = [], 9 === a9.jy && this.aGe()
	}, this.aGe = function() {
		var aGf = [60, 85, 105, 150, 190, 333];
		if (this.k8 = [0, 0, 0, 0, 0, 0], this.k7 = 0, a9.je <= aGf[0]) this.k7 = aGf[0] - a9.je, this.k8[5] = bH.dl(78 * this.k7, 100), this.k8[0] = a9.eV - a9.je - this.k7 - this.k8[5];
		else
			for (var a7 = 1; a7 < 6; a7++)
				if (a9.je <= aGf[a7]) {
					this.k8[a7 - 1] = 512 - aGf[a7 - 1] - bH.dl((512 - aGf[a7 - 1]) * (a9.je - aGf[a7 - 1]), aGf[a7] - aGf[a7 - 1]), this.k8[a7] = 512 - a9.je - this.k8[a7 - 1];
					break
				} a9.k2 = a9.eV - a9.je, a9.data.numberTeams = (0 < a9.je) + (0 < a9.k2), a9.data.playerCount = a9.vd = a9.je + a9.k2, a9.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, a9.je + this.k7, a9.k2 - this.k7]), a9.a2o
		.a2s()
	}, this.aE0 = function(player) {
		aGd.push({
			player: player,
			g1: 14 + au.iv(20)
		})
	}, this.iS = function() {
		if (9 === a9.jy)
			for (var a7 = aGd.length - 1; 0 <= a7; a7--) --aGd[a7].g1 <= 0 && (ab.ox(aGd[a7].player, 0, af.ww.xH + af.ww.xV), aGd.splice(a7))
	}
}

function d4() {
	function aGu() {
		return {
			ej: bO.ej,
			ek: bO.ek,
			v2: bO.v2,
			uy: bO.uy,
			uz: bO.uz,
			v3: bO.v3,
			eE: bO.eE,
			mapSeed: bO.mapSeed
		}
	}

	function aGm(a7) {
		return 1 !== a7 && bO.aAr(a7) && a7 !== bO.aGv()
	}
	this.aGh = 22, this.aEB = 4096, this.ej = 0, this.ek = 0, this.v2 = null, this.uy = null, this.uz = null, this.v3 = null, this.eE = 0, this.mapSeed = 0, this.v0 = !1, this.v1 = new aGi, this.us = new aGj, this.a55 = new aGk, this.dU =
function() {
		this.us.dU()
	}, this.a3 = function(map, aGl) {
		((map %= this.aGh) !== this.eE || aGm(this.eE) && aGl !== this.mapSeed) && (this.v0 = !1, this.v1.aGn(), au.a2t(map), this.eE = map, this.mapSeed = aGl, aGm(map) && (bO.us.ut[map].aGo = aGl), this.aAr(this.eE) ? (map = bO.us.ut[this.eE],
			this.ej = map.a1, this.ek = map.j7, au.a2t(map.aGo), al.a3([this.ej, this.ek, map.la, map.lX]), aGq(), ak.aGr(), al.aGs()) : aGp())
	}, this.aGt = function(map, aGl) {
		var fG = aGu(),
			map = (this.a3(map, aGl), this.v1.aGn(), aGu());
		return this.ej = fG.ej, this.ek = fG.ek, this.v2 = fG.v2, this.uy = fG.uy, this.uz = fG.uz, this.v3 = fG.v3, this.eE = fG.eE, this.mapSeed = fG.mapSeed, map
	}, this.a3D = function(canvas) {
		canvas && this.v2 !== canvas && (this.ej = canvas.width, this.ek = canvas.height, this.v2 = canvas, this.uy = this.v2.getContext("2d", {
			alpha: !1
		}), this.hE = this.uy.getImageData(0, 0, this.ej, this.ek), this.v3 = this.hE.data, this.eE = this.aGv(), this.mapSeed = 0, bO.us.ut[this.eE].name = a9.data.mapName)
	}, this.eD = function(a7) {
		return 3 === a7 || 7 === a7 || 9 === a7 || 21 === a7 || a7 === this.aGv()
	}, this.aGw = function(a7) {
		return 2 === a7 || 7 === a7 || 9 === a7 || 20 === a7
	}, this.aGx = function(a7) {
		return 1 === a7
	}, this.aGv = function() {
		return this.aGh
	}, this.aAr = function(a7) {
		return void 0 === this.us.ut[a7].aGy
	}, this.a3C = function(pG) {
		return 0 === pG.mapType ? pG.mapProceduralIndex < 10 ? pG.mapProceduralIndex : 10 + pG.mapProceduralIndex : 1 === pG.mapType ? pG.mapRealisticIndex + 10 : void 0
	}, this.aAs = function(pG, aGz) {
		0 === pG.mapType ? pG.mapProceduralIndex = aGz < 10 ? aGz : aGz - 10 : 1 === pG.mapType && (pG.mapRealisticIndex = aGz - 10)
	}
}

function aGi() {
	function aH8() {
		bO.v1.iS()
	}

	function aHE(g6, aHD) {
		0 < aHD && (bO.v3[g6] += aHD, bO.v3[g6 + 1] += aHD, bO.v3[g6 + 2] += aHD)
	}

	function h1(g6) {
		return bO.v3[g6 + 2] > bO.v3[g6] && bO.v3[g6 + 2] > bO.v3[g6 + 1]
	}
	this.a7G = -1, this.zV = 0, this.aH0 = 0, this.aH1 = 8, this.aH2 = 32, this.aH3 = 8, this.aH4 = 32, this.aH5 = [0, 0], this.a6K = [0, 0, 0, 0], this.i4 = null, this.aH6 = !0, this.aH7 = !1, this.aGn = function() {
		-1 !== this.a7G && clearTimeout(this.a7G), this.a7G = -1, this.i4 = null, al.aGs()
	}, this.dU = function() {
		7 === aW.zd() || this.aH7 || (this.aH6 = !0, this.zV = 0, this.aH0 = 1, this.aH5 = [bO.us.ut[bO.eE].vL[0], bO.us.ut[bO.eE].vM[0]], this.a6K = [bO.us.ut[bO.eE].aGy[3], bO.us.ut[bO.eE].aGy[4], bO.us.ut[bO.eE].aGy[5], bO.us.ut[bO.eE].aGy[
			6]], this.aH1 = bO.us.ut[bO.eE].aGy[7], this.aH2 = bO.us.ut[bO.eE].aGy[8], this.aH3 = bO.us.ut[bO.eE].aGy[9], this.aH4 = bO.us.ut[bO.eE].aGy[10], this.aH6 ? this.a7G = setTimeout(aH8, 16) : this.iS())
	}, this.iS = function() {
		if (8 === aW.zd() && aD.lp()) this.a7G = setTimeout(aH8, 16);
		else {
			if (0 === this.zV) {
				var aGo = au.aH9();
				if (au.a2t(bO.us.ut[bO.eE].aGy[2]), al.a3([bO.ej, bO.ek, bO.us.ut[bO.eE].aGy[0], bO.us.ut[bO.eE].aGy[1]]), au.a2t(aGo), this.i4 = al.aHA(), this.zV++, this.aH6) return void(this.a7G = setTimeout(aH8, 16))
			}
			for (var g6, eK, aGo = this.aH6 ? 10 : 1e6, aGo = bO.ek - this.aH0 - 1 < aGo ? bO.ek - this.aH0 - 1 : aGo, wK = this.aH0 + aGo, eh = this.aH0; eh < wK; eh++)
				for (var ef = 1; ef < bO.ej - 1; ef++) h1(g6 = 4 * (eK = ef + eh * bO.ej)) ? this.aHB(g6, eK, 1) : (this.aHB(g6, eK, 0), function(ef, eh, g6) {
					return 1 < ef && h1(g6 - 4) || ef < bO.ej - 2 && h1(g6 + 4) || 1 < eh && h1(g6 - 4 * bO.ej) || eh < bO.ek - 2 && h1(g6 + 4 * bO.ej)
				}(ef, eh, g6) && this.aHC(ef, eh));
			this.aH0 = wK, this.aH0 >= bO.ek - 1 ? (bO.uy.putImageData(bO.uz, 0, 0, 1, 1, bO.ej - 2, bO.ek - 2), bb.dc = !0, this.aGn()) : this.aH6 && (this.a7G = setTimeout(aH8, 16))
		}
	}, this.aHB = function(g6, eK, e0) {
		aHE(g6, Math.floor(this.aH5[e0] + this.a6K[e0] * this.i4[eK] / 1e4) - bO.v3[g6])
	}, this.aHF = function(g6, dz, aHG, e0, a6K) {
		aHE(g6, Math.floor(this.aH5[e0] + (1 - dz / aHG) * a6K) - bO.v3[g6])
	}, this.aHC = function(kk, kl) {
		for (var g6, dz, aHG, a76 = kk - this.aH2, aHH = kl - this.aH2, wL = kk + this.aH2, wK = kl + this.aH2, a76 = a76 < 1 ? 1 : a76, wL = wL > bO.ej - 2 ? bO.ej - 2 : wL, wK = wK > bO.ek - 2 ? bO.ek - 2 : wK, eh = aHH < 1 ? 1 : aHH; eh <=
			wK; eh++)
			for (var ef = a76; ef <= wL; ef++) h1(g6 = 4 * (ef + eh * bO.ej)) ? (aHG = this.aH1 + (this.aH2 - this.aH1) * this.i4[ef + bO.ej * eh] / 1e4, Math.abs(kk - ef) > aHG || Math.abs(kl - eh) > aHG || aHG <= (dz = Math.sqrt((kk - ef) * (
				kk - ef) + (kl - eh) * (kl - eh))) || this.aHF(g6, dz, aHG, 1, this.a6K[3])) : (aHG = this.aH3 + (this.aH4 - this.aH3) * this.i4[ef + bO.ej * eh] / 1e4, Math.abs(kk - ef) > aHG || Math.abs(kl - eh) > aHG || aHG <= (dz = Math
				.sqrt((kk - ef) * (kk - ef) + (kl - eh) * (kl - eh))) || this.aHF(g6, dz, aHG, 0, this.a6K[2]))
	}
}

function aGq() {
	2 === bO.eE ? aHI([256], [256], [0, 205, 256], [500, 500, 0], [0, 0, 0]) : 7 === bO.eE ? aHI([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0]) : 8 === bO.eE ? aHI([410], [410], [0, 120, 210], [0, 80, 640], [0, 0, 0]) : 9 === bO.eE ? aHI([
		512], [512], [0, 70, 180, 200, 290, 420, 512], [500, 500, 0, 0, 500, 500, 0], [0, 0, 0, 0, 0, 0, 0]) : 20 === bO.eE && aHI([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0])
}

function aHI(aHJ, aHK, aHL, aHM, aHN) {
	for (var ef, eh, aHP, aHQ, a0u, aHR, hf = aHJ.length - 1, aHO = bO.ej + bO.ek, eY = (aHO *= aHO, aHL.length), a7 = eY - 1; 0 <= a7; a7--) aHL[a7] *= aHL[a7];
	var aHS = new Array(eY),
		aHT = new Array(eY),
		aHU = new Array(eY),
		f0 = al.aHA();
	if (void 0 === aHN)
		for (aHN = new Array(eY), a7 = eY - 1; 0 <= a7; a7--) aHN[a7] = 0;
	for (a7 = 1; a7 < eY; a7++) aHS[a7] = aHL[a7] - aHL[a7 - 1], aHT[a7] = aHM[a7] - aHM[a7 - 1], aHU[a7] = aHN[a7] - aHN[a7 - 1];
	for (ef = bO.ej - 1; 0 <= ef; ef--)
		for (eh = bO.ek - 1; 0 <= eh; eh--) {
			for (aHP = aHO, a7 = hf; 0 <= a7; a7--) aHP = (aHQ = (ef - aHJ[a7]) * (ef - aHJ[a7]) + (eh - aHK[a7]) * (eh - aHK[a7])) < aHP ? aHQ : aHP;
			for (a0u = aHM[eY - 1], aHR = aHN[eY - 1], a7 = 1; a7 < eY; a7++)
				if (aHP < aHL[a7]) {
					a0u = aHM[a7 - 1] + aDT((aHP - aHL[a7 - 1]) * aHT[a7], aHS[a7]), aHR = aHN[a7 - 1] + aDT((aHP - aHL[a7 - 1]) * aHU[a7], aHS[a7]);
					break
				} aHV(bO.ej * eh + ef, a0u, aHR, f0)
		}
}

function aHV(e0, a0u, aHR, f0) {
	a0u < 500 ? f0[e0] = bH.dl(f0[e0] * a0u * 2, 1e3) : 500 < a0u && (f0[e0] += bH.dl(2 * (1e4 - f0[e0]) * (a0u - 500), 1e3)), f0[e0] += bH.dl(aHR * (10 * a0u - f0[e0]), 1e3)
}

function cZ() {
	var aHW;

	function aHg(a1I, hG, ef, eh, globalAlpha) {
		bO.uy.save(), bO.uy.globalAlpha = globalAlpha, bO.uy.imageSmoothingEnabled = !1, bO.uy.scale(hG, hG), bO.uy.drawImage(a1I, Math.floor(ef * (bO.ej / hG - a1I.width)), Math.floor(eh * (bO.ek / hG - a1I.height))), bO.uy.restore()
	}
	this.a52 = 0, this.a53 = 0, this.a54 = 0, this.a55 = 0, this.dU = function() {
		(aHW = new Array(bO.aGh))[0] = {
			a1: [0, 5e3, 8e3, 1e4],
			dz: [220, 250, 255, 220],
			s6: [190, 220, 0, 0],
			es: [170, 200, 0, 0]
		}, aHW[1] = {
			a1: [0, 4e3, 5e3, 6e3, 1e4],
			dz: [25, 0, 100, 0, 25],
			s6: [25, 0, 0, 0, 25],
			es: [25, 0, 0, 0, 25]
		}, aHW[2] = {
			a1: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			dz: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			s6: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			es: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aHW[3] = {
			a1: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			dz: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			s6: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			es: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, aHW[4] = {
			a1: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			dz: [10, 10, 20, 10, 10, 170, 212],
			s6: [20, 20, 60, 100, 100, 110, 170],
			es: [70, 70, 160, 30, 30, 60, 120]
		}, aHW[5] = {
			a1: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			dz: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			s6: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			es: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aHW[6] = {
			a1: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			dz: [10, 10, 60, 255, 255, 200, 200],
			s6: [10, 10, 60, 255, 255, 200, 200],
			es: [80, 80, 255, 255, 255, 200, 200]
		}, aHW[7] = {
			a1: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			dz: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			s6: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			es: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aHW[8] = {
			a1: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			dz: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			s6: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			es: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aHW[9] = {
			a1: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			dz: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			s6: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			es: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aHW[20] = {
			a1: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			dz: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			s6: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			es: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, aHW[21] = {
			a1: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			dz: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			s6: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			es: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.aGr = function() {
		var aHf, a7, er, fG, hE = function() {
				var hE;
				return bO.v2 = document.createElement("canvas"), bO.v2.width = bO.ej, bO.v2.height = bO.ek, bO.uy = bO.v2.getContext("2d", {
					alpha: !1
				}), hE = bO.uy.getImageData(0, 0, bO.ej, bO.ek), bO.v3 = hE.data, hE
			}(),
			a1 = aHW[bO.eE].a1,
			dz = aHW[bO.eE].dz,
			s6 = aHW[bO.eE].s6,
			es = aHW[bO.eE].es,
			f0 = al.aHA(),
			eY = a1.length - 2,
			aHa = new Array(1 + eY),
			aHb = new Array(1 + eY),
			aHc = new Array(1 + eY),
			aHd = new Array(1 + eY);
		for (er = eY; 0 <= er; er--) aHa[er] = a1[er + 1] - a1[er], aHb[er] = dz[er + 1] - dz[er], aHc[er] = s6[er + 1] - s6[er], aHd[er] = es[er + 1] - es[er];
		for (a7 = bO.ej * bO.ek - 1; 0 <= a7; a7--)
			for (er = eY; 0 <= er; er--)
				if (f0[a7] >= a1[er]) {
					fG = f0[a7] - a1[er], bO.v3[4 * a7] = dz[er] + aDT(aHb[er] * fG, aHa[er]), bO.v3[4 * a7 + 1] = s6[er] + aDT(aHc[er] * fG, aHa[er]), bO.v3[4 * a7 + 2] = es[er] + aDT(aHd[er] * fG, aHa[er]), bO.v3[4 * a7 + 3] = 255;
					break
				} bO.uy.putImageData(hE, 0, 0), bO.aGx(bO.eE) && aX.sA() && bO.aGx(bO.eE) && (hE = aX.aCa("arena"), aHf = aX.aCa("territorial.io"), aHg(hE, 5, .5, .5, .1), aHg(aHf, 2, .5, .45, .1)), bO.v0 = !0, bb.dc = !0
	}, this.a2w = function() {
		for (var g6, ef, eh, aHh, aHi, fI, a53 = 0, a1 = bO.ej, j7 = bO.ek, fG = a1 * j7 * 4, aHj = a9h, aHk = bO.v3, a7 = a1 - 1; 0 <= a7; a7--) aHj[(g6 = a7 << 2) + 2] = aHj[fG - g6 - 2] = 3;
		for (fG = 4 * a1, a7 = j7 - 1; 0 <= a7; a7--) aHj[(g6 = a7 * fG) + 2] = aHj[g6 + fG - 2] = 3;
		for (aHh = a1 - 1, aHi = j7 - 1, eh = 1; eh < aHi; eh++)
			for (fG = eh * a1, ef = 1; ef < aHh; ef++) fI = 1 - (aHk[(g6 = fG + ef << 2) + 2] > aHk[g6 + 1] && aHk[g6 + 2] > aHk[g6]), aHj[g6 + 2] = 2 - fI, a53 += fI;
		this.a52 = (a1 - 2) * (j7 - 2), this.a55 = 0, bO.eD(bO.eE) && (bO.a55.aHl(), bO.a55.aHm()), this.a53 = a9.jO = a53 - this.a55, this.a54 = this.a52 - this.a53 - this.a55
	}
}

function aGp() {
	var p5;
	10 === bO.eE ? p5 =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === bO.eE ? p5 =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === bO.eE ? p5 =
		"JJAf2uP6y-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeu0-F-n5a_GG4KJGGG3G3G3FFJFmKGJ4JGGGG3GJJFJG3G3G323G--kLPeduaKGFGGGG443JJJJJJG--B-C0FJK__443-BJ-66wmpBnJopCMJpCCCIIIJoopKKICKCBnCKJgooopMIDOzzSzUzbzzUSyTUxxrrrrrP1XcXXX9Hcn9cceemece7cPIoeX0sWWaOWVNTOcTNNcN0V0V5-N0aOa-0V--N50a5Obyc-M0z3TPOdgBnBF0NOpxpMV7-M2mMiLbinz03F0sTx8mfrNT-2l6QEdMwwp-5XX7UMTP1V1GIuvaNn-5Xfxrpw5XV1GNTEfn4-_XvzjAAA9mfA9ed9fpzyTUzyUaUyOX3n59NTKLLKHPPPO_LK4iidea_O_QeideeaLOLLJG3-0eeddOaPO_OKLKzEznzjgnnzBykknByEYnByug-3332ElJ222-2wBko2BnBnBwwzwx-9Y6j6rrrkccc-E5ctEizpJF-aDYgSMGz-X10G6VyjiyuuPeiuzjivh3G3K3G--k-9JGFAPEIZSKBghKSMIpKpCJnI9gcXeccehHccoeXBeoppKIJoghIHnCJnJmemmecmfA9jyTUzzzbbxbV0WaTT-OtWWWV0zxtyUN6yUzSxrSqTUztaN71190V7-5V15VUy--V-lxHEg--33oL-67Dhyu0--3FoL--7ahw-LGYowfzu-0HFMIfF-aHWWwxxxcXX-E8ZrUdfVl--TIJLzSr17V0wcDLvivjysGK3G4XaJb1zppIJpBccccge7fUxx9eocX7cXX6y7Y99Heggen9nJdAHp9Xnp9IIJfICIBdCKKIIMMJme19eXxxp9X9VVfEMMMSBpooe7XCSBomccxxpHcrKKCMHmXXmcxoeX1mpJe70BrMJmVV--gxExIpJcX71nKCJmhCKKCIJoopCKKKHX8KHd9nKrKBj6xrSrKpz6xSMMSrKppwObaP-UzSCAICIKCIKKKCMMKKCpCMMSrrrKpKprUSprMUSMrSprKrSpSrUrUSxpxprSrMrMprSSSppMKprSprrSrxKSUSqUGbqUbbrxrSxrSrKHXXeggeYBnBgmnBnKCrJnKpIKpBnKCMMrSS9chKKIBeX77EIAE5OxIIKKKIIEKSKSKKSKKMKpKpKKSMSSSSrSzxxxzlzzUzzzzzUxrMMMMSxxxrrxrrxxxxzUzOzrbxzrxzzzw6w6yOtttttyUbbyTTTTTTTTTUtzIrzbzbzbba-71-VVV77V--7711-V1-1---51--1-1-V0cN-N5VN1e-ee7-1mc71Xe9fIBcVV0WbyOzxX-VV7VNN5TUzUu1ce9menBecmf9gxHc7c7V-777---50VP-V-N-0WxppSJpr6zyObzttV6rMKpUyObttbryUbzWaP0sNNOX757X97X7ce9XXXXXVc7-V-X7VX5-V7eeA9menA9fBnCBnIIJoorMIRObpIKMJpppSSSMSoeX71-V7777X97c5V-ccWV0VX77--NN55-N--7U5111cXXenBcc7fABgcX117X7c-gf9emV---1--XXXVX7X17579VVV117Xed9XecXX--WV5Uzz6zyUzrSrUUaNUlxtzXXXee1777X1e-5NOy--WV5OttttaTUzyUrxxtzzzlzMUrzzxaUttbbxWzxpSonBmpCCJpCKCIJpJooeACHpprSxaOV577U6sOWV-NNN70WVOWzwTTT5NUxryUba5NNOba1cc79cXX199X-91X99mhIHfJmXgxxxpHe9XccX997c7X0zV--V-N7P6k49V711-111X-77cX79mmeHeccV1mdbn_Uno-DKNVSo1-O9kaiKKzzEzpK-8_SLEzzzeeeV1Hinzjh3-8_UsM9mjtyTVBHk8AfiyvivizpG43G3GG--0OIzV2mnjMaLEBxn29mc4SSpprSSSUprrKprSSpppKMMSrMrxrKIKHhKHfIKKpIBpCIIJpIJnIKpSKJo1AKKpppxprSprpMKphIKhMUSrCKMRpMKrrSMMMMSKUVUxxUxSJe19efAKKUbKnMxKKUKIKUStaSrUMTUrzbzxxrSzzUy5SSKtbqprTprzSxxSrBXe9ghSrMMUyUzzbySKrUKpUSpSUMtV---D--0aN-X9997977VVe9XD-19XX1-9XcXXXXYxzUttzbV-7VX78by0rUSppKMbs5-V77V77X-X71--17-X-7V-0WWVN-6byTOrJepKpSrpxrUSSIKSKSzrrrs797c1711ObUSxxpSSSSSSy5--7997VV6z_rrSrxpSprs-7VX17XeXVXN-11-TUUSxztyTT5ObzrSSrzbtbbtUKzrxrSxzUrzUzShKhMKrxzzzxyMtzqnAA9mgfAAACKICBnKzbbWWbaOtbaOaTUbtyUyTTTOaOa556zyMxrUtaTUzrxrrrzSzxzbta5N0s-ee997cX97cX7cX7X771-V-aT--V17V7X1--V7Xea6ty5T5Mts5--5-550aT55NU_ySxxta5OVD--0VN5NND-N--8a6a5OsN1og55OVVOta-75OTSqhCMrBmhMbbtzzzzta--NN5-8Us0V-N1eD-XN0VOKppraT18zs0SyOUaOa5OaN1-VcX7X5OSpSxpMSra5NNObV5-N19cVc-W_KMSrrxxztzsND--MJpKMrzb_pyTMzUa5-0a5-X-VOIMMMSBnKKSMrMzprzaQBen1ceeXcccempprtzUUSv9mmfMrxzUMxpUUUrzbztrxyOzUxrrMzbWbJppSvC7gmenA9mgggfABgnBf9nBppUrttbzUzCKrSSxzbaUxPfMSKpKnJhRpIAIIKrSzUMMzxztyTObaTOWWaTTTUbzzrza5ObaTOWbbbUrSrStzyUUzbyN--s5T2rs-1XeXeefBn97VfBnIBemf97cXcX7bWV1111c1eiN7f-ABa6s19n77X7g97cceX7f11UzUppry-N0MMAIKzV4UW_rJoppza55-TMSsNObztaOa6KzV-77N-SKKSUzbaOaOyUtzzzyTUbtzxrsOaObtttSraOWaObzzzzz_ptaUbyMzzyUtbVUyUrUzzzzzUzzxyQMzzUzzzeeeeXee9Xeee9eeeefKMIKcf9ggnABemefCCKzrLf99X1fABgeeXAKSSMKxxzUSrSraMRpSxrQA7X7X9oopBo1N9gnIKCIJmmmnKIKJomn7emfMBc51997cenKMUzPmegmfMMSzzyNA9OzzUUIKMUKrKpSSrUrxza6SrMSrrMSrUUxzrxxxrUSSzSSxSUSxSrSSrSrpUrMMUSprrUUUUSpKrySzSrxzzxpzSppprrzUrSpSSCSRprSMKKpMKrMKKCIIIBohIBonAAABnABmgemhBmmmeenBnA9X9ecceeXX7Xemmcemgef9nA7en9kecee9eXeX1-enBkeX7XeXce92VXX99ceACBn9XX77XVVV--X7XemmgeeXXX997VVc75OVeX9hAAA7eeme9eXe9Xeeee9e9ceemmmmf9meegfHenBmfBnA9mgggemnBggfBnIHmmekeeceX9e9cXXXmoeceeXce9Xce99eXnBpCBpSrSrSrMSxzzxyeeeeemkeemgf9pprUzUHmeXXem99e9eceef1dbs17ecepKrMgg9XeXccX-Xeen7cXeenBmnBghCBgnBACCCMCKJohCCMrzzzyUzzzzqognBmnCKprMSMACKpz_wmoogepCKrMSMStUZkeeeeAH15-11-X9hCKMSRomcgpKzprpprs0z_rKppzrSrzSpIKIBgXmprrUKIKKrttpKzSUBomm97ghJpSyUzSzzzUbzzUtrzfAI9epnHceceemegghUUzxzWbzzrbTopMSta5OVOrzzUSKUUxrsOrpxQCSrIIKSxSrSzSrzUrUUtttztUtbzxxMaOV-sOWV5--NNOUzUzxzxzUUrSxrrUSrrSzrrSxSprSppprSpxrrrUUrbbtzrbbrztzzrbbyTT6bSyOa0aTOaOy5T6aTOzbzpxxxxpzUSxs7XESrKyOUrtaOa17zyUaTOaOSxprKCKgnIAAABnBnKppppppJnHnCMJnCCKMSrSSKKICCKKKKppKo-2AYFDB--MPns--j8uk-0TwQV7mzO6ievyyvFGK3F--qNX0zxzxrXce9c-3mKUw-DOJuzw9-lBkNyuuuviyzjJK43G000-OaPJEprzSKMrrkccc-1997-2C8pDo-uPOqwf9mnbbtyTV-2Jzv--5gXT-CCmSUvvGG--5xsy-0D-rE-4b-qzSqX7--sMmk-0lNEV-IZ0nk-tm6EnFN-Rt3BvgF-5ReOUc-otNAvisG30DRoZzUzzzrwP9eeecc-3uJps0eSSKRrMGzrzrrM-V-eXXeX--2fpn--6MiT-0DoXD--6ULD--E2lg--TGhs--wrkk-0uNAV-npyzx-0bkCEF-6EeL6jG-5bpJQAEbaV0nuubvp-0dya3mhrk--BzMKzF28zMOzrMUP779c-gziXufkG-2byBQrcV-J-IhV490elopIKKJzlX70V---2FCPyV-HVlaxpX7-x0_hzvvGGF-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--1u44Wxxxr17cc-CFkqTusBG-2cO5jMcV3oE3YuuiB3FF0P7tWrre9-4GLRUh--19rRV-JN8nk-1B7iV-3OQA--cpNzV8oQxrjjizyyw4KKG44-1d-ezGV-_77wzvGF0eJQZmxL0V-C9jlvF09OI0rTX--JoI0k-PTDyyV-40oK--e5AbV7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL--1qoP6bvVF-qtlNxCKCUa0V7V0xqOguudaNznk-G3-Lvq2RrOc-2N7SOfvlG-2g3LFmnKUrla-7X--Vg031A1AJgoxMSporMSSr-XV--10aNXeV-y7CVQfz0GF0RIcNptae02XdsiLTezvzyyyzjzGGGGGGGGG3--GRVT-QXt0TTyyzwK4GJ-r5K0genCxtwT-V-yBnotTvg-F-RR4WyVBNuCtdejvYyi-knBLOFJJF3BSAjnMSzUbsX9XeV3t0vf_fzv-GF0wZ8bxrOe9--8AQA--HN1m-CZlGTLRwx-cmONzIxrprppKprUyUts-XccX1e97cXc--_7pw029QbgoonJUROV5-V-iJrguik4--mdjY-0tQAdaRk-BiCss-aMQLTjJ--3jUaV4tUqAvjzx5KGF-YB7rwfzwOeVuOXlO_O__Kbj2vizuviyuuvfeveTiviynvYziefiiefvfiYvjB-444G3F-0-2-kJ304K3GGG3JG34--F3GJ-IBbGxS--3yOw8PPd_GaaiC-Eueibvyvx-304--C-2IBzcggmeenCMSrwOaOzKHmnrUSxzTOu--V7VVV9c-yPFVPuf0-F0gt0ZpKs17-aTPhOiBFxRy2ZmgnJeeXAICBnBenJzSrKKrrSSrKpMKJnBnCKMSMIKMrxSOV0V0zzUKSpppSKSEKIESOV-Oa0sOzUrMKSppSUMMkP77V-0a1--VP-17--71--7-UxSrrrrSJpqOtzzOX770hBcX7V5--XXV11cc717X7X9XX999777X7e-_chDLLiiivYEl33G3-Vock29fSpSKonCMU5OaNV-NNX7c2DaQYtPjzvjfiywGK33G3G-0xDlzpUyX9V5PSx2jyuzVGGK-0CFZWnwNV1uXF0_fBo1IJJoSSJnACCCKppSxyUV-117-N711-6evlav4-JpSyQKUSSSpaX517c-c-yg6luPzk3F0CNJQpy9-iumBnaLKKeudOKG_KLKLLLueLOaQEEjEjyinEyzejjnskBnwC043F2-nn2zE2EEoKGKFASOdporHX8CBhzxraUqUzSlzSX77eeeXBc0V-LhikvW--KmlL-EfebDLTskk-YMe-RrMTV7V2uyCCaPEBC-5q1sjK6a7V-A2Ih-Aq892rMUNP7cc-TlB1tv--ANsVBjV2v6d6aOwnp-7qIGAIJlaNV1imQQOPszivwzE8GGGGJ0vODuRhCrppCBpULN5N7NX90WX-6gppqPk-GqSXfBnqOxtaUemec-5nnTs-YPD2wz6re9-3QGmz__bnno-2PJQD-KhKnTaaTn-nF-0Pg_N-aphUzj4FKhhRbmhUrKHohIzMpxrpKKKSMKSKxrU5N5OaUL--X11777Hf9VX-N7--5P-XHXe-0hhca-WqtqMCppppSJp6ltz5NVXV-X17eV0QUJbjJ-nREfwnBwOtbae-IiGGaLPvEk0-Er7eI9nCKpUa0V--1v_ZSfcl--0T7Zc0TwsLPNzgz8K4--MdCP-8jMTqMno-QTv6BfDUs-CjSgLdjBG--rknYV0vttlfW-0CxT2mcUV6Qv4daeffkn3J3B-EUOXBja1CjifiOvd_LdKKaaOaK--nBw8aOFFeeKbfivzjix3En-2Ennz-n-3-2UYTi-bkAQ5LLKaRzgwnznGJ-MWJCRr5NV0wBylcwF0D6jaola--BJZx--NfgX-6lRkav3--sx_2V7RUnUaK_aLLQjzzz-atBrI9mgmnICCpCKLTOaOzs0aNOWV9c-E9stskaiM_-pIJnKoxxzxzrUrrxzUxzSrUSzSpISxzxbxzzzzrzzrzxbzrzUta-0YBe7mf9eeV--P9eee7XXcecVXeXceA9eeeXX-c7T9Bee997n9X-0wqC2ylF4iQ5frxSUzJzqNX9cX97V1wr6EuslF-YbY3xSUaeX--x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === bO.eE ? p5 =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === bO.eE ? p5 =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === bO.eE ? p5 =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === bO.eE ? p5 =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === bO.eE ? p5 =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === bO.eE ? p5 =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === bO.eE && (p5 =
			"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV"
			), (new ul).un(p5)
}

function aGj() {
	this.ut = null, this.aHn = null, this.aHo = null, this.dU = function() {
		var aHp = [120, 105, 92],
			cos = [12, 12, 60],
			aHq = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aHr = [140, 130, 120],
			aHs = [12, 12, 76],
			aHt = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aHu = [130, 117, 106],
			aHv = [12, 12, 68],
			aHw = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.ut = new Array(bO.aGh + 1), __fx.customLobby.setMapInfo(this.ut), this.ut[0] = {
			name: L(117),
			a1: 230,
			j7: 230,
			la: 1e3,
			lX: 2e3,
			aGo: 173
		}, this.ut[1] = {
			name: L(118),
			a1: 800,
			j7: 800,
			la: 100,
			lX: 50,
			aGo: 43
		}, this.ut[2] = {
			name: L(119),
			a1: 512,
			j7: 512,
			la: 128,
			lX: 32,
			aGo: 0
		}, this.ut[3] = {
			name: L(120) + " 1",
			a1: 960,
			j7: 960,
			la: 60,
			lX: 8,
			aGo: 0
		}, this.ut[4] = {
			name: L(121),
			a1: 900,
			j7: 900,
			la: 100,
			lX: 5,
			aGo: 0
		}, this.ut[5] = {
			name: L(122),
			a1: 1e3,
			j7: 1e3,
			la: 100,
			lX: 40,
			aGo: 0
		}, this.ut[6] = {
			name: L(123),
			a1: 1e3,
			j7: 1e3,
			la: 100,
			lX: 20,
			aGo: 0
		}, this.ut[7] = {
			name: L(124),
			a1: 1024,
			j7: 1024,
			la: 128,
			lX: 32,
			aGo: 0
		}, this.ut[8] = {
			name: L(125),
			a1: 820,
			j7: 820,
			la: 200,
			lX: 100,
			aGo: 0
		}, this.ut[9] = {
			name: L(126),
			a1: 1024,
			j7: 1024,
			la: 128,
			lX: 32,
			aGo: 0
		}, this.ut[10] = {
			name: L(127),
			vL: aHr,
			vM: aHs,
			aGy: aHt
		}, this.ut[11] = {
			name: L(128),
			vL: aHu,
			vM: aHv,
			aGy: aHw
		}, this.ut[12] = {
			name: L(129),
			vL: aHu,
			vM: aHv,
			aGy: aHw
		}, this.ut[13] = {
			name: L(130),
			vL: aHp,
			vM: cos,
			aGy: aHq
		}, this.ut[14] = {
			name: L(131),
			vL: aHp,
			vM: cos,
			aGy: aHq
		}, this.ut[15] = {
			name: L(132),
			vL: aHr,
			vM: aHs,
			aGy: aHt
		}, this.ut[16] = {
			name: L(133),
			vL: aHr,
			vM: aHs,
			aGy: aHt
		}, this.ut[17] = {
			name: L(134),
			vL: aHp,
			vM: cos,
			aGy: aHq
		}, this.ut[18] = {
			name: L(135),
			vL: aHu,
			vM: aHv,
			aGy: aHw
		}, this.ut[19] = {
			name: L(136),
			vL: aHp,
			vM: cos,
			aGy: aHq
		}, this.ut[20] = {
			name: L(137),
			a1: 1024,
			j7: 1024,
			la: 128,
			lX: 32,
			aGo: 0
		}, this.ut[21] = {
			name: L(120) + " 2",
			a1: 940,
			j7: 940,
			la: 80,
			lX: 8,
			aGo: 0
		}, this.ut[bO.aGh] = {
			name: ""
		}, this.aHn = new Uint8Array(12);
		for (var a7 = 0; a7 < 10; a7++) this.aHn[a7] = a7;
		for (this.aHn[10] = 20, this.aHn[11] = 21, this.aHo = new Uint8Array(10), a7 = 0; a7 < 10; a7++) this.aHo[a7] = 10 + a7
	}
}

function aGk() {
	this.aHl = function() {
		for (var g6, ef, fG, aHj = a9h, aHk = bO.v3, a1 = bO.ej, aHh = a1 - 1, aHi = bO.ek - 1, g1 = 0, eh = 1; eh < aHi; eh++)
			for (fG = eh * a1, ef = 1; ef < aHh; ef++) aHk[g6 = fG + ef << 2] === aHk[1 + g6] && aHk[g6] === aHk[2 + g6] && (g1++, aHj[2 + g6] = 4);
		ak.a55 = g1
	}, this.aHm = function() {
		for (var aHj = a9h, a1 = bO.ej, aHh = a1 - 1, aHi = bO.ek - 1, id = 5, eh = 1; eh < aHi; eh++)
			for (var fG = eh * a1, ef = 1; ef < aHh; ef++) {
				var eC = 2 + (fG + ef << 2);
				4 === aHj[eC] && (! function(eC, id) {
					var eY = 1,
						aHj = a9h,
						ea = aY.ea,
						a17 = [eC];
					aHj[eC] = id;
					for (; eY;) {
						for (var a18 = [], a7 = 0; a7 < eY; a7++)
							for (var eN = a17[a7], eb = 3; 0 <= eb; eb--) {
								var ec = eN + ea[eb];
								4 === aHj[ec] && (aHj[ec] = id, a18.push(ec))
							}
						eY = (a17 = a18).length
					}
				}(eC, id), id = Math.max((id + 1) % 256, 5))
			}
	}
}

function a2v() {
	(we = void 0 === we ? document.createElement("canvas") : we).width = bO.ej, we.height = bO.ek, a2z = we.getContext("2d", {
		alpha: !0
	}), a30 = a9h = null, a30 = a2z.getImageData(0, 0, bO.ej, bO.ek), a9h = a30.data, b6.pY.v4(a9h)
}

function ca() {
	var f0, a1, j7, max, aHy, lX, aI0, aI1, aI2, aI3, aI4, aI5, aI6, aI7, aHz = 1e4;

	function aIE(aID, la, eY) {
		var a7;
		for (aI0[0] = aID, a7 = 1; a7 < eY; a7++) aI0[a7] = aI0[a7 - 1] + la, la = aI0[a7] >= aHz ? (aI0[a7] = aHz - 1, -la) : aI0[a7] < 0 ? (aI0[a7] = 0, -la) : (la += 16384 <= au.random() ? lX : -lX) < -aHy ? -aHy : aHy < la ? aHy : la
	}

	function aIG(ef, eh, aIH, eY) {
		(aIH ? function(ef, eh, eY) {
			var a7;
			for (a7 = 0; a7 < eY; a7++) f0[eh * a1 + ef + a7] = aI0[a7]
		} : function(ef, eh, eY) {
			var a7;
			for (a7 = 0; a7 < eY; a7++) f0[eh * a1 + ef + a7 * a1] = aI0[a7]
		})(ef, eh, eY)
	}

	function aIK(value, eY) {
		var a7, kz, eC, hU = value - aI0[eY - 1];
		if (0 != hU) {
			for (kz = 1 + bH.dl(Math.abs(hU), eY - 1), kz = hU < 0 ? -kz : kz, aI0[eY - 1] = value, eC = (eC = eY - 1 - bH.dl(Math.abs(hU), Math.abs(kz))) < 1 ? 1 : eY - 2 < eC ? eY - 2 : eC, a7 = eY - 2; eC <= a7; a7--) aI0[a7] += hU - (eY - 1 -
				a7) * kz;
			(hU < 0 ? function(eY) {
				var a7;
				for (a7 = eY - 2; 1 <= a7; a7--) aI0[a7] < 0 && (aI0[a7] = -aI0[a7] - 1)
			} : function(eY) {
				var a7;
				for (a7 = eY - 2; 1 <= a7; a7--) aI0[a7] >= aHz && (aI0[a7] = 2 * aHz - aI0[a7] - 1)
			})(eY)
		}
	}

	function aIN(a17, a18, eY) {
		for (var a7 = 0; a7 < eY; a7++) a17[a7] = a18[a7]
	}

	function aIO(g) {
		for (var a7 = 0; a7 < g.length - 1; a7++) g[a7] = g[a7 + 1] - g[a7];
		g[g.length - 1] = g[g.length - 3]
	}

	function aIP(a3Q, gap, hT) {
		aI1.push(a3Q), aI2.push(gap), aI3.push(hT)
	}
	this.a3 = function(a2C) {
		! function(a2C) {
			var a7;
			for (a1 = a2C[0], j7 = a2C[1], aHy = a2C[2], lX = a2C[3], f0 = new Int16Array(a1 * j7), max = j7 < a1 ? a1 : j7, aI0 = new Int16Array(max), aI1 = [], aI2 = [], aI3 = [], aI4 = new Array(a1), aI5 = new Array(j7), a7 = a1 - 1; 0 <=
				a7; a7--) aI4[a7] = !1;
			for (a7 = j7 - 1; 0 <= a7; a7--) aI5[a7] = !1;
			aI6 = new Int16Array(a1), aI7 = new Int16Array(j7)
		}(a2C),
		function(eY) {
			var aID = au.random() % aHz,
				la = au.random() % (2 * aHy + 1) - aHy;
			aIE(aID, la, eY)
		}(max), aIN(aI7, aI0, j7), aIG(0, 0, !0, a1);
		var ef, eh, a2C = f0[0],
			eY = max,
			la = au.random() % (2 * aHy + 1) - aHy;
		for (aIE(a2C, la, eY), aIN(aI6, aI0, a1), aIG(0, 0, !1, j7), aIO(aI6), aIO(aI7), aIE(f0[a1 - 1], aI6[a1 - 1], j7), aIG(a1 - 1, 0, !1, j7), aIE(f0[a1 * (j7 - 1)], aI7[j7 - 1], a1), aIK(f0[a1 * j7 - 1], a1), aIG(0, j7 - 1, !0, a1), aI4[a1 -
				1] = aI4[0] = !0, aI5[j7 - 1] = aI5[0] = !0, aIP(0, a1, !0), aIP(0, j7, !1), ! function() {
				var aIR, a3Q;
				for (;;) {
					if (aIR = function() {
							var a7, aIR = aI1.length - 1;
							for (a7 = aIR - 1; 0 <= a7; a7--) aI2[a7] > aI2[aIR] && (aIR = a7);
							return aIR
						}(), aI2[aIR] < 5) return;
					a3Q = aI1[aIR] + bH.dl(aI2[aIR], 2), (aI3[aIR] ? function(ef) {
						var eY, aIU, a7, aC1 = 0,
							aIV = 0;
						for (; aIV < j7 - 1;) {
							for (a7 = aC1 + 1; a7 < j7; a7++)
								if (aI5[a7]) {
									aIV = a7;
									break
								} eY = aIV - aC1 + 1, aIE(f0[ef + a1 * aC1], 0 === aC1 ? aI6[ef] : aI0[aIU - 1] - aI0[aIU - 2], eY), aIK(f0[aIV * a1 + ef], eY), aIG(ef, aC1, !1, eY), aIU = eY, aC1 = aIV
						}
						aI4[ef] = !0
					} : function(eh) {
						var eY, aIU, a7, aC1 = 0,
							aIV = 0;
						for (; aIV < a1 - 1;) {
							for (a7 = aC1 + 1; a7 < a1; a7++)
								if (aI4[a7]) {
									aIV = a7;
									break
								} eY = aIV - aC1 + 1, aIE(f0[eh * a1 + aC1], 0 === aC1 ? aI7[eh] : aI0[aIU - 1] - aI0[aIU - 2], eY), aIK(f0[eh * a1 + aIV], eY), aIG(aC1, eh, !0, eY), aIU = eY, aC1 = aIV
						}
						aI5[eh] = !0
					})(a3Q), aIP(a3Q, aI1[aIR] + aI2[aIR] - a3Q, aI3[aIR]), aI2[aIR] = a3Q - aI1[aIR] + 1
				}
			}(), ef = 0; ef < a1; ef++)
			if (!aI4[ef])
				for (eh = 0; eh < j7; eh++) aI5[eh] || ! function(ef, eh) {
					var value = f0[eh * a1 + ef - 1] + f0[(eh - 1) * a1 + ef],
						a5F = 2;
					aI4[ef + 1] && (a5F++, value += f0[eh * a1 + ef + 1]);
					aI5[eh + 1] && (a5F++, value += f0[(eh + 1) * a1 + ef]);
					f0[eh * a1 + ef] = bH.dl(value, a5F)
				}(ef, eh)
	}, this.aHA = function() {
		return f0
	}, this.aGs = function() {
		f0 = null
	}
}

function aDT(er, es) {
	return 0 <= er ? bH.dl(er, es) : -bH.dl(-er, es)
}

function jB(f0) {
	return f0 * f0
}

function a4U(er, es) {
	return es < er ? er : es
}

function a9D(er, es) {
	return er < es ? er : es
}

function a6d(er, f0, es) {
	return f0 < er ? er : es < f0 ? es : f0
}

function aIX(f0, eY) {
	for (var et = bH.dl(f0 + 1, 2), a7 = 0; a7 < eY; a7++) et = bH.dl(et + bH.dl(f0, et), 2);
	return et
}

function aEq(f0, eY) {
	return f0 < 1 ? 0 : aIX(f0, eY)
}

function aIY(ly, lz, rt, a6N, mB, mC, ru, sW) {
	return !(ly + rt <= mB || lz + a6N <= mC || mB + ru <= ly || mC + sW <= lz)
}

function aIZ(ly, lz, rt, a6N, mB, mC, ru, sW) {
	return ly <= mB && lz <= mC && mB + ru <= ly + rt && mC + sW <= lz + a6N
}

function uv(f0) {
	return Math.floor(!!f0 * (1 + Math.log2(f0 + .5)))
}

function br() {
	this.dl = function(er, es) {
		return Math.floor((er + .5) / es)
	}, this.aIa = function(er, es) {
		return Math.floor(er * (es + .5))
	}, this.sqrt = function(f0) {
		return ~~Math.sqrt(f0 + .5)
	}, this.pow = function(e) {
		return Math.floor(Math.pow(2, e) + .5)
	}, this.ow = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aIb = function(fG, fI, fK) {
		return Math.max(Math.min(fG, fI), fK)
	}, this.aIc = function(aId, aIe, ef, eh) {
		ef -= aId, aId = eh - aIe, eh = 0;
		return 0 == ef ? eh = 0 <= aId ? Math.PI : 0 : (eh = Math.atan(aId / ef), eh += 0 < ef ? .5 * Math.PI : 1.5 * Math.PI), eh
	}, this.log2 = function(f0) {
		return Math.floor(!!f0 * (1 + Math.log2(f0 + .5)))
	}, this.log10 = function(f0) {
		return Math.floor(Math.log10(f0 + .5))
	}, this.aIg = function(aIh, aIi, aIj, aIk, aIl) {
		return aIj - aIl < aIh && aIh < aIj + aIl && aIk - aIl < aIi && aIi < aIk + aIl
	}, this.vv = function(hN, hO) {
		return hN * hN + hO * hO
	}
}

function d6() {
	this.s = new aIm, this.rm = 0;
	var aIn = new Array(30);

	function aIr() {
		for (var eY = aIn.length, a7 = 0; a7 < eY; a7++) aIn[a7] = null
	}
	this.dU = function() {
		for (var aIo, aIp = document.body.firstChild; aIp;) {
			if (aIo = aIp.nextSibling, document.body.contains(aIp) && ("DIV" === aIp.tagName || "INPUT" === aIp.tagName || "BUTTON" === aIp.tagName)) try {
				document.body.removeChild(aIp)
			} catch (e) {
				console.log("error 2623: " + e)
			}
			aIp = aIo
		}
	}, this.o = function(e0, aIq, a2C) {
		void 0 === aIq && (aIq = this.rm), bb.dc = !0, 0 === e0 && (0 === aW.zd() ? e0 = 5 : u.v.setState(13)), this.qw(), this.rm === e0 && (aIq = aIn[e0].aIq, aIn[e0] = null), this.rm = e0;
		var kP = aIn[e0];
		if (!kP || 4 === e0 || 7 === e0 || 8 === e0 || 9 === e0 || 10 === e0 || 11 === e0 || 13 === e0 || 15 === e0 || 18 === e0 || 20 <= e0 && e0 <= 28) {
			if (0 === e0) return void aIr();
			1 === e0 ? kP = new aIs : 2 === e0 ? kP = new aIt : 3 === e0 ? kP = new aIu : 4 === e0 || 9 === e0 || 10 === e0 || 11 === e0 || 13 === e0 ? kP = a2C : 5 === e0 ? kP = new aIv : 6 === e0 ? kP = new aIw : 7 === e0 ? kP = new aIx(n.s
					.aIy) : 8 === e0 ? kP = a2C : 12 === e0 ? kP = new aIz : 14 === e0 ? kP = new aJ0 : 15 === e0 ? kP = new aIx(n.s.aJ1) : 16 === e0 ? kP = new aJ2 : 17 === e0 ? kP = new aJ3 : 18 === e0 ? kP = new aJ4 : 19 === e0 ? kP =
				new aJ5 : 20 === e0 ? kP = new aJ6 : 21 === e0 ? kP = new aJ7 : 22 === e0 ? kP = new aJ8 : 23 === e0 ? kP = new aJ9 : 24 === e0 ? kP = new aJA : 25 === e0 ? kP = new aJB : 26 === e0 ? kP = new aJC : 27 === e0 ? kP = new aJD :
				28 === e0 ? kP = new aJE : 29 === e0 && (kP = new aJF), kP.aIq = aIq, aIn[e0] = kP
		}
		kP.show(a2C)
	}, this.zn = function() {
		this.wz() && this.aJG(this.aD4().aIq)
	}, this.aJG = function(e0) {
		this.wz() && (aIn[e0] ? (this.qw(), bb.dc = !0, this.rm = e0, aIn[e0].show()) : this.o(e0))
	}, this.qw = function() {
		this.wz() && aIn[this.rm].qw()
	}, this.r = function() {
		this.wz() && (aIn[this.rm].qw(), aIr(), this.rm = 0, u.v.setState(13))
	}, this.tJ = function() {
		var kP;
		this.wz() && (kP = aIn[this.rm]).tJ && kP.tJ()
	}, this.resize = function() {
		if (!this.wz()) return !1;
		aIn[this.rm].resize()
	}, this.gm = function(ef, eh) {
		var kP;
		this.wz() && (kP = aIn[this.rm]).gm && kP.gm(ef, eh)
	}, this.a00 = function(ef, eh) {
		var kP;
		this.wz() && (kP = aIn[this.rm]).a00 && kP.a00(ef, eh)
	}, this.a0O = function() {
		var kP;
		this.wz() && (kP = aIn[this.rm]).a0O && kP.a0O()
	}, this.a03 = function(kk, kl, deltaY) {
		var kP;
		this.wz() && (kP = aIn[this.rm]).a03 && kP.a03(kk, kl, deltaY)
	}, this.a0Y = function(code) {
		var kP;
		return !!this.wz() && ((kP = aIn[this.rm]).a0Y && kP.a0Y(code), !0)
	}, this.iS = function() {
		var kP;
		this.wz() && (kP = aIn[this.rm]) && kP.iS && kP.iS()
	}, this.wz = function() {
		return 0 < this.rm
	}, this.aD4 = function() {
		return aIn[this.rm]
	}, this.aBK = function(e0) {
		return aIn[e0]
	}, this.aJH = function() {
		return aIn
	}
}

function aIx(data) {
	var aJI, aJJ;
	this.show = function() {
		data.aJK && bE.aJy("account", data.qm), aJI.show(), this.resize()
	}, this.qw = function() {
		aJI.qw()
	}, this.resize = function() {
		aJI.resize(), aJJ.resize()
	}, this.a0Y = function(et) {
		2 === et && aJI.tB[0].ph()
	}, aJI = new t4(data.username, [new q("⬅️ " + L(22), function() {
		bE.clear(), n.zn()
	}), new q(data.aJK ? "🔄 " + L(138) : L(139), function() {
		n.o(8, n.aD4().aIq, new rn(25, {
			ro: 0,
			qm: data.qm,
			rl: data.rl
		}))
	}, 0, 0, 1)]), aJJ = new pH(aJI.tA, function() {
		var pJ = [];
		pJ.push(function() {
				var aJZ = new p1,
					qD = (aJZ.p4(L(177)), new qE({
						value: data.username,
						e0: -1
					}));
				qD.e.readOnly = !0, aJZ.pF(qD), aJZ.pF(new r9([new q(L(150), function(e) {
					return b6.pO.a1k(qD.e), b6.pO.a1l(e), !0
				}).button])), data.aJK || aJZ.p6(L(178));
				return aJZ
			}()),
			function(pJ) {
				var aJZ, p7, a9v, aJq, aJf;
				data.aJK || ((aJZ = new p1).p4(L(179)), (p7 = aJZ.p6(data.aJp.length + " / 160")).style.textAlign = "center", a9v = !0, (aJq = new tP(0, 1, function(e) {
					e = e.target.value.length;
					p7.textContent = e + " / 160", 160 < e ? a9v && (a9v = !1, aJf.pk(1), aJf.button.style.color = b7.mY) : a9v || (a9v = !0, aJf.pk(0), aJf.button.style.color = b7.nR)
				})).e.rows = 6, aJq.e.style.fontSize = "1em", aJq.tW(data.aJp), aJZ.pF(aJq), aJf = new q(L(180), function() {
					if (!a9v) return !0;
					n.o(8, n.aD4().aIq, new rn(29, {
						ro: 1,
						p5: aJq.tX().substring(0, 160)
					}))
				}, 0, 0, 1), aJZ.pF(new r9([aJf.button])), 0 !== data.aJr && (aJZ.pF(new r9([new q(L(1 === data.aJr ? 182 : 183), function() {
					n.o(8, n.aD4().aIq, new rn(29, {
						ro: 0,
						p5: ""
					}))
				}, 0, 0, 1).button])), aJZ.p6(1 === data.aJr ? L(184, [data.aJt - 1]) : L(185, [data.aJt - 1]))), aJZ.p6(L(181, [data.aJs])), pJ.push(aJZ))
			}(pJ),
			function(pJ) {
				var aJZ;
				data.aJK && 0 !== data.aJr && ((aJZ = new p1).p4(L(179)), aJZ.p8(data.aJp), aJZ.pF(new r9([new q(L(186), function(e) {
					return aw.s.aCB(0) && (b6.pO.a1l(e), aw.aJd.aJo({
						ro: 5,
						qm: data.qm,
						rl: data.rl
					})), !0
				}, 0, 0, 1).button])), pJ.push(aJZ))
			}(pJ), pJ.push(function() {
				var aJZ = new p1;
				aJZ.p4(L(140)), aJZ.pA(L(141) + b6.zC.a2Q(data.uI, .01, 2)), data.aJK || (aJZ.p6(L(142)), aJZ.p6(L(143)), aJZ.p6(L(144)));
				return aJZ
			}()), data.aJK && pJ.push(function() {
				var aJZ = new p1,
					qD = (aJZ.p4(L(145)), new qE(bf.dp.data[147], 1, void 0, function(e) {
						aJa(e.target.value)
					})),
					aJb = (aJZ.pF(qD), new q(L(14), function(e) {
						return qD.e.readOnly && aw.s.aCB(0) && (b6.pO.a1l(e), aJc(), aw.aJd.aJe({
							ro: 0,
							qm: data.qm,
							rl: data.rl,
							value: bH.ow(Math.floor(100 * bf.dp.data[147].value), 0, 4294967295)
						})), !0
					}, 1)),
					aJf = new q(L(146), function(e) {
						return e.textContent === L(146) ? (e.textContent = L(147), qD.e.readOnly = !0, aJb.pk(0), aJb.button.style.color = b7.nR, bf.r6.r7(147, qD.e.value), aJa(bf.dp.data[147].value)) : aJc(), !0
					}),
					p7 = (aJZ.pF(new r9([aJf.button])), aJZ.p6()),
					aJa = function(f0) {
						f0 = isNaN(f0) ? 0 : Number(f0);
						var f0 = Math.max(f0, (data.aJg + 1) / 100),
							aJh = Math.floor(100 * Math.max(1e-4 * f0, data.aJg / 100)) / 100;
						p7.textContent = L(148, [f0.toFixed(2), bf.dp.data[105].value, aJh.toFixed(2), data.qm, (f0 - aJh).toFixed(2)])
					},
					aJc = function() {
						aJf.button.textContent = L(146), qD.e.readOnly = !1, aJb.pk(1), aJb.button.style.color = b7.mY
					};
				return aJa(bf.dp.data[147].value), aJZ.pF(new r9([aJb.button])), aJZ
			}());
		pJ.push(function() {
			var aJZ = new p1,
				qD = (aJZ.p4(L(149)), new qE({
					value: data.qm,
					e0: -1
				}));
			return qD.e.readOnly = !0, aJZ.pF(qD), aJZ.pF(new r9([new q(L(150), function(e) {
				return b6.pO.a1k(qD.e), b6.pO.a1l(e), !0
			}).button])), aJZ
		}()), data.aJK || (pJ.push(function() {
			var aJZ = new p1,
				aJi = (aJZ.p4(L(151)), new qE(bf.dp.data[106]));
			return aJi.e.readOnly = !0, aJi.e.type = "password", aJZ.pF(aJi), aJZ.pF(new r9([new q(L(152), function(e) {
				return e.textContent === L(152) ? (e.textContent = L(153), aJi.e.type = "text") : (e.textContent = L(152), aJi.e.type = "password"), !0
			}).button, new q(L(150), function(e) {
				return b6.pO.a1k(aJi.e), b6.pO.a1l(e), !0
			}).button])), aJZ.pF(new r9([new q(L(154), function() {
				n.o(8, n.aD4().aIq, new rn(15))
			}).button])), aJZ.p4(L(155), "0.8em"), aJZ.p6(L(156)), aJZ.p6(L(157)), aJZ.p6(L(158)), aJZ
		}()), pJ.push(function() {
			var aJZ = new p1;
			return aJZ.p4(L(159)), aJZ.pF(new r9([new q(L(160), function() {
				n.o(6, n.aD4().aIq)
			}).button])), aJZ.pF(new r9([new q(L(161), function() {
				bf.r6.r7(105, ""), n.o(8, n.aD4().aIq, new rn(18))
			}).button])), aJZ.pF(new r9([new q(L(162) + bf.dp.data[105].value, function() {
				n.o(4, 0, new p(L(163), L(164), !0, [new q("⬅️ " + L(22), function() {
					n.o(7, n.aBK(7).aIq)
				})]))
			}, b7.nC).button])), aJZ
		}()), pJ.push(function() {
			function aJk(e0) {
				for (var a7 = 0; a7 < 2; a7++) aJj[a7].pk(0 === e0 ? b7.mk : 0 === a7 ? b7.nC : b7.mv)
			}
			var pD, aJj, aJZ = new p1;
			aJZ.p4(L(165)), aJZ.p6(L(166)), bf.s.u2();
			return aJj = [new q(L(167), function() {
				var e0 = Math.min(bf.dp.data[117].value, pD.pE.length - 1);
				if (!(e0 < 1)) {
					pD.pE[e0].remove(), pD.pE.splice(e0, 1);
					for (var a7 = e0; a7 < pD.pE.length; a7++) pD.pE[a7].name = "" + a7;
					bf.s.u5(e0), e0 = bf.dp.data[117].value, pD.pE[e0].textContent = pD.pE[e0].textContent.replace("⚪", "🟢"), aJk(e0)
				}
			}, b7.mk), new q(L(168), function() {
				var e0 = Math.min(bf.dp.data[117].value, pD.pE.length - 1);
				e0 < 1 || (e0 = bf.s.u6(e0), bf.r6.r7(105, e0.qm), bf.r6.r7(106, e0.password), n.o(8, n.aD4().aIq, new rn(18)))
			}, b7.mk)], (pD = new sz(bf.dp.data[117], aJk)).pE[0].style.marginTop = "0.5em", aJZ.pC(pD), aJZ.pF(new r9([aJj[1].button])), aJZ.pF(new r9([aJj[0].button])), aJZ
		}()));
		return pJ.push(function() {
				var aJZ = new p1;
				return aJZ.p4(L(169)), aJZ.pA(L(170) + b6.zC.a2Q(data.uE, .1, 1) + "<br>" + L(171) + (data.uF + 1) + " / " + data.uH + "<br>" + L(172) + data.uG), aJZ
			}()),
			function(pJ) {
				var aJZ = new p1,
					zF = data.uL,
					aJu = (aJZ.p4(L(187)), aJZ.pA(L(188) + (zF ? "[" + data.uJ + "]" : "-")), aJZ.pA(L(189) + b6.zC.a2Q(zF, .001, 2)), aJZ.pA(L(171) + (data.uN + 1) + " / " + data.uH), data.uO),
					aJv = (aJZ.pA(L(190) + b6.zC.a2Q(aJu, .01, 2)), data.uQ);
				aJZ.pA(L(191) + aJv), aJZ.pA(L(192) + b6.zC.a2Q(aJu / Math.max(aJv, 1), .01, 2)), zF = data.uM, aJZ.p4(L(193), "0.8em"), aJZ.pA("Clan: " + (zF ? "[" + data.uK + "]" : "-")), aJZ.pA(L(189) + b6.zC.a2Q(zF, .001, 2)), aJu = data
					.uP, aJZ.pA(L(190) + b6.zC.a2Q(aJu, .01, 2)), aJv = data.uR, aJZ.pA(L(191) + aJv), aJZ.pA(L(192) + b6.zC.a2Q(aJu / Math.max(aJv, 1), .01, 2)), pJ.push(aJZ)
			}(pJ),
			function(pJ) {
				var aJZ = new p1;
				aJZ.p4(L(194)), aJZ.pA(L(195) + data.aJw + "<br>" + L(175) + (data.aJx.length ? L(196, [data.aJx]) : L(197))), data.aJK && (aJZ.pF(new r9([new q(L(198), function(e) {
					return aw.s.aCB(0) && (b6.pO.a1l(e), aw.aJd.aJo({
						ro: 4,
						qm: data.qm,
						rl: data.rl
					})), !0
				}, 0, 0, 1).button])), aJZ.p6(L(199)), aJZ.p6(L(200)));
				pJ.push(aJZ)
			}(pJ), pJ.push(function() {
				var aJZ = new p1;
				if (aJZ.p4(L(173)), aJZ.pA(L(174) + data.aJl + "<br>" + L(171) + (data.aJm + 1) + " / " + data.uH + "<br>" + L(175) + bl.e2(data.aJm)), data.aJK) {
					var qD = new qE(bf.dp.data[157], 1, void 0, function(e) {
							aJa(e.target.value)
						}),
						aJf = (qD.e.style.marginTop = "0.6em", aJZ.pF(qD), new q(L(146), function(e) {
							return e.textContent === L(146) ? (e.textContent = L(147), qD.e.readOnly = !0, aJn[0].pk(0), aJn[1].pk(0), aJn[0].button.style.color = b7.nR, aJn[1].button.style.color = b7.nR, bf.r6.r7(157, qD.e
								.value), aJa(bf.dp.data[157].value)) : aJc(), !0
						})),
						aJn = (aJZ.pF(new r9([aJf.button])), [new q("−", function(e) {
							return qD.e.readOnly && aw.s.aCB(0) && (b6.pO.a1l(e), aJc(), aw.aJd.aJo({
								ro: 7,
								qm: data.qm,
								rl: bH.ow(bf.dp.data[157].value, 2, 32767)
							})), !0
						}, 1), new q("+", function(e) {
							return qD.e.readOnly && aw.s.aCB(0) && (b6.pO.a1l(e), aJc(), aw.aJd.aJo({
								ro: 6,
								qm: data.qm,
								rl: bH.ow(bf.dp.data[157].value, 2, 32767)
							})), !0
						}, 1)]),
						p7 = aJZ.p6(),
						aJa = function(f0) {
							f0 = isNaN(f0) ? 0 : Number(f0), f0 = Math.floor(bH.ow(f0, 3, 32767)), p7.textContent = L(176, [f0 - 1, f0, bf.dp.data[105].value])
						};
					aJZ.pF(new r9([aJn[0].button, aJn[1].button]));
					for (var a7 = 0; a7 < 2; a7++) aJn[a7].button.style.fontSize = "1.6em";
					var aJc = function() {
						aJf.button.textContent = L(146), qD.e.readOnly = !1, aJn[0].pk(1), aJn[1].pk(1), aJn[0].button.style.color = b7.mY, aJn[1].button.style.color = b7.mY
					};
					aJa(bf.dp.data[157].value)
				}
				return aJZ
			}()), pJ
	}())
}

function aJ8() {
	var aJz, aK0, aK1, pJ;

	function aK2() {
		aK4(), 2 !== a9.data.aIncomeType && (a9.data.aIncomeData = null), n.aJH()[19] = null, n.zn()
	}

	function aK4() {
		2 === a9.data.aIncomeType ? (b6.pY.a1B(aK1.tX(), a9.data.aIncomeData, 255), b6.pY.max(a9.data.aIncomeData) || (a9.data.aIncomeType = 0)) : 1 !== a9.data.aIncomeType || a9.data.aIncomeValue || (a9.data.aIncomeType = 0)
	}
	this.show = function() {
		aJz.show(), this.resize()
	}, this.qw = function() {
		aJz.qw()
	}, this.resize = function() {
		aJz.resize(), aK0.resize()
	}, this.a0Y = function(et) {
		2 === et && aJz.tB[0].ph()
	}, aJz = new t4(L(201), [new q("⬅️ " + L(22), aK2)]), aK0 = new pH(aJz.tA, (function(pJ) {
		var aJZ = new p1;
		aJZ.p4(L(202)), aJZ.pC(new sz({
			t3: [L(203), L(204), L(205)],
			value: a9.data.aIncomeType
		}, function(e0) {
			aK4(), 2 !== e0 || a9.data.aIncomeData || (a9.data.aIncomeData = new Uint8Array(a9.eV)), a9.data.aIncomeType = e0, n.o(22)
		})), pJ.push(aJZ)
	}(pJ = []), function(pJ) {
		var aJZ;
		1 === a9.data.aIncomeType && ((aJZ = new p1).p4("Value"), aJZ.pF(new qE({
			e0: -1,
			value: a9.data.aIncomeValue
		}, 1, 0, function(e) {
			var value = bH.ow(Math.floor(e.target.value), 0, 255);
			e.target.value = a9.data.aIncomeValue = value
		})), pJ.push(aJZ))
	}(pJ), function(pJ) {
		var aJZ;
		2 === a9.data.aIncomeType && ((aJZ = new p1).p4("Data"), (aK1 = new tP(0, 1, 0, 1)).tW(b6.zC.a2X(a9.data.aIncomeData, 4)), aJZ.pF(aK1), pJ.push(aJZ))
	}(pJ), pJ))
}

function aJB() {
	var aJz, aK0, aK1;

	function aK2() {
		aK4(), 3 !== a9.data.botDifficultyType || b6.pY.a0z(a9.data.botDifficultyData) || (a9.data.botDifficultyType = 0), 3 !== a9.data.botDifficultyType && (a9.data.botDifficultyData = null), n.aJH()[19] = null, n.zn()
	}

	function aK4() {
		3 === a9.data.botDifficultyType && b6.pY.a1B(aK1.tX(), a9.data.botDifficultyData, aA.js.length - 1)
	}

	function aK9(pJ, e0) {
		var aJZ = new p1,
			value = (aJZ.p4(e0 < 0 ? L(47) : L(46) + " " + bc.yl[e0 % 9]), 0 <= e0 && (aJZ.pA(L(208) + ": " + a9.data.teamPlayerCount[e0]).style.marginBottom = "1em"), e0 < 0 ? a9.data.botDifficultyValue : a9.data.botDifficultyTeam[e0]);
		aJZ.pC(new sz({
			t3: aA.js,
			value: value
		}, function(k3) {
			e0 < 0 ? a9.data.botDifficultyValue = k3 : a9.data.botDifficultyTeam[e0] = k3
		})), pJ.push(aJZ)
	}
	this.show = function() {
		aJz.show(), this.resize()
	}, this.qw = function() {
		aJz.qw()
	}, this.resize = function() {
		aJz.resize(), aK0.resize()
	}, this.a0Y = function(et) {
		2 === et && aJz.tB[0].ph()
	}, aJz = new t4(L(47), [new q("⬅️ " + L(22), aK2)]), aK0 = new pH(aJz.tA, function() {
		var pJ = [];
		if (function(pJ) {
				var aJZ = new p1,
					t3 = (aJZ.p4(L(202)), [L(204), L(206), L(207), L(205)]),
					value = a9.data.botDifficultyType;
				0 === a9.data.gameMode && (value = Math.min(value, 2), t3.splice(2, 1));
				aJZ.pC(new sz({
					t3: t3,
					value: value
				}, function(e0) {
					aK4(), a9.data.botDifficultyType = e0, 0 === a9.data.gameMode && 2 === e0 && (a9.data.botDifficultyType = 3), 3 !== a9.data.botDifficultyType || a9.data.botDifficultyData || (a9.data.botDifficultyData =
						new Uint8Array(a9.eV)), 2 !== a9.data.botDifficultyType || a9.data.botDifficultyTeam || (a9.data.botDifficultyTeam = new Uint8Array(9)), n.o(25)
				})), pJ.push(aJZ)
			}(pJ), 0 === a9.data.botDifficultyType) aK9(pJ, -1);
		else if (2 === a9.data.botDifficultyType)
			for (var a7 = 0; a7 < a9.data.teamPlayerCount.length; a7++) a9.data.teamPlayerCount[a7] && aK9(pJ, a7);
		else 3 === a9.data.botDifficultyType && ! function(pJ) {
			var aJZ = new p1;
			aJZ.p4("Data"), (aK1 = new tP(0, 1, 0, 1)).tW(b6.zC.a2X(a9.data.botDifficultyData, 8)), aJZ.pF(aK1), pJ.push(aJZ)
		}(pJ);
		return pJ
	}())
}

function aKA(data) {
	var aJI, aKB, aKC, aKD, aKE, aKF, aKG, colors, aKH, aKI, aKJ = 0,
		aKK = 0,
		aKL = !1,
		aKM = !1,
		aKN = [1, 5, 60, 240, 1440, 10080, 43200];

	function aKp(kk, kl) {
		! function(kk, kl) {
			return aKB < kk && kk < aKB + aKD && aKC < kl && kl < aKC + aKE
		}(aKJ = kk, aKK = kl) ? (aKL && (bb.dc = !0), aKL = !1) : (aKL = !0, bb.dc = !0)
	}
	this.show = function() {
		aKM = bf.dp.data[127].value, aJI.show(), this.resize()
	}, this.qw = function() {
		aJI.qw()
	}, this.resize = function() {
		aJI.resize();
		var et = at.pU,
			tI = aJI.tF(),
			aKW = et * tI.tH,
			et = et * tI.qz;
		aKF = b6.pO.s7(.06), aKG = b6.pO.s7(.04), aKB = b6.pO.s7(.06), aKC = et + aKF, aKD = at.a1 - aKB - aKG, aKE = aKW + et - aKC - aKG
	}, this.tJ = function() {
		aJI.tJ(),
			function() {
				var a7, aKT, g1, ef, er, g = data.data,
					aKa = 1,
					aKb = .125,
					aKc = aKM ? 65536 : 0;
				for (a7 = 0; a7 < g.length; a7++)
					for (aKT = g[a7].aKT, g1 = aKT.length, aKa = Math.max(g1, aKa), er = 0; er < g1; er++) aKb = Math.max(aKT[er], aKb), aKc = Math.min(aKT[er], aKc);
				var lz = aKC + aKE,
					wU = aKE / (aKb - aKc),
					wT = 1 / (aKa - 1);
				for (tK.lineWidth = bY.xR, a7 = 0; a7 < g.length; a7++) {
					for (aKT = g[a7].aKT, g1 = aKT.length, ef = aKB, tK.beginPath(), tK.moveTo(ef + aKD, lz - wU * (aKT[g1 - 1] - aKc)), er = g1 - 2; 0 <= er; er--) tK.lineTo(ef + wT * er * aKD, lz - wU * (aKT[er] - aKc));
					tK.strokeStyle = colors[a7], tK.stroke()
				}(function(aKc, aKb, lz, wU) {
					tK.font = b6.pO.rP(0, .25 * aKB), b6.pO.textBaseline(tK, 1), b6.pO.textAlign(tK, 2), tK.fillStyle = colors[0];
					for (var ef = .92 * aKB, a7 = 0; a7 < 3; a7++) {
						var f0 = aKc + a7 * (aKb - aKc) / 2;
						tK.fillText((f0 / 1e3).toFixed(3), ef, lz - wU * (f0 - aKc))
					}
				})(aKc, aKb, lz, wU),
				function(aKa) {
					var eh = aKC + aKE + .15 * aKG;
					tK.font = b6.pO.rP(0, Math.min(.4 * aKG, .028 * at.a1)), b6.pO.textBaseline(tK, 0), b6.pO.textAlign(tK, 2), tK.fillStyle = colors[0], tK.fillText(b6.a0q.a1a(aKH), aKB + aKD, eh), b6.pO.textAlign(tK, 0), tK.fillText(b6.a0q.a1a(
						new Date(aKI.getTime() - 6e4 * (aKa - 1) * aKN[data.aKS])), aKB, eh)
				}(aKa),
				function(aKa, aKc, aKb) {
					if (aKL && !(aKa < 2)) {
						for (var a6V, e0 = (aKJ - aKB) / aKD * (aKa - 1), kx = Math.floor(e0), ky = Math.floor(1 + e0), aKf = e0 - kx, aKg = 1e5, aKh = -1, aKi = -1, aKj = aKb - (aKb - aKc) * (aKK - aKC) / aKE, g = data.data, a7 = 0; a7 < g
							.length; a7++) {
							var aHT, aKT = g[a7].aKT;
							aKT.length <= ky || (aKT = aKT[kx] + aKf * (aKT[ky] - aKT[kx]), (aHT = Math.abs(aKj - aKT)) < aKg && (aKg = aHT, aKh = a7, aKi = aKT))
						} - 1 !== aKh && (aKb = aKC + aKE - (aKi - aKc) / (aKb - aKc) * aKE, tK.lineWidth = .5 * bY.xR, tK.strokeStyle = colors[aKh], tK.beginPath(), tK.moveTo(aKB, aKb), tK.lineTo(aKJ, aKb), tK.lineTo(aKJ, aKC + aKE), tK
						.stroke(), tK.beginPath(), tK.arc(aKJ, aKb, .1 * aKB, 0, 2 * Math.PI), tK.fillStyle = colors[aKh], tK.fill(), aKc = aKC + aKE + .15 * aKG, b6.pO.textAlign(tK, 1), a6V = aKa - 2 < e0 ? (a6V = aKI.getTime() - 6e4 * aKN[
								data.aKS], new Date(a6V + (e0 - (aKa - 2)) * (aKH.getTime() - a6V))) : new Date(aKI.getTime() - 6e4 * (aKa - e0 - 1) * aKN[data.aKS]), aKa = b6.a0q.a1a(a6V), e0 = b6.pO.measureText(aKa), a6V = bH.ow(aKJ, aKB +
								.5 * e0, aKB + aKD - .5 * e0), tK.fillStyle = b6.color.mQ(70, 50, 20), tK.fillRect(a6V - .52 * e0, aKC + aKE, 1.04 * e0, .55 * aKG), tK.fillStyle = colors[0], tK.fillText(aKa, a6V, aKc), tK.font = b6.pO.rP(0,
								.25 * aKB), b6.pO.textBaseline(tK, 1), b6.pO.textAlign(tK, 2), a6V = .92 * aKB, aKa = (aKi / 1e3).toFixed(3), e0 = b6.pO.measureText(aKa), aKc = a6V - 1.04 * e0, tK.fillStyle = b6.color.mQ(70, 50, 20), tK
							.fillRect(aKc, aKb - .1625 * aKB, aKB - aKc, .275 * aKB), tK.fillStyle = colors[aKh], tK.fillText(aKa, a6V, aKb))
					}
				}(aKa, aKc, aKb)
			}(), tK.lineWidth = bY.xR, tK.strokeStyle = b7.mY, tK.beginPath(), tK.moveTo(aKB, aKC), tK.lineTo(aKB, aKC + aKE), tK.lineTo(aKB + aKD, aKC + aKE), tK.stroke();
		var a7, fontSize = .5 * aKF,
			g = (tK.font = b6.pO.rP(0, fontSize), b6.pO.textBaseline(tK, 1), b6.pO.textAlign(tK, 0), data.data),
			eY = g.length,
			eh = aKC - .5 * aKF,
			p5 = "";
		for (a7 = 0; a7 < eY; a7++) p5 += g[a7].name + "  ";
		p5 = p5.trim();
		var aKm = b6.pO.measureText(p5),
			ef = .5 * (at.a1 - aKm);
		for (aKm > at.a1 && (ef = 0, tK.font = b6.pO.rP(0, at.a1 / aKm * fontSize)), a7 = 0; a7 < eY; a7++) tK.fillStyle = colors[a7], tK.fillText(g[a7].name, ef, eh), ef += b6.pO.measureText(g[a7].name + "  ")
	}, this.gm = function(kk, kl) {
		aKp(kk, kl)
	}, this.a00 = function(kk, kl) {
		aKp(kk, kl)
	}, this.a0Y = function(et) {
		2 === et && aJI.tB[0].ph()
	};
	var a7, dk, a1Y, k3, eb = data.data,
		eY = eb.length,
		max = 1;
	for (a7 = 0; a7 < eY; a7++) max = Math.max(max, eb[a7].aKT.length);
	for (a7 = 0; a7 < eY; a7++)
		for (; eb[a7].aKT.length < max;) eb[a7].aKT.unshift(0);
	dk = new Date, a1Y = 6e4 * dk.getTimezoneOffset(), k3 = dk.getTime() - a1Y, aKH = new Date(k3), 6 === data.aKS ? function(dk, a1Y) {
		var aKV = dk.getUTCFullYear(),
			dk = dk.getUTCMonth() + 1;
		aKI = dk < 12 ? new Date(Date.UTC(aKV, dk) - a1Y) : new Date(Date.UTC(aKV + 1, 0) - a1Y)
	}(dk, a1Y) : (a1Y = 6e4 * aKN[data.aKS], aKI = data.aKS <= 4 ? new Date(k3 + a1Y - dk.getTime() % a1Y) : new Date(k3 + a1Y - (dk.getTime() + 2592e5) % a1Y)), k3 = b6.color, colors = [b7.mY, k3.mQ(255, 0, 0), k3.mQ(0, 200, 0), k3.mQ(80, 80,
		255), k3.mQ(255, 255, 0), k3.mQ(255, 0, 255), k3.mQ(0, 255, 255), k3.mQ(255, 140, 0), k3.mQ(128, 128, 128), k3.mQ(0, 255, 140)], aJI = new t4(L(209) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.aKS] + ", " + b6.a0q.a1X(aKH), [
		new q("⬅️ " + L(22), function() {
			n.s.aA1()
		}), new q(L(210), function() {
			n.o(14)
		})
	], !1)
}

function aJ0() {
	var aJI, aJJ, pJ;
	this.show = function() {
		aJI.show(), this.resize()
	}, this.qw = function() {
		aJI.qw()
	}, this.resize = function() {
		aJI.resize(), aJJ.resize()
	}, this.a0Y = function(et) {
		2 === et && aJI.tB[0].ph()
	}, aJI = new t4(L(211), [new q("⬅️ " + L(22), function() {
		n.aJG(13)
	})]), aJJ = new pH(aJI.tA, ((pJ = []).push(function() {
		var aJZ = new p1,
			aJf = (aJZ.p4(L(212)), aJZ.p6(L(213)), new q(L(214), function() {
				bf.r6.r7(130, 0), n.s.aKu()
			}, 0, 0, 1)),
			qD = new qE(bf.dp.data[126], 0, function() {
				aJf.button.click()
			});
		return aJZ.pF(qD), qD.e.placeholder = "a,b,c", qD.e.style.marginTop = "0.5em", aJZ.pF(new r9([aJf.button])), aJZ
	}()), pJ.push(function() {
		var aJZ = new p1,
			aJf = new q(L(214), function() {
				bf.r6.r7(130, 1), n.s.aKu()
			}, 0, 0, 1),
			aKv = new qE(bf.dp.data[129], 1, function() {
				aKv.e.focus()
			}),
			aKw = new qE(bf.dp.data[128], 1, function() {
				aJf.button.click()
			});
		return aJZ.p4(L(215)), aJZ.pF(aKw), aKw.e.style.marginBottom = "0.5em", aJZ.p4(L(216)), aJZ.pF(aKv), aJZ.pF(new r9([aJf.button])), aJZ
	}()), pJ.push(function() {
		var aJZ = new p1;
		return aJZ.p4(L(217)), bf.dp.data[125].t3 = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], aJZ.pC(new sz(bf.dp.data[125])), aJZ
	}()), pJ.push(function() {
		var aJZ = new p1;
		return aJZ.p4(L(218)), aJZ.pF(new r3(bf.dp.data[127], L(219))), aJZ
	}()), pJ))
}

function aIz() {
	var aJI, aKx, aKD, aKy, aKz, aL0, colors = [0, 0, 0],
		aL1 = -1;

	function aL4(a7) {
		var aL5 = aKx.eh + a7 * (bY.gap + aL0);
		tK.fillStyle = "rgb(" + (0 === a7 ? 150 : 2 === a7 ? 30 : 0) + "," + (1 === a7 ? 130 : 2 === a7 ? 30 : 0) + "," + (2 === a7 ? 220 : 0) + ")", tK.fillRect(aKy, aL5, colors[a7] * aKz, aL0), tK.strokeStyle = b7.mY, tK.strokeRect(aKy, aL5, aKz,
			aL0), tK.fillStyle = b7.mY, tK.font = b6.pO.rP(0, .32 * aL0), b6.pO.textBaseline(tK, 1), b6.pO.textAlign(tK, 0), tK.fillText(L(0 === a7 ? 222 : 1 === a7 ? 223 : 224) + aL2(a7), aKy + bY.gap, aL5 + .53 * aL0)
	}

	function aL2(a7, aL6) {
		return aL6 = aL6 || 256, bH.ow(Math.floor(aL6 * colors[a7]), 0, aL6 - 1)
	}

	function a0U(kk, kl) {
		return !(kk < aKy || kl < aKx.eh || kk > aKx.ef + aKx.a1 || kl > aKx.eh + aKx.j7)
	}
	this.show = function() {
		var f0 = bf.dp.data[121].value;
		colors[0] = (f0 >> 12) / 63, colors[1] = (f0 >> 6 & 63) / 63, colors[2] = (63 & f0) / 63, aJI.show(), this.resize()
	}, this.qw = function() {
		bf.r6.r7(121, (aL2(0, 64) << 12) + (aL2(1, 64) << 6) + aL2(2, 64)), aJI.qw()
	}, this.resize = function() {
		aJI.resize(), aKx.resize();
		var et = at.pU,
			tI = aJI.tF(),
			aL3 = (aKx.eh = Math.max(aKx.eh, et * tI.qz + bY.gap), et * tI.tH - 2 * bY.gap);
		aKx.j7 = Math.min(aKx.j7, aL3), aKx.a1 = 2 * aKx.j7, aKx.eh = et * tI.qz + .5 * (et * tI.tH - aKx.j7), aKx.ef = .5 * (at.a1 - aKx.a1), aKD = .25 * aKx.a1, aKy = aKx.ef + aKD + bY.gap, aKz = aKx.a1 - aKD - bY.gap, aL0 = (aKx.j7 - 2 * bY
			.gap) / 3
	}, this.tJ = function() {
		var dz, s6, es;
		aJI.tJ(), tK.lineWidth = bY.xR, dz = aL2(0), s6 = aL2(1), es = aL2(2), tK.fillStyle = "rgb(" + dz + "," + s6 + "," + es + ")", tK.fillRect(aKx.ef, aKx.eh, aKD, aKx.j7), tK.strokeStyle = b7.mY, tK.strokeRect(aKx.ef, aKx.eh, aKD, aKx.j7),
			tK.fillStyle = dz + s6 + es < 306 && s6 < 150 ? b7.mY : b7.mP, b6.pO.textBaseline(tK, 1), b6.pO.textAlign(tK, 1), tK.font = b6.pO.rP(0, .1 * aKx.j7), tK.rotate(-Math.PI / 2), tK.fillText(L(221), -aKx.eh - .5 * aKx.j7, aKx.ef + .5 *
				aKD), tK.setTransform(1, 0, 0, 1, 0, 0), aL4(0), aL4(1), aL4(2)
	}, this.gm = function(kk, kl) {
		a0U(kk, kl) && (aL1 = bH.ow(Math.floor((kl - aKx.eh) / (aL0 + .75 * bY.gap)), 0, 2), colors[aL1] = bH.ow((kk - aKy) / aKz, 0, 1), bb.dc = !0)
	}, this.a00 = function(kk) {
		-1 !== aL1 && (colors[aL1] = bH.ow((kk - aKy) / aKz, 0, 1), bb.dc = !0)
	}, this.a03 = function(kk, kl, deltaY) {
		a0U(kk, kl) && (kk = bH.ow(Math.floor((kl - aKx.eh) / (aL0 + .75 * bY.gap)), 0, 2), colors[kk] = bH.ow(colors[kk] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), bb.dc = !0)
	}, this.a0O = function() {
		0 <= aL1 && (aL1 = -1, bb.dc = !0)
	}, this.a0Y = function(et) {
		2 === et && aJI.tB[0].ph()
	}, aJI = new t4(L(220), [new q("⬅️ " + L(22), function() {
		n.s.aA1()
	})], !1), aKx = new q1([.5, .25], [.5, .5], 1)
}

function aJ7() {
	var aJz, aK0, aK1, pz;

	function aK2() {
		aK4(), 1 !== a9.data.colorsType && (a9.data.colorsData = null), n.aJH()[19] = null, n.zn()
	}

	function aL7() {
		aK4(), n.o(21)
	}

	function aK4() {
		1 === a9.data.gameMode ? a9.a2o.a2s() : 0 === a9.data.gameMode && 1 === a9.data.colorsType && b6.pY.a1B(aK1.tX(), a9.data.colorsData, 262143)
	}
	this.show = function() {
		aJz.show(), this.resize()
	}, this.qw = function() {
		aJz.qw()
	}, this.resize = function() {
		aJz.resize(), aK0.resize()
	}, this.a0Y = function(et) {
		2 === et && aJz.tB[0].ph()
	}, pz = [new q("⬅️ " + L(22), aK2)], 1 === a9.data.gameMode && pz.push(new q(L(225), aL7, 1, 1)), aJz = new t4(L(226), pz), aK0 = new pH(aJz.tA, (function(pJ) {
		var aJZ = new p1;
		aJZ.p4(L(202)), 0 === a9.data.gameMode && (aJZ.pC(new sz({
			t3: [L(227), L(205)],
			value: a9.data.colorsType
		}, function(e0) {
			aK4(), a9.data.colorsType = e0, 1 !== a9.data.colorsType || a9.data.colorsData && a9.data.colorsData.length === a9.eV || (a9.data.colorsData = new Uint32Array(a9.eV)), n.o(21)
		})), aJZ.pF(new rJ));
		aJZ.pF(new r3({
			value: a9.data.selectableColor
		}, L(228), function(value) {
			a9.data.selectableColor = value
		})), pJ.push(aJZ)
	}(pz = []), 0 === a9.data.gameMode ? 1 === a9.data.colorsType && function(pJ) {
		var aJZ = new p1;
		aJZ.p4("Data"), (aK1 = new tP(0, 1, 0, 1)).tW(b6.zC.a2X(a9.data.colorsData, 1)), aJZ.pF(aK1), pJ.push(aJZ)
	}(pz) : (a9.a2o.a2s(), pz.push(function() {
		var aJZ = new p1;
		aJZ.p4(L(208));
		for (var a7 = 0; a7 < bc.yl.length; a7++) {
			var k3 = (a7 + 1) % bc.yl.length,
				e = aJZ.pA((0 == k3 ? "" : "Team ") + bc.yl[k3]);
			a7 && (e.style.marginTop = "0.5em"), aJZ.pF(new qE({
				e0: -1,
				value: a9.data.teamPlayerCount[k3]
			}, 1, 0, function(e) {
				aJz.tB[1].pk(0);
				var playerCount = bH.ow(Math.floor(e.target.value), 0, 512);
				e.target.value = playerCount, a9.data.teamPlayerCount[e.target.aL9] = playerCount
			})).e.aL9 = k3
		}
		return aJZ
	}())), pz))
}

function rn(id, a2C, aLA) {
	var aJI, aLB;

	function aLF() {
		aLB.pK.innerHTML += "<br>" + L(231)
	}

	function aLE() {
		b9.a3(48), b9.a4(24, Math.floor(bH.pow(24) * Math.random())), b9.a4(24, Math.floor(bH.pow(24) * Math.random())), bD.dU(b9.a8), bf.r6.r7(110, bB.rp.rq(bB.rp.rr(8))), aw.aJd.aLT()
	}
	this.aLC = !0, this.aLD = id, this.show = function() {
		aJI.show(), this.resize(), 15 === id ? (aw.s.aCH(0, id) ? aLE : aLF)() : 16 === id ? aw.s.aCH(0, id) ? aw.a9y.aLG(2) : aLF() : 17 === id ? aw.s.aCH(0, id) ? aw.a9y.aLG(3) : aLF() : 18 === id ? (aw.s.close(0, 3253), aw.s.aCH(0, id),
		aLF()) : 21 === id ? aw.s.aCH(0, id) ? aw.aLH.aLI(a2C.s2, a2C.s3, a2C.s4) : aLF() : 22 === id ? aw.s.aCH(0, id) ? aw.aLH.aLJ(a2C.s2, a2C.aLK, a2C.aLL) : aLF() : 23 === id ? aw.s.aCH(0, id) ? aw.aLH.aLM(a2C.aKS, a2C.z8) : aLF() : 24 ===
			id ? aw.s.aCH(0, id) ? aw.aLH.aLN(a2C.aKS, a2C.s3, a2C.s4) : aLF() : 25 === id ? aw.s.aCH(0, id) ? aw.aJd.aJo(a2C) : aLF() : 28 === id ? aw.s.aCH(0, id) ? aw.aLH.aLO(a2C.s2, a2C.aLK, a2C.aLL) : aLF() : 29 === id && (aw.s.aCH(0, id) ?
				aw.aJd.aLP(a2C) : aLF())
	}, this.aLQ = function() {
		15 === id ? aLE() : 16 === id ? aw.a9y.aLG(2) : 17 === id ? aw.a9y.aLG(3) : 18 === id ? n.o(8, this.aIq, new rn(16)) : 21 === id ? aw.aLH.aLI(a2C.s2, a2C.s3, a2C.s4) : 22 === id ? aw.aLH.aLJ(a2C.s2, a2C.aLK, a2C.aLL) : 23 === id ? aw.aLH
			.aLM(a2C.aKS, a2C.z8) : 24 === id ? aw.aLH.aLN(a2C.aKS, a2C.s3, a2C.s4) : 25 === id ? aw.aJd.aJo(a2C) : 28 === id ? aw.aLH.aLO(a2C.s2, a2C.aLK, a2C.aLL) : 29 === id ? aw.aJd.aLP(a2C) : 1e3 === id && (this.aLD = id = 25, aw.aJd.aJo(
				a2C))
	}, this.aLR = function(code, bo, data) {
		!bo && code !== id || (16 === code ? n.o(7, this.aIq) : 17 === code ? (aw.s.close(0, 3252), bf.s.u5(0), bf.dp.data[117].t3 && 0 < bf.dp.data[117].t3.length ? (bo = bf.s.u6(0), bf.r6.r7(105, bo.qm), bf.r6.r7(106, bo.password), n.o(8, this
			.aIq, new rn(16))) : (bf.r6.r7(105, ""), n.s.aA1())) : 21 === code ? n.o(10, this.aIq, new aLS(data)) : 23 === code ? n.o(13, 0, new aKA({
			data: data,
			aKS: a2C.aKS
		})) : 25 === code && (n.s.aJ1.qm = a2C.qm, n.o(15, this.aIq)))
	}, this.qw = function() {
		aJI.qw()
	}, this.resize = function() {
		aJI.resize(), aLB.resize()
	}, this.a0Y = function(et) {
		2 === et && aJI.tB[0].ph()
	}, aJI = new t4(L(229), [new q("⬅️ " + L(22), function() {
		aLA ? n.o(29) : n.s.aA1()
	})]), aLB = new r8(aJI.tA, L(230))
}

function aJ5() {
	var aJz, aK0, pJ;

	function aLW() {
		var g1;
		1 === a9.data.gameMode ? (a9.data.teamPlayerCount || (a9.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), a9.a2o.a2s()), g1 = b6.pY.a15(a9.data.teamPlayerCount, 0), a9.data.numberTeams = g1) : (2 === a9.data
			.botDifficultyType && (a9.data.botDifficultyType = 0), 1 === a9.data.spawningType && (a9.data.spawningType = 0))
	}

	function aK2() {
		1 !== a9.data.gameMode && (a9.data.teamPlayerCount = null), aLY(), a9.data.canvas = null, n.o(5, 5)
	}

	function aLY() {
		b5.od.dU(), bf.r6.r7(156, b5.a34.xt())
	}

	function aLU() {
		a9.data.isReplay = 0, aLY(), a9.a2o.a3E(), aW.aCT(), a9.a2o.a3B(), a9.data.canvas = 2 === a9.data.mapType ? bO.v2 : null, a9.a2r(), a9.a2q = 1
	}

	function aLm() {
		aLW();
		for (var g = [aLb(), aLc(), aLd()], a7 = 3; a7 < 6; a7++) aK0.pK.removeChild(aK0.pL[a7].p3), aK0.pL[a7] = g[a7 - 3], aK0.pK.appendChild(aK0.pL[a7].p3);
		aK0.resize()
	}

	function aLb() {
		var aLn, aJZ = new p1;
		return aJZ.p4(L(226)), aLn = 0 === a9.data.gameMode ? [L(227), L(205)][a9.data.colorsType] : a9.data.numberTeams + " Team" + (1 === a9.data.numberTeams ? "" : "s"), aJZ.pA(aLn), aJZ.pF(new r9([new q(L(235), function() {
			n.o(21)
		}).button])), aJZ
	}

	function aLc() {
		var aJZ = new p1,
			g = (aJZ.p4(L(47)), [L(204) + ": " + aA.js[a9.data.botDifficultyValue], L(206), L(207), L(205)]);
		return aJZ.pA(g[a9.data.botDifficultyType]), aJZ.pF(new r9([new q(L(235), function() {
			n.o(25)
		}).button])), aJZ
	}

	function aLd() {
		var aJZ = new p1,
			g = (aJZ.p4("Spawning"), [L(227), L(237), L(205)]);
		return aJZ.pA(g[a9.data.spawningType]), aJZ.pF(new r9([new q(L(235), function() {
			n.o(24)
		}).button])), aJZ
	}
	this.show = function() {
		aJz.show(), this.resize(), aJz.tA.scrollTop = n.s.aEP[0]
	}, this.qw = function() {
		n.s.aEP[0] = aJz.tA.scrollTop, aJz.qw()
	}, this.resize = function() {
		aJz.resize(), aK0.resize()
	}, this.a0Y = function(et) {
		2 === et && aJz.tB[0].ph()
	}, aJz = new t4("🔧 " + L(232), [new q("⬅️ " + L(22), aK2), new q(L(233), aLU)]), aLW(), a9.data.canvas || (2 === a9.data.mapType ? a9.data.canvas = bO.v2 : 1 === a9.data.mapType ? a9.data.canvas = bO.aGt(bO.a3C(a9.data), 0).v2 : (a9.data
		.mapType = 0, a9.data.passableWater = a9.data.passableMountains = 1, a9.data.canvas = bO.aGt(bO.a3C(a9.data), a9.data.mapSeed).v2)), aK0 = new pH(aJz.tA, (function(pJ) {
		var aJZ = new p1,
			a1I = (aJZ.p4(L(234)), a9.data.canvas);
		a1I.style.width = "100%", aJZ.pF({
			e: a1I
		}), aJZ.pF(new r9([new q(L(235), function() {
			n.o(20)
		}).button])), pJ.push(aJZ)
	}(pJ = []), function(pJ) {
		var aJZ = new p1;
		aJZ.p4(L(208)), aJZ.pF(new qE({
			e0: -1,
			value: a9.data.playerCount
		}, 1, 0, function(e) {
			var playerCount = bH.ow(Math.floor(e.target.value), 1, 512);
			e.target.value = a9.data.playerCount = playerCount, 1 === a9.data.gameMode && (e = b6.pY.a15(a9.data.teamPlayerCount, 0), a9.a2o.a2s(), b6.pY.a15(a9.data.teamPlayerCount, 0) !== e) && aLm()
		})), pJ.push(aJZ)
	}(pJ), function(pJ) {
		var aJZ = new p1;
		aJZ.p4(L(236)), aJZ.pC(new sz({
			t3: ["Battle Royale", "Teams"],
			value: a9.data.gameMode
		}, function(e0) {
			a9.data.gameMode !== e0 && (a9.data.gameMode = e0, aLm())
		})), pJ.push(aJZ)
	}(pJ), pJ.push(aLb()), pJ.push(aLc()), pJ.push(aLd()), function(pJ) {
		var aJZ = new p1,
			g = (aJZ.p4(L(238)), [L(239), L(240), L(205)]);
		aJZ.pA(g[a9.data.playerNamesType]), aJZ.pF(new r9([new q(L(235), function() {
			n.o(23)
		}).button])), pJ.push(aJZ)
	}(pJ), function(pJ) {
		var aJZ = new p1,
			g = (aJZ.p4(L(201)), [L(203), L(204) + ": " + a9.data.aIncomeValue, L(205)]);
		aJZ.pA(g[a9.data.aIncomeType]), aJZ.pF(new r9([new q(L(235), function() {
			n.o(22)
		}).button])), pJ.push(aJZ)
	}(pJ), function(pJ) {
		var aJZ = new p1,
			g = (aJZ.p4(L(241)), [L(203), L(204) + ": " + a9.data.tIncomeValue, L(205)]);
		aJZ.pA(g[a9.data.tIncomeType]), aJZ.pF(new r9([new q(L(235), function() {
			n.o(26)
		}).button])), pJ.push(aJZ)
	}(pJ), function(pJ) {
		var aJZ = new p1,
			g = (aJZ.p4(L(242)), [L(203), L(204) + ": " + a9.data.iIncomeValue, L(205)]);
		aJZ.pA(g[a9.data.iIncomeType]), aJZ.pF(new r9([new q(L(235), function() {
			n.o(27)
		}).button])), pJ.push(aJZ)
	}(pJ), function(pJ) {
		var aJZ = new p1,
			g = (aJZ.p4(L(243)), [L(203), L(204) + ": " + a9.data.sResourcesValue, L(205)]);
		aJZ.pA(g[a9.data.sResourcesType]), aJZ.pF(new r9([new q(L(235), function() {
			n.o(28)
		}).button])), pJ.push(aJZ)
	}(pJ), function(pJ) {
		var aJZ = new p1;
		aJZ.p4(L(244)), aJZ.pF(new r9([new q(L(245), function() {
			n.r(), a9.a2o.a3F(), n.s.aEP[0] = 0, n.o(19)
		}).button])), aJZ.pF(new r9([new q(L(246), function() {
			bj.aEE()
		}).button])), aJZ.pF(new r9([new q(L(247), function() {
			return bj.aEG(), !0
		}).button])), pJ.push(aJZ)
	}(pJ), pJ))
}

function aJD() {
	var aJz, aK0, aK1, pJ;

	function aK2() {
		aK4(), 2 !== a9.data.iIncomeType && (a9.data.iIncomeData = null), n.aJH()[19] = null, n.zn()
	}

	function aK4() {
		2 === a9.data.iIncomeType && b6.pY.a1B(aK1.tX(), a9.data.iIncomeData, 255)
	}
	this.show = function() {
		aJz.show(), this.resize()
	}, this.qw = function() {
		aJz.qw()
	}, this.resize = function() {
		aJz.resize(), aK0.resize()
	}, this.a0Y = function(et) {
		2 === et && aJz.tB[0].ph()
	}, aJz = new t4(L(242), [new q("⬅️ " + L(22), aK2)]), aK0 = new pH(aJz.tA, (function(pJ) {
		var aJZ = new p1;
		aJZ.p4(L(202)), aJZ.pC(new sz({
			t3: [L(203), L(204), L(205)],
			value: a9.data.iIncomeType
		}, function(e0) {
			aK4(), 2 !== e0 || a9.data.iIncomeData || (a9.data.iIncomeData = new Uint8Array(a9.eV), a9.data.iIncomeData.fill(32)), a9.data.iIncomeType = e0, n.o(27)
		})), pJ.push(aJZ)
	}(pJ = []), function(pJ) {
		var aJZ;
		1 === a9.data.iIncomeType && ((aJZ = new p1).p4("Value"), aJZ.pF(new qE({
			e0: -1,
			value: a9.data.iIncomeValue
		}, 1, 0, function(e) {
			var value = bH.ow(Math.floor(e.target.value), 0, 255);
			e.target.value = a9.data.iIncomeValue = value
		})), pJ.push(aJZ))
	}(pJ), function(pJ) {
		var aJZ;
		2 === a9.data.iIncomeType && ((aJZ = new p1).p4("Data"), (aK1 = new tP(0, 1, 0, 1)).tW(b6.zC.a2X(a9.data.iIncomeData, 4)), aJZ.pF(aK1), pJ.push(aJZ))
	}(pJ), pJ))
}

function aIv() {
	var aLo, aLp, aKx, qD, aLq;
	this.aD5 = new rv, aKx = new q1([.45, .27], [.5, .5], 2 / 3), aLp = [new q("⚔️<br>" + L(248), function() {
			aLr(0)
		}, b7.n1), new q("🗡️<br>" + L(232), function() {
			aLr(1)
		}, b7.nG), new q("🔑<br>" + L(249), function() {
			aLr(2)
		}, b7.nW), new q("☰<br>" + L(250), function() {
			aLr(3)
		}, b7.ml), new q("", function() {
			n.o(12)
		}, b7.mU, !1),
		new q("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new q("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], qD = new qE(bf.dp.data[122]);
	for (var a7 = 0; a7 < aLp.length; a7++) aLp[a7].button.style.position = "absolute";

	function aLr(e0) {
		u.v.setState(10), aX.sA() || aX.aCv(), 0 === e0 ? n.s.aLs() : 1 === e0 ? (b5.aEZ.un(bf.dp.data[156].value, 1) || a9.a2o.a3F(), n.o(19)) : 2 === e0 ? 0 !== u.id || bf.dp.data[140].value ? n.o(8, n.rm, new rn(16)) : n.s.aLt(n.rm, 16) : 3 ===
			e0 && n.o(1)
	}
	qD.e.style.position = "absolute", qD.e.style.textAlign = "center", qD.e.placeholder = L(251), this.show = function() {
		aW.setState(0), u.v.setState(12), this.aD5.show(), aLp[4].pk(b6.color.a1P(bf.dp.data[121].value)), this.resize(), document.body.appendChild(qD.e);
		for (var a7 = 0; a7 < aLp.length; a7++) document.body.appendChild(aLp[a7].button);
		1 !== u.id || u.f1 < 5 || (aLq && bb.lo > aLq + 144e5 ? u.tq.setState(14) : aLq = bb.lo)
	}, this.qw = function() {
		this.aD5.qw(), document.body.removeChild(qD.e);
		for (var a7 = 0; a7 < aLp.length; a7++) document.body.removeChild(aLp[a7].button)
	}, this.resize = function() {
		this.aD5.resize(), aKx.resize();
		var gap = .5 * bY.gap,
			se = 10 / 99 * .84 * aKx.a1,
			aLw = .16 * aKx.j7,
			a72 = .19 * aKx.a1,
			ef = aKx.ef + a72,
			se = aKx.eh + se + 3 * gap,
			a1 = .5 * (aKx.a1 - gap) - a72,
			a72 = aKx.a1 - 2 * a72 - aLw - gap,
			a72 = (b6.pO.s8(qD.e, ef, se, a72, aLw), b6.pO.s8(aLp[4].button, ef + a72 + gap, se, aLw, aLw), .5 * (aKx.eh + aKx.j7 - (se += aLw + gap) - gap));
		b6.pO.s8(aLp[0].button, ef, se, a1, a72), b6.pO.s8(aLp[1].button, ef + a1 + gap, se, a1, a72), b6.pO.s8(aLp[2].button, ef, se + a72 + gap, a1, a72), b6.pO.s8(aLp[3].button, ef + a1 + gap, se + a72 + gap, a1, a72);
		b6.pO.s8(aLp[5].button, ef, se + a72 * 2 + gap * 2, a1 * 2 + gap, a72 / 3);
		b6.pO.s8(aLp[6].button, ef, se + a72 * 2.33 + gap * 3, a1 * 2 + gap, a72 / 3);
		for (var a7 = 0; a7 < aLp.length; a7++) aLp[a7].button.style.font = b6.pO.rP(0, b6.pO.a1f(.065 * aKx.j7)), b6.pO.pa(aLp[a7].button, 5);
		qD.e.style.font = b6.pO.rP(0, b6.pO.a1f(.08 * aKx.j7)), b6.pO.pa(qD.e, 5)
	}, this.tJ = function() {
		if (aW.aCX(), aP.tJ(), aK.tJ(), bU.tJ(), aX.sA()) {
			if (__fx.settings.displayWinCounter) {
				const size = Math.floor(aKx.a1 * 0.03);
				tK.font = b6.pO.rP(1, size);
				tK.fillStyle = "#ffffff";
				const text = "Win count: " + __fx.wins.count;
				const textLength = tK.measureText(text).width;
				tK.textAlign = "left";
				tK.textBaseline = "middle";
				tK.fillText(text, tK.canvas.width - textLength - size / 2, size);
			};
			tK.imageSmoothingEnabled = !1;
			var et = aX.aCa("territorial.io"),
				mA = .84 * aKx.a1 / et.width;
			tK.setTransform(mA, 0, 0, mA, aKx.ef + .08 * aKx.a1, aKx.eh), aLo = aLo || b6.a0m.a2A(et, b6.a0m.a2G, [0, 0, 0]);
			for (var ef = -1; ef <= 1; ef += 2)
				for (var eh = -1; eh <= 1; eh += 2) tK.drawImage(aLo, ef, eh);
			tK.drawImage(et, 0, 0), tK.imageSmoothingEnabled = !0;
			var hQ = aX.aCa("logo"),
				aLy = .6666 * mA * et.height / hQ.height,
				mB = .5 * at.a1,
				mC = aKx.eh + .5 * mA * et.height - .5 * aLy * hQ.height;
			tK.setTransform(aLy, 0, 0, aLy, mB - .6 * mA * et.width, mC), tK.drawImage(hQ, 0, 0), tK.setTransform(aLy, 0, 0, aLy, mB + .6 * mA * et.width - aLy * hQ.width, mC), tK.drawImage(hQ, 0, 0), tK.setTransform(1, 0, 0, 1, 0, 0), tK
				.imageSmoothingEnabled = !0
		}
	}
}

function aJ2() {
	var aJI, aLz, aM0, t5;

	function s1(a7) {
		n.o(8, n.rm, new rn(21, {
			s2: a7,
			s3: 0,
			s4: 10
		}))
	}
	this.show = function() {
		aJI.show(), this.resize()
	}, this.qw = function() {
		aJI.qw()
	}, this.resize = function() {
		aJI.resize(), aLz.resize()
	}, this.a0Y = function(et) {
		2 === et && aJI.tB[0].ph()
	}, aM0 = [new q(L(252), function() {
		s1(1)
	}, 0, 0, 1), new q(L(253), function() {
		s1(2)
	}, 0, 0, 1), new q(L(254), function() {
		s1(0)
	}, 0, 0, 1), new q(L(255), function() {
		s1(3)
	}, 0, 0, 1)], t5 = [new q("⬅️ " + L(22), function() {
		n.zn()
	})], aJI = new t4(L(256), t5), aLz = new py(aM0, aJI.tA)
}

function aAK(title, pB, aM1) {
	var aJI, aLB;
	this.show = function() {
		aJI.show(), this.resize()
	}, this.qw = function() {
		aJI.qw()
	}, this.resize = function() {
		aJI.resize(), aLB.resize()
	}, this.a0Y = function(et) {
		2 === et && aJI.tB[0].ph()
	}, aM1 = aM1 || [new q("⬅️ " + L(22), function() {
		n.zn()
	}, b7.nC)], aJI = new t4(title, aM1), aLB = new r8(aJI.tA, pB), b6.pO.textAlign(aJI.tA.style, 1)
}

function aLS(data) {
	var aJI, aM2, et, re;

	function aM3(hU) {
		var eY = data.data.length;
		if (eY) {
			for (var s3, max = min = parseInt(data.data[0][0]), a7 = 1; a7 < eY; a7++) var aMA = parseInt(data.data[a7][0]),
				min = Math.min(aMA, min),
				max = Math.max(aMA, max);
			s3 = hU < 0 ? min + hU : max + 1, n.o(8, n.aD4().aIq, new rn(21, {
				s2: data.s2,
				s3: s3,
				s4: s3 + Math.abs(hU)
			}))
		}
	}
	this.show = function() {
			aJI.show(), this.resize()
		}, this.qw = function() {
			aJI.qw()
		}, this.resize = function() {
			aJI.resize(), aM2.resize()
		}, this.a0Y = function(et) {
			2 === et && aJI.tB[0].ph()
		}, et = data.data.length ? 0 : 1, et = [new q("⬅️ " + L(22), function() {
			n.zn()
		}), new q(L(257), function() {
			aM3(-10)
		}, et, 0, 1), new q(L(258), function() {
			aM3(10)
		}, et, 0, 1), new q(L(210), function() {
			n.o(11, 10, new aM4({
				s2: data.s2
			}))
		})], re = [L(259), L(260), L(261), L(262), L(263), L(264), L(265), L(266), L(267)], aJI = new t4(re[data.s2], et),
		function() {
			var a7, eb = {
					rY: []
				},
				rY = eb.rY,
				aM6 = data.data,
				eY = aM6.length,
				mA = [.1, .001, .001, 1, 100, 1, .01, 1, 100][data.s2],
				a2K = [1, 3, 3, 0, 0, 0, 2, 0, 0][data.s2],
				re = [
					[L(268), L(269) + " ↗", L(270)],
					[L(268), L(271), L(272), L(273) + " ↗"],
					[L(268), L(269) + " ↗", L(272)],
					[L(268), L(269) + " ↗", L(272)],
					[L(274), L(275), L(276) + " ↗", L(277) + " ↗", L(104)],
					[L(274), L(275), L(278) + " ↗", L(279) + " ↗", L(280)],
					[L(274), L(275), L(281) + " ↗", L(282) + " ↗", L(283)],
					[L(274), L(275), L(278) + " ↗", L(279) + " ↗", L(284)],
					[L(274), L(275), L(276) + " ↗", L(277) + " ↗", L(104)]
				];
			if (eb.re = re[data.s2], eb.ri = [
					[25, 40, 35],
					[15, 25, 25, 35],
					[25, 40, 35],
					[25, 40, 35],
					[12, 16, 30, 30, 12],
					[12, 16, 30, 30, 12],
					[12, 16, 30, 30, 12],
					[12, 16, 30, 30, 12],
					[12, 16, 30, 30, 12]
				][data.s2], 0 === data.s2)
				for (a7 = 0; a7 < eY; a7++) rY.push([{
					f0: aM6[a7][0] + 1 + ".",
					dk: 0
				}, {
					f0: aM6[a7][1],
					dk: 1,
					qm: aM6[a7][4],
					rl: aM6[a7][3]
				}, {
					f0: (mA * aM6[a7][2]).toFixed(a2K),
					dk: 0
				}]);
			else if (1 === data.s2)
				for (a7 = 0; a7 < eY; a7++) rY.push([{
					f0: aM6[a7][0] + 1 + ".",
					dk: 0
				}, {
					f0: aM6[a7][1],
					dk: 0
				}, {
					f0: (mA * aM6[a7][2]).toFixed(a2K),
					dk: 0
				}, {
					f0: aM6[a7][3],
					dk: 1,
					qm: aM6[a7][5],
					rl: aM6[a7][4]
				}]);
			else if (2 === data.s2 || 3 === data.s2)
				for (a7 = 0; a7 < eY; a7++) rY.push([{
					f0: aM6[a7][0] + 1 + ".",
					dk: 0
				}, {
					f0: aM6[a7][1],
					dk: 1,
					qm: aM6[a7][4],
					rl: aM6[a7][3]
				}, {
					f0: (mA * aM6[a7][2]).toFixed(a2K),
					dk: 0
				}]);
			else if (4 === data.s2 || 5 === data.s2 || 6 === data.s2 || 7 === data.s2 || 8 === data.s2)
				for (a7 = 0; a7 < eY; a7++) {
					var aM9 = aM6[a7][5];
					4 === data.s2 || 8 === data.s2 ? "100%" === (aM9 = (aM9 % 64 * 100 / (aM9 >> 6)).toFixed(0) + "%") && (4 === data.s2 ? aM9 += " (" + L(285) + ")" : aM9 += " (" + L(286) + ")") : 5 === data.s2 ? 32768 <= aM9 && (aM9 = -(aM9 -
						32768)) : aM9 = (mA * aM9).toFixed(a2K), rY.push([{
						f0: "" + aM6[a7][0],
						dk: 0
					}, {
						f0: "" + aM6[a7][6],
						dk: 0
					}, {
						f0: aM6[a7][7],
						dk: 1,
						qm: aM6[a7][1],
						rl: aM6[a7][2]
					}, {
						f0: aM6[a7][8],
						dk: 1,
						qm: aM6[a7][3],
						rl: aM6[a7][4]
					}, {
						f0: "" + aM9,
						dk: 0
					}])
				}
			aM2 = new rX(aJI.tA, eb)
		}()
}

function aM4(a2C) {
	var aJI, aJJ, pJ;
	this.show = function() {
		aJI.show(), this.resize()
	}, this.qw = function() {
		aJI.qw()
	}, this.resize = function() {
		aJI.resize(), aJJ.resize()
	}, this.a0Y = function(et) {
		2 === et && aJI.tB[0].ph()
	}, aJI = new t4(L(287), [new q("⬅️ " + L(22), function() {
		n.aJG(10)
	})]), aJJ = new pH(aJI.tA, ((pJ = []).push(function() {
		var aJf, aJZ = new p1,
			aKv = new qE(bf.dp.data[132], 1, function() {
				aJf.button.click()
			}),
			aKw = new qE(bf.dp.data[131], 1, function() {
				aKv.e.focus()
			});
		aJZ.p4(L(215)), aJZ.pF(aKw), aKw.e.style.marginBottom = "0.8em", aJZ.p4(L(216)), aJZ.pF(aKv);
		return aJf = new q(L(214), function() {
			s3 = Math.floor(aKw.e.value), s4 = Math.floor(aKv.e.value);
			var s4, s3 = {
				a13: Math.min(s3, s4),
				aIR: Math.max(s3, s4)
			};
			n.o(8, n.aBK(10).aIq, new rn(21, {
				s2: a2C.s2,
				s3: s3.a13,
				s4: s3.aIR
			}))
		}, 0, 0, 1), aJZ.pF(new r9([aJf.button])), aJZ
	}()), pJ.push(function() {
		var aJf, aJZ = new p1,
			aKv = new qE(bf.dp.data[134], 1, function() {
				aJf.button.click()
			}),
			aKw = new qE(bf.dp.data[133], 0, function() {
				aKv.e.focus()
			});
		return aJZ.p4(1 === a2C.s2 ? L(288) : L(289)), aJZ.pF(aKw), aKw.e.style.marginBottom = "0.8em", aJZ.p4(L(290)), aJZ.pF(aKv), aJf = new q(L(214), function() {
			var aLK = aKw.e.value.slice(0, 20),
				aLL = Math.abs(Math.floor(aKv.e.value));
			n.o(8, n.aBK(10).aIq, new rn(22, {
				s2: a2C.s2,
				aLK: aLK,
				aLL: aLL
			}))
		}, 0, 0, 1), aJZ.pF(new r9([aJf.button])), aJZ
	}()), pJ.push(function() {
		var aJf, aJZ = new p1,
			aKv = new qE(bf.dp.data[152], 1, function() {
				aJf.button.click()
			}),
			aKw = new qE(bf.dp.data[151], 0, function() {
				aKv.e.focus()
			});
		return aJZ.p4(L(291)), aJZ.pF(aKw), aKw.e.style.marginBottom = "0.8em", aJZ.p4(L(290)), aJZ.pF(aKv), aJf = new q(L(214), function() {
			var aLK = aKw.e.value.slice(0, 5),
				aLL = Math.abs(Math.floor(aKv.e.value));
			n.o(8, n.aBK(10).aIq, new rn(28, {
				s2: a2C.s2,
				aLK: aLK,
				aLL: aLL
			}))
		}, 0, 0, 1), aJZ.pF(new r9([aJf.button])), aJZ
	}()), pJ))
}

function aJF() {
	var aME, sD, aMH, sC, sF, aMF = [new Array(4), [], new Array(2), new Array(2)],
		aMG = new Array(4),
		aMI = [L(46), L(292), L(293), L(294)];

	function aMM() {
		var a58 = aME.sQ.qD.e.value.slice(0, 127);
		return a58.length < 1 || (aME.sQ.qD.e.value = "", aw.aBn.aBo(3, a58)), 1
	}

	function aML(aMO) {
		bk.s.qT[3] = 1 - bk.s.qT[3], aMN(3, 1, bk.s.qT[3]), aMO && aw.aBn.aBo(4)
	}

	function aMJ(er, es) {
		bk.s.qT[er] !== es && (0 === er && bk.s.qT[3] && aML(0), aMN(er, bk.s.qT[er], 0), aMN(er, es, 1), bk.s.qT[er] = es, 0 === er ? (aw.aBn.aBo(2, es), bk.s.qT[2] ? (aME.sR.lI(), aME.sQ.qQ(1)) : aME.sQ.qQ(0), n.aD4().aBN(), n.aD4().aBM()) : 2 ===
			er && (0 === es ? (aw.aBn.aBo(0), aME.sQ.lI(), aME.sZ()) : (aw.aBn.aBo(1), aME.sR.lI(), aME.sa())))
	}

	function aMN(er, es, color) {
		aME.sT[er].pz[es].pk(color ? b7.mx : b7.nc)
	}

	function aMQ(aAk) {
		return aAk < 7 ? aAk + 2 + " " + L(301) : 7 === aAk || 10 === aAk ? L(292) + " (Full-Sending: " + L(7 === aAk ? 302 : 303) + ")" : 8 === aAk ? "1v1" : L(304)
	}

	function aMR(f0) {
		var a5C = bH.dl(f0, 60),
			f0 = f0 % 60;
		return (a5C < 10 ? "0" : "") + a5C + ":" + (f0 < 10 ? "0" : "") + f0
	}
	this.aBL = function() {
		aME.sR.lI()
	}, this.aBN = function() {
		var aMP = bk.s.qT[0],
			aMP = bk.s.qV[aMP];
		bO.a3(aMP.eE, aMP.mapSeed), sD.pz[0].button.textContent = L(234) + ": " + bO.us.ut[aMP.eE].name, sD.pz[1].button.textContent = L(236, 0, "Mode") + ": " + aMQ(aMP.aAk), sD.pz[2].button.textContent = L(298) + ": " + bO.us.ut[aMP.aBp].name,
			sD.pz[3].button.textContent = L(299, 0, "Next Mode") + ": " + aMQ(aMP.aBq), sD.pz[4].button.textContent = L(300) + ": " + aMR(aMP.aBP), sD.resize()
	}, this.aBM = function() {
		var aMP = bk.s.qT[0],
			qU = bk.s.qV[aMP];
		aME.sX(qU.sY);
		for (var a7 = 0; a7 < bk.sk.sl.length; a7++) aMF[0][a7].qP.textContent = "" + bk.sk.sl[a7].length;
		var sk = bk.sk.sl[aMP],
			aMS = sk.length,
			aMT = bk.sk.sm[aMP];
		aMF[2][1].qP.textContent = "" + aMS, aMF[3][1].qP.textContent = "" + aMT, sD.pz[4].button.textContent = L(300) + ": " + aMR(qU.aBP);
		for (a7 = 0; a7 < 4; a7++) {
			var aMU = bk.s.qV[a7];
			aMG[a7] ? 0 === aMU.sY && (aMG[a7].qP.textContent = bO.us.ut[aMU.eE].name) : aMG[a7] = new qO(bO.us.ut[aMU.eE].name, sC.pz[a7].button, 1, 1), b6.zC.startsWith(aMI[a7], "🏆 ") ? aMU.aAq || (aMI[a7] = aMI[a7].substring(3), sC.pz[a7]
				.button.textContent = aMI[a7], sC.pz[a7].button.appendChild(aMF[0][a7].qP), sC.pz[a7].button.appendChild(aMG[a7].qP)) : aMU.aAq && (aMI[a7] = "🏆 " + aMI[a7], sC.pz[a7].button.textContent = aMI[a7], sC.pz[a7].button
				.appendChild(aMF[0][a7].qP), sC.pz[a7].button.appendChild(aMG[a7].qP))
		}
		var qU = "",
			aMW = "";
		0 === aMP && (qU = bk.qb.aB6(sk, 0, aMS), aMW = bk.qb.aB6(sk, 0, aMT)), aMH[0].qP.textContent = qU, aMH[1].qP.textContent = aMW, sD.pz[5].button.textContent = L(208) + " (MP): " + bk.s.aBD[0], sD.pz[6].button.textContent = L(208) +
			" (SP): " + bk.s.aBD[1]
	}, this.aBR = function() {
		aME.sQ.lI()
	}, this.show = function() {
		aME.show(), this.resize()
	}, this.qw = function() {
		aME.qw(), bk.st.qw(), bk.qt.qw()
	}, this.resize = function() {
		aME.resize(1 - bk.s.qT[2])
	}, this.a0Y = function(et) {
		2 === et && aME.sT[3].pz[0].ph()
	}, sC = new rC([new q(aMI[0], function() {
		return aMJ(0, 0), 2
	}), new q(aMI[1], function() {
		return aMJ(0, 1), 2
	}), new q(aMI[2], function() {
		return aMJ(0, 2), 2
	}), new q(aMI[3], function() {
		return aMJ(0, 3), 2
	})], b7.nc), sD = new rC([new q("", 0, 2), new q("", 0, 2), new q("", 0, 2), new q("", 0, 2), new q("", 0, 2), new q("", 0, 2), new q("", 0, 2)], b7.nd, 1);
	var aMK = new rC([new q(L(295), function() {
		return aMJ(2, 0), 2
	}), new q(L(100), function() {
		return aMJ(2, 1), 2
	})], b7.nc);
	sF = new rC([new q(L(296), (__fx.customLobby.setLeaveFunction(() => {
			n.r(), bk.zq(), aw.s.zp(3240), __fx.customLobby.setActive(false), n.o(5, 5)
		}),
		function() {
			n.r(), bk.zq(), aw.s.zp(3240), __fx.customLobby.setActive(false), n.o(5, 5)
		})), new q(L(297), function() {
		return aML(1), 2
	})], b7.nc), aME = new sB(sC, sD, aMK, sF, aMM, bk.st.aBX);
	for (var a7 = 0; a7 < 4; a7++) aMF[0][a7] = new qO("0", sC.pz[a7].button);
	aMF[2][1] = new qO("0", aMK.pz[1].button), aMF[3][1] = new qO("0", sF.pz[1].button), aMH = [new qO("", aMK.pz[1].button, 1, 1), new qO("", sF.pz[1].button, 1, 1)], aMN(0, bk.s.qT[0], 1), aMN(2, bk.s.qT[2], 1)
}

function aIw() {
	var aJI, aJJ, pJ;
	this.show = function() {
		aJI.show(), this.resize()
	}, this.qw = function() {
		aJI.qw()
	}, this.resize = function() {
		aJI.resize(), aJJ.resize()
	}, this.a0Y = function(et) {
		2 === et && aJI.tB[0].ph()
	}, aJI = new t4(L(305), [new q("⬅️ " + L(22), function() {
		n.o(7, n.aBK(7).aIq)
	}), new q(L(168), function() {
		bf.r6.r7(105, bC.rp.uc(aJJ.pL[0].p2[0].e.value, 5)), bf.r6.r7(106, bC.rp.uc(aJJ.pL[1].p2[0].e.value, 8)), n.o(8, n.aBK(7).aIq, new rn(18))
	})]), aJJ = new pH(aJI.tA, ((pJ = []).push(function() {
		var aJZ = new p1;
		return aJZ.p4(L(149)), aJZ.pF(new qE({
			value: "",
			e0: -1
		})), aJZ
	}()), pJ.push(function() {
		var aJZ = new p1,
			aJi = (aJZ.p4(L(151)), new qE({
				value: "",
				e0: -1
			}));
		return aJi.e.type = "password", aJZ.pF(aJi), aJZ.pF(new r9([new q(L(152), function(e) {
			return e.textContent === L(152) ? (e.textContent = L(153), aJi.e.type = "text") : (e.textContent = L(152), aJi.e.type = "password"), !0
		}).button])), aJZ
	}()), pJ))
}

function aJ3() {
	var aJI, aLz, aM0, t5;

	function s1(a7) {
		n.o(8, n.rm, new rn(21, {
			s2: a7,
			s3: 0,
			s4: 10
		}))
	}
	this.show = function() {
		aJI.show(), this.resize()
	}, this.qw = function() {
		aJI.qw()
	}, this.resize = function() {
		aJI.resize(), aLz.resize()
	}, this.a0Y = function(et) {
		2 === et && aJI.tB[0].ph()
	}, aM0 = [new q(L(264), function() {
		s1(5)
	}, 0, 0, 1), new q(L(265), function() {
		s1(6)
	}, 0, 0, 1), new q(L(266), function() {
		s1(7)
	}, 0, 0, 1), new q(L(267), function() {
		s1(8)
	}, 0, 0, 1)], t5 = [new q("⬅️ " + L(22), function() {
		n.zn()
	})], aJI = new t4(L(306), t5), aLz = new py(aM0, aJI.tA)
}

function aIm() {
	this.dp = {}, this.s5 = ["", "", ""], this.aJ1 = null, this.aIy = null, this.rV = 0, this.aEP = [0], this.t = function() {
			n.o(5, 5)
		}, this.aLs = function() {
			n.r(), aV.aCD(0), aV.dU()
		},
		__fx.customLobby.setJoinFunction(() => {
			n.r();
			aV.aCD(0);
			aV.dU();
		}), this.aA1 = function() {
			n.o(0 === aW.zd() ? 5 : 0)
		}, this.aKu = function() {
			if (1 === bf.dp.data[130].value) n.o(8, n.aD4().aIq, new rn(24, {
				aKS: bf.dp.data[125].value,
				s3: bf.dp.data[128].value,
				s4: bf.dp.data[129].value
			}));
			else {
				for (var g = (g = bf.dp.data[126].value.split(",")).slice(0, 10), a7 = 0; a7 < g.length; a7++) g[a7] = g[a7].trim().slice(0, 7).toUpperCase();
				1 === g.length && 0 === g[0].length && (g = []), n.o(8, n.aD4().aIq, new rn(23, {
					aKS: bf.dp.data[125].value,
					z8: g
				}))
			}
		}, this.aLt = function(aIq, target) {
			n.o(4, aIq, new p("Data Usage Information",
				"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: <a href='" + bG.aMY +
				"' target='_blank'>" + bG.aMY + "</a>", !1, [new q("⬅️ " + L(22), function() {
					n.o(aIq)
				}), new q("✅ Accept", function() {
					bf.r6.r7(140, 1), 0 === target ? n.o(2, aIq) : n.o(8, aIq, new rn(target))
				})]))
		}, this.aMZ = function() {
			for (var a7 = 0; a7 < 3; a7++) this.s5[a7] = bC.uT.uX(bD.oP(5));
			this.s5[1] = "[" + this.s5[1] + "]", 5 === n.rm && n.aD4().aD5.r7(this.s5)
		}
}

function aJ6() {
	var aJz, aK0, aMa, pJ;

	function aK2() {
		b2.zq(), n.aJH()[19] = null, n.zn()
	}

	function aMh() {
		aMk(), aMi()
	}

	function aMk() {
		aMa.p3.lastChild && aMa.p3.removeChild(aMa.p3.lastChild)
	}

	function aMi() {
		var aMl = bO.a3C(a9.data);
		a9.data.canvas = bO.aGt(aMl, a9.data.mapSeed).v2, aMj()
	}

	function aMj() {
		var a1I = a9.data.canvas;
		a1I.style.width = "100%", aMa.p3.appendChild(a1I)
	}
	this.aE9 = function(a1I) {
		a9.data.canvas && aMk(), a9.data.canvas = a1I, aMj()
	}, this.show = function() {
		aJz.show(), this.resize()
	}, this.qw = function() {
		aJz.qw()
	}, this.resize = function() {
		aJz.resize(), aK0.resize()
	}, this.a0Y = function(et) {
		2 === et && aJz.tB[0].ph()
	}, aJz = new t4(L(234), [new q("⬅️ " + L(22), aK2)]), 2 === a9.data.mapType && b2.dU(), aK0 = new pH(aJz.tA, (function(pJ) {
		var aJZ = new p1;
		aJZ.p4(L(202)), aJZ.pC(new sz({
			t3: [L(307), L(308), L(309)],
			value: a9.data.mapType
		}, function(e0) {
			2 === (a9.data.mapType = e0) ? (b2.dU(), a9.data.canvas = null) : (a9.data.passableWater = a9.data.passableMountains = 1, b2.zq()), n.o(20)
		})), 2 <= a9.data.mapType && (aJZ.pF(new rJ), aJZ.pF(new r3({
			value: a9.data.passableWater
		}, L(310), function(value) {
			a9.data.passableWater = value
		})), aJZ.pF(new r3({
			value: a9.data.passableMountains
		}, L(311), function(value) {
			a9.data.passableMountains = value
		})));
		pJ.push(aJZ)
	}(pJ = []), function(pJ) {
		if (0 === a9.data.mapType) {
			for (var aJZ = new p1, t3 = (aJZ.p4(L(234)), []), a7 = 0; a7 < bO.us.aHn.length; a7++) t3.push(bO.us.ut[bO.us.aHn[a7]].name);
			aJZ.pC(new sz({
				t3: t3,
				value: a9.data.mapProceduralIndex
			}, function(e0) {
				a9.data.mapProceduralIndex = e0, aMh()
			})), pJ.push(aJZ)
		}
	}(pJ), function(pJ) {
		if (1 === a9.data.mapType) {
			for (var aJZ = new p1, t3 = (aJZ.p4(L(234)), []), a7 = 0; a7 < bO.us.aHo.length; a7++) t3.push(bO.us.ut[bO.us.aHo[a7]].name);
			aJZ.pC(new sz({
				t3: t3,
				value: a9.data.mapRealisticIndex
			}, function(e0) {
				a9.data.mapRealisticIndex = e0, aMh()
			})), pJ.push(aJZ)
		}
	}(pJ), function(pJ) {
		var aJZ;
		2 === a9.data.mapType && ((aJZ = new p1).p4(L(234)), aJZ.pF(new r9([new q(L(312), function() {
			return b2.aE2(), !0
		}).button])), pJ.push(aJZ))
	}(pJ), function(pJ) {
		(aMa = new p1).p4(L(313)), 2 !== a9.data.mapType ? aMi() : a9.data.canvas && aMj();
		pJ.push(aMa)
	}(pJ), function(pJ) {
		var aJZ, qD, aJf;
		0 === a9.data.mapType && ((aJZ = new p1).p4("Seed"), qD = new qE({
			e0: -1,
			value: a9.data.mapSeed
		}, 1, 0, function(e) {
			e = Math.abs(Math.floor(e.target.value)) % 16384;
			a9.data.mapSeed !== e && (a9.data.mapSeed = e, aMh())
		}), aJf = new q(L(227), function(e) {
			var aGo = Math.floor(16384 * Math.random());
			if (a9.data.mapSeed !== aGo) return qD.e.value = a9.data.mapSeed = aGo, aMh(), !0
		}), aJZ.pF(qD), aJZ.pF(new r9([aJf.button])), pJ.push(aJZ))
	}(pJ), function(pJ) {
		var aJZ, qD;
		2 === a9.data.mapType && ((aJZ = new p1).p4(L(314)), qD = new qE({
			e0: -1,
			value: a9.data.mapName
		}, 0, 0, function(e) {
			a9.data.mapName = e.target.value = e.target.value.slice(0, 20)
		}), aJZ.pF(qD), pJ.push(aJZ))
	}(pJ), pJ))
}

function p(title, pB, aMm, aM1) {
	var aJI, aLB;
	this.show = function() {
		aJI.show(), this.resize()
	}, this.qw = function() {
		aJI.qw()
	}, this.resize = function() {
		aJI.resize(), aLB.resize()
	}, this.a0Y = function(et) {
		2 === et && aJI.tB[0].ph()
	}, aM1 = aM1 || [new q("⬅️ " + L(22), function() {
		n.zn()
	})], aJI = new t4(title, aM1), aLB = new r8(aJI.tA, pB), aMm && b6.pO.textAlign(aJI.tA.style, 1)
}

function aJ9() {
	var aJz, aK0, aK1, pJ;

	function aK2() {
		aK4(), 2 === a9.data.playerNamesType && 1 === b6.pY.a0z(a9.data.playerNamesData).length && (a9.data.playerNamesType = 0), 2 !== a9.data.playerNamesType && (a9.data.playerNamesData = null), n.aJH()[19] = null, n.zn()
	}

	function aK4() {
		2 === a9.data.playerNamesType && b6.pY.a1D(aK1.tX(), a9.data.playerNamesData, 20)
	}
	this.show = function() {
		aJz.show(), this.resize()
	}, this.qw = function() {
		aJz.qw()
	}, this.resize = function() {
		aJz.resize(), aK0.resize()
	}, this.a0Y = function(et) {
		2 === et && aJz.tB[0].ph()
	}, aJz = new t4(L(238), [new q("⬅️ " + L(22), aK2)]), aK0 = new pH(aJz.tA, (function(pJ) {
		var aJZ = new p1;
		aJZ.p4(L(202)), aJZ.pC(new sz({
			t3: [L(239), L(240), L(205)],
			value: a9.data.playerNamesType
		}, function(e0) {
			aK4(), a9.data.playerNamesType = e0, n.o(23)
		})), aJZ.pF(new rJ), aJZ.pF(new r3({
			value: a9.data.selectableName
		}, L(315), function(value) {
			a9.data.selectableName = value
		})), pJ.push(aJZ)
	}(pJ = []), function(pJ) {
		var aJZ;
		2 === a9.data.playerNamesType && ((aJZ = new p1).p4("Data"), aK1 = new tP(0, 1, 0, 1), a9.data.playerNamesData && a9.data.playerNamesData.length === a9.eV || (a9.data.playerNamesData = new Array(a9.eV), a9.data.playerNamesData
			.fill("")), aK1.tW(b6.zC.a2X(a9.data.playerNamesData, 1, '"')), aJZ.pF(aK1), pJ.push(aJZ))
	}(pJ), pJ))
}

function aIu() {
	var aJz, tU;

	function aMn() {
		n.r();
		var p5 = b5.aMr(tU.tX());
		(a9.yP && 0 < p5.length && p5 === b5.od.a33 || b5.aEZ.un(p5)) && b5.aMs()
	}
	this.show = function(aMo) {
		this.aMp(aMo), aJz.show(), this.resize()
	}, this.aMp = function(aMo) {
		0 === a9.yP ? aMo ? tU.tW(aMo) : b5.od.a33.length && tU.tW(b5.od.a33) : (a9.gi || (b5.od.a33 = b5.a34.xt()), tU.tW(b5.aMq(b5.od.a33)))
	}, this.qw = function() {
		aJz.qw()
	}, this.resize = function() {
		aJz.resize(), tU.resize()
	}, this.a0Y = function(et) {
		2 === et ? aJz.tB[0].ph() : aMn()
	}, aJz = new t4(L(316), [new q("⬅️ " + L(22), function() {
		n.aJG(1)
	}), new q(L(317), function() {
		tU.tY()
	}), new q(L(318), function() {
		tU.tZ()
	}), new q(L(319), function() {
		tU.clear()
	}), new q(L(320), function() {
		aMn()
	})]), tU = new tP(L(321)), aJz.tA.appendChild(tU.e)
}

function aIt() {
	var aJI, aJJ, pJ, a9x, aJZ;

	function aMt() {
		var lo;
		a9x !== bf.dp.data[12].value ? (b3.dU(), b3.a9w(), lo = bb.lo, n.o(4, 1, new p(L(324), L(325), !1, [new q("⬅️ " + L(22), function() {
			n.o(1)
		}), new q("🔄 Reload", function() {
			bb.lo < lo + 1500 || u.v.w()
		}, b7.mv)]))) : n.o(1)
	}
	this.show = function() {
			a9x = bf.dp.data[12].value, aJI.show(), this.resize()
		}, this.qw = function() {
			aJI.qw()
		}, this.resize = function() {
			aJI.resize(), aJJ.resize()
		}, this.a0Y = function(et) {
			2 === et && aJI.tB[0].ph()
		}, aJI = new t4(L(322), [new q("⬅️ " + L(22), aMt), new q(L(323), function() {
			n.r(), bf.r6.uA(), n.o(2)
		})]), pJ = [], (aJZ = new p1).p4(L(326)), aJZ.p6(L(327)), pJ.push(aJZ),
		function(pJ) {
			var aJZ = new p1,
				g = (aJZ.p4(L(345)), b3.data.aA2());
			aJZ.pC(new sz({
				t3: g,
				value: b3.data.aA5(g)
			}, function(e0) {
				return bf.r6.r7(12, g[e0].split(":")[0]), !0
			})), pJ.push(aJZ)
		}(pJ),
		function(pJ) {
			var aJZ = new p1,
				aMw = (aJZ.p4(L(343)), []);
			aJZ.pF(new r9([new q(L(344), function(e) {
				bT.aMx();
				for (var a7 = 0; a7 < aMw.length; a7++) aMw[a7].e.value = bT.aMy[a7];
				return b6.pO.a1l(e), !0
			}).button]));
			for (var a7 = 0; a7 < bT.aMz.length; a7++) {
				aJZ.p6(bT.aMz[a7]);
				for (var er = 0; er < 2; er++) {
					var e0 = 2 * a7 + er,
						qD = new qE({
							value: bT.aMy[e0],
							e0: -1
						});
					qD.e.aN0 = e0, aMw.push(qD), qD.e.addEventListener("keydown", function(e) {
						e.preventDefault();
						var code = e.code;
						e.target.value = code, bT.aN1(e.target.aN0, code)
					}), er && (qD.e.style.marginLeft = "4%"), qD.e.style.width = "48%", aJZ.pF(qD)
				}
			}
			pJ.push(aJZ)
		}(pJ), (aJZ = new p1).p4(L(328)), bf.dp.data[1].t3 = [L(329), L(330), L(331), L(332)], aJZ.pC(new sz(bf.dp.data[1])), pJ.push(aJZ), (aJZ = new p1).p4(L(333)), bf.dp.data[9].t3 = [L(330), L(334), L(335)], aJZ.pC(new sz(bf.dp.data[9])), pJ
		.push(aJZ), (aJZ = new p1).p4(L(336)), bf.dp.data[11].t3 = [L(337), L(9), L(338)], aJZ.pC(new sz(bf.dp.data[11])), pJ.push(aJZ), (aJZ = new p1).p4(L(339)), aJZ.pF(new r3(bf.dp.data[2])), pJ.push(aJZ), (aJZ = new p1).p4(L(340)), aJZ.pF(new r3(
			bf.dp.data[7])), pJ.push(aJZ), (aJZ = new p1).p4(L(341)), aJZ.pF(new r3(bf.dp.data[8])), pJ.push(aJZ), (aJZ = new p1).p4(L(342)), aJZ.pF(new qE(bf.dp.data[5])), pJ.push(aJZ), aJJ = new pH(aJI.tA, pJ)
}

function aJA() {
	var aJz, aK0, aK1, pJ;

	function aK2() {
		aK4(), 2 !== a9.data.spawningType || b6.pY.a0z(a9.data.spawningData) || (a9.data.spawningType = 0), 2 !== a9.data.spawningType && (a9.data.spawningData = null), n.aJH()[19] = null, n.zn()
	}

	function aK4() {
		2 === a9.data.spawningType && b6.pY.a1B(aK1.tX(), a9.data.spawningData, bO.aEB - 1)
	}
	this.show = function() {
		aJz.show(), this.resize()
	}, this.qw = function() {
		aJz.qw()
	}, this.resize = function() {
		aJz.resize(), aK0.resize()
	}, this.a0Y = function(et) {
		2 === et && aJz.tB[0].ph()
	}, aJz = new t4(L(346), [new q("⬅️ " + L(22), aK2)]), aK0 = new pH(aJz.tA, (function(pJ) {
		var aJZ = new p1,
			t3 = (aJZ.p4(L(202)), [L(227), L(237), L(205)]),
			value = a9.data.spawningType;
		0 === a9.data.gameMode && (t3.splice(1, 1), 0 < value) && (value = 1);
		aJZ.pC(new sz({
			t3: t3,
			value: value
		}, function(e0) {
			aK4(), a9.data.spawningType = e0, 0 === a9.data.gameMode && 1 === e0 && (a9.data.spawningType = 2), 2 !== a9.data.spawningType || a9.data.spawningData || (a9.data.spawningData = new Uint16Array(2 * a9.eV)), n.o(24)
		})), aJZ.pF(new rJ), aJZ.pF(new r3({
			value: a9.data.selectableSpawn
		}, L(347), function(value) {
			a9.data.selectableSpawn = value
		})), pJ.push(aJZ)
	}(pJ = []), function(pJ) {
		var aJZ = new p1;
		aJZ.p4("Seed"), aJZ.pF(new qE({
			e0: -1,
			value: a9.data.spawningSeed
		}, 1, 0, function(e) {
			var value = Math.abs(Math.floor(e.target.value)) % 16384;
			e.target.value = a9.data.spawningSeed = value
		})), pJ.push(aJZ)
	}(pJ), function(pJ) {
		var aJZ;
		2 === a9.data.spawningType && ((aJZ = new p1).p4("Data"), (aK1 = new tP(0, 1, 0, 1)).tW(b6.zC.a2X(a9.data.spawningData, 2)), aJZ.pF(aK1), pJ.push(aJZ))
	}(pJ), pJ))
}

function aIs() {
	var aJI, aLz, aM0, t5;

	function aN2(id) {
		0 !== u.id || bf.dp.data[140].value ? 0 === id ? n.o(8, 1, new rn(16)) : n.o(2) : n.s.aLt(n.rm, 0 === id ? 16 : 0)
	}
	this.show = function() {
		u.v.setState(12), aJI.show(), this.resize(), this.iS()
	}, this.qw = function() {
		aJI.qw()
	}, this.resize = function() {
		aJI.resize(), aLz.resize()
	}, this.iS = function() {
		8 === aW.zd() && (2 <= bZ.aN7 ? aM0[2].pi === b7.mk && aM0[2].pk(0) : aM0[2].pi !== b7.mk && aM0[2].pk(b7.mk), !a9.gi && aI.a44(a9.eI) ? aM0[1].pi === b7.mk && aM0[1].pk(0) : aM0[1].pi !== b7.mk && aM0[1].pk(b7.mk), !a9.gi && aq.oz(a9
			.eI) ? aM0[0].pi === b7.mk && aM0[0].pk(0) : aM0[0].pi !== b7.mk && aM0[0].pk(b7.mk))
	}, this.a0Y = function(et) {
		2 === et && aJI.tB[0].ph()
	}, aM0 = [new q(L(348), function() {
		aN2(0)
	}), new q(L(256), function() {
		n.o(16)
	}), new q(L(306), function() {
		n.o(17)
	}), new q(L(349), function() {
		n.s.aKu()
	}, 0, 0, 1), new q(L(316), function() {
		n.o(3, 1)
	}), new q(L(350), function() {
		n.o(18)
	}), new q(L(322), function() {
		aN2(1)
	}), new q(L(351), function() {
		n.o(4, 1, new p(L(351), b6.pO.a1g([L(360), L(361), "Discord", L(362), L(252), L(363), L(100), L(364), L(365), L(366)], [bG.aAH, bG.zY, bG.aAI, bG.aN8, bG.aN9, bG.zI, bG.aNA, bG.aNB, bG.aNC, bG.aMY]), !1, [new q("⬅️ " + L(22),
			function() {
				n.o(1)
			})]))
	}), new q(L(352), function() {
		n.o(4, 1, new p(L(352), dh + "<br><a href='" + bG.aN8 + "' target='_blank'>" + bG.aN8 + "</a>" +
			"<br><br><b>" + "FX Client v" + __fx.version + "<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a>" +
			"<br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></b>", !0, [new q("⬅️ " + L(22), function() {
				n.o(1)
			})]))
	}), new q(L(353), function() {
		n.o(4, 1, new p(L(353), L(367) + "<br>" + L(368), !1, [new q("⬅️ " + L(22), function() {
			n.o(1)
		}), new q(L(369), function() {
			u.v.zR(), n.o(1)
		})]))
	}), new q(L(354), function() {
		u.v.zS(), n.o(4, 1, new p(L(370), L(371) + "<a href='" + bG.aMY + "' target='_blank'>" + bG.aMY + "</a>", !1, [new q("⬅️ " + L(22), function() {
			n.o(1)
		})]))
	})], t5 = [new q("⬅️ " + L(22), function() {
		n.s.aA1()
	})], 8 === aW.zd() && (aM0.unshift(new q(L(357), function() {
		2 <= bZ.aN7 && (n.r(), ba.a0b(), bb.dc = !0)
	}, 0, 1)), aM0.unshift(new q(L(358), function() {
		!a9.gi && aI.a44(a9.eI) && (b4.gv.o5(), n.r(), aI.gj) && aI.a0b()
	}, 0, 1)), aM0.unshift(new q(L(359), function() {
		!a9.gi && aq.oz(a9.eI) && (b4.gv.o7(), n.r(), aI.gj) && aI.a0b()
	}, 0, 1))), 1 === u.id && 5 <= u.f1 && aM0.push(new q(L(355), function() {
		u.v.zT()
	})), aJI = new t4(L(356), t5), aLz = new py(aM0, aJI.tA)
}

function aJE() {
	var aJz, aK0, aK1, pJ;

	function aK2() {
		aK4(), 2 !== a9.data.sResourcesType && (a9.data.sResourcesData = null), n.aJH()[19] = null, n.zn()
	}

	function aK4() {
		2 === a9.data.sResourcesType && b6.pY.a1B(aK1.tX(), a9.data.sResourcesData, 2047)
	}
	this.show = function() {
		aJz.show(), this.resize()
	}, this.qw = function() {
		aJz.qw()
	}, this.resize = function() {
		aJz.resize(), aK0.resize()
	}, this.a0Y = function(et) {
		2 === et && aJz.tB[0].ph()
	}, aJz = new t4(L(243), [new q("⬅️ " + L(22), aK2)]), aK0 = new pH(aJz.tA, (function(pJ) {
		var aJZ = new p1;
		aJZ.p4(L(202)), aJZ.pC(new sz({
			t3: [L(203), L(204), L(205)],
			value: a9.data.sResourcesType
		}, function(e0) {
			aK4(), 2 !== e0 || a9.data.sResourcesData || (a9.data.sResourcesData = new Uint16Array(a9.eV)), a9.data.sResourcesType = e0, n.o(28)
		})), pJ.push(aJZ)
	}(pJ = []), function(pJ) {
		var aJZ;
		1 === a9.data.sResourcesType && ((aJZ = new p1).p4("Value"), aJZ.pF(new qE({
			e0: -1,
			value: a9.data.sResourcesValue
		}, 1, 0, function(e) {
			var value = bH.ow(Math.floor(e.target.value), 0, 2047);
			e.target.value = a9.data.sResourcesValue = value
		})), pJ.push(aJZ))
	}(pJ), function(pJ) {
		var aJZ;
		2 === a9.data.sResourcesType && ((aJZ = new p1).p4("Data"), (aK1 = new tP(0, 1, 0, 1)).tW(b6.zC.a2X(a9.data.sResourcesData, 2)), aJZ.pF(aK1), pJ.push(aJZ))
	}(pJ), pJ))
}

function aJC() {
	var aJz, aK0, aK1, pJ;

	function aK2() {
		aK4(), 2 !== a9.data.tIncomeType && (a9.data.tIncomeData = null), n.aJH()[19] = null, n.zn()
	}

	function aK4() {
		2 === a9.data.tIncomeType && b6.pY.a1B(aK1.tX(), a9.data.tIncomeData, 255)
	}
	this.show = function() {
		aJz.show(), this.resize()
	}, this.qw = function() {
		aJz.qw()
	}, this.resize = function() {
		aJz.resize(), aK0.resize()
	}, this.a0Y = function(et) {
		2 === et && aJz.tB[0].ph()
	}, aJz = new t4(L(241), [new q("⬅️ " + L(22), aK2)]), aK0 = new pH(aJz.tA, (function(pJ) {
		var aJZ = new p1;
		aJZ.p4(L(202)), aJZ.pC(new sz({
			t3: [L(203), L(204), L(205)],
			value: a9.data.tIncomeType
		}, function(e0) {
			aK4(), 2 !== e0 || a9.data.tIncomeData || (a9.data.tIncomeData = new Uint8Array(a9.eV), a9.data.tIncomeData.fill(32)), a9.data.tIncomeType = e0, n.o(26)
		})), pJ.push(aJZ)
	}(pJ = []), function(pJ) {
		var aJZ;
		1 === a9.data.tIncomeType && ((aJZ = new p1).p4("Value"), aJZ.pF(new qE({
			e0: -1,
			value: a9.data.tIncomeValue
		}, 1, 0, function(e) {
			var value = bH.ow(Math.floor(e.target.value), 0, 255);
			e.target.value = a9.data.tIncomeValue = value
		})), pJ.push(aJZ))
	}(pJ), function(pJ) {
		var aJZ;
		2 === a9.data.tIncomeType && ((aJZ = new p1).p4("Data"), (aK1 = new tP(0, 1, 0, 1)).tW(b6.zC.a2X(a9.data.tIncomeData, 4)), aJZ.pF(aK1), pJ.push(aJZ))
	}(pJ), pJ))
}

function aJ4() {
	var aJI, aJJ, pJ;
	this.show = function() {
		aJI.show(), this.resize()
	}, this.qw = function() {
		aJI.qw()
	}, this.resize = function() {
		aJI.resize(), aJJ.resize()
	}, this.a0Y = function(et) {
		2 === et && aJI.tB[0].ph()
	}, aJI = new t4(L(350), [new q("⬅️ " + L(22), function() {
		n.zn()
	})]), aJJ = new pH(aJI.tA, ((pJ = []).push(function() {
		function aJc() {
			aNH.button.textContent = L(146), aNF.e.readOnly = !1, aNG.e.readOnly = !1, aJb.pk(1), aJb.button.style.color = b7.mY
		}
		var aJZ = new p1,
			aNE = (aJZ.p4(L(372)), new qE({
				value: bf.dp.data[105].value,
				e0: -1
			})),
			aNF = (aNE.e.readOnly = !0, aJZ.pF(aNE), aJZ.p4(L(279), "0.8em"), new qE(bf.dp.data[148])),
			aNF = new qE(bf.dp.data[148], 0, void 0, function(e) {
				aJa(bf.dp.data[149].value, e.target.value)
			}),
			aNG = (aJZ.pF(aNF), aJZ.p4(L(283), "0.8em"), new qE(bf.dp.data[149], 1, void 0, function(e) {
				aJa(e.target.value, bf.dp.data[148].value)
			})),
			aNH = (aJZ.pF(aNG), new q(L(146), function(e) {
				return e.textContent === L(146) ? (e.textContent = L(147), aNF.e.readOnly = !0, aNG.e.readOnly = !0, aJb.pk(0), aJb.button.style.color = b7.nR, bf.r6.r7(149, aNG.e.value), aJa(bf.dp.data[149].value, bf.dp.data[
					148].value)) : aJc(), !0
			})),
			aJb = (aJZ.pF(new r9([aNH.button])), new q(L(14), function(e) {
				return aNF.e.readOnly && aw.s.aCB(0) && (b6.pO.a1l(e), aJc(), aw.aJd.aJe({
					ro: 0,
					qm: bf.dp.data[148].value,
					rl: 0,
					value: bH.ow(Math.floor(100 * bf.dp.data[149].value), 0, 4294967295)
				})), !0
			}, 1)),
			p7 = (aJZ.pF(new r9([aJb.button])), aJZ.p6()),
			aJa = function(f0, p5) {
				f0 = isNaN(f0) ? 0 : Number(f0);
				var f0 = Math.max(f0, (bf.dp.data[150].value + 1) / 100),
					aJh = Math.floor(100 * Math.max(1e-4 * f0, bf.dp.data[150].value / 100)) / 100;
				p7.textContent = L(148, [f0.toFixed(2), bf.dp.data[105].value, aJh.toFixed(2), p5, (f0 - aJh).toFixed(2)])
			};
		return aJa(bf.dp.data[149].value, bf.dp.data[148].value), aJZ
	}()), pJ))
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
	var a7G, aNJ, aNK, aNL, aNI = !1;

	function aNM() {
		aNI = !0, a7G = -1, aNJ = new Array(4);
		for (var a7 = 3; 0 <= a7; a7--) aNJ[a7] = !1;
		var vv = Math.floor(1 + .02 * at.min);
		aNK = new Array(4), (aNL = new Array(4))[1] = aNL[3] = aNK[0] = aNK[2] = 0, aNL[0] = aNK[3] = -vv, aNK[1] = aNL[2] = vv
	}

	function aNN() {
		if (-1 !== a7G)
			if (0 !== a9.yP && aD.mG()) {
				for (var aNO = !1, a7 = 3; 0 <= a7; a7--) aNJ[a7] && (aNO = !0, hv += aNK[a7], hx += aNL[a7], ab.a00(aNK[a7], aNL[a7]), aO.a6y());
				aNO ? bb.dc = !0 : am.m6()
			} else am.m6()
	}
	this.a0W = function(e0) {
		0 !== a9.yP && aD.mG() && (aNI || aNM(), aNJ[e0] = !0, -1 === a7G) && (a7G = setInterval(aNN, 20), aNN())
	}, this.a0Z = function(e0) {
		if (0 !== a9.yP && (aNI || aNM(), aNJ[e0] = !1, -1 !== a7G)) {
			for (var aNO = !1, a7 = 3; 0 <= a7; a7--) aNO = aNO || aNJ[a7];
			aNO || this.m6()
		}
	}, this.m6 = function() {
		if (aNI && -1 !== a7G) {
			for (var a7 = 3; 0 <= a7; a7--) aNJ[a7] = !1;
			clearInterval(a7G), a7G = -1
		}
	}
}

function cc() {
	this.s = new aNP, this.lD = new aNQ, this.nl = new aNR, this.aBn = new aNS, this.a9y = new aNT, this.aJd = new aNU, this.oO = new aNV, this.aLH = new aNW, this.a4o = new aNX, this.aNY = new aNZ, this.aNa = new aNb, this.aNc = new aNd, this.aNe =
		new aNf, this.dU = function() {
			this.s.dU()
		}
}

function aNP() {
	var aNg, aNi;
	this.aCo = 5, this.aCi = this.aCo - 1, this.aCG = this.aCo + this.aCi, this.aCF = [0, 1, 5, 2, 6, 3, 7, 4, 8], this.aNh = null;

	function aNp(a7) {
		return aNi[a7].aNI && aNg[a7].aNp()
	}

	function aNr(za) {
		aNi[za].lo = bb.lo, aNi[za].aNk = !1
	}
	this.zj = 0, this.zi = 0, this.dU = function() {
		this.aNh = new Array(this.aCo);
		this.aNh[0] = "territorial.io";
		var a7, aGo = au.aH9(0);
		for (au.a2t(0), a7 = 1; a7 < this.aCo; a7++) this.aNh[a7] = aG.xz() + ".territorial.io";
		for (au.a2t(aGo), aNg = new Array(this.aCG), aNi = new Array(this.aCG), a7 = this.aCG - 1; 0 <= a7; a7--) aNi[a7] = {
			aNI: !1,
			lo: 0,
			aNk: !1
		};
		this.aCH(0, 0)
	}, this.aNl = function(a7) {
		return aNg[a7]
	}, this.aNm = function() {
		return this.zi < this.aCo ? this.zi : this.zi - this.aCi
	}, this.iS = function() {
		for (var a7 = this.aCG - 1; 0 <= a7; a7--) this.aCB(a7) && bb.lo > aNi[a7].lo + 15e3 && aw.nl.aNn(a7, aNi[a7].aNk);
		!this.aCB(0) && bb.lo > aNi[0].lo + 8e3 && (aNi[0].lo = bb.lo, this.aCH(0, 0))
	}, this.aCH = function(za, aIq) {
		if (aNi[za].aNI) {
			if (aNg[za].aNp()) return aNg[za].aNq(aIq), aNg[za].aCB();
			aNg[za].qw()
		}
		return this.aNo(za, aIq), !1
	}, this.aNo = function(za, aIq) {
		aNi[za].aNI = !0, aNr(za), aNg[za] = new aNs, aNg[za].dU(za, aIq)
	}, this.aNq = function(za, aIq) {
		aNp(za) && aNg[za].aNq(aIq)
	}, this.aNt = function(za, aIq) {
		aw.a9y.aNu(za)
	}, this.aCB = function(a7) {
		return aNi[a7].aNI && aNg[a7].aCB()
	}, this.send = function(za, a8) {
		aNr(za), aNg[za].send(a8)
	}, __fx.customLobby.setSendFunction(this.send), this.a0H = function(za) {
		8 === aW.zd() && (aNi[za].aNk = !0, aw.lD.aNv = !0)
	}, this.close = function(za, aNw) {
		aNp(za) && aNg[za].close(aNw)
	}, this.aNx = function(za, aNw) {
		l.zo(aNw), aNp(za) && aNg[za].close(aNw)
	}, this.zp = function(aNw) {
		for (var a7 = this.aCG - 1; 0 <= a7; a7--) this.close(a7, aNw)
	}, this.aNy = function(za, aNw) {
		for (var a7 = this.aCG - 1; 0 <= a7; a7--) a7 !== za && this.close(a7, aNw)
	}, this.a35 = function() {
		this.close(this.zj, 3246)
	}, this.aNz = function(za, e) {
		aNg[za].qw(), l.zZ(za, e.code)
	}
}

function aNQ() {
	this.aNv = !1, this.iS = function() {
		bb.jb() % 250 != 249 || a9.gi || (aw.a9y.aO0(+(this.aNv && ac.lV[a9.eI]), ah.jf + bJ.s.ob), this.aNv = !1)
	}
}

function aNX() {
	function aOR(aOS) {
		var eb = a9.data,
			aOS = (eb.selectedPlayer = bD.oP(aOS), eb.spawningSeed = bD.oP(14), bD.oP(4)),
			aOS = (aOS < 7 ? (eb.gameMode = 1, eb.numberTeams = aOS + 2) : 9 === aOS ? (eb.gameMode = eb.isZombieMode = 1, eb.numberTeams = 2) : (eb.gameMode = 0, eb.battleRoyaleMode = 7 === aOS ? 0 : 10 === aOS ? 1 : 2), eb.isContest = bD.oP(1), bD
				.oP(6));
		return eb.mapType = bO.aAr(aOS) ? 0 : 1, bO.aAs(eb, aOS), eb.mapSeed = bD.oP(14), aOS
	}
	this.aO2 = function(za, a8) {
		bD.dU(a8), 0 === bD.size ? aw.s.aNx(za, 3205) : __fx.customLobby.isCustomMessage(a8) || ((0 === bD.oP(1) ? function(za) {
			var aO6 = bD.oP(6);
			0 === aO6 ? function(za) {
					if (0 === za && 8 !== aW.zd()) {
						n.s.aMZ();
						for (var aOJ = bD.oP(12), aOK = bD.oP(6), g = new Array(aOJ), a7 = 0; a7 < aOJ; a7++) g[a7] = bD.oP(aOK);
						aP.a7N(g)
					}
				}(za) : 2 === aO6 ? aw.aNY.aO8(za) : 3 === aO6 || 4 === aO6 ? ar.dU() : 9 === aO6 ? aw.aNa.aO9(za) : 10 === aO6 ? aw.aNc.aOA() : 11 === aO6 ? aw.aNa.aOB() : 12 === aO6 ? aw.aNc.aOC() : 13 === aO6 ? aw.aNe.aOD() :
				14 === aO6 ? aw.aNe.aOE() : 15 === aO6 ? aw.aNa.aOF() : 16 === aO6 ? aw.aNY.aOG(za) : 17 === aO6 ? aw.aNY.aOH(za) : 18 === aO6 && aw.aNY.aOI(za)
		} : function(za) {
			if (8 !== aW.zd() && !ar.aCp()) return;
			if (za !== aw.s.zj) aw.s.aNx(za, 3244);
			else if (0 === bD.oP(1)) bb.yY.aOT(bD.a8);
			else {
				var a7, za = bD.oP(2);
				if (0 === za) {
					var nz, nl = bD.oP(9);
					0 !== ac.lV[nl] && 0 !== ac.lV[a9.eI] && (nz = bD.oP(10), aJ.ny(nl, a9.eI, nz), ab.ox(nl, 1, nz))
				} else if (1 === za) ! function() {
					var nl = bD.oP(9);
					0 !== ac.lV[nl] && 0 !== ac.lV[a9.eI] && b1.aGY(0, [nl], !0) && aJ.oH(nl, 1)
				}();
				else if (2 === za) ! function() {
					var nl = bD.oP(9),
						target = bD.oP(9);
					0 !== ac.lV[nl] && 0 !== ac.lV[target] && 0 !== ac.lV[a9.eI] && b1.aGY(1, [nl], !0) && (ab.ox(nl, 3, 96), ab.ox(target, 4, 96), aJ.a4v(nl, target))
				}();
				else if (a5 && !a6) {
					var eY = 540;
					for (b9.a3(17287), b9.a4(1, 0), b9.a4(6, 10), eY = Math.min(b4.ni.oR.length, 540), a7 = 0; a7 < eY; a7++) b9.aOZ(32, b4.ni.oR[a7]);
					aw.s.send(aw.s.zj, b9.a8)
				}
			}
		})(za), bb.aO5())
	}, this.aOL = function(a8) {
		if (bD.dU(a8), bD.e0 = 1, 3 === bD.oP(6)) {
			bD.e0 += 20;
			var eb = a9.data = new a2n,
				a8 = aOR(9),
				aAt = eb.humanCount = bD.oP(9) + 1;
			eb.selectableSpawn = 1 === eb.gameMode || aAt < 100, eb.colorsData = new Uint32Array(aAt), eb.playerNamesData = new Array(aAt);
			for (var a7 = 0; a7 < aAt; a7++) bD.e0++, eb.colorsData[a7] = bD.oP(18), eb.playerNamesData[a7] = bC.uT.uX(bD.oP(5));
			aW.aCT(), bO.a3(a8, eb.mapSeed), a9.a2r()
		} else ! function() {
			bD.e0 += 20;
			var eb = a9.data = new a2n,
				aOQ = aOR(1);
			eb.humanCount = 2;
			eb.selectableSpawn = 1, eb.elo = new Uint16Array(2), eb.colorsData = new Uint32Array(2), eb.playerNamesData = new Array(2);
			for (var a7 = 0; a7 < 2; a7++) bD.e0++, eb.colorsData[a7] = bD.oP(18), eb.elo[a7] = bD.oP(14), eb.playerNamesData[a7] = bC.uT.uX(bD.oP(5));
			aW.aCT(), bO.a3(aOQ, eb.mapSeed), a9.a2r()
		}()
	}, this.aOO = function() {
		bD.e0 = 1;
		var aO6 = bD.oP(6),
			aOP = bD.oP(10);
		return aw.s.zi > aw.s.aCi && (aOP += aw.s.aCi), aw.s.zi === aOP ? (aw.s.zj = aOP, !1) : (aw.s.close(aw.s.zi, 3247), aw.s.zj = aOP, ar.aAo = bD.oP(10), ar.aCb = bD.oP(3 === aO6 ? 9 : 1), aw.s.aCH(aOP, 5) && aw.nl.aCj(), !0)
	}
}

function aNd() {
	this.aOA = function() {
		bf.s.u1(), bf.r6.r7(105, bB.rp.rq(bB.rp.rr(5))), bf.r6.r7(106, bB.rp.rq(bB.rp.rr(8))), bf.r6.r7(109, bD.oP(30)), bf.r6.r7(108, bf.dp.data[109].value), bf.r6.r7(111, bf.dp.data[109].value + 1), bf.r6.r7(107, 0), bf.r6.r7(110, "")
	}, this.aOC = function() {
		var aOc, aOd, aOe, aOf, aOb;
		bD.size < b9.aOa(29) ? aw.s.aNx(0, 3254) : (aOb = bD.oP(5), aOc = bD.oP(3), aOd = bD.oP(3), aOe = bD.oP(3), aOf = bD.oP(8), bD.aOg(197 + 16 * (aOb + aOc + aOd + aOe + aOf) + 32 + 32 + 30 + 128 + 32 + 30 + 10 + 32 + 2 + 10 + 5) ? (aOb = {
			rl: bD.oP(30),
			uE: bD.oP(16),
			uF: bD.oP(30),
			uG: bD.oP(30),
			uH: bD.oP(30),
			uI: bD.aOh(32),
			username: bC.uT.uX(aOb),
			uJ: bC.uT.uX(aOc),
			uK: bC.uT.uX(aOd),
			uL: bD.aOh(32),
			uM: bD.aOh(32),
			uN: bD.oP(30),
			uO: bD.aOh(32),
			uP: bD.aOh(32),
			uQ: bD.aOh(32),
			uR: bD.aOh(32),
			aJl: bD.aOh(32),
			aJm: bD.aOh(30),
			aJg: bD.aOh(10),
			aJw: bD.aOh(32),
			aJx: bC.uT.uX(aOe),
			aJr: bD.aOh(2),
			aJs: bD.aOh(10),
			aJp: bC.uT.uX(aOf),
			aJt: bD.aOh(5)
		}, bf.r6.r7(150, aOb.aJg), 8 === n.rm && (25 === n.aD4().aLD ? (aOb.aJK = !0, n.s.aJ1 = aOb, n.aD4().aLR(25, !1)) : (aOb.aJK = !1, aOb.qm = bf.dp.data[105].value, n.s.aIy = aOb, bf.r6.uD(aOb), n.aD4().aLR(16, !0)))) : aw.s.aNx(0,
			3267))
	}
}

function aNf() {
	this.aOD = function() {
		var a7;
		if (bD.size < b9.aOa(39)) aw.s.aNx(0, 3259);
		else {
			var s2 = bD.oP(6),
				eY = bD.oP(10),
				hC = bD.oP(16);
			if (bD.aOg(39 + 16 * hC + eY * (0 === s2 ? 111 : 1 === s2 ? 101 : 2 === s2 || 3 === s2 ? 127 : 212))) {
				var data = [];
				if (0 === s2)
					for (a7 = 0; a7 < eY; a7++) data.push([bD.oP(30), bC.uT.uX(bD.oP(5)), bD.oP(16), bD.oP(30), bD.oP(30)]);
				else if (1 === s2)
					for (a7 = 0; a7 < eY; a7++) data.push([bD.oP(16), bC.uT.uX(bD.oP(3)), bD.oP(16), bC.uT.uX(bD.oP(5)), bD.oP(31), bD.oP(30)]);
				else if (2 === s2 || 3 === s2)
					for (a7 = 0; a7 < eY; a7++) data.push([bD.oP(30), bC.uT.uX(bD.oP(5)), bD.aOh(32), bD.oP(30), bD.oP(30)]);
				else
					for (a7 = 0; a7 < eY; a7++) data.push([bD.oP(20), bD.oP(30), bD.oP(30), bD.oP(30), bD.oP(30), bD.aOh(32), bD.oP(30), bC.uT.uX(bD.oP(5)), bC.uT.uX(bD.oP(5))]);
				8 === n.rm && n.aD4().aLR(21, !0, {
					s2: s2,
					data: data
				})
			} else aw.s.aNx(0, 3260)
		}
	}, this.aOE = function() {
		if (bD.size < b9.aOa(29)) aw.s.aNx(0, 3265);
		else {
			var aOi = bD.oP(4),
				aOj = bD.oP(7),
				aOk = bD.oP(11);
			if (bD.aOg(29 + 16 * aOj + 16 * aOk + 11 * aOi)) {
				for (var data = [], a7 = 0; a7 < aOi; a7++) {
					for (var aB9 = bC.uT.uX(bD.oP(3)), aOl = bD.oP(8), aKT = [], er = 0; er < aOl; er++) aKT.push(bD.oP(16));
					data.push({
						name: "[" + aB9 + "]",
						aKT: aKT
					})
				}
				8 === n.rm && n.aD4().aLR(23, !0, data)
			} else aw.s.aNx(0, 3266)
		}
	}
}

function aNZ() {
	this.aO8 = function(za) {
		if (za !== aw.s.zi) aw.s.close(za, 3239);
		else if (6 !== aW.zd()) aw.s.close(za, 3271);
		else {
			bk.dU();
			for (var a7 = 0; a7 < 4; a7++) {
				var qU = bk.s.qV[a7],
					playerCount = (qU.sY = bD.oP(10), qU.eE = bD.oP(6), qU.mapSeed = bD.oP(14), qU.aAk = bD.oP(4), qU.aBp = bD.oP(6), qU.aBq = bD.oP(4), qU.aAq = bD.oP(1), qU.aBP = bD.oP(12), qU.spawningSeed = bD.oP(14), bD.oP(16));
				bk.sk.sm[a7] = bD.oP(16);
				for (var er = 0; er < playerCount; er++) bk.sk.aAU(a7, bD.oP(30), bC.uV.un(5), bD.oP(4), bD.oP(30), bD.oP(7), bD.oP(16), bD.oP(18))
			}
			n.o(29), bk.s.aBF(!0)
		}
	}, this.aOG = function(za) {
		if (za !== aw.s.zi) aw.s.close(za, 3239);
		else if (bk.zh) {
			bk.s.aBD[0] = bD.oP(20), bk.s.aBD[1] = bD.oP(20);
			for (var aOm = bD.oP(16), er = 0; er < aOm; er++) {
				var id = bD.oP(3);
				0 === id ? bk.sk.aAU(0, bD.oP(30), bC.uV.un(5), 9, 1e6, 127, 0, bD.oP(18)) : 1 === id ? bk.sk.aAf(bD.oP(16), bD.oP(2)) : 2 === id ? bk.sk.aAb(bD.oP(16), bD.oP(2), bD.oP(2)) : 3 === id ? bk.sk.aAe(bD.oP(16), bD.oP(2)) : 4 === id &&
					bk.sk.aAZ(bD.oP(16), bD.oP(2), bC.uV.un(5), bD.oP(4), bD.oP(30), bD.oP(7), bD.oP(16))
			}
			for (var a7 = 0; a7 < 4; a7++) {
				var qU = bk.s.qV[a7];
				if (qU.sY = bD.oP(10), 0 === qU.sY) {
					if (qU.zj = bD.oP(10), qU.aAo = bD.oP(10), bk.aAN.dd(a7)) return;
					qU.eE = bD.oP(6), qU.mapSeed = bD.oP(14), qU.aAk = bD.oP(4), qU.aBp = bD.oP(6), qU.aBq = bD.oP(4), qU.aAq = bD.oP(1), qU.aBP = bD.oP(12), qU.spawningSeed = bD.oP(14)
				}
			}
			bk.s.aBH()
		} else aw.s.close(za, 3251)
	}, this.aOH = function(za) {
		if (za !== aw.s.zi) aw.s.close(za, 3272);
		else if (bk.zh) {
			for (var qS = bD.oP(4), qU = bk.s.qV[qS], qW = qU.qW, aOn = (qU.qX = bD.oP(20), bD.oP(6)), a7 = 0; a7 < aOn; a7++) {
				var aB3, target, qm = bD.oP(30),
					id = bD.oP(4);
				0 === id ? qW.push({
					id: id,
					qm: qm,
					k: bC.uV.un(7)
				}) : 15 === id ? (aB3 = bD.oP(3), target = bD.oP(30), qW.push({
					id: id,
					qm: qm,
					aB3: aB3,
					target: target,
					value: bD.oP(30)
				})) : 14 === id ? qW.push({
					id: id,
					qm: qm,
					aB3: bD.oP(3)
				}) : (target = bD.oP(30), qW.push({
					id: id,
					qm: qm,
					target: target,
					value: bD.oP(4)
				}))
			}
			bk.s.aBQ(qS)
		} else aw.s.close(za, 3273)
	}, this.aOI = function(za) {
		za !== aw.s.zi ? aw.s.close(za, 3274) : bk.zh ? (bk.s.qY.push(bD.oP(6)), bk.s.aBQ(bk.s.qT[0])) : aw.s.close(za, 3275)
	}
}

function aNb() {
	this.aO9 = function(za) {
		var aOV, pw;
		bD.aOg(70) ? (aOV = bD.oP(3), pw = be.aOo.iS(bD.oP(30), bD.oP(30)), aw.a9y.aOp(za, pw, aOV), 0 < aOV || (0 === za && 0 === bf.dp.data[105].value.length ? aw.a9y.aLG(0) : aw.aJd.aOq(za), 4 === aw.s.aNl(za).aOr() ? 6 === aW.zd() && aw.aBn
			.aCI(za) : 5 !== aw.s.aNl(za).aOr() || 8 !== aW.zd() && 10 !== aW.zd() || aw.nl.aCj())) : aw.s.aNx(za, 3269)
	}, this.aOB = function() {
		var id = bD.oP(6);
		0 === id ? (aP.a7J || aw.a9y.aLG(1), b3.a9w(), 8 === n.rm && n.aD4().aLQ()) : 21 === id ? 8 === n.rm && n.aD4().aLR(17) : 22 === id && (bf.r6.r7(106, bf.dp.data[110].value), bf.r6.r7(110, ""), 8 === n.rm) && n.aD4().aLR(16)
	}, this.aOF = function() {
		var eY = bD.oP(16),
			aOs = bD.oP(16);
		if (bD.aOg(55 + 10 * eY + 16 * aOs)) {
			for (var g = [], a7 = 0; a7 < eY; a7++) g.push(bC.uT.uX(bD.oP(10)));
			b3.aA0(g)
		} else aw.s.aNx(0, 3270)
	}
}

function aNR() {
	this.aNn = function(za, aNk) {
		b9.a3(8), b9.a4(1, 0), b9.a4(6, 4), b9.a4(1, aNk ? 1 : 0), aw.s.send(za, b9.a8)
	}, this.aCj = function() {
		b9.a3(58), b9.a4(1, 0), b9.a4(6, 5), b9.a4(8, aw.s.aNm()), b9.a4(10, ar.aAo), b9.a4(9, ar.aCb), b9.a4(10, di), b9.a4(14, h.dj), aw.s.send(aw.s.zj, b9.a8)
	}, this.nm = function(eK) {
		b9.a3(27), b9.a4(1, 1), b9.a4(4, 0), b9.a4(22, eK), aw.s.send(aw.s.zj, b9.a8)
	}, this.nn = function(hu, il) {
		b9.a3(25), b9.a4(1, 1), b9.a4(4, 1), b9.a4(10, hu), b9.a4(10, il), aw.s.send(aw.s.zj, b9.a8)
	}, this.nr = function(hu, np) {
		b9.a3(24), b9.a4(1, 1), b9.a4(4, 2), b9.a4(10, hu), b9.a4(9, np), aw.s.send(aw.s.zj, b9.a8)
	}, this.ns = function(hu, eK) {
		b9.a3(37), b9.a4(1, 1), b9.a4(4, 3), b9.a4(10, hu), b9.a4(22, eK), aw.s.send(aw.s.zj, b9.a8)
	}, this.nv = function(lu, eK) {
		b9.a3(37), b9.a4(1, 1), b9.a4(4, 4), b9.a4(10, lu), b9.a4(22, eK), aw.s.send(aw.s.zj, b9.a8)
	}, this.nx = function(il) {
		b9.a3(15), b9.a4(1, 1), b9.a4(4, 5), b9.a4(10, il), aw.s.send(aw.s.zj, b9.a8)
	}, this.o1 = function(e0) {
		b9.a3(15), b9.a4(1, 1), b9.a4(4, 6), b9.a4(10, e0), aw.s.send(aw.s.zj, b9.a8)
	}, this.o4 = function(o3) {
		b9.a3(6), b9.a4(1, 1), b9.a4(4, 7), b9.a4(1, o3), aw.s.send(aw.s.zj, b9.a8)
	}, this.o6 = function() {
		b9.a3(5), b9.a4(1, 1), b9.a4(4, 8), aw.s.send(aw.s.zj, b9.a8)
	}, this.o8 = function(hu, eK, il) {
		b9.a3(47), b9.a4(1, 1), b9.a4(4, 10), b9.a4(10, hu), b9.a4(10, il), b9.a4(22, eK), aw.s.send(aw.s.zj, b9.a8)
	}, this.oF = function(aOt, aOu) {
		b9.a3(24), b9.a4(1, 1), b9.a4(4, 15), b9.a4(9, aOu), b9.a4(10, aOt), aw.s.send(aw.s.zj, b9.a8)
	}, this.oI = function(a4o) {
		b9.a3(14), b9.a4(1, 1), b9.a4(4, 14), b9.a4(9, a4o), aw.s.send(aw.s.zj, b9.a8)
	}, this.oM = function(aOv, target) {
		var a7, eY = aOv.length;
		for (b9.a3(14 + 9 * eY), b9.a4(1, 1), b9.a4(4, 13), b9.a4(9, target), a7 = 0; a7 < eY; a7++) b9.a4(9, aOv[a7]);
		aw.s.send(aw.s.zj, b9.a8)
	}
}

function aNU() {
	this.aOw = function() {
		b9.a3(39), b9.a4(1, 0), b9.a4(6, 16), aw.a9y.aOx(), aw.s.send(0, b9.a8)
	}, this.aOq = function(za) {
		b9.a3(115), b9.a4(1, 0), b9.a4(6, 17), bC.rp.uj(bf.dp.data[105].value, 5), bC.rp.uj(bf.dp.data[106].value, 8), b9.a4(30, bf.dp.data[109].value), aw.s.send(za, b9.a8)
	}, this.aLT = function() {
		b9.a3(55), b9.a4(1, 0), b9.a4(6, 18), bC.rp.ui(bf.dp.data[110].value), aw.s.send(0, b9.a8)
	}, this.aLP = function(a2C) {
		var eY = a2C.p5.length;
		b9.a3(21 + 16 * eY), b9.a4(1, 0), b9.a4(6, 29), b9.a4(6, a2C.ro), b9.a4(8, eY), bB.uT.ui(a2C.p5), aw.s.send(0, b9.a8)
	}, this.aJo = function(data) {
		b9.a3(73), b9.a4(1, 0), b9.a4(6, 25), b9.a4(6, data.ro), bC.rp.uj(data.qm, 5), b9.a4(30, data.rl), aw.s.send(0, b9.a8)
	}, this.aJe = function(data) {
		b9.a3(105), b9.a4(1, 0), b9.a4(6, 27), b9.a4(6, data.ro), bC.rp.uj(data.qm, 5), b9.a4(30, data.rl), b9.aOZ(32, data.value), aw.s.send(0, b9.a8)
	}
}

function aNV() {
	this.oN = function() {
		var g6, eY = a9.je,
			yH = bN.result.yH,
			aOz = yH.length,
			z2 = (b9.a3(40 + 16 * eY + aOz * (33 + 3 * (a9.jy < 7))), b9.a4(1, 1), b9.a4(4, 12), b9.a4(10, aOz), b9.a4(1, +(2 === a9.yM)), b9.a4(24, bN.result.yq), ac.z2);
		for (a7 = 0; a7 < eY; a7++) b9.a4(16, z2[a7]);
		var gM = ac.gM;
		for (a7 = 0; a7 < aOz; a7++) g6 = yH[a7], b9.a4(9, g6), b9.a4(24, gM[g6]);
		if (a9.jy < 7)
			for (var eW = bc.eW, k4 = bc.k4, a7 = 0; a7 < aOz; a7++) b9.a4(3, 7 & k4[eW[yH[a7]]]);
		aw.s.send(aw.s.zj, b9.a8)
	}
}

function aNW() {
	this.aLI = function(s2, s3, s4) {
		b9.a3(75), b9.a4(1, 0), b9.a4(6, 21), b9.a4(6, s2), b9.a4(1, +(s3 < 0)), b9.a4(1, +(s4 < 0)), b9.a4(30, Math.abs(s3)), b9.a4(30, Math.abs(s4)), aw.s.send(0, b9.a8)
	}, this.aLJ = function(s2, aLK, aLL) {
		b9.a3(18 + 16 * aLK.length + 30), b9.a4(1, 0), b9.a4(6, 22), b9.a4(6, s2), aw.a9y.aP0(aLK), b9.a4(30, aLL), aw.s.send(0, b9.a8)
	}, this.aLO = function(s2, aLK, aLL) {
		b9.a3(73), b9.a4(1, 0), b9.a4(6, 28), b9.a4(6, s2), bC.rp.uj(aLK, 5), b9.a4(30, aLL), aw.s.send(0, b9.a8)
	}, this.aLM = function(aKS, z8) {
		for (var eY = z8.length, hC = 0, a7 = 0; a7 < eY; a7++) hC += z8[a7].length;
		for (b9.a3(21 + 3 * eY + 16 * hC), b9.a4(1, 0), b9.a4(6, 23), b9.a4(3, aKS), b9.a4(4, eY), b9.a4(7, hC), a7 = 0; a7 < eY; a7++) b9.a4(3, z8[a7].length), bB.uT.ui(z8[a7]);
		aw.s.send(0, b9.a8)
	}, this.aLN = function(aKS, s3, s4) {
		b9.a3(52), b9.a4(1, 0), b9.a4(6, 24), b9.a4(3, aKS), b9.a4(1, +(s3 < 0)), b9.a4(1, +(s4 < 0)), b9.a4(20, Math.abs(s3)), b9.a4(20, Math.abs(s4)), aw.s.send(0, b9.a8)
	}
}

function aNS() {
	this.aCI = function(za) {
		var username = bf.dp.data[122].value.slice(0, 20),
			username = (b9.a3(22 + 16 * username.length + 18), b9.a4(1, 0), b9.a4(6, 1), b9.a4(10, di), aw.a9y.aP0(username), b6.color.a1N(bf.s.u8()));
		b9.a4(6, username[0]), b9.a4(6, username[1]), b9.a4(6, username[2]), aw.s.zi = za, aw.s.send(za, b9.a8)
	}, this.aBo = function(aP2, a2C) {
		bA.dU(), bA.a4(1, 0), bA.a4(6, 2), bA.a4(3, aP2), 2 === aP2 ? bA.a4(2, a2C) : 3 === aP2 ? bB.uV.xt(a2C, 7, bA) : 5 === aP2 && (bA.a4(3, a2C.id), bA.a4(3, a2C.value), bA.a4(30, a2C.qm)), aw.s.send(aw.s.zi, bA.aP3())
	}
}

function aNT() {
	this.aNu = function(za) {
		b9.a3(39), b9.a4(1, 0), b9.a4(6, 13), b9.a4(14, h.dj), b9.a4(4, u.id), b9.a4(7, u.f1), b9.a4(1, +a5), b9.a4(1, +a6), b9.a4(5, (new Date).getHours() % 24), aw.s.send(za, b9.a8)
	}, this.aOp = function(za, pw, aOV) {
		b9.a3(70), b9.a4(1, 0), b9.a4(6, 14), b9.a4(3, aOV), b9.a4(30, pw[0]), b9.a4(30, pw[1]), aw.s.send(za, b9.a8)
	}, this.aLG = function(id) {
		b9.a3(13), b9.a4(1, 0), b9.a4(6, 15), b9.a4(6, id), aw.s.send(0, b9.a8)
	}, this.a9z = function(id, p5) {
		var eY = Math.min(p5.length, 63);
		b9.a3(19 + 16 * eY), b9.a4(1, 0), b9.a4(6, 26), b9.a4(6, id), b9.a4(6, eY), bB.uT.ui(p5), aw.s.send(0, b9.a8)
	}, this.aP4 = function(aOP, pG) {
		b9.a3(7 + 26 * pG.length), b9.a4(1, 0), b9.a4(6, 9);
		for (var a7 = 0; a7 < pG.length; a7++) b9.a4(16, pG[a7][0]), b9.a4(10, pG[a7][1]);
		aw.s.send(aOP, b9.a8)
	}, this.aO0 = function(aP5, aP6) {
		b9.a3(20), b9.a4(1, 0), b9.a4(6, 19), b9.a4(1, aP5), b9.a4(12, aP6), aw.s.send(aw.s.zj, b9.a8)
	}, this.aP0 = function(username) {
		b9.a4(5, username.length), bB.uT.ui(username)
	}
}

function aNs() {
	var za, aIq, aP7, aP8 = ["wss://", "/s50/", "/s51/", "/s52/"];

	function aNt() {
		aw.s.aNt(za, aIq)
	}

	function aPD(e) {
		aw.a4o.aO2(za, new Uint8Array(e.data))
	}

	function aPE() {}

	function aNz(e) {
		aw.s.aNz(za, e)
	}
	this.dU = function(e0, aP9) {
		za = e0, aIq = aP9;
		e0 = aP8[0];
		za < aw.s.aCo ? e0 += aw.s.aNh[za] + aP8[1 + dg] : e0 += aw.s.aNh[0] + "/i" + (1 + dg) + (za - aw.s.aCi) + "/", (aP7 = new WebSocket(__fx.customLobby.isActive() && za === 1 ? __fx.customLobby.getSocketURL() : e0)).binaryType =
			"arraybuffer", aP7.onopen = aNt, aP7.onmessage = aPD, aP7.onclose = aNz, aP7.onerror = aPE
	}, this.aPB = function() {
		return aP7.readyState === aP7.CONNECTING
	}, this.aCB = function() {
		return aP7.readyState === aP7.OPEN
	}, this.aNp = function() {
		return this.aPB() || this.aCB()
	}, this.aNq = function(aP9) {
		aIq = aP9
	}, this.aOr = function() {
		return aIq
	}, this.send = function(a8) {
		this.aCB() && aP7.send(a8)
	}, this.close = function(aNw) {
		this.aNp() && (aP7.close(aNw), this.qw())
	}, this.qw = function() {
		aP7.onopen = null, aP7.onmessage = null, aP7.onclose = null, aP7.onerror = null
	}
}

function dD() {
	var aPF = !1,
		a59 = 0,
		a1 = 0,
		rt = 0,
		gap = 0,
		canvas = null,
		wg = null,
		a10 = null;

	function aPH() {
		for (var aPN, aPL = 0, eY = 0, et = Math.floor(a1 / 2), dz = Math.floor(rt / 2), aPM = 1.5 * Math.PI, a7 = a9.vk; 0 <= a7; a7--) eY += a10[a7], 0 === a10[a7] && aPL++;
		if (aPF = !1, wg.clearRect(0, 0, a1, a1), wg.fillStyle = b7.mV, wg.fillRect(0, 0, a1, a1), wg.fillStyle = b7.mY, wg.fillRect(0, 0, a1, gap), wg.fillRect(0, 0, gap, a1), wg.fillRect(a1 - gap, 0, gap, a1), wg.fillRect(0, a1 - gap, a1, gap), 0 <
			eY)
			if (aPL === a9.vk) {
				for (a7 = a9.vk; 0 <= a7; a7--)
					if (0 < a10[a7]) {
						! function(a7, et, dz) {
							wg.fillStyle = bc.aPU[bc.k4[a7]], wg.beginPath(), wg.arc(et, et, dz, 0, 2 * Math.PI), wg.fill()
						}(a7, et, dz);
						break
					}!
				function(et) {
					var fontSize = et / 3;
					wg.font = b6.pO.rP(1, fontSize), wg.fillStyle = b7.mY, wg.fillText("100%", et, et + .1 * fontSize)
				}(et)
			} else {
				for (a7 = 0; a7 <= a9.vk; a7++) 0 < a10[a7] && (! function(a7, et, dz, aPM, aPN) {
					wg.fillStyle = bc.aPU[bc.k4[a7]], wg.beginPath(), wg.arc(et, et, dz, aPM, aPN), wg.lineTo(et, et), wg.fill()
				}(a7, et, dz, aPM, aPN = aPM + 2 * Math.PI * a10[a7] / eY), function(et, dz, aPM, aPN) {
					var f0 = (aPN - aPM) / (2 * Math.PI),
						fontSize = +dz * Math.min(f0, .37);
					fontSize < 8 || (aPM = (aPM + aPN) / 2, aPN = Math.floor(100 * f0 + .5) + "%", dz *= .525 - Math.max(.6 * (f0 - .7), 0), wg.font = b6.pO.rP(1, fontSize), wg.fillStyle = b7.mY, wg.fillText(aPN, et + Math.cos(aPM) * dz, et +
						Math.cos(aPM + 1.5 * Math.PI) * dz))
				}(et, dz, aPM, aPN), 0 !== a7 && aPS(et, dz, aPM), aPM = aPN);
				aPS(et, dz, 1.5 * Math.PI)
			}!
		function(et, dz) {
			wg.beginPath(), wg.arc(et, et, dz, 0, 2 * Math.PI), wg.stroke()
		}(et, dz)
	}

	function aPS(et, dz, aPV) {
		wg.beginPath(), wg.moveTo(et, et), wg.lineTo(et + Math.cos(aPV) * dz, et + Math.cos(aPV + 1.5 * Math.PI) * dz), wg.stroke()
	}
	this.dU = function() {
		if (a9.ie) {
			a59 = 0, a10 = new Uint32Array(a9.vk + 1);
			for (var a7 = a9.vk; 0 <= a7; a7--) a10[a7] = 0;
			for (a7 = ah.jf - 1; 0 <= a7; a7--) a10[bc.eW[ah.jh[a7]]] += 1;
			this.resize()
		} else a10 = wg = canvas = null
	}, this.a5w = function() {
		return a1
	}, this.resize = function() {
		a9.ie && (a1 = Math.floor(u.v.sd() && !a9.m1 ? .18 * at.min : .13 * at.pQ), a1 = (a1 *= 1 + (.5 + .2 * u.v.sd()) * a9.m1) + a1 % 2, rt = Math.floor(7 * a1 / 8), (canvas = canvas || document.createElement("canvas")).width = a1, canvas
			.height = a1, wg = canvas.getContext("2d", {
				alpha: !0
			}), gap = Math.max(1, .015 * a1), wg.lineWidth = gap, wg.strokeStyle = b7.mY, b6.pO.textAlign(wg, 1), b6.pO.textBaseline(wg, 1), aPH())
	}, this.yy = function() {
		var dk, ks = this.kt();
		return bc.k4[ks] || (ks = function() {
			for (var ks = -1, a7 = a9.vk; 1 <= a7; a7--)(-1 === ks || a10[a7] > a10[ks]) && (ks = a7);
			return ks
		}(), dk = ac.gM[kw[0]], -1 !== ks && a10[ks] > dk) ? a10[ks] : dk
	}, this.zM = function() {
		return a59 = 31, this.iS(), this.kt()
	}, this.kt = function() {
		for (var ks = 0, a7 = a9.vk; 0 < a7; a7--) a10[a7] > a10[ks] && (ks = a7);
		return ks
	}, this.ku = function(aPJ) {
		for (var g1 = 0, jg = ah.jh, eW = bc.eW, eY = ah.jf, fC = bK.fC, a7 = 0; a7 < eY; a7++) {
			var g6 = jg[a7];
			eW[g6] === aPJ && (fC[g1++] = g6)
		}
		bK.f4[0] = g1
	}, this.iS = function() {
		if (a9.ie && 32 <= ++a59) {
			a59 = 0;
			for (var a7 = a9.vk; 0 <= a7; a7--) a10[a7] = 0;
			for (a7 = ah.jf - 1; 0 <= a7; a7--) a10[bc.eW[ah.jh[a7]]] += ac.gM[ah.jh[a7]];
			aPF = !0
		}
	}, this.lI = function() {
		a9.ie && aPF && aPH()
	}, this.tJ = function() {
		a9.ie && (a9.m1 ? tK.drawImage(canvas, bY.gap, bY.gap) : tK.drawImage(canvas, bY.gap, a5x + 2 * bY.gap))
	}
}

function cw() {
	function aPX(key) {
		var aMo;
		return "undefined" == typeof URLSearchParams || (aMo = window.location.search, "string" != typeof(aMo = new URLSearchParams(aMo).get(key))) || aMo.length < 1 ? null : aMo
	}
	this.dd = function() {
		if (0 !== u.id) return !1;
		if (! function() {
				var value = aPX("account");
				if (!value && !(value = aPX("a"))) return void bE.clear();
				return bE.clear(), n.o(8, n.rm, new rn(1e3, {
					ro: 0,
					qm: value,
					rl: 0
				})), 1
			}()) {
			var value = aPX("replay");
			if (!this.clear()) return !1;
			if (!value) return !1;
			n.o(3, 0, value)
		}
		return !0
	}, this.clear = function() {
		var zW = new URL(window.location.href);
		zW.search = "";
		try {
			return history.replaceState(null, "", zW.toString()), !0
		} catch (e) {
			console.log("error 352: " + e)
		}
		return !1
	}, this.aJy = function(key, value) {
		if (0 === u.id) try {
			var zW = new URL(window.location.href),
				g6 = zW.searchParams;
			g6.set(key, value), zW.search = g6.toString(), history.replaceState(null, "", zW.toString())
		} catch (e) {
			console.log("error 358: " + e)
		}
	}
}

function cd() {
	var aPZ, g;
	this.dU = function() {
		for (var a7 = (g = new Uint16Array(101)).length - 1; 0 <= a7; a7--) g[a7] = bH.dl(32768 * a7, 100);
		this.a2t(0)
	}, this.value = function(g6) {
		return g[g6]
	}, this.aH9 = function() {
		return bH.dl(aPZ - 1, 2)
	}, this.a2t = function(aGo) {
		aPZ = 2 * aGo % 32768 + 1
	}, this.random = function() {
		return aPZ = 167 * aPZ % 32768
	}, this.iv = function(lQ) {
		return bH.dl(lQ * this.random(), 32768)
	}, this.jW = function(g6) {
		return 0 !== g6 && this.random() < this.value(g6)
	}, this.iE = function(er, es) {
		return er + this.iv(es - er)
	}
}

function cs() {
	this.od = new aPa, this.a34 = new aPb, this.aEZ = new aPc, this.dU = function() {
		a9.gi || this.od.dU()
	}, this.iS = function() {
		a9.gi || (this.od.iS(), 3 !== n.rm) || bb.jb() % 15 != 5 && 2 !== a9.yP || n.aD4().aMp()
	}, this.aMs = function() {
		0 === a9.yP && aW.aCT(), a9.a2o.a3B(), a9.data.canvas = null, aw.s.close(aw.s.zj, 3257), aw.s.zj = 0, a9.data.isReplay = 1, a9.a2r()
	}, this.aMr = function(p5) {
		var a7 = p5.indexOf("=");
		return 0 <= a7 ? p5.substring(a7 + 1) : p5
	}, this.aMq = function(p5) {
		return "https://territorial.io/?replay=" + p5
	}
}

function aPa() {
	this.aPe = null, this.aPf = null, this.aPg = null, this.aPh = null, this.aPi = null, this.aPj = null, this.a33 = "";
	var aPk = 0;
	this.dU = function() {
		this.aPe = [], this.aPf = [], this.aPg = [], this.aPh = [], this.aPi = [0], this.aPj = [0], aPk = 0, this.a33 = ""
	}, this.oe = function(id, fG, fI, fK) {
		a9.gi || 2 === a9.yP || (0 === this.aPi[aPk] && (this.aPj[aPk] ? (this.aPi.push(1), this.aPj.push(0), aPk++) : this.aPi[aPk] = 1), this.aPe.push(id), this.aPf.push(fG), this.aPg.push(void 0 === fI ? 0 : fI), this.aPh.push(void 0 === fK ?
			0 : fK), this.aPj[aPk]++)
	}, this.iS = function() {
		0 === this.aPi[aPk] ? this.aPj[aPk]++ : (this.aPi.push(0), this.aPj.push(0), aPk++)
	}
}

function aPc() {
	var aPl = 0;

	function aPp(p5, id) {
		aPl || (id ? 1 === id ? aJ.a4F = L(374) + ": " + p5 : n.o(4, 3, new p(L(375), p5, 1)) : n.o(4, 3, new p("⚠️ " + L(373), p5, 1)))
	}
	this.un = function(p5, aPm) {
		var pG;
		return aPl = aPm, bC.rp.uf(bC.rp.ud(bC.rp.ub(p5))), aJ.a4F = "", !(! function() {
			if (bD.size < 10) aPp("File Too Small");
			else {
				var aPr = bD.oP(12),
					aP6 = (aPr !== h.rVersion && aPp("Incompatible Version " + aPr + " " + h.rVersion, 1), bD.oP(12)),
					aPs = bD.oP(31);
				if (aPs !== bD.size) aPp("Size Error: " + aPs + " " + bD.size);
				else if (function(j7, aPr) {
						for (var g6 = bD.a8, eY = bD.size, aP6 = aPr, a7 = 3; a7 < eY; a7++) aP6 = aP6 + g6[a7] & 4095;
						return aP6 === j7 || (aPp("Hash Error: " + aP6 + " " + j7 + " " + eY), !1)
					}(aP6, aPr)) return 1
			}
			return
		}() || (aPm = bD, (pG = a9.data = new a2n).mapType = aPm.oP(2), pG.mapProceduralIndex = aPm.oP(8), pG.mapRealisticIndex = aPm.oP(8), pG.mapSeed = aPm.oP(14), pG.mapName = aPm.aPu(5), 2 === pG.mapType && aPm.aPv(), pG
			.passableWater = aPm.oP(1), pG.passableMountains = aPm.oP(1), pG.playerCount = aPm.oP(10), pG.humanCount = aPm.oP(10), pG.selectedPlayer = aPm.oP(9), pG.gameMode = aPm.oP(1), pG.playerMode = aPm.oP(2), pG.battleRoyaleMode =
			aPm.oP(2), pG.numberTeams = aPm.oP(4), pG.isZombieMode = aPm.oP(1), pG.isContest = aPm.oP(1), pG.isReplay = aPm.oP(1), pG.elo = aPm.aPw(2, 14, 2), pG.colorsType = aPm.oP(1), pG.colorsPersonalized = aPm.oP(1), pG.colorsData =
			aPm.aPw(10, 18, 512), pG.selectableColor = aPm.oP(1), pG.teamPlayerCount = aPm.aPw(4, 10, 9), pG.neutralBots = aPm.oP(1), pG.botDifficultyType = aPm.oP(2), pG.botDifficultyValue = aPm.oP(4), pG.botDifficultyTeam = aPm.aPw(4,
				4, 9), pG.botDifficultyData = aPm.aPw(10, 4, 512), pG.spawningType = aPm.oP(2), pG.spawningSeed = aPm.oP(14), pG.spawningData = aPm.aPw(11, 12, 1024), pG.selectableSpawn = aPm.oP(1), pG.playerNamesType = aPm.oP(2), pG
			.playerNamesData = aPm.aPx(10, 5, 512), pG.selectableName = aPm.oP(1), pG.aIncomeType = aPm.oP(2), pG.aIncomeValue = aPm.oP(8), pG.aIncomeData = aPm.aPw(10, 8, 512), pG.tIncomeType = aPm.oP(2), pG.tIncomeValue = aPm.oP(8), pG
			.tIncomeData = aPm.aPw(10, 8, 512), pG.iIncomeType = aPm.oP(2), pG.iIncomeValue = aPm.oP(8), pG.iIncomeData = aPm.aPw(10, 8, 512), pG.sResourcesType = aPm.oP(2), pG.sResourcesValue = aPm.oP(11), pG.sResourcesData = aPm.aPw(10,
				11, 512), ! function() {
				var hf = bD,
					uo = hf.oP(5),
					aPy = hf.oP(30),
					aPz = hf.oP(30);
				if (aPy + aPz > 8 * hf.size) return void aPp("Corrupted File");
				return function(eY) {
						var aQ2 = new Uint8Array(eY),
							aQ3 = new Uint16Array(eY),
							aQ4 = new Uint32Array(eY),
							aQ5 = new Uint32Array(eY);
						b5.od.aPe = aQ2, b5.od.aPf = aQ3, b5.od.aPg = aQ4, b5.od.aPh = aQ5;
						for (var a7 = 0; a7 < eY; a7++) {
							var id = bD.oP(4);
							aQ2[a7] = id, aQ3[a7] = bD.oP(9), 0 === id ? aQ4[a7] = bD.oP(22) : 1 === id ? (aQ4[a7] = bD.oP(10), aQ5[a7] = bD.oP(10)) : 2 === id ? (aQ4[a7] = bD.oP(10), aQ5[a7] = bD.oP(9)) : 3 === id || 4 === id ? (aQ4[
								a7] = bD.oP(10), aQ5[a7] = bD.oP(22)) : 5 === id || 6 === id ? aQ4[a7] = bD.oP(10) : 7 === id ? aQ4[a7] = bD.oP(1) : 10 === id && (aQ4[a7] = bD.oP(20), aQ5[a7] = bD.oP(22))
						}
					}(aPy),
					function(eY, uo) {
						var aPi = new Uint8Array(eY),
							aPj = new Array(eY);
						aPj.fill(0), b5.od.aPi = aPi, b5.od.aPj = aPj;
						for (var a7 = 0; a7 < eY; a7++) aPi[a7] = bD.oP(1), aPj[a7] = bD.oP(uo)
					}(aPz, uo), 1
			}()) || (bD.e0 < 8 * bD.size - 13 || bD.e0 > 8 * bD.size ? (aPp("Out Of Bounds Error: " + bD.e0 + " " + 8 * bD.size), 1) : (b5.od.a33 = p5, 2 === a9.data.mapType && (aPp("Load base64 image...", 2), 1))))
	}, this.aEa = function(aEA, aPq) {
		var a1I = document.createElement("canvas"),
			hH = a1I.getContext("2d");
		if (a1I.width = aEA.width, a1I.height = aEA.height, hH.drawImage(aEA, 0, 0), aPl || aPq) return a9.yP ? void 0 : (a9.data.canvas = a1I, a9.data.mapType = 2, n.r(), void n.o(19));
		b5.aMs()
	}
}

function aPb() {
	this.xt = function() {
		var uo = function() {
				for (var aPj = b5.od.aPj, eY = aPj.length, max = 0, a7 = 0; a7 < eY; a7++) max = Math.max(max, aPj[a7]);
				return uv(Math.max(max, 1))
			}(),
			a1 = (pG = a9.data, (a1 = bA).dU(), a1.a4(12, h.rVersion), a1.e0 += 43, a1.a4(2, pG.mapType), a1.a4(8, pG.mapProceduralIndex), a1.a4(8, pG.mapRealisticIndex), a1.a4(14, pG.mapSeed), a1.aQC(pG.mapName, 5), 2 === pG.mapType && a1.aQD(pG
				.canvas), a1.a4(1, pG.passableWater), a1.a4(1, pG.passableMountains), a1.a4(10, pG.playerCount), a1.a4(10, pG.humanCount), a1.a4(9, pG.selectedPlayer), a1.a4(1, pG.gameMode), a1.a4(2, pG.playerMode), a1.a4(2, pG
				.battleRoyaleMode), a1.a4(4, pG.numberTeams), a1.a4(1, pG.isZombieMode), a1.a4(1, pG.isContest), a1.a4(1, pG.isReplay), a1.db(pG.elo, 2, 14), a1.a4(1, pG.colorsType), a1.a4(1, pG.colorsPersonalized), a1.db(pG.colorsData, 10,
				18), a1.a4(1, pG.selectableColor), a1.db(pG.teamPlayerCount, 4, 10), a1.a4(1, pG.neutralBots), a1.a4(2, pG.botDifficultyType), a1.a4(4, pG.botDifficultyValue), a1.db(pG.botDifficultyTeam, 4, 4), a1.db(pG.botDifficultyData, 10,
				4), a1.a4(2, pG.spawningType), a1.a4(14, pG.spawningSeed), a1.db(pG.spawningData, 11, 12), a1.a4(1, pG.selectableSpawn), a1.a4(2, pG.playerNamesType), a1.aQE(pG.playerNamesData, 10, 5), a1.a4(1, pG.selectableName), a1.a4(2, pG
				.aIncomeType), a1.a4(8, pG.aIncomeValue), a1.db(pG.aIncomeData, 10, 8), a1.a4(2, pG.tIncomeType), a1.a4(8, pG.tIncomeValue), a1.db(pG.tIncomeData, 10, 8), a1.a4(2, pG.iIncomeType), a1.a4(8, pG.iIncomeValue), a1.db(pG
				.iIncomeData, 10, 8), a1.a4(2, pG.sResourcesType), a1.a4(11, pG.sResourcesValue), a1.db(pG.sResourcesData, 10, 11), ! function(uo) {
				var a1 = bA,
					aPe = b5.od.aPe,
					fG = b5.od.aPf,
					fI = b5.od.aPg,
					fK = b5.od.aPh,
					eY = aPe.length;
				a1.a4(5, uo), a1.a4(30, eY), a1.a4(30, b5.od.aPj.length);
				for (var a7 = 0; a7 < eY; a7++) {
					var et = aPe[a7];
					a1.a4(4, et), a1.a4(9, fG[a7]), 0 === et ? a1.a4(22, fI[a7]) : 1 === et ? (a1.a4(10, fI[a7]), a1.a4(10, fK[a7])) : 2 === et ? (a1.a4(10, fI[a7]), a1.a4(9, fK[a7])) : 3 === et || 4 === et ? (a1.a4(10, fI[a7]), a1.a4(22, fK[
						a7])) : 5 === et || 6 === et ? a1.a4(10, fI[a7]) : 7 === et ? a1.a4(1, fI[a7]) : 10 === et && (a1.a4(20, fI[a7]), a1.a4(22, fK[a7]))
				}
			}(uo), ! function(uo) {
				for (var a1 = bA, aPi = b5.od.aPi, aPj = b5.od.aPj, eY = aPi.length, a7 = 0; a7 < eY; a7++) a1.a4(1, aPi[a7]), a1.a4(uo, aPj[a7])
			}(uo), bA.e0),
			pG = bH.dl(a1 - 1, 6) + 1,
			uo = (b9.aOa(6 * pG) !== bA.g.length && bA.g.push(0), ! function() {
				var a1 = bA;
				a1.e0 = 24, a1.a4(31, a1.g.length), a1.e0 = 12, a1.a4(12, function() {
					for (var g = bA.g, eY = g.length, aP6 = h.rVersion, a7 = 3; a7 < eY; a7++) aP6 = aP6 + g[a7] & 4095;
					return aP6
				}())
			}(), bD.dU(bA.g), bB.rp.rq(bB.rp.rr(pG)));
		return bD.zq(), bA.dU(), uo
	}
}

function ci() {
	var et, bo = !1,
		aQG = !1,
		aQH = -1e4,
		aQI = -1,
		aQJ = 0;

	function resize(aQN) {
		et = 0, aX.sA() && (aQL(aQN) || bo) && (bo = !1, bY.resize(), bS.a9Z.resize(), aU.dU(), bU.dU(), aV.resize(), aP.resize(), aK.resize(), n.resize(), 1 <= a9.yP ? (aR.resize(!1), aQ.resize(), aS.resize(), aO.resize(), aN.resize(), aJ.resize(),
			aI.resize(), b8.resize(), aq.resize(), aL.resize(), aM.resize(), aH.resize(), ba.resize(), ab.resize(), aT.resize(), bd.resize(), aO.a6y()) : (aW.aCV(), aW.aCW()), bb.dc = !0)
	}

	function aQK(f0) {
		return f0 && 128 < f0 ? Math.floor(f0) : 128
	}

	function aQL(aQN) {
		var a1, j7, aQP, rt, a6N;
		if (!(0 < at.rW)) return rt = aQK(document.documentElement.clientWidth), a6N = aQK(window.visualViewport && 2 !== u.id ? window.visualViewport.height : document.documentElement.clientHeight), a1 = rt, j7 = a6N, aQP = 0 !== u.id || a1 < j7 ?
			700 : 1200, aQP = Math.min(aQP / ((a1 + j7) / 2), 1), aQP = 0 === bf.dp.data[1].value ? 2 * aQP / 3 : Math.min(aQP + (bf.dp.data[1].value - 1) * (1 - aQP) / 2, 1), at.pU = (window.devicePixelRatio || 1) * aQP, __fx.hoveringTooltip
			.canvasPixelScale = at.pU, aQN && !aQG ? (aQG = !0, document.body.removeChild(zz)) : aQG && (aQG = !1, document.body.appendChild(zz)), a1 = Math.floor(.5 + rt * at.pU), j7 = Math.floor(.5 + a6N * at.pU), a1 !== at.a1 || j7 !== at.j7 ?
			(at.a1 = a1, at.j7 = j7, at.min = a9D(a1, j7), at.max = a4U(a1, j7), at.pQ = bH.dl(a1 + j7, 2), at.tG = a1 / j7, zz.width = a1, zz.height = j7, zz.style.width = rt + "px", zz.style.height = a6N + "px", aQI = bb.lo + 1e3, 1) : void 0
	}
	this.a1 = 0, this.j7 = 0, this.min = 0, this.max = 0, this.pQ = 0, this.tG = 1, this.pU = 1, this.rW = 0, this.dV = function() {
		this.a1 = aQK(document.documentElement.clientWidth) + 2, this.j7 = aQK(document.documentElement.clientHeight) + 2
	}, this.dU = function() {
		et = 1, zz = document.getElementById("canvasA"), (tK = zz.getContext("2d", {
			alpha: __fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aQL(0)
	}, this.iS = function() {
		ay.iS(), 50 <= ++et && resize(0), -1 === aQI || bb.lo < aQI || (aQI = -1, 2e3 * ++aQJ >= bb.lo + 8e3 ? console.log("error 3748") : u.v.setState(15))
	}, this.df = function(hU) {
		bo = !0, resize(hU)
	}, this.a0f = function() {
		aQH + 1e3 > bb.lo || (aQH = bb.lo, resize(0))
	}
}

function dA() {
	this.aOo = new aQR, this.yw = new aQS
}

function aQS() {
	this.yx = function() {
		for (var g6, eY = ah.jf, yG = ah.jh, z2 = ac.z2, aQT = this.aDt(), a7 = 0; a7 < eY; a7++) g6 = yG[a7], aY.yI(g6) && (z2[g6] = aQT);
		var ok = ac.ok,
			ia = ac.ia,
			ib = ac.ib,
			z6 = ac.z6,
			eY = a9.je;
		for (a7 = 0; a7 < eY; a7++)(0 === z6[a7] || ib[a7] < 1 || 2 * ok[a7] > 3 * (ia[a7] + ib[a7])) && (z2[a7] = 0);
		var yp = 0;
		for (a7 = 0; a7 < eY; a7++) yp += 0 < z2[a7];
		return yp
	}, this.aDt = function() {
		return Math.min(65535, bb.jb())
	}
}

function aQR() {
	function aQX(g, f0, k3) {
		for (var a7 = 0; a7 < 256; a7++) g[a7] = (g[a7] + (f0 >> (a7 + k3) % 30 & 1)) % 256
	}
	this.iS = function(aQU, aQV) {
		var g = new Uint8Array(256);
		return function(g, aQU, aQV) {
				var a7, aQZ = 3 + (4 + aQU) % 32768,
					aQa = 12 + aQV % 32768,
					aQb = 17 + ((aQU & aQV) + (aQU | aQV) + aQU) % 32768;
				for (a7 = 0; a7 < 256; a7++) aQZ = 1 + aQZ * aQa % aQb, g[a7] = aQZ % 256
			}(g, aQU, aQV), aQX(g, aQU, 2), aQX(g, aQV, 7),
			function(g) {
				var a7, f0, e0 = 0;
				for (a7 = 0; a7 < 3e4; a7++) f0 = g[e0], g[e0] = (f0 + a7 + g[(e0 + a7) % 256]) % 256, e0 = (f0 + a7 + e0 + (f0 & e0)) % 256
			}(g),
			function(g) {
				var a7, a6N = 1,
					sW = 1;
				for (a7 = 0; a7 < 256; a7 += 2) a6N = (1 + a6N) * (g[a7] + 1) % 1073741824, sW = (1 + sW) * (g[a7 + 1] + 1) % 1073741824;
				return [a6N, sW]
			}(g)
	}
}

function cf() {
	var aQc, aQd, h1, aQe;
	this.dU = function() {
		var a7, ef, eh, aP1, aQf, a1, j7, wg, hE, v5, f0, g6, eo, er, a3d;
		if (function() {
				if (h1 = !0, aQe = "rgb(" + bO.v3[0] + "," + bO.v3[1] + "," + bO.v3[2] + ")", bO.aGw(bO.eE)) return 1;
				return h1 = !1, 0
			}()) aQd = null;
		else {
			for (aQc = bH.dl(96, 4), aQf = 1 === bO.eE ? (aP1 = 0, 160) : (aP1 = 128, 32), aQe = "rgb(" + aP1 + "," + aP1 + "," + aP1 + ")", aQd = new Array(4), a7 = 3; 0 <= a7; a7--) {
				if (aQd[a7] = document.createElement("canvas"), a1 = a7 % 2 == 0 ? bO.ej : aQc, j7 = a7 % 2 == 0 ? aQc : bO.ek + 2 * aQc, aQd[a7].width = a1, aQd[a7].height = j7, v5 = (hE = (wg = aQd[a7].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, a1, j7)).data, a7 % 2 == 0)
					for (eh = aQc - 1; 0 <= eh; eh--)
						for (f0 = aQf + Math.floor((eh + 1) * (aP1 - aQf) / (aQc + 1)), ef = a1 - 1; 0 <= ef; ef--) v5[g6 = 4 * ((0 === a7 ? aQc - eh - 1 : eh) * a1 + ef)] = f0, v5[g6 + 1] = f0, v5[g6 + 2] = f0, v5[g6 + 3] = 255;
				else {
					for (ef = aQc - 1; 0 <= ef; ef--)
						for (f0 = aQf + Math.floor((ef + 1) * (aP1 - aQf) / (aQc + 1)), eh = j7 - 1 - aQc; aQc <= eh; eh--) v5[g6 = 4 * (eh * a1 + (3 === a7 ? aQc - ef - 1 : ef))] = f0, v5[g6 + 1] = f0, v5[g6 + 2] = f0, v5[g6 + 3] = 255;
					for (er = 1; 0 <= er; er--)
						for (ef = aQc - 1; 0 <= ef; ef--)
							for (eh = aQc - 1; 0 <= eh; eh--) eo = (Math.pow(ef * ef + eh * eh, .5) + 1) / (aQc + 1), f0 = aQf + Math.floor((1 < eo ? 1 : eo) * (aP1 - aQf)), v5[g6 = 4 * ((0 === er ? aQc - eh - 1 : eh + er * (j7 - aQc)) * a1 + (
								1 === a7 ? ef : aQc - ef - 1))] = f0, v5[g6 + 1] = f0, v5[g6 + 2] = f0, v5[g6 + 3] = 255
				}
				wg.putImageData(hE, 0, 0)
			}
			a3d = aQf, bO.uy.fillStyle = "rgb(" + a3d + "," + a3d + "," + a3d + ")", bO.uy.fillRect(0, 0, bO.ej, 1), bO.uy.fillRect(0, bO.ek - 1, bO.ej, 1), bO.uy.fillRect(0, 0, 1, bO.ek), bO.uy.fillRect(bO.ej - 1, 0, 1, bO.ek)
		}
	}, this.wa = function() {
		var er = h1 ? 0 : -aQc;
		aIZ(er, er, bO.ej - 2 * er, bO.ek - 2 * er, bW.aQi, bW.aQj, bW.aQk, bW.aQl) || (tK.fillStyle = aQe, tK.fillRect(0, 0, at.a1, at.j7))
	}, this.tJ = function() {
		h1 || (aIY(0, -aQc, bO.ej, aQc, bW.aQi, bW.aQj, bW.aQk, bW.aQl) && tK.drawImage(aQd[0], bW.aQm, bW.aQn - aQc), aIY(bO.ej, -aQc, aQc, bO.ek + 2 * aQc, bW.aQi, bW.aQj, bW.aQk, bW.aQl) && tK.drawImage(aQd[1], bW.aQm + bO.ej, bW.aQn - aQc),
			aIY(0, bO.ek, bO.ej, aQc, bW.aQi, bW.aQj, bW.aQk, bW.aQl) && tK.drawImage(aQd[2], bW.aQm, bW.aQn + bO.ek), aIY(-aQc, -aQc, aQc, bO.ek + 2 * aQc, bW.aQi, bW.aQj, bW.aQk, bW.aQl) && tK.drawImage(aQd[3], bW.aQm - aQc, bW.aQn - aQc))
	}
}

function cz() {
	this.h2 = new aQo, this.aDr = new aQp, this.wd = new aQq, this.s = new aQr, this.i4 = new aQs, this.a3d = new aQt, this.aQu = new aQv, this.jS = new aQw, this.kK = new aQx, this.aQy = new aQz, this.dU = function() {
		this.wd.dU(), this.s.dU(), this.i4.dU(), this.a3d.dU(), this.aQy.dU()
	}, this.tJ = function() {
		this.aQy.tJ(), this.wd.tJ()
	}
}

function aQw() {
	this.iS = function(player) {
		var oa;
		return !!a9.data.passableWater && 0 !== ac.gF[player].length && bJ.s.ob !== bJ.s.jv && !((oa = bJ.s.oa[player]) >= aA.jv[aA.im[player]] || oa === bJ.s.oo || !b6.fu.oi(player, aA.jt[aA.im[player]], 32, 0) || !aj.iH.iS(player) && !aj.iJ.iS(
			player) || ! function(a1q) {
			var aR2 = bK.fA[1] + bI.hJ[bK.fA[2] - 1] << 2;
			if (aY.eP(aR2)) return 1;
			return aR2 = aY.eQ(aR2), a1q !== aR2 && !!eR(a1q, aR2)
		}(player)) && function(player) {
			return b6.fu.ol(player), bJ.s.or(player), !0
		}(player)
	}
}

function aQo() {
	function aRA(a7, kk, kl) {
		var aRC, aRB;
		if (!(a7 < 0)) return aRB = bJ.s.lx[a7], aRC = bI.hi(aRB), aRB = bI.hl(aRB), a7 = 20 * (.9 + .1 * Math.log10(bJ.s.a4n[a7])), a7 = Math.max(a7, bI.hy(b6.pO.s7(.02, 1.7))), bH.aIg(bI.hh(kk), bI.hk(kl), aRC, aRB, a7)
	}

	function aR4(aR3) {
		var aRF = 4 + .03 * (1 + 1.5 * u.v.sd()) * at.pQ / hw;
		return bI.hm(aR3, bK.fA[1]) < aRF
	}
	this.h3 = function(player, aR3) {
		return !!(a9.data.passableWater && bI.hz(aR3) && bJ.s.ob !== bJ.s.jv && bJ.s.oa[player] !== bJ.s.oo && 0 !== ac.gF[player].length && bJ.kK.kL(player, aR3) && aR4(aR3))
	}, this.nu = function(player, lu, aR3) {
		return !!(bI.hz(aR3) && this.os(player, lu) && bJ.kK.ot(aR3) && aR4(aR3))
	}, this.os = function(player, id) {
		for (var aR5, s3 = player << 3, s4 = s3 + bJ.s.oa[player], aR6 = bJ.s.aR6, aR7 = bJ.s.aR7, a7 = s3; a7 < s4; a7++)
			if (id === aR7[aR5 = aR6[a7]]) return bK.fA[3] = aR5, !0;
		return !1
	}, this.nt = function(eK) {
		var a3e = bJ.a3d.a3e;
		return !!this.os(a9.eI, a3e) && (b4.gv.nt(a3e, eK), !0)
	}, this.a3g = function(kk, kl) {
		var player = a9.eI,
			eY = bJ.s.oa[player];
		if (0 === eY) return !1;
		for (var aR6 = bJ.s.aR6, lx = bJ.s.lx, s3 = player << 3, aR8 = 80, aKh = -1, a7 = s3 + eY - 1; s3 <= a7; a7--) {
			var aR9 = aR6[a7],
				eo = bI.hc(kk, kl, lx[aR9]);
			eo < aR8 && (aR8 = eo, aKh = aR9)
		}
		return !!aRA(aKh, kk, kl) && (bJ.a3d.a3e = bJ.s.aR7[aKh], bi.oq.a3g(), !0)
	}, this.a3n = function(kk, kl) {
		var eY = bJ.s.ob;
		if (eY < 1) return -1;
		for (var lx = bJ.s.lx, aR8 = 80, aKh = -1, a7 = 0; a7 < eY; a7++) {
			var eo = bI.hc(kk, kl, lx[a7]);
			eo < aR8 && (aR8 = eo, aKh = a7)
		}
		return aRA(aKh, kk, kl) ? aKh : -1
	}, this.lw = function(player, id) {
		for (var s3 = player << 3, s4 = s3 + bJ.s.oa[player], aR7 = bJ.s.aR7, aR6 = bJ.s.aR6, a7 = s3; a7 < s4; a7++) {
			var aR9 = aR6[a7];
			if (aR7[aR9] === id) return aR9
		}
		return -1
	}, this.aDo = function(player) {
		for (var s3 = player << 3, s4 = s3 + bJ.s.oa[player], aR6 = bJ.s.aR6, a4n = bJ.s.a4n, im = 0, a7 = s3; a7 < s4; a7++) im += a4n[aR6[a7]];
		return im
	}, this.m2 = function(player) {
		return 0 === bJ.s.oa[player] ? -1 : bJ.s.aR6[player << 3]
	}
}

function aQp() {
	this.aDs = function(player) {
		for (var aR6 = bJ.s.aR6, s3 = player << 3, a7 = s3 + bJ.s.oa[player] - 1; s3 <= a7; a7--) this.aRG(aR6[a7])
	}, this.aRG = function(aRH) {
		var s = bJ.s,
			aRI = s.ob - 1,
			aRJ = s.a4m[aRH],
			aRK = s.aRL[aRH],
			aRM = s.lx[aRH];
		s.ob = aRI, s.a4m[aRH] = s.a4m[aRI], s.aRN[aRH] = s.aRN[aRI], s.aRO[aRH] = s.aRO[aRI], s.lx[aRH] = s.lx[aRI], s.aRP[aRH] = s.aRP[aRI], s.a4n[aRH] = s.a4n[aRI], s.aRL[aRH] = s.aRL[aRI], s.aR7[aRH] = s.aR7[aRI], s.aRQ[aRH] = s.aRQ[aRI], s
			.aRR[aRH] = s.aRR[aRI], s.aRS[aRH] = s.aRS[aRI], s.aR6[s.a4m[aRH]] = aRH,
			function(aPV) {
				var player = aPV >> 3,
					s = bJ.s,
					eY = s.oa[player] - 1,
					aRV = (player << 3) + eY;
				s.oa[player] = eY, aRV !== aPV && (s.aR6[aPV] = s.aR6[aRV], s.a4m[s.aR6[aPV]] = aPV)
			}(aRJ), bJ.i4.i4[bI.i3(s.lx[aRH])][s.aRL[aRH]] = aRH, aRI = bI.i3(aRM), aRJ = aRK, aRI = bJ.i4.i4[aRI], s = aRI.pop(), aRJ !== aRI.length && (aRI[aRJ] = s, bJ.s.aRL[s] = aRJ)
	}
}

function aQq() {
	var aRX, x4 = 8,
		aRY = new Array(2);

	function aRZ(e0) {
		var hB = x4 + 4,
			a1I = b6.pO.uu(hB, hB),
			hH = b6.pO.getContext(a1I, !0),
			hE = b6.pO.getImageData(hH, hB, hB),
			v5 = hE.data;
		return aRa(v5, hB + 1, e0), aRa(v5, hB + 2, e0), aRa(v5, 2 * hB + 1, e0), aRa(v5, 2 * hB - 3, e0), aRa(v5, 2 * hB - 2, e0), aRa(v5, 3 * hB - 2, e0), aRa(v5, hB * (hB - 3) + 1, e0), aRa(v5, hB * (hB - 2) + 1, e0), aRa(v5, hB * (hB - 2) + 2,
			e0), aRa(v5, hB * (hB - 2) - 2, e0), aRa(v5, hB * (hB - 1) - 3, e0), aRa(v5, hB * (hB - 1) - 2, e0), hH.putImageData(hE, 0, 0), a1I
	}

	function aRa(v5, eK, e0) {
		eK *= 4;
		v5[eK] = 255, v5[1 + eK] = 255, v5[2 + eK] = e0, v5[3 + eK] = 255
	}

	function uu(player) {
		var a1I = b6.pO.uu(x4, x4);
		return function(hH, player) {
			var ef, eh, hg, eK, aRc, aRd, hB = x4,
				hE = b6.pO.getImageData(hH, hB, hB),
				v5 = hE.data,
				kP = (hB >> 1) - .5,
				aQe = aY.a5M(player),
				aRf = b6.pY.a0t(aQe, .5);
			b6.pY.a0v(aQe, aRf, 300) || b6.pY.a0x(aQe, 100);
			for (eh = 0; eh < hB; eh++)
				for (ef = 0; ef < hB; ef++) aRd = (hB - 1.5) * (hB - 1.5) / 4, aRc = (hg = (hg = ef - kP) * hg + (hg = eh - kP) * hg) <= (hB - 4.5) * (hB - 4.5) / 4 ? aRf : aQe, v5[eK = 4 * (eh * hB + ef)] = aRc[0], v5[1 + eK] = aRc[1], v5[2 +
					eK] = aRc[2], v5[3 + eK] = aRd < hg ? 0 : 255;
			hH.putImageData(hE, 0, 0)
		}(b6.pO.getContext(a1I, !0), player), a1I
	}
	this.dU = function() {
		aRX = new Array(a9.eV), aRY[0] = aRZ(255), aRY[1] = aRZ(0)
	}, this.tJ = function() {
		var a7, player, aRg, aIh, im, hf, aRi, aRk, aRl, lx = bJ.s.lx,
			a4m = bJ.s.a4m,
			a4n = bJ.s.a4n,
			aRR = bJ.s.aRR,
			aRm = aRX,
			aRn = a9.eI,
			aRo = -1,
			eY = bJ.s.ob,
			aRp = at.a1,
			aRq = at.j7,
			aRr = bO.ej << 4,
			eN = hw,
			eC = eN / x4,
			ly = hv / eN,
			lz = hx / eN,
			hg = (aRp + hv) / eN - ly,
			hj = (aRq + hx) / eN - lz,
			hH = tK;
		for (bJ.h2.os(a9.eI, bJ.a3d.a3e) && (aRo = bK.fA[3]), hH.imageSmoothingEnabled = eN < 9, b6.pO.textAlign(hH, 1), b6.pO.textBaseline(hH, 1), a7 = 0; a7 < eY; a7++) player = a4m[a7] >> 3, im = a4n[a7], aRg = .9 + .1 * Math.log10(im), aIh =
			(hf = lx[a7]) % aRr / 16 - aRg, hf = aRq * (Math.floor(hf / aRr) / 16 - aRg - lz) / hj, aRi = -2 * (aRl = eN * aRg) * (1 + (aRk = +(player === aRn)) / 8), aRk = aRk * aRl / 4, (aRl = aRp * (aIh - ly) / hg) < aRi || hf < aRi || aRp +
			aRk < aRl || aRq + aRk < hf || (aIh = 2 * aRg * eC, aRi = aRg * eN, void 0 === (aRk = aRm[player]) && (aRm[player] = aRk = uu(player)), player === aRn && (hH.setTransform(aIh, 0, 0, aIh, aRl - 2 * aIh, hf - 2 * aIh), hH.drawImage(aRY[
				+(a7 === aRo)], 0, 0)), hH.setTransform(aIh, 0, 0, aIh, aRl, hf), hH.drawImage(aRk, 0, 0), (aRg = Math.floor(function(im) {
				if (im < 1e3) return .42;
				if (im < 1e4) return .34;
				if (im < 1e6) return .26;
				if (im < 1e8) return .19;
				return .15
			}(im) * aRi)) < 6) || (hH.setTransform(1, 0, 0, 1, 0, 0), hH.fillStyle = aRR[a7] ? b7.n5 : b7.mY, hH.font = b6.pO.rP(1, aRg), hH.fillText(b6.zC.xi(im), aRl + aRi, hf + aRi + .1 * aRg));
		hH.imageSmoothingEnabled = !1, hH.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aQz() {
	var a1I;
	this.dU = function() {
		a1I = a1I || bL.s.aRu(20, bc.aRv[7])
	}, this.tJ = function() {
		var mI = hw;
		if (!(5 <= mI)) {
			var aRp = at.a1,
				aRq = at.j7,
				ly = hv / mI,
				lz = hx / mI,
				mB = (aRp + hv) / mI,
				mC = (aRq + hx) / mI,
				g7 = -20 * mI,
				aRw = .5 * g7,
				aRr = bO.ej << 4,
				eY = bJ.s.ob,
				lx = bJ.s.lx,
				aRx = a1I,
				hH = tK;
			3 < mI && (hH.globalAlpha = .5 * (5 - mI));
			for (var a7 = 0; a7 < eY; a7++) {
				var hf = lx[a7],
					ef = aRp * (hf % aRr / 16 - ly) / (mB - ly) + aRw,
					hf = aRq * (Math.floor(hf / aRr) / 16 - lz) / (mC - lz) + aRw;
				aRp < ef || aRq < hf || ef < g7 || hf < g7 || (hH.setTransform(mI, 0, 0, mI, ef, hf), hH.drawImage(aRx, 0, 0))
			}
			hH.globalAlpha = 1, hH.setTransform(mI, 0, 0, mI, 0, 0)
		}
	}
}

function aQv() {
	this.iS = function() {
		for (var aRB, aQu, aRQ = bJ.s.aRQ, lx = bJ.s.lx, aRO = bJ.s.aRO, a7 = bJ.s.ob - 1; 0 <= a7; a7--) aRB = lx[a7], 0 !== (aQu = aRQ[a7]) && aRB === aRO[a7] && (! function(a7, aS1, hT) {
			var il, player = bJ.s.a4m[a7] >> 3,
				hT = aS1 + bI.hJ[hT] << 2,
				a7 = bJ.s.a4n[a7];
			if (bZ.aS2(player), aY.eP(hT)) il = a9.eV;
			else {
				if ((il = aY.eQ(hT)) === player) return hT = b6.fu.fx(player, a7), bZ.fy(player, a7 - hT, 12);
				if (!eR(player, il)) return b4.jj.oA(player, il, a7)
			}
			aZ.iz(player, il) || aZ.jI(player) ? (ac.g0[player].push(aS1 << 2), aZ.ii(player, a7, il), aB.ij(player, !0)) : bZ.fy(player, a7, 12)
		}(a7, bI.i2(aRB), aQu - 1), bJ.aDr.aRG(a7))
	}, this.aS3 = function(player, eK, hT, lu) {
		if (0 !== hT) {
			var aRn = a9.eI;
			if (b6.fu.gl(aRn) && eR(player, aRn) && player !== aRn && 0 !== ac.gF[aRn].length) {
				var aR2 = eK + bI.hJ[--hT] << 2;
				if (aY.eP(aR2) || eR(player, aY.eQ(aR2))) {
					for (var em = !1, a7 = 0; a7 < 4; a7++)
						if (aR2 = eK + bI.hJ[a7] << 2, aY.eT(aR2) && !aY.eP(aR2) && aY.eQ(aR2) === aRn) {
							em = !0;
							break
						} em && (aJ.a3f(719, 0), aJ.yn(180, L(376, [ac.a4d[player]]), 719, player, b7.n4, b7.mV, -1, !0, void 0, {
						es: 1,
						lu: lu
					}))
				}
			}
		}
	}
}

function aQr() {
	this.aS4 = null, this.jv = 512, this.oo = 8, this.ob = 0, this.aS5 = 0, this.a4m = new Uint16Array(this.jv), this.aRN = new Uint32Array(this.jv), this.aRO = new Uint32Array(this.jv), this.lx = new Uint32Array(this.jv), this.aRP = new Uint16Array(
			this.jv), this.a4n = new Uint32Array(this.jv), this.aRL = new Uint16Array(this.jv), this.aR7 = new Uint16Array(this.jv), this.aRQ = new Uint8Array(this.jv), this.aRR = new Uint8Array(this.jv), this.aRS = new Uint32Array(this.jv), this
		.oa = new Uint8Array(a9.eV), this.aR6 = new Uint16Array(this.oo * a9.eV), this.dU = function() {
			this.aS5 = 0, this.ob = 0, this.aS4 = new Uint8Array(bO.ej + bO.ek), this.oa.fill(0)
		}, this.or = function(player) {
			var eY = this.ob,
				aS6 = bI.i1(bK.fA[0]),
				aS7 = this.oa[player],
				aS8 = (player << 3) + aS7,
				im = (this.a4m[eY] = aS8, this.aRN[eY] = aS6, this.lx[eY] = aS6, this.aRO[eY] = bI.i1(bK.fA[1]), this.aRP[eY] = 0, bK.f6[0]);
			im < 60 ? (b6.fu.fv(player, 60 - im), this.a4n[eY] = 60) : this.a4n[eY] = im, this.aRL[eY] = bJ.i4.or(eY, bI.i3(aS6)), this.aR7[eY] = this.aS5, this.aRQ[eY] = bK.fA[2], this.aRR[eY] = 0, this.aRS[eY] = 0, this.aS5 = this.aS5 + 1 & 1023,
				this.aR6[aS8] = eY, this.oa[player] = aS7 + 1, this.ob++, bJ.aQu.aS3(player, bK.fA[1], bK.fA[2], this.aR7[eY])
		}, this.nt = function() {
			var aR5 = bK.fA[3];
			this.aRN[aR5] = this.lx[aR5], this.aRO[aR5] = bI.i1(bK.fA[1]), this.aRP[aR5] = 0, this.aRQ[aR5] = bK.fA[2], bJ.aQu.aS3(this.a4m[aR5] >> 3, bK.fA[1], bK.fA[2], this.aR7[aR5])
		}, this.iS = function() {
			bJ.aQu.iS();
			var a7, g6 = a9.eI,
				dk = bJ.h2.aDo(g6),
				rG = (! function(rG) {
					var a7, aSD, aSE, aSF, aSG, aS6, aSK, aSL, eb, g7, aRN = rG.aRN,
						aRO = rG.aRO,
						lx = rG.lx,
						a4n = rG.a4n,
						aRR = rG.aRR,
						aRP = rG.aRP,
						aRL = rG.aRL,
						gM = ac.gM,
						a4m = rG.a4m,
						rG = rG.ob,
						aRr = bO.ej << 4;
					for (a7 = rG - 1; 0 <= a7; a7--) aSE = lx[a7], aSD = aRO[a7], aSE !== aSD && (aS6 = aRN[a7], aSK = aSD % aRr - (aSG = aS6 % aRr), aSL = ~~((aSD + .5) / aRr) - (aS6 = ~~((aS6 + .5) / aRr)), eb = ~~Math.sqrt(aSK * aSK + aSL *
						aSL + .5), g7 = 15e4 + 25e3 * bH.log10(a4n[a7]), g7 += 5e4 * !gM[a4m[a7] >> 3], aRR[a7] && (g7 = bH.dl(g7, 5)), 65535 <= (g7 = aRP[a7] + Math.max(~~((g7 + .5) / eb), 1)) ? lx[a7] = aSF = aSD : (aRP[a7] = g7, lx[
						a7] = aSF = aSG + bH.dl(g7 * aSK, 65536) + aRr * (aS6 + bH.dl(g7 * aSL, 65536))), aRL[a7] = bJ.i4.aSN(aRL[a7], aSE, aSF))
				}(this), ! function(rG) {
					if (bb.jb() % 2 == 1) {
						var a7, k3, kP, es, et, aSO, xO, aSP, gy, hN, ly, lz, aS6, aSQ, aSR, aSS, vD, eY = rG.ob,
							lx = rG.lx,
							a4m = rG.a4m,
							a4n = rG.a4n,
							aRS = rG.aRS,
							aRR = rG.aRR,
							i4 = bJ.i4.i4,
							aSU = i4.length,
							aSV = bJ.i4.aSV,
							aRr = bO.ej << 4,
							aSW = a9.ie,
							aPJ = bc.eW,
							g7 = (eY - 1) * (bH.dl(bb.jb(), 2) % 2);
						for (a7 = 0; a7 < eY; a7++)
							for (k3 = Math.abs(a7 - g7), aS6 = lx[k3], kP = bI.i3(aS6), gy = a4m[k3] >> 3, ly = aS6 % aRr, lz = ~~((aS6 + .5) / aRr), aSS = a4n[k3], es = 0; es < 9; es++)
								if (!((aSO = kP + aSV[es]) < 0 || aSU <= aSO))
									for (aSP = i4[aSO], xO = aSP.length, et = 0; et < xO; et++) aSQ = aSP[et], vD = a4m[aSQ] >> 3, gy == vD || aSW && aPJ[gy] === aPJ[vD] && aPJ[gy] || (vD = lx[aSQ], (hN = ly - vD % aRr) * hN + (hN = lz - ~~((vD +
										.5) / aRr)) * hN < 14400 && ((vD = a4n[aSQ]) <= aSS ? aSR = Math.max(1, bH.dl(vD + bH.dl(aSS - vD, 10), 10)) : (aSR = Math.max(1, bH.dl(aSS, 10)), aRS[aSQ] = Math.min(aRS[aSQ] + aSR, 4294967295)),
										a4n[aSQ] = Math.max(vD - aSR, 0), aRR[aSQ] = 4))
					}
				}(this), ! function(rG) {
					if (bb.jb() % 5 == 3) {
						var a7, im, a4n = rG.a4n,
							gM = ac.gM,
							a4m = rG.a4m,
							aRS = rG.aRS,
							aRR = rG.aRR,
							eY = rG.ob;
						for (a7 = 0; a7 < eY; a7++) im = a4n[a7], gM[a4m[a7] >> 3] ? a4n[a7] = Math.max(im - Math.max(1, im >> 7), 0) : (a4n[a7] = Math.max(im - Math.max(1, im >> 11), 0), aRR[a7] || (im = aRS[a7]) && (im = Math.max(im >> 3, 1),
							a4n[a7] = Math.min(a4n[a7] + (im << 1), 4294967295), aRS[a7] -= im))
					}
				}(this), this),
				a4n = rG.a4n,
				aRR = rG.aRR;
			for (a7 = rG.ob - 1; 0 <= a7; a7--) aRR[a7] = aRR[a7] >> 1, 0 === a4n[a7] && bJ.aDr.aRG(a7);
			bZ.fy(g6, dk - bJ.h2.aDo(g6), 15)
		}
}

function aQs() {
	this.aSX = 32, this.ef = 0, this.eh = 0, this.i5 = 0, this.aSY = 0, this.aSZ = 4, this.i4 = null, this.aSV = new Int16Array(9), this.dU = function() {
		this.i5 = 1 + bH.dl(bO.ej - 1, this.aSX), this.aSY = 1 + bH.dl(bO.ek - 1, this.aSX), this.i4 = new Array(this.i5 * this.aSY), b6.pY.a0s(this.i4);
		var ef, eh, aSV = this.aSV,
			a1 = this.i5;
		for (ef = -1; ef <= 1; ef++)
			for (eh = -1; eh <= 1; eh++) aSV[3 * (1 + eh) + 1 + ef] = eh * a1 + ef
	}, this.or = function(aSb, a7) {
		return this.i4[a7].push(aSb), this.i4[a7].length - 1
	}, this.aSN = function(aSc, aS6, aSD) {
		var aSd, aSe, aS6 = bI.i3(aS6),
			aSD = bI.i3(aSD);
		return aS6 === aSD ? aSc : (aSd = this.i4[aS6].pop(), this.i4[aS6].length === aSc ? this.or(aSd, aSD) : (aSe = this.i4[aS6][aSc], this.i4[aS6][aSc] = aSd, bJ.s.aRL[aSd] = aSc, this.or(aSe, aSD)))
	}
}

function aQx() {
	function zm(aSD, aSf) {
		if (! function(aSD, aR3) {
				var hM = bI.i2(aSD),
					aSj = Math.abs(bI.eg(aR3) - bI.eg(hM)),
					hM = Math.abs(bI.ei(aR3) - bI.ei(hM));
				return 0 !== Math.max(aSj, hM) && (function(aS6, aSD, aSj, aSk) {
					var aSm = bI.hi(aS6),
						aS6 = bI.hl(aS6),
						aSo = bI.hi(aSD),
						aSD = bI.hl(aSD),
						aSo = aSo - aSm,
						aSD = aSD - aS6,
						aSs = Math.abs(aSo),
						aSt = Math.abs(aSD),
						aSo = 0 < aSo ? 1 : 3,
						aSD = 0 < aSD ? 2 : 0;
					aSt < aSs ? aSw(aSm, aS6, aSm + aSs, aS6 + aSt, aSo, aSD, aSj) : aSw(aS6, aSm, aS6 + aSt, aSm + aSs, aSD, aSo, aSk)
				}(aSD, bI.i1(aR3), aSj, hM), !0)
			}(aSD, aSf)) return !1;
		if (0 === bK.f3[0]) return !!aY.h1(aSf << 2);
		if (! function(aR3) {
				if (aY.h1(aR3 << 2)) return 1;
				return function(aR3) {
					var a7, hT, aS4 = bJ.s.aS4,
						aT0 = bI,
						eY = bK.f3[0],
						aT1 = 4 * aR3;
					for (a7 = eY - 1; 0 <= a7; a7--) {
						hT = aS4[a7];
						var aT2 = aT1;
						if (aT1 = aT0.i7(aT1, hT + 2 & 3), aY.h1(aT1)) return bK.f3[0] = a7, bK.fA[1] = aT1 >> 2, bK.fA[2] = 1 + hT, bK.fA[4] = aT2, 1
					}
					return
				}(aR3)
			}(aSf)) return !1;
		if (bK.fA[2] && aY.ed(bK.fA[4])) return !1;
		var a7, aSf = bI.i2(aSD),
			v5 = a9h,
			aS4 = bJ.s.aS4,
			eY = bK.f3[0] - 1,
			aT1 = 4 * aSf,
			hK = bI.hK;
		for (a7 = 0; a7 < eY; a7++)
			if (aT1 += hK[aS4[a7]], 0 !== v5[aT1 + 3] || 2 !== v5[aT1 + 2]) return !!void 0;
		return !!1
	}

	function aSw(aSm, aSn, aSo, aSp, aSu, aSv, aSj) {
		for (var eh, aS4 = bJ.s.aS4, g7 = 0, aSx = 0, j7 = aSp - aSn, a1 = aSo - aSm, aSy = aSm % 16, a7 = 1; a7 <= aSj; a7++) aS4[g7++] = aSu, aS4[g7] = aSv, g7 += (eh = (j7 * (aSy + (a7 << 4)) + .5) / a1 >> 4) - aSx, aSx = eh;
		bK.fF(bK.f3, g7)
	}
	this.kL = function(player, aSf) {
		var hT, hM, gx = bI.hV(player, aSf);
		return gx !== aSf && (hT = bI.hL(gx, aSf), hM = bI.i6(gx, hT), !(!aY.h1(hM << 2) && (hT = bI.hS(gx, aSf, hT), hM = bI.i6(gx, hT), !aY.h1(hM << 2)) || (bK.fA[0] = hM, bK.fA[1] = aSf, bK.fA[2] = 0, hM !== aSf && (!zm(bI.i1(hM), aSf) ||
			0 !== bK.fA[2] && bI.hb(player, bK.fA[1] + bI.hJ[bK.fA[2] - 1] << 2)))))
	}, this.ot = function(aSf) {
		var aS6 = bJ.s.lx[bK.fA[3]];
		return bK.fA[1] = aSf, bK.fA[2] = 0, zm(aS6, aSf)
	}
}

function aQt() {
	var x4 = 32,
		x3 = new Array(2);

	function uu(et) {
		var ef, eh, eK, hj, hg, hB = x4,
			a1I = b6.pO.uu(hB, hB),
			hH = b6.pO.getContext(a1I, !0),
			hE = b6.pO.getImageData(hH, hB, hB),
			v5 = hE.data,
			kP = (hB >> 1) - .5,
			kQ = Math.sqrt(kP * kP);
		for (v5.fill(255), eh = 0; eh < hB; eh++)
			for (ef = 0; ef < hB; ef++) hg = ef - kP, hj = eh - kP, eK = 4 * (eh * hB + ef), hg = 714 * (kQ - Math.sqrt(hg * hg + hj * hj)) / kQ, v5[2 + eK] = et, v5[3 + eK] = 255 < hg ? 0 : hg;
		return hH.putImageData(hE, 0, 0), a1I
	}
	this.a3e = -1, this.dU = function() {
		this.a3e = -1, x3[0] || (x3[0] = uu(255), x3[1] = uu(0))
	}, this.aT4 = function(hH, eC, ef, eh, dz, a7) {
		b6.fu.gl(a9.eI) && (hH.setTransform(eC *= 4 / 3 * .625, 0, 0, eC, ef - (dz *= 4 / 3), eh - dz), hH.drawImage(x3[+(bJ.s.aR7[a7] === this.a3e)], 0, 0))
	}
}

function dX() {
	this.aMz = [L(377), L(378), L(379), L(380), L(381), L(382), L(383), L(384), L(385), L(386), L(387), L(388), L(389)];
	var aT5 = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", ""];
	this.aMy = new Array(aT5.length), this.dU = function() {
		var g = bf.dp.data[155].value.split(";"),
			kP = g.length;
		if (function() {
				for (var eY = aT5.length, a7 = 0; a7 < eY; a7++) bT.aMy[a7] = aT5[a7]
			}(), !(kP > aT5.length))
			for (var a7 = 0; a7 < kP; a7++) g[a7].length && (this.aMy[a7] = g[a7])
	}, this.aN1 = function(e0, code) {
		for (var aMy = this.aMy, aT7 = aT5, p5 = (aMy[e0] = code, ""), eY = aMy.length, aT8 = [], a7 = 0; a7 < eY; a7++) aT8.push(aMy[a7] === aT7[a7] ? "" : aMy[a7]);
		eY--;
		for (a7 = 0; a7 < eY; a7++) p5 += aT8[a7] + ";";
		bf.r6.r7(155, p5 += aT8[eY])
	}, this.aMx = function() {
		bf.r6.r7(155, ""), this.dU()
	}, this.et = function(code, e0) {
		return code === this.aMy[e0] || code === this.aMy[e0 + 1]
	}
}

function dS() {
	var aT9 = new Audio(
		"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
		);
	this.aTA = function() {
		aT9 && aT9.play()
	}
}

function cT() {
	this.a6A = function() {
		var aTD;
		return !(ah.jf < 3 || ac.gM[kw[0]] >= a9.jO >> 1) && (a9.ie ? (aTD = aa.aEu(), !(2 * aa.aEv(bd.kt()) >= aTD)) : function() {
			var aTD = aa.aEu();
			if (2 * ac.ga[kw[0]] >= aTD) return !1;
			return !0
		}())
	}
}

function c4() {
	this.dU = function() {
		if (0 === a9.data.sResourcesType) {
			for (var aS7 = a9.je, ga = ac.ga, a7 = 0; a7 < aS7; a7++) ga[a7] = 512;
			var aS8 = a9.vd,
				ju = aA.ju,
				im = aA.im;
			for (a7 = aS7; a7 < aS8; a7++) ga[a7] = ju[im[a7]]
		} else(1 === a9.data.sResourcesType ? function() {
			for (var eY = a9.vd, ga = ac.ga, sResourcesValue = a9.data.sResourcesValue, a7 = 0; a7 < eY; a7++) ga[a7] = sResourcesValue
		} : function() {
			for (var eY = a9.vd, ga = ac.ga, sResourcesData = a9.data.sResourcesData, a7 = 0; a7 < eY; a7++) ga[a7] = sResourcesData[a7]
		})();
		bZ.lR[8] = ac.ga[a9.eI]
	}
}

function dI() {
	var aTI = 501,
		aTJ = (this.zG = new Uint32Array(aTI), this.a1u = new Uint32Array(aTI), this.a94 = new Uint16Array(aTI), this.aN7 = 0, 1),
		aTK = 0;

	function aTN(self) {
		self.max.fill(0)
	}

	function aTP(self, a7) {
		self.max[0] = Math.max(self.zG[a7], self.max[0]), self.max[1] = Math.max(self.a1u[a7], self.max[1]), self.max[2] = Math.max(self.a94[a7], self.max[2])
	}
	this.max = [0, 0, 0], this.aTL = 0, this.lR = new Array(21), this.aTM = null, this.dV = function() {
		this.aTM = [L(390), L(391), L(392), L(393), L(394), L(395), L(396), L(397), L(241), L(242), L(398), L(399), L(400), L(401), "", L(402), L(403), L(404), L(201), L(405), L(406)]
	}, this.dU = function() {
		this.aN7 = 0, aTJ = 1, this.aTL = 0, aTK = 0, aTN(this), this.lR.fill(0)
	}, this.om = function(player, hu) {
		b6.fu.a1p(player) && (this.lR[0] += hu + 1, this.lR[1]++, this.lR[12] += bK.f6[1])
	}, this.oC = function(player, np) {
		__fx.donationsTracker.logDonation(player, np, bK.f6[0]);
		player === a9.eI && (aJ.oC(bK.f6[0], bK.f6[1], np), this.lR[12] += bK.f6[1], this.lR[16] += bK.f6[0]), np === a9.eI && (aJ.a50(bK.f6[0], player), this.lR[10] += bK.f6[0])
	}, this.op = function(player) {
		b6.fu.a1p(player) && (this.lR[2]++, this.lR[12] += bK.f6[1])
	}, this.p0 = function(player) {
		b6.fu.a1p(player) && (this.lR[19]++, this.lR[12] += bK.f6[1])
	}, this.aS2 = function(player) {
		b6.fu.a1p(player) && this.lR[20]++
	}, this.fy = function(player, a2V, e0) {
		b6.fu.a1p(player) && (this.lR[e0] += a2V)
	}, this.iS = function() {
		var self;
		this.aTL || 0 < aTK-- || ((self = this).zG[self.aN7] = ac.gM[a9.eI], self.a1u[self.aN7] = ac.ga[a9.eI], self.a94[self.aN7] = aa.a95(a9.eI), aTP(self, self.aN7), self.aN7++, self.aN7 === aTI && function(self) {
			aTN(self), aTP(self, 0), self.aN7 = 1 + bH.dl(aTI, 2);
			for (var a7 = 1; a7 < self.aN7; a7++) self.zG[a7] = self.zG[2 * a7], self.a1u[a7] = self.a1u[2 * a7], self.a94[a7] = self.a94[2 * a7], aTP(self, a7);
			aTJ *= 2
		}(self), aTK = aTJ - 1, ba.lI(), 0 === ac.lV[a9.eI] && (self.aTL = bb.jb()))
	}
}

function dJ() {
	this.a1 = 0, this.j7 = 0, this.rt = 0, this.ru = 0, this.aTR = 0, this.aTS = 0, this.a6N = 0, this.sW = 0;
	var aTU = this.aTT = 0;
	this.aTV = 0, this.aTW = 0, this.aTX = 0, this.a5m = 0, this.e0 = 0, this.a8h = null, this.wz = !1, this.aTY = -1, this.aTZ = !1, this.aTa = [0, 0], this.dV = function() {
		this.a8h = [L(407), L(106, 0, "Balance"), L(105, 0, "Interest"), L(408)]
	}, this.dU = function() {
		this.wz = !1, this.aTY = -1, this.aTZ = !1, this.resize()
	}, this.resize = function() {
		this.a1 = at.a1 < 1.369 * at.j7 ? at.a1 : 1.369 * at.j7;
		var eb = u.v.sd() && at.a1 < at.j7 ? 1 : u.v.sd() ? .8 : at.a1 < at.j7 ? .65 : .59;
		this.a1 = Math.floor(eb * this.a1), this.a1 -= u.v.sd() && at.a1 < at.j7 ? 2 * bY.gap + 2 : 0, this.j7 = Math.floor(this.a1 / 1.369), this.a5m = Math.floor(this.j7 / 150), this.a5m = Math.max(this.a5m, 1.5), this.rt = Math.floor(1 + .02 *
			this.a1), this.ru = Math.floor(1 + .04 * this.a1), this.a6N = this.ru, aTU = Math.floor(.75 * this.a6N), this.sW = Math.floor(1 + .075 * this.a1), this.aTV = Math.floor(1 + .1125 * this.a1), this.aTW = Math.floor(this.a1 * (u.v
			.sd() ? .03 : .029)), this.aTW = Math.max(this.aTW, 4), this.aTX = Math.floor(.035 * this.a1), this.aTX = Math.max(this.aTX, 4), this.aTT = this.j7 - 2 * this.a6N - this.sW - this.aTV, this.wz && this.aTb()
	}, this.gm = function(kk, kl) {
		var vg, vf;
		return !!this.wz && (vf = kk, vg = kl, kk -= bH.dl(at.a1 - this.a1, 2), kl -= bH.dl(at.j7 - this.j7, 2), kk < 0 || kl < 0 || kk >= this.a1 || kl >= this.j7 || kk >= this.a1 - this.aTV && kl < this.aTV ? -1 !== aI.gm(vf, vg) || b8.gm(vf,
			vg) || this.qw() : kl < this.aTV || (kl < this.j7 - this.sW ? (this.aTZ = !0, this.aTY = (kk - 2 * this.rt - this.aTR) / this.aTS, 3 !== this.e0 && (bb.dc = !0)) : (vf = (vf = Math.floor(kk / (this.a1 / this.a8h.length))) <
			0 ? 0 : vf >= this.a8h.length ? this.a8h.length - 1 : vf) !== this.e0 && (this.e0 = vf, this.aTb(), bb.dc = !0)), !0)
	}, this.a00 = function(kk, kl) {
		return this.aTa[0] = kk, this.aTa[1] = kl, !(!this.wz || !this.aTZ || (kk -= bH.dl(at.a1 - this.a1, 2), kl = this.aTY, this.aTY = (kk - 2 * this.rt - this.aTR) / this.aTS, (0 <= this.aTY && this.aTY <= 1 || 0 <= kl && kl <= 1) && (bb
			.dc = !0), 0))
	}, this.a0P = function() {
		this.aTZ && (this.aTZ = !1)
	}, this.a0b = function() {
		this.wz ? this.qw() : this.show()
	}, this.show = function() {
		bZ.aN7 < 2 || (this.wz = !0, this.aTb())
	}, this.qw = function() {
		this.wz = !1, this.aTY = -1, bb.dc = !0
	}, this.aTb = function() {
		this.e0 < 2 ? this.aTR = aM.measureText(b6.zC.xi(bZ.max[this.e0]), b6.pO.rP(0, this.aTW)) : 2 === this.e0 && (this.aTR = aM.measureText(b6.zC.a2O(6, 2), b6.pO.rP(0, this.aTW))), this.aTS = this.a1 - 2 * this.rt - this.aTR - this.ru
	}, this.lI = function() {
		this.wz && this.aTb()
	}, this.tJ = function() {
		this.wz && this.a6e()
	}, this.a6e = function() {
		var ef = bH.dl(at.a1 - this.a1, 2),
			eh = bH.dl(at.j7 - this.j7, 2);
		tK.setTransform(1, 0, 0, 1, ef, eh), tK.fillStyle = b7.mV, tK.fillRect(0, this.aTV, this.a1, this.j7 - this.aTV), this.aTc(), this.aLx(), tK.strokeRect(0, 0, this.a1, this.j7), b6.pO.textAlign(tK, 2), tK.font = b6.pO.rP(0, this.aTW),
			0 === this.e0 ? this.aTd(bZ.zG, ef, eh) : 1 === this.e0 ? this.aTd(bZ.a1u, ef, eh) : 2 === this.e0 ? this.aTe(ef, eh) : 3 === this.e0 && (this.aTf(ef, eh), this.aTg(ef, eh)), aI.a45(Math.floor(ef + this.a1 - .725 * this.aTV), Math
				.floor(eh + .275 * this.aTV), Math.floor(.45 * this.aTV)), tK.setTransform(1, 0, 0, 1, 0, 0)
	}, this.aTc = function() {
		var a7, dk;
		for (tK.lineWidth = this.a5m, b6.pO.textBaseline(tK, 1), b6.pO.textAlign(tK, 1), tK.strokeStyle = b7.mY, tK.font = b6.pO.rP(1, this.aTX), dk = this.a1 / this.a8h.length, tK.fillStyle = b7.mu, tK.fillRect(this.e0 * dk, this.j7 - this.sW,
				dk, this.sW), tK.fillStyle = b7.mY, tK.fillRect(0, this.j7 - this.sW - .5 * this.a5m, this.a1, this.a5m), a7 = 1; a7 <= 3; a7++) tK.fillRect(a7 * dk, this.j7 - this.sW, this.a5m, this.sW);
		for (a7 = this.a8h.length - 1; 0 <= a7; a7--) tK.fillText(b6.wg.a1U(this.a8h[a7], 0, .9 * dk), (a7 + .5) * dk, this.j7 - .46 * this.sW)
	}, this.aLx = function() {
		tK.fillStyle = b7.nH, tK.fillRect(0, 0, this.a1, this.aTV), tK.fillStyle = b7.mY, tK.fillRect(0, this.aTV - .5 * this.a5m, this.a1, this.a5m), tK.font = b6.pO.rP(1, .39 * this.aTV), tK.fillText(b6.wg.a1U(L(409), 0, .8 * this.a1), Math
			.floor(this.a1 / 2), Math.floor(.55 * this.aTV))
	}, this.aTd = function(g, ef, eh) {
		var kP = bZ.max[this.e0],
			a0u = (tK.setTransform(1, 0, 0, 1, ef + 2 * this.rt + this.aTR, eh + this.a6N + this.aTV), tK.lineWidth = 2, this.aTT / Math.sqrt(kP));
		tK.beginPath(), tK.moveTo(this.aTS, this.aTT - a0u * Math.sqrt(g[bZ.aN7 - 1]));
		for (var a7 = bZ.aN7 - 2; 0 <= a7; a7--) tK.lineTo(a7 * this.aTS / (bZ.aN7 - 1), this.aTT - a0u * Math.sqrt(g[a7]));
		tK.stroke();
		ef = this.a45(g, a0u, .5);
		ef < .95 && tK.fillText(b6.zC.xi(kP), -this.rt, 0), .05 < Math.abs(ef - .5) && tK.fillText(b6.zC.xi(Math.floor(kP / 4)), -this.rt, Math.floor(this.aTT / 2)), .05 < ef && tK.fillText("0", -this.rt, this.aTT)
	}, this.aTe = function(ef, eh) {
		tK.setTransform(1, 0, 0, 1, ef + 2 * this.rt + this.aTR, eh + this.a6N + this.aTV), tK.lineWidth = 2;
		var a0u = this.aTT / Math.max(bZ.max[this.e0], 1);
		tK.beginPath(), tK.moveTo(this.aTS, this.aTT - a0u * bZ.a94[bZ.aN7 - 1]);
		for (var a7 = bZ.aN7 - 2; 0 <= a7; a7--) tK.lineTo(a7 * this.aTS / (bZ.aN7 - 1), this.aTT - a0u * bZ.a94[a7]);
		tK.stroke();
		ef = this.a45(bZ.a94, a0u, 1), eh = bZ.max[this.e0] / 100;
		ef < .95 && tK.fillText(b6.zC.a2O(eh, 2), -this.rt, 0), .05 < Math.abs(ef - .5) && tK.fillText(b6.zC.a2O(eh / 2, 2), -this.rt, Math.floor(this.aTT / 2)), .05 < ef && tK.fillText(b6.zC.a2O(0, 2), -this.rt, this.aTT)
	}, this.aTf = function(ef, eh) {
		tK.setTransform(1, 0, 0, 1, ef + .34 * this.a1, eh + 2 * aTU + this.aTV), b6.pO.textAlign(tK, 2);
		for (var a8S = this.j7 - 4 * aTU - this.sW - this.aTV, g = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], a7 = 9; 0 <= a7; a7--) tK.fillText(b6.wg.a1U(bZ.aTM[g[a7]], 0, .31 * this.a1), 0, a7 * a8S / 9);
		var f0 = bZ.lR;
		for (tK.setTransform(1, 0, 0, 1, ef + .39 * this.a1, eh + 2 * aTU + this.aTV), b6.pO.textAlign(tK, 0), tK.fillText(b6.zC.a2O(100 * f0[0] / (1024 * Math.max(f0[1], 1)), 1), 0, 0), a7 = 8; 1 <= a7; a7--) tK.fillText(f0[g[a7]].toString(), 0,
			a7 * a8S / 9);
		tK.fillText(b6.zC.a2O(100 * (1 - ac.gM[a9.eI] / f0[7]), 0), 0, a8S)
	}, this.aTg = function(ef, eh) {
		tK.setTransform(1, 0, 0, 1, ef + .79 * this.a1, eh + 2 * aTU + this.aTV), b6.pO.textAlign(tK, 2);
		var a7, a8S = this.j7 - 4 * aTU - this.sW - this.aTV;
		for (tK.fillStyle = b7.mp, a7 = 2; 0 <= a7; a7--) tK.fillText(b6.wg.a1U(bZ.aTM[a7 + 8], 0, .31 * this.a1), 0, a7 * a8S / 9);
		tK.fillText(b6.wg.a1U(bZ.aTM[18], 0, .31 * this.a1), 0, 3 * a8S / 9), tK.fillStyle = b7.mo, tK.fillText(b6.wg.a1U(bZ.aTM[11], 0, .31 * this.a1), 0, 4 * a8S / 9), tK.fillStyle = b7.n6, tK.fillText(b6.wg.a1U(bZ.aTM[13], 0, .31 * this.a1),
				0, 5 * a8S / 9), tK.fillText(b6.wg.a1U(bZ.aTM[15], 0, .31 * this.a1), 0, 6 * a8S / 9), tK.fillText(b6.wg.a1U(bZ.aTM[16], 0, .31 * this.a1), 0, 7 * a8S / 9), tK.fillText(b6.wg.a1U(bZ.aTM[12], 0, .31 * this.a1), 0, 8 * a8S / 9), tK
			.fillStyle = b7.n5, tK.fillText(b6.wg.a1U(bZ.aTM[17], 0, .31 * this.a1), 0, a8S), tK.fillStyle = b7.mp;
		var f0 = bZ.lR,
			aMA = f0[8] + f0[9] + f0[10] + f0[18],
			aMA = b6.zC.xi(aMA),
			aKm = tK.measureText(aMA).width,
			ef = (tK.setTransform(1, 0, 0, 1, ef + .83 * this.a1 + aKm, eh + 2 * aTU + this.aTV), tK.fillText(b6.zC.xi(f0[8]), 0, 0), tK.fillText(b6.zC.xi(f0[9]), 0, a8S / 9), tK.fillText(b6.zC.xi(f0[10]), 0, 2 * a8S / 9), tK.fillText(b6.zC.xi(
				f0[18]), 0, 3 * a8S / 9), tK.fillStyle = b7.mo, tK.fillText(aMA, 0, 4 * a8S / 9), tK.fillStyle = b7.n6, tK.fillText(b6.zC.xi(f0[13]), 0, 5 * a8S / 9), tK.fillText(b6.zC.xi(f0[15]), 0, 6 * a8S / 9), tK.fillText(b6.zC.xi(f0[
				16]), 0, 7 * a8S / 9), tK.fillText(b6.zC.xi(f0[12]), 0, 8 * a8S / 9), f0[12] + f0[13] + f0[15] + f0[16]);
		tK.fillStyle = b7.n5, tK.fillText(b6.zC.xi(ef), 0, a8S), tK.fillStyle = b7.mY
	}, this.a45 = function(g, a0u, a7F) {
		var a7, e, fG;
		return this.aTY < 0 || 1 < this.aTY ? .25 : (a7 = this.aTY * (bZ.aN7 - 1), fG = g[e = Math.floor(a7)], fG += (a7 - e) * (g[e < bZ.aN7 - 1 ? e + 1 : e] - fG), tK.strokeStyle = b7.mb, .04 < this.aTY && this.aTi(0, this.aTT - a0u * Math.pow(
				fG, a7F), a7 * this.aTS / (bZ.aN7 - 1), this.aTT - a0u * Math.pow(fG, a7F)), .04 < fG / bZ.max[this.e0] && this.aTi(a7 * this.aTS / (bZ.aN7 - 1), this.aTT, a7 * this.aTS / (bZ.aN7 - 1), this.aTT - a0u * Math.pow(fG, a7F)), tK
			.fillStyle = b7.n8, tK.beginPath(), tK.arc(a7 * this.aTS / (bZ.aN7 - 1), this.aTT - a0u * Math.pow(fG, a7F), Math.max(2, .014 * this.j7), 0, 2 * Math.PI), tK.fill(), g = this.aTY * bb.a96, g = 0 === ac.lV[a9.eI] ? Math.floor(g *
				bZ.aTL) : Math.floor(g * bb.jb()), tK.fillStyle = b7.mY, tK.fillText(1 === a7F ? b6.zC.a2O(fG / 100, 2) : b6.zC.xi(Math.floor(fG)), -this.rt, this.aTT - a0u * Math.pow(fG, a7F)), b6.pO.textAlign(tK, 1), tK.fillText(aS.a8v(g),
				a7 * this.aTS / (bZ.aN7 - 1), this.aTT + this.aTW - (u.v.sd() ? 2 : 0) - this.a5m), b6.pO.textAlign(tK, 2), a0u * Math.pow(fG, a7F) / this.aTT)
	}, this.aTi = function(ly, lz, mB, mC) {
		tK.beginPath(), tK.moveTo(ly, lz), tK.lineTo(mB, mC), tK.stroke()
	}
}

function bs() {
	this.aTj = "https://", this.aTk = this.aTj + "territorial.io/", this.aN8 = this.aTk + "changelog", this.aNC = this.aTk + "terms", this.aTl = this.aTk + "cookie_policy", this.aMY = this.aTk + "privacy", this.aNB = this.aTk + "tutorial", this.aNA =
		this.aTk + "players", this.aN9 = this.aTk + "clans", this.zI = this.aTk + "clan-results", this.aAH = this.aTj + "play.google.com/store/apps/details?id=territorial.io", this.zY = this.aTj + "apps.apple.com/app/id1581110913", this.aTm = this
		.aTj + "www.youtube.com/watch?v=toZTQ8aRdFc", this.aAI = this.aTj + "discord.gg/pthqvpTXmh", this.aAJ = this.aTj + "www.instagram.com/davidtschacher/", this.xI =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function d1() {
	this.s = new aTn, this.wd = new aTo, this.dU = function() {
		this.s.dU()
	}, this.iS = function() {
		0 !== this.s.a59 && this.s.a59--
	}
}

function aTo() {
	this.tJ = function() {
		if (0 !== bL.s.a59 && (tK.globalAlpha = Math.min(bL.s.a59 / 580, 1), tK.drawImage(bL.s.aTr, 1 + aO.wb(), 1 + aO.wc()), tK.globalAlpha = 1, a9.gu)) {
			for (var ly = hv / hw, lz = hx / hw, mB = (at.a1 + hv) / hw, mC = (at.j7 + hx) / hw, g7 = bL.s.aTs * hw, aTt = bL.s.aTt, a7 = a9.je - 1; 0 <= a7; a7--) ! function(a7, g7, ly, lz, mB, mC, aTt) {
				var highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[a7];
				if (highlight) g7 *= 2;
				0 === ac.lV[a7] || 0 === ac.gM[a7] || (mB = at.a1 * ((ac.i9[a7] + ac.iA[a7] + 1) / 2 - ly) / (mB - ly) - .5 * g7, ly = at.j7 * ((ac.iB[a7] + ac.iC[a7] + 1) / 2 - lz) / (mC - lz) - .5 * g7, mB > at.a1) || ly > at.j7 || mB < -
					g7 || ly < -g7 || (tK.setTransform(highlight ? hw * 2 : hw, 0, 0, highlight ? hw * 2 : hw, mB, ly), tK.drawImage(aTt[a9.ie ? bc.eW[a7] : 1], 0, 0))
			}(a7, g7, ly, lz, mB, mC, aTt);
			tK.setTransform(hw, 0, 0, hw, 0, 0)
		}
	}
}

function aTn() {
	this.aTs = 28, this.a59 = 0, this.aTr = null;
	var aTv = this.aTt = null;

	function aTy(hB, aTz) {
		var ef, eh, eK, hg, a1I = b6.pO.uu(hB, hB),
			hH = b6.pO.getContext(a1I, !0),
			hE = b6.pO.getImageData(hH, hB, hB),
			v5 = hE.data,
			kP = (hB >> 1) - .5,
			aU0 = .5 + kP;
		for (aU0 *= aU0, eh = 0; eh < hB; eh++)
			for (ef = 0; ef < hB; ef++) hg = (hg = ef - kP) * hg + (hg = eh - kP) * hg, v5[eK = 4 * (eh * hB + ef)] = aTz[0], v5[1 + eK] = aTz[1], v5[2 + eK] = aTz[2], v5[3 + eK] = (aU0 - hg) * aTz[3] / aU0;
		return hH.putImageData(hE, 0, 0), a1I
	}

	function aT4(a7, hH, a1I, hB) {
		var ef, y, highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[a7];
		if (highlight) hB *= 2;
		0 !== ac.lV[a7] && 0 !== ac.gM[a7] && (ef = ac.i9[a7] + ac.iA[a7] + 1 - hB - 2 >> 1, y = ac.iB[a7] + ac.iC[a7] + 1 - hB - 2 >> 1,
			highlight ? hH.drawImage(a1I[a9.ie ? bc.eW[a7] : a7 < a9.je ? 1 : 0], ef, y, hB, hB) :
			hH.drawImage(a1I[a9.ie ? bc.eW[a7] : a7 < a9.je ? 1 : 0], ef, y))
	}
	this.dU = function() {
		var rG;
		this.a59 = 700,
			function(rG) {
				var hB = rG.aTs;
				if (rG.aTt = [], aTv = [], a9.ie)
					for (var a7 = 0; a7 <= a9.vk; a7++) rG.aTt.push(aTy(hB, bc.aRv[bc.k4[a7]])), aTv.push(aTy(hB >> 1, bc.aRv[bc.k4[a7]]));
				else rG.aTt.push(aTy(hB, bc.aRv[7])), rG.aTt.push(aTy(hB, bc.aRv[4])), aTv.push(aTy(hB >> 1, bc.aRv[7]))
			}(this),
			function(rG, aU1) {
				var a7, aTr = rG.aTr,
					hH = b6.pO.getContext(aTr, !0),
					eY = a9.eV,
					hB = rG.aTs >> 1;
				hH.imageSmoothingEnabled = !1, hH.setTransform(1, 0, 0, 1, 0, 0), aU1 && hH.clearRect(0, 0, aTr.width, aTr.height);
				for (a7 = a9.je; a7 < eY; a7++) aT4(a7, hH, aTv, hB)
			}(this, null !== (rG = this).aTr && rG.aTr.width === bO.ej - 2 && rG.aTr.height === bO.ek - 2 || (rG.aTr = b6.pO.uu(bO.ej - 2, bO.ek - 2), !1)), a9.gu || this.a2g()
	}, this.aRu = aTy, this.a2g = function() {
		for (var eY = a9.je, hB = this.aTs, aTt = this.aTt, hH = b6.pO.getContext(this.aTr, !0), a7 = 0; a7 < eY; a7++) aT4(a7, hH, aTt, hB)
	}
}

function d2() {
	function aU2(player) {
		a9.gu ? (ag.aDi(player), ah.aGc(), a9.k0 && a9.og.iS()) : az.aAU(player)
	}
	this.o5 = function(player) {
		return !!aI.a44(player) && (aJ.yb(player, player === a9.eI ? 21 : 22), aU2(player), !0)
	}, this.oc = function(player) {
		1 === a9.yP && 0 !== ac.lV[player] && 2 !== ac.a1n[player] && aU2(player), a9.yS--, a9.yR--, aJ.yb(player, 4), b6.fu.gk(2) && aS.lH(!0)
	}
}

function dC() {
	this.aPU = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.a8Q = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", b7.mY, "rgb(170,170,170)"
	], this.aU3 = [b7.mY, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", b7.mY, b7.mP], this.aU4 = [b7.mP, b7.mY, b7.mY, b7.mY, b7.mP, b7.mP, b7.mP, b7.mP, b7.mY];
	var aU5 = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"],
		aU6 = (this.aG7 = ["rgba(" + aU5[0] + ",", "rgba(" + aU5[1] + ",", "rgba(" + aU5[2] + ",", "rgba(" + aU5[3] + ",", "rgba(" + aU5[4] + ",", "rgba(" + aU5[5] + ",", "rgba(" + aU5[6] + ",", "rgba(" + aU5[7] + ",", "rgba(" + aU5[8] + ",",
			"rgba(" + aU5[9] + ","
		], this.aG8 = ["rgb(" + aU5[0] + ")", "rgb(" + aU5[1] + ")", "rgb(" + aU5[2] + ")", "rgb(" + aU5[3] + ")", "rgb(" + aU5[4] + ")", "rgb(" + aU5[5] + ")", "rgb(" + aU5[6] + ")", "rgb(" + aU5[7] + ")", "rgb(" + aU5[8] + ")", "rgb(" + aU5[
			9] + ")"
		], this.yl = null, this.aRv = [
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
	this.k4 = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.eW = new Uint8Array(a9.eV), this.z8 = null, this.aU7 = null, this.vq = new Uint16Array(a9.eV), this.vr = new Uint16Array(this.k4.length + 1), this.vs = new Uint16Array(this.k4.length), this.dV =
		function() {
			this.yl = [L(410), L(411), L(412), L(413), L(414), L(415), L(416), L(417), L(418)]
		}, this.dU = function() {
			if (this.eW.fill(0), this.aU8(), a9.ie) {
				9 === a9.jy ? this.aU9() : a9.k0 ? function() {
					var colorsData = a9.data.colorsData;
					if (!a9.data.selectableColor)
						for (var a7 = a9.je - 1; 0 <= a7; a7--) colorsData[a7] = au.iv(262144);
					var aUI = 0,
						eo = 768,
						aP1 = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
						teamPlayerCount = a9.data.teamPlayerCount;
					for (a7 = 0; a7 < 9; a7++)
						if (teamPlayerCount[a7]) {
							for (var eb = 0, es = 0; es < 3; es++) eb += Math.abs(aU6[a7][es] - aP1[es]);
							eb < eo && (aUI = a7, eo = eb)
						} var aUJ = new Uint16Array(9);
					for (a7 = 0; a7 < 9; a7++) aUJ[a7] = teamPlayerCount[a7];
					var k4 = bc.k4,
						aUK = new Uint8Array(9),
						g1 = (k4[0] = 0, 1);
					for (a7 = 1; a7 < 9; a7++) aUJ[a7] && (aUK[a7] = g1, k4[g1++] = a7);
					var iu = a9.je,
						eW = bc.eW;
					aUJ[aUI] ? (aUJ[aUI]--, eW[0] = aUK[aUI]) : iu = 0;
					var et = 0;
					for (a7 = iu; a7 < a9.vd; a7++) {
						var k3 = k4[et];
						if (aUJ[k3]) aUJ[k3]--, eW[a7] = aUK[k3];
						else if (a7--, 9 <= ++et) return console.log("error 325")
					}
				}() : this.iS();
				for (var eY = a9.eV, vq = bc.vq, vr = bc.vr, vs = bc.vs, eW = bc.eW, k4 = bc.k4, vj = k4.length, dp = new Array(vj), a7 = 0; a7 < vj; a7++) dp[a7] = [];
				for (a7 = 0; a7 < eY; a7++) dp[k4[eW[a7]]].push(a7);
				for (a7 = 1; a7 <= vj; a7++) vr[a7] = vr[a7 - 1] + dp[a7 - 1].length;
				for (a7 = 0; a7 < vj; a7++)
					for (var g1 = dp[a7].length, kP = vr[a7], k3 = 0; k3 < g1; k3++) vq[k3 + kP] = dp[a7][k3];
				var je = a9.je;
				for (a7 = 0; a7 < vj; a7++)
					for (g1 = dp[a7].length, kP = vr[a7], k3 = 0; k3 < g1; k3++)
						if (vq[k3 + kP] >= je) {
							vs[a7] = k3;
							break
						}
			}
		}, this.aU8 = function() {
			for (var a7 = this.k4.length - 1; 0 <= a7; a7--) this.k4[a7] = a7;
			this.z8 = [], this.aU7 = []
		}, this.aU9 = function() {
			for (var a7 = a9.data.teamPlayerCount[7] - 1; 0 <= a7; a7--) this.eW[a7] = 1;
			for (a7 = a9.data.teamPlayerCount[7]; a7 < a9.eV; a7++) this.eW[a7] = 2;
			this.k4[1] = 7, this.k4[2] = 8
		}, this.iS = function() {
			var hP = new Uint8Array(a9.je),
				hQ = new Uint8Array(a9.je),
				aUC = new Uint16Array(8),
				aUD = new Uint16Array(this.k4.length);
			this.aUE(hP, hQ, aUC, 1), this.aDL(aUC), this.aUF(aUD, hP, hQ), this.aUG(hP, hQ, aUD), this.aUH()
		}, this.aUE = function(hP, hQ, aUJ, aUL) {
			for (var es, e, aUM, eY = this.k4.length - aUL, g = new Uint16Array(eY), colorsData = a9.data.colorsData, a7 = a9.je - 1; 0 <= a7; a7--) {
				for (es = eY; aUL <= es; es--) g[es - 1] = Math.abs(4 * (colorsData[a7] >> 12) - aU6[es][0]) + Math.abs(4 * (colorsData[a7] >> 6 & 63) - aU6[es][1]) + Math.abs(4 * (63 & colorsData[a7]) - aU6[es][2]);
				for (aUM = 768, es = eY - 1; 0 <= es; es--) g[e = (es + a7) % eY] < aUM && (aUM = g[e], hP[a7] = e);
				for (aUJ[hP[a7]] += 4, aUM = 768, es = eY - 1; 0 <= es; es--) g[e = (es + a7) % eY] < aUM && e !== hP[a7] && (aUM = g[e], hQ[a7] = e);
				aUJ[hQ[a7]]++
			}
		}, this.aDL = function(aUJ) {
			for (var es, kR, eY = this.k4.length - 1, a7 = eY; 0 <= a7; a7--) this.k4[a7] = a7;
			for (a7 = eY - 1; 0 <= a7; a7--) aUJ[a7]++;
			for (a7 = 1; a7 <= eY; a7++) {
				for (kR = 0, es = 1; es < eY; es++) aUJ[es] > aUJ[kR] && (kR = es);
				aUJ[kR] = 0, this.k4[a7] = kR + 1
			}
		}, this.aUF = function(aUD, hP, hQ) {
			var es, aB9, et, eb, e, mA, s6, aUN = this.k4.length - 1,
				pt = new Uint16Array(aUN),
				aUO = [],
				aUP = 0;
			loop: for (var a7 = 0; a7 < a9.je; a7++)
				if (null !== (aB9 = b6.zC.zD(ac.zE[a7]))) {
					for (es = this.z8.length - 1; 0 <= es; es--)
						if (aB9 === this.z8[es]) {
							this.aU7[es].push(a7), aUP = Math.max(aUP, this.aU7[es].length);
							continue loop
						} this.z8.push(aB9), aUO.push(!1), this.aU7.push([a7]), aUP = Math.max(aUP, 1)
				}
			for (; 2 < a9.vk && aUP > bH.dl(a9.je, a9.vk);) a9.vk--, a9.jy--;
			for (es = this.z8.length - 1; 0 <= es; es--) {
				for (eb = -1, et = this.z8.length - 1; 0 <= et; et--) !aUO[et] && (-1 === eb || this.aU7[et].length > this.aU7[eb].length) && (eb = et);
				for (et = aUN - 1; 0 <= et; et--) pt[et] = 1;
				for (et = this.aU7[eb].length - 1; 0 <= et; et--) pt[hP[this.aU7[eb][et]]] += 3, pt[hQ[this.aU7[eb][et]]]++;
				for (a7 = aUN - 1; 0 <= a7; a7--) {
					for (e = eb % aUN, et = aUN - 1; 0 <= et; et--) pt[et] > pt[e] && (e = et);
					for (mA = -1, et = a9.vk; 0 < et; et--)
						if (this.k4[et] === e + 1) {
							mA = et;
							break
						} if (pt[e] = 0, -1 !== mA) {
						for (s6 = 0, et = a9.vk; 0 < et; et--) aUD[mA] > aUD[et] && s6++;
						if (s6 !== a9.vk - 1) {
							for (et = this.aU7[eb].length - 1; 0 <= et; et--) aUD[mA]++, this.eW[this.aU7[eb][et]] = mA;
							break
						}
					}
				}
				aUO[eb] = !0
			}
		}, this.aUG = function(hP, hQ, aUD) {
			for (var a7, hf, eY = this.k4.length - 1, border = bH.dl(a9.je, a9.vk), aUQ = (0 < a9.je % a9.vk && border++, new Uint8Array(1 + eY)), es = eY; 1 <= es; es--) aUQ[this.k4[es]] = es;
			for (a7 = 0; a7 < a9.je; a7++) hf = aUQ[hP[a7] + 1], 0 === this.eW[a7] && hf <= a9.vk && aUD[hf] < border && (aUD[hf]++, this.eW[a7] = hf);
			for (a7 = 0; a7 < a9.je; a7++) hf = aUQ[hQ[a7] + 1], 0 === this.eW[a7] && hf <= a9.vk && aUD[hf] < border && (aUD[hf]++, this.eW[a7] = hf);
			for (es = a9.vk; 1 <= es; es--)
				for (a7 = a9.je - 1; 0 <= a7 && !(aUD[es] >= border); a7--) 0 === this.eW[a7] && (aUD[es]++, this.eW[a7] = es)
		}, this.aUH = function() {
			for (var a7 = a9.je; a7 < a9.eV; a7++) this.eW[a7] = 1 + a7 % a9.vk
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
		for (var aUR = !1, aUS = !1, eb = 3; 0 <= eb; eb--) {
			var g6 = gE[player][a7] + ea[eb];
			if (aY.aDV(g6, player)) continue loop;
			aUR = aUR || aY.h1(g6), aUS = aUS || aY.aDU(g6)
		}
		aUR ? gF[player].push(gE[player][a7]) : aUS ? ey[player].push(gE[player][a7]) : aY.wC(gE[player][a7], player), gE[player][a7] = gE[player][eY - 1], gE[player].pop(), eY--
	}
}

function gC() {
	ac.gM[fS] -= fT
}

function gD(border) {
	for (var eY = border.length, a7 = eY - 1; 0 <= a7; a7--) aY.wW(fS, border[a7]) || (border[a7] = border[eY - 1], border.pop(), eY--)
}

function gG(border) {
	for (var eY = border.length, a7 = eY - 1; 0 <= a7; a7--) !aY.wW(fS, border[a7]) && aY.eT(border[a7]) && (border[a7] = border[eY - 1], border.pop(), eY--)
}

function gH(border) {
	for (var eb, g6, eY = border.length, ea = aY.ea, a7 = eY - 1; 0 <= a7; a7--)
		for (eb = 3; 0 <= eb; eb--)
			if (g6 = border[a7] + ea[eb], aY.aDV(g6, fS)) {
				ac.gE[fS].push(border[a7]), border[a7] = border[eY - 1], border.pop(), eY--;
				break
			}
}

function gI() {
	for (var eb, g6, ea = aY.ea, a7 = fT - 1; 0 <= a7; a7--)
		for (eb = 3; 0 <= eb; eb--) g6 = fV[a7] + ea[eb], aY.aDW(fS, g6) && aY.aDX(g6) && (ac.gE[fS].push(g6), aY.g3(g6, fS))
}

function gJ() {
	var ef, eh;
	loop: for (; ac.iB[fS] < ac.iC[fS];) {
		for (ef = ac.iA[fS]; ef >= ac.i9[fS]; ef--)
			if (aY.wW(fS, 4 * (ac.iB[fS] * bO.ej + ef))) break loop;
		ac.iB[fS]++
	}
	loop: for (; ac.iB[fS] < ac.iC[fS];) {
		for (ef = ac.iA[fS]; ef >= ac.i9[fS]; ef--)
			if (aY.wW(fS, 4 * (ac.iC[fS] * bO.ej + ef))) break loop;
		ac.iC[fS]--
	}
	loop: for (; ac.i9[fS] < ac.iA[fS];) {
		for (eh = ac.iC[fS]; eh >= ac.iB[fS]; eh--)
			if (aY.wW(fS, 4 * (eh * bO.ej + ac.i9[fS]))) break loop;
		ac.i9[fS]++
	}
	loop: for (; ac.i9[fS] < ac.iA[fS];) {
		for (eh = ac.iC[fS]; eh >= ac.iB[fS]; eh--)
			if (aY.wW(fS, 4 * (eh * bO.ej + ac.iA[fS]))) break loop;
		ac.iA[fS]--
	}
}

function eR(player, il) {
	return 0 === bc.eW[player] || bc.eW[player] !== bc.eW[il]
}

function h7(player, il) {
	for (var e, aUT = aZ.fe(player), a7 = 0; a7 < aUT; a7++)
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

function aDe(player) {
	for (var a7, g7, eY = ac.gE[player].length, ea = aY.ea, eb = 3; 0 <= eb; eb--)
		for (g7 = ea[eb], a7 = 0; a7 < eY; a7++)
			if (aY.ip(ac.gE[player][a7]) && aY.eP(ac.gE[player][a7] + g7)) return !0;
	return !1
}

function h9(a1q, a1r) {
	for (var a7, dk, g7, g6, aS7 = ac.gE[a1q].length, aS8 = ac.gE[a1r].length, ea = (aS8 < aS7 && (dk = a1q, a1q = a1r, a1r = dk, dk = aS7, aS7 = aS8, 0), aY.ea), eb = 3; 0 <= eb; eb--)
		for (g7 = ea[eb], a7 = 0; a7 < aS7; a7++)
			if (g6 = ac.gE[a1q][a7] + g7, aY.g8(g6) && aY.eQ(g6) === a1r) return !0;
	return !1
}

function aDf(a1q, a1r) {
	for (var a7, g7, g6, aS7 = ac.gE[a1q].length, ea = aY.ea, eb = 3; 0 <= eb; eb--)
		for (g7 = ea[eb], a7 = 0; a7 < aS7; a7++)
			if (aY.ip(ac.gE[a1q][a7]) && (g6 = ac.gE[a1q][a7] + g7, aY.g8(g6)) && aY.eQ(g6) === a1r) return !0;
	return !1
}

function dP() {
	this.oq = new aUU
}

function aUU() {
	this.h4 = function(player) {
		b6.fu.a1o(player) && aJ.yn(80, L(419), 637, 0, b7.nK, b7.mV, -1, !1)
	}, this.a3g = function() {
		aJ.yn(80, L(420), 637, 0, b7.nK, b7.mV, -1, !1)
	}, this.nt = function(player) {
		b6.fu.a1o(player) && aJ.yn(80, L(421), 637, 0, b7.nK, b7.mV, -1, !1)
	}
}

function aUV() {
	this.aUW = 0, this.iS = function() {
		aK.iS(), aV.iS(), at.iS(), aw.s.iS(), ar.aCq(), bb.dc && (bb.dc = !1, aW.tJ())
	}
}

function aUX() {
	this.lo = bb.lo, this.e0 = 0, this.aUW = 0, this.aCn = 0, this.aUY = null, this.aUZ = 7, this.a5A = 0, this.dU = function() {
		this.aCn = 0, this.aUY = [], this.e0 = 0, this.aUW = 0
	}, this.aOT = function(a8) {
		var a7;
		if (a9.gu) this.a97(a8);
		else if (this.aUY.push(a8), 2 === a9.yP) {
			for (a7 = 0; a7 < this.aUY.length; a7++) b4.ni.iS(this.aUY[a7]);
			this.aUY = []
		}
	}, this.a97 = function(a8) {
		b4.ni.iS(a8), b5.iS(), aS.a97(this.aCn), this.aCn === a9.a2m ? (a9.og.iS(), this.aCn = 0, this.e0 = 0, this.aUW = 0, this.lo = bb.lo) : (this.aCn++, ab.a2f(), ab.lH(!0), bX.a9f())
	}, this.iS = function() {
		at.iS(), a9.gu ? (bb.dc = aS.a97(-1) || bb.dc, lJ()) : (0 !== this.e0 || bb.lo >= this.lo && (this.lo += bb.a96 * Math.floor(1 + (bb.lo - this.lo) / bb.a96), 2 === a9.yP ? l8() : this.aUa(), this.e0++, 27 < bb.lo - this.a5A)) && this
		.aUb(), lE(), bb.dc && (bb.dc = !1, wZ()), this.a5A = bb.lo
	}, this.aUb = function() {
		bb.dc = !0, lG(), this.e0 = 0
	}, this.aUa = function() {
		var tw, a7;
		if (this.aUW !== 7 * this.aCn) lA(), bX.a9f();
		else {
			tw = !1;
			loop: for (; this.aUc() && (tw = !0, lA(), 2 !== a9.yP) && 0 < this.aUY.length;)
				for (a7 = this.aUZ - 2; 0 <= a7; a7--)
					if (lA(), 2 === a9.yP) break loop;
			tw ? bX.a9f() : (l8(), bX.a2i())
		}
	}, this.aUc = function() {
		return 0 < this.aUY.length && (this.aCn++, b4.ni.iS(this.aUY[0]), this.aUY.shift(), !0)
	}
}

function aUd() {
	var aUe, aUf, aUg, aCn, aUh, e0 = 0,
		lo = bb.lo;

	function aUk() {
		! function() {
			if (!a9.gu) return;
			if (a9.k0) return;
			if (aUh % 7 != 0) aUh++;
			else if (aCn === a9.a2m) {
				if (!aUn()) return;
				aS.a97(aCn), a9.og.iS()
			} else {
				if (!aUn()) return;
				aUh++, aCn++, ab.a2f(), ab.lH(!0)
			}
			return 1
		}() && aUn() && lA()
	}

	function aUl() {
		e0 = 0, (a9.gu ? (bb.dc = aS.a97(aCn - (aUh % 7 == 0 ? 0 : 1) + aUh % 7 / 7) || bb.dc, lJ) : aI.gj || !b8.a38 ? lJ : (bb.dc = !0, lG))()
	}

	function aUn() {
		var a7, eY, aUo = b5.od.aPe,
			fG = b5.od.aPf,
			fI = b5.od.aPg,
			fK = b5.od.aPh,
			aUp = b5.od.aPi,
			aUq = b5.od.aPj;
		if (!(aUe >= aUq.length)) {
			if (aUq = aUq[aUe], aUp[aUe]) {
				for (eY = aUf + aUq, a7 = aUf; a7 < eY; a7++) b4.ni.oQ(aUo[a7], fG[a7], fI[a7], fK[a7]);
				aUf += aUq, aUe++
			} else ++aUg >= aUq && (aUe++, aUg = 0);
			return 1
		}
		aJ.zk("Replay file smaller than expected."), b8.a0c(!1), a9.yP = 2
	}
	this.aUW = 0, this.dU = function() {
		aUh = aCn = aUg = aUf = aUe = 0
	}, this.iS = function() {
		var aSU;
		at.iS(), b8.a6Z() < 1.7 ? 0 === e0 ? bb.lo >= lo && (aSU = bb.a96 / b8.a6Z(), lo += aSU * Math.floor(1 + (bb.lo - lo) / aSU), 2 === a9.yP || aI.gj || !b8.a38 ? l8() : (aUk(), bX.a9f()), e0++) : aUl() : function() {
			var aSU;
			if (bb.lo >= lo)
				if (2 === a9.yP || aI.gj || !b8.a38) l8(), lo = bb.lo;
				else {
					for (aSU = bb.a96 / b8.a6Z(), 16 < (bb.lo - lo) / aSU && (lo = bb.lo - 16 * aSU); bb.lo >= lo && 2 !== a9.yP;) lo += aSU, aUk();
					bX.a9f()
				} aUl()
		}(), lE(), bb.dc && (bb.dc = !1, wZ())
	}, this.yZ = function() {
		aUe !== b5.od.aPj.length && aUe + 1 !== b5.od.aPj.length && aJ.zk("Replay file larger than expected.")
	}
}

function aUr() {
	var e0 = 0,
		lo = bb.lo;
	this.aUW = 0, this.iS = function() {
		at.iS(), a9.gu ? lJ() : 0 === e0 ? bb.lo >= lo && (lo += bb.a96 * Math.floor(1 + (bb.lo - lo) / bb.a96), 2 === a9.yP || aI.gj ? l8() : (lA(), bX.a9f()), e0++) : ((aI.gj ? lJ : (bb.dc = !0, lG))(), e0 = 0), lE(), bb.dc && (bb.dc = !1,
		wZ())
	}
}

function dK() {
	this.yY = null, this.dc = !1, this.lo = 0, this.a96 = 56;
	var aUs = 0;

	function aUt() {
		bb.lo = aUs = performance.now(), bb.yY.iS(), window.requestAnimationFrame(aUt)
	}
	this.dU = function() {
		this.a36(), window.requestAnimationFrame(aUt), this.lo = performance.now()
	}, this.a2x = function() {
		a9.gi ? (this.yY = new aUd, this.yY.dU()) : a9.k0 ? this.yY = new aUr : (this.yY = new aUX, this.yY.dU())
	}, this.a36 = function() {
		this.yY = new aUV, this.dc = !0
	}, this.iS = function() {
		this.yY.aUW++
	}, this.jb = function() {
		return this.yY.aUW
	}, this.aO5 = function() {
		var dk = performance.now();
		dk < aUs + 1e3 || (this.lo = dk, this.yY.iS())
	}
}

function cm() {
	var li = 0,
		aUu = !0;

	function aUw(p5) {
		8 !== aW.zd() || 2 !== ac.a1n[a9.eI] && (0 !== ac.lV[a9.eI] || a9.gu) || aJ.a4r(p5)
	}
	this.iS = function() {
		var dk, a5D;
		bb.lo > li && (li = bb.lo + 2500, dk = new Date, a5D = dk.getUTCSeconds(), aUu ? a5D < 45 && (aUu = !1) : a5D < 45 || (aUu = !0, (a5D = dk.getUTCMinutes() + 1) % 15 == 0 && aUw(30 === a5D ? "Upcoming Battle Royale Contest!" :
			"Upcoming Alliance Contest!")))
	}
}

function cg() {
	var ly, lz, mB, mC, aUx = 0,
		aUy = 0;

	function aV0() {
		return Math.pow(Math.pow(mB - ly, 2) + Math.pow(mC - lz, 2), .5)
	}

	function aUz(e) {
		ly = at.pU * e.touches[0].clientX, lz = at.pU * e.touches[0].clientY, mB = at.pU * e.touches[1].clientX, mC = at.pU * e.touches[1].clientY
	}
	this.a04 = function(e) {
		return 1 < e.touches.length ? (aUy = bb.lo, aUx = 3, aUz(e), aH.qw(), !0) : (aUx = 0, !1)
	}, this.a05 = function(e) {
		var aHP, hd, he;
		return 0 !== a9.yP && 1 < e.touches.length && (aUx = Math.max(aUx - 1, 0), aD.mG() && (aHP = aV0(), aUz(e), e = aV0(), hd = Math.floor((ly + mB) / 2), he = Math.floor((lz + mC) / 2), aO.a6z(hd, he, Math.max(.125, e) / Math.max(.125,
			aHP)), bb.dc = !0), !0)
	}, this.a0S = function() {
		var ef, eh;
		return !!(aUx && (aUx = 0, bb.lo < aUy + 500)) && (ef = (ly + mB) / 2, eh = (lz + mC) / 2, aH.a0M(ef, eh), aH.click(ef, eh, !0) && (bb.dc = !0), !0)
	}
}

function cv() {
	this.size = 0, this.e0 = 0, this.a8 = null, this.dU = function(a8) {
		this.e0 = 0, this.a8 = a8, this.size = a8.length
	}, this.zq = function() {
		this.a8 = null
	}, this.oP = function(size) {
		for (var f0 = 0, a8 = this.a8, mG = this.e0 + size - 1, a7 = this.e0; a7 <= mG; a7++) f0 |= (a8[a7 >> 3] >> 7 - (7 & a7) & 1) << mG - a7;
		return this.e0 += size, this.e0 > 8 * this.size && console.error("Unwrapper Overflow"), f0
	}, this.aOh = function(size) {
		var es = size >> 1;
		return (1 << es) * this.oP(size - es) + this.oP(es)
	}, this.aOg = function(aV1) {
		return this.size === b9.aOa(aV1)
	}, this.aPw = function(vN, aV2, aV3) {
		var g1 = this.oP(vN);
		if (!g1) return null;
		for (var vN = Math.max(g1, aV3), g = new(aV2 <= 8 ? Uint8Array : aV2 <= 16 ? Uint16Array : Uint32Array)(vN), a7 = 0; a7 < g1; a7++) g[a7] = this.oP(aV2);
		aV3 = g[g1 - 1];
		return aV3 && g.fill(aV3, g1), g
	}, this.aPx = function(vN, aV4, aV3) {
		var g1 = this.oP(vN);
		if (!g1) return null;
		for (var vN = Math.max(g1, aV3), g = new Array(vN), a7 = 0; a7 < g1; a7++) g[a7] = this.aPu(aV4);
		return g.fill(g[g1 - 1], g1), g
	}, this.aPu = function(vN) {
		return bC.uT.uX(this.oP(vN))
	}, this.aPv = function() {
		var p5 = bB.rp.rq(bB.rp.rr(this.oP(30))),
			p5 = b6.zC.a2a(p5, "_", "/");
		p5 = b6.zC.a2a(p5, "-", "+");
		for (var aV5 = "";
			(p5.length + aV5.length) % 4;) aV5 += "=";
		p5 = "data:image/png;base64," + p5 + aV5;
		var aEA = new Image;
		aEA.onload = function() {
			b5.aEZ.aEa(aEA), aEA.onload = null, aEA = null
		}, aEA.src = p5
	}
}

function dE() {
	this.aQm = 0, this.aQn = 0, this.aQi = 0, this.aQj = 0, this.aQk = 0, this.aQl = 0, this.a9g = [0, 0, 0, 0], this.mF = function() {
		this.aQm = aO.wb(), this.aQn = aO.wc(), this.aQi = -this.aQm, this.aQj = -this.aQn, this.aQk = at.a1 / hw, this.aQl = at.j7 / hw, this.a9g[0] = Math.floor(this.aQi), this.a9g[1] = Math.floor(this.aQj), this.a9g[2] = Math.floor(this.a9g[
			0] + this.aQk + 1), this.a9g[3] = Math.floor(this.a9g[1] + this.aQl + 1), bX.a9d = !0
	}
}

function ch() {
	var a5i, li;
	this.dU = function() {
		a5i = 1, li = 0
	}, this.iS = function() {
		0 < a5i && (li = 0 === li ? bb.lo + 16 : li, a5i = (a5i -= .001 * (bb.lo - li)) < 0 ? 0 : a5i, li = bb.lo, bb.dc = !0)
	}, this.tJ = function() {
		0 < a5i && (tK.fillStyle = "rgba(0,0,0," + a5i + ")", tK.fillRect(0, 0, at.a1, at.j7))
	}
}

function a2() {
	this.size = 0, this.e0 = 0, this.a8 = null, this.dU = function(a8) {
		this.e0 = 0, this.a8 = a8, this.size = a8.length
	}, this.a3 = function(aV1) {
		return this.dU(new Uint8Array(this.aOa(aV1))), this.a8
	}, this.zq = function() {
		this.a8 = null
	}, this.a4 = function(size, a5F) {
		for (var a8 = this.a8, mG = this.e0 + size - 1, a7 = this.e0; a7 <= mG; a7++) a8[a7 >> 3] |= (a5F >> mG - a7 & 1) << 7 - (7 & a7);
		this.e0 += size, this.e0 > 8 * this.size && console.error("Wrapper Overflow")
	}, this.aOZ = function(size, a5F) {
		var es = size >> 1,
			eb = 1 << es;
		this.a4(size - es, bH.dl(a5F, eb)), this.a4(es, a5F % eb)
	}, this.aV8 = function(size) {
		for (var a8 = this.a8, mG = this.e0 + size, a7 = this.e0; a7 < mG; a7++) a8[a7 >> 3] &= 255 ^ 128 >>> (7 & a7)
	}, this.aOa = function(aV1) {
		return aV1 + 7 >> 3
	}, this.aV9 = function(g, iu, mG, aVA) {
		for (var a7 = iu; a7 < mG; a7++) this.a4(aVA, g[a7])
	}
}

function cu() {
	this.dU = function() {
		this.g = [], this.e0 = 0
	}, this.aP3 = function() {
		return new Uint8Array(this.g)
	}, this.a4 = function(aVB, value) {
		for (var g = this.g, mG = this.e0 + aVB - 1, aVC = 1 + (mG >> 3); g.length < aVC;) g.push(0);
		for (var a7 = this.e0; a7 <= mG; a7++) g[a7 >> 3] |= (value >> mG - a7 & 1) << 7 - (7 & a7);
		this.e0 += aVB
	}, this.db = function(g, vN, aV2) {
		var aVD = b6.pY.a1F(g);
		this.a4(vN, aVD);
		for (var a7 = 0; a7 < aVD; a7++) this.a4(aV2, g[a7])
	}, this.aQE = function(g, vN, aV4) {
		var aVD = b6.pY.a1F(g);
		this.a4(vN, aVD);
		for (var a7 = 0; a7 < aVD; a7++) this.aQC(g[a7], aV4)
	}, this.aQC = function(p5, vN) {
		var eY = p5.length;
		this.a4(vN, eY);
		for (var a7 = 0; a7 < eY; a7++) this.a4(16, p5.charCodeAt(a7))
	}, this.aQD = function(a1I) {
		var aVE = (a1I = a1I.toDataURL()).split(",");
		if (aVE.length < 2) console.log("error 266");
		else {
			a1I = b6.zC.a2a(a1I = aVE[aVE.length - 1], "/", "_"), a1I = b6.zC.a2a(a1I, "\\+", "-");
			var a1I = b6.zC.a2a(a1I, "=", ""),
				ug = bC.rp.ud(a1I),
				eY = ug.length;
			this.a4(30, eY);
			for (var a7 = 0; a7 < eY; a7++) this.a4(6, ug[a7])
		}
	}
}
a(), self.aiCommand746 = function(f0) {
	0 === f0 ? bn() : 1 !== f0 || !u || 1 !== u.id || u.f1 < 14 || bF.f2()
}, setTimeout(bn, 1e4), window.onload = function() {
	bn()
};