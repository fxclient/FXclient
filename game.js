var h, a9, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, at, au, av, aw, ax, ay, az, b0, b1, b2, b3, b4, b5, b6, b7, b8,
	b9, bA, bB, bC, bD, bE, bF, bG, bH, bI, bJ, bK, bL, bM, bN, bO, bP, n, bQ, bR, bS, bT, bU, bV, bW, bX, bY, bZ, ba, bb, bc, bd, u, be, bf, bg, l, bh, bi, bj, bk, bl, bm, dg, dh, a5, di, a6, fN, fO, fP, fQ, fR, fS, fT, fU, fV, fW, fX, fY, fZ, hw,
	hv, hx, a6A, kw, jP, a0A, tV, ws, a9u, a3D, a3E, S = ["100%", "div", "⬅️ ", "absolute", "canvas", "inherit", "rgb(", "rgba(", "none", "   ", "auto", "<br>", "hidden", "center", "Data", "1em", "flex", "0.8em", "territorial.io", "span", "input",
		"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==", "click", "0.5em", "' target='_blank'>", "undefined",
		"</a>", " / ", "pointer", "password", "function", "Value", "Escape", "Enter", "0.6em", "text", "string", "rgba(0,0,0,0.8)", "number", "nowrap", "mouseleave", "focus", "break-word", "bold", "blur", "Space", "Player ", "NoStack", "50%",
		"1.2em", "1 Minute", "1 Hour", "0.0em 0.9em", ". Duration: x", " voted with ", "   Gold: ", "🔄 Reload", "wheel", "underline", "top", "tls7", "Trebuchet MS", "rgba(140,10,10,0.75)", "rgba(100,0,0,0.8)", "rgba(10,140,10,0.75)",
		"rgba(0,100,0,0.8)", "rgba(0,", "rgb(10,220,10)", "pre", "placeholder", "mouseover", "mouseout", "middle", "long", "logo", "loading", "keydown", "italic ", "inline-block", "file", "error", "en-US", "data:image/png;base64,", "break-all",
		"blur(4px)", "arena", "account", "accept", "_blank", "Seed", "Reload", "Interest", "Bot ", "Battle Royale", "Back", "Arial Black, Trebuchet MS", "20 Seconds", "1v1", "1.4em", "1 Day", "0px", "000", "0.75em", "0.4em 0em", "0.2em",
		"0.02em brown", ",0,0.85)", " solid white;}", " Rank: ", " / 160", " -> "
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
	this.dj = 1086, this.j = 2025, this.rVersion = 5, this.dU = function() {
		dg = 2;
		var dk = bH.dl(this.j, 10) % 100;
		dh = "26 Jan 2025 [" + bH.dl(this.j, 1e3) + "." + (dk < 10 ? "0" : "") + dk + "." + this.j % 10 + "]", a5 = true, a6 = function() {
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

	function sA(a7) {
		n.o(8, 0, new rt(21, {
			sC: s8[a7],
			sD: 0,
			sE: 10
		}))
	}
	this.show = function() {
			this.rD(n.s.sF), document.body.appendChild(s2)
		}, this.r1 = function() {
			document.body.removeChild(s2)
		}, this.rD = function(sF) {
			for (var sG = [3, 0, 1, 2, 4, 5], a7 = 0; a7 < q4.length; a7++) {
				var a1 = sF[a7];
				s5[sG[a7]][1].qU.textContent = a1 || ""
			}
		}, this.resize = function() {
			var a7, sH = bY.gap,
				j7 = b6.pT.sI(.085),
				a1 = Math.min(4 * j7, at.a1 - 2 * sH),
				eY = q4.length;
			for (b6.pT.sJ(s2, sH, at.j7 - sH - j7, a1, j7), b6.pT.pf(s2), b6.pT.pf(s3, 6), a7 = 0; a7 < eY - 1; a7++) b6.pT.pf(q4[a7].button, 6);
			for (a7 = 0; a7 < eY; a7++) s5[a7][0].resize();
			for (q4[0].ef = 0, q4[0].button.style.left = b6.pT.pe(q4[0].ef), q4[0].button.style.width = b6.pT.pe(100), a7 = 1; a7 < eY; a7++) q4[a7].ef = q4[a7 - 1].ef + q4[a7 - 1].button.offsetWidth, q4[a7].button.style.left = b6.pT.pe(q4[a7].ef);
			if (!s6) {
				if (!aX.sK()) return;
				(s6 = aX.get(14)).style.width = "24%", s6.style.position = "absolute", s3.appendChild(s6)
			}
			s6.style.left = b6.pT.pe(0), s6.style.top = "7%"
		}, s2.style.position = "absolute", s3.style.width = "25%", s3.style.height = "100%", s3.style.backgroundColor = b7.mU, s4.style.position = "absolute", s4.style.width = "75%", s4.style.height = "100%", s4.style.backgroundColor = b7.mU, s4
		.style.top = s4.style.right = b6.pT.pe(0), b6.pT.s9(s4), rh.style.height = rh.style.maxHeight = "100%", q4.push(new q("", function() {
			sA(0)
		}, b7.nI)), q4.push(new q("", function() {
			sA(1)
		}, b7.nJ)), q4.push(new q("", function() {
			sA(2)
		}, b7.nB)), q4.push(new q("", function() {
			sA(3)
		}, b7.mw)), q4.push(new q("", function() {
			sA(4)
		}, b7.nd)), q4.push(new q("", function() {
			sA(5)
		}, b7.nb)), s5 = new Array(q4.length);
	for (var a7 = 0; a7 < q4.length; a7++) q4[a7].button.style.position = "absolute", s5[a7] = [new sB(s7[a7], q4[a7].button, .25, .45), new sB("", q4[a7].button, .53, .84, 1)], q4[a7].button.style.height = q4[a7].button.style.maxHeight = "100%", q4[
		a7].button.top = b6.pT.pe(0), rh.appendChild(q4[a7].button);
	s4.appendChild(rh), s2.appendChild(s3), s2.appendChild(s4)
}

function sL(sM, sN, sO, sP, qC, qD) {
	var sQ = document.createElement("div"),
		sR = document.createElement("div"),
		sS = document.createElement("div"),
		sT = document.createElement("div"),
		sU = document.createElement("div"),
		sV = document.createElement("div"),
		sW = document.createElement("div"),
		sX = document.createElement("div"),
		sY = document.createElement("span"),
		sZ = document.createElement("div");
	this.sa = new qB(qC, qD), this.sb = new sc(qD), this.sd = [sM, sN, sO, sP], this.sh = function(si) {
		si = (si / 10).toFixed(1) + "%";
		sX.style.width = si, sY.innerHTML = si
	}, this.sj = function() {
		this.sb.r1(sV), this.sa.show(sV)
	}, this.sk = function() {
		this.sa.r1(sV), this.sb.show(sV)
	}, this.show = function() {
		document.body.appendChild(sQ)
	}, this.r1 = function() {
		document.body.removeChild(sQ)
	}, this.resize = function(sl) {
		var sm = 1 - .4 * u.v.r8() * (at.a1 > 1.6 * at.j7),
			sn = b6.pT.r3(.05 * sm),
			so = at.j7 > at.a1,
			sp = b6.pT.r3(.07 * sm + .03 * so),
			sq = b6.pT.r3(.04 + .02 * so),
			so = b6.pT.r3(.02 * sm + .01 * so),
			ss = b6.pT.r3(.025);
		sQ.style.font = b6.pT.rV(0, ss), sm < 1 && (ss = b6.pT.rV(0, sm * ss), sS.style.font = ss, sU.style.font = ss, sZ.style.font = ss, sW.style.font = ss, sT.style.font = ss), sR.style.height = b6.pT.pe(sn), sR.style.font = b6.pT.rV(0, .72 *
				sn), b6.pT.pf(sR, 2), sS.style.top = b6.pT.pe(sn), sS.style.height = b6.pT.pe(sp), b6.pT.pf(sS, 2), sT.style.font = b6.pT.rV(0, sm * b6.pT.r3(.02)), sT.style.top = b6.pT.pe(sn + sp), sT.style.height = b6.pT.pe(sq), b6.pT.pf(sT,
			2), sU.style.top = b6.pT.pe(sn + sp + sq), sU.style.height = b6.pT.pe(sp), b6.pT.pf(sU, 2), sV.style.top = b6.pT.pe(sn + sp + sq + sp), sV.style.height = b6.pT.pe(at.j7 / at.pZ - sn - 3 * sp - sq - so), sW.style.top = b6.pT.pe(at.j7 /
				at.pZ - sp - so), sW.style.height = b6.pT.pe(so), b6.pT.pf(sW, 8), sY.style.font = b6.pT.rV(0, .8 * so), sZ.style.top = b6.pT.pe(at.j7 / at.pZ - sp), sZ.style.height = b6.pT.pe(sp), b6.pT.pf(sZ, 8), sM.resize(sS), sN.resize(sS),
			sO.resize(sS), sP.resize(sS), sl ? this.sa.resize(sV) : this.sb.resize()
	};
	qC = this;
	sQ.style.position = "absolute", sQ.style.top = "0", sQ.style.left = "0", sQ.style.width = "100%", sQ.style.height = "100%", sQ.style.backgroundColor = b7.mX, bF.px() || (sQ.style.backdropFilter = "blur(4px)", sQ.style.webkitBackdropFilter =
		"blur(4px)"), sR.style.position = "absolute", sR.style.top = "0", sR.style.left = "0", sR.style.width = "100%", sR.style.display = "flex", sR.style.alignItems = "center";
	for (var g = [sS, sT, sU, sZ], a7 = 0; a7 < g.length; a7++) g[a7].style.position = "absolute", g[a7].style.left = "0", g[a7].style.width = "100%", b6.pT.s9(g[a7]);
	sV.style.position = "absolute", sV.style.left = "0", sV.style.width = "100%", sV.style.font = "inherit", sW.style.position = "absolute", sW.style.left = "0", sW.style.width = "100%", sX.style.position = "absolute", sX.style.top = "0", sX.style
		.left = "0", sX.style.height = "100%", sX.style.width = "50%", sX.style.backgroundColor = b7.mu, sY.innerHTML = "", sY.style.position = "absolute", sY.style.top = "50%", sY.style.left = "50%", sY.style.transform = "translate(-50%, -50%)", sR
		.appendChild(function() {
			var sg = document.createElement("h1");
			return sg.textContent = L(22), sg.style.margin = "0 auto 0.15em auto", sg.style.webkitTextStroke = "0.02em brown", sg.style.fontFamily = "Arial Black, Trebuchet MS", sg.style.fontSize = "inherit", sg.style.fontWeight = "inherit", sg
		}()), sS.appendChild(sM.p8), sT.appendChild(sN.p8), sU.appendChild(sO.p8), sW.appendChild(sX), sW.appendChild(sY), sZ.appendChild(sP.p8), sQ.appendChild(sR), sQ.appendChild(sS), sQ.appendChild(sT), sQ.appendChild(sU), sQ.appendChild(sV), sQ
		.appendChild(sW), sQ.appendChild(sZ), qC.sb.show(sV)
}

function sc(qD) {
	var sQ = document.createElement("div"),
		sV = document.createElement("div");
	this.lI = function() {
			sV.textContent = "", bk.qy.r1(1);
			for (var qe = document.createDocumentFragment(), su = bk.s.qY[0], sv = bk.sv.sw[su], sx = bk.sv.sx[su], a7 = 0; a7 < sv.length; a7++) ! function(qe, pL, sz, su) {
				var qU = document.createElement("span");
				qU.textContent = (sz ? "🟢 " : "⚪ ") + bk.qg.qs(pL, su), qU.style.color = bk.qg.qt(pL.qu), qU.style.cursor = "pointer", qU.style.margin = "0.2em 0.2em 0.2em 0.2em", qU.style.width = qU.style.maxWidth = 2 === su ? "10em" : "9em",
					qU.style.height = qU.style.maxHeight = "1.4em", qU.style.whiteSpace = "nowrap", qU.style.overflow = "hidden", qU.style.textOverflow = "ellipsis", qU.style.font = "inherit", qU.style.display = "inline-block", bk.qg.qv(pL) && (
						qU.style.textDecoration = "underline"), qU.onclick = function(e) {
						qD(e, pL)
					}, bF.px() || (qU.onmouseover = function(e) {
						bk.qy.qz(e, pL)
					}), qe.appendChild(qU)
			}(qe, sv[a7], a7 < sx, su);
			sV.appendChild(qe)
		}, this.show = function(pN) {
			pN.appendChild(sQ)
		}, this.r1 = function(pN) {
			pN.removeChild(sQ)
		}, this.resize = function() {
			sV.style.fontSize = b6.pT.pe(b6.pT.r3(.02, .3))
		}, sQ.style.top = "0", sQ.style.left = "0", sQ.style.width = sQ.style.height = "100%", sQ.style.overflowX = "hidden", sQ.style.overflowY = "auto", sQ.style.font = "inherit", sV.style.font = "inherit", sV.style.margin = "0.4em", sQ
		.appendChild(sV)
}

function t0(rJ) {
	var sQ = document.createElement("div"),
		t1 = document.createElement("div"),
		rS = (this.ef = 0, this.eh = 0);

	function t3() {
		bk.t4.r1()
	}
	this.q4 = rJ, this.show = function(ef, eh, t6) {
		if (rS) return [0, 0];
		rS = 1, this.ef = ef, this.eh = eh,
			function(self, t6) {
				var a1 = b6.pT.r3(.16, .7),
					j7 = rJ.length * a1 / 3,
					t8 = at.a1 / at.pZ,
					t9 = at.j7 / at.pZ,
					mA = Math.min(1, Math.min(t8 / a1, t9 / j7));
				a1 *= mA, j7 *= mA, t6 && (self.ef += b6.pT.r3(.03, .5)), self.ef = bH.p0(self.ef, 0, t8 - a1), self.eh = bH.p0(self.eh, 0, t9 - j7), t1.style.left = self.ef + "px", t1.style.top = self.eh + "px", t1.style.width = a1 + "px", t1
					.style.height = j7 + "px", t1.style.font = b6.pT.rV(0, .34 * j7 / rJ.length), b6.pT.pf(t1, 5);
				for (var a7 = 1; a7 < rJ.length; a7++) b6.pT.pf(rJ[a7].button, 8)
			}(this, t6), document.body.appendChild(sQ)
	}, this.r1 = function() {
		rS && (rS = 0, sQ.removeEventListener("click", t3), document.body.removeChild(sQ))
	};
	for (var a7 = 0; a7 < rJ.length; a7++) new qT("" + (1 + a7), rJ[a7].button, 0, 1);
	sQ.style.position = "fixed", sQ.style.top = "0", sQ.style.left = "0", sQ.style.width = "100%", sQ.style.height = "100%", sQ.style.zIndex = "5", t1.style.position = "absolute",
		function() {
			for (var t5 = (100 / rJ.length).toFixed(2) + "%", a7 = 0; a7 < rJ.length; a7++) rJ[a7].button.style.width = "100%", rJ[a7].button.style.height = rJ[a7].button.style.maxHeight = t5, rJ[a7].button.style.padding = "0.0em 0.9em", t1
				.appendChild(rJ[a7].button)
		}(), sQ.appendChild(t1), sQ.addEventListener("click", t3)
}

function tA(rY, tB) {
	this.pJ = [];
	var tC = this.pJ;

	function click() {
		for (var a7 = 0; a7 < tC.length; a7++) tC[a7].textContent = tC[a7].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var e0 = parseInt(this.name);
		void 0 !== rY.e0 && bf.rC.rD(rY.e0, e0), tB && tB(e0)
	}
	for (var tD, eY = rY.tE.length, a7 = 0; a7 < eY; a7++)(tD = document.createElement("p")).textContent = "⚪ " + rY.tE[a7], tD.style.margin = "0", tD.name = "" + a7, tD.style.cursor = "pointer", tD.style.fontSize = "1em", tD.addEventListener(
		"click", click), tC.push(tD);
	tC[rY.value].textContent = tC[rY.value].textContent.replace("⚪", "🟢")
}

function tF(title, tG, tH) {
	var s2 = document.createElement("div"),
		tI = document.createElement("div"),
		rh = document.createElement("div"),
		tJ = document.createElement("div"),
		tK = document.createElement("div");
	this.tL = rh, this.tM = tG, this.show = function() {
			!1 !== tH ? document.body.appendChild(s2) : (document.body.appendChild(tI), document.body.appendChild(tJ))
		}, this.r1 = function() {
			!1 !== tH ? document.body.removeChild(s2) : (document.body.removeChild(tI), document.body.removeChild(tJ))
		}, this.tQ = function() {
			var r4 = b6.pT.r3(.1),
				r2 = b6.pT.r3(.08 + .04 * (at.tR < 1));
			return {
				r4: r4,
				r2: r2,
				tS: at.j7 / at.pZ - r4 - r2
			}
		}, this.resize = function(rN) {
			var eY = tG.length,
				tT = this.tQ(),
				r4 = tT.r4,
				r2 = tT.r2;
			for (tI.style.height = b6.pT.pe(r4), b6.pT.pf(tI, 2), tJ.style.top = b6.pT.pe(at.j7 / at.pZ - r2), tJ.style.height = b6.pT.pe(r2), b6.pT.pf(tJ, 8), rh.style.top = b6.pT.pe(r4), rh.style.height = rh.style.maxHeight = b6.pT.pe(tT.tS), tI
				.style.font = b6.pT.rV(0, b6.pT.r3(.02, .3)), tJ.style.font = b6.pT.rV(0, b6.pT.r3(.02, .7)), rh.style.font = b6.pT.rV(0, b6.pT.r3(.02, .7)), a7 = 1; a7 < eY; a7++) b6.pT.pf(tG[a7].button, 4);
			for (var rO = 0, a7 = 0; a7 < eY; a7++) rO += tG[a7].button.offsetWidth;
			if (rN && rO < tJ.offsetWidth)
				for (a7 = 0; a7 < eY; a7++) tG[a7].button.style.width = (100 * tG[a7].button.offsetWidth / rO).toFixed(2) + "%";
			else
				for (a7 = 0; a7 < eY; a7++) tG[a7].button.style.width = "auto";
			rN || this.resize(!0)
		}, this.tU = function() {
			var tT = this.tQ(),
				et = at.pZ;
			tV.fillStyle = b7.mU, tV.fillRect(0, et * tT.r4, at.a1, et * tT.tS)
		}, s2.style.position = "absolute", s2.style.top = "0", s2.style.left = "0", s2.style.width = "100%", s2.style.height = "100%", tI.style.position = "absolute", tI.style.top = "0", tI.style.left = "0", tI.style.width = "100%", tI.style
		.display = "flex", tI.style.backgroundColor = b7.mU, tJ.style.position = "absolute", tJ.style.left = "0", tJ.style.width = "100%", b6.pT.s9(tJ), tK.style.height = tK.style.maxHeight = "100%", rh.style.position = "absolute", rh.style.width =
		"100%", rh.style.backgroundColor = b7.mU,
		function() {
			for (var a7 = 0; a7 < tG.length; a7++) tG[a7].button.style.height = "100%", tG[a7].button.style.padding = "0.0em 0.9em"
		}();
	for (var a7 = 0; a7 < tG.length; a7++) tK.appendChild(tG[a7].button);
	tI.appendChild(function() {
		var tP = document.createElement("h1");
		return tP.textContent = title, tP.style.margin = "auto", tP.style.fontSize = 20 < title.length && at.j7 > at.a1 ? "1.8em" : "2.3em", tP.style.webkitTextStroke = "0.02em brown", tP.style.fontFamily = "Arial Black, Trebuchet MS", tP
	}()), tJ.appendChild(tK), !1 !== tH && (s2.appendChild(rh), s2.appendChild(tI), s2.appendChild(tJ))
}

function qT(tW, tX, tY, tZ) {
	var self;
	this.qU = document.createElement("span"), (self = this).qU.textContent = tW, self.qU.style.color = b7.mY, self.qU.style.position = "absolute", self.qU.style.font = "inherit", tZ ? self.qU.style.bottom = "0.06em" : self.qU.style.top = "0.12em",
		tY ? self.qU.style.left = "0.2em" : self.qU.style.right = "0.2em", self.qU.style.fontSize = "0.6em", self.qU.style.pointerEvents = "none", self.qU.style.whiteSpace = "pre", tX.style.position = "relative", tX.style.overflow = "hidden", tX
		.appendChild(self.qU)
}

function sB(tW, tX, ta, tb, tc) {
	var self;
	this.qU = document.createElement("span"), this.resize = function() {
			this.qU.style.fontSize = ((tb - ta) * tX.offsetHeight).toFixed(1) + "px"
		}, (self = this).qU.textContent = tW, self.qU.style.color = b7.mY, self.qU.style.font = "inherit", self.qU.style.margin = "0.1em 0.6em", self.qU.style.pointerEvents = "none", tc && (self.qU.style.fontWeight = "bold"), self.qU.style
		.whiteSpace = "nowrap", self.qU.style.display = "block", tX.appendChild(self.qU)
}

function td(te, tf, tg, th) {
	var ti = document.createElement("textarea"),
		tj = (this.e = ti, !0);

	function to() {
		ti.select(), document.execCommand("copy")
	}
	this.resize = function() {
			tf && b6.pT.pf(ti, 5)
		}, this.tk = function(qo) {
			ti.value = qo
		}, this.tl = function() {
			return ti.value
		}, this.tm = function() {
			ti.select()
		}, this.clear = function() {
			ti.value = ""
		}, this.tn = function() {
			tj && navigator.clipboard ? (ti.select(), navigator.clipboard.writeText(ti.value).catch(function() {
				tj = !1, to()
			})) : to()
		}, ti.setAttribute("id", "textArea" + n.s.rb++), ti.setAttribute("autocomplete", "off"), te && ti.setAttribute("placeholder", te), ti.style.top = "0", ti.style.left = "0", ti.style.width = "100%", ti.style.height = "100%", ti.style
		.userSelect = "none", ti.style.outline = "none", ti.style.resize = "none", ti.style.border = "none", ti.style.color = b7.mY, ti.style.backgroundColor = b7.mR, th ? (ti.style.fontSize = "1em", ti.rows = 6, ti.style.padding = "0.25em") : (ti
			.style.padding = "0.45em", ti.style.fontSize = "1.2em"), tg && ti.addEventListener("input", function(e) {
			tg(e)
		}), ti.addEventListener("focus", function() {
			at.rc++
		}), ti.addEventListener("blur", function() {
			at.rc--
		})
}

function dB() {
	this.pm = new tp, this.dp = new tq, this.rC = new tr, this.s = new ts, this.dU = function() {
		this.dp.dU(), (new tt).dU()
	}
}

function tq() {
	function tu(a7, type, u0, f1) {
		bf.dp.data.push({
			e0: a7,
			type: type || 0,
			value: u0 || 0,
			u0: u0 || 0,
			f1: f1 || 0
		})
	}

	function tv(a7, type, u0, f1) {
		bf.dp.data.push({
			e0: a7,
			type: type,
			value: u0 || "",
			u0: u0 || "",
			f1: f1 || 0
		})
	}

	function tw(mG) {
		for (var a7 = bf.dp.data.length; a7 < mG; a7++) bf.dp.data.push(null)
	}
	this.data = [], this.dU = function() {
		tu(0, 1, 0, 5), tu(1, 1, 1), tu(2, 0), tv(3, 2), tu(4, 1), tv(5, 2, "Trebuchet MS", 1), tu(6, 0), tu(7, 0, 0), tu(8, 0), tu(9, 1, 1), tu(10, 1), tu(11, 1, 1), tv(12, 2, navigator.language), tw(100), tv(100, 2), tv(101, 2), tv(102, 2), tv(
				103, 2), tv(104, 2), tv(105, 2), tv(106, 2), tu(107), tu(108), tu(109), tv(110, 2), tu(111), tu(112), tu(113), tv(114, 2), tu(115), tv(116, 2), tu(117, 1), tv(118, 2, "", 2), tu(119, 1, 0, 1), tv(120, 2), tu(121, 1, ~~(262144 *
				Math.random())), tv(122, 2, "Player " + Math.floor(1e3 * Math.random())), tu(123), tv(124), tu(125, 1), tv(126, 2), tu(127, 0, 1), tu(128), tu(129), tu(130), tu(131), tu(132), tv(133, 2), tu(134, 0, 5), tv(135, 2), tv(136, 2), tu(
				137), tu(138), tu(139), tu(140), tu(141), tu(142), tu(143), tu(144), tv(145, 2), tu(146), tu(147), tv(148, 2), tu(149), tu(150, 0, 1), tv(151, 2), tu(152, 0, 5), tu(153, 1), tu(154, 1), tv(155, 2), tv(156, 2), tu(157), tu(158),
			tw(180), tu(180, 0), tu(181, 0)
	}, this.rD = function(e0, value) {
		this.data[e0].value = value
	}, this.dq = function(e0, value) {
		this.rD(e0, value), bf.pm.save(e0, String(value)), bf.pm.save(e0, String(this.data[e0].f1), !0)
	}, this.tx = function() {
		for (var a7 = 0; a7 < this.data.length; a7++) this.data[a7] && (bf.pm.save(a7, String(this.data[a7].value)), bf.pm.save(a7, String(this.data[a7].f1), !0))
	}, this.ty = function(e0) {
		return Number(this.data[e0].value)
	}, this.tz = function(e0) {
		return String(this.data[e0].value)
	}
}

function tp() {
	this.u1 = function(e0, f1) {
		return Number(this.u2(e0, f1))
	}, this.u2 = function(e0, f1) {
		var f0 = null;
		return 0 === u.id ? u.u3 && (f0 = u.u3.getItem((f1 ? "v" : "d") + e0)) : 1 === u.id ? f0 = u.u4.loadString((f1 ? 1e3 : 2e3) + e0) : 2 === u.id && (f0 = u.u5[(f1 ? "v" : "d") + e0]), f0 && 0 !== f0.length ? f0 : null
	}, this.u6 = function(eY, u7) {
		var g = [],
			u8 = u7 ? "e" : "l";
		if (0 === u.id) {
			if (u.u3)
				for (a7 = 0; a7 < eY; a7++) g.push(u.u3.getItem(u8 + a7))
		} else if (1 === u.id)
			for (var u9 = u7 ? 5e3 : 3e3, a7 = 0; a7 < eY; a7++) g.push(u.u4.loadString(u9 + a7));
		else if (2 === u.id)
			for (a7 = 0; a7 < eY; a7++) g.push(u.u5[u8 + a7]);
		return g
	}, this.save = function(e0, value, f1) {
		var uA = (f1 ? "v" : "d") + e0;
		if (0 === u.id) {
			if (u.u3 && bf.dp.data[140].value) try {
				u.u3.setItem(uA, value)
			} catch (e) {
				console.log(e)
			}
		} else 1 === u.id ? u.u4.saveString((f1 ? 1e3 : 2e3) + e0, value) : 2 === u.id && (u.u5[uA] = value, u.uB.postMessage(uA + " " + value))
	}, this.uC = function(g, u7) {
		var eY = g.length,
			u8 = u7 ? "e" : "l";
		if (0 === u.id) {
			if (u.u3 && bf.dp.data[140].value) try {
				for (a7 = 0; a7 < eY; a7++) u.u3.setItem(u8 + a7, g[a7])
			} catch (e) {
				console.log(e)
			}
		} else if (1 === u.id)
			for (var u9 = u7 ? 5e3 : 3e3, a7 = 0; a7 < eY; a7++) u.u4.saveString(u9 + a7, g[a7]);
		else if (2 === u.id)
			for (a7 = 0; a7 < eY; a7++) u.u5[u8 + a7] = g[a7], u.uB.postMessage(u8 + a7 + " " + g[a7])
	}
}

function tt() {
	this.dU = function() {
		! function() {
			var data = bf.dp.data;
			0 === data[2].f1 && (at.j7 > at.a1 || 0 !== u.id) && (data[2].value = data[2].u0 = 1);
			0 === data[100].f1 && (data[100].value = data[100].u0 = (0 === u.id ? "Player " : 1 === u.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var a7, f0, data = bf.dp.data,
			eY = data.length;
		for (a7 = 0; a7 < eY; a7++) data[a7] && data[a7].f1 === bf.pm.u1(a7, !0) && (f0 = bf.pm.u2(a7), data[a7].value = null === f0 ? data[a7].u0 : 2 === data[a7].type ? f0 : Number(f0));
		bf.dp.data[10].value = bf.dp.data[10].u0
	}
}

function ts() {
	function uI(g) {
		if (0 === g.length) bf.rC.rD(116, "");
		else {
			for (var uL = g[0], a7 = 1; a7 < g.length; a7++) uL += ";" + g[a7];
			bf.rC.rD(116, uL)
		}
	}
	this.uF = function() {
		bf.dp.data[110].value.length && (bf.dp.data[106].value = bf.dp.data[110], bf.rC.rD(110, ""), this.uG())
	}, this.uG = function() {
		var g = bf.dp.data[116].value.split(";");
		for (g.length % 2 == 1 && g.pop(), g.unshift(bf.dp.data[106].value), g.unshift(bf.dp.data[105].value), a7 = 2; a7 < g.length; a7 += 2)
			if (g[a7] === g[0]) {
				g.splice(a7, 2);
				break
			} for (var uH = [], a7 = 0; a7 < g.length; a7 += 2) uH.push(g[a7]);
		uI(g), bf.dp.data[117].value = 0, bf.dp.data[117].tE = uH
	}, this.uJ = function(e0) {
		bf.dp.data[117].tE.splice(e0, 1), bf.dp.data[117].value = Math.min(e0, bf.dp.data[117].tE.length - 1);
		var g = bf.dp.data[116].value.split(";");
		g.splice(2 * e0, 2), uI(g)
	}, this.uK = function(e0) {
		var g = bf.dp.data[116].value.split(";");
		return {
			qr: g[2 * e0],
			password: g[2 * e0 + 1]
		}
	}, this.uM = function() {
		var f0 = bH.p0(bf.dp.data[121].value, -1, 262143);
		return f0 = -1 === f0 ? ~~(262144 * Math.random()) : f0
	}
}

function tr() {
	this.rD = function(e0, value) {
		bf.dp.data[e0].value !== value && (bf.dp.dq(e0, value), 0 === e0 ? (n.r(), b3.dU(), n.o(2)) : 1 === e0 ? at.df(1) : 2 === e0 ? at.df(0) : 5 === e0 && (b6.pT.uN(), at.df(0)))
	}, this.uO = function() {
		for (var data = bf.dp.data, a7 = 0; a7 < 100; a7++) data[a7] && bf.dp.dq(a7, data[a7].u0);
		b6.pT.uN(), at.df(1), b3.dU()
	}, this.uP = function() {
		for (var data = bf.dp.data, a7 = 0; a7 < data.length; a7++) data[a7] && bf.dp.rD(a7, data[a7].u0)
	}, this.uQ = function() {
		for (var es = bf.dp, a7 = 128; a7 < 135; a7++) es.dq(a7, es.data[a7].u0)
	}, this.uR = function(data) {
		bf.rC.rD(109, data.rr), bf.rC.rD(107, data.uS), bf.rC.rD(108, data.uT), bf.rC.rD(112, data.uU), bf.rC.rD(111, data.uV), bf.rC.rD(113, data.uW), bf.rC.rD(135, data.uX), bf.rC.rD(136, data.uY), bf.rC.rD(137, data.uZ), bf.rC.rD(138, data
			.ua), bf.rC.rD(139, data.ub), bf.rC.rD(141, data.uc), bf.rC.rD(142, data.ud), bf.rC.rD(143, data.ue), bf.rC.rD(144, data.uf)
	}
}

function by() {
	this.rv = new ug, this.uh = new ui, this.uj = new uk, this.dU = function() {
		this.rv.dU()
	}
}

function ui() {
	this.ul = function(size) {
		for (var um = bD, g = [], a7 = 0; a7 < size; a7++) g.push(String.fromCharCode(um.oT(16)));
		return g.join("")
	}, this.un = function(pA) {
		return 20 < (pA = pA.trim()).length ? pA.substring(0, 20) : pA
	}
}

function ug() {
	var uo = new Uint8Array(78);
	this.dU = function() {
		var a7;
		for (uo[50] = 37, a7 = 0; a7 < 10; a7++) uo[a7 + 3] = a7 + 1;
		for (a7 = 0; a7 < 26; a7++) uo[a7 + 20] = a7 + 11, uo[a7 + 52] = a7 + 38
	}, this.up = function(pA) {
		return pA.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.uq = function(pA, size) {
		if ((pA = this.up(pA)).length > size) return pA.substring(0, size);
		for (; pA.length < size;) pA = "-" + pA;
		return pA
	}, this.ur = function(pA) {
		for (var us = uo, eY = pA.length, g = new Uint8Array(eY), a7 = 0; a7 < eY; a7++) g[a7] = us[pA.charCodeAt(a7) - 45];
		return g
	}, this.ut = function(uu) {
		b9.a3(6 * uu.length), this.uv(uu), bD.dU(b9.a8)
	}, this.uv = function(uu) {
		for (var eY = uu.length, a1 = b9, a7 = 0; a7 < eY; a7++) a1.a4(6, uu[a7])
	}, this.uw = function(pA) {
		this.uv(this.ur(pA))
	}, this.ux = function(pA, size) {
		this.uv(this.ur(this.uq(pA, size)))
	}, this.uy = function(pA, size) {
		for (var g = this.ur(this.uq(pA, size)), f0 = 0, mA = 1, a7 = g.length - 1; 0 <= a7; a7--) f0 += mA * g[a7], mA *= 64;
		return f0
	}
}

function uz() {
	var a1, j7, v0;

	function vQ(gy, eb, vO, v5, vJ) {
		eb = vP(gy, eb + 1 + 2 * v5 & 3);
		! function(gy, vR) {
			return 1 < Math.abs(gy % a1 - vR % a1) || 1 < Math.abs(vU(gy) - vU(vR))
		}(gy, eb) && 0 === vJ[eb << 2] && (vJ[eb << 2] = vO)
	}

	function vU(g6) {
		return Math.floor((g6 + .5) / a1) % j7
	}

	function vP(g6, eb) {
		return g6 + v0[eb]
	}
	this.v1 = function(pA) {
		var a7, v2, eY, v3, um = bD;
		for (bC.rv.ut(bC.rv.ur(pA)), bO.v6.v7[bO.eE].a1 = bO.ej = a1 = um.oT(12), bO.v6.v7[bO.eE].j7 = bO.ek = j7 = um.oT(12), v0 = [-a1, -1, a1, 1], bO.vG = document.createElement("canvas"), bO.vG.width = bO.ej, bO.vG.height = bO.ek, bO.vC = bO
			.vG.getContext("2d", {
				alpha: !1
			}), bO.vD = bO.vH = null, bO.vD = bO.vC.getImageData(0, 0, bO.ej, bO.ek), bO.vH = bO.vD.data, b6.pd.vI(bO.vH), eY = um.oT(12), v2 = um.oT(5), v3 = v9(a1 * j7 - 1), a7 = 0; a7 < eY; a7++) ! function(kP, g6, v4, v5) {
			var a7, eb, um = bD,
				vJ = bO.vH,
				vK = g6,
				vL = g6,
				vM = 0,
				vN = 1 + v4,
				vO = 2 - v4;
			for (vJ[g6 << 2] = vN, a7 = 0; a7 < kP; a7++) eb = um.oT(2), g6 = vP(g6, eb), vJ[g6 << 2] === vN ? vM % 2 == 1 && vQ(vL, vM + 2 * v5 + 3, vO, v5, vJ) : vJ[g6 << 2] = vN, vQ(g6, eb, vO, v5, vJ), vQ(vL, eb, vO, v5, vJ), vL = g6,
				vM = eb;
			vP(g6, 0) === vK ? (vQ(g6, 0, vO, v5, vJ), vQ(vK, 0, vO, v5, vJ)) : vP(g6, 1) === vK && (vQ(g6, 0, vO, v5, vJ), vQ(vK, 2, vO, v5, vJ));
			0 === kP && (vQ(vK, 0, vO, v5, vJ), vQ(vK, 2, vO, v5, vJ))
		}(um.oT(v2), um.oT(v3), 1 === um.oT(1), 1 === um.oT(1));
		var ef, eh, k3, vV, vW, vX, vJ = bO.vH,
			vY = !0,
			vZ = bO.v6.v7[bO.eE].vZ,
			va = bO.v6.v7[bO.eE].va;
		for (eh = 0; eh < j7; eh++)
			for (vV = !0, vW = vY, ef = vX = 0; ef < a1; ef++) k3 = 4 * eh * a1 + 4 * ef, vX <= ef && 0 < vJ[k3] && (vW = 2 === vJ[k3], vV) && (vV = !1, vW !== vY) ? (vY = vW, vX = ef + 1, ef = -1) : (vW ? (vJ[k3] = va[0], vJ[1 + k3] = va[1], vJ[
				2 + k3] = va[2]) : (vJ[k3] = vZ[0], vJ[1 + k3] = vZ[1], vJ[2 + k3] = vZ[2]), vJ[3 + k3] = 255);
		bO.vC.putImageData(bO.vD, 0, 0), bO.vE = !0, bO.vF.dU(), bb.dc = !0
	}
}

function uk() {
	this.v1 = function(vb) {
		for (var um = bD, size = um.oT(vb), vc = 7 + 9 * um.oT(1), g = [], a7 = 0; a7 < size; a7++) g.push(String.fromCharCode(um.oT(vc)));
		return g.join("")
	}
}

function c3() {
	var vd, ve, vf, vg, vh, vi, vj, vk, vl, vm;

	function vo() {
		var vr = a9.vr;
		for (vl = vr; vl < a9.eV; vl++) vn();
		for (vl = a9.gu ? a9.je : 0; vl < vr; vl++) {
			if (!vs()) {
				for (var es = a9.vw = vl; es < vr; es++) vl = es, vn();
				return
			}
			vv(vi + vd * vh + bH.dl(vh, 2), vj + ve * vh + bH.dl(vh, 2))
		}
	}

	function wO(player) {
		for (var i9 = ac.i9, iB = ac.iB, iA = ac.iA, iC = ac.iC, eh = iB[player]; eh <= iC[player]; eh++)
			for (var ef = i9[player]; ef <= iA[player]; ef++) {
				var eC = aY.wP(ef, eh);
				aY.g8(eC) && (aY.ip(eC) ? aY.g3(eC, player) : aY.wQ(eC, player))
			}
	}

	function wN(g, sD, sE) {
		var dk = g[sD];
		g[sD] = g[sE], g[sE] = dk
	}

	function vs() {
		return function() {
			var a7;
			for (a7 = 0; a7 < 8; a7++)
				if (vd = bH.dl(vf * au.random(), au.value(100)), ve = bH.dl(vg * au.random(), au.value(100)), wV()) return 1;
			return
		}() || function() {
			var hg, hj, er, vu, es, vt;
			for (hg = bH.dl(vf * au.random(), au.value(100)), hj = bH.dl(vg * au.random(), au.value(100)), er = 40; 1 <= er; er--)
				for (vu = vg - er; 0 <= vu; vu -= 40)
					for (ve = (vu + hj) % vg, es = 40; 1 <= es; es--)
						for (vt = vf - es; 0 <= vt; vt -= 40)
							if (vd = (vt + hg) % vf, wV()) return 1;
			return
		}()
	}

	function wV() {
		for (var g6, wX, gap = bH.dl(vh - vk, 2), wY = vj + ve * vh + gap, wZ = vi + vd * vh + gap, wW = wY + vk - 1; wY <= wW; wW--)
			for (wX = wZ + vk - 1; wZ <= wX; wX--)
				if (g6 = aY.wP(wX, wW), !aY.eT(g6) || aY.ip(g6)) return;
		return 1
	}

	function vv(vt, vu) {
		vn(), wa(vt - 2, vu - 2)
	}

	function vn() {
		ac.lV[vl] = 0, ac.gM[vl] = ac.wL[vl] = 0, ac.g0[vl] = [], ac.gE[vl] = [], ac.gF[vl] = [], ac.ey[vl] = [], ac.i9[vl] = ac.iB[vl] = ac.iA[vl] = ac.iC[vl] = 0
	}

	function wa(vt, vu) {
		var g6, a7, wb, wc;
		for (ac.lV[vl] = 1, ac.i9[vl] = vt + 10, ac.iB[vl] = vu + 10, ac.iC[vl] = ac.iA[vl] = 0, wb = vt; wb < vt + 4; wb++)
			for (wc = vu; wc < vu + 4; wc++)(vt < wb && wb < vt + 3 || vu < wc && wc < vu + 3) && (g6 = aY.wP(wb, wc), aY.eT(g6)) && (ac.i9[vl] = Math.min(wb, ac.i9[vl]), ac.iA[vl] = Math.max(wb, ac.iA[vl]), ac.iB[vl] = Math.min(wc, ac.iB[vl]), ac
				.iC[vl] = Math.max(wc, ac.iC[vl]), vm[ac.gM[vl]] = g6, ac.gM[vl]++, aY.wQ(g6, vl));
		for (ac.wL[vl] = ac.gM[vl], a7 = ac.gM[vl] - 1; 0 <= a7; a7--) aY.wd(vm[a7], vl) ? (aY.g3(vm[a7], vl), ac.gE[vl].push(vm[a7])) : aY.we(vm[a7]) ? (aY.g3(vm[a7], vl), ac.gF[vl].push(vm[a7])) : aY.wf(vm[a7]) && (aY.g3(vm[a7], vl), ac.ey[vl]
			.push(vm[a7]))
	}

	function wU(vt, vu) {
		for (var g6, wX, wW = vu; vu - 6 < wW; wW--)
			for (wX = vt; vt - 6 < wX; wX--)
				if (g6 = aY.wP(wX, wW), aY.ip(g6)) return;
		return 1
	}
	this.dU = function() {
		if (vm = new Array(12), vk = 6, vh = 10, vf = bH.dl(bO.ej, vh), vg = bH.dl(bO.ek, vh), vi = bH.dl(bO.ej - vh * vf, 2), vj = bH.dl(bO.ek - vh * vg, 2), a9.gu)
			for (var a7 = 0; a7 < a9.je; a7++) vl = a7, vn(), ac.lV[vl] = 1;
		(0 === a9.data.spawningType ? vo : 1 === a9.data.spawningType ? (vo(), function() {
			var vx = a9.vy;
			a9.vz || vx++;
			if (!(vx < 3)) {
				for (var data = a9.data, iu = (a9.gu ? a9.je : 0) + data.teamPlayerCount[0], mG = a9.vw, w0 = new Uint32Array(vx), w1 = new Uint32Array(vx), w2 = new Uint16Array(vx), w3 = new Uint16Array(vx), eW = bc.eW, i9 = ac.i9, iB =
						ac.iB, iA = ac.iA, iC = ac.iC, fD = bK.fD, fE = bK.fE, a7 = iu; a7 < mG; a7++) fD[a7] = i9[a7] + iA[a7] >> 1, fE[a7] = iB[a7] + iC[a7] >> 1;
				for (a7 = iu; a7 < mG; a7++) {
					var id = eW[a7];
					w0[id] += fD[a7], w1[id] += fE[a7]
				}
				var k4 = bc.k4;
				for (a7 = 1; a7 < vx; a7++) {
					var g1 = Math.max(data.teamPlayerCount[k4[a7]], 1);
					w2[a7] = bH.dl(w0[a7], g1), w3[a7] = bH.dl(w1[a7], g1)
				}
				var w4 = bc.w4,
					w5 = bc.w5,
					w6 = bc.w6,
					fC = bK.fC;
				for (a7 = 0; a7 < 512; a7++) fC[a7] = a7;
				for (var dz = 0; dz < 2 + (4 <= vx); dz++)
					for (a7 = iu; a7 < mG; a7++) {
						for (var gy = a7, w7 = fC[gy], w8 = 1, eo = bH.w9(fD[w7] - w2[1], fE[w7] - w3[1]), er = 2; er < vx; er++) {
							var wA = bH.w9(fD[w7] - w2[er], fE[w7] - w3[er]);
							wA < eo && (eo = wA, w8 = er)
						}
						var wB = eW[gy];
						if (w8 !== wB) {
							if (2 === dz && 4 <= vx) {
								var wC = Math.max((w8 + 1) % vx, 1),
									wD = bH.w9(fD[w7] - w2[wC], fE[w7] - w3[wC]);
								for (er = 1; er < vx; er++) wA = bH.w9(fD[w7] - w2[er], fE[w7] - w3[er]), eo < wA && wA < wD && (wD = wA, wC = er);
								wC !== wB && bH.w9(w2[wB] - w2[wC], w3[wB] - w3[wC]) < bH.w9(w2[wB] - w2[w8], w3[wB] - w3[w8]) && (w8 = wC)
							}
							var wE = k4[w8],
								wF = w5[wE] + (a9.gu ? 0 : w6[wE]),
								vR = w4[wF],
								wG = fC[vR],
								wH = w5[wE + 1];
							eo = bH.w9(fD[wG] - w2[wB], fE[wG] - w3[wB]);
							for (var et = wF + 1; et < wH; et++) {
								var wI = w4[et],
									wJ = fC[wI];
								(wA = bH.w9(fD[wJ] - w2[wB], fE[wJ] - w3[wB])) < eo && (eo = wA, vR = wI)
							}
							vR < iu || mG <= vR || (wG = fC[vR], w0[wB] += fD[wG] - fD[w7], w1[wB] += fE[wG] - fE[w7], w0[w8] += fD[w7] - fD[wG], w1[w8] += fE[w7] - fE[wG], g1 = data.teamPlayerCount[k4[wB]], w2[wB] = bH.dl(w0[wB], g1),
								w3[wB] = bH.dl(w1[wB], g1), g1 = data.teamPlayerCount[wE], w2[w8] = bH.dl(w0[w8], g1), w3[w8] = bH.dl(w1[w8], g1), fC[gy] = wG, fC[vR] = w7)
						}
					}! function() {
						for (var fC = bK.fC, i9 = ac.i9, iB = ac.iB, iA = ac.iA, iC = ac.iC, gM = ac.gM, wL = ac.wL, gE = ac.gE, gF = ac.gF, ey = ac.ey, a7 = 0; a7 < 512; a7++) {
							var wM = fC[a7];
							if (wM !== a7) {
								wN(i9, a7, wM), wN(iB, a7, wM), wN(iA, a7, wM), wN(iC, a7, wM), wN(gM, a7, wM), wN(wL, a7, wM), wN(gE, a7, wM), wN(gF, a7, wM), wN(ey, a7, wM), wO(a7), wO(wM), fC[a7] = a7;
								for (var j7 = wM, g7 = fC[j7]; g7 !== a7;) g7 = fC[j7 = g7];
								fC[j7] = wM
							}
						}
					}()
			}
		}) : function() {
			var vr = a9.vr;
			for (vl = vr; vl < a9.eV; vl++) vn();
			for (vl = a9.gu ? a9.je : 0; vl < vr; vl++)
				if (! function() {
						var spawningData = a9.data.spawningData,
							vt = spawningData[2 * vl] + 1,
							spawningData = spawningData[2 * vl + 1] + 1;
						if (3 < vt && vt < bO.ej - 5 && 3 < spawningData && spawningData < bO.ek - 5 && aY.eT(aY.wP(vt, spawningData)) && wU(vt + 3, spawningData + 3)) return vv(vt + 1, spawningData + 1), 1;
						return
					}()) {
					if (!vs()) {
						for (var es = a9.vw = vl; es < vr; es++) vl = es, vn();
						return
					}
					var vt = vi + vd * vh + bH.dl(vh, 2),
						vu = vj + ve * vh + bH.dl(vh, 2);
					vv(vt, vu)
				}
		})(), bZ.lR[7] = ac.gM[a9.eI]
	}, this.wg = function(il, wh, wi) {
		var a7, vt, vu, g6, vd, ve;
		for (vl = il, a7 = 0; a7 < 20; a7++)
			for (vt = wh + a7; wh - a7 <= vt; vt--)
				for (vu = wi + a7; wi - a7 <= vu; vu--)
					if ((vt === wh + a7 || vt === wh - a7 || vu === wi + a7 || vu === wi - a7) && 3 < vt && vt < bO.ej - 5 && 3 < vu && vu < bO.ek - 5 && aY.eT(aY.wP(vt, vu)) && wU(vt + 3, vu + 3)) {
						if (0 < ac.gM[vl]) {
							for (ve = vd = g6 = void 0, vd = ac.iA[vl]; vd >= ac.i9[vl]; vd--)
								for (ve = ac.iC[vl]; ve >= ac.iB[vl]; ve--) g6 = 4 * (ve * bO.ej + vd), aY.wk(vl, g6) && (aY.wl(g6), ac.gM[vl]--);
							vn()
						}
						return wa(vt - 1, vu - 1), !0
					} return !1
	}, this.wm = function(il) {
		vl = il, vs() ? vv(vi + vd * vh + bH.dl(vh, 2), vj + ve * vh + bH.dl(vh, 2)) : vn()
	}
}

function wn() {
	an.wo(), tV.setTransform(hw, 0, 0, hw, 0, 0), tV.imageSmoothingEnabled = hw < 3, tV.drawImage(bO.vG, aO.wp(), aO.wq()), bL.wr.tU(), tV.drawImage(ws, aO.wp(), aO.wq()), an.tU(), bJ.tU(), ab.tU(), (a9.m1 ? (bd.tU(), b8) : (aJ.tU(), aR.tU(), aN
	.tU(), b8.tU(), aq.tU(), aS.tU(), aO.tU(), aM.tU(), bd.tU(), aQ.tU(), aL.tU(), aI.tU(), aH.tU(), aT.tU(), ba.tU(), ap)).tU(), n.tU()
}

function wt(wu, a1, j7) {
	wu.clearRect(0, 0, a1, j7), wu.fillStyle = b7.mV, wu.fillRect(0, 0, a1, j7)
}

function wv(wu, a1, j7, ww) {
	wu.fillStyle = b7.mY, wu.fillRect(0, 0, a1, ww), wu.fillRect(0, 0, ww, j7), wu.fillRect(a1 - ww, 0, ww, j7), wu.fillRect(0, j7 - ww, a1, ww)
}

function wx(wu, ef, eh, hB, ww, g6, wy) {
	wu.fillStyle = b7.mY;
	var g6 = Math.floor(hB * g6),
		s0 = (g6 += (g6 - ww) % 2, Math.floor((g6 - ww) / 2)),
		hB = Math.floor((hB - g6) / 2);
	wu.fillRect(ef + hB, eh + hB + s0, g6, ww), wy && wu.fillRect(ef + hB + s0, eh + hB, ww, g6)
}

function x0() {
	this.dU = function() {
		8 === a9.jy && aJ.x1()
	}, this.x2 = function(x3) {
		var elo = a9.data.elo,
			hU = (elo[x3] - elo[1 - x3]) / 10,
			hU = 8 / (1 + Math.pow(2, hU / 32)),
			hU = Math.floor(10 * hU + .5),
			x5 = this.x6(elo[x3] + (1 + a9.x7) * hU + 1),
			elo = this.x6(elo[1 - x3] - hU);
		0 === x3 ? aJ.x9(x5, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : aJ.x9(elo, x5, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"])
	}, this.x6 = function(elo) {
		return 16e3 === (elo = bH.p0(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function cY() {
	this.xA = new xB, this.vJ = new xC
}

function xC() {
	this.xD = !1;
	this.xH = [], this.xI = 100;
	var ly, lz, gap, hB, xE, xG, xJ = 0,
		xK = new Array(9),
		xL = [],
		xM = [],
		xN = 0,
		xO = 0,
		xP = 0,
		xQ = 0;

	function xc() {
		xK.sort(function(er, es) {
			return es.jm - er.jm
		});
		for (var pA = "" + xK[0].o3, a7 = 1; a7 < 9; a7++) pA += "," + xK[a7].o3;
		for (a7 = 0; a7 < 9; a7++) pA += "," + xK[a7].jm;
		bf.dp.dq(120, pA)
	}
	this.dU = function() {
		for (var xR = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], a7 = 0; a7 < xR.length; a7++) {
			var color = 6 === xR[a7] ? b7.my : b7.mW;
			this.xH.push(b6.canvas.xS(aX.get(3), xR[a7], color))
		}
		for (a7 = 0; a7 < af.xA.xT; a7++) xM.push(af.xA.xU - af.xA.xT + a7);
		for (a7 = 0; a7 < af.xA.xV; a7++) xM.push(af.xA.xW + a7);
		var xX = af.xA.xY(bG.xX);
		for (a7 = 0; a7 < xX.length; a7++) xM.push(xX[a7]);
		! function() {
			var a7, g = bf.dp.data[120].value.split(",");
			if (18 !== g.length)
				for (a7 = 0; a7 < 9; a7++) xK[a7] = {
					o3: 1015 + a7,
					jm: 0
				};
			else
				for (a7 = 0; a7 < 9; a7++) {
					var f0 = parseInt(g[a7]),
						et = (f0 = 0 <= f0 && f0 < af.xA.xU ? f0 : 0, parseInt(g[a7 + 9]));
					et = 0 <= et && et < 1e3 ? et : 0, xK[a7] = {
						o3: f0,
						jm: et
					}
				}
		}()
	}, this.show = function(kk, kl, xd) {
		var a7;
		if (xN = kk, xO = kl, xJ = xd || 0, this.xD = !0, xL = [], 0 === xJ)
			for (a7 = 0; a7 < 9; a7++) xL.push(xK[a7].o3);
		else {
			var es = 49 * xJ,
				xd = es - 49;
			for (xd >= xM.length && (xJ = 1, xd = 0, es = 49), a7 = xd = (es = Math.min(es, xM.length)) - 49; a7 < es; a7++) xL.push(xM[a7])
		}
		xL.push(1024);
		xd = xL.length, hB = Math.floor((u.v.r8() ? .075 : .0468) * at.pV), gap = Math.floor(hB / 3), (xP = 10 * (xE = hB + gap)) > at.a1 && (xP = at.a1, gap = (xE = xP / 10) - (hB = 3 * xE / 4)), xG = bH.dl(xd, 10) + !!(xd % 10), (xQ = xG *
			xE) > at.j7 && (xQ = at.j7, gap = (xE = xQ / xG) - (hB = 3 * xE / 4)), xd = .5 * gap;
		ly = Math.min(Math.max(kk - .5 * xP + xd, xd), at.a1 - xP + xd), lz = Math.min(Math.max(kl - .5 * xQ + xd, xd), at.j7 - xQ + xd)
	}, this.gm = function(kk, kl, player) {
		if (!this.xD) return !1;
		if (this.xf(kk, kl)) {
			kk = bH.p0(bH.dl(kk - ly + .5 * gap, xE), 0, 9);
			if ((kk += 10 * bH.p0(bH.dl(kl - lz + .5 * gap, xE), 0, 9)) >= xL.length) return aH.r1(), !0;
			kl = xL[kk];
			if (1024 === kl) return this.show(xN, xO, xJ + 1), !0;
			! function(o3) {
				for (var a7 = 0; a7 < 9; a7++) xK[a7].jm = Math.floor(.99 * xK[a7].jm);
				for (a7 = 0; a7 < 9; a7++)
					if (o3 === xK[a7].o3) return xK[a7].jm = Math.min(xK[a7].jm + 30, 999), xc();
				xK.splice(5, 0, {
					o3: o3,
					jm: Math.max(xK[4].jm, 30)
				}), xK.pop(), xc()
			}(kl), player === a9.eI ? b4.gv.o2(kl) : b4.fu.oI(kl, player)
		}
		return aH.r1(), !0
	}, this.xf = function(kk, kl) {
		return !(kk < ly - .5 * gap || kl < lz - .5 * gap || ly + xP - .5 * gap <= kk || lz + xQ - .5 * gap <= kl)
	}, this.tU = function() {
		tV.fillStyle = b7.mV, tV.fillRect(ly - .5 * gap, lz - .5 * gap, xP, xQ);
		for (var k3 = .5 * bY.xg, eY = (tV.lineWidth = bY.xg, tV.strokeStyle = tV.fillStyle = b7.mY, tV.strokeRect(ly - .5 * gap + k3, lz - .5 * gap + k3, xP - 2 * k3, xQ - 2 * k3), tV.imageSmoothingEnabled = !0, xL.length), a7 = 0; a7 <
			eY; a7++) this.xh(xL[a7], tV, ly + a7 % 10 * xE, lz + bH.dl(a7, 10) * xE, hB);
		tV.imageSmoothingEnabled = !1
	}, this.xh = function(o3, hH, ef, eh, hB) {
		var eC;
		o3 >= 1024 - af.xA.xT ? (eC = hB / this.xI, hH.setTransform(eC, 0, 0, eC, ef, eh), hH.drawImage(this.xH[o3 - 1024 + af.xA.xT], 0, 0), hH.setTransform(1, 0, 0, 1, 0, 0)) : (b6.pT.textAlign(hH, 1), b6.pT.textBaseline(hH, 1), hH.font = b6.pT
			.rV(0, .89 * hB), hH.fillText(af.xA.xi(o3), ef + .5 * hB, eh + (.35 - b6.pT.xj + .56) * hB))
	}
}

function xB() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.xT = 13, this.xV = this.emojis.length, this.xW = 676, this.xU = 1024, this.xk = this.emojis.indexOf("💀"), this.xl = this.xk + 1, this.xm = this.emojis.indexOf("🥇"), this.xn = this.emojis.indexOf("😊"), this.xi = function(f0) {
		return f0 < this.xW ? String.fromCharCode(55356, 56806 + bH.dl(f0, 26), 55356, 56806 + f0 % 26) : this.emojis[Math.min(f0 - this.xW, this.xV - 1)]
	}, this.xY = function(pA) {
		for (var eY = pA.length - 2, g = [], a7 = 0; a7 < eY; a7++) {
			var hP = pA.charCodeAt(a7) - 56806,
				hQ = pA.charCodeAt(a7 + 2) - 56806;
			0 <= hP && hP < 26 && 0 <= hQ && hQ < 26 && (g.push(26 * hP + hQ), a7 += 3)
		}
		return g
	}, this.xo = function(f0) {
		return f0 < this.xW
	}, this.xp = function(f0) {
		return f0 >= 1024 - this.xT
	}, this.xq = function(f0) {
		return f0 >= this.xW && f0 < this.xW + this.xl
	}
}

function bx() {
	this.rv = new xr, this.uh = new xs, this.uj = new xt, this.dU = function() {
		this.rv.dU()
	}
}

function xs() {
	this.uw = function(pA) {
		for (var eY = pA.length, a1 = b9, a7 = 0; a7 < eY; a7++) a1.a4(16, pA.charCodeAt(a7))
	}
}

function xr() {
	var xu = new Uint8Array(64);
	this.dU = function() {
		var a7;
		for (xu[0] = 45, xu[37] = 95, a7 = 0; a7 < 10; a7++) xu[a7 + 1] = 48 + a7;
		for (a7 = 0; a7 < 26; a7++) xu[a7 + 11] = 65 + a7, xu[a7 + 38] = 97 + a7
	}, this.rx = function(xv) {
		for (var um = bD, uu = new Uint8Array(xv), a7 = 0; a7 < xv; a7++) uu[a7] = um.oT(6);
		return uu
	}, this.rw = function(uu) {
		for (var eY = uu.length, xw = xu, g = [], a7 = 0; a7 < eY; a7++) g.push(String.fromCharCode(xw[uu[a7]]));
		return g.join("")
	}, this.xx = function(value, xy) {
		for (var xw = xu, g = [], a7 = 0; a7 < xy; a7++) g.push(String.fromCharCode(xw[value >> 6 * (xy - 1 - a7) & 63]));
		return g.join("")
	}
}

function c5() {
	var xz, y0, y1;
	xz = [32, 65, 191, 913, 931], y0 = [64, 127, 688, 930, 1155], y1 = new Array(xz.length + 1);
	for (var a7 = 0; a7 < y1.length; a7++) {
		y1[a7] = 0;
		for (var er = a7 - 1; 0 <= er; er--) y1[a7] += y0[er] - xz[er]
	}

	function y7(et) {
		for (var a7 = xz.length - 1; 0 <= a7; a7--)
			if (et >= xz[a7] && et < y0[a7]) return a7;
		return -1
	}
	this.un = function(pA) {
		return 0 !== (pA = pA.trim()).indexOf("Bot ") && 0 !== pA.indexOf("[Bot] ") && function(pA, y4, y5) {
			var eY = (pA = pA.trim()).length;
			if (eY < y4 || y5 < eY) return !1;
			for (var et, y6 = 0, a7 = 0; a7 < eY; a7++)
				if (et = pA.charCodeAt(a7), y6 += 65 <= et && et <= 90 || 1040 <= et && et <= 1071 ? 1 : 0, -1 === y7(et)) return !1;
			if (3 < y6 && y6 > Math.floor(eY / 2)) return !1;
			return !0
		}(pA, 3, 20)
	}, this.y8 = function(pA) {
		for (var eY = (pA = pA.trim()).length, g = [], a7 = 0; a7 < eY; a7++) {
			var et, g6 = y7(et = pA.charCodeAt(a7));
			g.push(y1[g6] + et - xz[g6])
		}
		return g
	}, this.v1 = function(g) {
		for (var et, es, pA = "", eY = g.length, a7 = 0; a7 < eY; a7++)
			for (es = 1; es < y1.length; es++)
				if (g[a7] < y1[es]) {
					et = xz[es - 1] + g[a7] - y1[es - 1], pA += String.fromCharCode(et);
					break
				} return pA
	}, this.y9 = function(pA) {
		for (var g = this.y8(pA), result = "", a7 = 0; a7 < g.length; a7++) result = (result += g[a7] < 10 ? "00" : g[a7] < 100 ? "0" : "") + g[a7].toString(10);
		return result
	}, this.yA = function(pA) {
		for (var g = new Array(Math.floor(pA.length / 3)), a7 = 0; a7 < pA.length; a7 += 3) g[Math.floor(a7 / 3)] = parseInt(pA.substring(a7, a7 + 3));
		return this.v1(g)
	}, this.yB = function(pA) {
		for (var f0, g = [pA.length], a7 = 0; a7 < pA.length; a7++) g[a7] = pA.charCodeAt(a7) - 48;
		var result = "";
		for (a7 = 0; a7 < pA.length; a7++) a7 === pA.length - 1 || 51 < 10 * g[a7] + g[a7 + 1] ? result += g[a7].toString() : (f0 = 10 * g[a7] + g[a7 + 1], result += String.fromCharCode(f0 + (f0 < 26 ? 65 : 71)), a7++);
		return result
	}, this.yC = function(pA) {
		for (var et, result = "", a7 = 0; a7 < pA.length; a7++) 48 <= (et = pA.charCodeAt(a7)) && et < 58 ? result += String.fromCharCode(et) : 65 <= et && et < 75 ? result += "0" + (et - 65).toString() : 75 <= et && et < 91 ? result += (et - 65)
			.toString() : 97 <= et && et < 123 && (result += (et - 71).toString());
		return result
	}, this.yD = function(pA) {
		for (var eY = pA.length, g = [], a7 = 0; a7 < eY; a7++)(et = pA.charCodeAt(a7)) < 58 ? g.push(pA[a7]) : (et -= et < 91 ? 65 : 71, g.push(String(bH.dl(et, 10))), g.push(String(et - 10 * bH.dl(et, 10))));
		var eY = g.length - 2,
			et = 0,
			uu = [];
		for (a7 = 0; a7 < eY; a7 += 3) uu[et++] = parseInt(g[a7] + g[a7 + 1] + g[a7 + 2]);
		return uu
	}, this.yE = function() {
		for (var dz, yF = "", a7 = 0; a7 < 6; a7++) dz = 48 + au.random() % 36, dz += 58 <= dz ? 39 : 0, yF += String.fromCharCode(dz);
		return yF
	}
}

function xt() {
	this.y8 = function(pA, vb, yG) {
		for (var yH = [], eY = pA.length, max = 0, a7 = 0; a7 < eY; a7++) {
			var f0 = pA.charCodeAt(a7);
			yH.push(f0), max = Math.max(max, f0)
		}
		var vc = max < 128 ? 7 : 16;
		for (yG.a4(vb, eY), yG.a4(1, +(16 == vc)), a7 = 0; a7 < eY; a7++) yG.a4(vc, yH[a7])
	}
}

function d3() {
	this.yI = new yJ, this.result = new yK, this.h2 = new yL, this.yM = new yN, this.yO = new yP, this.yQ = new yR, this.dU = function() {
		this.result.dU()
	}
}

function yL() {
	this.yS = function() {
		for (var eY = ah.jf, yT = ah.jh, yU = [], a7 = 0; a7 < eY; a7++) {
			var g6 = yT[a7];
			b6.fu.yV(g6) && yU.push(g6)
		}
		return yU
	}, this.yW = function() {
		if (0 === bc.k4[a9.yX]) return this.yY();
		bd.ku(a9.yX);
		for (var yU = [], eY = bK.f4[0], fC = bK.fC, a7 = 0; a7 < eY; a7++) {
			var g6 = fC[a7];
			b6.fu.yV(g6) && yU.push(g6)
		}
		return yU
	}, this.yY = function() {
		var g6 = kw[0];
		return b6.fu.yV(g6) ? [g6] : []
	}, this.yZ = function(yU) {
		for (var eY = yU.length, dk = 0, gM = ac.gM, a7 = 0; a7 < eY; a7++) dk += gM[yU[a7]];
		return dk
	}
}

function yJ() {
	function yb() {
		if (2 === a9.yf) return 1;
		aq.yg(), a9.yf = 2, a9.yh = a9.yi
	}

	function yd() {
		bN.yO.yj(), aT.show(1 === a9.yk, !1, 2 === a9.yk), bN.result.yj(), bN.yQ.iS(), bN.yM.iS(), aJ.yl(!0), aJ.ym(247), aJ.ym(956), aJ.ym(957), aR.lH(!0), aS.lH(!0), aq.lH(), b8.yn(), a9.gi && bb.yo.yp(), bb.dc = !0, bX.yq(), u.v.setState(0)
	}
	this.ya = function() {
		yb() || (a9.yc = 2, yd())
	}, this.ye = function() {
		yb() || (a9.yc = 1, yd())
	}
}

function yN() {
	this.iS = function() {
		var yz;
		2 === a9.yc ? (aJ.yr(0, 59), aD.m7(2700)) : a9.jy < 7 ? (yz = bc.k4[a9.yX], yz = bc.z1[yz], aM.z2(L(23, [yz]), 2, 1, 12), aJ.z3(0, L(24, [yz]), 40, 0, b7.mY, b7.mV, -1, !1), aD.m7(2700)) : 8 === a9.jy ? (a9.yk ? aJ.yr(a9.yw, 2) : aJ.yr(
			1 - a9.eI, 3), a9.yx.x2(a9.yw), aJ.yy(a9.yw), aD.ls(a9.yw, 2700, !1, 0)) : 9 === a9.jy ? (aJ.z4(), aD.m7(2700)) : (aJ.yy(a9.yw), aD.ls(a9.yw, 2700, !1, 0))
	}
}

function yR() {
	function z5() {
		var sH = Math.floor(ac.zD[a9.eI] / 50);
		0 !== sH && (sH = Math.min(sH, 400), aJ.z3(440, L(25, [(sH / 100).toFixed(2)]), 40, 0, b7.mq, b7.mV, -1, !1))
	}
	this.iS = function() {
		if (b6.fu.gl(a9.eI) && z5(), 0 !== bN.result.z6 && 0 !== bN.result.yU.length && (function() {
				aJ.z3(520, L(26), 40, 0, b7.mY, b7.mV, -1, !1);
				for (var yU = bN.result.yU, eY = yU.length, gM = ac.gM, g = [], a7 = 0; a7 < eY; a7++) {
					var g6 = yU[a7];
					g.push({
						g6: g6,
						dk: gM[g6]
					})
				}
				g.sort((er, es) => es.dk - er.dk);
				var z1 = ac.zE,
					dk = bN.result.zF,
					sH = bN.result.z6,
					pA = "";
				for (a7 = 0; a7 < eY; a7++) pA += z1[g[a7].g6] + ": " + (g[a7].dk * sH / (100 * dk)).toFixed(2) + "   ";
				aJ.z3(560, b6.zG.zH(pA), 40, 0, b7.mq, b7.mV, -1, !1)
			}(), 7 !== a9.jy && 10 !== a9.jy || 0 !== a9.yk && aJ.z3(600, L(27), 40, 0, b7.mY, b7.mV, -1, !1), !(2 === a9.yc || 7 <= a9.jy))) {
			var yU = bN.result.yU,
				eY = yU.length,
				z1 = ac.zE,
				gM = ac.gM,
				zI = [];
			loop: for (var a7 = 0; a7 < eY; a7++) {
				var g6 = yU[a7],
					zJ = b6.zG.zK(z1[g6]);
				if (null !== zJ) {
					for (var zL = gM[g6], es = zI.length - 1; 0 <= es; es--)
						if (zJ === zI[es].name) {
							zI[es].dk += zL, zI[es].g.push({
								g6: g6,
								dk: zL
							});
							continue loop
						} zI.push({
						name: zJ,
						dk: zL,
						g: [{
							g6: g6,
							dk: zL
						}]
					})
				}
			}
			if (0 !== zI.length) {
				zI.sort((er, es) => es.dk - er.dk);
				var g = zI[0].g,
					zM = (g.sort((er, es) => es.dk - er.dk), "[" + zI[0].name + "]"),
					sH = bN.result.z6,
					zN = 64 * sH / 26214400,
					pA = (aJ.z3(0, L(28, [zM, zN.toFixed(4)]), 40, 0, b7.mY, b7.mV, -1, !1), aJ.z3(600, L(29), 40, 0, b7.mY, b7.mV, -1, !1), ""),
					kP = g.length,
					dk = bN.result.zF,
					us = zI[0].dk,
					zO = 65536 * zN;
				for (a7 = 0; a7 < kP; a7++) pA += z1[g[a7].g6] + ": " + (g[a7].dk * sH / (200 * dk)).toFixed(2) + " | " + (zO * g[a7].dk / us).toFixed(1) + "   ";
				aJ.z3(640, b6.zG.zH(pA), 40, 0, b7.mq, b7.mV, -1, !1);
				zN = (us * sH / (1e3 * dk)).toFixed(2);
				aJ.z3(680, L(30, [zN, zM]), 40, 0, b7.mY, b7.mV, -1, !1), a9.gi || aJ.z3(720, L(31) + bG.zQ, 736, 0, b7.mY, b7.mw, -1, !1)
			}
		}
	}, this.zA = function() {
		var zB, vK;
		a9.k0 || (zB = ac, vK = a9.eI, 0 === zB.zC[vK]) || zB.ib[vK] < 1 || 2 * zB.oo[vK] > 3 * (zB.ia[vK] + zB.ib[vK]) || z5()
	}
}

function yK() {
	this.dU = function() {
		this.zR = 0, this.yU = [], this.zF = 0, this.z6 = 0
	}, this.yj = function() {
		var rM, qx;
		a9.k0 || (rM = this, 2 === a9.yc ? rM.yU = bN.h2.yS() : a9.ie ? rM.yU = bN.h2.yW() : rM.yU = bN.h2.yY(), rM.zR = be.zT.zU(), rM.zF = Math.max(1, bN.h2.yZ(rM.yU)), b4.fu.oR(), 8 === a9.jy ? (bN.result.z6 = 0, 1 !== a9.yk || 0 === bf.dp
			.data[107].value || 100 <= (qx = bf.dp.data[108].value) || (bN.result.z6 = (1 + a9.x7) * (100 - qx) * 10)) : (rM.z6 = 100 * bN.result.zR * (1 + a9.x7), 9 === a9.jy && (rM.z6 = rM.z6 >> 1)))
	}
}

function yP() {
	this.yj = function() {
		if (2 === a9.yc) a9.yk = 2;
		else {
			if (8 === a9.jy) b6.fu.j1(0) || 0 === ac.lV[0] ? a9.yw = 1 : b6.fu.j1(1) || 0 === ac.lV[1] ? a9.yw = 0 : a9.yw = +(ac.gM[1] > ac.gM[0]);
			else {
				if (a9.ie) {
					var ks = bd.zX();
					if (a9.yX = ks, bc.k4[ks]) return void(a9.yk = +(bc.eW[a9.eI] === ks))
				}
				a9.yw = kw[0]
			}
			a9.yk = +(a9.yw === a9.eI)
		}
	}
}

function d8() {
	this.id = 0, this.f1 = 0, this.u3 = null, this.u4 = null, this.u5 = null, this.uB = null, this.v = new zY, this.dU = function() {
		var self, f1;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (f1 = Android.getVersion()) < 12 || (self.f1 = f1, self.id = 1, self.u4 = Android),
			function(self) {
				var f1;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.u5 = mwIOSdataX, self.uB = window.webkit.messageHandlers.iosCommandA, f1 = self
					.u5.version, self.f1 = f1 ? Number(f1) : 0)
			}(this),
			function(self) {
				var u3;
				if (0 === self.id) {
					try {
						if (!(u3 = window.localStorage)) return;
						u3.setItem("tls7", "1"), u3.removeItem("tls7")
					} catch (error) {
						return
					}
					self.u3 = u3
				}
			}(this)
	}
}

function zY() {
	this.zc = function() {
		bf.rC.uO(), bf.rC.uP(), aw.s.close(0, 3255), 0 === u.id ? u.u3 && u.u3.clear() : 1 === u.id ? u.u4.saveString(199, "") : 2 === u.id && u.uB.postMessage("clear")
	}, this.zd = function() {
		2 === u.id ? u.uB.postMessage("showConsentForm") : 1 === u.id && u.u4.setState(7)
	}, this.ze = function() {
		this.setState(14)
	}, this.r8 = function() {
		return 1 === bf.dp.ty(2)
	}, this.zf = function() {
		bf.dp.dq(102, "")
	}, this.setState = function(zg) {
		1 === u.id && 5 <= u.f1 && u.u4.setState(zg)
	}, this.w = function() {
		var zh;
		1 === u.id && 7 <= u.f1 ? u.u4.setState(5) : ((zh = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = zh.toString())
	}, this.dZ = function() {
		1 !== u.id || u.f1 < 17 || u.u4.saveString(23, document.documentElement.outerHTML)
	}, this.e8 = function() {
		0 !== u.id && (1 === u.id ? u.u4.prepareAd("1688441405") : 2 === u.id && (0 === u.f1 ? u.uB.postMessage("prepare ad 4500876070") : u.uB.postMessage("loadAds 4500876070")))
	}, this.zi = function(dk) {
		return 0 !== u.id && (1 === u.id ? 12 <= u.f1 && (u.u4.presentAd(dk), !0) : 2 === u.id && (0 === u.f1 ? u.uB.postMessage("show ad " + dk) : u.uB.postMessage("showAd"), !0))
	}, this.de = function() {
		2 === u.id && u.f1 < 23 && n.o(4, 1, new p("App Update Required", "A new iOS app version with bug fixes has been published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + bG.zj + "' target='_blank'>" + bG
			.zj + "</a>", !0, [new q("⬅️ " + L(32), function() {
				n.o(0)
			}, b7.nD)]))
	}
}

function dN() {
	function zm(e) {
		zx(e), n.o(4, 5, new p("🚀 New Game Update", "The game has been updated! Please reload the game." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new q("⬅️ " + L(32), function() {
				n.zy()
			}), new q("🔄 Reload", function() {
				u.v.w()
			}, b7.mv)]))
	}

	function zw(e) {
		zx(e), n.o(4, 5, new p(L(33), {
			"3249": "No servers found",
			"4705": "Lobby not found",
			"4730": "Kicked from lobby"
		} [e] ?? zq(e), !0))
	}

	function zq(e) {
		var pA = " [" + e + "]";
		return 3249 === e || 1006 === e ? "No Internet / No Server Response" + pA : 4527 === e ? "Player already in lobby" + pA : 4530 === e ? "Lobby Timeout" + pA : 4528 === e ? "Lobby Kick: Another login detected." + pA : 4540 === e ?
			"You have been kicked." + pA : "Unknown error" + pA
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
				if (4480 === e) return bf.rC.uQ(), void n.o(4, 0, new p(L(35), L(36), !0));
				8 !== aW.zo() && zp(), n.o(4, 0, new p(L(33), zq(e), !0))
			}
		else {
			var zg = aW.zo();
			if (6 === zg) {
				if (4211 === e) return void zm(e);
				if (4215 !== e && 4516 !== e && 4527 !== e && 4533 !== e) return void aV.zr(zl)
			} else {
				if (!bk.zs) return 8 === zg ? void(zl !== aw.s.zu || a9.k0 || 1 !== a9.yf || a9.gi || aJ.zv(L(34, [e]))) : void 0;
				if (zl !== aw.s.zt) return
			}
			zw(e)
		}
	}, this.zz = function(e) {
		8 === aW.zo() ? a9.k0 || 1 !== a9.yf || aJ.zv(L(34, [e])) : zw(e)
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
		n.gm(ef, eh), 0 === a9.yf ? aW.gm(ef, eh) : b8.a0U(ef, eh) || ba.gm(ef, eh) || aT.gm(ef, eh) || aH.a0V(ef, eh) || aL.gm(ef, eh) || 0 <= aI.gm(ef, eh) || bF.a0W(ef, eh) || aq.gm(ef, eh) || aH.a0X(ef, eh)
	}

	function a0B(e) {
		a0Q() || (a06 = !0, a0R(e, 1), a0Y(Math.floor(at.pZ * e.clientX), Math.floor(at.pZ * e.clientY)))
	}

	function a0G(e) {
		a05 = bb.lo, a0R(e, 1), 0 < e.touches.length && (a03 = Math.floor(at.pZ * e.touches[0].clientX), a04 = Math.floor(at.pZ * e.touches[0].clientY), ao.a0G(e) || a0Y(a03, a04))
	}

	function a0Y(ef, eh) {
		n.a0B(ef, eh), 0 === a9.yf ? aW.a0B(ef, eh) : (bP.gf(ef, eh), ba.a0B(ef, eh) || (aI.a0B(ef, eh), aH.xD() ? aH.a0B(ef, eh) : aN.gn ? aN.a0B(ef) && (bb.dc = !0) : (aR.a0B(ef, eh), aO.m3 && aO.a0B(ef, eh) && (bb.dc = !0))))
	}

	function a0D(e) {
		a0Q() || (a0R(e, 1), a0Z(), 0 === a9.yf ? (aW.click(-1024, -1024), aP.qV()) : (aR.a0a(-1024, -1024), aI.a0B(-1024, -1024), aN.a0b(), aO.m3 = !1))
	}

	function a0C(e) {
		a0Q() || (a0R(e, 1), a0c(Math.floor(at.pZ * e.clientX), Math.floor(at.pZ * e.clientY), 2 === e.button), bF.a09 && (bF.a09 = !1, e.preventDefault()))
	}

	function click(e) {
		a0Q() || a0R(e, 1)
	}

	function a0H(e) {
		a05 = bb.lo, a0R(e, 1), e && e.touches && 0 < e.touches.length && 0 !== a9.yf ? aO.m3 = !1 : ao.a0d() || (a0c(a03, a04, !1), bF.a09 && (bF.a09 = !1, e.preventDefault()))
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
		a0Z(), 0 === a9.yf ? aW.click(ef, eh) : (aR.a0a(ef, eh), ba.a0a(), aN.a0b(), aO.m3 = !1, aH.click(ef, eh, a0e) ? bb.dc = !0 : aI.a0C(ef, eh))
	}

	function a0Z() {
		n.a0Z()
	}

	function a0E(e) {
		var ef, eh, deltaY;
		a0Q() || (a0R(e, 1), aw.s.a0S(aw.s.zu), ef = Math.floor(at.pZ * e.clientX), eh = Math.floor(at.pZ * e.clientY), deltaY = e.deltaY, 1 === e.deltaMode && (deltaY *= 16), n.a0E(ef, eh, deltaY), 0 === a9.yf ? aW.a0E(ef, eh, deltaY) : aR.a0E(ef,
			eh, deltaY) || (aN.a0f(ef, eh) ? aN.a0E(deltaY) && (bb.dc = !0) : aO.a0E(ef, eh, deltaY)))
	}

	function a0M(e) {
		a0R(e, 0)
	}

	function a0R(e, id) {
		0 === id && n.xD() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== aW.zo() && e.preventDefault()
	}

	function a0N(e) {
		if (__fx.keybindHandler(e.key)) return;
		a0Q() || 0 < at.rc || (e = e.code) && e.length && (bT.et(e, 18) ? am.a0h(3) : bT.et(e, 22) ? am.a0h(0) : bT.et(e, 20) ? am.a0h(1) : bT.et(e, 24) ? am.a0h(2) : bT.et(e, 10) ? aN.a0i(31 / 32) : bT.et(e, 8) ? aN.a0i(32 / 31) : bT.et(e, 6) ? aN
			.a0i(7 / 8) : bT.et(e, 4) ? aN.a0i(8 / 7) : bT.et(e, 14) ? 0 !== a9.yf && aO.a0E(Math.floor(at.a1 / 2), Math.floor(at.j7 / 2), -200) : bT.et(e, 16) ? 0 !== a9.yf && aO.a0E(Math.floor(at.a1 / 2), Math.floor(at.j7 / 2), 200) : bT.et(e,
				0) ? a9.yf && bP.gg(!1) : bT.et(e, 2) && a9.yf && bP.gg(!0))
	}

	function a0O(e) {
		if (!a0Q() && !(0 < at.rc || bb.lo < 400)) {
			var code = e.code;
			if (code && code.length && !("Enter" === code && n.a0j(1) || "Space" === code && n.a0j(0))) return bk.zs ? bk.t4.a0j(code) ? void 0 : void("Escape" === code && bF.f2()) : void(8 !== aW.zo() && aW.a0j(e) ? bb.dc = !0 : "Escape" === code ?
				bF.f2() : bT.et(code, 18) ? am.a0k(3) : bT.et(code, 22) ? am.a0k(0) : bT.et(code, 20) ? am.a0k(1) : bT.et(code, 24) ? am.a0k(2) : bT.et(code, 12) ? b8.a0l(!a9.m1) : "Space" === code && a9.yf && (aI.gj && aI.a0m(), a9.gi) && b8
				.a0n(!1))
		}
	}

	function a0P() {
		"hidden" === document.visibilityState ? 1 === a9.yf && (a9.gi ? b8.a0o() : !a9.k0 || aI.gj || a9.gu || aI.a0m()) : bb.dc = !0
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
		if (!n.xD()) return 8 === aW.zo() ? a9.m1 ? void b8.a0l(!1) : ba.xD ? void ba.a0m() : void aI.a0m() : void(7 !== aW.zo() && 6 === aW.zo() && aV.a0r());
		n.a0j(2)
	}
}

function bt() {
	this.pT = new a0s, this.pd = new a0t, this.fu = new a0u, this.zG = new a0v, this.wu = new a0w, this.a0x = new a0y, this.canvas = new a0z, this.color = new a10, this.a11 = new a12, this.dU = function() {
		this.pT.uN()
	}
}

function a0t() {
	this.vI = function(g) {
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
	}, this.a1A = function(g, sD, sE) {
		sE = sE || g.length - 1;
		for (var a1B = 0, a7 = sD = sD || 0; a7 <= sE; a7++) a1B += g[a7];
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
		for (var sH = pA.split(","), eY = Math.min(sH.length, g.length), a7 = 0; a7 < eY; a7++) g[a7] = Math.min(parseInt(sH[a7]), a1N)
	}, this.a1O = function(pA, g, qS) {
		g.fill("");
		for (var sH = pA.split('"'), eY = Math.min(sH.length, 2 * g.length), k3 = 0, a7 = 1; a7 < eY; a7 += 2) g[k3++] = sH[a7].slice(0, qS)
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
	this.xS = function(a1R, e0, a1S) {
		var hB = a1R.height,
			a1T = b6.pT.v8(hB, hB),
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
	}, this.mQ = function(dz, sH, es) {
		return "rgb(" + dz + "," + sH + "," + es + ")"
	}, this.mS = function(dz, sH, es, er) {
		return "rgba(" + dz + "," + sH + "," + es + "," + er.toFixed(3) + ")"
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
		var dz, sH;
		return pA.length < 7 ? b7.mP : (dz = parseInt(pA.slice(1, 3), 16), sH = parseInt(pA.slice(3, 5), 16), pA = parseInt(pA.slice(5, 7), 16), this.mQ(dz, sH, pA))
	}
}

function a0w() {
	this.a1f = function(pA, font, maxWidth) {
		if (font && (tV.font = font), tV.measureText(pA).width <= maxWidth) return pA;
		for (var a7 = pA.length - 1; 1 <= a7; a7--)
			if (pA = pA.substring(0, a7), tV.measureText(pA + "...").width <= maxWidth) return pA + "...";
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
	this.xj = 0, this.uN = function() {
		var f0 = bf.dp.data[5].value;
		a1n = "px " + f0, "Trebuchet MS" !== f0 && (a1n += ", Trebuchet MS"), this.xj = hA(32, 32, ["a", "b", "m"], 200, a1n)
	}, this.v8 = function(a1, j7) {
		var et = document.createElement("canvas");
		return et.width = a1, et.height = j7, et
	}, this.getContext = function(canvas, alpha) {
		return canvas.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(wu, a1, j7) {
		return wu.getImageData(0, 0, a1, j7)
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
	}, this.sJ = function(e, ef, eh, a1, j7) {
		e = e.style;
		e.left = this.a1o(ef), e.top = this.a1o(eh), e.width = this.a1o(a1), e.height = this.a1o(j7)
	}, this.pU = function(f0) {
		return 1 + f0 * u.v.r8()
	}, this.r3 = function(mA, g7) {
		return mA * this.pU(void 0 === g7 ? .5 : g7) * at.pV / at.pZ
	}, this.sI = function(mA, g7) {
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
		b6.zG.a1y(dk, "✔") || (1 === dk.length ? e.textContent = "✔" : e.textContent = dk + " ✔", setTimeout(function() {
			e.textContent = dk
		}, 500))
	}, this.measureText = function(pA) {
		return tV.measureText(pA).width
	}, this.s9 = function(a1z) {
		a1z.style.overflowX = "auto", a1z.style.overflowY = "hidden", a1z.style.whiteSpace = "nowrap", a1z.addEventListener("wheel", function(e) {
			this.scrollLeft += e.deltaY, e.preventDefault()
		})
	}
}

function a0u() {
	this.gk = function(zg) {
		return 0 === zg ? 1 === a9.yf && a9.gu : 1 === zg ? 1 === a9.yf && !a9.gu : 2 === a9.yf
	}, this.gl = function(player) {
		return 0 !== ac.lV[player] && 2 !== ac.a20[player]
	}, this.a21 = function(player) {
		return player === a9.eI && 2 !== ac.a20[player]
	}, this.a22 = function(player) {
		return player === a9.eI
	}, this.j1 = function(player) {
		return player >= a9.je || 2 === ac.a20[player]
	}, this.kT = function(player) {
		return 0 !== ac.lV[player]
	}, this.yV = function(player) {
		return player < a9.je
	}, this.ol = function(a23, a24) {
		return a23 !== a24
	}, this.fx = function(player, f0) {
		var min;
		return f0 = this.a25(player, f0), ac.ga[player] += f0, ac.a26[player] && (min = Math.min(ac.a26[player], ac.ga[player]), ac.a26[player] -= min, ac.ga[player] -= min), f0
	}, this.a25 = function(player, f0) {
		var a27 = ac.ga[player];
		return f0 = Math.min(f0, ac.gM[player] * a9.jl - a27), f0 = Math.min(f0, a9.a28 - a27), Math.max(f0, 0)
	}, this.om = function(player, hu, a29, a2A) {
		var a27 = ac.ga[player],
			hu = bH.dl(a27 * (hu + 1), 1024),
			a29 = bH.dl(a29 * a27, 1024),
			hu = Math.min(hu, a27 - a29);
		return 10 === a9.jy && (hu = b0.a2C(player, hu)), bK.f6[0] = hu, bK.f6[1] = a29, a2A <= hu
	}, this.oD = function(player, nu, nt) {
		var player = ac.ga[player],
			a2B = bH.dl(64 * player, 1024),
			player = (nu = Math.min(nu, player - a2B), this.a2E(nu));
		return a2B += player, nu = this.a25(nt, nu -= player), bK.f6[0] = nu, bK.f6[1] = a2B, 1 <= nu
	}, this.oF = function(nu, nt) {
		var a2D = this.a2E(nu);
		return nu = this.a25(nt, nu -= a2D), bK.f6[0] = nu, bK.f6[1] = a2D, 1 <= nu
	}, this.ht = function(player, a2F) {
		return bH.dl(ac.ga[player] * (a2F + 1), 1024)
	}, this.a2E = function(a2G) {
		return bH.dl(Math.max(2142 - bb.jb(), 0) * a2G, 2142)
	}, this.oy = function(player, a29) {
		a29 = bH.dl(a29 * ac.ga[player], 1024);
		bK.f6[1] = a29, ac.ga[player] -= a29
	}, this.fv = function(player, a2H) {
		var fI, fK, es = ac.ga[player];
		return a2H <= es ? ac.ga[player] -= a2H : (ac.ga[player] = 0, fK = ac.a26[player] + (fI = 5 * ((es = a2H - es) >> 2)), bZ.fy(player, fI - es, 12), fK <= a9.a2I ? ac.a26[player] = fK : (ac.a26[player] = a9.a2I, bZ.fy(player, fK - a9.a2I,
			18))), a2H
	}, this.kh = function(player, hu) {
		var ga = ac.ga,
			a27 = ga[player],
			hu = bH.dl(a27 * (hu + 1), 1024),
			a2B = Math.max(bH.dl(a27, 10), 1e3);
		return (hu = Math.min(hu, a27 - a2B)) < 0 ? (ga[player] = 0, a2B = Math.min(1e3, a27 + a9.a2I - ac.a26[player]), bK.f6[1] = a2B, ac.a26[player] += a2B - a27, 0) : (bK.f6[1] = a2B, 10 === a9.jy && (hu = b0.a2C(player, hu)), ga[player] -=
			a2B + hu, hu)
	}, this.op = function(player) {
		ac.ga[player] -= bK.f6[0] + bK.f6[1]
	}, this.on = function(player, il) {
		return (il = Math.min(il, a9.eV)) < a9.eV && 0 === ac.lV[il] && (il = a9.eV), (bK.eU[0] = il) === a9.eV || eR(player, il)
	}, this.or = function(player, nt) {
		return 0 !== ac.lV[nt] && !eR(player, nt)
	}, this.a2J = function(player, a2K) {
		for (var g6, eY = ah.jf, qx = 0, a2L = kw, a7 = 0; a7 < eY; a7++)
			if (g6 = a2L[a7], !this.j1(g6)) {
				if (player === g6) return !0;
				if (++qx > a2K) return !1
			} return !1
	}, this.kp = function(g6) {
		var a2M = a9.ie ? bd.a2N() : ac.gM[kw[0]];
		return a2M >= bH.dl(g6 * a9.jO, 100)
	}
}

function a0y() {
	this.a2O = function(canvas, a2P, a2Q) {
		var a1 = canvas.width,
			j7 = canvas.height,
			et = b6.pT.v8(a1, j7),
			hH = b6.pT.getContext(et, !0),
			canvas = (hH.drawImage(canvas, 0, 0), hH.getImageData(0, 0, a1, j7));
		return a2P(canvas.data, a1, j7, a2Q), hH.putImageData(canvas, 0, 0), et
	}, this.a2R = function(vJ, a1, j7) {
		for (var ef = a1 - 1; 0 <= ef; ef--)
			for (var eh = j7 - 1; 0 <= eh; eh--) {
				var a7 = 4 * (ef + eh * a1);
				vJ[3 + a7] = vJ[a7], vJ[a7] = vJ[1 + a7] = vJ[2 + a7] = 255
			}
	}, this.a2S = function(vJ, a1, j7) {
		for (var ef = a1 - 1; 0 <= ef; ef--)
			for (var eh = j7 - 1; 0 <= eh; eh--) {
				var a7 = 4 * (ef + eh * a1);
				vJ[1 + a7] > vJ[2 + a7] + 10 && (vJ[3 + a7] = vJ[a7], vJ[1 + a7] = vJ[2 + a7])
			}
	}, this.a2T = function(vJ, a1, j7, a2Q) {
		for (var gap = Math.floor(Math.min(a1, j7) * a2Q), ef = 0; ef < a1; ef++)
			for (var a7, eh = 0; eh < j7; eh++)(ef < gap || eh < gap || a1 - gap <= ef || j7 - gap <= eh) && (vJ[3 + (a7 = 4 * (ef + eh * a1))] = 255 - 255 * (vJ[1 + a7] - vJ[a7]) / (255 - vJ[a7]))
	}, this.a2U = function(vJ, a1, j7, a2Q) {
		for (var ef = a1 - 1; 0 <= ef; ef--)
			for (var eh = j7 - 1; 0 <= eh; eh--) {
				var a7 = 4 * (ef + eh * a1);
				vJ[a7] = a2Q[0], vJ[1 + a7] = a2Q[1], vJ[2 + a7] = a2Q[2]
			}
	}, this.a2V = function(vJ, a1, j7, a2Q) {
		for (var gap = Math.floor(a1 * a2Q), ef = 0; ef < a1; ef++)
			for (var a7, eh = 0; eh < j7; eh++)(ef < gap || eh < gap || a1 - gap <= ef || j7 - gap <= eh) && (vJ[a7 = 4 * (ef + eh * a1)] = vJ[1 + a7] = vJ[2 + a7] = 0)
	}, this.a2W = function(vJ, a1, j7) {
		for (var eh, a7, ef = a1 - 1; 0 <= ef; ef--)
			for (eh = j7 - 1; 0 <= eh; eh--) 200 < vJ[1 + (a7 = 4 * (ef + eh * a1))] && vJ[1 + a7] - 20 > vJ[a7] && vJ[1 + a7] - 20 > vJ[2 + a7] ? vJ[a7] + vJ[2 + a7] < 40 ? vJ[3 + a7] = 0 : (vJ[3 + a7] = vJ[a7], vJ[a7] = 255, vJ[1 + a7] = 255,
				vJ[2 + a7] = 255) : vJ[a7] < 50 && vJ[1 + a7] < 50 && vJ[2 + a7] < 50 && (vJ[a7] + vJ[1 + a7] + vJ[2 + a7] < 50 ? vJ[3 + a7] = 180 : vJ[3 + a7] = 180 + Math.floor(75 * (vJ[a7] + vJ[1 + a7] + vJ[2 + a7] - 50) / 100))
	}, this.a2X = function(vJ, a1, j7) {
		for (var eh, a7, ef = a1 - 1; 0 <= ef; ef--)
			for (eh = j7 - 1; 0 <= eh; eh--) vJ[1 + (a7 = 4 * (ef + eh * a1))] > vJ[a7] + 20 && vJ[1 + a7] > vJ[2 + a7] + 20 && vJ[a7] + vJ[2] < 40 && (vJ[3 + a7] = 255 - vJ[1 + a7], vJ[a7] = vJ[1 + a7] = vJ[2 + a7] = vJ[a7])
	}, this.a1X = function(vJ, a1, j7, a2Q) {
		for (var dz = a1 >> 1, ef = 0; ef < a1; ef++)
			for (var eh = 0; eh < j7; eh++) Math.sqrt((ef - dz) * (ef - dz) + (eh - dz) * (eh - dz)) > a2Q * dz && (vJ[4 * (ef + eh * a1) + 3] = 0)
	}
}

function a0v() {
	this.xx = function(f0) {
		var a7, a2Y, a2Z, a2a, a2b;
		if (f0 < 0) return "-" + this.xx(Math.abs(f0));
		if (f0 < 1e3) return f0.toString();
		for (a2Y = Math.floor(Math.log(f0 + .5) / Math.log(10)) + 1, a2Z = Math.floor((a2Y - 1) / 3), a2b = (a2a = f0.toString()).substring(a2Y - 3, a2Y), a7 = 1; a7 < a2Z; a7++) a2b = a2a.substring(a2Y - 3 * (a7 + 1), a2Y - 3 * a7) + " " + a2b;
		return a2a.substring(0, a2Y - 3 * a2Z) + " " + a2b
	}, this.a2c = function(g6, a2Y) {
		return g6.toFixed(a2Y) + "%"
	}, this.a2d = function(f0, a2e) {
		return f0.toFixed(bH.p0(Math.floor((void 0 === a2e ? 3 : a2e) - Math.log10(Math.max(f0, 1))), 0, 8))
	}, this.a2f = function(f0, mA, a2Y) {
		return (f0 * mA).toFixed(a2Y)
	}, this.zK = function(username) {
		var ec, eN = username.indexOf("[");
		return !(eN < 0) && 1 < (ec = username.indexOf("]")) - eN && ec - eN <= 8 ? username.substring(eN + 1, ec).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.zK;
	this.a2g = function(pA) {
		for (var er = Math.floor(.5 * pA.length + .5), mG = Math.floor(.5 * (er - 1)), a7 = 0; a7 < mG; a7++)
			for (var es = -1; es < 2; es += 2) {
				var et = er + es * a7;
				if (" " === pA[et]) return [this.zH(pA.substring(0, et)), this.a2h(pA.substring(et))]
			}
		return [pA.substring(0, er), pA.substring(er)]
	}, this.a2h = function(pA) {
		for (var eY = pA.length, a7 = 0; a7 < eY; a7++)
			if (" " !== pA[a7]) return pA.substring(a7);
		return pA
	}, this.zH = function(pA) {
		for (var a7 = pA.length - 1; 0 <= a7; a7--)
			if (" " !== pA[a7]) return pA.substring(0, a7 + 1);
		return pA
	}, this.a2i = function(pA, a2j) {
		return pA.split("(")[0] + "(🧈 " + a2j.toFixed(2) + ")"
	}, this.startsWith = function(pA, a2k) {
		return pA.substring(0, a2k.length) === a2k
	}, this.a1y = function(pA, a2k) {
		var eY = pA.length;
		return pA.substring(eY - a2k.length, eY) === a2k
	}, this.a2l = function(g, a2m, a2n) {
		var pA = "",
			eY = g.length - 1;
		a2n = a2n || "";
		for (var a7 = 0; a7 < eY; a7++) pA += a2n + g[a7] + a2n + ",", (a7 + 1) % a2m == 0 && (pA += "\n");
		return pA += a2n + g[eY] + a2n
	}, this.a2o = function(pA, hP, hQ) {
		return pA.replace(new RegExp(hP, "g"), hQ)
	}
}

function a2p() {
	this.ii = function(player, eK) {
		aE.wg(player, bI.eg(eK), bI.ei(eK)) && (bb.dc = !0), a9.k0 && this.iS()
	}, this.iS = function() {
		a9.gu = !1;
		for (var a7 = 0; a7 < a9.je; a7++) 0 !== ac.lV[a7] && 0 === ac.gM[a7] && aE.wm(a7);
		0 !== ac.lV[a9.eI] ? (bZ.lR[7] = ac.gM[a9.eI], bZ.lR[8] = ac.ga[a9.eI], aN.a2q(), aS.a2r(), a9.gi || aD.lr(ac.i9[a9.eI] - 5, ac.iB[a9.eI] - 5, ac.iA[a9.eI] + 5, ac.iC[a9.eI] + 5), ap.dU()) : aT.show(!1, !1, !1, !0), aJ.a2s(18), ab.a2t(),
			ab.lH(!0), bL.s.a2u(), aH.r1(), a9.ok = null, bX.a2v = !0, bX.a2w(), a9.k0 && u.v.setState(1)
	}
}

function bv() {
	this.eV = 512, this.a28 = 15e8, this.a2x = 1e9, this.a2I = 5e4, this.a2y = 512, this.fs = 2, this.eI = 0, this.je = 0, this.yi = 0, this.k2 = 0, this.yh = 0, this.vr = 512, this.vw = 512, this.jl = 150, this.k0 = !0, this.gi = 0, this.yf = 0,
		this.jO = 0, this.m1 = !1, this.gu = 0, this.a2z = 0, this.ie = !1, this.vy = 0, this.vz = 0, this.jy = 0, this.x7 = 0, this.ok = null, this.yx = new x0, this.a30 = 30, this.yc = 0, this.yk = 0, this.yw = 0, this.yX = 0, this.data = new a31,
		this.a32 = new a33, this.a34 = 0, this.a35 = function() {
			bN.dU(), this.yi = this.je = this.data.humanCount, this.k0 = 1 === this.yi && !__fx.customLobby.isActive(), this.m1 = !1, this.gi = this.data.isReplay, this.jy = 0 === this.data.gameMode ? [7, 10, 8][this.data.battleRoyaleMode] : this
				.data.isZombieMode ? 9 : this.data.numberTeams - 2, this.x7 = this.data.isContest, this.ie = this.jy < 7 || 9 === this.jy, this.jy = 10 === this.jy && this.k0 ? 7 : this.jy, this.jy = 8 === this.jy && 2 !== this.je ? 7 : this.jy, av
				.dU(), this.vy = this.data.numberTeams, this.data.teamPlayerCount ? this.vz = +(0 < this.data.teamPlayerCount[0]) : (this.vz = 0, this.ie && this.k0 && (this.data.teamPlayerCount = new Uint16Array(9), this.data.teamPlayerCount.fill(1,
					1, this.vy + 1), a9.a32.a36())), this.a30 = this.je <= 2 ? 30 : this.je <= 50 ? 40 : 50, this.a2z = this.gu = __fx.customLobby.isActive() ? __fx.customLobby.gameInfo.spawnSelection : this.data.selectableSpawn, this.ok = this.gu ?
				new a2p : null, this.vr = __fx.customLobby.isActive() ? Math.max(Math.min(__fx.customLobby.gameInfo.botCount, this.data.playerCount), this.je) : 1 === dg ? this.je : this.data.playerCount,
				this.vw = this.vr, this.k2 = this.vr - this.je, this.yh = 0, this.eI = this.data.selectedPlayer, this.yc = 0, this.yk = 0, this.yw = 0, this.yX = 0, au.a37(this.data.spawningSeed), aa.dU(), ac.dU(), ae.a38(), b4.nm.oV = [], bc.dU(),
				this.yf = 1,
				__fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), bZ.dU(), a39(), aY.dV(), ak.a3A(), bX.dU(), aY.dU(), an.dU(), bI.dU(), bJ.dU(), aj.dU(), bR.a3B(), aA.dU(),
				ae.a3(), aE.dU(), aF.dU(), ah.a3C(), b5.dU(), bd.dU(), bL.dU(), ba.dU(), a3D.putImageData(a3E, 0, 0), aR.dU(), aO.dU(), aN.dU(), b8.dU(), aq.dU(), aQ.dU(), aS.dU(), aI.dU(), aM.dU(), aJ.dU(), aL.dU(), aH.dU(), aT.dU(), aB.dU(), aC
				.dU(), fa(), aZ.dU(), ab.dU(), b0.dU(), b1.dU(), ax.dU(), this.yx.dU(), bb.a3B(), aD.lq(), 0 === ac.lV[a9.eI] && aT.show(!1, !0), ab.lH(!0), ap.dU(), bb.dc = !0, this.gi || this.k0 && this.gu || u.v.setState(1), this.a34 = 0
		}, this.a02 = function(a3G) {
			a9.gi || b5.oi.a3H.length || (b5.oi.a3H = b5.a3I.y8()), aw.s.a3J(), this.yf = 0, bb.a3K(), u.v.setState(0), a3G || bQ.e6.show(), aW.setState(0), 2 === this.a34 ? n.s.a3L() : 1 === this.a34 ? n.o(19) : n.o(5, 5)
		}, this.a3M = function() {
			return this.gi ? aI.gj || !b8.a3N : this.k0 && (aI.gj || this.gu)
		}, this.a3O = function() {
			return 1 === this.yf && !this.gu
		}
}

function a31() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.elo = null, this.colorsType = 0, this.colorsPersonalized = 1,
		this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData = null, this.spawningType = 0,
		this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this.aIncomeData = null, this
		.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null
}

function a33() {
	this.a36 = function() {
		var a3P = a9.data;
		b6.pd.a1P(a3P.teamPlayerCount, a3P.playerCount), a3P.numberTeams = b6.pd.a1G(a3P.teamPlayerCount, 0), a3P.teamPlayerCount[0] && a3P.teamPlayerCount[7] && (a3P.teamPlayerCount[7] = 0, this.a36())
	}, this.a3Q = function() {
		var a3P = a9.data;
		a3P.mapType < 2 ? bO.a3(bO.a3R(a3P), a3P.mapSeed) : bO.a3S(a3P.canvas)
	}, this.a3T = function() {
		var a3P = a9.data;
		a3P.colorsData || (a3P.colorsData = new Uint32Array(1)), a3P.selectableColor && (a3P.colorsData[0] = bf.s.uM()), a3P.selectableName && (a3P.playerNamesData || (a3P.playerNamesData = new Array(1)), a3P.playerNamesData[0] = bf.dp.data[122]
			.value)
	}, this.a3U = function() {
		a9.data = new a31, a9.data.aIncomeType = 2, a9.data.aIncomeData = new Uint8Array(a9.eV), a9.data.aIncomeData[0] = 64
	}
}

function dM() {
	this.xg = 0, this.gap = 0, this.rW = 0, this.pb = 0, this.dU = function() {
		this.resize()
	}, this.resize = function() {
		this.xg = .0022 * b6.pT.pU(.5) * at.pV, this.rW = this.xg / at.pZ, this.gap = Math.max(Math.floor((u.v.r8() ? .0114 : .01296) * at.pV), 2), this.pb = this.gap / at.pZ
	}
}

function dL() {
	this.a3V = function() {
		return u.v.r8() ? 2 : 1
	}
}

function c6() {
	var q4, ef, eh, a3W, a3X, a3Y, lo, player, a3Z, gap, zoom, oO, a3a;

	function a3k(player) {
		for (var a7 = oO.length - 1; 0 <= a7; a7--)
			if (oO[a7] === player) return 1
	}

	function a3i(a3f) {
		var a7, eY;
		if (-1 !== a3f)
			for (eY = q4.length, a7 = 0; a7 < eY; a7++)
				if (q4[a7].xD && q4[a7].ef + 1 === a3f % 4 && q4[a7].eh + 1 === a3f >> 2) return a7;
		return -1
	}

	function a3g(kk, kl) {
		var sH = gap / 2;
		return kk < ef - a3W - 3 * sH || ef + 3 * a3W + 5 * sH < kk || kl < eh - a3W - 3 * sH || eh + 2 * a3W + 3 * sH < kl ? -1 : 4 * (kl < eh - sH ? 0 : kl < eh + a3W + sH ? 1 : 2) + (kk < ef - sH ? 0 : kk < ef + a3W + sH ? 1 : kk < ef + 2 * a3W +
			3 * sH ? 2 : 3)
	}
	this.a3b = function() {
		var a7, es, a3e = [b7.my, b7.nC, b7.mW, b7.nW, b7.nP];
		for (q4 = new Array(9), a7 = 0; a7 < 9; a7++) q4[a7] = {
			id: a7,
			xD: !1,
			kR: 0,
			canvas: [],
			ef: 0,
			eh: 0
		};
		for (q4[0].colors = [0, 1, 2, 3], q4[0].ef = 0, q4[0].eh = 0, q4[1].colors = [0, 1, 4], q4[1].ef = 1, q4[1].eh = 0, q4[2].colors = [0, 2], q4[2].ef = -1, q4[2].eh = 0, q4[3].colors = [0], q4[3].ef = 0, q4[3].eh = 0, q4[4].colors = [0, 2],
			q4[4].ef = 1, q4[4].eh = 1, q4[5].colors = [3], q4[5].ef = 0, q4[5].eh = -1, q4[6].id = 20, q4[6].colors = [0], q4[6].ef = 1, q4[6].eh = -1, q4[7].id = 21, q4[7].colors = [0], q4[7].ef = 0, q4[7].eh = 1, q4[8].id = 16, q4[8]
			.colors = [0], q4[8].ef = 0, q4[8].eh = 0, a7 = 0; a7 < 9; a7++)
			for (es = 0; es < q4[a7].colors.length; es++) q4[a7].canvas.push(function(id, a1S) {
				if (id < 20) return b6.canvas.xS(aX.get(3), id, a1S);
				var a1S = aX.get(3).height,
					a1T = b6.pT.v8(a1S, a1S),
					hH = b6.pT.getContext(a1T);
				20 === id ? hH.drawImage(aX.get(18), 0, 0) : 21 === id && af.vJ.xh(af.xA.xW + af.xA.xn, hH, 0, 0, a1S);
				return a1T
			}(q4[a7].id, a3e[q4[a7].colors[es]]))
	}, this.a3d = function() {
		return q4
	}, this.dU = function() {
		oO = [], ef = eh = lo = 0, a3X = a3Y = -1e3, this.resize()
	}, this.resize = function() {
		a3W = Math.floor((u.v.r8() ? .075 : .0468) * at.pV), zoom = a3W / aX.get(3).height, gap = Math.floor(a3W / 3)
	}, this.a0V = function(kk, kl) {
		return !!this.xD() && (bb.dc = !0, !!af.vJ.gm(kk, kl, player) || (kk = function(kk, kl) {
			a3Y = a3X = -1e3;
			var a3h = a3i(a3g(kk, kl));
			if (-1 === a3h) return 0;
			if (1 !== q4[a3h].colors[q4[a3h].kR])
				if (5 === a3h) {
					if (! function() {
							var dk = performance.now();
							a3a + 4e3 < dk && (oO = []);
							a3a = dk
						}(), a3k(player)) return 1;
					oO.push(player), 16 < oO.length && oO.shift()
				} else if (6 === a3h) {
				for (var a7 = oO.length - 1; 0 <= a7; a7--) 0 === ac.lV[oO[a7]] && oO.splice(a7, 1);
				0 < oO.length && (b1.a3l(1, oO, !0) && b4.fu.oN(oO, player), oO = [])
			} else if (2 === a3h) b4.gv.ns(aN.h0(), player);
			else if (3 === a3h) a9.gu && b4.gv.gw(a3Z);
			else if (0 === a3h)
				if (0 === q4[0].kR) {
					if (a9.a2z && aS.a3m() < 350) return 1;
					b4.gv.h6(aN.h0(), player)
				} else ax.h8(player, aN.h0());
			else if (1 === a3h) bR.a3n(), b4.gv.h4(aN.h0(), a3Z);
			else {
				if (7 === a3h) return bR.a3o(), af.vJ.show(kk, kl), 2;
				if (4 === a3h) b1.a3l(0, [player], !0) && b4.fu.oK(player);
				else {
					if (8 !== a3h) return 0;
					b4.gv.gz(aN.h0(), a3Z, player)
				}
			}
			return 1
		}(kk, kl), this.r1(), 2 === kk && (af.vJ.xD = !0), 0 < kk))
	}, this.a0X = function(kk, kl) {
		this.xD() || (a3X = kk, a3Y = kl, lo = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = bI.gq(mouseX),
			coordY = bI.gs(mouseY),
			coord = bI.ew(coordX, coordY),
			point = bI.eO(coord);
		if (coordX < 0 || coordY < 0) return;
		(function(kk, kl, eC) {
			aY.eT(eC) || -1 === (kk = bJ.h2.a42(kk, kl)) ? aJ.a41(eC) : aJ.a43(kk)
		}(mouseX, mouseY, point))
	}
	this.click = function(kk, kl, a0e) {
		var gp = bI.gq(kk),
			gr = bI.gs(kl),
			eK = bI.ew(gp, gr),
			eC = bI.eO(eK);
		if (!bI.gt(gp, gr)) return !1;
		gp = (u.v.r8() ? .025 : .0144) * at.pV, gr = performance.now();
		if (Math.abs(kk - a3X) > gp || Math.abs(kl - a3Y) > gp || lo + 500 < gr) return !1;
		if (lo = gr, a0e && ! function(kk, kl, eC) {
				aY.eT(eC) || -1 === (kk = bJ.h2.a42(kk, kl)) ? aJ.a41(eC) : aJ.a43(kk)
			}(kk, kl, eC), aI.gj || this.xD() || !b6.fu.gl(a9.eI) || a9.gi) return this.r1(), !1;
		if (a9.gu) {
			if (!a0e) {
				if (!aY.eT(eC)) return !1;
				a3Z = eK, q4[3].xD = !0
			}
		} else if (bJ.h2.nx(eK)) a0e ? aJ.a3u(55, 0) : bJ.a3s.a3t = -1;
		else {
			if (a0e) return !1;
			bJ.h2.a3v(kk, kl) || (2 === a9.yf ? aY.g8(eC) && (player = aY.eQ(eC), b6.fu.j1(player) || (q4[0].xD = !0, q4[0].kR = 1, q4[7].xD = !0)) : aY.ed(eC) ? (a3Z = ai.e9.eB(eC)) && (gp = bI.eO(a3Z), q4[8].xD = !0, player = aY.eP(gp) ? a9
				.eV : aY.eQ(gp)) : (a3Z = eK, bJ.h2.h3(a9.eI, eK) && (q4[0].xD = !0, q4[0].kR = 1, q4[1].xD = !0, q4[1].kR = bK.fA[2] ? 0 : 2), aY.h1(eC) || (aY.eP(eC) ? (player = a9.eV, h5(a9.eI) ? (q4[0].xD = !0, q4[0].kR = 0) : h7(a9
				.eI, player) && (q4[0].xD = !0, q4[0].kR = 3)) : (player = aY.eQ(eC)) === a9.eI ? (q4[0].xD = !0, q4[0].kR = 1, q4[7].xD = !0) : (q4[0].kR = 1, q4[5].xD = function(player) {
				return !b6.fu.j1(player) && !a3k(player) && b1.a3l(1, [player], !1)
			}(player), q4[7].xD = !b6.fu.j1(player), eR(player, a9.eI) ? (q4[4].xD = !b6.fu.j1(player) && !ab.a3x(player) && b1.a3l(0, [player], !1), q4[6].xD = function(player) {
				if (0 === oO.length) return !1;
				if (performance.now() > a3a + 4e3) return !(oO = []);
				return !a3k(player) && ! function(player) {
					var a7;
					if (a9.ie)
						for (a7 = oO.length - 1; 0 <= a7; a7--)
							if (!eR(player, oO[a7])) return 1;
					return
				}(player)
			}(player), h9(a9.eI, player) ? (q4[0].kR = 0, q4[0].xD = !0) : h7(a9.eI, player) && (q4[0].kR = 3, q4[0].xD = !0), q4[0].xD = this.a3z()) : (q4[2].xD = !0, q4[0].xD = !0)))))
		}
		return this.a3r(kk, kl)
	}, this.a3r = function(kk, kl) {
		return ef = kk - Math.floor(a3W / 2), eh = kl - Math.floor(a3W / 2), !!this.xD()
	}, this.a0B = function(kk, kl) {
		return !!this.xD() && (af.vJ.xD ? !af.vJ.xf(kk, kl) && (af.vJ.xD = !1, bb.dc = !0) : function(rM, kk, kl) {
			kk = a3g(kk, kl);
			if (0 <= a3i(kk)) return !1;
			if ((1 === kk || 6 === kk) && 0 <= a3i(2)) return !1;
			if ((6 === kk || 9 === kk) && 0 <= a3i(10)) return !1;
			return rM.r1(), bb.dc = !0
		}(this, kk, kl))
	}, this.r1 = function() {
		for (var a7 = q4.length - 1; 0 <= a7; a7--) q4[a7].xD = !1, q4[a7].kR = 0;
		af.vJ.xD = !1
	}, this.xD = function() {
		return this.a3z() || af.vJ.xD
	}, this.a3z = function() {
		for (var eY = q4.length, a7 = 0; a7 < eY; a7++)
			if (q4[a7].xD) return !0;
		return !1
	}, this.tU = function() {
		if (this.xD())
			if (af.vJ.xD) af.vJ.tU();
			else {
				var a7, hH = tV,
					es = q4,
					eY = es.length,
					a47 = (a3W + gap) / zoom;
				for (hH.imageSmoothingEnabled = !0, hH.setTransform(zoom, 0, 0, zoom, ef, eh), a7 = 0; a7 < eY; a7++) es[a7].xD && tV.drawImage(es[a7].canvas[es[a7].kR], es[a7].ef * a47, es[a7].eh * a47);
				hH.imageSmoothingEnabled = !1, hH.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function c7() {
	var j7, canvas, a48, a49, a4A, a4B = -1;

	function a4C() {
		var a4D, wu = canvas.getContext("2d", {
			alpha: !0
		});
		wu.clearRect(0, 0, j7, j7), wu.fillStyle = b7.mU, wu.fillRect(0, 0, j7, j7), 0 === a49 && (wu.fillStyle = b7.mZ, wu.fillRect(0, 0, j7, j7)), wu.fillStyle = b7.mY, wu.fillRect(0, 0, j7, 1), wu.fillRect(0, 0, 1, j7), wu.fillRect(0, j7 - 1, j7,
				1), wu.fillRect(j7 - 1, 0, 1, j7), a4D = .9 * j7 / aX.get(0).width, wu.imageSmoothingEnabled = !0, wu.setTransform(a4D, 0, 0, a4D, Math.floor((j7 - a4D * aX.get(0).width) / 2), Math.floor((j7 - a4D * aX.get(0).height) / 2)), wu
			.drawImage(aX.get(0), 0, 0), wu.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a4F(kk, kl) {
		if (!aI.gj) return kk <= j7 + bY.gap && kl >= aN.eh ? 9 : -1;
		if (kk <= 4 * j7 + bY.gap) {
			if (kl >= aN.eh) return 0;
			if (kl >= aN.eh - j7 - a4A * bY.gap) return 2
		} else if (kk <= 7 * j7 + bY.gap && kl >= aN.eh - j7 - a4A * bY.gap) return 1;
		return -1
	}
	this.gj = !1, this.dU = function() {
		a49 = -1, this.gj = !1, a4A = u.v.r8() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		j7 = aN.j7, (canvas = document.createElement("canvas")).width = j7, canvas.height = j7, a48 = b6.pT.rV(1, (u.v.r8() ? .5 : .45) * j7), a4C()
	}, this.a0m = function() {
		this.gj = !this.gj, this.gj ? (b8.a0l(!1), a9.gi && b8.a3N && b8.a0n(!0), this.a4E()) : (a49 = -1, a4C(), !a9.k0 || 1 !== a9.yf || a9.gu || a9.gi || u.v.setState(1)), bb.dc = !0
	}, this.a4E = function() {
		(a9.k0 || a9.gi) && 1 === a9.yf && (aR.lH(!0), a9.gu || setTimeout(function() {
			bX.yq()
		}, 0), u.v.setState(0))
	}, this.gm = function(kk, kl) {
		return 0 <= (a4B = a4F(kk, kl)) || !aI.gj || a9.k0 || a9.gi || ba.xD || aI.a0m(), a4B
	}, this.a0B = function(kk, kl) {
		kk = a4F(kk, kl);
		kk !== a49 && (a49 = kk, this.gj || a4C(), bb.dc = !0)
	}, this.a0C = function(kk, kl) {
		kk = a4F(kk, kl);
		return -1 !== kk && a4B === kk && (this.gj ? a9.m1 ? (0 <= kk && b8.a0l(!1), !a9.gi) : (0 === kk ? a9.a02() : 1 === kk ? this.a0m() : 2 === kk && n.o(1, 0), !0) : 9 === kk && (this.a0m(), !0))
	}, this.tU = function() {
		var a1;
		this.gj ? (a1 = Math.floor(5.5 * j7), tV.setTransform(1, 0, 0, 1, bY.gap, aN.eh), tV.fillStyle = b7.mU, tV.fillRect(0, 0, a1, j7), 0 === a49 ? (tV.fillStyle = b7.mZ, tV.fillRect(0, 0, 4 * j7, j7)) : 1 === a49 && (tV.fillStyle = b7.mZ, tV
				.fillRect(4 * j7, 0, Math.floor(1.5 * j7), j7)), tV.fillStyle = b7.mY, tV.fillRect(0, 0, a1, 1), tV.fillRect(0, 0, 1, j7), tV.fillRect(4 * j7, 0, 1, j7), tV.fillRect(0, j7 - 1, a1, 1), tV.fillRect(a1 - 1, 0, 1, j7), tV.font =
			a48, b6.pT.textBaseline(tV, 1), b6.pT.textAlign(tV, 1), tV.fillText(L(37), 2 * j7, .54 * j7), a1 = .4 * j7, aI.a4J(bY.gap + 4 * j7 + (1.5 * j7 - a1) / 2, aN.eh + .3 * j7, a1), a1 = 1, tV.setTransform(1, 0, 0, 1, bY.gap, aN.eh -
				a1 * a4A * bY.gap - a1 * j7), tV.fillStyle = b7.mU, tV.fillRect(0, 0, 4 * j7, j7), a49 === a1 + 1 && (tV.fillStyle = b7.mZ, tV.fillRect(0, 0, 4 * j7, j7)), tV.fillStyle = b7.mY, tV.fillRect(0, 0, 4 * j7, 1), tV.fillRect(0, 0,
				1, j7), tV.fillRect(4 * j7, 0, 1, j7), tV.fillRect(0, j7 - 1, 4 * j7, 1), tV.fillText(L(0 === a1 ? 37 : 38), 2 * j7, .54 * j7), tV.setTransform(1, 0, 0, 1, 0, 0)) : tV.drawImage(canvas, bY.gap, aN.eh)
	}, this.p3 = function(player) {
		return 0 !== ac.lV[player] && 2 !== a9.yf && !b6.fu.j1(player)
	}, this.a4J = function(ef, eh, eY) {
		tV.setTransform(1, 0, 0, 1, ef, eh), tV.lineWidth = bY.xg, tV.strokeStyle = b7.mY, tV.beginPath(), tV.moveTo(0, 0), tV.lineTo(eY, eY), tV.moveTo(0, eY), tV.lineTo(eY, 0), tV.stroke()
	}
}

function c8() {
	var a4L, j7, a4M, a4N, a4O, a4P, a4Q, a4R, a4S;

	function wq() {
		return aN.a4k(aJ.a4g()) ? aq.xD ? aN.eh - aN.j7 - 2 * a4M : aN.eh - a4M : b8.a4k(aJ.a4j()) ? aq.xD ? b8.wq() - aN.j7 - 2 * a4M : b8.wq() - a4M : aq.xD ? at.j7 - aN.j7 - (bg.a3V() + 1) * a4M : at.j7 - bg.a3V() * bY.gap
	}

	function a4X(dk, pA, id, g6, a4a, a4b, vR, a4c, a4d, a4e) {
		var a7, wu, a1T, pL, g, a4p = void 0 !== a4d,
			a1 = Math.floor(aM.measureText(pA, aJ.a48) + 1.5 * a4N + (a4p ? j7 : 1.5 * a4N));
		if (bb.dc = !0, a1 + a4M > at.a1 && !a4p && 50 !== id && 20 < pA.length) a4X(dk, (g = b6.zG.a2g(pA))[0], id, g6, a4a, a4b, vR, a4c, a4d, a4e), a4X(dk, g[1], id, g6, a4a, a4b, vR, a4c, a4d, a4e);
		else if (g = a1 + (50 === id ? a4O : 0), (a1T = document.createElement("canvas")).width = a1, a1T.height = j7, (wu = a1T.getContext("2d", {
				alpha: !0
			})).font = aJ.a48, b6.pT.textBaseline(wu, 1), b6.pT.textAlign(wu, 0), wu.clearRect(0, 0, a1, j7), wu.fillStyle = a4b, wu.fillRect(0, 0, a1, j7), wu.fillStyle = a4a, wu.fillText(pA, Math.floor(1.5 * a4N), Math.floor(j7 / 2)), a4p && (wu
				.imageSmoothingEnabled = !0, af.vJ.xh(a4d, wu, a1 - j7, 0, j7)), 0 === (pL = {
				lo: dk,
				pA: pA,
				id: id,
				player: g6,
				canvas: a1T,
				a4a: a4a,
				a4b: a4b,
				a1: a1,
				a4h: g,
				vR: vR,
				a4c: a4c,
				a4d: a4d,
				a4e: a4e
			}).lo || 0 < a4L.length && 0 < a4L[0].lo) a4L.unshift(pL);
		else {
			for (a7 = 1; a7 < a4L.length; a7++)
				if (0 < a4L[a7].lo) return void a4L.splice(a7, 0, pL);
			a4L.push(pL)
		}
	}

	function a4Y(dz, sH, es) {
		return "rgb(" + dz + "," + sH + "," + es + ")"
	}

	function a4q(id, g1) {
		for (var eY = a4L.length, a7 = 0; a7 < eY; a7++) a4L[a7].id === id && g1-- <= 0 && (a4L.splice(a7, 1), a7--, eY--)
	}

	function a4r(id, player) {
		for (var em = !1, a7 = a4L.length - 1; 0 <= a7; a7--) a4L[a7].id !== id || player !== a9.eV && a4L[a7].player !== player || (a4L.splice(a7, 1), em = !0);
		return em
	}

	function a5F(pA) {
		a4X(340, pA, 6, 0, a4Y(215, 245, 255), b7.mV, -1, !1)
	}
	this.a4T = "", this.dU = function() {
		var self;
		a4R = 0, a4Q = u.v.r8() ? 7 : 12, a4P = {
			yT: [0, 0, 0],
			a4U: [0, 0, 0],
			ln: [220, 180, 180],
			tT: [0, 0, 0],
			et: [0, 0, 0]
		}, a4L = [], this.resize(), a9.gu && this.yr(0, 18), bO.v6.v7[bO.eE].name.length && a5F(L(85, [bO.v6.v7[bO.eE].name])), a5F(L(86, [bO.ej - 2 + "x" + (bO.ek - 2)])), a5F(L(87, [ak.a5G])), ak.a5G !== ak.a5H && a5F(L(88, [ak.a5H + " (" +
			b6.zG.a2c(100 * ak.a5H / ak.a5G, 1) + ")"
		])), 0 < ak.a5I && a5F(L(61, [ak.a5I + " (" + b6.zG.a2c(100 * ak.a5I / ak.a5G, 1) + ")"])), 0 < ak.a5J && a5F(L(89, [ak.a5J + " (" + b6.zG.a2c(100 * ak.a5J / ak.a5G, 1) + ")"])), 10 === a9.jy && a4X(120, L(90), 6, 0, a4Y(235, 255,
			120), b7.mV, -1, !1), 0 !== (self = this).a4T.length && (a4X(200, self.a4T, 0, 0, b7.mY, b7.mV, -1, !1), self.a4T = ""), a9.x7 && a4X(340, L(39), 6, 0, a4Y(255, 200, 0), b7.mV, -1, !1)
	}, this.resize = function() {
		var a4Z, a7;
		if (j7 = (j7 = Math.floor((u.v.r8() ? .031 : .0249) * at.pV)) < 10 ? 10 : j7, this.fontSize = Math.floor(2 * j7 / 3), this.a48 = b6.pT.rV(1, this.fontSize), a4M = bY.gap, a4N = Math.floor(j7 / 5), 0 < a4L.length)
			for (a4Z = a4L, a4L = [], a7 = a4Z.length - 1; 0 <= a7; a7--) a4X(a4Z[a7].lo, a4Z[a7].pA, a4Z[a7].id, a4Z[a7].player, a4Z[a7].a4a, a4Z[a7].a4b, a4Z[a7].vR, a4Z[a7].a4c, a4Z[a7].a4d, a4Z[a7].a4e);
		this.a4f()
	}, this.a4f = function() {
		a4S = document.createElement("canvas");
		var pA = L(40),
			wu = (a4O = aM.measureText(pA, this.a48) + 5 * a4N, a4S.height = j7, a4S.width = a4O, a4S.getContext("2d", {
				alpha: !0
			}));
		wu.font = this.a48, b6.pT.textBaseline(wu, 1), b6.pT.textAlign(wu, 1), wu.clearRect(0, 0, a4O, j7), wu.fillStyle = b7.mv, wu.fillRect(0, 0, a4O, j7), wu.fillStyle = b7.mY, wu.fillText(pA, Math.floor(a4O / 2), Math.floor(j7 / 2))
	}, this.a4g = function() {
		var eY;
		return aq.xD ? aq.a1 : 0 === (eY = a4L.length) ? 0 : 1 === eY ? a4L[0].a4h : a4i(a4L[0].a4h, a4L[1].a4h)
	}, this.a4j = function() {
		var eY = a4L.length;
		return aq.xD ? eY ? a4i(aq.a1, a4L[0].a4h) : aq.a1 : 0 === eY ? 0 : 1 === eY ? a4L[0].a4h : 2 === eY ? a4i(a4L[0].a4h, a4L[1].a4h) : a4i(a4i(a4L[0].a4h, a4L[1].a4h), a4L[2].a4h)
	}, this.gm = function(ef, eh) {
		for (var ly, a4l, a4m = wq(), a7 = a4L.length - 1; 0 <= a7; a7--)
			if ((a4l = a4m - (a7 + 1) * j7) <= eh && eh < a4l + j7) return 50 === a4L[a7].id ? ef >= at.a1 - a4O - a4M - a4L[a7].a1 && (ef >= at.a1 - a4O - a4M ? b4.fu.oK(a4L[a7].player) : aD.ls(a4L[a7].player, 800, !1, 0), !0) : ef >= at.a1 -
				a4L[a7].a1 - a4M && (736 === a4L[a7].id ? (a4l = a4L[a7].pA.split(" "), window.open(a4l[a4l.length - 1], "_blank")) : a4L[a7].a4c && (a4L[a7].a4e && a4L[a7].a4e.er ? (a4l = a4L[a7].a4e.eK, ly = bI.eg(a4l) - 10, a4l = bI.ei(
					a4l) - 10, aD.lr(ly, a4l, 19 + ly, 19 + a4l)) : a4L[a7].a4e && a4L[a7].a4e.es ? aD.lt(a4L[a7].player, a4L[a7].a4e.lu) : (aD.ls(a4L[a7].player, 800, !1, 0), 0 <= a4L[a7].vR && (ly = a4L[a7].vR, a4L[a7].vR = a4L[a7]
					.player, a4L[a7].player = ly))), !0);
		return !1
	}, this.z3 = function(dk, pA, id, g6, a4a, a4b, vR, a4c, a4d, a4e) {
		a4X(dk, pA, id, g6, a4a, a4b, vR, a4c, a4d, a4e)
	}, this.a4o = function(k) {
		a4X(300, k, 252, 0, b7.mY, b7.mV, -1, !1)
	}, this.a2s = function(id) {
		for (var a7 = a4L.length - 1; 0 <= a7; a7--) a4L[a7].id === id && (a4L[a7].lo = 1)
	}, this.yr = function(player, id) {
		0 === id ? (aM.ii(player, 0), a4q(423, 0), a4X(160, L(41, [ac.zE[player]]), 423, player, "rgb(10,220,10)", b7.mV, -1, !1)) : 1 === id ? (a4r(50, a9.eV), aM.ii(player, 1), a4X(360, L(42, [ac.zE[player]]), 0, player, b7.nE, b7.mV, -1, !0),
			aD.ls(player, 2700, !1, 0)) : 2 === id ? (aM.ii(player, 2), a4X(0, L(43), 0, player, "rgb(10,255,255)", b7.mV, -1, !0), aD.ls(player, 2700, !1, 0)) : 3 === id ? (aM.ii(player, 2), a4X(0, L(44, [ac.zE[player]]), 0, player, b7.mY,
			b7.mV, -1, !0), aD.ls(player, 2700, !1, 0)) : 4 === id ? this.a4s(1, player, player) : 5 === id ? 2 === ac.a20[player] || b6.fu.j1(a9.eI) || (function(id, lQ) {
			var a7, a54 = 0,
				eY = a4L.length;
			for (a7 = 0; a7 < eY; a7++)
				if (a4L[a7].id === id && lQ <= ++a54) return a4L.splice(a7, 1)
		}(1, 5), ab.a4u(player) ? a4X(180, L(45, [ac.zE[player]]), 1, player, a4Y(255, 200, 180), b7.mV, -1, !0) : (a4q(573, 0), a4X(180, L(46, [ac.zE[player]]), 573, player, b7.nE, b7.mV, -1, !0))) : 18 === id ? a4X(255, L(47), 18, 0, b7.mY,
			b7.mV, -1, !1) : 21 === id ? a4X(220, L(48), id, 0, b7.mY, b7.mV, -1, !1) : 22 === id ? this.a4s(2, player, player) : 59 === id && a4X(0, L(49), id, 0, b7.nV, b7.mV, 0, !1)
	}, this.zv = function(k) {
		a4X(200, L(50, [k]), 94, 0, b7.mY, b7.nA, -1, !1)
	}, this.yy = function(a4v) {
		if (a9.eI === a4v && !a9.k0)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			a4X(0, "Your Win Count is now " + __fx.wins.count, 3, a4v, b7.mY, b7.mV, -1, !0);
		ac.gM[a4v] && (aM.ii(a4v, 2), a9.je < 100 ? a4X(0, L(44, [ac.zE[a4v]]), 3, a4v, b7.mY, b7.mV, -1, !0) : a4X(0, L(51, [ac.zE[a4v]]), 3, a4v, b7.mY, b7.mV, -1, !0))
	}, this.a41 = function(eC) {
		var a4y, pA, a4w = "(" + bI.eg(eC >> 2) + ", " + bI.ei(eC >> 2) + ")",
			a4c = !1,
			player = 0;
		aY.eT(eC) ? aY.eP(eC) ? a4w = L(52, [a4w]) : (player = aY.eQ(eC), pA = L(53, [b6.wu.a1f(ac.a4x[player], b6.pT.rV(0, 10), 150)]) + "   ", pA = (pA += L(54, [b6.zG.xx(ac.ga[player])]) + "   ") + L(55, [b6.zG.xx(ac.gM[player])]) + "   ", a9
				.ie && (a4y = bc.z1[bc.k4[bc.eW[player]]], pA += L(56) + ": " + a4y + "   "), b6.fu.j1(player) && (pA += L(57) + ": " + aA.js[aA.im[player]] + "   "), a4w = pA = (pA += L(58, [player]) + "   ") + L(59, [a4w]), a4c = !0) : a4w = aY
			.ed(eC) ? L(60, [a4w]) + "   #" + aY.eG(eC) : L(61, [a4w]), bb.dc = !0, a4q(55, 0), a4X(220, a4w, 55, player, b7.mY, b7.mV, -1, a4c)
	}, this.a43 = function(a4z) {
		var kP = bJ.s,
			player = kP.a50[a4z] >> 3,
			pA = (bb.dc = !0, a4q(55, 0), L(62, [ac.zE[player]]) + "   ");
		a4X(220, pA += L(54, [kP.a51[a4z]]), 55, player, b7.mY, b7.mV, -1, !0)
	}, this.o2 = function(np, a52, o3) {
		np === a9.eI ? a4X(175, " " + L(63, [ac.zE[a52]]) + ": ", 1001, a52, a4Y(200, 255, 210), b7.mV, -1, !0, o3) : this.a53(np, o3)
	}, this.a53 = function(np, o3) {
		a4q(1e3, 0), a4X(175, ac.zE[np] + ": ", 1e3, np, b7.mY, "rgba(5,60,25,0.9)", -1, !0, o3)
	}, this.z4 = function() {
		var k;
		a9.yk ? (k = L(64), aM.z2(L(65), 2, 1, 12), a4X(0, k, 40, 0, "rgb(10,220,10)", b7.mV, -1, !1)) : (k = L(66), aM.z2(L(67), 2, 0, 16), a4X(0, k, 41, 0, b7.mY, b7.mV, -1, !1))
	}, this.x1 = function() {
		var g1 = ac.zE,
			eb = a9.data;
		a4X(300, g1[0] + " [" + a9.yx.x6(eb.elo[0]) + "] vs " + g1[1] + " [" + a9.yx.x6(eb.elo[1]) + "]", 65, 0, b7.mP, "rgba(100,255,255,0.75)", -1, !1)
	}, this.a55 = function(k) {
		a4X(200, k, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.a56 = function(a57) {
		a4X(0, L(a57 ? 68 : 69), 247, 0, b7.nU, b7.mV, -1, !1)
	}, this.x9 = function(x5, x8, a58) {
		var eb = a9.data,
			g1 = ac.zE;
		a4X(0, g1[0] + ": " + a9.yx.x6(eb.elo[0]) + " -> " + x5, 66, 0, b7.mY, a58[0], -1, !1), a4X(0, g1[1] + ": " + a9.yx.x6(eb.elo[1]) + " -> " + x8, 66, 1, b7.mY, a58[1], -1, !1)
	}, this.oL = function(player, id) {
		0 === id ? a4r(50, player) ? (a4X(128, L(70, [ac.zE[player]]), 52, player, a4Y(180, 255, 180), b7.mV, -1, !0), ab.p1(player, 2, 255)) : a4X(384, L(71, [ac.zE[player]]), 51, player, a4Y(210, 210, 255), b7.mV, -1, !0) : a4r(51, player) ? (
			a4X(128, L(72, [ac.zE[player]]), 52, player, b7.mY, "rgba(60,120,10,0.9)", -1, !0), ab.p1(player, 2, 255)) : (a4X(384, L(73, [ac.zE[player]]), 50, player, b7.mY, "rgba(90,90,90,0.9)", -1, !0), ab.p1(player, 2, 96))
	}, this.oP = function(yT, target) {
		var color = a4Y(210, 255, 210);
		1 < yT.length ? a4X(230, L(74, [yT.length, ac.zE[target]]), 66, target, color, b7.mV, -1, !0) : a4X(230, L(75, [ac.zE[yT[0]], ac.zE[target]]), 66, yT[0], color, b7.mV, target, !0)
	}, this.a59 = function(player, target) {
		a4X(230, L(76, [ac.zE[player], ac.zE[target]]), 66, player, b7.mY, "rgba(75,65,5,0.9)", target, !0)
	}, this.a3u = function(id, g1) {
		a4q(id, g1)
	}, this.ym = function(id, player) {
		a4r(id, void 0 === player ? a9.eV : player)
	}, this.a5A = function(id) {
		for (var a7 = a4L.length - 1; 0 <= a7; a7--)
			if (a4L[a7].id === id) return a4L[a7];
		return null
	}, this.oG = function(a5B, a5C, player) {
		2 !== ac.a20[a9.eI] && (a4X(200, 1 === a5B ? L(77, [ac.zE[player]]) : L(78, [a5B, ac.zE[player]]), 30, player, "rgb(190,255,190)", b7.mV, -1, !0), a5C) && a4X(30, 1 === a5C ? L(79) : L(80, [a5C]), 30, 0, b7.mY, b7.mV, -1, !1)
	}, this.a5E = function(a5B, player) {
		2 !== ac.a20[a9.eI] && (a4q(31, 0), 2 === ac.a20[player] || player >= a9.je ? a4X(150, 1 === a5B ? L(81, [ac.zE[player]]) : L(82, [ac.zE[player], a5B]), 31, player, b7.mP, "rgba(205,205,205,0.9)", -1, !0) : a4X(150, 1 === a5B ? L(83, [ac
			.zE[player]
		]) : L(84, [ac.zE[player], a5B]), 31, player, b7.mP, "rgba(205,255,205,0.9)", -1, !0))
	}, this.yl = function(bo) {
		for (var et = bb.jb(), a7 = 2; 0 <= a7; a7--) 0 < a4P.tT[a7] && (bo || a4P.et[a7] < et - 220) && this.a5K(a7)
	}, this.a5K = function(id) {
		var pA, eY = a4P.tT[id],
			player = a4P.yT[id];
		a4P.tT[id] = 0, 1 === eY ? (0 === id ? pA = L(91, [ac.zE[player], ac.zE[a4P.a4U[0]]]) : 1 === id ? pA = L(92, [ac.zE[player]]) : 2 === id ? pA = L(93, [ac.zE[player]]) : 3 === id && (pA = L(94, [ac.zE[player]])), a4q(7, 0), a4X(a4P.ln[
			id], pA, 7, a4P.a4U[id], b7.mY, b7.mV, -1, !0)) : (pA = L(0 === id ? 95 : 1 === id ? 96 : 97, [eY]), a4q(7, 0), a4X(a4P.ln[id], pA, 7, player, b7.mY, b7.mV, -1, !1))
	}, this.a4s = function(id, gy, vR) {
		var et = bb.jb(),
			eY = a4P.tT[id] + 1;
		a4P.tT[id]++, a4P.yT[id] = gy, a4P.a4U[id] = vR, 1 === eY && (a4P.et[id] = et), (1 === eY && (a9.yi < 32 || 2 === a9.yf) || 1 < eY && (a4P.et[id] < et - 140 || 2 === a9.yf)) && this.a5K(id)
	}, this.iS = function() {
		for (var hU = (hU = a4L.length - a4Q) <= 1 ? 1 : hU * hU, a7 = a4L.length - 1; 0 <= a7; a7--) 0 < a4L[a7].lo && (a4L[a7].lo -= hU, a4L[a7].lo <= 0) && (bb.dc = !0, a4L.splice(a7, 1));
		! function() {
			var g1, a7;
			if (128 !== a4R && !(++a4R < 128))
				for (g1 = 5, a7 = ah.jf - 1; 0 <= a7; a7--) 1 === ac.a20[ah.jh[a7]] && 0 < g1-- && a4X(240, L(94, [ac.zE[ah.jh[a7]]]), 1, ah.jh[a7], b7.mP, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.yl(!1)
	}, this.tU = function() {
		for (var vu, eh = wq(), a7 = a4L.length - 1; 0 <= a7; a7--) vu = eh - (a7 + 1) * j7, 50 === a4L[a7].id ? (tV.drawImage(a4L[a7].canvas, at.a1 - a4L[a7].a1 - a4O - a4M, vu), tV.drawImage(a4S, at.a1 - a4O - a4M, vu)) : tV.drawImage(a4L[a7]
			.canvas, at.a1 - a4L[a7].a1 - a4M, vu)
	}
}

function c9() {
	var a5M, a5N, a5O, a1, j7, font, pA;

	function a5R(a5S) {
		return a5S < 10 ? "0" + a5S : String(a5S)
	}
	this.dU = function() {
		pA = L(98)
	}, this.resize = function() {
		a1 = Math.floor((u.v.r8() ? .53 : .36) * at.pV), j7 = Math.floor(.065 * a1), font = b6.pT.rV(1, Math.floor(.9 * j7)), a5O--, this.setTime()
	}, this.iS = function() {
		this.setTime() && (bb.dc = !0)
	}, this.setTime = function() {
		var dk = new Date,
			a5P = dk.getUTCMinutes(),
			dk = dk.getUTCSeconds();
		return a5N = 3600 - 60 * a5P - dk, a5N %= 900, a5M = pA + a5R(Math.floor(a5N / 60)) + ":" + a5R(a5N % 60), a5O !== (a5O = 60 * a5P + dk) && (a1 = aM.measureText(a5M, font), a1 += Math.floor(.4 * j7), !0)
	}, this.tU = function() {
		tV.lineWidth = 1 + Math.floor(j7 / 15), tV.translate(at.a1 - j7, Math.floor(.5 * (at.j7 + a1))), tV.rotate(-Math.PI / 2), tV.fillStyle = b7.mY, tV.fillRect(0, 0, a1, j7), tV.strokeStyle = b7.mP, tV.strokeRect(0, 0, a1, j7 + 10), tV
			.fillStyle = b7.mP, tV.font = font, b6.pT.textBaseline(tV, 1), b6.pT.textAlign(tV, 1), tV.fillText(a5M, Math.floor(a1 / 2), Math.floor(.59 * j7)), tV.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function cA() {
	var a4L, a5T, a48, j7, a5U;

	function a5W(a7) {
		var a5Y = !0,
			hP = b7.mY,
			a1 = (a4L[a7].il === a9.eV ? a4L[a7].wu.fillStyle = b7.mj : (aY.a5Z(a4L[a7].il), a4L[a7].wu.fillStyle = b6.color.mS(bK.f8[0], bK.f8[1], bK.f8[2], .87), 400 < b6.pd.a1A(bK.f8, 0, 2) && (a5Y = !1, hP = b7.mP)), a4L[a7].canvas.width),
			rz = (a4L[a7].wu.clearRect(0, 0, a1, j7), a4L[a7].wu.fillRect(0, 0, a1, j7), a4L[a7].wu.fillStyle = hP, ! function(wu, a1, j7) {
				wu.fillRect(0, 0, a1, 1), wu.fillRect(0, j7 - 1, a1, 1), wu.fillRect(0, 0, 1, j7), wu.fillRect(a1 - 1, 0, 1, j7)
			}(a4L[a7].wu, a1, j7), a5T + 2 * j7 < a1 && (a4L[a7].wu.fillRect(a1 - a5T - j7, 0, 1, j7), a4L[a7].wu.fillText(ac.zE[a4L[a7].il], Math.floor((a1 - a5T) / 2), Math.floor(.57 * j7))), 0 !== a4L[a7].id ? 0 : j7);
		a4L[a7].wu.fillText(b6.zG.xx(a4L[a7].im), Math.floor(a1 - a5T / 2 - rz), Math.floor(.57 * j7)),
			function(a7, a1, rz, a5Y) {
				a4L[a7].wu.fillStyle = a5Y ? b7.ma : b7.mW;
				a5Y = Math.floor(a5T * a4L[a7].im / a4L[a7].a5f);
				a4L[a7].wu.fillRect(Math.floor(a1 - a5T - rz), j7 - a5U, a5Y, a5U)
			}(a7, a1, rz, a5Y), 0 === a4L[a7].id ? (a5c(a7, a1, a5Y, hP), function(a7, a1, a5Y) {
				a4L[a7].wu.strokeStyle = a5Y ? b7.mq : b7.n0, a4L[a7].wu.fillRect(j7, 0, 1, j7);
				a5Y = a1 - j7;
				a4L[a7].wu.beginPath(), a4L[a7].wu.moveTo(Math.floor(.3 * j7 + a5Y), Math.floor(j7 / 2)), a4L[a7].wu.lineTo(Math.floor(j7 - .3 * j7 + 0 + a5Y), Math.floor(j7 / 2)), a4L[a7].wu.stroke(), a4L[a7].wu.beginPath(), a4L[a7].wu.moveTo(
					Math.floor(j7 / 2 + a5Y), Math.floor(.3 * j7)), a4L[a7].wu.lineTo(Math.floor(j7 / 2 + a5Y), Math.floor(j7 - .3 * j7 + 0)), a4L[a7].wu.stroke()
			}(a7, a1, a5Y)) : a5c(a7, 2 * j7, a5Y, hP)
	}

	function a5c(a7, a1, a5Y, hP) {
		a4L[a7].wu.strokeStyle = a4L[a7].a5g ? b7.mh : a5Y ? b7.n6 : b7.n7, a4L[a7].wu.fillStyle = hP, a4L[a7].wu.fillRect(a1 - j7, 0, 1, j7), a4L[a7].wu.lineWidth = Math.max(Math.floor(j7 / 12), 3), a4L[a7].wu.lineCap = "round";
		a5Y = .35;
		a1 = j7 + 1, a4L[a7].wu.beginPath(), a4L[a7].wu.moveTo(Math.floor(a1 - a5Y * j7 + 0), Math.floor(a5Y * j7)), a4L[a7].wu.lineTo(Math.floor(a1 - j7 + a5Y * j7), Math.floor(j7 - a5Y * j7 + 0)), a4L[a7].wu.stroke(), a4L[a7].wu.beginPath(), a4L[
			a7].wu.moveTo(Math.floor(a1 - j7 + a5Y * j7), Math.floor(a5Y * j7)), a4L[a7].wu.lineTo(Math.floor(a1 - a5Y * j7 + 0), Math.floor(j7 - a5Y * j7 + 0)), a4L[a7].wu.stroke()
	}

	function a5q(eY) {
		for (var im, a7 = eY - 1; 0 <= a7; a7--) im = aZ.fl(a9.eI, a7), a4L[a7].im !== im && (a4L[a7].im = im, a4L[a7].a5f = im > a4L[a7].a5f ? im : a4L[a7].a5f, a4L[a7].a5X = !0)
	}

	function a5V(a5s) {
		a5s.canvas = document.createElement("canvas"), bO.vC.font = a48;
		var a1 = a5T;
		a5s.il < a9.eV && 0 === a5s.id && (a1 += Math.floor(bO.vC.measureText(ac.zE[a5s.il] + "000").width)), a1 += j7, 0 === a5s.id && (a1 += j7), a5s.canvas.width = a1, a5s.canvas.height = j7, a5s.wu = a5s.canvas.getContext("2d", {
			alpha: !0
		}), a5s.wu.font = a48, b6.pT.textBaseline(a5s.wu, 1), b6.pT.textAlign(a5s.wu, 1)
	}

	function a5m(a7) {
		return aQ.a5u() ? at.a1 - a4L[a7].canvas.width - bY.gap : aQ.ef
	}

	function a5n(a7) {
		return Math.floor(2 * bY.gap + (aQ.a5u() ? aS.j7 + bY.gap : 0) + aQ.j7 + a7 * (1.3 * j7))
	}
	this.dU = function() {
		a4L = [], this.resize()
	}, this.resize = function() {
		a48 = aJ.a48, j7 = aJ.fontSize + 5, j7 = Math.floor(1.25 * j7), u.v.r8() && (j7 = Math.floor(1.25 * j7)), a5U = Math.floor(.15 * j7), bO.vC.font = a48, a5T = Math.floor(bO.vC.measureText("02 000 000 0000").width);
		for (var a7 = a4L.length - 1; 0 <= a7; a7--) a5V(a4L[a7]), a5W(a7)
	}, this.lH = function() {
		for (var a7 = a4L.length - 1; 0 <= a7; a7--) a4L[a7].a5X && (a4L[a7].a5X = !1, a5W(a7))
	}, this.gm = function(kk, eh) {
		if (2 !== a9.yf && 0 !== ac.lV[a9.eI] && !a9.gi && !b6.fu.j1(a9.eI))
			for (var a5h, a5i, a5j, a5k = u.v.r8() ? j7 : 0, a5l = u.v.r8() ? Math.floor(.15 * j7) : 0, a7 = a4L.length - 1; 0 <= a7; a7--)
				if (a5h = a5m(a7), a5i = a5n(a7), a5j = a4L[a7].canvas.width, a5i - a5l <= eh && eh <= a5i + j7 + a5l) {
					if (a5h - a5k <= kk && kk <= a5h + j7 + a5k) return a4L[a7].a5g || (a4L[a7].a5X = !0, a4L[a7].a5g = !0, 0 === a4L[a7].id && b4.gv.o0(a4L[a7].il)), !0;
					if (0 === a4L[a7].id && a5h + a5j - j7 - a5k <= kk && kk <= a5h + a5j + a5k) return b4.gv.h6(aN.h0(), a4L[a7].il), !0
				} return !1
	}, this.iS = function() {
		var eY;
		0 === ac.lV[a9.eI] || b6.fu.j1(a9.eI) && !a9.gi || (function(eY) {
			if (a4L.length !== eY) return 1;
			for (var a7 = eY - 1; 0 <= a7; a7--)
				if (a4L[a7].id !== aZ.ff(a9.eI, a7) || a4L[a7].il !== aZ.fk(a9.eI, a7)) return 1;
			return
		}(eY = aZ.fe(a9.eI)) && function(eY) {
			var a7, id, il, es, im, a4Z = [];
			loop: for (a7 = 0; a7 < eY; a7++) {
				for (id = aZ.ff(a9.eI, a7), il = aZ.fk(a9.eI, a7), es = 0; es < a4L.length; es++)
					if (a4L[es].id === id && a4L[es].il === il) {
						a4Z.push(a4L.splice(es, 1)[0]);
						continue loop
					} im = aZ.fl(a9.eI, a7), a5V(im = {
					il: il,
					im: im,
					a5f: im,
					id: id,
					a5X: !0,
					a5g: !1,
					canvas: null,
					wu: null
				}), a4Z.push(im)
			}
			a4L = a4Z
		}(eY), a5q(eY))
	}, this.a5t = function(g6) {
		for (var eY = Math.min(a4L.length, aZ.fe(a9.eI)), a7 = 0; a7 < eY; a7++)
			if (a4L[a7].il === g6) return void(a4L = [])
	}, this.tU = function() {
		if (0 !== ac.lV[a9.eI] && (!b6.fu.j1(a9.eI) || a9.gi))
			for (var a7 = a4L.length - 1; 0 <= a7; a7--) tV.drawImage(a4L[a7].canvas, a5m(a7), a5n(a7))
	}
}

function cB() {
	var a4L, jm, a5v, a5w, j7, a48, fontSize, a5x, a5y, a5z, a60, canvas, wu, li, a61;

	function tl(a7) {
		return L(0 === a7 ? 99 : 1 === a7 ? 100 : 2 === a7 ? 101 : 102)
	}

	function a68() {
		tV.drawImage(canvas, bY.gap + (a9.ie ? bY.gap + bd.a69() : 0), a6A + 2 * bY.gap)
	}

	function a62() {
		canvas.width = a4L[0].width + a5z, canvas.height = j7 + a5z, (wu = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, a4L[0].width + a5z, j7 + a5z), wu.translate(Math.floor(a5z / 2), Math.floor(a5z / 2)), wu.lineWidth = a5z, wu.fillStyle = 1 === a4L[0].a67 ? b7.md : b7.mV, a6B(), wu.fill(), wu.strokeStyle = 1 === a4L[0].a67 ? b7.mP :
			b7.mY, a6B(), wu.stroke(), b6.pT.textAlign(wu, 1), b6.pT.textBaseline(wu, 1), wu.fillStyle = 1 === a4L[0].a67 ? b7.mP : b7.mY, wu.font = a48[0], wu.fillText(tl(a4L[0].a66), Math.floor(a4L[0].width / 2), Math.floor(.72 * a5x[0] * j7)), wu
			.font = a48[1], wu.fillText(a4L[0].pA, Math.floor(a4L[0].width / 2), Math.floor((a5x[0] + .48 * a5x[1]) * j7))
	}

	function a6B() {
		wu.beginPath(), wu.moveTo(a60, 0), wu.lineTo(a4L[0].width - a60, 0), wu.lineTo(a4L[0].width, a60), wu.lineTo(a4L[0].width, j7 - a60), wu.lineTo(a4L[0].width - a60, j7), wu.lineTo(a60, j7), wu.lineTo(0, j7 - a60), wu.lineTo(0, a60), wu
			.closePath()
	}
	this.dU = function() {
		jm = 4, a5v = a5w = li = 0, a4L = [], a48 = new Array(2), fontSize = new Array(2), (a5x = new Array(2))[0] = .3, a5x[1] = .7, a5y = new Array(4), canvas = document.createElement("canvas"), a61 = bb.lo + 2e3, this.resize()
	}, this.resize = function() {
		var a7, a1;
		for (j7 = Math.floor((u.v.r8() ? .0725 : .058) * at.pV), fontSize[0] = Math.floor(.85 * a5x[0] * j7), fontSize[1] = Math.floor(.85 * a5x[1] * j7), a48[0] = b6.pT.rV(1, fontSize[0]), a48[1] = b6.pT.rV(1, fontSize[1]), a7 = a5y.length -
			1; 0 <= a7; a7--) a5y[a7] = this.measureText(tl(a7) + "000", a48[0]);
		if (a5z = Math.floor(1 + .05 * j7), a60 = Math.floor(.2 * j7), 0 < a4L.length) {
			for (a7 = a4L.length - 1; 0 <= a7; a7--) a1 = this.measureText(a4L[a7].pA + "00", a48[1]), a4L[a7].width = a1 < a5y[a7] ? a5y[a7] : a1;
			a62()
		}
	}, this.iS = function() {
		0 !== jm && (4 === jm ? bb.lo > a61 && (jm = 0, 1 === a9.yf) && aM.z2(bO.v6.v7[bO.eE].name, 3, 1, 9) : (1 === jm ? (0 === a5v && (a62(), a5v = 1e-4), 1 <= (a5v += .002 * (bb.lo - li)) && (a5w = 0, jm = 2, a5v = 1), bb.dc = !0) : 2 ===
			jm ? ((a5w += (bb.lo - li) / 1e3) > a4L[0].ln || 1 < a5w && 1 < a4L.length) && (jm = 3) : 3 === jm && ((a5v -= .002 * (bb.lo - li)) <= 0 && (a5v = 0, a4L.shift(), jm = 0 < a4L.length ? 1 : 0), bb.dc = !0), li = bb.lo))
	}, this.measureText = function(pA, a48) {
		return tV.font = a48, Math.floor(tV.measureText(pA).width)
	}, this.ii = function(a65, a7) {
		this.z2(ac.zE[a65], a7, 1, 0 === a7 ? 3 : 7)
	}, this.z2 = function(pA, a66, a67, ln) {
		var a1;
		pA.length && (a1 = (a1 = this.measureText(pA + "00", a48[1])) < a5y[a66] ? a5y[a66] : a1, a4L.push({
			pA: pA,
			width: a1,
			a66: a66,
			a67: a67,
			ln: ln
		}), 0 === jm) && (a5v = 0, jm = 1, li = bb.lo)
	}, this.tU = function() {
		0 !== jm && 0 !== a5v && (a5v < 1 ? (tV.globalAlpha = a5v, a68(), tV.globalAlpha = 1) : a68())
	}
}

function cj() {
	var j7, canvas, wu, a6C, a6D, a6E, a6F, a5X, a6G, a6H, a6I, a6J, a57 = !1,
		a1T = (this.xD = !1, this.a1 = 0, new Array(2));

	function lI() {
		var a1 = aq.a1,
			kP = (a5X = !1, wt(wu, a1, j7), Math.floor(a1 / 2));
		1 === a6C ? (wu.fillStyle = b7.ms, wu.fillRect(kP, 0, kP, j7)) : -1 === a6C && (wu.fillStyle = b7.n8, wu.fillRect(0, 0, kP, j7)), wv(wu, a1, j7, 2);
		var kP = (kP = Math.floor(.25 * j7)) < 2 ? 2 : kP,
			a5G = (wu.fillStyle = b7.me, Math.floor((j7 - 4) * a6D[1] / a6E[1]));
		0 < a5G && wu.fillRect(2, j7 - 2 - a5G, kP, a5G), 0 < (a5G = Math.floor((j7 - 4) * a6D[0] / a6E[0])) && wu.fillRect(a1 - 2 - kP, j7 - 2 - a5G, kP, a5G);
		kP = (kP = Math.floor(j7 / 8)) < 2 ? 2 : kP, wx(wu, Math.floor(.4 * j7), 0, j7, kP, .5, !1), wx(wu, Math.floor(a1 - 1.4 * j7), 0, j7, kP, .5, !0), a5G = 1.1 * j7 / a1T[0].width;
		wu.imageSmoothingEnabled = !0, wu.setTransform(a5G, 0, 0, a5G, (a1 - a5G * a1T[0].width) / 2, -.05 * j7), wu.drawImage(a1T[+a57], 0, 0), wu.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a6K() {
		a6I = bb.jb(), a5X = !0, a6G = a6C = 0, a6F = [], aq.xD = !1, aJ.ym(247), a6D[0] = a6D[1] = 0, aJ.a2s(673)
	}

	function wq() {
		return aN.a4k(aJ.a4g()) ? aN.eh - j7 - bY.gap : b8.a4k(aJ.a4j()) ? b8.wq() - j7 - bY.gap : at.j7 - j7 - bg.a3V() * bY.gap
	}
	this.dV = function() {
		for (var a7 = 0; a7 < 2; a7++) a1T[a7] = b6.canvas.xS(aX.get(3), 8 - a7, b7.nf), a1T[a7] = b6.canvas.a1V(a1T[a7])
	}, this.dU = function() {
		a6I = -140, a6H = 0, a6J = -1, this.xD = !1, a5X = a57 = !1, a6D = [a6C = a6G = 0, 0], a6E = [1, 1], a6F = [], this.resize()
	}, this.resize = function() {
		j7 = aN.j7, this.a1 = 4 * j7, (canvas = document.createElement("canvas")).width = this.a1, canvas.height = j7, wu = canvas.getContext("2d", {
			alpha: !0
		}), lI()
	}, this.lH = function() {
		a5X && lI()
	}, this.gm = function(ef, eh) {
		var lz;
		return !!this.xD && !(ef < at.a1 - this.a1 - bY.gap || eh < (lz = wq()) || lz + j7 < eh || (a9.gi || b4.gv.o6(ef > at.a1 - bY.gap - this.a1 / 2 ? 1 : 0), 0))
	}, this.iS = function() {
		if (0 < a6H) 0 === --a6H && a6K();
		else if (this.xD) 180 == --a6G && 3 * a6D[0] < a6E[0] ? a6K() : a6D[0] >= a6E[0] ? a57 ? bN.yI.ya() : bN.yI.ye() : a6D[1] >= a6E[1] ? a6H = 4 : a6G <= 0 && a6K();
		else if (function() {
				if (0 <= a6J) return 1;
				return
			}()) {
			a57 = ad.a6N(), aJ.z3(250, L(103, [ac.zE[a6J]]), 673, a6J, b7.mY, b7.mV, -1, !0), a6J = -1, aJ.a2s(257), aJ.a56(a57), this.xD = !0, a5X = !0, a6G = 360;
			for (var f0, dk = 0, a7 = ah.jf - 1; 0 <= a7; a7--) b6.fu.j1(ah.jh[a7]) || (dk += ac.gM[ah.jh[a7]]);
			a57 ? a6E[0] = Math.max(bH.dl(3 * dk, 4), 1) : a9.ie ? 9 === a9.jy && 8 === bc.k4[bd.kt()] ? a6E[0] = Math.max(dk, 1) : (f0 = bH.dl(100 * bd.a2N(), a9.jO), f0 = bH.p0(200 - 2 * f0, 40, 100), f0 = bH.dl(f0 * dk, 100), a6E[0] = Math
				.max(f0, 1)) : a6E[0] = Math.max(bH.dl(3 * dk, 5), 1), a6E[1] = Math.max(dk - a6E[0], 1)
		}
	}, this.yg = function() {
		this.xD && a6D[0] < a6E[0] && a6K()
	}, this.p2 = function(player, a6Q) {
		var a7;
		if (this.xD) {
			for (a7 = a6F.length - 1; 0 <= a7; a7--)
				if (a6F[a7] === player) return;
			var a6R = L(a6Q ? 104 : 105, [ac.zE[player]]);
			aJ.z3(450, a6R, 257, player, a6Q ? b7.mq : b7.n5, b7.mV, -1, !0), a6F.push(player), a5X = !0, a6R = a9.k0 ? a6E[0] : ac.gM[player], a6Q ? a6D[0] += a6R : a6D[1] += a6R, player === a9.eI && (a6C = a6Q ? 1 : -1)
		}
	}, this.tU = function() {
		var eh;
		this.xD && (eh = wq(), tV.drawImage(canvas, at.a1 - this.a1 - bY.gap, eh))
	}, this.p4 = function(player) {
		if (!a9.k0) {
			if (bb.jb() < a6I + 140) return !1;
			if (bb.jb() < 535) return !1
		}
		return 0 === a6G && !!b6.fu.gk(1) && !(!b6.fu.gl(player) || 10 <= jP[player] && !b6.fu.a2J(player, 9))
	}, this.oB = function(player) {
		a6J = player
	}
}

function cC() {
	var a1, ef, a6S, canvas, wu, xD, hu, a2j, a48, a5X, a6T = 11 / 12;

	function a6V() {
		var a5e = Math.floor(hu * (a1 - 2 * a6S)),
			a6Y = 1 + Math.floor(.0625 * aN.j7),
			a6Z = 1 + Math.floor(.3 * aN.j7),
			a6a = Math.floor(.55 * aN.j7);
		wu.clearRect(0, 0, a1, aN.j7), wu.fillStyle = b7.mU, wu.fillRect(0, 0, a6S, aN.j7), wu.fillRect(a6S + a5e, 0, a1 - a6S - a5e, aN.j7), wu.fillStyle = hu < 1 / 3 ? "rgba(" + Math.floor(3 * hu * 130) + ",130,0,0.85)" : hu < 2 / 3 ? "rgba(130," +
			(130 - Math.floor(3 * (hu - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (hu - 2 / 3) * 130) + ",0.85)", wu.fillRect(a6S, 0, a5e, aN.j7), wu.fillStyle = b7.mY, wu.fillRect(0, 0, a1, 1), wu.fillRect(0, aN.j7 - 1, a1, 1), wu
			.fillRect(0, 0, 1, aN.j7), wu.fillRect(a6S, 0, 1, aN.j7), wu.fillRect(a6S + a5e, 0, 1, aN.j7), wu.fillRect(a1 - a6S, 0, 1, aN.j7), wu.fillRect(a1 - 1, 0, 1, aN.j7), wu.fillRect(Math.floor(.25 * aN.j7) + a6Z, Math.floor((aN.j7 - a6Y) / 2),
				aN.j7 - 2 * a6Z, a6Y), wu.fillRect(Math.floor(a1 - 1.25 * aN.j7) + a6Z, Math.floor((aN.j7 - a6Y) / 2), aN.j7 - 2 * a6Z - a6Z % 2, a6Y), wu.fillRect(Math.floor(a1 - 1.25 * aN.j7) + Math.floor((aN.j7 - a6Y) / 2), a6Z, a6Y, aN.j7 - 2 *
				a6Z - a6Z % 2), a2j = b6.fu.ht(a9.eI, aN.h0()), wu.fillText(b6.zG.xx(a2j) + " (" + b6.zG.a2c(100 * hu, +(hu < .1)) + ")", Math.floor(.5 * a1), a6a)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		hu = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => aN.a0i(arg1);

	function a6f(a15) {
		return !(1 < a15 && 1 === hu || (1 < a15 && a15 * hu - hu < 1 / 1024 ? a15 = (hu + 1 / 1024) / hu : a15 < 1 && hu - a15 * hu < 1 / 1024 && (a15 = (hu - 1 / 1024) / hu), hu = bH.p0(hu * a15, 1 / 1024, 1), a6V(), 0))
	}

	function a6g(kk) {
		return hu !== (hu = bH.p0((kk - ef - a6S) / (a1 - 2 * a6S), 1 / 1024, 1)) && (a6V(), !0)
	}
	this.eh = 0, this.gn = !1, this.dU = function() {
		xD = !a9.gu && !a9.gi, a5X = !1, hu = .5, a2j = 0, this.gn = !1, this.resize()
	}, this.resize = function() {
		u.v.r8() && at.a1 < .8 * at.j7 ? (this.j7 = Math.floor(.066 * at.pV), a1 = at.a1 - 4 * bY.gap - this.j7) : (a1 = Math.floor((u.v.r8() ? .65 : .389) * at.pV), a1 += 12 - a1 % 12, this.j7 = Math.floor(a1 / 12)), a6S = Math.floor(3 * this
			.j7 / 2), a48 = b6.pT.rV(1, Math.floor(.5 * this.j7)), (canvas = document.createElement("canvas")).width = a1, canvas.height = this.j7, (wu = canvas.getContext("2d", {
			alpha: !0
		})).font = a48, b6.pT.textBaseline(wu, 1), b6.pT.textAlign(wu, 1), this.a6U(), a6V()
	}, this.a6U = function() {
		ef = u.v.r8() && at.a1 < .8 * at.j7 ? this.j7 + 3 * bY.gap : Math.floor((at.a1 - a1) / 2), this.eh = at.j7 - this.j7 - bg.a3V() * bY.gap
	}, this.lH = function() {
		a5X && (a5X = !1, a6V())
	}, this.xD = function() {
		return !(!xD || aI.gj && ef < Math.floor(bY.gap + 5.5 * this.j7))
	}, this.a4k = function(a6b) {
		return !!this.xD() && ef + a1 > at.a1 - a6b - bY.gap
	}, this.a2q = function() {
		xD = !a9.gi
	}, this.a6K = function() {
		xD = !1
	}, this.h0 = function() {
		return bH.p0(Math.floor(1024 * hu + .5) - 1, 0, 1023)
	}, this.a0f = function(kk, kl) {
		return this.xD() && ef < kk && kk < ef + a1 && kl > this.eh
	}, this.gm = function(kk, kl) {
		return !!this.xD() && !!aN.a0f(kk, kl) && (aO.m3 = !1, function(rM, kk, kl) {
			if (function(kk, kl) {
					return ef < kk && kk < ef + a6S && kl > aN.eh
				}(kk, kl)) return a6f(a6T);
			if (function(kk, kl) {
					return ef + a1 - a6S < kk && kk < ef + a1 && kl > aN.eh
				}(kk, kl)) return a6f(1 / a6T);
			return rM.gn = !0, a6g(kk)
		}(this, kk, kl) && (bb.dc = !0), !0)
	}, this.a0i = function(mA) {
		0 !== a9.yf && this.xD() && a6f(mA) && (bb.dc = !0)
	}, this.a0E = function(deltaY) {
		var mA;
		return !(0 === deltaY || !this.xD()) && a6f(mA = 0 < deltaY ? (mA = 400 / (400 + deltaY)) < a6T ? a6T : mA : 1 / a6T < (mA = (400 - deltaY) / 400) ? 1 / a6T : mA)
	}, this.a0B = function(kk) {
		return !!this.gn && a6g(kk)
	}, this.a0b = function() {
		this.gn = !1
	}, this.iS = function() {
		this.xD() && a2j !== b6.fu.ht(a9.eI, this.h0()) && (a5X = !0)
	}, this.tU = function() {
		this.xD() && tV.drawImage(canvas, ef, this.eh)
	}
}

function ct() {
	var canvas, wu, a6h, font, a6i = 0,
		a6j = !1,
		a6k = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		a6l = 5;

	function a6r() {
		if (a6j) {
			var a7, eY = a6k.length,
				a6a = Math.floor(.5 * a6h.j7),
				j7 = eY * a6a,
				ef = Math.floor(Math.floor(a6h.ef) + .3 * a6h.a1 - .5),
				eh = Math.floor(Math.floor(a6h.eh) - j7),
				a1 = Math.floor(.4 * a6h.a1 + 2.5);
			for (tV.fillStyle = b7.mU, tV.fillRect(ef, eh, a1, j7), tV.fillStyle = b7.mx, tV.fillRect(ef, eh + a6l * a6a, a1, a6a), tV.fillStyle = b7.mY, tV.fillRect(ef, eh, 2, j7), tV.fillRect(ef, eh, a1, 2), tV.fillRect(ef + a1 - 2, eh, 2, j7),
				a7 = 1; a7 < eY; a7++) tV.fillRect(ef, eh + a7 * a6a, a1, 2);
			for (tV.fillStyle = b7.mY, b6.pT.textAlign(tV, 1), b6.pT.textBaseline(tV, 1), tV.font = b6.pT.rV(0, .6 * a6a), ef += .5 * a1, a7 = 0; a7 < eY; a7++) tV.fillText(a6z(a7), ef, eh + (a7 + .6) * a6a)
		}
		tV.drawImage(canvas, Math.floor(a6h.ef), Math.floor(a6h.eh))
	}

	function lI(rM) {
		var ef, ly, lz, a6a;
		wu.clearRect(0, 0, Math.floor(a6h.a1), Math.floor(a6h.j7)), wu.fillStyle = b7.mU, wu.fillRect(0, 0, Math.floor(a6h.a1), Math.floor(a6h.j7)), a9.m1 && (wu.fillStyle = b7.mx, wu.fillRect(0, 0, Math.floor(.3 * a6h.a1), Math.floor(a6h.j7))), wu
			.fillStyle = b7.mY, wu.fillText("Hide UI", .15 * a6h.a1, .5 * a6h.j7), wu.fillRect(Math.floor(.3 * a6h.a1 - .5), 0, 2, Math.floor(a6h.j7)), ef = .5 * a6h.a1, wu.fillText("Replay Speed", ef, .31 * a6h.j7), wu.fillText(a6z(a6l), ef, .69 *
				a6h.j7), wu.fillRect(Math.floor(.7 * a6h.a1 - .5), 0, 2, Math.floor(a6h.j7)), rM.a3N ? (ef = Math.floor(.02 * a6h.a1), rM = Math.floor(.025 * a6h.a1), ly = Math.floor(.85 * a6h.a1 - ef - .5 * rM), lz = Math.floor(.25 * a6h.j7), a6a =
				Math.floor(a6h.j7) - 2 * lz, wu.fillRect(ly, lz, ef, a6a), wu.fillRect(ly + ef + rM, lz, ef, a6a)) : function() {
				var a1 = Math.floor(.46 * a6h.j7),
					j7 = Math.floor(.23 * a6h.j7),
					ef = Math.floor(.85 * a6h.a1 - .5 * a1 + a1 / 12),
					eh = Math.floor(.5 * a6h.j7 - j7);
				wu.beginPath(), wu.moveTo(ef, eh), wu.lineTo(ef + a1, eh + j7), wu.lineTo(ef, eh + (j7 << 1)), wu.fill()
			}(), wu.fillRect(0, 0, Math.floor(a6h.a1), 2), wu.fillRect(0, 0, 2, Math.floor(a6h.j7)), wu.fillRect(0, Math.floor(a6h.j7) - 2, Math.floor(a6h.a1), 2), wu.fillRect(Math.floor(a6h.a1 - 2), 0, 2, Math.floor(a6h.j7))
	}

	function a6z(a7) {
		return 5 === a7 ? "Normal" : "" + a6k[a7]
	}
	this.a3N = !1, this.dU = function() {
		a9.gi && (a6l = 5, this.a3N = !1, a6j = !1, a6h = new q6([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.a6m = function() {
		return a6k[a6l]
	}, this.wq = function() {
		return a6h.eh
	}, this.a4k = function(a6b) {
		return !!a9.gi && a6h.ef + a6h.a1 > at.a1 - a6b - bY.gap
	}, this.resize = function() {
		a9.gi && (a6h.resize(), a6h.eh -= (bg.a3V() - 1) * bY.gap, font = b6.pT.rV(0, .3 * a6h.j7), (canvas = document.createElement("canvas")).width = Math.floor(a6h.a1), canvas.height = Math.floor(a6h.j7), (wu = canvas.getContext("2d", {
			alpha: !0
		})).font = font, b6.pT.textAlign(wu, 1), b6.pT.textBaseline(wu, 1), lI(this))
	}, this.a0l = function(a6n) {
		0 === a9.yf || n.xD() || a6n !== a9.m1 && (a9.m1 = a6n, bd.resize(), bb.dc = !0, a9.gi) && (a6i = bb.lo + 2e3, lI(this))
	}, this.gm = function(ef, eh) {
		if (!a9.gi) return !1;
		if (ef < a6h.ef || eh < a6h.eh || ef > a6h.ef + a6h.a1) return a6j && function(rM, ef, eh) {
			var eY = a6k.length,
				a6a = Math.floor(.5 * a6h.j7),
				j7 = eY * a6a,
				ly = Math.floor(Math.floor(a6h.ef) + .3 * a6h.a1 - .5),
				j7 = Math.floor(Math.floor(a6h.eh) - j7),
				a1 = Math.floor(.4 * a6h.a1 + 2.5);
			return a6j = !1, bb.dc = !0, ef < ly || ly + a1 < ef || eh < j7 || (a6l = a6q(0, Math.floor((eh - j7) / a6a), eY - 1), lI(rM)), !0
		}(this, ef, eh);
		if ((ef -= a6h.ef) < .3 * a6h.a1) a6j = !1, this.a0l(!a9.m1);
		else {
			if (ef < .7 * a6h.a1) return a6j = !a6j, bb.dc = !0;
			this.a0n(!1)
		}
		return !0
	}, this.a0n = function(a6p) {
		2 === a9.yf ? (this.a0l(!1), n.o(3)) : (a6j = !1, this.a3N = !this.a3N, this.a3N ? (aI.gj && aI.a0m(), u.v.setState(1)) : a6p || aI.a4E(), bb.dc = !0, lI(this))
	}, this.a0o = function() {
		this.a3N = !1, aI.a4E(), bb.dc = !0, lI(this)
	}, this.a0U = function(ef, eh) {
		return !!a9.m1 && (0 <= aI.gm(ef, eh) || (a9.gi ? ((bb.lo > a6i || !this.gm(ef, eh)) && aO.gm(ef, eh), bb.dc = !0, a6i = bb.lo + 2e3) : aO.gm(ef, eh)), !0)
	}, this.iS = function() {
		a9.gi && a9.m1 && bb.lo > a6i - 1e3 && bb.lo < a6i && (bb.dc = !0)
	}, this.yn = function() {
		a9.gi && (this.a3N = !1, bb.dc = !0, lI(this))
	}, this.tU = function() {
		if (a9.gi) {
			if (a9.m1) {
				if (bb.lo > a6i) return;
				if (bb.lo > a6i - 1e3) return tV.globalAlpha = a6q(0, (1e3 - (bb.lo - (a6i - 1e3))) / 1e3, 1), a6r(), void(tV.globalAlpha = 1)
			}
			a6r()
		}
	}
}

function cD() {
	var a70, a71, a1, ef, eh, a72, a73;
	this.dU = function() {
		a70 = new Array(2), a71 = new Array(2), this.m3 = !1, a73 = a72 = hx = hv = 0, hw = 1, this.resize()
	}, this.resize = function() {
		a1 = (a1 = Math.floor((u.v.r8() ? .072 : .0502) * at.pV)) < 8 ? 8 : a1;
		for (var a7 = 1; 0 <= a7; a7--) a70[a7] = document.createElement("canvas"), a70[a7].width = a1, a70[a7].height = a1, a71[a7] = a70[a7].getContext("2d", {
			alpha: !0
		});
		this.a6U(),
			function() {
				for (var a7I = Math.floor(1 + a1 / 20), a7 = 1; 0 <= a7; a7--) a71[a7].clearRect(0, 0, a1, a1), a71[a7].fillStyle = b7.mR, a71[a7].beginPath(), a71[a7].arc(a1 / 2, a1 / 2, a1 / 2 - a7I, 0, 2 * Math.PI), a71[a7].fill(), a71[a7]
					.lineWidth = a7I, a71[a7].fillStyle = b7.mY, a71[a7].strokeStyle = b7.mY, a71[a7].beginPath(), a71[a7].arc(a1 / 2, a1 / 2, a1 / 2 - a7I, 0, 2 * Math.PI), a71[a7].stroke(), wx(a71[a7], 0, 0, a1, a7I, .3, 0 === a7)
			}()
	}, this.wp = function() {
		return -hv / hw
	}, this.wq = function() {
		return -hx / hw
	}, this.mD = function(a77, hd) {
		hv = hw * a77 - hd
	}, this.mE = function(a78, he) {
		hx = hw * a78 - he
	}, this.gm = function(a76, a4l) {
		return a9.m1 || ! function(a76, a4l) {
			return Math.pow(a76 - (ef + a1 / 2), 2) + Math.pow(a4l - (eh + a1 / 2), 2) < a1 * a1 / 4 || Math.pow(a76 - (ef + a1 / 2), 2) + Math.pow(a4l - (eh + 2 * a1), 2) < a1 * a1 / 4
		}(a76, a4l) || bf.dp.data[8].value ? (aD.mG() && (this.m3 = !0, a72 = a76, a73 = a4l), !1) : a4l < eh + 1.25 * a1 ? this.a0E(Math.floor(at.a1 / 2), Math.floor(at.j7 / 2), -200) : this.a0E(Math.floor(at.a1 / 2), Math.floor(at.j7 / 2),
			200)
	}, this.a0B = function(a76, a4l) {
		var a79, a7A, hg, hj;
		return !aD.mG() || (a79 = hv, a7A = hx, hv += hg = a72 - a76, hx += hj = a73 - a4l, ab.a0B(hg, hj), this.a7B(), a72 = a76, a73 = a4l, a79 !== hv) || a7A !== hx
	}, this.a0E = function(kk, kl, deltaY) {
		var mA;
		if (aD.mG()) {
			if (0 < deltaY) mA = (mA = 500 / (500 + deltaY)) < .5 ? .5 : mA;
			else {
				if (!(deltaY < 0)) return !1;
				mA = 2 < (mA = (500 - deltaY) / 500) ? 2 : mA
			}
			this.a7C(kk, kl, mA), bb.dc = !0
		}
		return !0
	}, this.a7C = function(ef, eh, eC) {
		var a15;
		eC = a15 = (a15 = 1024 < (a15 = eC) * hw ? 1024 / hw : a15) * hw < .125 ? .125 / hw : a15, ab.zoom(eC, ef, eh),
			function(a15, kk, kl) {
				hw *= a15, hv = (hv + kk) * a15 - kk, hx = (hx + kl) * a15 - kl, aO.a7B()
			}(eC, ef, eh)
	}, this.a7B = function() {
		var a7F = at.a1 / 16,
			hN = 0,
			a7G = at.j7 / 16,
			hO = 0;
		hv < -at.a1 + a7F && (hN = -at.a1 + a7F - hv), hv > hw * bO.ej - a7F && (hN = hw * bO.ej - a7F - hv), hx < -at.j7 + a7G && (hO = -at.j7 + a7G - hx), hx > hw * bO.ek - a7G && (hO = hw * bO.ek - a7G - hx), hv += hN, hx += hO, bW.mF(), ab
			.a7H(hN, hO)
	}, this.a6U = function() {
		ef = at.a1 - a1 - bY.gap, eh = Math.floor(at.j7 / 2 - 1.25 * a1)
	}, this.tU = function() {
		bf.dp.data[8].value || (tV.drawImage(a70[0], ef, eh), tV.drawImage(a70[1], ef, Math.floor(eh + 3 * a1 / 2)))
	}
}

function cE() {
	var g, a7J, a7K, a7L, gap, a7M, a7N, a7O, a7P, a7Q, a48, a7R, gd, a7S, a5e, a7T, a7U, a7V;

	function a7Z() {
		a7L = Math.floor(.2 * (u.v.r8() ? .07 : .035) * at.pV), a7L = a4i(u.v.r8() ? 3 : 1, a7L);
		var a7c = at.a1 / (g.length + gap);
		a7L = a7L < a7c ? a7c : a7L, a5e = Math.floor((1 - gap) * a7L), a7J = 0, a7d()
	}

	function a7d() {
		a7J = (a7J = a7J < -20 ? -20 : a7J) > (g.length - 15) * a7L ? (g.length - 15) * a7L : a7J, a7N = Math.floor(a7J / a7L), a7O = (a7O = a7N + Math.floor(at.a1 / a7L)) > g.length - 1 ? g.length - 1 : a7O, a7N = (a7N = a7O < a7N ? a7O : a7N) < 0 ?
			0 : a7N;
		var kP = a7O;
		a7M = a7K / g[kP];
		for (var a7 = a7O - 1; a7N <= a7; a7--) g[a7] > g[kP] && (kP = a7, a7M = a7K / Math.pow(g[a7], a7S))
	}

	function a7g(ef) {
		ef = Math.floor((a7J + at.a1 - ef - gap * a7L) / a7L);
		return (ef = ef < -1 ? -1 : -1 === ef ? 0 : ef > g.length - 1 ? -1 : ef) !== a7P && (a7P = ef, -1 === a7T && 0 === a7P && aP.a7W && (a7T = setInterval(a7h, 100)), 1)
	}

	function a7i(a7) {
		var a5U = Math.floor(a7M * Math.pow(g[a7], a7S));
		tV.fillRect(a7J + at.a1 - (a7 + 1) * a7L, at.j7 - a5U, a5e, a5U)
	}

	function a7h() {
		var g6;
		0 !== (a7P = 8 === aW.zo() ? -1 : a7P) ? (a7U = (new Date).getTime(), clearInterval(a7T), a7T = -1) : (g6 = g[1] / 864e3, -1 !== a7U && (g6 += ((new Date).getTime() - a7U) * g[1] / 864e5, a7U = -1), 0 < g6 && (g[0] += Math.floor(g6), bb
			.dc = !0))
	}
	this.a7W = !1, this.dU = function() {
		a7U = a7T = -1, a7P = -(a7S = 1), this.a7X = !1, gd = 0, a7R = new Date, a7J = 0, gap = .3, (a7V = []).push({
			g1: "Plateau A",
			eY: 0,
			e: 57
		}), a7V.push({
			g1: "Max A",
			eY: 1,
			e: 1
		}), a7V.push({
			g1: "Black Friday",
			eY: 15,
			e: 15
		}), a7V.push({
			g1: "Max B",
			eY: 19,
			e: 19
		}), a7V.push({
			g1: "Max C",
			eY: 44,
			e: 44
		}), a7V.push({
			g1: "First Android Version",
			eY: 58,
			e: 58
		}), a7V.push({
			g1: "Max D",
			eY: 67,
			e: 67
		}), a7V.push({
			g1: "The iFrame Explosion",
			eY: 98,
			e: 99
		}), a7V.push({
			g1: "The 155-Day Uptrend",
			eY: 58,
			e: 213
		}), a7V.push({
			g1: "Max E",
			eY: 213,
			e: 213
		}), a7V.push({
			g1: "Plateau B",
			eY: 214,
			e: 259
		}), a7V.push({
			g1: "Turbulent Times",
			eY: 260,
			e: 344
		}), a7V.push({
			g1: "Max F",
			eY: 262,
			e: 262
		}), a7V.push({
			g1: "Max G",
			eY: 282,
			e: 282
		}), a7V.push({
			g1: "Max H",
			eY: 333,
			e: 333
		}), a7V.push({
			g1: "The 19-Day Downtrend",
			eY: 283,
			e: 301
		}), a7V.push({
			g1: "Plateau C",
			eY: 345,
			e: 385
		}), a7V.push({
			g1: "The Alliance Ascent",
			eY: 386,
			e: 395
		}), a7V.push({
			g1: "Max I",
			eY: 395,
			e: 395
		}), a7V.push({
			g1: "First iOS Version",
			eY: 411,
			e: 411
		}), a7V.push({
			g1: "Plateau D",
			eY: 396,
			e: 453
		}), a7V.push({
			g1: "The TikTok Revolution",
			eY: 454,
			e: 470
		}), a7V.push({
			g1: "Max J",
			eY: 456,
			e: 456
		}), a7V.push({
			g1: "Max K",
			eY: 472,
			e: 472
		}), a7V.push({
			g1: "Max L",
			eY: 478,
			e: 478
		}), a7V.push({
			g1: "YT Drew",
			eY: 471,
			e: 485
		}), a7V.push({
			g1: "Plateau E",
			eY: 485,
			e: 600
		}), a7V.push({
			g1: "Uptrend A",
			eY: 600,
			e: 613
		}), a7V.push({
			g1: "Max M",
			eY: 613,
			e: 613
		}), a7V.push({
			g1: "Downtrend A",
			eY: 614,
			e: 635
		}), a7V.push({
			g1: "Plateau F",
			eY: 636,
			e: 737
		}), a7V.push({
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
		a7K = Math.floor(.15 * at.j7), a7Q = (a7Q = Math.floor((u.v.r8() ? .018 : .0137) * at.pV)) < 2 ? 2 : a7Q, a48 = b6.pT.rV(1, a7Q), a7Z()
	}, this.a7a = function(a7b) {
		var a7;
		for (this.a7W = !0, a7 = 0; a7 < a7b.length; a7++) g.unshift(a7b[a7]);
		a7Z(), bb.dc = !0
	}, this.a7e = function() {
		a7d()
	}, this.a0B = function(ef, eh) {
		eh > at.j7 - .6 * a7K ? this.a7X ? ef !== gd && (a7J += ef - gd, gd = ef, a7d(), a7g(ef), this.a7X = -1 !== a7P, bb.dc = !0) : a7g(ef) && (bb.dc = !0) : this.qV()
	}, this.qV = function() {
		-1 !== a7P && (this.a7X = !1, a7P = -1, bb.dc = !0)
	}, this.a0E = function(ef, deltaY) {
		-1 !== a7P && (a7J += Math.floor(deltaY), a7d(), a7g(ef), bb.dc = !0)
	}, this.gm = function(ef, eh) {
		this.a0B(ef, eh), -1 !== a7P && (gd = ef, this.a7X = !0)
	}, this.a0a = function() {
		-1 !== a7P && (this.a7X = !1)
	}, this.tU = function() {
		tV.fillStyle = b7.mb;
		for (var a7k, month, dk, s0, a7n, a7o, lz, a7p, a7q, a7 = a7O; a7N <= a7; a7--) a7i(a7);
		this.a7W && 0 === a7N && (tV.fillStyle = b7.n8, a7i(0)), -1 !== a7P && (tV.fillStyle = b7.ma, a7i(a7P)), -1 !== a7P && (tV.font = a48, b6.pT.textBaseline(tV, 2), (dk = new Date).setTime(a7R.getTime() - 1e3 * a7P * 60 * 60 * 24), month =
			"month", a7k = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(dk), a7k = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(dk)), a7k = a7k + ", " + dk.getUTCDate() + " " + month + " " + dk.getFullYear(), month = 1 === g[a7P] ? L(106) : L(107), month = b6.zG.xx(g[a7P]) + " " + month, dk = Math.floor(tV.measureText(a7k).width), s0 = Math
			.floor(tV.measureText(month).width), a7n = Math.floor(.5 * (dk + a7Q)), a7o = (a7o = a7J + at.a1 - (a7P + 1) * a7L) < a7n ? a7n : a7o > at.a1 - a7n ? at.a1 - a7n : a7o, lz = at.j7 - Math.floor(a7M * Math.pow(g[a7P], a7S)), a7p =
			Math.floor(1.1 * a7Q), a7q = lz > at.j7 - a7p ? at.j7 - a7p : lz, tV.fillStyle = b7.mV, tV.fillRect(at.a1 - s0 - a7Q, a7q - a7p, s0 + a7Q, a7p), tV.fillRect(a7o - a7n, at.j7 - a7p, dk + a7Q, a7p), tV.fillStyle = b7.mY, b6.pT
			.textAlign(tV, 2), tV.fillText(month, Math.floor(at.a1 - .5 * a7Q), a7q),
			function(lz, a7p) {
				for (var rz, kR = -1, e0 = g.length - a7P - 1, a7 = a7V.length - 1; 0 <= a7; a7--) e0 >= a7V[a7].eY && e0 <= a7V[a7].e && (-1 === kR || a7V[a7].e - a7V[a7].eY < a7V[kR].e - a7V[kR].eY) && (kR = a7); - 1 !== kR && (rz = Math
					.floor(tV.measureText(a7V[kR].g1).width), tV.fillStyle = b7.mV, tV.fillRect(at.a1 - rz - a7Q, lz, rz + a7Q, a7p), tV.fillStyle = b7.mY, tV.fillText(a7V[kR].g1, Math.floor(at.a1 - .5 * a7Q), lz + a7p))
			}(a7q - 2 * a7p, a7p), b6.pT.textAlign(tV, 1), tV.fillText(a7k, a7o, at.j7), tV.strokeStyle = b7.mc, tV.lineWidth = 1, tV.beginPath(), tV.moveTo(0, lz), tV.lineTo(at.a1, lz), tV.closePath(), tV.stroke())
	}
}

function cF() {
	var a48, a1, eh, a7s, a7t, canvas, wu, a5X, a27, a7u, a7v, a7w, a7x;
	this.ef = 0, this.j7 = 0, this.dU = function() {
		a7t = a9.a2y, a7v = "rgba(0,100,0,0.8)", a7w = "rgba(150,0,0,0.8)", a5X = !(a7u = !0), a27 = ac.ga[a9.eI], this.resize()
	}, this.resize = function() {
		a1 = Math.floor((u.v.r8() ? .305 : .24) * at.pV), this.j7 = Math.floor(.5 + .13 * a1), a1 = Math.floor(6 * this.j7), a48 = b6.pT.rV(1, Math.floor(.8 * this.j7)), a7x = Math.floor(.5 * this.j7), bO.vC.font = a48, eh = bY.gap, a7s = Math
			.floor(1 + .13 * this.j7), (canvas = document.createElement("canvas")).width = a1, canvas.height = this.j7, (wu = canvas.getContext("2d", {
				alpha: !0
			})).font = a48, b6.pT.textBaseline(wu, 1), b6.pT.textAlign(wu, 1), this.a7y()
	}, this.a5u = function() {
		return u.v.r8() && at.a1 < 1.2 * at.j7
	}, this.a6U = function() {
		this.a5u() ? this.ef = at.a1 - a1 - bY.gap : this.ef = Math.floor(aR.a7z() + (at.a1 - aR.a7z() - aS.a1 - a1) / 2 - .5 * bY.gap)
	}, this.lH = function() {
		a5X && (a5X = !1, this.a7y())
	}, this.a7y = function() {
		wu.clearRect(0, 0, a1, this.j7), wu.fillStyle = a7u ? a7v : a7w, wu.fillRect(0, 0, a1, this.j7), wu.fillStyle = b7.ma, this.a80(), this.a81(), wu.fillStyle = ac.ga[a9.eI] >= aa.jK(a9.eI) ? b7.n5 : b7.mY, wu.fillText(b6.zG.xx(a27), Math
			.floor(a1 / 2), a7x), wu.fillStyle = b7.mY, wu.fillRect(0, 0, a1, 1), wu.fillRect(0, 0, 1, this.j7), wu.fillRect(0, this.j7 - 1, a1, 1), wu.fillRect(a1 - 1, 0, 1, this.j7)
	}, this.a80 = function() {
		var et = bb.jb() % 100,
			et = (et = 9 - bH.dl(et -= et % 10, 10), Math.floor(et * (this.j7 - a7s) / 9));
		wu.fillRect(0, et, a7s, this.j7 - et), wu.fillRect(a1 - a7s, et, a7s, this.j7 - et)
	}, this.a81 = function() {
		wu.fillRect(a7s, this.j7 - a7s, Math.floor((a1 - 2 * a7s) * ac.ga[a9.eI] / a7t), a7s)
	}, this.iS = function() {
		var g6 = a9.eI;
		b6.fu.gl(g6) && (g6 = ac.ga[g6] - ac.a26[g6], a27 !== g6 ? (a7t = a4i(g6, a7t), a7u = a27 < g6 && 10 <= g6, a27 = g6, a5X = !0) : bb.jb() % 10 == 9 && (a5X = !0))
	}, this.tU = function() {
		0 === ac.lV[a9.eI] || a9.gu || 2 === ac.a20[a9.eI] || tV.drawImage(canvas, this.ef, eh)
	}
}

function cG() {
	var a82, a83, a84, a85, a86, a87, a88, a89, a8A, a8B, a8C, a8D, a8E, a8F, a8G, a8H, a8I, a8J, a8K, a8L, a8M, a8N, position, a8O, a8P, a8Q, a8R, a8S = 1,
		a8T = 1,
		a8U = "";
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

	function a8W() {
		a88.clearRect(0, 0, a82, a6A),
			a88.fillStyle = b7.nO,
			a88.fillRect(0, 0, a82, a8D),
			a88.fillStyle = b7.mU,
			a88.fillRect(0, a8D, a82, a6A - a8D);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			jP[a9.eI]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) a8N = -1;
		if (__fx.leaderboardFilter.enabled && a8N >= __fx.leaderboardFilter.filteredLeaderboard.length) a8N = -1;
		playerPos >= position && a8Y(playerPos - position, b7.mx),
			0 !== jP[a9.eI] && 0 === position && a8Y(0, b7.nT),
			-1 !== a8N && a8Y(a8N, b7.mZ),
			a88.fillStyle = b7.mU,
			//console.log("drawing", a8N),
			a88.clearRect(0, a6A - __fx.leaderboardFilter.tabBarOffset, a82, __fx.leaderboardFilter.tabBarOffset);
		a88.fillRect(0, a6A - __fx.leaderboardFilter.tabBarOffset, a82, __fx.leaderboardFilter.tabBarOffset);
		a88.fillStyle = b7.mY,
			a88.fillRect(0, a8D, a82, 1),
			a88.fillRect(0, a6A - __fx.leaderboardFilter.tabBarOffset, a82, 1),
			__fx.leaderboardFilter.drawTabs(a88, a82, a6A - __fx.leaderboardFilter.tabBarOffset, b7.mx),
			a88.fillRect(0, 0, a82, bY.xg),
			a88.fillRect(0, 0, bY.xg, a6A),
			a88.fillRect(a82 - bY.xg, 0, bY.xg, a6A),
			a88.fillRect(0, a6A - bY.xg, a82, bY.xg), a88.font = a83, b6.pT.textBaseline(a88, 1), b6.pT.textAlign(a88, 1), a88.fillText(a8U, Math.floor((a82 + a8D - 22) / 2), Math.floor(a8B + a84 / 2));
		__fx.playerList.drawButton(a88, 12, 12, a8D - 22);
		var er, g7 = playerPos < position + a86 - 1 ? 1 : 2;

		if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - a86)
				position = (result.length > a86 ? result.length : a86) - a86;
			//if (position >= result.length) position = result.length - 1;
			for (a88.font = a85, b6.pT.textAlign(a88, 0), er = a86 - g7; 0 <= er; er--) {
				const pos = result[er + position];
				if (pos !== undefined)
					a8Z(kw[pos]), a8a(er, pos, kw[pos]);
			}
			for (b6.pT.textAlign(a88, 2), er = a86 - g7; 0 <= er; er--) {
				const pos = result[er + position];
				if (pos !== undefined)
					a8Z(kw[pos]), a8b(er, kw[pos]);
			}
		} else {
			for (a88.font = a85, b6.pT.textAlign(a88, 0), er = a86 - g7; 0 <= er; er--)
				a8Z(kw[er + position]), a8a(er, er + position, kw[er + position]);
			for (b6.pT.textAlign(a88, 2), er = a86 - g7; 0 <= er; er--)
				a8Z(kw[er + position]), a8b(er, kw[er + position]);
		}
		2 == g7 && (a8Z(a9.eI), b6.pT.textAlign(a88, 0), a8a(a86 - 1, jP[a9.eI], a9.eI), b6.pT.textAlign(a88, 2), a8b(a86 - 1, a9.eI)), 0 === position && (g7 = .7 * a8E / aX.get(4).height, a88.setTransform(g7, 0, 0, g7, Math.floor(a8F + .58 * a8E +
			.5 * g7 * aX.get(4).width), Math.floor(a8B + a84 + .4 * a8E)), a88.imageSmoothingEnabled = !0, a88.drawImage(aX.get(4), -Math.floor(aX.get(4).width / 2), -Math.floor(aX.get(4).height / 2)), a88.setTransform(1, 0, 0, 1, 0, 0))
	}

	function a8Z(player) {
		a9.ie && (a88.fillStyle = bc.a8d[bc.k4[bc.eW[player]]])
	}

	function a8Y(a7, a8e) {
		a88.fillStyle = a8e, a7 = a86 - 1 < a7 ? a86 - 1 : a7;
		a8e = Math.floor((a7 === a86 - 1 ? 2 : 0 === a7 ? 1.15 : 1) * a8E), a8e = a7 === a86 - 2 ? Math.floor(a8D + 9.15 * a8E) - Math.floor(a8D + 8.15 * a8E) : a8e;
		a88.fillRect(0, Math.floor(a8D + (a7 + (0 === a7 ? 0 : .15)) * a8E), a82, a8e)
	}

	function a8a(a8g, qx, a7) {
		a88.fillText(a8J[qx], a8F, Math.floor(a8B + a84 + (a8g + .5) * a8E)), 1 === ac.a20[a7] && (a88.font = "italic " + a85);
		qx = Math.floor(a8B + a84 + (a8g + .5) * a8E);
		a88.fillText(ac.zE[a7], a8G, qx), 0 !== ac.a20[a7] && (a88.font = a85), a7 < a9.je && 2 !== ac.a20[a7] || a88.fillRect(a8G, qx + .35 * a8S, a8I[a7], Math.max(1, .1 * a8S))
	}

	function a8b(a8g, a7) {
		a88.fillText(ac.gM[a7], a8H, Math.floor(a8B + a84 + (a8g + .5) * a8E))
	}

	function a8p(eh) {
		return (eh -= bY.gap + a8D) < 0 ? Math.floor(eh / a8E) - 1 : eh < (a86 - 1) * a8E ? Math.floor(eh / a8E) : eh < a6A - a8D ? a86 - 1 : (eh -= a6A - a8D, a86 + Math.floor(eh / a8E))
	}

	function xf(ef, eh) {
		return ef >= bY.gap && ef < bY.gap + a82 && eh >= bY.gap && eh < bY.gap + a6A
	}
	this.dU = function() {
			var a7;
			for (a8P = !1, a8R = a8Q = a8O = 0, a8N = -1, a86 = u.v.r8() ? 6 : 10, a8T = (position = 0) === (a8T = bf.dp.data[11].value) ? 10 : 1 === a8T ? 5 : 1, a8M = !1, a8K = new Uint16Array(a86 + 1), a8L = new Uint32Array(a86 + 1), a8A = a9.eV,
				kw = new Uint16Array(a8A), jP = new Uint16Array(a8A), a7 = a8A - 1; 0 <= a7; a7--) kw[a7] = a7, jP[a7] = a7;
			this.resize(!0), a8I = new Uint16Array(a9.eV);
			var a8V = Math.floor(a82 - a8G - a8F - a89);
			for (a8J = new Array(a9.eV), a88.font = a85, a7 = a9.eV - 1; 0 <= a7; a7--) a8J[a7] = a7 + 1 + ".", ac.zE[a7] = b6.wu.a1f(ac.a4x[a7], a85, a8V), a8I[a7] = Math.floor(a88.measureText(ac.zE[a7]).width);
			a8W()
		}, this.resize = function(dU) {
			if (a6A = u.v.r8() ? (a82 = Math.floor(.335 * at.pV), Math.floor(a86 * a82 / 8)) : (a82 = Math.floor(.27 * at.pV), Math.floor(a86 * a82 / 10)), a82 = Math.floor(.97 * a82), (a87 = document.createElement("canvas")).width = a82, a87
				.height = a6A, a88 = a87.getContext("2d", {
					alpha: !0
				}), a8B = .025 * a82, a84 = .16 * a82, a8C = 0 * a82, a8D = Math.floor(.45 * a8B + a84), a8E = (a6A - a84 - 2 * a8B - a8C) / a86,
				a87.height = a6A += a8E, __fx.leaderboardFilter.tabBarOffset = Math.floor(a8E * 1.3), __fx.leaderboardFilter.verticalClickThreshold = a6A - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = a82,
				a83 = b6.pT.rV(1, Math.floor(.55 * a84)), a8S = Math.floor((u.v.r8() ? .67 : .72) * a8E), a85 = b6.pT.rV(0, a8S), a88.font = a85, a8F = Math.floor(.04 * a82), a8G = Math.floor((u.v.r8() ? .195 : .18) * a82), a89 = Math.floor(a88
					.measureText("00920600").width), a88.font = a83, a8H = a82 - a8F, !dU) {
				a88.font = a85;
				for (var a7 = a9.eV - 1; 0 <= a7; a7--) a8I[a7] = Math.floor(a88.measureText(ac.zE[a7]).width);
				a8W()
			}
			a8U = b6.wu.a1f(L(108), a83, .96 * a82)
		}, this.a7z = function() {
			return a82
		}, this.lH = function(bo, a8X) {
			(a8X || a8M && (bo || bb.jb() % a8T == 0)) && (a8M = !1, a8W())
		}, this.iS = function() {
			! function() {
				for (var er = a8A - 1; 0 <= er; er--) 0 === ac.lV[kw[er]] && ! function(er) {
					var a8n = kw[er];
					a8A--;
					for (var a7 = er; a7 < a8A; a7++) kw[a7] = kw[a7 + 1], jP[kw[a7]] = a7;
					kw[a8A] = a8n, jP[kw[a8A]] = a8A
				}(er)
			}();
			for (var a8l, mG = a8A - 1, er = 0; er < mG; er++) ac.gM[kw[er]] < ac.gM[kw[er + 1]] && (a8l = kw[er], kw[er] = kw[er + 1], kw[er + 1] = a8l, jP[kw[er]] = er, jP[kw[er + 1]] = er + 1);
			! function() {
				for (var dk = a8M, g7 = (a8M = !0, jP[a9.eI] >= a86 - 1 ? a86 - 2 : a86 - 1), a7 = g7; 0 <= a7; a7--)
					if (a8K[a7] !== kw[a7] || a8L[a7] !== ac.gM[kw[a7]]) return;
				(g7 != a86 - 2 || a8K[a86] === jP[a9.eI] && a8L[a86] === ac.gM[a9.eI]) && (a8M = dk)
			}();
			for (var a7 = a86 - 1; 0 <= a7; a7--) a8K[a7] = kw[a7], a8L[a7] = ac.gM[kw[a7]];
			a8K[a86] = jP[a9.eI], a8L[a86] = ac.gM[a9.eI];
			leaderboardHasChanged = true;
		}, __fx.leaderboardFilter.scrollToTop = function() {
			position = 0;
		}, this.gm = function(ef, eh) {
			return !!xf(ef, eh) && ((__fx.utils.isPointInRectangle(ef, eh, bY.gap + 12, bY.gap + 12, a8D - 22, a8D - 22) && __fx.playerList.display(ac.a4x), true) &&
				!(eh - bY.gap > __fx.leaderboardFilter.verticalClickThreshold && __fx.leaderboardFilter.handleMouseDown(ef - bY.gap)) && (a8O = bb.lo, a8P = !0, a8Q = a8R = a8p(eh), bF.a0p() && (ef = a6q(-1, a8R, a86), a8N !== (ef = ef === a86 ?
					-1 : ef)) && (a8N = ef, a8W(), bb.dc = !0)), !0)
		}, __fx.leaderboardFilter.repaintLeaderboard = function() {
			a8W(), bb.dc = !0;
		},
		this.a0B = function(ef, eh) {
			if (__fx.utils.isPointInRectangle(ef, eh, bY.gap + 12, bY.gap + 12, a8D - 22, a8D - 22)) {
				__fx.playerList.hoveringOverButton === false && (__fx.playerList.hoveringOverButton = true, a8W(), bb.dc = !0);
			} else {
				__fx.playerList.hoveringOverButton === true && (__fx.playerList.hoveringOverButton = false, a8W(), bb.dc = !0);
			}
			if (__fx.leaderboardFilter.setHovering(
					__fx.utils.isPointInRectangle(ef, eh, bY.gap, bY.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth, __fx.leaderboardFilter.tabBarOffset), ef - bY.gap
				)) return;
			var dk, a8o = a8p(eh);
			return a8P ? (dk = position, (position = a6q(0, position += a8Q - a8o, a9.eV - a86)) !== dk && (a8o = (a8o = a6q(-1, a8Q = a8o, a86)) !== a86 && xf(ef, eh) ? a8o : -1, a8N = a8o, a8W(), bb.dc = !0), !0) : (a8o = (a8o = a6q(-1, a8o,
				a86)) === a86 || !xf(ef, eh) || bF.a0p() ? -1 : a8o, a8N !== a8o && (a8N = a8o, a8W(), bb.dc = !0))
		}, this.a0a = function(ef, eh) {
			if (!a8P) return !1;
			a8P = !1;
			var a8o = a8p(eh);
			var isEmptySpace = false;
			return bF.a0p() && -1 !== a8N && (a8N = -1, a8W(), bb.dc = !0), bb.lo - a8O < 350 && a8R === a8o && -1 !== (a8o = (a8o = a6q(-1, a8o, a86)) !== a86 && xf(ef, eh) ? a8o : -1) && (ef = (__fx.leaderboardFilter.enabled ? (updateFilteredLb(),
					kw[__fx.leaderboardFilter.filteredLeaderboard[a8o + position] ?? (isEmptySpace = true, jP[a9.eI])]) : kw[a8o + position]), a8o === a86 - 1 && (__fx.leaderboardFilter.enabled ? this.playerPos : jP[a9.eI]) >=
				position + a86 - 1 && (ef = a9.eI), !isEmptySpace && a9.ie && __fx.donationsTracker.displayHistory(ef, ac.a4x, a9.k0), 0 !== ac.lV[ef] && !isEmptySpace) && aD.ls(ef, 800, !1, 0), !0
		}, this.a0E = function(ef, eh, deltaY) {
			var a8q;
			return !(a8P || a9.m1 || (a8q = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !xf(ef, eh)) || (ef = (ef = a6q(-1, a8p(eh), a86)) === a86 || bF.a0p() ? -1 : ef, 0 < deltaY ? position < a9.eV - a86 && (position += Math.min(a9.eV - a86 -
				position, a8q), a8N = ef, a8W(), bb.dc = !0) : 0 < position && (position -= Math.min(position, a8q), a8N = ef, a8W(), bb.dc = !0), 0))
		}, this.tU = function() {
			tV.drawImage(a87, bY.gap, bY.gap)
		}
}

function cH() {
	var canvas, wu, ef, eh, a5U, a8r, gap, a8s, fontSize, a8t, a8u, a8v, a8w, a8x, a8y, a8z, a90, a91;

	function a95() {
		wu.clearRect(0, 0, aS.a1, aS.j7), wu.fillStyle = b7.mV, wu.fillRect(0, 0, aS.a1, aS.j7), wu.fillStyle = b7.ms, eC = 0 < a8z ? a8z : Math.sqrt(a8w[4] / 1e4), wu.fillRect(0, aS.j7 - a5U - 1, Math.floor(eC * aS.a1), a5U), wu.fillStyle = b7.mY,
			wu.fillRect(0, 0, aS.a1, 1), wu.fillRect(0, 0, 1, aS.j7), wu.fillRect(aS.a1 - 1, 0, 1, aS.j7), wu.fillRect(0, aS.j7 - 1, aS.a1, 1), wu.fillRect(0, aS.j7 - a5U - 1, aS.a1, 1);
		for (var eC, a97, dk = 0, a7 = 0; a7 < a8v.length; a7++) a8x[a7] ? (b6.pT.textAlign(wu, 0), a97 = Math.floor((a8r - a5U + 2 * a8s) * (a7 - dk + 1) / (a8v.length + 1) - .7 * a8s), wu.fillText(a8v[a7], gap, a97), b6.pT.textAlign(wu, 2), 5 ===
			a7 && 0 !== ac.lV[a9.eI] && ac.ga[a9.eI] >= aa.jK(a9.eI) ? (wu.fillStyle = b7.nR, wu.fillText(a93(a7), aS.a1 - gap, a97), wu.fillStyle = b7.mY) : wu.fillText(a93(a7), aS.a1 - gap, a97)) : dk++
	}

	function a93(a7) {
		return a7 < 3 ? a8w[a7].toString() : 3 === a7 || 4 === a7 || 5 === a7 ? b6.zG.a2c(a8w[a7] / 100, 2) : a7 < 7 ? b6.zG.xx(a8w[a7]) : a7 === 7 ? aS.a98(a8w[7]) : a7 === 8 ? __fx.utils.getMaxTroops(ac.gM, a9.eI) : __fx.utils.getDensity(a9.eI)
	}

	function a92() {
		ac.gM[a9.eI] !== a8w[6] && (a8w[6] = ac.gM[a9.eI], a8t++)
	}
	this.dU = function() {
		a8z = a90 = 0, (a8u = new Array(8))[0] = L(109), a8u[1] = a9.k0 ? L(110) : L(111), a8u[2] = L(112), a8u[3] = L(113), a8u[4] = L(114), a8u[5] = L(115, 0, "Interest"), a8u[6] = L(116), a8u[7] = L(117),
			a8u.push("Max Troops", "Density"), // add a8u
			(a8v = new Array(a8u.length)).fill(""), (a8w = new Array(a8u.length))[0] = a9.k0 ? 0 : a9.je, a8w[1] = a9.k0 ? ah.jf : a9.k2, a8w[2] = a9.yh, a8w[3] = 0, a8w[4] = bH.dl(1e4 * ac.gM[0], Math.max(a9.jO, 1)), a8w[5] = 0 === a9.data
			.iIncomeType ? 700 : 1 === a9.data.iIncomeType ? bH.dl(700 * a9.data.iIncomeValue, 64) : bH.dl(700 * a9.data.iIncomeData[a9.eI], 64), a8w[6] = 0, a92(), a8w[7] = 0, a8y = a93(6), a8x = new Array(a8u.length);
		for (var a7 = a8u.length - 1; 0 <= a7; a7--) a8x[a7] = !0;
		a91 = 0, a91 = a9.k0 ? (a8x[0] = !1, a8x[2] = !1, a8x[3] = !1, 3) : (a8x[3] = !1, 1), a8t = 0, this.resize()
	}, this.resize = function() {
		this.a1 = Math.floor((u.v.r8() ? .1646 : .126) * 1.25 * at.pV), this.j7 = Math.floor(1.18 * this.a1), a5U = Math.floor(.04 * this.a1), gap = Math.floor(.035 * this.a1), a8s = .04 * this.a1, a8r = this.j7, this.j7 -= Math.floor(a91 * (this
			.j7 - 2 * a5U) / a8u.length), fontSize = Math.floor(.7 * (a8r - a5U) / a8u.length);
		var a48 = b6.pT.rV(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.a1, canvas.height = this.j7,
			function(a48, a1) {
				for (var a7 = 0; a7 < a8v.length; a7++) a8v[a7] = b6.wu.a1f(a8u[a7], a48, a1)
			}((wu = canvas.getContext("2d", {
				alpha: !0
			})).font = a48, .575 * this.a1), b6.pT.textBaseline(wu, 1), wu.lineWidth = 1, this.a2r(), this.a6U(), aQ.a6U(), a95()
	}, this.a6U = function() {
		ef = at.a1 - this.a1 - bY.gap
	}, this.a96 = function() {
		eh = bY.gap
	}, this.a2r = function() {
		eh = bY.gap + (aQ.a5u() && 0 !== ac.lV[a9.eI] && !a9.gu ? aQ.j7 + bY.gap : 0)
	}, this.lH = function(bo) {
		(bo || 100 <= a8t) && (a8t = 0, a95())
	}, this.a3m = function() {
		return a8w[7]
	}, this.a98 = function(value) {
		var kP = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * kP) / 1e3);
		return value < 10 ? kP + ":0" + value : kP + ":" + value
	}, this.iS = function() {
		var a9H, per;
		a8x[0] && a9.yi - a9.yh !== a8w[0] && (a8w[0] = a9.yi - a9.yh, a8t++), ah.jf - a8w[0] !== a8w[1] && (a8w[1] = ah.jf - a8w[0], a8t++), this.l9(), (a9H = aa.a9I(a9.eI)) !== a8w[5] && (a8w[5] = a9H, a8t++), a92(), a8w[7] += bb.a9J, a9H =
			a93(7), a8y !== a9H && (a8y = a9H, a8t += 100), a9H = a9.ie ? bd.a2N() : ac.gM[kw[0]], per = bH.dl(1e4 * a9H, Math.max(a9.jO, 1)), a8w[3] = a9H, a8w[4] !== per && (a8t++, a8w[4] = per), 8 === a9.jy && function() {
				for (var a7 = 0; a7 < 2; a7++)
					if (!b6.fu.gl(a7)) return bN.yI.ye(), 1;
				return
			}() || a8w[3] < a9.jO || ! function() {
				for (var a7 = ah.jf - 1; 0 <= a7; a7--)
					if (0 < ac.g0[ah.jh[a7]].length) return;
				return 1
			}() || bN.yI.ye()
	}, this.l9 = function() {
		a8x[2] && a9.yh !== a8w[2] && (a8w[2] = a9.yh, a8t++)
	}, this.a9K = function(a7) {
		var sH, a9L, dk;
		return 2 !== a9.yf && (a7 % 2 == 1 && (aR.lH(1, 1), bb.dc = !0), a7 === a9.a30 ? (a8z = 0, a95(), !1) : (-1 !== a7 || 0 !== a90) && (a9L = a8z, a8z = a9.gi ? a7 / a9.a30 : (dk = performance.now(), 0 <= a7 && (sH = dk - 392 * a7, a90 =
			0 === a7 || sH < a90 ? sH : a90), 1 < (a8z = (dk - a90) / (392 * a9.a30)) ? 1 : a8z), a95(), a8z !== a9L))
	}, this.tU = function() {
		tV.drawImage(canvas, ef, eh)
	}
}

function cI() {
	var xD, a9M, a1, j7, a6a, a9N, a9O, a5v, canvas, li, a9P;

	function wq() {
		return Math.floor((at.a1 - a1) / 2) < aN.j7 + 2 * bY.gap ? at.j7 - j7 - 4 * bY.gap - aN.j7 : at.j7 - j7 - 2 * bY.gap
	}
	this.dU = function() {
		a9P = xD = !1, a6a = .61, a9N = .07, a9O = .09, li = a5v = j7 = 0
	}, this.resize = function() {
		var wu, ly, et, a9U, a9V, a4D;
		xD && (a1 = a9Q(a1 = u.v.r8() ? Math.floor(.69 * at.pV) : Math.floor(.5 * at.pV), a4i(at.a1 - 2 * bY.gap, 10)), a1 = a9Q(a1, Math.floor(3.57 * a4i(at.j7 - 2 * bY.gap, 3))), j7 = Math.floor(.28 * a1), (canvas = document.createElement(
			"canvas")).width = a1, canvas.height = j7, wu = canvas.getContext("2d", {
			alpha: !0
		}), ly = Math.floor(1 + j7 / 40), wu.clearRect(0, 0, a1, j7), wu.fillStyle = b7.mV, wu.fillRect(ly, ly, a1 - 2 * ly, j7 - 2 * ly), wu.lineJoin = "bevel", wu.lineWidth = 2 * ly, wu.strokeStyle = b7.mY, wu.strokeRect(ly, ly, a1 -
			2 * ly, j7 - 2 * ly), wu.imageSmoothingEnabled = !1, et = aX.get(a9M), a9U = et.width, a4D = (1 === a9M ? .85 : 21 === a9M ? .666 : .9) * a6a * j7 / (a9V = et.height), wu.setTransform(a4D, 0, 0, a4D, Math.floor((a1 - a4D *
			a9U) / 2), Math.floor((j7 - a4D * a9V) / 2)), wu.drawImage(et, 0, 0), wu.setTransform(1, 0, 0, 1, Math.floor(a1 - a9O * j7 - a9N * j7 - ly), Math.floor(ly + a9N * j7)), function(wu, eY) {
			wu.lineWidth = Math.floor(1 + j7 / 80), wu.strokeStyle = b7.mY, wu.beginPath(), wu.moveTo(0, 0), wu.lineTo(eY, eY), wu.moveTo(0, eY), wu.lineTo(eY, 0), wu.stroke()
		}(wu, Math.floor(a9O * j7)), wu.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(f0, a9S, a6N, a9T) {
		xD || a9T && a9P || (a9M = a6N ? 21 : f0 ? 1 : 2, xD = a9P = !0, this.resize(), aH.r1(), aN.a6K(), li = bb.lo, a5v = a9S ? 1 : 0)
	}, this.iS = function() {
		!xD || 1 <= a5v || (a5v = 1 < (a5v += 5e-4 * (bb.lo - li)) ? 1 : a5v, li = bb.lo, bb.dc = !0)
	}, this.gm = function(ef, eh) {
		return !(!xD || a5v <= 0 || (ef -= Math.floor((at.a1 - a1) / 2), eh -= wq(), ef < 0) || eh < 0 || a1 < ef || j7 < eh || (a1 - j7 / 3 < ef && eh < j7 / 3 && (xD = !1, bb.dc = !0), 0))
	}, this.tU = function() {
		!xD || a5v <= 0 || (tV.globalAlpha = a5v, tV.drawImage(canvas, Math.floor((at.a1 - a1) / 2), wq()), tV.globalAlpha = 1)
	}
}

function dG() {
	var a9X = [0, 0],
		a9Y = [0, 0];

	function a9b(e0) {
		return 3 !== a9X[e0] && 1 !== a9Y[e0] && (a9Y[e0] = 1, a9X[e0]++, bf.rC.rD(119, (a9X[0] << 2) + a9X[1]), 1)
	}
	this.a9Z = new a9a, this.dU = function() {
		var f0 = bf.dp.data[119].value;
		a9X[0] = f0 >> 2, a9X[1] = 3 & f0
	}, this.a3B = function() {
		this.a9Z.dU()
	}, this.iS = function() {
		this.a9Z.iS()
	}, this.a3n = function() {
		a9b(0) && aJ.a4o(L(118))
	}, this.a3o = function() {
		a9b(1) && aJ.a4o(L(119))
	}
}

function a9a() {
	var a9c;
	this.dU = function() {
		a9c = !1
	}, this.iS = function() {
		var g6;
		if (function() {
				if (!a9c) {
					if (bb.jb() % 30 != 9) return;
					if (!b6.fu.kp(90)) return;
					a9c = !0
				}
				return 1
			}() && (! function() {
				var pL = aJ.a5A(956);
				if (pL) {
					if (b6.fu.kT(pL.player)) return 1;
					aJ.a3u(956, 0)
				}
				return
			}() && (-1 === (g6 = (a9.ie ? function() {
				var id = bd.kt(),
					eY = ah.jf;
				if (bc.k4[id])
					for (var yT = ah.jh, eW = bc.eW, a7 = 0; a7 < eY; a7++) {
						var g6 = yT[a7];
						if (eW[g6] !== id) return g6
					} else if (1 < eY) return kw[eY - 1];
				return -1
			} : function() {
				for (var a9k = ah.jf, jg = ah.jh, a9l = jP, a7 = 0; a7 < a9k; a7++) {
					var g6 = jg[a7];
					if (0 !== a9l[g6]) return g6
				}
				return -1
			})()) ? ! function() {
				var pL = aJ.a5A(957);
				if (pL && pL.a4e) {
					if (aY.eP(pL.a4e.eK << 2)) return 1;
					aJ.a3u(957, 0)
				}
				return
			}() : (aJ.z3(0, L(120, [ac.zE[g6]]), 956, g6, b7.mY, b7.mV, -1, !0), 0)))) {
			var eY = aj.iF.kf;
			if (0 === eY) aj.iF.l4();
			else
				for (var dp = aj.iF.dp, a7 = 0; a7 < eY; a7++) {
					var eK = dp[a7];
					if (aY.eP(eK << 2)) return void aJ.z3(0, L(121, [bI.eg(eK), bI.ei(eK)]), 957, 0, b7.mY, b7.mV, -1, !0, void 0, {
						er: 1,
						eK: eK
					})
				}
		}
	}
}

function dH() {
	this.a9m = new a9n, this.dU = function() {
		this.a9m.resize()
	}
}

function a9n() {
	this.resize = function() {
		var a7, a9o = document.head.querySelector("style#ss");
		if (a9o)
			for (a7 = a9o.sheet.cssRules.length - 1; 0 <= a7; a7--) a9o.sheet.deleteRule(0);
		else(a9o = document.createElement("style")).id = "ss", document.head.appendChild(a9o);
		var a6i = "::-webkit-scrollbar",
			a9p = b6.pT.pe(bY.rW),
			hB = b6.pT.pe(Math.max(b6.pT.r3(.012), 8));
		try {
			a9o.sheet.insertRule(a6i + "{width:" + hB + ";height:" + hB + ";}", a9o.sheet.cssRules.length), a9o.sheet.insertRule(a6i + "-thumb{background-color:white;}", a9o.sheet.cssRules.length), a9o.sheet.insertRule(a6i +
				"-track{background:" + b7.mU + ";}", a9o.sheet.cssRules.length), a9o.sheet.insertRule(a6i + "-track:horizontal{border-top:" + a9p + " solid white;}", a9o.sheet.cssRules.length), a9o.sheet.insertRule(a6i +
				"-track:vertical{border-left:" + a9p + " solid white;}", a9o.sheet.cssRules.length), a9o.sheet.insertRule(a6i + "-button{display:none;}", a9o.sheet.cssRules.length)
		} catch (e) {
			for (console.log("error 3425: " + e), a7 = a9o.sheet.cssRules.length - 1; 0 <= a7; a7--) a9o.sheet.deleteRule(0)
		}
	}
}

function dF() {
	this.a9q = !1, this.mO = !1, this.a2v = !1, this.a9r = [0, 0, 0, 0], this.a9s = function() {
		var ly, lz, mB, mC;
		this.a2v = this.a2v || this.mO, (this.mO || this.a9q && this.a2v) && (ly = bW.a9t[0], lz = bW.a9t[1], mB = bW.a9t[2], mC = bW.a9t[3], ly = ly < this.a9r[0] ? this.a9r[0] : ly, lz = lz < this.a9r[1] ? this.a9r[1] : lz, mB = mB > this.a9r[
				2] ? this.a9r[2] : mB, mC = mC > this.a9r[3] ? this.a9r[3] : mC, this.mO = !1, this.a9q = !1, ly === this.a9r[0] && lz === this.a9r[1] && mB === this.a9r[2] && mC === this.a9r[3] ? this.a2w() : ly <= mB && lz <= mC && a3D
			.putImageData(a3E, 0, 0, ly, lz, mB - ly + 1, mC - lz + 1))
	}, this.a2w = function() {
		this.a2v && this.a9r[2] >= this.a9r[0] && this.a9r[3] >= this.a9r[1] && a3D.putImageData(a3E, 0, 0, this.a9r[0], this.a9r[1], this.a9r[2] - this.a9r[0] + 1, this.a9r[3] - this.a9r[1] + 1), this.a2v = !1
	}, this.yq = function() {
		this.a9r[2] >= this.a9r[0] && this.a9r[3] >= this.a9r[1] && a3D.putImageData(a3E, 0, 0, this.a9r[0], this.a9r[1], this.a9r[2] - this.a9r[0] + 1, this.a9r[3] - this.a9r[1] + 1), this.a2v = !1
	}, this.dU = function() {
		var ef, eh;
		this.a9q = !1, this.mO = !1, this.a2v = !1, this.a9r[0] = bO.ej, this.a9r[1] = bO.ek, this.a9r[2] = this.a9r[3] = 0;
		loop: for (ef = 1; ef < bO.ej - 1; ef++)
			for (eh = bO.ek - 2; 1 < eh; eh--)
				if (1 === a9u[aY.wP(ef, eh) + 2]) {
					this.a9r[0] = ef;
					break loop
				} loop: for (eh = 1; eh < bO.ek - 1; eh++)
			for (ef = bO.ej - 2; 1 < ef; ef--)
				if (1 === a9u[aY.wP(ef, eh) + 2]) {
					this.a9r[1] = eh;
					break loop
				} loop: for (ef = bO.ej - 2; 0 < ef; ef--)
			for (eh = bO.ek - 2; 1 < eh; eh--)
				if (1 === a9u[aY.wP(ef, eh) + 2]) {
					this.a9r[2] = ef;
					break loop
				} loop: for (eh = bO.ek - 2; 0 < eh; eh--)
			for (ef = bO.ej - 2; 1 < ef; ef--)
				if (1 === a9u[aY.wP(ef, eh) + 2]) {
					this.a9r[3] = eh;
					break loop
				}
	}
}

function L(value, a9v, u0) {
	var pA = "number" == typeof value ? b3.a9w[value] : value;
	if (u0 && b3.a9x() && (pA = u0), a9v)
		for (var eY = a9v.length, a7 = 0; a7 < eY; a7++)
			for (var er = 0; er < 3; er++) pA = pA.replace("{" + (10 * er + a7) + "}", a9v[a7]);
	return pA
}

function bw() {
	this.data = new a9y;
	var a9z = (new aA0).L84,
		aA1 = (this.a9w = a9z, !1);
	this.dU = function() {
		var eY, g;
		aA1 = !1, "en" !== bf.dp.data[12].value.split("-")[0].toLowerCase() ? bf.dp.data[12].value === bf.dp.data[145].value && 0 < bf.dp.data[146].value && (eY = bf.dp.data[146].value, (g = bf.pm.u6(eY, !1)).length === eY) && !!b6.pd.a1L(g) &&
			function(g) {
				var eY = g.length,
					aA7 = bf.pm.u6(eY, !0);
				if (eY !== aA7.length) return !1;
				if (!b6.pd.a1L(aA7)) return !1;
				for (var kP = a9z.length, a7b = new Array(kP), aA8 = kP === eY, g1 = Math.min(eY, kP), a7 = 0; a7 < kP; a7++)
					if (a7b[a7] = a9z[a7], a7 < eY && aA7[a7] === a7b[a7]) a7b[a7] = g[a7];
					else {
						aA8 = !1;
						for (var es = 0; es < g1; es++)
							if (aA7[es] === a7b[a7]) {
								a7b[a7] = g[es];
								break
							}
					} return b3.a9w = a7b, aA8
			}(g) || (aA1 = !0) : b3.a9w = a9z
	}, this.dW = function() {
		bc.dV(), aA.dV(), ba.dV(), bZ.dV(), aK.dU(), bl = new dr
	}, this.a9x = function() {
		return this.a9w === a9z || !a9z.length
	}, this.aA9 = function() {
		var aAA;
		aA1 && (aA1 = !1, 0 !== a9z.length) && (aAA = bf.dp.data[12].value, aw.aAB.aAC(0, aAA.slice(0, 20)))
	}, this.aAD = function(g) {
		g.length === a9z.length && (this.a9w = g, bf.rC.rD(145, bf.dp.data[12].value), bf.rC.rD(146, g.length), bf.pm.uC(g, !1), bf.pm.uC(a9z, !0), 0 === aW.zo()) && 5 === n.rs && n.s.aAE()
	}
}

function a9y() {
	var g = ["aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts", "btx",
		"bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "en", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fil", "fj",
		"fo", "fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac",
		"kek", "kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk",
		"ml", "mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "nb", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu",
		"rn", "ro", "rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "sh", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl",
		"tn", "to", "tpi", "tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu"
	];
	this.aAF = function() {
		for (var aAG = [], eY = g.length, a7 = 0; a7 < eY; a7++) aAG.push(g[a7]);
		for (eY++, aAG.unshift(bf.dp.data[12].u0), a7 = 1; a7 < eY; a7++)
			if (aAG[a7] === aAG[0]) {
				aAG.splice(a7, 1), eY--;
				break
			} try {
			if ("undefined" == typeof Intl) return aAG;
			for (a7 = 0; a7 < eY; a7++) {
				var pA = new Intl.DisplayNames([aAG[a7]], {
					type: "language"
				}).of(aAG[a7]);
				pA !== aAG[a7] && (aAG[a7] = aAG[a7] + ": " + pA)
			}
		} catch (e) {
			console.log("error 3646: " + e)
		}
		return aAG
	}, this.aAI = function(aAJ) {
		for (var pA = bf.dp.data[12].value, eY = aAJ.length, a7 = 0; a7 < eY; a7++)
			if (pA === aAJ[a7].split(":")[0]) return a7;
		return 0
	}
}

function aA0() {
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
		"Slightly Decrease Percentage Bar", "Switch UI Visibility", "Zoom In", "Zoom Out", "Camera Left", "Camera Right", "Camera Up", "Camera Down", "Avg. Attack Strength", "Land Attacks", "Ships launched", "Bots conquered", "Humans conquered",
		"Attacked by Bots", "Attacked by Humans", "Territorial Loss", "Received Support", "Overall Income", "Additional Costs", "Land War Losses", "Naval Losses", "Transmitted Support", "Overall Expenses", "Mountain Attacks", "Ships landed",
		"Territory", "Numbers", "Statistics", "Neutral", "Red", "Green", "Blue", "Yellow", "Magenta", "Cyan", "White", "Black", "Ship launched!", "Ship selected!", "Ship on the way!"
	]
}

function da() {
	var ef, eh, j7, sn, aAK, aAL, aAM, aAN, aAO, a1, a1v, aAP;
	this.xD = !1, this.dU = function(pA, aAQ) {
		if (1 === u.id && 13 <= u.f1 && u.f1 < 18) return aAQ ? void(a1v = pA) : a1v !== pA ? void 0 : void u.u4.saveString(200, pA);
		aAQ && (a1v = pA, (aAP = document.createElement("a")).appendChild(document.createTextNode(a1v)), this.xD = !0, aAP.title = a1v, aAP.target = "_blank", aAP.href = a1v, aAP.style.textAlign = "center", aAP.style.color = b7.mY, aAP.style
			.position = "absolute", aAP.style.padding = "0px", aAP.style.margin = "0px", this.resize(), document.body.appendChild(aAP), bb.dc = !0)
	}, this.r1 = function() {
		return !(!this.xD || (document.body.removeChild(aAP), this.xD = !1))
	}, this.gm = function(hd, he) {
		return !!this.xD && ((hd < ef || he < eh || ef + a1 < hd || eh + j7 < he || ef + a1 - sn < hd && he < eh + sn) && (bb.dc = !0, this.xD = !1, document.body.removeChild(aAP)), !0)
	}, this.resize = function() {
		var a48, aAR;
		this.xD && (aAN = Math.floor(.8 * (u.v.r8() ? at.a1 > at.j7 ? .6 : .55 : .4) * at.pV), sn = Math.floor(.15 * aAN), aAK = Math.floor(.35 * sn), aAL = Math.floor(.5 * sn), aAM = Math.floor(2.5 * aAL), j7 = sn + aAK + 3 * aAL, a48 = b6.pT
			.rV(1, aAK / at.pZ), aAO = Math.floor(at.pZ * aM.measureText(a1v, a48)), aAR = a1 = (aAN < aAO ? aAO : aAN) + 2 * aAM, a1 = Math.min(a1, at.a1 - 2 * (u.v.r8() ? 2 : 1) * bY.gap), a48 = b6.pT.rV(1, a1 / aAR * aAK / at.pZ), aAO =
			Math.floor(at.pZ * aM.measureText(a1v, a48)), ef = Math.floor((at.a1 - a1) / 2), eh = Math.floor((at.j7 - j7) / 2), aAP.style.font = a48, aAP.style.top = Math.floor((eh + 1.4 * aAL + sn) / at.pZ) + "px", aAP.style.left = Math
			.floor((ef + (a1 - aAO) / 2) / at.pZ) + "px")
	}, this.tU = function() {
		this.xD && (tV.fillStyle = b7.mV, tV.fillRect(ef, eh + sn, a1, j7 - sn), tV.fillStyle = b7.nc, tV.fillRect(ef, eh, a1, sn), tV.fillStyle = b7.mY, tV.lineWidth = bY.xg, tV.strokeStyle = b7.mY, tV.strokeRect(ef, eh, a1, j7), tV.fillRect(ef,
			eh + sn, a1, bY.xg), tV.font = b6.pT.rV(1, .48 * sn), b6.pT.textAlign(tV, 1), b6.pT.textBaseline(tV, 1), tV.fillText("You are leaving Territorial.io!", Math.floor(ef + (a1 - .5 * sn) / 2), Math.floor(eh + .55 * sn)), aI.a4J(
			Math.floor(ef + a1 - .8 * sn), Math.floor(eh + .25 * sn), Math.floor(.5 * sn)), tV.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function dY() {
	var gap, a8u, ef = [0, 0, 0, 0, 0],
		eh = [0, 0, 0, 0, 0],
		mA = [1, 1, 1, 1, 1],
		f0 = [!0, !0, !0, !1, !1],
		et = (this.fK = [!0, !0, !0, !1, !1], null);
	this.aAS = function(a1T, aAT) {
		et = a1T, f0 = aAT, a8u = [bG.aAU, bG.zj, bG.aAV, bG.aAV, bG.aAW], this.dU()
	}, this.dU = function() {
		if (aX.sK()) {
			var a7, rz = Math.floor((u.v.r8() ? .261 : .195) * at.pV),
				s0 = Math.floor(.9 * rz),
				a6a = Math.floor(.17 * s0);
			if (gap = u.v.r8() ? 2 * bY.gap : bY.gap, mA[0] = rz / et[0].width, mA[1] = s0 / et[1].width, mA[2] = a6a / et[2].height, mA[3] = a6a / et[3].height, mA[4] = a6a / et[4].height, mA[2] *= 1.7, mA[3] *= 1.07, ef[0] = gap, ef[1] = gap,
				ef[2] = gap, ef[3] = gap, ef[4] = Math.floor(2 * gap + mA[3] * et[3].width), eh[0] = gap, eh[1] = eh[0] + gap + mA[0] * et[0].height, eh[2] = eh[1] + gap + mA[1] * et[1].height, eh[3] = eh[2] + gap + mA[2] * et[2].height, eh[4] =
				eh[3], !f0[0])
				for (a7 = 0; a7 < 5; a7++) eh[a7] -= mA[0] * et[0].height + gap;
			if (!f0[1])
				for (a7 = 2; a7 < 5; a7++) eh[a7] -= mA[1] * et[1].height + gap
		}
	}, this.xD = function() {
		return !(7 === aW.zo() && u.v.r8())
	}, this.gm = function(hd, he) {
		if (et && this.xD())
			for (var a7 = f0.length - 1; 0 <= a7; a7--)
				if (f0[a7] && this.fK[a7] && ef[a7] < hd && eh[a7] < he && hd < ef[a7] + mA[a7] * et[a7].width && he < eh[a7] + mA[a7] * et[a7].height) return n.o(9, n.rs, new aAX("You are leaving Territorial.io.", b6.pT.a1u(a8u[a7]))), !0;
		return !1
	}, this.tU = function() {
		if (et && this.xD()) {
			var a7;
			for (tV.imageSmoothingEnabled = !0, a7 = 0; a7 < 5; a7++) f0[a7] && this.fK[a7] && (tV.setTransform(mA[a7], 0, 0, mA[a7], ef[a7], eh[a7]), tV.drawImage(et[a7], 0, 0));
			tV.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function dR() {
	this.aAY = 0, this.aAZ = null, this.sv = null, this.qg = null, this.s = null, this.t4 = null, this.qy = null, this.aAa = new aAb, this.zs = 0, this.dU = function() {
		this.aAY = bC.rv.uy(bf.dp.data[105].value), this.sv = new aAc, this.qg = new aAd, this.s = new aAe, this.t4 = new aAf, this.qy = new aAg, this.s.dU(), this.zs = 1, aW.setState(0)
	}, this.a01 = function() {
		this.aAZ = null, this.sv = null, this.qg = null, this.s = null, this.t4 = null, this.qy = null, this.zs = 0, Math.random() < .001 && console.log(L(122))
	}
}

function aAc() {
	function aAw(g, sD, sE) {
		var aAx = g[sD];
		g[sD] = g[sE], g[sE] = aAx
	}
	this.sw = [
		[],
		[],
		[],
		[]
	], this.sx = [0, 0, 0, 0], this.aAh = function(aAi, qr, username, qu, qx, aAj, elo, color, uW) {
		this.sw[aAi].push(this.aAk(qr, username, qu, qx, aAj, elo, color, uW)), bk.aAY === qr && (bk.aAZ = this.sw[aAi][this.sw[aAi].length - 1]), bk.s.aAl += 29 === n.rs && bk.s.qY[0] === aAi && 1 === bk.s.qY[2]
	}, this.aAk = function(qr, username, qu, qx, aAj, elo, color, uW) {
		return {
			qr: qr,
			username: username,
			qu: qu,
			qx: qx,
			aAj: aAj,
			elo: elo,
			color: color,
			uW: uW
		}
	}, this.aAm = function(e0, aAi, qu, qx, aAj, elo, uW) {
		e0 = this.sw[aAi][e0];
		e0.qu = qu, e0.qx = qx, e0.aAj = aAj, e0.elo = elo, e0.uW = uW, bk.s.aAl += 29 === n.rs && bk.s.qY[0] === aAi && 1 === bk.s.qY[2]
	}, this.aAn = function(e0, aAi, aAo) {
		e0 = this.sw[aAi][e0];
		e0.aAp = e0.username, e0.username = "Censored" + e0.qr % 1e3, aAo && (e0.username = "[" + b6.zG.zK(e0.aAp) + "] " + e0.username), bk.s.aAl += 29 === n.rs && bk.s.qY[0] === aAi && 1 === bk.s.qY[2]
	}, this.aAq = function(e0, aAr, aAs) {
		var player = this.sw[aAr][e0];
		this.aAt(e0, aAr), this.sw[aAs].push(player), bk.s.aAl += 29 === n.rs && bk.s.qY[0] === aAs && 1 === bk.s.qY[2]
	}, this.aAt = function(e0, aAr) {
		var sv = this.sw[aAr];
		e0 >= this.sx[aAr] ? sv[e0] = sv[sv.length - 1] : (this.sx[aAr]--, 2 === aAr ? (sv.splice(this.sx[aAr] + 1, 0, sv[sv.length - 1]), sv.splice(e0, 1)) : (sv[e0] = sv[this.sx[aAr]], sv[this.sx[aAr]] = sv[sv.length - 1])), sv.pop(), bk.s
			.aAl += 29 === n.rs && bk.s.qY[0] === aAr && 1 === bk.s.qY[2]
	}, this.aAu = function(e0, qX) {
		bk.s.aAl += 29 === n.rs && bk.s.qY[0] === qX && 1 === bk.s.qY[2];
		var sv = this.sw[qX],
			pL = sv[e0];
		if (2 === qX)
			if (e0 >= this.sx[qX]) {
				for (var aAv = this.sx[qX], elo = pL.elo; aAv && elo > sv[aAv - 1].elo;) aAv--;
				sv[e0] = sv[this.sx[qX]], sv.splice(this.sx[qX]++, 1), sv.splice(aAv, 0, pL)
			} else sv.splice(this.sx[qX]--, 0, pL), sv.splice(e0, 1);
		else e0 >= this.sx[qX] ? aAw(sv, this.sx[qX]++, e0) : aAw(sv, --this.sx[qX], e0)
	}
}

function aAb() {
	this.dd = function(e0) {
		if ((sx = bk.sv.sx[e0]) < 2) return !1;
		var qZ = bk.s.qa[e0],
			aAy = 9 === qZ.aAz ? 333 : 512,
			sx = Math.min(sx, aAy);
		8 === qZ.aAz && (sx -= sx % 2);
		aAy = bk.sv.sw[e0].splice(0, sx), bk.sv.sx[e0] -= sx, sx = function(aB0) {
			if (bk.aAZ)
				for (var eY = aB0.length, qr = bk.aAZ.qr, a7 = 0; a7 < eY; a7++)
					if (aB0[a7].qr === qr) return a7;
			return -1
		}(aAy);
		return -1 === sx ? (bk.s.aAl += 29 === n.rs && bk.s.qY[0] === e0 && 1 === bk.s.qY[2], !1) : (8 === qZ.aAz && (qZ.aB3 = (qZ.aB3 + (sx >> 1)) % 1024, e0 = sx - sx % 2, sx %= 2, aAy = aAy.slice(e0, 2 + e0)), ar.dU(qZ, aAy, sx), !0)
	}, this.aB4 = function(qZ, aB0, aB1) {
		var eb = a9.data = new a31,
			aB8 = (eb.spawningSeed = qZ.spawningSeed, qZ.aAz < 7 ? (eb.gameMode = 1, eb.numberTeams = qZ.aAz + 2) : 9 === qZ.aAz ? (eb.gameMode = eb.isZombieMode = 1, eb.numberTeams = 2) : (eb.gameMode = 0, eb.battleRoyaleMode = 7 === qZ.aAz ?
				0 : 10 === qZ.aAz ? 1 : 2), eb.selectedPlayer = aB1, eb.isContest = qZ.aB5, eb.mapType = bO.aB6(qZ.eE) ? 0 : 1, bO.aB7(eb, qZ.eE), eb.mapSeed = qZ.mapSeed, eb.humanCount = aB0.length);
		eb.selectableSpawn = 1 === eb.gameMode || aB8 < 100, eb.colorsData = new Uint32Array(aB8), eb.playerNamesData = new Array(aB8);
		for (var a7 = 0; a7 < aB8; a7++) eb.colorsData[a7] = aB0[a7].color, eb.playerNamesData[a7] = aB0[a7].username;
		if (2 === eb.battleRoyaleMode)
			for (eb.elo = new Uint16Array(aB8), a7 = 0; a7 < aB8; a7++) eb.elo[a7] = aB0[a7].elo;
		aW.setState(8), bO.a3(qZ.eE, eb.mapSeed), a9.a35(), a9.a34 = 2
	}
}

function aAd() {
	var ds = ["", "", "", "Admin", "Clan Leader", "1v1", "Clan Member", "", "Battle Royale", "Wealthy Player"],
		aB9 = [b7.mm, b7.mm, b7.mn, b7.nG, b7.nH, b7.n3, b7.nM, b7.mn, b7.ne, b7.nU],
		aBA = [
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
		aBB = ["Your account is too new!", "The server couldn't process your request.", "Spam detected!", "You are muted!", "Player couldn't be found.", "You don't have permission for this operation!"],
		aBC = [
			["", " was muted. Duration: 1 Hour"],
			["The username of ", " was censored. Duration: 1 Day"]
		];
	this.qh = function(code) {
		return {
			id: 13,
			fontSize: this.aBD(0),
			ql: [],
			qo: [{
				pA: "[Private Message] " + aBB[code],
				color: b7.nF,
				r0: 0
			}]
		}
	}, this.qi = function(qX, aBF) {
		var j7 = this,
			a23 = j7.aBG(qX, aBF.qr);
		return a23 || ((a23 = bk.sv.aAk(aBF.qr, bB.rv.xx(aBF.qr, 5), 1, 1e6, 1e6, 0, 0, 0)).qq = 1), 0 === aBF.id ? {
			id: aBF.id,
			fontSize: j7.aBD(a23.qu, a23.qx),
			ql: [a23],
			qo: [{
				pA: ": " + aBF.k,
				color: b7.mY,
				r0: j7.qw(a23.qx)
			}]
		} : 14 === aBF.id ? {
			id: aBF.id,
			fontSize: j7.aBD(0, 0),
			ql: [null, a23],
			qo: [{
				pA: aBC[aBF.aBH][0],
				color: b7.nF,
				r0: 0
			}, {
				pA: aBC[aBF.aBH][1],
				color: b7.nF,
				r0: 0
			}]
		} : ((qX = j7.aBG(qX, aBF.target)) || ((qX = bk.sv.aAk(aBF.target, bB.rv.xx(aBF.target, 5), 1, 1e6, 1e6, 0, 0, 0)).qq = 1), {
			id: aBF.id,
			fontSize: j7.aBD(0, 0),
			ql: [a23, qX],
			qo: [{
				pA: function(aBF) {
					if (aBF.id < 15) return bl.e3(aBF.id - 1, bl.dx[aBF.id - 1][aBF.value]);
					return 0 === aBF.aBH ? 32768 <= aBF.value ? " voted with " + (aBF.value - 32768 + 1) + " gold against " : " voted with " + (aBF.value + 1) + " gold for " : 1 === aBF.aBH ? " sent " + (aBF.value / 100)
						.toFixed(2) + " Gold to " : " voted with " + aBF.value + " points for "
				}(aBF),
				color: b7.nF
			}, {
				pA: 15 === aBF.id ? function(aBF) {
					return 0 === aBF.aBH ? 32768 <= aBF.value ? " to weaken the latter's admin position." : " to strengthen the latter's admin position." : 1 === aBF.aBH ? "." : " to acknowledge the latter as clan leader."
				}(aBF) : bl.e5(aBF.id - 1, bl.dx[aBF.id - 1][aBF.value]),
				color: b7.nF
			}]
		})
	}, this.qs = function(player, qX, qp) {
		return (2 === qX ? "(" + (player.elo / 10).toFixed(1) + ") " : "") + player.username + (qp && player.aAp ? " (" + player.aAp + ")" : "")
	}, this.qt = function(qu) {
		return aB9[qu]
	}, this.aBD = function(qu, qx) {
		return qu < 3 || 7 === qu ? aBA[qu][0] : 4 === qu ? aBA[qu][qx < 1 ? 0 : qx < 10 ? 1 : 2] : aBA[qu][qx < 10 ? 0 : 1]
	}, this.qw = function(qx) {
		return 0 === qx
	}, this.aBG = function(qX, qr) {
		for (var sw = bk.sv.sw, sv = sw[qX], eY = sv.length, a7 = 0; a7 < eY; a7++)
			if (qr === sv[a7].qr) return sv[a7];
		for (var es = 0; es < sw.length; es++)
			if (qX !== es)
				for (eY = (sv = sw[es]).length, a7 = 0; a7 < eY; a7++)
					if (qr === sv[a7].qr) return sv[a7];
		return null
	}, this.qv = function(pL) {
		return !!bk.aAZ && pL.qr === bk.aAZ.qr
	}, this.aBK = function(sv, aBL, aBM) {
		var zI = [];
		loop: for (var a7 = aBL; a7 < aBM; a7++) {
			var zJ = b6.zG.zK(sv[a7].username);
			if (zJ) {
				for (var es = zI.length - 1; 0 <= es; es--)
					if (zJ === zI[es].name) {
						zI[es].g1++;
						continue loop
					} zI.push({
					name: zJ,
					g1: 1
				})
			}
		}
		if (zI.sort(function(er, es) {
				return es.g1 - er.g1
			}), 0 === zI.length) return "";
		for (var pA = zI[0].name + ": " + zI[0].g1, a7 = 1; a7 < zI.length; a7++) pA += "   " + zI[a7].name + ": " + zI[a7].g1;
		return pA
	}, this.aBN = function(qu, qx, aAj) {
		return 0 === ds[qu].length ? "Rank: " + (qx + 1) : ds[qu] + " Rank: " + (qx + 1) + (3 !== qu && aAj < 100 ? "   " + ds[3] + " Rank: " + (aAj + 1) : "")
	}
}

function aAg() {
	var aBO = null;
	this.qz = function(e, pL) {
		var a6h = e.target.getBoundingClientRect();
		this.show(a6h.left, a6h.top, pL), e.target.addEventListener("mouseleave", function remove() {
			e.target.removeEventListener("mouseleave", remove), bk.qy && bk.qy.r1(1)
		})
	}, this.show = function(ef, eh, pL, rU) {
		(aBO = aBO || new rQ).show(ef, eh, function(pL) {
			return pL.username + "   " + bk.qg.aBN(pL.qu, pL.qx, pL.aAj) + function(pL) {
				pL = pL.uW;
				if (pL < 1e3) return "   Gold: " + pL;
				if ((pL %= 1024) < 1e3) return "   Gold: " + pL + "k";
				return "   Gold: " + (pL - 999) + "M"
			}(pL) + (2 === bk.s.qY[0] ? "   Elo: " + (pL.elo / 10).toFixed(1) : "")
		}(pL), rU)
	}, this.r1 = function(rX) {
		aBO && aBO.r1(rX)
	}
}

function aAe() {
	function aBU(aBX) {
		bk.s.aAl && 1 === bk.s.qY[2] && n.aBY(29).aBZ(), bk.s.aAl = 0, n.aBY(29).aBa(), 0 !== bk.s.qa[bk.s.qY[0]].si && !aBX || n.aBY(29).aBb()
	}
	this.qa = new Array(4), this.qY = [0, 0, 1, 0], this.aAl = 0, this.aBR = [0, 0], this.qd = [], this.dU = function() {
		for (var a7 = 0; a7 < this.qa.length; a7++) this.qa[a7] = new aBS;
		this.qY[0] = bf.dp.data[158].value
	}, this.aBT = function() {
		aBU(!0)
	}, this.aBV = function() {
		for (var a7 = 0; a7 < bk.s.qa.length; a7++) {
			var qZ = bk.s.qa[a7];
			0 === qZ.si ? qZ.aBc = 0 : (qZ.aBd = Math.max(qZ.aBd - qZ.aBc % 2, 0), qZ.aBc++)
		}
		aBU(!1)
	}, this.aBe = function(qX) {
		this.qY[0] !== qX || this.qY[2] || n.aBY(29).aBf()
	}
}

function aAf() {
	var aBg = null,
		aBh = null,
		aBi = 0,
		aBj = 0,
		aBk = null;

	function aBm() {
		0 !== aBh.qu && (bk.t4.r1(), n.o(8, 29, new rt(25, {
			ru: 0,
			qr: bB.rv.xx(aBh.qr, 5),
			rr: 0
		}, 29)))
	}

	function aBn() {
		var ef = aBg.ef,
			eh = aBg.eh;
		bk.t4.r1(), aBg = new t0([new q("Kick User", aBs, aBy(0)), new q("Block Chat", aBt, aBy(1)), new q("Censor Username", aBu, aBy(2)), new q("Elo Deduction", aBv, aBy(3)), new q("Gold Seizure", aBw, aBy(4))]), aBr(ef, eh), aBi = 2, aBj = 1
	}

	function aBy(id) {
		return !bk.aAZ || bk.qg.qv(aBh) ? 1 : 4 === id && 9 === bk.aAZ.qu && bk.aAZ.qx < aBh.qx ? 0 : bk.aAZ.aAj >= aBh.qx || 0 === id && aBh.qx < 200 ? 1 : 1 - bl.dy(id, bk.aAZ.aAj, 0)
	}

	function aBq() {
		return !bk.aAZ || bk.qg.qv(aBh) ? 1 : 0
	}

	function aBz(id, e0) {
		if (!bk.aAZ) return 1;
		if (bk.qg.qv(aBh)) return 1;
		let qx = bk.aAZ.aAj;
		return (qx = 4 === id && 9 === bk.aAZ.qu ? Math.min(bk.aAZ.qx, qx) : qx) >= aBh.qx ? 1 : 1 - bl.dy(id, qx, e0)
	}

	function aBp() {
		var ef = aBg.ef,
			eh = aBg.eh,
			aC0 = (bk.t4.r1(), aBq());
		aBg = new t0([new q(bl.dx[5][0], function() {
			aBx(5, 0)
		}, aC0), new q(bl.dx[5][1], function() {
			aBx(5, 1)
		}, aC0), new q(bl.dx[5][2], function() {
			aBx(5, 2)
		}, aC0), new q(bl.dx[5][3], function() {
			aBx(5, 3)
		}, aC0)]), aBr(ef, eh), aBj = aBi = 2
	}

	function aBx(id, value) {
		aw.aC1.aC2(5, {
			id: id,
			value: value,
			qr: aBh.qr
		})
	}

	function aBs() {
		var ef = aBg.ef,
			eh = aBg.eh;
		bk.t4.r1(), aBg = new t0([new q(bl.dx[0][0], function() {
			aBx(0, 0)
		}, aBz(0, 0)), new q(bl.dx[0][1], function() {
			aBx(0, 1)
		}, aBz(0, 1)), new q(bl.dx[0][2], function() {
			aBx(0, 2)
		}, aBz(0, 2))]), aBr(ef, eh), aBi = 3, aBj = 0
	}

	function aBt() {
		var ef = aBg.ef,
			eh = aBg.eh;
		bk.t4.r1(), aBg = new t0([new q(bl.dx[1][0], function() {
			aBx(1, 0)
		}, aBz(1, 0)), new q(bl.dx[1][1], function() {
			aBx(1, 1)
		}, aBz(1, 1)), new q(bl.dx[1][2], function() {
			aBx(1, 2)
		}, aBz(1, 2)), new q(bl.dx[1][3], function() {
			aBx(1, 3)
		}, aBz(1, 3)), new q(bl.dx[1][4], function() {
			aBx(1, 4)
		}, aBz(1, 4))]), aBr(ef, eh), aBi = 3, aBj = 1
	}

	function aBu() {
		var ef = aBg.ef,
			eh = aBg.eh;
		bk.t4.r1(), aBg = new t0([new q(bl.dx[2][0], function() {
			aBx(2, 0)
		}, aBz(2, 0)), new q(bl.dx[2][1], function() {
			aBx(2, 1)
		}, aBz(2, 1)), new q(bl.dx[2][2], function() {
			aBx(2, 2)
		}, aBz(2, 2))]), aBr(ef, eh), aBi = 3, aBj = 2
	}

	function aBv() {
		var ef = aBg.ef,
			eh = aBg.eh;
		bk.t4.r1(), aBg = new t0([new q(bl.dx[3][0], function() {
			aBx(3, 0)
		}, aBz(3, 0)), new q(bl.dx[3][1], function() {
			aBx(3, 1)
		}, aBz(3, 1)), new q(bl.dx[3][2], function() {
			aBx(3, 2)
		}, aBz(3, 2))]), aBr(ef, eh), aBj = aBi = 3
	}

	function aBw() {
		var ef = aBg.ef,
			eh = aBg.eh;
		bk.t4.r1(), aBg = new t0([new q(bl.dx[4][0], function() {
			aBx(4, 0)
		}, aBz(4, 0)), new q(bl.dx[4][1], function() {
			aBx(4, 1)
		}, aBz(4, 1)), new q(bl.dx[4][2], function() {
			aBx(4, 2)
		}, aBz(4, 2)), new q(bl.dx[4][3], function() {
			aBx(4, 3)
		}, aBz(4, 3)), new q(bl.dx[4][4], function() {
			aBx(4, 4)
		}, aBz(4, 4))]), aBr(ef, eh), aBi = 3, aBj = 4
	}

	function aBr(ef, eh, t6) {
		aBg.show(ef, eh, t6), bk.qy.show(aBg.ef, aBg.eh, aBh, 1)
	}
	this.aBl = function(e, pL) {
		aBi = 1, aBh = pL, aBg = new t0([new q(L(123), aBm, 0 === aBh.qu ? 1 : 0), new q(L(124), aBn, function() {
			if (!bk.aAZ) return 1;
			if (bk.qg.qv(aBh)) return 1;
			if (!(9 === bk.aAZ.qu && bk.aAZ.qx < aBh.qx)) {
				if (100 <= bk.aAZ.aAj) return 1;
				if (bk.aAZ.aAj >= aBh.qx) return 1
			}
			return 0
		}()), new q(L(125), aBp, aBq())]), aBr((aBk = {
			clientX: e.clientX,
			clientY: e.clientY
		}).clientX, aBk.clientY, 1)
	}, this.a0j = function(code) {
		return 29 === n.rs && !(!aBh || !aBg || (code.length < 1 || ("Escape" === code ? bk.t4.r1() : (b6.zG.startsWith(code, "Numpad") || b6.zG.startsWith(code, "Digit")) && (code = parseInt(code[code.length - 1], 10), isNaN(code) || (0 ===
			aBi ? this.aBl(aBk, aBh) : 1 === aBi ? (code <= 1 ? aBm : 2 === code ? aBn : aBp)() : 2 === aBi ? 1 === aBj ? (code <= 1 ? aBs : 2 === code ? aBt : 3 === code ? aBu : 4 === code ? aBv : aBw)() : (aBx(5, bH.p0(
				code - 1, 0, 3)), bk.t4.r1()) : (aBx(aBj, bH.p0(code - 1, 0, bl.dx[aBj].length - 1)), bk.t4.r1())))), 0))
	}, this.r1 = function() {
		aBi = 0, aBg && aBg.r1(), aBg = null, bk.qy.r1()
	}
}

function aBS() {
	this.si = 0, this.eE = 0, this.mapSeed = 0, this.aAz = 0, this.aC3 = 0, this.aC4 = 0, this.aB5 = 0, this.aBd = 0, this.spawningSeed = 0, this.zu = 0, this.aB3 = 0, this.qb = [], this.qc = 1048575, this.aBc = 0
}

function cJ() {
	var aC5, aC6, aC7;

	function aCC(a7) {
		var button = aU.q4[a7],
			ef = button.ef,
			eh = button.eh,
			a1 = button.a1,
			j7 = button.j7;
		tV.fillStyle = button.aCA, tV.fillRect(ef, eh, a1, j7), a7 === aC5 && (tV.fillStyle = aC7, tV.fillRect(ef, eh, a1, j7)), tV.lineWidth = bY.xg, tV.strokeStyle = aC6, tV.strokeRect(ef, eh, a1, j7),
			function(button) {
				var ef = button.ef,
					eh = button.eh,
					a1 = button.a1,
					j7 = button.j7;
				b6.pT.textAlign(tV, 1), b6.pT.textBaseline(tV, 1), tV.font = button.font, tV.fillStyle = aC6, tV.fillText(button.a5M, Math.floor(ef + a1 / 2), Math.floor(eh + j7 / 2 + .1 * button.fontSize))
			}(button)
	}
	this.a1 = 0, this.j7 = 0, this.eh = 0, this.gap = 0, this.dU = function() {
		aC5 = -1, aC6 = b7.mY, aC7 = "rgba(255,255,255,0.16)", this.q4 = new Array(7), this.j7 = Math.floor((u.v.r8() ? .123 : .093) * at.pV), this.a1 = Math.floor((u.v.r8() ? 3.96 : 4.2) * this.j7), this.gap = Math.floor(.025 * this.a1);
		var aC8 = Math.floor(.26 * this.j7),
			aC9 = b6.pT.rV(1, aC8);
		this.q4[0] = {
			ef: 0,
			eh: 0,
			a1: Math.floor(.6 * this.a1 - this.gap / 2),
			j7: this.j7,
			a5M: "Multiplayer",
			font: aC9,
			aCA: "rgba(22,88,22,0.8)",
			fontSize: aC8
		}, aC8 = Math.floor(.18 * this.j7), aC9 = b6.pT.rV(1, aC8), this.q4[1] = {
			ef: 0,
			eh: 0,
			a1: this.a1 - this.q4[0].a1 - this.gap,
			j7: this.j7,
			a5M: "Single Player",
			font: aC9,
			aCA: "rgba(22,88,88,0.8)",
			fontSize: aC8
		}, this.q4[2] = {
			ef: 0,
			eh: 0,
			a1: this.a1,
			j7: Math.floor(.3 * this.j7),
			a5M: "",
			font: this.q4[1].font,
			aCA: "rgba(100,0,0,0.8)",
			fontSize: this.q4[1].fontSize
		}, this.q4[3] = {
			ef: 0,
			eh: 0,
			a1: this.a1,
			j7: this.j7,
			a5M: "Back",
			font: this.q4[0].font,
			aCA: "rgba(0,0,0,0.8)",
			fontSize: this.q4[0].fontSize
		}, this.q4[4] = {
			ef: 0,
			eh: 0,
			a1: this.a1,
			j7: Math.floor(.3 * this.j7),
			a5M: "The game was updated!",
			font: this.q4[1].font,
			aCA: "rgba(100,0,0,0.8)",
			fontSize: this.q4[1].fontSize
		}, this.q4[5] = {
			ef: 0,
			eh: 0,
			a1: this.q4[0].a1,
			j7: Math.floor(.8 * this.j7),
			a5M: "Reload",
			font: this.q4[0].font,
			aCA: "rgba(0,100,0,0.8)",
			fontSize: this.q4[0].fontSize
		}, this.q4[6] = {
			ef: 0,
			eh: 0,
			a1: this.q4[1].a1,
			j7: this.q4[5].j7,
			a5M: "Back",
			font: this.q4[0].font,
			aCA: "rgba(0,0,0,0.8)",
			fontSize: this.q4[0].fontSize
		}, this.a7e()
	}, this.a7e = function() {
		this.eh = Math.floor(.54 * at.j7), this.q4[0].ef = Math.floor(.5 * at.a1 - .5 * this.a1), this.q4[1].ef = this.q4[0].ef + this.q4[0].a1 + this.gap, this.q4[2].ef = this.q4[3].ef = this.q4[0].ef, this.q4[4].ef = this.q4[5].ef = this.q4[0]
			.ef, this.q4[6].ef = this.q4[1].ef, this.q4[0].eh = Math.floor(.54 * at.j7), this.q4[1].eh = this.q4[0].eh, this.q4[2].eh = Math.floor((at.j7 - this.q4[2].j7 - this.q4[3].j7 - this.gap) / 2), this.q4[3].eh = this.q4[2].eh + this.q4[2]
			.j7 + this.gap, this.q4[4].eh = Math.floor((at.j7 - this.q4[4].j7 - this.q4[5].j7 - this.gap) / 2), this.q4[5].eh = this.q4[6].eh = this.q4[4].eh + this.q4[4].j7 + this.gap
	}, this.aCB = function() {
		aCC(0), aCC(1)
	}, this.aCD = function() {
		aCC(2), aCC(3)
	}, this.aCE = function() {
		aCC(4), aCC(5), aCC(6)
	}, this.a0B = function(ef, eh, lH) {
		var a7 = -1;
		return 0 === aW.zo() ? a7 = this.a0f(ef, eh, 0, 2) : 3 === aW.zo() ? a7 = this.a0f(ef, eh, 3, 1) : 5 === aW.zo() && (a7 = this.a0f(ef, eh, 5, 2)), aC5 !== a7 && (aC5 = a7, lH) && (bb.dc = !0), -1 !== a7 && (aP.qV(), !0)
	}, this.a0f = function(ef, eh, aCF, size) {
		for (var a7 = aCF; a7 < aCF + size; a7++)
			if (ef >= this.q4[a7].ef && eh >= this.q4[a7].eh && ef <= this.q4[a7].ef + this.q4[a7].a1 && eh <= this.q4[a7].eh + this.q4[a7].j7) return a7;
		return -1
	}
}

function cK() {
	var aCH, aCI, a5U, a5e, a6S, aCJ, aCK, aCL, aCM, a48, fontSize, li, aCN, aCP, aCO = 0;

	function aCS() {
		return aw.s.aCT[(aCN + aCO) % aw.s.aCU]
	}

	function aCX() {
		__fx.customLobby.isActive() ? (l.zz(3249), __fx.customLobby.setActive(false)) : l.zz(3249)
	}

	function aCd(eh, a7L, si) {
		var ly = Math.floor((at.a1 - a5e) / 2) + aCK,
			mB = ly + Math.floor(si * (a5e - 2 * aCK));
		tV.lineWidth = a7L, tV.beginPath(), tV.moveTo(ly, eh), tV.lineTo(mB, eh), tV.lineTo(Math.floor(ly - aCK + si * a5e), eh + a5U), tV.lineTo(ly - aCK, eh + a5U), tV.closePath()
	}
	this.dU = function() {
		aW.setState(6), aCH = 0, aCI = 1, aCL = "rgba(0,220,120,0.4)", aCM = "rgba(0,0,0,0.8)", this.resize(), bb.dc = !0, aCN = 0, aCP = !1, aCN++, li = bb.lo, aw.s.aCV(aCS(), 4) && (aCP = !0, aw.aC1.aCW(aCS()))
	}, this.resize = function() {
		a5e = Math.floor((u.v.r8() ? .5 : .25) * at.pV), a6S = a5e + 12, a5U = Math.floor(.125 * a5e), aCK = 3 * a5U, aCJ = Math.floor(.225 * a5e), fontSize = Math.floor(.3 * a5U), a48 = b6.pT.rV(0, fontSize)
	}, this.aCR = function(er) {
		aCO = er
	}, this.zr = function(zl) {
		zl === aCS() && (aCP = !1, aCX())
	}, this.aCY = function(zl) {
		6 !== aW.zo() || aCP || (li = bb.lo, aCP = !0)
	}, this.gm = function(ef, eh) {
		var ly = Math.floor((at.a1 - a6S) / 2),
			lz = Math.floor(.5 * (at.j7 - bY.gap - a5U - aCJ)) + a5U + bY.gap;
		return ly < ef && ef < ly + a6S && lz < eh && eh < lz + aCJ && (this.a0r(), aU.a0B(ef, eh, !1), !0)
	}, this.a0r = function() {
		aw.s.a00(3260), __fx.customLobby.setActive(false), n.s.t()
	}, this.iS = function() {
		6 === aW.zo() && (aCP ? bb.lo > li + 12e3 && l.zz(3250) : bb.lo > li + 12e3 && aCX(), 100 < (aCH += .07 * aCI * (aCH < 16 ? 5 + aCH : 84 < aCH ? 105 - aCH : 17)) ? (aCH = 100, aCI = -1) : aCH < 0 && (aCH = 0, aCI = 1), aCL = "rgba(0," +
			Math.floor(190 - 1.9 * aCH) + "," + Math.floor(120 - 1.2 * aCH) + "," + (.4 + .004 * aCH) + ")", aCM = "rgba(0," + Math.floor(1.9 * aCH) + "," + Math.floor(1.2 * aCH) + "," + (.8 - .004 * aCH) + ")", bb.dc = !0)
	}, this.tU = function() {
		var ef = Math.floor((at.a1 - a6S) / 2),
			eh = Math.floor(.5 * (at.j7 - bY.gap - a5U - aCJ));
		! function(title, eh, a7L, si) {
			tV.fillStyle = aCM, aCd(eh, a7L, 1), tV.fill(), tV.fillStyle = aCL, aCd(eh, a7L, si), tV.fill(), tV.strokeStyle = b7.mY, aCd(eh, a7L, 1), tV.stroke(),
				function(aCf, eh) {
					b6.pT.textAlign(tV, 1), b6.pT.textBaseline(tV, 1), tV.font = a48, tV.fillStyle = b7.mY, tV.fillText(aCf, Math.floor(.5 * at.a1), Math.floor(eh + .58 * a5U))
				}(title, eh)
		}(L(126), eh, 3, aCH / 100),
		function(ef, eh, a1, j7, a5M) {
			tV.fillStyle = b7.mT, tV.fillRect(ef, eh, a1, j7), tV.lineWidth = 3, tV.strokeStyle = b7.mY, tV.strokeRect(ef, eh, a1, j7);
			var eY = Math.floor(.3 * j7);
			b6.pT.textAlign(tV, 1), b6.pT.textBaseline(tV, 1), tV.font = b6.pT.rV(0, eY), tV.fillStyle = b7.mY, tV.fillText(a5M, Math.floor(ef + a1 / 2), Math.floor(eh + j7 / 2 + .1 * eY))
		}(ef, eh + a5U + bY.gap, a6S, aCJ, L(32))
	}
}

function cL() {
	var zg = 0;
	this.dU = function() {
		aU.dU(), zg = 0
	}, this.setState = function(aCg) {
		zg = aCg
	}, this.zo = function() {
		return zg
	}, this.aCh = function() {
		this.setState(8), n.r()
	}, this.a0j = function(e) {
		if (!bO.vE) return !1;
		if (!(bb.lo < 400)) {
			if ("Enter" === e.key || "Escape" === e.key) {
				if (this.aCi()) return !0;
				if ("Enter" === e.key) {
					if (0 === zg) return !0;
					if (7 === zg) return !0
				}
			}
			return !1
		}
	}, this.aCj = function() {
		bV.resize()
	}, this.aCi = function() {
		return !!bV.r1()
	}, this.gm = function(ef, eh) {
		!bO.vE || bV.gm(ef, eh) || 6 === zg && aV.gm(ef, eh) || bU.gm(ef, eh) || aP.gm(ef, eh)
	}, this.a0B = function(ef, eh) {
		!aP.a7X && aU.a0B(ef, eh, !0) || aP.a0B(ef, eh)
	}, this.click = function(ef, eh) {
		aP.a0a()
	}, this.a0E = function(ef, eh, deltaY) {}, this.aCk = function() {
		aU.a7e(), bb.dc = !0
	}, this.tU = function() {
		8 !== zg && 10 !== zg && (tV.imageSmoothingEnabled = !0, this.wo(), 0 !== zg && (aP.tU(), aK.tU(), this.aCl(), bU.tU()), 0 !== zg && 6 === zg && aV.tU(), bV.tU(), n.tU())
	}, this.wo = function() {
		var aCn, aCm;
		if (__fx.makeMainMenuTransparent) tV.clearRect(0, 0, at.a1, at.j7);
		else bO.vE ? (aCm = at.a1 / bO.ej, aCn = at.j7 / bO.ek, tV.setTransform(aCm = aCn < aCm ? aCm : aCn, 0, 0, aCm, Math.floor((at.a1 - aCm * bO.ej) / 2), Math.floor((at.j7 - aCm * bO.ek) / 2)), tV.drawImage(bO.vG, 0, 0), tV.setTransform(1,
			0, 0, 1, 0, 0), tV.fillStyle = b7.mT) : tV.fillStyle = b7.mP, tV.fillRect(0, 0, at.a1, at.j7)
	}, this.aCl = function() {
		var eh = Math.floor(.3 * at.j7),
			canvas = aX.aCo("territorial.io"),
			hG = (hG = 1.75 * at.j7 / canvas.width) * canvas.width < .98 * at.a1 ? .98 * at.a1 / canvas.width : hG,
			ef = (tV.globalAlpha = .15, tV.imageSmoothingEnabled = !1, Math.floor(.5 * (at.a1 - hG * canvas.width))),
			ef = Math.floor(ef / hG),
			eh = Math.floor(eh - .5 * canvas.height * hG),
			eh = Math.floor(eh / hG);
		tV.setTransform(hG, 0, 0, hG, ef, eh), tV.drawImage(canvas, ef, eh), tV.setTransform(1, 0, 0, 1, 0, 0), tV.globalAlpha = 1, tV.imageSmoothingEnabled = !0
	}
}

function ck() {
	this.aB3 = 0;
	var aCq, aCr, aCs, aCt, aCu, aCv = this.aCp = 0;

	function aCz() {
		aCt = aCu = null, aCv = 0
	}
	this.dU = function(qZ, aB0, aB1) {
		n.r(), bk.a01(), aW.setState(10), aCt = qZ, aCu = aB0, aCv = aB1, this.aB3 = qZ.aB3, this.aCp = aB1, aCq = 0, aCr = bb.lo + 4500, aw.s.zt > aw.s.aCw && (qZ.zu += aw.s.aCw), aw.s.zu = qZ.zu, aw.s.zt === qZ.zu ? (console.log("direct pass"),
			aCs = 0) : (console.log("delayed pass"), aw.s.close(aw.s.zt, 3247), aCs = 2, aw.s.aCV(qZ.zu, 5) && aw.np.aCx()), tV.imageSmoothingEnabled = !0, aW.wo();
		aB0 = aX.aCo("loading"), aB1 = (u.v.r8() ? .396 : .25) * at.pV / aB0.width;
		tV.setTransform(aB1, 0, 0, aB1, Math.floor((at.a1 - aB1 * aB0.width) / 2), Math.floor((at.j7 - aB1 * aB0.height) / 2)), tV.imageSmoothingEnabled = !1, tV.drawImage(aB0, 0, 0), tV.setTransform(1, 0, 0, 1, 0, 0)
	}, this.lF = function() {
		0 < aCs && bb.lo > aCr && (aCs--, aCr += 4500, 0 === bb.aD1) && 0 === bb.jb() && (0 === aCs && aw.s.zu < aw.s.aD2 && (aw.s.zu += aw.s.aCw), aw.s.aCV(aw.s.zu, 5))
	}, this.aD3 = function() {
		return 10 === aW.zo() && (bk.aAa.aB4(aCt, aCu, aCv), aCz(), !0)
	}, this.aD4 = function() {
		10 === aW.zo() && 2 <= ++aCq && (bk.aAa.aB4(aCt, aCu, aCv), aCz())
	}
}

function cM() {
	var aD6, canvas, z1, aD7;

	function aDD(e0, name, aDE, pA) {
		z1[e0] = name, canvas[e0] = new Image, canvas[e0].onload = function() {
			! function(e0, aDE) {
				var a2P, a2Q = null;
				7 === aDE ? a2P = b6.a0x.a2S : 8 === aDE ? (a2P = b6.a0x.a2V, a2Q = .1) : 3 === aDE ? (a2P = b6.a0x.a2T, a2Q = .06) : 5 === aDE ? a2P = b6.a0x.a2W : 6 === aDE ? a2P = b6.a0x.a2R : 4 === aDE && (a2P = b6.a0x.a2X);
				canvas[e0] = b6.a0x.a2O(canvas[e0], a2P, a2Q)
			}(e0, aDE), aDG()
		}, canvas[e0].onerror = function(e) {
			console.error("Error loading image at index", e0, "Error:", e), aDG()
		}, canvas[e0].src = "data:image/png;base64," + pA
	}

	function aDG() {
		aD6--, aDA()
	}

	function aDA() {
		0 === aD6 && (aD6 = -1, aDC(), bb.dc = !0, canvas[7] = aD7, canvas[8] = aD7, canvas[9] = aD7, canvas[10] = aD7, 5 === n.rs) && n.aDI().aDJ.resize()
	}

	function aDC() {
		aH.a3b(), bU.aAS([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== u.id, 1 !== u.id, !0, !0, !0]), af.vJ = new xC, af.vJ.dU(), aq.dV()
	}
	this.dU = function() {
		if (void 0 === canvas) {
			aD6 = 23, canvas = new Array(aD6), z1 = new Array(aD6), (aD7 = document.createElement("canvas")).width = 1;
			for (var a7 = aD6 - (aD7.height = 1); 0 <= a7; a7--) canvas[a7] = aD7;
			aDC(), aDD(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aDD(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aDD(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aDD(3, "orders", 6,
					"iVBORw0KGgoAAAANSUhEUgAABqQAAABkBAMAAAASxkyFAAAAGFBMVEUAAAAsLixKS0lkZmOFh4SqrKnMzsv///8J7h1xAAAgAElEQVR42u1dS3fbNrCm+NJWaRN7q9vW8la3Sayt0trmVkltcyu/xK0Ti+Tfv8SLmAEGIBTL5yateHrSWNHnwevDDAYzwyging83Vds9zePfUeBzQBwQB4Tz+ci/L57mnwPigDggXoRIAYCDlgfEAXFAfD/iY2s9/xwQB8QB8b2IS8G8x6s/J6PfL4TJ2D4cEAfEAfECRHM1UT+PLqoBzAFxQBwQbsQZ+/fHKfwovmGf3R8QB8QBsTsiIy1Dbj2uQhDxzojogDgg/sUI5stoiH/LKpdfw0D8sTMiOiAOiH8vIipdbGPsrAMQV7shRmU92VlG9JqIk8q4afghWnVA/KyIWfcPn2n99a77p7tBRLbdDZG37XpXGbu3agfEWWs5cF6pVWnVfP6Ren5AvAaCqbUHj6fDVm0m4my7G6LE3A6SEU12RgT34526aLh/PRm6683klWW8KiLdPPyArfpeRL56DRns09rtCyyJ32cg4mq7G4Kt3s78+zANlxFFqx1bFd6PWF+LL19LhnyStr6BNsQeZaTGQnh8lX6MurG6/a5V0q/P5tVGd3dE0Ux2QFxuZITfJz8i4zyLp5HbdbGiEPDn7U6IlC/eUdk+h8uIkvWOrQrvx6m+D69fS0b/43JUrQMRyaanRXSy+TyAKHHDyu2r9CNnS+q7Volcw62k5GuM7s6IuG2/7YDQW68mFYFgNOvsndxJ9jNrIygNd3yBKTWIKPjihdbfsIwo/bpjq4L7EcMYk+XryNCnyOht9TUQUegjZ9LN69SLiKt15Njm9tmP07Zp2/n3rBK9KpvXGt2dEUfGjA8gfr3RpHqYOBGZMO6LtnboqZFJwwwdB7jdtA1G3Gw2la0TBmV0i3G7W6vC+5HzbWcZ8wvy59eRoX+eVu1TGGIERoi1ce1FGKZCAbbfgH4s7gL7UbTzBeX9Ch0rvW+9wujujGCuvJ3WlVgkKGrWQrCtcCX+59JTWWvOliV0G4rIUNjht2AZ0ei4nuzUqvB+FGpcz0yjZn8y9FlqjbydPkQKmrPo/v7kReRorYwQcQf7kVTNPKwfRTs5JgchcKz4vK9faXR3RfATSLvbutLx6Mp1ayK6b9RiUDtOTVynPGiwKgQUug1F5IhS62AZ7zZWhsoAIrwfbb8PlaYdsDcZ+t/XvQU3hEiFF6dv2ZMXsUBTn7VIFw61qrDO2C7Eon2oOsMv6UygZvsd88Hn/em1RndHBD9Eb3eUMdKK6jOFYD73Va+/tk6q3xGIfoezgU4E1lLTUBkn9r3RACK8H2zlftWtW7+GDP2M14RKpxEJ6/JcH0HWXkSBjNYcU2qgVZkdWeNCCPfEpbUlBo6VOLduX2t0d0OMKtGJzWQ3GWdq/ZL9iKretmAa7ZFuVwXtocrw+OQE050I5ApoQmVk1L2Rv1Xh/cj1wmUr9zl6BRng3Lm2fFROBFjoiFIk4giN5xhTyt8qsbQM5elAsAn8Utr+0b/DxipBuH2P7o4IafelO8/5u96X9Zv9pQzcMsTWggKOkRWFiNBRJAgBMyO3gTJG9L2Rt1Xh/RiDtbgwT5R7kgH+dW2Nlnes1ha7HIgMfePUoJS3Vey60rrOdCG631zYe+JsGzZWGcLZiNmGPbAl76/5R9d/7n8+UrEITw0XZoCME7l+483URHR8AOfSxHVNnACfHkKofWcbjFgASj0Fyjii7418raIfElEAN0luXrrsR8blZtUb6mvtQTrZ3HtlaEoleDshECnbEHslfr4IH11ux6yOTBvAhRgDSrV6iW3DxipHlLIQsblzguT0xz3OOfjta8s0CZFxJlo5E0iIiLD/O2sdxC/0SjM95kckpZyInPZO+GSMKse9kadVjodClPiU0gb3PFgG88Nei6farNvHVv0gt0eXjLI/5WUtbpiNyJcg1Cl+MCnl6ceZOKSWrXXbSCLGhJY6EysgYKwWWLuZCLU6vlqeANW6/cw558GKc2GamssqSMYlV1LEDGaEG+ALra9XNIJPBSHXhUjBGK3CZCCXxnNYq9yHVQsBKZVYlNqHjNN207f/cj1b9z9shGSXjEU/smbMgo0Yr4/0iGbbY0ypvy3Ee9XjG3mMYiaKTrJ772yVraV4Lt42bKwqTCkTMdaUiq+vN0aph+ne5lyMbrfSR1c8KBYv4BAZo5IrKbkgwfcW5uErcwTdVmotm4hEnYqySRBiBIZoHiajQC6NSUirPIdVC1GCYYstSu1DRlEnffvP1vm66vtSfvXJGPeWbm4mEViI/CHVKyPfjvudnj+dyY8RcbthSd9vebq38Jdk/K9X3aQkF5vW2SpEqTv25apfk4NjlZpnMAMBKFXa1VNWe5tzye5bh04IkZE+yNjQOUIQeq3TU42pp96utGYzEbOeUiuHvjUQYKiiMASu9bT0IJZeo9ohY4BSzp4PWxoKUdTa0XnRlGu9PZTffDK0bjpurQtIA5FtpmXvtcvrHH0/ac0Z5A2ScSzqylLeVGw2cm7oViFKGa6mwbGamSdiA6EpFRMy1nuaD237PKhj0ep75nxG2KMpodeYg/AT/ODNWdeXTK5lC1H1lLKvW0jEqZNSDkTauq6HTUTSLn3H1CUtAxp+aXCr/JYGRkDDb102J6bh55KR9ZQqDJPXRsSbdd6fhPMGUyq1ZhCsWMaobJUvRR4mmBu6VT5KDY5VZVrvBkJTKm8dWmoP8wFOdQ/S4RmltzvPuUpgmAIEa/eEchCCLDleYXPF7LU1hUj7Ac0MO86FyOlrKTfCGNxnNyI371awdnyiZRTg2JEHt8rzWAjmnngvnqr+ZVr0P6h5cMhI+3CZ0vSPmohkefnIpljaiU2KDMW0A2OEptRmybabVc48W8C/5myVj1JDY5Vh74ON0JSiZCz3NB/Q58UiW9nSOEXhXEEyZuAoohAsVjaiL7KUnvq1lH0plWqvqV/LKfXZXMMkInVSyoE4xuNauxFF69bTKl7YlrEAqHFwq3yPhbjsx+ao3dz04ma9i42WoV3nleUfNRDZbb5ZnsmdPM3av9BA8XwShOgoJe53WYmDuGxXOV9cspRWI3Q12SofpYbGakEFokGEphRxlGon+5oP6PPqduG80wYVcnUHyZBr/xYiut+zRicNpZg6QZ96d5DoSy7WWmXNrKZUbV5BkAh9NGrsSwsKsTDK5roRhDGJpE5JGZBGJUFKVz/cj4XIeouUGwvL/ntLvwxwJjdNEAOR1XHFHRRMiZ/92q7hhX6+KlcxRnSUis/Pz/9S15Edpdqamxl/nJ///YsYR7JVXkr5xyohzsMY4aeUcKPsYT6Qz6uZ5LVpngTJEIaf1G4SkYB5Ku4niH/MhPoIVnHGXRuJHYSuKWWcZGgE6MwzYRfYiDfmBL5xIbLWo6VO5eZoywBhB4lpX/n64TXeMSJHBN7qNq39MpRyiq2rExPRsfNss5QOiptltS3BEhk3l39VGBGDa1rOV+4K+aS9NM5WeSnlH6ucju0ECD+lRJf2MB+A3bzva74o17vN+USoqTuhjQSC/Q+IQMUk2NSkaO3zX58ZauAYUQonSNIIbbAT5x4KYY+tC3FqWUcG+el+xNqaPCUr4Tj64XlMxEJvH5BSpR4xWoY6QqXGOrQReXufVLW8qt+sy2YBflfOrE2M6CklDZGVWO6Pc0gpslVeSvnHqqIMDYQYoJQyRl46H/iAvsomVgjQsIzRI1dT3SpeLHtE14Eashbenc/ugDp56o/3Y2zdjUpEqXpiOwTGtjnKEgPa5mHicCGMzeOSj1IQYaRmnPPgsKupJk5Dy6j63G1i5Xr6EfldIQABEgTGj3rqwMe0DOXoywgzGSOybm4v2zvhoGjrGfMxzvV20lQNRjDSxO8/XNz0O7Vc7Y/n5+/nilJUq/yU8o1VRponCDFEqef9zIdcVdL1uhoJfXO705wfdRSacSUliC7cXwXoXFphTk1BkZO12Gm3GAEHaUtdElMIxUXOp9g+vtoIP6UAIobrLr7RLq2/Ikg4W8apTH3h6rOmDtXOfjgeAzECN9Tjq55SKYrXpWScyrVKFXzAiO533SVVc8M72TYfmYdhCY3+GiMYaTJk/MAfFKWoVvkp5RurkgxEQ4ghStV7mQ8VcCCVxlzqz+kucz5i+2FcMSUl+i7+VxnmY7udIBqi+wB+/jLOa2cGpbb2qdA64Y20r700QxIpxIdz83Egcr6LZUvz9qtbjZvqiduoT6QMYeBuBAnra/T84+zH4HkYeif0+gaUypGngpIxllQaE1w3EFWnps4Ykdr7brbvsT/jjC9jiAijFNUqP6U8Y5XQgWgIMUSpJtrHfCi7b5VJ/0ImUsxBtMKgjCO+NczueFUQ7Z/AnXtn5PhVOHCIG5YYofWYpBSmCIFAKdl2CTQSMXTyVAhxwlyIO7XK2t5SuSxtGSet53l4YavENVHb11oBlDoFH9MylHai8mcMRPeV+0TmPc3apoTKIEmqxwlGhFGKapWfUp6xWtBX/AgRRCmNKPkvq/jnpaJrH2Jc9vduVqtKKeVs83itPGbLqHwOX4miLE08593qHROJcXBgbdF+v8ywtLphnhuIrDUohQtvEgjusOWvFBnJlzQuhxD+ByCEm1xUr86syZgqN7ol46z1PrcvaxVfTHXbzxagVNl9/NXb80zeYJQtDtkjELw0lrgpWXeDvIGIxapYGogwSlGt8lPKPVYJfbOIEUGGn0aEUIotMbNVCS59EosOpOD4OTTnmbJgE6V2GYKdWu073gfbcV8rXq4yVzyrolRtMNlEKH9Goy+n5n7E0NMjsl4XdWNYEL4i5Sc1ZLzzM0oYAAIhoiQztYKSjQzdFp1hiqCS7hwso3poF7VNqepaf0z3XOUdVJQvEyFS9p36t0pMQoEzPIv68u9rjBj5KLVMlCYhWuWnlHsGF8AOF490L0JEkHtCI8Io9Wy1Spxp/hGEeSN+XLIWfgtdiaWyYMf94bBDdGZFTXDv3nLcf1O/ZY0RII9JUao1SsIaCCrMpPYicqf6NxHHfCbE6YOfPh9/r9Bk5HJKsIykGqBU1yWFqPTi2yqzt45g5JqiFJIRt1ftRxXZoimVdh/mjXus1Pa5Ele+a3tWASLjOYQPR2KXyvDILprypsaIQEoRrRqgFEb8zuKurIsgM+JCI4YotcSIMEo1Vj+q3vj6/WJzx79Y8xY2kXc+DE7WateTjsh1137rYvSk59TMClQt2qexlbBoUspIYnMjWpgg4EaMhyjVI0q5+tmKzsUpDdKl6T2CWEYxxKhuvBQCU+q0H52qD5hRlEIysvaP9r3abDSl8iZr097UsHreh0+szZxeCpFtedcfRIESWUxC70vCXQ8RXWvdlEoVlmjVAKUQotDUJikyNxFDV71Te86HKdXNi9EPXRworRoBWAs1uoy884GVyUpJkeFwT93v+Gp9+W0lXk0FM2nX6lr3GSMKglIonclEgNrjXyMyXcOSMUgpheAbugozULnvkFNL5UZHMhJ5G3NNPzw/r0eI9TqWHa76rle9PlOUQjJYEOtcOSI0pRZ11ka9f8Lqeb+dPvGd0H49BEJk7TITse28SYWZ6MfxEFG183SYUkSrBigFEan28GXum1uIGNJSWyxjmFJf3/JJN/qhDCRG6RXnUiNWfO1eiXYYSN0rrEYiunEnfISMU3eo3IMuN7VFCEAQTSl0NWUigGcbUmrrRkQZGxe+sh+vuYu7kqGeJkLUacp7fdRxB4dWr7n4J0PGKarFS58AegT/ZU+SUgk8aykRilJIRvHcUap4NilVfu0o1fsnrJ73Jvszdz1Eb6+seQWItJvgS73l5DDu5+RNpeqZa0TFiOOg1LynFNGqAUpBRO5NKFQxBBAxRClhPvcIk1JPvSmkY094uL/RD9UBkRkoyrQf4aRYej6Q4biKUHxAh+DGn/10q/AO20NzJaQuzddC2ZTCKXQIoc3p5moa/XpJ3FOYMsQRSYbhqaE2AmcFYtEr729sKmtxXARx77V6vxaSUfniAuWATRQCUYpHOJXKl/jlRM2fpBSUse4opU5NmlJVd/6NFrWz51HvPe/68zWpTEWFEN0e+1nvccsYqv/y7p2oKgoRPkpNMk0pq1WDlNIITZCsdXsbaETpOthCRCClVmY/clQjhvnM5nzq7iPPSjTPLzVYQiuBEGuO0FObKU77A2EtEFGQlIIePANxangkUttDYcoYppRCVK0al7WouSvPUxnY4MSfUEZKxxri08wUymifZIlS9vvXp3zhVrJ1fP6ezH7E7Splv2OCKZUy32HU+yfsnqsha3gh2aPWrmkAEayUT2qoy2WUsLvqss5uLUTFXeU0pXRWAdGqAUpBhD/7SectUggHpfDoBlPK6AdMwPzCklueieoeTeW6liqRIlj0AdmNi1LRG5xQsaWFJC1JKbiXYsTIKh9xZKmp76aUqB8unc58+ytlNsBMCylac3jHvkhbmlLfCk2p6JcASmWsCM80UZeZilI5OxdHvX+CnsKxPB81cvW4KcUKDU/f9b5HPoHzuBLdnn25nhiIUjSZolSjfcH7olS5L0pt90IpRPF7HtFj1u72UOoI64FcCmaUQr8jmdLucW1fGsWZjhyUauxrFUPbrq0AjS2NCKGUROTK4uOH68feWzLVw/csvwRlFEOvfshEOVJ9PcRf4tNTSry1waYUlJEzqk+VI6Kn1ILZjt0+s3L1HI7ZNrZzwQzEGYsjP4GHqYZvJ3Wn6qoNt/YhouxPfiSlts5WDVAKIgYJ8rwzYosQwZRKrSwtGCAzIcLp6Pkw3X1Kt3wTiAiVKDqu5xFJl1ukluZ0OCugFKzgiBAlTs5Ecqa0jABKSYR2oXfy51parfeHRt48GKXGnwcCLjvxCQyurKsASkEZxTOnlPRP9JQqWTmI7n+3rp6rYGa+CxGx6BiR8Piuf2QoCC9OV3etay6Zkm37/DjdqiBKEa0aoBREDBJkvTNiixDBlDL7EZtXowszB4GeD/skFfV5qwmn1BQ6MUBqBuiPfutUjKJ109ZFqW1EIoiTk/5sTcoIoZRAcKNSmpYrdK221VLEUWsOZCS23ZdaTvS6b1WlAz9MSnH3xLqnFOxHp56YeXfUIEqNuDnClZWj59wCj0Tc1nxhp2xiRP55dKOLHvE23bF8m5y9dlGa4xDhoVTdDfo3Z6sGKAURgwSZ74z4hhBlC29z5cGfopTVj9KOAL2N0qVrdN0nqaiv+h1zSgGb5wawhy5fOUIaZuaklD7uI8QxVba5Mmg2st73M0SpkXRRKSecGPUTdJM8g270NZCRU8UE7VlUCLYdsmDvyqYUupdawX7E3O5g4V8TSCmmuBillH/C7jkzzpmT96Li514Wencxt3ref7lZgdqsa15KjfGQHQhOZclLiDjmMR4kpbbdInlytmqAUhARFl60C0K0q0cMU0reS1n9yK1wtW4JlnPX6PqUlEqyH3FKwT0PvLNtQdcjQuZ85aQU2PchAmXLZF+je/ThnJIRQimBOO0Z0z1X5zdGEEvZasf3FsgY09aU5beVCE6p1kmpGlxYaBmMSoxS0j+hKMWolLWgsJR9WGKtZu+EHV3ciVpJhZkPCxAJ499HfTjNJQ/Z38tPNiLnF5MkpeCNpd0qRalmQ1IKIsIubndByFOFFR/hpJRaXGY/YjN4oNNQR61zdN0nqUjnvZmU4t55oafAHS4KaoVC0tZNqZpCxEjvFV8jplV/tbLSvpNSi96uI2ItJiqKgn8ZUsouqZSSoRqaUjX7a0lSqlmSlGLc4X494Z9QlFpsBaV6/4TVc+khfVzKTZXX11w5J71sm4epqr/TRPHNZ+mh2fzRRBSltnDrhJR6AjeWLkoxqicvpZRBkN1JGEgpqh+FdapLPRuW090nv6ophRRbr6eO6Pg7pApPPZTqVQ5E5IhSZUep+4vKGivS8GuGDT92ECcjM+Xvzns3ejMFMiqrektKJHdAw2/L/lrQWqqJKMOPuSU4pYR/QlGqXAtKKU+g3fN+QB+X4u4jxyc/AzHjgVVXFzpn5kxsivHlHYFgV085Tam1vl5xGX7/WJbK9xh+hhm3u6kYRqma6kdubZyFXWh84g+cAOZEb/jh41dc8lDCUUlHiaMDW+mj1BcCcYoodQQDkoDr3T4Uxm/evIlG3R+TSP3xhmhVUtEFSpXEQkU1LIGM2K7ekhIpiNA98cz+urApdfsOnaVAP6q1pFReA0qNROAbo9zW0fNTYCvwBOAFppSBwCH1d8rYuIvSzZxApH3YkkUp1o25zz1xubQXwep73BPfXujQCKPULdWPkel8zPByd7gnMkJJsZnq3RPG0TzmlaoyMqAVuxWz1kcpddUDESU+an2KqLHyuC5dj0KkSzelGllIYx7FKygj64WdqNeEMUqZifLQif7koBR3elBO9FiERc0j6Z+QlJKfRL1/wu45oMg3no1tFPMzEe8gpzor9FKmE5b3FCLBoeiQUiy3Y+Jzos/tffVz9D1O9O0L3e7DTnS5KRL9KFw60OdEH1FKii2F3oluXmXF1T2Ude+8Wjz1Uoq6vjS0fRRRY+W5YPMF4UlE7MzPEKbfs4lQ3omTCt4iNk4ZklLNmKCU66o3Y1tdKqrCrTSlcpE1qb5A9DxBOryTmBj7poVIb2Ayy0ZFlevzMEJUnDoUpaYgs5G86p1Yq/IL2aodL253vxwOuZdy9SN32KHR8NU7kWYor3qJgIt4CoNbp64AmFHlp9TWQiTWXnCCf8dXKwzk47X/mVqIxeO5NRON0v2lWo4aIS4U3lbgUpukFAhIeqqCKKVljH5Tf0S/AC0V/4/+twkZAJMjSlXiKFV7Qma6uRt9uN4YL2ViBgGJqID3H1EKxCM5ApLMgDJYQv+HC0hy9SN2xOT6ApJoJSXLHrpj/GZ23IQlJGv9lJIbI41QSxa/4m5rdaQcSA20ZPCyn2WzTEoo7EzuDunK6keFXxHRBFKqHqMYPz+lrKi9Kzry3UIUBqXmRkFUm1Kb6/P35zeVM7UMI3BEEqBUrYMnBiglXcOP0+g7KfX0wkDbl1CKkDAfotQRqaRYCySl6OB1XfVo4kwmOBuglHoni0bk1GZwZs09DKkPo5QZhM8KR4FbgDoSZ4ot1Q91JwoaRlIKJHc8MQe6ptSRCps1KKUQ8QY/S0GpDH/6SCUTVOh2Xx6llpEn/eBsIFsTI07RxRSgFPv4a+RL7ugXxuji+vpq4kw52TFVY/d0kGBKUakaefhY+dx9QpJM7jBSrEZGFtTSmfJm2X0WpWozjevY+keDNY2V+BVKKZgq9r/WUW8uf9HK7kei+AAcUA5K9SmIT90qfB7byR0WpQQitdYQp5SZq0ykvAnk5z+4HXeXtnepPelGklzSB0w1lWOZAESOvOiAUmuw19IpiL5A4xckFEY7Jy3uQCk7oTB2BYA4EblDSUVF09/0oUTgS6wO702cTh3O2iFKCT6CZGOYLaJ/dWZmZcH05DfMxnrDFu0bpgw+v2GL/g27l3rDCPopshDdOuzkJp/h762l0tIB5z0iUxPCjJdL8V2SUiBR/qnryNexisT41qcgakrx0VCIET7ZbOZKS6Hd8TGyE7NztSd/ZEUv8+4/c9LtVO50026u2GtXLulrECO1vqEpxQzZpVPGEKVekPYe7ZxaH0wpMu3dtPy++kfXdZJiX24EIjJLrdzDexk7MU8XuLgcptRXjDCa/zi3rRurtAe/WaWjJ8YwPQMg+CAsZLKh5m+Cinb1iFze8IkIhQX/iaQUKOfCcnqfxjBRXsypQSndqpKbdlpliLNU2upPhTFjlg/JtaHwYaoWyJqeD/icsKT4it55ESIRlepsSrEo9olbxgClXlCcRa+T0AIwwZQixyr3eCcohOskJf23hcjmxpydA5PpM2EwyjJMtt1nU6qeRKhwU2nHJNgWmlHqKYhSCMGW56jFyXVMVAaHokeM+YfZ5vFT1OssklKg6Bij03psl3MxKKVbVUga/PrhZlNr90QlltPo/flGhE+YRa5EwlN6ztt2JS8d5uR8QNvvpur2q5lj58UI5PLTlGrUq5IcMgYo9YISYvzZqUyZSSk+B5kOq+opRZYQG9nmt2903UpK3OKX/O2tDb4GqfXBvqb8FqAI5RCluGRQXrCklWxujC8qSBhEKYjI2NLO2VcvjZmbta1dhPIYXe6N3JQCpTGf8p5SqOiYQSndqvz5kimkSqkjSaly3X+qvI+4FCMfzguuZdNO8dyl7XDh0e55ez6HNWywXsOIsttsSptS265jW4+MAUq9oNAllaumLtnoYprBlKJlFO6jFIFwnqS6VVPLLQoXqOV1Yo4of2J/mpMlbS831sMqh+NPrnARXJtSm2lkRWrgsrkhlEKIjP2l5D/J6ZhfSpf+GazWKxELdLnnplSPkJRaje3SmJhSoFVpg1/XICk12xYo1sQqGAzCjNn2+KxyR4n5MFoLQydxCXuMYMw5sikFvROOAs4eSr2kHDMZGEOsY28BZ5JSDhk5EWzg7LlHSUWje1nAGZdR57mfpcs38dJi+zal+B6VYkphGSGUMhD8iLPtV6Q8KjEr9NxuVYEo5Tb8egSjVNZTChVwxpSCraruK8idPiDpwrhqMUe30OuJX0lX9gsoifkYldRxhUTkMh7ZoBTLWFx5ZPgp9ZKXBnjUlENGKKUcMhLnrRSBcJ+kYAgFetkHPCFR9Rhe9goS6C7fXP3JKNVgSs0tGSGUwoh0zr6/YvcBhfLSlq1ZCU0hCrQzud0TL+v5rPe/4Uj0usSXM6YMvYUuc3FlXQ+3KkaZYk1VexCJoI9BqUboercMP6X2+mqbwdfnhFLKISNpyasdEuFTUhphvJLqiAiCRFvGS16UVWCTtbIpNbVkhFDKahV/7XN5J6dT2Wd3VKsgpUYeJ/rLeh5XfbgdpFTeSo9f7ZChLb+nlHf/A3pFOdmqt9hn/4hL/5mISr57AVGKGYO1T4afUvt9AVtJGmUaEY06JB8AAAlbSURBVEoph4zUaffZiHxASclXto3tcHbioNZ37yWvc1wY4ygNP+ONO1hGCKXMVqX81Vv6yuVOuNC3VKsApcT5w3HV+8IXWc6QMa3LuRhuL0tGoadDDtuNS8bl49X53/otoUoJXJpvfcAyClmeF1GKHaWefT33U2q/rwkNeBXp7vNB/Ho7N8pEDCop+WLRzHxJZ58YQDwve+nwMeZOfBtt5si6aWwZIZQyW3Us3mrS9G4vEWT0RLWqUFN1UXkDkl76uuXLPscAUkrmN31xysj1JsTLdZ/fuF4b7ci9vK8abz9ykLbZv6t3GoPQNsfrryeBPX/5y6yHX5j9HfNBU8qPGDpJqYNXYuXQW6m8ULx+bX3y28AzNRE5fQw8RZRCiCBKGQhGqZr57mqdktd9LwOBnQBxLI7vHyt/2KwlI8QvgxCXla7jrsNm2R3S5otbRgyDZq0ZhYiUXLCPR3gmLRlJX6dNU4rrramv515KYcTQVe/w6ObwWLC3+SA9fl7EsJLK5MLGJ7YjcEvrOH1JRHKz8T9zE5HRRiu+5keIIEoZCCaH30yt+b89lGb5DITg2RLA5exI7rBkhHknEEInIo9vgBU68cooTEo9O2RIVbNBV/CPv1W467aMsuNcjinFTle1t1VeSmGEn1LNcnh0EyLgdB/zge/NbEqZiGElpe7HC/Stig6XVcO/BYiBtzJtLURCulZSfPeLZYRQykAwI443bsp3eVnFeeLoR0oclglK2TKGTXc3YkweVUlEjgw/YzNCCP7vD/B+u3mYXBpXIbaMGSv7UkFKNayKx623VV5KYYSfUpOQ0V3Y+/D+5mPsiZ3AiEElpRBs0ibmDNIFjUeyVxKR+Sm1shEVlX5fIN1lIAIoZSKUwbSN4m6HLqUT4JurHyizvE+Ub7w9D3i8CJJSNCKG7gnDZMYINihfZuCa4noenRlhmoSMTBWK7ynFi1wvva3yUcpA+LOfliGjm1mBVXucj4WLUiZi0N3XI9gCWllG2K2ja0uI8GZeNBMbURBqKsUXbQiRcB9zw40Z/kez6dO/xYebldUqvVByNo93kXmfixEgwlC9YiolXpBByBgy3Z2IC7b6rwMRBXCi20cpgHi3uZqwLGk+Ovzt4vElewv4kIxKvPRZU2oJ6wTRrfJRykBoSuWuZKnB0bVs3j3OR+GiFL3aVwEyxJjaDibi6Ue66m/73c8XApEbVYciXNOnNhHH7eCztVolWdGID8a8IZebpasfvTX6MAUsb/w9H358CNq2diByfdVr2n0W4kSlSXXqefThupKvI/PLmDFNVmpK8SG587fKRykDoSkVu/x9g6M7MxflHufDSSkTUQ0pKbATLcBrz525h+JfnxEi9q31KYFAAP7KNhSLtjYRQZQyWyXNWv52Dm5tfPH348haqzalaBm+x41QeVKb+yBEjF4Q33gQMT9HsTf1doziLszNp4BW8UrgmabUiq3gpb9VPkoZiLE3oXAVNLqp6UXf43xULkqZiGpISWmEMJLgjuh4K6D+nvrb5YBzwkIszBg/01TEiGQz+KzsVgHnvHg3752/Hyc8GtxHKbcMjw3gQpRksq0bwcdslVDFRjCC/+KGZcrfxdPR+fXVX2GtKtnIl4pSW0bieqBVHkqZCECp+Pp6Q2y8AaNb4QHb53y4KGUhqiEllRnWNHC814l9kYz1mkKkfueEjcClGw1K3ZIygjW6hSj70q/TIUThp9Q+WxXpi7swBFcg84UuI+lCcPPonr0ta3qxS6v4fQO7FV+Jl0bOUKom2SoPpUxEjn0LuH7PfeDoLjCl9jkfLkpZiHJIScFKtYW8t8lVcN8ZddebgLZIxMjpoGgciHduSm1pxMDjQSz4dc2NGVJPIfyU2mOrUnSZ97gMkMH3rY1dZM5C8MIUfzIXaXr7bh3eqk4rdWrqTFDqTv7oRbwtQVL2gIzYPEmATK7H0NHNEaX2ukocCYg24mhASUEE2wdvgZISf7PIf4Te/Sl8gicuSt25EDMXpfjlMoXwPx6ErDcZTYYRfkrtsVVnVorZoIzUUbfRRnQL/Y6dDNdnX6rlDq2asfnqtseOUt0szMB2SiLUawwewno+M3oaRe+v+UfXfwaPboYotddV4qCUjRjdbFahMmTktnLgfRbKZGnbs431g8tB0cxdCF2EEj8PThlDx859IPyU+v9qlZ9SNiLv1AuvUV1dNrvIYHqJ5QGvcv4/cJdFIbSWqSev23MzgKJ+BRmJg1IvlME2pj5KTJaJ2BIbxZ2JMP0NlnOCQETRx43FwMd55EN4j4T7QHgptcdW3VgxeMMyHJSiEDdLnkOatuV2p7Ga8YZkq1w4OW59iLhqPdkKrzSDMa5fvEcZGU2pl8rgbyJX7RZpUm8tJVWi4PRUeoVSuq7y0o3gI3R+o2oudAeKqz/9MnzPnhBeSu2vVamrEKFPhoNSNIIdbuu8tWprDcxH1a+HGQydoRCFZd9HrzJWxFXe0yvIcFDqpTL4OEkvbO0m4dZGDND2p0GkHkrtsVWZq0CQTwZNKRrBj/HfjlsqmtQn40gFsGYVPkP8KDMIrg73KyMnKfVyGeyDbm86duTyStfFykZ4np8LUTgptc9WETp9PiiDpJQDwc85a3IB+PtRivMvwz/8iDMIAgL3K4Ok1B5k8CG99+m3M0t/lWS9l58SccfWrYtS/+/9gCXV10MIdv2xKqngF3+r2IVhMxV//ogzWPUOvz3LICm1DxmchssovXEoqdQmYebK/P35EPw05aDUT9bz0Q1z+BHlu4ZkvFOV1Fc/ZM8LFcq9bxljglJ7kcFji2rf2cu+hfj3IiClfrZ+xGWd0MVyB2ScmQ6HH6rnaaXLq+5VBornud1nP7AVTfw+m6P/XgSg1M/Xj9E0I7zbATIu8fXtf2XOdYk2VUlhTzJEWIPD7HtH16L41yI0pX7KfqQ3m+V3yGA248N/cc6Tc+YnOp/vW4YnLDBz+db/rYiOUpv/YM9HNw//3Tl/DQRXbQ2BYVcV9NHs34pIz8//oz0/IPaJkBeR/5iffvRkXh0QB8QB4Uv6OLPeYywPb/cHxAFxQOyOkE6f5gq82bhyRvEfEAfEATGEUJnvzePVn5PR7xc3VXtAHBAHxAsQ0jLEzz8HxAFxQHwvAqUxe143cEAcEAdEGCICFfcZ4J/ogDggDogXIbrngzASm8e/owPigDggdkL8H8xj7XrcjeVgAAAAAElFTkSuQmCC"
					), aDD(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), aDD(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aDD(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhjuAQAAAAAAAAAgJ1x00UXx5ptvps5gKxQWFsaoUaNSZ5DDmjRpEieeeGLqDKros88+i3HjxqXOACBPDBo0KF566aWYNm1adOjQIXUOGVRYWBiHH354zJ07Nx5++OHo1q1b6iQAqLJmzZqlTmALdt1119QJAAAAAAAAAAAAAADUAsM9AAAAAAAAAADkhA0bNsT06dNTZ7CVjj766OjcuXPqDHJUeXl57LLLLqkzqKJf/epX8cwzz6TOACDHHX/88fGHP/whZs+eHR07dkydA1FUVBR9+vSJhQsXxj333BNt27ZNnQQAW1RaWpo6gS0w3AMAAAAAAAAAAAAAUDcZ7gEAAAAAAAAAIGdcccUV8frrr6fOYCs0aNAgysrKUmeQg4qKimLgwIGpM6iitWvXei4DsFndunWL+fPnxy9/+cvo1q1b6hz4L/Xr14/vfOc78fzzz8e0adOiUaNGqZMA4Es1adIkiouLU2ewBY0bN06dAAAAAAAAAAAAAABALTDcAwAAAAAAAABATrnmmmtSJ7CVvvWtb0WrVq1SZ5BjysrKYrfddkudQRXdeuutsWrVqtQZAOSg5s2bx6233hpPP/10HHXUUVFQUJA6CTarcePGMWzYsHj99ddj9OjRqXMA4L/stddeqROoAsM9AAAAAAAAAAAAAAB1k+EeAAAAAAAAAAByyqxZs2Lp0qWpM9gKjRs3jrKystQZ5JgzzjgjdQJV9Pe//91zGIAvNWbMmHj55Zdj8ODBUVxcnDoHqqVFixYxefLkeP7556N3796pcwDgX3bcccfUCVSB978AAAAAAAAAAAAAAHWT4R4AAAAAAAAAAHLOlClTYuPGjakz2AonnXRSNGrUKHUGOeIHP/hBtGnTJnUGVXTdddfF+vXrU2cAkEOOOuqoeP7552PSpEnRrFmz1DmwVbp06RJz5syJu+++O1q1apU6BwBip512Sp1AFRjuAQAAAAAAAAAAAAComwz3AAAAAAAAAACQc+6999743e9+lzqDrVBaWhpjx45NnUGOOPvss1MnUEWvvPJKXHXVVakzAMgRpaWl8fOf/zwefvjh6NKlS+oc2GaKiorixBNPjKVLl8bIkSNT5wCQcQZhAAAAAAAAAAAAAAAgHcM9AAAAAAAAAADkpIkTJ0ZFRUXqDLbCoEGDorDQJUpZd8opp8S+++6bOoMquvzyy1MnAJAjhgwZEi+++GIMGDAg6tWrlzoHakVpaWlceeWVsXDhwjjwwANT5wAAAAAAAAAAAAAAAACwnTkVAwAAAAAAAACAnLRgwYKYP39+6gy2QqtWrWLEiBGpM0jsBz/4QeoEqujpp5+OO++8M3UGAIm1bt06HnnkkZg1a1a0bNkydQ5sFwcffHA88cQTccUVVxgfBWC7++STT1InAAAAAAAAAAAAAABAZvlEGQAAAAAAAAAAOeviiy+Ozz77LHUGW+Gss85KnUBCffr0ie7du6fOoAo+//zzmDBhQuoMABIbNmxYLFmyJHr37p06Bba7hg0bxqhRo+K5556Lnj17ps4BIEP+3//7f6kTqIL169enTgAAAAAAAAAAAAAAoBYY7gEAAAAAAAAAIGc9++yz8cADD6TOYCu0b98+zjzzzNQZJDJixIgoKChInUEVzJkzJ37729+mzgAgkRYtWsScOXNi2rRpUVpamjoHktp///3jN7/5TUyZMiV1CgAZ8cEHH6ROoAoM9wAAAAAAAAAAAAAA1E2GewAAAAAAAAAAyGnjxo2Ljz76KHUGW+Hcc89NnUACPXr0iEMPPTR1BlXw0UcfxZgxY1JnAJDIqaeeGs8//3z07ds3dQrkjJKSkrjwwgtj0aJF0blz59Q5ANRxy5YtS51AFaxbty51AgAAAAAAAAAAAAAAtcBwDwAAAAAAAAAAOW358uVx5513ps5gK3z961+P4447LnUG29nIkSOjqKgodQZVcMcdd8Rrr72WOgOA7ayoqCh++tOfxq233hotWrRInQM5qXv37vHUU0/Fj370o9QpANRhGzZsMFyeB9auXZs6AQAAAAAAAAAAAACAWmC4BwAAAAAAAACAnDdu3Lj44IMPUmewFc4///zUCWxHHTt2jD59+qTOoAreeeedGD16dOoMALazrl27xnPPPRdnnXWWoT3YgqZNm8aPf/zj+OUvfxmNGjVKnQNAHeVvn7nv3XffTZ0AAAAAAAAAAAAAAEAtMNwDAAAAAAAAAEDOe/fdd+OWW25JncFW6NWrV/Ts2TN1BttJWVlZFBcXp86gCmbMmBFr165NnQHAdjRs2LB4/PHHY7/99kudAnnlhBNOiKVLl8ahhx6aOgWAOui9995LncAWvP3226kTAAAAAAAAAAAAAACoBYZ7AAAAAAAAAADIC+PHj4+33nordQY1VFhYGKNGjUqdwXbQqlWr6N+/f+oMqmD58uUxadKk1BkAbCeFhYXxs5/9LH7yk59EkyZNUudAXmrbtm089NBDfrcBYJtbvXp16gS24K9//WvqBAAAAAAAAAAAAAAAakG91AEAAAAAAAAAAFAV69evj5kzZ8bEiRNTp1BDxxxzTHTu3Dleeuml1CnUojFjxkTjxo1TZ1AFU6ZMicrKytQZAGwH7dq1izvuuCO6deuWOgXyXsOGDeOKK66Ir3/96zFo0KDYsGFD6iQA6oAVK1akTmAL/E0TAACAfHHTTTdFcXFx6ozMGTRoUOoEAAAAAAAAAGrIcA8AAAAAAAAAAHlj8uTJcfrpp8dee+2VOoUaaNCgQZSVlcXAgQNTp1BLmjRpEt/97ndTZ1AFzzzzTPzsZz9LnQHAdnDsscfGrFmz4itf+UrqFKhTvvvd78Y+++wTAwYMiFdeeSV1DgB57uWXX06dwGZUVFTE448/njoDAAAAquTkk0+Ohg0bps7IHMM9AAAAAAAAAPmrMHUAAAAAAAAAAABUVWVlZUydOjV1BlvhW9/6VrRq1Sp1BrVkzJgxUVpamjqDLaisrIyLL744dQYA28HIkSPj7rvvNtoDtWTfffeNJ554Io4//vjUKQDkuXnz5sXGjRtTZ7AJb7zxRqxduzZ1BgAAAAAAAAAAAAAAtcBwDwAAAAAAAAAAeWXGjBnxpz/9KXUGNdS4ceMoKytLnUEtKCoqikGDBqXOoArmzp0b8+fPT50BQC276aab4oorroiSkpLUKVCnNW/ePO68884YM2ZM6hQA8tjq1avjzTffTJ3BJixbtix1AgAAAAAAAAAAAAAAtcRwDwAAAAAAAAAAeWfKlCmpE9gKJ510kgPk66BRo0ZFy5YtU2ewBevXr4+xY8emzgCgFjVp0iQee+yxOPPMM6OgoCB1DmRCcXFxTJo0KW655ZbUKQDksT/+8Y+pE9iEP/zhD6kTAAAAAAAAAAAAAACoJYZ7AAAAAAAAAADIO3fddVcsWrQodQY1VFpaGuPGjUudwTZ25plnpk6gCn7xi1/En/70p9QZANSSNm3axNNPPx2HHXZY6hTIpNNOOy0WLFgQTZo0SZ0CQB5auHBh6gQ24YEHHkidAAAAAAAAAAAAAABALTHcAwAAAAAAAABAXpo4cWJUVlamzqCGBg8eHIWFLl+qK4YOHRpt27ZNncEWfPDBBzF69OjUGQDUkp49e8YTTzwR++67b+oUyLTDDz88Fi5c6P0xANV23333RUVFReoMvmDlypXx4osvps4AAAAAAAAAAAAAAKCWOPkCAAAAAAAAAIC8NG/evFiwYEHqDGqoVatWMXz48NQZbCPnnHNO6gSqYNasWfHuu++mzgCgFvTv3z8eeOCB+OpXv5o6BYiITp06xeOPPx4HH3xw6hQA8shrr70WL7/8cuoMvuCpp55KnQAAAAAAAAAAAAAAQC0y3AMAAAAAAAAAQN6aMGFCbNiwIXUGNTRkyJDUCWwDJ510Uuy///6pM9iCN954I8aPH586A4BaMHDgwLj99ttjl112SZ0C/JtWrVrFnDlzom/fvqlTAMgjjz/+eOoEvuD+++9PnQAAAAAAAAAAAAAAQC0y3AMAAAAAAAAAQN565plnYs6cOakzqKH27dvHGWeckTqDrfTDH/4wdQJVcPXVV0dFRUXqDAC2sfPOOy9uuummaNSoUeoU4Evssssucdddd8XAgQNTpwCQJ2644Yb4/PPPU2fwTytXrowHH3wwdQYAAAAAAAAAAAAAALXIcA8AAAAAAAAAAHlt3Lhx8fHHH6fOoIbOPffc1AlshWOOOSYOOuig1BlswdKlS2PGjBmpMwDYxsrKyuLaa6+NBg0apE4BNqNx48Zx0003xdChQ1OnAJAHXnvttViyZEnqDP7p4YcfTp0AAAAAAAAAAAAAAEAtM9wDAAAAAAAAAEBee/XVV+Oee+5JnUENdevWLY499tjUGdTQ8OHDo6CgIHUGm7Fx48aYOHFi6gwAtrFLL700Jk2aFEVFRalTgCpo0KBBXHfddTFq1KjUKQDkgdtuuy11AhHx6aefxo9//OPUGQAAAAAAAAAAAAAA1DLDPQAAAAAAAAAA5L2xY8fGmjVrUmdQQ8OHD0+dQA0ceOCBccQRR6TOYAsee+yxeOCBB1JnALANXXrppVFeXm48D/JM/fr14/LLL4+LL744dQoAOe7GG2+MVatWpc7IvEcffTRWrFiROgMAAAAAAAAAAAAAgFpmuAcAAAAAAAAAgLz39ttvx2233ZY6gxrq1atX9OzZM3UG1VRWVhZFRUWpM9iMzz77LMrLy1NnALANGe2B/FZUVBTjx4+PSy+9NHUKADnulltuSZ2QaRUVFXHllVemzgAAAAAAAAAAAAAAYDsw3AMAAAAAAAAAQJ1QXl4e//d//5c6gxooKiqKUaNGpc6gGtq1axff/OY3U2ewBffdd18sWbIkdQYA24jRHqgbCgoKory83HgPAJt12WWXxZtvvpk6I7MeffTR+N3vfpc6AwAAAAAAAAAAAACA7cBwDwAAAAAAAAAAdcJHH30UN954Y+oMaujoo4+Ozp07p86gisaOHRvFxcWpM9iMDz/8MEaPHp06A4BtZPTo0UZ7oA75/8d7xo8fnzoFgBxVUVERM2fOTJ2RSZ999llMnDgxdQYAAAAAAAAAAAAAANuJ4R4AAAAAAAAAAOqMiRMnxsqVK1NnUAPFxcVx4YUXps6gClq0aBEnnHBC6gy24JZbbonVq1enzgBgGxg1alRcdtllRnugjikoKIiLLrooRo0alToFgBw1efLkeOWVV1JnZM69994bixYtSp0BAAAAAAAAAAAAAMB2YrgHAAAAAAAAAIA6o6KiIn7yk5+kzqCG+vfvHy1btkydwRaMHTs2GjdunDqDzXjzzTdj7NixqTMA2AbOPvvsmDhxYhQVFaVOAWpBUVFRTJo0KYYOHZo6BYAcVV5eHhUVFakzMuOdd94xqgcAAAAAAAAAAAAAkDGGewAAAAAAAAAAqFOmTp0ar7zySuoMaqBx48YxZsyY1BlsRklJSQwYMCB1Bltw3XXXxfr161NnALCVTjjhhJg6dWo0aNAgdQpQi+rVqxdTp06NwYMHp04BIAc9+OCDcffdd6fOyIxLL7003n777dQZAAAAAAAAAAAAAABsR4Z7AAAAAAAAAACoc6644orUCdTQySefHCUlJakz2ITx48dHaWlp6gw24+WXX46rr746dQYAW+mwww6Lm266KXbYYYfUKcB20KBBg5g+fXr069cvdQoAOegHP/hBrFy5MnVGnffII4/EzJkzU2cAAAAAAAAAAAAAALCdGe4BAAAAAAAAAKDOuf322+MPf/hD6gxqoLS0NMaNG5c6gy9RWFgYgwcPTp3BFlx++eWpEwDYSvvuu2/ceeed0bRp09QpwHbUuHHjuPXWW6NHjx6pUwDIMWvWrIlzzz03Pv3009QpddaqVavitNNOS50BAAAAAAAAAAAAAEAChnsAAAAAAAAAAKiTLrvssti4cWPqDGpg8ODBUVjo0qZcM3LkyNh9991TZ7AZTz75ZNx1112pMwDYCs2bN49f/vKX8ZWvfCV1CpDALrvsEvfcc0+0a9cudQoAOWb+/PnGemvJxx9/HEOGDIn3338/dQoAAAAAAAAAAAAAAAk43QIAAAAAAAAAgDrpoYceiscffzx1BjXQqlWrGD58eOoMvuCss85KncBmfP755zFhwoTUGQBshcLCwrj//vtj7733Tp0CJNSyZcv41a9+FU2aNEmdAkCOmThxYtx9992pM+qUjRs3RllZWSxYsCB1CgAAAAAAAAAAAAAAiRjuAQAAAAAAAACgzrrkkkvi888/T51BDQwZMiR1Av/me9/7nhGBHPfrX/86nnrqqdQZAGyFX/ziF9GjR4/UGUAO6NixYzz44INRWOgjHwD8p1NPPdVY+TZ05ZVXxvTp01NnAAAAAAAAAAAAAACQkE9xAQAAAAAAAABQZ/3ud7+Lhx9+OHUGNdC+ffs4/fTTU2fwT0OHDk2dwGasW7cuysrKUmcAsBWmTJkS3/nOd1JnADnkf//3f+PWW29NnQFAjqmsrIx+/frFs88+mzol7/30pz+NMWPGpM4AAAAAAAAAAAAAACAxwz0AAAAAAAAAANRp48ePj/Xr16fOoAa+//3vp04gIk488cTo0qVL6gw247bbbovly5enzgCghgYPHhwjRoxInQHkoIEDB8b48eNTZwCQY9avXx9HHnmk8Z6tcMMNN8Q555yTOgMAAAAAAAAAAAAAgBxguAcAAAAAAAAAgDrtpZdeinvvvTd1BjXQrVu36NevX+qMzDvvvPNSJ7AZ77zzTowdOzZ1BgA11L1795g6dWrUq1cvdQqQo8rLy+O73/1u6gwAcszatWvjyCOPjMceeyx1Sl6prKyMq666ymA4AAAAAAAAAAAAAAD/YrgHAAAAAAAAAIA6r7y8PNauXZs6gxoYPnx46oRMO/LII+N//ud/UmewGdOmTfP6BpCnSktL44477oimTZumTgFyWIMGDWLmzJnRtWvX1CkA5Ji1a9fGMcccE3feeWfqlLywfv36uOCCC2L06NGpUwAAAAAAAAAAAAAAyCGGewAAAAAAAAAAqPNWr14dt99+e+oMauCQQw6Jnj17ps7IrAsuuCAKCgpSZ7AJr7/+ekyePDl1BgA19Itf/CL22muv1BlAHthll13itttui5KSktQpAOSYysrKGDhwYIwdOzbWr1+fOidnrV69Oo4//vi47rrrUqcAAAAAAAAAAAAAAJBjDPcAAAAAAAAAAJAJ5eXl8e6776bOoJqKioriggsuSJ2RSd26dYsjjjgidQabMWXKlKisrEydAUANTJkyxf+zQLV07Ngx7rrrrtQZAOSoKVOmxHHHHRd/+ctfUqfknN/85jfRo0ePmD9/fuoUAAAAAAAAAAAAAABykOEeAAAAAAAAAAAyYe3atXHTTTelzqAGevfuHR07dkydkTmjR4+OevXqpc5gExYvXhy33HJL6gwAauA73/lODB8+PHUGkIeOO+64mDBhQuoMAHLUo48+Gl26dIk777wzKioqUuckt2bNmigrK4vevXvH6tWrU+cAAAAAAAAAAAAAAJCjDPcAAAAAAAAAAJAZF110Ufztb39LnUE1FRcXx+jRo1NnZErbtm2jb9++qTPYhIqKCge2A+SpNm3axPTp06N+/fqpU4A8VVZWFn369EmdAUCO+uijj2LgwIFxwgknxKuvvpo6J4mNGzfGI488Et26dYsrr7wydQ4AAAAAAAAAAAAAADnOcA8AAAAAAAAAAJlRUVER06ZNS51BDRx//PHRokWL1BmZMXbs2CgpKUmdwSbMnTs3Hn300dQZANTAbbfdFrvuumvqDCCPFRcXx/XXXx+lpaWpUwDIYXPmzInOnTvHRRddFO+8807qnO3mhRdeiG9/+9vRr1+/WLFiReocAAAAAAAAAAAAAADygOEeAAAAAAAAAAAy5eqrr45ly5alzqCaGjduHGPHjk2dkQnNmzePE044IXUGm/DJJ594LgDkqauuuip69OiROgOoA/bYY4+4/fbbU2cAkOMqKyvjsssui3bt2sXUqVPr9IDPCy+8EEOHDo2uXbvGAw88kDoHAAAAAAAAAAAAAIA8YrgHAAAAAAAAAIDMufrqq1MnUAMnn3xylJSUpM6o88aNGxdNmjRJncEm3HXXXfHSSy+lzgCgmvr27RvnnXde6gygDundu3eMHz8+dQYAeWDt2rUxYsSIaN26dVxyySXx+uuvp07aJioqKuK3v/1tDBgwILp27RqzZs1KnQQAAAAAAAAAAAAAQB4y3AMAAAAAAAAAQObcfPPN8dxzz6XOoJqaNWsW5eXlqTPqtJKSkhgwYEDqDDbh/fffjzFjxqTOAKCaSktLY8aMGdGgQYPUKUAdM3r06Dj44INTZwCQJ9avXx+XXHJJtG/fPk466aSYM2dOrFu3LnVWtb3xxhtx/fXXR9euXePwww+Pu+++O3USAAAAAAAAAAAAAAB5zHAPAAAAAAAAAACZdPnll8fGjRtTZ1BNgwcPjsJClz3VlvLy8mjWrFnqDDbhxhtvjHfffTd1BgDVNGvWrNhjjz1SZwB1UMOGDWPWrFlRVFSUOgWAPHPvvffGcccdF7vttlv88Ic/jHnz5sU//vGP1FlfauPGjfGXv/wlZs+eHX379o2vfe1rMWzYsPjTn/6UOg0AAAAAAAAAAAAAgDrACRYAAAAAAAAAAGTS/fffH0899VTqDKrpq1/9apx//vmpM+qkwsLCOO2001JnsAkrV66MCRMmpM4AoJqGDBkS/fv3T50B1GGdOnWKG264IXUGAHnqo48+iunTp8c3v/nNKC0tjeOOOy6uv/76WLRoUaxZsyZJ08aNG+ONN96IRx55JCZMmBD77rtv7L333nHGGWfE3LlzkzQBAAAAAAAAAAAAAFB31UsdAAAAAAAAAAAAqVx66aXxm9/8JoqKilKnUA1DhgyJa6+9NnVGnTN8+PBo1apV6gw24eqrr46KiorUGQBUwx577BGTJk2KgoKC1ClAHXfaaafFQw89FA8++GDqFADy3Jw5c2LOnDn/+nePHj3i4IMPjk6dOkXr1q1jt912ixYtWsROO+201ff1+eefx3vvvRdvvfVWrF69OpYvXx4vvvhiLFiwIP7+979v9c8HAAAAAAAAAAAAAICqMNwDAAAAAAAAAEBmPfHEEzF37tzo169f6hSqoUOHDnH66afHrbfemjqlThkyZEjqBDbh+eefj5kzZ6bOAKCaZs2aFc2bN0+dAWRAvXr14pprron58+fH+vXrU+cAUIf8/ve/j9///vf/dXuTJk2iU6dOsddee8XOO+8cO+20UzRq1CgaN24chYWF//G1n3zySaxfvz7Wrl0b//jHP+Ktt96KFStWxCuvvLK9HgYAAAAAAAAAAAAAAGyS4R4AAAAAAAAAADJtwoQJcdRRR0VxcXHqFKrh+9//vuGebeiss86K9u3bp87gS1RWVsbEiRNTZwBQTeedd14cffTRqTOADGnTpk3MmjUrBg8enDoFgAxYu3ZtLFq0KBYtWpQ6BQAAAAAAAAAAAAAAtkph6gAAAAAAAAAAAEhp6dKl8atf/Sp1BtXUrVu36NevX+qMOuP73/9+6gQ24bHHHosHH3wwdQYA1dCqVasYP3586gwggwYMGBDHHXdc6gwAAAAAAAAAAAAAAACAvGG4BwAAAAAAAACAzBs/fnysW7cudQbVNHz48NQJdcIJJ5wQBxxwQOoMvsSnn34a5eXlqTMAqKYZM2ZEs2bNUmcAGVRUVBRXXXVVFBUVpU4BAAAAAAAAAAAAAAAAyAuGewAAAAAAAAAAyLwVK1bEz3/+89QZVNMhhxwSPXr0SJ2R984///zUCWzCfffdF88++2zqDACq4fTTT49+/fqlzgAyrG3btnHdddelzgAAAAAAAAAAAAAAAADIC4Z7AAAAAAAAAAAgIsaNGxfvv/9+6gyqoaioKEaOHJk6I68dccQRxo9y1Jo1a6KsrCx1BgDV0KhRo5g4cWIUFBSkTgEy7qyzzoqePXumzgAAAAAAAAAAAAAAAADIeYZ7AAAAAAAAAAAgIt5///24+eabU2dQTX369IkOHTqkzshbI0aMiMJCl5HloptvvjlWr16dOgOAapg6dWrsvvvuqTMAori4OK666qrUGQAAAAAAAAAAAAAAAAA5z4kLAAAAAAAAAADwTxdffHG8+eabqTOohuLi4igrK0udkZe6du0aRx55ZOoMvsTq1atj/PjxqTMAqIZevXrFoEGDUmcA/Ev37t1j+PDhqTMAAAAAAAAAAAAAAAAAcprhHgAAAAAAAAAA+Kf169fHjBkzUmdQTSeccEI0b948dUbeGT16dNSvXz91Bl/iuuuui/Xr16fOAKAarr766mjQoEHqDID/MHr06CgtLU2dAQAAAAAAAAAAAAAAAJCzDPcAAAAAAAAAAMC/ufLKK+P1119PnUE1NG7cOMaNG5c6I6+0bds2+vbtmzqDL/HSSy/FNddckzoDgGq44IIL4sADD0ydAfBfdt1117j22mtTZwAAAAAAAAAAAAAAAADkLMM9AAAAAAAAAADwbyorKx1snIcGDBgQJSUlqTPyRllZWTRs2DB1Bl+wcePGmDRpUuoMAKqhSZMmccEFF6TOANikk046KQ4++ODUGQAAAAAAAAAAAAAAAAA5yXAPAAAAAAAAAAB8wY033hgvvvhi6gyqoVmzZjF27NjUGXmhefPm8e1vfzt1Bl/iqaeeirvvvjt1BgDVcNVVV0WLFi1SZwBsUoMGDWLy5MmpMwAAAAAAAAAAAAAAAABykuEeAAAAAAAAAAD4EpdffnnqBKpp8ODBUVjokqgtGTt2bOy0006pM/iCDRs2xEUXXZQ6A4BqOOCAA2LQoEGpMwC26JBDDvF6BQAAAAAAAAAAAAAAAPAlnFIBAAAAAAAAAABf4t57742FCxemzqAa9thjj/jRj36UOiOnlZSUxIABA1Jn8CUeeOCBePrpp1NnAFANU6ZMiZKSktQZAFUyduzY1AkAAAAAAAAAAAAAAAAAOcdwDwAAAAAAAAAAbMIll1wSlZWVqTOohiFDhqROyGllZWWx6667ps7gC9atWxfl5eWpMwCohv79+8eRRx6ZOgOgytq3bx+jR49OnQEAAAAAAAAAAAAAAACQUwz3AAAAAAAAAADAJixYsCDmz5+fOoNq2GeffWLw4MGpM3JSYWFhnH766akz+BK33nprLF++PHUGANUwbtz/x959h1dd3///fyYBZBmjyBARFXAUQZSKq9SKuLWuunBbUam4qyJLRHFW69Y6WrVu3BXrbJ1VUcRaKXUXFS2CICIgiAm/Pz78+kWrECDkmZxzu11X/lCT9/vOdXlxkpxzXo8hUVJSkp0BsESOO+64aNy4cXYGAAAAAAAAAAAAAAAAQJ1huAcAAAAAAAAAABZh2LBhMW/evOwMlkD//v2zE+qkE044Idq3b5+dwXdMmjQphgwZkp0BwBLo169fdO/ePTsDYIm1bds2RowYkZ0BAAAAAAAAAAAAAAAAUGcY7gEAAAAAAAAAgEUYM2ZM3H///dkZLIFNNtkkdt111+yMOufII4/MTuB7XHnllTFjxozsDACqqbS0NE455ZTsDIClduihh0ZFRUV2BgAAAAAAAAAAAAAAAECdYLgHAAAAAAAAAAAWY8iQITF79uzsDKqppKQkTjjhhOyMOuXwww+P9ddfPzuD73jrrbfi/PPPz84AYAkMGTIkOnTokJ0BsNRatGgR55xzTnYGAAAAAAAAAAAAAAAAQJ1guAcAAAAAAAAAABbj3Xffjdtvvz07gyWw9dZbx5ZbbpmdUWccc8wx2Ql8jwsuuCCqqqqyMwCopoYNG8aRRx6ZnQGwzPr06RMtW7bMzgAAAAAAAAAAAAAAAABIZ7gHAAAAAAAAAACqYfDgwTF9+vTsDKqprKwsTjnllOyMOmH33XePH//4x9kZfMeLL74YN910U3YGAEvgrLPOitVXXz07gwL1zTffxOzZs2PGjBnx2WefxaRJk+Kzzz6Lzz77LGbMmBGzZ8/OTqSAVFRUxPDhw7MzAAAAAAAAAAAAAAAAANI1yA4AAAAAAAAAAID6YMqUKfGHP/whTj755OwUqmmnnXaK9ddfP958883slFQnnnhidgLfUVlZGcOGDcvOAGAJNG7cOA477LDsDOqp+fPnx6effhofffRRTJgwISZOnBiTJk2K//znP/H+++/HuHHjYsaMGYu9TllZWfzoRz+Kdu3aRZs2bWLttdeONdZYI9q2bRtt27aNNddcM1ZcccVa+BNRCPbff/8YNmxYTJkyJTsFAAAAAAAAAAAAAAAAII3hHgAAAAAAAAAAqKYhQ4bEAQccEG3atMlOoRpWWGGFOP3004v6kP2tttoqfvrTn2Zn8B1//vOf48knn8zOAGAJnHPOOdG6devsDOqJyZMnx/jx42Ps2LHxwgsvxDPPPBNTp05d5utWVlbGuHHjYty4cT/4Od27d48tt9wyunfvHhtuuGGst9560axZs2W+N4WnoqIiBg8ebOgTAAAAAAAAAAAAAAAAKGqGewAAAAAAAAAAoJrmzJkTV199dZx11lnZKVTTXnvtFaeeempMmTIlOyXFaaedFqWlpdkZLGT27NkxcODA7AwAlkDjxo3joIMOys6gDvvqq6/i1Vdfjaeffjr+9Kc/xZgxY9Jaxo4dG2PHjv3vP5eWlsYuu+wSO++8c2yxxRbRuXPnaNDA2wj4PwceeGCcccYZMWPGjOwUAAAAAAAAAAAAAAAAgBROZAAAAAAAAAAAgCVw7rnnxr///e/sDKqpefPmMWTIkOyMFN26dYvtttsuO4PvuP3222P8+PHZGQAsgWHDhkXLli2zM6hjvvzyy3j44Yfj+OOPj1atWsVWW20VZ5xxRupoz/epqqqKhx56KH71q1/FRhttFO3bt48hQ4bE888/H3Pnzs3OI1mLFi2MSgIAAAAAAAAAAAAAAABFzXAPAAAAAAAAAAAsgaqqqrjkkkuyM1gC+++/fzRu3Dg7o9YNHDgwGjZsmJ3BQj777DMHowPUM2VlZXHIIYdkZ1BHzJ8/P8aOHRtDhgyJNdZYI37+85/HlVdeGbNmzcpOq7ZJkybFueeeG1tttVW0b98+zjzzzHj99ddj/vz52WkkOfDAA6O01FtLAAAAAAAAAAAAAAAAgOLk3VUAAAAAAAAAALCErrzyyhg3blx2BtXUsmXLohtLWWuttWLXXXfNzuA7rr322pg6dWp2BgBLYMiQIbHaaqtlZ5Bs9uzZceedd8aWW24Zm2yySZx77rkxY8aM7KxlNmXKlDjrrLNi4403jm233TZGjhwZX375ZXYWtaxdu3ZxwgknZGcAAAAAAAAAAAAAAAAApDDcAwAAAAAAAAAAS+GCCy7ITmAJHHrooVFaWjwvlxo0aFA0bdo0O4OF/Pvf/45hw4ZlZwCwBEpLS+Pwww/PziDRtGnT4rrrrov1118/DjjggBg9enR20nLz1FNPxf777x+dOnWKyy+/PCZNmpSdRC3ydx0AAAAAAAAAAAAAAABQrIrnJAoAAAAAAAAAAKhBt912W7z00kvZGVRT+/bt4/jjj8/OqBUVFRWx9957Z2fwHRdeeGFUVVVlZwCwBI477rho3759dgYJvvjii7jsssuiQ4cO0a9fv5g4cWJ2Uq2ZMmVKnHjiibHGGmvE8OHD4z//+U92ErWgS5cusddee2VnAAAAAAAAAAAAAAAAANS6BtkBAAAAAAAAABSeL774IkaNGpWdARER8Y9//CM7gQJ29tlnx0MPPRSlpaXZKVRD375949JLL83OWO6GDh0aFRUV2Rks5NVXX41rr702OwOAJfTLX/4yO4Fa9vXXX8e9994bAwYMKKqxnu9TWVkZw4cPjwsuuCCGDRsWffv2jRYtWmRnsRz169cv7rvvvuwMAAAAAAAAAAAAAAAAgFpluAcAAAAAAACAGjd9+vQ4+OCDszMAlrtHHnkk/vKXv8R2222XnUI1dO7cOQ4++OC45ZZbslOWm4YNG8YBBxyQncFCqqqqYvjw4dkZACyhffbZJ7p27ZqdQS165pln4vTTT4/Ro0dnp9Qpc+bMiYEDB8ZFF10UF198cey///7RqFGj7CyWg5/97GfRuXPnGD9+fHYKAAAAAAAAAAAAAAAAQK0pzQ4AAAAAAAAAAID6bPjw4TFv3rzsDKrpmGOOyU5YrgYNGhStW7fOzmAhTz75ZIwaNSo7A4Al1L9//+wEasnUqVPjpJNOil69ehntWYSpU6fGYYcdFttuu228+OKL2TksBw0bNoyTTz45OwMAAAAAAAAAAAAAAACgVjXIDgAAAAAAAAAAgPrshRdeiFGjRsWee+6ZnUI1bLrpprHLLrvEww8/nJ1S40pLS+PQQw/NzmAhc+fOjUGDBmVnALCEtthii+jZs2d2BsvZ/Pnz4+GHH45jjjkmJk6cmJ1Tbzz//PPxk5/8JAYMGBCnn356rLTSStlJ1KBdd901ysrKorKyMjsFAACWWWlpaWywwQbRvn37aNu2bbRp0ybKy8ujvLw8VlxxxWjevHk0bdo0GjVqFI0aNYomTZpEWVnZf7++WbNmEfF/Pz/Onj37v/9+3rx5MXfu3Pj666/j66+/jlmzZsWsWbPiyy+/jJkzZ8b06dNj8uTJ8cknn8THH38cb7zxRsybN6/W//wAFI9OnTpF165dY4011og2bdpEy5Yto6KiIpo1axbNmjWLpk2bRpMmTf77+c2aNYtvvvkm5s6dGxH/95zm//9YNXPmzPjiiy9ixowZ8cUXX8Tnn38e06ZNiw8//DBef/31mDBhQsYfEQAAAAAAAAAAlivDPQAAAAAAAAAAsIyGDh0aO+ywQzRt2jQ7hcUoKSmJE088sSCHe4477rhYa621sjNYyMiRI2Ps2LHZGQAsoRNOOCFKS0uzM1iOpk2bFoMHD45rr702O6XeuuCCC+Lee++Na6+9Nnr16pWdQw1p1apVHHPMMXHFFVdkpwAAwGI1a9YsNt988+jcuXN07Ngx2rVrF61atYqWLVtGixYtYuWVV/7WEE+W+fPnxxdffBFTp06NqVOnxuTJk+Pjjz+ODz74IN599914+eWX48MPP8zOBKCOa9iwYWyzzTbRvXv36Ny5c6y99tqx2mqrRatWrf47NlcbZs+eHVOmTIkpU6bEpEmT4t13341//vOf8cwzz8S7775bax0AAAAAAAAAAFCTSiJifnYEAAAAAAAAQE3697//HWuuuWZ2RlH74IMPYu21187OAKhVN954Yxx66KHZGVRDZWVlbLXVVvHiiy9mp9SocePGRefOnbMzWGD69OnRpUuX+OSTT7JTAFgCLVq0iPfffz9WXHHF7BSWkzFjxsQhhxwSb775ZnZKwRg2bFicdtpp0aRJk+wUasBLL70UW265ZXYGdchLL70Um266aXZG0enXr19cd9112RkAUCc0bNgwtt1229h0001jnXXWiY4dO8Yaa6wRrVu3rhPDPDVh2rRp8cknn8QHH3wQ7733XvzjH/+Iv/71rzFhwoTsNACSbLzxxrHzzjvHRhttFD/60Y+iU6dO0ahRo+ysRZo2bVp8+OGH8fbbb8fLL78cf/7zn/0eFpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9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222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), aDD(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aDD(8,
					"googleplay", 3,
					"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"
					), aDD(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aDD(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aDD(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aDD(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aDD(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aDD(14, "bestPlayer", 5,
					"iVBORw0KGgoAAAANSUhEUgAAAHcAAABkCAMAAACLpV+NAAADAFBMVEUAAAAAAi8EBE8ZBQgUBwgbBwIQA24IBXsTBGIgCAYZDAUkCQonCAsdDAcSEAciDQsrCwgZDxwQESwnDQcYEwMvCxcfEgUxDAtOAzEbFwtPAzlpAAJlABVoAAtcADhfADBhACpjACMhEkUyEgtcAUAuEyRaBUYeHQkuFS1NC0EuGRcaF4MpFHRVDisyGDwgHnAlJg8aIIEoHmY9HFlmFhBgGB1ZGU0sLRI1KTYxLR8rJ4Q2LCxJJUg0Kl5QJVEzNBhYJys3L0pUJk1GK0dKLTAfM48tNGS+EANJLlVXMB86Ohk0NHssN4q8HQBWOiVNPSNDQyFLQC9kNGVRPGJMP1VlN15cO1thOl4+RV89RHhtN21ERldWQF1KSSFPRUI5TiwAYDQCXzq8KQ5KRWlBRYtGSzQ3UTZNRn8wTZkjWjJjR1jBLisZYEdSUSggXzw9T5A8VGZWTGgAbD4AbTMHakNkTFMtXz5aTmN+QX1FUodPUmQ+XDRLU3RdUz9PVGwHcDC5PBdbWCsAdUVGX3EAezkqbF9iYTJEYaRTZzlZYHhXYIe3TBq3SypsYEpeYXJYYn9QY5eRUJAAhTlzW4kAigpoaDJLa4G/TT6LWIR0Y1peamCdUp2FXngAkQ+AZGnCUk1yaWq0WyFYcH5nb1QBkyFibYVucDm0WzI8fHp0cEQAlT9XcqRQc7JicZJrcH8CmDJVd41+b1rFXFh3dzwCniKnYKIwkDGxaS2xajt1c8UApjIApT5xe5tff65/f0FNiZGccYx0ecOQfEFqgKFjhJR0gpNFmEiteT5ygcN+g4GIhFVgiqOPgWSHhkmVf3GAh2yJiENwhsCkgUORhVxikYR5ioZrkXeigIZXm17Id3FdlaVtj76Qjkq9g2Vslrt4l6JqoWhnm7tjnbNDr1uYlk+Fl6yKlceenFGWlM9ls3N6rHynpVeNp8SJrbqPtJexr1umsJCorNTYqKWgzqbVwbG3y9i30LnJyuPlzMrG29Dq5evW7tji6ujk+Or79vf///99szH1AAAb+0lEQVRo3oWaDVwUZf7A9+RFXtwFj01dRF4SGAiU0ZRRQDZBLhs4G0hRkCUQUrRmCRIFQu5WvSEoF/Bcg0M5zmQKlRVvei8nCqwsl7a8ope5q7v/XnvnnnqZqanp//fMzL4h/f8/ceEDs/Pd3/vveeZR+Pj4iv9k8fOWwEklWBT5h7Cw4BBZ4DfO97luoJR/8PX19Qvy9UOMoKAgXwX6wVf88vHz4Eq3CPx5bkJHR1Nc8LQwkGARHCxzpUs874JEvLVIELk+Ch8PQX/xUNNvEqCTm9By7NjRNokbJqofIv/RgwvflU6s8wW9TuT6+Exi3eAQt2mRdYPRz3ENLS0nWzoqQt3c4Du4gYEhgX53iMz1Rfb189L3TiWDJ8i0oqqqk39vaelYHhZ2j4vr9S50l5DASbiI4QNcX8kGfi7vTh5FXrKsKqf6ww8/rKxuiLvnHlnhsOCJbwyZTF0n10NR6afA/5+bUJmT9+Ho6OhgbnWRk4te7sBOyvWT9HW7VeZ7vXFSbm5O8uDo0NDQaENudcU9YZKTwySFXXQI8J/Hgr6+E9PWFU8h7iR1+nXatOBpwcty/NuGDoEMDVXmVi8JBZGjK9DtZzG8Pe6qnMD1dcVx4CRY9GYRKEGnTQudNm1+XlIlYHft2rV/6FRK5aY4ERwa6v540ocN8agigUploCfWT+GRQPAnV7EQ89EloaESEwDTEvKSUvqB2tjYaNw11Lagsgj9OtTJDXN9Vo/qhRJZ6ZlJPp5cz2rhhQ0W7yzdflpukn97v7Gxcf3q9Y2Nuw61pVU+FCqZOli0dpho7juiLNCtsI8rnifJoOA7uJIsW+DfANjVJdnZ2SXbm1tP5aZVLpfAYBdnEQnzyqoQb65nHv08d5oHd2bo/DT/3P7WxtVZqeHhiVnZNc39/Sm5lU4Xy2p7J1WInBeeDvZTuHJZBod4c5Flpzm5M2cmpE1N6e9vLMmKn5VeOis2NQuBk/M2ue0RKpvbg+rkehhajCs32V2PZXCo28IzkSxMSgbnAnaefufOrSsiU9fWtJqbkisr3NzgMNHkro8/CRdoCle3cHJD3NkT7KGGiL03CTkXsFEbd9bW7tTPk8BFyZXZoV4SHOy22SRc5N87SkbIZOEErp05c37yVHBuzZr4yPyttUg2RkemFgJ4YZqUxW5be4oT7FU3JjR775DyVveuZP+U9tbta+Mj79u6tRxk69b8qNjUkhpzX0DKsrvgChdX7hTSdxc30Is7ScudwJ0pyRT/gKbWmsLUyGg9YDdv3gzk+xC42bzOP2XlTAk8VyqbwcGu1hwSPDGg/Zzx7E1GyDAI42APXe+6617/gKLWmhLAbtxavvmpp9inniwv3xYTFZ9Z0my8OyBl/vz5cXfNnDvXFV2h7llkIhbieZJe70ogqI13Jdx778KFKcn+/v4BywCbFRuVv7V820cD77zDsU/qyx+JiYzPAvD2Kf7JSWlpebm5y5bNTxBNFeYqI4F3csWyNZmd4xKWL1uYkpaWlpQ0FUGn3H1383aEvQ+0vHDlv5988sk7CLwKwJklNca+mpSAqVOnJi1Iy8mrzKusLEL8OM9BxG8yO7upwFuWm5snAaf6L9xU1GQ0gxhrwLexUTHbEPbGjcvvvYfA5frFYOrUwpKa1tb2tra2hk2bUtKSkgGeV1VVXd3Q0FCx3AMc+DP+DS5qaanKy1mQNDU5paiprc18ytzfD1+trTU1JZBAUTGPlOv/cuXGTz/9+J4M3rYoJio2PgvIgG7tBzG3t7c1NOTm5eXkVcHceazJiXXrPVHfX7VUVeXlVTa09Q+OnjrV346Irc3ALFmblRobGR2xqlz/u69//AnkshO8cVFEdGRsfOqawhJg1zS3SngYSIZGjh49evLYsYQ7+pJiQjNqqDp2/vzXMDsd2r9/PxBFZCEwU+NjQdk5q/T63711/h/nbyLwqxJYv+2BOTHRUQidmrVmrUhvbm7dtX//0BBMf/9sObZ8Uq6nvm1VeedhZEPzBPRYSc3UeGBGRkXHzFlE6R974a0v//63v/2ANP7rKwjMPbW5HMgRCB0ZGxuP6IUl26E570Lgrztajio95zXR0IoJYdXYktPxtYiFxl6SIaoZGQXMmIjFqx4GZV946x+A/erbH27f/unyn1555T0xrIH8yKoHFsfEABzRw7OyYSxA4NHTVS3tUtHy7IcKH+/0DRnMSfp6FLCPr1+dnRiOkPPuW5X/yMZtUBdFZQH71Vcff/zdzdu3L/8JgZHKQNajyqnftvGR/PwV982LTMxAYOA2VB9Nv7NMKySqnxpTS/D11VOLRkV1sxNnrQCeXqrFAAVdQVkJ++1V4F57XgYj8lNPyuytW2t3bt04KxE0Bm5/Xkuru0y7piyJ64dpSQITvRDcv2AqMvP61Rnh6Tuh24lIYAL0yy9FGyPsD4C9dfn5p592kQHNPvUUYpdBi9xZGp6BuKO5VR3pTq4Sw3EsyMUNDMS0tIEmMT9UqpDCnyJu1qxtgC2DvJGZoCtSFrDvX70Ncu3Sb38rgV9BKYXYSO/NInjjrKzVMPaZ06qandOeEid1lBZzcgMDg3AdTbAGLSaOvf1J/sjOq7MigVtWhswrM/8mUT9+/7vrCPvFsxs2ANhFltV+anNZWe3O/Mis1c27DuXlIHXF4dYPIw0GmiZULq6aoE0Yw9HEDGSP0oapC0cPIW4+cMt/98KX/xCZLur7onNvX3p0A4ik8p+ef+XVV1+VyAPP6ctq9fNiM2paD7UuqGoU2zF4UKM1cCTFaDVObhBG0DyF8yZKVDjYnBZgNBu3QwvYVlumf0GMJcSUqW+/fxWpe/2PG379axn89NPPg4jkT9754DPg5keFFza3nk4BdWVsEEFzrMLEkKKHgavCtST6lcFi0GpQ6y1tm7rstLEROu2KreV6OWFFqIh9G6UQ8u6G+0WwRH5GIr/33jsfAXdbTCSMA4faF1Q3hsodCSNNVoLgGVIMLeBiJG1gWCuG8SyFK2EZFAoKVxwChcUO/7u35IxFUKAC9/otCOZrf9xwvwv826efeeYZkfvJfy98Vl4OY0hWDaib1ubswGrCwJtANwaFllKp8FMRNGXgOEGnoEFhDHHT26ZOOWXcXhgftbi8/DEn930ZC2DEvXQ/Ehf4GQRG3CsXtpVvFNU1tyZVNcprlxkYxVpxBc+bTDStVQcq/NRag0HNWQWW0rKsDp8B3FBjXoDxtBEMjbreC186uW/LgrLIi7vBzT3738/0+sXRsZmgbnJa2z3yuANBZaEJ3MbzBg24OFDhoyIMnJaw2gUtR4L1MTSiIIXNMDnGRi3WI0ODfz24r/0LwNf/fP8d4OfBvcjMVAREVY25IrmyUZ4vZ+A6liUYg93GqWiIX6XCB5IXgoqyOyhBZxJzCTQ25gZUmEWF82VDu7mvvYYUvvXFholc8O97l8HM+kXIzMbTAQva5spcjGR4kqetDiuO8ZBKSjGuGCupoi9yJoHgTGAD0Piedv8pYipFL9I7De3mvgYOvnXtWZn7axcXsDeufKZ/cA7MmDWnfzW1cr08Xc6AHGIou9Zh1ypMPE0EoXgOwiGLtLTJTjloGhRWI4UbcwOWn4ZUioIBAxnam/sv4N6SDb1hwx///CwKrOf/+tcffwJu+eyIqMRCY19AUtvcuSIYqcvhAm+6SJFaK6imDFQEBkoK8zRL2gScRcUDXdrqP6VPNPQivcz9+H0n9rXXrgL30qMy9tplKJnPPnv5MgwhNy5s2zgbmblvmX/l+pkz5zrVpemLOqvBpEPqqgKVwA2cgTxM2SkV6zBQHBQPNKuXFk35pRlSOGb2RpeD3dzXroOhvwDwhi8uId2vXbt07TZMIN9/f07/CHAza2oCklvnStwwnDKxmGDHaJNVa0GeDAxUhKD2hLxutROkzYKbTBQehlYIxoBfrIaIjp7zsORgby6y9KU/3n//o9du3XYKaPv9vz/f/PDsmNjMinsXNpTCXZCd1agwM3ZOQV+kTJyOUIdI3BlQsVgT6bBoBiyMVlQY3rGi4hfztxfGRv0M9zpK4Ucf/cKNvQ3Y/zmyt0zm5jbPFblzwyCHGNwiUKSD16JMDZL0VeJaHW3iSdY2cOLE2aUMFI974A133ft/cd+G3nDr0rOXAH/zypUrP928efOnG+f+/cYbTu7K3E0rkNnmhqKgIvacPZtvsWshUdGAAfU5JESjpWmW5VnCcqa7d2zPUg4+0tyZc+/1n9It2fmxSbivQZG+haiAPXfh3QtXfvzxyveAlbiRqQ/15VZXiCtECCqWXnpmrPuMwJAWljGAoUUutGNcZxUEcs9Y3ZLhsXyUSzNmzkzxXz5WkxUbM3vbYy94xpXT0GLvv33r5pXP392372Ukx48D98gTeuAmPmQ0VjYsAW4YRjGc5sR43dKxD3DWynMUTcHIoUANimFUlGDnl46NL9kyPoZBimOhdycF9JnFPHIXShH77Xffvv2vf0GtlDx75ZvP9yE5fPi4zC17ICIqfmXN6cqGCkldjiodO6CqG9tD2WxWLc7ocNQHxQ5lUJCCgz4xvsX3wHgphRROgR7cjOrGgx5149vvvvvu6vXr169evXpdDqgL7+6TuYcl7u6yh+dEx6ZWmM3VHQkzIYcGBjRjw0vSh8c0FgePqVCF8JPqFWWyaHWURVg6NuybPjyePjBALc8JOG2uyYqPivCok+9fv+6M3VvSy80fz+3b56UvOLj8AWToptObOipC0XBDdI9vUWwZ7zY4TLiCgbqhluZJGK84TmulGQrcgC6AXCpKKjK3OvuCHFbvf4fC6OZNJxYFshuLuJKhyzdGoAKNFF4CJcmQPj7sq0LqGhhGZ4WBI0jm4iRY2uBgNOljB3yWHBhPZ/bk+febawqRurJ7v/32u6ti0ly48OPNH69AAN+8ee7c5/vu5O5GCsemgsJFLU2QQ1jveLovaENoeQHnWTGcEVeNEySUTZJzcKre4SVr0sd7lzal5Z5uLcmMjc4X+/5/zv/nhx/kpHn35W+++fzld18+9825l/e5xcV9Y2+tuOuxUlR4B0eXjtdlxw2PB2kFB+SvQZ6vYHiG+cpg4FjcahuoG16zprh0fHVeUpu5GZl5G1L3/A8/iKPczZ+ufPPuvsnk4EE398ju8vJV0fGpoofNA9PHexPqs4e3LBUcjI6H8QoKB9IXygb0eygcBtJyZryrM6Ezu/dADtofg6haVS5y0aITyuCV7899fnhy7EFXXImGhnlSVji/bjy9M6O+q/eMjQMrM4xJLBwKSF8DiTFWEHLPmdI1PQX1nUuqk9r6ZXXRHCsudqH6vnv8+OGDByejHjzswQVDb82HyKpoP72ppWm8tKAz46WXesfOYiYLB/MVjlZECnGM1ym0rGCzLB3rVsUlJLz0+7xccyuKqlVbyx+Tud//+9z/HD98+MWDXuCD6N/Bgy++ePh1CSpzy/ViKpnNDR29CS+tySqIWzqWb7AJAqtVGaAOK5F/IX1pFUnxDq50vDeuuLizckHbITBzbLS+tgwtecHON1Dtff311w+/iMgH3ViR+iL85Q0PLiyQ8iMTV9aAwh1N4LqMOAhW0mbnSYUKzXBqNG+oCR1rpWleRwt09/iBhM7OvLT+/cjM+bAchGnjrfM3bkCLk8CvS2CRuG8S7JEje3eXlaEFUnhmRfMhc0dHZ09PwYrxsXRB0FEMxqJOCHMOLH41BKSRzgCfhlSOAbhyQdOh1sbCxFl6tAyF9eBfoEB8/+8jLrBT5YNe2CMge/fu3v0EwtbuTEfcXacbOn7fmQXtppSGuBUIhMWhASvQYl8C03Y7i6f3dhVXpfT3G2G5P28rWoeWwUL/M5DPdx85clwky2AvKlJz9xO16PpyaeEN3OXrdg31d3RkZHeN71AQnEPATTJWKa73gzAtAutsNsuO3q5NOQ1D+8VtBj1a75ch0YOU1f5m797j3mAZC9AnEFCSWoTVz0sE7uP7TyGFu3o1BpuDx8WyoUbbCiIXI7QUTBzQGiwneruqFgwO7XoccdNBYXHFX77tyYdBNpc9sfsIUtkJdmLBo5sppzwiyrxZiRnAFRXu6eo9YbGxCEsRmNq5zwDaQsVmeStNfTBWWlQF6gJ3eUb4rHn3zYuJiIiYAzIbZNGDm8t+I6osgUXsG8f3PlH28KLZs+dERMSgjaToqKioyFnhCAvc/aMNR9uy6k5YBnCWNxloSmwLUh/U0QxnsQo2O0Od6a3OGxG5q5dnJIbPQptXSKLhjhFzZi96uOyJvUck8IuStgj74OzZ0rZZZCzaOItPTEzMzEZYxB08enRJ95kBnBcsPMeZwNLyuhsWohoV9CTWaqPzzVUNo4j7+Pr1q7MzsuAOcJ/w8Fi4ZxQiP7C5zA2Wsatmz4mRtglTM5GsXJldsnqdhN0/NNpx8s2xE1qbw27lTDRJomWKs+/DGKtSaGHWm95SPfIhcEUwoFeXICksLMzKSg1HZBEsRpcob4jaRkRHxqPNQbQtinZGRXkcPblEO4UjJ0f2+FIMhSsUCkwH5Vkl+RfSiOGsPEPQVvtHxzo+/HBoaD+QAd3Y3Ii+QLZvX11SmBUeGR0x+8GyWhcYhdRmWA9FxmeUbK8xGtFGdSu8Hjpkhv+ffjo6+vXXX58/9nEpw1tYrYZmeYhoTI4rJTR+8LDVyurIwWMjcOWnkpxG0tdn7Dv90bq7715SV5KRGBsVMftJ8LGYyGLvgTFOfJqzfWX2+sZGuLqpubmvuampqehXTe0NDR0dR08eO/mBjaO0JquVY2jXvoq4gQXrQc5iswtvHjvW0lBdmZubsjAFvuAlIMAfSUDywsK67StTAfxAWdlvjsiluKzsSRG7fSx7ukLxiylT0OVTRUlKWlBVXV2NNr4H8wnGIojuJaQNO4mrRFHFQ0Q7PjoJ4Kq8nJwFSUnym3Ny8vIqK6urG4oqKipWIo2p8jIoXggL1QKGuPjCmr4+hWJ9Y3N7e/sgyJuynDp16p9InrNdvGi3WXkTLW/XufTVURiG4fD/1H/+809ZRkAGIQs6OtoaAPqrhramRgCDj/UA3ntExD4MM1xWjbFm4S/XGftEMR84cKCrq7Tzpa7h3rEzZ/PT05cyJhCGMdAGCg/y2BeFkDYwENQmhtb9oe8PIM+d6O7uPrAlfcmSJdn19cUFmRkZCcs62oyNFZnxkTEPQA1+QuoAi6PR1o1x05RfNiYkZGRkFhQX109PyKyfDiPG2NgZi4BWARDIKjVURchYT64U0qzV7rgI4rDo4DIMW7pny9rM+p6Mzp76jIL6YiAXDfb3NT2UGh8Vs7FcLNtltY/ERIYXNhuNuVOas+dnZBYXFxR09hRn1mcmZB/o1qhUQKR5we5wOLzs7OPcb9cQJG2ikR00JMQdXGizDNStrQdmfUbC9PpOUKSgYHCw3yiCF+slrH4xsnKzsS1gWU1BJlzRU6xIKO6Z39NTv6ZugOMtUJFhsWniBZvVwjE6rayu+3mKGkwNRZ0kcEJnMLE81LSBHXVr6uOmZ9R3ZvRkTi8Ac1eMDJqbUWxF56OGUVubL1m5PTegaXp9fX2morgnobMgIS4DsDs40POiww6zjQKJmtHJweznfi6JugO0JFSkQQSOVKhJnttTV5hdD3bLAENn9HTOn942MtjXhFw8bxvqdjBFhWfXtBo3JS8rUGT19CQUZxSDXzrXTF9bt2NgANNADUaBw3E8x0JllrGynaVHDKgJQ1NCvhBMOoMVLM0NDPSi2EzwXfNSZ0JPZnFG/cib7WBpAK+AHlu7AoaZ1WDltOTf12dmFvfEdXZmK7I6u7rW1p0YEByoWHB2CBm7wKPcdRrZTzxH4bI0xBaY16TDFDoWohDHcZNl4MSJ7t70A8PDXXGZmUAWLQ3gxFkrNm5cMSscPQs1b0oreqgYvFqwpGt4eEv6gd7u7gGLFqcZi01gSdIE33gWQkft+TzU9dwZBnhUsxXoOytYaYzmDDgncPndY2NjdcNb4jp7sqYXDyJLrwNw+KxZgM1e12puy035/ZrpBT31ii3DdWPj3XV7LBZGx4FbGVgNSd0AklRHBE3gSmjggaVNEA2QSxyhwEidGtZMOP7B2bNLl471FnbVw6R0YGSwv6l53cqMRLHJrmtubd2Ut+lAV1xWfdeW3jHVjrNnBxS0zU6pCBLDWLiVjWcoAldpxfWnh52dXBVENAoBiyAwuIIw2S4ynMNAYZzDosWYsye667YUggnNYOnW5nXLV86fD60dJsa2ylxjd++WtVvqek+cJVW0YKc0WquDtNjgNiqTHSLaCu6T+p/3uRHJ1NCWKAqSiNIQBt7muGhCi0Qr5bBqeYoXBvIHdnSfGNDsAUsbd61btxxk3bpdZuOm3JodS890QwDvsAioGDoE0kqabKT9op3TqVU0yzIGA61zlmaP81c+zpDGIHtpysRbLIKdwSlKcOgEgeDthM1GEZDRFoua/OjNkf5Dux5fJw0UoG7lRxghfDAwwCkYO69z0LSD4R0MaSAEuyBYYKIw6LQEgWv8JuPK7CBpyIOiaVBgJpg9DVZIBZ5ysFqtTSDhE2Dc6ZHBJjQJgez61Lwpt4/BKAdjEKwqXLDjNhtN27V2B69VENDSQVDPVQcF+XmdC/L19T5NGIQRJEkZOIMCbCsIWoZgrQJjEiiBdPBqg0PLUbZTI4MNInjXofa2yiaB4KiLWsxmIy2Ug+QFK8yJjN0mGBQEz9I69EAhaMIJOzfX9VxUqcZwrUGnYaBSCoyKgFIjUCbSatc6dBxpIx2U9bmRkTZxEtr/aX9D5UeswUYLUHPspAPca7LyFgOutlp5K4sT0Alcz+a8zgX5+vp6HVBFwzxUEJqBJTLLqQmeN7FWDGftoJXOYTIQDp4iW0cG22EG27+/v62yiCbsNoq22Amestt0hM5qQk6irKyJ40hah6uDvE6aSecHEdd34plNJQbrBx1FsyTEkoE2sQraarHiOG+3agi7nVQPQEyjx+iftjVUlioMDquKsNkNBAUJg+E8Q5sAzKD2ZhCj2OOcio98VlPk+vp6c0OUGhz1JRpnWQNJmXQ4z7I8ToLpKEywmgi2FCw9OjT6ZkdlkwnjBF7BQIqqdDwsCRQmaH2w6MEZSqvVoqes3lyfCVyPs1BoTzpIjR6Soo6ppSGnaYMJA9OzsIA1wWpD2w4z0IcjRzuq88VBRQXthqNIFiosWIogYHyhocdrNOpAr7O5kr5Bvr4/x4WLUWTD5wU+pLQWPVSjKZrRoR0ZLTZ95G8njx49Wl2Bag3NwD9AGdBqgNaRmAbXUiiKvQ+M+MingRFQ4cLKB2b8lDIWFTBMg9aqUExwiHE0E2gpHUyimCYkeN1XX311sqMhDj1Lht9ShIjCcYJApoUKhAHWb8I5M5Hr6+vU1/NQrtLjXKvr6EOQX6BSg0HyayAp1ErxMfHgV1993CEeRUFoXDMDxlGNUjlDHeQ+JCIenXQdvRYxIlXi+ngGtNLjOO0kR66VSvGhOOBCmgfbl8hnHpXKkGB0MmOCTDj8LYayB9cJFrFKj0PLgT8n6BT0xHNEIYE/g/WgBgFW4v4vtt0gxYBWEv8AAAAASUVORK5CYII="
					), aDD(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aDD(16, "apple", 3,
					"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"
					), aDD(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aDD(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aDD(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aDD(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aDD(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aDD(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(e0) {
		return canvas[e0]
	}, this.aCo = function(name) {
		for (var a7 = z1.length - 1; 0 <= a7; a7--)
			if (z1[a7] === name) return canvas[a7];
		return aD7
	}, this.sK = function() {
		return aD6 <= 0
	}, this.aD9 = function() {
		aD6 = 0, aDA()
	}
}

function cN() {
	var aDM, aDN, aDO, aDP, aDQ, aDR, aDS, aDT, aDU, aDV, aDK = [
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
		aDL = [
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

	function aDb(iu, mG) {
		for (var a7 = iu; a7 < mG; a7++) aDM[a7] = 4 * bH.dl(64 * au.random(), au.value(100)), aDN[a7] = 4 * bH.dl(64 * au.random(), au.value(100)), aDO[a7] = 4 * bH.dl(64 * au.random(), au.value(100))
	}

	function aDa(iu, mG) {
		for (var colorsData = a9.data.colorsData, a7 = iu; a7 < mG; a7++) {
			var f0 = colorsData[a7];
			aDM[a7] = 4 * (f0 >> 12), aDN[a7] = 4 * (f0 >> 6 & 63), aDO[a7] = 4 * (63 & f0)
		}
	}

	function aDm(eC, aDo) {
		a9u[eC] = 0, a9u[eC + 1] = 0, a9u[eC + 2] = aDo, a9u[eC + 3] = 0, aDp(eC)
	}

	function aDp(eC) {
		var ef;
		bX.mO || (ef = aY.wp(eC), eC = aY.wq(eC), bX.mO = ef >= bW.a9t[0] && ef <= bW.a9t[2] && eC >= bW.a9t[1] && eC <= bW.a9t[3])
	}
	this.ea = new Int32Array(4), this.dV = function() {
		var ea = this.ea;
		ea[0] = -4 * bO.ej, ea[1] = 4, ea[2] = -ea[0], ea[3] = -ea[1]
	}, this.dU = function() {
		if (aDM = new Uint8Array(a9.eV), aDN = new Uint8Array(a9.eV), aDO = new Uint8Array(a9.eV), aDP = new Uint8Array(a9.eV), aDQ = new Uint8Array(a9.eV), aDR = new Uint8Array(a9.eV), aDS = new Uint8Array(a9.eV), aDT = new Uint8Array(a9.eV),
			aDU = new Uint8Array(a9.eV), aDV = new Uint8Array(a9.eV), this.a6X = new Uint8Array(a9.eV), a9.ie)
			for (var a7 = a9.eV - 1; 0 <= a7; a7--) {
				var et = bc.k4[bc.eW[a7]],
					kP = bH.dl((aDL[et][3] + 1) * au.random(), au.value(100));
				aDM[a7] = aDK[et][0] + kP * aDL[et][0], aDN[a7] = aDK[et][1] + kP * aDL[et][1], aDO[a7] = aDK[et][2] + kP * aDL[et][2]
			} else 0 === a9.data.colorsType ? a9.data.selectableColor ? (aDa(0, a9.je), aDb(a9.je, a9.eV)) : aDb(0, a9.eV) : aDa(0, a9.eV);
		! function() {
			var a7, eb;
			for (a7 = a9.eV - 1; 0 <= a7; a7--) eb = bH.dl(aDM[a7] + aDN[a7] + aDO[a7], 3), aDM[a7] += aDh(eb - aDM[a7], 2), aDN[a7] += aDh(eb - aDN[a7], 2), aDO[a7] += aDh(eb - aDO[a7], 2), aDM[a7] -= aDM[a7] % 4, aDN[a7] -= aDN[a7] % 4, aDO[
				a7] -= aDO[a7] % 4
		}(),
		function() {
			for (var a7 = a9.eV - 1; 0 <= a7; a7--) aDM[a7] += bH.dl(a7, 128), aDN[a7] += bH.dl(a7 % 128, 32), aDO[a7] += bH.dl(a7 % 32, 8), aDP[a7] = a7 % 8
		}(), this.aDe(),
			function() {
				for (var a7 = a9.eV - 1; 0 <= a7; a7--) aDQ[a7] = aDM[a7] < 32 ? aDM[a7] + 32 : aDM[a7] - 32, aDR[a7] = aDN[a7] < 32 ? aDN[a7] + 32 : aDN[a7] - 32, aDS[a7] = aDO[a7] < 32 ? aDO[a7] + 32 : aDO[a7] - 32
			}(),
			function() {
				for (var a7 = a9.eV - 1; 0 <= a7; a7--) aDT[a7] = 235 < aDM[a7] ? aDM[a7] - 20 : aDM[a7] + 20, aDU[a7] = 235 < aDN[a7] ? aDN[a7] - 20 : aDN[a7] + 20, aDV[a7] = 235 < aDO[a7] ? aDO[a7] - 20 : aDO[a7] + 20
			}()
	}, this.a5Z = function(player) {
		var g = bK.f8;
		return g[0] = aDM[player], g[1] = aDN[player], g[2] = aDO[player], g
	}, this.aDe = function() {
		for (var a7 = a9.eV - 1; 0 <= a7; a7--) this.a6X[a7] = aDM[a7] + aDN[a7] + aDO[a7] < 280 ? 0 : 1
	}, this.wp = function(eC) {
		return bH.dl(eC, 4) % bO.ej
	}, this.wq = function(eC) {
		return bH.dl(eC, 4 * bO.ej)
	}, this.wP = function(ef, eh) {
		return Math.floor(4 * (eh * bO.ej + ef))
	}, this.wf = function(eC) {
		var ea = this.ea;
		return this.aDi(eC + ea[0]) || this.aDi(eC + ea[1]) || this.aDi(eC + ea[2]) || this.aDi(eC + ea[3])
	}, this.ex = function(eC) {
		var ea = this.ea;
		return this.ed(eC + ea[0]) || this.ed(eC + ea[1]) || this.ed(eC + ea[2]) || this.ed(eC + ea[3])
	}, this.wd = function(eC, player) {
		var ea = this.ea;
		return this.aDj(eC + ea[0], player) || this.aDj(eC + ea[1], player) || this.aDj(eC + ea[2], player) || this.aDj(eC + ea[3], player)
	}, this.g8 = function(eC) {
		return 208 <= a9u[eC + 3]
	}, this.wk = function(player, eC) {
		return this.g8(eC) && this.aDk(player, eC)
	}, this.aDk = function(player, eC) {
		return player === this.eQ(eC)
	}, this.aDl = function(eC) {
		return 208 <= a9u[eC + 3] && a9u[eC + 3] < 224
	}, this.ip = function(eC) {
		return 224 <= a9u[eC + 3] && a9u[eC + 3] < 248
	}, this.we = function(eC) {
		for (var ea = this.ea, a7 = 3; 0 <= a7; a7--)
			if (this.h1(eC + ea[a7])) return !0;
		return !1
	}, this.eT = function(eC) {
		return this.g8(eC) || this.eP(eC)
	}, this.h1 = function(eC) {
		return 0 === a9u[eC + 3] && 2 === a9u[eC + 2]
	}, this.eP = function(eC) {
		return 0 === a9u[eC + 3] && 1 === a9u[eC + 2]
	}, this.vS = function(eC) {
		return 0 === a9u[eC + 3] && 3 === a9u[eC + 2]
	}, this.ed = function(eC) {
		return 0 === a9u[eC + 3] && 5 <= a9u[eC + 2]
	}, this.aDi = function(eC) {
		return 0 === a9u[eC + 3] && 3 <= a9u[eC + 2]
	}, this.eG = function(eC) {
		return a9u[eC + 2] - 5
	}, this.aDj = function(eC, player) {
		return this.eP(eC) || this.g8(eC) && player !== this.eQ(eC)
	}, this.eQ = function(eC) {
		return a9u[eC] % 4 * 128 + a9u[eC + 1] % 4 * 32 + a9u[eC + 2] % 4 * 8 + a9u[eC + 3] % 8
	}, this.wl = function(eC) {
		aDm(eC, 1)
	}, this.aDn = function(eC) {
		aDm(eC, 2)
	}, this.wQ = function(eC, player) {
		a9u[eC] = aDM[player], a9u[eC + 1] = aDN[player], a9u[eC + 2] = aDO[player], a9u[eC + 3] = 208 + aDP[player], aDp(eC)
	}, this.g3 = function(eC, player) {
		a9u[eC] = aDQ[player], a9u[eC + 1] = aDR[player], a9u[eC + 2] = aDS[player], a9u[eC + 3] = 224 + aDP[player], aDp(eC)
	}, this.iq = function(eC, player) {
		a9u[eC] = aDT[player], a9u[eC + 1] = aDU[player], a9u[eC + 2] = aDV[player], a9u[eC + 3] = 248 + aDP[player], aDp(eC)
	}
}

function cl() {
	var e0 = 0,
		aDq = new Uint16Array(32);

	function remove(a3f) {
		var a7;
		for (e0 -= 2, a7 = a3f; a7 < e0; a7 += 2) aDq[a7] = aDq[a7 + 2], aDq[a7 + 1] = aDq[a7 + 3]
	}
	this.dU = function() {
		e0 = 0
	}, this.iS = function() {
		var a7, il, hu;
		if (0 !== e0)
			if (0 === ac.lV[a9.eI] || aZ.aDr(a9.eI) === aZ.fe(a9.eI)) e0 = 0;
			else
				for (a7 = e0 - 2; 0 <= a7; a7 -= 2)(il = aDq[a7]) < a9.eV && 0 === ac.lV[il] ? remove(a7) : (hu = aDq[a7 + 1], (il >= a9.eV && aDs(a9.eI) || il < a9.eV && aDt(a9.eI, il)) && (b4.gv.h6(hu, il), remove(a7)))
	}, this.h8 = function(il, hu) {
		! function(il, hu) {
			var a7;
			for (a7 = 0; a7 < e0; a7 += 2)
				if (aDq[a7] === il) return aDq[a7 + 1] = Math.min(aDq[a7 + 1] + hu, 1023), 1;
			return
		}(il, hu) && 32 !== e0 && (aDq[e0] = il, aDq[e0 + 1] = hu, e0 += 2)
	}
}

function cO() {
	function aE0(player) {
		var dk;
		b6.fu.a22(player) && (dk = ac.ga[player] - ac.a26[player] + aZ.aE2(player), bZ.fy(player, Math.abs(dk), dk < 0 ? 18 : 12)), ac.ga[player] = 0, ac.a26[player] = 0
	}

	function aE9() {
		aT.show(!1, !1, !1, !0), aS.a96(), bN.yQ.zA()
	}

	function aDx(player, aE8) {
		for (var a7 = aE8.length - 1; 0 <= a7; a7--) aZ.aEB(aE8[a7], player)
	}

	function aDz(player) {
		for (var i9 = ac.i9, iA = ac.iA, iB = ac.iB, iC = ac.iC, ly = i9[player], lz = iB[player], ej = bO.ej, gM = ac.gM, ef = iA[player]; ly <= ef; ef--)
			for (var eh = iC[player]; lz <= eh; eh--) {
				var g6 = 4 * (eh * ej + ef);
				aY.wk(player, g6) && (aY.wl(g6), gM[player]--)
			}
		i9[player] = iA[player] = 0, iB[player] = iC[player] = 0
	}
	this.dd = function(g6) {
		var player, dk = ac.gM[g6];
		bJ.s.oe[g6] ? dk && (aDx(player = g6, aZ.aDy(player)), aDz(player), aB.fw(player), aZ.clear(player), aE0(player), function(player) {
			ac.wL[player] = 0, ac.g0[player] = [], ac.gE[player] = [], ac.gF[player] = [], ac.ey[player] = []
		}(player)) : !dk && ac.g0[g6].length || this.aDw(g6)
	}, this.aDw = function(player) {
		! function(player) {
			b6.fu.j1(player) || (ac.zD[player] = be.zT.aE7(), a9.yh++);
			var aE8 = aZ.aDy(player);
			0 === aE8.length ? b6.fu.a21(player) && aE9() : (aDx(player, aE8), function(player, aE8) {
				var aED = aE8[function(aE8) {
					var a7, e0 = 0;
					for (a7 = aE8.length - 1; 1 <= a7; a7--) ac.gM[aE8[a7]] > ac.gM[aE8[e0]] && (e0 = a7);
					return e0
				}(aE8)];
				9 === a9.jy && 1 === bc.eW[player] && au.jW(8) && av.aEE(aED);
				if (b6.fu.a21(player)) aE9(), aJ.yr(aED, 1);
				else {
					for (var a7 = aE8.length - 1; 0 <= a7; a7--)
						if (b6.fu.a22(aE8[a7]) && (bZ.lR[4 - b6.fu.j1(player)]++, b6.fu.a21(aE8[a7]))) return aJ.yr(player, 0);
					b6.fu.j1(player) || aJ.a4s(0, player, aED)
				}
			}(player, aE8))
		}(player), aDz(player), aE0(player),
			function(player) {
				ac.lV[player] = 0, ac.g0[player] = null, ac.gE[player] = null, ac.gF[player] = null, ac.ey[player] = null
			}(player), aB.fw(player), aZ.clear(player), bJ.aE5.aE6(player)
	}
}

function cq() {
	var input;

	function aEF(e) {
		(e = e.target.files) && 0 < e.length && b2.aEI(e[0])
	}

	function aEM(e) {
		var et = new Image;
		et.onload = aEN, et.src = e.target.result
	}

	function aEN(e) {
		var e = e.target,
			canvas = document.createElement("canvas");
		canvas.width = e.width, canvas.height = e.height;
		canvas.getContext("2d").drawImage(e, 0, 0);
		var e = canvas.width,
			j7 = canvas.height;
		e > bO.aEP || j7 > bO.aEP || e < 10 || j7 < 10 ? (e = "Image dimensions must be between 10 and " + bO.aEP + ".", u.u4 ? u.u4.showToast(e) : alert(e)) : 20 === n.rs && n.aDI().aEN(canvas)
	}
	this.dU = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = aEF
	}, this.a01 = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.aEG = function() {
		input.click()
	}, this.aEI = function(aEJ) {
		var g = aEJ.name.split("."),
			g = g[g.length - 1].toLowerCase();
		"gif" !== g && "jpg" !== g && "jpeg" !== g && "png" !== g || ((g = new FileReader).onload = aEM, g.readAsDataURL(aEJ))
	}
}

function co() {
	this.aER = null, this.dU = function() {
		10 !== a9.jy ? this.aER = null : this.aER = new Uint32Array(a9.eV)
	}, this.iS = function() {
		10 === a9.jy && this.qg()
	}, this.qg = function() {
		for (var g6, target, a9H, aER = this.aER, yT = ah.jh, a27 = ac.ga, a7 = ah.jf - 1; 0 <= a7; a7--)(g6 = yT[a7]) >= a9.je || (target = Math.max(bH.dl(a27[g6], 4), 2048), a9H = Math.max(aa.a9I(g6), 100), aER[g6] += bH.dl(a9H * target, 1e4),
			aER[g6] > target && (aER[g6] = target))
	}, this.a2C = function(player, im) {
		return im > this.aER[player] ? (im = this.aER[player], this.aER[player] = 0) : this.aER[player] -= im, im
	}
}

function dQ() {
	function aET(e) {
		var g, e = e.target.files;
		e && 0 < e.length && (e = e[0], "json" === (g = e.name.split("."))[g.length - 1].toLowerCase()) && ((g = new FileReader).onload = aEb, g.readAsText(e))
	}

	function aEb(e) {
		var aEf;
		a9.yf || (e = JSON.parse(e.target.result), aEf = a9.data = new a31, aEg(e, aEf, "mapType", 0, 2), aEg(e, aEf, "mapProceduralIndex", 0, 255), aEg(e, aEf, "mapRealisticIndex", 0, 255), aEg(e, aEf, "mapSeed", 0, 16383), function(aEe, aEf, g7,
				max) {
				aEe = aEe[g7];
				aEf[g7] = aEm(aEe) ? aEe.slice(0, max) : aEf[g7]
			}(e, aEf, "mapName", 20), function(aEe, aEf, g7) {
				var aEO;
				2 === aEf.mapType && (!aEm(aEe = aEe[g7]) || aEe.length <= 20 ? aEf.mapType = 0 : ((aEO = new Image).onload = function() {
					b5.aEn.aEo(aEO, 1), aEO.onload = null, aEO = null
				}, aEO.src = aEe))
			}(e, aEf, "canvas"), aEg(e, aEf, "passableWater", 0, 1), aEg(e, aEf, "passableMountains", 0, 1), aEg(e, aEf, "playerCount", 1, 512), aEg(e, aEf, "humanCount", 1, 1), aEg(e, aEf, "selectedPlayer", 0, 0), aEg(e, aEf, "gameMode", 0, 1),
			aEg(e, aEf, "playerMode", 0, 0), aEg(e, aEf, "battleRoyaleMode", 0, 0), aEg(e, aEf, "numberTeams", 0, 8), aEg(e, aEf, "isZombieMode", 0, 0), aEg(e, aEf, "isContest", 0, 0), aEg(e, aEf, "isReplay", 0, 0), aEj(e, aEf, "elo", 16, 2,
				16383), aEg(e, aEf, "colorsType", 0, 1), aEg(e, aEf, "colorsPersonalized", 0, 1), aEj(e, aEf, "colorsData", 32, 512, 262143), aEg(e, aEf, "selectableColor", 0, 1), aEj(e, aEf, "teamPlayerCount", 16, 9, 512), aEg(e, aEf,
				"neutralBots", 0, 1), aEg(e, aEf, "botDifficultyType", 0, 3), aEg(e, aEf, "botDifficultyValue", 0, 15), aEj(e, aEf, "botDifficultyTeam", 8, 9, 15), aEj(e, aEf, "botDifficultyData", 8, 512, 15), aEg(e, aEf, "spawningType", 0, 2),
			aEg(e, aEf, "spawningSeed", 0, 16383), aEj(e, aEf, "spawningData", 16, 1024, 4095), aEg(e, aEf, "selectableSpawn", 0, 1), aEg(e, aEf, "playerNamesType", 0, 2),
			function(aEe, aEf, g7, size, max) {
				var a1I = aEe[g7];
				if (Array.isArray(a1I)) {
					for (var a1J = new Array(size), eY = Math.min(a1I.length, size), a7 = 0; a7 < eY; a7++) a1J[a7] = aEm(a1I[a7]) ? a1I[a7].slice(0, max) : "";
					aEf[g7] = a1J
				}
			}(e, aEf, "playerNamesData", 512, 20), aEg(e, aEf, "selectableName", 0, 1), aEg(e, aEf, "aIncomeType", 0, 2), aEg(e, aEf, "aIncomeValue", 0, 255), aEj(e, aEf, "aIncomeData", 8, 512, 255), aEg(e, aEf, "tIncomeType", 0, 2), aEg(e, aEf,
				"tIncomeValue", 0, 255), aEj(e, aEf, "tIncomeData", 8, 512, 255), aEg(e, aEf, "iIncomeType", 0, 2), aEg(e, aEf, "iIncomeValue", 0, 255), aEj(e, aEf, "iIncomeData", 8, 512, 255), aEg(e, aEf, "sResourcesType", 0, 2), aEg(e, aEf,
				"sResourcesValue", 0, 2047), aEj(e, aEf, "sResourcesData", 16, 512, 2047), n.r(), n.s.aEd[0] = 0, n.o(19))
	}

	function aEg(aEe, aEf, g7, min, max) {
		aEe = aEe[g7];
		aEf[g7] = "number" == typeof aEe && min <= aEe && aEe <= max ? Math.floor(aEe) : aEf[g7]
	}

	function aEm(pA) {
		return "string" == typeof pA
	}

	function aEj(aEe, aEf, g7, aEp, size, max) {
		var a1I = aEe[g7];
		if (Array.isArray(a1I)) {
			for (var a1J = new(8 === aEp ? Uint8Array : 16 === aEp ? Uint16Array : Uint32Array)(size), eY = Math.min(a1I.length, size), a7 = 0; a7 < eY; a7++) a1J[a7] = bH.p0(a1I[a7], 0, max);
			aEf[g7] = a1J
		}
	}
	this.aES = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aET, input.click()
	}, this.aEU = function() {
		for (var aEX, aAP, a5s = a9.data, keys = Object.keys(a5s), aEV = {}, a7 = 0; a7 < keys.length; a7++) {
			var key = keys[a7];
			a5s[key] instanceof Uint8Array || a5s[key] instanceof Uint16Array || a5s[key] instanceof Uint32Array ? aEV[key] = Array.from(a5s[key]) : aEV[key] = a5s[key]
		}
		aEV.canvas = 2 === aEV.mapType && aEV.canvas ? aEV.canvas.toDataURL() : null, aEX = aEV, aEX = JSON.stringify(aEX, null, 2), aEX = new Blob([aEX], {
			type: "application/json"
		}), (aAP = document.createElement("a")).href = URL.createObjectURL(aEX), aAP.download = "tt_scenario.json", aAP.click()
	}
}

function cR() {
	var aEq, aEr, size, il, im, id, aEs;

	function aEt(player) {
		return player < a9.je ? aEq * player : aEq * a9.je + aEr * (player - a9.je)
	}
	this.dU = function() {
		aEq = a9.je < 16 ? 12 : 8, aEr = 4;
		var eY = aEt(a9.eV);
		size = new Uint8Array(a9.eV), il = new Uint16Array(eY), im = new Uint32Array(eY), id = new Uint16Array(eY), aEs = new Uint8Array(eY)
	}, this.oz = function(a65, aEu) {
		var aEv = this.gb(a65, aEu),
			aEu = (this.gZ(a65, aEu, 0), b6.fu.fx(a65, aEv));
		bZ.fy(a65, aEv - aEu, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.aEB = function(player, aEu) {
		var aEy, aEu = function(player, aEu) {
			var a7, kP = aEt(player);
			for (a7 = size[player] - 1; 0 <= a7; a7--)
				if (0 === id[kP + a7] && il[kP + a7] === aEu) return a7;
			return size[player]
		}(player, aEu);
		aEu !== size[player] && (aEy = im[aEt(player) + aEu], this.fz(player, aEu), this.ii(player, aEy, a9.eV))
	}, this.iz = function(player, aEu) {
		for (var kP = aEt(player), a7 = size[player] - 1; 0 <= a7; a7--)
			if (0 === id[kP + a7] && il[kP + a7] === aEu) return !0;
		return !1
	}, this.jI = function(player) {
		return player < a9.je ? size[player] < aEq : size[player] < aEr
	}, this.fe = function(player) {
		return size[player]
	}, this.fk = function(player, a7) {
		return il[aEt(player) + a7]
	}, this.ff = function(player, a7) {
		return id[aEt(player) + a7]
	}, this.aEz = function(player, aF0) {
		for (var kP = aEt(player), a7 = size[player] - 1; 0 <= a7; a7--)
			if (id[kP + a7] === aF0) return a7;
		return -1
	}, this.fl = function(player, a7) {
		return im[aEt(player) + a7]
	}, this.gb = function(player, aEu) {
		for (var kP = aEt(player), a7 = size[player] - 1; 0 <= a7; a7--)
			if (0 === id[kP + a7] && il[kP + a7] === aEu) return im[kP + a7];
		return 0
	}, this.aE2 = function(player) {
		for (var kP = aEt(player), f0 = 0, a7 = size[player] - 1; 0 <= a7; a7--) f0 += im[kP + a7];
		return f0
	}, this.aF1 = function(player) {
		for (var kP = aEt(player), f0 = 0, a7 = size[player] - 1; 0 <= a7; a7--) 0 === id[kP + a7] && (f0 += im[kP + a7]);
		return f0
	}, this.aDr = function(player) {
		for (var kP = aEt(player), g1 = 0, a7 = size[player] - 1; 0 <= a7; a7--) 0 < id[kP + a7] && g1++;
		return g1
	}, this.gZ = function(player, aEu, aEy) {
		for (var kP = aEt(player), a7 = size[player] - 1; 0 <= a7; a7--) 0 === id[kP + a7] && il[kP + a7] === aEu && (im[kP + a7] = aEy)
	}, this.gK = function(player, a7, aEy) {
		im[aEt(player) + a7] = Math.max(aEy, 0)
	}, this.gL = function(player, a7) {
		aEs[aEt(player) + a7] = 0
	}, this.fm = function(player, a7) {
		return aEs[aEt(player) + a7]
	}, this.ii = function(player, aEy, aEu) {
		b6.fu.a22(aEu) && bZ.lR[6 - b6.fu.j1(player)]++;
		for (var kP = aEt(player), a7 = size[player] - 1; 0 <= a7; a7--)
			if (0 === id[kP + a7] && il[kP + a7] === aEu) return im[kP + a7] += aEy, void(im[kP + a7] = im[kP + a7] > a9.a28 ? a9.a28 : im[kP + a7]);
		il[kP + size[player]] = aEu, im[kP + size[player]] = aEy, id[kP + size[player]] = 0, aEs[kP + size[player]] = 1, size[player]++, player < a9.je && (aEu === a9.eI ? aJ.yr(player, 5) : player === a9.eI && ab.a4u(aEu))
	}, this.aF2 = function(player, aEy, aF0) {
		var kP = aEt(player);
		il[kP + size[player]] = 0, im[kP + size[player]] = aEy, id[kP + size[player]] = aF0, aEs[kP + size[player]] = 0, size[player]++
	}, this.fz = function(player, e0) {
		var er, kP;
		if (0 !== size[player])
			for (kP = aEt(player), size[player]--, er = e0; er < size[player]; er++) il[kP + er] = il[kP + er + 1], im[kP + er] = im[kP + er + 1], id[kP + er] = id[kP + er + 1], aEs[kP + er] = aEs[kP + er + 1]
	}, this.aDy = function(player) {
		for (var er, kP, aE8 = [], a7 = ah.jf - 1; 0 <= a7; a7--)
			for (kP = aEt(ah.jh[a7]), er = size[ah.jh[a7]] - 1; 0 <= er; er--)
				if (0 === id[kP + er] && il[kP + er] === player) {
					aE8.push(ah.jh[a7]);
					break
				} return aE8
	}
}

function cS() {
	var aF3;

	function aF5(player) {
		var dz, jJ;
		return b6.fu.j1(player) && player < a9.je ? 0 : (dz = aF3[bH.dl((a9.eV - 1) * ac.gM[player], a9.jO)], bb.jb() < 1920 && (dz = Math.max(bH.dl(100 * (13440 - 6 * bb.jb()), 1920), dz)), jJ = aa.jK(player), ac.ga[player] > jJ && (dz -= bH.dl(2 *
			dz * (ac.ga[player] - jJ), jJ)), Math.min(Math.max(dz, 0), 700))
	}

	function aFH(mA) {
		for (var gM = ac.gM, jh = ah.jh, a7 = ah.jf - 1; 0 <= a7; a7--) {
			var g6 = jh[a7];
			b6.fu.fx(g6, bH.dl(mA * gM[g6], 32))
		}
	}

	function aFE() {
		var vK = a9.eI;
		bK.f5[0] = ac.ga[vK] - ac.a26[vK]
	}

	function aFG(e0) {
		var vK = a9.eI;
		bZ.lR[e0] += ac.ga[vK] - ac.a26[vK] - bK.f5[0]
	}
	this.db = function() {
		for (var eY = a9.eV, a7 = (aF3 = new Uint16Array(eY), 0); a7 < eY; a7++) aF3[a7] = 100 + aF4(bH.dl(25600 * a7, eY - 4), 9)
	}, this.dU = function() {
		0 === a9.data.iIncomeType ? this.a9I = aF5 : 1 === a9.data.iIncomeType ? this.a9I = function(player) {
			return bH.dl(a9.data.iIncomeValue * aF5(player), 64)
		} : this.a9I = function(player) {
			return bH.dl(a9.data.iIncomeData[player] * aF5(player), 64)
		}
	}, this.iS = function() {
		if (bb.jb() % 10 == 9 && (function() {
				aFE();
				for (var jh = ah.jh, ga = ac.ga, a7 = ah.jf - 1; 0 <= a7; a7--) {
					var g6 = jh[a7],
						aFF = bH.dl(aa.a9I(g6) * ga[g6], 1e4);
					b6.fu.fx(g6, Math.max(aFF, 1))
				}
				aFG(9)
			}(), function() {
				if (0 !== a9.data.aIncomeType) {
					if (aFE(), 1 === a9.data.aIncomeType)
						for (var gM = ac.gM, jh = ah.jh, mA = a9.data.aIncomeValue, a7 = ah.jf - 1; 0 <= a7; a7--) {
							var g6 = jh[a7];
							b6.fu.fx(g6, bH.dl(mA * gM[g6], 128))
						} else 2 === a9.data.aIncomeType && function() {
							for (var gM = ac.gM, jh = ah.jh, mA = a9.data.aIncomeData, a7 = ah.jf - 1; 0 <= a7; a7--) {
								var g6 = jh[a7];
								b6.fu.fx(g6, bH.dl(mA[g6] * gM[g6], 128))
							}
						}();
					aFG(18)
				}
			}(), bb.jb() % 100 == 99)) {
			if (aFE(), 0 === a9.data.tIncomeType) aFH(32);
			else if (1 === a9.data.tIncomeType) aFH(a9.data.tIncomeValue);
			else
				for (var gM = ac.gM, jh = ah.jh, mA = a9.data.tIncomeData, a7 = ah.jf - 1; 0 <= a7; a7--) {
					var g6 = jh[a7];
					b6.fu.fx(g6, bH.dl(mA[g6] * gM[g6], 32))
				}
			aFG(8)
		}
	}, this.jK = function(player) {
		return Math.min(100 * ac.gM[player], a9.a2x)
	}, this.ns = function(player, nt) {
		b6.fu.fx(nt, bK.f6[0]), bZ.oG(player, nt), ab.aF7(player, bK.f6[0] + bK.f6[1]), ab.oH(nt, bK.f6[0]), b6.fu.op(player)
	}, this.aF8 = function() {
		for (var eY = ah.jf, yT = ah.jh, kP = 0, a27 = ac.ga, a7 = 0; a7 < eY; a7++) kP += a27[yT[a7]];
		return kP
	}, this.aF9 = function(aFA) {
		for (var g6, eY = ah.jf, yT = ah.jh, kP = 0, a27 = ac.ga, eW = bc.eW, a7 = 0; a7 < eY; a7++) eW[g6 = yT[a7]] === aFA && (kP += a27[g6]);
		return kP
	}
}

function cU() {
	var aFL, aFM, aFN, aFO, aFP, aFQ, aFR, aFS, aFT, aFU, aFV, aFW, aFX, aFY, aFZ, aFa, aFb, aFc, aFe, aFf, aAJ, aFg, aFh, aFo, aFp, aFd = null,
		aFj = 0,
		aFk = !1,
		aFl = new Float32Array(4),
		aFm = 0,
		aFn = !0,
		a8T = 400;

	function pX() {
		aFT = Math.floor(+at.pV), aFU = Math.floor(.5 * aFT)
	}

	function aFq() {
		var a7, aFv;
		for (tV.font = b6.pT.rV(1, 100 * aFV), aFv = 80 / Math.floor(tV.measureText(b6.zG.xx(a9.a28)).width), tV.font = b6.pT.rV(1, 100), a7 = a9.eV - 1; 0 <= a7; a7--) aFS[a7] = 100 / Math.floor(tV.measureText(ac.zE[a7]).width), aFR[a7] = Math.min(
			aFv, aFS[a7])
	}

	function aFw(a7) {
		return !bf.dp.data[7].value || (a7 = ac.ga[a7]) < 1e6 ? 1 : a7 < 1e7 ? aFl[0] : aFl[Math.min(Math.floor(Math.log10(a7)) - 6, 3)]
	}

	function aFu(hH) {
		aFc = !1, aFb = 1, aFZ = aFa = 0, aFn && (b6.pT.textAlign(hH, 1), b6.pT.textBaseline(hH, 1));
		for (var aG2, aG3, a7, aG4, fontSize, aG5, ly = hv / hw, lz = hx / hw, mB = (at.a1 + hv) / hw, mC = (at.j7 + hx) / hw, aG6 = 0 !== ac.lV[a9.eI] && !b6.fu.j1(a9.eI), er = ah.jf - 1; 0 <= er; er--) a7 = ah.jh[er], (fontSize = Math.floor(aFY *
			hw * aFw(a7) * aFR[a7] * aFP[a7])) < aFX || aFT <= fontSize || aFN[a7] + aFP[a7] > ly && aFN[a7] < mB && aFO[a7] + aFQ[a7] > lz && aFO[a7] < mC && (aG2 = Math.floor(at.a1 * (aFN[a7] + aFP[a7] / 2 - ly) / (mB - ly)), aG3 = Math.floor(
			at.j7 * (aFO[a7] + aFQ[a7] / 2 - lz) / (mC - lz) - .1 * fontSize), aG4 = aY.a6X[a7], hH.font = b6.pT.rV(1 === ac.a20[a7] ? 4 : 1, fontSize), hH.fillStyle = aG7(fontSize, aG4 % 2), bf.dp.data[7].value ? aG8(hH, a7, fontSize, aG2,
			aG3, aG4) : aG9(a7, fontSize, aG2, aG3, hH), aFc = !0, 0 < aAJ[a7] ? function(aG2, aG3, fontSize, a7, hH) {
			0 === jP[a7] ? af.xA.xo(aFf[a7]) ? (function(aG2, aG3, fontSize, player, o3, hH) {
				for (var vu = aG3, hG = (hH.globalAlpha = aGH(fontSize), aFw(player) * (bf.dp.data[7].value ? aFm : aFS[player])), vt = aG2 - .5 * fontSize / hG - .9 * fontSize, es = 0; es < 2; es++) hH.fillText(af.xA.xi(o3), vt, vu),
					vt = aG2 + .5 * fontSize / hG + .9 * fontSize;
				hH.globalAlpha = 1
			}(aG2, aG3, fontSize, a7, aFf[a7], hH), aGB(aG2, aG3, fontSize, 0, 0, hH)) : af.xA.xq(aFf[a7]) ? (aGK(aG2, aG3, fontSize, aFf[a7], 0, hH), aGB(aG2, aG3, fontSize, 0, 1, hH)) : (aGK(aG2, aG3, fontSize, aFf[a7], 1, hH), aGB(aG2,
				aG3, fontSize, 1, 0, hH)) : aGK(aG2, aG3, fontSize, aFf[a7], 0, hH)
		}(aG2, aG3, fontSize, a7, hH) : 0 === jP[a7] && aGB(aG2, aG3, fontSize, 0, 0, hH), aG6 && (0 < aAJ[a7 + a9.eV] || 0 < aAJ[a7 + 2 * a9.eV] || 0 < aAJ[a7 + 3 * a9.eV] || 0 < aAJ[a7 + 4 * a9.eV]) && function(aG2, aG3, fontSize, a7, hH) {
			var et, g1 = -1;
			for (et = 4; 1 <= et; et--) 0 < aAJ[a7 + et * a9.eV] && g1++;
			for (et = 1; et < 5; et++) 0 < aAJ[a7 + et * a9.eV] && (! function(aG2, aG3, fontSize, et, a7, aGF, dk, hH) {
				var a1T;
				if (1 === et) {
					a7 = aFf[a7 + a9.eV];
					if (!af.xA.xp(a7)) return function(aG2, aG3, fontSize, o3, aGF, hH) {
						hH.globalAlpha = aGH(fontSize);
						aG2 -= .534 * aGF * fontSize, aGF = aG3 + 1.59 * fontSize;
						hH.font = b6.pT.rV(0, .785 * fontSize), hH.fillText(af.xA.xi(o3), aG2, aGF), hH.globalAlpha = 1
					}(aG2, aG3, fontSize, a7, aGF, hH);
					a1T = af.vJ.xH[a7 - 1024 + af.xA.xT]
				} else a1T = 2 === et ? aH.a3d()[4].canvas[+(dk < 255)] : (3 === et ? aH.a3d()[5] : aH.a3d()[6]).canvas[0];
				a7 = af.vJ.xI, dk = .8 * fontSize / a7, et = aG2 - .5 * dk * a7 - .534 * aGF * fontSize, aG2 = aG3 + 1.4 * dk * a7;
				hH.setTransform(dk, 0, 0, dk, et, aG2), hH.globalAlpha = aGH(fontSize), hH.drawImage(a1T, 0, 0), hH.globalAlpha = 1, hH.setTransform(1, 0, 0, 1, 0, 0)
			}(aG2, aG3, fontSize, et, a7, g1, aAJ[a7 + et * a9.eV], hH), g1 -= 2)
		}(aG2, aG3, fontSize, a7, hH), (aG5 = aFV * fontSize) < aFX || (hH.font = b6.pT.rV(1, aG5), aG3 += Math.floor(.78 * fontSize), bf.dp.data[7].value ? aG9(a7, aG5, aG2, aG3, hH) : aG8(hH, a7, aG5, aG2, aG3, aG4)))
	}

	function aG9(a7, fontSize, ef, eh, hH) {
		var ___id = a7;
		var showName = a7 < a9.je || !__fx.settings.hideBotNames;
		if (showName) hH.fillText(ac.zE[a7], ef, eh), a7 < a9.je && 2 !== ac.a20[a7] || (a7 = fontSize / aFS[a7], hH.fillRect(ef - .5 * a7, eh + b6.pT.xj * fontSize, a7, Math.max(1, .1 * fontSize)));
		bf.dp.data[7].value && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (hH.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			hH.fillText(__fx.utils.getDensity(___id), ef, showName ? eh + fontSize : eh)
		);
	}

	function aG8(hH, a7, fontSize, aG2, aG3, aG4) {
		var ___id = a7;
		a7 = b6.zG.xx(ac.ga[a7]);
		aG4 >> 1 & 1 ? (hH.lineWidth = .05 * fontSize, hH.strokeStyle = aG7(fontSize, aG4 % 2), hH.strokeText(a7, aG2, aG3)) : (1 < aG4 && (hH.lineWidth = .12 * fontSize, hH.strokeStyle = aG7(fontSize, aG4), hH.strokeText(a7, aG2, aG3)), hH.fillText(
			a7, aG2, aG3));
		bf.dp.data[7].value || __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (hH.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)), hH.fillText(__fx.utils.getDensity(___id), aG2, aG3 + fontSize))
	}

	function aGB(aG2, aG3, fontSize, aGF, aGG, hH) {
		var a4D = .95 * fontSize / aFh,
			aG2 = aG2 - .5 * a4D * aFg + .8 * aGF * fontSize,
			aGF = aG3 - 1.76 * a4D * aFh - (.35 - b6.pT.xj + .7) * aGG * fontSize;
		hH.setTransform(a4D, 0, 0, a4D, aG2, aGF), hH.globalAlpha = aGH(fontSize), hH.drawImage(aX.get(4), 0, 0), hH.globalAlpha = 1, hH.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aGK(aG2, aG3, fontSize, o3, aGF, hH) {
		var hB, vt, a4D;
		hH.globalAlpha = aGH(fontSize), af.xA.xp(o3) ? (hB = af.vJ.xI, hH.setTransform(a4D = 1.1 * fontSize / hB, 0, 0, a4D, vt = aG2 - .5 * a4D * hB - .8 * aGF * fontSize, a4D = aG3 - 1.55 * a4D * hB), hH.drawImage(af.vJ.xH[o3 - 1024 + af.xA.xT], 0,
			0), hH.setTransform(1, 0, 0, 1, 0, 0)) : (vt = aG2 - .8 * aGF * fontSize, a4D = aG3 - (.35 - b6.pT.xj + 1) * fontSize, hH.fillText(af.xA.xi(o3), vt, a4D)), hH.globalAlpha = 1
	}

	function aG7(fontSize, aG4) {
		return aFU <= fontSize && fontSize < aFT ? bc.aGM[aG4] + aGH(fontSize).toFixed(3) + ")" : bc.aGN[aG4]
	}

	function aGH(fontSize) {
		return aFU <= fontSize && fontSize < aFT ? 1 - (fontSize - aFU) / (aFT - aFU) : 1
	}

	function aGW(hG, a1) {
		return 1 + Math.floor(aFW * hG * a1)
	}

	function aGT(a7) {
		for (var left = aFN[a7], er = aFN[a7] - ac.i9[a7] - 1; 0 <= er; er--)
			if (!aGX(a7, --left, aFO[a7], aFQ[a7])) {
				left++;
				break
			} var right = aFN[a7];
		for (er = ac.iA[a7] - aFN[a7] - aFP[a7]; 0 <= er; er--)
			if (!aGX(a7, ++right + aFP[a7] - 1, aFO[a7], aFQ[a7])) {
				right--;
				break
			} var ef = Math.floor((left + right) / 2),
			top = aFO[a7];
		for (er = aFO[a7] - ac.iB[a7] - 1; 0 <= er; er--)
			if (!aGY(a7, ef, --top, aFP[a7])) {
				top++;
				break
			} var bottom = aFO[a7];
		for (er = ac.iC[a7] - aFO[a7] - aFQ[a7]; 0 <= er; er--)
			if (!aGY(a7, ef, ++bottom + aFQ[a7] - 1, aFP[a7])) {
				bottom--;
				break
			} var eh = Math.floor((top + bottom) / 2);
		aGQ(a7, ef, eh, aFP[a7], aFQ[a7]) && (aFN[a7] = ef, aFO[a7] = eh)
	}

	function aGQ(player, ef, eh, a1, j7) {
		eb = Math.floor(.2 * a1);
		for (var eb, et = ef + a1 - 1; ef <= et; et--)
			if (!aGX(player, et, eh, j7)) return;
		for (et = eh + j7 - 1 - (eb = (eb = Math.floor(.25 * j7)) < 1 ? 1 : eb); eh + eb <= et; et--)
			if (!aGY(player, ef, et, a1)) return;
		return 1
	}

	function aGX(player, ef, eh, j7) {
		return aY.wk(player, 4 * (eh * bO.ej + ef)) && aY.wk(player, 4 * ((eh + j7 - 1) * bO.ej + ef))
	}

	function aGY(player, ef, eh, a1) {
		return aY.wk(player, 4 * (eh * bO.ej + ef)) && aY.wk(player, 4 * (eh * bO.ej + ef + a1 - 1))
	}
	this.dU = function() {
		if (a8T = 0 === (a8T = bf.dp.data[11].value) ? 280 : 1 === a8T ? 187 : 112, aFc = !1, aFY = .88, aFV = .5, aFW = 1.8, aFX = 12 - 3 * bf.dp.data[9].value, aFM = aFL = 0, aFN = new Uint16Array(a9.eV), aFO = new Uint16Array(a9.eV), aFP =
			new Uint16Array(a9.eV), aFQ = new Uint16Array(a9.eV), aFR = new Float32Array(a9.eV), aFS = new Float32Array(a9.eV), aFf = new Uint16Array(2 * a9.eV), aAJ = new Uint8Array(5 * a9.eV), aFo = new Uint8Array(a9.eV), aFp = new Uint8Array(
				a9.eV), aFn || (aFd = aFd || document.createElement("canvas")), pX(), aFa = aFZ = 0, aFb = 1, bf.dp.data[7].value) {
			var a7, aFv;
			for (aFq(), tV.font = b6.pT.rV(1, 100), aFv = 100 / Math.floor(tV.measureText("900 000").width), a7 = a9.eV - 1; 0 <= a7; a7--) aFR[a7] = Math.min(aFv, 2 * aFS[a7]);
			aFm = aFv, aFl[0] = 100 / (aFv * Math.floor(tV.measureText("5 000 000").width)), aFl[1] = 100 / (aFv * Math.floor(tV.measureText("50 000 000").width)), aFl[2] = 100 / (aFv * Math.floor(tV.measureText("500 000 000").width)), aFl[3] =
				100 / (aFv * Math.floor(tV.measureText("1 000 000 000").width))
		} else aFq();
		! function() {
			var a7;
			for (a7 = a9.eV - 1; 0 <= a7; a7--) ac.gM[a7] < 12 ? (aFN[a7] = ac.i9[a7] + 1, aFO[a7] = ac.iB[a7] + 1, aFP[a7] = 1, aFQ[a7] = 1) : (aFN[a7] = ac.i9[a7], aFO[a7] = ac.iB[a7] + 1, aFP[a7] = 4, aFQ[a7] = 2);
			if (a9.gu)
				for (a7 = 0; a7 < a9.je; a7++) aFP[a7] = 0;
			aFg = aX.get(4).width, aFh = aX.get(4).height
		}()
	}, this.aF7 = function(g6, a5B) {
		a5B > 18 * ac.gM[g6] ? (aFp[g6] = 6, aY.a6X[g6] = 2 + aY.a6X[g6] % 2) : (aFo[g6] = 4, (aY.a6X[g6] < 2 || 3 < aY.a6X[g6]) && (aY.a6X[g6] = 6 + aY.a6X[g6] % 2))
	}, this.oH = function(g6, a5B) {
		a5B > 6 * ac.gM[g6] ? (aFp[g6] = 6, aY.a6X[g6] = 4 + aY.a6X[g6] % 2) : (aFo[g6] = 4, (aY.a6X[g6] < 4 || 5 < aY.a6X[g6]) && (aY.a6X[g6] = 8 + aY.a6X[g6] % 2))
	}, this.resize = function() {
		pX(), aFn || aFu(aFe)
	}, this.a2t = function() {
		for (var a7 = 0; a7 < a9.je; a7++) ac.iA[a7] - ac.i9[a7] != 3 || ac.iC[a7] - ac.iB[a7] != 3 ? (aFN[a7] = ac.i9[a7] + (ac.iA[a7] !== ac.i9[a7] ? 1 : 0), aFO[a7] = ac.iB[a7], aFP[a7] = 1, aFQ[a7] = 1) : (aFN[a7] = ac.i9[a7], aFO[a7] = ac
			.iB[a7] + 1, aFP[a7] = 4, aFQ[a7] = 2)
	}, this.p1 = function(player, e0, aFx) {
		! function(player, e0, aFx) {
			player += e0 * a9.eV;
			0 === e0 ? aFf[player] === aFx && 0 < aAJ[player] ? aAJ[player] = 0 : (aFf[player] = aFx, aAJ[player] = af.xA.xo(aFx) ? 255 : 64) : 1 === e0 ? (aAJ[player] = 64, aFf[player] = aFx) : aAJ[player] = aFx
		}(player, e0, aFx), 2 === a9.yf && this.lH(!0)
	}, this.tU = function() {
		aFn ? aFu(tV) : aFc && (1 !== aFb ? (tV.imageSmoothingEnabled = !0, tV.setTransform(aFb, 0, 0, aFb, 0, 0), tV.drawImage(aFd, -aFZ / aFb, -aFa / aFb), tV.setTransform(1, 0, 0, 1, 0, 0), tV.imageSmoothingEnabled = !1) : tV.drawImage(aFd, -
			aFZ, -aFa))
	}, this.a7H = function(hg, hj) {
		aFZ += hg, aFa += hj
	}, this.a0B = function(hg, hj) {
		ab.a7H(hg, hj)
	}, this.zoom = function(a15, kk, kl) {
		aFb *= a15, aFZ = (aFZ + kk) * a15 - kk, aFa = (aFa + kl) * a15 - kl
	}, this.lH = function(bo) {
		return !aFn && !(!aFk && !bo && bb.lo < aFj + (1 === aFb && 0 === aFZ && 0 === aFa && (a9.a3M() || a9.gu || 2 === a9.yf) ? 1e3 : a8T) || (aFk = !1, aFj = bb.lo, aFu(aFe), 0))
	}, this.aG0 = function(a7) {
		return aFw(a7) * aFR[a7]
	}, this.aG1 = function(player) {
		return aFR[player]
	}, this.iS = function() {
		bb.jb() % 10 == 9 && (aFk = a9.a3O() && !a9.a3M()), !a9.a3M() && 4 <= ++aFM && function() {
			var a7, er, es;
			for (aFM = 0, es = 4; 1 <= es; es--)
				for (er = ah.jf - 1; 0 <= er; er--) a7 = ah.jh[er] + es * a9.eV, 0 < aAJ[a7] && aAJ[a7] < 255 && aAJ[a7]--;
			if (2 !== a9.yf)
				for (er = ah.jf - 1; 0 <= er; er--) a7 = ah.jh[er], 0 < aAJ[a7] && aAJ[a7] < 255 && aAJ[a7]--
		}();
		var a7, er, eY = Math.floor(.1 * ah.jf);
		for (eY = (eY = eY < 8 ? 8 : eY) > ah.jf ? ah.jf : eY, a7 = aFL + eY - 1; aFL <= a7; a7--) er = a7 % ah.jf, ! function(a7) {
			var hG = aFw(a7) * aFR[a7];
			0 < aFP[a7] && aGQ(a7, aFN[a7], aFO[a7], aFP[a7], aFQ[a7]) ? ! function(a7) {
				for (var ef, eh, a1, j7, eC = !1, es = 0; es < 8; es++) {
					if (a1 = aFP[a7] + 2, j7 = aFQ[a7] + 2, a1 > ac.iA[a7] - ac.i9[a7] + 1 || j7 > ac.iC[a7] - ac.iB[a7] + 1) return eC;
					if (ef = aFN[a7] - 1, eh = aFO[a7] - 1, !aGQ(a7, ef, eh, a1, j7)) return eC;
					aFN[a7] = ef, aFO[a7] = eh, aFP[a7] = a1, aFQ[a7] = j7, eC = !0
				}
				return eC
			}(a7) && function(a7, hG) {
				for (var ef, eh, a1, j7, eC = !1, aAR = aFP[a7], mA = 1 + Math.floor(.02 * aAR), es = 1; es < 5; es++) {
					if ((a1 = aAR + es * mA) > ac.iA[a7] - ac.i9[a7] + 1) return eC;
					if ((j7 = aGW(hG, a1)) > ac.iC[a7] - ac.iB[a7] + 1) return eC;
					ef = ac.i9[a7] + Math.floor(Math.random() * (ac.iA[a7] - ac.i9[a7] + 2 - a1)), eh = ac.iB[a7] + Math.floor(Math.random() * (ac.iC[a7] - ac.iB[a7] + 2 - j7)), aGQ(a7, ef, eh, a1, j7) && (aFN[a7] = ef, aFO[a7] = eh, aFP[
						a7] = a1, aFQ[a7] = j7, eC = !0)
				}
				return eC
			}(a7, hG) && aGT(a7) : ! function(a7, hG) {
				var j7, ef = aFN[a7] + 1,
					eh = aFO[a7] + 1,
					a1 = aFP[a7] - 2;
				for (;;) {
					if (a1 < 1) {
						aFP[a7] = 0;
						break
					}
					if (j7 = aGW(hG, a1), aGQ(a7, ef, eh, a1, j7)) return aFN[a7] = ef, aFO[a7] = eh, aFP[a7] = a1, aFQ[a7] = j7, 1;
					ef++, eh++, a1 -= 2
				}
				return
			}(a7, hG) ? function(a7, hG) {
				var ef, eh, a1, j7, es, mG, iu = ac.iA[a7] - ac.i9[a7] + 1,
					kz = Math.floor(.02 * iu);
				for (mG = -6 * (kz = kz < 1 ? 1 : kz), es = iu; mG <= es; es -= kz)
					if (j7 = aGW(hG, a1 = 0 < es ? es : 1), ef = ac.i9[a7] + Math.floor(Math.random() * (ac.iA[a7] - ac.i9[a7] + 2 - a1)), eh = ac.iB[a7] + Math.floor(Math.random() * (ac.iC[a7] - ac.iB[a7] + 2 - j7)), aGQ(a7, ef, eh, a1,
							j7)) return aFN[a7] = ef, aFO[a7] = eh, aFP[a7] = a1, aFQ[a7] = j7
			}(a7, hG) : aGT(a7)
		}(ah.jh[er]);
		aFL = (aFL += eY) % ah.jf
	}, this.lC = function() {
		var a7, g6, hP, hQ;
		if (bb.jb() % 4 == 1)
			for (a7 = ah.jf - 1; 0 <= a7; a7--) g6 = ah.jh[a7], aY.a6X[g6] < 2 || ((hP = Math.max(aFo[g6] - 1, 0)) === (hQ = Math.max(aFp[g6] - 1, 0)) ? 0 === hP && (aY.a6X[g6] %= 2) : 0 === hQ && aY.a6X[g6] < 6 && (aY.a6X[g6] += 4), aFo[g6] =
				hP, aFp[g6] = hQ)
	}, this.a4u = function(player) {
		var a7 = player + 2 * a9.eV,
			dk = aAJ[a7];
		return 0 < dk && (aJ.ym(50, player), aAJ[a7] = 0, 255 === dk)
	}, this.a3x = function(player) {
		return 255 === aAJ[player + 2 * a9.eV]
	}
}

function cW() {
	var aGZ, aGa;
	this.dU = function() {
		aGZ =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), aGa =
			"Pestilent Dominion;Wretched Realm;Damned Province;Corrupt Zone;Cursed Territory;Blight Nation;Haunted Expanse;Malevolent State;Ruined Empire;Contaminated Land;Epidemic Domain;Forsaken District;Abandoned Wasteland;Necrotic Enclave;Tainted Domain;Decayed Principality;Infested Region;Malignant Territory;Toxic Dominion;Ravaged Sector;Ghostly Realm;Plagued Commonwealth;Afflicted State;Desolate Nation;Apocalyptic Zone;Radiated Province;Deathly District;Pestilence Haven;Doom Territory;Malefic Expanse;Abandoned State;Cursed Haven;Corroded Zone;Hauntland;Noxious Nation;Infected Enclave;Ruinous Domain;Wasteland Woe;Rotten Principality;Voided Land;Vile Dominion;Catastrophic Region;Eerie Expanse;Desolation State;Forsaken Outpost;Contagion District;Damaged Province;Abhorrent Sector;Accursed Nation;Doomstruck Land;Radiant Ruin;Deathly Enclave;Malefic Dominion;Plague District;Infected Haven;Corrupt State;Pestilent Territory;Razed Realm;Haunted Wasteland;Toxic Sector;Cursed Dominion;Decaying Province;Forsaken Enclave;Ruinous Region;Malignant Haven;Infested State;Ghostly Nation;Tainted Territory;Damned District;Radiated Dominion;Desolate Expanse;Apocalyptic Land;Death Zone;Wretched State;Malevolent Haven;Plagued Nation;Noxious Domain;Voided Territory;Eerie Sector;Accursed Province;Necrotic District;Doom Haven;Haunt Realm;Rotten Nation;Forsaken Territory;Infected State;Abhorrent Expanse;Malignant Land;Toxic Dominion;Ruined District;Ghostland;Cursed Sector;Radiant Nation"
			.split(";");
		for (var a5D = ["K ", " Y", "E ", " Z", " z", " s", "S "], aGb = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], a7 = aGZ.length - 1; 0 <= a7; a7--)
			for (var er = a5D.length - 1; 0 <= er; er--) aGZ[a7] = aGZ[a7].replace(a5D[er], aGb[er]);
		if (__fx.settings.realisticNames) aGZ = realisticNames;
	}, this.a38 = function() {
		var eY = a9.je,
			zE = ac.zE,
			a4x = ac.a4x,
			playerNamesData = a9.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < eY)
			for (var a7 = 0; a7 < eY; a7++) zE[a7] = a4x[a7] = "Player " + au.iv(1e3);
		else
			for (a7 = 0; a7 < eY; a7++) zE[a7] = a4x[a7] = playerNamesData[a7]
	}, this.a3 = function() {
		if (9 === a9.jy) {
			for (var dz = au.random(), aGh = aGZ, aGi = aGa, eY = aGh.length, kP = a9.data.teamPlayerCount[7], zE = ac.zE, a4x = ac.a4x, a7 = kP - 1; a7 >= a9.je; a7--) zE[a7] = a4x[a7] = aGh[(a7 + dz) % eY];
			for (eY = aGi.length, a7 = kP; a7 < a9.eV; a7++) zE[a7] = a4x[a7] = aGi[a7 % eY]
		} else(2 === a9.data.playerNamesType ? function() {
			for (var eY = a9.eV, zE = ac.zE, a4x = ac.a4x, playerNamesData = a9.data.playerNamesData, a7 = a9.je; a7 < eY; a7++) zE[a7] = a4x[a7] = playerNamesData[a7]
		} : 1 === a9.data.playerNamesType ? function() {
			for (var zE = ac.zE, a4x = ac.a4x, a7 = a9.je; a7 < a9.eV; a7++) zE[a7] = a4x[a7] = "Bot " + au.iv(1e3)
		} : function() {
			for (var aGh = aGZ, eY = aGh.length, dz = au.random(), zE = ac.zE, a4x = ac.a4x, a7 = a9.je; a7 < a9.eV; a7++) zE[a7] = a4x[a7] = aGh[(a7 + dz) % eY]
		})()
	}
}

function cp() {
	this.aGj = [], this.aGk = [], this.dU = function() {
		this.aGj = [], this.aGk = []
	}, this.iS = function() {
		0 <= this.aGj.length && this.aGl(this.aGj), 0 <= this.aGk.length && this.aGl(this.aGk)
	}, this.aGl = function(g) {
		for (var es = -1, a7 = g.length - 1; 0 <= a7; a7--)
			if (g[a7].lo--, g[a7].lo <= 0) {
				es = a7;
				break
			} for (a7 = es; 0 <= a7; a7--) g.shift()
	}, this.a3l = function(id, yT, aGm) {
		return this.eu(this.aGj, id, yT, aGm)
	}, this.aGn = function(id, yT, aGm) {
		return this.eu(this.aGk, id, yT, aGm)
	}, this.eu = function(g, id, yT, aGm) {
		return ! function(g, id, yT) {
			var a7, k3;
			for (a7 = yT.length - 1; 0 <= a7; a7--)
				for (k3 = g.length - 1; 0 <= k3; k3--)
					if (g[k3].player === yT[a7] && id === g[k3].id) return 1;
			return
		}(g, id, yT) && (aGm && function(g, id, yT) {
			var a7;
			for (a7 = yT.length - 1; 0 <= a7; a7--) g.push({
				player: yT[a7],
				id: id,
				lo: 384
			})
		}(g, id, yT), !0)
	}
}

function cV() {
	this.a4x = new Array(a9.eV), this.zE = new Array(a9.eV), this.a20 = new Uint8Array(a9.eV), this.lV = new Uint8Array(a9.eV), this.i9 = new Uint16Array(a9.eV), this.iB = new Uint16Array(a9.eV), this.iA = new Uint16Array(a9.eV), this.iC =
		new Uint16Array(a9.eV), this.gM = new Uint32Array(a9.eV), this.wL = new Uint32Array(a9.eV), this.ga = new Uint32Array(a9.eV), this.g0 = null, this.gE = null, this.gF = null, this.ey = null, this.oo = new Uint16Array(a9.eV), this.ia =
		new Uint16Array(a9.eV), this.ib = new Uint16Array(a9.eV), this.zD = new Uint16Array(a9.eV), this.zC = new Uint8Array(a9.eV), this.a26 = new Uint16Array(a9.eV), this.dU = function() {
			this.a4x.fill(""), this.zE.fill(""), this.a20.fill(0), this.lV.fill(0), this.i9.fill(0), this.iB.fill(0), this.iA.fill(0), this.iC.fill(0), this.gM.fill(0), this.wL.fill(0), this.ga.fill(0), this.g0 = new Array(a9.eV), this.gE =
				new Array(a9.eV), this.gF = new Array(a9.eV), this.ey = new Array(a9.eV), this.oo.fill(0), this.ia.fill(0), this.ib.fill(0), this.zD.fill(0), this.zC.fill(0), this.a26.fill(0)
		}
}

function cn() {
	this.aAh = function(player) {
		aC.lU(player), a9.yh++, ac.a20[player] = 2, ac.zD[player] = be.zT.aE7(), player === a9.eI && (aT.show(!1, !1), aS.a96(), bN.yQ.zA()), ab.a4u(player)
	}
}

function cP() {
	this.jh = null, this.jf = 0, this.a3C = function() {
		for (this.jf = 0, a7 = a9.eV - 1; 0 <= a7; a7--) 0 !== ac.lV[a7] && this.jf++;
		this.jh = new Uint16Array(this.jf);
		for (var eY = 0, a7 = 0; a7 < a9.eV; a7++) 0 !== ac.lV[a7] && (this.jh[eY++] = a7)
	}, this.lB = function() {
		for (var gM = ac.gM, wL = ac.wL, zC = ac.zC, jh = ah.jh, a7 = ah.jf - 1; 0 <= a7; a7--) {
			var dk, g6 = jh[a7];
			gM[g6] <= bH.dl(wL[g6], 4) ? ag.dd(g6) : gM[g6] >= wL[g6] ? (dk = gM[g6], 250 <= (wL[g6] = dk) && (zC[g6] = 1)) : wL[g6] -= Math.max(1, bH.dl(wL[g6] - gM[g6], 1e3))
		}
		this.aGr()
	}, this.aGr = function() {
		for (var lV = ac.lV, jg = this.jh, a9k = this.jf, a7 = a9k - 1; 0 <= a7; a7--) 0 === lV[jg[a7]] && (jg[a7] = jg[--a9k]);
		this.jf = a9k
	}
}

function cX() {
	var aGs;
	this.k8 = null, this.k7 = 0, this.dU = function() {
		aGs = [], 9 === a9.jy && this.aGt()
	}, this.aGt = function() {
		var aGu = [58, 83, 105, 150, 190, 333];
		if (this.k8 = [0, 0, 0, 0, 0, 0], this.k7 = 0, a9.je <= aGu[0]) this.k7 = 256 - bH.dl(256 * a9.je, aGu[0]), this.k8[0] = a9.eV - a9.je - this.k7;
		else
			for (var a7 = 1; a7 < 6; a7++)
				if (a9.je <= aGu[a7]) {
					this.k8[a7 - 1] = 512 - aGu[a7 - 1] - bH.dl((512 - aGu[a7 - 1]) * (a9.je - aGu[a7 - 1]), aGu[a7] - aGu[a7 - 1]), this.k8[a7] = 512 - a9.je - this.k8[a7 - 1];
					break
				} a9.k2 = a9.eV - a9.je, a9.data.numberTeams = (0 < a9.je) + (0 < a9.k2), a9.data.playerCount = a9.vr = a9.je + a9.k2, a9.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, a9.je + this.k7, a9.k2 - this.k7]), a9.a32
		.a36()
	}, this.aEE = function(player) {
		aGs.push({
			player: player,
			g1: 14 + au.iv(20)
		})
	}, this.iS = function() {
		if (9 === a9.jy)
			for (var a7 = aGs.length - 1; 0 <= a7; a7--) --aGs[a7].g1 <= 0 && (ab.p1(aGs[a7].player, 0, af.xA.xW + af.xA.xk), aGs.splice(a7))
	}
}

function d4() {
	function aH9() {
		return {
			ej: bO.ej,
			ek: bO.ek,
			vG: bO.vG,
			vC: bO.vC,
			vD: bO.vD,
			vH: bO.vH,
			eE: bO.eE,
			mapSeed: bO.mapSeed
		}
	}

	function aH1(a7) {
		return 1 !== a7 && bO.aB6(a7) && a7 !== bO.aHA()
	}
	this.aGw = 22, this.aEP = 4096, this.ej = 0, this.ek = 0, this.vG = null, this.vC = null, this.vD = null, this.vH = null, this.eE = 0, this.mapSeed = 0, this.vE = !1, this.vF = new aGx, this.v6 = new aGy, this.a5J = new aGz, this.dU =
function() {
		this.v6.dU()
	}, this.a3 = function(map, aH0) {
		((map %= this.aGw) !== this.eE || aH1(this.eE) && aH0 !== this.mapSeed) && (this.vE = !1, this.vF.aH2(), au.a37(map), this.eE = map, this.mapSeed = aH0, aH1(map) && (bO.v6.v7[map].aH3 = aH0), this.aB6(this.eE) ? (map = bO.v6.v7[this.eE],
			this.ej = map.a1, this.ek = map.j7, au.a37(map.aH3), al.a3([this.ej, this.ek, map.la, map.lX]), aH5(), ak.aH6(), al.aH7()) : aH4())
	}, this.aH8 = function(map, aH0) {
		var fG = aH9(),
			map = (this.a3(map, aH0), this.vF.aH2(), aH9());
		return this.ej = fG.ej, this.ek = fG.ek, this.vG = fG.vG, this.vC = fG.vC, this.vD = fG.vD, this.vH = fG.vH, this.eE = fG.eE, this.mapSeed = fG.mapSeed, map
	}, this.a3S = function(canvas) {
		canvas && this.vG !== canvas && (this.ej = canvas.width, this.ek = canvas.height, this.vG = canvas, this.vC = this.vG.getContext("2d", {
			alpha: !1
		}), this.hE = this.vC.getImageData(0, 0, this.ej, this.ek), this.vH = this.hE.data, this.eE = this.aHA(), this.mapSeed = 0, bO.v6.v7[this.eE].name = a9.data.mapName)
	}, this.eD = function(a7) {
		return 3 === a7 || 7 === a7 || 9 === a7 || 21 === a7 || a7 === this.aHA()
	}, this.aHB = function(a7) {
		return 2 === a7 || 7 === a7 || 9 === a7 || 20 === a7
	}, this.aHC = function(a7) {
		return 1 === a7
	}, this.aHA = function() {
		return this.aGw
	}, this.aB6 = function(a7) {
		return void 0 === this.v6.v7[a7].aHD
	}, this.a3R = function(pL) {
		return 0 === pL.mapType ? pL.mapProceduralIndex < 10 ? pL.mapProceduralIndex : 10 + pL.mapProceduralIndex : 1 === pL.mapType ? pL.mapRealisticIndex + 10 : void 0
	}, this.aB7 = function(pL, aHE) {
		0 === pL.mapType ? pL.mapProceduralIndex = aHE < 10 ? aHE : aHE - 10 : 1 === pL.mapType && (pL.mapRealisticIndex = aHE - 10)
	}
}

function aGx() {
	function aHN() {
		bO.vF.iS()
	}

	function aHT(g6, aHS) {
		0 < aHS && (bO.vH[g6] += aHS, bO.vH[g6 + 1] += aHS, bO.vH[g6 + 2] += aHS)
	}

	function h1(g6) {
		return bO.vH[g6 + 2] > bO.vH[g6] && bO.vH[g6 + 2] > bO.vH[g6 + 1]
	}
	this.a7T = -1, this.zg = 0, this.aHF = 0, this.aHG = 8, this.aHH = 32, this.aHI = 8, this.aHJ = 32, this.aHK = [0, 0], this.a6X = [0, 0, 0, 0], this.i4 = null, this.aHL = !0, this.aHM = !1, this.aH2 = function() {
		-1 !== this.a7T && clearTimeout(this.a7T), this.a7T = -1, this.i4 = null, al.aH7()
	}, this.dU = function() {
		7 === aW.zo() || this.aHM || (this.aHL = !0, this.zg = 0, this.aHF = 1, this.aHK = [bO.v6.v7[bO.eE].vZ[0], bO.v6.v7[bO.eE].va[0]], this.a6X = [bO.v6.v7[bO.eE].aHD[3], bO.v6.v7[bO.eE].aHD[4], bO.v6.v7[bO.eE].aHD[5], bO.v6.v7[bO.eE].aHD[
			6]], this.aHG = bO.v6.v7[bO.eE].aHD[7], this.aHH = bO.v6.v7[bO.eE].aHD[8], this.aHI = bO.v6.v7[bO.eE].aHD[9], this.aHJ = bO.v6.v7[bO.eE].aHD[10], this.aHL ? this.a7T = setTimeout(aHN, 16) : this.iS())
	}, this.iS = function() {
		if (8 === aW.zo() && aD.lp()) this.a7T = setTimeout(aHN, 16);
		else {
			if (0 === this.zg) {
				var aH3 = au.aHO();
				if (au.a37(bO.v6.v7[bO.eE].aHD[2]), al.a3([bO.ej, bO.ek, bO.v6.v7[bO.eE].aHD[0], bO.v6.v7[bO.eE].aHD[1]]), au.a37(aH3), this.i4 = al.aHP(), this.zg++, this.aHL) return void(this.a7T = setTimeout(aHN, 16))
			}
			for (var g6, eK, aH3 = this.aHL ? 10 : 1e6, aH3 = bO.ek - this.aHF - 1 < aH3 ? bO.ek - this.aHF - 1 : aH3, wY = this.aHF + aH3, eh = this.aHF; eh < wY; eh++)
				for (var ef = 1; ef < bO.ej - 1; ef++) h1(g6 = 4 * (eK = ef + eh * bO.ej)) ? this.aHQ(g6, eK, 1) : (this.aHQ(g6, eK, 0), function(ef, eh, g6) {
					return 1 < ef && h1(g6 - 4) || ef < bO.ej - 2 && h1(g6 + 4) || 1 < eh && h1(g6 - 4 * bO.ej) || eh < bO.ek - 2 && h1(g6 + 4 * bO.ej)
				}(ef, eh, g6) && this.aHR(ef, eh));
			this.aHF = wY, this.aHF >= bO.ek - 1 ? (bO.vC.putImageData(bO.vD, 0, 0, 1, 1, bO.ej - 2, bO.ek - 2), bb.dc = !0, this.aH2()) : this.aHL && (this.a7T = setTimeout(aHN, 16))
		}
	}, this.aHQ = function(g6, eK, e0) {
		aHT(g6, Math.floor(this.aHK[e0] + this.a6X[e0] * this.i4[eK] / 1e4) - bO.vH[g6])
	}, this.aHU = function(g6, dz, aHV, e0, a6X) {
		aHT(g6, Math.floor(this.aHK[e0] + (1 - dz / aHV) * a6X) - bO.vH[g6])
	}, this.aHR = function(kk, kl) {
		for (var g6, dz, aHV, a7J = kk - this.aHH, aHW = kl - this.aHH, wZ = kk + this.aHH, wY = kl + this.aHH, a7J = a7J < 1 ? 1 : a7J, wZ = wZ > bO.ej - 2 ? bO.ej - 2 : wZ, wY = wY > bO.ek - 2 ? bO.ek - 2 : wY, eh = aHW < 1 ? 1 : aHW; eh <=
			wY; eh++)
			for (var ef = a7J; ef <= wZ; ef++) h1(g6 = 4 * (ef + eh * bO.ej)) ? (aHV = this.aHG + (this.aHH - this.aHG) * this.i4[ef + bO.ej * eh] / 1e4, Math.abs(kk - ef) > aHV || Math.abs(kl - eh) > aHV || aHV <= (dz = Math.sqrt((kk - ef) * (
				kk - ef) + (kl - eh) * (kl - eh))) || this.aHU(g6, dz, aHV, 1, this.a6X[3])) : (aHV = this.aHI + (this.aHJ - this.aHI) * this.i4[ef + bO.ej * eh] / 1e4, Math.abs(kk - ef) > aHV || Math.abs(kl - eh) > aHV || aHV <= (dz = Math
				.sqrt((kk - ef) * (kk - ef) + (kl - eh) * (kl - eh))) || this.aHU(g6, dz, aHV, 0, this.a6X[2]))
	}
}

function aH5() {
	2 === bO.eE ? aHX([256], [256], [0, 205, 256], [500, 500, 0], [0, 0, 0]) : 7 === bO.eE ? aHX([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0]) : 8 === bO.eE ? aHX([410], [410], [0, 120, 210], [0, 80, 640], [0, 0, 0]) : 9 === bO.eE ? aHX([
		512], [512], [0, 70, 180, 200, 290, 420, 512], [500, 500, 0, 0, 500, 500, 0], [0, 0, 0, 0, 0, 0, 0]) : 20 === bO.eE && aHX([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0])
}

function aHX(aHY, aHZ, aHa, aHb, aHc) {
	for (var ef, eh, aHe, aHf, a15, aHg, hf = aHY.length - 1, aHd = bO.ej + bO.ek, eY = (aHd *= aHd, aHa.length), a7 = eY - 1; 0 <= a7; a7--) aHa[a7] *= aHa[a7];
	var aHh = new Array(eY),
		aHi = new Array(eY),
		aHj = new Array(eY),
		f0 = al.aHP();
	if (void 0 === aHc)
		for (aHc = new Array(eY), a7 = eY - 1; 0 <= a7; a7--) aHc[a7] = 0;
	for (a7 = 1; a7 < eY; a7++) aHh[a7] = aHa[a7] - aHa[a7 - 1], aHi[a7] = aHb[a7] - aHb[a7 - 1], aHj[a7] = aHc[a7] - aHc[a7 - 1];
	for (ef = bO.ej - 1; 0 <= ef; ef--)
		for (eh = bO.ek - 1; 0 <= eh; eh--) {
			for (aHe = aHd, a7 = hf; 0 <= a7; a7--) aHe = (aHf = (ef - aHY[a7]) * (ef - aHY[a7]) + (eh - aHZ[a7]) * (eh - aHZ[a7])) < aHe ? aHf : aHe;
			for (a15 = aHb[eY - 1], aHg = aHc[eY - 1], a7 = 1; a7 < eY; a7++)
				if (aHe < aHa[a7]) {
					a15 = aHb[a7 - 1] + aDh((aHe - aHa[a7 - 1]) * aHi[a7], aHh[a7]), aHg = aHc[a7 - 1] + aDh((aHe - aHa[a7 - 1]) * aHj[a7], aHh[a7]);
					break
				} aHk(bO.ej * eh + ef, a15, aHg, f0)
		}
}

function aHk(e0, a15, aHg, f0) {
	a15 < 500 ? f0[e0] = bH.dl(f0[e0] * a15 * 2, 1e3) : 500 < a15 && (f0[e0] += bH.dl(2 * (1e4 - f0[e0]) * (a15 - 500), 1e3)), f0[e0] += bH.dl(aHg * (10 * a15 - f0[e0]), 1e3)
}

function cZ() {
	var aHl;

	function aHv(a1T, hG, ef, eh, globalAlpha) {
		bO.vC.save(), bO.vC.globalAlpha = globalAlpha, bO.vC.imageSmoothingEnabled = !1, bO.vC.scale(hG, hG), bO.vC.drawImage(a1T, Math.floor(ef * (bO.ej / hG - a1T.width)), Math.floor(eh * (bO.ek / hG - a1T.height))), bO.vC.restore()
	}
	this.a5G = 0, this.a5H = 0, this.a5I = 0, this.a5J = 0, this.dU = function() {
		(aHl = new Array(bO.aGw))[0] = {
			a1: [0, 5e3, 8e3, 1e4],
			dz: [220, 250, 255, 220],
			sH: [190, 220, 0, 0],
			es: [170, 200, 0, 0]
		}, aHl[1] = {
			a1: [0, 4e3, 5e3, 6e3, 1e4],
			dz: [25, 0, 100, 0, 25],
			sH: [25, 0, 0, 0, 25],
			es: [25, 0, 0, 0, 25]
		}, aHl[2] = {
			a1: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			dz: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			sH: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			es: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aHl[3] = {
			a1: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			dz: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			sH: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			es: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, aHl[4] = {
			a1: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			dz: [10, 10, 20, 10, 10, 170, 212],
			sH: [20, 20, 60, 100, 100, 110, 170],
			es: [70, 70, 160, 30, 30, 60, 120]
		}, aHl[5] = {
			a1: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			dz: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			sH: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			es: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aHl[6] = {
			a1: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			dz: [10, 10, 60, 255, 255, 200, 200],
			sH: [10, 10, 60, 255, 255, 200, 200],
			es: [80, 80, 255, 255, 255, 200, 200]
		}, aHl[7] = {
			a1: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			dz: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			sH: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			es: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aHl[8] = {
			a1: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			dz: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			sH: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			es: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aHl[9] = {
			a1: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			dz: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			sH: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			es: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aHl[20] = {
			a1: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			dz: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			sH: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			es: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, aHl[21] = {
			a1: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			dz: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			sH: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			es: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.aH6 = function() {
		var aHu, a7, er, fG, hE = function() {
				var hE;
				return bO.vG = document.createElement("canvas"), bO.vG.width = bO.ej, bO.vG.height = bO.ek, bO.vC = bO.vG.getContext("2d", {
					alpha: !1
				}), hE = bO.vC.getImageData(0, 0, bO.ej, bO.ek), bO.vH = hE.data, hE
			}(),
			a1 = aHl[bO.eE].a1,
			dz = aHl[bO.eE].dz,
			sH = aHl[bO.eE].sH,
			es = aHl[bO.eE].es,
			f0 = al.aHP(),
			eY = a1.length - 2,
			aHp = new Array(1 + eY),
			aHq = new Array(1 + eY),
			aHr = new Array(1 + eY),
			aHs = new Array(1 + eY);
		for (er = eY; 0 <= er; er--) aHp[er] = a1[er + 1] - a1[er], aHq[er] = dz[er + 1] - dz[er], aHr[er] = sH[er + 1] - sH[er], aHs[er] = es[er + 1] - es[er];
		for (a7 = bO.ej * bO.ek - 1; 0 <= a7; a7--)
			for (er = eY; 0 <= er; er--)
				if (f0[a7] >= a1[er]) {
					fG = f0[a7] - a1[er], bO.vH[4 * a7] = dz[er] + aDh(aHq[er] * fG, aHp[er]), bO.vH[4 * a7 + 1] = sH[er] + aDh(aHr[er] * fG, aHp[er]), bO.vH[4 * a7 + 2] = es[er] + aDh(aHs[er] * fG, aHp[er]), bO.vH[4 * a7 + 3] = 255;
					break
				} bO.vC.putImageData(hE, 0, 0), bO.aHC(bO.eE) && aX.sK() && bO.aHC(bO.eE) && (hE = aX.aCo("arena"), aHu = aX.aCo("territorial.io"), aHv(hE, 5, .5, .5, .1), aHv(aHu, 2, .5, .45, .1)), bO.vE = !0, bb.dc = !0
	}, this.a3A = function() {
		for (var g6, ef, eh, aHw, aHx, fI, a5H = 0, a1 = bO.ej, j7 = bO.ek, fG = a1 * j7 * 4, aHy = a9u, aHz = bO.vH, a7 = a1 - 1; 0 <= a7; a7--) aHy[(g6 = a7 << 2) + 2] = aHy[fG - g6 - 2] = 3;
		for (fG = 4 * a1, a7 = j7 - 1; 0 <= a7; a7--) aHy[(g6 = a7 * fG) + 2] = aHy[g6 + fG - 2] = 3;
		for (aHw = a1 - 1, aHx = j7 - 1, eh = 1; eh < aHx; eh++)
			for (fG = eh * a1, ef = 1; ef < aHw; ef++) fI = 1 - (aHz[(g6 = fG + ef << 2) + 2] > aHz[g6 + 1] && aHz[g6 + 2] > aHz[g6]), aHy[g6 + 2] = 2 - fI, a5H += fI;
		this.a5G = (a1 - 2) * (j7 - 2), this.a5J = 0, bO.eD(bO.eE) && (bO.a5J.aI0(), bO.a5J.aI1()), this.a5H = a9.jO = a5H - this.a5J, this.a5I = this.a5G - this.a5H - this.a5J
	}
}

function aH4() {
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
			), (new uz).v1(pA)
}

function aGy() {
	this.v7 = null, this.aI2 = null, this.aI3 = null, this.dU = function() {
		var aI4 = [120, 105, 92],
			cos = [12, 12, 60],
			aI5 = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aI6 = [140, 130, 120],
			aI7 = [12, 12, 76],
			aI8 = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aI9 = [130, 117, 106],
			aIA = [12, 12, 68],
			aIB = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.v7 = new Array(bO.aGw + 1), __fx.customLobby.setMapInfo(this.v7), this.v7[0] = {
			name: L(127),
			a1: 230,
			j7: 230,
			la: 1e3,
			lX: 2e3,
			aH3: 173
		}, this.v7[1] = {
			name: L(128),
			a1: 800,
			j7: 800,
			la: 100,
			lX: 50,
			aH3: 43
		}, this.v7[2] = {
			name: L(129),
			a1: 512,
			j7: 512,
			la: 128,
			lX: 32,
			aH3: 0
		}, this.v7[3] = {
			name: L(130) + " 1",
			a1: 960,
			j7: 960,
			la: 60,
			lX: 8,
			aH3: 0
		}, this.v7[4] = {
			name: L(131),
			a1: 900,
			j7: 900,
			la: 100,
			lX: 5,
			aH3: 0
		}, this.v7[5] = {
			name: L(132),
			a1: 1e3,
			j7: 1e3,
			la: 100,
			lX: 40,
			aH3: 0
		}, this.v7[6] = {
			name: L(133),
			a1: 1e3,
			j7: 1e3,
			la: 100,
			lX: 20,
			aH3: 0
		}, this.v7[7] = {
			name: L(134),
			a1: 1024,
			j7: 1024,
			la: 128,
			lX: 32,
			aH3: 0
		}, this.v7[8] = {
			name: L(135),
			a1: 820,
			j7: 820,
			la: 200,
			lX: 100,
			aH3: 0
		}, this.v7[9] = {
			name: L(136),
			a1: 1024,
			j7: 1024,
			la: 128,
			lX: 32,
			aH3: 0
		}, this.v7[10] = {
			name: L(137),
			vZ: aI6,
			va: aI7,
			aHD: aI8
		}, this.v7[11] = {
			name: L(138),
			vZ: aI9,
			va: aIA,
			aHD: aIB
		}, this.v7[12] = {
			name: L(139),
			vZ: aI9,
			va: aIA,
			aHD: aIB
		}, this.v7[13] = {
			name: L(140),
			vZ: aI4,
			va: cos,
			aHD: aI5
		}, this.v7[14] = {
			name: L(141),
			vZ: aI4,
			va: cos,
			aHD: aI5
		}, this.v7[15] = {
			name: L(142),
			vZ: aI6,
			va: aI7,
			aHD: aI8
		}, this.v7[16] = {
			name: L(143),
			vZ: aI6,
			va: aI7,
			aHD: aI8
		}, this.v7[17] = {
			name: L(144),
			vZ: aI4,
			va: cos,
			aHD: aI5
		}, this.v7[18] = {
			name: L(145),
			vZ: aI9,
			va: aIA,
			aHD: aIB
		}, this.v7[19] = {
			name: L(146),
			vZ: aI4,
			va: cos,
			aHD: aI5
		}, this.v7[20] = {
			name: L(147),
			a1: 1024,
			j7: 1024,
			la: 128,
			lX: 32,
			aH3: 0
		}, this.v7[21] = {
			name: L(130) + " 2",
			a1: 940,
			j7: 940,
			la: 80,
			lX: 8,
			aH3: 0
		}, this.v7[bO.aGw] = {
			name: ""
		}, this.aI2 = new Uint8Array(12);
		for (var a7 = 0; a7 < 10; a7++) this.aI2[a7] = a7;
		for (this.aI2[10] = 20, this.aI2[11] = 21, this.aI3 = new Uint8Array(10), a7 = 0; a7 < 10; a7++) this.aI3[a7] = 10 + a7
	}
}

function aGz() {
	this.aI0 = function() {
		for (var g6, ef, fG, aHy = a9u, aHz = bO.vH, a1 = bO.ej, aHw = a1 - 1, aHx = bO.ek - 1, g1 = 0, eh = 1; eh < aHx; eh++)
			for (fG = eh * a1, ef = 1; ef < aHw; ef++) aHz[g6 = fG + ef << 2] === aHz[1 + g6] && aHz[g6] === aHz[2 + g6] && (g1++, aHy[2 + g6] = 4);
		ak.a5J = g1
	}, this.aI1 = function() {
		for (var aHy = a9u, a1 = bO.ej, aHw = a1 - 1, aHx = bO.ek - 1, id = 5, eh = 1; eh < aHx; eh++)
			for (var fG = eh * a1, ef = 1; ef < aHw; ef++) {
				var eC = 2 + (fG + ef << 2);
				4 === aHy[eC] && (! function(eC, id) {
					var eY = 1,
						aHy = a9u,
						ea = aY.ea,
						a1I = [eC];
					aHy[eC] = id;
					for (; eY;) {
						for (var a1J = [], a7 = 0; a7 < eY; a7++)
							for (var eN = a1I[a7], eb = 3; 0 <= eb; eb--) {
								var ec = eN + ea[eb];
								4 === aHy[ec] && (aHy[ec] = id, a1J.push(ec))
							}
						eY = (a1I = a1J).length
					}
				}(eC, id), id = Math.max((id + 1) % 256, 5))
			}
	}
}

function a39() {
	(ws = void 0 === ws ? document.createElement("canvas") : ws).width = bO.ej, ws.height = bO.ek, a3D = ws.getContext("2d", {
		alpha: !0
	}), a3E = a9u = null, a3E = a3D.getImageData(0, 0, bO.ej, bO.ek), a9u = a3E.data, b6.pd.vI(a9u)
}

function ca() {
	var f0, a1, j7, max, aID, lX, aIF, aIG, aIH, aII, aIJ, aIK, aIL, aIM, aIE = 1e4;

	function aIT(aIS, la, eY) {
		var a7;
		for (aIF[0] = aIS, a7 = 1; a7 < eY; a7++) aIF[a7] = aIF[a7 - 1] + la, la = aIF[a7] >= aIE ? (aIF[a7] = aIE - 1, -la) : aIF[a7] < 0 ? (aIF[a7] = 0, -la) : (la += 16384 <= au.random() ? lX : -lX) < -aID ? -aID : aID < la ? aID : la
	}

	function aIV(ef, eh, aIW, eY) {
		(aIW ? function(ef, eh, eY) {
			var a7;
			for (a7 = 0; a7 < eY; a7++) f0[eh * a1 + ef + a7] = aIF[a7]
		} : function(ef, eh, eY) {
			var a7;
			for (a7 = 0; a7 < eY; a7++) f0[eh * a1 + ef + a7 * a1] = aIF[a7]
		})(ef, eh, eY)
	}

	function aIZ(value, eY) {
		var a7, kz, eC, hU = value - aIF[eY - 1];
		if (0 != hU) {
			for (kz = 1 + bH.dl(Math.abs(hU), eY - 1), kz = hU < 0 ? -kz : kz, aIF[eY - 1] = value, eC = (eC = eY - 1 - bH.dl(Math.abs(hU), Math.abs(kz))) < 1 ? 1 : eY - 2 < eC ? eY - 2 : eC, a7 = eY - 2; eC <= a7; a7--) aIF[a7] += hU - (eY - 1 -
				a7) * kz;
			(hU < 0 ? function(eY) {
				var a7;
				for (a7 = eY - 2; 1 <= a7; a7--) aIF[a7] < 0 && (aIF[a7] = -aIF[a7] - 1)
			} : function(eY) {
				var a7;
				for (a7 = eY - 2; 1 <= a7; a7--) aIF[a7] >= aIE && (aIF[a7] = 2 * aIE - aIF[a7] - 1)
			})(eY)
		}
	}

	function aIc(a1I, a1J, eY) {
		for (var a7 = 0; a7 < eY; a7++) a1I[a7] = a1J[a7]
	}

	function aId(g) {
		for (var a7 = 0; a7 < g.length - 1; a7++) g[a7] = g[a7 + 1] - g[a7];
		g[g.length - 1] = g[g.length - 3]
	}

	function aIe(a3f, gap, hT) {
		aIG.push(a3f), aIH.push(gap), aII.push(hT)
	}
	this.a3 = function(a2Q) {
		! function(a2Q) {
			var a7;
			for (a1 = a2Q[0], j7 = a2Q[1], aID = a2Q[2], lX = a2Q[3], f0 = new Int16Array(a1 * j7), max = j7 < a1 ? a1 : j7, aIF = new Int16Array(max), aIG = [], aIH = [], aII = [], aIJ = new Array(a1), aIK = new Array(j7), a7 = a1 - 1; 0 <=
				a7; a7--) aIJ[a7] = !1;
			for (a7 = j7 - 1; 0 <= a7; a7--) aIK[a7] = !1;
			aIL = new Int16Array(a1), aIM = new Int16Array(j7)
		}(a2Q),
		function(eY) {
			var aIS = au.random() % aIE,
				la = au.random() % (2 * aID + 1) - aID;
			aIT(aIS, la, eY)
		}(max), aIc(aIM, aIF, j7), aIV(0, 0, !0, a1);
		var ef, eh, a2Q = f0[0],
			eY = max,
			la = au.random() % (2 * aID + 1) - aID;
		for (aIT(a2Q, la, eY), aIc(aIL, aIF, a1), aIV(0, 0, !1, j7), aId(aIL), aId(aIM), aIT(f0[a1 - 1], aIL[a1 - 1], j7), aIV(a1 - 1, 0, !1, j7), aIT(f0[a1 * (j7 - 1)], aIM[j7 - 1], a1), aIZ(f0[a1 * j7 - 1], a1), aIV(0, j7 - 1, !0, a1), aIJ[a1 -
				1] = aIJ[0] = !0, aIK[j7 - 1] = aIK[0] = !0, aIe(0, a1, !0), aIe(0, j7, !1), ! function() {
				var aIg, a3f;
				for (;;) {
					if (aIg = function() {
							var a7, aIg = aIG.length - 1;
							for (a7 = aIg - 1; 0 <= a7; a7--) aIH[a7] > aIH[aIg] && (aIg = a7);
							return aIg
						}(), aIH[aIg] < 5) return;
					a3f = aIG[aIg] + bH.dl(aIH[aIg], 2), (aII[aIg] ? function(ef) {
						var eY, aIj, a7, aCF = 0,
							aIk = 0;
						for (; aIk < j7 - 1;) {
							for (a7 = aCF + 1; a7 < j7; a7++)
								if (aIK[a7]) {
									aIk = a7;
									break
								} eY = aIk - aCF + 1, aIT(f0[ef + a1 * aCF], 0 === aCF ? aIL[ef] : aIF[aIj - 1] - aIF[aIj - 2], eY), aIZ(f0[aIk * a1 + ef], eY), aIV(ef, aCF, !1, eY), aIj = eY, aCF = aIk
						}
						aIJ[ef] = !0
					} : function(eh) {
						var eY, aIj, a7, aCF = 0,
							aIk = 0;
						for (; aIk < a1 - 1;) {
							for (a7 = aCF + 1; a7 < a1; a7++)
								if (aIJ[a7]) {
									aIk = a7;
									break
								} eY = aIk - aCF + 1, aIT(f0[eh * a1 + aCF], 0 === aCF ? aIM[eh] : aIF[aIj - 1] - aIF[aIj - 2], eY), aIZ(f0[eh * a1 + aIk], eY), aIV(aCF, eh, !0, eY), aIj = eY, aCF = aIk
						}
						aIK[eh] = !0
					})(a3f), aIe(a3f, aIG[aIg] + aIH[aIg] - a3f, aII[aIg]), aIH[aIg] = a3f - aIG[aIg] + 1
				}
			}(), ef = 0; ef < a1; ef++)
			if (!aIJ[ef])
				for (eh = 0; eh < j7; eh++) aIK[eh] || ! function(ef, eh) {
					var value = f0[eh * a1 + ef - 1] + f0[(eh - 1) * a1 + ef],
						a5S = 2;
					aIJ[ef + 1] && (a5S++, value += f0[eh * a1 + ef + 1]);
					aIK[eh + 1] && (a5S++, value += f0[(eh + 1) * a1 + ef]);
					f0[eh * a1 + ef] = bH.dl(value, a5S)
				}(ef, eh)
	}, this.aHP = function() {
		return f0
	}, this.aH7 = function() {
		f0 = null
	}
}

function aDh(er, es) {
	return 0 <= er ? bH.dl(er, es) : -bH.dl(-er, es)
}

function jB(f0) {
	return f0 * f0
}

function a4i(er, es) {
	return es < er ? er : es
}

function a9Q(er, es) {
	return er < es ? er : es
}

function a6q(er, f0, es) {
	return f0 < er ? er : es < f0 ? es : f0
}

function aIm(f0, eY) {
	for (var et = bH.dl(f0 + 1, 2), a7 = 0; a7 < eY; a7++) et = bH.dl(et + bH.dl(f0, et), 2);
	return et
}

function aF4(f0, eY) {
	return f0 < 1 ? 0 : aIm(f0, eY)
}

function aIn(ly, lz, rz, a6a, mB, mC, s0, sg) {
	return !(ly + rz <= mB || lz + a6a <= mC || mB + s0 <= ly || mC + sg <= lz)
}

function aIo(ly, lz, rz, a6a, mB, mC, s0, sg) {
	return ly <= mB && lz <= mC && mB + s0 <= ly + rz && mC + sg <= lz + a6a
}

function v9(f0) {
	return Math.floor(!!f0 * (1 + Math.log2(f0 + .5)))
}

function br() {
	this.dl = function(er, es) {
		return Math.floor((er + .5) / es)
	}, this.aIp = function(er, es) {
		return Math.floor(er * (es + .5))
	}, this.sqrt = function(f0) {
		return ~~Math.sqrt(f0 + .5)
	}, this.pow = function(e) {
		return Math.floor(Math.pow(2, e) + .5)
	}, this.p0 = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aIq = function(fG, fI, fK) {
		return Math.max(Math.min(fG, fI), fK)
	}, this.aIr = function(aIs, aIt, ef, eh) {
		ef -= aIs, aIs = eh - aIt, eh = 0;
		return 0 == ef ? eh = 0 <= aIs ? Math.PI : 0 : (eh = Math.atan(aIs / ef), eh += 0 < ef ? .5 * Math.PI : 1.5 * Math.PI), eh
	}, this.log2 = function(f0) {
		return Math.floor(!!f0 * (1 + Math.log2(f0 + .5)))
	}, this.log10 = function(f0) {
		return Math.floor(Math.log10(f0 + .5))
	}, this.aIv = function(aIw, aIx, aIy, aIz, aJ0) {
		return aIy - aJ0 < aIw && aIw < aIy + aJ0 && aIz - aJ0 < aIx && aIx < aIz + aJ0
	}, this.w9 = function(hN, hO) {
		return hN * hN + hO * hO
	}
}

function d6() {
	this.s = new aJ1, this.rs = 0;
	var aJ2 = new Array(30);

	function aJ6() {
		for (var eY = aJ2.length, a7 = 0; a7 < eY; a7++) aJ2[a7] = null
	}
	this.dU = function() {
		for (var aJ3, aJ4 = document.body.firstChild; aJ4;) {
			if (aJ3 = aJ4.nextSibling, document.body.contains(aJ4) && ("DIV" === aJ4.tagName || "INPUT" === aJ4.tagName || "BUTTON" === aJ4.tagName)) try {
				document.body.removeChild(aJ4)
			} catch (e) {
				console.log("error 2623: " + e)
			}
			aJ4 = aJ3
		}
	}, this.o = function(e0, aJ5, a2Q) {
		void 0 === aJ5 && (aJ5 = this.rs), bb.dc = !0, 0 === e0 && (0 === aW.zo() ? e0 = 5 : u.v.setState(13)), this.r1(), this.rs === e0 && (aJ5 = aJ2[e0].aJ5, aJ2[e0] = null), this.rs = e0;
		var kP = aJ2[e0];
		if (!kP || 4 === e0 || 7 === e0 || 8 === e0 || 9 === e0 || 10 === e0 || 11 === e0 || 13 === e0 || 15 === e0 || 18 === e0 || 20 <= e0 && e0 <= 28) {
			if (0 === e0) return void aJ6();
			1 === e0 ? kP = new aJ7 : 2 === e0 ? kP = new aJ8 : 3 === e0 ? kP = new aJ9 : 4 === e0 || 9 === e0 || 10 === e0 || 11 === e0 || 13 === e0 ? kP = a2Q : 5 === e0 ? kP = new aJA : 6 === e0 ? kP = new aJB : 7 === e0 ? kP = new aJC(n.s
					.aJD) : 8 === e0 ? kP = a2Q : 12 === e0 ? kP = new aJE : 14 === e0 ? kP = new aJF : 15 === e0 ? kP = new aJC(n.s.aJG) : 16 === e0 ? kP = new aJH : 17 === e0 ? kP = new aJI : 18 === e0 ? kP = new aJJ : 19 === e0 ? kP =
				new aJK : 20 === e0 ? kP = new aJL : 21 === e0 ? kP = new aJM : 22 === e0 ? kP = new aJN : 23 === e0 ? kP = new aJO : 24 === e0 ? kP = new aJP : 25 === e0 ? kP = new aJQ : 26 === e0 ? kP = new aJR : 27 === e0 ? kP = new aJS :
				28 === e0 ? kP = new aJT : 29 === e0 && (kP = new aJU), kP.aJ5 = aJ5, aJ2[e0] = kP
		}
		kP.show(a2Q)
	}, this.zy = function() {
		this.xD() && this.aJV(this.aDI().aJ5)
	}, this.aJV = function(e0) {
		this.xD() && (aJ2[e0] ? (this.r1(), bb.dc = !0, this.rs = e0, aJ2[e0].show()) : this.o(e0))
	}, this.r1 = function() {
		this.xD() && aJ2[this.rs].r1()
	}, this.r = function() {
		this.xD() && (aJ2[this.rs].r1(), aJ6(), this.rs = 0, u.v.setState(13))
	}, this.tU = function() {
		var kP;
		this.xD() && (kP = aJ2[this.rs]).tU && kP.tU()
	}, this.resize = function() {
		if (!this.xD()) return !1;
		aJ2[this.rs].resize()
	}, this.gm = function(ef, eh) {
		var kP;
		this.xD() && (kP = aJ2[this.rs]).gm && kP.gm(ef, eh)
	}, this.a0B = function(ef, eh) {
		var kP;
		this.xD() && (kP = aJ2[this.rs]).a0B && kP.a0B(ef, eh)
	}, this.a0Z = function() {
		var kP;
		this.xD() && (kP = aJ2[this.rs]).a0Z && kP.a0Z()
	}, this.a0E = function(kk, kl, deltaY) {
		var kP;
		this.xD() && (kP = aJ2[this.rs]).a0E && kP.a0E(kk, kl, deltaY)
	}, this.a0j = function(code) {
		var kP;
		return !!this.xD() && ((kP = aJ2[this.rs]).a0j && kP.a0j(code), !0)
	}, this.iS = function() {
		var kP;
		this.xD() && (kP = aJ2[this.rs]) && kP.iS && kP.iS()
	}, this.xD = function() {
		return 0 < this.rs
	}, this.aDI = function() {
		return aJ2[this.rs]
	}, this.aBY = function(e0) {
		return aJ2[e0]
	}, this.aJW = function() {
		return aJ2
	}
}

function aJC(data) {
	var aJX, aJY;
	this.show = function() {
		data.aJZ && bE.aKI("account", data.qr), aJX.show(), this.resize()
	}, this.r1 = function() {
		aJX.r1()
	}, this.resize = function() {
		aJX.resize(), aJY.resize()
	}, this.a0j = function(et) {
		2 === et && aJX.tM[0].pm()
	}, aJX = new tF(data.username, [new q("⬅️ " + L(32), function() {
		bE.clear(), n.zy()
	}), new q(data.aJZ ? "🔄 " + L(148) : L(149), function() {
		n.o(8, n.aDI().aJ5, new rt(25, {
			ru: 0,
			qr: data.qr,
			rr: data.rr
		}))
	}, 0, 0, 1)]), aJY = new pM(aJX.tL, function() {
		var pO = [];
		pO.push(function() {
				var aJp = new p6,
					qI = (aJp.p9(L(198)), new qJ({
						value: data.username,
						e0: -1
					}));
				qI.e.readOnly = !0, aJp.pK(qI), aJp.pK(new rF([new q(L(167), function(e) {
					return b6.pT.a1w(qI.e), b6.pT.a1x(e), !0
				}).button])), data.aJZ || aJp.pB(L(199));
				return aJp
			}()),
			function(pO) {
				var aJp, pC, aA8, aKA, aJx;
				data.aJZ || ((aJp = new p6).p9(L(200)), (pC = aJp.pB(data.aK9.length + " / 160")).style.textAlign = "center", aA8 = !0, (aKA = new td(0, 1, function(e) {
					e = e.target.value.length;
					pC.textContent = e + " / 160", 160 < e ? aA8 && (aA8 = !1, aJx.pp(1), aJx.button.style.color = b7.mY) : aA8 || (aA8 = !0, aJx.pp(0), aJx.button.style.color = b7.nU)
				})).e.rows = 6, aKA.e.style.fontSize = "1em", aKA.tk(data.aK9), aJp.pK(aKA), aJx = new q(L(201), function() {
					if (!aA8) return !0;
					n.o(8, n.aDI().aJ5, new rt(29, {
						ru: 1,
						pA: aKA.tl().substring(0, 160)
					}))
				}, 0, 0, 1), aJp.pK(new rF([aJx.button])), 0 !== data.aKB && (aJp.pK(new rF([new q(L(1 === data.aKB ? 203 : 204), function() {
					n.o(8, n.aDI().aJ5, new rt(29, {
						ru: 0,
						pA: ""
					}))
				}, 0, 0, 1).button])), aJp.pB(1 === data.aKB ? L(205, [data.aKD - 1]) : L(206, [data.aKD - 1]))), aJp.pB(L(202, [data.aKC])), pO.push(aJp))
			}(pO),
			function(pO) {
				var aJp;
				data.aJZ && 0 !== data.aKB && ((aJp = new p6).p9(L(200)), aJp.pD(data.aK9), aJp.pK(new rF([new q(L(207), function(e) {
					return aw.s.aCP(0) && (b6.pT.a1x(e), aw.aJv.aK8({
						ru: 5,
						qr: data.qr,
						rr: data.rr
					})), !0
				}, 0, 0, 1).button])), pO.push(aJp))
			}(pO), pO.push(function() {
				var aJp = new p6,
					aJq = (aJp.p9(L(150)), [L(151), L(152), L(153), L(154), L(155)]),
					dz = data.aJr;
				aJp.pF(L(156) + b6.zG.a2f(data.uW, .01, 2) + "<br>" + L(157) + (dz + 1) + " / " + data.uV + "<br>" + L(158) + aJq[dz < 10 ? 0 : dz < 50 ? 1 : dz < 200 ? 2 : dz < 1e3 ? 3 : 4]), data.aJZ || (aJp.pB(L(159)), aJp.pB(L(160)),
					aJp.pB(L(161)));
				return aJp
			}()), data.aJZ && pO.push(function() {
				var aJp = new p6,
					qI = (aJp.p9(L(162)), new qJ(bf.dp.data[147], 1, void 0, function(e) {
						aJs(e.target.value)
					})),
					aJt = (aJp.pK(qI), new q(L(14), function(e) {
						return qI.e.readOnly && aw.s.aCP(0) && (b6.pT.a1x(e), aJu(), aw.aJv.aJw({
							ru: 0,
							qr: data.qr,
							rr: data.rr,
							value: bH.p0(Math.floor(100 * bf.dp.data[147].value), 0, 4294967295)
						})), !0
					}, 1)),
					aJx = new q(L(163), function(e) {
						return e.textContent === L(163) ? (e.textContent = L(164), qI.e.readOnly = !0, aJt.pp(0), aJt.button.style.color = b7.nU, bf.rC.rD(147, qI.e.value), aJs(bf.dp.data[147].value)) : aJu(), !0
					}),
					pC = (aJp.pK(new rF([aJx.button])), aJp.pB()),
					aJs = function(f0) {
						f0 = isNaN(f0) ? 0 : Number(f0);
						var f0 = Math.max(f0, (data.aJy + 1) / 100),
							aJz = Math.floor(100 * Math.max(1e-4 * f0, data.aJy / 100)) / 100;
						pC.textContent = L(165, [f0.toFixed(2), bf.dp.data[105].value, aJz.toFixed(2), data.qr, (f0 - aJz).toFixed(2)])
					},
					aJu = function() {
						aJx.button.textContent = L(163), qI.e.readOnly = !1, aJt.pp(1), aJt.button.style.color = b7.mY
					};
				return aJs(bf.dp.data[147].value), aJp.pK(new rF([aJt.button])), aJp
			}());
		pO.push(function() {
			var aJp = new p6,
				qI = (aJp.p9(L(166)), new qJ({
					value: data.qr,
					e0: -1
				}));
			return qI.e.readOnly = !0, aJp.pK(qI), aJp.pK(new rF([new q(L(167), function(e) {
				return b6.pT.a1w(qI.e), b6.pT.a1x(e), !0
			}).button])), aJp
		}()), data.aJZ || (pO.push(function() {
			var aJp = new p6,
				aK0 = (aJp.p9(L(168)), new qJ(bf.dp.data[106]));
			return aK0.e.readOnly = !0, aK0.e.type = "password", aJp.pK(aK0), aJp.pK(new rF([new q(L(169), function(e) {
				return e.textContent === L(169) ? (e.textContent = L(170), aK0.e.type = "text") : (e.textContent = L(169), aK0.e.type = "password"), !0
			}).button, new q(L(167), function(e) {
				return b6.pT.a1w(aK0.e), b6.pT.a1x(e), !0
			}).button])), aJp.pK(new rF([new q(L(171), function() {
				n.o(8, n.aDI().aJ5, new rt(15))
			}).button])), aJp.p9(L(172), "0.8em"), aJp.pB(L(173)), aJp.pB(L(174)), aJp.pB(L(175)), aJp
		}()), pO.push(function() {
			var aJp = new p6;
			return aJp.p9(L(176)), aJp.pK(new rF([new q(L(177), function() {
				n.o(6, n.aDI().aJ5)
			}).button])), aJp.pK(new rF([new q(L(178), function() {
				bf.rC.rD(105, ""), n.o(8, n.aDI().aJ5, new rt(18))
			}).button])), aJp.pK(new rF([new q(L(179) + bf.dp.data[105].value, function() {
				n.o(4, 0, new p(L(180), L(181), !0, [new q("⬅️ " + L(32), function() {
					n.o(7, n.aBY(7).aJ5)
				})]))
			}, b7.nD).button])), aJp
		}()), pO.push(function() {
			function aK2(e0) {
				for (var a7 = 0; a7 < 2; a7++) aK1[a7].pp(0 === e0 ? b7.mk : 0 === a7 ? b7.nD : b7.mv)
			}
			var pI, aK1, aJp = new p6;
			aJp.p9(L(182)), aJp.pB(L(183)), bf.s.uG();
			return aK1 = [new q(L(184), function() {
				var e0 = Math.min(bf.dp.data[117].value, pI.pJ.length - 1);
				if (!(e0 < 1)) {
					pI.pJ[e0].remove(), pI.pJ.splice(e0, 1);
					for (var a7 = e0; a7 < pI.pJ.length; a7++) pI.pJ[a7].name = "" + a7;
					bf.s.uJ(e0), e0 = bf.dp.data[117].value, pI.pJ[e0].textContent = pI.pJ[e0].textContent.replace("⚪", "🟢"), aK2(e0)
				}
			}, b7.mk), new q(L(185), function() {
				var e0 = Math.min(bf.dp.data[117].value, pI.pJ.length - 1);
				e0 < 1 || (e0 = bf.s.uK(e0), bf.rC.rD(105, e0.qr), bf.rC.rD(106, e0.password), n.o(8, n.aDI().aJ5, new rt(18)))
			}, b7.mk)], (pI = new tA(bf.dp.data[117], aK2)).pJ[0].style.marginTop = "0.5em", aJp.pH(pI), aJp.pK(new rF([aK1[1].button])), aJp.pK(new rF([aK1[0].button])), aJp
		}()));
		return pO.push(function() {
				var aJp = new p6,
					aJq = (aJp.p9(L(189)), [L(190), L(191), L(192), L(193)]),
					dz = data.aK3;
				return aJp.pF(L(194) + (data.aK4 / 100).toFixed(2) + "<br>" + L(157) + (dz + 1) + " / " + data.uV + "<br>" + L(158) + aJq[dz < 10 ? 0 : dz < 50 ? 1 : dz < 200 ? 2 : 3]), aJp
			}()), pO.push(function() {
				var aJp = new p6;
				return aJp.p9(L(186)), aJp.pF(L(187) + b6.zG.a2f(data.uS, .1, 1) + "<br>" + L(157) + (data.uT + 1) + " / " + data.uV + "<br>" + L(188) + data.uU), aJp
			}()),
			function(pO) {
				var aJp = new p6,
					zN = data.uZ,
					aKE = (aJp.p9(L(208)), aJp.pF(L(209) + (zN ? "[" + data.uX + "]" : "-")), aJp.pF(L(210) + b6.zG.a2f(zN, .001, 2)), aJp.pF(L(157) + (data.ub + 1) + " / " + data.uV), data.uc),
					aKF = (aJp.pF(L(211) + b6.zG.a2f(aKE, .01, 2)), data.ue);
				aJp.pF(L(212) + aKF), aJp.pF(L(213) + b6.zG.a2f(aKE / Math.max(aKF, 1), .01, 2)), zN = data.ua, aJp.p9(L(214), "0.8em"), aJp.pF("Clan: " + (zN ? "[" + data.uY + "]" : "-")), aJp.pF(L(210) + b6.zG.a2f(zN, .001, 2)), aKE = data
					.ud, aJp.pF(L(211) + b6.zG.a2f(aKE, .01, 2)), aKF = data.uf, aJp.pF(L(212) + aKF), aJp.pF(L(213) + b6.zG.a2f(aKE / Math.max(aKF, 1), .01, 2)), pO.push(aJp)
			}(pO),
			function(pO) {
				var aJp = new p6;
				aJp.p9(L(215)), aJp.pF(L(194) + data.aKG + "<br>" + L(158) + (data.aKH.length ? L(216, [data.aKH]) : L(217))), data.aJZ && (aJp.pK(new rF([new q(L(218), function(e) {
					return aw.s.aCP(0) && (b6.pT.a1x(e), aw.aJv.aK8({
						ru: 4,
						qr: data.qr,
						rr: data.rr
					})), !0
				}, 0, 0, 1).button])), aJp.pB(L(219)), aJp.pB(L(220)));
				pO.push(aJp)
			}(pO), pO.push(function() {
				var aJp = new p6;
				if (aJp.p9(L(195)), aJp.pF(L(196) + data.aK5 + "<br>" + L(157) + (data.aK6 + 1) + " / " + data.uV + "<br>" + L(158) + bl.e2(data.aK6)), data.aJZ) {
					var qI = new qJ(bf.dp.data[157], 1, void 0, function(e) {
							aJs(e.target.value)
						}),
						aJx = (qI.e.style.marginTop = "0.6em", aJp.pK(qI), new q(L(163), function(e) {
							return e.textContent === L(163) ? (e.textContent = L(164), qI.e.readOnly = !0, aK7[0].pp(0), aK7[1].pp(0), aK7[0].button.style.color = b7.nU, aK7[1].button.style.color = b7.nU, bf.rC.rD(157, qI.e
								.value), aJs(bf.dp.data[157].value)) : aJu(), !0
						})),
						aK7 = (aJp.pK(new rF([aJx.button])), [new q("−", function(e) {
							return qI.e.readOnly && aw.s.aCP(0) && (b6.pT.a1x(e), aJu(), aw.aJv.aK8({
								ru: 7,
								qr: data.qr,
								rr: bH.p0(bf.dp.data[157].value, 2, 32767)
							})), !0
						}, 1), new q("+", function(e) {
							return qI.e.readOnly && aw.s.aCP(0) && (b6.pT.a1x(e), aJu(), aw.aJv.aK8({
								ru: 6,
								qr: data.qr,
								rr: bH.p0(bf.dp.data[157].value, 2, 32767)
							})), !0
						}, 1)]),
						pC = aJp.pB(),
						aJs = function(f0) {
							f0 = isNaN(f0) ? 0 : Number(f0), f0 = Math.floor(bH.p0(f0, 3, 32767)), pC.textContent = L(197, [f0 - 1, f0, bf.dp.data[105].value])
						};
					aJp.pK(new rF([aK7[0].button, aK7[1].button]));
					for (var a7 = 0; a7 < 2; a7++) aK7[a7].button.style.fontSize = "1.6em";
					var aJu = function() {
						aJx.button.textContent = L(163), qI.e.readOnly = !1, aK7[0].pp(1), aK7[1].pp(1), aK7[0].button.style.color = b7.mY, aK7[1].button.style.color = b7.mY
					};
					aJs(bf.dp.data[157].value)
				}
				return aJp
			}()), pO
	}())
}

function aJN() {
	var aKJ, aKK, aKL, pO;

	function aKM() {
		aKO(), 2 !== a9.data.aIncomeType && (a9.data.aIncomeData = null), n.aJW()[19] = null, n.zy()
	}

	function aKO() {
		2 === a9.data.aIncomeType ? (b6.pd.a1M(aKL.tl(), a9.data.aIncomeData, 255), b6.pd.max(a9.data.aIncomeData) || (a9.data.aIncomeType = 0)) : 1 !== a9.data.aIncomeType || a9.data.aIncomeValue || (a9.data.aIncomeType = 0)
	}
	this.show = function() {
		aKJ.show(), this.resize()
	}, this.r1 = function() {
		aKJ.r1()
	}, this.resize = function() {
		aKJ.resize(), aKK.resize()
	}, this.a0j = function(et) {
		2 === et && aKJ.tM[0].pm()
	}, aKJ = new tF(L(221), [new q("⬅️ " + L(32), aKM)]), aKK = new pM(aKJ.tL, (function(pO) {
		var aJp = new p6;
		aJp.p9(L(222)), aJp.pH(new tA({
			tE: [L(223), L(224), L(225)],
			value: a9.data.aIncomeType
		}, function(e0) {
			aKO(), 2 !== e0 || a9.data.aIncomeData || (a9.data.aIncomeData = new Uint8Array(a9.eV)), a9.data.aIncomeType = e0, n.o(22)
		})), pO.push(aJp)
	}(pO = []), function(pO) {
		var aJp;
		1 === a9.data.aIncomeType && ((aJp = new p6).p9("Value"), aJp.pK(new qJ({
			e0: -1,
			value: a9.data.aIncomeValue
		}, 1, 0, function(e) {
			var value = bH.p0(Math.floor(e.target.value), 0, 255);
			e.target.value = a9.data.aIncomeValue = value
		})), pO.push(aJp))
	}(pO), function(pO) {
		var aJp;
		2 === a9.data.aIncomeType && ((aJp = new p6).p9("Data"), (aKL = new td(0, 1, 0, 1)).tk(b6.zG.a2l(a9.data.aIncomeData, 4)), aJp.pK(aKL), pO.push(aJp))
	}(pO), pO))
}

function aJQ() {
	var aKJ, aKK, aKL;

	function aKM() {
		aKO(), 3 !== a9.data.botDifficultyType || b6.pd.a1A(a9.data.botDifficultyData) || (a9.data.botDifficultyType = 0), 3 !== a9.data.botDifficultyType && (a9.data.botDifficultyData = null), n.aJW()[19] = null, n.zy()
	}

	function aKO() {
		3 === a9.data.botDifficultyType && b6.pd.a1M(aKL.tl(), a9.data.botDifficultyData, aA.js.length - 1)
	}

	function aKT(pO, e0) {
		var aJp = new p6,
			value = (aJp.p9(e0 < 0 ? L(57) : L(56) + " " + bc.z1[e0 % 9]), 0 <= e0 && (aJp.pF(L(228) + ": " + a9.data.teamPlayerCount[e0]).style.marginBottom = "1em"), e0 < 0 ? a9.data.botDifficultyValue : a9.data.botDifficultyTeam[e0]);
		aJp.pH(new tA({
			tE: aA.js,
			value: value
		}, function(k3) {
			e0 < 0 ? a9.data.botDifficultyValue = k3 : a9.data.botDifficultyTeam[e0] = k3
		})), pO.push(aJp)
	}
	this.show = function() {
		aKJ.show(), this.resize()
	}, this.r1 = function() {
		aKJ.r1()
	}, this.resize = function() {
		aKJ.resize(), aKK.resize()
	}, this.a0j = function(et) {
		2 === et && aKJ.tM[0].pm()
	}, aKJ = new tF(L(57), [new q("⬅️ " + L(32), aKM)]), aKK = new pM(aKJ.tL, function() {
		var pO = [];
		if (function(pO) {
				var aJp = new p6,
					tE = (aJp.p9(L(222)), [L(224), L(226), L(227), L(225)]),
					value = a9.data.botDifficultyType;
				0 === a9.data.gameMode && (value = Math.min(value, 2), tE.splice(2, 1));
				aJp.pH(new tA({
					tE: tE,
					value: value
				}, function(e0) {
					aKO(), a9.data.botDifficultyType = e0, 0 === a9.data.gameMode && 2 === e0 && (a9.data.botDifficultyType = 3), 3 !== a9.data.botDifficultyType || a9.data.botDifficultyData || (a9.data.botDifficultyData =
						new Uint8Array(a9.eV)), 2 !== a9.data.botDifficultyType || a9.data.botDifficultyTeam || (a9.data.botDifficultyTeam = new Uint8Array(9)), n.o(25)
				})), pO.push(aJp)
			}(pO), 0 === a9.data.botDifficultyType) aKT(pO, -1);
		else if (2 === a9.data.botDifficultyType)
			for (var a7 = 0; a7 < a9.data.teamPlayerCount.length; a7++) a9.data.teamPlayerCount[a7] && aKT(pO, a7);
		else 3 === a9.data.botDifficultyType && ! function(pO) {
			var aJp = new p6;
			aJp.p9("Data"), (aKL = new td(0, 1, 0, 1)).tk(b6.zG.a2l(a9.data.botDifficultyData, 8)), aJp.pK(aKL), pO.push(aJp)
		}(pO);
		return pO
	}())
}

function aKU(data) {
	var aJX, aKV, aKW, aKX, aKY, aKZ, aKa, colors, aKb, aKc, aKd = 0,
		aKe = 0,
		aKf = !1,
		aKg = !1,
		aKh = [1, 5, 60, 240, 1440, 10080, 43200];

	function aL9(kk, kl) {
		! function(kk, kl) {
			return aKV < kk && kk < aKV + aKX && aKW < kl && kl < aKW + aKY
		}(aKd = kk, aKe = kl) ? (aKf && (bb.dc = !0), aKf = !1) : (aKf = !0, bb.dc = !0)
	}
	this.show = function() {
		aKg = bf.dp.data[127].value, aJX.show(), this.resize()
	}, this.r1 = function() {
		aJX.r1()
	}, this.resize = function() {
		aJX.resize();
		var et = at.pZ,
			tT = aJX.tQ(),
			aKq = et * tT.tS,
			et = et * tT.r4;
		aKZ = b6.pT.sI(.06), aKa = b6.pT.sI(.04), aKV = b6.pT.sI(.06), aKW = et + aKZ, aKX = at.a1 - aKV - aKa, aKY = aKq + et - aKW - aKa
	}, this.tU = function() {
		aJX.tU(),
			function() {
				var a7, aKn, g1, ef, er, g = data.data,
					aKu = 1,
					aKv = .125,
					aKw = aKg ? 65536 : 0;
				for (a7 = 0; a7 < g.length; a7++)
					for (aKn = g[a7].aKn, g1 = aKn.length, aKu = Math.max(g1, aKu), er = 0; er < g1; er++) aKv = Math.max(aKn[er], aKv), aKw = Math.min(aKn[er], aKw);
				var lz = aKW + aKY,
					wi = aKY / (aKv - aKw),
					wh = 1 / (aKu - 1);
				for (tV.lineWidth = bY.xg, a7 = 0; a7 < g.length; a7++) {
					for (aKn = g[a7].aKn, g1 = aKn.length, ef = aKV, tV.beginPath(), tV.moveTo(ef + aKX, lz - wi * (aKn[g1 - 1] - aKw)), er = g1 - 2; 0 <= er; er--) tV.lineTo(ef + wh * er * aKX, lz - wi * (aKn[er] - aKw));
					tV.strokeStyle = colors[a7], tV.stroke()
				}(function(aKw, aKv, lz, wi) {
					tV.font = b6.pT.rV(0, .25 * aKV), b6.pT.textBaseline(tV, 1), b6.pT.textAlign(tV, 2), tV.fillStyle = colors[0];
					for (var ef = .92 * aKV, a7 = 0; a7 < 3; a7++) {
						var f0 = aKw + a7 * (aKv - aKw) / 2;
						tV.fillText((f0 / 1e3).toFixed(3), ef, lz - wi * (f0 - aKw))
					}
				})(aKw, aKv, lz, wi),
				function(aKu) {
					var eh = aKW + aKY + .15 * aKa;
					tV.font = b6.pT.rV(0, Math.min(.4 * aKa, .028 * at.a1)), b6.pT.textBaseline(tV, 0), b6.pT.textAlign(tV, 2), tV.fillStyle = colors[0], tV.fillText(b6.a11.a1l(aKb), aKV + aKX, eh), b6.pT.textAlign(tV, 0), tV.fillText(b6.a11.a1l(
						new Date(aKc.getTime() - 6e4 * (aKu - 1) * aKh[data.aKm])), aKV, eh)
				}(aKu),
				function(aKu, aKw, aKv) {
					if (aKf && !(aKu < 2)) {
						for (var a6i, e0 = (aKd - aKV) / aKX * (aKu - 1), kx = Math.floor(e0), ky = Math.floor(1 + e0), aKz = e0 - kx, aL0 = 1e5, aL1 = -1, aL2 = -1, aL3 = aKv - (aKv - aKw) * (aKe - aKW) / aKY, g = data.data, a7 = 0; a7 < g
							.length; a7++) {
							var aHi, aKn = g[a7].aKn;
							aKn.length <= ky || (aKn = aKn[kx] + aKz * (aKn[ky] - aKn[kx]), (aHi = Math.abs(aL3 - aKn)) < aL0 && (aL0 = aHi, aL1 = a7, aL2 = aKn))
						} - 1 !== aL1 && (aKv = aKW + aKY - (aL2 - aKw) / (aKv - aKw) * aKY, tV.lineWidth = .5 * bY.xg, tV.strokeStyle = colors[aL1], tV.beginPath(), tV.moveTo(aKV, aKv), tV.lineTo(aKd, aKv), tV.lineTo(aKd, aKW + aKY), tV
						.stroke(), tV.beginPath(), tV.arc(aKd, aKv, .1 * aKV, 0, 2 * Math.PI), tV.fillStyle = colors[aL1], tV.fill(), aKw = aKW + aKY + .15 * aKa, b6.pT.textAlign(tV, 1), a6i = aKu - 2 < e0 ? (a6i = aKc.getTime() - 6e4 * aKh[
								data.aKm], new Date(a6i + (e0 - (aKu - 2)) * (aKb.getTime() - a6i))) : new Date(aKc.getTime() - 6e4 * (aKu - e0 - 1) * aKh[data.aKm]), aKu = b6.a11.a1l(a6i), e0 = b6.pT.measureText(aKu), a6i = bH.p0(aKd, aKV +
								.5 * e0, aKV + aKX - .5 * e0), tV.fillStyle = b6.color.mQ(70, 50, 20), tV.fillRect(a6i - .52 * e0, aKW + aKY, 1.04 * e0, .55 * aKa), tV.fillStyle = colors[0], tV.fillText(aKu, a6i, aKw), tV.font = b6.pT.rV(0,
								.25 * aKV), b6.pT.textBaseline(tV, 1), b6.pT.textAlign(tV, 2), a6i = .92 * aKV, aKu = (aL2 / 1e3).toFixed(3), e0 = b6.pT.measureText(aKu), aKw = a6i - 1.04 * e0, tV.fillStyle = b6.color.mQ(70, 50, 20), tV
							.fillRect(aKw, aKv - .1625 * aKV, aKV - aKw, .275 * aKV), tV.fillStyle = colors[aL1], tV.fillText(aKu, a6i, aKv))
					}
				}(aKu, aKw, aKv)
			}(), tV.lineWidth = bY.xg, tV.strokeStyle = b7.mY, tV.beginPath(), tV.moveTo(aKV, aKW), tV.lineTo(aKV, aKW + aKY), tV.lineTo(aKV + aKX, aKW + aKY), tV.stroke();
		var a7, fontSize = .5 * aKZ,
			g = (tV.font = b6.pT.rV(0, fontSize), b6.pT.textBaseline(tV, 1), b6.pT.textAlign(tV, 0), data.data),
			eY = g.length,
			eh = aKW - .5 * aKZ,
			pA = "";
		for (a7 = 0; a7 < eY; a7++) pA += g[a7].name + "  ";
		pA = pA.trim();
		var aL6 = b6.pT.measureText(pA),
			ef = .5 * (at.a1 - aL6);
		for (aL6 > at.a1 && (ef = 0, tV.font = b6.pT.rV(0, at.a1 / aL6 * fontSize)), a7 = 0; a7 < eY; a7++) tV.fillStyle = colors[a7], tV.fillText(g[a7].name, ef, eh), ef += b6.pT.measureText(g[a7].name + "  ")
	}, this.gm = function(kk, kl) {
		aL9(kk, kl)
	}, this.a0B = function(kk, kl) {
		aL9(kk, kl)
	}, this.a0j = function(et) {
		2 === et && aJX.tM[0].pm()
	};
	var a7, dk, a1j, k3, eb = data.data,
		eY = eb.length,
		max = 1;
	for (a7 = 0; a7 < eY; a7++) max = Math.max(max, eb[a7].aKn.length);
	for (a7 = 0; a7 < eY; a7++)
		for (; eb[a7].aKn.length < max;) eb[a7].aKn.unshift(0);
	dk = new Date, a1j = 6e4 * dk.getTimezoneOffset(), k3 = dk.getTime() - a1j, aKb = new Date(k3), 6 === data.aKm ? function(dk, a1j) {
		var aKp = dk.getUTCFullYear(),
			dk = dk.getUTCMonth() + 1;
		aKc = dk < 12 ? new Date(Date.UTC(aKp, dk) - a1j) : new Date(Date.UTC(aKp + 1, 0) - a1j)
	}(dk, a1j) : (a1j = 6e4 * aKh[data.aKm], aKc = data.aKm <= 4 ? new Date(k3 + a1j - dk.getTime() % a1j) : new Date(k3 + a1j - (dk.getTime() + 2592e5) % a1j)), k3 = b6.color, colors = [b7.mY, k3.mQ(255, 0, 0), k3.mQ(0, 200, 0), k3.mQ(80, 80,
		255), k3.mQ(255, 255, 0), k3.mQ(255, 0, 255), k3.mQ(0, 255, 255), k3.mQ(255, 140, 0), k3.mQ(128, 128, 128), k3.mQ(0, 255, 140)], aJX = new tF(L(229) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.aKm] + ", " + b6.a11.a1i(aKb), [
		new q("⬅️ " + L(32), function() {
			n.s.aAE()
		}), new q(L(230), function() {
			n.o(14)
		})
	], !1)
}

function aJF() {
	var aJX, aJY, pO;
	this.show = function() {
		aJX.show(), this.resize()
	}, this.r1 = function() {
		aJX.r1()
	}, this.resize = function() {
		aJX.resize(), aJY.resize()
	}, this.a0j = function(et) {
		2 === et && aJX.tM[0].pm()
	}, aJX = new tF(L(231), [new q("⬅️ " + L(32), function() {
		n.aJV(13)
	})]), aJY = new pM(aJX.tL, ((pO = []).push(function() {
		var aJp = new p6,
			aJx = (aJp.p9(L(232)), aJp.pB(L(233)), new q(L(234), function() {
				bf.rC.rD(130, 0), n.s.aLE()
			}, 0, 0, 1)),
			qI = new qJ(bf.dp.data[126], 0, function() {
				aJx.button.click()
			});
		return aJp.pK(qI), qI.e.placeholder = "a,b,c", qI.e.style.marginTop = "0.5em", aJp.pK(new rF([aJx.button])), aJp
	}()), pO.push(function() {
		var aJp = new p6,
			aJx = new q(L(234), function() {
				bf.rC.rD(130, 1), n.s.aLE()
			}, 0, 0, 1),
			aLF = new qJ(bf.dp.data[129], 1, function() {
				aLF.e.focus()
			}),
			aLG = new qJ(bf.dp.data[128], 1, function() {
				aJx.button.click()
			});
		return aJp.p9(L(235)), aJp.pK(aLG), aLG.e.style.marginBottom = "0.5em", aJp.p9(L(236)), aJp.pK(aLF), aJp.pK(new rF([aJx.button])), aJp
	}()), pO.push(function() {
		var aJp = new p6;
		return aJp.p9(L(237)), bf.dp.data[125].tE = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], aJp.pH(new tA(bf.dp.data[125])), aJp
	}()), pO.push(function() {
		var aJp = new p6;
		return aJp.p9(L(238)), aJp.pK(new r9(bf.dp.data[127], L(239))), aJp
	}()), pO))
}

function aJE() {
	var aJX, aLH, aKX, aLI, aLJ, aLK, colors = [0, 0, 0],
		aLL = -1;

	function aLO(a7) {
		var aLP = aLH.eh + a7 * (bY.gap + aLK);
		tV.fillStyle = "rgb(" + (0 === a7 ? 150 : 2 === a7 ? 30 : 0) + "," + (1 === a7 ? 130 : 2 === a7 ? 30 : 0) + "," + (2 === a7 ? 220 : 0) + ")", tV.fillRect(aLI, aLP, colors[a7] * aLJ, aLK), tV.strokeStyle = b7.mY, tV.strokeRect(aLI, aLP, aLJ,
			aLK), tV.fillStyle = b7.mY, tV.font = b6.pT.rV(0, .32 * aLK), b6.pT.textBaseline(tV, 1), b6.pT.textAlign(tV, 0), tV.fillText(L(0 === a7 ? 242 : 1 === a7 ? 243 : 244) + aLM(a7), aLI + bY.gap, aLP + .53 * aLK)
	}

	function aLM(a7, aLQ) {
		return aLQ = aLQ || 256, bH.p0(Math.floor(aLQ * colors[a7]), 0, aLQ - 1)
	}

	function a0f(kk, kl) {
		return !(kk < aLI || kl < aLH.eh || kk > aLH.ef + aLH.a1 || kl > aLH.eh + aLH.j7)
	}
	this.show = function() {
		var f0 = bf.dp.data[121].value;
		colors[0] = (f0 >> 12) / 63, colors[1] = (f0 >> 6 & 63) / 63, colors[2] = (63 & f0) / 63, aJX.show(), this.resize()
	}, this.r1 = function() {
		bf.rC.rD(121, (aLM(0, 64) << 12) + (aLM(1, 64) << 6) + aLM(2, 64)), aJX.r1()
	}, this.resize = function() {
		aJX.resize(), aLH.resize();
		var et = at.pZ,
			tT = aJX.tQ(),
			aLN = (aLH.eh = Math.max(aLH.eh, et * tT.r4 + bY.gap), et * tT.tS - 2 * bY.gap);
		aLH.j7 = Math.min(aLH.j7, aLN), aLH.a1 = 2 * aLH.j7, aLH.eh = et * tT.r4 + .5 * (et * tT.tS - aLH.j7), aLH.ef = .5 * (at.a1 - aLH.a1), aKX = .25 * aLH.a1, aLI = aLH.ef + aKX + bY.gap, aLJ = aLH.a1 - aKX - bY.gap, aLK = (aLH.j7 - 2 * bY
			.gap) / 3
	}, this.tU = function() {
		var dz, sH, es;
		aJX.tU(), tV.lineWidth = bY.xg, dz = aLM(0), sH = aLM(1), es = aLM(2), tV.fillStyle = "rgb(" + dz + "," + sH + "," + es + ")", tV.fillRect(aLH.ef, aLH.eh, aKX, aLH.j7), tV.strokeStyle = b7.mY, tV.strokeRect(aLH.ef, aLH.eh, aKX, aLH.j7),
			tV.fillStyle = dz + sH + es < 306 && sH < 150 ? b7.mY : b7.mP, b6.pT.textBaseline(tV, 1), b6.pT.textAlign(tV, 1), tV.font = b6.pT.rV(0, .1 * aLH.j7), tV.rotate(-Math.PI / 2), tV.fillText(L(241), -aLH.eh - .5 * aLH.j7, aLH.ef + .5 *
				aKX), tV.setTransform(1, 0, 0, 1, 0, 0), aLO(0), aLO(1), aLO(2)
	}, this.gm = function(kk, kl) {
		a0f(kk, kl) && (aLL = bH.p0(Math.floor((kl - aLH.eh) / (aLK + .75 * bY.gap)), 0, 2), colors[aLL] = bH.p0((kk - aLI) / aLJ, 0, 1), bb.dc = !0)
	}, this.a0B = function(kk) {
		-1 !== aLL && (colors[aLL] = bH.p0((kk - aLI) / aLJ, 0, 1), bb.dc = !0)
	}, this.a0E = function(kk, kl, deltaY) {
		a0f(kk, kl) && (kk = bH.p0(Math.floor((kl - aLH.eh) / (aLK + .75 * bY.gap)), 0, 2), colors[kk] = bH.p0(colors[kk] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), bb.dc = !0)
	}, this.a0Z = function() {
		0 <= aLL && (aLL = -1, bb.dc = !0)
	}, this.a0j = function(et) {
		2 === et && aJX.tM[0].pm()
	}, aJX = new tF(L(240), [new q("⬅️ " + L(32), function() {
		n.s.aAE()
	})], !1), aLH = new q6([.5, .25], [.5, .5], 1)
}

function aJM() {
	var aKJ, aKK, aKL, q4;

	function aKM() {
		aKO(), 1 !== a9.data.colorsType && (a9.data.colorsData = null), n.aJW()[19] = null, n.zy()
	}

	function aLR() {
		aKO(), n.o(21)
	}

	function aKO() {
		1 === a9.data.gameMode ? a9.a32.a36() : 0 === a9.data.gameMode && 1 === a9.data.colorsType && b6.pd.a1M(aKL.tl(), a9.data.colorsData, 262143)
	}
	this.show = function() {
		aKJ.show(), this.resize()
	}, this.r1 = function() {
		aKJ.r1()
	}, this.resize = function() {
		aKJ.resize(), aKK.resize()
	}, this.a0j = function(et) {
		2 === et && aKJ.tM[0].pm()
	}, q4 = [new q("⬅️ " + L(32), aKM)], 1 === a9.data.gameMode && q4.push(new q(L(245), aLR, 1, 1)), aKJ = new tF(L(246), q4), aKK = new pM(aKJ.tL, (function(pO) {
		var aJp = new p6;
		aJp.p9(L(222)), 0 === a9.data.gameMode && (aJp.pH(new tA({
			tE: [L(247), L(225)],
			value: a9.data.colorsType
		}, function(e0) {
			aKO(), a9.data.colorsType = e0, 1 !== a9.data.colorsType || a9.data.colorsData && a9.data.colorsData.length === a9.eV || (a9.data.colorsData = new Uint32Array(a9.eV)), n.o(21)
		})), aJp.pK(new rP));
		aJp.pK(new r9({
			value: a9.data.selectableColor
		}, L(248), function(value) {
			a9.data.selectableColor = value
		})), pO.push(aJp)
	}(q4 = []), 0 === a9.data.gameMode ? 1 === a9.data.colorsType && function(pO) {
		var aJp = new p6;
		aJp.p9("Data"), (aKL = new td(0, 1, 0, 1)).tk(b6.zG.a2l(a9.data.colorsData, 1)), aJp.pK(aKL), pO.push(aJp)
	}(q4) : (a9.a32.a36(), q4.push(function() {
		var aJp = new p6;
		aJp.p9(L(228));
		for (var a7 = 0; a7 < bc.z1.length; a7++) {
			var k3 = (a7 + 1) % bc.z1.length,
				e = aJp.pF((0 == k3 ? "" : "Team ") + bc.z1[k3]);
			a7 && (e.style.marginTop = "0.5em"), aJp.pK(new qJ({
				e0: -1,
				value: a9.data.teamPlayerCount[k3]
			}, 1, 0, function(e) {
				aKJ.tM[1].pp(0);
				var playerCount = bH.p0(Math.floor(e.target.value), 0, 512);
				e.target.value = playerCount, a9.data.teamPlayerCount[e.target.aLT] = playerCount
			})).e.aLT = k3
		}
		return aJp
	}())), q4))
}

function rt(id, a2Q, aLU) {
	var aJX, aLV;

	function aLa() {
		aLV.pP.innerHTML += "<br>" + L(251)
	}

	function aLZ() {
		b9.a3(48), b9.a4(24, Math.floor(bH.pow(24) * Math.random())), b9.a4(24, Math.floor(bH.pow(24) * Math.random())), bD.dU(b9.a8), bf.rC.rD(110, bB.rv.rw(bB.rv.rx(8))), aw.aJv.aLo()
	}
	this.aLW = !0, this.aLX = id, this.show = function() {
		aJX.show(), this.resize(), 15 === id ? (aw.s.aLY(id) ? aLZ : aLa)() : 16 === id ? aw.s.aLY(id) ? aw.aAB.aLb(2) : aLa() : 17 === id ? aw.s.aLY(id) ? aw.aAB.aLb(3) : aLa() : 18 === id ? (aw.s.close(0, 3253), aw.s.aCV(0, id), aLa()) : 21 ===
			id ? aw.s.aLY(id) ? aw.aLc.aLd(a2Q.sC, a2Q.sD, a2Q.sE) : aLa() : 22 === id ? aw.s.aLY(id) ? aw.aLc.aLe(a2Q.sC, a2Q.aLf, a2Q.aLg) : aLa() : 23 === id ? aw.s.aLY(id) ? aw.aLc.aLh(a2Q.aKm, a2Q.zI) : aLa() : 24 === id ? aw.s.aLY(id) ? aw
			.aLc.aLi(a2Q.aKm, a2Q.sD, a2Q.sE) : aLa() : 25 === id ? aw.s.aLY(id) ? aw.aJv.aK8(a2Q) : aLa() : 28 === id ? aw.s.aLY(id) ? aw.aLc.aLj(a2Q.sC, a2Q.aLf, a2Q.aLg) : aLa() : 29 === id && (aw.s.aLY(id) ? aw.aJv.aLk(a2Q) : aLa())
	}, this.aLl = function() {
		15 === id ? aLZ() : 16 === id ? aw.aAB.aLb(2) : 17 === id ? aw.aAB.aLb(3) : 18 === id ? n.o(8, this.aJ5, new rt(16)) : 21 === id ? aw.aLc.aLd(a2Q.sC, a2Q.sD, a2Q.sE) : 22 === id ? aw.aLc.aLe(a2Q.sC, a2Q.aLf, a2Q.aLg) : 23 === id ? aw.aLc
			.aLh(a2Q.aKm, a2Q.zI) : 24 === id ? aw.aLc.aLi(a2Q.aKm, a2Q.sD, a2Q.sE) : 25 === id ? aw.aJv.aK8(a2Q) : 28 === id ? aw.aLc.aLj(a2Q.sC, a2Q.aLf, a2Q.aLg) : 29 === id ? aw.aJv.aLk(a2Q) : 1e3 === id && (this.aLX = id = 25, aw.aJv.aK8(
				a2Q))
	}, this.aLm = function(code, bo, data) {
		!bo && code !== id || (16 === code ? n.o(7, this.aJ5) : 17 === code ? (aw.s.close(0, 3252), bf.s.uJ(0), bf.dp.data[117].tE && 0 < bf.dp.data[117].tE.length ? (bo = bf.s.uK(0), bf.rC.rD(105, bo.qr), bf.rC.rD(106, bo.password), n.o(8, this
			.aJ5, new rt(16))) : (bf.rC.rD(105, ""), n.s.aAE())) : 21 === code ? n.o(10, this.aJ5, new aLn(data)) : 23 === code ? n.o(13, 0, new aKU({
			data: data,
			aKm: a2Q.aKm
		})) : 25 === code && (n.s.aJG.qr = a2Q.qr, n.o(15, this.aJ5)))
	}, this.r1 = function() {
		aJX.r1()
	}, this.resize = function() {
		aJX.resize(), aLV.resize()
	}, this.a0j = function(et) {
		2 === et && aJX.tM[0].pm()
	}, aJX = new tF(L(249), [new q("⬅️ " + L(32), function() {
		aLU ? n.o(29) : n.s.aAE()
	})]), aLV = new rE(aJX.tL, L(250))
}

function aJK() {
	var aKJ, aKK, pO;

	function aLr() {
		var g1;
		1 === a9.data.gameMode ? (a9.data.teamPlayerCount || (a9.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), a9.a32.a36()), g1 = b6.pd.a1G(a9.data.teamPlayerCount, 0), a9.data.numberTeams = g1) : (2 === a9.data
			.botDifficultyType && (a9.data.botDifficultyType = 0), 1 === a9.data.spawningType && (a9.data.spawningType = 0))
	}

	function aKM() {
		1 !== a9.data.gameMode && (a9.data.teamPlayerCount = null), aLt(), a9.data.canvas = null, n.o(5, 5)
	}

	function aLt() {
		b5.oi.dU(), bf.rC.rD(156, b5.a3I.y8())
	}

	function aLp() {
		a9.data.isReplay = 0, aLt(), a9.a32.a3T(), aW.aCh(), a9.a32.a3Q(), a9.data.canvas = 2 === a9.data.mapType ? bO.vG : null, a9.a35(), a9.a34 = 1
	}

	function aM7() {
		aLr();
		for (var g = [aLw(), aLx(), aLy()], a7 = 3; a7 < 6; a7++) aKK.pP.removeChild(aKK.pQ[a7].p8), aKK.pQ[a7] = g[a7 - 3], aKK.pP.appendChild(aKK.pQ[a7].p8);
		aKK.resize()
	}

	function aLw() {
		var aM8, aJp = new p6;
		return aJp.p9(L(246)), aM8 = 0 === a9.data.gameMode ? [L(247), L(225)][a9.data.colorsType] : a9.data.numberTeams + " Team" + (1 === a9.data.numberTeams ? "" : "s"), aJp.pF(aM8), aJp.pK(new rF([new q(L(255), function() {
			n.o(21)
		}).button])), aJp
	}

	function aLx() {
		var aJp = new p6,
			g = (aJp.p9(L(57)), [L(224) + ": " + aA.js[a9.data.botDifficultyValue], L(226), L(227), L(225)]);
		return aJp.pF(g[a9.data.botDifficultyType]), aJp.pK(new rF([new q(L(255), function() {
			n.o(25)
		}).button])), aJp
	}

	function aLy() {
		var aJp = new p6,
			g = (aJp.p9("Spawning"), [L(247), L(257), L(225)]);
		return aJp.pF(g[a9.data.spawningType]), aJp.pK(new rF([new q(L(255), function() {
			n.o(24)
		}).button])), aJp
	}
	this.show = function() {
		aKJ.show(), this.resize(), aKJ.tL.scrollTop = n.s.aEd[0]
	}, this.r1 = function() {
		n.s.aEd[0] = aKJ.tL.scrollTop, aKJ.r1()
	}, this.resize = function() {
		aKJ.resize(), aKK.resize()
	}, this.a0j = function(et) {
		2 === et && aKJ.tM[0].pm()
	}, aKJ = new tF("🔧 " + L(252), [new q("⬅️ " + L(32), aKM), new q(L(253), aLp)]), aLr(), a9.data.canvas || (2 === a9.data.mapType ? a9.data.canvas = bO.vG : 1 === a9.data.mapType ? a9.data.canvas = bO.aH8(bO.a3R(a9.data), 0).vG : (a9.data
		.mapType = 0, a9.data.passableWater = a9.data.passableMountains = 1, a9.data.canvas = bO.aH8(bO.a3R(a9.data), a9.data.mapSeed).vG)), aKK = new pM(aKJ.tL, (function(pO) {
		var aJp = new p6,
			a1T = (aJp.p9(L(254)), a9.data.canvas);
		a1T.style.width = "100%", aJp.pK({
			e: a1T
		}), aJp.pK(new rF([new q(L(255), function() {
			n.o(20)
		}).button])), pO.push(aJp)
	}(pO = []), function(pO) {
		var aJp = new p6;
		aJp.p9(L(228)), aJp.pK(new qJ({
			e0: -1,
			value: a9.data.playerCount
		}, 1, 0, function(e) {
			var playerCount = bH.p0(Math.floor(e.target.value), 1, 512);
			e.target.value = a9.data.playerCount = playerCount, 1 === a9.data.gameMode && (e = b6.pd.a1G(a9.data.teamPlayerCount, 0), a9.a32.a36(), b6.pd.a1G(a9.data.teamPlayerCount, 0) !== e) && aM7()
		})), pO.push(aJp)
	}(pO), function(pO) {
		var aJp = new p6;
		aJp.p9(L(256)), aJp.pH(new tA({
			tE: ["Battle Royale", "Teams"],
			value: a9.data.gameMode
		}, function(e0) {
			a9.data.gameMode !== e0 && (a9.data.gameMode = e0, aM7())
		})), pO.push(aJp)
	}(pO), pO.push(aLw()), pO.push(aLx()), pO.push(aLy()), function(pO) {
		var aJp = new p6,
			g = (aJp.p9(L(258)), [L(259), L(260), L(225)]);
		aJp.pF(g[a9.data.playerNamesType]), aJp.pK(new rF([new q(L(255), function() {
			n.o(23)
		}).button])), pO.push(aJp)
	}(pO), function(pO) {
		var aJp = new p6,
			g = (aJp.p9(L(221)), [L(223), L(224) + ": " + a9.data.aIncomeValue, L(225)]);
		aJp.pF(g[a9.data.aIncomeType]), aJp.pK(new rF([new q(L(255), function() {
			n.o(22)
		}).button])), pO.push(aJp)
	}(pO), function(pO) {
		var aJp = new p6,
			g = (aJp.p9(L(261)), [L(223), L(224) + ": " + a9.data.tIncomeValue, L(225)]);
		aJp.pF(g[a9.data.tIncomeType]), aJp.pK(new rF([new q(L(255), function() {
			n.o(26)
		}).button])), pO.push(aJp)
	}(pO), function(pO) {
		var aJp = new p6,
			g = (aJp.p9(L(262)), [L(223), L(224) + ": " + a9.data.iIncomeValue, L(225)]);
		aJp.pF(g[a9.data.iIncomeType]), aJp.pK(new rF([new q(L(255), function() {
			n.o(27)
		}).button])), pO.push(aJp)
	}(pO), function(pO) {
		var aJp = new p6,
			g = (aJp.p9(L(263)), [L(223), L(224) + ": " + a9.data.sResourcesValue, L(225)]);
		aJp.pF(g[a9.data.sResourcesType]), aJp.pK(new rF([new q(L(255), function() {
			n.o(28)
		}).button])), pO.push(aJp)
	}(pO), function(pO) {
		var aJp = new p6;
		aJp.p9(L(264)), aJp.pK(new rF([new q(L(265), function() {
			n.r(), a9.a32.a3U(), n.s.aEd[0] = 0, n.o(19)
		}).button])), aJp.pK(new rF([new q(L(266), function() {
			bj.aES()
		}).button])), aJp.pK(new rF([new q(L(267), function() {
			return bj.aEU(), !0
		}).button])), pO.push(aJp)
	}(pO), pO))
}

function aJS() {
	var aKJ, aKK, aKL, pO;

	function aKM() {
		aKO(), 2 !== a9.data.iIncomeType && (a9.data.iIncomeData = null), n.aJW()[19] = null, n.zy()
	}

	function aKO() {
		2 === a9.data.iIncomeType && b6.pd.a1M(aKL.tl(), a9.data.iIncomeData, 255)
	}
	this.show = function() {
		aKJ.show(), this.resize()
	}, this.r1 = function() {
		aKJ.r1()
	}, this.resize = function() {
		aKJ.resize(), aKK.resize()
	}, this.a0j = function(et) {
		2 === et && aKJ.tM[0].pm()
	}, aKJ = new tF(L(262), [new q("⬅️ " + L(32), aKM)]), aKK = new pM(aKJ.tL, (function(pO) {
		var aJp = new p6;
		aJp.p9(L(222)), aJp.pH(new tA({
			tE: [L(223), L(224), L(225)],
			value: a9.data.iIncomeType
		}, function(e0) {
			aKO(), 2 !== e0 || a9.data.iIncomeData || (a9.data.iIncomeData = new Uint8Array(a9.eV), a9.data.iIncomeData.fill(32)), a9.data.iIncomeType = e0, n.o(27)
		})), pO.push(aJp)
	}(pO = []), function(pO) {
		var aJp;
		1 === a9.data.iIncomeType && ((aJp = new p6).p9("Value"), aJp.pK(new qJ({
			e0: -1,
			value: a9.data.iIncomeValue
		}, 1, 0, function(e) {
			var value = bH.p0(Math.floor(e.target.value), 0, 255);
			e.target.value = a9.data.iIncomeValue = value
		})), pO.push(aJp))
	}(pO), function(pO) {
		var aJp;
		2 === a9.data.iIncomeType && ((aJp = new p6).p9("Data"), (aKL = new td(0, 1, 0, 1)).tk(b6.zG.a2l(a9.data.iIncomeData, 4)), aJp.pK(aKL), pO.push(aJp))
	}(pO), pO))
}

function aJA() {
	var aM9, aMA, aLH, qI, aMB;
	this.aDJ = new s1, aLH = new q6([.45, .27], [.5, .5], 2 / 3), aMA = [new q("⚔️<br>" + L(268), function() {
			aMC(0)
		}, b7.n1), new q("🗡️<br>" + L(252), function() {
			aMC(1)
		}, b7.nJ), new q("🔑<br>" + L(269), function() {
			aMC(2)
		}, b7.nZ), new q("☰<br>" + L(270), function() {
			aMC(3)
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
	for (var a7 = 0; a7 < aMA.length; a7++) aMA[a7].button.style.position = "absolute";

	function aMC(e0) {
		u.v.setState(10), aX.sK() || aX.aD9(), 0 === e0 ? n.s.a3L() : 1 === e0 ? (b5.aEn.v1(bf.dp.data[156].value, 1) || a9.a32.a3U(), n.o(19)) : 2 === e0 ? 0 !== u.id || bf.dp.data[140].value ? n.o(8, n.rs, new rt(16)) : n.s.aMD(n.rs, 16) : 3 ===
			e0 && n.o(1)
	}
	qI.e.style.position = "absolute", qI.e.style.textAlign = "center", qI.e.placeholder = L(271), this.show = function() {
		aW.setState(0), u.v.setState(12), this.aDJ.show(), aMA[4].pp(b6.color.a1a(bf.dp.data[121].value)), this.resize(), document.body.appendChild(qI.e);
		for (var a7 = 0; a7 < aMA.length; a7++) document.body.appendChild(aMA[a7].button);
		1 !== u.id || u.f1 < 5 || (aMB && bb.lo > aMB + 144e5 ? u.u4.setState(14) : aMB = bb.lo)
	}, this.r1 = function() {
		this.aDJ.r1(), document.body.removeChild(qI.e);
		for (var a7 = 0; a7 < aMA.length; a7++) document.body.removeChild(aMA[a7].button)
	}, this.resize = function() {
		this.aDJ.resize(), this.aDJ.resize(), aLH.resize();
		var gap = .5 * bY.gap,
			sn = 10 / 99 * .84 * aLH.a1,
			aMG = .16 * aLH.j7,
			a7F = .19 * aLH.a1,
			ef = aLH.ef + a7F,
			sn = aLH.eh + sn + 3 * gap,
			a1 = .5 * (aLH.a1 - gap) - a7F,
			a7F = aLH.a1 - 2 * a7F - aMG - gap,
			a7F = (b6.pT.sJ(qI.e, ef, sn, a7F, aMG), b6.pT.sJ(aMA[4].button, ef + a7F + gap, sn, aMG, aMG), .5 * (aLH.eh + aLH.j7 - (sn += aMG + gap) - gap));
		b6.pT.sJ(aMA[0].button, ef, sn, a1, a7F), b6.pT.sJ(aMA[1].button, ef + a1 + gap, sn, a1, a7F), b6.pT.sJ(aMA[2].button, ef, sn + a7F + gap, a1, a7F), b6.pT.sJ(aMA[3].button, ef + a1 + gap, sn + a7F + gap, a1, a7F);
		b6.pT.sJ(aMA[5].button, ef, sn + a7F * 2 + gap * 2, a1 * 2 + gap, a7F / 3);
		b6.pT.sJ(aMA[6].button, ef, sn + a7F * 2.33 + gap * 3, a1 * 2 + gap, a7F / 3);
		for (var a7 = 0; a7 < aMA.length; a7++) aMA[a7].button.style.font = b6.pT.rV(0, b6.pT.a1r(.065 * aLH.j7)), b6.pT.pf(aMA[a7].button, 5);
		qI.e.style.font = b6.pT.rV(0, b6.pT.a1r(.08 * aLH.j7)), b6.pT.pf(qI.e, 5)
	}, this.tU = function() {
		if (aW.aCl(), aP.tU(), aK.tU(), bU.tU(), aX.sK()) {
			if (__fx.settings.displayWinCounter) {
				const size = Math.floor(aLH.a1 * 0.03);
				tV.font = b6.pT.rV(1, size);
				tV.fillStyle = "#ffffff";
				const text = "Win count: " + __fx.wins.count;
				const textLength = tV.measureText(text).width;
				tV.textAlign = "left";
				tV.textBaseline = "middle";
				tV.fillText(text, tV.canvas.width - textLength - size / 2, size);
			};
			tV.imageSmoothingEnabled = !1;
			var et = aX.aCo("territorial.io"),
				mA = .84 * aLH.a1 / et.width;
			tV.setTransform(mA, 0, 0, mA, aLH.ef + .08 * aLH.a1, aLH.eh), aM9 = aM9 || b6.a0x.a2O(et, b6.a0x.a2U, [0, 0, 0]);
			for (var ef = -1; ef <= 1; ef += 2)
				for (var eh = -1; eh <= 1; eh += 2) tV.drawImage(aM9, ef, eh);
			tV.drawImage(et, 0, 0), tV.imageSmoothingEnabled = !0;
			var hQ = aX.aCo("logo"),
				aMI = .6666 * mA * et.height / hQ.height,
				mB = .5 * at.a1,
				mC = aLH.eh + .5 * mA * et.height - .5 * aMI * hQ.height;
			tV.setTransform(aMI, 0, 0, aMI, mB - .6 * mA * et.width, mC), tV.drawImage(hQ, 0, 0), tV.setTransform(aMI, 0, 0, aMI, mB + .6 * mA * et.width - aMI * hQ.width, mC), tV.drawImage(hQ, 0, 0), tV.setTransform(1, 0, 0, 1, 0, 0), tV
				.imageSmoothingEnabled = !0
		}
	}
}

function aJH() {
	var aJX, aMJ, aMK, tG;

	function aML(a7) {
		n.o(8, n.rs, new rt(21, {
			sC: a7,
			sD: 0,
			sE: 10
		}))
	}
	this.show = function() {
		aJX.show(), this.resize()
	}, this.r1 = function() {
		aJX.r1()
	}, this.resize = function() {
		aJX.resize(), aMJ.resize()
	}, this.a0j = function(et) {
		2 === et && aJX.tM[0].pm()
	}, aMK = [new q(L(272), function() {
		aML(1)
	}, 0, 0, 1), new q(L(273), function() {
		aML(2)
	}, 0, 0, 1), new q(L(274), function() {
		aML(3)
	}, 0, 0, 1), new q(L(275), function() {
		aML(0)
	}, 0, 0, 1), new q(L(276), function() {
		aML(9)
	}, 0, 0, 1), new q(L(277), function() {
		aML(10)
	}, 0, 0, 1)], tG = [new q("⬅️ " + L(32), function() {
		n.zy()
	})], aJX = new tF(L(278), tG), aMJ = new q3(aMK, aJX.tL)
}

function aAX(title, pG, aMM) {
	var aJX, aLV;
	this.show = function() {
		aJX.show(), this.resize()
	}, this.r1 = function() {
		aJX.r1()
	}, this.resize = function() {
		aJX.resize(), aLV.resize()
	}, this.a0j = function(et) {
		2 === et && aJX.tM[0].pm()
	}, aMM = aMM || [new q("⬅️ " + L(32), function() {
		n.zy()
	}, b7.nD)], aJX = new tF(title, aMM), aLV = new rE(aJX.tL, pG), b6.pT.textAlign(aJX.tL.style, 1)
}

function aLn(data) {
	var aJX, aMN, et, rk;

	function aMO(hU) {
		var eY = data.data.length;
		if (eY) {
			for (var sD, max = min = parseInt(data.data[0][0]), a7 = 1; a7 < eY; a7++) var aMV = parseInt(data.data[a7][0]),
				min = Math.min(aMV, min),
				max = Math.max(aMV, max);
			sD = hU < 0 ? min + hU : max + 1, n.o(8, n.aDI().aJ5, new rt(21, {
				sC: data.sC,
				sD: sD,
				sE: sD + Math.abs(hU)
			}))
		}
	}
	this.show = function() {
			aJX.show(), this.resize()
		}, this.r1 = function() {
			aJX.r1()
		}, this.resize = function() {
			aJX.resize(), aMN.resize()
		}, this.a0j = function(et) {
			2 === et && aJX.tM[0].pm()
		}, et = data.data.length ? 0 : 1, et = [new q("⬅️ " + L(32), function() {
			n.zy()
		}), new q(L(279), function() {
			aMO(-10)
		}, et, 0, 1), new q(L(280), function() {
			aMO(10)
		}, et, 0, 1), new q(L(230), function() {
			n.o(11, 10, new aMP({
				sC: data.sC
			}))
		})], rk = [L(281), L(282), L(283), L(284), L(285), L(286), L(287), L(288), L(289), L(290), L(277)], aJX = new tF(rk[data.sC], et),
		function() {
			var a7, eb = {
					re: []
				},
				re = eb.re,
				aMR = data.data,
				eY = aMR.length,
				mA = [.1, .001, .001, 1, 100, 1, .01, 1, 100, .01, .01][data.sC],
				a2Y = [1, 3, 3, 0, 0, 0, 2, 0, 0, 2, 2][data.sC],
				rk = [
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
			if (eb.rk = rk[data.sC], eb.ro = [
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
				][data.sC], 0 === data.sC || 2 === data.sC || 3 === data.sC || 9 === data.sC || 10 === data.sC)
				for (a7 = 0; a7 < eY; a7++) re.push([{
					f0: aMR[a7][0] + 1 + ".",
					dk: 0
				}, {
					f0: aMR[a7][1],
					dk: 1,
					qr: aMR[a7][4],
					rr: aMR[a7][3]
				}, {
					f0: (mA * aMR[a7][2]).toFixed(a2Y),
					dk: 0
				}]);
			else if (1 === data.sC)
				for (a7 = 0; a7 < eY; a7++) re.push([{
					f0: aMR[a7][0] + 1 + ".",
					dk: 0
				}, {
					f0: aMR[a7][1],
					dk: 0
				}, {
					f0: (mA * aMR[a7][2]).toFixed(a2Y),
					dk: 0
				}, {
					f0: aMR[a7][3],
					dk: 1,
					qr: aMR[a7][5],
					rr: aMR[a7][4]
				}]);
			else if (4 === data.sC || 5 === data.sC || 6 === data.sC || 7 === data.sC || 8 === data.sC)
				for (a7 = 0; a7 < eY; a7++) {
					var aMU = aMR[a7][5];
					4 === data.sC || 8 === data.sC ? "100%" === (aMU = (aMU % 64 * 100 / (aMU >> 6)).toFixed(0) + "%") && (4 === data.sC ? aMU += " (" + L(309) + ")" : aMU += " (" + L(310) + ")") : 5 === data.sC ? 32768 <= aMU && (aMU = -(aMU -
						32768)) : aMU = (mA * aMU).toFixed(a2Y), re.push([{
						f0: "" + aMR[a7][0],
						dk: 0
					}, {
						f0: "" + aMR[a7][6],
						dk: 0
					}, {
						f0: aMR[a7][7],
						dk: 1,
						qr: aMR[a7][1],
						rr: aMR[a7][2]
					}, {
						f0: aMR[a7][8],
						dk: 1,
						qr: aMR[a7][3],
						rr: aMR[a7][4]
					}, {
						f0: "" + aMU,
						dk: 0
					}])
				}
			aMN = new rd(aJX.tL, eb)
		}()
}

function aMP(a2Q) {
	var aJX, aJY, pO;
	this.show = function() {
		aJX.show(), this.resize()
	}, this.r1 = function() {
		aJX.r1()
	}, this.resize = function() {
		aJX.resize(), aJY.resize()
	}, this.a0j = function(et) {
		2 === et && aJX.tM[0].pm()
	}, aJX = new tF(L(311), [new q("⬅️ " + L(32), function() {
		n.aJV(10)
	})]), aJY = new pM(aJX.tL, ((pO = []).push(function() {
		var aJx, aJp = new p6,
			aLF = new qJ(bf.dp.data[132], 1, function() {
				aJx.button.click()
			}),
			aLG = new qJ(bf.dp.data[131], 1, function() {
				aLF.e.focus()
			});
		aJp.p9(L(235)), aJp.pK(aLG), aLG.e.style.marginBottom = "0.8em", aJp.p9(L(236)), aJp.pK(aLF);
		return aJx = new q(L(234), function() {
			sD = Math.floor(aLG.e.value), sE = Math.floor(aLF.e.value);
			var sE, sD = {
				a1E: Math.min(sD, sE),
				aIg: Math.max(sD, sE)
			};
			n.o(8, n.aBY(10).aJ5, new rt(21, {
				sC: a2Q.sC,
				sD: sD.a1E,
				sE: sD.aIg
			}))
		}, 0, 0, 1), aJp.pK(new rF([aJx.button])), aJp
	}()), pO.push(function() {
		var aJx, aJp = new p6,
			aLF = new qJ(bf.dp.data[134], 1, function() {
				aJx.button.click()
			}),
			aLG = new qJ(bf.dp.data[133], 0, function() {
				aLF.e.focus()
			});
		return aJp.p9(1 === a2Q.sC ? L(312) : L(313)), aJp.pK(aLG), aLG.e.style.marginBottom = "0.8em", aJp.p9(L(314)), aJp.pK(aLF), aJx = new q(L(234), function() {
			var aLf = aLG.e.value.slice(0, 20),
				aLg = Math.abs(Math.floor(aLF.e.value));
			n.o(8, n.aBY(10).aJ5, new rt(22, {
				sC: a2Q.sC,
				aLf: aLf,
				aLg: aLg
			}))
		}, 0, 0, 1), aJp.pK(new rF([aJx.button])), aJp
	}()), pO.push(function() {
		var aJx, aJp = new p6,
			aLF = new qJ(bf.dp.data[152], 1, function() {
				aJx.button.click()
			}),
			aLG = new qJ(bf.dp.data[151], 0, function() {
				aLF.e.focus()
			});
		return aJp.p9(L(315)), aJp.pK(aLG), aLG.e.style.marginBottom = "0.8em", aJp.p9(L(314)), aJp.pK(aLF), aJx = new q(L(234), function() {
			var aLf = aLG.e.value.slice(0, 5),
				aLg = Math.abs(Math.floor(aLF.e.value));
			n.o(8, n.aBY(10).aJ5, new rt(28, {
				sC: a2Q.sC,
				aLf: aLf,
				aLg: aLg
			}))
		}, 0, 0, 1), aJp.pK(new rF([aJx.button])), aJp
	}()), pO))
}

function aJU() {
	var aMZ, sN, aMc, sM, sP, aMa = [new Array(4), [], new Array(2), new Array(2)],
		aMb = new Array(4),
		aMd = [L(56), L(276), L(316), L(317)];

	function aMh() {
		var a5M = aMZ.sa.qI.e.value.slice(0, 127);
		return a5M.length < 1 || (aMZ.sa.qI.e.value = "", aw.aC1.aC2(3, a5M)), 1
	}

	function aMg(aMj) {
		bk.s.qY[3] = 1 - bk.s.qY[3], aMi(3, 1, bk.s.qY[3]), aMj && aw.aC1.aC2(4), bk.s.qY[3] && bf.rC.rD(158, bk.s.qY[0])
	}

	function aMe(er, es) {
		bk.s.qY[er] !== es && (0 === er && bk.s.qY[3] && aMg(0), aMi(er, bk.s.qY[er], 0), aMi(er, es, 1), bk.s.qY[er] = es, 0 === er ? (aw.aC1.aC2(2, es), bk.s.qY[2] ? (aMZ.sb.lI(), aMZ.sa.qV(1)) : aMZ.sa.qV(0), n.aDI().aBb(), n.aDI().aBa()) : 2 ===
			er && (0 === es ? (aw.aC1.aC2(0), aMZ.sa.lI(), aMZ.sj()) : (aw.aC1.aC2(1), aMZ.sb.lI(), aMZ.sk())))
	}

	function aMi(er, es, color) {
		aMZ.sd[er].q4[es].pp(color ? b7.mx : b7.ng)
	}

	function aMl(aAz) {
		return aAz < 7 ? aAz + 2 + " " + L(324) : 7 === aAz || 10 === aAz ? L(276) + " (Full-Sending: " + L(7 === aAz ? 325 : 326) + ")" : 8 === aAz ? "1v1" : L(327)
	}

	function aMm(f0) {
		var a5P = bH.dl(f0, 60),
			f0 = f0 % 60;
		return (a5P < 10 ? "0" : "") + a5P + ":" + (f0 < 10 ? "0" : "") + f0
	}
	this.aBZ = function() {
		aMZ.sb.lI()
	}, this.aBb = function() {
		var aMk = bk.s.qY[0],
			aMk = bk.s.qa[aMk];
		bO.a3(aMk.eE, aMk.mapSeed), sN.q4[0].button.textContent = L(254) + ": " + bO.v6.v7[aMk.eE].name, sN.q4[1].button.textContent = L(256, 0, "Mode") + ": " + aMl(aMk.aAz), sN.q4[2].button.textContent = L(321) + ": " + bO.v6.v7[aMk.aC3].name,
			sN.q4[3].button.textContent = L(322, 0, "Next Mode") + ": " + aMl(aMk.aC4), sN.q4[4].button.textContent = L(323) + ": " + aMm(aMk.aBd), sN.resize()
	}, this.aBa = function() {
		var aMk = bk.s.qY[0],
			qZ = bk.s.qa[aMk];
		aMZ.sh(qZ.si);
		for (var a7 = 0; a7 < bk.sv.sw.length; a7++) aMa[0][a7].qU.textContent = "" + bk.sv.sw[a7].length;
		var sv = bk.sv.sw[aMk],
			aMn = sv.length,
			aMo = bk.sv.sx[aMk];
		aMa[2][1].qU.textContent = "" + aMn, aMa[3][1].qU.textContent = "" + aMo, sN.q4[4].button.textContent = L(323) + ": " + aMm(qZ.aBd);
		for (a7 = 0; a7 < 4; a7++) {
			var aMp = bk.s.qa[a7];
			aMb[a7] ? 0 === aMp.si && (aMb[a7].qU.textContent = bO.v6.v7[aMp.eE].name) : aMb[a7] = new qT(bO.v6.v7[aMp.eE].name, sM.q4[a7].button, 1, 1), b6.zG.startsWith(aMd[a7], "🏆 ") ? aMp.aB5 || (aMd[a7] = aMd[a7].substring(3), sM.q4[a7]
				.button.textContent = aMd[a7], sM.q4[a7].button.appendChild(aMa[0][a7].qU), sM.q4[a7].button.appendChild(aMb[a7].qU)) : aMp.aB5 && (aMd[a7] = "🏆 " + aMd[a7], sM.q4[a7].button.textContent = aMd[a7], sM.q4[a7].button
				.appendChild(aMa[0][a7].qU), sM.q4[a7].button.appendChild(aMb[a7].qU))
		}
		var qZ = "",
			aMr = "";
		0 === aMk && (qZ = bk.qg.aBK(sv, 0, aMn), aMr = bk.qg.aBK(sv, 0, aMo)), aMc[0].qU.textContent = qZ, aMc[1].qU.textContent = aMr, sN.q4[5].button.textContent = L(228) + " (MP): " + bk.s.aBR[0], sN.q4[6].button.textContent = L(228) +
			" (SP): " + bk.s.aBR[1]
	}, this.aBf = function() {
		aMZ.sa.lI()
	}, this.show = function() {
		aMZ.show(), this.resize()
	}, this.r1 = function() {
		aMZ.r1(), bk.t4.r1(), bk.qy.r1()
	}, this.resize = function() {
		aMZ.resize(1 - bk.s.qY[2])
	}, this.a0j = function(et) {
		2 === et ? bk.s.qY[3] ? aMg(1) : aMZ.sd[3].q4[0].pm() : et < 2 && aMg(1)
	}, sM = new rI([new q(aMd[0], function() {
		return aMe(0, 0), 2
	}), new q(aMd[1], function() {
		return aMe(0, 1), 2
	}), new q(aMd[2], function() {
		return aMe(0, 2), 2
	}), new q(aMd[3], function() {
		return aMe(0, 3), 2
	})], b7.ng), sN = new rI([new q("", 0, 2), new q("", 0, 2), new q("", 0, 2), new q("", 0, 2), new q("", 0, 2), new q("", 0, 2), new q("", 0, 2)], b7.nh, 1);
	var aMf = new rI([new q(L(318), function() {
		return aMe(2, 0), 2
	}), new q(L(110), function() {
		return aMe(2, 1), 2
	})], b7.ng);
	sP = new rI([new q(L(319), (__fx.customLobby.setLeaveFunction(() => {
			n.r(), bk.a01(), aw.s.a00(3240), __fx.customLobby.setActive(false), n.o(5, 5)
		}),
		function() {
			n.r(), bk.a01(), aw.s.a00(3240), __fx.customLobby.setActive(false), n.o(5, 5)
		})), new q(L(320), function() {
		return aMg(1), 2
	})], b7.ng), aMZ = new sL(sM, sN, aMf, sP, aMh, bk.t4.aBl);
	for (var a7 = 0; a7 < 4; a7++) aMa[0][a7] = new qT("0", sM.q4[a7].button);
	aMa[2][1] = new qT("0", aMf.q4[1].button), aMa[3][1] = new qT("0", sP.q4[1].button), aMc = [new qT("", aMf.q4[1].button, 1, 1), new qT("", sP.q4[1].button, 1, 1)], aMi(0, bk.s.qY[0], 1), aMi(2, bk.s.qY[2], 1)
}

function aJB() {
	var aJX, aJY, pO;
	this.show = function() {
		aJX.show(), this.resize()
	}, this.r1 = function() {
		aJX.r1()
	}, this.resize = function() {
		aJX.resize(), aJY.resize()
	}, this.a0j = function(et) {
		2 === et && aJX.tM[0].pm()
	}, aJX = new tF(L(328), [new q("⬅️ " + L(32), function() {
		n.o(7, n.aBY(7).aJ5)
	}), new q(L(185), function() {
		bf.rC.rD(105, bC.rv.uq(aJY.pQ[0].p7[0].e.value, 5)), bf.rC.rD(106, bC.rv.uq(aJY.pQ[1].p7[0].e.value, 8)), n.o(8, n.aBY(7).aJ5, new rt(18))
	})]), aJY = new pM(aJX.tL, ((pO = []).push(function() {
		var aJp = new p6;
		return aJp.p9(L(166)), aJp.pK(new qJ({
			value: "",
			e0: -1
		})), aJp
	}()), pO.push(function() {
		var aJp = new p6,
			aK0 = (aJp.p9(L(168)), new qJ({
				value: "",
				e0: -1
			}));
		return aK0.e.type = "password", aJp.pK(aK0), aJp.pK(new rF([new q(L(169), function(e) {
			return e.textContent === L(169) ? (e.textContent = L(170), aK0.e.type = "text") : (e.textContent = L(169), aK0.e.type = "password"), !0
		}).button])), aJp
	}()), pO))
}

function aJI() {
	var aJX, aMJ, aMK, tG;

	function aML(a7) {
		n.o(8, n.rs, new rt(21, {
			sC: a7,
			sD: 0,
			sE: 10
		}))
	}
	this.show = function() {
		aJX.show(), this.resize()
	}, this.r1 = function() {
		aJX.r1()
	}, this.resize = function() {
		aJX.resize(), aMJ.resize()
	}, this.a0j = function(et) {
		2 === et && aJX.tM[0].pm()
	}, aMK = [new q(L(286), function() {
		aML(5)
	}, 0, 0, 1), new q(L(287), function() {
		aML(6)
	}, 0, 0, 1), new q(L(288), function() {
		aML(7)
	}, 0, 0, 1)], tG = [new q("⬅️ " + L(32), function() {
		n.zy()
	})], aJX = new tF(L(329), tG), aMJ = new q3(aMK, aJX.tL)
}

function aJ1() {
	this.dp = {}, this.sF = new Array(6), this.aJG = null, this.aJD = null, this.rb = 0, this.aEd = [0], this.t = function() {
			n.o(5, 5)
		}, this.a3L = function() {
			n.r(), aV.aCR(0), aV.dU()
		},
		__fx.customLobby.setJoinFunction(() => {
			n.r();
			aV.aCR(0);
			aV.dU();
		}), this.aAE = function() {
			n.o(0 === aW.zo() ? 5 : 0)
		}, this.aLE = function() {
			if (1 === bf.dp.data[130].value) n.o(8, n.aDI().aJ5, new rt(24, {
				aKm: bf.dp.data[125].value,
				sD: bf.dp.data[128].value,
				sE: bf.dp.data[129].value
			}));
			else {
				for (var g = (g = bf.dp.data[126].value.split(",")).slice(0, 10), a7 = 0; a7 < g.length; a7++) g[a7] = g[a7].trim().slice(0, 7).toUpperCase();
				1 === g.length && 0 === g[0].length && (g = []), n.o(8, n.aDI().aJ5, new rt(23, {
					aKm: bf.dp.data[125].value,
					zI: g
				}))
			}
		}, this.aMD = function(aJ5, target) {
			n.o(4, aJ5, new p("Data Usage Information",
				"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: <a href='" + bG.aMt +
				"' target='_blank'>" + bG.aMt + "</a>", !1, [new q("⬅️ " + L(32), function() {
					n.o(aJ5)
				}), new q("✅ Accept", function() {
					bf.rC.rD(140, 1), 0 === target ? n.o(2, aJ5) : n.o(8, aJ5, new rt(target))
				})]))
		}, this.aMu = function() {
			for (var a7 = 0; a7 < 6; a7++) this.sF[a7] = bC.uh.ul(bD.oT(5));
			this.sF[1] = "[" + this.sF[1] + "]", 5 === n.rs && (n.aDI().aDJ.rD(this.sF), n.aDI().resize())
		}
}

function aJL() {
	var aKJ, aKK, aMv, pO;

	function aKM() {
		b2.a01(), n.aJW()[19] = null, n.zy()
	}

	function aN2() {
		aN5(), aN3()
	}

	function aN5() {
		aMv.p8.lastChild && aMv.p8.removeChild(aMv.p8.lastChild)
	}

	function aN3() {
		var aN6 = bO.a3R(a9.data);
		a9.data.canvas = bO.aH8(aN6, a9.data.mapSeed).vG, aN4()
	}

	function aN4() {
		var a1T = a9.data.canvas;
		a1T.style.width = "100%", aMv.p8.appendChild(a1T)
	}
	this.aEN = function(a1T) {
		a9.data.canvas && aN5(), a9.data.canvas = a1T, aN4()
	}, this.show = function() {
		aKJ.show(), this.resize()
	}, this.r1 = function() {
		aKJ.r1()
	}, this.resize = function() {
		aKJ.resize(), aKK.resize()
	}, this.a0j = function(et) {
		2 === et && aKJ.tM[0].pm()
	}, aKJ = new tF(L(254), [new q("⬅️ " + L(32), aKM)]), 2 === a9.data.mapType && b2.dU(), aKK = new pM(aKJ.tL, (function(pO) {
		var aJp = new p6;
		aJp.p9(L(222)), aJp.pH(new tA({
			tE: [L(330), L(331), L(332)],
			value: a9.data.mapType
		}, function(e0) {
			2 === (a9.data.mapType = e0) ? (b2.dU(), a9.data.canvas = null) : (a9.data.passableWater = a9.data.passableMountains = 1, b2.a01()), n.o(20)
		})), 2 <= a9.data.mapType && (aJp.pK(new rP), aJp.pK(new r9({
			value: a9.data.passableWater
		}, L(333), function(value) {
			a9.data.passableWater = value
		})), aJp.pK(new r9({
			value: a9.data.passableMountains
		}, L(334), function(value) {
			a9.data.passableMountains = value
		})));
		pO.push(aJp)
	}(pO = []), function(pO) {
		if (0 === a9.data.mapType) {
			for (var aJp = new p6, tE = (aJp.p9(L(254)), []), a7 = 0; a7 < bO.v6.aI2.length; a7++) tE.push(bO.v6.v7[bO.v6.aI2[a7]].name);
			aJp.pH(new tA({
				tE: tE,
				value: a9.data.mapProceduralIndex
			}, function(e0) {
				a9.data.mapProceduralIndex = e0, aN2()
			})), pO.push(aJp)
		}
	}(pO), function(pO) {
		if (1 === a9.data.mapType) {
			for (var aJp = new p6, tE = (aJp.p9(L(254)), []), a7 = 0; a7 < bO.v6.aI3.length; a7++) tE.push(bO.v6.v7[bO.v6.aI3[a7]].name);
			aJp.pH(new tA({
				tE: tE,
				value: a9.data.mapRealisticIndex
			}, function(e0) {
				a9.data.mapRealisticIndex = e0, aN2()
			})), pO.push(aJp)
		}
	}(pO), function(pO) {
		var aJp;
		2 === a9.data.mapType && ((aJp = new p6).p9(L(254)), aJp.pK(new rF([new q(L(335), function() {
			return b2.aEG(), !0
		}).button])), pO.push(aJp))
	}(pO), function(pO) {
		(aMv = new p6).p9(L(336)), 2 !== a9.data.mapType ? aN3() : a9.data.canvas && aN4();
		pO.push(aMv)
	}(pO), function(pO) {
		var aJp, qI, aJx;
		0 === a9.data.mapType && ((aJp = new p6).p9("Seed"), qI = new qJ({
			e0: -1,
			value: a9.data.mapSeed
		}, 1, 0, function(e) {
			e = Math.abs(Math.floor(e.target.value)) % 16384;
			a9.data.mapSeed !== e && (a9.data.mapSeed = e, aN2())
		}), aJx = new q(L(247), function(e) {
			var aH3 = Math.floor(16384 * Math.random());
			if (a9.data.mapSeed !== aH3) return qI.e.value = a9.data.mapSeed = aH3, aN2(), !0
		}), aJp.pK(qI), aJp.pK(new rF([aJx.button])), pO.push(aJp))
	}(pO), function(pO) {
		var aJp, qI;
		2 === a9.data.mapType && ((aJp = new p6).p9(L(337)), qI = new qJ({
			e0: -1,
			value: a9.data.mapName
		}, 0, 0, function(e) {
			a9.data.mapName = e.target.value = e.target.value.slice(0, 20)
		}), aJp.pK(qI), pO.push(aJp))
	}(pO), pO))
}

function p(title, pG, aN7, aMM) {
	var aJX, aLV;
	this.show = function() {
		aJX.show(), this.resize()
	}, this.r1 = function() {
		aJX.r1()
	}, this.resize = function() {
		aJX.resize(), aLV.resize()
	}, this.a0j = function(et) {
		2 === et && aJX.tM[0].pm()
	}, aMM = aMM || [new q("⬅️ " + L(32), function() {
		n.zy()
	})], aJX = new tF(title, aMM), aLV = new rE(aJX.tL, pG), aN7 && b6.pT.textAlign(aJX.tL.style, 1)
}

function aJO() {
	var aKJ, aKK, aKL, pO;

	function aKM() {
		aKO(), 2 === a9.data.playerNamesType && 1 === b6.pd.a1A(a9.data.playerNamesData).length && (a9.data.playerNamesType = 0), 2 !== a9.data.playerNamesType && (a9.data.playerNamesData = null), n.aJW()[19] = null, n.zy()
	}

	function aKO() {
		2 === a9.data.playerNamesType && b6.pd.a1O(aKL.tl(), a9.data.playerNamesData, 20)
	}
	this.show = function() {
		aKJ.show(), this.resize()
	}, this.r1 = function() {
		aKJ.r1()
	}, this.resize = function() {
		aKJ.resize(), aKK.resize()
	}, this.a0j = function(et) {
		2 === et && aKJ.tM[0].pm()
	}, aKJ = new tF(L(258), [new q("⬅️ " + L(32), aKM)]), aKK = new pM(aKJ.tL, (function(pO) {
		var aJp = new p6;
		aJp.p9(L(222)), aJp.pH(new tA({
			tE: [L(259), L(260), L(225)],
			value: a9.data.playerNamesType
		}, function(e0) {
			aKO(), a9.data.playerNamesType = e0, n.o(23)
		})), aJp.pK(new rP), aJp.pK(new r9({
			value: a9.data.selectableName
		}, L(338), function(value) {
			a9.data.selectableName = value
		})), pO.push(aJp)
	}(pO = []), function(pO) {
		var aJp;
		2 === a9.data.playerNamesType && ((aJp = new p6).p9("Data"), aKL = new td(0, 1, 0, 1), a9.data.playerNamesData && a9.data.playerNamesData.length === a9.eV || (a9.data.playerNamesData = new Array(a9.eV), a9.data.playerNamesData
			.fill("")), aKL.tk(b6.zG.a2l(a9.data.playerNamesData, 1, '"')), aJp.pK(aKL), pO.push(aJp))
	}(pO), pO))
}

function aJ9() {
	var aKJ, ti;

	function aN8() {
		n.r();
		var pA = b5.aNC(ti.tl());
		(a9.yf && 0 < pA.length && pA === b5.oi.a3H || b5.aEn.v1(pA)) && b5.aND()
	}
	this.show = function(aN9) {
		this.aNA(aN9), aKJ.show(), this.resize()
	}, this.aNA = function(aN9) {
		0 === a9.yf ? aN9 ? ti.tk(aN9) : b5.oi.a3H.length && ti.tk(b5.oi.a3H) : (a9.gi || (b5.oi.a3H = b5.a3I.y8()), ti.tk(b5.aNB(b5.oi.a3H)))
	}, this.r1 = function() {
		aKJ.r1()
	}, this.resize = function() {
		aKJ.resize(), ti.resize()
	}, this.a0j = function(et) {
		2 === et ? aKJ.tM[0].pm() : aN8()
	}, aKJ = new tF(L(339), [new q("⬅️ " + L(32), function() {
		n.aJV(1)
	}), new q(L(340), function() {
		ti.tm()
	}), new q(L(341), function() {
		ti.tn()
	}), new q(L(342), function() {
		ti.clear()
	}), new q(L(343), function() {
		aN8()
	})]), ti = new td(L(344)), aKJ.tL.appendChild(ti.e)
}

function aJ8() {
	var aJX, aJY, pO, aAA, aJp;

	function aNE() {
		var lo;
		aAA !== bf.dp.data[12].value ? (b3.dU(), b3.aA9(), lo = bb.lo, n.o(4, 1, new p(L(347), L(348), !1, [new q("⬅️ " + L(32), function() {
			n.o(1)
		}), new q("🔄 Reload", function() {
			bb.lo < lo + 1500 || u.v.w()
		}, b7.mv)]))) : n.o(1)
	}
	this.show = function() {
			aAA = bf.dp.data[12].value, aJX.show(), this.resize()
		}, this.r1 = function() {
			aJX.r1()
		}, this.resize = function() {
			aJX.resize(), aJY.resize()
		}, this.a0j = function(et) {
			2 === et && aJX.tM[0].pm()
		}, aJX = new tF(L(345), [new q("⬅️ " + L(32), aNE), new q(L(346), function() {
			n.r(), bf.rC.uO(), n.o(2)
		})]), pO = [], (aJp = new p6).p9(L(349)), aJp.pB(L(350)), pO.push(aJp),
		function(pO) {
			var aJp = new p6,
				g = (aJp.p9(L(368)), b3.data.aAF());
			aJp.pH(new tA({
				tE: g,
				value: b3.data.aAI(g)
			}, function(e0) {
				return bf.rC.rD(12, g[e0].split(":")[0]), !0
			})), pO.push(aJp)
		}(pO),
		function(pO) {
			var aJp = new p6,
				aNH = (aJp.p9(L(366)), []);
			aJp.pK(new rF([new q(L(367), function(e) {
				bT.aNI();
				for (var a7 = 0; a7 < aNH.length; a7++) aNH[a7].e.value = bT.aNJ[a7];
				return b6.pT.a1x(e), !0
			}).button]));
			for (var a7 = 0; a7 < bT.aNK.length; a7++) {
				aJp.pB(bT.aNK[a7]);
				for (var er = 0; er < 2; er++) {
					var e0 = 2 * a7 + er,
						qI = new qJ({
							value: bT.aNJ[e0],
							e0: -1
						});
					qI.e.aNL = e0, aNH.push(qI), qI.e.addEventListener("keydown", function(e) {
						e.preventDefault();
						var code = e.code;
						e.target.value = code, bT.aNM(e.target.aNL, code)
					}), er && (qI.e.style.marginLeft = "4%"), qI.e.style.width = "48%", aJp.pK(qI)
				}
			}
			pO.push(aJp)
		}(pO), (aJp = new p6).p9(L(351)), bf.dp.data[1].tE = [L(352), L(353), L(354), L(355)], aJp.pH(new tA(bf.dp.data[1])), pO.push(aJp), (aJp = new p6).p9(L(356)), bf.dp.data[9].tE = [L(353), L(357), L(358)], aJp.pH(new tA(bf.dp.data[9])), pO
		.push(aJp), (aJp = new p6).p9(L(359)), bf.dp.data[11].tE = [L(360), L(9), L(361)], aJp.pH(new tA(bf.dp.data[11])), pO.push(aJp), (aJp = new p6).p9(L(362)), aJp.pK(new r9(bf.dp.data[2])), pO.push(aJp), (aJp = new p6).p9(L(363)), aJp.pK(new r9(
			bf.dp.data[7])), pO.push(aJp), (aJp = new p6).p9(L(364)), aJp.pK(new r9(bf.dp.data[8])), pO.push(aJp), (aJp = new p6).p9(L(365)), aJp.pK(new qJ(bf.dp.data[5])), pO.push(aJp), aJY = new pM(aJX.tL, pO)
}

function aJP() {
	var aKJ, aKK, aKL, pO;

	function aKM() {
		aKO(), 2 !== a9.data.spawningType || b6.pd.a1A(a9.data.spawningData) || (a9.data.spawningType = 0), 2 !== a9.data.spawningType && (a9.data.spawningData = null), n.aJW()[19] = null, n.zy()
	}

	function aKO() {
		2 === a9.data.spawningType && b6.pd.a1M(aKL.tl(), a9.data.spawningData, bO.aEP - 1)
	}
	this.show = function() {
		aKJ.show(), this.resize()
	}, this.r1 = function() {
		aKJ.r1()
	}, this.resize = function() {
		aKJ.resize(), aKK.resize()
	}, this.a0j = function(et) {
		2 === et && aKJ.tM[0].pm()
	}, aKJ = new tF(L(369), [new q("⬅️ " + L(32), aKM)]), aKK = new pM(aKJ.tL, (function(pO) {
		var aJp = new p6,
			tE = (aJp.p9(L(222)), [L(247), L(257), L(225)]),
			value = a9.data.spawningType;
		0 === a9.data.gameMode && (tE.splice(1, 1), 0 < value) && (value = 1);
		aJp.pH(new tA({
			tE: tE,
			value: value
		}, function(e0) {
			aKO(), a9.data.spawningType = e0, 0 === a9.data.gameMode && 1 === e0 && (a9.data.spawningType = 2), 2 !== a9.data.spawningType || a9.data.spawningData || (a9.data.spawningData = new Uint16Array(2 * a9.eV)), n.o(24)
		})), aJp.pK(new rP), aJp.pK(new r9({
			value: a9.data.selectableSpawn
		}, L(370), function(value) {
			a9.data.selectableSpawn = value
		})), pO.push(aJp)
	}(pO = []), function(pO) {
		var aJp = new p6;
		aJp.p9("Seed"), aJp.pK(new qJ({
			e0: -1,
			value: a9.data.spawningSeed
		}, 1, 0, function(e) {
			var value = Math.abs(Math.floor(e.target.value)) % 16384;
			e.target.value = a9.data.spawningSeed = value
		})), pO.push(aJp)
	}(pO), function(pO) {
		var aJp;
		2 === a9.data.spawningType && ((aJp = new p6).p9("Data"), (aKL = new td(0, 1, 0, 1)).tk(b6.zG.a2l(a9.data.spawningData, 2)), aJp.pK(aKL), pO.push(aJp))
	}(pO), pO))
}

function aJ7() {
	var aJX, aMJ, aMK, tG;

	function aNN(id) {
		0 !== u.id || bf.dp.data[140].value ? 0 === id ? n.o(8, 1, new rt(16)) : n.o(2) : n.s.aMD(n.rs, 0 === id ? 16 : 0)
	}
	this.show = function() {
		u.v.setState(12), aJX.show(), this.resize(), this.iS()
	}, this.r1 = function() {
		aJX.r1()
	}, this.resize = function() {
		aJX.resize(), aMJ.resize()
	}, this.iS = function() {
		8 === aW.zo() && (2 <= bZ.aNS ? aMK[2].pn === b7.mk && aMK[2].pp(0) : aMK[2].pn !== b7.mk && aMK[2].pp(b7.mk), !a9.gi && aI.p3(a9.eI) ? aMK[1].pn === b7.mk && aMK[1].pp(0) : aMK[1].pn !== b7.mk && aMK[1].pp(b7.mk), !a9.gi && aq.p4(a9
			.eI) ? aMK[0].pn === b7.mk && aMK[0].pp(0) : aMK[0].pn !== b7.mk && aMK[0].pp(b7.mk))
	}, this.a0j = function(et) {
		2 === et && aJX.tM[0].pm()
	}, aMK = [new q(L(371), function() {
		aNN(0)
	}), new q(L(278), function() {
		n.o(16)
	}), new q(L(329), function() {
		n.o(17)
	}), new q(L(372), function() {
		n.s.aLE()
	}, 0, 0, 1), new q(L(339), function() {
		n.o(3, 1)
	}), new q(L(373), function() {
		n.o(18)
	}), new q(L(345), function() {
		aNN(1)
	}), new q(L(374), function() {
		n.o(4, 1, new p(L(374), b6.pT.a1s([L(383), L(384), "Discord", L(385), L(272), L(386), L(110), L(387), L(388), L(389)], [bG.aAU, bG.zj, bG.aAV, bG.aNT, bG.aNU, bG.zQ, bG.aNV, bG.aNW, bG.aNX, bG.aMt]), !1, [new q("⬅️ " + L(32),
			function() {
				n.o(1)
			})]))
	}), new q(L(375), function() {
		n.o(4, 1, new p(L(375), dh + "<br><a href='" + bG.aNT + "' target='_blank'>" + bG.aNT + "</a>" +
			"<br><br><b>" + "FX Client v" + __fx.version + "<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a>" +
			"<br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></b>", !0, [new q("⬅️ " + L(32), function() {
				n.o(1)
			})]))
	}), new q(L(376), function() {
		n.o(4, 1, new p(L(376), L(390) + "<br>" + L(391), !1, [new q("⬅️ " + L(32), function() {
			n.o(1)
		}), new q(L(392), function() {
			u.v.zc(), n.o(1)
		})]))
	}), new q(L(377), function() {
		u.v.zd(), n.o(4, 1, new p(L(393), L(394) + " <a href='" + bG.aMt + "' target='_blank'>" + bG.aMt + "</a>", !1, [new q("⬅️ " + L(32), function() {
			n.o(1)
		})]))
	})], tG = [new q("⬅️ " + L(32), function() {
		n.s.aAE()
	})], 8 === aW.zo() && (aMK.unshift(new q(L(380), function() {
		2 <= bZ.aNS && (n.r(), ba.a0m(), bb.dc = !0)
	}, 0, 1)), aMK.unshift(new q(L(381), function() {
		!a9.gi && aI.p3(a9.eI) && (b4.gv.o9(), n.r(), aI.gj) && aI.a0m()
	}, 0, 1)), aMK.unshift(new q(L(382), function() {
		!a9.gi && aq.p4(a9.eI) && (b4.gv.oB(), n.r(), aI.gj) && aI.a0m()
	}, 0, 1))), 1 === u.id && 5 <= u.f1 && aMK.push(new q(L(378), function() {
		u.v.ze()
	})), aJX = new tF(L(379), tG), aMJ = new q3(aMK, aJX.tL)
}

function aJT() {
	var aKJ, aKK, aKL, pO;

	function aKM() {
		aKO(), 2 !== a9.data.sResourcesType && (a9.data.sResourcesData = null), n.aJW()[19] = null, n.zy()
	}

	function aKO() {
		2 === a9.data.sResourcesType && b6.pd.a1M(aKL.tl(), a9.data.sResourcesData, 2047)
	}
	this.show = function() {
		aKJ.show(), this.resize()
	}, this.r1 = function() {
		aKJ.r1()
	}, this.resize = function() {
		aKJ.resize(), aKK.resize()
	}, this.a0j = function(et) {
		2 === et && aKJ.tM[0].pm()
	}, aKJ = new tF(L(263), [new q("⬅️ " + L(32), aKM)]), aKK = new pM(aKJ.tL, (function(pO) {
		var aJp = new p6;
		aJp.p9(L(222)), aJp.pH(new tA({
			tE: [L(223), L(224), L(225)],
			value: a9.data.sResourcesType
		}, function(e0) {
			aKO(), 2 !== e0 || a9.data.sResourcesData || (a9.data.sResourcesData = new Uint16Array(a9.eV)), a9.data.sResourcesType = e0, n.o(28)
		})), pO.push(aJp)
	}(pO = []), function(pO) {
		var aJp;
		1 === a9.data.sResourcesType && ((aJp = new p6).p9("Value"), aJp.pK(new qJ({
			e0: -1,
			value: a9.data.sResourcesValue
		}, 1, 0, function(e) {
			var value = bH.p0(Math.floor(e.target.value), 0, 2047);
			e.target.value = a9.data.sResourcesValue = value
		})), pO.push(aJp))
	}(pO), function(pO) {
		var aJp;
		2 === a9.data.sResourcesType && ((aJp = new p6).p9("Data"), (aKL = new td(0, 1, 0, 1)).tk(b6.zG.a2l(a9.data.sResourcesData, 2)), aJp.pK(aKL), pO.push(aJp))
	}(pO), pO))
}

function aJR() {
	var aKJ, aKK, aKL, pO;

	function aKM() {
		aKO(), 2 !== a9.data.tIncomeType && (a9.data.tIncomeData = null), n.aJW()[19] = null, n.zy()
	}

	function aKO() {
		2 === a9.data.tIncomeType && b6.pd.a1M(aKL.tl(), a9.data.tIncomeData, 255)
	}
	this.show = function() {
		aKJ.show(), this.resize()
	}, this.r1 = function() {
		aKJ.r1()
	}, this.resize = function() {
		aKJ.resize(), aKK.resize()
	}, this.a0j = function(et) {
		2 === et && aKJ.tM[0].pm()
	}, aKJ = new tF(L(261), [new q("⬅️ " + L(32), aKM)]), aKK = new pM(aKJ.tL, (function(pO) {
		var aJp = new p6;
		aJp.p9(L(222)), aJp.pH(new tA({
			tE: [L(223), L(224), L(225)],
			value: a9.data.tIncomeType
		}, function(e0) {
			aKO(), 2 !== e0 || a9.data.tIncomeData || (a9.data.tIncomeData = new Uint8Array(a9.eV), a9.data.tIncomeData.fill(32)), a9.data.tIncomeType = e0, n.o(26)
		})), pO.push(aJp)
	}(pO = []), function(pO) {
		var aJp;
		1 === a9.data.tIncomeType && ((aJp = new p6).p9("Value"), aJp.pK(new qJ({
			e0: -1,
			value: a9.data.tIncomeValue
		}, 1, 0, function(e) {
			var value = bH.p0(Math.floor(e.target.value), 0, 255);
			e.target.value = a9.data.tIncomeValue = value
		})), pO.push(aJp))
	}(pO), function(pO) {
		var aJp;
		2 === a9.data.tIncomeType && ((aJp = new p6).p9("Data"), (aKL = new td(0, 1, 0, 1)).tk(b6.zG.a2l(a9.data.tIncomeData, 4)), aJp.pK(aKL), pO.push(aJp))
	}(pO), pO))
}

function aJJ() {
	var aJX, aJY, pO;
	this.show = function() {
		aJX.show(), this.resize()
	}, this.r1 = function() {
		aJX.r1()
	}, this.resize = function() {
		aJX.resize(), aJY.resize()
	}, this.a0j = function(et) {
		2 === et && aJX.tM[0].pm()
	}, aJX = new tF(L(373), [new q("⬅️ " + L(32), function() {
		n.zy()
	})]), aJY = new pM(aJX.tL, ((pO = []).push(function() {
		function aJu() {
			aNc.button.textContent = L(163), aNa.e.readOnly = !1, aNb.e.readOnly = !1, aJt.pp(1), aJt.button.style.color = b7.mY
		}
		var aJp = new p6,
			aNZ = (aJp.p9(L(395)), new qJ({
				value: bf.dp.data[105].value,
				e0: -1
			})),
			aNa = (aNZ.e.readOnly = !0, aJp.pK(aNZ), aJp.p9(L(302), "0.8em"), new qJ(bf.dp.data[148])),
			aNa = new qJ(bf.dp.data[148], 0, void 0, function(e) {
				aJs(bf.dp.data[149].value, e.target.value)
			}),
			aNb = (aJp.pK(aNa), aJp.p9(L(306), "0.8em"), new qJ(bf.dp.data[149], 1, void 0, function(e) {
				aJs(e.target.value, bf.dp.data[148].value)
			})),
			aNc = (aJp.pK(aNb), new q(L(163), function(e) {
				return e.textContent === L(163) ? (e.textContent = L(164), aNa.e.readOnly = !0, aNb.e.readOnly = !0, aJt.pp(0), aJt.button.style.color = b7.nU, bf.rC.rD(149, aNb.e.value), aJs(bf.dp.data[149].value, bf.dp.data[
					148].value)) : aJu(), !0
			})),
			aJt = (aJp.pK(new rF([aNc.button])), new q(L(14), function(e) {
				return aNa.e.readOnly && aw.s.aCP(0) && (b6.pT.a1x(e), aJu(), aw.aJv.aJw({
					ru: 0,
					qr: bf.dp.data[148].value,
					rr: 0,
					value: bH.p0(Math.floor(100 * bf.dp.data[149].value), 0, 4294967295)
				})), !0
			}, 1)),
			pC = (aJp.pK(new rF([aJt.button])), aJp.pB()),
			aJs = function(f0, pA) {
				f0 = isNaN(f0) ? 0 : Number(f0);
				var f0 = Math.max(f0, (bf.dp.data[150].value + 1) / 100),
					aJz = Math.floor(100 * Math.max(1e-4 * f0, bf.dp.data[150].value / 100)) / 100;
				pC.textContent = L(165, [f0.toFixed(2), bf.dp.data[105].value, aJz.toFixed(2), pA, (f0 - aJz).toFixed(2)])
			};
		return aJs(bf.dp.data[149].value, bf.dp.data[148].value), aJp
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
	var a7T, aNe, aNf, aNg, aNd = !1;

	function aNh() {
		aNd = !0, a7T = -1, aNe = new Array(4);
		for (var a7 = 3; 0 <= a7; a7--) aNe[a7] = !1;
		var w9 = Math.floor(1 + .02 * at.min);
		aNf = new Array(4), (aNg = new Array(4))[1] = aNg[3] = aNf[0] = aNf[2] = 0, aNg[0] = aNf[3] = -w9, aNf[1] = aNg[2] = w9
	}

	function aNi() {
		if (-1 !== a7T)
			if (0 !== a9.yf && aD.mG()) {
				for (var aNj = !1, a7 = 3; 0 <= a7; a7--) aNe[a7] && (aNj = !0, hv += aNf[a7], hx += aNg[a7], ab.a0B(aNf[a7], aNg[a7]), aO.a7B());
				aNj ? bb.dc = !0 : am.m6()
			} else am.m6()
	}
	this.a0h = function(e0) {
		0 !== a9.yf && aD.mG() && (aNd || aNh(), aNe[e0] = !0, -1 === a7T) && (a7T = setInterval(aNi, 20), aNi())
	}, this.a0k = function(e0) {
		if (0 !== a9.yf && (aNd || aNh(), aNe[e0] = !1, -1 !== a7T)) {
			for (var aNj = !1, a7 = 3; 0 <= a7; a7--) aNj = aNj || aNe[a7];
			aNj || this.m6()
		}
	}, this.m6 = function() {
		if (aNd && -1 !== a7T) {
			for (var a7 = 3; 0 <= a7; a7--) aNe[a7] = !1;
			clearInterval(a7T), a7T = -1
		}
	}
}

function cc() {
	this.s = new aNk, this.lD = new aNl, this.np = new aNm, this.aC1 = new aNn, this.aAB = new aNo, this.aJv = new aNp, this.oS = new aNq, this.aLc = new aNr, this.a52 = new aNs, this.aNt = new aNu, this.aNv = new aNw, this.aNx = new aNy, this.aNz =
		new aO0, this.dU = function() {
			this.s.dU()
		}
}

function aNk() {
	var aO1, aO3;
	this.aD2 = 5, this.aCw = this.aD2 - 1, this.aCU = this.aD2 + this.aCw, this.aCT = [0, 1, 5, 2, 6, 3, 7, 4, 8], this.aO2 = null;

	function aOB(a7) {
		return aO3[a7].aNd && aO1[a7].aOB()
	}

	function aOD(zl) {
		aO3[zl].lo = bb.lo, aO3[zl].aO5 = !1
	}
	this.zu = 0, this.zt = 0, this.dU = function() {
		this.aO2 = new Array(this.aD2);
		this.aO2[0] = "territorial.io";
		var a7, aH3 = au.aHO(0);
		for (au.a37(0), a7 = 1; a7 < this.aD2; a7++) this.aO2[a7] = aG.yE() + ".territorial.io";
		for (au.a37(aH3), aO1 = new Array(this.aCU), aO3 = new Array(this.aCU), a7 = this.aCU - 1; 0 <= a7; a7--) aO3[a7] = {
			aNd: !1,
			lo: 0,
			aO5: !1
		};
		this.aCV(0, 0)
	}, this.aO6 = function(a7) {
		return aO1[a7]
	}, this.aO7 = function() {
		return this.zt < this.aD2 ? this.zt : this.zt - this.aCw
	}, this.iS = function() {
		for (var a7 = this.aCU - 1; 0 <= a7; a7--) this.aCP(a7) && bb.lo > aO3[a7].lo + 15e3 && aw.np.aO8(a7, aO3[a7].aO5);
		!this.aCP(0) && bb.lo > aO3[0].lo + 8e3 && (aO3[0].lo = bb.lo, this.aCV(0, 0))
	}, this.aLY = function(id) {
		return this.aCV(0, id) && this.aO9(0)
	}, this.aCV = function(zl, aJ5) {
		if (aO3[zl].aNd) {
			if (aO1[zl].aOB()) return aO1[zl].aOC(aJ5), aO1[zl].aCP();
			aO1[zl].r1()
		}
		return this.aOA(zl, aJ5), !1
	}, this.aOA = function(zl, aJ5) {
		aO3[zl].aNd = !0, aOD(zl), aO1[zl] = new aOE, aO1[zl].dU(zl, aJ5)
	}, this.aOC = function(zl, aJ5) {
		aOB(zl) && aO1[zl].aOC(aJ5)
	}, this.aOF = function(zl, aJ5) {
		aw.aAB.aOG(zl)
	}, this.aO9 = function(a7) {
		return this.aCP(a7) && aO1[a7].aO9()
	}, this.aOH = function(a7) {
		aO1[a7].aOH()
	}, this.aCP = function(a7) {
		return aO3[a7].aNd && aO1[a7].aCP()
	}, this.send = function(zl, a8) {
		aOD(zl), aO1[zl].send(a8)
	}, __fx.customLobby.setSendFunction(this.send), this.a0S = function(zl) {
		8 === aW.zo() && (aO3[zl].aO5 = !0, aw.lD.aOI = !0)
	}, this.close = function(zl, aOJ) {
		aOB(zl) && aO1[zl].close(aOJ)
	}, this.aOK = function(zl, aOJ) {
		l.zz(aOJ), aOB(zl) && aO1[zl].close(aOJ)
	}, this.a00 = function(aOJ) {
		for (var a7 = this.aCU - 1; 0 <= a7; a7--) this.close(a7, aOJ)
	}, this.aOL = function(zl, aOJ) {
		for (var a7 = this.aCU - 1; 0 <= a7; a7--) a7 !== zl && this.close(a7, aOJ)
	}, this.a3J = function() {
		this.close(this.zu, 3246)
	}, this.aOM = function(zl, e) {
		aO1[zl].r1(), l.zk(zl, e.code)
	}
}

function aNl() {
	this.aOI = !1, this.iS = function() {
		bb.jb() % 250 != 249 || a9.gi || (aw.aAB.aON(+(this.aOI && ac.lV[a9.eI]), ah.jf + bJ.s.og), this.aOI = !1)
	}
}

function aNs() {
	function aOo(aOp) {
		var eb = a9.data,
			aOp = (eb.selectedPlayer = bD.oT(aOp), eb.spawningSeed = bD.oT(14), bD.oT(4)),
			aOp = (aOp < 7 ? (eb.gameMode = 1, eb.numberTeams = aOp + 2) : 9 === aOp ? (eb.gameMode = eb.isZombieMode = 1, eb.numberTeams = 2) : (eb.gameMode = 0, eb.battleRoyaleMode = 7 === aOp ? 0 : 10 === aOp ? 1 : 2), eb.isContest = bD.oT(1), bD
				.oT(6));
		return eb.mapType = bO.aB6(aOp) ? 0 : 1, bO.aB7(eb, aOp), eb.mapSeed = bD.oT(14), aOp
	}
	this.aOP = function(zl, a8) {
		bD.dU(a8), 0 === bD.size ? aw.s.aOK(zl, 3205) : __fx.customLobby.isCustomMessage(a8) || ((0 === bD.oT(1) ? function(zl) {
			var aOT = bD.oT(6);
			0 === aOT ? function(zl) {
					if (0 === zl && 8 !== aW.zo()) {
						n.s.aMu();
						for (var aOg = bD.oT(12), aOh = bD.oT(6), g = new Array(aOg), a7 = 0; a7 < aOg; a7++) g[a7] = bD.oT(aOh);
						aP.a7a(g)
					}
				}(zl) : 2 === aOT ? aw.aNt.aOV(zl) : 3 === aOT || 4 === aOT ? ar.dU() : 9 === aOT ? aw.aNv.aOW(zl) : 10 === aOT ? aw.aNx.aOX() : 11 === aOT ? aw.aNv.aOY(zl) : 12 === aOT ? aw.aNx.aOZ() : 13 === aOT ? aw.aNz.aOa() :
				14 === aOT ? aw.aNz.aOb() : 15 === aOT ? aw.aNv.aOc() : 16 === aOT ? aw.aNt.aOd(zl) : 17 === aOT ? aw.aNt.aOe(zl) : 18 === aOT && aw.aNt.aOf(zl)
		} : function(zl) {
			if (8 !== aW.zo() && !ar.aD3()) return;
			if (zl !== aw.s.zu) aw.s.aOK(zl, 3244);
			else if (0 === bD.oT(1)) bb.yo.aOq(bD.a8);
			else {
				var a7, zl = bD.oT(2);
				if (0 === zl) {
					var o3, np = bD.oT(9);
					0 !== ac.lV[np] && 0 !== ac.lV[a9.eI] && (o3 = bD.oT(10), aJ.o2(np, a9.eI, o3), ab.p1(np, 1, o3))
				} else if (1 === zl) ! function() {
					var np = bD.oT(9);
					0 !== ac.lV[np] && 0 !== ac.lV[a9.eI] && b1.aGn(0, [np], !0) && aJ.oL(np, 1)
				}();
				else if (2 === zl) ! function() {
					var np = bD.oT(9),
						target = bD.oT(9);
					0 !== ac.lV[np] && 0 !== ac.lV[target] && 0 !== ac.lV[a9.eI] && b1.aGn(1, [np], !0) && (ab.p1(np, 3, 96), ab.p1(target, 4, 96), aJ.a59(np, target))
				}();
				else if (a5 && !a6) {
					var eY = 540;
					for (b9.a3(17287), b9.a4(1, 0), b9.a4(6, 10), eY = Math.min(b4.nm.oV.length, 540), a7 = 0; a7 < eY; a7++) b9.aOw(32, b4.nm.oV[a7]);
					aw.s.send(aw.s.zu, b9.a8)
				}
			}
		})(zl), bb.aOS())
	}, this.aOi = function(a8) {
		if (bD.dU(a8), bD.e0 = 1, 3 === bD.oT(6)) {
			bD.e0 += 20;
			var eb = a9.data = new a31,
				a8 = aOo(9),
				aB8 = eb.humanCount = bD.oT(9) + 1;
			eb.selectableSpawn = 1 === eb.gameMode || aB8 < 100, eb.colorsData = new Uint32Array(aB8), eb.playerNamesData = new Array(aB8);
			for (var a7 = 0; a7 < aB8; a7++) bD.e0++, eb.colorsData[a7] = bD.oT(18), eb.playerNamesData[a7] = bC.uh.ul(bD.oT(5));
			aW.aCh(), bO.a3(a8, eb.mapSeed), a9.a35()
		} else ! function() {
			bD.e0 += 20;
			var eb = a9.data = new a31,
				aOn = aOo(1);
			eb.humanCount = 2;
			eb.selectableSpawn = 1, eb.elo = new Uint16Array(2), eb.colorsData = new Uint32Array(2), eb.playerNamesData = new Array(2);
			for (var a7 = 0; a7 < 2; a7++) bD.e0++, eb.colorsData[a7] = bD.oT(18), eb.elo[a7] = bD.oT(14), eb.playerNamesData[a7] = bC.uh.ul(bD.oT(5));
			aW.aCh(), bO.a3(aOn, eb.mapSeed), a9.a35()
		}()
	}, this.aOl = function() {
		bD.e0 = 1;
		var aOT = bD.oT(6),
			aOm = bD.oT(10);
		return aw.s.zt > aw.s.aCw && (aOm += aw.s.aCw), aw.s.zt === aOm ? (aw.s.zu = aOm, !1) : (aw.s.close(aw.s.zt, 3247), aw.s.zu = aOm, ar.aB3 = bD.oT(10), ar.aCp = bD.oT(3 === aOT ? 9 : 1), aw.s.aCV(aOm, 5) && aw.np.aCx(), !0)
	}
}

function aNy() {
	this.aOX = function() {
		bf.s.uF(), bf.rC.rD(105, bB.rv.rw(bB.rv.rx(5))), bf.rC.rD(106, bB.rv.rw(bB.rv.rx(8))), bf.rC.rD(109, bD.oT(30)), bf.rC.rD(108, bf.dp.data[109].value), bf.rC.rD(111, bf.dp.data[109].value + 1), bf.rC.rD(107, 0), bf.rC.rD(110, "")
	}, this.aOZ = function() {
		var aOz, aP0, aP1, aP2, aOy;
		bD.size < b9.aOx(29) ? aw.s.aOK(0, 3254) : (aOy = bD.oT(5), aOz = bD.oT(3), aP0 = bD.oT(3), aP1 = bD.oT(3), aP2 = bD.oT(8), bD.aP3(197 + 16 * (aOy + aOz + aP0 + aP1 + aP2) + 32 + 32 + 30 + 128 + 32 + 30 + 10 + 32 + 2 + 10 + 5 + 30 + 30 +
			32) ? (aOy = {
			rr: bD.oT(30),
			uS: bD.oT(16),
			uT: bD.oT(30),
			uU: bD.oT(30),
			uV: bD.oT(30),
			uW: bD.aP4(32),
			username: bC.uh.ul(aOy),
			uX: bC.uh.ul(aOz),
			uY: bC.uh.ul(aP0),
			uZ: bD.aP4(32),
			ua: bD.aP4(32),
			ub: bD.oT(30),
			uc: bD.aP4(32),
			ud: bD.aP4(32),
			ue: bD.aP4(32),
			uf: bD.aP4(32),
			aK5: bD.aP4(32),
			aK6: bD.aP4(30),
			aJy: bD.aP4(10),
			aKG: bD.aP4(32),
			aKH: bC.uh.ul(aP1),
			aKB: bD.aP4(2),
			aKC: bD.aP4(10),
			aK9: bC.uh.ul(aP2),
			aKD: bD.aP4(5),
			aJr: bD.oT(30),
			aK3: bD.oT(30),
			aK4: bD.aP4(32)
		}, bf.rC.rD(150, aOy.aJy), 8 === n.rs && (25 === n.aDI().aLX ? (aOy.aJZ = !0, n.s.aJG = aOy, n.aDI().aLm(25, !1)) : (aOy.aJZ = !1, aOy.qr = bf.dp.data[105].value, n.s.aJD = aOy, bf.rC.uR(aOy), n.aDI().aLm(16, !0)))) : aw.s.aOK(0,
			3267))
	}
}

function aO0() {
	this.aOa = function() {
		var a7;
		if (bD.size < b9.aOx(39)) aw.s.aOK(0, 3259);
		else {
			var sC = bD.oT(6),
				eY = bD.oT(10),
				data = [];
			if (9 === sC || 10 === sC) {
				for (a7 = 0; a7 < eY; a7++) data.push([bD.oT(30), bC.uj.v1(5), bD.aP4(32), 0, bD.oT(30)]);
				8 === n.rs && n.aDI().aLm(21, !0, {
					sC: sC,
					data: data
				})
			} else {
				var hC = bD.oT(16);
				if (bD.aP3(39 + 16 * hC + eY * (0 === sC ? 111 : 1 === sC ? 101 : 2 === sC || 3 === sC ? 127 : 212))) {
					if (0 === sC)
						for (a7 = 0; a7 < eY; a7++) data.push([bD.oT(30), bC.uh.ul(bD.oT(5)), bD.oT(16), bD.oT(30), bD.oT(30)]);
					else if (1 === sC)
						for (a7 = 0; a7 < eY; a7++) data.push([bD.oT(16), bC.uh.ul(bD.oT(3)), bD.oT(16), bC.uh.ul(bD.oT(5)), bD.oT(31), bD.oT(30)]);
					else if (2 === sC || 3 === sC)
						for (a7 = 0; a7 < eY; a7++) data.push([bD.oT(30), bC.uh.ul(bD.oT(5)), bD.aP4(32), bD.oT(30), bD.oT(30)]);
					else
						for (a7 = 0; a7 < eY; a7++) data.push([bD.oT(20), bD.oT(30), bD.oT(30), bD.oT(30), bD.oT(30), bD.aP4(32), bD.oT(30), bC.uh.ul(bD.oT(5)), bC.uh.ul(bD.oT(5))]);
					8 === n.rs && n.aDI().aLm(21, !0, {
						sC: sC,
						data: data
					})
				} else aw.s.aOK(0, 3260)
			}
		}
	}, this.aOb = function() {
		if (bD.size < b9.aOx(29)) aw.s.aOK(0, 3265);
		else {
			var aP5 = bD.oT(4),
				aP6 = bD.oT(7),
				aP7 = bD.oT(11);
			if (bD.aP3(29 + 16 * aP6 + 16 * aP7 + 11 * aP5)) {
				for (var data = [], a7 = 0; a7 < aP5; a7++) {
					for (var zJ = bC.uh.ul(bD.oT(3)), aP8 = bD.oT(8), aKn = [], er = 0; er < aP8; er++) aKn.push(bD.oT(16));
					data.push({
						name: "[" + zJ + "]",
						aKn: aKn
					})
				}
				8 === n.rs && n.aDI().aLm(23, !0, data)
			} else aw.s.aOK(0, 3266)
		}
	}
}

function aNu() {
	this.aOV = function(zl) {
		if (zl !== aw.s.zt) aw.s.close(zl, 3239);
		else if (6 !== aW.zo()) aw.s.close(zl, 3271);
		else {
			bk.dU();
			for (var a7 = 0; a7 < 4; a7++) {
				var qZ = bk.s.qa[a7],
					playerCount = (qZ.si = bD.oT(10), qZ.eE = bD.oT(6), qZ.mapSeed = bD.oT(14), qZ.aAz = bD.oT(4), qZ.aC3 = bD.oT(6), qZ.aC4 = bD.oT(4), qZ.aB5 = bD.oT(1), qZ.aBd = bD.oT(12), qZ.spawningSeed = bD.oT(14), bD.oT(16));
				bk.sv.sx[a7] = bD.oT(16);
				for (var er = 0; er < playerCount; er++) bk.sv.aAh(a7, bD.oT(30), bC.uj.v1(5), bD.oT(4), bD.oT(30), bD.oT(7), bD.oT(16), bD.oT(18), bD.oT(11))
			}
			n.o(29), bk.s.aBT(!0)
		}
	}, this.aOd = function(zl) {
		if (zl !== aw.s.zt) aw.s.close(zl, 3239);
		else if (bk.zs) {
			bk.s.aBR[0] = bD.oT(20), bk.s.aBR[1] = bD.oT(20);
			for (var aP9 = bD.oT(16), er = 0; er < aP9; er++) {
				var id = bD.oT(3);
				0 === id ? bk.sv.aAh(bD.oT(2), bD.oT(30), bC.uj.v1(5), 0, 1234566, 127, 0, bD.oT(18)) : 1 === id ? bk.sv.aAu(bD.oT(16), bD.oT(2)) : 2 === id ? bk.sv.aAq(bD.oT(16), bD.oT(2), bD.oT(2)) : 3 === id ? bk.sv.aAt(bD.oT(16), bD.oT(2)) :
					4 === id ? bk.sv.aAm(bD.oT(16), bD.oT(2), bD.oT(4), bD.oT(30), bD.oT(7), bD.oT(16), bD.oT(11)) : 5 === id && bk.sv.aAn(bD.oT(16), bD.oT(2), bD.oT(1))
			}
			for (var a7 = 0; a7 < 4; a7++) {
				var qZ = bk.s.qa[a7];
				if (qZ.si = bD.oT(10), 0 === qZ.si) {
					if (qZ.zu = bD.oT(10), qZ.aB3 = bD.oT(10), bk.aAa.dd(a7)) return;
					qZ.eE = bD.oT(6), qZ.mapSeed = bD.oT(14), qZ.aAz = bD.oT(4), qZ.aC3 = bD.oT(6), qZ.aC4 = bD.oT(4), qZ.aB5 = bD.oT(1), qZ.aBd = bD.oT(12), qZ.spawningSeed = bD.oT(14)
				}
			}
			bk.s.aBV()
		} else aw.s.close(zl, 3251)
	}, this.aOe = function(zl) {
		if (zl !== aw.s.zt) aw.s.close(zl, 3272);
		else if (bk.zs) {
			for (var qX = bD.oT(4), qZ = bk.s.qa[qX], qb = qZ.qb, aPA = (qZ.qc = bD.oT(20), bD.oT(6)), a7 = 0; a7 < aPA; a7++) {
				var aBH, target, qr = bD.oT(30),
					id = bD.oT(4);
				0 === id ? qb.push({
					id: id,
					qr: qr,
					k: bC.uj.v1(7)
				}) : 15 === id ? (aBH = bD.oT(3), target = bD.oT(30), qb.push({
					id: id,
					qr: qr,
					aBH: aBH,
					target: target,
					value: bD.oT(30)
				})) : 14 === id ? qb.push({
					id: id,
					qr: qr,
					aBH: bD.oT(3)
				}) : (target = bD.oT(30), qb.push({
					id: id,
					qr: qr,
					target: target,
					value: bD.oT(4)
				}))
			}
			bk.s.aBe(qX)
		} else aw.s.close(zl, 3273)
	}, this.aOf = function(zl) {
		zl !== aw.s.zt ? aw.s.close(zl, 3274) : bk.zs ? (bk.s.qd.push(bD.oT(6)), bk.s.aBe(bk.s.qY[0])) : aw.s.close(zl, 3275)
	}
}

function aNw() {
	this.aOW = function(zl) {
		var aOs, q1;
		bD.aP3(70) ? (aOs = bD.oT(3), q1 = be.aPB.iS(bD.oT(30), bD.oT(30)), aw.aAB.aPC(zl, q1, aOs), 0 < aOs || (0 === zl && 0 === bf.dp.data[105].value.length ? aw.aAB.aLb(0) : aw.aJv.aPD(zl), 4 === aw.s.aO6(zl).aPE() ? 6 === aW.zo() && aw.aC1
			.aCW(zl) : 5 !== aw.s.aO6(zl).aPE() || 8 !== aW.zo() && 10 !== aW.zo() || aw.np.aCx())) : aw.s.aOK(zl, 3269)
	}, this.aOY = function(zl) {
		var id = bD.oT(6);
		0 === id ? (aw.s.aOH(zl), aP.a7W || aw.aAB.aLb(1), b3.aA9(), 8 === n.rs && n.aDI().aLl()) : 21 === id ? 8 === n.rs && n.aDI().aLm(17) : 22 === id && (bf.rC.rD(106, bf.dp.data[110].value), bf.rC.rD(110, ""), 8 === n.rs) && n.aDI().aLm(16)
	}, this.aOc = function() {
		var eY = bD.oT(16),
			aPF = bD.oT(16);
		if (bD.aP3(55 + 10 * eY + 16 * aPF)) {
			for (var g = [], a7 = 0; a7 < eY; a7++) g.push(bC.uh.ul(bD.oT(10)));
			b3.aAD(g)
		} else aw.s.aOK(0, 3270)
	}
}

function aNm() {
	this.aO8 = function(zl, aO5) {
		b9.a3(8), b9.a4(1, 0), b9.a4(6, 4), b9.a4(1, aO5 ? 1 : 0), aw.s.send(zl, b9.a8)
	}, this.aCx = function() {
		b9.a3(58), b9.a4(1, 0), b9.a4(6, 5), b9.a4(8, aw.s.aO7()), b9.a4(10, ar.aB3), b9.a4(9, ar.aCp), b9.a4(10, di), b9.a4(14, h.dj), aw.s.send(aw.s.zu, b9.a8)
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
	}, this.oJ = function(aPG, aPH) {
		b9.a3(24), b9.a4(1, 1), b9.a4(4, 15), b9.a4(9, aPH), b9.a4(10, aPG), aw.s.send(aw.s.zu, b9.a8)
	}, this.oM = function(a52) {
		b9.a3(14), b9.a4(1, 1), b9.a4(4, 14), b9.a4(9, a52), aw.s.send(aw.s.zu, b9.a8)
	}, this.oQ = function(aPI, target) {
		var a7, eY = aPI.length;
		for (b9.a3(14 + 9 * eY), b9.a4(1, 1), b9.a4(4, 13), b9.a4(9, target), a7 = 0; a7 < eY; a7++) b9.a4(9, aPI[a7]);
		aw.s.send(aw.s.zu, b9.a8)
	}
}

function aNp() {
	this.aPJ = function() {
		b9.a3(39), b9.a4(1, 0), b9.a4(6, 16), aw.aAB.aPK(), aw.s.send(0, b9.a8)
	}, this.aPD = function(zl) {
		b9.a3(115), b9.a4(1, 0), b9.a4(6, 17), bC.rv.ux(bf.dp.data[105].value, 5), bC.rv.ux(bf.dp.data[106].value, 8), b9.a4(30, bf.dp.data[109].value), aw.s.send(zl, b9.a8)
	}, this.aLo = function() {
		b9.a3(55), b9.a4(1, 0), b9.a4(6, 18), bC.rv.uw(bf.dp.data[110].value), aw.s.send(0, b9.a8)
	}, this.aLk = function(a2Q) {
		var eY = a2Q.pA.length;
		b9.a3(21 + 16 * eY), b9.a4(1, 0), b9.a4(6, 29), b9.a4(6, a2Q.ru), b9.a4(8, eY), bB.uh.uw(a2Q.pA), aw.s.send(0, b9.a8)
	}, this.aK8 = function(data) {
		b9.a3(73), b9.a4(1, 0), b9.a4(6, 25), b9.a4(6, data.ru), bC.rv.ux(data.qr, 5), b9.a4(30, data.rr), aw.s.send(0, b9.a8)
	}, this.aJw = function(data) {
		b9.a3(105), b9.a4(1, 0), b9.a4(6, 27), b9.a4(6, data.ru), bC.rv.ux(data.qr, 5), b9.a4(30, data.rr), b9.aOw(32, data.value), aw.s.send(0, b9.a8)
	}
}

function aNq() {
	this.oR = function() {
		for (var eY = a9.je, yU = bN.result.yU, kP = yU.length, zD = (b9.a3(17 + 16 * eY + 33 * kP), b9.a4(1, 1), b9.a4(4, 12), b9.a4(10, kP), b9.a4(1, +(2 === a9.yc)), b9.a4(1, a9.yw % 2), ac.zD), a7 = 0; a7 < eY; a7++) b9.a4(16, zD[a7]);
		for (var gM = ac.gM, a7 = 0; a7 < kP; a7++) {
			var g6 = yU[a7];
			b9.a4(9, g6), b9.a4(24, gM[g6])
		}
		aw.s.send(aw.s.zu, b9.a8)
	}
}

function aNr() {
	this.aLd = function(sC, sD, sE) {
		b9.a3(75), b9.a4(1, 0), b9.a4(6, 21), b9.a4(6, sC), b9.a4(1, +(sD < 0)), b9.a4(1, +(sE < 0)), b9.a4(30, Math.abs(sD)), b9.a4(30, Math.abs(sE)), aw.s.send(0, b9.a8)
	}, this.aLe = function(sC, aLf, aLg) {
		b9.a3(18 + 16 * aLf.length + 30), b9.a4(1, 0), b9.a4(6, 22), b9.a4(6, sC), aw.aAB.aPM(aLf), b9.a4(30, aLg), aw.s.send(0, b9.a8)
	}, this.aLj = function(sC, aLf, aLg) {
		b9.a3(73), b9.a4(1, 0), b9.a4(6, 28), b9.a4(6, sC), bC.rv.ux(aLf, 5), b9.a4(30, aLg), aw.s.send(0, b9.a8)
	}, this.aLh = function(aKm, zI) {
		for (var eY = zI.length, hC = 0, a7 = 0; a7 < eY; a7++) hC += zI[a7].length;
		for (b9.a3(21 + 3 * eY + 16 * hC), b9.a4(1, 0), b9.a4(6, 23), b9.a4(3, aKm), b9.a4(4, eY), b9.a4(7, hC), a7 = 0; a7 < eY; a7++) b9.a4(3, zI[a7].length), bB.uh.uw(zI[a7]);
		aw.s.send(0, b9.a8)
	}, this.aLi = function(aKm, sD, sE) {
		b9.a3(52), b9.a4(1, 0), b9.a4(6, 24), b9.a4(3, aKm), b9.a4(1, +(sD < 0)), b9.a4(1, +(sE < 0)), b9.a4(20, Math.abs(sD)), b9.a4(20, Math.abs(sE)), aw.s.send(0, b9.a8)
	}
}

function aNn() {
	this.aCW = function(zl) {
		var username = bf.dp.data[122].value.slice(0, 20),
			username = (b9.a3(24 + 16 * username.length + 18), b9.a4(1, 0), b9.a4(6, 1), b9.a4(10, di), b9.a4(2, bf.dp.data[158].value), aw.aAB.aPM(username), b6.color.a1Y(bf.s.uM()));
		b9.a4(6, username[0]), b9.a4(6, username[1]), b9.a4(6, username[2]), aw.s.zt = zl, aw.s.send(zl, b9.a8)
	}, this.aC2 = function(aPO, a2Q) {
		bA.dU(), bA.a4(1, 0), bA.a4(6, 2), bA.a4(3, aPO), 2 === aPO ? bA.a4(2, a2Q) : 3 === aPO ? bB.uj.y8(a2Q, 7, bA) : 5 === aPO && (bA.a4(3, a2Q.id), bA.a4(3, a2Q.value), bA.a4(30, a2Q.qr)), aw.s.send(aw.s.zt, bA.aPP())
	}
}

function aNo() {
	this.aOG = function(zl) {
		b9.a3(39), b9.a4(1, 0), b9.a4(6, 13), b9.a4(14, h.dj), b9.a4(4, u.id), b9.a4(7, u.f1), b9.a4(1, +a5), b9.a4(1, +a6), b9.a4(5, (new Date).getHours() % 24), aw.s.send(zl, b9.a8)
	}, this.aPC = function(zl, q1, aOs) {
		b9.a3(70), b9.a4(1, 0), b9.a4(6, 14), b9.a4(3, aOs), b9.a4(30, q1[0]), b9.a4(30, q1[1]), aw.s.send(zl, b9.a8)
	}, this.aLb = function(id) {
		b9.a3(13), b9.a4(1, 0), b9.a4(6, 15), b9.a4(6, id), aw.s.send(0, b9.a8)
	}, this.aAC = function(id, pA) {
		var eY = Math.min(pA.length, 63);
		b9.a3(19 + 16 * eY), b9.a4(1, 0), b9.a4(6, 26), b9.a4(6, id), b9.a4(6, eY), bB.uh.uw(pA), aw.s.send(0, b9.a8)
	}, this.aPQ = function(aOm, pL) {
		b9.a3(7 + 26 * pL.length), b9.a4(1, 0), b9.a4(6, 9);
		for (var a7 = 0; a7 < pL.length; a7++) b9.a4(16, pL[a7][0]), b9.a4(10, pL[a7][1]);
		aw.s.send(aOm, b9.a8)
	}, this.aON = function(aPR, aPS) {
		b9.a3(20), b9.a4(1, 0), b9.a4(6, 19), b9.a4(1, aPR), b9.a4(12, aPS), aw.s.send(aw.s.zu, b9.a8)
	}, this.aPM = function(username) {
		b9.a4(5, username.length), bB.uh.uw(username)
	}
}

function aOE() {
	var zl, aJ5, aPT, aPU = ["wss://", "/s50/", "/s51/", "/s52/"],
		aPV = 0;

	function aOF() {
		aw.s.aOF(zl, aJ5)
	}

	function aPa(e) {
		aw.a52.aOP(zl, new Uint8Array(e.data))
	}

	function aPb() {}

	function aOM(e) {
		aw.s.aOM(zl, e)
	}
	this.dU = function(e0, aPW) {
		zl = e0, aJ5 = aPW;
		e0 = aPU[0];
		zl < aw.s.aD2 ? e0 += aw.s.aO2[zl] + aPU[1 + dg] : e0 += aw.s.aO2[0] + "/i" + (1 + dg) + (zl - aw.s.aCw) + "/", (aPT = new WebSocket(__fx.customLobby.isActive() && zl === 1 ? __fx.customLobby.getSocketURL() : e0)).binaryType =
			"arraybuffer", aPT.onopen = aOF, aPT.onmessage = aPa, aPT.onclose = aOM, aPT.onerror = aPb
	}, this.aPY = function() {
		return aPT.readyState === aPT.CONNECTING
	}, this.aCP = function() {
		return aPT.readyState === aPT.OPEN
	}, this.aO9 = function() {
		return aPV
	}, this.aOH = function() {
		aPV = 1
	}, this.aOB = function() {
		return this.aPY() || this.aCP()
	}, this.aOC = function(aPW) {
		aJ5 = aPW
	}, this.aPE = function() {
		return aJ5
	}, this.send = function(a8) {
		this.aCP() && aPT.send(a8)
	}, this.close = function(aOJ) {
		this.aOB() && (aPT.close(aOJ), this.r1())
	}, this.r1 = function() {
		aPT.onopen = null, aPT.onmessage = null, aPT.onclose = null, aPT.onerror = null
	}
}

function dD() {
	var aPc = !1,
		a5N = 0,
		a1 = 0,
		rz = 0,
		gap = 0,
		canvas = null,
		wu = null,
		a1B = null;

	function aPe() {
		for (var aPk, aPi = 0, eY = 0, et = Math.floor(a1 / 2), dz = Math.floor(rz / 2), aPj = 1.5 * Math.PI, a7 = a9.vy; 0 <= a7; a7--) eY += a1B[a7], 0 === a1B[a7] && aPi++;
		if (aPc = !1, wu.clearRect(0, 0, a1, a1), wu.fillStyle = b7.mV, wu.fillRect(0, 0, a1, a1), wu.fillStyle = b7.mY, wu.fillRect(0, 0, a1, gap), wu.fillRect(0, 0, gap, a1), wu.fillRect(a1 - gap, 0, gap, a1), wu.fillRect(0, a1 - gap, a1, gap), 0 <
			eY)
			if (aPi === a9.vy) {
				for (a7 = a9.vy; 0 <= a7; a7--)
					if (0 < a1B[a7]) {
						! function(a7, et, dz) {
							wu.fillStyle = bc.aPr[bc.k4[a7]], wu.beginPath(), wu.arc(et, et, dz, 0, 2 * Math.PI), wu.fill()
						}(a7, et, dz);
						break
					}!
				function(et) {
					var fontSize = et / 3;
					wu.font = b6.pT.rV(1, fontSize), wu.fillStyle = b7.mY, wu.fillText("100%", et, et + .1 * fontSize)
				}(et)
			} else {
				for (a7 = 0; a7 <= a9.vy; a7++) 0 < a1B[a7] && (! function(a7, et, dz, aPj, aPk) {
					wu.fillStyle = bc.aPr[bc.k4[a7]], wu.beginPath(), wu.arc(et, et, dz, aPj, aPk), wu.lineTo(et, et), wu.fill()
				}(a7, et, dz, aPj, aPk = aPj + 2 * Math.PI * a1B[a7] / eY), function(et, dz, aPj, aPk) {
					var f0 = (aPk - aPj) / (2 * Math.PI),
						fontSize = +dz * Math.min(f0, .37);
					fontSize < 8 || (aPj = (aPj + aPk) / 2, aPk = Math.floor(100 * f0 + .5) + "%", dz *= .525 - Math.max(.6 * (f0 - .7), 0), wu.font = b6.pT.rV(1, fontSize), wu.fillStyle = b7.mY, wu.fillText(aPk, et + Math.cos(aPj) * dz, et +
						Math.cos(aPj + 1.5 * Math.PI) * dz))
				}(et, dz, aPj, aPk), 0 !== a7 && aPp(et, dz, aPj), aPj = aPk);
				aPp(et, dz, 1.5 * Math.PI)
			}!
		function(et, dz) {
			wu.beginPath(), wu.arc(et, et, dz, 0, 2 * Math.PI), wu.stroke()
		}(et, dz)
	}

	function aPp(et, dz, aPs) {
		wu.beginPath(), wu.moveTo(et, et), wu.lineTo(et + Math.cos(aPs) * dz, et + Math.cos(aPs + 1.5 * Math.PI) * dz), wu.stroke()
	}
	this.dU = function() {
		if (a9.ie) {
			a5N = 0, a1B = new Uint32Array(a9.vy + 1);
			for (var a7 = a9.vy; 0 <= a7; a7--) a1B[a7] = 0;
			for (a7 = ah.jf - 1; 0 <= a7; a7--) a1B[bc.eW[ah.jh[a7]]] += 1;
			this.resize()
		} else a1B = wu = canvas = null
	}, this.a69 = function() {
		return a1
	}, this.resize = function() {
		a9.ie && (a1 = Math.floor(u.v.r8() && !a9.m1 ? .18 * at.min : .13 * at.pV), a1 = (a1 *= 1 + (.5 + .2 * u.v.r8()) * a9.m1) + a1 % 2, rz = Math.floor(7 * a1 / 8), (canvas = canvas || document.createElement("canvas")).width = a1, canvas
			.height = a1, wu = canvas.getContext("2d", {
				alpha: !0
			}), gap = Math.max(1, .015 * a1), wu.lineWidth = gap, wu.strokeStyle = b7.mY, b6.pT.textAlign(wu, 1), b6.pT.textBaseline(wu, 1), aPe())
	}, this.a2N = function() {
		var dk, ks = this.kt();
		return bc.k4[ks] || (ks = function() {
			for (var ks = -1, a7 = a9.vy; 1 <= a7; a7--)(-1 === ks || a1B[a7] > a1B[ks]) && (ks = a7);
			return ks
		}(), dk = ac.gM[kw[0]], -1 !== ks && a1B[ks] > dk) ? a1B[ks] : dk
	}, this.zX = function() {
		return a5N = 31, this.iS(), this.kt()
	}, this.kt = function() {
		for (var ks = 0, a7 = a9.vy; 0 < a7; a7--) a1B[a7] > a1B[ks] && (ks = a7);
		return ks
	}, this.ku = function(aPg) {
		for (var g1 = 0, jh = ah.jh, eW = bc.eW, eY = ah.jf, fC = bK.fC, a7 = 0; a7 < eY; a7++) {
			var g6 = jh[a7];
			eW[g6] === aPg && (fC[g1++] = g6)
		}
		bK.f4[0] = g1
	}, this.iS = function() {
		if (a9.ie && 32 <= ++a5N) {
			a5N = 0;
			for (var a7 = a9.vy; 0 <= a7; a7--) a1B[a7] = 0;
			for (a7 = ah.jf - 1; 0 <= a7; a7--) a1B[bc.eW[ah.jh[a7]]] += ac.gM[ah.jh[a7]];
			aPc = !0
		}
	}, this.lI = function() {
		a9.ie && aPc && aPe()
	}, this.tU = function() {
		a9.ie && (a9.m1 ? tV.drawImage(canvas, bY.gap, bY.gap) : tV.drawImage(canvas, bY.gap, a6A + 2 * bY.gap))
	}
}

function cw() {
	function aPu(key) {
		var aN9;
		return "undefined" == typeof URLSearchParams || (aN9 = window.location.search, "string" != typeof(aN9 = new URLSearchParams(aN9).get(key))) || aN9.length < 1 ? null : aN9
	}
	this.dd = function() {
		if (0 !== u.id) return !1;
		if (! function() {
				var value = aPu("account");
				if (!value && !(value = aPu("a"))) return void bE.clear();
				return bE.clear(), n.o(8, n.rs, new rt(1e3, {
					ru: 0,
					qr: value,
					rr: 0
				})), 1
			}()) {
			var value = aPu("replay");
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
	}, this.aKI = function(key, value) {
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
	var aPw, g;
	this.dU = function() {
		for (var a7 = (g = new Uint16Array(101)).length - 1; 0 <= a7; a7--) g[a7] = bH.dl(32768 * a7, 100);
		this.a37(0)
	}, this.value = function(g6) {
		return g[g6]
	}, this.aHO = function() {
		return bH.dl(aPw - 1, 2)
	}, this.a37 = function(aH3) {
		aPw = 2 * aH3 % 32768 + 1
	}, this.random = function() {
		return aPw = 167 * aPw % 32768
	}, this.iv = function(lQ) {
		return bH.dl(lQ * this.random(), 32768)
	}, this.jW = function(g6) {
		return 0 !== g6 && this.random() < this.value(g6)
	}, this.iE = function(er, es) {
		return er + this.iv(es - er)
	}
}

function cs() {
	this.oi = new aPx, this.a3I = new aPy, this.aEn = new aPz, this.dU = function() {
		a9.gi || this.oi.dU()
	}, this.iS = function() {
		a9.gi || (this.oi.iS(), 3 !== n.rs) || bb.jb() % 15 != 5 && 2 !== a9.yf || n.aDI().aNA()
	}, this.aND = function() {
		0 === a9.yf && aW.aCh(), a9.a32.a3Q(), a9.data.canvas = null, aw.s.close(aw.s.zu, 3257), aw.s.zu = 0, a9.data.isReplay = 1, a9.a35()
	}, this.aNC = function(pA) {
		var a7 = pA.indexOf("=");
		return 0 <= a7 ? pA.substring(a7 + 1) : pA
	}, this.aNB = function(pA) {
		return "https://territorial.io/?replay=" + pA
	}
}

function aPx() {
	this.aQ1 = null, this.aQ2 = null, this.aQ3 = null, this.aQ4 = null, this.aQ5 = null, this.aQ6 = null, this.a3H = "";
	var aQ7 = 0;
	this.dU = function() {
		this.aQ1 = [], this.aQ2 = [], this.aQ3 = [], this.aQ4 = [], this.aQ5 = [0], this.aQ6 = [0], aQ7 = 0, this.a3H = ""
	}, this.oj = function(id, fG, fI, fK) {
		a9.gi || 2 === a9.yf || (0 === this.aQ5[aQ7] && (this.aQ6[aQ7] ? (this.aQ5.push(1), this.aQ6.push(0), aQ7++) : this.aQ5[aQ7] = 1), this.aQ1.push(id), this.aQ2.push(fG), this.aQ3.push(void 0 === fI ? 0 : fI), this.aQ4.push(void 0 === fK ?
			0 : fK), this.aQ6[aQ7]++)
	}, this.iS = function() {
		0 === this.aQ5[aQ7] ? this.aQ6[aQ7]++ : (this.aQ5.push(0), this.aQ6.push(0), aQ7++)
	}
}

function aPz() {
	var aQ8 = 0;

	function aQC(pA, id) {
		aQ8 || (id ? 1 === id ? aJ.a4T = L(397) + ": " + pA : n.o(4, 3, new p(L(398), pA, 1)) : n.o(4, 3, new p("⚠️ " + L(396), pA, 1)))
	}
	this.v1 = function(pA, aQ9) {
		var pL;
		return aQ8 = aQ9, bC.rv.ut(bC.rv.ur(bC.rv.up(pA))), aJ.a4T = "", !(! function() {
			if (bD.size < 10) aQC("File Too Small");
			else {
				var aQE = bD.oT(12),
					aPS = (aQE !== h.rVersion && aQC("Incompatible Version " + aQE + " " + h.rVersion, 1), bD.oT(12)),
					aQF = bD.oT(31);
				if (aQF !== bD.size) aQC("Size Error: " + aQF + " " + bD.size);
				else if (function(j7, aQE) {
						for (var g6 = bD.a8, eY = bD.size, aPS = aQE, a7 = 3; a7 < eY; a7++) aPS = aPS + g6[a7] & 4095;
						return aPS === j7 || (aQC("Hash Error: " + aPS + " " + j7 + " " + eY), !1)
					}(aPS, aQE)) return 1
			}
			return
		}() || (aQ9 = bD, (pL = a9.data = new a31).mapType = aQ9.oT(2), pL.mapProceduralIndex = aQ9.oT(8), pL.mapRealisticIndex = aQ9.oT(8), pL.mapSeed = aQ9.oT(14), pL.mapName = aQ9.aQH(5), 2 === pL.mapType && aQ9.aQI(), pL
			.passableWater = aQ9.oT(1), pL.passableMountains = aQ9.oT(1), pL.playerCount = aQ9.oT(10), pL.humanCount = aQ9.oT(10), pL.selectedPlayer = aQ9.oT(9), pL.gameMode = aQ9.oT(1), pL.playerMode = aQ9.oT(2), pL.battleRoyaleMode =
			aQ9.oT(2), pL.numberTeams = aQ9.oT(4), pL.isZombieMode = aQ9.oT(1), pL.isContest = aQ9.oT(1), pL.isReplay = aQ9.oT(1), pL.elo = aQ9.aQJ(2, 14, 2), pL.colorsType = aQ9.oT(1), pL.colorsPersonalized = aQ9.oT(1), pL.colorsData =
			aQ9.aQJ(10, 18, 512), pL.selectableColor = aQ9.oT(1), pL.teamPlayerCount = aQ9.aQJ(4, 10, 9), pL.neutralBots = aQ9.oT(1), pL.botDifficultyType = aQ9.oT(2), pL.botDifficultyValue = aQ9.oT(4), pL.botDifficultyTeam = aQ9.aQJ(4,
				4, 9), pL.botDifficultyData = aQ9.aQJ(10, 4, 512), pL.spawningType = aQ9.oT(2), pL.spawningSeed = aQ9.oT(14), pL.spawningData = aQ9.aQJ(11, 12, 1024), pL.selectableSpawn = aQ9.oT(1), pL.playerNamesType = aQ9.oT(2), pL
			.playerNamesData = aQ9.aQK(10, 5, 512), pL.selectableName = aQ9.oT(1), pL.aIncomeType = aQ9.oT(2), pL.aIncomeValue = aQ9.oT(8), pL.aIncomeData = aQ9.aQJ(10, 8, 512), pL.tIncomeType = aQ9.oT(2), pL.tIncomeValue = aQ9.oT(8), pL
			.tIncomeData = aQ9.aQJ(10, 8, 512), pL.iIncomeType = aQ9.oT(2), pL.iIncomeValue = aQ9.oT(8), pL.iIncomeData = aQ9.aQJ(10, 8, 512), pL.sResourcesType = aQ9.oT(2), pL.sResourcesValue = aQ9.oT(11), pL.sResourcesData = aQ9.aQJ(10,
				11, 512), ! function() {
				var hf = bD,
					v2 = hf.oT(5),
					aQL = hf.oT(30),
					aQM = hf.oT(30);
				if (aQL + aQM > 8 * hf.size) return void aQC("Corrupted File");
				return function(eY) {
						var aQP = new Uint8Array(eY),
							aQQ = new Uint16Array(eY),
							aQR = new Uint32Array(eY),
							aQS = new Uint32Array(eY);
						b5.oi.aQ1 = aQP, b5.oi.aQ2 = aQQ, b5.oi.aQ3 = aQR, b5.oi.aQ4 = aQS;
						for (var a7 = 0; a7 < eY; a7++) {
							var id = bD.oT(4);
							aQP[a7] = id, aQQ[a7] = bD.oT(9), 0 === id ? aQR[a7] = bD.oT(22) : 1 === id ? (aQR[a7] = bD.oT(10), aQS[a7] = bD.oT(10)) : 2 === id ? (aQR[a7] = bD.oT(10), aQS[a7] = bD.oT(9)) : 3 === id || 4 === id ? (aQR[
								a7] = bD.oT(10), aQS[a7] = bD.oT(22)) : 5 === id || 6 === id ? aQR[a7] = bD.oT(10) : 7 === id ? aQR[a7] = bD.oT(1) : 10 === id && (aQR[a7] = bD.oT(20), aQS[a7] = bD.oT(22))
						}
					}(aQL),
					function(eY, v2) {
						var aQ5 = new Uint8Array(eY),
							aQ6 = new Array(eY);
						aQ6.fill(0), b5.oi.aQ5 = aQ5, b5.oi.aQ6 = aQ6;
						for (var a7 = 0; a7 < eY; a7++) aQ5[a7] = bD.oT(1), aQ6[a7] = bD.oT(v2)
					}(aQM, v2), 1
			}()) || (bD.e0 < 8 * bD.size - 13 || bD.e0 > 8 * bD.size ? (aQC("Out Of Bounds Error: " + bD.e0 + " " + 8 * bD.size), 1) : (b5.oi.a3H = pA, 2 === a9.data.mapType && (aQC("Load base64 image...", 2), 1))))
	}, this.aEo = function(aEO, aQD) {
		var a1T = document.createElement("canvas"),
			hH = a1T.getContext("2d");
		if (a1T.width = aEO.width, a1T.height = aEO.height, hH.drawImage(aEO, 0, 0), aQ8 || aQD) return a9.yf ? void 0 : (a9.data.canvas = a1T, a9.data.mapType = 2, n.r(), void n.o(19));
		b5.aND()
	}
}

function aPy() {
	this.y8 = function() {
		var v2 = function() {
				for (var aQ6 = b5.oi.aQ6, eY = aQ6.length, max = 0, a7 = 0; a7 < eY; a7++) max = Math.max(max, aQ6[a7]);
				return v9(Math.max(max, 1))
			}(),
			a1 = (pL = a9.data, (a1 = bA).dU(), a1.a4(12, h.rVersion), a1.e0 += 43, a1.a4(2, pL.mapType), a1.a4(8, pL.mapProceduralIndex), a1.a4(8, pL.mapRealisticIndex), a1.a4(14, pL.mapSeed), a1.aQZ(pL.mapName, 5), 2 === pL.mapType && a1.aQa(pL
				.canvas), a1.a4(1, pL.passableWater), a1.a4(1, pL.passableMountains), a1.a4(10, pL.playerCount), a1.a4(10, pL.humanCount), a1.a4(9, pL.selectedPlayer), a1.a4(1, pL.gameMode), a1.a4(2, pL.playerMode), a1.a4(2, pL
				.battleRoyaleMode), a1.a4(4, pL.numberTeams), a1.a4(1, pL.isZombieMode), a1.a4(1, pL.isContest), a1.a4(1, pL.isReplay), a1.db(pL.elo, 2, 14), a1.a4(1, pL.colorsType), a1.a4(1, pL.colorsPersonalized), a1.db(pL.colorsData, 10,
				18), a1.a4(1, pL.selectableColor), a1.db(pL.teamPlayerCount, 4, 10), a1.a4(1, pL.neutralBots), a1.a4(2, pL.botDifficultyType), a1.a4(4, pL.botDifficultyValue), a1.db(pL.botDifficultyTeam, 4, 4), a1.db(pL.botDifficultyData, 10,
				4), a1.a4(2, pL.spawningType), a1.a4(14, pL.spawningSeed), a1.db(pL.spawningData, 11, 12), a1.a4(1, pL.selectableSpawn), a1.a4(2, pL.playerNamesType), a1.aQb(pL.playerNamesData, 10, 5), a1.a4(1, pL.selectableName), a1.a4(2, pL
				.aIncomeType), a1.a4(8, pL.aIncomeValue), a1.db(pL.aIncomeData, 10, 8), a1.a4(2, pL.tIncomeType), a1.a4(8, pL.tIncomeValue), a1.db(pL.tIncomeData, 10, 8), a1.a4(2, pL.iIncomeType), a1.a4(8, pL.iIncomeValue), a1.db(pL
				.iIncomeData, 10, 8), a1.a4(2, pL.sResourcesType), a1.a4(11, pL.sResourcesValue), a1.db(pL.sResourcesData, 10, 11), ! function(v2) {
				var a1 = bA,
					aQ1 = b5.oi.aQ1,
					fG = b5.oi.aQ2,
					fI = b5.oi.aQ3,
					fK = b5.oi.aQ4,
					eY = aQ1.length;
				a1.a4(5, v2), a1.a4(30, eY), a1.a4(30, b5.oi.aQ6.length);
				for (var a7 = 0; a7 < eY; a7++) {
					var et = aQ1[a7];
					a1.a4(4, et), a1.a4(9, fG[a7]), 0 === et ? a1.a4(22, fI[a7]) : 1 === et ? (a1.a4(10, fI[a7]), a1.a4(10, fK[a7])) : 2 === et ? (a1.a4(10, fI[a7]), a1.a4(9, fK[a7])) : 3 === et || 4 === et ? (a1.a4(10, fI[a7]), a1.a4(22, fK[
						a7])) : 5 === et || 6 === et ? a1.a4(10, fI[a7]) : 7 === et ? a1.a4(1, fI[a7]) : 10 === et && (a1.a4(20, fI[a7]), a1.a4(22, fK[a7]))
				}
			}(v2), ! function(v2) {
				for (var a1 = bA, aQ5 = b5.oi.aQ5, aQ6 = b5.oi.aQ6, eY = aQ5.length, a7 = 0; a7 < eY; a7++) a1.a4(1, aQ5[a7]), a1.a4(v2, aQ6[a7])
			}(v2), bA.e0),
			pL = bH.dl(a1 - 1, 6) + 1,
			v2 = (b9.aOx(6 * pL) !== bA.g.length && bA.g.push(0), ! function() {
				var a1 = bA;
				a1.e0 = 24, a1.a4(31, a1.g.length), a1.e0 = 12, a1.a4(12, function() {
					for (var g = bA.g, eY = g.length, aPS = h.rVersion, a7 = 3; a7 < eY; a7++) aPS = aPS + g[a7] & 4095;
					return aPS
				}())
			}(), bD.dU(bA.g), bB.rv.rw(bB.rv.rx(pL)));
		return bD.a01(), bA.dU(), v2
	}
}

function ci() {
	var et, bo = !1,
		aQd = !1,
		aQe = -1e4,
		aQf = -1,
		aQg = 0;

	function resize(aQk) {
		et = 0, aX.sK() && (aQi(aQk) || bo) && (bo = !1, bY.resize(), bS.a9m.resize(), aU.dU(), bU.dU(), aV.resize(), aP.resize(), aK.resize(), n.resize(), 1 <= a9.yf ? (aR.resize(!1), aQ.resize(), aS.resize(), aO.resize(), aN.resize(), aJ.resize(),
			aI.resize(), b8.resize(), aq.resize(), aL.resize(), aM.resize(), aH.resize(), ba.resize(), ab.resize(), aT.resize(), bd.resize(), aO.a7B()) : (aW.aCj(), aW.aCk()), bb.dc = !0)
	}

	function aQh(f0) {
		return f0 && 128 < f0 ? Math.floor(f0) : 128
	}

	function aQi(aQk) {
		var a1, j7, aQm, rz, a6a;
		if (!(0 < at.rc)) return rz = aQh(document.documentElement.clientWidth), a6a = aQh(window.visualViewport && 2 !== u.id ? window.visualViewport.height : document.documentElement.clientHeight), a1 = rz, j7 = a6a, aQm = 0 !== u.id || a1 < j7 ?
			700 : 1200, aQm = Math.min(aQm / ((a1 + j7) / 2), 1), aQm = 0 === bf.dp.data[1].value ? 2 * aQm / 3 : Math.min(aQm + (bf.dp.data[1].value - 1) * (1 - aQm) / 2, 1), at.pZ = (window.devicePixelRatio || 1) * aQm, __fx.hoveringTooltip
			.canvasPixelScale = at.pZ, aQk && !aQd ? (aQd = !0, document.body.removeChild(a0A)) : aQd && (aQd = !1, document.body.appendChild(a0A)), a1 = Math.floor(.5 + rz * at.pZ), j7 = Math.floor(.5 + a6a * at.pZ), a1 !== at.a1 || j7 !== at
			.j7 ? (at.a1 = a1, at.j7 = j7, at.min = a9Q(a1, j7), at.max = a4i(a1, j7), at.pV = bH.dl(a1 + j7, 2), at.tR = a1 / j7, a0A.width = a1, a0A.height = j7, a0A.style.width = rz + "px", a0A.style.height = a6a + "px", aQf = bb.lo + 1e3,
			1) : void 0
	}
	this.a1 = 0, this.j7 = 0, this.min = 0, this.max = 0, this.pV = 0, this.tR = 1, this.pZ = 1, this.rc = 0, this.dV = function() {
		this.a1 = aQh(document.documentElement.clientWidth) + 2, this.j7 = aQh(document.documentElement.clientHeight) + 2
	}, this.dU = function() {
		et = 1, a0A = document.getElementById("canvasA"), (tV = a0A.getContext("2d", {
			alpha: __fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aQi(0)
	}, this.iS = function() {
		ay.iS(), 50 <= ++et && resize(0), -1 === aQf || bb.lo < aQf || (aQf = -1, 2e3 * ++aQg >= bb.lo + 8e3 ? console.log("error 3748") : u.v.setState(15))
	}, this.df = function(hU) {
		bo = !0, resize(hU)
	}, this.a0q = function() {
		aQe + 1e3 > bb.lo || (aQe = bb.lo, resize(0))
	}
}

function dA() {
	this.aPB = new aQo, this.zT = new aQp
}

function aQp() {
	this.zU = function() {
		for (var g6, eY = ah.jf, yT = ah.jh, zD = ac.zD, aQq = this.aE7(), a7 = 0; a7 < eY; a7++) g6 = yT[a7], b6.fu.j1(g6) || (zD[g6] = aQq);
		var oo = ac.oo,
			ia = ac.ia,
			ib = ac.ib,
			zC = ac.zC,
			eY = a9.je;
		for (a7 = 0; a7 < eY; a7++)(0 === zC[a7] || ib[a7] < 1 || 2 * oo[a7] > 3 * (ia[a7] + ib[a7])) && (zD[a7] = 0);
		var zR = 0;
		for (a7 = 0; a7 < eY; a7++) zR += 0 < zD[a7];
		return zR
	}, this.aE7 = function() {
		return Math.min(65535, bb.jb())
	}
}

function aQo() {
	function aQu(g, f0, k3) {
		for (var a7 = 0; a7 < 256; a7++) g[a7] = (g[a7] + (f0 >> (a7 + k3) % 30 & 1)) % 256
	}
	this.iS = function(aQr, aQs) {
		var g = new Uint8Array(256);
		return function(g, aQr, aQs) {
				var a7, aQw = 3 + (4 + aQr) % 32768,
					aQx = 12 + aQs % 32768,
					aQy = 17 + ((aQr & aQs) + (aQr | aQs) + aQr) % 32768;
				for (a7 = 0; a7 < 256; a7++) aQw = 1 + aQw * aQx % aQy, g[a7] = aQw % 256
			}(g, aQr, aQs), aQu(g, aQr, 2), aQu(g, aQs, 7),
			function(g) {
				var a7, f0, e0 = 0;
				for (a7 = 0; a7 < 3e4; a7++) f0 = g[e0], g[e0] = (f0 + a7 + g[(e0 + a7) % 256]) % 256, e0 = (f0 + a7 + e0 + (f0 & e0)) % 256
			}(g),
			function(g) {
				var a7, a6a = 1,
					sg = 1;
				for (a7 = 0; a7 < 256; a7 += 2) a6a = (1 + a6a) * (g[a7] + 1) % 1073741824, sg = (1 + sg) * (g[a7 + 1] + 1) % 1073741824;
				return [a6a, sg]
			}(g)
	}
}

function cf() {
	var aQz, aR0, h1, aR1;
	this.dU = function() {
		var a7, ef, eh, aPN, aR2, a1, j7, wu, hE, vJ, f0, g6, eo, er, a3s;
		if (function() {
				if (h1 = !0, aR1 = "rgb(" + bO.vH[0] + "," + bO.vH[1] + "," + bO.vH[2] + ")", bO.aHB(bO.eE)) return 1;
				return h1 = !1, 0
			}()) aR0 = null;
		else {
			for (aQz = bH.dl(96, 4), aR2 = 1 === bO.eE ? (aPN = 0, 160) : (aPN = 128, 32), aR1 = "rgb(" + aPN + "," + aPN + "," + aPN + ")", aR0 = new Array(4), a7 = 3; 0 <= a7; a7--) {
				if (aR0[a7] = document.createElement("canvas"), a1 = a7 % 2 == 0 ? bO.ej : aQz, j7 = a7 % 2 == 0 ? aQz : bO.ek + 2 * aQz, aR0[a7].width = a1, aR0[a7].height = j7, vJ = (hE = (wu = aR0[a7].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, a1, j7)).data, a7 % 2 == 0)
					for (eh = aQz - 1; 0 <= eh; eh--)
						for (f0 = aR2 + Math.floor((eh + 1) * (aPN - aR2) / (aQz + 1)), ef = a1 - 1; 0 <= ef; ef--) vJ[g6 = 4 * ((0 === a7 ? aQz - eh - 1 : eh) * a1 + ef)] = f0, vJ[g6 + 1] = f0, vJ[g6 + 2] = f0, vJ[g6 + 3] = 255;
				else {
					for (ef = aQz - 1; 0 <= ef; ef--)
						for (f0 = aR2 + Math.floor((ef + 1) * (aPN - aR2) / (aQz + 1)), eh = j7 - 1 - aQz; aQz <= eh; eh--) vJ[g6 = 4 * (eh * a1 + (3 === a7 ? aQz - ef - 1 : ef))] = f0, vJ[g6 + 1] = f0, vJ[g6 + 2] = f0, vJ[g6 + 3] = 255;
					for (er = 1; 0 <= er; er--)
						for (ef = aQz - 1; 0 <= ef; ef--)
							for (eh = aQz - 1; 0 <= eh; eh--) eo = (Math.pow(ef * ef + eh * eh, .5) + 1) / (aQz + 1), f0 = aR2 + Math.floor((1 < eo ? 1 : eo) * (aPN - aR2)), vJ[g6 = 4 * ((0 === er ? aQz - eh - 1 : eh + er * (j7 - aQz)) * a1 + (
								1 === a7 ? ef : aQz - ef - 1))] = f0, vJ[g6 + 1] = f0, vJ[g6 + 2] = f0, vJ[g6 + 3] = 255
				}
				wu.putImageData(hE, 0, 0)
			}
			a3s = aR2, bO.vC.fillStyle = "rgb(" + a3s + "," + a3s + "," + a3s + ")", bO.vC.fillRect(0, 0, bO.ej, 1), bO.vC.fillRect(0, bO.ek - 1, bO.ej, 1), bO.vC.fillRect(0, 0, 1, bO.ek), bO.vC.fillRect(bO.ej - 1, 0, 1, bO.ek)
		}
	}, this.wo = function() {
		var er = h1 ? 0 : -aQz;
		aIo(er, er, bO.ej - 2 * er, bO.ek - 2 * er, bW.aR5, bW.aR6, bW.aR7, bW.aR8) || (tV.fillStyle = aR1, tV.fillRect(0, 0, at.a1, at.j7))
	}, this.tU = function() {
		h1 || (aIn(0, -aQz, bO.ej, aQz, bW.aR5, bW.aR6, bW.aR7, bW.aR8) && tV.drawImage(aR0[0], bW.aR9, bW.aRA - aQz), aIn(bO.ej, -aQz, aQz, bO.ek + 2 * aQz, bW.aR5, bW.aR6, bW.aR7, bW.aR8) && tV.drawImage(aR0[1], bW.aR9 + bO.ej, bW.aRA - aQz),
			aIn(0, bO.ek, bO.ej, aQz, bW.aR5, bW.aR6, bW.aR7, bW.aR8) && tV.drawImage(aR0[2], bW.aR9, bW.aRA + bO.ek), aIn(-aQz, -aQz, aQz, bO.ek + 2 * aQz, bW.aR5, bW.aR6, bW.aR7, bW.aR8) && tV.drawImage(aR0[3], bW.aR9 - aQz, bW.aRA - aQz))
	}
}

function cz() {
	this.h2 = new aRB, this.aE5 = new aRC, this.wr = new aRD, this.s = new aRE, this.i4 = new aRF, this.a3s = new aRG, this.aRH = new aRI, this.jS = new aRJ, this.kK = new aRK, this.aRL = new aRM, this.dU = function() {
		this.wr.dU(), this.s.dU(), this.i4.dU(), this.a3s.dU(), this.aRL.dU()
	}, this.tU = function() {
		this.aRL.tU(), this.wr.tU()
	}
}

function aRJ() {
	this.iS = function(player) {
		var oe;
		return !!a9.data.passableWater && 0 !== ac.gF[player].length && bJ.s.og !== bJ.s.jv && !((oe = bJ.s.oe[player]) >= aA.jv[aA.im[player]] || oe === bJ.s.os || !b6.fu.om(player, aA.jt[aA.im[player]], 32, 0) || !aj.iH.iS(player) && !aj.iJ.iS(
			player) || ! function(a23) {
			var aRP = bK.fA[1] + bI.hJ[bK.fA[2] - 1] << 2;
			if (aY.eP(aRP)) return 1;
			return aRP = aY.eQ(aRP), a23 !== aRP && !!eR(a23, aRP)
		}(player)) && function(player) {
			return b6.fu.op(player), bJ.s.ov(player), !0
		}(player)
	}
}

function aRB() {
	function aRX(a7, kk, kl) {
		var aRZ, aRY;
		if (!(a7 < 0)) return aRY = bJ.s.lx[a7], aRZ = bI.hi(aRY), aRY = bI.hl(aRY), a7 = 20 * (.9 + .1 * Math.log10(bJ.s.a51[a7])), a7 = Math.max(a7, bI.hy(b6.pT.sI(.02, 1.7))), bH.aIv(bI.hh(kk), bI.hk(kl), aRZ, aRY, a7)
	}

	function aRR(aRQ) {
		var aRc = 4 + .03 * (1 + 1.5 * u.v.r8()) * at.pV / hw;
		return bI.hm(aRQ, bK.fA[1]) < aRc
	}
	this.h3 = function(player, aRQ) {
		return !!(a9.data.passableWater && bI.hz(aRQ) && bJ.s.og !== bJ.s.jv && bJ.s.oe[player] !== bJ.s.os && 0 !== ac.gF[player].length && bJ.kK.kL(player, aRQ) && aRR(aRQ))
	}, this.ny = function(player, lu, aRQ) {
		return !!(bI.hz(aRQ) && this.ow(player, lu) && bJ.kK.ox(aRQ) && aRR(aRQ))
	}, this.ow = function(player, id) {
		for (var aRS, sD = player << 3, sE = sD + bJ.s.oe[player], aRT = bJ.s.aRT, aRU = bJ.s.aRU, a7 = sD; a7 < sE; a7++)
			if (id === aRU[aRS = aRT[a7]]) return bK.fA[3] = aRS, !0;
		return !1
	}, this.nx = function(eK) {
		var a3t = bJ.a3s.a3t;
		return !!this.ow(a9.eI, a3t) && (b4.gv.nx(a3t, eK), !0)
	}, this.a3v = function(kk, kl) {
		var player = a9.eI,
			eY = bJ.s.oe[player];
		if (0 === eY) return !1;
		for (var aRT = bJ.s.aRT, lx = bJ.s.lx, sD = player << 3, aRV = 80, aL1 = -1, a7 = sD + eY - 1; sD <= a7; a7--) {
			var aRW = aRT[a7],
				eo = bI.hc(kk, kl, lx[aRW]);
			eo < aRV && (aRV = eo, aL1 = aRW)
		}
		return !!aRX(aL1, kk, kl) && (bJ.a3s.a3t = bJ.s.aRU[aL1], bi.ou.a3v(), !0)
	}, this.a42 = function(kk, kl) {
		var eY = bJ.s.og;
		if (eY < 1) return -1;
		for (var lx = bJ.s.lx, aRV = 80, aL1 = -1, a7 = 0; a7 < eY; a7++) {
			var eo = bI.hc(kk, kl, lx[a7]);
			eo < aRV && (aRV = eo, aL1 = a7)
		}
		return aRX(aL1, kk, kl) ? aL1 : -1
	}, this.lw = function(player, id) {
		for (var sD = player << 3, sE = sD + bJ.s.oe[player], aRU = bJ.s.aRU, aRT = bJ.s.aRT, a7 = sD; a7 < sE; a7++) {
			var aRW = aRT[a7];
			if (aRU[aRW] === id) return aRW
		}
		return -1
	}, this.aE2 = function(player) {
		for (var sD = player << 3, sE = sD + bJ.s.oe[player], aRT = bJ.s.aRT, a51 = bJ.s.a51, im = 0, a7 = sD; a7 < sE; a7++) im += a51[aRT[a7]];
		return im
	}, this.m2 = function(player) {
		return 0 === bJ.s.oe[player] ? -1 : bJ.s.aRT[player << 3]
	}
}

function aRC() {
	this.aE6 = function(player) {
		for (var aRT = bJ.s.aRT, sD = player << 3, a7 = sD + bJ.s.oe[player] - 1; sD <= a7; a7--) this.aRd(aRT[a7])
	}, this.aRd = function(aRe) {
		var s = bJ.s,
			aRf = s.og - 1,
			aRg = s.a50[aRe],
			aRh = s.aRi[aRe],
			aRj = s.lx[aRe];
		s.og = aRf, s.a50[aRe] = s.a50[aRf], s.aRk[aRe] = s.aRk[aRf], s.aRl[aRe] = s.aRl[aRf], s.lx[aRe] = s.lx[aRf], s.aRm[aRe] = s.aRm[aRf], s.a51[aRe] = s.a51[aRf], s.aRi[aRe] = s.aRi[aRf], s.aRU[aRe] = s.aRU[aRf], s.aRn[aRe] = s.aRn[aRf], s
			.aRo[aRe] = s.aRo[aRf], s.aRp[aRe] = s.aRp[aRf], s.aRT[s.a50[aRe]] = aRe,
			function(aPs) {
				var player = aPs >> 3,
					s = bJ.s,
					eY = s.oe[player] - 1,
					aRs = (player << 3) + eY;
				s.oe[player] = eY, aRs !== aPs && (s.aRT[aPs] = s.aRT[aRs], s.a50[s.aRT[aPs]] = aPs)
			}(aRg), bJ.i4.i4[bI.i3(s.lx[aRe])][s.aRi[aRe]] = aRe, aRf = bI.i3(aRj), aRg = aRh, aRf = bJ.i4.i4[aRf], s = aRf.pop(), aRg !== aRf.length && (aRf[aRg] = s, bJ.s.aRi[s] = aRg)
	}
}

function aRD() {
	var aRu, xI = 8,
		aRv = new Array(2);

	function aRw(e0) {
		var hB = xI + 4,
			a1T = b6.pT.v8(hB, hB),
			hH = b6.pT.getContext(a1T, !0),
			hE = b6.pT.getImageData(hH, hB, hB),
			vJ = hE.data;
		return aRx(vJ, hB + 1, e0), aRx(vJ, hB + 2, e0), aRx(vJ, 2 * hB + 1, e0), aRx(vJ, 2 * hB - 3, e0), aRx(vJ, 2 * hB - 2, e0), aRx(vJ, 3 * hB - 2, e0), aRx(vJ, hB * (hB - 3) + 1, e0), aRx(vJ, hB * (hB - 2) + 1, e0), aRx(vJ, hB * (hB - 2) + 2,
			e0), aRx(vJ, hB * (hB - 2) - 2, e0), aRx(vJ, hB * (hB - 1) - 3, e0), aRx(vJ, hB * (hB - 1) - 2, e0), hH.putImageData(hE, 0, 0), a1T
	}

	function aRx(vJ, eK, e0) {
		eK *= 4;
		vJ[eK] = 255, vJ[1 + eK] = 255, vJ[2 + eK] = e0, vJ[3 + eK] = 255
	}

	function v8(player) {
		var a1T = b6.pT.v8(xI, xI);
		return function(hH, player) {
			var ef, eh, hg, eK, aRz, aS0, hB = xI,
				hE = b6.pT.getImageData(hH, hB, hB),
				vJ = hE.data,
				kP = (hB >> 1) - .5,
				aR1 = aY.a5Z(player),
				aS2 = b6.pd.a14(aR1, .5);
			b6.pd.a16(aR1, aS2, 300) || b6.pd.a18(aR1, 100);
			for (eh = 0; eh < hB; eh++)
				for (ef = 0; ef < hB; ef++) aS0 = (hB - 1.5) * (hB - 1.5) / 4, aRz = (hg = (hg = ef - kP) * hg + (hg = eh - kP) * hg) <= (hB - 4.5) * (hB - 4.5) / 4 ? aS2 : aR1, vJ[eK = 4 * (eh * hB + ef)] = aRz[0], vJ[1 + eK] = aRz[1], vJ[2 +
					eK] = aRz[2], vJ[3 + eK] = aS0 < hg ? 0 : 255;
			hH.putImageData(hE, 0, 0)
		}(b6.pT.getContext(a1T, !0), player), a1T
	}
	this.dU = function() {
		aRu = new Array(a9.eV), aRv[0] = aRw(255), aRv[1] = aRw(0)
	}, this.tU = function() {
		var a7, player, aS3, aIw, im, hf, aS5, aS7, aS8, lx = bJ.s.lx,
			a50 = bJ.s.a50,
			a51 = bJ.s.a51,
			aRo = bJ.s.aRo,
			aS9 = aRu,
			aSA = a9.eI,
			aSB = -1,
			eY = bJ.s.og,
			aSC = at.a1,
			aSD = at.j7,
			aSE = bO.ej << 4,
			eN = hw,
			eC = eN / xI,
			ly = hv / eN,
			lz = hx / eN,
			hg = (aSC + hv) / eN - ly,
			hj = (aSD + hx) / eN - lz,
			hH = tV;
		for (bJ.h2.ow(a9.eI, bJ.a3s.a3t) && (aSB = bK.fA[3]), hH.imageSmoothingEnabled = eN < 9, b6.pT.textAlign(hH, 1), b6.pT.textBaseline(hH, 1), a7 = 0; a7 < eY; a7++) player = a50[a7] >> 3, im = a51[a7], aS3 = .9 + .1 * Math.log10(im), aIw =
			(hf = lx[a7]) % aSE / 16 - aS3, hf = aSD * (Math.floor(hf / aSE) / 16 - aS3 - lz) / hj, aS5 = -2 * (aS8 = eN * aS3) * (1 + (aS7 = +(player === aSA)) / 8), aS7 = aS7 * aS8 / 4, (aS8 = aSC * (aIw - ly) / hg) < aS5 || hf < aS5 || aSC +
			aS7 < aS8 || aSD + aS7 < hf || (aIw = 2 * aS3 * eC, aS5 = aS3 * eN, void 0 === (aS7 = aS9[player]) && (aS9[player] = aS7 = v8(player)), player === aSA && (hH.setTransform(aIw, 0, 0, aIw, aS8 - 2 * aIw, hf - 2 * aIw), hH.drawImage(aRv[
				+(a7 === aSB)], 0, 0)), hH.setTransform(aIw, 0, 0, aIw, aS8, hf), hH.drawImage(aS7, 0, 0), (aS3 = Math.floor(function(im) {
				if (im < 1e3) return .42;
				if (im < 1e4) return .34;
				if (im < 1e6) return .26;
				if (im < 1e8) return .19;
				return .15
			}(im) * aS5)) < 6) || (hH.setTransform(1, 0, 0, 1, 0, 0), hH.fillStyle = aRo[a7] ? b7.n6 : b7.mY, hH.font = b6.pT.rV(1, aS3), hH.fillText(b6.zG.xx(im), aS8 + aS5, hf + aS5 + .1 * aS3));
		hH.imageSmoothingEnabled = !1, hH.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aRM() {
	var a1T;
	this.dU = function() {
		a1T = a1T || bL.s.aSH(20, bc.aSI[7])
	}, this.tU = function() {
		var mI = hw;
		if (!(5 <= mI)) {
			var aSC = at.a1,
				aSD = at.j7,
				ly = hv / mI,
				lz = hx / mI,
				mB = (aSC + hv) / mI,
				mC = (aSD + hx) / mI,
				g7 = -20 * mI,
				aSJ = .5 * g7,
				aSE = bO.ej << 4,
				eY = bJ.s.og,
				lx = bJ.s.lx,
				aSK = a1T,
				hH = tV;
			3 < mI && (hH.globalAlpha = .5 * (5 - mI));
			for (var a7 = 0; a7 < eY; a7++) {
				var hf = lx[a7],
					ef = aSC * (hf % aSE / 16 - ly) / (mB - ly) + aSJ,
					hf = aSD * (Math.floor(hf / aSE) / 16 - lz) / (mC - lz) + aSJ;
				aSC < ef || aSD < hf || ef < g7 || hf < g7 || (hH.setTransform(mI, 0, 0, mI, ef, hf), hH.drawImage(aSK, 0, 0))
			}
			hH.globalAlpha = 1, hH.setTransform(mI, 0, 0, mI, 0, 0)
		}
	}
}

function aRI() {
	this.iS = function() {
		for (var aRY, aRH, aRn = bJ.s.aRn, lx = bJ.s.lx, aRl = bJ.s.aRl, a7 = bJ.s.og - 1; 0 <= a7; a7--) aRY = lx[a7], 0 !== (aRH = aRn[a7]) && aRY === aRl[a7] && (! function(a7, aSO, hT) {
			var il, player = bJ.s.a50[a7] >> 3,
				hT = aSO + bI.hJ[hT] << 2,
				a7 = bJ.s.a51[a7];
			if (bZ.aSP(player), aY.eP(hT)) il = a9.eV;
			else {
				if ((il = aY.eQ(hT)) === player) return hT = b6.fu.fx(player, a7), bZ.fy(player, a7 - hT, 12);
				if (!eR(player, il)) return b4.jj.oE(player, il, a7)
			}
			aZ.iz(player, il) || aZ.jI(player) ? (ac.g0[player].push(aSO << 2), aZ.ii(player, a7, il), aB.ij(player, !0)) : bZ.fy(player, a7, 12)
		}(a7, bI.i2(aRY), aRH - 1), bJ.aE5.aRd(a7))
	}, this.aSQ = function(player, eK, hT, lu) {
		if (0 !== hT) {
			var aSA = a9.eI;
			if (b6.fu.gl(aSA) && eR(player, aSA) && player !== aSA && 0 !== ac.gF[aSA].length) {
				var aRP = eK + bI.hJ[--hT] << 2;
				if (aY.eP(aRP) || eR(player, aY.eQ(aRP))) {
					for (var em = !1, a7 = 0; a7 < 4; a7++)
						if (aRP = eK + bI.hJ[a7] << 2, aY.eT(aRP) && !aY.eP(aRP) && aY.eQ(aRP) === aSA) {
							em = !0;
							break
						} em && (aJ.a3u(719, 0), aJ.z3(180, L(399, [ac.zE[player]]), 719, player, b7.n5, b7.mV, -1, !0, void 0, {
						es: 1,
						lu: lu
					}))
				}
			}
		}
	}
}

function aRE() {
	this.aSR = null, this.jv = 512, this.os = 8, this.og = 0, this.aSS = 0, this.a50 = new Uint16Array(this.jv), this.aRk = new Uint32Array(this.jv), this.aRl = new Uint32Array(this.jv), this.lx = new Uint32Array(this.jv), this.aRm = new Uint16Array(
			this.jv), this.a51 = new Uint32Array(this.jv), this.aRi = new Uint16Array(this.jv), this.aRU = new Uint16Array(this.jv), this.aRn = new Uint8Array(this.jv), this.aRo = new Uint8Array(this.jv), this.aRp = new Uint32Array(this.jv), this
		.oe = new Uint8Array(a9.eV), this.aRT = new Uint16Array(this.os * a9.eV), this.dU = function() {
			this.aSS = 0, this.og = 0, this.aSR = new Uint8Array(bO.ej + bO.ek), this.oe.fill(0)
		}, this.ov = function(player) {
			var eY = this.og,
				aST = bI.i1(bK.fA[0]),
				aSU = this.oe[player],
				aSV = (player << 3) + aSU,
				im = (this.a50[eY] = aSV, this.aRk[eY] = aST, this.lx[eY] = aST, this.aRl[eY] = bI.i1(bK.fA[1]), this.aRm[eY] = 0, bK.f6[0]);
			im < 60 ? (b6.fu.fv(player, 60 - im), this.a51[eY] = 60) : this.a51[eY] = im, this.aRi[eY] = bJ.i4.ov(eY, bI.i3(aST)), this.aRU[eY] = this.aSS, this.aRn[eY] = bK.fA[2], this.aRo[eY] = 0, this.aRp[eY] = 0, this.aSS = this.aSS + 1 & 1023,
				this.aRT[aSV] = eY, this.oe[player] = aSU + 1, this.og++, bJ.aRH.aSQ(player, bK.fA[1], bK.fA[2], this.aRU[eY])
		}, this.nx = function() {
			var aRS = bK.fA[3];
			this.aRk[aRS] = this.lx[aRS], this.aRl[aRS] = bI.i1(bK.fA[1]), this.aRm[aRS] = 0, this.aRn[aRS] = bK.fA[2], bJ.aRH.aSQ(this.a50[aRS] >> 3, bK.fA[1], bK.fA[2], this.aRU[aRS])
		}, this.iS = function() {
			bJ.aRH.iS();
			var a7, g6 = a9.eI,
				dk = bJ.h2.aE2(g6),
				rM = (! function(rM) {
					var a7, aSa, aSb, aSc, aSd, aST, aSh, aSi, eb, g7, aRk = rM.aRk,
						aRl = rM.aRl,
						lx = rM.lx,
						a51 = rM.a51,
						aRo = rM.aRo,
						aRm = rM.aRm,
						aRi = rM.aRi,
						gM = ac.gM,
						a50 = rM.a50,
						rM = rM.og,
						aSE = bO.ej << 4;
					for (a7 = rM - 1; 0 <= a7; a7--) aSb = lx[a7], aSa = aRl[a7], aSb !== aSa && (aST = aRk[a7], aSh = aSa % aSE - (aSd = aST % aSE), aSi = ~~((aSa + .5) / aSE) - (aST = ~~((aST + .5) / aSE)), eb = ~~Math.sqrt(aSh * aSh + aSi *
						aSi + .5), g7 = 15e4 + 25e3 * bH.log10(a51[a7]), g7 += 5e4 * !gM[a50[a7] >> 3], aRo[a7] && (g7 = bH.dl(g7, 5)), 65535 <= (g7 = aRm[a7] + Math.max(~~((g7 + .5) / eb), 1)) ? lx[a7] = aSc = aSa : (aRm[a7] = g7, lx[
						a7] = aSc = aSd + bH.dl(g7 * aSh, 65536) + aSE * (aST + bH.dl(g7 * aSi, 65536))), aRi[a7] = bJ.i4.aSk(aRi[a7], aSb, aSc))
				}(this), ! function(rM) {
					if (bb.jb() % 2 == 1) {
						var a7, k3, kP, es, et, aSl, xd, aSm, gy, hN, ly, lz, aST, aSn, aSo, aSp, vR, eY = rM.og,
							lx = rM.lx,
							a50 = rM.a50,
							a51 = rM.a51,
							aRp = rM.aRp,
							aRo = rM.aRo,
							i4 = bJ.i4.i4,
							aSr = i4.length,
							aSs = bJ.i4.aSs,
							aSE = bO.ej << 4,
							aSt = a9.ie,
							aPg = bc.eW,
							g7 = (eY - 1) * (bH.dl(bb.jb(), 2) % 2);
						for (a7 = 0; a7 < eY; a7++)
							for (k3 = Math.abs(a7 - g7), aST = lx[k3], kP = bI.i3(aST), gy = a50[k3] >> 3, ly = aST % aSE, lz = ~~((aST + .5) / aSE), aSp = a51[k3], es = 0; es < 9; es++)
								if (!((aSl = kP + aSs[es]) < 0 || aSr <= aSl))
									for (aSm = i4[aSl], xd = aSm.length, et = 0; et < xd; et++) aSn = aSm[et], vR = a50[aSn] >> 3, gy == vR || aSt && aPg[gy] === aPg[vR] && aPg[gy] || (vR = lx[aSn], (hN = ly - vR % aSE) * hN + (hN = lz - ~~((vR +
										.5) / aSE)) * hN < 14400 && ((vR = a51[aSn]) <= aSp ? aSo = Math.max(1, bH.dl(vR + bH.dl(aSp - vR, 10), 10)) : (aSo = Math.max(1, bH.dl(aSp, 10)), aRp[aSn] = Math.min(aRp[aSn] + aSo, 4294967295)),
										a51[aSn] = Math.max(vR - aSo, 0), aRo[aSn] = 4))
					}
				}(this), ! function(rM) {
					if (bb.jb() % 5 == 3) {
						var a7, im, a51 = rM.a51,
							gM = ac.gM,
							a50 = rM.a50,
							aRp = rM.aRp,
							aRo = rM.aRo,
							eY = rM.og;
						for (a7 = 0; a7 < eY; a7++) im = a51[a7], gM[a50[a7] >> 3] ? a51[a7] = Math.max(im - Math.max(1, im >> 7), 0) : (a51[a7] = Math.max(im - Math.max(1, im >> 11), 0), aRo[a7] || (im = aRp[a7]) && (im = Math.max(im >> 3, 1),
							a51[a7] = Math.min(a51[a7] + (im << 1), 4294967295), aRp[a7] -= im))
					}
				}(this), this),
				a51 = rM.a51,
				aRo = rM.aRo;
			for (a7 = rM.og - 1; 0 <= a7; a7--) aRo[a7] = aRo[a7] >> 1, 0 === a51[a7] && bJ.aE5.aRd(a7);
			bZ.fy(g6, dk - bJ.h2.aE2(g6), 15)
		}
}

function aRF() {
	this.aSu = 32, this.ef = 0, this.eh = 0, this.i5 = 0, this.aSv = 0, this.aSw = 4, this.i4 = null, this.aSs = new Int16Array(9), this.dU = function() {
		this.i5 = 1 + bH.dl(bO.ej - 1, this.aSu), this.aSv = 1 + bH.dl(bO.ek - 1, this.aSu), this.i4 = new Array(this.i5 * this.aSv), b6.pd.a13(this.i4);
		var ef, eh, aSs = this.aSs,
			a1 = this.i5;
		for (ef = -1; ef <= 1; ef++)
			for (eh = -1; eh <= 1; eh++) aSs[3 * (1 + eh) + 1 + ef] = eh * a1 + ef
	}, this.ov = function(aSy, a7) {
		return this.i4[a7].push(aSy), this.i4[a7].length - 1
	}, this.aSk = function(aSz, aST, aSa) {
		var aT0, aT1, aST = bI.i3(aST),
			aSa = bI.i3(aSa);
		return aST === aSa ? aSz : (aT0 = this.i4[aST].pop(), this.i4[aST].length === aSz ? this.ov(aT0, aSa) : (aT1 = this.i4[aST][aSz], this.i4[aST][aSz] = aT0, bJ.s.aRi[aT0] = aSz, this.ov(aT1, aSa)))
	}
}

function aRK() {
	function zx(aSa, aT2) {
		if (! function(aSa, aRQ) {
				var hM = bI.i2(aSa),
					aT6 = Math.abs(bI.eg(aRQ) - bI.eg(hM)),
					hM = Math.abs(bI.ei(aRQ) - bI.ei(hM));
				return 0 !== Math.max(aT6, hM) && (function(aST, aSa, aT6, aT7) {
					var aT9 = bI.hi(aST),
						aST = bI.hl(aST),
						aTB = bI.hi(aSa),
						aSa = bI.hl(aSa),
						aTB = aTB - aT9,
						aSa = aSa - aST,
						aTF = Math.abs(aTB),
						aTG = Math.abs(aSa),
						aTB = 0 < aTB ? 1 : 3,
						aSa = 0 < aSa ? 2 : 0;
					aTG < aTF ? aTJ(aT9, aST, aT9 + aTF, aST + aTG, aTB, aSa, aT6) : aTJ(aST, aT9, aST + aTG, aT9 + aTF, aSa, aTB, aT7)
				}(aSa, bI.i1(aRQ), aT6, hM), !0)
			}(aSa, aT2)) return !1;
		if (0 === bK.f3[0]) return !!aY.h1(aT2 << 2);
		if (! function(aRQ) {
				if (aY.h1(aRQ << 2)) return 1;
				return function(aRQ) {
					var a7, hT, aSR = bJ.s.aSR,
						aTN = bI,
						eY = bK.f3[0],
						aTO = 4 * aRQ;
					for (a7 = eY - 1; 0 <= a7; a7--) {
						hT = aSR[a7];
						var aTP = aTO;
						if (aTO = aTN.i7(aTO, hT + 2 & 3), aY.h1(aTO)) return bK.f3[0] = a7, bK.fA[1] = aTO >> 2, bK.fA[2] = 1 + hT, bK.fA[4] = aTP, 1
					}
					return
				}(aRQ)
			}(aT2)) return !1;
		if (bK.fA[2] && aY.ed(bK.fA[4])) return !1;
		var a7, aT2 = bI.i2(aSa),
			vJ = a9u,
			aSR = bJ.s.aSR,
			eY = bK.f3[0] - 1,
			aTO = 4 * aT2,
			hK = bI.hK;
		for (a7 = 0; a7 < eY; a7++)
			if (aTO += hK[aSR[a7]], 0 !== vJ[aTO + 3] || 2 !== vJ[aTO + 2]) return !!void 0;
		return !!1
	}

	function aTJ(aT9, aTA, aTB, aTC, aTH, aTI, aT6) {
		for (var eh, aSR = bJ.s.aSR, g7 = 0, aTK = 0, j7 = aTC - aTA, a1 = aTB - aT9, aTL = aT9 % 16, a7 = 1; a7 <= aT6; a7++) aSR[g7++] = aTH, aSR[g7] = aTI, g7 += (eh = (j7 * (aTL + (a7 << 4)) + .5) / a1 >> 4) - aTK, aTK = eh;
		bK.fF(bK.f3, g7)
	}
	this.kL = function(player, aT2) {
		var hT, hM, gx = bI.hV(player, aT2);
		return gx !== aT2 && (hT = bI.hL(gx, aT2), hM = bI.i6(gx, hT), !(!aY.h1(hM << 2) && (hT = bI.hS(gx, aT2, hT), hM = bI.i6(gx, hT), !aY.h1(hM << 2)) || (bK.fA[0] = hM, bK.fA[1] = aT2, bK.fA[2] = 0, hM !== aT2 && (!zx(bI.i1(hM), aT2) ||
			0 !== bK.fA[2] && bI.hb(player, bK.fA[1] + bI.hJ[bK.fA[2] - 1] << 2)))))
	}, this.ox = function(aT2) {
		var aST = bJ.s.lx[bK.fA[3]];
		return bK.fA[1] = aT2, bK.fA[2] = 0, zx(aST, aT2)
	}
}

function aRG() {
	var xI = 32,
		xH = new Array(2);

	function v8(et) {
		var ef, eh, eK, hj, hg, hB = xI,
			a1T = b6.pT.v8(hB, hB),
			hH = b6.pT.getContext(a1T, !0),
			hE = b6.pT.getImageData(hH, hB, hB),
			vJ = hE.data,
			kP = (hB >> 1) - .5,
			kQ = Math.sqrt(kP * kP);
		for (vJ.fill(255), eh = 0; eh < hB; eh++)
			for (ef = 0; ef < hB; ef++) hg = ef - kP, hj = eh - kP, eK = 4 * (eh * hB + ef), hg = 714 * (kQ - Math.sqrt(hg * hg + hj * hj)) / kQ, vJ[2 + eK] = et, vJ[3 + eK] = 255 < hg ? 0 : hg;
		return hH.putImageData(hE, 0, 0), a1T
	}
	this.a3t = -1, this.dU = function() {
		this.a3t = -1, xH[0] || (xH[0] = v8(255), xH[1] = v8(0))
	}, this.aTR = function(hH, eC, ef, eh, dz, a7) {
		b6.fu.gl(a9.eI) && (hH.setTransform(eC *= 4 / 3 * .625, 0, 0, eC, ef - (dz *= 4 / 3), eh - dz), hH.drawImage(xH[+(bJ.s.aRU[a7] === this.a3t)], 0, 0))
	}
}

function dX() {
	this.aNK = [L(400), L(401), L(402), L(403), L(404), L(405), L(406), L(407), L(408), L(409), L(410), L(411), L(412)];
	var aTS = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", ""];
	this.aNJ = new Array(aTS.length), this.dU = function() {
		var g = bf.dp.data[155].value.split(";"),
			kP = g.length;
		if (function() {
				for (var eY = aTS.length, a7 = 0; a7 < eY; a7++) bT.aNJ[a7] = aTS[a7]
			}(), !(kP > aTS.length))
			for (var a7 = 0; a7 < kP; a7++) g[a7].length && (this.aNJ[a7] = g[a7])
	}, this.aNM = function(e0, code) {
		for (var aNJ = this.aNJ, aTU = aTS, pA = (aNJ[e0] = code, ""), eY = aNJ.length, aTV = [], a7 = 0; a7 < eY; a7++) aTV.push(aNJ[a7] === aTU[a7] ? "" : aNJ[a7]);
		eY--;
		for (a7 = 0; a7 < eY; a7++) pA += aTV[a7] + ";";
		bf.rC.rD(155, pA += aTV[eY])
	}, this.aNI = function() {
		bf.rC.rD(155, ""), this.dU()
	}, this.et = function(code, e0) {
		return code === this.aNJ[e0] || code === this.aNJ[e0 + 1]
	}
}

function dS() {
	var aTW = new Audio(
		"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
		);
	this.aTX = function() {
		aTW && aTW.play()
	}
}

function cT() {
	this.a6N = function() {
		var aTa;
		return !(ah.jf < 3 || ac.gM[kw[0]] >= a9.jO >> 1) && (a9.ie ? (aTa = aa.aF8(), !(2 * aa.aF9(bd.kt()) >= aTa)) : function() {
			var aTa = aa.aF8();
			if (2 * ac.ga[kw[0]] >= aTa) return !1;
			return !0
		}())
	}
}

function c4() {
	this.dU = function() {
		if (0 === a9.data.sResourcesType) {
			for (var aSU = a9.je, ga = ac.ga, a7 = 0; a7 < aSU; a7++) ga[a7] = 512;
			var aSV = a9.vr,
				ju = aA.ju,
				im = aA.im;
			for (a7 = aSU; a7 < aSV; a7++) ga[a7] = ju[im[a7]]
		} else(1 === a9.data.sResourcesType ? function() {
			for (var eY = a9.vr, ga = ac.ga, sResourcesValue = a9.data.sResourcesValue, a7 = 0; a7 < eY; a7++) ga[a7] = sResourcesValue
		} : function() {
			for (var eY = a9.vr, ga = ac.ga, sResourcesData = a9.data.sResourcesData, a7 = 0; a7 < eY; a7++) ga[a7] = sResourcesData[a7]
		})();
		bZ.lR[8] = ac.ga[a9.eI]
	}
}

function dI() {
	var aTf = 501,
		aTh = (this.aTg = new Uint32Array(aTf), this.a27 = new Uint32Array(aTf), this.a9H = new Uint16Array(aTf), this.aNS = 0, 1),
		aTi = 0;

	function aTl(self) {
		self.max.fill(0)
	}

	function aTn(self, a7) {
		self.max[0] = Math.max(self.aTg[a7], self.max[0]), self.max[1] = Math.max(self.a27[a7], self.max[1]), self.max[2] = Math.max(self.a9H[a7], self.max[2])
	}
	this.max = [0, 0, 0], this.aTj = 0, this.lR = new Array(21), this.aTk = null, this.dV = function() {
		this.aTk = [L(413), L(414), L(415), L(416), L(417), L(418), L(419), L(420), L(261), L(262), L(421), L(422), L(423), L(424), "", L(425), L(426), L(427), L(221), L(428), L(429)]
	}, this.dU = function() {
		this.aNS = 0, aTh = 1, this.aTj = 0, aTi = 0, aTl(this), this.lR.fill(0)
	}, this.oq = function(player, hu) {
		b6.fu.a22(player) && (this.lR[0] += hu + 1, this.lR[1]++, this.lR[12] += bK.f6[1])
	}, this.oG = function(player, nt) {
		__fx.donationsTracker.logDonation(player, nt, bK.f6[0]);
		player === a9.eI && (aJ.oG(bK.f6[0], bK.f6[1], nt), this.lR[12] += bK.f6[1], this.lR[16] += bK.f6[0]), nt === a9.eI && (aJ.a5E(bK.f6[0], player), this.lR[10] += bK.f6[0])
	}, this.ot = function(player) {
		b6.fu.a22(player) && (this.lR[2]++, this.lR[12] += bK.f6[1])
	}, this.p5 = function(player) {
		b6.fu.a22(player) && (this.lR[19]++, this.lR[12] += bK.f6[1])
	}, this.aSP = function(player) {
		b6.fu.a22(player) && this.lR[20]++
	}, this.fy = function(player, a2j, e0) {
		b6.fu.a22(player) && (this.lR[e0] += a2j)
	}, this.iS = function() {
		var self;
		this.aTj || 0 < aTi-- || ((self = this).aTg[self.aNS] = ac.gM[a9.eI], self.a27[self.aNS] = ac.ga[a9.eI], self.a9H[self.aNS] = aa.a9I(a9.eI), aTn(self, self.aNS), self.aNS++, self.aNS === aTf && function(self) {
			aTl(self), aTn(self, 0), self.aNS = 1 + bH.dl(aTf, 2);
			for (var a7 = 1; a7 < self.aNS; a7++) self.aTg[a7] = self.aTg[2 * a7], self.a27[a7] = self.a27[2 * a7], self.a9H[a7] = self.a9H[2 * a7], aTn(self, a7);
			aTh *= 2
		}(self), aTi = aTh - 1, ba.lI(), 0 === ac.lV[a9.eI] && (self.aTj = bb.jb()))
	}
}

function dJ() {
	this.a1 = 0, this.j7 = 0, this.rz = 0, this.s0 = 0, this.aTp = 0, this.aTq = 0, this.a6a = 0, this.sg = 0;
	var aTs = this.aTr = 0;
	this.aTt = 0, this.aTu = 0, this.aTv = 0, this.a5z = 0, this.e0 = 0, this.a8u = null, this.xD = !1, this.aTw = -1, this.aTx = !1, this.aTy = [0, 0], this.dV = function() {
		this.a8u = [L(430), L(116, 0, "Balance"), L(115, 0, "Interest"), L(431)]
	}, this.dU = function() {
		this.xD = !1, this.aTw = -1, this.aTx = !1, this.resize()
	}, this.resize = function() {
		this.a1 = at.a1 < 1.369 * at.j7 ? at.a1 : 1.369 * at.j7;
		var eb = u.v.r8() && at.a1 < at.j7 ? 1 : u.v.r8() ? .8 : at.a1 < at.j7 ? .65 : .59;
		this.a1 = Math.floor(eb * this.a1), this.a1 -= u.v.r8() && at.a1 < at.j7 ? 2 * bY.gap + 2 : 0, this.j7 = Math.floor(this.a1 / 1.369), this.a5z = Math.floor(this.j7 / 150), this.a5z = Math.max(this.a5z, 1.5), this.rz = Math.floor(1 + .02 *
			this.a1), this.s0 = Math.floor(1 + .04 * this.a1), this.a6a = this.s0, aTs = Math.floor(.75 * this.a6a), this.sg = Math.floor(1 + .075 * this.a1), this.aTt = Math.floor(1 + .1125 * this.a1), this.aTu = Math.floor(this.a1 * (u.v
			.r8() ? .03 : .029)), this.aTu = Math.max(this.aTu, 4), this.aTv = Math.floor(.035 * this.a1), this.aTv = Math.max(this.aTv, 4), this.aTr = this.j7 - 2 * this.a6a - this.sg - this.aTt, this.xD && this.aTz()
	}, this.gm = function(kk, kl) {
		var vu, vt;
		return !!this.xD && (vt = kk, vu = kl, kk -= bH.dl(at.a1 - this.a1, 2), kl -= bH.dl(at.j7 - this.j7, 2), kk < 0 || kl < 0 || kk >= this.a1 || kl >= this.j7 || kk >= this.a1 - this.aTt && kl < this.aTt ? -1 !== aI.gm(vt, vu) || b8.gm(vt,
			vu) || this.r1() : kl < this.aTt || (kl < this.j7 - this.sg ? (this.aTx = !0, this.aTw = (kk - 2 * this.rz - this.aTp) / this.aTq, 3 !== this.e0 && (bb.dc = !0)) : (vt = (vt = Math.floor(kk / (this.a1 / this.a8u.length))) <
			0 ? 0 : vt >= this.a8u.length ? this.a8u.length - 1 : vt) !== this.e0 && (this.e0 = vt, this.aTz(), bb.dc = !0)), !0)
	}, this.a0B = function(kk, kl) {
		return this.aTy[0] = kk, this.aTy[1] = kl, !(!this.xD || !this.aTx || (kk -= bH.dl(at.a1 - this.a1, 2), kl = this.aTw, this.aTw = (kk - 2 * this.rz - this.aTp) / this.aTq, (0 <= this.aTw && this.aTw <= 1 || 0 <= kl && kl <= 1) && (bb
			.dc = !0), 0))
	}, this.a0a = function() {
		this.aTx && (this.aTx = !1)
	}, this.a0m = function() {
		this.xD ? this.r1() : this.show()
	}, this.show = function() {
		bZ.aNS < 2 || (this.xD = !0, this.aTz())
	}, this.r1 = function() {
		this.xD = !1, this.aTw = -1, bb.dc = !0
	}, this.aTz = function() {
		this.e0 < 2 ? this.aTp = aM.measureText(b6.zG.xx(bZ.max[this.e0]), b6.pT.rV(0, this.aTu)) : 2 === this.e0 && (this.aTp = aM.measureText(b6.zG.a2c(6, 2), b6.pT.rV(0, this.aTu))), this.aTq = this.a1 - 2 * this.rz - this.aTp - this.s0
	}, this.lI = function() {
		this.xD && this.aTz()
	}, this.tU = function() {
		this.xD && this.a6r()
	}, this.a6r = function() {
		var ef = bH.dl(at.a1 - this.a1, 2),
			eh = bH.dl(at.j7 - this.j7, 2);
		tV.setTransform(1, 0, 0, 1, ef, eh), tV.fillStyle = b7.mV, tV.fillRect(0, this.aTt, this.a1, this.j7 - this.aTt), this.aU0(), this.aMH(), tV.strokeRect(0, 0, this.a1, this.j7), b6.pT.textAlign(tV, 2), tV.font = b6.pT.rV(0, this.aTu),
			0 === this.e0 ? this.aU1(bZ.aTg, ef, eh) : 1 === this.e0 ? this.aU1(bZ.a27, ef, eh) : 2 === this.e0 ? this.aU2(ef, eh) : 3 === this.e0 && (this.aU3(ef, eh), this.aU4(ef, eh)), aI.a4J(Math.floor(ef + this.a1 - .725 * this.aTt), Math
				.floor(eh + .275 * this.aTt), Math.floor(.45 * this.aTt)), tV.setTransform(1, 0, 0, 1, 0, 0)
	}, this.aU0 = function() {
		var a7, dk;
		for (tV.lineWidth = this.a5z, b6.pT.textBaseline(tV, 1), b6.pT.textAlign(tV, 1), tV.strokeStyle = b7.mY, tV.font = b6.pT.rV(1, this.aTv), dk = this.a1 / this.a8u.length, tV.fillStyle = b7.mu, tV.fillRect(this.e0 * dk, this.j7 - this.sg,
				dk, this.sg), tV.fillStyle = b7.mY, tV.fillRect(0, this.j7 - this.sg - .5 * this.a5z, this.a1, this.a5z), a7 = 1; a7 <= 3; a7++) tV.fillRect(a7 * dk, this.j7 - this.sg, this.a5z, this.sg);
		for (a7 = this.a8u.length - 1; 0 <= a7; a7--) tV.fillText(b6.wu.a1f(this.a8u[a7], 0, .9 * dk), (a7 + .5) * dk, this.j7 - .46 * this.sg)
	}, this.aMH = function() {
		tV.fillStyle = b7.nK, tV.fillRect(0, 0, this.a1, this.aTt), tV.fillStyle = b7.mY, tV.fillRect(0, this.aTt - .5 * this.a5z, this.a1, this.a5z), tV.font = b6.pT.rV(1, .39 * this.aTt), tV.fillText(b6.wu.a1f(L(432), 0, .8 * this.a1), Math
			.floor(this.a1 / 2), Math.floor(.55 * this.aTt))
	}, this.aU1 = function(g, ef, eh) {
		var kP = bZ.max[this.e0],
			a15 = (tV.setTransform(1, 0, 0, 1, ef + 2 * this.rz + this.aTp, eh + this.a6a + this.aTt), tV.lineWidth = 2, this.aTr / Math.sqrt(kP));
		tV.beginPath(), tV.moveTo(this.aTq, this.aTr - a15 * Math.sqrt(g[bZ.aNS - 1]));
		for (var a7 = bZ.aNS - 2; 0 <= a7; a7--) tV.lineTo(a7 * this.aTq / (bZ.aNS - 1), this.aTr - a15 * Math.sqrt(g[a7]));
		tV.stroke();
		ef = this.a4J(g, a15, .5);
		ef < .95 && tV.fillText(b6.zG.xx(kP), -this.rz, 0), .05 < Math.abs(ef - .5) && tV.fillText(b6.zG.xx(Math.floor(kP / 4)), -this.rz, Math.floor(this.aTr / 2)), .05 < ef && tV.fillText("0", -this.rz, this.aTr)
	}, this.aU2 = function(ef, eh) {
		tV.setTransform(1, 0, 0, 1, ef + 2 * this.rz + this.aTp, eh + this.a6a + this.aTt), tV.lineWidth = 2;
		var a15 = this.aTr / Math.max(bZ.max[this.e0], 1);
		tV.beginPath(), tV.moveTo(this.aTq, this.aTr - a15 * bZ.a9H[bZ.aNS - 1]);
		for (var a7 = bZ.aNS - 2; 0 <= a7; a7--) tV.lineTo(a7 * this.aTq / (bZ.aNS - 1), this.aTr - a15 * bZ.a9H[a7]);
		tV.stroke();
		ef = this.a4J(bZ.a9H, a15, 1), eh = bZ.max[this.e0] / 100;
		ef < .95 && tV.fillText(b6.zG.a2c(eh, 2), -this.rz, 0), .05 < Math.abs(ef - .5) && tV.fillText(b6.zG.a2c(eh / 2, 2), -this.rz, Math.floor(this.aTr / 2)), .05 < ef && tV.fillText(b6.zG.a2c(0, 2), -this.rz, this.aTr)
	}, this.aU3 = function(ef, eh) {
		tV.setTransform(1, 0, 0, 1, ef + .34 * this.a1, eh + 2 * aTs + this.aTt), b6.pT.textAlign(tV, 2);
		for (var a8f = this.j7 - 4 * aTs - this.sg - this.aTt, g = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], a7 = 9; 0 <= a7; a7--) tV.fillText(b6.wu.a1f(bZ.aTk[g[a7]], 0, .31 * this.a1), 0, a7 * a8f / 9);
		var f0 = bZ.lR;
		for (tV.setTransform(1, 0, 0, 1, ef + .39 * this.a1, eh + 2 * aTs + this.aTt), b6.pT.textAlign(tV, 0), tV.fillText(b6.zG.a2c(100 * f0[0] / (1024 * Math.max(f0[1], 1)), 1), 0, 0), a7 = 8; 1 <= a7; a7--) tV.fillText(f0[g[a7]].toString(), 0,
			a7 * a8f / 9);
		tV.fillText(b6.zG.a2c(100 * (1 - ac.gM[a9.eI] / f0[7]), 0), 0, a8f)
	}, this.aU4 = function(ef, eh) {
		tV.setTransform(1, 0, 0, 1, ef + .79 * this.a1, eh + 2 * aTs + this.aTt), b6.pT.textAlign(tV, 2);
		var a7, a8f = this.j7 - 4 * aTs - this.sg - this.aTt;
		for (tV.fillStyle = b7.mp, a7 = 2; 0 <= a7; a7--) tV.fillText(b6.wu.a1f(bZ.aTk[a7 + 8], 0, .31 * this.a1), 0, a7 * a8f / 9);
		tV.fillText(b6.wu.a1f(bZ.aTk[18], 0, .31 * this.a1), 0, 3 * a8f / 9), tV.fillStyle = b7.mo, tV.fillText(b6.wu.a1f(bZ.aTk[11], 0, .31 * this.a1), 0, 4 * a8f / 9), tV.fillStyle = b7.n7, tV.fillText(b6.wu.a1f(bZ.aTk[13], 0, .31 * this.a1),
				0, 5 * a8f / 9), tV.fillText(b6.wu.a1f(bZ.aTk[15], 0, .31 * this.a1), 0, 6 * a8f / 9), tV.fillText(b6.wu.a1f(bZ.aTk[16], 0, .31 * this.a1), 0, 7 * a8f / 9), tV.fillText(b6.wu.a1f(bZ.aTk[12], 0, .31 * this.a1), 0, 8 * a8f / 9), tV
			.fillStyle = b7.n6, tV.fillText(b6.wu.a1f(bZ.aTk[17], 0, .31 * this.a1), 0, a8f), tV.fillStyle = b7.mp;
		var f0 = bZ.lR,
			aMV = f0[8] + f0[9] + f0[10] + f0[18],
			aMV = b6.zG.xx(aMV),
			aL6 = tV.measureText(aMV).width,
			ef = (tV.setTransform(1, 0, 0, 1, ef + .83 * this.a1 + aL6, eh + 2 * aTs + this.aTt), tV.fillText(b6.zG.xx(f0[8]), 0, 0), tV.fillText(b6.zG.xx(f0[9]), 0, a8f / 9), tV.fillText(b6.zG.xx(f0[10]), 0, 2 * a8f / 9), tV.fillText(b6.zG.xx(
				f0[18]), 0, 3 * a8f / 9), tV.fillStyle = b7.mo, tV.fillText(aMV, 0, 4 * a8f / 9), tV.fillStyle = b7.n7, tV.fillText(b6.zG.xx(f0[13]), 0, 5 * a8f / 9), tV.fillText(b6.zG.xx(f0[15]), 0, 6 * a8f / 9), tV.fillText(b6.zG.xx(f0[
				16]), 0, 7 * a8f / 9), tV.fillText(b6.zG.xx(f0[12]), 0, 8 * a8f / 9), f0[12] + f0[13] + f0[15] + f0[16]);
		tV.fillStyle = b7.n6, tV.fillText(b6.zG.xx(ef), 0, a8f), tV.fillStyle = b7.mY
	}, this.a4J = function(g, a15, a7S) {
		var a7, e, fG;
		return this.aTw < 0 || 1 < this.aTw ? .25 : (a7 = this.aTw * (bZ.aNS - 1), fG = g[e = Math.floor(a7)], fG += (a7 - e) * (g[e < bZ.aNS - 1 ? e + 1 : e] - fG), tV.strokeStyle = b7.mb, .04 < this.aTw && this.aU6(0, this.aTr - a15 * Math.pow(
				fG, a7S), a7 * this.aTq / (bZ.aNS - 1), this.aTr - a15 * Math.pow(fG, a7S)), .04 < fG / bZ.max[this.e0] && this.aU6(a7 * this.aTq / (bZ.aNS - 1), this.aTr, a7 * this.aTq / (bZ.aNS - 1), this.aTr - a15 * Math.pow(fG, a7S)), tV
			.fillStyle = b7.n9, tV.beginPath(), tV.arc(a7 * this.aTq / (bZ.aNS - 1), this.aTr - a15 * Math.pow(fG, a7S), Math.max(2, .014 * this.j7), 0, 2 * Math.PI), tV.fill(), g = this.aTw * bb.a9J, g = 0 === ac.lV[a9.eI] ? Math.floor(g *
				bZ.aTj) : Math.floor(g * bb.jb()), tV.fillStyle = b7.mY, tV.fillText(1 === a7S ? b6.zG.a2c(fG / 100, 2) : b6.zG.xx(Math.floor(fG)), -this.rz, this.aTr - a15 * Math.pow(fG, a7S)), b6.pT.textAlign(tV, 1), tV.fillText(aS.a98(g),
				a7 * this.aTq / (bZ.aNS - 1), this.aTr + this.aTu - (u.v.r8() ? 2 : 0) - this.a5z), b6.pT.textAlign(tV, 2), a15 * Math.pow(fG, a7S) / this.aTr)
	}, this.aU6 = function(ly, lz, mB, mC) {
		tV.beginPath(), tV.moveTo(ly, lz), tV.lineTo(mB, mC), tV.stroke()
	}
}

function bs() {
	this.aU7 = "https://", this.aU8 = this.aU7 + "territorial.io/", this.aNT = this.aU8 + "changelog", this.aNX = this.aU8 + "terms", this.aU9 = this.aU8 + "cookie_policy", this.aMt = this.aU8 + "privacy", this.aNW = this.aU8 + "tutorial", this.aNV =
		this.aU8 + "players", this.aNU = this.aU8 + "clans", this.zQ = this.aU8 + "clan-results", this.aAU = this.aU7 + "play.google.com/store/apps/details?id=territorial.io", this.zj = this.aU7 + "apps.apple.com/app/id1581110913", this.aUA = this
		.aU7 + "www.youtube.com/watch?v=toZTQ8aRdFc", this.aAV = this.aU7 + "discord.gg/pthqvpTXmh", this.aAW = this.aU7 + "www.instagram.com/davidtschacher/", this.xX =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function d1() {
	this.s = new aUB, this.wr = new aUC, this.dU = function() {
		this.s.dU()
	}, this.iS = function() {
		0 !== this.s.a5N && this.s.a5N--
	}
}

function aUC() {
	this.tU = function() {
		if (0 !== bL.s.a5N && (tV.globalAlpha = Math.min(bL.s.a5N / 580, 1), tV.drawImage(bL.s.aUF, 1 + aO.wp(), 1 + aO.wq()), tV.globalAlpha = 1, a9.gu)) {
			for (var ly = hv / hw, lz = hx / hw, mB = (at.a1 + hv) / hw, mC = (at.j7 + hx) / hw, g7 = bL.s.aUG * hw, aUH = bL.s.aUH, a7 = a9.je - 1; 0 <= a7; a7--) ! function(a7, g7, ly, lz, mB, mC, aUH) {
				var highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[a7];
				if (highlight) g7 *= 2;
				0 === ac.lV[a7] || 0 === ac.gM[a7] || (mB = at.a1 * ((ac.i9[a7] + ac.iA[a7] + 1) / 2 - ly) / (mB - ly) - .5 * g7, ly = at.j7 * ((ac.iB[a7] + ac.iC[a7] + 1) / 2 - lz) / (mC - lz) - .5 * g7, mB > at.a1) || ly > at.j7 || mB < -
					g7 || ly < -g7 || (tV.setTransform(highlight ? hw * 2 : hw, 0, 0, highlight ? hw * 2 : hw, mB, ly), tV.drawImage(aUH[a9.ie ? bc.eW[a7] : 1], 0, 0))
			}(a7, g7, ly, lz, mB, mC, aUH);
			tV.setTransform(hw, 0, 0, hw, 0, 0)
		}
	}
}

function aUB() {
	this.aUG = 28, this.a5N = 0, this.aUF = null;
	var aUJ = this.aUH = null;

	function aUM(hB, aUN) {
		var ef, eh, eK, hg, a1T = b6.pT.v8(hB, hB),
			hH = b6.pT.getContext(a1T, !0),
			hE = b6.pT.getImageData(hH, hB, hB),
			vJ = hE.data,
			kP = (hB >> 1) - .5,
			aUO = .5 + kP;
		for (aUO *= aUO, eh = 0; eh < hB; eh++)
			for (ef = 0; ef < hB; ef++) hg = (hg = ef - kP) * hg + (hg = eh - kP) * hg, vJ[eK = 4 * (eh * hB + ef)] = aUN[0], vJ[1 + eK] = aUN[1], vJ[2 + eK] = aUN[2], vJ[3 + eK] = (aUO - hg) * aUN[3] / aUO;
		return hH.putImageData(hE, 0, 0), a1T
	}

	function aTR(a7, hH, a1T, hB) {
		var ef, y, highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[a7];
		if (highlight) hB *= 2;
		0 !== ac.lV[a7] && 0 !== ac.gM[a7] && (ef = ac.i9[a7] + ac.iA[a7] + 1 - hB - 2 >> 1, y = ac.iB[a7] + ac.iC[a7] + 1 - hB - 2 >> 1,
			highlight ? hH.drawImage(a1T[a9.ie ? bc.eW[a7] : a7 < a9.je ? 1 : 0], ef, y, hB, hB) :
			hH.drawImage(a1T[a9.ie ? bc.eW[a7] : a7 < a9.je ? 1 : 0], ef, y))
	}
	this.dU = function() {
		var rM;
		this.a5N = 700,
			function(rM) {
				var hB = rM.aUG;
				if (rM.aUH = [], aUJ = [], a9.ie)
					for (var a7 = 0; a7 <= a9.vy; a7++) rM.aUH.push(aUM(hB, bc.aSI[bc.k4[a7]])), aUJ.push(aUM(hB >> 1, bc.aSI[bc.k4[a7]]));
				else rM.aUH.push(aUM(hB, bc.aSI[7])), rM.aUH.push(aUM(hB, bc.aSI[4])), aUJ.push(aUM(hB >> 1, bc.aSI[7]))
			}(this),
			function(rM, aUP) {
				var a7, aUF = rM.aUF,
					hH = b6.pT.getContext(aUF, !0),
					eY = a9.eV,
					hB = rM.aUG >> 1;
				hH.imageSmoothingEnabled = !1, hH.setTransform(1, 0, 0, 1, 0, 0), aUP && hH.clearRect(0, 0, aUF.width, aUF.height);
				for (a7 = a9.je; a7 < eY; a7++) aTR(a7, hH, aUJ, hB)
			}(this, null !== (rM = this).aUF && rM.aUF.width === bO.ej - 2 && rM.aUF.height === bO.ek - 2 || (rM.aUF = b6.pT.v8(bO.ej - 2, bO.ek - 2), !1)), a9.gu || this.a2u()
	}, this.aSH = aUM, this.a2u = function() {
		for (var eY = a9.je, hB = this.aUG, aUH = this.aUH, hH = b6.pT.getContext(this.aUF, !0), a7 = 0; a7 < eY; a7++) aTR(a7, hH, aUH, hB)
	}
}

function d2() {
	function aUR() {
		8 === a9.jy && 1 === a9.yf && bN.yI.ye()
	}

	function aUQ(player) {
		a9.gu ? (ag.aDw(player), ah.aGr(), a9.k0 && a9.ok.iS()) : az.aAh(player)
	}
	this.o9 = function(player) {
		aJ.yr(player, player === a9.eI ? 21 : 22), aUQ(player), aUR()
	}, this.oh = function(player) {
		1 === a9.yf && 0 !== ac.lV[player] && 2 !== ac.a20[player] && aUQ(player), a9.yi--, a9.yh--, aJ.yr(player, 4), b6.fu.gk(2) && aS.lH(!0), aUR()
	}
}

function dC() {
	this.aPr = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.a8d = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", b7.mY, "rgb(170,170,170)"
	], this.aUS = [b7.mY, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", b7.mY, b7.mP], this.aUT = [b7.mP, b7.mY, b7.mY, b7.mY, b7.mP, b7.mP, b7.mP, b7.mP, b7.mY];
	var aUU = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"],
		aUV = (this.aGM = ["rgba(" + aUU[0] + ",", "rgba(" + aUU[1] + ",", "rgba(" + aUU[2] + ",", "rgba(" + aUU[3] + ",", "rgba(" + aUU[4] + ",", "rgba(" + aUU[5] + ",", "rgba(" + aUU[6] + ",", "rgba(" + aUU[7] + ",", "rgba(" + aUU[8] + ",",
			"rgba(" + aUU[9] + ","
		], this.aGN = ["rgb(" + aUU[0] + ")", "rgb(" + aUU[1] + ")", "rgb(" + aUU[2] + ")", "rgb(" + aUU[3] + ")", "rgb(" + aUU[4] + ")", "rgb(" + aUU[5] + ")", "rgb(" + aUU[6] + ")", "rgb(" + aUU[7] + ")", "rgb(" + aUU[8] + ")", "rgb(" + aUU[
			9] + ")"
		], this.z1 = null, this.aSI = [
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
	this.k4 = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.eW = new Uint8Array(a9.eV), this.w4 = new Uint16Array(a9.eV), this.w5 = new Uint16Array(this.k4.length + 1), this.w6 = new Uint16Array(this.k4.length), this.dV = function() {
		this.z1 = [L(433), L(434), L(435), L(436), L(437), L(438), L(439), L(440), L(441)]
	}, this.dU = function() {
		if (this.eW.fill(0), this.aUW(), a9.ie) {
			9 === a9.jy ? this.aUX() : a9.k0 ? function() {
				var colorsData = a9.data.colorsData;
				if (!a9.data.selectableColor)
					for (var a7 = a9.je - 1; 0 <= a7; a7--) colorsData[a7] = au.iv(262144);
				var aUg = 0,
					eo = 768,
					aPN = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
					teamPlayerCount = a9.data.teamPlayerCount;
				for (a7 = 0; a7 < 9; a7++)
					if (teamPlayerCount[a7]) {
						for (var eb = 0, es = 0; es < 3; es++) eb += Math.abs(aUV[a7][es] - aPN[es]);
						eb < eo && (aUg = a7, eo = eb)
					} var aUh = new Uint16Array(9);
				for (a7 = 0; a7 < 9; a7++) aUh[a7] = teamPlayerCount[a7];
				var k4 = bc.k4,
					aUi = new Uint8Array(9),
					g1 = (k4[0] = 0, 1);
				for (a7 = 1; a7 < 9; a7++) aUh[a7] && (aUi[a7] = g1, k4[g1++] = a7);
				var iu = a9.je,
					eW = bc.eW;
				aUh[aUg] ? (aUh[aUg]--, eW[0] = aUi[aUg]) : iu = 0;
				var et = 0;
				for (a7 = iu; a7 < a9.vr; a7++) {
					var k3 = k4[et];
					if (aUh[k3]) aUh[k3]--, eW[a7] = aUi[k3];
					else if (a7--, 9 <= ++et) return console.log("error 325")
				}
			}() : this.iS();
			for (var eY = a9.eV, w4 = bc.w4, w5 = bc.w5, w6 = bc.w6, eW = bc.eW, k4 = bc.k4, vx = k4.length, dp = new Array(vx), a7 = 0; a7 < vx; a7++) dp[a7] = [];
			for (a7 = 0; a7 < eY; a7++) dp[k4[eW[a7]]].push(a7);
			for (a7 = 1; a7 <= vx; a7++) w5[a7] = w5[a7 - 1] + dp[a7 - 1].length;
			for (a7 = 0; a7 < vx; a7++)
				for (var g1 = dp[a7].length, kP = w5[a7], k3 = 0; k3 < g1; k3++) w4[k3 + kP] = dp[a7][k3];
			var je = a9.je;
			for (a7 = 0; a7 < vx; a7++)
				for (g1 = dp[a7].length, kP = w5[a7], k3 = 0; k3 < g1; k3++)
					if (w4[k3 + kP] >= je) {
						w6[a7] = k3;
						break
					}
		}
	}, this.aUW = function() {
		for (var a7 = this.k4.length - 1; 0 <= a7; a7--) this.k4[a7] = a7
	}, this.aUX = function() {
		for (var a7 = a9.data.teamPlayerCount[7] - 1; 0 <= a7; a7--) this.eW[a7] = 1;
		for (a7 = a9.data.teamPlayerCount[7]; a7 < a9.eV; a7++) this.eW[a7] = 2;
		this.k4[1] = 7, this.k4[2] = 8
	}, this.iS = function() {
		var hP = new Uint8Array(a9.je),
			hQ = new Uint8Array(a9.je),
			aUa = new Uint16Array(8),
			aUb = new Uint16Array(this.k4.length);
		this.aUc(hP, hQ, aUa, 1), this.aDZ(aUa), this.aUd(aUb, hP, hQ), this.aUe(hP, hQ, aUb), this.aUf()
	}, this.aUc = function(hP, hQ, aUh, aUj) {
		for (var es, e, aUk, eY = this.k4.length - aUj, g = new Uint16Array(eY), colorsData = a9.data.colorsData, a7 = a9.je - 1; 0 <= a7; a7--) {
			for (es = eY; aUj <= es; es--) g[es - 1] = Math.abs(4 * (colorsData[a7] >> 12) - aUV[es][0]) + Math.abs(4 * (colorsData[a7] >> 6 & 63) - aUV[es][1]) + Math.abs(4 * (63 & colorsData[a7]) - aUV[es][2]);
			for (aUk = 768, es = eY - 1; 0 <= es; es--) g[e = (es + a7) % eY] < aUk && (aUk = g[e], hP[a7] = e);
			for (aUh[hP[a7]] += 4, aUk = 768, es = eY - 1; 0 <= es; es--) g[e = (es + a7) % eY] < aUk && e !== hP[a7] && (aUk = g[e], hQ[a7] = e);
			aUh[hQ[a7]]++
		}
	}, this.aDZ = function(aUh) {
		for (var es, kR, eY = this.k4.length - 1, a7 = eY; 0 <= a7; a7--) this.k4[a7] = a7;
		for (a7 = eY - 1; 0 <= a7; a7--) aUh[a7]++;
		for (a7 = 1; a7 <= eY; a7++) {
			for (kR = 0, es = 1; es < eY; es++) aUh[es] > aUh[kR] && (kR = es);
			aUh[kR] = 0, this.k4[a7] = kR + 1
		}
	}, this.aUd = function(aUb, hP, hQ) {
		var es, zJ, et, eb, e, mA, sH, aUl = this.k4.length - 1,
			py = new Uint16Array(aUl),
			aUm = [],
			aUn = 0,
			zI = [],
			aUo = [];
		loop: for (var a7 = 0; a7 < a9.je; a7++)
			if (null !== (zJ = b6.zG.zK(ac.a4x[a7]))) {
				for (es = zI.length - 1; 0 <= es; es--)
					if (zJ === zI[es]) {
						aUo[es].push(a7), aUn = Math.max(aUn, aUo[es].length);
						continue loop
					} zI.push(zJ), aUm.push(!1), aUo.push([a7]), aUn = Math.max(aUn, 1)
			}
		for (; 2 < a9.vy && aUn > bH.dl(a9.je, a9.vy);) a9.vy--, a9.jy--;
		for (es = zI.length - 1; 0 <= es; es--) {
			for (eb = -1, et = zI.length - 1; 0 <= et; et--) !aUm[et] && (-1 === eb || aUo[et].length > aUo[eb].length) && (eb = et);
			for (et = aUl - 1; 0 <= et; et--) py[et] = 1;
			for (et = aUo[eb].length - 1; 0 <= et; et--) py[hP[aUo[eb][et]]] += 3, py[hQ[aUo[eb][et]]]++;
			for (a7 = aUl - 1; 0 <= a7; a7--) {
				for (e = eb % aUl, et = aUl - 1; 0 <= et; et--) py[et] > py[e] && (e = et);
				for (mA = -1, et = a9.vy; 0 < et; et--)
					if (this.k4[et] === e + 1) {
						mA = et;
						break
					} if (py[e] = 0, -1 !== mA) {
					for (sH = 0, et = a9.vy; 0 < et; et--) aUb[mA] > aUb[et] && sH++;
					if (sH !== a9.vy - 1) {
						for (et = aUo[eb].length - 1; 0 <= et; et--) aUb[mA]++, this.eW[aUo[eb][et]] = mA;
						break
					}
				}
			}
			aUm[eb] = !0
		}
	}, this.aUe = function(hP, hQ, aUb) {
		for (var a7, hf, eY = this.k4.length - 1, border = bH.dl(a9.je, a9.vy), aUp = (0 < a9.je % a9.vy && border++, new Uint8Array(1 + eY)), es = eY; 1 <= es; es--) aUp[this.k4[es]] = es;
		for (a7 = 0; a7 < a9.je; a7++) hf = aUp[hP[a7] + 1], 0 === this.eW[a7] && hf <= a9.vy && aUb[hf] < border && (aUb[hf]++, this.eW[a7] = hf);
		for (a7 = 0; a7 < a9.je; a7++) hf = aUp[hQ[a7] + 1], 0 === this.eW[a7] && hf <= a9.vy && aUb[hf] < border && (aUb[hf]++, this.eW[a7] = hf);
		for (es = a9.vy; 1 <= es; es--)
			for (a7 = a9.je - 1; 0 <= a7 && !(aUb[es] >= border); a7--) 0 === this.eW[a7] && (aUb[es]++, this.eW[a7] = es)
	}, this.aUf = function() {
		for (var a7 = a9.je; a7 < a9.eV; a7++) this.eW[a7] = 1 + a7 % a9.vy
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
		for (var aUq = !1, aUr = !1, eb = 3; 0 <= eb; eb--) {
			var g6 = gE[player][a7] + ea[eb];
			if (aY.aDj(g6, player)) continue loop;
			aUq = aUq || aY.h1(g6), aUr = aUr || aY.aDi(g6)
		}
		aUq ? gF[player].push(gE[player][a7]) : aUr ? ey[player].push(gE[player][a7]) : aY.wQ(gE[player][a7], player), gE[player][a7] = gE[player][eY - 1], gE[player].pop(), eY--
	}
}

function gC() {
	ac.gM[fS] -= fT
}

function gD(border) {
	for (var eY = border.length, a7 = eY - 1; 0 <= a7; a7--) aY.wk(fS, border[a7]) || (border[a7] = border[eY - 1], border.pop(), eY--)
}

function gG(border) {
	for (var eY = border.length, a7 = eY - 1; 0 <= a7; a7--) !aY.wk(fS, border[a7]) && aY.eT(border[a7]) && (border[a7] = border[eY - 1], border.pop(), eY--)
}

function gH(border) {
	for (var eb, g6, eY = border.length, ea = aY.ea, a7 = eY - 1; 0 <= a7; a7--)
		for (eb = 3; 0 <= eb; eb--)
			if (g6 = border[a7] + ea[eb], aY.aDj(g6, fS)) {
				ac.gE[fS].push(border[a7]), border[a7] = border[eY - 1], border.pop(), eY--;
				break
			}
}

function gI() {
	for (var eb, g6, ea = aY.ea, a7 = fT - 1; 0 <= a7; a7--)
		for (eb = 3; 0 <= eb; eb--) g6 = fV[a7] + ea[eb], aY.aDk(fS, g6) && aY.aDl(g6) && (ac.gE[fS].push(g6), aY.g3(g6, fS))
}

function gJ() {
	var ef, eh;
	loop: for (; ac.iB[fS] < ac.iC[fS];) {
		for (ef = ac.iA[fS]; ef >= ac.i9[fS]; ef--)
			if (aY.wk(fS, 4 * (ac.iB[fS] * bO.ej + ef))) break loop;
		ac.iB[fS]++
	}
	loop: for (; ac.iB[fS] < ac.iC[fS];) {
		for (ef = ac.iA[fS]; ef >= ac.i9[fS]; ef--)
			if (aY.wk(fS, 4 * (ac.iC[fS] * bO.ej + ef))) break loop;
		ac.iC[fS]--
	}
	loop: for (; ac.i9[fS] < ac.iA[fS];) {
		for (eh = ac.iC[fS]; eh >= ac.iB[fS]; eh--)
			if (aY.wk(fS, 4 * (eh * bO.ej + ac.i9[fS]))) break loop;
		ac.i9[fS]++
	}
	loop: for (; ac.i9[fS] < ac.iA[fS];) {
		for (eh = ac.iC[fS]; eh >= ac.iB[fS]; eh--)
			if (aY.wk(fS, 4 * (eh * bO.ej + ac.iA[fS]))) break loop;
		ac.iA[fS]--
	}
}

function eR(player, il) {
	return 0 === bc.eW[player] || bc.eW[player] !== bc.eW[il]
}

function h7(player, il) {
	for (var e, aUs = aZ.fe(player), a7 = 0; a7 < aUs; a7++)
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

function aDs(player) {
	for (var a7, g7, eY = ac.gE[player].length, ea = aY.ea, eb = 3; 0 <= eb; eb--)
		for (g7 = ea[eb], a7 = 0; a7 < eY; a7++)
			if (aY.ip(ac.gE[player][a7]) && aY.eP(ac.gE[player][a7] + g7)) return !0;
	return !1
}

function h9(a23, a24) {
	for (var a7, dk, g7, g6, aSU = ac.gE[a23].length, aSV = ac.gE[a24].length, ea = (aSV < aSU && (dk = a23, a23 = a24, a24 = dk, dk = aSU, aSU = aSV, 0), aY.ea), eb = 3; 0 <= eb; eb--)
		for (g7 = ea[eb], a7 = 0; a7 < aSU; a7++)
			if (g6 = ac.gE[a23][a7] + g7, aY.g8(g6) && aY.eQ(g6) === a24) return !0;
	return !1
}

function aDt(a23, a24) {
	for (var a7, g7, g6, aSU = ac.gE[a23].length, ea = aY.ea, eb = 3; 0 <= eb; eb--)
		for (g7 = ea[eb], a7 = 0; a7 < aSU; a7++)
			if (aY.ip(ac.gE[a23][a7]) && (g6 = ac.gE[a23][a7] + g7, aY.g8(g6)) && aY.eQ(g6) === a24) return !0;
	return !1
}

function dP() {
	this.ou = new aUt
}

function aUt() {
	this.h4 = function(player) {
		b6.fu.a21(player) && aJ.z3(80, L(442), 637, 0, b7.nN, b7.mV, -1, !1)
	}, this.a3v = function() {
		aJ.z3(80, L(443), 637, 0, b7.nN, b7.mV, -1, !1)
	}, this.nx = function(player) {
		b6.fu.a21(player) && aJ.z3(80, L(444), 637, 0, b7.nN, b7.mV, -1, !1)
	}
}

function aUu() {
	this.aUv = 0, this.iS = function() {
		aK.iS(), aV.iS(), at.iS(), aw.s.iS(), ar.aD4(), bb.dc && (bb.dc = !1, aW.tU())
	}
}

function aUw() {
	this.lo = bb.lo, this.e0 = 0, this.aUv = 0, this.aD1 = 0, this.aUx = null, this.aUy = 7, this.a5O = 0, this.dU = function() {
		this.aD1 = 0, this.aUx = [], this.e0 = 0, this.aUv = 0
	}, this.aOq = function(a8) {
		if (a9.gu) this.a9K(a8);
		else if (this.aUx.push(a8), 2 === a9.yf) {
			for (var a7 = 0; a7 < this.aUx.length; a7++) b4.nm.iS(this.aUx[a7]);
			this.aUx = []
		}
	}, this.a9K = function(a8) {
		2 !== a9.yf && (b4.nm.iS(a8), b5.iS(), aS.a9K(this.aD1), this.aD1 === a9.a30 ? (a9.ok.iS(), this.aD1 = 0, this.e0 = 0, this.aUv = 0, this.lo = bb.lo) : (this.aD1++, ab.a2t(), ab.lH(!0), bX.a9s()))
	}, this.iS = function() {
		at.iS(), a9.gu ? (bb.dc = aS.a9K(-1) || bb.dc, lJ()) : (0 !== this.e0 || bb.lo >= this.lo && (this.lo += bb.a9J * Math.floor(1 + (bb.lo - this.lo) / bb.a9J), 2 === a9.yf ? l8() : this.aUz(), this.e0++, 27 < bb.lo - this.a5O)) && this
		.aV0(), lE(), bb.dc && (bb.dc = !1, wn()), this.a5O = bb.lo
	}, this.aV0 = function() {
		bb.dc = !0, lG(), this.e0 = 0
	}, this.aUz = function() {
		var uA, a7;
		if (this.aUv !== 7 * this.aD1) lA(), bX.a9s();
		else {
			uA = !1;
			loop: for (; this.aV1() && (uA = !0, lA(), 2 !== a9.yf) && 0 < this.aUx.length;)
				for (a7 = this.aUy - 2; 0 <= a7; a7--)
					if (lA(), 2 === a9.yf) break loop;
			uA ? bX.a9s() : (l8(), bX.a2w())
		}
	}, this.aV1 = function() {
		return 0 < this.aUx.length && (this.aD1++, b4.nm.iS(this.aUx[0]), this.aUx.shift(), !0)
	}
}

function aV2() {
	var aV3, aV4, aV5, aD1, aV6, e0 = 0,
		lo = bb.lo;

	function aV9() {
		! function() {
			if (!a9.gu) return;
			if (a9.k0) return;
			if (2 !== a9.yf)
				if (aV6 % 7 != 0) aV6++;
				else if (aD1 === a9.a30) {
				if (!aVC()) return;
				aS.a9K(aD1), a9.ok.iS()
			} else {
				if (!aVC()) return;
				aV6++, aD1++, ab.a2t(), ab.lH(!0)
			}
			return 1
		}() && aVC() && lA()
	}

	function aVA() {
		e0 = 0, (a9.gu ? (bb.dc = aS.a9K(aD1 - (aV6 % 7 == 0 ? 0 : 1) + aV6 % 7 / 7) || bb.dc, lJ) : aI.gj || !b8.a3N ? lJ : (bb.dc = !0, lG))()
	}

	function aVC() {
		var a7, eY, aVD = b5.oi.aQ1,
			fG = b5.oi.aQ2,
			fI = b5.oi.aQ3,
			fK = b5.oi.aQ4,
			aVE = b5.oi.aQ5,
			aVF = b5.oi.aQ6;
		if (!(aV3 >= aVF.length)) {
			if (aVF = aVF[aV3], aVE[aV3]) {
				for (eY = aV4 + aVF, a7 = aV4; a7 < eY; a7++) b4.nm.oU(aVD[a7], fG[a7], fI[a7], fK[a7]);
				aV4 += aVF, aV3++
			} else ++aV5 >= aVF && (aV3++, aV5 = 0);
			return 1
		}
		aJ.zv("Replay file smaller than expected."), b8.a0n(!1), a9.yf = 2
	}
	this.aUv = 0, this.dU = function() {
		aV6 = aD1 = aV5 = aV4 = aV3 = 0
	}, this.iS = function() {
		var aSr;
		at.iS(), b8.a6m() < 1.7 ? 0 === e0 ? bb.lo >= lo && (aSr = bb.a9J / b8.a6m(), lo += aSr * Math.floor(1 + (bb.lo - lo) / aSr), 2 === a9.yf || aI.gj || !b8.a3N ? l8() : (aV9(), bX.a9s()), e0++) : aVA() : function() {
			var aSr;
			if (bb.lo >= lo)
				if (2 === a9.yf || aI.gj || !b8.a3N) l8(), lo = bb.lo;
				else {
					for (aSr = bb.a9J / b8.a6m(), 16 < (bb.lo - lo) / aSr && (lo = bb.lo - 16 * aSr); bb.lo >= lo && 2 !== a9.yf;) lo += aSr, aV9();
					bX.a9s()
				} aVA()
		}(), lE(), bb.dc && (bb.dc = !1, wn())
	}, this.yp = function() {
		b5.oi.aQ6.length - aV3 <= 2 || aJ.zv("Replay file larger than expected.")
	}
}

function aVG() {
	var e0 = 0,
		lo = bb.lo;
	this.aUv = 0, this.iS = function() {
		at.iS(), a9.gu ? lJ() : 0 === e0 ? bb.lo >= lo && (lo += bb.a9J * Math.floor(1 + (bb.lo - lo) / bb.a9J), 2 === a9.yf || aI.gj ? l8() : (lA(), bX.a9s()), e0++) : ((aI.gj ? lJ : (bb.dc = !0, lG))(), e0 = 0), lE(), bb.dc && (bb.dc = !1,
		wn())
	}
}

function dK() {
	this.yo = null, this.dc = !1, this.lo = 0, this.a9J = 56;
	var aVH = 0;

	function aVI() {
		bb.lo = aVH = performance.now(), bb.yo.iS(), window.requestAnimationFrame(aVI)
	}
	this.dU = function() {
		this.a3K(), window.requestAnimationFrame(aVI), this.lo = performance.now()
	}, this.a3B = function() {
		a9.gi ? (this.yo = new aV2, this.yo.dU()) : a9.k0 ? this.yo = new aVG : (this.yo = new aUw, this.yo.dU())
	}, this.a3K = function() {
		this.yo = new aUu, this.dc = !0
	}, this.iS = function() {
		this.yo.aUv++
	}, this.jb = function() {
		return this.yo.aUv
	}, this.aOS = function() {
		var dk = performance.now();
		dk < aVH + 1e3 || (this.lo = dk, this.yo.iS())
	}
}

function cm() {
	var li = 0,
		aVJ = !0;

	function aVL(pA) {
		8 !== aW.zo() || 2 !== ac.a20[a9.eI] && (0 !== ac.lV[a9.eI] || a9.gu) || aJ.a55(pA)
	}
	this.iS = function() {
		var dk, a5Q;
		bb.lo > li && (li = bb.lo + 2500, dk = new Date, a5Q = dk.getUTCSeconds(), aVJ ? a5Q < 45 && (aVJ = !1) : a5Q < 45 || (aVJ = !0, (a5Q = dk.getUTCMinutes() + 1) % 15 == 0 && aVL(30 === a5Q ? "Upcoming Battle Royale Contest!" :
			"Upcoming Alliance Contest!")))
	}
}

function cg() {
	var ly, lz, mB, mC, aVM = 0,
		aVN = 0;

	function aVP() {
		return Math.pow(Math.pow(mB - ly, 2) + Math.pow(mC - lz, 2), .5)
	}

	function aVO(e) {
		ly = at.pZ * e.touches[0].clientX, lz = at.pZ * e.touches[0].clientY, mB = at.pZ * e.touches[1].clientX, mC = at.pZ * e.touches[1].clientY
	}
	this.a0F = function(e) {
		return 1 < e.touches.length ? (aVN = bb.lo, aVM = 3, aVO(e), aH.r1(), !0) : (aVM = 0, !1)
	}, this.a0G = function(e) {
		var aHe, hd, he;
		return 0 !== a9.yf && 1 < e.touches.length && (aVM = Math.max(aVM - 1, 0), aD.mG() && (aHe = aVP(), aVO(e), e = aVP(), hd = Math.floor((ly + mB) / 2), he = Math.floor((lz + mC) / 2), aO.a7C(hd, he, Math.max(.125, e) / Math.max(.125,
			aHe)), bb.dc = !0), !0)
	}, this.a0d = function() {
		var ef, eh;
		return !!(aVM && (aVM = 0, bb.lo < aVN + 500)) && (ef = (ly + mB) / 2, eh = (lz + mC) / 2, aH.a0X(ef, eh), aH.click(ef, eh, !0) && (bb.dc = !0), !0)
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
	}, this.aP4 = function(size) {
		var es = size >> 1;
		return (1 << es) * this.oT(size - es) + this.oT(es)
	}, this.aP3 = function(aVQ) {
		return this.size === b9.aOx(aVQ)
	}, this.aQJ = function(vb, aVR, aVS) {
		var g1 = this.oT(vb);
		if (!g1) return null;
		for (var vb = Math.max(g1, aVS), g = new(aVR <= 8 ? Uint8Array : aVR <= 16 ? Uint16Array : Uint32Array)(vb), a7 = 0; a7 < g1; a7++) g[a7] = this.oT(aVR);
		aVS = g[g1 - 1];
		return aVS && g.fill(aVS, g1), g
	}, this.aQK = function(vb, aVT, aVS) {
		var g1 = this.oT(vb);
		if (!g1) return null;
		for (var vb = Math.max(g1, aVS), g = new Array(vb), a7 = 0; a7 < g1; a7++) g[a7] = this.aQH(aVT);
		return g.fill(g[g1 - 1], g1), g
	}, this.aQH = function(vb) {
		return bC.uh.ul(this.oT(vb))
	}, this.aQI = function() {
		var pA = bB.rv.rw(bB.rv.rx(this.oT(30))),
			pA = b6.zG.a2o(pA, "_", "/");
		pA = b6.zG.a2o(pA, "-", "+");
		for (var aVU = "";
			(pA.length + aVU.length) % 4;) aVU += "=";
		pA = "data:image/png;base64," + pA + aVU;
		var aEO = new Image;
		aEO.onload = function() {
			b5.aEn.aEo(aEO), aEO.onload = null, aEO = null
		}, aEO.src = pA
	}
}

function dE() {
	this.aR9 = 0, this.aRA = 0, this.aR5 = 0, this.aR6 = 0, this.aR7 = 0, this.aR8 = 0, this.a9t = [0, 0, 0, 0], this.mF = function() {
		this.aR9 = aO.wp(), this.aRA = aO.wq(), this.aR5 = -this.aR9, this.aR6 = -this.aRA, this.aR7 = at.a1 / hw, this.aR8 = at.j7 / hw, this.a9t[0] = Math.floor(this.aR5), this.a9t[1] = Math.floor(this.aR6), this.a9t[2] = Math.floor(this.a9t[
			0] + this.aR7 + 1), this.a9t[3] = Math.floor(this.a9t[1] + this.aR8 + 1), bX.a9q = !0
	}
}

function ch() {
	var a5v, li;
	this.dU = function() {
		a5v = 1, li = 0
	}, this.iS = function() {
		0 < a5v && (li = 0 === li ? bb.lo + 16 : li, a5v = (a5v -= .001 * (bb.lo - li)) < 0 ? 0 : a5v, li = bb.lo, bb.dc = !0)
	}, this.tU = function() {
		0 < a5v && (tV.fillStyle = "rgba(0,0,0," + a5v + ")", tV.fillRect(0, 0, at.a1, at.j7))
	}
}

function a2() {
	this.size = 0, this.e0 = 0, this.a8 = null, this.dU = function(a8) {
		this.e0 = 0, this.a8 = a8, this.size = a8.length
	}, this.a3 = function(aVQ) {
		return this.dU(new Uint8Array(this.aOx(aVQ))), this.a8
	}, this.a01 = function() {
		this.a8 = null
	}, this.a4 = function(size, a5S) {
		for (var a8 = this.a8, mG = this.e0 + size - 1, a7 = this.e0; a7 <= mG; a7++) a8[a7 >> 3] |= (a5S >> mG - a7 & 1) << 7 - (7 & a7);
		this.e0 += size, this.e0 > 8 * this.size && console.error("Wrapper Overflow")
	}, this.aOw = function(size, a5S) {
		var es = size >> 1,
			eb = 1 << es;
		this.a4(size - es, bH.dl(a5S, eb)), this.a4(es, a5S % eb)
	}, this.aVX = function(size) {
		for (var a8 = this.a8, mG = this.e0 + size, a7 = this.e0; a7 < mG; a7++) a8[a7 >> 3] &= 255 ^ 128 >>> (7 & a7)
	}, this.aOx = function(aVQ) {
		return aVQ + 7 >> 3
	}, this.aVY = function(g, iu, mG, aVZ) {
		for (var a7 = iu; a7 < mG; a7++) this.a4(aVZ, g[a7])
	}
}

function cu() {
	this.dU = function() {
		this.g = [], this.e0 = 0
	}, this.aPP = function() {
		return new Uint8Array(this.g)
	}, this.a4 = function(aVa, value) {
		for (var g = this.g, mG = this.e0 + aVa - 1, aVb = 1 + (mG >> 3); g.length < aVb;) g.push(0);
		for (var a7 = this.e0; a7 <= mG; a7++) g[a7 >> 3] |= (value >> mG - a7 & 1) << 7 - (7 & a7);
		this.e0 += aVa
	}, this.db = function(g, vb, aVR) {
		var aVc = b6.pd.a1Q(g);
		this.a4(vb, aVc);
		for (var a7 = 0; a7 < aVc; a7++) this.a4(aVR, g[a7])
	}, this.aQb = function(g, vb, aVT) {
		var aVc = b6.pd.a1Q(g);
		this.a4(vb, aVc);
		for (var a7 = 0; a7 < aVc; a7++) this.aQZ(g[a7], aVT)
	}, this.aQZ = function(pA, vb) {
		var eY = pA.length;
		this.a4(vb, eY);
		for (var a7 = 0; a7 < eY; a7++) this.a4(16, pA.charCodeAt(a7))
	}, this.aQa = function(a1T) {
		var aVd = (a1T = a1T.toDataURL()).split(",");
		if (aVd.length < 2) console.log("error 266");
		else {
			a1T = b6.zG.a2o(a1T = aVd[aVd.length - 1], "/", "_"), a1T = b6.zG.a2o(a1T, "\\+", "-");
			var a1T = b6.zG.a2o(a1T, "=", ""),
				uu = bC.rv.ur(a1T),
				eY = uu.length;
			this.a4(30, eY);
			for (var a7 = 0; a7 < eY; a7++) this.a4(6, uu[a7])
		}
	}
}
a(), self.aiCommand746 = function(f0) {
	0 === f0 ? bn() : 1 !== f0 || !u || 1 !== u.id || u.f1 < 14 || bF.f2()
}, setTimeout(bn, 1e4), window.onload = function() {
	bn()
};