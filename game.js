var h, a9, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, at, au, av, aw, ax, ay, az, b0, b1, b2, b3, b4, b5, b6, b7, b8,
	b9, bA, bB, bC, bD, bE, bF, bG, bH, bI, bJ, bK, bL, bM, bN, bO, bP, n, bQ, bR, bS, bT, bU, bV, bW, bX, bY, bZ, ba, bb, bc, bd, u, be, bf, bg, l, bh, bi, bj, bk, bl, bm, dg, dh, a5, di, a6, fN, fO, fP, fQ, fR, fS, fT, fU, fV, fW, fX, fY, fZ, hw,
	hv, hx, a68, kw, jP, a0A, tU, wr, a9s, a3C, a3D, S = ["100%", "div", "⬅️ ", "absolute", "canvas", "inherit", "rgb(", "rgba(", "none", "auto", "   ", "hidden", "<br>", "center", "Data", "1em", "flex", "0.8em", "territorial.io", "span", "input",
		"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==", "click", "0.5em", "' target='_blank'>", "undefined",
		"nowrap", "</a>", " / ", "pointer", "password", "function", "Value", "Enter", "1 Minute", "1 Hour", "0.6em", "text", "string", "rgba(0,0,0,0.8)", "number", "mouseleave", "focus", "break-word", "bold", "blur", "Player ", "NoStack", "Escape",
		"50%", "20 Seconds", "1.2em", "0.0em 0.9em", ". Duration: x", " voted with ", "🔄 Reload", "underline", "top", "tls7", "Trebuchet MS", "rgba(140,10,10,0.75)", "rgba(100,0,0,0.8)", "rgba(10,140,10,0.75)", "rgba(0,100,0,0.8)", "rgba(0,",
		"rgb(10,220,10)", "pre", "placeholder", "mouseover", "mouseout", "middle", "long", "logo", "loading", "keydown", "italic ", "inline-block", "file", "error", "en-US", "data:image/png;base64,", "break-all", "blur(4px)", "arena", "account",
		"accept", "_blank", "Space", "Seed", "Reload", "Interest", "Censored", "Bot ", "Battle Royale", "Back", "<a href='", "1v1", "1.4em", "1 Day", "0px", "000", "0.75em", "0.4em 0em", "0.2em", ",0,0.85)", " solid white;}", " Rank: ", " / 160",
		" -> "
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
	this.dj = 1084, this.j = 2023, this.rVersion = 5, this.dU = function() {
		dg = 2;
		var dk = bH.dl(this.j, 10) % 100;
		dh = "22 Jan 2025 [" + bH.dl(this.j, 1e3) + "." + (dk < 10 ? "0" : "") + dk + "." + this.j % 10 + "]", a5 = true, a6 = function() {
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
			170, 170), this.mn = et.mQ(200, 235, 245), this.mo = et.mQ(30, 255, 30), this.mp = et.mQ(0, 200, 0), this.mq = et.mQ(128, 255, 128), this.mr = et.mS(10, 65, 10, .75), this.ms = et.mS(0, 255, 0, .6), this.mt = et.mS(0, 255, 0, .5), this
		.mu = et.mS(0, 200, 0, .5), this.mv = et.mS(0, 100, 0, .75), this.mw = et.mS(0, 60, 0, .8), this.mx = et.mS(0, 255, 0, .3), this.my = et.mS(0, 180, 0, .6), this.mz = et.mS(0, 120, 0, .85), this.n0 = et.mQ(0, 120, 0), this.n1 = et.mS(0, 70, 0,
			.85), this.n2 = et.mQ(190, 230, 190), this.n3 = et.mQ(0, 255, 0), this.n4 = et.mQ(255, 120, 120), this.n5 = et.mQ(255, 160, 160), this.n6 = et.mQ(255, 70, 70), this.n7 = et.mQ(230, 0, 0), this.n8 = et.mS(220, 0, 0, .6), this.n9 = et.mS(
			255, 100, 100, .8), this.nA = et.mS(100, 0, 0, .85), this.nB = et.mS(60, 0, 0, .85), this.nC = et.mS(200, 0, 0, .6), this.nD = et.mS(120, 0, 0, .85), this.nE = et.mQ(255, 70, 10), this.nF = et.mQ(230, 190, 190), this.nG = et.mQ(255, 0,
		0), this.nH = et.mQ(255, 0, 255), this.nI = et.mS(60, 0, 60, .85), this.nJ = et.mS(0, 60, 60, .85), this.nK = et.mS(10, 60, 60, .9), this.nL = et.mS(0, 96, 96, .75), this.nM = et.mQ(0, 255, 255), this.nN = et.mQ(160, 160, 255), this.nO = et
		.mS(0, 40, 90, .75), this.nP = et.mS(0, 0, 255, .6), this.nQ = et.mQ(200, 200, 255), this.nR = et.mQ(255, 120, 100), this.nS = et.mS(255, 255, 0, .5), this.nT = et.mS(255, 255, 150, .2), this.nU = et.mQ(255, 255, 0), this.nV = et.mQ(255, 255,
			200), this.nW = et.mS(200, 200, 0, .6), this.nX = et.mS(140, 120, 0, .75), this.nY = et.mS(180, 160, 40, .75), this.nZ = et.mS(70, 50, 20, .85), this.na = et.mS(30, 30, 0, .85), this.nb = et.mS(60, 60, 0, .85), this.nc = et.mS(255, 140,
			0, .75), this.nd = et.mS(70, 40, 0, .85), this.ne = et.mQ(255, 150, 0), this.nf = et.mS(0, 0, 0, 0), this.ng = et.mS(255, 255, 255, 0), this.nh = et.mS(254, 254, 254, 0)
}

function cr() {
	this.gv = new ni, this.fu = new nj, this.nk = new nl, this.nm = new nn, this.jj = new no
}

function ni() {
	this.gw = function(eK) {
		a9.k0 ? b4.nk.gw(a9.eI, eK) : aw.np.nq(eK)
	}, this.h6 = function(hu, il) {
		a9.k0 ? b4.nk.h6(a9.eI, hu, il) : aw.np.nr(hu, il)
	}, this.ns = function(hu, nt) {
		a9.k0 ? b4.nk.nu(a9.eI, hu, nt) : aw.np.nv(hu, nt)
	}, this.h4 = function(hu, eK) {
		a9.k0 ? b4.nk.h4(a9.eI, hu, eK) : bJ.h2.h3(a9.eI, eK) && aw.np.nw(hu, eK)
	}, this.nx = function(lu, eK) {
		a9.k0 ? b4.nk.nx(a9.eI, lu, eK) : bJ.h2.ny(a9.eI, lu, eK) && aw.np.nz(lu, eK)
	}, this.o0 = function(il) {
		a9.k0 ? b4.nk.o0(a9.eI, il) : aw.np.o1(il)
	}, this.o2 = function(o3) {
		a9.k0 ? b4.nk.o4(a9.eI, o3) : aw.np.o5(o3)
	}, this.o6 = function(o7) {
		a9.k0 ? b4.nk.o6(a9.eI, o7) : aw.np.o8(o7)
	}, this.o9 = function() {
		a9.k0 ? b4.nk.o9(a9.eI) : aw.np.oA()
	}, this.oB = function() {
		a9.k0 ? b4.nk.oB(a9.eI) : aw.np.nw(1, 0)
	}, this.gz = function(hu, eK, il) {
		a9.k0 ? b4.nk.gz(a9.eI, hu, eK, il) : aw.np.oC(hu, eK, il)
	}
}

function no() {
	this.jk = function(player, nt, im) {
		b6.fu.oD(player, im, nt) && (aa.ns(player, nt), nt < a9.je) && au.random() < au.value(10) && (aj.iO.ig[nt] = 0)
	}, this.oE = function(player, nt, im) {
		b6.fu.oF(im, nt) ? (b6.fu.fx(nt, bK.f6[0]), bZ.oG(player, nt), ab.oH(nt, bK.f6[0])) : bZ.fy(player, im, 12)
	}
}

function nj() {
	this.oI = function(o3, player) {
		aJ.o2(a9.eI, player, o3), aw.np.oJ(o3, player)
	}, this.oK = function(player) {
		aJ.oL(player, 0), aw.np.oM(player)
	}, this.oN = function(oO, player) {
		aJ.oP(oO, player), aw.np.oQ(oO, player)
	}, this.oR = function() {
		a9.k0 || a9.gi || aw.oS.oR()
	}
}

function nn() {
	this.iS = function(a8) {
		var id, fG, mG;
		for (bD.dU(a8), bD.e0 += 2, mG = 8 * bD.size; bD.e0 + 8 <= mG;) id = bD.oT(4), fG = bD.oT(9), 0 === id ? this.oU(id, fG, bD.oT(22)) : 1 === id ? this.oU(id, fG, bD.oT(10), bD.oT(10)) : 2 === id ? this.oU(id, fG, bD.oT(10), bD.oT(9)) :
			3 === id || 4 === id ? this.oU(id, fG, bD.oT(10), bD.oT(22)) : 5 === id || 6 === id ? this.oU(id, fG, bD.oT(10)) : 7 === id ? this.oU(id, fG, bD.oT(1)) : 10 === id ? this.oU(id, fG, bD.oT(20), bD.oT(22)) : this.oU(id, fG)
	}, this.oV = [], this.oW = function() {
		for (var oY = 0, oZ = 0, oa = 0, ob = 0, oc = 0, od = 0, a7 = 0; a7 < 512; a7++) oY += ac.lV[a7], oZ += ac.gM[a7], oa += ac.ga[a7], ob += bJ.s.oe[a7];
		oc += bJ.s.og, od += ah.jf, this.oV.push(oa % 1073741824 * 4 + (oY + oZ + ob + oc + od) % 4)
	}, this.oU = function(id, fG, fI, fK) {
		0 === id ? b4.nk.gw(fG, fI) : 1 === id ? b4.nk.h6(fG, fI, fK) : 2 === id ? b4.nk.nu(fG, fI, fK) : 3 === id ? b4.nk.h4(fG, fI, fK) : 4 === id ? b4.nk.nx(fG, fI, fK) : 5 === id ? b4.nk.o0(fG, fI) : 6 === id ? b4.nk.o4(fG, fI) : 7 === id ?
			b4.nk.o6(fG, fI) : 8 === id ? b4.nk.o9(fG) : 9 === id ? b4.nk.oh(fG) : 10 === id && b4.nk.gz(fG, fI >> 10, fK, fI % 1024)
	}
}

function nl() {
	this.gw = function(player, eK) {
		b6.fu.gk(0) && b6.fu.gl(player) && bI.hz(eK) && (b5.oi.oj(0, player, eK), a9.ok.ii(player, eK))
	}, this.h6 = function(player, hu, il) {
		b6.fu.gk(1) && b6.fu.gl(player) && b6.fu.ol(player, il) && b6.fu.om(player, hu, 12, 0) && b6.fu.on(player, il) && ((il = aZ.iz(player, bK.eU[0])) || aZ.jI(player)) && (ac.oo[player]++, b5.oi.oj(1, player, hu, bK.eU[0]), aj.iM.iW(player,
			il)) && (b6.fu.op(player), bZ.oq(player, hu), aj.iM.ic(player))
	}, this.nu = function(player, hu, nt) {
		b6.fu.gk(1) && b6.fu.gl(player) && a9.ie && b6.fu.ol(player, nt) && b6.fu.or(player, nt) && b6.fu.oD(player, b6.fu.ht(player, hu), nt) && (b5.oi.oj(2, player, hu, nt), aa.ns(player, nt))
	}, this.h4 = function(player, hu, eK) {
		b6.fu.gk(1) && b6.fu.gl(player) && (0 === eK && 1 === hu ? this.oB(player) : bI.hz(eK) && bJ.s.og !== bJ.s.jv && bJ.s.oe[player] !== bJ.s.os && 0 !== ac.gF[player].length && b6.fu.om(player, hu, 32, 0) && bJ.kK.kL(player, eK) && (bZ.ot(
			player), b5.oi.oj(3, player, hu, eK), b6.fu.op(player), bi.ou.h4(player), bJ.s.ov(player)))
	}, this.nx = function(player, lu, eK) {
		b6.fu.gk(1) && b6.fu.gl(player) && bI.hz(eK) && bJ.h2.ow(player, lu) && bJ.kK.ox(eK) && (b5.oi.oj(4, player, lu, eK), b6.fu.oy(player, 8), bZ.fy(player, bK.f6[1], 12), bi.ou.nx(player), bJ.s.nx())
	}, this.o0 = function(player, il) {
		b6.fu.gk(1) && b6.fu.gl(player) && (il = Math.min(il, a9.eV), aZ.iz(player, il)) && (b5.oi.oj(5, player, il), aZ.oz(player, il))
	}, this.o4 = function(player, o3) {
		(b6.fu.gk(1) || b6.fu.gk(2)) && b6.fu.gl(player) && (o3 = bH.p0(o3, 0, 1023), b5.oi.oj(6, player, o3), ab.p1(player, 0, o3))
	}, this.o6 = function(player, o7) {
		b6.fu.gk(1) && b6.fu.gl(player) && (b5.oi.oj(7, player, o7), aq.p2(player, o7))
	}, this.o9 = function(player) {
		(b6.fu.gk(0) || b6.fu.gk(1)) && b6.fu.gl(player) && aI.p3(player) && (b5.oi.oj(8, player), bM.o9(player))
	}, this.oh = function(player) {
		b5.oi.oj(9, player), bM.oh(player)
	}, this.oB = function(player) {
		aq.p4(player) && (b5.oi.oj(3, player, 1, 0), aq.oB(player))
	}, this.gz = function(player, hu, eK, il) {
		b6.fu.gk(1) && b6.fu.gl(player) && b6.fu.ol(player, il) && b6.fu.on(player, il) && bI.hz(eK) && ai.e9.eS(player, eK) && (aZ.iz(player, bK.eU[0]) || aZ.jI(player)) && (b5.oi.oj(10, player, (hu << 10) + bK.eU[0], eK), il = b6.fu.kh(player,
			hu), ac.g0[player].push(bK.eZ[0]), aZ.ii(player, il, bK.eU[0]), aB.ij(player, !0), bZ.p5(player))
	}
}

function p6() {
	var p8;
	this.p7 = [], this.p8 = document.createElement("div"), this.p9 = function(pA, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = pA, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.4em", title.style.overflowWrap = "break-word", this.p8.appendChild(
			title), title
	}, this.pB = function(pA, marginBottom) {
		var pC = document.createElement("p");
		return pC.textContent = pA, pC.style.fontSize = "0.75em", pC.style.lineHeight = "1.2em", pC.style.marginBottom = marginBottom || "0", this.p8.appendChild(pC), pC
	}, this.pD = function(pA) {
		var pE = document.createElement("p");
		return pE.textContent = pA, pE.style.fontSize = "1em", pE.style.marginBottom = "0", pE.style.whiteSpace = "pre-wrap", pE.style.overflowWrap = "break-word", this.p8.appendChild(pE), pE
	}, this.pF = function(pG, fontSize) {
		var p8 = document.createElement("div");
		return p8.innerHTML = pG, p8.style.fontSize = fontSize || "1em", p8.style.lineHeight = "1.2em", this.p8.appendChild(p8), p8
	}, this.pH = function(pI) {
		for (var pJ = pI.pJ, eY = pJ.length, a7 = 0; a7 < eY; a7++) this.p8.appendChild(pJ[a7])
	}, this.pK = function(pL) {
		return this.p7.push(pL), this.p8.appendChild(pL.e), pL
	}, this.resize = function() {
		for (var eY = this.p7.length, a7 = 0; a7 < eY; a7++) this.p7[a7].resize && this.p7[a7].resize()
	}, (p8 = this.p8).style.position = "absolute", p8.style.height = "auto", p8.style.padding = "0.5em"
}

function pM(pN, pO) {
	var p8 = document.createElement("div");

	function pX() {
		var a7, pY, j7, g7, eb, pS = at.pZ * p8.offsetWidth,
			pa = new Float64Array(function(pS) {
				var a1 = .25 * b6.pT.pU(.6) * at.pV;
				return Math.max(Math.floor(pS / a1), 1)
			}(pS)),
			pb = bY.pb,
			pc = (pS - (pa.length + 1) * bY.gap) / (pa.length * at.pZ);
		for (pa.fill(pb), a7 = 0; a7 < pO.length; a7++) pY = (eb = pO[a7].p8).style, j7 = b6.pd.min(pa), g7 = pa.indexOf(j7), pY.top = b6.pT.pe(j7), pY.left = b6.pT.pe(pb + g7 * (pc + pb)), pY.width = b6.pT.pe(pc), b6.pT.pf(eb, 5), pa[g7] += eb
			.offsetHeight + 3 * pb;
		p8.style.height = b6.pT.pe(b6.pd.max(pa) - 2 * pb)
	}
	this.pP = p8, this.pQ = pO, this.resize = function() {
		var a7;
		for (a7 = 0; a7 < pO.length; a7++) pO[a7].resize();
		pX(), pX()
	}, p8.style.width = "100%", p8.style.maxWidth = "100%", pN.style.lineHeight = "1.5em", pN.style.overflowX = "hidden", pN.style.overflowY = "auto";
	for (var a7 = 0; a7 < pO.length; a7++) p8.appendChild(pO[a7].p8);
	pN.appendChild(p8)
}

function q(pg, ph, pi, pj, pk) {
	var self, pl = document.createElement("button");

	function ps() {
		var py;
		bF.px() || (py = b6.color.pz(pi), !1 !== pj && 0 < py[0] && py[0] < 255 && py[0] === py[1] && py[0] === py[2]) || (pl.style.backgroundColor = b6.color.q0(pi, py[3] && py[3] < 120 ? 150 : 50))
	}

	function pr() {
		if (pj) {
			var py = b6.color.pz(pi);
			if (py[0] === py[1] && py[0] === py[2]) return
		}
		ph && ((py = ph(this)) ? 2 === py && ps() : q2(this))
	}

	function pu() {
		this.style.backgroundColor = pi
	}

	function pt() {
		q2(this)
	}

	function q2(eb) {
		eb.style.backgroundColor = pi, eb.blur()
	}
	this.button = pl, this.pm = ph, this.pn = pi, this.pq = function(pv) {
		pv = 1.1 - Math.min(.01 * pg.length, .6) + .2 * pv;
		pl.style.fontSize = pv.toFixed(1) + "em"
	}, this.pp = function(et) {
		et ? 1 === et ? et = b7.mk : 2 === et && (pj = 1, et = b7.mk) : (pj = 0, et = b7.mU), this.pn = pi = et, pl.style.backgroundColor = et
	}, self = this, pl.innerHTML = pg, pl.style.color = pk ? b7.nU : b7.mY, pl.style.userSelect = "none", pl.style.outline = "none", pl.style.overflowWrap = "break-word", self.pp(pi), pl.style.border = "none", pl.style.font = "inherit", self.pq(
		0), pl.style.padding = "0em 0.3em", pl.onclick = pr, pl.addEventListener("mouseover", ps), pl.addEventListener("mouseout", pt), pl.addEventListener("focus", ps), pl.addEventListener("blur", pu)
}

function q3(q4, pN) {
	var p8;
	this.resize = function() {
		for (var a7 = 0; a7 < q4.length; a7++) b6.pT.pf(q4[a7].button);
		p8.style.gap = p8.style.padding = b6.pT.pe(bY.pb)
	}, (p8 = document.createElement("div")).style.display = "grid", p8.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", p8.style.overflowY = "auto", p8.style.gridAutoRows = "5.3em", p8.style.maxHeight = "100%";
	for (var a7 = 0; a7 < q4.length; a7++) q4[a7].pq(1), p8.appendChild(q4[a7].button);
	pN.appendChild(p8)
}

function q6(q7, q8, q9) {
	this.ef = 0, this.eh = 0, this.a1 = 0, this.j7 = 0, this.resize = function() {
		this.j7 = Math.min(b6.pT.pU(q9 || .5) * q7[1] * at.pV, at.j7 - 2 * bY.gap), this.a1 = Math.min(this.j7 * (q7[0] / q7[1]), at.a1 - 2 * bY.gap), this.j7 = q7[1] * this.a1 / q7[0], this.ef = bY.gap + q8[0] * (at.a1 - this.a1 - 2 * bY.gap),
			this.eh = bY.gap + q8[1] * (at.j7 - this.j7 - 2 * bY.gap)
	}, this.qA = function() {
		return this.ef + .5 * this.a1
	}
}

function qB(qC, qD) {
	var qM, self, qE = document.createElement("div"),
		qF = document.createElement("div"),
		qG = document.createElement("div"),
		qH = null,
		qN = (this.qI = new qJ({
			value: "",
			e0: -1
		}, 0, qK, function(e) {
			qH.qU.textContent = 127 - e.target.value.length
		}), 0),
		qO = 1,
		qP = 0,
		qQ = 1048575,
		qR = [];

	function qK() {
		qC(), qH.qU.textContent = 127
	}

	function qj(bo) {
		qO ? qE.scrollTop = qE.scrollHeight : bo && (qE.scrollTop = qP)
	}

	function qf(qe, pL) {
		var qk, p8;
		pL && (qk = 0 < pL.id, (p8 = document.createElement("div")).style.margin = "0.6em 0.6em", qk && (p8.style.paddingLeft = "0.7em"), p8.style.font = "inherit", p8.style.marginLeft = p8.style.marginRight = "inherit", p8.style.fontSize = pL
			.fontSize.toFixed(2) + "em", qk && (p8.style.fontStyle = "italic"), 0 < pL.ql.length && pL.ql[0] && p8.appendChild(qm(pL.ql[0], 14 === pL.id)), p8.appendChild(qn(pL.qo[0])), 2 === pL.ql.length && p8.appendChild(qm(pL.ql[1], 1)), 2 ===
			pL.qo.length && p8.appendChild(qn(pL.qo[1])), qe.appendChild(p8))
	}

	function qm(ql, qp) {
		if (ql.qq) {
			for (var a7 = qR.length - 1; 0 <= a7; a7--)
				if (ql.qr === qR[a7].qr) {
					ql = qR[a7], a7 < 40 && qR.push(ql);
					break
				}
		} else qR.push(ql), 50 < qR.length && qR.shift();
		var qU = document.createElement("span");
		return qU.textContent = bk.qg.qs(ql, bk.s.qY[0], qp), qU.style.display = "inline-block", qU.style.color = bk.qg.qt(ql.qu), qU.style.cursor = "pointer", qU.style.margin = "0", qU.style.font = "inherit", qU.style.minWidth = qU.style.minHeight =
			"1em", bk.qg.qv(ql) && (qU.style.textDecoration = "underline"), bk.qg.qw(ql.qx) && (qU.style.fontWeight = "bold"), qU.onclick = function(e) {
				qD(e, ql)
			}, bF.px() || (qU.onmouseover = function(e) {
				bk.qy.qz(e, ql)
			}), qU
	}

	function qn(qo) {
		var qU = document.createElement("span");
		return qU.textContent = qo.pA, qU.style.color = qo.color, qU.style.margin = "0", qU.style.font = "inherit", qo.r0 && (qU.style.fontWeight = "bold"), qU
	}
	this.qV = function(qW) {
			qQ = 1048575, qF.textContent = "", qW || this.lI()
		}, this.lI = function() {
			var qX = bk.s.qY[0],
				qZ = bk.s.qa[qX],
				qb = qZ.qb,
				eY = qb.length,
				iu = 1048575 === qQ ? 0 : eY - (qZ.qc - qQ + 1048575) % 1048575,
				kP = (qQ = qZ.qc, iu = Math.max(iu, 0), bk.s.qd.length);
			if (!(eY <= iu && 0 === kP)) {
				for (var qe = document.createDocumentFragment(), a7 = 0; a7 < kP; a7++) qf(qe, bk.qg.qh(bk.s.qd[a7]));
				for (bk.s.qd = [], a7 = iu; a7 < eY; a7++) qf(qe, bk.qg.qi(qX, qb[a7]));
				qF.appendChild(qe), qj()
			}
		}, this.show = function(pN) {
			pN.appendChild(qE), pN.appendChild(qG), this.resize(pN)
		}, this.r1 = function(pN) {
			pN.removeChild(qE), pN.removeChild(qG)
		}, this.resize = function(pN) {
			qN = pN ? pN.offsetHeight : qN;
			var pN = b6.pT.r3(.04, .75),
				r4 = Math.max(pN, qN - pN),
				r5 = at.a1 / at.pZ,
				r6 = .7 * r5,
				r4 = (qG.style.top = b6.pT.pe(qN - pN), qG.style.height = b6.pT.pe(pN), qE.style.top = b6.pT.pe(qN - pN - r4), qE.style.height = b6.pT.pe(r4), b6.pT.pf(qE, 2), this.qI.e.style.width = b6.pT.pe(r6), this.qI.e.style.fontSize = qM.button
					.style.fontSize = b6.pT.pe(.5 * pN), b6.pT.pf(this.qI.e, 6), qM.button.style.left = b6.pT.pe(r6), qM.button.style.width = b6.pT.pe(r5 - r6), .385 * pN);
			u.v.r8() && (r4 *= .8 - .12 * (at.a1 > at.j7)), qF.style.marginLeft = qF.style.marginRight = b6.pT.pe(.5 * r4), qF.style.fontSize = b6.pT.pe(r4), qj(1)
		}, (self = this).qI.e.qS = 127, qE.style.position = "absolute", qE.style.top = "0", qE.style.left = "0", qE.style.width = "100%", qE.style.overflowX = "hidden", qE.style.overflowY = "auto", qE.style.font = "inherit", qE.style
		.backgroundColor = b7.mW, qE.addEventListener("scroll", function() {
			qP = qE.scrollTop, qO = qP < qE.scrollHeight - qE.clientHeight - 2 ? 0 : 1
		}), qF.style.font = "inherit", qG.style.position = "absolute", qG.style.left = "0", qG.style.width = "100%", self.qI.e.setAttribute("placeholder", L(13)), self.qI.e.style.position = "absolute", self.qI.e.style.top = "0", self.qI.e.style
		.left = "0", self.qI.e.style.height = "100%", self.qI.e.style.backgroundColor = b7.mT, self.qI.e.style.textAlign = "center", (qM = new q(L(14), qK)).button.top = "0", qM.button.style.position = "absolute", qM.button.style.height = "100%", qM
		.pp(b7.ng), qH = new qT("127", qM.button, 1, 1), qE.appendChild(qF), qG.appendChild(self.qI.e), qG.appendChild(qM.button)
}

function r9(rA, pg, rB) {
	function click() {
		var value = 1 - rA.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + pg, void 0 !== rA.e0 ? bf.rC.rD(rA.e0, value) : rA.value = value, rB && rB(value)
	}
	var e;
	pg = pg || L(15), this.e = document.createElement("p"), (e = this.e).textContent = (rA.value ? "🟩 " : "⬜ ") + pg, e.style.margin = "0", e.style.marginBottom = "0.5em", e.style.cursor = "pointer", e.addEventListener("click", click)
}

function rE(pN, pG) {
	var p8 = document.createElement("div");
	this.pP = p8, this.resize = function() {
		p8.style.padding = b6.pT.pe(bY.pb), p8.style.lineHeight = b6.pT.pe(b6.pT.r3(.035))
	}, pN.style.overflowX = "hidden", pN.style.overflowY = "auto", p8.innerHTML = pG, pN.appendChild(p8)
}

function rF(rG) {
	var p8 = document.createElement("div");
	this.e = p8, this.rH = rG, this.resize = function() {
		for (var eY = rG.length, a7 = 1; a7 < eY; a7++) b6.pT.pf(rG[a7], 4)
	};
	var a7, eY = rG.length;
	for (p8.style.width = "100%", p8.style.height = "2.7em", p8.style.marginTop = "0.6em", p8.style.border = "inherit", a7 = 0; a7 < eY; a7++) rG[a7].style.verticalAlign = "top", rG[a7].style.width = (100 / eY).toFixed(2) + "%", rG[a7].style.height =
		"100%", rG[a7].style.fontSize = "0.75em", p8.appendChild(rG[a7])
}

function rI(rJ, pi, rK) {
	this.p8 = document.createElement("div"), this.q4 = rJ;
	var rL = 0;
	this.resize = function(pN, rN) {
		var eY = rJ.length;
		if (!rK)
			for (var a7 = 1; a7 < eY; a7++) b6.pT.pf(rJ[a7].button, 4);
		for (var rO = 0, a7 = 0; a7 < eY; a7++) rO += rJ[a7].button.offsetWidth;
		if (pN && (rL = pN.offsetWidth), rN && rO < rL)
			for (a7 = 0; a7 < eY; a7++) rJ[a7].button.style.width = (100 * rJ[a7].button.offsetWidth / rO).toFixed(2) + "%";
		else
			for (a7 = 0; a7 < eY; a7++) rJ[a7].button.style.width = "auto";
		rN || this.resize(pN, 1)
	};
	var rM = this;
	rM.p8.style.height = rM.p8.style.maxHeight = "100%";
	for (var a7 = 0; a7 < rJ.length; a7++) rJ[a7].pp(pi), rJ[a7].button.style.height = "100%", rJ[a7].button.style.padding = "0.0em 0.9em", rM.p8.appendChild(rJ[a7].button)
}

function rP() {
	var e;
	this.e = document.createElement("hr"), this.resize = function() {
		b6.pT.pf(this.e, 8, b7.mh)
	}, (e = this.e).style.marginBottom = e.style.marginTop = "0.65em", e.style.marginLeft = e.style.marginRight = "-4%", e.style.border = "none"
}

function rQ() {
	var rR = document.createElement("div"),
		rS = 0,
		rT = 0;
	this.show = function(ef, eh, pA, rU) {
		if (rS) {
			if (!rU) return;
			this.r1()
		}
		rT = rU, rS = 1, rR.textContent = pA, b6.pT.pf(rR, 5), rR.style.font = b6.pT.rV(0, b6.pT.r3(.015)), rR.style.padding = "0.3em 0.6em", rR.style.left = ef + "px", rR.style.top = eh - b6.pT.r3(.036) + "px", document.body.appendChild(rR), rR
			.style.top = eh - rR.offsetHeight + rT * bY.rW + "px";
		rU = ef + rR.offsetWidth - at.a1 / at.pZ;
		0 < rU && (rR.style.left = ef - rU + "px")
	}, this.r1 = function(rX) {
		!rS || rX && rT || (rS = 0, document.body.removeChild(rR))
	}, rR.style.position = "absolute", rR.style.backgroundColor = b7.mU, rR.style.color = b7.mY, rR.style.whiteSpace = "pre", rR.style.pointerEvents = "none"
}

function qJ(rY, type, rZ, ra) {
	var e;
	this.e = document.createElement("input"), (e = this.e).type = type ? "number" : "text", e.id = "input" + n.s.rb++, e.value = rY.value, e.style.width = "100%", e.style.userSelect = "none", e.style.outline = "none", e.style.resize = "none", e.style
		.border = "inherit", e.style.font = "inherit", e.style.color = b7.mY, e.style.backgroundColor = b7.mR, e.style.fontSize = "1em", e.style.padding = "0.1em 0.2em", e.addEventListener("focus", function() {
			at.rc++
		}), e.addEventListener("blur", function() {
			at.rc--, -1 !== rY.e0 && bf.rC.rD(rY.e0, e.value)
		}), e.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== rY.e0 && bf.rC.rD(rY.e0, e.value), rZ ? rZ() : e.blur())
		}), ra && e.addEventListener("input", function(pL) {
			ra(pL)
		})
}

function rd(pN, data) {
	var eY = data.re.length,
		rf = document.createElement("div"),
		rg = document.createElement("div"),
		rh = document.createElement("div"),
		ri = new Array(eY),
		pO = new Array(eY),
		rj = new Array(data.rk.length),
		rl = b6.color.mS(70, 70, 0, .35);

	function q0() {
		this.style.backgroundColor = b6.color.q0(rl, 160)
	}

	function rp() {
		this.style.backgroundColor = rl
	}

	function pX() {
		var er;
		for (pN.style.font = b6.pT.rV(0, b6.pT.ry(.026, .5, .03)), a7 = 1; a7 < rj.length; a7++) b6.pT.pf(rj[a7], 4);
		if (b6.pT.pf(rf, 2), eY) {
			for (var gy, rz = rf.offsetWidth, s0 = rh.offsetWidth, a7 = 0; a7 < rj.length; a7++) gy = .01 * data.ro[a7] * s0, rj[a7].style.width = (100 * gy / rz).toFixed(2) + "%";
			var kP = data.re[0].length;
			for (a7 = 0; a7 < eY; a7++)
				for (b6.pT.pf(ri[a7], 2), er = 1; er < kP; er++) b6.pT.pf(pO[a7][er], 4)
		}
	}
	this.resize = function() {
			pX(), pX()
		}, pN.style.display = "flex", pN.style.flexDirection = "column", rg.style.overflowX = "hidden", rg.style.overflowY = "auto",
		function() {
			var eb, a7, re = data.re,
				kP = eY ? re[0].length : 0;
			for (a7 = 0; a7 < eY; a7++) {
				ri[a7] = document.createElement("div"), ri[a7].style.backgroundColor = function(a7) {
					return a7 % 2 == 1 ? b6.color.mS(130, 130, 130, .35) : b7.mX
				}(a7), ri[a7].style.width = "100%", ri[a7].style.display = "flex", pO[a7] = new Array(kP);
				for (var er = 0; er < kP; er++) pO[a7][er] = eb = document.createElement("div"), eb.style.display = "flex", eb.style.justifyContent = "center", eb.style.wordBreak = "break-all", eb.style.padding = "0.4em 0em", eb.style.width = data
					.ro[er] + "%", eb.innerHTML = re[a7][er].f0, 1 === re[a7][er].dk && (eb.name = "" + a7, eb.style.color = b7.nU, eb.style.backgroundColor = rl, eb.addEventListener("mouseover", q0), eb.addEventListener("mouseout", rp), function(eb,
						qr, rr) {
						2147483647 !== rr && eb.addEventListener("click", function() {
							b9.a3(30), b9.a4(30, qr), bD.dU(b9.a8), this.style.backgroundColor = rl, n.o(8, n.rs, new rt(25, {
								ru: 0,
								qr: bB.rv.rw(bB.rv.rx(5)),
								rr: rr
							}))
						})
					}(eb, re[a7][er].qr, re[a7][er].rr)), ri[a7].appendChild(eb)
			}
			for (rf.style.display = "flex", rf.style.backgroundColor = b6.color.mS(0, 120, 0, .35), a7 = 0; a7 < rj.length; a7++) rj[a7] = eb = document.createElement("div"), eb.style.display = "flex", eb.style.justifyContent = "center", eb.style
				.wordBreak = "break-all", eb.style.padding = "0.4em 0em", eb.style.width = data.ro[a7] + "%", eb.innerHTML = data.rk[a7], rf.appendChild(eb)
		}();
	for (var a7 = 0; a7 < eY; a7++) rh.appendChild(ri[a7]);
	rg.appendChild(rh), pN.appendChild(rf), pN.appendChild(rg)
}

function s1() {
	var s5, s6, s2 = document.createElement("div"),
		s3 = document.createElement("div"),
		s4 = document.createElement("div"),
		rh = document.createElement("div"),
		q4 = [],
		s7 = [L(16), L(17), L(18), L(19), L(20), L(21)],
		s8 = [1, 2, 3, 0, 9, 10];

	function s9(a7) {
		n.o(8, 0, new rt(21, {
			sB: s8[a7],
			sC: 0,
			sD: 10
		}))
	}
	this.show = function() {
			this.rD(n.s.sE), document.body.appendChild(s2)
		}, this.r1 = function() {
			document.body.removeChild(s2)
		}, this.rD = function(sE) {
			for (var sF = [3, 0, 1, 2, 4, 5], a7 = 0; a7 < q4.length; a7++) {
				var a1 = sE[a7];
				s5[sF[a7]][1].qU.textContent = a1 || ""
			}
		}, this.resize = function() {
			var a7, sG = bY.gap,
				j7 = b6.pT.sH(.085),
				a1 = Math.min(4 * j7, at.a1 - 2 * sG),
				eY = q4.length;
			for (b6.pT.sI(s2, sG, at.j7 - sG - j7, a1, j7), b6.pT.pf(s2), b6.pT.pf(s3, 6), a7 = 0; a7 < eY - 1; a7++) b6.pT.pf(q4[a7].button, 6);
			for (a7 = 0; a7 < eY; a7++) s5[a7][0].resize();
			for (q4[0].ef = 0, q4[0].button.style.left = b6.pT.pe(q4[0].ef), q4[0].button.style.width = b6.pT.pe(100), a7 = 1; a7 < eY; a7++) q4[a7].ef = q4[a7 - 1].ef + q4[a7 - 1].button.offsetWidth, q4[a7].button.style.left = b6.pT.pe(q4[a7].ef);
			if (!s6) {
				if (!aX.sJ()) return;
				(s6 = aX.get(14)).style.width = "24%", s6.style.position = "absolute", s3.appendChild(s6)
			}
			s6.style.left = b6.pT.pe(0), s6.style.top = "7%"
		}, s2.style.position = "absolute", s3.style.width = "25%", s3.style.height = "100%", s3.style.backgroundColor = b7.mU, s4.style.position = "absolute", s4.style.width = "75%", s4.style.height = "100%", s4.style.backgroundColor = b7.mU, s4
		.style.top = s4.style.right = b6.pT.pe(0), s4.style.overflowX = "auto", s4.style.overflowY = "hidden", s4.style.whiteSpace = "nowrap", rh.style.height = rh.style.maxHeight = "100%", q4.push(new q("", function() {
			s9(0)
		}, b7.nI)), q4.push(new q("", function() {
			s9(1)
		}, b7.nJ)), q4.push(new q("", function() {
			s9(2)
		}, b7.nB)), q4.push(new q("", function() {
			s9(3)
		}, b7.mw)), q4.push(new q("", function() {
			s9(4)
		}, b7.nd)), q4.push(new q("", function() {
			s9(5)
		}, b7.nb)), s5 = new Array(q4.length);
	for (var a7 = 0; a7 < q4.length; a7++) q4[a7].button.style.position = "absolute", s5[a7] = [new sA(s7[a7], q4[a7].button, .25, .45), new sA("", q4[a7].button, .53, .84, 1)], q4[a7].button.style.height = q4[a7].button.style.maxHeight = "100%", q4[
		a7].button.top = b6.pT.pe(0), rh.appendChild(q4[a7].button);
	s4.appendChild(rh), s2.appendChild(s3), s2.appendChild(s4)
}

function sK(sL, sM, sN, sO, qC, qD) {
	var sP = document.createElement("div"),
		sQ = document.createElement("div"),
		sR = document.createElement("div"),
		sS = document.createElement("div"),
		sT = document.createElement("div"),
		sU = document.createElement("div"),
		sV = document.createElement("div"),
		sW = document.createElement("div"),
		sX = document.createElement("span"),
		sY = document.createElement("div");
	this.sZ = new qB(qC, qD), this.sa = new sb(qD), this.sc = [sL, sM, sN, sO], this.sg = function(sh) {
		sh = (sh / 10).toFixed(1) + "%";
		sW.style.width = sh, sX.innerHTML = sh
	}, this.si = function() {
		this.sa.r1(sU), this.sZ.show(sU)
	}, this.sj = function() {
		this.sZ.r1(sU), this.sa.show(sU)
	}, this.show = function() {
		document.body.appendChild(sP)
	}, this.r1 = function() {
		document.body.removeChild(sP)
	}, this.resize = function(sk) {
		var sl = 1 - .4 * u.v.r8() * (at.a1 > 1.6 * at.j7),
			sm = b6.pT.r3(.05 * sl),
			sn = at.j7 > at.a1,
			so = b6.pT.r3(.07 * sl + .03 * sn),
			sp = b6.pT.r3(.04 + .02 * sn),
			sn = b6.pT.r3(.02 * sl + .01 * sn),
			sr = b6.pT.r3(.025);
		sP.style.font = b6.pT.rV(0, sr), sl < 1 && (sr = b6.pT.rV(0, sl * sr), sQ.style.font = sr, sR.style.font = sr, sT.style.font = sr, sY.style.font = sr, sV.style.font = sr, sS.style.font = sr), sQ.style.height = b6.pT.pe(sm), b6.pT.pf(sQ,
				2), sR.style.top = b6.pT.pe(sm), sR.style.height = b6.pT.pe(so), b6.pT.pf(sR, 2), sS.style.font = b6.pT.rV(0, sl * b6.pT.r3(.02)), sS.style.top = b6.pT.pe(sm + so), sS.style.height = b6.pT.pe(sp), b6.pT.pf(sS, 2), sT.style.top =
			b6.pT.pe(sm + so + sp), sT.style.height = b6.pT.pe(so), b6.pT.pf(sT, 2), sU.style.top = b6.pT.pe(sm + so + sp + so), sU.style.height = b6.pT.pe(at.j7 / at.pZ - sm - 3 * so - sp - sn), sV.style.top = b6.pT.pe(at.j7 / at.pZ - so - sn),
			sV.style.height = b6.pT.pe(sn), b6.pT.pf(sV, 8), sX.style.font = b6.pT.rV(0, .8 * sn), sY.style.top = b6.pT.pe(at.j7 / at.pZ - so), sY.style.height = b6.pT.pe(so), b6.pT.pf(sY, 8), sL.resize(sR), sM.resize(sR), sN.resize(sR), sO
			.resize(sR), sk ? this.sZ.resize(sU) : this.sa.resize()
	};
	qC = this;
	sP.style.position = "absolute", sP.style.top = "0", sP.style.left = "0", sP.style.width = "100%", sP.style.height = "100%", sP.style.backgroundColor = b7.mX, bF.px() || (sP.style.backdropFilter = "blur(4px)", sP.style.webkitBackdropFilter =
		"blur(4px)"), sQ.style.position = "absolute", sQ.style.top = "0", sQ.style.left = "0", sQ.style.width = "100%", sQ.style.display = "flex";
	for (var g = [sR, sS, sT, sY], a7 = 0; a7 < g.length; a7++) g[a7].style.position = "absolute", g[a7].style.left = "0", g[a7].style.width = "100%", g[a7].style.overflowX = "auto", g[a7].style.overflowY = "hidden", g[a7].style.whiteSpace =
	"nowrap";
	sU.style.position = "absolute", sU.style.left = "0", sU.style.width = "100%", sU.style.font = "inherit", sV.style.position = "absolute", sV.style.left = "0", sV.style.width = "100%", sW.style.position = "absolute", sW.style.top = "0", sW.style
		.left = "0", sW.style.height = "100%", sW.style.width = "50%", sW.style.backgroundColor = b7.mu, sX.innerHTML = "", sX.style.position = "absolute", sX.style.top = "50%", sX.style.left = "50%", sX.style.transform = "translate(-50%, -50%)", sQ
		.appendChild(function() {
			var sf = document.createElement("h1");
			return sf.textContent = "Lobby", sf.style.margin = "auto", sf.style.fontFamily = "inherit", sf.style.fontSize = "inherit", sf.style.fontWeight = "inherit", sf
		}()), sR.appendChild(sL.p8), sS.appendChild(sM.p8), sT.appendChild(sN.p8), sV.appendChild(sW), sV.appendChild(sX), sY.appendChild(sO.p8), sP.appendChild(sQ), sP.appendChild(sR), sP.appendChild(sS), sP.appendChild(sT), sP.appendChild(sU), sP
		.appendChild(sV), sP.appendChild(sY), qC.sa.show(sU)
}

function sb(qD) {
	var sP = document.createElement("div"),
		sU = document.createElement("div");
	this.lI = function() {
			sU.textContent = "", bk.qy.r1(1);
			for (var qe = document.createDocumentFragment(), st = bk.s.qY[0], su = bk.su.sv[st], sw = bk.su.sw[st], a7 = 0; a7 < su.length; a7++) ! function(qe, pL, sy, st) {
				var qU = document.createElement("span");
				qU.textContent = (sy ? "🟢 " : "⚪ ") + bk.qg.qs(pL, st), qU.style.color = bk.qg.qt(pL.qu), qU.style.cursor = "pointer", qU.style.margin = "0.2em 0.2em 0.2em 0.2em", qU.style.width = qU.style.maxWidth = 2 === st ? "10em" : "9em",
					qU.style.height = qU.style.maxHeight = "1.4em", qU.style.whiteSpace = "nowrap", qU.style.overflow = "hidden", qU.style.textOverflow = "ellipsis", qU.style.font = "inherit", qU.style.display = "inline-block", bk.qg.qv(pL) && (
						qU.style.textDecoration = "underline"), qU.onclick = function(e) {
						qD(e, pL)
					}, bF.px() || (qU.onmouseover = function(e) {
						bk.qy.qz(e, pL)
					}), qe.appendChild(qU)
			}(qe, su[a7], a7 < sw, st);
			sU.appendChild(qe)
		}, this.show = function(pN) {
			pN.appendChild(sP)
		}, this.r1 = function(pN) {
			pN.removeChild(sP)
		}, this.resize = function() {
			sU.style.fontSize = b6.pT.pe(b6.pT.r3(.02, .3))
		}, sP.style.top = "0", sP.style.left = "0", sP.style.width = sP.style.height = "100%", sP.style.overflowX = "hidden", sP.style.overflowY = "auto", sP.style.font = "inherit", sU.style.font = "inherit", sU.style.margin = "0.4em", sP
		.appendChild(sU)
}

function sz(rJ) {
	var sP = document.createElement("div"),
		t0 = document.createElement("div"),
		rS = (this.ef = 0, this.eh = 0);

	function t2() {
		bk.t3.r1()
	}
	this.q4 = rJ, this.show = function(ef, eh, t5) {
		if (rS) return [0, 0];
		rS = 1, this.ef = ef, this.eh = eh,
			function(self, t5) {
				var a1 = b6.pT.r3(.16, .7),
					j7 = rJ.length * a1 / 3,
					t7 = at.a1 / at.pZ,
					t8 = at.j7 / at.pZ,
					mA = Math.min(1, Math.min(t7 / a1, t8 / j7));
				a1 *= mA, j7 *= mA, t5 && (self.ef += b6.pT.r3(.03, .5)), self.ef = bH.p0(self.ef, 0, t7 - a1), self.eh = bH.p0(self.eh, 0, t8 - j7), t0.style.left = self.ef + "px", t0.style.top = self.eh + "px", t0.style.width = a1 + "px", t0
					.style.height = j7 + "px", t0.style.font = b6.pT.rV(0, .34 * j7 / rJ.length), b6.pT.pf(t0, 5);
				for (var a7 = 1; a7 < rJ.length; a7++) b6.pT.pf(rJ[a7].button, 8)
			}(this, t5), document.body.appendChild(sP)
	}, this.r1 = function() {
		rS && (rS = 0, sP.removeEventListener("click", t2), document.body.removeChild(sP))
	};
	for (var a7 = 0; a7 < rJ.length; a7++) new qT("" + (1 + a7), rJ[a7].button, 0, 1);
	sP.style.position = "fixed", sP.style.top = "0", sP.style.left = "0", sP.style.width = "100%", sP.style.height = "100%", sP.style.zIndex = "5", t0.style.position = "absolute",
		function() {
			for (var t4 = (100 / rJ.length).toFixed(2) + "%", a7 = 0; a7 < rJ.length; a7++) rJ[a7].button.style.width = "100%", rJ[a7].button.style.height = rJ[a7].button.style.maxHeight = t4, rJ[a7].button.style.padding = "0.0em 0.9em", t0
				.appendChild(rJ[a7].button)
		}(), sP.appendChild(t0), sP.addEventListener("click", t2)
}

function t9(rY, tA) {
	this.pJ = [];
	var tB = this.pJ;

	function click() {
		for (var a7 = 0; a7 < tB.length; a7++) tB[a7].textContent = tB[a7].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var e0 = parseInt(this.name);
		void 0 !== rY.e0 && bf.rC.rD(rY.e0, e0), tA && tA(e0)
	}
	for (var tC, eY = rY.tD.length, a7 = 0; a7 < eY; a7++)(tC = document.createElement("p")).textContent = "⚪ " + rY.tD[a7], tC.style.margin = "0", tC.name = "" + a7, tC.style.cursor = "pointer", tC.style.fontSize = "1em", tC.addEventListener(
		"click", click), tB.push(tC);
	tB[rY.value].textContent = tB[rY.value].textContent.replace("⚪", "🟢")
}

function tE(title, tF, tG) {
	var s2 = document.createElement("div"),
		tH = document.createElement("div"),
		rh = document.createElement("div"),
		tI = document.createElement("div"),
		tJ = document.createElement("div");
	this.tK = rh, this.tL = tF, this.show = function() {
			!1 !== tG ? document.body.appendChild(s2) : (document.body.appendChild(tH), document.body.appendChild(tI))
		}, this.r1 = function() {
			!1 !== tG ? document.body.removeChild(s2) : (document.body.removeChild(tH), document.body.removeChild(tI))
		}, this.tP = function() {
			var r4 = b6.pT.r3(.1),
				r2 = b6.pT.r3(.08 + .04 * (at.tQ < 1));
			return {
				r4: r4,
				r2: r2,
				tR: at.j7 / at.pZ - r4 - r2
			}
		}, this.resize = function(rN) {
			var eY = tF.length,
				tS = this.tP(),
				r4 = tS.r4,
				r2 = tS.r2;
			for (tH.style.height = b6.pT.pe(r4), b6.pT.pf(tH, 2), tI.style.top = b6.pT.pe(at.j7 / at.pZ - r2), tI.style.height = b6.pT.pe(r2), b6.pT.pf(tI, 8), rh.style.top = b6.pT.pe(r4), rh.style.height = rh.style.maxHeight = b6.pT.pe(tS.tR), tH
				.style.font = b6.pT.rV(0, b6.pT.r3(.02, .3)), tI.style.font = b6.pT.rV(0, b6.pT.r3(.02, .7)), rh.style.font = b6.pT.rV(0, b6.pT.r3(.02, .7)), a7 = 1; a7 < eY; a7++) b6.pT.pf(tF[a7].button, 4);
			for (var rO = 0, a7 = 0; a7 < eY; a7++) rO += tF[a7].button.offsetWidth;
			if (rN && rO < tI.offsetWidth)
				for (a7 = 0; a7 < eY; a7++) tF[a7].button.style.width = (100 * tF[a7].button.offsetWidth / rO).toFixed(2) + "%";
			else
				for (a7 = 0; a7 < eY; a7++) tF[a7].button.style.width = "auto";
			rN || this.resize(!0)
		}, this.tT = function() {
			var tS = this.tP(),
				et = at.pZ;
			tU.fillStyle = b7.mU, tU.fillRect(0, et * tS.r4, at.a1, et * tS.tR)
		}, s2.style.position = "absolute", s2.style.top = "0", s2.style.left = "0", s2.style.width = "100%", s2.style.height = "100%", tH.style.position = "absolute", tH.style.top = "0", tH.style.left = "0", tH.style.width = "100%", tH.style
		.display = "flex", tH.style.backgroundColor = b7.mU, tI.style.position = "absolute", tI.style.left = "0", tI.style.width = "100%", tI.style.overflowX = "auto", tI.style.overflowY = "hidden", tI.style.whiteSpace = "nowrap", tJ.style.height =
		tJ.style.maxHeight = "100%", rh.style.position = "absolute", rh.style.width = "100%", rh.style.backgroundColor = b7.mU,
		function() {
			for (var a7 = 0; a7 < tF.length; a7++) tF[a7].button.style.height = "100%", tF[a7].button.style.padding = "0.0em 0.9em"
		}();
	for (var a7 = 0; a7 < tF.length; a7++) tJ.appendChild(tF[a7].button);
	tH.appendChild(function() {
		var tO = document.createElement("h1");
		return tO.textContent = title, tO.style.margin = "auto", tO.style.fontSize = 20 < title.length && at.j7 > at.a1 ? "1.8em" : "2.3em", tO
	}()), tI.appendChild(tJ), !1 !== tG && (s2.appendChild(rh), s2.appendChild(tH), s2.appendChild(tI))
}

function qT(tV, tW, tX, tY) {
	var self;
	this.qU = document.createElement("span"), (self = this).qU.textContent = tV, self.qU.style.color = b7.mY, self.qU.style.position = "absolute", self.qU.style.font = "inherit", tY ? self.qU.style.bottom = "0.06em" : self.qU.style.top = "0.12em",
		tX ? self.qU.style.left = "0.2em" : self.qU.style.right = "0.2em", self.qU.style.fontSize = "0.6em", self.qU.style.pointerEvents = "none", self.qU.style.whiteSpace = "pre", tW.style.position = "relative", tW.style.overflow = "hidden", tW
		.appendChild(self.qU)
}

function sA(tV, tW, tZ, ta, tb) {
	var self;
	this.qU = document.createElement("span"), this.resize = function() {
			this.qU.style.fontSize = ((ta - tZ) * tW.offsetHeight).toFixed(1) + "px"
		}, (self = this).qU.textContent = tV, self.qU.style.color = b7.mY, self.qU.style.font = "inherit", self.qU.style.margin = "0.1em 0.6em", self.qU.style.pointerEvents = "none", tb && (self.qU.style.fontWeight = "bold"), self.qU.style
		.whiteSpace = "nowrap", self.qU.style.display = "block", tW.appendChild(self.qU)
}

function tc(td, te, tf, tg) {
	var th = document.createElement("textarea"),
		ti = (this.e = th, !0);

	function tn() {
		th.select(), document.execCommand("copy")
	}
	this.resize = function() {
			te && b6.pT.pf(th, 5)
		}, this.tj = function(qo) {
			th.value = qo
		}, this.tk = function() {
			return th.value
		}, this.tl = function() {
			th.select()
		}, this.clear = function() {
			th.value = ""
		}, this.tm = function() {
			ti && navigator.clipboard ? (th.select(), navigator.clipboard.writeText(th.value).catch(function() {
				ti = !1, tn()
			})) : tn()
		}, th.setAttribute("id", "textArea" + n.s.rb++), th.setAttribute("autocomplete", "off"), td && th.setAttribute("placeholder", td), th.style.top = "0", th.style.left = "0", th.style.width = "100%", th.style.height = "100%", th.style
		.userSelect = "none", th.style.outline = "none", th.style.resize = "none", th.style.border = "none", th.style.color = b7.mY, th.style.backgroundColor = b7.mR, tg ? (th.style.fontSize = "1em", th.rows = 6, th.style.padding = "0.25em") : (th
			.style.padding = "0.45em", th.style.fontSize = "1.2em"), tf && th.addEventListener("input", function(e) {
			tf(e)
		}), th.addEventListener("focus", function() {
			at.rc++
		}), th.addEventListener("blur", function() {
			at.rc--
		})
}

function dB() {
	this.pm = new to, this.dp = new tp, this.rC = new tq, this.s = new tr, this.dU = function() {
		this.dp.dU(), (new ts).dU()
	}
}

function tp() {
	function tt(a7, type, tz, f1) {
		bf.dp.data.push({
			e0: a7,
			type: type || 0,
			value: tz || 0,
			tz: tz || 0,
			f1: f1 || 0
		})
	}

	function tu(a7, type, tz, f1) {
		bf.dp.data.push({
			e0: a7,
			type: type,
			value: tz || "",
			tz: tz || "",
			f1: f1 || 0
		})
	}

	function tv(mG) {
		for (var a7 = bf.dp.data.length; a7 < mG; a7++) bf.dp.data.push(null)
	}
	this.data = [], this.dU = function() {
		tt(0, 1, 0, 5), tt(1, 1, 1), tt(2, 0), tu(3, 2), tt(4, 1), tu(5, 2, "Trebuchet MS", 1), tt(6, 0), tt(7, 0, 0), tt(8, 0), tt(9, 1, 1), tt(10, 1), tt(11, 1, 1), tu(12, 2, navigator.language), tv(100), tu(100, 2), tu(101, 2), tu(102, 2), tu(
				103, 2), tu(104, 2), tu(105, 2), tu(106, 2), tt(107), tt(108), tt(109), tu(110, 2), tt(111), tt(112), tt(113), tu(114, 2), tt(115), tu(116, 2), tt(117, 1), tu(118, 2, "", 2), tt(119, 1, 0, 1), tu(120, 2), tt(121, 1, ~~(262144 *
				Math.random())), tu(122, 2, "Player " + Math.floor(1e3 * Math.random())), tt(123), tu(124), tt(125, 1), tu(126, 2), tt(127, 0, 1), tt(128), tt(129), tt(130), tt(131), tt(132), tu(133, 2), tt(134, 0, 5), tu(135, 2), tu(136, 2), tt(
				137), tt(138), tt(139), tt(140), tt(141), tt(142), tt(143), tt(144), tu(145, 2), tt(146), tt(147), tu(148, 2), tt(149), tt(150, 0, 1), tu(151, 2), tt(152, 0, 5), tt(153, 1), tt(154, 1), tu(155, 2), tu(156, 2), tt(157), tv(180),
			tt(180, 0), tt(181, 0)
	}, this.rD = function(e0, value) {
		this.data[e0].value = value
	}, this.dq = function(e0, value) {
		this.rD(e0, value), bf.pm.save(e0, String(value)), bf.pm.save(e0, String(this.data[e0].f1), !0)
	}, this.tw = function() {
		for (var a7 = 0; a7 < this.data.length; a7++) this.data[a7] && (bf.pm.save(a7, String(this.data[a7].value)), bf.pm.save(a7, String(this.data[a7].f1), !0))
	}, this.tx = function(e0) {
		return Number(this.data[e0].value)
	}, this.ty = function(e0) {
		return String(this.data[e0].value)
	}
}

function to() {
	this.u0 = function(e0, f1) {
		return Number(this.u1(e0, f1))
	}, this.u1 = function(e0, f1) {
		var f0 = null;
		return 0 === u.id ? u.u2 && (f0 = u.u2.getItem((f1 ? "v" : "d") + e0)) : 1 === u.id ? f0 = u.u3.loadString((f1 ? 1e3 : 2e3) + e0) : 2 === u.id && (f0 = u.u4[(f1 ? "v" : "d") + e0]), f0 && 0 !== f0.length ? f0 : null
	}, this.u5 = function(eY, u6) {
		var g = [],
			u7 = u6 ? "e" : "l";
		if (0 === u.id) {
			if (u.u2)
				for (a7 = 0; a7 < eY; a7++) g.push(u.u2.getItem(u7 + a7))
		} else if (1 === u.id)
			for (var u8 = u6 ? 5e3 : 3e3, a7 = 0; a7 < eY; a7++) g.push(u.u3.loadString(u8 + a7));
		else if (2 === u.id)
			for (a7 = 0; a7 < eY; a7++) g.push(u.u4[u7 + a7]);
		return g
	}, this.save = function(e0, value, f1) {
		var u9 = (f1 ? "v" : "d") + e0;
		if (0 === u.id) {
			if (u.u2 && bf.dp.data[140].value) try {
				u.u2.setItem(u9, value)
			} catch (e) {
				console.log(e)
			}
		} else 1 === u.id ? u.u3.saveString((f1 ? 1e3 : 2e3) + e0, value) : 2 === u.id && (u.u4[u9] = value, u.uA.postMessage(u9 + " " + value))
	}, this.uB = function(g, u6) {
		var eY = g.length,
			u7 = u6 ? "e" : "l";
		if (0 === u.id) {
			if (u.u2 && bf.dp.data[140].value) try {
				for (a7 = 0; a7 < eY; a7++) u.u2.setItem(u7 + a7, g[a7])
			} catch (e) {
				console.log(e)
			}
		} else if (1 === u.id)
			for (var u8 = u6 ? 5e3 : 3e3, a7 = 0; a7 < eY; a7++) u.u3.saveString(u8 + a7, g[a7]);
		else if (2 === u.id)
			for (a7 = 0; a7 < eY; a7++) u.u4[u7 + a7] = g[a7], u.uA.postMessage(u7 + a7 + " " + g[a7])
	}
}

function ts() {
	this.dU = function() {
		! function() {
			var data = bf.dp.data;
			0 === data[2].f1 && (at.j7 > at.a1 || 0 !== u.id) && (data[2].value = data[2].tz = 1);
			0 === data[100].f1 && (data[100].value = data[100].tz = (0 === u.id ? "Player " : 1 === u.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var a7, f0, data = bf.dp.data,
			eY = data.length;
		for (a7 = 0; a7 < eY; a7++) data[a7] && data[a7].f1 === bf.pm.u0(a7, !0) && (f0 = bf.pm.u1(a7), data[a7].value = null === f0 ? data[a7].tz : 2 === data[a7].type ? f0 : Number(f0));
		bf.dp.data[10].value = bf.dp.data[10].tz
	}
}

function tr() {
	function uH(g) {
		if (0 === g.length) bf.rC.rD(116, "");
		else {
			for (var uK = g[0], a7 = 1; a7 < g.length; a7++) uK += ";" + g[a7];
			bf.rC.rD(116, uK)
		}
	}
	this.uE = function() {
		bf.dp.data[110].value.length && (bf.dp.data[106].value = bf.dp.data[110], bf.rC.rD(110, ""), this.uF())
	}, this.uF = function() {
		var g = bf.dp.data[116].value.split(";");
		for (g.length % 2 == 1 && g.pop(), g.unshift(bf.dp.data[106].value), g.unshift(bf.dp.data[105].value), a7 = 2; a7 < g.length; a7 += 2)
			if (g[a7] === g[0]) {
				g.splice(a7, 2);
				break
			} for (var uG = [], a7 = 0; a7 < g.length; a7 += 2) uG.push(g[a7]);
		uH(g), bf.dp.data[117].value = 0, bf.dp.data[117].tD = uG
	}, this.uI = function(e0) {
		bf.dp.data[117].tD.splice(e0, 1), bf.dp.data[117].value = Math.min(e0, bf.dp.data[117].tD.length - 1);
		var g = bf.dp.data[116].value.split(";");
		g.splice(2 * e0, 2), uH(g)
	}, this.uJ = function(e0) {
		var g = bf.dp.data[116].value.split(";");
		return {
			qr: g[2 * e0],
			password: g[2 * e0 + 1]
		}
	}, this.uL = function() {
		var f0 = bH.p0(bf.dp.data[121].value, -1, 262143);
		return f0 = -1 === f0 ? ~~(262144 * Math.random()) : f0
	}
}

function tq() {
	this.rD = function(e0, value) {
		bf.dp.data[e0].value !== value && (bf.dp.dq(e0, value), 0 === e0 ? (n.r(), b3.dU(), n.o(2)) : 1 === e0 ? at.df(1) : 2 === e0 ? at.df(0) : 5 === e0 && (b6.pT.uM(), at.df(0)))
	}, this.uN = function() {
		for (var data = bf.dp.data, a7 = 0; a7 < 100; a7++) data[a7] && bf.dp.dq(a7, data[a7].tz);
		b6.pT.uM(), at.df(1), b3.dU()
	}, this.uO = function() {
		for (var data = bf.dp.data, a7 = 0; a7 < data.length; a7++) data[a7] && bf.dp.rD(a7, data[a7].tz)
	}, this.uP = function() {
		for (var es = bf.dp, a7 = 128; a7 < 135; a7++) es.dq(a7, es.data[a7].tz)
	}, this.uQ = function(data) {
		bf.rC.rD(109, data.rr), bf.rC.rD(107, data.uR), bf.rC.rD(108, data.uS), bf.rC.rD(112, data.uT), bf.rC.rD(111, data.uU), bf.rC.rD(113, data.uV), bf.rC.rD(135, data.uW), bf.rC.rD(136, data.uX), bf.rC.rD(137, data.uY), bf.rC.rD(138, data
			.uZ), bf.rC.rD(139, data.ua), bf.rC.rD(141, data.ub), bf.rC.rD(142, data.uc), bf.rC.rD(143, data.ud), bf.rC.rD(144, data.ue)
	}
}

function by() {
	this.rv = new uf, this.ug = new uh, this.ui = new uj, this.dU = function() {
		this.rv.dU()
	}
}

function uh() {
	this.uk = function(size) {
		for (var ul = bD, g = [], a7 = 0; a7 < size; a7++) g.push(String.fromCharCode(ul.oT(16)));
		return g.join("")
	}, this.um = function(pA) {
		return 20 < (pA = pA.trim()).length ? pA.substring(0, 20) : pA
	}
}

function uf() {
	var un = new Uint8Array(78);
	this.dU = function() {
		var a7;
		for (un[50] = 37, a7 = 0; a7 < 10; a7++) un[a7 + 3] = a7 + 1;
		for (a7 = 0; a7 < 26; a7++) un[a7 + 20] = a7 + 11, un[a7 + 52] = a7 + 38
	}, this.uo = function(pA) {
		return pA.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.up = function(pA, size) {
		if ((pA = this.uo(pA)).length > size) return pA.substring(0, size);
		for (; pA.length < size;) pA = "-" + pA;
		return pA
	}, this.uq = function(pA) {
		for (var ur = un, eY = pA.length, g = new Uint8Array(eY), a7 = 0; a7 < eY; a7++) g[a7] = ur[pA.charCodeAt(a7) - 45];
		return g
	}, this.us = function(ut) {
		b9.a3(6 * ut.length), this.uu(ut), bD.dU(b9.a8)
	}, this.uu = function(ut) {
		for (var eY = ut.length, a1 = b9, a7 = 0; a7 < eY; a7++) a1.a4(6, ut[a7])
	}, this.uv = function(pA) {
		this.uu(this.uq(pA))
	}, this.uw = function(pA, size) {
		this.uu(this.uq(this.up(pA, size)))
	}, this.ux = function(pA, size) {
		for (var g = this.uq(this.up(pA, size)), f0 = 0, mA = 1, a7 = g.length - 1; 0 <= a7; a7--) f0 += mA * g[a7], mA *= 64;
		return f0
	}
}

function uy() {
	var a1, j7, uz;

	function vP(gy, eb, vN, v4, vI) {
		eb = vO(gy, eb + 1 + 2 * v4 & 3);
		! function(gy, vQ) {
			return 1 < Math.abs(gy % a1 - vQ % a1) || 1 < Math.abs(vT(gy) - vT(vQ))
		}(gy, eb) && 0 === vI[eb << 2] && (vI[eb << 2] = vN)
	}

	function vT(g6) {
		return Math.floor((g6 + .5) / a1) % j7
	}

	function vO(g6, eb) {
		return g6 + uz[eb]
	}
	this.v0 = function(pA) {
		var a7, v1, eY, v2, ul = bD;
		for (bC.rv.us(bC.rv.uq(pA)), bO.v5.v6[bO.eE].a1 = bO.ej = a1 = ul.oT(12), bO.v5.v6[bO.eE].j7 = bO.ek = j7 = ul.oT(12), uz = [-a1, -1, a1, 1], bO.vF = document.createElement("canvas"), bO.vF.width = bO.ej, bO.vF.height = bO.ek, bO.vB = bO
			.vF.getContext("2d", {
				alpha: !1
			}), bO.vC = bO.vG = null, bO.vC = bO.vB.getImageData(0, 0, bO.ej, bO.ek), bO.vG = bO.vC.data, b6.pd.vH(bO.vG), eY = ul.oT(12), v1 = ul.oT(5), v2 = v8(a1 * j7 - 1), a7 = 0; a7 < eY; a7++) ! function(kP, g6, v3, v4) {
			var a7, eb, ul = bD,
				vI = bO.vG,
				vJ = g6,
				vK = g6,
				vL = 0,
				vM = 1 + v3,
				vN = 2 - v3;
			for (vI[g6 << 2] = vM, a7 = 0; a7 < kP; a7++) eb = ul.oT(2), g6 = vO(g6, eb), vI[g6 << 2] === vM ? vL % 2 == 1 && vP(vK, vL + 2 * v4 + 3, vN, v4, vI) : vI[g6 << 2] = vM, vP(g6, eb, vN, v4, vI), vP(vK, eb, vN, v4, vI), vK = g6,
				vL = eb;
			vO(g6, 0) === vJ ? (vP(g6, 0, vN, v4, vI), vP(vJ, 0, vN, v4, vI)) : vO(g6, 1) === vJ && (vP(g6, 0, vN, v4, vI), vP(vJ, 2, vN, v4, vI));
			0 === kP && (vP(vJ, 0, vN, v4, vI), vP(vJ, 2, vN, v4, vI))
		}(ul.oT(v1), ul.oT(v2), 1 === ul.oT(1), 1 === ul.oT(1));
		var ef, eh, k3, vU, vV, vW, vI = bO.vG,
			vX = !0,
			vY = bO.v5.v6[bO.eE].vY,
			vZ = bO.v5.v6[bO.eE].vZ;
		for (eh = 0; eh < j7; eh++)
			for (vU = !0, vV = vX, ef = vW = 0; ef < a1; ef++) k3 = 4 * eh * a1 + 4 * ef, vW <= ef && 0 < vI[k3] && (vV = 2 === vI[k3], vU) && (vU = !1, vV !== vX) ? (vX = vV, vW = ef + 1, ef = -1) : (vV ? (vI[k3] = vZ[0], vI[1 + k3] = vZ[1], vI[
				2 + k3] = vZ[2]) : (vI[k3] = vY[0], vI[1 + k3] = vY[1], vI[2 + k3] = vY[2]), vI[3 + k3] = 255);
		bO.vB.putImageData(bO.vC, 0, 0), bO.vD = !0, bO.vE.dU(), bb.dc = !0
	}
}

function uj() {
	this.v0 = function(va) {
		for (var ul = bD, size = ul.oT(va), vb = 7 + 9 * ul.oT(1), g = [], a7 = 0; a7 < size; a7++) g.push(String.fromCharCode(ul.oT(vb)));
		return g.join("")
	}
}

function c3() {
	var vc, vd, ve, vf, vg, vh, vi, vj, vk, vl;

	function vn() {
		var vq = a9.vq;
		for (vk = vq; vk < a9.eV; vk++) vm();
		for (vk = a9.gu ? a9.je : 0; vk < vq; vk++) {
			if (!vr()) {
				for (var es = a9.vv = vk; es < vq; es++) vk = es, vm();
				return
			}
			vu(vh + vc * vg + bH.dl(vg, 2), vi + vd * vg + bH.dl(vg, 2))
		}
	}

	function wN(player) {
		for (var i9 = ac.i9, iB = ac.iB, iA = ac.iA, iC = ac.iC, eh = iB[player]; eh <= iC[player]; eh++)
			for (var ef = i9[player]; ef <= iA[player]; ef++) {
				var eC = aY.wO(ef, eh);
				aY.g8(eC) && (aY.ip(eC) ? aY.g3(eC, player) : aY.wP(eC, player))
			}
	}

	function wM(g, sC, sD) {
		var dk = g[sC];
		g[sC] = g[sD], g[sD] = dk
	}

	function vr() {
		return function() {
			var a7;
			for (a7 = 0; a7 < 8; a7++)
				if (vc = bH.dl(ve * au.random(), au.value(100)), vd = bH.dl(vf * au.random(), au.value(100)), wU()) return 1;
			return
		}() || function() {
			var hg, hj, er, vt, es, vs;
			for (hg = bH.dl(ve * au.random(), au.value(100)), hj = bH.dl(vf * au.random(), au.value(100)), er = 40; 1 <= er; er--)
				for (vt = vf - er; 0 <= vt; vt -= 40)
					for (vd = (vt + hj) % vf, es = 40; 1 <= es; es--)
						for (vs = ve - es; 0 <= vs; vs -= 40)
							if (vc = (vs + hg) % ve, wU()) return 1;
			return
		}()
	}

	function wU() {
		for (var g6, wW, gap = bH.dl(vg - vj, 2), wX = vi + vd * vg + gap, wY = vh + vc * vg + gap, wV = wX + vj - 1; wX <= wV; wV--)
			for (wW = wY + vj - 1; wY <= wW; wW--)
				if (g6 = aY.wO(wW, wV), !aY.eT(g6) || aY.ip(g6)) return;
		return 1
	}

	function vu(vs, vt) {
		vm(), wZ(vs - 2, vt - 2)
	}

	function vm() {
		ac.lV[vk] = 0, ac.gM[vk] = ac.wK[vk] = 0, ac.g0[vk] = [], ac.gE[vk] = [], ac.gF[vk] = [], ac.ey[vk] = [], ac.i9[vk] = ac.iB[vk] = ac.iA[vk] = ac.iC[vk] = 0
	}

	function wZ(vs, vt) {
		var g6, a7, wa, wb;
		for (ac.lV[vk] = 1, ac.i9[vk] = vs + 10, ac.iB[vk] = vt + 10, ac.iC[vk] = ac.iA[vk] = 0, wa = vs; wa < vs + 4; wa++)
			for (wb = vt; wb < vt + 4; wb++)(vs < wa && wa < vs + 3 || vt < wb && wb < vt + 3) && (g6 = aY.wO(wa, wb), aY.eT(g6)) && (ac.i9[vk] = Math.min(wa, ac.i9[vk]), ac.iA[vk] = Math.max(wa, ac.iA[vk]), ac.iB[vk] = Math.min(wb, ac.iB[vk]), ac
				.iC[vk] = Math.max(wb, ac.iC[vk]), vl[ac.gM[vk]] = g6, ac.gM[vk]++, aY.wP(g6, vk));
		for (ac.wK[vk] = ac.gM[vk], a7 = ac.gM[vk] - 1; 0 <= a7; a7--) aY.wc(vl[a7], vk) ? (aY.g3(vl[a7], vk), ac.gE[vk].push(vl[a7])) : aY.wd(vl[a7]) ? (aY.g3(vl[a7], vk), ac.gF[vk].push(vl[a7])) : aY.we(vl[a7]) && (aY.g3(vl[a7], vk), ac.ey[vk]
			.push(vl[a7]))
	}

	function wT(vs, vt) {
		for (var g6, wW, wV = vt; vt - 6 < wV; wV--)
			for (wW = vs; vs - 6 < wW; wW--)
				if (g6 = aY.wO(wW, wV), aY.ip(g6)) return;
		return 1
	}
	this.dU = function() {
		if (vl = new Array(12), vj = 6, vg = 10, ve = bH.dl(bO.ej, vg), vf = bH.dl(bO.ek, vg), vh = bH.dl(bO.ej - vg * ve, 2), vi = bH.dl(bO.ek - vg * vf, 2), a9.gu)
			for (var a7 = 0; a7 < a9.je; a7++) vk = a7, vm(), ac.lV[vk] = 1;
		(0 === a9.data.spawningType ? vn : 1 === a9.data.spawningType ? (vn(), function() {
			var vw = a9.vx;
			a9.vy || vw++;
			if (!(vw < 3)) {
				for (var data = a9.data, iu = (a9.gu ? a9.je : 0) + data.teamPlayerCount[0], mG = a9.vv, vz = new Uint32Array(vw), w0 = new Uint32Array(vw), w1 = new Uint16Array(vw), w2 = new Uint16Array(vw), eW = bc.eW, i9 = ac.i9, iB =
						ac.iB, iA = ac.iA, iC = ac.iC, fD = bK.fD, fE = bK.fE, a7 = iu; a7 < mG; a7++) fD[a7] = i9[a7] + iA[a7] >> 1, fE[a7] = iB[a7] + iC[a7] >> 1;
				for (a7 = iu; a7 < mG; a7++) {
					var id = eW[a7];
					vz[id] += fD[a7], w0[id] += fE[a7]
				}
				var k4 = bc.k4;
				for (a7 = 1; a7 < vw; a7++) {
					var g1 = Math.max(data.teamPlayerCount[k4[a7]], 1);
					w1[a7] = bH.dl(vz[a7], g1), w2[a7] = bH.dl(w0[a7], g1)
				}
				var w3 = bc.w3,
					w4 = bc.w4,
					w5 = bc.w5,
					fC = bK.fC;
				for (a7 = 0; a7 < 512; a7++) fC[a7] = a7;
				for (var dz = 0; dz < 2 + (4 <= vw); dz++)
					for (a7 = iu; a7 < mG; a7++) {
						for (var gy = a7, w6 = fC[gy], w7 = 1, eo = bH.w8(fD[w6] - w1[1], fE[w6] - w2[1]), er = 2; er < vw; er++) {
							var w9 = bH.w8(fD[w6] - w1[er], fE[w6] - w2[er]);
							w9 < eo && (eo = w9, w7 = er)
						}
						var wA = eW[gy];
						if (w7 !== wA) {
							if (2 === dz && 4 <= vw) {
								var wB = Math.max((w7 + 1) % vw, 1),
									wC = bH.w8(fD[w6] - w1[wB], fE[w6] - w2[wB]);
								for (er = 1; er < vw; er++) w9 = bH.w8(fD[w6] - w1[er], fE[w6] - w2[er]), eo < w9 && w9 < wC && (wC = w9, wB = er);
								wB !== wA && bH.w8(w1[wA] - w1[wB], w2[wA] - w2[wB]) < bH.w8(w1[wA] - w1[w7], w2[wA] - w2[w7]) && (w7 = wB)
							}
							var wD = k4[w7],
								wE = w4[wD] + (a9.gu ? 0 : w5[wD]),
								vQ = w3[wE],
								wF = fC[vQ],
								wG = w4[wD + 1];
							eo = bH.w8(fD[wF] - w1[wA], fE[wF] - w2[wA]);
							for (var et = wE + 1; et < wG; et++) {
								var wH = w3[et],
									wI = fC[wH];
								(w9 = bH.w8(fD[wI] - w1[wA], fE[wI] - w2[wA])) < eo && (eo = w9, vQ = wH)
							}
							vQ < iu || mG <= vQ || (wF = fC[vQ], vz[wA] += fD[wF] - fD[w6], w0[wA] += fE[wF] - fE[w6], vz[w7] += fD[w6] - fD[wF], w0[w7] += fE[w6] - fE[wF], g1 = data.teamPlayerCount[k4[wA]], w1[wA] = bH.dl(vz[wA], g1),
								w2[wA] = bH.dl(w0[wA], g1), g1 = data.teamPlayerCount[wD], w1[w7] = bH.dl(vz[w7], g1), w2[w7] = bH.dl(w0[w7], g1), fC[gy] = wF, fC[vQ] = w6)
						}
					}! function() {
						for (var fC = bK.fC, i9 = ac.i9, iB = ac.iB, iA = ac.iA, iC = ac.iC, gM = ac.gM, wK = ac.wK, gE = ac.gE, gF = ac.gF, ey = ac.ey, a7 = 0; a7 < 512; a7++) {
							var wL = fC[a7];
							if (wL !== a7) {
								wM(i9, a7, wL), wM(iB, a7, wL), wM(iA, a7, wL), wM(iC, a7, wL), wM(gM, a7, wL), wM(wK, a7, wL), wM(gE, a7, wL), wM(gF, a7, wL), wM(ey, a7, wL), wN(a7), wN(wL), fC[a7] = a7;
								for (var j7 = wL, g7 = fC[j7]; g7 !== a7;) g7 = fC[j7 = g7];
								fC[j7] = wL
							}
						}
					}()
			}
		}) : function() {
			var vq = a9.vq;
			for (vk = vq; vk < a9.eV; vk++) vm();
			for (vk = a9.gu ? a9.je : 0; vk < vq; vk++)
				if (! function() {
						var spawningData = a9.data.spawningData,
							vs = spawningData[2 * vk] + 1,
							spawningData = spawningData[2 * vk + 1] + 1;
						if (3 < vs && vs < bO.ej - 5 && 3 < spawningData && spawningData < bO.ek - 5 && aY.eT(aY.wO(vs, spawningData)) && wT(vs + 3, spawningData + 3)) return vu(vs + 1, spawningData + 1), 1;
						return
					}()) {
					if (!vr()) {
						for (var es = a9.vv = vk; es < vq; es++) vk = es, vm();
						return
					}
					var vs = vh + vc * vg + bH.dl(vg, 2),
						vt = vi + vd * vg + bH.dl(vg, 2);
					vu(vs, vt)
				}
		})(), bZ.lR[7] = ac.gM[a9.eI]
	}, this.wf = function(il, wg, wh) {
		var a7, vs, vt, g6, vc, vd;
		for (vk = il, a7 = 0; a7 < 20; a7++)
			for (vs = wg + a7; wg - a7 <= vs; vs--)
				for (vt = wh + a7; wh - a7 <= vt; vt--)
					if ((vs === wg + a7 || vs === wg - a7 || vt === wh + a7 || vt === wh - a7) && 3 < vs && vs < bO.ej - 5 && 3 < vt && vt < bO.ek - 5 && aY.eT(aY.wO(vs, vt)) && wT(vs + 3, vt + 3)) {
						if (0 < ac.gM[vk]) {
							for (vd = vc = g6 = void 0, vc = ac.iA[vk]; vc >= ac.i9[vk]; vc--)
								for (vd = ac.iC[vk]; vd >= ac.iB[vk]; vd--) g6 = 4 * (vd * bO.ej + vc), aY.wj(vk, g6) && (aY.wk(g6), ac.gM[vk]--);
							vm()
						}
						return wZ(vs - 1, vt - 1), !0
					} return !1
	}, this.wl = function(il) {
		vk = il, vr() ? vu(vh + vc * vg + bH.dl(vg, 2), vi + vd * vg + bH.dl(vg, 2)) : vm()
	}
}

function wm() {
	an.wn(), tU.setTransform(hw, 0, 0, hw, 0, 0), tU.imageSmoothingEnabled = hw < 3, tU.drawImage(bO.vF, aO.wo(), aO.wp()), bL.wq.tT(), tU.drawImage(wr, aO.wo(), aO.wp()), an.tT(), bJ.tT(), ab.tT(), (a9.m1 ? (bd.tT(), b8) : (aJ.tT(), aR.tT(), aN
	.tT(), b8.tT(), aq.tT(), aS.tT(), aO.tT(), aM.tT(), bd.tT(), aQ.tT(), aL.tT(), aI.tT(), aH.tT(), aT.tT(), ba.tT(), ap)).tT(), n.tT()
}

function ws(wt, a1, j7) {
	wt.clearRect(0, 0, a1, j7), wt.fillStyle = b7.mV, wt.fillRect(0, 0, a1, j7)
}

function wu(wt, a1, j7, wv) {
	wt.fillStyle = b7.mY, wt.fillRect(0, 0, a1, wv), wt.fillRect(0, 0, wv, j7), wt.fillRect(a1 - wv, 0, wv, j7), wt.fillRect(0, j7 - wv, a1, wv)
}

function ww(wt, ef, eh, hB, wv, g6, wx) {
	wt.fillStyle = b7.mY;
	var g6 = Math.floor(hB * g6),
		s0 = (g6 += (g6 - wv) % 2, Math.floor((g6 - wv) / 2)),
		hB = Math.floor((hB - g6) / 2);
	wt.fillRect(ef + hB, eh + hB + s0, g6, wv), wx && wt.fillRect(ef + hB + s0, eh + hB, wv, g6)
}

function wz() {
	this.dU = function() {
		8 === a9.jy && aJ.x0()
	}, this.x1 = function(x2) {
		var elo = a9.data.elo,
			hU = (elo[x2] - elo[1 - x2]) / 10,
			hU = 8 / (1 + Math.pow(2, hU / 32)),
			hU = Math.floor(10 * hU + .5),
			x4 = this.x5(elo[x2] + (1 + a9.x6) * hU + 1),
			elo = this.x5(elo[1 - x2] - hU);
		0 === x2 ? aJ.x8(x4, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : aJ.x8(elo, x4, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"])
	}, this.x5 = function(elo) {
		return 16e3 === (elo = bH.p0(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function cY() {
	this.x9 = new xA, this.vI = new xB
}

function xB() {
	this.xC = !1;
	this.xG = [], this.xH = 100;
	var ly, lz, gap, hB, xD, xF, xI = 0,
		xJ = new Array(9),
		xK = [],
		xL = [],
		xM = 0,
		xN = 0,
		xO = 0,
		xP = 0;

	function xb() {
		xJ.sort(function(er, es) {
			return es.jm - er.jm
		});
		for (var pA = "" + xJ[0].o3, a7 = 1; a7 < 9; a7++) pA += "," + xJ[a7].o3;
		for (a7 = 0; a7 < 9; a7++) pA += "," + xJ[a7].jm;
		bf.dp.dq(120, pA)
	}
	this.dU = function() {
		for (var xQ = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], a7 = 0; a7 < xQ.length; a7++) {
			var color = 6 === xQ[a7] ? b7.my : b7.mW;
			this.xG.push(b6.canvas.xR(aX.get(3), xQ[a7], color))
		}
		for (a7 = 0; a7 < af.x9.xS; a7++) xL.push(af.x9.xT - af.x9.xS + a7);
		for (a7 = 0; a7 < af.x9.xU; a7++) xL.push(af.x9.xV + a7);
		var xW = af.x9.xX(bG.xW);
		for (a7 = 0; a7 < xW.length; a7++) xL.push(xW[a7]);
		! function() {
			var a7, g = bf.dp.data[120].value.split(",");
			if (18 !== g.length)
				for (a7 = 0; a7 < 9; a7++) xJ[a7] = {
					o3: 1015 + a7,
					jm: 0
				};
			else
				for (a7 = 0; a7 < 9; a7++) {
					var f0 = parseInt(g[a7]),
						et = (f0 = 0 <= f0 && f0 < af.x9.xT ? f0 : 0, parseInt(g[a7 + 9]));
					et = 0 <= et && et < 1e3 ? et : 0, xJ[a7] = {
						o3: f0,
						jm: et
					}
				}
		}()
	}, this.show = function(kk, kl, xc) {
		var a7;
		if (xM = kk, xN = kl, xI = xc || 0, this.xC = !0, xK = [], 0 === xI)
			for (a7 = 0; a7 < 9; a7++) xK.push(xJ[a7].o3);
		else {
			var es = 49 * xI,
				xc = es - 49;
			for (xc >= xL.length && (xI = 1, xc = 0, es = 49), a7 = xc = (es = Math.min(es, xL.length)) - 49; a7 < es; a7++) xK.push(xL[a7])
		}
		xK.push(1024);
		xc = xK.length, hB = Math.floor((u.v.r8() ? .075 : .0468) * at.pV), gap = Math.floor(hB / 3), (xO = 10 * (xD = hB + gap)) > at.a1 && (xO = at.a1, gap = (xD = xO / 10) - (hB = 3 * xD / 4)), xF = bH.dl(xc, 10) + !!(xc % 10), (xP = xF *
			xD) > at.j7 && (xP = at.j7, gap = (xD = xP / xF) - (hB = 3 * xD / 4)), xc = .5 * gap;
		ly = Math.min(Math.max(kk - .5 * xO + xc, xc), at.a1 - xO + xc), lz = Math.min(Math.max(kl - .5 * xP + xc, xc), at.j7 - xP + xc)
	}, this.gm = function(kk, kl, player) {
		if (!this.xC) return !1;
		if (this.xe(kk, kl)) {
			kk = bH.p0(bH.dl(kk - ly + .5 * gap, xD), 0, 9);
			if ((kk += 10 * bH.p0(bH.dl(kl - lz + .5 * gap, xD), 0, 9)) >= xK.length) return aH.r1(), !0;
			kl = xK[kk];
			if (1024 === kl) return this.show(xM, xN, xI + 1), !0;
			! function(o3) {
				for (var a7 = 0; a7 < 9; a7++) xJ[a7].jm = Math.floor(.99 * xJ[a7].jm);
				for (a7 = 0; a7 < 9; a7++)
					if (o3 === xJ[a7].o3) return xJ[a7].jm = Math.min(xJ[a7].jm + 30, 999), xb();
				xJ.splice(5, 0, {
					o3: o3,
					jm: Math.max(xJ[4].jm, 30)
				}), xJ.pop(), xb()
			}(kl), player === a9.eI ? b4.gv.o2(kl) : b4.fu.oI(kl, player)
		}
		return aH.r1(), !0
	}, this.xe = function(kk, kl) {
		return !(kk < ly - .5 * gap || kl < lz - .5 * gap || ly + xO - .5 * gap <= kk || lz + xP - .5 * gap <= kl)
	}, this.tT = function() {
		tU.fillStyle = b7.mV, tU.fillRect(ly - .5 * gap, lz - .5 * gap, xO, xP);
		for (var k3 = .5 * bY.xf, eY = (tU.lineWidth = bY.xf, tU.strokeStyle = tU.fillStyle = b7.mY, tU.strokeRect(ly - .5 * gap + k3, lz - .5 * gap + k3, xO - 2 * k3, xP - 2 * k3), tU.imageSmoothingEnabled = !0, xK.length), a7 = 0; a7 <
			eY; a7++) this.xg(xK[a7], tU, ly + a7 % 10 * xD, lz + bH.dl(a7, 10) * xD, hB);
		tU.imageSmoothingEnabled = !1
	}, this.xg = function(o3, hH, ef, eh, hB) {
		var eC;
		o3 >= 1024 - af.x9.xS ? (eC = hB / this.xH, hH.setTransform(eC, 0, 0, eC, ef, eh), hH.drawImage(this.xG[o3 - 1024 + af.x9.xS], 0, 0), hH.setTransform(1, 0, 0, 1, 0, 0)) : (b6.pT.textAlign(hH, 1), b6.pT.textBaseline(hH, 1), hH.font = b6.pT
			.rV(0, .89 * hB), hH.fillText(af.x9.xh(o3), ef + .5 * hB, eh + (.35 - b6.pT.xi + .56) * hB))
	}
}

function xA() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.xS = 13, this.xU = this.emojis.length, this.xV = 676, this.xT = 1024, this.xj = this.emojis.indexOf("💀"), this.xk = this.xj + 1, this.xl = this.emojis.indexOf("🥇"), this.xm = this.emojis.indexOf("😊"), this.xh = function(f0) {
		return f0 < this.xV ? String.fromCharCode(55356, 56806 + bH.dl(f0, 26), 55356, 56806 + f0 % 26) : this.emojis[Math.min(f0 - this.xV, this.xU - 1)]
	}, this.xX = function(pA) {
		for (var eY = pA.length - 2, g = [], a7 = 0; a7 < eY; a7++) {
			var hP = pA.charCodeAt(a7) - 56806,
				hQ = pA.charCodeAt(a7 + 2) - 56806;
			0 <= hP && hP < 26 && 0 <= hQ && hQ < 26 && (g.push(26 * hP + hQ), a7 += 3)
		}
		return g
	}, this.xn = function(f0) {
		return f0 < this.xV
	}, this.xo = function(f0) {
		return f0 >= 1024 - this.xS
	}, this.xp = function(f0) {
		return f0 >= this.xV && f0 < this.xV + this.xk
	}
}

function bx() {
	this.rv = new xq, this.ug = new xr, this.ui = new xs, this.dU = function() {
		this.rv.dU()
	}
}

function xr() {
	this.uv = function(pA) {
		for (var eY = pA.length, a1 = b9, a7 = 0; a7 < eY; a7++) a1.a4(16, pA.charCodeAt(a7))
	}
}

function xq() {
	var xt = new Uint8Array(64);
	this.dU = function() {
		var a7;
		for (xt[0] = 45, xt[37] = 95, a7 = 0; a7 < 10; a7++) xt[a7 + 1] = 48 + a7;
		for (a7 = 0; a7 < 26; a7++) xt[a7 + 11] = 65 + a7, xt[a7 + 38] = 97 + a7
	}, this.rx = function(xu) {
		for (var ul = bD, ut = new Uint8Array(xu), a7 = 0; a7 < xu; a7++) ut[a7] = ul.oT(6);
		return ut
	}, this.rw = function(ut) {
		for (var eY = ut.length, xv = xt, g = [], a7 = 0; a7 < eY; a7++) g.push(String.fromCharCode(xv[ut[a7]]));
		return g.join("")
	}, this.xw = function(value, xx) {
		for (var xv = xt, g = [], a7 = 0; a7 < xx; a7++) g.push(String.fromCharCode(xv[value >> 6 * (xx - 1 - a7) & 63]));
		return g.join("")
	}
}

function c5() {
	var xy, xz, y0;
	xy = [32, 65, 191, 913, 931], xz = [64, 127, 688, 930, 1155], y0 = new Array(xy.length + 1);
	for (var a7 = 0; a7 < y0.length; a7++) {
		y0[a7] = 0;
		for (var er = a7 - 1; 0 <= er; er--) y0[a7] += xz[er] - xy[er]
	}

	function y6(et) {
		for (var a7 = xy.length - 1; 0 <= a7; a7--)
			if (et >= xy[a7] && et < xz[a7]) return a7;
		return -1
	}
	this.um = function(pA) {
		return 0 !== (pA = pA.trim()).indexOf("Bot ") && 0 !== pA.indexOf("[Bot] ") && function(pA, y3, y4) {
			var eY = (pA = pA.trim()).length;
			if (eY < y3 || y4 < eY) return !1;
			for (var et, y5 = 0, a7 = 0; a7 < eY; a7++)
				if (et = pA.charCodeAt(a7), y5 += 65 <= et && et <= 90 || 1040 <= et && et <= 1071 ? 1 : 0, -1 === y6(et)) return !1;
			if (3 < y5 && y5 > Math.floor(eY / 2)) return !1;
			return !0
		}(pA, 3, 20)
	}, this.y7 = function(pA) {
		for (var eY = (pA = pA.trim()).length, g = [], a7 = 0; a7 < eY; a7++) {
			var et, g6 = y6(et = pA.charCodeAt(a7));
			g.push(y0[g6] + et - xy[g6])
		}
		return g
	}, this.v0 = function(g) {
		for (var et, es, pA = "", eY = g.length, a7 = 0; a7 < eY; a7++)
			for (es = 1; es < y0.length; es++)
				if (g[a7] < y0[es]) {
					et = xy[es - 1] + g[a7] - y0[es - 1], pA += String.fromCharCode(et);
					break
				} return pA
	}, this.y8 = function(pA) {
		for (var g = this.y7(pA), result = "", a7 = 0; a7 < g.length; a7++) result = (result += g[a7] < 10 ? "00" : g[a7] < 100 ? "0" : "") + g[a7].toString(10);
		return result
	}, this.y9 = function(pA) {
		for (var g = new Array(Math.floor(pA.length / 3)), a7 = 0; a7 < pA.length; a7 += 3) g[Math.floor(a7 / 3)] = parseInt(pA.substring(a7, a7 + 3));
		return this.v0(g)
	}, this.yA = function(pA) {
		for (var f0, g = [pA.length], a7 = 0; a7 < pA.length; a7++) g[a7] = pA.charCodeAt(a7) - 48;
		var result = "";
		for (a7 = 0; a7 < pA.length; a7++) a7 === pA.length - 1 || 51 < 10 * g[a7] + g[a7 + 1] ? result += g[a7].toString() : (f0 = 10 * g[a7] + g[a7 + 1], result += String.fromCharCode(f0 + (f0 < 26 ? 65 : 71)), a7++);
		return result
	}, this.yB = function(pA) {
		for (var et, result = "", a7 = 0; a7 < pA.length; a7++) 48 <= (et = pA.charCodeAt(a7)) && et < 58 ? result += String.fromCharCode(et) : 65 <= et && et < 75 ? result += "0" + (et - 65).toString() : 75 <= et && et < 91 ? result += (et - 65)
			.toString() : 97 <= et && et < 123 && (result += (et - 71).toString());
		return result
	}, this.yC = function(pA) {
		for (var eY = pA.length, g = [], a7 = 0; a7 < eY; a7++)(et = pA.charCodeAt(a7)) < 58 ? g.push(pA[a7]) : (et -= et < 91 ? 65 : 71, g.push(String(bH.dl(et, 10))), g.push(String(et - 10 * bH.dl(et, 10))));
		var eY = g.length - 2,
			et = 0,
			ut = [];
		for (a7 = 0; a7 < eY; a7 += 3) ut[et++] = parseInt(g[a7] + g[a7 + 1] + g[a7 + 2]);
		return ut
	}, this.yD = function() {
		for (var dz, yE = "", a7 = 0; a7 < 6; a7++) dz = 48 + au.random() % 36, dz += 58 <= dz ? 39 : 0, yE += String.fromCharCode(dz);
		return yE
	}
}

function xs() {
	this.y7 = function(pA, va, yF) {
		for (var yG = [], eY = pA.length, max = 0, a7 = 0; a7 < eY; a7++) {
			var f0 = pA.charCodeAt(a7);
			yG.push(f0), max = Math.max(max, f0)
		}
		var vb = max < 128 ? 7 : 16;
		for (yF.a4(va, eY), yF.a4(1, +(16 == vb)), a7 = 0; a7 < eY; a7++) yF.a4(vb, yG[a7])
	}
}

function d3() {
	this.yH = new yI, this.result = new yJ, this.h2 = new yK, this.yL = new yM, this.yN = new yO, this.yP = new yQ, this.dU = function() {
		this.result.dU()
	}
}

function yK() {
	this.yR = function() {
		for (var eY = ah.jf, yS = ah.jh, yT = [], a7 = 0; a7 < eY; a7++) {
			var g6 = yS[a7];
			b6.fu.yU(g6) && yT.push(g6)
		}
		return yT
	}, this.yV = function() {
		if (0 === bc.k4[a9.yW]) return this.yX();
		bd.ku(a9.yW);
		for (var yT = [], eY = bK.f4[0], fC = bK.fC, a7 = 0; a7 < eY; a7++) {
			var g6 = fC[a7];
			b6.fu.yU(g6) && yT.push(g6)
		}
		return yT
	}, this.yX = function() {
		var g6 = kw[0];
		return b6.fu.yU(g6) ? [g6] : []
	}, this.yY = function(yT) {
		for (var eY = yT.length, dk = 0, gM = ac.gM, a7 = 0; a7 < eY; a7++) dk += gM[yT[a7]];
		return dk
	}
}

function yI() {
	function ya() {
		if (2 === a9.ye) return 1;
		aq.yf(), a9.ye = 2, a9.yg = a9.yh
	}

	function yc() {
		bN.yN.yi(), aT.show(1 === a9.yj, !1, 2 === a9.yj), bN.result.yi(), bN.yP.iS(), bN.yL.iS(), aJ.yk(!0), aJ.yl(247), aJ.yl(956), aJ.yl(957), aR.lH(!0), aS.lH(!0), aq.lH(), b8.ym(), a9.gi && bb.yn.yo(), bb.dc = !0, bX.yp(), u.v.setState(0)
	}
	this.yZ = function() {
		ya() || (a9.yb = 2, yc())
	}, this.yd = function() {
		ya() || (a9.yb = 1, yc())
	}
}

function yM() {
	this.iS = function() {
		var yy;
		2 === a9.yb ? (aJ.yq(0, 59), aD.m7(2700)) : a9.jy < 7 ? (yy = bc.k4[a9.yW], yy = bc.z0[yy], aM.z1(L(22, [yy]), 2, 1, 12), aJ.z2(0, L(23, [yy]), 40, 0, b7.mY, b7.mV, -1, !1), aD.m7(2700)) : 8 === a9.jy ? (a9.yj ? aJ.yq(a9.yv, 2) : aJ.yq(
			1 - a9.eI, 3), a9.yw.x1(a9.yv), aJ.yx(a9.yv), aD.ls(a9.yv, 2700, !1, 0)) : 9 === a9.jy ? (aJ.z3(), aD.m7(2700)) : (aJ.yx(a9.yv), aD.ls(a9.yv, 2700, !1, 0))
	}
}

function yQ() {
	function z4() {
		var sG = Math.floor(ac.zC[a9.eI] / 50);
		0 !== sG && (sG = Math.min(sG, 400), aJ.z2(440, L(24, [(sG / 100).toFixed(2)]), 40, 0, b7.mq, b7.mV, -1, !1))
	}
	this.iS = function() {
		if (b6.fu.gl(a9.eI) && z4(), 0 !== bN.result.z5 && (function() {
				aJ.z2(520, L(25), 40, 0, b7.mY, b7.mV, -1, !1);
				for (var yT = bN.result.yT, eY = yT.length, gM = ac.gM, g = [], a7 = 0; a7 < eY; a7++) {
					var g6 = yT[a7];
					g.push({
						g6: g6,
						dk: gM[g6]
					})
				}
				g.sort((er, es) => es.dk - er.dk);
				var z0 = ac.zD,
					dk = bN.result.zE,
					sG = bN.result.z5,
					pA = "";
				for (a7 = 0; a7 < eY; a7++) pA += z0[g[a7].g6] + ": " + (g[a7].dk * sG / (100 * dk)).toFixed(2) + "   ";
				aJ.z2(560, b6.zF.zG(pA), 40, 0, b7.mq, b7.mV, -1, !1)
			}(), 7 !== a9.jy && 10 !== a9.jy || 0 !== a9.yj && aJ.z2(600, L(26), 40, 0, b7.mY, b7.mV, -1, !1), !(2 === a9.yb || 7 <= a9.jy))) {
			var yT = bN.result.yT,
				eY = yT.length,
				z0 = ac.zD,
				gM = ac.gM,
				zH = [];
			loop: for (var a7 = 0; a7 < eY; a7++) {
				var g6 = yT[a7],
					zI = b6.zF.zJ(z0[g6]);
				if (null !== zI) {
					for (var zK = gM[g6], es = zH.length - 1; 0 <= es; es--)
						if (zI === zH[es].name) {
							zH[es].dk += zK, zH[es].g.push({
								g6: g6,
								dk: zK
							});
							continue loop
						} zH.push({
						name: zI,
						dk: zK,
						g: [{
							g6: g6,
							dk: zK
						}]
					})
				}
			}
			if (0 !== zH.length) {
				zH.sort((er, es) => es.dk - er.dk);
				var g = zH[0].g,
					zL = (g.sort((er, es) => es.dk - er.dk), "[" + zH[0].name + "]"),
					sG = bN.result.z5,
					zM = 64 * sG / 26214400,
					pA = (aJ.z2(0, L(27, [zL, zM.toFixed(4)]), 40, 0, b7.mY, b7.mV, -1, !1), aJ.z2(600, L(28), 40, 0, b7.mY, b7.mV, -1, !1), ""),
					kP = g.length,
					dk = bN.result.zE,
					ur = zH[0].dk,
					zN = 65536 * zM;
				for (a7 = 0; a7 < kP; a7++) pA += z0[g[a7].g6] + ": " + (g[a7].dk * sG / (200 * dk)).toFixed(2) + " | " + (zN * g[a7].dk / ur).toFixed(1) + "   ";
				aJ.z2(640, b6.zF.zG(pA), 40, 0, b7.mq, b7.mV, -1, !1);
				zM = (ur * sG / (1e3 * dk)).toFixed(2);
				aJ.z2(680, L(29, [zM, zL]), 40, 0, b7.mY, b7.mV, -1, !1), a9.gi || aJ.z2(720, L(30) + bG.zP, 736, 0, b7.mY, b7.mw, -1, !1)
			}
		}
	}, this.z9 = function() {
		var zA, vJ;
		a9.k0 || (zA = ac, vJ = a9.eI, 0 === zA.zB[vJ]) || zA.ib[vJ] < 1 || 2 * zA.oo[vJ] > 3 * (zA.ia[vJ] + zA.ib[vJ]) || z4()
	}
}

function yJ() {
	this.dU = function() {
		this.zQ = 0, this.yT = null, this.zE = 0, this.z5 = 0
	}, this.yi = function() {
		var rM, qx;
		a9.k0 || (rM = this, 2 === a9.yb ? rM.yT = bN.h2.yR() : a9.ie ? rM.yT = bN.h2.yV() : rM.yT = bN.h2.yX(), rM.zQ = be.zS.zT(), rM.zE = Math.max(1, bN.h2.yY(rM.yT)), b4.fu.oR(), 8 === a9.jy ? (bN.result.z5 = 0, 1 !== a9.yj || 0 === bf.dp
			.data[107].value || 100 <= (qx = bf.dp.data[108].value) || (bN.result.z5 = (1 + a9.x6) * (100 - qx) * 10)) : (rM.z5 = 100 * bN.result.zQ * (1 + a9.x6), 9 === a9.jy && (rM.z5 = rM.z5 >> 1)))
	}
}

function yO() {
	this.yi = function() {
		if (2 === a9.yb) a9.yj = 2;
		else {
			if (8 === a9.jy) aY.zW(0) && 0 !== ac.lV[0] ? aY.zW(1) && 0 !== ac.lV[1] ? a9.yv = +(ac.gM[1] > ac.gM[0]) : a9.yv = 0 : a9.yv = 1;
			else {
				if (a9.ie) {
					var ks = bd.zX();
					if (a9.yW = ks, bc.k4[ks]) return void(a9.yj = +(bc.eW[a9.eI] === ks))
				}
				a9.yv = kw[0]
			}
			a9.yj = +(a9.yv === a9.eI)
		}
	}
}

function d8() {
	this.id = 0, this.f1 = 0, this.u2 = null, this.u3 = null, this.u4 = null, this.uA = null, this.v = new zY, this.dU = function() {
		var self, f1;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (f1 = Android.getVersion()) < 12 || (self.f1 = f1, self.id = 1, self.u3 = Android),
			function(self) {
				var f1;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.u4 = mwIOSdataX, self.uA = window.webkit.messageHandlers.iosCommandA, f1 = self
					.u4.version, self.f1 = f1 ? Number(f1) : 0)
			}(this),
			function(self) {
				var u2;
				if (0 === self.id) {
					try {
						if (!(u2 = window.localStorage)) return;
						u2.setItem("tls7", "1"), u2.removeItem("tls7")
					} catch (error) {
						return
					}
					self.u2 = u2
				}
			}(this)
	}
}

function zY() {
	this.zc = function() {
		bf.rC.uN(), bf.rC.uO(), aw.s.close(0, 3255), 0 === u.id ? u.u2 && u.u2.clear() : 1 === u.id ? u.u3.saveString(199, "") : 2 === u.id && u.uA.postMessage("clear")
	}, this.zd = function() {
		2 === u.id ? u.uA.postMessage("showConsentForm") : 1 === u.id && u.u3.setState(7)
	}, this.ze = function() {
		this.setState(14)
	}, this.r8 = function() {
		return 1 === bf.dp.tx(2)
	}, this.zf = function() {
		bf.dp.dq(102, "")
	}, this.setState = function(zg) {
		1 === u.id && 5 <= u.f1 && u.u3.setState(zg)
	}, this.w = function() {
		var zh;
		1 === u.id && 7 <= u.f1 ? u.u3.setState(5) : ((zh = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = zh.toString())
	}, this.dZ = function() {
		1 !== u.id || u.f1 < 17 || u.u3.saveString(23, document.documentElement.outerHTML)
	}, this.e8 = function() {
		0 !== u.id && (1 === u.id ? u.u3.prepareAd("1688441405") : 2 === u.id && (0 === u.f1 ? u.uA.postMessage("prepare ad 4500876070") : u.uA.postMessage("loadAds 4500876070")))
	}, this.zi = function(dk) {
		return 0 !== u.id && (1 === u.id ? 12 <= u.f1 && (u.u3.presentAd(dk), !0) : 2 === u.id && (0 === u.f1 ? u.uA.postMessage("show ad " + dk) : u.uA.postMessage("showAd"), !0))
	}, this.de = function() {
		2 === u.id && u.f1 < 23 && n.o(4, 1, new p("App Update Required", "A new iOS app version with bug fixes has been published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + bG.zj + "' target='_blank'>" + bG
			.zj + "</a>", !0, [new q("⬅️ " + L(31), function() {
				n.o(0)
			}, b7.nD)]))
	}
}

function dN() {
	function zm(e) {
		zx(e), n.o(4, 5, new p("🚀 New Game Update", "The game has been updated! Please reload the game." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new q("⬅️ " + L(31), function() {
				n.zy()
			}), new q("🔄 Reload", function() {
				u.v.w()
			}, b7.mv)]))
	}

	function zw(e) {
		zx(e), n.o(4, 5, new p(L(32), {
			"3249": "No servers found",
			"4705": "Lobby not found",
			"4730": "Kicked from lobby"
		} [e] ?? zq(e), !0))
	}

	function zq(e) {
		var pA = " [" + e + "]";
		return 3249 === e || 1006 === e ? "No Internet / No Server Response" + pA : 4527 === e ? "Player already in lobby" + pA : 4530 === e ? "Lobby Timeout" + pA : 4528 === e ? "Lobby Kick: Another login detected." + pA : 4540 <= e && e < 4542 ?
			"You have been kicked. Duration: " + ["20 Seconds", "1 Minute", "1 Hour"][e - 4540] + pA : "Unknown error" + pA
	}

	function zx(e) {
		zp(e), n.s.t()
	}

	function zp(e) {
		var zg = aW.zo();
		6 === zg ? aw.s.a00(e) : bk.zs ? (n.r(), bk.a01(), aw.s.close(aw.s.zt, 3256)) : 8 === zg && a9.a02(!0)
	}
	this.zk = function(zl, e) {
		zl === 1 && __fx.customLobby.isActive() && aW.zo() !== 6 && __fx.customLobby.setActive(false);
		if (8 === n.rs && 0 === zl)
			if (4211 === e) zm(e);
			else {
				if (4480 === e) return bf.rC.uP(), void n.o(4, 0, new p(L(34), L(35), !0));
				8 !== aW.zo() && zp(), n.o(4, 0, new p(L(32), zq(e), !0))
			}
		else {
			var zg = aW.zo();
			if (6 === zg) {
				if (4211 === e) return void zm(e);
				if (4215 !== e && 4516 !== e && 4527 !== e && 4533 !== e) return void aV.zr(zl)
			} else {
				if (!bk.zs) return 8 === zg ? void(zl !== aw.s.zu || a9.k0 || 1 !== a9.ye || a9.gi || aJ.zv(L(33, [e]))) : void 0;
				if (zl !== aw.s.zt) return
			}
			zw(e)
		}
	}, this.zz = function(e) {
		8 === aW.zo() ? a9.k0 || 1 !== a9.ye || aJ.zv(L(33, [e])) : zw(e)
	}, this.m = function() {
		zx(3268)
	}
}

function cx() {
	var a03, a04, a05 = -15e3,
		a06 = !1;

	function gm(e) {
		a0Q() || (a06 = !0, a0R(e, 1), aw.s.a0S(aw.s.zu), a0T(Math.floor(at.pZ * e.clientX), Math.floor(at.pZ * e.clientY)))
	}

	function a0F(e) {
		a05 = bb.lo, a0R(e, 1), aw.s.a0S(aw.s.zu), 0 < e.touches.length && (a03 = Math.floor(at.pZ * e.touches[0].clientX), a04 = Math.floor(at.pZ * e.touches[0].clientY), ao.a0F(e) || a0T(a03, a04))
	}

	function a0T(ef, eh) {
		n.gm(ef, eh), 0 === a9.ye ? aW.gm(ef, eh) : b8.a0U(ef, eh) || ba.gm(ef, eh) || aT.gm(ef, eh) || aH.a0V(ef, eh) || aL.gm(ef, eh) || 0 <= aI.gm(ef, eh) || bF.a0W(ef, eh) || aq.gm(ef, eh) || aH.a0X(ef, eh)
	}

	function a0B(e) {
		a0Q() || (a06 = !0, a0R(e, 1), a0Y(Math.floor(at.pZ * e.clientX), Math.floor(at.pZ * e.clientY)))
	}

	function a0G(e) {
		a05 = bb.lo, a0R(e, 1), 0 < e.touches.length && (a03 = Math.floor(at.pZ * e.touches[0].clientX), a04 = Math.floor(at.pZ * e.touches[0].clientY), ao.a0G(e) || a0Y(a03, a04))
	}

	function a0Y(ef, eh) {
		n.a0B(ef, eh), 0 === a9.ye ? aW.a0B(ef, eh) : (bP.gf(ef, eh), ba.a0B(ef, eh) || (aI.a0B(ef, eh), aH.xC() ? aH.a0B(ef, eh) : aN.gn ? aN.a0B(ef) && (bb.dc = !0) : (aR.a0B(ef, eh), aO.m3 && aO.a0B(ef, eh) && (bb.dc = !0))))
	}

	function a0D(e) {
		a0Q() || (a0R(e, 1), a0Z(), 0 === a9.ye ? (aW.click(-1024, -1024), aP.qV()) : (aR.a0a(-1024, -1024), aI.a0B(-1024, -1024), aN.a0b(), aO.m3 = !1))
	}

	function a0C(e) {
		a0Q() || (a0R(e, 1), a0c(Math.floor(at.pZ * e.clientX), Math.floor(at.pZ * e.clientY), 2 === e.button), bF.a09 && (bF.a09 = !1, e.preventDefault()))
	}

	function click(e) {
		a0Q() || a0R(e, 1)
	}

	function a0H(e) {
		a05 = bb.lo, a0R(e, 1), e && e.touches && 0 < e.touches.length && 0 !== a9.ye ? aO.m3 = !1 : ao.a0d() || (a0c(a03, a04, !1), bF.a09 && (bF.a09 = !1, e.preventDefault()))
	}

	function a0I(e) {
		a05 = bb.lo, a0R(e, 1), a0c(a03, a04, !1), bF.a09 && (bF.a09 = !1, e.preventDefault())
	}

	function a0J(e) {}

	function a0K(e) {}

	function a0L(e) {
		a0Q() || a0R(e, 0)
	}

	function a0c(ef, eh, a0e) {
		a0Z(), 0 === a9.ye ? aW.click(ef, eh) : (aR.a0a(ef, eh), ba.a0a(), aN.a0b(), aO.m3 = !1, aH.click(ef, eh, a0e) ? bb.dc = !0 : aI.a0C(ef, eh))
	}

	function a0Z() {
		n.a0Z()
	}

	function a0E(e) {
		var ef, eh, deltaY;
		a0Q() || (a0R(e, 1), aw.s.a0S(aw.s.zu), ef = Math.floor(at.pZ * e.clientX), eh = Math.floor(at.pZ * e.clientY), deltaY = e.deltaY, 1 === e.deltaMode && (deltaY *= 16), n.a0E(ef, eh, deltaY), 0 === a9.ye ? aW.a0E(ef, eh, deltaY) : aR.a0E(ef,
			eh, deltaY) || (aN.a0f(ef, eh) ? aN.a0E(deltaY) && (bb.dc = !0) : aO.a0E(ef, eh, deltaY)))
	}

	function a0M(e) {
		a0R(e, 0)
	}

	function a0R(e, id) {
		0 === id && n.xC() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== aW.zo() && e.preventDefault()
	}

	function a0N(e) {
		if (__fx.keybindHandler(e.key)) return;
		a0Q() || (e = e.code) && e.length && (bT.et(e, 18) ? am.a0h(3) : bT.et(e, 22) ? am.a0h(0) : bT.et(e, 20) ? am.a0h(1) : bT.et(e, 24) ? am.a0h(2) : bT.et(e, 10) ? aN.a0i(31 / 32) : bT.et(e, 8) ? aN.a0i(32 / 31) : bT.et(e, 6) ? aN.a0i(7 / 8) :
			bT.et(e, 4) ? aN.a0i(8 / 7) : bT.et(e, 14) ? 0 !== a9.ye && aO.a0E(Math.floor(at.a1 / 2), Math.floor(at.j7 / 2), -200) : bT.et(e, 16) ? 0 !== a9.ye && aO.a0E(Math.floor(at.a1 / 2), Math.floor(at.j7 / 2), 200) : bT.et(e, 0) ? a9.ye &&
			bP.gg(!1) : bT.et(e, 2) && a9.ye && bP.gg(!0))
	}

	function a0O(e) {
		var code;
		a0Q() || bb.lo < 400 || (code = e.code) && code.length && ("Enter" === code && n.a0j(1) || bk.zs && bk.t3.a0j(code) || (8 !== aW.zo() && aW.a0j(e) ? bb.dc = !0 : "Escape" === code ? bF.f2() : bT.et(code, 18) ? am.a0k(3) : bT.et(code, 22) ? am
			.a0k(0) : bT.et(code, 20) ? am.a0k(1) : bT.et(code, 24) ? am.a0k(2) : bT.et(code, 12) ? b8.a0l(!a9.m1) : "Space" === code && a9.ye && (aI.gj && aI.a0m(), a9.gi) && b8.a0n(!1)))
	}

	function a0P() {
		"hidden" === document.visibilityState ? 1 === a9.ye && (a9.gi ? b8.a0o() : !a9.k0 || aI.gj || a9.gu || aI.a0m()) : bb.dc = !0
	}

	function a0Q() {
		return a05 + 15e3 > bb.lo
	}

	function resize() {
		at.a0q()
	}
	this.a07 = 0, this.a08 = "", this.a09 = !1, this.dU = function() {
		a0A.addEventListener("mousedown", gm, {
			passive: !1
		}), a0A.addEventListener("mousemove", a0B, {
			passive: !1
		}), a0A.addEventListener("mouseup", a0C, {
			passive: !1
		}), a0A.addEventListener("click", click, {
			passive: !1
		}), a0A.addEventListener("mouseleave", a0D, {
			passive: !1
		}), a0A.addEventListener("wheel", a0E, {
			passive: !1
		}), a0A.addEventListener("touchstart", a0F, {
			passive: !1
		}), a0A.addEventListener("touchmove", a0G, {
			passive: !1
		}), a0A.addEventListener("touchend", a0H, {
			passive: !1
		}), a0A.addEventListener("touchcancel", a0I, {
			passive: !1
		}), a0A.addEventListener("dragover", a0J), a0A.addEventListener("drop", a0K), a0A.addEventListener("dblclick", a0L), document.addEventListener("contextmenu", a0M), document.addEventListener("keydown", a0N), document.addEventListener(
			"keyup", a0O), document.addEventListener("visibilitychange", a0P), window.addEventListener("resize", resize)
	}, this.a0W = function(ef, eh) {
		return !!b8.gm(ef, eh) || !!(aR.gm(ef, eh) || aO.gm(ef, eh) || aN.gm(ef, eh) || aJ.gm(ef, eh))
	}, this.a0p = a0Q, this.px = function() {
		return !a06 || 0 < a05
	}, this.f2 = function() {
		if (!n.xC()) return 8 === aW.zo() ? a9.m1 ? void b8.a0l(!1) : ba.xC ? void ba.a0m() : void aI.a0m() : void(7 !== aW.zo() && 6 === aW.zo() && aV.a0r());
		n.a0j(2)
	}
}

function bt() {
	this.pT = new a0s, this.pd = new a0t, this.fu = new a0u, this.zF = new a0v, this.wt = new a0w, this.a0x = new a0y, this.canvas = new a0z, this.color = new a10, this.a11 = new a12, this.dU = function() {
		this.pT.uM()
	}
}

function a0t() {
	this.vH = function(g) {
		g.fill(0)
	}, this.a13 = function(g) {
		for (var eY = g.length, a7 = 0; a7 < eY; a7++) g[a7] = []
	}, this.a14 = function(hP, a15) {
		for (var hQ = bK.f9, a7 = 0; a7 < 3; a7++) hQ[a7] = a15 * hP[a7];
		return hQ
	}, this.a16 = function(hP, hQ, a17) {
		for (var hU = 0, a7 = 0; a7 < 3; a7++) hU += Math.abs(hP[a7] - hQ[a7]);
		return a17 <= hU
	}, this.a18 = function(hP, a19) {
		for (var a7 = 0; a7 < 3; a7++) hP[a7] = bH.p0(hP[a7] + a19, 0, 255);
		return hP
	}, this.a1A = function(g, sC, sD) {
		sD = sD || g.length - 1;
		for (var a1B = 0, a7 = sC = sC || 0; a7 <= sD; a7++) a1B += g[a7];
		return a1B
	}, this.a1C = function(g, a1D) {
		for (var a7, a1E, eY = g.length, a1F = [], er = eY - 1; 0 <= er; er--) {
			for (a7 = a1E = 0; a7 < eY; a7++) a1D(g[a7]) < a1D(g[a1E]) && (a1E = a7);
			eY--, a1F.push(g[a1E]), g[a1E] = g[eY], g.pop()
		}
		return a1F
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
	}, this.a1G = function(g, f0) {
		for (var eY = g.length, g1 = 0, a7 = 0; a7 < eY; a7++) g1 += g[a7] > f0;
		return g1
	}, this.a1H = function(a1I, a1J, min) {
		for (var eY = a1J[0], a7 = eY - 1; 0 <= a7; a7--) a1I[a7] < min && (a1I[a7] = a1I[--eY]);
		a1J[0] = eY
	}, this.a1K = function(g, eY, value) {
		for (var a7 = 0; a7 < eY; a7++) g[a7] -= value
	}, this.a1L = function(g) {
		for (var eY = g.length, a7 = 0; a7 < eY; a7++)
			if ("string" != typeof g[a7]) return !1;
		return !0
	}, this.a1M = function(pA, g, a1N) {
		g.fill(0);
		for (var sG = pA.split(","), eY = Math.min(sG.length, g.length), a7 = 0; a7 < eY; a7++) g[a7] = Math.min(parseInt(sG[a7]), a1N)
	}, this.a1O = function(pA, g, qS) {
		g.fill("");
		for (var sG = pA.split('"'), eY = Math.min(sG.length, 2 * g.length), k3 = 0, a7 = 1; a7 < eY; a7 += 2) g[k3++] = sG[a7].slice(0, qS)
	}, this.a1P = function(g, g1) {
		if (0 === g1) g.fill(0);
		else {
			var a1B = this.a1A(g),
				eY = g.length;
			if (0 === a1B) g.fill(bH.dl(g1, eY));
			else
				for (var a7 = 0; a7 < eY; a7++) g[a7] = bH.dl(g1 * g[a7], a1B);
			if (0 === (a1B = this.a1A(g))) g[1] = g1;
			else
				for (var k3 = 0; a1B++ < g1;) g[k3 = (k3 + 1) % eY] && g[k3]++
		}
	}, this.a1Q = function(g) {
		if (!g) return 0;
		var eY = g.length;
		if (0 === eY) return 0;
		for (var f0 = g[eY - 1], a7 = eY - 2; 0 <= a7; a7--)
			if (g[a7] !== f0) return a7 + 2;
		return 1
	}
}

function a0z() {
	this.xR = function(a1R, e0, a1S) {
		var hB = a1R.height,
			a1T = b6.pT.v7(hB, hB),
			hH = b6.pT.getContext(a1T);
		return function(a1, hH, a1S) {
			hH.fillStyle = a1S, hH.beginPath(), hH.arc(a1 / 2, a1 / 2, .47 * a1, 0, 2 * Math.PI), hH.fill()
		}(hB, hH, a1S), hH.drawImage(a1R, -e0 * hB, 0), a1T
	}, this.a1V = function(a1W) {
		var hH, hE, hB = a1W.height;
		return a1W.width === hB && (hE = (hH = b6.pT.getContext(a1W, !0)).getImageData(0, 0, hB, hB), b6.a0x.a1X(hE.data, hB, hB, .9), hH.putImageData(hE, 0, 0)), a1W
	}
}

function a10() {
	this.a1Y = function(f0) {
		return [f0 >> 12 & 63, f0 >> 6 & 63, 63 & f0]
	}, this.a1Z = function(f0) {
		for (var g = this.a1Y(f0), a7 = 0; a7 < 3; a7++) g[a7] = ~~(4.05 * g[a7]);
		return g
	}, this.a1a = function(f0) {
		f0 = this.a1Z(f0);
		return b6.color.mQ(f0[0], f0[1], f0[2])
	}, this.a1b = function(g) {
		for (var a7 = 0; a7 < 3; a7++) g[a7] = ~~(g[a7] / 4.04);
		return (g[0] << 12) + (g[1] << 6) + g[2]
	}, this.mQ = function(dz, sG, es) {
		return "rgb(" + dz + "," + sG + "," + es + ")"
	}, this.mS = function(dz, sG, es, er) {
		return "rgba(" + dz + "," + sG + "," + es + "," + er.toFixed(3) + ")"
	}, this.pz = function(et) {
		for (var g = et.split("(")[1].split(","), f8 = bK.f8, a7 = 0; a7 < 3; a7++) f8[a7] = parseInt(g[a7]);
		return 4 === g.length ? f8[3] = 255 * parseFloat(g[3].slice(0, -1)) : f8[3] = 255, f8
	}, this.q0 = function(a1c, eb) {
		for (var g = a1c.slice(a1c.indexOf("(") + 1, a1c.indexOf(")")).split(","), f8 = bK.f8, a7 = 0; a7 < 3; a7++) f8[a7] = bH.p0(parseInt(g[a7].trim(), 10) + eb, 0, 255);
		return 3 === g.length ? this.mQ(f8[0], f8[1], f8[2]) : (a1c = parseFloat(g[3].trim()), this.mS(f8[0], f8[1], f8[2], a1c = 0 === a1c ? .3 : a1c))
	}, this.a1d = function(g) {
		for (var pA = "#", a7 = 0; a7 < 3; a7++) {
			var dz = g[a7].toString(16);
			pA += 1 === dz.length ? "0" + dz : dz
		}
		return pA
	}, this.a1e = function(pA) {
		var dz, sG;
		return pA.length < 7 ? b7.mP : (dz = parseInt(pA.slice(1, 3), 16), sG = parseInt(pA.slice(3, 5), 16), pA = parseInt(pA.slice(5, 7), 16), this.mQ(dz, sG, pA))
	}
}

function a0w() {
	this.a1f = function(pA, font, maxWidth) {
		if (font && (tU.font = font), tU.measureText(pA).width <= maxWidth) return pA;
		for (var a7 = pA.length - 1; 1 <= a7; a7--)
			if (pA = pA.substring(0, a7), tU.measureText(pA + "...").width <= maxWidth) return pA + "...";
		return "..."
	}
}

function a12() {
	var a1h = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.a1i = function(lo) {
		var a1k, pA = new Date(lo.getTime() - 6e4 * lo.getTimezoneOffset()).toUTCString();
		return pA.length < 12 || (pA = pA.substring(5, pA.length), 0 === (lo = lo.getTimezoneOffset())) ? pA : (a1k = (lo < 0 ? "+" : "-") + bH.dl(Math.abs(lo), 60), 0 == (lo = Math.abs(lo) % 60) ? pA + a1k : pA + a1k + ":" + (lo < 10 ? "0" :
			"") + lo)
	}, this.a1l = function(lo) {
		var pA = lo.toUTCString();
		return pA.length < 12 ? pA : function(lo) {
			return a1h[lo.getUTCDay()]
		}(lo) + ", " + pA.substring(5, pA.length - 4)
	}
}

function a0s() {
	var a1n = null;
	this.xi = 0, this.uM = function() {
		var f0 = bf.dp.data[5].value;
		a1n = "px " + f0, "Trebuchet MS" !== f0 && (a1n += ", Trebuchet MS"), this.xi = hA(32, 32, ["a", "b", "m"], 200, a1n)
	}, this.v7 = function(a1, j7) {
		var et = document.createElement("canvas");
		return et.width = a1, et.height = j7, et
	}, this.getContext = function(canvas, alpha) {
		return canvas.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(wt, a1, j7) {
		return wt.getImageData(0, 0, a1, j7)
	}, this.rV = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + a1n : 1 === type ? "bold " + size + a1n : 2 === type ? "lighter " + size + a1n : 3 === type ? "italic " + size + a1n : 4 === type ? "oblique " + size + a1n : 5 === type ? "small-caps " +
			size + a1n : "small-caps bold " + size + a1n
	}, this.textAlign = function(hH, id) {
		hH.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(hH, id) {
		hH.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.pf = function(e, code, color) {
		color = this.pe(bY.rW) + " solid " + (color || b7.mY);
		5 === (code = code || 5) ? e.style.border = color : 4 === code ? e.style.borderLeft = color : 2 === code ? e.style.borderBottom = color : 6 === code ? e.style.borderRight = color : e.style.borderTop = color
	}, this.sI = function(e, ef, eh, a1, j7) {
		e = e.style;
		e.left = this.a1o(ef), e.top = this.a1o(eh), e.width = this.a1o(a1), e.height = this.a1o(j7)
	}, this.pU = function(f0) {
		return 1 + f0 * u.v.r8()
	}, this.r3 = function(mA, g7) {
		return mA * this.pU(void 0 === g7 ? .5 : g7) * at.pV / at.pZ
	}, this.sH = function(mA, g7) {
		return mA * this.pU(void 0 === g7 ? .5 : g7) * at.pV
	}, this.ry = function(mA, g7, a1p) {
		return this.pU(g7) * Math.min(mA * at.pV, a1p * at.a1) / at.pZ
	}, this.pe = function(f0) {
		return f0.toFixed(1) + "px"
	}, this.a1o = function(f0) {
		return this.a1r(f0).toFixed(1) + "px"
	}, this.a1r = function(f0) {
		return f0 / at.pZ
	}, this.a1s = function(rk, a1t) {
		for (var pA = "<ul>", eY = rk.length, a7 = 0; a7 < eY; a7++) pA += "<li>" + rk[a7] + ": <a href='" + a1t[a7] + "' target='_blank'>" + a1t[a7] + "</a></li>";
		return pA += "</ul>"
	}, this.a1u = function(a1v) {
		return "<a href='" + a1v + "' target='_blank'>" + a1v + "</a>"
	}, this.a1w = function(e) {
		navigator.clipboard && navigator.clipboard.writeText(e.value)
	}, this.a1x = function(e) {
		var dk = e.textContent;
		b6.zF.a1y(dk, "✔") || (1 === dk.length ? e.textContent = "✔" : e.textContent = dk + " ✔", setTimeout(function() {
			e.textContent = dk
		}, 500))
	}, this.measureText = function(pA) {
		return tU.measureText(pA).width
	}
}

function a0u() {
	this.gk = function(zg) {
		return 0 === zg ? 1 === a9.ye && a9.gu : 1 === zg ? 1 === a9.ye && !a9.gu : 2 === a9.ye
	}, this.gl = function(player) {
		return 0 !== ac.lV[player] && 2 !== ac.a1z[player]
	}, this.a20 = function(player) {
		return player === a9.eI && 2 !== ac.a1z[player]
	}, this.a21 = function(player) {
		return player === a9.eI
	}, this.j1 = function(player) {
		return player >= a9.je || 2 === ac.a1z[player]
	}, this.kT = function(player) {
		return 0 !== ac.lV[player]
	}, this.yU = function(player) {
		return player < a9.je
	}, this.ol = function(a22, a23) {
		return a22 !== a23
	}, this.fx = function(player, f0) {
		var min;
		return f0 = this.a24(player, f0), ac.ga[player] += f0, ac.a25[player] && (min = Math.min(ac.a25[player], ac.ga[player]), ac.a25[player] -= min, ac.ga[player] -= min), f0
	}, this.a24 = function(player, f0) {
		var a26 = ac.ga[player];
		return f0 = Math.min(f0, ac.gM[player] * a9.jl - a26), f0 = Math.min(f0, a9.a27 - a26), Math.max(f0, 0)
	}, this.om = function(player, hu, a28, a29) {
		var a26 = ac.ga[player],
			hu = bH.dl(a26 * (hu + 1), 1024),
			a28 = bH.dl(a28 * a26, 1024),
			hu = Math.min(hu, a26 - a28);
		return 10 === a9.jy && (hu = b0.a2B(player, hu)), bK.f6[0] = hu, bK.f6[1] = a28, a29 <= hu
	}, this.oD = function(player, nu, nt) {
		var player = ac.ga[player],
			a2A = bH.dl(64 * player, 1024),
			player = (nu = Math.min(nu, player - a2A), this.a2D(nu));
		return a2A += player, nu = this.a24(nt, nu -= player), bK.f6[0] = nu, bK.f6[1] = a2A, 1 <= nu
	}, this.oF = function(nu, nt) {
		var a2C = this.a2D(nu);
		return nu = this.a24(nt, nu -= a2C), bK.f6[0] = nu, bK.f6[1] = a2C, 1 <= nu
	}, this.ht = function(player, a2E) {
		return bH.dl(ac.ga[player] * (a2E + 1), 1024)
	}, this.a2D = function(a2F) {
		return bH.dl(Math.max(2142 - bb.jb(), 0) * a2F, 2142)
	}, this.oy = function(player, a28) {
		a28 = bH.dl(a28 * ac.ga[player], 1024);
		bK.f6[1] = a28, ac.ga[player] -= a28
	}, this.fv = function(player, a2G) {
		var fI, fK, es = ac.ga[player];
		return a2G <= es ? ac.ga[player] -= a2G : (ac.ga[player] = 0, fK = ac.a25[player] + (fI = 5 * ((es = a2G - es) >> 2)), bZ.fy(player, fI - es, 12), fK <= a9.a2H ? ac.a25[player] = fK : (ac.a25[player] = a9.a2H, bZ.fy(player, fK - a9.a2H,
			18))), a2G
	}, this.kh = function(player, hu) {
		var ga = ac.ga,
			a26 = ga[player],
			hu = bH.dl(a26 * (hu + 1), 1024),
			a2A = Math.max(bH.dl(a26, 10), 1e3);
		return (hu = Math.min(hu, a26 - a2A)) < 0 ? (ga[player] = 0, a2A = Math.min(1e3, a26 + a9.a2H - ac.a25[player]), bK.f6[1] = a2A, ac.a25[player] += a2A - a26, 0) : (bK.f6[1] = a2A, 10 === a9.jy && (hu = b0.a2B(player, hu)), ga[player] -=
			a2A + hu, hu)
	}, this.op = function(player) {
		ac.ga[player] -= bK.f6[0] + bK.f6[1]
	}, this.on = function(player, il) {
		return (il = Math.min(il, a9.eV)) < a9.eV && 0 === ac.lV[il] && (il = a9.eV), (bK.eU[0] = il) === a9.eV || eR(player, il)
	}, this.or = function(player, nt) {
		return 0 !== ac.lV[nt] && !eR(player, nt)
	}, this.a2I = function(player, a2J) {
		for (var g6, eY = ah.jf, qx = 0, a2K = kw, a7 = 0; a7 < eY; a7++)
			if (g6 = a2K[a7], aY.zW(g6)) {
				if (player === g6) return !0;
				if (++qx > a2J) return !1
			} return !1
	}, this.kp = function(g6) {
		var a2L = a9.ie ? bd.a2M() : ac.gM[kw[0]];
		return a2L >= bH.dl(g6 * a9.jO, 100)
	}
}

function a0y() {
	this.a2N = function(canvas, a2O, a2P) {
		var a1 = canvas.width,
			j7 = canvas.height,
			et = b6.pT.v7(a1, j7),
			hH = b6.pT.getContext(et, !0),
			canvas = (hH.drawImage(canvas, 0, 0), hH.getImageData(0, 0, a1, j7));
		return a2O(canvas.data, a1, j7, a2P), hH.putImageData(canvas, 0, 0), et
	}, this.a2Q = function(vI, a1, j7) {
		for (var ef = a1 - 1; 0 <= ef; ef--)
			for (var eh = j7 - 1; 0 <= eh; eh--) {
				var a7 = 4 * (ef + eh * a1);
				vI[3 + a7] = vI[a7], vI[a7] = vI[1 + a7] = vI[2 + a7] = 255
			}
	}, this.a2R = function(vI, a1, j7) {
		for (var ef = a1 - 1; 0 <= ef; ef--)
			for (var eh = j7 - 1; 0 <= eh; eh--) {
				var a7 = 4 * (ef + eh * a1);
				vI[1 + a7] > vI[2 + a7] + 10 && (vI[3 + a7] = vI[a7], vI[1 + a7] = vI[2 + a7])
			}
	}, this.a2S = function(vI, a1, j7, a2P) {
		for (var gap = Math.floor(Math.min(a1, j7) * a2P), ef = 0; ef < a1; ef++)
			for (var a7, eh = 0; eh < j7; eh++)(ef < gap || eh < gap || a1 - gap <= ef || j7 - gap <= eh) && (vI[3 + (a7 = 4 * (ef + eh * a1))] = 255 - 255 * (vI[1 + a7] - vI[a7]) / (255 - vI[a7]))
	}, this.a2T = function(vI, a1, j7, a2P) {
		for (var ef = a1 - 1; 0 <= ef; ef--)
			for (var eh = j7 - 1; 0 <= eh; eh--) {
				var a7 = 4 * (ef + eh * a1);
				vI[a7] = a2P[0], vI[1 + a7] = a2P[1], vI[2 + a7] = a2P[2]
			}
	}, this.a2U = function(vI, a1, j7, a2P) {
		for (var gap = Math.floor(a1 * a2P), ef = 0; ef < a1; ef++)
			for (var a7, eh = 0; eh < j7; eh++)(ef < gap || eh < gap || a1 - gap <= ef || j7 - gap <= eh) && (vI[a7 = 4 * (ef + eh * a1)] = vI[1 + a7] = vI[2 + a7] = 0)
	}, this.a2V = function(vI, a1, j7) {
		for (var eh, a7, ef = a1 - 1; 0 <= ef; ef--)
			for (eh = j7 - 1; 0 <= eh; eh--) 200 < vI[1 + (a7 = 4 * (ef + eh * a1))] && vI[1 + a7] - 20 > vI[a7] && vI[1 + a7] - 20 > vI[2 + a7] ? vI[a7] + vI[2 + a7] < 40 ? vI[3 + a7] = 0 : (vI[3 + a7] = vI[a7], vI[a7] = 255, vI[1 + a7] = 255,
				vI[2 + a7] = 255) : vI[a7] < 50 && vI[1 + a7] < 50 && vI[2 + a7] < 50 && (vI[a7] + vI[1 + a7] + vI[2 + a7] < 50 ? vI[3 + a7] = 180 : vI[3 + a7] = 180 + Math.floor(75 * (vI[a7] + vI[1 + a7] + vI[2 + a7] - 50) / 100))
	}, this.a2W = function(vI, a1, j7) {
		for (var eh, a7, ef = a1 - 1; 0 <= ef; ef--)
			for (eh = j7 - 1; 0 <= eh; eh--) vI[1 + (a7 = 4 * (ef + eh * a1))] > vI[a7] + 20 && vI[1 + a7] > vI[2 + a7] + 20 && vI[a7] + vI[2] < 40 && (vI[3 + a7] = 255 - vI[1 + a7], vI[a7] = vI[1 + a7] = vI[2 + a7] = vI[a7])
	}, this.a1X = function(vI, a1, j7, a2P) {
		for (var dz = a1 >> 1, ef = 0; ef < a1; ef++)
			for (var eh = 0; eh < j7; eh++) Math.sqrt((ef - dz) * (ef - dz) + (eh - dz) * (eh - dz)) > a2P * dz && (vI[4 * (ef + eh * a1) + 3] = 0)
	}
}

function a0v() {
	this.xw = function(f0) {
		var a7, a2X, a2Y, a2Z, a2a;
		if (f0 < 0) return "-" + this.xw(Math.abs(f0));
		if (f0 < 1e3) return f0.toString();
		for (a2X = Math.floor(Math.log(f0 + .5) / Math.log(10)) + 1, a2Y = Math.floor((a2X - 1) / 3), a2a = (a2Z = f0.toString()).substring(a2X - 3, a2X), a7 = 1; a7 < a2Y; a7++) a2a = a2Z.substring(a2X - 3 * (a7 + 1), a2X - 3 * a7) + " " + a2a;
		return a2Z.substring(0, a2X - 3 * a2Y) + " " + a2a
	}, this.a2b = function(g6, a2X) {
		return g6.toFixed(a2X) + "%"
	}, this.a2c = function(f0, a2d) {
		return f0.toFixed(bH.p0(Math.floor((void 0 === a2d ? 3 : a2d) - Math.log10(Math.max(f0, 1))), 0, 8))
	}, this.a2e = function(f0, mA, a2X) {
		return (f0 * mA).toFixed(a2X)
	}, this.zJ = function(username) {
		var ec, eN = username.indexOf("[");
		return !(eN < 0) && 1 < (ec = username.indexOf("]")) - eN && ec - eN <= 8 ? username.substring(eN + 1, ec).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.zJ;
	this.a2f = function(pA) {
		for (var er = Math.floor(.5 * pA.length + .5), mG = Math.floor(.5 * (er - 1)), a7 = 0; a7 < mG; a7++)
			for (var es = -1; es < 2; es += 2) {
				var et = er + es * a7;
				if (" " === pA[et]) return [this.zG(pA.substring(0, et)), this.a2g(pA.substring(et))]
			}
		return [pA.substring(0, er), pA.substring(er)]
	}, this.a2g = function(pA) {
		for (var eY = pA.length, a7 = 0; a7 < eY; a7++)
			if (" " !== pA[a7]) return pA.substring(a7);
		return pA
	}, this.zG = function(pA) {
		for (var a7 = pA.length - 1; 0 <= a7; a7--)
			if (" " !== pA[a7]) return pA.substring(0, a7 + 1);
		return pA
	}, this.a2h = function(pA, a2i) {
		return pA.split("(")[0] + "(🧈 " + a2i.toFixed(2) + ")"
	}, this.startsWith = function(pA, a2j) {
		return pA.substring(0, a2j.length) === a2j
	}, this.a1y = function(pA, a2j) {
		var eY = pA.length;
		return pA.substring(eY - a2j.length, eY) === a2j
	}, this.a2k = function(g, a2l, a2m) {
		var pA = "",
			eY = g.length - 1;
		a2m = a2m || "";
		for (var a7 = 0; a7 < eY; a7++) pA += a2m + g[a7] + a2m + ",", (a7 + 1) % a2l == 0 && (pA += "\n");
		return pA += a2m + g[eY] + a2m
	}, this.a2n = function(pA, hP, hQ) {
		return pA.replace(new RegExp(hP, "g"), hQ)
	}
}

function a2o() {
	this.ii = function(player, eK) {
		aE.wf(player, bI.eg(eK), bI.ei(eK)) && (bb.dc = !0), a9.k0 && this.iS()
	}, this.iS = function() {
		a9.gu = !1;
		for (var a7 = 0; a7 < a9.je; a7++) 0 !== ac.lV[a7] && 0 === ac.gM[a7] && aE.wl(a7);
		0 !== ac.lV[a9.eI] ? (bZ.lR[7] = ac.gM[a9.eI], bZ.lR[8] = ac.ga[a9.eI], aN.a2p(), aS.a2q(), a9.gi || aD.lr(ac.i9[a9.eI] - 5, ac.iB[a9.eI] - 5, ac.iA[a9.eI] + 5, ac.iC[a9.eI] + 5), ap.dU()) : aT.show(!1, !1, !1, !0), aJ.a2r(18), ab.a2s(),
			ab.lH(!0), bL.s.a2t(), aH.r1(), a9.ok = null, bX.a2u = !0, bX.a2v(), a9.k0 && u.v.setState(1)
	}
}

function bv() {
	this.eV = 512, this.a27 = 15e8, this.a2w = 1e9, this.a2H = 5e4, this.a2x = 512, this.fs = 2, this.eI = 0, this.je = 0, this.yh = 0, this.k2 = 0, this.yg = 0, this.vq = 512, this.vv = 512, this.jl = 150, this.k0 = !0, this.gi = 0, this.ye = 0,
		this.jO = 0, this.m1 = !1, this.gu = 0, this.a2y = 0, this.ie = !1, this.vx = 0, this.vy = 0, this.jy = 0, this.x6 = 0, this.ok = null, this.yw = new wz, this.a2z = 30, this.yb = 0, this.yj = 0, this.yv = 0, this.yW = 0, this.data = new a30,
		this.a31 = new a32, this.a33 = 0, this.a34 = function() {
			bN.dU(), this.yh = this.je = this.data.humanCount, this.k0 = 1 === this.yh && !__fx.customLobby.isActive(), this.m1 = !1, this.gi = this.data.isReplay, this.jy = 0 === this.data.gameMode ? [7, 10, 8][this.data.battleRoyaleMode] : this
				.data.isZombieMode ? 9 : this.data.numberTeams - 2, this.x6 = this.data.isContest, this.ie = this.jy < 7 || 9 === this.jy, this.jy = 10 === this.jy && this.k0 ? 7 : this.jy, this.jy = 8 === this.jy && 2 !== this.je ? 7 : this.jy, av
				.dU(), this.vx = this.data.numberTeams, this.data.teamPlayerCount ? this.vy = +(0 < this.data.teamPlayerCount[0]) : (this.vy = 0, this.ie && this.k0 && (this.data.teamPlayerCount = new Uint16Array(9), this.data.teamPlayerCount.fill(1,
					1, this.vx + 1), a9.a31.a35())), this.a2z = this.je <= 2 ? 30 : this.je <= 50 ? 40 : 50, this.a2y = this.gu = __fx.customLobby.isActive() ? __fx.customLobby.gameInfo.spawnSelection : this.data.selectableSpawn, this.ok = this.gu ?
				new a2o : null, this.vq = __fx.customLobby.isActive() ? Math.max(Math.min(__fx.customLobby.gameInfo.botCount, this.data.playerCount), this.je) : 1 === dg ? this.je : this.data.playerCount,
				this.vv = this.vq, this.k2 = this.vq - this.je, this.yg = 0, this.eI = this.data.selectedPlayer, this.yb = 0, this.yj = 0, this.yv = 0, this.yW = 0, au.a36(this.data.spawningSeed), aa.dU(), ac.dU(), ae.a37(), b4.nm.oV = [], bc.dU(),
				this.ye = 1,
				__fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), bZ.dU(), a38(), aY.dV(), ak.a39(), bX.dU(), aY.dU(), an.dU(), bI.dU(), bJ.dU(), aj.dU(), bR.a3A(), aA.dU(),
				ae.a3(), aE.dU(), aF.dU(), ah.a3B(), b5.dU(), bd.dU(), bL.dU(), ba.dU(), a3C.putImageData(a3D, 0, 0), aR.dU(), aO.dU(), aN.dU(), b8.dU(), aq.dU(), aQ.dU(), aS.dU(), aI.dU(), aM.dU(), aJ.dU(), aL.dU(), aH.dU(), aT.dU(), aB.dU(), aC
				.dU(), fa(), aZ.dU(), ab.dU(), b0.dU(), b1.dU(), ax.dU(), this.yw.dU(), bb.a3A(), aD.lq(), 0 === ac.lV[a9.eI] && aT.show(!1, !0), ab.lH(!0), ap.dU(), bb.dc = !0, this.gi || this.k0 && this.gu || u.v.setState(1), this.a33 = 0
		}, this.a02 = function(a3F) {
			a9.gi || b5.oi.a3G.length || (b5.oi.a3G = b5.a3H.y7()),
				__fx.customLobby.isActive() === false && aw.s.a3I(),
				this.ye = 0, bb.a3J(), u.v.setState(0), a3F || bQ.e6.show(), aW.setState(0);
			if (__fx.customLobby.isActive()) __fx.customLobby.rejoinLobby();
			else this.a33 ? n.o(19) : n.o(5, 5)
		}, this.a3K = function() {
			return this.gi ? aI.gj || !b8.a3L : this.k0 && (aI.gj || this.gu)
		}, this.a3M = function() {
			return 1 === this.ye && !this.gu
		}
}

function a30() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.elo = null, this.colorsType = 0, this.colorsPersonalized = 1,
		this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData = null, this.spawningType = 0,
		this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this.aIncomeData = null, this
		.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null
}

function a32() {
	this.a35 = function() {
		var a3N = a9.data;
		b6.pd.a1P(a3N.teamPlayerCount, a3N.playerCount), a3N.numberTeams = b6.pd.a1G(a3N.teamPlayerCount, 0), a3N.teamPlayerCount[0] && a3N.teamPlayerCount[7] && (a3N.teamPlayerCount[7] = 0, this.a35())
	}, this.a3O = function() {
		var a3N = a9.data;
		a3N.mapType < 2 ? bO.a3(bO.a3P(a3N), a3N.mapSeed) : bO.a3Q(a3N.canvas)
	}, this.a3R = function() {
		var a3N = a9.data;
		a3N.colorsData || (a3N.colorsData = new Uint32Array(1)), a3N.selectableColor && (a3N.colorsData[0] = bf.s.uL()), a3N.selectableName && (a3N.playerNamesData || (a3N.playerNamesData = new Array(1)), a3N.playerNamesData[0] = bf.dp.data[122]
			.value)
	}, this.a3S = function() {
		a9.data = new a30, a9.data.aIncomeType = 2, a9.data.aIncomeData = new Uint8Array(a9.eV), a9.data.aIncomeData[0] = 64
	}
}

function dM() {
	this.xf = 0, this.gap = 0, this.rW = 0, this.pb = 0, this.dU = function() {
		this.resize()
	}, this.resize = function() {
		this.xf = .0022 * b6.pT.pU(.5) * at.pV, this.rW = this.xf / at.pZ, this.gap = Math.max(Math.floor((u.v.r8() ? .0114 : .01296) * at.pV), 2), this.pb = this.gap / at.pZ
	}
}

function dL() {
	this.a3T = function() {
		return u.v.r8() ? 2 : 1
	}
}

function c6() {
	var q4, ef, eh, a3U, a3V, a3W, lo, player, a3X, gap, zoom, oO, a3Y;

	function a3i(player) {
		for (var a7 = oO.length - 1; 0 <= a7; a7--)
			if (oO[a7] === player) return 1
	}

	function a3g(a3d) {
		var a7, eY;
		if (-1 !== a3d)
			for (eY = q4.length, a7 = 0; a7 < eY; a7++)
				if (q4[a7].xC && q4[a7].ef + 1 === a3d % 4 && q4[a7].eh + 1 === a3d >> 2) return a7;
		return -1
	}

	function a3e(kk, kl) {
		var sG = gap / 2;
		return kk < ef - a3U - 3 * sG || ef + 3 * a3U + 5 * sG < kk || kl < eh - a3U - 3 * sG || eh + 2 * a3U + 3 * sG < kl ? -1 : 4 * (kl < eh - sG ? 0 : kl < eh + a3U + sG ? 1 : 2) + (kk < ef - sG ? 0 : kk < ef + a3U + sG ? 1 : kk < ef + 2 * a3U +
			3 * sG ? 2 : 3)
	}
	this.a3Z = function() {
		var a7, es, a3c = [b7.my, b7.nC, b7.mW, b7.nW, b7.nP];
		for (q4 = new Array(9), a7 = 0; a7 < 9; a7++) q4[a7] = {
			id: a7,
			xC: !1,
			kR: 0,
			canvas: [],
			ef: 0,
			eh: 0
		};
		for (q4[0].colors = [0, 1, 2, 3], q4[0].ef = 0, q4[0].eh = 0, q4[1].colors = [0, 1, 4], q4[1].ef = 1, q4[1].eh = 0, q4[2].colors = [0, 2], q4[2].ef = -1, q4[2].eh = 0, q4[3].colors = [0], q4[3].ef = 0, q4[3].eh = 0, q4[4].colors = [0, 2],
			q4[4].ef = 1, q4[4].eh = 1, q4[5].colors = [3], q4[5].ef = 0, q4[5].eh = -1, q4[6].id = 20, q4[6].colors = [0], q4[6].ef = 1, q4[6].eh = -1, q4[7].id = 21, q4[7].colors = [0], q4[7].ef = 0, q4[7].eh = 1, q4[8].id = 16, q4[8]
			.colors = [0], q4[8].ef = 0, q4[8].eh = 0, a7 = 0; a7 < 9; a7++)
			for (es = 0; es < q4[a7].colors.length; es++) q4[a7].canvas.push(function(id, a1S) {
				if (id < 20) return b6.canvas.xR(aX.get(3), id, a1S);
				var a1S = aX.get(3).height,
					a1T = b6.pT.v7(a1S, a1S),
					hH = b6.pT.getContext(a1T);
				20 === id ? hH.drawImage(aX.get(18), 0, 0) : 21 === id && af.vI.xg(af.x9.xV + af.x9.xm, hH, 0, 0, a1S);
				return a1T
			}(q4[a7].id, a3c[q4[a7].colors[es]]))
	}, this.a3b = function() {
		return q4
	}, this.dU = function() {
		oO = [], ef = eh = lo = 0, a3V = a3W = -1e3, this.resize()
	}, this.resize = function() {
		a3U = Math.floor((u.v.r8() ? .075 : .0468) * at.pV), zoom = a3U / aX.get(3).height, gap = Math.floor(a3U / 3)
	}, this.a0V = function(kk, kl) {
		return !!this.xC() && (bb.dc = !0, !!af.vI.gm(kk, kl, player) || (kk = function(kk, kl) {
			a3W = a3V = -1e3;
			var a3f = a3g(a3e(kk, kl));
			if (-1 === a3f) return 0;
			if (1 !== q4[a3f].colors[q4[a3f].kR])
				if (5 === a3f) {
					if (! function() {
							var dk = performance.now();
							a3Y + 4e3 < dk && (oO = []);
							a3Y = dk
						}(), a3i(player)) return 1;
					oO.push(player), 16 < oO.length && oO.shift()
				} else if (6 === a3f) {
				for (var a7 = oO.length - 1; 0 <= a7; a7--) 0 === ac.lV[oO[a7]] && oO.splice(a7, 1);
				0 < oO.length && (b1.a3j(1, oO, !0) && b4.fu.oN(oO, player), oO = [])
			} else if (2 === a3f) b4.gv.ns(aN.h0(), player);
			else if (3 === a3f) a9.gu && b4.gv.gw(a3X);
			else if (0 === a3f)
				if (0 === q4[0].kR) {
					if (a9.a2y && aS.a3k() < 350) return 1;
					b4.gv.h6(aN.h0(), player)
				} else ax.h8(player, aN.h0());
			else if (1 === a3f) bR.a3l(), b4.gv.h4(aN.h0(), a3X);
			else {
				if (7 === a3f) return bR.a3m(), af.vI.show(kk, kl), 2;
				if (4 === a3f) b1.a3j(0, [player], !0) && b4.fu.oK(player);
				else {
					if (8 !== a3f) return 0;
					b4.gv.gz(aN.h0(), a3X, player)
				}
			}
			return 1
		}(kk, kl), this.r1(), 2 === kk && (af.vI.xC = !0), 0 < kk))
	}, this.a0X = function(kk, kl) {
		this.xC() || (a3V = kk, a3W = kl, lo = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = bI.gq(mouseX),
			coordY = bI.gs(mouseY),
			coord = bI.ew(coordX, coordY),
			point = bI.eO(coord);
		if (coordX < 0 || coordY < 0) return;
		(function(kk, kl, eC) {
			aY.eT(eC) || -1 === (kk = bJ.h2.a40(kk, kl)) ? aJ.a3z(eC) : aJ.a41(kk)
		}(mouseX, mouseY, point))
	}
	this.click = function(kk, kl, a0e) {
		var gp = bI.gq(kk),
			gr = bI.gs(kl),
			eK = bI.ew(gp, gr),
			eC = bI.eO(eK);
		if (!bI.gt(gp, gr)) return !1;
		gp = (u.v.r8() ? .025 : .0144) * at.pV, gr = performance.now();
		if (Math.abs(kk - a3V) > gp || Math.abs(kl - a3W) > gp || lo + 500 < gr) return !1;
		if (lo = gr, a0e && ! function(kk, kl, eC) {
				aY.eT(eC) || -1 === (kk = bJ.h2.a40(kk, kl)) ? aJ.a3z(eC) : aJ.a41(kk)
			}(kk, kl, eC), aI.gj || this.xC() || !b6.fu.gl(a9.eI) || a9.gi) return this.r1(), !1;
		if (a9.gu) {
			if (!a0e) {
				if (!aY.eT(eC)) return !1;
				a3X = eK, q4[3].xC = !0
			}
		} else if (bJ.h2.nx(eK)) a0e ? aJ.a3s(55, 0) : bJ.a3q.a3r = -1;
		else {
			if (a0e) return !1;
			bJ.h2.a3t(kk, kl) || (2 === a9.ye ? aY.g8(eC) && (player = aY.eQ(eC), aY.zW(player)) && (q4[0].xC = !0, q4[0].kR = 1, q4[7].xC = !0) : aY.ed(eC) ? (a3X = ai.e9.eB(eC)) && (gp = bI.eO(a3X), q4[8].xC = !0, player = aY.eP(gp) ? a9.eV :
				aY.eQ(gp)) : (a3X = eK, bJ.h2.h3(a9.eI, eK) && (q4[0].xC = !0, q4[0].kR = 1, q4[1].xC = !0, q4[1].kR = bK.fA[2] ? 0 : 2), aY.h1(eC) || (aY.eP(eC) ? (player = a9.eV, h5(a9.eI) ? (q4[0].xC = !0, q4[0].kR = 0) : h7(a9.eI,
				player) && (q4[0].xC = !0, q4[0].kR = 3)) : (player = aY.eQ(eC)) === a9.eI ? (q4[0].xC = !0, q4[0].kR = 1, q4[7].xC = !0) : (q4[0].kR = 1, q4[5].xC = function(player) {
				return aY.zW(player) && !a3i(player) && b1.a3j(1, [player], !1)
			}(player), q4[7].xC = aY.zW(player), eR(player, a9.eI) ? (q4[4].xC = aY.zW(player) && !ab.a3v(player) && b1.a3j(0, [player], !1), q4[6].xC = function(player) {
				if (0 === oO.length) return !1;
				if (performance.now() > a3Y + 4e3) return !(oO = []);
				return !a3i(player) && ! function(player) {
					var a7;
					if (a9.ie)
						for (a7 = oO.length - 1; 0 <= a7; a7--)
							if (!eR(player, oO[a7])) return 1;
					return
				}(player)
			}(player), h9(a9.eI, player) ? (q4[0].kR = 0, q4[0].xC = !0) : h7(a9.eI, player) && (q4[0].kR = 3, q4[0].xC = !0), q4[0].xC = this.a3x()) : (q4[2].xC = !0, q4[0].xC = !0)))))
		}
		return this.a3p(kk, kl)
	}, this.a3p = function(kk, kl) {
		return ef = kk - Math.floor(a3U / 2), eh = kl - Math.floor(a3U / 2), !!this.xC()
	}, this.a0B = function(kk, kl) {
		return !!this.xC() && (af.vI.xC ? !af.vI.xe(kk, kl) && (af.vI.xC = !1, bb.dc = !0) : function(rM, kk, kl) {
			kk = a3e(kk, kl);
			if (0 <= a3g(kk)) return !1;
			if ((1 === kk || 6 === kk) && 0 <= a3g(2)) return !1;
			if ((6 === kk || 9 === kk) && 0 <= a3g(10)) return !1;
			return rM.r1(), bb.dc = !0
		}(this, kk, kl))
	}, this.r1 = function() {
		for (var a7 = q4.length - 1; 0 <= a7; a7--) q4[a7].xC = !1, q4[a7].kR = 0;
		af.vI.xC = !1
	}, this.xC = function() {
		return this.a3x() || af.vI.xC
	}, this.a3x = function() {
		for (var eY = q4.length, a7 = 0; a7 < eY; a7++)
			if (q4[a7].xC) return !0;
		return !1
	}, this.tT = function() {
		if (this.xC())
			if (af.vI.xC) af.vI.tT();
			else {
				var a7, hH = tU,
					es = q4,
					eY = es.length,
					a45 = (a3U + gap) / zoom;
				for (hH.imageSmoothingEnabled = !0, hH.setTransform(zoom, 0, 0, zoom, ef, eh), a7 = 0; a7 < eY; a7++) es[a7].xC && tU.drawImage(es[a7].canvas[es[a7].kR], es[a7].ef * a45, es[a7].eh * a45);
				hH.imageSmoothingEnabled = !1, hH.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function c7() {
	var j7, canvas, a46, a47, a48, a49 = -1;

	function a4A() {
		var a4B, wt = canvas.getContext("2d", {
			alpha: !0
		});
		wt.clearRect(0, 0, j7, j7), wt.fillStyle = b7.mU, wt.fillRect(0, 0, j7, j7), 0 === a47 && (wt.fillStyle = b7.mZ, wt.fillRect(0, 0, j7, j7)), wt.fillStyle = b7.mY, wt.fillRect(0, 0, j7, 1), wt.fillRect(0, 0, 1, j7), wt.fillRect(0, j7 - 1, j7,
				1), wt.fillRect(j7 - 1, 0, 1, j7), a4B = .9 * j7 / aX.get(0).width, wt.imageSmoothingEnabled = !0, wt.setTransform(a4B, 0, 0, a4B, Math.floor((j7 - a4B * aX.get(0).width) / 2), Math.floor((j7 - a4B * aX.get(0).height) / 2)), wt
			.drawImage(aX.get(0), 0, 0), wt.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a4D(kk, kl) {
		if (!aI.gj) return kk <= j7 + bY.gap && kl >= aN.eh ? 9 : -1;
		if (kk <= 4 * j7 + bY.gap) {
			if (kl >= aN.eh) return 0;
			if (kl >= aN.eh - j7 - a48 * bY.gap) return 2
		} else if (kk <= 7 * j7 + bY.gap && kl >= aN.eh - j7 - a48 * bY.gap) return 1;
		return -1
	}
	this.gj = !1, this.dU = function() {
		a47 = -1, this.gj = !1, a48 = u.v.r8() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		j7 = aN.j7, (canvas = document.createElement("canvas")).width = j7, canvas.height = j7, a46 = b6.pT.rV(1, (u.v.r8() ? .5 : .45) * j7), a4A()
	}, this.a0m = function() {
		this.gj = !this.gj, this.gj ? (b8.a0l(!1), a9.gi && b8.a3L && b8.a0n(!0), this.a4C()) : (a47 = -1, a4A(), !a9.k0 || 1 !== a9.ye || a9.gu || a9.gi || u.v.setState(1)), bb.dc = !0
	}, this.a4C = function() {
		(a9.k0 || a9.gi) && 1 === a9.ye && (aR.lH(!0), a9.gu || setTimeout(function() {
			bX.yp()
		}, 0), u.v.setState(0))
	}, this.gm = function(kk, kl) {
		return 0 <= (a49 = a4D(kk, kl)) || !aI.gj || a9.k0 || a9.gi || ba.xC || aI.a0m(), a49
	}, this.a0B = function(kk, kl) {
		kk = a4D(kk, kl);
		kk !== a47 && (a47 = kk, this.gj || a4A(), bb.dc = !0)
	}, this.a0C = function(kk, kl) {
		kk = a4D(kk, kl);
		return -1 !== kk && a49 === kk && (this.gj ? a9.m1 ? (0 <= kk && b8.a0l(!1), !a9.gi) : (0 === kk ? a9.a02() : 1 === kk ? this.a0m() : 2 === kk && n.o(1, 0), !0) : 9 === kk && (this.a0m(), !0))
	}, this.tT = function() {
		var a1;
		this.gj ? (a1 = Math.floor(5.5 * j7), tU.setTransform(1, 0, 0, 1, bY.gap, aN.eh), tU.fillStyle = b7.mU, tU.fillRect(0, 0, a1, j7), 0 === a47 ? (tU.fillStyle = b7.mZ, tU.fillRect(0, 0, 4 * j7, j7)) : 1 === a47 && (tU.fillStyle = b7.mZ, tU
				.fillRect(4 * j7, 0, Math.floor(1.5 * j7), j7)), tU.fillStyle = b7.mY, tU.fillRect(0, 0, a1, 1), tU.fillRect(0, 0, 1, j7), tU.fillRect(4 * j7, 0, 1, j7), tU.fillRect(0, j7 - 1, a1, 1), tU.fillRect(a1 - 1, 0, 1, j7), tU.font =
			a46, b6.pT.textBaseline(tU, 1), b6.pT.textAlign(tU, 1), tU.fillText(L(36), 2 * j7, .54 * j7), a1 = .4 * j7, aI.a4H(bY.gap + 4 * j7 + (1.5 * j7 - a1) / 2, aN.eh + .3 * j7, a1), a1 = 1, tU.setTransform(1, 0, 0, 1, bY.gap, aN.eh -
				a1 * a48 * bY.gap - a1 * j7), tU.fillStyle = b7.mU, tU.fillRect(0, 0, 4 * j7, j7), a47 === a1 + 1 && (tU.fillStyle = b7.mZ, tU.fillRect(0, 0, 4 * j7, j7)), tU.fillStyle = b7.mY, tU.fillRect(0, 0, 4 * j7, 1), tU.fillRect(0, 0,
				1, j7), tU.fillRect(4 * j7, 0, 1, j7), tU.fillRect(0, j7 - 1, 4 * j7, 1), tU.fillText(L(0 === a1 ? 36 : 37), 2 * j7, .54 * j7), tU.setTransform(1, 0, 0, 1, 0, 0)) : tU.drawImage(canvas, bY.gap, aN.eh)
	}, this.p3 = function(player) {
		return 0 !== ac.lV[player] && 2 !== a9.ye && aY.zW(player)
	}, this.a4H = function(ef, eh, eY) {
		tU.setTransform(1, 0, 0, 1, ef, eh), tU.lineWidth = bY.xf, tU.strokeStyle = b7.mY, tU.beginPath(), tU.moveTo(0, 0), tU.lineTo(eY, eY), tU.moveTo(0, eY), tU.lineTo(eY, 0), tU.stroke()
	}
}

function c8() {
	var a4J, j7, a4K, a4L, a4M, a4N, a4O, a4P, a4Q;

	function wp() {
		return aN.a4i(aJ.a4e()) ? aq.xC ? aN.eh - aN.j7 - 2 * a4K : aN.eh - a4K : b8.a4i(aJ.a4h()) ? aq.xC ? b8.wp() - aN.j7 - 2 * a4K : b8.wp() - a4K : aq.xC ? at.j7 - aN.j7 - (bg.a3T() + 1) * a4K : at.j7 - bg.a3T() * bY.gap
	}

	function a4V(dk, pA, id, g6, a4Y, a4Z, vQ, a4a, a4b, a4c) {
		var a7, wt, a1T, pL, g, a4n = void 0 !== a4b,
			a1 = Math.floor(aM.measureText(pA, aJ.a46) + 1.5 * a4L + (a4n ? j7 : 1.5 * a4L));
		if (bb.dc = !0, a1 + a4K > at.a1 && !a4n && 50 !== id && 20 < pA.length) a4V(dk, (g = b6.zF.a2f(pA))[0], id, g6, a4Y, a4Z, vQ, a4a, a4b, a4c), a4V(dk, g[1], id, g6, a4Y, a4Z, vQ, a4a, a4b, a4c);
		else if (g = a1 + (50 === id ? a4M : 0), (a1T = document.createElement("canvas")).width = a1, a1T.height = j7, (wt = a1T.getContext("2d", {
				alpha: !0
			})).font = aJ.a46, b6.pT.textBaseline(wt, 1), b6.pT.textAlign(wt, 0), wt.clearRect(0, 0, a1, j7), wt.fillStyle = a4Z, wt.fillRect(0, 0, a1, j7), wt.fillStyle = a4Y, wt.fillText(pA, Math.floor(1.5 * a4L), Math.floor(j7 / 2)), a4n && (wt
				.imageSmoothingEnabled = !0, af.vI.xg(a4b, wt, a1 - j7, 0, j7)), 0 === (pL = {
				lo: dk,
				pA: pA,
				id: id,
				player: g6,
				canvas: a1T,
				a4Y: a4Y,
				a4Z: a4Z,
				a1: a1,
				a4f: g,
				vQ: vQ,
				a4a: a4a,
				a4b: a4b,
				a4c: a4c
			}).lo || 0 < a4J.length && 0 < a4J[0].lo) a4J.unshift(pL);
		else {
			for (a7 = 1; a7 < a4J.length; a7++)
				if (0 < a4J[a7].lo) return void a4J.splice(a7, 0, pL);
			a4J.push(pL)
		}
	}

	function a4W(dz, sG, es) {
		return "rgb(" + dz + "," + sG + "," + es + ")"
	}

	function a4o(id, g1) {
		for (var eY = a4J.length, a7 = 0; a7 < eY; a7++) a4J[a7].id === id && g1-- <= 0 && (a4J.splice(a7, 1), a7--, eY--)
	}

	function a4p(id, player) {
		for (var em = !1, a7 = a4J.length - 1; 0 <= a7; a7--) a4J[a7].id !== id || player !== a9.eV && a4J[a7].player !== player || (a4J.splice(a7, 1), em = !0);
		return em
	}

	function a5D(pA) {
		a4V(340, pA, 6, 0, a4W(215, 245, 255), b7.mV, -1, !1)
	}
	this.a4R = "", this.dU = function() {
		var self;
		a4P = 0, a4O = u.v.r8() ? 7 : 12, a4N = {
			yS: [0, 0, 0],
			a4S: [0, 0, 0],
			ln: [220, 180, 180],
			tS: [0, 0, 0],
			et: [0, 0, 0]
		}, a4J = [], this.resize(), a9.gu && this.yq(0, 18), bO.v5.v6[bO.eE].name.length && a5D(L(84, [bO.v5.v6[bO.eE].name])), a5D(L(85, [bO.ej - 2 + "x" + (bO.ek - 2)])), a5D(L(86, [ak.a5E])), ak.a5E !== ak.a5F && a5D(L(87, [ak.a5F + " (" +
			b6.zF.a2b(100 * ak.a5F / ak.a5E, 1) + ")"
		])), 0 < ak.a5G && a5D(L(60, [ak.a5G + " (" + b6.zF.a2b(100 * ak.a5G / ak.a5E, 1) + ")"])), 0 < ak.a5H && a5D(L(88, [ak.a5H + " (" + b6.zF.a2b(100 * ak.a5H / ak.a5E, 1) + ")"])), 10 === a9.jy && a4V(120, L(89), 6, 0, a4W(235, 255,
			120), b7.mV, -1, !1), 0 !== (self = this).a4R.length && (a4V(200, self.a4R, 0, 0, b7.mY, b7.mV, -1, !1), self.a4R = ""), a9.x6 && a4V(340, L(38), 6, 0, a4W(255, 200, 0), b7.mV, -1, !1)
	}, this.resize = function() {
		var a4X, a7;
		if (j7 = (j7 = Math.floor((u.v.r8() ? .031 : .0249) * at.pV)) < 10 ? 10 : j7, this.fontSize = Math.floor(2 * j7 / 3), this.a46 = b6.pT.rV(1, this.fontSize), a4K = bY.gap, a4L = Math.floor(j7 / 5), 0 < a4J.length)
			for (a4X = a4J, a4J = [], a7 = a4X.length - 1; 0 <= a7; a7--) a4V(a4X[a7].lo, a4X[a7].pA, a4X[a7].id, a4X[a7].player, a4X[a7].a4Y, a4X[a7].a4Z, a4X[a7].vQ, a4X[a7].a4a, a4X[a7].a4b, a4X[a7].a4c);
		this.a4d()
	}, this.a4d = function() {
		a4Q = document.createElement("canvas");
		var pA = L(39),
			wt = (a4M = aM.measureText(pA, this.a46) + 5 * a4L, a4Q.height = j7, a4Q.width = a4M, a4Q.getContext("2d", {
				alpha: !0
			}));
		wt.font = this.a46, b6.pT.textBaseline(wt, 1), b6.pT.textAlign(wt, 1), wt.clearRect(0, 0, a4M, j7), wt.fillStyle = b7.mv, wt.fillRect(0, 0, a4M, j7), wt.fillStyle = b7.mY, wt.fillText(pA, Math.floor(a4M / 2), Math.floor(j7 / 2))
	}, this.a4e = function() {
		var eY;
		return aq.xC ? aq.a1 : 0 === (eY = a4J.length) ? 0 : 1 === eY ? a4J[0].a4f : a4g(a4J[0].a4f, a4J[1].a4f)
	}, this.a4h = function() {
		var eY = a4J.length;
		return aq.xC ? eY ? a4g(aq.a1, a4J[0].a4f) : aq.a1 : 0 === eY ? 0 : 1 === eY ? a4J[0].a4f : 2 === eY ? a4g(a4J[0].a4f, a4J[1].a4f) : a4g(a4g(a4J[0].a4f, a4J[1].a4f), a4J[2].a4f)
	}, this.gm = function(ef, eh) {
		for (var ly, a4j, a4k = wp(), a7 = a4J.length - 1; 0 <= a7; a7--)
			if ((a4j = a4k - (a7 + 1) * j7) <= eh && eh < a4j + j7) return 50 === a4J[a7].id ? ef >= at.a1 - a4M - a4K - a4J[a7].a1 && (ef >= at.a1 - a4M - a4K ? b4.fu.oK(a4J[a7].player) : aD.ls(a4J[a7].player, 800, !1, 0), !0) : ef >= at.a1 -
				a4J[a7].a1 - a4K && (736 === a4J[a7].id ? (a4j = a4J[a7].pA.split(" "), window.open(a4j[a4j.length - 1], "_blank")) : a4J[a7].a4a && (a4J[a7].a4c && a4J[a7].a4c.er ? (a4j = a4J[a7].a4c.eK, ly = bI.eg(a4j) - 10, a4j = bI.ei(
					a4j) - 10, aD.lr(ly, a4j, 19 + ly, 19 + a4j)) : a4J[a7].a4c && a4J[a7].a4c.es ? aD.lt(a4J[a7].player, a4J[a7].a4c.lu) : (aD.ls(a4J[a7].player, 800, !1, 0), 0 <= a4J[a7].vQ && (ly = a4J[a7].vQ, a4J[a7].vQ = a4J[a7]
					.player, a4J[a7].player = ly))), !0);
		return !1
	}, this.z2 = function(dk, pA, id, g6, a4Y, a4Z, vQ, a4a, a4b, a4c) {
		a4V(dk, pA, id, g6, a4Y, a4Z, vQ, a4a, a4b, a4c)
	}, this.a4m = function(k) {
		a4V(300, k, 252, 0, b7.mY, b7.mV, -1, !1)
	}, this.a2r = function(id) {
		for (var a7 = a4J.length - 1; 0 <= a7; a7--) a4J[a7].id === id && (a4J[a7].lo = 1)
	}, this.yq = function(player, id) {
		0 === id ? (aM.ii(player, 0), a4o(423, 0), a4V(160, L(40, [ac.zD[player]]), 423, player, "rgb(10,220,10)", b7.mV, -1, !1)) : 1 === id ? (a4p(50, a9.eV), aM.ii(player, 1), a4V(360, L(41, [ac.zD[player]]), 0, player, b7.nE, b7.mV, -1, !0),
			aD.ls(player, 2700, !1, 0)) : 2 === id ? (aM.ii(player, 2), a4V(0, L(42), 0, player, "rgb(10,255,255)", b7.mV, -1, !0), aD.ls(player, 2700, !1, 0)) : 3 === id ? (aM.ii(player, 2), a4V(0, L(43, [ac.zD[player]]), 0, player, b7.mY,
			b7.mV, -1, !0), aD.ls(player, 2700, !1, 0)) : 4 === id ? this.a4q(1, player, player) : 5 === id ? 2 !== ac.a1z[player] && aY.zW(a9.eI) && (function(id, lQ) {
			var a7, a52 = 0,
				eY = a4J.length;
			for (a7 = 0; a7 < eY; a7++)
				if (a4J[a7].id === id && lQ <= ++a52) return a4J.splice(a7, 1)
		}(1, 5), ab.a4s(player) ? a4V(180, L(44, [ac.zD[player]]), 1, player, a4W(255, 200, 180), b7.mV, -1, !0) : (a4o(573, 0), a4V(180, L(45, [ac.zD[player]]), 573, player, b7.nE, b7.mV, -1, !0))) : 18 === id ? a4V(255, L(46), 18, 0, b7.mY,
			b7.mV, -1, !1) : 21 === id ? a4V(220, L(47), id, 0, b7.mY, b7.mV, -1, !1) : 22 === id ? this.a4q(2, player, player) : 59 === id && a4V(0, L(48), id, 0, b7.nV, b7.mV, 0, !1)
	}, this.zv = function(k) {
		a4V(200, L(49, [k]), 94, 0, b7.mY, b7.nA, -1, !1)
	}, this.yx = function(a4t) {
		if (a9.eI === a4t && !a9.k0)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			a4V(0, "Your Win Count is now " + __fx.wins.count, 3, a4t, b7.mY, b7.mV, -1, !0);
		ac.gM[a4t] && (aM.ii(a4t, 2), a9.je < 100 ? a4V(0, L(43, [ac.zD[a4t]]), 3, a4t, b7.mY, b7.mV, -1, !0) : a4V(0, L(50, [ac.zD[a4t]]), 3, a4t, b7.mY, b7.mV, -1, !0))
	}, this.a3z = function(eC) {
		var a4w, pA, a4u = "(" + bI.eg(eC >> 2) + ", " + bI.ei(eC >> 2) + ")",
			a4a = !1,
			player = 0;
		aY.eT(eC) ? aY.eP(eC) ? a4u = L(51, [a4u]) : (player = aY.eQ(eC), pA = L(52, [b6.wt.a1f(ac.a4v[player], b6.pT.rV(0, 10), 150)]) + "   ", pA = (pA += L(53, [b6.zF.xw(ac.ga[player])]) + "   ") + L(54, [b6.zF.xw(ac.gM[player])]) + "   ", a9
				.ie && (a4w = bc.z0[bc.k4[bc.eW[player]]], pA += L(55) + ": " + a4w + "   "), b6.fu.j1(player) && (pA += L(56) + ": " + aA.js[aA.im[player]] + "   "), a4u = pA = (pA += L(57, [player]) + "   ") + L(58, [a4u]), a4a = !0) : a4u = aY
			.ed(eC) ? L(59, [a4u]) + "   #" + aY.eG(eC) : L(60, [a4u]), bb.dc = !0, a4o(55, 0), a4V(220, a4u, 55, player, b7.mY, b7.mV, -1, a4a)
	}, this.a41 = function(a4x) {
		var kP = bJ.s,
			player = kP.a4y[a4x] >> 3,
			pA = (bb.dc = !0, a4o(55, 0), L(61, [ac.zD[player]]) + "   ");
		a4V(220, pA += L(53, [kP.a4z[a4x]]), 55, player, b7.mY, b7.mV, -1, !0)
	}, this.o2 = function(np, a50, o3) {
		np === a9.eI ? a4V(175, " " + L(62, [ac.zD[a50]]) + ": ", 1001, a50, a4W(200, 255, 210), b7.mV, -1, !0, o3) : this.a51(np, o3)
	}, this.a51 = function(np, o3) {
		a4o(1e3, 0), a4V(175, ac.zD[np] + ": ", 1e3, np, b7.mY, "rgba(5,60,25,0.9)", -1, !0, o3)
	}, this.z3 = function() {
		var k;
		a9.yj ? (k = L(63), aM.z1(L(64), 2, 1, 12), a4V(0, k, 40, 0, "rgb(10,220,10)", b7.mV, -1, !1)) : (k = L(65), aM.z1(L(66), 2, 0, 16), a4V(0, k, 41, 0, b7.mY, b7.mV, -1, !1))
	}, this.x0 = function() {
		var g1 = ac.zD,
			eb = a9.data;
		a4V(300, g1[0] + " [" + a9.yw.x5(eb.elo[0]) + "] vs " + g1[1] + " [" + a9.yw.x5(eb.elo[1]) + "]", 65, 0, b7.mP, "rgba(100,255,255,0.75)", -1, !1)
	}, this.a53 = function(k) {
		a4V(200, k, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.a54 = function(a55) {
		a4V(0, L(a55 ? 67 : 68), 247, 0, b7.nU, b7.mV, -1, !1)
	}, this.x8 = function(x4, x7, a56) {
		var eb = a9.data,
			g1 = ac.zD;
		a4V(0, g1[0] + ": " + a9.yw.x5(eb.elo[0]) + " -> " + x4, 66, 0, b7.mY, a56[0], -1, !1), a4V(0, g1[1] + ": " + a9.yw.x5(eb.elo[1]) + " -> " + x7, 66, 1, b7.mY, a56[1], -1, !1)
	}, this.oL = function(player, id) {
		0 === id ? a4p(50, player) ? (a4V(128, L(69, [ac.zD[player]]), 52, player, a4W(180, 255, 180), b7.mV, -1, !0), ab.p1(player, 2, 255)) : a4V(384, L(70, [ac.zD[player]]), 51, player, a4W(210, 210, 255), b7.mV, -1, !0) : a4p(51, player) ? (
			a4V(128, L(71, [ac.zD[player]]), 52, player, b7.mY, "rgba(60,120,10,0.9)", -1, !0), ab.p1(player, 2, 255)) : (a4V(384, L(72, [ac.zD[player]]), 50, player, b7.mY, "rgba(90,90,90,0.9)", -1, !0), ab.p1(player, 2, 96))
	}, this.oP = function(yS, target) {
		var color = a4W(210, 255, 210);
		1 < yS.length ? a4V(230, L(73, [yS.length, ac.zD[target]]), 66, target, color, b7.mV, -1, !0) : a4V(230, L(74, [ac.zD[yS[0]], ac.zD[target]]), 66, yS[0], color, b7.mV, target, !0)
	}, this.a57 = function(player, target) {
		a4V(230, L(75, [ac.zD[player], ac.zD[target]]), 66, player, b7.mY, "rgba(75,65,5,0.9)", target, !0)
	}, this.a3s = function(id, g1) {
		a4o(id, g1)
	}, this.yl = function(id, player) {
		a4p(id, void 0 === player ? a9.eV : player)
	}, this.a58 = function(id) {
		for (var a7 = a4J.length - 1; 0 <= a7; a7--)
			if (a4J[a7].id === id) return a4J[a7];
		return null
	}, this.oG = function(a59, a5A, player) {
		2 !== ac.a1z[a9.eI] && (a4V(200, 1 === a59 ? L(76, [ac.zD[player]]) : L(77, [a59, ac.zD[player]]), 30, player, "rgb(190,255,190)", b7.mV, -1, !0), a5A) && a4V(30, 1 === a5A ? L(78) : L(79, [a5A]), 30, 0, b7.mY, b7.mV, -1, !1)
	}, this.a5C = function(a59, player) {
		2 !== ac.a1z[a9.eI] && (a4o(31, 0), 2 === ac.a1z[player] || player >= a9.je ? a4V(150, 1 === a59 ? L(80, [ac.zD[player]]) : L(81, [ac.zD[player], a59]), 31, player, b7.mP, "rgba(205,205,205,0.9)", -1, !0) : a4V(150, 1 === a59 ? L(82, [ac
			.zD[player]
		]) : L(83, [ac.zD[player], a59]), 31, player, b7.mP, "rgba(205,255,205,0.9)", -1, !0))
	}, this.yk = function(bo) {
		for (var et = bb.jb(), a7 = 2; 0 <= a7; a7--) 0 < a4N.tS[a7] && (bo || a4N.et[a7] < et - 220) && this.a5I(a7)
	}, this.a5I = function(id) {
		var pA, eY = a4N.tS[id],
			player = a4N.yS[id];
		a4N.tS[id] = 0, 1 === eY ? (0 === id ? pA = L(90, [ac.zD[player], ac.zD[a4N.a4S[0]]]) : 1 === id ? pA = L(91, [ac.zD[player]]) : 2 === id ? pA = L(92, [ac.zD[player]]) : 3 === id && (pA = L(93, [ac.zD[player]])), a4o(7, 0), a4V(a4N.ln[
			id], pA, 7, a4N.a4S[id], b7.mY, b7.mV, -1, !0)) : (pA = L(0 === id ? 94 : 1 === id ? 95 : 96, [eY]), a4o(7, 0), a4V(a4N.ln[id], pA, 7, player, b7.mY, b7.mV, -1, !1))
	}, this.a4q = function(id, gy, vQ) {
		var et = bb.jb(),
			eY = a4N.tS[id] + 1;
		a4N.tS[id]++, a4N.yS[id] = gy, a4N.a4S[id] = vQ, 1 === eY && (a4N.et[id] = et), (1 === eY && (a9.yh < 32 || 2 === a9.ye) || 1 < eY && (a4N.et[id] < et - 140 || 2 === a9.ye)) && this.a5I(id)
	}, this.iS = function() {
		for (var hU = (hU = a4J.length - a4O) <= 1 ? 1 : hU * hU, a7 = a4J.length - 1; 0 <= a7; a7--) 0 < a4J[a7].lo && (a4J[a7].lo -= hU, a4J[a7].lo <= 0) && (bb.dc = !0, a4J.splice(a7, 1));
		! function() {
			var g1, a7;
			if (128 !== a4P && !(++a4P < 128))
				for (g1 = 5, a7 = ah.jf - 1; 0 <= a7; a7--) 1 === ac.a1z[ah.jh[a7]] && 0 < g1-- && a4V(240, L(93, [ac.zD[ah.jh[a7]]]), 1, ah.jh[a7], b7.mP, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.yk(!1)
	}, this.tT = function() {
		for (var vt, eh = wp(), a7 = a4J.length - 1; 0 <= a7; a7--) vt = eh - (a7 + 1) * j7, 50 === a4J[a7].id ? (tU.drawImage(a4J[a7].canvas, at.a1 - a4J[a7].a1 - a4M - a4K, vt), tU.drawImage(a4Q, at.a1 - a4M - a4K, vt)) : tU.drawImage(a4J[a7]
			.canvas, at.a1 - a4J[a7].a1 - a4K, vt)
	}
}

function c9() {
	var a5K, a5L, a5M, a1, j7, font, pA;

	function a5P(a5Q) {
		return a5Q < 10 ? "0" + a5Q : String(a5Q)
	}
	this.dU = function() {
		pA = L(97)
	}, this.resize = function() {
		a1 = Math.floor((u.v.r8() ? .53 : .36) * at.pV), j7 = Math.floor(.065 * a1), font = b6.pT.rV(1, Math.floor(.9 * j7)), a5M--, this.setTime()
	}, this.iS = function() {
		this.setTime() && (bb.dc = !0)
	}, this.setTime = function() {
		var dk = new Date,
			a5N = dk.getUTCMinutes(),
			dk = dk.getUTCSeconds();
		return a5L = 3600 - 60 * a5N - dk, a5L %= 900, a5K = pA + a5P(Math.floor(a5L / 60)) + ":" + a5P(a5L % 60), a5M !== (a5M = 60 * a5N + dk) && (a1 = aM.measureText(a5K, font), a1 += Math.floor(.4 * j7), !0)
	}, this.tT = function() {
		tU.lineWidth = 1 + Math.floor(j7 / 15), tU.translate(at.a1 - j7, Math.floor(.5 * (at.j7 + a1))), tU.rotate(-Math.PI / 2), tU.fillStyle = b7.mY, tU.fillRect(0, 0, a1, j7), tU.strokeStyle = b7.mP, tU.strokeRect(0, 0, a1, j7 + 10), tU
			.fillStyle = b7.mP, tU.font = font, b6.pT.textBaseline(tU, 1), b6.pT.textAlign(tU, 1), tU.fillText(a5K, Math.floor(a1 / 2), Math.floor(.59 * j7)), tU.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function cA() {
	var a4J, a5R, a46, j7, a5S;

	function a5U(a7) {
		var a5W = !0,
			hP = b7.mY,
			a1 = (a4J[a7].il === a9.eV ? a4J[a7].wt.fillStyle = b7.mj : (aY.a5X(a4J[a7].il), a4J[a7].wt.fillStyle = b6.color.mS(bK.f8[0], bK.f8[1], bK.f8[2], .87), 400 < b6.pd.a1A(bK.f8, 0, 2) && (a5W = !1, hP = b7.mP)), a4J[a7].canvas.width),
			rz = (a4J[a7].wt.clearRect(0, 0, a1, j7), a4J[a7].wt.fillRect(0, 0, a1, j7), a4J[a7].wt.fillStyle = hP, ! function(wt, a1, j7) {
				wt.fillRect(0, 0, a1, 1), wt.fillRect(0, j7 - 1, a1, 1), wt.fillRect(0, 0, 1, j7), wt.fillRect(a1 - 1, 0, 1, j7)
			}(a4J[a7].wt, a1, j7), a5R + 2 * j7 < a1 && (a4J[a7].wt.fillRect(a1 - a5R - j7, 0, 1, j7), a4J[a7].wt.fillText(ac.zD[a4J[a7].il], Math.floor((a1 - a5R) / 2), Math.floor(.57 * j7))), 0 !== a4J[a7].id ? 0 : j7);
		a4J[a7].wt.fillText(b6.zF.xw(a4J[a7].im), Math.floor(a1 - a5R / 2 - rz), Math.floor(.57 * j7)),
			function(a7, a1, rz, a5W) {
				a4J[a7].wt.fillStyle = a5W ? b7.ma : b7.mW;
				a5W = Math.floor(a5R * a4J[a7].im / a4J[a7].a5d);
				a4J[a7].wt.fillRect(Math.floor(a1 - a5R - rz), j7 - a5S, a5W, a5S)
			}(a7, a1, rz, a5W), 0 === a4J[a7].id ? (a5a(a7, a1, a5W, hP), function(a7, a1, a5W) {
				a4J[a7].wt.strokeStyle = a5W ? b7.mq : b7.n0, a4J[a7].wt.fillRect(j7, 0, 1, j7);
				a5W = a1 - j7;
				a4J[a7].wt.beginPath(), a4J[a7].wt.moveTo(Math.floor(.3 * j7 + a5W), Math.floor(j7 / 2)), a4J[a7].wt.lineTo(Math.floor(j7 - .3 * j7 + 0 + a5W), Math.floor(j7 / 2)), a4J[a7].wt.stroke(), a4J[a7].wt.beginPath(), a4J[a7].wt.moveTo(
					Math.floor(j7 / 2 + a5W), Math.floor(.3 * j7)), a4J[a7].wt.lineTo(Math.floor(j7 / 2 + a5W), Math.floor(j7 - .3 * j7 + 0)), a4J[a7].wt.stroke()
			}(a7, a1, a5W)) : a5a(a7, 2 * j7, a5W, hP)
	}

	function a5a(a7, a1, a5W, hP) {
		a4J[a7].wt.strokeStyle = a4J[a7].a5e ? b7.mh : a5W ? b7.n6 : b7.n7, a4J[a7].wt.fillStyle = hP, a4J[a7].wt.fillRect(a1 - j7, 0, 1, j7), a4J[a7].wt.lineWidth = Math.max(Math.floor(j7 / 12), 3), a4J[a7].wt.lineCap = "round";
		a5W = .35;
		a1 = j7 + 1, a4J[a7].wt.beginPath(), a4J[a7].wt.moveTo(Math.floor(a1 - a5W * j7 + 0), Math.floor(a5W * j7)), a4J[a7].wt.lineTo(Math.floor(a1 - j7 + a5W * j7), Math.floor(j7 - a5W * j7 + 0)), a4J[a7].wt.stroke(), a4J[a7].wt.beginPath(), a4J[
			a7].wt.moveTo(Math.floor(a1 - j7 + a5W * j7), Math.floor(a5W * j7)), a4J[a7].wt.lineTo(Math.floor(a1 - a5W * j7 + 0), Math.floor(j7 - a5W * j7 + 0)), a4J[a7].wt.stroke()
	}

	function a5o(eY) {
		for (var im, a7 = eY - 1; 0 <= a7; a7--) im = aZ.fl(a9.eI, a7), a4J[a7].im !== im && (a4J[a7].im = im, a4J[a7].a5d = im > a4J[a7].a5d ? im : a4J[a7].a5d, a4J[a7].a5V = !0)
	}

	function a5T(a5q) {
		a5q.canvas = document.createElement("canvas"), bO.vB.font = a46;
		var a1 = a5R;
		a5q.il < a9.eV && 0 === a5q.id && (a1 += Math.floor(bO.vB.measureText(ac.zD[a5q.il] + "000").width)), a1 += j7, 0 === a5q.id && (a1 += j7), a5q.canvas.width = a1, a5q.canvas.height = j7, a5q.wt = a5q.canvas.getContext("2d", {
			alpha: !0
		}), a5q.wt.font = a46, b6.pT.textBaseline(a5q.wt, 1), b6.pT.textAlign(a5q.wt, 1)
	}

	function a5k(a7) {
		return aQ.a5s() ? at.a1 - a4J[a7].canvas.width - bY.gap : aQ.ef
	}

	function a5l(a7) {
		return Math.floor(2 * bY.gap + (aQ.a5s() ? aS.j7 + bY.gap : 0) + aQ.j7 + a7 * (1.3 * j7))
	}
	this.dU = function() {
		a4J = [], this.resize()
	}, this.resize = function() {
		a46 = aJ.a46, j7 = aJ.fontSize + 5, j7 = Math.floor(1.25 * j7), u.v.r8() && (j7 = Math.floor(1.25 * j7)), a5S = Math.floor(.15 * j7), bO.vB.font = a46, a5R = Math.floor(bO.vB.measureText("02 000 000 0000").width);
		for (var a7 = a4J.length - 1; 0 <= a7; a7--) a5T(a4J[a7]), a5U(a7)
	}, this.lH = function() {
		for (var a7 = a4J.length - 1; 0 <= a7; a7--) a4J[a7].a5V && (a4J[a7].a5V = !1, a5U(a7))
	}, this.gm = function(kk, eh) {
		if (2 !== a9.ye && 0 !== ac.lV[a9.eI] && !a9.gi && aY.zW(a9.eI))
			for (var a5f, a5g, a5h, a5i = u.v.r8() ? j7 : 0, a5j = u.v.r8() ? Math.floor(.15 * j7) : 0, a7 = a4J.length - 1; 0 <= a7; a7--)
				if (a5f = a5k(a7), a5g = a5l(a7), a5h = a4J[a7].canvas.width, a5g - a5j <= eh && eh <= a5g + j7 + a5j) {
					if (a5f - a5i <= kk && kk <= a5f + j7 + a5i) return a4J[a7].a5e || (a4J[a7].a5V = !0, a4J[a7].a5e = !0, 0 === a4J[a7].id && b4.gv.o0(a4J[a7].il)), !0;
					if (0 === a4J[a7].id && a5f + a5h - j7 - a5i <= kk && kk <= a5f + a5h + a5i) return b4.gv.h6(aN.h0(), a4J[a7].il), !0
				} return !1
	}, this.iS = function() {
		var eY;
		0 !== ac.lV[a9.eI] && (aY.zW(a9.eI) || a9.gi) && (function(eY) {
			if (a4J.length !== eY) return 1;
			for (var a7 = eY - 1; 0 <= a7; a7--)
				if (a4J[a7].id !== aZ.ff(a9.eI, a7) || a4J[a7].il !== aZ.fk(a9.eI, a7)) return 1;
			return
		}(eY = aZ.fe(a9.eI)) && function(eY) {
			var a7, id, il, es, im, a4X = [];
			loop: for (a7 = 0; a7 < eY; a7++) {
				for (id = aZ.ff(a9.eI, a7), il = aZ.fk(a9.eI, a7), es = 0; es < a4J.length; es++)
					if (a4J[es].id === id && a4J[es].il === il) {
						a4X.push(a4J.splice(es, 1)[0]);
						continue loop
					} im = aZ.fl(a9.eI, a7), a5T(im = {
					il: il,
					im: im,
					a5d: im,
					id: id,
					a5V: !0,
					a5e: !1,
					canvas: null,
					wt: null
				}), a4X.push(im)
			}
			a4J = a4X
		}(eY), a5o(eY))
	}, this.a5r = function(g6) {
		for (var eY = Math.min(a4J.length, aZ.fe(a9.eI)), a7 = 0; a7 < eY; a7++)
			if (a4J[a7].il === g6) return void(a4J = [])
	}, this.tT = function() {
		if (0 !== ac.lV[a9.eI] && (aY.zW(a9.eI) || a9.gi))
			for (var a7 = a4J.length - 1; 0 <= a7; a7--) tU.drawImage(a4J[a7].canvas, a5k(a7), a5l(a7))
	}
}

function cB() {
	var a4J, jm, a5t, a5u, j7, a46, fontSize, a5v, a5w, a5x, a5y, canvas, wt, li, a5z;

	function tk(a7) {
		return L(0 === a7 ? 98 : 1 === a7 ? 99 : 2 === a7 ? 100 : 101)
	}

	function a66() {
		tU.drawImage(canvas, bY.gap + (a9.ie ? bY.gap + bd.a67() : 0), a68 + 2 * bY.gap)
	}

	function a60() {
		canvas.width = a4J[0].width + a5x, canvas.height = j7 + a5x, (wt = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, a4J[0].width + a5x, j7 + a5x), wt.translate(Math.floor(a5x / 2), Math.floor(a5x / 2)), wt.lineWidth = a5x, wt.fillStyle = 1 === a4J[0].a65 ? b7.md : b7.mV, a69(), wt.fill(), wt.strokeStyle = 1 === a4J[0].a65 ? b7.mP :
			b7.mY, a69(), wt.stroke(), b6.pT.textAlign(wt, 1), b6.pT.textBaseline(wt, 1), wt.fillStyle = 1 === a4J[0].a65 ? b7.mP : b7.mY, wt.font = a46[0], wt.fillText(tk(a4J[0].a64), Math.floor(a4J[0].width / 2), Math.floor(.72 * a5v[0] * j7)), wt
			.font = a46[1], wt.fillText(a4J[0].pA, Math.floor(a4J[0].width / 2), Math.floor((a5v[0] + .48 * a5v[1]) * j7))
	}

	function a69() {
		wt.beginPath(), wt.moveTo(a5y, 0), wt.lineTo(a4J[0].width - a5y, 0), wt.lineTo(a4J[0].width, a5y), wt.lineTo(a4J[0].width, j7 - a5y), wt.lineTo(a4J[0].width - a5y, j7), wt.lineTo(a5y, j7), wt.lineTo(0, j7 - a5y), wt.lineTo(0, a5y), wt
			.closePath()
	}
	this.dU = function() {
		jm = 4, a5t = a5u = li = 0, a4J = [], a46 = new Array(2), fontSize = new Array(2), (a5v = new Array(2))[0] = .3, a5v[1] = .7, a5w = new Array(4), canvas = document.createElement("canvas"), a5z = bb.lo + 2e3, this.resize()
	}, this.resize = function() {
		var a7, a1;
		for (j7 = Math.floor((u.v.r8() ? .0725 : .058) * at.pV), fontSize[0] = Math.floor(.85 * a5v[0] * j7), fontSize[1] = Math.floor(.85 * a5v[1] * j7), a46[0] = b6.pT.rV(1, fontSize[0]), a46[1] = b6.pT.rV(1, fontSize[1]), a7 = a5w.length -
			1; 0 <= a7; a7--) a5w[a7] = this.measureText(tk(a7) + "000", a46[0]);
		if (a5x = Math.floor(1 + .05 * j7), a5y = Math.floor(.2 * j7), 0 < a4J.length) {
			for (a7 = a4J.length - 1; 0 <= a7; a7--) a1 = this.measureText(a4J[a7].pA + "00", a46[1]), a4J[a7].width = a1 < a5w[a7] ? a5w[a7] : a1;
			a60()
		}
	}, this.iS = function() {
		0 !== jm && (4 === jm ? bb.lo > a5z && (jm = 0, 1 === a9.ye) && aM.z1(bO.v5.v6[bO.eE].name, 3, 1, 9) : (1 === jm ? (0 === a5t && (a60(), a5t = 1e-4), 1 <= (a5t += .002 * (bb.lo - li)) && (a5u = 0, jm = 2, a5t = 1), bb.dc = !0) : 2 ===
			jm ? ((a5u += (bb.lo - li) / 1e3) > a4J[0].ln || 1 < a5u && 1 < a4J.length) && (jm = 3) : 3 === jm && ((a5t -= .002 * (bb.lo - li)) <= 0 && (a5t = 0, a4J.shift(), jm = 0 < a4J.length ? 1 : 0), bb.dc = !0), li = bb.lo))
	}, this.measureText = function(pA, a46) {
		return tU.font = a46, Math.floor(tU.measureText(pA).width)
	}, this.ii = function(a63, a7) {
		this.z1(ac.zD[a63], a7, 1, 0 === a7 ? 3 : 7)
	}, this.z1 = function(pA, a64, a65, ln) {
		var a1;
		pA.length && (a1 = (a1 = this.measureText(pA + "00", a46[1])) < a5w[a64] ? a5w[a64] : a1, a4J.push({
			pA: pA,
			width: a1,
			a64: a64,
			a65: a65,
			ln: ln
		}), 0 === jm) && (a5t = 0, jm = 1, li = bb.lo)
	}, this.tT = function() {
		0 !== jm && 0 !== a5t && (a5t < 1 ? (tU.globalAlpha = a5t, a66(), tU.globalAlpha = 1) : a66())
	}
}

function cj() {
	var j7, canvas, wt, a6A, a6B, a6C, a6D, a5V, a6E, a6F, a6G, a6H, a55 = !1,
		a1T = (this.xC = !1, this.a1 = 0, new Array(2));

	function lI() {
		var a1 = aq.a1,
			kP = (a5V = !1, ws(wt, a1, j7), Math.floor(a1 / 2));
		1 === a6A ? (wt.fillStyle = b7.ms, wt.fillRect(kP, 0, kP, j7)) : -1 === a6A && (wt.fillStyle = b7.n8, wt.fillRect(0, 0, kP, j7)), wu(wt, a1, j7, 2);
		var kP = (kP = Math.floor(.25 * j7)) < 2 ? 2 : kP,
			a5E = (wt.fillStyle = b7.me, Math.floor((j7 - 4) * a6B[1] / a6C[1]));
		0 < a5E && wt.fillRect(2, j7 - 2 - a5E, kP, a5E), 0 < (a5E = Math.floor((j7 - 4) * a6B[0] / a6C[0])) && wt.fillRect(a1 - 2 - kP, j7 - 2 - a5E, kP, a5E);
		kP = (kP = Math.floor(j7 / 8)) < 2 ? 2 : kP, ww(wt, Math.floor(.4 * j7), 0, j7, kP, .5, !1), ww(wt, Math.floor(a1 - 1.4 * j7), 0, j7, kP, .5, !0), a5E = 1.1 * j7 / a1T[0].width;
		wt.imageSmoothingEnabled = !0, wt.setTransform(a5E, 0, 0, a5E, (a1 - a5E * a1T[0].width) / 2, -.05 * j7), wt.drawImage(a1T[+a55], 0, 0), wt.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a6I() {
		a6G = bb.jb(), a5V = !0, a6E = a6A = 0, a6D = [], aq.xC = !1, aJ.yl(247), a6B[0] = a6B[1] = 0, aJ.a2r(673)
	}

	function wp() {
		return aN.a4i(aJ.a4e()) ? aN.eh - j7 - bY.gap : b8.a4i(aJ.a4h()) ? b8.wp() - j7 - bY.gap : at.j7 - j7 - bg.a3T() * bY.gap
	}
	this.dV = function() {
		for (var a7 = 0; a7 < 2; a7++) a1T[a7] = b6.canvas.xR(aX.get(3), 8 - a7, b7.nf), a1T[a7] = b6.canvas.a1V(a1T[a7])
	}, this.dU = function() {
		a6G = -140, a6F = 0, a6H = -1, this.xC = !1, a5V = a55 = !1, a6B = [a6A = a6E = 0, 0], a6C = [1, 1], a6D = [], this.resize()
	}, this.resize = function() {
		j7 = aN.j7, this.a1 = 4 * j7, (canvas = document.createElement("canvas")).width = this.a1, canvas.height = j7, wt = canvas.getContext("2d", {
			alpha: !0
		}), lI()
	}, this.lH = function() {
		a5V && lI()
	}, this.gm = function(ef, eh) {
		var lz;
		return !!this.xC && !(ef < at.a1 - this.a1 - bY.gap || eh < (lz = wp()) || lz + j7 < eh || (a9.gi || b4.gv.o6(ef > at.a1 - bY.gap - this.a1 / 2 ? 1 : 0), 0))
	}, this.iS = function() {
		if (0 < a6F) 0 === --a6F && a6I();
		else if (this.xC) 180 == --a6E && 3 * a6B[0] < a6C[0] ? a6I() : a6B[0] >= a6C[0] ? a55 ? bN.yH.yZ() : bN.yH.yd() : a6B[1] >= a6C[1] ? a6F = 4 : a6E <= 0 && a6I();
		else if (function() {
				if (0 <= a6H) return 1;
				return
			}()) {
			a55 = ad.a6L(), aJ.z2(250, L(102, [ac.zD[a6H]]), 673, a6H, b7.mY, b7.mV, -1, !0), a6H = -1, aJ.a2r(257), aJ.a54(a55), this.xC = !0, a5V = !0, a6E = 360;
			for (var f0, dk = 0, a7 = ah.jf - 1; 0 <= a7; a7--) aY.zW(ah.jh[a7]) && (dk += ac.gM[ah.jh[a7]]);
			a55 ? a6C[0] = Math.max(bH.dl(3 * dk, 4), 1) : a9.ie ? 9 === a9.jy && 8 === bc.k4[bd.kt()] ? a6C[0] = Math.max(dk, 1) : (f0 = bH.dl(100 * bd.a2M(), a9.jO), f0 = bH.p0(200 - 2 * f0, 40, 100), f0 = bH.dl(f0 * dk, 100), a6C[0] = Math
				.max(f0, 1)) : a6C[0] = Math.max(bH.dl(3 * dk, 5), 1), a6C[1] = Math.max(dk - a6C[0], 1)
		}
	}, this.yf = function() {
		this.xC && a6B[0] < a6C[0] && a6I()
	}, this.p2 = function(player, a6O) {
		var a7;
		if (this.xC) {
			for (a7 = a6D.length - 1; 0 <= a7; a7--)
				if (a6D[a7] === player) return;
			var a6P = L(a6O ? 103 : 104, [ac.zD[player]]);
			aJ.z2(450, a6P, 257, player, a6O ? b7.mq : b7.n5, b7.mV, -1, !0), a6D.push(player), a5V = !0, a6P = a9.k0 ? a6C[0] : ac.gM[player], a6O ? a6B[0] += a6P : a6B[1] += a6P, player === a9.eI && (a6A = a6O ? 1 : -1)
		}
	}, this.tT = function() {
		var eh;
		this.xC && (eh = wp(), tU.drawImage(canvas, at.a1 - this.a1 - bY.gap, eh))
	}, this.p4 = function(player) {
		if (!a9.k0) {
			if (bb.jb() < a6G + 140) return !1;
			if (bb.jb() < 535) return !1
		}
		return 0 === a6E && !!b6.fu.gk(1) && !(!b6.fu.gl(player) || 10 <= jP[player] && !b6.fu.a2I(player, 9))
	}, this.oB = function(player) {
		a6H = player
	}
}

function cC() {
	var a1, ef, a6Q, canvas, wt, xC, hu, a2i, a46, a5V, a6R = 11 / 12;

	function a6T() {
		var a5c = Math.floor(hu * (a1 - 2 * a6Q)),
			a6W = 1 + Math.floor(.0625 * aN.j7),
			a6X = 1 + Math.floor(.3 * aN.j7),
			a6Y = Math.floor(.55 * aN.j7);
		wt.clearRect(0, 0, a1, aN.j7), wt.fillStyle = b7.mU, wt.fillRect(0, 0, a6Q, aN.j7), wt.fillRect(a6Q + a5c, 0, a1 - a6Q - a5c, aN.j7), wt.fillStyle = hu < 1 / 3 ? "rgba(" + Math.floor(3 * hu * 130) + ",130,0,0.85)" : hu < 2 / 3 ? "rgba(130," +
			(130 - Math.floor(3 * (hu - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (hu - 2 / 3) * 130) + ",0.85)", wt.fillRect(a6Q, 0, a5c, aN.j7), wt.fillStyle = b7.mY, wt.fillRect(0, 0, a1, 1), wt.fillRect(0, aN.j7 - 1, a1, 1), wt
			.fillRect(0, 0, 1, aN.j7), wt.fillRect(a6Q, 0, 1, aN.j7), wt.fillRect(a6Q + a5c, 0, 1, aN.j7), wt.fillRect(a1 - a6Q, 0, 1, aN.j7), wt.fillRect(a1 - 1, 0, 1, aN.j7), wt.fillRect(Math.floor(.25 * aN.j7) + a6X, Math.floor((aN.j7 - a6W) / 2),
				aN.j7 - 2 * a6X, a6W), wt.fillRect(Math.floor(a1 - 1.25 * aN.j7) + a6X, Math.floor((aN.j7 - a6W) / 2), aN.j7 - 2 * a6X - a6X % 2, a6W), wt.fillRect(Math.floor(a1 - 1.25 * aN.j7) + Math.floor((aN.j7 - a6W) / 2), a6X, a6W, aN.j7 - 2 *
				a6X - a6X % 2), a2i = b6.fu.ht(a9.eI, aN.h0()), wt.fillText(b6.zF.xw(a2i) + " (" + b6.zF.a2b(100 * hu, +(hu < .1)) + ")", Math.floor(.5 * a1), a6Y)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		hu = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => aN.a0i(arg1);

	function a6d(a15) {
		return !(1 < a15 && 1 === hu || (1 < a15 && a15 * hu - hu < 1 / 1024 ? a15 = (hu + 1 / 1024) / hu : a15 < 1 && hu - a15 * hu < 1 / 1024 && (a15 = (hu - 1 / 1024) / hu), hu = bH.p0(hu * a15, 1 / 1024, 1), a6T(), 0))
	}

	function a6e(kk) {
		return hu !== (hu = bH.p0((kk - ef - a6Q) / (a1 - 2 * a6Q), 1 / 1024, 1)) && (a6T(), !0)
	}
	this.eh = 0, this.gn = !1, this.dU = function() {
		xC = !a9.gu && !a9.gi, a5V = !1, hu = .5, a2i = 0, this.gn = !1, this.resize()
	}, this.resize = function() {
		u.v.r8() && at.a1 < .8 * at.j7 ? (this.j7 = Math.floor(.066 * at.pV), a1 = at.a1 - 4 * bY.gap - this.j7) : (a1 = Math.floor((u.v.r8() ? .65 : .389) * at.pV), a1 += 12 - a1 % 12, this.j7 = Math.floor(a1 / 12)), a6Q = Math.floor(3 * this
			.j7 / 2), a46 = b6.pT.rV(1, Math.floor(.5 * this.j7)), (canvas = document.createElement("canvas")).width = a1, canvas.height = this.j7, (wt = canvas.getContext("2d", {
			alpha: !0
		})).font = a46, b6.pT.textBaseline(wt, 1), b6.pT.textAlign(wt, 1), this.a6S(), a6T()
	}, this.a6S = function() {
		ef = u.v.r8() && at.a1 < .8 * at.j7 ? this.j7 + 3 * bY.gap : Math.floor((at.a1 - a1) / 2), this.eh = at.j7 - this.j7 - bg.a3T() * bY.gap
	}, this.lH = function() {
		a5V && (a5V = !1, a6T())
	}, this.xC = function() {
		return !(!xC || aI.gj && ef < Math.floor(bY.gap + 5.5 * this.j7))
	}, this.a4i = function(a6Z) {
		return !!this.xC() && ef + a1 > at.a1 - a6Z - bY.gap
	}, this.a2p = function() {
		xC = !a9.gi
	}, this.a6I = function() {
		xC = !1
	}, this.h0 = function() {
		return bH.p0(Math.floor(1024 * hu + .5) - 1, 0, 1023)
	}, this.a0f = function(kk, kl) {
		return this.xC() && ef < kk && kk < ef + a1 && kl > this.eh
	}, this.gm = function(kk, kl) {
		return !!this.xC() && !!aN.a0f(kk, kl) && (aO.m3 = !1, function(rM, kk, kl) {
			if (function(kk, kl) {
					return ef < kk && kk < ef + a6Q && kl > aN.eh
				}(kk, kl)) return a6d(a6R);
			if (function(kk, kl) {
					return ef + a1 - a6Q < kk && kk < ef + a1 && kl > aN.eh
				}(kk, kl)) return a6d(1 / a6R);
			return rM.gn = !0, a6e(kk)
		}(this, kk, kl) && (bb.dc = !0), !0)
	}, this.a0i = function(mA) {
		0 !== a9.ye && this.xC() && a6d(mA) && (bb.dc = !0)
	}, this.a0E = function(deltaY) {
		var mA;
		return !(0 === deltaY || !this.xC()) && a6d(mA = 0 < deltaY ? (mA = 400 / (400 + deltaY)) < a6R ? a6R : mA : 1 / a6R < (mA = (400 - deltaY) / 400) ? 1 / a6R : mA)
	}, this.a0B = function(kk) {
		return !!this.gn && a6e(kk)
	}, this.a0b = function() {
		this.gn = !1
	}, this.iS = function() {
		this.xC() && a2i !== b6.fu.ht(a9.eI, this.h0()) && (a5V = !0)
	}, this.tT = function() {
		this.xC() && tU.drawImage(canvas, ef, this.eh)
	}
}

function ct() {
	var canvas, wt, a6f, font, a6g = 0,
		a6h = !1,
		a6i = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		a6j = 5;

	function a6p() {
		if (a6h) {
			var a7, eY = a6i.length,
				a6Y = Math.floor(.5 * a6f.j7),
				j7 = eY * a6Y,
				ef = Math.floor(Math.floor(a6f.ef) + .3 * a6f.a1 - .5),
				eh = Math.floor(Math.floor(a6f.eh) - j7),
				a1 = Math.floor(.4 * a6f.a1 + 2.5);
			for (tU.fillStyle = b7.mU, tU.fillRect(ef, eh, a1, j7), tU.fillStyle = b7.mx, tU.fillRect(ef, eh + a6j * a6Y, a1, a6Y), tU.fillStyle = b7.mY, tU.fillRect(ef, eh, 2, j7), tU.fillRect(ef, eh, a1, 2), tU.fillRect(ef + a1 - 2, eh, 2, j7),
				a7 = 1; a7 < eY; a7++) tU.fillRect(ef, eh + a7 * a6Y, a1, 2);
			for (tU.fillStyle = b7.mY, b6.pT.textAlign(tU, 1), b6.pT.textBaseline(tU, 1), tU.font = b6.pT.rV(0, .6 * a6Y), ef += .5 * a1, a7 = 0; a7 < eY; a7++) tU.fillText(a6x(a7), ef, eh + (a7 + .6) * a6Y)
		}
		tU.drawImage(canvas, Math.floor(a6f.ef), Math.floor(a6f.eh))
	}

	function lI(rM) {
		var ef, ly, lz, a6Y;
		wt.clearRect(0, 0, Math.floor(a6f.a1), Math.floor(a6f.j7)), wt.fillStyle = b7.mU, wt.fillRect(0, 0, Math.floor(a6f.a1), Math.floor(a6f.j7)), a9.m1 && (wt.fillStyle = b7.mx, wt.fillRect(0, 0, Math.floor(.3 * a6f.a1), Math.floor(a6f.j7))), wt
			.fillStyle = b7.mY, wt.fillText("Hide UI", .15 * a6f.a1, .5 * a6f.j7), wt.fillRect(Math.floor(.3 * a6f.a1 - .5), 0, 2, Math.floor(a6f.j7)), ef = .5 * a6f.a1, wt.fillText("Replay Speed", ef, .31 * a6f.j7), wt.fillText(a6x(a6j), ef, .69 *
				a6f.j7), wt.fillRect(Math.floor(.7 * a6f.a1 - .5), 0, 2, Math.floor(a6f.j7)), rM.a3L ? (ef = Math.floor(.02 * a6f.a1), rM = Math.floor(.025 * a6f.a1), ly = Math.floor(.85 * a6f.a1 - ef - .5 * rM), lz = Math.floor(.25 * a6f.j7), a6Y =
				Math.floor(a6f.j7) - 2 * lz, wt.fillRect(ly, lz, ef, a6Y), wt.fillRect(ly + ef + rM, lz, ef, a6Y)) : function() {
				var a1 = Math.floor(.46 * a6f.j7),
					j7 = Math.floor(.23 * a6f.j7),
					ef = Math.floor(.85 * a6f.a1 - .5 * a1 + a1 / 12),
					eh = Math.floor(.5 * a6f.j7 - j7);
				wt.beginPath(), wt.moveTo(ef, eh), wt.lineTo(ef + a1, eh + j7), wt.lineTo(ef, eh + (j7 << 1)), wt.fill()
			}(), wt.fillRect(0, 0, Math.floor(a6f.a1), 2), wt.fillRect(0, 0, 2, Math.floor(a6f.j7)), wt.fillRect(0, Math.floor(a6f.j7) - 2, Math.floor(a6f.a1), 2), wt.fillRect(Math.floor(a6f.a1 - 2), 0, 2, Math.floor(a6f.j7))
	}

	function a6x(a7) {
		return 5 === a7 ? "Normal" : "" + a6i[a7]
	}
	this.a3L = !1, this.dU = function() {
		a9.gi && (a6j = 5, this.a3L = !1, a6h = !1, a6f = new q6([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.a6k = function() {
		return a6i[a6j]
	}, this.wp = function() {
		return a6f.eh
	}, this.a4i = function(a6Z) {
		return !!a9.gi && a6f.ef + a6f.a1 > at.a1 - a6Z - bY.gap
	}, this.resize = function() {
		a9.gi && (a6f.resize(), a6f.eh -= (bg.a3T() - 1) * bY.gap, font = b6.pT.rV(0, .3 * a6f.j7), (canvas = document.createElement("canvas")).width = Math.floor(a6f.a1), canvas.height = Math.floor(a6f.j7), (wt = canvas.getContext("2d", {
			alpha: !0
		})).font = font, b6.pT.textAlign(wt, 1), b6.pT.textBaseline(wt, 1), lI(this))
	}, this.a0l = function(a6l) {
		0 === a9.ye || n.xC() || a6l !== a9.m1 && (a9.m1 = a6l, bd.resize(), bb.dc = !0, a9.gi) && (a6g = bb.lo + 2e3, lI(this))
	}, this.gm = function(ef, eh) {
		if (!a9.gi) return !1;
		if (ef < a6f.ef || eh < a6f.eh || ef > a6f.ef + a6f.a1) return a6h && function(rM, ef, eh) {
			var eY = a6i.length,
				a6Y = Math.floor(.5 * a6f.j7),
				j7 = eY * a6Y,
				ly = Math.floor(Math.floor(a6f.ef) + .3 * a6f.a1 - .5),
				j7 = Math.floor(Math.floor(a6f.eh) - j7),
				a1 = Math.floor(.4 * a6f.a1 + 2.5);
			return a6h = !1, bb.dc = !0, ef < ly || ly + a1 < ef || eh < j7 || (a6j = a6o(0, Math.floor((eh - j7) / a6Y), eY - 1), lI(rM)), !0
		}(this, ef, eh);
		if ((ef -= a6f.ef) < .3 * a6f.a1) a6h = !1, this.a0l(!a9.m1);
		else {
			if (ef < .7 * a6f.a1) return a6h = !a6h, bb.dc = !0;
			this.a0n(!1)
		}
		return !0
	}, this.a0n = function(a6n) {
		2 === a9.ye ? (this.a0l(!1), n.o(3)) : (a6h = !1, this.a3L = !this.a3L, this.a3L ? (aI.gj && aI.a0m(), u.v.setState(1)) : a6n || aI.a4C(), bb.dc = !0, lI(this))
	}, this.a0o = function() {
		this.a3L = !1, aI.a4C(), bb.dc = !0, lI(this)
	}, this.a0U = function(ef, eh) {
		return !!a9.m1 && (0 <= aI.gm(ef, eh) || (a9.gi ? ((bb.lo > a6g || !this.gm(ef, eh)) && aO.gm(ef, eh), bb.dc = !0, a6g = bb.lo + 2e3) : aO.gm(ef, eh)), !0)
	}, this.iS = function() {
		a9.gi && a9.m1 && bb.lo > a6g - 1e3 && bb.lo < a6g && (bb.dc = !0)
	}, this.ym = function() {
		a9.gi && (this.a3L = !1, bb.dc = !0, lI(this))
	}, this.tT = function() {
		if (a9.gi) {
			if (a9.m1) {
				if (bb.lo > a6g) return;
				if (bb.lo > a6g - 1e3) return tU.globalAlpha = a6o(0, (1e3 - (bb.lo - (a6g - 1e3))) / 1e3, 1), a6p(), void(tU.globalAlpha = 1)
			}
			a6p()
		}
	}
}

function cD() {
	var a6y, a6z, a1, ef, eh, a70, a71;
	this.dU = function() {
		a6y = new Array(2), a6z = new Array(2), this.m3 = !1, a71 = a70 = hx = hv = 0, hw = 1, this.resize()
	}, this.resize = function() {
		a1 = (a1 = Math.floor((u.v.r8() ? .072 : .0502) * at.pV)) < 8 ? 8 : a1;
		for (var a7 = 1; 0 <= a7; a7--) a6y[a7] = document.createElement("canvas"), a6y[a7].width = a1, a6y[a7].height = a1, a6z[a7] = a6y[a7].getContext("2d", {
			alpha: !0
		});
		this.a6S(),
			function() {
				for (var a7G = Math.floor(1 + a1 / 20), a7 = 1; 0 <= a7; a7--) a6z[a7].clearRect(0, 0, a1, a1), a6z[a7].fillStyle = b7.mR, a6z[a7].beginPath(), a6z[a7].arc(a1 / 2, a1 / 2, a1 / 2 - a7G, 0, 2 * Math.PI), a6z[a7].fill(), a6z[a7]
					.lineWidth = a7G, a6z[a7].fillStyle = b7.mY, a6z[a7].strokeStyle = b7.mY, a6z[a7].beginPath(), a6z[a7].arc(a1 / 2, a1 / 2, a1 / 2 - a7G, 0, 2 * Math.PI), a6z[a7].stroke(), ww(a6z[a7], 0, 0, a1, a7G, .3, 0 === a7)
			}()
	}, this.wo = function() {
		return -hv / hw
	}, this.wp = function() {
		return -hx / hw
	}, this.mD = function(a75, hd) {
		hv = hw * a75 - hd
	}, this.mE = function(a76, he) {
		hx = hw * a76 - he
	}, this.gm = function(a74, a4j) {
		return a9.m1 || ! function(a74, a4j) {
			return Math.pow(a74 - (ef + a1 / 2), 2) + Math.pow(a4j - (eh + a1 / 2), 2) < a1 * a1 / 4 || Math.pow(a74 - (ef + a1 / 2), 2) + Math.pow(a4j - (eh + 2 * a1), 2) < a1 * a1 / 4
		}(a74, a4j) || bf.dp.data[8].value ? (aD.mG() && (this.m3 = !0, a70 = a74, a71 = a4j), !1) : a4j < eh + 1.25 * a1 ? this.a0E(Math.floor(at.a1 / 2), Math.floor(at.j7 / 2), -200) : this.a0E(Math.floor(at.a1 / 2), Math.floor(at.j7 / 2),
			200)
	}, this.a0B = function(a74, a4j) {
		var a77, a78, hg, hj;
		return !aD.mG() || (a77 = hv, a78 = hx, hv += hg = a70 - a74, hx += hj = a71 - a4j, ab.a0B(hg, hj), this.a79(), a70 = a74, a71 = a4j, a77 !== hv) || a78 !== hx
	}, this.a0E = function(kk, kl, deltaY) {
		var mA;
		if (aD.mG()) {
			if (0 < deltaY) mA = (mA = 500 / (500 + deltaY)) < .5 ? .5 : mA;
			else {
				if (!(deltaY < 0)) return !1;
				mA = 2 < (mA = (500 - deltaY) / 500) ? 2 : mA
			}
			this.a7A(kk, kl, mA), bb.dc = !0
		}
		return !0
	}, this.a7A = function(ef, eh, eC) {
		var a15;
		eC = a15 = (a15 = 1024 < (a15 = eC) * hw ? 1024 / hw : a15) * hw < .125 ? .125 / hw : a15, ab.zoom(eC, ef, eh),
			function(a15, kk, kl) {
				hw *= a15, hv = (hv + kk) * a15 - kk, hx = (hx + kl) * a15 - kl, aO.a79()
			}(eC, ef, eh)
	}, this.a79 = function() {
		var a7D = at.a1 / 16,
			hN = 0,
			a7E = at.j7 / 16,
			hO = 0;
		hv < -at.a1 + a7D && (hN = -at.a1 + a7D - hv), hv > hw * bO.ej - a7D && (hN = hw * bO.ej - a7D - hv), hx < -at.j7 + a7E && (hO = -at.j7 + a7E - hx), hx > hw * bO.ek - a7E && (hO = hw * bO.ek - a7E - hx), hv += hN, hx += hO, bW.mF(), ab
			.a7F(hN, hO)
	}, this.a6S = function() {
		ef = at.a1 - a1 - bY.gap, eh = Math.floor(at.j7 / 2 - 1.25 * a1)
	}, this.tT = function() {
		bf.dp.data[8].value || (tU.drawImage(a6y[0], ef, eh), tU.drawImage(a6y[1], ef, Math.floor(eh + 3 * a1 / 2)))
	}
}

function cE() {
	var g, a7H, a7I, a7J, gap, a7K, a7L, a7M, a7N, a7O, a46, a7P, gd, a7Q, a5c, a7R, a7S, a7T;

	function a7X() {
		a7J = Math.floor(.2 * (u.v.r8() ? .07 : .035) * at.pV), a7J = a4g(u.v.r8() ? 3 : 1, a7J);
		var a7a = at.a1 / (g.length + gap);
		a7J = a7J < a7a ? a7a : a7J, a5c = Math.floor((1 - gap) * a7J), a7H = 0, a7b()
	}

	function a7b() {
		a7H = (a7H = a7H < -20 ? -20 : a7H) > (g.length - 15) * a7J ? (g.length - 15) * a7J : a7H, a7L = Math.floor(a7H / a7J), a7M = (a7M = a7L + Math.floor(at.a1 / a7J)) > g.length - 1 ? g.length - 1 : a7M, a7L = (a7L = a7M < a7L ? a7M : a7L) < 0 ?
			0 : a7L;
		var kP = a7M;
		a7K = a7I / g[kP];
		for (var a7 = a7M - 1; a7L <= a7; a7--) g[a7] > g[kP] && (kP = a7, a7K = a7I / Math.pow(g[a7], a7Q))
	}

	function a7e(ef) {
		ef = Math.floor((a7H + at.a1 - ef - gap * a7J) / a7J);
		return (ef = ef < -1 ? -1 : -1 === ef ? 0 : ef > g.length - 1 ? -1 : ef) !== a7N && (a7N = ef, -1 === a7R && 0 === a7N && aP.a7U && (a7R = setInterval(a7f, 100)), 1)
	}

	function a7g(a7) {
		var a5S = Math.floor(a7K * Math.pow(g[a7], a7Q));
		tU.fillRect(a7H + at.a1 - (a7 + 1) * a7J, at.j7 - a5S, a5c, a5S)
	}

	function a7f() {
		var g6;
		0 !== (a7N = 8 === aW.zo() ? -1 : a7N) ? (a7S = (new Date).getTime(), clearInterval(a7R), a7R = -1) : (g6 = g[1] / 864e3, -1 !== a7S && (g6 += ((new Date).getTime() - a7S) * g[1] / 864e5, a7S = -1), 0 < g6 && (g[0] += Math.floor(g6), bb
			.dc = !0))
	}
	this.a7U = !1, this.dU = function() {
		a7S = a7R = -1, a7N = -(a7Q = 1), this.a7V = !1, gd = 0, a7P = new Date, a7H = 0, gap = .3, (a7T = []).push({
			g1: "Plateau A",
			eY: 0,
			e: 57
		}), a7T.push({
			g1: "Max A",
			eY: 1,
			e: 1
		}), a7T.push({
			g1: "Black Friday",
			eY: 15,
			e: 15
		}), a7T.push({
			g1: "Max B",
			eY: 19,
			e: 19
		}), a7T.push({
			g1: "Max C",
			eY: 44,
			e: 44
		}), a7T.push({
			g1: "First Android Version",
			eY: 58,
			e: 58
		}), a7T.push({
			g1: "Max D",
			eY: 67,
			e: 67
		}), a7T.push({
			g1: "The iFrame Explosion",
			eY: 98,
			e: 99
		}), a7T.push({
			g1: "The 155-Day Uptrend",
			eY: 58,
			e: 213
		}), a7T.push({
			g1: "Max E",
			eY: 213,
			e: 213
		}), a7T.push({
			g1: "Plateau B",
			eY: 214,
			e: 259
		}), a7T.push({
			g1: "Turbulent Times",
			eY: 260,
			e: 344
		}), a7T.push({
			g1: "Max F",
			eY: 262,
			e: 262
		}), a7T.push({
			g1: "Max G",
			eY: 282,
			e: 282
		}), a7T.push({
			g1: "Max H",
			eY: 333,
			e: 333
		}), a7T.push({
			g1: "The 19-Day Downtrend",
			eY: 283,
			e: 301
		}), a7T.push({
			g1: "Plateau C",
			eY: 345,
			e: 385
		}), a7T.push({
			g1: "The Alliance Ascent",
			eY: 386,
			e: 395
		}), a7T.push({
			g1: "Max I",
			eY: 395,
			e: 395
		}), a7T.push({
			g1: "First iOS Version",
			eY: 411,
			e: 411
		}), a7T.push({
			g1: "Plateau D",
			eY: 396,
			e: 453
		}), a7T.push({
			g1: "The TikTok Revolution",
			eY: 454,
			e: 470
		}), a7T.push({
			g1: "Max J",
			eY: 456,
			e: 456
		}), a7T.push({
			g1: "Max K",
			eY: 472,
			e: 472
		}), a7T.push({
			g1: "Max L",
			eY: 478,
			e: 478
		}), a7T.push({
			g1: "YT Drew",
			eY: 471,
			e: 485
		}), a7T.push({
			g1: "Plateau E",
			eY: 485,
			e: 600
		}), a7T.push({
			g1: "Uptrend A",
			eY: 600,
			e: 613
		}), a7T.push({
			g1: "Max M",
			eY: 613,
			e: 613
		}), a7T.push({
			g1: "Downtrend A",
			eY: 614,
			e: 635
		}), a7T.push({
			g1: "Plateau F",
			eY: 636,
			e: 737
		}), a7T.push({
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
		a7I = Math.floor(.15 * at.j7), a7O = (a7O = Math.floor((u.v.r8() ? .018 : .0137) * at.pV)) < 2 ? 2 : a7O, a46 = b6.pT.rV(1, a7O), a7X()
	}, this.a7Y = function(a7Z) {
		var a7;
		for (this.a7U = !0, a7 = 0; a7 < a7Z.length; a7++) g.unshift(a7Z[a7]);
		a7X(), bb.dc = !0
	}, this.a7c = function() {
		a7b()
	}, this.a0B = function(ef, eh) {
		eh > at.j7 - .6 * a7I ? this.a7V ? ef !== gd && (a7H += ef - gd, gd = ef, a7b(), a7e(ef), this.a7V = -1 !== a7N, bb.dc = !0) : a7e(ef) && (bb.dc = !0) : this.qV()
	}, this.qV = function() {
		-1 !== a7N && (this.a7V = !1, a7N = -1, bb.dc = !0)
	}, this.a0E = function(ef, deltaY) {
		-1 !== a7N && (a7H += Math.floor(deltaY), a7b(), a7e(ef), bb.dc = !0)
	}, this.gm = function(ef, eh) {
		this.a0B(ef, eh), -1 !== a7N && (gd = ef, this.a7V = !0)
	}, this.a0a = function() {
		-1 !== a7N && (this.a7V = !1)
	}, this.tT = function() {
		tU.fillStyle = b7.mb;
		for (var a7i, month, dk, s0, a7l, a7m, lz, a7n, a7o, a7 = a7M; a7L <= a7; a7--) a7g(a7);
		this.a7U && 0 === a7L && (tU.fillStyle = b7.n8, a7g(0)), -1 !== a7N && (tU.fillStyle = b7.ma, a7g(a7N)), -1 !== a7N && (tU.font = a46, b6.pT.textBaseline(tU, 2), (dk = new Date).setTime(a7P.getTime() - 1e3 * a7N * 60 * 60 * 24), month =
			"month", a7i = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(dk), a7i = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(dk)), a7i = a7i + ", " + dk.getUTCDate() + " " + month + " " + dk.getFullYear(), month = 1 === g[a7N] ? L(105) : L(106), month = b6.zF.xw(g[a7N]) + " " + month, dk = Math.floor(tU.measureText(a7i).width), s0 = Math
			.floor(tU.measureText(month).width), a7l = Math.floor(.5 * (dk + a7O)), a7m = (a7m = a7H + at.a1 - (a7N + 1) * a7J) < a7l ? a7l : a7m > at.a1 - a7l ? at.a1 - a7l : a7m, lz = at.j7 - Math.floor(a7K * Math.pow(g[a7N], a7Q)), a7n =
			Math.floor(1.1 * a7O), a7o = lz > at.j7 - a7n ? at.j7 - a7n : lz, tU.fillStyle = b7.mV, tU.fillRect(at.a1 - s0 - a7O, a7o - a7n, s0 + a7O, a7n), tU.fillRect(a7m - a7l, at.j7 - a7n, dk + a7O, a7n), tU.fillStyle = b7.mY, b6.pT
			.textAlign(tU, 2), tU.fillText(month, Math.floor(at.a1 - .5 * a7O), a7o),
			function(lz, a7n) {
				for (var rz, kR = -1, e0 = g.length - a7N - 1, a7 = a7T.length - 1; 0 <= a7; a7--) e0 >= a7T[a7].eY && e0 <= a7T[a7].e && (-1 === kR || a7T[a7].e - a7T[a7].eY < a7T[kR].e - a7T[kR].eY) && (kR = a7); - 1 !== kR && (rz = Math
					.floor(tU.measureText(a7T[kR].g1).width), tU.fillStyle = b7.mV, tU.fillRect(at.a1 - rz - a7O, lz, rz + a7O, a7n), tU.fillStyle = b7.mY, tU.fillText(a7T[kR].g1, Math.floor(at.a1 - .5 * a7O), lz + a7n))
			}(a7o - 2 * a7n, a7n), b6.pT.textAlign(tU, 1), tU.fillText(a7i, a7m, at.j7), tU.strokeStyle = b7.mc, tU.lineWidth = 1, tU.beginPath(), tU.moveTo(0, lz), tU.lineTo(at.a1, lz), tU.closePath(), tU.stroke())
	}
}

function cF() {
	var a46, a1, eh, a7q, a7r, canvas, wt, a5V, a26, a7s, a7t, a7u, a7v;
	this.ef = 0, this.j7 = 0, this.dU = function() {
		a7r = a9.a2x, a7t = "rgba(0,100,0,0.8)", a7u = "rgba(150,0,0,0.8)", a5V = !(a7s = !0), a26 = ac.ga[a9.eI], this.resize()
	}, this.resize = function() {
		a1 = Math.floor((u.v.r8() ? .305 : .24) * at.pV), this.j7 = Math.floor(.5 + .13 * a1), a1 = Math.floor(6 * this.j7), a46 = b6.pT.rV(1, Math.floor(.8 * this.j7)), a7v = Math.floor(.5 * this.j7), bO.vB.font = a46, eh = bY.gap, a7q = Math
			.floor(1 + .13 * this.j7), (canvas = document.createElement("canvas")).width = a1, canvas.height = this.j7, (wt = canvas.getContext("2d", {
				alpha: !0
			})).font = a46, b6.pT.textBaseline(wt, 1), b6.pT.textAlign(wt, 1), this.a7w()
	}, this.a5s = function() {
		return u.v.r8() && at.a1 < 1.2 * at.j7
	}, this.a6S = function() {
		this.a5s() ? this.ef = at.a1 - a1 - bY.gap : this.ef = Math.floor(aR.a7x() + (at.a1 - aR.a7x() - aS.a1 - a1) / 2 - .5 * bY.gap)
	}, this.lH = function() {
		a5V && (a5V = !1, this.a7w())
	}, this.a7w = function() {
		wt.clearRect(0, 0, a1, this.j7), wt.fillStyle = a7s ? a7t : a7u, wt.fillRect(0, 0, a1, this.j7), wt.fillStyle = b7.ma, this.a7y(), this.a7z(), wt.fillStyle = ac.ga[a9.eI] >= aa.jK(a9.eI) ? b7.n5 : b7.mY, wt.fillText(b6.zF.xw(a26), Math
			.floor(a1 / 2), a7v), wt.fillStyle = b7.mY, wt.fillRect(0, 0, a1, 1), wt.fillRect(0, 0, 1, this.j7), wt.fillRect(0, this.j7 - 1, a1, 1), wt.fillRect(a1 - 1, 0, 1, this.j7)
	}, this.a7y = function() {
		var et = bb.jb() % 100,
			et = (et = 9 - bH.dl(et -= et % 10, 10), Math.floor(et * (this.j7 - a7q) / 9));
		wt.fillRect(0, et, a7q, this.j7 - et), wt.fillRect(a1 - a7q, et, a7q, this.j7 - et)
	}, this.a7z = function() {
		wt.fillRect(a7q, this.j7 - a7q, Math.floor((a1 - 2 * a7q) * ac.ga[a9.eI] / a7r), a7q)
	}, this.iS = function() {
		var g6 = a9.eI;
		b6.fu.gl(g6) && (g6 = ac.ga[g6] - ac.a25[g6], a26 !== g6 ? (a7r = a4g(g6, a7r), a7s = a26 < g6 && 10 <= g6, a26 = g6, a5V = !0) : bb.jb() % 10 == 9 && (a5V = !0))
	}, this.tT = function() {
		0 === ac.lV[a9.eI] || a9.gu || 2 === ac.a1z[a9.eI] || tU.drawImage(canvas, this.ef, eh)
	}
}

function cG() {
	var a80, a81, a82, a83, a84, a85, a86, a87, a88, a89, a8A, a8B, a8C, a8D, a8E, a8F, a8G, a8H, a8I, a8J, a8K, a8L, position, a8M, a8N, a8O, a8P, a8Q = 1,
		a8R = 1,
		a8S = "";
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

	function a8U() {
		a86.clearRect(0, 0, a80, a68),
			a86.fillStyle = b7.nO,
			a86.fillRect(0, 0, a80, a8B),
			a86.fillStyle = b7.mU,
			a86.fillRect(0, a8B, a80, a68 - a8B);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			jP[a9.eI]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) a8L = -1;
		if (__fx.leaderboardFilter.enabled && a8L >= __fx.leaderboardFilter.filteredLeaderboard.length) a8L = -1;
		playerPos >= position && a8W(playerPos - position, b7.mx),
			0 !== jP[a9.eI] && 0 === position && a8W(0, b7.nT),
			-1 !== a8L && a8W(a8L, b7.mZ),
			a86.fillStyle = b7.mU,
			//console.log("drawing", a8L),
			a86.clearRect(0, a68 - __fx.leaderboardFilter.tabBarOffset, a80, __fx.leaderboardFilter.tabBarOffset);
		a86.fillRect(0, a68 - __fx.leaderboardFilter.tabBarOffset, a80, __fx.leaderboardFilter.tabBarOffset);
		a86.fillStyle = b7.mY,
			a86.fillRect(0, a8B, a80, 1),
			a86.fillRect(0, a68 - __fx.leaderboardFilter.tabBarOffset, a80, 1),
			__fx.leaderboardFilter.drawTabs(a86, a80, a68 - __fx.leaderboardFilter.tabBarOffset, b7.mx),
			a86.fillRect(0, 0, a80, bY.xf),
			a86.fillRect(0, 0, bY.xf, a68),
			a86.fillRect(a80 - bY.xf, 0, bY.xf, a68),
			a86.fillRect(0, a68 - bY.xf, a80, bY.xf), a86.font = a81, b6.pT.textBaseline(a86, 1), b6.pT.textAlign(a86, 1), a86.fillText(a8S, Math.floor((a80 + a8B - 22) / 2), Math.floor(a89 + a82 / 2));
		__fx.playerList.drawButton(a86, 12, 12, a8B - 22);
		var er, g7 = playerPos < position + a84 - 1 ? 1 : 2;

		if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - a84)
				position = (result.length > a84 ? result.length : a84) - a84;
			//if (position >= result.length) position = result.length - 1;
			for (a86.font = a83, b6.pT.textAlign(a86, 0), er = a84 - g7; 0 <= er; er--) {
				const pos = result[er + position];
				if (pos !== undefined)
					a8X(kw[pos]), a8Y(er, pos, kw[pos]);
			}
			for (b6.pT.textAlign(a86, 2), er = a84 - g7; 0 <= er; er--) {
				const pos = result[er + position];
				if (pos !== undefined)
					a8X(kw[pos]), a8Z(er, kw[pos]);
			}
		} else {
			for (a86.font = a83, b6.pT.textAlign(a86, 0), er = a84 - g7; 0 <= er; er--)
				a8X(kw[er + position]), a8Y(er, er + position, kw[er + position]);
			for (b6.pT.textAlign(a86, 2), er = a84 - g7; 0 <= er; er--)
				a8X(kw[er + position]), a8Z(er, kw[er + position]);
		}
		2 == g7 && (a8X(a9.eI), b6.pT.textAlign(a86, 0), a8Y(a84 - 1, jP[a9.eI], a9.eI), b6.pT.textAlign(a86, 2), a8Z(a84 - 1, a9.eI)), 0 === position && (g7 = .7 * a8C / aX.get(4).height, a86.setTransform(g7, 0, 0, g7, Math.floor(a8D + .58 * a8C +
			.5 * g7 * aX.get(4).width), Math.floor(a89 + a82 + .4 * a8C)), a86.imageSmoothingEnabled = !0, a86.drawImage(aX.get(4), -Math.floor(aX.get(4).width / 2), -Math.floor(aX.get(4).height / 2)), a86.setTransform(1, 0, 0, 1, 0, 0))
	}

	function a8X(player) {
		a9.ie && (a86.fillStyle = bc.a8b[bc.k4[bc.eW[player]]])
	}

	function a8W(a7, a8c) {
		a86.fillStyle = a8c, a7 = a84 - 1 < a7 ? a84 - 1 : a7;
		a8c = Math.floor((a7 === a84 - 1 ? 2 : 0 === a7 ? 1.15 : 1) * a8C), a8c = a7 === a84 - 2 ? Math.floor(a8B + 9.15 * a8C) - Math.floor(a8B + 8.15 * a8C) : a8c;
		a86.fillRect(0, Math.floor(a8B + (a7 + (0 === a7 ? 0 : .15)) * a8C), a80, a8c)
	}

	function a8Y(a8e, qx, a7) {
		a86.fillText(a8H[qx], a8D, Math.floor(a89 + a82 + (a8e + .5) * a8C)), 1 === ac.a1z[a7] && (a86.font = "italic " + a83);
		qx = Math.floor(a89 + a82 + (a8e + .5) * a8C);
		a86.fillText(ac.zD[a7], a8E, qx), 0 !== ac.a1z[a7] && (a86.font = a83), a7 < a9.je && 2 !== ac.a1z[a7] || a86.fillRect(a8E, qx + .35 * a8Q, a8G[a7], Math.max(1, .1 * a8Q))
	}

	function a8Z(a8e, a7) {
		a86.fillText(ac.gM[a7], a8F, Math.floor(a89 + a82 + (a8e + .5) * a8C))
	}

	function a8n(eh) {
		return (eh -= bY.gap + a8B) < 0 ? Math.floor(eh / a8C) - 1 : eh < (a84 - 1) * a8C ? Math.floor(eh / a8C) : eh < a68 - a8B ? a84 - 1 : (eh -= a68 - a8B, a84 + Math.floor(eh / a8C))
	}

	function xe(ef, eh) {
		return ef >= bY.gap && ef < bY.gap + a80 && eh >= bY.gap && eh < bY.gap + a68
	}
	this.dU = function() {
			var a7;
			for (a8N = !1, a8P = a8O = a8M = 0, a8L = -1, a84 = u.v.r8() ? 6 : 10, a8R = (position = 0) === (a8R = bf.dp.data[11].value) ? 10 : 1 === a8R ? 5 : 1, a8K = !1, a8I = new Uint16Array(a84 + 1), a8J = new Uint32Array(a84 + 1), a88 = a9.eV,
				kw = new Uint16Array(a88), jP = new Uint16Array(a88), a7 = a88 - 1; 0 <= a7; a7--) kw[a7] = a7, jP[a7] = a7;
			this.resize(!0), a8G = new Uint16Array(a9.eV);
			var a8T = Math.floor(a80 - a8E - a8D - a87);
			for (a8H = new Array(a9.eV), a86.font = a83, a7 = a9.eV - 1; 0 <= a7; a7--) a8H[a7] = a7 + 1 + ".", ac.zD[a7] = b6.wt.a1f(ac.a4v[a7], a83, a8T), a8G[a7] = Math.floor(a86.measureText(ac.zD[a7]).width);
			a8U()
		}, this.resize = function(dU) {
			if (a68 = u.v.r8() ? (a80 = Math.floor(.335 * at.pV), Math.floor(a84 * a80 / 8)) : (a80 = Math.floor(.27 * at.pV), Math.floor(a84 * a80 / 10)), a80 = Math.floor(.97 * a80), (a85 = document.createElement("canvas")).width = a80, a85
				.height = a68, a86 = a85.getContext("2d", {
					alpha: !0
				}), a89 = .025 * a80, a82 = .16 * a80, a8A = 0 * a80, a8B = Math.floor(.45 * a89 + a82), a8C = (a68 - a82 - 2 * a89 - a8A) / a84,
				a85.height = a68 += a8C, __fx.leaderboardFilter.tabBarOffset = Math.floor(a8C * 1.3), __fx.leaderboardFilter.verticalClickThreshold = a68 - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = a80,
				a81 = b6.pT.rV(1, Math.floor(.55 * a82)), a8Q = Math.floor((u.v.r8() ? .67 : .72) * a8C), a83 = b6.pT.rV(0, a8Q), a86.font = a83, a8D = Math.floor(.04 * a80), a8E = Math.floor((u.v.r8() ? .195 : .18) * a80), a87 = Math.floor(a86
					.measureText("00920600").width), a86.font = a81, a8F = a80 - a8D, !dU) {
				a86.font = a83;
				for (var a7 = a9.eV - 1; 0 <= a7; a7--) a8G[a7] = Math.floor(a86.measureText(ac.zD[a7]).width);
				a8U()
			}
			a8S = b6.wt.a1f(L(107), a81, .96 * a80)
		}, this.a7x = function() {
			return a80
		}, this.lH = function(bo, a8V) {
			(a8V || a8K && (bo || bb.jb() % a8R == 0)) && (a8K = !1, a8U())
		}, this.iS = function() {
			! function() {
				for (var er = a88 - 1; 0 <= er; er--) 0 === ac.lV[kw[er]] && ! function(er) {
					var a8l = kw[er];
					a88--;
					for (var a7 = er; a7 < a88; a7++) kw[a7] = kw[a7 + 1], jP[kw[a7]] = a7;
					kw[a88] = a8l, jP[kw[a88]] = a88
				}(er)
			}();
			for (var a8j, mG = a88 - 1, er = 0; er < mG; er++) ac.gM[kw[er]] < ac.gM[kw[er + 1]] && (a8j = kw[er], kw[er] = kw[er + 1], kw[er + 1] = a8j, jP[kw[er]] = er, jP[kw[er + 1]] = er + 1);
			! function() {
				for (var dk = a8K, g7 = (a8K = !0, jP[a9.eI] >= a84 - 1 ? a84 - 2 : a84 - 1), a7 = g7; 0 <= a7; a7--)
					if (a8I[a7] !== kw[a7] || a8J[a7] !== ac.gM[kw[a7]]) return;
				(g7 != a84 - 2 || a8I[a84] === jP[a9.eI] && a8J[a84] === ac.gM[a9.eI]) && (a8K = dk)
			}();
			for (var a7 = a84 - 1; 0 <= a7; a7--) a8I[a7] = kw[a7], a8J[a7] = ac.gM[kw[a7]];
			a8I[a84] = jP[a9.eI], a8J[a84] = ac.gM[a9.eI];
			leaderboardHasChanged = true;
		}, __fx.leaderboardFilter.scrollToTop = function() {
			position = 0;
		}, this.gm = function(ef, eh) {
			return !!xe(ef, eh) && ((__fx.utils.isPointInRectangle(ef, eh, bY.gap + 12, bY.gap + 12, a8B - 22, a8B - 22) && __fx.playerList.display(ac.a4v), true) &&
				!(eh - bY.gap > __fx.leaderboardFilter.verticalClickThreshold && __fx.leaderboardFilter.handleMouseDown(ef - bY.gap)) && (a8M = bb.lo, a8N = !0, a8O = a8P = a8n(eh), bF.a0p() && (ef = a6o(-1, a8P, a84), a8L !== (ef = ef === a84 ?
					-1 : ef)) && (a8L = ef, a8U(), bb.dc = !0)), !0)
		}, __fx.leaderboardFilter.repaintLeaderboard = function() {
			a8U(), bb.dc = !0;
		},
		this.a0B = function(ef, eh) {
			if (__fx.utils.isPointInRectangle(ef, eh, bY.gap + 12, bY.gap + 12, a8B - 22, a8B - 22)) {
				__fx.playerList.hoveringOverButton === false && (__fx.playerList.hoveringOverButton = true, a8U(), bb.dc = !0);
			} else {
				__fx.playerList.hoveringOverButton === true && (__fx.playerList.hoveringOverButton = false, a8U(), bb.dc = !0);
			}
			if (__fx.leaderboardFilter.setHovering(
					__fx.utils.isPointInRectangle(ef, eh, bY.gap, bY.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth, __fx.leaderboardFilter.tabBarOffset), ef - bY.gap
				)) return;
			var dk, a8m = a8n(eh);
			return a8N ? (dk = position, (position = a6o(0, position += a8O - a8m, a9.eV - a84)) !== dk && (a8m = (a8m = a6o(-1, a8O = a8m, a84)) !== a84 && xe(ef, eh) ? a8m : -1, a8L = a8m, a8U(), bb.dc = !0), !0) : (a8m = (a8m = a6o(-1, a8m,
				a84)) === a84 || !xe(ef, eh) || bF.a0p() ? -1 : a8m, a8L !== a8m && (a8L = a8m, a8U(), bb.dc = !0))
		}, this.a0a = function(ef, eh) {
			if (!a8N) return !1;
			a8N = !1;
			var a8m = a8n(eh);
			var isEmptySpace = false;
			return bF.a0p() && -1 !== a8L && (a8L = -1, a8U(), bb.dc = !0), bb.lo - a8M < 350 && a8P === a8m && -1 !== (a8m = (a8m = a6o(-1, a8m, a84)) !== a84 && xe(ef, eh) ? a8m : -1) && (ef = (__fx.leaderboardFilter.enabled ? (updateFilteredLb(),
					kw[__fx.leaderboardFilter.filteredLeaderboard[a8m + position] ?? (isEmptySpace = true, jP[a9.eI])]) : kw[a8m + position]), a8m === a84 - 1 && (__fx.leaderboardFilter.enabled ? this.playerPos : jP[a9.eI]) >=
				position + a84 - 1 && (ef = a9.eI), !isEmptySpace && a9.ie && __fx.donationsTracker.displayHistory(ef, ac.a4v, a9.k0), 0 !== ac.lV[ef] && !isEmptySpace) && aD.ls(ef, 800, !1, 0), !0
		}, this.a0E = function(ef, eh, deltaY) {
			var a8o;
			return !(a8N || a9.m1 || (a8o = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !xe(ef, eh)) || (ef = (ef = a6o(-1, a8n(eh), a84)) === a84 || bF.a0p() ? -1 : ef, 0 < deltaY ? position < a9.eV - a84 && (position += Math.min(a9.eV - a84 -
				position, a8o), a8L = ef, a8U(), bb.dc = !0) : 0 < position && (position -= Math.min(position, a8o), a8L = ef, a8U(), bb.dc = !0), 0))
		}, this.tT = function() {
			tU.drawImage(a85, bY.gap, bY.gap)
		}
}

function cH() {
	var canvas, wt, ef, eh, a5S, a8p, gap, a8q, fontSize, a8r, a8s, a8t, a8u, a8v, a8w, a8x, a8y, a8z;

	function a93() {
		wt.clearRect(0, 0, aS.a1, aS.j7), wt.fillStyle = b7.mV, wt.fillRect(0, 0, aS.a1, aS.j7), wt.fillStyle = b7.ms, eC = 0 < a8x ? a8x : Math.sqrt(a8u[4] / 1e4), wt.fillRect(0, aS.j7 - a5S - 1, Math.floor(eC * aS.a1), a5S), wt.fillStyle = b7.mY,
			wt.fillRect(0, 0, aS.a1, 1), wt.fillRect(0, 0, 1, aS.j7), wt.fillRect(aS.a1 - 1, 0, 1, aS.j7), wt.fillRect(0, aS.j7 - 1, aS.a1, 1), wt.fillRect(0, aS.j7 - a5S - 1, aS.a1, 1);
		for (var eC, a95, dk = 0, a7 = 0; a7 < a8t.length; a7++) a8v[a7] ? (b6.pT.textAlign(wt, 0), a95 = Math.floor((a8p - a5S + 2 * a8q) * (a7 - dk + 1) / (a8t.length + 1) - .7 * a8q), wt.fillText(a8t[a7], gap, a95), b6.pT.textAlign(wt, 2), 5 ===
			a7 && 0 !== ac.lV[a9.eI] && ac.ga[a9.eI] >= aa.jK(a9.eI) ? (wt.fillStyle = b7.nR, wt.fillText(a91(a7), aS.a1 - gap, a95), wt.fillStyle = b7.mY) : wt.fillText(a91(a7), aS.a1 - gap, a95)) : dk++
	}

	function a91(a7) {
		return a7 < 3 ? a8u[a7].toString() : 3 === a7 || 4 === a7 || 5 === a7 ? b6.zF.a2b(a8u[a7] / 100, 2) : a7 < 7 ? b6.zF.xw(a8u[a7]) : a7 === 7 ? aS.a96(a8u[7]) : a7 === 8 ? __fx.utils.getMaxTroops(ac.gM, a9.eI) : __fx.utils.getDensity(a9.eI)
	}

	function a90() {
		ac.gM[a9.eI] !== a8u[6] && (a8u[6] = ac.gM[a9.eI], a8r++)
	}
	this.dU = function() {
		a8x = a8y = 0, (a8s = new Array(8))[0] = L(108), a8s[1] = a9.k0 ? L(109) : L(110), a8s[2] = L(111), a8s[3] = L(112), a8s[4] = L(113), a8s[5] = L(114, 0, "Interest"), a8s[6] = L(115), a8s[7] = L(116),
			a8s.push("Max Troops", "Density"), // add a8s
			(a8t = new Array(a8s.length)).fill(""), (a8u = new Array(a8s.length))[0] = a9.k0 ? 0 : a9.je, a8u[1] = a9.k0 ? ah.jf : a9.k2, a8u[2] = a9.yg, a8u[3] = 0, a8u[4] = bH.dl(1e4 * ac.gM[0], Math.max(a9.jO, 1)), a8u[5] = 0 === a9.data
			.iIncomeType ? 700 : 1 === a9.data.iIncomeType ? bH.dl(700 * a9.data.iIncomeValue, 64) : bH.dl(700 * a9.data.iIncomeData[a9.eI], 64), a8u[6] = 0, a90(), a8u[7] = 0, a8w = a91(6), a8v = new Array(a8s.length);
		for (var a7 = a8s.length - 1; 0 <= a7; a7--) a8v[a7] = !0;
		a8z = 0, a8z = a9.k0 ? (a8v[0] = !1, a8v[2] = !1, a8v[3] = !1, 3) : (a8v[3] = !1, 1), a8r = 0, this.resize()
	}, this.resize = function() {
		this.a1 = Math.floor((u.v.r8() ? .1646 : .126) * 1.25 * at.pV), this.j7 = Math.floor(1.18 * this.a1), a5S = Math.floor(.04 * this.a1), gap = Math.floor(.035 * this.a1), a8q = .04 * this.a1, a8p = this.j7, this.j7 -= Math.floor(a8z * (this
			.j7 - 2 * a5S) / a8s.length), fontSize = Math.floor(.7 * (a8p - a5S) / a8s.length);
		var a46 = b6.pT.rV(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.a1, canvas.height = this.j7,
			function(a46, a1) {
				for (var a7 = 0; a7 < a8t.length; a7++) a8t[a7] = b6.wt.a1f(a8s[a7], a46, a1)
			}((wt = canvas.getContext("2d", {
				alpha: !0
			})).font = a46, .575 * this.a1), b6.pT.textBaseline(wt, 1), wt.lineWidth = 1, this.a2q(), this.a6S(), aQ.a6S(), a93()
	}, this.a6S = function() {
		ef = at.a1 - this.a1 - bY.gap
	}, this.a94 = function() {
		eh = bY.gap
	}, this.a2q = function() {
		eh = bY.gap + (aQ.a5s() && 0 !== ac.lV[a9.eI] && !a9.gu ? aQ.j7 + bY.gap : 0)
	}, this.lH = function(bo) {
		(bo || 100 <= a8r) && (a8r = 0, a93())
	}, this.a3k = function() {
		return a8u[7]
	}, this.a96 = function(value) {
		var kP = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * kP) / 1e3);
		return value < 10 ? kP + ":0" + value : kP + ":" + value
	}, this.iS = function() {
		var a9F, per;
		a8v[0] && a9.yh - a9.yg !== a8u[0] && (a8u[0] = a9.yh - a9.yg, a8r++), ah.jf - a8u[0] !== a8u[1] && (a8u[1] = ah.jf - a8u[0], a8r++), this.l9(), (a9F = aa.a9G(a9.eI)) !== a8u[5] && (a8u[5] = a9F, a8r++), a90(), a8u[7] += bb.a9H, a9F =
			a91(7), a8w !== a9F && (a8w = a9F, a8r += 100), a9F = a9.ie ? bd.a2M() : ac.gM[kw[0]], per = bH.dl(1e4 * a9F, Math.max(a9.jO, 1)), a8u[3] = a9F, a8u[4] !== per && (a8r++, a8u[4] = per), 8 === a9.jy && function() {
				for (var a7 = 0; a7 < 2; a7++)
					if (!b6.fu.gl(a7)) return bN.yH.yd(), 1;
				return
			}() || a8u[3] < a9.jO || ! function() {
				for (var a7 = ah.jf - 1; 0 <= a7; a7--)
					if (0 < ac.g0[ah.jh[a7]].length) return;
				return 1
			}() || bN.yH.yd()
	}, this.l9 = function() {
		a8v[2] && a9.yg !== a8u[2] && (a8u[2] = a9.yg, a8r++)
	}, this.a9I = function(a7) {
		var sG, a9J, dk;
		return 2 !== a9.ye && (a7 % 2 == 1 && (aR.lH(1, 1), bb.dc = !0), a7 === a9.a2z ? (a8x = 0, a93(), !1) : (-1 !== a7 || 0 !== a8y) && (a9J = a8x, a8x = a9.gi ? a7 / a9.a2z : (dk = performance.now(), 0 <= a7 && (sG = dk - 392 * a7, a8y =
			0 === a7 || sG < a8y ? sG : a8y), 1 < (a8x = (dk - a8y) / (392 * a9.a2z)) ? 1 : a8x), a93(), a8x !== a9J))
	}, this.tT = function() {
		tU.drawImage(canvas, ef, eh)
	}
}

function cI() {
	var xC, a9K, a1, j7, a6Y, a9L, a9M, a5t, canvas, li, a9N;

	function wp() {
		return Math.floor((at.a1 - a1) / 2) < aN.j7 + 2 * bY.gap ? at.j7 - j7 - 4 * bY.gap - aN.j7 : at.j7 - j7 - 2 * bY.gap
	}
	this.dU = function() {
		a9N = xC = !1, a6Y = .61, a9L = .07, a9M = .09, li = a5t = j7 = 0
	}, this.resize = function() {
		var wt, ly, et, a9S, a9T, a4B;
		xC && (a1 = a9O(a1 = u.v.r8() ? Math.floor(.69 * at.pV) : Math.floor(.5 * at.pV), a4g(at.a1 - 2 * bY.gap, 10)), a1 = a9O(a1, Math.floor(3.57 * a4g(at.j7 - 2 * bY.gap, 3))), j7 = Math.floor(.28 * a1), (canvas = document.createElement(
			"canvas")).width = a1, canvas.height = j7, wt = canvas.getContext("2d", {
			alpha: !0
		}), ly = Math.floor(1 + j7 / 40), wt.clearRect(0, 0, a1, j7), wt.fillStyle = b7.mV, wt.fillRect(ly, ly, a1 - 2 * ly, j7 - 2 * ly), wt.lineJoin = "bevel", wt.lineWidth = 2 * ly, wt.strokeStyle = b7.mY, wt.strokeRect(ly, ly, a1 -
			2 * ly, j7 - 2 * ly), wt.imageSmoothingEnabled = !1, et = aX.get(a9K), a9S = et.width, a4B = (1 === a9K ? .85 : 21 === a9K ? .666 : .9) * a6Y * j7 / (a9T = et.height), wt.setTransform(a4B, 0, 0, a4B, Math.floor((a1 - a4B *
			a9S) / 2), Math.floor((j7 - a4B * a9T) / 2)), wt.drawImage(et, 0, 0), wt.setTransform(1, 0, 0, 1, Math.floor(a1 - a9M * j7 - a9L * j7 - ly), Math.floor(ly + a9L * j7)), function(wt, eY) {
			wt.lineWidth = Math.floor(1 + j7 / 80), wt.strokeStyle = b7.mY, wt.beginPath(), wt.moveTo(0, 0), wt.lineTo(eY, eY), wt.moveTo(0, eY), wt.lineTo(eY, 0), wt.stroke()
		}(wt, Math.floor(a9M * j7)), wt.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(f0, a9Q, a6L, a9R) {
		xC || a9R && a9N || (a9K = a6L ? 21 : f0 ? 1 : 2, xC = a9N = !0, this.resize(), aH.r1(), aN.a6I(), li = bb.lo, a5t = a9Q ? 1 : 0)
	}, this.iS = function() {
		!xC || 1 <= a5t || (a5t = 1 < (a5t += 5e-4 * (bb.lo - li)) ? 1 : a5t, li = bb.lo, bb.dc = !0)
	}, this.gm = function(ef, eh) {
		return !(!xC || a5t <= 0 || (ef -= Math.floor((at.a1 - a1) / 2), eh -= wp(), ef < 0) || eh < 0 || a1 < ef || j7 < eh || (a1 - j7 / 3 < ef && eh < j7 / 3 && (xC = !1, bb.dc = !0), 0))
	}, this.tT = function() {
		!xC || a5t <= 0 || (tU.globalAlpha = a5t, tU.drawImage(canvas, Math.floor((at.a1 - a1) / 2), wp()), tU.globalAlpha = 1)
	}
}

function dG() {
	var a9V = [0, 0],
		a9W = [0, 0];

	function a9Z(e0) {
		return 3 !== a9V[e0] && 1 !== a9W[e0] && (a9W[e0] = 1, a9V[e0]++, bf.rC.rD(119, (a9V[0] << 2) + a9V[1]), 1)
	}
	this.a9X = new a9Y, this.dU = function() {
		var f0 = bf.dp.data[119].value;
		a9V[0] = f0 >> 2, a9V[1] = 3 & f0
	}, this.a3A = function() {
		this.a9X.dU()
	}, this.iS = function() {
		this.a9X.iS()
	}, this.a3l = function() {
		a9Z(0) && aJ.a4m(L(117))
	}, this.a3m = function() {
		a9Z(1) && aJ.a4m(L(118))
	}
}

function a9Y() {
	var a9a;
	this.dU = function() {
		a9a = !1
	}, this.iS = function() {
		var g6;
		if (function() {
				if (!a9a) {
					if (bb.jb() % 30 != 9) return;
					if (!b6.fu.kp(90)) return;
					a9a = !0
				}
				return 1
			}() && (! function() {
				var pL = aJ.a58(956);
				if (pL) {
					if (b6.fu.kT(pL.player)) return 1;
					aJ.a3s(956, 0)
				}
				return
			}() && (-1 === (g6 = (a9.ie ? function() {
				var id = bd.kt(),
					eY = ah.jf;
				if (bc.k4[id])
					for (var yS = ah.jh, eW = bc.eW, a7 = 0; a7 < eY; a7++) {
						var g6 = yS[a7];
						if (eW[g6] !== id) return g6
					} else if (1 < eY) return kw[eY - 1];
				return -1
			} : function() {
				for (var a9i = ah.jf, jg = ah.jh, a9j = jP, a7 = 0; a7 < a9i; a7++) {
					var g6 = jg[a7];
					if (0 !== a9j[g6]) return g6
				}
				return -1
			})()) ? ! function() {
				var pL = aJ.a58(957);
				if (pL && pL.a4c) {
					if (aY.eP(pL.a4c.eK << 2)) return 1;
					aJ.a3s(957, 0)
				}
				return
			}() : (aJ.z2(0, L(119, [ac.zD[g6]]), 956, g6, b7.mY, b7.mV, -1, !0), 0)))) {
			var eY = aj.iF.kf;
			if (0 === eY) aj.iF.l4();
			else
				for (var dp = aj.iF.dp, a7 = 0; a7 < eY; a7++) {
					var eK = dp[a7];
					if (aY.eP(eK << 2)) return void aJ.z2(0, L(120, [bI.eg(eK), bI.ei(eK)]), 957, 0, b7.mY, b7.mV, -1, !0, void 0, {
						er: 1,
						eK: eK
					})
				}
		}
	}
}

function dH() {
	this.a9k = new a9l, this.dU = function() {
		this.a9k.resize()
	}
}

function a9l() {
	this.resize = function() {
		var a7, a9m = document.head.querySelector("style#ss");
		if (a9m)
			for (a7 = a9m.sheet.cssRules.length - 1; 0 <= a7; a7--) a9m.sheet.deleteRule(0);
		else(a9m = document.createElement("style")).id = "ss", document.head.appendChild(a9m);
		var a6g = "::-webkit-scrollbar",
			a9n = b6.pT.pe(bY.rW),
			hB = b6.pT.pe(Math.max(b6.pT.r3(.012), 8));
		try {
			a9m.sheet.insertRule(a6g + "{width:" + hB + ";height:" + hB + ";}", a9m.sheet.cssRules.length), a9m.sheet.insertRule(a6g + "-thumb{background-color:white;}", a9m.sheet.cssRules.length), a9m.sheet.insertRule(a6g +
				"-track{background:" + b7.mU + ";}", a9m.sheet.cssRules.length), a9m.sheet.insertRule(a6g + "-track:horizontal{border-top:" + a9n + " solid white;}", a9m.sheet.cssRules.length), a9m.sheet.insertRule(a6g +
				"-track:vertical{border-left:" + a9n + " solid white;}", a9m.sheet.cssRules.length), a9m.sheet.insertRule(a6g + "-button{display:none;}", a9m.sheet.cssRules.length)
		} catch (e) {
			for (console.log("error 3425: " + e), a7 = a9m.sheet.cssRules.length - 1; 0 <= a7; a7--) a9m.sheet.deleteRule(0)
		}
	}
}

function dF() {
	this.a9o = !1, this.mO = !1, this.a2u = !1, this.a9p = [0, 0, 0, 0], this.a9q = function() {
		var ly, lz, mB, mC;
		this.a2u = this.a2u || this.mO, (this.mO || this.a9o && this.a2u) && (ly = bW.a9r[0], lz = bW.a9r[1], mB = bW.a9r[2], mC = bW.a9r[3], ly = ly < this.a9p[0] ? this.a9p[0] : ly, lz = lz < this.a9p[1] ? this.a9p[1] : lz, mB = mB > this.a9p[
				2] ? this.a9p[2] : mB, mC = mC > this.a9p[3] ? this.a9p[3] : mC, this.mO = !1, this.a9o = !1, ly === this.a9p[0] && lz === this.a9p[1] && mB === this.a9p[2] && mC === this.a9p[3] ? this.a2v() : ly <= mB && lz <= mC && a3C
			.putImageData(a3D, 0, 0, ly, lz, mB - ly + 1, mC - lz + 1))
	}, this.a2v = function() {
		this.a2u && this.a9p[2] >= this.a9p[0] && this.a9p[3] >= this.a9p[1] && a3C.putImageData(a3D, 0, 0, this.a9p[0], this.a9p[1], this.a9p[2] - this.a9p[0] + 1, this.a9p[3] - this.a9p[1] + 1), this.a2u = !1
	}, this.yp = function() {
		this.a9p[2] >= this.a9p[0] && this.a9p[3] >= this.a9p[1] && a3C.putImageData(a3D, 0, 0, this.a9p[0], this.a9p[1], this.a9p[2] - this.a9p[0] + 1, this.a9p[3] - this.a9p[1] + 1), this.a2u = !1
	}, this.dU = function() {
		var ef, eh;
		this.a9o = !1, this.mO = !1, this.a2u = !1, this.a9p[0] = bO.ej, this.a9p[1] = bO.ek, this.a9p[2] = this.a9p[3] = 0;
		loop: for (ef = 1; ef < bO.ej - 1; ef++)
			for (eh = bO.ek - 2; 1 < eh; eh--)
				if (1 === a9s[aY.wO(ef, eh) + 2]) {
					this.a9p[0] = ef;
					break loop
				} loop: for (eh = 1; eh < bO.ek - 1; eh++)
			for (ef = bO.ej - 2; 1 < ef; ef--)
				if (1 === a9s[aY.wO(ef, eh) + 2]) {
					this.a9p[1] = eh;
					break loop
				} loop: for (ef = bO.ej - 2; 0 < ef; ef--)
			for (eh = bO.ek - 2; 1 < eh; eh--)
				if (1 === a9s[aY.wO(ef, eh) + 2]) {
					this.a9p[2] = ef;
					break loop
				} loop: for (eh = bO.ek - 2; 0 < eh; eh--)
			for (ef = bO.ej - 2; 1 < ef; ef--)
				if (1 === a9s[aY.wO(ef, eh) + 2]) {
					this.a9p[3] = eh;
					break loop
				}
	}
}

function L(value, a9t, tz) {
	var pA = "number" == typeof value ? b3.a9u[value] : value;
	if (tz && b3.a9v() && (pA = tz), a9t)
		for (var eY = a9t.length, a7 = 0; a7 < eY; a7++)
			for (var er = 0; er < 3; er++) pA = pA.replace("{" + (10 * er + a7) + "}", a9t[a7]);
	return pA
}

function bw() {
	this.data = new a9w;
	var a9x = (new a9y).L84,
		a9z = (this.a9u = a9x, !1);
	this.dU = function() {
		var eY, g;
		a9z = !1, "en" !== bf.dp.data[12].value.split("-")[0].toLowerCase() ? bf.dp.data[12].value === bf.dp.data[145].value && 0 < bf.dp.data[146].value && (eY = bf.dp.data[146].value, (g = bf.pm.u5(eY, !1)).length === eY) && !!b6.pd.a1L(g) &&
			function(g) {
				var eY = g.length,
					aA5 = bf.pm.u5(eY, !0);
				if (eY !== aA5.length) return !1;
				if (!b6.pd.a1L(aA5)) return !1;
				for (var kP = a9x.length, a7Z = new Array(kP), aA6 = kP === eY, g1 = Math.min(eY, kP), a7 = 0; a7 < kP; a7++)
					if (a7Z[a7] = a9x[a7], a7 < eY && aA5[a7] === a7Z[a7]) a7Z[a7] = g[a7];
					else {
						aA6 = !1;
						for (var es = 0; es < g1; es++)
							if (aA5[es] === a7Z[a7]) {
								a7Z[a7] = g[es];
								break
							}
					} return b3.a9u = a7Z, aA6
			}(g) || (a9z = !0) : b3.a9u = a9x
	}, this.dW = function() {
		bc.dV(), aA.dV(), ba.dV(), bZ.dV(), aK.dU(), bl = new dr
	}, this.a9v = function() {
		return this.a9u === a9x || !a9x.length
	}, this.aA7 = function() {
		var aA8;
		a9z && (a9z = !1, 0 !== a9x.length) && (aA8 = bf.dp.data[12].value, aw.aA9.aAA(0, aA8.slice(0, 20)))
	}, this.aAB = function(g) {
		g.length === a9x.length && (this.a9u = g, bf.rC.rD(145, bf.dp.data[12].value), bf.rC.rD(146, g.length), bf.pm.uB(g, !1), bf.pm.uB(a9x, !0), 0 === aW.zo()) && 5 === n.rs && n.s.aAC()
	}
}

function a9w() {
	var g = ["aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts", "btx",
		"bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "en", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fil", "fj",
		"fo", "fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac",
		"kek", "kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk",
		"ml", "mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "nb", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu",
		"rn", "ro", "rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "sh", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl",
		"tn", "to", "tpi", "tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu"
	];
	this.aAD = function() {
		for (var aAE = [], eY = g.length, a7 = 0; a7 < eY; a7++) aAE.push(g[a7]);
		for (eY++, aAE.unshift(bf.dp.data[12].tz), a7 = 1; a7 < eY; a7++)
			if (aAE[a7] === aAE[0]) {
				aAE.splice(a7, 1), eY--;
				break
			} try {
			if ("undefined" == typeof Intl) return aAE;
			for (a7 = 0; a7 < eY; a7++) {
				var pA = new Intl.DisplayNames([aAE[a7]], {
					type: "language"
				}).of(aAE[a7]);
				pA !== aAE[a7] && (aAE[a7] = aAE[a7] + ": " + pA)
			}
		} catch (e) {
			console.log("error 3646: " + e)
		}
		return aAE
	}, this.aAG = function(aAH) {
		for (var pA = bf.dp.data[12].value, eY = aAH.length, a7 = 0; a7 < eY; a7++)
			if (pA === aAH[a7].split(":")[0]) return a7;
		return 0
	}
}

function a9y() {
	this.L84 = ["No Admin", "Helper", "Junior Moderator", "Moderator", "Senior Moderator", "Lead Moderator", "Head Admin", "Very Easy", "Easy", "Normal", "Hard", "Very Hard", "Impossible", "Type your message here...", "Send", "Activated", "Top Clan",
		"Best Clan Member", "Top Admin", "Best 1v1 Player", "Best Battle Royale Player", "Richest Player", "Team {0}", "Team {0} has won the game!", "You have earned a participation reward of {10} gold.",
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
		"Passable Mountains", "Select File", "Preview", "Map Name", "Selectable Name", "▶️ Replay", "🔲 Select All", "📋 Copy", "🗑️ Clear", "▶️ Launch", "Insert the replay link here!", "⚙️ Settings", "🔄 Reset", "Reload Required",
		"A game reload is required to apply the new configuration.", "Information", "Increasing resolution, shrinking minimum font size, and speeding up text rendering can strain your system and hinder gameplay responsiveness.", "Resolution",
		"Low", "Medium", "High", "Very High", "Minimum Font Size", "Small", "Very Small", "Text Rendering Speed", "Slow", "Fast", "Large UI", "Place Balance Above", "Hide Zoom Buttons", "Font", "Shortcut Keys", "Reset", "Language", "Spawning",
		"Selectable Spawn", "🔑 My Account", "📈 Charts", "🧈 Gold Transfer", "🔗 Links", "ℹ️ Game Version", "🗑️ Delete Data", "Privacy Settings", "Force Restart Game", "☰ Game Menu", "📊 Game Statistics", "🏳️ Surrender", "🕊️ Call Peace Vote",
		"Android App", "iOS App", "Changelog", "Clan Results", "Tutorial", "Terms", "Privacy", "Do you want to delete all locally stored data, like usernames, account data and setting data?",
		"Accounts without gold will be deleted after some days of grace.", "🗑️ Delete", "User Privacy", "Check out our Privacy Policy at:", "Source Account", "Replay Error", "Warning", "Loading...",
		"An enemy ship belonging to {0} is heading towards your shore.", "Initiate Land Attack At Mouse Pointer", "Launch Ship Towards Mouse Pointer", "Increase Percentage Bar", "Decrease Percentage Bar", "Slightly Increase Percentage Bar",
		"Slightly Decrease Percentage Bar", "Switch UI Visibility", "Zoom In", "Zoom Out", "Camera Left", "Camera Right", "Camera Up", "Camera Down", "Avg. Attack Strength", "Land Attacks", "Ships launched", "Bots conquered", "Humans conquered",
		"Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Received Support", "Overall Income", "Additional Costs", "Land War Losses", "Naval Losses", "Transmitted Support", "Overall Expenses", "Mountain Attacks", "Ships landed",
		"Territory", "Numbers", "Statistics", "Neutral", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black", "Ship launched!", "Ship selected!", "Ship on the way!"
	]
}

function da() {
	var ef, eh, j7, sm, aAI, aAJ, aAK, aAL, aAM, a1, a1v, aAN;
	this.xC = !1, this.dU = function(pA, aAO) {
		if (1 === u.id && 13 <= u.f1 && u.f1 < 18) return aAO ? void(a1v = pA) : a1v !== pA ? void 0 : void u.u3.saveString(200, pA);
		aAO && (a1v = pA, (aAN = document.createElement("a")).appendChild(document.createTextNode(a1v)), this.xC = !0, aAN.title = a1v, aAN.target = "_blank", aAN.href = a1v, aAN.style.textAlign = "center", aAN.style.color = b7.mY, aAN.style
			.position = "absolute", aAN.style.padding = "0px", aAN.style.margin = "0px", this.resize(), document.body.appendChild(aAN), bb.dc = !0)
	}, this.r1 = function() {
		return !(!this.xC || (document.body.removeChild(aAN), this.xC = !1))
	}, this.gm = function(hd, he) {
		return !!this.xC && ((hd < ef || he < eh || ef + a1 < hd || eh + j7 < he || ef + a1 - sm < hd && he < eh + sm) && (bb.dc = !0, this.xC = !1, document.body.removeChild(aAN)), !0)
	}, this.resize = function() {
		var a46, aAP;
		this.xC && (aAL = Math.floor(.8 * (u.v.r8() ? at.a1 > at.j7 ? .6 : .55 : .4) * at.pV), sm = Math.floor(.15 * aAL), aAI = Math.floor(.35 * sm), aAJ = Math.floor(.5 * sm), aAK = Math.floor(2.5 * aAJ), j7 = sm + aAI + 3 * aAJ, a46 = b6.pT
			.rV(1, aAI / at.pZ), aAM = Math.floor(at.pZ * aM.measureText(a1v, a46)), aAP = a1 = (aAL < aAM ? aAM : aAL) + 2 * aAK, a1 = Math.min(a1, at.a1 - 2 * (u.v.r8() ? 2 : 1) * bY.gap), a46 = b6.pT.rV(1, a1 / aAP * aAI / at.pZ), aAM =
			Math.floor(at.pZ * aM.measureText(a1v, a46)), ef = Math.floor((at.a1 - a1) / 2), eh = Math.floor((at.j7 - j7) / 2), aAN.style.font = a46, aAN.style.top = Math.floor((eh + 1.4 * aAJ + sm) / at.pZ) + "px", aAN.style.left = Math
			.floor((ef + (a1 - aAM) / 2) / at.pZ) + "px")
	}, this.tT = function() {
		this.xC && (tU.fillStyle = b7.mV, tU.fillRect(ef, eh + sm, a1, j7 - sm), tU.fillStyle = b7.nc, tU.fillRect(ef, eh, a1, sm), tU.fillStyle = b7.mY, tU.lineWidth = bY.xf, tU.strokeStyle = b7.mY, tU.strokeRect(ef, eh, a1, j7), tU.fillRect(ef,
			eh + sm, a1, bY.xf), tU.font = b6.pT.rV(1, .48 * sm), b6.pT.textAlign(tU, 1), b6.pT.textBaseline(tU, 1), tU.fillText("You are leaving Territorial.io!", Math.floor(ef + (a1 - .5 * sm) / 2), Math.floor(eh + .55 * sm)), aI.a4H(
			Math.floor(ef + a1 - .8 * sm), Math.floor(eh + .25 * sm), Math.floor(.5 * sm)), tU.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function dY() {
	var gap, a8s, ef = [0, 0, 0, 0, 0],
		eh = [0, 0, 0, 0, 0],
		mA = [1, 1, 1, 1, 1],
		f0 = [!0, !0, !0, !1, !1],
		et = (this.fK = [!0, !0, !0, !1, !1], null);
	this.aAQ = function(a1T, aAR) {
		et = a1T, f0 = aAR, a8s = [bG.aAS, bG.zj, bG.aAT, bG.aAT, bG.aAU], this.dU()
	}, this.dU = function() {
		if (aX.sJ()) {
			var a7, rz = Math.floor((u.v.r8() ? .261 : .195) * at.pV),
				s0 = Math.floor(.9 * rz),
				a6Y = Math.floor(.17 * s0);
			if (gap = u.v.r8() ? 2 * bY.gap : bY.gap, mA[0] = rz / et[0].width, mA[1] = s0 / et[1].width, mA[2] = a6Y / et[2].height, mA[3] = a6Y / et[3].height, mA[4] = a6Y / et[4].height, mA[2] *= 1.7, mA[3] *= 1.07, ef[0] = gap, ef[1] = gap,
				ef[2] = gap, ef[3] = gap, ef[4] = Math.floor(2 * gap + mA[3] * et[3].width), eh[0] = gap, eh[1] = eh[0] + gap + mA[0] * et[0].height, eh[2] = eh[1] + gap + mA[1] * et[1].height, eh[3] = eh[2] + gap + mA[2] * et[2].height, eh[4] =
				eh[3], !f0[0])
				for (a7 = 0; a7 < 5; a7++) eh[a7] -= mA[0] * et[0].height + gap;
			if (!f0[1])
				for (a7 = 2; a7 < 5; a7++) eh[a7] -= mA[1] * et[1].height + gap
		}
	}, this.xC = function() {
		return !(7 === aW.zo() && u.v.r8())
	}, this.gm = function(hd, he) {
		if (et && this.xC())
			for (var a7 = f0.length - 1; 0 <= a7; a7--)
				if (f0[a7] && this.fK[a7] && ef[a7] < hd && eh[a7] < he && hd < ef[a7] + mA[a7] * et[a7].width && he < eh[a7] + mA[a7] * et[a7].height) return n.o(9, n.rs, new aAV("You are leaving Territorial.io.", b6.pT.a1u(a8s[a7]))), !0;
		return !1
	}, this.tT = function() {
		if (et && this.xC()) {
			var a7;
			for (tU.imageSmoothingEnabled = !0, a7 = 0; a7 < 5; a7++) f0[a7] && this.fK[a7] && (tU.setTransform(mA[a7], 0, 0, mA[a7], ef[a7], eh[a7]), tU.drawImage(et[a7], 0, 0));
			tU.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function dR() {
	this.aAW = 0, this.aAX = null, this.su = null, this.qg = null, this.s = null, this.t3 = null, this.qy = null, this.aAY = new aAZ, this.zs = 0, this.dU = function() {
		this.aAW = bC.rv.ux(bf.dp.data[105].value), this.su = new aAa, this.qg = new aAb, this.s = new aAc, this.t3 = new aAd, this.qy = new aAe, this.s.dU(), this.zs = 1, aW.setState(0)
	}, this.a01 = function() {
		this.aAX = null, this.su = null, this.qg = null, this.s = null, this.t3 = null, this.qy = null, this.zs = 0, Math.random() < .001 && console.log(L(121))
	}
}

function aAa() {
	function aAs(g, sC, sD) {
		var aAt = g[sC];
		g[sC] = g[sD], g[sD] = aAt
	}
	this.sv = [
		[],
		[],
		[],
		[]
	], this.sw = [0, 0, 0, 0], this.aAf = function(aAg, qr, username, qu, qx, aAh, elo, color) {
		this.sv[aAg].push(this.aAi(qr, username, qu, qx, aAh, elo, color)), bk.aAW === qr && (bk.aAX = this.sv[aAg][this.sv[aAg].length - 1]), bk.s.aAj += 29 === n.rs && bk.s.qY[0] === aAg && 1 === bk.s.qY[2]
	}, this.aAi = function(qr, username, qu, qx, aAh, elo, color) {
		return {
			qr: qr,
			username: username,
			qu: qu,
			qx: qx,
			aAh: aAh,
			elo: elo,
			color: color
		}
	}, this.aAk = function(e0, aAg, username, qu, qx, aAh, elo) {
		e0 = this.sv[aAg][e0];
		!b6.zF.startsWith(e0.username, "Censored") && b6.zF.startsWith(username, "Censored") && (e0.aAl = e0.username), e0.username = username, e0.qu = qu, e0.qx = qx, e0.aAh = aAh, e0.elo = elo, bk.s.aAj += 29 === n.rs && bk.s.qY[0] === aAg &&
			1 === bk.s.qY[2]
	}, this.aAm = function(e0, aAn, aAo) {
		var player = this.sv[aAn][e0];
		this.aAp(e0, aAn), this.sv[aAo].push(player), bk.s.aAj += 29 === n.rs && bk.s.qY[0] === aAo && 1 === bk.s.qY[2]
	}, this.aAp = function(e0, aAn) {
		var su = this.sv[aAn];
		e0 >= this.sw[aAn] ? su[e0] = su[su.length - 1] : (this.sw[aAn]--, 2 === aAn ? (su.splice(this.sw[aAn] + 1, 0, su[su.length - 1]), su.splice(e0, 1)) : (su[e0] = su[this.sw[aAn]], su[this.sw[aAn]] = su[su.length - 1])), su.pop(), bk.s
			.aAj += 29 === n.rs && bk.s.qY[0] === aAn && 1 === bk.s.qY[2]
	}, this.aAq = function(e0, qX) {
		bk.s.aAj += 29 === n.rs && bk.s.qY[0] === qX && 1 === bk.s.qY[2];
		var su = this.sv[qX],
			pL = su[e0];
		if (2 === qX)
			if (e0 >= this.sw[qX]) {
				for (var aAr = this.sw[qX], elo = pL.elo; aAr && elo > su[aAr - 1].elo;) aAr--;
				su[e0] = su[this.sw[qX]], su.splice(this.sw[qX]++, 1), su.splice(aAr, 0, pL)
			} else su.splice(this.sw[qX]--, 0, pL), su.splice(e0, 1);
		else e0 >= this.sw[qX] ? aAs(su, this.sw[qX]++, e0) : aAs(su, --this.sw[qX], e0)
	}
}

function aAZ() {
	this.dd = function(e0) {
		if ((sw = bk.su.sw[e0]) < 2) return !1;
		var qZ = bk.s.qa[e0],
			aAu = 9 === qZ.aAv ? 333 : 512,
			sw = Math.min(sw, aAu);
		8 === qZ.aAv && (sw -= sw % 2);
		aAu = bk.su.sv[e0].splice(0, sw), bk.su.sw[e0] -= sw, sw = function(aAw) {
			if (bk.aAX)
				for (var eY = aAw.length, qr = bk.aAX.qr, a7 = 0; a7 < eY; a7++)
					if (aAw[a7].qr === qr) return a7;
			return -1
		}(aAu);
		return -1 === sw ? (bk.s.aAj += 29 === n.rs && bk.s.qY[0] === e0 && 1 === bk.s.qY[2], !1) : (8 === qZ.aAv && (qZ.aAz = (qZ.aAz + (sw >> 1)) % 1024, e0 = sw - sw % 2, sw %= 2, aAu = aAu.slice(e0, 2 + e0)), ar.dU(qZ, aAu, sw), !0)
	}, this.aB0 = function(qZ, aAw, aAx) {
		var eb = a9.data = new a30,
			aB4 = (eb.spawningSeed = qZ.spawningSeed, qZ.aAv < 7 ? (eb.gameMode = 1, eb.numberTeams = qZ.aAv + 2) : 9 === qZ.aAv ? (eb.gameMode = eb.isZombieMode = 1, eb.numberTeams = 2) : (eb.gameMode = 0, eb.battleRoyaleMode = 7 === qZ.aAv ?
				0 : 10 === qZ.aAv ? 1 : 2), eb.selectedPlayer = aAx, eb.isContest = qZ.aB1, eb.mapType = bO.aB2(qZ.eE) ? 0 : 1, bO.aB3(eb, qZ.eE), eb.mapSeed = qZ.mapSeed, eb.humanCount = aAw.length);
		eb.selectableSpawn = 1 === eb.gameMode || aB4 < 100, eb.colorsData = new Uint32Array(aB4), eb.playerNamesData = new Array(aB4);
		for (var a7 = 0; a7 < aB4; a7++) eb.colorsData[a7] = aAw[a7].color, eb.playerNamesData[a7] = aAw[a7].username;
		if (2 === eb.battleRoyaleMode)
			for (eb.elo = new Uint16Array(aB4), a7 = 0; a7 < aB4; a7++) eb.elo[a7] = aAw[a7].elo;
		aW.setState(8), bO.a3(qZ.eE, eb.mapSeed), a9.a34()
	}
}

function aAb() {
	var ds = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player"],
		aB5 = [b7.mm, b7.mm, b7.mn, b7.nG, b7.nH, b7.n3, b7.nM, b7.mn, b7.ne, b7.nU],
		aB6 = [
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
		aB7 = ["Your account is too new!", "The server couldn't process your request.", "Spam detected!", "You are muted!", "Player couldn't be found.", "You don't have permission for this operation!"],
		aB8 = [
			["", " was muted. Duration: 1 Hour"],
			["The username of ", " was censored. Duration: 1 Minute"]
		];
	this.qh = function(code) {
		return {
			id: 13,
			fontSize: this.aB9(0),
			ql: [],
			qo: [{
				pA: "[Private Message] " + aB7[code],
				color: b7.nF,
				r0: 0
			}]
		}
	}, this.qi = function(qX, aBB) {
		var j7 = this,
			a22 = j7.aBC(qX, aBB.qr);
		return a22 || ((a22 = bk.su.aAi(aBB.qr, bB.rv.xw(aBB.qr, 5), 1, 1e6, 1e6, 0, 0)).qq = 1), 0 === aBB.id ? {
			id: aBB.id,
			fontSize: j7.aB9(a22.qu, a22.qx),
			ql: [a22],
			qo: [{
				pA: ": " + aBB.k,
				color: b7.mY,
				r0: j7.qw(a22.qx)
			}]
		} : 14 === aBB.id ? {
			id: aBB.id,
			fontSize: j7.aB9(0, 0),
			ql: [null, a22],
			qo: [{
				pA: aB8[aBB.aBD][0],
				color: b7.nF,
				r0: 0
			}, {
				pA: aB8[aBB.aBD][1],
				color: b7.nF,
				r0: 0
			}]
		} : ((qX = j7.aBC(qX, aBB.target)) || ((qX = bk.su.aAi(aBB.target, bB.rv.xw(aBB.target, 5), 1, 1e6, 1e6, 0, 0)).qq = 1), {
			id: aBB.id,
			fontSize: j7.aB9(0, 0),
			ql: [a22, qX],
			qo: [{
				pA: function(aBB) {
					if (aBB.id < 15) return bl.e3(aBB.id - 1, bl.dx[aBB.id - 1][aBB.value]);
					return 0 === aBB.aBD ? 32768 <= aBB.value ? " voted with " + (aBB.value - 32768 + 1) + " gold against " : " voted with " + (aBB.value + 1) + " gold for " : 1 === aBB.aBD ? " sent " + (aBB.value / 100)
						.toFixed(2) + " Gold to " : " voted with " + aBB.value + " points for "
				}(aBB),
				color: b7.nF
			}, {
				pA: 15 === aBB.id ? function(aBB) {
					return 0 === aBB.aBD ? 32768 <= aBB.value ? " to weaken the latter's admin position." : " to strengthen the latter's admin position." : 1 === aBB.aBD ? "." : " to acknowledge the latter as clan leader."
				}(aBB) : bl.e5(aBB.id - 1, bl.dx[aBB.id - 1][aBB.value]),
				color: b7.nF
			}]
		})
	}, this.qs = function(player, qX, qp) {
		return (2 === qX ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username + (qp && player.aAl ? " (" + player.aAl + ")" : "")
	}, this.qt = function(qu) {
		return aB5[qu]
	}, this.aB9 = function(qu, qx) {
		return qu < 3 || 7 === qu ? aB6[qu][0] : 4 === qu ? aB6[qu][qx < 1 ? 0 : qx < 10 ? 1 : 2] : aB6[qu][qx < 10 ? 0 : 1]
	}, this.qw = function(qx) {
		return 0 === qx
	}, this.aBC = function(qX, qr) {
		for (var sv = bk.su.sv, su = sv[qX], eY = su.length, a7 = 0; a7 < eY; a7++)
			if (qr === su[a7].qr) return su[a7];
		for (var es = 0; es < sv.length; es++)
			if (qX !== es)
				for (eY = (su = sv[es]).length, a7 = 0; a7 < eY; a7++)
					if (qr === su[a7].qr) return su[a7];
		return null
	}, this.qv = function(pL) {
		return !!bk.aAX && pL.qr === bk.aAX.qr
	}, this.aBG = function(su, aBH, aBI) {
		var zH = [];
		loop: for (var a7 = aBH; a7 < aBI; a7++) {
			var zI = b6.zF.zJ(su[a7].username);
			if (zI) {
				for (var es = zH.length - 1; 0 <= es; es--)
					if (zI === zH[es].name) {
						zH[es].g1++;
						continue loop
					} zH.push({
					name: zI,
					g1: 1
				})
			}
		}
		if (zH.sort(function(er, es) {
				return es.g1 - er.g1
			}), 0 === zH.length) return "";
		for (var pA = zH[0].name + ": " + zH[0].g1, a7 = 1; a7 < zH.length; a7++) pA += "   " + zH[a7].name + ": " + zH[a7].g1;
		return pA
	}, this.aBJ = function(qu, qx, aAh) {
		return 0 === ds[qu].length ? "Rank: " + (qx + 1) : ds[qu] + " Rank: " + (qx + 1) + (3 !== qu && aAh < 100 ? "   " + ds[3] + " Rank: " + (aAh + 1) : "")
	}
}

function aAe() {
	var aBK = null;
	this.qz = function(e, pL) {
		var a6f = e.target.getBoundingClientRect();
		this.show(a6f.left, a6f.top, pL), e.target.addEventListener("mouseleave", function remove() {
			e.target.removeEventListener("mouseleave", remove), bk.qy && bk.qy.r1(1)
		})
	}, this.show = function(ef, eh, pL, rU) {
		(aBK = aBK || new rQ).show(ef, eh, function(pL) {
			return pL.username + "   " + bk.qg.aBJ(pL.qu, pL.qx, pL.aAh) + (0 < pL.elo ? "   Elo: " + (pL.elo / 10).toFixed(1) : "")
		}(pL), rU)
	}, this.r1 = function(rX) {
		aBK && aBK.r1(rX)
	}
}

function aAc() {
	function aBP(aBS) {
		bk.s.aAj && 1 === bk.s.qY[2] && n.aBT(29).aBU(), bk.s.aAj = 0, n.aBT(29).aBV(), 0 !== bk.s.qa[bk.s.qY[0]].sh && !aBS || n.aBT(29).aBW()
	}
	this.qa = new Array(4), this.qY = [0, 0, 1, 0], this.aAj = 0, this.aBM = [0, 0], this.qd = [], this.dU = function() {
		for (var a7 = 0; a7 < this.qa.length; a7++) this.qa[a7] = new aBN
	}, this.aBO = function() {
		aBP(!0)
	}, this.aBQ = function() {
		for (var a7 = 0; a7 < bk.s.qa.length; a7++) {
			var qZ = bk.s.qa[a7];
			0 === qZ.sh ? qZ.aBX = 0 : (qZ.aBY = Math.max(qZ.aBY - qZ.aBX % 2, 0), qZ.aBX++)
		}
		aBP(!1)
	}, this.aBZ = function(qX) {
		this.qY[0] !== qX || this.qY[2] || n.aBT(29).aBa()
	}
}

function aAd() {
	var aBb = null,
		aBc = null,
		aBd = 0,
		aBe = 0,
		aBf = null;

	function aBh() {
		0 !== aBc.qu && (bk.t3.r1(), n.o(8, 29, new rt(25, {
			ru: 0,
			qr: bB.rv.xw(aBc.qr, 5),
			rr: 0
		}, 29)))
	}

	function aBi() {
		var ef = aBb.ef,
			eh = aBb.eh;
		bk.t3.r1(), aBb = new sz([new q("Kick User", aBn, aBt(0)), new q("Block Chat", aBo, aBt(1)), new q("Censor Username", aBp, aBt(2)), new q("Elo Deduction", aBq, aBt(3)), new q("Gold Seizure", aBr, aBt(4))]), aBm(ef, eh), aBd = 2, aBe = 1
	}

	function aBt(id) {
		return !bk.aAX || bk.qg.qv(aBc) || bk.aAX.aAh >= aBc.qx || 0 === id && aBc.qx < 200 ? 1 : 1 - bl.dy(id, bk.aAX.aAh, 0)
	}

	function aBl() {
		return !bk.aAX || bk.qg.qv(aBc) ? 1 : 0
	}

	function aBu(id, e0) {
		return bk.aAX ? bk.qg.qv(aBc) ? 0 : bk.aAX.aAh >= aBc.qx ? 1 : 1 - bl.dy(id, bk.aAX.aAh, e0) : 1
	}

	function aBk() {
		var ef = aBb.ef,
			eh = aBb.eh,
			aBv = (bk.t3.r1(), aBl());
		aBb = new sz([new q(bl.dx[5][0], function() {
			aBs(5, 0)
		}, aBv), new q(bl.dx[5][1], function() {
			aBs(5, 1)
		}, aBv), new q(bl.dx[5][2], function() {
			aBs(5, 2)
		}, aBv), new q(bl.dx[5][3], function() {
			aBs(5, 3)
		}, aBv)]), aBm(ef, eh), aBe = aBd = 2
	}

	function aBs(id, value) {
		aw.aBw.aBx(5, {
			id: id,
			value: value,
			qr: aBc.qr
		})
	}

	function aBn() {
		var ef = aBb.ef,
			eh = aBb.eh;
		bk.t3.r1(), aBb = new sz([new q(bl.dx[0][0], function() {
			aBs(0, 0)
		}, aBu(0, 0)), new q(bl.dx[0][1], function() {
			aBs(0, 1)
		}, aBu(0, 1)), new q(bl.dx[0][2], function() {
			aBs(0, 2)
		}, aBu(0, 2))]), aBm(ef, eh), aBd = 3, aBe = 0
	}

	function aBo() {
		var ef = aBb.ef,
			eh = aBb.eh;
		bk.t3.r1(), aBb = new sz([new q(bl.dx[1][0], function() {
			aBs(1, 0)
		}, aBu(1, 0)), new q(bl.dx[1][1], function() {
			aBs(1, 1)
		}, aBu(1, 1)), new q(bl.dx[1][2], function() {
			aBs(1, 2)
		}, aBu(1, 2)), new q(bl.dx[1][3], function() {
			aBs(1, 3)
		}, aBu(1, 3)), new q(bl.dx[1][4], function() {
			aBs(1, 4)
		}, aBu(1, 4))]), aBm(ef, eh), aBd = 3, aBe = 1
	}

	function aBp() {
		var ef = aBb.ef,
			eh = aBb.eh;
		bk.t3.r1(), aBb = new sz([new q(bl.dx[2][0], function() {
			aBs(2, 0)
		}, aBu(2, 0)), new q(bl.dx[2][1], function() {
			aBs(2, 1)
		}, aBu(2, 1)), new q(bl.dx[2][2], function() {
			aBs(2, 2)
		}, aBu(2, 2))]), aBm(ef, eh), aBd = 3, aBe = 2
	}

	function aBq() {
		var ef = aBb.ef,
			eh = aBb.eh;
		bk.t3.r1(), aBb = new sz([new q(bl.dx[3][0], function() {
			aBs(3, 0)
		}, aBu(3, 0)), new q(bl.dx[3][1], function() {
			aBs(3, 1)
		}, aBu(3, 1)), new q(bl.dx[3][2], function() {
			aBs(3, 2)
		}, aBu(3, 2))]), aBm(ef, eh), aBe = aBd = 3
	}

	function aBr() {
		var ef = aBb.ef,
			eh = aBb.eh;
		bk.t3.r1(), aBb = new sz([new q(bl.dx[4][0], function() {
			aBs(4, 0)
		}, aBu(4, 0)), new q(bl.dx[4][1], function() {
			aBs(4, 1)
		}, aBu(4, 1)), new q(bl.dx[4][2], function() {
			aBs(4, 2)
		}, aBu(4, 2)), new q(bl.dx[4][3], function() {
			aBs(4, 3)
		}, aBu(4, 3)), new q(bl.dx[4][4], function() {
			aBs(4, 4)
		}, aBu(4, 4))]), aBm(ef, eh), aBd = 3, aBe = 4
	}

	function aBm(ef, eh, t5) {
		aBb.show(ef, eh, t5), bk.qy.show(aBb.ef, aBb.eh, aBc, 1)
	}
	this.aBg = function(e, pL) {
		aBd = 1, aBc = pL, aBb = new sz([new q(L(122), aBh, 0 === aBc.qu ? 1 : 0), new q(L(123), aBi, function() {
			if (!bk.aAX) return 1;
			if (bk.qg.qv(aBc)) return 1;
			if (100 <= bk.aAX.aAh) return 1;
			if (bk.aAX.aAh >= aBc.qx) return 1;
			return 0
		}()), new q(L(124), aBk, aBl())]), aBm((aBf = {
			clientX: e.clientX,
			clientY: e.clientY
		}).clientX, aBf.clientY, 1)
	}, this.a0j = function(code) {
		return 29 === n.rs && (0 < at.rc || !aBc || code.length < 1 || ("Escape" === code ? bk.t3.r1() : (b6.zF.startsWith(code, "Numpad") || b6.zF.startsWith(code, "Digit")) && (code = parseInt(code[code.length - 1], 10), isNaN(code) || (0 ===
			aBd ? this.aBg(aBf, aBc) : 1 === aBd ? (code <= 1 ? aBh : 2 === code ? aBi : aBk)() : 2 === aBd ? 1 === aBe ? (code <= 1 ? aBn : 2 === code ? aBo : 3 === code ? aBp : 4 === code ? aBq : aBr)() : (aBs(5, bH.p0(code - 1,
				0, 3)), bk.t3.r1()) : (aBs(aBe, bH.p0(code - 1, 0, bl.dx[aBe].length - 1)), bk.t3.r1())))), !0)
	}, this.r1 = function() {
		aBd = 0, aBb && aBb.r1(), aBb = null, bk.qy.r1()
	}
}

function aBN() {
	this.sh = 0, this.eE = 0, this.mapSeed = 0, this.aAv = 0, this.aBy = 0, this.aBz = 0, this.aB1 = 0, this.aBY = 0, this.spawningSeed = 0, this.zu = 0, this.aAz = 0, this.qb = [], this.qc = 1048575, this.aBX = 0
}

function cJ() {
	var aC0, aC1, aC2;

	function aC7(a7) {
		var button = aU.q4[a7],
			ef = button.ef,
			eh = button.eh,
			a1 = button.a1,
			j7 = button.j7;
		tU.fillStyle = button.aC5, tU.fillRect(ef, eh, a1, j7), a7 === aC0 && (tU.fillStyle = aC2, tU.fillRect(ef, eh, a1, j7)), tU.lineWidth = bY.xf, tU.strokeStyle = aC1, tU.strokeRect(ef, eh, a1, j7),
			function(button) {
				var ef = button.ef,
					eh = button.eh,
					a1 = button.a1,
					j7 = button.j7;
				b6.pT.textAlign(tU, 1), b6.pT.textBaseline(tU, 1), tU.font = button.font, tU.fillStyle = aC1, tU.fillText(button.a5K, Math.floor(ef + a1 / 2), Math.floor(eh + j7 / 2 + .1 * button.fontSize))
			}(button)
	}
	this.a1 = 0, this.j7 = 0, this.eh = 0, this.gap = 0, this.dU = function() {
		aC0 = -1, aC1 = b7.mY, aC2 = "rgba(255,255,255,0.16)", this.q4 = new Array(7), this.j7 = Math.floor((u.v.r8() ? .123 : .093) * at.pV), this.a1 = Math.floor((u.v.r8() ? 3.96 : 4.2) * this.j7), this.gap = Math.floor(.025 * this.a1);
		var aC3 = Math.floor(.26 * this.j7),
			aC4 = b6.pT.rV(1, aC3);
		this.q4[0] = {
			ef: 0,
			eh: 0,
			a1: Math.floor(.6 * this.a1 - this.gap / 2),
			j7: this.j7,
			a5K: "Multiplayer",
			font: aC4,
			aC5: "rgba(22,88,22,0.8)",
			fontSize: aC3
		}, aC3 = Math.floor(.18 * this.j7), aC4 = b6.pT.rV(1, aC3), this.q4[1] = {
			ef: 0,
			eh: 0,
			a1: this.a1 - this.q4[0].a1 - this.gap,
			j7: this.j7,
			a5K: "Single Player",
			font: aC4,
			aC5: "rgba(22,88,88,0.8)",
			fontSize: aC3
		}, this.q4[2] = {
			ef: 0,
			eh: 0,
			a1: this.a1,
			j7: Math.floor(.3 * this.j7),
			a5K: "",
			font: this.q4[1].font,
			aC5: "rgba(100,0,0,0.8)",
			fontSize: this.q4[1].fontSize
		}, this.q4[3] = {
			ef: 0,
			eh: 0,
			a1: this.a1,
			j7: this.j7,
			a5K: "Back",
			font: this.q4[0].font,
			aC5: "rgba(0,0,0,0.8)",
			fontSize: this.q4[0].fontSize
		}, this.q4[4] = {
			ef: 0,
			eh: 0,
			a1: this.a1,
			j7: Math.floor(.3 * this.j7),
			a5K: "The game was updated!",
			font: this.q4[1].font,
			aC5: "rgba(100,0,0,0.8)",
			fontSize: this.q4[1].fontSize
		}, this.q4[5] = {
			ef: 0,
			eh: 0,
			a1: this.q4[0].a1,
			j7: Math.floor(.8 * this.j7),
			a5K: "Reload",
			font: this.q4[0].font,
			aC5: "rgba(0,100,0,0.8)",
			fontSize: this.q4[0].fontSize
		}, this.q4[6] = {
			ef: 0,
			eh: 0,
			a1: this.q4[1].a1,
			j7: this.q4[5].j7,
			a5K: "Back",
			font: this.q4[0].font,
			aC5: "rgba(0,0,0,0.8)",
			fontSize: this.q4[0].fontSize
		}, this.a7c()
	}, this.a7c = function() {
		this.eh = Math.floor(.54 * at.j7), this.q4[0].ef = Math.floor(.5 * at.a1 - .5 * this.a1), this.q4[1].ef = this.q4[0].ef + this.q4[0].a1 + this.gap, this.q4[2].ef = this.q4[3].ef = this.q4[0].ef, this.q4[4].ef = this.q4[5].ef = this.q4[0]
			.ef, this.q4[6].ef = this.q4[1].ef, this.q4[0].eh = Math.floor(.54 * at.j7), this.q4[1].eh = this.q4[0].eh, this.q4[2].eh = Math.floor((at.j7 - this.q4[2].j7 - this.q4[3].j7 - this.gap) / 2), this.q4[3].eh = this.q4[2].eh + this.q4[2]
			.j7 + this.gap, this.q4[4].eh = Math.floor((at.j7 - this.q4[4].j7 - this.q4[5].j7 - this.gap) / 2), this.q4[5].eh = this.q4[6].eh = this.q4[4].eh + this.q4[4].j7 + this.gap
	}, this.aC6 = function() {
		aC7(0), aC7(1)
	}, this.aC8 = function() {
		aC7(2), aC7(3)
	}, this.aC9 = function() {
		aC7(4), aC7(5), aC7(6)
	}, this.a0B = function(ef, eh, lH) {
		var a7 = -1;
		return 0 === aW.zo() ? a7 = this.a0f(ef, eh, 0, 2) : 3 === aW.zo() ? a7 = this.a0f(ef, eh, 3, 1) : 5 === aW.zo() && (a7 = this.a0f(ef, eh, 5, 2)), aC0 !== a7 && (aC0 = a7, lH) && (bb.dc = !0), -1 !== a7 && (aP.qV(), !0)
	}, this.a0f = function(ef, eh, aCA, size) {
		for (var a7 = aCA; a7 < aCA + size; a7++)
			if (ef >= this.q4[a7].ef && eh >= this.q4[a7].eh && ef <= this.q4[a7].ef + this.q4[a7].a1 && eh <= this.q4[a7].eh + this.q4[a7].j7) return a7;
		return -1
	}
}

function cK() {
	var aCC, aCD, a5S, a5c, a6Q, aCE, aCF, aCG, aCH, a46, fontSize, li, aCI, aCK, aCJ = 0;

	function aCN() {
		return aw.s.aCO[(aCI + aCJ) % aw.s.aCP]
	}

	function aCS() {
		__fx.customLobby.isActive() ? (l.zz(3249), __fx.customLobby.setActive(false)) : l.zz(3249)
	}

	function aCY(eh, a7J, sh) {
		var ly = Math.floor((at.a1 - a5c) / 2) + aCF,
			mB = ly + Math.floor(sh * (a5c - 2 * aCF));
		tU.lineWidth = a7J, tU.beginPath(), tU.moveTo(ly, eh), tU.lineTo(mB, eh), tU.lineTo(Math.floor(ly - aCF + sh * a5c), eh + a5S), tU.lineTo(ly - aCF, eh + a5S), tU.closePath()
	}
	this.dU = function() {
		aW.setState(6), aCC = 0, aCD = 1, aCG = "rgba(0,220,120,0.4)", aCH = "rgba(0,0,0,0.8)", this.resize(), bb.dc = !0, aCI = 0, aCK = !1, aCI++, li = bb.lo, aw.s.aCQ(aCN(), 4) && (aCK = !0, aw.aBw.aCR(aCN()))
	}, this.resize = function() {
		a5c = Math.floor((u.v.r8() ? .5 : .25) * at.pV), a6Q = a5c + 12, a5S = Math.floor(.125 * a5c), aCF = 3 * a5S, aCE = Math.floor(.225 * a5c), fontSize = Math.floor(.3 * a5S), a46 = b6.pT.rV(0, fontSize)
	}, this.aCM = function(er) {
		aCJ = er
	}, this.zr = function(zl) {
		zl === aCN() && (aCK = !1, aCS())
	}, this.aCT = function(zl) {
		6 !== aW.zo() || aCK || (li = bb.lo, aCK = !0)
	}, this.gm = function(ef, eh) {
		var ly = Math.floor((at.a1 - a6Q) / 2),
			lz = Math.floor(.5 * (at.j7 - bY.gap - a5S - aCE)) + a5S + bY.gap;
		return ly < ef && ef < ly + a6Q && lz < eh && eh < lz + aCE && (this.a0r(), aU.a0B(ef, eh, !1), !0)
	}, this.a0r = function() {
		aw.s.a00(3260), __fx.customLobby.setActive(false), n.s.t()
	}, this.iS = function() {
		6 === aW.zo() && (aCK ? bb.lo > li + 12e3 && l.zz(3250) : bb.lo > li + 12e3 && aCS(), 100 < (aCC += .07 * aCD * (aCC < 16 ? 5 + aCC : 84 < aCC ? 105 - aCC : 17)) ? (aCC = 100, aCD = -1) : aCC < 0 && (aCC = 0, aCD = 1), aCG = "rgba(0," +
			Math.floor(190 - 1.9 * aCC) + "," + Math.floor(120 - 1.2 * aCC) + "," + (.4 + .004 * aCC) + ")", aCH = "rgba(0," + Math.floor(1.9 * aCC) + "," + Math.floor(1.2 * aCC) + "," + (.8 - .004 * aCC) + ")", bb.dc = !0)
	}, this.tT = function() {
		var ef = Math.floor((at.a1 - a6Q) / 2),
			eh = Math.floor(.5 * (at.j7 - bY.gap - a5S - aCE));
		! function(title, eh, a7J, sh) {
			tU.fillStyle = aCH, aCY(eh, a7J, 1), tU.fill(), tU.fillStyle = aCG, aCY(eh, a7J, sh), tU.fill(), tU.strokeStyle = b7.mY, aCY(eh, a7J, 1), tU.stroke(),
				function(aCa, eh) {
					b6.pT.textAlign(tU, 1), b6.pT.textBaseline(tU, 1), tU.font = a46, tU.fillStyle = b7.mY, tU.fillText(aCa, Math.floor(.5 * at.a1), Math.floor(eh + .58 * a5S))
				}(title, eh)
		}(L(125), eh, 3, aCC / 100),
		function(ef, eh, a1, j7, a5K) {
			tU.fillStyle = b7.mT, tU.fillRect(ef, eh, a1, j7), tU.lineWidth = 3, tU.strokeStyle = b7.mY, tU.strokeRect(ef, eh, a1, j7);
			var eY = Math.floor(.3 * j7);
			b6.pT.textAlign(tU, 1), b6.pT.textBaseline(tU, 1), tU.font = b6.pT.rV(0, eY), tU.fillStyle = b7.mY, tU.fillText(a5K, Math.floor(ef + a1 / 2), Math.floor(eh + j7 / 2 + .1 * eY))
		}(ef, eh + a5S + bY.gap, a6Q, aCE, L(31))
	}
}

function cL() {
	var zg = 0;
	this.dU = function() {
		aU.dU(), zg = 0
	}, this.setState = function(aCb) {
		zg = aCb
	}, this.zo = function() {
		return zg
	}, this.aCc = function() {
		this.setState(8), n.r()
	}, this.a0j = function(e) {
		if (!bO.vD) return !1;
		if (!(bb.lo < 400)) {
			if ("Enter" === e.key || "Escape" === e.key) {
				if (this.aCd()) return !0;
				if ("Enter" === e.key) {
					if (0 === zg) return !0;
					if (7 === zg) return !0
				}
			}
			return !1
		}
	}, this.aCe = function() {
		bV.resize()
	}, this.aCd = function() {
		return !!bV.r1()
	}, this.gm = function(ef, eh) {
		!bO.vD || bV.gm(ef, eh) || 6 === zg && aV.gm(ef, eh) || bU.gm(ef, eh) || aP.gm(ef, eh)
	}, this.a0B = function(ef, eh) {
		!aP.a7V && aU.a0B(ef, eh, !0) || aP.a0B(ef, eh)
	}, this.click = function(ef, eh) {
		aP.a0a()
	}, this.a0E = function(ef, eh, deltaY) {}, this.aCf = function() {
		aU.a7c(), bb.dc = !0
	}, this.tT = function() {
		8 !== zg && 10 !== zg && (tU.imageSmoothingEnabled = !0, this.wn(), 0 !== zg && (aP.tT(), aK.tT(), this.aCg(), bU.tT()), 0 !== zg && 6 === zg && aV.tT(), bV.tT(), n.tT())
	}, this.wn = function() {
		var aCi, aCh;
		if (__fx.makeMainMenuTransparent) tU.clearRect(0, 0, at.a1, at.j7);
		else bO.vD ? (aCh = at.a1 / bO.ej, aCi = at.j7 / bO.ek, tU.setTransform(aCh = aCi < aCh ? aCh : aCi, 0, 0, aCh, Math.floor((at.a1 - aCh * bO.ej) / 2), Math.floor((at.j7 - aCh * bO.ek) / 2)), tU.drawImage(bO.vF, 0, 0), tU.setTransform(1,
			0, 0, 1, 0, 0), tU.fillStyle = b7.mT) : tU.fillStyle = b7.mP, tU.fillRect(0, 0, at.a1, at.j7)
	}, this.aCg = function() {
		var eh = Math.floor(.3 * at.j7),
			canvas = aX.aCj("territorial.io"),
			hG = (hG = 1.75 * at.j7 / canvas.width) * canvas.width < .98 * at.a1 ? .98 * at.a1 / canvas.width : hG,
			ef = (tU.globalAlpha = .15, tU.imageSmoothingEnabled = !1, Math.floor(.5 * (at.a1 - hG * canvas.width))),
			ef = Math.floor(ef / hG),
			eh = Math.floor(eh - .5 * canvas.height * hG),
			eh = Math.floor(eh / hG);
		tU.setTransform(hG, 0, 0, hG, ef, eh), tU.drawImage(canvas, ef, eh), tU.setTransform(1, 0, 0, 1, 0, 0), tU.globalAlpha = 1, tU.imageSmoothingEnabled = !0
	}
}

function ck() {
	this.aAz = 0;
	var aCl, aCm, aCn, aCo, aCp, aCq = this.aCk = 0;

	function aCu() {
		aCo = aCp = null, aCq = 0
	}
	this.dU = function(qZ, aAw, aAx) {
		n.r(), bk.a01(), aW.setState(10), aCo = qZ, aCp = aAw, aCq = aAx, this.aAz = qZ.aAz, this.aCk = aAx, aCl = 0, aCm = bb.lo + 4500, aw.s.zt > aw.s.aCr && (qZ.zu += aw.s.aCr), aw.s.zu = qZ.zu, aw.s.zt === qZ.zu ? (console.log("direct pass"),
			aCn = 0) : (console.log("delayed pass"), aw.s.close(aw.s.zt, 3247), aCn = 2, aw.s.aCQ(qZ.zu, 5) && aw.np.aCs()), tU.imageSmoothingEnabled = !0, aW.wn();
		aAw = aX.aCj("loading"), aAx = (u.v.r8() ? .396 : .25) * at.pV / aAw.width;
		tU.setTransform(aAx, 0, 0, aAx, Math.floor((at.a1 - aAx * aAw.width) / 2), Math.floor((at.j7 - aAx * aAw.height) / 2)), tU.imageSmoothingEnabled = !1, tU.drawImage(aAw, 0, 0), tU.setTransform(1, 0, 0, 1, 0, 0)
	}, this.lF = function() {
		0 < aCn && bb.lo > aCm && (aCn--, aCm += 4500, 0 === bb.aCw) && 0 === bb.jb() && (0 === aCn && aw.s.zu < aw.s.aCx && (aw.s.zu += aw.s.aCr), aw.s.aCQ(aw.s.zu, 5))
	}, this.aCy = function() {
		return 10 === aW.zo() && (bk.aAY.aB0(aCo, aCp, aCq), aCu(), !0)
	}, this.aCz = function() {
		10 === aW.zo() && 2 <= ++aCl && (bk.aAY.aB0(aCo, aCp, aCq), aCu())
	}
}

function cM() {
	var aD1, canvas, z0, aD2;

	function aD8(e0, name, aD9, pA) {
		z0[e0] = name, canvas[e0] = new Image, canvas[e0].onload = function() {
			! function(e0, aD9) {
				var a2O, a2P = null;
				7 === aD9 ? a2O = b6.a0x.a2R : 8 === aD9 ? (a2O = b6.a0x.a2U, a2P = .1) : 3 === aD9 ? (a2O = b6.a0x.a2S, a2P = .06) : 5 === aD9 ? a2O = b6.a0x.a2V : 6 === aD9 ? a2O = b6.a0x.a2Q : 4 === aD9 && (a2O = b6.a0x.a2W);
				canvas[e0] = b6.a0x.a2N(canvas[e0], a2O, a2P)
			}(e0, aD9), aDB()
		}, canvas[e0].onerror = function(e) {
			console.error("Error loading image at index", e0, "Error:", e), aDB()
		}, canvas[e0].src = "data:image/png;base64," + pA
	}

	function aDB() {
		aD1--, aD5()
	}

	function aD5() {
		0 === aD1 && (aD1 = -1, aD7(), bb.dc = !0, canvas[7] = aD2, canvas[8] = aD2, canvas[9] = aD2, canvas[10] = aD2, 5 === n.rs) && n.aDD().aDE.resize()
	}

	function aD7() {
		aH.a3Z(), bU.aAQ([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== u.id, 1 !== u.id, !0, !0, !0]), af.vI = new xB, af.vI.dU(), aq.dV()
	}
	this.dU = function() {
		if (void 0 === canvas) {
			aD1 = 23, canvas = new Array(aD1), z0 = new Array(aD1), (aD2 = document.createElement("canvas")).width = 1;
			for (var a7 = aD1 - (aD2.height = 1); 0 <= a7; a7--) canvas[a7] = aD2;
			aD7(), aD8(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aD8(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aD8(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aD8(3, "orders", 6,
					"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"
					), aD8(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), aD8(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aD8(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9ydG5c+fsBAAAAAAAAAAAFjDcAwAAAAAAAAAAxJlnnhlff/11dgbEa6+9FldddVV2BgD1wKqrrpqdwEI+/fTT7AQAAIBlst9++2UnFL0LLrjAaM8PqKqqij322CNGjx6dnVK0dthhh+wEYDmZO3du3H///fGTn/wkNt988/jtb38bs2bNSuuZN29eXHHFFbH11ltHjx494rbbbouZM2em9bB8dOzYMTsBAAAAAAAAAIAFGmQHAAAAAAAAAAAA+caMGRP333+/gwlJNX/+/Dj77LOzMwCoJwz31C2GewAAgPqsXbt2scUWW2RnFLUbbrghBg0alJ1Rp82bNy/23HPPeO655xz2n6Br166x/vrrx5tvvpmdAtSQb775Jh588MEYNmxYjB8/Pjvne73++utx8MEHR7t27eKcc86JvffeO5o0aZKdRQ1o165ddgLV8Jvf/Cbuuuuu7Iwl9uijj0bjxo2zM4rO1ltvnZ1Qaz755JPsBAAAAAAAAIAaZbgHAAAAAAAAAACIiIihQ4fGLrvsEs2bN89OoUg9+eST8cADD2RnAFBPrLzyytkJLOTjjz/OTgAAAFhqRx99dDRq1Cg7o2g98sgjcdRRR2Vn1AuTJk2KQw45JB555JEoLy/PzikqZWVlcfjhh8eAAQOyU4Aa8OKLL8bAgQPj2WefzU6plokTJ8ahhx4al156afz2t7+Nn/3sZ9lJLKPVVlstO4FqmDBhQkyYMCE7Y4lVVVVlJxSl+vKYAgAAAAAAAMD/Ks0OAAAAAAAAAAAA6oZ333037rjjjuwMitTXX38dQ4YMyc4AoB5ZaaWVshNYyAcffJCdAAAAsNR22WWX7ISiNX78+Nh3332zM+qVF198MQYMGBDz58/PTik62223XXYCsIw+//zzOP300+MnP/lJvRxYeO2116JXr15x/PHHx+eff56dwzJo2bJllJWVZWcAAAAAAAAAABCGewAAAAAAAAAAgIUMGTIkpk2blp1BEbrnnnvilVdeyc4AoB5ZccUVsxNYyLvvvpudAAAAsFS6desW3bp1y84oSp9//nn06dMnZs2alZ1S71x77bUxcuTI7Iyi07Vr1+jUqVN2BrCUXn755fjJT34SF154YXbKMrvyyivjpz/9qedX67GysrLYYostsjMAAAAAAAAAAAjDPQAAAAAAAAAAwEKmTJkSf/jDH7IzKDJffPFFnH766dkZANQz5eXl2Qks5B//+Ed2AgAAwFI59NBDo6SkJDuj6MyfPz9OP/30eOONN7JT6q2+ffvG+++/n51RVMrKyuLggw/OzgCWUFVVVVx11VWx+eabx5tvvpmdU2PGjx8fW2yxRdx2223ZKSylzp07ZycAAAAAAAAAABCGewAAAAAAAABYDtZcc82oqqry4aPGPvbee+/s/62hqJxxxhnxySefZGdQRH7/+9/HxIkTszMAqGeaN2+encACc+bMialTp2ZnAAAALJVtt902O6Eo3XnnnXH99ddnZ9Rrs2bNipNOOikqKyuzU4pK7969sxOAJTBr1qw4/vjj47jjjstOWS6qqqri4IMPjnPOOcfjQT209tprZycAAAAAAAAAABCGewAAAAAAAAAAgO+YM2dOXHPNNdkZFImPP/44hgwZkp0BQD1kuKfumD59enYCAADAUunWrVtssMEG2RlF54MPPoijjjoqO6MgPPTQQ3HvvfdmZxSV7t27R3l5eXYGUA3Tpk2L/fffP66++urslOVu6NChMWDAgPjmm2+yU1gC7du3z04AAAAAAAAAACAM9wAAAAAAAAAAAN/jvPPOi/feey87gyJw6aWXxpw5c7IzAKhnWrRoEY0aNcrOYIEZM2ZkJwAAACyVQw89NEpKSrIzikplZWWceuqpMWvWrOyUgtG/f/+YMmVKdkbRaNy4cRxwwAHZGcBifPrpp7HHHnvEww8/nJ1Sa37729/G4MGDo7KyMjuFamrVqlV2AgAAAAAAAAAAYbgHAAAAAAAAAAD4HlVVVXHJJZdkZ1Dg/vnPf8bFF1+cnQFAPdShQ4fsBBYybdq07AQAAIClss0222QnFJ377rsv7rnnnuyMgjJ16tS46qqrsjOKSq9evbITgEWYPHly7LXXXvH8889np9S63/zmN3HeeedlZ1BNLVq0yE4AAAAAAAAAACAM9wAAAAAAAAAAAD/g6quvjjfeeCM7gwI2YsSI7AQA6qlVV101O4GFTJ8+PTsBAABgiXXo0CE22GCD7IyiMm3atDjppJOyMwrSiBEj4u23387OKBo9evTITgB+wPTp0+Oggw6KF198MTslzRlnnBG33XZbdgbVsMoqq2QnAAAAAAAAAAAQhnsAAAAAAAAAAIBFOP/887MTKFDPPPNM3HXXXdkZANRTK6+8cnYCC5k2bVp2AgAAwBI75JBDoqysLDujqFxxxRXxySefZGcUpKqqqvjtb3+bnVE01lprrejWrVt2BvAdX3/9dfTr1y+efPLJ7JR0hx56aIwePTo7g8WoqKjITgAAAAAAAAAAIAz3AAAAAAAAAAAAi3DHHXfEiy++mJ1Bgfnmm2/ijDPOyM4AoB5zmF3dMnXq1OwEAACAJbbNNttkJxSV9957L84+++zsjIJ23XXXxfjx47MzisY+++yTnQB8x9ChQ2PkyJHZGXVCVVVVHHroofHZZ59lp7AI5eXlUV5enp0BAAAAAAAAAFD0DPcAAAAAAAAAAACLdNZZZ0VVVVV2BgXkwQcfjOeeey47A4B6zEF2dcuMGTOyEwAAAJZI48aNo3v37tkZReXiiy/2XEMtuPrqq7MTisaWW26ZnQAs5K677orf/OY32Rl1yttvvx2nn356zJ8/PzuFRdhwww2zEwAAAAAAAAAAip7hHgAAAAAAAAAAYJEee+yxePLJJ7MzKBAzZ86MgQMHZmcAUM+ttNJK2QksZPr06dkJAAAAS+Sggw6Kpk2bZmcUjfHjx8fvfve77IyicPXVV8eECROyM4pC9+7do7TUW/WhLhg3blwccsgh2Rl10h/+8Id46KGHsjNYhLXXXjs7AQAAAAAAAACg6Hk1IAAAAAAAAAAAsFjDhg2LefPmZWdQAP74xz/Gu+++m50BQD234oorZiewkM8//zw7AQAAYIlsu+222QlF5fLLL89OKCq33XZbdkJRKC8vj7322is7A4re7Nmz4+ijj/Zc9iIce+yxMXXq1OwMfkDLli2zEwAAAAAAAAAAip7hHgAAAAAAAAAAYLFGjx4df/rTn7IzqOc+/fTTGDRoUHYGAAWgadOm2QksZNq0adkJAAAAS2SzzTbLTiga77zzTlx33XXZGUXlN7/5TcyYMSM7oyhsvfXW2QlQ9C655JJ48cUXszPqtIkTJ8YVV1yRncEPWHnllbMTAAAAAAAAAACKnuEeAAAAAAAAAACgWgYPHhyzZ8/OzqAeu/LKKx0WCECNaNiwYXYCC5k8eXJ2AgAAQLV179491lxzzeyMonHLLbdkJxSdGTNmxBNPPJGdURQ22mij7AQoaq+99loMHTo0O6NeGDFiRLz11lvZGXyPioqK7AQAAAAAAAAAgKJnuAcAAAAAAAAAAKiWt99+O0aOHJmdQT319ttvx3nnnZedAUCBWHHFFbMTWMjEiROzEwAAAKptzz33zE4oGlOnTo2LLrooO6Mo/f73v89OKAqdO3fOToCiNW/evDjllFOyM+qNqqqquOSSS7Iz+B4rr7xydgIAAAAAAAAAQNEz3AMAAAAAAAAAAFTboEGDYvr06dkZ1EMXXHBBVFVVZWcAUCAaNGiQncAC8+fPjw8//DA7AwAAoNo233zz7ISi8eCDD8acOXOyM4rSo48+Gu+88052RsGrqKiIXr16ZWdAUbrzzjvjqaeeys6oV6677roYP358dgbfUV5enp0AAAAAAAAAAFD0DPcAAAAAAAAAAADVNmnSpLj55puzM6hnXnrppbjxxhuzMwAoII0bN85OYIGvvvoqOwEAAGCJbLTRRtkJRaGqqiquvvrq7Iyi9vjjj2cnFIXevXtnJ0DRmT59egwcODA7o1668sorsxP4DsM9AAAAAAAAAAD5DPcAAAAAAAAAAABLZMiQIfHpp59mZ1BPVFZWxrBhw7IzACgwTZs2zU5ggXnz5mUnAAAAVNu2224bLVq0yM4oCmPHjo2xY8dmZxS1m2++OebPn5+dUfC6d++enQBF54YbbohPPvkkO6Ne+t3vfhcffPBBdgYLWXHFFbMTAAAAAAAAAACKnuEeAAAAAAAAAABgicyaNSuuvfba7AzqiUceeSSeeOKJ7AwACkxpqZdB1xWGewAAgPpk2223zU4oGg888EB2QtEbM2ZMvP3229kZBW+DDTbIToCi8umnn8YZZ5yRnVGv3XHHHdkJLGSFFVbITgAAAAAAAAAAKHresQoAAAAAAAAAACyxs846KyZMmJCdQR03e/bsGDRoUHYGAAWoefPm2Qks8NVXX2UnAAAAVFv37t2zE4rCV199FVdffXV2BhHx/PPPZycUvHbt2sW6666bnQFF44477og5c+ZkZ9Rrl19+ecyePTs7gwWaNWuWnQAAAAAAAAAAUPQM9wAAAAAAAAAAAEusqqoqLrvssuwM6rg77rgjxo0bl50BACxHlZWV2QkAAADV1rlz5+yEovDyyy/H9OnTszOIiAcffDA7oeCVlJTETjvtlJ0BReHzzz+PM888Mzuj3ps0aVI8/fTT2Rks0LBhw+wEAAAAAAAAAICiZ7gHAAAAAAAAAABYKpdddlmMHz8+O4M66rPPPotBgwZlZwBQoMrKyrITWGD27NnZCQAAANXSpUuXaNu2bXZGUXjkkUeyE1hg1KhRMW3atOyMgrfhhhtmJ0BRePDBB2PGjBnZGQXhzjvvzE5ggUaNGmUnAAAAAAAAAAAUPcM9AAAAAAAAAADAUrvggguyE6ijrrvuupgyZUp2BgAFqnHjxtkJLDBv3rzsBAAAgGrZaaedshOKwrx58+KPf/xjdgYL+fvf/56dUPDWW2+97AQoePPmzYvf/va32RkF49Zbb43JkydnZxARTZs2zU4AAAAAAAAAACh6hnsAAAAAAAAAAICldsstt8To0aOzM6hj/v3vf8ewYcOyMwCAWjB37tzsBAAAgGrp0aNHdkJReOONN2LSpEnZGSzE8zjLX4cOHbIToOD97W9/i3HjxmVnFJRnnnkmO4GIaNCgQXYCAAAAAAAAAEDRM9wDAAAAAAAAAAAsk3POOSfmz5+fnUEdcvHFF0dlZWV2BgAFrFGjRtkJAAAA1DNdu3bNTigKL7zwQnYC3/HYY49lJxS81q1bR/v27bMzoKDdcccd2QkFZ9SoUdkJhOc7AAAAAAAAAADqAsM9AAAAAAAAAADAMhk1alT89a9/zc6gjnj11Vfj6quvzs4AoMA1bNgwO4EFjPUBAAD1QUVFRXTs2DE7oyg88sgj2Ql8x7PPPhszZszIzihoJSUlsd1222VnQMH69NNP4/e//312RsG5/fbb48svv8zOICLWWmut7AQAAAAAAAAAgKJmuAcAAAAAAAAAAFhmw4cPj2+++SY7g2RVVVUxYsSI7AwAoBZ99dVX2QkAAACLtccee0SDBg2yMwreF198YbinjnrzzTezEwreRhttlJ0ABeuvf/1rVFVVZWcUnMrKynj11VezM4jwfSoAAAAAAAAAQDLDPQAAAAAAAAAAwDJ7/vnn4+GHH87OINmTTz4ZDz74YHYGAAAAAMC3bLzxxtkJReGNN97ITuAHjB8/Pjuh4K2//vrZCVCw7r777uyEgjV69OjsBAAAAAAAAAAASGe4BwAAAAAAAAAAqBFDhw6NOXPmZGeQZO7cuTFkyJDsDAAAAACA/2FQo3b8/e9/z07gBxhVWv46duyYnQAF6ZNPPokHHnggO6NgPfTQQ9kJAAAAAAAAAACQznAPAAAAAAAAAABQI8aNGxd33313dgZJ7r777hgzZkx2BgAAAADA/+jUqVN2QlEYPXp0dgI/4IUXXshOKHhrrLFGNGzYMDsDCo6/v5avF154ISZPnpydUfRWXHHF7AQAAAAAAAAAgKJmuAcAAAAAAAAAAKgxb731VnYCCaZPnx6DBg3KzgAAAAAA+B/NmjWLNdZYIzuj4H3zzTfx0EMPZWfwA0aPHh2zZs3KzihoZWVl0bNnz+wMKDiPP/54dkLBe/PNN7MTip7hHgAAAAAAAACAXIZ7AAAAAAAAAACAGlFWVhb9+vXLziDBCy+8EBMnTszOAKCINGnSJDuBBWbOnJmdAAAAsEjbb799NGjQIDuj4H300UcxY8aM7AwWwe/xl7+NNtooOwEKyuzZs+Pmm2/Ozih4b7zxRnYCAAAAAAAAAACkMtwDAAAAAAAAAADUiDPPPDPatWuXnUGC3r17R/fu3bMzAIAEK6ywQnYCAADAIvXo0SM7oSi8//772QkshuGe5a9Tp07ZCVBQxo0bF/PmzcvOKHgvv/xydgIAAAAAAAAAAKQy3AMAAAAAAAAAACyzZs2aRd++fbMzSLLCCivE2WefnZ0BQBH56quvshNYoGHDhtkJAAAAi9S5c+fshKLw9ttvZyewGB9++GF2QsFba621shOgoLz66qvZCUXhiSeeiPnz52dnAAAAAAAAAABAGsM9AAAAAAAAAADAMjv77LOjdevW2Rkk2mGHHWKHHXbIzgAAAAAA+JZOnTplJxSFf/3rX9kJLIbhnuWvffv22QlQUJ566qnshKIwadKk+PTTT7MzAAAAAAAAAAAgjeEeAAAAAAAAAABgmbRs2TIOO+yw7AySlZaWxrBhw7IzAAAAAAC+Ze21185OKAr/+Mc/shNYjA8++CA7oeCtttpq2QlQMObOnRsPPvhgdkbRmDBhQnYCAAAAAAAAAACkMdwDAAAAAAAAAAAskxEjRkRFRUV2BnXA5ptvbsQJAAAAAKgzevToEU2aNMnOKHjffPNN/O1vf8vOYDHeeuut7ISCt8oqq0T79u2zM6AgvPfeezFv3rzsjKLx73//OzsBAAAAAAAAAADSGO4BAAAAAAAAAACW2lprrRV9+vTJzqAOOe2007ITAIBa1KBBg+wEAACAH7TxxhtnJxSFTz/9NCorK7MzWIwxY8bE/PnzszMK3uabb56dAAXhX//6V3ZCUfnggw+yEwAAAAAAAAAAII3hHgAAAAAAAAAAYKmdffbZ0bx58+wM6pD1118/Tj311OwMAKCWNG7cODsBAADgB6233nrZCUVhypQp2QlUw7x58+LLL7/Mzih4/t6BmjF+/PjshKLyzjvvZCcAAAAAAAAAAEAawz0AAAAAAAAAAMBS6dKlS/ziF7/IzqAOOv744x3iD8ByNW/evOwEAAAA6oEOHTpkJxSFyZMnZydQTTNmzMhOKHjt2rXLToCCMHbs2OyEovL3v/89OwEAAAAAAAAAANIY7gEAAAAAAAAAAJbK8OHDjbPwvVZfffU466yzsjMAKGBff/11dgILlJZ6SToAAFB3GdCoHYZ76o/p06dnJxS8Nm3aZCdAvVdZWRlPPvlkdkZRee211+Kbb77JzgAAAAAAAAAAgBTeJQkAAAAAAAAAACyxzTbbLHbdddfsDOqwvn37OpwOAIpA06ZNsxMAAAB+0BprrJGdUBSmTJmSnUA1zZw5Mzuh4LVq1So7Aeq9//znPzFr1qzsjKIzderU7AQAAAAAAAAAAEhhuAcAAAAAAAAAAFhiw4YNi4YNG2ZnUIdVVFTEeeedl50BQIGaM2dOdgIL+J4QAACoq8rLy2PVVVfNzigK06ZNy06gmgxhLH/+3oFl95///Cc7oSgZ7gEAAAAAAAAAoFgZ7gEAAAAAAAAAAJbItttuG9tvv312BvXAvvvuG126dMnOAKAAVVZWZiewQKNGjbITAAAAvtdWW20VpaXeRlsbJk+enJ1ANRnuWf5atmyZnQD13sSJE7MTipIhPgAAAAAAAAAAilWD7AAAAAAAAAAAAKB+GTp0qMMOqZYmTZrEOeecE7vvvnt2CgCwnDRu3Dg7AQAA4HsZFa89PXv2jA4dOmRnUA1t27bNTih45eXlUVFREdOnT89OgXrro48+yk4oSv7eAgAAAAAAAACgWBnuAQAAAAAAAAAAqm3PPfeMnj17ZmdQj+y8887Rq1eveOqpp7JTACggM2fOzE5ggbKysuwEAACA77XWWmtlJxSNgw8+ODsB6pQePXrEE088kZ0B9dbEiROzE4rS1KlTsxMAAAAAAAAAACBFaXYAAAAAAAAAAABQf5x++ulRUlKSnUE9UlZWFsOHD8/OAKDAVFVVZSewQNOmTbMTAAAAvtdqq62WnQAUqY4dO2YnQL320UcfZScUpenTp2cnAAAAAAAAAABACsM9AAAAAAAAAABAtRx88MHRo0eP7AzqoZ49e0afPn2yMwAoILNnz85OYIEGDRpkJwAAAHyvVq1aZScARapdu3bZCVCvvf3229kJRWnGjBnZCQAAAAAAAAAAkMJwDwAAAAAAAAAAUC2nnXZadgL12MCBA7MTACggc+fOzU5ggUaNGkWzZs2yMwAAAP7Hqquump0AFKmWLVtmJ0C99o9//CM7oShNnz49OwEAAAAAAAAAAFIY7gEAAAAAAAAAABarf//+scEGG2RnUI916dIlTjzxxOwMAArEvHnzshNYSIcOHbITAAAA/ofhDCBLRUVFdgLUWzNnzozKysrsjKJkuAcAAAAAAAAAgGJluAcAAAAAAAAAAFik0tLSOOGEE7IzKAAnnnhilJWVZWcAUAC+/PLL7AQW0qZNm+wEAACAb6moqIjy8vLsDKBIGe6BpTdz5szshKLl9+4AAAAAAAAAABQrwz0AAAAAAAAAAMAinXrqqdGpU6fsDApA+/bt46yzzsrOAKAAzJs3LzuBhay66qrZCQAAAN/So0eP7ASgiK288srZCVBvGY8BAAAAAAAAAABqm+EeAAAAAAAAAADgB5WVlUX//v2zMyggRx11VLRs2TI7A4B6bvbs2dkJLGSVVVbJTgAAAPiWjh07ZicARay8vDw7AeqtuXPnZicULaNJAAAAAAAAAAAUK8M9AAAAAAAAAADADxo+fHi0a9cuO4MC0qJFixgxYkR2BgD1nAME65aKiorsBAAAgG9p3759dgJQxAz3wNIz2p7nq6++yk4AAAAAAAAAAIAUhnsAAAAAAAAAAIDvVV5eHkcccUR2BgXowAMPjHXXXTc7A4B67IsvvshOYCErrbRSdgIAAMC3rLbaatkJQBFbccUVsxOg3jIeAwAAAAAAAAAA1DbDPQAAAAAAAAAAwPc688wzo3Xr1tkZFKCmTZvGeeedl50BQD02Y8aM7AQWUlFRkZ0AAADwLS1btsxOAIpYs2bNonHjxtkZUC9VVlZmJxStyZMnZycAAAAAAAAAAEAKwz0AAAAAAAAAAMD/aNmyZRx22GHZGRSwXXfdNXr27JmdAUA9NX369OwEFrLKKqtkJwAAAHxLeXl5dgJQ5Dp37pydALBEvvnmm+wEAAAAAAAAAABIYbgHAAAAAAAAAAD4HyNGjIiKiorsDApYw4YN46yzzsrOAKCemjZtWnYCC2nRokV2AgAAwLestNJK2QlAkVtttdWyE6Bemj17dnYCAAAAAAAAAABQZAz3AAAAAAAAAAAA39KhQ4fo06dPdgZF4Gc/+1nstdde2RkA1ENTp07NTmAhBh8BAIC6xnAPkK158+bZCVAvVVVVZScAAAAAAAAAAABFxnAPAAAAAAAAAADwLcOHD3eYGLWipKQkBg8enJ0BQD30/vvvZyewEAdiAwAAdU15eXl2AlDk/L4EAAAAAAAAAAAA6gfDPQAAAAAAAAAAwH916dIl9t577+wMisjGG28cxxxzTHYGAPXM1KlT4+uvv87OYIGKiorsBAAAgG9ZccUVsxOAIme4BwAAAAAAAAAAAOoHwz0AAAAAAAAAAMB/nXXWWbHCCitkZ1Bkfv3rX0dpqZezAbBkZs6cmZ3AAg7EBgAA6pIOHTpEWVlZdgZQ5Jo1a5adAAAAAAAAAAAAAFSDkw4AAAAA+P/Y+/M4r+t6//9/zIwIIY64gOZCJJw0RUvDT0ckjiZW6DE1TUtTE7T0gFKoiArDNoC4JW65YLmhx31JIxWVECnREI6KuKMhgQgiAoIww++f8+trHkZnYGYe75n39Xq58M8s79dtvIwwy+v9vAMAAABARETsu+++ccghh2RnUIS++tWvRkVFRXYGAE2M4Z7CUVZWFl26dMnOAAAAiIiITp06ZScAROvWrbMTAAAAAAAAAAAAgFow3AMAAAAAAAAAAEREREVFRbRo0SI7gyJ16qmnRnl5eXYGAE3IsmXLshP4lK997WvZCQAAABER8eUvfzk7ASA222yz7AQAAAAAAAAAAACgFgz3AAAAAAAAAAAA0bNnzzjooIOyMyhi7du3j9GjR2dnANCEfPTRR9kJfMrOO++cnQAAABAREe3atctOAIg2bdpkJwAAAAAAAAAAAAC1YLgHAAAAAAAAAACIIUOGRGmp24nIdcIJJzj0H4Ba+/DDD7MT+JQdd9wxOwEAACAiItq2bZudABBf+tKXshMAAAAAAAAAAACAWnDSBgAAAAAAAAAAFLkjjjgiunfvnp0B0aZNmxg1alR2BgBNxAcffJCdwKd8+ctfzk4AAACIiIjWrVtnJwAY7gEAAAAAAAAAAIAmwnAPAAAAAAAAAAAUuUGDBkVJSUl2BkRExI9+9KPYZ599sjMAaAIWLVqUncCnbLfddtkJAAAAEWG4BygMhnsAAAAAAAAAAACgaTDcAwAAAAAAAAAARez44483kkJBadGiRVRWVmZnANAELF68ODuBT2nfvn12AgAAQEREtGnTJjsBAAAAAAAAAAAAAGgiDPcAAAAAAAAAAEARGzhwYHYC/B8HHnhgHHroodkZABS4+fPnZyfwKVtvvXV2AgAAQEREtG7dOjsBAAAAAAAAAAAAAGgiDPcAAAAAAAAAAECR6tu3b+y+++7ZGfB/lJaWxpAhQ7IzAChwhnsKy9Zbbx3l5eXZGQAAAPGlL30pOwEgNt100+wEAAAAAAAAAAAAoBYM9wAAAAAAAAAAQBEqLS2N/v37Z2dAjbp27Rp9+vTJzgCggL322mvZCXxKSUlJ7LffftkZAAAAhnuAgmC4BwAAAAAAAAAAAJoGwz0AAAAAAAAAAFCEzj777OjcuXN2BnyugQMHRmmp29wAWL/XX3891qxZk53Bp+y+++7ZCQAAAIZ7AAAAAAAAAAAAAIBac6IBAAAAAAAAAAAUmbKysujbt292Bnyhf/u3f4tBgwZlZwBQwBYvXpydwKd06tQpOwEAACBat26dnQAAAAAAAAAAAAAANBGGewAAAAAAAAAAoMgMHz48dtxxx+wMqJV+/fpFq1atsjMAKFBLlizJTuBTvvKVr2QnAAAARMuWLbMTAKJFixbZCQAAAAAAAAAAAEAtGO4BAAAAAAAAAIAiUl5eHn369MnOgFrbbrvt4oILLsjOAKBALV68ODuBTzEOCQAAFIJNN900OwHAiBgAAAAAAAAAAAA0EYZ7AAAAAAAAAACgiAwbNiy23Xbb7AyokxNPPNEQAADrtXDhwuwEPmW77bbLTgAAAAAAAAAAAAAAAAAAqDXDPQAAAAAAAAAAUCTatWsXP//5z7MzoM622GKLGDNmTHYGAAXovffey07gU7bZZhtjewAAQLpNNtkkOwEAAAAAAAAAAAAAaCIM9wAAAAAAAAAAQJGorKyMtm3bZmfABjnqqKNir732ys4AoMD8/e9/z07gMw444IDsBAAAoMi1bNkyOwEAAAAAAAAAAAAAaCIM9wAAAAAAAAAAQBHYeeed46c//Wl2Bmywli1bxsiRI7MzACgwb775ZnYCn7HnnntmJwAAAAAAAAAAAAAAAAAA1IrhHgAAAAAAAAAAKALDhw+PNm3aZGfARvnBD34Q3//+97MzACggL7zwQnYCn/G1r30tOwEAAAAAAAAAAAAAAAAAoFYM9wAAAAAAAAAAQDPXpUuXOOqoo7IzYKOVlpZGRUVFdgYABWTOnDmxatWq7Aw+pVOnTtkJAABAkSsrK8tOAAAAAAAAAAAAAACaCMM9AAAAAAAAAADQzI0YMSJatmyZnQH1Yt99943jjz8+OwOAAvLee+9lJ/ApHTp0yE4AAACKnJ+HAwAAAAAAAAAAAAC1ZbgHAAAAAAAAAACasX333TcOOeSQ7AyoV+eee252AgAFZNGiRdkJfEqbNm2ia9eu2RkAAAAAAAAAAAAAAAAAAF/IcA8AAAAAAAAAADRjFRUV0aJFi+wMqFe77rprnHXWWdkZABSI+fPnZyfwGT169MhOAAAAAAAAAAAAAAAAAAD4QoZ7AAAAAAAAAACgmerZs2ccdNBB2RnQIM4444xo1apVdgYABeDtt9/OTuAz9t577+wEAAAAAAAAAAAAAAAAAIAvZLgHAAAAAAAAAACaqSFDhkRpqVuEaJ523HHHGDFiRHYGAAXgzTffzE7gM77+9a9nJwAAAAAAAAAAAAAAAAAAfCGncgAAAAAAAAAAQDN0xBFHRPfu3bMzoEH16dMn2rVrl50BQLKXXnopO4HP6Ny5c3YCAAAAAAAAAAAAAAAAAMAX2iQ7AAAAAAAAAIDmp6qqKj744IPsDJqRVatWZSdAkzNo0KAoKSnJzoAGteWWW8aFF14YJ510UnYKAImmTZsW1dXVUVpamp3C/9p8883jgAMOiCeffDI7BQAAAAAAAAAAAAAAAACgRoZ7AAAAAAAAAKh38+bNi69+9avZGQBF6/jjj4999tknOwMaxY9//OO45JJL4sUXX8xOASDJihUr4v3334/27dtnp/ApPXr0MNwDAACkWL16dbRu3To7AwAAAAAAAAAAAABoAkqzAwAAAAAAAAAAgPo1cODA7ARoNK1bt47KysrsDACSvfvuu9kJfMaee+6ZnQAAABSpqqqq7AQAAAAAAAAAAAAAoIkw3AMAAAAAAAAAAM1I3759Y/fdd8/OgEZ1yCGHxAEHHJCdAUCit99+OzuBz/jGN76RnQAAAAAAAAAAAAAAAAAA8LkM9wAAAAAAAAAAQDNRWloa/fv3z86ARldWVhZDhw7NzgAg0euvv56dwGd89atfjQ4dOmRnAAAAAAAAAAAAAAAAAADUaJPsAAAAAAAAAAAAoH6cffbZ0blz5+wMSNGjR4845phj4o477shOASDBK6+8kp3AZ5SUlMQRRxwR48aNy06hyBx00EExYcKE7Iyic99998Uvf/nL7AwAgIiIWL16dXYCAAAAAAAAAAAAANBEGO4BAAAAAAAAAIBmoKysLPr27ZudAanOP/98wz0ARerpp5/OTmA9unXrZriHRrfHHnvENttsk51RdL70pS9lJwAA/NPatWuzEwAAAAAAAAAAAACAJqI0OwAAAAAAAAAAANh4w4cPjx133DE7A1J16dIlzjjjjOwMABLMmTMnPvroo+wMPmPPPffMTqAIdezYMTuhKPk7GAAAAAAAAAAAAAAAAGiKDPcAAAAAAAAAAEATV15eHn369MnOgIIwYMCAKCsry84AIMHf//737AQ+o3PnzrHddttlZ1Bkdtppp+yEorRq1arsBACAf/rkk0+yEwAAAAAAAAAAAACAJsJwDwAAAAAAAAAANHHDhg2LbbfdNjsDCkKHDh1ixIgR2RkAJHjjjTeyE/iMsrKy+MlPfpKdQZHZYYcdshOK0urVq7MTAAD+yaggAAAAAAAAAAAAAFBbhnsAAAAAAAAAAKAJa9euXfz85z/PzoCCcsopp8TWW2+dnQFAI3vllVeyE1iP/fffPzuBItOhQ4fshKK0dOnS7AQAgH/6+OOPsxMAAAAAAAAAAAAAgCbCcA8AAAAAAAAAADRhlZWV0bZt2+wMKCjbbLNNjB49OjsDgEY2a9as7ATWo2vXrtkJFJHtt98+2rVrl51RlD744IPsBACAf1q5cmV2AgAAAAAAAAAAAADQRBjuAQAAAAAAAACAJmrnnXeOn/70p9kZUJCOO+646Ny5c3YGAI3oySefjHXr1mVn8Bnbb7999OjRIzuDIrH//vtHSUlJdkZRev/997MTAAD+6eOPP85OAAAAAAAAAAAAAACaCMM9AAAAAAAAAADQRA0fPjzatGmTnQEFqXXr1nHBBRdkZwDQiObPnx/vvfdedgbrcfjhh2cnUCT22GOP7ISitWjRouwEAIB/WrVqVXYCAAAAAAAAAAAAANBEGO4BAAAAAAAAAIAmqEuXLnHUUUdlZ0BBO/TQQ6N79+7ZGQA0ojfffDM7gfXo1q1bdgJFokuXLtkJReudd97JTgAA+KeVK1dmJwAAAAAAAAAAAAAATYThHgAAAAAAAAAAaIJGjBgRLVu2zM6AgtaiRYsYPnx4dgYAjejll1/OTmA9vvGNb0S7du2yMygCu+yyS3ZCUVq7dq3hHgCgoCxfvjw7AQAAAAAAAAAAAABoIgz3AAAAAAAAAABAE7PvvvvGIYcckp0BTcL+++8fRxxxRHYGAI1k5syZ2QmsR8uWLeOkk07KzqCZKy8vj44dO2ZnFKWPPvooOwEA4F+sXLkyOwEAAAAAAAAAAAAAaCIM9wAAAAAAAAAAQBNTUVERLVq0yM6AJqGkpCQGDx6cnQFAI3niiSeyE6hBr169shNo5v7zP/8zNtlkk+yMovTBBx9kJwAA/IuPP/44OwEAAAAAAAAAAAAAaCIM9wAAAAAAAAAAQBPSs2fPOOigg7IzoEnZa6+94tRTT83OAKARzJ49OxYvXpydwXp07do1Nttss+wMmrH99tsvO6FoLVu2LDsBAOBfLFmyJDsBAAAAAAAAAAAAAGgiNskOAAAAAAAAAAAAam/IkCFRWlqanQFNzllnnRXXXXddVFdXZ6cA0MBef/312HrrrbMz+IzNNtssevfuHVdccUV2Cs3Ut771reyEovXBBx9kJwAA/ItFixZlJxSVN954Ix599NHsDCg48+fPz04AAAAAAAAAAAAAasFwDwAAAAAAAAAANBFHHHFEdO/ePTsDmqSdd945hgwZEsOHD89OAaCBvfjii/Htb387O4P16NWrl+EeGkRZWVnsvvvu2RlFy8H4AECh+cc//pGdUFTefvvt6Nu3b3YGAAAAAAAAAAAAAGyQ0uwAAAAAAAAAAACgdgYNGhQlJSXZGdBknXbaaVFeXp6dAUADe/bZZ7MTqEH37t1js802y86gGTriiCN8biVasGBBdgIAwL94/fXXsxMAAAAAAAAAAAAAgCbCcA8AAAAAAAAAADQBxx9/fOyzzz7ZGdCktW/fPkaNGpWdAUADe+ihh2LdunXZGaxHmzZtom/fvtkZNEPf/e53sxOK2vz587MTAAD+xdy5c6Oqqio7AwAAAAAAAAAAAABoAgz3AAAAAAAAAABAEzBw4MDsBGgWTjzxxOjYsWN2BgANaP78+fHOO+9kZ1CDww47LDuBZmi//fbLTihq8+bNy04AAPg/Pvroo+wEAAAAAAAAAAAAAKAJMNwDAAAAAAAAAAAFrl+/frH77rtnZ0Cz0KZNmxg9enR2BgANbM6cOdkJ1GCfffaJzp07Z2fQjHTo0CG+/vWvZ2cUtZdeeik7AQDg/1i2bFl2AgAAAAAAAAAAAADQBBjuAQAAAAAAAACAAlZaWhr9+/fPzqAGS5cujffff/9f/qxduzY7iy/wox/9KPbZZ5/sDAAa0MyZM7MTqMEmm2wSp556anYGzchPf/rT2GSTTbIzitbq1atj1qxZ2RkAAP/Hhx9+mJ0AAAAAAAAAAAAAADQBhnsAAAAAAAAAAKCAnX322dGpU6fsDNZj8eLFsfPOO0f79u3/5c/NN9+cncYX2HTTTWPkyJHZGQA0oMcffzw7gc9xyCGHZCfQjPTs2TM7oagtWrQoOwEAYL0M9zSeNm3aZCcAAAAAAAAAAAAAwAYz3AMAAAAAAAAAAAWqrKws+vXrl51BDW688cZYunTp/3l5RUXFel9OYenZs6fRAIBmbNKkSQ5pLmC77LJLHHbYYdkZNAObbbZZ/Pu//3t2RlFbsGBBdgIAwHotW7YsO6FolJZ6qjIAAAAAAAAAAAAATZe7YQEAAAAAAAAAoECNGDEidthhh+wM1mPhwoUxZMiQ9b5u/vz5cfvttzdyEXVVWloaQ4cOzc4AoAG99NJL2Ql8jpNPPjk7gWbg5JNPjs022yw7o6j94x//yE4AAFiv9957LzuhaLRu3To7AQAAAAAAAAAAAAA2mOEeAAAAAAAAAAAoQOXl5dGnT5/sDGpw/fXXx6pVq2p8fUVFRSxevLgRi9gQXbt2jd69e2dnANBAZsyYkZ3A5zjwwANjxx13zM6giTvkkEOyE4re3LlzsxMAANZr/vz52QlFY9NNN81OAAAAAAAAAAAAAIANZrgHAAAAAAAAAAAK0PDhw6N9+/bZGazHvHnzYvjw4Z/7NosXL45bbrmlkYrYGAMHDozSUrfSATRHU6ZMyU7gc7Rq1Sp+9atfZWfQhG299dbRrVu37Iyi9+qrr2YnAACs19tvv52dUDTatGmTnQAAAAAAAAAAAAAAG8xpAwAAAAAAAAAAUGDatWsXJ554YnYGNbjqqquiqqrqC99uyJAhsXDhwkYoYmN87Wtfi0GDBmVnANAAHnjggVixYkV2Bp/jyCOPzE6gCTv99NOjdevW2RlFb9asWdkJAADr9eabb2YnFA1flwMAAAAAAAAAAADQlBnuAQAAAAAAAACAAjNq1Kho27Ztdgbr8cYbb8RFF11Uq7ddsWJF3HjjjQ0bRL3o27dvtGrVKjsDgHq2Zs2aeOmll7Iz+Bxf+cpX4he/+EV2Bk3UYYcdlp1Q9D755JOYNm1adgYAwHo9++yz2QlFY7PNNstOAAAAAAAAAAAAAIANZrgHAAAAAAAAAAAKSOfOneMnP/lJdgY1uPLKK6O6urrWb19RURHvvvtuAxZRH7785S/HmDFjsjMAaADPPPNMdgJf4Je//GV2Ak1Q9+7dY88998zOKHrz58+v0/dHAACNadmyZfHhhx9mZxSFsrKy6NixY3YGAAAAAAAAAAAAAGwQwz0AAAAAAAAAAFBAhg0bFm3atMnOYD1mz54d48aNq9P7rFmzJsaPH99ARdSnE088MXbcccfsDADq2aRJk7IT+AJ77bVXHH744dkZNDGnnXZalJSUZGcUvbfeeis7AQDgc73//vvZCUXj61//enYCAAAAAAAAAAAAAGwQwz0AAAAAAAAAAFAgunTpEkceeWR2BjX4zW9+s0HvN3LkyJg7d279xlDv2rZtG6NGjcrOAKCe/eEPf4gPP/wwO4Mv0L9//+wEmpDy8vI45JBDsjOIiNdffz07AQDgcy1atCg7oWjstNNO2QkAAAAAAAAAAAAAsEEM9wAAAAAAAAAAQIEYOXJktGzZMjuD9Zg5c2bccMMNG/S+1dXVce2119ZzEQ3h6KOPjr322is7A4B6NmvWrOwEvkD37t2jW7du2Rk0EQMHDozy8vLsDCJi9uzZ2QkAAJ9r4cKF2QlFY/vtt89OAAAAAAAAAAAAAIANYrgHAAAAAAAAAAAKQLdu3eLggw/OzqAGF1xwwUa9/9ixY+O1116rpxoaSsuWLWPEiBHZGQDUs2nTpmUn8AXKyspi0KBB2Rk0Ecccc0x2Av/rr3/9a3YCAMDn+sc//pGdUDQM9wAAAAAAAAAAAADQVBnuAQAAAAAAAACAAlBRUREtWrTIzmA9nnnmmbjzzjs3+nGuuuqqeqihof3gBz+Igw46KDsDgHp09913ZydQC7169Yru3btnZ1DgTj311OjUqVN2BhHx4YcfxjPPPJOdAQDwud54443shKKxww47ZCcAAAAAAAAAAAAAwAYx3AMAAAAAAAAAAMl69uwZPXv2zM5gPdatWxejRo2ql8e6/PLLY/bs2fXyWDScsrKyGDZsWHYGAPVoxowZMXfu3OwMvkBZWVkMGTIkO4MC91//9V/ZCfyvt956KzsBAOALzZo1KzuhaGy//fbZCQAAAAAAAAAAAACwQQz3AAAAAAAAAABAsoqKiigtdStPIfrzn/8cDz30UL093rhx4+rtsWg4++67bxx33HHZGQDUo+nTp2cnUAsHHnigQUtqdPzxx0eXLl2yM/hfr7zySnYCAMAXmjp1alRVVWVnFIVtt902OwEAAAAAAAAAAAAANojTPgAAAAAAAAAAINGPfvSj2G+//bIzWI+qqqoYPXp0vT7m9ddfHzNnzqzXx6RhnHfeedkJANSjJ554IjuBWigtLY3BgwdnZ1Cg+vfvn53Ap/zP//xPdgIAwBdatWpVLFy4MDujKLRv3z7Ky8uzMwAAAAAAAAAAAACgzgz3AAAAAAAAAABAokGDBkVJSUl2Buvx2GOPxaRJk+r9cS+99NJ6f0zq39e//vU466yzsjMAqCcTJkyIlStXZmdQC9/5znfi6KOPzs6gwPTu3Tv23nvv7Aw+ZfLkydkJAAC1Mm/evOyEolBaWhoHHnhgdgYAAAAAAAAAAAAA1JnhHgAAAAAAAAAASHL88cdH165dszNYjzVr1sTIkSMb5LFvvfXWmD59eoM8NvXrjDPOiBYtWmRnAFAPVqxYETNmzMjOoBZKSkpi2LBhUVrqVnf+P2effXZ2Ap+yZMmS+Mtf/pKdAQBQK3//+9+zE4rGnnvumZ0AAAAAAAAAAAAAAHXm2YwAAAAAAAAAAJDknHPOyU6gBhMnTmzQg6gvvvjiWLduXYM9PvVjxx13jMrKyuwMAOrJk08+mZ1ALe26664xZMiQ7AwKxJlnnhm77LJLdgafMmfOnOwEAIBae+ONN7ITisbXvva17AQAAAAAAAAAAAAAqDPDPQAAAAAAAAAAkKBfv36x2267ZWewHqtXr47Bgwc36DXuvvvuePrppxv0GtSPk08+Odq1a5edAUA9mDBhQlRXV2dnUEv9+vWL7bbbLjuDZOXl5TFgwIDsDD7jpZdeyk4AAKi11157LTuhaBjcBAAAAAAAAAAAAKApMtwDAAAAAAAAAACNrLS0NPr375+dQQ3uu+++ePHFFxv8OmPHjjUe0ARsueWWccEFF2RnAFAPXn311Xj55ZezM6ilrbfeOi6++OLsDJJdfPHF8eUvfzk7g8+YOnVqdgIAQK0988wz2QlFo1OnTtkJAAAAAAAAAAAAAFBnhnsAAAAAAAAAAKCRnX322Q6wK1ArV66MioqKRrnWww8/HJMnT26Ua7FxjjnmmOjSpUt2BgD14KmnnspOoA6OPvroOOSQQ7IzSNK1a9f42c9+lp3BZ3zyySdx7733ZmcAANTaiy++GEuXLs3OKApbbLFFdO/ePTsDAAAAAAAAAAAAAOrEcA8AAAAAAAAAADSisrKy6NevX3YGNbjjjjvi9ddfb7TrjRkzJqqqqhrtemyY1q1bx4gRI7IzAKgHt912W3YCdbDJJpvEJZdcEmVlZdkpJPjNb34TrVq1ys7gM1555ZVYsWJFdgYAQJ289dZb2QlFY//9989OAAAAAAAAAAAAAIA6MdwDAAAAAAAAAACNaMSIEbHDDjtkZ7Aey5Yti6FDhzbqNR9//PF47LHHGvWabJhDDz3UoZMAzcDUqVMbdaSPjfe1r30tLrvssuwMGtk555wT++23X3YG6/H8889nJwAA1Nmrr76anVA0vv3tb2cnAAAAAAAAAAAAAECdGO4BAAAAAAAAAIBGUl5eHn369MnOoAYTJkyIefPmNfp1KysrY82aNY1+XeqmrKwshg0blp0BQD2YMmVKdgJ1dPLJJ8d3vvOd7AwaSefOnWPgwIHZGdRg2rRp2QkAAHX20ksvZScUjS5dumQnAAAApGjbtm12AgAAAAAAAAAbyHAPAAAAAAAAAAA0kuHDh0f79u2zM1iPxYsXR0VFRcq1p02bFhMnTky5NnXzne98J44++ujsDAA20u23356dQB21bNkyrrrqqigrK8tOoRH89re/jS233DI7g/X45JNP4r//+7+zMwAA6uyvf/1rdkLR6NChQ+y6667ZGQAAAI1um222yU4AAAAAAAAAYAMZ7gEAAAAAAAAAgEbQrl27OPHEE7MzqMFNN90UixcvTrv+iBEjYvXq1WnXp3ZKSkri/PPPz84AYCM9/vjj8dZbb2VnUEddunSJ6667LjuDBjZkyJA48MADszOowUsvvRTLli3LzgAAqLMnnngiVq1alZ1RFEpKSoyfAwAARalVq1bZCQAAAAAAAABsIMM9AAAAAAAAAADQCEaNGhVt27bNzmA9Fi5cGIMHD05tmDFjRjz44IOpDdTOHnvsEaeffnp2BgAb6cknn8xOYAOccMIJcfzxx2dn0EC6desW55xzTnYGn2P69OnZCQAAG6S6ujrmzp2bnVE0evTokZ0AAADQ6HbYYYfsBAAAAAAAAAA2kOEeAAAAAAAAAABoYJ07d46f/OQn2RnU4Prrr49Vq1ZlZ8Tw4cNj5cqV2RnUwoABA6KsrCw7A4CNcOONN2YnsAHKysrioosuio4dO2anUM9atWoV48ePj9atW2en8DkeeeSR7AQAgA322muvZScUjW9961tRWurpywAAQHHZfvvtsxMAAAAAAAAA2EDufAUAAAAAAAAAgAY2bNiwaNOmTXYG6zFv3rwYPnx4dkZERMyePTvuu+++7Axq4Stf+UrBfN4AsGGmTp0ar7zySnYGG6B9+/Zx6623OgS6mbn99ttj1113zc7gcyxZsiTuv//+7AwAgA02e/bs7ISiscUWW8Rxxx2XnQEAANCodthhh+wEAAAAAAAAADaQZysCAAAAAAAAAEAD6tKlSxx55JHZGdTgqquuiqqqquyMfxo6dGgsX748O4Na+MUvfhFt27bNzgBgIzzyyCPZCWygbt26xfXXX5+dQT0ZOnRoHHbYYdkZfIFnn302OwEAYKNMmTIlO6Go+BofAAAoNttss012AgAAAAAAAAAbyHAPAAAAAAAAAAA0oJEjR0bLli2zM1iPN954Iy666KLsjH/x5ptvxp133pmdQS1ss802ccEFF2RnALARfv/73xfUgB918/Of/zzOPPPM7Aw20tFHHx3nnntudga18MQTT2QnAABslEceecRoeiPq3r17dgIAAECj2nbbbbMTAAAAAAAAANhAhnsAAAAAAAAAAKCBdOvWLQ4++ODsDGpw5ZVXRnV1dXbG/1FRURFLly7NzqAWjjvuuOjcuXN2BgAbaNasWTFz5szsDDZQSUlJjBgxInr16pWdwgbq1q1bXHPNNbHppptmp/AF1q5dGxMmTMjOAADYKNXV1TFnzpzsjKLRvn37OO6447IzAAAAGk3Hjh2zEwAAAAAAAADYQIZ7AAAAAAAAAACggVRUVESLFi2yM1iP2bNnx7hx47Iz1mv+/Plx++23Z2dQC5tttlmMGTMmOwOAjXD//fdnJ7ARvvSlL8UNN9wQXbp0yU6hjjp27Bi33XZbtG3bNjuFWvif//mfmD9/fnYGAMBGmzVrVnZCUfnpT3+anQAAANBodtppp+wEAAAAAAAAADaQ4R4AAAAAAAAAAGgAPXv2jJ49e2ZnUIPLLrssO+FzVVRUxOLFi7MzqIUf/vCH0a1bt+wMADbQVVddFcuXL8/OYCNst912cffdd8d2222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoVqWfQCz344IOxYcOG1DM4DwUFBbFs2TLhHgD+o7Zs2RJbtmyJ8ePHx/e///247rrrorS0NPUsuqHKysr4zW9+Ew8++GA0NzenngMAAPy3V155JV555ZUoKCiIxYsXx/XXXx9XXHFFFBUVpZ7GJ1RVVRUvvPBCbNiwIf7yl7+kngMAABdcR0dHbN26NbZu3fpPn581a1aUl5dHaWlpjB49OsaMGRPFxcUxatSoGD58eIwYMSKGDBkSAwcO/JSXfzLnzp2L1tbWaGxsjMbGxmhqaor6+vo4efJkHD9+PGpqauLtt9+O3bt3R2NjY+q5AAAAAAAAAN1Gn4joSj0CAAAAAAAAAAAAAIC8XX/99bF48eJYsGBBDB06NPUcEjp58mS89NJLsX79+vjTn/6Ueg5kbdy4cTF48ODUM7JTW1sbbW1tqWeQ2JAhQ6KkpCT1jOycPXs2ampqUs+AHqt///7xne98J6655pqYO3duXHTRRakn8T+0t7fH/v3749VXX41nnnkmtm3blnoSdGuux9JoamqKEydOpJ6RpYKCAnH1RA4fPhwdHR2pZwDnobCwMMrKymLs2LExevToGDFiRAwbNiyGDx8effv2jaFDh8aAAQOisLAwBg0aFP369YuIiH79+kVhYeG/fO2urq5obW398HFLS0u0t7dHa2trtLW1xdmzZ6O5uTlaWlqioaEh6uvr4/jx43H48GExHgAAAAAAAIB/k3APAAAAAAAAAAAAAADdRlFRUSxZsiS++tWvxuzZs6N///6pJ/EpaGtri+3bt8fmzZtjzZo1blQJAAA9XEFBQdx0002xaNGiuOyyy2LixInRp0+f1LOy09DQEK+//nq8/PLLsWHDhjh69GjqSQAAAAAAAAAAAADdinAPAAAAAAAAAAAAAADd0oQJE+L222+PRYsWxfTp06Nv376pJ/EfdO7cudi9e3e88MIL8fjjj8exY8dSTwIAAC6QGTNmxI033hhz5syJGTNmxMiRI1NP6pU++OCDqKys/DDWs3nz5tSTAAAAAAAAAAAAALo14R4AAAAAAAAAAAAAALq9yZMnx7e+9a1YsGBBzJo1KwYMGJB6Ev+Gtra22Lt3b7z44ovxi1/8Impra1NPAgAAEvjKV74SCxcujM9//vNRXl4eY8eOTT2pR6qrq4uDBw/Gnj174s9//nM899xz0dnZmXoWAAAAAAAAAAAAQI8h3AMAAAAAAAAAAAAAQI8yevTouPXWW2P+/Pkxe/bsGDlyZOpJ/Av19fWxc+fOePHFF+Ppp5+OxsbG1JMAAIBuZsaMGbFw4cKoqKiI8vLymDRpUgwbNiz1rG6lqakpqqqq4m9/+1u88cYb8cc//jHeeuut1LMAAAAAAAAAAAAAejThHgAAAAAAAAAAAAAAerTrrrsuFi1aFJdddllMmTIlBgwYkHpS1trb22Pfvn3x2muvxZYtW+L5559PPQkAAOiB5s6dG3PmzIlp06ZFWVlZfOYzn4lx48b1+u98H3zwQdTW1sa7774bb7/9duzbty927doVe/bsST0NAAAAAAAAAAAAoNcR7gEAAAAAAAAAAAAAoNcoKiqKG2+8Mb785S/HzJkzY/LkydGvX7/Us3q1jo6OqK6ujt27d8fWrVvj17/+ddTX16eeBQAA9FJz586NioqKmDRpUowfPz5KSkri4osvjjFjxkRRUVH06dMn9cR/qb29Perq6uL48eNx/PjxOHLkSNTU1MShQ4di7969UVlZmXoiAAAAAAAAAAAAQDaEewAAAAAAAAAAAAAA6LWKioria1/7WsybNy+mT58e06ZNi+Li4tSzerSWlpY4cOBAvPnmm7Fjx4743e9+FydOnEg9CwAAIAoLC2P69OkxZcqUKCkpidGjR8dFF10UxcXFMXz48Bg2bFgMHjw4Bg0aFIMHD47+/fvH4MGDo6CgIAoLCz/xeU6fPh1dXV1x9uzZaGtri9OnT8fp06ejpaUlTp8+Ha2trdHU1BQnTpyIurq6eP/99+PIkSNRXV0d1dXVF/AdAAAAAAAAAAAAAOB8CPcAAAAAAAAAAAAAAJCVWbNmxfz582PGjBlRXl4eEyZMiFGjRqWe1S21tLTE4cOH48CBA/HWW2/Fq6++Gi+//HLqWQAAABdM3759Y+LEiR85VldXF42NjWkGAQAAAAAAAAAAAHDBCPcAAAAAAAAAAAAAAJC9srKy+NKXvhTTpk2Lz372szFhwoQYN25cjBw5Mvr06ZN63gXX2toaR44ciffeey8OHToU+/bti+3bt8frr7+eehoAAAAAAAAAAAAAAAAAXBDCPQAAAAAAAAAAAAAA8DGKi4vj8ssvj0svvTRKS0ujpKQkxowZE6NHj45Ro0ZFcXFx6omfyLlz56K+vj4aGhri/fffj6NHj0ZNTU0cPnw4du3aFZWVlaknAgAAAAAAAAAAAAAAAMCnSrgHAAAAAAAAAAAAAAD+TUVFRVFeXh4TJkz4SNSnqKgohg0bFkOHDo2hQ4fGkCFDorCwMAYNGhT9+/eP/v37x6BBg6JPnz6f+FxdXV1x+vTp6OjoiDNnzkRbW1u0trbGqVOnorW1NVpaWqKpqSnq6uqioaEh6urqoqamJg4ePBgHDhy4gO8CAAAAAAAAAAAAAAAAAPQ8wj0AAAAAAAAAAAAAAJBYWVnZxz7X0tISx44d+xTXAAAAAAAAAAAAAAAAAEDvJ9wDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFYKUg8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgE+TcA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWRHuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArwj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZEW4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICsCPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkBXhHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyItwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFaEewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIinAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFkR7gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK8I9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRFuAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArAj3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAV4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsiLcAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBWhHsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyIpwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZEe4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICvCPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkRbgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKwI9wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQFeEeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALIi3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAVoR7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMiKcA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWRHuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArwj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZEW4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICsCPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkBXhHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyItwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFaEewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIinAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFkR7gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK8I9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRFuAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArAj3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAV4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsiLcAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBWhHsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyIpwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZEe4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICvCPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkRbgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKwI9wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQFeEeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALIi3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAVoR7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMiKcA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWRHuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArwj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZEW4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICsCPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkBXhHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyItwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFaEewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIinAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFkR7gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK8I9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRFuAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArAj3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAV4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsiLcAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBWhHsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyIpwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZEe4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICvCPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkRbgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKwI9wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQFeEeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALIi3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAVoR7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMiKcA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWRHuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArwj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZEW4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICsCPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkBXhHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyItwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFaEewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIinAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFkR7gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK8I9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRFuAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArAj3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAV4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsiLcAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBWhHsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyIpwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZEe4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICvCPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkRbgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKwI9wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQFeEeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALIi3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAVoR7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMiKcA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWRHuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArwj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZEW4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICsCPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkBXhHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyItwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFaEewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIinAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFkR7gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK8I9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRFuAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArAj3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAV4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsiLcAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBWhHsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyIpwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZEe4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICvCPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkRbgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKwI9wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQFeEeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALIi3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAVoR7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMiKcA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWRHuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArwj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZEW4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICsCPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkBXhHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyItwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQFaEewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIinAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFkR7gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK8I9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRFuAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACArAj3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJAV4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsiLcAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBW/guPa8fbi/a0LQAAAABJRU5ErkJggg=="
					), aD8(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aD8(8,
					"googleplay", 3,
					"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"
					), aD8(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aD8(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aD8(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aD8(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aD8(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aD8(14, "bestPlayer", 5,
					"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"
					), aD8(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aD8(16, "apple", 3,
					"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"
					), aD8(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aD8(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aD8(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aD8(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aD8(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aD8(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(e0) {
		return canvas[e0]
	}, this.aCj = function(name) {
		for (var a7 = z0.length - 1; 0 <= a7; a7--)
			if (z0[a7] === name) return canvas[a7];
		return aD2
	}, this.sJ = function() {
		return aD1 <= 0
	}, this.aD4 = function() {
		aD1 = 0, aD5()
	}
}

function cN() {
	var aDH, aDI, aDJ, aDK, aDL, aDM, aDN, aDO, aDP, aDQ, aDF = [
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
		aDG = [
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

	function aDW(iu, mG) {
		for (var a7 = iu; a7 < mG; a7++) aDH[a7] = 4 * bH.dl(64 * au.random(), au.value(100)), aDI[a7] = 4 * bH.dl(64 * au.random(), au.value(100)), aDJ[a7] = 4 * bH.dl(64 * au.random(), au.value(100))
	}

	function aDV(iu, mG) {
		for (var colorsData = a9.data.colorsData, a7 = iu; a7 < mG; a7++) {
			var f0 = colorsData[a7];
			aDH[a7] = 4 * (f0 >> 12), aDI[a7] = 4 * (f0 >> 6 & 63), aDJ[a7] = 4 * (63 & f0)
		}
	}

	function aDh(eC, aDj) {
		a9s[eC] = 0, a9s[eC + 1] = 0, a9s[eC + 2] = aDj, a9s[eC + 3] = 0, aDk(eC)
	}

	function aDk(eC) {
		var ef;
		bX.mO || (ef = aY.wo(eC), eC = aY.wp(eC), bX.mO = ef >= bW.a9r[0] && ef <= bW.a9r[2] && eC >= bW.a9r[1] && eC <= bW.a9r[3])
	}
	this.ea = new Int32Array(4), this.dV = function() {
		var ea = this.ea;
		ea[0] = -4 * bO.ej, ea[1] = 4, ea[2] = -ea[0], ea[3] = -ea[1]
	}, this.dU = function() {
		if (aDH = new Uint8Array(a9.eV), aDI = new Uint8Array(a9.eV), aDJ = new Uint8Array(a9.eV), aDK = new Uint8Array(a9.eV), aDL = new Uint8Array(a9.eV), aDM = new Uint8Array(a9.eV), aDN = new Uint8Array(a9.eV), aDO = new Uint8Array(a9.eV),
			aDP = new Uint8Array(a9.eV), aDQ = new Uint8Array(a9.eV), this.a6V = new Uint8Array(a9.eV), a9.ie)
			for (var a7 = a9.eV - 1; 0 <= a7; a7--) {
				var et = bc.k4[bc.eW[a7]],
					kP = bH.dl((aDG[et][3] + 1) * au.random(), au.value(100));
				aDH[a7] = aDF[et][0] + kP * aDG[et][0], aDI[a7] = aDF[et][1] + kP * aDG[et][1], aDJ[a7] = aDF[et][2] + kP * aDG[et][2]
			} else 0 === a9.data.colorsType ? a9.data.selectableColor ? (aDV(0, a9.je), aDW(a9.je, a9.eV)) : aDW(0, a9.eV) : aDV(0, a9.eV);
		! function() {
			var a7, eb;
			for (a7 = a9.eV - 1; 0 <= a7; a7--) eb = bH.dl(aDH[a7] + aDI[a7] + aDJ[a7], 3), aDH[a7] += aDc(eb - aDH[a7], 2), aDI[a7] += aDc(eb - aDI[a7], 2), aDJ[a7] += aDc(eb - aDJ[a7], 2), aDH[a7] -= aDH[a7] % 4, aDI[a7] -= aDI[a7] % 4, aDJ[
				a7] -= aDJ[a7] % 4
		}(),
		function() {
			for (var a7 = a9.eV - 1; 0 <= a7; a7--) aDH[a7] += bH.dl(a7, 128), aDI[a7] += bH.dl(a7 % 128, 32), aDJ[a7] += bH.dl(a7 % 32, 8), aDK[a7] = a7 % 8
		}(), this.aDZ(),
			function() {
				for (var a7 = a9.eV - 1; 0 <= a7; a7--) aDL[a7] = aDH[a7] < 32 ? aDH[a7] + 32 : aDH[a7] - 32, aDM[a7] = aDI[a7] < 32 ? aDI[a7] + 32 : aDI[a7] - 32, aDN[a7] = aDJ[a7] < 32 ? aDJ[a7] + 32 : aDJ[a7] - 32
			}(),
			function() {
				for (var a7 = a9.eV - 1; 0 <= a7; a7--) aDO[a7] = 235 < aDH[a7] ? aDH[a7] - 20 : aDH[a7] + 20, aDP[a7] = 235 < aDI[a7] ? aDI[a7] - 20 : aDI[a7] + 20, aDQ[a7] = 235 < aDJ[a7] ? aDJ[a7] - 20 : aDJ[a7] + 20
			}()
	}, this.a5X = function(player) {
		var g = bK.f8;
		return g[0] = aDH[player], g[1] = aDI[player], g[2] = aDJ[player], g
	}, this.aDZ = function() {
		for (var a7 = a9.eV - 1; 0 <= a7; a7--) this.a6V[a7] = aDH[a7] + aDI[a7] + aDJ[a7] < 280 ? 0 : 1
	}, this.wo = function(eC) {
		return bH.dl(eC, 4) % bO.ej
	}, this.wp = function(eC) {
		return bH.dl(eC, 4 * bO.ej)
	}, this.wO = function(ef, eh) {
		return Math.floor(4 * (eh * bO.ej + ef))
	}, this.we = function(eC) {
		var ea = this.ea;
		return this.aDd(eC + ea[0]) || this.aDd(eC + ea[1]) || this.aDd(eC + ea[2]) || this.aDd(eC + ea[3])
	}, this.ex = function(eC) {
		var ea = this.ea;
		return this.ed(eC + ea[0]) || this.ed(eC + ea[1]) || this.ed(eC + ea[2]) || this.ed(eC + ea[3])
	}, this.wc = function(eC, player) {
		var ea = this.ea;
		return this.aDe(eC + ea[0], player) || this.aDe(eC + ea[1], player) || this.aDe(eC + ea[2], player) || this.aDe(eC + ea[3], player)
	}, this.zW = function(player) {
		return player < a9.je && 2 !== ac.a1z[player]
	}, this.g8 = function(eC) {
		return 208 <= a9s[eC + 3]
	}, this.wj = function(player, eC) {
		return this.g8(eC) && this.aDf(player, eC)
	}, this.aDf = function(player, eC) {
		return player === this.eQ(eC)
	}, this.aDg = function(eC) {
		return 208 <= a9s[eC + 3] && a9s[eC + 3] < 224
	}, this.ip = function(eC) {
		return 224 <= a9s[eC + 3] && a9s[eC + 3] < 248
	}, this.wd = function(eC) {
		for (var ea = this.ea, a7 = 3; 0 <= a7; a7--)
			if (this.h1(eC + ea[a7])) return !0;
		return !1
	}, this.eT = function(eC) {
		return this.g8(eC) || this.eP(eC)
	}, this.h1 = function(eC) {
		return 0 === a9s[eC + 3] && 2 === a9s[eC + 2]
	}, this.eP = function(eC) {
		return 0 === a9s[eC + 3] && 1 === a9s[eC + 2]
	}, this.vR = function(eC) {
		return 0 === a9s[eC + 3] && 3 === a9s[eC + 2]
	}, this.ed = function(eC) {
		return 0 === a9s[eC + 3] && 5 <= a9s[eC + 2]
	}, this.aDd = function(eC) {
		return 0 === a9s[eC + 3] && 3 <= a9s[eC + 2]
	}, this.eG = function(eC) {
		return a9s[eC + 2] - 5
	}, this.aDe = function(eC, player) {
		return this.eP(eC) || this.g8(eC) && player !== this.eQ(eC)
	}, this.eQ = function(eC) {
		return a9s[eC] % 4 * 128 + a9s[eC + 1] % 4 * 32 + a9s[eC + 2] % 4 * 8 + a9s[eC + 3] % 8
	}, this.wk = function(eC) {
		aDh(eC, 1)
	}, this.aDi = function(eC) {
		aDh(eC, 2)
	}, this.wP = function(eC, player) {
		a9s[eC] = aDH[player], a9s[eC + 1] = aDI[player], a9s[eC + 2] = aDJ[player], a9s[eC + 3] = 208 + aDK[player], aDk(eC)
	}, this.g3 = function(eC, player) {
		a9s[eC] = aDL[player], a9s[eC + 1] = aDM[player], a9s[eC + 2] = aDN[player], a9s[eC + 3] = 224 + aDK[player], aDk(eC)
	}, this.iq = function(eC, player) {
		a9s[eC] = aDO[player], a9s[eC + 1] = aDP[player], a9s[eC + 2] = aDQ[player], a9s[eC + 3] = 248 + aDK[player], aDk(eC)
	}
}

function cl() {
	var e0 = 0,
		aDl = new Uint16Array(32);

	function remove(a3d) {
		var a7;
		for (e0 -= 2, a7 = a3d; a7 < e0; a7 += 2) aDl[a7] = aDl[a7 + 2], aDl[a7 + 1] = aDl[a7 + 3]
	}
	this.dU = function() {
		e0 = 0
	}, this.iS = function() {
		var a7, il, hu;
		if (0 !== e0)
			if (0 === ac.lV[a9.eI] || aZ.aDm(a9.eI) === aZ.fe(a9.eI)) e0 = 0;
			else
				for (a7 = e0 - 2; 0 <= a7; a7 -= 2)(il = aDl[a7]) < a9.eV && 0 === ac.lV[il] ? remove(a7) : (hu = aDl[a7 + 1], (il >= a9.eV && aDn(a9.eI) || il < a9.eV && aDo(a9.eI, il)) && (b4.gv.h6(hu, il), remove(a7)))
	}, this.h8 = function(il, hu) {
		! function(il, hu) {
			var a7;
			for (a7 = 0; a7 < e0; a7 += 2)
				if (aDl[a7] === il) return aDl[a7 + 1] = Math.min(aDl[a7 + 1] + hu, 1023), 1;
			return
		}(il, hu) && 32 !== e0 && (aDl[e0] = il, aDl[e0 + 1] = hu, e0 += 2)
	}
}

function cO() {
	function aDv(player) {
		var dk;
		b6.fu.a21(player) && (dk = ac.ga[player] - ac.a25[player] + aZ.aDx(player), bZ.fy(player, Math.abs(dk), dk < 0 ? 18 : 12)), ac.ga[player] = 0, ac.a25[player] = 0
	}

	function aE4() {
		aT.show(!1, !1, !1, !0), aS.a94(), bN.yP.z9()
	}

	function aDs(player, aE3) {
		for (var a7 = aE3.length - 1; 0 <= a7; a7--) aZ.aE6(aE3[a7], player)
	}

	function aDu(player) {
		for (var i9 = ac.i9, iA = ac.iA, iB = ac.iB, iC = ac.iC, ly = i9[player], lz = iB[player], ej = bO.ej, gM = ac.gM, ef = iA[player]; ly <= ef; ef--)
			for (var eh = iC[player]; lz <= eh; eh--) {
				var g6 = 4 * (eh * ej + ef);
				aY.wj(player, g6) && (aY.wk(g6), gM[player]--)
			}
		i9[player] = iA[player] = 0, iB[player] = iC[player] = 0
	}
	this.dd = function(g6) {
		var player, dk = ac.gM[g6];
		bJ.s.oe[g6] ? dk && (aDs(player = g6, aZ.aDt(player)), aDu(player), aB.fw(player), aZ.clear(player), aDv(player), function(player) {
			ac.wK[player] = 0, ac.g0[player] = [], ac.gE[player] = [], ac.gF[player] = [], ac.ey[player] = []
		}(player)) : !dk && ac.g0[g6].length || this.aDr(g6)
	}, this.aDr = function(player) {
		! function(player) {
			aY.zW(player) && (ac.zC[player] = be.zS.aE2(), a9.yg++);
			var aE3 = aZ.aDt(player);
			0 === aE3.length ? b6.fu.a20(player) && aE4() : (aDs(player, aE3), function(player, aE3) {
				var aE8 = aE3[function(aE3) {
					var a7, e0 = 0;
					for (a7 = aE3.length - 1; 1 <= a7; a7--) ac.gM[aE3[a7]] > ac.gM[aE3[e0]] && (e0 = a7);
					return e0
				}(aE3)];
				9 === a9.jy && 1 === bc.eW[player] && au.jW(8) && av.aE9(aE8);
				if (b6.fu.a20(player)) aE4(), aJ.yq(aE8, 1);
				else {
					for (var a7 = aE3.length - 1; 0 <= a7; a7--)
						if (b6.fu.a21(aE3[a7]) && (bZ.lR[4 - b6.fu.j1(player)]++, b6.fu.a20(aE3[a7]))) return aJ.yq(player, 0);
					b6.fu.j1(player) || aJ.a4q(0, player, aE8)
				}
			}(player, aE3))
		}(player), aDu(player), aDv(player),
			function(player) {
				ac.lV[player] = 0, ac.g0[player] = null, ac.gE[player] = null, ac.gF[player] = null, ac.ey[player] = null
			}(player), aB.fw(player), aZ.clear(player), bJ.aE0.aE1(player)
	}
}

function cq() {
	var input;

	function aEA(e) {
		(e = e.target.files) && 0 < e.length && b2.aED(e[0])
	}

	function aEH(e) {
		var et = new Image;
		et.onload = aEI, et.src = e.target.result
	}

	function aEI(e) {
		var e = e.target,
			canvas = document.createElement("canvas");
		canvas.width = e.width, canvas.height = e.height;
		canvas.getContext("2d").drawImage(e, 0, 0);
		var e = canvas.width,
			j7 = canvas.height;
		e > bO.aEK || j7 > bO.aEK || e < 10 || j7 < 10 ? (e = "Image dimensions must be between 10 and " + bO.aEK + ".", u.u3 ? u.u3.showToast(e) : alert(e)) : 20 === n.rs && n.aDD().aEI(canvas)
	}
	this.dU = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = aEA
	}, this.a01 = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.aEB = function() {
		input.click()
	}, this.aED = function(aEE) {
		var g = aEE.name.split("."),
			g = g[g.length - 1].toLowerCase();
		"gif" !== g && "jpg" !== g && "jpeg" !== g && "png" !== g || ((g = new FileReader).onload = aEH, g.readAsDataURL(aEE))
	}
}

function co() {
	this.aEM = null, this.dU = function() {
		10 !== a9.jy ? this.aEM = null : this.aEM = new Uint32Array(a9.eV)
	}, this.iS = function() {
		10 === a9.jy && this.qg()
	}, this.qg = function() {
		for (var g6, target, a9F, aEM = this.aEM, yS = ah.jh, a26 = ac.ga, a7 = ah.jf - 1; 0 <= a7; a7--)(g6 = yS[a7]) >= a9.je || (target = Math.max(bH.dl(a26[g6], 4), 2048), a9F = Math.max(aa.a9G(g6), 100), aEM[g6] += bH.dl(a9F * target, 1e4),
			aEM[g6] > target && (aEM[g6] = target))
	}, this.a2B = function(player, im) {
		return im > this.aEM[player] ? (im = this.aEM[player], this.aEM[player] = 0) : this.aEM[player] -= im, im
	}
}

function dQ() {
	function aEO(e) {
		var g, e = e.target.files;
		e && 0 < e.length && (e = e[0], "json" === (g = e.name.split("."))[g.length - 1].toLowerCase()) && ((g = new FileReader).onload = aEW, g.readAsText(e))
	}

	function aEW(e) {
		var aEa;
		a9.ye || (e = JSON.parse(e.target.result), aEa = a9.data = new a30, aEb(e, aEa, "mapType", 0, 2), aEb(e, aEa, "mapProceduralIndex", 0, 255), aEb(e, aEa, "mapRealisticIndex", 0, 255), aEb(e, aEa, "mapSeed", 0, 16383), function(aEZ, aEa, g7,
				max) {
				aEZ = aEZ[g7];
				aEa[g7] = aEh(aEZ) ? aEZ.slice(0, max) : aEa[g7]
			}(e, aEa, "mapName", 20), function(aEZ, aEa, g7) {
				var aEJ;
				2 === aEa.mapType && (!aEh(aEZ = aEZ[g7]) || aEZ.length <= 20 ? aEa.mapType = 0 : ((aEJ = new Image).onload = function() {
					b5.aEi.aEj(aEJ, 1), aEJ.onload = null, aEJ = null
				}, aEJ.src = aEZ))
			}(e, aEa, "canvas"), aEb(e, aEa, "passableWater", 0, 1), aEb(e, aEa, "passableMountains", 0, 1), aEb(e, aEa, "playerCount", 1, 512), aEb(e, aEa, "humanCount", 1, 1), aEb(e, aEa, "selectedPlayer", 0, 0), aEb(e, aEa, "gameMode", 0, 1),
			aEb(e, aEa, "playerMode", 0, 0), aEb(e, aEa, "battleRoyaleMode", 0, 0), aEb(e, aEa, "numberTeams", 0, 8), aEb(e, aEa, "isZombieMode", 0, 0), aEb(e, aEa, "isContest", 0, 0), aEb(e, aEa, "isReplay", 0, 0), aEe(e, aEa, "elo", 16, 2,
				16383), aEb(e, aEa, "colorsType", 0, 1), aEb(e, aEa, "colorsPersonalized", 0, 1), aEe(e, aEa, "colorsData", 32, 512, 262143), aEb(e, aEa, "selectableColor", 0, 1), aEe(e, aEa, "teamPlayerCount", 16, 9, 512), aEb(e, aEa,
				"neutralBots", 0, 1), aEb(e, aEa, "botDifficultyType", 0, 3), aEb(e, aEa, "botDifficultyValue", 0, 15), aEe(e, aEa, "botDifficultyTeam", 8, 9, 15), aEe(e, aEa, "botDifficultyData", 8, 512, 15), aEb(e, aEa, "spawningType", 0, 2),
			aEb(e, aEa, "spawningSeed", 0, 16383), aEe(e, aEa, "spawningData", 16, 1024, 4095), aEb(e, aEa, "selectableSpawn", 0, 1), aEb(e, aEa, "playerNamesType", 0, 2),
			function(aEZ, aEa, g7, size, max) {
				var a1I = aEZ[g7];
				if (Array.isArray(a1I)) {
					for (var a1J = new Array(size), eY = Math.min(a1I.length, size), a7 = 0; a7 < eY; a7++) a1J[a7] = aEh(a1I[a7]) ? a1I[a7].slice(0, max) : "";
					aEa[g7] = a1J
				}
			}(e, aEa, "playerNamesData", 512, 20), aEb(e, aEa, "selectableName", 0, 1), aEb(e, aEa, "aIncomeType", 0, 2), aEb(e, aEa, "aIncomeValue", 0, 255), aEe(e, aEa, "aIncomeData", 8, 512, 255), aEb(e, aEa, "tIncomeType", 0, 2), aEb(e, aEa,
				"tIncomeValue", 0, 255), aEe(e, aEa, "tIncomeData", 8, 512, 255), aEb(e, aEa, "iIncomeType", 0, 2), aEb(e, aEa, "iIncomeValue", 0, 255), aEe(e, aEa, "iIncomeData", 8, 512, 255), aEb(e, aEa, "sResourcesType", 0, 2), aEb(e, aEa,
				"sResourcesValue", 0, 2047), aEe(e, aEa, "sResourcesData", 16, 512, 2047), n.r(), n.s.aEY[0] = 0, n.o(19))
	}

	function aEb(aEZ, aEa, g7, min, max) {
		aEZ = aEZ[g7];
		aEa[g7] = "number" == typeof aEZ && min <= aEZ && aEZ <= max ? Math.floor(aEZ) : aEa[g7]
	}

	function aEh(pA) {
		return "string" == typeof pA
	}

	function aEe(aEZ, aEa, g7, aEk, size, max) {
		var a1I = aEZ[g7];
		if (Array.isArray(a1I)) {
			for (var a1J = new(8 === aEk ? Uint8Array : 16 === aEk ? Uint16Array : Uint32Array)(size), eY = Math.min(a1I.length, size), a7 = 0; a7 < eY; a7++) a1J[a7] = bH.p0(a1I[a7], 0, max);
			aEa[g7] = a1J
		}
	}
	this.aEN = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aEO, input.click()
	}, this.aEP = function() {
		for (var aES, aAN, a5q = a9.data, keys = Object.keys(a5q), aEQ = {}, a7 = 0; a7 < keys.length; a7++) {
			var key = keys[a7];
			a5q[key] instanceof Uint8Array || a5q[key] instanceof Uint16Array || a5q[key] instanceof Uint32Array ? aEQ[key] = Array.from(a5q[key]) : aEQ[key] = a5q[key]
		}
		aEQ.canvas = 2 === aEQ.mapType && aEQ.canvas ? aEQ.canvas.toDataURL() : null, aES = aEQ, aES = JSON.stringify(aES, null, 2), aES = new Blob([aES], {
			type: "application/json"
		}), (aAN = document.createElement("a")).href = URL.createObjectURL(aES), aAN.download = "tt_scenario.json", aAN.click()
	}
}

function cR() {
	var aEl, aEm, size, il, im, id, aEn;

	function aEo(player) {
		return player < a9.je ? aEl * player : aEl * a9.je + aEm * (player - a9.je)
	}
	this.dU = function() {
		aEl = a9.je < 16 ? 12 : 8, aEm = 4;
		var eY = aEo(a9.eV);
		size = new Uint8Array(a9.eV), il = new Uint16Array(eY), im = new Uint32Array(eY), id = new Uint16Array(eY), aEn = new Uint8Array(eY)
	}, this.oz = function(a63, aEp) {
		var aEq = this.gb(a63, aEp),
			aEp = (this.gZ(a63, aEp, 0), b6.fu.fx(a63, aEq));
		bZ.fy(a63, aEq - aEp, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.aE6 = function(player, aEp) {
		var aEt, aEp = function(player, aEp) {
			var a7, kP = aEo(player);
			for (a7 = size[player] - 1; 0 <= a7; a7--)
				if (0 === id[kP + a7] && il[kP + a7] === aEp) return a7;
			return size[player]
		}(player, aEp);
		aEp !== size[player] && (aEt = im[aEo(player) + aEp], this.fz(player, aEp), this.ii(player, aEt, a9.eV))
	}, this.iz = function(player, aEp) {
		for (var kP = aEo(player), a7 = size[player] - 1; 0 <= a7; a7--)
			if (0 === id[kP + a7] && il[kP + a7] === aEp) return !0;
		return !1
	}, this.jI = function(player) {
		return player < a9.je ? size[player] < aEl : size[player] < aEm
	}, this.fe = function(player) {
		return size[player]
	}, this.fk = function(player, a7) {
		return il[aEo(player) + a7]
	}, this.ff = function(player, a7) {
		return id[aEo(player) + a7]
	}, this.aEu = function(player, aEv) {
		for (var kP = aEo(player), a7 = size[player] - 1; 0 <= a7; a7--)
			if (id[kP + a7] === aEv) return a7;
		return -1
	}, this.fl = function(player, a7) {
		return im[aEo(player) + a7]
	}, this.gb = function(player, aEp) {
		for (var kP = aEo(player), a7 = size[player] - 1; 0 <= a7; a7--)
			if (0 === id[kP + a7] && il[kP + a7] === aEp) return im[kP + a7];
		return 0
	}, this.aDx = function(player) {
		for (var kP = aEo(player), f0 = 0, a7 = size[player] - 1; 0 <= a7; a7--) f0 += im[kP + a7];
		return f0
	}, this.aEw = function(player) {
		for (var kP = aEo(player), f0 = 0, a7 = size[player] - 1; 0 <= a7; a7--) 0 === id[kP + a7] && (f0 += im[kP + a7]);
		return f0
	}, this.aDm = function(player) {
		for (var kP = aEo(player), g1 = 0, a7 = size[player] - 1; 0 <= a7; a7--) 0 < id[kP + a7] && g1++;
		return g1
	}, this.gZ = function(player, aEp, aEt) {
		for (var kP = aEo(player), a7 = size[player] - 1; 0 <= a7; a7--) 0 === id[kP + a7] && il[kP + a7] === aEp && (im[kP + a7] = aEt)
	}, this.gK = function(player, a7, aEt) {
		im[aEo(player) + a7] = Math.max(aEt, 0)
	}, this.gL = function(player, a7) {
		aEn[aEo(player) + a7] = 0
	}, this.fm = function(player, a7) {
		return aEn[aEo(player) + a7]
	}, this.ii = function(player, aEt, aEp) {
		b6.fu.a21(aEp) && bZ.lR[6 - b6.fu.j1(player)]++;
		for (var kP = aEo(player), a7 = size[player] - 1; 0 <= a7; a7--)
			if (0 === id[kP + a7] && il[kP + a7] === aEp) return im[kP + a7] += aEt, void(im[kP + a7] = im[kP + a7] > a9.a27 ? a9.a27 : im[kP + a7]);
		il[kP + size[player]] = aEp, im[kP + size[player]] = aEt, id[kP + size[player]] = 0, aEn[kP + size[player]] = 1, size[player]++, player < a9.je && (aEp === a9.eI ? aJ.yq(player, 5) : player === a9.eI && ab.a4s(aEp))
	}, this.aEx = function(player, aEt, aEv) {
		var kP = aEo(player);
		il[kP + size[player]] = 0, im[kP + size[player]] = aEt, id[kP + size[player]] = aEv, aEn[kP + size[player]] = 0, size[player]++
	}, this.fz = function(player, e0) {
		var er, kP;
		if (0 !== size[player])
			for (kP = aEo(player), size[player]--, er = e0; er < size[player]; er++) il[kP + er] = il[kP + er + 1], im[kP + er] = im[kP + er + 1], id[kP + er] = id[kP + er + 1], aEn[kP + er] = aEn[kP + er + 1]
	}, this.aDt = function(player) {
		for (var er, kP, aE3 = [], a7 = ah.jf - 1; 0 <= a7; a7--)
			for (kP = aEo(ah.jh[a7]), er = size[ah.jh[a7]] - 1; 0 <= er; er--)
				if (0 === id[kP + er] && il[kP + er] === player) {
					aE3.push(ah.jh[a7]);
					break
				} return aE3
	}
}

function cS() {
	var aEy;

	function aF0(player) {
		var dz, jJ;
		return b6.fu.j1(player) && player < a9.je ? 0 : (dz = aEy[bH.dl((a9.eV - 1) * ac.gM[player], a9.jO)], bb.jb() < 1920 && (dz = Math.max(bH.dl(100 * (13440 - 6 * bb.jb()), 1920), dz)), jJ = aa.jK(player), ac.ga[player] > jJ && (dz -= bH.dl(2 *
			dz * (ac.ga[player] - jJ), jJ)), Math.min(Math.max(dz, 0), 700))
	}

	function aFC(mA) {
		for (var gM = ac.gM, jh = ah.jh, a7 = ah.jf - 1; 0 <= a7; a7--) {
			var g6 = jh[a7];
			b6.fu.fx(g6, bH.dl(mA * gM[g6], 32))
		}
	}

	function aF9() {
		var vJ = a9.eI;
		bK.f5[0] = ac.ga[vJ] - ac.a25[vJ]
	}

	function aFB(e0) {
		var vJ = a9.eI;
		bZ.lR[e0] += ac.ga[vJ] - ac.a25[vJ] - bK.f5[0]
	}
	this.db = function() {
		for (var eY = a9.eV, a7 = (aEy = new Uint16Array(eY), 0); a7 < eY; a7++) aEy[a7] = 100 + aEz(bH.dl(25600 * a7, eY - 4), 9)
	}, this.dU = function() {
		0 === a9.data.iIncomeType ? this.a9G = aF0 : 1 === a9.data.iIncomeType ? this.a9G = function(player) {
			return bH.dl(a9.data.iIncomeValue * aF0(player), 64)
		} : this.a9G = function(player) {
			return bH.dl(a9.data.iIncomeData[player] * aF0(player), 64)
		}
	}, this.iS = function() {
		if (bb.jb() % 10 == 9 && (function() {
				aF9();
				for (var jh = ah.jh, ga = ac.ga, a7 = ah.jf - 1; 0 <= a7; a7--) {
					var g6 = jh[a7],
						aFA = bH.dl(aa.a9G(g6) * ga[g6], 1e4);
					b6.fu.fx(g6, Math.max(aFA, 1))
				}
				aFB(9)
			}(), function() {
				if (0 !== a9.data.aIncomeType) {
					if (aF9(), 1 === a9.data.aIncomeType)
						for (var gM = ac.gM, jh = ah.jh, mA = a9.data.aIncomeValue, a7 = ah.jf - 1; 0 <= a7; a7--) {
							var g6 = jh[a7];
							b6.fu.fx(g6, bH.dl(mA * gM[g6], 128))
						} else 2 === a9.data.aIncomeType && function() {
							for (var gM = ac.gM, jh = ah.jh, mA = a9.data.aIncomeData, a7 = ah.jf - 1; 0 <= a7; a7--) {
								var g6 = jh[a7];
								b6.fu.fx(g6, bH.dl(mA[g6] * gM[g6], 128))
							}
						}();
					aFB(18)
				}
			}(), bb.jb() % 100 == 99)) {
			if (aF9(), 0 === a9.data.tIncomeType) aFC(32);
			else if (1 === a9.data.tIncomeType) aFC(a9.data.tIncomeValue);
			else
				for (var gM = ac.gM, jh = ah.jh, mA = a9.data.tIncomeData, a7 = ah.jf - 1; 0 <= a7; a7--) {
					var g6 = jh[a7];
					b6.fu.fx(g6, bH.dl(mA[g6] * gM[g6], 32))
				}
			aFB(8)
		}
	}, this.jK = function(player) {
		return Math.min(100 * ac.gM[player], a9.a2w)
	}, this.ns = function(player, nt) {
		b6.fu.fx(nt, bK.f6[0]), bZ.oG(player, nt), ab.aF2(player, bK.f6[0] + bK.f6[1]), ab.oH(nt, bK.f6[0]), b6.fu.op(player)
	}, this.aF3 = function() {
		for (var eY = ah.jf, yS = ah.jh, kP = 0, a26 = ac.ga, a7 = 0; a7 < eY; a7++) kP += a26[yS[a7]];
		return kP
	}, this.aF4 = function(aF5) {
		for (var g6, eY = ah.jf, yS = ah.jh, kP = 0, a26 = ac.ga, eW = bc.eW, a7 = 0; a7 < eY; a7++) eW[g6 = yS[a7]] === aF5 && (kP += a26[g6]);
		return kP
	}
}

function cU() {
	var aFG, aFH, aFI, aFJ, aFK, aFL, aFM, aFN, aFO, aFP, aFQ, aFR, aFS, aFT, aFU, aFV, aFW, aFX, aFZ, aFa, aAH, aFb, aFc, aFj, aFk, aFY = null,
		aFe = 0,
		aFf = !1,
		aFg = new Float32Array(4),
		aFh = 0,
		aFi = !0,
		a8R = 400;

	function pX() {
		aFO = Math.floor(+at.pV), aFP = Math.floor(.5 * aFO)
	}

	function aFl() {
		var a7, aFq;
		for (tU.font = b6.pT.rV(1, 100 * aFQ), aFq = 80 / Math.floor(tU.measureText(b6.zF.xw(a9.a27)).width), tU.font = b6.pT.rV(1, 100), a7 = a9.eV - 1; 0 <= a7; a7--) aFN[a7] = 100 / Math.floor(tU.measureText(ac.zD[a7]).width), aFM[a7] = Math.min(
			aFq, aFN[a7])
	}

	function aFr(a7) {
		return !bf.dp.data[7].value || (a7 = ac.ga[a7]) < 1e6 ? 1 : a7 < 1e7 ? aFg[0] : aFg[Math.min(Math.floor(Math.log10(a7)) - 6, 3)]
	}

	function aFp(hH) {
		aFX = !1, aFW = 1, aFU = aFV = 0, aFi && (b6.pT.textAlign(hH, 1), b6.pT.textBaseline(hH, 1));
		for (var aFx, aFy, a7, aFz, fontSize, aG0, ly = hv / hw, lz = hx / hw, mB = (at.a1 + hv) / hw, mC = (at.j7 + hx) / hw, aG1 = 0 !== ac.lV[a9.eI] && aY.zW(a9.eI), er = ah.jf - 1; 0 <= er; er--) a7 = ah.jh[er], (fontSize = Math.floor(aFT * hw *
			aFr(a7) * aFM[a7] * aFK[a7])) < aFS || aFO <= fontSize || aFI[a7] + aFK[a7] > ly && aFI[a7] < mB && aFJ[a7] + aFL[a7] > lz && aFJ[a7] < mC && (aFx = Math.floor(at.a1 * (aFI[a7] + aFK[a7] / 2 - ly) / (mB - ly)), aFy = Math.floor(at
			.j7 * (aFJ[a7] + aFL[a7] / 2 - lz) / (mC - lz) - .1 * fontSize), aFz = aY.a6V[a7], hH.font = b6.pT.rV(1 === ac.a1z[a7] ? 4 : 1, fontSize), hH.fillStyle = aG2(fontSize, aFz % 2), bf.dp.data[7].value ? aG3(hH, a7, fontSize, aFx,
			aFy, aFz) : aG4(a7, fontSize, aFx, aFy, hH), aFX = !0, 0 < aAH[a7] ? function(aFx, aFy, fontSize, a7, hH) {
			0 === jP[a7] ? af.x9.xn(aFa[a7]) ? (function(aFx, aFy, fontSize, player, o3, hH) {
				for (var vt = aFy, hG = (hH.globalAlpha = aGC(fontSize), aFr(player) * (bf.dp.data[7].value ? aFh : aFN[player])), vs = aFx - .5 * fontSize / hG - .9 * fontSize, es = 0; es < 2; es++) hH.fillText(af.x9.xh(o3), vs, vt),
					vs = aFx + .5 * fontSize / hG + .9 * fontSize;
				hH.globalAlpha = 1
			}(aFx, aFy, fontSize, a7, aFa[a7], hH), aG6(aFx, aFy, fontSize, 0, 0, hH)) : af.x9.xp(aFa[a7]) ? (aGF(aFx, aFy, fontSize, aFa[a7], 0, hH), aG6(aFx, aFy, fontSize, 0, 1, hH)) : (aGF(aFx, aFy, fontSize, aFa[a7], 1, hH), aG6(aFx,
				aFy, fontSize, 1, 0, hH)) : aGF(aFx, aFy, fontSize, aFa[a7], 0, hH)
		}(aFx, aFy, fontSize, a7, hH) : 0 === jP[a7] && aG6(aFx, aFy, fontSize, 0, 0, hH), aG1 && (0 < aAH[a7 + a9.eV] || 0 < aAH[a7 + 2 * a9.eV] || 0 < aAH[a7 + 3 * a9.eV] || 0 < aAH[a7 + 4 * a9.eV]) && function(aFx, aFy, fontSize, a7, hH) {
			var et, g1 = -1;
			for (et = 4; 1 <= et; et--) 0 < aAH[a7 + et * a9.eV] && g1++;
			for (et = 1; et < 5; et++) 0 < aAH[a7 + et * a9.eV] && (! function(aFx, aFy, fontSize, et, a7, aGA, dk, hH) {
				var a1T;
				if (1 === et) {
					a7 = aFa[a7 + a9.eV];
					if (!af.x9.xo(a7)) return function(aFx, aFy, fontSize, o3, aGA, hH) {
						hH.globalAlpha = aGC(fontSize);
						aFx -= .534 * aGA * fontSize, aGA = aFy + 1.59 * fontSize;
						hH.font = b6.pT.rV(0, .785 * fontSize), hH.fillText(af.x9.xh(o3), aFx, aGA), hH.globalAlpha = 1
					}(aFx, aFy, fontSize, a7, aGA, hH);
					a1T = af.vI.xG[a7 - 1024 + af.x9.xS]
				} else a1T = 2 === et ? aH.a3b()[4].canvas[+(dk < 255)] : (3 === et ? aH.a3b()[5] : aH.a3b()[6]).canvas[0];
				a7 = af.vI.xH, dk = .8 * fontSize / a7, et = aFx - .5 * dk * a7 - .534 * aGA * fontSize, aFx = aFy + 1.4 * dk * a7;
				hH.setTransform(dk, 0, 0, dk, et, aFx), hH.globalAlpha = aGC(fontSize), hH.drawImage(a1T, 0, 0), hH.globalAlpha = 1, hH.setTransform(1, 0, 0, 1, 0, 0)
			}(aFx, aFy, fontSize, et, a7, g1, aAH[a7 + et * a9.eV], hH), g1 -= 2)
		}(aFx, aFy, fontSize, a7, hH), (aG0 = aFQ * fontSize) < aFS || (hH.font = b6.pT.rV(1, aG0), aFy += Math.floor(.78 * fontSize), bf.dp.data[7].value ? aG4(a7, aG0, aFx, aFy, hH) : aG3(hH, a7, aG0, aFx, aFy, aFz)))
	}

	function aG4(a7, fontSize, ef, eh, hH) {
		var ___id = a7;
		var showName = a7 < a9.je || !__fx.settings.hideBotNames;
		if (showName) hH.fillText(ac.zD[a7], ef, eh), a7 < a9.je && 2 !== ac.a1z[a7] || (a7 = fontSize / aFN[a7], hH.fillRect(ef - .5 * a7, eh + b6.pT.xi * fontSize, a7, Math.max(1, .1 * fontSize)));
		bf.dp.data[7].value && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (hH.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			hH.fillText(__fx.utils.getDensity(___id), ef, showName ? eh + fontSize : eh)
		);
	}

	function aG3(hH, a7, fontSize, aFx, aFy, aFz) {
		var ___id = a7;
		a7 = b6.zF.xw(ac.ga[a7]);
		aFz >> 1 & 1 ? (hH.lineWidth = .05 * fontSize, hH.strokeStyle = aG2(fontSize, aFz % 2), hH.strokeText(a7, aFx, aFy)) : (1 < aFz && (hH.lineWidth = .12 * fontSize, hH.strokeStyle = aG2(fontSize, aFz), hH.strokeText(a7, aFx, aFy)), hH.fillText(
			a7, aFx, aFy));
		bf.dp.data[7].value || __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (hH.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)), hH.fillText(__fx.utils.getDensity(___id), aFx, aFy + fontSize))
	}

	function aG6(aFx, aFy, fontSize, aGA, aGB, hH) {
		var a4B = .95 * fontSize / aFc,
			aFx = aFx - .5 * a4B * aFb + .8 * aGA * fontSize,
			aGA = aFy - 1.76 * a4B * aFc - (.35 - b6.pT.xi + .7) * aGB * fontSize;
		hH.setTransform(a4B, 0, 0, a4B, aFx, aGA), hH.globalAlpha = aGC(fontSize), hH.drawImage(aX.get(4), 0, 0), hH.globalAlpha = 1, hH.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aGF(aFx, aFy, fontSize, o3, aGA, hH) {
		var hB, vs, a4B;
		hH.globalAlpha = aGC(fontSize), af.x9.xo(o3) ? (hB = af.vI.xH, hH.setTransform(a4B = 1.1 * fontSize / hB, 0, 0, a4B, vs = aFx - .5 * a4B * hB - .8 * aGA * fontSize, a4B = aFy - 1.55 * a4B * hB), hH.drawImage(af.vI.xG[o3 - 1024 + af.x9.xS], 0,
			0), hH.setTransform(1, 0, 0, 1, 0, 0)) : (vs = aFx - .8 * aGA * fontSize, a4B = aFy - (.35 - b6.pT.xi + 1) * fontSize, hH.fillText(af.x9.xh(o3), vs, a4B)), hH.globalAlpha = 1
	}

	function aG2(fontSize, aFz) {
		return aFP <= fontSize && fontSize < aFO ? bc.aGH[aFz] + aGC(fontSize).toFixed(3) + ")" : bc.aGI[aFz]
	}

	function aGC(fontSize) {
		return aFP <= fontSize && fontSize < aFO ? 1 - (fontSize - aFP) / (aFO - aFP) : 1
	}

	function aGR(hG, a1) {
		return 1 + Math.floor(aFR * hG * a1)
	}

	function aGO(a7) {
		for (var left = aFI[a7], er = aFI[a7] - ac.i9[a7] - 1; 0 <= er; er--)
			if (!aGS(a7, --left, aFJ[a7], aFL[a7])) {
				left++;
				break
			} var right = aFI[a7];
		for (er = ac.iA[a7] - aFI[a7] - aFK[a7]; 0 <= er; er--)
			if (!aGS(a7, ++right + aFK[a7] - 1, aFJ[a7], aFL[a7])) {
				right--;
				break
			} var ef = Math.floor((left + right) / 2),
			top = aFJ[a7];
		for (er = aFJ[a7] - ac.iB[a7] - 1; 0 <= er; er--)
			if (!aGT(a7, ef, --top, aFK[a7])) {
				top++;
				break
			} var bottom = aFJ[a7];
		for (er = ac.iC[a7] - aFJ[a7] - aFL[a7]; 0 <= er; er--)
			if (!aGT(a7, ef, ++bottom + aFL[a7] - 1, aFK[a7])) {
				bottom--;
				break
			} var eh = Math.floor((top + bottom) / 2);
		aGL(a7, ef, eh, aFK[a7], aFL[a7]) && (aFI[a7] = ef, aFJ[a7] = eh)
	}

	function aGL(player, ef, eh, a1, j7) {
		eb = Math.floor(.2 * a1);
		for (var eb, et = ef + a1 - 1; ef <= et; et--)
			if (!aGS(player, et, eh, j7)) return;
		for (et = eh + j7 - 1 - (eb = (eb = Math.floor(.25 * j7)) < 1 ? 1 : eb); eh + eb <= et; et--)
			if (!aGT(player, ef, et, a1)) return;
		return 1
	}

	function aGS(player, ef, eh, j7) {
		return aY.wj(player, 4 * (eh * bO.ej + ef)) && aY.wj(player, 4 * ((eh + j7 - 1) * bO.ej + ef))
	}

	function aGT(player, ef, eh, a1) {
		return aY.wj(player, 4 * (eh * bO.ej + ef)) && aY.wj(player, 4 * (eh * bO.ej + ef + a1 - 1))
	}
	this.dU = function() {
		if (a8R = 0 === (a8R = bf.dp.data[11].value) ? 280 : 1 === a8R ? 187 : 112, aFX = !1, aFT = .88, aFQ = .5, aFR = 1.8, aFS = 12 - 3 * bf.dp.data[9].value, aFH = aFG = 0, aFI = new Uint16Array(a9.eV), aFJ = new Uint16Array(a9.eV), aFK =
			new Uint16Array(a9.eV), aFL = new Uint16Array(a9.eV), aFM = new Float32Array(a9.eV), aFN = new Float32Array(a9.eV), aFa = new Uint16Array(2 * a9.eV), aAH = new Uint8Array(5 * a9.eV), aFj = new Uint8Array(a9.eV), aFk = new Uint8Array(
				a9.eV), aFi || (aFY = aFY || document.createElement("canvas")), pX(), aFV = aFU = 0, aFW = 1, bf.dp.data[7].value) {
			var a7, aFq;
			for (aFl(), tU.font = b6.pT.rV(1, 100), aFq = 100 / Math.floor(tU.measureText("900 000").width), a7 = a9.eV - 1; 0 <= a7; a7--) aFM[a7] = Math.min(aFq, 2 * aFN[a7]);
			aFh = aFq, aFg[0] = 100 / (aFq * Math.floor(tU.measureText("5 000 000").width)), aFg[1] = 100 / (aFq * Math.floor(tU.measureText("50 000 000").width)), aFg[2] = 100 / (aFq * Math.floor(tU.measureText("500 000 000").width)), aFg[3] =
				100 / (aFq * Math.floor(tU.measureText("1 000 000 000").width))
		} else aFl();
		! function() {
			var a7;
			for (a7 = a9.eV - 1; 0 <= a7; a7--) ac.gM[a7] < 12 ? (aFI[a7] = ac.i9[a7] + 1, aFJ[a7] = ac.iB[a7] + 1, aFK[a7] = 1, aFL[a7] = 1) : (aFI[a7] = ac.i9[a7], aFJ[a7] = ac.iB[a7] + 1, aFK[a7] = 4, aFL[a7] = 2);
			if (a9.gu)
				for (a7 = 0; a7 < a9.je; a7++) aFK[a7] = 0;
			aFb = aX.get(4).width, aFc = aX.get(4).height
		}()
	}, this.aF2 = function(g6, a59) {
		a59 > 18 * ac.gM[g6] ? (aFk[g6] = 6, aY.a6V[g6] = 2 + aY.a6V[g6] % 2) : (aFj[g6] = 4, (aY.a6V[g6] < 2 || 3 < aY.a6V[g6]) && (aY.a6V[g6] = 6 + aY.a6V[g6] % 2))
	}, this.oH = function(g6, a59) {
		a59 > 6 * ac.gM[g6] ? (aFk[g6] = 6, aY.a6V[g6] = 4 + aY.a6V[g6] % 2) : (aFj[g6] = 4, (aY.a6V[g6] < 4 || 5 < aY.a6V[g6]) && (aY.a6V[g6] = 8 + aY.a6V[g6] % 2))
	}, this.resize = function() {
		pX(), aFi || aFp(aFZ)
	}, this.a2s = function() {
		for (var a7 = 0; a7 < a9.je; a7++) ac.iA[a7] - ac.i9[a7] != 3 || ac.iC[a7] - ac.iB[a7] != 3 ? (aFI[a7] = ac.i9[a7] + (ac.iA[a7] !== ac.i9[a7] ? 1 : 0), aFJ[a7] = ac.iB[a7], aFK[a7] = 1, aFL[a7] = 1) : (aFI[a7] = ac.i9[a7], aFJ[a7] = ac
			.iB[a7] + 1, aFK[a7] = 4, aFL[a7] = 2)
	}, this.p1 = function(player, e0, aFs) {
		! function(player, e0, aFs) {
			player += e0 * a9.eV;
			0 === e0 ? aFa[player] === aFs && 0 < aAH[player] ? aAH[player] = 0 : (aFa[player] = aFs, aAH[player] = af.x9.xn(aFs) ? 255 : 64) : 1 === e0 ? (aAH[player] = 64, aFa[player] = aFs) : aAH[player] = aFs
		}(player, e0, aFs), 2 === a9.ye && this.lH(!0)
	}, this.tT = function() {
		aFi ? aFp(tU) : aFX && (1 !== aFW ? (tU.imageSmoothingEnabled = !0, tU.setTransform(aFW, 0, 0, aFW, 0, 0), tU.drawImage(aFY, -aFU / aFW, -aFV / aFW), tU.setTransform(1, 0, 0, 1, 0, 0), tU.imageSmoothingEnabled = !1) : tU.drawImage(aFY, -
			aFU, -aFV))
	}, this.a7F = function(hg, hj) {
		aFU += hg, aFV += hj
	}, this.a0B = function(hg, hj) {
		ab.a7F(hg, hj)
	}, this.zoom = function(a15, kk, kl) {
		aFW *= a15, aFU = (aFU + kk) * a15 - kk, aFV = (aFV + kl) * a15 - kl
	}, this.lH = function(bo) {
		return !aFi && !(!aFf && !bo && bb.lo < aFe + (1 === aFW && 0 === aFU && 0 === aFV && (a9.a3K() || a9.gu || 2 === a9.ye) ? 1e3 : a8R) || (aFf = !1, aFe = bb.lo, aFp(aFZ), 0))
	}, this.aFv = function(a7) {
		return aFr(a7) * aFM[a7]
	}, this.aFw = function(player) {
		return aFM[player]
	}, this.iS = function() {
		bb.jb() % 10 == 9 && (aFf = a9.a3M() && !a9.a3K()), !a9.a3K() && 4 <= ++aFH && function() {
			var a7, er, es;
			for (aFH = 0, es = 4; 1 <= es; es--)
				for (er = ah.jf - 1; 0 <= er; er--) a7 = ah.jh[er] + es * a9.eV, 0 < aAH[a7] && aAH[a7] < 255 && aAH[a7]--;
			if (2 !== a9.ye)
				for (er = ah.jf - 1; 0 <= er; er--) a7 = ah.jh[er], 0 < aAH[a7] && aAH[a7] < 255 && aAH[a7]--
		}();
		var a7, er, eY = Math.floor(.1 * ah.jf);
		for (eY = (eY = eY < 8 ? 8 : eY) > ah.jf ? ah.jf : eY, a7 = aFG + eY - 1; aFG <= a7; a7--) er = a7 % ah.jf, ! function(a7) {
			var hG = aFr(a7) * aFM[a7];
			0 < aFK[a7] && aGL(a7, aFI[a7], aFJ[a7], aFK[a7], aFL[a7]) ? ! function(a7) {
				for (var ef, eh, a1, j7, eC = !1, es = 0; es < 8; es++) {
					if (a1 = aFK[a7] + 2, j7 = aFL[a7] + 2, a1 > ac.iA[a7] - ac.i9[a7] + 1 || j7 > ac.iC[a7] - ac.iB[a7] + 1) return eC;
					if (ef = aFI[a7] - 1, eh = aFJ[a7] - 1, !aGL(a7, ef, eh, a1, j7)) return eC;
					aFI[a7] = ef, aFJ[a7] = eh, aFK[a7] = a1, aFL[a7] = j7, eC = !0
				}
				return eC
			}(a7) && function(a7, hG) {
				for (var ef, eh, a1, j7, eC = !1, aAP = aFK[a7], mA = 1 + Math.floor(.02 * aAP), es = 1; es < 5; es++) {
					if ((a1 = aAP + es * mA) > ac.iA[a7] - ac.i9[a7] + 1) return eC;
					if ((j7 = aGR(hG, a1)) > ac.iC[a7] - ac.iB[a7] + 1) return eC;
					ef = ac.i9[a7] + Math.floor(Math.random() * (ac.iA[a7] - ac.i9[a7] + 2 - a1)), eh = ac.iB[a7] + Math.floor(Math.random() * (ac.iC[a7] - ac.iB[a7] + 2 - j7)), aGL(a7, ef, eh, a1, j7) && (aFI[a7] = ef, aFJ[a7] = eh, aFK[
						a7] = a1, aFL[a7] = j7, eC = !0)
				}
				return eC
			}(a7, hG) && aGO(a7) : ! function(a7, hG) {
				var j7, ef = aFI[a7] + 1,
					eh = aFJ[a7] + 1,
					a1 = aFK[a7] - 2;
				for (;;) {
					if (a1 < 1) {
						aFK[a7] = 0;
						break
					}
					if (j7 = aGR(hG, a1), aGL(a7, ef, eh, a1, j7)) return aFI[a7] = ef, aFJ[a7] = eh, aFK[a7] = a1, aFL[a7] = j7, 1;
					ef++, eh++, a1 -= 2
				}
				return
			}(a7, hG) ? function(a7, hG) {
				var ef, eh, a1, j7, es, mG, iu = ac.iA[a7] - ac.i9[a7] + 1,
					kz = Math.floor(.02 * iu);
				for (mG = -6 * (kz = kz < 1 ? 1 : kz), es = iu; mG <= es; es -= kz)
					if (j7 = aGR(hG, a1 = 0 < es ? es : 1), ef = ac.i9[a7] + Math.floor(Math.random() * (ac.iA[a7] - ac.i9[a7] + 2 - a1)), eh = ac.iB[a7] + Math.floor(Math.random() * (ac.iC[a7] - ac.iB[a7] + 2 - j7)), aGL(a7, ef, eh, a1,
							j7)) return aFI[a7] = ef, aFJ[a7] = eh, aFK[a7] = a1, aFL[a7] = j7
			}(a7, hG) : aGO(a7)
		}(ah.jh[er]);
		aFG = (aFG += eY) % ah.jf
	}, this.lC = function() {
		var a7, g6, hP, hQ;
		if (bb.jb() % 4 == 1)
			for (a7 = ah.jf - 1; 0 <= a7; a7--) g6 = ah.jh[a7], aY.a6V[g6] < 2 || ((hP = Math.max(aFj[g6] - 1, 0)) === (hQ = Math.max(aFk[g6] - 1, 0)) ? 0 === hP && (aY.a6V[g6] %= 2) : 0 === hQ && aY.a6V[g6] < 6 && (aY.a6V[g6] += 4), aFj[g6] =
				hP, aFk[g6] = hQ)
	}, this.a4s = function(player) {
		var a7 = player + 2 * a9.eV,
			dk = aAH[a7];
		return 0 < dk && (aJ.yl(50, player), aAH[a7] = 0, 255 === dk)
	}, this.a3v = function(player) {
		return 255 === aAH[player + 2 * a9.eV]
	}
}

function cW() {
	var aGU, aGV;
	this.dU = function() {
		aGU =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), aGV =
			"Pestilent Dominion;Wretched Realm;Damned Province;Corrupt Zone;Cursed Territory;Blight Nation;Haunted Expanse;Malevolent State;Ruined Empire;Contaminated Land;Epidemic Domain;Forsaken District;Abandoned Wasteland;Necrotic Enclave;Tainted Domain;Decayed Principality;Infested Region;Malignant Territory;Toxic Dominion;Ravaged Sector;Ghostly Realm;Plagued Commonwealth;Afflicted State;Desolate Nation;Apocalyptic Zone;Radiated Province;Deathly District;Pestilence Haven;Doom Territory;Malefic Expanse;Abandoned State;Cursed Haven;Corroded Zone;Hauntland;Noxious Nation;Infected Enclave;Ruinous Domain;Wasteland Woe;Rotten Principality;Voided Land;Vile Dominion;Catastrophic Region;Eerie Expanse;Desolation State;Forsaken Outpost;Contagion District;Damaged Province;Abhorrent Sector;Accursed Nation;Doomstruck Land;Radiant Ruin;Deathly Enclave;Malefic Dominion;Plague District;Infected Haven;Corrupt State;Pestilent Territory;Razed Realm;Haunted Wasteland;Toxic Sector;Cursed Dominion;Decaying Province;Forsaken Enclave;Ruinous Region;Malignant Haven;Infested State;Ghostly Nation;Tainted Territory;Damned District;Radiated Dominion;Desolate Expanse;Apocalyptic Land;Death Zone;Wretched State;Malevolent Haven;Plagued Nation;Noxious Domain;Voided Territory;Eerie Sector;Accursed Province;Necrotic District;Doom Haven;Haunt Realm;Rotten Nation;Forsaken Territory;Infected State;Abhorrent Expanse;Malignant Land;Toxic Dominion;Ruined District;Ghostland;Cursed Sector;Radiant Nation"
			.split(";");
		for (var a5B = ["K ", " Y", "E ", " Z", " z", " s", "S "], aGW = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], a7 = aGU.length - 1; 0 <= a7; a7--)
			for (var er = a5B.length - 1; 0 <= er; er--) aGU[a7] = aGU[a7].replace(a5B[er], aGW[er]);
		if (__fx.settings.realisticNames) aGU = realisticNames;
	}, this.a37 = function() {
		var eY = a9.je,
			zD = ac.zD,
			a4v = ac.a4v,
			playerNamesData = a9.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < eY)
			for (var a7 = 0; a7 < eY; a7++) zD[a7] = a4v[a7] = "Player " + au.iv(1e3);
		else
			for (a7 = 0; a7 < eY; a7++) zD[a7] = a4v[a7] = playerNamesData[a7]
	}, this.a3 = function() {
		if (9 === a9.jy) {
			for (var dz = au.random(), aGc = aGU, aGd = aGV, eY = aGc.length, kP = a9.data.teamPlayerCount[7], zD = ac.zD, a4v = ac.a4v, a7 = kP - 1; a7 >= a9.je; a7--) zD[a7] = a4v[a7] = aGc[(a7 + dz) % eY];
			for (eY = aGd.length, a7 = kP; a7 < a9.eV; a7++) zD[a7] = a4v[a7] = aGd[a7 % eY]
		} else(2 === a9.data.playerNamesType ? function() {
			for (var eY = a9.eV, zD = ac.zD, a4v = ac.a4v, playerNamesData = a9.data.playerNamesData, a7 = a9.je; a7 < eY; a7++) zD[a7] = a4v[a7] = playerNamesData[a7]
		} : 1 === a9.data.playerNamesType ? function() {
			for (var zD = ac.zD, a4v = ac.a4v, a7 = a9.je; a7 < a9.eV; a7++) zD[a7] = a4v[a7] = "Bot " + au.iv(1e3)
		} : function() {
			for (var aGc = aGU, eY = aGc.length, dz = au.random(), zD = ac.zD, a4v = ac.a4v, a7 = a9.je; a7 < a9.eV; a7++) zD[a7] = a4v[a7] = aGc[(a7 + dz) % eY]
		})()
	}
}

function cp() {
	this.aGe = [], this.aGf = [], this.dU = function() {
		this.aGe = [], this.aGf = []
	}, this.iS = function() {
		0 <= this.aGe.length && this.aGg(this.aGe), 0 <= this.aGf.length && this.aGg(this.aGf)
	}, this.aGg = function(g) {
		for (var es = -1, a7 = g.length - 1; 0 <= a7; a7--)
			if (g[a7].lo--, g[a7].lo <= 0) {
				es = a7;
				break
			} for (a7 = es; 0 <= a7; a7--) g.shift()
	}, this.a3j = function(id, yS, aGh) {
		return this.eu(this.aGe, id, yS, aGh)
	}, this.aGi = function(id, yS, aGh) {
		return this.eu(this.aGf, id, yS, aGh)
	}, this.eu = function(g, id, yS, aGh) {
		return ! function(g, id, yS) {
			var a7, k3;
			for (a7 = yS.length - 1; 0 <= a7; a7--)
				for (k3 = g.length - 1; 0 <= k3; k3--)
					if (g[k3].player === yS[a7] && id === g[k3].id) return 1;
			return
		}(g, id, yS) && (aGh && function(g, id, yS) {
			var a7;
			for (a7 = yS.length - 1; 0 <= a7; a7--) g.push({
				player: yS[a7],
				id: id,
				lo: 384
			})
		}(g, id, yS), !0)
	}
}

function cV() {
	this.a4v = new Array(a9.eV), this.zD = new Array(a9.eV), this.a1z = new Uint8Array(a9.eV), this.lV = new Uint8Array(a9.eV), this.i9 = new Uint16Array(a9.eV), this.iB = new Uint16Array(a9.eV), this.iA = new Uint16Array(a9.eV), this.iC =
		new Uint16Array(a9.eV), this.gM = new Uint32Array(a9.eV), this.wK = new Uint32Array(a9.eV), this.ga = new Uint32Array(a9.eV), this.g0 = null, this.gE = null, this.gF = null, this.ey = null, this.oo = new Uint16Array(a9.eV), this.ia =
		new Uint16Array(a9.eV), this.ib = new Uint16Array(a9.eV), this.zC = new Uint16Array(a9.eV), this.zB = new Uint8Array(a9.eV), this.a25 = new Uint16Array(a9.eV), this.dU = function() {
			this.a4v.fill(""), this.zD.fill(""), this.a1z.fill(0), this.lV.fill(0), this.i9.fill(0), this.iB.fill(0), this.iA.fill(0), this.iC.fill(0), this.gM.fill(0), this.wK.fill(0), this.ga.fill(0), this.g0 = new Array(a9.eV), this.gE =
				new Array(a9.eV), this.gF = new Array(a9.eV), this.ey = new Array(a9.eV), this.oo.fill(0), this.ia.fill(0), this.ib.fill(0), this.zC.fill(0), this.zB.fill(0), this.a25.fill(0)
		}
}

function cn() {
	this.aAf = function(player) {
		aC.lU(player), a9.yg++, ac.a1z[player] = 2, ac.zC[player] = be.zS.aE2(), player === a9.eI && (aT.show(!1, !1), aS.a94(), bN.yP.z9()), ab.a4s(player)
	}
}

function cP() {
	this.jh = null, this.jf = 0, this.a3B = function() {
		for (this.jf = 0, a7 = a9.eV - 1; 0 <= a7; a7--) 0 !== ac.lV[a7] && this.jf++;
		this.jh = new Uint16Array(this.jf);
		for (var eY = 0, a7 = 0; a7 < a9.eV; a7++) 0 !== ac.lV[a7] && (this.jh[eY++] = a7)
	}, this.lB = function() {
		for (var gM = ac.gM, wK = ac.wK, zB = ac.zB, jh = ah.jh, a7 = ah.jf - 1; 0 <= a7; a7--) {
			var dk, g6 = jh[a7];
			gM[g6] <= bH.dl(wK[g6], 4) ? ag.dd(g6) : gM[g6] >= wK[g6] ? (dk = gM[g6], 250 <= (wK[g6] = dk) && (zB[g6] = 1)) : wK[g6] -= Math.max(1, bH.dl(wK[g6] - gM[g6], 1e3))
		}
		this.aGm()
	}, this.aGm = function() {
		for (var lV = ac.lV, jg = this.jh, a9i = this.jf, a7 = a9i - 1; 0 <= a7; a7--) 0 === lV[jg[a7]] && (jg[a7] = jg[--a9i]);
		this.jf = a9i
	}
}

function cX() {
	var aGn;
	this.k8 = null, this.k7 = 0, this.dU = function() {
		aGn = [], 9 === a9.jy && this.aGo()
	}, this.aGo = function() {
		var aGp = [58, 83, 105, 150, 190, 333];
		if (this.k8 = [0, 0, 0, 0, 0, 0], this.k7 = 0, a9.je <= aGp[0]) this.k7 = 256 - bH.dl(256 * a9.je, aGp[0]), this.k8[0] = a9.eV - a9.je - this.k7;
		else
			for (var a7 = 1; a7 < 6; a7++)
				if (a9.je <= aGp[a7]) {
					this.k8[a7 - 1] = 512 - aGp[a7 - 1] - bH.dl((512 - aGp[a7 - 1]) * (a9.je - aGp[a7 - 1]), aGp[a7] - aGp[a7 - 1]), this.k8[a7] = 512 - a9.je - this.k8[a7 - 1];
					break
				} a9.k2 = a9.eV - a9.je, a9.data.numberTeams = (0 < a9.je) + (0 < a9.k2), a9.data.playerCount = a9.vq = a9.je + a9.k2, a9.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, a9.je + this.k7, a9.k2 - this.k7]), a9.a31
		.a35()
	}, this.aE9 = function(player) {
		aGn.push({
			player: player,
			g1: 14 + au.iv(20)
		})
	}, this.iS = function() {
		if (9 === a9.jy)
			for (var a7 = aGn.length - 1; 0 <= a7; a7--) --aGn[a7].g1 <= 0 && (ab.p1(aGn[a7].player, 0, af.x9.xV + af.x9.xj), aGn.splice(a7))
	}
}

function d4() {
	function aH4() {
		return {
			ej: bO.ej,
			ek: bO.ek,
			vF: bO.vF,
			vB: bO.vB,
			vC: bO.vC,
			vG: bO.vG,
			eE: bO.eE,
			mapSeed: bO.mapSeed
		}
	}

	function aGw(a7) {
		return 1 !== a7 && bO.aB2(a7) && a7 !== bO.aH5()
	}
	this.aGr = 22, this.aEK = 4096, this.ej = 0, this.ek = 0, this.vF = null, this.vB = null, this.vC = null, this.vG = null, this.eE = 0, this.mapSeed = 0, this.vD = !1, this.vE = new aGs, this.v5 = new aGt, this.a5H = new aGu, this.dU =
function() {
		this.v5.dU()
	}, this.a3 = function(map, aGv) {
		((map %= this.aGr) !== this.eE || aGw(this.eE) && aGv !== this.mapSeed) && (this.vD = !1, this.vE.aGx(), au.a36(map), this.eE = map, this.mapSeed = aGv, aGw(map) && (bO.v5.v6[map].aGy = aGv), this.aB2(this.eE) ? (map = bO.v5.v6[this.eE],
			this.ej = map.a1, this.ek = map.j7, au.a36(map.aGy), al.a3([this.ej, this.ek, map.la, map.lX]), aH0(), ak.aH1(), al.aH2()) : aGz())
	}, this.aH3 = function(map, aGv) {
		var fG = aH4(),
			map = (this.a3(map, aGv), this.vE.aGx(), aH4());
		return this.ej = fG.ej, this.ek = fG.ek, this.vF = fG.vF, this.vB = fG.vB, this.vC = fG.vC, this.vG = fG.vG, this.eE = fG.eE, this.mapSeed = fG.mapSeed, map
	}, this.a3Q = function(canvas) {
		canvas && this.vF !== canvas && (this.ej = canvas.width, this.ek = canvas.height, this.vF = canvas, this.vB = this.vF.getContext("2d", {
			alpha: !1
		}), this.hE = this.vB.getImageData(0, 0, this.ej, this.ek), this.vG = this.hE.data, this.eE = this.aH5(), this.mapSeed = 0, bO.v5.v6[this.eE].name = a9.data.mapName)
	}, this.eD = function(a7) {
		return 3 === a7 || 7 === a7 || 9 === a7 || 21 === a7 || a7 === this.aH5()
	}, this.aH6 = function(a7) {
		return 2 === a7 || 7 === a7 || 9 === a7 || 20 === a7
	}, this.aH7 = function(a7) {
		return 1 === a7
	}, this.aH5 = function() {
		return this.aGr
	}, this.aB2 = function(a7) {
		return void 0 === this.v5.v6[a7].aH8
	}, this.a3P = function(pL) {
		return 0 === pL.mapType ? pL.mapProceduralIndex < 10 ? pL.mapProceduralIndex : 10 + pL.mapProceduralIndex : 1 === pL.mapType ? pL.mapRealisticIndex + 10 : void 0
	}, this.aB3 = function(pL, aH9) {
		0 === pL.mapType ? pL.mapProceduralIndex = aH9 < 10 ? aH9 : aH9 - 10 : 1 === pL.mapType && (pL.mapRealisticIndex = aH9 - 10)
	}
}

function aGs() {
	function aHI() {
		bO.vE.iS()
	}

	function aHO(g6, aHN) {
		0 < aHN && (bO.vG[g6] += aHN, bO.vG[g6 + 1] += aHN, bO.vG[g6 + 2] += aHN)
	}

	function h1(g6) {
		return bO.vG[g6 + 2] > bO.vG[g6] && bO.vG[g6 + 2] > bO.vG[g6 + 1]
	}
	this.a7R = -1, this.zg = 0, this.aHA = 0, this.aHB = 8, this.aHC = 32, this.aHD = 8, this.aHE = 32, this.aHF = [0, 0], this.a6V = [0, 0, 0, 0], this.i4 = null, this.aHG = !0, this.aHH = !1, this.aGx = function() {
		-1 !== this.a7R && clearTimeout(this.a7R), this.a7R = -1, this.i4 = null, al.aH2()
	}, this.dU = function() {
		7 === aW.zo() || this.aHH || (this.aHG = !0, this.zg = 0, this.aHA = 1, this.aHF = [bO.v5.v6[bO.eE].vY[0], bO.v5.v6[bO.eE].vZ[0]], this.a6V = [bO.v5.v6[bO.eE].aH8[3], bO.v5.v6[bO.eE].aH8[4], bO.v5.v6[bO.eE].aH8[5], bO.v5.v6[bO.eE].aH8[
			6]], this.aHB = bO.v5.v6[bO.eE].aH8[7], this.aHC = bO.v5.v6[bO.eE].aH8[8], this.aHD = bO.v5.v6[bO.eE].aH8[9], this.aHE = bO.v5.v6[bO.eE].aH8[10], this.aHG ? this.a7R = setTimeout(aHI, 16) : this.iS())
	}, this.iS = function() {
		if (8 === aW.zo() && aD.lp()) this.a7R = setTimeout(aHI, 16);
		else {
			if (0 === this.zg) {
				var aGy = au.aHJ();
				if (au.a36(bO.v5.v6[bO.eE].aH8[2]), al.a3([bO.ej, bO.ek, bO.v5.v6[bO.eE].aH8[0], bO.v5.v6[bO.eE].aH8[1]]), au.a36(aGy), this.i4 = al.aHK(), this.zg++, this.aHG) return void(this.a7R = setTimeout(aHI, 16))
			}
			for (var g6, eK, aGy = this.aHG ? 10 : 1e6, aGy = bO.ek - this.aHA - 1 < aGy ? bO.ek - this.aHA - 1 : aGy, wX = this.aHA + aGy, eh = this.aHA; eh < wX; eh++)
				for (var ef = 1; ef < bO.ej - 1; ef++) h1(g6 = 4 * (eK = ef + eh * bO.ej)) ? this.aHL(g6, eK, 1) : (this.aHL(g6, eK, 0), function(ef, eh, g6) {
					return 1 < ef && h1(g6 - 4) || ef < bO.ej - 2 && h1(g6 + 4) || 1 < eh && h1(g6 - 4 * bO.ej) || eh < bO.ek - 2 && h1(g6 + 4 * bO.ej)
				}(ef, eh, g6) && this.aHM(ef, eh));
			this.aHA = wX, this.aHA >= bO.ek - 1 ? (bO.vB.putImageData(bO.vC, 0, 0, 1, 1, bO.ej - 2, bO.ek - 2), bb.dc = !0, this.aGx()) : this.aHG && (this.a7R = setTimeout(aHI, 16))
		}
	}, this.aHL = function(g6, eK, e0) {
		aHO(g6, Math.floor(this.aHF[e0] + this.a6V[e0] * this.i4[eK] / 1e4) - bO.vG[g6])
	}, this.aHP = function(g6, dz, aHQ, e0, a6V) {
		aHO(g6, Math.floor(this.aHF[e0] + (1 - dz / aHQ) * a6V) - bO.vG[g6])
	}, this.aHM = function(kk, kl) {
		for (var g6, dz, aHQ, a7H = kk - this.aHC, aHR = kl - this.aHC, wY = kk + this.aHC, wX = kl + this.aHC, a7H = a7H < 1 ? 1 : a7H, wY = wY > bO.ej - 2 ? bO.ej - 2 : wY, wX = wX > bO.ek - 2 ? bO.ek - 2 : wX, eh = aHR < 1 ? 1 : aHR; eh <=
			wX; eh++)
			for (var ef = a7H; ef <= wY; ef++) h1(g6 = 4 * (ef + eh * bO.ej)) ? (aHQ = this.aHB + (this.aHC - this.aHB) * this.i4[ef + bO.ej * eh] / 1e4, Math.abs(kk - ef) > aHQ || Math.abs(kl - eh) > aHQ || aHQ <= (dz = Math.sqrt((kk - ef) * (
				kk - ef) + (kl - eh) * (kl - eh))) || this.aHP(g6, dz, aHQ, 1, this.a6V[3])) : (aHQ = this.aHD + (this.aHE - this.aHD) * this.i4[ef + bO.ej * eh] / 1e4, Math.abs(kk - ef) > aHQ || Math.abs(kl - eh) > aHQ || aHQ <= (dz = Math
				.sqrt((kk - ef) * (kk - ef) + (kl - eh) * (kl - eh))) || this.aHP(g6, dz, aHQ, 0, this.a6V[2]))
	}
}

function aH0() {
	2 === bO.eE ? aHS([256], [256], [0, 205, 256], [500, 500, 0], [0, 0, 0]) : 7 === bO.eE ? aHS([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0]) : 8 === bO.eE ? aHS([410], [410], [0, 120, 210], [0, 80, 640], [0, 0, 0]) : 9 === bO.eE ? aHS([
		512], [512], [0, 70, 180, 200, 290, 420, 512], [500, 500, 0, 0, 500, 500, 0], [0, 0, 0, 0, 0, 0, 0]) : 20 === bO.eE && aHS([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0])
}

function aHS(aHT, aHU, aHV, aHW, aHX) {
	for (var ef, eh, aHZ, aHa, a15, aHb, hf = aHT.length - 1, aHY = bO.ej + bO.ek, eY = (aHY *= aHY, aHV.length), a7 = eY - 1; 0 <= a7; a7--) aHV[a7] *= aHV[a7];
	var aHc = new Array(eY),
		aHd = new Array(eY),
		aHe = new Array(eY),
		f0 = al.aHK();
	if (void 0 === aHX)
		for (aHX = new Array(eY), a7 = eY - 1; 0 <= a7; a7--) aHX[a7] = 0;
	for (a7 = 1; a7 < eY; a7++) aHc[a7] = aHV[a7] - aHV[a7 - 1], aHd[a7] = aHW[a7] - aHW[a7 - 1], aHe[a7] = aHX[a7] - aHX[a7 - 1];
	for (ef = bO.ej - 1; 0 <= ef; ef--)
		for (eh = bO.ek - 1; 0 <= eh; eh--) {
			for (aHZ = aHY, a7 = hf; 0 <= a7; a7--) aHZ = (aHa = (ef - aHT[a7]) * (ef - aHT[a7]) + (eh - aHU[a7]) * (eh - aHU[a7])) < aHZ ? aHa : aHZ;
			for (a15 = aHW[eY - 1], aHb = aHX[eY - 1], a7 = 1; a7 < eY; a7++)
				if (aHZ < aHV[a7]) {
					a15 = aHW[a7 - 1] + aDc((aHZ - aHV[a7 - 1]) * aHd[a7], aHc[a7]), aHb = aHX[a7 - 1] + aDc((aHZ - aHV[a7 - 1]) * aHe[a7], aHc[a7]);
					break
				} aHf(bO.ej * eh + ef, a15, aHb, f0)
		}
}

function aHf(e0, a15, aHb, f0) {
	a15 < 500 ? f0[e0] = bH.dl(f0[e0] * a15 * 2, 1e3) : 500 < a15 && (f0[e0] += bH.dl(2 * (1e4 - f0[e0]) * (a15 - 500), 1e3)), f0[e0] += bH.dl(aHb * (10 * a15 - f0[e0]), 1e3)
}

function cZ() {
	var aHg;

	function aHq(a1T, hG, ef, eh, globalAlpha) {
		bO.vB.save(), bO.vB.globalAlpha = globalAlpha, bO.vB.imageSmoothingEnabled = !1, bO.vB.scale(hG, hG), bO.vB.drawImage(a1T, Math.floor(ef * (bO.ej / hG - a1T.width)), Math.floor(eh * (bO.ek / hG - a1T.height))), bO.vB.restore()
	}
	this.a5E = 0, this.a5F = 0, this.a5G = 0, this.a5H = 0, this.dU = function() {
		(aHg = new Array(bO.aGr))[0] = {
			a1: [0, 5e3, 8e3, 1e4],
			dz: [220, 250, 255, 220],
			sG: [190, 220, 0, 0],
			es: [170, 200, 0, 0]
		}, aHg[1] = {
			a1: [0, 4e3, 5e3, 6e3, 1e4],
			dz: [25, 0, 100, 0, 25],
			sG: [25, 0, 0, 0, 25],
			es: [25, 0, 0, 0, 25]
		}, aHg[2] = {
			a1: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			dz: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			sG: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			es: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aHg[3] = {
			a1: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			dz: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			sG: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			es: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, aHg[4] = {
			a1: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			dz: [10, 10, 20, 10, 10, 170, 212],
			sG: [20, 20, 60, 100, 100, 110, 170],
			es: [70, 70, 160, 30, 30, 60, 120]
		}, aHg[5] = {
			a1: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			dz: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			sG: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			es: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aHg[6] = {
			a1: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			dz: [10, 10, 60, 255, 255, 200, 200],
			sG: [10, 10, 60, 255, 255, 200, 200],
			es: [80, 80, 255, 255, 255, 200, 200]
		}, aHg[7] = {
			a1: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			dz: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			sG: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			es: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aHg[8] = {
			a1: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			dz: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			sG: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			es: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aHg[9] = {
			a1: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			dz: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			sG: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			es: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aHg[20] = {
			a1: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			dz: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			sG: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			es: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, aHg[21] = {
			a1: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			dz: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			sG: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			es: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.aH1 = function() {
		var aHp, a7, er, fG, hE = function() {
				var hE;
				return bO.vF = document.createElement("canvas"), bO.vF.width = bO.ej, bO.vF.height = bO.ek, bO.vB = bO.vF.getContext("2d", {
					alpha: !1
				}), hE = bO.vB.getImageData(0, 0, bO.ej, bO.ek), bO.vG = hE.data, hE
			}(),
			a1 = aHg[bO.eE].a1,
			dz = aHg[bO.eE].dz,
			sG = aHg[bO.eE].sG,
			es = aHg[bO.eE].es,
			f0 = al.aHK(),
			eY = a1.length - 2,
			aHk = new Array(1 + eY),
			aHl = new Array(1 + eY),
			aHm = new Array(1 + eY),
			aHn = new Array(1 + eY);
		for (er = eY; 0 <= er; er--) aHk[er] = a1[er + 1] - a1[er], aHl[er] = dz[er + 1] - dz[er], aHm[er] = sG[er + 1] - sG[er], aHn[er] = es[er + 1] - es[er];
		for (a7 = bO.ej * bO.ek - 1; 0 <= a7; a7--)
			for (er = eY; 0 <= er; er--)
				if (f0[a7] >= a1[er]) {
					fG = f0[a7] - a1[er], bO.vG[4 * a7] = dz[er] + aDc(aHl[er] * fG, aHk[er]), bO.vG[4 * a7 + 1] = sG[er] + aDc(aHm[er] * fG, aHk[er]), bO.vG[4 * a7 + 2] = es[er] + aDc(aHn[er] * fG, aHk[er]), bO.vG[4 * a7 + 3] = 255;
					break
				} bO.vB.putImageData(hE, 0, 0), bO.aH7(bO.eE) && aX.sJ() && bO.aH7(bO.eE) && (hE = aX.aCj("arena"), aHp = aX.aCj("territorial.io"), aHq(hE, 5, .5, .5, .1), aHq(aHp, 2, .5, .45, .1)), bO.vD = !0, bb.dc = !0
	}, this.a39 = function() {
		for (var g6, ef, eh, aHr, aHs, fI, a5F = 0, a1 = bO.ej, j7 = bO.ek, fG = a1 * j7 * 4, aHt = a9s, aHu = bO.vG, a7 = a1 - 1; 0 <= a7; a7--) aHt[(g6 = a7 << 2) + 2] = aHt[fG - g6 - 2] = 3;
		for (fG = 4 * a1, a7 = j7 - 1; 0 <= a7; a7--) aHt[(g6 = a7 * fG) + 2] = aHt[g6 + fG - 2] = 3;
		for (aHr = a1 - 1, aHs = j7 - 1, eh = 1; eh < aHs; eh++)
			for (fG = eh * a1, ef = 1; ef < aHr; ef++) fI = 1 - (aHu[(g6 = fG + ef << 2) + 2] > aHu[g6 + 1] && aHu[g6 + 2] > aHu[g6]), aHt[g6 + 2] = 2 - fI, a5F += fI;
		this.a5E = (a1 - 2) * (j7 - 2), this.a5H = 0, bO.eD(bO.eE) && (bO.a5H.aHv(), bO.a5H.aHw()), this.a5F = a9.jO = a5F - this.a5H, this.a5G = this.a5E - this.a5F - this.a5H
	}
}

function aGz() {
	var pA;
	10 === bO.eE ? pA =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === bO.eE ? pA =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === bO.eE ? pA =
		"JJAf2uP6y-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeu0-F-n5a_GG4KJGGG3G3G3FFJFmKGJ4JGGGG3GJJFJG3G3G323G--kLPeduaKGFGGGG443JJJJJJG--B-C0FJK__443-BJ-66wmpBnJopCMJpCCCIIIJoopKKICKCBnCKJgooopMIDOzzSzUzbzzUSyTUxxrrrrrP1XcXXX9Hcn9cceemece7cPIoeX0sWWaOWVNTOcTNNcN0V0V5-N0aOa-0V--N50a5Obyc-M0z3TPOdgBnBF0NOpxpMV7-M2mMiLbinz03F0sTx8mfrNT-2l6QEdMwwp-5XX7UMTP1V1GIuvaNn-5Xfxrpw5XV1GNTEfn4-_XvzjAAA9mfA9ed9fpzyTUzyUaUyOX3n59NTKLLKHPPPO_LK4iidea_O_QeideeaLOLLJG3-0eeddOaPO_OKLKzEznzjgnnzBykknByEYnByug-3332ElJ222-2wBko2BnBnBwwzwx-9Y6j6rrrkccc-E5ctEizpJF-aDYgSMGz-X10G6VyjiyuuPeiuzjivh3G3K3G--k-9JGFAPEIZSKBghKSMIpKpCJnI9gcXeccehHccoeXBeoppKIJoghIHnCJnJmemmecmfA9jyTUzzzbbxbV0WaTT-OtWWWV0zxtyUN6yUzSxrSqTUztaN71190V7-5V15VUy--V-lxHEg--33oL-67Dhyu0--3FoL--7ahw-LGYowfzu-0HFMIfF-aHWWwxxxcXX-E8ZrUdfVl--TIJLzSr17V0wcDLvivjysGK3G4XaJb1zppIJpBccccge7fUxx9eocX7cXX6y7Y99Heggen9nJdAHp9Xnp9IIJfICIBdCKKIIMMJme19eXxxp9X9VVfEMMMSBpooe7XCSBomccxxpHcrKKCMHmXXmcxoeX1mpJe70BrMJmVV--gxExIpJcX71nKCJmhCKKCIJoopCKKKHX8KHd9nKrKBj6xrSrKpz6xSMMSrKppwObaP-UzSCAICIKCIKKKCMMKKCpCMMSrrrKpKprUSprMUSMrSprKrSpSrUrUSxpxprSrMrMprSSSppMKprSprrSrxKSUSqUGbqUbbrxrSxrSrKHXXeggeYBnBgmnBnKCrJnKpIKpBnKCMMrSS9chKKIBeX77EIAE5OxIIKKKIIEKSKSKKSKKMKpKpKKSMSSSSrSzxxxzlzzUzzzzzUxrMMMMSxxxrrxrrxxxxzUzOzrbxzrxzzzw6w6yOtttttyUbbyTTTTTTTTTUtzIrzbzbzbba-71-VVV77V--7711-V1-1---51--1-1-V0cN-N5VN1e-ee7-1mc71Xe9fIBcVV0WbyOzxX-VV7VNN5TUzUu1ce9menBecmf9gxHc7c7V-777---50VP-V-N-0WxppSJpr6zyObzttV6rMKpUyObttbryUbzWaP0sNNOX757X97X7ce9XXXXXVc7-V-X7VX5-V7eeA9menA9fBnCBnIIJoorMIRObpIKMJpppSSSMSoeX71-V7777X97c5V-ccWV0VX77--NN55-N--7U5111cXXenBcc7fABgcX117X7c-gf9emV---1--XXXVX7X17579VVV117Xed9XecXX--WV5Uzz6zyUzrSrUUaNUlxtzXXXee1777X1e-5NOy--WV5OttttaTUzyUrxxtzzzlzMUrzzxaUttbbxWzxpSonBmpCCJpCKCIJpJooeACHpprSxaOV577U6sOWV-NNN70WVOWzwTTT5NUxryUba5NNOba1cc79cXX199X-91X99mhIHfJmXgxxxpHe9XccX997c7X0zV--V-N7P6k49V711-111X-77cX79mmeHeccV1mdbn_Uno-DKNVSo1-O9kaiKKzzEzpK-8_SLEzzzeeeV1Hinzjh3-8_UsM9mjtyTVBHk8AfiyvivizpG43G3GG--0OIzV2mnjMaLEBxn29mc4SSpprSSSUprrKprSSpppKMMSrMrxrKIKHhKHfIKKpIBpCIIJpIJnIKpSKJo1AKKpppxprSprpMKphIKhMUSrCKMRpMKrrSMMMMSKUVUxxUxSJe19efAKKUbKnMxKKUKIKUStaSrUMTUrzbzxxrSzzUy5SSKtbqprTprzSxxSrBXe9ghSrMMUyUzzbySKrUKpUSpSUMtV---D--0aN-X9997977VVe9XD-19XX1-9XcXXXXYxzUttzbV-7VX78by0rUSppKMbs5-V77V77X-X71--17-X-7V-0WWVN-6byTOrJepKpSrpxrUSSIKSKSzrrrs797c1711ObUSxxpSSSSSSy5--7997VV6z_rrSrxpSprs-7VX17XeXVXN-11-TUUSxztyTT5ObzrSSrzbtbbtUKzrxrSxzUrzUzShKhMKrxzzzxyMtzqnAA9mgfAAACKICBnKzbbWWbaOtbaOaTUbtyUyTTTOaOa556zyMxrUtaTUzrxrrrzSzxzbta5N0s-ee997cX97cX7cX7X771-V-aT--V17V7X1--V7Xea6ty5T5Mts5--5-550aT55NU_ySxxta5OVD--0VN5NND-N--8a6a5OsN1og55OVVOta-75OTSqhCMrBmhMbbtzzzzta--NN5-8Us0V-N1eD-XN0VOKppraT18zs0SyOUaOa5OaN1-VcX7X5OSpSxpMSra5NNObV5-N19cVc-W_KMSrrxxztzsND--MJpKMrzb_pyTMzUa5-0a5-X-VOIMMMSBnKKSMrMzprzaQBen1ceeXcccempprtzUUSv9mmfMrxzUMxpUUUrzbztrxyOzUxrrMzbWbJppSvC7gmenA9mgggfABgnBf9nBppUrttbzUzCKrSSxzbaUxPfMSKpKnJhRpIAIIKrSzUMMzxztyTObaTOWWaTTTUbzzrza5ObaTOWbbbUrSrStzyUUzbyN--s5T2rs-1XeXeefBn97VfBnIBemf97cXcX7bWV1111c1eiN7f-ABa6s19n77X7g97cceX7f11UzUppry-N0MMAIKzV4UW_rJoppza55-TMSsNObztaOa6KzV-77N-SKKSUzbaOaOyUtzzzyTUbtzxrsOaObtttSraOWaObzzzzz_ptaUbyMzzyUtbVUyUrUzzzzzUzzxyQMzzUzzzeeeeXee9Xeee9eeeefKMIKcf9ggnABemefCCKzrLf99X1fABgeeXAKSSMKxxzUSrSraMRpSxrQA7X7X9oopBo1N9gnIKCIJmmmnKIKJomn7emfMBc51997cenKMUzPmegmfMMSzzyNA9OzzUUIKMUKrKpSSrUrxza6SrMSrrMSrUUxzrxxxrUSSzSSxSUSxSrSSrSrpUrMMUSprrUUUUSpKrySzSrxzzxpzSppprrzUrSpSSCSRprSMKKpMKrMKKCIIIBohIBonAAABnABmgemhBmmmeenBnA9X9ecceeXX7Xemmcemgef9nA7en9kecee9eXeX1-enBkeX7XeXce92VXX99ceACBn9XX77XVVV--X7XemmgeeXXX997VVc75OVeX9hAAA7eeme9eXe9Xeeee9e9ceemmmmf9meegfHenBmfBnA9mgggemnBggfBnIHmmekeeceX9e9cXXXmoeceeXce9Xce99eXnBpCBpSrSrSrMSxzzxyeeeeemkeemgf9pprUzUHmeXXem99e9eceef1dbs17ecepKrMgg9XeXccX-Xeen7cXeenBmnBghCBgnBACCCMCKJohCCMrzzzyUzzzzqognBmnCKprMSMACKpz_wmoogepCKrMSMStUZkeeeeAH15-11-X9hCKMSRomcgpKzprpprs0z_rKppzrSrzSpIKIBgXmprrUKIKKrttpKzSUBomm97ghJpSyUzSzzzUbzzUtrzfAI9epnHceceemegghUUzxzWbzzrbTopMSta5OVOrzzUSKUUxrsOrpxQCSrIIKSxSrSzSrzUrUUtttztUtbzxxMaOV-sOWV5--NNOUzUzxzxzUUrSxrrUSrrSzrrSxSprSppprSpxrrrUUrbbtzrbbrztzzrbbyTT6bSyOa0aTOaOy5T6aTOzbzpxxxxpzUSxs7XESrKyOUrtaOa17zyUaTOaOSxprKCKgnIAAABnBnKppppppJnHnCMJnCCKMSrSSKKICCKKKKppKo-2AYFDB--MPns--j8uk-0TwQV7mzO6ievyyvFGK3F--qNX0zxzxrXce9c-3mKUw-DOJuzw9-lBkNyuuuviyzjJK43G000-OaPJEprzSKMrrkccc-1997-2C8pDo-uPOqwf9mnbbtyTV-2Jzv--5gXT-CCmSUvvGG--5xsy-0D-rE-4b-qzSqX7--sMmk-0lNEV-IZ0nk-tm6EnFN-Rt3BvgF-5ReOUc-otNAvisG30DRoZzUzzzrwP9eeecc-3uJps0eSSKRrMGzrzrrM-V-eXXeX--2fpn--6MiT-0DoXD--6ULD--E2lg--TGhs--wrkk-0uNAV-npyzx-0bkCEF-6EeL6jG-5bpJQAEbaV0nuubvp-0dya3mhrk--BzMKzF28zMOzrMUP779c-gziXufkG-2byBQrcV-J-IhV490elopIKKJzlX70V---2FCPyV-HVlaxpX7-x0_hzvvGGF-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--1u44Wxxxr17cc-CFkqTusBG-2cO5jMcV3oE3YuuiB3FF0P7tWrre9-4GLRUh--19rRV-JN8nk-1B7iV-3OQA--cpNzV8oQxrjjizyyw4KKG44-1d-ezGV-_77wzvGF0eJQZmxL0V-C9jlvF09OI0rTX--JoI0k-PTDyyV-40oK--e5AbV7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL--1qoP6bvVF-qtlNxCKCUa0V7V0xqOguudaNznk-G3-Lvq2RrOc-2N7SOfvlG-2g3LFmnKUrla-7X--Vg031A1AJgoxMSporMSSr-XV--10aNXeV-y7CVQfz0GF0RIcNptae02XdsiLTezvzyyyzjzGGGGGGGGG3--GRVT-QXt0TTyyzwK4GJ-r5K0genCxtwT-V-yBnotTvg-F-RR4WyVBNuCtdejvYyi-knBLOFJJF3BSAjnMSzUbsX9XeV3t0vf_fzv-GF0wZ8bxrOe9--8AQA--HN1m-CZlGTLRwx-cmONzIxrprppKprUyUts-XccX1e97cXc--_7pw029QbgoonJUROV5-V-iJrguik4--mdjY-0tQAdaRk-BiCss-aMQLTjJ--3jUaV4tUqAvjzx5KGF-YB7rwfzwOeVuOXlO_O__Kbj2vizuviyuuvfeveTiviynvYziefiiefvfiYvjB-444G3F-0-2-kJ304K3GGG3JG34--F3GJ-IBbGxS--3yOw8PPd_GaaiC-Eueibvyvx-304--C-2IBzcggmeenCMSrwOaOzKHmnrUSxzTOu--V7VVV9c-yPFVPuf0-F0gt0ZpKs17-aTPhOiBFxRy2ZmgnJeeXAICBnBenJzSrKKrrSSrKpMKJnBnCKMSMIKMrxSOV0V0zzUKSpppSKSEKIESOV-Oa0sOzUrMKSppSUMMkP77V-0a1--VP-17--71--7-UxSrrrrSJpqOtzzOX770hBcX7V5--XXV11cc717X7X9XX999777X7e-_chDLLiiivYEl33G3-Vock29fSpSKonCMU5OaNV-NNX7c2DaQYtPjzvjfiywGK33G3G-0xDlzpUyX9V5PSx2jyuzVGGK-0CFZWnwNV1uXF0_fBo1IJJoSSJnACCCKppSxyUV-117-N711-6evlav4-JpSyQKUSSSpaX517c-c-yg6luPzk3F0CNJQpy9-iumBnaLKKeudOKG_KLKLLLueLOaQEEjEjyinEyzejjnskBnwC043F2-nn2zE2EEoKGKFASOdporHX8CBhzxraUqUzSlzSX77eeeXBc0V-LhikvW--KmlL-EfebDLTskk-YMe-RrMTV7V2uyCCaPEBC-5q1sjK6a7V-A2Ih-Aq892rMUNP7cc-TlB1tv--ANsVBjV2v6d6aOwnp-7qIGAIJlaNV1imQQOPszivwzE8GGGGJ0vODuRhCrppCBpULN5N7NX90WX-6gppqPk-GqSXfBnqOxtaUemec-5nnTs-YPD2wz6re9-3QGmz__bnno-2PJQD-KhKnTaaTn-nF-0Pg_N-aphUzj4FKhhRbmhUrKHohIzMpxrpKKKSMKSKxrU5N5OaUL--X11777Hf9VX-N7--5P-XHXe-0hhca-WqtqMCppppSJp6ltz5NVXV-X17eV0QUJbjJ-nREfwnBwOtbae-IiGGaLPvEk0-Er7eI9nCKpUa0V--1v_ZSfcl--0T7Zc0TwsLPNzgz8K4--MdCP-8jMTqMno-QTv6BfDUs-CjSgLdjBG--rknYV0vttlfW-0CxT2mcUV6Qv4daeffkn3J3B-EUOXBja1CjifiOvd_LdKKaaOaK--nBw8aOFFeeKbfivzjix3En-2Ennz-n-3-2UYTi-bkAQ5LLKaRzgwnznGJ-MWJCRr5NV0wBylcwF0D6jaola--BJZx--NfgX-6lRkav3--sx_2V7RUnUaK_aLLQjzzz-atBrI9mgmnICCpCKLTOaOzs0aNOWV9c-E9stskaiM_-pIJnKoxxzxzrUrrxzUxzSrUSzSpISxzxbxzzzzrzzrzxbzrzUta-0YBe7mf9eeV--P9eee7XXcecVXeXceA9eeeXX-c7T9Bee997n9X-0wqC2ylF4iQ5frxSUzJzqNX9cX97V1wr6EuslF-YbY3xSUaeX--x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === bO.eE ? pA =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === bO.eE ? pA =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === bO.eE ? pA =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === bO.eE ? pA =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === bO.eE ? pA =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === bO.eE ? pA =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === bO.eE && (pA =
			"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV"
			), (new uy).v0(pA)
}

function aGt() {
	this.v6 = null, this.aHx = null, this.aHy = null, this.dU = function() {
		var aHz = [120, 105, 92],
			cos = [12, 12, 60],
			aI0 = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aI1 = [140, 130, 120],
			aI2 = [12, 12, 76],
			aI3 = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aI4 = [130, 117, 106],
			aI5 = [12, 12, 68],
			aI6 = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.v6 = new Array(bO.aGr + 1), __fx.customLobby.setMapInfo(this.v6), this.v6[0] = {
			name: L(126),
			a1: 230,
			j7: 230,
			la: 1e3,
			lX: 2e3,
			aGy: 173
		}, this.v6[1] = {
			name: L(127),
			a1: 800,
			j7: 800,
			la: 100,
			lX: 50,
			aGy: 43
		}, this.v6[2] = {
			name: L(128),
			a1: 512,
			j7: 512,
			la: 128,
			lX: 32,
			aGy: 0
		}, this.v6[3] = {
			name: L(129) + " 1",
			a1: 960,
			j7: 960,
			la: 60,
			lX: 8,
			aGy: 0
		}, this.v6[4] = {
			name: L(130),
			a1: 900,
			j7: 900,
			la: 100,
			lX: 5,
			aGy: 0
		}, this.v6[5] = {
			name: L(131),
			a1: 1e3,
			j7: 1e3,
			la: 100,
			lX: 40,
			aGy: 0
		}, this.v6[6] = {
			name: L(132),
			a1: 1e3,
			j7: 1e3,
			la: 100,
			lX: 20,
			aGy: 0
		}, this.v6[7] = {
			name: L(133),
			a1: 1024,
			j7: 1024,
			la: 128,
			lX: 32,
			aGy: 0
		}, this.v6[8] = {
			name: L(134),
			a1: 820,
			j7: 820,
			la: 200,
			lX: 100,
			aGy: 0
		}, this.v6[9] = {
			name: L(135),
			a1: 1024,
			j7: 1024,
			la: 128,
			lX: 32,
			aGy: 0
		}, this.v6[10] = {
			name: L(136),
			vY: aI1,
			vZ: aI2,
			aH8: aI3
		}, this.v6[11] = {
			name: L(137),
			vY: aI4,
			vZ: aI5,
			aH8: aI6
		}, this.v6[12] = {
			name: L(138),
			vY: aI4,
			vZ: aI5,
			aH8: aI6
		}, this.v6[13] = {
			name: L(139),
			vY: aHz,
			vZ: cos,
			aH8: aI0
		}, this.v6[14] = {
			name: L(140),
			vY: aHz,
			vZ: cos,
			aH8: aI0
		}, this.v6[15] = {
			name: L(141),
			vY: aI1,
			vZ: aI2,
			aH8: aI3
		}, this.v6[16] = {
			name: L(142),
			vY: aI1,
			vZ: aI2,
			aH8: aI3
		}, this.v6[17] = {
			name: L(143),
			vY: aHz,
			vZ: cos,
			aH8: aI0
		}, this.v6[18] = {
			name: L(144),
			vY: aI4,
			vZ: aI5,
			aH8: aI6
		}, this.v6[19] = {
			name: L(145),
			vY: aHz,
			vZ: cos,
			aH8: aI0
		}, this.v6[20] = {
			name: L(146),
			a1: 1024,
			j7: 1024,
			la: 128,
			lX: 32,
			aGy: 0
		}, this.v6[21] = {
			name: L(129) + " 2",
			a1: 940,
			j7: 940,
			la: 80,
			lX: 8,
			aGy: 0
		}, this.v6[bO.aGr] = {
			name: ""
		}, this.aHx = new Uint8Array(12);
		for (var a7 = 0; a7 < 10; a7++) this.aHx[a7] = a7;
		for (this.aHx[10] = 20, this.aHx[11] = 21, this.aHy = new Uint8Array(10), a7 = 0; a7 < 10; a7++) this.aHy[a7] = 10 + a7
	}
}

function aGu() {
	this.aHv = function() {
		for (var g6, ef, fG, aHt = a9s, aHu = bO.vG, a1 = bO.ej, aHr = a1 - 1, aHs = bO.ek - 1, g1 = 0, eh = 1; eh < aHs; eh++)
			for (fG = eh * a1, ef = 1; ef < aHr; ef++) aHu[g6 = fG + ef << 2] === aHu[1 + g6] && aHu[g6] === aHu[2 + g6] && (g1++, aHt[2 + g6] = 4);
		ak.a5H = g1
	}, this.aHw = function() {
		for (var aHt = a9s, a1 = bO.ej, aHr = a1 - 1, aHs = bO.ek - 1, id = 5, eh = 1; eh < aHs; eh++)
			for (var fG = eh * a1, ef = 1; ef < aHr; ef++) {
				var eC = 2 + (fG + ef << 2);
				4 === aHt[eC] && (! function(eC, id) {
					var eY = 1,
						aHt = a9s,
						ea = aY.ea,
						a1I = [eC];
					aHt[eC] = id;
					for (; eY;) {
						for (var a1J = [], a7 = 0; a7 < eY; a7++)
							for (var eN = a1I[a7], eb = 3; 0 <= eb; eb--) {
								var ec = eN + ea[eb];
								4 === aHt[ec] && (aHt[ec] = id, a1J.push(ec))
							}
						eY = (a1I = a1J).length
					}
				}(eC, id), id = Math.max((id + 1) % 256, 5))
			}
	}
}

function a38() {
	(wr = void 0 === wr ? document.createElement("canvas") : wr).width = bO.ej, wr.height = bO.ek, a3C = wr.getContext("2d", {
		alpha: !0
	}), a3D = a9s = null, a3D = a3C.getImageData(0, 0, bO.ej, bO.ek), a9s = a3D.data, b6.pd.vH(a9s)
}

function ca() {
	var f0, a1, j7, max, aI8, lX, aIA, aIB, aIC, aID, aIE, aIF, aIG, aIH, aI9 = 1e4;

	function aIO(aIN, la, eY) {
		var a7;
		for (aIA[0] = aIN, a7 = 1; a7 < eY; a7++) aIA[a7] = aIA[a7 - 1] + la, la = aIA[a7] >= aI9 ? (aIA[a7] = aI9 - 1, -la) : aIA[a7] < 0 ? (aIA[a7] = 0, -la) : (la += 16384 <= au.random() ? lX : -lX) < -aI8 ? -aI8 : aI8 < la ? aI8 : la
	}

	function aIQ(ef, eh, aIR, eY) {
		(aIR ? function(ef, eh, eY) {
			var a7;
			for (a7 = 0; a7 < eY; a7++) f0[eh * a1 + ef + a7] = aIA[a7]
		} : function(ef, eh, eY) {
			var a7;
			for (a7 = 0; a7 < eY; a7++) f0[eh * a1 + ef + a7 * a1] = aIA[a7]
		})(ef, eh, eY)
	}

	function aIU(value, eY) {
		var a7, kz, eC, hU = value - aIA[eY - 1];
		if (0 != hU) {
			for (kz = 1 + bH.dl(Math.abs(hU), eY - 1), kz = hU < 0 ? -kz : kz, aIA[eY - 1] = value, eC = (eC = eY - 1 - bH.dl(Math.abs(hU), Math.abs(kz))) < 1 ? 1 : eY - 2 < eC ? eY - 2 : eC, a7 = eY - 2; eC <= a7; a7--) aIA[a7] += hU - (eY - 1 -
				a7) * kz;
			(hU < 0 ? function(eY) {
				var a7;
				for (a7 = eY - 2; 1 <= a7; a7--) aIA[a7] < 0 && (aIA[a7] = -aIA[a7] - 1)
			} : function(eY) {
				var a7;
				for (a7 = eY - 2; 1 <= a7; a7--) aIA[a7] >= aI9 && (aIA[a7] = 2 * aI9 - aIA[a7] - 1)
			})(eY)
		}
	}

	function aIX(a1I, a1J, eY) {
		for (var a7 = 0; a7 < eY; a7++) a1I[a7] = a1J[a7]
	}

	function aIY(g) {
		for (var a7 = 0; a7 < g.length - 1; a7++) g[a7] = g[a7 + 1] - g[a7];
		g[g.length - 1] = g[g.length - 3]
	}

	function aIZ(a3d, gap, hT) {
		aIB.push(a3d), aIC.push(gap), aID.push(hT)
	}
	this.a3 = function(a2P) {
		! function(a2P) {
			var a7;
			for (a1 = a2P[0], j7 = a2P[1], aI8 = a2P[2], lX = a2P[3], f0 = new Int16Array(a1 * j7), max = j7 < a1 ? a1 : j7, aIA = new Int16Array(max), aIB = [], aIC = [], aID = [], aIE = new Array(a1), aIF = new Array(j7), a7 = a1 - 1; 0 <=
				a7; a7--) aIE[a7] = !1;
			for (a7 = j7 - 1; 0 <= a7; a7--) aIF[a7] = !1;
			aIG = new Int16Array(a1), aIH = new Int16Array(j7)
		}(a2P),
		function(eY) {
			var aIN = au.random() % aI9,
				la = au.random() % (2 * aI8 + 1) - aI8;
			aIO(aIN, la, eY)
		}(max), aIX(aIH, aIA, j7), aIQ(0, 0, !0, a1);
		var ef, eh, a2P = f0[0],
			eY = max,
			la = au.random() % (2 * aI8 + 1) - aI8;
		for (aIO(a2P, la, eY), aIX(aIG, aIA, a1), aIQ(0, 0, !1, j7), aIY(aIG), aIY(aIH), aIO(f0[a1 - 1], aIG[a1 - 1], j7), aIQ(a1 - 1, 0, !1, j7), aIO(f0[a1 * (j7 - 1)], aIH[j7 - 1], a1), aIU(f0[a1 * j7 - 1], a1), aIQ(0, j7 - 1, !0, a1), aIE[a1 -
				1] = aIE[0] = !0, aIF[j7 - 1] = aIF[0] = !0, aIZ(0, a1, !0), aIZ(0, j7, !1), ! function() {
				var aIb, a3d;
				for (;;) {
					if (aIb = function() {
							var a7, aIb = aIB.length - 1;
							for (a7 = aIb - 1; 0 <= a7; a7--) aIC[a7] > aIC[aIb] && (aIb = a7);
							return aIb
						}(), aIC[aIb] < 5) return;
					a3d = aIB[aIb] + bH.dl(aIC[aIb], 2), (aID[aIb] ? function(ef) {
						var eY, aIe, a7, aCA = 0,
							aIf = 0;
						for (; aIf < j7 - 1;) {
							for (a7 = aCA + 1; a7 < j7; a7++)
								if (aIF[a7]) {
									aIf = a7;
									break
								} eY = aIf - aCA + 1, aIO(f0[ef + a1 * aCA], 0 === aCA ? aIG[ef] : aIA[aIe - 1] - aIA[aIe - 2], eY), aIU(f0[aIf * a1 + ef], eY), aIQ(ef, aCA, !1, eY), aIe = eY, aCA = aIf
						}
						aIE[ef] = !0
					} : function(eh) {
						var eY, aIe, a7, aCA = 0,
							aIf = 0;
						for (; aIf < a1 - 1;) {
							for (a7 = aCA + 1; a7 < a1; a7++)
								if (aIE[a7]) {
									aIf = a7;
									break
								} eY = aIf - aCA + 1, aIO(f0[eh * a1 + aCA], 0 === aCA ? aIH[eh] : aIA[aIe - 1] - aIA[aIe - 2], eY), aIU(f0[eh * a1 + aIf], eY), aIQ(aCA, eh, !0, eY), aIe = eY, aCA = aIf
						}
						aIF[eh] = !0
					})(a3d), aIZ(a3d, aIB[aIb] + aIC[aIb] - a3d, aID[aIb]), aIC[aIb] = a3d - aIB[aIb] + 1
				}
			}(), ef = 0; ef < a1; ef++)
			if (!aIE[ef])
				for (eh = 0; eh < j7; eh++) aIF[eh] || ! function(ef, eh) {
					var value = f0[eh * a1 + ef - 1] + f0[(eh - 1) * a1 + ef],
						a5Q = 2;
					aIE[ef + 1] && (a5Q++, value += f0[eh * a1 + ef + 1]);
					aIF[eh + 1] && (a5Q++, value += f0[(eh + 1) * a1 + ef]);
					f0[eh * a1 + ef] = bH.dl(value, a5Q)
				}(ef, eh)
	}, this.aHK = function() {
		return f0
	}, this.aH2 = function() {
		f0 = null
	}
}

function aDc(er, es) {
	return 0 <= er ? bH.dl(er, es) : -bH.dl(-er, es)
}

function jB(f0) {
	return f0 * f0
}

function a4g(er, es) {
	return es < er ? er : es
}

function a9O(er, es) {
	return er < es ? er : es
}

function a6o(er, f0, es) {
	return f0 < er ? er : es < f0 ? es : f0
}

function aIh(f0, eY) {
	for (var et = bH.dl(f0 + 1, 2), a7 = 0; a7 < eY; a7++) et = bH.dl(et + bH.dl(f0, et), 2);
	return et
}

function aEz(f0, eY) {
	return f0 < 1 ? 0 : aIh(f0, eY)
}

function aIi(ly, lz, rz, a6Y, mB, mC, s0, sf) {
	return !(ly + rz <= mB || lz + a6Y <= mC || mB + s0 <= ly || mC + sf <= lz)
}

function aIj(ly, lz, rz, a6Y, mB, mC, s0, sf) {
	return ly <= mB && lz <= mC && mB + s0 <= ly + rz && mC + sf <= lz + a6Y
}

function v8(f0) {
	return Math.floor(!!f0 * (1 + Math.log2(f0 + .5)))
}

function br() {
	this.dl = function(er, es) {
		return Math.floor((er + .5) / es)
	}, this.aIk = function(er, es) {
		return Math.floor(er * (es + .5))
	}, this.sqrt = function(f0) {
		return ~~Math.sqrt(f0 + .5)
	}, this.pow = function(e) {
		return Math.floor(Math.pow(2, e) + .5)
	}, this.p0 = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aIl = function(fG, fI, fK) {
		return Math.max(Math.min(fG, fI), fK)
	}, this.aIm = function(aIn, aIo, ef, eh) {
		ef -= aIn, aIn = eh - aIo, eh = 0;
		return 0 == ef ? eh = 0 <= aIn ? Math.PI : 0 : (eh = Math.atan(aIn / ef), eh += 0 < ef ? .5 * Math.PI : 1.5 * Math.PI), eh
	}, this.log2 = function(f0) {
		return Math.floor(!!f0 * (1 + Math.log2(f0 + .5)))
	}, this.log10 = function(f0) {
		return Math.floor(Math.log10(f0 + .5))
	}, this.aIq = function(aIr, aIs, aIt, aIu, aIv) {
		return aIt - aIv < aIr && aIr < aIt + aIv && aIu - aIv < aIs && aIs < aIu + aIv
	}, this.w8 = function(hN, hO) {
		return hN * hN + hO * hO
	}
}

function d6() {
	this.s = new aIw, this.rs = 0;
	var aIx = new Array(30);

	function aJ1() {
		for (var eY = aIx.length, a7 = 0; a7 < eY; a7++) aIx[a7] = null
	}
	this.dU = function() {
		for (var aIy, aIz = document.body.firstChild; aIz;) {
			if (aIy = aIz.nextSibling, document.body.contains(aIz) && ("DIV" === aIz.tagName || "INPUT" === aIz.tagName || "BUTTON" === aIz.tagName)) try {
				document.body.removeChild(aIz)
			} catch (e) {
				console.log("error 2623: " + e)
			}
			aIz = aIy
		}
	}, this.o = function(e0, aJ0, a2P) {
		void 0 === aJ0 && (aJ0 = this.rs), bb.dc = !0, 0 === e0 && (0 === aW.zo() ? e0 = 5 : u.v.setState(13)), this.r1(), this.rs === e0 && (aJ0 = aIx[e0].aJ0, aIx[e0] = null), this.rs = e0;
		var kP = aIx[e0];
		if (!kP || 4 === e0 || 7 === e0 || 8 === e0 || 9 === e0 || 10 === e0 || 11 === e0 || 13 === e0 || 15 === e0 || 18 === e0 || 20 <= e0 && e0 <= 28) {
			if (0 === e0) return void aJ1();
			1 === e0 ? kP = new aJ2 : 2 === e0 ? kP = new aJ3 : 3 === e0 ? kP = new aJ4 : 4 === e0 || 9 === e0 || 10 === e0 || 11 === e0 || 13 === e0 ? kP = a2P : 5 === e0 ? kP = new aJ5 : 6 === e0 ? kP = new aJ6 : 7 === e0 ? kP = new aJ7(n.s
					.aJ8) : 8 === e0 ? kP = a2P : 12 === e0 ? kP = new aJ9 : 14 === e0 ? kP = new aJA : 15 === e0 ? kP = new aJ7(n.s.aJB) : 16 === e0 ? kP = new aJC : 17 === e0 ? kP = new aJD : 18 === e0 ? kP = new aJE : 19 === e0 ? kP =
				new aJF : 20 === e0 ? kP = new aJG : 21 === e0 ? kP = new aJH : 22 === e0 ? kP = new aJI : 23 === e0 ? kP = new aJJ : 24 === e0 ? kP = new aJK : 25 === e0 ? kP = new aJL : 26 === e0 ? kP = new aJM : 27 === e0 ? kP = new aJN :
				28 === e0 ? kP = new aJO : 29 === e0 && (kP = new aJP), kP.aJ0 = aJ0, aIx[e0] = kP
		}
		kP.show(a2P)
	}, this.zy = function() {
		this.xC() && this.aJQ(this.aDD().aJ0)
	}, this.aJQ = function(e0) {
		this.xC() && (aIx[e0] ? (this.r1(), bb.dc = !0, this.rs = e0, aIx[e0].show()) : this.o(e0))
	}, this.r1 = function() {
		this.xC() && aIx[this.rs].r1()
	}, this.r = function() {
		this.xC() && (aIx[this.rs].r1(), aJ1(), this.rs = 0, u.v.setState(13))
	}, this.tT = function() {
		var kP;
		this.xC() && (kP = aIx[this.rs]).tT && kP.tT()
	}, this.resize = function() {
		if (!this.xC()) return !1;
		aIx[this.rs].resize()
	}, this.gm = function(ef, eh) {
		var kP;
		this.xC() && (kP = aIx[this.rs]).gm && kP.gm(ef, eh)
	}, this.a0B = function(ef, eh) {
		var kP;
		this.xC() && (kP = aIx[this.rs]).a0B && kP.a0B(ef, eh)
	}, this.a0Z = function() {
		var kP;
		this.xC() && (kP = aIx[this.rs]).a0Z && kP.a0Z()
	}, this.a0E = function(kk, kl, deltaY) {
		var kP;
		this.xC() && (kP = aIx[this.rs]).a0E && kP.a0E(kk, kl, deltaY)
	}, this.a0j = function(code) {
		var kP;
		return !!this.xC() && ((kP = aIx[this.rs]).a0j && kP.a0j(code), !0)
	}, this.iS = function() {
		var kP;
		this.xC() && (kP = aIx[this.rs]) && kP.iS && kP.iS()
	}, this.xC = function() {
		return 0 < this.rs
	}, this.aDD = function() {
		return aIx[this.rs]
	}, this.aBT = function(e0) {
		return aIx[e0]
	}, this.aJR = function() {
		return aIx
	}
}

function aJ7(data) {
	var aJS, aJT;
	this.show = function() {
		data.aJU && bE.aKD("account", data.qr), aJS.show(), this.resize()
	}, this.r1 = function() {
		aJS.r1()
	}, this.resize = function() {
		aJS.resize(), aJT.resize()
	}, this.a0j = function(et) {
		2 === et && aJS.tL[0].pm()
	}, aJS = new tE(data.username, [new q("⬅️ " + L(31), function() {
		bE.clear(), n.zy()
	}), new q(data.aJU ? "🔄 " + L(147) : L(148), function() {
		n.o(8, n.aDD().aJ0, new rt(25, {
			ru: 0,
			qr: data.qr,
			rr: data.rr
		}))
	}, 0, 0, 1)]), aJT = new pM(aJS.tK, function() {
		var pO = [];
		pO.push(function() {
				var aJk = new p6,
					qI = (aJk.p9(L(197)), new qJ({
						value: data.username,
						e0: -1
					}));
				qI.e.readOnly = !0, aJk.pK(qI), aJk.pK(new rF([new q(L(166), function(e) {
					return b6.pT.a1w(qI.e), b6.pT.a1x(e), !0
				}).button])), data.aJU || aJk.pB(L(198));
				return aJk
			}()),
			function(pO) {
				var aJk, pC, aA6, aK5, aJs;
				data.aJU || ((aJk = new p6).p9(L(199)), (pC = aJk.pB(data.aK4.length + " / 160")).style.textAlign = "center", aA6 = !0, (aK5 = new tc(0, 1, function(e) {
					e = e.target.value.length;
					pC.textContent = e + " / 160", 160 < e ? aA6 && (aA6 = !1, aJs.pp(1), aJs.button.style.color = b7.mY) : aA6 || (aA6 = !0, aJs.pp(0), aJs.button.style.color = b7.nU)
				})).e.rows = 6, aK5.e.style.fontSize = "1em", aK5.tj(data.aK4), aJk.pK(aK5), aJs = new q(L(200), function() {
					if (!aA6) return !0;
					n.o(8, n.aDD().aJ0, new rt(29, {
						ru: 1,
						pA: aK5.tk().substring(0, 160)
					}))
				}, 0, 0, 1), aJk.pK(new rF([aJs.button])), 0 !== data.aK6 && (aJk.pK(new rF([new q(L(1 === data.aK6 ? 202 : 203), function() {
					n.o(8, n.aDD().aJ0, new rt(29, {
						ru: 0,
						pA: ""
					}))
				}, 0, 0, 1).button])), aJk.pB(1 === data.aK6 ? L(204, [data.aK8 - 1]) : L(205, [data.aK8 - 1]))), aJk.pB(L(201, [data.aK7])), pO.push(aJk))
			}(pO),
			function(pO) {
				var aJk;
				data.aJU && 0 !== data.aK6 && ((aJk = new p6).p9(L(199)), aJk.pD(data.aK4), aJk.pK(new rF([new q(L(206), function(e) {
					return aw.s.aCK(0) && (b6.pT.a1x(e), aw.aJq.aK3({
						ru: 5,
						qr: data.qr,
						rr: data.rr
					})), !0
				}, 0, 0, 1).button])), pO.push(aJk))
			}(pO), pO.push(function() {
				var aJk = new p6,
					aJl = (aJk.p9(L(149)), [L(150), L(151), L(152), L(153), L(154)]),
					dz = data.aJm;
				aJk.pF(L(155) + b6.zF.a2e(data.uV, .01, 2) + "<br>" + L(156) + (dz + 1) + " / " + data.uU + "<br>" + L(157) + aJl[dz < 10 ? 0 : dz < 50 ? 1 : dz < 200 ? 2 : dz < 1e3 ? 3 : 4]), data.aJU || (aJk.pB(L(158)), aJk.pB(L(159)),
					aJk.pB(L(160)));
				return aJk
			}()), data.aJU && pO.push(function() {
				var aJk = new p6,
					qI = (aJk.p9(L(161)), new qJ(bf.dp.data[147], 1, void 0, function(e) {
						aJn(e.target.value)
					})),
					aJo = (aJk.pK(qI), new q(L(14), function(e) {
						return qI.e.readOnly && aw.s.aCK(0) && (b6.pT.a1x(e), aJp(), aw.aJq.aJr({
							ru: 0,
							qr: data.qr,
							rr: data.rr,
							value: bH.p0(Math.floor(100 * bf.dp.data[147].value), 0, 4294967295)
						})), !0
					}, 1)),
					aJs = new q(L(162), function(e) {
						return e.textContent === L(162) ? (e.textContent = L(163), qI.e.readOnly = !0, aJo.pp(0), aJo.button.style.color = b7.nU, bf.rC.rD(147, qI.e.value), aJn(bf.dp.data[147].value)) : aJp(), !0
					}),
					pC = (aJk.pK(new rF([aJs.button])), aJk.pB()),
					aJn = function(f0) {
						f0 = isNaN(f0) ? 0 : Number(f0);
						var f0 = Math.max(f0, (data.aJt + 1) / 100),
							aJu = Math.floor(100 * Math.max(1e-4 * f0, data.aJt / 100)) / 100;
						pC.textContent = L(164, [f0.toFixed(2), bf.dp.data[105].value, aJu.toFixed(2), data.qr, (f0 - aJu).toFixed(2)])
					},
					aJp = function() {
						aJs.button.textContent = L(162), qI.e.readOnly = !1, aJo.pp(1), aJo.button.style.color = b7.mY
					};
				return aJn(bf.dp.data[147].value), aJk.pK(new rF([aJo.button])), aJk
			}());
		pO.push(function() {
			var aJk = new p6,
				qI = (aJk.p9(L(165)), new qJ({
					value: data.qr,
					e0: -1
				}));
			return qI.e.readOnly = !0, aJk.pK(qI), aJk.pK(new rF([new q(L(166), function(e) {
				return b6.pT.a1w(qI.e), b6.pT.a1x(e), !0
			}).button])), aJk
		}()), data.aJU || (pO.push(function() {
			var aJk = new p6,
				aJv = (aJk.p9(L(167)), new qJ(bf.dp.data[106]));
			return aJv.e.readOnly = !0, aJv.e.type = "password", aJk.pK(aJv), aJk.pK(new rF([new q(L(168), function(e) {
				return e.textContent === L(168) ? (e.textContent = L(169), aJv.e.type = "text") : (e.textContent = L(168), aJv.e.type = "password"), !0
			}).button, new q(L(166), function(e) {
				return b6.pT.a1w(aJv.e), b6.pT.a1x(e), !0
			}).button])), aJk.pK(new rF([new q(L(170), function() {
				n.o(8, n.aDD().aJ0, new rt(15))
			}).button])), aJk.p9(L(171), "0.8em"), aJk.pB(L(172)), aJk.pB(L(173)), aJk.pB(L(174)), aJk
		}()), pO.push(function() {
			var aJk = new p6;
			return aJk.p9(L(175)), aJk.pK(new rF([new q(L(176), function() {
				n.o(6, n.aDD().aJ0)
			}).button])), aJk.pK(new rF([new q(L(177), function() {
				bf.rC.rD(105, ""), n.o(8, n.aDD().aJ0, new rt(18))
			}).button])), aJk.pK(new rF([new q(L(178) + bf.dp.data[105].value, function() {
				n.o(4, 0, new p(L(179), L(180), !0, [new q("⬅️ " + L(31), function() {
					n.o(7, n.aBT(7).aJ0)
				})]))
			}, b7.nD).button])), aJk
		}()), pO.push(function() {
			function aJx(e0) {
				for (var a7 = 0; a7 < 2; a7++) aJw[a7].pp(0 === e0 ? b7.mk : 0 === a7 ? b7.nD : b7.mv)
			}
			var pI, aJw, aJk = new p6;
			aJk.p9(L(181)), aJk.pB(L(182)), bf.s.uF();
			return aJw = [new q(L(183), function() {
				var e0 = Math.min(bf.dp.data[117].value, pI.pJ.length - 1);
				if (!(e0 < 1)) {
					pI.pJ[e0].remove(), pI.pJ.splice(e0, 1);
					for (var a7 = e0; a7 < pI.pJ.length; a7++) pI.pJ[a7].name = "" + a7;
					bf.s.uI(e0), e0 = bf.dp.data[117].value, pI.pJ[e0].textContent = pI.pJ[e0].textContent.replace("⚪", "🟢"), aJx(e0)
				}
			}, b7.mk), new q(L(184), function() {
				var e0 = Math.min(bf.dp.data[117].value, pI.pJ.length - 1);
				e0 < 1 || (e0 = bf.s.uJ(e0), bf.rC.rD(105, e0.qr), bf.rC.rD(106, e0.password), n.o(8, n.aDD().aJ0, new rt(18)))
			}, b7.mk)], (pI = new t9(bf.dp.data[117], aJx)).pJ[0].style.marginTop = "0.5em", aJk.pH(pI), aJk.pK(new rF([aJw[1].button])), aJk.pK(new rF([aJw[0].button])), aJk
		}()));
		return pO.push(function() {
				var aJk = new p6,
					aJl = (aJk.p9(L(188)), [L(189), L(190), L(191), L(192)]),
					dz = data.aJy;
				return aJk.pF(L(193) + (data.aJz / 100).toFixed(2) + "<br>" + L(156) + (dz + 1) + " / " + data.uU + "<br>" + L(157) + aJl[dz < 10 ? 0 : dz < 50 ? 1 : dz < 200 ? 2 : 3]), aJk
			}()), pO.push(function() {
				var aJk = new p6;
				return aJk.p9(L(185)), aJk.pF(L(186) + b6.zF.a2e(data.uR, .1, 1) + "<br>" + L(156) + (data.uS + 1) + " / " + data.uU + "<br>" + L(187) + data.uT), aJk
			}()),
			function(pO) {
				var aJk = new p6,
					zM = data.uY,
					aK9 = (aJk.p9(L(207)), aJk.pF(L(208) + (zM ? "[" + data.uW + "]" : "-")), aJk.pF(L(209) + b6.zF.a2e(zM, .001, 2)), aJk.pF(L(156) + (data.ua + 1) + " / " + data.uU), data.ub),
					aKA = (aJk.pF(L(210) + b6.zF.a2e(aK9, .01, 2)), data.ud);
				aJk.pF(L(211) + aKA), aJk.pF(L(212) + b6.zF.a2e(aK9 / Math.max(aKA, 1), .01, 2)), zM = data.uZ, aJk.p9(L(213), "0.8em"), aJk.pF("Clan: " + (zM ? "[" + data.uX + "]" : "-")), aJk.pF(L(209) + b6.zF.a2e(zM, .001, 2)), aK9 = data
					.uc, aJk.pF(L(210) + b6.zF.a2e(aK9, .01, 2)), aKA = data.ue, aJk.pF(L(211) + aKA), aJk.pF(L(212) + b6.zF.a2e(aK9 / Math.max(aKA, 1), .01, 2)), pO.push(aJk)
			}(pO),
			function(pO) {
				var aJk = new p6;
				aJk.p9(L(214)), aJk.pF(L(193) + data.aKB + "<br>" + L(157) + (data.aKC.length ? L(215, [data.aKC]) : L(216))), data.aJU && (aJk.pK(new rF([new q(L(217), function(e) {
					return aw.s.aCK(0) && (b6.pT.a1x(e), aw.aJq.aK3({
						ru: 4,
						qr: data.qr,
						rr: data.rr
					})), !0
				}, 0, 0, 1).button])), aJk.pB(L(218)), aJk.pB(L(219)));
				pO.push(aJk)
			}(pO), pO.push(function() {
				var aJk = new p6;
				if (aJk.p9(L(194)), aJk.pF(L(195) + data.aK0 + "<br>" + L(156) + (data.aK1 + 1) + " / " + data.uU + "<br>" + L(157) + bl.e2(data.aK1)), data.aJU) {
					var qI = new qJ(bf.dp.data[157], 1, void 0, function(e) {
							aJn(e.target.value)
						}),
						aJs = (qI.e.style.marginTop = "0.6em", aJk.pK(qI), new q(L(162), function(e) {
							return e.textContent === L(162) ? (e.textContent = L(163), qI.e.readOnly = !0, aK2[0].pp(0), aK2[1].pp(0), aK2[0].button.style.color = b7.nU, aK2[1].button.style.color = b7.nU, bf.rC.rD(157, qI.e
								.value), aJn(bf.dp.data[157].value)) : aJp(), !0
						})),
						aK2 = (aJk.pK(new rF([aJs.button])), [new q("−", function(e) {
							return qI.e.readOnly && aw.s.aCK(0) && (b6.pT.a1x(e), aJp(), aw.aJq.aK3({
								ru: 7,
								qr: data.qr,
								rr: bH.p0(bf.dp.data[157].value, 2, 32767)
							})), !0
						}, 1), new q("+", function(e) {
							return qI.e.readOnly && aw.s.aCK(0) && (b6.pT.a1x(e), aJp(), aw.aJq.aK3({
								ru: 6,
								qr: data.qr,
								rr: bH.p0(bf.dp.data[157].value, 2, 32767)
							})), !0
						}, 1)]),
						pC = aJk.pB(),
						aJn = function(f0) {
							f0 = isNaN(f0) ? 0 : Number(f0), f0 = Math.floor(bH.p0(f0, 3, 32767)), pC.textContent = L(196, [f0 - 1, f0, bf.dp.data[105].value])
						};
					aJk.pK(new rF([aK2[0].button, aK2[1].button]));
					for (var a7 = 0; a7 < 2; a7++) aK2[a7].button.style.fontSize = "1.6em";
					var aJp = function() {
						aJs.button.textContent = L(162), qI.e.readOnly = !1, aK2[0].pp(1), aK2[1].pp(1), aK2[0].button.style.color = b7.mY, aK2[1].button.style.color = b7.mY
					};
					aJn(bf.dp.data[157].value)
				}
				return aJk
			}()), pO
	}())
}

function aJI() {
	var aKE, aKF, aKG, pO;

	function aKH() {
		aKJ(), 2 !== a9.data.aIncomeType && (a9.data.aIncomeData = null), n.aJR()[19] = null, n.zy()
	}

	function aKJ() {
		2 === a9.data.aIncomeType ? (b6.pd.a1M(aKG.tk(), a9.data.aIncomeData, 255), b6.pd.max(a9.data.aIncomeData) || (a9.data.aIncomeType = 0)) : 1 !== a9.data.aIncomeType || a9.data.aIncomeValue || (a9.data.aIncomeType = 0)
	}
	this.show = function() {
		aKE.show(), this.resize()
	}, this.r1 = function() {
		aKE.r1()
	}, this.resize = function() {
		aKE.resize(), aKF.resize()
	}, this.a0j = function(et) {
		2 === et && aKE.tL[0].pm()
	}, aKE = new tE(L(220), [new q("⬅️ " + L(31), aKH)]), aKF = new pM(aKE.tK, (function(pO) {
		var aJk = new p6;
		aJk.p9(L(221)), aJk.pH(new t9({
			tD: [L(222), L(223), L(224)],
			value: a9.data.aIncomeType
		}, function(e0) {
			aKJ(), 2 !== e0 || a9.data.aIncomeData || (a9.data.aIncomeData = new Uint8Array(a9.eV)), a9.data.aIncomeType = e0, n.o(22)
		})), pO.push(aJk)
	}(pO = []), function(pO) {
		var aJk;
		1 === a9.data.aIncomeType && ((aJk = new p6).p9("Value"), aJk.pK(new qJ({
			e0: -1,
			value: a9.data.aIncomeValue
		}, 1, 0, function(e) {
			var value = bH.p0(Math.floor(e.target.value), 0, 255);
			e.target.value = a9.data.aIncomeValue = value
		})), pO.push(aJk))
	}(pO), function(pO) {
		var aJk;
		2 === a9.data.aIncomeType && ((aJk = new p6).p9("Data"), (aKG = new tc(0, 1, 0, 1)).tj(b6.zF.a2k(a9.data.aIncomeData, 4)), aJk.pK(aKG), pO.push(aJk))
	}(pO), pO))
}

function aJL() {
	var aKE, aKF, aKG;

	function aKH() {
		aKJ(), 3 !== a9.data.botDifficultyType || b6.pd.a1A(a9.data.botDifficultyData) || (a9.data.botDifficultyType = 0), 3 !== a9.data.botDifficultyType && (a9.data.botDifficultyData = null), n.aJR()[19] = null, n.zy()
	}

	function aKJ() {
		3 === a9.data.botDifficultyType && b6.pd.a1M(aKG.tk(), a9.data.botDifficultyData, aA.js.length - 1)
	}

	function aKO(pO, e0) {
		var aJk = new p6,
			value = (aJk.p9(e0 < 0 ? L(56) : L(55) + " " + bc.z0[e0 % 9]), 0 <= e0 && (aJk.pF(L(227) + ": " + a9.data.teamPlayerCount[e0]).style.marginBottom = "1em"), e0 < 0 ? a9.data.botDifficultyValue : a9.data.botDifficultyTeam[e0]);
		aJk.pH(new t9({
			tD: aA.js,
			value: value
		}, function(k3) {
			e0 < 0 ? a9.data.botDifficultyValue = k3 : a9.data.botDifficultyTeam[e0] = k3
		})), pO.push(aJk)
	}
	this.show = function() {
		aKE.show(), this.resize()
	}, this.r1 = function() {
		aKE.r1()
	}, this.resize = function() {
		aKE.resize(), aKF.resize()
	}, this.a0j = function(et) {
		2 === et && aKE.tL[0].pm()
	}, aKE = new tE(L(56), [new q("⬅️ " + L(31), aKH)]), aKF = new pM(aKE.tK, function() {
		var pO = [];
		if (function(pO) {
				var aJk = new p6,
					tD = (aJk.p9(L(221)), [L(223), L(225), L(226), L(224)]),
					value = a9.data.botDifficultyType;
				0 === a9.data.gameMode && (value = Math.min(value, 2), tD.splice(2, 1));
				aJk.pH(new t9({
					tD: tD,
					value: value
				}, function(e0) {
					aKJ(), a9.data.botDifficultyType = e0, 0 === a9.data.gameMode && 2 === e0 && (a9.data.botDifficultyType = 3), 3 !== a9.data.botDifficultyType || a9.data.botDifficultyData || (a9.data.botDifficultyData =
						new Uint8Array(a9.eV)), 2 !== a9.data.botDifficultyType || a9.data.botDifficultyTeam || (a9.data.botDifficultyTeam = new Uint8Array(9)), n.o(25)
				})), pO.push(aJk)
			}(pO), 0 === a9.data.botDifficultyType) aKO(pO, -1);
		else if (2 === a9.data.botDifficultyType)
			for (var a7 = 0; a7 < a9.data.teamPlayerCount.length; a7++) a9.data.teamPlayerCount[a7] && aKO(pO, a7);
		else 3 === a9.data.botDifficultyType && ! function(pO) {
			var aJk = new p6;
			aJk.p9("Data"), (aKG = new tc(0, 1, 0, 1)).tj(b6.zF.a2k(a9.data.botDifficultyData, 8)), aJk.pK(aKG), pO.push(aJk)
		}(pO);
		return pO
	}())
}

function aKP(data) {
	var aJS, aKQ, aKR, aKS, aKT, aKU, aKV, colors, aKW, aKX, aKY = 0,
		aKZ = 0,
		aKa = !1,
		aKb = !1,
		aKc = [1, 5, 60, 240, 1440, 10080, 43200];

	function aL4(kk, kl) {
		! function(kk, kl) {
			return aKQ < kk && kk < aKQ + aKS && aKR < kl && kl < aKR + aKT
		}(aKY = kk, aKZ = kl) ? (aKa && (bb.dc = !0), aKa = !1) : (aKa = !0, bb.dc = !0)
	}
	this.show = function() {
		aKb = bf.dp.data[127].value, aJS.show(), this.resize()
	}, this.r1 = function() {
		aJS.r1()
	}, this.resize = function() {
		aJS.resize();
		var et = at.pZ,
			tS = aJS.tP(),
			aKl = et * tS.tR,
			et = et * tS.r4;
		aKU = b6.pT.sH(.06), aKV = b6.pT.sH(.04), aKQ = b6.pT.sH(.06), aKR = et + aKU, aKS = at.a1 - aKQ - aKV, aKT = aKl + et - aKR - aKV
	}, this.tT = function() {
		aJS.tT(),
			function() {
				var a7, aKi, g1, ef, er, g = data.data,
					aKp = 1,
					aKq = .125,
					aKr = aKb ? 65536 : 0;
				for (a7 = 0; a7 < g.length; a7++)
					for (aKi = g[a7].aKi, g1 = aKi.length, aKp = Math.max(g1, aKp), er = 0; er < g1; er++) aKq = Math.max(aKi[er], aKq), aKr = Math.min(aKi[er], aKr);
				var lz = aKR + aKT,
					wh = aKT / (aKq - aKr),
					wg = 1 / (aKp - 1);
				for (tU.lineWidth = bY.xf, a7 = 0; a7 < g.length; a7++) {
					for (aKi = g[a7].aKi, g1 = aKi.length, ef = aKQ, tU.beginPath(), tU.moveTo(ef + aKS, lz - wh * (aKi[g1 - 1] - aKr)), er = g1 - 2; 0 <= er; er--) tU.lineTo(ef + wg * er * aKS, lz - wh * (aKi[er] - aKr));
					tU.strokeStyle = colors[a7], tU.stroke()
				}(function(aKr, aKq, lz, wh) {
					tU.font = b6.pT.rV(0, .25 * aKQ), b6.pT.textBaseline(tU, 1), b6.pT.textAlign(tU, 2), tU.fillStyle = colors[0];
					for (var ef = .92 * aKQ, a7 = 0; a7 < 3; a7++) {
						var f0 = aKr + a7 * (aKq - aKr) / 2;
						tU.fillText((f0 / 1e3).toFixed(3), ef, lz - wh * (f0 - aKr))
					}
				})(aKr, aKq, lz, wh),
				function(aKp) {
					var eh = aKR + aKT + .15 * aKV;
					tU.font = b6.pT.rV(0, Math.min(.4 * aKV, .028 * at.a1)), b6.pT.textBaseline(tU, 0), b6.pT.textAlign(tU, 2), tU.fillStyle = colors[0], tU.fillText(b6.a11.a1l(aKW), aKQ + aKS, eh), b6.pT.textAlign(tU, 0), tU.fillText(b6.a11.a1l(
						new Date(aKX.getTime() - 6e4 * (aKp - 1) * aKc[data.aKh])), aKQ, eh)
				}(aKp),
				function(aKp, aKr, aKq) {
					if (aKa && !(aKp < 2)) {
						for (var a6g, e0 = (aKY - aKQ) / aKS * (aKp - 1), kx = Math.floor(e0), ky = Math.floor(1 + e0), aKu = e0 - kx, aKv = 1e5, aKw = -1, aKx = -1, aKy = aKq - (aKq - aKr) * (aKZ - aKR) / aKT, g = data.data, a7 = 0; a7 < g
							.length; a7++) {
							var aHd, aKi = g[a7].aKi;
							aKi.length <= ky || (aKi = aKi[kx] + aKu * (aKi[ky] - aKi[kx]), (aHd = Math.abs(aKy - aKi)) < aKv && (aKv = aHd, aKw = a7, aKx = aKi))
						} - 1 !== aKw && (aKq = aKR + aKT - (aKx - aKr) / (aKq - aKr) * aKT, tU.lineWidth = .5 * bY.xf, tU.strokeStyle = colors[aKw], tU.beginPath(), tU.moveTo(aKQ, aKq), tU.lineTo(aKY, aKq), tU.lineTo(aKY, aKR + aKT), tU
						.stroke(), tU.beginPath(), tU.arc(aKY, aKq, .1 * aKQ, 0, 2 * Math.PI), tU.fillStyle = colors[aKw], tU.fill(), aKr = aKR + aKT + .15 * aKV, b6.pT.textAlign(tU, 1), a6g = aKp - 2 < e0 ? (a6g = aKX.getTime() - 6e4 * aKc[
								data.aKh], new Date(a6g + (e0 - (aKp - 2)) * (aKW.getTime() - a6g))) : new Date(aKX.getTime() - 6e4 * (aKp - e0 - 1) * aKc[data.aKh]), aKp = b6.a11.a1l(a6g), e0 = b6.pT.measureText(aKp), a6g = bH.p0(aKY, aKQ +
								.5 * e0, aKQ + aKS - .5 * e0), tU.fillStyle = b6.color.mQ(70, 50, 20), tU.fillRect(a6g - .52 * e0, aKR + aKT, 1.04 * e0, .55 * aKV), tU.fillStyle = colors[0], tU.fillText(aKp, a6g, aKr), tU.font = b6.pT.rV(0,
								.25 * aKQ), b6.pT.textBaseline(tU, 1), b6.pT.textAlign(tU, 2), a6g = .92 * aKQ, aKp = (aKx / 1e3).toFixed(3), e0 = b6.pT.measureText(aKp), aKr = a6g - 1.04 * e0, tU.fillStyle = b6.color.mQ(70, 50, 20), tU
							.fillRect(aKr, aKq - .1625 * aKQ, aKQ - aKr, .275 * aKQ), tU.fillStyle = colors[aKw], tU.fillText(aKp, a6g, aKq))
					}
				}(aKp, aKr, aKq)
			}(), tU.lineWidth = bY.xf, tU.strokeStyle = b7.mY, tU.beginPath(), tU.moveTo(aKQ, aKR), tU.lineTo(aKQ, aKR + aKT), tU.lineTo(aKQ + aKS, aKR + aKT), tU.stroke();
		var a7, fontSize = .5 * aKU,
			g = (tU.font = b6.pT.rV(0, fontSize), b6.pT.textBaseline(tU, 1), b6.pT.textAlign(tU, 0), data.data),
			eY = g.length,
			eh = aKR - .5 * aKU,
			pA = "";
		for (a7 = 0; a7 < eY; a7++) pA += g[a7].name + "  ";
		pA = pA.trim();
		var aL1 = b6.pT.measureText(pA),
			ef = .5 * (at.a1 - aL1);
		for (aL1 > at.a1 && (ef = 0, tU.font = b6.pT.rV(0, at.a1 / aL1 * fontSize)), a7 = 0; a7 < eY; a7++) tU.fillStyle = colors[a7], tU.fillText(g[a7].name, ef, eh), ef += b6.pT.measureText(g[a7].name + "  ")
	}, this.gm = function(kk, kl) {
		aL4(kk, kl)
	}, this.a0B = function(kk, kl) {
		aL4(kk, kl)
	}, this.a0j = function(et) {
		2 === et && aJS.tL[0].pm()
	};
	var a7, dk, a1j, k3, eb = data.data,
		eY = eb.length,
		max = 1;
	for (a7 = 0; a7 < eY; a7++) max = Math.max(max, eb[a7].aKi.length);
	for (a7 = 0; a7 < eY; a7++)
		for (; eb[a7].aKi.length < max;) eb[a7].aKi.unshift(0);
	dk = new Date, a1j = 6e4 * dk.getTimezoneOffset(), k3 = dk.getTime() - a1j, aKW = new Date(k3), 6 === data.aKh ? function(dk, a1j) {
		var aKk = dk.getUTCFullYear(),
			dk = dk.getUTCMonth() + 1;
		aKX = dk < 12 ? new Date(Date.UTC(aKk, dk) - a1j) : new Date(Date.UTC(aKk + 1, 0) - a1j)
	}(dk, a1j) : (a1j = 6e4 * aKc[data.aKh], aKX = data.aKh <= 4 ? new Date(k3 + a1j - dk.getTime() % a1j) : new Date(k3 + a1j - (dk.getTime() + 2592e5) % a1j)), k3 = b6.color, colors = [b7.mY, k3.mQ(255, 0, 0), k3.mQ(0, 200, 0), k3.mQ(80, 80,
		255), k3.mQ(255, 255, 0), k3.mQ(255, 0, 255), k3.mQ(0, 255, 255), k3.mQ(255, 140, 0), k3.mQ(128, 128, 128), k3.mQ(0, 255, 140)], aJS = new tE(L(228) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.aKh] + ", " + b6.a11.a1i(aKW), [
		new q("⬅️ " + L(31), function() {
			n.s.aAC()
		}), new q(L(229), function() {
			n.o(14)
		})
	], !1)
}

function aJA() {
	var aJS, aJT, pO;
	this.show = function() {
		aJS.show(), this.resize()
	}, this.r1 = function() {
		aJS.r1()
	}, this.resize = function() {
		aJS.resize(), aJT.resize()
	}, this.a0j = function(et) {
		2 === et && aJS.tL[0].pm()
	}, aJS = new tE(L(230), [new q("⬅️ " + L(31), function() {
		n.aJQ(13)
	})]), aJT = new pM(aJS.tK, ((pO = []).push(function() {
		var aJk = new p6,
			aJs = (aJk.p9(L(231)), aJk.pB(L(232)), new q(L(233), function() {
				bf.rC.rD(130, 0), n.s.aL9()
			}, 0, 0, 1)),
			qI = new qJ(bf.dp.data[126], 0, function() {
				aJs.button.click()
			});
		return aJk.pK(qI), qI.e.placeholder = "a,b,c", qI.e.style.marginTop = "0.5em", aJk.pK(new rF([aJs.button])), aJk
	}()), pO.push(function() {
		var aJk = new p6,
			aJs = new q(L(233), function() {
				bf.rC.rD(130, 1), n.s.aL9()
			}, 0, 0, 1),
			aLA = new qJ(bf.dp.data[129], 1, function() {
				aLA.e.focus()
			}),
			aLB = new qJ(bf.dp.data[128], 1, function() {
				aJs.button.click()
			});
		return aJk.p9(L(234)), aJk.pK(aLB), aLB.e.style.marginBottom = "0.5em", aJk.p9(L(235)), aJk.pK(aLA), aJk.pK(new rF([aJs.button])), aJk
	}()), pO.push(function() {
		var aJk = new p6;
		return aJk.p9(L(236)), bf.dp.data[125].tD = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], aJk.pH(new t9(bf.dp.data[125])), aJk
	}()), pO.push(function() {
		var aJk = new p6;
		return aJk.p9(L(237)), aJk.pK(new r9(bf.dp.data[127], L(238))), aJk
	}()), pO))
}

function aJ9() {
	var aJS, aLC, aKS, aLD, aLE, aLF, colors = [0, 0, 0],
		aLG = -1;

	function aLJ(a7) {
		var aLK = aLC.eh + a7 * (bY.gap + aLF);
		tU.fillStyle = "rgb(" + (0 === a7 ? 150 : 2 === a7 ? 30 : 0) + "," + (1 === a7 ? 130 : 2 === a7 ? 30 : 0) + "," + (2 === a7 ? 220 : 0) + ")", tU.fillRect(aLD, aLK, colors[a7] * aLE, aLF), tU.strokeStyle = b7.mY, tU.strokeRect(aLD, aLK, aLE,
			aLF), tU.fillStyle = b7.mY, tU.font = b6.pT.rV(0, .32 * aLF), b6.pT.textBaseline(tU, 1), b6.pT.textAlign(tU, 0), tU.fillText(L(0 === a7 ? 241 : 1 === a7 ? 242 : 243) + aLH(a7), aLD + bY.gap, aLK + .53 * aLF)
	}

	function aLH(a7, aLL) {
		return aLL = aLL || 256, bH.p0(Math.floor(aLL * colors[a7]), 0, aLL - 1)
	}

	function a0f(kk, kl) {
		return !(kk < aLD || kl < aLC.eh || kk > aLC.ef + aLC.a1 || kl > aLC.eh + aLC.j7)
	}
	this.show = function() {
		var f0 = bf.dp.data[121].value;
		colors[0] = (f0 >> 12) / 63, colors[1] = (f0 >> 6 & 63) / 63, colors[2] = (63 & f0) / 63, aJS.show(), this.resize()
	}, this.r1 = function() {
		bf.rC.rD(121, (aLH(0, 64) << 12) + (aLH(1, 64) << 6) + aLH(2, 64)), aJS.r1()
	}, this.resize = function() {
		aJS.resize(), aLC.resize();
		var et = at.pZ,
			tS = aJS.tP(),
			aLI = (aLC.eh = Math.max(aLC.eh, et * tS.r4 + bY.gap), et * tS.tR - 2 * bY.gap);
		aLC.j7 = Math.min(aLC.j7, aLI), aLC.a1 = 2 * aLC.j7, aLC.eh = et * tS.r4 + .5 * (et * tS.tR - aLC.j7), aLC.ef = .5 * (at.a1 - aLC.a1), aKS = .25 * aLC.a1, aLD = aLC.ef + aKS + bY.gap, aLE = aLC.a1 - aKS - bY.gap, aLF = (aLC.j7 - 2 * bY
			.gap) / 3
	}, this.tT = function() {
		var dz, sG, es;
		aJS.tT(), tU.lineWidth = bY.xf, dz = aLH(0), sG = aLH(1), es = aLH(2), tU.fillStyle = "rgb(" + dz + "," + sG + "," + es + ")", tU.fillRect(aLC.ef, aLC.eh, aKS, aLC.j7), tU.strokeStyle = b7.mY, tU.strokeRect(aLC.ef, aLC.eh, aKS, aLC.j7),
			tU.fillStyle = dz + sG + es < 306 && sG < 150 ? b7.mY : b7.mP, b6.pT.textBaseline(tU, 1), b6.pT.textAlign(tU, 1), tU.font = b6.pT.rV(0, .1 * aLC.j7), tU.rotate(-Math.PI / 2), tU.fillText(L(240), -aLC.eh - .5 * aLC.j7, aLC.ef + .5 *
				aKS), tU.setTransform(1, 0, 0, 1, 0, 0), aLJ(0), aLJ(1), aLJ(2)
	}, this.gm = function(kk, kl) {
		a0f(kk, kl) && (aLG = bH.p0(Math.floor((kl - aLC.eh) / (aLF + .75 * bY.gap)), 0, 2), colors[aLG] = bH.p0((kk - aLD) / aLE, 0, 1), bb.dc = !0)
	}, this.a0B = function(kk) {
		-1 !== aLG && (colors[aLG] = bH.p0((kk - aLD) / aLE, 0, 1), bb.dc = !0)
	}, this.a0E = function(kk, kl, deltaY) {
		a0f(kk, kl) && (kk = bH.p0(Math.floor((kl - aLC.eh) / (aLF + .75 * bY.gap)), 0, 2), colors[kk] = bH.p0(colors[kk] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), bb.dc = !0)
	}, this.a0Z = function() {
		0 <= aLG && (aLG = -1, bb.dc = !0)
	}, this.a0j = function(et) {
		2 === et && aJS.tL[0].pm()
	}, aJS = new tE(L(239), [new q("⬅️ " + L(31), function() {
		n.s.aAC()
	})], !1), aLC = new q6([.5, .25], [.5, .5], 1)
}

function aJH() {
	var aKE, aKF, aKG, q4;

	function aKH() {
		aKJ(), 1 !== a9.data.colorsType && (a9.data.colorsData = null), n.aJR()[19] = null, n.zy()
	}

	function aLM() {
		aKJ(), n.o(21)
	}

	function aKJ() {
		1 === a9.data.gameMode ? a9.a31.a35() : 0 === a9.data.gameMode && 1 === a9.data.colorsType && b6.pd.a1M(aKG.tk(), a9.data.colorsData, 262143)
	}
	this.show = function() {
		aKE.show(), this.resize()
	}, this.r1 = function() {
		aKE.r1()
	}, this.resize = function() {
		aKE.resize(), aKF.resize()
	}, this.a0j = function(et) {
		2 === et && aKE.tL[0].pm()
	}, q4 = [new q("⬅️ " + L(31), aKH)], 1 === a9.data.gameMode && q4.push(new q(L(244), aLM, 1, 1)), aKE = new tE(L(245), q4), aKF = new pM(aKE.tK, (function(pO) {
		var aJk = new p6;
		aJk.p9(L(221)), 0 === a9.data.gameMode && (aJk.pH(new t9({
			tD: [L(246), L(224)],
			value: a9.data.colorsType
		}, function(e0) {
			aKJ(), a9.data.colorsType = e0, 1 !== a9.data.colorsType || a9.data.colorsData && a9.data.colorsData.length === a9.eV || (a9.data.colorsData = new Uint32Array(a9.eV)), n.o(21)
		})), aJk.pK(new rP));
		aJk.pK(new r9({
			value: a9.data.selectableColor
		}, L(247), function(value) {
			a9.data.selectableColor = value
		})), pO.push(aJk)
	}(q4 = []), 0 === a9.data.gameMode ? 1 === a9.data.colorsType && function(pO) {
		var aJk = new p6;
		aJk.p9("Data"), (aKG = new tc(0, 1, 0, 1)).tj(b6.zF.a2k(a9.data.colorsData, 1)), aJk.pK(aKG), pO.push(aJk)
	}(q4) : (a9.a31.a35(), q4.push(function() {
		var aJk = new p6;
		aJk.p9(L(227));
		for (var a7 = 0; a7 < bc.z0.length; a7++) {
			var k3 = (a7 + 1) % bc.z0.length,
				e = aJk.pF((0 == k3 ? "" : "Team ") + bc.z0[k3]);
			a7 && (e.style.marginTop = "0.5em"), aJk.pK(new qJ({
				e0: -1,
				value: a9.data.teamPlayerCount[k3]
			}, 1, 0, function(e) {
				aKE.tL[1].pp(0);
				var playerCount = bH.p0(Math.floor(e.target.value), 0, 512);
				e.target.value = playerCount, a9.data.teamPlayerCount[e.target.aLO] = playerCount
			})).e.aLO = k3
		}
		return aJk
	}())), q4))
}

function rt(id, a2P, aLP) {
	var aJS, aLQ;

	function aLU() {
		aLQ.pP.innerHTML += "<br>" + L(250)
	}

	function aLT() {
		b9.a3(48), b9.a4(24, Math.floor(bH.pow(24) * Math.random())), b9.a4(24, Math.floor(bH.pow(24) * Math.random())), bD.dU(b9.a8), bf.rC.rD(110, bB.rv.rw(bB.rv.rx(8))), aw.aJq.aLi()
	}
	this.aLR = !0, this.aLS = id, this.show = function() {
		aJS.show(), this.resize(), 15 === id ? (aw.s.aCQ(0, id) ? aLT : aLU)() : 16 === id ? aw.s.aCQ(0, id) ? aw.aA9.aLV(2) : aLU() : 17 === id ? aw.s.aCQ(0, id) ? aw.aA9.aLV(3) : aLU() : 18 === id ? (aw.s.close(0, 3253), aw.s.aCQ(0, id),
		aLU()) : 21 === id ? aw.s.aCQ(0, id) ? aw.aLW.aLX(a2P.sB, a2P.sC, a2P.sD) : aLU() : 22 === id ? aw.s.aCQ(0, id) ? aw.aLW.aLY(a2P.sB, a2P.aLZ, a2P.aLa) : aLU() : 23 === id ? aw.s.aCQ(0, id) ? aw.aLW.aLb(a2P.aKh, a2P.zH) : aLU() : 24 ===
			id ? aw.s.aCQ(0, id) ? aw.aLW.aLc(a2P.aKh, a2P.sC, a2P.sD) : aLU() : 25 === id ? aw.s.aCQ(0, id) ? aw.aJq.aK3(a2P) : aLU() : 28 === id ? aw.s.aCQ(0, id) ? aw.aLW.aLd(a2P.sB, a2P.aLZ, a2P.aLa) : aLU() : 29 === id && (aw.s.aCQ(0, id) ?
				aw.aJq.aLe(a2P) : aLU())
	}, this.aLf = function() {
		15 === id ? aLT() : 16 === id ? aw.aA9.aLV(2) : 17 === id ? aw.aA9.aLV(3) : 18 === id ? n.o(8, this.aJ0, new rt(16)) : 21 === id ? aw.aLW.aLX(a2P.sB, a2P.sC, a2P.sD) : 22 === id ? aw.aLW.aLY(a2P.sB, a2P.aLZ, a2P.aLa) : 23 === id ? aw.aLW
			.aLb(a2P.aKh, a2P.zH) : 24 === id ? aw.aLW.aLc(a2P.aKh, a2P.sC, a2P.sD) : 25 === id ? aw.aJq.aK3(a2P) : 28 === id ? aw.aLW.aLd(a2P.sB, a2P.aLZ, a2P.aLa) : 29 === id ? aw.aJq.aLe(a2P) : 1e3 === id && (this.aLS = id = 25, aw.aJq.aK3(
				a2P))
	}, this.aLg = function(code, bo, data) {
		!bo && code !== id || (16 === code ? n.o(7, this.aJ0) : 17 === code ? (aw.s.close(0, 3252), bf.s.uI(0), bf.dp.data[117].tD && 0 < bf.dp.data[117].tD.length ? (bo = bf.s.uJ(0), bf.rC.rD(105, bo.qr), bf.rC.rD(106, bo.password), n.o(8, this
			.aJ0, new rt(16))) : (bf.rC.rD(105, ""), n.s.aAC())) : 21 === code ? n.o(10, this.aJ0, new aLh(data)) : 23 === code ? n.o(13, 0, new aKP({
			data: data,
			aKh: a2P.aKh
		})) : 25 === code && (n.s.aJB.qr = a2P.qr, n.o(15, this.aJ0)))
	}, this.r1 = function() {
		aJS.r1()
	}, this.resize = function() {
		aJS.resize(), aLQ.resize()
	}, this.a0j = function(et) {
		2 === et && aJS.tL[0].pm()
	}, aJS = new tE(L(248), [new q("⬅️ " + L(31), function() {
		aLP ? n.o(29) : n.s.aAC()
	})]), aLQ = new rE(aJS.tK, L(249))
}

function aJF() {
	var aKE, aKF, pO;

	function aLl() {
		var g1;
		1 === a9.data.gameMode ? (a9.data.teamPlayerCount || (a9.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), a9.a31.a35()), g1 = b6.pd.a1G(a9.data.teamPlayerCount, 0), a9.data.numberTeams = g1) : (2 === a9.data
			.botDifficultyType && (a9.data.botDifficultyType = 0), 1 === a9.data.spawningType && (a9.data.spawningType = 0))
	}

	function aKH() {
		1 !== a9.data.gameMode && (a9.data.teamPlayerCount = null), aLn(), a9.data.canvas = null, n.o(5, 5)
	}

	function aLn() {
		b5.oi.dU(), bf.rC.rD(156, b5.a3H.y7())
	}

	function aLj() {
		a9.data.isReplay = 0, aLn(), a9.a31.a3R(), aW.aCc(), a9.a31.a3O(), a9.data.canvas = 2 === a9.data.mapType ? bO.vF : null, a9.a34(), a9.a33 = 1
	}

	function aM1() {
		aLl();
		for (var g = [aLq(), aLr(), aLs()], a7 = 3; a7 < 6; a7++) aKF.pP.removeChild(aKF.pQ[a7].p8), aKF.pQ[a7] = g[a7 - 3], aKF.pP.appendChild(aKF.pQ[a7].p8);
		aKF.resize()
	}

	function aLq() {
		var aM2, aJk = new p6;
		return aJk.p9(L(245)), aM2 = 0 === a9.data.gameMode ? [L(246), L(224)][a9.data.colorsType] : a9.data.numberTeams + " Team" + (1 === a9.data.numberTeams ? "" : "s"), aJk.pF(aM2), aJk.pK(new rF([new q(L(254), function() {
			n.o(21)
		}).button])), aJk
	}

	function aLr() {
		var aJk = new p6,
			g = (aJk.p9(L(56)), [L(223) + ": " + aA.js[a9.data.botDifficultyValue], L(225), L(226), L(224)]);
		return aJk.pF(g[a9.data.botDifficultyType]), aJk.pK(new rF([new q(L(254), function() {
			n.o(25)
		}).button])), aJk
	}

	function aLs() {
		var aJk = new p6,
			g = (aJk.p9("Spawning"), [L(246), L(256), L(224)]);
		return aJk.pF(g[a9.data.spawningType]), aJk.pK(new rF([new q(L(254), function() {
			n.o(24)
		}).button])), aJk
	}
	this.show = function() {
		aKE.show(), this.resize(), aKE.tK.scrollTop = n.s.aEY[0]
	}, this.r1 = function() {
		n.s.aEY[0] = aKE.tK.scrollTop, aKE.r1()
	}, this.resize = function() {
		aKE.resize(), aKF.resize()
	}, this.a0j = function(et) {
		2 === et && aKE.tL[0].pm()
	}, aKE = new tE("🔧 " + L(251), [new q("⬅️ " + L(31), aKH), new q(L(252), aLj)]), aLl(), a9.data.canvas || (2 === a9.data.mapType ? a9.data.canvas = bO.vF : 1 === a9.data.mapType ? a9.data.canvas = bO.aH3(bO.a3P(a9.data), 0).vF : (a9.data
		.mapType = 0, a9.data.passableWater = a9.data.passableMountains = 1, a9.data.canvas = bO.aH3(bO.a3P(a9.data), a9.data.mapSeed).vF)), aKF = new pM(aKE.tK, (function(pO) {
		var aJk = new p6,
			a1T = (aJk.p9(L(253)), a9.data.canvas);
		a1T.style.width = "100%", aJk.pK({
			e: a1T
		}), aJk.pK(new rF([new q(L(254), function() {
			n.o(20)
		}).button])), pO.push(aJk)
	}(pO = []), function(pO) {
		var aJk = new p6;
		aJk.p9(L(227)), aJk.pK(new qJ({
			e0: -1,
			value: a9.data.playerCount
		}, 1, 0, function(e) {
			var playerCount = bH.p0(Math.floor(e.target.value), 1, 512);
			e.target.value = a9.data.playerCount = playerCount, 1 === a9.data.gameMode && (e = b6.pd.a1G(a9.data.teamPlayerCount, 0), a9.a31.a35(), b6.pd.a1G(a9.data.teamPlayerCount, 0) !== e) && aM1()
		})), pO.push(aJk)
	}(pO), function(pO) {
		var aJk = new p6;
		aJk.p9(L(255)), aJk.pH(new t9({
			tD: ["Battle Royale", "Teams"],
			value: a9.data.gameMode
		}, function(e0) {
			a9.data.gameMode !== e0 && (a9.data.gameMode = e0, aM1())
		})), pO.push(aJk)
	}(pO), pO.push(aLq()), pO.push(aLr()), pO.push(aLs()), function(pO) {
		var aJk = new p6,
			g = (aJk.p9(L(257)), [L(258), L(259), L(224)]);
		aJk.pF(g[a9.data.playerNamesType]), aJk.pK(new rF([new q(L(254), function() {
			n.o(23)
		}).button])), pO.push(aJk)
	}(pO), function(pO) {
		var aJk = new p6,
			g = (aJk.p9(L(220)), [L(222), L(223) + ": " + a9.data.aIncomeValue, L(224)]);
		aJk.pF(g[a9.data.aIncomeType]), aJk.pK(new rF([new q(L(254), function() {
			n.o(22)
		}).button])), pO.push(aJk)
	}(pO), function(pO) {
		var aJk = new p6,
			g = (aJk.p9(L(260)), [L(222), L(223) + ": " + a9.data.tIncomeValue, L(224)]);
		aJk.pF(g[a9.data.tIncomeType]), aJk.pK(new rF([new q(L(254), function() {
			n.o(26)
		}).button])), pO.push(aJk)
	}(pO), function(pO) {
		var aJk = new p6,
			g = (aJk.p9(L(261)), [L(222), L(223) + ": " + a9.data.iIncomeValue, L(224)]);
		aJk.pF(g[a9.data.iIncomeType]), aJk.pK(new rF([new q(L(254), function() {
			n.o(27)
		}).button])), pO.push(aJk)
	}(pO), function(pO) {
		var aJk = new p6,
			g = (aJk.p9(L(262)), [L(222), L(223) + ": " + a9.data.sResourcesValue, L(224)]);
		aJk.pF(g[a9.data.sResourcesType]), aJk.pK(new rF([new q(L(254), function() {
			n.o(28)
		}).button])), pO.push(aJk)
	}(pO), function(pO) {
		var aJk = new p6;
		aJk.p9(L(263)), aJk.pK(new rF([new q(L(264), function() {
			n.r(), a9.a31.a3S(), n.s.aEY[0] = 0, n.o(19)
		}).button])), aJk.pK(new rF([new q(L(265), function() {
			bj.aEN()
		}).button])), aJk.pK(new rF([new q(L(266), function() {
			return bj.aEP(), !0
		}).button])), pO.push(aJk)
	}(pO), pO))
}

function aJN() {
	var aKE, aKF, aKG, pO;

	function aKH() {
		aKJ(), 2 !== a9.data.iIncomeType && (a9.data.iIncomeData = null), n.aJR()[19] = null, n.zy()
	}

	function aKJ() {
		2 === a9.data.iIncomeType && b6.pd.a1M(aKG.tk(), a9.data.iIncomeData, 255)
	}
	this.show = function() {
		aKE.show(), this.resize()
	}, this.r1 = function() {
		aKE.r1()
	}, this.resize = function() {
		aKE.resize(), aKF.resize()
	}, this.a0j = function(et) {
		2 === et && aKE.tL[0].pm()
	}, aKE = new tE(L(261), [new q("⬅️ " + L(31), aKH)]), aKF = new pM(aKE.tK, (function(pO) {
		var aJk = new p6;
		aJk.p9(L(221)), aJk.pH(new t9({
			tD: [L(222), L(223), L(224)],
			value: a9.data.iIncomeType
		}, function(e0) {
			aKJ(), 2 !== e0 || a9.data.iIncomeData || (a9.data.iIncomeData = new Uint8Array(a9.eV), a9.data.iIncomeData.fill(32)), a9.data.iIncomeType = e0, n.o(27)
		})), pO.push(aJk)
	}(pO = []), function(pO) {
		var aJk;
		1 === a9.data.iIncomeType && ((aJk = new p6).p9("Value"), aJk.pK(new qJ({
			e0: -1,
			value: a9.data.iIncomeValue
		}, 1, 0, function(e) {
			var value = bH.p0(Math.floor(e.target.value), 0, 255);
			e.target.value = a9.data.iIncomeValue = value
		})), pO.push(aJk))
	}(pO), function(pO) {
		var aJk;
		2 === a9.data.iIncomeType && ((aJk = new p6).p9("Data"), (aKG = new tc(0, 1, 0, 1)).tj(b6.zF.a2k(a9.data.iIncomeData, 4)), aJk.pK(aKG), pO.push(aJk))
	}(pO), pO))
}

function aJ5() {
	var aM3, aM4, aLC, qI, aM5;
	this.aDE = new s1, aLC = new q6([.45, .27], [.5, .5], 2 / 3), aM4 = [new q("⚔️<br>" + L(267), function() {
			aM6(0)
		}, b7.n1), new q("🗡️<br>" + L(251), function() {
			aM6(1)
		}, b7.nJ), new q("🔑<br>" + L(268), function() {
			aM6(2)
		}, b7.nZ), new q("☰<br>" + L(269), function() {
			aM6(3)
		}, b7.ml), new q("", function() {
			n.o(12)
		}, b7.mU, !1),
		new q("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new q("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], qI = new qJ(bf.dp.data[122]);
	for (var a7 = 0; a7 < aM4.length; a7++) aM4[a7].button.style.position = "absolute";

	function aM6(e0) {
		u.v.setState(10), aX.sJ() || aX.aD4(), 0 === e0 ? n.s.aM7() : 1 === e0 ? (b5.aEi.v0(bf.dp.data[156].value, 1) || a9.a31.a3S(), n.o(19)) : 2 === e0 ? 0 !== u.id || bf.dp.data[140].value ? n.o(8, n.rs, new rt(16)) : n.s.aM8(n.rs, 16) : 3 ===
			e0 && n.o(1)
	}
	qI.e.style.position = "absolute", qI.e.style.textAlign = "center", qI.e.placeholder = L(270), this.show = function() {
		aW.setState(0), u.v.setState(12), this.aDE.show(), aM4[4].pp(b6.color.a1a(bf.dp.data[121].value)), this.resize(), document.body.appendChild(qI.e);
		for (var a7 = 0; a7 < aM4.length; a7++) document.body.appendChild(aM4[a7].button);
		1 !== u.id || u.f1 < 5 || (aM5 && bb.lo > aM5 + 144e5 ? u.u3.setState(14) : aM5 = bb.lo)
	}, this.r1 = function() {
		this.aDE.r1(), document.body.removeChild(qI.e);
		for (var a7 = 0; a7 < aM4.length; a7++) document.body.removeChild(aM4[a7].button)
	}, this.resize = function() {
		this.aDE.resize(), this.aDE.resize(), aLC.resize();
		var gap = .5 * bY.gap,
			sm = 10 / 99 * .84 * aLC.a1,
			aMB = .16 * aLC.j7,
			a7D = .19 * aLC.a1,
			ef = aLC.ef + a7D,
			sm = aLC.eh + sm + 3 * gap,
			a1 = .5 * (aLC.a1 - gap) - a7D,
			a7D = aLC.a1 - 2 * a7D - aMB - gap,
			a7D = (b6.pT.sI(qI.e, ef, sm, a7D, aMB), b6.pT.sI(aM4[4].button, ef + a7D + gap, sm, aMB, aMB), .5 * (aLC.eh + aLC.j7 - (sm += aMB + gap) - gap));
		b6.pT.sI(aM4[0].button, ef, sm, a1, a7D), b6.pT.sI(aM4[1].button, ef + a1 + gap, sm, a1, a7D), b6.pT.sI(aM4[2].button, ef, sm + a7D + gap, a1, a7D), b6.pT.sI(aM4[3].button, ef + a1 + gap, sm + a7D + gap, a1, a7D);
		b6.pT.sI(aM4[5].button, ef, sm + a7D * 2 + gap * 2, a1 * 2 + gap, a7D / 3);
		b6.pT.sI(aM4[6].button, ef, sm + a7D * 2.33 + gap * 3, a1 * 2 + gap, a7D / 3);
		for (var a7 = 0; a7 < aM4.length; a7++) aM4[a7].button.style.font = b6.pT.rV(0, b6.pT.a1r(.065 * aLC.j7)), b6.pT.pf(aM4[a7].button, 5);
		qI.e.style.font = b6.pT.rV(0, b6.pT.a1r(.08 * aLC.j7)), b6.pT.pf(qI.e, 5)
	}, this.tT = function() {
		if (aW.aCg(), aP.tT(), aK.tT(), bU.tT(), aX.sJ()) {
			if (__fx.settings.displayWinCounter) {
				const size = Math.floor(aLC.a1 * 0.03);
				tU.font = b6.pT.rV(1, size);
				tU.fillStyle = "#ffffff";
				const text = "Win count: " + __fx.wins.count;
				const textLength = tU.measureText(text).width;
				tU.textAlign = "left";
				tU.textBaseline = "middle";
				tU.fillText(text, tU.canvas.width - textLength - size / 2, size);
			};
			tU.imageSmoothingEnabled = !1;
			var et = aX.aCj("territorial.io"),
				mA = .84 * aLC.a1 / et.width;
			tU.setTransform(mA, 0, 0, mA, aLC.ef + .08 * aLC.a1, aLC.eh), aM3 = aM3 || b6.a0x.a2N(et, b6.a0x.a2T, [0, 0, 0]);
			for (var ef = -1; ef <= 1; ef += 2)
				for (var eh = -1; eh <= 1; eh += 2) tU.drawImage(aM3, ef, eh);
			tU.drawImage(et, 0, 0), tU.imageSmoothingEnabled = !0;
			var hQ = aX.aCj("logo"),
				aMD = .6666 * mA * et.height / hQ.height,
				mB = .5 * at.a1,
				mC = aLC.eh + .5 * mA * et.height - .5 * aMD * hQ.height;
			tU.setTransform(aMD, 0, 0, aMD, mB - .6 * mA * et.width, mC), tU.drawImage(hQ, 0, 0), tU.setTransform(aMD, 0, 0, aMD, mB + .6 * mA * et.width - aMD * hQ.width, mC), tU.drawImage(hQ, 0, 0), tU.setTransform(1, 0, 0, 1, 0, 0), tU
				.imageSmoothingEnabled = !0
		}
	}
}

function aJC() {
	var aJS, aME, aMF, tF;

	function aMG(a7) {
		n.o(8, n.rs, new rt(21, {
			sB: a7,
			sC: 0,
			sD: 10
		}))
	}
	this.show = function() {
		aJS.show(), this.resize()
	}, this.r1 = function() {
		aJS.r1()
	}, this.resize = function() {
		aJS.resize(), aME.resize()
	}, this.a0j = function(et) {
		2 === et && aJS.tL[0].pm()
	}, aMF = [new q(L(271), function() {
		aMG(1)
	}, 0, 0, 1), new q(L(272), function() {
		aMG(2)
	}, 0, 0, 1), new q(L(273), function() {
		aMG(3)
	}, 0, 0, 1), new q(L(274), function() {
		aMG(0)
	}, 0, 0, 1), new q(L(275), function() {
		aMG(9)
	}, 0, 0, 1), new q(L(276), function() {
		aMG(10)
	}, 0, 0, 1)], tF = [new q("⬅️ " + L(31), function() {
		n.zy()
	})], aJS = new tE(L(277), tF), aME = new q3(aMF, aJS.tK)
}

function aAV(title, pG, aMH) {
	var aJS, aLQ;
	this.show = function() {
		aJS.show(), this.resize()
	}, this.r1 = function() {
		aJS.r1()
	}, this.resize = function() {
		aJS.resize(), aLQ.resize()
	}, this.a0j = function(et) {
		2 === et && aJS.tL[0].pm()
	}, aMH = aMH || [new q("⬅️ " + L(31), function() {
		n.zy()
	}, b7.nD)], aJS = new tE(title, aMH), aLQ = new rE(aJS.tK, pG), b6.pT.textAlign(aJS.tK.style, 1)
}

function aLh(data) {
	var aJS, aMI, et, rk;

	function aMJ(hU) {
		var eY = data.data.length;
		if (eY) {
			for (var sC, max = min = parseInt(data.data[0][0]), a7 = 1; a7 < eY; a7++) var aMQ = parseInt(data.data[a7][0]),
				min = Math.min(aMQ, min),
				max = Math.max(aMQ, max);
			sC = hU < 0 ? min + hU : max + 1, n.o(8, n.aDD().aJ0, new rt(21, {
				sB: data.sB,
				sC: sC,
				sD: sC + Math.abs(hU)
			}))
		}
	}
	this.show = function() {
			aJS.show(), this.resize()
		}, this.r1 = function() {
			aJS.r1()
		}, this.resize = function() {
			aJS.resize(), aMI.resize()
		}, this.a0j = function(et) {
			2 === et && aJS.tL[0].pm()
		}, et = data.data.length ? 0 : 1, et = [new q("⬅️ " + L(31), function() {
			n.zy()
		}), new q(L(278), function() {
			aMJ(-10)
		}, et, 0, 1), new q(L(279), function() {
			aMJ(10)
		}, et, 0, 1), new q(L(229), function() {
			n.o(11, 10, new aMK({
				sB: data.sB
			}))
		})], rk = [L(280), L(281), L(282), L(283), L(284), L(285), L(286), L(287), L(288), L(289), L(276)], aJS = new tE(rk[data.sB], et),
		function() {
			var a7, eb = {
					re: []
				},
				re = eb.re,
				aMM = data.data,
				eY = aMM.length,
				mA = [.1, .001, .001, 1, 100, 1, .01, 1, 100, .01, .01][data.sB],
				a2X = [1, 3, 3, 0, 0, 0, 2, 0, 0, 2, 2][data.sB],
				rk = [
					[L(290), L(291) + " ↗", L(292)],
					[L(290), L(293), L(294), L(295) + " ↗"],
					[L(290), L(291) + " ↗", L(294)],
					[L(290), L(291) + " ↗", L(294)],
					[L(296), L(297), L(298) + " ↗", L(299) + " ↗", L(113)],
					[L(296), L(297), L(300) + " ↗", L(301) + " ↗", L(302)],
					[L(296), L(297), L(303) + " ↗", L(304) + " ↗", L(305)],
					[L(296), L(297), L(300) + " ↗", L(301) + " ↗", L(306)],
					[L(296), L(297), L(298) + " ↗", L(299) + " ↗", L(113)],
					[L(290), L(291) + " ↗", L(294)],
					[L(290), L(291) + " ↗", L(307)]
				];
			if (eb.rk = rk[data.sB], eb.ro = [
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
				][data.sB], 0 === data.sB || 2 === data.sB || 3 === data.sB || 9 === data.sB || 10 === data.sB)
				for (a7 = 0; a7 < eY; a7++) re.push([{
					f0: aMM[a7][0] + 1 + ".",
					dk: 0
				}, {
					f0: aMM[a7][1],
					dk: 1,
					qr: aMM[a7][4],
					rr: aMM[a7][3]
				}, {
					f0: (mA * aMM[a7][2]).toFixed(a2X),
					dk: 0
				}]);
			else if (1 === data.sB)
				for (a7 = 0; a7 < eY; a7++) re.push([{
					f0: aMM[a7][0] + 1 + ".",
					dk: 0
				}, {
					f0: aMM[a7][1],
					dk: 0
				}, {
					f0: (mA * aMM[a7][2]).toFixed(a2X),
					dk: 0
				}, {
					f0: aMM[a7][3],
					dk: 1,
					qr: aMM[a7][5],
					rr: aMM[a7][4]
				}]);
			else if (4 === data.sB || 5 === data.sB || 6 === data.sB || 7 === data.sB || 8 === data.sB)
				for (a7 = 0; a7 < eY; a7++) {
					var aMP = aMM[a7][5];
					4 === data.sB || 8 === data.sB ? "100%" === (aMP = (aMP % 64 * 100 / (aMP >> 6)).toFixed(0) + "%") && (4 === data.sB ? aMP += " (" + L(308) + ")" : aMP += " (" + L(309) + ")") : 5 === data.sB ? 32768 <= aMP && (aMP = -(aMP -
						32768)) : aMP = (mA * aMP).toFixed(a2X), re.push([{
						f0: "" + aMM[a7][0],
						dk: 0
					}, {
						f0: "" + aMM[a7][6],
						dk: 0
					}, {
						f0: aMM[a7][7],
						dk: 1,
						qr: aMM[a7][1],
						rr: aMM[a7][2]
					}, {
						f0: aMM[a7][8],
						dk: 1,
						qr: aMM[a7][3],
						rr: aMM[a7][4]
					}, {
						f0: "" + aMP,
						dk: 0
					}])
				}
			aMI = new rd(aJS.tK, eb)
		}()
}

function aMK(a2P) {
	var aJS, aJT, pO;
	this.show = function() {
		aJS.show(), this.resize()
	}, this.r1 = function() {
		aJS.r1()
	}, this.resize = function() {
		aJS.resize(), aJT.resize()
	}, this.a0j = function(et) {
		2 === et && aJS.tL[0].pm()
	}, aJS = new tE(L(310), [new q("⬅️ " + L(31), function() {
		n.aJQ(10)
	})]), aJT = new pM(aJS.tK, ((pO = []).push(function() {
		var aJs, aJk = new p6,
			aLA = new qJ(bf.dp.data[132], 1, function() {
				aJs.button.click()
			}),
			aLB = new qJ(bf.dp.data[131], 1, function() {
				aLA.e.focus()
			});
		aJk.p9(L(234)), aJk.pK(aLB), aLB.e.style.marginBottom = "0.8em", aJk.p9(L(235)), aJk.pK(aLA);
		return aJs = new q(L(233), function() {
			sC = Math.floor(aLB.e.value), sD = Math.floor(aLA.e.value);
			var sD, sC = {
				a1E: Math.min(sC, sD),
				aIb: Math.max(sC, sD)
			};
			n.o(8, n.aBT(10).aJ0, new rt(21, {
				sB: a2P.sB,
				sC: sC.a1E,
				sD: sC.aIb
			}))
		}, 0, 0, 1), aJk.pK(new rF([aJs.button])), aJk
	}()), pO.push(function() {
		var aJs, aJk = new p6,
			aLA = new qJ(bf.dp.data[134], 1, function() {
				aJs.button.click()
			}),
			aLB = new qJ(bf.dp.data[133], 0, function() {
				aLA.e.focus()
			});
		return aJk.p9(1 === a2P.sB ? L(311) : L(312)), aJk.pK(aLB), aLB.e.style.marginBottom = "0.8em", aJk.p9(L(313)), aJk.pK(aLA), aJs = new q(L(233), function() {
			var aLZ = aLB.e.value.slice(0, 20),
				aLa = Math.abs(Math.floor(aLA.e.value));
			n.o(8, n.aBT(10).aJ0, new rt(22, {
				sB: a2P.sB,
				aLZ: aLZ,
				aLa: aLa
			}))
		}, 0, 0, 1), aJk.pK(new rF([aJs.button])), aJk
	}()), pO.push(function() {
		var aJs, aJk = new p6,
			aLA = new qJ(bf.dp.data[152], 1, function() {
				aJs.button.click()
			}),
			aLB = new qJ(bf.dp.data[151], 0, function() {
				aLA.e.focus()
			});
		return aJk.p9(L(314)), aJk.pK(aLB), aLB.e.style.marginBottom = "0.8em", aJk.p9(L(313)), aJk.pK(aLA), aJs = new q(L(233), function() {
			var aLZ = aLB.e.value.slice(0, 5),
				aLa = Math.abs(Math.floor(aLA.e.value));
			n.o(8, n.aBT(10).aJ0, new rt(28, {
				sB: a2P.sB,
				aLZ: aLZ,
				aLa: aLa
			}))
		}, 0, 0, 1), aJk.pK(new rF([aJs.button])), aJk
	}()), pO))
}

function aJP() {
	var aMU, sM, aMX, sL, sO, aMV = [new Array(4), [], new Array(2), new Array(2)],
		aMW = new Array(4),
		aMY = [L(55), L(275), L(315), L(316)];

	function aMc() {
		var a5K = aMU.sZ.qI.e.value.slice(0, 127);
		return a5K.length < 1 || (aMU.sZ.qI.e.value = "", aw.aBw.aBx(3, a5K)), 1
	}

	function aMb(aMe) {
		bk.s.qY[3] = 1 - bk.s.qY[3], aMd(3, 1, bk.s.qY[3]), aMe && aw.aBw.aBx(4)
	}

	function aMZ(er, es) {
		bk.s.qY[er] !== es && (0 === er && bk.s.qY[3] && aMb(0), aMd(er, bk.s.qY[er], 0), aMd(er, es, 1), bk.s.qY[er] = es, 0 === er ? (aw.aBw.aBx(2, es), bk.s.qY[2] ? (aMU.sa.lI(), aMU.sZ.qV(1)) : aMU.sZ.qV(0), n.aDD().aBW(), n.aDD().aBV()) : 2 ===
			er && (0 === es ? (aw.aBw.aBx(0), aMU.sZ.lI(), aMU.si()) : (aw.aBw.aBx(1), aMU.sa.lI(), aMU.sj())))
	}

	function aMd(er, es, color) {
		aMU.sc[er].q4[es].pp(color ? b7.mx : b7.ng)
	}

	function aMg(aAv) {
		return aAv < 7 ? aAv + 2 + " " + L(323) : 7 === aAv || 10 === aAv ? L(275) + " (Full-Sending: " + L(7 === aAv ? 324 : 325) + ")" : 8 === aAv ? "1v1" : L(326)
	}

	function aMh(f0) {
		var a5N = bH.dl(f0, 60),
			f0 = f0 % 60;
		return (a5N < 10 ? "0" : "") + a5N + ":" + (f0 < 10 ? "0" : "") + f0
	}
	this.aBU = function() {
		aMU.sa.lI()
	}, this.aBW = function() {
		var aMf = bk.s.qY[0],
			aMf = bk.s.qa[aMf];
		bO.a3(aMf.eE, aMf.mapSeed), sM.q4[0].button.textContent = L(253) + ": " + bO.v5.v6[aMf.eE].name, sM.q4[1].button.textContent = L(255, 0, "Mode") + ": " + aMg(aMf.aAv), sM.q4[2].button.textContent = L(320) + ": " + bO.v5.v6[aMf.aBy].name,
			sM.q4[3].button.textContent = L(321, 0, "Next Mode") + ": " + aMg(aMf.aBz), sM.q4[4].button.textContent = L(322) + ": " + aMh(aMf.aBY), sM.resize()
	}, this.aBV = function() {
		var aMf = bk.s.qY[0],
			qZ = bk.s.qa[aMf];
		aMU.sg(qZ.sh);
		for (var a7 = 0; a7 < bk.su.sv.length; a7++) aMV[0][a7].qU.textContent = "" + bk.su.sv[a7].length;
		var su = bk.su.sv[aMf],
			aMi = su.length,
			aMj = bk.su.sw[aMf];
		aMV[2][1].qU.textContent = "" + aMi, aMV[3][1].qU.textContent = "" + aMj, sM.q4[4].button.textContent = L(322) + ": " + aMh(qZ.aBY);
		for (a7 = 0; a7 < 4; a7++) {
			var aMk = bk.s.qa[a7];
			aMW[a7] ? 0 === aMk.sh && (aMW[a7].qU.textContent = bO.v5.v6[aMk.eE].name) : aMW[a7] = new qT(bO.v5.v6[aMk.eE].name, sL.q4[a7].button, 1, 1), b6.zF.startsWith(aMY[a7], "🏆 ") ? aMk.aB1 || (aMY[a7] = aMY[a7].substring(3), sL.q4[a7]
				.button.textContent = aMY[a7], sL.q4[a7].button.appendChild(aMV[0][a7].qU), sL.q4[a7].button.appendChild(aMW[a7].qU)) : aMk.aB1 && (aMY[a7] = "🏆 " + aMY[a7], sL.q4[a7].button.textContent = aMY[a7], sL.q4[a7].button
				.appendChild(aMV[0][a7].qU), sL.q4[a7].button.appendChild(aMW[a7].qU))
		}
		var qZ = "",
			aMm = "";
		0 === aMf && (qZ = bk.qg.aBG(su, 0, aMi), aMm = bk.qg.aBG(su, 0, aMj)), aMX[0].qU.textContent = qZ, aMX[1].qU.textContent = aMm, sM.q4[5].button.textContent = L(227) + " (MP): " + bk.s.aBM[0], sM.q4[6].button.textContent = L(227) +
			" (SP): " + bk.s.aBM[1]
	}, this.aBa = function() {
		aMU.sZ.lI()
	}, this.show = function() {
		aMU.show(), this.resize()
	}, this.r1 = function() {
		aMU.r1(), bk.t3.r1(), bk.qy.r1()
	}, this.resize = function() {
		aMU.resize(1 - bk.s.qY[2])
	}, this.a0j = function(et) {
		2 === et && aMU.sc[3].q4[0].pm()
	}, sL = new rI([new q(aMY[0], function() {
		return aMZ(0, 0), 2
	}), new q(aMY[1], function() {
		return aMZ(0, 1), 2
	}), new q(aMY[2], function() {
		return aMZ(0, 2), 2
	}), new q(aMY[3], function() {
		return aMZ(0, 3), 2
	})], b7.ng), sM = new rI([new q("", 0, 2), new q("", 0, 2), new q("", 0, 2), new q("", 0, 2), new q("", 0, 2), new q("", 0, 2), new q("", 0, 2)], b7.nh, 1);
	var aMa = new rI([new q(L(317), function() {
		return aMZ(2, 0), 2
	}), new q(L(109), function() {
		return aMZ(2, 1), 2
	})], b7.ng);
	sO = new rI([new q(L(318), (__fx.customLobby.setLeaveFunction(() => {
			n.r(), bk.a01(), aw.s.a00(3240), __fx.customLobby.setActive(false), n.o(5, 5)
		}),
		function() {
			n.r(), bk.a01(), aw.s.a00(3240), __fx.customLobby.setActive(false), n.o(5, 5)
		})), new q(L(319), function() {
		return aMb(1), 2
	})], b7.ng), aMU = new sK(sL, sM, aMa, sO, aMc, bk.t3.aBg);
	for (var a7 = 0; a7 < 4; a7++) aMV[0][a7] = new qT("0", sL.q4[a7].button);
	aMV[2][1] = new qT("0", aMa.q4[1].button), aMV[3][1] = new qT("0", sO.q4[1].button), aMX = [new qT("", aMa.q4[1].button, 1, 1), new qT("", sO.q4[1].button, 1, 1)], aMd(0, bk.s.qY[0], 1), aMd(2, bk.s.qY[2], 1)
}

function aJ6() {
	var aJS, aJT, pO;
	this.show = function() {
		aJS.show(), this.resize()
	}, this.r1 = function() {
		aJS.r1()
	}, this.resize = function() {
		aJS.resize(), aJT.resize()
	}, this.a0j = function(et) {
		2 === et && aJS.tL[0].pm()
	}, aJS = new tE(L(327), [new q("⬅️ " + L(31), function() {
		n.o(7, n.aBT(7).aJ0)
	}), new q(L(184), function() {
		bf.rC.rD(105, bC.rv.up(aJT.pQ[0].p7[0].e.value, 5)), bf.rC.rD(106, bC.rv.up(aJT.pQ[1].p7[0].e.value, 8)), n.o(8, n.aBT(7).aJ0, new rt(18))
	})]), aJT = new pM(aJS.tK, ((pO = []).push(function() {
		var aJk = new p6;
		return aJk.p9(L(165)), aJk.pK(new qJ({
			value: "",
			e0: -1
		})), aJk
	}()), pO.push(function() {
		var aJk = new p6,
			aJv = (aJk.p9(L(167)), new qJ({
				value: "",
				e0: -1
			}));
		return aJv.e.type = "password", aJk.pK(aJv), aJk.pK(new rF([new q(L(168), function(e) {
			return e.textContent === L(168) ? (e.textContent = L(169), aJv.e.type = "text") : (e.textContent = L(168), aJv.e.type = "password"), !0
		}).button])), aJk
	}()), pO))
}

function aJD() {
	var aJS, aME, aMF, tF;

	function aMG(a7) {
		n.o(8, n.rs, new rt(21, {
			sB: a7,
			sC: 0,
			sD: 10
		}))
	}
	this.show = function() {
		aJS.show(), this.resize()
	}, this.r1 = function() {
		aJS.r1()
	}, this.resize = function() {
		aJS.resize(), aME.resize()
	}, this.a0j = function(et) {
		2 === et && aJS.tL[0].pm()
	}, aMF = [new q(L(285), function() {
		aMG(5)
	}, 0, 0, 1), new q(L(286), function() {
		aMG(6)
	}, 0, 0, 1), new q(L(287), function() {
		aMG(7)
	}, 0, 0, 1)], tF = [new q("⬅️ " + L(31), function() {
		n.zy()
	})], aJS = new tE(L(328), tF), aME = new q3(aMF, aJS.tK)
}

function aIw() {
	this.dp = {}, this.sE = new Array(6), this.aJB = null, this.aJ8 = null, this.rb = 0, this.aEY = [0], this.t = function() {
			n.o(5, 5)
		}, this.aM7 = function() {
			n.r(), aV.aCM(0), aV.dU()
		},
		__fx.customLobby.setJoinFunction(() => {
			n.r();
			aV.aCM(0);
			aV.dU();
		}), this.aAC = function() {
			n.o(0 === aW.zo() ? 5 : 0)
		}, this.aL9 = function() {
			if (1 === bf.dp.data[130].value) n.o(8, n.aDD().aJ0, new rt(24, {
				aKh: bf.dp.data[125].value,
				sC: bf.dp.data[128].value,
				sD: bf.dp.data[129].value
			}));
			else {
				for (var g = (g = bf.dp.data[126].value.split(",")).slice(0, 10), a7 = 0; a7 < g.length; a7++) g[a7] = g[a7].trim().slice(0, 7).toUpperCase();
				1 === g.length && 0 === g[0].length && (g = []), n.o(8, n.aDD().aJ0, new rt(23, {
					aKh: bf.dp.data[125].value,
					zH: g
				}))
			}
		}, this.aM8 = function(aJ0, target) {
			n.o(4, aJ0, new p("Data Usage Information",
				"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: <a href='" + bG.aMo +
				"' target='_blank'>" + bG.aMo + "</a>", !1, [new q("⬅️ " + L(31), function() {
					n.o(aJ0)
				}), new q("✅ Accept", function() {
					bf.rC.rD(140, 1), 0 === target ? n.o(2, aJ0) : n.o(8, aJ0, new rt(target))
				})]))
		}, this.aMp = function() {
			for (var a7 = 0; a7 < 6; a7++) this.sE[a7] = bC.ug.uk(bD.oT(5));
			this.sE[1] = "[" + this.sE[1] + "]", 5 === n.rs && (n.aDD().aDE.rD(this.sE), n.aDD().resize())
		}
}

function aJG() {
	var aKE, aKF, aMq, pO;

	function aKH() {
		b2.a01(), n.aJR()[19] = null, n.zy()
	}

	function aMx() {
		aN0(), aMy()
	}

	function aN0() {
		aMq.p8.lastChild && aMq.p8.removeChild(aMq.p8.lastChild)
	}

	function aMy() {
		var aN1 = bO.a3P(a9.data);
		a9.data.canvas = bO.aH3(aN1, a9.data.mapSeed).vF, aMz()
	}

	function aMz() {
		var a1T = a9.data.canvas;
		a1T.style.width = "100%", aMq.p8.appendChild(a1T)
	}
	this.aEI = function(a1T) {
		a9.data.canvas && aN0(), a9.data.canvas = a1T, aMz()
	}, this.show = function() {
		aKE.show(), this.resize()
	}, this.r1 = function() {
		aKE.r1()
	}, this.resize = function() {
		aKE.resize(), aKF.resize()
	}, this.a0j = function(et) {
		2 === et && aKE.tL[0].pm()
	}, aKE = new tE(L(253), [new q("⬅️ " + L(31), aKH)]), 2 === a9.data.mapType && b2.dU(), aKF = new pM(aKE.tK, (function(pO) {
		var aJk = new p6;
		aJk.p9(L(221)), aJk.pH(new t9({
			tD: [L(329), L(330), L(331)],
			value: a9.data.mapType
		}, function(e0) {
			2 === (a9.data.mapType = e0) ? (b2.dU(), a9.data.canvas = null) : (a9.data.passableWater = a9.data.passableMountains = 1, b2.a01()), n.o(20)
		})), 2 <= a9.data.mapType && (aJk.pK(new rP), aJk.pK(new r9({
			value: a9.data.passableWater
		}, L(332), function(value) {
			a9.data.passableWater = value
		})), aJk.pK(new r9({
			value: a9.data.passableMountains
		}, L(333), function(value) {
			a9.data.passableMountains = value
		})));
		pO.push(aJk)
	}(pO = []), function(pO) {
		if (0 === a9.data.mapType) {
			for (var aJk = new p6, tD = (aJk.p9(L(253)), []), a7 = 0; a7 < bO.v5.aHx.length; a7++) tD.push(bO.v5.v6[bO.v5.aHx[a7]].name);
			aJk.pH(new t9({
				tD: tD,
				value: a9.data.mapProceduralIndex
			}, function(e0) {
				a9.data.mapProceduralIndex = e0, aMx()
			})), pO.push(aJk)
		}
	}(pO), function(pO) {
		if (1 === a9.data.mapType) {
			for (var aJk = new p6, tD = (aJk.p9(L(253)), []), a7 = 0; a7 < bO.v5.aHy.length; a7++) tD.push(bO.v5.v6[bO.v5.aHy[a7]].name);
			aJk.pH(new t9({
				tD: tD,
				value: a9.data.mapRealisticIndex
			}, function(e0) {
				a9.data.mapRealisticIndex = e0, aMx()
			})), pO.push(aJk)
		}
	}(pO), function(pO) {
		var aJk;
		2 === a9.data.mapType && ((aJk = new p6).p9(L(253)), aJk.pK(new rF([new q(L(334), function() {
			return b2.aEB(), !0
		}).button])), pO.push(aJk))
	}(pO), function(pO) {
		(aMq = new p6).p9(L(335)), 2 !== a9.data.mapType ? aMy() : a9.data.canvas && aMz();
		pO.push(aMq)
	}(pO), function(pO) {
		var aJk, qI, aJs;
		0 === a9.data.mapType && ((aJk = new p6).p9("Seed"), qI = new qJ({
			e0: -1,
			value: a9.data.mapSeed
		}, 1, 0, function(e) {
			e = Math.abs(Math.floor(e.target.value)) % 16384;
			a9.data.mapSeed !== e && (a9.data.mapSeed = e, aMx())
		}), aJs = new q(L(246), function(e) {
			var aGy = Math.floor(16384 * Math.random());
			if (a9.data.mapSeed !== aGy) return qI.e.value = a9.data.mapSeed = aGy, aMx(), !0
		}), aJk.pK(qI), aJk.pK(new rF([aJs.button])), pO.push(aJk))
	}(pO), function(pO) {
		var aJk, qI;
		2 === a9.data.mapType && ((aJk = new p6).p9(L(336)), qI = new qJ({
			e0: -1,
			value: a9.data.mapName
		}, 0, 0, function(e) {
			a9.data.mapName = e.target.value = e.target.value.slice(0, 20)
		}), aJk.pK(qI), pO.push(aJk))
	}(pO), pO))
}

function p(title, pG, aN2, aMH) {
	var aJS, aLQ;
	this.show = function() {
		aJS.show(), this.resize()
	}, this.r1 = function() {
		aJS.r1()
	}, this.resize = function() {
		aJS.resize(), aLQ.resize()
	}, this.a0j = function(et) {
		2 === et && aJS.tL[0].pm()
	}, aMH = aMH || [new q("⬅️ " + L(31), function() {
		n.zy()
	})], aJS = new tE(title, aMH), aLQ = new rE(aJS.tK, pG), aN2 && b6.pT.textAlign(aJS.tK.style, 1)
}

function aJJ() {
	var aKE, aKF, aKG, pO;

	function aKH() {
		aKJ(), 2 === a9.data.playerNamesType && 1 === b6.pd.a1A(a9.data.playerNamesData).length && (a9.data.playerNamesType = 0), 2 !== a9.data.playerNamesType && (a9.data.playerNamesData = null), n.aJR()[19] = null, n.zy()
	}

	function aKJ() {
		2 === a9.data.playerNamesType && b6.pd.a1O(aKG.tk(), a9.data.playerNamesData, 20)
	}
	this.show = function() {
		aKE.show(), this.resize()
	}, this.r1 = function() {
		aKE.r1()
	}, this.resize = function() {
		aKE.resize(), aKF.resize()
	}, this.a0j = function(et) {
		2 === et && aKE.tL[0].pm()
	}, aKE = new tE(L(257), [new q("⬅️ " + L(31), aKH)]), aKF = new pM(aKE.tK, (function(pO) {
		var aJk = new p6;
		aJk.p9(L(221)), aJk.pH(new t9({
			tD: [L(258), L(259), L(224)],
			value: a9.data.playerNamesType
		}, function(e0) {
			aKJ(), a9.data.playerNamesType = e0, n.o(23)
		})), aJk.pK(new rP), aJk.pK(new r9({
			value: a9.data.selectableName
		}, L(337), function(value) {
			a9.data.selectableName = value
		})), pO.push(aJk)
	}(pO = []), function(pO) {
		var aJk;
		2 === a9.data.playerNamesType && ((aJk = new p6).p9("Data"), aKG = new tc(0, 1, 0, 1), a9.data.playerNamesData && a9.data.playerNamesData.length === a9.eV || (a9.data.playerNamesData = new Array(a9.eV), a9.data.playerNamesData
			.fill("")), aKG.tj(b6.zF.a2k(a9.data.playerNamesData, 1, '"')), aJk.pK(aKG), pO.push(aJk))
	}(pO), pO))
}

function aJ4() {
	var aKE, th;

	function aN3() {
		n.r();
		var pA = b5.aN7(th.tk());
		(a9.ye && 0 < pA.length && pA === b5.oi.a3G || b5.aEi.v0(pA)) && b5.aN8()
	}
	this.show = function(aN4) {
		this.aN5(aN4), aKE.show(), this.resize()
	}, this.aN5 = function(aN4) {
		0 === a9.ye ? aN4 ? th.tj(aN4) : b5.oi.a3G.length && th.tj(b5.oi.a3G) : (a9.gi || (b5.oi.a3G = b5.a3H.y7()), th.tj(b5.aN6(b5.oi.a3G)))
	}, this.r1 = function() {
		aKE.r1()
	}, this.resize = function() {
		aKE.resize(), th.resize()
	}, this.a0j = function(et) {
		2 === et ? aKE.tL[0].pm() : aN3()
	}, aKE = new tE(L(338), [new q("⬅️ " + L(31), function() {
		n.aJQ(1)
	}), new q(L(339), function() {
		th.tl()
	}), new q(L(340), function() {
		th.tm()
	}), new q(L(341), function() {
		th.clear()
	}), new q(L(342), function() {
		aN3()
	})]), th = new tc(L(343)), aKE.tK.appendChild(th.e)
}

function aJ3() {
	var aJS, aJT, pO, aA8, aJk;

	function aN9() {
		var lo;
		aA8 !== bf.dp.data[12].value ? (b3.dU(), b3.aA7(), lo = bb.lo, n.o(4, 1, new p(L(346), L(347), !1, [new q("⬅️ " + L(31), function() {
			n.o(1)
		}), new q("🔄 Reload", function() {
			bb.lo < lo + 1500 || u.v.w()
		}, b7.mv)]))) : n.o(1)
	}
	this.show = function() {
			aA8 = bf.dp.data[12].value, aJS.show(), this.resize()
		}, this.r1 = function() {
			aJS.r1()
		}, this.resize = function() {
			aJS.resize(), aJT.resize()
		}, this.a0j = function(et) {
			2 === et && aJS.tL[0].pm()
		}, aJS = new tE(L(344), [new q("⬅️ " + L(31), aN9), new q(L(345), function() {
			n.r(), bf.rC.uN(), n.o(2)
		})]), pO = [], (aJk = new p6).p9(L(348)), aJk.pB(L(349)), pO.push(aJk),
		function(pO) {
			var aJk = new p6,
				g = (aJk.p9(L(367)), b3.data.aAD());
			aJk.pH(new t9({
				tD: g,
				value: b3.data.aAG(g)
			}, function(e0) {
				return bf.rC.rD(12, g[e0].split(":")[0]), !0
			})), pO.push(aJk)
		}(pO),
		function(pO) {
			var aJk = new p6,
				aNC = (aJk.p9(L(365)), []);
			aJk.pK(new rF([new q(L(366), function(e) {
				bT.aND();
				for (var a7 = 0; a7 < aNC.length; a7++) aNC[a7].e.value = bT.aNE[a7];
				return b6.pT.a1x(e), !0
			}).button]));
			for (var a7 = 0; a7 < bT.aNF.length; a7++) {
				aJk.pB(bT.aNF[a7]);
				for (var er = 0; er < 2; er++) {
					var e0 = 2 * a7 + er,
						qI = new qJ({
							value: bT.aNE[e0],
							e0: -1
						});
					qI.e.aNG = e0, aNC.push(qI), qI.e.addEventListener("keydown", function(e) {
						e.preventDefault();
						var code = e.code;
						e.target.value = code, bT.aNH(e.target.aNG, code)
					}), er && (qI.e.style.marginLeft = "4%"), qI.e.style.width = "48%", aJk.pK(qI)
				}
			}
			pO.push(aJk)
		}(pO), (aJk = new p6).p9(L(350)), bf.dp.data[1].tD = [L(351), L(352), L(353), L(354)], aJk.pH(new t9(bf.dp.data[1])), pO.push(aJk), (aJk = new p6).p9(L(355)), bf.dp.data[9].tD = [L(352), L(356), L(357)], aJk.pH(new t9(bf.dp.data[9])), pO
		.push(aJk), (aJk = new p6).p9(L(358)), bf.dp.data[11].tD = [L(359), L(9), L(360)], aJk.pH(new t9(bf.dp.data[11])), pO.push(aJk), (aJk = new p6).p9(L(361)), aJk.pK(new r9(bf.dp.data[2])), pO.push(aJk), (aJk = new p6).p9(L(362)), aJk.pK(new r9(
			bf.dp.data[7])), pO.push(aJk), (aJk = new p6).p9(L(363)), aJk.pK(new r9(bf.dp.data[8])), pO.push(aJk), (aJk = new p6).p9(L(364)), aJk.pK(new qJ(bf.dp.data[5])), pO.push(aJk), aJT = new pM(aJS.tK, pO)
}

function aJK() {
	var aKE, aKF, aKG, pO;

	function aKH() {
		aKJ(), 2 !== a9.data.spawningType || b6.pd.a1A(a9.data.spawningData) || (a9.data.spawningType = 0), 2 !== a9.data.spawningType && (a9.data.spawningData = null), n.aJR()[19] = null, n.zy()
	}

	function aKJ() {
		2 === a9.data.spawningType && b6.pd.a1M(aKG.tk(), a9.data.spawningData, bO.aEK - 1)
	}
	this.show = function() {
		aKE.show(), this.resize()
	}, this.r1 = function() {
		aKE.r1()
	}, this.resize = function() {
		aKE.resize(), aKF.resize()
	}, this.a0j = function(et) {
		2 === et && aKE.tL[0].pm()
	}, aKE = new tE(L(368), [new q("⬅️ " + L(31), aKH)]), aKF = new pM(aKE.tK, (function(pO) {
		var aJk = new p6,
			tD = (aJk.p9(L(221)), [L(246), L(256), L(224)]),
			value = a9.data.spawningType;
		0 === a9.data.gameMode && (tD.splice(1, 1), 0 < value) && (value = 1);
		aJk.pH(new t9({
			tD: tD,
			value: value
		}, function(e0) {
			aKJ(), a9.data.spawningType = e0, 0 === a9.data.gameMode && 1 === e0 && (a9.data.spawningType = 2), 2 !== a9.data.spawningType || a9.data.spawningData || (a9.data.spawningData = new Uint16Array(2 * a9.eV)), n.o(24)
		})), aJk.pK(new rP), aJk.pK(new r9({
			value: a9.data.selectableSpawn
		}, L(369), function(value) {
			a9.data.selectableSpawn = value
		})), pO.push(aJk)
	}(pO = []), function(pO) {
		var aJk = new p6;
		aJk.p9("Seed"), aJk.pK(new qJ({
			e0: -1,
			value: a9.data.spawningSeed
		}, 1, 0, function(e) {
			var value = Math.abs(Math.floor(e.target.value)) % 16384;
			e.target.value = a9.data.spawningSeed = value
		})), pO.push(aJk)
	}(pO), function(pO) {
		var aJk;
		2 === a9.data.spawningType && ((aJk = new p6).p9("Data"), (aKG = new tc(0, 1, 0, 1)).tj(b6.zF.a2k(a9.data.spawningData, 2)), aJk.pK(aKG), pO.push(aJk))
	}(pO), pO))
}

function aJ2() {
	var aJS, aME, aMF, tF;

	function aNI(id) {
		0 !== u.id || bf.dp.data[140].value ? 0 === id ? n.o(8, 1, new rt(16)) : n.o(2) : n.s.aM8(n.rs, 0 === id ? 16 : 0)
	}
	this.show = function() {
		u.v.setState(12), aJS.show(), this.resize(), this.iS()
	}, this.r1 = function() {
		aJS.r1()
	}, this.resize = function() {
		aJS.resize(), aME.resize()
	}, this.iS = function() {
		8 === aW.zo() && (2 <= bZ.aNN ? aMF[2].pn === b7.mk && aMF[2].pp(0) : aMF[2].pn !== b7.mk && aMF[2].pp(b7.mk), !a9.gi && aI.p3(a9.eI) ? aMF[1].pn === b7.mk && aMF[1].pp(0) : aMF[1].pn !== b7.mk && aMF[1].pp(b7.mk), !a9.gi && aq.p4(a9
			.eI) ? aMF[0].pn === b7.mk && aMF[0].pp(0) : aMF[0].pn !== b7.mk && aMF[0].pp(b7.mk))
	}, this.a0j = function(et) {
		2 === et && aJS.tL[0].pm()
	}, aMF = [new q(L(370), function() {
		aNI(0)
	}), new q(L(277), function() {
		n.o(16)
	}), new q(L(328), function() {
		n.o(17)
	}), new q(L(371), function() {
		n.s.aL9()
	}, 0, 0, 1), new q(L(338), function() {
		n.o(3, 1)
	}), new q(L(372), function() {
		n.o(18)
	}), new q(L(344), function() {
		aNI(1)
	}), new q(L(373), function() {
		n.o(4, 1, new p(L(373), b6.pT.a1s([L(382), L(383), "Discord", L(384), L(271), L(385), L(109), L(386), L(387), L(388)], [bG.aAS, bG.zj, bG.aAT, bG.aNO, bG.aNP, bG.zP, bG.aNQ, bG.aNR, bG.aNS, bG.aMo]), !1, [new q("⬅️ " + L(31),
			function() {
				n.o(1)
			})]))
	}), new q(L(374), function() {
		n.o(4, 1, new p(L(374), dh + "<br><a href='" + bG.aNO + "' target='_blank'>" + bG.aNO + "</a>" +
			"<br><br><b>" + "FX Client v" + __fx.version + "<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a>" +
			"<br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></b>", !0, [new q("⬅️ " + L(31), function() {
				n.o(1)
			})]))
	}), new q(L(375), function() {
		n.o(4, 1, new p(L(375), L(389) + "<br>" + L(390), !1, [new q("⬅️ " + L(31), function() {
			n.o(1)
		}), new q(L(391), function() {
			u.v.zc(), n.o(1)
		})]))
	}), new q(L(376), function() {
		u.v.zd(), n.o(4, 1, new p(L(392), L(393) + "<a href='" + bG.aMo + "' target='_blank'>" + bG.aMo + "</a>", !1, [new q("⬅️ " + L(31), function() {
			n.o(1)
		})]))
	})], tF = [new q("⬅️ " + L(31), function() {
		n.s.aAC()
	})], 8 === aW.zo() && (aMF.unshift(new q(L(379), function() {
		2 <= bZ.aNN && (n.r(), ba.a0m(), bb.dc = !0)
	}, 0, 1)), aMF.unshift(new q(L(380), function() {
		!a9.gi && aI.p3(a9.eI) && (b4.gv.o9(), n.r(), aI.gj) && aI.a0m()
	}, 0, 1)), aMF.unshift(new q(L(381), function() {
		!a9.gi && aq.p4(a9.eI) && (b4.gv.oB(), n.r(), aI.gj) && aI.a0m()
	}, 0, 1))), 1 === u.id && 5 <= u.f1 && aMF.push(new q(L(377), function() {
		u.v.ze()
	})), aJS = new tE(L(378), tF), aME = new q3(aMF, aJS.tK)
}

function aJO() {
	var aKE, aKF, aKG, pO;

	function aKH() {
		aKJ(), 2 !== a9.data.sResourcesType && (a9.data.sResourcesData = null), n.aJR()[19] = null, n.zy()
	}

	function aKJ() {
		2 === a9.data.sResourcesType && b6.pd.a1M(aKG.tk(), a9.data.sResourcesData, 2047)
	}
	this.show = function() {
		aKE.show(), this.resize()
	}, this.r1 = function() {
		aKE.r1()
	}, this.resize = function() {
		aKE.resize(), aKF.resize()
	}, this.a0j = function(et) {
		2 === et && aKE.tL[0].pm()
	}, aKE = new tE(L(262), [new q("⬅️ " + L(31), aKH)]), aKF = new pM(aKE.tK, (function(pO) {
		var aJk = new p6;
		aJk.p9(L(221)), aJk.pH(new t9({
			tD: [L(222), L(223), L(224)],
			value: a9.data.sResourcesType
		}, function(e0) {
			aKJ(), 2 !== e0 || a9.data.sResourcesData || (a9.data.sResourcesData = new Uint16Array(a9.eV)), a9.data.sResourcesType = e0, n.o(28)
		})), pO.push(aJk)
	}(pO = []), function(pO) {
		var aJk;
		1 === a9.data.sResourcesType && ((aJk = new p6).p9("Value"), aJk.pK(new qJ({
			e0: -1,
			value: a9.data.sResourcesValue
		}, 1, 0, function(e) {
			var value = bH.p0(Math.floor(e.target.value), 0, 2047);
			e.target.value = a9.data.sResourcesValue = value
		})), pO.push(aJk))
	}(pO), function(pO) {
		var aJk;
		2 === a9.data.sResourcesType && ((aJk = new p6).p9("Data"), (aKG = new tc(0, 1, 0, 1)).tj(b6.zF.a2k(a9.data.sResourcesData, 2)), aJk.pK(aKG), pO.push(aJk))
	}(pO), pO))
}

function aJM() {
	var aKE, aKF, aKG, pO;

	function aKH() {
		aKJ(), 2 !== a9.data.tIncomeType && (a9.data.tIncomeData = null), n.aJR()[19] = null, n.zy()
	}

	function aKJ() {
		2 === a9.data.tIncomeType && b6.pd.a1M(aKG.tk(), a9.data.tIncomeData, 255)
	}
	this.show = function() {
		aKE.show(), this.resize()
	}, this.r1 = function() {
		aKE.r1()
	}, this.resize = function() {
		aKE.resize(), aKF.resize()
	}, this.a0j = function(et) {
		2 === et && aKE.tL[0].pm()
	}, aKE = new tE(L(260), [new q("⬅️ " + L(31), aKH)]), aKF = new pM(aKE.tK, (function(pO) {
		var aJk = new p6;
		aJk.p9(L(221)), aJk.pH(new t9({
			tD: [L(222), L(223), L(224)],
			value: a9.data.tIncomeType
		}, function(e0) {
			aKJ(), 2 !== e0 || a9.data.tIncomeData || (a9.data.tIncomeData = new Uint8Array(a9.eV), a9.data.tIncomeData.fill(32)), a9.data.tIncomeType = e0, n.o(26)
		})), pO.push(aJk)
	}(pO = []), function(pO) {
		var aJk;
		1 === a9.data.tIncomeType && ((aJk = new p6).p9("Value"), aJk.pK(new qJ({
			e0: -1,
			value: a9.data.tIncomeValue
		}, 1, 0, function(e) {
			var value = bH.p0(Math.floor(e.target.value), 0, 255);
			e.target.value = a9.data.tIncomeValue = value
		})), pO.push(aJk))
	}(pO), function(pO) {
		var aJk;
		2 === a9.data.tIncomeType && ((aJk = new p6).p9("Data"), (aKG = new tc(0, 1, 0, 1)).tj(b6.zF.a2k(a9.data.tIncomeData, 4)), aJk.pK(aKG), pO.push(aJk))
	}(pO), pO))
}

function aJE() {
	var aJS, aJT, pO;
	this.show = function() {
		aJS.show(), this.resize()
	}, this.r1 = function() {
		aJS.r1()
	}, this.resize = function() {
		aJS.resize(), aJT.resize()
	}, this.a0j = function(et) {
		2 === et && aJS.tL[0].pm()
	}, aJS = new tE(L(372), [new q("⬅️ " + L(31), function() {
		n.zy()
	})]), aJT = new pM(aJS.tK, ((pO = []).push(function() {
		function aJp() {
			aNX.button.textContent = L(162), aNV.e.readOnly = !1, aNW.e.readOnly = !1, aJo.pp(1), aJo.button.style.color = b7.mY
		}
		var aJk = new p6,
			aNU = (aJk.p9(L(394)), new qJ({
				value: bf.dp.data[105].value,
				e0: -1
			})),
			aNV = (aNU.e.readOnly = !0, aJk.pK(aNU), aJk.p9(L(301), "0.8em"), new qJ(bf.dp.data[148])),
			aNV = new qJ(bf.dp.data[148], 0, void 0, function(e) {
				aJn(bf.dp.data[149].value, e.target.value)
			}),
			aNW = (aJk.pK(aNV), aJk.p9(L(305), "0.8em"), new qJ(bf.dp.data[149], 1, void 0, function(e) {
				aJn(e.target.value, bf.dp.data[148].value)
			})),
			aNX = (aJk.pK(aNW), new q(L(162), function(e) {
				return e.textContent === L(162) ? (e.textContent = L(163), aNV.e.readOnly = !0, aNW.e.readOnly = !0, aJo.pp(0), aJo.button.style.color = b7.nU, bf.rC.rD(149, aNW.e.value), aJn(bf.dp.data[149].value, bf.dp.data[
					148].value)) : aJp(), !0
			})),
			aJo = (aJk.pK(new rF([aNX.button])), new q(L(14), function(e) {
				return aNV.e.readOnly && aw.s.aCK(0) && (b6.pT.a1x(e), aJp(), aw.aJq.aJr({
					ru: 0,
					qr: bf.dp.data[148].value,
					rr: 0,
					value: bH.p0(Math.floor(100 * bf.dp.data[149].value), 0, 4294967295)
				})), !0
			}, 1)),
			pC = (aJk.pK(new rF([aJo.button])), aJk.pB()),
			aJn = function(f0, pA) {
				f0 = isNaN(f0) ? 0 : Number(f0);
				var f0 = Math.max(f0, (bf.dp.data[150].value + 1) / 100),
					aJu = Math.floor(100 * Math.max(1e-4 * f0, bf.dp.data[150].value / 100)) / 100;
				pC.textContent = L(164, [f0.toFixed(2), bf.dp.data[105].value, aJu.toFixed(2), pA, (f0 - aJu).toFixed(2)])
			};
		return aJn(bf.dp.data[149].value, bf.dp.data[148].value), aJk
	}()), pO))
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
	var a7R, aNZ, aNa, aNb, aNY = !1;

	function aNc() {
		aNY = !0, a7R = -1, aNZ = new Array(4);
		for (var a7 = 3; 0 <= a7; a7--) aNZ[a7] = !1;
		var w8 = Math.floor(1 + .02 * at.min);
		aNa = new Array(4), (aNb = new Array(4))[1] = aNb[3] = aNa[0] = aNa[2] = 0, aNb[0] = aNa[3] = -w8, aNa[1] = aNb[2] = w8
	}

	function aNd() {
		if (-1 !== a7R)
			if (0 !== a9.ye && aD.mG()) {
				for (var aNe = !1, a7 = 3; 0 <= a7; a7--) aNZ[a7] && (aNe = !0, hv += aNa[a7], hx += aNb[a7], ab.a0B(aNa[a7], aNb[a7]), aO.a79());
				aNe ? bb.dc = !0 : am.m6()
			} else am.m6()
	}
	this.a0h = function(e0) {
		0 !== a9.ye && aD.mG() && (aNY || aNc(), aNZ[e0] = !0, -1 === a7R) && (a7R = setInterval(aNd, 20), aNd())
	}, this.a0k = function(e0) {
		if (0 !== a9.ye && (aNY || aNc(), aNZ[e0] = !1, -1 !== a7R)) {
			for (var aNe = !1, a7 = 3; 0 <= a7; a7--) aNe = aNe || aNZ[a7];
			aNe || this.m6()
		}
	}, this.m6 = function() {
		if (aNY && -1 !== a7R) {
			for (var a7 = 3; 0 <= a7; a7--) aNZ[a7] = !1;
			clearInterval(a7R), a7R = -1
		}
	}
}

function cc() {
	this.s = new aNf, this.lD = new aNg, this.np = new aNh, this.aBw = new aNi, this.aA9 = new aNj, this.aJq = new aNk, this.oS = new aNl, this.aLW = new aNm, this.a50 = new aNn, this.aNo = new aNp, this.aNq = new aNr, this.aNs = new aNt, this.aNu =
		new aNv, this.dU = function() {
			this.s.dU()
		}
}

function aNf() {
	var aNw, aNy;
	this.aCx = 5, this.aCr = this.aCx - 1, this.aCP = this.aCx + this.aCr, this.aCO = [0, 1, 5, 2, 6, 3, 7, 4, 8], this.aNx = null;

	function aO5(a7) {
		return aNy[a7].aNY && aNw[a7].aO5()
	}

	function aO7(zl) {
		aNy[zl].lo = bb.lo, aNy[zl].aO0 = !1
	}
	this.zu = 0, this.zt = 0, this.dU = function() {
		this.aNx = new Array(this.aCx);
		this.aNx[0] = "territorial.io";
		var a7, aGy = au.aHJ(0);
		for (au.a36(0), a7 = 1; a7 < this.aCx; a7++) this.aNx[a7] = aG.yD() + ".territorial.io";
		for (au.a36(aGy), aNw = new Array(this.aCP), aNy = new Array(this.aCP), a7 = this.aCP - 1; 0 <= a7; a7--) aNy[a7] = {
			aNY: !1,
			lo: 0,
			aO0: !1
		};
		this.aCQ(0, 0)
	}, this.aO1 = function(a7) {
		return aNw[a7]
	}, this.aO2 = function() {
		return this.zt < this.aCx ? this.zt : this.zt - this.aCr
	}, this.iS = function() {
		for (var a7 = this.aCP - 1; 0 <= a7; a7--) this.aCK(a7) && bb.lo > aNy[a7].lo + 15e3 && aw.np.aO3(a7, aNy[a7].aO0);
		!this.aCK(0) && bb.lo > aNy[0].lo + 8e3 && (aNy[0].lo = bb.lo, this.aCQ(0, 0))
	}, this.aCQ = function(zl, aJ0) {
		if (aNy[zl].aNY) {
			if (aNw[zl].aO5()) return aNw[zl].aO6(aJ0), aNw[zl].aCK();
			aNw[zl].r1()
		}
		return this.aO4(zl, aJ0), !1
	}, this.aO4 = function(zl, aJ0) {
		aNy[zl].aNY = !0, aO7(zl), aNw[zl] = new aO8, aNw[zl].dU(zl, aJ0)
	}, this.aO6 = function(zl, aJ0) {
		aO5(zl) && aNw[zl].aO6(aJ0)
	}, this.aO9 = function(zl, aJ0) {
		aw.aA9.aOA(zl)
	}, this.aCK = function(a7) {
		return aNy[a7].aNY && aNw[a7].aCK()
	}, this.send = function(zl, a8) {
		aO7(zl), aNw[zl].send(a8)
	}, __fx.customLobby.setSendFunction(this.send), this.a0S = function(zl) {
		8 === aW.zo() && (aNy[zl].aO0 = !0, aw.lD.aOB = !0)
	}, this.close = function(zl, aOC) {
		aO5(zl) && aNw[zl].close(aOC)
	}, this.aOD = function(zl, aOC) {
		l.zz(aOC), aO5(zl) && aNw[zl].close(aOC)
	}, this.a00 = function(aOC) {
		for (var a7 = this.aCP - 1; 0 <= a7; a7--) this.close(a7, aOC)
	}, this.aOE = function(zl, aOC) {
		for (var a7 = this.aCP - 1; 0 <= a7; a7--) a7 !== zl && this.close(a7, aOC)
	}, this.a3I = function() {
		this.close(this.zu, 3246)
	}, this.aOF = function(zl, e) {
		aNw[zl].r1(), l.zk(zl, e.code)
	}
}

function aNg() {
	this.aOB = !1, this.iS = function() {
		bb.jb() % 250 != 249 || a9.gi || (aw.aA9.aOG(+(this.aOB && ac.lV[a9.eI]), ah.jf + bJ.s.og), this.aOB = !1)
	}
}

function aNn() {
	function aOh(aOi) {
		var eb = a9.data,
			aOi = (eb.selectedPlayer = bD.oT(aOi), eb.spawningSeed = bD.oT(14), bD.oT(4)),
			aOi = (aOi < 7 ? (eb.gameMode = 1, eb.numberTeams = aOi + 2) : 9 === aOi ? (eb.gameMode = eb.isZombieMode = 1, eb.numberTeams = 2) : (eb.gameMode = 0, eb.battleRoyaleMode = 7 === aOi ? 0 : 10 === aOi ? 1 : 2), eb.isContest = bD.oT(1), bD
				.oT(6));
		return eb.mapType = bO.aB2(aOi) ? 0 : 1, bO.aB3(eb, aOi), eb.mapSeed = bD.oT(14), aOi
	}
	this.aOI = function(zl, a8) {
		bD.dU(a8), 0 === bD.size ? aw.s.aOD(zl, 3205) : __fx.customLobby.isCustomMessage(a8) || ((0 === bD.oT(1) ? function(zl) {
			var aOM = bD.oT(6);
			0 === aOM ? function(zl) {
					if (0 === zl && 8 !== aW.zo()) {
						n.s.aMp();
						for (var aOZ = bD.oT(12), aOa = bD.oT(6), g = new Array(aOZ), a7 = 0; a7 < aOZ; a7++) g[a7] = bD.oT(aOa);
						aP.a7Y(g)
					}
				}(zl) : 2 === aOM ? aw.aNo.aOO(zl) : 3 === aOM || 4 === aOM ? ar.dU() : 9 === aOM ? aw.aNq.aOP(zl) : 10 === aOM ? aw.aNs.aOQ() : 11 === aOM ? aw.aNq.aOR() : 12 === aOM ? aw.aNs.aOS() : 13 === aOM ? aw.aNu.aOT() :
				14 === aOM ? aw.aNu.aOU() : 15 === aOM ? aw.aNq.aOV() : 16 === aOM ? aw.aNo.aOW(zl) : 17 === aOM ? aw.aNo.aOX(zl) : 18 === aOM && aw.aNo.aOY(zl)
		} : function(zl) {
			if (8 !== aW.zo() && !ar.aCy()) return;
			if (zl !== aw.s.zu) aw.s.aOD(zl, 3244);
			else if (0 === bD.oT(1)) bb.yn.aOj(bD.a8);
			else {
				var a7, zl = bD.oT(2);
				if (0 === zl) {
					var o3, np = bD.oT(9);
					0 !== ac.lV[np] && 0 !== ac.lV[a9.eI] && (o3 = bD.oT(10), aJ.o2(np, a9.eI, o3), ab.p1(np, 1, o3))
				} else if (1 === zl) ! function() {
					var np = bD.oT(9);
					0 !== ac.lV[np] && 0 !== ac.lV[a9.eI] && b1.aGi(0, [np], !0) && aJ.oL(np, 1)
				}();
				else if (2 === zl) ! function() {
					var np = bD.oT(9),
						target = bD.oT(9);
					0 !== ac.lV[np] && 0 !== ac.lV[target] && 0 !== ac.lV[a9.eI] && b1.aGi(1, [np], !0) && (ab.p1(np, 3, 96), ab.p1(target, 4, 96), aJ.a57(np, target))
				}();
				else if (a5 && !a6) {
					var eY = 540;
					for (b9.a3(17287), b9.a4(1, 0), b9.a4(6, 10), eY = Math.min(b4.nm.oV.length, 540), a7 = 0; a7 < eY; a7++) b9.aOp(32, b4.nm.oV[a7]);
					aw.s.send(aw.s.zu, b9.a8)
				}
			}
		})(zl), bb.aOL())
	}, this.aOb = function(a8) {
		if (bD.dU(a8), bD.e0 = 1, 3 === bD.oT(6)) {
			bD.e0 += 20;
			var eb = a9.data = new a30,
				a8 = aOh(9),
				aB4 = eb.humanCount = bD.oT(9) + 1;
			eb.selectableSpawn = 1 === eb.gameMode || aB4 < 100, eb.colorsData = new Uint32Array(aB4), eb.playerNamesData = new Array(aB4);
			for (var a7 = 0; a7 < aB4; a7++) bD.e0++, eb.colorsData[a7] = bD.oT(18), eb.playerNamesData[a7] = bC.ug.uk(bD.oT(5));
			aW.aCc(), bO.a3(a8, eb.mapSeed), a9.a34()
		} else ! function() {
			bD.e0 += 20;
			var eb = a9.data = new a30,
				aOg = aOh(1);
			eb.humanCount = 2;
			eb.selectableSpawn = 1, eb.elo = new Uint16Array(2), eb.colorsData = new Uint32Array(2), eb.playerNamesData = new Array(2);
			for (var a7 = 0; a7 < 2; a7++) bD.e0++, eb.colorsData[a7] = bD.oT(18), eb.elo[a7] = bD.oT(14), eb.playerNamesData[a7] = bC.ug.uk(bD.oT(5));
			aW.aCc(), bO.a3(aOg, eb.mapSeed), a9.a34()
		}()
	}, this.aOe = function() {
		bD.e0 = 1;
		var aOM = bD.oT(6),
			aOf = bD.oT(10);
		return aw.s.zt > aw.s.aCr && (aOf += aw.s.aCr), aw.s.zt === aOf ? (aw.s.zu = aOf, !1) : (aw.s.close(aw.s.zt, 3247), aw.s.zu = aOf, ar.aAz = bD.oT(10), ar.aCk = bD.oT(3 === aOM ? 9 : 1), aw.s.aCQ(aOf, 5) && aw.np.aCs(), !0)
	}
}

function aNt() {
	this.aOQ = function() {
		bf.s.uE(), bf.rC.rD(105, bB.rv.rw(bB.rv.rx(5))), bf.rC.rD(106, bB.rv.rw(bB.rv.rx(8))), bf.rC.rD(109, bD.oT(30)), bf.rC.rD(108, bf.dp.data[109].value), bf.rC.rD(111, bf.dp.data[109].value + 1), bf.rC.rD(107, 0), bf.rC.rD(110, "")
	}, this.aOS = function() {
		var aOs, aOt, aOu, aOv, aOr;
		bD.size < b9.aOq(29) ? aw.s.aOD(0, 3254) : (aOr = bD.oT(5), aOs = bD.oT(3), aOt = bD.oT(3), aOu = bD.oT(3), aOv = bD.oT(8), bD.aOw(197 + 16 * (aOr + aOs + aOt + aOu + aOv) + 32 + 32 + 30 + 128 + 32 + 30 + 10 + 32 + 2 + 10 + 5 + 30 + 30 +
			32) ? (aOr = {
			rr: bD.oT(30),
			uR: bD.oT(16),
			uS: bD.oT(30),
			uT: bD.oT(30),
			uU: bD.oT(30),
			uV: bD.aOx(32),
			username: bC.ug.uk(aOr),
			uW: bC.ug.uk(aOs),
			uX: bC.ug.uk(aOt),
			uY: bD.aOx(32),
			uZ: bD.aOx(32),
			ua: bD.oT(30),
			ub: bD.aOx(32),
			uc: bD.aOx(32),
			ud: bD.aOx(32),
			ue: bD.aOx(32),
			aK0: bD.aOx(32),
			aK1: bD.aOx(30),
			aJt: bD.aOx(10),
			aKB: bD.aOx(32),
			aKC: bC.ug.uk(aOu),
			aK6: bD.aOx(2),
			aK7: bD.aOx(10),
			aK4: bC.ug.uk(aOv),
			aK8: bD.aOx(5),
			aJm: bD.oT(30),
			aJy: bD.oT(30),
			aJz: bD.aOx(32)
		}, bf.rC.rD(150, aOr.aJt), 8 === n.rs && (25 === n.aDD().aLS ? (aOr.aJU = !0, n.s.aJB = aOr, n.aDD().aLg(25, !1)) : (aOr.aJU = !1, aOr.qr = bf.dp.data[105].value, n.s.aJ8 = aOr, bf.rC.uQ(aOr), n.aDD().aLg(16, !0)))) : aw.s.aOD(0,
			3267))
	}
}

function aNv() {
	this.aOT = function() {
		var a7;
		if (bD.size < b9.aOq(39)) aw.s.aOD(0, 3259);
		else {
			var sB = bD.oT(6),
				eY = bD.oT(10),
				data = [];
			if (9 === sB || 10 === sB) {
				for (a7 = 0; a7 < eY; a7++) data.push([bD.oT(30), bC.ui.v0(5), bD.aOx(32), 0, bD.oT(30)]);
				8 === n.rs && n.aDD().aLg(21, !0, {
					sB: sB,
					data: data
				})
			} else {
				var hC = bD.oT(16);
				if (bD.aOw(39 + 16 * hC + eY * (0 === sB ? 111 : 1 === sB ? 101 : 2 === sB || 3 === sB ? 127 : 212))) {
					if (0 === sB)
						for (a7 = 0; a7 < eY; a7++) data.push([bD.oT(30), bC.ug.uk(bD.oT(5)), bD.oT(16), bD.oT(30), bD.oT(30)]);
					else if (1 === sB)
						for (a7 = 0; a7 < eY; a7++) data.push([bD.oT(16), bC.ug.uk(bD.oT(3)), bD.oT(16), bC.ug.uk(bD.oT(5)), bD.oT(31), bD.oT(30)]);
					else if (2 === sB || 3 === sB)
						for (a7 = 0; a7 < eY; a7++) data.push([bD.oT(30), bC.ug.uk(bD.oT(5)), bD.aOx(32), bD.oT(30), bD.oT(30)]);
					else
						for (a7 = 0; a7 < eY; a7++) data.push([bD.oT(20), bD.oT(30), bD.oT(30), bD.oT(30), bD.oT(30), bD.aOx(32), bD.oT(30), bC.ug.uk(bD.oT(5)), bC.ug.uk(bD.oT(5))]);
					8 === n.rs && n.aDD().aLg(21, !0, {
						sB: sB,
						data: data
					})
				} else aw.s.aOD(0, 3260)
			}
		}
	}, this.aOU = function() {
		if (bD.size < b9.aOq(29)) aw.s.aOD(0, 3265);
		else {
			var aOy = bD.oT(4),
				aOz = bD.oT(7),
				aP0 = bD.oT(11);
			if (bD.aOw(29 + 16 * aOz + 16 * aP0 + 11 * aOy)) {
				for (var data = [], a7 = 0; a7 < aOy; a7++) {
					for (var zI = bC.ug.uk(bD.oT(3)), aP1 = bD.oT(8), aKi = [], er = 0; er < aP1; er++) aKi.push(bD.oT(16));
					data.push({
						name: "[" + zI + "]",
						aKi: aKi
					})
				}
				8 === n.rs && n.aDD().aLg(23, !0, data)
			} else aw.s.aOD(0, 3266)
		}
	}
}

function aNp() {
	this.aOO = function(zl) {
		if (zl !== aw.s.zt) aw.s.close(zl, 3239);
		else if (6 !== aW.zo()) aw.s.close(zl, 3271);
		else {
			bk.dU();
			for (var a7 = 0; a7 < 4; a7++) {
				var qZ = bk.s.qa[a7],
					playerCount = (qZ.sh = bD.oT(10), qZ.eE = bD.oT(6), qZ.mapSeed = bD.oT(14), qZ.aAv = bD.oT(4), qZ.aBy = bD.oT(6), qZ.aBz = bD.oT(4), qZ.aB1 = bD.oT(1), qZ.aBY = bD.oT(12), qZ.spawningSeed = bD.oT(14), bD.oT(16));
				bk.su.sw[a7] = bD.oT(16);
				for (var er = 0; er < playerCount; er++) bk.su.aAf(a7, bD.oT(30), bC.ui.v0(5), bD.oT(4), bD.oT(30), bD.oT(7), bD.oT(16), bD.oT(18))
			}
			n.o(29), bk.s.aBO(!0)
		}
	}, this.aOW = function(zl) {
		if (zl !== aw.s.zt) aw.s.close(zl, 3239);
		else if (bk.zs) {
			bk.s.aBM[0] = bD.oT(20), bk.s.aBM[1] = bD.oT(20);
			for (var aP2 = bD.oT(16), er = 0; er < aP2; er++) {
				var id = bD.oT(3);
				0 === id ? bk.su.aAf(0, bD.oT(30), bC.ui.v0(5), 9, 1e6, 127, 0, bD.oT(18)) : 1 === id ? bk.su.aAq(bD.oT(16), bD.oT(2)) : 2 === id ? bk.su.aAm(bD.oT(16), bD.oT(2), bD.oT(2)) : 3 === id ? bk.su.aAp(bD.oT(16), bD.oT(2)) : 4 === id &&
					bk.su.aAk(bD.oT(16), bD.oT(2), bC.ui.v0(5), bD.oT(4), bD.oT(30), bD.oT(7), bD.oT(16))
			}
			for (var a7 = 0; a7 < 4; a7++) {
				var qZ = bk.s.qa[a7];
				if (qZ.sh = bD.oT(10), 0 === qZ.sh) {
					if (qZ.zu = bD.oT(10), qZ.aAz = bD.oT(10), bk.aAY.dd(a7)) return;
					qZ.eE = bD.oT(6), qZ.mapSeed = bD.oT(14), qZ.aAv = bD.oT(4), qZ.aBy = bD.oT(6), qZ.aBz = bD.oT(4), qZ.aB1 = bD.oT(1), qZ.aBY = bD.oT(12), qZ.spawningSeed = bD.oT(14)
				}
			}
			bk.s.aBQ()
		} else aw.s.close(zl, 3251)
	}, this.aOX = function(zl) {
		if (zl !== aw.s.zt) aw.s.close(zl, 3272);
		else if (bk.zs) {
			for (var qX = bD.oT(4), qZ = bk.s.qa[qX], qb = qZ.qb, aP3 = (qZ.qc = bD.oT(20), bD.oT(6)), a7 = 0; a7 < aP3; a7++) {
				var aBD, target, qr = bD.oT(30),
					id = bD.oT(4);
				0 === id ? qb.push({
					id: id,
					qr: qr,
					k: bC.ui.v0(7)
				}) : 15 === id ? (aBD = bD.oT(3), target = bD.oT(30), qb.push({
					id: id,
					qr: qr,
					aBD: aBD,
					target: target,
					value: bD.oT(30)
				})) : 14 === id ? qb.push({
					id: id,
					qr: qr,
					aBD: bD.oT(3)
				}) : (target = bD.oT(30), qb.push({
					id: id,
					qr: qr,
					target: target,
					value: bD.oT(4)
				}))
			}
			bk.s.aBZ(qX)
		} else aw.s.close(zl, 3273)
	}, this.aOY = function(zl) {
		zl !== aw.s.zt ? aw.s.close(zl, 3274) : bk.zs ? (bk.s.qd.push(bD.oT(6)), bk.s.aBZ(bk.s.qY[0])) : aw.s.close(zl, 3275)
	}
}

function aNr() {
	this.aOP = function(zl) {
		var aOl, q1;
		bD.aOw(70) ? (aOl = bD.oT(3), q1 = be.aP4.iS(bD.oT(30), bD.oT(30)), aw.aA9.aP5(zl, q1, aOl), 0 < aOl || (0 === zl && 0 === bf.dp.data[105].value.length ? aw.aA9.aLV(0) : aw.aJq.aP6(zl), 4 === aw.s.aO1(zl).aP7() ? 6 === aW.zo() && aw.aBw
			.aCR(zl) : 5 !== aw.s.aO1(zl).aP7() || 8 !== aW.zo() && 10 !== aW.zo() || aw.np.aCs())) : aw.s.aOD(zl, 3269)
	}, this.aOR = function() {
		var id = bD.oT(6);
		0 === id ? (aP.a7U || aw.aA9.aLV(1), b3.aA7(), 8 === n.rs && n.aDD().aLf()) : 21 === id ? 8 === n.rs && n.aDD().aLg(17) : 22 === id && (bf.rC.rD(106, bf.dp.data[110].value), bf.rC.rD(110, ""), 8 === n.rs) && n.aDD().aLg(16)
	}, this.aOV = function() {
		var eY = bD.oT(16),
			aP8 = bD.oT(16);
		if (bD.aOw(55 + 10 * eY + 16 * aP8)) {
			for (var g = [], a7 = 0; a7 < eY; a7++) g.push(bC.ug.uk(bD.oT(10)));
			b3.aAB(g)
		} else aw.s.aOD(0, 3270)
	}
}

function aNh() {
	this.aO3 = function(zl, aO0) {
		b9.a3(8), b9.a4(1, 0), b9.a4(6, 4), b9.a4(1, aO0 ? 1 : 0), aw.s.send(zl, b9.a8)
	}, this.aCs = function() {
		b9.a3(58), b9.a4(1, 0), b9.a4(6, 5), b9.a4(8, aw.s.aO2()), b9.a4(10, ar.aAz), b9.a4(9, ar.aCk), b9.a4(10, di), b9.a4(14, h.dj), aw.s.send(aw.s.zu, b9.a8)
	}, this.nq = function(eK) {
		b9.a3(27), b9.a4(1, 1), b9.a4(4, 0), b9.a4(22, eK), aw.s.send(aw.s.zu, b9.a8)
	}, this.nr = function(hu, il) {
		b9.a3(25), b9.a4(1, 1), b9.a4(4, 1), b9.a4(10, hu), b9.a4(10, il), aw.s.send(aw.s.zu, b9.a8)
	}, this.nv = function(hu, nt) {
		b9.a3(24), b9.a4(1, 1), b9.a4(4, 2), b9.a4(10, hu), b9.a4(9, nt), aw.s.send(aw.s.zu, b9.a8)
	}, this.nw = function(hu, eK) {
		b9.a3(37), b9.a4(1, 1), b9.a4(4, 3), b9.a4(10, hu), b9.a4(22, eK), aw.s.send(aw.s.zu, b9.a8)
	}, this.nz = function(lu, eK) {
		b9.a3(37), b9.a4(1, 1), b9.a4(4, 4), b9.a4(10, lu), b9.a4(22, eK), aw.s.send(aw.s.zu, b9.a8)
	}, this.o1 = function(il) {
		b9.a3(15), b9.a4(1, 1), b9.a4(4, 5), b9.a4(10, il), aw.s.send(aw.s.zu, b9.a8)
	}, this.o5 = function(e0) {
		b9.a3(15), b9.a4(1, 1), b9.a4(4, 6), b9.a4(10, e0), aw.s.send(aw.s.zu, b9.a8)
	}, this.o8 = function(o7) {
		b9.a3(6), b9.a4(1, 1), b9.a4(4, 7), b9.a4(1, o7), aw.s.send(aw.s.zu, b9.a8)
	}, this.oA = function() {
		b9.a3(5), b9.a4(1, 1), b9.a4(4, 8), aw.s.send(aw.s.zu, b9.a8)
	}, this.oC = function(hu, eK, il) {
		b9.a3(47), b9.a4(1, 1), b9.a4(4, 10), b9.a4(10, hu), b9.a4(10, il), b9.a4(22, eK), aw.s.send(aw.s.zu, b9.a8)
	}, this.oJ = function(aP9, aPA) {
		b9.a3(24), b9.a4(1, 1), b9.a4(4, 15), b9.a4(9, aPA), b9.a4(10, aP9), aw.s.send(aw.s.zu, b9.a8)
	}, this.oM = function(a50) {
		b9.a3(14), b9.a4(1, 1), b9.a4(4, 14), b9.a4(9, a50), aw.s.send(aw.s.zu, b9.a8)
	}, this.oQ = function(aPB, target) {
		var a7, eY = aPB.length;
		for (b9.a3(14 + 9 * eY), b9.a4(1, 1), b9.a4(4, 13), b9.a4(9, target), a7 = 0; a7 < eY; a7++) b9.a4(9, aPB[a7]);
		aw.s.send(aw.s.zu, b9.a8)
	}
}

function aNk() {
	this.aPC = function() {
		b9.a3(39), b9.a4(1, 0), b9.a4(6, 16), aw.aA9.aPD(), aw.s.send(0, b9.a8)
	}, this.aP6 = function(zl) {
		b9.a3(115), b9.a4(1, 0), b9.a4(6, 17), bC.rv.uw(bf.dp.data[105].value, 5), bC.rv.uw(bf.dp.data[106].value, 8), b9.a4(30, bf.dp.data[109].value), aw.s.send(zl, b9.a8)
	}, this.aLi = function() {
		b9.a3(55), b9.a4(1, 0), b9.a4(6, 18), bC.rv.uv(bf.dp.data[110].value), aw.s.send(0, b9.a8)
	}, this.aLe = function(a2P) {
		var eY = a2P.pA.length;
		b9.a3(21 + 16 * eY), b9.a4(1, 0), b9.a4(6, 29), b9.a4(6, a2P.ru), b9.a4(8, eY), bB.ug.uv(a2P.pA), aw.s.send(0, b9.a8)
	}, this.aK3 = function(data) {
		b9.a3(73), b9.a4(1, 0), b9.a4(6, 25), b9.a4(6, data.ru), bC.rv.uw(data.qr, 5), b9.a4(30, data.rr), aw.s.send(0, b9.a8)
	}, this.aJr = function(data) {
		b9.a3(105), b9.a4(1, 0), b9.a4(6, 27), b9.a4(6, data.ru), bC.rv.uw(data.qr, 5), b9.a4(30, data.rr), b9.aOp(32, data.value), aw.s.send(0, b9.a8)
	}
}

function aNl() {
	this.oR = function() {
		for (var eY = a9.je, yT = bN.result.yT, kP = yT.length, zC = (b9.a3(17 + 16 * eY + 33 * kP), b9.a4(1, 1), b9.a4(4, 12), b9.a4(10, kP), b9.a4(1, +(2 === a9.yb)), b9.a4(1, a9.yv % 2), ac.zC), a7 = 0; a7 < eY; a7++) b9.a4(16, zC[a7]);
		for (var gM = ac.gM, a7 = 0; a7 < kP; a7++) {
			var g6 = yT[a7];
			b9.a4(9, g6), b9.a4(24, gM[g6])
		}
		aw.s.send(aw.s.zu, b9.a8)
	}
}

function aNm() {
	this.aLX = function(sB, sC, sD) {
		b9.a3(75), b9.a4(1, 0), b9.a4(6, 21), b9.a4(6, sB), b9.a4(1, +(sC < 0)), b9.a4(1, +(sD < 0)), b9.a4(30, Math.abs(sC)), b9.a4(30, Math.abs(sD)), aw.s.send(0, b9.a8)
	}, this.aLY = function(sB, aLZ, aLa) {
		b9.a3(18 + 16 * aLZ.length + 30), b9.a4(1, 0), b9.a4(6, 22), b9.a4(6, sB), aw.aA9.aPF(aLZ), b9.a4(30, aLa), aw.s.send(0, b9.a8)
	}, this.aLd = function(sB, aLZ, aLa) {
		b9.a3(73), b9.a4(1, 0), b9.a4(6, 28), b9.a4(6, sB), bC.rv.uw(aLZ, 5), b9.a4(30, aLa), aw.s.send(0, b9.a8)
	}, this.aLb = function(aKh, zH) {
		for (var eY = zH.length, hC = 0, a7 = 0; a7 < eY; a7++) hC += zH[a7].length;
		for (b9.a3(21 + 3 * eY + 16 * hC), b9.a4(1, 0), b9.a4(6, 23), b9.a4(3, aKh), b9.a4(4, eY), b9.a4(7, hC), a7 = 0; a7 < eY; a7++) b9.a4(3, zH[a7].length), bB.ug.uv(zH[a7]);
		aw.s.send(0, b9.a8)
	}, this.aLc = function(aKh, sC, sD) {
		b9.a3(52), b9.a4(1, 0), b9.a4(6, 24), b9.a4(3, aKh), b9.a4(1, +(sC < 0)), b9.a4(1, +(sD < 0)), b9.a4(20, Math.abs(sC)), b9.a4(20, Math.abs(sD)), aw.s.send(0, b9.a8)
	}
}

function aNi() {
	this.aCR = function(zl) {
		var username = bf.dp.data[122].value.slice(0, 20),
			username = (b9.a3(22 + 16 * username.length + 18), b9.a4(1, 0), b9.a4(6, 1), b9.a4(10, di), aw.aA9.aPF(username), b6.color.a1Y(bf.s.uL()));
		b9.a4(6, username[0]), b9.a4(6, username[1]), b9.a4(6, username[2]), aw.s.zt = zl, aw.s.send(zl, b9.a8)
	}, this.aBx = function(aPH, a2P) {
		bA.dU(), bA.a4(1, 0), bA.a4(6, 2), bA.a4(3, aPH), 2 === aPH ? bA.a4(2, a2P) : 3 === aPH ? bB.ui.y7(a2P, 7, bA) : 5 === aPH && (bA.a4(3, a2P.id), bA.a4(3, a2P.value), bA.a4(30, a2P.qr)), aw.s.send(aw.s.zt, bA.aPI())
	}
}

function aNj() {
	this.aOA = function(zl) {
		b9.a3(39), b9.a4(1, 0), b9.a4(6, 13), b9.a4(14, h.dj), b9.a4(4, u.id), b9.a4(7, u.f1), b9.a4(1, +a5), b9.a4(1, +a6), b9.a4(5, (new Date).getHours() % 24), aw.s.send(zl, b9.a8)
	}, this.aP5 = function(zl, q1, aOl) {
		b9.a3(70), b9.a4(1, 0), b9.a4(6, 14), b9.a4(3, aOl), b9.a4(30, q1[0]), b9.a4(30, q1[1]), aw.s.send(zl, b9.a8)
	}, this.aLV = function(id) {
		b9.a3(13), b9.a4(1, 0), b9.a4(6, 15), b9.a4(6, id), aw.s.send(0, b9.a8)
	}, this.aAA = function(id, pA) {
		var eY = Math.min(pA.length, 63);
		b9.a3(19 + 16 * eY), b9.a4(1, 0), b9.a4(6, 26), b9.a4(6, id), b9.a4(6, eY), bB.ug.uv(pA), aw.s.send(0, b9.a8)
	}, this.aPJ = function(aOf, pL) {
		b9.a3(7 + 26 * pL.length), b9.a4(1, 0), b9.a4(6, 9);
		for (var a7 = 0; a7 < pL.length; a7++) b9.a4(16, pL[a7][0]), b9.a4(10, pL[a7][1]);
		aw.s.send(aOf, b9.a8)
	}, this.aOG = function(aPK, aPL) {
		b9.a3(20), b9.a4(1, 0), b9.a4(6, 19), b9.a4(1, aPK), b9.a4(12, aPL), aw.s.send(aw.s.zu, b9.a8)
	}, this.aPF = function(username) {
		b9.a4(5, username.length), bB.ug.uv(username)
	}
}

function aO8() {
	var zl, aJ0, aPM, aPN = ["wss://", "/s50/", "/s51/", "/s52/"];

	function aO9() {
		aw.s.aO9(zl, aJ0)
	}

	function aPS(e) {
		aw.a50.aOI(zl, new Uint8Array(e.data))
	}

	function aPT() {}

	function aOF(e) {
		aw.s.aOF(zl, e)
	}
	this.dU = function(e0, aPO) {
		zl = e0, aJ0 = aPO;
		e0 = aPN[0];
		zl < aw.s.aCx ? e0 += aw.s.aNx[zl] + aPN[1 + dg] : e0 += aw.s.aNx[0] + "/i" + (1 + dg) + (zl - aw.s.aCr) + "/", (aPM = new WebSocket(__fx.customLobby.isActive() && zl === 1 ? __fx.customLobby.getSocketURL() : e0)).binaryType =
			"arraybuffer", aPM.onopen = aO9, aPM.onmessage = aPS, aPM.onclose = aOF, aPM.onerror = aPT
	}, this.aPQ = function() {
		return aPM.readyState === aPM.CONNECTING
	}, this.aCK = function() {
		return aPM.readyState === aPM.OPEN
	}, this.aO5 = function() {
		return this.aPQ() || this.aCK()
	}, this.aO6 = function(aPO) {
		aJ0 = aPO
	}, this.aP7 = function() {
		return aJ0
	}, this.send = function(a8) {
		this.aCK() && aPM.send(a8)
	}, this.close = function(aOC) {
		this.aO5() && (aPM.close(aOC), this.r1())
	}, this.r1 = function() {
		aPM.onopen = null, aPM.onmessage = null, aPM.onclose = null, aPM.onerror = null
	}
}

function dD() {
	var aPU = !1,
		a5L = 0,
		a1 = 0,
		rz = 0,
		gap = 0,
		canvas = null,
		wt = null,
		a1B = null;

	function aPW() {
		for (var aPc, aPa = 0, eY = 0, et = Math.floor(a1 / 2), dz = Math.floor(rz / 2), aPb = 1.5 * Math.PI, a7 = a9.vx; 0 <= a7; a7--) eY += a1B[a7], 0 === a1B[a7] && aPa++;
		if (aPU = !1, wt.clearRect(0, 0, a1, a1), wt.fillStyle = b7.mV, wt.fillRect(0, 0, a1, a1), wt.fillStyle = b7.mY, wt.fillRect(0, 0, a1, gap), wt.fillRect(0, 0, gap, a1), wt.fillRect(a1 - gap, 0, gap, a1), wt.fillRect(0, a1 - gap, a1, gap), 0 <
			eY)
			if (aPa === a9.vx) {
				for (a7 = a9.vx; 0 <= a7; a7--)
					if (0 < a1B[a7]) {
						! function(a7, et, dz) {
							wt.fillStyle = bc.aPj[bc.k4[a7]], wt.beginPath(), wt.arc(et, et, dz, 0, 2 * Math.PI), wt.fill()
						}(a7, et, dz);
						break
					}!
				function(et) {
					var fontSize = et / 3;
					wt.font = b6.pT.rV(1, fontSize), wt.fillStyle = b7.mY, wt.fillText("100%", et, et + .1 * fontSize)
				}(et)
			} else {
				for (a7 = 0; a7 <= a9.vx; a7++) 0 < a1B[a7] && (! function(a7, et, dz, aPb, aPc) {
					wt.fillStyle = bc.aPj[bc.k4[a7]], wt.beginPath(), wt.arc(et, et, dz, aPb, aPc), wt.lineTo(et, et), wt.fill()
				}(a7, et, dz, aPb, aPc = aPb + 2 * Math.PI * a1B[a7] / eY), function(et, dz, aPb, aPc) {
					var f0 = (aPc - aPb) / (2 * Math.PI),
						fontSize = +dz * Math.min(f0, .37);
					fontSize < 8 || (aPb = (aPb + aPc) / 2, aPc = Math.floor(100 * f0 + .5) + "%", dz *= .525 - Math.max(.6 * (f0 - .7), 0), wt.font = b6.pT.rV(1, fontSize), wt.fillStyle = b7.mY, wt.fillText(aPc, et + Math.cos(aPb) * dz, et +
						Math.cos(aPb + 1.5 * Math.PI) * dz))
				}(et, dz, aPb, aPc), 0 !== a7 && aPh(et, dz, aPb), aPb = aPc);
				aPh(et, dz, 1.5 * Math.PI)
			}!
		function(et, dz) {
			wt.beginPath(), wt.arc(et, et, dz, 0, 2 * Math.PI), wt.stroke()
		}(et, dz)
	}

	function aPh(et, dz, aPk) {
		wt.beginPath(), wt.moveTo(et, et), wt.lineTo(et + Math.cos(aPk) * dz, et + Math.cos(aPk + 1.5 * Math.PI) * dz), wt.stroke()
	}
	this.dU = function() {
		if (a9.ie) {
			a5L = 0, a1B = new Uint32Array(a9.vx + 1);
			for (var a7 = a9.vx; 0 <= a7; a7--) a1B[a7] = 0;
			for (a7 = ah.jf - 1; 0 <= a7; a7--) a1B[bc.eW[ah.jh[a7]]] += 1;
			this.resize()
		} else a1B = wt = canvas = null
	}, this.a67 = function() {
		return a1
	}, this.resize = function() {
		a9.ie && (a1 = Math.floor(u.v.r8() && !a9.m1 ? .18 * at.min : .13 * at.pV), a1 = (a1 *= 1 + (.5 + .2 * u.v.r8()) * a9.m1) + a1 % 2, rz = Math.floor(7 * a1 / 8), (canvas = canvas || document.createElement("canvas")).width = a1, canvas
			.height = a1, wt = canvas.getContext("2d", {
				alpha: !0
			}), gap = Math.max(1, .015 * a1), wt.lineWidth = gap, wt.strokeStyle = b7.mY, b6.pT.textAlign(wt, 1), b6.pT.textBaseline(wt, 1), aPW())
	}, this.a2M = function() {
		var dk, ks = this.kt();
		return bc.k4[ks] || (ks = function() {
			for (var ks = -1, a7 = a9.vx; 1 <= a7; a7--)(-1 === ks || a1B[a7] > a1B[ks]) && (ks = a7);
			return ks
		}(), dk = ac.gM[kw[0]], -1 !== ks && a1B[ks] > dk) ? a1B[ks] : dk
	}, this.zX = function() {
		return a5L = 31, this.iS(), this.kt()
	}, this.kt = function() {
		for (var ks = 0, a7 = a9.vx; 0 < a7; a7--) a1B[a7] > a1B[ks] && (ks = a7);
		return ks
	}, this.ku = function(aPY) {
		for (var g1 = 0, jh = ah.jh, eW = bc.eW, eY = ah.jf, fC = bK.fC, a7 = 0; a7 < eY; a7++) {
			var g6 = jh[a7];
			eW[g6] === aPY && (fC[g1++] = g6)
		}
		bK.f4[0] = g1
	}, this.iS = function() {
		if (a9.ie && 32 <= ++a5L) {
			a5L = 0;
			for (var a7 = a9.vx; 0 <= a7; a7--) a1B[a7] = 0;
			for (a7 = ah.jf - 1; 0 <= a7; a7--) a1B[bc.eW[ah.jh[a7]]] += ac.gM[ah.jh[a7]];
			aPU = !0
		}
	}, this.lI = function() {
		a9.ie && aPU && aPW()
	}, this.tT = function() {
		a9.ie && (a9.m1 ? tU.drawImage(canvas, bY.gap, bY.gap) : tU.drawImage(canvas, bY.gap, a68 + 2 * bY.gap))
	}
}

function cw() {
	function aPm(key) {
		var aN4;
		return "undefined" == typeof URLSearchParams || (aN4 = window.location.search, "string" != typeof(aN4 = new URLSearchParams(aN4).get(key))) || aN4.length < 1 ? null : aN4
	}
	this.dd = function() {
		if (0 !== u.id) return !1;
		if (! function() {
				var value = aPm("account");
				if (!value && !(value = aPm("a"))) return void bE.clear();
				return bE.clear(), n.o(8, n.rs, new rt(1e3, {
					ru: 0,
					qr: value,
					rr: 0
				})), 1
			}()) {
			var value = aPm("replay");
			if (!this.clear()) return !1;
			if (!value) return !1;
			n.o(3, 0, value)
		}
		return !0
	}, this.clear = function() {
		var zh = new URL(window.location.href);
		zh.search = "";
		try {
			return history.replaceState(null, "", zh.toString()), !0
		} catch (e) {
			console.log("error 352: " + e)
		}
		return !1
	}, this.aKD = function(key, value) {
		if (0 === u.id) try {
			var zh = new URL(window.location.href),
				g6 = zh.searchParams;
			g6.set(key, value), zh.search = g6.toString(), history.replaceState(null, "", zh.toString())
		} catch (e) {
			console.log("error 358: " + e)
		}
	}
}

function cd() {
	var aPo, g;
	this.dU = function() {
		for (var a7 = (g = new Uint16Array(101)).length - 1; 0 <= a7; a7--) g[a7] = bH.dl(32768 * a7, 100);
		this.a36(0)
	}, this.value = function(g6) {
		return g[g6]
	}, this.aHJ = function() {
		return bH.dl(aPo - 1, 2)
	}, this.a36 = function(aGy) {
		aPo = 2 * aGy % 32768 + 1
	}, this.random = function() {
		return aPo = 167 * aPo % 32768
	}, this.iv = function(lQ) {
		return bH.dl(lQ * this.random(), 32768)
	}, this.jW = function(g6) {
		return 0 !== g6 && this.random() < this.value(g6)
	}, this.iE = function(er, es) {
		return er + this.iv(es - er)
	}
}

function cs() {
	this.oi = new aPp, this.a3H = new aPq, this.aEi = new aPr, this.dU = function() {
		a9.gi || this.oi.dU()
	}, this.iS = function() {
		a9.gi || (this.oi.iS(), 3 !== n.rs) || bb.jb() % 15 != 5 && 2 !== a9.ye || n.aDD().aN5()
	}, this.aN8 = function() {
		0 === a9.ye && aW.aCc(), a9.a31.a3O(), a9.data.canvas = null, aw.s.close(aw.s.zu, 3257), aw.s.zu = 0, a9.data.isReplay = 1, a9.a34()
	}, this.aN7 = function(pA) {
		var a7 = pA.indexOf("=");
		return 0 <= a7 ? pA.substring(a7 + 1) : pA
	}, this.aN6 = function(pA) {
		return "https://territorial.io/?replay=" + pA
	}
}

function aPp() {
	this.aPt = null, this.aPu = null, this.aPv = null, this.aPw = null, this.aPx = null, this.aPy = null, this.a3G = "";
	var aPz = 0;
	this.dU = function() {
		this.aPt = [], this.aPu = [], this.aPv = [], this.aPw = [], this.aPx = [0], this.aPy = [0], aPz = 0, this.a3G = ""
	}, this.oj = function(id, fG, fI, fK) {
		a9.gi || 2 === a9.ye || (0 === this.aPx[aPz] && (this.aPy[aPz] ? (this.aPx.push(1), this.aPy.push(0), aPz++) : this.aPx[aPz] = 1), this.aPt.push(id), this.aPu.push(fG), this.aPv.push(void 0 === fI ? 0 : fI), this.aPw.push(void 0 === fK ?
			0 : fK), this.aPy[aPz]++)
	}, this.iS = function() {
		0 === this.aPx[aPz] ? this.aPy[aPz]++ : (this.aPx.push(0), this.aPy.push(0), aPz++)
	}
}

function aPr() {
	var aQ0 = 0;

	function aQ4(pA, id) {
		aQ0 || (id ? 1 === id ? aJ.a4R = L(396) + ": " + pA : n.o(4, 3, new p(L(397), pA, 1)) : n.o(4, 3, new p("⚠️ " + L(395), pA, 1)))
	}
	this.v0 = function(pA, aQ1) {
		var pL;
		return aQ0 = aQ1, bC.rv.us(bC.rv.uq(bC.rv.uo(pA))), aJ.a4R = "", !(! function() {
			if (bD.size < 10) aQ4("File Too Small");
			else {
				var aQ6 = bD.oT(12),
					aPL = (aQ6 !== h.rVersion && aQ4("Incompatible Version " + aQ6 + " " + h.rVersion, 1), bD.oT(12)),
					aQ7 = bD.oT(31);
				if (aQ7 !== bD.size) aQ4("Size Error: " + aQ7 + " " + bD.size);
				else if (function(j7, aQ6) {
						for (var g6 = bD.a8, eY = bD.size, aPL = aQ6, a7 = 3; a7 < eY; a7++) aPL = aPL + g6[a7] & 4095;
						return aPL === j7 || (aQ4("Hash Error: " + aPL + " " + j7 + " " + eY), !1)
					}(aPL, aQ6)) return 1
			}
			return
		}() || (aQ1 = bD, (pL = a9.data = new a30).mapType = aQ1.oT(2), pL.mapProceduralIndex = aQ1.oT(8), pL.mapRealisticIndex = aQ1.oT(8), pL.mapSeed = aQ1.oT(14), pL.mapName = aQ1.aQ9(5), 2 === pL.mapType && aQ1.aQA(), pL
			.passableWater = aQ1.oT(1), pL.passableMountains = aQ1.oT(1), pL.playerCount = aQ1.oT(10), pL.humanCount = aQ1.oT(10), pL.selectedPlayer = aQ1.oT(9), pL.gameMode = aQ1.oT(1), pL.playerMode = aQ1.oT(2), pL.battleRoyaleMode =
			aQ1.oT(2), pL.numberTeams = aQ1.oT(4), pL.isZombieMode = aQ1.oT(1), pL.isContest = aQ1.oT(1), pL.isReplay = aQ1.oT(1), pL.elo = aQ1.aQB(2, 14, 2), pL.colorsType = aQ1.oT(1), pL.colorsPersonalized = aQ1.oT(1), pL.colorsData =
			aQ1.aQB(10, 18, 512), pL.selectableColor = aQ1.oT(1), pL.teamPlayerCount = aQ1.aQB(4, 10, 9), pL.neutralBots = aQ1.oT(1), pL.botDifficultyType = aQ1.oT(2), pL.botDifficultyValue = aQ1.oT(4), pL.botDifficultyTeam = aQ1.aQB(4,
				4, 9), pL.botDifficultyData = aQ1.aQB(10, 4, 512), pL.spawningType = aQ1.oT(2), pL.spawningSeed = aQ1.oT(14), pL.spawningData = aQ1.aQB(11, 12, 1024), pL.selectableSpawn = aQ1.oT(1), pL.playerNamesType = aQ1.oT(2), pL
			.playerNamesData = aQ1.aQC(10, 5, 512), pL.selectableName = aQ1.oT(1), pL.aIncomeType = aQ1.oT(2), pL.aIncomeValue = aQ1.oT(8), pL.aIncomeData = aQ1.aQB(10, 8, 512), pL.tIncomeType = aQ1.oT(2), pL.tIncomeValue = aQ1.oT(8), pL
			.tIncomeData = aQ1.aQB(10, 8, 512), pL.iIncomeType = aQ1.oT(2), pL.iIncomeValue = aQ1.oT(8), pL.iIncomeData = aQ1.aQB(10, 8, 512), pL.sResourcesType = aQ1.oT(2), pL.sResourcesValue = aQ1.oT(11), pL.sResourcesData = aQ1.aQB(10,
				11, 512), ! function() {
				var hf = bD,
					v1 = hf.oT(5),
					aQD = hf.oT(30),
					aQE = hf.oT(30);
				if (aQD + aQE > 8 * hf.size) return void aQ4("Corrupted File");
				return function(eY) {
						var aQH = new Uint8Array(eY),
							aQI = new Uint16Array(eY),
							aQJ = new Uint32Array(eY),
							aQK = new Uint32Array(eY);
						b5.oi.aPt = aQH, b5.oi.aPu = aQI, b5.oi.aPv = aQJ, b5.oi.aPw = aQK;
						for (var a7 = 0; a7 < eY; a7++) {
							var id = bD.oT(4);
							aQH[a7] = id, aQI[a7] = bD.oT(9), 0 === id ? aQJ[a7] = bD.oT(22) : 1 === id ? (aQJ[a7] = bD.oT(10), aQK[a7] = bD.oT(10)) : 2 === id ? (aQJ[a7] = bD.oT(10), aQK[a7] = bD.oT(9)) : 3 === id || 4 === id ? (aQJ[
								a7] = bD.oT(10), aQK[a7] = bD.oT(22)) : 5 === id || 6 === id ? aQJ[a7] = bD.oT(10) : 7 === id ? aQJ[a7] = bD.oT(1) : 10 === id && (aQJ[a7] = bD.oT(20), aQK[a7] = bD.oT(22))
						}
					}(aQD),
					function(eY, v1) {
						var aPx = new Uint8Array(eY),
							aPy = new Array(eY);
						aPy.fill(0), b5.oi.aPx = aPx, b5.oi.aPy = aPy;
						for (var a7 = 0; a7 < eY; a7++) aPx[a7] = bD.oT(1), aPy[a7] = bD.oT(v1)
					}(aQE, v1), 1
			}()) || (bD.e0 < 8 * bD.size - 13 || bD.e0 > 8 * bD.size ? (aQ4("Out Of Bounds Error: " + bD.e0 + " " + 8 * bD.size), 1) : (b5.oi.a3G = pA, 2 === a9.data.mapType && (aQ4("Load base64 image...", 2), 1))))
	}, this.aEj = function(aEJ, aQ5) {
		var a1T = document.createElement("canvas"),
			hH = a1T.getContext("2d");
		if (a1T.width = aEJ.width, a1T.height = aEJ.height, hH.drawImage(aEJ, 0, 0), aQ0 || aQ5) return a9.ye ? void 0 : (a9.data.canvas = a1T, a9.data.mapType = 2, n.r(), void n.o(19));
		b5.aN8()
	}
}

function aPq() {
	this.y7 = function() {
		var v1 = function() {
				for (var aPy = b5.oi.aPy, eY = aPy.length, max = 0, a7 = 0; a7 < eY; a7++) max = Math.max(max, aPy[a7]);
				return v8(Math.max(max, 1))
			}(),
			a1 = (pL = a9.data, (a1 = bA).dU(), a1.a4(12, h.rVersion), a1.e0 += 43, a1.a4(2, pL.mapType), a1.a4(8, pL.mapProceduralIndex), a1.a4(8, pL.mapRealisticIndex), a1.a4(14, pL.mapSeed), a1.aQR(pL.mapName, 5), 2 === pL.mapType && a1.aQS(pL
				.canvas), a1.a4(1, pL.passableWater), a1.a4(1, pL.passableMountains), a1.a4(10, pL.playerCount), a1.a4(10, pL.humanCount), a1.a4(9, pL.selectedPlayer), a1.a4(1, pL.gameMode), a1.a4(2, pL.playerMode), a1.a4(2, pL
				.battleRoyaleMode), a1.a4(4, pL.numberTeams), a1.a4(1, pL.isZombieMode), a1.a4(1, pL.isContest), a1.a4(1, pL.isReplay), a1.db(pL.elo, 2, 14), a1.a4(1, pL.colorsType), a1.a4(1, pL.colorsPersonalized), a1.db(pL.colorsData, 10,
				18), a1.a4(1, pL.selectableColor), a1.db(pL.teamPlayerCount, 4, 10), a1.a4(1, pL.neutralBots), a1.a4(2, pL.botDifficultyType), a1.a4(4, pL.botDifficultyValue), a1.db(pL.botDifficultyTeam, 4, 4), a1.db(pL.botDifficultyData, 10,
				4), a1.a4(2, pL.spawningType), a1.a4(14, pL.spawningSeed), a1.db(pL.spawningData, 11, 12), a1.a4(1, pL.selectableSpawn), a1.a4(2, pL.playerNamesType), a1.aQT(pL.playerNamesData, 10, 5), a1.a4(1, pL.selectableName), a1.a4(2, pL
				.aIncomeType), a1.a4(8, pL.aIncomeValue), a1.db(pL.aIncomeData, 10, 8), a1.a4(2, pL.tIncomeType), a1.a4(8, pL.tIncomeValue), a1.db(pL.tIncomeData, 10, 8), a1.a4(2, pL.iIncomeType), a1.a4(8, pL.iIncomeValue), a1.db(pL
				.iIncomeData, 10, 8), a1.a4(2, pL.sResourcesType), a1.a4(11, pL.sResourcesValue), a1.db(pL.sResourcesData, 10, 11), ! function(v1) {
				var a1 = bA,
					aPt = b5.oi.aPt,
					fG = b5.oi.aPu,
					fI = b5.oi.aPv,
					fK = b5.oi.aPw,
					eY = aPt.length;
				a1.a4(5, v1), a1.a4(30, eY), a1.a4(30, b5.oi.aPy.length);
				for (var a7 = 0; a7 < eY; a7++) {
					var et = aPt[a7];
					a1.a4(4, et), a1.a4(9, fG[a7]), 0 === et ? a1.a4(22, fI[a7]) : 1 === et ? (a1.a4(10, fI[a7]), a1.a4(10, fK[a7])) : 2 === et ? (a1.a4(10, fI[a7]), a1.a4(9, fK[a7])) : 3 === et || 4 === et ? (a1.a4(10, fI[a7]), a1.a4(22, fK[
						a7])) : 5 === et || 6 === et ? a1.a4(10, fI[a7]) : 7 === et ? a1.a4(1, fI[a7]) : 10 === et && (a1.a4(20, fI[a7]), a1.a4(22, fK[a7]))
				}
			}(v1), ! function(v1) {
				for (var a1 = bA, aPx = b5.oi.aPx, aPy = b5.oi.aPy, eY = aPx.length, a7 = 0; a7 < eY; a7++) a1.a4(1, aPx[a7]), a1.a4(v1, aPy[a7])
			}(v1), bA.e0),
			pL = bH.dl(a1 - 1, 6) + 1,
			v1 = (b9.aOq(6 * pL) !== bA.g.length && bA.g.push(0), ! function() {
				var a1 = bA;
				a1.e0 = 24, a1.a4(31, a1.g.length), a1.e0 = 12, a1.a4(12, function() {
					for (var g = bA.g, eY = g.length, aPL = h.rVersion, a7 = 3; a7 < eY; a7++) aPL = aPL + g[a7] & 4095;
					return aPL
				}())
			}(), bD.dU(bA.g), bB.rv.rw(bB.rv.rx(pL)));
		return bD.a01(), bA.dU(), v1
	}
}

function ci() {
	var et, bo = !1,
		aQV = !1,
		aQW = -1e4,
		aQX = -1,
		aQY = 0;

	function resize(aQc) {
		et = 0, aX.sJ() && (aQa(aQc) || bo) && (bo = !1, bY.resize(), bS.a9k.resize(), aU.dU(), bU.dU(), aV.resize(), aP.resize(), aK.resize(), n.resize(), 1 <= a9.ye ? (aR.resize(!1), aQ.resize(), aS.resize(), aO.resize(), aN.resize(), aJ.resize(),
			aI.resize(), b8.resize(), aq.resize(), aL.resize(), aM.resize(), aH.resize(), ba.resize(), ab.resize(), aT.resize(), bd.resize(), aO.a79()) : (aW.aCe(), aW.aCf()), bb.dc = !0)
	}

	function aQZ(f0) {
		return f0 && 128 < f0 ? Math.floor(f0) : 128
	}

	function aQa(aQc) {
		var a1, j7, aQe, rz, a6Y;
		if (!(0 < at.rc)) return rz = aQZ(document.documentElement.clientWidth), a6Y = aQZ(window.visualViewport && 2 !== u.id ? window.visualViewport.height : document.documentElement.clientHeight), a1 = rz, j7 = a6Y, aQe = 0 !== u.id || a1 < j7 ?
			700 : 1200, aQe = Math.min(aQe / ((a1 + j7) / 2), 1), aQe = 0 === bf.dp.data[1].value ? 2 * aQe / 3 : Math.min(aQe + (bf.dp.data[1].value - 1) * (1 - aQe) / 2, 1), at.pZ = (window.devicePixelRatio || 1) * aQe, __fx.hoveringTooltip
			.canvasPixelScale = at.pZ, aQc && !aQV ? (aQV = !0, document.body.removeChild(a0A)) : aQV && (aQV = !1, document.body.appendChild(a0A)), a1 = Math.floor(.5 + rz * at.pZ), j7 = Math.floor(.5 + a6Y * at.pZ), a1 !== at.a1 || j7 !== at
			.j7 ? (at.a1 = a1, at.j7 = j7, at.min = a9O(a1, j7), at.max = a4g(a1, j7), at.pV = bH.dl(a1 + j7, 2), at.tQ = a1 / j7, a0A.width = a1, a0A.height = j7, a0A.style.width = rz + "px", a0A.style.height = a6Y + "px", aQX = bb.lo + 1e3,
			1) : void 0
	}
	this.a1 = 0, this.j7 = 0, this.min = 0, this.max = 0, this.pV = 0, this.tQ = 1, this.pZ = 1, this.rc = 0, this.dV = function() {
		this.a1 = aQZ(document.documentElement.clientWidth) + 2, this.j7 = aQZ(document.documentElement.clientHeight) + 2
	}, this.dU = function() {
		et = 1, a0A = document.getElementById("canvasA"), (tU = a0A.getContext("2d", {
			alpha: __fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aQa(0)
	}, this.iS = function() {
		ay.iS(), 50 <= ++et && resize(0), -1 === aQX || bb.lo < aQX || (aQX = -1, 2e3 * ++aQY >= bb.lo + 8e3 ? console.log("error 3748") : u.v.setState(15))
	}, this.df = function(hU) {
		bo = !0, resize(hU)
	}, this.a0q = function() {
		aQW + 1e3 > bb.lo || (aQW = bb.lo, resize(0))
	}
}

function dA() {
	this.aP4 = new aQg, this.zS = new aQh
}

function aQh() {
	this.zT = function() {
		for (var g6, eY = ah.jf, yS = ah.jh, zC = ac.zC, aQi = this.aE2(), a7 = 0; a7 < eY; a7++) g6 = yS[a7], aY.zW(g6) && (zC[g6] = aQi);
		var oo = ac.oo,
			ia = ac.ia,
			ib = ac.ib,
			zB = ac.zB,
			eY = a9.je;
		for (a7 = 0; a7 < eY; a7++)(0 === zB[a7] || ib[a7] < 1 || 2 * oo[a7] > 3 * (ia[a7] + ib[a7])) && (zC[a7] = 0);
		var zQ = 0;
		for (a7 = 0; a7 < eY; a7++) zQ += 0 < zC[a7];
		return zQ
	}, this.aE2 = function() {
		return Math.min(65535, bb.jb())
	}
}

function aQg() {
	function aQm(g, f0, k3) {
		for (var a7 = 0; a7 < 256; a7++) g[a7] = (g[a7] + (f0 >> (a7 + k3) % 30 & 1)) % 256
	}
	this.iS = function(aQj, aQk) {
		var g = new Uint8Array(256);
		return function(g, aQj, aQk) {
				var a7, aQo = 3 + (4 + aQj) % 32768,
					aQp = 12 + aQk % 32768,
					aQq = 17 + ((aQj & aQk) + (aQj | aQk) + aQj) % 32768;
				for (a7 = 0; a7 < 256; a7++) aQo = 1 + aQo * aQp % aQq, g[a7] = aQo % 256
			}(g, aQj, aQk), aQm(g, aQj, 2), aQm(g, aQk, 7),
			function(g) {
				var a7, f0, e0 = 0;
				for (a7 = 0; a7 < 3e4; a7++) f0 = g[e0], g[e0] = (f0 + a7 + g[(e0 + a7) % 256]) % 256, e0 = (f0 + a7 + e0 + (f0 & e0)) % 256
			}(g),
			function(g) {
				var a7, a6Y = 1,
					sf = 1;
				for (a7 = 0; a7 < 256; a7 += 2) a6Y = (1 + a6Y) * (g[a7] + 1) % 1073741824, sf = (1 + sf) * (g[a7 + 1] + 1) % 1073741824;
				return [a6Y, sf]
			}(g)
	}
}

function cf() {
	var aQr, aQs, h1, aQt;
	this.dU = function() {
		var a7, ef, eh, aPG, aQu, a1, j7, wt, hE, vI, f0, g6, eo, er, a3q;
		if (function() {
				if (h1 = !0, aQt = "rgb(" + bO.vG[0] + "," + bO.vG[1] + "," + bO.vG[2] + ")", bO.aH6(bO.eE)) return 1;
				return h1 = !1, 0
			}()) aQs = null;
		else {
			for (aQr = bH.dl(96, 4), aQu = 1 === bO.eE ? (aPG = 0, 160) : (aPG = 128, 32), aQt = "rgb(" + aPG + "," + aPG + "," + aPG + ")", aQs = new Array(4), a7 = 3; 0 <= a7; a7--) {
				if (aQs[a7] = document.createElement("canvas"), a1 = a7 % 2 == 0 ? bO.ej : aQr, j7 = a7 % 2 == 0 ? aQr : bO.ek + 2 * aQr, aQs[a7].width = a1, aQs[a7].height = j7, vI = (hE = (wt = aQs[a7].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, a1, j7)).data, a7 % 2 == 0)
					for (eh = aQr - 1; 0 <= eh; eh--)
						for (f0 = aQu + Math.floor((eh + 1) * (aPG - aQu) / (aQr + 1)), ef = a1 - 1; 0 <= ef; ef--) vI[g6 = 4 * ((0 === a7 ? aQr - eh - 1 : eh) * a1 + ef)] = f0, vI[g6 + 1] = f0, vI[g6 + 2] = f0, vI[g6 + 3] = 255;
				else {
					for (ef = aQr - 1; 0 <= ef; ef--)
						for (f0 = aQu + Math.floor((ef + 1) * (aPG - aQu) / (aQr + 1)), eh = j7 - 1 - aQr; aQr <= eh; eh--) vI[g6 = 4 * (eh * a1 + (3 === a7 ? aQr - ef - 1 : ef))] = f0, vI[g6 + 1] = f0, vI[g6 + 2] = f0, vI[g6 + 3] = 255;
					for (er = 1; 0 <= er; er--)
						for (ef = aQr - 1; 0 <= ef; ef--)
							for (eh = aQr - 1; 0 <= eh; eh--) eo = (Math.pow(ef * ef + eh * eh, .5) + 1) / (aQr + 1), f0 = aQu + Math.floor((1 < eo ? 1 : eo) * (aPG - aQu)), vI[g6 = 4 * ((0 === er ? aQr - eh - 1 : eh + er * (j7 - aQr)) * a1 + (
								1 === a7 ? ef : aQr - ef - 1))] = f0, vI[g6 + 1] = f0, vI[g6 + 2] = f0, vI[g6 + 3] = 255
				}
				wt.putImageData(hE, 0, 0)
			}
			a3q = aQu, bO.vB.fillStyle = "rgb(" + a3q + "," + a3q + "," + a3q + ")", bO.vB.fillRect(0, 0, bO.ej, 1), bO.vB.fillRect(0, bO.ek - 1, bO.ej, 1), bO.vB.fillRect(0, 0, 1, bO.ek), bO.vB.fillRect(bO.ej - 1, 0, 1, bO.ek)
		}
	}, this.wn = function() {
		var er = h1 ? 0 : -aQr;
		aIj(er, er, bO.ej - 2 * er, bO.ek - 2 * er, bW.aQx, bW.aQy, bW.aQz, bW.aR0) || (tU.fillStyle = aQt, tU.fillRect(0, 0, at.a1, at.j7))
	}, this.tT = function() {
		h1 || (aIi(0, -aQr, bO.ej, aQr, bW.aQx, bW.aQy, bW.aQz, bW.aR0) && tU.drawImage(aQs[0], bW.aR1, bW.aR2 - aQr), aIi(bO.ej, -aQr, aQr, bO.ek + 2 * aQr, bW.aQx, bW.aQy, bW.aQz, bW.aR0) && tU.drawImage(aQs[1], bW.aR1 + bO.ej, bW.aR2 - aQr),
			aIi(0, bO.ek, bO.ej, aQr, bW.aQx, bW.aQy, bW.aQz, bW.aR0) && tU.drawImage(aQs[2], bW.aR1, bW.aR2 + bO.ek), aIi(-aQr, -aQr, aQr, bO.ek + 2 * aQr, bW.aQx, bW.aQy, bW.aQz, bW.aR0) && tU.drawImage(aQs[3], bW.aR1 - aQr, bW.aR2 - aQr))
	}
}

function cz() {
	this.h2 = new aR3, this.aE0 = new aR4, this.wq = new aR5, this.s = new aR6, this.i4 = new aR7, this.a3q = new aR8, this.aR9 = new aRA, this.jS = new aRB, this.kK = new aRC, this.aRD = new aRE, this.dU = function() {
		this.wq.dU(), this.s.dU(), this.i4.dU(), this.a3q.dU(), this.aRD.dU()
	}, this.tT = function() {
		this.aRD.tT(), this.wq.tT()
	}
}

function aRB() {
	this.iS = function(player) {
		var oe;
		return !!a9.data.passableWater && 0 !== ac.gF[player].length && bJ.s.og !== bJ.s.jv && !((oe = bJ.s.oe[player]) >= aA.jv[aA.im[player]] || oe === bJ.s.os || !b6.fu.om(player, aA.jt[aA.im[player]], 32, 0) || !aj.iH.iS(player) && !aj.iJ.iS(
			player) || ! function(a22) {
			var aRH = bK.fA[1] + bI.hJ[bK.fA[2] - 1] << 2;
			if (aY.eP(aRH)) return 1;
			return aRH = aY.eQ(aRH), a22 !== aRH && !!eR(a22, aRH)
		}(player)) && function(player) {
			return b6.fu.op(player), bJ.s.ov(player), !0
		}(player)
	}
}

function aR3() {
	function aRP(a7, kk, kl) {
		var aRR, aRQ;
		if (!(a7 < 0)) return aRQ = bJ.s.lx[a7], aRR = bI.hi(aRQ), aRQ = bI.hl(aRQ), a7 = 20 * (.9 + .1 * Math.log10(bJ.s.a4z[a7])), a7 = Math.max(a7, bI.hy(b6.pT.sH(.02, 1.7))), bH.aIq(bI.hh(kk), bI.hk(kl), aRR, aRQ, a7)
	}

	function aRJ(aRI) {
		var aRU = 4 + .03 * (1 + 1.5 * u.v.r8()) * at.pV / hw;
		return bI.hm(aRI, bK.fA[1]) < aRU
	}
	this.h3 = function(player, aRI) {
		return !!(a9.data.passableWater && bI.hz(aRI) && bJ.s.og !== bJ.s.jv && bJ.s.oe[player] !== bJ.s.os && 0 !== ac.gF[player].length && bJ.kK.kL(player, aRI) && aRJ(aRI))
	}, this.ny = function(player, lu, aRI) {
		return !!(bI.hz(aRI) && this.ow(player, lu) && bJ.kK.ox(aRI) && aRJ(aRI))
	}, this.ow = function(player, id) {
		for (var aRK, sC = player << 3, sD = sC + bJ.s.oe[player], aRL = bJ.s.aRL, aRM = bJ.s.aRM, a7 = sC; a7 < sD; a7++)
			if (id === aRM[aRK = aRL[a7]]) return bK.fA[3] = aRK, !0;
		return !1
	}, this.nx = function(eK) {
		var a3r = bJ.a3q.a3r;
		return !!this.ow(a9.eI, a3r) && (b4.gv.nx(a3r, eK), !0)
	}, this.a3t = function(kk, kl) {
		var player = a9.eI,
			eY = bJ.s.oe[player];
		if (0 === eY) return !1;
		for (var aRL = bJ.s.aRL, lx = bJ.s.lx, sC = player << 3, aRN = 80, aKw = -1, a7 = sC + eY - 1; sC <= a7; a7--) {
			var aRO = aRL[a7],
				eo = bI.hc(kk, kl, lx[aRO]);
			eo < aRN && (aRN = eo, aKw = aRO)
		}
		return !!aRP(aKw, kk, kl) && (bJ.a3q.a3r = bJ.s.aRM[aKw], bi.ou.a3t(), !0)
	}, this.a40 = function(kk, kl) {
		var eY = bJ.s.og;
		if (eY < 1) return -1;
		for (var lx = bJ.s.lx, aRN = 80, aKw = -1, a7 = 0; a7 < eY; a7++) {
			var eo = bI.hc(kk, kl, lx[a7]);
			eo < aRN && (aRN = eo, aKw = a7)
		}
		return aRP(aKw, kk, kl) ? aKw : -1
	}, this.lw = function(player, id) {
		for (var sC = player << 3, sD = sC + bJ.s.oe[player], aRM = bJ.s.aRM, aRL = bJ.s.aRL, a7 = sC; a7 < sD; a7++) {
			var aRO = aRL[a7];
			if (aRM[aRO] === id) return aRO
		}
		return -1
	}, this.aDx = function(player) {
		for (var sC = player << 3, sD = sC + bJ.s.oe[player], aRL = bJ.s.aRL, a4z = bJ.s.a4z, im = 0, a7 = sC; a7 < sD; a7++) im += a4z[aRL[a7]];
		return im
	}, this.m2 = function(player) {
		return 0 === bJ.s.oe[player] ? -1 : bJ.s.aRL[player << 3]
	}
}

function aR4() {
	this.aE1 = function(player) {
		for (var aRL = bJ.s.aRL, sC = player << 3, a7 = sC + bJ.s.oe[player] - 1; sC <= a7; a7--) this.aRV(aRL[a7])
	}, this.aRV = function(aRW) {
		var s = bJ.s,
			aRX = s.og - 1,
			aRY = s.a4y[aRW],
			aRZ = s.aRa[aRW],
			aRb = s.lx[aRW];
		s.og = aRX, s.a4y[aRW] = s.a4y[aRX], s.aRc[aRW] = s.aRc[aRX], s.aRd[aRW] = s.aRd[aRX], s.lx[aRW] = s.lx[aRX], s.aRe[aRW] = s.aRe[aRX], s.a4z[aRW] = s.a4z[aRX], s.aRa[aRW] = s.aRa[aRX], s.aRM[aRW] = s.aRM[aRX], s.aRf[aRW] = s.aRf[aRX], s
			.aRg[aRW] = s.aRg[aRX], s.aRh[aRW] = s.aRh[aRX], s.aRL[s.a4y[aRW]] = aRW,
			function(aPk) {
				var player = aPk >> 3,
					s = bJ.s,
					eY = s.oe[player] - 1,
					aRk = (player << 3) + eY;
				s.oe[player] = eY, aRk !== aPk && (s.aRL[aPk] = s.aRL[aRk], s.a4y[s.aRL[aPk]] = aPk)
			}(aRY), bJ.i4.i4[bI.i3(s.lx[aRW])][s.aRa[aRW]] = aRW, aRX = bI.i3(aRb), aRY = aRZ, aRX = bJ.i4.i4[aRX], s = aRX.pop(), aRY !== aRX.length && (aRX[aRY] = s, bJ.s.aRa[s] = aRY)
	}
}

function aR5() {
	var aRm, xH = 8,
		aRn = new Array(2);

	function aRo(e0) {
		var hB = xH + 4,
			a1T = b6.pT.v7(hB, hB),
			hH = b6.pT.getContext(a1T, !0),
			hE = b6.pT.getImageData(hH, hB, hB),
			vI = hE.data;
		return aRp(vI, hB + 1, e0), aRp(vI, hB + 2, e0), aRp(vI, 2 * hB + 1, e0), aRp(vI, 2 * hB - 3, e0), aRp(vI, 2 * hB - 2, e0), aRp(vI, 3 * hB - 2, e0), aRp(vI, hB * (hB - 3) + 1, e0), aRp(vI, hB * (hB - 2) + 1, e0), aRp(vI, hB * (hB - 2) + 2,
			e0), aRp(vI, hB * (hB - 2) - 2, e0), aRp(vI, hB * (hB - 1) - 3, e0), aRp(vI, hB * (hB - 1) - 2, e0), hH.putImageData(hE, 0, 0), a1T
	}

	function aRp(vI, eK, e0) {
		eK *= 4;
		vI[eK] = 255, vI[1 + eK] = 255, vI[2 + eK] = e0, vI[3 + eK] = 255
	}

	function v7(player) {
		var a1T = b6.pT.v7(xH, xH);
		return function(hH, player) {
			var ef, eh, hg, eK, aRr, aRs, hB = xH,
				hE = b6.pT.getImageData(hH, hB, hB),
				vI = hE.data,
				kP = (hB >> 1) - .5,
				aQt = aY.a5X(player),
				aRu = b6.pd.a14(aQt, .5);
			b6.pd.a16(aQt, aRu, 300) || b6.pd.a18(aQt, 100);
			for (eh = 0; eh < hB; eh++)
				for (ef = 0; ef < hB; ef++) aRs = (hB - 1.5) * (hB - 1.5) / 4, aRr = (hg = (hg = ef - kP) * hg + (hg = eh - kP) * hg) <= (hB - 4.5) * (hB - 4.5) / 4 ? aRu : aQt, vI[eK = 4 * (eh * hB + ef)] = aRr[0], vI[1 + eK] = aRr[1], vI[2 +
					eK] = aRr[2], vI[3 + eK] = aRs < hg ? 0 : 255;
			hH.putImageData(hE, 0, 0)
		}(b6.pT.getContext(a1T, !0), player), a1T
	}
	this.dU = function() {
		aRm = new Array(a9.eV), aRn[0] = aRo(255), aRn[1] = aRo(0)
	}, this.tT = function() {
		var a7, player, aRv, aIr, im, hf, aRx, aRz, aS0, lx = bJ.s.lx,
			a4y = bJ.s.a4y,
			a4z = bJ.s.a4z,
			aRg = bJ.s.aRg,
			aS1 = aRm,
			aS2 = a9.eI,
			aS3 = -1,
			eY = bJ.s.og,
			aS4 = at.a1,
			aS5 = at.j7,
			aS6 = bO.ej << 4,
			eN = hw,
			eC = eN / xH,
			ly = hv / eN,
			lz = hx / eN,
			hg = (aS4 + hv) / eN - ly,
			hj = (aS5 + hx) / eN - lz,
			hH = tU;
		for (bJ.h2.ow(a9.eI, bJ.a3q.a3r) && (aS3 = bK.fA[3]), hH.imageSmoothingEnabled = eN < 9, b6.pT.textAlign(hH, 1), b6.pT.textBaseline(hH, 1), a7 = 0; a7 < eY; a7++) player = a4y[a7] >> 3, im = a4z[a7], aRv = .9 + .1 * Math.log10(im), aIr =
			(hf = lx[a7]) % aS6 / 16 - aRv, hf = aS5 * (Math.floor(hf / aS6) / 16 - aRv - lz) / hj, aRx = -2 * (aS0 = eN * aRv) * (1 + (aRz = +(player === aS2)) / 8), aRz = aRz * aS0 / 4, (aS0 = aS4 * (aIr - ly) / hg) < aRx || hf < aRx || aS4 +
			aRz < aS0 || aS5 + aRz < hf || (aIr = 2 * aRv * eC, aRx = aRv * eN, void 0 === (aRz = aS1[player]) && (aS1[player] = aRz = v7(player)), player === aS2 && (hH.setTransform(aIr, 0, 0, aIr, aS0 - 2 * aIr, hf - 2 * aIr), hH.drawImage(aRn[
				+(a7 === aS3)], 0, 0)), hH.setTransform(aIr, 0, 0, aIr, aS0, hf), hH.drawImage(aRz, 0, 0), (aRv = Math.floor(function(im) {
				if (im < 1e3) return .42;
				if (im < 1e4) return .34;
				if (im < 1e6) return .26;
				if (im < 1e8) return .19;
				return .15
			}(im) * aRx)) < 6) || (hH.setTransform(1, 0, 0, 1, 0, 0), hH.fillStyle = aRg[a7] ? b7.n6 : b7.mY, hH.font = b6.pT.rV(1, aRv), hH.fillText(b6.zF.xw(im), aS0 + aRx, hf + aRx + .1 * aRv));
		hH.imageSmoothingEnabled = !1, hH.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aRE() {
	var a1T;
	this.dU = function() {
		a1T = a1T || bL.s.aS9(20, bc.aSA[7])
	}, this.tT = function() {
		var mI = hw;
		if (!(5 <= mI)) {
			var aS4 = at.a1,
				aS5 = at.j7,
				ly = hv / mI,
				lz = hx / mI,
				mB = (aS4 + hv) / mI,
				mC = (aS5 + hx) / mI,
				g7 = -20 * mI,
				aSB = .5 * g7,
				aS6 = bO.ej << 4,
				eY = bJ.s.og,
				lx = bJ.s.lx,
				aSC = a1T,
				hH = tU;
			3 < mI && (hH.globalAlpha = .5 * (5 - mI));
			for (var a7 = 0; a7 < eY; a7++) {
				var hf = lx[a7],
					ef = aS4 * (hf % aS6 / 16 - ly) / (mB - ly) + aSB,
					hf = aS5 * (Math.floor(hf / aS6) / 16 - lz) / (mC - lz) + aSB;
				aS4 < ef || aS5 < hf || ef < g7 || hf < g7 || (hH.setTransform(mI, 0, 0, mI, ef, hf), hH.drawImage(aSC, 0, 0))
			}
			hH.globalAlpha = 1, hH.setTransform(mI, 0, 0, mI, 0, 0)
		}
	}
}

function aRA() {
	this.iS = function() {
		for (var aRQ, aR9, aRf = bJ.s.aRf, lx = bJ.s.lx, aRd = bJ.s.aRd, a7 = bJ.s.og - 1; 0 <= a7; a7--) aRQ = lx[a7], 0 !== (aR9 = aRf[a7]) && aRQ === aRd[a7] && (! function(a7, aSG, hT) {
			var il, player = bJ.s.a4y[a7] >> 3,
				hT = aSG + bI.hJ[hT] << 2,
				a7 = bJ.s.a4z[a7];
			if (bZ.aSH(player), aY.eP(hT)) il = a9.eV;
			else {
				if ((il = aY.eQ(hT)) === player) return hT = b6.fu.fx(player, a7), bZ.fy(player, a7 - hT, 12);
				if (!eR(player, il)) return b4.jj.oE(player, il, a7)
			}
			aZ.iz(player, il) || aZ.jI(player) ? (ac.g0[player].push(aSG << 2), aZ.ii(player, a7, il), aB.ij(player, !0)) : bZ.fy(player, a7, 12)
		}(a7, bI.i2(aRQ), aR9 - 1), bJ.aE0.aRV(a7))
	}, this.aSI = function(player, eK, hT, lu) {
		if (0 !== hT) {
			var aS2 = a9.eI;
			if (b6.fu.gl(aS2) && eR(player, aS2) && player !== aS2 && 0 !== ac.gF[aS2].length) {
				var aRH = eK + bI.hJ[--hT] << 2;
				if (aY.eP(aRH) || eR(player, aY.eQ(aRH))) {
					for (var em = !1, a7 = 0; a7 < 4; a7++)
						if (aRH = eK + bI.hJ[a7] << 2, aY.eT(aRH) && !aY.eP(aRH) && aY.eQ(aRH) === aS2) {
							em = !0;
							break
						} em && (aJ.a3s(719, 0), aJ.z2(180, L(398, [ac.zD[player]]), 719, player, b7.n5, b7.mV, -1, !0, void 0, {
						es: 1,
						lu: lu
					}))
				}
			}
		}
	}
}

function aR6() {
	this.aSJ = null, this.jv = 512, this.os = 8, this.og = 0, this.aSK = 0, this.a4y = new Uint16Array(this.jv), this.aRc = new Uint32Array(this.jv), this.aRd = new Uint32Array(this.jv), this.lx = new Uint32Array(this.jv), this.aRe = new Uint16Array(
			this.jv), this.a4z = new Uint32Array(this.jv), this.aRa = new Uint16Array(this.jv), this.aRM = new Uint16Array(this.jv), this.aRf = new Uint8Array(this.jv), this.aRg = new Uint8Array(this.jv), this.aRh = new Uint32Array(this.jv), this
		.oe = new Uint8Array(a9.eV), this.aRL = new Uint16Array(this.os * a9.eV), this.dU = function() {
			this.aSK = 0, this.og = 0, this.aSJ = new Uint8Array(bO.ej + bO.ek), this.oe.fill(0)
		}, this.ov = function(player) {
			var eY = this.og,
				aSL = bI.i1(bK.fA[0]),
				aSM = this.oe[player],
				aSN = (player << 3) + aSM,
				im = (this.a4y[eY] = aSN, this.aRc[eY] = aSL, this.lx[eY] = aSL, this.aRd[eY] = bI.i1(bK.fA[1]), this.aRe[eY] = 0, bK.f6[0]);
			im < 60 ? (b6.fu.fv(player, 60 - im), this.a4z[eY] = 60) : this.a4z[eY] = im, this.aRa[eY] = bJ.i4.ov(eY, bI.i3(aSL)), this.aRM[eY] = this.aSK, this.aRf[eY] = bK.fA[2], this.aRg[eY] = 0, this.aRh[eY] = 0, this.aSK = this.aSK + 1 & 1023,
				this.aRL[aSN] = eY, this.oe[player] = aSM + 1, this.og++, bJ.aR9.aSI(player, bK.fA[1], bK.fA[2], this.aRM[eY])
		}, this.nx = function() {
			var aRK = bK.fA[3];
			this.aRc[aRK] = this.lx[aRK], this.aRd[aRK] = bI.i1(bK.fA[1]), this.aRe[aRK] = 0, this.aRf[aRK] = bK.fA[2], bJ.aR9.aSI(this.a4y[aRK] >> 3, bK.fA[1], bK.fA[2], this.aRM[aRK])
		}, this.iS = function() {
			bJ.aR9.iS();
			var a7, g6 = a9.eI,
				dk = bJ.h2.aDx(g6),
				rM = (! function(rM) {
					var a7, aSS, aST, aSU, aSV, aSL, aSZ, aSa, eb, g7, aRc = rM.aRc,
						aRd = rM.aRd,
						lx = rM.lx,
						a4z = rM.a4z,
						aRg = rM.aRg,
						aRe = rM.aRe,
						aRa = rM.aRa,
						gM = ac.gM,
						a4y = rM.a4y,
						rM = rM.og,
						aS6 = bO.ej << 4;
					for (a7 = rM - 1; 0 <= a7; a7--) aST = lx[a7], aSS = aRd[a7], aST !== aSS && (aSL = aRc[a7], aSZ = aSS % aS6 - (aSV = aSL % aS6), aSa = ~~((aSS + .5) / aS6) - (aSL = ~~((aSL + .5) / aS6)), eb = ~~Math.sqrt(aSZ * aSZ + aSa *
						aSa + .5), g7 = 15e4 + 25e3 * bH.log10(a4z[a7]), g7 += 5e4 * !gM[a4y[a7] >> 3], aRg[a7] && (g7 = bH.dl(g7, 5)), 65535 <= (g7 = aRe[a7] + Math.max(~~((g7 + .5) / eb), 1)) ? lx[a7] = aSU = aSS : (aRe[a7] = g7, lx[
						a7] = aSU = aSV + bH.dl(g7 * aSZ, 65536) + aS6 * (aSL + bH.dl(g7 * aSa, 65536))), aRa[a7] = bJ.i4.aSc(aRa[a7], aST, aSU))
				}(this), ! function(rM) {
					if (bb.jb() % 2 == 1) {
						var a7, k3, kP, es, et, aSd, xc, aSe, gy, hN, ly, lz, aSL, aSf, aSg, aSh, vQ, eY = rM.og,
							lx = rM.lx,
							a4y = rM.a4y,
							a4z = rM.a4z,
							aRh = rM.aRh,
							aRg = rM.aRg,
							i4 = bJ.i4.i4,
							aSj = i4.length,
							aSk = bJ.i4.aSk,
							aS6 = bO.ej << 4,
							aSl = a9.ie,
							aPY = bc.eW,
							g7 = (eY - 1) * (bH.dl(bb.jb(), 2) % 2);
						for (a7 = 0; a7 < eY; a7++)
							for (k3 = Math.abs(a7 - g7), aSL = lx[k3], kP = bI.i3(aSL), gy = a4y[k3] >> 3, ly = aSL % aS6, lz = ~~((aSL + .5) / aS6), aSh = a4z[k3], es = 0; es < 9; es++)
								if (!((aSd = kP + aSk[es]) < 0 || aSj <= aSd))
									for (aSe = i4[aSd], xc = aSe.length, et = 0; et < xc; et++) aSf = aSe[et], vQ = a4y[aSf] >> 3, gy == vQ || aSl && aPY[gy] === aPY[vQ] && aPY[gy] || (vQ = lx[aSf], (hN = ly - vQ % aS6) * hN + (hN = lz - ~~((vQ +
										.5) / aS6)) * hN < 14400 && ((vQ = a4z[aSf]) <= aSh ? aSg = Math.max(1, bH.dl(vQ + bH.dl(aSh - vQ, 10), 10)) : (aSg = Math.max(1, bH.dl(aSh, 10)), aRh[aSf] = Math.min(aRh[aSf] + aSg, 4294967295)),
										a4z[aSf] = Math.max(vQ - aSg, 0), aRg[aSf] = 4))
					}
				}(this), ! function(rM) {
					if (bb.jb() % 5 == 3) {
						var a7, im, a4z = rM.a4z,
							gM = ac.gM,
							a4y = rM.a4y,
							aRh = rM.aRh,
							aRg = rM.aRg,
							eY = rM.og;
						for (a7 = 0; a7 < eY; a7++) im = a4z[a7], gM[a4y[a7] >> 3] ? a4z[a7] = Math.max(im - Math.max(1, im >> 7), 0) : (a4z[a7] = Math.max(im - Math.max(1, im >> 11), 0), aRg[a7] || (im = aRh[a7]) && (im = Math.max(im >> 3, 1),
							a4z[a7] = Math.min(a4z[a7] + (im << 1), 4294967295), aRh[a7] -= im))
					}
				}(this), this),
				a4z = rM.a4z,
				aRg = rM.aRg;
			for (a7 = rM.og - 1; 0 <= a7; a7--) aRg[a7] = aRg[a7] >> 1, 0 === a4z[a7] && bJ.aE0.aRV(a7);
			bZ.fy(g6, dk - bJ.h2.aDx(g6), 15)
		}
}

function aR7() {
	this.aSm = 32, this.ef = 0, this.eh = 0, this.i5 = 0, this.aSn = 0, this.aSo = 4, this.i4 = null, this.aSk = new Int16Array(9), this.dU = function() {
		this.i5 = 1 + bH.dl(bO.ej - 1, this.aSm), this.aSn = 1 + bH.dl(bO.ek - 1, this.aSm), this.i4 = new Array(this.i5 * this.aSn), b6.pd.a13(this.i4);
		var ef, eh, aSk = this.aSk,
			a1 = this.i5;
		for (ef = -1; ef <= 1; ef++)
			for (eh = -1; eh <= 1; eh++) aSk[3 * (1 + eh) + 1 + ef] = eh * a1 + ef
	}, this.ov = function(aSq, a7) {
		return this.i4[a7].push(aSq), this.i4[a7].length - 1
	}, this.aSc = function(aSr, aSL, aSS) {
		var aSs, aSt, aSL = bI.i3(aSL),
			aSS = bI.i3(aSS);
		return aSL === aSS ? aSr : (aSs = this.i4[aSL].pop(), this.i4[aSL].length === aSr ? this.ov(aSs, aSS) : (aSt = this.i4[aSL][aSr], this.i4[aSL][aSr] = aSs, bJ.s.aRa[aSs] = aSr, this.ov(aSt, aSS)))
	}
}

function aRC() {
	function zx(aSS, aSu) {
		if (! function(aSS, aRI) {
				var hM = bI.i2(aSS),
					aSy = Math.abs(bI.eg(aRI) - bI.eg(hM)),
					hM = Math.abs(bI.ei(aRI) - bI.ei(hM));
				return 0 !== Math.max(aSy, hM) && (function(aSL, aSS, aSy, aSz) {
					var aT1 = bI.hi(aSL),
						aSL = bI.hl(aSL),
						aT3 = bI.hi(aSS),
						aSS = bI.hl(aSS),
						aT3 = aT3 - aT1,
						aSS = aSS - aSL,
						aT7 = Math.abs(aT3),
						aT8 = Math.abs(aSS),
						aT3 = 0 < aT3 ? 1 : 3,
						aSS = 0 < aSS ? 2 : 0;
					aT8 < aT7 ? aTB(aT1, aSL, aT1 + aT7, aSL + aT8, aT3, aSS, aSy) : aTB(aSL, aT1, aSL + aT8, aT1 + aT7, aSS, aT3, aSz)
				}(aSS, bI.i1(aRI), aSy, hM), !0)
			}(aSS, aSu)) return !1;
		if (0 === bK.f3[0]) return !!aY.h1(aSu << 2);
		if (! function(aRI) {
				if (aY.h1(aRI << 2)) return 1;
				return function(aRI) {
					var a7, hT, aSJ = bJ.s.aSJ,
						aTF = bI,
						eY = bK.f3[0],
						aTG = 4 * aRI;
					for (a7 = eY - 1; 0 <= a7; a7--) {
						hT = aSJ[a7];
						var aTH = aTG;
						if (aTG = aTF.i7(aTG, hT + 2 & 3), aY.h1(aTG)) return bK.f3[0] = a7, bK.fA[1] = aTG >> 2, bK.fA[2] = 1 + hT, bK.fA[4] = aTH, 1
					}
					return
				}(aRI)
			}(aSu)) return !1;
		if (bK.fA[2] && aY.ed(bK.fA[4])) return !1;
		var a7, aSu = bI.i2(aSS),
			vI = a9s,
			aSJ = bJ.s.aSJ,
			eY = bK.f3[0] - 1,
			aTG = 4 * aSu,
			hK = bI.hK;
		for (a7 = 0; a7 < eY; a7++)
			if (aTG += hK[aSJ[a7]], 0 !== vI[aTG + 3] || 2 !== vI[aTG + 2]) return !!void 0;
		return !!1
	}

	function aTB(aT1, aT2, aT3, aT4, aT9, aTA, aSy) {
		for (var eh, aSJ = bJ.s.aSJ, g7 = 0, aTC = 0, j7 = aT4 - aT2, a1 = aT3 - aT1, aTD = aT1 % 16, a7 = 1; a7 <= aSy; a7++) aSJ[g7++] = aT9, aSJ[g7] = aTA, g7 += (eh = (j7 * (aTD + (a7 << 4)) + .5) / a1 >> 4) - aTC, aTC = eh;
		bK.fF(bK.f3, g7)
	}
	this.kL = function(player, aSu) {
		var hT, hM, gx = bI.hV(player, aSu);
		return gx !== aSu && (hT = bI.hL(gx, aSu), hM = bI.i6(gx, hT), !(!aY.h1(hM << 2) && (hT = bI.hS(gx, aSu, hT), hM = bI.i6(gx, hT), !aY.h1(hM << 2)) || (bK.fA[0] = hM, bK.fA[1] = aSu, bK.fA[2] = 0, hM !== aSu && (!zx(bI.i1(hM), aSu) ||
			0 !== bK.fA[2] && bI.hb(player, bK.fA[1] + bI.hJ[bK.fA[2] - 1] << 2)))))
	}, this.ox = function(aSu) {
		var aSL = bJ.s.lx[bK.fA[3]];
		return bK.fA[1] = aSu, bK.fA[2] = 0, zx(aSL, aSu)
	}
}

function aR8() {
	var xH = 32,
		xG = new Array(2);

	function v7(et) {
		var ef, eh, eK, hj, hg, hB = xH,
			a1T = b6.pT.v7(hB, hB),
			hH = b6.pT.getContext(a1T, !0),
			hE = b6.pT.getImageData(hH, hB, hB),
			vI = hE.data,
			kP = (hB >> 1) - .5,
			kQ = Math.sqrt(kP * kP);
		for (vI.fill(255), eh = 0; eh < hB; eh++)
			for (ef = 0; ef < hB; ef++) hg = ef - kP, hj = eh - kP, eK = 4 * (eh * hB + ef), hg = 714 * (kQ - Math.sqrt(hg * hg + hj * hj)) / kQ, vI[2 + eK] = et, vI[3 + eK] = 255 < hg ? 0 : hg;
		return hH.putImageData(hE, 0, 0), a1T
	}
	this.a3r = -1, this.dU = function() {
		this.a3r = -1, xG[0] || (xG[0] = v7(255), xG[1] = v7(0))
	}, this.aTJ = function(hH, eC, ef, eh, dz, a7) {
		b6.fu.gl(a9.eI) && (hH.setTransform(eC *= 4 / 3 * .625, 0, 0, eC, ef - (dz *= 4 / 3), eh - dz), hH.drawImage(xG[+(bJ.s.aRM[a7] === this.a3r)], 0, 0))
	}
}

function dX() {
	this.aNF = [L(399), L(400), L(401), L(402), L(403), L(404), L(405), L(406), L(407), L(408), L(409), L(410), L(411)];
	var aTK = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", ""];
	this.aNE = new Array(aTK.length), this.dU = function() {
		var g = bf.dp.data[155].value.split(";"),
			kP = g.length;
		if (function() {
				for (var eY = aTK.length, a7 = 0; a7 < eY; a7++) bT.aNE[a7] = aTK[a7]
			}(), !(kP > aTK.length))
			for (var a7 = 0; a7 < kP; a7++) g[a7].length && (this.aNE[a7] = g[a7])
	}, this.aNH = function(e0, code) {
		for (var aNE = this.aNE, aTM = aTK, pA = (aNE[e0] = code, ""), eY = aNE.length, aTN = [], a7 = 0; a7 < eY; a7++) aTN.push(aNE[a7] === aTM[a7] ? "" : aNE[a7]);
		eY--;
		for (a7 = 0; a7 < eY; a7++) pA += aTN[a7] + ";";
		bf.rC.rD(155, pA += aTN[eY])
	}, this.aND = function() {
		bf.rC.rD(155, ""), this.dU()
	}, this.et = function(code, e0) {
		return code === this.aNE[e0] || code === this.aNE[e0 + 1]
	}
}

function dS() {
	var aTO = new Audio(
		"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
		);
	this.aTP = function() {
		aTO && aTO.play()
	}
}

function cT() {
	this.a6L = function() {
		var aTS;
		return !(ah.jf < 3 || ac.gM[kw[0]] >= a9.jO >> 1) && (a9.ie ? (aTS = aa.aF3(), !(2 * aa.aF4(bd.kt()) >= aTS)) : function() {
			var aTS = aa.aF3();
			if (2 * ac.ga[kw[0]] >= aTS) return !1;
			return !0
		}())
	}
}

function c4() {
	this.dU = function() {
		if (0 === a9.data.sResourcesType) {
			for (var aSM = a9.je, ga = ac.ga, a7 = 0; a7 < aSM; a7++) ga[a7] = 512;
			var aSN = a9.vq,
				ju = aA.ju,
				im = aA.im;
			for (a7 = aSM; a7 < aSN; a7++) ga[a7] = ju[im[a7]]
		} else(1 === a9.data.sResourcesType ? function() {
			for (var eY = a9.vq, ga = ac.ga, sResourcesValue = a9.data.sResourcesValue, a7 = 0; a7 < eY; a7++) ga[a7] = sResourcesValue
		} : function() {
			for (var eY = a9.vq, ga = ac.ga, sResourcesData = a9.data.sResourcesData, a7 = 0; a7 < eY; a7++) ga[a7] = sResourcesData[a7]
		})();
		bZ.lR[8] = ac.ga[a9.eI]
	}
}

function dI() {
	var aTX = 501,
		aTZ = (this.aTY = new Uint32Array(aTX), this.a26 = new Uint32Array(aTX), this.a9F = new Uint16Array(aTX), this.aNN = 0, 1),
		aTa = 0;

	function aTd(self) {
		self.max.fill(0)
	}

	function aTf(self, a7) {
		self.max[0] = Math.max(self.aTY[a7], self.max[0]), self.max[1] = Math.max(self.a26[a7], self.max[1]), self.max[2] = Math.max(self.a9F[a7], self.max[2])
	}
	this.max = [0, 0, 0], this.aTb = 0, this.lR = new Array(21), this.aTc = null, this.dV = function() {
		this.aTc = [L(412), L(413), L(414), L(415), L(416), L(417), L(418), L(419), L(260), L(261), L(420), L(421), L(422), L(423), "", L(424), L(425), L(426), L(220), L(427), L(428)]
	}, this.dU = function() {
		this.aNN = 0, aTZ = 1, this.aTb = 0, aTa = 0, aTd(this), this.lR.fill(0)
	}, this.oq = function(player, hu) {
		b6.fu.a21(player) && (this.lR[0] += hu + 1, this.lR[1]++, this.lR[12] += bK.f6[1])
	}, this.oG = function(player, nt) {
		__fx.donationsTracker.logDonation(player, nt, bK.f6[0]);
		player === a9.eI && (aJ.oG(bK.f6[0], bK.f6[1], nt), this.lR[12] += bK.f6[1], this.lR[16] += bK.f6[0]), nt === a9.eI && (aJ.a5C(bK.f6[0], player), this.lR[10] += bK.f6[0])
	}, this.ot = function(player) {
		b6.fu.a21(player) && (this.lR[2]++, this.lR[12] += bK.f6[1])
	}, this.p5 = function(player) {
		b6.fu.a21(player) && (this.lR[19]++, this.lR[12] += bK.f6[1])
	}, this.aSH = function(player) {
		b6.fu.a21(player) && this.lR[20]++
	}, this.fy = function(player, a2i, e0) {
		b6.fu.a21(player) && (this.lR[e0] += a2i)
	}, this.iS = function() {
		var self;
		this.aTb || 0 < aTa-- || ((self = this).aTY[self.aNN] = ac.gM[a9.eI], self.a26[self.aNN] = ac.ga[a9.eI], self.a9F[self.aNN] = aa.a9G(a9.eI), aTf(self, self.aNN), self.aNN++, self.aNN === aTX && function(self) {
			aTd(self), aTf(self, 0), self.aNN = 1 + bH.dl(aTX, 2);
			for (var a7 = 1; a7 < self.aNN; a7++) self.aTY[a7] = self.aTY[2 * a7], self.a26[a7] = self.a26[2 * a7], self.a9F[a7] = self.a9F[2 * a7], aTf(self, a7);
			aTZ *= 2
		}(self), aTa = aTZ - 1, ba.lI(), 0 === ac.lV[a9.eI] && (self.aTb = bb.jb()))
	}
}

function dJ() {
	this.a1 = 0, this.j7 = 0, this.rz = 0, this.s0 = 0, this.aTh = 0, this.aTi = 0, this.a6Y = 0, this.sf = 0;
	var aTk = this.aTj = 0;
	this.aTl = 0, this.aTm = 0, this.aTn = 0, this.a5x = 0, this.e0 = 0, this.a8s = null, this.xC = !1, this.aTo = -1, this.aTp = !1, this.aTq = [0, 0], this.dV = function() {
		this.a8s = [L(429), L(115, 0, "Balance"), L(114, 0, "Interest"), L(430)]
	}, this.dU = function() {
		this.xC = !1, this.aTo = -1, this.aTp = !1, this.resize()
	}, this.resize = function() {
		this.a1 = at.a1 < 1.369 * at.j7 ? at.a1 : 1.369 * at.j7;
		var eb = u.v.r8() && at.a1 < at.j7 ? 1 : u.v.r8() ? .8 : at.a1 < at.j7 ? .65 : .59;
		this.a1 = Math.floor(eb * this.a1), this.a1 -= u.v.r8() && at.a1 < at.j7 ? 2 * bY.gap + 2 : 0, this.j7 = Math.floor(this.a1 / 1.369), this.a5x = Math.floor(this.j7 / 150), this.a5x = Math.max(this.a5x, 1.5), this.rz = Math.floor(1 + .02 *
			this.a1), this.s0 = Math.floor(1 + .04 * this.a1), this.a6Y = this.s0, aTk = Math.floor(.75 * this.a6Y), this.sf = Math.floor(1 + .075 * this.a1), this.aTl = Math.floor(1 + .1125 * this.a1), this.aTm = Math.floor(this.a1 * (u.v
			.r8() ? .03 : .029)), this.aTm = Math.max(this.aTm, 4), this.aTn = Math.floor(.035 * this.a1), this.aTn = Math.max(this.aTn, 4), this.aTj = this.j7 - 2 * this.a6Y - this.sf - this.aTl, this.xC && this.aTr()
	}, this.gm = function(kk, kl) {
		var vt, vs;
		return !!this.xC && (vs = kk, vt = kl, kk -= bH.dl(at.a1 - this.a1, 2), kl -= bH.dl(at.j7 - this.j7, 2), kk < 0 || kl < 0 || kk >= this.a1 || kl >= this.j7 || kk >= this.a1 - this.aTl && kl < this.aTl ? -1 !== aI.gm(vs, vt) || b8.gm(vs,
			vt) || this.r1() : kl < this.aTl || (kl < this.j7 - this.sf ? (this.aTp = !0, this.aTo = (kk - 2 * this.rz - this.aTh) / this.aTi, 3 !== this.e0 && (bb.dc = !0)) : (vs = (vs = Math.floor(kk / (this.a1 / this.a8s.length))) <
			0 ? 0 : vs >= this.a8s.length ? this.a8s.length - 1 : vs) !== this.e0 && (this.e0 = vs, this.aTr(), bb.dc = !0)), !0)
	}, this.a0B = function(kk, kl) {
		return this.aTq[0] = kk, this.aTq[1] = kl, !(!this.xC || !this.aTp || (kk -= bH.dl(at.a1 - this.a1, 2), kl = this.aTo, this.aTo = (kk - 2 * this.rz - this.aTh) / this.aTi, (0 <= this.aTo && this.aTo <= 1 || 0 <= kl && kl <= 1) && (bb
			.dc = !0), 0))
	}, this.a0a = function() {
		this.aTp && (this.aTp = !1)
	}, this.a0m = function() {
		this.xC ? this.r1() : this.show()
	}, this.show = function() {
		bZ.aNN < 2 || (this.xC = !0, this.aTr())
	}, this.r1 = function() {
		this.xC = !1, this.aTo = -1, bb.dc = !0
	}, this.aTr = function() {
		this.e0 < 2 ? this.aTh = aM.measureText(b6.zF.xw(bZ.max[this.e0]), b6.pT.rV(0, this.aTm)) : 2 === this.e0 && (this.aTh = aM.measureText(b6.zF.a2b(6, 2), b6.pT.rV(0, this.aTm))), this.aTi = this.a1 - 2 * this.rz - this.aTh - this.s0
	}, this.lI = function() {
		this.xC && this.aTr()
	}, this.tT = function() {
		this.xC && this.a6p()
	}, this.a6p = function() {
		var ef = bH.dl(at.a1 - this.a1, 2),
			eh = bH.dl(at.j7 - this.j7, 2);
		tU.setTransform(1, 0, 0, 1, ef, eh), tU.fillStyle = b7.mV, tU.fillRect(0, this.aTl, this.a1, this.j7 - this.aTl), this.aTs(), this.aMC(), tU.strokeRect(0, 0, this.a1, this.j7), b6.pT.textAlign(tU, 2), tU.font = b6.pT.rV(0, this.aTm),
			0 === this.e0 ? this.aTt(bZ.aTY, ef, eh) : 1 === this.e0 ? this.aTt(bZ.a26, ef, eh) : 2 === this.e0 ? this.aTu(ef, eh) : 3 === this.e0 && (this.aTv(ef, eh), this.aTw(ef, eh)), aI.a4H(Math.floor(ef + this.a1 - .725 * this.aTl), Math
				.floor(eh + .275 * this.aTl), Math.floor(.45 * this.aTl)), tU.setTransform(1, 0, 0, 1, 0, 0)
	}, this.aTs = function() {
		var a7, dk;
		for (tU.lineWidth = this.a5x, b6.pT.textBaseline(tU, 1), b6.pT.textAlign(tU, 1), tU.strokeStyle = b7.mY, tU.font = b6.pT.rV(1, this.aTn), dk = this.a1 / this.a8s.length, tU.fillStyle = b7.mu, tU.fillRect(this.e0 * dk, this.j7 - this.sf,
				dk, this.sf), tU.fillStyle = b7.mY, tU.fillRect(0, this.j7 - this.sf - .5 * this.a5x, this.a1, this.a5x), a7 = 1; a7 <= 3; a7++) tU.fillRect(a7 * dk, this.j7 - this.sf, this.a5x, this.sf);
		for (a7 = this.a8s.length - 1; 0 <= a7; a7--) tU.fillText(b6.wt.a1f(this.a8s[a7], 0, .9 * dk), (a7 + .5) * dk, this.j7 - .46 * this.sf)
	}, this.aMC = function() {
		tU.fillStyle = b7.nK, tU.fillRect(0, 0, this.a1, this.aTl), tU.fillStyle = b7.mY, tU.fillRect(0, this.aTl - .5 * this.a5x, this.a1, this.a5x), tU.font = b6.pT.rV(1, .39 * this.aTl), tU.fillText(b6.wt.a1f(L(431), 0, .8 * this.a1), Math
			.floor(this.a1 / 2), Math.floor(.55 * this.aTl))
	}, this.aTt = function(g, ef, eh) {
		var kP = bZ.max[this.e0],
			a15 = (tU.setTransform(1, 0, 0, 1, ef + 2 * this.rz + this.aTh, eh + this.a6Y + this.aTl), tU.lineWidth = 2, this.aTj / Math.sqrt(kP));
		tU.beginPath(), tU.moveTo(this.aTi, this.aTj - a15 * Math.sqrt(g[bZ.aNN - 1]));
		for (var a7 = bZ.aNN - 2; 0 <= a7; a7--) tU.lineTo(a7 * this.aTi / (bZ.aNN - 1), this.aTj - a15 * Math.sqrt(g[a7]));
		tU.stroke();
		ef = this.a4H(g, a15, .5);
		ef < .95 && tU.fillText(b6.zF.xw(kP), -this.rz, 0), .05 < Math.abs(ef - .5) && tU.fillText(b6.zF.xw(Math.floor(kP / 4)), -this.rz, Math.floor(this.aTj / 2)), .05 < ef && tU.fillText("0", -this.rz, this.aTj)
	}, this.aTu = function(ef, eh) {
		tU.setTransform(1, 0, 0, 1, ef + 2 * this.rz + this.aTh, eh + this.a6Y + this.aTl), tU.lineWidth = 2;
		var a15 = this.aTj / Math.max(bZ.max[this.e0], 1);
		tU.beginPath(), tU.moveTo(this.aTi, this.aTj - a15 * bZ.a9F[bZ.aNN - 1]);
		for (var a7 = bZ.aNN - 2; 0 <= a7; a7--) tU.lineTo(a7 * this.aTi / (bZ.aNN - 1), this.aTj - a15 * bZ.a9F[a7]);
		tU.stroke();
		ef = this.a4H(bZ.a9F, a15, 1), eh = bZ.max[this.e0] / 100;
		ef < .95 && tU.fillText(b6.zF.a2b(eh, 2), -this.rz, 0), .05 < Math.abs(ef - .5) && tU.fillText(b6.zF.a2b(eh / 2, 2), -this.rz, Math.floor(this.aTj / 2)), .05 < ef && tU.fillText(b6.zF.a2b(0, 2), -this.rz, this.aTj)
	}, this.aTv = function(ef, eh) {
		tU.setTransform(1, 0, 0, 1, ef + .34 * this.a1, eh + 2 * aTk + this.aTl), b6.pT.textAlign(tU, 2);
		for (var a8d = this.j7 - 4 * aTk - this.sf - this.aTl, g = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], a7 = 9; 0 <= a7; a7--) tU.fillText(b6.wt.a1f(bZ.aTc[g[a7]], 0, .31 * this.a1), 0, a7 * a8d / 9);
		var f0 = bZ.lR;
		for (tU.setTransform(1, 0, 0, 1, ef + .39 * this.a1, eh + 2 * aTk + this.aTl), b6.pT.textAlign(tU, 0), tU.fillText(b6.zF.a2b(100 * f0[0] / (1024 * Math.max(f0[1], 1)), 1), 0, 0), a7 = 8; 1 <= a7; a7--) tU.fillText(f0[g[a7]].toString(), 0,
			a7 * a8d / 9);
		tU.fillText(b6.zF.a2b(100 * (1 - ac.gM[a9.eI] / f0[7]), 0), 0, a8d)
	}, this.aTw = function(ef, eh) {
		tU.setTransform(1, 0, 0, 1, ef + .79 * this.a1, eh + 2 * aTk + this.aTl), b6.pT.textAlign(tU, 2);
		var a7, a8d = this.j7 - 4 * aTk - this.sf - this.aTl;
		for (tU.fillStyle = b7.mp, a7 = 2; 0 <= a7; a7--) tU.fillText(b6.wt.a1f(bZ.aTc[a7 + 8], 0, .31 * this.a1), 0, a7 * a8d / 9);
		tU.fillText(b6.wt.a1f(bZ.aTc[18], 0, .31 * this.a1), 0, 3 * a8d / 9), tU.fillStyle = b7.mo, tU.fillText(b6.wt.a1f(bZ.aTc[11], 0, .31 * this.a1), 0, 4 * a8d / 9), tU.fillStyle = b7.n7, tU.fillText(b6.wt.a1f(bZ.aTc[13], 0, .31 * this.a1),
				0, 5 * a8d / 9), tU.fillText(b6.wt.a1f(bZ.aTc[15], 0, .31 * this.a1), 0, 6 * a8d / 9), tU.fillText(b6.wt.a1f(bZ.aTc[16], 0, .31 * this.a1), 0, 7 * a8d / 9), tU.fillText(b6.wt.a1f(bZ.aTc[12], 0, .31 * this.a1), 0, 8 * a8d / 9), tU
			.fillStyle = b7.n6, tU.fillText(b6.wt.a1f(bZ.aTc[17], 0, .31 * this.a1), 0, a8d), tU.fillStyle = b7.mp;
		var f0 = bZ.lR,
			aMQ = f0[8] + f0[9] + f0[10] + f0[18],
			aMQ = b6.zF.xw(aMQ),
			aL1 = tU.measureText(aMQ).width,
			ef = (tU.setTransform(1, 0, 0, 1, ef + .83 * this.a1 + aL1, eh + 2 * aTk + this.aTl), tU.fillText(b6.zF.xw(f0[8]), 0, 0), tU.fillText(b6.zF.xw(f0[9]), 0, a8d / 9), tU.fillText(b6.zF.xw(f0[10]), 0, 2 * a8d / 9), tU.fillText(b6.zF.xw(
				f0[18]), 0, 3 * a8d / 9), tU.fillStyle = b7.mo, tU.fillText(aMQ, 0, 4 * a8d / 9), tU.fillStyle = b7.n7, tU.fillText(b6.zF.xw(f0[13]), 0, 5 * a8d / 9), tU.fillText(b6.zF.xw(f0[15]), 0, 6 * a8d / 9), tU.fillText(b6.zF.xw(f0[
				16]), 0, 7 * a8d / 9), tU.fillText(b6.zF.xw(f0[12]), 0, 8 * a8d / 9), f0[12] + f0[13] + f0[15] + f0[16]);
		tU.fillStyle = b7.n6, tU.fillText(b6.zF.xw(ef), 0, a8d), tU.fillStyle = b7.mY
	}, this.a4H = function(g, a15, a7Q) {
		var a7, e, fG;
		return this.aTo < 0 || 1 < this.aTo ? .25 : (a7 = this.aTo * (bZ.aNN - 1), fG = g[e = Math.floor(a7)], fG += (a7 - e) * (g[e < bZ.aNN - 1 ? e + 1 : e] - fG), tU.strokeStyle = b7.mb, .04 < this.aTo && this.aTy(0, this.aTj - a15 * Math.pow(
				fG, a7Q), a7 * this.aTi / (bZ.aNN - 1), this.aTj - a15 * Math.pow(fG, a7Q)), .04 < fG / bZ.max[this.e0] && this.aTy(a7 * this.aTi / (bZ.aNN - 1), this.aTj, a7 * this.aTi / (bZ.aNN - 1), this.aTj - a15 * Math.pow(fG, a7Q)), tU
			.fillStyle = b7.n9, tU.beginPath(), tU.arc(a7 * this.aTi / (bZ.aNN - 1), this.aTj - a15 * Math.pow(fG, a7Q), Math.max(2, .014 * this.j7), 0, 2 * Math.PI), tU.fill(), g = this.aTo * bb.a9H, g = 0 === ac.lV[a9.eI] ? Math.floor(g *
				bZ.aTb) : Math.floor(g * bb.jb()), tU.fillStyle = b7.mY, tU.fillText(1 === a7Q ? b6.zF.a2b(fG / 100, 2) : b6.zF.xw(Math.floor(fG)), -this.rz, this.aTj - a15 * Math.pow(fG, a7Q)), b6.pT.textAlign(tU, 1), tU.fillText(aS.a96(g),
				a7 * this.aTi / (bZ.aNN - 1), this.aTj + this.aTm - (u.v.r8() ? 2 : 0) - this.a5x), b6.pT.textAlign(tU, 2), a15 * Math.pow(fG, a7Q) / this.aTj)
	}, this.aTy = function(ly, lz, mB, mC) {
		tU.beginPath(), tU.moveTo(ly, lz), tU.lineTo(mB, mC), tU.stroke()
	}
}

function bs() {
	this.aTz = "https://", this.aU0 = this.aTz + "territorial.io/", this.aNO = this.aU0 + "changelog", this.aNS = this.aU0 + "terms", this.aU1 = this.aU0 + "cookie_policy", this.aMo = this.aU0 + "privacy", this.aNR = this.aU0 + "tutorial", this.aNQ =
		this.aU0 + "players", this.aNP = this.aU0 + "clans", this.zP = this.aU0 + "clan-results", this.aAS = this.aTz + "play.google.com/store/apps/details?id=territorial.io", this.zj = this.aTz + "apps.apple.com/app/id1581110913", this.aU2 = this
		.aTz + "www.youtube.com/watch?v=toZTQ8aRdFc", this.aAT = this.aTz + "discord.gg/pthqvpTXmh", this.aAU = this.aTz + "www.instagram.com/davidtschacher/", this.xW =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function d1() {
	this.s = new aU3, this.wq = new aU4, this.dU = function() {
		this.s.dU()
	}, this.iS = function() {
		0 !== this.s.a5L && this.s.a5L--
	}
}

function aU4() {
	this.tT = function() {
		if (0 !== bL.s.a5L && (tU.globalAlpha = Math.min(bL.s.a5L / 580, 1), tU.drawImage(bL.s.aU7, 1 + aO.wo(), 1 + aO.wp()), tU.globalAlpha = 1, a9.gu)) {
			for (var ly = hv / hw, lz = hx / hw, mB = (at.a1 + hv) / hw, mC = (at.j7 + hx) / hw, g7 = bL.s.aU8 * hw, aU9 = bL.s.aU9, a7 = a9.je - 1; 0 <= a7; a7--) ! function(a7, g7, ly, lz, mB, mC, aU9) {
				var highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[a7];
				if (highlight) g7 *= 2;
				0 === ac.lV[a7] || 0 === ac.gM[a7] || (mB = at.a1 * ((ac.i9[a7] + ac.iA[a7] + 1) / 2 - ly) / (mB - ly) - .5 * g7, ly = at.j7 * ((ac.iB[a7] + ac.iC[a7] + 1) / 2 - lz) / (mC - lz) - .5 * g7, mB > at.a1) || ly > at.j7 || mB < -
					g7 || ly < -g7 || (tU.setTransform(highlight ? hw * 2 : hw, 0, 0, highlight ? hw * 2 : hw, mB, ly), tU.drawImage(aU9[a9.ie ? bc.eW[a7] : 1], 0, 0))
			}(a7, g7, ly, lz, mB, mC, aU9);
			tU.setTransform(hw, 0, 0, hw, 0, 0)
		}
	}
}

function aU3() {
	this.aU8 = 28, this.a5L = 0, this.aU7 = null;
	var aUB = this.aU9 = null;

	function aUE(hB, aUF) {
		var ef, eh, eK, hg, a1T = b6.pT.v7(hB, hB),
			hH = b6.pT.getContext(a1T, !0),
			hE = b6.pT.getImageData(hH, hB, hB),
			vI = hE.data,
			kP = (hB >> 1) - .5,
			aUG = .5 + kP;
		for (aUG *= aUG, eh = 0; eh < hB; eh++)
			for (ef = 0; ef < hB; ef++) hg = (hg = ef - kP) * hg + (hg = eh - kP) * hg, vI[eK = 4 * (eh * hB + ef)] = aUF[0], vI[1 + eK] = aUF[1], vI[2 + eK] = aUF[2], vI[3 + eK] = (aUG - hg) * aUF[3] / aUG;
		return hH.putImageData(hE, 0, 0), a1T
	}

	function aTJ(a7, hH, a1T, hB) {
		var ef, y, highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[a7];
		if (highlight) hB *= 2;
		0 !== ac.lV[a7] && 0 !== ac.gM[a7] && (ef = ac.i9[a7] + ac.iA[a7] + 1 - hB - 2 >> 1, y = ac.iB[a7] + ac.iC[a7] + 1 - hB - 2 >> 1,
			highlight ? hH.drawImage(a1T[a9.ie ? bc.eW[a7] : a7 < a9.je ? 1 : 0], ef, y, hB, hB) :
			hH.drawImage(a1T[a9.ie ? bc.eW[a7] : a7 < a9.je ? 1 : 0], ef, y))
	}
	this.dU = function() {
		var rM;
		this.a5L = 700,
			function(rM) {
				var hB = rM.aU8;
				if (rM.aU9 = [], aUB = [], a9.ie)
					for (var a7 = 0; a7 <= a9.vx; a7++) rM.aU9.push(aUE(hB, bc.aSA[bc.k4[a7]])), aUB.push(aUE(hB >> 1, bc.aSA[bc.k4[a7]]));
				else rM.aU9.push(aUE(hB, bc.aSA[7])), rM.aU9.push(aUE(hB, bc.aSA[4])), aUB.push(aUE(hB >> 1, bc.aSA[7]))
			}(this),
			function(rM, aUH) {
				var a7, aU7 = rM.aU7,
					hH = b6.pT.getContext(aU7, !0),
					eY = a9.eV,
					hB = rM.aU8 >> 1;
				hH.imageSmoothingEnabled = !1, hH.setTransform(1, 0, 0, 1, 0, 0), aUH && hH.clearRect(0, 0, aU7.width, aU7.height);
				for (a7 = a9.je; a7 < eY; a7++) aTJ(a7, hH, aUB, hB)
			}(this, null !== (rM = this).aU7 && rM.aU7.width === bO.ej - 2 && rM.aU7.height === bO.ek - 2 || (rM.aU7 = b6.pT.v7(bO.ej - 2, bO.ek - 2), !1)), a9.gu || this.a2t()
	}, this.aS9 = aUE, this.a2t = function() {
		for (var eY = a9.je, hB = this.aU8, aU9 = this.aU9, hH = b6.pT.getContext(this.aU7, !0), a7 = 0; a7 < eY; a7++) aTJ(a7, hH, aU9, hB)
	}
}

function d2() {
	function aUJ() {
		8 === a9.jy && 1 === a9.ye && bN.yH.yd()
	}

	function aUI(player) {
		a9.gu ? (ag.aDr(player), ah.aGm(), a9.k0 && a9.ok.iS()) : az.aAf(player)
	}
	this.o9 = function(player) {
		aJ.yq(player, player === a9.eI ? 21 : 22), aUI(player), aUJ()
	}, this.oh = function(player) {
		1 === a9.ye && 0 !== ac.lV[player] && 2 !== ac.a1z[player] && aUI(player), a9.yh--, a9.yg--, aJ.yq(player, 4), b6.fu.gk(2) && aS.lH(!0), aUJ()
	}
}

function dC() {
	this.aPj = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.a8b = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", b7.mY, "rgb(170,170,170)"
	], this.aUK = [b7.mY, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", b7.mY, b7.mP], this.aUL = [b7.mP, b7.mY, b7.mY, b7.mY, b7.mP, b7.mP, b7.mP, b7.mP, b7.mY];
	var aUM = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"],
		aUN = (this.aGH = ["rgba(" + aUM[0] + ",", "rgba(" + aUM[1] + ",", "rgba(" + aUM[2] + ",", "rgba(" + aUM[3] + ",", "rgba(" + aUM[4] + ",", "rgba(" + aUM[5] + ",", "rgba(" + aUM[6] + ",", "rgba(" + aUM[7] + ",", "rgba(" + aUM[8] + ",",
			"rgba(" + aUM[9] + ","
		], this.aGI = ["rgb(" + aUM[0] + ")", "rgb(" + aUM[1] + ")", "rgb(" + aUM[2] + ")", "rgb(" + aUM[3] + ")", "rgb(" + aUM[4] + ")", "rgb(" + aUM[5] + ")", "rgb(" + aUM[6] + ")", "rgb(" + aUM[7] + ")", "rgb(" + aUM[8] + ")", "rgb(" + aUM[
			9] + ")"
		], this.z0 = null, this.aSA = [
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
	this.k4 = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.eW = new Uint8Array(a9.eV), this.w3 = new Uint16Array(a9.eV), this.w4 = new Uint16Array(this.k4.length + 1), this.w5 = new Uint16Array(this.k4.length), this.dV = function() {
		this.z0 = [L(432), L(433), L(434), L(435), L(436), L(437), L(438), L(439), L(440)]
	}, this.dU = function() {
		if (this.eW.fill(0), this.aUO(), a9.ie) {
			9 === a9.jy ? this.aUP() : a9.k0 ? function() {
				var colorsData = a9.data.colorsData;
				if (!a9.data.selectableColor)
					for (var a7 = a9.je - 1; 0 <= a7; a7--) colorsData[a7] = au.iv(262144);
				var aUY = 0,
					eo = 768,
					aPG = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
					teamPlayerCount = a9.data.teamPlayerCount;
				for (a7 = 0; a7 < 9; a7++)
					if (teamPlayerCount[a7]) {
						for (var eb = 0, es = 0; es < 3; es++) eb += Math.abs(aUN[a7][es] - aPG[es]);
						eb < eo && (aUY = a7, eo = eb)
					} var aUZ = new Uint16Array(9);
				for (a7 = 0; a7 < 9; a7++) aUZ[a7] = teamPlayerCount[a7];
				var k4 = bc.k4,
					aUa = new Uint8Array(9),
					g1 = (k4[0] = 0, 1);
				for (a7 = 1; a7 < 9; a7++) aUZ[a7] && (aUa[a7] = g1, k4[g1++] = a7);
				var iu = a9.je,
					eW = bc.eW;
				aUZ[aUY] ? (aUZ[aUY]--, eW[0] = aUa[aUY]) : iu = 0;
				var et = 0;
				for (a7 = iu; a7 < a9.vq; a7++) {
					var k3 = k4[et];
					if (aUZ[k3]) aUZ[k3]--, eW[a7] = aUa[k3];
					else if (a7--, 9 <= ++et) return console.log("error 325")
				}
			}() : this.iS();
			for (var eY = a9.eV, w3 = bc.w3, w4 = bc.w4, w5 = bc.w5, eW = bc.eW, k4 = bc.k4, vw = k4.length, dp = new Array(vw), a7 = 0; a7 < vw; a7++) dp[a7] = [];
			for (a7 = 0; a7 < eY; a7++) dp[k4[eW[a7]]].push(a7);
			for (a7 = 1; a7 <= vw; a7++) w4[a7] = w4[a7 - 1] + dp[a7 - 1].length;
			for (a7 = 0; a7 < vw; a7++)
				for (var g1 = dp[a7].length, kP = w4[a7], k3 = 0; k3 < g1; k3++) w3[k3 + kP] = dp[a7][k3];
			var je = a9.je;
			for (a7 = 0; a7 < vw; a7++)
				for (g1 = dp[a7].length, kP = w4[a7], k3 = 0; k3 < g1; k3++)
					if (w3[k3 + kP] >= je) {
						w5[a7] = k3;
						break
					}
		}
	}, this.aUO = function() {
		for (var a7 = this.k4.length - 1; 0 <= a7; a7--) this.k4[a7] = a7
	}, this.aUP = function() {
		for (var a7 = a9.data.teamPlayerCount[7] - 1; 0 <= a7; a7--) this.eW[a7] = 1;
		for (a7 = a9.data.teamPlayerCount[7]; a7 < a9.eV; a7++) this.eW[a7] = 2;
		this.k4[1] = 7, this.k4[2] = 8
	}, this.iS = function() {
		var hP = new Uint8Array(a9.je),
			hQ = new Uint8Array(a9.je),
			aUS = new Uint16Array(8),
			aUT = new Uint16Array(this.k4.length);
		this.aUU(hP, hQ, aUS, 1), this.aDU(aUS), this.aUV(aUT, hP, hQ), this.aUW(hP, hQ, aUT), this.aUX()
	}, this.aUU = function(hP, hQ, aUZ, aUb) {
		for (var es, e, aUc, eY = this.k4.length - aUb, g = new Uint16Array(eY), colorsData = a9.data.colorsData, a7 = a9.je - 1; 0 <= a7; a7--) {
			for (es = eY; aUb <= es; es--) g[es - 1] = Math.abs(4 * (colorsData[a7] >> 12) - aUN[es][0]) + Math.abs(4 * (colorsData[a7] >> 6 & 63) - aUN[es][1]) + Math.abs(4 * (63 & colorsData[a7]) - aUN[es][2]);
			for (aUc = 768, es = eY - 1; 0 <= es; es--) g[e = (es + a7) % eY] < aUc && (aUc = g[e], hP[a7] = e);
			for (aUZ[hP[a7]] += 4, aUc = 768, es = eY - 1; 0 <= es; es--) g[e = (es + a7) % eY] < aUc && e !== hP[a7] && (aUc = g[e], hQ[a7] = e);
			aUZ[hQ[a7]]++
		}
	}, this.aDU = function(aUZ) {
		for (var es, kR, eY = this.k4.length - 1, a7 = eY; 0 <= a7; a7--) this.k4[a7] = a7;
		for (a7 = eY - 1; 0 <= a7; a7--) aUZ[a7]++;
		for (a7 = 1; a7 <= eY; a7++) {
			for (kR = 0, es = 1; es < eY; es++) aUZ[es] > aUZ[kR] && (kR = es);
			aUZ[kR] = 0, this.k4[a7] = kR + 1
		}
	}, this.aUV = function(aUT, hP, hQ) {
		var es, zI, et, eb, e, mA, sG, aUd = this.k4.length - 1,
			py = new Uint16Array(aUd),
			aUe = [],
			aUf = 0,
			zH = [],
			aUg = [];
		loop: for (var a7 = 0; a7 < a9.je; a7++)
			if (null !== (zI = b6.zF.zJ(ac.a4v[a7]))) {
				for (es = zH.length - 1; 0 <= es; es--)
					if (zI === zH[es]) {
						aUg[es].push(a7), aUf = Math.max(aUf, aUg[es].length);
						continue loop
					} zH.push(zI), aUe.push(!1), aUg.push([a7]), aUf = Math.max(aUf, 1)
			}
		for (; 2 < a9.vx && aUf > bH.dl(a9.je, a9.vx);) a9.vx--, a9.jy--;
		for (es = zH.length - 1; 0 <= es; es--) {
			for (eb = -1, et = zH.length - 1; 0 <= et; et--) !aUe[et] && (-1 === eb || aUg[et].length > aUg[eb].length) && (eb = et);
			for (et = aUd - 1; 0 <= et; et--) py[et] = 1;
			for (et = aUg[eb].length - 1; 0 <= et; et--) py[hP[aUg[eb][et]]] += 3, py[hQ[aUg[eb][et]]]++;
			for (a7 = aUd - 1; 0 <= a7; a7--) {
				for (e = eb % aUd, et = aUd - 1; 0 <= et; et--) py[et] > py[e] && (e = et);
				for (mA = -1, et = a9.vx; 0 < et; et--)
					if (this.k4[et] === e + 1) {
						mA = et;
						break
					} if (py[e] = 0, -1 !== mA) {
					for (sG = 0, et = a9.vx; 0 < et; et--) aUT[mA] > aUT[et] && sG++;
					if (sG !== a9.vx - 1) {
						for (et = aUg[eb].length - 1; 0 <= et; et--) aUT[mA]++, this.eW[aUg[eb][et]] = mA;
						break
					}
				}
			}
			aUe[eb] = !0
		}
	}, this.aUW = function(hP, hQ, aUT) {
		for (var a7, hf, eY = this.k4.length - 1, border = bH.dl(a9.je, a9.vx), aUh = (0 < a9.je % a9.vx && border++, new Uint8Array(1 + eY)), es = eY; 1 <= es; es--) aUh[this.k4[es]] = es;
		for (a7 = 0; a7 < a9.je; a7++) hf = aUh[hP[a7] + 1], 0 === this.eW[a7] && hf <= a9.vx && aUT[hf] < border && (aUT[hf]++, this.eW[a7] = hf);
		for (a7 = 0; a7 < a9.je; a7++) hf = aUh[hQ[a7] + 1], 0 === this.eW[a7] && hf <= a9.vx && aUT[hf] < border && (aUT[hf]++, this.eW[a7] = hf);
		for (es = a9.vx; 1 <= es; es--)
			for (a7 = a9.je - 1; 0 <= a7 && !(aUT[es] >= border); a7--) 0 === this.eW[a7] && (aUT[es]++, this.eW[a7] = es)
	}, this.aUX = function() {
		for (var a7 = a9.je; a7 < a9.eV; a7++) this.eW[a7] = 1 + a7 % a9.vx
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
		for (var aUi = !1, aUj = !1, eb = 3; 0 <= eb; eb--) {
			var g6 = gE[player][a7] + ea[eb];
			if (aY.aDe(g6, player)) continue loop;
			aUi = aUi || aY.h1(g6), aUj = aUj || aY.aDd(g6)
		}
		aUi ? gF[player].push(gE[player][a7]) : aUj ? ey[player].push(gE[player][a7]) : aY.wP(gE[player][a7], player), gE[player][a7] = gE[player][eY - 1], gE[player].pop(), eY--
	}
}

function gC() {
	ac.gM[fS] -= fT
}

function gD(border) {
	for (var eY = border.length, a7 = eY - 1; 0 <= a7; a7--) aY.wj(fS, border[a7]) || (border[a7] = border[eY - 1], border.pop(), eY--)
}

function gG(border) {
	for (var eY = border.length, a7 = eY - 1; 0 <= a7; a7--) !aY.wj(fS, border[a7]) && aY.eT(border[a7]) && (border[a7] = border[eY - 1], border.pop(), eY--)
}

function gH(border) {
	for (var eb, g6, eY = border.length, ea = aY.ea, a7 = eY - 1; 0 <= a7; a7--)
		for (eb = 3; 0 <= eb; eb--)
			if (g6 = border[a7] + ea[eb], aY.aDe(g6, fS)) {
				ac.gE[fS].push(border[a7]), border[a7] = border[eY - 1], border.pop(), eY--;
				break
			}
}

function gI() {
	for (var eb, g6, ea = aY.ea, a7 = fT - 1; 0 <= a7; a7--)
		for (eb = 3; 0 <= eb; eb--) g6 = fV[a7] + ea[eb], aY.aDf(fS, g6) && aY.aDg(g6) && (ac.gE[fS].push(g6), aY.g3(g6, fS))
}

function gJ() {
	var ef, eh;
	loop: for (; ac.iB[fS] < ac.iC[fS];) {
		for (ef = ac.iA[fS]; ef >= ac.i9[fS]; ef--)
			if (aY.wj(fS, 4 * (ac.iB[fS] * bO.ej + ef))) break loop;
		ac.iB[fS]++
	}
	loop: for (; ac.iB[fS] < ac.iC[fS];) {
		for (ef = ac.iA[fS]; ef >= ac.i9[fS]; ef--)
			if (aY.wj(fS, 4 * (ac.iC[fS] * bO.ej + ef))) break loop;
		ac.iC[fS]--
	}
	loop: for (; ac.i9[fS] < ac.iA[fS];) {
		for (eh = ac.iC[fS]; eh >= ac.iB[fS]; eh--)
			if (aY.wj(fS, 4 * (eh * bO.ej + ac.i9[fS]))) break loop;
		ac.i9[fS]++
	}
	loop: for (; ac.i9[fS] < ac.iA[fS];) {
		for (eh = ac.iC[fS]; eh >= ac.iB[fS]; eh--)
			if (aY.wj(fS, 4 * (eh * bO.ej + ac.iA[fS]))) break loop;
		ac.iA[fS]--
	}
}

function eR(player, il) {
	return 0 === bc.eW[player] || bc.eW[player] !== bc.eW[il]
}

function h7(player, il) {
	for (var e, aUk = aZ.fe(player), a7 = 0; a7 < aUk; a7++)
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

function aDn(player) {
	for (var a7, g7, eY = ac.gE[player].length, ea = aY.ea, eb = 3; 0 <= eb; eb--)
		for (g7 = ea[eb], a7 = 0; a7 < eY; a7++)
			if (aY.ip(ac.gE[player][a7]) && aY.eP(ac.gE[player][a7] + g7)) return !0;
	return !1
}

function h9(a22, a23) {
	for (var a7, dk, g7, g6, aSM = ac.gE[a22].length, aSN = ac.gE[a23].length, ea = (aSN < aSM && (dk = a22, a22 = a23, a23 = dk, dk = aSM, aSM = aSN, 0), aY.ea), eb = 3; 0 <= eb; eb--)
		for (g7 = ea[eb], a7 = 0; a7 < aSM; a7++)
			if (g6 = ac.gE[a22][a7] + g7, aY.g8(g6) && aY.eQ(g6) === a23) return !0;
	return !1
}

function aDo(a22, a23) {
	for (var a7, g7, g6, aSM = ac.gE[a22].length, ea = aY.ea, eb = 3; 0 <= eb; eb--)
		for (g7 = ea[eb], a7 = 0; a7 < aSM; a7++)
			if (aY.ip(ac.gE[a22][a7]) && (g6 = ac.gE[a22][a7] + g7, aY.g8(g6)) && aY.eQ(g6) === a23) return !0;
	return !1
}

function dP() {
	this.ou = new aUl
}

function aUl() {
	this.h4 = function(player) {
		b6.fu.a20(player) && aJ.z2(80, L(441), 637, 0, b7.nN, b7.mV, -1, !1)
	}, this.a3t = function() {
		aJ.z2(80, L(442), 637, 0, b7.nN, b7.mV, -1, !1)
	}, this.nx = function(player) {
		b6.fu.a20(player) && aJ.z2(80, L(443), 637, 0, b7.nN, b7.mV, -1, !1)
	}
}

function aUm() {
	this.aUn = 0, this.iS = function() {
		aK.iS(), aV.iS(), at.iS(), aw.s.iS(), ar.aCz(), bb.dc && (bb.dc = !1, aW.tT())
	}
}

function aUo() {
	this.lo = bb.lo, this.e0 = 0, this.aUn = 0, this.aCw = 0, this.aUp = null, this.aUq = 7, this.a5M = 0, this.dU = function() {
		this.aCw = 0, this.aUp = [], this.e0 = 0, this.aUn = 0
	}, this.aOj = function(a8) {
		if (a9.gu) this.a9I(a8);
		else if (this.aUp.push(a8), 2 === a9.ye) {
			for (var a7 = 0; a7 < this.aUp.length; a7++) b4.nm.iS(this.aUp[a7]);
			this.aUp = []
		}
	}, this.a9I = function(a8) {
		2 !== a9.ye && (b4.nm.iS(a8), b5.iS(), aS.a9I(this.aCw), this.aCw === a9.a2z ? (a9.ok.iS(), this.aCw = 0, this.e0 = 0, this.aUn = 0, this.lo = bb.lo) : (this.aCw++, ab.a2s(), ab.lH(!0), bX.a9q()))
	}, this.iS = function() {
		at.iS(), a9.gu ? (bb.dc = aS.a9I(-1) || bb.dc, lJ()) : (0 !== this.e0 || bb.lo >= this.lo && (this.lo += bb.a9H * Math.floor(1 + (bb.lo - this.lo) / bb.a9H), 2 === a9.ye ? l8() : this.aUr(), this.e0++, 27 < bb.lo - this.a5M)) && this
		.aUs(), lE(), bb.dc && (bb.dc = !1, wm()), this.a5M = bb.lo
	}, this.aUs = function() {
		bb.dc = !0, lG(), this.e0 = 0
	}, this.aUr = function() {
		var u9, a7;
		if (this.aUn !== 7 * this.aCw) lA(), bX.a9q();
		else {
			u9 = !1;
			loop: for (; this.aUt() && (u9 = !0, lA(), 2 !== a9.ye) && 0 < this.aUp.length;)
				for (a7 = this.aUq - 2; 0 <= a7; a7--)
					if (lA(), 2 === a9.ye) break loop;
			u9 ? bX.a9q() : (l8(), bX.a2v())
		}
	}, this.aUt = function() {
		return 0 < this.aUp.length && (this.aCw++, b4.nm.iS(this.aUp[0]), this.aUp.shift(), !0)
	}
}

function aUu() {
	var aUv, aUw, aUx, aCw, aUy, e0 = 0,
		lo = bb.lo;

	function aV1() {
		! function() {
			if (!a9.gu) return;
			if (a9.k0) return;
			if (2 !== a9.ye)
				if (aUy % 7 != 0) aUy++;
				else if (aCw === a9.a2z) {
				if (!aV4()) return;
				aS.a9I(aCw), a9.ok.iS()
			} else {
				if (!aV4()) return;
				aUy++, aCw++, ab.a2s(), ab.lH(!0)
			}
			return 1
		}() && aV4() && lA()
	}

	function aV2() {
		e0 = 0, (a9.gu ? (bb.dc = aS.a9I(aCw - (aUy % 7 == 0 ? 0 : 1) + aUy % 7 / 7) || bb.dc, lJ) : aI.gj || !b8.a3L ? lJ : (bb.dc = !0, lG))()
	}

	function aV4() {
		var a7, eY, aV5 = b5.oi.aPt,
			fG = b5.oi.aPu,
			fI = b5.oi.aPv,
			fK = b5.oi.aPw,
			aV6 = b5.oi.aPx,
			aV7 = b5.oi.aPy;
		if (!(aUv >= aV7.length)) {
			if (aV7 = aV7[aUv], aV6[aUv]) {
				for (eY = aUw + aV7, a7 = aUw; a7 < eY; a7++) b4.nm.oU(aV5[a7], fG[a7], fI[a7], fK[a7]);
				aUw += aV7, aUv++
			} else ++aUx >= aV7 && (aUv++, aUx = 0);
			return 1
		}
		aJ.zv("Replay file smaller than expected."), b8.a0n(!1), a9.ye = 2
	}
	this.aUn = 0, this.dU = function() {
		aUy = aCw = aUx = aUw = aUv = 0
	}, this.iS = function() {
		var aSj;
		at.iS(), b8.a6k() < 1.7 ? 0 === e0 ? bb.lo >= lo && (aSj = bb.a9H / b8.a6k(), lo += aSj * Math.floor(1 + (bb.lo - lo) / aSj), 2 === a9.ye || aI.gj || !b8.a3L ? l8() : (aV1(), bX.a9q()), e0++) : aV2() : function() {
			var aSj;
			if (bb.lo >= lo)
				if (2 === a9.ye || aI.gj || !b8.a3L) l8(), lo = bb.lo;
				else {
					for (aSj = bb.a9H / b8.a6k(), 16 < (bb.lo - lo) / aSj && (lo = bb.lo - 16 * aSj); bb.lo >= lo && 2 !== a9.ye;) lo += aSj, aV1();
					bX.a9q()
				} aV2()
		}(), lE(), bb.dc && (bb.dc = !1, wm())
	}, this.yo = function() {
		b5.oi.aPy.length - aUv <= 2 || aJ.zv("Replay file larger than expected.")
	}
}

function aV8() {
	var e0 = 0,
		lo = bb.lo;
	this.aUn = 0, this.iS = function() {
		at.iS(), a9.gu ? lJ() : 0 === e0 ? bb.lo >= lo && (lo += bb.a9H * Math.floor(1 + (bb.lo - lo) / bb.a9H), 2 === a9.ye || aI.gj ? l8() : (lA(), bX.a9q()), e0++) : ((aI.gj ? lJ : (bb.dc = !0, lG))(), e0 = 0), lE(), bb.dc && (bb.dc = !1,
		wm())
	}
}

function dK() {
	this.yn = null, this.dc = !1, this.lo = 0, this.a9H = 56;
	var aV9 = 0;

	function aVA() {
		bb.lo = aV9 = performance.now(), bb.yn.iS(), window.requestAnimationFrame(aVA)
	}
	this.dU = function() {
		this.a3J(), window.requestAnimationFrame(aVA), this.lo = performance.now()
	}, this.a3A = function() {
		a9.gi ? (this.yn = new aUu, this.yn.dU()) : a9.k0 ? this.yn = new aV8 : (this.yn = new aUo, this.yn.dU())
	}, this.a3J = function() {
		this.yn = new aUm, this.dc = !0
	}, this.iS = function() {
		this.yn.aUn++
	}, this.jb = function() {
		return this.yn.aUn
	}, this.aOL = function() {
		var dk = performance.now();
		dk < aV9 + 1e3 || (this.lo = dk, this.yn.iS())
	}
}

function cm() {
	var li = 0,
		aVB = !0;

	function aVD(pA) {
		8 !== aW.zo() || 2 !== ac.a1z[a9.eI] && (0 !== ac.lV[a9.eI] || a9.gu) || aJ.a53(pA)
	}
	this.iS = function() {
		var dk, a5O;
		bb.lo > li && (li = bb.lo + 2500, dk = new Date, a5O = dk.getUTCSeconds(), aVB ? a5O < 45 && (aVB = !1) : a5O < 45 || (aVB = !0, (a5O = dk.getUTCMinutes() + 1) % 15 == 0 && aVD(30 === a5O ? "Upcoming Battle Royale Contest!" :
			"Upcoming Alliance Contest!")))
	}
}

function cg() {
	var ly, lz, mB, mC, aVE = 0,
		aVF = 0;

	function aVH() {
		return Math.pow(Math.pow(mB - ly, 2) + Math.pow(mC - lz, 2), .5)
	}

	function aVG(e) {
		ly = at.pZ * e.touches[0].clientX, lz = at.pZ * e.touches[0].clientY, mB = at.pZ * e.touches[1].clientX, mC = at.pZ * e.touches[1].clientY
	}
	this.a0F = function(e) {
		return 1 < e.touches.length ? (aVF = bb.lo, aVE = 3, aVG(e), aH.r1(), !0) : (aVE = 0, !1)
	}, this.a0G = function(e) {
		var aHZ, hd, he;
		return 0 !== a9.ye && 1 < e.touches.length && (aVE = Math.max(aVE - 1, 0), aD.mG() && (aHZ = aVH(), aVG(e), e = aVH(), hd = Math.floor((ly + mB) / 2), he = Math.floor((lz + mC) / 2), aO.a7A(hd, he, Math.max(.125, e) / Math.max(.125,
			aHZ)), bb.dc = !0), !0)
	}, this.a0d = function() {
		var ef, eh;
		return !!(aVE && (aVE = 0, bb.lo < aVF + 500)) && (ef = (ly + mB) / 2, eh = (lz + mC) / 2, aH.a0X(ef, eh), aH.click(ef, eh, !0) && (bb.dc = !0), !0)
	}
}

function cv() {
	this.size = 0, this.e0 = 0, this.a8 = null, this.dU = function(a8) {
		this.e0 = 0, this.a8 = a8, this.size = a8.length
	}, this.a01 = function() {
		this.a8 = null
	}, this.oT = function(size) {
		for (var f0 = 0, a8 = this.a8, mG = this.e0 + size - 1, a7 = this.e0; a7 <= mG; a7++) f0 |= (a8[a7 >> 3] >> 7 - (7 & a7) & 1) << mG - a7;
		return this.e0 += size, this.e0 > 8 * this.size && console.error("Unwrapper Overflow"), f0
	}, this.aOx = function(size) {
		var es = size >> 1;
		return (1 << es) * this.oT(size - es) + this.oT(es)
	}, this.aOw = function(aVI) {
		return this.size === b9.aOq(aVI)
	}, this.aQB = function(va, aVJ, aVK) {
		var g1 = this.oT(va);
		if (!g1) return null;
		for (var va = Math.max(g1, aVK), g = new(aVJ <= 8 ? Uint8Array : aVJ <= 16 ? Uint16Array : Uint32Array)(va), a7 = 0; a7 < g1; a7++) g[a7] = this.oT(aVJ);
		aVK = g[g1 - 1];
		return aVK && g.fill(aVK, g1), g
	}, this.aQC = function(va, aVL, aVK) {
		var g1 = this.oT(va);
		if (!g1) return null;
		for (var va = Math.max(g1, aVK), g = new Array(va), a7 = 0; a7 < g1; a7++) g[a7] = this.aQ9(aVL);
		return g.fill(g[g1 - 1], g1), g
	}, this.aQ9 = function(va) {
		return bC.ug.uk(this.oT(va))
	}, this.aQA = function() {
		var pA = bB.rv.rw(bB.rv.rx(this.oT(30))),
			pA = b6.zF.a2n(pA, "_", "/");
		pA = b6.zF.a2n(pA, "-", "+");
		for (var aVM = "";
			(pA.length + aVM.length) % 4;) aVM += "=";
		pA = "data:image/png;base64," + pA + aVM;
		var aEJ = new Image;
		aEJ.onload = function() {
			b5.aEi.aEj(aEJ), aEJ.onload = null, aEJ = null
		}, aEJ.src = pA
	}
}

function dE() {
	this.aR1 = 0, this.aR2 = 0, this.aQx = 0, this.aQy = 0, this.aQz = 0, this.aR0 = 0, this.a9r = [0, 0, 0, 0], this.mF = function() {
		this.aR1 = aO.wo(), this.aR2 = aO.wp(), this.aQx = -this.aR1, this.aQy = -this.aR2, this.aQz = at.a1 / hw, this.aR0 = at.j7 / hw, this.a9r[0] = Math.floor(this.aQx), this.a9r[1] = Math.floor(this.aQy), this.a9r[2] = Math.floor(this.a9r[
			0] + this.aQz + 1), this.a9r[3] = Math.floor(this.a9r[1] + this.aR0 + 1), bX.a9o = !0
	}
}

function ch() {
	var a5t, li;
	this.dU = function() {
		a5t = 1, li = 0
	}, this.iS = function() {
		0 < a5t && (li = 0 === li ? bb.lo + 16 : li, a5t = (a5t -= .001 * (bb.lo - li)) < 0 ? 0 : a5t, li = bb.lo, bb.dc = !0)
	}, this.tT = function() {
		0 < a5t && (tU.fillStyle = "rgba(0,0,0," + a5t + ")", tU.fillRect(0, 0, at.a1, at.j7))
	}
}

function a2() {
	this.size = 0, this.e0 = 0, this.a8 = null, this.dU = function(a8) {
		this.e0 = 0, this.a8 = a8, this.size = a8.length
	}, this.a3 = function(aVI) {
		return this.dU(new Uint8Array(this.aOq(aVI))), this.a8
	}, this.a01 = function() {
		this.a8 = null
	}, this.a4 = function(size, a5Q) {
		for (var a8 = this.a8, mG = this.e0 + size - 1, a7 = this.e0; a7 <= mG; a7++) a8[a7 >> 3] |= (a5Q >> mG - a7 & 1) << 7 - (7 & a7);
		this.e0 += size, this.e0 > 8 * this.size && console.error("Wrapper Overflow")
	}, this.aOp = function(size, a5Q) {
		var es = size >> 1,
			eb = 1 << es;
		this.a4(size - es, bH.dl(a5Q, eb)), this.a4(es, a5Q % eb)
	}, this.aVP = function(size) {
		for (var a8 = this.a8, mG = this.e0 + size, a7 = this.e0; a7 < mG; a7++) a8[a7 >> 3] &= 255 ^ 128 >>> (7 & a7)
	}, this.aOq = function(aVI) {
		return aVI + 7 >> 3
	}, this.aVQ = function(g, iu, mG, aVR) {
		for (var a7 = iu; a7 < mG; a7++) this.a4(aVR, g[a7])
	}
}

function cu() {
	this.dU = function() {
		this.g = [], this.e0 = 0
	}, this.aPI = function() {
		return new Uint8Array(this.g)
	}, this.a4 = function(aVS, value) {
		for (var g = this.g, mG = this.e0 + aVS - 1, aVT = 1 + (mG >> 3); g.length < aVT;) g.push(0);
		for (var a7 = this.e0; a7 <= mG; a7++) g[a7 >> 3] |= (value >> mG - a7 & 1) << 7 - (7 & a7);
		this.e0 += aVS
	}, this.db = function(g, va, aVJ) {
		var aVU = b6.pd.a1Q(g);
		this.a4(va, aVU);
		for (var a7 = 0; a7 < aVU; a7++) this.a4(aVJ, g[a7])
	}, this.aQT = function(g, va, aVL) {
		var aVU = b6.pd.a1Q(g);
		this.a4(va, aVU);
		for (var a7 = 0; a7 < aVU; a7++) this.aQR(g[a7], aVL)
	}, this.aQR = function(pA, va) {
		var eY = pA.length;
		this.a4(va, eY);
		for (var a7 = 0; a7 < eY; a7++) this.a4(16, pA.charCodeAt(a7))
	}, this.aQS = function(a1T) {
		var aVV = (a1T = a1T.toDataURL()).split(",");
		if (aVV.length < 2) console.log("error 266");
		else {
			a1T = b6.zF.a2n(a1T = aVV[aVV.length - 1], "/", "_"), a1T = b6.zF.a2n(a1T, "\\+", "-");
			var a1T = b6.zF.a2n(a1T, "=", ""),
				ut = bC.rv.uq(a1T),
				eY = ut.length;
			this.a4(30, eY);
			for (var a7 = 0; a7 < eY; a7++) this.a4(6, ut[a7])
		}
	}
}
a(), self.aiCommand746 = function(f0) {
	0 === f0 ? bn() : 1 !== f0 || !u || 1 !== u.id || u.f1 < 14 || bF.f2()
}, setTimeout(bn, 1e4), window.onload = function() {
	bn()
};