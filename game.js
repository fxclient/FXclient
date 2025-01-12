var h, a9, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, at, au, av, aw, ax, ay, az, b0, b1, b2, b3, b4, b5, b6, b7, b8,
	b9, bA, bB, bC, bD, bE, bF, bG, bH, bI, bJ, bK, bL, bM, bN, bO, bP, n, bQ, bR, bS, bT, bU, bV, bW, bX, bY, bZ, ba, bb, bc, bd, u, be, bf, bg, l, bh, bi, bj, bk, bl, bm, dg, dh, a5, di, a6, fN, fO, fP, fQ, fR, fS, fT, fU, fV, fW, fX, fY, fZ, hw,
	hv, hx, a5o, kv, jO, zq, tB, wV, a9Y, a2q, a2r, S = ["100%", "div", "⬅️ ", "canvas", "absolute", "inherit", "rgb(", "rgba(", "auto", "none", "hidden", "   ", "center", "Data", "<br>", "1em", "flex", "0.8em", "territorial.io", "input",
		"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg==", "click", "0.5em", "' target='_blank'>", "undefined",
		"span", "</a>", "pointer", "password", "function", "Value", "Enter", "0.6em", "text", "string", "rgba(0,0,0,0.8)", "number", "nowrap", "mouseleave", "focus", "break-word", "blur", "Player ", "NoStack", "50%", "1.2em", "1 Minute", "1 Hour",
		"0.0em 0.9em", ". Duration: x", " voted with ", " / ", "🔄 Reload", "underline", "top", "tls7", "Trebuchet MS", "rgba(140,10,10,0.75)", "rgba(100,0,0,0.8)", "rgba(10,140,10,0.75)", "rgba(0,100,0,0.8)", "rgba(0,", "rgb(10,220,10)", "pre",
		"placeholder", "mouseover", "mouseout", "middle", "long", "logo", "loading", "keydown", "italic ", "inline-block", "file", "error", "en-US", "data:image/png;base64,", "break-all", "bold", "blur(4px)", "arena", "account", "accept", "_blank",
		"Space", "Seed", "Reload", "Interest", "Escape", "Censored", "Bot ", "Back", "<a href='", "20 Seconds", "1v1", "1 Day", "0px", "000", "0.75em", "0.4em 0em", "0.2em", ",0,0.85)", " solid white;}", " Rank: ", " / 160", " -> "
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
	this.dj = 1077, this.j = 2015, this.rVersion = 2, this.dU = function() {
		dg = 2;
		var dk = bH.dl(this.j, 10) % 100;
		dh = "13 Jan 2025 [" + bH.dl(this.j, 1e3) + "." + (dk < 10 ? "0" : "") + dk + "." + this.j % 10 + "]", a5 = true, a6 = function() {
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
			[2, 3, 2, 2, 2],
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
		["1 Elo Point", "2 Elo Points", "5 Elo Points"],
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
	}
}

function iP() {
	function jU(player, il, jK) {
		3 <= jK && 2142 < bb.ja() && (il === a9.eV || ac.ga[il] < bH.dl(ac.ga[player], 20)) && aA.jP(player, 20)
	}

	function jX(player, im, il, jK) {
		3 <= jK && jK < 6 && bH.dl(ac.ga[player], 8) > ac.ga[il] && (im = Math.max(bH.dl(11 * ac.ga[il], 5), bH.dl(ac.ga[player], 10)));
		jK = ac.g0[player].length;
		aj.iM.iZ(player, il), aj.iM.ik(player, il, jK, im)
	}

	function jT(player, im) {
		var il = a9.eV,
			eY = ac.g0[player].length;
		aj.iM.iY(player), ac.g0[player].length !== eY && aj.iM.ik(player, il, eY, im)
	}
	this.ig = new Uint8Array(a9.eV), this.dU = function() {
		this.ig.fill(0)
	}, this.jG = function(player, im) {
		var jI, jK, jL, jM;
		a9.ie && (this.ig[player] = 0), aZ.jH(player) && (jI = aa.jJ(player), 3 <= (jK = aA.im[player]) && jK < 6 && (im = Math.max(ac.ga[player] - jI, im)), jL = ac.gF[player].length, jM = ac.gE[player].length, 30 * ac.gM[player] > a9.jN && jO[
			player] < 10 && 100 * jM <= jL && aA.jP(player, 10), a9.ie ? function(player, im, jK, jI) {
			var il;
			if (aj.iM.ir(player, !1) || aj.iM.iw(player, !1)) {
				if (aj.iO.ig[player] = 1, !aj.iM.iy(player))
					if (aj.iM.ix()) jT(player, im), jU(player, a9.eV, jK);
					else {
						if (au.jV(aA.jW[jK])) il = aj.iM.j3(player);
						else {
							if (aj.iM.j0() && au.jV(aA.jY[jK]) && aj.iM.j2(), 6 === jK) return jX(player, im, aj.iM.jC(), jK);
							il = aj.iM.j6(player)
						}
						jX(player, im, il, jK), jU(player, il, jK)
					}
			} else bJ.jR.iS(player) || aj.iQ.iS(player) || ! function(player, im, jK, jI) {
				var a7, es, et, eW = bc.eW,
					jb = eW[player];
				if (0 !== jb) {
					var ga = ac.ga,
						jc = ga[player],
						gM = ac.gM;
					if (player < a9.jd && (im = jc), !(jc < gM[player] || 5 === jK && jc < jI || 4 === jK && jc < bH.dl(jI, 2))) {
						var eY = ah.je,
							jf = ah.jg,
							jh = (a7 = au.iv(eY), aj.iO.ig);
						for (es = 0; es < eY; es++)
							if (et = jf[(es + a7) % eY], 1 === jh[et] && eW[et] === jb) return b4.ji.jj(player, et, im);
						var jk = a9.jk,
							gF = ac.gF;
						for (es = 0; es < eY; es++)
							if (et = jf[(es + a7) % eY], ga[et] < jk * gM[et] && gF[et].length && eW[et] === jb && et !== player) return b4.ji.jj(player, et, im)
					}
				}
			}(player, im, jK, jI)
		}(player, im, jK, jI) : (!jM || jL && (jL < jM && !au.iv(10) || 100 * jM <= jL && au.iv(3) || !au.iv(8))) && bJ.jR.iS(player) || function(player, im, jK) {
			aj.iM.ir(player, !0) || aj.iM.iw(player, !0) ? aj.iM.iy(player) || (aj.iM.ix() ? jT(player, im) : au.jV(aA.jW[jK]) ? jX(player, im, aj.iM.j3(player), jK) : 5 === jK ? jX(player, im, aj.iM.jC(), jK) : (aj.iM.j0() && au.jV(aA
				.jY[jK]) && aj.iM.j2(), jX(player, im, 6 === jK ? aj.iM.jC() : aj.iM.j6(player), jK))) : aj.iQ.iS(player)
		}(player, im, jK))
	}
}

function bz() {
	var jl = new Uint8Array(a9.eV),
		jm = new Uint16Array(a9.eV),
		jn = new Uint16Array(a9.eV),
		jo = new Uint8Array(a9.eV),
		jp = (this.im = new Uint8Array(a9.eV), new Uint16Array(a9.eV)),
		jq = new Uint16Array(a9.eV);

	function k5(a7) {
		jl[a7] = 1 + bH.dl(jp[a7] * au.random(), 10 * au.value(100))
	}
	this.jr = null, this.jY = [97, 94, 70, 40, 20, 0, 100], this.js = [500, 450, 400, 300, 80, 50, 100], this.jW = [0, 0, 5, 25, 50, 100, 0], this.jt = [60, 74, 112, 200, 256, 512, 512], this.ju = [1, 2, 3, 4, 6, 8, 1], this.jv = [500, 450, 400, 300,
		80, 50, 100
	], this.dV = function() {
		this.jr = [L(7), L(8), L(9), L(10), L(11), L(12), "H Bot"]
	}, this.dU = function() {
		jl.fill(0), jm.fill(0), jn.fill(0), jo.fill(0), this.im.fill(0), jp.fill(0), jq.fill(0);
		var jw = a9.jd;
		if (9 === a9.jx) this.jy();
		else if (__fx.customLobby.isActive())
			for (a7 = a9.k1 - 1; 0 <= a7; a7--) this.im[a7 + jw] = __fx.customLobby.gameInfo.difficulty;
		else if (a9.jz)
			if (3 === a9.data.botDifficultyType)
				for (a7 = a9.k1 - 1; 0 <= a7; a7--) {
					var k2 = a7 + jw;
					this.im[k2] = a9.data.botDifficultyData[k2]
				} else if (2 === a9.data.botDifficultyType)
					for (a7 = a9.k1 - 1; 0 <= a7; a7--) this.im[k2 = a7 + jw] = a9.data.botDifficultyTeam[bc.k3[bc.eW[k2]]];
				else if (1 === a9.data.botDifficultyType) {
			var k4 = this.jr.length;
			for (a7 = a9.k1 - 1; 0 <= a7; a7--) this.im[a7 + jw] = a7 % k4
		} else
			for (k4 = a9.data.botDifficultyValue, a7 = a9.k1 - 1; 0 <= a7; a7--) this.im[a7 + jw] = k4;
		else
			for (var k0 = 8 === a9.jx ? 1 : 0, a7 = a9.k1 - 1; 0 <= a7; a7--) this.im[a7 + jw] = k0;
		for (a7 = 0; a7 < jw; a7++) this.im[a7] = 6;
		var eY = a9.eV;
		for (a7 = 0; a7 < eY; a7++) this.im[a7] <= 2 ? (jo[a7] = 5, jp[a7] = jq[a7] = 1040, 0 === this.im[a7] ? (jm[a7] = 980, jn[a7] = 980) : 1 === this.im[a7] ? (jm[a7] = 980, jn[a7] = 920, jp[a7] = jq[a7] = 1100) : (jm[a7] = 825, jn[a7] =
			750)) : this.im[a7] <= 4 ? (jo[a7] = 1 + au.iv(20), 3 === this.im[a7] ? (jm[a7] = jn[a7] = 500, jp[a7] = jq[a7] = 1e3) : (jq[a7] = 250 + au.iv(1501), jp[a7] = 500 + au.iv(501), jm[a7] = 300 + au.iv(201), jn[a7] = 100 + au.iv(
			201))) : this.im[a7] <= 5 ? (jp[a7] = 1e3, jq[a7] = 1e3, jo[a7] = 35 + au.iv(16), jm[a7] = 300 + au.iv(201), jn[a7] = 50 + au.iv(101)) : (jp[a7] = jq[a7] = 800, jo[a7] = 5, jm[a7] = 10, jn[a7] = 250), k5(a7)
	}, this.jy = function() {
		for (var eC = av.k6, jw = a9.jd, a7 = eC - 1; 0 <= a7; a7--) this.im[a7 + jw] = 5;
		for (var es = 0; es < 6; es++) {
			for (a7 = eC + av.k7[es] - 1; eC <= a7; a7--) this.im[a7 + jw] = es;
			eC += av.k7[es]
		}
	}, this.jP = function(g6, value) {
		jl[g6] = Math.min(value, jl[g6])
	}, this.iS = function(g6) {
		0 == --jl[g6] && ! function(g6) {
			(function(g6) {
				jp[g6] !== jq[g6] && (jp[g6] += jp[g6] < jq[g6] ? 3 : -3);
				jm[g6] !== jn[g6] && (jm[g6] += jm[g6] < jn[g6] ? jo[g6] : -jo[g6], jm[g6] = (Math.abs(jm[g6] - jn[g6]) <= jo[g6] ? jn : jm)[g6]);
				jl[g6] = bH.dl(jp[g6], 10)
			})(g6), aj.iO.jG(g6, bH.dl(jm[g6] * ac.ga[g6], 1e3))
		}(g6)
	}, this.kA = function(g6, g1) {
		jp[g6] = jq[g6] = g1
	}
}

function iK() {
	var kB = new Uint16Array(a9.eV);

	function kG(player, kE) {
		for (var eY = bK.f4[0], fB = bK.fB, kP = -1, kQ = a9.eV, a7 = 0; a7 < eY; a7++) {
			var eo, g6 = fB[a7];
			eR(player, g6) && (eo = bI.hn(kE, bI.i8(g6)), -1 === kP || eo < kP) && (kP = eo, kQ = g6)
		}
		return kQ
	}

	function kI(kF, kE) {
		if (kF === a9.eV) return 0;
		for (var gF = ac.gF[kF], kO = gF.length, eY = Math.min(kO, 10), kQ = 0, kP = bI.hn(gF[kQ] >> 2, kE), a7 = 0; a7 < eY; a7++) {
			var k2 = au.iv(kO),
				eo = bI.hn(gF[k2] >> 2, kE);
			eo < kP && (kP = eo, kQ = k2)
		}
		return gF[kQ] >> 2
	}

	function kL(player, kE, il, kT) {
		var kU;
		(kT === a9.eV || (kU = bI.i8(il), kT = bI.i8(kT), bI.hn(kE, kU) < bI.hn(kE, kT))) && (kB[player] = il)
	}
	this.dU = function() {
		kB.fill(a9.eV)
	}, this.iS = function(player) {
		var kE, kH, kF, il = function(player) {
			var il = kB[player];
			if (il !== a9.eV) {
				if (b6.fu.kS(il)) return il;
				kB[player] = a9.eV
			}
			return a9.eV
		}(player);
		return function(player) {
			for (var jf = ah.jg, kO = ah.je, eY = Math.min(kO, kO < 17 && 5 === au.iv(20) ? 1 : 16), g7 = au.iv(kO), fB = bK.fB, gF = ac.gF, g1 = 0, a7 = 0; a7 < eY; a7++) {
				var g6 = jf[(a7 + g7) % kO];
				g6 !== player && gF[g6].length && (fB[g1++] = g6)
			}
			bK.f4[0] = g1
		}(player), 0 !== bK.f4[0] && (0 < (kH = kI(kF = kG(player, kE = bI.iD(player)), kE)) && bJ.kJ.kK(player, kH) ? (kL(player, kE, kF, il), !0) : 0 < (kF = function(player, kE) {
			for (var eY = bK.f4[0], fB = bK.fB, kR = kB, g7 = 0, a7 = 0; a7 < eY; a7++) {
				var g6 = fB[a7],
					g6 = kR[g6];
				g6 !== a9.eV && b6.fu.kS(g6) && player !== g6 && eR(player, g6) && (fB[g7++] = g6)
			}
			return 0 !== (bK.f4[0] = g7) ? kI(kG(player, kE), kE) : 0
		}(player, kE)) && bJ.kJ.kK(player, kF) ? (kL(player, kE, aY.eQ(kF << 2), il), !0) : !!(0 < (kH = kI(il, kE)) && bJ.kJ.kK(player, kH)))
	}
}

function iR() {
	function kY(player) {
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

	function kd(player, kf) {
		var im = b6.fu.kg(player, aA.jv[aA.im[player]]);
		ac.g0[player].push(kf.eC), aZ.ii(player, im, kf.g6), aB.ij(player, !0)
	}
	this.iS = function(player) {
		return !!bO.eD(bO.eE) && !!a9.data.passableMountains && 0 !== ac.ey[player].length && function(player) {
			var kX = kY(player);
			if (null === kX) return !1;
			! function(player) {
				for (var jg = ah.jg, je = ah.je, eY = Math.min(je, 12), g7 = au.iv(je), fB = bK.fB, ey = ac.ey, g1 = 0, a7 = 0; a7 < eY; a7++) {
					var g6 = jg[(a7 + g7) % je];
					g6 !== player && ey[g6].length && eR(player, g6) && (fB[g1++] = g6)
				}
				bK.f4[0] = g1
			}(player);
			var ka = function(eF) {
				for (var eY = bK.f4[0], fB = bK.fB, a7 = 0; a7 < eY; a7++) {
					var kf = kY(fB[a7]);
					if (null !== kf && kf.id === eF) return kf
				}
				return null
			}(kX.id);
			return null !== ka ? (kd(player, ka), !0) : function(player, eF) {
				var eY = aj.iF.ke;
				if (0 !== eY)
					for (var eC = aj.iF.dp[au.iv(eY)] << 2, ea = aY.ea, eb = au.iv(4);;) {
						if (eC += ea[eb], aY.ed(eC)) {
							if (aY.eG(eC) === eF) return kd(player, {
								eC: eC,
								g6: a9.eV
							}), !0;
							break
						}
						if (!aY.eP(eC)) break
					}
				return !1
			}(player, kX.id)
		}(player)
	}
}

function iI() {
	this.iS = function(player) {
		var eK = function(player) {
			var eY = aj.iF.ke;
			if (0 === eY) return -1;
			for (var kO = Math.min(eY, aj.performance.ki ? eY : 10), dp = aj.iF.dp, iu = bH.dl(au.random() * eY, au.value(100)), e = iu + kO, kj = au.iE(ac.i9[player], ac.iA[player]), kk = au.iE(ac.iB[player], ac.iC[player]), kQ = -1, eo = bI
					.ho(0, 0, bO.ej, bO.ek), a7 = iu; a7 < e; a7++) {
				var g7 = a7 % eY,
					kl = bI.eq(kj, kk, dp[g7]);
				kl < eo && (eo = kl, kQ = g7)
			}
			return -1 !== kQ ? dp[kQ] : -1
		}(player);
		return -1 !== eK && bJ.kJ.kK(player, eK)
	}
}

function iL() {
	this.ki = 0, this.dU = function() {
		this.ki = 0
	}, this.iS = function() {
		if (!this.ki && bb.ja() % 30 == 7 && b6.fu.ko(80) && (aj.performance.ki = 1)) {
			if (a9.ie) {
				var kr = bd.ks();
				if (bc.k3[kr]) {
					bd.kt(kr);
					var g = bK.fC,
						eY = bK.f4[0];
					if (0 !== eY)
						for (var ku = Math.min(100 + 10 * (eY - 1), 400), a7 = 0; a7 < eY; a7++) aA.kA(g[a7], ku)
				}
			}
			aA.kA(kv[0], 100)
		}
	}
}

function iG() {
	var kw, kx, ky = 300,
		kz = 300,
		l0 = (this.ke = 0, this.dp = new Uint32Array(512), !1);
	this.dU = function() {
		l0 = !1, kx = kw = 0, this.ke = 0
	}, this.iS = function() {
		if (function() {
				var eY = aj.iF.ke;
				if (0 === eY) return 1;
				var dp = aj.iF.dp;
				if (bb.ja() % 35 == 6) {
					for (var a7 = eY - 1; 0 <= a7; a7--) aY.eP(dp[a7] << 2) || (eY--, dp[a7] = dp[eY]);
					aj.iF.ke = eY
				}
				return eY < dp.length
			}() && !(ky <= kw)) {
			var a7, a1 = bO.ej,
				l4 = a1 - 2,
				eY = l4 * (bO.ek - 2),
				l5 = ky,
				dp = aj.iF.dp,
				kO = aj.iF.ke,
				l6 = dp.length,
				g7 = Math.min(kx + l5 * ((1 + 19 * aj.performance.ki) * kz), eY);
			for (a7 = kx; a7 < g7; a7 += l5) {
				var eC = 4 * (a7 % l4 + (bH.dl(a7, l4) + 1) * a1 + 1);
				if (aY.eP(eC) && (dp[kO] = eC >> 2, ++kO === l6)) {
					a7 += l5;
					break
				}
			}(kx = a7) >= eY && (kx = ++kw), aj.iF.ke = kO
		}
	}, this.l3 = function() {
		l0 || (this.dU(), l0 = !0)
	}
}

function l7() {
	aJ.iS(), ab.iS(), aS.l8(), aw.s.iS()
}

function l9() {
	ax.iS(), aC.iS(), aa.iS(), b0.iS(), aB.iS(), aj.iS(), bJ.s.iS(), ah.lA(), aR.iS(), av.iS(), bN.iS(), bR.iS(), ab.iS(), ab.lB(), aS.iS(), bL.iS(), aQ.iS(), aL.iS(), aJ.iS(), b1.iS(), aN.iS(), aq.iS(), bZ.iS(), bd.iS(), aw.s.iS(), aw.lC.iS(), n
	.iS(), b5.iS(), bb.iS()
}

function lD() {
	aD.iS(), aT.iS(), aM.iS(), ap.iS(), b8.iS(), ar.lE()
}

function lF() {
	aR.lG(!1), aL.lG(), aS.lG(!1), aQ.lG(), aN.lG(), aq.lG(), ab.lG(!1), bd.lH()
}

function lI() {
	ab.lG(!1) && (bb.dc = !0), aw.s.iS()
}

function c0() {
	var lJ, lK, lL;

	function lN(lP) {
		for (var a7 = lJ - 1; 0 <= a7; a7--) 0 === lL[lK[a7]] && ac.gM[lK[a7]] >= lP && fb(lK[a7])
	}

	function lM(player) {
		var dk;
		64 === lL[player] ? lL[player] = 6 : (dk = ac.gM[player], lL[player] = dk < 1e3 ? 3 : dk < 1e4 ? 2 : dk < 6e4 ? 1 : 0)
	}
	this.dU = function() {
		lJ = 0, lK = new Uint16Array(a9.eV), lL = new Uint8Array(a9.eV)
	}, this.iS = function() {
		for (var a7 = lJ - 1; 0 <= a7; a7--) 64 === lL[lK[a7]] ? lM(lK[a7]) : 0 == lL[lK[a7]]-- && (lM(lK[a7]), fb(lK[a7]));
		16e4 <= ac.gM[kv[0]] && (lN(16e4), 3e5 <= ac.gM[kv[0]]) && lN(3e5), b6.fu.kS(a9.eI) && (bZ.lQ[7] = Math.max(ac.gM[a9.eI], bZ.lQ[7]))
	}, this.fw = function(player) {
		for (var er, a7 = lJ - 1; 0 <= a7; a7--)
			if (player === lK[a7]) {
				for (lJ--, er = a7; er < lJ; er++) lK[er] = lK[er + 1];
				return
			}
	}, this.ij = function(player, lR) {
		for (var a7 = lJ - 1; 0 <= a7; a7--)
			if (player === lK[a7]) return;
		lK[lJ++] = player, lL[player] = lR ? 2 : 64
	}
}

function c1() {
	var size, jR;
	this.dU = function() {
		size = a9.k1, jR = new Uint16Array(a9.eV);
		for (var jd = a9.jd, a7 = a9.k1 - 1; 0 <= a7; a7--) jR[a7] = jd + a7
	}, this.iS = function() {
		for (var a7 = size - 1; 0 <= a7; a7--)
			if (0 === ac.lU[jR[a7]]) {
				er = void 0;
				var er = a7;
				size--, jR[er] = jR[size]
			} else aA.iS(jR[a7])
	}, this.lT = function(g6) {
		jR[size++] = g6
	}
}

function c2() {
	var lW, lX, lY, lZ, la, lb, lc, ld, le, lf, lg, lh, li, lj = !1,
		lk = !1;

	function ll(lm) {
		lh = bb.ln, lY = lZ = lX = 0, la = (li = 33) / lm, lW = 1 / (lm / li / 4), lb = (at.a1 / 2 + hv) / hw, lc = (at.j7 / 2 + hx) / hw, ld = hw
	}

	function lu(a7) {
		var lx; - 1 !== a7 && (a7 = bI.i2(bJ.s.lw[a7]), lx = bI.eg(a7) - 10, a7 = bI.ei(a7) - 10, aD.lq(lx, a7, 19 + lx, 19 + a7))
	}

	function m8(e4) {
		Math.abs(Math.log(lg / ld)) < .125 && (lg = e4 * ld)
	}

	function m7(lx, ly, mA, mB) {
		le = (lx + mA + 1) / 2, lf = (ly + mB + 1) / 2;
		mA = at.a1 / (mA - lx + 1), lx = at.j7 / (mB - ly + 1);
		lg = .9 * (mA < lx ? mA : lx)
	}
	this.lo = function() {
		return lj
	}, this.lp = function() {
		ll(1), this.lq(0, 0, bO.ej - 1, bO.ek - 1), a9.gu || a9.gi || this.lr(a9.eI, 3e3, !0, .3)
	}, this.ls = function(player, lt) {
		lu(bJ.h2.lv(player, lt))
	}, this.lr = function(player, lm, lz, zoom) {
		a9.m0 || lj && !lz && lk || (0 === ac.gM[player] ? lu(bJ.h2.m1(player)) : (aO.m2 = !1, lk = lz, ll(lm), function(player) {
			le = (ac.i9[player] + ac.iA[player] + 1) / 2, lf = (ac.iB[player] + ac.iC[player] + 1) / 2
		}(player), function(zoom, player) {
			var hg = ac.iA[player] - ac.i9[player] + 1,
				player = ac.iC[player] - ac.iB[player] + 1,
				er = at.a1 / hg,
				es = at.j7 / player,
				er = (lg = er < es ? er : es, 0 !== zoom ? zoom : hg < 20 && player < 20 ? .5 : .9);
			lg *= er, m8(7 / 8)
		}(zoom, player), lj = !0, am.m5()))
	}, this.m6 = function(lm) {
		a9.gi || a9.m0 || (aO.m2 = !1, lk = !1, ll(lm), m7(0, 0, bO.ej - 1, bO.ek - 1), m8(7 / 8), lj = !0, am.m5())
	}, this.lq = function(lx, ly, mA, mB) {
		m7(lx, ly, mA, mB), hw = lg, aO.mC(le, at.a1 / 2), aO.mD(lf, at.j7 / 2), bW.mE(), bb.dc = !0
	}, this.mF = function() {
		return !(lj && lk || (lj = !1))
	}, this.iS = function() {
		var mI, mJ, eb, mM;
		lj && (lX < .5 ? lZ < la && (lZ += la * lW, lY = lX) : 1 - lY < lX && (lZ = (lZ -= la * lW) < la * lW ? la * lW : lZ), lh = lh >= bb.ln ? bb.ln - 1 : lh, eb = bb.ln - lh, lX = 1e3 < eb || 1 < (lX += lZ * eb / li) ? 1 : lX, lh = bb.ln,
			eb = hw, mI = hv, mJ = hx, eb = (hw = ld * Math.pow(lg / ld, lX)) / eb, mM = 1 - (ld * Math.pow(lg / ld, 1 - lX) - ld) / (lg - ld), aO.mC(lb + mM * (le - lb), at.a1 / 2), aO.mD(lc + mM * (lf - lc), at.j7 / 2), ab.zoom(eb, (mI *
				eb - hv) / (1 - eb), (mJ * eb - hx) / (1 - eb)), bW.mE(), 1 <= lX && (lj = !1, bX.mN = !0), bb.dc = !0)
	}
}

function bu() {
	var et = b6.color;
	this.mO = et.mP(0, 0, 0), this.mQ = et.mR(0, 0, 0, .7), this.mS = et.mR(0, 0, 0, .5), this.mT = et.mR(0, 0, 0, .85), this.mU = et.mR(0, 0, 0, .75), this.mV = et.mR(0, 0, 0, .6), this.mW = et.mR(0, 0, 0, .35), this.mX = et.mP(255, 255, 255), this
		.mY = et.mR(255, 255, 255, .3), this.mZ = et.mR(255, 255, 255, .6), this.ma = et.mR(255, 255, 255, .4), this.mb = et.mR(255, 255, 255, .25), this.mc = et.mR(255, 255, 255, .85), this.md = et.mR(255, 255, 255, .75), this.me = et.mR(255, 255,
			255, .15), this.mf = et.mP(128, 128, 128), this.mg = et.mR(64, 64, 64, .75), this.mh = et.mR(88, 88, 88, .83), this.mi = et.mR(60, 60, 60, .85), this.mj = et.mR(80, 60, 60, .85), this.mk = et.mP(160, 160, 160), this.ml = et.mP(30, 255,
			30), this.mm = et.mP(0, 200, 0), this.mn = et.mP(128, 255, 128), this.mo = et.mR(10, 65, 10, .75), this.mp = et.mR(0, 255, 0, .6), this.mq = et.mR(0, 255, 0, .5), this.mr = et.mR(0, 200, 0, .5), this.ms = et.mR(0, 100, 0, .75), this.mt =
		et.mR(0, 60, 0, .8), this.mu = et.mR(0, 255, 0, .3), this.mv = et.mR(0, 180, 0, .6), this.mw = et.mR(0, 120, 0, .85), this.mx = et.mP(0, 120, 0), this.my = et.mR(0, 70, 0, .85), this.mz = et.mP(255, 120, 120), this.n0 = et.mP(255, 160, 160),
		this.n1 = et.mP(255, 70, 70), this.n2 = et.mP(230, 0, 0), this.n3 = et.mR(220, 0, 0, .6), this.n4 = et.mR(255, 100, 100, .8), this.n5 = et.mR(100, 0, 0, .85), this.n6 = et.mR(60, 0, 0, .85), this.n7 = et.mR(200, 0, 0, .6), this.n8 = et.mR(
			120, 0, 0, .85), this.n9 = et.mP(255, 70, 10), this.nA = et.mP(255, 0, 255), this.nB = et.mR(0, 60, 60, .85), this.nC = et.mR(10, 60, 60, .9), this.nD = et.mR(0, 96, 96, .75), this.nE = et.mP(0, 255, 255), this.nF = et.mP(160, 160, 255),
		this.nG = et.mR(0, 40, 90, .75), this.nH = et.mR(0, 0, 255, .6), this.nI = et.mP(200, 200, 255), this.nJ = et.mP(255, 120, 100), this.nK = et.mR(255, 255, 0, .5), this.nL = et.mR(255, 255, 150, .2), this.nM = et.mP(255, 255, 0), this.nN = et
		.mP(255, 255, 200), this.nO = et.mR(200, 200, 0, .6), this.nP = et.mR(140, 120, 0, .75), this.nQ = et.mR(180, 160, 40, .75), this.nR = et.mR(70, 50, 20, .85), this.nS = et.mR(30, 30, 0, .85), this.nT = et.mP(255, 255, 50), this.nU = et.mR(60,
			60, 0, .85), this.nV = et.mR(255, 140, 0, .75), this.nW = et.mR(0, 0, 0, 0), this.nX = et.mR(255, 255, 255, 0), this.nY = et.mR(254, 254, 254, 0)
}

function cr() {
	this.gv = new nZ, this.fu = new na, this.nb = new nc, this.nd = new ne, this.ji = new nf
}

function nZ() {
	this.gw = function(eK) {
		a9.jz ? b4.nb.gw(a9.eI, eK) : aw.ng.nh(eK)
	}, this.h6 = function(hu, il) {
		a9.jz ? b4.nb.h6(a9.eI, hu, il) : aw.ng.ni(hu, il)
	}, this.nj = function(hu, nk) {
		a9.jz ? b4.nb.nl(a9.eI, hu, nk) : aw.ng.nm(hu, nk)
	}, this.h4 = function(hu, eK) {
		a9.jz ? b4.nb.h4(a9.eI, hu, eK) : bJ.h2.h3(a9.eI, eK) && aw.ng.nn(hu, eK)
	}, this.no = function(lt, eK) {
		a9.jz ? b4.nb.no(a9.eI, lt, eK) : bJ.h2.np(a9.eI, lt, eK) && aw.ng.nq(lt, eK)
	}, this.nr = function(il) {
		a9.jz ? b4.nb.nr(a9.eI, il) : aw.ng.ns(il)
	}, this.nt = function(nu) {
		a9.jz ? b4.nb.nv(a9.eI, nu) : aw.ng.nw(nu)
	}, this.nx = function(ny) {
		a9.jz ? b4.nb.nx(a9.eI, ny) : aw.ng.nz(ny)
	}, this.o0 = function() {
		a9.jz ? b4.nb.o0(a9.eI) : aw.ng.o1()
	}, this.o2 = function() {
		a9.jz ? b4.nb.o2(a9.eI) : aw.ng.nn(1, 0)
	}, this.gz = function(hu, eK, il) {
		a9.jz ? b4.nb.gz(a9.eI, hu, eK, il) : aw.ng.o3(hu, eK, il)
	}
}

function nf() {
	this.jj = function(player, nk, im) {
		b6.fu.o4(player, im, nk) && (aa.nj(player, nk), nk < a9.jd) && au.random() < au.value(10) && (aj.iO.ig[nk] = 0)
	}, this.o5 = function(player, nk, im) {
		b6.fu.o6(im, nk) ? (b6.fu.fx(nk, bK.f6[0]), bZ.o7(player, nk), ab.o8(nk, bK.f6[0])) : bZ.fy(player, im, 12)
	}
}

function na() {
	this.o9 = function(nu, player) {
		aJ.nt(a9.eI, player, nu), aw.ng.oA(nu, player)
	}, this.oB = function(player) {
		aJ.oC(player, 0), aw.ng.oD(player)
	}, this.oE = function(oF, player) {
		aJ.oG(oF, player), aw.ng.oH(oF, player)
	}, this.oI = function() {
		a9.jz || a9.gi || aw.oJ.oI()
	}
}

function ne() {
	this.iS = function(a8) {
		var id, fG, mF;
		for (bD.dU(a8), bD.e0 += 2, mF = 8 * bD.size; bD.e0 + 8 <= mF;) id = bD.oK(4), fG = bD.oK(9), 0 === id ? this.oL(id, fG, bD.oK(22)) : 1 === id ? this.oL(id, fG, bD.oK(10), bD.oK(10)) : 2 === id ? this.oL(id, fG, bD.oK(10), bD.oK(9)) :
			3 === id || 4 === id ? this.oL(id, fG, bD.oK(10), bD.oK(22)) : 5 === id || 6 === id ? this.oL(id, fG, bD.oK(10)) : 7 === id ? this.oL(id, fG, bD.oK(1)) : 10 === id ? this.oL(id, fG, bD.oK(20), bD.oK(22)) : this.oL(id, fG)
	}, this.oM = [], this.oN = function() {
		for (var oP = 0, oQ = 0, oR = 0, oS = 0, oT = 0, oU = 0, a7 = 0; a7 < 512; a7++) oP += ac.lU[a7], oQ += ac.gM[a7], oR += ac.ga[a7], oS += bJ.s.oV[a7];
		oT += bJ.s.oW, oU += ah.je, this.oM.push(oR % 1073741824 * 4 + (oP + oQ + oS + oT + oU) % 4)
	}, this.oL = function(id, fG, fI, fK) {
		0 === id ? b4.nb.gw(fG, fI) : 1 === id ? b4.nb.h6(fG, fI, fK) : 2 === id ? b4.nb.nl(fG, fI, fK) : 3 === id ? b4.nb.h4(fG, fI, fK) : 4 === id ? b4.nb.no(fG, fI, fK) : 5 === id ? b4.nb.nr(fG, fI) : 6 === id ? b4.nb.nv(fG, fI) : 7 === id ?
			b4.nb.nx(fG, fI) : 8 === id ? b4.nb.o0(fG) : 9 === id ? b4.nb.oX(fG) : 10 === id && b4.nb.gz(fG, fI >> 10, fK, fI % 1024)
	}
}

function nc() {
	this.gw = function(player, eK) {
		b6.fu.gk(0) && b6.fu.gl(player) && bI.hz(eK) && (b5.oY.oZ(0, player, eK), a9.oa.ii(player, eK))
	}, this.h6 = function(player, hu, il) {
		b6.fu.gk(1) && b6.fu.gl(player) && b6.fu.ob(player, il) && b6.fu.oc(player, hu, 12, 0) && b6.fu.od(player, il) && ((il = aZ.iz(player, bK.eU[0])) || aZ.jH(player)) && (ac.oe[player]++, b5.oY.oZ(1, player, hu, bK.eU[0]), aj.iM.iW(player,
			il)) && (b6.fu.og(player), bZ.oh(player, hu), aj.iM.ic(player))
	}, this.nl = function(player, hu, nk) {
		b6.fu.gk(1) && b6.fu.gl(player) && a9.ie && b6.fu.ob(player, nk) && b6.fu.oi(player, nk) && b6.fu.o4(player, b6.fu.ht(player, hu), nk) && (b5.oY.oZ(2, player, hu, nk), aa.nj(player, nk))
	}, this.h4 = function(player, hu, eK) {
		b6.fu.gk(1) && b6.fu.gl(player) && (0 === eK && 1 === hu ? this.o2(player) : bI.hz(eK) && bJ.s.oW !== bJ.s.ju && bJ.s.oV[player] !== bJ.s.oj && 0 !== ac.gF[player].length && b6.fu.oc(player, hu, 32, 0) && bJ.kJ.kK(player, eK) && (bZ.ok(
			player), b5.oY.oZ(3, player, hu, eK), b6.fu.og(player), bi.ol.h4(player), bJ.s.om(player)))
	}, this.no = function(player, lt, eK) {
		b6.fu.gk(1) && b6.fu.gl(player) && bI.hz(eK) && bJ.h2.on(player, lt) && bJ.kJ.oo(eK) && (b5.oY.oZ(4, player, lt, eK), b6.fu.op(player, 8), bZ.fy(player, bK.f6[1], 12), bi.ol.no(player), bJ.s.no())
	}, this.nr = function(player, il) {
		b6.fu.gk(1) && b6.fu.gl(player) && (il = Math.min(il, a9.eV), aZ.iz(player, il)) && (b5.oY.oZ(5, player, il), aZ.oq(player, il))
	}, this.nv = function(player, nu) {
		(b6.fu.gk(1) || b6.fu.gk(2)) && b6.fu.gl(player) && (nu = bH.or(nu, 0, 1023), b5.oY.oZ(6, player, nu), ab.os(player, 0, nu))
	}, this.nx = function(player, ny) {
		b6.fu.gk(1) && b6.fu.gl(player) && (b5.oY.oZ(7, player, ny), aq.ot(player, ny))
	}, this.o0 = function(player) {
		(b6.fu.gk(0) || b6.fu.gk(1)) && b6.fu.gl(player) && bM.o0(player) && b5.oY.oZ(8, player)
	}, this.oX = function(player) {
		bM.oX(player), b5.oY.oZ(9, player)
	}, this.o2 = function(player) {
		aq.ou(player) && (b5.oY.oZ(3, player, 1, 0), aq.o2(player))
	}, this.gz = function(player, hu, eK, il) {
		b6.fu.gk(1) && b6.fu.gl(player) && b6.fu.ob(player, il) && b6.fu.od(player, il) && bI.hz(eK) && ai.e9.eS(player, eK) && (aZ.iz(player, bK.eU[0]) || aZ.jH(player)) && (b5.oY.oZ(10, player, (hu << 10) + bK.eU[0], eK), il = b6.fu.kg(player,
			hu), ac.g0[player].push(bK.eZ[0]), aZ.ii(player, il, bK.eU[0]), aB.ij(player, !0), bZ.ov(player))
	}
}

function ow() {
	var oy;
	this.ox = [], this.oy = document.createElement("div"), this.oz = function(p0, marginTop) {
		var title = document.createElement("h2");
		return title.textContent = p0, title.style.margin = "0", title.style.marginBottom = "0.6em", marginTop && (title.style.marginTop = marginTop), title.style.fontSize = "1.4em", title.style.overflowWrap = "break-word", this.oy.appendChild(
			title), title
	}, this.p1 = function(p0, marginBottom) {
		var p2 = document.createElement("p");
		return p2.textContent = p0, p2.style.fontSize = "0.75em", p2.style.lineHeight = "1.2em", p2.style.marginBottom = marginBottom || "0", this.oy.appendChild(p2), p2
	}, this.p3 = function(p0) {
		var p4 = document.createElement("p");
		return p4.textContent = p0, p4.style.fontSize = "1em", p4.style.marginBottom = "0", p4.style.whiteSpace = "pre-wrap", p4.style.overflowWrap = "break-word", this.oy.appendChild(p4), p4
	}, this.p5 = function(p6, fontSize) {
		var oy = document.createElement("div");
		return oy.innerHTML = p6, oy.style.fontSize = fontSize || "1em", oy.style.lineHeight = "1.2em", this.oy.appendChild(oy), oy
	}, this.p7 = function(p8) {
		for (var p9 = p8.p9, eY = p9.length, a7 = 0; a7 < eY; a7++) this.oy.appendChild(p9[a7])
	}, this.pA = function(pB) {
		return this.ox.push(pB), this.oy.appendChild(pB.e), pB
	}, this.resize = function() {
		for (var eY = this.ox.length, a7 = 0; a7 < eY; a7++) this.ox[a7].resize && this.ox[a7].resize()
	}, (oy = this.oy).style.position = "absolute", oy.style.height = "auto", oy.style.padding = "0.5em"
}

function pC(pD, pE) {
	var oy = document.createElement("div");

	function pN() {
		var a7, pO, j7, g7, eb, pI = at.pP * oy.offsetWidth,
			pQ = new Float64Array(function(pI) {
				var a1 = .25 * b6.pJ.pK(.6) * at.pL;
				return Math.max(Math.floor(pI / a1), 1)
			}(pI)),
			pR = bY.pR,
			pS = (pI - (pQ.length + 1) * bY.gap) / (pQ.length * at.pP);
		for (pQ.fill(pR), a7 = 0; a7 < pE.length; a7++) pO = (eb = pE[a7].oy).style, j7 = b6.pT.min(pQ), g7 = pQ.indexOf(j7), pO.top = b6.pJ.pU(j7), pO.left = b6.pJ.pU(pR + g7 * (pS + pR)), pO.width = b6.pJ.pU(pS), b6.pJ.pV(eb, 5), pQ[g7] += eb
			.offsetHeight + 3 * pR;
		oy.style.height = b6.pJ.pU(b6.pT.max(pQ) - 2 * pR)
	}
	this.pF = oy, this.pG = pE, this.resize = function() {
		var a7;
		for (a7 = 0; a7 < pE.length; a7++) pE[a7].resize();
		pN(), pN()
	}, oy.style.width = "100%", oy.style.maxWidth = "100%", pD.style.lineHeight = "1.5em", pD.style.overflowX = "hidden", pD.style.overflowY = "auto";
	for (var a7 = 0; a7 < pE.length; a7++) oy.appendChild(pE[a7].oy);
	pD.appendChild(oy)
}

function q(pW, pX, pY, pZ, pa) {
	var self, pb = document.createElement("button");

	function pi() {
		var po;
		bF.pn() || (po = b6.color.pp(pY), !1 !== pZ && 0 < po[0] && po[0] < 255 && po[0] === po[1] && po[0] === po[2]) || (pb.style.backgroundColor = b6.color.pq(pY, po[3] && po[3] < 120 ? 150 : 50))
	}

	function ph() {
		if (pZ) {
			var po = b6.color.pp(pY);
			if (po[0] === po[1] && po[0] === po[2]) return
		}
		pX && ((po = pX(this)) ? 2 === po && pi() : ps(this))
	}

	function pk() {
		this.style.backgroundColor = pY
	}

	function pj() {
		ps(this)
	}

	function ps(eb) {
		eb.style.backgroundColor = pY, eb.blur()
	}
	this.button = pb, this.pc = pX, this.pd = pY, this.pg = function(pl) {
		pl = 1.1 - Math.min(.01 * pW.length, .6) + .2 * pl;
		pb.style.fontSize = pl.toFixed(1) + "em"
	}, this.pf = function(et) {
		et ? 1 === et ? et = b7.mi : 2 === et && (pZ = 1, et = b7.mi) : (pZ = 0, et = b7.mT), this.pd = pY = et, pb.style.backgroundColor = et
	}, self = this, pb.innerHTML = pW, pb.style.color = pa ? b7.nM : b7.mX, pb.style.userSelect = "none", pb.style.outline = "none", pb.style.overflowWrap = "break-word", self.pf(pY), pb.style.border = "none", pb.style.font = "inherit", self.pg(
		0), pb.style.padding = "0em 0.3em", pb.onclick = ph, pb.addEventListener("mouseover", pi), pb.addEventListener("mouseout", pj), pb.addEventListener("focus", pi), pb.addEventListener("blur", pk)
}

function pt(pu, pD) {
	var oy;
	this.resize = function() {
		for (var a7 = 0; a7 < pu.length; a7++) b6.pJ.pV(pu[a7].button);
		oy.style.gap = oy.style.padding = b6.pJ.pU(bY.pR)
	}, (oy = document.createElement("div")).style.display = "grid", oy.style.gridTemplateColumns = "repeat(auto-fill, minmax(9.5em, 1fr))", oy.style.overflowY = "auto", oy.style.gridAutoRows = "5.3em", oy.style.maxHeight = "100%";
	for (var a7 = 0; a7 < pu.length; a7++) pu[a7].pg(1), oy.appendChild(pu[a7].button);
	pD.appendChild(oy)
}

function pw(px, py, pz) {
	this.ef = 0, this.eh = 0, this.a1 = 0, this.j7 = 0, this.resize = function() {
		this.j7 = Math.min(b6.pJ.pK(pz || .5) * px[1] * at.pL, at.j7 - 2 * bY.gap), this.a1 = Math.min(this.j7 * (px[0] / px[1]), at.a1 - 2 * bY.gap), this.j7 = px[1] * this.a1 / px[0], this.ef = bY.gap + py[0] * (at.a1 - this.a1 - 2 * bY.gap),
			this.eh = bY.gap + py[1] * (at.j7 - this.j7 - 2 * bY.gap)
	}, this.q0 = function() {
		return this.ef + .5 * this.a1
	}
}

function q1(q2, q3) {
	var qC, self, q4 = document.createElement("div"),
		q5 = document.createElement("div"),
		q6 = document.createElement("div"),
		q7 = null,
		qD = (this.q8 = new q9({
			value: "",
			e0: -1
		}, 0, qA, function(e) {
			q7.qJ.textContent = 127 - e.target.value.length
		}), 0),
		qE = 1,
		qF = 0,
		qG = 1048575;

	function qA() {
		q2(), q7.qJ.textContent = 127
	}

	function qW(bo) {
		qE ? q4.scrollTop = q4.scrollHeight : bo && (q4.scrollTop = qF)
	}

	function qY(qZ, qc) {
		var qJ = document.createElement("span");
		return qJ.textContent = bk.qU.qd(qZ, bk.s.qN[0], qc), qJ.style.display = "inline-block", qJ.style.color = bk.qU.qe(qZ.qf), qJ.style.cursor = "pointer", qJ.style.margin = "0", qJ.style.font = "inherit", qJ.style.minWidth = qJ.style.minHeight =
			"1em", qJ.style.backgroundColor = b7.n6, bk.qU.qg(qZ) && (qJ.style.textDecoration = "underline"), bk.qU.qh(qZ.qf, qZ.qi) && (qJ.style.fontWeight = "bold"), qJ.onclick = function(e) {
				q3(e, qZ)
			}, bF.pn() || (qJ.onmouseover = function(e) {
				bk.qj.qk(e, qZ)
			}), qJ
	}

	function qa(qb) {
		var qJ = document.createElement("span");
		return qJ.textContent = qb.p0, qJ.style.color = qb.color, qJ.style.margin = "0", qJ.style.font = "inherit", qJ.style.backgroundColor = b7.mS, qb.ql && (qJ.style.fontWeight = "bold"), qJ
	}
	this.qK = function(qL) {
			qG = 1048575, q5.textContent = "", qL || this.lH()
		}, this.lH = function() {
			var qM = bk.s.qN[0],
				qO = bk.s.qP[qM],
				qQ = qO.qQ,
				eY = qQ.length,
				iu = 1048575 === qG ? 0 : eY - (qO.qR - qG + 1048575) % 1048575;
			if (qG = qO.qR, !(eY <= (iu = Math.max(iu, 0)))) {
				for (var qS = document.createDocumentFragment(), a7 = iu; a7 < eY; a7++) ! function(qS, pB) {
					var oy;
					pB && ((oy = document.createElement("div")).style.margin = "0.6em 0 0.6em 0", oy.style.font = "inherit", oy.style.marginLeft = oy.style.marginRight = "inherit", oy.style.fontSize = pB.fontSize.toFixed(2) + "em", pB.id && (oy
						.style.qX = "italic"), oy.appendChild(qY(pB.qZ[0], 0)), oy.appendChild(qa(pB.qb[0])), pB.id && oy.appendChild(qY(pB.qZ[1], 15 !== pB.id)), pB.id && oy.appendChild(qa(pB.qb[1])), qS.appendChild(oy))
				}(qS, bk.qU.qV(qM, qQ[a7]));
				q5.appendChild(qS), qW()
			}
		}, this.show = function(pD) {
			pD.appendChild(q4), pD.appendChild(q6), this.resize(pD)
		}, this.qm = function(pD) {
			pD.removeChild(q4), pD.removeChild(q6)
		}, this.resize = function(pD) {
			qD = pD ? pD.offsetHeight : qD;
			var pD = b6.pJ.qo(.04, .75),
				qp = Math.max(pD, qD - pD),
				qq = at.a1 / at.pP,
				qr = .7 * qq,
				qp = (q6.style.top = b6.pJ.pU(qD - pD), q6.style.height = b6.pJ.pU(pD), q4.style.top = b6.pJ.pU(qD - pD - qp), q4.style.height = b6.pJ.pU(qp), b6.pJ.pV(q4, 2), this.q8.e.style.width = b6.pJ.pU(qr), this.q8.e.style.fontSize = qC.button
					.style.fontSize = b6.pJ.pU(.5 * pD), b6.pJ.pV(this.q8.e, 6), qC.button.style.left = b6.pJ.pU(qr), qC.button.style.width = b6.pJ.pU(qq - qr), .385 * pD);
			q5.style.marginLeft = q5.style.marginRight = b6.pJ.pU(.5 * qp), q5.style.fontSize = b6.pJ.pU(qp), qW(1)
		}, (self = this).q8.e.qH = 127, q4.style.position = "absolute", q4.style.top = "0", q4.style.left = "0", q4.style.width = "100%", q4.style.overflowX = "hidden", q4.style.overflowY = "auto", q4.style.font = "inherit", q4.style
		.backgroundColor = b7.mS, q4.addEventListener("scroll", function() {
			qF = q4.scrollTop, qE = qF < q4.scrollHeight - q4.clientHeight - 2 ? 0 : 1
		}), q5.style.font = "inherit", q6.style.position = "absolute", q6.style.left = "0", q6.style.width = "100%", self.q8.e.setAttribute("placeholder", L(13)), self.q8.e.style.position = "absolute", self.q8.e.style.top = "0", self.q8.e.style
		.left = "0", self.q8.e.style.height = "100%", self.q8.e.style.backgroundColor = b7.mS, self.q8.e.style.textAlign = "center", (qC = new q(L(14), qA)).button.top = "0", qC.button.style.position = "absolute", qC.button.style.height = "100%", qC
		.pf(b7.nX), q7 = new qI("127", qC.button, 1, 1), q4.appendChild(q5), q6.appendChild(self.q8.e), q6.appendChild(qC.button)
}

function qt(qu, pW, qv) {
	function click() {
		var value = 1 - qu.value;
		this.textContent = (value ? "🟩 " : "⬜ ") + pW, void 0 !== qu.e0 ? bf.qw.qx(qu.e0, value) : qu.value = value, qv && qv(value)
	}
	var e;
	pW = pW || L(15), this.e = document.createElement("p"), (e = this.e).textContent = (qu.value ? "🟩 " : "⬜ ") + pW, e.style.margin = "0", e.style.marginBottom = "0.5em", e.style.cursor = "pointer", e.addEventListener("click", click)
}

function qy(pD, p6) {
	var oy = document.createElement("div");
	this.pF = oy, this.resize = function() {
		oy.style.padding = b6.pJ.pU(bY.pR), oy.style.lineHeight = b6.pJ.pU(b6.pJ.qo(.035))
	}, pD.style.overflowX = "hidden", pD.style.overflowY = "auto", oy.innerHTML = p6, pD.appendChild(oy)
}

function qz(r0) {
	var oy = document.createElement("div");
	this.e = oy, this.r1 = r0, this.resize = function() {
		for (var eY = r0.length, a7 = 1; a7 < eY; a7++) b6.pJ.pV(r0[a7], 4)
	};
	var a7, eY = r0.length;
	for (oy.style.width = "100%", oy.style.height = "2.7em", oy.style.marginTop = "0.6em", oy.style.border = "inherit", a7 = 0; a7 < eY; a7++) r0[a7].style.verticalAlign = "top", r0[a7].style.width = (100 / eY).toFixed(2) + "%", r0[a7].style.height =
		"100%", r0[a7].style.fontSize = "0.75em", oy.appendChild(r0[a7])
}

function r2(r3, pY, r4) {
	this.oy = document.createElement("div"), this.pu = r3;
	var r5 = 0;
	this.resize = function(pD, r7) {
		var eY = r3.length;
		if (!r4)
			for (var a7 = 1; a7 < eY; a7++) b6.pJ.pV(r3[a7].button, 4);
		for (var r8 = 0, a7 = 0; a7 < eY; a7++) r8 += r3[a7].button.offsetWidth;
		if (pD && (r5 = pD.offsetWidth), r7 && r8 < r5)
			for (a7 = 0; a7 < eY; a7++) r3[a7].button.style.width = (100 * r3[a7].button.offsetWidth / r8).toFixed(2) + "%";
		else
			for (a7 = 0; a7 < eY; a7++) r3[a7].button.style.width = "auto";
		r7 || this.resize(pD, 1)
	};
	var r6 = this;
	r6.oy.style.height = r6.oy.style.maxHeight = "100%";
	for (var a7 = 0; a7 < r3.length; a7++) r3[a7].pf(pY), r3[a7].button.style.height = "100%", r3[a7].button.style.padding = "0.0em 0.9em", r6.oy.appendChild(r3[a7].button)
}

function r9() {
	var e;
	this.e = document.createElement("hr"), this.resize = function() {
		b6.pJ.pV(this.e, 8, b7.mf)
	}, (e = this.e).style.marginBottom = e.style.marginTop = "0.65em", e.style.marginLeft = e.style.marginRight = "-4%", e.style.border = "none"
}

function rA() {
	var rB = document.createElement("div"),
		rC = 0,
		rD = 0;
	this.show = function(ef, eh, p0, rE) {
		if (rC) {
			if (!rE) return;
			this.qm()
		}
		rD = rE, rC = 1, rB.textContent = p0, b6.pJ.pV(rB, 5), rB.style.font = b6.pJ.rF(0, b6.pJ.qo(.015)), rB.style.padding = "0.3em 0.6em", rB.style.left = ef + "px", rB.style.top = eh - b6.pJ.qo(.036) + "px", document.body.appendChild(rB), rB
			.style.top = eh - rB.offsetHeight + rD * bY.rG + "px"
	}, this.qm = function(rH) {
		!rC || rH && rD || (rC = 0, document.body.removeChild(rB))
	}, rB.style.position = "absolute", rB.style.backgroundColor = b7.mT, rB.style.color = b7.mX, rB.style.whiteSpace = "pre", rB.style.pointerEvents = "none"
}

function q9(rI, type, rJ, rK) {
	var e;
	this.e = document.createElement("input"), (e = this.e).type = type ? "number" : "text", e.id = "input" + n.s.rL++, e.value = rI.value, e.style.width = "100%", e.style.userSelect = "none", e.style.outline = "none", e.style.resize = "none", e.style
		.border = "inherit", e.style.font = "inherit", e.style.color = b7.mX, e.style.backgroundColor = b7.mQ, e.style.fontSize = "1em", e.style.padding = "0.1em 0.2em", e.addEventListener("focus", function() {
			at.rM++
		}), e.addEventListener("blur", function() {
			at.rM--, -1 !== rI.e0 && bf.qw.qx(rI.e0, e.value)
		}), e.addEventListener("keypress", function(event) {
			"Enter" === event.key && (event.preventDefault(), -1 !== rI.e0 && bf.qw.qx(rI.e0, e.value), rJ ? rJ() : e.blur())
		}), rK && e.addEventListener("input", function(pB) {
			rK(pB)
		})
}

function rN(pD, data) {
	var eY = data.rO.length,
		rP = document.createElement("div"),
		rQ = document.createElement("div"),
		rR = document.createElement("div"),
		rS = new Array(eY),
		pE = new Array(eY),
		rT = new Array(data.rU.length),
		rV = b6.color.mR(70, 70, 0, .35);

	function pq() {
		this.style.backgroundColor = b6.color.pq(rV, 160)
	}

	function rZ() {
		this.style.backgroundColor = rV
	}

	function pN() {
		var er;
		for (pD.style.font = b6.pJ.rF(0, b6.pJ.rj(.026, .5, .03)), a7 = 1; a7 < rT.length; a7++) b6.pJ.pV(rT[a7], 4);
		if (b6.pJ.pV(rP, 2), eY) {
			for (var gy, rk = rP.offsetWidth, rl = rR.offsetWidth, a7 = 0; a7 < rT.length; a7++) gy = .01 * data.rY[a7] * rl, rT[a7].style.width = (100 * gy / rk).toFixed(2) + "%";
			var kO = data.rO[0].length;
			for (a7 = 0; a7 < eY; a7++)
				for (b6.pJ.pV(rS[a7], 2), er = 1; er < kO; er++) b6.pJ.pV(pE[a7][er], 4)
		}
	}
	this.resize = function() {
			pN(), pN()
		}, pD.style.display = "flex", pD.style.flexDirection = "column", rQ.style.overflowX = "hidden", rQ.style.overflowY = "auto",
		function() {
			var eb, a7, rO = data.rO,
				kO = eY ? rO[0].length : 0;
			for (a7 = 0; a7 < eY; a7++) {
				rS[a7] = document.createElement("div"), rS[a7].style.backgroundColor = function(a7) {
					return a7 % 2 == 1 ? b6.color.mR(130, 130, 130, .35) : b7.mW
				}(a7), rS[a7].style.width = "100%", rS[a7].style.display = "flex", pE[a7] = new Array(kO);
				for (var er = 0; er < kO; er++) pE[a7][er] = eb = document.createElement("div"), eb.style.display = "flex", eb.style.justifyContent = "center", eb.style.wordBreak = "break-all", eb.style.padding = "0.4em 0em", eb.style.width = data
					.rY[er] + "%", eb.innerHTML = rO[a7][er].f0, 1 === rO[a7][er].dk && (eb.name = "" + a7, eb.style.color = b7.nM, eb.style.backgroundColor = rV, eb.addEventListener("mouseover", pq), eb.addEventListener("mouseout", rZ), function(eb,
						rb, rc) {
						2147483647 !== rc && eb.addEventListener("click", function() {
							b9.a3(30), b9.a4(30, rb), bD.dU(b9.a8), this.style.backgroundColor = rV, n.o(8, n.rd, new re(25, {
								rf: 0,
								rb: bB.rg.rh(bB.rg.ri(5)),
								rc: rc
							}))
						})
					}(eb, rO[a7][er].rb, rO[a7][er].rc)), rS[a7].appendChild(eb)
			}
			for (rP.style.display = "flex", rP.style.backgroundColor = b6.color.mR(0, 120, 0, .35), a7 = 0; a7 < rT.length; a7++) rT[a7] = eb = document.createElement("div"), eb.style.display = "flex", eb.style.justifyContent = "center", eb.style
				.wordBreak = "break-all", eb.style.padding = "0.4em 0em", eb.style.width = data.rY[a7] + "%", eb.innerHTML = data.rU[a7], rP.appendChild(eb)
		}();
	for (var a7 = 0; a7 < eY; a7++) rR.appendChild(rS[a7]);
	rQ.appendChild(rR), pD.appendChild(rP), pD.appendChild(rQ)
}

function rm() {
	var rq, a7, rn = document.createElement("div"),
		ro = document.createElement("div"),
		rp = document.createElement("div"),
		rR = document.createElement("div"),
		pu = [],
		rU = ["Best 1v1 Player", "Top Clan", "Leading Clan Member"],
		rr = [1, 0, 2];

	function rs(a7) {
		n.o(8, 0, new re(21, {
			rt: rr[a7],
			ru: 0,
			rv: 10
		}))
	}
	for (this.show = function() {
			this.qx(n.s.rw), document.body.appendChild(rn)
		}, this.qm = function() {
			document.body.removeChild(rn)
		}, this.qx = function(rw) {
			for (var a7 = 0; a7 < pu.length; a7++) pu[rr[a7]].button.innerHTML = rU[a7] + "<br>" + rw[a7]
		}, this.resize = function() {
			var a7, rx = bY.gap,
				j7 = b6.pJ.ry(.085),
				a1 = Math.min(4 * j7, at.a1 - 2 * rx),
				eY = pu.length;
			for (b6.pJ.rz(rn, rx, at.j7 - rx - j7, a1, j7), b6.pJ.pV(rn), b6.pJ.pV(ro, 6), a7 = 0; a7 < eY - 1; a7++) b6.pJ.pV(pu[a7].button, 6);
			for (a7 = 0; a7 < eY; a7++) pu[a7].button.style.fontSize = b6.pJ.s0(.22 * j7);
			if (!rq) {
				if (!aX.s1()) return;
				(rq = aX.get(14)).style.width = "24%", rq.style.position = "absolute", ro.appendChild(rq)
			}
			rq.style.left = b6.pJ.pU(0), rq.style.top = "7%"
		}, rn.style.position = "absolute", ro.style.width = "25%", ro.style.height = "100%", ro.style.backgroundColor = b7.mT, rp.style.position = "absolute", rp.style.width = "75%", rp.style.height = "100%", rp.style.backgroundColor = b7.mT, rp
		.style.top = rp.style.right = b6.pJ.pU(0), rp.style.overflowX = "auto", rp.style.overflowY = "hidden", rp.style.whiteSpace = "nowrap", rR.style.height = rR.style.maxHeight = "100%", pu.push(new q("", function() {
			rs(0)
		}, b7.n6)), pu.push(new q("", function() {
			rs(1)
		}, b7.mt)), pu.push(new q("", function() {
			rs(2)
		}, b7.nB)), a7 = 0; a7 < pu.length; a7++) pu[a7].button.style.height = "100%", rR.appendChild(pu[a7].button);
	rp.appendChild(rR), rn.appendChild(ro), rn.appendChild(rp)
}

function s2(s3, s4, s5, s6, q2, q3) {
	var s7 = document.createElement("div"),
		s8 = document.createElement("div"),
		s9 = document.createElement("div"),
		sA = document.createElement("div"),
		sB = document.createElement("div"),
		sC = document.createElement("div"),
		sD = document.createElement("div"),
		sE = document.createElement("div"),
		sF = document.createElement("span"),
		sG = document.createElement("div");
	this.sH = new q1(q2, q3), this.sI = new sJ(q3), this.sK = [s3, s4, s5, s6], this.sO = function(sP) {
		sP = (sP / 10).toFixed(1) + "%";
		sE.style.width = sP, sF.innerHTML = sP
	}, this.sQ = function() {
		this.sI.qm(sC), this.sH.show(sC)
	}, this.sR = function() {
		this.sH.qm(sC), this.sI.show(sC)
	}, this.show = function() {
		document.body.appendChild(s7)
	}, this.qm = function() {
		document.body.removeChild(s7)
	}, this.resize = function(sS) {
		var sT = 1 - .4 * u.v.sU() * (at.a1 > 1.6 * at.j7),
			sV = b6.pJ.qo(.05 * sT),
			sW = at.j7 > at.a1,
			sX = b6.pJ.qo(.07 * sT + .03 * sW),
			sY = b6.pJ.qo(.04 + .02 * sW),
			sT = b6.pJ.qo(.02 * sT + .01 * sW);
		s7.style.font = b6.pJ.rF(0, b6.pJ.qo(.025)), s8.style.height = b6.pJ.pU(sV), b6.pJ.pV(s8, 2), s9.style.top = b6.pJ.pU(sV), s9.style.height = b6.pJ.pU(sX), b6.pJ.pV(s9, 2), sA.style.font = b6.pJ.rF(0, b6.pJ.qo(.02)), sA.style.top = b6.pJ
			.pU(sV + sX), sA.style.height = b6.pJ.pU(sY), b6.pJ.pV(sA, 2), sB.style.top = b6.pJ.pU(sV + sX + sY), sB.style.height = b6.pJ.pU(sX), b6.pJ.pV(sB, 2), sC.style.top = b6.pJ.pU(sV + sX + sY + sX), sC.style.height = b6.pJ.pU(at.j7 / at
				.pP - sV - 3 * sX - sY - sT), sD.style.top = b6.pJ.pU(at.j7 / at.pP - sX - sT), sD.style.height = b6.pJ.pU(sT), b6.pJ.pV(sD, 8), sF.style.font = b6.pJ.rF(0, .8 * sT), sG.style.top = b6.pJ.pU(at.j7 / at.pP - sX), sG.style.height =
			b6.pJ.pU(sX), b6.pJ.pV(sG, 8), s3.resize(s9), s4.resize(s9), s5.resize(s9), s6.resize(s9), sS ? this.sH.resize(sC) : this.sI.resize()
	};
	q2 = this;
	s7.style.position = "absolute", s7.style.top = "0", s7.style.left = "0", s7.style.width = "100%", s7.style.height = "100%", s7.style.backgroundColor = b7.mW, bF.pn() || (s7.style.backdropFilter = "blur(4px)", s7.style.webkitBackdropFilter =
		"blur(4px)"), s8.style.position = "absolute", s8.style.top = "0", s8.style.left = "0", s8.style.width = "100%", s8.style.display = "flex";
	for (var g = [s9, sA, sB, sG], a7 = 0; a7 < g.length; a7++) g[a7].style.position = "absolute", g[a7].style.left = "0", g[a7].style.width = "100%", g[a7].style.overflowX = "auto", g[a7].style.overflowY = "hidden", g[a7].style.whiteSpace =
	"nowrap";
	sC.style.position = "absolute", sC.style.left = "0", sC.style.width = "100%", sC.style.font = "inherit", sD.style.position = "absolute", sD.style.left = "0", sD.style.width = "100%", sE.style.position = "absolute", sE.style.top = "0", sE.style
		.left = "0", sE.style.height = "100%", sE.style.width = "50%", sE.style.backgroundColor = b7.mr, sF.innerHTML = "", sF.style.position = "absolute", sF.style.top = "50%", sF.style.left = "50%", sF.style.transform = "translate(-50%, -50%)", s8
		.appendChild(function() {
			var sN = document.createElement("h1");
			return sN.textContent = "Lobby", sN.style.margin = "auto", sN.style.fontFamily = "inherit", sN.style.fontSize = "inherit", sN.style.fontWeight = "inherit", sN
		}()), s9.appendChild(s3.oy), sA.appendChild(s4.oy), sB.appendChild(s5.oy), sD.appendChild(sE), sD.appendChild(sF), sG.appendChild(s6.oy), s7.appendChild(s8), s7.appendChild(s9), s7.appendChild(sA), s7.appendChild(sB), s7.appendChild(sC), s7
		.appendChild(sD), s7.appendChild(sG), q2.sI.show(sC)
}

function sJ(q3) {
	var s7 = document.createElement("div"),
		sC = document.createElement("div");
	this.lH = function() {
			sC.textContent = "", bk.qj.qm(1);
			for (var qS = document.createDocumentFragment(), sa = bk.s.qN[0], sb = bk.sb.sc[sa], sd = bk.sb.sd[sa], a7 = 0; a7 < sb.length; a7++) ! function(qS, pB, sf, sa) {
				var qJ = document.createElement("span");
				qJ.textContent = (sf ? "🟢 " : "⚪ ") + bk.qU.qd(pB, sa), qJ.style.color = bk.qU.qe(pB.qf), qJ.style.cursor = "pointer", qJ.style.margin = "0.2em 0.4em 0.2em 0.4em", qJ.style.font = "inherit", qJ.style.display = "inline-block", bk
					.qU.qg(pB) && (qJ.style.textDecoration = "underline"), qJ.onclick = function(e) {
						q3(e, pB)
					}, bF.pn() || (qJ.onmouseover = function(e) {
						bk.qj.qk(e, pB)
					}), qS.appendChild(qJ)
			}(qS, sb[a7], a7 < sd, sa);
			sC.appendChild(qS)
		}, this.show = function(pD) {
			pD.appendChild(s7)
		}, this.qm = function(pD) {
			pD.removeChild(s7)
		}, this.resize = function() {
			sC.style.fontSize = b6.pJ.pU(b6.pJ.qo(.02, .3))
		}, s7.style.top = "0", s7.style.left = "0", s7.style.width = s7.style.height = "100%", s7.style.overflowX = "hidden", s7.style.overflowY = "auto", s7.style.font = "inherit", sC.style.font = "inherit", sC.style.margin = "0.4em", s7
		.appendChild(sC)
}

function sg(r3) {
	var s7 = document.createElement("div"),
		sh = document.createElement("div"),
		rC = (this.ef = 0, this.eh = 0);

	function sj() {
		bk.sk.qm()
	}
	this.pu = r3, this.show = function(ef, eh, sm) {
		if (rC) return [0, 0];
		rC = 1, this.ef = ef, this.eh = eh,
			function(self, sm) {
				var a1 = b6.pJ.qo(.16, .7),
					j7 = r3.length * a1 / 3,
					so = at.a1 / at.pP,
					sp = at.j7 / at.pP,
					m9 = Math.min(1, Math.min(so / a1, sp / j7));
				a1 *= m9, j7 *= m9, sm && (self.ef += b6.pJ.qo(.03, .5)), self.ef = bH.or(self.ef, 0, so - a1), self.eh = bH.or(self.eh, 0, sp - j7), sh.style.left = self.ef + "px", sh.style.top = self.eh + "px", sh.style.width = a1 + "px", sh
					.style.height = j7 + "px", sh.style.font = b6.pJ.rF(0, .34 * j7 / r3.length), b6.pJ.pV(sh, 5);
				for (var a7 = 1; a7 < r3.length; a7++) b6.pJ.pV(r3[a7].button, 8)
			}(this, sm), document.body.appendChild(s7)
	}, this.qm = function() {
		rC && (rC = 0, s7.removeEventListener("click", sj), document.body.removeChild(s7))
	}, s7.style.position = "fixed", s7.style.top = "0", s7.style.left = "0", s7.style.width = "100%", s7.style.height = "100%", s7.style.zIndex = "5", sh.style.position = "absolute";
	for (var sl = (100 / r3.length).toFixed(2) + "%", a7 = 0; a7 < r3.length; a7++) r3[a7].button.style.width = "100%", r3[a7].button.style.height = r3[a7].button.style.maxHeight = sl, r3[a7].button.style.padding = "0.0em 0.9em", sh.appendChild(r3[
		a7].button);
	s7.appendChild(sh), s7.addEventListener("click", sj)
}

function sq(rI, sr) {
	this.p9 = [];
	var ss = this.p9;

	function click() {
		for (var a7 = 0; a7 < ss.length; a7++) ss[a7].textContent = ss[a7].textContent.replace("🟢", "⚪");
		this.textContent = this.textContent.replace("⚪", "🟢");
		var e0 = parseInt(this.name);
		void 0 !== rI.e0 && bf.qw.qx(rI.e0, e0), sr && sr(e0)
	}
	for (var st, eY = rI.su.length, a7 = 0; a7 < eY; a7++)(st = document.createElement("p")).textContent = "⚪ " + rI.su[a7], st.style.margin = "0", st.name = "" + a7, st.style.cursor = "pointer", st.style.fontSize = "1em", st.addEventListener(
		"click", click), ss.push(st);
	ss[rI.value].textContent = ss[rI.value].textContent.replace("⚪", "🟢")
}

function sv(title, sw, sx) {
	var rn = document.createElement("div"),
		sy = document.createElement("div"),
		rR = document.createElement("div"),
		sz = document.createElement("div"),
		t0 = document.createElement("div");
	this.t1 = rR, this.t2 = sw, this.show = function() {
			!1 !== sx ? document.body.appendChild(rn) : (document.body.appendChild(sy), document.body.appendChild(sz))
		}, this.qm = function() {
			!1 !== sx ? document.body.removeChild(rn) : (document.body.removeChild(sy), document.body.removeChild(sz))
		}, this.t6 = function() {
			var qp = b6.pJ.qo(.1),
				qn = b6.pJ.qo(.08 + .04 * (at.t7 < 1));
			return {
				qp: qp,
				qn: qn,
				t8: at.j7 / at.pP - qp - qn
			}
		}, this.resize = function(r7) {
			var eY = sw.length,
				t9 = this.t6(),
				qp = t9.qp,
				qn = t9.qn;
			for (sy.style.height = b6.pJ.pU(qp), b6.pJ.pV(sy, 2), sz.style.top = b6.pJ.pU(at.j7 / at.pP - qn), sz.style.height = b6.pJ.pU(qn), b6.pJ.pV(sz, 8), rR.style.top = b6.pJ.pU(qp), rR.style.height = rR.style.maxHeight = b6.pJ.pU(t9.t8), sy
				.style.font = b6.pJ.rF(0, b6.pJ.qo(.02, .3)), sz.style.font = b6.pJ.rF(0, b6.pJ.qo(.02, .7)), rR.style.font = b6.pJ.rF(0, b6.pJ.qo(.02, .7)), a7 = 1; a7 < eY; a7++) b6.pJ.pV(sw[a7].button, 4);
			for (var r8 = 0, a7 = 0; a7 < eY; a7++) r8 += sw[a7].button.offsetWidth;
			if (r7 && r8 < sz.offsetWidth)
				for (a7 = 0; a7 < eY; a7++) sw[a7].button.style.width = (100 * sw[a7].button.offsetWidth / r8).toFixed(2) + "%";
			else
				for (a7 = 0; a7 < eY; a7++) sw[a7].button.style.width = "auto";
			r7 || this.resize(!0)
		}, this.tA = function() {
			var t9 = this.t6(),
				et = at.pP;
			tB.fillStyle = b7.mT, tB.fillRect(0, et * t9.qp, at.a1, et * t9.t8)
		}, rn.style.position = "absolute", rn.style.top = "0", rn.style.left = "0", rn.style.width = "100%", rn.style.height = "100%", sy.style.position = "absolute", sy.style.top = "0", sy.style.left = "0", sy.style.width = "100%", sy.style
		.display = "flex", sy.style.backgroundColor = b7.mT, sz.style.position = "absolute", sz.style.left = "0", sz.style.width = "100%", sz.style.overflowX = "auto", sz.style.overflowY = "hidden", sz.style.whiteSpace = "nowrap", t0.style.height =
		t0.style.maxHeight = "100%", rR.style.position = "absolute", rR.style.width = "100%", rR.style.backgroundColor = b7.mT,
		function() {
			for (var a7 = 0; a7 < sw.length; a7++) sw[a7].button.style.height = "100%", sw[a7].button.style.padding = "0.0em 0.9em"
		}();
	for (var a7 = 0; a7 < sw.length; a7++) t0.appendChild(sw[a7].button);
	sy.appendChild(function() {
		var t5 = document.createElement("h1");
		return t5.textContent = title, t5.style.margin = "auto", t5.style.fontSize = 20 < title.length && at.j7 > at.a1 ? "1.8em" : "2.3em", t5
	}()), sz.appendChild(t0), !1 !== sx && (rn.appendChild(rR), rn.appendChild(sy), rn.appendChild(sz))
}

function qI(tC, tD, tE, tF) {
	var self;
	this.qJ = document.createElement("span"), (self = this).qJ.textContent = tC, self.qJ.style.color = b7.mX, self.qJ.style.position = "absolute", self.qJ.style.font = "inherit", tF ? self.qJ.style.bottom = "0.06em" : self.qJ.style.top = "0.12em",
		tE ? self.qJ.style.left = "0.2em" : self.qJ.style.right = "0.2em", self.qJ.style.fontSize = "0.6em", self.qJ.style.pointerEvents = "none", self.qJ.style.whiteSpace = "pre", tD.style.position = "relative", tD.style.overflow = "hidden", tD
		.appendChild(self.qJ)
}

function tG(tH, tI, tJ, tK) {
	var tL = document.createElement("textarea"),
		tM = (this.e = tL, !0);

	function tR() {
		tL.select(), document.execCommand("copy")
	}
	this.resize = function() {
			tI && b6.pJ.pV(tL, 5)
		}, this.tN = function(qb) {
			tL.value = qb
		}, this.tO = function() {
			return tL.value
		}, this.tP = function() {
			tL.select()
		}, this.clear = function() {
			tL.value = ""
		}, this.tQ = function() {
			tM && navigator.clipboard ? (tL.select(), navigator.clipboard.writeText(tL.value).catch(function() {
				tM = !1, tR()
			})) : tR()
		}, tL.setAttribute("id", "textArea" + n.s.rL++), tL.setAttribute("autocomplete", "off"), tH && tL.setAttribute("placeholder", tH), tL.style.top = "0", tL.style.left = "0", tL.style.width = "100%", tL.style.height = "100%", tL.style
		.userSelect = "none", tL.style.outline = "none", tL.style.resize = "none", tL.style.border = "none", tL.style.color = b7.mX, tL.style.backgroundColor = b7.mQ, tK ? (tL.style.fontSize = "1em", tL.rows = 6, tL.style.padding = "0.25em") : (tL
			.style.padding = "0.45em", tL.style.fontSize = "1.2em"), tJ && tL.addEventListener("input", function(e) {
			tJ(e)
		}), tL.addEventListener("focus", function() {
			at.rM++
		}), tL.addEventListener("blur", function() {
			at.rM--
		})
}

function dB() {
	this.pc = new tS, this.dp = new tT, this.qw = new tU, this.s = new tV, this.dU = function() {
		this.dp.dU(), (new tW).dU()
	}
}

function tT() {
	function tX(a7, type, td, f1) {
		bf.dp.data.push({
			e0: a7,
			type: type || 0,
			value: td || 0,
			td: td || 0,
			f1: f1 || 0
		})
	}

	function tY(a7, type, td, f1) {
		bf.dp.data.push({
			e0: a7,
			type: type,
			value: td || "",
			td: td || "",
			f1: f1 || 0
		})
	}

	function tZ(mF) {
		for (var a7 = bf.dp.data.length; a7 < mF; a7++) bf.dp.data.push(null)
	}
	this.data = [], this.dU = function() {
		tX(0, 1, 0, 5), tX(1, 1, 1), tX(2, 0), tY(3, 2), tX(4, 1), tY(5, 2, "Trebuchet MS", 1), tX(6, 0), tX(7, 0, 0), tX(8, 0), tX(9, 1, 1), tX(10, 1), tX(11, 1, 1), tY(12, 2, navigator.language), tZ(100), tY(100, 2), tY(101, 2), tY(102, 2), tY(
				103, 2), tY(104, 2), tY(105, 2), tY(106, 2), tX(107), tX(108), tX(109), tY(110, 2), tX(111), tX(112), tX(113), tY(114, 2), tX(115), tY(116, 2), tX(117, 1), tY(118, 2, "", 2), tX(119, 1, 0, 1), tY(120, 2), tX(121, 1, ~~(262144 *
				Math.random())), tY(122, 2, "Player " + Math.floor(1e3 * Math.random())), tX(123), tY(124), tX(125, 1), tY(126, 2), tX(127, 0, 1), tX(128), tX(129), tX(130), tX(131), tX(132), tY(133, 2), tX(134, 0, 5), tY(135, 2), tY(136, 2), tX(
				137), tX(138), tX(139), tX(140), tX(141), tX(142), tX(143), tX(144), tY(145, 2), tX(146), tX(147), tY(148, 2), tX(149), tX(150, 0, 1), tY(151, 2), tX(152, 0, 5), tX(153, 1), tX(154, 1), tY(155, 2), tY(156, 2), tX(157), tZ(180),
			tX(180, 0), tX(181, 0)
	}, this.qx = function(e0, value) {
		this.data[e0].value = value
	}, this.dq = function(e0, value) {
		this.qx(e0, value), bf.pc.save(e0, String(value)), bf.pc.save(e0, String(this.data[e0].f1), !0)
	}, this.ta = function() {
		for (var a7 = 0; a7 < this.data.length; a7++) this.data[a7] && (bf.pc.save(a7, String(this.data[a7].value)), bf.pc.save(a7, String(this.data[a7].f1), !0))
	}, this.tb = function(e0) {
		return Number(this.data[e0].value)
	}, this.tc = function(e0) {
		return String(this.data[e0].value)
	}
}

function tS() {
	this.te = function(e0, f1) {
		return Number(this.tf(e0, f1))
	}, this.tf = function(e0, f1) {
		var f0 = null;
		return 0 === u.id ? u.tg && (f0 = u.tg.getItem((f1 ? "v" : "d") + e0)) : 1 === u.id ? f0 = u.th.loadString((f1 ? 1e3 : 2e3) + e0) : 2 === u.id && (f0 = u.ti[(f1 ? "v" : "d") + e0]), f0 && 0 !== f0.length ? f0 : null
	}, this.tj = function(eY, tk) {
		var g = [],
			tl = tk ? "e" : "l";
		if (0 === u.id) {
			if (u.tg)
				for (a7 = 0; a7 < eY; a7++) g.push(u.tg.getItem(tl + a7))
		} else if (1 === u.id)
			for (var tm = tk ? 5e3 : 3e3, a7 = 0; a7 < eY; a7++) g.push(u.th.loadString(tm + a7));
		else if (2 === u.id)
			for (a7 = 0; a7 < eY; a7++) g.push(u.ti[tl + a7]);
		return g
	}, this.save = function(e0, value, f1) {
		var tn = (f1 ? "v" : "d") + e0;
		if (0 === u.id) {
			if (u.tg && bf.dp.data[140].value) try {
				u.tg.setItem(tn, value)
			} catch (e) {
				console.log(e)
			}
		} else 1 === u.id ? u.th.saveString((f1 ? 1e3 : 2e3) + e0, value) : 2 === u.id && (u.ti[tn] = value, u.to.postMessage(tn + " " + value))
	}, this.tp = function(g, tk) {
		var eY = g.length,
			tl = tk ? "e" : "l";
		if (0 === u.id) {
			if (u.tg && bf.dp.data[140].value) try {
				for (a7 = 0; a7 < eY; a7++) u.tg.setItem(tl + a7, g[a7])
			} catch (e) {
				console.log(e)
			}
		} else if (1 === u.id)
			for (var tm = tk ? 5e3 : 3e3, a7 = 0; a7 < eY; a7++) u.th.saveString(tm + a7, g[a7]);
		else if (2 === u.id)
			for (a7 = 0; a7 < eY; a7++) u.ti[tl + a7] = g[a7], u.to.postMessage(tl + a7 + " " + g[a7])
	}
}

function tW() {
	this.dU = function() {
		! function() {
			var data = bf.dp.data;
			0 === data[2].f1 && (at.j7 > at.a1 || 0 !== u.id) && (data[2].value = data[2].td = 1);
			0 === data[100].f1 && (data[100].value = data[100].td = (0 === u.id ? "Player " : 1 === u.id ? "Android User " : "iOS User ") + Math.floor(1e3 * Math.random()))
		}();
		var a7, f0, data = bf.dp.data,
			eY = data.length;
		for (a7 = 0; a7 < eY; a7++) data[a7] && data[a7].f1 === bf.pc.te(a7, !0) && (f0 = bf.pc.tf(a7), data[a7].value = null === f0 ? data[a7].td : 2 === data[a7].type ? f0 : Number(f0));
		bf.dp.data[10].value = bf.dp.data[10].td
	}
}

function tV() {
	function tv(g) {
		if (0 === g.length) bf.qw.qx(116, "");
		else {
			for (var ty = g[0], a7 = 1; a7 < g.length; a7++) ty += ";" + g[a7];
			bf.qw.qx(116, ty)
		}
	}
	this.ts = function() {
		bf.dp.data[110].value.length && (bf.dp.data[106].value = bf.dp.data[110], bf.qw.qx(110, ""), this.tt())
	}, this.tt = function() {
		var g = bf.dp.data[116].value.split(";");
		for (g.length % 2 == 1 && g.pop(), g.unshift(bf.dp.data[106].value), g.unshift(bf.dp.data[105].value), a7 = 2; a7 < g.length; a7 += 2)
			if (g[a7] === g[0]) {
				g.splice(a7, 2);
				break
			} for (var tu = [], a7 = 0; a7 < g.length; a7 += 2) tu.push(g[a7]);
		tv(g), bf.dp.data[117].value = 0, bf.dp.data[117].su = tu
	}, this.tw = function(e0) {
		bf.dp.data[117].su.splice(e0, 1), bf.dp.data[117].value = Math.min(e0, bf.dp.data[117].su.length - 1);
		var g = bf.dp.data[116].value.split(";");
		g.splice(2 * e0, 2), tv(g)
	}, this.tx = function(e0) {
		var g = bf.dp.data[116].value.split(";");
		return {
			rb: g[2 * e0],
			password: g[2 * e0 + 1]
		}
	}, this.tz = function() {
		var f0 = bH.or(bf.dp.data[121].value, -1, 262143);
		return f0 = -1 === f0 ? ~~(262144 * Math.random()) : f0
	}
}

function tU() {
	this.qx = function(e0, value) {
		bf.dp.data[e0].value !== value && (bf.dp.dq(e0, value), 0 === e0 ? (n.r(), b3.dU(), n.o(2)) : 1 === e0 ? at.df(1) : 2 === e0 ? at.df(0) : 5 === e0 && (b6.pJ.u0(), at.df(0)))
	}, this.u1 = function() {
		for (var data = bf.dp.data, a7 = 0; a7 < 100; a7++) data[a7] && bf.dp.dq(a7, data[a7].td);
		b6.pJ.u0(), at.df(1), b3.dU()
	}, this.u2 = function() {
		for (var data = bf.dp.data, a7 = 0; a7 < data.length; a7++) data[a7] && bf.dp.qx(a7, data[a7].td)
	}, this.u3 = function() {
		for (var es = bf.dp, a7 = 128; a7 < 135; a7++) es.dq(a7, es.data[a7].td)
	}, this.u4 = function(data) {
		bf.qw.qx(109, data.rc), bf.qw.qx(107, data.u5), bf.qw.qx(108, data.u6), bf.qw.qx(112, data.u7), bf.qw.qx(111, data.u8), bf.qw.qx(113, data.u9), bf.qw.qx(135, data.uA), bf.qw.qx(136, data.uB), bf.qw.qx(137, data.uC), bf.qw.qx(138, data
			.uD), bf.qw.qx(139, data.uE), bf.qw.qx(141, data.uF), bf.qw.qx(142, data.uG), bf.qw.qx(143, data.uH), bf.qw.qx(144, data.uI)
	}
}

function by() {
	this.rg = new uJ, this.uK = new uL, this.uM = new uN, this.dU = function() {
		this.rg.dU()
	}
}

function uL() {
	this.uO = function(size) {
		for (var uP = bD, g = [], a7 = 0; a7 < size; a7++) g.push(String.fromCharCode(uP.oK(16)));
		return g.join("")
	}, this.uQ = function(p0) {
		return 20 < (p0 = p0.trim()).length ? p0.substring(0, 20) : p0
	}
}

function uJ() {
	var uR = new Uint8Array(78);
	this.dU = function() {
		var a7;
		for (uR[50] = 37, a7 = 0; a7 < 10; a7++) uR[a7 + 3] = a7 + 1;
		for (a7 = 0; a7 < 26; a7++) uR[a7 + 20] = a7 + 11, uR[a7 + 52] = a7 + 38
	}, this.uS = function(p0) {
		return p0.trim().replace(new RegExp("[^a-zA-Z0-9_\\-]", "g"), "-")
	}, this.uT = function(p0, size) {
		if ((p0 = this.uS(p0)).length > size) return p0.substring(0, size);
		for (; p0.length < size;) p0 = "-" + p0;
		return p0
	}, this.uU = function(p0) {
		for (var uV = uR, eY = p0.length, g = new Uint8Array(eY), a7 = 0; a7 < eY; a7++) g[a7] = uV[p0.charCodeAt(a7) - 45];
		return g
	}, this.uW = function(uX) {
		b9.a3(6 * uX.length), this.uY(uX), bD.dU(b9.a8)
	}, this.uY = function(uX) {
		for (var eY = uX.length, a1 = b9, a7 = 0; a7 < eY; a7++) a1.a4(6, uX[a7])
	}, this.uZ = function(p0) {
		this.uY(this.uU(p0))
	}, this.ua = function(p0, size) {
		this.uY(this.uU(this.uT(p0, size)))
	}, this.ub = function(p0, size) {
		for (var g = this.uU(this.uT(p0, size)), f0 = 0, m9 = 1, a7 = g.length - 1; 0 <= a7; a7--) f0 += m9 * g[a7], m9 *= 64;
		return f0
	}
}

function uc() {
	var a1, j7, ud;

	function v3(gy, eb, v1, ui, uw) {
		eb = v2(gy, eb + 1 + 2 * ui & 3);
		! function(gy, v4) {
			return 1 < Math.abs(gy % a1 - v4 % a1) || 1 < Math.abs(v7(gy) - v7(v4))
		}(gy, eb) && 0 === uw[eb << 2] && (uw[eb << 2] = v1)
	}

	function v7(g6) {
		return Math.floor((g6 + .5) / a1) % j7
	}

	function v2(g6, eb) {
		return g6 + ud[eb]
	}
	this.ue = function(p0) {
		var a7, uf, eY, ug, uP = bD;
		for (bC.rg.uW(bC.rg.uU(p0)), bO.uj.uk[bO.eE].a1 = bO.ej = a1 = uP.oK(12), bO.uj.uk[bO.eE].j7 = bO.ek = j7 = uP.oK(12), ud = [-a1, -1, a1, 1], bO.ut = document.createElement("canvas"), bO.ut.width = bO.ej, bO.ut.height = bO.ek, bO.up = bO
			.ut.getContext("2d", {
				alpha: !1
			}), bO.uq = bO.uu = null, bO.uq = bO.up.getImageData(0, 0, bO.ej, bO.ek), bO.uu = bO.uq.data, b6.pT.uv(bO.uu), eY = uP.oK(12), uf = uP.oK(5), ug = um(a1 * j7 - 1), a7 = 0; a7 < eY; a7++) ! function(kO, g6, uh, ui) {
			var a7, eb, uP = bD,
				uw = bO.uu,
				ux = g6,
				uy = g6,
				uz = 0,
				v0 = 1 + uh,
				v1 = 2 - uh;
			for (uw[g6 << 2] = v0, a7 = 0; a7 < kO; a7++) eb = uP.oK(2), g6 = v2(g6, eb), uw[g6 << 2] === v0 ? uz % 2 == 1 && v3(uy, uz + 2 * ui + 3, v1, ui, uw) : uw[g6 << 2] = v0, v3(g6, eb, v1, ui, uw), v3(uy, eb, v1, ui, uw), uy = g6,
				uz = eb;
			v2(g6, 0) === ux ? (v3(g6, 0, v1, ui, uw), v3(ux, 0, v1, ui, uw)) : v2(g6, 1) === ux && (v3(g6, 0, v1, ui, uw), v3(ux, 2, v1, ui, uw));
			0 === kO && (v3(ux, 0, v1, ui, uw), v3(ux, 2, v1, ui, uw))
		}(uP.oK(uf), uP.oK(ug), 1 === uP.oK(1), 1 === uP.oK(1));
		var ef, eh, k2, v8, v9, vA, uw = bO.uu,
			vB = !0,
			vC = bO.uj.uk[bO.eE].vC,
			vD = bO.uj.uk[bO.eE].vD;
		for (eh = 0; eh < j7; eh++)
			for (v8 = !0, v9 = vB, ef = vA = 0; ef < a1; ef++) k2 = 4 * eh * a1 + 4 * ef, vA <= ef && 0 < uw[k2] && (v9 = 2 === uw[k2], v8) && (v8 = !1, v9 !== vB) ? (vB = v9, vA = ef + 1, ef = -1) : (v9 ? (uw[k2] = vD[0], uw[1 + k2] = vD[1], uw[
				2 + k2] = vD[2]) : (uw[k2] = vC[0], uw[1 + k2] = vC[1], uw[2 + k2] = vC[2]), uw[3 + k2] = 255);
		bO.up.putImageData(bO.uq, 0, 0), bO.ur = !0, bO.us.dU(), bb.dc = !0
	}
}

function uN() {
	this.ue = function(vE) {
		for (var uP = bD, size = uP.oK(vE), vF = 7 + 9 * uP.oK(1), g = [], a7 = 0; a7 < size; a7++) g.push(String.fromCharCode(uP.oK(vF)));
		return g.join("")
	}
}

function c3() {
	var vG, vH, vI, vJ, vK, vL, vM, vN, vO, vP;

	function vR() {
		var vU = a9.vU;
		for (vO = vU; vO < a9.eV; vO++) vQ();
		for (vO = a9.gu ? a9.jd : 0; vO < vU; vO++) {
			if (!vV()) {
				for (var es = a9.vZ = vO; es < vU; es++) vO = es, vQ();
				return
			}
			vY(vL + vG * vK + bH.dl(vK, 2), vM + vH * vK + bH.dl(vK, 2))
		}
	}

	function w1(player) {
		for (var i9 = ac.i9, iB = ac.iB, iA = ac.iA, iC = ac.iC, eh = iB[player]; eh <= iC[player]; eh++)
			for (var ef = i9[player]; ef <= iA[player]; ef++) {
				var eC = aY.w2(ef, eh);
				aY.g8(eC) && (aY.ip(eC) ? aY.g3(eC, player) : aY.w3(eC, player))
			}
	}

	function w0(g, ru, rv) {
		var dk = g[ru];
		g[ru] = g[rv], g[rv] = dk
	}

	function vV() {
		return function() {
			var a7;
			for (a7 = 0; a7 < 8; a7++)
				if (vG = bH.dl(vI * au.random(), au.value(100)), vH = bH.dl(vJ * au.random(), au.value(100)), w8()) return 1;
			return
		}() || function() {
			var hg, hj, er, vX, es, vW;
			for (hg = bH.dl(vI * au.random(), au.value(100)), hj = bH.dl(vJ * au.random(), au.value(100)), er = 40; 1 <= er; er--)
				for (vX = vJ - er; 0 <= vX; vX -= 40)
					for (vH = (vX + hj) % vJ, es = 40; 1 <= es; es--)
						for (vW = vI - es; 0 <= vW; vW -= 40)
							if (vG = (vW + hg) % vI, w8()) return 1;
			return
		}()
	}

	function w8() {
		for (var g6, wA, gap = bH.dl(vK - vN, 2), wB = vM + vH * vK + gap, wC = vL + vG * vK + gap, w9 = wB + vN - 1; wB <= w9; w9--)
			for (wA = wC + vN - 1; wC <= wA; wA--)
				if (g6 = aY.w2(wA, w9), !aY.eT(g6) || aY.ip(g6)) return;
		return 1
	}

	function vY(vW, vX) {
		vQ(), wD(vW - 2, vX - 2)
	}

	function vQ() {
		ac.lU[vO] = 0, ac.gM[vO] = ac.vy[vO] = 0, ac.g0[vO] = [], ac.gE[vO] = [], ac.gF[vO] = [], ac.ey[vO] = [], ac.i9[vO] = ac.iB[vO] = ac.iA[vO] = ac.iC[vO] = 0
	}

	function wD(vW, vX) {
		var g6, a7, wE, wF;
		for (ac.lU[vO] = 1, ac.i9[vO] = vW + 10, ac.iB[vO] = vX + 10, ac.iC[vO] = ac.iA[vO] = 0, wE = vW; wE < vW + 4; wE++)
			for (wF = vX; wF < vX + 4; wF++)(vW < wE && wE < vW + 3 || vX < wF && wF < vX + 3) && (g6 = aY.w2(wE, wF), aY.eT(g6)) && (ac.i9[vO] = Math.min(wE, ac.i9[vO]), ac.iA[vO] = Math.max(wE, ac.iA[vO]), ac.iB[vO] = Math.min(wF, ac.iB[vO]), ac
				.iC[vO] = Math.max(wF, ac.iC[vO]), vP[ac.gM[vO]] = g6, ac.gM[vO]++, aY.w3(g6, vO));
		for (ac.vy[vO] = ac.gM[vO], a7 = ac.gM[vO] - 1; 0 <= a7; a7--) aY.wG(vP[a7], vO) ? (aY.g3(vP[a7], vO), ac.gE[vO].push(vP[a7])) : aY.wH(vP[a7]) ? (aY.g3(vP[a7], vO), ac.gF[vO].push(vP[a7])) : aY.wI(vP[a7]) && (aY.g3(vP[a7], vO), ac.ey[vO]
			.push(vP[a7]))
	}

	function w7(vW, vX) {
		for (var g6, wA, w9 = vX; vX - 6 < w9; w9--)
			for (wA = vW; vW - 6 < wA; wA--)
				if (g6 = aY.w2(wA, w9), aY.ip(g6)) return;
		return 1
	}
	this.dU = function() {
		if (vP = new Array(12), vN = 6, vK = 10, vI = bH.dl(bO.ej, vK), vJ = bH.dl(bO.ek, vK), vL = bH.dl(bO.ej - vK * vI, 2), vM = bH.dl(bO.ek - vK * vJ, 2), a9.gu)
			for (var a7 = 0; a7 < a9.jd; a7++) vO = a7, vQ(), ac.lU[vO] = 1;
		(0 === a9.data.spawningType ? vR : 1 === a9.data.spawningType ? (vR(), function() {
			var va = a9.vb;
			a9.vc || va++;
			if (!(va < 3)) {
				for (var data = a9.data, iu = (a9.gu ? a9.jd : 0) + data.teamPlayerCount[0], mF = a9.vZ, vd = new Uint32Array(va), ve = new Uint32Array(va), vf = new Uint16Array(va), vg = new Uint16Array(va), eW = bc.eW, i9 = ac.i9, iB =
						ac.iB, iA = ac.iA, iC = ac.iC, fD = bK.fD, fE = bK.fE, a7 = iu; a7 < mF; a7++) fD[a7] = i9[a7] + iA[a7] >> 1, fE[a7] = iB[a7] + iC[a7] >> 1;
				for (a7 = iu; a7 < mF; a7++) {
					var id = eW[a7];
					vd[id] += fD[a7], ve[id] += fE[a7]
				}
				var k3 = bc.k3;
				for (a7 = 1; a7 < va; a7++) {
					var g1 = Math.max(data.teamPlayerCount[k3[a7]], 1);
					vf[a7] = bH.dl(vd[a7], g1), vg[a7] = bH.dl(ve[a7], g1)
				}
				var vh = bc.vh,
					vi = bc.vi,
					vj = bc.vj,
					fC = bK.fC;
				for (a7 = 0; a7 < 512; a7++) fC[a7] = a7;
				for (var dz = 0; dz < 2 + (4 <= va); dz++)
					for (a7 = iu; a7 < mF; a7++) {
						for (var gy = a7, vk = fC[gy], vl = 1, eo = bH.vm(fD[vk] - vf[1], fE[vk] - vg[1]), er = 2; er < va; er++) {
							var vn = bH.vm(fD[vk] - vf[er], fE[vk] - vg[er]);
							vn < eo && (eo = vn, vl = er)
						}
						var vo = eW[gy];
						if (vl !== vo) {
							if (2 === dz && 4 <= va) {
								var vp = Math.max((vl + 1) % va, 1),
									vq = bH.vm(fD[vk] - vf[vp], fE[vk] - vg[vp]);
								for (er = 1; er < va; er++) vn = bH.vm(fD[vk] - vf[er], fE[vk] - vg[er]), eo < vn && vn < vq && (vq = vn, vp = er);
								vp !== vo && bH.vm(vf[vo] - vf[vp], vg[vo] - vg[vp]) < bH.vm(vf[vo] - vf[vl], vg[vo] - vg[vl]) && (vl = vp)
							}
							var vr = k3[vl],
								vs = vi[vr] + (a9.gu ? 0 : vj[vr]),
								v4 = vh[vs],
								vt = fC[v4],
								vu = vi[vr + 1];
							eo = bH.vm(fD[vt] - vf[vo], fE[vt] - vg[vo]);
							for (var et = vs + 1; et < vu; et++) {
								var vv = vh[et],
									vw = fC[vv];
								(vn = bH.vm(fD[vw] - vf[vo], fE[vw] - vg[vo])) < eo && (eo = vn, v4 = vv)
							}
							v4 < iu || mF <= v4 || (vt = fC[v4], vd[vo] += fD[vt] - fD[vk], ve[vo] += fE[vt] - fE[vk], vd[vl] += fD[vk] - fD[vt], ve[vl] += fE[vk] - fE[vt], g1 = data.teamPlayerCount[k3[vo]], vf[vo] = bH.dl(vd[vo], g1),
								vg[vo] = bH.dl(ve[vo], g1), g1 = data.teamPlayerCount[vr], vf[vl] = bH.dl(vd[vl], g1), vg[vl] = bH.dl(ve[vl], g1), fC[gy] = vt, fC[v4] = vk)
						}
					}! function() {
						for (var fC = bK.fC, i9 = ac.i9, iB = ac.iB, iA = ac.iA, iC = ac.iC, gM = ac.gM, vy = ac.vy, gE = ac.gE, gF = ac.gF, ey = ac.ey, a7 = 0; a7 < 512; a7++) {
							var vz = fC[a7];
							if (vz !== a7) {
								w0(i9, a7, vz), w0(iB, a7, vz), w0(iA, a7, vz), w0(iC, a7, vz), w0(gM, a7, vz), w0(vy, a7, vz), w0(gE, a7, vz), w0(gF, a7, vz), w0(ey, a7, vz), w1(a7), w1(vz), fC[a7] = a7;
								for (var j7 = vz, g7 = fC[j7]; g7 !== a7;) g7 = fC[j7 = g7];
								fC[j7] = vz
							}
						}
					}()
			}
		}) : function() {
			var vU = a9.vU;
			for (vO = vU; vO < a9.eV; vO++) vQ();
			for (vO = a9.gu ? a9.jd : 0; vO < vU; vO++)
				if (! function() {
						var spawningData = a9.data.spawningData,
							vW = spawningData[2 * vO] + 1,
							spawningData = spawningData[2 * vO + 1] + 1;
						if (3 < vW && vW < bO.ej - 5 && 3 < spawningData && spawningData < bO.ek - 5 && aY.eT(aY.w2(vW, spawningData)) && w7(vW + 3, spawningData + 3)) return vY(vW + 1, spawningData + 1), 1;
						return
					}()) {
					if (!vV()) {
						for (var es = a9.vZ = vO; es < vU; es++) vO = es, vQ();
						return
					}
					var vW = vL + vG * vK + bH.dl(vK, 2),
						vX = vM + vH * vK + bH.dl(vK, 2);
					vY(vW, vX)
				}
		})(), bZ.lQ[7] = ac.gM[a9.eI]
	}, this.wJ = function(il, wK, wL) {
		var a7, vW, vX, g6, vG, vH;
		for (vO = il, a7 = 0; a7 < 20; a7++)
			for (vW = wK + a7; wK - a7 <= vW; vW--)
				for (vX = wL + a7; wL - a7 <= vX; vX--)
					if ((vW === wK + a7 || vW === wK - a7 || vX === wL + a7 || vX === wL - a7) && 3 < vW && vW < bO.ej - 5 && 3 < vX && vX < bO.ek - 5 && aY.eT(aY.w2(vW, vX)) && w7(vW + 3, vX + 3)) {
						if (0 < ac.gM[vO]) {
							for (vH = vG = g6 = void 0, vG = ac.iA[vO]; vG >= ac.i9[vO]; vG--)
								for (vH = ac.iC[vO]; vH >= ac.iB[vO]; vH--) g6 = 4 * (vH * bO.ej + vG), aY.wN(vO, g6) && (aY.wO(g6), ac.gM[vO]--);
							vQ()
						}
						return wD(vW - 1, vX - 1), !0
					} return !1
	}, this.wP = function(il) {
		vO = il, vV() ? vY(vL + vG * vK + bH.dl(vK, 2), vM + vH * vK + bH.dl(vK, 2)) : vQ()
	}
}

function wQ() {
	an.wR(), tB.setTransform(hw, 0, 0, hw, 0, 0), tB.imageSmoothingEnabled = hw < 3, tB.drawImage(bO.ut, aO.wS(), aO.wT()), bL.wU.tA(), tB.drawImage(wV, aO.wS(), aO.wT()), an.tA(), bJ.tA(), ab.tA(), (a9.m0 ? (bd.tA(), b8) : (aJ.tA(), aR.tA(), aN
	.tA(), b8.tA(), aq.tA(), aS.tA(), aO.tA(), aM.tA(), bd.tA(), aQ.tA(), aL.tA(), aI.tA(), aH.tA(), aT.tA(), ba.tA(), ap)).tA(), n.tA()
}

function wW(wX, a1, j7) {
	wX.clearRect(0, 0, a1, j7), wX.fillStyle = b7.mU, wX.fillRect(0, 0, a1, j7)
}

function wY(wX, a1, j7, wZ) {
	wX.fillStyle = b7.mX, wX.fillRect(0, 0, a1, wZ), wX.fillRect(0, 0, wZ, j7), wX.fillRect(a1 - wZ, 0, wZ, j7), wX.fillRect(0, j7 - wZ, a1, wZ)
}

function wa(wX, ef, eh, hB, wZ, g6, wb) {
	wX.fillStyle = b7.mX;
	var g6 = Math.floor(hB * g6),
		rl = (g6 += (g6 - wZ) % 2, Math.floor((g6 - wZ) / 2)),
		hB = Math.floor((hB - g6) / 2);
	wX.fillRect(ef + hB, eh + hB + rl, g6, wZ), wb && wX.fillRect(ef + hB + rl, eh + hB, wZ, g6)
}

function wd() {
	this.dU = function() {
		8 === a9.jx && aJ.we()
	}, this.wf = function(wg) {
		var elo = a9.data.elo,
			hU = (elo[wg] - elo[1 - wg]) / 10,
			hU = 8 / (1 + Math.pow(2, hU / 32)),
			hU = Math.floor(10 * hU + .5),
			wi = this.wj(elo[wg] + (1 + a9.wk) * hU + 1),
			elo = this.wj(elo[1 - wg] - hU);
		0 === wg ? aJ.wm(wi, elo, ["rgba(10,140,10,0.75)", "rgba(140,10,10,0.75)"]) : aJ.wm(elo, wi, ["rgba(140,10,10,0.75)", "rgba(10,140,10,0.75)"])
	}, this.wj = function(elo) {
		return 16e3 === (elo = bH.or(elo, 0, 16e3)) ? "Unknown" : (elo / 10).toFixed(1)
	}
}

function cY() {
	this.wn = new wo, this.uw = new wp
}

function wp() {
	this.wq = !1;
	this.wu = [], this.wv = 100;
	var lx, ly, gap, hB, wr, wt, ww = 0,
		wx = new Array(9),
		wy = [],
		wz = [],
		x0 = 0,
		x1 = 0,
		x2 = 0,
		x3 = 0;

	function xE() {
		wx.sort(function(er, es) {
			return es.jl - er.jl
		});
		for (var p0 = "" + wx[0].nu, a7 = 1; a7 < 9; a7++) p0 += "," + wx[a7].nu;
		for (a7 = 0; a7 < 9; a7++) p0 += "," + wx[a7].jl;
		bf.dp.dq(120, p0)
	}
	this.dU = function() {
		for (var rr = [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 6], a7 = 0; a7 < rr.length; a7++) {
			var color = 6 === rr[a7] ? b7.mv : b7.mV;
			this.wu.push(b6.canvas.x4(aX.get(3), rr[a7], color))
		}
		for (a7 = 0; a7 < af.wn.x5; a7++) wz.push(af.wn.x6 - af.wn.x5 + a7);
		for (a7 = 0; a7 < af.wn.x7; a7++) wz.push(af.wn.x8 + a7);
		var x9 = af.wn.xA(bG.x9);
		for (a7 = 0; a7 < x9.length; a7++) wz.push(x9[a7]);
		! function() {
			var a7, g = bf.dp.data[120].value.split(",");
			if (18 !== g.length)
				for (a7 = 0; a7 < 9; a7++) wx[a7] = {
					nu: 1015 + a7,
					jl: 0
				};
			else
				for (a7 = 0; a7 < 9; a7++) {
					var f0 = parseInt(g[a7]),
						et = (f0 = 0 <= f0 && f0 < af.wn.x6 ? f0 : 0, parseInt(g[a7 + 9]));
					et = 0 <= et && et < 1e3 ? et : 0, wx[a7] = {
						nu: f0,
						jl: et
					}
				}
		}()
	}, this.show = function(kj, kk, xF) {
		var a7;
		if (x0 = kj, x1 = kk, ww = xF || 0, this.wq = !0, wy = [], 0 === ww)
			for (a7 = 0; a7 < 9; a7++) wy.push(wx[a7].nu);
		else {
			var es = 49 * ww,
				xF = es - 49;
			for (xF >= wz.length && (ww = 1, xF = 0, es = 49), a7 = xF = (es = Math.min(es, wz.length)) - 49; a7 < es; a7++) wy.push(wz[a7])
		}
		wy.push(1024);
		xF = wy.length, hB = Math.floor((u.v.sU() ? .075 : .0468) * at.pL), gap = Math.floor(hB / 3), (x2 = 10 * (wr = hB + gap)) > at.a1 && (x2 = at.a1, gap = (wr = x2 / 10) - (hB = 3 * wr / 4)), wt = bH.dl(xF, 10) + !!(xF % 10), (x3 = wt *
			wr) > at.j7 && (x3 = at.j7, gap = (wr = x3 / wt) - (hB = 3 * wr / 4)), xF = .5 * gap;
		lx = Math.min(Math.max(kj - .5 * x2 + xF, xF), at.a1 - x2 + xF), ly = Math.min(Math.max(kk - .5 * x3 + xF, xF), at.j7 - x3 + xF)
	}, this.gm = function(kj, kk, player) {
		if (!this.wq) return !1;
		if (this.xH(kj, kk)) {
			kj = bH.or(bH.dl(kj - lx + .5 * gap, wr), 0, 9);
			if ((kj += 10 * bH.or(bH.dl(kk - ly + .5 * gap, wr), 0, 9)) >= wy.length) return aH.qm(), !0;
			kk = wy[kj];
			if (1024 === kk) return this.show(x0, x1, ww + 1), !0;
			! function(nu) {
				for (var a7 = 0; a7 < 9; a7++) wx[a7].jl = Math.floor(.99 * wx[a7].jl);
				for (a7 = 0; a7 < 9; a7++)
					if (nu === wx[a7].nu) return wx[a7].jl = Math.min(wx[a7].jl + 30, 999), xE();
				wx.splice(5, 0, {
					nu: nu,
					jl: Math.max(wx[4].jl, 30)
				}), wx.pop(), xE()
			}(kk), player === a9.eI ? b4.gv.nt(kk) : b4.fu.o9(kk, player)
		}
		return aH.qm(), !0
	}, this.xH = function(kj, kk) {
		return !(kj < lx - .5 * gap || kk < ly - .5 * gap || lx + x2 - .5 * gap <= kj || ly + x3 - .5 * gap <= kk)
	}, this.tA = function() {
		tB.fillStyle = b7.mU, tB.fillRect(lx - .5 * gap, ly - .5 * gap, x2, x3);
		for (var k2 = .5 * bY.xI, eY = (tB.lineWidth = bY.xI, tB.strokeStyle = tB.fillStyle = b7.mX, tB.strokeRect(lx - .5 * gap + k2, ly - .5 * gap + k2, x2 - 2 * k2, x3 - 2 * k2), tB.imageSmoothingEnabled = !0, wy.length), a7 = 0; a7 <
			eY; a7++) this.xJ(wy[a7], tB, lx + a7 % 10 * wr, ly + bH.dl(a7, 10) * wr, hB);
		tB.imageSmoothingEnabled = !1
	}, this.xJ = function(nu, hH, ef, eh, hB) {
		var eC;
		nu >= 1024 - af.wn.x5 ? (eC = hB / this.wv, hH.setTransform(eC, 0, 0, eC, ef, eh), hH.drawImage(this.wu[nu - 1024 + af.wn.x5], 0, 0), hH.setTransform(1, 0, 0, 1, 0, 0)) : (b6.pJ.textAlign(hH, 1), b6.pJ.textBaseline(hH, 1), hH.font = b6.pJ
			.rF(0, .89 * hB), hH.fillText(af.wn.xK(nu), ef + .5 * hB, eh + (.35 - b6.pJ.xL + .56) * hB))
	}
}

function wo() {
	this.emojis = ["🥰", "😎", "😘", "😜", "🤗", "🥳", "😇", "😊", "🥱", "🙄", "🤔", "🥺", "😡", "😭", "😱", "😞", "💀", "👹", "👋", "🙏", "👏", "💪", "🙋‍♂️", "🤦‍♂️", "⬆️", "➡️", "⬇️", "⬅️", "👀", "❤️", "💔", "💥", "🔥", "🪦", "🥇", "🥈", "🥉",
		"🎖️", "🏅", "👑", "🎉", "💯", "✝️", "☪️", "🕉️", "☸️", "✡️", "☦️", "⚛️"
	], this.x5 = 13, this.x7 = this.emojis.length, this.x8 = 676, this.x6 = 1024, this.xM = this.emojis.indexOf("💀"), this.xN = this.xM + 1, this.xO = this.emojis.indexOf("🥇"), this.xP = this.emojis.indexOf("😊"), this.xK = function(f0) {
		return f0 < this.x8 ? String.fromCharCode(55356, 56806 + bH.dl(f0, 26), 55356, 56806 + f0 % 26) : this.emojis[Math.min(f0 - this.x8, this.x7 - 1)]
	}, this.xA = function(p0) {
		for (var eY = p0.length - 2, g = [], a7 = 0; a7 < eY; a7++) {
			var hP = p0.charCodeAt(a7) - 56806,
				hQ = p0.charCodeAt(a7 + 2) - 56806;
			0 <= hP && hP < 26 && 0 <= hQ && hQ < 26 && (g.push(26 * hP + hQ), a7 += 3)
		}
		return g
	}, this.xQ = function(f0) {
		return f0 < this.x8
	}, this.xR = function(f0) {
		return f0 >= 1024 - this.x5
	}, this.xS = function(f0) {
		return f0 >= this.x8 && f0 < this.x8 + this.xN
	}
}

function bx() {
	this.rg = new xT, this.uK = new xU, this.uM = new xV, this.dU = function() {
		this.rg.dU()
	}
}

function xU() {
	this.uZ = function(p0) {
		for (var eY = p0.length, a1 = b9, a7 = 0; a7 < eY; a7++) a1.a4(16, p0.charCodeAt(a7))
	}
}

function xT() {
	var xW = new Uint8Array(64);
	this.dU = function() {
		var a7;
		for (xW[0] = 45, xW[37] = 95, a7 = 0; a7 < 10; a7++) xW[a7 + 1] = 48 + a7;
		for (a7 = 0; a7 < 26; a7++) xW[a7 + 11] = 65 + a7, xW[a7 + 38] = 97 + a7
	}, this.ri = function(xX) {
		for (var uP = bD, uX = new Uint8Array(xX), a7 = 0; a7 < xX; a7++) uX[a7] = uP.oK(6);
		return uX
	}, this.rh = function(uX) {
		for (var eY = uX.length, xY = xW, g = [], a7 = 0; a7 < eY; a7++) g.push(String.fromCharCode(xY[uX[a7]]));
		return g.join("")
	}, this.xZ = function(value, xa) {
		for (var xY = xW, g = [], a7 = 0; a7 < xa; a7++) g.push(String.fromCharCode(xY[value >> 6 * (xa - 1 - a7) & 63]));
		return g.join("")
	}
}

function c5() {
	var xb, xc, xd;
	xb = [32, 65, 191, 913, 931], xc = [64, 127, 688, 930, 1155], xd = new Array(xb.length + 1);
	for (var a7 = 0; a7 < xd.length; a7++) {
		xd[a7] = 0;
		for (var er = a7 - 1; 0 <= er; er--) xd[a7] += xc[er] - xb[er]
	}

	function xj(et) {
		for (var a7 = xb.length - 1; 0 <= a7; a7--)
			if (et >= xb[a7] && et < xc[a7]) return a7;
		return -1
	}
	this.uQ = function(p0) {
		return 0 !== (p0 = p0.trim()).indexOf("Bot ") && 0 !== p0.indexOf("[Bot] ") && function(p0, xg, xh) {
			var eY = (p0 = p0.trim()).length;
			if (eY < xg || xh < eY) return !1;
			for (var et, xi = 0, a7 = 0; a7 < eY; a7++)
				if (et = p0.charCodeAt(a7), xi += 65 <= et && et <= 90 || 1040 <= et && et <= 1071 ? 1 : 0, -1 === xj(et)) return !1;
			if (3 < xi && xi > Math.floor(eY / 2)) return !1;
			return !0
		}(p0, 3, 20)
	}, this.xk = function(p0) {
		for (var eY = (p0 = p0.trim()).length, g = [], a7 = 0; a7 < eY; a7++) {
			var et, g6 = xj(et = p0.charCodeAt(a7));
			g.push(xd[g6] + et - xb[g6])
		}
		return g
	}, this.ue = function(g) {
		for (var et, es, p0 = "", eY = g.length, a7 = 0; a7 < eY; a7++)
			for (es = 1; es < xd.length; es++)
				if (g[a7] < xd[es]) {
					et = xb[es - 1] + g[a7] - xd[es - 1], p0 += String.fromCharCode(et);
					break
				} return p0
	}, this.xl = function(p0) {
		for (var g = this.xk(p0), result = "", a7 = 0; a7 < g.length; a7++) result = (result += g[a7] < 10 ? "00" : g[a7] < 100 ? "0" : "") + g[a7].toString(10);
		return result
	}, this.xm = function(p0) {
		for (var g = new Array(Math.floor(p0.length / 3)), a7 = 0; a7 < p0.length; a7 += 3) g[Math.floor(a7 / 3)] = parseInt(p0.substring(a7, a7 + 3));
		return this.ue(g)
	}, this.xn = function(p0) {
		for (var f0, g = [p0.length], a7 = 0; a7 < p0.length; a7++) g[a7] = p0.charCodeAt(a7) - 48;
		var result = "";
		for (a7 = 0; a7 < p0.length; a7++) a7 === p0.length - 1 || 51 < 10 * g[a7] + g[a7 + 1] ? result += g[a7].toString() : (f0 = 10 * g[a7] + g[a7 + 1], result += String.fromCharCode(f0 + (f0 < 26 ? 65 : 71)), a7++);
		return result
	}, this.xo = function(p0) {
		for (var et, result = "", a7 = 0; a7 < p0.length; a7++) 48 <= (et = p0.charCodeAt(a7)) && et < 58 ? result += String.fromCharCode(et) : 65 <= et && et < 75 ? result += "0" + (et - 65).toString() : 75 <= et && et < 91 ? result += (et - 65)
			.toString() : 97 <= et && et < 123 && (result += (et - 71).toString());
		return result
	}, this.xp = function(p0) {
		for (var eY = p0.length, g = [], a7 = 0; a7 < eY; a7++)(et = p0.charCodeAt(a7)) < 58 ? g.push(p0[a7]) : (et -= et < 91 ? 65 : 71, g.push(String(bH.dl(et, 10))), g.push(String(et - 10 * bH.dl(et, 10))));
		var eY = g.length - 2,
			et = 0,
			uX = [];
		for (a7 = 0; a7 < eY; a7 += 3) uX[et++] = parseInt(g[a7] + g[a7 + 1] + g[a7 + 2]);
		return uX
	}, this.xq = function() {
		for (var dz, xr = "", a7 = 0; a7 < 6; a7++) dz = 48 + au.random() % 36, dz += 58 <= dz ? 39 : 0, xr += String.fromCharCode(dz);
		return xr
	}
}

function xV() {
	this.xk = function(p0, vE, xs) {
		for (var xt = [], eY = p0.length, max = 0, a7 = 0; a7 < eY; a7++) {
			var f0 = p0.charCodeAt(a7);
			xt.push(f0), max = Math.max(max, f0)
		}
		var vF = max < 128 ? 7 : 16;
		for (xs.a4(vE, eY), xs.a4(1, +(16 == vF)), a7 = 0; a7 < eY; a7++) xs.a4(vF, xt[a7])
	}
}

function d3() {
	this.xu = new xv, this.xw = new xx, this.result = new xy, this.h2 = new xz, this.y0 = new y1, this.y2 = new y3, this.y4 = new y5, this.dU = function() {
		this.y0.dU()
	}, this.iS = function() {
		this.y0.iS()
	}
}

function xz() {
	this.y6 = function() {
		for (var eY = ah.je, y7 = ah.jg, y8 = [], a7 = 0; a7 < eY; a7++) {
			var g6 = y7[a7];
			aY.y9(g6) && y8.push(g6)
		}
		return y8
	}, this.yA = function() {
		for (var eY = ah.je, y7 = ah.jg, dk = 0, gM = ac.gM, a7 = 0; a7 < eY; a7++) dk += gM[y7[a7]];
		return dk
	}
}

function xv() {
	function yC() {
		if (2 === a9.yG) return 1;
		aq.yH(), a9.yG = 2, a9.yI = a9.yJ
	}

	function yE() {
		bN.y4.yK(), aT.show(1 === a9.yL, !1, 2 === a9.yL), bN.result.yK(), bN.y2.iS(), aJ.yM(!0), aJ.yN(247), aJ.yN(956), aJ.yN(957), aR.lG(!0), aS.lG(!0), aq.lG(), b8.yO(), a9.gi && bb.yP.yQ(), bb.dc = !0, bX.yR(), u.v.setState(0)
	}
	this.yB = function() {
		yC() || (a9.yD = 2, yE())
	}, this.yF = function() {
		yC() || (a9.yD = 1, yE())
	}
}

function y3() {
	this.iS = function() {
		var ya;
		2 === a9.yD ? (aJ.yS(0, 59), aD.m6(2700)) : a9.jx < 7 ? (ya = bc.k3[bd.ks()], ya = bc.yc[ya], aM.yd(L(16, [ya]), 2, 1, 12), aJ.ye(0, L(17, [ya]), 40, 0, b7.mX, b7.mU, -1, !1), aD.m6(2700)) : 8 === a9.jx ? (a9.yL ? aJ.yS(a9.yX, 2) : aJ.yS(
			1 - a9.eI, 3), a9.yY.wf(a9.yX), aJ.yZ(a9.yX), aD.lr(a9.yX, 2700, !1, 0)) : 9 === a9.jx ? (aJ.yf(), aD.m6(2700)) : (aJ.yZ(a9.yX), aD.lr(a9.yX, 2700, !1, 0))
	}
}

function xy() {
	this.yg = 0, this.y8 = null;
	var yi = this.yh = 0;
	this.yj = 0, this.yK = function() {
		var r6, g7, dk;
		bN.y0.yk || (bN.y0.yk = !0, a9.jz) || ((r6 = this).y8 = bN.h2.y6(), r6.yg = be.yn.yo(), a9.jx < 7 && 2 !== a9.yD ? r6.yh = bd.yp() : r6.yh = bN.h2.yA(), 8 === a9.jx && 1 === a9.yD ? (g7 = 1 - a9.yX, dk = ac.gM[g7], ac.gM[g7] = 0, b4.fu
				.oI(), ac.gM[g7] = dk) : b4.fu.oI(), yi = .01 * ac.yt[a9.eI] / 50, r6.yj = 0, a9.jx < 7 ? bN.xw.yK(r6.y8) : 7 === a9.jx || 10 === a9.jx ? b6.fu.gl(a9.eI) && (g7 = bN.result.yg * (1 + a9.wk), 2 === a9.yD ? bN.result.yj += g7 *
				ac.gM[a9.eI] / bN.result.yh : kv[0] === a9.eI && (bN.result.yj += g7)) : 8 !== a9.jx || 1 !== a9.yL || 0 === bf.dp.data[107].value || 100 <= (dk = bf.dp.data[108].value) || (bN.result.yj += .01 * (1 + a9.wk) * (100 - dk) *
			10), this.ym())
	}, this.ym = function() {
		b6.fu.gl(a9.eI) && (.01 <= yi && aJ.ye(0, L(18, [yi.toFixed(2)]), 40, 0, b7.mn, b7.mU, -1, !1), .01 <= bN.result.yj) && aJ.ye(0, L(19, [bN.result.yj.toFixed(2)]), 40, 0, b7.mn, b7.mU, -1, !1)
	}, this.yv = function() {
		var ux, yw;
		a9.jz || bN.y0.yk || (yw = ac, ux = a9.eI, 0 === yw.yx[ux]) || yw.ib[ux] < 1 || 2 * yw.oe[ux] > 3 * (yw.ia[ux] + yw.ib[ux]) || (yw = .01 * yw.yt[ux] / 50) < .01 || aJ.ye(0, L(18, [yw.toFixed(2)]), 40, 0, b7.mn, b7.mU, -1, !1)
	}
}

function y1() {
	this.yk = !1, this.dU = function() {
		this.yk = !1
	}, this.iS = function() {
		7 <= a9.jx || this.yk || bb.ja() % 20 == 11 && b6.fu.ko(90) && (a9.yD = 1, bN.y4.yK(), bN.result.yK())
	}
}

function xx() {
	function z1(yz) {
		for (var hU = (1 + a9.wk) * bN.result.yg / (1e5 * bN.result.yh), k = "", a7 = 0; a7 < yz.length; a7++) {
			var z6 = yz[a7].z7 * hU;
			k += "  " + yz[a7].name + ": " + b6.z3.z8(1e5 * z6)
		}
		k.length && (aJ.ye(0, L(20), 45, 0, b6.color.mP(225, 240, 255), b7.mU, -1, !1), aJ.ye(0, k.trim(), 45, 0, b6.color.mP(225, 240, 255), b7.mU, -1, !1), a9.gi || aJ.ye(700, L(21) + bG.z9, 736, 0, b7.mX, b7.mt, -1, !1))
	}
	this.yK = function(y8) {
		var ya = bc.k3[bd.ks()],
			y8 = (a9.yL && b6.fu.gl(a9.eI) && (bN.result.yj += (b6.z3.z4(ac.z5[a9.eI]) ? 2 : 1) * bN.result.yg * (1 + a9.wk) * ac.gM[a9.eI] / bN.result.yh), function(y7) {
				var yz = [],
					username = ac.z5,
					eY = y7.length;
				loop: for (var a7 = 0; a7 < eY; a7++) {
					var g6 = y7[a7],
						zA = b6.z3.z4(username[g6]);
					if (zA) {
						for (var er = yz.length - 1; 0 <= er; er--)
							if (yz[er].name === zA) {
								yz[er].z7 += ac.gM[g6];
								continue loop
							} yz.push({
							name: zA,
							z7: ac.gM[g6],
							zB: bc.eW[g6]
						})
					}
				}
				return yz.sort(function(er, es) {
					return es.z7 - er.z7
				}), yz
			}(y8));
		y8.length && (2 === a9.yD ? z1(y8) : z1(function(yz, ya) {
			for (var a7 = yz.length - 1; 0 <= a7; a7--) bc.k3[yz[a7].zB] !== ya && yz.splice(a7, 1);
			return yz
		}(y8, ya)))
	}
}

function y5() {
	this.yK = function() {
		if (2 === a9.yD) a9.yL = 2;
		else {
			if (8 === a9.jx) aY.y9(0) ? aY.y9(1) ? a9.yX = +(ac.gM[1] > ac.gM[0]) : a9.yX = 0 : a9.yX = 1;
			else {
				if (a9.ie) {
					var kr = bd.zD();
					if (bc.k3[kr]) return void(a9.yL = +(bc.eW[a9.eI] === kr))
				}
				a9.yX = kv[0]
			}
			a9.yL = +(a9.yX === a9.eI)
		}
	}
}

function d8() {
	this.id = 0, this.f1 = 0, this.tg = null, this.th = null, this.ti = null, this.to = null, this.v = new zE, this.dU = function() {
		var self, f1;
		self = this, "undefined" == typeof Android || "function" != typeof Android.getVersion || (f1 = Android.getVersion()) < 12 || (self.f1 = f1, self.id = 1, self.th = Android),
			function(self) {
				var f1;
				"undefined" != typeof mwIOSdataX && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iosCommandA && (self.id = 2, self.ti = mwIOSdataX, self.to = window.webkit.messageHandlers.iosCommandA, f1 = self
					.ti.version, self.f1 = f1 ? Number(f1) : 0)
			}(this),
			function(self) {
				var tg;
				if (0 === self.id) {
					try {
						if (!(tg = window.localStorage)) return;
						tg.setItem("tls7", "1"), tg.removeItem("tls7")
					} catch (error) {
						return
					}
					self.tg = tg
				}
			}(this)
	}
}

function zE() {
	this.zI = function() {
		bf.qw.u1(), bf.qw.u2(), aw.s.close(0, 3255), 0 === u.id ? u.tg && u.tg.clear() : 1 === u.id ? u.th.saveString(199, "") : 2 === u.id && u.to.postMessage("clear")
	}, this.zJ = function() {
		2 === u.id ? u.to.postMessage("showConsentForm") : 1 === u.id && u.th.setState(7)
	}, this.zK = function() {
		this.setState(14)
	}, this.sU = function() {
		return 1 === bf.dp.tb(2)
	}, this.zL = function() {
		bf.dp.dq(102, "")
	}, this.setState = function(zM) {
		1 === u.id && 5 <= u.f1 && u.th.setState(zM)
	}, this.w = function() {
		var zN;
		1 === u.id && 7 <= u.f1 ? u.th.setState(5) : ((zN = new URL(window.location)).searchParams.set("v", "" + Math.floor(1e3 * Math.random())), window.location.href = zN.toString())
	}, this.dZ = function() {
		1 !== u.id || u.f1 < 17 || u.th.saveString(23, document.documentElement.outerHTML)
	}, this.e8 = function() {
		0 !== u.id && (1 === u.id ? u.th.prepareAd("1688441405") : 2 === u.id && (0 === u.f1 ? u.to.postMessage("prepare ad 4500876070") : u.to.postMessage("loadAds 4500876070")))
	}, this.zO = function(dk) {
		return 0 !== u.id && (1 === u.id ? 12 <= u.f1 && (u.th.presentAd(dk), !0) : 2 === u.id && (0 === u.f1 ? u.to.postMessage("show ad " + dk) : u.to.postMessage("showAd"), !0))
	}, this.de = function() {
		2 === u.id && u.f1 < 23 && n.o(4, 1, new p("App Update Required", "A new iOS app version with bug fixes has been published.<br>Please download the new Territorial.io app version for iOS:<br><a href='" + bG.zP + "' target='_blank'>" + bG
			.zP + "</a>", !0, [new q("⬅️ " + L(22), function() {
				n.o(0)
			}, b7.n8)]))
	}
}

function dN() {
	function zS(e) {
		zd(e), n.o(4, 5, new p("🚀 New Game Update", "The game has been updated! Please reload the game." +
			"<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>FX Client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use FX to play in singleplayer mode.</p></div>",
			!0, [new q("⬅️ " + L(22), function() {
				n.ze()
			}), new q("🔄 Reload", function() {
				u.v.w()
			}, b7.ms)]))
	}

	function zc(e) {
		zd(e), n.o(4, 5, new p(L(23), {
			"3249": "No servers found",
			"4705": "Lobby not found",
			"4730": "Kicked from lobby"
		} [e] ?? zW(e), !0))
	}

	function zW(e) {
		var p0 = " [" + e + "]";
		return 3249 === e || 1006 === e ? "No Internet / No Server Response" + p0 : 4527 === e ? "Player already in lobby" + p0 : 4532 === e || 4533 === e ? "You have been kicked." + p0 : 4530 === e ? "Lobby Timeout" + p0 : "Unknown error" + p0
	}

	function zd(e) {
		zV(e), n.s.t()
	}

	function zV(e) {
		var zM = aW.zU();
		6 === zM ? aw.s.zg(e) : bk.zY ? (n.r(), bk.zh(), aw.s.close(aw.s.zZ, 3256)) : 8 === zM && a9.zi(!0)
	}
	this.zQ = function(zR, e) {
		zR === 1 && __fx.customLobby.isActive() && aW.zU() !== 6 && __fx.customLobby.setActive(false);
		if (8 === n.rd && 0 === zR)
			if (4211 === e) zS(e);
			else {
				if (4480 === e) return bf.qw.u3(), void n.o(4, 0, new p(L(25), L(26), !0));
				8 !== aW.zU() && zV(), n.o(4, 0, new p(L(23), zW(e), !0))
			}
		else {
			var zM = aW.zU();
			if (6 === zM) {
				if (4211 === e) return void zS(e);
				if (4215 !== e && 4516 !== e && 4527 !== e && 4533 !== e) return void aV.zX(zR)
			} else {
				if (!bk.zY) return 8 === zM ? void(zR !== aw.s.za || a9.jz || 1 !== a9.yG || a9.gi || aJ.zb(L(24, [e]))) : void 0;
				if (zR !== aw.s.zZ) return
			}
			zc(e)
		}
	}, this.zf = function(e) {
		8 === aW.zU() ? a9.jz || 1 !== a9.yG || aJ.zb(L(24, [e])) : zc(e)
	}, this.m = function() {
		zd(3268)
	}
}

function cx() {
	var zj, zk, zl = -15e3,
		zm = !1;

	function gm(e) {
		a06() || (zm = !0, a07(e, 1), aw.s.a08(aw.s.za), a09(Math.floor(at.pP * e.clientX), Math.floor(at.pP * e.clientY)))
	}

	function zv(e) {
		zl = bb.ln, a07(e, 1), aw.s.a08(aw.s.za), 0 < e.touches.length && (zj = Math.floor(at.pP * e.touches[0].clientX), zk = Math.floor(at.pP * e.touches[0].clientY), ao.zv(e) || a09(zj, zk))
	}

	function a09(ef, eh) {
		n.gm(ef, eh), 0 === a9.yG ? aW.gm(ef, eh) : b8.a0A(ef, eh) || ba.gm(ef, eh) || aT.gm(ef, eh) || aH.a0B(ef, eh) || aL.gm(ef, eh) || 0 <= aI.gm(ef, eh) || bF.a0C(ef, eh) || aq.gm(ef, eh) || aH.a0D(ef, eh)
	}

	function zr(e) {
		a06() || (zm = !0, a07(e, 1), a0E(Math.floor(at.pP * e.clientX), Math.floor(at.pP * e.clientY)))
	}

	function zw(e) {
		zl = bb.ln, a07(e, 1), 0 < e.touches.length && (zj = Math.floor(at.pP * e.touches[0].clientX), zk = Math.floor(at.pP * e.touches[0].clientY), ao.zw(e) || a0E(zj, zk))
	}

	function a0E(ef, eh) {
		n.zr(ef, eh), 0 === a9.yG ? aW.zr(ef, eh) : (bP.gf(ef, eh), ba.zr(ef, eh) || (aI.zr(ef, eh), aH.wq() ? aH.zr(ef, eh) : aN.gn ? aN.zr(ef) && (bb.dc = !0) : (aR.zr(ef, eh), aO.m2 && aO.zr(ef, eh) && (bb.dc = !0))))
	}

	function zt(e) {
		a06() || (a07(e, 1), a0F(), 0 === a9.yG ? (aW.click(-1024, -1024), aP.qK()) : (aR.a0G(-1024, -1024), aI.zr(-1024, -1024), aN.a0H(), aO.m2 = !1))
	}

	function zs(e) {
		a06() || (a07(e, 1), a0I(Math.floor(at.pP * e.clientX), Math.floor(at.pP * e.clientY), 2 === e.button), bF.zp && (bF.zp = !1, e.preventDefault()))
	}

	function click(e) {
		a06() || a07(e, 1)
	}

	function zx(e) {
		zl = bb.ln, a07(e, 1), e && e.touches && 0 < e.touches.length && 0 !== a9.yG ? aO.m2 = !1 : ao.a0J() || (a0I(zj, zk, !1), bF.zp && (bF.zp = !1, e.preventDefault()))
	}

	function zy(e) {
		zl = bb.ln, a07(e, 1), a0I(zj, zk, !1), bF.zp && (bF.zp = !1, e.preventDefault())
	}

	function zz(e) {}

	function a00(e) {}

	function a01(e) {
		a06() || a07(e, 0)
	}

	function a0I(ef, eh, a0K) {
		a0F(), 0 === a9.yG ? aW.click(ef, eh) : (aR.a0G(ef, eh), ba.a0G(), aN.a0H(), aO.m2 = !1, aH.click(ef, eh, a0K) ? bb.dc = !0 : aI.zs(ef, eh))
	}

	function a0F() {
		n.a0F()
	}

	function zu(e) {
		var ef, eh, deltaY;
		a06() || (a07(e, 1), aw.s.a08(aw.s.za), ef = Math.floor(at.pP * e.clientX), eh = Math.floor(at.pP * e.clientY), deltaY = e.deltaY, 1 === e.deltaMode && (deltaY *= 16), n.zu(ef, eh, deltaY), 0 === a9.yG ? aW.zu(ef, eh, deltaY) : aR.zu(ef, eh,
			deltaY) || (aN.a0L(ef, eh) ? aN.zu(deltaY) && (bb.dc = !0) : aO.zu(ef, eh, deltaY)))
	}

	function a02(e) {
		a07(e, 0)
	}

	function a07(e, id) {
		0 === id && n.wq() || (id = window.innerWidth / document.documentElement.clientWidth) < .999 || 1.001 < id || 0 !== aW.zU() && e.preventDefault()
	}

	function a03(e) {
		if (__fx.keybindHandler(e.key)) return;
		a06() || (e = e.code) && e.length && (bT.et(e, 18) ? am.a0N(3) : bT.et(e, 22) ? am.a0N(0) : bT.et(e, 20) ? am.a0N(1) : bT.et(e, 24) ? am.a0N(2) : bT.et(e, 10) ? aN.a0O(31 / 32) : bT.et(e, 8) ? aN.a0O(32 / 31) : bT.et(e, 6) ? aN.a0O(7 / 8) :
			bT.et(e, 4) ? aN.a0O(8 / 7) : bT.et(e, 14) ? 0 !== a9.yG && aO.zu(Math.floor(at.a1 / 2), Math.floor(at.j7 / 2), -200) : bT.et(e, 16) ? 0 !== a9.yG && aO.zu(Math.floor(at.a1 / 2), Math.floor(at.j7 / 2), 200) : bT.et(e, 0) ? a9.yG && bP
			.gg(!1) : bT.et(e, 2) && a9.yG && bP.gg(!0))
	}

	function a04(e) {
		var code;
		a06() || bb.ln < 400 || (code = e.code) && code.length && ("Enter" === code && n.a0P(1) || (8 !== aW.zU() && aW.a0P(e) ? bb.dc = !0 : "Escape" === code ? bF.f2() : bT.et(code, 18) ? am.a0Q(3) : bT.et(code, 22) ? am.a0Q(0) : bT.et(code, 20) ?
			am.a0Q(1) : bT.et(code, 24) ? am.a0Q(2) : bT.et(code, 12) ? b8.a0R(!a9.m0) : "Space" === code && a9.yG && (aI.gj && aI.a0S(), a9.gi) && b8.a0T(!1)))
	}

	function a05() {
		"hidden" === document.visibilityState ? 1 === a9.yG && (a9.gi ? b8.a0U() : !a9.jz || aI.gj || a9.gu || aI.a0S()) : bb.dc = !0
	}

	function a06() {
		return zl + 15e3 > bb.ln
	}

	function resize() {
		at.a0W()
	}
	this.zn = 0, this.zo = "", this.zp = !1, this.dU = function() {
		zq.addEventListener("mousedown", gm, {
			passive: !1
		}), zq.addEventListener("mousemove", zr, {
			passive: !1
		}), zq.addEventListener("mouseup", zs, {
			passive: !1
		}), zq.addEventListener("click", click, {
			passive: !1
		}), zq.addEventListener("mouseleave", zt, {
			passive: !1
		}), zq.addEventListener("wheel", zu, {
			passive: !1
		}), zq.addEventListener("touchstart", zv, {
			passive: !1
		}), zq.addEventListener("touchmove", zw, {
			passive: !1
		}), zq.addEventListener("touchend", zx, {
			passive: !1
		}), zq.addEventListener("touchcancel", zy, {
			passive: !1
		}), zq.addEventListener("dragover", zz), zq.addEventListener("drop", a00), zq.addEventListener("dblclick", a01), document.addEventListener("contextmenu", a02), document.addEventListener("keydown", a03), document.addEventListener(
			"keyup", a04), document.addEventListener("visibilitychange", a05), window.addEventListener("resize", resize)
	}, this.a0C = function(ef, eh) {
		return !!b8.gm(ef, eh) || !!(aR.gm(ef, eh) || aO.gm(ef, eh) || aN.gm(ef, eh) || aJ.gm(ef, eh))
	}, this.a0V = a06, this.pn = function() {
		return !zm || 0 < zl
	}, this.f2 = function() {
		if (!n.wq()) return 8 === aW.zU() ? a9.m0 ? void b8.a0R(!1) : ba.wq ? void ba.a0S() : void aI.a0S() : void(7 !== aW.zU() && 6 === aW.zU() && aV.a0X());
		n.a0P(2)
	}
}

function bt() {
	this.pJ = new a0Y, this.pT = new a0Z, this.fu = new a0a, this.z3 = new a0b, this.wX = new a0c, this.a0d = new a0e, this.canvas = new a0f, this.color = new a0g, this.a0h = new a0i, this.dU = function() {
		this.pJ.u0()
	}
}

function a0Z() {
	this.uv = function(g) {
		g.fill(0)
	}, this.a0j = function(g) {
		for (var eY = g.length, a7 = 0; a7 < eY; a7++) g[a7] = []
	}, this.a0k = function(hP, a0l) {
		for (var hQ = bK.f9, a7 = 0; a7 < 3; a7++) hQ[a7] = a0l * hP[a7];
		return hQ
	}, this.a0m = function(hP, hQ, a0n) {
		for (var hU = 0, a7 = 0; a7 < 3; a7++) hU += Math.abs(hP[a7] - hQ[a7]);
		return a0n <= hU
	}, this.a0o = function(hP, a0p) {
		for (var a7 = 0; a7 < 3; a7++) hP[a7] = bH.or(hP[a7] + a0p, 0, 255);
		return hP
	}, this.a0q = function(g, ru, rv) {
		rv = rv || g.length - 1;
		for (var a0r = 0, a7 = ru = ru || 0; a7 <= rv; a7++) a0r += g[a7];
		return a0r
	}, this.a0s = function(g, a0t) {
		for (var a7, a0u, eY = g.length, a0v = [], er = eY - 1; 0 <= er; er--) {
			for (a7 = a0u = 0; a7 < eY; a7++) a0t(g[a7]) < a0t(g[a0u]) && (a0u = a7);
			eY--, a0v.push(g[a0u]), g[a0u] = g[eY], g.pop()
		}
		return a0v
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
	}, this.a0w = function(g, f0) {
		for (var eY = g.length, g1 = 0, a7 = 0; a7 < eY; a7++) g1 += g[a7] > f0;
		return g1
	}, this.a0x = function(a0y, a0z, min) {
		for (var eY = a0z[0], a7 = eY - 1; 0 <= a7; a7--) a0y[a7] < min && (a0y[a7] = a0y[--eY]);
		a0z[0] = eY
	}, this.a10 = function(g, eY, value) {
		for (var a7 = 0; a7 < eY; a7++) g[a7] -= value
	}, this.a11 = function(g) {
		for (var eY = g.length, a7 = 0; a7 < eY; a7++)
			if ("string" != typeof g[a7]) return !1;
		return !0
	}, this.a12 = function(p0, g, a13) {
		g.fill(0);
		for (var rx = p0.split(","), eY = Math.min(rx.length, g.length), a7 = 0; a7 < eY; a7++) g[a7] = Math.min(parseInt(rx[a7]), a13)
	}, this.a14 = function(p0, g, qH) {
		g.fill("");
		for (var rx = p0.split('"'), eY = Math.min(rx.length, 2 * g.length), k2 = 0, a7 = 1; a7 < eY; a7 += 2) g[k2++] = rx[a7].slice(0, qH)
	}, this.a15 = function(g, g1) {
		if (0 === g1) g.fill(0);
		else {
			var a0r = this.a0q(g),
				eY = g.length;
			if (0 === a0r) g.fill(bH.dl(g1, eY));
			else
				for (var a7 = 0; a7 < eY; a7++) g[a7] = bH.dl(g1 * g[a7], a0r);
			if (0 === (a0r = this.a0q(g))) g[1] = g1;
			else
				for (var k2 = 0; a0r++ < g1;) g[k2 = (k2 + 1) % eY] && g[k2]++
		}
	}, this.a16 = function(g) {
		if (!g) return 0;
		var eY = g.length;
		if (0 === eY) return 0;
		for (var f0 = g[eY - 1], a7 = eY - 2; 0 <= a7; a7--)
			if (g[a7] !== f0) return a7 + 2;
		return 1
	}
}

function a0f() {
	this.x4 = function(a17, e0, a18) {
		var hB = a17.height,
			a19 = b6.pJ.ul(hB, hB),
			hH = b6.pJ.getContext(a19);
		return function(a1, hH, a18) {
			hH.fillStyle = a18, hH.beginPath(), hH.arc(a1 / 2, a1 / 2, .47 * a1, 0, 2 * Math.PI), hH.fill()
		}(hB, hH, a18), hH.drawImage(a17, -e0 * hB, 0), a19
	}, this.a1B = function(a1C) {
		var hH, hE, hB = a1C.height;
		return a1C.width === hB && (hE = (hH = b6.pJ.getContext(a1C, !0)).getImageData(0, 0, hB, hB), b6.a0d.a1D(hE.data, hB, hB, .9), hH.putImageData(hE, 0, 0)), a1C
	}
}

function a0g() {
	this.a1E = function(f0) {
		return [f0 >> 12 & 63, f0 >> 6 & 63, 63 & f0]
	}, this.a1F = function(f0) {
		for (var g = this.a1E(f0), a7 = 0; a7 < 3; a7++) g[a7] = ~~(4.05 * g[a7]);
		return g
	}, this.a1G = function(f0) {
		f0 = this.a1F(f0);
		return b6.color.mP(f0[0], f0[1], f0[2])
	}, this.a1H = function(g) {
		for (var a7 = 0; a7 < 3; a7++) g[a7] = ~~(g[a7] / 4.04);
		return (g[0] << 12) + (g[1] << 6) + g[2]
	}, this.mP = function(dz, rx, es) {
		return "rgb(" + dz + "," + rx + "," + es + ")"
	}, this.mR = function(dz, rx, es, er) {
		return "rgba(" + dz + "," + rx + "," + es + "," + er.toFixed(3) + ")"
	}, this.pp = function(et) {
		for (var g = et.split("(")[1].split(","), f8 = bK.f8, a7 = 0; a7 < 3; a7++) f8[a7] = parseInt(g[a7]);
		return 4 === g.length ? f8[3] = 255 * parseFloat(g[3].slice(0, -1)) : f8[3] = 255, f8
	}, this.pq = function(a1I, eb) {
		for (var g = a1I.slice(a1I.indexOf("(") + 1, a1I.indexOf(")")).split(","), f8 = bK.f8, a7 = 0; a7 < 3; a7++) f8[a7] = bH.or(parseInt(g[a7].trim(), 10) + eb, 0, 255);
		return 3 === g.length ? this.mP(f8[0], f8[1], f8[2]) : (a1I = parseFloat(g[3].trim()), this.mR(f8[0], f8[1], f8[2], a1I = 0 === a1I ? .3 : a1I))
	}, this.a1J = function(g) {
		for (var p0 = "#", a7 = 0; a7 < 3; a7++) {
			var dz = g[a7].toString(16);
			p0 += 1 === dz.length ? "0" + dz : dz
		}
		return p0
	}, this.a1K = function(p0) {
		var dz, rx;
		return p0.length < 7 ? b7.mO : (dz = parseInt(p0.slice(1, 3), 16), rx = parseInt(p0.slice(3, 5), 16), p0 = parseInt(p0.slice(5, 7), 16), this.mP(dz, rx, p0))
	}
}

function a0c() {
	this.a1L = function(p0, font, maxWidth) {
		if (font && (tB.font = font), tB.measureText(p0).width <= maxWidth) return p0;
		for (var a7 = p0.length - 1; 1 <= a7; a7--)
			if (p0 = p0.substring(0, a7), tB.measureText(p0 + "...").width <= maxWidth) return p0 + "...";
		return "..."
	}
}

function a0i() {
	var a1N = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	this.a1O = function(ln) {
		var a1Q, p0 = new Date(ln.getTime() - 6e4 * ln.getTimezoneOffset()).toUTCString();
		return p0.length < 12 || (p0 = p0.substring(5, p0.length), 0 === (ln = ln.getTimezoneOffset())) ? p0 : (a1Q = (ln < 0 ? "+" : "-") + bH.dl(Math.abs(ln), 60), 0 == (ln = Math.abs(ln) % 60) ? p0 + a1Q : p0 + a1Q + ":" + (ln < 10 ? "0" :
			"") + ln)
	}, this.a1R = function(ln) {
		var p0 = ln.toUTCString();
		return p0.length < 12 ? p0 : function(ln) {
			return a1N[ln.getUTCDay()]
		}(ln) + ", " + p0.substring(5, p0.length - 4)
	}
}

function a0Y() {
	var a1T = null;
	this.xL = 0, this.u0 = function() {
		var f0 = bf.dp.data[5].value;
		a1T = "px " + f0, "Trebuchet MS" !== f0 && (a1T += ", Trebuchet MS"), this.xL = hA(32, 32, ["a", "b", "m"], 200, a1T)
	}, this.ul = function(a1, j7) {
		var et = document.createElement("canvas");
		return et.width = a1, et.height = j7, et
	}, this.getContext = function(canvas, alpha) {
		return canvas.getContext("2d", {
			alpha: alpha
		})
	}, this.getImageData = function(wX, a1, j7) {
		return wX.getImageData(0, 0, a1, j7)
	}, this.rF = function(type, size) {
		return size = size.toFixed(2), 0 === type ? size + a1T : 1 === type ? "bold " + size + a1T : 2 === type ? "lighter " + size + a1T : 3 === type ? "italic " + size + a1T : 4 === type ? "oblique " + size + a1T : 5 === type ? "small-caps " +
			size + a1T : "small-caps bold " + size + a1T
	}, this.textAlign = function(hH, id) {
		hH.textAlign = 0 === id ? "left" : 1 === id ? "center" : "right"
	}, this.textBaseline = function(hH, id) {
		hH.textBaseline = 1 === id ? "middle" : 2 === id ? "bottom" : "top"
	}, this.pV = function(e, code, color) {
		color = this.pU(bY.rG) + " solid " + (color || b7.mX);
		5 === (code = code || 5) ? e.style.border = color : 4 === code ? e.style.borderLeft = color : 2 === code ? e.style.borderBottom = color : 6 === code ? e.style.borderRight = color : e.style.borderTop = color
	}, this.rz = function(e, ef, eh, a1, j7) {
		e = e.style;
		e.left = this.s0(ef), e.top = this.s0(eh), e.width = this.s0(a1), e.height = this.s0(j7)
	}, this.pK = function(f0) {
		return 1 + f0 * u.v.sU()
	}, this.qo = function(m9, g7) {
		return m9 * this.pK(void 0 === g7 ? .5 : g7) * at.pL / at.pP
	}, this.ry = function(m9, g7) {
		return m9 * this.pK(void 0 === g7 ? .5 : g7) * at.pL
	}, this.rj = function(m9, g7, a1U) {
		return this.pK(g7) * Math.min(m9 * at.pL, a1U * at.a1) / at.pP
	}, this.pU = function(f0) {
		return f0.toFixed(1) + "px"
	}, this.s0 = function(f0) {
		return this.a1W(f0).toFixed(1) + "px"
	}, this.a1W = function(f0) {
		return f0 / at.pP
	}, this.a1X = function(rU, a1Y) {
		for (var p0 = "<ul>", eY = rU.length, a7 = 0; a7 < eY; a7++) p0 += "<li>" + rU[a7] + ": <a href='" + a1Y[a7] + "' target='_blank'>" + a1Y[a7] + "</a></li>";
		return p0 += "</ul>"
	}, this.a1Z = function(a1a) {
		return "<a href='" + a1a + "' target='_blank'>" + a1a + "</a>"
	}, this.a1b = function(e) {
		navigator.clipboard && navigator.clipboard.writeText(e.value)
	}, this.a1c = function(e) {
		var dk = e.textContent;
		b6.z3.a1d(dk, "✔") || (1 === dk.length ? e.textContent = "✔" : e.textContent = dk + " ✔", setTimeout(function() {
			e.textContent = dk
		}, 500))
	}, this.measureText = function(p0) {
		return tB.measureText(p0).width
	}
}

function a0a() {
	this.gk = function(zM) {
		return 0 === zM ? 1 === a9.yG && a9.gu : 1 === zM ? 1 === a9.yG && !a9.gu : 2 === a9.yG
	}, this.gl = function(player) {
		return 0 !== ac.lU[player] && 2 !== ac.a1e[player]
	}, this.a1f = function(player) {
		return player === a9.eI && 2 !== ac.a1e[player]
	}, this.a1g = function(player) {
		return player === a9.eI
	}, this.j1 = function(player) {
		return player >= a9.jd || 2 === ac.a1e[player]
	}, this.kS = function(player) {
		return 0 !== ac.lU[player]
	}, this.ob = function(a1h, a1i) {
		return a1h !== a1i
	}, this.fx = function(player, f0) {
		var min;
		return f0 = this.a1j(player, f0), ac.ga[player] += f0, ac.a1k[player] && (min = Math.min(ac.a1k[player], ac.ga[player]), ac.a1k[player] -= min, ac.ga[player] -= min), f0
	}, this.a1j = function(player, f0) {
		var a1l = ac.ga[player];
		return f0 = Math.min(f0, ac.gM[player] * a9.jk - a1l), f0 = Math.min(f0, a9.a1m - a1l), Math.max(f0, 0)
	}, this.oc = function(player, hu, a1n, a1o) {
		var a1l = ac.ga[player],
			hu = bH.dl(a1l * (hu + 1), 1024),
			a1n = bH.dl(a1n * a1l, 1024),
			hu = Math.min(hu, a1l - a1n);
		return 10 === a9.jx && (hu = b0.a1q(player, hu)), bK.f6[0] = hu, bK.f6[1] = a1n, a1o <= hu
	}, this.o4 = function(player, nl, nk) {
		var player = ac.ga[player],
			a1p = bH.dl(64 * player, 1024),
			player = (nl = Math.min(nl, player - a1p), this.a1s(nl));
		return a1p += player, nl = this.a1j(nk, nl -= player), bK.f6[0] = nl, bK.f6[1] = a1p, 1 <= nl
	}, this.o6 = function(nl, nk) {
		var a1r = this.a1s(nl);
		return nl = this.a1j(nk, nl -= a1r), bK.f6[0] = nl, bK.f6[1] = a1r, 1 <= nl
	}, this.ht = function(player, a1t) {
		return bH.dl(ac.ga[player] * (a1t + 1), 1024)
	}, this.a1s = function(a1u) {
		return bH.dl(Math.max(2142 - bb.ja(), 0) * a1u, 2142)
	}, this.op = function(player, a1n) {
		a1n = bH.dl(a1n * ac.ga[player], 1024);
		bK.f6[1] = a1n, ac.ga[player] -= a1n
	}, this.fv = function(player, a1v) {
		var fI, fK, es = ac.ga[player];
		return a1v <= es ? ac.ga[player] -= a1v : (ac.ga[player] = 0, fK = ac.a1k[player] + (fI = 5 * ((es = a1v - es) >> 2)), bZ.fy(player, fI - es, 12), fK <= a9.a1w ? ac.a1k[player] = fK : (ac.a1k[player] = a9.a1w, bZ.fy(player, fK - a9.a1w,
			18))), a1v
	}, this.kg = function(player, hu) {
		var ga = ac.ga,
			a1l = ga[player],
			hu = bH.dl(a1l * (hu + 1), 1024),
			a1p = Math.max(bH.dl(a1l, 10), 1e3);
		return (hu = Math.min(hu, a1l - a1p)) < 0 ? (ga[player] = 0, a1p = Math.min(1e3, a1l + a9.a1w - ac.a1k[player]), bK.f6[1] = a1p, ac.a1k[player] += a1p - a1l, 0) : (bK.f6[1] = a1p, 10 === a9.jx && (hu = b0.a1q(player, hu)), ga[player] -=
			a1p + hu, hu)
	}, this.og = function(player) {
		ac.ga[player] -= bK.f6[0] + bK.f6[1]
	}, this.od = function(player, il) {
		return (il = Math.min(il, a9.eV)) < a9.eV && 0 === ac.lU[il] && (il = a9.eV), (bK.eU[0] = il) === a9.eV || eR(player, il)
	}, this.oi = function(player, nk) {
		return 0 !== ac.lU[nk] && !eR(player, nk)
	}, this.a1x = function(player, a1y) {
		for (var g6, eY = ah.je, qi = 0, a1z = kv, a7 = 0; a7 < eY; a7++)
			if (g6 = a1z[a7], aY.y9(g6)) {
				if (player === g6) return !0;
				if (++qi > a1y) return !1
			} return !1
	}, this.ko = function(g6) {
		var a20 = a9.ie ? bd.yp() : ac.gM[kv[0]];
		return a20 >= bH.dl(g6 * a9.jN, 100)
	}
}

function a0e() {
	this.a21 = function(canvas, a22, a23) {
		var a1 = canvas.width,
			j7 = canvas.height,
			et = b6.pJ.ul(a1, j7),
			hH = b6.pJ.getContext(et, !0),
			canvas = (hH.drawImage(canvas, 0, 0), hH.getImageData(0, 0, a1, j7));
		return a22(canvas.data, a1, j7, a23), hH.putImageData(canvas, 0, 0), et
	}, this.a24 = function(uw, a1, j7) {
		for (var ef = a1 - 1; 0 <= ef; ef--)
			for (var eh = j7 - 1; 0 <= eh; eh--) {
				var a7 = 4 * (ef + eh * a1);
				uw[3 + a7] = uw[a7], uw[a7] = uw[1 + a7] = uw[2 + a7] = 255
			}
	}, this.a25 = function(uw, a1, j7) {
		for (var ef = a1 - 1; 0 <= ef; ef--)
			for (var eh = j7 - 1; 0 <= eh; eh--) {
				var a7 = 4 * (ef + eh * a1);
				uw[1 + a7] > uw[2 + a7] + 10 && (uw[3 + a7] = uw[a7], uw[1 + a7] = uw[2 + a7])
			}
	}, this.a26 = function(uw, a1, j7, a23) {
		for (var gap = Math.floor(Math.min(a1, j7) * a23), ef = 0; ef < a1; ef++)
			for (var a7, eh = 0; eh < j7; eh++)(ef < gap || eh < gap || a1 - gap <= ef || j7 - gap <= eh) && (uw[3 + (a7 = 4 * (ef + eh * a1))] = 255 - 255 * (uw[1 + a7] - uw[a7]) / (255 - uw[a7]))
	}, this.a27 = function(uw, a1, j7, a23) {
		for (var ef = a1 - 1; 0 <= ef; ef--)
			for (var eh = j7 - 1; 0 <= eh; eh--) {
				var a7 = 4 * (ef + eh * a1);
				uw[a7] = a23[0], uw[1 + a7] = a23[1], uw[2 + a7] = a23[2]
			}
	}, this.a28 = function(uw, a1, j7, a23) {
		for (var gap = Math.floor(a1 * a23), ef = 0; ef < a1; ef++)
			for (var a7, eh = 0; eh < j7; eh++)(ef < gap || eh < gap || a1 - gap <= ef || j7 - gap <= eh) && (uw[a7 = 4 * (ef + eh * a1)] = uw[1 + a7] = uw[2 + a7] = 0)
	}, this.a29 = function(uw, a1, j7) {
		for (var eh, a7, ef = a1 - 1; 0 <= ef; ef--)
			for (eh = j7 - 1; 0 <= eh; eh--) 200 < uw[1 + (a7 = 4 * (ef + eh * a1))] && uw[1 + a7] - 20 > uw[a7] && uw[1 + a7] - 20 > uw[2 + a7] ? uw[a7] + uw[2 + a7] < 40 ? uw[3 + a7] = 0 : (uw[3 + a7] = uw[a7], uw[a7] = 255, uw[1 + a7] = 255,
				uw[2 + a7] = 255) : uw[a7] < 50 && uw[1 + a7] < 50 && uw[2 + a7] < 50 && (uw[a7] + uw[1 + a7] + uw[2 + a7] < 50 ? uw[3 + a7] = 180 : uw[3 + a7] = 180 + Math.floor(75 * (uw[a7] + uw[1 + a7] + uw[2 + a7] - 50) / 100))
	}, this.a2A = function(uw, a1, j7) {
		for (var eh, a7, ef = a1 - 1; 0 <= ef; ef--)
			for (eh = j7 - 1; 0 <= eh; eh--) uw[1 + (a7 = 4 * (ef + eh * a1))] > uw[a7] + 20 && uw[1 + a7] > uw[2 + a7] + 20 && uw[a7] + uw[2] < 40 && (uw[3 + a7] = 255 - uw[1 + a7], uw[a7] = uw[1 + a7] = uw[2 + a7] = uw[a7])
	}, this.a1D = function(uw, a1, j7, a23) {
		for (var dz = a1 >> 1, ef = 0; ef < a1; ef++)
			for (var eh = 0; eh < j7; eh++) Math.sqrt((ef - dz) * (ef - dz) + (eh - dz) * (eh - dz)) > a23 * dz && (uw[4 * (ef + eh * a1) + 3] = 0)
	}
}

function a0b() {
	this.xZ = function(f0) {
		var a7, a2B, a2C, a2D, a2E;
		if (f0 < 0) return "-" + this.xZ(Math.abs(f0));
		if (f0 < 1e3) return f0.toString();
		for (a2B = Math.floor(Math.log(f0 + .5) / Math.log(10)) + 1, a2C = Math.floor((a2B - 1) / 3), a2E = (a2D = f0.toString()).substring(a2B - 3, a2B), a7 = 1; a7 < a2C; a7++) a2E = a2D.substring(a2B - 3 * (a7 + 1), a2B - 3 * a7) + " " + a2E;
		return a2D.substring(0, a2B - 3 * a2C) + " " + a2E
	}, this.a2F = function(g6, a2B) {
		return g6.toFixed(a2B) + "%"
	}, this.z8 = function(f0, a2G) {
		return f0.toFixed(bH.or(Math.floor((void 0 === a2G ? 3 : a2G) - Math.log10(Math.max(f0, 1))), 0, 8))
	}, this.a2H = function(f0, m9, a2B) {
		return (f0 * m9).toFixed(a2B)
	}, this.z4 = function(username) {
		var ec, eN = username.indexOf("[");
		return !(eN < 0) && 1 < (ec = username.indexOf("]")) - eN && ec - eN <= 8 ? username.substring(eN + 1, ec).toUpperCase().trim() : null
	}, __fx.leaderboardFilter.parseClanFromPlayerName = this.z4;
	this.a2I = function(p0) {
		for (var er = Math.floor(.5 * p0.length + .5), mF = Math.floor(.5 * (er - 1)), a7 = 0; a7 < mF; a7++)
			for (var es = -1; es < 2; es += 2) {
				var et = er + es * a7;
				if (" " === p0[et]) return [this.a2J(p0.substring(0, et)), this.a2K(p0.substring(et))]
			}
		return [p0.substring(0, er), p0.substring(er)]
	}, this.a2K = function(p0) {
		for (var eY = p0.length, a7 = 0; a7 < eY; a7++)
			if (" " !== p0[a7]) return p0.substring(a7);
		return p0
	}, this.a2J = function(p0) {
		for (var a7 = p0.length - 1; 0 <= a7; a7--)
			if (" " !== p0[a7]) return p0.substring(0, a7 + 1);
		return p0
	}, this.a2L = function(p0, a2M) {
		return p0.split("(")[0] + "(🧈 " + a2M.toFixed(2) + ")"
	}, this.startsWith = function(p0, a2N) {
		return p0.substring(0, a2N.length) === a2N
	}, this.a1d = function(p0, a2N) {
		var eY = p0.length;
		return p0.substring(eY - a2N.length, eY) === a2N
	}, this.a2O = function(g, a2P, a2Q) {
		var p0 = "",
			eY = g.length - 1;
		a2Q = a2Q || "";
		for (var a7 = 0; a7 < eY; a7++) p0 += a2Q + g[a7] + a2Q + ",", (a7 + 1) % a2P == 0 && (p0 += "\n");
		return p0 += a2Q + g[eY] + a2Q
	}, this.a2R = function(p0, hP, hQ) {
		return p0.replace(new RegExp(hP, "g"), hQ)
	}
}

function a2S() {
	this.ii = function(player, eK) {
		aE.wJ(player, bI.eg(eK), bI.ei(eK)) && (bb.dc = !0), a9.jz && this.iS()
	}, this.iS = function() {
		a9.gu = !1;
		for (var a7 = 0; a7 < a9.jd; a7++) 0 !== ac.lU[a7] && 0 === ac.gM[a7] && aE.wP(a7);
		0 !== ac.lU[a9.eI] ? (bZ.lQ[7] = ac.gM[a9.eI], bZ.lQ[8] = ac.ga[a9.eI], aN.a2T(), aS.a2U(), a9.gi || aD.lq(ac.i9[a9.eI] - 5, ac.iB[a9.eI] - 5, ac.iA[a9.eI] + 5, ac.iC[a9.eI] + 5), ap.dU()) : aT.show(!1, !1, !1, !0), aJ.a2V(18), ab.a2W(),
			ab.lG(!0), bL.s.a2X(), aH.qm(), a9.oa = null, bX.a2Y = !0, bX.a2Z(), a9.jz && u.v.setState(1)
	}
}

function bv() {
	this.eV = 512, this.a1m = 15e8, this.a2a = 1e9, this.a1w = 5e4, this.a2b = 512, this.fs = 2, this.eI = 0, this.jd = 0, this.yJ = 0, this.k1 = 0, this.yI = 0, this.vU = 512, this.vZ = 512, this.jk = 150, this.jz = !0, this.gi = 0, this.yG = 0,
		this.jN = 0, this.m0 = !1, this.gu = 0, this.a2c = 0, this.ie = !1, this.vb = 0, this.vc = 0, this.jx = 0, this.wk = 0, this.oa = null, this.yY = new wd, this.a2d = 30, this.yD = 0, this.yL = 0, this.yX = 0, this.data = new a2e, this.a2f =
		new a2g, this.a2h = 0, this.a2i = function() {
			this.yJ = this.jd = this.data.humanCount, this.jz = 1 === this.yJ && !__fx.customLobby.isActive(), this.m0 = !1, this.gi = this.data.isReplay, this.jx = 0 === this.data.gameMode ? [7, 10, 8][this.data.battleRoyaleMode] : this.data
				.isZombieMode ? 9 : this.data.numberTeams - 2, this.wk = this.data.isContest, this.ie = this.jx < 7 || 9 === this.jx, this.jx = 10 === this.jx && this.jz ? 7 : this.jx, this.jx = 8 === this.jx && 2 !== this.jd ? 7 : this.jx, av.dU(),
				this.vb = this.data.numberTeams, this.data.teamPlayerCount ? this.vc = +(0 < this.data.teamPlayerCount[0]) : (this.vc = 0, this.ie && this.jz && (this.data.teamPlayerCount = new Uint16Array(9), this.data.teamPlayerCount.fill(1, 1,
					this.vb + 1), a9.a2f.a2j())), this.a2d = this.jd <= 2 ? 30 : this.jd <= 50 ? 40 : 50, this.a2c = this.gu = __fx.customLobby.isActive() ? __fx.customLobby.gameInfo.spawnSelection : this.data.selectableSpawn, this.oa = this.gu ?
				new a2S : null, this.vU = __fx.customLobby.isActive() ? Math.max(Math.min(__fx.customLobby.gameInfo.botCount, this.data.playerCount), this.jd) : this.data.playerCount,
				this.vZ = this.vU, this.k1 = this.vU - this.jd, this.yI = 0, this.eI = this.data.selectedPlayer, this.yD = 0, this.yL = 0, this.yX = 0, au.a2k(this.data.spawningSeed), aa.dU(), ac.dU(), ae.a2l(), b4.nd.oM = [], bc.dU(), this.yG = 1,
				__fx.donationsTracker.reset(), __fx.leaderboardFilter.reset(), __fx.customLobby.isActive() && __fx.customLobby.hideWindow(), bZ.dU(), a2m(), aY.dV(), ak.a2n(), bX.dU(), aY.dU(), an.dU(), bI.dU(), bJ.dU(), aj.dU(), bN.dU(), bR.a2o(),
				aA.dU(), ae.a3(), aE.dU(), aF.dU(), ah.a2p(), b5.dU(), bd.dU(), bL.dU(), ba.dU(), a2q.putImageData(a2r, 0, 0), aR.dU(), aO.dU(), aN.dU(), b8.dU(), aq.dU(), aQ.dU(), aS.dU(), aI.dU(), aM.dU(), aJ.dU(), aL.dU(), aH.dU(), aT.dU(), aB
				.dU(), aC.dU(), fa(), aZ.dU(), ab.dU(), b0.dU(), b1.dU(), ax.dU(), this.yY.dU(), bb.a2o(), aD.lp(), 0 === ac.lU[a9.eI] && aT.show(!1, !0), ab.lG(!0), ap.dU(), bb.dc = !0, this.gi || this.jz && this.gu || u.v.setState(1), this.a2h = 0
		}, this.zi = function(a2t) {
			a9.gi || b5.oY.a2u.length || (b5.oY.a2u = b5.a2v.xk()),
				__fx.customLobby.isActive() === false && aw.s.a2w(),
				this.yG = 0, bb.a2x(), u.v.setState(0), a2t || bQ.e6.show(), aW.setState(0);
			if (__fx.customLobby.isActive()) __fx.customLobby.rejoinLobby();
			else this.a2h ? n.o(19) : n.o(5, 5)
		}, this.a2y = function() {
			return this.gi ? aI.gj || !b8.a2z : this.jz && (aI.gj || this.gu)
		}, this.a30 = function() {
			return 1 === this.yG && !this.gu
		}
}

function a2e() {
	this.mapType = 0, this.mapProceduralIndex = 2, this.mapRealisticIndex = 0, this.mapSeed = 14071, this.mapName = "", this.canvas = null, this.passableWater = 1, this.passableMountains = 1, this.playerCount = 512, this.humanCount = 1, this
		.selectedPlayer = 0, this.gameMode = 0, this.playerMode = 0, this.battleRoyaleMode = 0, this.numberTeams = 0, this.isZombieMode = 0, this.isContest = 0, this.isReplay = 0, this.elo = null, this.colorsType = 0, this.colorsPersonalized = 1,
		this.colorsData = null, this.selectableColor = 1, this.teamPlayerCount = null, this.neutralBots = 0, this.botDifficultyType = 0, this.botDifficultyValue = 0, this.botDifficultyTeam = null, this.botDifficultyData = null, this.spawningType = 0,
		this.spawningSeed = 0, this.spawningData = null, this.selectableSpawn = 1, this.playerNamesType = 0, this.playerNamesData = null, this.selectableName = 1, this.aIncomeType = 0, this.aIncomeValue = 0, this.aIncomeData = null, this
		.tIncomeType = 0, this.tIncomeValue = 32, this.tIncomeData = null, this.iIncomeType = 0, this.iIncomeValue = 64, this.iIncomeData = null, this.sResourcesType = 0, this.sResourcesValue = 0, this.sResourcesData = null
}

function a2g() {
	this.a2j = function() {
		var a31 = a9.data;
		b6.pT.a15(a31.teamPlayerCount, a31.playerCount), a31.numberTeams = b6.pT.a0w(a31.teamPlayerCount, 0), a31.teamPlayerCount[0] && a31.teamPlayerCount[7] && (a31.teamPlayerCount[7] = 0, this.a2j())
	}, this.a32 = function() {
		var a31 = a9.data;
		a31.mapType < 2 ? bO.a3(bO.a33(a31), a31.mapSeed) : bO.a34(a31.canvas)
	}, this.a35 = function() {
		var a31 = a9.data;
		a31.colorsData || (a31.colorsData = new Uint32Array(1)), a31.selectableColor && (a31.colorsData[0] = bf.s.tz()), a31.selectableName && (a31.playerNamesData || (a31.playerNamesData = new Array(1)), a31.playerNamesData[0] = bf.dp.data[122]
			.value)
	}, this.a36 = function() {
		a9.data = new a2e, a9.data.aIncomeType = 2, a9.data.aIncomeData = new Uint8Array(a9.eV), a9.data.aIncomeData[0] = 64
	}
}

function dM() {
	this.xI = 0, this.gap = 0, this.rG = 0, this.pR = 0, this.dU = function() {
		this.resize()
	}, this.resize = function() {
		this.xI = .0022 * b6.pJ.pK(.5) * at.pL, this.rG = this.xI / at.pP, this.gap = Math.max(Math.floor((u.v.sU() ? .0114 : .01296) * at.pL), 2), this.pR = this.gap / at.pP
	}
}

function dL() {
	this.a37 = function() {
		return u.v.sU() ? 2 : 1
	}
}

function c6() {
	var pu, ef, eh, a38, a39, a3A, ln, player, a3B, gap, zoom, oF, a3C;

	function a3M(player) {
		for (var a7 = oF.length - 1; 0 <= a7; a7--)
			if (oF[a7] === player) return 1
	}

	function a3K(a3H) {
		var a7, eY;
		if (-1 !== a3H)
			for (eY = pu.length, a7 = 0; a7 < eY; a7++)
				if (pu[a7].wq && pu[a7].ef + 1 === a3H % 4 && pu[a7].eh + 1 === a3H >> 2) return a7;
		return -1
	}

	function a3I(kj, kk) {
		var rx = gap / 2;
		return kj < ef - a38 - 3 * rx || ef + 3 * a38 + 5 * rx < kj || kk < eh - a38 - 3 * rx || eh + 2 * a38 + 3 * rx < kk ? -1 : 4 * (kk < eh - rx ? 0 : kk < eh + a38 + rx ? 1 : 2) + (kj < ef - rx ? 0 : kj < ef + a38 + rx ? 1 : kj < ef + 2 * a38 +
			3 * rx ? 2 : 3)
	}
	this.a3D = function() {
		var a7, es, a3G = [b7.mv, b7.n7, b7.mV, b7.nO, b7.nH];
		for (pu = new Array(9), a7 = 0; a7 < 9; a7++) pu[a7] = {
			id: a7,
			wq: !1,
			kQ: 0,
			canvas: [],
			ef: 0,
			eh: 0
		};
		for (pu[0].colors = [0, 1, 2, 3], pu[0].ef = 0, pu[0].eh = 0, pu[1].colors = [0, 1, 4], pu[1].ef = 1, pu[1].eh = 0, pu[2].colors = [0, 2], pu[2].ef = -1, pu[2].eh = 0, pu[3].colors = [0], pu[3].ef = 0, pu[3].eh = 0, pu[4].colors = [0, 2],
			pu[4].ef = 1, pu[4].eh = 1, pu[5].colors = [3], pu[5].ef = 0, pu[5].eh = -1, pu[6].id = 20, pu[6].colors = [0], pu[6].ef = 1, pu[6].eh = -1, pu[7].id = 21, pu[7].colors = [0], pu[7].ef = 0, pu[7].eh = 1, pu[8].id = 16, pu[8]
			.colors = [0], pu[8].ef = 0, pu[8].eh = 0, a7 = 0; a7 < 9; a7++)
			for (es = 0; es < pu[a7].colors.length; es++) pu[a7].canvas.push(function(id, a18) {
				if (id < 20) return b6.canvas.x4(aX.get(3), id, a18);
				var a18 = aX.get(3).height,
					a19 = b6.pJ.ul(a18, a18),
					hH = b6.pJ.getContext(a19);
				20 === id ? hH.drawImage(aX.get(18), 0, 0) : 21 === id && af.uw.xJ(af.wn.x8 + af.wn.xP, hH, 0, 0, a18);
				return a19
			}(pu[a7].id, a3G[pu[a7].colors[es]]))
	}, this.a3F = function() {
		return pu
	}, this.dU = function() {
		oF = [], ef = eh = ln = 0, a39 = a3A = -1e3, this.resize()
	}, this.resize = function() {
		a38 = Math.floor((u.v.sU() ? .075 : .0468) * at.pL), zoom = a38 / aX.get(3).height, gap = Math.floor(a38 / 3)
	}, this.a0B = function(kj, kk) {
		return !!this.wq() && (bb.dc = !0, !!af.uw.gm(kj, kk, player) || (kj = function(kj, kk) {
			a3A = a39 = -1e3;
			var a3J = a3K(a3I(kj, kk));
			if (-1 === a3J) return 0;
			if (1 !== pu[a3J].colors[pu[a3J].kQ])
				if (5 === a3J) {
					if (! function() {
							var dk = performance.now();
							a3C + 4e3 < dk && (oF = []);
							a3C = dk
						}(), a3M(player)) return 1;
					oF.push(player), 16 < oF.length && oF.shift()
				} else if (6 === a3J) {
				for (var a7 = oF.length - 1; 0 <= a7; a7--) 0 === ac.lU[oF[a7]] && oF.splice(a7, 1);
				0 < oF.length && (b1.a3N(1, oF, !0) && b4.fu.oE(oF, player), oF = [])
			} else if (2 === a3J) b4.gv.nj(aN.h0(), player);
			else if (3 === a3J) a9.gu && b4.gv.gw(a3B);
			else if (0 === a3J)
				if (0 === pu[0].kQ) {
					if (a9.a2c && aS.a3O() < 350) return 1;
					b4.gv.h6(aN.h0(), player)
				} else ax.h8(player, aN.h0());
			else if (1 === a3J) bR.a3P(), b4.gv.h4(aN.h0(), a3B);
			else {
				if (7 === a3J) return bR.a3Q(), af.uw.show(kj, kk), 2;
				if (4 === a3J) b1.a3N(0, [player], !0) && b4.fu.oB(player);
				else {
					if (8 !== a3J) return 0;
					b4.gv.gz(aN.h0(), a3B, player)
				}
			}
			return 1
		}(kj, kk), this.qm(), 2 === kj && (af.uw.wq = !0), 0 < kj))
	}, this.a0D = function(kj, kk) {
		this.wq() || (a39 = kj, a3A = kk, ln = performance.now())
	}, __fx.hoveringTooltip.display = function(mouseX, mouseY) {
		var coordX = bI.gq(mouseX),
			coordY = bI.gs(mouseY),
			coord = bI.ew(coordX, coordY),
			point = bI.eO(coord);
		if (coordX < 0 || coordY < 0) return;
		(function(kj, kk, eC) {
			aY.eT(eC) || -1 === (kj = bJ.h2.a3e(kj, kk)) ? aJ.a3d(eC) : aJ.a3f(kj)
		}(mouseX, mouseY, point))
	}
	this.click = function(kj, kk, a0K) {
		var gp = bI.gq(kj),
			gr = bI.gs(kk),
			eK = bI.ew(gp, gr),
			eC = bI.eO(eK);
		if (!bI.gt(gp, gr)) return !1;
		gp = (u.v.sU() ? .025 : .0144) * at.pL, gr = performance.now();
		if (Math.abs(kj - a39) > gp || Math.abs(kk - a3A) > gp || ln + 500 < gr) return !1;
		if (ln = gr, a0K && ! function(kj, kk, eC) {
				aY.eT(eC) || -1 === (kj = bJ.h2.a3e(kj, kk)) ? aJ.a3d(eC) : aJ.a3f(kj)
			}(kj, kk, eC), aI.gj || this.wq() || !b6.fu.gl(a9.eI) || a9.gi) return this.qm(), !1;
		if (a9.gu) {
			if (!a0K) {
				if (!aY.eT(eC)) return !1;
				a3B = eK, pu[3].wq = !0
			}
		} else if (bJ.h2.no(eK)) a0K ? aJ.a3W(55, 0) : bJ.a3U.a3V = -1;
		else {
			if (a0K) return !1;
			bJ.h2.a3X(kj, kk) || (2 === a9.yG ? aY.g8(eC) && (player = aY.eQ(eC), aY.y9(player)) && (pu[0].wq = !0, pu[0].kQ = 1, pu[7].wq = !0) : aY.ed(eC) ? (a3B = ai.e9.eB(eC)) && (gp = bI.eO(a3B), pu[8].wq = !0, player = aY.eP(gp) ? a9.eV :
				aY.eQ(gp)) : (a3B = eK, bJ.h2.h3(a9.eI, eK) && (pu[0].wq = !0, pu[0].kQ = 1, pu[1].wq = !0, pu[1].kQ = bK.fA[2] ? 0 : 2), aY.h1(eC) || (aY.eP(eC) ? (player = a9.eV, h5(a9.eI) ? (pu[0].wq = !0, pu[0].kQ = 0) : h7(a9.eI,
				player) && (pu[0].wq = !0, pu[0].kQ = 3)) : (player = aY.eQ(eC)) === a9.eI ? (pu[0].wq = !0, pu[0].kQ = 1, pu[7].wq = !0) : (pu[0].kQ = 1, pu[5].wq = function(player) {
				return aY.y9(player) && !a3M(player) && b1.a3N(1, [player], !1)
			}(player), pu[7].wq = aY.y9(player), eR(player, a9.eI) ? (pu[4].wq = aY.y9(player) && !ab.a3Z(player) && b1.a3N(0, [player], !1), pu[6].wq = function(player) {
				if (0 === oF.length) return !1;
				if (performance.now() > a3C + 4e3) return !(oF = []);
				return !a3M(player) && ! function(player) {
					var a7;
					if (a9.ie)
						for (a7 = oF.length - 1; 0 <= a7; a7--)
							if (!eR(player, oF[a7])) return 1;
					return
				}(player)
			}(player), h9(a9.eI, player) ? (pu[0].kQ = 0, pu[0].wq = !0) : h7(a9.eI, player) && (pu[0].kQ = 3, pu[0].wq = !0), pu[0].wq = this.a3b()) : (pu[2].wq = !0, pu[0].wq = !0)))))
		}
		return this.a3T(kj, kk)
	}, this.a3T = function(kj, kk) {
		return ef = kj - Math.floor(a38 / 2), eh = kk - Math.floor(a38 / 2), !!this.wq()
	}, this.zr = function(kj, kk) {
		return !!this.wq() && (af.uw.wq ? !af.uw.xH(kj, kk) && (af.uw.wq = !1, bb.dc = !0) : function(r6, kj, kk) {
			kj = a3I(kj, kk);
			if (0 <= a3K(kj)) return !1;
			if ((1 === kj || 6 === kj) && 0 <= a3K(2)) return !1;
			if ((6 === kj || 9 === kj) && 0 <= a3K(10)) return !1;
			return r6.qm(), bb.dc = !0
		}(this, kj, kk))
	}, this.qm = function() {
		for (var a7 = pu.length - 1; 0 <= a7; a7--) pu[a7].wq = !1, pu[a7].kQ = 0;
		af.uw.wq = !1
	}, this.wq = function() {
		return this.a3b() || af.uw.wq
	}, this.a3b = function() {
		for (var eY = pu.length, a7 = 0; a7 < eY; a7++)
			if (pu[a7].wq) return !0;
		return !1
	}, this.tA = function() {
		if (this.wq())
			if (af.uw.wq) af.uw.tA();
			else {
				var a7, hH = tB,
					es = pu,
					eY = es.length,
					a3j = (a38 + gap) / zoom;
				for (hH.imageSmoothingEnabled = !0, hH.setTransform(zoom, 0, 0, zoom, ef, eh), a7 = 0; a7 < eY; a7++) es[a7].wq && tB.drawImage(es[a7].canvas[es[a7].kQ], es[a7].ef * a3j, es[a7].eh * a3j);
				hH.imageSmoothingEnabled = !1, hH.setTransform(1, 0, 0, 1, 0, 0)
			}
	}
}

function c7() {
	var j7, canvas, a3k, a3l, a3m, a3n = -1;

	function a3o() {
		var a3p, wX = canvas.getContext("2d", {
			alpha: !0
		});
		wX.clearRect(0, 0, j7, j7), wX.fillStyle = b7.mT, wX.fillRect(0, 0, j7, j7), 0 === a3l && (wX.fillStyle = b7.mY, wX.fillRect(0, 0, j7, j7)), wX.fillStyle = b7.mX, wX.fillRect(0, 0, j7, 1), wX.fillRect(0, 0, 1, j7), wX.fillRect(0, j7 - 1, j7,
				1), wX.fillRect(j7 - 1, 0, 1, j7), a3p = .9 * j7 / aX.get(0).width, wX.imageSmoothingEnabled = !0, wX.setTransform(a3p, 0, 0, a3p, Math.floor((j7 - a3p * aX.get(0).width) / 2), Math.floor((j7 - a3p * aX.get(0).height) / 2)), wX
			.drawImage(aX.get(0), 0, 0), wX.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a3r(kj, kk) {
		if (!aI.gj) return kj <= j7 + bY.gap && kk >= aN.eh ? 9 : -1;
		if (kj <= 4 * j7 + bY.gap) {
			if (kk >= aN.eh) return 0;
			if (kk >= aN.eh - j7 - a3m * bY.gap) return 2
		} else if (kj <= 7 * j7 + bY.gap && kk >= aN.eh - j7 - a3m * bY.gap) return 1;
		return -1
	}
	this.gj = !1, this.dU = function() {
		a3l = -1, this.gj = !1, a3m = u.v.sU() ? 1.2 : .6, this.resize()
	}, this.resize = function() {
		j7 = aN.j7, (canvas = document.createElement("canvas")).width = j7, canvas.height = j7, a3k = b6.pJ.rF(1, (u.v.sU() ? .5 : .45) * j7), a3o()
	}, this.a0S = function() {
		this.gj = !this.gj, this.gj ? (b8.a0R(!1), a9.gi && b8.a2z && b8.a0T(!0), this.a3q()) : (a3l = -1, a3o(), !a9.jz || 1 !== a9.yG || a9.gu || a9.gi || u.v.setState(1)), bb.dc = !0
	}, this.a3q = function() {
		(a9.jz || a9.gi) && 1 === a9.yG && (aR.lG(!0), a9.gu || setTimeout(function() {
			bX.yR()
		}, 0), u.v.setState(0))
	}, this.gm = function(kj, kk) {
		return 0 <= (a3n = a3r(kj, kk)) || !aI.gj || a9.jz || a9.gi || ba.wq || aI.a0S(), a3n
	}, this.zr = function(kj, kk) {
		kj = a3r(kj, kk);
		kj !== a3l && (a3l = kj, this.gj || a3o(), bb.dc = !0)
	}, this.zs = function(kj, kk) {
		kj = a3r(kj, kk);
		return -1 !== kj && a3n === kj && (this.gj ? a9.m0 ? (0 <= kj && b8.a0R(!1), !a9.gi) : (0 === kj ? a9.zi() : 1 === kj ? this.a0S() : 2 === kj && n.o(1, 0), !0) : 9 === kj && (this.a0S(), !0))
	}, this.tA = function() {
		var a1;
		this.gj ? (a1 = Math.floor(5.5 * j7), tB.setTransform(1, 0, 0, 1, bY.gap, aN.eh), tB.fillStyle = b7.mT, tB.fillRect(0, 0, a1, j7), 0 === a3l ? (tB.fillStyle = b7.mY, tB.fillRect(0, 0, 4 * j7, j7)) : 1 === a3l && (tB.fillStyle = b7.mY, tB
				.fillRect(4 * j7, 0, Math.floor(1.5 * j7), j7)), tB.fillStyle = b7.mX, tB.fillRect(0, 0, a1, 1), tB.fillRect(0, 0, 1, j7), tB.fillRect(4 * j7, 0, 1, j7), tB.fillRect(0, j7 - 1, a1, 1), tB.fillRect(a1 - 1, 0, 1, j7), tB.font =
			a3k, b6.pJ.textBaseline(tB, 1), b6.pJ.textAlign(tB, 1), tB.fillText(L(27), 2 * j7, .54 * j7), a1 = .4 * j7, aI.a3w(bY.gap + 4 * j7 + (1.5 * j7 - a1) / 2, aN.eh + .3 * j7, a1), a1 = 1, tB.setTransform(1, 0, 0, 1, bY.gap, aN.eh -
				a1 * a3m * bY.gap - a1 * j7), tB.fillStyle = b7.mT, tB.fillRect(0, 0, 4 * j7, j7), a3l === a1 + 1 && (tB.fillStyle = b7.mY, tB.fillRect(0, 0, 4 * j7, j7)), tB.fillStyle = b7.mX, tB.fillRect(0, 0, 4 * j7, 1), tB.fillRect(0, 0,
				1, j7), tB.fillRect(4 * j7, 0, 1, j7), tB.fillRect(0, j7 - 1, 4 * j7, 1), tB.fillText(L(0 === a1 ? 27 : 28), 2 * j7, .54 * j7), tB.setTransform(1, 0, 0, 1, 0, 0)) : tB.drawImage(canvas, bY.gap, aN.eh)
	}, this.a3v = function(player) {
		return 0 !== ac.lU[player] && 2 !== a9.yG && aY.y9(player)
	}, this.a3w = function(ef, eh, eY) {
		tB.setTransform(1, 0, 0, 1, ef, eh), tB.lineWidth = bY.xI, tB.strokeStyle = b7.mX, tB.beginPath(), tB.moveTo(0, 0), tB.lineTo(eY, eY), tB.moveTo(0, eY), tB.lineTo(eY, 0), tB.stroke()
	}
}

function c8() {
	var a3y, j7, a3z, a40, a41, a42, a43, a44, a45;

	function wT() {
		return aN.a4N(aJ.a4J()) ? aq.wq ? aN.eh - aN.j7 - 2 * a3z : aN.eh - a3z : b8.a4N(aJ.a4M()) ? aq.wq ? b8.wT() - aN.j7 - 2 * a3z : b8.wT() - a3z : aq.wq ? at.j7 - aN.j7 - (bg.a37() + 1) * a3z : at.j7 - bg.a37() * bY.gap
	}

	function a4A(dk, p0, id, g6, a4D, a4E, v4, a4F, a4G, a4H) {
		var a7, wX, a19, pB, g, a4S = void 0 !== a4G,
			a1 = Math.floor(aM.measureText(p0, aJ.a3k) + 1.5 * a40 + (a4S ? j7 : 1.5 * a40));
		if (bb.dc = !0, a1 + a3z > at.a1 && !a4S && 50 !== id && 20 < p0.length) a4A(dk, (g = b6.z3.a2I(p0))[0], id, g6, a4D, a4E, v4, a4F, a4G, a4H), a4A(dk, g[1], id, g6, a4D, a4E, v4, a4F, a4G, a4H);
		else if (g = a1 + (50 === id ? a41 : 0), (a19 = document.createElement("canvas")).width = a1, a19.height = j7, (wX = a19.getContext("2d", {
				alpha: !0
			})).font = aJ.a3k, b6.pJ.textBaseline(wX, 1), b6.pJ.textAlign(wX, 0), wX.clearRect(0, 0, a1, j7), wX.fillStyle = a4E, wX.fillRect(0, 0, a1, j7), wX.fillStyle = a4D, wX.fillText(p0, Math.floor(1.5 * a40), Math.floor(j7 / 2)), a4S && (wX
				.imageSmoothingEnabled = !0, af.uw.xJ(a4G, wX, a1 - j7, 0, j7)), 0 === (pB = {
				ln: dk,
				p0: p0,
				id: id,
				player: g6,
				canvas: a19,
				a4D: a4D,
				a4E: a4E,
				a1: a1,
				a4K: g,
				v4: v4,
				a4F: a4F,
				a4G: a4G,
				a4H: a4H
			}).ln || 0 < a3y.length && 0 < a3y[0].ln) a3y.unshift(pB);
		else {
			for (a7 = 1; a7 < a3y.length; a7++)
				if (0 < a3y[a7].ln) return void a3y.splice(a7, 0, pB);
			a3y.push(pB)
		}
	}

	function a4B(dz, rx, es) {
		return "rgb(" + dz + "," + rx + "," + es + ")"
	}

	function a4T(id, g1) {
		for (var eY = a3y.length, a7 = 0; a7 < eY; a7++) a3y[a7].id === id && g1-- <= 0 && (a3y.splice(a7, 1), a7--, eY--)
	}

	function a4V(id, player) {
		for (var em = !1, a7 = a3y.length - 1; 0 <= a7; a7--) a3y[a7].id !== id || player !== a9.eV && a3y[a7].player !== player || (a3y.splice(a7, 1), em = !0);
		return em
	}

	function a4s(p0) {
		a4A(340, p0, 6, 0, a4B(215, 245, 255), b7.mU, -1, !1)
	}
	this.a46 = "", this.dU = function() {
		var self;
		a44 = 0, a43 = u.v.sU() ? 7 : 12, a42 = {
			y7: [0, 0, 0],
			a47: [0, 0, 0],
			lm: [220, 180, 180],
			t9: [0, 0, 0],
			et: [0, 0, 0]
		}, a3y = [], this.resize(), a9.gu && this.yS(0, 18), bO.uj.uk[bO.eE].name.length && a4s(L(75, [bO.uj.uk[bO.eE].name])), a4s(L(76, [bO.ej - 2 + "x" + (bO.ek - 2)])), a4s(L(77, [ak.a4t])), ak.a4t !== ak.a4u && a4s(L(78, [ak.a4u + " (" +
			b6.z3.a2F(100 * ak.a4u / ak.a4t, 1) + ")"
		])), 0 < ak.a4v && a4s(L(51, [ak.a4v + " (" + b6.z3.a2F(100 * ak.a4v / ak.a4t, 1) + ")"])), 0 < ak.a4w && a4s(L(79, [ak.a4w + " (" + b6.z3.a2F(100 * ak.a4w / ak.a4t, 1) + ")"])), 10 === a9.jx && a4A(120, L(80), 6, 0, a4B(235, 255,
			120), b7.mU, -1, !1), 0 !== (self = this).a46.length && (a4A(200, self.a46, 0, 0, b7.mX, b7.mU, -1, !1), self.a46 = ""), a9.wk && a4A(340, L(29), 6, 0, a4B(255, 200, 0), b7.mU, -1, !1)
	}, this.resize = function() {
		var a4C, a7;
		if (j7 = (j7 = Math.floor((u.v.sU() ? .031 : .0249) * at.pL)) < 10 ? 10 : j7, this.fontSize = Math.floor(2 * j7 / 3), this.a3k = b6.pJ.rF(1, this.fontSize), a3z = bY.gap, a40 = Math.floor(j7 / 5), 0 < a3y.length)
			for (a4C = a3y, a3y = [], a7 = a4C.length - 1; 0 <= a7; a7--) a4A(a4C[a7].ln, a4C[a7].p0, a4C[a7].id, a4C[a7].player, a4C[a7].a4D, a4C[a7].a4E, a4C[a7].v4, a4C[a7].a4F, a4C[a7].a4G, a4C[a7].a4H);
		this.a4I()
	}, this.a4I = function() {
		a45 = document.createElement("canvas");
		var p0 = L(30),
			wX = (a41 = aM.measureText(p0, this.a3k) + 5 * a40, a45.height = j7, a45.width = a41, a45.getContext("2d", {
				alpha: !0
			}));
		wX.font = this.a3k, b6.pJ.textBaseline(wX, 1), b6.pJ.textAlign(wX, 1), wX.clearRect(0, 0, a41, j7), wX.fillStyle = b7.ms, wX.fillRect(0, 0, a41, j7), wX.fillStyle = b7.mX, wX.fillText(p0, Math.floor(a41 / 2), Math.floor(j7 / 2))
	}, this.a4J = function() {
		var eY;
		return aq.wq ? aq.a1 : 0 === (eY = a3y.length) ? 0 : 1 === eY ? a3y[0].a4K : a4L(a3y[0].a4K, a3y[1].a4K)
	}, this.a4M = function() {
		var eY = a3y.length;
		return aq.wq ? eY ? a4L(aq.a1, a3y[0].a4K) : aq.a1 : 0 === eY ? 0 : 1 === eY ? a3y[0].a4K : 2 === eY ? a4L(a3y[0].a4K, a3y[1].a4K) : a4L(a4L(a3y[0].a4K, a3y[1].a4K), a3y[2].a4K)
	}, this.gm = function(ef, eh) {
		for (var lx, a4O, a4P = wT(), a7 = a3y.length - 1; 0 <= a7; a7--)
			if ((a4O = a4P - (a7 + 1) * j7) <= eh && eh < a4O + j7) return 50 === a3y[a7].id ? ef >= at.a1 - a41 - a3z - a3y[a7].a1 && (ef >= at.a1 - a41 - a3z ? b4.fu.oB(a3y[a7].player) : aD.lr(a3y[a7].player, 800, !1, 0), !0) : ef >= at.a1 -
				a3y[a7].a1 - a3z && (736 === a3y[a7].id ? (a4O = a3y[a7].p0.split(" "), window.open(a4O[a4O.length - 1], "_blank")) : a3y[a7].a4F && (a3y[a7].a4H && a3y[a7].a4H.er ? (a4O = a3y[a7].a4H.eK, lx = bI.eg(a4O) - 10, a4O = bI.ei(
					a4O) - 10, aD.lq(lx, a4O, 19 + lx, 19 + a4O)) : a3y[a7].a4H && a3y[a7].a4H.es ? aD.ls(a3y[a7].player, a3y[a7].a4H.lt) : (aD.lr(a3y[a7].player, 800, !1, 0), 0 <= a3y[a7].v4 && (lx = a3y[a7].v4, a3y[a7].v4 = a3y[a7]
					.player, a3y[a7].player = lx))), !0);
		return !1
	}, this.ye = function(dk, p0, id, g6, a4D, a4E, v4, a4F, a4G, a4H) {
		a4A(dk, p0, id, g6, a4D, a4E, v4, a4F, a4G, a4H)
	}, this.a4R = function(k) {
		a4A(300, k, 252, 0, b7.mX, b7.mU, -1, !1)
	}, this.a2V = function(id) {
		for (var a7 = a3y.length - 1; 0 <= a7; a7--) a3y[a7].id === id && (a3y[a7].ln = 1)
	}, this.yS = function(player, id) {
		0 === id ? (aM.ii(player, 0), a4T(423, 0), a4A(160, L(31, [ac.a4U[player]]), 423, player, "rgb(10,220,10)", b7.mU, -1, !1)) : 1 === id ? (a4V(50, a9.eV), aM.ii(player, 1), a4A(360, L(32, [ac.a4U[player]]), 0, player, b7.n9, b7.mU, -1, !
			0), aD.lr(player, 2700, !1, 0)) : 2 === id ? (aM.ii(player, 2), a4A(0, L(33), 0, player, "rgb(10,255,255)", b7.mU, -1, !0), aD.lr(player, 2700, !1, 0)) : 3 === id ? (aM.ii(player, 2), a4A(0, L(34, [ac.a4U[player]]), 0, player, b7
			.mX, b7.mU, -1, !0), aD.lr(player, 2700, !1, 0)) : 4 === id ? this.a4W(1, player, player) : 5 === id ? 2 !== ac.a1e[player] && aY.y9(a9.eI) && (function(id, lP) {
			var a7, a4h = 0,
				eY = a3y.length;
			for (a7 = 0; a7 < eY; a7++)
				if (a3y[a7].id === id && lP <= ++a4h) return a3y.splice(a7, 1)
		}(1, 5), ab.a4Y(player) ? a4A(180, L(35, [ac.a4U[player]]), 1, player, a4B(255, 200, 180), b7.mU, -1, !0) : (a4T(573, 0), a4A(180, L(36, [ac.a4U[player]]), 573, player, b7.n9, b7.mU, -1, !0))) : 18 === id ? a4A(255, L(37), 18, 0, b7
			.mX, b7.mU, -1, !1) : 21 === id ? a4A(220, L(38), id, 0, b7.mX, b7.mU, -1, !1) : 22 === id ? this.a4W(2, player, player) : 59 === id && a4A(0, L(39), id, 0, b7.nN, b7.mU, 0, !1)
	}, this.zb = function(k) {
		a4A(200, L(40, [k]), 94, 0, b7.mX, b7.n5, -1, !1)
	}, this.yZ = function(a4Z) {
		if (a9.eI === a4Z && !a9.jz)
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			a4A(0, "Your Win Count is now " + __fx.wins.count, 3, a4Z, b7.mX, b7.mU, -1, !0);
		ac.gM[a4Z] && (aM.ii(a4Z, 2), a9.jd < 100 ? a4A(0, L(34, [ac.a4U[a4Z]]), 3, a4Z, b7.mX, b7.mU, -1, !0) : a4A(0, L(41, [ac.a4U[a4Z]]), 3, a4Z, b7.mX, b7.mU, -1, !0))
	}, this.a3d = function(eC) {
		var a4b, p0, a4a = "(" + bI.eg(eC >> 2) + ", " + bI.ei(eC >> 2) + ")",
			a4F = !1,
			player = 0;
		aY.eT(eC) ? aY.eP(eC) ? a4a = L(42, [a4a]) : (player = aY.eQ(eC), p0 = L(43, [b6.wX.a1L(ac.z5[player], b6.pJ.rF(0, 10), 150)]) + "   ", p0 = (p0 += L(44, [b6.z3.xZ(ac.ga[player])]) + "   ") + L(45, [b6.z3.xZ(ac.gM[player])]) + "   ", a9
				.ie && (a4b = bc.yc[bc.k3[bc.eW[player]]], p0 += L(46) + ": " + a4b + "   "), b6.fu.j1(player) && (p0 += L(47) + ": " + aA.jr[aA.im[player]] + "   "), a4a = p0 = (p0 += L(48, [player]) + "   ") + L(49, [a4a]), a4F = !0) : a4a = aY
			.ed(eC) ? L(50, [a4a]) + "   #" + aY.eG(eC) : L(51, [a4a]), bb.dc = !0, a4T(55, 0), a4A(220, a4a, 55, player, b7.mX, b7.mU, -1, a4F)
	}, this.a3f = function(a4c) {
		var kO = bJ.s,
			player = kO.a4d[a4c] >> 3,
			p0 = (bb.dc = !0, a4T(55, 0), L(52, [ac.a4U[player]]) + "   ");
		a4A(220, p0 += L(44, [kO.a4e[a4c]]), 55, player, b7.mX, b7.mU, -1, !0)
	}, this.nt = function(ng, a4f, nu) {
		ng === a9.eI ? a4A(175, " " + L(53, [ac.a4U[a4f]]) + ": ", 1001, a4f, a4B(200, 255, 210), b7.mU, -1, !0, nu) : this.a4g(ng, nu)
	}, this.a4g = function(ng, nu) {
		a4T(1e3, 0), a4A(175, ac.a4U[ng] + ": ", 1e3, ng, b7.mX, "rgba(5,60,25,0.9)", -1, !0, nu)
	}, this.yf = function() {
		var k;
		a9.yL ? (k = L(54), aM.yd(L(55), 2, 1, 12), a4A(0, k, 40, 0, "rgb(10,220,10)", b7.mU, -1, !1)) : (k = L(56), aM.yd(L(57), 2, 0, 16), a4A(0, k, 41, 0, b7.mX, b7.mU, -1, !1))
	}, this.we = function() {
		var z5 = ac.z5,
			eb = a9.data;
		a4A(300, z5[0] + " [" + a9.yY.wj(eb.elo[0]) + "] vs " + z5[1] + " [" + a9.yY.wj(eb.elo[1]) + "]", 65, 0, b7.mO, "rgba(100,255,255,0.75)", -1, !1)
	}, this.a4i = function(k) {
		a4A(200, k, 0, 0, "rgb(40,255,200)", "rgba(10,60,40,0.9)", -1, !1)
	}, this.a4j = function(a4k) {
		a4A(0, L(a4k ? 58 : 59), 247, 0, b7.nM, b7.mU, -1, !1)
	}, this.wm = function(wi, wl, a4l) {
		var eb = a9.data,
			z5 = ac.z5;
		a4A(0, z5[0] + ": " + a9.yY.wj(eb.elo[0]) + " -> " + wi, 66, 0, b7.mX, a4l[0], -1, !1), a4A(0, z5[1] + ": " + a9.yY.wj(eb.elo[1]) + " -> " + wl, 66, 1, b7.mX, a4l[1], -1, !1)
	}, this.oC = function(player, id) {
		0 === id ? a4V(50, player) ? (a4A(128, L(60, [ac.a4U[player]]), 52, player, a4B(180, 255, 180), b7.mU, -1, !0), ab.os(player, 2, 255)) : a4A(384, L(61, [ac.a4U[player]]), 51, player, a4B(210, 210, 255), b7.mU, -1, !0) : a4V(51, player) ?
			(a4A(128, L(62, [ac.a4U[player]]), 52, player, b7.mX, "rgba(60,120,10,0.9)", -1, !0), ab.os(player, 2, 255)) : (a4A(384, L(63, [ac.a4U[player]]), 50, player, b7.mX, "rgba(90,90,90,0.9)", -1, !0), ab.os(player, 2, 96))
	}, this.oG = function(y7, target) {
		var color = a4B(210, 255, 210);
		1 < y7.length ? a4A(230, L(64, [y7.length, ac.a4U[target]]), 66, target, color, b7.mU, -1, !0) : a4A(230, L(65, [ac.a4U[y7[0]], ac.a4U[target]]), 66, y7[0], color, b7.mU, target, !0)
	}, this.a4m = function(player, target) {
		a4A(230, L(66, [ac.a4U[player], ac.a4U[target]]), 66, player, b7.mX, "rgba(75,65,5,0.9)", target, !0)
	}, this.a3W = function(id, g1) {
		a4T(id, g1)
	}, this.yN = function(id, player) {
		a4V(id, void 0 === player ? a9.eV : player)
	}, this.a4n = function(id) {
		for (var a7 = a3y.length - 1; 0 <= a7; a7--)
			if (a3y[a7].id === id) return a3y[a7];
		return null
	}, this.o7 = function(a4o, a4p, player) {
		2 !== ac.a1e[a9.eI] && (a4A(200, 1 === a4o ? L(67, [ac.a4U[player]]) : L(68, [a4o, ac.a4U[player]]), 30, player, "rgb(190,255,190)", b7.mU, -1, !0), a4p) && a4A(30, 1 === a4p ? L(69) : L(70, [a4p]), 30, 0, b7.mX, b7.mU, -1, !1)
	}, this.a4r = function(a4o, player) {
		2 !== ac.a1e[a9.eI] && (a4T(31, 0), 2 === ac.a1e[player] || player >= a9.jd ? a4A(150, 1 === a4o ? L(71, [ac.a4U[player]]) : L(72, [ac.a4U[player], a4o]), 31, player, b7.mO, "rgba(205,205,205,0.9)", -1, !0) : a4A(150, 1 === a4o ? L(73, [
			ac.a4U[player]
		]) : L(74, [ac.a4U[player], a4o]), 31, player, b7.mO, "rgba(205,255,205,0.9)", -1, !0))
	}, this.yM = function(bo) {
		for (var et = bb.ja(), a7 = 2; 0 <= a7; a7--) 0 < a42.t9[a7] && (bo || a42.et[a7] < et - 220) && this.a4x(a7)
	}, this.a4x = function(id) {
		var p0, eY = a42.t9[id],
			player = a42.y7[id];
		a42.t9[id] = 0, 1 === eY ? (0 === id ? p0 = L(81, [ac.a4U[player], ac.a4U[a42.a47[0]]]) : 1 === id ? p0 = L(82, [ac.a4U[player]]) : 2 === id ? p0 = L(83, [ac.a4U[player]]) : 3 === id && (p0 = L(84, [ac.a4U[player]])), a4T(7, 0), a4A(a42
			.lm[id], p0, 7, a42.a47[id], b7.mX, b7.mU, -1, !0)) : (p0 = L(0 === id ? 85 : 1 === id ? 86 : 87, [eY]), a4T(7, 0), a4A(a42.lm[id], p0, 7, player, b7.mX, b7.mU, -1, !1))
	}, this.a4W = function(id, gy, v4) {
		var et = bb.ja(),
			eY = a42.t9[id] + 1;
		a42.t9[id]++, a42.y7[id] = gy, a42.a47[id] = v4, 1 === eY && (a42.et[id] = et), (1 === eY && (a9.yJ < 32 || 2 === a9.yG) || 1 < eY && (a42.et[id] < et - 140 || 2 === a9.yG)) && this.a4x(id)
	}, this.iS = function() {
		for (var hU = (hU = a3y.length - a43) <= 1 ? 1 : hU * hU, a7 = a3y.length - 1; 0 <= a7; a7--) 0 < a3y[a7].ln && (a3y[a7].ln -= hU, a3y[a7].ln <= 0) && (bb.dc = !0, a3y.splice(a7, 1));
		! function() {
			var g1, a7;
			if (128 !== a44 && !(++a44 < 128))
				for (g1 = 5, a7 = ah.je - 1; 0 <= a7; a7--) 1 === ac.a1e[ah.jg[a7]] && 0 < g1-- && a4A(240, L(84, [ac.a4U[ah.jg[a7]]]), 1, ah.jg[a7], b7.mO, "rgba(255,255,255,0.75)", -1, !0)
		}(), this.yM(!1)
	}, this.tA = function() {
		for (var vX, eh = wT(), a7 = a3y.length - 1; 0 <= a7; a7--) vX = eh - (a7 + 1) * j7, 50 === a3y[a7].id ? (tB.drawImage(a3y[a7].canvas, at.a1 - a3y[a7].a1 - a41 - a3z, vX), tB.drawImage(a45, at.a1 - a41 - a3z, vX)) : tB.drawImage(a3y[a7]
			.canvas, at.a1 - a3y[a7].a1 - a3z, vX)
	}
}

function c9() {
	var a4z, a50, a51, a1, j7, font, p0;

	function a55(a56) {
		return a56 < 10 ? "0" + a56 : String(a56)
	}
	this.dU = function() {
		p0 = L(88)
	}, this.resize = function() {
		a1 = Math.floor((u.v.sU() ? .53 : .36) * at.pL), j7 = Math.floor(.065 * a1), font = b6.pJ.rF(1, Math.floor(.9 * j7)), a51--, this.setTime()
	}, this.iS = function() {
		this.setTime() && (bb.dc = !0)
	}, this.setTime = function() {
		var dk = new Date,
			a53 = dk.getUTCMinutes(),
			dk = dk.getUTCSeconds();
		return a50 = 3600 - 60 * a53 - dk, a50 %= 900, a4z = p0 + a55(Math.floor(a50 / 60)) + ":" + a55(a50 % 60), a51 !== (a51 = 60 * a53 + dk) && (a1 = aM.measureText(a4z, font), a1 += Math.floor(.4 * j7), !0)
	}, this.tA = function() {
		tB.lineWidth = 1 + Math.floor(j7 / 15), tB.translate(at.a1 - j7, Math.floor(.5 * (at.j7 + a1))), tB.rotate(-Math.PI / 2), tB.fillStyle = b7.mX, tB.fillRect(0, 0, a1, j7), tB.strokeStyle = b7.mO, tB.strokeRect(0, 0, a1, j7 + 10), tB
			.fillStyle = b7.mO, tB.font = font, b6.pJ.textBaseline(tB, 1), b6.pJ.textAlign(tB, 1), tB.fillText(a4z, Math.floor(a1 / 2), Math.floor(.59 * j7)), tB.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function cA() {
	var a3y, a57, a3k, j7, a58;

	function a5A(a7) {
		var a5C = !0,
			hP = b7.mX,
			a1 = (a3y[a7].il === a9.eV ? a3y[a7].wX.fillStyle = b7.mh : (aY.a5D(a3y[a7].il), a3y[a7].wX.fillStyle = b6.color.mR(bK.f8[0], bK.f8[1], bK.f8[2], .87), 400 < b6.pT.a0q(bK.f8, 0, 2) && (a5C = !1, hP = b7.mO)), a3y[a7].canvas.width),
			rk = (a3y[a7].wX.clearRect(0, 0, a1, j7), a3y[a7].wX.fillRect(0, 0, a1, j7), a3y[a7].wX.fillStyle = hP, ! function(wX, a1, j7) {
				wX.fillRect(0, 0, a1, 1), wX.fillRect(0, j7 - 1, a1, 1), wX.fillRect(0, 0, 1, j7), wX.fillRect(a1 - 1, 0, 1, j7)
			}(a3y[a7].wX, a1, j7), a57 + 2 * j7 < a1 && (a3y[a7].wX.fillRect(a1 - a57 - j7, 0, 1, j7), a3y[a7].wX.fillText(ac.a4U[a3y[a7].il], Math.floor((a1 - a57) / 2), Math.floor(.57 * j7))), 0 !== a3y[a7].id ? 0 : j7);
		a3y[a7].wX.fillText(b6.z3.xZ(a3y[a7].im), Math.floor(a1 - a57 / 2 - rk), Math.floor(.57 * j7)),
			function(a7, a1, rk, a5C) {
				a3y[a7].wX.fillStyle = a5C ? b7.mZ : b7.mV;
				a5C = Math.floor(a57 * a3y[a7].im / a3y[a7].a5J);
				a3y[a7].wX.fillRect(Math.floor(a1 - a57 - rk), j7 - a58, a5C, a58)
			}(a7, a1, rk, a5C), 0 === a3y[a7].id ? (a5G(a7, a1, a5C, hP), function(a7, a1, a5C) {
				a3y[a7].wX.strokeStyle = a5C ? b7.mn : b7.mx, a3y[a7].wX.fillRect(j7, 0, 1, j7);
				a5C = a1 - j7;
				a3y[a7].wX.beginPath(), a3y[a7].wX.moveTo(Math.floor(.3 * j7 + a5C), Math.floor(j7 / 2)), a3y[a7].wX.lineTo(Math.floor(j7 - .3 * j7 + 0 + a5C), Math.floor(j7 / 2)), a3y[a7].wX.stroke(), a3y[a7].wX.beginPath(), a3y[a7].wX.moveTo(
					Math.floor(j7 / 2 + a5C), Math.floor(.3 * j7)), a3y[a7].wX.lineTo(Math.floor(j7 / 2 + a5C), Math.floor(j7 - .3 * j7 + 0)), a3y[a7].wX.stroke()
			}(a7, a1, a5C)) : a5G(a7, 2 * j7, a5C, hP)
	}

	function a5G(a7, a1, a5C, hP) {
		a3y[a7].wX.strokeStyle = a3y[a7].a5K ? b7.mf : a5C ? b7.n1 : b7.n2, a3y[a7].wX.fillStyle = hP, a3y[a7].wX.fillRect(a1 - j7, 0, 1, j7), a3y[a7].wX.lineWidth = Math.max(Math.floor(j7 / 12), 3), a3y[a7].wX.lineCap = "round";
		a5C = .35;
		a1 = j7 + 1, a3y[a7].wX.beginPath(), a3y[a7].wX.moveTo(Math.floor(a1 - a5C * j7 + 0), Math.floor(a5C * j7)), a3y[a7].wX.lineTo(Math.floor(a1 - j7 + a5C * j7), Math.floor(j7 - a5C * j7 + 0)), a3y[a7].wX.stroke(), a3y[a7].wX.beginPath(), a3y[
			a7].wX.moveTo(Math.floor(a1 - j7 + a5C * j7), Math.floor(a5C * j7)), a3y[a7].wX.lineTo(Math.floor(a1 - a5C * j7 + 0), Math.floor(j7 - a5C * j7 + 0)), a3y[a7].wX.stroke()
	}

	function a5U(eY) {
		for (var im, a7 = eY - 1; 0 <= a7; a7--) im = aZ.fl(a9.eI, a7), a3y[a7].im !== im && (a3y[a7].im = im, a3y[a7].a5J = im > a3y[a7].a5J ? im : a3y[a7].a5J, a3y[a7].a5B = !0)
	}

	function a59(a5W) {
		a5W.canvas = document.createElement("canvas"), bO.up.font = a3k;
		var a1 = a57;
		a5W.il < a9.eV && 0 === a5W.id && (a1 += Math.floor(bO.up.measureText(ac.a4U[a5W.il] + "000").width)), a1 += j7, 0 === a5W.id && (a1 += j7), a5W.canvas.width = a1, a5W.canvas.height = j7, a5W.wX = a5W.canvas.getContext("2d", {
			alpha: !0
		}), a5W.wX.font = a3k, b6.pJ.textBaseline(a5W.wX, 1), b6.pJ.textAlign(a5W.wX, 1)
	}

	function a5Q(a7) {
		return aQ.a5Y() ? at.a1 - a3y[a7].canvas.width - bY.gap : aQ.ef
	}

	function a5R(a7) {
		return Math.floor(2 * bY.gap + (aQ.a5Y() ? aS.j7 + bY.gap : 0) + aQ.j7 + a7 * (1.3 * j7))
	}
	this.dU = function() {
		a3y = [], this.resize()
	}, this.resize = function() {
		a3k = aJ.a3k, j7 = aJ.fontSize + 5, j7 = Math.floor(1.25 * j7), u.v.sU() && (j7 = Math.floor(1.25 * j7)), a58 = Math.floor(.15 * j7), bO.up.font = a3k, a57 = Math.floor(bO.up.measureText("02 000 000 0000").width);
		for (var a7 = a3y.length - 1; 0 <= a7; a7--) a59(a3y[a7]), a5A(a7)
	}, this.lG = function() {
		for (var a7 = a3y.length - 1; 0 <= a7; a7--) a3y[a7].a5B && (a3y[a7].a5B = !1, a5A(a7))
	}, this.gm = function(kj, eh) {
		if (2 !== a9.yG && 0 !== ac.lU[a9.eI] && !a9.gi && aY.y9(a9.eI))
			for (var a5L, a5M, a5N, a5O = u.v.sU() ? j7 : 0, a5P = u.v.sU() ? Math.floor(.15 * j7) : 0, a7 = a3y.length - 1; 0 <= a7; a7--)
				if (a5L = a5Q(a7), a5M = a5R(a7), a5N = a3y[a7].canvas.width, a5M - a5P <= eh && eh <= a5M + j7 + a5P) {
					if (a5L - a5O <= kj && kj <= a5L + j7 + a5O) return a3y[a7].a5K || (a3y[a7].a5B = !0, a3y[a7].a5K = !0, 0 === a3y[a7].id && b4.gv.nr(a3y[a7].il)), !0;
					if (0 === a3y[a7].id && a5L + a5N - j7 - a5O <= kj && kj <= a5L + a5N + a5O) return b4.gv.h6(aN.h0(), a3y[a7].il), !0
				} return !1
	}, this.iS = function() {
		var eY;
		0 !== ac.lU[a9.eI] && (aY.y9(a9.eI) || a9.gi) && (function(eY) {
			if (a3y.length !== eY) return 1;
			for (var a7 = eY - 1; 0 <= a7; a7--)
				if (a3y[a7].id !== aZ.ff(a9.eI, a7) || a3y[a7].il !== aZ.fk(a9.eI, a7)) return 1;
			return
		}(eY = aZ.fe(a9.eI)) && function(eY) {
			var a7, id, il, es, im, a4C = [];
			loop: for (a7 = 0; a7 < eY; a7++) {
				for (id = aZ.ff(a9.eI, a7), il = aZ.fk(a9.eI, a7), es = 0; es < a3y.length; es++)
					if (a3y[es].id === id && a3y[es].il === il) {
						a4C.push(a3y.splice(es, 1)[0]);
						continue loop
					} im = aZ.fl(a9.eI, a7), a59(im = {
					il: il,
					im: im,
					a5J: im,
					id: id,
					a5B: !0,
					a5K: !1,
					canvas: null,
					wX: null
				}), a4C.push(im)
			}
			a3y = a4C
		}(eY), a5U(eY))
	}, this.a5X = function(g6) {
		for (var eY = Math.min(a3y.length, aZ.fe(a9.eI)), a7 = 0; a7 < eY; a7++)
			if (a3y[a7].il === g6) return void(a3y = [])
	}, this.tA = function() {
		if (0 !== ac.lU[a9.eI] && (aY.y9(a9.eI) || a9.gi))
			for (var a7 = a3y.length - 1; 0 <= a7; a7--) tB.drawImage(a3y[a7].canvas, a5Q(a7), a5R(a7))
	}
}

function cB() {
	var a3y, jl, a5Z, a5a, j7, a3k, fontSize, a5b, a5c, a5d, a5e, canvas, wX, lh, a5f;

	function tO(a7) {
		return L(0 === a7 ? 89 : 1 === a7 ? 90 : 2 === a7 ? 91 : 92)
	}

	function a5m() {
		tB.drawImage(canvas, bY.gap + (a9.ie ? bY.gap + bd.a5n() : 0), a5o + 2 * bY.gap)
	}

	function a5g() {
		canvas.width = a3y[0].width + a5d, canvas.height = j7 + a5d, (wX = canvas.getContext("2d", {
				alpha: !0
			})).clearRect(0, 0, a3y[0].width + a5d, j7 + a5d), wX.translate(Math.floor(a5d / 2), Math.floor(a5d / 2)), wX.lineWidth = a5d, wX.fillStyle = 1 === a3y[0].a5l ? b7.mc : b7.mU, a5p(), wX.fill(), wX.strokeStyle = 1 === a3y[0].a5l ? b7.mO :
			b7.mX, a5p(), wX.stroke(), b6.pJ.textAlign(wX, 1), b6.pJ.textBaseline(wX, 1), wX.fillStyle = 1 === a3y[0].a5l ? b7.mO : b7.mX, wX.font = a3k[0], wX.fillText(tO(a3y[0].a5k), Math.floor(a3y[0].width / 2), Math.floor(.72 * a5b[0] * j7)), wX
			.font = a3k[1], wX.fillText(a3y[0].p0, Math.floor(a3y[0].width / 2), Math.floor((a5b[0] + .48 * a5b[1]) * j7))
	}

	function a5p() {
		wX.beginPath(), wX.moveTo(a5e, 0), wX.lineTo(a3y[0].width - a5e, 0), wX.lineTo(a3y[0].width, a5e), wX.lineTo(a3y[0].width, j7 - a5e), wX.lineTo(a3y[0].width - a5e, j7), wX.lineTo(a5e, j7), wX.lineTo(0, j7 - a5e), wX.lineTo(0, a5e), wX
			.closePath()
	}
	this.dU = function() {
		jl = 4, a5Z = a5a = lh = 0, a3y = [], a3k = new Array(2), fontSize = new Array(2), (a5b = new Array(2))[0] = .3, a5b[1] = .7, a5c = new Array(4), canvas = document.createElement("canvas"), a5f = bb.ln + 2e3, this.resize()
	}, this.resize = function() {
		var a7, a1;
		for (j7 = Math.floor((u.v.sU() ? .0725 : .058) * at.pL), fontSize[0] = Math.floor(.85 * a5b[0] * j7), fontSize[1] = Math.floor(.85 * a5b[1] * j7), a3k[0] = b6.pJ.rF(1, fontSize[0]), a3k[1] = b6.pJ.rF(1, fontSize[1]), a7 = a5c.length -
			1; 0 <= a7; a7--) a5c[a7] = this.measureText(tO(a7) + "000", a3k[0]);
		if (a5d = Math.floor(1 + .05 * j7), a5e = Math.floor(.2 * j7), 0 < a3y.length) {
			for (a7 = a3y.length - 1; 0 <= a7; a7--) a1 = this.measureText(a3y[a7].p0 + "00", a3k[1]), a3y[a7].width = a1 < a5c[a7] ? a5c[a7] : a1;
			a5g()
		}
	}, this.iS = function() {
		0 !== jl && (4 === jl ? bb.ln > a5f && (jl = 0, 1 === a9.yG) && aM.yd(bO.uj.uk[bO.eE].name, 3, 1, 9) : (1 === jl ? (0 === a5Z && (a5g(), a5Z = 1e-4), 1 <= (a5Z += .002 * (bb.ln - lh)) && (a5a = 0, jl = 2, a5Z = 1), bb.dc = !0) : 2 ===
			jl ? ((a5a += (bb.ln - lh) / 1e3) > a3y[0].lm || 1 < a5a && 1 < a3y.length) && (jl = 3) : 3 === jl && ((a5Z -= .002 * (bb.ln - lh)) <= 0 && (a5Z = 0, a3y.shift(), jl = 0 < a3y.length ? 1 : 0), bb.dc = !0), lh = bb.ln))
	}, this.measureText = function(p0, a3k) {
		return tB.font = a3k, Math.floor(tB.measureText(p0).width)
	}, this.ii = function(a5j, a7) {
		this.yd(ac.a4U[a5j], a7, 1, 0 === a7 ? 3 : 7)
	}, this.yd = function(p0, a5k, a5l, lm) {
		var a1;
		p0.length && (a1 = (a1 = this.measureText(p0 + "00", a3k[1])) < a5c[a5k] ? a5c[a5k] : a1, a3y.push({
			p0: p0,
			width: a1,
			a5k: a5k,
			a5l: a5l,
			lm: lm
		}), 0 === jl) && (a5Z = 0, jl = 1, lh = bb.ln)
	}, this.tA = function() {
		0 !== jl && 0 !== a5Z && (a5Z < 1 ? (tB.globalAlpha = a5Z, a5m(), tB.globalAlpha = 1) : a5m())
	}
}

function cj() {
	var j7, canvas, wX, a5q, a5r, a5s, a5t, a5B, a5u, a5v, a5w, a5x, a4k = !1,
		a19 = (this.wq = !1, this.a1 = 0, new Array(2));

	function lH() {
		var a1 = aq.a1,
			kO = (a5B = !1, wW(wX, a1, j7), Math.floor(a1 / 2));
		1 === a5q ? (wX.fillStyle = b7.mp, wX.fillRect(kO, 0, kO, j7)) : -1 === a5q && (wX.fillStyle = b7.n3, wX.fillRect(0, 0, kO, j7)), wY(wX, a1, j7, 2);
		var kO = (kO = Math.floor(.25 * j7)) < 2 ? 2 : kO,
			a4t = (wX.fillStyle = b7.md, Math.floor((j7 - 4) * a5r[1] / a5s[1]));
		0 < a4t && wX.fillRect(2, j7 - 2 - a4t, kO, a4t), 0 < (a4t = Math.floor((j7 - 4) * a5r[0] / a5s[0])) && wX.fillRect(a1 - 2 - kO, j7 - 2 - a4t, kO, a4t);
		kO = (kO = Math.floor(j7 / 8)) < 2 ? 2 : kO, wa(wX, Math.floor(.4 * j7), 0, j7, kO, .5, !1), wa(wX, Math.floor(a1 - 1.4 * j7), 0, j7, kO, .5, !0), a4t = 1.1 * j7 / a19[0].width;
		wX.imageSmoothingEnabled = !0, wX.setTransform(a4t, 0, 0, a4t, (a1 - a4t * a19[0].width) / 2, -.05 * j7), wX.drawImage(a19[+a4k], 0, 0), wX.setTransform(1, 0, 0, 1, 0, 0)
	}

	function a5y() {
		a5w = bb.ja(), a5B = !0, a5u = a5q = 0, a5t = [], aq.wq = !1, aJ.yN(247), a5r[0] = a5r[1] = 0, aJ.a2V(673)
	}

	function wT() {
		return aN.a4N(aJ.a4J()) ? aN.eh - j7 - bY.gap : b8.a4N(aJ.a4M()) ? b8.wT() - j7 - bY.gap : at.j7 - j7 - bg.a37() * bY.gap
	}
	this.dV = function() {
		for (var a7 = 0; a7 < 2; a7++) a19[a7] = b6.canvas.x4(aX.get(3), 8 - a7, b7.nW), a19[a7] = b6.canvas.a1B(a19[a7])
	}, this.dU = function() {
		a5w = -140, a5v = 0, a5x = -1, this.wq = !1, a5B = a4k = !1, a5r = [a5q = a5u = 0, 0], a5s = [1, 1], a5t = [], this.resize()
	}, this.resize = function() {
		j7 = aN.j7, this.a1 = 4 * j7, (canvas = document.createElement("canvas")).width = this.a1, canvas.height = j7, wX = canvas.getContext("2d", {
			alpha: !0
		}), lH()
	}, this.lG = function() {
		a5B && lH()
	}, this.gm = function(ef, eh) {
		var ly;
		return !!this.wq && !(ef < at.a1 - this.a1 - bY.gap || eh < (ly = wT()) || ly + j7 < eh || (a9.gi || b4.gv.nx(ef > at.a1 - bY.gap - this.a1 / 2 ? 1 : 0), 0))
	}, this.iS = function() {
		if (0 < a5v) 0 === --a5v && a5y();
		else if (this.wq) 180 == --a5u && 3 * a5r[0] < a5s[0] ? a5y() : a5r[0] >= a5s[0] ? a4k ? bN.xu.yB() : bN.xu.yF() : a5r[1] >= a5s[1] ? a5v = 4 : a5u <= 0 && a5y();
		else if (function() {
				if (0 <= a5x) return 1;
				return
			}()) {
			a4k = ad.a61(), aJ.ye(250, L(93, [ac.a4U[a5x]]), 673, a5x, b7.mX, b7.mU, -1, !0), a5x = -1, aJ.a2V(257), aJ.a4j(a4k), this.wq = !0, a5B = !0, a5u = 360;
			for (var f0, dk = 0, a7 = ah.je - 1; 0 <= a7; a7--) aY.y9(ah.jg[a7]) && (dk += ac.gM[ah.jg[a7]]);
			a4k ? a5s[0] = Math.max(bH.dl(3 * dk, 4), 1) : a9.ie ? 9 === a9.jx && 8 === bc.k3[bd.ks()] ? a5s[0] = Math.max(dk, 1) : (f0 = bH.dl(100 * bd.yp(), a9.jN), f0 = bH.or(200 - 2 * f0, 50, 100), f0 = bH.dl(f0 * dk, 100), a5s[0] = Math.max(
				f0, 1)) : a5s[0] = Math.max(bH.dl(3 * dk, 5), 1), a5s[1] = Math.max(dk - a5s[0], 1)
		}
	}, this.yH = function() {
		this.wq && a5r[0] < a5s[0] && a5y()
	}, this.ot = function(player, a64) {
		var a7;
		if (this.wq) {
			for (a7 = a5t.length - 1; 0 <= a7; a7--)
				if (a5t[a7] === player) return;
			var a65 = L(a64 ? 94 : 95, [ac.a4U[player]]);
			aJ.ye(450, a65, 257, player, a64 ? b7.mn : b7.n0, b7.mU, -1, !0), a5t.push(player), a5B = !0, a65 = a9.jz ? a5s[0] : ac.gM[player], a64 ? a5r[0] += a65 : a5r[1] += a65, player === a9.eI && (a5q = a64 ? 1 : -1)
		}
	}, this.tA = function() {
		var eh;
		this.wq && (eh = wT(), tB.drawImage(canvas, at.a1 - this.a1 - bY.gap, eh))
	}, this.ou = function(player) {
		if (!a9.jz) {
			if (bb.ja() < a5w + 140) return !1;
			if (bb.ja() < 535) return !1
		}
		return 0 === a5u && !!b6.fu.gk(1) && !(!b6.fu.gl(player) || 10 <= jO[player] && !b6.fu.a1x(player, 9))
	}, this.o2 = function(player) {
		a5x = player
	}
}

function cC() {
	var a1, ef, a66, canvas, wX, wq, hu, a2M, a3k, a5B, a67 = 11 / 12;

	function a69() {
		var a5I = Math.floor(hu * (a1 - 2 * a66)),
			a6C = 1 + Math.floor(.0625 * aN.j7),
			a6D = 1 + Math.floor(.3 * aN.j7),
			a6E = Math.floor(.55 * aN.j7);
		wX.clearRect(0, 0, a1, aN.j7), wX.fillStyle = b7.mT, wX.fillRect(0, 0, a66, aN.j7), wX.fillRect(a66 + a5I, 0, a1 - a66 - a5I, aN.j7), wX.fillStyle = hu < 1 / 3 ? "rgba(" + Math.floor(3 * hu * 130) + ",130,0,0.85)" : hu < 2 / 3 ? "rgba(130," +
			(130 - Math.floor(3 * (hu - 1 / 3) * 130)) + ",0,0.85)" : "rgba(130,0," + Math.floor(3 * (hu - 2 / 3) * 130) + ",0.85)", wX.fillRect(a66, 0, a5I, aN.j7), wX.fillStyle = b7.mX, wX.fillRect(0, 0, a1, 1), wX.fillRect(0, aN.j7 - 1, a1, 1), wX
			.fillRect(0, 0, 1, aN.j7), wX.fillRect(a66, 0, 1, aN.j7), wX.fillRect(a66 + a5I, 0, 1, aN.j7), wX.fillRect(a1 - a66, 0, 1, aN.j7), wX.fillRect(a1 - 1, 0, 1, aN.j7), wX.fillRect(Math.floor(.25 * aN.j7) + a6D, Math.floor((aN.j7 - a6C) / 2),
				aN.j7 - 2 * a6D, a6C), wX.fillRect(Math.floor(a1 - 1.25 * aN.j7) + a6D, Math.floor((aN.j7 - a6C) / 2), aN.j7 - 2 * a6D - a6D % 2, a6C), wX.fillRect(Math.floor(a1 - 1.25 * aN.j7) + Math.floor((aN.j7 - a6C) / 2), a6D, a6C, aN.j7 - 2 *
				a6D - a6D % 2), a2M = b6.fu.ht(a9.eI, aN.h0()), wX.fillText(b6.z3.xZ(a2M) + " (" + b6.z3.a2F(100 * hu, +(hu < .1)) + ")", Math.floor(.5 * a1), a6E)
	}
	this.setAbsolutePercentage = function(newPercentage) {
		hu = newPercentage;
	};
	__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage;
	__fx.keybindFunctions.setRelative = (arg1) => aN.a0O(arg1);

	function a6J(a0l) {
		return !(1 < a0l && 1 === hu || (1 < a0l && a0l * hu - hu < 1 / 1024 ? a0l = (hu + 1 / 1024) / hu : a0l < 1 && hu - a0l * hu < 1 / 1024 && (a0l = (hu - 1 / 1024) / hu), hu = bH.or(hu * a0l, 1 / 1024, 1), a69(), 0))
	}

	function a6K(kj) {
		return hu !== (hu = bH.or((kj - ef - a66) / (a1 - 2 * a66), 1 / 1024, 1)) && (a69(), !0)
	}
	this.eh = 0, this.gn = !1, this.dU = function() {
		wq = !a9.gu && !a9.gi, a5B = !1, hu = .5, a2M = 0, this.gn = !1, this.resize()
	}, this.resize = function() {
		u.v.sU() && at.a1 < .8 * at.j7 ? (this.j7 = Math.floor(.066 * at.pL), a1 = at.a1 - 4 * bY.gap - this.j7) : (a1 = Math.floor((u.v.sU() ? .65 : .389) * at.pL), a1 += 12 - a1 % 12, this.j7 = Math.floor(a1 / 12)), a66 = Math.floor(3 * this
			.j7 / 2), a3k = b6.pJ.rF(1, Math.floor(.5 * this.j7)), (canvas = document.createElement("canvas")).width = a1, canvas.height = this.j7, (wX = canvas.getContext("2d", {
			alpha: !0
		})).font = a3k, b6.pJ.textBaseline(wX, 1), b6.pJ.textAlign(wX, 1), this.a68(), a69()
	}, this.a68 = function() {
		ef = u.v.sU() && at.a1 < .8 * at.j7 ? this.j7 + 3 * bY.gap : Math.floor((at.a1 - a1) / 2), this.eh = at.j7 - this.j7 - bg.a37() * bY.gap
	}, this.lG = function() {
		a5B && (a5B = !1, a69())
	}, this.wq = function() {
		return !(!wq || aI.gj && ef < Math.floor(bY.gap + 5.5 * this.j7))
	}, this.a4N = function(a6F) {
		return !!this.wq() && ef + a1 > at.a1 - a6F - bY.gap
	}, this.a2T = function() {
		wq = !a9.gi
	}, this.a5y = function() {
		wq = !1
	}, this.h0 = function() {
		return bH.or(Math.floor(1024 * hu + .5) - 1, 0, 1023)
	}, this.a0L = function(kj, kk) {
		return this.wq() && ef < kj && kj < ef + a1 && kk > this.eh
	}, this.gm = function(kj, kk) {
		return !!this.wq() && !!aN.a0L(kj, kk) && (aO.m2 = !1, function(r6, kj, kk) {
			if (function(kj, kk) {
					return ef < kj && kj < ef + a66 && kk > aN.eh
				}(kj, kk)) return a6J(a67);
			if (function(kj, kk) {
					return ef + a1 - a66 < kj && kj < ef + a1 && kk > aN.eh
				}(kj, kk)) return a6J(1 / a67);
			return r6.gn = !0, a6K(kj)
		}(this, kj, kk) && (bb.dc = !0), !0)
	}, this.a0O = function(m9) {
		0 !== a9.yG && this.wq() && a6J(m9) && (bb.dc = !0)
	}, this.zu = function(deltaY) {
		var m9;
		return !(0 === deltaY || !this.wq()) && a6J(m9 = 0 < deltaY ? (m9 = 400 / (400 + deltaY)) < a67 ? a67 : m9 : 1 / a67 < (m9 = (400 - deltaY) / 400) ? 1 / a67 : m9)
	}, this.zr = function(kj) {
		return !!this.gn && a6K(kj)
	}, this.a0H = function() {
		this.gn = !1
	}, this.iS = function() {
		this.wq() && a2M !== b6.fu.ht(a9.eI, this.h0()) && (a5B = !0)
	}, this.tA = function() {
		this.wq() && tB.drawImage(canvas, ef, this.eh)
	}
}

function ct() {
	var canvas, wX, a6L, font, a6M = 0,
		a6N = !1,
		a6O = [10, 5, 3, 2, 1.5, 1, .75, .5, .25],
		a6P = 5;

	function a6V() {
		if (a6N) {
			var a7, eY = a6O.length,
				a6E = Math.floor(.5 * a6L.j7),
				j7 = eY * a6E,
				ef = Math.floor(Math.floor(a6L.ef) + .3 * a6L.a1 - .5),
				eh = Math.floor(Math.floor(a6L.eh) - j7),
				a1 = Math.floor(.4 * a6L.a1 + 2.5);
			for (tB.fillStyle = b7.mT, tB.fillRect(ef, eh, a1, j7), tB.fillStyle = b7.mu, tB.fillRect(ef, eh + a6P * a6E, a1, a6E), tB.fillStyle = b7.mX, tB.fillRect(ef, eh, 2, j7), tB.fillRect(ef, eh, a1, 2), tB.fillRect(ef + a1 - 2, eh, 2, j7),
				a7 = 1; a7 < eY; a7++) tB.fillRect(ef, eh + a7 * a6E, a1, 2);
			for (tB.fillStyle = b7.mX, b6.pJ.textAlign(tB, 1), b6.pJ.textBaseline(tB, 1), tB.font = b6.pJ.rF(0, .6 * a6E), ef += .5 * a1, a7 = 0; a7 < eY; a7++) tB.fillText(a6d(a7), ef, eh + (a7 + .6) * a6E)
		}
		tB.drawImage(canvas, Math.floor(a6L.ef), Math.floor(a6L.eh))
	}

	function lH(r6) {
		var ef, lx, ly, a6E;
		wX.clearRect(0, 0, Math.floor(a6L.a1), Math.floor(a6L.j7)), wX.fillStyle = b7.mT, wX.fillRect(0, 0, Math.floor(a6L.a1), Math.floor(a6L.j7)), a9.m0 && (wX.fillStyle = b7.mu, wX.fillRect(0, 0, Math.floor(.3 * a6L.a1), Math.floor(a6L.j7))), wX
			.fillStyle = b7.mX, wX.fillText("Hide UI", .15 * a6L.a1, .5 * a6L.j7), wX.fillRect(Math.floor(.3 * a6L.a1 - .5), 0, 2, Math.floor(a6L.j7)), ef = .5 * a6L.a1, wX.fillText("Replay Speed", ef, .31 * a6L.j7), wX.fillText(a6d(a6P), ef, .69 *
				a6L.j7), wX.fillRect(Math.floor(.7 * a6L.a1 - .5), 0, 2, Math.floor(a6L.j7)), r6.a2z ? (ef = Math.floor(.02 * a6L.a1), r6 = Math.floor(.025 * a6L.a1), lx = Math.floor(.85 * a6L.a1 - ef - .5 * r6), ly = Math.floor(.25 * a6L.j7), a6E =
				Math.floor(a6L.j7) - 2 * ly, wX.fillRect(lx, ly, ef, a6E), wX.fillRect(lx + ef + r6, ly, ef, a6E)) : function() {
				var a1 = Math.floor(.46 * a6L.j7),
					j7 = Math.floor(.23 * a6L.j7),
					ef = Math.floor(.85 * a6L.a1 - .5 * a1 + a1 / 12),
					eh = Math.floor(.5 * a6L.j7 - j7);
				wX.beginPath(), wX.moveTo(ef, eh), wX.lineTo(ef + a1, eh + j7), wX.lineTo(ef, eh + (j7 << 1)), wX.fill()
			}(), wX.fillRect(0, 0, Math.floor(a6L.a1), 2), wX.fillRect(0, 0, 2, Math.floor(a6L.j7)), wX.fillRect(0, Math.floor(a6L.j7) - 2, Math.floor(a6L.a1), 2), wX.fillRect(Math.floor(a6L.a1 - 2), 0, 2, Math.floor(a6L.j7))
	}

	function a6d(a7) {
		return 5 === a7 ? "Normal" : "" + a6O[a7]
	}
	this.a2z = !1, this.dU = function() {
		a9.gi && (a6P = 5, this.a2z = !1, a6N = !1, a6L = new pw([.3, .3 / 6], [.5, 1]), this.resize())
	}, this.a6Q = function() {
		return a6O[a6P]
	}, this.wT = function() {
		return a6L.eh
	}, this.a4N = function(a6F) {
		return !!a9.gi && a6L.ef + a6L.a1 > at.a1 - a6F - bY.gap
	}, this.resize = function() {
		a9.gi && (a6L.resize(), a6L.eh -= (bg.a37() - 1) * bY.gap, font = b6.pJ.rF(0, .3 * a6L.j7), (canvas = document.createElement("canvas")).width = Math.floor(a6L.a1), canvas.height = Math.floor(a6L.j7), (wX = canvas.getContext("2d", {
			alpha: !0
		})).font = font, b6.pJ.textAlign(wX, 1), b6.pJ.textBaseline(wX, 1), lH(this))
	}, this.a0R = function(a6R) {
		0 === a9.yG || n.wq() || a6R !== a9.m0 && (a9.m0 = a6R, bd.resize(), bb.dc = !0, a9.gi) && (a6M = bb.ln + 2e3, lH(this))
	}, this.gm = function(ef, eh) {
		if (!a9.gi) return !1;
		if (ef < a6L.ef || eh < a6L.eh || ef > a6L.ef + a6L.a1) return a6N && function(r6, ef, eh) {
			var eY = a6O.length,
				a6E = Math.floor(.5 * a6L.j7),
				j7 = eY * a6E,
				lx = Math.floor(Math.floor(a6L.ef) + .3 * a6L.a1 - .5),
				j7 = Math.floor(Math.floor(a6L.eh) - j7),
				a1 = Math.floor(.4 * a6L.a1 + 2.5);
			return a6N = !1, bb.dc = !0, ef < lx || lx + a1 < ef || eh < j7 || (a6P = a6U(0, Math.floor((eh - j7) / a6E), eY - 1), lH(r6)), !0
		}(this, ef, eh);
		if ((ef -= a6L.ef) < .3 * a6L.a1) a6N = !1, this.a0R(!a9.m0);
		else {
			if (ef < .7 * a6L.a1) return a6N = !a6N, bb.dc = !0;
			this.a0T(!1)
		}
		return !0
	}, this.a0T = function(a6T) {
		2 === a9.yG ? (this.a0R(!1), n.o(3)) : (a6N = !1, this.a2z = !this.a2z, this.a2z ? (aI.gj && aI.a0S(), u.v.setState(1)) : a6T || aI.a3q(), bb.dc = !0, lH(this))
	}, this.a0U = function() {
		this.a2z = !1, aI.a3q(), bb.dc = !0, lH(this)
	}, this.a0A = function(ef, eh) {
		return !!a9.m0 && (0 <= aI.gm(ef, eh) || (a9.gi ? ((bb.ln > a6M || !this.gm(ef, eh)) && aO.gm(ef, eh), bb.dc = !0, a6M = bb.ln + 2e3) : aO.gm(ef, eh)), !0)
	}, this.iS = function() {
		a9.gi && a9.m0 && bb.ln > a6M - 1e3 && bb.ln < a6M && (bb.dc = !0)
	}, this.yO = function() {
		a9.gi && (this.a2z = !1, bb.dc = !0, lH(this))
	}, this.tA = function() {
		if (a9.gi) {
			if (a9.m0) {
				if (bb.ln > a6M) return;
				if (bb.ln > a6M - 1e3) return tB.globalAlpha = a6U(0, (1e3 - (bb.ln - (a6M - 1e3))) / 1e3, 1), a6V(), void(tB.globalAlpha = 1)
			}
			a6V()
		}
	}
}

function cD() {
	var a6e, a6f, a1, ef, eh, a6g, a6h;
	this.dU = function() {
		a6e = new Array(2), a6f = new Array(2), this.m2 = !1, a6h = a6g = hx = hv = 0, hw = 1, this.resize()
	}, this.resize = function() {
		a1 = (a1 = Math.floor((u.v.sU() ? .072 : .0502) * at.pL)) < 8 ? 8 : a1;
		for (var a7 = 1; 0 <= a7; a7--) a6e[a7] = document.createElement("canvas"), a6e[a7].width = a1, a6e[a7].height = a1, a6f[a7] = a6e[a7].getContext("2d", {
			alpha: !0
		});
		this.a68(),
			function() {
				for (var a6w = Math.floor(1 + a1 / 20), a7 = 1; 0 <= a7; a7--) a6f[a7].clearRect(0, 0, a1, a1), a6f[a7].fillStyle = b7.mQ, a6f[a7].beginPath(), a6f[a7].arc(a1 / 2, a1 / 2, a1 / 2 - a6w, 0, 2 * Math.PI), a6f[a7].fill(), a6f[a7]
					.lineWidth = a6w, a6f[a7].fillStyle = b7.mX, a6f[a7].strokeStyle = b7.mX, a6f[a7].beginPath(), a6f[a7].arc(a1 / 2, a1 / 2, a1 / 2 - a6w, 0, 2 * Math.PI), a6f[a7].stroke(), wa(a6f[a7], 0, 0, a1, a6w, .3, 0 === a7)
			}()
	}, this.wS = function() {
		return -hv / hw
	}, this.wT = function() {
		return -hx / hw
	}, this.mC = function(a6l, hd) {
		hv = hw * a6l - hd
	}, this.mD = function(a6m, he) {
		hx = hw * a6m - he
	}, this.gm = function(a6k, a4O) {
		return a9.m0 || ! function(a6k, a4O) {
			return Math.pow(a6k - (ef + a1 / 2), 2) + Math.pow(a4O - (eh + a1 / 2), 2) < a1 * a1 / 4 || Math.pow(a6k - (ef + a1 / 2), 2) + Math.pow(a4O - (eh + 2 * a1), 2) < a1 * a1 / 4
		}(a6k, a4O) || bf.dp.data[8].value ? (aD.mF() && (this.m2 = !0, a6g = a6k, a6h = a4O), !1) : a4O < eh + 1.25 * a1 ? this.zu(Math.floor(at.a1 / 2), Math.floor(at.j7 / 2), -200) : this.zu(Math.floor(at.a1 / 2), Math.floor(at.j7 / 2),
			200)
	}, this.zr = function(a6k, a4O) {
		var a6n, a6o, hg, hj;
		return !aD.mF() || (a6n = hv, a6o = hx, hv += hg = a6g - a6k, hx += hj = a6h - a4O, ab.zr(hg, hj), this.a6p(), a6g = a6k, a6h = a4O, a6n !== hv) || a6o !== hx
	}, this.zu = function(kj, kk, deltaY) {
		var m9;
		if (aD.mF()) {
			if (0 < deltaY) m9 = (m9 = 500 / (500 + deltaY)) < .5 ? .5 : m9;
			else {
				if (!(deltaY < 0)) return !1;
				m9 = 2 < (m9 = (500 - deltaY) / 500) ? 2 : m9
			}
			this.a6q(kj, kk, m9), bb.dc = !0
		}
		return !0
	}, this.a6q = function(ef, eh, eC) {
		var a0l;
		eC = a0l = (a0l = 1024 < (a0l = eC) * hw ? 1024 / hw : a0l) * hw < .125 ? .125 / hw : a0l, ab.zoom(eC, ef, eh),
			function(a0l, kj, kk) {
				hw *= a0l, hv = (hv + kj) * a0l - kj, hx = (hx + kk) * a0l - kk, aO.a6p()
			}(eC, ef, eh)
	}, this.a6p = function() {
		var a6t = at.a1 / 16,
			hN = 0,
			a6u = at.j7 / 16,
			hO = 0;
		hv < -at.a1 + a6t && (hN = -at.a1 + a6t - hv), hv > hw * bO.ej - a6t && (hN = hw * bO.ej - a6t - hv), hx < -at.j7 + a6u && (hO = -at.j7 + a6u - hx), hx > hw * bO.ek - a6u && (hO = hw * bO.ek - a6u - hx), hv += hN, hx += hO, bW.mE(), ab
			.a6v(hN, hO)
	}, this.a68 = function() {
		ef = at.a1 - a1 - bY.gap, eh = Math.floor(at.j7 / 2 - 1.25 * a1)
	}, this.tA = function() {
		bf.dp.data[8].value || (tB.drawImage(a6e[0], ef, eh), tB.drawImage(a6e[1], ef, Math.floor(eh + 3 * a1 / 2)))
	}
}

function cE() {
	var g, a6x, a6y, a6z, gap, a70, a71, a72, a73, a74, a3k, a75, gd, a76, a5I, a77, a78, a79;

	function a7D() {
		a6z = Math.floor(.2 * (u.v.sU() ? .07 : .035) * at.pL), a6z = a4L(u.v.sU() ? 3 : 1, a6z);
		var a7G = at.a1 / (g.length + gap);
		a6z = a6z < a7G ? a7G : a6z, a5I = Math.floor((1 - gap) * a6z), a6x = 0, a7H()
	}

	function a7H() {
		a6x = (a6x = a6x < -20 ? -20 : a6x) > (g.length - 15) * a6z ? (g.length - 15) * a6z : a6x, a71 = Math.floor(a6x / a6z), a72 = (a72 = a71 + Math.floor(at.a1 / a6z)) > g.length - 1 ? g.length - 1 : a72, a71 = (a71 = a72 < a71 ? a72 : a71) < 0 ?
			0 : a71;
		var kO = a72;
		a70 = a6y / g[kO];
		for (var a7 = a72 - 1; a71 <= a7; a7--) g[a7] > g[kO] && (kO = a7, a70 = a6y / Math.pow(g[a7], a76))
	}

	function a7K(ef) {
		ef = Math.floor((a6x + at.a1 - ef - gap * a6z) / a6z);
		return (ef = ef < -1 ? -1 : -1 === ef ? 0 : ef > g.length - 1 ? -1 : ef) !== a73 && (a73 = ef, -1 === a77 && 0 === a73 && aP.a7A && (a77 = setInterval(a7L, 100)), 1)
	}

	function a7M(a7) {
		var a58 = Math.floor(a70 * Math.pow(g[a7], a76));
		tB.fillRect(a6x + at.a1 - (a7 + 1) * a6z, at.j7 - a58, a5I, a58)
	}

	function a7L() {
		var g6;
		0 !== (a73 = 8 === aW.zU() ? -1 : a73) ? (a78 = (new Date).getTime(), clearInterval(a77), a77 = -1) : (g6 = g[1] / 864e3, -1 !== a78 && (g6 += ((new Date).getTime() - a78) * g[1] / 864e5, a78 = -1), 0 < g6 && (g[0] += Math.floor(g6), bb
			.dc = !0))
	}
	this.a7A = !1, this.dU = function() {
		a78 = a77 = -1, a73 = -(a76 = 1), this.a7B = !1, gd = 0, a75 = new Date, a6x = 0, gap = .3, (a79 = []).push({
			g1: "Plateau A",
			eY: 0,
			e: 57
		}), a79.push({
			g1: "Max A",
			eY: 1,
			e: 1
		}), a79.push({
			g1: "Black Friday",
			eY: 15,
			e: 15
		}), a79.push({
			g1: "Max B",
			eY: 19,
			e: 19
		}), a79.push({
			g1: "Max C",
			eY: 44,
			e: 44
		}), a79.push({
			g1: "First Android Version",
			eY: 58,
			e: 58
		}), a79.push({
			g1: "Max D",
			eY: 67,
			e: 67
		}), a79.push({
			g1: "The iFrame Explosion",
			eY: 98,
			e: 99
		}), a79.push({
			g1: "The 155-Day Uptrend",
			eY: 58,
			e: 213
		}), a79.push({
			g1: "Max E",
			eY: 213,
			e: 213
		}), a79.push({
			g1: "Plateau B",
			eY: 214,
			e: 259
		}), a79.push({
			g1: "Turbulent Times",
			eY: 260,
			e: 344
		}), a79.push({
			g1: "Max F",
			eY: 262,
			e: 262
		}), a79.push({
			g1: "Max G",
			eY: 282,
			e: 282
		}), a79.push({
			g1: "Max H",
			eY: 333,
			e: 333
		}), a79.push({
			g1: "The 19-Day Downtrend",
			eY: 283,
			e: 301
		}), a79.push({
			g1: "Plateau C",
			eY: 345,
			e: 385
		}), a79.push({
			g1: "The Alliance Ascent",
			eY: 386,
			e: 395
		}), a79.push({
			g1: "Max I",
			eY: 395,
			e: 395
		}), a79.push({
			g1: "First iOS Version",
			eY: 411,
			e: 411
		}), a79.push({
			g1: "Plateau D",
			eY: 396,
			e: 453
		}), a79.push({
			g1: "The TikTok Revolution",
			eY: 454,
			e: 470
		}), a79.push({
			g1: "Max J",
			eY: 456,
			e: 456
		}), a79.push({
			g1: "Max K",
			eY: 472,
			e: 472
		}), a79.push({
			g1: "Max L",
			eY: 478,
			e: 478
		}), a79.push({
			g1: "YT Drew",
			eY: 471,
			e: 485
		}), a79.push({
			g1: "Plateau E",
			eY: 485,
			e: 600
		}), a79.push({
			g1: "Uptrend A",
			eY: 600,
			e: 613
		}), a79.push({
			g1: "Max M",
			eY: 613,
			e: 613
		}), a79.push({
			g1: "Downtrend A",
			eY: 614,
			e: 635
		}), a79.push({
			g1: "Plateau F",
			eY: 636,
			e: 737
		}), a79.push({
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
		a6y = Math.floor(.15 * at.j7), a74 = (a74 = Math.floor((u.v.sU() ? .018 : .0137) * at.pL)) < 2 ? 2 : a74, a3k = b6.pJ.rF(1, a74), a7D()
	}, this.a7E = function(a7F) {
		var a7;
		for (this.a7A = !0, a7 = 0; a7 < a7F.length; a7++) g.unshift(a7F[a7]);
		a7D(), bb.dc = !0
	}, this.a7I = function() {
		a7H()
	}, this.zr = function(ef, eh) {
		eh > at.j7 - .6 * a6y ? this.a7B ? ef !== gd && (a6x += ef - gd, gd = ef, a7H(), a7K(ef), this.a7B = -1 !== a73, bb.dc = !0) : a7K(ef) && (bb.dc = !0) : this.qK()
	}, this.qK = function() {
		-1 !== a73 && (this.a7B = !1, a73 = -1, bb.dc = !0)
	}, this.zu = function(ef, deltaY) {
		-1 !== a73 && (a6x += Math.floor(deltaY), a7H(), a7K(ef), bb.dc = !0)
	}, this.gm = function(ef, eh) {
		this.zr(ef, eh), -1 !== a73 && (gd = ef, this.a7B = !0)
	}, this.a0G = function() {
		-1 !== a73 && (this.a7B = !1)
	}, this.tA = function() {
		tB.fillStyle = b7.ma;
		for (var a7O, month, dk, rl, a7R, a7S, ly, a7T, a7U, a7 = a72; a71 <= a7; a7--) a7M(a7);
		this.a7A && 0 === a71 && (tB.fillStyle = b7.n3, a7M(0)), -1 !== a73 && (tB.fillStyle = b7.mZ, a7M(a73)), -1 !== a73 && (tB.font = a3k, b6.pJ.textBaseline(tB, 2), (dk = new Date).setTime(a75.getTime() - 1e3 * a73 * 60 * 60 * 24), month =
			"month", a7O = "day", "undefined" != typeof Intl && (month = new Intl.DateTimeFormat("en-US", {
				month: "long"
			}).format(dk), a7O = new Intl.DateTimeFormat("en-US", {
				weekday: "long"
			}).format(dk)), a7O = a7O + ", " + dk.getUTCDate() + " " + month + " " + dk.getFullYear(), month = 1 === g[a73] ? L(96) : L(97), month = b6.z3.xZ(g[a73]) + " " + month, dk = Math.floor(tB.measureText(a7O).width), rl = Math.floor(
				tB.measureText(month).width), a7R = Math.floor(.5 * (dk + a74)), a7S = (a7S = a6x + at.a1 - (a73 + 1) * a6z) < a7R ? a7R : a7S > at.a1 - a7R ? at.a1 - a7R : a7S, ly = at.j7 - Math.floor(a70 * Math.pow(g[a73], a76)), a7T = Math
			.floor(1.1 * a74), a7U = ly > at.j7 - a7T ? at.j7 - a7T : ly, tB.fillStyle = b7.mU, tB.fillRect(at.a1 - rl - a74, a7U - a7T, rl + a74, a7T), tB.fillRect(a7S - a7R, at.j7 - a7T, dk + a74, a7T), tB.fillStyle = b7.mX, b6.pJ
			.textAlign(tB, 2), tB.fillText(month, Math.floor(at.a1 - .5 * a74), a7U),
			function(ly, a7T) {
				for (var rk, kQ = -1, e0 = g.length - a73 - 1, a7 = a79.length - 1; 0 <= a7; a7--) e0 >= a79[a7].eY && e0 <= a79[a7].e && (-1 === kQ || a79[a7].e - a79[a7].eY < a79[kQ].e - a79[kQ].eY) && (kQ = a7); - 1 !== kQ && (rk = Math
					.floor(tB.measureText(a79[kQ].g1).width), tB.fillStyle = b7.mU, tB.fillRect(at.a1 - rk - a74, ly, rk + a74, a7T), tB.fillStyle = b7.mX, tB.fillText(a79[kQ].g1, Math.floor(at.a1 - .5 * a74), ly + a7T))
			}(a7U - 2 * a7T, a7T), b6.pJ.textAlign(tB, 1), tB.fillText(a7O, a7S, at.j7), tB.strokeStyle = b7.mb, tB.lineWidth = 1, tB.beginPath(), tB.moveTo(0, ly), tB.lineTo(at.a1, ly), tB.closePath(), tB.stroke())
	}
}

function cF() {
	var a3k, a1, eh, a7W, a7X, canvas, wX, a5B, a1l, a7Y, a7Z, a7a, a7b;
	this.ef = 0, this.j7 = 0, this.dU = function() {
		a7X = a9.a2b, a7Z = "rgba(0,100,0,0.8)", a7a = "rgba(150,0,0,0.8)", a5B = !(a7Y = !0), a1l = ac.ga[a9.eI], this.resize()
	}, this.resize = function() {
		a1 = Math.floor((u.v.sU() ? .305 : .24) * at.pL), this.j7 = Math.floor(.5 + .13 * a1), a1 = Math.floor(6 * this.j7), a3k = b6.pJ.rF(1, Math.floor(.8 * this.j7)), a7b = Math.floor(.5 * this.j7), bO.up.font = a3k, eh = bY.gap, a7W = Math
			.floor(1 + .13 * this.j7), (canvas = document.createElement("canvas")).width = a1, canvas.height = this.j7, (wX = canvas.getContext("2d", {
				alpha: !0
			})).font = a3k, b6.pJ.textBaseline(wX, 1), b6.pJ.textAlign(wX, 1), this.a7c()
	}, this.a5Y = function() {
		return u.v.sU() && at.a1 < 1.2 * at.j7
	}, this.a68 = function() {
		this.a5Y() ? this.ef = at.a1 - a1 - bY.gap : this.ef = Math.floor(aR.a7d() + (at.a1 - aR.a7d() - aS.a1 - a1) / 2 - .5 * bY.gap)
	}, this.lG = function() {
		a5B && (a5B = !1, this.a7c())
	}, this.a7c = function() {
		wX.clearRect(0, 0, a1, this.j7), wX.fillStyle = a7Y ? a7Z : a7a, wX.fillRect(0, 0, a1, this.j7), wX.fillStyle = b7.mZ, this.a7e(), this.a7f(), wX.fillStyle = ac.ga[a9.eI] >= aa.jJ(a9.eI) ? b7.n0 : b7.mX, wX.fillText(b6.z3.xZ(a1l), Math
			.floor(a1 / 2), a7b), wX.fillStyle = b7.mX, wX.fillRect(0, 0, a1, 1), wX.fillRect(0, 0, 1, this.j7), wX.fillRect(0, this.j7 - 1, a1, 1), wX.fillRect(a1 - 1, 0, 1, this.j7)
	}, this.a7e = function() {
		var et = bb.ja() % 100,
			et = (et = 9 - bH.dl(et -= et % 10, 10), Math.floor(et * (this.j7 - a7W) / 9));
		wX.fillRect(0, et, a7W, this.j7 - et), wX.fillRect(a1 - a7W, et, a7W, this.j7 - et)
	}, this.a7f = function() {
		wX.fillRect(a7W, this.j7 - a7W, Math.floor((a1 - 2 * a7W) * ac.ga[a9.eI] / a7X), a7W)
	}, this.iS = function() {
		var g6 = a9.eI;
		b6.fu.gl(g6) && (g6 = ac.ga[g6] - ac.a1k[g6], a1l !== g6 ? (a7X = a4L(g6, a7X), a7Y = a1l < g6 && 10 <= g6, a1l = g6, a5B = !0) : bb.ja() % 10 == 9 && (a5B = !0))
	}, this.tA = function() {
		0 === ac.lU[a9.eI] || a9.gu || 2 === ac.a1e[a9.eI] || tB.drawImage(canvas, this.ef, eh)
	}
}

function cG() {
	var a7g, a7h, a7i, a7j, a7k, a7l, a7m, a7n, a7o, a7p, a7q, a7r, a7s, a7t, a7u, a7v, a7w, a7x, a7y, a7z, a80, a81, position, a82, a83, a84, a85, a86 = 1,
		a87 = 1,
		a88 = "";
	var leaderboardHasChanged = true;
	this.playerPos = a9.eI;
	__fx.leaderboardFilter.setUpdateFlag = () => leaderboardHasChanged = true;

	function updateFilteredLb() {
		if (!leaderboardHasChanged) return;
		__fx.leaderboardFilter.filteredLeaderboard = __fx.leaderboardFilter.playersToInclude
			.map(id => jO[id]).sort((a, b) => a - b);
		leaderboardHasChanged = false;
		this.playerPos = __fx.leaderboardFilter.filteredLeaderboard.indexOf(jO[a9.eI]);
	}

	function a8A() {
		a7m.clearRect(0, 0, a7g, a5o),
			a7m.fillStyle = b7.nG,
			a7m.fillRect(0, 0, a7g, a7r),
			a7m.fillStyle = b7.mT,
			a7m.fillRect(0, a7r, a7g, a5o - a7r);
		if (__fx.leaderboardFilter.enabled) updateFilteredLb();
		var playerPos = (__fx.leaderboardFilter.enabled ?
			this.playerPos :
			jO[a9.eI]
		);
		if (__fx.leaderboardFilter.hoveringOverTabs) a81 = -1;
		if (__fx.leaderboardFilter.enabled && a81 >= __fx.leaderboardFilter.filteredLeaderboard.length) a81 = -1;
		playerPos >= position && a8C(playerPos - position, b7.mu),
			0 !== jO[a9.eI] && 0 === position && a8C(0, b7.nL),
			-1 !== a81 && a8C(a81, b7.mY),
			a7m.fillStyle = b7.mT,
			//console.log("drawing", a81),
			a7m.clearRect(0, a5o - __fx.leaderboardFilter.tabBarOffset, a7g, __fx.leaderboardFilter.tabBarOffset);
		a7m.fillRect(0, a5o - __fx.leaderboardFilter.tabBarOffset, a7g, __fx.leaderboardFilter.tabBarOffset);
		a7m.fillStyle = b7.mX,
			a7m.fillRect(0, a7r, a7g, 1),
			a7m.fillRect(0, a5o - __fx.leaderboardFilter.tabBarOffset, a7g, 1),
			__fx.leaderboardFilter.drawTabs(a7m, a7g, a5o - __fx.leaderboardFilter.tabBarOffset, b7.mu),
			a7m.fillRect(0, 0, a7g, bY.xI),
			a7m.fillRect(0, 0, bY.xI, a5o),
			a7m.fillRect(a7g - bY.xI, 0, bY.xI, a5o),
			a7m.fillRect(0, a5o - bY.xI, a7g, bY.xI), a7m.font = a7h, b6.pJ.textBaseline(a7m, 1), b6.pJ.textAlign(a7m, 1), a7m.fillText(a88, Math.floor((a7g + a7r - 22) / 2), Math.floor(a7p + a7i / 2));
		__fx.playerList.drawButton(a7m, 12, 12, a7r - 22);
		var er, g7 = playerPos < position + a7k - 1 ? 1 : 2;

		if (__fx.leaderboardFilter.enabled) {
			let result = __fx.leaderboardFilter.filteredLeaderboard;
			if (position !== 0 && position >= result.length - a7k)
				position = (result.length > a7k ? result.length : a7k) - a7k;
			//if (position >= result.length) position = result.length - 1;
			for (a7m.font = a7j, b6.pJ.textAlign(a7m, 0), er = a7k - g7; 0 <= er; er--) {
				const pos = result[er + position];
				if (pos !== undefined)
					a8D(kv[pos]), a8E(er, pos, kv[pos]);
			}
			for (b6.pJ.textAlign(a7m, 2), er = a7k - g7; 0 <= er; er--) {
				const pos = result[er + position];
				if (pos !== undefined)
					a8D(kv[pos]), a8F(er, kv[pos]);
			}
		} else {
			for (a7m.font = a7j, b6.pJ.textAlign(a7m, 0), er = a7k - g7; 0 <= er; er--)
				a8D(kv[er + position]), a8E(er, er + position, kv[er + position]);
			for (b6.pJ.textAlign(a7m, 2), er = a7k - g7; 0 <= er; er--)
				a8D(kv[er + position]), a8F(er, kv[er + position]);
		}
		2 == g7 && (a8D(a9.eI), b6.pJ.textAlign(a7m, 0), a8E(a7k - 1, jO[a9.eI], a9.eI), b6.pJ.textAlign(a7m, 2), a8F(a7k - 1, a9.eI)), 0 === position && (g7 = .7 * a7s / aX.get(4).height, a7m.setTransform(g7, 0, 0, g7, Math.floor(a7t + .58 * a7s +
			.5 * g7 * aX.get(4).width), Math.floor(a7p + a7i + .4 * a7s)), a7m.imageSmoothingEnabled = !0, a7m.drawImage(aX.get(4), -Math.floor(aX.get(4).width / 2), -Math.floor(aX.get(4).height / 2)), a7m.setTransform(1, 0, 0, 1, 0, 0))
	}

	function a8D(player) {
		a9.ie && (a7m.fillStyle = bc.a8H[bc.k3[bc.eW[player]]])
	}

	function a8C(a7, a8I) {
		a7m.fillStyle = a8I, a7 = a7k - 1 < a7 ? a7k - 1 : a7;
		a8I = Math.floor((a7 === a7k - 1 ? 2 : 0 === a7 ? 1.15 : 1) * a7s), a8I = a7 === a7k - 2 ? Math.floor(a7r + 9.15 * a7s) - Math.floor(a7r + 8.15 * a7s) : a8I;
		a7m.fillRect(0, Math.floor(a7r + (a7 + (0 === a7 ? 0 : .15)) * a7s), a7g, a8I)
	}

	function a8E(a8K, qi, a7) {
		a7m.fillText(a7x[qi], a7t, Math.floor(a7p + a7i + (a8K + .5) * a7s)), 1 === ac.a1e[a7] && (a7m.font = "italic " + a7j);
		qi = Math.floor(a7p + a7i + (a8K + .5) * a7s);
		a7m.fillText(ac.a4U[a7], a7u, qi), 0 !== ac.a1e[a7] && (a7m.font = a7j), a7 < a9.jd && 2 !== ac.a1e[a7] || a7m.fillRect(a7u, qi + .35 * a86, a7w[a7], Math.max(1, .1 * a86))
	}

	function a8F(a8K, a7) {
		a7m.fillText(ac.gM[a7], a7v, Math.floor(a7p + a7i + (a8K + .5) * a7s))
	}

	function a8T(eh) {
		return (eh -= bY.gap + a7r) < 0 ? Math.floor(eh / a7s) - 1 : eh < (a7k - 1) * a7s ? Math.floor(eh / a7s) : eh < a5o - a7r ? a7k - 1 : (eh -= a5o - a7r, a7k + Math.floor(eh / a7s))
	}

	function xH(ef, eh) {
		return ef >= bY.gap && ef < bY.gap + a7g && eh >= bY.gap && eh < bY.gap + a5o
	}
	this.dU = function() {
			var a7;
			for (a83 = !1, a85 = a84 = a82 = 0, a81 = -1, a7k = u.v.sU() ? 6 : 10, a87 = (position = 0) === (a87 = bf.dp.data[11].value) ? 10 : 1 === a87 ? 5 : 1, a80 = !1, a7y = new Uint16Array(a7k + 1), a7z = new Uint32Array(a7k + 1), a7o = a9.eV,
				kv = new Uint16Array(a7o), jO = new Uint16Array(a7o), a7 = a7o - 1; 0 <= a7; a7--) kv[a7] = a7, jO[a7] = a7;
			this.resize(!0), a7w = new Uint16Array(a9.eV);
			var a89 = Math.floor(a7g - a7u - a7t - a7n);
			for (a7x = new Array(a9.eV), a7m.font = a7j, a7 = a9.eV - 1; 0 <= a7; a7--) a7x[a7] = a7 + 1 + ".", ac.a4U[a7] = b6.wX.a1L(ac.z5[a7], a7j, a89), a7w[a7] = Math.floor(a7m.measureText(ac.a4U[a7]).width);
			a8A()
		}, this.resize = function(dU) {
			if (a5o = u.v.sU() ? (a7g = Math.floor(.335 * at.pL), Math.floor(a7k * a7g / 8)) : (a7g = Math.floor(.27 * at.pL), Math.floor(a7k * a7g / 10)), a7g = Math.floor(.97 * a7g), (a7l = document.createElement("canvas")).width = a7g, a7l
				.height = a5o, a7m = a7l.getContext("2d", {
					alpha: !0
				}), a7p = .025 * a7g, a7i = .16 * a7g, a7q = 0 * a7g, a7r = Math.floor(.45 * a7p + a7i), a7s = (a5o - a7i - 2 * a7p - a7q) / a7k,
				a7l.height = a5o += a7s, __fx.leaderboardFilter.tabBarOffset = Math.floor(a7s * 1.3), __fx.leaderboardFilter.verticalClickThreshold = a5o - __fx.leaderboardFilter.tabBarOffset, __fx.leaderboardFilter.windowWidth = a7g,
				a7h = b6.pJ.rF(1, Math.floor(.55 * a7i)), a86 = Math.floor((u.v.sU() ? .67 : .72) * a7s), a7j = b6.pJ.rF(0, a86), a7m.font = a7j, a7t = Math.floor(.04 * a7g), a7u = Math.floor((u.v.sU() ? .195 : .18) * a7g), a7n = Math.floor(a7m
					.measureText("00920600").width), a7m.font = a7h, a7v = a7g - a7t, !dU) {
				a7m.font = a7j;
				for (var a7 = a9.eV - 1; 0 <= a7; a7--) a7w[a7] = Math.floor(a7m.measureText(ac.a4U[a7]).width);
				a8A()
			}
			a88 = b6.wX.a1L(L(98), a7h, .96 * a7g)
		}, this.a7d = function() {
			return a7g
		}, this.lG = function(bo, a8B) {
			(a8B || a80 && (bo || bb.ja() % a87 == 0)) && (a80 = !1, a8A())
		}, this.iS = function() {
			! function() {
				for (var er = a7o - 1; 0 <= er; er--) 0 === ac.lU[kv[er]] && ! function(er) {
					var a8R = kv[er];
					a7o--;
					for (var a7 = er; a7 < a7o; a7++) kv[a7] = kv[a7 + 1], jO[kv[a7]] = a7;
					kv[a7o] = a8R, jO[kv[a7o]] = a7o
				}(er)
			}();
			for (var a8P, mF = a7o - 1, er = 0; er < mF; er++) ac.gM[kv[er]] < ac.gM[kv[er + 1]] && (a8P = kv[er], kv[er] = kv[er + 1], kv[er + 1] = a8P, jO[kv[er]] = er, jO[kv[er + 1]] = er + 1);
			! function() {
				for (var dk = a80, g7 = (a80 = !0, jO[a9.eI] >= a7k - 1 ? a7k - 2 : a7k - 1), a7 = g7; 0 <= a7; a7--)
					if (a7y[a7] !== kv[a7] || a7z[a7] !== ac.gM[kv[a7]]) return;
				(g7 != a7k - 2 || a7y[a7k] === jO[a9.eI] && a7z[a7k] === ac.gM[a9.eI]) && (a80 = dk)
			}();
			for (var a7 = a7k - 1; 0 <= a7; a7--) a7y[a7] = kv[a7], a7z[a7] = ac.gM[kv[a7]];
			a7y[a7k] = jO[a9.eI], a7z[a7k] = ac.gM[a9.eI];
			leaderboardHasChanged = true;
		}, __fx.leaderboardFilter.scrollToTop = function() {
			position = 0;
		}, this.gm = function(ef, eh) {
			return !!xH(ef, eh) && ((__fx.utils.isPointInRectangle(ef, eh, bY.gap + 12, bY.gap + 12, a7r - 22, a7r - 22) && __fx.playerList.display(ac.z5), true) &&
				!(eh - bY.gap > __fx.leaderboardFilter.verticalClickThreshold && __fx.leaderboardFilter.handleMouseDown(ef - bY.gap)) && (a82 = bb.ln, a83 = !0, a84 = a85 = a8T(eh), bF.a0V() && (ef = a6U(-1, a85, a7k), a81 !== (ef = ef === a7k ?
					-1 : ef)) && (a81 = ef, a8A(), bb.dc = !0)), !0)
		}, __fx.leaderboardFilter.repaintLeaderboard = function() {
			a8A(), bb.dc = !0;
		},
		this.zr = function(ef, eh) {
			if (__fx.utils.isPointInRectangle(ef, eh, bY.gap + 12, bY.gap + 12, a7r - 22, a7r - 22)) {
				__fx.playerList.hoveringOverButton === false && (__fx.playerList.hoveringOverButton = true, a8A(), bb.dc = !0);
			} else {
				__fx.playerList.hoveringOverButton === true && (__fx.playerList.hoveringOverButton = false, a8A(), bb.dc = !0);
			}
			if (__fx.leaderboardFilter.setHovering(
					__fx.utils.isPointInRectangle(ef, eh, bY.gap, bY.gap + __fx.leaderboardFilter.verticalClickThreshold, __fx.leaderboardFilter.windowWidth, __fx.leaderboardFilter.tabBarOffset), ef - bY.gap
				)) return;
			var dk, a8S = a8T(eh);
			return a83 ? (dk = position, (position = a6U(0, position += a84 - a8S, a9.eV - a7k)) !== dk && (a8S = (a8S = a6U(-1, a84 = a8S, a7k)) !== a7k && xH(ef, eh) ? a8S : -1, a81 = a8S, a8A(), bb.dc = !0), !0) : (a8S = (a8S = a6U(-1, a8S,
				a7k)) === a7k || !xH(ef, eh) || bF.a0V() ? -1 : a8S, a81 !== a8S && (a81 = a8S, a8A(), bb.dc = !0))
		}, this.a0G = function(ef, eh) {
			if (!a83) return !1;
			a83 = !1;
			var a8S = a8T(eh);
			var isEmptySpace = false;
			return bF.a0V() && -1 !== a81 && (a81 = -1, a8A(), bb.dc = !0), bb.ln - a82 < 350 && a85 === a8S && -1 !== (a8S = (a8S = a6U(-1, a8S, a7k)) !== a7k && xH(ef, eh) ? a8S : -1) && (ef = (__fx.leaderboardFilter.enabled ? (updateFilteredLb(),
					kv[__fx.leaderboardFilter.filteredLeaderboard[a8S + position] ?? (isEmptySpace = true, jO[a9.eI])]) : kv[a8S + position]), a8S === a7k - 1 && (__fx.leaderboardFilter.enabled ? this.playerPos : jO[a9.eI]) >=
				position + a7k - 1 && (ef = a9.eI), !isEmptySpace && a9.ie && __fx.donationsTracker.displayHistory(ef, ac.z5, a9.jz), 0 !== ac.lU[ef] && !isEmptySpace) && aD.lr(ef, 800, !1, 0), !0
		}, this.zu = function(ef, eh, deltaY) {
			var a8U;
			return !(a83 || a9.m0 || (a8U = Math.max(Math.floor(Math.abs(deltaY) / 40), 1), !xH(ef, eh)) || (ef = (ef = a6U(-1, a8T(eh), a7k)) === a7k || bF.a0V() ? -1 : ef, 0 < deltaY ? position < a9.eV - a7k && (position += Math.min(a9.eV - a7k -
				position, a8U), a81 = ef, a8A(), bb.dc = !0) : 0 < position && (position -= Math.min(position, a8U), a81 = ef, a8A(), bb.dc = !0), 0))
		}, this.tA = function() {
			tB.drawImage(a7l, bY.gap, bY.gap)
		}
}

function cH() {
	var canvas, wX, ef, eh, a58, a8V, gap, a8W, fontSize, a8X, a8Y, a8Z, a8a, a8b, a8c, a8d, a8e, a8f;

	function a8j() {
		wX.clearRect(0, 0, aS.a1, aS.j7), wX.fillStyle = b7.mU, wX.fillRect(0, 0, aS.a1, aS.j7), wX.fillStyle = b7.mp, eC = 0 < a8d ? a8d : Math.sqrt(a8a[4] / 1e4), wX.fillRect(0, aS.j7 - a58 - 1, Math.floor(eC * aS.a1), a58), wX.fillStyle = b7.mX,
			wX.fillRect(0, 0, aS.a1, 1), wX.fillRect(0, 0, 1, aS.j7), wX.fillRect(aS.a1 - 1, 0, 1, aS.j7), wX.fillRect(0, aS.j7 - 1, aS.a1, 1), wX.fillRect(0, aS.j7 - a58 - 1, aS.a1, 1);
		for (var eC, a8l, dk = 0, a7 = 0; a7 < a8Z.length; a7++) a8b[a7] ? (b6.pJ.textAlign(wX, 0), a8l = Math.floor((a8V - a58 + 2 * a8W) * (a7 - dk + 1) / (a8Z.length + 1) - .7 * a8W), wX.fillText(a8Z[a7], gap, a8l), b6.pJ.textAlign(wX, 2), 5 ===
			a7 && 0 !== ac.lU[a9.eI] && ac.ga[a9.eI] >= aa.jJ(a9.eI) ? (wX.fillStyle = b7.nJ, wX.fillText(a8h(a7), aS.a1 - gap, a8l), wX.fillStyle = b7.mX) : wX.fillText(a8h(a7), aS.a1 - gap, a8l)) : dk++
	}

	function a8h(a7) {
		return a7 < 3 ? a8a[a7].toString() : 3 === a7 || 4 === a7 || 5 === a7 ? b6.z3.a2F(a8a[a7] / 100, 2) : a7 < 7 ? b6.z3.xZ(a8a[a7]) : a7 === 7 ? aS.a8m(a8a[7]) : a7 === 8 ? __fx.utils.getMaxTroops(ac.gM, a9.eI) : __fx.utils.getDensity(a9.eI)
	}

	function a8g() {
		ac.gM[a9.eI] !== a8a[6] && (a8a[6] = ac.gM[a9.eI], a8X++)
	}
	this.dU = function() {
		a8d = a8e = 0, (a8Y = new Array(8))[0] = L(99), a8Y[1] = a9.jz ? L(100) : L(101), a8Y[2] = L(102), a8Y[3] = L(103), a8Y[4] = L(104), a8Y[5] = L(105, 0, "Interest"), a8Y[6] = L(106), a8Y[7] = L(107),
			a8Y.push("Max Troops", "Density"), // add a8Y
			(a8Z = new Array(a8Y.length)).fill(""), (a8a = new Array(a8Y.length))[0] = a9.jz ? 0 : a9.jd, a8a[1] = a9.jz ? ah.je : a9.k1, a8a[2] = a9.yI, a8a[3] = 0, a8a[4] = bH.dl(1e4 * ac.gM[0], Math.max(a9.jN, 1)), a8a[5] = 0 === a9.data
			.iIncomeType ? 700 : 1 === a9.data.iIncomeType ? bH.dl(700 * a9.data.iIncomeValue, 64) : bH.dl(700 * a9.data.iIncomeData[a9.eI], 64), a8a[6] = 0, a8g(), a8a[7] = 0, a8c = a8h(6), a8b = new Array(a8Y.length);
		for (var a7 = a8Y.length - 1; 0 <= a7; a7--) a8b[a7] = !0;
		a8f = 0, a8f = a9.jz ? (a8b[0] = !1, a8b[2] = !1, a8b[3] = !1, 3) : (a8b[3] = !1, 1), a8X = 0, this.resize()
	}, this.resize = function() {
		this.a1 = Math.floor((u.v.sU() ? .1646 : .126) * 1.25 * at.pL), this.j7 = Math.floor(1.18 * this.a1), a58 = Math.floor(.04 * this.a1), gap = Math.floor(.035 * this.a1), a8W = .04 * this.a1, a8V = this.j7, this.j7 -= Math.floor(a8f * (this
			.j7 - 2 * a58) / a8Y.length), fontSize = Math.floor(.7 * (a8V - a58) / a8Y.length);
		var a3k = b6.pJ.rF(1, fontSize);
		(canvas = document.createElement("canvas")).width = this.a1, canvas.height = this.j7,
			function(a3k, a1) {
				for (var a7 = 0; a7 < a8Z.length; a7++) a8Z[a7] = b6.wX.a1L(a8Y[a7], a3k, a1)
			}((wX = canvas.getContext("2d", {
				alpha: !0
			})).font = a3k, .575 * this.a1), b6.pJ.textBaseline(wX, 1), wX.lineWidth = 1, this.a2U(), this.a68(), aQ.a68(), a8j()
	}, this.a68 = function() {
		ef = at.a1 - this.a1 - bY.gap
	}, this.a8k = function() {
		eh = bY.gap
	}, this.a2U = function() {
		eh = bY.gap + (aQ.a5Y() && 0 !== ac.lU[a9.eI] && !a9.gu ? aQ.j7 + bY.gap : 0)
	}, this.lG = function(bo) {
		(bo || 100 <= a8X) && (a8X = 0, a8j())
	}, this.a3O = function() {
		return a8a[7]
	}, this.a8m = function(value) {
		var kO = Math.floor(value / 1e3 / 60),
			value = Math.floor((value - 6e4 * kO) / 1e3);
		return value < 10 ? kO + ":0" + value : kO + ":" + value
	}, this.iS = function() {
		var a8v, per;
		a8b[0] && a9.yJ - a9.yI !== a8a[0] && (a8a[0] = a9.yJ - a9.yI, a8X++), ah.je - a8a[0] !== a8a[1] && (a8a[1] = ah.je - a8a[0], a8X++), this.l8(), (a8v = aa.a8w(a9.eI)) !== a8a[5] && (a8a[5] = a8v, a8X++), a8g(), a8a[7] += bb.a8x, a8v =
			a8h(7), a8c !== a8v && (a8c = a8v, a8X += 100), a8v = a9.ie ? bd.yp() : ac.gM[kv[0]], per = bH.dl(1e4 * a8v, Math.max(a9.jN, 1)), a8a[3] = a8v, a8a[4] !== per && (a8X++, a8a[4] = per), 8 === a9.jx && function() {
				for (var a7 = 0; a7 < 2; a7++)
					if (!b6.fu.gl(a7)) return bN.xu.yF(), 1;
				return
			}() || a8a[3] < a9.jN || ! function() {
				for (var a7 = ah.je - 1; 0 <= a7; a7--)
					if (0 < ac.g0[ah.jg[a7]].length) return;
				return 1
			}() || bN.xu.yF()
	}, this.l8 = function() {
		a8b[2] && a9.yI !== a8a[2] && (a8a[2] = a9.yI, a8X++)
	}, this.a8y = function(a7) {
		var rx, a8z, dk;
		return 2 !== a9.yG && (a7 % 2 == 1 && (aR.lG(1, 1), bb.dc = !0), a7 === a9.a2d ? (a8d = 0, a8j(), !1) : (-1 !== a7 || 0 !== a8e) && (a8z = a8d, a8d = a9.gi ? a7 / a9.a2d : (dk = performance.now(), 0 <= a7 && (rx = dk - 392 * a7, a8e =
			0 === a7 || rx < a8e ? rx : a8e), 1 < (a8d = (dk - a8e) / (392 * a9.a2d)) ? 1 : a8d), a8j(), a8d !== a8z))
	}, this.tA = function() {
		tB.drawImage(canvas, ef, eh)
	}
}

function cI() {
	var wq, a90, a1, j7, a6E, a91, a92, a5Z, canvas, lh, a93;

	function wT() {
		return Math.floor((at.a1 - a1) / 2) < aN.j7 + 2 * bY.gap ? at.j7 - j7 - 4 * bY.gap - aN.j7 : at.j7 - j7 - 2 * bY.gap
	}
	this.dU = function() {
		a93 = wq = !1, a6E = .61, a91 = .07, a92 = .09, lh = a5Z = j7 = 0
	}, this.resize = function() {
		var wX, lx, et, a98, a99, a3p;
		wq && (a1 = a94(a1 = u.v.sU() ? Math.floor(.69 * at.pL) : Math.floor(.5 * at.pL), a4L(at.a1 - 2 * bY.gap, 10)), a1 = a94(a1, Math.floor(3.57 * a4L(at.j7 - 2 * bY.gap, 3))), j7 = Math.floor(.28 * a1), (canvas = document.createElement(
			"canvas")).width = a1, canvas.height = j7, wX = canvas.getContext("2d", {
			alpha: !0
		}), lx = Math.floor(1 + j7 / 40), wX.clearRect(0, 0, a1, j7), wX.fillStyle = b7.mU, wX.fillRect(lx, lx, a1 - 2 * lx, j7 - 2 * lx), wX.lineJoin = "bevel", wX.lineWidth = 2 * lx, wX.strokeStyle = b7.mX, wX.strokeRect(lx, lx, a1 -
			2 * lx, j7 - 2 * lx), wX.imageSmoothingEnabled = !1, et = aX.get(a90), a98 = et.width, a3p = (1 === a90 ? .85 : 21 === a90 ? .666 : .9) * a6E * j7 / (a99 = et.height), wX.setTransform(a3p, 0, 0, a3p, Math.floor((a1 - a3p *
			a98) / 2), Math.floor((j7 - a3p * a99) / 2)), wX.drawImage(et, 0, 0), wX.setTransform(1, 0, 0, 1, Math.floor(a1 - a92 * j7 - a91 * j7 - lx), Math.floor(lx + a91 * j7)), function(wX, eY) {
			wX.lineWidth = Math.floor(1 + j7 / 80), wX.strokeStyle = b7.mX, wX.beginPath(), wX.moveTo(0, 0), wX.lineTo(eY, eY), wX.moveTo(0, eY), wX.lineTo(eY, 0), wX.stroke()
		}(wX, Math.floor(a92 * j7)), wX.setTransform(1, 0, 0, 1, 0, 0))
	}, this.show = function(f0, a96, a61, a97) {
		wq || a97 && a93 || (a90 = a61 ? 21 : f0 ? 1 : 2, wq = a93 = !0, this.resize(), aH.qm(), aN.a5y(), lh = bb.ln, a5Z = a96 ? 1 : 0)
	}, this.iS = function() {
		!wq || 1 <= a5Z || (a5Z = 1 < (a5Z += 5e-4 * (bb.ln - lh)) ? 1 : a5Z, lh = bb.ln, bb.dc = !0)
	}, this.gm = function(ef, eh) {
		return !(!wq || a5Z <= 0 || (ef -= Math.floor((at.a1 - a1) / 2), eh -= wT(), ef < 0) || eh < 0 || a1 < ef || j7 < eh || (a1 - j7 / 3 < ef && eh < j7 / 3 && (wq = !1, bb.dc = !0), 0))
	}, this.tA = function() {
		!wq || a5Z <= 0 || (tB.globalAlpha = a5Z, tB.drawImage(canvas, Math.floor((at.a1 - a1) / 2), wT()), tB.globalAlpha = 1)
	}
}

function dG() {
	var a9B = [0, 0],
		a9C = [0, 0];

	function a9F(e0) {
		return 3 !== a9B[e0] && 1 !== a9C[e0] && (a9C[e0] = 1, a9B[e0]++, bf.qw.qx(119, (a9B[0] << 2) + a9B[1]), 1)
	}
	this.a9D = new a9E, this.dU = function() {
		var f0 = bf.dp.data[119].value;
		a9B[0] = f0 >> 2, a9B[1] = 3 & f0
	}, this.a2o = function() {
		this.a9D.dU()
	}, this.iS = function() {
		this.a9D.iS()
	}, this.a3P = function() {
		a9F(0) && aJ.a4R(L(108))
	}, this.a3Q = function() {
		a9F(1) && aJ.a4R(L(109))
	}
}

function a9E() {
	var a9G;
	this.dU = function() {
		a9G = !1
	}, this.iS = function() {
		var g6;
		if (function() {
				if (!a9G) {
					if (bb.ja() % 30 != 9) return;
					if (!b6.fu.ko(90)) return;
					a9G = !0
				}
				return 1
			}() && (! function() {
				var pB = aJ.a4n(956);
				if (pB) {
					if (b6.fu.kS(pB.player)) return 1;
					aJ.a3W(956, 0)
				}
				return
			}() && (-1 === (g6 = (a9.ie ? function() {
				var id = bd.ks(),
					eY = ah.je;
				if (bc.k3[id])
					for (var y7 = ah.jg, eW = bc.eW, a7 = 0; a7 < eY; a7++) {
						var g6 = y7[a7];
						if (eW[g6] !== id) return g6
					} else if (1 < eY) return kv[eY - 1];
				return -1
			} : function() {
				for (var a9O = ah.je, jf = ah.jg, a9P = jO, a7 = 0; a7 < a9O; a7++) {
					var g6 = jf[a7];
					if (0 !== a9P[g6]) return g6
				}
				return -1
			})()) ? ! function() {
				var pB = aJ.a4n(957);
				if (pB && pB.a4H) {
					if (aY.eP(pB.a4H.eK << 2)) return 1;
					aJ.a3W(957, 0)
				}
				return
			}() : (aJ.ye(0, L(110, [ac.a4U[g6]]), 956, g6, b7.mX, b7.mU, -1, !0), 0)))) {
			var eY = aj.iF.ke;
			if (0 === eY) aj.iF.l3();
			else
				for (var dp = aj.iF.dp, a7 = 0; a7 < eY; a7++) {
					var eK = dp[a7];
					if (aY.eP(eK << 2)) return void aJ.ye(0, L(111, [bI.eg(eK), bI.ei(eK)]), 957, 0, b7.mX, b7.mU, -1, !0, void 0, {
						er: 1,
						eK: eK
					})
				}
		}
	}
}

function dH() {
	this.a9Q = new a9R, this.dU = function() {
		this.a9Q.resize()
	}
}

function a9R() {
	this.resize = function() {
		var a7, a9S = document.head.querySelector("style#ss");
		if (a9S)
			for (a7 = a9S.sheet.cssRules.length - 1; 0 <= a7; a7--) a9S.sheet.deleteRule(0);
		else(a9S = document.createElement("style")).id = "ss", document.head.appendChild(a9S);
		var a6M = "::-webkit-scrollbar",
			a9T = b6.pJ.pU(bY.rG),
			hB = b6.pJ.pU(Math.max(b6.pJ.qo(.012), 8));
		try {
			a9S.sheet.insertRule(a6M + "{width:" + hB + ";height:" + hB + ";}", a9S.sheet.cssRules.length), a9S.sheet.insertRule(a6M + "-thumb{background-color:white;}", a9S.sheet.cssRules.length), a9S.sheet.insertRule(a6M +
				"-track{background:" + b7.mT + ";}", a9S.sheet.cssRules.length), a9S.sheet.insertRule(a6M + "-track:horizontal{border-top:" + a9T + " solid white;}", a9S.sheet.cssRules.length), a9S.sheet.insertRule(a6M +
				"-track:vertical{border-left:" + a9T + " solid white;}", a9S.sheet.cssRules.length), a9S.sheet.insertRule(a6M + "-button{display:none;}", a9S.sheet.cssRules.length)
		} catch (e) {
			for (console.log("error 3425: " + e), a7 = a9S.sheet.cssRules.length - 1; 0 <= a7; a7--) a9S.sheet.deleteRule(0)
		}
	}
}

function dF() {
	this.a9U = !1, this.mN = !1, this.a2Y = !1, this.a9V = [0, 0, 0, 0], this.a9W = function() {
		var lx, ly, mA, mB;
		this.a2Y = this.a2Y || this.mN, (this.mN || this.a9U && this.a2Y) && (lx = bW.a9X[0], ly = bW.a9X[1], mA = bW.a9X[2], mB = bW.a9X[3], lx = lx < this.a9V[0] ? this.a9V[0] : lx, ly = ly < this.a9V[1] ? this.a9V[1] : ly, mA = mA > this.a9V[
				2] ? this.a9V[2] : mA, mB = mB > this.a9V[3] ? this.a9V[3] : mB, this.mN = !1, this.a9U = !1, lx === this.a9V[0] && ly === this.a9V[1] && mA === this.a9V[2] && mB === this.a9V[3] ? this.a2Z() : lx <= mA && ly <= mB && a2q
			.putImageData(a2r, 0, 0, lx, ly, mA - lx + 1, mB - ly + 1))
	}, this.a2Z = function() {
		this.a2Y && this.a9V[2] >= this.a9V[0] && this.a9V[3] >= this.a9V[1] && a2q.putImageData(a2r, 0, 0, this.a9V[0], this.a9V[1], this.a9V[2] - this.a9V[0] + 1, this.a9V[3] - this.a9V[1] + 1), this.a2Y = !1
	}, this.yR = function() {
		this.a9V[2] >= this.a9V[0] && this.a9V[3] >= this.a9V[1] && a2q.putImageData(a2r, 0, 0, this.a9V[0], this.a9V[1], this.a9V[2] - this.a9V[0] + 1, this.a9V[3] - this.a9V[1] + 1), this.a2Y = !1
	}, this.dU = function() {
		var ef, eh;
		this.a9U = !1, this.mN = !1, this.a2Y = !1, this.a9V[0] = bO.ej, this.a9V[1] = bO.ek, this.a9V[2] = this.a9V[3] = 0;
		loop: for (ef = 1; ef < bO.ej - 1; ef++)
			for (eh = bO.ek - 2; 1 < eh; eh--)
				if (1 === a9Y[aY.w2(ef, eh) + 2]) {
					this.a9V[0] = ef;
					break loop
				} loop: for (eh = 1; eh < bO.ek - 1; eh++)
			for (ef = bO.ej - 2; 1 < ef; ef--)
				if (1 === a9Y[aY.w2(ef, eh) + 2]) {
					this.a9V[1] = eh;
					break loop
				} loop: for (ef = bO.ej - 2; 0 < ef; ef--)
			for (eh = bO.ek - 2; 1 < eh; eh--)
				if (1 === a9Y[aY.w2(ef, eh) + 2]) {
					this.a9V[2] = ef;
					break loop
				} loop: for (eh = bO.ek - 2; 0 < eh; eh--)
			for (ef = bO.ej - 2; 1 < ef; ef--)
				if (1 === a9Y[aY.w2(ef, eh) + 2]) {
					this.a9V[3] = eh;
					break loop
				}
	}
}

function L(value, a9Z, td) {
	var p0 = "number" == typeof value ? b3.a9a[value] : value;
	if (td && b3.a9b() && (p0 = td), a9Z)
		for (var eY = a9Z.length, a7 = 0; a7 < eY; a7++)
			for (var er = 0; er < 3; er++) p0 = p0.replace("{" + (10 * er + a7) + "}", a9Z[a7]);
	return p0
}

function bw() {
	this.data = new a9c;
	var a9d = (new a9e).L84,
		a9f = (this.a9a = a9d, !1);
	this.dU = function() {
		var eY, g;
		a9f = !1, "en" !== bf.dp.data[12].value.split("-")[0].toLowerCase() ? bf.dp.data[12].value === bf.dp.data[145].value && 0 < bf.dp.data[146].value && (eY = bf.dp.data[146].value, (g = bf.pc.tj(eY, !1)).length === eY) && !!b6.pT.a11(g) &&
			function(g) {
				var eY = g.length,
					a9l = bf.pc.tj(eY, !0);
				if (eY !== a9l.length) return !1;
				if (!b6.pT.a11(a9l)) return !1;
				for (var kO = a9d.length, a7F = new Array(kO), a9m = kO === eY, g1 = Math.min(eY, kO), a7 = 0; a7 < kO; a7++)
					if (a7F[a7] = a9d[a7], a7 < eY && a9l[a7] === a7F[a7]) a7F[a7] = g[a7];
					else {
						a9m = !1;
						for (var es = 0; es < g1; es++)
							if (a9l[es] === a7F[a7]) {
								a7F[a7] = g[es];
								break
							}
					} return b3.a9a = a7F, a9m
			}(g) || (a9f = !0) : b3.a9a = a9d
	}, this.dW = function() {
		bc.dV(), aA.dV(), ba.dV(), bZ.dV(), aK.dU(), bl = new dr
	}, this.a9b = function() {
		return this.a9a === a9d || !a9d.length
	}, this.a9n = function() {
		var a9o;
		a9f && (a9f = !1, 0 !== a9d.length) && (a9o = bf.dp.data[12].value, aw.a9p.a9q(0, a9o.slice(0, 20)))
	}, this.a9r = function(g) {
		g.length === a9d.length && (this.a9a = g, bf.qw.qx(145, bf.dp.data[12].value), bf.qw.qx(146, g.length), bf.pc.tp(g, !1), bf.pc.tp(a9d, !0), 0 === aW.zU()) && 5 === n.rd && n.s.a9s()
	}
}

function a9c() {
	var g = ["aa", "ab", "ace", "ach", "af", "ak", "alz", "am", "ar", "as", "av", "awa", "ay", "az", "ba", "bal", "ban", "bbc", "bci", "be", "bem", "ber", "ber-Latn", "bew", "bg", "bho", "bik", "bm", "bm-Nkoo", "bn", "bo", "br", "bs", "bts", "btx",
		"bua", "ca", "ce", "ceb", "cgg", "ch", "chk", "chm", "ckb", "cnh", "co", "crh", "crs", "cs", "cv", "cy", "da", "de", "din", "doi", "dov", "dv", "dyu", "dz", "ee", "el", "en", "eo", "es", "et", "eu", "fa", "fa-AF", "ff", "fi", "fil", "fj",
		"fo", "fon", "fr", "fur", "fy", "ga", "gaa", "gd", "gl", "gn", "gom", "gu", "gv", "ha", "haw", "he", "hi", "hil", "hmn", "hr", "hrx", "ht", "hu", "hy", "iba", "id", "ig", "ilo", "is", "it", "iw", "ja", "jam", "jv", "jw", "ka", "kac",
		"kek", "kg", "kha", "kk", "kl", "km", "kn", "ko", "kr", "kri", "ktu", "ku", "kv", "ky", "la", "lb", "lg", "li", "lij", "lmo", "ln", "lo", "lt", "ltg", "luo", "lus", "lv", "mad", "mai", "mak", "mam", "mfe", "mg", "mh", "mi", "min", "mk",
		"ml", "mn", "mni-Mtei", "mr", "ms", "ms-Arab", "mt", "mwr", "my", "nb", "ndc-ZW", "ne", "new", "nhe", "nl", "no", "nr", "nso", "nus", "ny", "oc", "om", "or", "os", "pa", "pa-Arab", "pag", "pam", "pap", "pl", "ps", "pt", "pt-PT", "qu",
		"rn", "ro", "rom", "ru", "rw", "sa", "sah", "scn", "sd", "se", "sg", "sh", "shn", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sus", "sv", "sw", "szl", "ta", "tcy", "te", "tet", "tg", "th", "ti", "tiv", "tk", "tl",
		"tn", "to", "tpi", "tr", "trp", "ts", "tt", "tum", "ty", "tyv", "udm", "ug", "uk", "ur", "uz", "ve", "vec", "vi", "war", "wo", "xh", "yi", "yo", "yua", "yue", "zap", "zh", "zh-CN", "zh-TW", "zu"
	];
	this.a9t = function() {
		for (var a9u = [], eY = g.length, a7 = 0; a7 < eY; a7++) a9u.push(g[a7]);
		for (eY++, a9u.unshift(bf.dp.data[12].td), a7 = 1; a7 < eY; a7++)
			if (a9u[a7] === a9u[0]) {
				a9u.splice(a7, 1), eY--;
				break
			} try {
			if ("undefined" == typeof Intl) return a9u;
			for (a7 = 0; a7 < eY; a7++) {
				var p0 = new Intl.DisplayNames([a9u[a7]], {
					type: "language"
				}).of(a9u[a7]);
				p0 !== a9u[a7] && (a9u[a7] = a9u[a7] + ": " + p0)
			}
		} catch (e) {
			console.log("error 3646: " + e)
		}
		return a9u
	}, this.a9w = function(a9x) {
		for (var p0 = bf.dp.data[12].value, eY = a9x.length, a7 = 0; a7 < eY; a7++)
			if (p0 === a9x[a7].split(":")[0]) return a7;
		return 0
	}
}

function a9e() {
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
	var ef, eh, j7, sV, a9y, a9z, aA0, aA1, aA2, a1, a1a, aA3;
	this.wq = !1, this.dU = function(p0, aA4) {
		if (1 === u.id && 13 <= u.f1 && u.f1 < 18) return aA4 ? void(a1a = p0) : a1a !== p0 ? void 0 : void u.th.saveString(200, p0);
		aA4 && (a1a = p0, (aA3 = document.createElement("a")).appendChild(document.createTextNode(a1a)), this.wq = !0, aA3.title = a1a, aA3.target = "_blank", aA3.href = a1a, aA3.style.textAlign = "center", aA3.style.color = b7.mX, aA3.style
			.position = "absolute", aA3.style.padding = "0px", aA3.style.margin = "0px", this.resize(), document.body.appendChild(aA3), bb.dc = !0)
	}, this.qm = function() {
		return !(!this.wq || (document.body.removeChild(aA3), this.wq = !1))
	}, this.gm = function(hd, he) {
		return !!this.wq && ((hd < ef || he < eh || ef + a1 < hd || eh + j7 < he || ef + a1 - sV < hd && he < eh + sV) && (bb.dc = !0, this.wq = !1, document.body.removeChild(aA3)), !0)
	}, this.resize = function() {
		var a3k, aA5;
		this.wq && (aA1 = Math.floor(.8 * (u.v.sU() ? at.a1 > at.j7 ? .6 : .55 : .4) * at.pL), sV = Math.floor(.15 * aA1), a9y = Math.floor(.35 * sV), a9z = Math.floor(.5 * sV), aA0 = Math.floor(2.5 * a9z), j7 = sV + a9y + 3 * a9z, a3k = b6.pJ
			.rF(1, a9y / at.pP), aA2 = Math.floor(at.pP * aM.measureText(a1a, a3k)), aA5 = a1 = (aA1 < aA2 ? aA2 : aA1) + 2 * aA0, a1 = Math.min(a1, at.a1 - 2 * (u.v.sU() ? 2 : 1) * bY.gap), a3k = b6.pJ.rF(1, a1 / aA5 * a9y / at.pP), aA2 =
			Math.floor(at.pP * aM.measureText(a1a, a3k)), ef = Math.floor((at.a1 - a1) / 2), eh = Math.floor((at.j7 - j7) / 2), aA3.style.font = a3k, aA3.style.top = Math.floor((eh + 1.4 * a9z + sV) / at.pP) + "px", aA3.style.left = Math
			.floor((ef + (a1 - aA2) / 2) / at.pP) + "px")
	}, this.tA = function() {
		this.wq && (tB.fillStyle = b7.mU, tB.fillRect(ef, eh + sV, a1, j7 - sV), tB.fillStyle = b7.nV, tB.fillRect(ef, eh, a1, sV), tB.fillStyle = b7.mX, tB.lineWidth = bY.xI, tB.strokeStyle = b7.mX, tB.strokeRect(ef, eh, a1, j7), tB.fillRect(ef,
			eh + sV, a1, bY.xI), tB.font = b6.pJ.rF(1, .48 * sV), b6.pJ.textAlign(tB, 1), b6.pJ.textBaseline(tB, 1), tB.fillText("You are leaving Territorial.io!", Math.floor(ef + (a1 - .5 * sV) / 2), Math.floor(eh + .55 * sV)), aI.a3w(
			Math.floor(ef + a1 - .8 * sV), Math.floor(eh + .25 * sV), Math.floor(.5 * sV)), tB.setTransform(1, 0, 0, 1, 0, 0))
	}
}

function dY() {
	var gap, a8Y, ef = [0, 0, 0, 0, 0],
		eh = [0, 0, 0, 0, 0],
		m9 = [1, 1, 1, 1, 1],
		f0 = [!0, !0, !0, !1, !1],
		et = (this.fK = [!0, !0, !0, !1, !1], null);
	this.aA6 = function(a19, aA7) {
		et = a19, f0 = aA7, a8Y = [bG.aA8, bG.zP, bG.aA9, bG.aA9, bG.aAA], this.dU()
	}, this.dU = function() {
		if (aX.s1()) {
			var a7, rk = Math.floor((u.v.sU() ? .261 : .195) * at.pL),
				rl = Math.floor(.9 * rk),
				a6E = Math.floor(.17 * rl);
			if (gap = u.v.sU() ? 2 * bY.gap : bY.gap, m9[0] = rk / et[0].width, m9[1] = rl / et[1].width, m9[2] = a6E / et[2].height, m9[3] = a6E / et[3].height, m9[4] = a6E / et[4].height, m9[2] *= 1.7, m9[3] *= 1.07, ef[0] = gap, ef[1] = gap,
				ef[2] = gap, ef[3] = gap, ef[4] = Math.floor(2 * gap + m9[3] * et[3].width), eh[0] = gap, eh[1] = eh[0] + gap + m9[0] * et[0].height, eh[2] = eh[1] + gap + m9[1] * et[1].height, eh[3] = eh[2] + gap + m9[2] * et[2].height, eh[4] =
				eh[3], !f0[0])
				for (a7 = 0; a7 < 5; a7++) eh[a7] -= m9[0] * et[0].height + gap;
			if (!f0[1])
				for (a7 = 2; a7 < 5; a7++) eh[a7] -= m9[1] * et[1].height + gap
		}
	}, this.wq = function() {
		return !(7 === aW.zU() && u.v.sU())
	}, this.gm = function(hd, he) {
		if (et && this.wq())
			for (var a7 = f0.length - 1; 0 <= a7; a7--)
				if (f0[a7] && this.fK[a7] && ef[a7] < hd && eh[a7] < he && hd < ef[a7] + m9[a7] * et[a7].width && he < eh[a7] + m9[a7] * et[a7].height) return n.o(9, n.rd, new aAB("You are leaving Territorial.io.", b6.pJ.a1Z(a8Y[a7]))), !0;
		return !1
	}, this.tA = function() {
		if (et && this.wq()) {
			var a7;
			for (tB.imageSmoothingEnabled = !0, a7 = 0; a7 < 5; a7++) f0[a7] && this.fK[a7] && (tB.setTransform(m9[a7], 0, 0, m9[a7], ef[a7], eh[a7]), tB.drawImage(et[a7], 0, 0));
			tB.setTransform(1, 0, 0, 1, 0, 0)
		}
	}
}

function dR() {
	this.aAC = 0, this.aAD = null, this.sb = null, this.qU = null, this.s = null, this.sk = null, this.qj = null, this.aAE = new aAF, this.zY = 0, this.dU = function() {
		this.aAC = bC.rg.ub(bf.dp.data[105].value), this.sb = new aAG, this.qU = new aAH, this.s = new aAI, this.sk = new aAJ, this.qj = new aAK, this.s.dU(), this.zY = 1, aW.setState(0)
	}, this.zh = function() {
		this.aAD = null, this.sb = null, this.qU = null, this.s = null, this.sk = null, this.qj = null, this.zY = 0, Math.random() < .001 && console.log(L(112))
	}
}

function aAG() {
	this.sc = [
		[],
		[],
		[],
		[]
	], this.sd = [0, 0, 0, 0], this.aAL = [], this.aAM = function(aAN, rb, username, qf, qi, aAO, elo, color) {
		this.sc[aAN].push(this.aAP(rb, username, qf, qi, aAO, elo, color)), bk.aAC === rb && (bk.aAD = this.sc[aAN][this.sc[aAN].length - 1]), bk.s.aAQ += 29 === n.rd && bk.s.qN[0] === aAN && 1 === bk.s.qN[2]
	}, this.aAP = function(rb, username, qf, qi, aAO, elo, color) {
		return {
			rb: rb,
			username: username,
			qf: qf,
			qi: qi,
			aAO: aAO,
			elo: elo,
			color: color
		}
	}, this.aAR = function(e0, aAN, username, qf, qi, aAO, elo) {
		e0 = this.sc[aAN][e0];
		!b6.z3.startsWith(e0.username, "Censored") && b6.z3.startsWith(username, "Censored") && (e0.aAS = e0.username), e0.username = username, e0.qf = qf, e0.qi = qi, e0.aAO = aAO, e0.elo = elo, bk.s.aAQ += 29 === n.rd && bk.s.qN[0] === aAN &&
			1 === bk.s.qN[2]
	}, this.aAT = function(e0, aAU, aAV) {
		var player = this.sc[aAU][e0];
		this.aAW(e0, aAU, 1), this.sc[aAV].push(player), bk.s.aAQ += 29 === n.rd && bk.s.qN[0] === aAV && 1 === bk.s.qN[2]
	}, this.aAW = function(e0, aAU, aAX) {
		aAX || this.aAL.push(this.sc[aAU][e0]), this.sc[aAU].splice(e0, 1), e0 < this.sd[aAU] && this.sd[aAU]--, bk.s.aAQ += 29 === n.rd && bk.s.qN[0] === aAU && 1 === bk.s.qN[2]
	}, this.aAY = function(e0, qM) {
		var sb = this.sc[qM],
			pB = sb[e0];
		sb.splice(e0, 1), e0 < this.sd[qM] ? (this.sd[qM]--, sb.splice(this.sd[qM], 0, pB)) : (sb.splice(function(sb, qM, pB) {
			var sd = bk.sb.sd[qM];
			if (2 === qM)
				for (var elo = pB.elo; sd && elo > sb[sd - 1].elo;) sd--;
			return sd
		}(sb, qM, pB), 0, pB), this.sd[qM]++), bk.s.aAQ += 29 === n.rd && bk.s.qN[0] === qM && 1 === bk.s.qN[2]
	}
}

function aAF() {
	this.dd = function(e0) {
		if ((sd = bk.sb.sd[e0]) < 2) return !1;
		var qO = bk.s.qP[e0],
			aAa = 9 === qO.aAb ? 333 : 512,
			sd = Math.min(sd, aAa);
		8 === qO.aAb && (sd -= sd % 2);
		aAa = bk.sb.sc[e0].splice(0, sd), bk.sb.sd[e0] -= sd, bk.sb.aAL = bk.sb.aAL.concat(aAa), bk.sb.aAL = bk.sb.aAL.slice(0, 1e3), sd = function(aAc) {
			if (bk.aAD)
				for (var eY = aAc.length, rb = bk.aAD.rb, a7 = 0; a7 < eY; a7++)
					if (aAc[a7].rb === rb) return a7;
			return -1
		}(aAa);
		return -1 === sd ? (bk.s.aAQ += 29 === n.rd && bk.s.qN[0] === e0 && 1 === bk.s.qN[2], !1) : (8 === qO.aAb && (qO.aAf = (qO.aAf + (sd >> 1)) % 1024, e0 = sd - sd % 2, sd %= 2, aAa = aAa.slice(e0, 2 + e0)), ar.dU(qO, aAa, sd), !0)
	}, this.aAg = function(qO, aAc, aAd) {
		var eb = a9.data = new a2e,
			aAk = (eb.spawningSeed = qO.spawningSeed, qO.aAb < 7 ? (eb.gameMode = 1, eb.numberTeams = qO.aAb + 2) : 9 === qO.aAb ? (eb.gameMode = eb.isZombieMode = 1, eb.numberTeams = 2) : (eb.gameMode = 0, eb.battleRoyaleMode = 7 === qO.aAb ?
				0 : 10 === qO.aAb ? 1 : 2), eb.selectedPlayer = aAd, eb.isContest = qO.aAh, eb.mapType = bO.aAi(qO.eE) ? 0 : 1, bO.aAj(eb, qO.eE), eb.mapSeed = qO.mapSeed, eb.humanCount = aAc.length);
		eb.selectableSpawn = 1 === eb.gameMode || aAk < 100, eb.colorsData = new Uint32Array(aAk), eb.playerNamesData = new Array(aAk);
		for (var a7 = 0; a7 < aAk; a7++) eb.colorsData[a7] = aAc[a7].color, eb.playerNamesData[a7] = aAc[a7].username;
		if (2 === eb.battleRoyaleMode)
			for (eb.elo = new Uint16Array(aAk), a7 = 0; a7 < aAk; a7++) eb.elo[a7] = aAc[a7].elo;
		aW.setState(8), bO.a3(qO.eE, eb.mapSeed), a9.a2i()
	}
}

function aAH() {
	var ds = ["", "", "Admin", "Clan Leader", "1v1", "Clam Member", "", "", "", ""],
		aAl = [b7.mk, b7.mX, b7.nT, b7.nA, b7.ml, b7.nE, b7.n1, b7.mk, b7.mk, b7.mk],
		aAm = [
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
		aAn = [0, 0, 1, 1, 1, 1, 1, 0, 0, 0];
	this.qV = function(qM, aAo) {
		var j7 = this,
			a1h = (a1h = j7.aAp(qM, aAo.rb)) || bk.sb.aAP(aAo.rb, bB.rg.xZ(aAo.rb, 5), 1, 1e6, 1e6, 0, 0);
		return 0 === aAo.id ? {
			id: aAo.id,
			fontSize: j7.aAq(a1h.qf, a1h.qi),
			qZ: [a1h],
			qb: [{
				p0: ": " + aAo.k,
				color: j7.aAr(a1h.qf),
				ql: j7.qh(a1h.qf, a1h.qi)
			}]
		} : (qM = (qM = j7.aAp(qM, aAo.target)) || bk.sb.aAP(aAo.target, bB.rg.xZ(aAo.target, 5), 1, 1e6, 1e6, 0, 0), {
			id: aAo.id,
			fontSize: j7.aAq(1, 0),
			qZ: [a1h, qM],
			qb: [{
				p0: 15 === aAo.id ? function(aAo) {
					return 0 === aAo.aAu ? 32768 <= aAo.value ? " voted with " + (aAo.value - 32768 + 1) + " gold against " : " voted with " + (aAo.value + 1) + " gold for " : 1 === aAo.aAu ? " sent " + (aAo.value / 100)
						.toFixed(2) + " Gold to " : " voted with " + aAo.value + " points for "
				}(aAo) : bl.e3(aAo.id - 1, bl.dx[aAo.id - 1][aAo.value]),
				color: j7.aAr(1)
			}, {
				p0: 15 === aAo.id ? function(aAo) {
					return 0 === aAo.aAu ? 32768 <= aAo.value ? " to weaken the latter's admin position." : " to strengthen the latter's admin position." : 1 === aAo.aAu ? "." : " to acknowledge the latter as clan leader."
				}(aAo) : bl.e5(aAo.id - 1, bl.dx[aAo.id - 1][aAo.value]),
				color: j7.aAr(1)
			}]
		})
	}, this.qd = function(player, qM, aAv) {
		return player.username + (aAv && player.aAS ? " (" + player.aAS + ")" : "") + (2 === qM ? " (" + (player.elo / 10).toFixed(1) + ")" : "")
	}, this.qe = function(qf) {
		return aAl[qf]
	}, this.aAr = function(qf) {
		return 0 === qf ? aAl[qf] : b7.mX
	}, this.aAq = function(qf, qi) {
		return qf < 2 || 5 < qf ? aAm[qf][0] : 3 === qf ? aAm[qf][qi < 1 ? 0 : qi < 8 ? 1 : 2] : aAm[qf][qi < 10 ? 0 : 1]
	}, this.qh = function(qf, qi) {
		return 0 === qi && aAn[qf]
	}, this.aAp = function(qM, rb) {
		for (var sc = bk.sb.sc, sb = sc[qM], eY = sb.length, a7 = 0; a7 < eY; a7++)
			if (rb === sb[a7].rb) return sb[a7];
		for (var es = 0; es < sc.length; es++)
			if (qM !== es)
				for (eY = (sb = sc[es]).length, a7 = 0; a7 < eY; a7++)
					if (rb === sb[a7].rb) return sb[a7];
		for (var aAL = bk.sb.aAL, eY = aAL.length, a7 = 0; a7 < eY; a7++)
			if (rb === aAL[a7].rb) return aAL[a7];
		return null
	}, this.qg = function(pB) {
		return !!bk.aAD && pB.rb === bk.aAD.rb
	}, this.aAw = function(sb, aAx, aAy) {
		var yz = [];
		loop: for (var a7 = aAx; a7 < aAy; a7++) {
			var aAz = b6.z3.z4(sb[a7].username);
			if (aAz) {
				for (var es = yz.length - 1; 0 <= es; es--)
					if (aAz === yz[es].name) {
						yz[es].g1++;
						continue loop
					} yz.push({
					name: aAz,
					g1: 1
				})
			}
		}
		if (yz.sort(function(er, es) {
				return es.g1 - er.g1
			}), 0 === yz.length) return "";
		for (var p0 = yz[0].name + ": " + yz[0].g1, a7 = 1; a7 < yz.length; a7++) p0 += "   " + yz[a7].name + ": " + yz[a7].g1;
		return p0
	}, this.aB0 = function(qf, qi, aAO) {
		return 0 === ds[qf].length ? "Rank: " + (qi + 1) : ds[qf] + " Rank: " + (qi + 1) + (2 !== qf && aAO < 100 ? "   " + ds[2] + " Rank: " + (aAO + 1) : "")
	}
}

function aAK() {
	var aB1 = null;
	this.qk = function(e, pB) {
		var a6L = e.target.getBoundingClientRect();
		this.show(a6L.left, a6L.top, pB), e.target.addEventListener("mouseleave", function remove() {
			e.target.removeEventListener("mouseleave", remove), bk.qj && bk.qj.qm(1)
		})
	}, this.show = function(ef, eh, pB, rE) {
		(aB1 = aB1 || new rA).show(ef, eh, function(pB, rE) {
			return (rE ? pB.username + "   " : "") + bk.qU.aB0(pB.qf, pB.qi, pB.aAO) + (0 < pB.elo ? "   Elo: " + (pB.elo / 10).toFixed(1) : "")
		}(pB, rE), rE)
	}, this.qm = function(rH) {
		aB1 && aB1.qm(rH)
	}
}

function aAI() {
	function aB6(aB9) {
		bk.s.aAQ && 1 === bk.s.qN[2] && n.aBA(29).aBB(), bk.s.aAQ = 0, n.aBA(29).aBC(), 0 !== bk.s.qP[bk.s.qN[0]].sP && !aB9 || n.aBA(29).aBD()
	}
	this.qP = new Array(4), this.qN = [0, 0, 1, 0], this.aAQ = 0, this.aB3 = [0, 0], this.dU = function() {
		for (var a7 = 0; a7 < this.qP.length; a7++) this.qP[a7] = new aB4
	}, this.aB5 = function() {
		aB6(!0)
	}, this.aB7 = function() {
		for (var a7 = 0; a7 < bk.s.qP.length; a7++) {
			var qO = bk.s.qP[a7];
			0 === qO.sP ? qO.aBE = 0 : (qO.aBF = Math.max(qO.aBF - qO.aBE % 2, 0), qO.aBE++)
		}
		aB6(!1)
	}, this.aBG = function(qM) {
		this.qN[0] !== qM || this.qN[2] || n.aBA(29).aBH()
	}
}

function aAJ() {
	var aBI = null,
		aBJ = null;

	function aBL() {
		6 < aBJ.qf || n.o(8, 29, new re(25, {
			rf: 0,
			rb: bB.rg.xZ(aBJ.rb, 5),
			rc: 0
		}, 29))
	}

	function aBM() {
		var ef = aBI.ef,
			eh = aBI.eh;
		bk.sk.qm(), aBI = new sg([new q("Kick User", aBQ, aBR(0)), new q("Block Chat", aBS, aBR(1)), new q("Censor Username", aBT, aBR(2)), new q("Elo Deduction", aBU, aBR(3)), new q("Gold Seizure", aBV, aBR(4))]), aBP(ef, eh)
	}

	function aBR(id) {
		return bk.aAD ? bk.qU.qg(aBJ) ? 0 : bk.aAD.aAO >= aBJ.qi || 0 === id && aBJ.qi < 200 ? 1 : 1 - bl.dy(id, bk.aAD.aAO, 0) : 1
	}

	function aBW(id, e0) {
		return bk.aAD ? bk.qU.qg(aBJ) ? 0 : bk.aAD.aAO >= aBJ.qi ? 1 : 1 - bl.dy(id, bk.aAD.aAO, e0) : 1
	}

	function aBO() {
		var ef = aBI.ef,
			eh = aBI.eh;
		bk.sk.qm(), aBI = new sg([new q(bl.dx[5][0], function() {
			aBX(5, 0)
		}), new q(bl.dx[5][1], function() {
			aBX(5, 1)
		}), new q(bl.dx[5][2], function() {
			aBX(5, 2)
		}), new q(bl.dx[5][3], function() {
			aBX(5, 3)
		})]), aBP(ef, eh)
	}

	function aBX(id, value) {
		aw.aBY.aBZ(5, {
			id: id,
			value: value,
			rb: aBJ.rb
		})
	}

	function aBQ() {
		var ef = aBI.ef,
			eh = aBI.eh;
		bk.sk.qm(), aBI = new sg([new q(bl.dx[0][0], function() {
			aBX(0, 0)
		}, aBW(0, 0)), new q(bl.dx[0][1], function() {
			aBX(0, 1)
		}, aBW(0, 1)), new q(bl.dx[0][2], function() {
			aBX(0, 2)
		}, aBW(0, 2))]), aBP(ef, eh)
	}

	function aBS() {
		var ef = aBI.ef,
			eh = aBI.eh;
		bk.sk.qm(), aBI = new sg([new q(bl.dx[1][0], function() {
			aBX(1, 0)
		}, aBW(1, 0)), new q(bl.dx[1][1], function() {
			aBX(1, 1)
		}, aBW(1, 1)), new q(bl.dx[1][2], function() {
			aBX(1, 2)
		}, aBW(1, 2)), new q(bl.dx[1][3], function() {
			aBX(1, 3)
		}, aBW(1, 3)), new q(bl.dx[1][4], function() {
			aBX(1, 4)
		}, aBW(1, 4))]), aBP(ef, eh)
	}

	function aBT() {
		var ef = aBI.ef,
			eh = aBI.eh;
		bk.sk.qm(), aBI = new sg([new q(bl.dx[2][0], function() {
			aBX(2, 0)
		}, aBW(2, 0)), new q(bl.dx[2][1], function() {
			aBX(2, 1)
		}, aBW(2, 1)), new q(bl.dx[2][2], function() {
			aBX(2, 2)
		}, aBW(2, 2))]), aBP(ef, eh)
	}

	function aBU() {
		var ef = aBI.ef,
			eh = aBI.eh;
		bk.sk.qm(), aBI = new sg([new q(bl.dx[3][0], function() {
			aBX(3, 0)
		}, aBW(3, 0)), new q(bl.dx[3][1], function() {
			aBX(3, 1)
		}, aBW(3, 1)), new q(bl.dx[3][2], function() {
			aBX(3, 2)
		}, aBW(3, 2))]), aBP(ef, eh)
	}

	function aBV() {
		var ef = aBI.ef,
			eh = aBI.eh;
		bk.sk.qm(), aBI = new sg([new q(bl.dx[4][0], function() {
			aBX(4, 0)
		}, aBW(4, 0)), new q(bl.dx[4][1], function() {
			aBX(4, 1)
		}, aBW(4, 1)), new q(bl.dx[4][2], function() {
			aBX(4, 2)
		}, aBW(4, 2)), new q(bl.dx[4][3], function() {
			aBX(4, 3)
		}, aBW(4, 3)), new q(bl.dx[4][4], function() {
			aBX(4, 4)
		}, aBW(4, 4))]), aBP(ef, eh)
	}

	function aBP(ef, eh, sm) {
		aBI.show(ef, eh, sm), bk.qj.show(aBI.ef, aBI.eh, aBJ, 1)
	}
	this.aBK = function(e, pB) {
		aBJ = pB, aBI = new sg([new q(L(113), aBL), new q(L(114), aBM, function() {
			if (!bk.aAD) return 1;
			if (!bk.qU.qg(aBJ)) {
				if (100 <= bk.aAD.aAO) return 1;
				if (bk.aAD.aAO >= aBJ.qi) return 1
			}
			return 0
		}()), new q(L(115), aBO)]), aBP(e.clientX, e.clientY, 1)
	}, this.qm = function() {
		aBI && aBI.qm(), aBI = null, bk.qj.qm()
	}
}

function aB4() {
	this.sP = 0, this.eE = 0, this.mapSeed = 0, this.aAb = 0, this.aBa = 0, this.aBb = 0, this.aAh = 0, this.aBF = 0, this.spawningSeed = 0, this.za = 0, this.aAf = 0, this.qQ = [], this.qR = 1048575, this.aBE = 0
}

function cJ() {
	var aBc, aBd, aBe;

	function aBj(a7) {
		var button = aU.pu[a7],
			ef = button.ef,
			eh = button.eh,
			a1 = button.a1,
			j7 = button.j7;
		tB.fillStyle = button.aBh, tB.fillRect(ef, eh, a1, j7), a7 === aBc && (tB.fillStyle = aBe, tB.fillRect(ef, eh, a1, j7)), tB.lineWidth = bY.xI, tB.strokeStyle = aBd, tB.strokeRect(ef, eh, a1, j7),
			function(button) {
				var ef = button.ef,
					eh = button.eh,
					a1 = button.a1,
					j7 = button.j7;
				b6.pJ.textAlign(tB, 1), b6.pJ.textBaseline(tB, 1), tB.font = button.font, tB.fillStyle = aBd, tB.fillText(button.a4z, Math.floor(ef + a1 / 2), Math.floor(eh + j7 / 2 + .1 * button.fontSize))
			}(button)
	}
	this.a1 = 0, this.j7 = 0, this.eh = 0, this.gap = 0, this.dU = function() {
		aBc = -1, aBd = b7.mX, aBe = "rgba(255,255,255,0.16)", this.pu = new Array(7), this.j7 = Math.floor((u.v.sU() ? .123 : .093) * at.pL), this.a1 = Math.floor((u.v.sU() ? 3.96 : 4.2) * this.j7), this.gap = Math.floor(.025 * this.a1);
		var aBf = Math.floor(.26 * this.j7),
			aBg = b6.pJ.rF(1, aBf);
		this.pu[0] = {
			ef: 0,
			eh: 0,
			a1: Math.floor(.6 * this.a1 - this.gap / 2),
			j7: this.j7,
			a4z: "Multiplayer",
			font: aBg,
			aBh: "rgba(22,88,22,0.8)",
			fontSize: aBf
		}, aBf = Math.floor(.18 * this.j7), aBg = b6.pJ.rF(1, aBf), this.pu[1] = {
			ef: 0,
			eh: 0,
			a1: this.a1 - this.pu[0].a1 - this.gap,
			j7: this.j7,
			a4z: "Single Player",
			font: aBg,
			aBh: "rgba(22,88,88,0.8)",
			fontSize: aBf
		}, this.pu[2] = {
			ef: 0,
			eh: 0,
			a1: this.a1,
			j7: Math.floor(.3 * this.j7),
			a4z: "",
			font: this.pu[1].font,
			aBh: "rgba(100,0,0,0.8)",
			fontSize: this.pu[1].fontSize
		}, this.pu[3] = {
			ef: 0,
			eh: 0,
			a1: this.a1,
			j7: this.j7,
			a4z: "Back",
			font: this.pu[0].font,
			aBh: "rgba(0,0,0,0.8)",
			fontSize: this.pu[0].fontSize
		}, this.pu[4] = {
			ef: 0,
			eh: 0,
			a1: this.a1,
			j7: Math.floor(.3 * this.j7),
			a4z: "The game was updated!",
			font: this.pu[1].font,
			aBh: "rgba(100,0,0,0.8)",
			fontSize: this.pu[1].fontSize
		}, this.pu[5] = {
			ef: 0,
			eh: 0,
			a1: this.pu[0].a1,
			j7: Math.floor(.8 * this.j7),
			a4z: "Reload",
			font: this.pu[0].font,
			aBh: "rgba(0,100,0,0.8)",
			fontSize: this.pu[0].fontSize
		}, this.pu[6] = {
			ef: 0,
			eh: 0,
			a1: this.pu[1].a1,
			j7: this.pu[5].j7,
			a4z: "Back",
			font: this.pu[0].font,
			aBh: "rgba(0,0,0,0.8)",
			fontSize: this.pu[0].fontSize
		}, this.a7I()
	}, this.a7I = function() {
		this.eh = Math.floor(.54 * at.j7), this.pu[0].ef = Math.floor(.5 * at.a1 - .5 * this.a1), this.pu[1].ef = this.pu[0].ef + this.pu[0].a1 + this.gap, this.pu[2].ef = this.pu[3].ef = this.pu[0].ef, this.pu[4].ef = this.pu[5].ef = this.pu[0]
			.ef, this.pu[6].ef = this.pu[1].ef, this.pu[0].eh = Math.floor(.54 * at.j7), this.pu[1].eh = this.pu[0].eh, this.pu[2].eh = Math.floor((at.j7 - this.pu[2].j7 - this.pu[3].j7 - this.gap) / 2), this.pu[3].eh = this.pu[2].eh + this.pu[2]
			.j7 + this.gap, this.pu[4].eh = Math.floor((at.j7 - this.pu[4].j7 - this.pu[5].j7 - this.gap) / 2), this.pu[5].eh = this.pu[6].eh = this.pu[4].eh + this.pu[4].j7 + this.gap
	}, this.aBi = function() {
		aBj(0), aBj(1)
	}, this.aBk = function() {
		aBj(2), aBj(3)
	}, this.aBl = function() {
		aBj(4), aBj(5), aBj(6)
	}, this.zr = function(ef, eh, lG) {
		var a7 = -1;
		return 0 === aW.zU() ? a7 = this.a0L(ef, eh, 0, 2) : 3 === aW.zU() ? a7 = this.a0L(ef, eh, 3, 1) : 5 === aW.zU() && (a7 = this.a0L(ef, eh, 5, 2)), aBc !== a7 && (aBc = a7, lG) && (bb.dc = !0), -1 !== a7 && (aP.qK(), !0)
	}, this.a0L = function(ef, eh, aBm, size) {
		for (var a7 = aBm; a7 < aBm + size; a7++)
			if (ef >= this.pu[a7].ef && eh >= this.pu[a7].eh && ef <= this.pu[a7].ef + this.pu[a7].a1 && eh <= this.pu[a7].eh + this.pu[a7].j7) return a7;
		return -1
	}
}

function cK() {
	var aBo, aBp, a58, a5I, a66, aBq, aBr, aBs, aBt, a3k, fontSize, lh, aBu, aBw, aBv = 0;

	function aBz() {
		return aw.s.aC0[(aBu + aBv) % aw.s.aC1]
	}

	function aC4() {
		__fx.customLobby.isActive() ? (l.zf(3249), __fx.customLobby.setActive(false)) : l.zf(3249)
	}

	function aCA(eh, a6z, sP) {
		var lx = Math.floor((at.a1 - a5I) / 2) + aBr,
			mA = lx + Math.floor(sP * (a5I - 2 * aBr));
		tB.lineWidth = a6z, tB.beginPath(), tB.moveTo(lx, eh), tB.lineTo(mA, eh), tB.lineTo(Math.floor(lx - aBr + sP * a5I), eh + a58), tB.lineTo(lx - aBr, eh + a58), tB.closePath()
	}
	this.dU = function() {
		aW.setState(6), aBo = 0, aBp = 1, aBs = "rgba(0,220,120,0.4)", aBt = "rgba(0,0,0,0.8)", this.resize(), bb.dc = !0, aBu = 0, aBw = !1, aBu++, lh = bb.ln, aw.s.aC2(aBz(), 4) && (aBw = !0, aw.aBY.aC3(aBz()))
	}, this.resize = function() {
		a5I = Math.floor((u.v.sU() ? .5 : .25) * at.pL), a66 = a5I + 12, a58 = Math.floor(.125 * a5I), aBr = 3 * a58, aBq = Math.floor(.225 * a5I), fontSize = Math.floor(.3 * a58), a3k = b6.pJ.rF(0, fontSize)
	}, this.aBy = function(er) {
		aBv = er
	}, this.zX = function(zR) {
		zR === aBz() && (aBw = !1, aC4())
	}, this.aC5 = function(zR) {
		6 !== aW.zU() || aBw || (lh = bb.ln, aBw = !0)
	}, this.gm = function(ef, eh) {
		var lx = Math.floor((at.a1 - a66) / 2),
			ly = Math.floor(.5 * (at.j7 - bY.gap - a58 - aBq)) + a58 + bY.gap;
		return lx < ef && ef < lx + a66 && ly < eh && eh < ly + aBq && (this.a0X(), aU.zr(ef, eh, !1), !0)
	}, this.a0X = function() {
		aw.s.zg(3260), __fx.customLobby.setActive(false), n.s.t()
	}, this.iS = function() {
		6 === aW.zU() && (aBw ? bb.ln > lh + 12e3 && l.zf(3250) : bb.ln > lh + 12e3 && aC4(), 100 < (aBo += .07 * aBp * (aBo < 16 ? 5 + aBo : 84 < aBo ? 105 - aBo : 17)) ? (aBo = 100, aBp = -1) : aBo < 0 && (aBo = 0, aBp = 1), aBs = "rgba(0," +
			Math.floor(190 - 1.9 * aBo) + "," + Math.floor(120 - 1.2 * aBo) + "," + (.4 + .004 * aBo) + ")", aBt = "rgba(0," + Math.floor(1.9 * aBo) + "," + Math.floor(1.2 * aBo) + "," + (.8 - .004 * aBo) + ")", bb.dc = !0)
	}, this.tA = function() {
		var ef = Math.floor((at.a1 - a66) / 2),
			eh = Math.floor(.5 * (at.j7 - bY.gap - a58 - aBq));
		! function(title, eh, a6z, sP) {
			tB.fillStyle = aBt, aCA(eh, a6z, 1), tB.fill(), tB.fillStyle = aBs, aCA(eh, a6z, sP), tB.fill(), tB.strokeStyle = b7.mX, aCA(eh, a6z, 1), tB.stroke(),
				function(aCC, eh) {
					b6.pJ.textAlign(tB, 1), b6.pJ.textBaseline(tB, 1), tB.font = a3k, tB.fillStyle = b7.mX, tB.fillText(aCC, Math.floor(.5 * at.a1), Math.floor(eh + .58 * a58))
				}(title, eh)
		}(L(116), eh, 3, aBo / 100),
		function(ef, eh, a1, j7, a4z) {
			tB.fillStyle = b7.mS, tB.fillRect(ef, eh, a1, j7), tB.lineWidth = 3, tB.strokeStyle = b7.mX, tB.strokeRect(ef, eh, a1, j7);
			var eY = Math.floor(.3 * j7);
			b6.pJ.textAlign(tB, 1), b6.pJ.textBaseline(tB, 1), tB.font = b6.pJ.rF(0, eY), tB.fillStyle = b7.mX, tB.fillText(a4z, Math.floor(ef + a1 / 2), Math.floor(eh + j7 / 2 + .1 * eY))
		}(ef, eh + a58 + bY.gap, a66, aBq, L(22))
	}
}

function cL() {
	var zM = 0;
	this.dU = function() {
		aU.dU(), zM = 0
	}, this.setState = function(aCD) {
		zM = aCD
	}, this.zU = function() {
		return zM
	}, this.aCE = function() {
		this.setState(8), n.r()
	}, this.a0P = function(e) {
		if (!bO.ur) return !1;
		if (!(bb.ln < 400)) {
			if ("Enter" === e.key || "Escape" === e.key) {
				if (this.aCF()) return !0;
				if ("Enter" === e.key) {
					if (0 === zM) return !0;
					if (7 === zM) return !0
				}
			}
			return !1
		}
	}, this.aCG = function() {
		bV.resize()
	}, this.aCF = function() {
		return !!bV.qm()
	}, this.gm = function(ef, eh) {
		!bO.ur || bV.gm(ef, eh) || 6 === zM && aV.gm(ef, eh) || bU.gm(ef, eh) || aP.gm(ef, eh)
	}, this.zr = function(ef, eh) {
		!aP.a7B && aU.zr(ef, eh, !0) || aP.zr(ef, eh)
	}, this.click = function(ef, eh) {
		aP.a0G()
	}, this.zu = function(ef, eh, deltaY) {}, this.aCH = function() {
		aU.a7I(), bb.dc = !0
	}, this.tA = function() {
		8 !== zM && 10 !== zM && (tB.imageSmoothingEnabled = !0, this.wR(), 0 !== zM && (aP.tA(), aK.tA(), this.aCI(), bU.tA()), 0 !== zM && 6 === zM && aV.tA(), bV.tA(), n.tA())
	}, this.wR = function() {
		var aCK, aCJ;
		if (__fx.makeMainMenuTransparent) tB.clearRect(0, 0, at.a1, at.j7);
		else bO.ur ? (aCJ = at.a1 / bO.ej, aCK = at.j7 / bO.ek, tB.setTransform(aCJ = aCK < aCJ ? aCJ : aCK, 0, 0, aCJ, Math.floor((at.a1 - aCJ * bO.ej) / 2), Math.floor((at.j7 - aCJ * bO.ek) / 2)), tB.drawImage(bO.ut, 0, 0), tB.setTransform(1,
			0, 0, 1, 0, 0), tB.fillStyle = b7.mS) : tB.fillStyle = b7.mO, tB.fillRect(0, 0, at.a1, at.j7)
	}, this.aCI = function() {
		var eh = Math.floor(.3 * at.j7),
			canvas = aX.aCL("territorial.io"),
			hG = (hG = 1.75 * at.j7 / canvas.width) * canvas.width < .98 * at.a1 ? .98 * at.a1 / canvas.width : hG,
			ef = (tB.globalAlpha = .15, tB.imageSmoothingEnabled = !1, Math.floor(.5 * (at.a1 - hG * canvas.width))),
			ef = Math.floor(ef / hG),
			eh = Math.floor(eh - .5 * canvas.height * hG),
			eh = Math.floor(eh / hG);
		tB.setTransform(hG, 0, 0, hG, ef, eh), tB.drawImage(canvas, ef, eh), tB.setTransform(1, 0, 0, 1, 0, 0), tB.globalAlpha = 1, tB.imageSmoothingEnabled = !0
	}
}

function ck() {
	this.aAf = 0;
	var aCN, aCO, aCP, aCQ, aCR, aCS = this.aCM = 0;

	function aCW() {
		aCQ = aCR = null, aCS = 0
	}
	this.dU = function(qO, aAc, aAd) {
		n.r(), bk.zh(), aW.setState(10), aCQ = qO, aCR = aAc, aCS = aAd, this.aAf = qO.aAf, this.aCM = aAd, aCN = 0, aCO = bb.ln + 4500, aw.s.zZ > aw.s.aCT && (qO.za += aw.s.aCT), aw.s.za = qO.za, aw.s.zZ === qO.za ? (console.log("direct pass"),
			aCP = 0) : (console.log("delayed pass"), aw.s.close(aw.s.zZ, 3247), aCP = 2, aw.s.aC2(qO.za, 5) && aw.ng.aCU()), tB.imageSmoothingEnabled = !0, aW.wR();
		aAc = aX.aCL("loading"), aAd = (u.v.sU() ? .396 : .25) * at.pL / aAc.width;
		tB.setTransform(aAd, 0, 0, aAd, Math.floor((at.a1 - aAd * aAc.width) / 2), Math.floor((at.j7 - aAd * aAc.height) / 2)), tB.imageSmoothingEnabled = !1, tB.drawImage(aAc, 0, 0), tB.setTransform(1, 0, 0, 1, 0, 0)
	}, this.lE = function() {
		0 < aCP && bb.ln > aCO && (aCP--, aCO += 4500, 0 === bb.aCY) && 0 === bb.ja() && (0 === aCP && aw.s.za < aw.s.aCZ && (aw.s.za += aw.s.aCT), aw.s.aC2(aw.s.za, 5))
	}, this.aCa = function() {
		return 10 === aW.zU() && (bk.aAE.aAg(aCQ, aCR, aCS), aCW(), !0)
	}, this.aCb = function() {
		10 === aW.zU() && 2 <= ++aCN && (bk.aAE.aAg(aCQ, aCR, aCS), aCW())
	}
}

function cM() {
	var aCd, canvas, yc, aCe;

	function aCk(e0, name, aCl, p0) {
		yc[e0] = name, canvas[e0] = new Image, canvas[e0].onload = function() {
			! function(e0, aCl) {
				var a22, a23 = null;
				7 === aCl ? a22 = b6.a0d.a25 : 8 === aCl ? (a22 = b6.a0d.a28, a23 = .1) : 3 === aCl ? (a22 = b6.a0d.a26, a23 = .06) : 5 === aCl ? a22 = b6.a0d.a29 : 6 === aCl ? a22 = b6.a0d.a24 : 4 === aCl && (a22 = b6.a0d.a2A);
				canvas[e0] = b6.a0d.a21(canvas[e0], a22, a23)
			}(e0, aCl), aCn()
		}, canvas[e0].onerror = function(e) {
			console.error("Error loading image at index", e0, "Error:", e), aCn()
		}, canvas[e0].src = "data:image/png;base64," + p0
	}

	function aCn() {
		aCd--, aCh()
	}

	function aCh() {
		0 === aCd && (aCd = -1, aCj(), bb.dc = !0, canvas[7] = aCe, canvas[8] = aCe, canvas[9] = aCe, canvas[10] = aCe, 5 === n.rd) && n.aCp().aCq.resize()
	}

	function aCj() {
		aH.a3D(), bU.aA6([canvas[8], canvas[16], canvas[9], canvas[9], canvas[10]], [2 !== u.id, 1 !== u.id, !0, !0, !0]), af.uw = new wp, af.uw.dU(), aq.dV()
	}
	this.dU = function() {
		if (void 0 === canvas) {
			aCd = 23, canvas = new Array(aCd), yc = new Array(aCd), (aCe = document.createElement("canvas")).width = 1;
			for (var a7 = aCd - (aCe.height = 1); 0 <= a7; a7--) canvas[a7] = aCe;
			aCj(), aCk(0, "exit", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
					), aCk(1, "victory", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADYAAAAKAQMAAADFMz9IAAAABlBMVEUAAAD///+l2Z/dAAAASUlEQVQI12M4lvj+++efLQzHkoH0jxaGI+yMbcIcZxiOpEHoMyD6xx+GHBB9oIIhA0Q/MGCoSAfSBQYMBskP2z9bAOlEIC1hAADJYSFMvxXXTAAAAABJRU5ErkJggg=="), aCk(2, "defeat", 6,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aCk(3, "orders", 6,
					"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"
					), aCk(4, "crown", 4,
					"iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAIAAACw+wkVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIzVDE0OjA0OjQ3KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMi0yM1QxNDowNDo0NyswMzozMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ZmFkNDE3NC03OWNiLTUwNDgtYWIyMi04NThmMGExODUzZTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZDQ1NTIyYS02MDRlLWYxNDUtYWM3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"
					), aCk(5, "arena", 6, "iVBORw0KGgoAAAANSUhEUgAAACsAAAAKAQMAAAAXYzUQAAAABlBMVEUAAAD///+l2Z/dAAAARklEQVQI12OwqbdXOHyAoabe3uD4AYaURAOLYw4gygZE1dvpAKl/FXZq/g8Y/tUYGAOpY3kGxj4JDMfS7Q3PAKlke4MzCQCHpxoxsfTs8gAAAABJRU5ErkJggg=="),
				aCk(6, "territorial.io", 6,
					"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phjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZYrgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEwx3AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAphjuAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACBTDPcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkCmGewAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIFMM9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGSK4R4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMsVwDwAAAAAAAAAAAAAA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jz//+c+xZMmS+PWvfx3Lly9PnQXUssWLF8c3vvGN1BmZM3To0Jg1a1bqDBJp3rx5LF++PHbcccfUKZm2dOnS+PrXv546AwAAAAAAAAAAAACAWlYvdQAAAAAAAAAAAAAAAGxLRUVFcfzxx8fhhx8eBxxwQLRv3z6aNm2aOiuv7bDDDrHffvvFfvvtFyeddFJcddVVsWrVqnjppZdi8eLFcd9998Wrr76aOhMA8t7IkSON9uSAAw44II455piYP39+6hQAAAAAAAAAAAAAAGqR4R4AAAAAAAAAAAAAAPJe7969o0+fPtG9e/fo1KlTNGrUKHVSnVZQUBB77rln7LnnntG3b9+49NJL469//Ws899xz8cQTT8Ttt98eH330UepMAMg7/fv3T53APw0ZMsRwDwAAAAAAAAAAAABAHWe4BwAAAAAAAAAAAACAvNOyZcs49dRT49BDD41u3bpF8+bNUydlWkFBQbRp0ybatGkTJ554Ylx77bXxwgsvxJNPPhn33HNPLF26NHUiAOS83r17x9577506g3864ogjon79+rFhw4bUKQAAAAAAAAAAAAAA1BLDPQAAAAAAAAAAAAAA5IX9998/TjnllDj88MNj//33j3r1XBKfq0pKSuKggw6Kgw46KC688MJYtmxZPPnkk3HXXXfFU089lToPAHLSwIEDUyfwb5o2bRpnn312zJw5M3UKAAAAAAAAAAAAAAC1xKcUAQAAAAAAAAAAAADIWd26dYvBgwfHEUccER06dIiCgoLUSVRTQUFBdOjQITp06BDnnHNOrFixIhYsWBCzZ8+ORYsWpc4DgJzRs2fP1Al8QZ8+fQz3AAAAAAAAAAAAAADUYYZ7AAAAAAAAAAAAAADIKR06dIgzzzwzevfuHZ06dTLWU8e0adMmvve978XZZ58dr776asydOzdmzpwZK1asSJ0GAMkccsghsccee6TO4AsOOuig1AkAAAAAAAAAAAAAANSiwtQBAAAAAAAAAAAAAABQv379GD58eCxcuDD++Mc/xsiRI6Nz585Ge+qwgoKC2GeffWLEiBHx5z//OZ588sk477zzoqioKHUaAGx3/fr1S53AlygtLY3evXunzgAAAAAAAAAAAAAAoJbUSx0AAAAAAAAAsK3df//9sdtuu6XOAHLE9OnT44477kidwSaMGzfOgZR1wG233RYzZ85MnUEeuuWWW2KfffZJnUEVvffee16zAagVRx55ZJx99tlx1FFHRdOmTVPnkEj9+vWjV69e0atXrxg/fnw8/PDDMW3atHj++edTpwHAdtG9e/fUCWzC0UcfHfPmzUudAQAAAAAAAAAAAABALTDcAwAAAAAAANQ5Xbp0iT333DN1BpAjdt9999QJbMacOXOivLw8iouLU6ewFZo2bWq4h2rr2bNnDBw4MIqKilKnUEVXXHFF6gQA6pD69evHiBEj4uSTT479998/dQ45plmzZnHaaafFwIEDY8mSJTF79uy48cYbU2cBQK0ybpy7unbtmjoBAAAAAAAAAAAAAIBaUpg6AAAAAAAAAACA7HrxxRfjvvvuS53BVmrXrl2cddZZqTPIM6NGjTLak0dWrVoV48aNS50BQB3QsWPHuOWWW+Lvf/97TJ482WgPm1VUVBQHHXRQXH/99bFy5cqYMmVKlJaWps4CgG1u//33j2bNmqXOYBP23nvv1AkAAAAAAAAAAAAAANQSwz0AAAAAAAAAACQ1bty4WLduXeoMttK5556bOoE80rlz5zjmmGNSZ1AN11xzTVRUVKTOACCPHXPMMfHQQw/F888/H6eddprxFaptjz32iAsvvDBWrFgRs2fPjs6dO6dOAoBt5rDDDkudwGbstttu0bp169QZAAAAAAAAAAAAAADUAsM9AAAAAAAAAAAktXLlyrjjjjtSZ7CVunbtGv3790+dQZ4oKyuLBg0apM6gil588cWYNm1a6gwA8tSgQYNi8eLF8cgjj8Q3v/lN7wHYajvuuGMMGjQolixZEg8++GD07NkzdRIAbLX27dunTmALevTokToBAAAAAAAAAAAAAIBaYLgHAAAAAAAAAIDkxo4dG++//37qDLbSj370o9QJ5IFWrVrFcccdlzqDKtq4cWNceumlqTMAyEPf+9734oUXXojZs2fHN77xjSgoKEidRB1TXFwcxx57bDzxxBMxb968OPLII1MnAUCNfe1rX0udwBZ06tQpdQIAAAAAAAAAAAAAALXAcA8AAAAAAAAAAMmtWbMmbrrpptQZbKVevXpFr169UmeQ48rLy6NRo0apM6iixx9/PO6///7UGQDkkWHDhsUrr7wSN9xwQ+y3336pc8iAoqKiOProo2PevHmxYMECAz4A5KUWLVqkTmALvvrVr6ZOAAAAAAAAAAAAAACgFhju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FpLMnDkzmjZtmp1RdEpLS7MTAAAAAAAAAFhKDbIDAAAAAAAAAACgEAwdOjR23333qKioyE5hMcrKyuKUU06JX/ziF9kpNebggw822lPH3HDDDUZ7AOqhX//610Z7CtT8+fPj5ptvjr59+0ZVVVV2TkEZPnx4PPvss3HddddFx44ds3NYRj169Iju3bvH2LFjs1MAAChSO+ywQ/Ts2TM23njjWGeddWLNNdes80MFy2qVVVaJVVZZJbp06fKtf//ZZ5/FO++8E//6179izJgx8fjjj8f777+fVAnA8tS2bds46KCDomfPnrHRRhtFu3btspOW2P//eLbRRhvFvvvuGxdddFF88sknMW7cuBg7dmzcc889fucEAAAAAAAAAECdVBIR87MjAAAAAAAAAGrSv//971hzzTWzM4raBx98EGuvvXZ2BkCtu+yyy+K4447LzqAa5s6dG926dYu33347O6VGjB49Onr06JGdwQIfffRRdOrUKebNm5edAsASeu+99/w8W4Bmz54dQ4YMiUsvvTQ7paCVl5fHyJEjY/vtt89OYRndcMMNcdRRR2VnUEe89NJLsemmm2ZnFJ1+/frFddddl50BAMtdw4YNY++9946tt946unfvHuutt140b948O6vOmj9/fnz00Ucxbty4GDNmTDz22GPx4osvZmcBsJS6d+8eBx98cGy11VbRtWvXaNCgQXbScjdhwoR44YUX4vHHH4877rjD86mwnMycOTOaNm2anVF0SktLsxMAAAAAAAAAWEqGewAAAAAAAICCY7gnn+EeoFiVl5fHW2+9Fa1bt85OoRpuvvnmOPzww7Mzltmuu+4af/rTn7IzWMivf/3ruOSSS7IzAFhCBx98cNx8883ZGdSwKVOmxGGHHRaPPPJIdkrRuPTSS6N///5RVlaWncJS+vjjj2ONNdbIzqCOMNyTw3APAIWsd+/esdtuu8UWW2wRG2ywQTRp0iQ7qV77z3/+E6+99lq88MILMXLkyHj33XezkwBYhE6dOsWRRx4ZO+20U2ywwQZRUlKSnZTmyy+/jOeffz7uvffeuOmmm6Kqqio7CQqG4Z4chnsAAAAAAAAA6i/DPQAAAAAAAEDBMdyTz3APUMzOOuusGDJkSHYG1fDll19Gp06dYsqUKdkpy+Svf/1rbL311tkZLPDGG29Et27dsjMAWApPPvlkbLPN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ZwAAUIPatm0bd955Zzz22GPxk5/8JDuHeqisrCz22GOPGDNmTFx22WXRsGHD7CSAGtOtW7d45ZVXYu+9985OYRmsscYacffdd8dZZ52VnQIAAAAAAAAAQB1nuAcAAAAAAAAAAGrBxIkT45ZbbsnOoBp23nnn6NSpU3bG/zjyyCOzE1hg1KhR8dRTT2VnALAMDj744OwElkJlZWWccsopMWHChOwUatCbb74ZJ510UnzzzTfZKSzCLrvskp0AAEANOfPMM+ONN96IfffdNxo0aJCdQz3XvHnzOO644+Ktt96KQw45JDsHYJn16dMn/vKXv8QGG2yQnUINaNSoUQwZMiQefPBBI3MAAAAAAAAAAPwgwz0AAAAAAAAAAFBLBg0aFJ999ll2BouxwgorxODBg7MzvuWggw6KLl26ZGcQEbNnz46BAwdmZwCwjHr37p2dwFK46aab4tZbb83OYDm47bbb4qabbsrOYBG23HLL7AQAAJZR796947XXXoszzjgjVl555ewcCsxaa60VN910Uzz22GOx7rrrZucALJWBAwfGjTfeGKusskp2CjXs5z//ebz88sseowAAAAAAAAAA+F6GewAAAAAAAAAAoJbMmDEjbrjhhuwMqmHPPfeMli1bZmf8V//+/bMTWOC2226LN998MzsDgGWw0047xRprrJGdwRJ6/fXX4+ijj87OYDn61a9+FePHj8/O4Ad07NjRwaYAAPVU48aN4/e//338+c9/jm7dumXnUOC22267GD16dAwePDg7BWCJXHvttTFixIho1KhRdgrLSbdu3eKvf/1rbLXVVtkpAAAAAAAAAADUMYZ7AAAAAAAAAACgFg0dOjQmTpyYncFilJeX15lD5XbZZZfYdNNNszOIiM8++ywGDBiQnQHAMvrFL36RncASmjNnTvTv3z+qqqqyU1iOKisr45hjjok5c+Zkp/A9SkpKYu+9987OAABgCe2+++4xbty4OPzww6Nhw4bZORSJlVZaKc4+++x48cUXo2vXrtk5AItUWloa999/fxx55JFRUlKSncNy1rZt23jggQdin332yU4BAAAAAAAAAKAOMdwDAAAAAAAAAAC1qLKyMq644orsDKph//33j8aNG2dnxIknnuiQqDrimmuuienTp2dnALCMevXqlZ3AErrmmmvihRdeyM6gFjz77LNxzTXXZGfwA7ba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XFRVVWXnLFcnnHBC7LfffjF58uTsFBY44ogjshMAKDAbbLBBdgIAAAAAAAAAAAsx3AMAAAAAAAAAAEXq+uuvj9deey07A37QXXfdFW+88UZ2BgB1WIsWLbITWMg777yTnQAAALDM9t9//+wEFjJmzJjYcsst4/77789OqTX3339/bL311jFu3LjsFCKid+/e0axZs+wMAApIhw4dshMAAAAAAAAAAFhIg+wAAAAAAAAAAAAgz/nnnx933nlnlJSUZKfAt0ybNi0GDBiQnQFAHdapU6do2LBhdgYLGTt2bHYCAADAMtlyyy1jk002yc5ggbvuuisOPPDAqKqqyk6pdW+++WZsuumm8fDDD0evXr2yc4raSiutFP369YuLL744OwWoY6ZNmxZTp06NL774Ij7//PP46quvIiJi5syZ0bx584iIaNSoUZSXl8eKK64YK6+8cqy66qrRuHHjzGzqgDXWWCM7AQAAAAAAAACAhRjuAQAAAAAAAACAInb33XfHscceGz/96U+zU+Bbrr322pgyZUp2BgB12DrrrJOdwELmzJljuAcAAKj3jj76aEP3dcD8+fPjiiuuiBNPPDE7JdWcOXNiu+22i3vvvTd233337JyitsceexjugSJWVVUV77zzTvzrX/+KcePGxauvvhrPPPNMTJ8+famut/7668emm24a3bp1i/XWWy822GCDaN++ve9BishKK60U66+/frz55pvZKQAAAAAAAAAAhOEeAAAAAAAAAAAoemeffXY88sgjUVZWlp0CERExYcKEOOOMM7IzAKjjVl999ewEFvLZZ59lJwAAACyTsrKy2HHHHbMzit78+fPjnHPO8TviBaqqqmLPPfeMe+65J/baa6/snKK16aabRocOHeL999/PTgFqyaxZs+LFF1+Mxx9/PEaOHBkffvhhjV37zTff/J/Blg4dOsTee+8dvXv3jk033TRWWmmlGrsfdVPPnj0N9wAAAAAAAAAA1BGl2QEAAAAAAAAAAECuJ598Mh577LHsDPiviy++OCorK7MzAKjjVltttewEFjJlypTsBAAAgGVy5JFHRsuWLbMziprRnh+27777xiOPPJKdUbQaNmwYRx55ZHYGsJxVVVXFyy+/HKecckq0adMmtt9++7joootqdLTnh7z//vtx4YUXxg477BCtWrWKE044IZ599tn45ptvlvu9ydG5c+fsBAAAAAAAAAAAFjDcAwAAAAAAAAAAxJlnnhlff/11dgbEa6+9FldddVV2BgD1wKqrrpqdwEI+/fTT7AQAAIBlst9++2UnFL0LLrjAaM8PqKqqij322CNGjx6dnVK0dthhh+wEYDmZO3du3H///fGTn/wkNt988/jtb38bs2bNSuuZN29eXHHFFbH11ltHjx494rbbbouZM2em9bB8dOzYMTsBAAAAAAAAAIAFGmQHAAAAAAAAAAAA+caMGRP333+/gwlJNX/+/Dj77LOzMwCoJwz31C2GewAAgPqsXbt2scUWW2RnFLUbbrghBg0alJ1Rp82bNy/23HPPeO655xz2n6Br166x/vrrx5tvvpmdAtSQb775Jh588MEYNmxYjB8/Pjvne73++utx8MEHR7t27eKcc86JvffeO5o0aZKdRQ1o165ddgLV8Jvf/Cbuuuuu7Iwl9uijj0bjxo2zM4rO1ltvnZ1Qaz755JPsBAAAAAAAAIAaZbgHAAAAAAAAAACIiIihQ4fGLrvsEs2bN89OoUg9+eST8cADD2RnAFBPrLzyytkJLOTjjz/OTgAAAFhqRx99dDRq1Cg7o2g98sgjcdRRR2Vn1AuTJk2KQw45JB555JEoLy/PzikqZWVlcfjhh8eAAQOyU4Aa8OKLL8bAgQPj2WefzU6plokTJ8ahhx4al156afz2t7+Nn/3sZ9lJLKPVVlstO4FqmDBhQkyYMCE7Y4lVVVVlJxSl+vKYAgAAAAAAAMD/Ks0OAAAAAAAAAAAA6oZ333037rjjjuwMitTXX38dQ4YMyc4AoB5ZaaWVshNYyAcffJCdAAAAsNR22WWX7ISiNX78+Nh3332zM+qVF198MQYMGBDz58/PTik62223XXYCsIw+//zzOP300+MnP/lJvRxYeO2116JXr15x/PHHx+eff56dwzJo2bJllJWVZWcAAAAAAAAAABCGewAAAAAAAAAAgIUMGTIkpk2blp1BEbrnnnvilVdeyc4AoB5ZccUVsxNYyLvvvpudAAAAsFS6desW3bp1y84oSp9//nn06dMnZs2alZ1S71x77bUxcuTI7Iyi07Vr1+jUqVN2BrCUXn755fjJT34SF154YXbKMrvyyivjpz/9qedX67GysrLYYostsjMAAAAAAAAAAAjDPQAAAAAAAAAAwEKmTJkSf/jDH7IzKDJffPFFnH766dkZANQz5eXl2Qks5B//+Ed2AgAAwFI59NBDo6SkJDuj6MyfPz9OP/30eOONN7JT6q2+ffvG+++/n51RVMrKyuLggw/OzgCWUFVVVVx11VWx+eabx5tvvpmdU2PGjx8fW2yxRdx2223ZKSylzp07ZycAAAAAAAAAABCGewAAAAAAAABYDtZcc82oqqry4aPGPvbee+/s/62hqJxxxhnxySefZGdQRH7/+9/HxIkTszMAqGeaN2+encACc+bMialTp2ZnAAAALJVtt902O6Eo3XnnnXH99ddnZ9Rrs2bNipNOOikqKyuzU4pK7969sxOAJTBr1qw4/vjj47jjjstOWS6qqqri4IMPjnPOOcfjQT209tprZycAAAAAAAAAABCGewAAAAAAAAAAgO+YM2dOXHPNNdkZFImPP/44hgwZkp0BQD1kuKfumD59enYCAADAUunWrVtssMEG2RlF54MPPoijjjoqO6MgPPTQQ3HvvfdmZxSV7t27R3l5eXYGUA3Tpk2L/fffP66++urslOVu6NChMWDAgPjmm2+yU1gC7du3z04AAAAAAAAAACAM9wAAAAAAAAAAAN/jvPPOi/feey87gyJw6aWXxpw5c7IzAKhnWrRoEY0aNcrOYIEZM2ZkJwAAACyVQw89NEpKSrIzikplZWWceuqpMWvWrOyUgtG/f/+YMmVKdkbRaNy4cRxwwAHZGcBifPrpp7HHHnvEww8/nJ1Sa37729/G4MGDo7KyMjuFamrVqlV2AgAAAAAAAAAAYbgHAAAAAAAAAAD4HlVVVXHJJZdkZ1Dg/vnPf8bFF1+cnQFAPdShQ4fsBBYybdq07AQAAIClss0222QnFJ377rsv7rnnnuyMgjJ16tS46qqrsjOKSq9evbITgEWYPHly7LXXXvH8889np9S63/zmN3HeeedlZ1BNLVq0yE4AAAAAAAAAACAM9wAAAAAAAAAAAD/g6quvjjfeeCM7gwI2YsSI7AQA6qlVV101O4GFTJ8+PTsBAABgiXXo0CE22GCD7IyiMm3atDjppJOyMwrSiBEj4u23387OKBo9evTITgB+wPTp0+Oggw6KF198MTslzRlnnBG33XZbdgbVsMoqq2QnAAAAAAAAAAAQhnsAAAAAAAAAAIBFOP/887MTKFDPPPNM3HXXXdkZANRTK6+8cnYCC5k2bVp2AgAAwBI75JBDoqysLDujqFxxxRXxySefZGcUpKqqqvjtb3+bnVE01lprrejWrVt2BvAdX3/9dfTr1y+efPLJ7JR0hx56aIwePTo7g8WoqKjITgAAAAAAAAAAIAz3AAAAAAAAAAAAi3DHHXfEiy++mJ1Bgfnmm2/ijDPOyM4AoB5zmF3dMnXq1OwEAACAJbbNNttkJxSV9957L84+++zsjIJ23XXXxfjx47MzisY+++yTnQB8x9ChQ2PkyJHZGXVCVVVVHHroofHZZ59lp7AI5eXlUV5enp0BAAAAAAAAAFD0DPcAAAAAAAAAAACLdNZZZ0VVVVV2BgXkwQcfjOeeey47A4B6zEF2dcuMGTOyEwAAAJZI48aNo3v37tkZReXiiy/2XEMtuPrqq7MTisaWW26ZnQAs5K677orf/OY32Rl1yttvvx2nn356zJ8/PzuFRdhwww2zEwAAAAAAAAAAip7hHgAAAAAAAAAAYJEee+yxePLJJ7MzKBAzZ86MgQMHZmcAUM+ttNJK2QksZPr06dkJAAAAS+Sggw6Kpk2bZmcUjfHjx8fvfve77IyicPXVV8eECROyM4pC9+7do7TUW/WhLhg3blwccsgh2Rl10h/+8Id46KGHsjNYhLXXXjs7AQAAAAAAAACg6Hk1IAAAAAAAAAAAsFjDhg2LefPmZWdQAP74xz/Gu+++m50BQD234oorZiewkM8//zw7AQAAYIlsu+222QlF5fLLL89OKCq33XZbdkJRKC8vj7322is7A4re7Nmz4+ijj/Zc9iIce+yxMXXq1OwMfkDLli2zEwAAAAAAAAAAip7hHgAAAAAAAAAAYLFGjx4df/rTn7IzqOc+/fTTGDRoUHYGAAWgadOm2QksZNq0adkJAAAAS2SzzTbLTiga77zzTlx33XXZGUXlN7/5TcyYMSM7oyhsvfXW2QlQ9C655JJ48cUXszPqtIkTJ8YVV1yRncEPWHnllbMTAAAAAAAAAACKnuEeAAAAAAAAAACgWgYPHhyzZ8/OzqAeu/LKKx0WCECNaNiwYXYCC5k8eXJ2AgAAQLV179491lxzzeyMonHLLbdkJxSdGTNmxBNPPJGdURQ22mij7AQoaq+99loMHTo0O6NeGDFiRLz11lvZGXyPioqK7AQAAAAAAAAAgKJnuAcAAAAAAAAAAKiWt99+O0aOHJmdQT319ttvx3nnnZedAUCBWHHFFbMTWMjEiROzEwAAAKptzz33zE4oGlOnTo2LLrooO6Mo/f73v89OKAqdO3fOToCiNW/evDjllFOyM+qNqqqquOSSS7Iz+B4rr7xydgIAAAAAAAAAQNEz3AMAAAAAAAAAAFTboEGDYvr06dkZ1EMXXHBBVFVVZWcAUCAaNGiQncAC8+fPjw8//DA7AwAAoNo233zz7ISi8eCDD8acOXOyM4rSo48+Gu+88052RsGrqKiIXr16ZWdAUbrzzjvjqaeeys6oV6677roYP358dgbfUV5enp0AAAAAAAAAAFD0DPcAAAAAAAAAAADVNmnSpLj55puzM6hnXnrppbjxxhuzMwAoII0bN85OYIGvvvoqOwEAAGCJbLTRRtkJRaGqqiquvvrq7Iyi9vjjj2cnFIXevXtnJ0DRmT59egwcODA7o1668sorsxP4DsM9AAAAAAAAAAD5DPcAAAAAAAAAAABLZMiQIfHpp59mZ1BPVFZWxrBhw7IzACgwTZs2zU5ggXnz5mUnAAAAVNu2224bLVq0yM4oCmPHjo2xY8dmZxS1m2++OebPn5+dUfC6d++enQBF54YbbohPPvkkO6Ne+t3vfhcffPBBdgYLWXHFFbMTAAAAAAAAAACKnuEeAAAAAAAAAABgicyaNSuuvfba7AzqiUceeSSeeOKJ7AwACkxpqZdB1xWGewAAgPpk2223zU4oGg888EB2QtEbM2ZMvP3229kZBW+DDTbIToCi8umnn8YZZ5yRnVGv3XHHHdkJLGSFFVbITgAAAAAAAAAAKHresQoAAAAAAAAAACyxs846KyZMmJCdQR03e/bsGDRoUHYGAAWoefPm2Qks8NVXX2UnAAAAVFv37t2zE4rCV199FVdffXV2BhHx/PPPZycUvHbt2sW6666bnQFF44477og5c+ZkZ9Rrl19+ecyePTs7gwWaNWuWnQAAAAAAAAAAUPQM9wAAAAAAAAAAAEusqqoqLrvssuwM6rg77rgjxo0bl50BACxHlZWV2QkAAADV1rlz5+yEovDyyy/H9OnTszOIiAcffDA7oeCVlJTETjvtlJ0BReHzzz+PM888Mzuj3ps0aVI8/fTT2Rks0LBhw+wEAAAAAAAAAICiZ7gHAAAAAAAAAABYKpdddlmMHz8+O4M66rPPPotBgwZlZwBQoMrKyrITWGD27NnZCQAAANXSpUuXaNu2bXZGUXjkkUeyE1hg1KhRMW3atOyMgrfhhhtmJ0BRePDBB2PGjBnZGQXhzjvvzE5ggUaNGmUnAAAAAAAAAAAUPcM9AAAAAAAAAADAUrvggguyE6ijrrvuupgyZUp2BgAFqnHjxtkJLDBv3rzsBAAAgGrZaaedshOKwrx58+KPf/xjdgYL+fvf/56dUPDWW2+97AQoePPmzYvf/va32RkF49Zbb43JkydnZxARTZs2zU4AAAAAAAAAACh6hnsAAAAAAAAAAICldsstt8To0aOzM6hj/v3vf8ewYcOyMwCAWjB37tzsBAAAgGrp0aNHdkJReOONN2LSpEnZGSzE8zjLX4cOHbIToOD97W9/i3HjxmVnFJRnnnkmO4GIaNCgQXYCAAAAAAAAAEDRM9wDAAAAAAAAAAAsk3POOSfmz5+fnUEdcvHFF0dlZWV2BgAFrFGjRtkJAAAA1DNdu3bNTigKL7zwQnYC3/HYY49lJxS81q1bR/v27bMzoKDdcccd2QkFZ9SoUdkJhOc7AAAAAAAAAADqAsM9AAAAAAAAAADAMhk1alT89a9/zc6gjnj11Vfj6quvzs4AoMA1bNgwO4EFjPUBAAD1QUVFRXTs2DE7oyg88sgj2Ql8x7PPPhszZszIzihoJSUlsd1222VnQMH69NNP4/e//312RsG5/fbb48svv8zOICLWWmut7AQAAAAAAAAAgKJmuAcAAAAAAAAAAFhmw4cPj2+++SY7g2RVVVUxYsSI7AwAoBZ99dVX2QkAAACLtccee0SDBg2yMwreF198YbinjnrzzTezEwreRhttlJ0ABeuvf/1rVFVVZWcUnMrKynj11VezM4jwfSoAAAAAAAAAQDLDPQAAAAAAAAAAwDJ7/vnn4+GHH87OINmTTz4ZDz74YHYGAAAAAMC3bLzxxtkJReGNN97ITuAHjB8/Pjuh4K2//vrZCVCw7r777uyEgjV69OjsBAAAAAAAAAAASGe4BwAAAAAAAAAAqBFDhw6NOXPmZGeQZO7cuTFkyJDsDAAAAACA/2FQo3b8/e9/z07gBxhVWv46duyYnQAF6ZNPPokHHnggO6NgPfTQQ9kJAAAAAAAAAACQznAPAAAAAAAAAABQI8aNGxd33313dgZJ7r777hgzZkx2BgAAAADA/+jUqVN2QlEYPXp0dgI/4IUXXshOKHhrrLFGNGzYMDsDCo6/v5avF154ISZPnpydUfRWXHHF7AQAAAAAAAAAgKJmuAcAAAAAAAAAAKgxb731VnYCCaZPnx6DBg3KzgAAAAAA+B/NmjWLNdZYIzuj4H3zzTfx0EMPZWfwA0aPHh2zZs3KzihoZWVl0bNnz+wMKDiPP/54dkLBe/PNN7MTip7hHgAAAAAAAACAXIZ7AAAAAAAAAACAGlFWVhb9+vXLziDBCy+8EBMnTszOAKCINGnSJDuBBWbOnJmdAAAAsEjbb799NGjQIDuj4H300UcxY8aM7AwWwe/xl7+NNtooOwEKyuzZs+Pmm2/Ozih4b7zxRnYCAAAAAAAAAACkMtwDAAAAAAAAAADUiDPPPDPatWuXnUGC3r17R/fu3bMzAIAEK6ywQnYCAADAIvXo0SM7oSi8//772QkshuGe5a9Tp07ZCVBQxo0bF/PmzcvOKHgvv/xydgIAAAAAAAAAAKQy3AMAAAAAAAAAACyzZs2aRd++fbMzSLLCCivE2WefnZ0BQBH56quvshNYoGHDhtkJAAAAi9S5c+fshKLw9ttvZyewGB9++GF2QsFba621shOgoLz66qvZCUXhiSeeiPnz52dnAAAAAAAAAABAGsM9AAAAAAAAAADAMjv77LOjdevW2Rkk2mGHHWKHHXbIzgAAAAAA+JZOnTplJxSFf/3rX9kJLIbhnuWvffv22QlQUJ566qnshKIwadKk+PTTT7MzAAAAAAAAAAAgjeEeAAAAAAAAAABgmbRs2TIOO+yw7AySlZaWxrBhw7IzAAAAAAC+Ze21185OKAr/+Mc/shNYjA8++CA7oeCtttpq2QlQMObOnRsPPvhgdkbRmDBhQnYCAAAAAAAAAACkMdwDAAAAAAAAAAAskxEjRkRFRUV2BnXA5ptvbsQJAAAAAKgzevToEU2aNMnOKHjffPNN/O1vf8vOYDHeeuut7ISCt8oqq0T79u2zM6AgvPfeezFv3rzsjKLx73//OzsBAAAAAAAAAADSGO4BAAAAAAAAAACW2lprrRV9+vTJzqAOOe2007ITAIBa1KBBg+wEAACAH7TxxhtnJxSFTz/9NCorK7MzWIwxY8bE/PnzszMK3uabb56dAAXhX//6V3ZCUfnggw+yEwAAAAAAAAAAII3hHgAAAAAAAAAAYKmdffbZ0bx58+wM6pD1118/Tj311OwMAKCWNG7cODsBAADgB6233nrZCUVhypQp2QlUw7x58+LLL7/Mzih4/t6BmjF+/PjshKLyzjvvZCcAAAAAAAAAAEAawz0AAAAAAAAAAMBS6dKlS/ziF7/IzqAOOv744x3iD8ByNW/evOwEAAAA6oEOHTpkJxSFyZMnZydQTTNmzMhOKHjt2rXLToCCMHbs2OyEovL3v/89OwEAAAAAAAAAANIY7gEAAAAAAAAAAJbK8OHDjbPwvVZfffU466yzsjMAKGBff/11dgILlJZ6SToAAFB3GdCoHYZ76o/p06dnJxS8Nm3aZCdAvVdZWRlPPvlkdkZRee211+Kbb77JzgAAAAAAAAAAgBTeJQkAAAAAAAAAACyxzTbbLHbdddfsDOqwvn37OpwOAIpA06ZNsxMAAAB+0BprrJGdUBSmTJmSnUA1zZw5Mzuh4LVq1So7Aeq9//znPzFr1qzsjKIzderU7AQAAAAAAAAAAEhhuAcAAAAAAAAAAFhiw4YNi4YNG2ZnUIdVVFTEeeedl50BQIGaM2dOdgIL+J4QAACoq8rLy2PVVVfNzigK06ZNy06gmgxhLH/+3oFl95///Cc7oSgZ7gEAAAAAAAAAoFgZ7gEAAAAAAAAAAJbItttuG9tvv312BvXAvvvuG126dMnOAKAAVVZWZiewQKNGjbITAAAAvtdWW20VpaXeRlsbJk+enJ1ANRnuWf5atmyZnQD13sSJE7MTipIhPgAAAAAAAAAAilWD7AAAAAAAAAAAAKB+GTp0qMMOqZYmTZrEOeecE7vvvnt2CgCwnDRu3Dg7AQAA4HsZFa89PXv2jA4dOmRnUA1t27bNTih45eXlUVFREdOnT89OgXrro48+yk4oSv7eAgAAAAAAAACgWBnuAQAAAAAAAAAAqm3PPfeMnj17ZmdQj+y8887Rq1eveOqpp7JTACggM2fOzE5ggbKysuwEAACA77XWWmtlJxSNgw8+ODsB6pQePXrEE088kZ0B9dbEiROzE4rS1KlTsxMAAAAAAAAAACBFaXYAAAAAAAAAAABQf5x++ulRUlKSnUE9UlZWFsOHD8/OAKDAVFVVZSewQNOmTbMTAAAAvtdqq62WnQAUqY4dO2YnQL320UcfZScUpenTp2cnAAAAAAAAAABACsM9AAAAAAAAAABAtRx88MHRo0eP7AzqoZ49e0afPn2yMwAoILNnz85OYIEGDRpkJwAAAHyvVq1aZScARapdu3bZCVCvvf3229kJRWnGjBnZCQAAAAAAAAAAkMJwDwAAAAAAAAAAUC2nnXZadgL12MCBA7MTACggc+fOzU5ggUaNGkWzZs2yMwAAAP7Hqquump0AFKmWLVtmJ0C99o9//CM7oShNnz49OwEAAAAAAAAAAFIY7gEAAAAAAAAAABarf//+scEGG2RnUI916dIlTjzxxOwMAArEvHnzshNYSIcOHbITAAAA/ofhDCBLRUVFdgLUWzNnzozKysrsjKJkuAcAAAAAAAAAgGJluAcAAAAAAAAAAFik0tLSOOGEE7IzKAAnnnhilJWVZWcAUAC+/PLL7AQW0qZNm+wEAACAb6moqIjy8vLsDKBIGe6BpTdz5szshKLl9+4AAAAAAAAAABQrwz0AAAAAAAAAAMAinXrqqdGpU6fsDApA+/bt46yzzsrOAKAAzJs3LzuBhay66qrZCQAAAN/So0eP7ASgiK288srZCVBvGY8BAAAAAAAAAABqm+EeAAAAAAAAAADgB5WVlUX//v2zMyggRx11VLRs2TI7A4B6bvbs2dkJLGSVVVbJTgAAAPiWjh07ZicARay8vDw7AeqtuXPnZicULaNJAAAAAAAAAAAUK8M9AAAAAAAAAADADxo+fHi0a9cuO4MC0qJFixgxYkR2BgD1nAME65aKiorsBAAAgG9p3759dgJQxAz3wNIz2p7nq6++yk4AAAAAAAAAAIAUhnsAAAAAAAAAAIDvVV5eHkcccUR2BgXowAMPjHXXXTc7A4B67IsvvshOYCErrbRSdgIAAMC3rLbaatkJQBFbccUVsxOg3jIeAwAAAAAAAAAA1DbDPQAAAAAAAAAAwPc688wzo3Xr1tkZFKCmTZvGeeedl50BQD02Y8aM7AQWUlFRkZ0AAADwLS1btsxOAIpYs2bNonHjxtkZUC9VVlZmJxStyZMnZycAAAAAAAAAAEAKwz0AAAAAAAAAAMD/aNmyZRx22GHZGRSwXXfdNXr27JmdAUA9NX369OwEFrLKKqtkJwAAAHxLeXl5dgJQ5Dp37pydALBEvvnmm+wEAAAAAAAAAABIYbgHAAAAAAAAAAD4HyNGjIiKiorsDApYw4YN46yzzsrOAKCemjZtWnYCC2nRokV2AgAAwLestNJK2QlAkVtttdWyE6Bemj17dnYCAAAAAAAAAABQZAz3AAAAAAAAAAAA39KhQ4fo06dPdgZF4Gc/+1nstdde2RkA1ENTp07NTmAhBh8BAIC6xnAPkK158+bZCVAvVVVVZScAAAAAAAAAAABFxnAPAAAAAAAAAADwLcOHD3eYGLWipKQkBg8enJ0BQD30/vvvZyewEAdiAwAAdU15eXl2AlDk/L4EAAAAAAAAAAAA6gfDPQAAAAAAAAAAwH916dIl9t577+wMisjGG28cxxxzTHYGAPXM1KlT4+uvv87OYIGKiorsBAAAgG9ZccUVsxOAIme4BwAAAAAAAAAAAOoHwz0AAAAAAAAAAMB/nXXWWbHCCitkZ1Bkfv3rX0dpqZezAbBkZs6cmZ3AAg7EBgAA6pIOHTpEWVlZdgZQ5Jo1a5adAAAAAAAAAAAAAFSDkw4AAAAA+P/Y+/M4r+t6//9/zIwIIY64gOZCJJw0RUvDT0ckjiZW6DE1TUtTE7T0gFKoiArDNoC4JW65YLmhx31JIxWVECnREI6KuKMhgQgiAoIww++f8+trHkZnYGYe75n39Xq58M8s79dtvIwwy+v9vAMAAABARETsu+++ccghh2RnUIS++tWvRkVFRXYGAE2M4Z7CUVZWFl26dMnOAAAAiIiITp06ZScAROvWrbMTAAAAAAAAAAAAgFow3AMAAAAAAAAAAEREREVFRbRo0SI7gyJ16qmnRnl5eXYGAE3IsmXLshP4lK997WvZCQAAABER8eUvfzk7ASA222yz7AQAAAAAAAAAAACgFgz3AAAAAAAAAAAA0bNnzzjooIOyMyhi7du3j9GjR2dnANCEfPTRR9kJfMrOO++cnQAAABAREe3atctOAIg2bdpkJwAAAAAAAAAAAAC1YLgHAAAAAAAAAACIIUOGRGmp24nIdcIJJzj0H4Ba+/DDD7MT+JQdd9wxOwEAACAiItq2bZudABBf+tKXshMAAAAAAAAAAACAWnDSBgAAAAAAAAAAFLkjjjgiunfvnp0B0aZNmxg1alR2BgBNxAcffJCdwKd8+ctfzk4AAACIiIjWrVtnJwAY7gEAAAAAAAAAAIAmwnAPAAAAAAAAAAAUuUGDBkVJSUl2BkRExI9+9KPYZ599sjMAaAIWLVqUncCnbLfddtkJAAAAEWG4BygMhnsAAAAAAAAAAACgaTDcAwAAAAAAAAAARez44483kkJBadGiRVRWVmZnANAELF68ODuBT2nfvn12AgAAQEREtGnTJjsBAAAAAAAAAAAAAGgiDPcAAAAAAAAAAEARGzhwYHYC/B8HHnhgHHroodkZABS4+fPnZyfwKVtvvXV2AgAAQEREtG7dOjsBAAAAAAAAAAAAAGgiDPcAAAAAAAAAAECR6tu3b+y+++7ZGfB/lJaWxpAhQ7IzAChwhnsKy9Zbbx3l5eXZGQAAAPGlL30pOwEgNt100+wEAAAAAAAAAAAAoBYM9wAAAAAAAAAAQBEqLS2N/v37Z2dAjbp27Rp9+vTJzgCggL322mvZCXxKSUlJ7LffftkZAAAAhnuAgmC4BwAAAAAAAAAAAJoGwz0AAAAAAAAAAFCEzj777OjcuXN2BnyugQMHRmmp29wAWL/XX3891qxZk53Bp+y+++7ZCQAAAIZ7AAAAAAAAAAAAAIBac6IBAAAAAAAAAAAUmbKysujbt292Bnyhf/u3f4tBgwZlZwBQwBYvXpydwKd06tQpOwEAACBat26dnQAAAAAAAAAAAAAANBGGewAAAAAAAAAAoMgMHz48dtxxx+wMqJV+/fpFq1atsjMAKFBLlizJTuBTvvKVr2QnAAAARMuWLbMTAKJFixbZCQAAAAAAAAAAAEAtGO4BAAAAAAAAAIAiUl5eHn369MnOgFrbbrvt4oILLsjOAKBALV68ODuBTzEOCQAAFIJNN900OwHAiBgAAAAAAAAAAAA0EYZ7AAAAAAAAAACgiAwbNiy23Xbb7AyokxNPPNEQAADrtXDhwuwEPmW77bbLTgAAAAAAAAAAAAAAAAAAqDXDPQAAAAAAAAAAUCTatWsXP//5z7MzoM622GKLGDNmTHYGAAXovffey07gU7bZZhtjewAAQLpNNtkkOwEAAAAAAAAAAAAAaCIM9wAAAAAAAAAAQJGorKyMtm3bZmfABjnqqKNir732ys4AoMD8/e9/z07gMw444IDsBAAAoMi1bNkyOwEAAAAAAAAAAAAAaCIM9wAAAAAAAAAAQBHYeeed46c//Wl2Bmywli1bxsiRI7MzACgwb775ZnYCn7HnnntmJwAAAAAAAAAAAAAAAAAA1IrhHgAAAAAAAAAAKALDhw+PNm3aZGfARvnBD34Q3//+97MzACggL7zwQnYCn/G1r30tOwEAAAAAAAAAAAAAAAAAoFYM9wAAAAAAAAAAQDPXpUuXOOqoo7IzYKOVlpZGRUVFdgYABWTOnDmxatWq7Aw+pVOnTtkJAABAkSsrK8tOAAAAAAAAAAAAAACaCMM9AAAAAAAAAADQzI0YMSJatmyZnQH1Yt99943jjz8+OwOAAvLee+9lJ/ApHTp0yE4AAACKnJ+HAwAAAAAAAAAAAAC1ZbgHAAAAAAAAAACasX333TcOOeSQ7AyoV+eee252AgAFZNGiRdkJfEqbNm2ia9eu2RkAAAAAAAAAAAAAAAAAAF/IcA8AAAAAAAAAADRjFRUV0aJFi+wMqFe77rprnHXWWdkZABSI+fPnZyfwGT169MhOAAAAAAAAAAAAAAAAAAD4QoZ7AAAAAAAAAACgmerZs2ccdNBB2RnQIM4444xo1apVdgYABeDtt9/OTuAz9t577+wEAAAAAAAAAAAAAAAAAIAvZLgHAAAAAAAAAACaqSFDhkRpqVuEaJ523HHHGDFiRHYGAAXgzTffzE7gM77+9a9nJwAAAAAAAAAAAAAAAAAAfCGncgAAAAAAAAAAQDN0xBFHRPfu3bMzoEH16dMn2rVrl50BQLKXXnopO4HP6Ny5c3YCAAAAAAAAAAAAAAAAAMAX2iQ7AAAAAAAAAIDmp6qqKj744IPsDJqRVatWZSdAkzNo0KAoKSnJzoAGteWWW8aFF14YJ510UnYKAImmTZsW1dXVUVpamp3C/9p8883jgAMOiCeffDI7BQAAAAAAAAAAAAAAAACgRoZ7AAAAAAAAAKh38+bNi69+9avZGQBF6/jjj4999tknOwMaxY9//OO45JJL4sUXX8xOASDJihUr4v3334/27dtnp/ApPXr0MNwDAACkWL16dbRu3To7AwAAAAAAAAAAAABoAkqzAwAAAAAAAAAAgPo1cODA7ARoNK1bt47KysrsDACSvfvuu9kJfMaee+6ZnQAAABSpqqqq7AQAAAAAAAAAAAAAoIkw3AMAAAAAAAAAAM1I3759Y/fdd8/OgEZ1yCGHxAEHHJCdAUCit99+OzuBz/jGN76RnQAAAAAAAAAAAAAAAAAA8LkM9wAAAAAAAAAAQDNRWloa/fv3z86ARldWVhZDhw7NzgAg0euvv56dwGd89atfjQ4dOmRnAAAAAAAAAAAAAAAAAADUaJPsAAAAAAAAAAAAoH6cffbZ0blz5+wMSNGjR4845phj4o477shOASDBK6+8kp3AZ5SUlMQRRxwR48aNy06hyBx00EExYcKE7Iyic99998Uvf/nL7AwAgIiIWL16dXYCAAAAAAAAAAAAANBEGO4BAAAAAAAAAIBmoKysLPr27ZudAanOP/98wz0ARerpp5/OTmA9unXrZriHRrfHHnvENttsk51RdL70pS9lJwAA/NPatWuzEwAAAAAAAAAAAACAJqI0OwAAAAAAAAAAANh4w4cPjx133DE7A1J16dIlzjjjjOwMABLMmTMnPvroo+wMPmPPPffMTqAIdezYMTuhKPk7GAAAAAAAAAAAAAAAAGiKDPcAAAAAAAAAAEATV15eHn369MnOgIIwYMCAKCsry84AIMHf//737AQ+o3PnzrHddttlZ1Bkdtppp+yEorRq1arsBACAf/rkk0+yEwAAAAAAAAAAAACAJsJwDwAAAAAAAAAANHHDhg2LbbfdNjsDCkKHDh1ixIgR2RkAJHjjjTeyE/iMsrKy+MlPfpKdQZHZYYcdshOK0urVq7MTAAD+yaggAAAAAAAAAAAAAFBbhnsAAAAAAAAAAKAJa9euXfz85z/PzoCCcsopp8TWW2+dnQFAI3vllVeyE1iP/fffPzuBItOhQ4fshKK0dOnS7AQAgH/6+OOPsxMAAAAAAAAAAAAAgCbCcA8AAAAAAAAAADRhlZWV0bZt2+wMKCjbbLNNjB49OjsDgEY2a9as7ATWo2vXrtkJFJHtt98+2rVrl51RlD744IPsBACAf1q5cmV2AgAAAAAAAAAAAADQRBjuAQAAAAAAAACAJmrnnXeOn/70p9kZUJCOO+646Ny5c3YGAI3oySefjHXr1mVn8Bnbb7999OjRIzuDIrH//vtHSUlJdkZRev/997MTAAD+6eOPP85OAAAAAAAAAAAAAACaCMM9AAAAAAAAAADQRA0fPjzatGmTnQEFqXXr1nHBBRdkZwDQiObPnx/vvfdedgbrcfjhh2cnUCT22GOP7ISitWjRouwEAIB/WrVqVXYCAAAAAAAAAAAAANBEGO4BAAAAAAAAAIAmqEuXLnHUUUdlZ0BBO/TQQ6N79+7ZGQA0ojfffDM7gfXo1q1bdgJFokuXLtkJReudd97JTgAA+KeVK1dmJwAAAAAAAAAAAAAATYThHgAAAAAAAAAAaIJGjBgRLVu2zM6AgtaiRYsYPnx4dgYAjejll1/OTmA9vvGNb0S7du2yMygCu+yyS3ZCUVq7dq3hHgCgoCxfvjw7AQAAAAAAAAAAAABoIgz3AAAAAAAAAABAE7PvvvvGIYcckp0BTcL+++8fRxxxRHYGAI1k5syZ2QmsR8uWLeOkk07KzqCZKy8vj44dO2ZnFKWPPvooOwEA4F+sXLkyOwEAAAAAAAAAAAAAaCIM9wAAAAAAAAAAQBNTUVERLVq0yM6AJqGkpCQGDx6cnQFAI3niiSeyE6hBr169shNo5v7zP/8zNtlkk+yMovTBBx9kJwAA/IuPP/44OwEAAAAAAAAAAAAAaCIM9wAAAAAAAAAAQBPSs2fPOOigg7IzoEnZa6+94tRTT83OAKARzJ49OxYvXpydwXp07do1Nttss+wMmrH99tsvO6FoLVu2LDsBAOBfLFmyJDsBAAAAAAAAAAAAAGgiNskOAAAAAAAAAAAAam/IkCFRWlqanQFNzllnnRXXXXddVFdXZ6cA0MBef/312HrrrbMz+IzNNtssevfuHVdccUV2Cs3Ut771reyEovXBBx9kJwAA/ItFixZlJxSVN954Ix599NHsDCg48+fPz04AAAAAAAAAAAAAasFwDwAAAAAAAAAANBFHHHFEdO/ePTsDmqSdd945hgwZEsOHD89OAaCBvfjii/Htb387O4P16NWrl+EeGkRZWVnsvvvu2RlFy8H4AECh+cc//pGdUFTefvvt6Nu3b3YGAAAAAAAAAAAAAGyQ0uwAAAAAAAAAAACgdgYNGhQlJSXZGdBknXbaaVFeXp6dAUADe/bZZ7MTqEH37t1js802y86gGTriiCN8biVasGBBdgIAwL94/fXXsxMAAAAAAAAAAAAAgCbCcA8AAAAAAAAAADQBxx9/fOyzzz7ZGdCktW/fPkaNGpWdAUADe+ihh2LdunXZGaxHmzZtom/fvtkZNEPf/e53sxOK2vz587MTAAD+xdy5c6Oqqio7AwAAAAAAAAAAAABoAgz3AAAAAAAAAABAEzBw4MDsBGgWTjzxxOjYsWN2BgANaP78+fHOO+9kZ1CDww47LDuBZmi//fbLTihq8+bNy04AAPg/Pvroo+wEAAAAAAAAAAAAAKAJMNwDAAAAAAAAAAAFrl+/frH77rtnZ0Cz0KZNmxg9enR2BgANbM6cOdkJ1GCfffaJzp07Z2fQjHTo0CG+/vWvZ2cUtZdeeik7AQDg/1i2bFl2AgAAAAAAAAAAAADQBBjuAQAAAAAAAACAAlZaWhr9+/fPzqAGS5cujffff/9f/qxduzY7iy/wox/9KPbZZ5/sDAAa0MyZM7MTqMEmm2wSp556anYGzchPf/rT2GSTTbIzitbq1atj1qxZ2RkAAP/Hhx9+mJ0AAAAAAAAAAAAAADQBhnsAAAAAAAAAAKCAnX322dGpU6fsDNZj8eLFsfPOO0f79u3/5c/NN9+cncYX2HTTTWPkyJHZGQA0oMcffzw7gc9xyCGHZCfQjPTs2TM7oagtWrQoOwEAYL0M9zSeNm3aZCcAAAAAAAAAAAAAwAYz3AMAAAAAAAAAAAWqrKws+vXrl51BDW688cZYunTp/3l5RUXFel9OYenZs6fRAIBmbNKkSQ5pLmC77LJLHHbYYdkZNAObbbZZ/Pu//3t2RlFbsGBBdgIAwHotW7YsO6FolJZ6qjIAAAAAAAAAAAAATZe7YQEAAAAAAAAAoECNGDEidthhh+wM1mPhwoUxZMiQ9b5u/vz5cfvttzdyEXVVWloaQ4cOzc4AoAG99NJL2Ql8jpNPPjk7gWbg5JNPjs022yw7o6j94x//yE4AAFiv9957LzuhaLRu3To7AQAAAAAAAAAAAAA2mOEeAAAAAAAAAAAoQOXl5dGnT5/sDGpw/fXXx6pVq2p8fUVFRSxevLgRi9gQXbt2jd69e2dnANBAZsyYkZ3A5zjwwANjxx13zM6giTvkkEOyE4re3LlzsxMAANZr/vz52QlFY9NNN81OAAAAAAAAAAAAAIANZrgHAAAAAAAAAAAK0PDhw6N9+/bZGazHvHnzYvjw4Z/7NosXL45bbrmlkYrYGAMHDozSUrfSATRHU6ZMyU7gc7Rq1Sp+9atfZWfQhG299dbRrVu37Iyi9+qrr2YnAACs19tvv52dUDTatGmTnQAAAAAAAAAAAAAAG8xpAwAAAAAAAAAAUGDatWsXJ554YnYGNbjqqquiqqrqC99uyJAhsXDhwkYoYmN87Wtfi0GDBmVnANAAHnjggVixYkV2Bp/jyCOPzE6gCTv99NOjdevW2RlFb9asWdkJAADr9eabb2YnFA1flwMAAAAAAAAAAADQlBnuAQAAAAAAAACAAjNq1Kho27Ztdgbr8cYbb8RFF11Uq7ddsWJF3HjjjQ0bRL3o27dvtGrVKjsDgHq2Zs2aeOmll7Iz+Bxf+cpX4he/+EV2Bk3UYYcdlp1Q9D755JOYNm1adgYAwHo9++yz2QlFY7PNNstOAAAAAAAAAAAAAIANZrgHAAAAAAAAAAAKSOfOneMnP/lJdgY1uPLKK6O6urrWb19RURHvvvtuAxZRH7785S/HmDFjsjMAaADPPPNMdgJf4Je//GV2Ak1Q9+7dY88998zOKHrz58+v0/dHAACNadmyZfHhhx9mZxSFsrKy6NixY3YGAAAAAAAAAAAAAGwQwz0AAAAAAAAAAFBAhg0bFm3atMnOYD1mz54d48aNq9P7rFmzJsaPH99ARdSnE088MXbcccfsDADq2aRJk7IT+AJ77bVXHH744dkZNDGnnXZalJSUZGcUvbfeeis7AQDgc73//vvZCUXj61//enYCAAAAAAAAAAAAAGwQwz0AAAAAAAAAAFAgunTpEkceeWR2BjX4zW9+s0HvN3LkyJg7d279xlDv2rZtG6NGjcrOAKCe/eEPf4gPP/wwO4Mv0L9//+wEmpDy8vI45JBDsjOIiNdffz07AQDgcy1atCg7oWjstNNO2QkAAAAAAAAAAAAAsEEM9wAAAAAAAAAAQIEYOXJktGzZMjuD9Zg5c2bccMMNG/S+1dXVce2119ZzEQ3h6KOPjr322is7A4B6NmvWrOwEvkD37t2jW7du2Rk0EQMHDozy8vLsDCJi9uzZ2QkAAJ9r4cKF2QlFY/vtt89OAAAAAAAAAAAAAIANYrgHAAAAAAAAAAAKQLdu3eLggw/OzqAGF1xwwUa9/9ixY+O1116rpxoaSsuWLWPEiBHZGQDUs2nTpmUn8AXKyspi0KBB2Rk0Ecccc0x2Av/rr3/9a3YCAMDn+sc//pGdUDQM9wAAAAAAAAAAAADQVBnuAQAAAAAAAACAAlBRUREtWrTIzmA9nnnmmbjzzjs3+nGuuuqqeqihof3gBz+Igw46KDsDgHp09913ZydQC7169Yru3btnZ1DgTj311OjUqVN2BhHx4YcfxjPPPJOdAQDwud54443shKKxww47ZCcAAAAAAAAAAAAAwAYx3AMAAAAAAAAAAMl69uwZPXv2zM5gPdatWxejRo2ql8e6/PLLY/bs2fXyWDScsrKyGDZsWHYGAPVoxowZMXfu3OwMvkBZWVkMGTIkO4MC91//9V/ZCfyvt956KzsBAOALzZo1KzuhaGy//fbZCQAAAAAAAAAAAACwQQz3AAAAAAAAAABAsoqKiigtdStPIfrzn/8cDz30UL093rhx4+rtsWg4++67bxx33HHZGQDUo+nTp2cnUAsHHnigQUtqdPzxx0eXLl2yM/hfr7zySnYCAMAXmjp1alRVVWVnFIVtt902OwEAAAAAAAAAAAAANojTPgAAAAAAAAAAINGPfvSj2G+//bIzWI+qqqoYPXp0vT7m9ddfHzNnzqzXx6RhnHfeedkJANSjJ554IjuBWigtLY3BgwdnZ1Cg+vfvn53Ap/zP//xPdgIAwBdatWpVLFy4MDujKLRv3z7Ky8uzMwAAAAAAAAAAAACgzgz3AAAAAAAAAABAokGDBkVJSUl2Buvx2GOPxaRJk+r9cS+99NJ6f0zq39e//vU466yzsjMAqCcTJkyIlStXZmdQC9/5znfi6KOPzs6gwPTu3Tv23nvv7Aw+ZfLkydkJAAC1Mm/evOyEolBaWhoHHnhgdgYAAAAAAAAAAAAA1JnhHgAAAAAAAAAASHL88cdH165dszNYjzVr1sTIkSMb5LFvvfXWmD59eoM8NvXrjDPOiBYtWmRnAFAPVqxYETNmzMjOoBZKSkpi2LBhUVrqVnf+P2effXZ2Ap+yZMmS+Mtf/pKdAQBQK3//+9+zE4rGnnvumZ0AAAAAAAAAAAAAAHXm2YwAAAAAAAAAAJDknHPOyU6gBhMnTmzQg6gvvvjiWLduXYM9PvVjxx13jMrKyuwMAOrJk08+mZ1ALe26664xZMiQ7AwKxJlnnhm77LJLdgafMmfOnOwEAIBae+ONN7ITisbXvva17AQAAAAAAAAAAAAAqDPDPQAAAAAAAAAAkKBfv36x2267ZWewHqtXr47Bgwc36DXuvvvuePrppxv0GtSPk08+Odq1a5edAUA9mDBhQlRXV2dnUEv9+vWL7bbbLjuDZOXl5TFgwIDsDD7jpZdeyk4AAKi11157LTuhaBjcBAAAAAAAAAAAAKApMtwDAAAAAAAAAACNrLS0NPr375+dQQ3uu+++ePHFFxv8OmPHjjUe0ARsueWWccEFF2RnAFAPXn311Xj55ZezM6ilrbfeOi6++OLsDJJdfPHF8eUvfzk7g8+YOnVqdgIAQK0988wz2QlFo1OnTtkJAAAAAAAAAAAAAFBnhnsAAAAAAAAAAKCRnX322Q6wK1ArV66MioqKRrnWww8/HJMnT26Ua7FxjjnmmOjSpUt2BgD14KmnnspOoA6OPvroOOSQQ7IzSNK1a9f42c9+lp3BZ3zyySdx7733ZmcAANTaiy++GEuXLs3OKApbbLFFdO/ePTsDAAAAAAAAAAAAAOrEcA8AAAAAAAAAADSisrKy6NevX3YGNbjjjjvi9ddfb7TrjRkzJqqqqhrtemyY1q1bx4gRI7IzAKgHt912W3YCdbDJJpvEJZdcEmVlZdkpJPjNb34TrVq1ys7gM1555ZVYsWJFdgYAQJ289dZb2QlFY//9989OAAAAAAAAAAAAAIA6MdwDAAAAAAAAAACNaMSIEbHDDjtkZ7Aey5Yti6FDhzbqNR9//PF47LHHGvWabJhDDz3UoZMAzcDUqVMbdaSPjfe1r30tLrvssuwMGtk555wT++23X3YG6/H8889nJwAA1Nmrr76anVA0vv3tb2cnAAAAAAAAAAAAAECdGO4BAAAAAAAAAIBGUl5eHn369MnOoAYTJkyIefPmNfp1KysrY82aNY1+XeqmrKwshg0blp0BQD2YMmVKdgJ1dPLJJ8d3vvOd7AwaSefOnWPgwIHZGdRg2rRp2QkAAHX20ksvZScUjS5dumQnAAAApGjbtm12AgAAAAAAAAAbyHAPAAAAAAAAAAA0kuHDh0f79u2zM1iPxYsXR0VFRcq1p02bFhMnTky5NnXzne98J44++ujsDAA20u23356dQB21bNkyrrrqqigrK8tOoRH89re/jS233DI7g/X45JNP4r//+7+zMwAA6uyvf/1rdkLR6NChQ+y6667ZGQAAAI1um222yU4AAAAAAAAAYAMZ7gEAAAAAAAAAgEbQrl27OPHEE7MzqMFNN90UixcvTrv+iBEjYvXq1WnXp3ZKSkri/PPPz84AYCM9/vjj8dZbb2VnUEddunSJ6667LjuDBjZkyJA48MADszOowUsvvRTLli3LzgAAqLMnnngiVq1alZ1RFEpKSoyfAwAARalVq1bZCQAAAAAAAABsIMM9AAAAAAAAAADQCEaNGhVt27bNzmA9Fi5cGIMHD05tmDFjRjz44IOpDdTOHnvsEaeffnp2BgAb6cknn8xOYAOccMIJcfzxx2dn0EC6desW55xzTnYGn2P69OnZCQAAG6S6ujrmzp2bnVE0evTokZ0AAADQ6HbYYYfsBAAAAAAAAAA2kOEeAAAAAAAAAABoYJ07d46f/OQn2RnU4Prrr49Vq1ZlZ8Tw4cNj5cqV2RnUwoABA6KsrCw7A4CNcOONN2YnsAHKysrioosuio4dO2anUM9atWoV48ePj9atW2en8DkeeeSR7AQAgA322muvZScUjW9961tRWurpywAAQHHZfvvtsxMAAAAAAAAA2EDufAUAAAAAAAAAgAY2bNiwaNOmTXYG6zFv3rwYPnx4dkZERMyePTvuu+++7Axq4Stf+UrBfN4AsGGmTp0ar7zySnYGG6B9+/Zx6623OgS6mbn99ttj1113zc7gcyxZsiTuv//+7AwAgA02e/bs7ISiscUWW8Rxxx2XnQEAANCodthhh+wEAAAAAAAAADaQZysCAAAAAAAAAEAD6tKlSxx55JHZGdTgqquuiqqqquyMfxo6dGgsX748O4Na+MUvfhFt27bNzgBgIzzyyCPZCWygbt26xfXXX5+dQT0ZOnRoHHbYYdkZfIFnn302OwEAYKNMmTIlO6Go+BofAAAoNttss012AgAAAAAAAAAbyHAPAAAAAAAAAAA0oJEjR0bLli2zM1iPN954Iy666KLsjH/x5ptvxp133pmdQS1ss802ccEFF2RnALARfv/73xfUgB918/Of/zzOPPPM7Aw20tFHHx3nnntudga18MQTT2QnAABslEceecRoeiPq3r17dgIAAECj2nbbbbMTAAAAAAAAANhAhnsAAAAAAAAAAKCBdOvWLQ4++ODsDGpw5ZVXRnV1dXbG/1FRURFLly7NzqAWjjvuuOjcuXN2BgAbaNasWTFz5szsDDZQSUlJjBgxInr16pWdwgbq1q1bXHPNNbHppptmp/AF1q5dGxMmTMjOAADYKNXV1TFnzpzsjKLRvn37OO6447IzAAAAGk3Hjh2zEwAAAAAAAADYQIZ7AAAAAAAAAACggVRUVESLFi2yM1iP2bNnx7hx47Iz1mv+/Plx++23Z2dQC5tttlmMGTMmOwOAjXD//fdnJ7ARvvSlL8UNN9wQXbp0yU6hjjp27Bi33XZbtG3bNjuFWvif//mfmD9/fnYGAMBGmzVrVnZCUfnpT3+anQAAANBodtppp+wEAAAAAAAAADaQ4R4AAAAAAAAAAGgAPXv2jJ49e2ZnUIPLLrssO+FzVVRUxOLFi7MzqIUf/vCH0a1bt+wMADbQVVddFcuXL8/OYCNst912cffdd8d2222XnUIttWvXLh588MHo0KFDdgq19Pjjj2cnAADUi2nTpmUnFJX9998/tt566+wMAACARrHddttFeXl5dgYAAAAAAAAAG8BwDwAAAAAAAAAANICKioooLXV7TiGaOXNmjB8/Pjvjcy1evDhuueWW7AxqoUWLFjFixIjsDAA20NKlS2Py5MnZGWykr33ta/Hggw86DK0JKC8vj4cffji6dOmSnUItrVu3Lm677bbsDACAenHffffF2rVrszOKRuvWreP000/PzgAAAGgUpaWl8b3vfS87AwAAAAAAAIAN4GQQAAAAAAAAAACoZz/60Y9iv/32y86gBmPHjs1OqJUhQ4bEwoULszOohQMOOCAOP/zw7AwANtCtt96anUA96Nq1a/zhD3+IFi1aZKdQgxYtWsRDDz0UXbt2zU6hDl5++eWYNWtWdgYAQL1YunRpvPHGG9kZReWYY47JTgAAAGg03/nOd7ITAAAAAAAAANgAhnsAAAAAAAAAAKCeDRo0KEpKSrIzWI9nnnkm7rjjjuyMWlmxYkXceOON2RnUQklJSQwePDg7A4ANdOedd8bbb7+dnUE9+M53vhOPPfaY8Z4CVF5eHk8++WR07949O4U6euKJJ7ITAADq1QsvvJCdUFR22WUX4z0AAEDR6Nq1a3YCAAAAAAAAABvAcA8AAAAAAAAAANSj448/3iEMBWrdunUxatSo7Iw6qaioiHfffTc7g1rYe++945e//GV2BgAb6IEHHshOoJ706NHDeE+Badu2bUyaNCm6deuWnUIdrVu3Lm6++ebsDACAevXMM89kJxSdU089NTsBAACgUXTp0iVKSx3nBAAAAAAAANDUbJIdAAAAAAAAAAAAzck555yTnUANpkyZEg899FB2Rp2sWbMmxo8fH0OHDs1OoRbOOuusuP7666O6ujo7BYA6uuyyy+LUU0+NTTfdNDuFetCjR4+YPHly9OrVK5YtW5adU9R23nnneOCBB2L33XfPTmEDvPTSS/Hcc89lZwAA1Kt77rknxo4d6yDlRvSd73wnunfvHlOnTs1O4TO23nrrOPnkk7Mzmp2VK1fGFVdckZ0BAECCzTffPA4//PC49957s1MAAAAAAAAAqAPDPQAAAAAAAAAAUE/69esXu+22W3YG61FdXR2jRo3KztggI0eOjBNPPDE6duyYncIX6NSpUwwePDhGjBiR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qsrOaHSVlZWxZs2a7AxqoW3btlFZWZmdAUAdDR8+PN57773sDApIaWlpdO3aNSorK+Ott96K6dOnx4UXXhh77bVXdlqNysrK4rjjjosbb7wxXn755fjrX/8a/fr1i1133TVKSkqy80h26623ZicAAKS67bbbshOIiK222iruueee6Nq1a3ZKs3DsscfGhRde6Hu+RvLcc89lJwAA/JPhnsK3+eabx+WXXx4PPPBAdOjQITsHAAAAAAAAoOgZ7gEAAAAAAAAAgFqqqKiI0lK33BSiN998My666KLsjBTTpk2LiRMnZmdQS0cffXR84xvfyM4AoA5WrVoVEyZMyM6gQLVo0SK6du0aZ511Vjz33HMxd+7ceOihh2LYsGHRrVu3tK527dpF796947rrrou//OUv8cEHH8Qtt9wSJ5xwQuyyyy4ObuaflixZEqNHj87OAABI9cADD8Tbb7+dnUFEbLvttnHPPff4GepGOvzww+O3v/1tbLrpptkpReOJJ57ITgAA+Kfly5dnJ1BLhx56aDz//PMxZsyYaNWqVXYOAAAAAAAAQNHaJDsAAAAAAAAAAACagh/96Eex3377ZWdQgyuuuCKqq6uzM9KMGDEivv/970fLli2zU/gCrVq1isrKyjj00EOzUwCog/PPPz+OPfbY2HbbbbNTKGAlJSXRoUOH6NChQxx88MFRUVERS5YsiXfeeSfmzp0br732WsyZMydmzJgRL7zwQr18/dqlS5fYbbfdolOnTrHrrrvGV7/61fjKV74S22+/fZSVldXDR0Vzd8cdd8SqVauyMwAA0j366KNxyimnZGcQETvttFP86U9/ih//+McxderU7Jwm57jjjourr746Nt988+yUorFy5UqjzwBAQVm9enV2AnWw5ZZbxjnnnBM/+9nP4vbbb4+xY8fG4sWLs7MAAAAAAAAAiorhHgAAAAAAAAAAqIVBgwZFSUlJdgbrMXv27Bg3blx2RqoZM2bEgw8+GD/+8Y+zU6iFH/zgB9GzZ8+YNGlSdgoAtbRq1aq48cYb45xzzslOoYnZaqutYquttopvfvOb//LyqqqqWLZsWSxZsiSWLl0aH374YVRVVcXHH38ca9eujY8//jgiIlq0aBGtWrWKiIjy8vLYfPPNY/PNN482bdrENttsE5tuumljf0g0I8uXL4+RI0dmZwAAFITx48fHySef7PcABWLbbbeN+++/P04++eS4//77s3OajDPOOCPGjh0bLVu2zE4pKjNmzIg1a9ZkZwAA/JOx9qZphx12iLPOOitOPfXUePLJJ+Puu++OCRMmRHV1dXYaAAAAAAAAQLNnuAcAAAAAAAAAAL7A8ccfH127ds3OoAaXXXZZdkJBGD58eBxyyCHRunXr7BS+QFlZWQwfPtxwD0ATU1FRET/72c9ihx12yE6hGSgrK4stt9wyttxyy+wUitidd94ZCxYsyM4AACgIzz77bMycOTP22muv7BT+11ZbbRW33XZbDB48OC699NLsnII3bty46Nevn/GpBI8++mh2AgDAv1i2bFl2AhuhTZs2ceihh8ahhx4al112WcyYMSOeeeaZePrpp2PSpEkpo5G77rpr7LnnntGpU6fo0KFDvPTSS3HllVc2egcAAAAAAABAQzHcAwAAAAAAAAAAX+Ccc87JTqAGM2fOjPHjx2dnFITZs2fHfffdF8cdd1x2CrWw7777xnHHHRcTJkzITgGgltasWRPjx4+PoUOHZqcAbLSVK1fG6NGjszMAAArKPffcY7inwLRq1Souuuii2H333eOUU06J6urq7KSCs/3228eECRPiP/7jP7JTitKaNWvixhtvzM4AAPgXS5cuzU6gnmy55ZZx4IEHxoEHHhgREZ988km89dZbMXfu3FiwYEEsWLAg3n333Zg3b14sWbIkVq9eHYsXL44PP/wwqqurY8stt/znY2222WaxxRZbRETEl770pWjbtm1sscUWseWWW8bmm28ebdq0ifLy8thmm21iq622iq222uqfr2/VqtW/dE2YMMFwDwAAAAAAANCsGO4BAAAAAAAAAIDP0a9fv9htt92yM6jBRRddlJ1QUIYOHRqHHXZYtGnTJjuFWjj33HMN9wA0MSNHjowTTjghvvrVr2anAGyU++67L958883sDACAgnLllVfGwIEDo7y8PDuFTykpKYmTTjop9t577/j5z38es2bNyk4qGMcee2xcdNFF8eUvfzk7pWjNnDkz5s2bl50BAPAvlixZkp1AA9l0001jl112iV122SU7BQAAAAAAAKBZKc0OAAAAAAAAAACAQlVaWhr9+/fPzqAG06dPj9tvvz07o6C8+eabceedd2ZnUEu77bZbnHnmmdkZANRBdXV1XHLJJdkZABtl+fLlMWTIkOwMAICCs2zZsnj88cezM6jBN77xjZg8eXKce+652Snptt566/jv//7vuOmmm4z2JHvssceyEwAA/o/33nsvOwEAAAAAAAAAmhTDPQAAAAAAAAAAUIOzzz47OnXqlJ3Beqxbty4qKyuzMwpSRUVFLF26NDuDWurfv3+UlZVlZwBQB1dffXU8//zz2RkAG+zOO++MuXPnZmcAABSk3/72t9kJfI4tttgiRo0aFU8//XR07do1O6fRlZaWxpAhQ+Kll16Ko48+2s+Wk1VVVcWtt96anQEA8H8sWrQoOwEAAAAAAAAAmhTDPQAAAAAAAAAAsB5lZWXRr1+/7AxqMGXKlHjooYeyMwrS/Pnz4/bbb8/OoJZ23HHHGDVqVHYGAHVUWVkZ69aty84AqLNly5bFsGHDsjMAAArWpEmTYtasWdkZfIF99903pkyZEjfccENsvfXW2TmNonfv3vHyyy/H8OHDo3379tk5RMTf/va3mDNnTnYGAMD/8Y9//CM7AQAAAAAAAACaFMM9AAAAAAAAAACwHiNHjowddtghO4P1qK6uNnTyBSoqKmLx4sXZGdTSySefHO3atcvOAKAO7rvvvnjiiSeyMwDq7Kabbop58+ZlZwAAFDTD6E1Dq1at4qSTToo5c+bEpZdeGuXl5dlJ9a60tDROP/30mDlzZowfPz7+7d/+LTuJT7nvvvuyEwAA1mvGjBnZCQAAAAAAAADQpBjuAQAAAAAAAACAzygvL4/evXtnZ1CDxx57LCZNmpSdUdAWL14ct9xyS3YGtbTVVlvFmDFjsjMAqKNzzjknVq1alZ0BUGsLFiyI8847LzsDAKDg/eY3v4n3338/O4Na2nrrreNXv/pVvPHGG3H55ZdHhw4dspM22vbbbx9jxoyJt956K8aNGxd77rlndhKf8dFHH8WVV16ZnQEAsF6LFy+Ojz76KDsDAAAAAAAAAJoMwz0AAAAAAAAAAPAZI0aMiPbt22dnsB5r1qyJUaNGZWc0CUOGDImFCxdmZ1BLP/nJT2K33XbLzgCgDmbMmBETJkzIzgCotauvvjpWrFiRnQEAUPDWrFkT9957b3YGdbT11ltHv3794uWXX4777rsvDj/88OykOikrK4u+ffvG448/Hm+88Uacc845sdNOO2VnUYMnn3zS91cAQEEzRgoAAAAAAAAAtWe4BwAAAAAAAAAAPqVdu3ZxwgknZGdQg4kTJ8bUqVOzM5qEFStWxI033pidQS21bt06KisrszMAqKOzzz7bUB7QJLz22msxevTo7AwAgCbjwgsvjFWrVmVnsAG+9KUvxWGHHRb33ntvvPXWW3HttdfGgQcemJ21Xh07doxzzz03HnnkkVi0aFFcccUVccABB0TLli2z0/gCxpwBgEL33nvvZScAAAAAAAAAQJNhuAcAAAAAAAAAAD5l9OjR0bZt2+wM1mP16tUxdOjQ7IwmpaKiIt59993sDGrp0EMPjR49emRnAFAHS5cujUsvvTQ7A+ALVVZWRnV1dXYGAECT8eabb8ajjz6ancFG+spXvhKnnHJKPPbYYzFv3ry455574swzz4xdd901pWfvvfeOgQMHxu233x4vvvhivPbaazFq1Kg46KCD/G6qCZk7d27cdddd2RkAAJ/LcA8AAAAAAAAA1N4m2QEAAAAAAAAAAFAoOnfuHMccc0x2BjV44IEHYtasWdkZTcqaNWti/PjxBo+aiLKyshg+fHgccMAB2SkA1MFFF10UxxxzTOy9997ZKQDrNXny5LjllluyMwAAmpxLLrkk/vM//zNKS0uzU6gH22+/fRxxxBFxxBFHxIUXXhjz5s2LN998M1599dV46aWX4oUXXojp06fHihUrNuo6LVq0iH322Sf22GOP+Ld/+7f46le/GjvuuGN06tQpttpqq3r6aMh0xx13ZCcAAHyhefPmZScAAAAAAAAAQJNhuAcAAAAAAAAAAP7XsGHDok2bNtkZrMfKlStj8ODB2RlN0siRI+PEE0+Mjh07ZqdQCz169Igf//jHcdddd2WnAFAHZ511VjzyyCPRokWL7BSAf/HJJ5/Eueeem50BANAkPfXUUzFlypTYf//9s1OoZyUlJbHTTjvFTjvtFP/xH//xz5evW7culixZEkuXLo2PPvooli1bFsuXL4+1a9fGunXr4uOPP47WrVtHRMRmm20WJSUl8aUvfSnatm0bW2yxRWy++eax+eabZ31YNIKPPvooLr744uwMAIAv9Morr2QnAAAAAAAAAECTYbgHAAAAAAAAAAAiokuXLnHkkUdmZ1CDu+66K15//fXsjCapuro6rr322hgzZkx2CrVQUlIS559/vuEegCZm8uTJcdttt8WJJ56YnQLwL2699dZ45plnsjMAAJqsSy+9NP7jP/4jSkpKslNoBCUl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N96II488Mqqrq7NTAACohdmzZ8f5558f69aty04BvkBVVVWceeaZficCABSVe++9NzsBAAAAAAAAAAqO4R4AAAAAAAAAAJql7t27R69evbIzqMEDDzwQzz//fHYG6zF//vy4/fbbszOog29/+9tx0kknZWcAsJGOOOKImDVrVnYGUEAWL14cP/3pT2PRokXZKQAA1ME111wTd911V3YG8AWuu+46/68CAEXnsssuiwULFmRnAAAAAAAAAEBBMdwDAAAAAAAAAECzNHjw4GjRokV2BuuxcuXKGDx4cHYGn6OioiIWL16cnUEdDBw4MDsBgI20atWqOPLII2PevHnZKUAB+Pjjj6N3797x3HPPZacAALAB+vTpE6+//np2BlCDZ555Jk4//fTsDACARldVVWW8EAAAAAAAAAA+w3APAAAAAAAAAADNTs+ePaNnz57ZGdTgrrvucmBhgVu8eHHccsst2RnUwS677BLnnHNOdgYAG+nNN9+M4447Lj744IPsFCBRVVVVnHnmmfGHP/whOwUAgA20YsWK6N27d6xYsSI7BfiMRYsWxYknnhjV1dXZKQAAKS666KJYuXJldgYAAAAAAAAAFAzDPQAAAAAAAAAANDsVFRVRWurWmEK0fPnyGDJkSHYGtTBkyJBYuHBhdgZ1cPrpp0erVq2yMwDYSE899VScfPLJ8fHHH2enAEkuuOCCuOaaa7IzAADYSFOnTo0hQ4bEunXrslOA/1VVVRUDBgyIV199NTsFACDNvHnz4pFHHsnOAAAAAAAAAICC4XQSAAAAAAAAAACalaOOOir222+/7AxqcMstt8S8efOyM6iFFStWxI033pidQR1sv/32UVlZmZ0BQD247777on///rFmzZrsFKCR/fa3vzV2CgDQjFx22WVx++23Z2cA/+uqq66KCRMmZGcAAKSrrKyM1atXZ2cAAAAAAAAAQEEw3AMAAAAAAAAAQLMycODAKCkpyc5gPZYsWRLDhg3LzqAOKioq4t13383OoA569+4d22+/fXYGAPVg/PjxMXTo0Fi3bl12CtBIbr/99ujbt292BgAA9ezEE0+M5557LjsDit4f//jH+NWvfpWdAQBQEJ5//vl48MEHszMAAAAAAAAAoCAY7gEAAAAAAAAAoNk44YQTomvXrtkZ1ODmm2+ORYsWZWdQB2vWrInx48dnZ1AHbdu2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L14c06ZNiyeffDKamppST6KXO378eKxevTpKS0vjrrvuihMnTqSeBAAAPVZnZ2esXLkyJk+eHLfeemvs2LEjOjs7U88ioa6urti5c2fceeedH4adhFIBAPi07dmzJ+69996YN29ejBo1Ku644454+umn480334wzZ86kngcAAAAAAABADybcAwAAAAAAAABAUl/84hdj0aJFqWfwMXbt2hUbN25MPYNe4Oc//3ns378/9QzO09e//vWYPXt26hkA9FC1tbVx++23x8SJE2PVqlVRW1ubehK9TFVVVfz4xz+OSy65JJYuXRrNzc2pJwEAQK/yy1/+MubNmxcLFiyIX/3qV665M9PQ0BDPPPNMXHnllXH55ZfHunXrUk8CAICIiGhra4snnngibrnllqioqIgRI0bEN7/5zVi3bl3s2LEj/vGPf6Se2Ou0t7dHVVVVbN68OZ577rnUcwAAAAAAAAD+o/qlHgAAAAAAAAAAQN7uu+++6NfP31i6o66urvjpT3+aega9yMMPP+zGfj3MwIEDY/ny5XHttdemngJAD9bY2Bh333133HPPPfG9730vFi9eHNOnT089ix6qs7Mzdu3aFevXr4+nnnoq9RwAAMjC1q1bY+vWrVFUVBRLly6NG264IS699NLUs7gA2tvbY+fOnfHss8/GY489Fh0dHaknAQDA/6mtrS02bdoUmzZt+vBYaWlpLFy4MGbOnBlTp06NSy65JEpKSmLAgAEJl/YMra2t8e6778ahQ4fi73//e7zxxhvx/PPPR2NjY+ppAAAAAAAAABeEO54AAAAAAAAAAJDMVVddFVdeeWXqGXyMbdu2xW9/+9vUM+hFnnjiiViyZElUVFSknsJ5uPrqq+Oaa66JP/zhD6mnANDDdXZ2xkMPPRQPPfRQXHvttXHHHXfEVVddFYWFhamn0QM0NzfH73//+3j00Udj+/btqecAAECWmpubY9myZbFs2bKYP39+3HbbbXH11VfHqFGjUk/j/6GrqysOHjwYL730Ujz++OOxf//+1JMAAOD/7dChQ7F27dqPHOvbt2/MmzcvZs2aFZMnT46JEyfGxRdfHGPGjIkxY8ZEv3753Iqpubk56uvr49ixY1FTUxPvvPNOVFdXx969e2PPnj2p5wEAAAAAAAB8qvL5tRgAAAAAAAAAgG7nvvvui4KCgtQz+Cc6OztjxYoV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"
					), aCk(7, "youtube", 7, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aCk(8,
					"googleplay", 3,
					"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"
					), aCk(9, "discord", 7,
					"iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
					), aCk(10, "insta", 3, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aCk(11, "emojis",
					4, "iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aCk(12, "flags", 3,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aCk(13, "bestTeam", 5,
					"iVBORw0KGgoAAAANSUhEUgAAADAAAAAKAQMAAADILU8PAAAABlBMVEUAAAD///+l2Z/dAAAAOklEQVQI12P48efPH5v/DEDyT81/hjMHDhxIkWA4AqV+/PgBpf5JgOWA1B0gdUyC4cefA3+A1AcwBQAlGyu1reW1ZgAAAABJRU5ErkJggg=="), aCk(14, "bestPlayer", 5,
					"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"
					), aCk(15, "zoom", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
					), aCk(16, "apple", 3,
					"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"
					), aCk(17, "loading", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEEAAAAKAQMAAADRpqGpAAAABlBMVEUAAAD///+l2Z/dAAAATklEQVQI12M48E/OzoinjoGB4cA/O3tjnn8g1iEjY+aeAxCWofGZBijLCMqqNzRKmQdhGRubNINZyeYQ1p9/yXbGMv9yG0AsG2OemtwGAJcsIuxbPF7gAAAAAElFTkSuQmCC"), aCk(18, "target",
					7,
					"iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJFBMVEXUAADLSwDYWli/eQCzlQGgswDloaGC0wAA/wBk5wDx09P///8NUBuBAAADWElEQVRYw62YvW/aUBDADwghTRakqoJuTBmSBamNSjcyJSMZotINZciQLCxVnQ1EkO0N1ET1iDJkgCViyGD/c7UN8bv37t5Hq96EbH6+j3fv3d2DgJPw52Uqd+y7AJhnP05hI6WTOyfksQ1IPnhWJLwAWUrfLYjfBSJfjIjfBkYaBoQnVAYjYRc08lWHXIBW+jwy0RNQijjErxsQqHJID4xyTpF7MwEVirQtCHxUkYmNEBEAVyVCDbgqEWq2SNcBgQ5GpsrLw+UqSZbPAzZoG2QovdpN/7+R5xaTNjkSSgt/lAiJJaYmkImOUJiSQHCu7CeJnjl/Q7Bdu4kqr6ploKTXLUGSJ8UykON1lDDSkmMGUrKUOSJZC+TdBvHFk2MWSQbSTkuRsUWJpCbKkaE2wIw3/RwRrqx0yKL4SzNDQsOa0LWpZcjU5rxkWSVDxna7sGVRisz4eMUay/op0uPilW2UQ6wVbU0I6owrm7Qqr5jV3AsgZFx5paa+iJCBSBcmPvvUmWoAU7oqKD8KzbGIMkzoF1vcHi0eBTB6+3nAbcMy/U4EM7IfF8Dt0iJkHoNI59AB+VAfhqqnsXwMkiifQ09FXiWkTJCOQJgQs48Z5EVGiPIOdFVk8f+Rvb9Hmv/iiyvCRYxfFzCti/vqk4SRc2yfybGZPmelAwEhI/JyzXmPk39MTIg5V4S5AdzTtwNmh8Wi9onjoswcjbv02Q5/jj3RYrtGh1LAFeMBKbYLUS1BNEkH6Ay/yh7ccNWimSJDtiItn2/wKR6jBgOCkUt9EWvlpci9qbMgcS9lVcy3F2RkVzWvyHW7ZWvcXgBurY6tdmX9ZYqMrFUc7TovR6ZgC8BC6kizTgksamK5hwO5T7w1e5K3yhkyBmOvhM+PaIv4YGr7cD9aLTrYtqm5xEdBs0DmuKCstM1oHuIt4oOWeaIDGTCDxY2yb5TRArjx5XDJTgnbAWaDhOqAWL6+vr5S55eaNPLMXUYeT0J8B6KqjG9DO9JXELuaGhlF546eICS0TJYNZqw2D8mViJv3e26DOEZMpjU0FxFTLbGjvSF50Dni6e9hfvHztGe67Xmw6qB3So/k0mMnst1c+acyceZyP/aI9uiJ53alFvy+/JTa9/7zt8j1Fs4ifwCmXBmOYkld0AAAAABJRU5ErkJggg=="
					), aCk(19, "members", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABSVFGanJkA/wDMz8x4/3ey/7L///+GDHoaAAACZElEQVRIx9WWwYrjMAyGlVCYa6cs5JqGQh5gaObaDYU8QJnOA5SS66RN49dfSZZt2U2WZZeFXc9h2r9fZEmRJcPbLyz4d6GzMdM1/uXcG3PV0KehFVFnlh4Baoxdl8BEEkF7EcwUoN5pJ4HenRBMNV66C4QfxxI2nTKFhsYt5CgZC9FTawDIxbg4UKKUWevAuw1Aq/D7NUq6M9RbQ2zKhkwpKVnK2AWGRrCrc04lEpDfgyg1u8mh3EQqSGLoS5QXY/a4+XSKJIIwkkNQOIlTgFYUcQq59TuQcrwI0PDk+M3Hayh2+RcC1smkl3DDj1ltlMR5old38LutHT04l/BVAVfOSL9lnXelUBKaAltxt2gTv3Ft6w6k4sajdtf6zhLVHUHltzTwkIzvOUGf9PhOJJdVdphWS0YfFnJUCrVgISmdTVWVnVQa19+YV9VWKgohl2+MRUFKjaAXDX0tQCvt0+HPIJWnJajWGV9wPDPutPFhXs9CK+PLr1aJjSF+5aUzpOQY6mwZURWNCRRO9JZq43ikMtnog44v2LlojK1EW6n4zYXz4HqSb/gsty1qaWjAt5o7NAEiL7Jdu2vX7IqHLikEIYdzUJ5CZQQdJJcJ5GSE9i5tC1BNR4oadGub76ChwrZfKn48wTRXsGfrQvHFQr0dmy245o8nMYHGoxsToMZIAoWBA2qOzEMXmVJiK4nO2jn5oXju5yGZpn4Gf/QpNH08D+pn6O3vQqOGulkIX0+1fbXd93VT+dkXQe/SO3F1fkSnUBjgT7cEdVdJodkLTbNkKLr1NH1ApstPrkbnK/39B9e1H85NJPjxrK7zAAAAAElFTkSuQmCC"
					), aCk(20, "hourglass", 7,
					"iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAGFBMVEUAAABKTEqZm5gA/wDJzMh3/3iz/7L///+iyVF/AAACjklEQVRIx72W3aqyQBSGJwk6dceGTv1C8AJEO60QvACJLkDI02xPrtvf75pJ58cx2iffIqT0aWb9vGuNIrft0hSX8WqZ4Etxg9HM+G4zQVdatOcEdSSrqkr3juFOVdMwQXQUC7YmAyVLUPQZ1PxtJSJ5js7KX7j/+pKkNR5Y0RE9Ij/6JMPFRFfebt0cOmbD7dZOEOwQgn7ssnwOrf8rJAMp8KFSrnwormcQCR8S1HpQgT8qVVXnVCsJS/tQzlV4mMpmJLUCXOi4I2mgmnotOAfqcJPiCUIGNsMMunJdEqMjbP+cQQcOrx+hnZ0BA5XsuTQuPUxwBoLnZj98Oxq/LaiTHNK4G34MAQj7jfGhQqeIfgJQzm7ofELccUZ5CDpQjKBO3LbUr+gZhAo8QhMl8FoCb4IQhkvyUt7JWciBCnhUa5VkJkkexEtxQ3KjPvMlqKD7hk7fdF/bHnlQfoUU4LglgBCElVCP+ztIbQfDdXk7OL5jqH/juE7BA4pBUZr8XTJZMadoKZklKlxriMvSBqGO4m8ejJmuy5AH9aTqq02CbwPQlfeYDH94ziEWilqDW5xniiUWq6VUjs6szFTnat5SHYuXdcnGAcTZrINLrpmZGJnqqXY26WLONJ7rfqm5qfwh1vXckPahAh8HD/Imjzt7xJgACLe3oZ01xYQ1Mo/umWmGprBOjcQ96cyEEtacc89DrDx6PkJQrHSh2kjdgh4ulH0C7YIQuS8P3nYlDa9ecg33OpUF8TqnFyB9UitIVujsALSmqp6g+/5fHKVpxQfQqM6q2ier7X5joFdAMX++YrEyMc6hgP0RkuoVZbvfTqfU6gs/VbZG6M3bmn5fE0pxb6x1Ori4eNbkY3f+AriuYpjQCOoxAAAAAElFTkSuQmCC"
					), aCk(21, "stalemate", 6,
					"iVBORw0KGgoAAAANSUhEUgAAAEoAAAAKAQMAAAApRlpeAAAABlBMVEUAAAD///+l2Z/dAAAAX0lEQVQI12P4/afiwJ+G9vnvDzD8/vPjwJ+D/SDmgYQTBw487mnmYYAwv4OZBUDmj/89zfwNDBWJfw78uDv/MJApAWQeODn/MFABR2LPgQMHZ4CYPxJ7/vwBMvkPIDEB8vo+S3L7oMwAAAAASUVORK5CYII="
					), aCk(22, "logo", 8,
					"iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAATzaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMTItMjNUMTQ6NDQ6NDYrMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIzVDE0OjQ0OjQ2KzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZTU0YWVlOS01ZDdhLWQ3NDgtYTRjYS0yODQ1NmQ1ZWFlZDYiIHhtcE1NOkRvY3Vt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"
					)
		}
	}, this.get = function(e0) {
		return canvas[e0]
	}, this.aCL = function(name) {
		for (var a7 = yc.length - 1; 0 <= a7; a7--)
			if (yc[a7] === name) return canvas[a7];
		return aCe
	}, this.s1 = function() {
		return aCd <= 0
	}, this.aCg = function() {
		aCd = 0, aCh()
	}
}

function cN() {
	var aCt, aCu, aCv, aCw, aCx, aCy, aCz, aD0, aD1, aD2, aCr = [
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
		aCs = [
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

	function aD8(iu, mF) {
		for (var a7 = iu; a7 < mF; a7++) aCt[a7] = 4 * bH.dl(64 * au.random(), au.value(100)), aCu[a7] = 4 * bH.dl(64 * au.random(), au.value(100)), aCv[a7] = 4 * bH.dl(64 * au.random(), au.value(100))
	}

	function aD7(iu, mF) {
		for (var colorsData = a9.data.colorsData, a7 = iu; a7 < mF; a7++) {
			var f0 = colorsData[a7];
			aCt[a7] = 4 * (f0 >> 12), aCu[a7] = 4 * (f0 >> 6 & 63), aCv[a7] = 4 * (63 & f0)
		}
	}

	function aDJ(eC, aDL) {
		a9Y[eC] = 0, a9Y[eC + 1] = 0, a9Y[eC + 2] = aDL, a9Y[eC + 3] = 0, aDM(eC)
	}

	function aDM(eC) {
		var ef;
		bX.mN || (ef = aY.wS(eC), eC = aY.wT(eC), bX.mN = ef >= bW.a9X[0] && ef <= bW.a9X[2] && eC >= bW.a9X[1] && eC <= bW.a9X[3])
	}
	this.ea = new Int32Array(4), this.dV = function() {
		var ea = this.ea;
		ea[0] = -4 * bO.ej, ea[1] = 4, ea[2] = -ea[0], ea[3] = -ea[1]
	}, this.dU = function() {
		if (aCt = new Uint8Array(a9.eV), aCu = new Uint8Array(a9.eV), aCv = new Uint8Array(a9.eV), aCw = new Uint8Array(a9.eV), aCx = new Uint8Array(a9.eV), aCy = new Uint8Array(a9.eV), aCz = new Uint8Array(a9.eV), aD0 = new Uint8Array(a9.eV),
			aD1 = new Uint8Array(a9.eV), aD2 = new Uint8Array(a9.eV), this.a6B = new Uint8Array(a9.eV), a9.ie)
			for (var a7 = a9.eV - 1; 0 <= a7; a7--) {
				var et = bc.k3[bc.eW[a7]],
					kO = bH.dl((aCs[et][3] + 1) * au.random(), au.value(100));
				aCt[a7] = aCr[et][0] + kO * aCs[et][0], aCu[a7] = aCr[et][1] + kO * aCs[et][1], aCv[a7] = aCr[et][2] + kO * aCs[et][2]
			} else 0 === a9.data.colorsType ? a9.data.selectableColor ? (aD7(0, a9.jd), aD8(a9.jd, a9.eV)) : aD8(0, a9.eV) : aD7(0, a9.eV);
		! function() {
			var a7, eb;
			for (a7 = a9.eV - 1; 0 <= a7; a7--) eb = bH.dl(aCt[a7] + aCu[a7] + aCv[a7], 3), aCt[a7] += aDE(eb - aCt[a7], 2), aCu[a7] += aDE(eb - aCu[a7], 2), aCv[a7] += aDE(eb - aCv[a7], 2), aCt[a7] -= aCt[a7] % 4, aCu[a7] -= aCu[a7] % 4, aCv[
				a7] -= aCv[a7] % 4
		}(),
		function() {
			for (var a7 = a9.eV - 1; 0 <= a7; a7--) aCt[a7] += bH.dl(a7, 128), aCu[a7] += bH.dl(a7 % 128, 32), aCv[a7] += bH.dl(a7 % 32, 8), aCw[a7] = a7 % 8
		}(), this.aDB(),
			function() {
				for (var a7 = a9.eV - 1; 0 <= a7; a7--) aCx[a7] = aCt[a7] < 32 ? aCt[a7] + 32 : aCt[a7] - 32, aCy[a7] = aCu[a7] < 32 ? aCu[a7] + 32 : aCu[a7] - 32, aCz[a7] = aCv[a7] < 32 ? aCv[a7] + 32 : aCv[a7] - 32
			}(),
			function() {
				for (var a7 = a9.eV - 1; 0 <= a7; a7--) aD0[a7] = 235 < aCt[a7] ? aCt[a7] - 20 : aCt[a7] + 20, aD1[a7] = 235 < aCu[a7] ? aCu[a7] - 20 : aCu[a7] + 20, aD2[a7] = 235 < aCv[a7] ? aCv[a7] - 20 : aCv[a7] + 20
			}()
	}, this.a5D = function(player) {
		var g = bK.f8;
		return g[0] = aCt[player], g[1] = aCu[player], g[2] = aCv[player], g
	}, this.aDB = function() {
		for (var a7 = a9.eV - 1; 0 <= a7; a7--) this.a6B[a7] = aCt[a7] + aCu[a7] + aCv[a7] < 280 ? 0 : 1
	}, this.wS = function(eC) {
		return bH.dl(eC, 4) % bO.ej
	}, this.wT = function(eC) {
		return bH.dl(eC, 4 * bO.ej)
	}, this.w2 = function(ef, eh) {
		return Math.floor(4 * (eh * bO.ej + ef))
	}, this.wI = function(eC) {
		var ea = this.ea;
		return this.aDF(eC + ea[0]) || this.aDF(eC + ea[1]) || this.aDF(eC + ea[2]) || this.aDF(eC + ea[3])
	}, this.ex = function(eC) {
		var ea = this.ea;
		return this.ed(eC + ea[0]) || this.ed(eC + ea[1]) || this.ed(eC + ea[2]) || this.ed(eC + ea[3])
	}, this.wG = function(eC, player) {
		var ea = this.ea;
		return this.aDG(eC + ea[0], player) || this.aDG(eC + ea[1], player) || this.aDG(eC + ea[2], player) || this.aDG(eC + ea[3], player)
	}, this.y9 = function(player) {
		return player < a9.jd && 2 !== ac.a1e[player]
	}, this.g8 = function(eC) {
		return 208 <= a9Y[eC + 3]
	}, this.wN = function(player, eC) {
		return this.g8(eC) && this.aDH(player, eC)
	}, this.aDH = function(player, eC) {
		return player === this.eQ(eC)
	}, this.aDI = function(eC) {
		return 208 <= a9Y[eC + 3] && a9Y[eC + 3] < 224
	}, this.ip = function(eC) {
		return 224 <= a9Y[eC + 3] && a9Y[eC + 3] < 248
	}, this.wH = function(eC) {
		for (var ea = this.ea, a7 = 3; 0 <= a7; a7--)
			if (this.h1(eC + ea[a7])) return !0;
		return !1
	}, this.eT = function(eC) {
		return this.g8(eC) || this.eP(eC)
	}, this.h1 = function(eC) {
		return 0 === a9Y[eC + 3] && 2 === a9Y[eC + 2]
	}, this.eP = function(eC) {
		return 0 === a9Y[eC + 3] && 1 === a9Y[eC + 2]
	}, this.v5 = function(eC) {
		return 0 === a9Y[eC + 3] && 3 === a9Y[eC + 2]
	}, this.ed = function(eC) {
		return 0 === a9Y[eC + 3] && 5 <= a9Y[eC + 2]
	}, this.aDF = function(eC) {
		return 0 === a9Y[eC + 3] && 3 <= a9Y[eC + 2]
	}, this.eG = function(eC) {
		return a9Y[eC + 2] - 5
	}, this.aDG = function(eC, player) {
		return this.eP(eC) || this.g8(eC) && player !== this.eQ(eC)
	}, this.eQ = function(eC) {
		return a9Y[eC] % 4 * 128 + a9Y[eC + 1] % 4 * 32 + a9Y[eC + 2] % 4 * 8 + a9Y[eC + 3] % 8
	}, this.wO = function(eC) {
		aDJ(eC, 1)
	}, this.aDK = function(eC) {
		aDJ(eC, 2)
	}, this.w3 = function(eC, player) {
		a9Y[eC] = aCt[player], a9Y[eC + 1] = aCu[player], a9Y[eC + 2] = aCv[player], a9Y[eC + 3] = 208 + aCw[player], aDM(eC)
	}, this.g3 = function(eC, player) {
		a9Y[eC] = aCx[player], a9Y[eC + 1] = aCy[player], a9Y[eC + 2] = aCz[player], a9Y[eC + 3] = 224 + aCw[player], aDM(eC)
	}, this.iq = function(eC, player) {
		a9Y[eC] = aD0[player], a9Y[eC + 1] = aD1[player], a9Y[eC + 2] = aD2[player], a9Y[eC + 3] = 248 + aCw[player], aDM(eC)
	}
}

function cl() {
	var e0 = 0,
		aDN = new Uint16Array(32);

	function remove(a3H) {
		var a7;
		for (e0 -= 2, a7 = a3H; a7 < e0; a7 += 2) aDN[a7] = aDN[a7 + 2], aDN[a7 + 1] = aDN[a7 + 3]
	}
	this.dU = function() {
		e0 = 0
	}, this.iS = function() {
		var a7, il, hu;
		if (0 !== e0)
			if (0 === ac.lU[a9.eI] || aZ.aDO(a9.eI) === aZ.fe(a9.eI)) e0 = 0;
			else
				for (a7 = e0 - 2; 0 <= a7; a7 -= 2)(il = aDN[a7]) < a9.eV && 0 === ac.lU[il] ? remove(a7) : (hu = aDN[a7 + 1], (il >= a9.eV && aDP(a9.eI) || il < a9.eV && aDQ(a9.eI, il)) && (b4.gv.h6(hu, il), remove(a7)))
	}, this.h8 = function(il, hu) {
		! function(il, hu) {
			var a7;
			for (a7 = 0; a7 < e0; a7 += 2)
				if (aDN[a7] === il) return aDN[a7 + 1] = Math.min(aDN[a7 + 1] + hu, 1023), 1;
			return
		}(il, hu) && 32 !== e0 && (aDN[e0] = il, aDN[e0 + 1] = hu, e0 += 2)
	}
}

function cO() {
	function aDX(player) {
		var dk;
		b6.fu.a1g(player) && (dk = ac.ga[player] - ac.a1k[player] + aZ.aDZ(player), bZ.fy(player, Math.abs(dk), dk < 0 ? 18 : 12)), ac.ga[player] = 0, ac.a1k[player] = 0
	}

	function aDg() {
		aT.show(!1, !1, !1, !0), aS.a8k(), bN.result.yv()
	}

	function aDU(player, aDf) {
		for (var a7 = aDf.length - 1; 0 <= a7; a7--) aZ.aDi(aDf[a7], player)
	}

	function aDW(player) {
		for (var i9 = ac.i9, iA = ac.iA, iB = ac.iB, iC = ac.iC, lx = i9[player], ly = iB[player], ej = bO.ej, gM = ac.gM, ef = iA[player]; lx <= ef; ef--)
			for (var eh = iC[player]; ly <= eh; eh--) {
				var g6 = 4 * (eh * ej + ef);
				aY.wN(player, g6) && (aY.wO(g6), gM[player]--)
			}
		i9[player] = iA[player] = 0, iB[player] = iC[player] = 0
	}
	this.dd = function(g6) {
		var player, dk = ac.gM[g6];
		bJ.s.oV[g6] ? dk && (aDU(player = g6, aZ.aDV(player)), aDW(player), aB.fw(player), aZ.clear(player), aDX(player), function(player) {
			ac.vy[player] = 0, ac.g0[player] = [], ac.gE[player] = [], ac.gF[player] = [], ac.ey[player] = []
		}(player)) : !dk && ac.g0[g6].length || this.aDT(g6)
	}, this.aDT = function(player) {
		! function(player) {
			aY.y9(player) && (ac.yt[player] = be.yn.aDe(), a9.yI++);
			var aDf = aZ.aDV(player);
			0 === aDf.length ? b6.fu.a1f(player) && aDg() : (aDU(player, aDf), function(player, aDf) {
				var aDk = aDf[function(aDf) {
					var a7, e0 = 0;
					for (a7 = aDf.length - 1; 1 <= a7; a7--) ac.gM[aDf[a7]] > ac.gM[aDf[e0]] && (e0 = a7);
					return e0
				}(aDf)];
				9 === a9.jx && 1 === bc.eW[player] && au.jV(8) && av.aDl(aDk);
				if (b6.fu.a1f(player)) aDg(), aJ.yS(aDk, 1);
				else {
					for (var a7 = aDf.length - 1; 0 <= a7; a7--)
						if (b6.fu.a1g(aDf[a7]) && (bZ.lQ[4 - b6.fu.j1(player)]++, b6.fu.a1f(aDf[a7]))) return aJ.yS(player, 0);
					b6.fu.j1(player) || aJ.a4W(0, player, aDk)
				}
			}(player, aDf))
		}(player), aDW(player), aDX(player),
			function(player) {
				ac.lU[player] = 0, ac.g0[player] = null, ac.gE[player] = null, ac.gF[player] = null, ac.ey[player] = null
			}(player), aB.fw(player), aZ.clear(player), bJ.aDc.aDd(player)
	}
}

function cq() {
	var input;

	function aDm(e) {
		(e = e.target.files) && 0 < e.length && b2.aDp(e[0])
	}

	function aDt(e) {
		var et = new Image;
		et.onload = aDu, et.src = e.target.result
	}

	function aDu(e) {
		var e = e.target,
			canvas = document.createElement("canvas");
		canvas.width = e.width, canvas.height = e.height;
		canvas.getContext("2d").drawImage(e, 0, 0);
		var e = canvas.width,
			j7 = canvas.height;
		e > bO.aDw || j7 > bO.aDw || e < 10 || j7 < 10 ? (e = "Image dimensions must be between 10 and " + bO.aDw + ".", u.th ? u.th.showToast(e) : alert(e)) : 20 === n.rd && n.aCp().aDu(canvas)
	}
	this.dU = function() {
		(input = document.createElement("input")).type = "file", input.setAttribute("accept", ".png, .jpg, .gif, .jpeg"), input.onchange = aDm
	}, this.zh = function() {
		input && (input.onchange = null, input.value = "", input = null)
	}, this.aDn = function() {
		input.click()
	}, this.aDp = function(aDq) {
		var g = aDq.name.split("."),
			g = g[g.length - 1].toLowerCase();
		"gif" !== g && "jpg" !== g && "jpeg" !== g && "png" !== g || ((g = new FileReader).onload = aDt, g.readAsDataURL(aDq))
	}
}

function co() {
	this.aDy = null, this.dU = function() {
		10 !== a9.jx ? this.aDy = null : this.aDy = new Uint32Array(a9.eV)
	}, this.iS = function() {
		10 === a9.jx && this.qU()
	}, this.qU = function() {
		for (var g6, target, a8v, aDy = this.aDy, y7 = ah.jg, a1l = ac.ga, a7 = ah.je - 1; 0 <= a7; a7--)(g6 = y7[a7]) >= a9.jd || (target = Math.max(bH.dl(a1l[g6], 4), 2048), a8v = Math.max(aa.a8w(g6), 100), aDy[g6] += bH.dl(a8v * target, 1e4),
			aDy[g6] > target && (aDy[g6] = target))
	}, this.a1q = function(player, im) {
		return im > this.aDy[player] ? (im = this.aDy[player], this.aDy[player] = 0) : this.aDy[player] -= im, im
	}
}

function dQ() {
	function aE0(e) {
		var g, e = e.target.files;
		e && 0 < e.length && (e = e[0], "json" === (g = e.name.split("."))[g.length - 1].toLowerCase()) && ((g = new FileReader).onload = aE8, g.readAsText(e))
	}

	function aE8(e) {
		var aEC;
		a9.yG || (e = JSON.parse(e.target.result), aEC = a9.data = new a2e, aED(e, aEC, "mapType", 0, 2), aED(e, aEC, "mapProceduralIndex", 0, 255), aED(e, aEC, "mapRealisticIndex", 0, 255), aED(e, aEC, "mapSeed", 0, 16383), function(aEB, aEC, g7,
				max) {
				aEB = aEB[g7];
				aEC[g7] = aEJ(aEB) ? aEB.slice(0, max) : aEC[g7]
			}(e, aEC, "mapName", 20), function(aEB, aEC, g7) {
				var aDv;
				2 === aEC.mapType && (!aEJ(aEB = aEB[g7]) || aEB.length <= 20 ? aEC.mapType = 0 : ((aDv = new Image).onload = function() {
					b5.aEK.aEL(aDv, 1), aDv.onload = null, aDv = null
				}, aDv.src = aEB))
			}(e, aEC, "canvas"), aED(e, aEC, "passableWater", 0, 1), aED(e, aEC, "passableMountains", 0, 1), aED(e, aEC, "playerCount", 1, 512), aED(e, aEC, "humanCount", 1, 1), aED(e, aEC, "selectedPlayer", 0, 0), aED(e, aEC, "gameMode", 0, 1),
			aED(e, aEC, "playerMode", 0, 0), aED(e, aEC, "battleRoyaleMode", 0, 0), aED(e, aEC, "numberTeams", 0, 8), aED(e, aEC, "isZombieMode", 0, 0), aED(e, aEC, "isContest", 0, 0), aED(e, aEC, "isReplay", 0, 0), aEG(e, aEC, "elo", 16, 2,
				16383), aED(e, aEC, "colorsType", 0, 1), aED(e, aEC, "colorsPersonalized", 0, 1), aEG(e, aEC, "colorsData", 32, 512, 262143), aED(e, aEC, "selectableColor", 0, 1), aEG(e, aEC, "teamPlayerCount", 16, 9, 512), aED(e, aEC,
				"neutralBots", 0, 1), aED(e, aEC, "botDifficultyType", 0, 3), aED(e, aEC, "botDifficultyValue", 0, 15), aEG(e, aEC, "botDifficultyTeam", 8, 9, 15), aEG(e, aEC, "botDifficultyData", 8, 512, 15), aED(e, aEC, "spawningType", 0, 2),
			aED(e, aEC, "spawningSeed", 0, 16383), aEG(e, aEC, "spawningData", 16, 1024, 4095), aED(e, aEC, "selectableSpawn", 0, 1), aED(e, aEC, "playerNamesType", 0, 2),
			function(aEB, aEC, g7, size, max) {
				var a0y = aEB[g7];
				if (Array.isArray(a0y)) {
					for (var a0z = new Array(size), eY = Math.min(a0y.length, size), a7 = 0; a7 < eY; a7++) a0z[a7] = aEJ(a0y[a7]) ? a0y[a7].slice(0, max) : "";
					aEC[g7] = a0z
				}
			}(e, aEC, "playerNamesData", 512, 20), aED(e, aEC, "selectableName", 0, 1), aED(e, aEC, "aIncomeType", 0, 2), aED(e, aEC, "aIncomeValue", 0, 255), aEG(e, aEC, "aIncomeData", 8, 512, 255), aED(e, aEC, "tIncomeType", 0, 2), aED(e, aEC,
				"tIncomeValue", 0, 255), aEG(e, aEC, "tIncomeData", 8, 512, 255), aED(e, aEC, "iIncomeType", 0, 2), aED(e, aEC, "iIncomeValue", 0, 255), aEG(e, aEC, "iIncomeData", 8, 512, 255), aED(e, aEC, "sResourcesType", 0, 2), aED(e, aEC,
				"sResourcesValue", 0, 2047), aEG(e, aEC, "sResourcesData", 16, 512, 2047), n.r(), n.s.aEA[0] = 0, n.o(19))
	}

	function aED(aEB, aEC, g7, min, max) {
		aEB = aEB[g7];
		aEC[g7] = "number" == typeof aEB && min <= aEB && aEB <= max ? Math.floor(aEB) : aEC[g7]
	}

	function aEJ(p0) {
		return "string" == typeof p0
	}

	function aEG(aEB, aEC, g7, aEM, size, max) {
		var a0y = aEB[g7];
		if (Array.isArray(a0y)) {
			for (var a0z = new(8 === aEM ? Uint8Array : 16 === aEM ? Uint16Array : Uint32Array)(size), eY = Math.min(a0y.length, size), a7 = 0; a7 < eY; a7++) a0z[a7] = bH.or(a0y[a7], 0, max);
			aEC[g7] = a0z
		}
	}
	this.aDz = function() {
		var input = document.createElement("input");
		input.type = "file", input.setAttribute("accept", ".json"), input.onchange = aE0, input.click()
	}, this.aE1 = function() {
		for (var aE4, aA3, a5W = a9.data, keys = Object.keys(a5W), aE2 = {}, a7 = 0; a7 < keys.length; a7++) {
			var key = keys[a7];
			a5W[key] instanceof Uint8Array || a5W[key] instanceof Uint16Array || a5W[key] instanceof Uint32Array ? aE2[key] = Array.from(a5W[key]) : aE2[key] = a5W[key]
		}
		aE2.canvas = 2 === aE2.mapType && aE2.canvas ? aE2.canvas.toDataURL() : null, aE4 = aE2, aE4 = JSON.stringify(aE4, null, 2), aE4 = new Blob([aE4], {
			type: "application/json"
		}), (aA3 = document.createElement("a")).href = URL.createObjectURL(aE4), aA3.download = "tt_scenario.json", aA3.click()
	}
}

function cR() {
	var aEN, aEO, size, il, im, id, aEP;

	function aEQ(player) {
		return player < a9.jd ? aEN * player : aEN * a9.jd + aEO * (player - a9.jd)
	}
	this.dU = function() {
		aEN = a9.jd < 16 ? 12 : 8, aEO = 4;
		var eY = aEQ(a9.eV);
		size = new Uint8Array(a9.eV), il = new Uint16Array(eY), im = new Uint32Array(eY), id = new Uint16Array(eY), aEP = new Uint8Array(eY)
	}, this.oq = function(a5j, aER) {
		var aES = this.gb(a5j, aER),
			aER = (this.gZ(a5j, aER, 0), b6.fu.fx(a5j, aES));
		bZ.fy(a5j, aES - aER, 12)
	}, this.clear = function(player) {
		size[player] = 0
	}, this.aDi = function(player, aER) {
		var aEV, aER = function(player, aER) {
			var a7, kO = aEQ(player);
			for (a7 = size[player] - 1; 0 <= a7; a7--)
				if (0 === id[kO + a7] && il[kO + a7] === aER) return a7;
			return size[player]
		}(player, aER);
		aER !== size[player] && (aEV = im[aEQ(player) + aER], this.fz(player, aER), this.ii(player, aEV, a9.eV))
	}, this.iz = function(player, aER) {
		for (var kO = aEQ(player), a7 = size[player] - 1; 0 <= a7; a7--)
			if (0 === id[kO + a7] && il[kO + a7] === aER) return !0;
		return !1
	}, this.jH = function(player) {
		return player < a9.jd ? size[player] < aEN : size[player] < aEO
	}, this.fe = function(player) {
		return size[player]
	}, this.fk = function(player, a7) {
		return il[aEQ(player) + a7]
	}, this.ff = function(player, a7) {
		return id[aEQ(player) + a7]
	}, this.aEW = function(player, aEX) {
		for (var kO = aEQ(player), a7 = size[player] - 1; 0 <= a7; a7--)
			if (id[kO + a7] === aEX) return a7;
		return -1
	}, this.fl = function(player, a7) {
		return im[aEQ(player) + a7]
	}, this.gb = function(player, aER) {
		for (var kO = aEQ(player), a7 = size[player] - 1; 0 <= a7; a7--)
			if (0 === id[kO + a7] && il[kO + a7] === aER) return im[kO + a7];
		return 0
	}, this.aDZ = function(player) {
		for (var kO = aEQ(player), f0 = 0, a7 = size[player] - 1; 0 <= a7; a7--) f0 += im[kO + a7];
		return f0
	}, this.aEY = function(player) {
		for (var kO = aEQ(player), f0 = 0, a7 = size[player] - 1; 0 <= a7; a7--) 0 === id[kO + a7] && (f0 += im[kO + a7]);
		return f0
	}, this.aDO = function(player) {
		for (var kO = aEQ(player), g1 = 0, a7 = size[player] - 1; 0 <= a7; a7--) 0 < id[kO + a7] && g1++;
		return g1
	}, this.gZ = function(player, aER, aEV) {
		for (var kO = aEQ(player), a7 = size[player] - 1; 0 <= a7; a7--) 0 === id[kO + a7] && il[kO + a7] === aER && (im[kO + a7] = aEV)
	}, this.gK = function(player, a7, aEV) {
		im[aEQ(player) + a7] = Math.max(aEV, 0)
	}, this.gL = function(player, a7) {
		aEP[aEQ(player) + a7] = 0
	}, this.fm = function(player, a7) {
		return aEP[aEQ(player) + a7]
	}, this.ii = function(player, aEV, aER) {
		b6.fu.a1g(aER) && bZ.lQ[6 - b6.fu.j1(player)]++;
		for (var kO = aEQ(player), a7 = size[player] - 1; 0 <= a7; a7--)
			if (0 === id[kO + a7] && il[kO + a7] === aER) return im[kO + a7] += aEV, void(im[kO + a7] = im[kO + a7] > a9.a1m ? a9.a1m : im[kO + a7]);
		il[kO + size[player]] = aER, im[kO + size[player]] = aEV, id[kO + size[player]] = 0, aEP[kO + size[player]] = 1, size[player]++, player < a9.jd && (aER === a9.eI ? aJ.yS(player, 5) : player === a9.eI && ab.a4Y(aER))
	}, this.aEZ = function(player, aEV, aEX) {
		var kO = aEQ(player);
		il[kO + size[player]] = 0, im[kO + size[player]] = aEV, id[kO + size[player]] = aEX, aEP[kO + size[player]] = 0, size[player]++
	}, this.fz = function(player, e0) {
		var er, kO;
		if (0 !== size[player])
			for (kO = aEQ(player), size[player]--, er = e0; er < size[player]; er++) il[kO + er] = il[kO + er + 1], im[kO + er] = im[kO + er + 1], id[kO + er] = id[kO + er + 1], aEP[kO + er] = aEP[kO + er + 1]
	}, this.aDV = function(player) {
		for (var er, kO, aDf = [], a7 = ah.je - 1; 0 <= a7; a7--)
			for (kO = aEQ(ah.jg[a7]), er = size[ah.jg[a7]] - 1; 0 <= er; er--)
				if (0 === id[kO + er] && il[kO + er] === player) {
					aDf.push(ah.jg[a7]);
					break
				} return aDf
	}
}

function cS() {
	var aEa;

	function aEc(player) {
		var dz, jI;
		return b6.fu.j1(player) && player < a9.jd ? 0 : (dz = aEa[bH.dl((a9.eV - 1) * ac.gM[player], a9.jN)], bb.ja() < 1920 && (dz = Math.max(bH.dl(100 * (13440 - 6 * bb.ja()), 1920), dz)), jI = aa.jJ(player), ac.ga[player] > jI && (dz -= bH.dl(2 *
			dz * (ac.ga[player] - jI), jI)), Math.min(Math.max(dz, 0), 700))
	}

	function aEn(m9) {
		for (var gM = ac.gM, jg = ah.jg, a7 = ah.je - 1; 0 <= a7; a7--) {
			var g6 = jg[a7];
			b6.fu.fx(g6, bH.dl(m9 * gM[g6], 32))
		}
	}

	function aEk() {
		var ux = a9.eI;
		bK.f5[0] = ac.ga[ux] - ac.a1k[ux]
	}

	function aEm(e0) {
		var ux = a9.eI;
		bZ.lQ[e0] += ac.ga[ux] - ac.a1k[ux] - bK.f5[0]
	}
	this.db = function() {
		for (var eY = a9.eV, a7 = (aEa = new Uint16Array(eY), 0); a7 < eY; a7++) aEa[a7] = 100 + aEb(bH.dl(25600 * a7, eY - 4), 9)
	}, this.dU = function() {
		0 === a9.data.iIncomeType ? this.a8w = aEc : 1 === a9.data.iIncomeType ? this.a8w = function(player) {
			return bH.dl(a9.data.iIncomeValue * aEc(player), 64)
		} : this.a8w = function(player) {
			return bH.dl(a9.data.iIncomeData[player] * aEc(player), 64)
		}
	}, this.iS = function() {
		if (bb.ja() % 10 == 9 && (function() {
				aEk();
				for (var jg = ah.jg, ga = ac.ga, a7 = ah.je - 1; 0 <= a7; a7--) {
					var g6 = jg[a7],
						aEl = bH.dl(aa.a8w(g6) * ga[g6], 1e4);
					b6.fu.fx(g6, Math.max(aEl, 1))
				}
				aEm(9)
			}(), function() {
				if (0 !== a9.data.aIncomeType) {
					if (aEk(), 1 === a9.data.aIncomeType)
						for (var gM = ac.gM, jg = ah.jg, m9 = a9.data.aIncomeValue, a7 = ah.je - 1; 0 <= a7; a7--) {
							var g6 = jg[a7];
							b6.fu.fx(g6, bH.dl(m9 * gM[g6], 128))
						} else 2 === a9.data.aIncomeType && function() {
							for (var gM = ac.gM, jg = ah.jg, m9 = a9.data.aIncomeData, a7 = ah.je - 1; 0 <= a7; a7--) {
								var g6 = jg[a7];
								b6.fu.fx(g6, bH.dl(m9[g6] * gM[g6], 128))
							}
						}();
					aEm(18)
				}
			}(), bb.ja() % 100 == 99)) {
			if (aEk(), 0 === a9.data.tIncomeType) aEn(32);
			else if (1 === a9.data.tIncomeType) aEn(a9.data.tIncomeValue);
			else
				for (var gM = ac.gM, jg = ah.jg, m9 = a9.data.tIncomeData, a7 = ah.je - 1; 0 <= a7; a7--) {
					var g6 = jg[a7];
					b6.fu.fx(g6, bH.dl(m9[g6] * gM[g6], 32))
				}
			aEm(8)
		}
	}, this.jJ = function(player) {
		return Math.min(100 * ac.gM[player], a9.a2a)
	}, this.nj = function(player, nk) {
		b6.fu.fx(nk, bK.f6[0]), bZ.o7(player, nk), ab.aEe(player, bK.f6[0] + bK.f6[1]), ab.o8(nk, bK.f6[0]), b6.fu.og(player)
	}, this.aEf = function() {
		for (var eY = ah.je, y7 = ah.jg, kO = 0, a1l = ac.ga, a7 = 0; a7 < eY; a7++) kO += a1l[y7[a7]];
		return kO
	}, this.aEg = function(zB) {
		for (var g6, eY = ah.je, y7 = ah.jg, kO = 0, a1l = ac.ga, eW = bc.eW, a7 = 0; a7 < eY; a7++) eW[g6 = y7[a7]] === zB && (kO += a1l[g6]);
		return kO
	}
}

function cU() {
	var aEr, aEs, aEt, aEu, aEv, aEw, aEx, aEy, aEz, aF0, aF1, aF2, aF3, aF4, aF5, aF6, aF7, aF8, aFA, aFB, a9x, aFC, aFD, aFK, aFL, aF9 = null,
		aFF = 0,
		aFG = !1,
		aFH = new Float32Array(4),
		aFI = 0,
		aFJ = !0,
		a87 = 400;

	function pN() {
		aEz = Math.floor(+at.pL), aF0 = Math.floor(.5 * aEz)
	}

	function aFM() {
		var a7, aFR;
		for (tB.font = b6.pJ.rF(1, 100 * aF1), aFR = 80 / Math.floor(tB.measureText(b6.z3.xZ(a9.a1m)).width), tB.font = b6.pJ.rF(1, 100), a7 = a9.eV - 1; 0 <= a7; a7--) aEy[a7] = 100 / Math.floor(tB.measureText(ac.a4U[a7]).width), aEx[a7] = Math.min(
			aFR, aEy[a7])
	}

	function aFS(a7) {
		return !bf.dp.data[7].value || (a7 = ac.ga[a7]) < 1e6 ? 1 : a7 < 1e7 ? aFH[0] : aFH[Math.min(Math.floor(Math.log10(a7)) - 6, 3)]
	}

	function aFQ(hH) {
		aF8 = !1, aF7 = 1, aF5 = aF6 = 0, aFJ && (b6.pJ.textAlign(hH, 1), b6.pJ.textBaseline(hH, 1));
		for (var aFY, aFZ, a7, aFa, fontSize, aFb, lx = hv / hw, ly = hx / hw, mA = (at.a1 + hv) / hw, mB = (at.j7 + hx) / hw, aFc = 0 !== ac.lU[a9.eI] && aY.y9(a9.eI), er = ah.je - 1; 0 <= er; er--) a7 = ah.jg[er], (fontSize = Math.floor(aF4 * hw *
			aFS(a7) * aEx[a7] * aEv[a7])) < aF3 || aEz <= fontSize || aEt[a7] + aEv[a7] > lx && aEt[a7] < mA && aEu[a7] + aEw[a7] > ly && aEu[a7] < mB && (aFY = Math.floor(at.a1 * (aEt[a7] + aEv[a7] / 2 - lx) / (mA - lx)), aFZ = Math.floor(at
			.j7 * (aEu[a7] + aEw[a7] / 2 - ly) / (mB - ly) - .1 * fontSize), aFa = aY.a6B[a7], hH.font = b6.pJ.rF(1 === ac.a1e[a7] ? 4 : 1, fontSize), hH.fillStyle = aFd(fontSize, aFa % 2), bf.dp.data[7].value ? aFe(hH, a7, fontSize, aFY,
			aFZ, aFa) : aFf(a7, fontSize, aFY, aFZ, hH), aF8 = !0, 0 < a9x[a7] ? function(aFY, aFZ, fontSize, a7, hH) {
			0 === jO[a7] ? af.wn.xQ(aFB[a7]) ? (function(aFY, aFZ, fontSize, player, nu, hH) {
				for (var vX = aFZ, hG = (hH.globalAlpha = aFn(fontSize), aFS(player) * (bf.dp.data[7].value ? aFI : aEy[player])), vW = aFY - .5 * fontSize / hG - .9 * fontSize, es = 0; es < 2; es++) hH.fillText(af.wn.xK(nu), vW, vX),
					vW = aFY + .5 * fontSize / hG + .9 * fontSize;
				hH.globalAlpha = 1
			}(aFY, aFZ, fontSize, a7, aFB[a7], hH), aFh(aFY, aFZ, fontSize, 0, 0, hH)) : af.wn.xS(aFB[a7]) ? (aFq(aFY, aFZ, fontSize, aFB[a7], 0, hH), aFh(aFY, aFZ, fontSize, 0, 1, hH)) : (aFq(aFY, aFZ, fontSize, aFB[a7], 1, hH), aFh(aFY,
				aFZ, fontSize, 1, 0, hH)) : aFq(aFY, aFZ, fontSize, aFB[a7], 0, hH)
		}(aFY, aFZ, fontSize, a7, hH) : 0 === jO[a7] && aFh(aFY, aFZ, fontSize, 0, 0, hH), aFc && (0 < a9x[a7 + a9.eV] || 0 < a9x[a7 + 2 * a9.eV] || 0 < a9x[a7 + 3 * a9.eV] || 0 < a9x[a7 + 4 * a9.eV]) && function(aFY, aFZ, fontSize, a7, hH) {
			var et, g1 = -1;
			for (et = 4; 1 <= et; et--) 0 < a9x[a7 + et * a9.eV] && g1++;
			for (et = 1; et < 5; et++) 0 < a9x[a7 + et * a9.eV] && (! function(aFY, aFZ, fontSize, et, a7, aFl, dk, hH) {
				var a19;
				if (1 === et) {
					a7 = aFB[a7 + a9.eV];
					if (!af.wn.xR(a7)) return function(aFY, aFZ, fontSize, nu, aFl, hH) {
						hH.globalAlpha = aFn(fontSize);
						aFY -= .534 * aFl * fontSize, aFl = aFZ + 1.59 * fontSize;
						hH.font = b6.pJ.rF(0, .785 * fontSize), hH.fillText(af.wn.xK(nu), aFY, aFl), hH.globalAlpha = 1
					}(aFY, aFZ, fontSize, a7, aFl, hH);
					a19 = af.uw.wu[a7 - 1024 + af.wn.x5]
				} else a19 = 2 === et ? aH.a3F()[4].canvas[+(dk < 255)] : (3 === et ? aH.a3F()[5] : aH.a3F()[6]).canvas[0];
				a7 = af.uw.wv, dk = .8 * fontSize / a7, et = aFY - .5 * dk * a7 - .534 * aFl * fontSize, aFY = aFZ + 1.4 * dk * a7;
				hH.setTransform(dk, 0, 0, dk, et, aFY), hH.globalAlpha = aFn(fontSize), hH.drawImage(a19, 0, 0), hH.globalAlpha = 1, hH.setTransform(1, 0, 0, 1, 0, 0)
			}(aFY, aFZ, fontSize, et, a7, g1, a9x[a7 + et * a9.eV], hH), g1 -= 2)
		}(aFY, aFZ, fontSize, a7, hH), (aFb = aF1 * fontSize) < aF3 || (hH.font = b6.pJ.rF(1, aFb), aFZ += Math.floor(.78 * fontSize), bf.dp.data[7].value ? aFf(a7, aFb, aFY, aFZ, hH) : aFe(hH, a7, aFb, aFY, aFZ, aFa)))
	}

	function aFf(a7, fontSize, ef, eh, hH) {
		var ___id = a7;
		var showName = a7 < a9.jd || !__fx.settings.hideBotNames;
		if (showName) hH.fillText(ac.a4U[a7], ef, eh), a7 < a9.jd && 2 !== ac.a1e[a7] || (a7 = fontSize / aEy[a7], hH.fillRect(ef - .5 * a7, eh + b6.pJ.xL * fontSize, a7, Math.max(1, .1 * fontSize)));
		bf.dp.data[7].value && __fx.settings.showPlayerDensity && (
			__fx.settings.coloredDensity && (hH.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)),
			hH.fillText(__fx.utils.getDensity(___id), ef, showName ? eh + fontSize : eh)
		);
	}

	function aFe(hH, a7, fontSize, aFY, aFZ, aFa) {
		var ___id = a7;
		a7 = b6.z3.xZ(ac.ga[a7]);
		aFa >> 1 & 1 ? (hH.lineWidth = .05 * fontSize, hH.strokeStyle = aFd(fontSize, aFa % 2), hH.strokeText(a7, aFY, aFZ)) : (1 < aFa && (hH.lineWidth = .12 * fontSize, hH.strokeStyle = aFd(fontSize, aFa), hH.strokeText(a7, aFY, aFZ)), hH.fillText(
			a7, aFY, aFZ));
		bf.dp.data[7].value || __fx.settings.showPlayerDensity && (__fx.settings.coloredDensity && (hH.fillStyle = __fx.utils.textStyleBasedOnDensity(___id)), hH.fillText(__fx.utils.getDensity(___id), aFY, aFZ + fontSize))
	}

	function aFh(aFY, aFZ, fontSize, aFl, aFm, hH) {
		var a3p = .95 * fontSize / aFD,
			aFY = aFY - .5 * a3p * aFC + .8 * aFl * fontSize,
			aFl = aFZ - 1.76 * a3p * aFD - (.35 - b6.pJ.xL + .7) * aFm * fontSize;
		hH.setTransform(a3p, 0, 0, a3p, aFY, aFl), hH.globalAlpha = aFn(fontSize), hH.drawImage(aX.get(4), 0, 0), hH.globalAlpha = 1, hH.setTransform(1, 0, 0, 1, 0, 0)
	}

	function aFq(aFY, aFZ, fontSize, nu, aFl, hH) {
		var hB, vW, a3p;
		hH.globalAlpha = aFn(fontSize), af.wn.xR(nu) ? (hB = af.uw.wv, hH.setTransform(a3p = 1.1 * fontSize / hB, 0, 0, a3p, vW = aFY - .5 * a3p * hB - .8 * aFl * fontSize, a3p = aFZ - 1.55 * a3p * hB), hH.drawImage(af.uw.wu[nu - 1024 + af.wn.x5], 0,
			0), hH.setTransform(1, 0, 0, 1, 0, 0)) : (vW = aFY - .8 * aFl * fontSize, a3p = aFZ - (.35 - b6.pJ.xL + 1) * fontSize, hH.fillText(af.wn.xK(nu), vW, a3p)), hH.globalAlpha = 1
	}

	function aFd(fontSize, aFa) {
		return aF0 <= fontSize && fontSize < aEz ? bc.aFs[aFa] + aFn(fontSize).toFixed(3) + ")" : bc.aFt[aFa]
	}

	function aFn(fontSize) {
		return aF0 <= fontSize && fontSize < aEz ? 1 - (fontSize - aF0) / (aEz - aF0) : 1
	}

	function aG2(hG, a1) {
		return 1 + Math.floor(aF2 * hG * a1)
	}

	function aFz(a7) {
		for (var left = aEt[a7], er = aEt[a7] - ac.i9[a7] - 1; 0 <= er; er--)
			if (!aG3(a7, --left, aEu[a7], aEw[a7])) {
				left++;
				break
			} var right = aEt[a7];
		for (er = ac.iA[a7] - aEt[a7] - aEv[a7]; 0 <= er; er--)
			if (!aG3(a7, ++right + aEv[a7] - 1, aEu[a7], aEw[a7])) {
				right--;
				break
			} var ef = Math.floor((left + right) / 2),
			top = aEu[a7];
		for (er = aEu[a7] - ac.iB[a7] - 1; 0 <= er; er--)
			if (!aG4(a7, ef, --top, aEv[a7])) {
				top++;
				break
			} var bottom = aEu[a7];
		for (er = ac.iC[a7] - aEu[a7] - aEw[a7]; 0 <= er; er--)
			if (!aG4(a7, ef, ++bottom + aEw[a7] - 1, aEv[a7])) {
				bottom--;
				break
			} var eh = Math.floor((top + bottom) / 2);
		aFw(a7, ef, eh, aEv[a7], aEw[a7]) && (aEt[a7] = ef, aEu[a7] = eh)
	}

	function aFw(player, ef, eh, a1, j7) {
		eb = Math.floor(.2 * a1);
		for (var eb, et = ef + a1 - 1; ef <= et; et--)
			if (!aG3(player, et, eh, j7)) return;
		for (et = eh + j7 - 1 - (eb = (eb = Math.floor(.25 * j7)) < 1 ? 1 : eb); eh + eb <= et; et--)
			if (!aG4(player, ef, et, a1)) return;
		return 1
	}

	function aG3(player, ef, eh, j7) {
		return aY.wN(player, 4 * (eh * bO.ej + ef)) && aY.wN(player, 4 * ((eh + j7 - 1) * bO.ej + ef))
	}

	function aG4(player, ef, eh, a1) {
		return aY.wN(player, 4 * (eh * bO.ej + ef)) && aY.wN(player, 4 * (eh * bO.ej + ef + a1 - 1))
	}
	this.dU = function() {
		if (a87 = 0 === (a87 = bf.dp.data[11].value) ? 280 : 1 === a87 ? 187 : 112, aF8 = !1, aF4 = .88, aF1 = .5, aF2 = 1.8, aF3 = 12 - 3 * bf.dp.data[9].value, aEs = aEr = 0, aEt = new Uint16Array(a9.eV), aEu = new Uint16Array(a9.eV), aEv =
			new Uint16Array(a9.eV), aEw = new Uint16Array(a9.eV), aEx = new Float32Array(a9.eV), aEy = new Float32Array(a9.eV), aFB = new Uint16Array(2 * a9.eV), a9x = new Uint8Array(5 * a9.eV), aFK = new Uint8Array(a9.eV), aFL = new Uint8Array(
				a9.eV), aFJ || (aF9 = aF9 || document.createElement("canvas")), pN(), aF6 = aF5 = 0, aF7 = 1, bf.dp.data[7].value) {
			var a7, aFR;
			for (aFM(), tB.font = b6.pJ.rF(1, 100), aFR = 100 / Math.floor(tB.measureText("900 000").width), a7 = a9.eV - 1; 0 <= a7; a7--) aEx[a7] = Math.min(aFR, 2 * aEy[a7]);
			aFI = aFR, aFH[0] = 100 / (aFR * Math.floor(tB.measureText("5 000 000").width)), aFH[1] = 100 / (aFR * Math.floor(tB.measureText("50 000 000").width)), aFH[2] = 100 / (aFR * Math.floor(tB.measureText("500 000 000").width)), aFH[3] =
				100 / (aFR * Math.floor(tB.measureText("1 000 000 000").width))
		} else aFM();
		! function() {
			var a7;
			for (a7 = a9.eV - 1; 0 <= a7; a7--) ac.gM[a7] < 12 ? (aEt[a7] = ac.i9[a7] + 1, aEu[a7] = ac.iB[a7] + 1, aEv[a7] = 1, aEw[a7] = 1) : (aEt[a7] = ac.i9[a7], aEu[a7] = ac.iB[a7] + 1, aEv[a7] = 4, aEw[a7] = 2);
			if (a9.gu)
				for (a7 = 0; a7 < a9.jd; a7++) aEv[a7] = 0;
			aFC = aX.get(4).width, aFD = aX.get(4).height
		}()
	}, this.aEe = function(g6, a4o) {
		a4o > 18 * ac.gM[g6] ? (aFL[g6] = 6, aY.a6B[g6] = 2 + aY.a6B[g6] % 2) : (aFK[g6] = 4, (aY.a6B[g6] < 2 || 3 < aY.a6B[g6]) && (aY.a6B[g6] = 6 + aY.a6B[g6] % 2))
	}, this.o8 = function(g6, a4o) {
		a4o > 6 * ac.gM[g6] ? (aFL[g6] = 6, aY.a6B[g6] = 4 + aY.a6B[g6] % 2) : (aFK[g6] = 4, (aY.a6B[g6] < 4 || 5 < aY.a6B[g6]) && (aY.a6B[g6] = 8 + aY.a6B[g6] % 2))
	}, this.resize = function() {
		pN(), aFJ || aFQ(aFA)
	}, this.a2W = function() {
		for (var a7 = 0; a7 < a9.jd; a7++) ac.iA[a7] - ac.i9[a7] != 3 || ac.iC[a7] - ac.iB[a7] != 3 ? (aEt[a7] = ac.i9[a7] + (ac.iA[a7] !== ac.i9[a7] ? 1 : 0), aEu[a7] = ac.iB[a7], aEv[a7] = 1, aEw[a7] = 1) : (aEt[a7] = ac.i9[a7], aEu[a7] = ac
			.iB[a7] + 1, aEv[a7] = 4, aEw[a7] = 2)
	}, this.os = function(player, e0, aFT) {
		! function(player, e0, aFT) {
			player += e0 * a9.eV;
			0 === e0 ? aFB[player] === aFT && 0 < a9x[player] ? a9x[player] = 0 : (aFB[player] = aFT, a9x[player] = af.wn.xQ(aFT) ? 255 : 64) : 1 === e0 ? (a9x[player] = 64, aFB[player] = aFT) : a9x[player] = aFT
		}(player, e0, aFT), 2 === a9.yG && this.lG(!0)
	}, this.tA = function() {
		aFJ ? aFQ(tB) : aF8 && (1 !== aF7 ? (tB.imageSmoothingEnabled = !0, tB.setTransform(aF7, 0, 0, aF7, 0, 0), tB.drawImage(aF9, -aF5 / aF7, -aF6 / aF7), tB.setTransform(1, 0, 0, 1, 0, 0), tB.imageSmoothingEnabled = !1) : tB.drawImage(aF9, -
			aF5, -aF6))
	}, this.a6v = function(hg, hj) {
		aF5 += hg, aF6 += hj
	}, this.zr = function(hg, hj) {
		ab.a6v(hg, hj)
	}, this.zoom = function(a0l, kj, kk) {
		aF7 *= a0l, aF5 = (aF5 + kj) * a0l - kj, aF6 = (aF6 + kk) * a0l - kk
	}, this.lG = function(bo) {
		return !aFJ && !(!aFG && !bo && bb.ln < aFF + (1 === aF7 && 0 === aF5 && 0 === aF6 && (a9.a2y() || a9.gu || 2 === a9.yG) ? 1e3 : a87) || (aFG = !1, aFF = bb.ln, aFQ(aFA), 0))
	}, this.aFW = function(a7) {
		return aFS(a7) * aEx[a7]
	}, this.aFX = function(player) {
		return aEx[player]
	}, this.iS = function() {
		bb.ja() % 10 == 9 && (aFG = a9.a30() && !a9.a2y()), !a9.a2y() && 4 <= ++aEs && function() {
			var a7, er, es;
			for (aEs = 0, es = 4; 1 <= es; es--)
				for (er = ah.je - 1; 0 <= er; er--) a7 = ah.jg[er] + es * a9.eV, 0 < a9x[a7] && a9x[a7] < 255 && a9x[a7]--;
			if (2 !== a9.yG)
				for (er = ah.je - 1; 0 <= er; er--) a7 = ah.jg[er], 0 < a9x[a7] && a9x[a7] < 255 && a9x[a7]--
		}();
		var a7, er, eY = Math.floor(.1 * ah.je);
		for (eY = (eY = eY < 8 ? 8 : eY) > ah.je ? ah.je : eY, a7 = aEr + eY - 1; aEr <= a7; a7--) er = a7 % ah.je, ! function(a7) {
			var hG = aFS(a7) * aEx[a7];
			0 < aEv[a7] && aFw(a7, aEt[a7], aEu[a7], aEv[a7], aEw[a7]) ? ! function(a7) {
				for (var ef, eh, a1, j7, eC = !1, es = 0; es < 8; es++) {
					if (a1 = aEv[a7] + 2, j7 = aEw[a7] + 2, a1 > ac.iA[a7] - ac.i9[a7] + 1 || j7 > ac.iC[a7] - ac.iB[a7] + 1) return eC;
					if (ef = aEt[a7] - 1, eh = aEu[a7] - 1, !aFw(a7, ef, eh, a1, j7)) return eC;
					aEt[a7] = ef, aEu[a7] = eh, aEv[a7] = a1, aEw[a7] = j7, eC = !0
				}
				return eC
			}(a7) && function(a7, hG) {
				for (var ef, eh, a1, j7, eC = !1, aA5 = aEv[a7], m9 = 1 + Math.floor(.02 * aA5), es = 1; es < 5; es++) {
					if ((a1 = aA5 + es * m9) > ac.iA[a7] - ac.i9[a7] + 1) return eC;
					if ((j7 = aG2(hG, a1)) > ac.iC[a7] - ac.iB[a7] + 1) return eC;
					ef = ac.i9[a7] + Math.floor(Math.random() * (ac.iA[a7] - ac.i9[a7] + 2 - a1)), eh = ac.iB[a7] + Math.floor(Math.random() * (ac.iC[a7] - ac.iB[a7] + 2 - j7)), aFw(a7, ef, eh, a1, j7) && (aEt[a7] = ef, aEu[a7] = eh, aEv[
						a7] = a1, aEw[a7] = j7, eC = !0)
				}
				return eC
			}(a7, hG) && aFz(a7) : ! function(a7, hG) {
				var j7, ef = aEt[a7] + 1,
					eh = aEu[a7] + 1,
					a1 = aEv[a7] - 2;
				for (;;) {
					if (a1 < 1) {
						aEv[a7] = 0;
						break
					}
					if (j7 = aG2(hG, a1), aFw(a7, ef, eh, a1, j7)) return aEt[a7] = ef, aEu[a7] = eh, aEv[a7] = a1, aEw[a7] = j7, 1;
					ef++, eh++, a1 -= 2
				}
				return
			}(a7, hG) ? function(a7, hG) {
				var ef, eh, a1, j7, es, mF, iu = ac.iA[a7] - ac.i9[a7] + 1,
					ky = Math.floor(.02 * iu);
				for (mF = -6 * (ky = ky < 1 ? 1 : ky), es = iu; mF <= es; es -= ky)
					if (j7 = aG2(hG, a1 = 0 < es ? es : 1), ef = ac.i9[a7] + Math.floor(Math.random() * (ac.iA[a7] - ac.i9[a7] + 2 - a1)), eh = ac.iB[a7] + Math.floor(Math.random() * (ac.iC[a7] - ac.iB[a7] + 2 - j7)), aFw(a7, ef, eh, a1,
							j7)) return aEt[a7] = ef, aEu[a7] = eh, aEv[a7] = a1, aEw[a7] = j7
			}(a7, hG) : aFz(a7)
		}(ah.jg[er]);
		aEr = (aEr += eY) % ah.je
	}, this.lB = function() {
		var a7, g6, hP, hQ;
		if (bb.ja() % 4 == 1)
			for (a7 = ah.je - 1; 0 <= a7; a7--) g6 = ah.jg[a7], aY.a6B[g6] < 2 || ((hP = Math.max(aFK[g6] - 1, 0)) === (hQ = Math.max(aFL[g6] - 1, 0)) ? 0 === hP && (aY.a6B[g6] %= 2) : 0 === hQ && aY.a6B[g6] < 6 && (aY.a6B[g6] += 4), aFK[g6] =
				hP, aFL[g6] = hQ)
	}, this.a4Y = function(player) {
		var a7 = player + 2 * a9.eV,
			dk = a9x[a7];
		return 0 < dk && (aJ.yN(50, player), a9x[a7] = 0, 255 === dk)
	}, this.a3Z = function(player) {
		return 255 === a9x[player + 2 * a9.eV]
	}
}

function cW() {
	var aG5, aG6;
	this.dU = function() {
		aG5 =
			"Abbasid Caliphate;Aceh s;Achaemenid Z;Afsharid z;Aghlabid Emirate;Ahom z;Akkadian Z;Aksumite Z;Akwamu;Alaouite z;Almohad Caliphate;Almoravid z;Angevin Z;Aq Qoyunlu;Armenian Z;Assyria;Ashanti Z;Austrian Z;Austria-Hungary;Ayyubid z;Aztec Z;Aulikara Z;Babylonian Z;Balhae;Banten s;S Banjar;Bamana Z;Bengal s;Benin Z;Kadamba z;Bornu Z;E Brazil;Britannic Z;British Z;British Raj;Bruneian Z;Bukhara Z;Burgundian State;Buyid z;Byzantine Z;Caliphate of Córdoba;Cao Wei;Carthaginian Z;Cebu Rajahnate;Chagatai Khanate;Chalukya z;Chauhan z;Chavín Z;Chenla;Chera z;Chola z;Comanche Z;Congo Free State;Crimean Khanate;Dacian Z;Delhi s;Demak s;Durrani Z;Dutch Z;Egyptian Z;Elamite Z;Exarchate of Africa;Abyssinia;Fatimid Caliphate;First French Z;Frankish Z;Funan;Gallic Z;Gaza Z;Republic of Genoa;German Z;Ghana Z;Ghaznavid z;Ghurid z;Goguryeo;Goryeo;Gorkha Z;Göktürk Khaganate;Golden Horde;S Gowa;Seljuq Z;Gupta Z;Hafsid Y;Han z;Hanseatic League;E Harsha;Hephthalite Z;Hittite Z;Holy Roman Z;Hotak z;Hoysala Z;Hunnic Z;Husainid z;Idrisid z;Ilkhanate;K Israel;K Judah;Inca Z;Italian Z;E Japan;Jin z;Johor Z;Jolof Z;Joseon;Kaabu Z;Kachari Y;Kalmar Union;Kanem Z;Kanva z;Kara-Khanid Khanate;Kazakh Khanate;Khazar Khaganate;Khmer Z;Khilji z;Khwarazmian z;Kievan Rus';Konbaung z;Kong Z;Korean Z;Kushan Z;K Kush;Lakota;Latin Z;Later Lê z;Liao z;Lodi s;Khmer Z;Macedonian Z;Majapahit Z;Mali Z;Malacca Z;Mamluk s;Manchukuo;Maratha Z;Marinid z;Massina Z;Mataram s;Mauretania;Mauryan Z;Median Z;Mlechchha z;Ming z;Mitanni Z;Mongol Z;Mughal Z;Nanda Z;Nguyễn z;North Sea Z;E Nicaea;Numidia;Omani Z;Ottoman Z;Oyo Z;Pagan Z;Pahlavi z;Pala Z;Palmyrene Z;Parthian Z;Pontic Z;Portuguese Z;K Prussia;Ptolemaic Z;Qajar z;Qara Qoyunlu;Qin z;Qing z;Ramnad Sethupathis;Rashidun Caliphate;Rashtrakuta z;Roman Z;Rouran Khaganate;Rozwi Z;Rustamid z;Russian Z;Tsardom of Russia;Saadi z;Safavid z;Saffarid z;Sassanid z;Satavahana z;Samanid Z;Soviet Union;Saudeleur z;Duchy of Savoy;Seleucid Z;Serbian Z;Shu Han;Shang z;Siam Z;Sikh Z;Singhasari;Sokoto Caliphate;Song z;Songhai Z;Spanish Z;Srivijaya Z;Sui z;K Mysore;Shunga Z;S Sulu;Sumer;Sur Z;Swedish Z;Tahirid z;Tang z;Tây Sơn z;S Ternate;E Thessalonica;German Reich;Tibetan Z;Tondo z;S Tidore;Timurid Z;K Tlemcen;E Trebizond;Toltec Z;Toungoo z;Toucouleur Z;Tu'i Tonga Z;Turgesh Khaganate;Umayyad Caliphate;Uyunid Emirate;Uyghur Khaganate;Uzbek Khanate;Vandal Y;Vijayanagara Z;Republic of Venice;Wari Z;Wassoulou Z;Wattasids;Western Roman Z;Eastern Wu;Western Xia z;Xin z;Yuan z;Zand z;Zhou z;Zulu Z;Yugoslavia;Kosovo;Sikkim;Kanem–Bornu Z;Wadai Z;Ethiopian Z;Rozvi Z;Sasanian Z;E Vietnam;Shilluk Y;K Aksum;Gwiriko Y;Toro Y;Malindi Y;K Loango;K Mapungubwe;Ryukyu Y;K Cyprus;K Jerusalem;Garhwal Y;K Nepal;K Cambodia;Champa Y;Hanthawaddy Y;Phayao Y;K Sardinia;K Sicily;K Gwynedd;K Scotland;K Desmond;K Poland;K Hungary;K Croatia;K Bohemia;Albanian Y;K Georgia;K Portugal;Khanate of Sibir;K Romania;Cossack Hetmanate;Duchy of Bouillon;K Ireland;Lordship of Ireland;K Italy;Republic of Pisa;Idrisid z;Almoravid z;Almohad Caliphate;Marinid z;Wattasid z;Saadian z;Republic of Salé;Rif Republic;K Kush;Makuria;Alodia;Ayyubid z;Mamluk s;Egypt Eyalet;K Fazughli;S Sennar;S Darfur;Mahdist State;S Egypt;K Egypt;Emirate of Cyrenaica;K Libya;Republic of Egypt;Republic of the Sudan;United Arab Republic;Libyan Arab Republic;Zirid z;Hafsid z;K Kuku;Regency of Algiers;Gurunsi;Liptako;Tenkodogo;Wogodogo;Yatenga;Bilanga;Bilayanga;Bongandini;Con;Macakoali;Piela;Nungu;K Sine;K Saloum;K Baol;K Cayor;K Waalo;Bundu;Bonoman;Gyaaman;Denkyira;Mankessim Y;K Dahomey;Oyo Z;K Nri;Aro Confederacy;Kwararafa;Biafra;Buganda;Bunyoro;Ankole;Busoga;Tanganyika;Kuba Y;K Luba;K Lunda;Yeke Y;K Ndongo;Kasanje Y;K Matamba;Mbunda Y;Chokwe Y;Kazembe Y;K Butua;Ndebele Y;Mthethwa Z;Bophuthatswana;Ciskei;Transkei;Venda;Rhodesia;Kart z;Nogai Horde;Khanate of Bukhara;Khanate of Khiva;Khamag Mongol;Northern Fujiwara;Kamakura Shogunate;Ashikaga Shogunate;Jaxa;Republic of Ezo;Jiangxi Soviet;Hunan Soviet;Guangzhou Commune;Gojoseon;Alaiye;Beylik of Bafra;Kara Koyunlu;Kars Republic;K Iraq;Arab Federation;Kar-Kiya z;Baduspanids;Marashiyan z;Afrasiyab z;Mihrabanid z;Safavid Iran;Sheikhdom of Kuwait;Bani Khalid Emirate;Emirate of Diriyah;Emirate of Najd;Muscat and Oman;Emirate of Riyadh;S Najd;K Hejaz;Fadhli s;Emirate of Beihan;Emirate of Dhala;S Lahej;Republic of Kuwait;K Cochin;Jaffna Y;Laur Y;Pandya z;Jaunpur s;Jaintia Y;Hyderabad State;Travancore;Udaipur State;Manikya z;Lan Xang;K Vientiane;K Champasak;Lao Issara;K Laos;Pyu States;Ava;Mon Ys;Pegu;K Mrauk U;Taungoo z;Shan States;Arakan;Raktamaritika;Singhanavati;Dvaravati;Ngoenyang;Hariphunchai;Tambralinga;Lavo Y;Langkasuka;Sukhothai Y;S Singora;Ayutthaya Y;Thonburi Y;Lan Na;Pattani Y;Jambi s;Palembang s;S Deli;S Langkat;S Serdang;S Cirebon;K Pajang;K Bali;Bima s;K Larantuka;K Banggai;Luwu;S Bone;Caucasian Albania;Kabardia;Circassia;K Abkhazia;Elisu s;Avar Khanate;Caucasian Imamate;K Imereti;K Kartli;K Kakheti;Crown of Aragon;Emirate of Granada;K Majorca;Crown of Castile;K Haiti;Cocollán;Zapotec Civilization;Mosquito Y;Somoza Regime;Iroquois Confederacy;Cherokee Nation;Vermont Republic;State of Muskogee;K Alo;K Sigave;K Fiji;K Nauru;K Chile;Muisca Confederation;El Stronato;K Chimor;Jungle Republic;Liga Federal;Supreme Junta;Weimar Republic;K Bavaria;Bremen;Frankfurt;Hamburg;K Hanover;Holstein;Lippe;Nassau;Oldenburg;Pomerania;Reuss;Saxe-Altenburg;Saxony;Schleswig;Waldeck;Württemberg;Helvetic Republic;Republic of Florence;Duchy of Urbino;Republic of Cospaia;Duchy of Lucca;Duchy of Mantua;Duchy of Milan;Papal States"
			.split(";"), aG6 =
			"Pestilent Dominion;Wretched Realm;Damned Province;Corrupt Zone;Cursed Territory;Blight Nation;Haunted Expanse;Malevolent State;Ruined Empire;Contaminated Land;Epidemic Domain;Forsaken District;Abandoned Wasteland;Necrotic Enclave;Tainted Domain;Decayed Principality;Infested Region;Malignant Territory;Toxic Dominion;Ravaged Sector;Ghostly Realm;Plagued Commonwealth;Afflicted State;Desolate Nation;Apocalyptic Zone;Radiated Province;Deathly District;Pestilence Haven;Doom Territory;Malefic Expanse;Abandoned State;Cursed Haven;Corroded Zone;Hauntland;Noxious Nation;Infected Enclave;Ruinous Domain;Wasteland Woe;Rotten Principality;Voided Land;Vile Dominion;Catastrophic Region;Eerie Expanse;Desolation State;Forsaken Outpost;Contagion District;Damaged Province;Abhorrent Sector;Accursed Nation;Doomstruck Land;Radiant Ruin;Deathly Enclave;Malefic Dominion;Plague District;Infected Haven;Corrupt State;Pestilent Territory;Razed Realm;Haunted Wasteland;Toxic Sector;Cursed Dominion;Decaying Province;Forsaken Enclave;Ruinous Region;Malignant Haven;Infested State;Ghostly Nation;Tainted Territory;Damned District;Radiated Dominion;Desolate Expanse;Apocalyptic Land;Death Zone;Wretched State;Malevolent Haven;Plagued Nation;Noxious Domain;Voided Territory;Eerie Sector;Accursed Province;Necrotic District;Doom Haven;Haunt Realm;Rotten Nation;Forsaken Territory;Infected State;Abhorrent Expanse;Malignant Land;Toxic Dominion;Ruined District;Ghostland;Cursed Sector;Radiant Nation"
			.split(";");
		for (var a4q = ["K ", " Y", "E ", " Z", " z", " s", "S "], aG7 = ["Kingdom of ", " Kingdom", "Empire of ", " Empire", " Dynasty", " Sultanate", "Sultanate of "], a7 = aG5.length - 1; 0 <= a7; a7--)
			for (var er = a4q.length - 1; 0 <= er; er--) aG5[a7] = aG5[a7].replace(a4q[er], aG7[er]);
		if (__fx.settings.realisticNames) aG5 = realisticNames;
	}, this.a2l = function() {
		var eY = a9.jd,
			a4U = ac.a4U,
			z5 = ac.z5,
			playerNamesData = a9.data.playerNamesData;
		if (!playerNamesData || playerNamesData.length < eY)
			for (var a7 = 0; a7 < eY; a7++) a4U[a7] = z5[a7] = "Player " + au.iv(1e3);
		else
			for (a7 = 0; a7 < eY; a7++) a4U[a7] = z5[a7] = playerNamesData[a7]
	}, this.a3 = function() {
		if (9 === a9.jx) {
			for (var dz = au.random(), aGD = aG5, aGE = aG6, eY = aGD.length, kO = a9.data.teamPlayerCount[7], a4U = ac.a4U, z5 = ac.z5, a7 = kO - 1; a7 >= a9.jd; a7--) a4U[a7] = z5[a7] = aGD[(a7 + dz) % eY];
			for (eY = aGE.length, a7 = kO; a7 < a9.eV; a7++) a4U[a7] = z5[a7] = aGE[a7 % eY]
		} else(2 === a9.data.playerNamesType ? function() {
			for (var eY = a9.eV, a4U = ac.a4U, z5 = ac.z5, playerNamesData = a9.data.playerNamesData, a7 = a9.jd; a7 < eY; a7++) a4U[a7] = z5[a7] = playerNamesData[a7]
		} : 1 === a9.data.playerNamesType ? function() {
			for (var a4U = ac.a4U, z5 = ac.z5, a7 = a9.jd; a7 < a9.eV; a7++) a4U[a7] = z5[a7] = "Bot " + au.iv(1e3)
		} : function() {
			for (var aGD = aG5, eY = aGD.length, dz = au.random(), a4U = ac.a4U, z5 = ac.z5, a7 = a9.jd; a7 < a9.eV; a7++) a4U[a7] = z5[a7] = aGD[(a7 + dz) % eY]
		})()
	}
}

function cp() {
	this.aGF = [], this.aGG = [], this.dU = function() {
		this.aGF = [], this.aGG = []
	}, this.iS = function() {
		0 <= this.aGF.length && this.aGH(this.aGF), 0 <= this.aGG.length && this.aGH(this.aGG)
	}, this.aGH = function(g) {
		for (var es = -1, a7 = g.length - 1; 0 <= a7; a7--)
			if (g[a7].ln--, g[a7].ln <= 0) {
				es = a7;
				break
			} for (a7 = es; 0 <= a7; a7--) g.shift()
	}, this.a3N = function(id, y7, aGI) {
		return this.eu(this.aGF, id, y7, aGI)
	}, this.aGJ = function(id, y7, aGI) {
		return this.eu(this.aGG, id, y7, aGI)
	}, this.eu = function(g, id, y7, aGI) {
		return ! function(g, id, y7) {
			var a7, k2;
			for (a7 = y7.length - 1; 0 <= a7; a7--)
				for (k2 = g.length - 1; 0 <= k2; k2--)
					if (g[k2].player === y7[a7] && id === g[k2].id) return 1;
			return
		}(g, id, y7) && (aGI && function(g, id, y7) {
			var a7;
			for (a7 = y7.length - 1; 0 <= a7; a7--) g.push({
				player: y7[a7],
				id: id,
				ln: 384
			})
		}(g, id, y7), !0)
	}
}

function cV() {
	this.z5 = new Array(a9.eV), this.a4U = new Array(a9.eV), this.a1e = new Uint8Array(a9.eV), this.lU = new Uint8Array(a9.eV), this.i9 = new Uint16Array(a9.eV), this.iB = new Uint16Array(a9.eV), this.iA = new Uint16Array(a9.eV), this.iC =
		new Uint16Array(a9.eV), this.gM = new Uint32Array(a9.eV), this.vy = new Uint32Array(a9.eV), this.ga = new Uint32Array(a9.eV), this.g0 = null, this.gE = null, this.gF = null, this.ey = null, this.oe = new Uint16Array(a9.eV), this.ia =
		new Uint16Array(a9.eV), this.ib = new Uint16Array(a9.eV), this.yt = new Uint16Array(a9.eV), this.yx = new Uint8Array(a9.eV), this.a1k = new Uint16Array(a9.eV), this.dU = function() {
			this.z5.fill(""), this.a4U.fill(""), this.a1e.fill(0), this.lU.fill(0), this.i9.fill(0), this.iB.fill(0), this.iA.fill(0), this.iC.fill(0), this.gM.fill(0), this.vy.fill(0), this.ga.fill(0), this.g0 = new Array(a9.eV), this.gE =
				new Array(a9.eV), this.gF = new Array(a9.eV), this.ey = new Array(a9.eV), this.oe.fill(0), this.ia.fill(0), this.ib.fill(0), this.yt.fill(0), this.yx.fill(0), this.a1k.fill(0)
		}
}

function cn() {
	this.aAM = function(player) {
		aC.lT(player), a9.yI++, ac.a1e[player] = 2, ac.yt[player] = be.yn.aDe(), player === a9.eI && (aT.show(!1, !1), aS.a8k(), bN.result.yv()), ab.a4Y(player)
	}
}

function cP() {
	this.jg = null, this.je = 0, this.a2p = function() {
		for (this.je = 0, a7 = a9.eV - 1; 0 <= a7; a7--) 0 !== ac.lU[a7] && this.je++;
		this.jg = new Uint16Array(this.je);
		for (var eY = 0, a7 = 0; a7 < a9.eV; a7++) 0 !== ac.lU[a7] && (this.jg[eY++] = a7)
	}, this.lA = function() {
		for (var gM = ac.gM, vy = ac.vy, yx = ac.yx, jg = ah.jg, a7 = ah.je - 1; 0 <= a7; a7--) {
			var dk, g6 = jg[a7];
			gM[g6] <= bH.dl(vy[g6], 4) ? ag.dd(g6) : gM[g6] >= vy[g6] ? (dk = gM[g6], 250 <= (vy[g6] = dk) && (yx[g6] = 1)) : vy[g6] -= Math.max(1, bH.dl(vy[g6] - gM[g6], 1e3))
		}
		this.aGN()
	}, this.aGN = function() {
		for (var lU = ac.lU, jf = this.jg, a9O = this.je, a7 = a9O - 1; 0 <= a7; a7--) 0 === lU[jf[a7]] && (jf[a7] = jf[--a9O]);
		this.je = a9O
	}
}

function cX() {
	var aGO;
	this.k7 = null, this.k6 = 0, this.dU = function() {
		aGO = [], 9 === a9.jx && this.aGP()
	}, this.aGP = function() {
		var aGQ = [57, 85, 105, 150, 190, 333];
		if (this.k7 = [0, 0, 0, 0, 0, 0], this.k6 = 0, a9.jd <= aGQ[0]) this.k6 = aGQ[0] - a9.jd, this.k7[0] = a9.eV - a9.jd - this.k6;
		else
			for (var a7 = 1; a7 < 6; a7++)
				if (a9.jd <= aGQ[a7]) {
					this.k7[a7 - 1] = 512 - aGQ[a7 - 1] - bH.dl((512 - aGQ[a7 - 1]) * (a9.jd - aGQ[a7 - 1]), aGQ[a7] - aGQ[a7 - 1]), this.k7[a7] = 512 - a9.jd - this.k7[a7 - 1];
					break
				} a9.k1 = a9.eV - a9.jd, a9.data.numberTeams = (0 < a9.jd) + (0 < a9.k1), a9.data.playerCount = a9.vU = a9.jd + a9.k1, a9.data.teamPlayerCount = new Uint16Array([0, 0, 0, 0, 0, 0, 0, a9.jd + this.k6, a9.k1 - this.k6]), a9.a2f
		.a2j()
	}, this.aDl = function(player) {
		aGO.push({
			player: player,
			g1: 14 + au.iv(20)
		})
	}, this.iS = function() {
		if (9 === a9.jx)
			for (var a7 = aGO.length - 1; 0 <= a7; a7--) --aGO[a7].g1 <= 0 && (ab.os(aGO[a7].player, 0, af.wn.x8 + af.wn.xM), aGO.splice(a7))
	}
}

function d4() {
	function aGf() {
		return {
			ej: bO.ej,
			ek: bO.ek,
			ut: bO.ut,
			up: bO.up,
			uq: bO.uq,
			uu: bO.uu,
			eE: bO.eE,
			mapSeed: bO.mapSeed
		}
	}

	function aGX(a7) {
		return 1 !== a7 && bO.aAi(a7) && a7 !== bO.aGg()
	}
	this.aGS = 22, this.aDw = 4096, this.ej = 0, this.ek = 0, this.ut = null, this.up = null, this.uq = null, this.uu = null, this.eE = 0, this.mapSeed = 0, this.ur = !1, this.us = new aGT, this.uj = new aGU, this.a4w = new aGV, this.dU =
function() {
		this.uj.dU()
	}, this.a3 = function(map, aGW) {
		((map %= this.aGS) !== this.eE || aGX(this.eE) && aGW !== this.mapSeed) && (this.ur = !1, this.us.aGY(), au.a2k(map), this.eE = map, this.mapSeed = aGW, aGX(map) && (bO.uj.uk[map].aGZ = aGW), this.aAi(this.eE) ? (map = bO.uj.uk[this.eE],
			this.ej = map.a1, this.ek = map.j7, au.a2k(map.aGZ), al.a3([this.ej, this.ek, map.lZ, map.lW]), aGb(), ak.aGc(), al.aGd()) : aGa())
	}, this.aGe = function(map, aGW) {
		var fG = aGf(),
			map = (this.a3(map, aGW), this.us.aGY(), aGf());
		return this.ej = fG.ej, this.ek = fG.ek, this.ut = fG.ut, this.up = fG.up, this.uq = fG.uq, this.uu = fG.uu, this.eE = fG.eE, this.mapSeed = fG.mapSeed, map
	}, this.a34 = function(canvas) {
		canvas && this.ut !== canvas && (this.ej = canvas.width, this.ek = canvas.height, this.ut = canvas, this.up = this.ut.getContext("2d", {
			alpha: !1
		}), this.hE = this.up.getImageData(0, 0, this.ej, this.ek), this.uu = this.hE.data, this.eE = this.aGg(), this.mapSeed = 0, bO.uj.uk[this.eE].name = a9.data.mapName)
	}, this.eD = function(a7) {
		return 3 === a7 || 7 === a7 || 9 === a7 || 21 === a7 || a7 === this.aGg()
	}, this.aGh = function(a7) {
		return 2 === a7 || 7 === a7 || 9 === a7 || 20 === a7
	}, this.aGi = function(a7) {
		return 1 === a7
	}, this.aGg = function() {
		return this.aGS
	}, this.aAi = function(a7) {
		return void 0 === this.uj.uk[a7].aGj
	}, this.a33 = function(pB) {
		return 0 === pB.mapType ? pB.mapProceduralIndex < 10 ? pB.mapProceduralIndex : 10 + pB.mapProceduralIndex : 1 === pB.mapType ? pB.mapRealisticIndex + 10 : void 0
	}, this.aAj = function(pB, aGk) {
		0 === pB.mapType ? pB.mapProceduralIndex = aGk < 10 ? aGk : aGk - 10 : 1 === pB.mapType && (pB.mapRealisticIndex = aGk - 10)
	}
}

function aGT() {
	function aGt() {
		bO.us.iS()
	}

	function aGz(g6, aGy) {
		0 < aGy && (bO.uu[g6] += aGy, bO.uu[g6 + 1] += aGy, bO.uu[g6 + 2] += aGy)
	}

	function h1(g6) {
		return bO.uu[g6 + 2] > bO.uu[g6] && bO.uu[g6 + 2] > bO.uu[g6 + 1]
	}
	this.a77 = -1, this.zM = 0, this.aGl = 0, this.aGm = 8, this.aGn = 32, this.aGo = 8, this.aGp = 32, this.aGq = [0, 0], this.a6B = [0, 0, 0, 0], this.i4 = null, this.aGr = !0, this.aGs = !1, this.aGY = function() {
		-1 !== this.a77 && clearTimeout(this.a77), this.a77 = -1, this.i4 = null, al.aGd()
	}, this.dU = function() {
		7 === aW.zU() || this.aGs || (this.aGr = !0, this.zM = 0, this.aGl = 1, this.aGq = [bO.uj.uk[bO.eE].vC[0], bO.uj.uk[bO.eE].vD[0]], this.a6B = [bO.uj.uk[bO.eE].aGj[3], bO.uj.uk[bO.eE].aGj[4], bO.uj.uk[bO.eE].aGj[5], bO.uj.uk[bO.eE].aGj[
			6]], this.aGm = bO.uj.uk[bO.eE].aGj[7], this.aGn = bO.uj.uk[bO.eE].aGj[8], this.aGo = bO.uj.uk[bO.eE].aGj[9], this.aGp = bO.uj.uk[bO.eE].aGj[10], this.aGr ? this.a77 = setTimeout(aGt, 16) : this.iS())
	}, this.iS = function() {
		if (8 === aW.zU() && aD.lo()) this.a77 = setTimeout(aGt, 16);
		else {
			if (0 === this.zM) {
				var aGZ = au.aGu();
				if (au.a2k(bO.uj.uk[bO.eE].aGj[2]), al.a3([bO.ej, bO.ek, bO.uj.uk[bO.eE].aGj[0], bO.uj.uk[bO.eE].aGj[1]]), au.a2k(aGZ), this.i4 = al.aGv(), this.zM++, this.aGr) return void(this.a77 = setTimeout(aGt, 16))
			}
			for (var g6, eK, aGZ = this.aGr ? 10 : 1e6, aGZ = bO.ek - this.aGl - 1 < aGZ ? bO.ek - this.aGl - 1 : aGZ, wB = this.aGl + aGZ, eh = this.aGl; eh < wB; eh++)
				for (var ef = 1; ef < bO.ej - 1; ef++) h1(g6 = 4 * (eK = ef + eh * bO.ej)) ? this.aGw(g6, eK, 1) : (this.aGw(g6, eK, 0), function(ef, eh, g6) {
					return 1 < ef && h1(g6 - 4) || ef < bO.ej - 2 && h1(g6 + 4) || 1 < eh && h1(g6 - 4 * bO.ej) || eh < bO.ek - 2 && h1(g6 + 4 * bO.ej)
				}(ef, eh, g6) && this.aGx(ef, eh));
			this.aGl = wB, this.aGl >= bO.ek - 1 ? (bO.up.putImageData(bO.uq, 0, 0, 1, 1, bO.ej - 2, bO.ek - 2), bb.dc = !0, this.aGY()) : this.aGr && (this.a77 = setTimeout(aGt, 16))
		}
	}, this.aGw = function(g6, eK, e0) {
		aGz(g6, Math.floor(this.aGq[e0] + this.a6B[e0] * this.i4[eK] / 1e4) - bO.uu[g6])
	}, this.aH0 = function(g6, dz, aH1, e0, a6B) {
		aGz(g6, Math.floor(this.aGq[e0] + (1 - dz / aH1) * a6B) - bO.uu[g6])
	}, this.aGx = function(kj, kk) {
		for (var g6, dz, aH1, a6x = kj - this.aGn, aH2 = kk - this.aGn, wC = kj + this.aGn, wB = kk + this.aGn, a6x = a6x < 1 ? 1 : a6x, wC = wC > bO.ej - 2 ? bO.ej - 2 : wC, wB = wB > bO.ek - 2 ? bO.ek - 2 : wB, eh = aH2 < 1 ? 1 : aH2; eh <=
			wB; eh++)
			for (var ef = a6x; ef <= wC; ef++) h1(g6 = 4 * (ef + eh * bO.ej)) ? (aH1 = this.aGm + (this.aGn - this.aGm) * this.i4[ef + bO.ej * eh] / 1e4, Math.abs(kj - ef) > aH1 || Math.abs(kk - eh) > aH1 || aH1 <= (dz = Math.sqrt((kj - ef) * (
				kj - ef) + (kk - eh) * (kk - eh))) || this.aH0(g6, dz, aH1, 1, this.a6B[3])) : (aH1 = this.aGo + (this.aGp - this.aGo) * this.i4[ef + bO.ej * eh] / 1e4, Math.abs(kj - ef) > aH1 || Math.abs(kk - eh) > aH1 || aH1 <= (dz = Math
				.sqrt((kj - ef) * (kj - ef) + (kk - eh) * (kk - eh))) || this.aH0(g6, dz, aH1, 0, this.a6B[2]))
	}
}

function aGb() {
	2 === bO.eE ? aH3([256], [256], [0, 205, 256], [500, 500, 0], [0, 0, 0]) : 7 === bO.eE ? aH3([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0]) : 8 === bO.eE ? aH3([410], [410], [0, 120, 210], [0, 80, 640], [0, 0, 0]) : 9 === bO.eE ? aH3([
		512], [512], [0, 70, 180, 200, 290, 420, 512], [500, 500, 0, 0, 500, 500, 0], [0, 0, 0, 0, 0, 0, 0]) : 20 === bO.eE && aH3([512], [512], [0, 380, 512], [500, 500, 0], [0, 0, 0])
}

function aH3(aH4, aH5, aH6, aH7, aH8) {
	for (var ef, eh, aHA, aHB, a0l, aHC, hf = aH4.length - 1, aH9 = bO.ej + bO.ek, eY = (aH9 *= aH9, aH6.length), a7 = eY - 1; 0 <= a7; a7--) aH6[a7] *= aH6[a7];
	var aHD = new Array(eY),
		aHE = new Array(eY),
		aHF = new Array(eY),
		f0 = al.aGv();
	if (void 0 === aH8)
		for (aH8 = new Array(eY), a7 = eY - 1; 0 <= a7; a7--) aH8[a7] = 0;
	for (a7 = 1; a7 < eY; a7++) aHD[a7] = aH6[a7] - aH6[a7 - 1], aHE[a7] = aH7[a7] - aH7[a7 - 1], aHF[a7] = aH8[a7] - aH8[a7 - 1];
	for (ef = bO.ej - 1; 0 <= ef; ef--)
		for (eh = bO.ek - 1; 0 <= eh; eh--) {
			for (aHA = aH9, a7 = hf; 0 <= a7; a7--) aHA = (aHB = (ef - aH4[a7]) * (ef - aH4[a7]) + (eh - aH5[a7]) * (eh - aH5[a7])) < aHA ? aHB : aHA;
			for (a0l = aH7[eY - 1], aHC = aH8[eY - 1], a7 = 1; a7 < eY; a7++)
				if (aHA < aH6[a7]) {
					a0l = aH7[a7 - 1] + aDE((aHA - aH6[a7 - 1]) * aHE[a7], aHD[a7]), aHC = aH8[a7 - 1] + aDE((aHA - aH6[a7 - 1]) * aHF[a7], aHD[a7]);
					break
				} aHG(bO.ej * eh + ef, a0l, aHC, f0)
		}
}

function aHG(e0, a0l, aHC, f0) {
	a0l < 500 ? f0[e0] = bH.dl(f0[e0] * a0l * 2, 1e3) : 500 < a0l && (f0[e0] += bH.dl(2 * (1e4 - f0[e0]) * (a0l - 500), 1e3)), f0[e0] += bH.dl(aHC * (10 * a0l - f0[e0]), 1e3)
}

function cZ() {
	var aHH;

	function aHR(a19, hG, ef, eh, globalAlpha) {
		bO.up.save(), bO.up.globalAlpha = globalAlpha, bO.up.imageSmoothingEnabled = !1, bO.up.scale(hG, hG), bO.up.drawImage(a19, Math.floor(ef * (bO.ej / hG - a19.width)), Math.floor(eh * (bO.ek / hG - a19.height))), bO.up.restore()
	}
	this.a4t = 0, this.a4u = 0, this.a4v = 0, this.a4w = 0, this.dU = function() {
		(aHH = new Array(bO.aGS))[0] = {
			a1: [0, 5e3, 8e3, 1e4],
			dz: [220, 250, 255, 220],
			rx: [190, 220, 0, 0],
			es: [170, 200, 0, 0]
		}, aHH[1] = {
			a1: [0, 4e3, 5e3, 6e3, 1e4],
			dz: [25, 0, 100, 0, 25],
			rx: [25, 0, 0, 0, 25],
			es: [25, 0, 0, 0, 25]
		}, aHH[2] = {
			a1: [0, 500, 2500, 2999, 3e3, 3200, 4200, 5200, 5700, 8800, 1e4],
			dz: [15, 15, 70, 40, 48, 48, 252, 40, 40, 20, 30],
			rx: [80, 80, 190, 90, 46, 46, 248, 180, 180, 90, 140],
			es: [120, 120, 220, 110, 37, 37, 217, 10, 10, 10, 10]
		}, aHH[3] = {
			a1: [0, 400, 1899, 1900, 3200, 4500, 6e3, 7700, 8499, 8500, 9500, 1e4],
			dz: [10, 10, 20, 10, 30, 10, 16, 40, 50, 55, 230, 230],
			rx: [10, 10, 40, 50, 100, 40, 80, 120, 80, 55, 230, 230],
			es: [80, 80, 200, 10, 60, 10, 16, 40, 50, 55, 230, 230]
		}, aHH[4] = {
			a1: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
			dz: [10, 10, 20, 10, 10, 170, 212],
			rx: [20, 20, 60, 100, 100, 110, 170],
			es: [70, 70, 160, 30, 30, 60, 120]
		}, aHH[5] = {
			a1: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
			dz: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
			rx: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
			es: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25]
		}, aHH[6] = {
			a1: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
			dz: [10, 10, 60, 255, 255, 200, 200],
			rx: [10, 10, 60, 255, 255, 200, 200],
			es: [80, 80, 255, 255, 255, 200, 200]
		}, aHH[7] = {
			a1: [0, 400, 1999, 2e3, 3200, 4e3, 4700, 5500, 6500, 9500, 1e4],
			dz: [10, 10, 80, 255, 255, 55, 6, 70, 20, 155, 255],
			rx: [10, 10, 90, 245, 245, 170, 80, 190, 20, 155, 255],
			es: [80, 80, 255, 235, 235, 55, 26, 10, 20, 155, 255]
		}, aHH[8] = {
			a1: [0, 700, 1300, 1900, 1901, 2500, 3400, 6e3, 1e4],
			dz: [25, 30, 30, 30, 255, 255, 30, 40, 20],
			rx: [25, 30, 150, 150, 245, 245, 80, 150, 70],
			es: [60, 170, 170, 170, 235, 235, 30, 40, 40]
		}, aHH[9] = {
			a1: [0, 400, 2009, 2010, 3300, 4e3, 5200, 6500, 8e3, 9500, 1e4],
			dz: [10, 10, 80, 255, 255, 55, 23, 36, 20, 155, 255],
			rx: [10, 10, 90, 245, 245, 170, 60, 160, 20, 155, 255],
			es: [80, 80, 255, 235, 235, 55, 9, 72, 20, 155, 255]
		}, aHH[20] = {
			a1: [0, 5500, 6700, 6999, 7e3, 7300, 7600, 8200, 1e4],
			dz: [5, 5, 70, 70, 255, 255, 252, 10, 8],
			rx: [20, 28, 190, 190, 255, 255, 248, 90, 60],
			es: [60, 80, 220, 220, 220, 220, 217, 10, 8]
		}, aHH[21] = {
			a1: [0, 1500, 3e3, 4e3, 5e3, 5999, 6e3, 9500, 1e4],
			dz: [12, 30, 10, 16, 40, 50, 55, 170, 170],
			rx: [45, 100, 40, 80, 120, 80, 55, 170, 170],
			es: [12, 60, 10, 16, 40, 50, 55, 170, 170]
		}
	}, this.aGc = function() {
		var aHQ, a7, er, fG, hE = function() {
				var hE;
				return bO.ut = document.createElement("canvas"), bO.ut.width = bO.ej, bO.ut.height = bO.ek, bO.up = bO.ut.getContext("2d", {
					alpha: !1
				}), hE = bO.up.getImageData(0, 0, bO.ej, bO.ek), bO.uu = hE.data, hE
			}(),
			a1 = aHH[bO.eE].a1,
			dz = aHH[bO.eE].dz,
			rx = aHH[bO.eE].rx,
			es = aHH[bO.eE].es,
			f0 = al.aGv(),
			eY = a1.length - 2,
			aHL = new Array(1 + eY),
			aHM = new Array(1 + eY),
			aHN = new Array(1 + eY),
			aHO = new Array(1 + eY);
		for (er = eY; 0 <= er; er--) aHL[er] = a1[er + 1] - a1[er], aHM[er] = dz[er + 1] - dz[er], aHN[er] = rx[er + 1] - rx[er], aHO[er] = es[er + 1] - es[er];
		for (a7 = bO.ej * bO.ek - 1; 0 <= a7; a7--)
			for (er = eY; 0 <= er; er--)
				if (f0[a7] >= a1[er]) {
					fG = f0[a7] - a1[er], bO.uu[4 * a7] = dz[er] + aDE(aHM[er] * fG, aHL[er]), bO.uu[4 * a7 + 1] = rx[er] + aDE(aHN[er] * fG, aHL[er]), bO.uu[4 * a7 + 2] = es[er] + aDE(aHO[er] * fG, aHL[er]), bO.uu[4 * a7 + 3] = 255;
					break
				} bO.up.putImageData(hE, 0, 0), bO.aGi(bO.eE) && aX.s1() && bO.aGi(bO.eE) && (hE = aX.aCL("arena"), aHQ = aX.aCL("territorial.io"), aHR(hE, 5, .5, .5, .1), aHR(aHQ, 2, .5, .45, .1)), bO.ur = !0, bb.dc = !0
	}, this.a2n = function() {
		for (var g6, ef, eh, aHS, aHT, fI, a4u = 0, a1 = bO.ej, j7 = bO.ek, fG = a1 * j7 * 4, aHU = a9Y, aHV = bO.uu, a7 = a1 - 1; 0 <= a7; a7--) aHU[(g6 = a7 << 2) + 2] = aHU[fG - g6 - 2] = 3;
		for (fG = 4 * a1, a7 = j7 - 1; 0 <= a7; a7--) aHU[(g6 = a7 * fG) + 2] = aHU[g6 + fG - 2] = 3;
		for (aHS = a1 - 1, aHT = j7 - 1, eh = 1; eh < aHT; eh++)
			for (fG = eh * a1, ef = 1; ef < aHS; ef++) fI = 1 - (aHV[(g6 = fG + ef << 2) + 2] > aHV[g6 + 1] && aHV[g6 + 2] > aHV[g6]), aHU[g6 + 2] = 2 - fI, a4u += fI;
		this.a4t = (a1 - 2) * (j7 - 2), this.a4w = 0, bO.eD(bO.eE) && (bO.a4w.aHW(), bO.a4w.aHX()), this.a4u = a9.jN = a4u - this.a4w, this.a4v = this.a4t - this.a4u - this.a4w
	}
}

function aGa() {
	var p0;
	10 === bO.eE ? p0 =
		"DYDz2ESNu-0UYCCrS9c3pBUrKHc94BhIBhIJpIIBnMIAAIrKSSpKABmgf9e7X7ecX-5P0baOy191XXX7eegf9mcfUrrxrKppppKpKSrzUMMMSKKKrJcXcXcmgcXnKIKBmnCIJonCKrrSrrSSxSS9XcJnBe9XemmWXeX99chMIAEprrSrrtbrxIrMKBn9eBcecX9X7f99X90e577VX1VcOWX16XX7X999cX7eWyXXccVVX6rUSrrwUrlzpbbrrU6xzztzxzrztzbaOtaOa5-0WV-77e-9119HcXXZecccceXXX7ce9Xcce9e9meeVof919ee9Wzy5XeXYS9KBcXee_He6ce1ee0zxzta5UaX99c1mXcXhEJp9cNHWcTN9BcnAzJoorIBe0c--nIJoonSIBe-OX-NNOXWbcBgzIHX9xHzS9mcCSI9-nBrrorK9VcP-jHe9_BhxzKHcWC9mZp9-3n9fBnS970a6zs7egrIAAIRUKocXX9gx9npKaUxBppABe5OdHpBe-AC9-17TOWABpKI9-7JmnC6zGtxIBmen9egp6aUlyOzbrbbqUzxHXgjKKBc-ZehlxoeeoxObonox9XonAUbzS9efBdCAArHmjISBhEJnAofBUIJgrpocXxIBUoxHVmnBmmXAExoUxABmdAIBgnBonIAC6oxHVgfMHcXcUXAAGxIBgfxJch9c3enCMzSBe9eXomxHeBgmeCSBgpKMp9hzHfIEzHnArSxHX7pSrUHcnCMrUpSa5UIonABrSBccnBopJttzbxpBonHXpIEKMrMSrxpKxzUzltyUtaTOaOaObaT5UzNTOV0c116rMMKSKrxIKpJpKMSKMGxISCrKMSpKMKrSpSpI9xp9_pMMMMSBoxSryTUUxa5P7-0ttbWzzzxzaN5-NOWVN--0Wa5-0X-0VNVN7TOzaOWzL0bbX0y7NN5Ua17V111749c79e1c-V-----Ow7--N57-OzaN0ba156byNNT6q5OzWaT55-OsOX1777Oa55-5T5UX16tzUOyUtzrpzUrSKKSSAoemnKCIAIICI9KHn9CKBhCSHgenSAJnIJxSMMKKSSpKoopKKHpSoorSzxpWxMS-UKISaOxMOxttyOzy5OzbbtyTOzbtaUxyUyTT6porUrSztzzMSp9eceoogeZp9ZxJx9geeeXe9eZgeC9gegemp9gmpKMSonSxKrrbaUMIKJpMKKKpIACBmeccV71XX7V1mmmmhCCCKJompKKJpMKSKSKpKMJpKBeeceenKpzHnBnBmceee-X1117ememfBn9mfCBmgemf9mfBmf9xromcec7Us8He0u99cWtbc-PeCCS9VecZnBnBemfBn9X9c6aOXA997Y99755VXc6tXXmV5Os-ObVN0yN0bzaT-7ec7N70Wa-OV-5eggnHon9f9efCBpMzop97epCKIpSIBpKrrSKKIKKMKMJehzKKErJeABnIAJc717f9eBnAJzrHe7V9d9ef9gmopKUKC9gmcV6tX73eCIJoonIBnBnBgnCHgjJeZfA9megeegfKCICCJnIA9meZf9mfIEMof9XceXe97X-59XdCIKKpKKCJoeVcf97mZmVVV199YJmX7gceY9gpEOxMMJecrSSGzOxSrxprSxzJzUopSrIxKBpUMIpMprSropEMHnBrpprK91AJpJpIICpBopICCJonKBn9mcme9VcX9ee7X7e9ece9Xe19XcX91Xee9Xcce9VVVccefAAABe7emhBnSSKMSIJhCIJpKJppCKKIIIICJgpIBpAIHpBcoooonIKLObpBnKlzrKIKCJpCJpBnBpUzrrxpxSbbwUxzUprpppppJppMMIrrSSRUbWsOwUzUltbzrxzUzSzUbrrTTUUrSbbV6WbaTOzxzyN5TN-T5TOxbtts71-X-70V0sOWsObbaT0sTObw70tbbzbxbzzyOtyUtbyUaOV1-N0cVN-50aOtza6tzlxzUxSrzUzSSxUSzzOzzs5OyOtyOyUztyObaNOtaUrUxrrUSrrUrMSJrSIMSpKISzKUSpSrSSrzSMMxMSrMSpSrUzSSzzrTUMSpprSzMSzUxSSIEUSrzrUSpMKKxpKrKMKBmmrIKBgpKrzs6VOsUa--5ObzyN77-7X7e970V-5Oa5ObzxSxrzzSrKMUw-OV17X7X1X99X97X9X99cXXXXX977OaOVXeeeeecX7cX7X7X177-7-X-71-7XX97X97cX7VVV1--VObs970cVObtzbtyObrzxSomdKKSSMKqTN5NN0xrMIM5UrKKKpEKrSMSMprSrxMMUzrzrzSrSrSrHXenOtxrrxrxzSrrSrUrrSrSxMSxxKJpKKKJnKKrKIUUSrSrKKzKxKrSrSwUxIBnrxpSSpUzyOzzzzyUSxzRUpCBee7ecXce89omegpIBrpxzSrMJnKrMSFT0tbrMKxKL0VObxprSSlXV-11-c-X-WxzxFUaPcX777OzztzrSrMV-V75X96zzMKrUa9e-7V17gc9XeV90Bf957cVOzrMOX17X7X-X7X7V-N-6aUxCKzUUKprcX-UzSrN17WzrxrNX7ecV17WzzbaOtbxraObrOxrbxwUxpUzrzraOy5OVOWtzyOzzxbzVNXccXcXcX1-V197V-ec5Oy5N1--555UyN-N1---VOWX0Wtcc0aUMMyOs----Zc5-TOtsOWX7c0xzLN-NWbyOyUyUzrbxJe9gfTUxAMxrxzlbzbzbq5UKrJnAABnAAICETUtxSrzrpIpKIUSxraOaOVNTObzWa5NOtxxyOyOc-5A9YBmnBfHceX7-XXcX9e9Y9e5OzUbxSyVUX5OcUa1-UMqNNUbyOtsUWtWbWaObtzbyUWy6bzpJmoh9nIUI99oghSUzrrrSHeHohKCJgrKJemgcrS9nry6xSrUMStxzUSzqUrbrUxUSxxrrprUU6zSrbrtzUSUSzxMKxSMprMKIIIoonIBmohAIAHgf9eHeemfI9nA9mf9c9n9ZeXc9d9n9ccX7VZmoceeHVX1Zn9meZegegegfBhABehABonAHnABhCIBemee9eBfBeecgeohCUxzUbzxI9egegfAUUrHmegemecWcfCUp9meX9Beeef9onrSpAAKKKIyOzyUzJnBjSrxSSIBhMSHgcVYKxBmnzrROzpzxzSKKCKUzKBnoUzzbzpJmegfzyUzFObyUzrrzpKUSlzry6sUyUVN-7NOzbzzlzrzUrUSrrURUxzbzsTUsUWts5NOWa5ObzrUxrtyOWWaOzMSJnIAIprMJorKMIrSKMKKpUKCBonKMJnCJpCIKIKMJmpKIMKJpCJpBxBonHomoemmegnHf9f9cX7ce99emecgn9h9eA9nCHgfBnAIBfHh9eXXce9emec7f9ec1me89eeceme89fHeemX77-ceeeemeX9X9eeecV-V9e9Xe7e9eefBnBeefBfHmnBnBnKBpIEpKxMSKJnBpBnBnBmgmeeX9cXXVcX7Xce1eXcXe7ee9eXeeeX9X7V7V77V--XcXee7ec7X9eXXceX9f9eeee997X9Ve7Zee7WaX5X2Be-cee17X--0tsUbtaT0ta5-Oc--7Xe-X7--OVUtbVT--QA9nBmcXV--97X9ememggnBecJceeXme-cXdABeXeX97cnHgeeI9IA9XcVX7eX99e9e9mgeXeXemmceZmXe9ceXemXmggf9mmnAI9X1eIHcXfBghBmf9BemcX9Y9Ve9--JmZeccXA9Xd9cX9VXVVc7-V-Xee_BnJhIIBnJnBmohBgohBcmmf9eHf99Hf9HmommmmV5N-MvxppxrIICWzsOxX--OV5s0i1mopMKppzTOaN-0XXceV--0lJ7-90mzBlV2N7tRof9JqUsOaW7c8bwrrJchpK9-X7PBfHjKogcP0Jd92SMUwUlxMSErHegnrlxI9X7cY99e7hSzxpxSIIUHozogmgecYIExxxrrrKpKrSrMMrrlxtyUtxblxUyTUbyUUSaUy6Wzttbbc5N5N7V7XWaT7V6aZeVWsV9nIA9X2BmcWc7ooc--f9IBomV-0cnICBeXgn90Wc5TOa7-1-5cX---d11---esD---m8D-1VvAYqV-92glC5--NEEiqV-7Hsjk014I4wognBxwOs0Wc-D4y4gcT--0Y8X-0WalAk--0pHX-1Wsy6EV-a7EDhCBtaT9--X3IIV--_VJV0Ndepmzq1-0XeJbD-5XhvrCqTe-07iCnpteV-7iejk-iAtCxEIrrX71-2smknnEUUpze-e-c-1BtMB--2Kbq--YMmzV-sqPmrF7--Culc-HCwyxxcV-DEWXhte-DZ7mzorSr56eX170LG-rUSrSItzOueVc93c-5ZH-rrRP9-2d613nHdRUR6kP7-CZVZUEKUyUe91e-2ZYhnTPV-t8OMny7-1HZrT-DZf16A9mjFUzlsV--Hh_N-1HlyB-CZhCrSpzrkX7cX-2ZibAr-VMdC8brSrzUxSSIBxpHX17c8CrJe7rrUIpSrUxxzSrMIMOs5OVV7X7X7977V-7P19Xcce--8DNHk-LIcPSpN7-0ODtgnMN1-7Zz5USxyX9c--J2As-9J2CSu-08FHSrR7V-0G5xV-OH5vqV-0LEoV0OLiAnMN70D_f4UKIBnSBgzSrSxSSMSxpSpppzc-5TTUMbV716s117X1Xcce-cXXHcX--0Rs7V3dS04nKonpSSkV7----TMGPxrS-V7--MN-c0HMYnBnrIAIrK-OWV75V-tTEHotV-qMoqSMUUbe9HXV-mNcawnr6xtcVe-3aNiUIq1-6aOwMISlc1-6aSe6rROec-8ac9fISzuX-V1tf-1mnBrlWaN-NajMY9ggeoopCTTTTN6aN1HdgkXoohABnK9n9KJmpogeV-0XJenppSrUzJgghomhp9VnxIAAzOxWbbrIBnJmenBegozlWyObxIKBonIGaOVT50xSk6xJpEpIHnBonBoptxpr56xrzzbonCBnCMMSonzxJmopCIJomX7mceHcV7nJxSABhrbxEKCIJhAA9HgenABrUMbqUpSUrprSrbzzp9hABeXce9YAHcoomnBmmnBmmnpzaTTUrzzMpzWWblbyUUSrUrxbbzzblxrUUbrzSrtztzw6btV19ceWXWzq0aU6aTOta0a0V5777Xce7nA97VOa0X-17VUVV0V17-17X7V7-V----1-V-VcX9A9cWbbzyV-U5T5TOa5NNOaOV1Xe9ce99mZee5OtcWbaTTTTTOWe9ZeXcmcXVV38gtRnCMzSw1X6VcV08hu4rq9--tiGRrac-1Qfbg-dax4zrrIKoeBxErUlzSGbs0VP3eXX97XV-9R0KCsV1OlXjprrP7X7-HRQsCpVc2TRgLxJrKBeKKJe7BhIKKBlwOaUrNTUsNNNcNP91V---PS6VgopVN-LbHRrK999ezrxxoy5Tc7-0bJGjF--6Spy-5bU7rSbuXV4tsIYpKSSrSp50aX-177e-2baNMC5-2Otd7nHrpOba7cV2tv2dnICxz-Uk7cc0mUIkRnBpCBpCIJOWa0VNOtc-19UQnBeegmnIISxJns56zaOWtu7TV--URWN--VDLc-eVE7zSrUX7Xc-5WM4BN1DWTIggpBnEKKKESCWV5T5Wa-N0a9VsP6YRn9cmY9JggoggzUKHfA9XmcP9XZfIJhronABfISpxrUrrI9ABnBggrxxoe9fHmeBdCDUUrHf9orUogrzzJfUU6zUzbbbzrty6brbrxxz57OtsN5OsN5V5VT5V57N56yTUtsNN1cNNVV5VNeeeZeWtu77-XX-KgxCqWVV-P8w5qV-uAjtz5c15XwhBooopBonIKKJNN5-N5-6WVN-8ckmzArUOVeV-uDoWxNV--YoA7-TYoYRoxa57-1_P1T--8NKD-9dNS2ACAUta---dQzr-DPM79mmgcpI9chMKCppxxxrSzIbXc0aT1WVOxk7-N-9c0eauZgfAKrSrrSla-5-7n9-V1eVE3nKUwNVcV0eWZinCF5N0TcbkCMSrzr5OVPXCA9VXV-1b0uV0ezUBxUsXc--mhTc--n9_c1DnTIxCCSMKC9eCKClsT5OsN-V7NNV6QJcYxzUSxzSwUa7X9I99Xd9X-BhW8EE6rUw7ceV6fXkApBmf9f9hKGaOWzzzObV1V-PuipRpJ5--6iiarprP77--DrhL-0iv-fN-7jNKjExzXcc-Y1kshKK-5-V-wF2umWs-03EWs-03_Ms-23gdy-qlmyACJmcgfBnCIIrKpICUSIprUa0VOV5N5---V5---wRnFru7-E6kMClX-4lwIAzq9c-A7r-z5V7gdk8monBgfCCCElzbzxsN995-T5-KgiSunBnABmeeIHprrKJxpIISKICJpKprUzOcOzzUTN---0V--50aN1-1-PV7XX-SnCeY9f9mnUSSKzMtaOWa9VX--bBy1gzSxX-e-4nFNEAqTc-6C7Wgs-EC_DBjN-0nVb2N-3n_EYByN--nfWnV1Bx8ZorUaV9-CnqgbKISrNN9-9-8o5aACrSVWXV-C0gPk-jFRwSM6rsW9VV3h23TmfBjOxMUtaX17-6GYfE-0UHSjwfEzbxpUUq17ZcXeV-h8rqr--3odX6MF--8ogzvMJrN--V1xAI4npKwT7cV0Xp-Yf9nBeehKMKrzzSxrSxrUSzzSxrSMzSzzV-T-7V10Wa6VOWVT1mmeeegn9eeeXmcX97V-IJGnCr1--2JVvD-Bp7gzSxw6aeZcV0hHX5merts-EJjUhq7-2pGMvBtV-hJmVz1-1pJofqV-0KQ3c-0KztN-0L5k7-6LYvE--ILYxhTNc-0LZ57-ALu1CaV-4SIqV-hSQ3na--KpjX--ppknVESTPknBgmgn9f9f9onBmenSpMGzxbtbzbaOV6zbX9-NObWV-4TmmV3SToLnBnJnST5Oa-1-0px0YD-0pylvD--L3Ge--q54IV2CWmWnUUz5Pcec-nO-URhBoUy6VX-1qFuQGc-MOcagpR---CcERs-0PQUc3MPs8gehClzSzbzzUzxMr6tyUzzbzaTP0HgmcVXegeeeXeh9eX7e-JqqUEKIMpzz5T7cXX97-bRBpSKoT5X7--M4g1-grMIbBecemgfMxUpzMzObtu7V0zrrq7e9eV-MTaFhOy9VfLnt2-9-17117VcX1-1X97cVXX9177V-VXV9-WaOSMSSSSrrUSKMKxrrrUSxrrUzsOV7--N-tVN--N0bKIKKQCKRnKQCUtrTUtUSxpMprrUUKxSpxrpprMrxF-EcVGxTX" :
		11 === bO.eE ? p0 =
		"QREc7lR7oVUYGy_KJOJKKKKuK4OKT_K4KG_u_GJJO_3K_KKKL_4KL__KK_4_LKK_MjzuOOK_KKKOKLKKLLUjzji_KKMgyzdMjzgzzzEszzyzzjvuQvieeid_POOvzkzvzy_TvuOK4GKKvyyzzydJQi_OdKKaLOLajdOPuueaYBzydJdPOybvdbjeuvizwzujuQnunl2wBnBE2-EYBz2nk2kFzwBzznBydnwznEYwnnEBnnwkyvwzEgznzzEwwwwznnxK4KGOJ2zl2nzifvwyw-J0GGJ042nvzEvzwznJEnzlG42zg02KKGFzzEzzeT-woKK3EvoKLOJBnBnzE2EznnwnwznznzpJKKKKOOKG_G_LKFwl2zK8K4JK4KKKKKKKKKKKKF_g38EBemXeeeeeemeemgeXeegf9XgeeexCxzzzoenErMroeXeeegfEzSS9eVcghoeemf9YBe9ee9eXghrzzzKBfIUzrbzUzzzbryOxrzzbbsTXe9geY9egeeBeY91cUy6z6xtxbxzbzlzObrx6ztztue5UyT6zzbzbae7UxyOzzbzzbbtzyUyUtzztbyUzzbuecZeBeXeeecgeV--1ViZ-00JJIV379xwOLKKgzyzK2zF5g4ccBgcn9ggepUxAprzztxtyOzbzzbe90f9cXX99V-cAQAOx-PFLqqmemxp9zzttzIAzrrzzxzzze7X9ZeceX5ece---AorF0B4uUghzzae9-6VjJh_UznK---NUXV1NBEpOLYnzlJ--0X1X--Vl4pk-B5KYEc-D29vazJ-HkP9DmexzxxzzzrbztbseeeHeYHceXV-NC5uUF-R5YYCyX-2Vpc0jCF--5lM7-12TuM-hkQrZrS9X7f9e9enrSxrzaUxx9f9zzHhzUxqOaOsObbzSxoqUxyUY999c9Xcecce7eV5NDrSOLauUwzzzzEGK4K_0F2Z6YfEUoefUtzUzMyNNe9ceec0a2zdLQdyjwynxKKFznpGGJ--1-_X-AW0ZpjvnzCKKJ--1309--02HO---WrDV1sGfOOjzzn4KK-0FYN1qP-2W7RtfkF6J8G-geeemf9gemegfEbqUrxEbyTgecOwUbbxEbyTTUac-H3crrjCLEE1KoQBrofHegeecBefBeeegfAACxUHemeeeeegxrSrzxxoeeXXe9ecdAzUomXexzrzroeXeecc711_rI9nUSxxKMSryUzrzUpxKx9cV7cceghrrJnJmhBe9ee9VUrxy0a5-7e7VVX-7XccOVX99eefKKAAMxMIUxzMrxK9XXXXeXceXceee9mxxp9oeV9mf9eHgmeeWsXnHcmfA9oenJf9XcXcOby999exKKzMIJcceYBggghxrI9e9e99pxzpHeccceX110cXe7cXWzrUzUxzzrzrtzbaOcVcceXccce9Xceegcce6emeZe96buXeXoe7TZhBe2Bmc6eIBdC9eC9fHcHcAC9erxHed90C9MTUzoh9ZjJeofIAzHghHzI9nHYACCA9VxIHcfx9gmmnEJrKErJzSC9xrrrtyTOaUa0xSxKroxMSSrIMKqUlc6bztWx51--P7OyOy0tcX997V-NP6WsUaUbaOaX6VTOzzzxxpHnBnBggofCKSpJxUUo6pzzbtzyUzbxSzogfABeceef9mpSzoppI9e7X9nCCKMMK9fEI9ee19mfBgemh9W91WuI9gf9e5eX17N5NUXc0a1nBenUHfSorpMKMrHXh9XgmY9nMJmV1nIISC93fA9gnKBemp9e9XxKoeeeA9fSMzrxrpMSxMMHorIKII9eecgeceeee9gmghrKKCpKCIJonMozKJp6xyUzSppr5OttzzzzWWtyN5ObcV-5OaOWttyTTN5VWWbbzzrrxaOtbyNTUUrrSMMSpxrrSrUxxUUpSzSMKonIOaN6aVcVNOzUrL17ccXccVPeccX7717cXX-5V0zbzJxOboUKrKrrUxxrrSxxrSorIKSrMpUUISxxAESpGxrsVWzP7XXWzrrxVNXoccWcOcX-6xrV6tx0zxzUtbtzq99777WWVUV-50xaV0tsNUbzpUUzp9nUrpIyOzaUy9ge197e6zlbbbzbbyUzommhxonCHeIxxrxrxrUSxrUrrMKoogmmecmeeZcceX7eXHeeemmmn9eedCzHfoeeeZe_IMzIpoxHXKzUJxxUoUUprza0zxxxrUtyOaUUlbxIMKKKoopCIJpJoommeeeX9A9mmn9cce9Xe9ee19eXe17eA9mgnCKpJnBee7XXXcee7X-99XXeee9993cXV0ba5-XV0aOA919HgmeeBeY9mmX9ememef9ggn9ghA9mXcmeecX7gpCCCBnAAAABnCIICIKpJonCABnBgf9hBpBnBnCCCJonBnJnJonCIKprSKIMKKpJpCIKIIIHrSMpJjJxMpz6zHxCrrMMUSprKSIrMrMUUMrSxrSrSrrUUyTUbbtz6zbr6xxxtbtyOtyU56tzyUTUxzrSpxKMU6lWxzqNUSxpUxEMKJxCJnMKEUHhICEMrHxSUMSrMSrSppppMKMSSMKpKBxMKpppKKCBnCBopIKIKCEKCKKMMSpppSSSMMMMSSKKKKpSKKSKSMMMSrSSSMKpSSSppKICppMrUSyTUztbzzbrxaUq6zttbaObaOa5TOa5NOWWa5TT5-N50V7WWbaUbbtaOX-N-7-1-170cTT5ObaOa5OtttttbaOa5N5-1510c5V--0VVcX-1-V51-N7X-WWV55N55550ta6aNNOa5Oa5OaOaOtbaOaOaOaNOa55NNOV50a5-T50WWV-N--7nBf9mcmgcmmmeBgmee7X17eWba11X7VX7X79X97Jc7V7-V7117X7cV7---V1-X7X97--7X111111711-VX77V7-UMMMSMSrN0V5-UKKCMxpprSSSrMSSKprxrSSSMKKSKrMrrSrMKpprSrKrSSCKKppKpoxMUOzaTOzyUaTUttWtzbbyOts-OyUbbztVObyNNOyTV-0WxWWaNNN7X7VXceXXX17-7WWIBnIBonBd9eAA9Vc7NNV1CIK9117-797X7VX1111WbWy0xUzprSSSpprUxrSxxrzTUbqP6zrSKprxzxzzTUUUztzztxzzbtzSSUSMSzprSrrtzJmmfrSrSUSzaTN756xKxCSSIKMMKKpSKpMKprKprMKpSKpprMMMMMKrJxSSrSaNNOtVN6s---0WV17N-V-0aUWbyN0baOaOaNNOWbyOsN70btaUL0xLT6o-UM6lX6brSppSSSUUSrppEF6pSSSMKKCKVUMUL0tba-USSUKSKSSMKrMKpKSKKCKpIKIM6rSSpxMSppKSMKSSSpSrSxrUSlwT777VV---777X7XX19XXX--7V1Hc1--N0VN570c6bzKMUzrSxprK6xMxxrpCKS5NTT6cN0zltaTOa--57-11-V7X7VcX7c7X77977VN-Oa0aTObaUUoOxpKpqP70btyOwUsOw776rS6twUkUOtWaObX6ta0bVcOcWy5N-5T96XWaWccZeWWtaX97cecWzUxxq1X7cVX77VX999750a6VOttw1XecXnIBe9-VZceX7V0zTT-OtWWbrzSpCCUJltWbbbzxzUpoxopxTUUxprS9zMMSKKxGtaUtzV177177cX7X7X997-OtWaNX150a6V6rxUxtbaOV-NN0WV-75-0V77777X711-1X195XccccXZe_on9c29c799ecVOWaN-55NP-T-TUzzzzlzzzsUzxzzrxAqUyUzuA9770V-5UzbzOzSSUrOVOac7WzzxCrSUMJgpIJrKIHgrSJxSrMSrSrSrrSrSrSrrSrSrU55-X77TOe775OxsXX7X15WzMcXccX-Xee77-VX-UzkOzSq7UbzzxzSX5OVNUbaTP6xzrzccccce1XXeccWzzsP7ce-U6rSzSzbzUxxxzxzUwUqXcPVTT99XXce9eeXzS9cXXX9XceXe9e9ce9cece9e9ececeeeeeceexxxxrHee7ece7Ue9omeeXeeeeeeeccX999e9eeXgef9eeXXXeceec5eXefC9eWcPn9WeXeeef9hzSxHcfx9cBe9emee9X_Sp9e9Xe999XWyce7X9ceeeeXerp9eeeceecVeeeeen97d9ec_BemgeemVTOyTNUbttXVe9cce9eeef9e1ee95eeec--3mJ3-01RcfV-NIoOUF8R8uLgf9hIHeec1Xe9fBeh9mfEzzyUrHenxyUyUtzyUxzzbyTTNf9e0a0cWEvKdK_KKKLKOK_aJaPPOOUeKdUddLTyEukyvizjzzzGK43G3322EBkwBzkwwzwzwzwznwoKKJ0K1X2ABrpzzozzzaUWtacme9hxBcXBoeV9--7KZ5R0K1i5QpxUxzUyUzbxztyX9e9oe7eAHXe9eV--KycF0gAC-Bf9rUzta7c-54dtbV-61qbAAy---LztF1oAWqEUzrzxzbeXeecf9V-94pL6xF--Agu7--4xl31226aIBogfABfBf9nxxMyUztttttzbbzbyUtzbsX9f9e99eeec--5HLZ-A28MQry9f055LVqKKPKOaOddaKaKOOd_bizvy_MeOOOK_LPPK42BnJFzszEo0G4aLKOUjuOLO__GKKKKJHKG32K_KOKbnzzdKOLOeOO_-EoJG5KK_KKKGK2wzElGLK4K44JGJKLLLKFnLLOJF23dLLLK43_OK_KOOKFqKOKeK4KG43KKGGGOKKGKKJKKKKG0OKF_FOK_OKKKPLJK_KLK____LKOKKOLLMjidbzzdPPKOKJOG2pOKOKLLKOUu_PUzzzzYwzwydKdaOOKKOOKKLKaOK_OO__aEeOLTdzzEBydaaKdbEnzjfBnuzdPLLO_OLLOK_OLLLUzEnnEnzEnwwnz42zuRzEwwwwznK2nnwzEnEEEnnwzEzvdKKOLO_OOdOUEnwznnzYwnkEEzyEiuUvjzzzvjnyaTyuiz02yyawBkyeQeeOueddaUibuPJi__9gwnyaOOPTvuPJTbeLzEiYuEiaQEeRydiddddaJ-x4K4deadddaa_daaOdaOaOddePaPOaauddeufEeaLiuOfevduazjuzfvieeeuPueefiviiebe_3KvfjfEfiveePivjfiuiE-FGJ--3--4-FFF-FF33F-B-22vjyjeauefeiiuzefujidavuyuivfiuuvfeeuePaPiuvvjiiyyzyivvvvvyziyvzjzEnnEvyviviuvivjjzvjyyzwEii_viuviuo-2vjffdKHPdivgEijjieEigzjvfYyfno3-z2BzvvjeOiivffdideeeieOdeLKbeLuOOOOedaeOeidjgnueaaLOaafeveLyyvivffiiuuiiiiiiiivevfiiieiiviviyyvvvvvvvjiuvvjefeueieieeeddveTefeaieeeeQePevedeffeuieeuaeeeaeee_fiffiieeQeffideufj3323FwEjdyuMeuaveTuQeuLEeudG33_eLVzizvdjfzi_JibeJF44fzeeu2vc3BEfdvdjfy_vvfyEvd_TyfyeTgyY2yzFF-wz2zJGF3F-kz-F22Bn-0GKG43F-2BwzFk3-BoFC4300-EyzjzBo3-l0-zzzwzwzEBk2B-440-04443-EivzjjvzzwwkkBn2-B322BB-zyadY2-B2-nBkk-oF0-o-o2wBnnBnnEsnE2Ezsnvzk2nn32-nB-kk--BBl-2-23-3-BF-B-ysn2-kBBnEBBkn22-B--00-00GKK43GG03JG43KKOGJ_444OOFddF23BJHJGGGJJKOddG-kBKHJ44G-nB-K3-F3-F403JG3GJK45KGdGK8J3G44-3G04J3_LK2B23JK8G3FExKOLK__KGG4KOKG-3K4OHLK_affedaK-G-n2-F-wn3_aO___KaPJ4aOeadaOaLdG3G3GGK5O_OOOGGJFG3FFFF-k-22--n--GJ2K4KK_KKG_KF2n2-2-C-nu22-2-nBn-KKKOK_OPaeOdd_eOK0O_KOLJG44J33-FFF3-F-2-B-B-k2E202--n-wnE2yEEEB2ynkygEfynEvijz2y2GJ2zgzEgwygwyzvyigwwziiiveaaidfuuevfiE22-k-0---F----knBnBnnnnBnBwzBnnEwx-EsnGJEnkCJBBBFkB22nyaLdfeaBknB-EsnBnB-zznzKK2nzznEzx03BknBnBwznByEwzBnzBynnzjzdLJ_OL_aOigwnnBnyEnzEEnlGOJK4FpF-FnBOJGFzywnwkoJKOK_OK____aOJBEBwnEEEwwknwzzzzzzzzzzzEBwnnwzEswwwk-nC3LK2BLKK2wznJK4JK23J4-FzYsCG2lFoJEC332JCaOT_aLPJ8_OOJ34JBFnFwBEK4JF3G48K_4_44HLLPdaPaeOOaLLQiuudeOdaLOOOOOLKOeePPduOaOdGOdGJB3G2FFnBB-nB4K4_GG44GJC3GJK4KOKFwB-kG_F2BknBnnBwnEBzBwwnzwzC3EzwnEjzEEEEE4KK0-zjizwwwwFzzvih-yC02yijEnnnwkF2Ez2CJGGKKdeOKaO_Gbd___Fo-nEB48O_aOG2k2pK3EBzF2042wwwnzznnEEnlK_4F--Bnu7-D5P0Mj4-NFneHn99fHdEpA9e1mrUrMMy6rbyObacVUbsXc-95VQqU-0RC72gfrLTUX9WL7PGHOKOLKaLLO_aOzjzdKK8fyy2yvzzzzjnvEyszn-yvuyji_KjEzfvvdedLOOK_au_K_8KK4O_Oavznwzj2vYyiizdQjjyvjvzjnFJ43FEvyyvysEV2vkG-oJJ-J2vC2nzfvdvcyvB2EgwkznoHKJEKF44K444Fwkzjx4JEwoLK2EGKJ34KOGFCFK2C3GKKKLujnzuK_aK4K2Bl0KK_K__OOd_id_032E-wwwznKK-5koy5rxzzye9XeV0NQGfQzp409Fr2emf9gemeoemhxzoeenrzzzzzzxoeeeeHeeemnrUzzJr6zzzzbyUztttzIzrzrtzaP5Uxy1XXc7TOVNOcXemnCBoeVOX9IHeX9ec9V-7QyMR-O2VLYCrzOcTXeV-7R7oR-42W7vEc-16Tkb---xZJV2sUexOjjEzzlK4KJ--2yzH--10C8--0-gFV-7VNER-038rYV-7WePR--3FiX-8X7VOizvlGJF--GAnc-q7b4qavzwz43KJ--3In9--193W--G5YBk--7uzo-03SVI---Z6nF-JH3JgtV1NZFfOiznCGJ-03ZUnV-NZy-Ok--HUC7-18Epr--G9ncs--8SB3-23innD--1O-0-6lCPTmmnCzzbWa9c--8glJ--3qO1-3XRYCbzK-XlIJjmegemef9efDUzwUzx9fHfBfxyTTTUpsTUxzWttf9eeWtzu7-19Vk6-2lJH2nUze9VKcf22OuK5ObzzuOLKUzviaKzzzfzvwwzEwwwzYBzB0GF5JGaKOJOG__3a_OJBG4-PlNXPmfBnBnBofADUzJzbbbbbzpxzbXe0ccX9Bc6s--1mmx-6lYOwmextzUrP7cc-5BSZbV-45HC2T7-9BdhMxF6JOkqwemmmmf9e19nJemmmenzryUyTTUyUbbbbzbtzue7-qBstqKOOYvEEBo-45TmAqV-1Bzxq-CGcDCxzS9dEMrxowOX7V19X-6YINKaOgnk--leh3lV-cqZnQo-AGhLznASpxpObxa-cXcXV--sj9F--RjYc-9DO8aRk-JRodC5V1Ntt6OKvznCJ--6Flm--Yf48k-BTXJhc-LEJ7aTYC-0BTkwjJhyP7P1LYtQd_KPPLbePLnuafp-yEeddzzEuOiydeKOGdzeaK_jzjjuKKaOaOUEnynBzvnzVyzzEE4FnBwBGGOJBF334G0-3JKJEknBBlKKK-wnCF-RUIqgju-4Yv7daLnB--6voH-EYxyt_ueaYBBE24F-wUjugoqOWc09F4K5OGOOYyzBzElK-1m02NnLNP--32h4-0m0qgnqV-1FPCq--H2Gus--FRXJ--7Gue--38td-6H3zimfGzxLPWaX--3E7C--16gBV2O3CZOuLecn-n3--RX7jgyP--3G5C--18RXV3t3nbP_3_iju_Hz2-B-03XWAgfxyTcV-047KF--Xjy7--GPHJ0W7iC6CSKKIICJnCBemzqUbV6sUa5PX6w1711-V0d4t8OOwwo--7o-P-3ZP3pin4--1CVBV-85mEN0d7rPv9hEIBeXrICxpCAIBtxrtbttztWV--UWc7ec--ZRVOk-3Y_fi--3SWl-1HE1urq7V-06YZF0JYnKBgltzy9c-1GuEq--1Ey3V-87P_R--8B0X--3aep-1HIL9xw7V-08jeF1RZt2BoxCKLV5NOaTeV-LHXk5OUn-3B_KjRnEJxK6xSIBnGsOV5-5-N7e0PZfppdQivevivviuviuvfffiviiiuuivV2vxJG3G400-F2zoG43G3G3G43G3043FJF-B_XHC--1HrHb--1Ml9V0OBPSTykK--mPGuw--0CdCF-3bQrg--_-bGk--c3w7-1J1Tb-nHWSNmnBmnCBnBognAxAACOzzzUbzOzIAAEbaOtbpICxtaNHW9WWttge-Ou9dHce0uXWaOaNTc0qJ_j5Tfuiyfuvyn-43-C4GJJF-ZdZ-CEN--qKF5MivvzoGGJJ--9fZm--4NVG0OHj5Imgmgn9mggggggzbxlyUttxUxrltzzxUp9mcegf9nBx9HzICBnICCIKMbaOWa0c55OWaUlaOaUxxrIJogmqTUpK6aNNOaN0xMUNT1-XXceee7cN575ec0cecV-0P9QF-3hh-D-7_jKnaJ2nyZ-YA_nYBnBnEUttXVOc8aMCmTLLKaaLKPddbjiuievivijivfivy_PPeaeffjyyvjjvzEnzso3-F-3G42l4J-2zvEBGG00LLuJF-3KFK003GFEyxG-nEzvp-B33G_JK--muI9w-5OSJStaOeji--wBzzzKGOK-0JieNwmeCzzaV-TMQgDzvlJJ-GAk2vrxkPe7--MV8o-6At0AC5--OURXy--gjqMEraeV2OUrqueTfVFl22F--jvyN-PNAgydcnF-Yn1WRrSpppMJeYrJnrUKq6ce7WzTUzUUUNVNUtsX7VJece9XXX97c--5440-2I2OHnJsOV-1NxR5-Bn6z2mgeegenBzbzzUbtsN--0_72F--nKlc11OxXDLKKO_OKLQvzwwwzEnnnnKF0RnydBghMMNN--dOfypPMdfibveueeaPaOO_3eafd_J8KOKKaaOaLuLaLvcyEieQevy2l---GFpJFzz-ynwwzzyeiyv-Bx3FEjjzVEvV2s2ufk2G0--3FF2020003JG33F-dC_NYAASKopSbtV--77--QufZ--CxYX-5b-NCbjY3F--sGR7-DRSQ6v4--2ZTFV-OmFuQF--tWp7--Rrk3-2DRQfF-ObG_p_LKK4LQjvvvvjk3BB--2cnkV-0opdF-BuUUE--1SP5b--2fOPV-0qQ8F-JvLKBlV-ttYkOgB--EKfm-GbimObjzjzzK4JOJJ-QEW629fAEU6aT5-Kbx48aOGeQiv-nzVk1K--4-Bei-2c4b_aEF-00fX7--VsoZ--FYHH--7bwK--3KeVV-19ymF-456Wg-0cmm4s--oPB-o--PCDOOk-46F9i--7vjd--oSsBlV-uEMIQY3-0GwSv--1EeMF-06tTc-5Z2ZLk-2HUyYu-0dG4tY--3dhcV-1KhfF-09wIc0ea0y5OddePfiivc-kk---0--hB85hIq---PPqqQ-ACDhYBegf9nBoyOyOtzzxAUzUxrxzxKrqUSHnEyUzzOzbcXXe5e9X97XXXccX9Xee--1UpAF-SFcxhOX-1eB0xgo--Jd31--9KJS-9pBVymefBnKMUUaOVNN72Xdb-LMveiuLKJKMinzzzvfY2BzjEzzY3GK3FK4KOGKF-0Ji17-ueZcLLyvwzYGGK-0KK8igpzza9cc4aecw5eQeefeK3iifeyVyyaPysnzivW-yvivjf3G32JdFG5OJG-3--EB2003-C_GGF-0M4Pc--fYVJ-0L1VIV-1kjSF-0NOQ7--gXeJ--LIdm--AAXh--Kaimk--h2YJ--LYMm--fHOlV-4QMoB-1fQzGbV-OM1DQUKrSV17XV-PsGvQ--0R8xc-Pi9hLee----4n7gV0uuK8Ovwo_F-0SPF7-Tihf5jioG3-rMLqIMSxJfMpp51-Uk7-X7mV-1vH3F-0SiM7--ivJJ-4MU-YL--5j0_5V--MW4m-Ffnz4uebcnu-E0K3--4umFV-1xQQF0KULdhJnCaOX--5ji96o-jMt7YCKBproNN55-KC9-7-Pjp4LPbw---4zuVV-2-p7F-4VdEB-3g5r8awo-6q3GTnIBnBlaOaOV--kXLJ-0NJ5IV7f1wFOePedueiffjEBwB-FFFFFG0F7pWV6CJfCAHcXBnHgpIN5Ox6lbxrJpMSxbpNN7V56rMF5-7-X577V--lo2Z-0O25AV-28oRFJ__7yBm_ICCAEJgcnBdJonCBgegnJpS9XXe7nIKCSSKpxppCpKUrbzKOzaUUoUzKLOttxGVV557-OWtbVWV0a6ryX7X70cX1-cUu-Uy90zaPcXe90XX--AA8ER--Oap9--gnQdkH4b2ThSprSrUSrMSSUSxpMKpUSprMKrMKSpprUMMSrrSrSR6rbr--N--0X71d9-VV7e7WaWu1Zc-cVe95BcZe7917X7cXV7VX9eeX9--Bw-4--LXIak-9oUkasF-KdZHh5--QKOSQF-0f7Ac-DpZnLQC--5ifVV-2M_TF2_g-RhCKoxKSR7-6xX7OVh9-77uqCsLOaOKKK4K45PKaadudaaeddaejyeedeTsz--o-k0-nzuafiueskznG3FB3FG3EBnknEs4_OOGa_K03F-BBzvnywzvvzEBBkk-EQ93ASrF17--hcV8V-0ho3c-1r18a-KLsKtn9ghIKopJxGbzlz5PcOWWV6bZeVXV-erChLbuawo3F-0QgRIV0AS_oTz4F-0iqsc-LrVEayh0F-0jBw7-1raaM0sqwtimmmocCrUzKrUzbxJeYBexrSIoT50xMUUSrzrrxxxrppMMIrI9gnJzzaUOzSrSUUzxtbX7OsU-UOzrUxxSSSpxSrzxzrr57cWue-BcVX-X7X10bqN7e7ce7-7cX7eX7ecccXce9e9997eBhHmhBnBme7791-5119cXV-ATZeR--Qs0X--CxF4-2M-EHrMNVV-1s18b-0M09Rrc-3i33Gcy3-7r1pBmhExpSrcP9-7-3i6ThbzJ-0r2kLmxV-LsT9bywKF-Cl8ajc-5sg76o--RNyP--DBcS--r75Dw--AZP8N-CRYLYIrWcV-AZ_gR-hRb0Q9efBUUzzxrq7Ve9--DIcG--69X3V-2_KXF0CmrNBxUTN7e--DM2x--MBNss1qtbGTeeeiebfeviufifjG-FF-FK-2F-F0-F--6CEoV-2b0EF-pnx7hKlVX--DWBO-IrGX5pJgomd9Beefrr6rUttyNUsWaN9c-iuOLLLPjcnF2--0p_uc--uwAJ-ISZnnCIKWa---QgbdT-0_qJ7CprKy7917--Do60-0MPdwpc0LirO4eLzjezyyzzzyyzjzjzzzvvsFEiyn3OJFKKJFEwwKOKJJKGd_GKKG3JK4KJ-ESx2nSrP79-5j2XKaPVn--_t4Cgjtc-1wYGa--6ZPXV-Ama9N-CTK4nUSXX--2n3-F24thzhrHcXnIqUttxbcd97-3jCxpvh0-1rbiZpEa1-JjETd_azzgznzC_KK4F-0TTz2V-2nrwF-Ctvzgs-Dwy-LEp--Mcags11x3uLKKLPLLLOeNwzBknnwwzECF-0uAGc-ax4e5iii30---6dYeV-2pDWF-0v0pc-uxhu5KvzivnG3GF-0vS9c-Tximavyl4F0GTtRbKpKKKIMKorSKxcP77--50cV1--X-0jSM8x--MlFHs-PyMyriv3J--6njmV-AuIRR--UKqu7wjf1GaaeOdiaPdeeaeadePOdd_OGG3FK43G443G3G-nBB-En2B3P_3HKJKGJJHPdOKJO_aOeOaaQe_K4_F3G3O_8PKOeLOPeOK9TddJ01OaPPu_aOdaO__OKKaK___GOOOaLLLOd_-9PPeaPPefeueOH_Afeeeueuaeaieeeaadd_OdvvivzynwnnwnEnzzzzzznBnBzEEEEzznwzEnwzzzzvizyzuuaveuePv-wnBwwnBnEePaOaPaOLEwBknueaaMwzeeePPujjczvyvwnnnEuuusEnnEEEEzznEBBBkn2BnE2BknknBnBwwn2Bn2B2BBBkkn2--3Bk-k-F3F3J0F-BK8J-0-3Fl43J0JJFC0220-FFB--434_F02-3-FoF-3--ULK1-9jk6__KPzsnC-0rs2uxu7-5z6oLo-0Ua7Y--2yTuFFpzEegnKCAHYSIEIBgmnBen9mhJonKKpKpKIICCBopKMKpCMMMSxxtbbyOVNN50V550VN50VN50WVN-0a--0xLN-V--711-V0R4w-PfBJ-5sCnMpUSzGcVcX--36DPF-a3T2CpX7-21Rkb--7L9iV-3CdyF-D7K1E--E3yyLPB-AsdryprMSrUMUXVXX77X7-0lNuCb-0sh-cpsV-24z4a-0O5skoP--HJcO--8cjcVMwvW_PePffuOedddaOd_OLivedaLOQswwnnBwnnBBEEz2EknBl___JJF2-ddFJBB-kFJF-3Oxo3mryUe9--oNo0k-L_0tBtV-x9UXPVk0Kd_2QCCKJnKMU6Wy6x0a5OtWWaA9f9eX9VNhBeeOaOaK_aOaOOOOOOOLK___aLLLL_aLbzjjjEnnnEEBnEBnBwwzEzFnBzBnnnBwkBOJ3--9Q2JV0hFDWPTj03-0esaIV-4M3pF-DfxqCV-0LPM3-8fbYnBy5-Cq8_WadYzEwLK3--A59FV-CZXbR-2ghDYk--LQk_-0vCsPnTV-0OncZ--gxEe--LXbt-4QGLNnIMaTP9V-4d4NF0DoYGBxBttWe--LdTx--AJjgV-4fDgF-1q1n72bQ0Tq_fzyaLyy__JbzjyiyEvnzoEzz4K44GG440J0GJ--AQaoV-hj4xQW--QUtTs-0QzBZ-2hzuIu--M0W0-3QVpXzUSX9X--r954k-6-LVD--s6udk-U12pBUe--NKbO--B9nkV-55gUGAILAU-ee9eeXeeXeee9eeXeyN9eeeee9XAzbzzzUUtzxzrza1fzrzs7Xe9XmeeiUzrWztzbzzsUztbyUUrztzUzzyUVfzMzzzzzzzzzzyUzzzy1SzSxzrzVczzSpUzbrzzztzzzzrzzy1cXXecXe9zzxzV9eeee99USzzzztzSzzzzzzzzzzWtzMUbUztUSzzzrzzsD2xzxrzbxrzbVeXUzMMzbztzztyUWVX7cX7X7ccX8rtVX2Vc1gVWrVNOta1UbbaT6byOyTMqXggpFemnBnLpThScXXopfJppUhSzt_USUrxSxSzUUKwepzznMzUwefMzSCJXAKRemgegeeoeeeeeeXe99eACMxzUrxzUzzzPmeceeeeXeepzrzzzr9eee9e9ehUrxzrzryUzzzxwg-3sRUlgzK-1wGfBrUXc-1s_20ck-8lARQMsc-6sakWaUYsG--BJEyXtygSR0KGMwzkKK_KK_KJKK4JRnEEEEzEnwznzwzwzzzwzzwzjw3wkznnnkKOKGnEzwEEwzB0wn2vyizz0nEEqPvnzzzwjjEjzEEwznzzEzzwnvz2jjvvzwnkTzzzj2vznzvzyzzyzzwzzwzzwzwzzzEnwnknzfjvuzECfjDzEBBwzEwzEwzwzzE2vfwzk6njvw-nzEEzEzyzvjvLizyyzzzyzzzzzvzzzzzeOPPKd_4aPuwnaLK_aOezjEwznnn2EEnn2wzzEmwznzEn2nwwzznwwnywwzzvzEznwwnDPzzwzzzzvzEvznzjEyjEEnnwzzzzvzvzywviwzzEBwzwzzveznyuzjEzzzwznzjwzjwwztfvzznEEEnzzzzzwn2BwuO_fizzvzzjzjDywzjjEqKfyvzEOfzzyLjzmzzn2hPjjAwzjvjezvnfzzzjAzfjjqKOO___OL_KKKOK_LKLO_KKaKKOaOOLOO_ePLiKKKLKKLKKLOOKa--wN-ww--DBg5N-4latIyc-MYUfaRyCF066q1CJxa5X--5F6mF7z9BugfEUSrSArzxBefBeJcrrzbtzUzHmfUzzzttVX7X7XXX7XXX9--yKGGTsF-2mkw2k-3tQstjx4--BkdsV0DNK7PzGF-6B9ki-9tXkO_K_zznl-0RovXrc--OeZW-IRqTXoeXefUzzzxHYUyWzzzu9XZmZe7-1tmAWzJ-0nbeYV0DRxYTvG--2Dto7-0bYlJ-0nm6v-4DTdBTzyzvzvlJKJK4K-8wxJTrrrzrzOceXce9V-DTg9R-dnsbYExxryUzaeeceec-6bz2Lk-2o5Gnu-1u2YOv3-0oCyAV-iaLAUp--CCXRV2Db2oOOwzvnpKF-ppYW0bVVaOyUzzzrxpxpzPk-2eBMb-8xGoerUUxzry9Xce9XV2ydQ2OK_OjjnBwnJ--pC19-2uliNEyk" :
		12 === bO.eE ? p0 =
		"JJAf2uP6y-0nEiiuyywnyueuTbfevfvvjivivivjfvivviyvuuyEgzjjzzvviyvizvviuNziyvijvijfvyvgzvvvvfeu0-F-n5a_GG4KJGGG3G3G3FFJFmKGJ4JGGGG3GJJFJG3G3G323G--kLPeduaKGFGGGG443JJJJJJG--B-C0FJK__443-BJ-66wmpBnJopCMJpCCCIIIJoopKKICKCBnCKJgooopMIDOzzSzUzbzzUSyTUxxrrrrrP1XcXXX9Hcn9cceemece7cPIoeX0sWWaOWVNTOcTNNcN0V0V5-N0aOa-0V--N50a5Obyc-M0z3TPOdgBnBF0NOpxpMV7-M2mMiLbinz03F0sTx8mfrNT-2l6QEdMwwp-5XX7UMTP1V1GIuvaNn-5Xfxrpw5XV1GNTEfn4-_XvzjAAA9mfA9ed9fpzyTUzyUaUyOX3n59NTKLLKHPPPO_LK4iidea_O_QeideeaLOLLJG3-0eeddOaPO_OKLKzEznzjgnnzBykknByEYnByug-3332ElJ222-2wBko2BnBnBwwzwx-9Y6j6rrrkccc-E5ctEizpJF-aDYgSMGz-X10G6VyjiyuuPeiuzjivh3G3K3G--k-9JGFAPEIZSKBghKSMIpKpCJnI9gcXeccehHccoeXBeoppKIJoghIHnCJnJmemmecmfA9jyTUzzzbbxbV0WaTT-OtWWWV0zxtyUN6yUzSxrSqTUztaN71190V7-5V15VUy--V-lxHEg--33oL-67Dhyu0--3FoL--7ahw-LGYowfzu-0HFMIfF-aHWWwxxxcXX-E8ZrUdfVl--TIJLzSr17V0wcDLvivjysGK3G4XaJb1zppIJpBccccge7fUxx9eocX7cXX6y7Y99Heggen9nJdAHp9Xnp9IIJfICIBdCKKIIMMJme19eXxxp9X9VVfEMMMSBpooe7XCSBomccxxpHcrKKCMHmXXmcxoeX1mpJe70BrMJmVV--gxExIpJcX71nKCJmhCKKCIJoopCKKKHX8KHd9nKrKBj6xrSrKpz6xSMMSrKppwObaP-UzSCAICIKCIKKKCMMKKCpCMMSrrrKpKprUSprMUSMrSprKrSpSrUrUSxpxprSrMrMprSSSppMKprSprrSrxKSUSqUGbqUbbrxrSxrSrKHXXeggeYBnBgmnBnKCrJnKpIKpBnKCMMrSS9chKKIBeX77EIAE5OxIIKKKIIEKSKSKKSKKMKpKpKKSMSSSSrSzxxxzlzzUzzzzzUxrMMMMSxxxrrxrrxxxxzUzOzrbxzrxzzzw6w6yOtttttyUbbyTTTTTTTTTUtzIrzbzbzbba-71-VVV77V--7711-V1-1---51--1-1-V0cN-N5VN1e-ee7-1mc71Xe9fIBcVV0WbyOzxX-VV7VNN5TUzUu1ce9menBecmf9gxHc7c7V-777---50VP-V-N-0WxppSJpr6zyObzttV6rMKpUyObttbryUbzWaP0sNNOX757X97X7ce9XXXXXVc7-V-X7VX5-V7eeA9menA9fBnCBnIIJoorMIRObpIKMJpppSSSMSoeX71-V7777X97c5V-ccWV0VX77--NN55-N--7U5111cXXenBcc7fABgcX117X7c-gf9emV---1--XXXVX7X17579VVV117Xed9XecXX--WV5Uzz6zyUzrSrUUaNUlxtzXXXee1777X1e-5NOy--WV5OttttaTUzyUrxxtzzzlzMUrzzxaUttbbxWzxpSonBmpCCJpCKCIJpJooeACHpprSxaOV577U6sOWV-NNN70WVOWzwTTT5NUxryUba5NNOba1cc79cXX199X-91X99mhIHfJmXgxxxpHe9XccX997c7X0zV--V-N7P6k49V711-111X-77cX79mmeHeccV1mdbn_Uno-DKNVSo1-O9kaiKKzzEzpK-8_SLEzzzeeeV1Hinzjh3-8_UsM9mjtyTVBHk8AfiyvivizpG43G3GG--0OIzV2mnjMaLEBxn29mc4SSpprSSSUprrKprSSpppKMMSrMrxrKIKHhKHfIKKpIBpCIIJpIJnIKpSKJo1AKKpppxprSprpMKphIKhMUSrCKMRpMKrrSMMMMSKUVUxxUxSJe19efAKKUbKnMxKKUKIKUStaSrUMTUrzbzxxrSzzUy5SSKtbqprTprzSxxSrBXe9ghSrMMUyUzzbySKrUKpUSpSUMtV---D--0aN-X9997977VVe9XD-19XX1-9XcXXXXYxzUttzbV-7VX78by0rUSppKMbs5-V77V77X-X71--17-X-7V-0WWVN-6byTOrJepKpSrpxrUSSIKSKSzrrrs797c1711ObUSxxpSSSSSSy5--7997VV6z_rrSrxpSprs-7VX17XeXVXN-11-TUUSxztyTT5ObzrSSrzbtbbtUKzrxrSxzUrzUzShKhMKrxzzzxyMtzqnAA9mgfAAACKICBnKzbbWWbaOtbaOaTUbtyUyTTTOaOa556zyMxrUtaTUzrxrrrzSzxzbta5N0s-ee997cX97cX7cX7X771-V-aT--V17V7X1--V7Xea6ty5T5Mts5--5-550aT55NU_ySxxta5OVD--0VN5NND-N--8a6a5OsN1og55OVVOta-75OTSqhCMrBmhMbbtzzzzta--NN5-8Us0V-N1eD-XN0VOKppraT18zs0SyOUaOa5OaN1-VcX7X5OSpSxpMSra5NNObV5-N19cVc-W_KMSrrxxztzsND--MJpKMrzb_pyTMzUa5-0a5-X-VOIMMMSBnKKSMrMzprzaQBen1ceeXcccempprtzUUSv9mmfMrxzUMxpUUUrzbztrxyOzUxrrMzbWbJppSvC7gmenA9mgggfABgnBf9nBppUrttbzUzCKrSSxzbaUxPfMSKpKnJhRpIAIIKrSzUMMzxztyTObaTOWWaTTTUbzzrza5ObaTOWbbbUrSrStzyUUzbyN--s5T2rs-1XeXeefBn97VfBnIBemf97cXcX7bWV1111c1eiN7f-ABa6s19n77X7g97cceX7f11UzUppry-N0MMAIKzV4UW_rJoppza55-TMSsNObztaOa6KzV-77N-SKKSUzbaOaOyUtzzzyTUbtzxrsOaObtttSraOWaObzzzzz_ptaUbyMzzyUtbVUyUrUzzzzzUzzxyQMzzUzzzeeeeXee9Xeee9eeeefKMIKcf9ggnABemefCCKzrLf99X1fABgeeXAKSSMKxxzUSrSraMRpSxrQA7X7X9oopBo1N9gnIKCIJmmmnKIKJomn7emfMBc51997cenKMUzPmegmfMMSzzyNA9OzzUUIKMUKrKpSSrUrxza6SrMSrrMSrUUxzrxxxrUSSzSSxSUSxSrSSrSrpUrMMUSprrUUUUSpKrySzSrxzzxpzSppprrzUrSpSSCSRprSMKKpMKrMKKCIIIBohIBonAAABnABmgemhBmmmeenBnA9X9ecceeXX7Xemmcemgef9nA7en9kecee9eXeX1-enBkeX7XeXce92VXX99ceACBn9XX77XVVV--X7XemmgeeXXX997VVc75OVeX9hAAA7eeme9eXe9Xeeee9e9ceemmmmf9meegfHenBmfBnA9mgggemnBggfBnIHmmekeeceX9e9cXXXmoeceeXce9Xce99eXnBpCBpSrSrSrMSxzzxyeeeeemkeemgf9pprUzUHmeXXem99e9eceef1dbs17ecepKrMgg9XeXccX-Xeen7cXeenBmnBghCBgnBACCCMCKJohCCMrzzzyUzzzzqognBmnCKprMSMACKpz_wmoogepCKrMSMStUZkeeeeAH15-11-X9hCKMSRomcgpKzprpprs0z_rKppzrSrzSpIKIBgXmprrUKIKKrttpKzSUBomm97ghJpSyUzSzzzUbzzUtrzfAI9epnHceceemegghUUzxzWbzzrbTopMSta5OVOrzzUSKUUxrsOrpxQCSrIIKSxSrSzSrzUrUUtttztUtbzxxMaOV-sOWV5--NNOUzUzxzxzUUrSxrrUSrrSzrrSxSprSppprSpxrrrUUrbbtzrbbrztzzrbbyTT6bSyOa0aTOaOy5T6aTOzbzpxxxxpzUSxs7XESrKyOUrtaOa17zyUaTOaOSxprKCKgnIAAABnBnKppppppJnHnCMJnCCKMSrSSKKICCKKKKppKo-2AYFDB--MPns--j8uk-0TwQV7mzO6ievyyvFGK3F--qNX0zxzxrXce9c-3mKUw-DOJuzw9-lBkNyuuuviyzjJK43G000-OaPJEprzSKMrrkccc-1997-2C8pDo-uPOqwf9mnbbtyTV-2Jzv--5gXT-CCmSUvvGG--5xsy-0D-rE-4b-qzSqX7--sMmk-0lNEV-IZ0nk-tm6EnFN-Rt3BvgF-5ReOUc-otNAvisG30DRoZzUzzzrwP9eeecc-3uJps0eSSKRrMGzrzrrM-V-eXXeX--2fpn--6MiT-0DoXD--6ULD--E2lg--TGhs--wrkk-0uNAV-npyzx-0bkCEF-6EeL6jG-5bpJQAEbaV0nuubvp-0dya3mhrk--BzMKzF28zMOzrMUP779c-gziXufkG-2byBQrcV-J-IhV490elopIKKJzlX70V---2FCPyV-HVlaxpX7-x0_hzvvGGF-12_CV1o6LCaeB---Vy4s-K15tuR-0cH3EP-AFalyPf--1u44Wxxxr17cc-CFkqTusBG-2cO5jMcV3oE3YuuiB3FF0P7tWrre9-4GLRUh--19rRV-JN8nk-1B7iV-3OQA--cpNzV8oQxrjjizyyw4KKG44-1d-ezGV-_77wzvGF0eJQZmxL0V-C9jlvF09OI0rTX--JoI0k-PTDyyV-40oK--e5AbV7K29M_OLMfgznEB4-IfrEMASpSUSq-7-Nee-ANaSDyx3F0A69npL--1qoP6bvVF-qtlNxCKCUa0V7V0xqOguudaNznk-G3-Lvq2RrOc-2N7SOfvlG-2g3LFmnKUrla-7X--Vg031A1AJgoxMSporMSSr-XV--10aNXeV-y7CVQfz0GF0RIcNptae02XdsiLTezvzyyyzjzGGGGGGGGG3--GRVT-QXt0TTyyzwK4GJ-r5K0genCxtwT-V-yBnotTvg-F-RR4WyVBNuCtdejvYyi-knBLOFJJF3BSAjnMSzUbsX9XeV3t0vf_fzv-GF0wZ8bxrOe9--8AQA--HN1m-CZlGTLRwx-cmONzIxrprppKprUyUts-XccX1e97cXc--_7pw029QbgoonJUROV5-V-iJrguik4--mdjY-0tQAdaRk-BiCss-aMQLTjJ--3jUaV4tUqAvjzx5KGF-YB7rwfzwOeVuOXlO_O__Kbj2vizuviyuuvfeveTiviynvYziefiiefvfiYvjB-444G3F-0-2-kJ304K3GGG3JG34--F3GJ-IBbGxS--3yOw8PPd_GaaiC-Eueibvyvx-304--C-2IBzcggmeenCMSrwOaOzKHmnrUSxzTOu--V7VVV9c-yPFVPuf0-F0gt0ZpKs17-aTPhOiBFxRy2ZmgnJeeXAICBnBenJzSrKKrrSSrKpMKJnBnCKMSMIKMrxSOV0V0zzUKSpppSKSEKIESOV-Oa0sOzUrMKSppSUMMkP77V-0a1--VP-17--71--7-UxSrrrrSJpqOtzzOX770hBcX7V5--XXV11cc717X7X9XX999777X7e-_chDLLiiivYEl33G3-Vock29fSpSKonCMU5OaNV-NNX7c2DaQYtPjzvjfiywGK33G3G-0xDlzpUyX9V5PSx2jyuzVGGK-0CFZWnwNV1uXF0_fBo1IJJoSSJnACCCKppSxyUV-117-N711-6evlav4-JpSyQKUSSSpaX517c-c-yg6luPzk3F0CNJQpy9-iumBnaLKKeudOKG_KLKLLLueLOaQEEjEjyinEyzejjnskBnwC043F2-nn2zE2EEoKGKFASOdporHX8CBhzxraUqUzSlzSX77eeeXBc0V-LhikvW--KmlL-EfebDLTskk-YMe-RrMTV7V2uyCCaPEBC-5q1sjK6a7V-A2Ih-Aq892rMUNP7cc-TlB1tv--ANsVBjV2v6d6aOwnp-7qIGAIJlaNV1imQQOPszivwzE8GGGGJ0vODuRhCrppCBpULN5N7NX90WX-6gppqPk-GqSXfBnqOxtaUemec-5nnTs-YPD2wz6re9-3QGmz__bnno-2PJQD-KhKnTaaTn-nF-0Pg_N-aphUzj4FKhhRbmhUrKHohIzMpxrpKKKSMKSKxrU5N5OaUL--X11777Hf9VX-N7--5P-XHXe-0hhca-WqtqMCppppSJp6ltz5NVXV-X17eV0QUJbjJ-nREfwnBwOtbae-IiGGaLPvEk0-Er7eI9nCKpUa0V--1v_ZSfcl--0T7Zc0TwsLPNzgz8K4--MdCP-8jMTqMno-QTv6BfDUs-CjSgLdjBG--rknYV0vttlfW-0CxT2mcUV6Qv4daeffkn3J3B-EUOXBja1CjifiOvd_LdKKaaOaK--nBw8aOFFeeKbfivzjix3En-2Ennz-n-3-2UYTi-bkAQ5LLKaRzgwnznGJ-MWJCRr5NV0wBylcwF0D6jaola--BJZx--NfgX-6lRkav3--sx_2V7RUnUaK_aLLQjzzz-atBrI9mgmnICCpCKLTOaOzs0aNOWV9c-E9stskaiM_-pIJnKoxxzxzrUrrxzUxzSrUSzSpISxzxbxzzzzrzzrzxbzrzUta-0YBe7mf9eeV--P9eee7XXcecVXeXceA9eeeXX-c7T9Bee997n9X-0wqC2ylF4iQ5frxSUzJzqNX9cX97V1wr6EuslF-YbY3xSUaeX--x1Jxc--uDnn-6S8wKaPedvn-FFB-zea6RfESrSq7-WX-6pPVqNx-dun9rIIKMSrSrSxxBzbts7XeX97XX7N---2MXGF3ilDMnrSppGa50VeXcHjS0jOLKO_LOaK_K_K_LKK_JKK4K4KGPedaOK44KOPaK_3aefffeTzivizzzyuvkBzwzszEEnwnn-nzyzwzv03G00-B2EzBEBwzBwnEE2-ow4SEIJmcccxxrUJnBonSrrztzyTOts-9X7VX7X9-YvBN2wwwwzvvjjzzk0zOXTUyUxzV" :
		13 === bO.eE ? p0 =
		"C0DX0NP1V--QqeadnzzjynEEzzjjivdivfezjj2BBwzwnEzzzzzEjnnvYBBBBEBnzz-UV-hflzUUSrrUzSxSxzk0a1-V50K-0pMiudevf-zvfeBnyviVF-F33-yzgp3bVV02IKUrHnUzzpHz5UzUzSKrUrzbyNN-OzzxzUUUSrSrrrtzttzWaOaTUzSxxaOaOxrKBnCSKCIMSKKKKIBpIJoonIJopCJpJpCCCBnBggeXn9eccc9X7geXXn9efHfBnABemcXX9eece7XHXeXecegeeVV1ee9eX9ecc70eXcXe9enA9fAABnBnJpMKpKJnBnHmmeeXX7X7cceXXce9eeccXVVVV-VeXe97Xcee9f9eXeXXXXceWVWBc29cX7V-6aOaTOWWV-1XX17-NOtWaNVnBn97X-7cf9mmnBemXgece9I9eXXomgeh9eX99eeeemf9BmmeHgeeegfBggmnHoeABeggnIBggeeeecVI9eeemeXe7cX1-ZmfIKCCIJooonIIBnAAAA9mmgnIIBnBpKCBnCCCKKKMSKJoonIBohBmnABnCABfA9gd9mhBopCIJonABgmnJopCCKJpBnBnBnCJnCCCJnKBoggpIKCKJ-UMSGxrMMKKIIISrKpSKKKKJopCIIKKKCCCBnIBjSrSSpKppqUI9cpKIKrrrKSzyUpKpMxS5UKxMSrSxxxpSrSKpIrHxrSMSzHfrxxzUUUSxrSrSxxxrSrrSrSrrrrrrUUxryOtttzbttyUzzbtzzUzzxzzUxzrTTTTUbyTTTTTUbbxy0byUtzyUzyUzzzzxzrrSrSSSppSSMrRN-OxpSMztzbzzzVUrLUSpprUtxKbxBfrSKJpKKJonICppKHnKKJoopKISppSrMKrSrrUSSpxxMSxprUSMMSSpKMSttzzI9f9hMMMSrKSMKpprKKHnCSSKpMMSSrKKKKKCIIC9gnJonBpKAKJpJpBpKBnCpMKKCKCKpKSSSrSrMMMMKrMSSMKSSSprMMMpUKppSJpKKKKMKSSppIMIpKKMSKSpKMSSSprMrSrMMSSrKppMMKSSMSSSSSprSMKKSKBmgprSSppSIMzxCUzprMUyTObbyUzzzaOaUzzzUtzzzUUqOaUxy0bzzzbbtaTOaTOaOaObaOa5OWbaOtWaOWa555555NNOWaOaObaOa57-6WV0WWV--O97VWWWaObbbtyTUttyTOaNNNHV0V-N---9-V-777579775-0taTOaOaObyNOa5OaOWbbaTTTTTUztWbbbaOVOWaOa5-5N-7X--V-517T7---7-Wa0V-X7ccX7-7-77VV-5-7-5N17X7XV-0VN5-N5TNNNNN50aN-5Oza5OaOtsOWWaOWaOWaOaOaOaOaObaOaObaTTTOtbaTOtaOaOWaOaOaNOaOWWWaNOa5NNNN5-Oa5NN0WaT550WaNNN--N0aN7--0WcefIBf9en9geecmmf9eAAABgee9egfBgmeee7cX7X777cce5TTT-VVX1cX1c7197X977X7Xe79eX15hHX11717-7-V-V71177VXX7X7ce-V-1-1-----117--cXX77ce1-VVV-0u7X777117771177V771-717VV-977X77VVV-7X-OWxpSSMSrMKMSSrSrSy5150WV0V5OzJpKCKCCUzSrSSSrKrSprMKprpMUMMMpKKSpzSxxrUMSSMKpppSCKKSMISMSrMMUUrrSrUKSSpppMpSSSpxrrSKrSpSMKKJhSMKppKKppSKKSSprxtzaUTObbaObzzzbyUby5OtzrtzWsObbbtzttbtztzaTTUs-o-9SuvkpF---4GN0--Akuevkk-0Z-5DzUUzzUMMSrUUrrxzzV0k24nbEF-72uPs-31lfR-X0zvBgpOsN---Fjh-1VahUR-033plvivC44-bVp12CUzzrxpztzzzy2A979eeXd9eXXVGkPch_OLJKKa_OLujjznwwkzo-Eno-q32WRrMKpkV7-V--7jXk2-IvW9e-7xySpV2kZ-vaazk0-HWAOjKHprsWxta7ccV2FavYivl3F2cIsAppKMwN117X-81g-ifoF-L4N9UrkcVDFfPz___bjvjjEB3ByvEGJKK--WQlvV0kn8QjoF0NPnGrScX-E2V6yPuEF3-D6-ISGX-42b3rh-0NYH_ooy-3P8eEOJFGGIB-B-0-2043LaPdaeeiZ30003G002j-03-JGFGJ-4K-03G-3303330NBzB-UzzB3DvzuzByyfiivieivifevefjzyw-D9vlxqX-A58vaOYw-07nF-rFPV4lbM4aaabBn3B-mC6fBmmjSOa5N-25o35o--CiYN-gQSZPTw0--2QiX--66YJ-9FT6CN-BHQ8jadHQyddcyvG2232-F-8Hr8k--dcfk6dIezn9YpIBhC5Oa6y5UrWZmX70C2JVtUzzp4J-mXEjworrq557e-6IQmyv4--dmmEV-JuCMk-9SVlk3KDxRuPiueObi_JGTyycnBk--4-BF-eicPos02KqRDLPefeTiuiviuk-K33F-----6f9qfBnUWV-jMD3iO_aOaPOiwBnBnn--0evOEn5U5c1_T5ktLKKGTvjzzYp-w0Rg9s6ABmeWBmghJonKxCIKIKKSKWa6zzro5Uxltbe9e5OtVOWaN-N6w6y2ABcX17cXV-SWU2PBo-alHDReopsOa-OOYdiPPPgnE00--BsPu--Oo5J-5oKjx-AxeUxtaeeTeeffeuePauuvivijfieiivePgyvvC000000-3-3G35JG-2BF0-30-2FFFF--3hlWISD1-ER5o5evV0-0eu7_RjSSprzrSrcX7X7X7X--6KDt-HirDjBnBnKMba5551-3rQbzaaEBnpFJAmhxnKSSSSKKKKonIKKpKpMKrSKIr5UrNV79V1----V55N-1V1-7-7-X79-IUBriLagwC2-3jm7YKkV7jUvJLaLMeudeP_LPK3PfeaLeaa_F8aaLLOaO__KHdOK8__KeePOdaaieeeiiefifeeddddaaPadOPePPeeiiveueaeeivfeiuyzjvvizEBwwwzzEE2-kkBB2-2-kB-2-B222-B-k22-BB2-B-BB222-k-kF-B22Bk0-F32nyevg220-FF-0--0-F003G-G0-Cl0ab9eefxzzba-AX5ODuklF2RKFUonyUUaPXeV9sgwrddaLaPNn2BnEE0F3RULpn9opxbbbtXVe-Y_1riO_LKfvEink--0BfCIpy1V" :
		14 === bO.eE ? p0 =
		"EcA20EP9t--46idaPadePOddiaeuuuebieeiiivuO_aRnufezijzzvzjvfuuPKJFJGG3GPKGPOaTiiiedaduus2EYuiedn2nyffdv32--0202EzeRwoG--Ezzjevck20202zeufik43BFBFK0G4-0_J--nyioC03-0002-n22wyddyjfzven3Eyv3JJ20-zynnEyjnnvjizjjejzyy_wznnBn2zvnzyvzBl3GG3G--23FFo0-wzBB8m--ZISrMUUSpzrxxrKrrSKpppKKIACBnAA9mmgfBcee9cXef9geeeXVf9999199ge17V7Hgce7c15ABee99eeXegegegfBgfA9mgomeecXcXgeXceXnBrxSxxzHecefAUUJceccgce0AxBeXXXeceY9nTUJgoepCJnzzzxIBfrMpIJmnpHmc58EJmnrSbrMrUKJnIKxrHgrUzrxKCbtzprzxKISpxzU5Ulzq0a-NOzzxxzSxrprSSpxxrzrtztyUtaOaTObzxpxrUyObaOxMKBn9pMKICCKSKIKKCMKCACBpCACBonIJnKIHhKBpKBpBonCBmnHmgeme1ggeeeX17Xc7VY9e7emdBe97gfBfBfBfBf9e7X7cXeXc19eX-ecXceX9Vf9cee7V-P1e9cecX7e9X7X-0XcX7c97e9V0--O6glDk-BjnBnJpKKMSKrrMSSpSSrxMrSSrMKMprSKzUzzSI9cmgonCKIJppI9YKCKCKKSKKSMMrrUzzzUSMSrUUUSzrzUzryUaUyUyUbxlzzs7-V15X----V---NNccX-ccc0y10WeeeeV--70V6xUztWxMSzbbc6xta11cX9X7V7-X-eHeggnCISpKHX1V1X-7-Oa-N5Xe98HeVVVeeV0X9711-3--XjabvBG-0s7nSrxGc9-BFOunededziszBzG0-G-KF2NDz6rSzzu9d99-0FVIObk153LiReenAUbbxzxzrpxq--e9e9e-A1JTaukCF07J23pq7---cVM--WN3QV1khy_awxF-H4kIRjyV-oCGnvjx3J-16-Ny-U2iSDjyffv33G4F-CWtG2GxSUlV79e--2nbB--6j1s0REhiviizkJG4-4X-vYML77-ZHJ3Pv3-1cZeNponGtV-V4lDIreOiuBl-3-DAESjT9-r4cgTLLKKOaQjzyvgn3FBEB--1pnH-E4zQyafnG--5BKbgN-3Oxws0iCDazIKxKMMIr5OVX1V7759-05hoa-4YPwIzTXc0oS4-OaOaanwnB0-qYoDA9pIrzxzpzpKzzzzUzrWVf9cP1ceceVemcc7cV0H9uMvF-eGU9USSbuX975JYvsOLKOKKK4OaLJKPueTzjEzjzBn2zj3-Bnwn-B_HnzBpIzyNX7V1mi7bfz3J09L-pSKKCSrs5P7VX7-YBjWieueuusF-F03-0dhx_nILN-03vANuaQYl---6b56-jf6VcBknBBn-Bk2BnEBkBkn-BnBkBw-----n2Bk------kn04GKKKaOaO__KKKPLOKLKGKKLKaKKKKKLLKaOOLGKKK3KaKLKOaKaOKKKG3G43G3J33F3G4G4JGznnE2--G-G3334L33G43J-33JG3KG303F433GK3K3GKG3G3k3GKOffaF--GG-FG3---F-3I-3F0-0303F40GGG-G03GG4FF0--FF2-----0---k-G-F3--04343G-G3KG030-0-Gk-2DwkG43F3G0-30-F3F30-00-G30-0-F-3--G33I--03FG3303F3-I0--3F-nDtfefeuvfideeviivfiuviuzwn--B2BBB22--wn9PeLeeLeaPOfjzyvuiveuifhfifiivevefffjiafjiuifeypeeeiivejEivjiivijfiuieiiueuieeeeeafieeeujvifffiuzziviuzivieifiififPivfeifivPvyvijviefivevevafieeaOeueevfeeveeeuiufiaeefifivizizzwmznEzzBnEzBnBnznEzzzzwzwEzwnBnEnAyzzBzzBn-nEnBznEwzzwnBnzzEEzBznnnBznEk--22B2zkzwnnwnzznBnnEzzzmvwEEBkBk-B2znEzEznBn--kBnBEnzBzzw---4--2-n-RB2Dvfzn0n-kB2BnB2nBknBBB2-n-3-KK3JG0304-G43GLJJK_K4JJJKJG3F43G03F3-Fk3-3-k--FLOadeOaOaOOaPOada__aOe_LPaPOK_KOGGKKKKOaOKKJG-K3Gk--nB-FF-3Rk-JGGKaPPeaPPeuieW00-FF3G3FFF--2-J0-GJ43G3JG-0KK2-3G3G-3F0-3G00-F4N2znB-3jEzzBk-ivzzfjEBAzievivivieevivueiuiuufivzzzvivzuivivjvyvzejvjwzzvyvzwnnBzn_ejEBzzEB2-LOKOaMBBzzBnzwzizieveefifieizzzvyzzznyyvzznvjEzzwzBijzjyzznDzzwnnEyznzznEnEEw2yajzDjwBvnznEnzkzEznivvheejwzjefievveyzByvnmeziuvfiyvyzjnzjBwnkzaeO_PO_dLLG4PPvjivjivjiuviyviyzjwzwnE2zBnBnB2-k--4222BzEOOaeiejxPeeuuuuqeuaeeuuefifefefeeffeuuifeveffeueiieuvfiiveufiivvfeuuiuffieeuufuffieyvjiyfeveiuiffifefieevuiivfjivvjwwnBn2BB--BBnnBwn--2-k2BBwzE---0--0B3F-k2-kBB--k---JF-3B---3F03-k2--wkzEn2-B2wEEE2Bn0BB0-kknBkwE-kk22--eUSCSJrLT7V71K0YLtevvyl3KFzwGJ-DWcRRqP-hG7KyLafizivwwG03G0F-acjpSSKy-VX-IJltLePvV---PeSVrBgmoxprMRTTOa77X77-0N3vk7eoElnII93nzSKBooUSX0aNX0a5V-1pfNUugBJ-9iOdUNV-4v1z-Sfs-zBgmX8MKAxy5NOzKbse7V-0U-Fk-1y-lV-4x-6--g6bj-3L4kbaTYn2J-apmECIJlaN--MR8FTPQYEwpGF-2W9GV-62Hz-7i5cMKKGV---y2dwQvz4K-NgIMwmnUzJopKCCKKIJnKKpKSKKSKMKrMMbrWbWtaT6a550VN---X157cV-VX77VVX7ce7V-nZT45OKJLLPzjzzBz2wLJF0I80TwpCpzpOWa5P7eeV-9fnj-3pOZ6JOX-2f5dcs" :
		15 === bO.eE ? p0 =
		"CoE-7lR-YWRa2AEJenMxJpbqTObaOBcX5NeW_xnVto5UUzzrzUrtxtxrMKMUSSyN1XXV5NNOtaUUxzztzUxxpUSIBpSSyNN1aUrSpCCIJpKs50WVNN--7N6bbzrzxzrrpSMMSSMSzs9X7-X-VVVX99ccVVDUV19D--998a6rztVXaOV1771-78VN0V0V-7V---YV7Xh17XOWWV0V6pTOs-8V7XXpCF5-N-N-N-N0VObSxrSrSUyN-aNOsObrxMABnKUaUs-V1-N5NUzrxUWbzUSxprzCKHenMtzKoopSSSzzxxrMCJmnABegmXOs1ABmnCSKCKIC77gcepzSKBe9XfKrHh9eprxmnKMKLmehKCUrSrII7XnMUSxrUSIMpIABpryURpMbtxrrSrMUWtbzSnKKABgnAAKUxztrMUxrsObWtWzzUttraOtbUtbbVefaOrxxpStySStzVXaNTNN5SJhSry1zzSgmpSM9mmgofKpxryU_rUSxrPXmhMQIKSxrUrrxSxrprKLpMa-2V7Va-OV1XXAI97ee9m8a6TNSxSzzrtyTStbtzyUbzzbtztzzzyObaNObaOyUtzzaOttyUMy-f_zztztztzzxxrSopKprKKMSzrzzxzztttyOtaOaOZnBnBmn9mmmpMzbbzWaTOta5UyObtV9eg7XnBNN-7-ObrTUzztaOaOaOaNOa555-4KCCCBnIBnBnBnBpzzSzzxzba-7--6WV-1--771-VV------71-----NN-5---OaTOaNN---0WWWaNN56bzzbbaTTTTUCKSSprrSrMrrSMKpKSUUrSxzzzttaTNOaOVN---VV--X--1N0WVN5-7-0aN79enKBmVX9e9177-X770Ws7VX-WbVccOa-7OtzaUzy1WbyObaMxyN6UV4rUUy4zzaOaMWxyOzrzxrrTOzUUUrztzUzzzzzaNN--770aSSSztV-6rxzbbs5-NOUzzyMxzUxzV-1X9777e9gf9ege997VX7X9X71MMrV-V75-gnAHommmgf9emem9eefBmenA1AHmmfCC9h9m91AIHegn9emnAABnIBmV1mmegon9f9mXenI9fbV1ge7tzV--cgoon99gc0s76tV99nCLo1977Ebs50Vf-AKJcc-1fMMKr9c7-Aa-1mpBme9c-5OWWV-XV-50a0VVUV---1N18xy11--V1717V-0a0VV117V7-0VcWaN7Oa6aNN--OVV0SrWyUxzVe8UxyNN7X2bVSMVN50bbzWVXhH7aNTSraTObbWV0Us0WVOaN55OaOaOV5-OsND0tbzaUrrtVXX6rrV-X91V0V-N-V7X17X99f17X1XXeemXcgeA9hBce17XpA17fKKCK9e97hSrSHpomf9ABpSxHpKIKHhHhIJhMUhKnKUrKKyICCBnABpAAJpKBnIICA9opBme9hC9nCKQ97-XhJmfIKBhJoXA9empmpHhMTehICIBehIKSRkgomfKQ1971hKxQBpprSghCCJonCKKqpMSpBX17XhSnBopKSgpKopnKpIJpKSppIJprSzzKMTTTUQKMrKrrps5-KpUKKSSpMppSSKrrKMI9fBnBpHnK779nAMrSxzwonBmXXppQAI9fCLmhBop-s1-WV1hKBAJpBofBegp9mefKrpqfABfKzbpIAKMKHpKKBpIBpqmpKKKRnABooppKpLmnKJpCBpKABoonIIJpBpBnIHVX9e9f7ceeceegpSRe7f9mmonCJpKSpSQIIHn99cXee9mgf9Xce97V-5OV511711-V--7X1--MrSTT--VcNUUWV-7971--X77c1-VV-V1---AJXN--N5-7eYWs17Wa---cXcWs2aOVgc1ca0tVVD---V0V--55-1eX7X511V-8V5-ge9pMKpKJoepIIBmegXc-fCBmgfCIABfIBogmnAC1gnBnBfAABgm99ggefBXXccXf7VXe9XX6ba-XXX7c91X7VV7X1VV1-D0s55--6USrMSMSrWWbzs1menB1N7VUsN----2bVemACUSKKBk-VVfICKSpg9777--7hCSJpC-----bsN-OaOa56rJnIKT0a5SrtaUs99150zy50ty-55ObaOzbopHpMWa555Uzs9ef79gf9eopBcgnKRkAJomVa0V1da5-gnIBmWVVVWWzV-VXAMLkVVXNOVza-1hRmVNEtSrrpMSy17VTN1mgX7X2yN56zrMTUtztzSxzMrStbtyMxSppKST-V-UTUraUy1Xe-OaN9nHpKLegA9a1ccX1nIBcXXXcXcefA9gX7VVzs9XVbzyUVef-Obzs91UV-e9WWaUWaUzrUSrUrpzzUUrsUrs7efB999e971ceXX9ec7c4rMyTN11X-SprMMMbVcYa4xzzrIMpry1X-V19ge-zza5OzMUUUKpKps1-1OyTSzKMKnIKKSy1V0WxzT19XX-V-Xcf7gekcaUby19f9mdtyMtbzxtzSrWUzrSyOzzbrtrV9gXf1me-eecaTMs7cX8aTTMxSrMtrxtzrKKs--VXDOxSSSSCMUy-XUs7gV97V6tV6xprV7tVA8ySrVEzzxRopzbVXOVaUzbtzKopxRpMrV5StxzrzUV7TOVgiOtbaUzba-emVOtbaTObtbzbztbs9emgf9fBggf9mnAKRpgmmn9mmn9egge1-0ttV9mmme6a-iUbbzaOV7NSs5O_s8baNUVaMT0brs54SMMUICMaNOzzMsD1eeccXUSs8WVObttVVgfAIV71g7XmkXtaT2rxrSryOyMsAxs8a5UKtWWxpKztyObWs1mmon9Yy-X7N9on8V5OWVaNMMSrStVXVcV0WaST-aN55OVfABda6bUthMSrT17XN1fVU_ttzyUwprs2zzbWa6s1eopAA99eef9ttbyN9gcX0y-VDMptzs9cdV6s8WvKy0zy171OsUxT0V2brBpMs8s51kTTUxzxzxxrV17es1mfA-egeiTTOtV55OtttppSzUMV199-8bbrUVcAtSrs7XX7gnBnA9eTOs1cT5T2WxRpzbtyN9bs9ABkYWbbaShMsOWt_QMIKKxzT18VXTTUT-1hPecVOUVbaUzUU_rSSUVVX8tzzUT-ce9f9VemeeABfB8a5UzbWWWzzbbs6tSrVVWxrV79f755OWtyUs1-0aN-OUKMpry-c17aOzWUIMKprUUIMa-1X918V770aTObyUxIKSIJpCUVNN5--sNOMVN56_pKCJpSJoonKMVNNOa---OVsOptaKMT55NNUrKxxrMMT11115N7s9kc9V9VttMT0UTNO_xU_nJpUs7NUSzzSKKUMUts1e1T-c5TOVNOaOaUy2V50_zSUVX119X7USxs7--OzSCUbbKSzsUxRnCBnCCBnKrCIKJnIKM_pUVN5NN-7T50a5OWV0aNNNOWWxKKMBnAMxpIKKIMaSxs1X6rV-D6V-sT-UUVX1e9Os7zy-5SMUTOtpKySqpCBoe9nCTURnBpyOt_oonBnKttU_zV7a-5-tWWWtxxrqpKTOttSMsOrSxhBpT6bxSxrtUUIKAA9nHpHnBgeecf1ee9XnMxzxrUzUQCUxSs6SompyMs-0rSTUxtTMzzrrrUV1-sSxs777UrrrUMUtzUpMJn9e9ee-VhKgnMzUrynKtWzrzzzUxJpSKJnACKKs0Wba0V--UTOxyUrxzxyUxs-xyUrxzrUzprzUrpzUrrUrSyMrUSrrSUUUSxUaSfMT6xrSzrUrUUby18SrSrxrUpMUTNSUUzSSKSMSrMKhSzTKSpMLpMCSCCJopCIJpJonBonIIHnABggnBnA9nBf9geeg9ecce9cf1e9mm9mecf1eeece9X7cXXfBn97V9eA9cX7XfMQB97cX9997VV7ceXXnKSxxpSKxSxzQMUtxxhUr9Xs1AJmhUzUUSzzKSz1hUU_Sz_xrrSzUMUKrSxprqnH19pSKSpBpQABhMrKSxrKSzMBpxrppIMygpSrBopryKpzKy0nMMzba0rrUMStUSpSrMryMrxzbyUUMUty5-Ortbs78V77X77--Xe79pHfBg997X7X7X77ce-X7-zTOa0VV75TUUzUrrxSrrUrzzwfACKrsObs6TSz_zxrzxrrrtVN5Sy-4W_BQCq0c--5XUc-X5rCBxMa7PVDNUK-nSJp971_ESHe-mocmeKzxIIOxttzsTT-Ota0ee-057TlBpMMMlsOV7Xe---Z41V6NZVgpBmXJgnKMpr6WaNT0c7--3XZyYK57-DXainASrrUs-cXc0D9q9BhrKpMy6e7VHVV-19qEB--1him-7XjEvIohy--0DA35ggnKEGzTOs90X7-DANdhT7-7Xt_vISba9c11AoEBnACBxrSxSa0Wbba7ZmcWXV0Nl-LpUX7--232P--Y4hn-1NmHcmmnUy5--yBtECSKpGaNP197-0YF0nN-QYKBvKofomhMUtzba-1WcBcV17r9ZnpzsX9-4YWUUKaNc-1DHqB03YaRQJjHc9K9Mp9XmrHhrJhromghUxoOVT5OzMxtV5VNT--7VBc--DVec-5DXQxV-9EWOSk-7cyKynBpBnABoopJ5OaTT5NOs-OcVH7zjtnSIAHcgnCBomn9gjzUxrxCBeo6yT5Uc5Wzxru-e-Wy0s0aPc-39Fz7gpKSBcCHgcWggnIpRObztbxHggpoehryP6tbaT-VN-17---ZFFrV-t3OTpa7--GJ2c--GJFN-5GL3xc-9GPigq-T84fLpBpAMHpSBfACoemeoefCACAJrzttaUM5TUa5TUIErr0WWxOtWaOzyNNNN77977KACKBnAC90aTN1VN-7c-eGPvhSrq0ceV-1GRaD-9ZO8jSpKF--7--ZPZE--O6VKyV1O6qJppObVXc-aHHGgonUbVV-1ZZurAs1XHQCRnMzMppopDOVNWbttbYBec3mgce---HWfN-LHY8SS5X--09ahV-tAuEpN--TI4hxDUT7c-PI_QzrqXX-3ZxNzHzV--ZyYEV0dEl0pKsV---J06s--J71N--J8is--JDws-5JFcRs--JKrN0iJQsgnonCCL6xba6yOWXe9e--_6BUV2dHDArSUrz1XXX9-E_ADrICMKoN176X--0I2AV58JkgmgfIIICCTOaT0wNN--PKIxzUTcc-3_KPjIqV-1_MDbCV0yKYtSHpIpCSKHZlzLNV-10V55--5Kcizc-9KeMwq--0MPIV-dMpxrc--_Ul6V0OMzAnSN7-O_Wd6ppSppKMwNP-7X97V7-F_Zn6CzUrMOX9Xc7--_a82V-0OcIV-8OxHk--LW2N-DLaXxTX--4fBH-2_fwzLPV-0QFUV3OQn6xKMSxy0X-ee7-F_tjEBemhT6zzP7N-1_yrzR71uMvlwxIBemeefSu6zp9zTOzq-5TUxxWc9A97-9N1TU5V-0Va0V-8W-ps--NFDs--NFLN0aNK0UKptxxxrUNXXX9997V-DOBAzTX-2aJfQBy--0a2hV-0a3SV08aU0zT9V-taUEntc-5OtESV-eP2MzUSk6e9c-XPIwxMSN7VV-ddFArc-7aafrpUq-e7-TPquRnTTNc-mPxXxrrKlcVV9-3amCbSkV--5oXa-Gat6zSSzrUR7X7ec7-HQgPwxu7-9R1zzP-1tkzEmgj6zzXc-2b3DrLP--Ol2rq-78lqzrHegrzzzKEUTN6seVNcgeX-kbAFvBghCIKIIBpBognIJpMKSSxUSrSSxUrpK--0ogPV0OpIUnBOs-SbSprpUSI9jxa6aPeWzz5XeeV-PSyVwpEsV-CbXszKCCGWbsV7-0bZmzN--bbTv--0uTlV08uUInDTV-OulbqV1tuqQnCMF-5Ue-2bh7jJP--0vJ6V-0vjlV-OwCMqV-OwVCw-0twdKojFTNV3dwdbnUSMzs-PCA91V-HUDFBraV-5UKsSc-DUR5ByP--6rqa-2bsubMc--tyOApa7-yUdojJmnIqOtWV9--bxunV-0zWdVAOzeUnxBmfrrICrUUUUrpHzWVcWX1175X-Xc--UzJs-9VELhk--e0DGpX-2c8yvE5V0P1YAmzTX-Fc9eEBhHgn5Uta5N-OcBY6pSrIAUJgTOa-09We7-GcENbMSppzye9777c-9VzggtV-94IUs-9WO6SNV-95_ss-DWdaSDP-mcR2MBoggxrpUzzKSEzxUqUyX9ecWaNVe79V79c--WkEs-9WoBzNV2u6I8rMJpGaOV7Xc-9WxeRyV197X5onrsN9-1cXrMEc-uXElzMKM575NHe-09AHrpNP--1AZrV-eBC4rX--7ndq-4coH6ETP70HYKWxSMOxxc9XWbkd9V-9Edzk-HZ0xhyPc09Z7pBmpSxpy5O9V79--82Ca--86Zu-2dAgzUcV-PI-Bq--eIQcrX-1dKuADN-H_k1UrXc-9_qWSsV8uMPGmzMTNUUUSEMSxxze7e71c-XHee7-Ha0vzScV--aLfs01aO1woxIC6a-0tuc-DaUtSq7-6dh56pM0X7-7dp2zMSR-X--abWegmjUOWc-EdszfAKSzV5UNe9V1PUQ2nABUzc7-5by5U---cAvN--cHps-5cLGhV-DcONzR7--98tL-4e9eMrR7V-HciUxpX7-udBoSJfErlbuVX-29aVfmxIpGa7P--DdjHRtu-6eW7EKSN11--9XeD-jeZFrBfCpCSxpSrzJ5TUcOzaOXfBh9X9X--1c-1eGYR-5efWrCracV-1fXrV-ufyWxkV-ufAyBoeezUrzV-V-ugwopa7--fJNN-LfPwSpkVV-9iyzs--fqes-ifsnRxzxyXecV0ejZ8nMbe7-9ftmzP-FujbporSIzSpMUISCxzx-VUzrrTc6zy7Xh9ecVWuXX-7mcVHe1--ejc_xc-3ezMzK51-4ezOMKGV7-1g-Dw-Rf-nQAA9gnpMtzzzbttXXX7e-1f-oITV-agD2xzola9X-Ff2bjASrxSr-97VV-4f47MJyP7-9gJYUP--9lWRs-qg_aBfJxrzs117--gavs-PghqUKGX---fCFz-09nVOpqV--9njxk--gyON-Dh4IxL7-2fGYEENV-1ob8V-upTOpa7--hVws-XhbrSpLOcXV1eqiCpKR0yX7--9qk6k-PhjSS9c6y-7fR-rUrR7Xc-ehsTBgrqUscc-PiJ1hASaV-bfaA6AI9MMMHhzpUbzOyOz1X97-1ge7V-1tzIV1uu69nCrtwP-e-9ffCUprUkVXc-5fgVYCM5-V-9vpss-5jH-E--HjT-wxu--XjYHx9xSVN-19yPqognyT--pfugbS9rSrSMSrzpaUpSUMSkVV-VVVPHgccX1XX1c-9jiyz5V0Pz_GnSN1-4g0rMKR-7-HkBVxlu7--kCK70LkGUSpMSrOzuXWse7X9-4g57jrTXV-DkQfwxX--B98T--g9En-1v1y0pKorN7-7--gDm6V-v2vCxNV--l12N-Pl34RxUcX-0gHXnD-7gHhbKrq7X7-TlB1xMxcVcJ1lBSSrSSppzUzxpzT6xSSrKrMJopBmcXcxrMRUSpMKBgc7N1cX97971AMHYSSrMHcce7eVVN77XVX7-Oc1dMSHooe-V-CMKSSKq1VUpkUSrUSCMMMUSzSprKKHexxrSSxSxxyUSzzSUUSpSpSxKKBhUpttx57OaP0WyOaP-9-0V7X5CHcV77X1VVXXV-97cV----0c-7VXcY97X7ece1XABcc9--23yxV3v42inCMKrbVBe-0xXV-A4Ugk-aliIwpIMs----BS4D-2gSBER5V1v6fGpCCptV-X--BTnq-7gVUzKKT-VV--m1DN-qm1FRfpppNVN7N-DmEsxT9-QgZUjCSKEKR6xGWe57N-ZmVV0A8RQxR7--A8TUk-imT5xSTTTd9cV4Q8thxpponSpTN7-X77V--mZcN1immTUMSKCKMR16VUSprGbxkXBcVcX77V7V-TmmkSpUVcV-un7nSrMSxkX797V1ABckpMba99-0go5MN-5gpKjMMX7V-QCSMnV-vCllpk7-Pn_7wppc--6gu_jIIqN7-3gwCEUP1-HgwGzMMMSxlu7X7X1V1vETrmxSrTVX1--C-0D-Eh0RESoxSRN-X09--AFrbk--oIos-aoMTSIKFN5--5h58vIRNNV-2GitV-vH2_psV--oc-s0aoc_xKMSJe9JUUqN5P17VV-XoimSI5OycV-fHxjnk--CB5q-0hHcbN-VhHl6KpASSSKIMxsVWyP77VXV-7-HpEKxUX7-mpKbRoeKSo-NN--CNDi-7hOczxzTcXc--pboN-DpiAwpV-5hTmMpR5X-0QMjrnMN7-1hUQAT7-HqBoxK---DqWZRr--IhdNrKrSzOV5QBeX3e-9hfVIBpUzX17--CfpD-phgbjBmccjMJrzke76zrrMMSrUrpSyc17VVX7X7X7-HqmXSSX---qmvs--qqEN0HqtqSrxKESrNN7Xc1XV-2R4lV-fTzpnk-1hwNUTV4Prr2xMJnIC9EIrJomnqUKKCJeIIMOxp9MKzKSr6XX7--V57OV70WXV-5-N6a--V5fUUEofHchpKMOba7X5UTP7-0hzqEP-2i1rMSX-2vVmOnHpplxk-WcV-9sS7x5-2fXLhnESoxu7T17-2iCDURP-3fYKfrK9fISr6s-57---sq1c-DsqBSTX--DFu5-1iHcjR7Bmt9wxogcf95IIESpAAJegxUJfxI9onJeCrrrUrSUSSrSpMKSpUSrMKrMMMSMSppSKCyUUz5N71-0aP5OzyOzUSrUN6aOX10ty-7-0s-7cV-7X1X1-VX9XX7e9cecge16yX-X7X7BmXXcV-2iHoMUcV4Q_4_nBrpyOzSq5cXX7c-HtGWSpX7--tUGs-5u0pzc-Tu6aUSS-17-Tu7VxACOa---u7iN-5uEYS--5uEcz--auFlSKqNO99-2i_aUGuV0QdwKony7-BicpMJrMSc1-5V0feEApSWcc-5uYrSV-1uf6R--igpMV9vfYUppKHexxMzxxrUROttX1e7cW97HX17--2fYfV-Qf_oq-0Afj_rL7V0vfwMpMaX5V3Ag7opBpKpT575-7--fgPSna-4iqejAoOV-avQIxxrycce-0isQUF-1is_AGc-LvkFzM5X--fjqbr1--Dz_T-6j-zjASq75-1j1jzlc-9wL5ww--2lNpV-flSUxX-3j5MbM5X-Hj6HUJm_prMSk--7X--vlsIpk7-HwadwjOV-1wepR-2jAT6Ia-1fnTTxHnEy0X--Anark-9wvRwtV5QospnoxMSOzr0aNn9X797V-Qp0rq--QpG4o-0QpR0mxlX-4jL0rSq-c0XxPBBfBnEMKKyNNTOVN1e-6jMXUJlz11-EEgqwecX-s5OaSs-AjV-jKppq-17c-9y-hSkV3fsD9ppKIKDNNOVV17-Ty3bxJp0V--9yERww-0Ax-_npV--Ax2Ik-9zfaxkV-vzr2xk7-A-1BRy--3-zvV-w0lpqTc-I-kixr-c-A0MPENV3R55SnBpKkWa0zGVX-nkNrfACJeonMrxSrrrSrT55-IC9e-0ztVNX7X99--35IBV-R5UCqV-35iqV-w6ltpWc-60xjx--A1PugyV-B95ws-E1cpgpV--ki4IV1wAqXpUTUa1ee-4kl7ACOa7-02LhN-02YwN-I2aoBjy7-f2fQUKrScVc--I2gExS-V-b2tvSppo-7X-0kyWUF-1kyZMq7-036Ns-M36nwhr---RFUnqV-BFvKk-03Kgs-A3kyxNV-wI34p57-644wwN-64BcS--04PSN064PVSKSTUF14HcWc--BL4Uk-64ckSV-04jBN7r4jQxHppKKpMJxHe7V1-ecnIIKABoopUSognBnIAUtbotyOyNOsNTUSJnKq0a6ztbttVOzOVOX-5c0a5OV1XX7Ze9jpI977AI97--lSWj-FgMRSmf9zbrpzMKc0bxrKESxrlVXHVUbbpSkV7XccomXX9ZcP7-E4xwwja--lXvjV-wQInrsc0Q5ozSpKEryObbuVgce1c-Q64OwhMWX-0lmZbk-0lpy6P--GtFD-2lu5jKVV0RUb6mp6V-0m9erN-5mBT2BjNOV0wZLzpUk5XVPBZWrmmmmnIJrMSrSSSSKSMUxKpKrSESpbxSSrMOts7-7Ve7cnA9119-Oa0Wba7V---V7---ece-cmKJQBmp9ggzzrSKMMy-OyTTOX7X997X06mLdEBgnABnIIIICCAJnJpCCJnKJ0a5OtWa55Oa0WbaTObcV0WWV--I8QGBxs7-U8RIgpzs7c-29W_w-3mdg6Ctc-0mguE5-ZmlOjKBmmonUUUUbw-OzwN-VHmc1eV-wgZprsc-rANbgnKrUtX17c4UAhBhBenHYBocVgprSCHZnrrUMSxHnIKLOa-0VObaUzxWza0bsNOy1X7Xe9n9cV-1n8XjDN-IBkvzxXc-2BlYi-RnBjzIEMMKppKKF51-1-0V-9--nBzMVXBp7smn9f9XehBnCAIBomnABmceXeZegccZmonAAIBnKSMSrMVc57OyOaVUzWzOzxxzzztxzxxrrSrtbVOWtVN-OVP7V-0aT--RstSq--gtJnqP-3nilrCq7-AniufCAM0bbcV4UEFHBomghIHoonBnCKpKICSKpMxIBnJOtV-OsTOtsN0aUX7VN---6zOa--7fJe1-7nuYnACrtVc0EFVzgfBofKUUaOV0a73zH2ShKICCCCICCIBgnBpBpCICKpKCKRN55N-5N5OV0a0aN5-NNNOWV-NP7-zHTMwnJhpJ5-OVP-5oiBECSkV-0hBVAn9M6V-IIDDgzZc-2IgAR-1pHnrR--2KH6w-4pLvUIOaV-0KUwN92LmEgfBfBgqUSCrKKKBeVUX5-X4JmoocX-57NNmconHdBpJce99pKppppKIKopMrtxxxprKrMUStaN7-6yUza-7X9775ObzzStV--51--N-PcXX7-ILxOwoOV-UMCUghM5N--AMQdSNV0STQGrScX-8ptlrCCCta1-0CTnYnqP-0SVFsrM-70Eq1sfHnA9XcYCppSKKSErrSSCzpUUzKTOWaN0V0WX7VXWa-2KBme0WX19c-4qODnHrVN-2OnhB-Cqb12CCKJ-UcWV-IqjjQSrKAMzTNV7VXc-Nqu9fBnACIHnSLNOWWaOV--hjnFrX--r-vI-1xkFZpprOu97V-zr6zAApICSUpzKUxlyUrwUxKV56a6a7VVXY9_HmmeXVX1X9V4CmRVp9mrMaTUxT-e7c-OrAdfJnKrrSrrsN0X979X9-0rFTQP--MKdX--M_8P-DreVnCCSrzVVNec-AVFgBTV-T02FyV0L0slMs1c-6VTDEc-6V_Ajc-AV_JBtV-D5hsk-b_7iwnSROX1--OPBa-1tQurDN-Ya80xERTNXV" :
		16 === bO.eE ? p0 =
		"DwCd1sP0j--RaO__ddedddifv2EEznnnyfEeRwyzBBBB2Bn00-17-2fEMK9dCrtzUrrMMqN-X-789V----Sf-T--yfzIrzohrxy6kX6rSk16k7---11J7Z-35CISoOxsUKESpEP6qOV6pJp9mec17cmhpxUSogfBnMMGWxptyUUzc5UrtttzpoTOV6lVVZme-gcfBc5cUrztbV73cWztaEO-1I5dLOfvkygzEyaOdzjzsl2knvg2EW2zEznvzzyzyfyyzzvjuMyzdzjivvvyyinyaTVyydzufvevjgwBoG-znzdiEdbg2vkyjEyiazuK_4OGaJaPjzYnzzjBwnvyfiigEnuP_vjuiaOMdezeififiiEfgzfusnEeO_ivviEuvjzyzivivivg3EjuyjiezjjisnvvEffvznviyviYEYyzjygnBz1_Fl-zivjEzyuwnB2z0434-4G304-44-CGJFKJEK42Bo-38G-340403LK2kl44G_GFn-G402l2x2433432vuvfvY4-l-0-FkF3G-J43G3FJ3-G5J2---20L-Y-8CqLKOzvEjYn3GF5N0A3mrIprrIryT1Wace1XV0F2MKYo-H05ahSVV1R1RHOKefiznn0-z4KUy5MEe17X7Xa17X7X7X7X7e7X7-17Xe1XeX1VXT0aN7X7X9X7V19X7V17-Xec7X-7X77X7VfBctaT-17917-X--7V0V-9Xe19X1cX991hJpKJpKMSKMSKUIMUrMprSrMSrKMSKrKKrMSrSKrMprSrMpKMSMMpMSKrKKCKMUzrxrSUMUKIABceV17-XcX7X7917X9X7X7e--0aN-7V17XcX77eceVX7X17919X1EzyTN5T-c-7X77X7V197XcVXN-7V-17-X18VXD---X7a11--7a17-99177Vce91X7XX1cVXe9XV-N-7a11177VVX12V0V-VX9-N0VVVX1-1171777s0V5-N7V7Va0bVN0VUV-VN-2Vs--a-NTN0WbV50WsN5-N5-N5-N5-OrxzST-VXcc-VN-1N5-V51-15OxUSxUrxSxSJpMs0V-8V5Oa1D18V91191X11-VVX19nCSSKSSSrMrKQKpK7cXXX7Xcs-1X1VXVV7777719-csN7714yUSpUSSryN77c7X0V-16a0VenB5-D0WV9X-a0WWVN-gpC7X-gm10tV0yN7NNN1VV-N1mm-N--s-7WWyN--fLocccAAC9555NUsSpy-Wa555-c--hIJpCCBmg5NN-NNN8_y--N0VD-epnIKCCLVXYWV-919prKSC9cV77-V0Vc11111TTUVVgkf1991D-e1-ceXX7X-WWs9cXXgcUxy10Va1cXei1monICI7g9-XgegmVgem7X6xyUVc8bbta6bbtrzMST--15NAA9egemfABXnBm9n9XmfBpMI9mggfA1eceeegn9eeXe9AIBme7g7Vecg7dV9mgecVfWzzyUzxSvCMtbtbzxtUryOzzttbtaOaTOzs97ea0VenBmN5N-XN9X9XiOa5ObtaNNNNOttVgggnB7e17OVN0WbtT-tWV5MV0ztbaUzMy2aOyStI7fCMtxrzzbKrUyUa5Oa0bUsOa1me7f9cD-1997-VTOWaUV-WWrzzxprWzUrqnBnCKrSSzySSza19Es9aOs-c-WsOaN50V-NObttrSSxzzbtyUbzzUUzUtxrUUTUyULpf7hKyTSBpMzpompqpSxUrSSrKprUSMMUTMxSrKSKrrrppMKMSSprSy50byOSzaKgpxza6zUtbz_zUmgf9mA1egmgf9pMsOzbtzMyTOzzMbttWy2WrKKIKSKSUtVOsUCLnKUtza5SzUxSSrSSzUSrMrUzMttSxxMSSHemgnKzUSzrzxzyUrtbbpSrzKtKrSAMKSs-T---X55UbsN9eem7iObtztyU_rQMKrUSMzzSrxUzzbyUxxyUs18s1UaUprzxMKJhSrMxpps-V-798VUtaOVOVD-XhHDN-6V9XXm7ce7VVtV-951-Ors18Wa-7-177--1-UVcOyUbzMTUbURopIKCIA7f1hMShJonIMTUMUSUKKUMrSrRchMJpSryOxxhIMprSJpxrs---Wa4xxrSprKmpKKxUSrUT5OV7N2a--7-ztVYVXcVV2aOzrzzxrSrbrIMxJogAMSMSUUSrrKJgpQJnAJX97hMMU7fHeX-en99pSrxwopCICBmcXXccXehSrprUxzbztTpKJonKCBfHeXnCLpBmX9XpSzrpKpABeepS9nKnBofKwnBopRpBopCJpKpKKMKIKxzSzzzxKMSSSSKxKSIKtTUWyTObUrrxzrzrbrSzrMSrpzUxySrxxzrrrzzbtztzyMxrUKQKKSSppMKpSKpxprrSrUUSxxrMprrttVD5SrV-a-NN71-cX7791-77VVVVX71-TT6WWbWWWVN-NN8V711-V777X11XVcccceXVXXNNN8V-15-9-VV791dV1-VVX7X1-sNOtrtxtxtySyUVNStUrUrrbUMrppzzrbbry6pKKrMMMrMMCSUUKepKxs0aTTMUUU_rMT-OVN-6T-7-a-777V-5-XMxSSxxrxMU_pzhUxSmpra6QKUbSyOSSnMxSyUKSxCMKUtprySzrxxKttbzbSrbTN0xzUKBpyTSrrMtttzprrSSrMSpprKCILpJhBhIBonKMKLnKICJnBgmmpBm9mnAABgggmeommnAAAJghKKKhKgmpAAJpIJopCIMIMIJpCKJpKUa-s550V2VN50VNT0s5OWs6VT5NNTTTTTMyUSSxQJpJpAA7fBprxpttWbbSSQKSSSMMzSrt_rUUbUbaMyTOVzTOs7777N70V70_pzKKzbbSJpBp11hIKqnKUtIAJmnJnJmnIBnBnJnKKLpBnJhI7e9778V1N5-NT0VOtbaNN9gmmmkfICCACBgonCBpQICBnI1fJo9pSQJohBchKhCKJopSMKSSMrSMCIBomooenABfAIABgnIIMtsOaObbxI9mmon9gnKUwpMJpJpJpBmpSCShMKCMKCBpCK10V7-77X1-cVV-7hKKCMKrppMKSKpIAKtxzxSKpxnHghUySrvCICBfCJpMbnAIBhBgompIIMC9mgfCCKBoonIIICBfIIICBopIIIKKCKKSKMUKpKxpSSxxMUMKKSKxpUpKrSKSKSKnICCJnCA1999-1A9e-7-cXXX17V70a-f7VV-1--7XXm997cXX9AAC9mgoekccXg97XXABmkf9f9fA9emXn9emgmgonKtxgnBfI9nBemef1X9-9gn9meeXA9eemegoefBmgnBnC9gnC9eeggnCJhBpBnKJnKKKKxpIKrRhBhAKBhKSKKKIMKKKF7Z2MkT__44OOaO__O_LLTbYvkyffBkEcw2knyaaiBkyEC-x-nl3-3VQ3QMsc-O-txaOjzzk4K_-7VS-vCSzc7V0J2qEPevjFF3F--6mTV-FGRlV--92TV0kLotbx-a7AuPnIUUoxxzbzrKrpKKMSSSlWxrUsWtzKlzTUyOzbw516xSUzWbsX6wNgc55Xc7mcXmgmeJmofomXXIBcYHcVPXZcVTUceX1d9me17ee9-A0Y6qioC-asBoenIBjSUIBjUSJe9ceV7177eV7fC9gpzzHeeICyUxA9efIrzM0zKaP6kOxIMtxzbxBgef9gfMSxyU6ttaUttzGzryOa-OV1XCJc9VcN7---40ekqQ--NDEDyV--Red-6VumnMUacX--0pcZ3P2fIBnrozKocX7X7poxognBU6zbzojHxISryUWX-U0XV--V9YHX7--6M-k--Do0VDFSy8__bfuePPaEykFkk03C2-3VwCbAMV--0t6o-92oUS0V4FUCSaOQzBn4---ywe-Y13Y5KOjuRyaEBG2F--GW_V0FZtli---3co7-38GgR-93kCEP-1kaQpeNn--L4BWBn5T-BFdZS_ePOvjjjjwk3-FJGF0sL9epCyN9-mkhAhaefdPOOaOd_eO_dPLyiiveeeyEnnEiEwBk2nEnBnEEEnnwwznnF3333GGKJJG3G4KKGJ-94g9CkV--ipW-VWVbABxrMKz5OzJxsNNNVXmXe9c--B49F--PnOV-FqcSV7sQLqmeeppUUSSxtaTU6yT97997eeMC2a-LKOaOaOi_vdPiuzjd_dvijyu_KFJGF33303FC2-oBBB4KLOOaaOiaeduaeeffdiuzzzyyydKKJLfivjjjYBwyuyynzyEnznvszkxFzwzjvEBG0G2zjgyuyYvybvzjyieKbfYBkwzivYvyvyEiviyvfuuuPfePPaadvvvjjeOLP_MdOKKK_UeaPMefvjjYzYknkkzznFzyEjzjfyvvEzjeQfjYvzznzyiyEsywzwzYvEgkG43K4GJJKGJJK3-zjsEzjjvzwyyvvC3J2G3FJ2yjFG04FK4F4K-OKGJGJG0GK43EB4GG2EEzyvvn2yduyvjyinzx33G033Eiw-o-KF2k-GGJeKO_-0PL_JBFGKOF_KOHK4GFxOHKGGFwp08J-yEYnlKKFJBwFJK9eOFHLTdJ-kkn0KKdFPPe_3-B3HeOaJ_2-EeVC-3JKLdi_FHK20dPJFk0O_JBl3KT_3K5LLfjdJeu_Fo3_JiePJF30-l3FGJFoGF-X6dJBfEOtsV0FxOWbo-D6uCS6X1v2zp5_4fu_4ivEdiuPdKJF45aiivivyyiviiijsn-znBkBF235J-GG_-nBl-w44aKKG-KX2_nCErSSSkOWa11XeXLG1g8_OK_OOO_aPuKOdajsydQjznzydLKK_5KaiuyzyvzzzyzjvjidLK3KKGKKKKKaQfefjizjzyvdefiiznyzzyEwznBzwzkn2Eifzjufwyyzjwww--GPO_--zVBnvgEekk3K3GG3JGGFFG2B-333-0--03G3HK4ePeefeQiaOK--3-0-JFKiydeJHKJ2C40GG_ddKFnB2-JF0cWyMmmyTN-ZGfute2---ZAWV0G8Ihi3--8AO7--I0sk-7aWNk-RIFpuEF018vKgpKEM6tWV7XV--L5Mk-NgeYlV6GUzf_eczf24_-k-1C0lB-I5ZZqOynkqK-5YJBIArlX-1Gfu8_yC-6YOlnKIOV---5qJB-DCgdwja-C61_LTvoG-kYgE2KIJnAAMUxzUrOxzTOWaZcV9176qXeX7cVDlqEh_PPeffijjnEBC203FFGJ-mDm3BfEMtyP89-C6VITdTn---2mET-26bSqk--EMts2wUQzuiijiibfV-EYnn3G4LJJGF1szi7nJnr550e--78qw-1FShy-27J7aR-eFczBxKoT7-V-oWi1tLgwk-9FyXENV7H7Of_bisywyoGJG-GZSgYBepxxpyN5X97-gZ3Btfw30yZX6E9mY9eememXeefSzxzT6xzUrMommceKIABhBeMUSxyOWbbbxzHpATTTV5OzxzSy15Ua5O93eme9cXWWbbyVcmVAmK5MiyiajY2Eil3G445J--Hp-s--aMYk-0CdpV2HW8xuvoG-28GGLmemxr6tsV-oczDQis3F11JY8BgnBopr6ztzzNOWX7e7omX-0mZRx_UkRdHRBnKMKpMJppJxponBop6bbzxpxKlbWa0WWWX-UzUUrMzlxrWaWXVd9n9WVVc91e99X7eeVjHcccOe1V--dDLF0OOWLmpy1-6AISazG-5_hMYrq3e-2mvLGeyn04-Ca5w69nUrSq17--QBDVUivzzlJKJJ-qNYawozzyNn97c23mKCO_OLdiffgwnBBBl-J-5OPQhV0wnGIOeeyin0230F5uPAsSSUrHprMSI9BenCHoeXAIrrUUUzTUzyN56rzbV0bxbtcOyOttztcmefBgfBn9ef9X7VXX7X7X7V9IG_jaaeivzB-pFn2KJ09Pe2Rhbzzxxu7cemc-CCRoydz-p--5k5q-ICZKiPvjk34--5npT0dDEw5Oeuaufdeu_PeijB-BBFkoFG2EfswFk3-JLJ-9Ul6xk-7nzgraaOeQfVBB-n-1XVgnghCEpKSIIIMKxML5-0Wc0c5V71-7-C0ccQ-B92pWnABnIBgmxUa-UbtbrzzrtbbueXBee5Pec-C21Ktk6e6I4rJpIBrMM0c-0zzbae91c7Qh2tpO_ddeeTbeeiiduuffeeefydbefjiedeeaijY-nnBwnznEBnnEwk-nveefdbYw3B-2koFFnyjueuTw2FyvfiB-32G0-oGK3-OdveeJFFFo3BoLK0JF-40OOaOa_8KKFB3OKefddFF0--02F-00G2--5cWxzMSV1V0JNHMaB-uYI9RnKMGWWaNe-HJRYn_aayu_jjjeBC-FJFFEjiwC44F2uEcgpJxIIy5-NVV-07cwk-PGjhlV3oZcraOPzkC-5eHK_nABpKKrK55-575TT-e0fHO2qaaabeuauQeiffeQffF-33-kk-BB222n4J3K--9LCls-CAWRtk-1QXrVIK7Wd___4aLywyizYzYEyEBw0JOJOJJ-edEvRpK5Os1V1CKLfOdOyszywkGG4-5etPbKtae-jKWNneePfiuiifiijifiw2yfeii-zefeeeeefYBBn--0033F3F03-G-3F03-4-0GGGKJ-ufB4MHjSzSomcXfMpzS6xKKKKMSsV-10a7V-75Ouec17-6Lbx5JE-PfeifA9eme9AJzrzxztyN57-SVW5uU-0qkprRxMSKSpKSrtV7X7X17--V-58t6-LgVLbBpIKrWzSqV0V7Ve--O0SB8LoLpxJnBgmpICBomogn9oghBnIBpUbWxpMOzzVUsUbaTOa55ObxonKESyUSzrzRUtWztsTUzrMtcVV-V-eX-0Zegee977XX-cemcY9ecV8q__U_OdujEvnBmK30--hDurV-5vfz37hzjz9gemecf9genrI9ggn97gegegoenBgopCJonEJUzpCKKIKonKSKMKKKSMSpUKrbzV0V5NN-77VV-7X-WWVV-N-0aNOWWbsN-0yUUUxzrzSMKrSICpJnIIErL5NOaUSxpSUMSSkOWWaV1-1-55--Vc7X5UxrpUSUxty51-cVXX97VcXZecV9r1ep_LLasznvgyw343F-AZ4Kk6pnU1tLuaOG5K_a_OLLPKeOddYzwwwzEnzEnwzE2E2C-JF3-4id5YIMV7-Cs_ftkIvpQOmnA9nBgf9YBoooofICBeeCBoqUUUxtza6aNUWba6aOaOWba5T5THcV7NLKvdveejzG-33F-5q05bAzy9VCvXK8_eeiyvujin304_-3-0FZT-95mmcgfAACBn9ggeAA9mmnCUtzrprpUSAAIBggecmmggghM6tzNOtttyTTTUbbbxzKa5N0bbbbbbaNTTTTTTUy551ccfAA99XXcWnw5hG_OLKOLKaO_LKOK_POOKdaPOaPOaaUzBnEknwknzE2En2nzEnzeKazEyzzjnwzzznyszgzzzwziyzjvvzjEnueOOdawzEnnwzEEnwwzEEnknEnB0JLJJ__OJ0K_JLK4K4_G8K4445K_48LK_OK4G44K4OKGF1TETamnMTOVc" :
		17 === bO.eE ? p0 =
		"9mDS-FP-F--0TedPPOXo0HCGSpxrMptUSrUztztbbsUtaTTOzzzzStzSzSrSrSrppT-0btaOaNNUttVOa---56y6aOSrUaN5OzztztaOtTObtaNNUzaOSrSvHogmgfKpKSrCJgnIICMKrSryUWs--17XD--OaUzaOzyObzzztzrrUxUKprrzyUzzzzzzrSrrbzUSzyOaOsOzzzztbzzrAMSKzrUzzUSrUrrMKKSzzxrrxrxrrSrSrUSpMJnCKUV6aSxxUSxrSSMzzzWzz_zzzzzzxrUzxUzzrSzpxpxUSUxrxxSrrMSrSKKMKMSKKxrSKxzxpJmegnKzWzzoeepBpABgohBnBpMSKyOsT5T---OWWt_onKzzS9ehSrUzzzzrzzKKAILmfHnBpUztWsT0WaOaUzzzUrUrSzpxzzrSMSrzzzSKKKKpyTUaOzxzxrxxrxrUzzxzzzzzzzSrxrUrSrSzMSrSSrSrUprMKzUUUrbrbrbrrSMKxKKKpIKKKMKKKIBpKBnJnBhBgnCAIBnBnBnBgonIJoonIJnBnKBen17AKICIKKJgpKKCSSKKCKJpBpKIKBnKKKCACBpKMIKponBgfBnCHoonBnAKCKKCI9nBenBnBgmepCBn9cecegX-9eenHmognBmegefBnBenBnBenBgmonAKICCKKCKKKIKKJnCJnBmfBnBmpBnICIBpIBmpBmnBnABn8aObbaOa0bVOV1n9fCBonIHmonCMpQ9hCAJnJgnCBnBmpBpBgfA9nBmX9eeeXeXcXX9eee77gpKrSrzSrSrJnKKrrrrKJnCBnCBhCIBgemggeggef9eemmeecceAKKrKICJproomgmgeee9X9eXfKMSMAKMzrMyOtxrKCBe7VcfBprrBAIHnKhSKIBp9emgfBnCBpSMSUSxrrzzrKKLmnBmmnABpIKIBmgmnKSpSKUSrPkf9en9nAIKpIBgmXEV9gpB7Ve9VX9XbrUV1cc9V7Ws11chBeaN7tV7AIC7XN1N1777c2V-a5USy117aNN-ceef97Oa-Wzy1N-17WbyMMKSCKrs10WV-Ws978V-5-D5-s-7VcgmfMopCSppIA7XV--1-2bs717V15--a52aN-X1-cVN-X-V-ts-0V0VOV1OaOa1-2WV-sOV--7OV-V--VX-7--7-0yN7--7-X1OWa--1-0WVT--9N7OV--1-NN---V-17V-15Us--V--15NN7----VX1N7---X71--17eX7X7XX1VcX9XXcX9999A77eVeX9A17X9cX7X7X9cX7V7VV---717cV1717X717X-X7X71177X-X71N19--97X-X7-X7c-91X-X-7X7g7XVeX7Ws-177-17-5Oa5NOsOa5OaOV1XmX7eVcOV-95--5-sUWVNT5N--0WWtztaTT6WaOV7-0aOaOzza0aN0a--7VOV7s-s--6V-X---17X1Vc118V5OV7eX7XcXemnCCBfBnBoprSp9gn9cV17ee-9eee7eV4kDJ_aeiwn-FJ-u28mgpMSzsN-XeV5Fop6aeecBBk-F1t5Zdn9xxrs-9-O9QZyeevz-G3G-YcmK6CIIrUrrSrrrqOa9-X9X7X9cV1_beTuOPOPfznwwC3-4-Jh78rBeejprrSrNN--7-T5ITPw30U8E3BgonBzrtWzzaNVeeV8t9XtaOdOyzBwnEBKK-AmPDvCxrr-7X7ByJT4OdKaTizEydLQi_G48_OUdOvEvyuv-zyevvnzyBFzjvyBnzzznE0KKJJJK43JJG3JF0GKK-2BiSRpxxpWX7Xc" :
		18 === bO.eE ? p0 =
		"DgBy1vR-AV60YBnopk-O_9DCIs4rUUrSSMUrSrSSSMKzypKSSMRpKMSrUKMSpKSSrUrSKIKSueXgnCKBgme9XenIKKMBpSKpKMMxpLppKKpnBoopKMMMMKpMKKKKrSzzza55ObzzUUSxppppCCSSpSSrRopSrrSSSppMMSSrKSzUtpxrxxphSMUMUSrrUzzaOtbaOtbbbaOzWWaN5Os6yN-ee117eme97cX--1117XmmccVaN1-Xy-XD-NT-6sDOa0y-cWtzrrKrrSpptWSxs1W_rMUMMUTUUzrrrrSrSxKSrKKzKSrMSrxxprUUzUyTOa-N-1-X-7--1-VV1D-EUUaOtSs-SyMzy-Xe1XXe999XcefCIKKUUn7X7eXee8aOV11UUUa-X7X0Ss1N1mVcf9ecekgk1AJmnABgn99mn9hIJhKKMB7797ee17y17V79Ve79nFX8s19nAIKI1n9pMKKT5Jp-hFgV1goV1nIF-hB-1kOsN56rSpppMtVX-77c7a5N-D550V-ObbaTTN-OVa----N--7s50y0VTNN-9maOzV17cVeepABnBpKKCBnBoopIKMMS9pKKKKKKIBWV-D-XemgpKBe9gm9eOzbyOa5OWV15NN7-N--V5-OV55-50aOaOa----99e77X9e770V1OVX-ccefABn997Xc77VccgceXegfBnH7cegcVX9ecD-VV-7-XV7Xcs5OaUT155-51XD--UtyUy--zWzzUzrbzyMT5OtztyOaOzKpxxIKKKKpIKKSMIKSKKSzztzbyUxtaUaNN5OyKs-6V0WV0_y-SppSICMKMTTTOtQBpSCMSsSrMSzyTMSprSptSUbzzygfKxUaObrMJpTO_pmpUxraTTOtttVUtaSSptzIAK99eXegfKgpCLmpMrUSpz7fKBoohUttrSrUrrSrSAKKUUra4pSzbaNTObaUyUxopBpSrzbaOyN10baSrrpzKpSSUtSzpUs-75N7cc91cXoX7V7Ws1-5TUbaOaOaSySzzzrzzzUtaN0V971A9eenBeee7Xe9cgcfAA9gggnKJgpgeee9eA9mfBgf9geVVX9fB7X6baOTTNNOtaOty52tzVNN9m7Xcce9715N5ObKt_y-8rMbzs90My6_s4raOUxrrpUMrz_rCMUry-eXUzrpySrxyObrztrzUMUttpztrVMrzrMsURhUxpsOpCUbrzqmenMtzmpzb_mfKzpooXX1pBpxSSKpSMSMKKCMKQKnCBmmeXcc71171-V--XpIIKKnIAAIBnCMMCKprzWV7sObKKrKUMsNN5UyMzzrBpztttWVaTObW_xpI99ghKKMxztaUUbzzzMy6vBgnACUtz_yTMrUzbnIMUtttV-UrUSrSSprMSSMyOWVX-18a0a-0yTOa5NOzrrRoonBpSKBpCKCCKSnCCBhBmme7efMSUSzUUaOyT5OaN-0aUxpoopMSzTN99WbV2VVXX9eYV0WaN-V-OtvKKUSzMrs1797VtpzV6rrSSrzBhKCKMSrT-Wa-V0V-X77ca--UzzzyHpMT-yT-7-sOaObbyTTOzUtsUIMSpSRnMzMT0WsTOs97hIBeX-X7tVVtzVc8WWaUonMzbKUsTUbSxrnMUKBoonJnJgpBpBoptaNOttaT5NUxprCUT1-VObbzrUzzyTUzzzy2zSxxxzry-1-Wrbtbs9zbzV9UV19-fa-taTOpUWxMsN716aUKyUps0xzaNN0VOWbaUzSrzaMrzVcX155OVOV0ztby-199f1XOWa-N-TOWa5UaNUaOa5OaUtzxtaN7egYy-VTOaUrnMwnKtzxpzaICTmoomenCKS9e9hSKxzbrSrSKBgpMKrWs-_yTNMbMyTOzrJnHnKxrKpSMKMSpprKSSMU9fBopKKpcfKSMAIKSrUMMpSSrUzVbrMUUTMympKrSrUUzMBnKSKrSxpJpMrUSSpSKS97cXXXXcXXXX9997ccX7c7X7V11171N-V-VVX1-71117-7-X19997V1mopKrSxpMMKpPeVX7hJfKCCKMMMMMKKpprUa6BpepKAK8V1meommnKMPgpAACReonACBopKSIKMMCKKKKKRpKCKJoprUtbbSSUs4MtaT-78sUxzzwpxxpxrKKSSSUSpUSSSSSKKKSKKMKSKJpKKKIKKKJoopBn9mccgpKICAMIKKKrKCJnIIBopMMzxxrrSxxxrSpSMSpKABofBnBn97710VA112V1171mmgn9k7V51-7XecXpAHhAIBooo-X75NN-XeXnBnKIBnCCKBnB9gpKprryU_ppSzyOWVObrzyTShPfIBnCK9hKCCJpKzrzxprSrSSUrxxqeeehUxzUrrABnIBhMzsOxrxSmgpxnMHnHhMnMICHmpMnHhSyMBhLopC9fIMhBnBnCJommmfAA1nBo97c9nMMrFhBgnBehBgfABfIKSx9X17N1emXABf9gmnJepJmhRmopKCMSUSxrMSrrUSxrrxrSrSrMSSMKKppCKKRognBggogeefI9mpxrr9nBggoog7--N-e999fAa-XfJV17s7XA97XcgecWV7eeAJpKKJoopCKBpKKKrTTMMKSxRpKrSzrzxxrStSrUUUSSpLpCMSKMSzMSSRef7Xce7e9X997-cX9-c-777-11197VXX17X7cgc0V0VNN1VOV-1-WVV-77VcV71-V-71--AJVV7XhMCBmfBnC797g-ACI7-Oa--11-Vc-1XVX9979X17V1-VV7cec9oppnBn1gXo71oome-1nHmgfBpKIBgmmcenIBnBnBnAAAIA9mmonI9egoXmggopCMKKKLpQCIBoopKopJcgnIBp9fACJmge7X77VVa-11-V7-VVVX-V72V7-7-VVV11-V7----V---N78V5NN-V6s9XOy1cepgpQIA9f9e7X777VX7UTUbta1eekXX7X0VcX91c--g7-11emXceeXX9ee99ce9g7cX999XXXX99X7XV-5-V7ceeegeX7X977X77-X7XVV-5-1-7--ecD-9hBX99onAMSKIMJpKSpKrMKJhIMKopST-NOaOrRopIBfIMSSMzxzUpzUUaUaUbttyUaOhBpIJppMKprSxrUrrKMKprRnBn9ggnBms9gnICIK99efBomceXgnIBcXceeeXeefBp9emceececeegmeXXeekee9X9Xf9ecee7X7-5N-a-N--NOWVN--V-1-V1--5---711171--550aN5--0V1-V77-55---------N-7XOta6aN1ggnBmnI7VD-VNN--NN1ghKBpKIKKJpKIIKCKKKCKIKKRnBopKKrKSSIJpIIJoopCIJpKUKSMLpSKKIIJpKKMSnKrUSSppKpMSMKpSKrKp9eepUrpSSKpSprrrzzzSrrzzzrUrzxrUzUzUyTSxnICKCACCCBnABnBgnBmnABnCBnBgmnBgmmmgggggf9meemeXggf9mgemmmenAAABmmmmXhA7cgnIIAIBnBmhBnIBnKKSMSpgnCKRnKKMKKpKSprQMQCIKKCKMKCJpKKpMBohRmnABfB-1V9sQR73q09kCIBed989cCHZpMUMMSMSUOxbpy0bbxSraOaOc7TVP29C9Vc0VBecV--7NVV-N8H9w--c9BgrX-BVhQICKrSsV-1VkNB1Dn9choeAEHp9A9eAKKp9fCI9Xme118BgecX7IKKAKrJce70cXXXcXMSppCzSpJxSMKSKSSrk-0xpxxzba-17Oxta56paOsNNTOyTOa--USkWzMUUzs--VWbrxrrVV-d9e7VHsFGFpA9BnCzzII9X97pxS9XHVZoogqUtzqUyUxx50WsTOXmgcOuVOXc0T4CohpochopxzyN7X7NXV-cNWurX-AW_mQ9horyWa--D6JABqN-51WZ4aN79-1XOJ2Oc-58_IBN-i8hrCBfItza-V2Nd5onEIMLOs-X-0se3gprOX1V5NezHrS9eACprpxy0aN7cVV07h4Zpy1V3shEFnKMUrzcVN7I91V-chgRwP--Xvb6V37jO2mfSxrUba79cV3cjXTpJpJOyTOX7gc--1B70i-6Y102KttXe-4Y2-QBrWV-qBklBoptztf9-7-aBzewzzyPee--YGg2-DspvZoeeeXmeA9mgmogn9fSApra0tzWzy6tzzbzztza-e-1YR0fR--PDnihKtVX-SYi0nMS9VecnMSUzxc7UNN5eV4HE3LxHx9HfA9nBxpaX5TUbzUpKDNUKBh9e5BfCMSFT6zUbaOd9V0aP7OZecWV-dYlL2AAIBmcozMopohpzU---NOaOa6X97-LEHZBzbeV07yFszq9V-cz9FrX-4YxwbHc6s-9FJpByV0d0kXnUT7V--FTac-5FvBCV-XGFeBnEUa1-686HMnJmxCIATUpUzV5--57eV2t6dDnABplyUaN1c--GxMc-9HB5gtV38862nCBopa0taT7V0d8AyppN7-1THOURmocpAKpBc9zSMU0aN551-USL---WZbifBogn9ghCUrLTTTOyOWs7e7V08F5moo5-48NGSmzJmVCKK6ls-0V-1_meQFN19MIGBrKKKKopKzWaUbsX7X77-17c-1P80D09ablQKBxrSSMSxzUSpSrSrSprMMUSVVVVV0baXX997XX7ccXVX17X7c-DQ9vBxX-PblGIMMSrMMMkVVOte97eX7-DUDUCL1-0bwmfD-3c-SvC55-NcAPfppppSrSr1117X171-Ju42Zn9gmd9ceceAMSrSppKrSIBfrKCMUUKk-T9mcV5Ua5Ubz6tX--0aOa1X902cKbrCKKJpHpIJnIKBnCCBfBfEryOttVOu5OaTN5OX0a-7--1---cRyM--P9esnVneG9xnBmn9grKKJnIJpKSKMKJporUonHe2IBmmnCBpCKrSrKpppxrSzUzxxrV5-NNNOV-Ws-XV55UrSrxyOc775-7egoe50Wta7X777N--7VOxrSVWtbzUUSqV6bWaN19cVX99gecemd9ec1xdFn2SrJeCpKrMSrKpSKSKIKKIICCI9XKMKCMSII9comomnAABpCIJpBmrTObs0taT5OsNOzaUSKMUtV-0aXX0WxOzaOV0zr1750zrGWX--XVVV-77X7V0VV-117XXXcHX1V39Nu-nKrUUyP7X9XVFeTW0xrI997KBcXBgnCAJpta50aUpIIBnKSzba-0VVUzbqNX1c--dA_c19eGowgggnCSSGWWWbaUsUUUccee705ejHzrzUUyNA9eXeV19fFvonOaTX-Rf_UfKCBeISJxrT-0WbbVNXe--AcyX--Aenu-lfzAABeconJnUP5UrSpKIpxLV0zML5-V7--1X7-2gTJfAOV-AQx3k--sU3c1TvB1BnKCIKIKCpMSGzr-0VN--751-19-0iur2k0FkOrQBgceZgnKKMMKKSJmXxpSSprMs6rJnrUra5NX7-X10X0aOVN-1cV70c16258gfA9fJmnIMKxzyOaOs-NNNX-7lElAMryXe7-042oc-A4AKhN-7gKbcmpIrX6zrxrMzUVeVX-gocVXV-3MmVV-3NpHV4wNq3mmmrUUrMUTP77-X7--lazYV3RQ6imfrrSprs-1X9-7liMQEOxse70E6TIBmZxlxxKOa77VV0I6vXBefKMIM5Ota50cV-RW4Rw-0RW5cnK5--Om5EABpMKBhSxxs17-0V5X--H5H1-9mCaYBoxbaP70emCc2MSIBepJfIIBmVP7mnCIAACCKIlV50bxqUV6zxxpCKprzzaUKa577cWVNUrOtV17V17V7Xcc--HEP1-0mI5IF-0mLgQF-amT1YIBonIIICBgonGaOaNOWVNOWba-02AS3hKIKIJN0V-5--AByfCsV-BqE5k-6CtMgN-0D4wcDzDLQCCCBpIIAAUJmmfBnAAJonCBoomgggfABpAKCJeecme9IBnKKKrMJrSrzUSKpMKpzrtttbxpMbbqOaUwUxObzrrK6aTTTOa5550Vc155ObWaOs9--0WWbtzyNce9cc-Ne7Vcc90zbcV0ztte90byTOXeXeeeVNXeeV0RupTnClV-hngH2CCCCJpKKKppUUtzbta5-V777-X177XV1wx_ZnIKKaN-V-PnvrYCJooerSo-OzuXVTOV71MEjtggeeeggnIAACJoTUzrMUbbttyN-AEykhD--x0GZrsc-2FY2g-4o9gQCSX-CjFseBonHonBf9en9eegf9XfCIBfBpCKMMHhCCKpCKICIpOtzSMMKKIJxUbbs7VN1---VV5ObbxrKCESzUpISy0bbbse1cX5-XVcXeV6y6aTNNNfBmehCCBee19cVV-0a6bzttyUyTUtzwUtttaNNOWV-1oImQL--AGQ0CNV-x5IkxkV0IIIYXm2V7XXeyUta5UV-46fyV0C78BrT7V0S83qnAyP2IoidnCSprrSxrSzrUMSxpMxzUUSSMMMMSzSSrrSprMSpMSSxrSxxxprrrrrUrxrSUUbtaUUL----WX-5N97X9emVP97719ecX-0aNcgmme6a9eX7199e77gecVX7cXXXXXcXX77X7X9egeeXX9-2oitACsV0hAoJnEbsc1EIX0Bgeen9gf9rSaOzzWyUrzqNX9-0CE-XnxVV-4FqeV0SGIunObe-1p622T7-0JRDc-0JfGc-vK0CgggrUzaT19V-CLDDs-6Ku0CV-ALMbENV-COvBk-bLoRjSrR-cX-8pp72IJoOWV--4T3HV-STYBq--hTbPoN-6pzxnBpT0X-5q4TfCGaNV-xXFHpN7-6N_hh--2NfsB-NqBUQHeCCtzSSSzT1cX11-1CZ-NpprX17-7qMXnCMyN7c-IOb-BnaN-0Owzc2fPAlBgggf9fAHoonAABgnCKCbbaT5OWaOaTOtbaTTOaN-0PiN7-MPkJBf6tV-4fLuV-SgO9lV-phLT7tV-4gqNV-4hl5V3xiFwnA9nAROzqOaOXV-SifanVGKwWFOaOV6zzzzUUy6tztbKta56s-WrzzsN-5T4rKpppSKSKKKM-6Sk2RmmeXgeggnTUbxyTUbyOe-OMnm0a50aOV-NNOyNOxtyN-fRZugenzttuc6MRg2gooef9eemeX7XeeeA9Y9BehCIUzrMUzzbrxzttzztzUzrzqUzzbzzzbbzrzzV-9fA9eeX0XeBeeY9e7-DrA8vSzrOtaXeec-0S7u7-rS8wBhCUbttcec-bSGCgnCzaN9-BrL6QBezxyTPXV4hpYLmgfCtzxzSttX9ce-" :
		19 === bO.eE && (p0 =
			"EcCx-VQCO1iiqOLOKeeedae_ddadadadOfiveOeLeeeedadaPiuuiePPeeyeeeeOeaPadaeeydPeOedaOPLOeeeOadLOKLKKLJG4G3G4G4G3F-3GJG4G4KKG443G3G3G3G4K3K3K3GKKK3FJ40F33GK0K0K3G3F3F2nBnBnBnB-Bn-04G--BzzwEByvn-wG-BnnB2BkG44K-4KPKQyde_K-G3GKFwGPKO_O_K3J4KG4KKG4KKKJG4KJKK30304LOJG3GKKKKKQvjzuzziviueeaKaKPKKKKKKKKK3K_eOKO_OedaKaLaOevedaOGOeOeeaOaOaOeOjzvjyaPeOKKKOK43K_KKaveJGJ0-JG3G3GF3G3G43KaKF3G4aOedaOFKLK4_eee_dJK33KeaOLOaOjveeKLO_OaOaeKLPeivjeaOeOaJKGKJ4PdadafiyjedLPeueK3F-G30F3G3-3LOaOjeKLPe_O_OeaPfieieeyeaOaPOKOeedeOdada_daOdaKd_O_aOKPOKLKaKdK4LK3LTdaOdKaOK_KLPOaaO_LPKGKKK_KOaLO_aOOaaOdaPOdaO_OaKOdaPOdaPedeOJF--00LaPdeaeOfeyeiuudaueaaPdbeOeuefefuivfifujifieviivifeeid_G-04OF0-03KaPvievjizfeeLJ0-JG-KdOTvfiyviyujffviujeiufeiefivivfivvfeevivveiuueieiefeeiyejffuiuuiviuvfiifiieePeeaieieveuePdaPKJKefefefiuzzvzivviyfvnvjvzEzzjzwzzzBnzwnnk2Bwkn2zzknB-n2BnEBzyzzBzzEwnzznzzzjfzBzwzznziz2zwnBnBBkB--B2EBznEzBwnBnBzzBknEnEByywzzzzzEzz2wnzkzznEBwwEnEnEzznEzzzzzzzzEzwwEEizizizivjvjfznnzyyyvivzzwnyviuizyeyeKbifiuizzvifieeuyviuiuefie_iviiyjzvn3F3Bnw-BnBn2BnBnwnwnwnBkBBk22nEn-EeeieKdeiudaOaOPedaeePeee_KKLPOefzkzEEjzwk2B-k-kBB2yiiuieueeaeeaOOaOvzzzBzvjivjuiuyevieifiedaOeueuivivieuvfyvzvyvvuuvwzzyyvzzvjivvivvjyvznBnn2wzznwoLK-z2BknzEivePPLOOvjBwnEffeuyzefzuuujnkkGG-yzEEzBnEBnnBwnEBnznzzvzzznzvzzEBnzn-k-k-k-2-wB2B-k2-2nBB2kBBwnBw-nB-2Bk22Bw-BkknnBBBBBnBE-znznkkEnE2--kEBknBBkBBk2E-3-2Bk-k2B22BB2k-k-k2BBn-w2-32k-C3F--k-FG0G-22-2-FB--k-2-w-G32En--nB-2kKLePLdFJG3-F0033G043-l3-G3K3JK-32B3G4K4F--B--B--FGLJGJ3F03JLaeKFG--0---BFK--203FGGFG33F2nBFG3FGJ4GJ4K02GKF03-GKKG3K0JFK3G03F--G--l43--Bk--kG-FF3F03G-403G----l0----G--Bn33GJG340JG3-G4KaLKPKG-4-3F3F03-B-------G3FJ00--3KGF--0---03G0032T4mfgmegmeX7fBnJnKIEzzzzbrpzzaObtVOaNX9c9c0JN9cQfjzGG0F4NoWynBpJnKzzzV---Xc1RfMlOOvfvzwEw3GKKF-0gAIV-2OK2-3aoazBjs-pIUdyOaKaKaOfzzvgBnBF---1gInV-4OaA-BexerKESrs-V9V3q6e6dauVn3-0fPHBpMs-c-SiqWQwJ1mtRSUSKKKKKKJOzzxrROc11--TX-X7V7eeV4Meo2avi2kCK--EcNy-OUJfiLKdTzsBk-0kCPrF0fVVRjiveveiueOuveeeeaNn-n22-BG--030303K3F3B6-nnBnBrSr0a---EsTXQudeviviedazk-2-G-030K-4l1tMCkOc-57MIs-E3IhS5P-CYA-DLew--koIyA9emmfACMSrUtbzzzTTObrUtV7ge7X7eeV8QnZxddaebjwnB-30F3xzBZnMKCMzra71-7cV3wA4p_Qzzo4Ffy5yanHpIKSKMKSMSSrKKMofJppMKSKrSpSMKSzrzzrUtaOzsTN1oc5OaUzrHnCTOtaP755N5-T-NUTNN-N-5-5-N-P7X97gn9gmeee9n9meeX97cX7eVeX9cXV"
			), (new uc).ue(p0)
}

function aGU() {
	this.uk = null, this.aHY = null, this.aHZ = null, this.dU = function() {
		var aHa = [120, 105, 92],
			cos = [12, 12, 60],
			aHb = [300, 300, 9827, 26, 18, 36, 36, 8, 32, 3, 9],
			aHc = [140, 130, 120],
			aHd = [12, 12, 76],
			aHe = [240, 120, 1024, 30, 19, 30, 70, 8, 20, 3, 9],
			aHf = [130, 117, 106],
			aHg = [12, 12, 68],
			aHh = [270, 210, 1024, 28, 19, 33, 50, 8, 26, 3, 9];
		this.uk = new Array(bO.aGS + 1), __fx.customLobby.setMapInfo(this.uk), this.uk[0] = {
			name: L(117),
			a1: 230,
			j7: 230,
			lZ: 1e3,
			lW: 2e3,
			aGZ: 173
		}, this.uk[1] = {
			name: L(118),
			a1: 800,
			j7: 800,
			lZ: 100,
			lW: 50,
			aGZ: 43
		}, this.uk[2] = {
			name: L(119),
			a1: 512,
			j7: 512,
			lZ: 128,
			lW: 32,
			aGZ: 0
		}, this.uk[3] = {
			name: L(120) + " 1",
			a1: 960,
			j7: 960,
			lZ: 60,
			lW: 8,
			aGZ: 0
		}, this.uk[4] = {
			name: L(121),
			a1: 900,
			j7: 900,
			lZ: 100,
			lW: 5,
			aGZ: 0
		}, this.uk[5] = {
			name: L(122),
			a1: 1e3,
			j7: 1e3,
			lZ: 100,
			lW: 40,
			aGZ: 0
		}, this.uk[6] = {
			name: L(123),
			a1: 1e3,
			j7: 1e3,
			lZ: 100,
			lW: 20,
			aGZ: 0
		}, this.uk[7] = {
			name: L(124),
			a1: 1024,
			j7: 1024,
			lZ: 128,
			lW: 32,
			aGZ: 0
		}, this.uk[8] = {
			name: L(125),
			a1: 820,
			j7: 820,
			lZ: 200,
			lW: 100,
			aGZ: 0
		}, this.uk[9] = {
			name: L(126),
			a1: 1024,
			j7: 1024,
			lZ: 128,
			lW: 32,
			aGZ: 0
		}, this.uk[10] = {
			name: L(127),
			vC: aHc,
			vD: aHd,
			aGj: aHe
		}, this.uk[11] = {
			name: L(128),
			vC: aHf,
			vD: aHg,
			aGj: aHh
		}, this.uk[12] = {
			name: L(129),
			vC: aHf,
			vD: aHg,
			aGj: aHh
		}, this.uk[13] = {
			name: L(130),
			vC: aHa,
			vD: cos,
			aGj: aHb
		}, this.uk[14] = {
			name: L(131),
			vC: aHa,
			vD: cos,
			aGj: aHb
		}, this.uk[15] = {
			name: L(132),
			vC: aHc,
			vD: aHd,
			aGj: aHe
		}, this.uk[16] = {
			name: L(133),
			vC: aHc,
			vD: aHd,
			aGj: aHe
		}, this.uk[17] = {
			name: L(134),
			vC: aHa,
			vD: cos,
			aGj: aHb
		}, this.uk[18] = {
			name: L(135),
			vC: aHf,
			vD: aHg,
			aGj: aHh
		}, this.uk[19] = {
			name: L(136),
			vC: aHa,
			vD: cos,
			aGj: aHb
		}, this.uk[20] = {
			name: L(137),
			a1: 1024,
			j7: 1024,
			lZ: 128,
			lW: 32,
			aGZ: 0
		}, this.uk[21] = {
			name: L(120) + " 2",
			a1: 940,
			j7: 940,
			lZ: 80,
			lW: 8,
			aGZ: 0
		}, this.uk[bO.aGS] = {
			name: ""
		}, this.aHY = new Uint8Array(12);
		for (var a7 = 0; a7 < 10; a7++) this.aHY[a7] = a7;
		for (this.aHY[10] = 20, this.aHY[11] = 21, this.aHZ = new Uint8Array(10), a7 = 0; a7 < 10; a7++) this.aHZ[a7] = 10 + a7
	}
}

function aGV() {
	this.aHW = function() {
		for (var g6, ef, fG, aHU = a9Y, aHV = bO.uu, a1 = bO.ej, aHS = a1 - 1, aHT = bO.ek - 1, g1 = 0, eh = 1; eh < aHT; eh++)
			for (fG = eh * a1, ef = 1; ef < aHS; ef++) aHV[g6 = fG + ef << 2] === aHV[1 + g6] && aHV[g6] === aHV[2 + g6] && (g1++, aHU[2 + g6] = 4);
		ak.a4w = g1
	}, this.aHX = function() {
		for (var aHU = a9Y, a1 = bO.ej, aHS = a1 - 1, aHT = bO.ek - 1, id = 5, eh = 1; eh < aHT; eh++)
			for (var fG = eh * a1, ef = 1; ef < aHS; ef++) {
				var eC = 2 + (fG + ef << 2);
				4 === aHU[eC] && (! function(eC, id) {
					var eY = 1,
						aHU = a9Y,
						ea = aY.ea,
						a0y = [eC];
					aHU[eC] = id;
					for (; eY;) {
						for (var a0z = [], a7 = 0; a7 < eY; a7++)
							for (var eN = a0y[a7], eb = 3; 0 <= eb; eb--) {
								var ec = eN + ea[eb];
								4 === aHU[ec] && (aHU[ec] = id, a0z.push(ec))
							}
						eY = (a0y = a0z).length
					}
				}(eC, id), id = Math.max((id + 1) % 256, 5))
			}
	}
}

function a2m() {
	(wV = void 0 === wV ? document.createElement("canvas") : wV).width = bO.ej, wV.height = bO.ek, a2q = wV.getContext("2d", {
		alpha: !0
	}), a2r = a9Y = null, a2r = a2q.getImageData(0, 0, bO.ej, bO.ek), a9Y = a2r.data, b6.pT.uv(a9Y)
}

function ca() {
	var f0, a1, j7, max, aHj, lW, aHl, aHm, aHn, aHo, aHp, aHq, aHr, aHs, aHk = 1e4;

	function aHz(aHy, lZ, eY) {
		var a7;
		for (aHl[0] = aHy, a7 = 1; a7 < eY; a7++) aHl[a7] = aHl[a7 - 1] + lZ, lZ = aHl[a7] >= aHk ? (aHl[a7] = aHk - 1, -lZ) : aHl[a7] < 0 ? (aHl[a7] = 0, -lZ) : (lZ += 16384 <= au.random() ? lW : -lW) < -aHj ? -aHj : aHj < lZ ? aHj : lZ
	}

	function aI1(ef, eh, aI2, eY) {
		(aI2 ? function(ef, eh, eY) {
			var a7;
			for (a7 = 0; a7 < eY; a7++) f0[eh * a1 + ef + a7] = aHl[a7]
		} : function(ef, eh, eY) {
			var a7;
			for (a7 = 0; a7 < eY; a7++) f0[eh * a1 + ef + a7 * a1] = aHl[a7]
		})(ef, eh, eY)
	}

	function aI5(value, eY) {
		var a7, ky, eC, hU = value - aHl[eY - 1];
		if (0 != hU) {
			for (ky = 1 + bH.dl(Math.abs(hU), eY - 1), ky = hU < 0 ? -ky : ky, aHl[eY - 1] = value, eC = (eC = eY - 1 - bH.dl(Math.abs(hU), Math.abs(ky))) < 1 ? 1 : eY - 2 < eC ? eY - 2 : eC, a7 = eY - 2; eC <= a7; a7--) aHl[a7] += hU - (eY - 1 -
				a7) * ky;
			(hU < 0 ? function(eY) {
				var a7;
				for (a7 = eY - 2; 1 <= a7; a7--) aHl[a7] < 0 && (aHl[a7] = -aHl[a7] - 1)
			} : function(eY) {
				var a7;
				for (a7 = eY - 2; 1 <= a7; a7--) aHl[a7] >= aHk && (aHl[a7] = 2 * aHk - aHl[a7] - 1)
			})(eY)
		}
	}

	function aI8(a0y, a0z, eY) {
		for (var a7 = 0; a7 < eY; a7++) a0y[a7] = a0z[a7]
	}

	function aI9(g) {
		for (var a7 = 0; a7 < g.length - 1; a7++) g[a7] = g[a7 + 1] - g[a7];
		g[g.length - 1] = g[g.length - 3]
	}

	function aIA(a3H, gap, hT) {
		aHm.push(a3H), aHn.push(gap), aHo.push(hT)
	}
	this.a3 = function(a23) {
		! function(a23) {
			var a7;
			for (a1 = a23[0], j7 = a23[1], aHj = a23[2], lW = a23[3], f0 = new Int16Array(a1 * j7), max = j7 < a1 ? a1 : j7, aHl = new Int16Array(max), aHm = [], aHn = [], aHo = [], aHp = new Array(a1), aHq = new Array(j7), a7 = a1 - 1; 0 <=
				a7; a7--) aHp[a7] = !1;
			for (a7 = j7 - 1; 0 <= a7; a7--) aHq[a7] = !1;
			aHr = new Int16Array(a1), aHs = new Int16Array(j7)
		}(a23),
		function(eY) {
			var aHy = au.random() % aHk,
				lZ = au.random() % (2 * aHj + 1) - aHj;
			aHz(aHy, lZ, eY)
		}(max), aI8(aHs, aHl, j7), aI1(0, 0, !0, a1);
		var ef, eh, a23 = f0[0],
			eY = max,
			lZ = au.random() % (2 * aHj + 1) - aHj;
		for (aHz(a23, lZ, eY), aI8(aHr, aHl, a1), aI1(0, 0, !1, j7), aI9(aHr), aI9(aHs), aHz(f0[a1 - 1], aHr[a1 - 1], j7), aI1(a1 - 1, 0, !1, j7), aHz(f0[a1 * (j7 - 1)], aHs[j7 - 1], a1), aI5(f0[a1 * j7 - 1], a1), aI1(0, j7 - 1, !0, a1), aHp[a1 -
				1] = aHp[0] = !0, aHq[j7 - 1] = aHq[0] = !0, aIA(0, a1, !0), aIA(0, j7, !1), ! function() {
				var aIC, a3H;
				for (;;) {
					if (aIC = function() {
							var a7, aIC = aHm.length - 1;
							for (a7 = aIC - 1; 0 <= a7; a7--) aHn[a7] > aHn[aIC] && (aIC = a7);
							return aIC
						}(), aHn[aIC] < 5) return;
					a3H = aHm[aIC] + bH.dl(aHn[aIC], 2), (aHo[aIC] ? function(ef) {
						var eY, aIF, a7, aBm = 0,
							aIG = 0;
						for (; aIG < j7 - 1;) {
							for (a7 = aBm + 1; a7 < j7; a7++)
								if (aHq[a7]) {
									aIG = a7;
									break
								} eY = aIG - aBm + 1, aHz(f0[ef + a1 * aBm], 0 === aBm ? aHr[ef] : aHl[aIF - 1] - aHl[aIF - 2], eY), aI5(f0[aIG * a1 + ef], eY), aI1(ef, aBm, !1, eY), aIF = eY, aBm = aIG
						}
						aHp[ef] = !0
					} : function(eh) {
						var eY, aIF, a7, aBm = 0,
							aIG = 0;
						for (; aIG < a1 - 1;) {
							for (a7 = aBm + 1; a7 < a1; a7++)
								if (aHp[a7]) {
									aIG = a7;
									break
								} eY = aIG - aBm + 1, aHz(f0[eh * a1 + aBm], 0 === aBm ? aHs[eh] : aHl[aIF - 1] - aHl[aIF - 2], eY), aI5(f0[eh * a1 + aIG], eY), aI1(aBm, eh, !0, eY), aIF = eY, aBm = aIG
						}
						aHq[eh] = !0
					})(a3H), aIA(a3H, aHm[aIC] + aHn[aIC] - a3H, aHo[aIC]), aHn[aIC] = a3H - aHm[aIC] + 1
				}
			}(), ef = 0; ef < a1; ef++)
			if (!aHp[ef])
				for (eh = 0; eh < j7; eh++) aHq[eh] || ! function(ef, eh) {
					var value = f0[eh * a1 + ef - 1] + f0[(eh - 1) * a1 + ef],
						a56 = 2;
					aHp[ef + 1] && (a56++, value += f0[eh * a1 + ef + 1]);
					aHq[eh + 1] && (a56++, value += f0[(eh + 1) * a1 + ef]);
					f0[eh * a1 + ef] = bH.dl(value, a56)
				}(ef, eh)
	}, this.aGv = function() {
		return f0
	}, this.aGd = function() {
		f0 = null
	}
}

function aDE(er, es) {
	return 0 <= er ? bH.dl(er, es) : -bH.dl(-er, es)
}

function jB(f0) {
	return f0 * f0
}

function a4L(er, es) {
	return es < er ? er : es
}

function a94(er, es) {
	return er < es ? er : es
}

function a6U(er, f0, es) {
	return f0 < er ? er : es < f0 ? es : f0
}

function aII(f0, eY) {
	for (var et = bH.dl(f0 + 1, 2), a7 = 0; a7 < eY; a7++) et = bH.dl(et + bH.dl(f0, et), 2);
	return et
}

function aEb(f0, eY) {
	return f0 < 1 ? 0 : aII(f0, eY)
}

function aIJ(lx, ly, rk, a6E, mA, mB, rl, sN) {
	return !(lx + rk <= mA || ly + a6E <= mB || mA + rl <= lx || mB + sN <= ly)
}

function aIK(lx, ly, rk, a6E, mA, mB, rl, sN) {
	return lx <= mA && ly <= mB && mA + rl <= lx + rk && mB + sN <= ly + a6E
}

function um(f0) {
	return Math.floor(!!f0 * (1 + Math.log2(f0 + .5)))
}

function br() {
	this.dl = function(er, es) {
		return Math.floor((er + .5) / es)
	}, this.aIL = function(er, es) {
		return Math.floor(er * (es + .5))
	}, this.sqrt = function(f0) {
		return ~~Math.sqrt(f0 + .5)
	}, this.pow = function(e) {
		return Math.floor(Math.pow(2, e) + .5)
	}, this.or = function(value, min, max) {
		return Math.min(Math.max(value, min), max)
	}, this.aIM = function(fG, fI, fK) {
		return Math.max(Math.min(fG, fI), fK)
	}, this.aIN = function(aIO, aIP, ef, eh) {
		ef -= aIO, aIO = eh - aIP, eh = 0;
		return 0 == ef ? eh = 0 <= aIO ? Math.PI : 0 : (eh = Math.atan(aIO / ef), eh += 0 < ef ? .5 * Math.PI : 1.5 * Math.PI), eh
	}, this.log2 = function(f0) {
		return Math.floor(!!f0 * (1 + Math.log2(f0 + .5)))
	}, this.log10 = function(f0) {
		return Math.floor(Math.log10(f0 + .5))
	}, this.aIR = function(aIS, aIT, aIU, aIV, aIW) {
		return aIU - aIW < aIS && aIS < aIU + aIW && aIV - aIW < aIT && aIT < aIV + aIW
	}, this.vm = function(hN, hO) {
		return hN * hN + hO * hO
	}
}

function d6() {
	this.s = new aIX, this.rd = 0;
	var aIY = new Array(30);

	function aIc() {
		for (var eY = aIY.length, a7 = 0; a7 < eY; a7++) aIY[a7] = null
	}
	this.dU = function() {
		for (var aIZ, aIa = document.body.firstChild; aIa;) {
			if (aIZ = aIa.nextSibling, document.body.contains(aIa) && ("DIV" === aIa.tagName || "INPUT" === aIa.tagName || "BUTTON" === aIa.tagName)) try {
				document.body.removeChild(aIa)
			} catch (e) {
				console.log("error 2623: " + e)
			}
			aIa = aIZ
		}
	}, this.o = function(e0, aIb, a23) {
		void 0 === aIb && (aIb = this.rd), bb.dc = !0, 0 === e0 && (0 === aW.zU() ? e0 = 5 : u.v.setState(13)), this.qm(), this.rd === e0 && (aIb = aIY[e0].aIb, aIY[e0] = null), this.rd = e0;
		var kO = aIY[e0];
		if (!kO || 4 === e0 || 7 === e0 || 8 === e0 || 9 === e0 || 10 === e0 || 11 === e0 || 13 === e0 || 15 === e0 || 18 === e0 || 20 <= e0 && e0 <= 28) {
			if (0 === e0) return void aIc();
			1 === e0 ? kO = new aId : 2 === e0 ? kO = new aIe : 3 === e0 ? kO = new aIf : 4 === e0 || 9 === e0 || 10 === e0 || 11 === e0 || 13 === e0 ? kO = a23 : 5 === e0 ? kO = new aIg : 6 === e0 ? kO = new aIh : 7 === e0 ? kO = new aIi(n.s
					.aIj) : 8 === e0 ? kO = a23 : 12 === e0 ? kO = new aIk : 14 === e0 ? kO = new aIl : 15 === e0 ? kO = new aIi(n.s.aIm) : 16 === e0 ? kO = new aIn : 17 === e0 ? kO = new aIo : 18 === e0 ? kO = new aIp : 19 === e0 ? kO =
				new aIq : 20 === e0 ? kO = new aIr : 21 === e0 ? kO = new aIs : 22 === e0 ? kO = new aIt : 23 === e0 ? kO = new aIu : 24 === e0 ? kO = new aIv : 25 === e0 ? kO = new aIw : 26 === e0 ? kO = new aIx : 27 === e0 ? kO = new aIy :
				28 === e0 ? kO = new aIz : 29 === e0 && (kO = new aJ0), kO.aIb = aIb, aIY[e0] = kO
		}
		kO.show(a23)
	}, this.ze = function() {
		this.wq() && this.aJ1(this.aCp().aIb)
	}, this.aJ1 = function(e0) {
		this.wq() && (aIY[e0] ? (this.qm(), bb.dc = !0, this.rd = e0, aIY[e0].show()) : this.o(e0))
	}, this.qm = function() {
		this.wq() && aIY[this.rd].qm()
	}, this.r = function() {
		this.wq() && (aIY[this.rd].qm(), aIc(), this.rd = 0, u.v.setState(13))
	}, this.tA = function() {
		var kO;
		this.wq() && (kO = aIY[this.rd]).tA && kO.tA()
	}, this.resize = function() {
		if (!this.wq()) return !1;
		aIY[this.rd].resize()
	}, this.gm = function(ef, eh) {
		var kO;
		this.wq() && (kO = aIY[this.rd]).gm && kO.gm(ef, eh)
	}, this.zr = function(ef, eh) {
		var kO;
		this.wq() && (kO = aIY[this.rd]).zr && kO.zr(ef, eh)
	}, this.a0F = function() {
		var kO;
		this.wq() && (kO = aIY[this.rd]).a0F && kO.a0F()
	}, this.zu = function(kj, kk, deltaY) {
		var kO;
		this.wq() && (kO = aIY[this.rd]).zu && kO.zu(kj, kk, deltaY)
	}, this.a0P = function(code) {
		var kO;
		return !!this.wq() && ((kO = aIY[this.rd]).a0P && kO.a0P(code), !0)
	}, this.iS = function() {
		var kO;
		this.wq() && (kO = aIY[this.rd]) && kO.iS && kO.iS()
	}, this.wq = function() {
		return 0 < this.rd
	}, this.aCp = function() {
		return aIY[this.rd]
	}, this.aBA = function(e0) {
		return aIY[e0]
	}, this.aJ2 = function() {
		return aIY
	}
}

function aIi(data) {
	var aJ3, aJ4;
	this.show = function() {
		data.aJ5 && bE.aJj("account", data.rb), aJ3.show(), this.resize()
	}, this.qm = function() {
		aJ3.qm()
	}, this.resize = function() {
		aJ3.resize(), aJ4.resize()
	}, this.a0P = function(et) {
		2 === et && aJ3.t2[0].pc()
	}, aJ3 = new sv(data.username, [new q("⬅️ " + L(22), function() {
		bE.clear(), n.ze()
	}), new q(data.aJ5 ? "🔄 " + L(138) : L(139), function() {
		n.o(8, n.aCp().aIb, new re(25, {
			rf: 0,
			rb: data.rb,
			rc: data.rc
		}))
	}, 0, 0, 1)]), aJ4 = new pC(aJ3.t1, function() {
		var pE = [];
		pE.push(function() {
				var aJK = new ow,
					q8 = (aJK.oz(L(177)), new q9({
						value: data.username,
						e0: -1
					}));
				q8.e.readOnly = !0, aJK.pA(q8), aJK.pA(new qz([new q(L(150), function(e) {
					return b6.pJ.a1b(q8.e), b6.pJ.a1c(e), !0
				}).button])), data.aJ5 || aJK.p1(L(178));
				return aJK
			}()),
			function(pE) {
				var aJK, p2, a9m, aJb, aJQ;
				data.aJ5 || ((aJK = new ow).oz(L(179)), (p2 = aJK.p1(data.aJa.length + " / 160")).style.textAlign = "center", a9m = !0, (aJb = new tG(0, 1, function(e) {
					e = e.target.value.length;
					p2.textContent = e + " / 160", 160 < e ? a9m && (a9m = !1, aJQ.pf(1), aJQ.button.style.color = b7.mX) : a9m || (a9m = !0, aJQ.pf(0), aJQ.button.style.color = b7.nM)
				})).e.rows = 6, aJb.e.style.fontSize = "1em", aJb.tN(data.aJa), aJK.pA(aJb), aJQ = new q(L(180), function() {
					if (!a9m) return !0;
					n.o(8, n.aCp().aIb, new re(29, {
						rf: 1,
						p0: aJb.tO().substring(0, 160)
					}))
				}, 0, 0, 1), aJK.pA(new qz([aJQ.button])), 0 !== data.aJc && (aJK.pA(new qz([new q(L(1 === data.aJc ? 182 : 183), function() {
					n.o(8, n.aCp().aIb, new re(29, {
						rf: 0,
						p0: ""
					}))
				}, 0, 0, 1).button])), aJK.p1(1 === data.aJc ? L(184, [data.aJe - 1]) : L(185, [data.aJe - 1]))), aJK.p1(L(181, [data.aJd])), pE.push(aJK))
			}(pE),
			function(pE) {
				var aJK;
				data.aJ5 && 0 !== data.aJc && ((aJK = new ow).oz(L(179)), aJK.p3(data.aJa), aJK.pA(new qz([new q(L(186), function(e) {
					return aw.s.aBw(0) && (b6.pJ.a1c(e), aw.aJO.aJZ({
						rf: 5,
						rb: data.rb,
						rc: data.rc
					})), !0
				}, 0, 0, 1).button])), pE.push(aJK))
			}(pE), pE.push(function() {
				var aJK = new ow;
				aJK.oz(L(140)), aJK.p5(L(141) + b6.z3.a2H(data.u9, .01, 2)), data.aJ5 || (aJK.p1(L(142)), aJK.p1(L(143)), aJK.p1(L(144)));
				return aJK
			}()), data.aJ5 && pE.push(function() {
				var aJK = new ow,
					q8 = (aJK.oz(L(145)), new q9(bf.dp.data[147], 1, void 0, function(e) {
						aJL(e.target.value)
					})),
					aJM = (aJK.pA(q8), new q(L(14), function(e) {
						return q8.e.readOnly && aw.s.aBw(0) && (b6.pJ.a1c(e), aJN(), aw.aJO.aJP({
							rf: 0,
							rb: data.rb,
							rc: data.rc,
							value: bH.or(Math.floor(100 * bf.dp.data[147].value), 0, 4294967295)
						})), !0
					}, 1)),
					aJQ = new q(L(146), function(e) {
						return e.textContent === L(146) ? (e.textContent = L(147), q8.e.readOnly = !0, aJM.pf(0), aJM.button.style.color = b7.nM, bf.qw.qx(147, q8.e.value), aJL(bf.dp.data[147].value)) : aJN(), !0
					}),
					p2 = (aJK.pA(new qz([aJQ.button])), aJK.p1()),
					aJL = function(f0) {
						f0 = isNaN(f0) ? 0 : Number(f0);
						var f0 = Math.max(f0, (data.aJR + 1) / 100),
							aJS = Math.floor(100 * Math.max(1e-4 * f0, data.aJR / 100)) / 100;
						p2.textContent = L(148, [f0.toFixed(2), bf.dp.data[105].value, aJS.toFixed(2), data.rb, (f0 - aJS).toFixed(2)])
					},
					aJN = function() {
						aJQ.button.textContent = L(146), q8.e.readOnly = !1, aJM.pf(1), aJM.button.style.color = b7.mX
					};
				return aJL(bf.dp.data[147].value), aJK.pA(new qz([aJM.button])), aJK
			}());
		pE.push(function() {
			var aJK = new ow,
				q8 = (aJK.oz(L(149)), new q9({
					value: data.rb,
					e0: -1
				}));
			return q8.e.readOnly = !0, aJK.pA(q8), aJK.pA(new qz([new q(L(150), function(e) {
				return b6.pJ.a1b(q8.e), b6.pJ.a1c(e), !0
			}).button])), aJK
		}()), data.aJ5 || (pE.push(function() {
			var aJK = new ow,
				aJT = (aJK.oz(L(151)), new q9(bf.dp.data[106]));
			return aJT.e.readOnly = !0, aJT.e.type = "password", aJK.pA(aJT), aJK.pA(new qz([new q(L(152), function(e) {
				return e.textContent === L(152) ? (e.textContent = L(153), aJT.e.type = "text") : (e.textContent = L(152), aJT.e.type = "password"), !0
			}).button, new q(L(150), function(e) {
				return b6.pJ.a1b(aJT.e), b6.pJ.a1c(e), !0
			}).button])), aJK.pA(new qz([new q(L(154), function() {
				n.o(8, n.aCp().aIb, new re(15))
			}).button])), aJK.oz(L(155), "0.8em"), aJK.p1(L(156)), aJK.p1(L(157)), aJK.p1(L(158)), aJK
		}()), pE.push(function() {
			var aJK = new ow;
			return aJK.oz(L(159)), aJK.pA(new qz([new q(L(160), function() {
				n.o(6, n.aCp().aIb)
			}).button])), aJK.pA(new qz([new q(L(161), function() {
				bf.qw.qx(105, ""), n.o(8, n.aCp().aIb, new re(18))
			}).button])), aJK.pA(new qz([new q(L(162) + bf.dp.data[105].value, function() {
				n.o(4, 0, new p(L(163), L(164), !0, [new q("⬅️ " + L(22), function() {
					n.o(7, n.aBA(7).aIb)
				})]))
			}, b7.n8).button])), aJK
		}()), pE.push(function() {
			function aJV(e0) {
				for (var a7 = 0; a7 < 2; a7++) aJU[a7].pf(0 === e0 ? b7.mi : 0 === a7 ? b7.n8 : b7.ms)
			}
			var p8, aJU, aJK = new ow;
			aJK.oz(L(165)), aJK.p1(L(166)), bf.s.tt();
			return aJU = [new q(L(167), function() {
				var e0 = Math.min(bf.dp.data[117].value, p8.p9.length - 1);
				if (!(e0 < 1)) {
					p8.p9[e0].remove(), p8.p9.splice(e0, 1);
					for (var a7 = e0; a7 < p8.p9.length; a7++) p8.p9[a7].name = "" + a7;
					bf.s.tw(e0), e0 = bf.dp.data[117].value, p8.p9[e0].textContent = p8.p9[e0].textContent.replace("⚪", "🟢"), aJV(e0)
				}
			}, b7.mi), new q(L(168), function() {
				var e0 = Math.min(bf.dp.data[117].value, p8.p9.length - 1);
				e0 < 1 || (e0 = bf.s.tx(e0), bf.qw.qx(105, e0.rb), bf.qw.qx(106, e0.password), n.o(8, n.aCp().aIb, new re(18)))
			}, b7.mi)], (p8 = new sq(bf.dp.data[117], aJV)).p9[0].style.marginTop = "0.5em", aJK.p7(p8), aJK.pA(new qz([aJU[1].button])), aJK.pA(new qz([aJU[0].button])), aJK
		}()));
		return pE.push(function() {
				var aJK = new ow;
				return aJK.oz(L(169)), aJK.p5(L(170) + b6.z3.a2H(data.u5, .1, 1) + "<br>" + L(171) + (data.u6 + 1) + " / " + data.u8 + "<br>" + L(172) + data.u7), aJK
			}()),
			function(pE) {
				var aJK = new ow,
					z6 = data.uC,
					aJf = (aJK.oz(L(187)), aJK.p5(L(188) + (z6 ? "[" + data.uA + "]" : "-")), aJK.p5(L(189) + b6.z3.a2H(z6, .001, 2)), aJK.p5(L(171) + (data.uE + 1) + " / " + data.u8), data.uF),
					aJg = (aJK.p5(L(190) + b6.z3.a2H(aJf, .01, 2)), data.uH);
				aJK.p5(L(191) + aJg), aJK.p5(L(192) + b6.z3.a2H(aJf / Math.max(aJg, 1), .01, 2)), z6 = data.uD, aJK.oz(L(193), "0.8em"), aJK.p5("Clan: " + (z6 ? "[" + data.uB + "]" : "-")), aJK.p5(L(189) + b6.z3.a2H(z6, .001, 2)), aJf = data
					.uG, aJK.p5(L(190) + b6.z3.a2H(aJf, .01, 2)), aJg = data.uI, aJK.p5(L(191) + aJg), aJK.p5(L(192) + b6.z3.a2H(aJf / Math.max(aJg, 1), .01, 2)), pE.push(aJK)
			}(pE),
			function(pE) {
				var aJK = new ow;
				aJK.oz(L(194)), aJK.p5(L(195) + data.aJh + "<br>" + L(175) + (data.aJi.length ? L(196, [data.aJi]) : L(197))), data.aJ5 && (aJK.pA(new qz([new q(L(198), function(e) {
					return aw.s.aBw(0) && (b6.pJ.a1c(e), aw.aJO.aJZ({
						rf: 4,
						rb: data.rb,
						rc: data.rc
					})), !0
				}, 0, 0, 1).button])), aJK.p1(L(199)), aJK.p1(L(200)));
				pE.push(aJK)
			}(pE), pE.push(function() {
				var aJK = new ow;
				if (aJK.oz(L(173)), aJK.p5(L(174) + data.aJW + "<br>" + L(171) + (data.aJX + 1) + " / " + data.u8 + "<br>" + L(175) + bl.e2(data.aJX)), data.aJ5) {
					var q8 = new q9(bf.dp.data[157], 1, void 0, function(e) {
							aJL(e.target.value)
						}),
						aJQ = (q8.e.style.marginTop = "0.6em", aJK.pA(q8), new q(L(146), function(e) {
							return e.textContent === L(146) ? (e.textContent = L(147), q8.e.readOnly = !0, aJY[0].pf(0), aJY[1].pf(0), aJY[0].button.style.color = b7.nM, aJY[1].button.style.color = b7.nM, bf.qw.qx(157, q8.e
								.value), aJL(bf.dp.data[157].value)) : aJN(), !0
						})),
						aJY = (aJK.pA(new qz([aJQ.button])), [new q("−", function(e) {
							return q8.e.readOnly && aw.s.aBw(0) && (b6.pJ.a1c(e), aJN(), aw.aJO.aJZ({
								rf: 7,
								rb: data.rb,
								rc: bH.or(bf.dp.data[157].value, 2, 32767)
							})), !0
						}, 1), new q("+", function(e) {
							return q8.e.readOnly && aw.s.aBw(0) && (b6.pJ.a1c(e), aJN(), aw.aJO.aJZ({
								rf: 6,
								rb: data.rb,
								rc: bH.or(bf.dp.data[157].value, 2, 32767)
							})), !0
						}, 1)]),
						p2 = aJK.p1(),
						aJL = function(f0) {
							f0 = isNaN(f0) ? 0 : Number(f0), f0 = Math.floor(bH.or(f0, 3, 32767)), p2.textContent = L(176, [f0 - 1, f0, bf.dp.data[105].value])
						};
					aJK.pA(new qz([aJY[0].button, aJY[1].button]));
					for (var a7 = 0; a7 < 2; a7++) aJY[a7].button.style.fontSize = "1.6em";
					var aJN = function() {
						aJQ.button.textContent = L(146), q8.e.readOnly = !1, aJY[0].pf(1), aJY[1].pf(1), aJY[0].button.style.color = b7.mX, aJY[1].button.style.color = b7.mX
					};
					aJL(bf.dp.data[157].value)
				}
				return aJK
			}()), pE
	}())
}

function aIt() {
	var aJk, aJl, aJm, pE;

	function aJn() {
		aJp(), 2 !== a9.data.aIncomeType && (a9.data.aIncomeData = null), n.aJ2()[19] = null, n.ze()
	}

	function aJp() {
		2 === a9.data.aIncomeType ? (b6.pT.a12(aJm.tO(), a9.data.aIncomeData, 255), b6.pT.max(a9.data.aIncomeData) || (a9.data.aIncomeType = 0)) : 1 !== a9.data.aIncomeType || a9.data.aIncomeValue || (a9.data.aIncomeType = 0)
	}
	this.show = function() {
		aJk.show(), this.resize()
	}, this.qm = function() {
		aJk.qm()
	}, this.resize = function() {
		aJk.resize(), aJl.resize()
	}, this.a0P = function(et) {
		2 === et && aJk.t2[0].pc()
	}, aJk = new sv(L(201), [new q("⬅️ " + L(22), aJn)]), aJl = new pC(aJk.t1, (function(pE) {
		var aJK = new ow;
		aJK.oz(L(202)), aJK.p7(new sq({
			su: [L(203), L(204), L(205)],
			value: a9.data.aIncomeType
		}, function(e0) {
			aJp(), 2 !== e0 || a9.data.aIncomeData || (a9.data.aIncomeData = new Uint8Array(a9.eV)), a9.data.aIncomeType = e0, n.o(22)
		})), pE.push(aJK)
	}(pE = []), function(pE) {
		var aJK;
		1 === a9.data.aIncomeType && ((aJK = new ow).oz("Value"), aJK.pA(new q9({
			e0: -1,
			value: a9.data.aIncomeValue
		}, 1, 0, function(e) {
			var value = bH.or(Math.floor(e.target.value), 0, 255);
			e.target.value = a9.data.aIncomeValue = value
		})), pE.push(aJK))
	}(pE), function(pE) {
		var aJK;
		2 === a9.data.aIncomeType && ((aJK = new ow).oz("Data"), (aJm = new tG(0, 1, 0, 1)).tN(b6.z3.a2O(a9.data.aIncomeData, 4)), aJK.pA(aJm), pE.push(aJK))
	}(pE), pE))
}

function aIw() {
	var aJk, aJl, aJm;

	function aJn() {
		aJp(), 3 !== a9.data.botDifficultyType || b6.pT.a0q(a9.data.botDifficultyData) || (a9.data.botDifficultyType = 0), 3 !== a9.data.botDifficultyType && (a9.data.botDifficultyData = null), n.aJ2()[19] = null, n.ze()
	}

	function aJp() {
		3 === a9.data.botDifficultyType && b6.pT.a12(aJm.tO(), a9.data.botDifficultyData, aA.jr.length - 1)
	}

	function aJu(pE, e0) {
		var aJK = new ow,
			value = (aJK.oz(e0 < 0 ? L(47) : L(46) + " " + bc.yc[e0 % 9]), 0 <= e0 && (aJK.p5(L(208) + ": " + a9.data.teamPlayerCount[e0]).style.marginBottom = "1em"), e0 < 0 ? a9.data.botDifficultyValue : a9.data.botDifficultyTeam[e0]);
		aJK.p7(new sq({
			su: aA.jr,
			value: value
		}, function(k2) {
			e0 < 0 ? a9.data.botDifficultyValue = k2 : a9.data.botDifficultyTeam[e0] = k2
		})), pE.push(aJK)
	}
	this.show = function() {
		aJk.show(), this.resize()
	}, this.qm = function() {
		aJk.qm()
	}, this.resize = function() {
		aJk.resize(), aJl.resize()
	}, this.a0P = function(et) {
		2 === et && aJk.t2[0].pc()
	}, aJk = new sv(L(47), [new q("⬅️ " + L(22), aJn)]), aJl = new pC(aJk.t1, function() {
		var pE = [];
		if (function(pE) {
				var aJK = new ow,
					su = (aJK.oz(L(202)), [L(204), L(206), L(207), L(205)]),
					value = a9.data.botDifficultyType;
				0 === a9.data.gameMode && (value = Math.min(value, 2), su.splice(2, 1));
				aJK.p7(new sq({
					su: su,
					value: value
				}, function(e0) {
					aJp(), a9.data.botDifficultyType = e0, 0 === a9.data.gameMode && 2 === e0 && (a9.data.botDifficultyType = 3), 3 !== a9.data.botDifficultyType || a9.data.botDifficultyData || (a9.data.botDifficultyData =
						new Uint8Array(a9.eV)), 2 !== a9.data.botDifficultyType || a9.data.botDifficultyTeam || (a9.data.botDifficultyTeam = new Uint8Array(9)), n.o(25)
				})), pE.push(aJK)
			}(pE), 0 === a9.data.botDifficultyType) aJu(pE, -1);
		else if (2 === a9.data.botDifficultyType)
			for (var a7 = 0; a7 < a9.data.teamPlayerCount.length; a7++) a9.data.teamPlayerCount[a7] && aJu(pE, a7);
		else 3 === a9.data.botDifficultyType && ! function(pE) {
			var aJK = new ow;
			aJK.oz("Data"), (aJm = new tG(0, 1, 0, 1)).tN(b6.z3.a2O(a9.data.botDifficultyData, 8)), aJK.pA(aJm), pE.push(aJK)
		}(pE);
		return pE
	}())
}

function aJv(data) {
	var aJ3, aJw, aJx, aJy, aJz, aK0, aK1, colors, aK2, aK3, aK4 = 0,
		aK5 = 0,
		aK6 = !1,
		aK7 = !1,
		aK8 = [1, 5, 60, 240, 1440, 10080, 43200];

	function aKa(kj, kk) {
		! function(kj, kk) {
			return aJw < kj && kj < aJw + aJy && aJx < kk && kk < aJx + aJz
		}(aK4 = kj, aK5 = kk) ? (aK6 && (bb.dc = !0), aK6 = !1) : (aK6 = !0, bb.dc = !0)
	}
	this.show = function() {
		aK7 = bf.dp.data[127].value, aJ3.show(), this.resize()
	}, this.qm = function() {
		aJ3.qm()
	}, this.resize = function() {
		aJ3.resize();
		var et = at.pP,
			t9 = aJ3.t6(),
			aKH = et * t9.t8,
			et = et * t9.qp;
		aK0 = b6.pJ.ry(.06), aK1 = b6.pJ.ry(.04), aJw = b6.pJ.ry(.06), aJx = et + aK0, aJy = at.a1 - aJw - aK1, aJz = aKH + et - aJx - aK1
	}, this.tA = function() {
		aJ3.tA(),
			function() {
				var a7, aKE, g1, ef, er, g = data.data,
					aKL = 1,
					aKM = .125,
					aKN = aK7 ? 65536 : 0;
				for (a7 = 0; a7 < g.length; a7++)
					for (aKE = g[a7].aKE, g1 = aKE.length, aKL = Math.max(g1, aKL), er = 0; er < g1; er++) aKM = Math.max(aKE[er], aKM), aKN = Math.min(aKE[er], aKN);
				var ly = aJx + aJz,
					wL = aJz / (aKM - aKN),
					wK = 1 / (aKL - 1);
				for (tB.lineWidth = bY.xI, a7 = 0; a7 < g.length; a7++) {
					for (aKE = g[a7].aKE, g1 = aKE.length, ef = aJw, tB.beginPath(), tB.moveTo(ef + aJy, ly - wL * (aKE[g1 - 1] - aKN)), er = g1 - 2; 0 <= er; er--) tB.lineTo(ef + wK * er * aJy, ly - wL * (aKE[er] - aKN));
					tB.strokeStyle = colors[a7], tB.stroke()
				}(function(aKN, aKM, ly, wL) {
					tB.font = b6.pJ.rF(0, .25 * aJw), b6.pJ.textBaseline(tB, 1), b6.pJ.textAlign(tB, 2), tB.fillStyle = colors[0];
					for (var ef = .92 * aJw, a7 = 0; a7 < 3; a7++) {
						var f0 = aKN + a7 * (aKM - aKN) / 2;
						tB.fillText((f0 / 1e3).toFixed(3), ef, ly - wL * (f0 - aKN))
					}
				})(aKN, aKM, ly, wL),
				function(aKL) {
					var eh = aJx + aJz + .15 * aK1;
					tB.font = b6.pJ.rF(0, Math.min(.4 * aK1, .028 * at.a1)), b6.pJ.textBaseline(tB, 0), b6.pJ.textAlign(tB, 2), tB.fillStyle = colors[0], tB.fillText(b6.a0h.a1R(aK2), aJw + aJy, eh), b6.pJ.textAlign(tB, 0), tB.fillText(b6.a0h.a1R(
						new Date(aK3.getTime() - 6e4 * (aKL - 1) * aK8[data.aKD])), aJw, eh)
				}(aKL),
				function(aKL, aKN, aKM) {
					if (aK6 && !(aKL < 2)) {
						for (var a6M, e0 = (aK4 - aJw) / aJy * (aKL - 1), kw = Math.floor(e0), kx = Math.floor(1 + e0), aKQ = e0 - kw, aKR = 1e5, aKS = -1, aKT = -1, aKU = aKM - (aKM - aKN) * (aK5 - aJx) / aJz, g = data.data, a7 = 0; a7 < g
							.length; a7++) {
							var aHE, aKE = g[a7].aKE;
							aKE.length <= kx || (aKE = aKE[kw] + aKQ * (aKE[kx] - aKE[kw]), (aHE = Math.abs(aKU - aKE)) < aKR && (aKR = aHE, aKS = a7, aKT = aKE))
						} - 1 !== aKS && (aKM = aJx + aJz - (aKT - aKN) / (aKM - aKN) * aJz, tB.lineWidth = .5 * bY.xI, tB.strokeStyle = colors[aKS], tB.beginPath(), tB.moveTo(aJw, aKM), tB.lineTo(aK4, aKM), tB.lineTo(aK4, aJx + aJz), tB
						.stroke(), tB.beginPath(), tB.arc(aK4, aKM, .1 * aJw, 0, 2 * Math.PI), tB.fillStyle = colors[aKS], tB.fill(), aKN = aJx + aJz + .15 * aK1, b6.pJ.textAlign(tB, 1), a6M = aKL - 2 < e0 ? (a6M = aK3.getTime() - 6e4 * aK8[
								data.aKD], new Date(a6M + (e0 - (aKL - 2)) * (aK2.getTime() - a6M))) : new Date(aK3.getTime() - 6e4 * (aKL - e0 - 1) * aK8[data.aKD]), aKL = b6.a0h.a1R(a6M), e0 = b6.pJ.measureText(aKL), a6M = bH.or(aK4, aJw +
								.5 * e0, aJw + aJy - .5 * e0), tB.fillStyle = b6.color.mP(70, 50, 20), tB.fillRect(a6M - .52 * e0, aJx + aJz, 1.04 * e0, .55 * aK1), tB.fillStyle = colors[0], tB.fillText(aKL, a6M, aKN), tB.font = b6.pJ.rF(0,
								.25 * aJw), b6.pJ.textBaseline(tB, 1), b6.pJ.textAlign(tB, 2), a6M = .92 * aJw, aKL = (aKT / 1e3).toFixed(3), e0 = b6.pJ.measureText(aKL), aKN = a6M - 1.04 * e0, tB.fillStyle = b6.color.mP(70, 50, 20), tB
							.fillRect(aKN, aKM - .1625 * aJw, aJw - aKN, .275 * aJw), tB.fillStyle = colors[aKS], tB.fillText(aKL, a6M, aKM))
					}
				}(aKL, aKN, aKM)
			}(), tB.lineWidth = bY.xI, tB.strokeStyle = b7.mX, tB.beginPath(), tB.moveTo(aJw, aJx), tB.lineTo(aJw, aJx + aJz), tB.lineTo(aJw + aJy, aJx + aJz), tB.stroke();
		var a7, fontSize = .5 * aK0,
			g = (tB.font = b6.pJ.rF(0, fontSize), b6.pJ.textBaseline(tB, 1), b6.pJ.textAlign(tB, 0), data.data),
			eY = g.length,
			eh = aJx - .5 * aK0,
			p0 = "";
		for (a7 = 0; a7 < eY; a7++) p0 += g[a7].name + "  ";
		p0 = p0.trim();
		var aKX = b6.pJ.measureText(p0),
			ef = .5 * (at.a1 - aKX);
		for (aKX > at.a1 && (ef = 0, tB.font = b6.pJ.rF(0, at.a1 / aKX * fontSize)), a7 = 0; a7 < eY; a7++) tB.fillStyle = colors[a7], tB.fillText(g[a7].name, ef, eh), ef += b6.pJ.measureText(g[a7].name + "  ")
	}, this.gm = function(kj, kk) {
		aKa(kj, kk)
	}, this.zr = function(kj, kk) {
		aKa(kj, kk)
	}, this.a0P = function(et) {
		2 === et && aJ3.t2[0].pc()
	};
	var a7, dk, a1P, k2, eb = data.data,
		eY = eb.length,
		max = 1;
	for (a7 = 0; a7 < eY; a7++) max = Math.max(max, eb[a7].aKE.length);
	for (a7 = 0; a7 < eY; a7++)
		for (; eb[a7].aKE.length < max;) eb[a7].aKE.unshift(0);
	dk = new Date, a1P = 6e4 * dk.getTimezoneOffset(), k2 = dk.getTime() - a1P, aK2 = new Date(k2), 6 === data.aKD ? function(dk, a1P) {
		var aKG = dk.getUTCFullYear(),
			dk = dk.getUTCMonth() + 1;
		aK3 = dk < 12 ? new Date(Date.UTC(aKG, dk) - a1P) : new Date(Date.UTC(aKG + 1, 0) - a1P)
	}(dk, a1P) : (a1P = 6e4 * aK8[data.aKD], aK3 = data.aKD <= 4 ? new Date(k2 + a1P - dk.getTime() % a1P) : new Date(k2 + a1P - (dk.getTime() + 2592e5) % a1P)), k2 = b6.color, colors = [b7.mX, k2.mP(255, 0, 0), k2.mP(0, 200, 0), k2.mP(80, 80,
		255), k2.mP(255, 255, 0), k2.mP(255, 0, 255), k2.mP(0, 255, 255), k2.mP(255, 140, 0), k2.mP(128, 128, 128), k2.mP(0, 255, 140)], aJ3 = new sv(L(209) + ", " + ["M1", "M5", "H1", "H4", "D1", "W1", "MN"][data.aKD] + ", " + b6.a0h.a1O(aK2), [
		new q("⬅️ " + L(22), function() {
			n.s.a9s()
		}), new q(L(210), function() {
			n.o(14)
		})
	], !1)
}

function aIl() {
	var aJ3, aJ4, pE;
	this.show = function() {
		aJ3.show(), this.resize()
	}, this.qm = function() {
		aJ3.qm()
	}, this.resize = function() {
		aJ3.resize(), aJ4.resize()
	}, this.a0P = function(et) {
		2 === et && aJ3.t2[0].pc()
	}, aJ3 = new sv(L(211), [new q("⬅️ " + L(22), function() {
		n.aJ1(13)
	})]), aJ4 = new pC(aJ3.t1, ((pE = []).push(function() {
		var aJK = new ow,
			aJQ = (aJK.oz(L(212)), aJK.p1(L(213)), new q(L(214), function() {
				bf.qw.qx(130, 0), n.s.aKf()
			}, 0, 0, 1)),
			q8 = new q9(bf.dp.data[126], 0, function() {
				aJQ.button.click()
			});
		return aJK.pA(q8), q8.e.placeholder = "a,b,c", q8.e.style.marginTop = "0.5em", aJK.pA(new qz([aJQ.button])), aJK
	}()), pE.push(function() {
		var aJK = new ow,
			aJQ = new q(L(214), function() {
				bf.qw.qx(130, 1), n.s.aKf()
			}, 0, 0, 1),
			aKg = new q9(bf.dp.data[129], 1, function() {
				aKg.e.focus()
			}),
			aKh = new q9(bf.dp.data[128], 1, function() {
				aJQ.button.click()
			});
		return aJK.oz(L(215)), aJK.pA(aKh), aKh.e.style.marginBottom = "0.5em", aJK.oz(L(216)), aJK.pA(aKg), aJK.pA(new qz([aJQ.button])), aJK
	}()), pE.push(function() {
		var aJK = new ow;
		return aJK.oz(L(217)), bf.dp.data[125].su = ["M1", "M5", "H1", "H4", "D1", "W1", "MN"], aJK.p7(new sq(bf.dp.data[125])), aJK
	}()), pE.push(function() {
		var aJK = new ow;
		return aJK.oz(L(218)), aJK.pA(new qt(bf.dp.data[127], L(219))), aJK
	}()), pE))
}

function aIk() {
	var aJ3, aKi, aJy, aKj, aKk, aKl, colors = [0, 0, 0],
		aKm = -1;

	function aKp(a7) {
		var aKq = aKi.eh + a7 * (bY.gap + aKl);
		tB.fillStyle = "rgb(" + (0 === a7 ? 150 : 2 === a7 ? 30 : 0) + "," + (1 === a7 ? 130 : 2 === a7 ? 30 : 0) + "," + (2 === a7 ? 220 : 0) + ")", tB.fillRect(aKj, aKq, colors[a7] * aKk, aKl), tB.strokeStyle = b7.mX, tB.strokeRect(aKj, aKq, aKk,
			aKl), tB.fillStyle = b7.mX, tB.font = b6.pJ.rF(0, .32 * aKl), b6.pJ.textBaseline(tB, 1), b6.pJ.textAlign(tB, 0), tB.fillText(L(0 === a7 ? 222 : 1 === a7 ? 223 : 224) + aKn(a7), aKj + bY.gap, aKq + .53 * aKl)
	}

	function aKn(a7, aKr) {
		return aKr = aKr || 256, bH.or(Math.floor(aKr * colors[a7]), 0, aKr - 1)
	}

	function a0L(kj, kk) {
		return !(kj < aKj || kk < aKi.eh || kj > aKi.ef + aKi.a1 || kk > aKi.eh + aKi.j7)
	}
	this.show = function() {
		var f0 = bf.dp.data[121].value;
		colors[0] = (f0 >> 12) / 63, colors[1] = (f0 >> 6 & 63) / 63, colors[2] = (63 & f0) / 63, aJ3.show(), this.resize()
	}, this.qm = function() {
		bf.qw.qx(121, (aKn(0, 64) << 12) + (aKn(1, 64) << 6) + aKn(2, 64)), aJ3.qm()
	}, this.resize = function() {
		aJ3.resize(), aKi.resize();
		var et = at.pP,
			t9 = aJ3.t6(),
			aKo = (aKi.eh = Math.max(aKi.eh, et * t9.qp + bY.gap), et * t9.t8 - 2 * bY.gap);
		aKi.j7 = Math.min(aKi.j7, aKo), aKi.a1 = 2 * aKi.j7, aKi.eh = et * t9.qp + .5 * (et * t9.t8 - aKi.j7), aKi.ef = .5 * (at.a1 - aKi.a1), aJy = .25 * aKi.a1, aKj = aKi.ef + aJy + bY.gap, aKk = aKi.a1 - aJy - bY.gap, aKl = (aKi.j7 - 2 * bY
			.gap) / 3
	}, this.tA = function() {
		var dz, rx, es;
		aJ3.tA(), tB.lineWidth = bY.xI, dz = aKn(0), rx = aKn(1), es = aKn(2), tB.fillStyle = "rgb(" + dz + "," + rx + "," + es + ")", tB.fillRect(aKi.ef, aKi.eh, aJy, aKi.j7), tB.strokeStyle = b7.mX, tB.strokeRect(aKi.ef, aKi.eh, aJy, aKi.j7),
			tB.fillStyle = dz + rx + es < 306 && rx < 150 ? b7.mX : b7.mO, b6.pJ.textBaseline(tB, 1), b6.pJ.textAlign(tB, 1), tB.font = b6.pJ.rF(0, .1 * aKi.j7), tB.rotate(-Math.PI / 2), tB.fillText(L(221), -aKi.eh - .5 * aKi.j7, aKi.ef + .5 *
				aJy), tB.setTransform(1, 0, 0, 1, 0, 0), aKp(0), aKp(1), aKp(2)
	}, this.gm = function(kj, kk) {
		a0L(kj, kk) && (aKm = bH.or(Math.floor((kk - aKi.eh) / (aKl + .75 * bY.gap)), 0, 2), colors[aKm] = bH.or((kj - aKj) / aKk, 0, 1), bb.dc = !0)
	}, this.zr = function(kj) {
		-1 !== aKm && (colors[aKm] = bH.or((kj - aKj) / aKk, 0, 1), bb.dc = !0)
	}, this.zu = function(kj, kk, deltaY) {
		a0L(kj, kk) && (kj = bH.or(Math.floor((kk - aKi.eh) / (aKl + .75 * bY.gap)), 0, 2), colors[kj] = bH.or(colors[kj] + (1 - 2 * (0 < deltaY)) / 256, 0, 1), bb.dc = !0)
	}, this.a0F = function() {
		0 <= aKm && (aKm = -1, bb.dc = !0)
	}, this.a0P = function(et) {
		2 === et && aJ3.t2[0].pc()
	}, aJ3 = new sv(L(220), [new q("⬅️ " + L(22), function() {
		n.s.a9s()
	})], !1), aKi = new pw([.5, .25], [.5, .5], 1)
}

function aIs() {
	var aJk, aJl, aJm, pu;

	function aJn() {
		aJp(), 1 !== a9.data.colorsType && (a9.data.colorsData = null), n.aJ2()[19] = null, n.ze()
	}

	function aKs() {
		aJp(), n.o(21)
	}

	function aJp() {
		1 === a9.data.gameMode ? a9.a2f.a2j() : 0 === a9.data.gameMode && 1 === a9.data.colorsType && b6.pT.a12(aJm.tO(), a9.data.colorsData, 262143)
	}
	this.show = function() {
		aJk.show(), this.resize()
	}, this.qm = function() {
		aJk.qm()
	}, this.resize = function() {
		aJk.resize(), aJl.resize()
	}, this.a0P = function(et) {
		2 === et && aJk.t2[0].pc()
	}, pu = [new q("⬅️ " + L(22), aJn)], 1 === a9.data.gameMode && pu.push(new q(L(225), aKs, 1, 1)), aJk = new sv(L(226), pu), aJl = new pC(aJk.t1, (function(pE) {
		var aJK = new ow;
		aJK.oz(L(202)), 0 === a9.data.gameMode && (aJK.p7(new sq({
			su: [L(227), L(205)],
			value: a9.data.colorsType
		}, function(e0) {
			aJp(), a9.data.colorsType = e0, 1 !== a9.data.colorsType || a9.data.colorsData && a9.data.colorsData.length === a9.eV || (a9.data.colorsData = new Uint32Array(a9.eV)), n.o(21)
		})), aJK.pA(new r9));
		aJK.pA(new qt({
			value: a9.data.selectableColor
		}, L(228), function(value) {
			a9.data.selectableColor = value
		})), pE.push(aJK)
	}(pu = []), 0 === a9.data.gameMode ? 1 === a9.data.colorsType && function(pE) {
		var aJK = new ow;
		aJK.oz("Data"), (aJm = new tG(0, 1, 0, 1)).tN(b6.z3.a2O(a9.data.colorsData, 1)), aJK.pA(aJm), pE.push(aJK)
	}(pu) : (a9.a2f.a2j(), pu.push(function() {
		var aJK = new ow;
		aJK.oz(L(208));
		for (var a7 = 0; a7 < bc.yc.length; a7++) {
			var k2 = (a7 + 1) % bc.yc.length,
				e = aJK.p5((0 == k2 ? "" : "Team ") + bc.yc[k2]);
			a7 && (e.style.marginTop = "0.5em"), aJK.pA(new q9({
				e0: -1,
				value: a9.data.teamPlayerCount[k2]
			}, 1, 0, function(e) {
				aJk.t2[1].pf(0);
				var playerCount = bH.or(Math.floor(e.target.value), 0, 512);
				e.target.value = playerCount, a9.data.teamPlayerCount[e.target.aKu] = playerCount
			})).e.aKu = k2
		}
		return aJK
	}())), pu))
}

function re(id, a23, aKv) {
	var aJ3, aKw;

	function aL0() {
		aKw.pF.innerHTML += "<br>" + L(231)
	}

	function aKz() {
		b9.a3(48), b9.a4(24, Math.floor(bH.pow(24) * Math.random())), b9.a4(24, Math.floor(bH.pow(24) * Math.random())), bD.dU(b9.a8), bf.qw.qx(110, bB.rg.rh(bB.rg.ri(8))), aw.aJO.aLE()
	}
	this.aKx = !0, this.aKy = id, this.show = function() {
		aJ3.show(), this.resize(), 15 === id ? (aw.s.aC2(0, id) ? aKz : aL0)() : 16 === id ? aw.s.aC2(0, id) ? aw.a9p.aL1(2) : aL0() : 17 === id ? aw.s.aC2(0, id) ? aw.a9p.aL1(3) : aL0() : 18 === id ? (aw.s.close(0, 3253), aw.s.aC2(0, id),
		aL0()) : 21 === id ? aw.s.aC2(0, id) ? aw.aL2.aL3(a23.rt, a23.ru, a23.rv) : aL0() : 22 === id ? aw.s.aC2(0, id) ? aw.aL2.aL4(a23.rt, a23.aL5, a23.aL6) : aL0() : 23 === id ? aw.s.aC2(0, id) ? aw.aL2.aL7(a23.aKD, a23.yz) : aL0() : 24 ===
			id ? aw.s.aC2(0, id) ? aw.aL2.aL8(a23.aKD, a23.ru, a23.rv) : aL0() : 25 === id ? aw.s.aC2(0, id) ? aw.aJO.aJZ(a23) : aL0() : 28 === id ? aw.s.aC2(0, id) ? aw.aL2.aL9(a23.rt, a23.aL5, a23.aL6) : aL0() : 29 === id && (aw.s.aC2(0, id) ?
				aw.aJO.aLA(a23) : aL0())
	}, this.aLB = function() {
		15 === id ? aKz() : 16 === id ? aw.a9p.aL1(2) : 17 === id ? aw.a9p.aL1(3) : 18 === id ? n.o(8, this.aIb, new re(16)) : 21 === id ? aw.aL2.aL3(a23.rt, a23.ru, a23.rv) : 22 === id ? aw.aL2.aL4(a23.rt, a23.aL5, a23.aL6) : 23 === id ? aw.aL2
			.aL7(a23.aKD, a23.yz) : 24 === id ? aw.aL2.aL8(a23.aKD, a23.ru, a23.rv) : 25 === id ? aw.aJO.aJZ(a23) : 28 === id ? aw.aL2.aL9(a23.rt, a23.aL5, a23.aL6) : 29 === id ? aw.aJO.aLA(a23) : 1e3 === id && (this.aKy = id = 25, aw.aJO.aJZ(
				a23))
	}, this.aLC = function(code, bo, data) {
		!bo && code !== id || (16 === code ? n.o(7, this.aIb) : 17 === code ? (aw.s.close(0, 3252), bf.s.tw(0), bf.dp.data[117].su && 0 < bf.dp.data[117].su.length ? (bo = bf.s.tx(0), bf.qw.qx(105, bo.rb), bf.qw.qx(106, bo.password), n.o(8, this
			.aIb, new re(16))) : (bf.qw.qx(105, ""), n.s.a9s())) : 21 === code ? n.o(10, this.aIb, new aLD(data)) : 23 === code ? n.o(13, 0, new aJv({
			data: data,
			aKD: a23.aKD
		})) : 25 === code && (n.s.aIm.rb = a23.rb, n.o(15, this.aIb)))
	}, this.qm = function() {
		aJ3.qm()
	}, this.resize = function() {
		aJ3.resize(), aKw.resize()
	}, this.a0P = function(et) {
		2 === et && aJ3.t2[0].pc()
	}, aJ3 = new sv(L(229), [new q("⬅️ " + L(22), function() {
		aKv ? n.o(29) : n.s.a9s()
	})]), aKw = new qy(aJ3.t1, L(230))
}

function aIq() {
	var aJk, aJl, pE;

	function aLH() {
		var g1;
		1 === a9.data.gameMode ? (a9.data.teamPlayerCount || (a9.data.teamPlayerCount = new Uint16Array([0, 1, 1, 0, 0, 0, 0, 0, 0]), a9.a2f.a2j()), g1 = b6.pT.a0w(a9.data.teamPlayerCount, 0), a9.data.numberTeams = g1) : (2 === a9.data
			.botDifficultyType && (a9.data.botDifficultyType = 0), 1 === a9.data.spawningType && (a9.data.spawningType = 0))
	}

	function aJn() {
		1 !== a9.data.gameMode && (a9.data.teamPlayerCount = null), aLJ(), a9.data.canvas = null, n.o(5, 5)
	}

	function aLJ() {
		b5.oY.dU(), bf.qw.qx(156, b5.a2v.xk())
	}

	function aLF() {
		a9.data.isReplay = 0, aLJ(), a9.a2f.a35(), aW.aCE(), a9.a2f.a32(), a9.data.canvas = 2 === a9.data.mapType ? bO.ut : null, a9.a2i(), a9.a2h = 1
	}

	function aLX() {
		aLH();
		for (var g = [aLM(), aLN(), aLO()], a7 = 3; a7 < 6; a7++) aJl.pF.removeChild(aJl.pG[a7].oy), aJl.pG[a7] = g[a7 - 3], aJl.pF.appendChild(aJl.pG[a7].oy);
		aJl.resize()
	}

	function aLM() {
		var aLY, aJK = new ow;
		return aJK.oz(L(226)), aLY = 0 === a9.data.gameMode ? [L(227), L(205)][a9.data.colorsType] : a9.data.numberTeams + " Team" + (1 === a9.data.numberTeams ? "" : "s"), aJK.p5(aLY), aJK.pA(new qz([new q(L(235), function() {
			n.o(21)
		}).button])), aJK
	}

	function aLN() {
		var aJK = new ow,
			g = (aJK.oz(L(47)), [L(204) + ": " + aA.jr[a9.data.botDifficultyValue], L(206), L(207), L(205)]);
		return aJK.p5(g[a9.data.botDifficultyType]), aJK.pA(new qz([new q(L(235), function() {
			n.o(25)
		}).button])), aJK
	}

	function aLO() {
		var aJK = new ow,
			g = (aJK.oz("Spawning"), [L(227), L(237), L(205)]);
		return aJK.p5(g[a9.data.spawningType]), aJK.pA(new qz([new q(L(235), function() {
			n.o(24)
		}).button])), aJK
	}
	this.show = function() {
		aJk.show(), this.resize(), aJk.t1.scrollTop = n.s.aEA[0]
	}, this.qm = function() {
		n.s.aEA[0] = aJk.t1.scrollTop, aJk.qm()
	}, this.resize = function() {
		aJk.resize(), aJl.resize()
	}, this.a0P = function(et) {
		2 === et && aJk.t2[0].pc()
	}, aJk = new sv("🔧 " + L(232), [new q("⬅️ " + L(22), aJn), new q(L(233), aLF)]), aLH(), a9.data.canvas || (2 === a9.data.mapType ? a9.data.canvas = bO.ut : 1 === a9.data.mapType ? a9.data.canvas = bO.aGe(bO.a33(a9.data), 0).ut : (a9.data
		.mapType = 0, a9.data.passableWater = a9.data.passableMountains = 1, a9.data.canvas = bO.aGe(bO.a33(a9.data), a9.data.mapSeed).ut)), aJl = new pC(aJk.t1, (function(pE) {
		var aJK = new ow,
			a19 = (aJK.oz(L(234)), a9.data.canvas);
		a19.style.width = "100%", aJK.pA({
			e: a19
		}), aJK.pA(new qz([new q(L(235), function() {
			n.o(20)
		}).button])), pE.push(aJK)
	}(pE = []), function(pE) {
		var aJK = new ow;
		aJK.oz(L(208)), aJK.pA(new q9({
			e0: -1,
			value: a9.data.playerCount
		}, 1, 0, function(e) {
			var playerCount = bH.or(Math.floor(e.target.value), 1, 512);
			e.target.value = a9.data.playerCount = playerCount, 1 === a9.data.gameMode && (e = b6.pT.a0w(a9.data.teamPlayerCount, 0), a9.a2f.a2j(), b6.pT.a0w(a9.data.teamPlayerCount, 0) !== e) && aLX()
		})), pE.push(aJK)
	}(pE), function(pE) {
		var aJK = new ow;
		aJK.oz(L(236)), aJK.p7(new sq({
			su: ["Battle Royale", "Teams"],
			value: a9.data.gameMode
		}, function(e0) {
			a9.data.gameMode !== e0 && (a9.data.gameMode = e0, aLX())
		})), pE.push(aJK)
	}(pE), pE.push(aLM()), pE.push(aLN()), pE.push(aLO()), function(pE) {
		var aJK = new ow,
			g = (aJK.oz(L(238)), [L(239), L(240), L(205)]);
		aJK.p5(g[a9.data.playerNamesType]), aJK.pA(new qz([new q(L(235), function() {
			n.o(23)
		}).button])), pE.push(aJK)
	}(pE), function(pE) {
		var aJK = new ow,
			g = (aJK.oz(L(201)), [L(203), L(204) + ": " + a9.data.aIncomeValue, L(205)]);
		aJK.p5(g[a9.data.aIncomeType]), aJK.pA(new qz([new q(L(235), function() {
			n.o(22)
		}).button])), pE.push(aJK)
	}(pE), function(pE) {
		var aJK = new ow,
			g = (aJK.oz(L(241)), [L(203), L(204) + ": " + a9.data.tIncomeValue, L(205)]);
		aJK.p5(g[a9.data.tIncomeType]), aJK.pA(new qz([new q(L(235), function() {
			n.o(26)
		}).button])), pE.push(aJK)
	}(pE), function(pE) {
		var aJK = new ow,
			g = (aJK.oz(L(242)), [L(203), L(204) + ": " + a9.data.iIncomeValue, L(205)]);
		aJK.p5(g[a9.data.iIncomeType]), aJK.pA(new qz([new q(L(235), function() {
			n.o(27)
		}).button])), pE.push(aJK)
	}(pE), function(pE) {
		var aJK = new ow,
			g = (aJK.oz(L(243)), [L(203), L(204) + ": " + a9.data.sResourcesValue, L(205)]);
		aJK.p5(g[a9.data.sResourcesType]), aJK.pA(new qz([new q(L(235), function() {
			n.o(28)
		}).button])), pE.push(aJK)
	}(pE), function(pE) {
		var aJK = new ow;
		aJK.oz(L(244)), aJK.pA(new qz([new q(L(245), function() {
			n.r(), a9.a2f.a36(), n.s.aEA[0] = 0, n.o(19)
		}).button])), aJK.pA(new qz([new q(L(246), function() {
			bj.aDz()
		}).button])), aJK.pA(new qz([new q(L(247), function() {
			return bj.aE1(), !0
		}).button])), pE.push(aJK)
	}(pE), pE))
}

function aIy() {
	var aJk, aJl, aJm, pE;

	function aJn() {
		aJp(), 2 !== a9.data.iIncomeType && (a9.data.iIncomeData = null), n.aJ2()[19] = null, n.ze()
	}

	function aJp() {
		2 === a9.data.iIncomeType && b6.pT.a12(aJm.tO(), a9.data.iIncomeData, 255)
	}
	this.show = function() {
		aJk.show(), this.resize()
	}, this.qm = function() {
		aJk.qm()
	}, this.resize = function() {
		aJk.resize(), aJl.resize()
	}, this.a0P = function(et) {
		2 === et && aJk.t2[0].pc()
	}, aJk = new sv(L(242), [new q("⬅️ " + L(22), aJn)]), aJl = new pC(aJk.t1, (function(pE) {
		var aJK = new ow;
		aJK.oz(L(202)), aJK.p7(new sq({
			su: [L(203), L(204), L(205)],
			value: a9.data.iIncomeType
		}, function(e0) {
			aJp(), 2 !== e0 || a9.data.iIncomeData || (a9.data.iIncomeData = new Uint8Array(a9.eV), a9.data.iIncomeData.fill(32)), a9.data.iIncomeType = e0, n.o(27)
		})), pE.push(aJK)
	}(pE = []), function(pE) {
		var aJK;
		1 === a9.data.iIncomeType && ((aJK = new ow).oz("Value"), aJK.pA(new q9({
			e0: -1,
			value: a9.data.iIncomeValue
		}, 1, 0, function(e) {
			var value = bH.or(Math.floor(e.target.value), 0, 255);
			e.target.value = a9.data.iIncomeValue = value
		})), pE.push(aJK))
	}(pE), function(pE) {
		var aJK;
		2 === a9.data.iIncomeType && ((aJK = new ow).oz("Data"), (aJm = new tG(0, 1, 0, 1)).tN(b6.z3.a2O(a9.data.iIncomeData, 4)), aJK.pA(aJm), pE.push(aJK))
	}(pE), pE))
}

function aIg() {
	var aLZ, aLa, aKi, q8, aLb;
	this.aCq = new rm, aKi = new pw([.45, .27], [.5, .5], 2 / 3), aLa = [new q("⚔️<br>" + L(248), function() {
			aLc(0)
		}, b7.my), new q("🗡️<br>" + L(232), function() {
			aLc(1)
		}, b7.nB), new q("🔑<br>" + L(249), function() {
			aLc(2)
		}, b7.nR), new q("☰<br>" + L(250), function() {
			aLc(3)
		}, b7.mj), new q("", function() {
			n.o(12)
		}, b7.mT, !1),
		new q("FX Client settings", function() {
			__fx.WindowManager.openWindow("settings");
		}, "rgba(0, 0, 20, 0.5)"),
		new q("Join/Create custom lobby", function() {
			__fx.customLobby.showJoinPrompt();
		}, "rgba(20, 9, 77, 0.5)")
	], q8 = new q9(bf.dp.data[122]);
	for (var a7 = 0; a7 < aLa.length; a7++) aLa[a7].button.style.position = "absolute";

	function aLc(e0) {
		u.v.setState(10), aX.s1() || aX.aCg(), 0 === e0 ? n.s.aLd() : 1 === e0 ? (b5.aEK.ue(bf.dp.data[156].value, 1) || a9.a2f.a36(), n.o(19)) : 2 === e0 ? 0 !== u.id || bf.dp.data[140].value ? n.o(8, n.rd, new re(16)) : n.s.aLe(n.rd, 16) : 3 ===
			e0 && n.o(1)
	}
	q8.e.style.position = "absolute", q8.e.style.textAlign = "center", q8.e.placeholder = L(251), this.show = function() {
		aW.setState(0), u.v.setState(12), this.aCq.show(), aLa[4].pf(b6.color.a1G(bf.dp.data[121].value)), this.resize(), document.body.appendChild(q8.e);
		for (var a7 = 0; a7 < aLa.length; a7++) document.body.appendChild(aLa[a7].button);
		1 !== u.id || u.f1 < 5 || (aLb && bb.ln > aLb + 144e5 ? u.th.setState(14) : aLb = bb.ln)
	}, this.qm = function() {
		this.aCq.qm(), document.body.removeChild(q8.e);
		for (var a7 = 0; a7 < aLa.length; a7++) document.body.removeChild(aLa[a7].button)
	}, this.resize = function() {
		this.aCq.resize(), aKi.resize();
		var gap = .5 * bY.gap,
			sV = 10 / 99 * .84 * aKi.a1,
			aLh = .16 * aKi.j7,
			a6t = .19 * aKi.a1,
			ef = aKi.ef + a6t,
			sV = aKi.eh + sV + 3 * gap,
			a1 = .5 * (aKi.a1 - gap) - a6t,
			a6t = aKi.a1 - 2 * a6t - aLh - gap,
			a6t = (b6.pJ.rz(q8.e, ef, sV, a6t, aLh), b6.pJ.rz(aLa[4].button, ef + a6t + gap, sV, aLh, aLh), .5 * (aKi.eh + aKi.j7 - (sV += aLh + gap) - gap));
		b6.pJ.rz(aLa[0].button, ef, sV, a1, a6t), b6.pJ.rz(aLa[1].button, ef + a1 + gap, sV, a1, a6t), b6.pJ.rz(aLa[2].button, ef, sV + a6t + gap, a1, a6t), b6.pJ.rz(aLa[3].button, ef + a1 + gap, sV + a6t + gap, a1, a6t);
		b6.pJ.rz(aLa[5].button, ef, sV + a6t * 2 + gap * 2, a1 * 2 + gap, a6t / 3);
		b6.pJ.rz(aLa[6].button, ef, sV + a6t * 2.33 + gap * 3, a1 * 2 + gap, a6t / 3);
		for (var a7 = 0; a7 < aLa.length; a7++) aLa[a7].button.style.font = b6.pJ.rF(0, b6.pJ.a1W(.065 * aKi.j7)), b6.pJ.pV(aLa[a7].button, 5);
		q8.e.style.font = b6.pJ.rF(0, b6.pJ.a1W(.08 * aKi.j7)), b6.pJ.pV(q8.e, 5)
	}, this.tA = function() {
		if (aW.aCI(), aP.tA(), aK.tA(), bU.tA(), aX.s1()) {
			if (__fx.settings.displayWinCounter) {
				const size = Math.floor(aKi.a1 * 0.03);
				tB.font = b6.pJ.rF(1, size);
				tB.fillStyle = "#ffffff";
				const text = "Win count: " + __fx.wins.count;
				const textLength = tB.measureText(text).width;
				tB.textAlign = "left";
				tB.textBaseline = "middle";
				tB.fillText(text, tB.canvas.width - textLength - size / 2, size);
			};
			tB.imageSmoothingEnabled = !1;
			var et = aX.aCL("territorial.io"),
				m9 = .84 * aKi.a1 / et.width;
			tB.setTransform(m9, 0, 0, m9, aKi.ef + .08 * aKi.a1, aKi.eh), aLZ = aLZ || b6.a0d.a21(et, b6.a0d.a27, [0, 0, 0]);
			for (var ef = -1; ef <= 1; ef += 2)
				for (var eh = -1; eh <= 1; eh += 2) tB.drawImage(aLZ, ef, eh);
			tB.drawImage(et, 0, 0), tB.imageSmoothingEnabled = !0;
			var hQ = aX.aCL("logo"),
				aLj = .6666 * m9 * et.height / hQ.height,
				mA = .5 * at.a1,
				mB = aKi.eh + .5 * m9 * et.height - .5 * aLj * hQ.height;
			tB.setTransform(aLj, 0, 0, aLj, mA - .6 * m9 * et.width, mB), tB.drawImage(hQ, 0, 0), tB.setTransform(aLj, 0, 0, aLj, mA + .6 * m9 * et.width - aLj * hQ.width, mB), tB.drawImage(hQ, 0, 0), tB.setTransform(1, 0, 0, 1, 0, 0), tB
				.imageSmoothingEnabled = !0
		}
	}
}

function aIn() {
	var aJ3, aLk, aLl, sw;

	function rs(a7) {
		n.o(8, n.rd, new re(21, {
			rt: a7,
			ru: 0,
			rv: 10
		}))
	}
	this.show = function() {
		aJ3.show(), this.resize()
	}, this.qm = function() {
		aJ3.qm()
	}, this.resize = function() {
		aJ3.resize(), aLk.resize()
	}, this.a0P = function(et) {
		2 === et && aJ3.t2[0].pc()
	}, aLl = [new q(L(252), function() {
		rs(1)
	}, 0, 0, 1), new q(L(253), function() {
		rs(2)
	}, 0, 0, 1), new q(L(254), function() {
		rs(0)
	}, 0, 0, 1), new q(L(255), function() {
		rs(3)
	}, 0, 0, 1)], sw = [new q("⬅️ " + L(22), function() {
		n.ze()
	})], aJ3 = new sv(L(256), sw), aLk = new pt(aLl, aJ3.t1)
}

function aAB(title, p6, aLm) {
	var aJ3, aKw;
	this.show = function() {
		aJ3.show(), this.resize()
	}, this.qm = function() {
		aJ3.qm()
	}, this.resize = function() {
		aJ3.resize(), aKw.resize()
	}, this.a0P = function(et) {
		2 === et && aJ3.t2[0].pc()
	}, aLm = aLm || [new q("⬅️ " + L(22), function() {
		n.ze()
	}, b7.n8)], aJ3 = new sv(title, aLm), aKw = new qy(aJ3.t1, p6), b6.pJ.textAlign(aJ3.t1.style, 1)
}

function aLD(data) {
	var aJ3, aLn, et, rU;

	function aLo(hU) {
		var eY = data.data.length;
		if (eY) {
			for (var ru, max = min = parseInt(data.data[0][0]), a7 = 1; a7 < eY; a7++) var aLv = parseInt(data.data[a7][0]),
				min = Math.min(aLv, min),
				max = Math.max(aLv, max);
			ru = hU < 0 ? min + hU : max + 1, n.o(8, n.aCp().aIb, new re(21, {
				rt: data.rt,
				ru: ru,
				rv: ru + Math.abs(hU)
			}))
		}
	}
	this.show = function() {
			aJ3.show(), this.resize()
		}, this.qm = function() {
			aJ3.qm()
		}, this.resize = function() {
			aJ3.resize(), aLn.resize()
		}, this.a0P = function(et) {
			2 === et && aJ3.t2[0].pc()
		}, et = data.data.length ? 0 : 1, et = [new q("⬅️ " + L(22), function() {
			n.ze()
		}), new q(L(257), function() {
			aLo(-10)
		}, et, 0, 1), new q(L(258), function() {
			aLo(10)
		}, et, 0, 1), new q(L(210), function() {
			n.o(11, 10, new aLp({
				rt: data.rt
			}))
		})], rU = [L(259), L(260), L(261), L(262), L(263), L(264), L(265), L(266), L(267)], aJ3 = new sv(rU[data.rt], et),
		function() {
			var a7, eb = {
					rO: []
				},
				rO = eb.rO,
				aLr = data.data,
				eY = aLr.length,
				m9 = [.1, .001, .001, 1, 100, 1, .01, 1, 100][data.rt],
				a2B = [1, 3, 3, 0, 0, 0, 2, 0, 0][data.rt],
				rU = [
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
			if (eb.rU = rU[data.rt], eb.rY = [
					[25, 40, 35],
					[15, 25, 25, 35],
					[25, 40, 35],
					[25, 40, 35],
					[12, 16, 30, 30, 12],
					[12, 16, 30, 30, 12],
					[12, 16, 30, 30, 12],
					[12, 16, 30, 30, 12],
					[12, 16, 30, 30, 12]
				][data.rt], 0 === data.rt)
				for (a7 = 0; a7 < eY; a7++) rO.push([{
					f0: aLr[a7][0] + 1 + ".",
					dk: 0
				}, {
					f0: aLr[a7][1],
					dk: 1,
					rb: aLr[a7][4],
					rc: aLr[a7][3]
				}, {
					f0: (m9 * aLr[a7][2]).toFixed(a2B),
					dk: 0
				}]);
			else if (1 === data.rt)
				for (a7 = 0; a7 < eY; a7++) rO.push([{
					f0: aLr[a7][0] + 1 + ".",
					dk: 0
				}, {
					f0: aLr[a7][1],
					dk: 0
				}, {
					f0: (m9 * aLr[a7][2]).toFixed(a2B),
					dk: 0
				}, {
					f0: aLr[a7][3],
					dk: 1,
					rb: aLr[a7][5],
					rc: aLr[a7][4]
				}]);
			else if (2 === data.rt || 3 === data.rt)
				for (a7 = 0; a7 < eY; a7++) rO.push([{
					f0: aLr[a7][0] + 1 + ".",
					dk: 0
				}, {
					f0: aLr[a7][1],
					dk: 1,
					rb: aLr[a7][4],
					rc: aLr[a7][3]
				}, {
					f0: (m9 * aLr[a7][2]).toFixed(a2B),
					dk: 0
				}]);
			else if (4 === data.rt || 5 === data.rt || 6 === data.rt || 7 === data.rt || 8 === data.rt)
				for (a7 = 0; a7 < eY; a7++) {
					var aLu = aLr[a7][5];
					4 === data.rt || 8 === data.rt ? "100%" === (aLu = (aLu % 64 * 100 / (aLu >> 6)).toFixed(0) + "%") && (4 === data.rt ? aLu += " (" + L(285) + ")" : aLu += " (" + L(286) + ")") : 5 === data.rt ? 32768 <= aLu && (aLu = -(aLu -
						32768)) : aLu = (m9 * aLu).toFixed(a2B), rO.push([{
						f0: "" + aLr[a7][0],
						dk: 0
					}, {
						f0: "" + aLr[a7][6],
						dk: 0
					}, {
						f0: aLr[a7][7],
						dk: 1,
						rb: aLr[a7][1],
						rc: aLr[a7][2]
					}, {
						f0: aLr[a7][8],
						dk: 1,
						rb: aLr[a7][3],
						rc: aLr[a7][4]
					}, {
						f0: "" + aLu,
						dk: 0
					}])
				}
			aLn = new rN(aJ3.t1, eb)
		}()
}

function aLp(a23) {
	var aJ3, aJ4, pE;
	this.show = function() {
		aJ3.show(), this.resize()
	}, this.qm = function() {
		aJ3.qm()
	}, this.resize = function() {
		aJ3.resize(), aJ4.resize()
	}, this.a0P = function(et) {
		2 === et && aJ3.t2[0].pc()
	}, aJ3 = new sv(L(287), [new q("⬅️ " + L(22), function() {
		n.aJ1(10)
	})]), aJ4 = new pC(aJ3.t1, ((pE = []).push(function() {
		var aJQ, aJK = new ow,
			aKg = new q9(bf.dp.data[132], 1, function() {
				aJQ.button.click()
			}),
			aKh = new q9(bf.dp.data[131], 1, function() {
				aKg.e.focus()
			});
		aJK.oz(L(215)), aJK.pA(aKh), aKh.e.style.marginBottom = "0.8em", aJK.oz(L(216)), aJK.pA(aKg);
		return aJQ = new q(L(214), function() {
			ru = Math.floor(aKh.e.value), rv = Math.floor(aKg.e.value);
			var rv, ru = {
				a0u: Math.min(ru, rv),
				aIC: Math.max(ru, rv)
			};
			n.o(8, n.aBA(10).aIb, new re(21, {
				rt: a23.rt,
				ru: ru.a0u,
				rv: ru.aIC
			}))
		}, 0, 0, 1), aJK.pA(new qz([aJQ.button])), aJK
	}()), pE.push(function() {
		var aJQ, aJK = new ow,
			aKg = new q9(bf.dp.data[134], 1, function() {
				aJQ.button.click()
			}),
			aKh = new q9(bf.dp.data[133], 0, function() {
				aKg.e.focus()
			});
		return aJK.oz(1 === a23.rt ? L(288) : L(289)), aJK.pA(aKh), aKh.e.style.marginBottom = "0.8em", aJK.oz(L(290)), aJK.pA(aKg), aJQ = new q(L(214), function() {
			var aL5 = aKh.e.value.slice(0, 20),
				aL6 = Math.abs(Math.floor(aKg.e.value));
			n.o(8, n.aBA(10).aIb, new re(22, {
				rt: a23.rt,
				aL5: aL5,
				aL6: aL6
			}))
		}, 0, 0, 1), aJK.pA(new qz([aJQ.button])), aJK
	}()), pE.push(function() {
		var aJQ, aJK = new ow,
			aKg = new q9(bf.dp.data[152], 1, function() {
				aJQ.button.click()
			}),
			aKh = new q9(bf.dp.data[151], 0, function() {
				aKg.e.focus()
			});
		return aJK.oz(L(291)), aJK.pA(aKh), aKh.e.style.marginBottom = "0.8em", aJK.oz(L(290)), aJK.pA(aKg), aJQ = new q(L(214), function() {
			var aL5 = aKh.e.value.slice(0, 5),
				aL6 = Math.abs(Math.floor(aKg.e.value));
			n.o(8, n.aBA(10).aIb, new re(28, {
				rt: a23.rt,
				aL5: aL5,
				aL6: aL6
			}))
		}, 0, 0, 1), aJK.pA(new qz([aJQ.button])), aJK
	}()), pE))
}

function aJ0() {
	var aLz, s4, aM2, s3, s6, aM0 = [new Array(4), [], new Array(2), new Array(2)],
		aM1 = new Array(4),
		aM3 = [L(46), L(292), L(293), L(294)];

	function aM7() {
		var a4z = aLz.sH.q8.e.value.slice(0, 127);
		return a4z.length < 1 || (aLz.sH.q8.e.value = "", aw.aBY.aBZ(3, a4z)), 1
	}

	function aM6(aM9) {
		bk.s.qN[3] = 1 - bk.s.qN[3], aM8(3, 1, bk.s.qN[3]), aM9 && aw.aBY.aBZ(4)
	}

	function aM4(er, es) {
		bk.s.qN[er] !== es && (0 === er && bk.s.qN[3] && aM6(0), aM8(er, bk.s.qN[er], 0), aM8(er, es, 1), bk.s.qN[er] = es, 0 === er ? (aw.aBY.aBZ(2, es), bk.s.qN[2] ? (aLz.sI.lH(), aLz.sH.qK(1)) : aLz.sH.qK(0), n.aCp().aBD(), n.aCp().aBC()) : 2 ===
			er && (0 === es ? (aw.aBY.aBZ(0), aLz.sH.lH(), aLz.sQ()) : (aw.aBY.aBZ(1), aLz.sI.lH(), aLz.sR())))
	}

	function aM8(er, es, color) {
		aLz.sK[er].pu[es].pf(color ? b7.mu : b7.nX)
	}

	function aMB(aAb) {
		return aAb < 7 ? aAb + 2 + " " + L(301) : 7 === aAb || 10 === aAb ? L(292) + " (Full-Sending: " + L(7 === aAb ? 302 : 303) + ")" : 8 === aAb ? "1v1" : L(304)
	}

	function aMC(f0) {
		var a53 = bH.dl(f0, 60),
			f0 = f0 % 60;
		return (a53 < 10 ? "0" : "") + a53 + ":" + (f0 < 10 ? "0" : "") + f0
	}
	this.aBB = function() {
		aLz.sI.lH()
	}, this.aBD = function() {
		var aMA = bk.s.qN[0],
			aMA = bk.s.qP[aMA];
		bO.a3(aMA.eE, aMA.mapSeed), s4.pu[0].button.textContent = L(234) + ": " + bO.uj.uk[aMA.eE].name, s4.pu[1].button.textContent = L(236, 0, "Mode") + ": " + aMB(aMA.aAb), s4.pu[2].button.textContent = L(298) + ": " + bO.uj.uk[aMA.aBa].name,
			s4.pu[3].button.textContent = L(299, 0, "Next Mode") + ": " + aMB(aMA.aBb), s4.pu[4].button.textContent = L(300) + ": " + aMC(aMA.aBF), s4.resize()
	}, this.aBC = function() {
		var aMA = bk.s.qN[0],
			qO = bk.s.qP[aMA];
		aLz.sO(qO.sP);
		for (var a7 = 0; a7 < bk.sb.sc.length; a7++) aM0[0][a7].qJ.textContent = "" + bk.sb.sc[a7].length;
		var sb = bk.sb.sc[aMA],
			aMD = sb.length,
			aME = bk.sb.sd[aMA];
		aM0[2][1].qJ.textContent = "" + aMD, aM0[3][1].qJ.textContent = "" + aME, s4.pu[4].button.textContent = L(300) + ": " + aMC(qO.aBF);
		for (a7 = 0; a7 < 4; a7++) {
			var aMF = bk.s.qP[a7];
			aM1[a7] ? 0 === aMF.sP && (aM1[a7].qJ.textContent = bO.uj.uk[aMF.eE].name) : aM1[a7] = new qI(bO.uj.uk[aMF.eE].name, s3.pu[a7].button, 1, 1), b6.z3.startsWith(aM3[a7], "🏆 ") ? aMF.aAh || (aM3[a7] = aM3[a7].substring(3), s3.pu[a7]
				.button.textContent = aM3[a7], s3.pu[a7].button.appendChild(aM0[0][a7].qJ), s3.pu[a7].button.appendChild(aM1[a7].qJ)) : aMF.aAh && (aM3[a7] = "🏆 " + aM3[a7], s3.pu[a7].button.textContent = aM3[a7], s3.pu[a7].button
				.appendChild(aM0[0][a7].qJ), s3.pu[a7].button.appendChild(aM1[a7].qJ))
		}
		var qO = "",
			aMH = "";
		0 === aMA && (qO = bk.qU.aAw(sb, 0, aMD), aMH = bk.qU.aAw(sb, 0, aME)), aM2[0].qJ.textContent = qO, aM2[1].qJ.textContent = aMH, s4.pu[5].button.textContent = L(208) + " (MP): " + bk.s.aB3[0], s4.pu[6].button.textContent = L(208) +
			" (SP): " + bk.s.aB3[1]
	}, this.aBH = function() {
		aLz.sH.lH()
	}, this.show = function() {
		aLz.show(), this.resize()
	}, this.qm = function() {
		aLz.qm(), bk.sk.qm(), bk.qj.qm()
	}, this.resize = function() {
		aLz.resize(1 - bk.s.qN[2])
	}, this.a0P = function(et) {
		2 === et && aLz.sK[3].pu[0].pc()
	}, s3 = new r2([new q(aM3[0], function() {
		return aM4(0, 0), 2
	}), new q(aM3[1], function() {
		return aM4(0, 1), 2
	}), new q(aM3[2], function() {
		return aM4(0, 2), 2
	}), new q(aM3[3], function() {
		return aM4(0, 3), 2
	})], b7.nX), s4 = new r2([new q("", 0, 2), new q("", 0, 2), new q("", 0, 2), new q("", 0, 2), new q("", 0, 2), new q("", 0, 2), new q("", 0, 2)], b7.nY, 1);
	var aM5 = new r2([new q(L(295), function() {
		return aM4(2, 0), 2
	}), new q(L(100), function() {
		return aM4(2, 1), 2
	})], b7.nX);
	s6 = new r2([new q(L(296), (__fx.customLobby.setLeaveFunction(() => {
			n.r(), bk.zh(), aw.s.zg(3240), __fx.customLobby.setActive(false), n.o(5, 5)
		}),
		function() {
			bk.zh(), aw.s.zg(3240), __fx.customLobby.setActive(false), n.r(), n.o(5, 5)
		})), new q(L(297), function() {
		return aM6(1), 2
	})], b7.nX), aLz = new s2(s3, s4, aM5, s6, aM7, bk.sk.aBK);
	for (var a7 = 0; a7 < 4; a7++) aM0[0][a7] = new qI("0", s3.pu[a7].button);
	aM0[2][1] = new qI("0", aM5.pu[1].button), aM0[3][1] = new qI("0", s6.pu[1].button), aM2 = [new qI("", aM5.pu[1].button, 1, 1), new qI("", s6.pu[1].button, 1, 1)], aM8(0, bk.s.qN[0], 1), aM8(2, bk.s.qN[2], 1)
}

function aIh() {
	var aJ3, aJ4, pE;
	this.show = function() {
		aJ3.show(), this.resize()
	}, this.qm = function() {
		aJ3.qm()
	}, this.resize = function() {
		aJ3.resize(), aJ4.resize()
	}, this.a0P = function(et) {
		2 === et && aJ3.t2[0].pc()
	}, aJ3 = new sv(L(305), [new q("⬅️ " + L(22), function() {
		n.o(7, n.aBA(7).aIb)
	}), new q(L(168), function() {
		bf.qw.qx(105, bC.rg.uT(aJ4.pG[0].ox[0].e.value, 5)), bf.qw.qx(106, bC.rg.uT(aJ4.pG[1].ox[0].e.value, 8)), n.o(8, n.aBA(7).aIb, new re(18))
	})]), aJ4 = new pC(aJ3.t1, ((pE = []).push(function() {
		var aJK = new ow;
		return aJK.oz(L(149)), aJK.pA(new q9({
			value: "",
			e0: -1
		})), aJK
	}()), pE.push(function() {
		var aJK = new ow,
			aJT = (aJK.oz(L(151)), new q9({
				value: "",
				e0: -1
			}));
		return aJT.e.type = "password", aJK.pA(aJT), aJK.pA(new qz([new q(L(152), function(e) {
			return e.textContent === L(152) ? (e.textContent = L(153), aJT.e.type = "text") : (e.textContent = L(152), aJT.e.type = "password"), !0
		}).button])), aJK
	}()), pE))
}

function aIo() {
	var aJ3, aLk, aLl, sw;

	function rs(a7) {
		n.o(8, n.rd, new re(21, {
			rt: a7,
			ru: 0,
			rv: 10
		}))
	}
	this.show = function() {
		aJ3.show(), this.resize()
	}, this.qm = function() {
		aJ3.qm()
	}, this.resize = function() {
		aJ3.resize(), aLk.resize()
	}, this.a0P = function(et) {
		2 === et && aJ3.t2[0].pc()
	}, aLl = [new q(L(264), function() {
		rs(5)
	}, 0, 0, 1), new q(L(265), function() {
		rs(6)
	}, 0, 0, 1), new q(L(266), function() {
		rs(7)
	}, 0, 0, 1), new q(L(267), function() {
		rs(8)
	}, 0, 0, 1)], sw = [new q("⬅️ " + L(22), function() {
		n.ze()
	})], aJ3 = new sv(L(306), sw), aLk = new pt(aLl, aJ3.t1)
}

function aIX() {
	this.dp = {}, this.rw = ["", "", ""], this.aIm = null, this.aIj = null, this.rL = 0, this.aEA = [0], this.t = function() {
			n.o(5, 5)
		}, this.aLd = function() {
			n.r(), aV.aBy(0), aV.dU()
		},
		__fx.customLobby.setJoinFunction(() => {
			n.r();
			aV.aBy(0);
			aV.dU();
		}), this.a9s = function() {
			n.o(0 === aW.zU() ? 5 : 0)
		}, this.aKf = function() {
			if (1 === bf.dp.data[130].value) n.o(8, n.aCp().aIb, new re(24, {
				aKD: bf.dp.data[125].value,
				ru: bf.dp.data[128].value,
				rv: bf.dp.data[129].value
			}));
			else {
				for (var g = (g = bf.dp.data[126].value.split(",")).slice(0, 10), a7 = 0; a7 < g.length; a7++) g[a7] = g[a7].trim().slice(0, 7).toUpperCase();
				1 === g.length && 0 === g[0].length && (g = []), n.o(8, n.aCp().aIb, new re(23, {
					aKD: bf.dp.data[125].value,
					yz: g
				}))
			}
		}, this.aLe = function(aIb, target) {
			n.o(4, aIb, new p("Data Usage Information",
				"Do you want your username and other data to be remembered for the next session?<br>The app might not function correctly if you decline data usage.<br>Please read our privacy policy for more information: <a href='" + bG.aMJ +
				"' target='_blank'>" + bG.aMJ + "</a>", !1, [new q("⬅️ " + L(22), function() {
					n.o(aIb)
				}), new q("✅ Accept", function() {
					bf.qw.qx(140, 1), 0 === target ? n.o(2, aIb) : n.o(8, aIb, new re(target))
				})]))
		}, this.aMK = function() {
			for (var a7 = 0; a7 < 3; a7++) this.rw[a7] = bC.uK.uO(bD.oK(5));
			this.rw[1] = "[" + this.rw[1] + "]", 5 === n.rd && n.aCp().aCq.qx(this.rw)
		}
}

function aIr() {
	var aJk, aJl, aML, pE;

	function aJn() {
		b2.zh(), n.aJ2()[19] = null, n.ze()
	}

	function aMS() {
		aMV(), aMT()
	}

	function aMV() {
		aML.oy.lastChild && aML.oy.removeChild(aML.oy.lastChild)
	}

	function aMT() {
		var aMW = bO.a33(a9.data);
		a9.data.canvas = bO.aGe(aMW, a9.data.mapSeed).ut, aMU()
	}

	function aMU() {
		var a19 = a9.data.canvas;
		a19.style.width = "100%", aML.oy.appendChild(a19)
	}
	this.aDu = function(a19) {
		a9.data.canvas && aMV(), a9.data.canvas = a19, aMU()
	}, this.show = function() {
		aJk.show(), this.resize()
	}, this.qm = function() {
		aJk.qm()
	}, this.resize = function() {
		aJk.resize(), aJl.resize()
	}, this.a0P = function(et) {
		2 === et && aJk.t2[0].pc()
	}, aJk = new sv(L(234), [new q("⬅️ " + L(22), aJn)]), 2 === a9.data.mapType && b2.dU(), aJl = new pC(aJk.t1, (function(pE) {
		var aJK = new ow;
		aJK.oz(L(202)), aJK.p7(new sq({
			su: [L(307), L(308), L(309)],
			value: a9.data.mapType
		}, function(e0) {
			2 === (a9.data.mapType = e0) ? (b2.dU(), a9.data.canvas = null) : (a9.data.passableWater = a9.data.passableMountains = 1, b2.zh()), n.o(20)
		})), 2 <= a9.data.mapType && (aJK.pA(new r9), aJK.pA(new qt({
			value: a9.data.passableWater
		}, L(310), function(value) {
			a9.data.passableWater = value
		})), aJK.pA(new qt({
			value: a9.data.passableMountains
		}, L(311), function(value) {
			a9.data.passableMountains = value
		})));
		pE.push(aJK)
	}(pE = []), function(pE) {
		if (0 === a9.data.mapType) {
			for (var aJK = new ow, su = (aJK.oz(L(234)), []), a7 = 0; a7 < bO.uj.aHY.length; a7++) su.push(bO.uj.uk[bO.uj.aHY[a7]].name);
			aJK.p7(new sq({
				su: su,
				value: a9.data.mapProceduralIndex
			}, function(e0) {
				a9.data.mapProceduralIndex = e0, aMS()
			})), pE.push(aJK)
		}
	}(pE), function(pE) {
		if (1 === a9.data.mapType) {
			for (var aJK = new ow, su = (aJK.oz(L(234)), []), a7 = 0; a7 < bO.uj.aHZ.length; a7++) su.push(bO.uj.uk[bO.uj.aHZ[a7]].name);
			aJK.p7(new sq({
				su: su,
				value: a9.data.mapRealisticIndex
			}, function(e0) {
				a9.data.mapRealisticIndex = e0, aMS()
			})), pE.push(aJK)
		}
	}(pE), function(pE) {
		var aJK;
		2 === a9.data.mapType && ((aJK = new ow).oz(L(234)), aJK.pA(new qz([new q(L(312), function() {
			return b2.aDn(), !0
		}).button])), pE.push(aJK))
	}(pE), function(pE) {
		(aML = new ow).oz(L(313)), 2 !== a9.data.mapType ? aMT() : a9.data.canvas && aMU();
		pE.push(aML)
	}(pE), function(pE) {
		var aJK, q8, aJQ;
		0 === a9.data.mapType && ((aJK = new ow).oz("Seed"), q8 = new q9({
			e0: -1,
			value: a9.data.mapSeed
		}, 1, 0, function(e) {
			e = Math.abs(Math.floor(e.target.value)) % 16384;
			a9.data.mapSeed !== e && (a9.data.mapSeed = e, aMS())
		}), aJQ = new q(L(227), function(e) {
			var aGZ = Math.floor(16384 * Math.random());
			if (a9.data.mapSeed !== aGZ) return q8.e.value = a9.data.mapSeed = aGZ, aMS(), !0
		}), aJK.pA(q8), aJK.pA(new qz([aJQ.button])), pE.push(aJK))
	}(pE), function(pE) {
		var aJK, q8;
		2 === a9.data.mapType && ((aJK = new ow).oz(L(314)), q8 = new q9({
			e0: -1,
			value: a9.data.mapName
		}, 0, 0, function(e) {
			a9.data.mapName = e.target.value = e.target.value.slice(0, 20)
		}), aJK.pA(q8), pE.push(aJK))
	}(pE), pE))
}

function p(title, p6, aMX, aLm) {
	var aJ3, aKw;
	this.show = function() {
		aJ3.show(), this.resize()
	}, this.qm = function() {
		aJ3.qm()
	}, this.resize = function() {
		aJ3.resize(), aKw.resize()
	}, this.a0P = function(et) {
		2 === et && aJ3.t2[0].pc()
	}, aLm = aLm || [new q("⬅️ " + L(22), function() {
		n.ze()
	})], aJ3 = new sv(title, aLm), aKw = new qy(aJ3.t1, p6), aMX && b6.pJ.textAlign(aJ3.t1.style, 1)
}

function aIu() {
	var aJk, aJl, aJm, pE;

	function aJn() {
		aJp(), 2 === a9.data.playerNamesType && 1 === b6.pT.a0q(a9.data.playerNamesData).length && (a9.data.playerNamesType = 0), 2 !== a9.data.playerNamesType && (a9.data.playerNamesData = null), n.aJ2()[19] = null, n.ze()
	}

	function aJp() {
		2 === a9.data.playerNamesType && b6.pT.a14(aJm.tO(), a9.data.playerNamesData, 20)
	}
	this.show = function() {
		aJk.show(), this.resize()
	}, this.qm = function() {
		aJk.qm()
	}, this.resize = function() {
		aJk.resize(), aJl.resize()
	}, this.a0P = function(et) {
		2 === et && aJk.t2[0].pc()
	}, aJk = new sv(L(238), [new q("⬅️ " + L(22), aJn)]), aJl = new pC(aJk.t1, (function(pE) {
		var aJK = new ow;
		aJK.oz(L(202)), aJK.p7(new sq({
			su: [L(239), L(240), L(205)],
			value: a9.data.playerNamesType
		}, function(e0) {
			aJp(), a9.data.playerNamesType = e0, n.o(23)
		})), aJK.pA(new r9), aJK.pA(new qt({
			value: a9.data.selectableName
		}, L(315), function(value) {
			a9.data.selectableName = value
		})), pE.push(aJK)
	}(pE = []), function(pE) {
		var aJK;
		2 === a9.data.playerNamesType && ((aJK = new ow).oz("Data"), aJm = new tG(0, 1, 0, 1), a9.data.playerNamesData && a9.data.playerNamesData.length === a9.eV || (a9.data.playerNamesData = new Array(a9.eV), a9.data.playerNamesData
			.fill("")), aJm.tN(b6.z3.a2O(a9.data.playerNamesData, 1, '"')), aJK.pA(aJm), pE.push(aJK))
	}(pE), pE))
}

function aIf() {
	var aJk, tL;

	function aMY() {
		n.r();
		var p0 = b5.aMc(tL.tO());
		(a9.yG && 0 < p0.length && p0 === b5.oY.a2u || b5.aEK.ue(p0)) && b5.aMd()
	}
	this.show = function(aMZ) {
		this.aMa(aMZ), aJk.show(), this.resize()
	}, this.aMa = function(aMZ) {
		0 === a9.yG ? aMZ ? tL.tN(aMZ) : b5.oY.a2u.length && tL.tN(b5.oY.a2u) : (a9.gi || (b5.oY.a2u = b5.a2v.xk()), tL.tN(b5.aMb(b5.oY.a2u)))
	}, this.qm = function() {
		aJk.qm()
	}, this.resize = function() {
		aJk.resize(), tL.resize()
	}, this.a0P = function(et) {
		2 === et ? aJk.t2[0].pc() : aMY()
	}, aJk = new sv(L(316), [new q("⬅️ " + L(22), function() {
		n.aJ1(1)
	}), new q(L(317), function() {
		tL.tP()
	}), new q(L(318), function() {
		tL.tQ()
	}), new q(L(319), function() {
		tL.clear()
	}), new q(L(320), function() {
		aMY()
	})]), tL = new tG(L(321)), aJk.t1.appendChild(tL.e)
}

function aIe() {
	var aJ3, aJ4, pE, a9o, aJK;

	function aMe() {
		var ln;
		a9o !== bf.dp.data[12].value ? (b3.dU(), b3.a9n(), ln = bb.ln, n.o(4, 1, new p(L(324), L(325), !1, [new q("⬅️ " + L(22), function() {
			n.o(1)
		}), new q("🔄 Reload", function() {
			bb.ln < ln + 1500 || u.v.w()
		}, b7.ms)]))) : n.o(1)
	}
	this.show = function() {
			a9o = bf.dp.data[12].value, aJ3.show(), this.resize()
		}, this.qm = function() {
			aJ3.qm()
		}, this.resize = function() {
			aJ3.resize(), aJ4.resize()
		}, this.a0P = function(et) {
			2 === et && aJ3.t2[0].pc()
		}, aJ3 = new sv(L(322), [new q("⬅️ " + L(22), aMe), new q(L(323), function() {
			n.r(), bf.qw.u1(), n.o(2)
		})]), pE = [], (aJK = new ow).oz(L(326)), aJK.p1(L(327)), pE.push(aJK),
		function(pE) {
			var aJK = new ow,
				g = (aJK.oz(L(345)), b3.data.a9t());
			aJK.p7(new sq({
				su: g,
				value: b3.data.a9w(g)
			}, function(e0) {
				return bf.qw.qx(12, g[e0].split(":")[0]), !0
			})), pE.push(aJK)
		}(pE),
		function(pE) {
			var aJK = new ow,
				aMh = (aJK.oz(L(343)), []);
			aJK.pA(new qz([new q(L(344), function(e) {
				bT.aMi();
				for (var a7 = 0; a7 < aMh.length; a7++) aMh[a7].e.value = bT.aMj[a7];
				return b6.pJ.a1c(e), !0
			}).button]));
			for (var a7 = 0; a7 < bT.aMk.length; a7++) {
				aJK.p1(bT.aMk[a7]);
				for (var er = 0; er < 2; er++) {
					var e0 = 2 * a7 + er,
						q8 = new q9({
							value: bT.aMj[e0],
							e0: -1
						});
					q8.e.aMl = e0, aMh.push(q8), q8.e.addEventListener("keydown", function(e) {
						e.preventDefault();
						var code = e.code;
						e.target.value = code, bT.aMm(e.target.aMl, code)
					}), er && (q8.e.style.marginLeft = "4%"), q8.e.style.width = "48%", aJK.pA(q8)
				}
			}
			pE.push(aJK)
		}(pE), (aJK = new ow).oz(L(328)), bf.dp.data[1].su = [L(329), L(330), L(331), L(332)], aJK.p7(new sq(bf.dp.data[1])), pE.push(aJK), (aJK = new ow).oz(L(333)), bf.dp.data[9].su = [L(330), L(334), L(335)], aJK.p7(new sq(bf.dp.data[9])), pE
		.push(aJK), (aJK = new ow).oz(L(336)), bf.dp.data[11].su = [L(337), L(9), L(338)], aJK.p7(new sq(bf.dp.data[11])), pE.push(aJK), (aJK = new ow).oz(L(339)), aJK.pA(new qt(bf.dp.data[2])), pE.push(aJK), (aJK = new ow).oz(L(340)), aJK.pA(new qt(
			bf.dp.data[7])), pE.push(aJK), (aJK = new ow).oz(L(341)), aJK.pA(new qt(bf.dp.data[8])), pE.push(aJK), (aJK = new ow).oz(L(342)), aJK.pA(new q9(bf.dp.data[5])), pE.push(aJK), aJ4 = new pC(aJ3.t1, pE)
}

function aIv() {
	var aJk, aJl, aJm, pE;

	function aJn() {
		aJp(), 2 !== a9.data.spawningType || b6.pT.a0q(a9.data.spawningData) || (a9.data.spawningType = 0), 2 !== a9.data.spawningType && (a9.data.spawningData = null), n.aJ2()[19] = null, n.ze()
	}

	function aJp() {
		2 === a9.data.spawningType && b6.pT.a12(aJm.tO(), a9.data.spawningData, bO.aDw - 1)
	}
	this.show = function() {
		aJk.show(), this.resize()
	}, this.qm = function() {
		aJk.qm()
	}, this.resize = function() {
		aJk.resize(), aJl.resize()
	}, this.a0P = function(et) {
		2 === et && aJk.t2[0].pc()
	}, aJk = new sv(L(346), [new q("⬅️ " + L(22), aJn)]), aJl = new pC(aJk.t1, (function(pE) {
		var aJK = new ow,
			su = (aJK.oz(L(202)), [L(227), L(237), L(205)]),
			value = a9.data.spawningType;
		0 === a9.data.gameMode && (su.splice(1, 1), 0 < value) && (value = 1);
		aJK.p7(new sq({
			su: su,
			value: value
		}, function(e0) {
			aJp(), a9.data.spawningType = e0, 0 === a9.data.gameMode && 1 === e0 && (a9.data.spawningType = 2), 2 !== a9.data.spawningType || a9.data.spawningData || (a9.data.spawningData = new Uint16Array(2 * a9.eV)), n.o(24)
		})), aJK.pA(new r9), aJK.pA(new qt({
			value: a9.data.selectableSpawn
		}, L(347), function(value) {
			a9.data.selectableSpawn = value
		})), pE.push(aJK)
	}(pE = []), function(pE) {
		var aJK = new ow;
		aJK.oz("Seed"), aJK.pA(new q9({
			e0: -1,
			value: a9.data.spawningSeed
		}, 1, 0, function(e) {
			var value = Math.abs(Math.floor(e.target.value)) % 16384;
			e.target.value = a9.data.spawningSeed = value
		})), pE.push(aJK)
	}(pE), function(pE) {
		var aJK;
		2 === a9.data.spawningType && ((aJK = new ow).oz("Data"), (aJm = new tG(0, 1, 0, 1)).tN(b6.z3.a2O(a9.data.spawningData, 2)), aJK.pA(aJm), pE.push(aJK))
	}(pE), pE))
}

function aId() {
	var aJ3, aLk, aLl, sw;

	function aMn(id) {
		0 !== u.id || bf.dp.data[140].value ? 0 === id ? n.o(8, 1, new re(16)) : n.o(2) : n.s.aLe(n.rd, 0 === id ? 16 : 0)
	}
	this.show = function() {
		u.v.setState(12), aJ3.show(), this.resize(), this.iS()
	}, this.qm = function() {
		aJ3.qm()
	}, this.resize = function() {
		aJ3.resize(), aLk.resize()
	}, this.iS = function() {
		8 === aW.zU() && (2 <= bZ.aMs ? aLl[2].pd === b7.mi && aLl[2].pf(0) : aLl[2].pd !== b7.mi && aLl[2].pf(b7.mi), !a9.gi && aI.a3v(a9.eI) ? aLl[1].pd === b7.mi && aLl[1].pf(0) : aLl[1].pd !== b7.mi && aLl[1].pf(b7.mi), !a9.gi && aq.ou(a9
			.eI) ? aLl[0].pd === b7.mi && aLl[0].pf(0) : aLl[0].pd !== b7.mi && aLl[0].pf(b7.mi))
	}, this.a0P = function(et) {
		2 === et && aJ3.t2[0].pc()
	}, aLl = [new q(L(348), function() {
		aMn(0)
	}), new q(L(256), function() {
		n.o(16)
	}), new q(L(306), function() {
		n.o(17)
	}), new q(L(349), function() {
		n.s.aKf()
	}, 0, 0, 1), new q(L(316), function() {
		n.o(3, 1)
	}), new q(L(350), function() {
		n.o(18)
	}), new q(L(322), function() {
		aMn(1)
	}), new q(L(351), function() {
		n.o(4, 1, new p(L(351), b6.pJ.a1X([L(360), L(361), "Discord", L(362), L(252), L(363), L(100), L(364), L(365), L(366)], [bG.aA8, bG.zP, bG.aA9, bG.aMt, bG.aMu, bG.z9, bG.aMv, bG.aMw, bG.aMx, bG.aMJ]), !1, [new q("⬅️ " + L(22),
			function() {
				n.o(1)
			})]))
	}), new q(L(352), function() {
		n.o(4, 1, new p(L(352), dh + "<br><a href='" + bG.aMt + "' target='_blank'>" + bG.aMt + "</a>" +
			"<br><br><b>" + "FX Client v" + __fx.version + "<br><a href='https://discord.gg/dyxcwdNKwK' target='_blank'>FX Client Discord server</a>" +
			"<br><a href='https://github.com/fxclient/FXclient' target='_blank'>Github repository</a></b>", !0, [new q("⬅️ " + L(22), function() {
				n.o(1)
			})]))
	}), new q(L(353), function() {
		n.o(4, 1, new p(L(353), L(367) + "<br>" + L(368), !1, [new q("⬅️ " + L(22), function() {
			n.o(1)
		}), new q(L(369), function() {
			u.v.zI(), n.o(1)
		})]))
	}), new q(L(354), function() {
		u.v.zJ(), n.o(4, 1, new p(L(370), L(371) + "<a href='" + bG.aMJ + "' target='_blank'>" + bG.aMJ + "</a>", !1, [new q("⬅️ " + L(22), function() {
			n.o(1)
		})]))
	})], sw = [new q("⬅️ " + L(22), function() {
		n.s.a9s()
	})], 8 === aW.zU() && (aLl.unshift(new q(L(357), function() {
		2 <= bZ.aMs && (n.r(), ba.a0S(), bb.dc = !0)
	}, 0, 1)), aLl.unshift(new q(L(358), function() {
		!a9.gi && aI.a3v(a9.eI) && (b4.gv.o0(), n.r(), aI.gj) && aI.a0S()
	}, 0, 1)), aLl.unshift(new q(L(359), function() {
		!a9.gi && aq.ou(a9.eI) && (b4.gv.o2(), n.r(), aI.gj) && aI.a0S()
	}, 0, 1))), 1 === u.id && 5 <= u.f1 && aLl.push(new q(L(355), function() {
		u.v.zK()
	})), aJ3 = new sv(L(356), sw), aLk = new pt(aLl, aJ3.t1)
}

function aIz() {
	var aJk, aJl, aJm, pE;

	function aJn() {
		aJp(), 2 !== a9.data.sResourcesType && (a9.data.sResourcesData = null), n.aJ2()[19] = null, n.ze()
	}

	function aJp() {
		2 === a9.data.sResourcesType && b6.pT.a12(aJm.tO(), a9.data.sResourcesData, 2047)
	}
	this.show = function() {
		aJk.show(), this.resize()
	}, this.qm = function() {
		aJk.qm()
	}, this.resize = function() {
		aJk.resize(), aJl.resize()
	}, this.a0P = function(et) {
		2 === et && aJk.t2[0].pc()
	}, aJk = new sv(L(243), [new q("⬅️ " + L(22), aJn)]), aJl = new pC(aJk.t1, (function(pE) {
		var aJK = new ow;
		aJK.oz(L(202)), aJK.p7(new sq({
			su: [L(203), L(204), L(205)],
			value: a9.data.sResourcesType
		}, function(e0) {
			aJp(), 2 !== e0 || a9.data.sResourcesData || (a9.data.sResourcesData = new Uint16Array(a9.eV)), a9.data.sResourcesType = e0, n.o(28)
		})), pE.push(aJK)
	}(pE = []), function(pE) {
		var aJK;
		1 === a9.data.sResourcesType && ((aJK = new ow).oz("Value"), aJK.pA(new q9({
			e0: -1,
			value: a9.data.sResourcesValue
		}, 1, 0, function(e) {
			var value = bH.or(Math.floor(e.target.value), 0, 2047);
			e.target.value = a9.data.sResourcesValue = value
		})), pE.push(aJK))
	}(pE), function(pE) {
		var aJK;
		2 === a9.data.sResourcesType && ((aJK = new ow).oz("Data"), (aJm = new tG(0, 1, 0, 1)).tN(b6.z3.a2O(a9.data.sResourcesData, 2)), aJK.pA(aJm), pE.push(aJK))
	}(pE), pE))
}

function aIx() {
	var aJk, aJl, aJm, pE;

	function aJn() {
		aJp(), 2 !== a9.data.tIncomeType && (a9.data.tIncomeData = null), n.aJ2()[19] = null, n.ze()
	}

	function aJp() {
		2 === a9.data.tIncomeType && b6.pT.a12(aJm.tO(), a9.data.tIncomeData, 255)
	}
	this.show = function() {
		aJk.show(), this.resize()
	}, this.qm = function() {
		aJk.qm()
	}, this.resize = function() {
		aJk.resize(), aJl.resize()
	}, this.a0P = function(et) {
		2 === et && aJk.t2[0].pc()
	}, aJk = new sv(L(241), [new q("⬅️ " + L(22), aJn)]), aJl = new pC(aJk.t1, (function(pE) {
		var aJK = new ow;
		aJK.oz(L(202)), aJK.p7(new sq({
			su: [L(203), L(204), L(205)],
			value: a9.data.tIncomeType
		}, function(e0) {
			aJp(), 2 !== e0 || a9.data.tIncomeData || (a9.data.tIncomeData = new Uint8Array(a9.eV), a9.data.tIncomeData.fill(32)), a9.data.tIncomeType = e0, n.o(26)
		})), pE.push(aJK)
	}(pE = []), function(pE) {
		var aJK;
		1 === a9.data.tIncomeType && ((aJK = new ow).oz("Value"), aJK.pA(new q9({
			e0: -1,
			value: a9.data.tIncomeValue
		}, 1, 0, function(e) {
			var value = bH.or(Math.floor(e.target.value), 0, 255);
			e.target.value = a9.data.tIncomeValue = value
		})), pE.push(aJK))
	}(pE), function(pE) {
		var aJK;
		2 === a9.data.tIncomeType && ((aJK = new ow).oz("Data"), (aJm = new tG(0, 1, 0, 1)).tN(b6.z3.a2O(a9.data.tIncomeData, 4)), aJK.pA(aJm), pE.push(aJK))
	}(pE), pE))
}

function aIp() {
	var aJ3, aJ4, pE;
	this.show = function() {
		aJ3.show(), this.resize()
	}, this.qm = function() {
		aJ3.qm()
	}, this.resize = function() {
		aJ3.resize(), aJ4.resize()
	}, this.a0P = function(et) {
		2 === et && aJ3.t2[0].pc()
	}, aJ3 = new sv(L(350), [new q("⬅️ " + L(22), function() {
		n.ze()
	})]), aJ4 = new pC(aJ3.t1, ((pE = []).push(function() {
		function aJN() {
			aN2.button.textContent = L(146), aN0.e.readOnly = !1, aN1.e.readOnly = !1, aJM.pf(1), aJM.button.style.color = b7.mX
		}
		var aJK = new ow,
			aMz = (aJK.oz(L(372)), new q9({
				value: bf.dp.data[105].value,
				e0: -1
			})),
			aN0 = (aMz.e.readOnly = !0, aJK.pA(aMz), aJK.oz(L(279), "0.8em"), new q9(bf.dp.data[148])),
			aN0 = new q9(bf.dp.data[148], 0, void 0, function(e) {
				aJL(bf.dp.data[149].value, e.target.value)
			}),
			aN1 = (aJK.pA(aN0), aJK.oz(L(283), "0.8em"), new q9(bf.dp.data[149], 1, void 0, function(e) {
				aJL(e.target.value, bf.dp.data[148].value)
			})),
			aN2 = (aJK.pA(aN1), new q(L(146), function(e) {
				return e.textContent === L(146) ? (e.textContent = L(147), aN0.e.readOnly = !0, aN1.e.readOnly = !0, aJM.pf(0), aJM.button.style.color = b7.nM, bf.qw.qx(149, aN1.e.value), aJL(bf.dp.data[149].value, bf.dp.data[
					148].value)) : aJN(), !0
			})),
			aJM = (aJK.pA(new qz([aN2.button])), new q(L(14), function(e) {
				return aN0.e.readOnly && aw.s.aBw(0) && (b6.pJ.a1c(e), aJN(), aw.aJO.aJP({
					rf: 0,
					rb: bf.dp.data[148].value,
					rc: 0,
					value: bH.or(Math.floor(100 * bf.dp.data[149].value), 0, 4294967295)
				})), !0
			}, 1)),
			p2 = (aJK.pA(new qz([aJM.button])), aJK.p1()),
			aJL = function(f0, p0) {
				f0 = isNaN(f0) ? 0 : Number(f0);
				var f0 = Math.max(f0, (bf.dp.data[150].value + 1) / 100),
					aJS = Math.floor(100 * Math.max(1e-4 * f0, bf.dp.data[150].value / 100)) / 100;
				p2.textContent = L(148, [f0.toFixed(2), bf.dp.data[105].value, aJS.toFixed(2), p0, (f0 - aJS).toFixed(2)])
			};
		return aJL(bf.dp.data[149].value, bf.dp.data[148].value), aJK
	}()), pE))
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
	var a77, aN4, aN5, aN6, aN3 = !1;

	function aN7() {
		aN3 = !0, a77 = -1, aN4 = new Array(4);
		for (var a7 = 3; 0 <= a7; a7--) aN4[a7] = !1;
		var vm = Math.floor(1 + .02 * at.min);
		aN5 = new Array(4), (aN6 = new Array(4))[1] = aN6[3] = aN5[0] = aN5[2] = 0, aN6[0] = aN5[3] = -vm, aN5[1] = aN6[2] = vm
	}

	function aN8() {
		if (-1 !== a77)
			if (0 !== a9.yG && aD.mF()) {
				for (var aN9 = !1, a7 = 3; 0 <= a7; a7--) aN4[a7] && (aN9 = !0, hv += aN5[a7], hx += aN6[a7], ab.zr(aN5[a7], aN6[a7]), aO.a6p());
				aN9 ? bb.dc = !0 : am.m5()
			} else am.m5()
	}
	this.a0N = function(e0) {
		0 !== a9.yG && aD.mF() && (aN3 || aN7(), aN4[e0] = !0, -1 === a77) && (a77 = setInterval(aN8, 20), aN8())
	}, this.a0Q = function(e0) {
		if (0 !== a9.yG && (aN3 || aN7(), aN4[e0] = !1, -1 !== a77)) {
			for (var aN9 = !1, a7 = 3; 0 <= a7; a7--) aN9 = aN9 || aN4[a7];
			aN9 || this.m5()
		}
	}, this.m5 = function() {
		if (aN3 && -1 !== a77) {
			for (var a7 = 3; 0 <= a7; a7--) aN4[a7] = !1;
			clearInterval(a77), a77 = -1
		}
	}
}

function cc() {
	this.s = new aNA, this.lC = new aNB, this.ng = new aNC, this.aBY = new aND, this.a9p = new aNE, this.aJO = new aNF, this.oJ = new aNG, this.aL2 = new aNH, this.a4f = new aNI, this.aNJ = new aNK, this.aNL = new aNM, this.aNN = new aNO, this.aNP =
		new aNQ, this.dU = function() {
			this.s.dU()
		}
}

function aNA() {
	var aNR, aNT;
	this.aCZ = 5, this.aCT = this.aCZ - 1, this.aC1 = this.aCZ + this.aCT, this.aC0 = [0, 1, 5, 2, 6, 3, 7, 4, 8], this.aNS = null;

	function aNa(a7) {
		return aNT[a7].aN3 && aNR[a7].aNa()
	}

	function aNc(zR) {
		aNT[zR].ln = bb.ln, aNT[zR].aNV = !1
	}
	this.za = 0, this.zZ = 0, this.dU = function() {
		this.aNS = new Array(this.aCZ);
		this.aNS[0] = "territorial.io";
		var a7, aGZ = au.aGu(0);
		for (au.a2k(0), a7 = 1; a7 < this.aCZ; a7++) this.aNS[a7] = aG.xq() + ".territorial.io";
		for (au.a2k(aGZ), aNR = new Array(this.aC1), aNT = new Array(this.aC1), a7 = this.aC1 - 1; 0 <= a7; a7--) aNT[a7] = {
			aN3: !1,
			ln: 0,
			aNV: !1
		};
		this.aC2(0, 0)
	}, this.aNW = function(a7) {
		return aNR[a7]
	}, this.aNX = function() {
		return this.zZ < this.aCZ ? this.zZ : this.zZ - this.aCT
	}, this.iS = function() {
		for (var a7 = this.aC1 - 1; 0 <= a7; a7--) this.aBw(a7) && bb.ln > aNT[a7].ln + 15e3 && aw.ng.aNY(a7, aNT[a7].aNV);
		!this.aBw(0) && bb.ln > aNT[0].ln + 8e3 && (aNT[0].ln = bb.ln, this.aC2(0, 0))
	}, this.aC2 = function(zR, aIb) {
		if (aNT[zR].aN3) {
			if (aNR[zR].aNa()) return aNR[zR].aNb(aIb), aNR[zR].aBw();
			aNR[zR].qm()
		}
		return this.aNZ(zR, aIb), !1
	}, this.aNZ = function(zR, aIb) {
		aNT[zR].aN3 = !0, aNc(zR), aNR[zR] = new aNd, aNR[zR].dU(zR, aIb)
	}, this.aNb = function(zR, aIb) {
		aNa(zR) && aNR[zR].aNb(aIb)
	}, this.aNe = function(zR, aIb) {
		aw.a9p.aNf(zR)
	}, this.aBw = function(a7) {
		return aNT[a7].aN3 && aNR[a7].aBw()
	}, this.send = function(zR, a8) {
		aNc(zR), aNR[zR].send(a8)
	}, __fx.customLobby.setSendFunction(this.send), this.a08 = function(zR) {
		8 === aW.zU() && (aNT[zR].aNV = !0, aw.lC.aNg = !0)
	}, this.close = function(zR, aNh) {
		aNa(zR) && aNR[zR].close(aNh)
	}, this.aNi = function(zR, aNh) {
		l.zf(aNh), aNa(zR) && aNR[zR].close(aNh)
	}, this.zg = function(aNh) {
		for (var a7 = this.aC1 - 1; 0 <= a7; a7--) this.close(a7, aNh)
	}, this.aNj = function(zR, aNh) {
		for (var a7 = this.aC1 - 1; 0 <= a7; a7--) a7 !== zR && this.close(a7, aNh)
	}, this.a2w = function() {
		this.close(this.za, 3246)
	}, this.aNk = function(zR, e) {
		aNR[zR].qm(), l.zQ(zR, e.code)
	}
}

function aNB() {
	this.aNg = !1, this.iS = function() {
		bb.ja() % 250 != 249 || a9.gi || (aw.a9p.aNl(+(this.aNg && ac.lU[a9.eI]), ah.je + bJ.s.oW), this.aNg = !1)
	}
}

function aNI() {
	function aOB(aOC) {
		var eb = a9.data,
			aOC = (eb.selectedPlayer = bD.oK(aOC), eb.spawningSeed = bD.oK(14), bD.oK(4)),
			aOC = (aOC < 7 ? (eb.gameMode = 1, eb.numberTeams = aOC + 2) : 9 === aOC ? (eb.gameMode = eb.isZombieMode = 1, eb.numberTeams = 2) : (eb.gameMode = 0, eb.battleRoyaleMode = 7 === aOC ? 0 : 10 === aOC ? 1 : 2), eb.isContest = bD.oK(1), bD
				.oK(6));
		return eb.mapType = bO.aAi(aOC) ? 0 : 1, bO.aAj(eb, aOC), eb.mapSeed = bD.oK(14), aOC
	}
	this.aNn = function(zR, a8) {
		bD.dU(a8), 0 === bD.size ? aw.s.aNi(zR, 3205) : __fx.customLobby.isCustomMessage(a8) || ((0 === bD.oK(1) ? function(zR) {
			var aNr = bD.oK(6);
			0 === aNr ? function(zR) {
					if (0 === zR && 8 !== aW.zU()) {
						n.s.aMK();
						for (var aO3 = bD.oK(12), aO4 = bD.oK(6), g = new Array(aO3), a7 = 0; a7 < aO3; a7++) g[a7] = bD.oK(aO4);
						aP.a7E(g)
					}
				}(zR) : 2 === aNr ? aw.aNJ.aNt(zR) : 3 === aNr || 4 === aNr ? ar.dU() : 9 === aNr ? aw.aNL.aNu(zR) : 10 === aNr ? aw.aNN.aNv() : 11 === aNr ? aw.aNL.aNw() : 12 === aNr ? aw.aNN.aNx() : 13 === aNr ? aw.aNP.aNy() :
				14 === aNr ? aw.aNP.aNz() : 15 === aNr ? aw.aNL.aO0() : 16 === aNr ? aw.aNJ.aO1(zR) : 17 === aNr && aw.aNJ.aO2(zR)
		} : function(zR) {
			if (8 !== aW.zU() && !ar.aCa()) return;
			if (zR !== aw.s.za) aw.s.aNi(zR, 3244);
			else if (0 === bD.oK(1)) bb.yP.aOD(bD.a8);
			else {
				var a7, zR = bD.oK(2);
				if (0 === zR) {
					var nu, ng = bD.oK(9);
					0 !== ac.lU[ng] && 0 !== ac.lU[a9.eI] && (nu = bD.oK(10), aJ.nt(ng, a9.eI, nu), ab.os(ng, 1, nu))
				} else if (1 === zR) ! function() {
					var ng = bD.oK(9);
					0 !== ac.lU[ng] && 0 !== ac.lU[a9.eI] && b1.aGJ(0, [ng], !0) && aJ.oC(ng, 1)
				}();
				else if (2 === zR) ! function() {
					var ng = bD.oK(9),
						target = bD.oK(9);
					0 !== ac.lU[ng] && 0 !== ac.lU[target] && 0 !== ac.lU[a9.eI] && b1.aGJ(1, [ng], !0) && (ab.os(ng, 3, 96), ab.os(target, 4, 96), aJ.a4m(ng, target))
				}();
				else if (a5 && !a6) {
					var eY = 540;
					for (b9.a3(17287), b9.a4(1, 0), b9.a4(6, 10), eY = Math.min(b4.nd.oM.length, 540), a7 = 0; a7 < eY; a7++) b9.aOJ(32, b4.nd.oM[a7]);
					aw.s.send(aw.s.za, b9.a8)
				}
			}
		})(zR), bb.aNq())
	}, this.aO5 = function(a8) {
		if (bD.dU(a8), bD.e0 = 1, 3 === bD.oK(6)) {
			bD.e0 += 20;
			var eb = a9.data = new a2e,
				a8 = aOB(9),
				aAk = eb.humanCount = bD.oK(9) + 1;
			eb.selectableSpawn = 1 === eb.gameMode || aAk < 100, eb.colorsData = new Uint32Array(aAk), eb.playerNamesData = new Array(aAk);
			for (var a7 = 0; a7 < aAk; a7++) bD.e0++, eb.colorsData[a7] = bD.oK(18), eb.playerNamesData[a7] = bC.uK.uO(bD.oK(5));
			aW.aCE(), bO.a3(a8, eb.mapSeed), a9.a2i()
		} else ! function() {
			bD.e0 += 20;
			var eb = a9.data = new a2e,
				aOA = aOB(1);
			eb.humanCount = 2;
			eb.selectableSpawn = 1, eb.elo = new Uint16Array(2), eb.colorsData = new Uint32Array(2), eb.playerNamesData = new Array(2);
			for (var a7 = 0; a7 < 2; a7++) bD.e0++, eb.colorsData[a7] = bD.oK(18), eb.elo[a7] = bD.oK(14), eb.playerNamesData[a7] = bC.uK.uO(bD.oK(5));
			aW.aCE(), bO.a3(aOA, eb.mapSeed), a9.a2i()
		}()
	}, this.aO8 = function() {
		bD.e0 = 1;
		var aNr = bD.oK(6),
			aO9 = bD.oK(10);
		return aw.s.zZ > aw.s.aCT && (aO9 += aw.s.aCT), aw.s.zZ === aO9 ? (aw.s.za = aO9, !1) : (aw.s.close(aw.s.zZ, 3247), aw.s.za = aO9, ar.aAf = bD.oK(10), ar.aCM = bD.oK(3 === aNr ? 9 : 1), aw.s.aC2(aO9, 5) && aw.ng.aCU(), !0)
	}
}

function aNO() {
	this.aNv = function() {
		bf.s.ts(), bf.qw.qx(105, bB.rg.rh(bB.rg.ri(5))), bf.qw.qx(106, bB.rg.rh(bB.rg.ri(8))), bf.qw.qx(109, bD.oK(30)), bf.qw.qx(108, bf.dp.data[109].value), bf.qw.qx(111, bf.dp.data[109].value + 1), bf.qw.qx(107, 0), bf.qw.qx(110, "")
	}, this.aNx = function() {
		var aOM, aON, aOO, aOP, aOL;
		bD.size < b9.aOK(29) ? aw.s.aNi(0, 3254) : (aOL = bD.oK(5), aOM = bD.oK(3), aON = bD.oK(3), aOO = bD.oK(3), aOP = bD.oK(8), bD.aOQ(197 + 16 * (aOL + aOM + aON + aOO + aOP) + 32 + 32 + 30 + 128 + 32 + 30 + 10 + 32 + 2 + 10 + 5) ? (aOL = {
			rc: bD.oK(30),
			u5: bD.oK(16),
			u6: bD.oK(30),
			u7: bD.oK(30),
			u8: bD.oK(30),
			u9: bD.aOR(32),
			username: bC.uK.uO(aOL),
			uA: bC.uK.uO(aOM),
			uB: bC.uK.uO(aON),
			uC: bD.aOR(32),
			uD: bD.aOR(32),
			uE: bD.oK(30),
			uF: bD.aOR(32),
			uG: bD.aOR(32),
			uH: bD.aOR(32),
			uI: bD.aOR(32),
			aJW: bD.aOR(32),
			aJX: bD.aOR(30),
			aJR: bD.aOR(10),
			aJh: bD.aOR(32),
			aJi: bC.uK.uO(aOO),
			aJc: bD.aOR(2),
			aJd: bD.aOR(10),
			aJa: bC.uK.uO(aOP),
			aJe: bD.aOR(5)
		}, bf.qw.qx(150, aOL.aJR), 8 === n.rd && (25 === n.aCp().aKy ? (aOL.aJ5 = !0, n.s.aIm = aOL, n.aCp().aLC(25, !1)) : (aOL.aJ5 = !1, aOL.rb = bf.dp.data[105].value, n.s.aIj = aOL, bf.qw.u4(aOL), n.aCp().aLC(16, !0)))) : aw.s.aNi(0,
			3267))
	}
}

function aNQ() {
	this.aNy = function() {
		var a7;
		if (bD.size < b9.aOK(39)) aw.s.aNi(0, 3259);
		else {
			var rt = bD.oK(6),
				eY = bD.oK(10),
				hC = bD.oK(16);
			if (bD.aOQ(39 + 16 * hC + eY * (0 === rt ? 111 : 1 === rt ? 101 : 2 === rt || 3 === rt ? 127 : 212))) {
				var data = [];
				if (0 === rt)
					for (a7 = 0; a7 < eY; a7++) data.push([bD.oK(30), bC.uK.uO(bD.oK(5)), bD.oK(16), bD.oK(30), bD.oK(30)]);
				else if (1 === rt)
					for (a7 = 0; a7 < eY; a7++) data.push([bD.oK(16), bC.uK.uO(bD.oK(3)), bD.oK(16), bC.uK.uO(bD.oK(5)), bD.oK(31), bD.oK(30)]);
				else if (2 === rt || 3 === rt)
					for (a7 = 0; a7 < eY; a7++) data.push([bD.oK(30), bC.uK.uO(bD.oK(5)), bD.aOR(32), bD.oK(30), bD.oK(30)]);
				else
					for (a7 = 0; a7 < eY; a7++) data.push([bD.oK(20), bD.oK(30), bD.oK(30), bD.oK(30), bD.oK(30), bD.aOR(32), bD.oK(30), bC.uK.uO(bD.oK(5)), bC.uK.uO(bD.oK(5))]);
				8 === n.rd && n.aCp().aLC(21, !0, {
					rt: rt,
					data: data
				})
			} else aw.s.aNi(0, 3260)
		}
	}, this.aNz = function() {
		if (bD.size < b9.aOK(29)) aw.s.aNi(0, 3265);
		else {
			var aOS = bD.oK(4),
				aOT = bD.oK(7),
				aOU = bD.oK(11);
			if (bD.aOQ(29 + 16 * aOT + 16 * aOU + 11 * aOS)) {
				for (var data = [], a7 = 0; a7 < aOS; a7++) {
					for (var aAz = bC.uK.uO(bD.oK(3)), aOV = bD.oK(8), aKE = [], er = 0; er < aOV; er++) aKE.push(bD.oK(16));
					data.push({
						name: "[" + aAz + "]",
						aKE: aKE
					})
				}
				8 === n.rd && n.aCp().aLC(23, !0, data)
			} else aw.s.aNi(0, 3266)
		}
	}
}

function aNK() {
	this.aNt = function(zR) {
		if (zR !== aw.s.zZ) aw.s.close(zR, 3239);
		else if (6 !== aW.zU()) aw.s.close(zR, 3271);
		else {
			bk.dU();
			for (var a7 = 0; a7 < 4; a7++) {
				var qO = bk.s.qP[a7],
					playerCount = (qO.sP = bD.oK(10), qO.eE = bD.oK(6), qO.mapSeed = bD.oK(14), qO.aAb = bD.oK(4), qO.aBa = bD.oK(6), qO.aBb = bD.oK(4), qO.aAh = bD.oK(1), qO.aBF = bD.oK(12), qO.spawningSeed = bD.oK(14), bD.oK(16));
				bk.sb.sd[a7] = bD.oK(16);
				for (var er = 0; er < playerCount; er++) bk.sb.aAM(a7, bD.oK(30), bC.uM.ue(5), bD.oK(4), bD.oK(30), bD.oK(7), bD.oK(16), bD.oK(18))
			}
			n.o(29), bk.s.aB5(!0)
		}
	}, this.aO1 = function(zR) {
		if (zR !== aw.s.zZ) aw.s.close(zR, 3239);
		else if (bk.zY) {
			bk.s.aB3[0] = bD.oK(20), bk.s.aB3[1] = bD.oK(20);
			for (var aOW = bD.oK(16), er = 0; er < aOW; er++) {
				var id = bD.oK(3);
				0 === id ? bk.sb.aAM(0, bD.oK(30), bC.uM.ue(5), 9, 1e6, 127, 0, bD.oK(18)) : 1 === id ? bk.sb.aAY(bD.oK(16), bD.oK(2)) : 2 === id ? bk.sb.aAT(bD.oK(16), bD.oK(2), bD.oK(2)) : 3 === id ? bk.sb.aAW(bD.oK(16), bD.oK(2)) : 4 === id &&
					bk.sb.aAR(bD.oK(16), bD.oK(2), bC.uM.ue(5), bD.oK(4), bD.oK(30), bD.oK(7), bD.oK(16))
			}
			for (var a7 = 0; a7 < 4; a7++) {
				var qO = bk.s.qP[a7];
				if (qO.sP = bD.oK(10), 0 === qO.sP) {
					if (qO.za = bD.oK(10), qO.aAf = bD.oK(10), bk.aAE.dd(a7)) return;
					qO.eE = bD.oK(6), qO.mapSeed = bD.oK(14), qO.aAb = bD.oK(4), qO.aBa = bD.oK(6), qO.aBb = bD.oK(4), qO.aAh = bD.oK(1), qO.aBF = bD.oK(12), qO.spawningSeed = bD.oK(14)
				}
			}
			bk.s.aB7()
		} else aw.s.close(zR, 3251)
	}, this.aO2 = function(zR) {
		if (zR !== aw.s.zZ) aw.s.close(zR, 3272);
		else if (bk.zY) {
			for (var qM = bD.oK(4), qO = bk.s.qP[qM], qQ = qO.qQ, aOX = (qO.qR = bD.oK(20), bD.oK(6)), a7 = 0; a7 < aOX; a7++) {
				var aAu, target, rb = bD.oK(30),
					id = bD.oK(4);
				0 === id ? qQ.push({
					id: id,
					rb: rb,
					k: bC.uM.ue(7)
				}) : 15 === id ? (aAu = bD.oK(3), target = bD.oK(30), bk.aAC, qQ.push({
					id: id,
					rb: rb,
					aAu: aAu,
					target: target,
					value: bD.oK(30)
				})) : (target = bD.oK(30), qQ.push({
					id: id,
					rb: rb,
					target: target,
					value: bD.oK(4)
				}))
			}
			bk.s.aBG(qM)
		} else aw.s.close(zR, 3273)
	}
}

function aNM() {
	this.aNu = function(zR) {
		var aOF, pr;
		bD.aOQ(70) ? (aOF = bD.oK(3), pr = be.aOY.iS(bD.oK(30), bD.oK(30)), aw.a9p.aOZ(zR, pr, aOF), 0 < aOF || (0 === zR && 0 === bf.dp.data[105].value.length ? aw.a9p.aL1(0) : aw.aJO.aOa(zR), 4 === aw.s.aNW(zR).aOb() ? 6 === aW.zU() && aw.aBY
			.aC3(zR) : 5 !== aw.s.aNW(zR).aOb() || 8 !== aW.zU() && 10 !== aW.zU() || aw.ng.aCU())) : aw.s.aNi(zR, 3269)
	}, this.aNw = function() {
		var id = bD.oK(6);
		0 === id ? (aP.a7A || aw.a9p.aL1(1), b3.a9n(), 8 === n.rd && n.aCp().aLB()) : 21 === id ? 8 === n.rd && n.aCp().aLC(17) : 22 === id && (bf.qw.qx(106, bf.dp.data[110].value), bf.qw.qx(110, ""), 8 === n.rd) && n.aCp().aLC(16)
	}, this.aO0 = function() {
		var eY = bD.oK(16),
			aOc = bD.oK(16);
		if (bD.aOQ(55 + 10 * eY + 16 * aOc)) {
			for (var g = [], a7 = 0; a7 < eY; a7++) g.push(bC.uK.uO(bD.oK(10)));
			b3.a9r(g)
		} else aw.s.aNi(0, 3270)
	}
}

function aNC() {
	this.aNY = function(zR, aNV) {
		b9.a3(8), b9.a4(1, 0), b9.a4(6, 4), b9.a4(1, aNV ? 1 : 0), aw.s.send(zR, b9.a8)
	}, this.aCU = function() {
		b9.a3(58), b9.a4(1, 0), b9.a4(6, 5), b9.a4(8, aw.s.aNX()), b9.a4(10, ar.aAf), b9.a4(9, ar.aCM), b9.a4(10, di), b9.a4(14, h.dj), aw.s.send(aw.s.za, b9.a8)
	}, this.nh = function(eK) {
		b9.a3(27), b9.a4(1, 1), b9.a4(4, 0), b9.a4(22, eK), aw.s.send(aw.s.za, b9.a8)
	}, this.ni = function(hu, il) {
		b9.a3(25), b9.a4(1, 1), b9.a4(4, 1), b9.a4(10, hu), b9.a4(10, il), aw.s.send(aw.s.za, b9.a8)
	}, this.nm = function(hu, nk) {
		b9.a3(24), b9.a4(1, 1), b9.a4(4, 2), b9.a4(10, hu), b9.a4(9, nk), aw.s.send(aw.s.za, b9.a8)
	}, this.nn = function(hu, eK) {
		b9.a3(37), b9.a4(1, 1), b9.a4(4, 3), b9.a4(10, hu), b9.a4(22, eK), aw.s.send(aw.s.za, b9.a8)
	}, this.nq = function(lt, eK) {
		b9.a3(37), b9.a4(1, 1), b9.a4(4, 4), b9.a4(10, lt), b9.a4(22, eK), aw.s.send(aw.s.za, b9.a8)
	}, this.ns = function(il) {
		b9.a3(15), b9.a4(1, 1), b9.a4(4, 5), b9.a4(10, il), aw.s.send(aw.s.za, b9.a8)
	}, this.nw = function(e0) {
		b9.a3(15), b9.a4(1, 1), b9.a4(4, 6), b9.a4(10, e0), aw.s.send(aw.s.za, b9.a8)
	}, this.nz = function(ny) {
		b9.a3(6), b9.a4(1, 1), b9.a4(4, 7), b9.a4(1, ny), aw.s.send(aw.s.za, b9.a8)
	}, this.o1 = function() {
		b9.a3(5), b9.a4(1, 1), b9.a4(4, 8), aw.s.send(aw.s.za, b9.a8)
	}, this.o3 = function(hu, eK, il) {
		b9.a3(47), b9.a4(1, 1), b9.a4(4, 10), b9.a4(10, hu), b9.a4(10, il), b9.a4(22, eK), aw.s.send(aw.s.za, b9.a8)
	}, this.oA = function(aOd, aOe) {
		b9.a3(24), b9.a4(1, 1), b9.a4(4, 15), b9.a4(9, aOe), b9.a4(10, aOd), aw.s.send(aw.s.za, b9.a8)
	}, this.oD = function(a4f) {
		b9.a3(14), b9.a4(1, 1), b9.a4(4, 14), b9.a4(9, a4f), aw.s.send(aw.s.za, b9.a8)
	}, this.oH = function(aOf, target) {
		var a7, eY = aOf.length;
		for (b9.a3(14 + 9 * eY), b9.a4(1, 1), b9.a4(4, 13), b9.a4(9, target), a7 = 0; a7 < eY; a7++) b9.a4(9, aOf[a7]);
		aw.s.send(aw.s.za, b9.a8)
	}
}

function aNF() {
	this.aOg = function() {
		b9.a3(39), b9.a4(1, 0), b9.a4(6, 16), aw.a9p.aOh(), aw.s.send(0, b9.a8)
	}, this.aOa = function(zR) {
		b9.a3(115), b9.a4(1, 0), b9.a4(6, 17), bC.rg.ua(bf.dp.data[105].value, 5), bC.rg.ua(bf.dp.data[106].value, 8), b9.a4(30, bf.dp.data[109].value), aw.s.send(zR, b9.a8)
	}, this.aLE = function() {
		b9.a3(55), b9.a4(1, 0), b9.a4(6, 18), bC.rg.uZ(bf.dp.data[110].value), aw.s.send(0, b9.a8)
	}, this.aLA = function(a23) {
		var eY = a23.p0.length;
		b9.a3(21 + 16 * eY), b9.a4(1, 0), b9.a4(6, 29), b9.a4(6, a23.rf), b9.a4(8, eY), bB.uK.uZ(a23.p0), aw.s.send(0, b9.a8)
	}, this.aJZ = function(data) {
		b9.a3(73), b9.a4(1, 0), b9.a4(6, 25), b9.a4(6, data.rf), bC.rg.ua(data.rb, 5), b9.a4(30, data.rc), aw.s.send(0, b9.a8)
	}, this.aJP = function(data) {
		b9.a3(105), b9.a4(1, 0), b9.a4(6, 27), b9.a4(6, data.rf), bC.rg.ua(data.rb, 5), b9.a4(30, data.rc), b9.aOJ(32, data.value), aw.s.send(0, b9.a8)
	}
}

function aNG() {
	this.oI = function() {
		var g6, eY = a9.jd,
			y8 = bN.result.y8,
			aOj = y8.length,
			yt = (b9.a3(40 + 16 * eY + aOj * (33 + 3 * (a9.jx < 7))), b9.a4(1, 1), b9.a4(4, 12), b9.a4(10, aOj), b9.a4(1, +(2 === a9.yD)), b9.a4(24, bN.result.yh), ac.yt);
		for (a7 = 0; a7 < eY; a7++) b9.a4(16, yt[a7]);
		var gM = ac.gM;
		for (a7 = 0; a7 < aOj; a7++) g6 = y8[a7], b9.a4(9, g6), b9.a4(24, gM[g6]);
		if (a9.jx < 7)
			for (var eW = bc.eW, k3 = bc.k3, a7 = 0; a7 < aOj; a7++) b9.a4(3, 7 & k3[eW[y8[a7]]]);
		aw.s.send(aw.s.za, b9.a8)
	}
}

function aNH() {
	this.aL3 = function(rt, ru, rv) {
		b9.a3(75), b9.a4(1, 0), b9.a4(6, 21), b9.a4(6, rt), b9.a4(1, +(ru < 0)), b9.a4(1, +(rv < 0)), b9.a4(30, Math.abs(ru)), b9.a4(30, Math.abs(rv)), aw.s.send(0, b9.a8)
	}, this.aL4 = function(rt, aL5, aL6) {
		b9.a3(18 + 16 * aL5.length + 30), b9.a4(1, 0), b9.a4(6, 22), b9.a4(6, rt), aw.a9p.aOk(aL5), b9.a4(30, aL6), aw.s.send(0, b9.a8)
	}, this.aL9 = function(rt, aL5, aL6) {
		b9.a3(73), b9.a4(1, 0), b9.a4(6, 28), b9.a4(6, rt), bC.rg.ua(aL5, 5), b9.a4(30, aL6), aw.s.send(0, b9.a8)
	}, this.aL7 = function(aKD, yz) {
		for (var eY = yz.length, hC = 0, a7 = 0; a7 < eY; a7++) hC += yz[a7].length;
		for (b9.a3(21 + 3 * eY + 16 * hC), b9.a4(1, 0), b9.a4(6, 23), b9.a4(3, aKD), b9.a4(4, eY), b9.a4(7, hC), a7 = 0; a7 < eY; a7++) b9.a4(3, yz[a7].length), bB.uK.uZ(yz[a7]);
		aw.s.send(0, b9.a8)
	}, this.aL8 = function(aKD, ru, rv) {
		b9.a3(52), b9.a4(1, 0), b9.a4(6, 24), b9.a4(3, aKD), b9.a4(1, +(ru < 0)), b9.a4(1, +(rv < 0)), b9.a4(20, Math.abs(ru)), b9.a4(20, Math.abs(rv)), aw.s.send(0, b9.a8)
	}
}

function aND() {
	this.aC3 = function(zR) {
		var username = bf.dp.data[122].value.slice(0, 20),
			username = (b9.a3(22 + 16 * username.length + 18), b9.a4(1, 0), b9.a4(6, 1), b9.a4(10, di), aw.a9p.aOk(username), b6.color.a1E(bf.s.tz()));
		b9.a4(6, username[0]), b9.a4(6, username[1]), b9.a4(6, username[2]), aw.s.zZ = zR, aw.s.send(zR, b9.a8)
	}, this.aBZ = function(aOm, a23) {
		bA.dU(), bA.a4(1, 0), bA.a4(6, 2), bA.a4(3, aOm), 2 === aOm ? bA.a4(2, a23) : 3 === aOm ? bB.uM.xk(a23, 7, bA) : 5 === aOm && (bA.a4(3, a23.id), bA.a4(3, a23.value), bA.a4(30, a23.rb)), aw.s.send(aw.s.zZ, bA.aOn())
	}
}

function aNE() {
	this.aNf = function(zR) {
		b9.a3(39), b9.a4(1, 0), b9.a4(6, 13), b9.a4(14, h.dj), b9.a4(4, u.id), b9.a4(7, u.f1), b9.a4(1, +a5), b9.a4(1, +a6), b9.a4(5, (new Date).getHours() % 24), aw.s.send(zR, b9.a8)
	}, this.aOZ = function(zR, pr, aOF) {
		b9.a3(70), b9.a4(1, 0), b9.a4(6, 14), b9.a4(3, aOF), b9.a4(30, pr[0]), b9.a4(30, pr[1]), aw.s.send(zR, b9.a8)
	}, this.aL1 = function(id) {
		b9.a3(13), b9.a4(1, 0), b9.a4(6, 15), b9.a4(6, id), aw.s.send(0, b9.a8)
	}, this.a9q = function(id, p0) {
		var eY = Math.min(p0.length, 63);
		b9.a3(19 + 16 * eY), b9.a4(1, 0), b9.a4(6, 26), b9.a4(6, id), b9.a4(6, eY), bB.uK.uZ(p0), aw.s.send(0, b9.a8)
	}, this.aOo = function(aO9, pB) {
		b9.a3(7 + 26 * pB.length), b9.a4(1, 0), b9.a4(6, 9);
		for (var a7 = 0; a7 < pB.length; a7++) b9.a4(16, pB[a7][0]), b9.a4(10, pB[a7][1]);
		aw.s.send(aO9, b9.a8)
	}, this.aNl = function(aOp, aOq) {
		b9.a3(20), b9.a4(1, 0), b9.a4(6, 19), b9.a4(1, aOp), b9.a4(12, aOq), aw.s.send(aw.s.za, b9.a8)
	}, this.aOk = function(username) {
		b9.a4(5, username.length), bB.uK.uZ(username)
	}
}

function aNd() {
	var zR, aIb, aOr, aOs = ["wss://", "/s50/", "/s51/", "/s52/"];

	function aNe() {
		aw.s.aNe(zR, aIb)
	}

	function aOx(e) {
		aw.a4f.aNn(zR, new Uint8Array(e.data))
	}

	function aOy() {}

	function aNk(e) {
		aw.s.aNk(zR, e)
	}
	this.dU = function(e0, aOt) {
		zR = e0, aIb = aOt;
		e0 = aOs[0];
		zR < aw.s.aCZ ? e0 += aw.s.aNS[zR] + aOs[1 + dg] : e0 += aw.s.aNS[0] + "/i" + (1 + dg) + (zR - aw.s.aCT) + "/", (aOr = new WebSocket(__fx.customLobby.isActive() && zR === 1 ? __fx.customLobby.getSocketURL() : e0)).binaryType =
			"arraybuffer", aOr.onopen = aNe, aOr.onmessage = aOx, aOr.onclose = aNk, aOr.onerror = aOy
	}, this.aOv = function() {
		return aOr.readyState === aOr.CONNECTING
	}, this.aBw = function() {
		return aOr.readyState === aOr.OPEN
	}, this.aNa = function() {
		return this.aOv() || this.aBw()
	}, this.aNb = function(aOt) {
		aIb = aOt
	}, this.aOb = function() {
		return aIb
	}, this.send = function(a8) {
		this.aBw() && aOr.send(a8)
	}, this.close = function(aNh) {
		this.aNa() && (aOr.close(aNh), this.qm())
	}, this.qm = function() {
		aOr.onopen = null, aOr.onmessage = null, aOr.onclose = null, aOr.onerror = null
	}
}

function dD() {
	var aOz = !1,
		a50 = 0,
		a1 = 0,
		rk = 0,
		gap = 0,
		canvas = null,
		wX = null,
		a0r = null;

	function aP1() {
		for (var aP7, aP5 = 0, eY = 0, et = Math.floor(a1 / 2), dz = Math.floor(rk / 2), aP6 = 1.5 * Math.PI, a7 = a9.vb; 0 <= a7; a7--) eY += a0r[a7], 0 === a0r[a7] && aP5++;
		if (aOz = !1, wX.clearRect(0, 0, a1, a1), wX.fillStyle = b7.mU, wX.fillRect(0, 0, a1, a1), wX.fillStyle = b7.mX, wX.fillRect(0, 0, a1, gap), wX.fillRect(0, 0, gap, a1), wX.fillRect(a1 - gap, 0, gap, a1), wX.fillRect(0, a1 - gap, a1, gap), 0 <
			eY)
			if (aP5 === a9.vb) {
				for (a7 = a9.vb; 0 <= a7; a7--)
					if (0 < a0r[a7]) {
						! function(a7, et, dz) {
							wX.fillStyle = bc.aPE[bc.k3[a7]], wX.beginPath(), wX.arc(et, et, dz, 0, 2 * Math.PI), wX.fill()
						}(a7, et, dz);
						break
					}!
				function(et) {
					var fontSize = et / 3;
					wX.font = b6.pJ.rF(1, fontSize), wX.fillStyle = b7.mX, wX.fillText("100%", et, et + .1 * fontSize)
				}(et)
			} else {
				for (a7 = 0; a7 <= a9.vb; a7++) 0 < a0r[a7] && (! function(a7, et, dz, aP6, aP7) {
					wX.fillStyle = bc.aPE[bc.k3[a7]], wX.beginPath(), wX.arc(et, et, dz, aP6, aP7), wX.lineTo(et, et), wX.fill()
				}(a7, et, dz, aP6, aP7 = aP6 + 2 * Math.PI * a0r[a7] / eY), function(et, dz, aP6, aP7) {
					var f0 = (aP7 - aP6) / (2 * Math.PI),
						fontSize = +dz * Math.min(f0, .37);
					fontSize < 8 || (aP6 = (aP6 + aP7) / 2, aP7 = Math.floor(100 * f0 + .5) + "%", dz *= .525 - Math.max(.6 * (f0 - .7), 0), wX.font = b6.pJ.rF(1, fontSize), wX.fillStyle = b7.mX, wX.fillText(aP7, et + Math.cos(aP6) * dz, et +
						Math.cos(aP6 + 1.5 * Math.PI) * dz))
				}(et, dz, aP6, aP7), 0 !== a7 && aPC(et, dz, aP6), aP6 = aP7);
				aPC(et, dz, 1.5 * Math.PI)
			}!
		function(et, dz) {
			wX.beginPath(), wX.arc(et, et, dz, 0, 2 * Math.PI), wX.stroke()
		}(et, dz)
	}

	function aPC(et, dz, aPF) {
		wX.beginPath(), wX.moveTo(et, et), wX.lineTo(et + Math.cos(aPF) * dz, et + Math.cos(aPF + 1.5 * Math.PI) * dz), wX.stroke()
	}
	this.dU = function() {
		if (a9.ie) {
			a50 = 0, a0r = new Uint32Array(a9.vb + 1);
			for (var a7 = a9.vb; 0 <= a7; a7--) a0r[a7] = 0;
			for (a7 = ah.je - 1; 0 <= a7; a7--) a0r[bc.eW[ah.jg[a7]]] += 1;
			this.resize()
		} else a0r = wX = canvas = null
	}, this.a5n = function() {
		return a1
	}, this.resize = function() {
		a9.ie && (a1 = Math.floor(u.v.sU() && !a9.m0 ? .18 * at.min : .13 * at.pL), a1 = (a1 *= 1 + (.5 + .2 * u.v.sU()) * a9.m0) + a1 % 2, rk = Math.floor(7 * a1 / 8), (canvas = canvas || document.createElement("canvas")).width = a1, canvas
			.height = a1, wX = canvas.getContext("2d", {
				alpha: !0
			}), gap = Math.max(1, .015 * a1), wX.lineWidth = gap, wX.strokeStyle = b7.mX, b6.pJ.textAlign(wX, 1), b6.pJ.textBaseline(wX, 1), aP1())
	}, this.yp = function() {
		var dk, kr = this.ks();
		return bc.k3[kr] || (kr = function() {
			for (var kr = -1, a7 = a9.vb; 1 <= a7; a7--)(-1 === kr || a0r[a7] > a0r[kr]) && (kr = a7);
			return kr
		}(), dk = ac.gM[kv[0]], -1 !== kr && a0r[kr] > dk) ? a0r[kr] : dk
	}, this.zD = function() {
		return a50 = 31, this.iS(), this.ks()
	}, this.ks = function() {
		for (var kr = 0, a7 = a9.vb; 0 < a7; a7--) a0r[a7] > a0r[kr] && (kr = a7);
		return kr
	}, this.kt = function(aP3) {
		for (var g1 = 0, jf = ah.jg, eW = bc.eW, eY = ah.je, fC = bK.fC, a7 = 0; a7 < eY; a7++) {
			var g6 = jf[a7];
			eW[g6] === aP3 && (fC[g1++] = g6)
		}
		bK.f4[0] = g1
	}, this.iS = function() {
		if (a9.ie && 32 <= ++a50) {
			a50 = 0;
			for (var a7 = a9.vb; 0 <= a7; a7--) a0r[a7] = 0;
			for (a7 = ah.je - 1; 0 <= a7; a7--) a0r[bc.eW[ah.jg[a7]]] += ac.gM[ah.jg[a7]];
			aOz = !0
		}
	}, this.lH = function() {
		a9.ie && aOz && aP1()
	}, this.tA = function() {
		a9.ie && (a9.m0 ? tB.drawImage(canvas, bY.gap, bY.gap) : tB.drawImage(canvas, bY.gap, a5o + 2 * bY.gap))
	}
}

function cw() {
	function aPH(key) {
		var aMZ;
		return "undefined" == typeof URLSearchParams || (aMZ = window.location.search, "string" != typeof(aMZ = new URLSearchParams(aMZ).get(key))) || aMZ.length < 1 ? null : aMZ
	}
	this.dd = function() {
		if (0 !== u.id) return !1;
		if (! function() {
				var value = aPH("account");
				if (!value && !(value = aPH("a"))) return void bE.clear();
				return bE.clear(), n.o(8, n.rd, new re(1e3, {
					rf: 0,
					rb: value,
					rc: 0
				})), 1
			}()) {
			var value = aPH("replay");
			if (!this.clear()) return !1;
			if (!value) return !1;
			n.o(3, 0, value)
		}
		return !0
	}, this.clear = function() {
		var zN = new URL(window.location.href);
		zN.search = "";
		try {
			return history.replaceState(null, "", zN.toString()), !0
		} catch (e) {
			console.log("error 352: " + e)
		}
		return !1
	}, this.aJj = function(key, value) {
		if (0 === u.id) try {
			var zN = new URL(window.location.href),
				g6 = zN.searchParams;
			g6.set(key, value), zN.search = g6.toString(), history.replaceState(null, "", zN.toString())
		} catch (e) {
			console.log("error 358: " + e)
		}
	}
}

function cd() {
	var aPJ, g;
	this.dU = function() {
		for (var a7 = (g = new Uint16Array(101)).length - 1; 0 <= a7; a7--) g[a7] = bH.dl(32768 * a7, 100);
		this.a2k(0)
	}, this.value = function(g6) {
		return g[g6]
	}, this.aGu = function() {
		return bH.dl(aPJ - 1, 2)
	}, this.a2k = function(aGZ) {
		aPJ = 2 * aGZ % 32768 + 1
	}, this.random = function() {
		return aPJ = 167 * aPJ % 32768
	}, this.iv = function(lP) {
		return bH.dl(lP * this.random(), 32768)
	}, this.jV = function(g6) {
		return 0 !== g6 && this.random() < this.value(g6)
	}, this.iE = function(er, es) {
		return er + this.iv(es - er)
	}
}

function cs() {
	this.oY = new aPK, this.a2v = new aPL, this.aEK = new aPM, this.dU = function() {
		a9.gi || this.oY.dU()
	}, this.iS = function() {
		a9.gi || (this.oY.iS(), 3 !== n.rd) || bb.ja() % 15 != 5 && 2 !== a9.yG || n.aCp().aMa()
	}, this.aMd = function() {
		0 === a9.yG && aW.aCE(), a9.a2f.a32(), a9.data.canvas = null, aw.s.close(aw.s.za, 3257), aw.s.za = 0, a9.data.isReplay = 1, a9.a2i()
	}, this.aMc = function(p0) {
		var a7 = p0.indexOf("=");
		return 0 <= a7 ? p0.substring(a7 + 1) : p0
	}, this.aMb = function(p0) {
		return "https://territorial.io/?replay=" + p0
	}
}

function aPK() {
	this.aPO = null, this.aPP = null, this.aPQ = null, this.aPR = null, this.aPS = null, this.aPT = null, this.a2u = "";
	var aPU = 0;
	this.dU = function() {
		this.aPO = [], this.aPP = [], this.aPQ = [], this.aPR = [], this.aPS = [0], this.aPT = [0], aPU = 0, this.a2u = ""
	}, this.oZ = function(id, fG, fI, fK) {
		a9.gi || 2 === a9.yG || (0 === this.aPS[aPU] && (this.aPT[aPU] ? (this.aPS.push(1), this.aPT.push(0), aPU++) : this.aPS[aPU] = 1), this.aPO.push(id), this.aPP.push(fG), this.aPQ.push(void 0 === fI ? 0 : fI), this.aPR.push(void 0 === fK ?
			0 : fK), this.aPT[aPU]++)
	}, this.iS = function() {
		0 === this.aPS[aPU] ? this.aPT[aPU]++ : (this.aPS.push(0), this.aPT.push(0), aPU++)
	}
}

function aPM() {
	var aPV = 0;

	function aPZ(p0, id) {
		aPV || (id ? 1 === id ? aJ.a46 = L(374) + ": " + p0 : n.o(4, 3, new p(L(375), p0, 1)) : n.o(4, 3, new p("⚠️ " + L(373), p0, 1)))
	}
	this.ue = function(p0, aPW) {
		var pB;
		return aPV = aPW, bC.rg.uW(bC.rg.uU(bC.rg.uS(p0))), aJ.a46 = "", !(! function() {
			if (bD.size < 10) aPZ("File Too Small");
			else {
				var aPb = bD.oK(12),
					aOq = (aPb !== h.rVersion && aPZ("Incompatible Version " + aPb + " " + h.rVersion, 1), bD.oK(12)),
					aPc = bD.oK(31);
				if (aPc !== bD.size) aPZ("Size Error: " + aPc + " " + bD.size);
				else if (function(j7, aPb) {
						for (var g6 = bD.a8, eY = bD.size, aOq = aPb, a7 = 3; a7 < eY; a7++) aOq = aOq + g6[a7] & 4095;
						return aOq === j7 || (aPZ("Hash Error: " + aOq + " " + j7 + " " + eY), !1)
					}(aOq, aPb)) return 1
			}
			return
		}() || (aPW = bD, (pB = a9.data = new a2e).mapType = aPW.oK(2), pB.mapProceduralIndex = aPW.oK(8), pB.mapRealisticIndex = aPW.oK(8), pB.mapSeed = aPW.oK(14), pB.mapName = aPW.aPe(5), 2 === pB.mapType && aPW.aPf(), pB
			.passableWater = aPW.oK(1), pB.passableMountains = aPW.oK(1), pB.playerCount = aPW.oK(10), pB.humanCount = aPW.oK(10), pB.selectedPlayer = aPW.oK(9), pB.gameMode = aPW.oK(1), pB.playerMode = aPW.oK(2), pB.battleRoyaleMode =
			aPW.oK(2), pB.numberTeams = aPW.oK(4), pB.isZombieMode = aPW.oK(1), pB.isContest = aPW.oK(1), pB.isReplay = aPW.oK(1), pB.elo = aPW.aPg(2, 14, 2), pB.colorsType = aPW.oK(1), pB.colorsPersonalized = aPW.oK(1), pB.colorsData =
			aPW.aPg(10, 18, 512), pB.selectableColor = aPW.oK(1), pB.teamPlayerCount = aPW.aPg(4, 10, 9), pB.neutralBots = aPW.oK(1), pB.botDifficultyType = aPW.oK(2), pB.botDifficultyValue = aPW.oK(4), pB.botDifficultyTeam = aPW.aPg(4,
				4, 9), pB.botDifficultyData = aPW.aPg(10, 4, 512), pB.spawningType = aPW.oK(2), pB.spawningSeed = aPW.oK(14), pB.spawningData = aPW.aPg(11, 12, 1024), pB.selectableSpawn = aPW.oK(1), pB.playerNamesType = aPW.oK(2), pB
			.playerNamesData = aPW.aPh(10, 5, 512), pB.selectableName = aPW.oK(1), pB.aIncomeType = aPW.oK(2), pB.aIncomeValue = aPW.oK(8), pB.aIncomeData = aPW.aPg(10, 8, 512), pB.tIncomeType = aPW.oK(2), pB.tIncomeValue = aPW.oK(8), pB
			.tIncomeData = aPW.aPg(10, 8, 512), pB.iIncomeType = aPW.oK(2), pB.iIncomeValue = aPW.oK(8), pB.iIncomeData = aPW.aPg(10, 8, 512), pB.sResourcesType = aPW.oK(2), pB.sResourcesValue = aPW.oK(11), pB.sResourcesData = aPW.aPg(10,
				11, 512), ! function() {
				var hf = bD,
					uf = hf.oK(5),
					aPi = hf.oK(30),
					aPj = hf.oK(30);
				if (aPi + aPj > 8 * hf.size) return void aPZ("Corrupted File");
				return function(eY) {
						var aPm = new Uint8Array(eY),
							aPn = new Uint16Array(eY),
							aPo = new Uint32Array(eY),
							aPp = new Uint32Array(eY);
						b5.oY.aPO = aPm, b5.oY.aPP = aPn, b5.oY.aPQ = aPo, b5.oY.aPR = aPp;
						for (var a7 = 0; a7 < eY; a7++) {
							var id = bD.oK(4);
							aPm[a7] = id, aPn[a7] = bD.oK(9), 0 === id ? aPo[a7] = bD.oK(22) : 1 === id ? (aPo[a7] = bD.oK(10), aPp[a7] = bD.oK(10)) : 2 === id ? (aPo[a7] = bD.oK(10), aPp[a7] = bD.oK(9)) : 3 === id || 4 === id ? (aPo[
								a7] = bD.oK(10), aPp[a7] = bD.oK(22)) : 5 === id || 6 === id ? aPo[a7] = bD.oK(10) : 7 === id ? aPo[a7] = bD.oK(1) : 10 === id && (aPo[a7] = bD.oK(20), aPp[a7] = bD.oK(22))
						}
					}(aPi),
					function(eY, uf) {
						var aPS = new Uint8Array(eY),
							aPT = new Array(eY);
						aPT.fill(0), b5.oY.aPS = aPS, b5.oY.aPT = aPT;
						for (var a7 = 0; a7 < eY; a7++) aPS[a7] = bD.oK(1), aPT[a7] = bD.oK(uf)
					}(aPj, uf), 1
			}()) || (bD.e0 < 8 * bD.size - 13 || bD.e0 > 8 * bD.size ? (aPZ("Out Of Bounds Error: " + bD.e0 + " " + 8 * bD.size), 1) : (b5.oY.a2u = p0, 2 === a9.data.mapType && (aPZ("Load base64 image...", 2), 1))))
	}, this.aEL = function(aDv, aPa) {
		var a19 = document.createElement("canvas"),
			hH = a19.getContext("2d");
		if (a19.width = aDv.width, a19.height = aDv.height, hH.drawImage(aDv, 0, 0), aPV || aPa) return a9.yG ? void 0 : (a9.data.canvas = a19, a9.data.mapType = 2, n.r(), void n.o(19));
		b5.aMd()
	}
}

function aPL() {
	this.xk = function() {
		var uf = function() {
				for (var aPT = b5.oY.aPT, eY = aPT.length, max = 0, a7 = 0; a7 < eY; a7++) max = Math.max(max, aPT[a7]);
				return um(Math.max(max, 1))
			}(),
			a1 = (pB = a9.data, (a1 = bA).dU(), a1.a4(12, h.rVersion), a1.e0 += 43, a1.a4(2, pB.mapType), a1.a4(8, pB.mapProceduralIndex), a1.a4(8, pB.mapRealisticIndex), a1.a4(14, pB.mapSeed), a1.aPw(pB.mapName, 5), 2 === pB.mapType && a1.aPx(pB
				.canvas), a1.a4(1, pB.passableWater), a1.a4(1, pB.passableMountains), a1.a4(10, pB.playerCount), a1.a4(10, pB.humanCount), a1.a4(9, pB.selectedPlayer), a1.a4(1, pB.gameMode), a1.a4(2, pB.playerMode), a1.a4(2, pB
				.battleRoyaleMode), a1.a4(4, pB.numberTeams), a1.a4(1, pB.isZombieMode), a1.a4(1, pB.isContest), a1.a4(1, pB.isReplay), a1.db(pB.elo, 2, 14), a1.a4(1, pB.colorsType), a1.a4(1, pB.colorsPersonalized), a1.db(pB.colorsData, 10,
				18), a1.a4(1, pB.selectableColor), a1.db(pB.teamPlayerCount, 4, 10), a1.a4(1, pB.neutralBots), a1.a4(2, pB.botDifficultyType), a1.a4(4, pB.botDifficultyValue), a1.db(pB.botDifficultyTeam, 4, 4), a1.db(pB.botDifficultyData, 10,
				4), a1.a4(2, pB.spawningType), a1.a4(14, pB.spawningSeed), a1.db(pB.spawningData, 11, 12), a1.a4(1, pB.selectableSpawn), a1.a4(2, pB.playerNamesType), a1.aPy(pB.playerNamesData, 10, 5), a1.a4(1, pB.selectableName), a1.a4(2, pB
				.aIncomeType), a1.a4(8, pB.aIncomeValue), a1.db(pB.aIncomeData, 10, 8), a1.a4(2, pB.tIncomeType), a1.a4(8, pB.tIncomeValue), a1.db(pB.tIncomeData, 10, 8), a1.a4(2, pB.iIncomeType), a1.a4(8, pB.iIncomeValue), a1.db(pB
				.iIncomeData, 10, 8), a1.a4(2, pB.sResourcesType), a1.a4(11, pB.sResourcesValue), a1.db(pB.sResourcesData, 10, 11), ! function(uf) {
				var a1 = bA,
					aPO = b5.oY.aPO,
					fG = b5.oY.aPP,
					fI = b5.oY.aPQ,
					fK = b5.oY.aPR,
					eY = aPO.length;
				a1.a4(5, uf), a1.a4(30, eY), a1.a4(30, b5.oY.aPT.length);
				for (var a7 = 0; a7 < eY; a7++) {
					var et = aPO[a7];
					a1.a4(4, et), a1.a4(9, fG[a7]), 0 === et ? a1.a4(22, fI[a7]) : 1 === et ? (a1.a4(10, fI[a7]), a1.a4(10, fK[a7])) : 2 === et ? (a1.a4(10, fI[a7]), a1.a4(9, fK[a7])) : 3 === et || 4 === et ? (a1.a4(10, fI[a7]), a1.a4(22, fK[
						a7])) : 5 === et || 6 === et ? a1.a4(10, fI[a7]) : 7 === et ? a1.a4(1, fI[a7]) : 10 === et && (a1.a4(20, fI[a7]), a1.a4(22, fK[a7]))
				}
			}(uf), ! function(uf) {
				for (var a1 = bA, aPS = b5.oY.aPS, aPT = b5.oY.aPT, eY = aPS.length, a7 = 0; a7 < eY; a7++) a1.a4(1, aPS[a7]), a1.a4(uf, aPT[a7])
			}(uf), bA.e0),
			pB = bH.dl(a1 - 1, 6) + 1,
			uf = (b9.aOK(6 * pB) !== bA.g.length && bA.g.push(0), ! function() {
				var a1 = bA;
				a1.e0 = 24, a1.a4(31, a1.g.length), a1.e0 = 12, a1.a4(12, function() {
					for (var g = bA.g, eY = g.length, aOq = h.rVersion, a7 = 3; a7 < eY; a7++) aOq = aOq + g[a7] & 4095;
					return aOq
				}())
			}(), bD.dU(bA.g), bB.rg.rh(bB.rg.ri(pB)));
		return bD.zh(), bA.dU(), uf
	}
}

function ci() {
	var et, bo = !1,
		aQ0 = !1,
		aQ1 = -1e4,
		aQ2 = -1,
		aQ3 = 0;

	function resize(aQ7) {
		et = 0, aX.s1() && (aQ5(aQ7) || bo) && (bo = !1, bY.resize(), bS.a9Q.resize(), aU.dU(), bU.dU(), aV.resize(), aP.resize(), aK.resize(), n.resize(), 1 <= a9.yG ? (aR.resize(!1), aQ.resize(), aS.resize(), aO.resize(), aN.resize(), aJ.resize(),
			aI.resize(), b8.resize(), aq.resize(), aL.resize(), aM.resize(), aH.resize(), ba.resize(), ab.resize(), aT.resize(), bd.resize(), aO.a6p()) : (aW.aCG(), aW.aCH()), bb.dc = !0)
	}

	function aQ4(f0) {
		return f0 && 128 < f0 ? Math.floor(f0) : 128
	}

	function aQ5(aQ7) {
		var a1, j7, aQ9, rk, a6E;
		if (!(0 < at.rM)) return rk = aQ4(document.documentElement.clientWidth), a6E = aQ4(window.visualViewport && 2 !== u.id ? window.visualViewport.height : document.documentElement.clientHeight), a1 = rk, j7 = a6E, aQ9 = 0 !== u.id || a1 < j7 ?
			700 : 1200, aQ9 = Math.min(aQ9 / ((a1 + j7) / 2), 1), aQ9 = 0 === bf.dp.data[1].value ? 2 * aQ9 / 3 : Math.min(aQ9 + (bf.dp.data[1].value - 1) * (1 - aQ9) / 2, 1), at.pP = (window.devicePixelRatio || 1) * aQ9, __fx.hoveringTooltip
			.canvasPixelScale = at.pP, aQ7 && !aQ0 ? (aQ0 = !0, document.body.removeChild(zq)) : aQ0 && (aQ0 = !1, document.body.appendChild(zq)), a1 = Math.floor(.5 + rk * at.pP), j7 = Math.floor(.5 + a6E * at.pP), a1 !== at.a1 || j7 !== at.j7 ?
			(at.a1 = a1, at.j7 = j7, at.min = a94(a1, j7), at.max = a4L(a1, j7), at.pL = bH.dl(a1 + j7, 2), at.t7 = a1 / j7, zq.width = a1, zq.height = j7, zq.style.width = rk + "px", zq.style.height = a6E + "px", aQ2 = bb.ln + 1e3, 1) : void 0
	}
	this.a1 = 0, this.j7 = 0, this.min = 0, this.max = 0, this.pL = 0, this.t7 = 1, this.pP = 1, this.rM = 0, this.dV = function() {
		this.a1 = aQ4(document.documentElement.clientWidth) + 2, this.j7 = aQ4(document.documentElement.clientHeight) + 2
	}, this.dU = function() {
		et = 1, zq = document.getElementById("canvasA"), (tB = zq.getContext("2d", {
			alpha: __fx.makeMainMenuTransparent
		})).imageSmoothingEnabled = !1, aQ5(0)
	}, this.iS = function() {
		ay.iS(), 50 <= ++et && resize(0), -1 === aQ2 || bb.ln < aQ2 || (aQ2 = -1, 2e3 * ++aQ3 >= bb.ln + 8e3 ? console.log("error 3748") : u.v.setState(15))
	}, this.df = function(hU) {
		bo = !0, resize(hU)
	}, this.a0W = function() {
		aQ1 + 1e3 > bb.ln || (aQ1 = bb.ln, resize(0))
	}
}

function dA() {
	this.aOY = new aQB, this.yn = new aQC
}

function aQC() {
	this.yo = function() {
		for (var g6, eY = ah.je, y7 = ah.jg, yt = ac.yt, aQD = this.aDe(), a7 = 0; a7 < eY; a7++) g6 = y7[a7], aY.y9(g6) && (yt[g6] = aQD);
		var oe = ac.oe,
			ia = ac.ia,
			ib = ac.ib,
			yx = ac.yx,
			eY = a9.jd;
		for (a7 = 0; a7 < eY; a7++)(0 === yx[a7] || ib[a7] < 1 || 2 * oe[a7] > 3 * (ia[a7] + ib[a7])) && (yt[a7] = 0);
		var yg = 0;
		for (a7 = 0; a7 < eY; a7++) yg += 0 < yt[a7];
		return yg
	}, this.aDe = function() {
		return Math.min(65535, bb.ja())
	}
}

function aQB() {
	function aQH(g, f0, k2) {
		for (var a7 = 0; a7 < 256; a7++) g[a7] = (g[a7] + (f0 >> (a7 + k2) % 30 & 1)) % 256
	}
	this.iS = function(aQE, aQF) {
		var g = new Uint8Array(256);
		return function(g, aQE, aQF) {
				var a7, aQJ = 3 + (4 + aQE) % 32768,
					aQK = 12 + aQF % 32768,
					aQL = 17 + ((aQE & aQF) + (aQE | aQF) + aQE) % 32768;
				for (a7 = 0; a7 < 256; a7++) aQJ = 1 + aQJ * aQK % aQL, g[a7] = aQJ % 256
			}(g, aQE, aQF), aQH(g, aQE, 2), aQH(g, aQF, 7),
			function(g) {
				var a7, f0, e0 = 0;
				for (a7 = 0; a7 < 3e4; a7++) f0 = g[e0], g[e0] = (f0 + a7 + g[(e0 + a7) % 256]) % 256, e0 = (f0 + a7 + e0 + (f0 & e0)) % 256
			}(g),
			function(g) {
				var a7, a6E = 1,
					sN = 1;
				for (a7 = 0; a7 < 256; a7 += 2) a6E = (1 + a6E) * (g[a7] + 1) % 1073741824, sN = (1 + sN) * (g[a7 + 1] + 1) % 1073741824;
				return [a6E, sN]
			}(g)
	}
}

function cf() {
	var aQM, aQN, h1, aQO;
	this.dU = function() {
		var a7, ef, eh, aOl, aQP, a1, j7, wX, hE, uw, f0, g6, eo, er, a3U;
		if (function() {
				if (h1 = !0, aQO = "rgb(" + bO.uu[0] + "," + bO.uu[1] + "," + bO.uu[2] + ")", bO.aGh(bO.eE)) return 1;
				return h1 = !1, 0
			}()) aQN = null;
		else {
			for (aQM = bH.dl(96, 4), aQP = 1 === bO.eE ? (aOl = 0, 160) : (aOl = 128, 32), aQO = "rgb(" + aOl + "," + aOl + "," + aOl + ")", aQN = new Array(4), a7 = 3; 0 <= a7; a7--) {
				if (aQN[a7] = document.createElement("canvas"), a1 = a7 % 2 == 0 ? bO.ej : aQM, j7 = a7 % 2 == 0 ? aQM : bO.ek + 2 * aQM, aQN[a7].width = a1, aQN[a7].height = j7, uw = (hE = (wX = aQN[a7].getContext("2d", {
						alpha: !1
					})).getImageData(0, 0, a1, j7)).data, a7 % 2 == 0)
					for (eh = aQM - 1; 0 <= eh; eh--)
						for (f0 = aQP + Math.floor((eh + 1) * (aOl - aQP) / (aQM + 1)), ef = a1 - 1; 0 <= ef; ef--) uw[g6 = 4 * ((0 === a7 ? aQM - eh - 1 : eh) * a1 + ef)] = f0, uw[g6 + 1] = f0, uw[g6 + 2] = f0, uw[g6 + 3] = 255;
				else {
					for (ef = aQM - 1; 0 <= ef; ef--)
						for (f0 = aQP + Math.floor((ef + 1) * (aOl - aQP) / (aQM + 1)), eh = j7 - 1 - aQM; aQM <= eh; eh--) uw[g6 = 4 * (eh * a1 + (3 === a7 ? aQM - ef - 1 : ef))] = f0, uw[g6 + 1] = f0, uw[g6 + 2] = f0, uw[g6 + 3] = 255;
					for (er = 1; 0 <= er; er--)
						for (ef = aQM - 1; 0 <= ef; ef--)
							for (eh = aQM - 1; 0 <= eh; eh--) eo = (Math.pow(ef * ef + eh * eh, .5) + 1) / (aQM + 1), f0 = aQP + Math.floor((1 < eo ? 1 : eo) * (aOl - aQP)), uw[g6 = 4 * ((0 === er ? aQM - eh - 1 : eh + er * (j7 - aQM)) * a1 + (
								1 === a7 ? ef : aQM - ef - 1))] = f0, uw[g6 + 1] = f0, uw[g6 + 2] = f0, uw[g6 + 3] = 255
				}
				wX.putImageData(hE, 0, 0)
			}
			a3U = aQP, bO.up.fillStyle = "rgb(" + a3U + "," + a3U + "," + a3U + ")", bO.up.fillRect(0, 0, bO.ej, 1), bO.up.fillRect(0, bO.ek - 1, bO.ej, 1), bO.up.fillRect(0, 0, 1, bO.ek), bO.up.fillRect(bO.ej - 1, 0, 1, bO.ek)
		}
	}, this.wR = function() {
		var er = h1 ? 0 : -aQM;
		aIK(er, er, bO.ej - 2 * er, bO.ek - 2 * er, bW.aQS, bW.aQT, bW.aQU, bW.aQV) || (tB.fillStyle = aQO, tB.fillRect(0, 0, at.a1, at.j7))
	}, this.tA = function() {
		h1 || (aIJ(0, -aQM, bO.ej, aQM, bW.aQS, bW.aQT, bW.aQU, bW.aQV) && tB.drawImage(aQN[0], bW.aQW, bW.aQX - aQM), aIJ(bO.ej, -aQM, aQM, bO.ek + 2 * aQM, bW.aQS, bW.aQT, bW.aQU, bW.aQV) && tB.drawImage(aQN[1], bW.aQW + bO.ej, bW.aQX - aQM),
			aIJ(0, bO.ek, bO.ej, aQM, bW.aQS, bW.aQT, bW.aQU, bW.aQV) && tB.drawImage(aQN[2], bW.aQW, bW.aQX + bO.ek), aIJ(-aQM, -aQM, aQM, bO.ek + 2 * aQM, bW.aQS, bW.aQT, bW.aQU, bW.aQV) && tB.drawImage(aQN[3], bW.aQW - aQM, bW.aQX - aQM))
	}
}

function cz() {
	this.h2 = new aQY, this.aDc = new aQZ, this.wU = new aQa, this.s = new aQb, this.i4 = new aQc, this.a3U = new aQd, this.aQe = new aQf, this.jR = new aQg, this.kJ = new aQh, this.aQi = new aQj, this.dU = function() {
		this.wU.dU(), this.s.dU(), this.i4.dU(), this.a3U.dU(), this.aQi.dU()
	}, this.tA = function() {
		this.aQi.tA(), this.wU.tA()
	}
}

function aQg() {
	this.iS = function(player) {
		var oV;
		return !!a9.data.passableWater && 0 !== ac.gF[player].length && bJ.s.oW !== bJ.s.ju && !((oV = bJ.s.oV[player]) >= aA.ju[aA.im[player]] || oV === bJ.s.oj || !b6.fu.oc(player, aA.js[aA.im[player]], 32, 0) || !aj.iH.iS(player) && !aj.iJ.iS(
			player) || ! function(a1h) {
			var aQm = bK.fA[1] + bI.hJ[bK.fA[2] - 1] << 2;
			if (aY.eP(aQm)) return 1;
			return aQm = aY.eQ(aQm), a1h !== aQm && !!eR(a1h, aQm)
		}(player)) && function(player) {
			return b6.fu.og(player), bJ.s.om(player), !0
		}(player)
	}
}

function aQY() {
	function aQu(a7, kj, kk) {
		var aQw, aQv;
		if (!(a7 < 0)) return aQv = bJ.s.lw[a7], aQw = bI.hi(aQv), aQv = bI.hl(aQv), a7 = 20 * (.9 + .1 * Math.log10(bJ.s.a4e[a7])), a7 = Math.max(a7, bI.hy(b6.pJ.ry(.02, 1.7))), bH.aIR(bI.hh(kj), bI.hk(kk), aQw, aQv, a7)
	}

	function aQo(aQn) {
		var aQz = 4 + .03 * (1 + 1.5 * u.v.sU()) * at.pL / hw;
		return bI.hm(aQn, bK.fA[1]) < aQz
	}
	this.h3 = function(player, aQn) {
		return !!(a9.data.passableWater && bI.hz(aQn) && bJ.s.oW !== bJ.s.ju && bJ.s.oV[player] !== bJ.s.oj && 0 !== ac.gF[player].length && bJ.kJ.kK(player, aQn) && aQo(aQn))
	}, this.np = function(player, lt, aQn) {
		return !!(bI.hz(aQn) && this.on(player, lt) && bJ.kJ.oo(aQn) && aQo(aQn))
	}, this.on = function(player, id) {
		for (var aQp, ru = player << 3, rv = ru + bJ.s.oV[player], aQq = bJ.s.aQq, aQr = bJ.s.aQr, a7 = ru; a7 < rv; a7++)
			if (id === aQr[aQp = aQq[a7]]) return bK.fA[3] = aQp, !0;
		return !1
	}, this.no = function(eK) {
		var a3V = bJ.a3U.a3V;
		return !!this.on(a9.eI, a3V) && (b4.gv.no(a3V, eK), !0)
	}, this.a3X = function(kj, kk) {
		var player = a9.eI,
			eY = bJ.s.oV[player];
		if (0 === eY) return !1;
		for (var aQq = bJ.s.aQq, lw = bJ.s.lw, ru = player << 3, aQs = 80, aKS = -1, a7 = ru + eY - 1; ru <= a7; a7--) {
			var aQt = aQq[a7],
				eo = bI.hc(kj, kk, lw[aQt]);
			eo < aQs && (aQs = eo, aKS = aQt)
		}
		return !!aQu(aKS, kj, kk) && (bJ.a3U.a3V = bJ.s.aQr[aKS], bi.ol.a3X(), !0)
	}, this.a3e = function(kj, kk) {
		var eY = bJ.s.oW;
		if (eY < 1) return -1;
		for (var lw = bJ.s.lw, aQs = 80, aKS = -1, a7 = 0; a7 < eY; a7++) {
			var eo = bI.hc(kj, kk, lw[a7]);
			eo < aQs && (aQs = eo, aKS = a7)
		}
		return aQu(aKS, kj, kk) ? aKS : -1
	}, this.lv = function(player, id) {
		for (var ru = player << 3, rv = ru + bJ.s.oV[player], aQr = bJ.s.aQr, aQq = bJ.s.aQq, a7 = ru; a7 < rv; a7++) {
			var aQt = aQq[a7];
			if (aQr[aQt] === id) return aQt
		}
		return -1
	}, this.aDZ = function(player) {
		for (var ru = player << 3, rv = ru + bJ.s.oV[player], aQq = bJ.s.aQq, a4e = bJ.s.a4e, im = 0, a7 = ru; a7 < rv; a7++) im += a4e[aQq[a7]];
		return im
	}, this.m1 = function(player) {
		return 0 === bJ.s.oV[player] ? -1 : bJ.s.aQq[player << 3]
	}
}

function aQZ() {
	this.aDd = function(player) {
		for (var aQq = bJ.s.aQq, ru = player << 3, a7 = ru + bJ.s.oV[player] - 1; ru <= a7; a7--) this.aR0(aQq[a7])
	}, this.aR0 = function(aR1) {
		var s = bJ.s,
			aR2 = s.oW - 1,
			aR3 = s.a4d[aR1],
			aR4 = s.aR5[aR1],
			aR6 = s.lw[aR1];
		s.oW = aR2, s.a4d[aR1] = s.a4d[aR2], s.aR7[aR1] = s.aR7[aR2], s.aR8[aR1] = s.aR8[aR2], s.lw[aR1] = s.lw[aR2], s.aR9[aR1] = s.aR9[aR2], s.a4e[aR1] = s.a4e[aR2], s.aR5[aR1] = s.aR5[aR2], s.aQr[aR1] = s.aQr[aR2], s.aRA[aR1] = s.aRA[aR2], s
			.aRB[aR1] = s.aRB[aR2], s.aRC[aR1] = s.aRC[aR2], s.aQq[s.a4d[aR1]] = aR1,
			function(aPF) {
				var player = aPF >> 3,
					s = bJ.s,
					eY = s.oV[player] - 1,
					aRF = (player << 3) + eY;
				s.oV[player] = eY, aRF !== aPF && (s.aQq[aPF] = s.aQq[aRF], s.a4d[s.aQq[aPF]] = aPF)
			}(aR3), bJ.i4.i4[bI.i3(s.lw[aR1])][s.aR5[aR1]] = aR1, aR2 = bI.i3(aR6), aR3 = aR4, aR2 = bJ.i4.i4[aR2], s = aR2.pop(), aR3 !== aR2.length && (aR2[aR3] = s, bJ.s.aR5[s] = aR3)
	}
}

function aQa() {
	var aRH, wv = 8,
		aRI = new Array(2);

	function aRJ(e0) {
		var hB = wv + 4,
			a19 = b6.pJ.ul(hB, hB),
			hH = b6.pJ.getContext(a19, !0),
			hE = b6.pJ.getImageData(hH, hB, hB),
			uw = hE.data;
		return aRK(uw, hB + 1, e0), aRK(uw, hB + 2, e0), aRK(uw, 2 * hB + 1, e0), aRK(uw, 2 * hB - 3, e0), aRK(uw, 2 * hB - 2, e0), aRK(uw, 3 * hB - 2, e0), aRK(uw, hB * (hB - 3) + 1, e0), aRK(uw, hB * (hB - 2) + 1, e0), aRK(uw, hB * (hB - 2) + 2,
			e0), aRK(uw, hB * (hB - 2) - 2, e0), aRK(uw, hB * (hB - 1) - 3, e0), aRK(uw, hB * (hB - 1) - 2, e0), hH.putImageData(hE, 0, 0), a19
	}

	function aRK(uw, eK, e0) {
		eK *= 4;
		uw[eK] = 255, uw[1 + eK] = 255, uw[2 + eK] = e0, uw[3 + eK] = 255
	}

	function ul(player) {
		var a19 = b6.pJ.ul(wv, wv);
		return function(hH, player) {
			var ef, eh, hg, eK, aRM, aRN, hB = wv,
				hE = b6.pJ.getImageData(hH, hB, hB),
				uw = hE.data,
				kO = (hB >> 1) - .5,
				aQO = aY.a5D(player),
				aRP = b6.pT.a0k(aQO, .5);
			b6.pT.a0m(aQO, aRP, 300) || b6.pT.a0o(aQO, 100);
			for (eh = 0; eh < hB; eh++)
				for (ef = 0; ef < hB; ef++) aRN = (hB - 1.5) * (hB - 1.5) / 4, aRM = (hg = (hg = ef - kO) * hg + (hg = eh - kO) * hg) <= (hB - 4.5) * (hB - 4.5) / 4 ? aRP : aQO, uw[eK = 4 * (eh * hB + ef)] = aRM[0], uw[1 + eK] = aRM[1], uw[2 +
					eK] = aRM[2], uw[3 + eK] = aRN < hg ? 0 : 255;
			hH.putImageData(hE, 0, 0)
		}(b6.pJ.getContext(a19, !0), player), a19
	}
	this.dU = function() {
		aRH = new Array(a9.eV), aRI[0] = aRJ(255), aRI[1] = aRJ(0)
	}, this.tA = function() {
		var a7, player, aRQ, aIS, im, hf, aRS, aRU, aRV, lw = bJ.s.lw,
			a4d = bJ.s.a4d,
			a4e = bJ.s.a4e,
			aRB = bJ.s.aRB,
			aRW = aRH,
			aRX = a9.eI,
			aRY = -1,
			eY = bJ.s.oW,
			aRZ = at.a1,
			aRa = at.j7,
			aRb = bO.ej << 4,
			eN = hw,
			eC = eN / wv,
			lx = hv / eN,
			ly = hx / eN,
			hg = (aRZ + hv) / eN - lx,
			hj = (aRa + hx) / eN - ly,
			hH = tB;
		for (bJ.h2.on(a9.eI, bJ.a3U.a3V) && (aRY = bK.fA[3]), hH.imageSmoothingEnabled = eN < 9, b6.pJ.textAlign(hH, 1), b6.pJ.textBaseline(hH, 1), a7 = 0; a7 < eY; a7++) player = a4d[a7] >> 3, im = a4e[a7], aRQ = .9 + .1 * Math.log10(im), aIS =
			(hf = lw[a7]) % aRb / 16 - aRQ, hf = aRa * (Math.floor(hf / aRb) / 16 - aRQ - ly) / hj, aRS = -2 * (aRV = eN * aRQ) * (1 + (aRU = +(player === aRX)) / 8), aRU = aRU * aRV / 4, (aRV = aRZ * (aIS - lx) / hg) < aRS || hf < aRS || aRZ +
			aRU < aRV || aRa + aRU < hf || (aIS = 2 * aRQ * eC, aRS = aRQ * eN, void 0 === (aRU = aRW[player]) && (aRW[player] = aRU = ul(player)), player === aRX && (hH.setTransform(aIS, 0, 0, aIS, aRV - 2 * aIS, hf - 2 * aIS), hH.drawImage(aRI[
				+(a7 === aRY)], 0, 0)), hH.setTransform(aIS, 0, 0, aIS, aRV, hf), hH.drawImage(aRU, 0, 0), (aRQ = Math.floor(function(im) {
				if (im < 1e3) return .42;
				if (im < 1e4) return .34;
				if (im < 1e6) return .26;
				if (im < 1e8) return .19;
				return .15
			}(im) * aRS)) < 6) || (hH.setTransform(1, 0, 0, 1, 0, 0), hH.fillStyle = aRB[a7] ? b7.n1 : b7.mX, hH.font = b6.pJ.rF(1, aRQ), hH.fillText(b6.z3.xZ(im), aRV + aRS, hf + aRS + .1 * aRQ));
		hH.imageSmoothingEnabled = !1, hH.setTransform(1, 0, 0, 1, 0, 0)
	}
}

function aQj() {
	var a19;
	this.dU = function() {
		a19 = a19 || bL.s.aRe(20, bc.aRf[7])
	}, this.tA = function() {
		var mH = hw;
		if (!(5 <= mH)) {
			var aRZ = at.a1,
				aRa = at.j7,
				lx = hv / mH,
				ly = hx / mH,
				mA = (aRZ + hv) / mH,
				mB = (aRa + hx) / mH,
				g7 = -20 * mH,
				aRg = .5 * g7,
				aRb = bO.ej << 4,
				eY = bJ.s.oW,
				lw = bJ.s.lw,
				aRh = a19,
				hH = tB;
			3 < mH && (hH.globalAlpha = .5 * (5 - mH));
			for (var a7 = 0; a7 < eY; a7++) {
				var hf = lw[a7],
					ef = aRZ * (hf % aRb / 16 - lx) / (mA - lx) + aRg,
					hf = aRa * (Math.floor(hf / aRb) / 16 - ly) / (mB - ly) + aRg;
				aRZ < ef || aRa < hf || ef < g7 || hf < g7 || (hH.setTransform(mH, 0, 0, mH, ef, hf), hH.drawImage(aRh, 0, 0))
			}
			hH.globalAlpha = 1, hH.setTransform(mH, 0, 0, mH, 0, 0)
		}
	}
}

function aQf() {
	this.iS = function() {
		for (var aQv, aQe, aRA = bJ.s.aRA, lw = bJ.s.lw, aR8 = bJ.s.aR8, a7 = bJ.s.oW - 1; 0 <= a7; a7--) aQv = lw[a7], 0 !== (aQe = aRA[a7]) && aQv === aR8[a7] && (! function(a7, aRl, hT) {
			var il, player = bJ.s.a4d[a7] >> 3,
				hT = aRl + bI.hJ[hT] << 2,
				a7 = bJ.s.a4e[a7];
			if (bZ.aRm(player), aY.eP(hT)) il = a9.eV;
			else {
				if ((il = aY.eQ(hT)) === player) return hT = b6.fu.fx(player, a7), bZ.fy(player, a7 - hT, 12);
				if (!eR(player, il)) return b4.ji.o5(player, il, a7)
			}
			aZ.iz(player, il) || aZ.jH(player) ? (ac.g0[player].push(aRl << 2), aZ.ii(player, a7, il), aB.ij(player, !0)) : bZ.fy(player, a7, 12)
		}(a7, bI.i2(aQv), aQe - 1), bJ.aDc.aR0(a7))
	}, this.aRn = function(player, eK, hT, lt) {
		if (0 !== hT) {
			var aRX = a9.eI;
			if (b6.fu.gl(aRX) && eR(player, aRX) && player !== aRX && 0 !== ac.gF[aRX].length) {
				var aQm = eK + bI.hJ[--hT] << 2;
				if (aY.eP(aQm) || eR(player, aY.eQ(aQm))) {
					for (var em = !1, a7 = 0; a7 < 4; a7++)
						if (aQm = eK + bI.hJ[a7] << 2, aY.eT(aQm) && !aY.eP(aQm) && aY.eQ(aQm) === aRX) {
							em = !0;
							break
						} em && (aJ.a3W(719, 0), aJ.ye(180, L(376, [ac.a4U[player]]), 719, player, b7.n0, b7.mU, -1, !0, void 0, {
						es: 1,
						lt: lt
					}))
				}
			}
		}
	}
}

function aQb() {
	this.aRo = null, this.ju = 512, this.oj = 8, this.oW = 0, this.aRp = 0, this.a4d = new Uint16Array(this.ju), this.aR7 = new Uint32Array(this.ju), this.aR8 = new Uint32Array(this.ju), this.lw = new Uint32Array(this.ju), this.aR9 = new Uint16Array(
			this.ju), this.a4e = new Uint32Array(this.ju), this.aR5 = new Uint16Array(this.ju), this.aQr = new Uint16Array(this.ju), this.aRA = new Uint8Array(this.ju), this.aRB = new Uint8Array(this.ju), this.aRC = new Uint32Array(this.ju), this
		.oV = new Uint8Array(a9.eV), this.aQq = new Uint16Array(this.oj * a9.eV), this.dU = function() {
			this.aRp = 0, this.oW = 0, this.aRo = new Uint8Array(bO.ej + bO.ek), this.oV.fill(0)
		}, this.om = function(player) {
			var eY = this.oW,
				aRq = bI.i1(bK.fA[0]),
				aRr = this.oV[player],
				aRs = (player << 3) + aRr,
				im = (this.a4d[eY] = aRs, this.aR7[eY] = aRq, this.lw[eY] = aRq, this.aR8[eY] = bI.i1(bK.fA[1]), this.aR9[eY] = 0, bK.f6[0]);
			im < 60 ? (b6.fu.fv(player, 60 - im), this.a4e[eY] = 60) : this.a4e[eY] = im, this.aR5[eY] = bJ.i4.om(eY, bI.i3(aRq)), this.aQr[eY] = this.aRp, this.aRA[eY] = bK.fA[2], this.aRB[eY] = 0, this.aRC[eY] = 0, this.aRp = this.aRp + 1 & 1023,
				this.aQq[aRs] = eY, this.oV[player] = aRr + 1, this.oW++, bJ.aQe.aRn(player, bK.fA[1], bK.fA[2], this.aQr[eY])
		}, this.no = function() {
			var aQp = bK.fA[3];
			this.aR7[aQp] = this.lw[aQp], this.aR8[aQp] = bI.i1(bK.fA[1]), this.aR9[aQp] = 0, this.aRA[aQp] = bK.fA[2], bJ.aQe.aRn(this.a4d[aQp] >> 3, bK.fA[1], bK.fA[2], this.aQr[aQp])
		}, this.iS = function() {
			bJ.aQe.iS();
			var a7, g6 = a9.eI,
				dk = bJ.h2.aDZ(g6),
				r6 = (! function(r6) {
					var a7, aRx, aRy, aRz, aS0, aRq, aS4, aS5, eb, g7, aR7 = r6.aR7,
						aR8 = r6.aR8,
						lw = r6.lw,
						a4e = r6.a4e,
						aRB = r6.aRB,
						aR9 = r6.aR9,
						aR5 = r6.aR5,
						gM = ac.gM,
						a4d = r6.a4d,
						r6 = r6.oW,
						aRb = bO.ej << 4;
					for (a7 = r6 - 1; 0 <= a7; a7--) aRy = lw[a7], aRx = aR8[a7], aRy !== aRx && (aRq = aR7[a7], aS4 = aRx % aRb - (aS0 = aRq % aRb), aS5 = ~~((aRx + .5) / aRb) - (aRq = ~~((aRq + .5) / aRb)), eb = ~~Math.sqrt(aS4 * aS4 + aS5 *
						aS5 + .5), g7 = 15e4 + 25e3 * bH.log10(a4e[a7]), g7 += 5e4 * !gM[a4d[a7] >> 3], aRB[a7] && (g7 = bH.dl(g7, 5)), 65535 <= (g7 = aR9[a7] + Math.max(~~((g7 + .5) / eb), 1)) ? lw[a7] = aRz = aRx : (aR9[a7] = g7, lw[
						a7] = aRz = aS0 + bH.dl(g7 * aS4, 65536) + aRb * (aRq + bH.dl(g7 * aS5, 65536))), aR5[a7] = bJ.i4.aS7(aR5[a7], aRy, aRz))
				}(this), ! function(r6) {
					if (bb.ja() % 2 == 1) {
						var a7, k2, kO, es, et, aS8, xF, aS9, gy, hN, lx, ly, aRq, aSA, aSB, aSC, v4, eY = r6.oW,
							lw = r6.lw,
							a4d = r6.a4d,
							a4e = r6.a4e,
							aRC = r6.aRC,
							aRB = r6.aRB,
							i4 = bJ.i4.i4,
							aSE = i4.length,
							aSF = bJ.i4.aSF,
							aRb = bO.ej << 4,
							aSG = a9.ie,
							aP3 = bc.eW,
							g7 = (eY - 1) * (bH.dl(bb.ja(), 2) % 2);
						for (a7 = 0; a7 < eY; a7++)
							for (k2 = Math.abs(a7 - g7), aRq = lw[k2], kO = bI.i3(aRq), gy = a4d[k2] >> 3, lx = aRq % aRb, ly = ~~((aRq + .5) / aRb), aSC = a4e[k2], es = 0; es < 9; es++)
								if (!((aS8 = kO + aSF[es]) < 0 || aSE <= aS8))
									for (aS9 = i4[aS8], xF = aS9.length, et = 0; et < xF; et++) aSA = aS9[et], v4 = a4d[aSA] >> 3, gy == v4 || aSG && aP3[gy] === aP3[v4] && aP3[gy] || (v4 = lw[aSA], (hN = lx - v4 % aRb) * hN + (hN = ly - ~~((v4 +
										.5) / aRb)) * hN < 14400 && ((v4 = a4e[aSA]) <= aSC ? aSB = Math.max(1, bH.dl(v4 + bH.dl(aSC - v4, 10), 10)) : (aSB = Math.max(1, bH.dl(aSC, 10)), aRC[aSA] = Math.min(aRC[aSA] + aSB, 4294967295)),
										a4e[aSA] = Math.max(v4 - aSB, 0), aRB[aSA] = 4))
					}
				}(this), ! function(r6) {
					if (bb.ja() % 5 == 3) {
						var a7, im, a4e = r6.a4e,
							gM = ac.gM,
							a4d = r6.a4d,
							aRC = r6.aRC,
							aRB = r6.aRB,
							eY = r6.oW;
						for (a7 = 0; a7 < eY; a7++) im = a4e[a7], gM[a4d[a7] >> 3] ? a4e[a7] = Math.max(im - Math.max(1, im >> 7), 0) : (a4e[a7] = Math.max(im - Math.max(1, im >> 11), 0), aRB[a7] || (im = aRC[a7]) && (im = Math.max(im >> 3, 1),
							a4e[a7] = Math.min(a4e[a7] + (im << 1), 4294967295), aRC[a7] -= im))
					}
				}(this), this),
				a4e = r6.a4e,
				aRB = r6.aRB;
			for (a7 = r6.oW - 1; 0 <= a7; a7--) aRB[a7] = aRB[a7] >> 1, 0 === a4e[a7] && bJ.aDc.aR0(a7);
			bZ.fy(g6, dk - bJ.h2.aDZ(g6), 15)
		}
}

function aQc() {
	this.aSH = 32, this.ef = 0, this.eh = 0, this.i5 = 0, this.aSI = 0, this.aSJ = 4, this.i4 = null, this.aSF = new Int16Array(9), this.dU = function() {
		this.i5 = 1 + bH.dl(bO.ej - 1, this.aSH), this.aSI = 1 + bH.dl(bO.ek - 1, this.aSH), this.i4 = new Array(this.i5 * this.aSI), b6.pT.a0j(this.i4);
		var ef, eh, aSF = this.aSF,
			a1 = this.i5;
		for (ef = -1; ef <= 1; ef++)
			for (eh = -1; eh <= 1; eh++) aSF[3 * (1 + eh) + 1 + ef] = eh * a1 + ef
	}, this.om = function(aSL, a7) {
		return this.i4[a7].push(aSL), this.i4[a7].length - 1
	}, this.aS7 = function(aSM, aRq, aRx) {
		var aSN, aSO, aRq = bI.i3(aRq),
			aRx = bI.i3(aRx);
		return aRq === aRx ? aSM : (aSN = this.i4[aRq].pop(), this.i4[aRq].length === aSM ? this.om(aSN, aRx) : (aSO = this.i4[aRq][aSM], this.i4[aRq][aSM] = aSN, bJ.s.aR5[aSN] = aSM, this.om(aSO, aRx)))
	}
}

function aQh() {
	function zd(aRx, aSP) {
		if (! function(aRx, aQn) {
				var hM = bI.i2(aRx),
					aST = Math.abs(bI.eg(aQn) - bI.eg(hM)),
					hM = Math.abs(bI.ei(aQn) - bI.ei(hM));
				return 0 !== Math.max(aST, hM) && (function(aRq, aRx, aST, aSU) {
					var aSW = bI.hi(aRq),
						aRq = bI.hl(aRq),
						aSY = bI.hi(aRx),
						aRx = bI.hl(aRx),
						aSY = aSY - aSW,
						aRx = aRx - aRq,
						aSc = Math.abs(aSY),
						aSd = Math.abs(aRx),
						aSY = 0 < aSY ? 1 : 3,
						aRx = 0 < aRx ? 2 : 0;
					aSd < aSc ? aSg(aSW, aRq, aSW + aSc, aRq + aSd, aSY, aRx, aST) : aSg(aRq, aSW, aRq + aSd, aSW + aSc, aRx, aSY, aSU)
				}(aRx, bI.i1(aQn), aST, hM), !0)
			}(aRx, aSP)) return !1;
		if (0 === bK.f3[0]) return !!aY.h1(aSP << 2);
		if (! function(aQn) {
				if (aY.h1(aQn << 2)) return 1;
				return function(aQn) {
					var a7, hT, aRo = bJ.s.aRo,
						aSk = bI,
						eY = bK.f3[0],
						aSl = 4 * aQn;
					for (a7 = eY - 1; 0 <= a7; a7--) {
						hT = aRo[a7];
						var aSm = aSl;
						if (aSl = aSk.i7(aSl, hT + 2 & 3), aY.h1(aSl)) return bK.f3[0] = a7, bK.fA[1] = aSl >> 2, bK.fA[2] = 1 + hT, bK.fA[4] = aSm, 1
					}
					return
				}(aQn)
			}(aSP)) return !1;
		if (bK.fA[2] && aY.ed(bK.fA[4])) return !1;
		var a7, aSP = bI.i2(aRx),
			uw = a9Y,
			aRo = bJ.s.aRo,
			eY = bK.f3[0] - 1,
			aSl = 4 * aSP,
			hK = bI.hK;
		for (a7 = 0; a7 < eY; a7++)
			if (aSl += hK[aRo[a7]], 0 !== uw[aSl + 3] || 2 !== uw[aSl + 2]) return !!void 0;
		return !!1
	}

	function aSg(aSW, aSX, aSY, aSZ, aSe, aSf, aST) {
		for (var eh, aRo = bJ.s.aRo, g7 = 0, aSh = 0, j7 = aSZ - aSX, a1 = aSY - aSW, aSi = aSW % 16, a7 = 1; a7 <= aST; a7++) aRo[g7++] = aSe, aRo[g7] = aSf, g7 += (eh = (j7 * (aSi + (a7 << 4)) + .5) / a1 >> 4) - aSh, aSh = eh;
		bK.fF(bK.f3, g7)
	}
	this.kK = function(player, aSP) {
		var hT, hM, gx = bI.hV(player, aSP);
		return gx !== aSP && (hT = bI.hL(gx, aSP), hM = bI.i6(gx, hT), !(!aY.h1(hM << 2) && (hT = bI.hS(gx, aSP, hT), hM = bI.i6(gx, hT), !aY.h1(hM << 2)) || (bK.fA[0] = hM, bK.fA[1] = aSP, bK.fA[2] = 0, hM !== aSP && (!zd(bI.i1(hM), aSP) ||
			0 !== bK.fA[2] && bI.hb(player, bK.fA[1] + bI.hJ[bK.fA[2] - 1] << 2)))))
	}, this.oo = function(aSP) {
		var aRq = bJ.s.lw[bK.fA[3]];
		return bK.fA[1] = aSP, bK.fA[2] = 0, zd(aRq, aSP)
	}
}

function aQd() {
	var wv = 32,
		wu = new Array(2);

	function ul(et) {
		var ef, eh, eK, hj, hg, hB = wv,
			a19 = b6.pJ.ul(hB, hB),
			hH = b6.pJ.getContext(a19, !0),
			hE = b6.pJ.getImageData(hH, hB, hB),
			uw = hE.data,
			kO = (hB >> 1) - .5,
			kP = Math.sqrt(kO * kO);
		for (uw.fill(255), eh = 0; eh < hB; eh++)
			for (ef = 0; ef < hB; ef++) hg = ef - kO, hj = eh - kO, eK = 4 * (eh * hB + ef), hg = 714 * (kP - Math.sqrt(hg * hg + hj * hj)) / kP, uw[2 + eK] = et, uw[3 + eK] = 255 < hg ? 0 : hg;
		return hH.putImageData(hE, 0, 0), a19
	}
	this.a3V = -1, this.dU = function() {
		this.a3V = -1, wu[0] || (wu[0] = ul(255), wu[1] = ul(0))
	}, this.aSo = function(hH, eC, ef, eh, dz, a7) {
		b6.fu.gl(a9.eI) && (hH.setTransform(eC *= 4 / 3 * .625, 0, 0, eC, ef - (dz *= 4 / 3), eh - dz), hH.drawImage(wu[+(bJ.s.aQr[a7] === this.a3V)], 0, 0))
	}
}

function dX() {
	this.aMk = [L(377), L(378), L(379), L(380), L(381), L(382), L(383), L(384), L(385), L(386), L(387), L(388), L(389)];
	var aSp = ["Space", "", "KeyB", "", "KeyW", "", "KeyS", "", "KeyD", "", "KeyA", "", "KeyH", "", "NumpadAdd", "", "NumpadSubtract", "", "ArrowLeft", "", "ArrowRight", "", "ArrowUp", "", "ArrowDown", ""];
	this.aMj = new Array(aSp.length), this.dU = function() {
		var g = bf.dp.data[155].value.split(";"),
			kO = g.length;
		if (function() {
				for (var eY = aSp.length, a7 = 0; a7 < eY; a7++) bT.aMj[a7] = aSp[a7]
			}(), !(kO > aSp.length))
			for (var a7 = 0; a7 < kO; a7++) g[a7].length && (this.aMj[a7] = g[a7])
	}, this.aMm = function(e0, code) {
		for (var aMj = this.aMj, aSr = aSp, p0 = (aMj[e0] = code, ""), eY = aMj.length, aSs = [], a7 = 0; a7 < eY; a7++) aSs.push(aMj[a7] === aSr[a7] ? "" : aMj[a7]);
		eY--;
		for (a7 = 0; a7 < eY; a7++) p0 += aSs[a7] + ";";
		bf.qw.qx(155, p0 += aSs[eY])
	}, this.aMi = function() {
		bf.qw.qx(155, ""), this.dU()
	}, this.et = function(code, e0) {
		return code === this.aMj[e0] || code === this.aMj[e0 + 1]
	}
}

function dS() {
	var aSt = new Audio(
		"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
		);
	this.aSu = function() {
		aSt && aSt.play()
	}
}

function cT() {
	this.a61 = function() {
		var aSx;
		return !(ah.je < 3 || ac.gM[kv[0]] >= a9.jN >> 1) && (a9.ie ? (aSx = aa.aEf(), !(2 * aa.aEg(bd.ks()) >= aSx)) : function() {
			var aSx = aa.aEf();
			if (2 * ac.ga[kv[0]] >= aSx) return !1;
			return !0
		}())
	}
}

function c4() {
	this.dU = function() {
		if (0 === a9.data.sResourcesType) {
			for (var aRr = a9.jd, ga = ac.ga, a7 = 0; a7 < aRr; a7++) ga[a7] = 512;
			var aRs = a9.vU,
				jt = aA.jt,
				im = aA.im;
			for (a7 = aRr; a7 < aRs; a7++) ga[a7] = jt[im[a7]]
		} else(1 === a9.data.sResourcesType ? function() {
			for (var eY = a9.vU, ga = ac.ga, sResourcesValue = a9.data.sResourcesValue, a7 = 0; a7 < eY; a7++) ga[a7] = sResourcesValue
		} : function() {
			for (var eY = a9.vU, ga = ac.ga, sResourcesData = a9.data.sResourcesData, a7 = 0; a7 < eY; a7++) ga[a7] = sResourcesData[a7]
		})();
		bZ.lQ[8] = ac.ga[a9.eI]
	}
}

function dI() {
	var aT2 = 501,
		aT3 = (this.z7 = new Uint32Array(aT2), this.a1l = new Uint32Array(aT2), this.a8v = new Uint16Array(aT2), this.aMs = 0, 1),
		aT4 = 0;

	function aT7(self) {
		self.max.fill(0)
	}

	function aT9(self, a7) {
		self.max[0] = Math.max(self.z7[a7], self.max[0]), self.max[1] = Math.max(self.a1l[a7], self.max[1]), self.max[2] = Math.max(self.a8v[a7], self.max[2])
	}
	this.max = [0, 0, 0], this.aT5 = 0, this.lQ = new Array(21), this.aT6 = null, this.dV = function() {
		this.aT6 = [L(390), L(391), L(392), L(393), L(394), L(395), L(396), L(397), L(241), L(242), L(398), L(399), L(400), L(401), "", L(402), L(403), L(404), L(201), L(405), L(406)]
	}, this.dU = function() {
		this.aMs = 0, aT3 = 1, this.aT5 = 0, aT4 = 0, aT7(this), this.lQ.fill(0)
	}, this.oh = function(player, hu) {
		b6.fu.a1g(player) && (this.lQ[0] += hu + 1, this.lQ[1]++, this.lQ[12] += bK.f6[1])
	}, this.o7 = function(player, nk) {
		__fx.donationsTracker.logDonation(player, nk, bK.f6[0]);
		player === a9.eI && (aJ.o7(bK.f6[0], bK.f6[1], nk), this.lQ[12] += bK.f6[1], this.lQ[16] += bK.f6[0]), nk === a9.eI && (aJ.a4r(bK.f6[0], player), this.lQ[10] += bK.f6[0])
	}, this.ok = function(player) {
		b6.fu.a1g(player) && (this.lQ[2]++, this.lQ[12] += bK.f6[1])
	}, this.ov = function(player) {
		b6.fu.a1g(player) && (this.lQ[19]++, this.lQ[12] += bK.f6[1])
	}, this.aRm = function(player) {
		b6.fu.a1g(player) && this.lQ[20]++
	}, this.fy = function(player, a2M, e0) {
		b6.fu.a1g(player) && (this.lQ[e0] += a2M)
	}, this.iS = function() {
		var self;
		this.aT5 || 0 < aT4-- || ((self = this).z7[self.aMs] = ac.gM[a9.eI], self.a1l[self.aMs] = ac.ga[a9.eI], self.a8v[self.aMs] = aa.a8w(a9.eI), aT9(self, self.aMs), self.aMs++, self.aMs === aT2 && function(self) {
			aT7(self), aT9(self, 0), self.aMs = 1 + bH.dl(aT2, 2);
			for (var a7 = 1; a7 < self.aMs; a7++) self.z7[a7] = self.z7[2 * a7], self.a1l[a7] = self.a1l[2 * a7], self.a8v[a7] = self.a8v[2 * a7], aT9(self, a7);
			aT3 *= 2
		}(self), aT4 = aT3 - 1, ba.lH(), 0 === ac.lU[a9.eI] && (self.aT5 = bb.ja()))
	}
}

function dJ() {
	this.a1 = 0, this.j7 = 0, this.rk = 0, this.rl = 0, this.aTB = 0, this.aTC = 0, this.a6E = 0, this.sN = 0;
	var aTE = this.aTD = 0;
	this.aTF = 0, this.aTG = 0, this.aTH = 0, this.a5d = 0, this.e0 = 0, this.a8Y = null, this.wq = !1, this.aTI = -1, this.aTJ = !1, this.aTK = [0, 0], this.dV = function() {
		this.a8Y = [L(407), L(106, 0, "Balance"), L(105, 0, "Interest"), L(408)]
	}, this.dU = function() {
		this.wq = !1, this.aTI = -1, this.aTJ = !1, this.resize()
	}, this.resize = function() {
		this.a1 = at.a1 < 1.369 * at.j7 ? at.a1 : 1.369 * at.j7;
		var eb = u.v.sU() && at.a1 < at.j7 ? 1 : u.v.sU() ? .8 : at.a1 < at.j7 ? .65 : .59;
		this.a1 = Math.floor(eb * this.a1), this.a1 -= u.v.sU() && at.a1 < at.j7 ? 2 * bY.gap + 2 : 0, this.j7 = Math.floor(this.a1 / 1.369), this.a5d = Math.floor(this.j7 / 150), this.a5d = Math.max(this.a5d, 1.5), this.rk = Math.floor(1 + .02 *
			this.a1), this.rl = Math.floor(1 + .04 * this.a1), this.a6E = this.rl, aTE = Math.floor(.75 * this.a6E), this.sN = Math.floor(1 + .075 * this.a1), this.aTF = Math.floor(1 + .1125 * this.a1), this.aTG = Math.floor(this.a1 * (u.v
			.sU() ? .03 : .029)), this.aTG = Math.max(this.aTG, 4), this.aTH = Math.floor(.035 * this.a1), this.aTH = Math.max(this.aTH, 4), this.aTD = this.j7 - 2 * this.a6E - this.sN - this.aTF, this.wq && this.aTL()
	}, this.gm = function(kj, kk) {
		var vX, vW;
		return !!this.wq && (vW = kj, vX = kk, kj -= bH.dl(at.a1 - this.a1, 2), kk -= bH.dl(at.j7 - this.j7, 2), kj < 0 || kk < 0 || kj >= this.a1 || kk >= this.j7 || kj >= this.a1 - this.aTF && kk < this.aTF ? -1 !== aI.gm(vW, vX) || b8.gm(vW,
			vX) || this.qm() : kk < this.aTF || (kk < this.j7 - this.sN ? (this.aTJ = !0, this.aTI = (kj - 2 * this.rk - this.aTB) / this.aTC, 3 !== this.e0 && (bb.dc = !0)) : (vW = (vW = Math.floor(kj / (this.a1 / this.a8Y.length))) <
			0 ? 0 : vW >= this.a8Y.length ? this.a8Y.length - 1 : vW) !== this.e0 && (this.e0 = vW, this.aTL(), bb.dc = !0)), !0)
	}, this.zr = function(kj, kk) {
		return this.aTK[0] = kj, this.aTK[1] = kk, !(!this.wq || !this.aTJ || (kj -= bH.dl(at.a1 - this.a1, 2), kk = this.aTI, this.aTI = (kj - 2 * this.rk - this.aTB) / this.aTC, (0 <= this.aTI && this.aTI <= 1 || 0 <= kk && kk <= 1) && (bb
			.dc = !0), 0))
	}, this.a0G = function() {
		this.aTJ && (this.aTJ = !1)
	}, this.a0S = function() {
		this.wq ? this.qm() : this.show()
	}, this.show = function() {
		bZ.aMs < 2 || (this.wq = !0, this.aTL())
	}, this.qm = function() {
		this.wq = !1, this.aTI = -1, bb.dc = !0
	}, this.aTL = function() {
		this.e0 < 2 ? this.aTB = aM.measureText(b6.z3.xZ(bZ.max[this.e0]), b6.pJ.rF(0, this.aTG)) : 2 === this.e0 && (this.aTB = aM.measureText(b6.z3.a2F(6, 2), b6.pJ.rF(0, this.aTG))), this.aTC = this.a1 - 2 * this.rk - this.aTB - this.rl
	}, this.lH = function() {
		this.wq && this.aTL()
	}, this.tA = function() {
		this.wq && this.a6V()
	}, this.a6V = function() {
		var ef = bH.dl(at.a1 - this.a1, 2),
			eh = bH.dl(at.j7 - this.j7, 2);
		tB.setTransform(1, 0, 0, 1, ef, eh), tB.fillStyle = b7.mU, tB.fillRect(0, this.aTF, this.a1, this.j7 - this.aTF), this.aTM(), this.aLi(), tB.strokeRect(0, 0, this.a1, this.j7), b6.pJ.textAlign(tB, 2), tB.font = b6.pJ.rF(0, this.aTG),
			0 === this.e0 ? this.aTN(bZ.z7, ef, eh) : 1 === this.e0 ? this.aTN(bZ.a1l, ef, eh) : 2 === this.e0 ? this.aTO(ef, eh) : 3 === this.e0 && (this.aTP(ef, eh), this.aTQ(ef, eh)), aI.a3w(Math.floor(ef + this.a1 - .725 * this.aTF), Math
				.floor(eh + .275 * this.aTF), Math.floor(.45 * this.aTF)), tB.setTransform(1, 0, 0, 1, 0, 0)
	}, this.aTM = function() {
		var a7, dk;
		for (tB.lineWidth = this.a5d, b6.pJ.textBaseline(tB, 1), b6.pJ.textAlign(tB, 1), tB.strokeStyle = b7.mX, tB.font = b6.pJ.rF(1, this.aTH), dk = this.a1 / this.a8Y.length, tB.fillStyle = b7.mr, tB.fillRect(this.e0 * dk, this.j7 - this.sN,
				dk, this.sN), tB.fillStyle = b7.mX, tB.fillRect(0, this.j7 - this.sN - .5 * this.a5d, this.a1, this.a5d), a7 = 1; a7 <= 3; a7++) tB.fillRect(a7 * dk, this.j7 - this.sN, this.a5d, this.sN);
		for (a7 = this.a8Y.length - 1; 0 <= a7; a7--) tB.fillText(b6.wX.a1L(this.a8Y[a7], 0, .9 * dk), (a7 + .5) * dk, this.j7 - .46 * this.sN)
	}, this.aLi = function() {
		tB.fillStyle = b7.nC, tB.fillRect(0, 0, this.a1, this.aTF), tB.fillStyle = b7.mX, tB.fillRect(0, this.aTF - .5 * this.a5d, this.a1, this.a5d), tB.font = b6.pJ.rF(1, .39 * this.aTF), tB.fillText(b6.wX.a1L(L(409), 0, .8 * this.a1), Math
			.floor(this.a1 / 2), Math.floor(.55 * this.aTF))
	}, this.aTN = function(g, ef, eh) {
		var kO = bZ.max[this.e0],
			a0l = (tB.setTransform(1, 0, 0, 1, ef + 2 * this.rk + this.aTB, eh + this.a6E + this.aTF), tB.lineWidth = 2, this.aTD / Math.sqrt(kO));
		tB.beginPath(), tB.moveTo(this.aTC, this.aTD - a0l * Math.sqrt(g[bZ.aMs - 1]));
		for (var a7 = bZ.aMs - 2; 0 <= a7; a7--) tB.lineTo(a7 * this.aTC / (bZ.aMs - 1), this.aTD - a0l * Math.sqrt(g[a7]));
		tB.stroke();
		ef = this.a3w(g, a0l, .5);
		ef < .95 && tB.fillText(b6.z3.xZ(kO), -this.rk, 0), .05 < Math.abs(ef - .5) && tB.fillText(b6.z3.xZ(Math.floor(kO / 4)), -this.rk, Math.floor(this.aTD / 2)), .05 < ef && tB.fillText("0", -this.rk, this.aTD)
	}, this.aTO = function(ef, eh) {
		tB.setTransform(1, 0, 0, 1, ef + 2 * this.rk + this.aTB, eh + this.a6E + this.aTF), tB.lineWidth = 2;
		var a0l = this.aTD / Math.max(bZ.max[this.e0], 1);
		tB.beginPath(), tB.moveTo(this.aTC, this.aTD - a0l * bZ.a8v[bZ.aMs - 1]);
		for (var a7 = bZ.aMs - 2; 0 <= a7; a7--) tB.lineTo(a7 * this.aTC / (bZ.aMs - 1), this.aTD - a0l * bZ.a8v[a7]);
		tB.stroke();
		ef = this.a3w(bZ.a8v, a0l, 1), eh = bZ.max[this.e0] / 100;
		ef < .95 && tB.fillText(b6.z3.a2F(eh, 2), -this.rk, 0), .05 < Math.abs(ef - .5) && tB.fillText(b6.z3.a2F(eh / 2, 2), -this.rk, Math.floor(this.aTD / 2)), .05 < ef && tB.fillText(b6.z3.a2F(0, 2), -this.rk, this.aTD)
	}, this.aTP = function(ef, eh) {
		tB.setTransform(1, 0, 0, 1, ef + .34 * this.a1, eh + 2 * aTE + this.aTF), b6.pJ.textAlign(tB, 2);
		for (var a8J = this.j7 - 4 * aTE - this.sN - this.aTF, g = [0, 1, 19, 2, 20, 3, 4, 5, 6, 7], a7 = 9; 0 <= a7; a7--) tB.fillText(b6.wX.a1L(bZ.aT6[g[a7]], 0, .31 * this.a1), 0, a7 * a8J / 9);
		var f0 = bZ.lQ;
		for (tB.setTransform(1, 0, 0, 1, ef + .39 * this.a1, eh + 2 * aTE + this.aTF), b6.pJ.textAlign(tB, 0), tB.fillText(b6.z3.a2F(100 * f0[0] / (1024 * Math.max(f0[1], 1)), 1), 0, 0), a7 = 8; 1 <= a7; a7--) tB.fillText(f0[g[a7]].toString(), 0,
			a7 * a8J / 9);
		tB.fillText(b6.z3.a2F(100 * (1 - ac.gM[a9.eI] / f0[7]), 0), 0, a8J)
	}, this.aTQ = function(ef, eh) {
		tB.setTransform(1, 0, 0, 1, ef + .79 * this.a1, eh + 2 * aTE + this.aTF), b6.pJ.textAlign(tB, 2);
		var a7, a8J = this.j7 - 4 * aTE - this.sN - this.aTF;
		for (tB.fillStyle = b7.mm, a7 = 2; 0 <= a7; a7--) tB.fillText(b6.wX.a1L(bZ.aT6[a7 + 8], 0, .31 * this.a1), 0, a7 * a8J / 9);
		tB.fillText(b6.wX.a1L(bZ.aT6[18], 0, .31 * this.a1), 0, 3 * a8J / 9), tB.fillStyle = b7.ml, tB.fillText(b6.wX.a1L(bZ.aT6[11], 0, .31 * this.a1), 0, 4 * a8J / 9), tB.fillStyle = b7.n2, tB.fillText(b6.wX.a1L(bZ.aT6[13], 0, .31 * this.a1),
				0, 5 * a8J / 9), tB.fillText(b6.wX.a1L(bZ.aT6[15], 0, .31 * this.a1), 0, 6 * a8J / 9), tB.fillText(b6.wX.a1L(bZ.aT6[16], 0, .31 * this.a1), 0, 7 * a8J / 9), tB.fillText(b6.wX.a1L(bZ.aT6[12], 0, .31 * this.a1), 0, 8 * a8J / 9), tB
			.fillStyle = b7.n1, tB.fillText(b6.wX.a1L(bZ.aT6[17], 0, .31 * this.a1), 0, a8J), tB.fillStyle = b7.mm;
		var f0 = bZ.lQ,
			aLv = f0[8] + f0[9] + f0[10] + f0[18],
			aLv = b6.z3.xZ(aLv),
			aKX = tB.measureText(aLv).width,
			ef = (tB.setTransform(1, 0, 0, 1, ef + .83 * this.a1 + aKX, eh + 2 * aTE + this.aTF), tB.fillText(b6.z3.xZ(f0[8]), 0, 0), tB.fillText(b6.z3.xZ(f0[9]), 0, a8J / 9), tB.fillText(b6.z3.xZ(f0[10]), 0, 2 * a8J / 9), tB.fillText(b6.z3.xZ(
				f0[18]), 0, 3 * a8J / 9), tB.fillStyle = b7.ml, tB.fillText(aLv, 0, 4 * a8J / 9), tB.fillStyle = b7.n2, tB.fillText(b6.z3.xZ(f0[13]), 0, 5 * a8J / 9), tB.fillText(b6.z3.xZ(f0[15]), 0, 6 * a8J / 9), tB.fillText(b6.z3.xZ(f0[
				16]), 0, 7 * a8J / 9), tB.fillText(b6.z3.xZ(f0[12]), 0, 8 * a8J / 9), f0[12] + f0[13] + f0[15] + f0[16]);
		tB.fillStyle = b7.n1, tB.fillText(b6.z3.xZ(ef), 0, a8J), tB.fillStyle = b7.mX
	}, this.a3w = function(g, a0l, a76) {
		var a7, e, fG;
		return this.aTI < 0 || 1 < this.aTI ? .25 : (a7 = this.aTI * (bZ.aMs - 1), fG = g[e = Math.floor(a7)], fG += (a7 - e) * (g[e < bZ.aMs - 1 ? e + 1 : e] - fG), tB.strokeStyle = b7.ma, .04 < this.aTI && this.aTS(0, this.aTD - a0l * Math.pow(
				fG, a76), a7 * this.aTC / (bZ.aMs - 1), this.aTD - a0l * Math.pow(fG, a76)), .04 < fG / bZ.max[this.e0] && this.aTS(a7 * this.aTC / (bZ.aMs - 1), this.aTD, a7 * this.aTC / (bZ.aMs - 1), this.aTD - a0l * Math.pow(fG, a76)), tB
			.fillStyle = b7.n4, tB.beginPath(), tB.arc(a7 * this.aTC / (bZ.aMs - 1), this.aTD - a0l * Math.pow(fG, a76), Math.max(2, .014 * this.j7), 0, 2 * Math.PI), tB.fill(), g = this.aTI * bb.a8x, g = 0 === ac.lU[a9.eI] ? Math.floor(g *
				bZ.aT5) : Math.floor(g * bb.ja()), tB.fillStyle = b7.mX, tB.fillText(1 === a76 ? b6.z3.a2F(fG / 100, 2) : b6.z3.xZ(Math.floor(fG)), -this.rk, this.aTD - a0l * Math.pow(fG, a76)), b6.pJ.textAlign(tB, 1), tB.fillText(aS.a8m(g),
				a7 * this.aTC / (bZ.aMs - 1), this.aTD + this.aTG - (u.v.sU() ? 2 : 0) - this.a5d), b6.pJ.textAlign(tB, 2), a0l * Math.pow(fG, a76) / this.aTD)
	}, this.aTS = function(lx, ly, mA, mB) {
		tB.beginPath(), tB.moveTo(lx, ly), tB.lineTo(mA, mB), tB.stroke()
	}
}

function bs() {
	this.aTT = "https://", this.aTU = this.aTT + "territorial.io/", this.aMt = this.aTU + "changelog", this.aMx = this.aTU + "terms", this.aTV = this.aTU + "cookie_policy", this.aMJ = this.aTU + "privacy", this.aMw = this.aTU + "tutorial", this.aMv =
		this.aTU + "players", this.aMu = this.aTU + "clans", this.z9 = this.aTU + "clan-results", this.aA8 = this.aTT + "play.google.com/store/apps/details?id=territorial.io", this.zP = this.aTT + "apps.apple.com/app/id1581110913", this.aTW = this
		.aTT + "www.youtube.com/watch?v=toZTQ8aRdFc", this.aA9 = this.aTT + "discord.gg/pthqvpTXmh", this.aAA = this.aTT + "www.instagram.com/davidtschacher/", this.x9 =
		"🇦🇫🇦🇽🇦🇱🇩🇿🇦🇸🇦🇩🇦🇴🇦🇮🇦🇶🇦🇬🇦🇷🇦🇲🇦🇼🇦🇺🇦🇹🇦🇿🇧🇸🇧🇭🇧🇩🇧🇧🇧🇾🇧🇪🇧🇿🇧🇯🇧🇲🇧🇹🇧🇴🇧🇦🇧🇼🇧🇷🇮🇴🇻🇬🇧🇳🇧🇬🇧🇫🇧🇮🇨🇻🇰🇭🇨🇲🇨🇦🇮🇨🇰🇾🇨🇫🇹🇩🇨🇱🇨🇳🇨🇽🇨🇨🇨🇴🇰🇲🇨🇬🇨🇩🇨🇷🇭🇷🇨🇺🇨🇼🇨🇾🇨🇿🇩🇰🇩🇯🇩🇲🇩🇴🇪🇨🇪🇬🇸🇻🇬🇶🇪🇷🇪🇪🇸🇿🇪🇹🇪🇺🇫🇰🇫🇴🇫🇯🇫🇮🇫🇷🇬🇫🇵🇫🇹🇫🇬🇦🇬🇲🇬🇪🇩🇪🇬🇭🇬🇮🇬🇷🇬🇱🇬🇩🇬🇵🇬🇺🇬🇹🇬🇬🇬🇳🇬🇼🇬🇾🇭🇹🇭🇳🇭🇰🇭🇺🇮🇸🇮🇳🇮🇩🇮🇷🇮🇶🇮🇪🇮🇲🇮🇱🇮🇹🇨🇮🇯🇲🇯🇵🇯🇪🇯🇴🇰🇿🇰🇪🇰🇮🇽🇰🇰🇼🇰🇬🇱🇦🇱🇻🇱🇧🇱🇸🇱🇷🇱🇾🇱🇮🇱🇹🇱🇺🇲🇴🇲🇰🇲🇬🇲🇼🇲🇾🇲🇻🇲🇱🇲🇹🇲🇭🇲🇶🇲🇷🇲🇺🇾🇹🇲🇽🇫🇲🇲🇩🇲🇨🇲🇳🇲🇪🇲🇸🇲🇦🇲🇿🇲🇲🇳🇦🇳🇷🇳🇵🇳🇱🇳🇨🇳🇿🇳🇮🇳🇪🇳🇬🇳🇺🇳🇫🇰🇵🇲🇵🇳🇴🇴🇲🇵🇰🇵🇼🇵🇸🇵🇦🇵🇬🇵🇾🇵🇪🇵🇭🇵🇱🇵🇹🇵🇷🇶🇦🇷🇴🇷🇺🇷🇼🇼🇸🇸🇲🇸🇹🇸🇦🇸🇳🇷🇸🇸🇨🇸🇱🇸🇬🇸🇽🇸🇰🇸🇮🇸🇧🇸🇴🇿🇦🇬🇸🇰🇷🇸🇸🇪🇸🇱🇰🇧🇱🇸🇭🇰🇳🇱🇨🇲🇫🇵🇲🇻🇨🇸🇩🇸🇷🇸🇪🇸🇾🇨🇭🇹🇼🇹🇯🇹🇿🇹🇭🇹🇱🇹🇬🇹🇰🇹🇴🇹🇹🇹🇳🇹🇷🇹🇲🇹🇨🇹🇻🇺🇬🇺🇦🇦🇪🇬🇧🇺🇳🇺🇸🇻🇮🇺🇾🇺🇿🇻🇺🇻🇦🇻🇪🇻🇳🇼🇫🇪🇭🇾🇪🇿🇲🇿🇼"
}

function d1() {
	this.s = new aTX, this.wU = new aTY, this.dU = function() {
		this.s.dU()
	}, this.iS = function() {
		0 !== this.s.a50 && this.s.a50--
	}
}

function aTY() {
	this.tA = function() {
		if (0 !== bL.s.a50 && (tB.globalAlpha = Math.min(bL.s.a50 / 580, 1), tB.drawImage(bL.s.aTb, 1 + aO.wS(), 1 + aO.wT()), tB.globalAlpha = 1, a9.gu)) {
			for (var lx = hv / hw, ly = hx / hw, mA = (at.a1 + hv) / hw, mB = (at.j7 + hx) / hw, g7 = bL.s.aTc * hw, aTd = bL.s.aTd, a7 = a9.jd - 1; 0 <= a7; a7--) ! function(a7, g7, lx, ly, mA, mB, aTd) {
				var highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[a7];
				if (highlight) g7 *= 2;
				0 === ac.lU[a7] || 0 === ac.gM[a7] || (mA = at.a1 * ((ac.i9[a7] + ac.iA[a7] + 1) / 2 - lx) / (mA - lx) - .5 * g7, lx = at.j7 * ((ac.iB[a7] + ac.iC[a7] + 1) / 2 - ly) / (mB - ly) - .5 * g7, mA > at.a1) || lx > at.j7 || mA < -
					g7 || lx < -g7 || (tB.setTransform(highlight ? hw * 2 : hw, 0, 0, highlight ? hw * 2 : hw, mA, lx), tB.drawImage(aTd[a9.ie ? bc.eW[a7] : 1], 0, 0))
			}(a7, g7, lx, ly, mA, mB, aTd);
			tB.setTransform(hw, 0, 0, hw, 0, 0)
		}
	}
}

function aTX() {
	this.aTc = 28, this.a50 = 0, this.aTb = null;
	var aTf = this.aTd = null;

	function aTi(hB, aTj) {
		var ef, eh, eK, hg, a19 = b6.pJ.ul(hB, hB),
			hH = b6.pJ.getContext(a19, !0),
			hE = b6.pJ.getImageData(hH, hB, hB),
			uw = hE.data,
			kO = (hB >> 1) - .5,
			aTk = .5 + kO;
		for (aTk *= aTk, eh = 0; eh < hB; eh++)
			for (ef = 0; ef < hB; ef++) hg = (hg = ef - kO) * hg + (hg = eh - kO) * hg, uw[eK = 4 * (eh * hB + ef)] = aTj[0], uw[1 + eK] = aTj[1], uw[2 + eK] = aTj[2], uw[3 + eK] = (aTk - hg) * aTj[3] / aTk;
		return hH.putImageData(hE, 0, 0), a19
	}

	function aSo(a7, hH, a19, hB) {
		var ef, y, highlight = __fx.settings.highlightClanSpawns && __fx.clanFilter.inOwnClan[a7];
		if (highlight) hB *= 2;
		0 !== ac.lU[a7] && 0 !== ac.gM[a7] && (ef = ac.i9[a7] + ac.iA[a7] + 1 - hB - 2 >> 1, y = ac.iB[a7] + ac.iC[a7] + 1 - hB - 2 >> 1,
			highlight ? hH.drawImage(a19[a9.ie ? bc.eW[a7] : a7 < a9.jd ? 1 : 0], ef, y, hB, hB) :
			hH.drawImage(a19[a9.ie ? bc.eW[a7] : a7 < a9.jd ? 1 : 0], ef, y))
	}
	this.dU = function() {
		var r6;
		this.a50 = 700,
			function(r6) {
				var hB = r6.aTc;
				if (r6.aTd = [], aTf = [], a9.ie)
					for (var a7 = 0; a7 <= a9.vb; a7++) r6.aTd.push(aTi(hB, bc.aRf[bc.k3[a7]])), aTf.push(aTi(hB >> 1, bc.aRf[bc.k3[a7]]));
				else r6.aTd.push(aTi(hB, bc.aRf[7])), r6.aTd.push(aTi(hB, bc.aRf[4])), aTf.push(aTi(hB >> 1, bc.aRf[7]))
			}(this),
			function(r6, aTl) {
				var a7, aTb = r6.aTb,
					hH = b6.pJ.getContext(aTb, !0),
					eY = a9.eV,
					hB = r6.aTc >> 1;
				hH.imageSmoothingEnabled = !1, hH.setTransform(1, 0, 0, 1, 0, 0), aTl && hH.clearRect(0, 0, aTb.width, aTb.height);
				for (a7 = a9.jd; a7 < eY; a7++) aSo(a7, hH, aTf, hB)
			}(this, null !== (r6 = this).aTb && r6.aTb.width === bO.ej - 2 && r6.aTb.height === bO.ek - 2 || (r6.aTb = b6.pJ.ul(bO.ej - 2, bO.ek - 2), !1)), a9.gu || this.a2X()
	}, this.aRe = aTi, this.a2X = function() {
		for (var eY = a9.jd, hB = this.aTc, aTd = this.aTd, hH = b6.pJ.getContext(this.aTb, !0), a7 = 0; a7 < eY; a7++) aSo(a7, hH, aTd, hB)
	}
}

function d2() {
	function aTm(player) {
		a9.gu ? (ag.aDT(player), ah.aGN(), a9.jz && a9.oa.iS()) : az.aAM(player)
	}
	this.o0 = function(player) {
		return !!aI.a3v(player) && (aJ.yS(player, player === a9.eI ? 21 : 22), aTm(player), !0)
	}, this.oX = function(player) {
		1 === a9.yG && 0 !== ac.lU[player] && 2 !== ac.a1e[player] && aTm(player), a9.yJ--, a9.yI--, aJ.yS(player, 4), b6.fu.gk(2) && aS.lG(!0)
	}
}

function dC() {
	this.aPE = ["rgba(90,90,90,0.88)", "rgba(130,12,12,0.88)", "rgba(12,130,12,0.88)", "rgba(12,12,130,0.88)", "rgba(130,130,12,0.88)", "rgba(130,12,130,0.88)", "rgba(12,130,130,0.88)", "rgba(130,130,130,0.88)", "rgba(0,0,0,0.88)"], this.a8H = [
		"rgb(210,200,200)", "rgb(255,120,120)", "rgb(0,230,0)", "rgb(150,150,255)", "rgb(240,240,25)", "rgb(255,70,255)", "rgb(25,240,240)", b7.mX, "rgb(170,170,170)"
	], this.aTn = [b7.mX, "rgb(255,0,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,255,0)", "rgb(255,0,255)", "rgb(0,255,255)", b7.mX, b7.mO], this.aTo = [b7.mO, b7.mX, b7.mX, b7.mX, b7.mO, b7.mO, b7.mO, b7.mO, b7.mX];
	var aTp = ["255,255,255", "0,0,0", "255,4,4", "200,4,4", "4,255,4", "4,180,4", "255,195,195", "90,3,3", "200,255,200", "3,84,3"],
		aTq = (this.aFs = ["rgba(" + aTp[0] + ",", "rgba(" + aTp[1] + ",", "rgba(" + aTp[2] + ",", "rgba(" + aTp[3] + ",", "rgba(" + aTp[4] + ",", "rgba(" + aTp[5] + ",", "rgba(" + aTp[6] + ",", "rgba(" + aTp[7] + ",", "rgba(" + aTp[8] + ",",
			"rgba(" + aTp[9] + ","
		], this.aFt = ["rgb(" + aTp[0] + ")", "rgb(" + aTp[1] + ")", "rgb(" + aTp[2] + ")", "rgb(" + aTp[3] + ")", "rgb(" + aTp[4] + ")", "rgb(" + aTp[5] + ")", "rgb(" + aTp[6] + ")", "rgb(" + aTp[7] + ")", "rgb(" + aTp[8] + ")", "rgb(" + aTp[
			9] + ")"
		], this.yc = null, this.aRf = [
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
	this.k3 = [0, 1, 2, 3, 4, 5, 6, 7, 8], this.eW = new Uint8Array(a9.eV), this.yz = null, this.aTr = null, this.vh = new Uint16Array(a9.eV), this.vi = new Uint16Array(this.k3.length + 1), this.vj = new Uint16Array(this.k3.length), this.dV =
		function() {
			this.yc = [L(410), L(411), L(412), L(413), L(414), L(415), L(416), L(417), L(418)]
		}, this.dU = function() {
			if (this.eW.fill(0), this.aTs(), a9.ie) {
				9 === a9.jx ? this.aTt() : a9.jz ? function() {
					var colorsData = a9.data.colorsData;
					if (!a9.data.selectableColor)
						for (var a7 = a9.jd - 1; 0 <= a7; a7--) colorsData[a7] = au.iv(262144);
					var aU2 = 0,
						eo = 768,
						aOl = [4 * (colorsData[0] >> 12), 4 * (colorsData[0] >> 6 & 63), 4 * (63 & colorsData[0])],
						teamPlayerCount = a9.data.teamPlayerCount;
					for (a7 = 0; a7 < 9; a7++)
						if (teamPlayerCount[a7]) {
							for (var eb = 0, es = 0; es < 3; es++) eb += Math.abs(aTq[a7][es] - aOl[es]);
							eb < eo && (aU2 = a7, eo = eb)
						} var aU3 = new Uint16Array(9);
					for (a7 = 0; a7 < 9; a7++) aU3[a7] = teamPlayerCount[a7];
					var k3 = bc.k3,
						aU4 = new Uint8Array(9),
						g1 = (k3[0] = 0, 1);
					for (a7 = 1; a7 < 9; a7++) aU3[a7] && (aU4[a7] = g1, k3[g1++] = a7);
					var iu = a9.jd,
						eW = bc.eW;
					aU3[aU2] ? (aU3[aU2]--, eW[0] = aU4[aU2]) : iu = 0;
					var et = 0;
					for (a7 = iu; a7 < a9.vU; a7++) {
						var k2 = k3[et];
						if (aU3[k2]) aU3[k2]--, eW[a7] = aU4[k2];
						else if (a7--, 9 <= ++et) return console.log("error 325")
					}
				}() : this.iS();
				for (var eY = a9.eV, vh = bc.vh, vi = bc.vi, vj = bc.vj, eW = bc.eW, k3 = bc.k3, va = k3.length, dp = new Array(va), a7 = 0; a7 < va; a7++) dp[a7] = [];
				for (a7 = 0; a7 < eY; a7++) dp[k3[eW[a7]]].push(a7);
				for (a7 = 1; a7 <= va; a7++) vi[a7] = vi[a7 - 1] + dp[a7 - 1].length;
				for (a7 = 0; a7 < va; a7++)
					for (var g1 = dp[a7].length, kO = vi[a7], k2 = 0; k2 < g1; k2++) vh[k2 + kO] = dp[a7][k2];
				var jd = a9.jd;
				for (a7 = 0; a7 < va; a7++)
					for (g1 = dp[a7].length, kO = vi[a7], k2 = 0; k2 < g1; k2++)
						if (vh[k2 + kO] >= jd) {
							vj[a7] = k2;
							break
						}
			}
		}, this.aTs = function() {
			for (var a7 = this.k3.length - 1; 0 <= a7; a7--) this.k3[a7] = a7;
			this.yz = [], this.aTr = []
		}, this.aTt = function() {
			for (var a7 = a9.data.teamPlayerCount[7] - 1; 0 <= a7; a7--) this.eW[a7] = 1;
			for (a7 = a9.data.teamPlayerCount[7]; a7 < a9.eV; a7++) this.eW[a7] = 2;
			this.k3[1] = 7, this.k3[2] = 8
		}, this.iS = function() {
			var hP = new Uint8Array(a9.jd),
				hQ = new Uint8Array(a9.jd),
				aTw = new Uint16Array(8),
				aTx = new Uint16Array(this.k3.length);
			this.aTy(hP, hQ, aTw, 1), this.aD6(aTw), this.aTz(aTx, hP, hQ), this.aU0(hP, hQ, aTx), this.aU1()
		}, this.aTy = function(hP, hQ, aU3, aU5) {
			for (var es, e, aU6, eY = this.k3.length - aU5, g = new Uint16Array(eY), colorsData = a9.data.colorsData, a7 = a9.jd - 1; 0 <= a7; a7--) {
				for (es = eY; aU5 <= es; es--) g[es - 1] = Math.abs(4 * (colorsData[a7] >> 12) - aTq[es][0]) + Math.abs(4 * (colorsData[a7] >> 6 & 63) - aTq[es][1]) + Math.abs(4 * (63 & colorsData[a7]) - aTq[es][2]);
				for (aU6 = 768, es = eY - 1; 0 <= es; es--) g[e = (es + a7) % eY] < aU6 && (aU6 = g[e], hP[a7] = e);
				for (aU3[hP[a7]] += 4, aU6 = 768, es = eY - 1; 0 <= es; es--) g[e = (es + a7) % eY] < aU6 && e !== hP[a7] && (aU6 = g[e], hQ[a7] = e);
				aU3[hQ[a7]]++
			}
		}, this.aD6 = function(aU3) {
			for (var es, kQ, eY = this.k3.length - 1, a7 = eY; 0 <= a7; a7--) this.k3[a7] = a7;
			for (a7 = eY - 1; 0 <= a7; a7--) aU3[a7]++;
			for (a7 = 1; a7 <= eY; a7++) {
				for (kQ = 0, es = 1; es < eY; es++) aU3[es] > aU3[kQ] && (kQ = es);
				aU3[kQ] = 0, this.k3[a7] = kQ + 1
			}
		}, this.aTz = function(aTx, hP, hQ) {
			var es, aAz, et, eb, e, m9, rx, aU7 = this.k3.length - 1,
				po = new Uint16Array(aU7),
				aU8 = [],
				aU9 = 0;
			loop: for (var a7 = 0; a7 < a9.jd; a7++)
				if (null !== (aAz = b6.z3.z4(ac.z5[a7]))) {
					for (es = this.yz.length - 1; 0 <= es; es--)
						if (aAz === this.yz[es]) {
							this.aTr[es].push(a7), aU9 = Math.max(aU9, this.aTr[es].length);
							continue loop
						} this.yz.push(aAz), aU8.push(!1), this.aTr.push([a7]), aU9 = Math.max(aU9, 1)
				}
			for (; 2 < a9.vb && aU9 > bH.dl(a9.jd, a9.vb);) a9.vb--, a9.jx--;
			for (es = this.yz.length - 1; 0 <= es; es--) {
				for (eb = -1, et = this.yz.length - 1; 0 <= et; et--) !aU8[et] && (-1 === eb || this.aTr[et].length > this.aTr[eb].length) && (eb = et);
				for (et = aU7 - 1; 0 <= et; et--) po[et] = 1;
				for (et = this.aTr[eb].length - 1; 0 <= et; et--) po[hP[this.aTr[eb][et]]] += 3, po[hQ[this.aTr[eb][et]]]++;
				for (a7 = aU7 - 1; 0 <= a7; a7--) {
					for (e = eb % aU7, et = aU7 - 1; 0 <= et; et--) po[et] > po[e] && (e = et);
					for (m9 = -1, et = a9.vb; 0 < et; et--)
						if (this.k3[et] === e + 1) {
							m9 = et;
							break
						} if (po[e] = 0, -1 !== m9) {
						for (rx = 0, et = a9.vb; 0 < et; et--) aTx[m9] > aTx[et] && rx++;
						if (rx !== a9.vb - 1) {
							for (et = this.aTr[eb].length - 1; 0 <= et; et--) aTx[m9]++, this.eW[this.aTr[eb][et]] = m9;
							break
						}
					}
				}
				aU8[eb] = !0
			}
		}, this.aU0 = function(hP, hQ, aTx) {
			for (var a7, hf, eY = this.k3.length - 1, border = bH.dl(a9.jd, a9.vb), aUA = (0 < a9.jd % a9.vb && border++, new Uint8Array(1 + eY)), es = eY; 1 <= es; es--) aUA[this.k3[es]] = es;
			for (a7 = 0; a7 < a9.jd; a7++) hf = aUA[hP[a7] + 1], 0 === this.eW[a7] && hf <= a9.vb && aTx[hf] < border && (aTx[hf]++, this.eW[a7] = hf);
			for (a7 = 0; a7 < a9.jd; a7++) hf = aUA[hQ[a7] + 1], 0 === this.eW[a7] && hf <= a9.vb && aTx[hf] < border && (aTx[hf]++, this.eW[a7] = hf);
			for (es = a9.vb; 1 <= es; es--)
				for (a7 = a9.jd - 1; 0 <= a7 && !(aTx[es] >= border); a7--) 0 === this.eW[a7] && (aTx[es]++, this.eW[a7] = es)
		}, this.aU1 = function() {
			for (var a7 = a9.jd; a7 < a9.eV; a7++) this.eW[a7] = 1 + a7 % a9.vb
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
		for (var aUB = !1, aUC = !1, eb = 3; 0 <= eb; eb--) {
			var g6 = gE[player][a7] + ea[eb];
			if (aY.aDG(g6, player)) continue loop;
			aUB = aUB || aY.h1(g6), aUC = aUC || aY.aDF(g6)
		}
		aUB ? gF[player].push(gE[player][a7]) : aUC ? ey[player].push(gE[player][a7]) : aY.w3(gE[player][a7], player), gE[player][a7] = gE[player][eY - 1], gE[player].pop(), eY--
	}
}

function gC() {
	ac.gM[fS] -= fT
}

function gD(border) {
	for (var eY = border.length, a7 = eY - 1; 0 <= a7; a7--) aY.wN(fS, border[a7]) || (border[a7] = border[eY - 1], border.pop(), eY--)
}

function gG(border) {
	for (var eY = border.length, a7 = eY - 1; 0 <= a7; a7--) !aY.wN(fS, border[a7]) && aY.eT(border[a7]) && (border[a7] = border[eY - 1], border.pop(), eY--)
}

function gH(border) {
	for (var eb, g6, eY = border.length, ea = aY.ea, a7 = eY - 1; 0 <= a7; a7--)
		for (eb = 3; 0 <= eb; eb--)
			if (g6 = border[a7] + ea[eb], aY.aDG(g6, fS)) {
				ac.gE[fS].push(border[a7]), border[a7] = border[eY - 1], border.pop(), eY--;
				break
			}
}

function gI() {
	for (var eb, g6, ea = aY.ea, a7 = fT - 1; 0 <= a7; a7--)
		for (eb = 3; 0 <= eb; eb--) g6 = fV[a7] + ea[eb], aY.aDH(fS, g6) && aY.aDI(g6) && (ac.gE[fS].push(g6), aY.g3(g6, fS))
}

function gJ() {
	var ef, eh;
	loop: for (; ac.iB[fS] < ac.iC[fS];) {
		for (ef = ac.iA[fS]; ef >= ac.i9[fS]; ef--)
			if (aY.wN(fS, 4 * (ac.iB[fS] * bO.ej + ef))) break loop;
		ac.iB[fS]++
	}
	loop: for (; ac.iB[fS] < ac.iC[fS];) {
		for (ef = ac.iA[fS]; ef >= ac.i9[fS]; ef--)
			if (aY.wN(fS, 4 * (ac.iC[fS] * bO.ej + ef))) break loop;
		ac.iC[fS]--
	}
	loop: for (; ac.i9[fS] < ac.iA[fS];) {
		for (eh = ac.iC[fS]; eh >= ac.iB[fS]; eh--)
			if (aY.wN(fS, 4 * (eh * bO.ej + ac.i9[fS]))) break loop;
		ac.i9[fS]++
	}
	loop: for (; ac.i9[fS] < ac.iA[fS];) {
		for (eh = ac.iC[fS]; eh >= ac.iB[fS]; eh--)
			if (aY.wN(fS, 4 * (eh * bO.ej + ac.iA[fS]))) break loop;
		ac.iA[fS]--
	}
}

function eR(player, il) {
	return 0 === bc.eW[player] || bc.eW[player] !== bc.eW[il]
}

function h7(player, il) {
	for (var e, aUD = aZ.fe(player), a7 = 0; a7 < aUD; a7++)
		if (0 === aZ.ff(player, a7))
			if ((e = aZ.fk(player, a7)) === a9.eV) {
				if (il === a9.eV) return !1;
				if (h5(il)) return !0
			} else if (b6.fu.kS(e))
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

function aDP(player) {
	for (var a7, g7, eY = ac.gE[player].length, ea = aY.ea, eb = 3; 0 <= eb; eb--)
		for (g7 = ea[eb], a7 = 0; a7 < eY; a7++)
			if (aY.ip(ac.gE[player][a7]) && aY.eP(ac.gE[player][a7] + g7)) return !0;
	return !1
}

function h9(a1h, a1i) {
	for (var a7, dk, g7, g6, aRr = ac.gE[a1h].length, aRs = ac.gE[a1i].length, ea = (aRs < aRr && (dk = a1h, a1h = a1i, a1i = dk, dk = aRr, aRr = aRs, 0), aY.ea), eb = 3; 0 <= eb; eb--)
		for (g7 = ea[eb], a7 = 0; a7 < aRr; a7++)
			if (g6 = ac.gE[a1h][a7] + g7, aY.g8(g6) && aY.eQ(g6) === a1i) return !0;
	return !1
}

function aDQ(a1h, a1i) {
	for (var a7, g7, g6, aRr = ac.gE[a1h].length, ea = aY.ea, eb = 3; 0 <= eb; eb--)
		for (g7 = ea[eb], a7 = 0; a7 < aRr; a7++)
			if (aY.ip(ac.gE[a1h][a7]) && (g6 = ac.gE[a1h][a7] + g7, aY.g8(g6)) && aY.eQ(g6) === a1i) return !0;
	return !1
}

function dP() {
	this.ol = new aUE
}

function aUE() {
	this.h4 = function(player) {
		b6.fu.a1f(player) && aJ.ye(80, L(419), 637, 0, b7.nF, b7.mU, -1, !1)
	}, this.a3X = function() {
		aJ.ye(80, L(420), 637, 0, b7.nF, b7.mU, -1, !1)
	}, this.no = function(player) {
		b6.fu.a1f(player) && aJ.ye(80, L(421), 637, 0, b7.nF, b7.mU, -1, !1)
	}
}

function aUF() {
	this.aUG = 0, this.iS = function() {
		aK.iS(), aV.iS(), at.iS(), aw.s.iS(), ar.aCb(), bb.dc && (bb.dc = !1, aW.tA())
	}
}

function aUH() {
	this.ln = bb.ln, this.e0 = 0, this.aUG = 0, this.aCY = 0, this.aUI = null, this.aUJ = 7, this.a51 = 0, this.dU = function() {
		this.aCY = 0, this.aUI = [], this.e0 = 0, this.aUG = 0
	}, this.aOD = function(a8) {
		var a7;
		if (a9.gu) this.a8y(a8);
		else if (this.aUI.push(a8), 2 === a9.yG) {
			for (a7 = 0; a7 < this.aUI.length; a7++) b4.nd.iS(this.aUI[a7]);
			this.aUI = []
		}
	}, this.a8y = function(a8) {
		b4.nd.iS(a8), b5.iS(), aS.a8y(this.aCY), this.aCY === a9.a2d ? (a9.oa.iS(), this.aCY = 0, this.e0 = 0, this.aUG = 0, this.ln = bb.ln) : (this.aCY++, ab.a2W(), ab.lG(!0), bX.a9W())
	}, this.iS = function() {
		at.iS(), a9.gu ? (bb.dc = aS.a8y(-1) || bb.dc, lI()) : (0 !== this.e0 || bb.ln >= this.ln && (this.ln += bb.a8x * Math.floor(1 + (bb.ln - this.ln) / bb.a8x), 2 === a9.yG ? l7() : this.aUK(), this.e0++, 27 < bb.ln - this.a51)) && this
		.aUL(), lD(), bb.dc && (bb.dc = !1, wQ()), this.a51 = bb.ln
	}, this.aUL = function() {
		bb.dc = !0, lF(), this.e0 = 0
	}, this.aUK = function() {
		var tn, a7;
		if (this.aUG !== 7 * this.aCY) l9(), bX.a9W();
		else {
			tn = !1;
			loop: for (; this.aUM() && (tn = !0, l9(), 2 !== a9.yG) && 0 < this.aUI.length;)
				for (a7 = this.aUJ - 2; 0 <= a7; a7--)
					if (l9(), 2 === a9.yG) break loop;
			tn ? bX.a9W() : (l7(), bX.a2Z())
		}
	}, this.aUM = function() {
		return 0 < this.aUI.length && (this.aCY++, b4.nd.iS(this.aUI[0]), this.aUI.shift(), !0)
	}
}

function aUN() {
	var aUO, aUP, aUQ, aCY, aUR, e0 = 0,
		ln = bb.ln;

	function aUU() {
		! function() {
			if (!a9.gu) return;
			if (a9.jz) return;
			if (aUR % 7 != 0) aUR++;
			else if (aCY === a9.a2d) {
				if (!aUX()) return;
				aS.a8y(aCY), a9.oa.iS()
			} else {
				if (!aUX()) return;
				aUR++, aCY++, ab.a2W(), ab.lG(!0)
			}
			return 1
		}() && aUX() && l9()
	}

	function aUV() {
		e0 = 0, (a9.gu ? (bb.dc = aS.a8y(aCY - (aUR % 7 == 0 ? 0 : 1) + aUR % 7 / 7) || bb.dc, lI) : aI.gj || !b8.a2z ? lI : (bb.dc = !0, lF))()
	}

	function aUX() {
		var a7, eY, aUY = b5.oY.aPO,
			fG = b5.oY.aPP,
			fI = b5.oY.aPQ,
			fK = b5.oY.aPR,
			aUZ = b5.oY.aPS,
			aUa = b5.oY.aPT;
		if (!(aUO >= aUa.length)) {
			if (aUa = aUa[aUO], aUZ[aUO]) {
				for (eY = aUP + aUa, a7 = aUP; a7 < eY; a7++) b4.nd.oL(aUY[a7], fG[a7], fI[a7], fK[a7]);
				aUP += aUa, aUO++
			} else ++aUQ >= aUa && (aUO++, aUQ = 0);
			return 1
		}
		aJ.zb("Replay file smaller than expected."), b8.a0T(!1), a9.yG = 2
	}
	this.aUG = 0, this.dU = function() {
		aUR = aCY = aUQ = aUP = aUO = 0
	}, this.iS = function() {
		var aSE;
		at.iS(), b8.a6Q() < 1.7 ? 0 === e0 ? bb.ln >= ln && (aSE = bb.a8x / b8.a6Q(), ln += aSE * Math.floor(1 + (bb.ln - ln) / aSE), 2 === a9.yG || aI.gj || !b8.a2z ? l7() : (aUU(), bX.a9W()), e0++) : aUV() : function() {
			var aSE;
			if (bb.ln >= ln)
				if (2 === a9.yG || aI.gj || !b8.a2z) l7(), ln = bb.ln;
				else {
					for (aSE = bb.a8x / b8.a6Q(), 16 < (bb.ln - ln) / aSE && (ln = bb.ln - 16 * aSE); bb.ln >= ln && 2 !== a9.yG;) ln += aSE, aUU();
					bX.a9W()
				} aUV()
		}(), lD(), bb.dc && (bb.dc = !1, wQ())
	}, this.yQ = function() {
		aUO !== b5.oY.aPT.length && aUO + 1 !== b5.oY.aPT.length && aJ.zb("Replay file larger than expected.")
	}
}

function aUb() {
	var e0 = 0,
		ln = bb.ln;
	this.aUG = 0, this.iS = function() {
		at.iS(), a9.gu ? lI() : 0 === e0 ? bb.ln >= ln && (ln += bb.a8x * Math.floor(1 + (bb.ln - ln) / bb.a8x), 2 === a9.yG || aI.gj ? l7() : (l9(), bX.a9W()), e0++) : ((aI.gj ? lI : (bb.dc = !0, lF))(), e0 = 0), lD(), bb.dc && (bb.dc = !1,
		wQ())
	}
}

function dK() {
	this.yP = null, this.dc = !1, this.ln = 0, this.a8x = 56;
	var aUc = 0;

	function aUd() {
		bb.ln = aUc = performance.now(), bb.yP.iS(), window.requestAnimationFrame(aUd)
	}
	this.dU = function() {
		this.a2x(), window.requestAnimationFrame(aUd), this.ln = performance.now()
	}, this.a2o = function() {
		a9.gi ? (this.yP = new aUN, this.yP.dU()) : a9.jz ? this.yP = new aUb : (this.yP = new aUH, this.yP.dU())
	}, this.a2x = function() {
		this.yP = new aUF, this.dc = !0
	}, this.iS = function() {
		this.yP.aUG++
	}, this.ja = function() {
		return this.yP.aUG
	}, this.aNq = function() {
		var dk = performance.now();
		dk < aUc + 1e3 || (this.ln = dk, this.yP.iS())
	}
}

function cm() {
	var lh = 0,
		aUe = !0;

	function aUg(p0) {
		8 !== aW.zU() || 2 !== ac.a1e[a9.eI] && (0 !== ac.lU[a9.eI] || a9.gu) || aJ.a4i(p0)
	}
	this.iS = function() {
		var dk, a54;
		bb.ln > lh && (lh = bb.ln + 2500, dk = new Date, a54 = dk.getUTCSeconds(), aUe ? a54 < 45 && (aUe = !1) : a54 < 45 || (aUe = !0, (a54 = dk.getUTCMinutes() + 1) % 15 == 0 && aUg(30 === a54 ? "Upcoming Battle Royale Contest!" :
			"Upcoming Alliance Contest!")))
	}
}

function cg() {
	var lx, ly, mA, mB, aUh = 0,
		aUi = 0;

	function aUk() {
		return Math.pow(Math.pow(mA - lx, 2) + Math.pow(mB - ly, 2), .5)
	}

	function aUj(e) {
		lx = at.pP * e.touches[0].clientX, ly = at.pP * e.touches[0].clientY, mA = at.pP * e.touches[1].clientX, mB = at.pP * e.touches[1].clientY
	}
	this.zv = function(e) {
		return 1 < e.touches.length ? (aUi = bb.ln, aUh = 3, aUj(e), aH.qm(), !0) : (aUh = 0, !1)
	}, this.zw = function(e) {
		var aHA, hd, he;
		return 0 !== a9.yG && 1 < e.touches.length && (aUh = Math.max(aUh - 1, 0), aD.mF() && (aHA = aUk(), aUj(e), e = aUk(), hd = Math.floor((lx + mA) / 2), he = Math.floor((ly + mB) / 2), aO.a6q(hd, he, Math.max(.125, e) / Math.max(.125,
			aHA)), bb.dc = !0), !0)
	}, this.a0J = function() {
		var ef, eh;
		return !!(aUh && (aUh = 0, bb.ln < aUi + 500)) && (ef = (lx + mA) / 2, eh = (ly + mB) / 2, aH.a0D(ef, eh), aH.click(ef, eh, !0) && (bb.dc = !0), !0)
	}
}

function cv() {
	this.size = 0, this.e0 = 0, this.a8 = null, this.dU = function(a8) {
		this.e0 = 0, this.a8 = a8, this.size = a8.length
	}, this.zh = function() {
		this.a8 = null
	}, this.oK = function(size) {
		for (var f0 = 0, a8 = this.a8, mF = this.e0 + size - 1, a7 = this.e0; a7 <= mF; a7++) f0 |= (a8[a7 >> 3] >> 7 - (7 & a7) & 1) << mF - a7;
		return this.e0 += size, this.e0 > 8 * this.size && console.error("Unwrapper Overflow"), f0
	}, this.aOR = function(size) {
		var es = size >> 1;
		return (1 << es) * this.oK(size - es) + this.oK(es)
	}, this.aOQ = function(aUl) {
		return this.size === b9.aOK(aUl)
	}, this.aPg = function(vE, aUm, aUn) {
		var g1 = this.oK(vE);
		if (!g1) return null;
		for (var vE = Math.max(g1, aUn), g = new(aUm <= 8 ? Uint8Array : aUm <= 16 ? Uint16Array : Uint32Array)(vE), a7 = 0; a7 < g1; a7++) g[a7] = this.oK(aUm);
		aUn = g[g1 - 1];
		return aUn && g.fill(aUn, g1), g
	}, this.aPh = function(vE, aUo, aUn) {
		var g1 = this.oK(vE);
		if (!g1) return null;
		for (var vE = Math.max(g1, aUn), g = new Array(vE), a7 = 0; a7 < g1; a7++) g[a7] = this.aPe(aUo);
		return g.fill(g[g1 - 1], g1), g
	}, this.aPe = function(vE) {
		return bC.uK.uO(this.oK(vE))
	}, this.aPf = function() {
		var p0 = bB.rg.rh(bB.rg.ri(this.oK(30))),
			p0 = b6.z3.a2R(p0, "_", "/");
		p0 = b6.z3.a2R(p0, "-", "+");
		for (var aUp = "";
			(p0.length + aUp.length) % 4;) aUp += "=";
		p0 = "data:image/png;base64," + p0 + aUp;
		var aDv = new Image;
		aDv.onload = function() {
			b5.aEK.aEL(aDv), aDv.onload = null, aDv = null
		}, aDv.src = p0
	}
}

function dE() {
	this.aQW = 0, this.aQX = 0, this.aQS = 0, this.aQT = 0, this.aQU = 0, this.aQV = 0, this.a9X = [0, 0, 0, 0], this.mE = function() {
		this.aQW = aO.wS(), this.aQX = aO.wT(), this.aQS = -this.aQW, this.aQT = -this.aQX, this.aQU = at.a1 / hw, this.aQV = at.j7 / hw, this.a9X[0] = Math.floor(this.aQS), this.a9X[1] = Math.floor(this.aQT), this.a9X[2] = Math.floor(this.a9X[
			0] + this.aQU + 1), this.a9X[3] = Math.floor(this.a9X[1] + this.aQV + 1), bX.a9U = !0
	}
}

function ch() {
	var a5Z, lh;
	this.dU = function() {
		a5Z = 1, lh = 0
	}, this.iS = function() {
		0 < a5Z && (lh = 0 === lh ? bb.ln + 16 : lh, a5Z = (a5Z -= .001 * (bb.ln - lh)) < 0 ? 0 : a5Z, lh = bb.ln, bb.dc = !0)
	}, this.tA = function() {
		0 < a5Z && (tB.fillStyle = "rgba(0,0,0," + a5Z + ")", tB.fillRect(0, 0, at.a1, at.j7))
	}
}

function a2() {
	this.size = 0, this.e0 = 0, this.a8 = null, this.dU = function(a8) {
		this.e0 = 0, this.a8 = a8, this.size = a8.length
	}, this.a3 = function(aUl) {
		return this.dU(new Uint8Array(this.aOK(aUl))), this.a8
	}, this.zh = function() {
		this.a8 = null
	}, this.a4 = function(size, a56) {
		for (var a8 = this.a8, mF = this.e0 + size - 1, a7 = this.e0; a7 <= mF; a7++) a8[a7 >> 3] |= (a56 >> mF - a7 & 1) << 7 - (7 & a7);
		this.e0 += size, this.e0 > 8 * this.size && console.error("Wrapper Overflow")
	}, this.aOJ = function(size, a56) {
		var es = size >> 1,
			eb = 1 << es;
		this.a4(size - es, bH.dl(a56, eb)), this.a4(es, a56 % eb)
	}, this.aUs = function(size) {
		for (var a8 = this.a8, mF = this.e0 + size, a7 = this.e0; a7 < mF; a7++) a8[a7 >> 3] &= 255 ^ 128 >>> (7 & a7)
	}, this.aOK = function(aUl) {
		return aUl + 7 >> 3
	}, this.aUt = function(g, iu, mF, aUu) {
		for (var a7 = iu; a7 < mF; a7++) this.a4(aUu, g[a7])
	}
}

function cu() {
	this.dU = function() {
		this.g = [], this.e0 = 0
	}, this.aOn = function() {
		return new Uint8Array(this.g)
	}, this.a4 = function(aUv, value) {
		for (var g = this.g, mF = this.e0 + aUv - 1, aUw = 1 + (mF >> 3); g.length < aUw;) g.push(0);
		for (var a7 = this.e0; a7 <= mF; a7++) g[a7 >> 3] |= (value >> mF - a7 & 1) << 7 - (7 & a7);
		this.e0 += aUv
	}, this.db = function(g, vE, aUm) {
		var aUx = b6.pT.a16(g);
		this.a4(vE, aUx);
		for (var a7 = 0; a7 < aUx; a7++) this.a4(aUm, g[a7])
	}, this.aPy = function(g, vE, aUo) {
		var aUx = b6.pT.a16(g);
		this.a4(vE, aUx);
		for (var a7 = 0; a7 < aUx; a7++) this.aPw(g[a7], aUo)
	}, this.aPw = function(p0, vE) {
		var eY = p0.length;
		this.a4(vE, eY);
		for (var a7 = 0; a7 < eY; a7++) this.a4(16, p0.charCodeAt(a7))
	}, this.aPx = function(a19) {
		var aUy = (a19 = a19.toDataURL()).split(",");
		if (aUy.length < 2) console.log("error 266");
		else {
			a19 = b6.z3.a2R(a19 = aUy[aUy.length - 1], "/", "_"), a19 = b6.z3.a2R(a19, "\\+", "-");
			var a19 = b6.z3.a2R(a19, "=", ""),
				uX = bC.rg.uU(a19),
				eY = uX.length;
			this.a4(30, eY);
			for (var a7 = 0; a7 < eY; a7++) this.a4(6, uX[a7])
		}
	}
}
a(), self.aiCommand746 = function(f0) {
	0 === f0 ? bn() : 1 !== f0 || !u || 1 !== u.id || u.f1 < 14 || bF.f2()
}, setTimeout(bn, 1e4), window.onload = function() {
	bn()
};